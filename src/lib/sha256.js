import crypto from 'crypto';

module.exports = function sha256(str) {
  const hash = crypto.createHash('sha256');
  hash.update(str);
  return hash.digest('hex');
};
