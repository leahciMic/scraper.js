import { babelHelpers } from './babelHelpers.js';

function indent(str, spaces = 2) {
  return str
    .split('\n')
    .map(x => ' '.repeat(spaces) + x)
    .join('\n');
}

function fixObjectShorthandMethods(str) {
  if (typeof str === 'function') {
    return str.toString().replace(/^([^() ]*)\s*\(([^)]*)\)\s*{/, 'function $1 ($2) {');
  }
  return `function() { return ${JSON.stringify(str)}; }`;
}

export default class Injectable {
  constructor() {
    this.dependencies = [];
  }
  register(dependencies) {
    Object.keys(dependencies).forEach(name => this.registerDependency({
      name,
      constructor: dependencies[name],
    }));
  }
  registerDependency({ name, constructor }) {
    this.dependencies.push({
      name,
      constructor: `(${fixObjectShorthandMethods(constructor)})`,
    });
  }
  build() {
    const encode = JSON.stringify.bind(JSON);

    return [
      '(function() {',
      indent(babelHelpers, 2),
      '  var ret = {};',
    ]
    .concat(
      this.dependencies.map(
        dependency =>
          `  ret[${encode(dependency.name)}] = eval(${encode(dependency.constructor)})();`
      )
    )
    .concat([
      '  return ret;',
      '})()',
    ])
    .join('\n');
  }
}
