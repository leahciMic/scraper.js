module.exports = function queueAllConstructor() {
  return function queueAll(firstParam, conf = {}) {
    let $els;

    if (typeof firstParam === 'string') {
      $els = $(firstParam); // eslint-disable-line no-undef
    } else {
      $els = firstParam;
    }

    $els
      .map((i, x) => $(x).prop('href')).get() // eslint-disable-line no-undef
      // eslint-disable-next-line no-undef
      .forEach(href => queue(Object.assign({ url: href }, conf)));
  };
};
