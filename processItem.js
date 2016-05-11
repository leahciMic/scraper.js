import _ from 'lodash/fp';

export function processItem(browser, url, fn) {
  browser.navigate(url);
  browser.injectJQuery();
  return browser.runInContextOfJquery(fn)
    .then(_.update('queue', _.uniq));
}
