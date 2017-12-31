const getZeptoSource = require('./getZeptoSource');

module.exports = async function injectZepto(browser) {
  await browser.evaluate(`
    ${getZeptoSource()}
    if (window.Zepto === window.$) {
      delete window.$;
    }
    window.$scraperJS = window.Zepto;
  `);
};
