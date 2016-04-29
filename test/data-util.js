import { expect } from 'chai';
import sinon from 'sinon';

import dataUtil from '../src/lib/data-util.js';
import Injectable from '../src/lib/Injectable.js';

describe('Data utility', () => {
  it('should be able to set and retrieve data', () => {
    const injectable = new Injectable();
    injectable.register({ data: dataUtil });
    const utils = eval(injectable.build()); // eslint-disable-line no-eval
    utils.data('foobar');
    expect(utils.data.getData()).to.equal('foobar');
  });
});
