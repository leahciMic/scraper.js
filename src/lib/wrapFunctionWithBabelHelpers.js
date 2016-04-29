import { babelHelpers } from './babelHelpers.js';

const parseFunc = /^function[^(]*\(([^)]*)\) {((?:.|\s)*)}$/;

export default (fn) => {
  const fnStr = fn.toString();
  const [, args, body] = fnStr.match(parseFunc);
  return new Function(args, babelHelpers + body); // eslint-disable-line no-new-func
};
