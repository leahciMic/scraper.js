const getJquerySource = require('./getJquerySource');

module.exports = async function injectJQuery(browser) {
  await browser.evaluate(`
    var _old$ = window.$;
    var _oldjQuery = window.jQuery;

    ${getJquerySource()};

    window.$scraperJS = window.jQuery;
    window.$ = _old$;
    window.jQuery = _oldjQuery;
  `);
};
