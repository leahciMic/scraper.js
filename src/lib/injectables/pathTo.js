/* eslint-disable no-use-before-define, no-param-reassign, prefer-destructuring, eqeqeq,
no-plusplus, no-useless-concat, no-empty, default-case */

/**
 * This was extracted from lodash (basically the get fn with all dependencies)
 */
module.exports = function pathToFactory() {
  const charCodeOfDot = '.'.charCodeAt(0);
  const reEscapeChar = /\\(\\)?/g;
  const rePropName = RegExp(
  // Match anything that isn't a dot or bracket.
    '[^.[\\]]+' + '|'
  // Or match property names within brackets.
  + '\\[(?:'
    // Match a non-string expression.
    + '([^"\'].*)' + '|'
    // Or match strings (supports escaping characters).
    + '(["\'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2'
  + ')\\]' + '|'
  // Or match "" as the space between consecutive dots or empty brackets.
  + '(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))',
    'g',
  );

  const stringToPath = (string) => {
    const result = [];
    if (string.charCodeAt(0) === charCodeOfDot) {
      result.push('');
    }
    string.replace(rePropName, (match, expression, quote, subString) => {
      let key = match;
      if (quote) {
        key = subString.replace(reEscapeChar, '$1');
      } else if (expression) {
        key = expression.trim();
      }
      result.push(key);
    });
    return result;
  };

  const INFINITY = 1 / 0;

  function toKey(value) {
    if (typeof value === 'string' || isSymbol(value)) {
      return value;
    }
    const result = `${value}`;
    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
  }

  const objectProto = Object.prototype;
  const hasOwnProperty = objectProto.hasOwnProperty;
  const toString = objectProto.toString;
  const symToStringTag = typeof Symbol !== 'undefined' ? Symbol.toStringTag : undefined;

  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? '[object Undefined]' : '[object Null]';
    }
    if (!(symToStringTag && symToStringTag in Object(value))) {
      return toString.call(value);
    }
    const isOwn = hasOwnProperty.call(value, symToStringTag);
    const tag = value[symToStringTag];
    let unmasked = false;
    try {
      value[symToStringTag] = undefined;
      unmasked = true;
    } catch (e) {}

    const result = toString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }


  function baseGet(object, path) {
    path = castPath(path, object);

    let index = 0;
    const length = path.length;

    while (object != null && index < length) {
      object = object[toKey(path[index++])];
    }
    return (index && index == length) ? object : undefined;
  }

  const dataViewTag = '[object DataView]';
  const mapTag = '[object Map]';
  const objectTag = '[object Object]';
  const promiseTag = '[object Promise]';
  const setTag = '[object Set]';
  const weakMapTag = '[object WeakMap]';

  const dataViewCtorString = `${DataView}`;
  const mapCtorString = `${Map}`;
  const promiseCtorString = `${Promise}`;
  const setCtorString = `${Set}`;
  const weakMapCtorString = `${WeakMap}`;

  let getTag = baseGetTag;

  // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
  if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag)
    || (getTag(new Map()) != mapTag)
    || (getTag(Promise.resolve()) != promiseTag)
    || (getTag(new Set()) != setTag)
    || (getTag(new WeakMap()) != weakMapTag)) {
    getTag = (value) => {
      const result = baseGetTag(value);
      const Ctor = result == objectTag ? value.constructor : undefined;
      const ctorString = Ctor ? `${Ctor}` : '';

      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString: return dataViewTag;
          case mapCtorString: return mapTag;
          case promiseCtorString: return promiseTag;
          case setCtorString: return setTag;
          case weakMapCtorString: return weakMapTag;
        }
      }
      return result;
    };
  }

  function isSymbol(value) {
    const type = typeof value;
    return type == 'symbol' || (type == 'object' && value != null && getTag(value) == '[object Symbol]');
  }


  const reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
  const reIsPlainProp = /^\w*$/;

  function isKey(value, object) {
    if (Array.isArray(value)) {
      return false;
    }
    const type = typeof value;
    if (type == 'number' || type == 'boolean' || value == null || isSymbol(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value)
    || (object != null && value in Object(object));
  }

  function castPath(value, object) {
    if (Array.isArray(value)) {
      return value;
    }
    return isKey(value, object) ? [value] : stringToPath(value);
  }

  return function get(object, path, defaultValue) {
    const result = object == null ? undefined : baseGet(object, path);
    return result === undefined ? defaultValue : result;
  };
};
