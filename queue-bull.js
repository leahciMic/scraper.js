import createBullQueue from 'bull';

export default function createQueue(name) {
  const queue = createBullQueue(name);
  return {
    process(fn) {
      const callbackWrapper = (job, done) => fn(job.data, done);
      const promiseWrapper = job => fn(job.data);

      queue.process(fn.length === 2 ? callbackWrapper : promiseWrapper);
    },
    add(queueItem) {
      return queue.add(queueItem);
    },
  };
}
