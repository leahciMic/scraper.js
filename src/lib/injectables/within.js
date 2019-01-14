module.exports = function withinFactory() {
  return function within(
    expression,
    timeout = 45500,
    delay = 30,
    errorMessage = `Timeout after ${timeout}ms waiting for expression to be true`,
  ) {
    const startTime = performance.now();
    return new Promise((resolve, reject) => {
      function checkExpression() {
        if (expression()) {
          resolve(true);
          return;
        }

        if (performance.now() - startTime < timeout) {
          window.setTimeout(checkExpression, delay);
          return;
        }

        reject(new Error(errorMessage));
      }
      checkExpression();
    });
  };
};
