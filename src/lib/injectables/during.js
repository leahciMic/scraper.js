module.exports = function duringFactory() {
  return function during(
    expression,
    delay = 100,
    errorMessage = `Expression was not true after ${delay}ms`,
  ) {
    return new Promise((resolve, reject) => {
      window.setTimeout(() => {
        if (expression()) {
          resolve(true);
          return;
        }
        reject(new Error(errorMessage));
      }, delay);
    });
  };
};
