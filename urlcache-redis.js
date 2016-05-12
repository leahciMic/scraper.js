import sha256 from './lib/sha256.js';
import cacheManager from 'cache-manager';
import redisStore from 'cache-manager-redis';
import bluebird from 'bluebird';

const redisCache = cacheManager.caching({
  store: redisStore,
  db: 0,
  ttl: 86400,
});

bluebird.promisifyAll(redisCache);

function getCacheKey(url) {
  return `scraperjs-url-cache:${sha256(url)}`;
}

export default {
  get(url) {
    return redisCache.getAsync(getCacheKey(url));
  },
  set(url, value, ttl) {
    // redisCache expects ttl in seconds not ms
    return redisCache.setAsync(getCacheKey(url), value, ttl / 1000);
  },
};
