module.exports = function getLDJSONFactory() {
  const badCodes = [
    10,
    9,
  ].map(x => String.fromCodePoint(x));

  const stripUglyChars = str => str.replace(new RegExp(badCodes.join('|'), 'g'), '');

  return () => Array.from(
    document.querySelectorAll('script[type="application/ld+json"]'),
  )
    .map((item) => {
      try {
        const parsedJSON = JSON.parse(stripUglyChars(item.textContent));
        const ldJSON = Array.isArray(parsedJSON) ? parsedJSON : [parsedJSON];
        return ldJSON.map(obj => [obj['@type'], obj]);
      } catch (err) {
        console.warn(err);
        return undefined;
      }
    })
    .filter(Boolean)
    .reduce((accum, values) => [...accum, ...values], [])
    .reduce((previous, [key, value]) => {
      Object.assign(previous, {
        [key]: previous[key] || [],
      });
      previous[key].push(value);
      return previous;
    }, {});
};
