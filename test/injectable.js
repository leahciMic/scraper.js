const Injectable = require('../src/lib/Injectable.js');
const { expect } = require('chai');
const sinon = require('sinon');

const foobarFixture = {
  name: 'foobar',
  constructor() {
    return 'hello world';
  },
};

const es6Fixture = {
  name: 'es6',
  constructor() {
    const a = (...b) => ({ b });
    return a;
  },
};

describe('injectable', () => {
  let injectable;

  beforeEach(() => {
    injectable = new Injectable();
  });

  it('should be easy to do register dependencies', () => {
    const injected = sinon.spy(({ foobar }) => {
      expect(foobar).to.equal('hello world');
    });
    injectable.register({
      foobar() { return 'hello world'; },
    });
    injected(eval(injectable.build())); // eslint-disable-line no-eval
    expect(injected.called).to.equal(true);
  });

  it('should dependencies should be able to depend on other dependencies', () => {
    const injected = sinon.spy(({ foobar }) => {
      expect(foobar()).to.deep.equal({ foo: 'bar' });
    });
    injectable.register({
      foobar() { return () => baz; },
      baz: { foo: 'bar' },
    });
    injected(eval(injectable.build())); // eslint-disable-line no-eval
    expect(injected.called).to.equal(true);
  });

  it('should be easy to inject plain old js objects', () => {
    const injected = sinon.spy(({ foobar }) => {
      expect(foobar).to.deep.equal({ foo: 'bar' });
    });
    injectable.register({
      foobar: { foo: 'bar' },
    });
    injected(eval(injectable.build())); // eslint-disable-line no-eval
    expect(injected.called).to.equal(true);
  });

  it('should be able to evaluate it and get a constructed object', () => {
    const injected = sinon.spy(({ foobar }) => {
      expect(foobar).to.equal('hello world');
    });
    injectable.registerDependency(foobarFixture);
    injected(eval(injectable.build())); // eslint-disable-line no-eval
    expect(injected.called).to.equal(true);
  });

  it('should work with es6', () => {
    const injected = sinon.spy(({ es6 }) => {
      expect(es6(1, 2)).to.deep.equal({ b: [1, 2] });
    });

    injectable.registerDependency(es6Fixture);
    injected(eval(injectable.build())); // eslint-disable-line no-eval
    expect(injected.called).to.equal(true);
  });
});
