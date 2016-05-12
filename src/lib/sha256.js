import crypto from 'crypto';

export default function sha256(str) {
  const hash = crypto.createHash('sha256');
  hash.update(str);
  return hash.digest('hex');
}
