const { expect } = require('chai');

const dataUtil = require('../src/lib/injectables/data-util');
const Injectable = require('../src/lib/Injectable.js');

describe('Data utility', () => {
  it('should be able to set and retrieve data', () => {
    const injectable = new Injectable();
    injectable.register({ data: dataUtil });
    const utils = eval(injectable.build()); // eslint-disable-line no-eval
    utils.data('foobar');
    expect(utils.data.getData()).to.equal('foobar');
  });
});
