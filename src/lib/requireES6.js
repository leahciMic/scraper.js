export default function requireES6(filename) {
  const module = require(filename); // eslint-disable-line global-require
  return module.default || module;
}
