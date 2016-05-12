import generate from 'babel-generator';
import * as helpers from 'babel-helpers';

const parseFunc = /^function[^(]*\(([^)]*)\) {((?:.|\s)*)}$/;
const helperFns = helpers.list
  .map((fnName) => `var _${fnName} = ${generate(helpers.get(fnName)).code};`)
  .join('\n');

export default (fn) => {
  const fnStr = fn.toString();
  const [, args, body] = fnStr.match(parseFunc);
  return new Function(args, helperFns + body); // eslint-disable-line no-new-func
};
