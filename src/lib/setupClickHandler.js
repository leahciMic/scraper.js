module.exports = async function setupClickHandler(browser) {
  await browser.evaluate(() => {
    window.$scraperJS.fn.click = function click() {
      this.get(0).click();
    };
  });
};
