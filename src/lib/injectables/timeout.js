module.exports = function timeoutConstructor() {
  return function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
};
