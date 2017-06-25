function fixObjectShorthandMethods(str) {
  if (typeof str === 'function') {
    return str.toString().replace(/^([^() ]*)\s*\(([^)]*)\)\s*{/, 'function $1 ($2) {');
  }
  return `function() { return ${JSON.stringify(str)}; }`;
}

module.exports = class Injectable {
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
      '  var ret = {};',
    ]
    .concat(
      this.dependencies.map(
        dependency =>
          `  ret[${encode(dependency.name)}] = eval(${encode(dependency.constructor)})();`
      ),
    )
    .concat([
      '  return ret;',
      '})()',
    ])
    .join('\n');
  }
}
