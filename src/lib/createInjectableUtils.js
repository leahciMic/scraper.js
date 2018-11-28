const Injectable = require('./Injectable');

const data = require('./injectables/data-util');
const queue = require('./injectables/queue-util');
const within = require('./injectables/within');
const during = require('./injectables/during');
const timeout = require('./injectables/timeout');
const queueAll = require('./injectables/queueAll');
const visibleClone = require('./injectables/visibleClone');
const getLDJSON = require('./injectables/getLDJSON');
const getSchema = require('./injectables/getSchema');
const getOpenGraph = require('./injectables/getOpenGraph');
const pathTo = require('./injectables/pathTo');

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
    visibleClone,
    getLDJSON,
    getSchema,
    getOpenGraph,
    onRedirect() {
      const onRedirect = (method) => {
        onRedirect.redirectMethod = method;
      };
      onRedirect.redirectMethod = undefined;
      return onRedirect;
    },
    pathTo,
    $() {
      return window.$scraperJS;
    },
  });

  return injectable;
};
