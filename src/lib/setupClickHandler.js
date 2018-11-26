module.exports = async function setupClickHandler(browser) {
  await browser.evaluate(() => {
    window.$scraperJS.fn.click = function click() {
      if (this.get(0)) {
        this.get(0).click();
      }
      console.warn('No item to click');
    };
  });
};
