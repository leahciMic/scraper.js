const { URL } = require('url');

module.exports = function shortenUrl(url, length = 40) {
  const { pathname, search } = new URL(url);
  const path = `${pathname}${search}`;
  if (path.length < length) {
    return path;
  }

  const start = path.substr(0, Math.floor((length - 3) / 2));

  const end = path.substr(-(length - 3 - start.length));
  return `${start}...${end}`;
};
