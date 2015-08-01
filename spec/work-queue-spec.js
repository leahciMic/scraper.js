'use strict';

const proxyquire = require('proxyquire');
const redis = require('./mocks/redis.js');
const WorkQueue = proxyquire
    .noCallThru()
    .load('../lib/work-queue.js', {
      redis: redis
    });

describe('WorkQueue', () => {
  let workQueue;

  beforeEach(() => {
    workQueue = new WorkQueue({id: 'foobar'});
  });

  it('should be able to push/retrieve an item to/from a queue', (done) => {
    let metadata = {
      foo: 'bar'
    };

    workQueue.push('foobar', 'test', metadata).then(() => {
      workQueue.next().then((queueItem) => {
        expect(queueItem).toEqual({
          url: 'foobar',
          fn: 'test',
          meta: metadata
        });
        done();
      });
    });
  });

  it('should get undefined when queue is empty', (done) => {
    workQueue.next().then((queueItem) => {
      expect(queueItem).toBeUndefined();
      done();
    });
  });

  it('should get length of queue', (done) => {
    workQueue.length().then((length) => {
      expect(length).toBe(0);
      workQueue
        .push('foo', 'bar')
        .bind(workQueue)
        .then(workQueue.length)
        .then((length) => {
          expect(length).toBe(1);
          done();
        });
    });
  });
});
