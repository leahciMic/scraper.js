module.exports = function bash() {
  const TIME_BETWEEN = 604800000;
  return {
    name: 'Bash.org',
    start: {
      url: 'http://www.bash.org/?random',
      method: 'home',
    },
    use: 'browser',
    rateLimit: { max: 3, duration: 1000 },
    timeBetween: TIME_BETWEEN,
    home({ data }) {
      data(
        Array.from(document.querySelectorAll('p.qt')).map(i => i.textContent),
      );
    },
  };
};
