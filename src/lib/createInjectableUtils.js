const Injectable = require('./Injectable');

const data = require('./injectables/data-util');
const queue = require('./injectables/queue-util');
const within = require('./injectables/within');
const during = require('./injectables/during');
const timeout = require('./injectables/timeout');
const queueAll = require('./injectables/queueAll');

module.exports = function createInjectableUtils(queueItem) {
  const injectable = new Injectable();

  injectable.register({
    timeout,
    queueAll,
    queueItem,
    queue,
    data,
    within,
    during,
    $() {
      return window.$scraperJS;
    },
  });

  return injectable;
};
