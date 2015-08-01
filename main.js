var bluebird = require('bluebird');
var assign = require('lodash.assign');
var webdriver = require('selenium-webdriver');
var Redis = require('redis');
var fs = bluebird.promisifyAll(require('fs'));
var redis = bluebird.promisifyAll(Redis.createClient());
var By = webdriver.By;
var EventEmitter = require('events').EventEmitter;
var util = require('util');
var mkdirp = require('mkdirp-then');
var NUMBER_OF_INSTANCES = 1;

module.exports = function(config) {
  var scraperjs = Object.create(EventEmitter.prototype, {
    go: function() {
      scraperjs.emit('init', scraper);
    }
  });
};

var getBrowser = function() {
  return new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.firefox())
    .build();
};

var initScrapers = function() {
  var Scrapers = {};
  return enumerateScrapers()
    .then(function(files) {
      var promises = files.map(function(file) {
        var name = file.replace(/\.js$/, '');
        var constructorFn = require('./scrapers/' + file);

        var createInstance = function() {
          var browser = getBrowser();

          var store = function(key, value) {
            var promise = bluebird.resolve();
            var filename = key;
            var directory = './store/' + name + '/';

            if (key.indexOf('/')) {
              key = key.split('/');
              filename = key.pop();
              directory += key.join('/');
              promise = promise.then(mkdirp(directory));
            }

            return promise.then(function() {
              return fs.writeFileAsync(directory + '/' + filename, value);
            });
          };

          var buildScraper = function(base) {
            return function(selector) {
              return {
                text: function() {
                  // console.log('getting text');
                  return base.findElements(By.css(selector)).then(function(elements) {
                    // console.log('found elements', elements);
                    if (!elements.length) {
                      return undefined;
                    }
                    return elements[0].getText();
                  });
                },
                attr: function(name) {
                  return base.findElements(By.css(selector)).then(function(elements) {
                    if (!elements.length) {
                      return undefined;
                    }
                    return elements[0].getAttribute(name);
                  });
                },
                map: function(fn) {
                  // console.log(base, 'base');
                  return base.findElements(By.css(selector)).then(function(elements) {
                    // console.log('found a bunch of elements return map', elements);
                    return bluebird.map(elements, function(webElement) {
                      var ret = fn(buildScraper(webElement));
                      // console.log('return from fn');
                      if (!ret.then) {
                        // console.log('returning bluebird props');
                        return bluebird.props(ret);
                      }
                    }).all();
                  });
                }
              };
            };
          };

          var scraper = buildScraper(browser);

          assign(scraper, {
            store: store,
            queueLink: function(link, fn) {
              redis.hsetnx(name + ':' + link, 'function', fn);
              return redis.hsetnxAsync(name + ':' + link, 'status', 'queued').then(function(success) {
                if (success) {
                  return redis.lpushAsync(name + ':queue', link);
                }
              });
            },
            queueLinks: function(selector, fn, changeFn) {
              changeFn = changeFn || function(link) { return link; };
              return browser.findElements(By.css(selector)).then(function(links) {
                return bluebird.all(links.map(function(link) {
                  return link.getAttribute('href').then(function(href) {
                    href = changeFn(href);
                    // console.info('Set name' + ':' + href + ' status to queued if not exists');
                    redis.hsetnx(name + ':' + href, 'function', fn);
                    return redis.hsetnxAsync(name + ':' + href, 'status', 'queued').then(function(success) {
                      if (success) {
                        // console.info('Add ' + href + ' to ' + name + ':queue with callback ' + fn);
                        return redis.lpushAsync(name + ':queue', href);
                      }
                    });
                  });
                }));
              });
            }
          });

          var instance = constructorFn(browser, scraper, By, webdriver.until);

          instance.browser = browser;
          instance.scraper = scraper;

          return instance;
        };

        Scrapers[name] = {
          createInstance: function(index) {
            var self = this;
            return new bluebird.Promise(function(resolve) {
              webdriver.promise.createFlow(function() {
                var instance = createInstance();
                self.instances.push(instance);
                resolve(instance.init(index));
              });
            });
          },
          instances: []
        };

        mkdirp('./store/' + name); //.then(Scrapers[name].createInstance());

        var instancePromises = [];
        for (var i = 0; i < NUMBER_OF_INSTANCES; i++) {
          instancePromises.push(Scrapers[name].createInstance(i));
        }

        return bluebird.all(instancePromises);
      });
      return bluebird.all(promises);
    })
    .then(function() {
      return Scrapers;
    });
};

var checkEmpty = function(scrapers) {
  return bluebird.all(Object.keys(scrapers).map(function(scraperName) {
    return redis.llenAsync(scraperName + ':queue').then(function(length) {
      if (length === 0) {
        return scrapers[scraperName].instances[0].onEmpty();
      }
    });
  })).then(function() {
    console.log('Finished checking for empty queues');
    return scrapers;
  });
};

var checkInProgress = function(scrapers) {
  return bluebird.all(Object.keys(scrapers).map(function(scraperName) {
    return redis.lpopAsync(scraperName + ':inprogress').then(function(queueItem) {
      if (!queueItem) {
        throw new Error('no more in progress');
      }
      return redis.hgetAsync(scraperName + ':' + queueItem, 'status').then(function(status) {
        if (status === 'queued' || status === 'error') {
          console.log(
            'Restored queue item ' + queueItem + ' as it ' +
            (status === 'queued' ? 'never completed' : 'failed')
          );
          return redis.rpushAsync(scraperName + ':queue', queueItem);
        } else {
          console.log('ignoring ', queueItem, status);
          // console.log('Ignoring ' + queueItem + ' because it is marked as complete');
        }
        return;
      });
    }).then(checkInProgress).catch(function() {
      console.log('Finished checking in progress');
      return bluebird.resolve();
    });
  })).then(function() {
    return scrapers;
  });
};



initScrapers().then(checkInProgress).then(checkEmpty).then(function(scrapers) {
  // ok so for the multiple instances some changes i think i'm going to need:
  // check the queue first and run emptyQueue (we only need one instance to do this)
  // once that is done, spawn the number of instances :)
  Object.keys(scrapers).forEach(function(scraperName) {
    var i;
    for (i = 0; i < NUMBER_OF_INSTANCES; i++) {
      var flow = webdriver.promise.controlFlow();
      (function(instanceIndex) {
        flow.execute(function() {
          var next = function() {
            return redis.rpoplpushAsync(scraperName + ':queue', scraperName + ':inprogress').then(function(queueItem) {
              if (!queueItem) {
                throw new Error('we are done!');
              }
              return redis.hgetallAsync(scraperName + ':' + queueItem).then(function(data) {
                console.log('Get ' + queueItem + ' using ' + instanceIndex);
                return scrapers[scraperName].instances[instanceIndex].browser.get(queueItem).then(function() {
                  console.log('Got ' + queueItem + ' using ' + instanceIndex);
                  return bluebird.try(scrapers[scraperName].instances[instanceIndex][data.function])
                    .then(function() {
                      console.log('Completed work on instance ' + instanceIndex);
                      return redis.hsetAsync(scraperName + ':' + queueItem, 'status', 'complete');
                    })
                    .catch(function(error) {
                      console.error('An error occurred', error);
                      console.error(error.stack);
                      console.error('Adding queueItem to failed queue', queueItem);
                      var addToFailQueue = redis.lpushAsync(scraperName + ':failed', queueItem);
                      var setFailed = redis.hsetAsync(scraperName + ':' + queueItem, 'status', 'error');
                      return bluebird.all([addToFailQueue, setFailed]);
                    });
                });
              });
            }).then(next);
          };
          next();
        });
      })(i);
    }
  });
});
