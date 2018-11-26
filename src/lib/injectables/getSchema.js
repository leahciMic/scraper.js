function getSchemaFactory() {
  const getScopeTree = () => {
    const scopes = Array.from(document.querySelectorAll('[itemscope]'));

    const values = scopes.map(scope => ({
      scope,
      values: [],
      parentScope: scope.parentNode.closest('[itemscope]'),
      type: scope.getAttribute('itemtype'),
      children: [],
      parent: undefined,
    }));

    values.forEach((current, idx, allScopes) => {
      const parent = current.parentScope
        && allScopes.find(x => x.scope === current.parentScope);
      if (parent) {
        parent.children.push(current);
        Object.assign(current, { parent });
      }
    });

    return values;
  };

  const removeSchemaUrl = str => str.replace(/(?:https?:)?\/\/schema.org\//, '');

  const getSchema = () => {
    const scopes = getScopeTree();
    const itemprops = document.querySelectorAll('[itemprop]:not([itemscope]');
    const loose = [];

    Array.from(itemprops).forEach((el) => {
      const parentScope = el.closest('[itemscope]');
      const scope = scopes.find(x => x.scope === parentScope);

      if (!parentScope) {
        const desc = {
          name: el.getAttribute('itemprop'),
          value: el.getAttribute('content') || el.innerText,
          el,
        };
        if (el.tagName === 'A') {
          desc.value = el.getAttribute('href');
        }
        loose.push(desc);
        return;
      }

      const desc = {
        scope: removeSchemaUrl(parentScope.getAttribute('itemtype')),
        name: el.getAttribute('itemprop'),
        value: removeSchemaUrl(el.getAttribute('content') || el.innerText || el.getAttribute('href') || el.getAttribute('src') || ''),
        el,
      };
      if (desc.scope === 'offer' && desc.name === 'availability') {
        desc.value = removeSchemaUrl(el.getAttribute('href'));
      }

      scope.values.push(desc);
    });

    // stock
    // Discontinued
    // InStock
    // InStoreOnly
    // LimitedAvailability
    // OnlineOnly
    // OutOfStock
    // PreOrder
    // PreSale
    // SoldOut

    // grab the roots
    const buildValuesObject = (scope, obj) => {
      const type = removeSchemaUrl(scope.type);
      if (obj[type] && !Array.isArray(obj[type])) {
        obj[type] = [obj[type]];
      }
      if (Array.isArray(obj[type])) {
        obj[type].push(scope.values.reduce((accum, value) => {
          Object.assign(accum, { [value.name]: value.value });
          return accum;
        }, {}));
      } else {
        Object.assign(
          obj,
          {
            [type]: scope.values.reduce((accum, value) => {
              Object.assign(accum, { [value.name]: value.value });
              return accum;
            }, {}),
          },
        );
      }
      if (scope.children.length === 1) {
        buildValuesObject(scope.children[0], obj[type]);
      } else if (scope.children.length > 1) {
        scope.children.forEach(child => buildValuesObject(child, obj[type]));
      }
    };

    if (loose.length) {
      console.warn('Some itemprops found without a scope', loose);
    }

    return scopes.filter(x => x.parent === undefined).reduce((accum, scope) => {
      buildValuesObject(scope, accum);
      return accum;
    }, {});
  };
  return getSchema;
}

module.exports = getSchemaFactory;
