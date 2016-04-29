import { expect } from 'chai';
import sinon from 'sinon';

import queueUtil from '../src/lib/queue-util.js';
import Injectable from '../src/lib/Injectable.js';

describe('Queue utility', () => {
  it('should be able to add to the queue and retrieve the queue', () => {
    const injectable = new Injectable();
    injectable.register({ queue: queueUtil });
    const utils = eval(injectable.build()); // eslint-disable-line no-eval
    utils.queue('foobar');
    utils.queue('bazqux');
    expect(utils.queue.getQueue()).to.deep.equal(['foobar', 'bazqux']);
  });
});
