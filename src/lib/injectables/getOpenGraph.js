module.exports = function getOpenGraph() {
  return () => Array.from(document.querySelectorAll('meta[property^=og]'))
    .reduce((accum, current) => {
      Object.assign(
        accum,
        { [current.getAttribute('property').replace(/^og:/, '')]: current.getAttribute('content') },
      );
      return accum;
    }, {});
};
