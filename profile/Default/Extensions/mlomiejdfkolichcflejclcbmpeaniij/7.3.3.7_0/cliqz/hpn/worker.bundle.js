!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);void 0!==c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
!function(e){function r(e,r){for(var n=e.split(".");n.length;)r=r[n.shift()];return r}function n(n){if("string"==typeof n)return r(n,e);if(!(n instanceof Array))throw new Error("Global exports must be a string or array.");for(var t={},o=!0,f=0;f<n.length;f++){var i=r(n[f],e);o&&(t["default"]=i,o=!1),t[n[f].split(".").pop()]=i}return t}function t(r){if(Object.keys)Object.keys(e).forEach(r);else for(var n in e)a.call(e,n)&&r(n)}function o(r){t(function(n){if(-1==l.call(s,n)){try{var t=e[n]}catch(o){s.push(n)}r(n,t)}})}var f,i=$__System,a=Object.prototype.hasOwnProperty,l=Array.prototype.indexOf||function(e){for(var r=0,n=this.length;n>r;r++)if(this[r]===e)return r;return-1},s=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"];i.set("@@global-helpers",i.newModule({prepareGlobal:function(r,t,i){var a=e.define;e.define=void 0;var l;if(i){l={};for(var s in i)l[s]=e[s],e[s]=i[s]}return t||(f={},o(function(e,r){f[e]=r})),function(){var r;if(t)r=n(t);else{r={};var i,s;o(function(e,n){f[e]!==n&&"undefined"!=typeof n&&(r[e]=n,"undefined"!=typeof i?s||i===n||(s=!0):i=n)}),r=s?r:i}if(l)for(var u in l)e[u]=l[u];return e.define=a,r}}}))}("undefined"!=typeof self?self:global);
$__System.register('2', ['3'], function (_export) {
  // FIXME: remove cirtular dependency

  /*
  Function to clean string for calculating route hash
  */
  'use strict';

  var CliqzSecureMessage, punctuation, regex;

  /* This method will return the string based on mapping of which keys to use to hash for routing.
  */

  _export('createHttpUrl', createHttpUrl);

  /*
  Converts given array to generator like object.
  */

  _export('getRouteHash', getRouteHash);

  /**
   * Method to create payload to send to proxy.
   * The payload needs to consist of <uPK,
                                      dmC,
                                      {H{mP}*r1}Dsk, // BlindSigned1
                                      {H(mP, uPK)}Dsk, // BlindSigned2
                                      {H(mP, dmC)}Dsk, // BlindSigned3
                                      SIG(uPK;dmC;bs1;bs2;bs3)
                                      >
   * @returns string with payload created.
   */

  _export('createPayloadBlindSignature', createPayloadBlindSignature);

  _export('createPayloadProxy', createPayloadProxy);

  function cleanStr(s) {
    // Replace all spaces

    // Because in some telemetry message we only create uniqu based on anti-duplicate.
    // Anti-duplicate is not a string, hence converting it to string.
    s = '' + s;

    // Decode uri component
    // Need to find lua equivalent

    try {
      s = decodeURIComponent(s);
    } catch (e) {};

    s = s.replace(/\s+/g, '');

    // Convert to lower
    s = s.toLowerCase();

    // Trim
    s = s.trim();

    // Clean the URL
    s = s.replace(/^http:\/\//, "");
    s = s.replace(/^https:\/\//, "");
    s = s.replace(/^www\./, '');

    // Remove all punctuation marks
    s = s.replace(regex, '');

    return s;
  }

  function getField(obj, path) {
    return path.split(/[\.\[\]]+/).filter(function (x) {
      return x;
    }).reduce(function (o, i) {
      return o[i];
    }, obj);
  }

  function orderedStringify(t, res, onlyKeys) {
    if (!t || typeof t !== 'object') {
      if (t === undefined) {
        throw 'Found undefined field when trying to calculate msg routehash';
      }
      res.push(cleanStr(t));
    } else {
      (function () {
        var keys = Object.keys(t);
        keys.sort();
        var isArray = Array.isArray(t);
        keys.forEach(function (k) {
          if (!isArray) {
            res.push(cleanStr(k));
          }
          if (!onlyKeys) {
            orderedStringify(t[k], res);
          }
        });
      })();
    }
  }

  function getRouteHashStr(obj, sourceMap) {
    var action = obj.action;
    var keys = sourceMap[action].keys;
    var staticKeys = sourceMap[action]['static'] || [];
    var res = [];
    keys.forEach(function (k) {
      return orderedStringify(getField(obj, k), res, staticKeys.some(function (sk) {
        return k.endsWith(sk);
      }));
    });
    return res.join('');
  }

  // TODO: remove this function - it has almost not value and a misleading name
  /*
  Function to create http url
  */

  function createHttpUrl(host) {
    return "http://" + host + "/verify";
  }

  function getRouteHash(msg) {
    return getRouteHashStr(msg, CliqzSecureMessage.sourceMap);
  }

  function trkGen(trk) {
    var trk = trk;
    var idx = -1;
    return {
      next: function next() {
        idx += 1;
        if (idx < trk.length) {
          return {
            value: idx, // Return the first yielded value.
            done: false
          };
        } else {
          return {
            value: undefined, // Return undefined.
            done: true
          };
        }
      }
    };
  }

  /**
   * Method to create payload to send for blind signature.
   * The payload needs to consist of <uPK,
                                      {mP}*r1, // BM1
                                      {mP, uPK}*r2, // BM2
                                      {DmC, uPK} * r3, // BM3
                                      SIG(uPK;bm1;bm2;bm3)
                                      >
   * @returns string with payload created.
  */

  function createPayloadBlindSignature(uPK, bm1, bm2, bm3, sig) {
    var payload = {};
    payload["uPK"] = uPK;
    payload["bm1"] = bm1;
    payload["bm2"] = bm2;
    payload["bm3"] = bm3;
    payload["sig"] = sig;
    return payload;
  }

  function createPayloadProxy(uPK, suPK, mP, dmC, bs1, bs2, bs3, sig) {
    var payload = {};
    payload["uPK"] = uPK;
    payload["suPK"] = suPK;
    payload["mP"] = mP;
    payload["dmC"] = dmC;
    payload["bs1"] = bs1;
    payload["bs2"] = bs2;
    payload["bs3"] = bs3;
    payload["sig"] = sig;
    return payload;
  }

  return {
    setters: [function (_index) {
      CliqzSecureMessage = _index['default'];
    }],
    execute: function () {
      punctuation = '!"\'()*,-./:;?[\\]^_`{|}~%$=&+#';
      regex = new RegExp("[" + punctuation + "]", "g");
    }
  };
});
$__System.register('4', ['5', '3', '6', '7', '8', '2', '9', 'a', 'b'], function (_export) {
  /**
  * Creates object for message recieved+
  * Only excepts valid JSON messages with the following fields:
  * Type : Humanweb / Antitracking etc.
  * Actions : Valid actions like Page, query etc.
  * @returns string with payload created.
  */

  /* This method will ensure that we have the same length for all the mesages
  */

  // FIXME: remove circular dependency
  'use strict';

  var md5, CliqzSecureMessage, localTemporalUniq, userPK, sha1, fromBase64, toBase64, toUTF8, fromUTF8, fromHex, toHex, createPayloadBlindSignature, createPayloadProxy, getRouteHash, createHttpUrl, _unBlindMessage, blindSignContext, _http, crypto, _default;

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  function padMessage(msg) {
    var mxLen = 14000;
    var padLen = mxLen - msg.length + 1;
    if (padLen < 0) {
      throw 'msgtoobig';
    }
    return msg + new Array(padLen).join("\n");
  }

  function isJson(str) {
    // If can be parsed that means it's a str.
    // If cannot be parsed and is an object then it's a JSON.
    try {
      JSON.parse(str);
    } catch (e) {
      if (typeof str == 'object') return true;
    }
    return false;
  }

  function hexToBinary(s) {
    var i,
        k,
        part,
        ret = '';
    // lookup table for easier conversion. '0' characters are padded for '1' to '7'
    var lookupTable = {
      '0': '0000', '1': '0001', '2': '0010', '3': '0011', '4': '0100',
      '5': '0101', '6': '0110', '7': '0111', '8': '1000', '9': '1001',
      'a': '1010', 'b': '1011', 'c': '1100', 'd': '1101',
      'e': '1110', 'f': '1111',
      'A': '1010', 'B': '1011', 'C': '1100', 'D': '1101',
      'E': '1110', 'F': '1111'
    };
    for (i = 0; i < s.length; i += 1) {
      if (lookupTable.hasOwnProperty(s[i])) {
        ret += lookupTable[s[i]];
      } else {
        return { valid: false };
      }
    }
    return { valid: true, result: ret };
  }

  return {
    setters: [function (_md5) {
      md5 = _md5['default'];
    }, function (_index) {
      CliqzSecureMessage = _index['default'];
      localTemporalUniq = _index.localTemporalUniq;
    }, function (_userPk) {
      userPK = _userPk['default'];
    }, function (_coreCryptoUtils) {
      sha1 = _coreCryptoUtils.sha1;
    }, function (_coreEncoding) {
      fromBase64 = _coreEncoding.fromBase64;
      toBase64 = _coreEncoding.toBase64;
      toUTF8 = _coreEncoding.toUTF8;
      fromUTF8 = _coreEncoding.fromUTF8;
      fromHex = _coreEncoding.fromHex;
      toHex = _coreEncoding.toHex;
    }, function (_utils) {
      createPayloadBlindSignature = _utils.createPayloadBlindSignature;
      createPayloadProxy = _utils.createPayloadProxy;
      getRouteHash = _utils.getRouteHash;
      createHttpUrl = _utils.createHttpUrl;
    }, function (_blindSignature) {
      _unBlindMessage = _blindSignature.unBlindMessage;
      blindSignContext = _blindSignature.blindSignContext;
    }, function (_httpWorker) {
      _http = _httpWorker['default'];
    }, function (_platformCrypto) {
      crypto = _platformCrypto['default'];
    }],
    execute: function () {
      _default = function () {
        function _default(msg) {
          _classCallCheck(this, _default);

          // FIXME: isJson is called 3 times on same object
          // TODO: don't use isJSON - try / catch should be sufficient
          if (!msg || !isJson(msg)) return;
          this.orgMessage = isJson(msg) ? JSON.stringify(msg) : msg;
          this.jMessage = isJson(msg) ? msg : JSON.parse(msg);
          this.signed = null;
          this.encrypted = null;
          this.routeHash = null;
          this.type = this.jMessage.type || null;
          this.action = this.jMessage.action || null;
          this.sha256 = null;
          this.interval = null;
          this.rateLimit = null;
          this.endPoint = null;
          this.mE = null;
          this.mK = null;
          this.mP = null;
          this.dm = null;
          this.proxyValidators = null;
        }

        _createClass(_default, [{
          key: 'log',
          value: function log(msg) {
            console.log("Message Context: " + msg);
          }
        }, {
          key: 'getproxyCoordinator',
          value: function getproxyCoordinator() {
            var _this = this;
            var msg = _this.jMessage;
            _this.endPoint = CliqzSecureMessage.sourceMap[this.action]["endpoint"];
            _this.md5Hash = md5.md5(this.action);
            var promise = new Promise(function (resolve, reject) {
              var _this2 = this;

              try {
                var hash = "";
                // var _msg = msg || this.orgMessage;
                var stringRouteHash = getRouteHash(msg);
                sha1(stringRouteHash).then(function (hashM) {
                  _this.sha1 = hashM;
                  var dmC = hexToBinary(hashM)['result'].slice(0, 13);
                  var routeHash = parseInt(dmC, 2);
                  _this.fullHash = hashM;
                  _this.dmC = dmC;
                  var totalProxies = 4096;
                  var modRoute = routeHash % totalProxies;
                  var proxyIP = createHttpUrl(CliqzSecureMessage.routeTable[modRoute]);
                  _this.proxyCoordinator = proxyIP;
                  resolve(_this2);
                })['catch'](function (err) {
                  console.log("ERROR >> " + err);
                  reject(err);
                });
              } catch (e) {
                reject(e);
              }
            });
            return promise;
          }

          /**
           * Method to generate an AES-CBC 128 bit key.
           * @returns crypto object of AES KEY.
           */
        }, {
          key: 'aesGenerateKey',
          value: function aesGenerateKey() {
            var _this = this;
            var promise = new Promise(function (resolve, reject) {
              crypto.subtle.generateKey({
                name: "AES-CBC",
                length: 128
              }, true, ["encrypt", "decrypt"]).then(function (key) {
                resolve(key);
              })['catch'](function (err) {
                console.log("Error in generating key: " + err);
                reject(err);
              });
            });
            return promise;
          }

          /**
           * Method to generate an AES-CBC 128 bit key.
           * @returns crypto object of AES KEY.
           */
        }, {
          key: 'aesExportKey',
          value: function aesExportKey(key) {
            var _this = this;
            var promise = new Promise(function (resolve, reject) {
              crypto.subtle.exportKey('raw', key).then(function (result) {
                _this.aesKey = toHex(new Uint8Array(result));
                resolve(key);
              })['catch'](function (err) {
                console.log("Error in exporting key: " + err);
                reject(err);
              });
            });
            return promise;
          }

          /**
           * Method to parse a message and encrypt with AES.
           * @throws {string} Will throw 'msgtoobig' if message size exceeds a threshold.
           * @returns string of AES encrypted message.
           */
        }, {
          key: 'aesEncryption',
          value: function aesEncryption(key, _iv, msgEncrypt) {
            var _this = this;
            var promise = new Promise(function (resolve, reject) {
              crypto.subtle.encrypt({
                name: "AES-CBC",
                iv: _iv
              }, key, toUTF8(msgEncrypt) //ArrayBuffer of data you want to encrypt
              ).then(function (encrypted) {
                resolve(encrypted);
              })['catch'](function (err) {
                console.log("Error in aes encryption: " + err);
                reject(err);
              });
            });
            return promise;
          }
        }, {
          key: 'rsaEncrypt',
          value: function rsaEncrypt(msg) {
            var _this = this;
            var promise = new Promise(function (resolve, reject) {
              //let publicKey = "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAh5HhcRAn6+6woXQXl/NtZ+fOooNglZct/HSpYuqkcmrPauHW7EuOSq5bvpBZRTDROjR/kUPomqVZIzqhdCFPA8BwXSCz7hAel2Q157vtBvh9sngMMLXb5Fgzef5N4EuKO8pL5KrS+I9tfZac41vFJSdpgAirZYhh+tdcQQ1z0Qv/Rw0zOXjfvddCz3gEv2gB9KsLMVnTS1J4YOOgfza2adg9Ebz1z99DiF4vtCwn0IUwH/3ToTBwJLbMnC3Ol43yBNk8rgK2mkgCi614vOSD3hnVmio+iW6+AUklM8VPl6l7hEK9cljJY+9UsMVmTrvaFbMPwS6AdZCXKTmNdaMJcy3zSOXu5zvzihoQLwAu9LM3l2eVk0Mw0K7JXOP20fc8BtzWCOLYVP32r4R0BNuhTtvGqjHNZHPJN5OwaxkLpn2dujL9uDWGjRiOItKMVq/nOqmNGghrbf8IOaKT7VQhqOU4cXRkB/uF1UjYETBavwUZAxx9Wd/cMcAGmKiDxighxxQ29jDufl+2WG065tmJz+zCxmgrPh6Zb3KFUxPTe6yksAhWJhmGShA9v20t84M5c6NpZXoUsFcVja6XxzHeSB8dWq9Uu5QcZ83Gz/ronwdEjT2OGTtBgOFeTDqLYUgphC1gcUEHOCnTNXRMQOXqGwBfZHp+Mq61QcMq2rNS7xECAwEAAQ==";
              var publicKey = CliqzSecureMessage.secureLogger.publicKeyB64;
              crypto.subtle.importKey('spki', fromBase64(publicKey), {
                name: 'RSA-OAEP',
                hash: { name: 'SHA-1' }
              }, false, ['encrypt']).then(function (key) {
                crypto.subtle.encrypt({
                  name: "RSA-OAEP"
                }, key, toUTF8(msg)).then(function (encrypted) {
                  resolve(toBase64(new Uint8Array(encrypted)));
                })['catch'](function (err) {
                  console.error("Error during rsa encryption: " + err);
                  reject(err);
                });
              });
            });
            return promise;
          }

          /**
           * Method to parse a message and encrypt with AES.
           * @throws {string} Will throw 'msgtoobig' if message size exceeds a threshold.
           * @returns string of AES encrypted message.
           */
        }, {
          key: 'aesEncrypt',
          value: function aesEncrypt(type) {
            var _this = this;
            var promise = new Promise(function (resolve, reject) {
              var _iv = crypto.getRandomValues(new Uint8Array(16));
              var eventID = ('' + toHex(_iv)).substring(0, 5);
              var aesKeyBytes;
              // console.log(">> IV: " + toHex(_iv));
              // console.log(">> E" + eventID);
              _this.eventID = eventID;
              _this.iv = toHex(_iv);
              _this.mID = eventID;
              _this.oiv = _iv;

              _this.aesGenerateKey().then(function (key) {
                return _this.aesExportKey(key);
              }).then(function (key) {
                var encryptionPaylod = {};
                encryptionPaylod['msg'] = _this.orgMessage;
                encryptionPaylod['endpoint'] = _this.endPoint;
                var msgEncrypt = JSON.stringify(encryptionPaylod);
                if (type === "telemetry") {
                  try {
                    msgEncrypt = padMessage(JSON.stringify(encryptionPaylod));
                  } catch (e) {
                    reject(e);
                    return;
                  }
                }

                _this.aesEncryption(key, _iv, msgEncrypt).then(function (encryptedResult) {
                  _this.mE = toBase64(new Uint8Array(encryptedResult));
                  resolve(_this.mE);
                });
              });
            });
            return promise;
          }

          /**
           * Method to parse a message and decrypt with AES.
           * @returns string of AES decrypted message.
           */
        }, {
          key: 'aesDecrypt',
          value: function aesDecrypt(msg) {
            var _this = this;
            var promise = new Promise(function (resolve, reject) {
              var _msg = fromBase64(msg.split(";")[1]);
              var hashKey = _this.aesKey;
              var _iv = _this.iv;
              crypto.subtle.importKey("raw", //can be "jwk" or "raw"
              fromHex(hashKey), "AES-CBC", false, //whether the key is extractable (i.e. can be used in exportKey)
              ["decrypt"] //can be "encrypt", "decrypt", "wrapKey", or "unwrapKey"
              ).then(function (key) {
                //returns the symmetric key
                // console.log("key");
                // console.log(key);
                crypto.subtle.decrypt({
                  name: "AES-CBC",
                  iv: fromHex(_iv) }, //The initialization vector you used to encrypt
                key, //from generateKey or importKey above
                _msg //ArrayBuffer of the data
                ).then(function (decrypted) {
                  //returns an ArrayBuffer containing the decrypted data
                  // console.log("Decrypted>>> " + fromUTF8(new Uint8Array(decrypted)));
                  resolve(fromUTF8(new Uint8Array(decrypted)));
                })['catch'](function (err) {
                  console.error(err);
                });
              })['catch'](function (err) {
                console.error(err);
              });
            });

            return promise;
          }

          /**
           * Method to sign the AES encryptiong key with Aggregator Public key.
           * Calculate mK = {AESKey;iv;endPoint}
           * @returns string of encrypted key.
           */
        }, {
          key: 'signKey',
          value: function signKey() {
            var _this = this;
            var promise = new Promise(function (resolve, reject) {
              try {
                // To protect from padding oracle attacks, we need to send the hash of
                // mE.
                var mI = md5.md5(_this.mE); // replace it with web-crypto md5.
                var messageToSign = _this.aesKey + ";" + _this.iv + ";endPoint;" + mI;
                _this.rsaEncrypt(messageToSign).then(function (encryptedResponse) {
                  _this.signedKey = encryptedResponse;
                  _this.mK = encryptedResponse;
                  resolve(encryptedResponse);
                });
              } catch (e) {
                reject(e);
              }
            });
            return promise;
          }

          /**
           * Method to create MP
           * Calculate mP = <mID, mK, mE>
           * @returns string called mP.
           */
        }, {
          key: 'getMP',
          value: function getMP() {
            var mP = this.mID + ";" + this.mK + ";" + this.mE;
            this.mP = mP;
            return mP;
          }
        }, {
          key: 'rsaE',
          value: function rsaE() {
            rsaEncrypt();
          }
        }, {
          key: 'checkLocalUniq',
          value: function checkLocalUniq() {
            var _this = this;
            var promise = new Promise(function (resolve, reject) {
              // Check for local temporal uniquness
              var uniqKey = _this.dmC;
              if (localTemporalUniq && Object.keys(localTemporalUniq).indexOf(uniqKey) > -1) {
                if (localTemporalUniq[uniqKey]["fullhash"]) {
                  if (_this.fullHash === localTemporalUniq[uniqKey]["fullhash"]) {
                    reject("exact-duplicate");
                  } else {
                    reject("collision");
                  }
                }
              } else {
                resolve(true);
              }
            });
            return promise;
          }
        }, {
          key: 'blindMessage',
          value: function blindMessage() {
            var _this = this;
            var promise = new Promise(function (resolve, reject) {
              var _this3 = this;

              // After the message is SIGNED, we need to start the blind signature.
              _this.getMP();

              var uPK = CliqzSecureMessage.uPK.publicKeyB64;

              // Messages to be blinded.
              _this.m1 = _this.mP;
              _this.m2 = _this.mP + ";" + uPK;
              _this.m3 = _this.mP + ";" + _this.dmC; // + ";" + uPK;

              var _bm1 = new blindSignContext(_this.m1);
              var _bm2 = new blindSignContext(_this.m2);
              var _bm3 = new blindSignContext(_this.m3);

              _this.r1 = _bm1.getBlindingNonce();
              _this.r2 = _bm2.getBlindingNonce();
              _this.r3 = _bm3.getBlindingNonce();

              // Get Unblinder - to unblind the message
              _this.u1 = _bm1.getUnBlinder();
              _this.u2 = _bm2.getUnBlinder();
              _this.u3 = _bm3.getUnBlinder();

              // Blind the message
              _bm1.blindMessage().then(function (bm1) {
                _this.bm1 = bm1;
                return _bm2.blindMessage();
              }).then(function (bm2) {
                _this.bm2 = bm2;
                return _bm3.blindMessage();
              }).then(function (bm3) {
                _this.bm3 = bm3;
                resolve(_this3);
              });
            });
            return promise;
          }
        }, {
          key: 'userSign',
          value: function userSign() {
            var _this = this;
            var promise = new Promise(function (resolve, reject) {
              var _this4 = this;

              var uPK = CliqzSecureMessage.uPK.publicKeyB64;
              var payloadMsg = uPK + ";" + _this.bm1 + ";" + _this.bm2 + ";" + _this.bm3;
              var _uPK = new userPK(payloadMsg);
              return _uPK.sign(payloadMsg).then(function (signedData) {
                _this.signedData = signedData;
                resolve(_this4);
              });
            });
            return promise;
          }
        }, {
          key: 'sendBlindPayload',
          value: function sendBlindPayload() {
            var _this = this;
            var promise = new Promise(function (resolve, reject) {
              var _this5 = this;

              var payload = createPayloadBlindSignature(CliqzSecureMessage.uPK.publicKeyB64, _this.bm1, _this.bm2, _this.bm3, _this.signedData);
              return _http(CliqzSecureMessage.BLIND_SIGNER).post(JSON.stringify(payload)).then(function (response) {
                _this.bsResponse = JSON.parse(response);
                resolve(_this5);
              });
            });
            return promise;
          }
        }, {
          key: 'unBlindMessage',
          value: function unBlindMessage() {
            var _this = this;
            var promise = new Promise(function (resolve, reject) {
              var res = _this.bsResponse;
              // Capture the response
              var bs1 = res["bs1"];
              var bs2 = res["bs2"];
              var bs3 = res["bs3"];
              var suPK = res["suPK"];

              // Unblind the message to get the signature.
              _this.us1 = _unBlindMessage(bs1, _this.u1);
              _this.us2 = _unBlindMessage(bs2, _this.u2);
              _this.us3 = _unBlindMessage(bs3, _this.u3);
              _this.suPK = suPK;
              resolve(this);
            });
            return promise;
          }
        }, {
          key: 'signUnblindedMessage',
          value: function signUnblindedMessage() {
            var _this = this;
            var promise = new Promise(function (resolve, reject) {
              var _this6 = this;

              var payload = CliqzSecureMessage.uPK.publicKeyB64 + ";" + _this.mP + ";" + _this.dmC + ";" + _this.us1 + ";" + _this.us2 + ";" + _this.us3;
              var _uPK = new userPK(payload);
              return _uPK.sign(payload).then(function (signedMessageProxy) {
                _this.signedMessageProxy = signedMessageProxy;
                resolve(_this6);
              });
            });
            return promise;
          }
        }, {
          key: 'sendMessageProxy',
          value: function sendMessageProxy() {
            var _this = this;
            var promise = new Promise(function (resolve, reject) {
              var _this7 = this;

              var payload = createPayloadProxy(CliqzSecureMessage.uPK.publicKeyB64, _this.suPK, _this.mP, _this.dmC, _this.us1, _this.us2, _this.us3, _this.signedMessageProxy);
              return _http(_this.proxyCoordinator).post(JSON.stringify(payload)).then(function () {
                return resolve(_this7);
              })['catch'](function (err) {
                reject(err);
              });
            });
            return promise;
          }
        }, {
          key: 'saveLocalCheckTable',
          value: function saveLocalCheckTable() {
            var _this = this;
            var promise = new Promise(function (resolve, reject) {
              // Save the hash in temporal unique queue.
              var tt = new Date().getTime();
              localTemporalUniq[_this.dmC] = { "ts": tt, "fullhash": _this.fullHash };
              resolve(this);
            });
            return promise;
          }
        }, {
          key: 'query',
          value: function query(queryProxyUrl) {
            var _this = this;
            var promise = new Promise(function (resolve, reject) {
              _this.aesEncrypt().then(function (e) {
                return _this.signKey();
              }).then(function (e) {
                var data = { "mP": _this.getMP() };

                return _http(queryProxyUrl).post(JSON.stringify(data), "instant");
              }).then(function (res) {
                // Got response, let's decrypt it.
                _this.aesDecrypt(JSON.parse(res)["data"]).then(function (decryptedRes) {
                  resolve(decryptedRes);
                });
              })['catch'](function (err) {
                return _this.log(err);
              });
            });
            return promise;
          }
        }, {
          key: 'encryptedTelemetry',
          value: function encryptedTelemetry() {
            var _this = this;
            var promise = new Promise(function (resolve, reject) {
              try {
                return _this.getproxyCoordinator().then(function () {
                  return _this.checkLocalUniq();
                }).then(function () {
                  return _this.aesEncrypt("telemetry");
                }).then(function () {
                  return _this.signKey();
                }).then(function () {
                  return _this.blindMessage();
                }).then(function () {
                  return _this.userSign();
                }).then(function () {
                  return _this.sendBlindPayload();
                }).then(function () {
                  return _this.unBlindMessage();
                }).then(function () {
                  return _this.signUnblindedMessage();
                }).then(function () {
                  return _this.sendMessageProxy();
                }).then(function () {
                  return _this.saveLocalCheckTable();
                }).then(function () {
                  return resolve(true);
                })['catch'](function (err) {
                  console.log(err);
                  reject(err);
                });
              } catch (err) {
                console.log("Error creating mc: " + err);
                reject(err);
              }
            });
            return promise;
          }
        }]);

        return _default;
      }();

      _export('default', _default);

      ;
    }
  };
});
$__System.register('7', ['b', '8', 'c'], function (_export) {
  /* eslint-disable camelcase */

  'use strict';

  var crypto, toBase64, fromBase64, toHex, fromHex, toUTF8, fromUTF8, exportPrivateKey, exportPublicKey;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;_e = err;
      } finally {
        try {
          if (!_n && _i['return']) _i['return']();
        } finally {
          if (_d) throw _e;
        }
      }return _arr;
    }return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError('Invalid attempt to destructure non-iterable instance');
      }
    };
  }();

  function fromByteArray(data, format) {
    if (format === 'hex') {
      return toHex(data);
    } else if (format === 'b64') {
      return toBase64(data);
    }
    return data;
  }
  function toByteArray(data, format) {
    if (format === 'hex') {
      return fromHex(data);
    } else if (format === 'b64') {
      return fromBase64(data);
    }
    return data;
  }
  function fromArrayBuffer(data, format) {
    return fromByteArray(new Uint8Array(data), format);
  }
  function toArrayBuffer(data, format) {
    return toByteArray(data, format).buffer;
  }
  function hash(algo, str) {
    var format = arguments.length <= 2 || arguments[2] === undefined ? 'hex' : arguments[2];

    return crypto.subtle.digest(algo, typeof str === 'string' ? toUTF8(str) : str).then(function (h) {
      return fromArrayBuffer(h, format);
    });
  }
  function sha256(str) {
    var format = arguments.length <= 1 || arguments[1] === undefined ? 'hex' : arguments[1];

    return hash('SHA-256', str, format);
  }
  function importAESKey(key) {
    return crypto.subtle.importKey('raw', toArrayBuffer(key, 'hex'), { name: 'AES-GCM', length: 256 }, true, ['encrypt', 'decrypt']);
  }
  function encryptAES(data, key, iv) {
    return Promise.all([iv || crypto.getRandomValues(new Uint8Array(12)), typeof key === 'string' ? importAESKey(key) : key]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2);

      var _iv = _ref2[0];
      var _key = _ref2[1];
      return crypto.subtle.encrypt({ name: 'AES-GCM', iv: _iv }, _key, data).then(function (encrypted) {
        return [fromArrayBuffer(_iv, 'b64'), fromArrayBuffer(encrypted, 'b64')];
      });
    });
  }
  // Returns [IV, encryptedData]
  function encryptStringAES(txt, key, iv) {
    return encryptAES(toUTF8(txt).buffer, key, iv);
  }
  function decryptAES(encrypted, key) {
    var iv = encrypted[0];
    var encryptedMsg = encrypted[1];
    iv = new Uint8Array(toArrayBuffer(iv, 'b64'));
    encryptedMsg = toArrayBuffer(encryptedMsg, 'b64');
    return Promise.resolve().then(function () {
      return typeof key === 'string' ? importAESKey(key) : key;
    }).then(function (importedKey) {
      return crypto.subtle.decrypt({ name: 'AES-GCM', iv: iv }, importedKey, encryptedMsg);
    });
  }
  function decryptStringAES(encrypted, key) {
    return decryptAES(encrypted, key).then(function (decrypted) {
      return fromUTF8(new Uint8Array(decrypted));
    });
  }
  function generateAESKey() {
    return crypto.subtle.generateKey({ name: 'AES-GCM', length: 256 }, true, ['encrypt', 'decrypt']);
  }
  function exportAESKey(key) {
    return crypto.subtle.exportKey('raw', key).then(function (_key) {
      return fromArrayBuffer(_key, 'hex');
    });
  }
  function importRSAKey(pk) {
    var pub = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
    var h = arguments.length <= 2 || arguments[2] === undefined ? 'SHA-256' : arguments[2];

    return crypto.subtle.importKey(pub ? 'spki' : 'pkcs8', fromBase64(pk), {
      name: 'RSA-OAEP',
      hash: { name: h }
    }, false, pub ? ['wrapKey', 'encrypt'] : ['unwrapKey', 'decrypt']);
  }
  function wrapAESKey(aesKey, publicKey) {
    return Promise.resolve(typeof publicKey === 'string' ? importRSAKey(publicKey, true) : publicKey).then(function (pk) {
      return crypto.subtle.wrapKey('raw', aesKey, pk, { name: 'RSA-OAEP', hash: { name: 'SHA-256' } });
    }).then(function (wrapped) {
      return toBase64(wrapped);
    });
  }
  function unwrapAESKey(aesKey, privateKey) {
    return Promise.resolve(typeof privateKey === 'string' ? importRSAKey(privateKey, false) : privateKey).then(function (pk) {
      return crypto.subtle.unwrapKey('raw', fromBase64(aesKey), pk, {
        name: 'RSA-OAEP',
        modulusLength: 2048,
        publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
        hash: { name: 'SHA-256' }
      }, {
        name: 'AES-GCM',
        length: 256
      }, true, ['encrypt', 'decrypt']);
    });
  }
  function encryptStringRSA(txt, publicKey) {
    return generateAESKey().then(function (aesKey) {
      var promise = undefined;
      if (Array.isArray(publicKey)) {
        promise = Promise.all(publicKey.map(function (x) {
          return wrapAESKey(aesKey, x);
        }));
      } else {
        promise = wrapAESKey(aesKey, publicKey);
      }
      return Promise.all([encryptStringAES(txt, aesKey), promise]);
    });
  }
  function rawEncryptRSA(data, publicKey) {
    return importRSAKey(publicKey, true, 'SHA-1').then(function (key) {
      return crypto.subtle.encrypt({ name: 'RSA-OAEP' }, key, data);
    }).then(function (d) {
      return new Uint8Array(d);
    });
  }
  function _encryptRSA(data, pubKey, aesKey) {
    var wrapPromise = Array.isArray(pubKey) ? Promise.all(pubKey.map(function (x) {
      return wrapAESKey(aesKey, x);
    })) : wrapAESKey(aesKey, pubKey);
    return Promise.all([encryptAES(data, aesKey), wrapPromise]);
  }
  function encryptRSA(data, publicKey, aesKey) {
    if (aesKey) {
      return _encryptRSA(data, publicKey, aesKey);
    }
    return generateAESKey().then(function (k) {
      return _encryptRSA(data, publicKey, k);
    });
  }
  function decryptRSA(data, privateKey) {
    var _data = _slicedToArray(data, 2);

    var encrypted = _data[0];
    var wrappedKey = _data[1];

    return unwrapAESKey(wrappedKey, privateKey).then(function (aesKey) {
      return decryptAES(encrypted, aesKey);
    });
  }
  function decryptStringRSA(data, privateKey) {
    var _data2 = _slicedToArray(data, 2);

    var encrypted = _data2[0];
    var wrappedKey = _data2[1];

    return unwrapAESKey(wrappedKey, privateKey).then(function (aesKey) {
      return decryptStringAES(encrypted, aesKey);
    });
  }

  function randomBytes(numBytes) {
    return crypto.getRandomValues(new Uint8Array(numBytes));
  }

  function deriveAESKey(bytes) {
    return sha256(bytes, 'raw').then(function (h) {
      return crypto.subtle.importKey('raw', h, { name: 'AES-GCM' }, true, ['encrypt', 'decrypt']);
    });
  }

  function sha1(s) {
    return hash('SHA-1', s);
  }

  return {
    setters: [function (_platformCrypto) {
      crypto = _platformCrypto['default'];
    }, function (_encoding) {
      toBase64 = _encoding.toBase64;
      fromBase64 = _encoding.fromBase64;
      toHex = _encoding.toHex;
      fromHex = _encoding.fromHex;
      toUTF8 = _encoding.toUTF8;
      fromUTF8 = _encoding.fromUTF8;
    }, function (_pkcsConversion) {
      exportPrivateKey = _pkcsConversion.exportPrivateKey;
      exportPublicKey = _pkcsConversion.exportPublicKey;
    }],
    execute: function () {
      _export('hash', hash);

      _export('sha256', sha256);

      _export('fromByteArray', fromByteArray);

      _export('toByteArray', toByteArray);

      _export('fromArrayBuffer', fromArrayBuffer);

      _export('toArrayBuffer', toArrayBuffer);

      _export('encryptAES', encryptAES);

      _export('encryptStringAES', encryptStringAES);

      _export('decryptAES', decryptAES);

      _export('decryptStringAES', decryptStringAES);

      _export('generateAESKey', generateAESKey);

      _export('exportAESKey', exportAESKey);

      _export('importAESKey', importAESKey);

      _export('importRSAKey', importRSAKey);

      _export('wrapAESKey', wrapAESKey);

      _export('unwrapAESKey', unwrapAESKey);

      _export('encryptStringRSA', encryptStringRSA);

      _export('rawEncryptRSA', rawEncryptRSA);

      _export('encryptRSA', encryptRSA);

      _export('decryptRSA', decryptRSA);

      _export('decryptStringRSA', decryptStringRSA);

      _export('randomBytes', randomBytes);

      _export('deriveAESKey', deriveAESKey);

      _export('sha1', sha1);

      _export('exportPrivateKey', exportPrivateKey);

      _export('exportPublicKey', exportPublicKey);
    }
  };
});
$__System.registerDynamic('5', [], false, function ($__require, $__exports, $__module) {
  var _retrieveGlobal = $__System.get("@@global-helpers").prepareGlobal($__module.id, null, null);

  (function ($__global) {
    $__global['md5'] = md5;
    $__global['hex'] = hex;
    $__global['rhex'] = rhex;
    $__global['md51'] = md51;
    $__global['md5blk'] = md5blk;
    $__global['md5cycle'] = md5cycle;
    $__global['ii'] = ii;
    $__global['hh'] = hh;
    $__global['gg'] = gg;
    $__global['ff'] = ff;
    $__global['cmn'] = cmn;
    $__global['add32'] = add32;
    // WARNING: for utf-8 strings result will be different than 'standard' md5.
    // This is because unicode values instead of utf-8 bytes are used (to avoid
    // conversion overhead). Using this to not break anything, since it has been
    // used for long time in several places in our code. If you need a 'standard'
    // md5 function, use another one.

    // Copied from http://www.myersdaily.org/joseph/javascript/md5-text.html
    // and adapted to match our coding style guide

    /* this function is much faster,
    so if possible we use it. Some IEs
    are the only ones I know of that
    need the idiotic second function,
    generated by an if clause.  */
    function add32(a, b) {
      return a + b & 0xFFFFFFFF;
    }

    function cmn(q, a, b, x, s, t) {
      const aa = add32(add32(a, q), add32(x, t));
      return add32(aa << s | aa >>> 32 - s, b);
    }

    function ff(a, b, c, d, x, s, t) {
      return cmn(b & c | ~b & d, a, b, x, s, t);
    }

    function gg(a, b, c, d, x, s, t) {
      return cmn(b & d | c & ~d, a, b, x, s, t);
    }

    function hh(a, b, c, d, x, s, t) {
      return cmn(b ^ c ^ d, a, b, x, s, t);
    }

    function ii(a, b, c, d, x, s, t) {
      return cmn(c ^ (b | ~d), a, b, x, s, t);
    }

    function md5cycle(x, k) {
      let a = x[0];
      let b = x[1];
      let c = x[2];
      let d = x[3];
      const xx = x;

      a = ff(a, b, c, d, k[0], 7, -680876936);
      d = ff(d, a, b, c, k[1], 12, -389564586);
      c = ff(c, d, a, b, k[2], 17, 606105819);
      b = ff(b, c, d, a, k[3], 22, -1044525330);
      a = ff(a, b, c, d, k[4], 7, -176418897);
      d = ff(d, a, b, c, k[5], 12, 1200080426);
      c = ff(c, d, a, b, k[6], 17, -1473231341);
      b = ff(b, c, d, a, k[7], 22, -45705983);
      a = ff(a, b, c, d, k[8], 7, 1770035416);
      d = ff(d, a, b, c, k[9], 12, -1958414417);
      c = ff(c, d, a, b, k[10], 17, -42063);
      b = ff(b, c, d, a, k[11], 22, -1990404162);
      a = ff(a, b, c, d, k[12], 7, 1804603682);
      d = ff(d, a, b, c, k[13], 12, -40341101);
      c = ff(c, d, a, b, k[14], 17, -1502002290);
      b = ff(b, c, d, a, k[15], 22, 1236535329);

      a = gg(a, b, c, d, k[1], 5, -165796510);
      d = gg(d, a, b, c, k[6], 9, -1069501632);
      c = gg(c, d, a, b, k[11], 14, 643717713);
      b = gg(b, c, d, a, k[0], 20, -373897302);
      a = gg(a, b, c, d, k[5], 5, -701558691);
      d = gg(d, a, b, c, k[10], 9, 38016083);
      c = gg(c, d, a, b, k[15], 14, -660478335);
      b = gg(b, c, d, a, k[4], 20, -405537848);
      a = gg(a, b, c, d, k[9], 5, 568446438);
      d = gg(d, a, b, c, k[14], 9, -1019803690);
      c = gg(c, d, a, b, k[3], 14, -187363961);
      b = gg(b, c, d, a, k[8], 20, 1163531501);
      a = gg(a, b, c, d, k[13], 5, -1444681467);
      d = gg(d, a, b, c, k[2], 9, -51403784);
      c = gg(c, d, a, b, k[7], 14, 1735328473);
      b = gg(b, c, d, a, k[12], 20, -1926607734);

      a = hh(a, b, c, d, k[5], 4, -378558);
      d = hh(d, a, b, c, k[8], 11, -2022574463);
      c = hh(c, d, a, b, k[11], 16, 1839030562);
      b = hh(b, c, d, a, k[14], 23, -35309556);
      a = hh(a, b, c, d, k[1], 4, -1530992060);
      d = hh(d, a, b, c, k[4], 11, 1272893353);
      c = hh(c, d, a, b, k[7], 16, -155497632);
      b = hh(b, c, d, a, k[10], 23, -1094730640);
      a = hh(a, b, c, d, k[13], 4, 681279174);
      d = hh(d, a, b, c, k[0], 11, -358537222);
      c = hh(c, d, a, b, k[3], 16, -722521979);
      b = hh(b, c, d, a, k[6], 23, 76029189);
      a = hh(a, b, c, d, k[9], 4, -640364487);
      d = hh(d, a, b, c, k[12], 11, -421815835);
      c = hh(c, d, a, b, k[15], 16, 530742520);
      b = hh(b, c, d, a, k[2], 23, -995338651);

      a = ii(a, b, c, d, k[0], 6, -198630844);
      d = ii(d, a, b, c, k[7], 10, 1126891415);
      c = ii(c, d, a, b, k[14], 15, -1416354905);
      b = ii(b, c, d, a, k[5], 21, -57434055);
      a = ii(a, b, c, d, k[12], 6, 1700485571);
      d = ii(d, a, b, c, k[3], 10, -1894986606);
      c = ii(c, d, a, b, k[10], 15, -1051523);
      b = ii(b, c, d, a, k[1], 21, -2054922799);
      a = ii(a, b, c, d, k[8], 6, 1873313359);
      d = ii(d, a, b, c, k[15], 10, -30611744);
      c = ii(c, d, a, b, k[6], 15, -1560198380);
      b = ii(b, c, d, a, k[13], 21, 1309151649);
      a = ii(a, b, c, d, k[4], 6, -145523070);
      d = ii(d, a, b, c, k[11], 10, -1120210379);
      c = ii(c, d, a, b, k[2], 15, 718787259);
      b = ii(b, c, d, a, k[9], 21, -343485551);

      xx[0] = add32(a, x[0]);
      xx[1] = add32(b, x[1]);
      xx[2] = add32(c, x[2]);
      xx[3] = add32(d, x[3]);
    }

    /* there needs to be support for Unicode here,
     * unless we pretend that we can redefine the MD-5
     * algorithm for multi-byte characters (perhaps
     * by adding every four 16-bit characters and
     * shortening the sum to 32 bits). Otherwise
     * I suggest performing MD-5 as if every character
     * was two bytes--e.g., 0040 0025 = @%--but then
     * how will an ordinary MD-5 sum be matched?
     * There is no way to standardize text to something
     * like UTF-8 before transformation; speed cost is
     * utterly prohibitive. The JavaScript standard
     * itself needs to look at this: it should start
     * providing access to strings as preformed UTF-8
     * 8-bit unsigned value arrays.
     */
    function md5blk(s) {
      /* I figured global was faster.   */
      const md5blks = [];
      let i; /* Andy King said do it this way. */
      for (i = 0; i < 64; i += 4) {
        md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
      }
      return md5blks;
    }

    function md51(s) {
      const n = s.length;
      const state = [1732584193, -271733879, -1732584194, 271733878];
      let i;
      for (i = 64; i <= s.length; i += 64) {
        md5cycle(state, md5blk(s.substring(i - 64, i)));
      }
      const ss = s.substring(i - 64);
      const tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (i = 0; i < ss.length; i++) {
        tail[i >> 2] |= ss.charCodeAt(i) << (i % 4 << 3);
      }
      tail[i >> 2] |= 0x80 << (i % 4 << 3);
      if (i > 55) {
        md5cycle(state, tail);
        for (i = 0; i < 16; i++) tail[i] = 0;
      }
      tail[14] = n * 8;
      md5cycle(state, tail);
      return state;
    }

    const hexChr = '0123456789abcdef'.split('');

    function rhex(n) {
      let s = '';
      let j = 0;
      for (; j < 4; j++) {
        s += hexChr[n >> j * 8 + 4 & 0x0F] + hexChr[n >> j * 8 & 0x0F];
      }
      return s;
    }

    function hex(x) {
      const xx = x;
      for (let i = 0; i < x.length; i++) {
        xx[i] = rhex(x[i]);
      }
      return x.join('');
    }

    function md5(s) {
      let l = s.length;
      var _md5 = hex(md51(s));
      return _md5;
    }
  })(this);

  return _retrieveGlobal();
});
$__System.register('c', ['8'], function (_export) {
  /* eslint-disable no-bitwise */
  /* eslint-disable no-param-reassign */
  /* eslint-disable no-plusplus */

  'use strict';

  var _toBase64, _fromBase64, ByteBuffer;

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  function bytesToEncode(len) {
    var sum = len + 1;
    if (len < 1 << 7) {
      sum += 1;
    } else if (len < 1 << 8) {
      sum += 2;
    } else if (len < 1 << 16) {
      sum += 3;
    } else if (len < 1 << 24) {
      sum += 4;
    } else if (len < 1 << 32) {
      sum += 5;
    } else {
      throw new Error('value too big ' + len);
    }
    return sum;
  }

  function pushLength(buffer, len) {
    if (len < 1 << 7) {
      buffer.pushByte(len);
    } else if (len < 1 << 8) {
      buffer.pushByte(0x81);
      buffer.pushByte(len);
    } else if (len < 1 << 16) {
      buffer.pushByte(0x82);
      buffer.pushByte(len >> 8);
      buffer.pushByte(len & 0xFF);
    } else if (len < 1 << 24) {
      buffer.pushByte(0x83);
      buffer.pushByte(len >> 16);
      buffer.pushByte(len >> 8 & 0xFF);
      buffer.pushByte(len & 0xFF);
    } else if (len < 1 << 32) {
      buffer.pushByte(0x84);
      buffer.pushByte(len >> 24);
      buffer.pushByte(len >> 16 & 0xFF);
      buffer.pushByte(len >> 8 & 0xFF);
      buffer.pushByte(len & 0xFF);
    } else {
      throw new Error('value too big ' + len);
    }
  }

  function fromBase64url(data) {
    data = data.replace(/-/g, '+').replace(/_/g, '/');
    var pads = (4 - data.length % 4) % 4;
    if (pads === 3) {
      throw new Error('illegal base64 string: ' + data);
    }
    for (var i = 0; i < pads; i++) {
      data += '=';
    }
    return data;
  }

  function toBase64url(data) {
    data = data.replace(/\+/g, '-').replace(/\//g, '_');
    for (var i = 0; i < 2; ++i) {
      if (data[data.length - 1] === '=') {
        data = data.substring(0, data.length - 1);
      }
    }
    return data;
  }

  function padIfSigned(array) {
    if (array[0] & 0x80) {
      var newArray = new Uint8Array(array.length + 1);
      newArray[0] = 0;
      newArray.set(array, 1);
      return newArray;
    }
    return array;
  }
  /* RSAPrivateKey ::= SEQUENCE {
    version           0,
    modulus           INTEGER,  -- n
    publicExponent    INTEGER,  -- e
    privateExponent   INTEGER,  -- d
    prime1            INTEGER,  -- p
    prime2            INTEGER,  -- q
    exponent1         INTEGER,  -- d mod (p-1)
    exponent2         INTEGER,  -- d mod (q-1)
    coefficient       INTEGER,  -- (inverse of q) mod p
  }*/

  /* RSAPublicKey ::= SEQUENCE {
      modulus           INTEGER,  -- n
      publicExponent    INTEGER   -- e
  }*/
  function exportPrivateKey(key) {
    var origValues = ['AA==', key.n, key.e, key.d, key.p, key.q, key.dp, key.dq, key.qi];
    var values = origValues.map(function (x) {
      return padIfSigned(_fromBase64(fromBase64url(x)));
    });
    var buffer = new ByteBuffer(2000);

    buffer.pushByte(0x30); // SEQUENCE
    var numBytes = values.reduce(function (a, x) {
      return a + bytesToEncode(x.length);
    }, 0);
    pushLength(buffer, numBytes);

    values.forEach(function (x) {
      buffer.pushByte(0x02); // INTEGER
      pushLength(buffer, x.length);
      buffer.pushBytes(x);
    });
    return buffer.toBase64();
  }
  /* RSAPublicKey ::= SEQUENCE {
      modulus           INTEGER,  -- n
      publicExponent    INTEGER   -- e
  }*/

  // SEQUENCE(2 elem)
  // SEQUENCE(2 elem)
  // OBJECT IDENTIFIER 1.2.840.113549.1.1.1
  // NULL
  // BIT STRING(1 elem)
  // SEQUENCE(2 elem)
  // INTEGER(2048 bit) n
  // INTEGER e
  function exportPublicKey(key) {
    var origValues = [key.n, key.e];
    var values = origValues.map(function (x) {
      return padIfSigned(_fromBase64(fromBase64url(x)));
    });
    var numBytes = values.reduce(function (a, x) {
      return a + bytesToEncode(x.length);
    }, 0);

    var buffer = new ByteBuffer(2000);

    buffer.pushByte(0x30); // SEQUENCE
    pushLength(buffer, bytesToEncode(bytesToEncode(numBytes) + 1) + 15);

    buffer.pushBytes(new Uint8Array([0x30, 0x0D, 0x06, 0x09, 0x2A, 0x86, 0x48, 0x86, 0xF7, 0x0D, 0x01, 0x01, 0x01, 0x05, 0x00]));
    buffer.pushByte(0x03); // BIT STRING
    pushLength(buffer, bytesToEncode(numBytes) + 1);
    buffer.pushByte(0x00);

    buffer.pushByte(0x30); // SEQUENCE
    pushLength(buffer, numBytes);

    values.forEach(function (x) {
      buffer.pushByte(0x02); // INTEGER
      pushLength(buffer, x.length);
      buffer.pushBytes(x);
    });
    return buffer.toBase64();
  }

  function exportPublicKeySPKI(key) {
    return exportPublicKey(key);
  }

  function exportPrivateKeyPKCS8(key) {
    var origValues = ['AA==', key.n, key.e, key.d, key.p, key.q, key.dp, key.dq, key.qi];
    var values = origValues.map(function (x) {
      return padIfSigned(_fromBase64(fromBase64url(x)));
    });
    var numBytes = values.reduce(function (a, x) {
      return a + bytesToEncode(x.length);
    }, 0);

    var buffer = new ByteBuffer(2000);

    buffer.pushByte(0x30); // SEQUENCE
    pushLength(buffer, 3 + 15 + bytesToEncode(bytesToEncode(numBytes)));
    buffer.pushBytes(new Uint8Array([0x02, 0x01, 0x00]));
    buffer.pushBytes(new Uint8Array([0x30, 0x0D, 0x06, 0x09, 0x2A, 0x86, 0x48, 0x86, 0xF7, 0x0D, 0x01, 0x01, 0x01, 0x05, 0x00]));
    buffer.pushByte(0x04); // OCTET STRING
    pushLength(buffer, bytesToEncode(numBytes));

    buffer.pushByte(0x30); // SEQUENCE
    pushLength(buffer, numBytes);

    values.forEach(function (x) {
      buffer.pushByte(0x02); // INTEGER
      pushLength(buffer, x.length);
      buffer.pushBytes(x);
    });
    return buffer.toBase64();
  }

  function readLength(buffer) {
    var first = buffer.readByte();
    if (first & 0x80) {
      var numBytes = first & 0x7F;
      var res = 0;
      while (numBytes--) {
        res = res << 8 | buffer.readByte();
      }
      return res;
    }
    return first;
  }

  function readInteger(buffer) {
    var tag = buffer.readByte();
    if (tag !== 0x02) {
      throw new Error('invalid tag for integer value');
    }
    var len = readLength(buffer);
    var val = buffer.readBytes(len);
    if (val[0] === 0) {
      // Remove padding?
      val = val.subarray(1);
    }
    return val;
  }

  function __importKey(buffer, values) {
    var key = {};
    if (buffer.readByte() === 0x30) {
      readLength(buffer);
      for (var i = 0; i < values.length; ++i) {
        var val = readInteger(buffer);
        val = toBase64url(_toBase64(val));
        key[values[i]] = val;
      }
    } else {
      throw new Error('first value not correct');
    }
    if (buffer.pos !== buffer.buffer.length) {
      throw new Error('not all input data consumed');
    }
    key.alg = 'RS256';
    key.ext = true;
    key.kty = 'RSA';
    return key;
  }

  function _importKey(data, values) {
    var buffer = new ByteBuffer(0);
    buffer.setData(_fromBase64(data));
    return __importKey(buffer, values);
  }

  function importPublicKey(data) {
    var buffer = new ByteBuffer(0);
    buffer.setData(_fromBase64(data));
    if (buffer.readByte() === 0x30) {
      readLength(buffer);
      buffer.readBytes(15);
      if (buffer.readByte() !== 0x03) {
        throw new Error('format not correct');
      }
      readLength(buffer);
      if (buffer.readByte() !== 0x00) {
        throw new Error('format not correct');
      }
    } else {
      throw new Error('format not correct');
    }
    return __importKey(buffer, ['n', 'e']);
  }

  function importPrivateKey(data) {
    var res = _importKey(data, ['version', 'n', 'e', 'd', 'p', 'q', 'dp', 'dq', 'qi']);
    delete res.version;
    return res;
  }

  function privateKeytoKeypair(privateKey) {
    var key = importPrivateKey(privateKey);
    return [exportPublicKeySPKI(key), exportPrivateKeyPKCS8(key)];
  }

  return {
    setters: [function (_encoding) {
      _toBase64 = _encoding.toBase64;
      _fromBase64 = _encoding.fromBase64;
    }],
    execute: function () {
      ByteBuffer = function () {
        function ByteBuffer(length) {
          _classCallCheck(this, ByteBuffer);

          this.buffer = new Uint8Array(length);
          this.pos = 0;
        }

        _createClass(ByteBuffer, [{
          key: 'setData',
          value: function setData(data) {
            this.buffer = data;
            this.pos = 0;
          }
        }, {
          key: 'readByte',
          value: function readByte() {
            if (this.pos + 1 > this.buffer.length) {
              throw new Error('Tried to read past the buffer length');
            }
            var pos = this.pos;
            this.pos += 1;
            return this.buffer[pos];
          }
        }, {
          key: 'readBytes',
          value: function readBytes(length) {
            if (this.pos + length > this.buffer.length) {
              throw new Error('Tried to read past the buffer length');
            }
            var res = this.buffer.subarray(this.pos, this.pos + length);
            this.pos += length;
            return res;
          }
        }, {
          key: 'resetPointer',
          value: function resetPointer() {
            this.pos = 0;
          }
        }, {
          key: 'pushByte',
          value: function pushByte(byte) {
            if (this.pos + 1 > this.buffer.length) {
              var newBuffer = new Uint8Array(this.buffer.length * 2);
              newBuffer.set(this.buffer);
              this.buffer = newBuffer;
            }
            var pos = this.pos;
            this.pos += 1;
            this.buffer[pos] = byte;
          }
        }, {
          key: 'pushBytes',
          value: function pushBytes(bytes) {
            if (this.pos + bytes.length > this.buffer.length) {
              var newBuffer = new Uint8Array((this.pos + bytes.length) * 2);
              newBuffer.set(this.buffer);
              this.buffer = newBuffer;
            }
            this.buffer.set(bytes, this.pos);
            this.pos += bytes.length;
          }
        }, {
          key: 'toBase64',
          value: function toBase64() {
            return _toBase64(this.buffer.subarray(0, this.pos));
          }
        }, {
          key: 'fromBase64',
          value: function fromBase64(data) {
            this.pushBytes(_fromBase64(data));
          }
        }]);

        return ByteBuffer;
      }();

      _export('exportPrivateKeyPKCS8', exportPrivateKeyPKCS8);

      _export('exportPrivateKey', exportPrivateKey);

      _export('exportPublicKey', exportPublicKey);

      _export('exportPublicKeySPKI', exportPublicKeySPKI);

      _export('importPublicKey', importPublicKey);

      _export('importPrivateKey', importPrivateKey);

      _export('privateKeytoKeypair', privateKeytoKeypair);
    }
  };
});
$__System.register("a", [], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", function (url) {

        var core = {

          // Method that performs request
          req: function req(method, url, data, type) {
            // Creating a promise
            var promise = new Promise(function (resolve, reject) {

              // Instantiates the XMLHttpRequest
              var client = new XMLHttpRequest();
              var uri = url;
              var ts = new Date().getTime();

              client.open(method, uri, true);
              client.setRequestHeader("x-type", type ? type : "delayed");
              client.overrideMimeType('application/json');
              //client.setRequestHeader("Content-Type", "application/json;charset=utf-8");

              client.onload = function () {
                var statusClass = parseInt(client.status / 100);
                if (statusClass == 2 || statusClass == 3 || statusClass == 0 /* local files */) {
                    // Performs the function "resolve" when this.status is equal to 2xx
                    resolve(this.response);
                  } else {
                  // Performs the function "reject" when this.status is different than 2xx

                  reject(this.statusText);
                }
              };
              client.onerror = function () {
                reject(this.statusText);
              };
              client.ontimeout = function () {
                reject(this.statusText);
              };

              client.send(data);
            });

            // Return the promise
            return promise;
          }
        };

        return {
          'get': function get(args) {
            return core.req('GET', url, args);
          },
          'post': function post(args, type) {
            return core.req('POST', url, args, type);
          }
        };
      });
    }
  };
});
$__System.register('6', ['3', 'c', '8', 'a', 'b'], function (_export) {
  'use strict';

  var CliqzSecureMessage, privateKeytoKeypair, exportPrivateKey, exportPublicKey, toUTF8, toHex, fromHex, fromBase64, _http, crypto, _default;

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  return {
    setters: [function (_index) {
      CliqzSecureMessage = _index['default'];
    }, function (_coreCryptoPkcsConversion) {
      privateKeytoKeypair = _coreCryptoPkcsConversion.privateKeytoKeypair;
      exportPrivateKey = _coreCryptoPkcsConversion.exportPrivateKey;
      exportPublicKey = _coreCryptoPkcsConversion.exportPublicKey;
    }, function (_coreEncoding) {
      toUTF8 = _coreEncoding.toUTF8;
      toHex = _coreEncoding.toHex;
      fromHex = _coreEncoding.fromHex;
      fromBase64 = _coreEncoding.fromBase64;
    }, function (_httpWorker) {
      _http = _httpWorker['default'];
    }, function (_platformCrypto) {
      crypto = _platformCrypto['default'];
    }],
    execute: function () {
      _default = function () {
        function _default(msg) {
          _classCallCheck(this, _default);

          this.privateKey = "";
          this.publicKey = "";
        }

        /**
         * Method to sign the str using userSK.
         * @returns signature in hex format.
         */

        _createClass(_default, [{
          key: 'sign',
          value: function sign(msg) {
            var promise = new Promise(function (resolve, reject) {
              var ppk = privateKeytoKeypair(CliqzSecureMessage.uPK.privateKey);
              crypto.subtle.importKey("pkcs8", fromBase64(ppk[1]), { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["sign"]).then(function (privateKey) {
                var documentBytes = toUTF8(msg);
                crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, privateKey, documentBytes).then(function (signatureBuffer) {
                  var signatureBytes = new Uint8Array(signatureBuffer);
                  var signatureHex = toHex(signatureBytes);
                  resolve(signatureHex);
                })['catch'](function (err) {
                  return reject(err);
                });
              })['catch'](function (err) {
                return reject(err);
              });
            });
            return promise;
          }
        }, {
          key: 'verify',
          value: function verify(sig, msg) {
            var promise = new Promise(function (resolve, reject) {
              var ppk = privateKeytoKeypair(CliqzSecureMessage.uPK.privateKey);
              crypto.subtle.importKey("spki", fromBase64(ppk[0]), { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["verify"]).then(function (publicKey) {
                var signatureBytes = fromHex(sig);
                var documentBytes = toUTF8(msg);
                crypto.subtle.verify({ name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, publicKey, signatureBytes, documentBytes).then(function (validSignature) {
                  resolve(validSignature);
                })['catch'](function (err) {
                  return console.log(err);
                });
              });
            });
            return promise;
          }
        }, {
          key: 'generateKey',
          value: function generateKey() {
            var _this = this;
            var promise = new Promise(function (resolve, reject) {
              crypto.subtle.generateKey({
                name: "RSASSA-PKCS1-v1_5",
                modulusLength: 2048,
                publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
                hash: { name: "SHA-256" }
              }, true, ["sign", "verify"]).then(function (key) {
                return crypto.subtle.exportKey("jwk", key.privateKey);
              }).then(function (key) {
                var return_data = {};
                return_data["privKeyB64"] = exportPrivateKey(key);
                return_data["publicKeyB64"] = exportPublicKey(key);
                _this.privateKey = return_data["privKeyB64"];
                _this.publicKey = return_data["publicKeyB64"];
                return return_data;
              }).then(function (keys) {
                return _http(CliqzSecureMessage.USER_REG).post(JSON.stringify({ "pk": keys["publicKeyB64"] }));
              }).then(function (e) {
                return resolve({ "status": true, "privateKey": _this.privateKey, "publicKey": _this.publicKey });
              })['catch'](function (e) {
                return reject({ "status": e.message });
              });
            });
            return promise;
          }
        }]);

        return _default;
      }();

      _export('default', _default);

      ;
    }
  };
});
$__System.registerDynamic('d', [], false, function ($__require, $__exports, $__module) {
  var _retrieveGlobal = $__System.get("@@global-helpers").prepareGlobal($__module.id, null, null);

  (function ($__global) {
    $__global['mont_'] = mont_;
    $__global['powMod_'] = powMod_;
    $__global['trim'] = trim;
    $__global['squareMod_'] = squareMod_;
    $__global['multMod_'] = multMod_;
    $__global['mod_'] = mod_;
    $__global['mult_'] = mult_;
    $__global['add_'] = add_;
    $__global['sub_'] = sub_;
    $__global['subShift_'] = subShift_;
    $__global['addShift_'] = addShift_;
    $__global['linCombShift_'] = linCombShift_;
    $__global['linComb_'] = linComb_;
    $__global['divInt_'] = divInt_;
    $__global['multInt_'] = multInt_;
    $__global['leftShift_'] = leftShift_;
    $__global['halve_'] = halve_;
    $__global['rightShift_'] = rightShift_;
    $__global['addInt_'] = addInt_;
    $__global['copyInt_'] = copyInt_;
    $__global['copy_'] = copy_;
    $__global['dup'] = dup;
    $__global['bigInt2str'] = bigInt2str;
    $__global['isZero'] = isZero;
    $__global['equals'] = equals;
    $__global['equalsInt'] = equalsInt;
    $__global['str2bigInt'] = str2bigInt;
    $__global['int2bigInt'] = int2bigInt;
    $__global['modInt'] = modInt;
    $__global['carry_'] = carry_;
    $__global['divide_'] = divide_;
    $__global['greater'] = greater;
    $__global['greaterShift'] = greaterShift;
    $__global['negative'] = negative;
    $__global['eGCD_'] = eGCD_;
    $__global['inverseModInt_'] = inverseModInt_;
    $__global['inverseModInt'] = inverseModInt;
    $__global['inverseMod_'] = inverseMod_;
    $__global['GCD_'] = GCD_;
    $__global['GCD'] = GCD;
    $__global['randBigInt_'] = randBigInt_;
    $__global['randBigInt'] = randBigInt;
    $__global['randTruePrime_'] = randTruePrime_;
    $__global['multMod'] = multMod;
    $__global['inverseMod'] = inverseMod;
    $__global['add'] = add;
    $__global['sub'] = sub;
    $__global['powMod'] = powMod;
    $__global['mult'] = mult;
    $__global['addInt'] = addInt;
    $__global['mod'] = mod;
    $__global['randProbPrimeRounds'] = randProbPrimeRounds;
    $__global['randProbPrime'] = randProbPrime;
    $__global['randTruePrime'] = randTruePrime;
    $__global['expand'] = expand;
    $__global['bitSize'] = bitSize;
    $__global['millerRabin'] = millerRabin;
    $__global['millerRabinInt'] = millerRabinInt;
    $__global['findPrimes'] = findPrimes;
    ////////////////////////////////////////////////////////////////////////////////////////
    // Big Integer Library v. 5.5
    // Created 2000, last modified 2013
    // Leemon Baird
    // www.leemon.com
    //
    // Version history:
    // v 5.5  17 Mar 2013
    //   - two lines of a form like "if (x<0) x+=n" had the "if" changed to "while" to
    //     handle the case when x<-n. (Thanks to James Ansell for finding that bug)
    // v 5.4  3 Oct 2009
    //   - added "var i" to greaterShift() so i is not global. (Thanks to PŽter Szab— for finding that bug)
    //
    // v 5.3  21 Sep 2009
    //   - added randProbPrime(k) for probable primes
    //   - unrolled loop in mont_ (slightly faster)
    //   - millerRabin now takes a bigInt parameter rather than an int
    //
    // v 5.2  15 Sep 2009
    //   - fixed capitalization in call to int2bigInt in randBigInt
    //     (thanks to Emili Evripidou, Reinhold Behringer, and Samuel Macaleese for finding that bug)
    //
    // v 5.1  8 Oct 2007
    //   - renamed inverseModInt_ to inverseModInt since it doesn't change its parameters
    //   - added functions GCD and randBigInt, which call GCD_ and randBigInt_
    //   - fixed a bug found by Rob Visser (see comment with his name below)
    //   - improved comments
    //
    // This file is public domain.   You can use it for any purpose without restriction.
    // I do not guarantee that it is correct, so use it at your own risk.  If you use
    // it for something interesting, I'd appreciate hearing about it.  If you find
    // any bugs or make any improvements, I'd appreciate hearing about those too.
    // It would also be nice if my name and URL were left in the comments.  But none
    // of that is required.
    //
    // This code defines a bigInt library for arbitrary-precision integers.
    // A bigInt is an array of integers storing the value in chunks of bpe bits,
    // little endian (buff[0] is the least significant word).
    // Negative bigInts are stored two's complement.  Almost all the functions treat
    // bigInts as nonnegative.  The few that view them as two's complement say so
    // in their comments.  Some functions assume their parameters have at least one
    // leading zero element. Functions with an underscore at the end of the name put
    // their answer into one of the arrays passed in, and have unpredictable behavior
    // in case of overflow, so the caller must make sure the arrays are big enough to
    // hold the answer.  But the average user should never have to call any of the
    // underscored functions.  Each important underscored function has a wrapper function
    // of the same name without the underscore that takes care of the details for you.
    // For each underscored function where a parameter is modified, that same variable
    // must not be used as another argument too.  So, you cannot square x by doing
    // multMod_(x,x,n).  You must use squareMod_(x,n) instead, or do y=dup(x); multMod_(x,y,n).
    // Or simply use the multMod(x,x,n) function without the underscore, where
    // such issues never arise, because non-underscored functions never change
    // their parameters; they always allocate new memory for the answer that is returned.
    //
    // These functions are designed to avoid frequent dynamic memory allocation in the inner loop.
    // For most functions, if it needs a BigInt as a local variable it will actually use
    // a global, and will only allocate to it only when it's not the right size.  This ensures
    // that when a function is called repeatedly with same-sized parameters, it only allocates
    // memory on the first call.
    //
    // Note that for cryptographic purposes, the calls to Math.random() must
    // be replaced with calls to a better pseudorandom number generator.
    //
    // In the following, "bigInt" means a bigInt with at least one leading zero element,
    // and "integer" means a nonnegative integer less than radix.  In some cases, integer
    // can be negative.  Negative bigInts are 2s complement.
    //
    // The following functions do not modify their inputs.
    // Those returning a bigInt, string, or Array will dynamically allocate memory for that value.
    // Those returning a boolean will return the integer 0 (false) or 1 (true).
    // Those returning boolean or int will not allocate memory except possibly on the first
    // time they're called with a given parameter size.
    //
    // bigInt  add(x,y)               //return (x+y) for bigIntstr x and y.
    // bigInt  addInt(x,n)            //return (x+n) where x is a bigInt and n is an integer.
    // string  bigInt2str(x,base)     //return a string form of bigInt x in a given base, with 2 <= base <= 95
    // int     bitSize(x)             //return how many bits long the bigInt x is, not counting leading zeros
    // bigInt  dup(x)                 //return a copy of bigInt x
    // boolean equals(x,y)            //is the bigInt x equal to the bigint y?
    // boolean equalsInt(x,y)         //is bigint x equal to integer y?
    // bigInt  expand(x,n)            //return a copy of x with at least n elements, adding leading zeros if needed
    // Array   findPrimes(n)          //return array of all primes less than integer n
    // bigInt  GCD(x,y)               //return greatest common divisor of bigInts x and y (each with same number of elements).
    // boolean greater(x,y)           //is x>y?  (x and y are nonnegative bigInts)
    // boolean greaterShift(x,y,shift)//is (x <<(shift*bpe)) > y?
    // bigInt  int2bigInt(t,n,m)      //return a bigInt equal to integer t, with at least n bits and m array elements
    // bigInt  inverseMod(x,n)        //return (x**(-1) mod n) for bigInts x and n.  If no inverse exists, it returns null
    // int     inverseModInt(x,n)     //return x**(-1) mod n, for integers x and n.  Return 0 if there is no inverse
    // boolean isZero(x)              //is the bigInt x equal to zero?
    // boolean millerRabin(x,b)       //does one round of Miller-Rabin base integer b say that bigInt x is possibly prime? (b is bigInt, 1<b<x)
    // boolean millerRabinInt(x,b)    //does one round of Miller-Rabin base integer b say that bigInt x is possibly prime? (b is int,    1<b<x)
    // bigInt  mod(x,n)               //return a new bigInt equal to (x mod n) for bigInts x and n.
    // int     modInt(x,n)            //return x mod n for bigInt x and integer n.
    // bigInt  mult(x,y)              //return x*y for bigInts x and y. This is faster when y<x.
    // bigInt  multMod(x,y,n)         //return (x*y mod n) for bigInts x,y,n.  For greater speed, let y<x.
    // boolean negative(x)            //is bigInt x negative?
    // bigInt  powMod(x,y,n)          //return (x**y mod n) where x,y,n are bigInts and ** is exponentiation.  0**0=1. Faster for odd n.
    // bigInt  randBigInt(n,s)        //return an n-bit random BigInt (n>=1).  If s=1, then the most significant of those n bits is set to 1.
    // bigInt  randTruePrime(k)       //return a new, random, k-bit, true prime bigInt using Maurer's algorithm.
    // bigInt  randProbPrime(k)       //return a new, random, k-bit, probable prime bigInt (probability it's composite less than 2^-80).
    // bigInt  str2bigInt(s,b,n,m)    //return a bigInt for number represented in string s in base b with at least n bits and m array elements
    // bigInt  sub(x,y)               //return (x-y) for bigInts x and y.  Negative answers will be 2s complement
    // bigInt  trim(x,k)              //return a copy of x with exactly k leading zero elements
    //
    //
    // The following functions each have a non-underscored version, which most users should call instead.
    // These functions each write to a single parameter, and the caller is responsible for ensuring the array
    // passed in is large enough to hold the result.
    //
    // void    addInt_(x,n)          //do x=x+n where x is a bigInt and n is an integer
    // void    add_(x,y)             //do x=x+y for bigInts x and y
    // void    copy_(x,y)            //do x=y on bigInts x and y
    // void    copyInt_(x,n)         //do x=n on bigInt x and integer n
    // void    GCD_(x,y)             //set x to the greatest common divisor of bigInts x and y, (y is destroyed).  (This never overflows its array).
    // boolean inverseMod_(x,n)      //do x=x**(-1) mod n, for bigInts x and n. Returns 1 (0) if inverse does (doesn't) exist
    // void    mod_(x,n)             //do x=x mod n for bigInts x and n. (This never overflows its array).
    // void    mult_(x,y)            //do x=x*y for bigInts x and y.
    // void    multMod_(x,y,n)       //do x=x*y  mod n for bigInts x,y,n.
    // void    powMod_(x,y,n)        //do x=x**y mod n, where x,y,n are bigInts (n is odd) and ** is exponentiation.  0**0=1.
    // void    randBigInt_(b,n,s)    //do b = an n-bit random BigInt. if s=1, then nth bit (most significant bit) is set to 1. n>=1.
    // void    randTruePrime_(ans,k) //do ans = a random k-bit true random prime (not just probable prime) with 1 in the msb.
    // void    sub_(x,y)             //do x=x-y for bigInts x and y. Negative answers will be 2s complement.
    //
    // The following functions do NOT have a non-underscored version.
    // They each write a bigInt result to one or more parameters.  The caller is responsible for
    // ensuring the arrays passed in are large enough to hold the results.
    //
    // void addShift_(x,y,ys)       //do x=x+(y<<(ys*bpe))
    // void carry_(x)               //do carries and borrows so each element of the bigInt x fits in bpe bits.
    // void divide_(x,y,q,r)        //divide x by y giving quotient q and remainder r
    // int  divInt_(x,n)            //do x=floor(x/n) for bigInt x and integer n, and return the remainder. (This never overflows its array).
    // int  eGCD_(x,y,d,a,b)        //sets a,b,d to positive bigInts such that d = GCD_(x,y) = a*x-b*y
    // void halve_(x)               //do x=floor(|x|/2)*sgn(x) for bigInt x in 2's complement.  (This never overflows its array).
    // void leftShift_(x,n)         //left shift bigInt x by n bits.  n<bpe.
    // void linComb_(x,y,a,b)       //do x=a*x+b*y for bigInts x and y and integers a and b
    // void linCombShift_(x,y,b,ys) //do x=x+b*(y<<(ys*bpe)) for bigInts x and y, and integers b and ys
    // void mont_(x,y,n,np)         //Montgomery multiplication (see comments where the function is defined)
    // void multInt_(x,n)           //do x=x*n where x is a bigInt and n is an integer.
    // void rightShift_(x,n)        //right shift bigInt x by n bits.  0 <= n < bpe. (This never overflows its array).
    // void squareMod_(x,n)         //do x=x*x  mod n for bigInts x,n
    // void subShift_(x,y,ys)       //do x=x-(y<<(ys*bpe)). Negative answers will be 2s complement.
    //
    // The following functions are based on algorithms from the _Handbook of Applied Cryptography_
    //    powMod_()           = algorithm 14.94, Montgomery exponentiation
    //    eGCD_,inverseMod_() = algorithm 14.61, Binary extended GCD_
    //    GCD_()              = algorothm 14.57, Lehmer's algorithm
    //    mont_()             = algorithm 14.36, Montgomery multiplication
    //    divide_()           = algorithm 14.20  Multiple-precision division
    //    squareMod_()        = algorithm 14.16  Multiple-precision squaring
    //    randTruePrime_()    = algorithm  4.62, Maurer's algorithm
    //    millerRabin()       = algorithm  4.24, Miller-Rabin algorithm
    //
    // Profiling shows:
    //     randTruePrime_() spends:
    //         10% of its time in calls to powMod_()
    //         85% of its time in calls to millerRabin()
    //     millerRabin() spends:
    //         99% of its time in calls to powMod_()   (always with a base of 2)
    //     powMod_() spends:
    //         94% of its time in calls to mont_()  (almost always with x==y)
    //
    // This suggests there are several ways to speed up this library slightly:
    //     - convert powMod_ to use a Montgomery form of k-ary window (or maybe a Montgomery form of sliding window)
    //         -- this should especially focus on being fast when raising 2 to a power mod n
    //     - convert randTruePrime_() to use a minimum r of 1/3 instead of 1/2 with the appropriate change to the test
    //     - tune the parameters in randTruePrime_(), including c, m, and recLimit
    //     - speed up the single loop in mont_() that takes 95% of the runtime, perhaps by reducing checking
    //       within the loop when all the parameters are the same length.
    //
    // There are several ideas that look like they wouldn't help much at all:
    //     - replacing trial division in randTruePrime_() with a sieve (that speeds up something taking almost no time anyway)
    //     - increase bpe from 15 to 30 (that would help if we had a 32*32->64 multiplier, but not with JavaScript's 32*32->32)
    //     - speeding up mont_(x,y,n,np) when x==y by doing a non-modular, non-Montgomery square
    //       followed by a Montgomery reduction.  The intermediate answer will be twice as long as x, so that
    //       method would be slower.  This is unfortunate because the code currently spends almost all of its time
    //       doing mont_(x,x,...), both for randTruePrime_() and powMod_().  A faster method for Montgomery squaring
    //       would have a large impact on the speed of randTruePrime_() and powMod_().  HAC has a couple of poorly-worded
    //       sentences that seem to imply it's faster to do a non-modular square followed by a single
    //       Montgomery reduction, but that's obviously wrong.
    ////////////////////////////////////////////////////////////////////////////////////////

    //globals
    bpe = 0; //bits stored per array element
    mask = 0; //AND this with an array element to chop it down to bpe bits
    radix = mask + 1; //equals 2^bpe.  A single 1 bit to the left of the last bit of mask.

    //the digits for converting to different bases
    digitsStr = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_=!@#$%^&*()[]{}|;:,.<>/?`~ \\\'\"+-';

    //initialize the global variables
    for (bpe = 0; 1 << bpe + 1 > 1 << bpe; bpe++); //bpe=number of bits in the mantissa on this platform
    bpe >>= 1; //bpe=number of bits in one element of the array representing the bigInt
    mask = (1 << bpe) - 1; //AND the mask with an integer to get its bpe least significant bits
    radix = mask + 1; //2^bpe.  a single 1 bit to the left of the first bit of mask
    one = int2bigInt(1, 1, 1); //constant used in powMod_()

    //the following global variables are scratchpad memory to
    //reduce dynamic memory allocation in the inner loop
    t = new Array(0);
    ss = t; //used in mult_()
    s0 = t; //used in multMod_(), squareMod_()
    s1 = t; //used in powMod_(), multMod_(), squareMod_()
    s2 = t; //used in powMod_(), multMod_()
    s3 = t; //used in powMod_()
    s4 = t;s5 = t; //used in mod_()
    s6 = t; //used in bigInt2str()
    s7 = t; //used in powMod_()
    T = t; //used in GCD_()
    sa = t; //used in mont_()
    mr_x1 = t;mr_r = t;mr_a = t; //used in millerRabin()
    eg_v = t;eg_u = t;eg_A = t;eg_B = t;eg_C = t;eg_D = t; //used in eGCD_(), inverseMod_()
    md_q1 = t;md_q2 = t;md_q3 = t;md_r = t;md_r1 = t;md_r2 = t;md_tt = t; //used in mod_()

    primes = t;pows = t;s_i = t;s_i2 = t;s_R = t;s_rm = t;s_q = t;s_n1 = t;
    s_a = t;s_r2 = t;s_n = t;s_b = t;s_d = t;s_x1 = t;s_x2 = t, s_aa = t; //used in randTruePrime_()

    rpprb = t; //used in randProbPrimeRounds() (which also uses "primes")

    ////////////////////////////////////////////////////////////////////////////////////////


    //return array of all primes less than integer n
    function findPrimes(n) {
      var i, s, p, ans;
      s = new Array(n);
      for (i = 0; i < n; i++) s[i] = 0;
      s[0] = 2;
      p = 0; //first p elements of s are primes, the rest are a sieve
      for (; s[p] < n;) {
        //s[p] is the pth prime
        for (i = s[p] * s[p]; i < n; i += s[p]) //mark multiples of s[p]
        s[i] = 1;
        p++;
        s[p] = s[p - 1] + 1;
        for (; s[p] < n && s[s[p]]; s[p]++); //find next prime (where s[p]==0)
      }
      ans = new Array(p);
      for (i = 0; i < p; i++) ans[i] = s[i];
      return ans;
    }

    //does a single round of Miller-Rabin base b consider x to be a possible prime?
    //x is a bigInt, and b is an integer, with b<x
    function millerRabinInt(x, b) {
      if (mr_x1.length != x.length) {
        mr_x1 = dup(x);
        mr_r = dup(x);
        mr_a = dup(x);
      }

      copyInt_(mr_a, b);
      return millerRabin(x, mr_a);
    }

    //does a single round of Miller-Rabin base b consider x to be a possible prime?
    //x and b are bigInts with b<x
    function millerRabin(x, b) {
      var i, j, k, s;

      if (mr_x1.length != x.length) {
        mr_x1 = dup(x);
        mr_r = dup(x);
        mr_a = dup(x);
      }

      copy_(mr_a, b);
      copy_(mr_r, x);
      copy_(mr_x1, x);

      addInt_(mr_r, -1);
      addInt_(mr_x1, -1);

      //s=the highest power of two that divides mr_r
      k = 0;
      for (i = 0; i < mr_r.length; i++) for (j = 1; j < mask; j <<= 1) if (x[i] & j) {
        s = k < mr_r.length + bpe ? k : 0;
        i = mr_r.length;
        j = mask;
      } else k++;

      if (s) rightShift_(mr_r, s);

      powMod_(mr_a, mr_r, x);

      if (!equalsInt(mr_a, 1) && !equals(mr_a, mr_x1)) {
        j = 1;
        while (j <= s - 1 && !equals(mr_a, mr_x1)) {
          squareMod_(mr_a, x);
          if (equalsInt(mr_a, 1)) {
            return 0;
          }
          j++;
        }
        if (!equals(mr_a, mr_x1)) {
          return 0;
        }
      }
      return 1;
    }

    //returns how many bits long the bigInt is, not counting leading zeros.
    function bitSize(x) {
      var j, z, w;
      for (j = x.length - 1; x[j] == 0 && j > 0; j--);
      for (z = 0, w = x[j]; w; w >>= 1, z++);
      z += bpe * j;
      return z;
    }

    //return a copy of x with at least n elements, adding leading zeros if needed
    function expand(x, n) {
      var ans = int2bigInt(0, (x.length > n ? x.length : n) * bpe, 0);
      copy_(ans, x);
      return ans;
    }

    //return a k-bit true random prime using Maurer's algorithm.
    function randTruePrime(k) {
      var ans = int2bigInt(0, k, 0);
      randTruePrime_(ans, k);
      return trim(ans, 1);
    }

    //return a k-bit random probable prime with probability of error < 2^-80
    function randProbPrime(k) {
      if (k >= 600) return randProbPrimeRounds(k, 2); //numbers from HAC table 4.3
      if (k >= 550) return randProbPrimeRounds(k, 4);
      if (k >= 500) return randProbPrimeRounds(k, 5);
      if (k >= 400) return randProbPrimeRounds(k, 6);
      if (k >= 350) return randProbPrimeRounds(k, 7);
      if (k >= 300) return randProbPrimeRounds(k, 9);
      if (k >= 250) return randProbPrimeRounds(k, 12); //numbers from HAC table 4.4
      if (k >= 200) return randProbPrimeRounds(k, 15);
      if (k >= 150) return randProbPrimeRounds(k, 18);
      if (k >= 100) return randProbPrimeRounds(k, 27);
      return randProbPrimeRounds(k, 40); //number from HAC remark 4.26 (only an estimate)
    }

    //return a k-bit probable random prime using n rounds of Miller Rabin (after trial division with small primes)
    function randProbPrimeRounds(k, n) {
      var ans, i, divisible, B;
      B = 30000; //B is largest prime to use in trial division
      ans = int2bigInt(0, k, 0);

      //optimization: try larger and smaller B to find the best limit.

      if (primes.length == 0) primes = findPrimes(30000); //check for divisibility by primes <=30000

      if (rpprb.length != ans.length) rpprb = dup(ans);

      for (;;) {
        //keep trying random values for ans until one appears to be prime
        //optimization: pick a random number times L=2*3*5*...*p, plus a
        //   random element of the list of all numbers in [0,L) not divisible by any prime up to p.
        //   This can reduce the amount of random number generation.

        randBigInt_(ans, k, 0); //ans = a random odd number to check
        ans[0] |= 1;
        divisible = 0;

        //check ans for divisibility by small primes up to B
        for (i = 0; i < primes.length && primes[i] <= B; i++) if (modInt(ans, primes[i]) == 0 && !equalsInt(ans, primes[i])) {
          divisible = 1;
          break;
        }

        //optimization: change millerRabin so the base can be bigger than the number being checked, then eliminate the while here.

        //do n rounds of Miller Rabin, with random bases less than ans
        for (i = 0; i < n && !divisible; i++) {
          randBigInt_(rpprb, k, 0);
          while (!greater(ans, rpprb)) //pick a random rpprb that's < ans
          randBigInt_(rpprb, k, 0);
          if (!millerRabin(ans, rpprb)) divisible = 1;
        }

        if (!divisible) return ans;
      }
    }

    //return a new bigInt equal to (x mod n) for bigInts x and n.
    function mod(x, n) {
      var ans = dup(x);
      mod_(ans, n);
      return trim(ans, 1);
    }

    //return (x+n) where x is a bigInt and n is an integer.
    function addInt(x, n) {
      var ans = expand(x, x.length + 1);
      addInt_(ans, n);
      return trim(ans, 1);
    }

    //return x*y for bigInts x and y. This is faster when y<x.
    function mult(x, y) {
      var ans = expand(x, x.length + y.length);
      mult_(ans, y);
      return trim(ans, 1);
    }

    //return (x**y mod n) where x,y,n are bigInts and ** is exponentiation.  0**0=1. Faster for odd n.
    function powMod(x, y, n) {
      var ans = expand(x, n.length);
      powMod_(ans, trim(y, 2), trim(n, 2), 0); //this should work without the trim, but doesn't
      return trim(ans, 1);
    }

    //return (x-y) for bigInts x and y.  Negative answers will be 2s complement
    function sub(x, y) {
      var ans = expand(x, x.length > y.length ? x.length + 1 : y.length + 1);
      sub_(ans, y);
      return trim(ans, 1);
    }

    //return (x+y) for bigInts x and y.
    function add(x, y) {
      var ans = expand(x, x.length > y.length ? x.length + 1 : y.length + 1);
      add_(ans, y);
      return trim(ans, 1);
    }

    //return (x**(-1) mod n) for bigInts x and n.  If no inverse exists, it returns null
    function inverseMod(x, n) {
      var ans = expand(x, n.length);
      var s;
      s = inverseMod_(ans, n);
      return s ? trim(ans, 1) : null;
    }

    //return (x*y mod n) for bigInts x,y,n.  For greater speed, let y<x.
    function multMod(x, y, n) {
      var ans = expand(x, n.length);
      multMod_(ans, y, n);
      return trim(ans, 1);
    }

    //generate a k-bit true random prime using Maurer's algorithm,
    //and put it into ans.  The bigInt ans must be large enough to hold it.
    function randTruePrime_(ans, k) {
      var c, m, pm, dd, j, r, B, divisible, z, zz, recSize;

      if (primes.length == 0) primes = findPrimes(30000); //check for divisibility by primes <=30000

      if (pows.length == 0) {
        pows = new Array(512);
        for (j = 0; j < 512; j++) {
          pows[j] = Math.pow(2, j / 511. - 1.);
        }
      }

      //c and m should be tuned for a particular machine and value of k, to maximize speed
      c = 0.1; //c=0.1 in HAC
      m = 20; //generate this k-bit number by first recursively generating a number that has between k/2 and k-m bits
      recLimit = 20; //stop recursion when k <=recLimit.  Must have recLimit >= 2

      if (s_i2.length != ans.length) {
        s_i2 = dup(ans);
        s_R = dup(ans);
        s_n1 = dup(ans);
        s_r2 = dup(ans);
        s_d = dup(ans);
        s_x1 = dup(ans);
        s_x2 = dup(ans);
        s_b = dup(ans);
        s_n = dup(ans);
        s_i = dup(ans);
        s_rm = dup(ans);
        s_q = dup(ans);
        s_a = dup(ans);
        s_aa = dup(ans);
      }

      if (k <= recLimit) {
        //generate small random primes by trial division up to its square root
        pm = (1 << (k + 2 >> 1)) - 1; //pm is binary number with all ones, just over sqrt(2^k)
        copyInt_(ans, 0);
        for (dd = 1; dd;) {
          dd = 0;
          ans[0] = 1 | 1 << k - 1 | Math.floor(Math.random() * (1 << k)); //random, k-bit, odd integer, with msb 1
          for (j = 1; j < primes.length && (primes[j] & pm) == primes[j]; j++) {
            //trial division by all primes 3...sqrt(2^k)
            if (0 == ans[0] % primes[j]) {
              dd = 1;
              break;
            }
          }
        }
        carry_(ans);
        return;
      }

      B = c * k * k; //try small primes up to B (or all the primes[] array if the largest is less than B).
      if (k > 2 * m) //generate this k-bit number by first recursively generating a number that has between k/2 and k-m bits
        for (r = 1; k - k * r <= m;) r = pows[Math.floor(Math.random() * 512)]; //r=Math.pow(2,Math.random()-1);
      else r = .5;

      //simulation suggests the more complex algorithm using r=.333 is only slightly faster.

      recSize = Math.floor(r * k) + 1;

      randTruePrime_(s_q, recSize);
      copyInt_(s_i2, 0);
      s_i2[Math.floor((k - 2) / bpe)] |= 1 << (k - 2) % bpe; //s_i2=2^(k-2)
      divide_(s_i2, s_q, s_i, s_rm); //s_i=floor((2^(k-1))/(2q))

      z = bitSize(s_i);

      for (;;) {
        for (;;) {
          //generate z-bit numbers until one falls in the range [0,s_i-1]
          randBigInt_(s_R, z, 0);
          if (greater(s_i, s_R)) break;
        } //now s_R is in the range [0,s_i-1]
        addInt_(s_R, 1); //now s_R is in the range [1,s_i]
        add_(s_R, s_i); //now s_R is in the range [s_i+1,2*s_i]

        copy_(s_n, s_q);
        mult_(s_n, s_R);
        multInt_(s_n, 2);
        addInt_(s_n, 1); //s_n=2*s_R*s_q+1

        copy_(s_r2, s_R);
        multInt_(s_r2, 2); //s_r2=2*s_R

        //check s_n for divisibility by small primes up to B
        for (divisible = 0, j = 0; j < primes.length && primes[j] < B; j++) if (modInt(s_n, primes[j]) == 0 && !equalsInt(s_n, primes[j])) {
          divisible = 1;
          break;
        }

        if (!divisible) //if it passes small primes check, then try a single Miller-Rabin base 2
          if (!millerRabinInt(s_n, 2)) //this line represents 75% of the total runtime for randTruePrime_
            divisible = 1;

        if (!divisible) {
          //if it passes that test, continue checking s_n
          addInt_(s_n, -3);
          for (j = s_n.length - 1; s_n[j] == 0 && j > 0; j--); //strip leading zeros
          for (zz = 0, w = s_n[j]; w; w >>= 1, zz++);
          zz += bpe * j; //zz=number of bits in s_n, ignoring leading zeros
          for (;;) {
            //generate z-bit numbers until one falls in the range [0,s_n-1]
            randBigInt_(s_a, zz, 0);
            if (greater(s_n, s_a)) break;
          } //now s_a is in the range [0,s_n-1]
          addInt_(s_n, 3); //now s_a is in the range [0,s_n-4]
          addInt_(s_a, 2); //now s_a is in the range [2,s_n-2]
          copy_(s_b, s_a);
          copy_(s_n1, s_n);
          addInt_(s_n1, -1);
          powMod_(s_b, s_n1, s_n); //s_b=s_a^(s_n-1) modulo s_n
          addInt_(s_b, -1);
          if (isZero(s_b)) {
            copy_(s_b, s_a);
            powMod_(s_b, s_r2, s_n);
            addInt_(s_b, -1);
            copy_(s_aa, s_n);
            copy_(s_d, s_b);
            GCD_(s_d, s_n); //if s_b and s_n are relatively prime, then s_n is a prime
            if (equalsInt(s_d, 1)) {
              copy_(ans, s_aa);
              return; //if we've made it this far, then s_n is absolutely guaranteed to be prime
            }
          }
        }
      }
    }

    //Return an n-bit random BigInt (n>=1).  If s=1, then the most significant of those n bits is set to 1.
    function randBigInt(n, s) {
      var a, b;
      a = Math.floor((n - 1) / bpe) + 2; //# array elements to hold the BigInt with a leading 0 element
      b = int2bigInt(0, 0, a);
      randBigInt_(b, n, s);
      return b;
    }

    //Set b to an n-bit random BigInt.  If s=1, then the most significant of those n bits is set to 1.
    //Array b must be big enough to hold the result. Must have n>=1
    function randBigInt_(b, n, s) {
      var i, a;
      for (i = 0; i < b.length; i++) b[i] = 0;
      a = Math.floor((n - 1) / bpe) + 1; //# array elements to hold the BigInt
      for (i = 0; i < a; i++) {
        b[i] = Math.floor(Math.random() * (1 << bpe - 1));
      }
      b[a - 1] &= (2 << (n - 1) % bpe) - 1;
      if (s == 1) b[a - 1] |= 1 << (n - 1) % bpe;
    }

    //Return the greatest common divisor of bigInts x and y (each with same number of elements).
    function GCD(x, y) {
      var xc, yc;
      xc = dup(x);
      yc = dup(y);
      GCD_(xc, yc);
      return xc;
    }

    //set x to the greatest common divisor of bigInts x and y (each with same number of elements).
    //y is destroyed.
    function GCD_(x, y) {
      var i, xp, yp, A, B, C, D, q, sing;
      if (T.length != x.length) T = dup(x);

      sing = 1;
      while (sing) {
        //while y has nonzero elements other than y[0]
        sing = 0;
        for (i = 1; i < y.length; i++) //check if y has nonzero elements other than 0
        if (y[i]) {
          sing = 1;
          break;
        }
        if (!sing) break; //quit when y all zero elements except possibly y[0]

        for (i = x.length; !x[i] && i >= 0; i--); //find most significant element of x
        xp = x[i];
        yp = y[i];
        A = 1;B = 0;C = 0;D = 1;
        while (yp + C && yp + D) {
          q = Math.floor((xp + A) / (yp + C));
          qp = Math.floor((xp + B) / (yp + D));
          if (q != qp) break;
          t = A - q * C;A = C;C = t; //  do (A,B,xp, C,D,yp) = (C,D,yp, A,B,xp) - q*(0,0,0, C,D,yp)
          t = B - q * D;B = D;D = t;
          t = xp - q * yp;xp = yp;yp = t;
        }
        if (B) {
          copy_(T, x);
          linComb_(x, y, A, B); //x=A*x+B*y
          linComb_(y, T, D, C); //y=D*y+C*T
        } else {
          mod_(x, y);
          copy_(T, x);
          copy_(x, y);
          copy_(y, T);
        }
      }
      if (y[0] == 0) return;
      t = modInt(x, y[0]);
      copyInt_(x, y[0]);
      y[0] = t;
      while (y[0]) {
        x[0] %= y[0];
        t = x[0];x[0] = y[0];y[0] = t;
      }
    }

    //do x=x**(-1) mod n, for bigInts x and n.
    //If no inverse exists, it sets x to zero and returns 0, else it returns 1.
    //The x array must be at least as large as the n array.
    function inverseMod_(x, n) {
      var k = 1 + 2 * Math.max(x.length, n.length);

      if (!(x[0] & 1) && !(n[0] & 1)) {
        //if both inputs are even, then inverse doesn't exist
        copyInt_(x, 0);
        return 0;
      }

      if (eg_u.length != k) {
        eg_u = new Array(k);
        eg_v = new Array(k);
        eg_A = new Array(k);
        eg_B = new Array(k);
        eg_C = new Array(k);
        eg_D = new Array(k);
      }

      copy_(eg_u, x);
      copy_(eg_v, n);
      copyInt_(eg_A, 1);
      copyInt_(eg_B, 0);
      copyInt_(eg_C, 0);
      copyInt_(eg_D, 1);
      for (;;) {
        while (!(eg_u[0] & 1)) {
          //while eg_u is even
          halve_(eg_u);
          if (!(eg_A[0] & 1) && !(eg_B[0] & 1)) {
            //if eg_A==eg_B==0 mod 2
            halve_(eg_A);
            halve_(eg_B);
          } else {
            add_(eg_A, n);halve_(eg_A);
            sub_(eg_B, x);halve_(eg_B);
          }
        }

        while (!(eg_v[0] & 1)) {
          //while eg_v is even
          halve_(eg_v);
          if (!(eg_C[0] & 1) && !(eg_D[0] & 1)) {
            //if eg_C==eg_D==0 mod 2
            halve_(eg_C);
            halve_(eg_D);
          } else {
            add_(eg_C, n);halve_(eg_C);
            sub_(eg_D, x);halve_(eg_D);
          }
        }

        if (!greater(eg_v, eg_u)) {
          //eg_v <= eg_u
          sub_(eg_u, eg_v);
          sub_(eg_A, eg_C);
          sub_(eg_B, eg_D);
        } else {
          //eg_v > eg_u
          sub_(eg_v, eg_u);
          sub_(eg_C, eg_A);
          sub_(eg_D, eg_B);
        }

        if (equalsInt(eg_u, 0)) {
          while (negative(eg_C)) //make sure answer is nonnegative
          add_(eg_C, n);
          copy_(x, eg_C);

          if (!equalsInt(eg_v, 1)) {
            //if GCD_(x,n)!=1, then there is no inverse
            copyInt_(x, 0);
            return 0;
          }
          return 1;
        }
      }
    }

    //return x**(-1) mod n, for integers x and n.  Return 0 if there is no inverse
    function inverseModInt(x, n) {
      var a = 1,
          b = 0,
          t;
      for (;;) {
        if (x == 1) return a;
        if (x == 0) return 0;
        b -= a * Math.floor(n / x);
        n %= x;

        if (n == 1) return b; //to avoid negatives, change this b to n-b, and each -= to +=
        if (n == 0) return 0;
        a -= b * Math.floor(x / n);
        x %= n;
      }
    }

    //this deprecated function is for backward compatibility only.
    function inverseModInt_(x, n) {
      return inverseModInt(x, n);
    }

    //Given positive bigInts x and y, change the bigints v, a, and b to positive bigInts such that:
    //     v = GCD_(x,y) = a*x-b*y
    //The bigInts v, a, b, must have exactly as many elements as the larger of x and y.
    function eGCD_(x, y, v, a, b) {
      var g = 0;
      var k = Math.max(x.length, y.length);
      if (eg_u.length != k) {
        eg_u = new Array(k);
        eg_A = new Array(k);
        eg_B = new Array(k);
        eg_C = new Array(k);
        eg_D = new Array(k);
      }
      while (!(x[0] & 1) && !(y[0] & 1)) {
        //while x and y both even
        halve_(x);
        halve_(y);
        g++;
      }
      copy_(eg_u, x);
      copy_(v, y);
      copyInt_(eg_A, 1);
      copyInt_(eg_B, 0);
      copyInt_(eg_C, 0);
      copyInt_(eg_D, 1);
      for (;;) {
        while (!(eg_u[0] & 1)) {
          //while u is even
          halve_(eg_u);
          if (!(eg_A[0] & 1) && !(eg_B[0] & 1)) {
            //if A==B==0 mod 2
            halve_(eg_A);
            halve_(eg_B);
          } else {
            add_(eg_A, y);halve_(eg_A);
            sub_(eg_B, x);halve_(eg_B);
          }
        }

        while (!(v[0] & 1)) {
          //while v is even
          halve_(v);
          if (!(eg_C[0] & 1) && !(eg_D[0] & 1)) {
            //if C==D==0 mod 2
            halve_(eg_C);
            halve_(eg_D);
          } else {
            add_(eg_C, y);halve_(eg_C);
            sub_(eg_D, x);halve_(eg_D);
          }
        }

        if (!greater(v, eg_u)) {
          //v<=u
          sub_(eg_u, v);
          sub_(eg_A, eg_C);
          sub_(eg_B, eg_D);
        } else {
          //v>u
          sub_(v, eg_u);
          sub_(eg_C, eg_A);
          sub_(eg_D, eg_B);
        }
        if (equalsInt(eg_u, 0)) {
          while (negative(eg_C)) {
            //make sure a (C) is nonnegative
            add_(eg_C, y);
            sub_(eg_D, x);
          }
          multInt_(eg_D, -1); ///make sure b (D) is nonnegative
          copy_(a, eg_C);
          copy_(b, eg_D);
          leftShift_(v, g);
          return;
        }
      }
    }

    //is bigInt x negative?
    function negative(x) {
      return x[x.length - 1] >> bpe - 1 & 1;
    }

    //is (x << (shift*bpe)) > y?
    //x and y are nonnegative bigInts
    //shift is a nonnegative integer
    function greaterShift(x, y, shift) {
      var i,
          kx = x.length,
          ky = y.length;
      k = kx + shift < ky ? kx + shift : ky;
      for (i = ky - 1 - shift; i < kx && i >= 0; i++) if (x[i] > 0) return 1; //if there are nonzeros in x to the left of the first column of y, then x is bigger
      for (i = kx - 1 + shift; i < ky; i++) if (y[i] > 0) return 0; //if there are nonzeros in y to the left of the first column of x, then x is not bigger
      for (i = k - 1; i >= shift; i--) if (x[i - shift] > y[i]) return 1;else if (x[i - shift] < y[i]) return 0;
      return 0;
    }

    //is x > y? (x and y both nonnegative)
    function greater(x, y) {
      var i;
      var k = x.length < y.length ? x.length : y.length;

      for (i = x.length; i < y.length; i++) if (y[i]) return 0; //y has more digits

      for (i = y.length; i < x.length; i++) if (x[i]) return 1; //x has more digits

      for (i = k - 1; i >= 0; i--) if (x[i] > y[i]) return 1;else if (x[i] < y[i]) return 0;
      return 0;
    }

    //divide x by y giving quotient q and remainder r.  (q=floor(x/y),  r=x mod y).  All 4 are bigints.
    //x must have at least one leading zero element.
    //y must be nonzero.
    //q and r must be arrays that are exactly the same length as x. (Or q can have more).
    //Must have x.length >= y.length >= 2.
    function divide_(x, y, q, r) {
      var kx, ky;
      var i, j, y1, y2, c, a, b;
      copy_(r, x);
      for (ky = y.length; y[ky - 1] == 0; ky--); //ky is number of elements in y, not including leading zeros

      //normalize: ensure the most significant element of y has its highest bit set
      b = y[ky - 1];
      for (a = 0; b; a++) b >>= 1;
      a = bpe - a; //a is how many bits to shift so that the high order bit of y is leftmost in its array element
      leftShift_(y, a); //multiply both by 1<<a now, then divide both by that at the end
      leftShift_(r, a);

      //Rob Visser discovered a bug: the following line was originally just before the normalization.
      for (kx = r.length; r[kx - 1] == 0 && kx > ky; kx--); //kx is number of elements in normalized x, not including leading zeros

      copyInt_(q, 0); // q=0
      while (!greaterShift(y, r, kx - ky)) {
        // while (leftShift_(y,kx-ky) <= r) {
        subShift_(r, y, kx - ky); //   r=r-leftShift_(y,kx-ky)
        q[kx - ky]++; //   q[kx-ky]++;
      } // }

      for (i = kx - 1; i >= ky; i--) {
        if (r[i] == y[ky - 1]) q[i - ky] = mask;else q[i - ky] = Math.floor((r[i] * radix + r[i - 1]) / y[ky - 1]);

        //The following for(;;) loop is equivalent to the commented while loop,
        //except that the uncommented version avoids overflow.
        //The commented loop comes from HAC, which assumes r[-1]==y[-1]==0
        //  while (q[i-ky]*(y[ky-1]*radix+y[ky-2]) > r[i]*radix*radix+r[i-1]*radix+r[i-2])
        //    q[i-ky]--;
        for (;;) {
          y2 = (ky > 1 ? y[ky - 2] : 0) * q[i - ky];
          c = y2 >> bpe;
          y2 = y2 & mask;
          y1 = c + q[i - ky] * y[ky - 1];
          c = y1 >> bpe;
          y1 = y1 & mask;

          if (c == r[i] ? y1 == r[i - 1] ? y2 > (i > 1 ? r[i - 2] : 0) : y1 > r[i - 1] : c > r[i]) q[i - ky]--;else break;
        }

        linCombShift_(r, y, -q[i - ky], i - ky); //r=r-q[i-ky]*leftShift_(y,i-ky)
        if (negative(r)) {
          addShift_(r, y, i - ky); //r=r+leftShift_(y,i-ky)
          q[i - ky]--;
        }
      }

      rightShift_(y, a); //undo the normalization step
      rightShift_(r, a); //undo the normalization step
    }

    //do carries and borrows so each element of the bigInt x fits in bpe bits.
    function carry_(x) {
      var i, k, c, b;
      k = x.length;
      c = 0;
      for (i = 0; i < k; i++) {
        c += x[i];
        b = 0;
        if (c < 0) {
          b = -(c >> bpe);
          c += b * radix;
        }
        x[i] = c & mask;
        c = (c >> bpe) - b;
      }
    }

    //return x mod n for bigInt x and integer n.
    function modInt(x, n) {
      var i,
          c = 0;
      for (i = x.length - 1; i >= 0; i--) c = (c * radix + x[i]) % n;
      return c;
    }

    //convert the integer t into a bigInt with at least the given number of bits.
    //the returned array stores the bigInt in bpe-bit chunks, little endian (buff[0] is least significant word)
    //Pad the array with leading zeros so that it has at least minSize elements.
    //There will always be at least one leading 0 element.
    function int2bigInt(t, bits, minSize) {
      var i, k;
      k = Math.ceil(bits / bpe) + 1;
      k = minSize > k ? minSize : k;
      buff = new Array(k);
      copyInt_(buff, t);
      return buff;
    }

    //return the bigInt given a string representation in a given base.
    //Pad the array with leading zeros so that it has at least minSize elements.
    //If base=-1, then it reads in a space-separated list of array elements in decimal.
    //The array will always have at least one leading zero, unless base=-1.
    function str2bigInt(s, base, minSize) {
      var d, i, j, x, y, kk;
      var k = s.length;
      if (base == -1) {
        //comma-separated list of array elements in decimal
        x = new Array(0);
        for (;;) {
          y = new Array(x.length + 1);
          for (i = 0; i < x.length; i++) y[i + 1] = x[i];
          y[0] = parseInt(s, 10);
          x = y;
          d = s.indexOf(',', 0);
          if (d < 1) break;
          s = s.substring(d + 1);
          if (s.length == 0) break;
        }
        if (x.length < minSize) {
          y = new Array(minSize);
          copy_(y, x);
          return y;
        }
        return x;
      }

      x = int2bigInt(0, base * k, 0);
      for (i = 0; i < k; i++) {
        d = digitsStr.indexOf(s.substring(i, i + 1), 0);
        if (base <= 36 && d >= 36) //convert lowercase to uppercase if base<=36
          d -= 26;
        if (d >= base || d < 0) {
          //stop at first illegal character
          break;
        }
        multInt_(x, base);
        addInt_(x, d);
      }

      for (k = x.length; k > 0 && !x[k - 1]; k--); //strip off leading zeros
      k = minSize > k + 1 ? minSize : k + 1;
      y = new Array(k);
      kk = k < x.length ? k : x.length;
      for (i = 0; i < kk; i++) y[i] = x[i];
      for (; i < k; i++) y[i] = 0;
      return y;
    }

    //is bigint x equal to integer y?
    //y must have less than bpe bits
    function equalsInt(x, y) {
      var i;
      if (x[0] != y) return 0;
      for (i = 1; i < x.length; i++) if (x[i]) return 0;
      return 1;
    }

    //are bigints x and y equal?
    //this works even if x and y are different lengths and have arbitrarily many leading zeros
    function equals(x, y) {
      var i;
      var k = x.length < y.length ? x.length : y.length;
      for (i = 0; i < k; i++) if (x[i] != y[i]) return 0;
      if (x.length > y.length) {
        for (; i < x.length; i++) if (x[i]) return 0;
      } else {
        for (; i < y.length; i++) if (y[i]) return 0;
      }
      return 1;
    }

    //is the bigInt x equal to zero?
    function isZero(x) {
      var i;
      for (i = 0; i < x.length; i++) if (x[i]) return 0;
      return 1;
    }

    //convert a bigInt into a string in a given base, from base 2 up to base 95.
    //Base -1 prints the contents of the array representing the number.
    function bigInt2str(x, base) {
      var i,
          t,
          s = "";

      if (s6.length != x.length) s6 = dup(x);else copy_(s6, x);

      if (base == -1) {
        //return the list of array contents
        for (i = x.length - 1; i > 0; i--) s += x[i] + ',';
        s += x[0];
      } else {
        //return it in the given base
        while (!isZero(s6)) {
          t = divInt_(s6, base); //t=s6 % base; s6=floor(s6/base);
          s = digitsStr.substring(t, t + 1) + s;
        }
      }
      if (s.length == 0) s = "0";
      return s;
    }

    //returns a duplicate of bigInt x
    function dup(x) {
      var i;
      buff = new Array(x.length);
      copy_(buff, x);
      return buff;
    }

    //do x=y on bigInts x and y.  x must be an array at least as big as y (not counting the leading zeros in y).
    function copy_(x, y) {
      var i;
      var k = x.length < y.length ? x.length : y.length;
      for (i = 0; i < k; i++) x[i] = y[i];
      for (i = k; i < x.length; i++) x[i] = 0;
    }

    //do x=y on bigInt x and integer y.
    function copyInt_(x, n) {
      var i, c;
      for (c = n, i = 0; i < x.length; i++) {
        x[i] = c & mask;
        c >>= bpe;
      }
    }

    //do x=x+n where x is a bigInt and n is an integer.
    //x must be large enough to hold the result.
    function addInt_(x, n) {
      var i, k, c, b;
      x[0] += n;
      k = x.length;
      c = 0;
      for (i = 0; i < k; i++) {
        c += x[i];
        b = 0;
        if (c < 0) {
          b = -(c >> bpe);
          c += b * radix;
        }
        x[i] = c & mask;
        c = (c >> bpe) - b;
        if (!c) return; //stop carrying as soon as the carry is zero
      }
    }

    //right shift bigInt x by n bits.  0 <= n < bpe.
    function rightShift_(x, n) {
      var i;
      var k = Math.floor(n / bpe);
      if (k) {
        for (i = 0; i < x.length - k; i++) //right shift x by k elements
        x[i] = x[i + k];
        for (; i < x.length; i++) x[i] = 0;
        n %= bpe;
      }
      for (i = 0; i < x.length - 1; i++) {
        x[i] = mask & (x[i + 1] << bpe - n | x[i] >> n);
      }
      x[i] >>= n;
    }

    //do x=floor(|x|/2)*sgn(x) for bigInt x in 2's complement
    function halve_(x) {
      var i;
      for (i = 0; i < x.length - 1; i++) {
        x[i] = mask & (x[i + 1] << bpe - 1 | x[i] >> 1);
      }
      x[i] = x[i] >> 1 | x[i] & radix >> 1; //most significant bit stays the same
    }

    //left shift bigInt x by n bits.
    function leftShift_(x, n) {
      var i;
      var k = Math.floor(n / bpe);
      if (k) {
        for (i = x.length; i >= k; i--) //left shift x by k elements
        x[i] = x[i - k];
        for (; i >= 0; i--) x[i] = 0;
        n %= bpe;
      }
      if (!n) return;
      for (i = x.length - 1; i > 0; i--) {
        x[i] = mask & (x[i] << n | x[i - 1] >> bpe - n);
      }
      x[i] = mask & x[i] << n;
    }

    //do x=x*n where x is a bigInt and n is an integer.
    //x must be large enough to hold the result.
    function multInt_(x, n) {
      var i, k, c, b;
      if (!n) return;
      k = x.length;
      c = 0;
      for (i = 0; i < k; i++) {
        c += x[i] * n;
        b = 0;
        if (c < 0) {
          b = -(c >> bpe);
          c += b * radix;
        }
        x[i] = c & mask;
        c = (c >> bpe) - b;
      }
    }

    //do x=floor(x/n) for bigInt x and integer n, and return the remainder
    function divInt_(x, n) {
      var i,
          r = 0,
          s;
      for (i = x.length - 1; i >= 0; i--) {
        s = r * radix + x[i];
        x[i] = Math.floor(s / n);
        r = s % n;
      }
      return r;
    }

    //do the linear combination x=a*x+b*y for bigInts x and y, and integers a and b.
    //x must be large enough to hold the answer.
    function linComb_(x, y, a, b) {
      var i, c, k, kk;
      k = x.length < y.length ? x.length : y.length;
      kk = x.length;
      for (c = 0, i = 0; i < k; i++) {
        c += a * x[i] + b * y[i];
        x[i] = c & mask;
        c >>= bpe;
      }
      for (i = k; i < kk; i++) {
        c += a * x[i];
        x[i] = c & mask;
        c >>= bpe;
      }
    }

    //do the linear combination x=a*x+b*(y<<(ys*bpe)) for bigInts x and y, and integers a, b and ys.
    //x must be large enough to hold the answer.
    function linCombShift_(x, y, b, ys) {
      var i, c, k, kk;
      k = x.length < ys + y.length ? x.length : ys + y.length;
      kk = x.length;
      for (c = 0, i = ys; i < k; i++) {
        c += x[i] + b * y[i - ys];
        x[i] = c & mask;
        c >>= bpe;
      }
      for (i = k; c && i < kk; i++) {
        c += x[i];
        x[i] = c & mask;
        c >>= bpe;
      }
    }

    //do x=x+(y<<(ys*bpe)) for bigInts x and y, and integers a,b and ys.
    //x must be large enough to hold the answer.
    function addShift_(x, y, ys) {
      var i, c, k, kk;
      k = x.length < ys + y.length ? x.length : ys + y.length;
      kk = x.length;
      for (c = 0, i = ys; i < k; i++) {
        c += x[i] + y[i - ys];
        x[i] = c & mask;
        c >>= bpe;
      }
      for (i = k; c && i < kk; i++) {
        c += x[i];
        x[i] = c & mask;
        c >>= bpe;
      }
    }

    //do x=x-(y<<(ys*bpe)) for bigInts x and y, and integers a,b and ys.
    //x must be large enough to hold the answer.
    function subShift_(x, y, ys) {
      var i, c, k, kk;
      k = x.length < ys + y.length ? x.length : ys + y.length;
      kk = x.length;
      for (c = 0, i = ys; i < k; i++) {
        c += x[i] - y[i - ys];
        x[i] = c & mask;
        c >>= bpe;
      }
      for (i = k; c && i < kk; i++) {
        c += x[i];
        x[i] = c & mask;
        c >>= bpe;
      }
    }

    //do x=x-y for bigInts x and y.
    //x must be large enough to hold the answer.
    //negative answers will be 2s complement
    function sub_(x, y) {
      var i, c, k, kk;
      k = x.length < y.length ? x.length : y.length;
      for (c = 0, i = 0; i < k; i++) {
        c += x[i] - y[i];
        x[i] = c & mask;
        c >>= bpe;
      }
      for (i = k; c && i < x.length; i++) {
        c += x[i];
        x[i] = c & mask;
        c >>= bpe;
      }
    }

    //do x=x+y for bigInts x and y.
    //x must be large enough to hold the answer.
    function add_(x, y) {
      var i, c, k, kk;
      k = x.length < y.length ? x.length : y.length;
      for (c = 0, i = 0; i < k; i++) {
        c += x[i] + y[i];
        x[i] = c & mask;
        c >>= bpe;
      }
      for (i = k; c && i < x.length; i++) {
        c += x[i];
        x[i] = c & mask;
        c >>= bpe;
      }
    }

    //do x=x*y for bigInts x and y.  This is faster when y<x.
    function mult_(x, y) {
      var i;
      if (ss.length != 2 * x.length) ss = new Array(2 * x.length);
      copyInt_(ss, 0);
      for (i = 0; i < y.length; i++) if (y[i]) linCombShift_(ss, x, y[i], i); //ss=1*ss+y[i]*(x<<(i*bpe))
      copy_(x, ss);
    }

    //do x=x mod n for bigInts x and n.
    function mod_(x, n) {
      if (s4.length != x.length) s4 = dup(x);else copy_(s4, x);
      if (s5.length != x.length) s5 = dup(x);
      divide_(s4, n, s5, x); //x = remainder of s4 / n
    }

    //do x=x*y mod n for bigInts x,y,n.
    //for greater speed, let y<x.
    function multMod_(x, y, n) {
      var i;
      if (s0.length != 2 * x.length) s0 = new Array(2 * x.length);
      copyInt_(s0, 0);
      for (i = 0; i < y.length; i++) if (y[i]) linCombShift_(s0, x, y[i], i); //s0=1*s0+y[i]*(x<<(i*bpe))
      mod_(s0, n);
      copy_(x, s0);
    }

    //do x=x*x mod n for bigInts x,n.
    function squareMod_(x, n) {
      var i, j, d, c, kx, kn, k;
      for (kx = x.length; kx > 0 && !x[kx - 1]; kx--); //ignore leading zeros in x
      k = kx > n.length ? 2 * kx : 2 * n.length; //k=# elements in the product, which is twice the elements in the larger of x and n
      if (s0.length != k) s0 = new Array(k);
      copyInt_(s0, 0);
      for (i = 0; i < kx; i++) {
        c = s0[2 * i] + x[i] * x[i];
        s0[2 * i] = c & mask;
        c >>= bpe;
        for (j = i + 1; j < kx; j++) {
          c = s0[i + j] + 2 * x[i] * x[j] + c;
          s0[i + j] = c & mask;
          c >>= bpe;
        }
        s0[i + kx] = c;
      }
      mod_(s0, n);
      copy_(x, s0);
    }

    //return x with exactly k leading zero elements
    function trim(x, k) {
      var i, y;
      for (i = x.length; i > 0 && !x[i - 1]; i--);
      y = new Array(i + k);
      copy_(y, x);
      return y;
    }

    //do x=x**y mod n, where x,y,n are bigInts and ** is exponentiation.  0**0=1.
    //this is faster when n is odd.  x usually needs to have as many elements as n.
    function powMod_(x, y, n) {
      var k1, k2, kn, np;
      if (s7.length != n.length) s7 = dup(n);

      //for even modulus, use a simple square-and-multiply algorithm,
      //rather than using the more complex Montgomery algorithm.
      if ((n[0] & 1) == 0) {
        copy_(s7, x);
        copyInt_(x, 1);
        while (!equalsInt(y, 0)) {
          if (y[0] & 1) multMod_(x, s7, n);
          divInt_(y, 2);
          squareMod_(s7, n);
        }
        return;
      }

      //calculate np from n for the Montgomery multiplications
      copyInt_(s7, 0);
      for (kn = n.length; kn > 0 && !n[kn - 1]; kn--);
      np = radix - inverseModInt(modInt(n, radix), radix);
      s7[kn] = 1;
      multMod_(x, s7, n); // x = x * 2**(kn*bp) mod n

      if (s3.length != x.length) s3 = dup(x);else copy_(s3, x);

      for (k1 = y.length - 1; k1 > 0 & !y[k1]; k1--); //k1=first nonzero element of y
      if (y[k1] == 0) {
        //anything to the 0th power is 1
        copyInt_(x, 1);
        return;
      }
      for (k2 = 1 << bpe - 1; k2 && !(y[k1] & k2); k2 >>= 1); //k2=position of first 1 bit in y[k1]
      for (;;) {
        if (!(k2 >>= 1)) {
          //look at next bit of y
          k1--;
          if (k1 < 0) {
            mont_(x, one, n, np);
            return;
          }
          k2 = 1 << bpe - 1;
        }
        mont_(x, x, n, np);

        if (k2 & y[k1]) //if next bit is a 1
          mont_(x, s3, n, np);
      }
    }

    //do x=x*y*Ri mod n for bigInts x,y,n,
    //  where Ri = 2**(-kn*bpe) mod n, and kn is the
    //  number of elements in the n array, not
    //  counting leading zeros.
    //x array must have at least as many elemnts as the n array
    //It's OK if x and y are the same variable.
    //must have:
    //  x,y < n
    //  n is odd
    //  np = -(n^(-1)) mod radix
    function mont_(x, y, n, np) {
      var i, j, c, ui, t, ks;
      var kn = n.length;
      var ky = y.length;

      if (sa.length != kn) sa = new Array(kn);

      copyInt_(sa, 0);

      for (; kn > 0 && n[kn - 1] == 0; kn--); //ignore leading zeros of n
      for (; ky > 0 && y[ky - 1] == 0; ky--); //ignore leading zeros of y
      ks = sa.length - 1; //sa will never have more than this many nonzero elements.

      //the following loop consumes 95% of the runtime for randTruePrime_() and powMod_() for large numbers
      for (i = 0; i < kn; i++) {
        t = sa[0] + x[i] * y[0];
        ui = (t & mask) * np & mask; //the inner "& mask" was needed on Safari (but not MSIE) at one time
        c = t + ui * n[0] >> bpe;
        t = x[i];

        //do sa=(sa+x[i]*y+ui*n)/b   where b=2**bpe.  Loop is unrolled 5-fold for speed
        j = 1;
        for (; j < ky - 4;) {
          c += sa[j] + ui * n[j] + t * y[j];sa[j - 1] = c & mask;c >>= bpe;j++;
          c += sa[j] + ui * n[j] + t * y[j];sa[j - 1] = c & mask;c >>= bpe;j++;
          c += sa[j] + ui * n[j] + t * y[j];sa[j - 1] = c & mask;c >>= bpe;j++;
          c += sa[j] + ui * n[j] + t * y[j];sa[j - 1] = c & mask;c >>= bpe;j++;
          c += sa[j] + ui * n[j] + t * y[j];sa[j - 1] = c & mask;c >>= bpe;j++;
        }
        for (; j < ky;) {
          c += sa[j] + ui * n[j] + t * y[j];sa[j - 1] = c & mask;c >>= bpe;j++;
        }
        for (; j < kn - 4;) {
          c += sa[j] + ui * n[j];sa[j - 1] = c & mask;c >>= bpe;j++;
          c += sa[j] + ui * n[j];sa[j - 1] = c & mask;c >>= bpe;j++;
          c += sa[j] + ui * n[j];sa[j - 1] = c & mask;c >>= bpe;j++;
          c += sa[j] + ui * n[j];sa[j - 1] = c & mask;c >>= bpe;j++;
          c += sa[j] + ui * n[j];sa[j - 1] = c & mask;c >>= bpe;j++;
        }
        for (; j < kn;) {
          c += sa[j] + ui * n[j];sa[j - 1] = c & mask;c >>= bpe;j++;
        }
        for (; j < ks;) {
          c += sa[j];sa[j - 1] = c & mask;c >>= bpe;j++;
        }
        sa[j - 1] = c & mask;
      }

      if (!greater(n, sa)) sub_(sa, n);
      copy_(x, sa);
    }
  })(this);

  return _retrieveGlobal();
});
$__System.register("e", [], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", TextEncoder);
    }
  };
});
$__System.register("f", [], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", TextDecoder);
    }
  };
});
$__System.register('8', ['e', 'f'], function (_export) {
  /* eslint-disable no-bitwise */
  /* eslint-disable no-param-reassign */
  /* eslint-disable no-plusplus */
  /* eslint-disable no-sparse-arrays */

  'use strict';

  var TextEncoder, TextDecoder, decoder, encoder, toBase64, fromBase64;

  function toByteArray(data) {
    if (data.buffer) {
      return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
    }
    return new Uint8Array(data);
  }

  /* Encodes a Uint8Array as a base64 string */
  function toBase64Fast(data) {
    data = toByteArray(data);
    var CHUNK_SIZE = 32767;
    var c = [];
    for (var i = 0; i < data.length; i += CHUNK_SIZE) {
      c.push(String.fromCharCode.apply(null, data.subarray(i, i + CHUNK_SIZE)));
    }
    return btoa(c.join(''));
  }

  /* Decodes a base64 string as a Uint8Array */
  function fromBase64Fast(data) {
    var dec = atob(data);
    var len = dec.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
      bytes[i] = dec.charCodeAt(i);
    }
    return bytes;
  }

  /* toBase64 without using btoa */
  function toBase64Slow(data) {
    data = toByteArray(data);
    var modtable = [0, 2, 1];
    var enctable = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var inlength = data.byteLength;
    var outlength = 4 * Math.floor((inlength + 2) / 3);

    var encdata = new Array(outlength);

    for (var i = 0, j = 0; i < inlength;) {
      var octa = i < inlength ? data[i++] : 0;
      var octb = i < inlength ? data[i++] : 0;
      var octc = i < inlength ? data[i++] : 0;

      var triple = (octa << 0x10) + (octb << 0x08) + octc;

      encdata[j++] = enctable[triple >> 3 * 6 & 0x3F];
      encdata[j++] = enctable[triple >> 2 * 6 & 0x3F];
      encdata[j++] = enctable[triple >> 1 * 6 & 0x3F];
      encdata[j++] = enctable[triple >> 0 * 6 & 0x3F];
    }

    for (var i = 0; i < modtable[inlength % 3]; i++) {
      encdata[outlength - 1 - i] = '=';
    }

    return encdata.join('');
  }

  /* fromBase64 without using atob */
  function fromBase64Slow(data) {
    var dectable = [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, 62,,,, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61,,,,,,,, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,,,,,,, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];

    var inlength = data.length;
    if (inlength % 4 !== 0) {
      return null;
    }

    var outlength = Math.floor(inlength / 4) * 3;
    if (data[inlength - 1] === '=') {
      outlength--;
    }
    if (data[inlength - 2] === '=') {
      outlength--;
    }

    var decdata = new Uint8Array(outlength);
    for (var i = 0, j = 0; i < inlength;) {
      var sexta = data[i] === '=' ? 0 & i++ : dectable[data[i++].charCodeAt()];
      var sextb = data[i] === '=' ? 0 & i++ : dectable[data[i++].charCodeAt()];
      var sextc = data[i] === '=' ? 0 & i++ : dectable[data[i++].charCodeAt()];
      var sextd = data[i] === '=' ? 0 & i++ : dectable[data[i++].charCodeAt()];

      var triple = (sexta << 3 * 6) + (sextb << 2 * 6) + (sextc << 1 * 6) + (sextd << 0 * 6);
      if (j < outlength) {
        decdata[j++] = triple >> 2 * 8 & 0xFF;
      }
      if (j < outlength) {
        decdata[j++] = triple >> 1 * 8 & 0xFF;
      }
      if (j < outlength) {
        decdata[j++] = triple >> 0 * 8 & 0xFF;
      }
    }
    return decdata;
  }

  /* Encodes a Uint8Array as an hex string */
  function toHex(data) {
    data = toByteArray(data);
    var enctablehex = '0123456789abcdef';
    var inlength = data.byteLength;
    var encdata = [];
    for (var i = 0; i < inlength; ++i) {
      encdata[2 * i] = enctablehex[data[i] >> 4];
      encdata[2 * i + 1] = enctablehex[data[i] & 0x0F];
    }
    return encdata.join('');
  }

  /* Decodes an hex string as a Uint8Array */
  function fromHex(data) {
    var dectablehex = [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, 10, 11, 12, 13, 14, 15];

    data = data.toLowerCase();
    if (data.length % 2 !== 0) {
      throw new Error('fromHex: ' + data + ' has odd length');
    }
    var outlength = data.length / 2;
    var decdata = new Uint8Array(outlength);
    for (var i = 0; i < outlength; i++) {
      decdata[i] = dectablehex[data[2 * i].charCodeAt()] << 4 | dectablehex[data[2 * i + 1].charCodeAt()];
    }
    return decdata;
  }

  /* Returns a string given a Uint8Array UTF-8 encoding */

  function fromUTF8(bytes) {
    return decoder.decode(toByteArray(bytes));
  }

  /* Returns a Uint8Array UTF-8 encoding of the given string */

  function toUTF8(str) {
    return encoder.encode(str);
  }

  return {
    setters: [function (_platformTextEncoder) {
      TextEncoder = _platformTextEncoder['default'];
    }, function (_platformTextDecoder) {
      TextDecoder = _platformTextDecoder['default'];
    }],
    execute: function () {
      decoder = new TextDecoder();
      encoder = new TextEncoder();
      toBase64 = typeof btoa !== 'undefined' ? toBase64Fast : toBase64Slow;
      fromBase64 = typeof atob !== 'undefined' ? fromBase64Fast : fromBase64Slow;

      _export('toBase64', toBase64);

      _export('fromBase64', fromBase64);

      _export('toHex', toHex);

      _export('fromHex', fromHex);

      _export('toUTF8', toUTF8);

      _export('fromUTF8', fromUTF8);
    }
  };
});
$__System.register("b", [], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", crypto);
    }
  };
});
$__System.register('9', ['d', '3', '8', 'b'], function (_export) {
    'use strict';

    var randBigInt, CliqzSecureMessage, fromBase64, toUTF8, toHex, crypto, blindSignContext;

    _export('parseDSKey', parseDSKey);

    _export('unBlindMessage', unBlindMessage);

    function base64UrlDecode(str) {
        str = atob(str.replace(/-/g, '+').replace(/_/g, '/'));
        var buffer = new Uint8Array(str.length);
        for (var i = 0; i < str.length; ++i) {
            buffer[i] = str.charCodeAt(i);
        }
        return buffer;
    }

    function h2d(s) {
        function add(x, y) {
            var c = 0,
                r = [];
            var x = x.split('').map(Number);
            var y = y.split('').map(Number);
            while (x.length || y.length) {
                var s = (x.pop() || 0) + (y.pop() || 0) + c;
                r.unshift(s < 10 ? s : s - 10);
                c = s < 10 ? 0 : 1;
            }
            if (c) r.unshift(c);
            return r.join('');
        }

        var dec = '0';
        s.split('').forEach(function (chr) {
            var n = parseInt(chr, 16);
            for (var t = 8; t; t >>= 1) {
                dec = add(dec, dec);
                if (n & t) dec = add(dec, '1');
            }
        });
        return dec;
    }

    function parseDSKey() {
        // Parse key contents.
        var _this = this;
        return new Promise(function (resolve, reject) {
            crypto.subtle.importKey('spki', fromBase64(CliqzSecureMessage.dsPK.pubKeyB64), {
                name: 'RSA-OAEP',
                hash: { name: 'SHA-1' }
            }, true, ['encrypt']).then(function (key) {
                crypto.subtle.exportKey("jwk", key).then(function (key) {
                    // base64url-decode modulus
                    var modulus = base64UrlDecode(key.n);
                    CliqzSecureMessage.dsPK["n"] = h2d(toHex(modulus));
                    // base64url-decode exponent
                    var exponent = base64UrlDecode(key.e);
                    CliqzSecureMessage.dsPK["e"] = '' + h2d(toHex(exponent));
                    resolve();
                    // modulus and exponent are now Uint8Arrays
                })['catch'](function (err) {
                    return console.log(err);
                });
            });
        });
    }

    function unBlindMessage(blindSignedMessage, unBlinder) {
        // Unblind the message before sending it for verification.
        // s = u*(bs) mod n
        var _us = multMod(unBlinder, str2bigInt(blindSignedMessage, 16), str2bigInt(CliqzSecureMessage.dsPK.n, 10));
        var us = bigInt2str(_us, 10, 0);
        return us;
    }

    function verifyBlindSignature(signedMessage, hashedOriginalMessage) {
        // Verify the message to see, the signer is not the problem.
        // m = s^e mod n

        var message_signed = bigInt2str(powMod(str2bigInt(signedMessage, 10, 0), str2bigInt(CliqzSecureMessage.dsPK.e, 10), str2bigInt(CliqzSecureMessage.dsPK.n, 10)), 10);
        var original_message = bigInt2str(str2bigInt(hashedOriginalMessage, 16), 10);

        if (original_message === message_signed.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    }
    // Set the context for blind signatures right.
    return {
        setters: [function (_bigint) {
            randBigInt = _bigint['default'];
        }, function (_index) {
            CliqzSecureMessage = _index['default'];
        }, function (_coreEncoding) {
            fromBase64 = _coreEncoding.fromBase64;
            toUTF8 = _coreEncoding.toUTF8;
            toHex = _coreEncoding.toHex;
        }, function (_platformCrypto) {
            crypto = _platformCrypto['default'];
        }],
        execute: function () {
            blindSignContext = function blindSignContext(msg) {
                /*
                Initialize it with the following:
                1. Signer Public Key
                2. Signer Public Exponent
                3. Signer Public Modulous
                */

                // this.keyObj = new JSEncrypt();
                this.randomNumber = null;
                this.blindingNonce = null;
                this.blinder = null;
                this.unblinder = null;
                this.keySize = 4096;
                this.hashedMessage = "";
                this.bm = "";
                this.signedMessage = "";
                this.msg = msg;
            };

            _export('blindSignContext', blindSignContext);

            blindSignContext.prototype.exponent = function () {
                // Return the public exponent
                return this.e;
            };

            blindSignContext.prototype.modulus = function () {
                // Return the public modulous
                return this.n;
            };

            blindSignContext.prototype.log = function (msg) {
                console.log(msg, "Blind Signature");
            };

            blindSignContext.prototype.hashMessage = function () {
                // Need sha256 digest the message.
                var _this = this;
                var promise = new Promise(function (resolve, reject) {
                    crypto.subtle.digest("SHA-256", toUTF8(_this.msg)).then(function (hash) {
                        resolve(toHex(new Uint8Array(hash)));
                    });
                });
                return promise;
                /*
                var msg = this.msg;
                this.hashedMessage = sha256_digest(msg);
                return this.hashedMessage;
                */
            };

            blindSignContext.prototype.getBlindingNonce = function () {
                // Create a random value.

                var randomNumber = randBigInt.randBigInt(this.keySize, 1);
                this.blindingNonce = randomNumber;
                return randomNumber;
            };

            blindSignContext.prototype.getBlinder = function () {
                // Calculate blinder.
                // b = r ^ e mod n
                var b = powMod(this.blindingNonce, str2bigInt(CliqzSecureMessage.dsPK.e, 10), str2bigInt(CliqzSecureMessage.dsPK.n, 10));
                this.blinder = b;
                return b;
            };

            blindSignContext.prototype.getUnBlinder = function () {
                // Calculate blinder.
                // b = r ^ e mod n
                var u = inverseMod(this.blindingNonce, str2bigInt(CliqzSecureMessage.dsPK.n, 10));
                this.unblinder = u;
                return u;
            };

            blindSignContext.prototype.blindMessage = function () {
                // Blind the message before sending it for signing.
                // bm = b*m mod n
                var _this = this;
                var promise = new Promise(function (resolve, reject) {
                    _this.hashMessage().then(function (hashMessage) {
                        // var rnd = this.getBlindingNonce();
                        var blinder = _this.getBlinder();
                        var bm = multMod(blinder, str2bigInt(hashMessage, 16), str2bigInt(CliqzSecureMessage.dsPK.n, 10));
                        _this.bm = bigInt2str(bm, 10);
                        resolve(_this.bm);
                    });
                });
                return promise;
            };

            blindSignContext.prototype.unBlindMessage = function (blindSignedMessage) {
                // Unblind the message before sending it for verification.
                // s = u*(bs) mod n

                var bs = blindSignedMessage;
                var us = multMod(this.unblinder, str2bigInt(bs, 16), str2bigInt(CliqzSecureMessage.dsPK.n, 10));
                var us = bigInt2str(_us, 10, 0);
                this.signedMessage = us;
                return us;
            };

            blindSignContext.prototype.verify = function () {
                // Verify the message to see, the signer is not the problem.
                // m = s^e mod n
                var _this = this;
                return new Promise(function (resolve, reject) {
                    var message_signed = bigInt2str(powMod(str2bigInt(_this.signedMessage, 10, 0), str2bigInt(_this.e, 10), str2bigInt(_this.n, 10)), 10);
                    var original_message = bigInt2str(str2bigInt(_this.hashedMessage, 16), 10);
                    // var original_message = _this.hashedMessage;
                    _this.log("Org message:" + original_message);
                    _this.log("Sign message:" + message_signed);
                    if (original_message === message_signed.toLowerCase()) {
                        resolve(true);
                    } else {
                        // Need to replace this with reject.
                        resolve(false);
                    }
                });
            };
        }
    };
});
$__System.register("10", [], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        "platform": "chromium",
        "brocfile": "node.Brocfile.js",
        "baseURL": "/cliqz/",
        "sourceMaps": true,
        "format": "common",
        "settings": {
          "channel": "CH80",
          "triggers-root": "ghostery-root",
          "CONFIG_PROVIDER": "https://safe-browsing.ghostery.com/config",
          "ENDPOINT_BLIND_SIGNER": "https://ghostery-sign.ghostery.com/sign",
          "ENDPOINT_USER_REG": "https://ghostery-sign.ghostery.com/register",
          "ENDPOINT_SOURCE_MAP_PROVIDER": "https://ghostery-collector.ghostery.com/sourcemapjson",
          "ENDPOINT_LOOKUP_TABLE_PROVIDER": "https://ghostery-collector.ghostery.com/lookuptable",
          "ENDPOINT_KEYS_PROVIDER": "https://ghostery-collector.ghostery.com/signerKey",
          "ENDPOINT_PROXY_LIST_PROVIDER": "https://ghostery-collector.ghostery.com/proxyList",
          "ENDPOINT_PATTERNSURL": "https://safe-browsing.ghostery.com/patterns",
          "ENDPOINT_ANONPATTERNSURL": "https://safe-browsing.ghostery.com/patterns-anon",
          "ENDPOINT_CONFIGURL": "https://safe-browsing.ghostery.com/ts-config",
          "ENDPOINT_SAFE_QUORUM_ENDPOINT": "https://safe-browsing-quorum.ghostery.com/",
          "ENDPOINT_SAFE_QUORUM_PROVIDER": "https://safe-browsing-quorum.ghostery.com/config",
          "MSGCHANNEL": "web-extension",
          "KEY_DS_PUBKEY": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwXo4hXvboKHCggNJ0UNFvZQfDWi0jNcF1kBHthxilMu6LB/hFrSMQ+/FgTqVE36cCezWE0K1UcwmYGVsuqxcvql82RfCmYUVBroJ3UFG8qnetYfU5FOk43C555p5l5HzlF8QilcCUBCO4SCj9lEZ3/8FJboCupTqxEUq7nwUgaNZOiGKMdDUBZJO1tW4LSH4lj9IAZccEJ5HKVmJKopQ3hmzWgDqowxni4NQz+0DnsSfCGAupKaJDxjfajJosX5i674rgdHbZGtgHB3M9jhc6HFNPcmtUgLwgtUtRwMhSnya6q/O06euouNi1h0m5eRrWeMRlJSdUnelLSU8QNy7LQIDAQAB",
          "KEY_SECURE_LOGGER_PUBKEY": "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAh5HhcRAn6+6woXQXl/NtZ+fOooNglZct/HSpYuqkcmrPauHW7EuOSq5bvpBZRTDROjR/kUPomqVZIzqhdCFPA8BwXSCz7hAel2Q157vtBvh9sngMMLXb5Fgzef5N4EuKO8pL5KrS+I9tfZac41vFJSdpgAirZYhh+tdcQQ1z0Qv/Rw0zOXjfvddCz3gEv2gB9KsLMVnTS1J4YOOgfza2adg9Ebz1z99DiF4vtCwn0IUwH/3ToTBwJLbMnC3Ol43yBNk8rgK2mkgCi614vOSD3hnVmio+iW6+AUklM8VPl6l7hEK9cljJY+9UsMVmTrvaFbMPwS6AdZCXKTmNdaMJcy3zSOXu5zvzihoQLwAu9LM3l2eVk0Mw0K7JXOP20fc8BtzWCOLYVP32r4R0BNuhTtvGqjHNZHPJN5OwaxkLpn2dujL9uDWGjRiOItKMVq/nOqmNGghrbf8IOaKT7VQhqOU4cXRkB/uF1UjYETBavwUZAxx9Wd/cMcAGmKiDxighxxQ29jDufl+2WG065tmJz+zCxmgrPh6Zb3KFUxPTe6yksAhWJhmGShA9v20t84M5c6NpZXoUsFcVja6XxzHeSB8dWq9Uu5QcZ83Gz/ronwdEjT2OGTtBgOFeTDqLYUgphC1gcUEHOCnTNXRMQOXqGwBfZHp+Mq61QcMq2rNS7xECAwEAAQ==",
          "frameScriptWhitelist": []
        },
        "default_prefs": {
          "offers2FeatureEnabled": true,
          "offersLogsEnabled": false,
          "showConsoleLogs": false
        },
        "modules": ["core", "message-center", "hpn", "static", "offers-v2"],
        "environment": "production",
        "EXTENSION_VERSION": "7.17.1",
        "instrumentFunctions": ""
      });
    }
  };
});
$__System.register('3', ['4', '7', '5', 'd', '6', '9', '10'], function (_export) {

  // Global variables
  'use strict';

  var messageContext, sha1, md5, randBigInt, userPK, parseDSKey, config, CliqzSecureMessage, localTemporalUniq;
  return {
    setters: [function (_messageContext) {
      messageContext = _messageContext['default'];
    }, function (_coreCryptoUtils) {
      sha1 = _coreCryptoUtils.sha1;
    }, function (_md5) {
      md5 = _md5['default'];
    }, function (_bigint) {
      randBigInt = _bigint['default'];
    }, function (_userPk) {
      userPK = _userPk['default'];
    }, function (_blindSignature) {
      parseDSKey = _blindSignature.parseDSKey;
    }, function (_coreConfig) {
      config = _coreConfig['default'];
    }],
    execute: function () {
      CliqzSecureMessage = {};
      localTemporalUniq = {};

      _export('localTemporalUniq', localTemporalUniq);

      CliqzSecureMessage.BLIND_SIGNER = config.settings.ENDPOINT_BLIND_SIGNER;
      CliqzSecureMessage.USER_REG = config.settings.ENDPOINT_USER_REG;

      self.onmessage = function (e) {
        var msgType = e.data.type;

        if (msgType === 'instant') {
          (function () {
            var msg = e.data.msg;
            var uid = e.data.uid;
            var response = {};
            CliqzSecureMessage.sourceMap = e.data.sourcemap;
            CliqzSecureMessage.uPK = e.data.upk;
            var queryProxyUrl = e.data.queryProxyUrl;
            CliqzSecureMessage.dsPK = e.data.dspk;
            CliqzSecureMessage.secureLogger = e.data.sspk;

            var mc = new messageContext(msg);
            mc.query(queryProxyUrl).then(function (result) {
              response.res = result;
              response.uid = uid;
              response.type = 'instant';
              postMessage(response);
            });
          })();
        }

        if (msgType === 'telemetry') {
          var _ret2 = function () {
            var msg = e.data.msg;
            var response = {};
            response.type = 'telemetry';
            var mc = null;
            CliqzSecureMessage.sourceMap = e.data.sourcemap;
            CliqzSecureMessage.uPK = e.data.upk;
            CliqzSecureMessage.dsPK = e.data.dspk;
            CliqzSecureMessage.secureLogger = e.data.sspk;
            CliqzSecureMessage.routeTable = e.data.routetable;
            _export('localTemporalUniq', localTemporalUniq = e.data.localTemporalUniq);

            try {
              mc = new messageContext(msg);
            } catch (err) {
              response.localTemporalUniq = localTemporalUniq;
              postMessage(response);
              return {
                v: undefined
              };
            }

            parseDSKey().then(function (e) {
              mc.encryptedTelemetry().then(function (result) {
                response.localTemporalUniq = localTemporalUniq;
                postMessage(response);
              })['catch'](function (err) {
                response.localTemporalUniq = localTemporalUniq;
                postMessage(response);
              });
            });
          }();

          if (typeof _ret2 === 'object') return _ret2.v;
        }

        if (msgType === 'user-key') {
          var upk = new userPK();
          upk.generateKey().then(function (e) {
            postMessage(e);
          })['catch'](function (e) {
            return postMessage(e);
          });
        }

        if (msgType === 'test') {
          (function () {
            var msg = e.data.msg;
            var response = {};
            response.type = 'test';
            CliqzSecureMessage.sourceMap = e.data.sourcemap;
            CliqzSecureMessage.uPK = e.data.upk;
            CliqzSecureMessage.dsPK = e.data.dspk;
            CliqzSecureMessage.routeTable = e.data.routetable;
            _export('localTemporalUniq', localTemporalUniq = e.data.localTemporalUniq);

            var mc = new messageContext(msg);
            mc.getproxyCoordinator().then(function (e) {
              response.mc = mc;
              postMessage(response);
            });
          })();
        }

        if (msgType === 'test-sha1' || msgType === 'hw-sha1') {
          sha1(e.data.msg).then(function (result) {
            var response = {};
            response.result = result;
            postMessage(response);
          });
        }

        if (msgType === 'test-md5' || msgType === 'hw-md5') {
          var _hash = md5.md5(e.data.msg);
          var response = {};
          response.result = _hash;
          postMessage(response);
        }

        if (msgType === 'test-bigint' || msgType === 'hw-bigint') {
          var rnd = randBigInt.randBigInt(1024, 1);
          var response = {};
          response.result = rnd;
          postMessage(response);
        }

        if (msgType === 'test-rsa-sign') {
          (function () {
            var msg = e.data.msg;
            var response = {};
            CliqzSecureMessage.uPK = { 'privateKey': e.data.upk };
            var uPK = new userPK(msg);

            uPK.sign(msg).then(function (result) {
              response.result = result;
              postMessage(response);
            })['catch'](function (err) {
              response.result = false;
              postMessage(response);
            });
          })();
        }

        if (msgType === 'test-rsa-verify') {
          (function () {
            var signature = e.data.sig;
            var msg = e.data.msg;
            var response = {};

            CliqzSecureMessage.uPK = { 'privateKey': e.data.upk };
            var uPK = new userPK(msg);

            uPK.verify(signature, msg).then(function (result) {
              response.result = result;
              postMessage(response);
            })['catch'](function (err) {
              response.result = false;
              postMessage(response);
            });
          })();
        }
      };

      _export('default', CliqzSecureMessage);
    }
  };
});
$__System.register('1', ['3'], function (_export) {
  'use strict';

  return {
    setters: [function (_workerIndex) {}],
    execute: function () {}
  };
});
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    factory();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtlci9ocG4vd29ya2VyL3V0aWxzLmVzIiwid29ya2VyL2hwbi93b3JrZXIvbWVzc2FnZS1jb250ZXh0LmVzIiwiLi4vY29yZS9jcnlwdG8vY29yZS9jcnlwdG8vdXRpbHMuZXMiLCIuLi8uLi8uLi9ib3dlcl9jb21wb25lbnRzL21kNS9pbmRleC5qcyIsIi4uL2NvcmUvY3J5cHRvL2NvcmUvY3J5cHRvL3BrY3MtY29udmVyc2lvbi5lcyIsIndvcmtlci9ocG4vd29ya2VyL2h0dHAtd29ya2VyLmVzIiwid29ya2VyL2hwbi93b3JrZXIvdXNlci1way5lcyIsIi4uLy4uLy4uL2Jvd2VyX2NvbXBvbmVudHMvYmlnaW50L2luZGV4LmpzIiwiLi4vcGxhdGZvcm0vY2hyb21pdW0vdGV4dC1lbmNvZGVyLmVzIiwiLi4vcGxhdGZvcm0vY2hyb21pdW0vdGV4dC1kZWNvZGVyLmVzIiwiLi4vY29yZS9jb3JlL2VuY29kaW5nLmVzIiwiLi4vcGxhdGZvcm0vY2hyb21pdW0vY3J5cHRvLmVzIiwid29ya2VyL2hwbi93b3JrZXIvYmxpbmQtc2lnbmF0dXJlLmVzIiwiLi4vY29yZS9jb3JlL2NvbmZpZy5lcyIsIndvcmtlci9ocG4vd29ya2VyL2luZGV4LmVzIl0sIm5hbWVzIjpbIm1kNSIsImhleCIsInJoZXgiLCJtZDUxIiwibWQ1YmxrIiwibWQ1Y3ljbGUiLCJpaSIsImhoIiwiZ2ciLCJmZiIsImNtbiIsImFkZDMyIiwiYSIsImIiLCJxIiwieCIsInMiLCJ0IiwiYWEiLCJjIiwiZCIsImsiLCJ4eCIsIm1kNWJsa3MiLCJpIiwiY2hhckNvZGVBdCIsIm4iLCJsZW5ndGgiLCJzdGF0ZSIsInN1YnN0cmluZyIsInNzIiwidGFpbCIsImhleENociIsInNwbGl0IiwiaiIsImpvaW4iLCJsIiwiX21kNSIsIm1vbnRfIiwicG93TW9kXyIsInRyaW0iLCJzcXVhcmVNb2RfIiwibXVsdE1vZF8iLCJtb2RfIiwibXVsdF8iLCJhZGRfIiwic3ViXyIsInN1YlNoaWZ0XyIsImFkZFNoaWZ0XyIsImxpbkNvbWJTaGlmdF8iLCJsaW5Db21iXyIsImRpdkludF8iLCJtdWx0SW50XyIsImxlZnRTaGlmdF8iLCJoYWx2ZV8iLCJyaWdodFNoaWZ0XyIsImFkZEludF8iLCJjb3B5SW50XyIsImNvcHlfIiwiZHVwIiwiYmlnSW50MnN0ciIsImlzWmVybyIsImVxdWFscyIsImVxdWFsc0ludCIsInN0cjJiaWdJbnQiLCJpbnQyYmlnSW50IiwibW9kSW50IiwiY2FycnlfIiwiZGl2aWRlXyIsImdyZWF0ZXIiLCJncmVhdGVyU2hpZnQiLCJuZWdhdGl2ZSIsImVHQ0RfIiwiaW52ZXJzZU1vZEludF8iLCJpbnZlcnNlTW9kSW50IiwiaW52ZXJzZU1vZF8iLCJHQ0RfIiwiR0NEIiwicmFuZEJpZ0ludF8iLCJyYW5kQmlnSW50IiwicmFuZFRydWVQcmltZV8iLCJtdWx0TW9kIiwiaW52ZXJzZU1vZCIsImFkZCIsInN1YiIsInBvd01vZCIsIm11bHQiLCJhZGRJbnQiLCJtb2QiLCJyYW5kUHJvYlByaW1lUm91bmRzIiwicmFuZFByb2JQcmltZSIsInJhbmRUcnVlUHJpbWUiLCJleHBhbmQiLCJiaXRTaXplIiwibWlsbGVyUmFiaW4iLCJtaWxsZXJSYWJpbkludCIsImZpbmRQcmltZXMiLCJicGUiLCJtYXNrIiwicmFkaXgiLCJkaWdpdHNTdHIiLCJvbmUiLCJBcnJheSIsInMwIiwiczEiLCJzMiIsInMzIiwiczQiLCJzNSIsInM2IiwiczciLCJUIiwic2EiLCJtcl94MSIsIm1yX3IiLCJtcl9hIiwiZWdfdiIsImVnX3UiLCJlZ19BIiwiZWdfQiIsImVnX0MiLCJlZ19EIiwibWRfcTEiLCJtZF9xMiIsIm1kX3EzIiwibWRfciIsIm1kX3IxIiwibWRfcjIiLCJtZF90dCIsInByaW1lcyIsInBvd3MiLCJzX2kiLCJzX2kyIiwic19SIiwic19ybSIsInNfcSIsInNfbjEiLCJzX2EiLCJzX3IyIiwic19uIiwic19iIiwic19kIiwic194MSIsInNfeDIiLCJzX2FhIiwicnBwcmIiLCJwIiwiYW5zIiwieiIsInciLCJkaXZpc2libGUiLCJCIiwieSIsIm0iLCJwbSIsImRkIiwiciIsInp6IiwicmVjU2l6ZSIsIk1hdGgiLCJwb3ciLCJyZWNMaW1pdCIsImZsb29yIiwicmFuZG9tIiwieGMiLCJ5YyIsInhwIiwieXAiLCJBIiwiQyIsIkQiLCJzaW5nIiwicXAiLCJtYXgiLCJ2IiwiZyIsInNoaWZ0Iiwia3giLCJreSIsInkxIiwieTIiLCJiaXRzIiwibWluU2l6ZSIsImNlaWwiLCJidWZmIiwiYmFzZSIsImtrIiwicGFyc2VJbnQiLCJpbmRleE9mIiwieXMiLCJrbiIsImsxIiwiazIiLCJucCIsInVpIiwia3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7MEJBTUksQUFBVyxhQUNYLEFBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FDVDs7V0FBUyxBQUFRLFNBQUMsQUFBQyxHQUFDOzs7O0FBS2xCO0FBQUMsUUFBRyxBQUFFLEtBQUcsQUFBQyxBQUFDOzs7QUFLWDs7UUFBRyxBQUNEO0FBQUMsVUFBRyxBQUFrQixtQkFBQyxBQUFDLEFBQUMsQUFBQztBQUMzQixNQUFBLE9BQU0sQUFBQyxHQUFDLENBQUUsQUFBQyxBQUdaOztBQUFDLFFBQUcsQUFBQyxFQUFDLEFBQU8sUUFBQyxBQUFNLFFBQUMsQUFBRSxBQUFDLEFBQUM7O0FBR3pCO0FBQUMsUUFBRyxBQUFDLEVBQUMsQUFBVyxBQUFFLEFBQUM7O0FBR3BCO0FBQUMsUUFBRyxBQUFDLEVBQUMsQUFBSSxBQUFFLEFBQUM7O0FBR2I7QUFBQyxRQUFHLEFBQUMsRUFBQyxBQUFPLFFBQUMsQUFBWSxjQUFFLEFBQUUsQUFBQyxBQUFDLEFBQ2hDO0FBQUMsUUFBRyxBQUFDLEVBQUMsQUFBTyxRQUFDLEFBQWEsZUFBRSxBQUFFLEFBQUMsQUFBQyxBQUNqQztBQUFDLFFBQUcsQUFBQyxFQUFDLEFBQU8sUUFBQyxBQUFRLFVBQUMsQUFBRSxBQUFDLEFBQUM7O0FBSTNCO0FBQUMsUUFBRyxBQUFDLEVBQUMsQUFBTyxRQUFDLEFBQUssT0FBQyxBQUFFLEFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0FDLFVBQUksQ0FBSixFQUFlO0FB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QUFBRSxJQUFFLEFBQUUsSUFBRSxBQUFFLElBQ3pGLEFBQUUsSUFBRSxBQUFFLElBQUUsQUFBRSxJQUFFLEFBQUUsSUFBRSxBQUFFLFdBQVMsQUFBQyxHQUFFLEFBQUMsR0FBRSxBQUFDLEdBQUUsQUFBQyxHQUFFLEFBQUMsR0FBRSxBQUFDLEdBQUUsQUFBQyxHQUFFLEFBQUMsR0FBRSxBQUFDLEdBQUUsQUFBQyxHQUFFLEFBQUUsSUFBRSxBQUFFLElBQUUsQUFBRSxJQUFFLEFBQUUsSUFBRSxBQUFFLElBQUUsQUFBRSxJQUFFLEFBQUUsSUFBRSxBQUFFLElBQUUsQUFBRSxJQUMzRixBQUFFLElBQUUsQUFBRSxJQUFFLEFBQUUsSUFBRSxBQUFFLElBQUUsQUFBRSxJQUFFLEFBQUUsSUFBRSxBQUFFLFVBQVEsQUFBRSxJQUFFLEFBQUUsSUFBRSxBQUFFLElBQUUsQUFBRSxJQUFFLEFBQUUsSUFBRSxBQUFFLElBQUUsQUFBRSxJQUFFLEFBQUUsSUFBRSxBQUFFLElBQUUsQUFBRSxJQUFFLEFBQUUsSUFBRSxBQUFFLElBQUUsQUFBRSxJQUFFLEFBQUUsSUFDeEYsQUFBRSxJQUFFLEFBQUUsSUFBRSxBQUFFLElBQUUsQUFBRSxJQUFFLEFBQUUsSUFBRSxBQUFFLElBQUUsQUFBRSxJQUFFLEFBQUUsSUFBRSxBQUFFLElBQUUsQUFBRSxJQUFFLEFBQUUsSUFBRSxBQUFFLEFBQUMsQUFBQyxBQUVsRDs7UUFBTSxBQUFRLFdBQUcsQUFBSSxLQUFDLEFBQU0sQUFBQyxBQUM3QjtRQUFJLEFBQVEsV0FBRyxBQUFDLE1BQUssQUFBQyxHQUFFLEFBQ3RCO2FBQU8sQUFBSSxBQUFDO0FBQ2IsQUFFRDs7UUFBSSxBQUFTLFlBQUcsQUFBSSxLQUFDLEFBQUssTUFBQyxBQUFRLFdBQUcsQUFBQyxBQUFDLEtBQUcsQUFBQyxBQUFDLEFBQzdDO1FBQUksQUFBSSxLQUFDLEFBQVEsV0FBRyxBQUFDLEFBQUMsT0FBSyxBQUFHLEtBQUUsQUFDOUI7QUFBUyxBQUFFLEFBQUM7QUFDYixBQUNEO1FBQUksQUFBSSxLQUFDLEFBQVEsV0FBRyxBQUFDLEFBQUMsT0FBSyxBQUFHLEtBQUUsQUFDOUI7QUFBUyxBQUFFLEFBQUM7QUFDYixBQUVEOztRQUFNLEFBQU8sVUFBRyxJQUFJLEFBQVUsV0FBQyxBQUFTLEFBQUMsQUFBQyxBQUMxQztTQUFLLElBQUksQUFBQyxJQUFHLEFBQUMsR0FBRSxBQUFDLElBQUcsQUFBQyxHQUFFLEFBQUMsSUFBRyxBQUFRLFdBQUcsQUFDcEM7VUFBTSxBQUFLLFFBQUcsQUFBSSxLQUFDLEFBQUMsQUFBQyxPQUFLLEFBQUcsTUFBRyxBQUFDLElBQUcsQUFBQyxBQUFFLE1BQUcsQUFBUSxTQUFDLEFBQUksS0FBQyxBQUFDLEFBQUUsQUFBQyxLQUFDLEFBQVUsQUFBRSxBQUFDLEFBQUMsQUFDM0U7VUFBTSxBQUFLLFFBQUcsQUFBSSxLQUFDLEFBQUMsQUFBQyxPQUFLLEFBQUcsTUFBRyxBQUFDLElBQUcsQUFBQyxBQUFFLE1BQUcsQUFBUSxTQUFDLEFBQUksS0FBQyxBQUFDLEFBQUUsQUFBQyxLQUFDLEFBQVUsQUFBRSxBQUFDLEFBQUMsQUFDM0U7VUFBTSxBQUFLLFFBQUcsQUFBSSxLQUFDLEFBQUMsQUFBQyxPQUFLLEFBQUcsTUFBRyxBQUFDLElBQUcsQUFBQyxBQUFFLE1BQUcsQUFBUSxTQUFDLEFBQUksS0FBQyxBQUFDLEFBQUUsQUFBQyxLQUFDLEFBQVUsQUFBRSxBQUFDLEFBQUMsQUFDM0U7VUFBTSxBQUFLLFFBQUcsQUFBSSxLQUFDLEFBQUMsQUFBQyxPQUFLLEFBQUcsTUFBRyxBQUFDLElBQUcsQUFBQyxBQUFFLE1BQUcsQUFBUSxTQUFDLEFBQUksS0FBQyxBQUFDLEFBQUUsQUFBQyxLQUFDLEFBQVUsQUFBRSxBQUFDLEFBQUMsQUFFM0U7O1VBQU0sQUFBTSxTQUFHLENBQUMsQUFBSyxTQUFJLEFBQUMsSUFBRyxBQUFDLE1BQUssQUFBSyxTQUFJLEFBQUMsSUFBRyxBQUFDLEFBQUMsTUFDL0MsQUFBSyxTQUFJLEFBQUMsSUFBRyxBQUFDLEFBQUMsTUFBSSxBQUFLLFNBQUksQUFBQyxJQUFHLEFBQUMs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QUFFLFVBQUEsQUFBRyxLQUFJLEFBQ2I7QUFBUSx1QkFBQyxBQUFNLFNBQUcsQUFBSyxBQUFDLEFBQ3hCO0FBQVcsMEJBQUMsQUFBUSxBQUFDLEFBQUM7QUFDdkIsQUFBQyxBQUFDOztBQUNOLEFBRUQ7O1lBQUssQUFBTyxZQUFLLEFBQWlCLG1CQUFFO3VCQUNsQztnQkFBTSxBQUFTLFlBQUcsQUFBQyxFQUFDLEFBQUksS0FBQyxBQUFHLEFBQUMsQUFDN0I7Z0JBQU0sQUFBRyxNQUFHLEFBQUMsRUFBQyxBQUFJLEtBQUMsQUFBRyxBQUFDLEFBQ3ZCO2dCQUFNLEFBQVEsV0FBRyxBQUFFLEFBQUMsQUFFcEI7O0FBQWtCLCtCQUFDLEFBQUcsTUFBRyxFQUFDLEFBQVksY0FBRyxBQUFDLEVBQUMsQUFBSSxLQUFDLEFBQUcsQUFBQyxBQUFDLEFBQ3JEO2dCQUFNLEFBQUcsTUFBRyxJQUFJLEFBQU0sT0FBQyxBQUFHLEFBQUMsQUFBQyxBQUU1Qjs7QUFBRyxnQkFBQyxBQUFNLE9BQUMsQUFBUyxXQUFFLEFBQUcsQUFBQyxLQUN2QixBQUFJLEtBQUUsVUFBQSxBQUFNLFFBQUksQUFDZjtBQUFRLHVCQUFDLEFBQU0sU0FBRyxBQUFNLEFBQUMsQUFDekI7QUFBVywwQkFBQyxBQUFRLEFBQUMsQUFBQztBQUN2QixBQUFDLGVBQ0ksU0FBRSxVQUFBLEFBQUcsS0FBSSxBQUNiO0FBQVEsdUJBQUMsQUFBTSxTQUFHLEFBQUssQUFBQyxBQUN4QjtBQUFXLDBCQUFDLEFBQVEsQUFBQyxBQUFDO0FBQ3ZCLEFBQUMsQUFBQzs7QUFDTjtBQUNGLEFBQUM7O3lCQUVhLEFBQWtCIiwiZmlsZSI6Indvcmtlci5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGSVhNRTogcmVtb3ZlIGNpcnR1bGFyIGRlcGVuZGVuY3lcbmltcG9ydCBDbGlxelNlY3VyZU1lc3NhZ2UgZnJvbSAnLi9pbmRleCc7XG5cbi8qXG5GdW5jdGlvbiB0byBjbGVhbiBzdHJpbmcgZm9yIGNhbGN1bGF0aW5nIHJvdXRlIGhhc2hcbiovXG52YXIgcHVuY3R1YXRpb24gPSAnIVwiXFwnKCkqLC0uLzo7P1tcXFxcXV5fYHt8fX4lJD0mKyMnXG52YXIgcmVnZXggPSAgbmV3IFJlZ0V4cChcIltcIiArIHB1bmN0dWF0aW9uICsgXCJdXCIsXCJnXCIpO1xuZnVuY3Rpb24gY2xlYW5TdHIocyl7XG4gIC8vIFJlcGxhY2UgYWxsIHNwYWNlc1xuXG4gIC8vIEJlY2F1c2UgaW4gc29tZSB0ZWxlbWV0cnkgbWVzc2FnZSB3ZSBvbmx5IGNyZWF0ZSB1bmlxdSBiYXNlZCBvbiBhbnRpLWR1cGxpY2F0ZS5cbiAgLy8gQW50aS1kdXBsaWNhdGUgaXMgbm90IGEgc3RyaW5nLCBoZW5jZSBjb252ZXJ0aW5nIGl0IHRvIHN0cmluZy5cbiAgcyA9ICcnICsgcztcblxuICAvLyBEZWNvZGUgdXJpIGNvbXBvbmVudFxuICAvLyBOZWVkIHRvIGZpbmQgbHVhIGVxdWl2YWxlbnRcblxuICB0cnl7XG4gICAgcyA9IGRlY29kZVVSSUNvbXBvbmVudChzKTtcbiAgfWNhdGNoKGUpe307XG5cblxuICBzID0gcy5yZXBsYWNlKC9cXHMrL2csJycpO1xuXG4gIC8vIENvbnZlcnQgdG8gbG93ZXJcbiAgcyA9IHMudG9Mb3dlckNhc2UoKTtcblxuICAvLyBUcmltXG4gIHMgPSBzLnRyaW0oKTtcblxuICAvLyBDbGVhbiB0aGUgVVJMXG4gIHMgPSBzLnJlcGxhY2UoL15odHRwOlxcL1xcLy8sIFwiXCIpO1xuICBzID0gcy5yZXBsYWNlKC9eaHR0cHM6XFwvXFwvLywgXCJcIik7XG4gIHMgPSBzLnJlcGxhY2UoL153d3dcXC4vLCcnKTtcblxuXG4gIC8vIFJlbW92ZSBhbGwgcHVuY3R1YXRpb24gbWFya3NcbiAgcyA9IHMucmVwbGFjZShyZWdleCwnJyk7XG5cbiAgcmV0dXJuIHM7XG5cbn1cblxuZnVuY3Rpb24gZ2V0RmllbGQob2JqLCBwYXRoKSB7XG4gIHJldHVybiBwYXRoLnNwbGl0KC9bXFwuXFxbXFxdXSsvKS5maWx0ZXIoeCA9PiB4KS5yZWR1Y2UoKG8sIGkpID0+IG9baV0sIG9iaik7XG59XG5cbmZ1bmN0aW9uIG9yZGVyZWRTdHJpbmdpZnkodCwgcmVzLCBvbmx5S2V5cykge1xuICBpZiAoIXQgfHwgdHlwZW9mIHQgIT09ICdvYmplY3QnKSB7XG4gICAgaWYgKHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgJ0ZvdW5kIHVuZGVmaW5lZCBmaWVsZCB3aGVuIHRyeWluZyB0byBjYWxjdWxhdGUgbXNnIHJvdXRlaGFzaCc7XG4gICAgfVxuICAgIHJlcy5wdXNoKGNsZWFuU3RyKHQpKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHQpO1xuICAgIGtleXMuc29ydCgpO1xuICAgIGxldCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSh0KTtcbiAgICBrZXlzLmZvckVhY2goayA9PiB7XG4gICAgICBpZiAoIWlzQXJyYXkpIHtcbiAgICAgICAgcmVzLnB1c2goY2xlYW5TdHIoaykpO1xuICAgICAgfVxuICAgICAgaWYgKCFvbmx5S2V5cykge1xuICAgICAgICBvcmRlcmVkU3RyaW5naWZ5KHRba10sIHJlcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Um91dGVIYXNoU3RyKG9iaiwgc291cmNlTWFwKSB7XG4gIGxldCBhY3Rpb24gPSBvYmouYWN0aW9uO1xuICBsZXQga2V5cyA9IHNvdXJjZU1hcFthY3Rpb25dLmtleXM7XG4gIGxldCBzdGF0aWNLZXlzID0gc291cmNlTWFwW2FjdGlvbl0uc3RhdGljfHxbXTtcbiAgbGV0IHJlcyA9IFtdO1xuICBrZXlzLmZvckVhY2goayA9PiBvcmRlcmVkU3RyaW5naWZ5KGdldEZpZWxkKG9iaiwgayksIHJlcywgc3RhdGljS2V5cy5zb21lKHNrID0+IGsuZW5kc1dpdGgoc2spKSkpO1xuICByZXR1cm4gcmVzLmpvaW4oJycpO1xufVxuXG5cbi8vIFRPRE86IHJlbW92ZSB0aGlzIGZ1bmN0aW9uIC0gaXQgaGFzIGFsbW9zdCBub3QgdmFsdWUgYW5kIGEgbWlzbGVhZGluZyBuYW1lXG4vKlxuRnVuY3Rpb24gdG8gY3JlYXRlIGh0dHAgdXJsXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUh0dHBVcmwoaG9zdCl7XG5cdHJldHVybiBcImh0dHA6Ly9cIiArIGhvc3QgKyBcIi92ZXJpZnlcIjtcbn1cblxuLyogVGhpcyBtZXRob2Qgd2lsbCByZXR1cm4gdGhlIHN0cmluZyBiYXNlZCBvbiBtYXBwaW5nIG9mIHdoaWNoIGtleXMgdG8gdXNlIHRvIGhhc2ggZm9yIHJvdXRpbmcuXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlSGFzaChtc2cpe1xuXHRyZXR1cm4gZ2V0Um91dGVIYXNoU3RyKG1zZywgQ2xpcXpTZWN1cmVNZXNzYWdlLnNvdXJjZU1hcCk7XG59XG5cbi8qXG5Db252ZXJ0cyBnaXZlbiBhcnJheSB0byBnZW5lcmF0b3IgbGlrZSBvYmplY3QuXG4qL1xuZnVuY3Rpb24gdHJrR2VuKHRyaykge1xuICB2YXIgdHJrID0gdHJrO1xuICB2YXIgaWR4ID0gLTE7XG4gIHJldHVybiB7XG4gICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICBpZHggKz0gMVxuICAgICAgaWYoaWR4IDwgdHJrLmxlbmd0aCl7XG4gICAgICAgIHJldHVybntcbiAgICAgICAgICB2YWx1ZTogaWR4LCAvLyBSZXR1cm4gdGhlIGZpcnN0IHlpZWxkZWQgdmFsdWUuXG4gICAgICAgICAgZG9uZTogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgcmV0dXJue1xuICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCwgLy8gUmV0dXJuIHVuZGVmaW5lZC5cbiAgICAgICAgIGRvbmU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIE1ldGhvZCB0byBjcmVhdGUgcGF5bG9hZCB0byBzZW5kIGZvciBibGluZCBzaWduYXR1cmUuXG4gKiBUaGUgcGF5bG9hZCBuZWVkcyB0byBjb25zaXN0IG9mIDx1UEssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bVB9KnIxLCAvLyBCTTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttUCwgdVBLfSpyMiwgLy8gQk0yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RG1DLCB1UEt9ICogcjMsIC8vIEJNM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU0lHKHVQSztibTE7Ym0yO2JtMylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAqIEByZXR1cm5zIHN0cmluZyB3aXRoIHBheWxvYWQgY3JlYXRlZC5cbiovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYXlsb2FkQmxpbmRTaWduYXR1cmUodVBLLCBibTEsIGJtMiwgYm0zLCBzaWcpe1xuICAgIHZhciBwYXlsb2FkID0ge307XG4gICAgcGF5bG9hZFtcInVQS1wiXSA9IHVQSztcbiAgICBwYXlsb2FkW1wiYm0xXCJdID0gYm0xO1xuICAgIHBheWxvYWRbXCJibTJcIl0gPSBibTI7XG4gICAgcGF5bG9hZFtcImJtM1wiXSA9IGJtMztcbiAgICBwYXlsb2FkW1wic2lnXCJdID0gc2lnO1xuICAgIHJldHVybiBwYXlsb2FkO1xuIH1cblxuLyoqXG4gKiBNZXRob2QgdG8gY3JlYXRlIHBheWxvYWQgdG8gc2VuZCB0byBwcm94eS5cbiAqIFRoZSBwYXlsb2FkIG5lZWRzIHRvIGNvbnNpc3Qgb2YgPHVQSyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRtQyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtIe21QfSpyMX1Ec2ssIC8vIEJsaW5kU2lnbmVkMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0gobVAsIHVQSyl9RHNrLCAvLyBCbGluZFNpZ25lZDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtIKG1QLCBkbUMpfURzaywgLy8gQmxpbmRTaWduZWQzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTSUcodVBLO2RtQzticzE7YnMyO2JzMylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAqIEByZXR1cm5zIHN0cmluZyB3aXRoIHBheWxvYWQgY3JlYXRlZC5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGF5bG9hZFByb3h5KHVQSywgc3VQSywgbVAsIGRtQywgYnMxLCBiczIsIGJzMywgc2lnKXtcbiAgICB2YXIgcGF5bG9hZCA9IHt9O1xuICAgIHBheWxvYWRbXCJ1UEtcIl0gPSB1UEs7XG4gICAgcGF5bG9hZFtcInN1UEtcIl0gPSBzdVBLO1xuICAgIHBheWxvYWRbXCJtUFwiXSA9IG1QO1xuICAgIHBheWxvYWRbXCJkbUNcIl0gPSBkbUM7XG4gICAgcGF5bG9hZFtcImJzMVwiXSA9IGJzMTtcbiAgICBwYXlsb2FkW1wiYnMyXCJdID0gYnMyO1xuICAgIHBheWxvYWRbXCJiczNcIl0gPSBiczM7XG4gICAgcGF5bG9hZFtcInNpZ1wiXSA9IHNpZztcbiAgICByZXR1cm4gcGF5bG9hZDtcbn1cblxuIiwiLyoqXG4qIENyZWF0ZXMgb2JqZWN0IGZvciBtZXNzYWdlIHJlY2lldmVkK1xuKiBPbmx5IGV4Y2VwdHMgdmFsaWQgSlNPTiBtZXNzYWdlcyB3aXRoIHRoZSBmb2xsb3dpbmcgZmllbGRzOlxuKiBUeXBlIDogSHVtYW53ZWIgLyBBbnRpdHJhY2tpbmcgZXRjLlxuKiBBY3Rpb25zIDogVmFsaWQgYWN0aW9ucyBsaWtlIFBhZ2UsIHF1ZXJ5IGV0Yy5cbiogQHJldHVybnMgc3RyaW5nIHdpdGggcGF5bG9hZCBjcmVhdGVkLlxuKi9cblxuaW1wb3J0IG1kNSBmcm9tICdtZDUnO1xuLy8gRklYTUU6IHJlbW92ZSBjaXJjdWxhciBkZXBlbmRlbmN5XG5pbXBvcnQgQ2xpcXpTZWN1cmVNZXNzYWdlLCB7IGxvY2FsVGVtcG9yYWxVbmlxIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgdXNlclBLIGZyb20gJy4vdXNlci1wayc7XG5cbmltcG9ydCB7IHNoYTEgfSBmcm9tICcuLi8uLi9jb3JlL2NyeXB0by91dGlscyc7XG5cbmltcG9ydCB7XG4gIGZyb21CYXNlNjQsXG4gIHRvQmFzZTY0LFxuICB0b1VURjgsXG4gIGZyb21VVEY4LFxuICBmcm9tSGV4LFxuICB0b0hleFxufSBmcm9tICcuLi8uLi9jb3JlL2VuY29kaW5nJztcblxuaW1wb3J0IHtcbiAgY3JlYXRlUGF5bG9hZEJsaW5kU2lnbmF0dXJlLFxuICBjcmVhdGVQYXlsb2FkUHJveHksXG4gIGdldFJvdXRlSGFzaCxcbiAgY3JlYXRlSHR0cFVybFxufSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IHVuQmxpbmRNZXNzYWdlLCBibGluZFNpZ25Db250ZXh0IH0gZnJvbSAnLi9ibGluZC1zaWduYXR1cmUnO1xuaW1wb3J0IF9odHRwIGZyb20gJy4vaHR0cC13b3JrZXInO1xuXG5pbXBvcnQgY3J5cHRvIGZyb20gJy4uLy4uL3BsYXRmb3JtL2NyeXB0byc7XG5cbi8qIFRoaXMgbWV0aG9kIHdpbGwgZW5zdXJlIHRoYXQgd2UgaGF2ZSB0aGUgc2FtZSBsZW5ndGggZm9yIGFsbCB0aGUgbWVzYWdlc1xuKi9cbmZ1bmN0aW9uIHBhZE1lc3NhZ2UobXNnKXtcblx0Y29uc3QgbXhMZW4gPSAxNDAwMDtcblx0dmFyIHBhZExlbiA9IChteExlbiAtIG1zZy5sZW5ndGgpICsgMTtcblx0aWYgKHBhZExlbiA8IDApIHtcblx0XHR0aHJvdyAnbXNndG9vYmlnJztcblx0fVxuXHRyZXR1cm4gbXNnICsgbmV3IEFycmF5KHBhZExlbikuam9pbihcIlxcblwiKTtcbn1cblxuZnVuY3Rpb24gaXNKc29uKHN0cikge1xuLy8gSWYgY2FuIGJlIHBhcnNlZCB0aGF0IG1lYW5zIGl0J3MgYSBzdHIuXG4vLyBJZiBjYW5ub3QgYmUgcGFyc2VkIGFuZCBpcyBhbiBvYmplY3QgdGhlbiBpdCdzIGEgSlNPTi5cbiAgdHJ5IHtcbiAgICAgIEpTT04ucGFyc2Uoc3RyKTtcbiAgfSBjYXRjaCAoZSkge1xuICBcdGlmKHR5cGVvZiBzdHIgPT0nb2JqZWN0JylcbiAgICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaGV4VG9CaW5hcnkocykge1xuICAgIHZhciBpLCBrLCBwYXJ0LCByZXQgPSAnJztcbiAgICAvLyBsb29rdXAgdGFibGUgZm9yIGVhc2llciBjb252ZXJzaW9uLiAnMCcgY2hhcmFjdGVycyBhcmUgcGFkZGVkIGZvciAnMScgdG8gJzcnXG4gICAgdmFyIGxvb2t1cFRhYmxlID0ge1xuICAgICAgICAnMCc6ICcwMDAwJywgJzEnOiAnMDAwMScsICcyJzogJzAwMTAnLCAnMyc6ICcwMDExJywgJzQnOiAnMDEwMCcsXG4gICAgICAgICc1JzogJzAxMDEnLCAnNic6ICcwMTEwJywgJzcnOiAnMDExMScsICc4JzogJzEwMDAnLCAnOSc6ICcxMDAxJyxcbiAgICAgICAgJ2EnOiAnMTAxMCcsICdiJzogJzEwMTEnLCAnYyc6ICcxMTAwJywgJ2QnOiAnMTEwMScsXG4gICAgICAgICdlJzogJzExMTAnLCAnZic6ICcxMTExJyxcbiAgICAgICAgJ0EnOiAnMTAxMCcsICdCJzogJzEwMTEnLCAnQyc6ICcxMTAwJywgJ0QnOiAnMTEwMScsXG4gICAgICAgICdFJzogJzExMTAnLCAnRic6ICcxMTExJ1xuICAgIH07XG4gICAgZm9yIChpID0gMDsgaSA8IHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGxvb2t1cFRhYmxlLmhhc093blByb3BlcnR5KHNbaV0pKSB7XG4gICAgICAgICAgICByZXQgKz0gbG9va3VwVGFibGVbc1tpXV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyB2YWxpZDogdHJ1ZSwgcmVzdWx0OiByZXQgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihtc2cpIHtcbiAgICAvLyBGSVhNRTogaXNKc29uIGlzIGNhbGxlZCAzIHRpbWVzIG9uIHNhbWUgb2JqZWN0XG4gICAgLy8gVE9ETzogZG9uJ3QgdXNlIGlzSlNPTiAtIHRyeSAvIGNhdGNoIHNob3VsZCBiZSBzdWZmaWNpZW50XG4gIFx0aWYoIW1zZyB8fCAhaXNKc29uKG1zZykpIHJldHVybjtcbiAgICB0aGlzLm9yZ01lc3NhZ2UgPSBpc0pzb24obXNnKSA/IEpTT04uc3RyaW5naWZ5KG1zZykgOiBtc2c7XG4gICAgdGhpcy5qTWVzc2FnZSA9IGlzSnNvbihtc2cpID8gbXNnIDogSlNPTi5wYXJzZShtc2cpO1xuICAgIHRoaXMuc2lnbmVkID0gbnVsbDtcbiAgICB0aGlzLmVuY3J5cHRlZCA9IG51bGw7XG4gICAgdGhpcy5yb3V0ZUhhc2ggPSBudWxsO1xuICAgIHRoaXMudHlwZSA9IHRoaXMuak1lc3NhZ2UudHlwZSB8fCBudWxsO1xuICAgIHRoaXMuYWN0aW9uID0gdGhpcy5qTWVzc2FnZS5hY3Rpb24gfHwgbnVsbDtcbiAgICB0aGlzLnNoYTI1NiA9IG51bGw7XG4gICAgdGhpcy5pbnRlcnZhbCA9IG51bGw7XG4gICAgdGhpcy5yYXRlTGltaXQgPSBudWxsO1xuICAgIHRoaXMuZW5kUG9pbnQgPSBudWxsO1xuICAgIHRoaXMubUUgPSBudWxsO1xuICAgIHRoaXMubUsgPSBudWxsO1xuICAgIHRoaXMubVAgPSBudWxsO1xuICAgIHRoaXMuZG0gPSBudWxsO1xuICAgIHRoaXMucHJveHlWYWxpZGF0b3JzID0gbnVsbDtcbiAgfVxuXG4gIGxvZyhtc2cpe1xuICAgIGNvbnNvbGUubG9nKFwiTWVzc2FnZSBDb250ZXh0OiBcIiArIG1zZyk7XG4gIH1cblxuXHRnZXRwcm94eUNvb3JkaW5hdG9yKCl7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHR2YXIgbXNnID0gX3RoaXMuak1lc3NhZ2U7XG4gICAgX3RoaXMuZW5kUG9pbnQgPSBDbGlxelNlY3VyZU1lc3NhZ2Uuc291cmNlTWFwW3RoaXMuYWN0aW9uXVtcImVuZHBvaW50XCJdO1xuICAgIF90aGlzLm1kNUhhc2ggPSBtZDUubWQ1KHRoaXMuYWN0aW9uKTtcblx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG5cdFx0XHR0cnl7XG5cdFx0XHRcdHZhciBoYXNoID0gXCJcIjtcblx0XHRcdFx0Ly8gdmFyIF9tc2cgPSBtc2cgfHwgdGhpcy5vcmdNZXNzYWdlO1xuXHRcdFx0XHR2YXIgc3RyaW5nUm91dGVIYXNoID0gZ2V0Um91dGVIYXNoKG1zZyk7XG5cdFx0XHRcdHNoYTEoc3RyaW5nUm91dGVIYXNoKVxuXHRcdFx0XHQudGhlbihoYXNoTSA9PiB7XG4gICAgICAgICAgX3RoaXMuc2hhMSA9IGhhc2hNO1xuXHRcdFx0XHRcdHZhciBkbUMgPSBoZXhUb0JpbmFyeShoYXNoTSlbJ3Jlc3VsdCddLnNsaWNlKDAsMTMpO1xuXHRcdFx0XHRcdHZhciByb3V0ZUhhc2ggPSBwYXJzZUludChkbUMsIDIpO1xuXHRcdFx0XHRcdF90aGlzLmZ1bGxIYXNoID0gaGFzaE07XG5cdFx0XHRcdFx0X3RoaXMuZG1DID0gZG1DO1xuXHRcdFx0XHRcdHZhciB0b3RhbFByb3hpZXMgPSA0MDk2O1xuXHRcdFx0XHRcdHZhciBtb2RSb3V0ZSA9IHJvdXRlSGFzaCAlIHRvdGFsUHJveGllcztcblx0XHRcdFx0XHR2YXIgcHJveHlJUCA9IGNyZWF0ZUh0dHBVcmwoQ2xpcXpTZWN1cmVNZXNzYWdlLnJvdXRlVGFibGVbbW9kUm91dGVdKTtcblx0XHRcdFx0XHRfdGhpcy5wcm94eUNvb3JkaW5hdG9yID0gcHJveHlJUDtcblx0XHRcdFx0XHRyZXNvbHZlKHRoaXMpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goZXJyPT57XG4gICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUiA+PiBcIiArIGVycik7XG5cdFx0XHRcdFx0cmVqZWN0KGVycik7XG5cdFx0XHRcdH0pXG5cblxuXHRcdFx0fVxuXHRcdFx0Y2F0Y2goZSl7XG5cdFx0XHRcdHJlamVjdChlKTtcblx0XHRcdH1cblx0XHR9KVxuXHRcdHJldHVybiBwcm9taXNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIE1ldGhvZCB0byBnZW5lcmF0ZSBhbiBBRVMtQ0JDIDEyOCBiaXQga2V5LlxuXHQgKiBAcmV0dXJucyBjcnlwdG8gb2JqZWN0IG9mIEFFUyBLRVkuXG5cdCAqL1xuICBhZXNHZW5lcmF0ZUtleSgpe1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gIFx0bGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgY3J5cHRvLnN1YnRsZS5nZW5lcmF0ZUtleShcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJBRVMtQ0JDXCIsXG4gICAgICAgICAgICBsZW5ndGg6IDEyOCxcbiAgICAgICAgfSxcbiAgICAgICAgdHJ1ZSxcbiAgICAgICAgW1wiZW5jcnlwdFwiLCBcImRlY3J5cHRcIl1cbiAgICAgICkudGhlbigga2V5ID0+IHtcbiAgICAgICAgcmVzb2x2ZShrZXkpO1xuICAgICAgfSkuY2F0Y2goIGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgaW4gZ2VuZXJhdGluZyBrZXk6IFwiICsgZXJyKTtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9KTtcbiAgXHR9KVxuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cblx0LyoqXG5cdCAqIE1ldGhvZCB0byBnZW5lcmF0ZSBhbiBBRVMtQ0JDIDEyOCBiaXQga2V5LlxuXHQgKiBAcmV0dXJucyBjcnlwdG8gb2JqZWN0IG9mIEFFUyBLRVkuXG5cdCAqL1xuXHRhZXNFeHBvcnRLZXkoa2V5KXtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgIGNyeXB0by5zdWJ0bGUuZXhwb3J0S2V5KCdyYXcnLCBrZXkpLnRoZW4oIHJlc3VsdCA9PiB7XG4gICAgICAgIF90aGlzLmFlc0tleSA9IHRvSGV4KG5ldyBVaW50OEFycmF5KHJlc3VsdCkpO1xuICAgICAgICByZXNvbHZlKGtleSk7XG4gICAgICB9KS5jYXRjaCAoIGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgaW4gZXhwb3J0aW5nIGtleTogXCIgKyBlcnIpO1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH0pXG4gICAgfSk7XG4gICAgcmV0dXJuIHByb21pc2U7XG5cdH1cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBwYXJzZSBhIG1lc3NhZ2UgYW5kIGVuY3J5cHQgd2l0aCBBRVMuXG4gICAqIEB0aHJvd3Mge3N0cmluZ30gV2lsbCB0aHJvdyAnbXNndG9vYmlnJyBpZiBtZXNzYWdlIHNpemUgZXhjZWVkcyBhIHRocmVzaG9sZC5cbiAgICogQHJldHVybnMgc3RyaW5nIG9mIEFFUyBlbmNyeXB0ZWQgbWVzc2FnZS5cbiAgICovXG4gIGFlc0VuY3J5cHRpb24oIGtleSwgX2l2LCBtc2dFbmNyeXB0ICl7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICBjcnlwdG8uc3VidGxlLmVuY3J5cHQoXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiQUVTLUNCQ1wiLFxuICAgICAgICAgICAgaXY6IF9pdixcbiAgICAgICAgfSxcbiAgICAgICAga2V5LFxuICAgICAgICB0b1VURjgobXNnRW5jcnlwdCkgLy9BcnJheUJ1ZmZlciBvZiBkYXRhIHlvdSB3YW50IHRvIGVuY3J5cHRcbiAgICAgICkudGhlbiggZW5jcnlwdGVkID0+IHtcbiAgICAgICAgcmVzb2x2ZShlbmNyeXB0ZWQpO1xuICAgICAgfSkuY2F0Y2goIGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgaW4gYWVzIGVuY3J5cHRpb246IFwiICsgZXJyKTtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9KVxuICAgIH0pXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICByc2FFbmNyeXB0KG1zZyl7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICAvL2xldCBwdWJsaWNLZXkgPSBcIk1JSUNJakFOQmdrcWhraUc5dzBCQVFFRkFBT0NBZzhBTUlJQ0NnS0NBZ0VBaDVIaGNSQW42KzZ3b1hRWGwvTnRaK2ZPb29OZ2xaY3QvSFNwWXVxa2NtclBhdUhXN0V1T1NxNWJ2cEJaUlREUk9qUi9rVVBvbXFWWkl6cWhkQ0ZQQThCd1hTQ3o3aEFlbDJRMTU3dnRCdmg5c25nTU1MWGI1Rmd6ZWY1TjRFdUtPOHBMNUtyUytJOXRmWmFjNDF2RkpTZHBnQWlyWlloaCt0ZGNRUTF6MFF2L1J3MHpPWGpmdmRkQ3ozZ0V2MmdCOUtzTE1WblRTMUo0WU9PZ2Z6YTJhZGc5RWJ6MXo5OURpRjR2dEN3bjBJVXdILzNUb1RCd0pMYk1uQzNPbDQzeUJOazhyZ0sybWtnQ2k2MTR2T1NEM2huVm1pbytpVzYrQVVrbE04VlBsNmw3aEVLOWNsakpZKzlVc01WbVRydmFGYk1Qd1M2QWRaQ1hLVG1OZGFNSmN5M3pTT1h1NXp2emlob1FMd0F1OUxNM2wyZVZrME13MEs3SlhPUDIwZmM4QnR6V0NPTFlWUDMycjRSMEJOdWhUdHZHcWpITlpIUEpONU93YXhrTHBuMmR1akw5dURXR2pSaU9JdEtNVnEvbk9xbU5HZ2hyYmY4SU9hS1Q3VlFocU9VNGNYUmtCL3VGMVVqWUVUQmF2d1VaQXh4OVdkL2NNY0FHbUtpRHhpZ2h4eFEyOWpEdWZsKzJXRzA2NXRtSnorekN4bWdyUGg2WmIzS0ZVeFBUZTZ5a3NBaFdKaG1HU2hBOXYyMHQ4NE01YzZOcFpYb1VzRmNWamE2WHh6SGVTQjhkV3E5VXU1UWNaODNHei9yb253ZEVqVDJPR1R0QmdPRmVURHFMWVVncGhDMWdjVUVIT0NuVE5YUk1RT1hxR3dCZlpIcCtNcTYxUWNNcTJyTlM3eEVDQXdFQUFRPT1cIjtcbiAgICAgIGxldCBwdWJsaWNLZXkgPSBDbGlxelNlY3VyZU1lc3NhZ2Uuc2VjdXJlTG9nZ2VyLnB1YmxpY0tleUI2NDtcbiAgICAgIGNyeXB0by5zdWJ0bGUuaW1wb3J0S2V5KFxuICAgICAgICdzcGtpJyxcbiAgICAgICAgZnJvbUJhc2U2NChwdWJsaWNLZXkpLFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ1JTQS1PQUVQJyxcbiAgICAgICAgICBoYXNoOiB7IG5hbWU6ICdTSEEtMScgfVxuICAgICAgICB9LFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgWydlbmNyeXB0J11cbiAgICAgICkudGhlbigga2V5PT4ge1xuICAgICAgY3J5cHRvLnN1YnRsZS5lbmNyeXB0KFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJSU0EtT0FFUFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAga2V5LFxuICAgICAgICAgIHRvVVRGOChtc2cpXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oZW5jcnlwdGVkKXtcbiAgICAgICAgICByZXNvbHZlKHRvQmFzZTY0KG5ldyBVaW50OEFycmF5KGVuY3J5cHRlZCkpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycil7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZHVyaW5nIHJzYSBlbmNyeXB0aW9uOiBcIiArIGVycik7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KVxuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cdC8qKlxuXHQgKiBNZXRob2QgdG8gcGFyc2UgYSBtZXNzYWdlIGFuZCBlbmNyeXB0IHdpdGggQUVTLlxuXHQgKiBAdGhyb3dzIHtzdHJpbmd9IFdpbGwgdGhyb3cgJ21zZ3Rvb2JpZycgaWYgbWVzc2FnZSBzaXplIGV4Y2VlZHMgYSB0aHJlc2hvbGQuXG5cdCAqIEByZXR1cm5zIHN0cmluZyBvZiBBRVMgZW5jcnlwdGVkIG1lc3NhZ2UuXG5cdCAqL1xuXHRhZXNFbmNyeXB0KHR5cGUpe1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgdmFyIF9pdiA9IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMTYpKTtcbiAgICAgIHZhciBldmVudElEID0gKCcnICsgdG9IZXgoX2l2KSkuc3Vic3RyaW5nKDAsNSk7XG4gICAgICB2YXIgYWVzS2V5Qnl0ZXM7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIj4+IElWOiBcIiArIHRvSGV4KF9pdikpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCI+PiBFXCIgKyBldmVudElEKTtcbiAgICAgIF90aGlzLmV2ZW50SUQgPSBldmVudElEO1xuICAgICAgX3RoaXMuaXYgPSB0b0hleChfaXYpO1xuICAgICAgX3RoaXMubUlEID0gZXZlbnRJRDtcbiAgICAgIF90aGlzLm9pdiA9IF9pdjtcblxuICAgICAgX3RoaXMuYWVzR2VuZXJhdGVLZXkoKS50aGVuKCBrZXkgPT4ge1xuICAgICAgICByZXR1cm4gX3RoaXMuYWVzRXhwb3J0S2V5KGtleSlcbiAgICAgIH0pLnRoZW4oIGtleSA9PiB7XG4gICAgICAgICAgbGV0IGVuY3J5cHRpb25QYXlsb2QgPSB7fTtcbiAgICAgICAgICBlbmNyeXB0aW9uUGF5bG9kWydtc2cnXSA9IF90aGlzLm9yZ01lc3NhZ2U7XG4gICAgICAgICAgZW5jcnlwdGlvblBheWxvZFsnZW5kcG9pbnQnXSA9IF90aGlzLmVuZFBvaW50O1xuICAgICAgICAgIGxldCBtc2dFbmNyeXB0ID0gSlNPTi5zdHJpbmdpZnkoZW5jcnlwdGlvblBheWxvZCk7XG4gICAgICAgICAgaWYodHlwZSA9PT0gXCJ0ZWxlbWV0cnlcIil7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgIG1zZ0VuY3J5cHQgPSBwYWRNZXNzYWdlKEpTT04uc3RyaW5naWZ5KGVuY3J5cHRpb25QYXlsb2QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoKGUpe1xuICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpcy5hZXNFbmNyeXB0aW9uKGtleSwgX2l2LCBtc2dFbmNyeXB0KS50aGVuKCBlbmNyeXB0ZWRSZXN1bHQgPT4ge1xuICAgICAgICAgICAgX3RoaXMubUUgPSB0b0Jhc2U2NChuZXcgVWludDhBcnJheShlbmNyeXB0ZWRSZXN1bHQpKTtcbiAgICAgICAgICAgIHJlc29sdmUoX3RoaXMubUUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHByb21pc2U7XG5cdH1cblxuXHQvKipcblx0ICogTWV0aG9kIHRvIHBhcnNlIGEgbWVzc2FnZSBhbmQgZGVjcnlwdCB3aXRoIEFFUy5cblx0ICogQHJldHVybnMgc3RyaW5nIG9mIEFFUyBkZWNyeXB0ZWQgbWVzc2FnZS5cblx0ICovXG5cdGFlc0RlY3J5cHQobXNnKXtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgIHZhciBfbXNnID1mcm9tQmFzZTY0KG1zZy5zcGxpdChcIjtcIilbMV0pO1xuICAgICAgdmFyIGhhc2hLZXkgPSBfdGhpcy5hZXNLZXk7XG4gICAgICB2YXIgX2l2ID0gX3RoaXMuaXY7XG4gICAgICBjcnlwdG8uc3VidGxlLmltcG9ydEtleShcbiAgICAgICAgICBcInJhd1wiLCAvL2NhbiBiZSBcImp3a1wiIG9yIFwicmF3XCJcbiAgICAgICAgICBmcm9tSGV4KGhhc2hLZXkpLFxuICAgICAgICAgIFwiQUVTLUNCQ1wiLFxuICAgICAgICAgIGZhbHNlLCAvL3doZXRoZXIgdGhlIGtleSBpcyBleHRyYWN0YWJsZSAoaS5lLiBjYW4gYmUgdXNlZCBpbiBleHBvcnRLZXkpXG4gICAgICAgICAgW1wiZGVjcnlwdFwiXSAvL2NhbiBiZSBcImVuY3J5cHRcIiwgXCJkZWNyeXB0XCIsIFwid3JhcEtleVwiLCBvciBcInVud3JhcEtleVwiXG4gICAgICApXG4gICAgICAudGhlbihmdW5jdGlvbihrZXkpe1xuICAgICAgICAgIC8vcmV0dXJucyB0aGUgc3ltbWV0cmljIGtleVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwia2V5XCIpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGtleSk7XG4gICAgICAgIGNyeXB0by5zdWJ0bGUuZGVjcnlwdChcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJBRVMtQ0JDXCIsXG4gICAgICAgICAgICBpdjogZnJvbUhleChfaXYpLCAvL1RoZSBpbml0aWFsaXphdGlvbiB2ZWN0b3IgeW91IHVzZWQgdG8gZW5jcnlwdFxuICAgICAgICB9LFxuICAgICAgICBrZXksIC8vZnJvbSBnZW5lcmF0ZUtleSBvciBpbXBvcnRLZXkgYWJvdmVcbiAgICAgICAgX21zZyAgLy9BcnJheUJ1ZmZlciBvZiB0aGUgZGF0YVxuICAgICAgICApXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGRlY3J5cHRlZCl7XG4gICAgICAgICAgICAvL3JldHVybnMgYW4gQXJyYXlCdWZmZXIgY29udGFpbmluZyB0aGUgZGVjcnlwdGVkIGRhdGFcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRGVjcnlwdGVkPj4+IFwiICsgZnJvbVVURjgobmV3IFVpbnQ4QXJyYXkoZGVjcnlwdGVkKSkpO1xuICAgICAgICAgICAgcmVzb2x2ZShmcm9tVVRGOChuZXcgVWludDhBcnJheShkZWNyeXB0ZWQpKSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnIpe1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyKXtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KTtcblxuXHRcdH0pXG5cblx0XHRyZXR1cm4gcHJvbWlzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBNZXRob2QgdG8gc2lnbiB0aGUgQUVTIGVuY3J5cHRpb25nIGtleSB3aXRoIEFnZ3JlZ2F0b3IgUHVibGljIGtleS5cblx0ICogQ2FsY3VsYXRlIG1LID0ge0FFU0tleTtpdjtlbmRQb2ludH1cblx0ICogQHJldHVybnMgc3RyaW5nIG9mIGVuY3J5cHRlZCBrZXkuXG5cdCAqL1xuXHRzaWduS2V5KCl7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG5cdFx0XHR0cnl7XG5cdFx0XHRcdC8vIFRvIHByb3RlY3QgZnJvbSBwYWRkaW5nIG9yYWNsZSBhdHRhY2tzLCB3ZSBuZWVkIHRvIHNlbmQgdGhlIGhhc2ggb2Zcblx0XHRcdFx0Ly8gbUUuXG5cdFx0XHRcdHZhciBtSSA9IG1kNS5tZDUoX3RoaXMubUUpOyAvLyByZXBsYWNlIGl0IHdpdGggd2ViLWNyeXB0byBtZDUuXG5cdFx0XHRcdHZhciBtZXNzYWdlVG9TaWduID0gX3RoaXMuYWVzS2V5ICsgXCI7XCIgKyBfdGhpcy5pdiArIFwiO2VuZFBvaW50O1wiICsgbUk7XG4gICAgICAgIF90aGlzLnJzYUVuY3J5cHQobWVzc2FnZVRvU2lnbikudGhlbiggZW5jcnlwdGVkUmVzcG9uc2UgPT4ge1xuICAgICAgICAgIF90aGlzLnNpZ25lZEtleSA9IGVuY3J5cHRlZFJlc3BvbnNlO1xuICAgICAgICAgIF90aGlzLm1LID0gZW5jcnlwdGVkUmVzcG9uc2U7XG4gICAgICAgICAgcmVzb2x2ZShlbmNyeXB0ZWRSZXNwb25zZSk7XG4gICAgICAgIH0pXG5cblx0XHRcdH1cblx0XHRcdGNhdGNoKGUpe1xuXHRcdFx0XHRyZWplY3QoZSk7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHRyZXR1cm4gcHJvbWlzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBNZXRob2QgdG8gY3JlYXRlIE1QXG5cdCAqIENhbGN1bGF0ZSBtUCA9IDxtSUQsIG1LLCBtRT5cblx0ICogQHJldHVybnMgc3RyaW5nIGNhbGxlZCBtUC5cblx0ICovXG5cdGdldE1QKCl7XG5cdFx0dmFyIG1QID0gdGhpcy5tSUQgKyBcIjtcIiArIHRoaXMubUsgK1wiO1wiICsgdGhpcy5tRTtcblx0XHR0aGlzLm1QID0gbVA7XG5cdFx0cmV0dXJuIG1QXG5cdH1cblxuXHRyc2FFKCl7XG5cdFx0cnNhRW5jcnlwdCgpO1xuXHR9XG5cbiAgY2hlY2tMb2NhbFVuaXEoKXtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgIC8vIENoZWNrIGZvciBsb2NhbCB0ZW1wb3JhbCB1bmlxdW5lc3NcbiAgICAgIHZhciB1bmlxS2V5ID0gX3RoaXMuZG1DO1xuICAgICAgaWYobG9jYWxUZW1wb3JhbFVuaXEgJiYgT2JqZWN0LmtleXMobG9jYWxUZW1wb3JhbFVuaXEpLmluZGV4T2YodW5pcUtleSkgPiAtMSkge1xuICAgICAgICBpZihsb2NhbFRlbXBvcmFsVW5pcVt1bmlxS2V5XVtcImZ1bGxoYXNoXCJdKXtcbiAgICAgICAgICBpZihfdGhpcy5mdWxsSGFzaCA9PT0gbG9jYWxUZW1wb3JhbFVuaXFbdW5pcUtleV1bXCJmdWxsaGFzaFwiXSl7XG4gICAgICAgICAgICByZWplY3QoXCJleGFjdC1kdXBsaWNhdGVcIik7XG4gICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgcmVqZWN0KFwiY29sbGlzaW9uXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIGJsaW5kTWVzc2FnZSgpe1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgLy8gQWZ0ZXIgdGhlIG1lc3NhZ2UgaXMgU0lHTkVELCB3ZSBuZWVkIHRvIHN0YXJ0IHRoZSBibGluZCBzaWduYXR1cmUuXG4gICAgICBfdGhpcy5nZXRNUCgpO1xuXG4gICAgICB2YXIgdVBLID0gQ2xpcXpTZWN1cmVNZXNzYWdlLnVQSy5wdWJsaWNLZXlCNjQ7XG5cbiAgICAgIC8vIE1lc3NhZ2VzIHRvIGJlIGJsaW5kZWQuXG4gICAgICBfdGhpcy5tMSA9IF90aGlzLm1QIDtcbiAgICAgIF90aGlzLm0yID0gX3RoaXMubVAgKyBcIjtcIiArIHVQSztcbiAgICAgIF90aGlzLm0zID0gX3RoaXMubVAgKyBcIjtcIiArIF90aGlzLmRtQzsgLy8gKyBcIjtcIiArIHVQSztcblxuICAgICAgdmFyIF9ibTEgPSBuZXcgYmxpbmRTaWduQ29udGV4dChfdGhpcy5tMSk7XG4gICAgICB2YXIgX2JtMiA9IG5ldyBibGluZFNpZ25Db250ZXh0KF90aGlzLm0yKTtcbiAgICAgIHZhciBfYm0zID0gbmV3IGJsaW5kU2lnbkNvbnRleHQoX3RoaXMubTMpO1xuXG4gICAgICBfdGhpcy5yMSA9IF9ibTEuZ2V0QmxpbmRpbmdOb25jZSgpO1xuICAgICAgX3RoaXMucjIgPSBfYm0yLmdldEJsaW5kaW5nTm9uY2UoKTtcbiAgICAgIF90aGlzLnIzID0gX2JtMy5nZXRCbGluZGluZ05vbmNlKCk7XG5cblxuICAgICAgLy8gR2V0IFVuYmxpbmRlciAtIHRvIHVuYmxpbmQgdGhlIG1lc3NhZ2VcbiAgICAgIF90aGlzLnUxID0gX2JtMS5nZXRVbkJsaW5kZXIoKTtcbiAgICAgIF90aGlzLnUyID0gX2JtMi5nZXRVbkJsaW5kZXIoKTtcbiAgICAgIF90aGlzLnUzID0gX2JtMy5nZXRVbkJsaW5kZXIoKTtcblxuICAgICAgLy8gQmxpbmQgdGhlIG1lc3NhZ2VcbiAgICAgICBfYm0xLmJsaW5kTWVzc2FnZSgpXG4gICAgICAgIC50aGVuKCBibTEgPT4ge1xuICAgICAgICAgIF90aGlzLmJtMSA9IGJtMTtcbiAgICAgICAgICByZXR1cm4gX2JtMi5ibGluZE1lc3NhZ2UoKVxuICAgICAgICB9KVxuICAgICAgICAudGhlbiggYm0yID0+IHtcbiAgICAgICAgICBfdGhpcy5ibTIgPSBibTI7XG4gICAgICAgICAgcmV0dXJuIF9ibTMuYmxpbmRNZXNzYWdlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCBibTMgPT4ge1xuICAgICAgICAgIF90aGlzLmJtMyA9IGJtMztcbiAgICAgICAgICByZXNvbHZlKHRoaXMpO1xuICAgICAgICB9KVxuICAgIH0pXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICB1c2VyU2lnbigpe1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgbGV0IHVQSyA9IENsaXF6U2VjdXJlTWVzc2FnZS51UEsucHVibGljS2V5QjY0O1xuICAgICAgbGV0IHBheWxvYWRNc2cgPSB1UEsgKyBcIjtcIiArIF90aGlzLmJtMSArIFwiO1wiICsgX3RoaXMuYm0yICsgXCI7XCIgKyBfdGhpcy5ibTM7XG4gICAgICBsZXQgX3VQSyA9IG5ldyB1c2VyUEsocGF5bG9hZE1zZyk7XG4gICAgICByZXR1cm4gX3VQSy5zaWduKHBheWxvYWRNc2cpLnRoZW4oIHNpZ25lZERhdGEgPT4ge1xuICAgICAgICBfdGhpcy5zaWduZWREYXRhID0gc2lnbmVkRGF0YTtcbiAgICAgICAgcmVzb2x2ZSh0aGlzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgc2VuZEJsaW5kUGF5bG9hZCgpe1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgdmFyIHBheWxvYWQgPSBjcmVhdGVQYXlsb2FkQmxpbmRTaWduYXR1cmUoQ2xpcXpTZWN1cmVNZXNzYWdlLnVQSy5wdWJsaWNLZXlCNjQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5ibTEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5ibTIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5ibTMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zaWduZWREYXRhKTtcbiAgICAgIHJldHVybiBfaHR0cChDbGlxelNlY3VyZU1lc3NhZ2UuQkxJTkRfU0lHTkVSKVxuICAgICAgICAgICAgICAucG9zdChKU09OLnN0cmluZ2lmeShwYXlsb2FkKSlcbiAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIF90aGlzLmJzUmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMpO1xuICAgICAgICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIHVuQmxpbmRNZXNzYWdlKCl7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICBsZXQgcmVzID0gX3RoaXMuYnNSZXNwb25zZTtcbiAgICAgIC8vIENhcHR1cmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgYnMxID0gcmVzW1wiYnMxXCJdO1xuICAgICAgdmFyIGJzMiA9IHJlc1tcImJzMlwiXTtcbiAgICAgIHZhciBiczMgPSByZXNbXCJiczNcIl07XG4gICAgICB2YXIgc3VQSyA9IHJlc1tcInN1UEtcIl07XG5cbiAgICAgIC8vIFVuYmxpbmQgdGhlIG1lc3NhZ2UgdG8gZ2V0IHRoZSBzaWduYXR1cmUuXG4gICAgICBfdGhpcy51czEgPSB1bkJsaW5kTWVzc2FnZShiczEsIF90aGlzLnUxKTtcbiAgICAgIF90aGlzLnVzMiA9IHVuQmxpbmRNZXNzYWdlKGJzMiwgX3RoaXMudTIpO1xuICAgICAgX3RoaXMudXMzID0gdW5CbGluZE1lc3NhZ2UoYnMzLCBfdGhpcy51Myk7XG4gICAgICBfdGhpcy5zdVBLID0gc3VQSztcbiAgICAgIHJlc29sdmUodGhpcyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuIHNpZ25VbmJsaW5kZWRNZXNzYWdlKCl7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICBsZXQgcGF5bG9hZCA9IENsaXF6U2VjdXJlTWVzc2FnZS51UEsucHVibGljS2V5QjY0ICsgXCI7XCIgKyBfdGhpcy5tUCArXCI7XCIrICBfdGhpcy5kbUMgKyBcIjtcIiArIF90aGlzLnVzMSArIFwiO1wiICsgX3RoaXMudXMyICsgXCI7XCIgKyBfdGhpcy51czM7XG4gICAgICBsZXQgX3VQSyA9IG5ldyB1c2VyUEsocGF5bG9hZCk7XG4gICAgICAgIHJldHVybiBfdVBLLnNpZ24ocGF5bG9hZCkudGhlbihzaWduZWRNZXNzYWdlUHJveHkgPT4ge1xuICAgICAgICAgIF90aGlzLnNpZ25lZE1lc3NhZ2VQcm94eSA9IHNpZ25lZE1lc3NhZ2VQcm94eTtcbiAgICAgICAgICByZXNvbHZlKHRoaXMpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIHNlbmRNZXNzYWdlUHJveHkoKXtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgIGxldCBwYXlsb2FkID0gY3JlYXRlUGF5bG9hZFByb3h5KENsaXF6U2VjdXJlTWVzc2FnZS51UEsucHVibGljS2V5QjY0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdVBLICxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubVAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmRtQyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudXMxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy51czIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnVzMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2lnbmVkTWVzc2FnZVByb3h5KTtcbiAgICAgIHJldHVybiBfaHR0cChfdGhpcy5wcm94eUNvb3JkaW5hdG9yKVxuICAgICAgICAgICAgICAucG9zdChKU09OLnN0cmluZ2lmeShwYXlsb2FkKSlcbiAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gcmVzb2x2ZSh0aGlzKSlcbiAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgc2F2ZUxvY2FsQ2hlY2tUYWJsZSgpe1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgLy8gU2F2ZSB0aGUgaGFzaCBpbiB0ZW1wb3JhbCB1bmlxdWUgcXVldWUuXG4gICAgICB2YXIgdHQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIGxvY2FsVGVtcG9yYWxVbmlxW190aGlzLmRtQ10gPSB7XCJ0c1wiOnR0LCBcImZ1bGxoYXNoXCI6IF90aGlzLmZ1bGxIYXNofTtcbiAgICAgIHJlc29sdmUodGhpcyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb21pc2U7XG5cbiAgfVxuICBxdWVyeShxdWVyeVByb3h5VXJsKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICBfdGhpcy5hZXNFbmNyeXB0KCkudGhlbiggZSA9PiB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zaWduS2V5KCk7XG4gICAgICB9KS50aGVuKCBlID0+IHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XCJtUFwiOl90aGlzLmdldE1QKCl9O1xuXG4gICAgICAgIHJldHVybiBfaHR0cChxdWVyeVByb3h5VXJsKVxuICAgICAgICAgICAgLnBvc3QoSlNPTi5zdHJpbmdpZnkoZGF0YSksIFwiaW5zdGFudFwiKTtcbiAgICAgICAgfSkudGhlbiAoIHJlcyA9PiB7XG4gICAgICAgICAgICAvLyBHb3QgcmVzcG9uc2UsIGxldCdzIGRlY3J5cHQgaXQuXG4gICAgICAgICAgICBfdGhpcy5hZXNEZWNyeXB0KEpTT04ucGFyc2UocmVzKVtcImRhdGFcIl0pLnRoZW4oIGRlY3J5cHRlZFJlcyA9PiB7XG4gICAgICAgICAgICAgIHJlc29sdmUoZGVjcnlwdGVkUmVzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS5jYXRjaCggZXJyID0+IF90aGlzLmxvZyhlcnIpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIGVuY3J5cHRlZFRlbGVtZXRyeSgpe1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgdHJ5e1xuICAgICAgICByZXR1cm4gX3RoaXMuZ2V0cHJveHlDb29yZGluYXRvcigpXG4gICAgICAgICAgLnRoZW4oKCkgPT4gX3RoaXMuY2hlY2tMb2NhbFVuaXEoKSlcbiAgICAgICAgICAudGhlbigoKSA9PiBfdGhpcy5hZXNFbmNyeXB0KFwidGVsZW1ldHJ5XCIpKVxuICAgICAgICAgIC50aGVuKCgpID0+IF90aGlzLnNpZ25LZXkoKSlcbiAgICAgICAgICAudGhlbigoKSA9PiBfdGhpcy5ibGluZE1lc3NhZ2UoKSlcbiAgICAgICAgICAudGhlbigoKSA9PiBfdGhpcy51c2VyU2lnbigpKVxuICAgICAgICAgIC50aGVuKCgpID0+IF90aGlzLnNlbmRCbGluZFBheWxvYWQoKSlcbiAgICAgICAgICAudGhlbigoKSA9PiBfdGhpcy51bkJsaW5kTWVzc2FnZSgpKVxuICAgICAgICAgIC50aGVuKCgpID0+IF90aGlzLnNpZ25VbmJsaW5kZWRNZXNzYWdlKCkpXG4gICAgICAgICAgLnRoZW4oKCkgPT4gX3RoaXMuc2VuZE1lc3NhZ2VQcm94eSgpKVxuICAgICAgICAgIC50aGVuKCgpID0+IF90aGlzLnNhdmVMb2NhbENoZWNrVGFibGUoKSlcbiAgICAgICAgICAudGhlbigoKSA9PiByZXNvbHZlKHRydWUpKVxuICAgICAgICAgIC5jYXRjaCggZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlcnIpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGNyZWF0aW5nIG1jOiBcIiArIGVycik7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5cbmltcG9ydCBjcnlwdG8gZnJvbSAnLi4vLi4vcGxhdGZvcm0vY3J5cHRvJztcbmltcG9ydCB7IHRvQmFzZTY0LCBmcm9tQmFzZTY0LCB0b0hleCwgZnJvbUhleCwgdG9VVEY4LCBmcm9tVVRGOCB9IGZyb20gJy4uL2VuY29kaW5nJztcblxuaW1wb3J0IHsgZXhwb3J0UHJpdmF0ZUtleSwgZXhwb3J0UHVibGljS2V5IH0gZnJvbSAnLi9wa2NzLWNvbnZlcnNpb24nO1xuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5KGRhdGEsIGZvcm1hdCkge1xuICBpZiAoZm9ybWF0ID09PSAnaGV4Jykge1xuICAgIHJldHVybiB0b0hleChkYXRhKTtcbiAgfSBlbHNlIGlmIChmb3JtYXQgPT09ICdiNjQnKSB7XG4gICAgcmV0dXJuIHRvQmFzZTY0KGRhdGEpO1xuICB9XG4gIHJldHVybiBkYXRhO1xufVxuZnVuY3Rpb24gdG9CeXRlQXJyYXkoZGF0YSwgZm9ybWF0KSB7XG4gIGlmIChmb3JtYXQgPT09ICdoZXgnKSB7XG4gICAgcmV0dXJuIGZyb21IZXgoZGF0YSk7XG4gIH0gZWxzZSBpZiAoZm9ybWF0ID09PSAnYjY0Jykge1xuICAgIHJldHVybiBmcm9tQmFzZTY0KGRhdGEpO1xuICB9XG4gIHJldHVybiBkYXRhO1xufVxuZnVuY3Rpb24gZnJvbUFycmF5QnVmZmVyKGRhdGEsIGZvcm1hdCkge1xuICByZXR1cm4gZnJvbUJ5dGVBcnJheShuZXcgVWludDhBcnJheShkYXRhKSwgZm9ybWF0KTtcbn1cbmZ1bmN0aW9uIHRvQXJyYXlCdWZmZXIoZGF0YSwgZm9ybWF0KSB7XG4gIHJldHVybiB0b0J5dGVBcnJheShkYXRhLCBmb3JtYXQpLmJ1ZmZlcjtcbn1cbmZ1bmN0aW9uIGhhc2goYWxnbywgc3RyLCBmb3JtYXQgPSAnaGV4Jykge1xuICByZXR1cm4gY3J5cHRvLnN1YnRsZS5kaWdlc3QoYWxnbywgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgPyB0b1VURjgoc3RyKSA6IHN0cilcbiAgLnRoZW4oaCA9PiBmcm9tQXJyYXlCdWZmZXIoaCwgZm9ybWF0KSk7XG59XG5mdW5jdGlvbiBzaGEyNTYoc3RyLCBmb3JtYXQgPSAnaGV4Jykge1xuICByZXR1cm4gaGFzaCgnU0hBLTI1NicsIHN0ciwgZm9ybWF0KTtcbn1cbmZ1bmN0aW9uIGltcG9ydEFFU0tleShrZXkpIHtcbiAgcmV0dXJuIGNyeXB0by5zdWJ0bGUuaW1wb3J0S2V5KCdyYXcnLCB0b0FycmF5QnVmZmVyKGtleSwgJ2hleCcpLFxuICAgIHsgbmFtZTogJ0FFUy1HQ00nLCBsZW5ndGg6IDI1NiB9LCB0cnVlLCBbJ2VuY3J5cHQnLCAnZGVjcnlwdCddKTtcbn1cbmZ1bmN0aW9uIGVuY3J5cHRBRVMoZGF0YSwga2V5LCBpdikge1xuICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgIGl2IHx8IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMTIpKSxcbiAgICB0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyA/IGltcG9ydEFFU0tleShrZXkpIDoga2V5LFxuICBdKVxuICAudGhlbigoW19pdiwgX2tleV0pID0+XG4gICAgY3J5cHRvLnN1YnRsZS5lbmNyeXB0KHsgbmFtZTogJ0FFUy1HQ00nLCBpdjogX2l2IH0sIF9rZXksIGRhdGEpXG4gICAgLnRoZW4oZW5jcnlwdGVkID0+XG4gICAgICBbZnJvbUFycmF5QnVmZmVyKF9pdiwgJ2I2NCcpLCBmcm9tQXJyYXlCdWZmZXIoZW5jcnlwdGVkLCAnYjY0JyldLFxuICAgICksXG4gICk7XG59XG4vLyBSZXR1cm5zIFtJViwgZW5jcnlwdGVkRGF0YV1cbmZ1bmN0aW9uIGVuY3J5cHRTdHJpbmdBRVModHh0LCBrZXksIGl2KSB7XG4gIHJldHVybiBlbmNyeXB0QUVTKHRvVVRGOCh0eHQpLmJ1ZmZlciwga2V5LCBpdik7XG59XG5mdW5jdGlvbiBkZWNyeXB0QUVTKGVuY3J5cHRlZCwga2V5KSB7XG4gIGxldCBpdiA9IGVuY3J5cHRlZFswXTtcbiAgbGV0IGVuY3J5cHRlZE1zZyA9IGVuY3J5cHRlZFsxXTtcbiAgaXYgPSBuZXcgVWludDhBcnJheSh0b0FycmF5QnVmZmVyKGl2LCAnYjY0JykpO1xuICBlbmNyeXB0ZWRNc2cgPSB0b0FycmF5QnVmZmVyKGVuY3J5cHRlZE1zZywgJ2I2NCcpO1xuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgLnRoZW4oKCkgPT4gKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnID8gaW1wb3J0QUVTS2V5KGtleSkgOiBrZXkpKVxuICAudGhlbihpbXBvcnRlZEtleSA9PiBjcnlwdG8uc3VidGxlLmRlY3J5cHQoeyBuYW1lOiAnQUVTLUdDTScsIGl2IH0sIGltcG9ydGVkS2V5LCBlbmNyeXB0ZWRNc2cpKTtcbn1cbmZ1bmN0aW9uIGRlY3J5cHRTdHJpbmdBRVMoZW5jcnlwdGVkLCBrZXkpIHtcbiAgcmV0dXJuIGRlY3J5cHRBRVMoZW5jcnlwdGVkLCBrZXkpXG4gIC50aGVuKGRlY3J5cHRlZCA9PiBmcm9tVVRGOChuZXcgVWludDhBcnJheShkZWNyeXB0ZWQpKSk7XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUFFU0tleSgpIHtcbiAgcmV0dXJuIGNyeXB0by5zdWJ0bGUuZ2VuZXJhdGVLZXkoXG4gICAgeyBuYW1lOiAnQUVTLUdDTScsIGxlbmd0aDogMjU2IH0sIHRydWUsIFsnZW5jcnlwdCcsICdkZWNyeXB0J10sXG4gICk7XG59XG5mdW5jdGlvbiBleHBvcnRBRVNLZXkoa2V5KSB7XG4gIHJldHVybiBjcnlwdG8uc3VidGxlLmV4cG9ydEtleSgncmF3Jywga2V5KVxuICAudGhlbihfa2V5ID0+IGZyb21BcnJheUJ1ZmZlcihfa2V5LCAnaGV4JykpO1xufVxuZnVuY3Rpb24gaW1wb3J0UlNBS2V5KHBrLCBwdWIgPSB0cnVlLCBoID0gJ1NIQS0yNTYnKSB7XG4gIHJldHVybiBjcnlwdG8uc3VidGxlLmltcG9ydEtleShcbiAgICBwdWIgPyAnc3BraScgOiAncGtjczgnLFxuICAgIGZyb21CYXNlNjQocGspLFxuICAgIHtcbiAgICAgIG5hbWU6ICdSU0EtT0FFUCcsXG4gICAgICBoYXNoOiB7IG5hbWU6IGggfSxcbiAgICB9LFxuICAgIGZhbHNlLFxuICAgIHB1YiA/IFsnd3JhcEtleScsICdlbmNyeXB0J10gOiBbJ3Vud3JhcEtleScsICdkZWNyeXB0J10sXG4gICk7XG59XG5mdW5jdGlvbiB3cmFwQUVTS2V5KGFlc0tleSwgcHVibGljS2V5KSB7XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoXG4gICAgdHlwZW9mIHB1YmxpY0tleSA9PT0gJ3N0cmluZycgPyBpbXBvcnRSU0FLZXkocHVibGljS2V5LCB0cnVlKSA6IHB1YmxpY0tleSxcbiAgKVxuICAudGhlbihwayA9PlxuICAgIGNyeXB0by5zdWJ0bGUud3JhcEtleSgncmF3JywgYWVzS2V5LCBwaywgeyBuYW1lOiAnUlNBLU9BRVAnLCBoYXNoOiB7IG5hbWU6ICdTSEEtMjU2JyB9IH0pLFxuICApXG4gIC50aGVuKHdyYXBwZWQgPT4gdG9CYXNlNjQod3JhcHBlZCkpO1xufVxuZnVuY3Rpb24gdW53cmFwQUVTS2V5KGFlc0tleSwgcHJpdmF0ZUtleSkge1xuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFxuICAgIHR5cGVvZiBwcml2YXRlS2V5ID09PSAnc3RyaW5nJyA/IGltcG9ydFJTQUtleShwcml2YXRlS2V5LCBmYWxzZSkgOiBwcml2YXRlS2V5LFxuICApXG4gIC50aGVuKHBrID0+XG4gICAgY3J5cHRvLnN1YnRsZS51bndyYXBLZXkoXG4gICAgICAncmF3JyxcbiAgICAgIGZyb21CYXNlNjQoYWVzS2V5KSxcbiAgICAgIHBrLFxuICAgICAge1xuICAgICAgICBuYW1lOiAnUlNBLU9BRVAnLFxuICAgICAgICBtb2R1bHVzTGVuZ3RoOiAyMDQ4LFxuICAgICAgICBwdWJsaWNFeHBvbmVudDogbmV3IFVpbnQ4QXJyYXkoWzB4MDEsIDB4MDAsIDB4MDFdKSxcbiAgICAgICAgaGFzaDogeyBuYW1lOiAnU0hBLTI1NicgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdBRVMtR0NNJyxcbiAgICAgICAgbGVuZ3RoOiAyNTYsXG4gICAgICB9LFxuICAgICAgdHJ1ZSxcbiAgICAgIFsnZW5jcnlwdCcsICdkZWNyeXB0J10sXG4gICAgKSxcbiAgKTtcbn1cbmZ1bmN0aW9uIGVuY3J5cHRTdHJpbmdSU0EodHh0LCBwdWJsaWNLZXkpIHtcbiAgcmV0dXJuIGdlbmVyYXRlQUVTS2V5KClcbiAgLnRoZW4oKGFlc0tleSkgPT4ge1xuICAgIGxldCBwcm9taXNlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHB1YmxpY0tleSkpIHtcbiAgICAgIHByb21pc2UgPSBQcm9taXNlLmFsbChwdWJsaWNLZXkubWFwKHggPT4gd3JhcEFFU0tleShhZXNLZXksIHgpKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UgPSB3cmFwQUVTS2V5KGFlc0tleSwgcHVibGljS2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgIGVuY3J5cHRTdHJpbmdBRVModHh0LCBhZXNLZXkpLFxuICAgICAgcHJvbWlzZSxcbiAgICBdKTtcbiAgfSk7XG59XG5mdW5jdGlvbiByYXdFbmNyeXB0UlNBKGRhdGEsIHB1YmxpY0tleSkge1xuICByZXR1cm4gaW1wb3J0UlNBS2V5KHB1YmxpY0tleSwgdHJ1ZSwgJ1NIQS0xJylcbiAgLnRoZW4oa2V5ID0+IGNyeXB0by5zdWJ0bGUuZW5jcnlwdCh7IG5hbWU6ICdSU0EtT0FFUCcgfSwga2V5LCBkYXRhKSlcbiAgLnRoZW4oZCA9PiBuZXcgVWludDhBcnJheShkKSk7XG59XG5mdW5jdGlvbiBfZW5jcnlwdFJTQShkYXRhLCBwdWJLZXksIGFlc0tleSkge1xuICBjb25zdCB3cmFwUHJvbWlzZSA9IEFycmF5LmlzQXJyYXkocHViS2V5KSA/XG4gICAgUHJvbWlzZS5hbGwocHViS2V5Lm1hcCh4ID0+IHdyYXBBRVNLZXkoYWVzS2V5LCB4KSkpIDpcbiAgICB3cmFwQUVTS2V5KGFlc0tleSwgcHViS2V5KTtcbiAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICBlbmNyeXB0QUVTKGRhdGEsIGFlc0tleSksXG4gICAgd3JhcFByb21pc2VcbiAgXSk7XG59XG5mdW5jdGlvbiBlbmNyeXB0UlNBKGRhdGEsIHB1YmxpY0tleSwgYWVzS2V5KSB7XG4gIGlmIChhZXNLZXkpIHtcbiAgICByZXR1cm4gX2VuY3J5cHRSU0EoZGF0YSwgcHVibGljS2V5LCBhZXNLZXkpO1xuICB9XG4gIHJldHVybiBnZW5lcmF0ZUFFU0tleSgpXG4gIC50aGVuKGsgPT4gX2VuY3J5cHRSU0EoZGF0YSwgcHVibGljS2V5LCBrKSk7XG59XG5mdW5jdGlvbiBkZWNyeXB0UlNBKGRhdGEsIHByaXZhdGVLZXkpIHtcbiAgY29uc3QgW2VuY3J5cHRlZCwgd3JhcHBlZEtleV0gPSBkYXRhO1xuICByZXR1cm4gdW53cmFwQUVTS2V5KHdyYXBwZWRLZXksIHByaXZhdGVLZXkpXG4gICAgLnRoZW4oYWVzS2V5ID0+IGRlY3J5cHRBRVMoZW5jcnlwdGVkLCBhZXNLZXkpKTtcbn1cbmZ1bmN0aW9uIGRlY3J5cHRTdHJpbmdSU0EoZGF0YSwgcHJpdmF0ZUtleSkge1xuICBjb25zdCBbZW5jcnlwdGVkLCB3cmFwcGVkS2V5XSA9IGRhdGE7XG4gIHJldHVybiB1bndyYXBBRVNLZXkod3JhcHBlZEtleSwgcHJpdmF0ZUtleSlcbiAgICAudGhlbihhZXNLZXkgPT4gZGVjcnlwdFN0cmluZ0FFUyhlbmNyeXB0ZWQsIGFlc0tleSkpO1xufVxuXG5mdW5jdGlvbiByYW5kb21CeXRlcyhudW1CeXRlcykge1xuICByZXR1cm4gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShudW1CeXRlcykpO1xufVxuXG5mdW5jdGlvbiBkZXJpdmVBRVNLZXkoYnl0ZXMpIHtcbiAgcmV0dXJuIHNoYTI1NihieXRlcywgJ3JhdycpXG4gIC50aGVuKGggPT5cbiAgICBjcnlwdG8uc3VidGxlLmltcG9ydEtleSgncmF3JywgaCwgeyBuYW1lOiAnQUVTLUdDTScgfSwgdHJ1ZSwgWydlbmNyeXB0JywgJ2RlY3J5cHQnXSksXG4gICk7XG59XG5cbmZ1bmN0aW9uIHNoYTEocykge1xuICByZXR1cm4gaGFzaCgnU0hBLTEnLCBzKTtcbn1cblxuZXhwb3J0IHtcbiAgaGFzaCxcbiAgc2hhMjU2LFxuICBmcm9tQnl0ZUFycmF5LFxuICB0b0J5dGVBcnJheSxcbiAgZnJvbUFycmF5QnVmZmVyLFxuICB0b0FycmF5QnVmZmVyLFxuICBlbmNyeXB0QUVTLFxuICBlbmNyeXB0U3RyaW5nQUVTLFxuICBkZWNyeXB0QUVTLFxuICBkZWNyeXB0U3RyaW5nQUVTLFxuICBnZW5lcmF0ZUFFU0tleSxcbiAgZXhwb3J0QUVTS2V5LFxuICBpbXBvcnRBRVNLZXksXG4gIGltcG9ydFJTQUtleSxcbiAgd3JhcEFFU0tleSxcbiAgdW53cmFwQUVTS2V5LFxuICBlbmNyeXB0U3RyaW5nUlNBLFxuICByYXdFbmNyeXB0UlNBLFxuICBlbmNyeXB0UlNBLFxuICBkZWNyeXB0UlNBLFxuICBkZWNyeXB0U3RyaW5nUlNBLFxuICByYW5kb21CeXRlcyxcbiAgZGVyaXZlQUVTS2V5LFxuICBzaGExLFxuICBleHBvcnRQcml2YXRlS2V5LFxuICBleHBvcnRQdWJsaWNLZXlcbn07XG4iLCIvLyBXQVJOSU5HOiBmb3IgdXRmLTggc3RyaW5ncyByZXN1bHQgd2lsbCBiZSBkaWZmZXJlbnQgdGhhbiAnc3RhbmRhcmQnIG1kNS5cbi8vIFRoaXMgaXMgYmVjYXVzZSB1bmljb2RlIHZhbHVlcyBpbnN0ZWFkIG9mIHV0Zi04IGJ5dGVzIGFyZSB1c2VkICh0byBhdm9pZFxuLy8gY29udmVyc2lvbiBvdmVyaGVhZCkuIFVzaW5nIHRoaXMgdG8gbm90IGJyZWFrIGFueXRoaW5nLCBzaW5jZSBpdCBoYXMgYmVlblxuLy8gdXNlZCBmb3IgbG9uZyB0aW1lIGluIHNldmVyYWwgcGxhY2VzIGluIG91ciBjb2RlLiBJZiB5b3UgbmVlZCBhICdzdGFuZGFyZCdcbi8vIG1kNSBmdW5jdGlvbiwgdXNlIGFub3RoZXIgb25lLlxuXG4vLyBDb3BpZWQgZnJvbSBodHRwOi8vd3d3Lm15ZXJzZGFpbHkub3JnL2pvc2VwaC9qYXZhc2NyaXB0L21kNS10ZXh0Lmh0bWxcbi8vIGFuZCBhZGFwdGVkIHRvIG1hdGNoIG91ciBjb2Rpbmcgc3R5bGUgZ3VpZGVcblxuLyogdGhpcyBmdW5jdGlvbiBpcyBtdWNoIGZhc3RlcixcbnNvIGlmIHBvc3NpYmxlIHdlIHVzZSBpdC4gU29tZSBJRXNcbmFyZSB0aGUgb25seSBvbmVzIEkga25vdyBvZiB0aGF0XG5uZWVkIHRoZSBpZGlvdGljIHNlY29uZCBmdW5jdGlvbixcbmdlbmVyYXRlZCBieSBhbiBpZiBjbGF1c2UuICAqL1xuZnVuY3Rpb24gYWRkMzIoYSwgYikge1xuICByZXR1cm4gKGEgKyBiKSAmIDB4RkZGRkZGRkY7XG59XG5cbmZ1bmN0aW9uIGNtbihxLCBhLCBiLCB4LCBzLCB0KSB7XG4gIGNvbnN0IGFhID0gYWRkMzIoYWRkMzIoYSwgcSksIGFkZDMyKHgsIHQpKTtcbiAgcmV0dXJuIGFkZDMyKChhYSA8PCBzKSB8IChhYSA+Pj4gKDMyIC0gcykpLCBiKTtcbn1cblxuZnVuY3Rpb24gZmYoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gY21uKChiICYgYykgfCAoKH5iKSAmIGQpLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gZ2coYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gY21uKChiICYgZCkgfCAoYyAmICh+ZCkpLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gaGgoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gY21uKGIgXiBjIF4gZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIGlpKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIGNtbihjIF4gKGIgfCAofmQpKSwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWN5Y2xlKHgsIGspIHtcbiAgbGV0IGEgPSB4WzBdO1xuICBsZXQgYiA9IHhbMV07XG4gIGxldCBjID0geFsyXTtcbiAgbGV0IGQgPSB4WzNdO1xuICBjb25zdCB4eCA9IHg7XG5cbiAgYSA9IGZmKGEsIGIsIGMsIGQsIGtbMF0sIDcsIC02ODA4NzY5MzYpO1xuICBkID0gZmYoZCwgYSwgYiwgYywga1sxXSwgMTIsIC0zODk1NjQ1ODYpO1xuICBjID0gZmYoYywgZCwgYSwgYiwga1syXSwgMTcsIDYwNjEwNTgxOSk7XG4gIGIgPSBmZihiLCBjLCBkLCBhLCBrWzNdLCAyMiwgLTEwNDQ1MjUzMzApO1xuICBhID0gZmYoYSwgYiwgYywgZCwga1s0XSwgNywgLTE3NjQxODg5Nyk7XG4gIGQgPSBmZihkLCBhLCBiLCBjLCBrWzVdLCAxMiwgMTIwMDA4MDQyNik7XG4gIGMgPSBmZihjLCBkLCBhLCBiLCBrWzZdLCAxNywgLTE0NzMyMzEzNDEpO1xuICBiID0gZmYoYiwgYywgZCwgYSwga1s3XSwgMjIsIC00NTcwNTk4Myk7XG4gIGEgPSBmZihhLCBiLCBjLCBkLCBrWzhdLCA3LCAxNzcwMDM1NDE2KTtcbiAgZCA9IGZmKGQsIGEsIGIsIGMsIGtbOV0sIDEyLCAtMTk1ODQxNDQxNyk7XG4gIGMgPSBmZihjLCBkLCBhLCBiLCBrWzEwXSwgMTcsIC00MjA2Myk7XG4gIGIgPSBmZihiLCBjLCBkLCBhLCBrWzExXSwgMjIsIC0xOTkwNDA0MTYyKTtcbiAgYSA9IGZmKGEsIGIsIGMsIGQsIGtbMTJdLCA3LCAxODA0NjAzNjgyKTtcbiAgZCA9IGZmKGQsIGEsIGIsIGMsIGtbMTNdLCAxMiwgLTQwMzQxMTAxKTtcbiAgYyA9IGZmKGMsIGQsIGEsIGIsIGtbMTRdLCAxNywgLTE1MDIwMDIyOTApO1xuICBiID0gZmYoYiwgYywgZCwgYSwga1sxNV0sIDIyLCAxMjM2NTM1MzI5KTtcblxuICBhID0gZ2coYSwgYiwgYywgZCwga1sxXSwgNSwgLTE2NTc5NjUxMCk7XG4gIGQgPSBnZyhkLCBhLCBiLCBjLCBrWzZdLCA5LCAtMTA2OTUwMTYzMik7XG4gIGMgPSBnZyhjLCBkLCBhLCBiLCBrWzExXSwgMTQsIDY0MzcxNzcxMyk7XG4gIGIgPSBnZyhiLCBjLCBkLCBhLCBrWzBdLCAyMCwgLTM3Mzg5NzMwMik7XG4gIGEgPSBnZyhhLCBiLCBjLCBkLCBrWzVdLCA1LCAtNzAxNTU4NjkxKTtcbiAgZCA9IGdnKGQsIGEsIGIsIGMsIGtbMTBdLCA5LCAzODAxNjA4Myk7XG4gIGMgPSBnZyhjLCBkLCBhLCBiLCBrWzE1XSwgMTQsIC02NjA0NzgzMzUpO1xuICBiID0gZ2coYiwgYywgZCwgYSwga1s0XSwgMjAsIC00MDU1Mzc4NDgpO1xuICBhID0gZ2coYSwgYiwgYywgZCwga1s5XSwgNSwgNTY4NDQ2NDM4KTtcbiAgZCA9IGdnKGQsIGEsIGIsIGMsIGtbMTRdLCA5LCAtMTAxOTgwMzY5MCk7XG4gIGMgPSBnZyhjLCBkLCBhLCBiLCBrWzNdLCAxNCwgLTE4NzM2Mzk2MSk7XG4gIGIgPSBnZyhiLCBjLCBkLCBhLCBrWzhdLCAyMCwgMTE2MzUzMTUwMSk7XG4gIGEgPSBnZyhhLCBiLCBjLCBkLCBrWzEzXSwgNSwgLTE0NDQ2ODE0NjcpO1xuICBkID0gZ2coZCwgYSwgYiwgYywga1syXSwgOSwgLTUxNDAzNzg0KTtcbiAgYyA9IGdnKGMsIGQsIGEsIGIsIGtbN10sIDE0LCAxNzM1MzI4NDczKTtcbiAgYiA9IGdnKGIsIGMsIGQsIGEsIGtbMTJdLCAyMCwgLTE5MjY2MDc3MzQpO1xuXG4gIGEgPSBoaChhLCBiLCBjLCBkLCBrWzVdLCA0LCAtMzc4NTU4KTtcbiAgZCA9IGhoKGQsIGEsIGIsIGMsIGtbOF0sIDExLCAtMjAyMjU3NDQ2Myk7XG4gIGMgPSBoaChjLCBkLCBhLCBiLCBrWzExXSwgMTYsIDE4MzkwMzA1NjIpO1xuICBiID0gaGgoYiwgYywgZCwgYSwga1sxNF0sIDIzLCAtMzUzMDk1NTYpO1xuICBhID0gaGgoYSwgYiwgYywgZCwga1sxXSwgNCwgLTE1MzA5OTIwNjApO1xuICBkID0gaGgoZCwgYSwgYiwgYywga1s0XSwgMTEsIDEyNzI4OTMzNTMpO1xuICBjID0gaGgoYywgZCwgYSwgYiwga1s3XSwgMTYsIC0xNTU0OTc2MzIpO1xuICBiID0gaGgoYiwgYywgZCwgYSwga1sxMF0sIDIzLCAtMTA5NDczMDY0MCk7XG4gIGEgPSBoaChhLCBiLCBjLCBkLCBrWzEzXSwgNCwgNjgxMjc5MTc0KTtcbiAgZCA9IGhoKGQsIGEsIGIsIGMsIGtbMF0sIDExLCAtMzU4NTM3MjIyKTtcbiAgYyA9IGhoKGMsIGQsIGEsIGIsIGtbM10sIDE2LCAtNzIyNTIxOTc5KTtcbiAgYiA9IGhoKGIsIGMsIGQsIGEsIGtbNl0sIDIzLCA3NjAyOTE4OSk7XG4gIGEgPSBoaChhLCBiLCBjLCBkLCBrWzldLCA0LCAtNjQwMzY0NDg3KTtcbiAgZCA9IGhoKGQsIGEsIGIsIGMsIGtbMTJdLCAxMSwgLTQyMTgxNTgzNSk7XG4gIGMgPSBoaChjLCBkLCBhLCBiLCBrWzE1XSwgMTYsIDUzMDc0MjUyMCk7XG4gIGIgPSBoaChiLCBjLCBkLCBhLCBrWzJdLCAyMywgLTk5NTMzODY1MSk7XG5cbiAgYSA9IGlpKGEsIGIsIGMsIGQsIGtbMF0sIDYsIC0xOTg2MzA4NDQpO1xuICBkID0gaWkoZCwgYSwgYiwgYywga1s3XSwgMTAsIDExMjY4OTE0MTUpO1xuICBjID0gaWkoYywgZCwgYSwgYiwga1sxNF0sIDE1LCAtMTQxNjM1NDkwNSk7XG4gIGIgPSBpaShiLCBjLCBkLCBhLCBrWzVdLCAyMSwgLTU3NDM0MDU1KTtcbiAgYSA9IGlpKGEsIGIsIGMsIGQsIGtbMTJdLCA2LCAxNzAwNDg1NTcxKTtcbiAgZCA9IGlpKGQsIGEsIGIsIGMsIGtbM10sIDEwLCAtMTg5NDk4NjYwNik7XG4gIGMgPSBpaShjLCBkLCBhLCBiLCBrWzEwXSwgMTUsIC0xMDUxNTIzKTtcbiAgYiA9IGlpKGIsIGMsIGQsIGEsIGtbMV0sIDIxLCAtMjA1NDkyMjc5OSk7XG4gIGEgPSBpaShhLCBiLCBjLCBkLCBrWzhdLCA2LCAxODczMzEzMzU5KTtcbiAgZCA9IGlpKGQsIGEsIGIsIGMsIGtbMTVdLCAxMCwgLTMwNjExNzQ0KTtcbiAgYyA9IGlpKGMsIGQsIGEsIGIsIGtbNl0sIDE1LCAtMTU2MDE5ODM4MCk7XG4gIGIgPSBpaShiLCBjLCBkLCBhLCBrWzEzXSwgMjEsIDEzMDkxNTE2NDkpO1xuICBhID0gaWkoYSwgYiwgYywgZCwga1s0XSwgNiwgLTE0NTUyMzA3MCk7XG4gIGQgPSBpaShkLCBhLCBiLCBjLCBrWzExXSwgMTAsIC0xMTIwMjEwMzc5KTtcbiAgYyA9IGlpKGMsIGQsIGEsIGIsIGtbMl0sIDE1LCA3MTg3ODcyNTkpO1xuICBiID0gaWkoYiwgYywgZCwgYSwga1s5XSwgMjEsIC0zNDM0ODU1NTEpO1xuXG4gIHh4WzBdID0gYWRkMzIoYSwgeFswXSk7XG4gIHh4WzFdID0gYWRkMzIoYiwgeFsxXSk7XG4gIHh4WzJdID0gYWRkMzIoYywgeFsyXSk7XG4gIHh4WzNdID0gYWRkMzIoZCwgeFszXSk7XG59XG5cblxuLyogdGhlcmUgbmVlZHMgdG8gYmUgc3VwcG9ydCBmb3IgVW5pY29kZSBoZXJlLFxuICogdW5sZXNzIHdlIHByZXRlbmQgdGhhdCB3ZSBjYW4gcmVkZWZpbmUgdGhlIE1ELTVcbiAqIGFsZ29yaXRobSBmb3IgbXVsdGktYnl0ZSBjaGFyYWN0ZXJzIChwZXJoYXBzXG4gKiBieSBhZGRpbmcgZXZlcnkgZm91ciAxNi1iaXQgY2hhcmFjdGVycyBhbmRcbiAqIHNob3J0ZW5pbmcgdGhlIHN1bSB0byAzMiBiaXRzKS4gT3RoZXJ3aXNlXG4gKiBJIHN1Z2dlc3QgcGVyZm9ybWluZyBNRC01IGFzIGlmIGV2ZXJ5IGNoYXJhY3RlclxuICogd2FzIHR3byBieXRlcy0tZS5nLiwgMDA0MCAwMDI1ID0gQCUtLWJ1dCB0aGVuXG4gKiBob3cgd2lsbCBhbiBvcmRpbmFyeSBNRC01IHN1bSBiZSBtYXRjaGVkP1xuICogVGhlcmUgaXMgbm8gd2F5IHRvIHN0YW5kYXJkaXplIHRleHQgdG8gc29tZXRoaW5nXG4gKiBsaWtlIFVURi04IGJlZm9yZSB0cmFuc2Zvcm1hdGlvbjsgc3BlZWQgY29zdCBpc1xuICogdXR0ZXJseSBwcm9oaWJpdGl2ZS4gVGhlIEphdmFTY3JpcHQgc3RhbmRhcmRcbiAqIGl0c2VsZiBuZWVkcyB0byBsb29rIGF0IHRoaXM6IGl0IHNob3VsZCBzdGFydFxuICogcHJvdmlkaW5nIGFjY2VzcyB0byBzdHJpbmdzIGFzIHByZWZvcm1lZCBVVEYtOFxuICogOC1iaXQgdW5zaWduZWQgdmFsdWUgYXJyYXlzLlxuICovXG5mdW5jdGlvbiBtZDVibGsocykgeyAvKiBJIGZpZ3VyZWQgZ2xvYmFsIHdhcyBmYXN0ZXIuICAgKi9cbiAgY29uc3QgbWQ1YmxrcyA9IFtdO1xuICBsZXQgaTsgLyogQW5keSBLaW5nIHNhaWQgZG8gaXQgdGhpcyB3YXkuICovXG4gIGZvciAoaSA9IDA7IGkgPCA2NDsgaSArPSA0KSB7XG4gICAgbWQ1Ymxrc1tpID4+IDJdID0gcy5jaGFyQ29kZUF0KGkpXG4rIChzLmNoYXJDb2RlQXQoaSArIDEpIDw8IDgpXG4rIChzLmNoYXJDb2RlQXQoaSArIDIpIDw8IDE2KVxuKyAocy5jaGFyQ29kZUF0KGkgKyAzKSA8PCAyNCk7XG4gIH1cbiAgcmV0dXJuIG1kNWJsa3M7XG59XG5cbmZ1bmN0aW9uIG1kNTEocykge1xuICBjb25zdCBuID0gcy5sZW5ndGg7XG4gIGNvbnN0IHN0YXRlID0gWzE3MzI1ODQxOTMsIC0yNzE3MzM4NzksIC0xNzMyNTg0MTk0LCAyNzE3MzM4NzhdO1xuICBsZXQgaTtcbiAgZm9yIChpID0gNjQ7IGkgPD0gcy5sZW5ndGg7IGkgKz0gNjQpIHtcbiAgICBtZDVjeWNsZShzdGF0ZSwgbWQ1YmxrKHMuc3Vic3RyaW5nKGkgLSA2NCwgaSkpKTtcbiAgfVxuICBjb25zdCBzcyA9IHMuc3Vic3RyaW5nKGkgLSA2NCk7XG4gIGNvbnN0IHRhaWwgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XG4gIGZvciAoaSA9IDA7IGkgPCBzcy5sZW5ndGg7IGkrKykge1xuICAgIHRhaWxbaSA+PiAyXSB8PSBzcy5jaGFyQ29kZUF0KGkpIDw8ICgoaSAlIDQpIDw8IDMpO1xuICB9XG4gIHRhaWxbaSA+PiAyXSB8PSAweDgwIDw8ICgoaSAlIDQpIDw8IDMpO1xuICBpZiAoaSA+IDU1KSB7XG4gICAgbWQ1Y3ljbGUoc3RhdGUsIHRhaWwpO1xuICAgIGZvciAoaSA9IDA7IGkgPCAxNjsgaSsrKSB0YWlsW2ldID0gMDtcbiAgfVxuICB0YWlsWzE0XSA9IG4gKiA4O1xuICBtZDVjeWNsZShzdGF0ZSwgdGFpbCk7XG4gIHJldHVybiBzdGF0ZTtcbn1cblxuY29uc3QgaGV4Q2hyID0gJzAxMjM0NTY3ODlhYmNkZWYnLnNwbGl0KCcnKTtcblxuZnVuY3Rpb24gcmhleChuKSB7XG4gIGxldCBzID0gJyc7XG4gIGxldCBqID0gMDtcbiAgZm9yICg7IGogPCA0OyBqKyspIHtcbiAgICBzICs9IGhleENoclsobiA+PiAoaiAqIDggKyA0KSkgJiAweDBGXSArIGhleENoclsobiA+PiAoaiAqIDgpKSAmIDB4MEZdO1xuICB9XG4gIHJldHVybiBzO1xufVxuXG5mdW5jdGlvbiBoZXgoeCkge1xuICBjb25zdCB4eCA9IHg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xuICAgIHh4W2ldID0gcmhleCh4W2ldKTtcbiAgfVxuICByZXR1cm4geC5qb2luKCcnKTtcbn1cblxuZnVuY3Rpb24gbWQ1KHMpIHtcbiAgbGV0IGwgPSBzLmxlbmd0aDtcbiAgdmFyIF9tZDUgPSBoZXgobWQ1MShzKSk7XG4gIHJldHVybiBfbWQ1O1xufSIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuXG5pbXBvcnQgeyB0b0Jhc2U2NCwgZnJvbUJhc2U2NCB9IGZyb20gJy4uL2VuY29kaW5nJztcblxuY2xhc3MgQnl0ZUJ1ZmZlciB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMuYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKTtcbiAgICB0aGlzLnBvcyA9IDA7XG4gIH1cblxuICBzZXREYXRhKGRhdGEpIHtcbiAgICB0aGlzLmJ1ZmZlciA9IGRhdGE7XG4gICAgdGhpcy5wb3MgPSAwO1xuICB9XG5cbiAgcmVhZEJ5dGUoKSB7XG4gICAgaWYgKHRoaXMucG9zICsgMSA+IHRoaXMuYnVmZmVyLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcmllZCB0byByZWFkIHBhc3QgdGhlIGJ1ZmZlciBsZW5ndGgnKTtcbiAgICB9XG4gICAgY29uc3QgcG9zID0gdGhpcy5wb3M7XG4gICAgdGhpcy5wb3MgKz0gMTtcbiAgICByZXR1cm4gdGhpcy5idWZmZXJbcG9zXTtcbiAgfVxuXG4gIHJlYWRCeXRlcyhsZW5ndGgpIHtcbiAgICBpZiAodGhpcy5wb3MgKyBsZW5ndGggPiB0aGlzLmJ1ZmZlci5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVHJpZWQgdG8gcmVhZCBwYXN0IHRoZSBidWZmZXIgbGVuZ3RoJyk7XG4gICAgfVxuICAgIGNvbnN0IHJlcyA9IHRoaXMuYnVmZmVyLnN1YmFycmF5KHRoaXMucG9zLCB0aGlzLnBvcyArIGxlbmd0aCk7XG4gICAgdGhpcy5wb3MgKz0gbGVuZ3RoO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICByZXNldFBvaW50ZXIoKSB7XG4gICAgdGhpcy5wb3MgPSAwO1xuICB9XG5cbiAgcHVzaEJ5dGUoYnl0ZSkge1xuICAgIGlmICh0aGlzLnBvcyArIDEgPiB0aGlzLmJ1ZmZlci5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IG5ld0J1ZmZlciA9IG5ldyBVaW50OEFycmF5KHRoaXMuYnVmZmVyLmxlbmd0aCAqIDIpO1xuICAgICAgbmV3QnVmZmVyLnNldCh0aGlzLmJ1ZmZlcik7XG4gICAgICB0aGlzLmJ1ZmZlciA9IG5ld0J1ZmZlcjtcbiAgICB9XG4gICAgY29uc3QgcG9zID0gdGhpcy5wb3M7XG4gICAgdGhpcy5wb3MgKz0gMTtcbiAgICB0aGlzLmJ1ZmZlcltwb3NdID0gYnl0ZTtcbiAgfVxuXG4gIHB1c2hCeXRlcyhieXRlcykge1xuICAgIGlmICh0aGlzLnBvcyArIGJ5dGVzLmxlbmd0aCA+IHRoaXMuYnVmZmVyLmxlbmd0aCkge1xuICAgICAgY29uc3QgbmV3QnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoKHRoaXMucG9zICsgYnl0ZXMubGVuZ3RoKSAqIDIpO1xuICAgICAgbmV3QnVmZmVyLnNldCh0aGlzLmJ1ZmZlcik7XG4gICAgICB0aGlzLmJ1ZmZlciA9IG5ld0J1ZmZlcjtcbiAgICB9XG4gICAgdGhpcy5idWZmZXIuc2V0KGJ5dGVzLCB0aGlzLnBvcyk7XG4gICAgdGhpcy5wb3MgKz0gYnl0ZXMubGVuZ3RoO1xuICB9XG5cbiAgdG9CYXNlNjQoKSB7XG4gICAgcmV0dXJuIHRvQmFzZTY0KHRoaXMuYnVmZmVyLnN1YmFycmF5KDAsIHRoaXMucG9zKSk7XG4gIH1cblxuICBmcm9tQmFzZTY0KGRhdGEpIHtcbiAgICB0aGlzLnB1c2hCeXRlcyhmcm9tQmFzZTY0KGRhdGEpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBieXRlc1RvRW5jb2RlKGxlbikge1xuICBsZXQgc3VtID0gbGVuICsgMTtcbiAgaWYgKGxlbiA8ICgxIDw8IDcpKSB7XG4gICAgc3VtICs9IDE7XG4gIH0gZWxzZSBpZiAobGVuIDwgKDEgPDwgOCkpIHtcbiAgICBzdW0gKz0gMjtcbiAgfSBlbHNlIGlmIChsZW4gPCAoMSA8PCAxNikpIHtcbiAgICBzdW0gKz0gMztcbiAgfSBlbHNlIGlmIChsZW4gPCAoMSA8PCAyNCkpIHtcbiAgICBzdW0gKz0gNDtcbiAgfSBlbHNlIGlmIChsZW4gPCAoMSA8PCAzMikpIHtcbiAgICBzdW0gKz0gNTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHZhbHVlIHRvbyBiaWcgJHtsZW59YCk7XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn1cblxuZnVuY3Rpb24gcHVzaExlbmd0aChidWZmZXIsIGxlbikge1xuICBpZiAobGVuIDwgKDEgPDwgNykpIHtcbiAgICBidWZmZXIucHVzaEJ5dGUobGVuKTtcbiAgfSBlbHNlIGlmIChsZW4gPCAoMSA8PCA4KSkge1xuICAgIGJ1ZmZlci5wdXNoQnl0ZSgweDgxKTtcbiAgICBidWZmZXIucHVzaEJ5dGUobGVuKTtcbiAgfSBlbHNlIGlmIChsZW4gPCAoMSA8PCAxNikpIHtcbiAgICBidWZmZXIucHVzaEJ5dGUoMHg4Mik7XG4gICAgYnVmZmVyLnB1c2hCeXRlKGxlbiA+PiA4KTtcbiAgICBidWZmZXIucHVzaEJ5dGUobGVuICYgMHhGRik7XG4gIH0gZWxzZSBpZiAobGVuIDwgKDEgPDwgMjQpKSB7XG4gICAgYnVmZmVyLnB1c2hCeXRlKDB4ODMpO1xuICAgIGJ1ZmZlci5wdXNoQnl0ZShsZW4gPj4gMTYpO1xuICAgIGJ1ZmZlci5wdXNoQnl0ZSgobGVuID4+IDgpICYgMHhGRik7XG4gICAgYnVmZmVyLnB1c2hCeXRlKGxlbiAmIDB4RkYpO1xuICB9IGVsc2UgaWYgKGxlbiA8ICgxIDw8IDMyKSkge1xuICAgIGJ1ZmZlci5wdXNoQnl0ZSgweDg0KTtcbiAgICBidWZmZXIucHVzaEJ5dGUobGVuID4+IDI0KTtcbiAgICBidWZmZXIucHVzaEJ5dGUoKGxlbiA+PiAxNikgJiAweEZGKTtcbiAgICBidWZmZXIucHVzaEJ5dGUoKGxlbiA+PiA4KSAmIDB4RkYpO1xuICAgIGJ1ZmZlci5wdXNoQnl0ZShsZW4gJiAweEZGKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHZhbHVlIHRvbyBiaWcgJHtsZW59YCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZnJvbUJhc2U2NHVybChkYXRhKSB7XG4gIGRhdGEgPSBkYXRhLnJlcGxhY2UoLy0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJyk7XG4gIGNvbnN0IHBhZHMgPSAoNCAtIChkYXRhLmxlbmd0aCAlIDQpKSAlIDQ7XG4gIGlmIChwYWRzID09PSAzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBpbGxlZ2FsIGJhc2U2NCBzdHJpbmc6ICR7ZGF0YX1gKTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhZHM7IGkrKykge1xuICAgIGRhdGEgKz0gJz0nO1xuICB9XG4gIHJldHVybiBkYXRhO1xufVxuXG5cbmZ1bmN0aW9uIHRvQmFzZTY0dXJsKGRhdGEpIHtcbiAgZGF0YSA9IGRhdGEucmVwbGFjZSgvXFwrL2csICctJykucmVwbGFjZSgvXFwvL2csICdfJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgKytpKSB7XG4gICAgaWYgKGRhdGFbZGF0YS5sZW5ndGggLSAxXSA9PT0gJz0nKSB7XG4gICAgICBkYXRhID0gZGF0YS5zdWJzdHJpbmcoMCwgZGF0YS5sZW5ndGggLSAxKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIHBhZElmU2lnbmVkKGFycmF5KSB7XG4gIGlmIChhcnJheVswXSAmIDB4ODApIHtcbiAgICBjb25zdCBuZXdBcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5Lmxlbmd0aCArIDEpO1xuICAgIG5ld0FycmF5WzBdID0gMDtcbiAgICBuZXdBcnJheS5zZXQoYXJyYXksIDEpO1xuICAgIHJldHVybiBuZXdBcnJheTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG4vKiBSU0FQcml2YXRlS2V5IDo6PSBTRVFVRU5DRSB7XG4gIHZlcnNpb24gICAgICAgICAgIDAsXG4gIG1vZHVsdXMgICAgICAgICAgIElOVEVHRVIsICAtLSBuXG4gIHB1YmxpY0V4cG9uZW50ICAgIElOVEVHRVIsICAtLSBlXG4gIHByaXZhdGVFeHBvbmVudCAgIElOVEVHRVIsICAtLSBkXG4gIHByaW1lMSAgICAgICAgICAgIElOVEVHRVIsICAtLSBwXG4gIHByaW1lMiAgICAgICAgICAgIElOVEVHRVIsICAtLSBxXG4gIGV4cG9uZW50MSAgICAgICAgIElOVEVHRVIsICAtLSBkIG1vZCAocC0xKVxuICBleHBvbmVudDIgICAgICAgICBJTlRFR0VSLCAgLS0gZCBtb2QgKHEtMSlcbiAgY29lZmZpY2llbnQgICAgICAgSU5URUdFUiwgIC0tIChpbnZlcnNlIG9mIHEpIG1vZCBwXG59Ki9cblxuLyogUlNBUHVibGljS2V5IDo6PSBTRVFVRU5DRSB7XG4gICAgbW9kdWx1cyAgICAgICAgICAgSU5URUdFUiwgIC0tIG5cbiAgICBwdWJsaWNFeHBvbmVudCAgICBJTlRFR0VSICAgLS0gZVxufSovXG5mdW5jdGlvbiBleHBvcnRQcml2YXRlS2V5KGtleSkge1xuICBjb25zdCBvcmlnVmFsdWVzID0gWydBQT09Jywga2V5Lm4sIGtleS5lLCBrZXkuZCwga2V5LnAsIGtleS5xLCBrZXkuZHAsIGtleS5kcSwga2V5LnFpXTtcbiAgY29uc3QgdmFsdWVzID0gb3JpZ1ZhbHVlcy5tYXAoeCA9PiBwYWRJZlNpZ25lZChmcm9tQmFzZTY0KGZyb21CYXNlNjR1cmwoeCkpKSk7XG4gIGNvbnN0IGJ1ZmZlciA9IG5ldyBCeXRlQnVmZmVyKDIwMDApO1xuXG4gIGJ1ZmZlci5wdXNoQnl0ZSgweDMwKTsgLy8gU0VRVUVOQ0VcbiAgY29uc3QgbnVtQnl0ZXMgPSB2YWx1ZXMucmVkdWNlKChhLCB4KSA9PiBhICsgYnl0ZXNUb0VuY29kZSh4Lmxlbmd0aCksIDApO1xuICBwdXNoTGVuZ3RoKGJ1ZmZlciwgbnVtQnl0ZXMpO1xuXG4gIHZhbHVlcy5mb3JFYWNoKCh4KSA9PiB7XG4gICAgYnVmZmVyLnB1c2hCeXRlKDB4MDIpOyAvLyBJTlRFR0VSXG4gICAgcHVzaExlbmd0aChidWZmZXIsIHgubGVuZ3RoKTtcbiAgICBidWZmZXIucHVzaEJ5dGVzKHgpO1xuICB9KTtcbiAgcmV0dXJuIGJ1ZmZlci50b0Jhc2U2NCgpO1xufVxuLyogUlNBUHVibGljS2V5IDo6PSBTRVFVRU5DRSB7XG4gICAgbW9kdWx1cyAgICAgICAgICAgSU5URUdFUiwgIC0tIG5cbiAgICBwdWJsaWNFeHBvbmVudCAgICBJTlRFR0VSICAgLS0gZVxufSovXG5cblxuLy8gU0VRVUVOQ0UoMiBlbGVtKVxuICAgIC8vIFNFUVVFTkNFKDIgZWxlbSlcbiAgICAgICAgLy8gT0JKRUNUIElERU5USUZJRVIgMS4yLjg0MC4xMTM1NDkuMS4xLjFcbiAgICAgICAgLy8gTlVMTFxuICAgIC8vIEJJVCBTVFJJTkcoMSBlbGVtKVxuICAgICAgICAvLyBTRVFVRU5DRSgyIGVsZW0pXG4gICAgICAgICAgICAvLyBJTlRFR0VSKDIwNDggYml0KSBuXG4gICAgICAgICAgICAvLyBJTlRFR0VSIGVcbmZ1bmN0aW9uIGV4cG9ydFB1YmxpY0tleShrZXkpIHtcbiAgY29uc3Qgb3JpZ1ZhbHVlcyA9IFtrZXkubiwga2V5LmVdO1xuICBjb25zdCB2YWx1ZXMgPSBvcmlnVmFsdWVzLm1hcCh4ID0+IHBhZElmU2lnbmVkKGZyb21CYXNlNjQoZnJvbUJhc2U2NHVybCh4KSkpKTtcbiAgY29uc3QgbnVtQnl0ZXMgPSB2YWx1ZXMucmVkdWNlKChhLCB4KSA9PiBhICsgYnl0ZXNUb0VuY29kZSh4Lmxlbmd0aCksIDApO1xuXG4gIGNvbnN0IGJ1ZmZlciA9IG5ldyBCeXRlQnVmZmVyKDIwMDApO1xuXG4gIGJ1ZmZlci5wdXNoQnl0ZSgweDMwKTsgLy8gU0VRVUVOQ0VcbiAgcHVzaExlbmd0aChidWZmZXIsIGJ5dGVzVG9FbmNvZGUoYnl0ZXNUb0VuY29kZShudW1CeXRlcykgKyAxKSArIDE1KTtcblxuICBidWZmZXIucHVzaEJ5dGVzKG5ldyBVaW50OEFycmF5KFtcbiAgICAweDMwLCAweDBELCAweDA2LCAweDA5LCAweDJBLCAweDg2LCAweDQ4LCAweDg2LCAweEY3LCAweDBELCAweDAxLCAweDAxLCAweDAxLCAweDA1LCAweDAwLFxuICBdKSk7XG4gIGJ1ZmZlci5wdXNoQnl0ZSgweDAzKTsgLy8gQklUIFNUUklOR1xuICBwdXNoTGVuZ3RoKGJ1ZmZlciwgYnl0ZXNUb0VuY29kZShudW1CeXRlcykgKyAxKTtcbiAgYnVmZmVyLnB1c2hCeXRlKDB4MDApO1xuXG4gIGJ1ZmZlci5wdXNoQnl0ZSgweDMwKTsgLy8gU0VRVUVOQ0VcbiAgcHVzaExlbmd0aChidWZmZXIsIG51bUJ5dGVzKTtcblxuICB2YWx1ZXMuZm9yRWFjaCgoeCkgPT4ge1xuICAgIGJ1ZmZlci5wdXNoQnl0ZSgweDAyKTsgLy8gSU5URUdFUlxuICAgIHB1c2hMZW5ndGgoYnVmZmVyLCB4Lmxlbmd0aCk7XG4gICAgYnVmZmVyLnB1c2hCeXRlcyh4KTtcbiAgfSk7XG4gIHJldHVybiBidWZmZXIudG9CYXNlNjQoKTtcbn1cblxuZnVuY3Rpb24gZXhwb3J0UHVibGljS2V5U1BLSShrZXkpIHtcbiAgcmV0dXJuIGV4cG9ydFB1YmxpY0tleShrZXkpO1xufVxuXG5mdW5jdGlvbiBleHBvcnRQcml2YXRlS2V5UEtDUzgoa2V5KSB7XG4gIGNvbnN0IG9yaWdWYWx1ZXMgPSBbJ0FBPT0nLCBrZXkubiwga2V5LmUsIGtleS5kLCBrZXkucCwga2V5LnEsIGtleS5kcCwga2V5LmRxLCBrZXkucWldO1xuICBjb25zdCB2YWx1ZXMgPSBvcmlnVmFsdWVzLm1hcCh4ID0+IHBhZElmU2lnbmVkKGZyb21CYXNlNjQoZnJvbUJhc2U2NHVybCh4KSkpKTtcbiAgY29uc3QgbnVtQnl0ZXMgPSB2YWx1ZXMucmVkdWNlKChhLCB4KSA9PiBhICsgYnl0ZXNUb0VuY29kZSh4Lmxlbmd0aCksIDApO1xuXG4gIGNvbnN0IGJ1ZmZlciA9IG5ldyBCeXRlQnVmZmVyKDIwMDApO1xuXG4gIGJ1ZmZlci5wdXNoQnl0ZSgweDMwKTsgLy8gU0VRVUVOQ0VcbiAgcHVzaExlbmd0aChidWZmZXIsIDMgKyAxNSArIGJ5dGVzVG9FbmNvZGUoYnl0ZXNUb0VuY29kZShudW1CeXRlcykpKTtcbiAgYnVmZmVyLnB1c2hCeXRlcyhuZXcgVWludDhBcnJheShbMHgwMiwgMHgwMSwgMHgwMF0pKTtcbiAgYnVmZmVyLnB1c2hCeXRlcyhuZXcgVWludDhBcnJheShbXG4gICAgMHgzMCwgMHgwRCwgMHgwNiwgMHgwOSwgMHgyQSwgMHg4NiwgMHg0OCwgMHg4NiwgMHhGNywgMHgwRCwgMHgwMSwgMHgwMSwgMHgwMSwgMHgwNSwgMHgwMCxcbiAgXSkpO1xuICBidWZmZXIucHVzaEJ5dGUoMHgwNCk7IC8vIE9DVEVUIFNUUklOR1xuICBwdXNoTGVuZ3RoKGJ1ZmZlciwgYnl0ZXNUb0VuY29kZShudW1CeXRlcykpO1xuXG4gIGJ1ZmZlci5wdXNoQnl0ZSgweDMwKTsgLy8gU0VRVUVOQ0VcbiAgcHVzaExlbmd0aChidWZmZXIsIG51bUJ5dGVzKTtcblxuICB2YWx1ZXMuZm9yRWFjaCgoeCkgPT4ge1xuICAgIGJ1ZmZlci5wdXNoQnl0ZSgweDAyKTsgLy8gSU5URUdFUlxuICAgIHB1c2hMZW5ndGgoYnVmZmVyLCB4Lmxlbmd0aCk7XG4gICAgYnVmZmVyLnB1c2hCeXRlcyh4KTtcbiAgfSk7XG4gIHJldHVybiBidWZmZXIudG9CYXNlNjQoKTtcbn1cblxuZnVuY3Rpb24gcmVhZExlbmd0aChidWZmZXIpIHtcbiAgY29uc3QgZmlyc3QgPSBidWZmZXIucmVhZEJ5dGUoKTtcbiAgaWYgKGZpcnN0ICYgMHg4MCkge1xuICAgIGxldCBudW1CeXRlcyA9IGZpcnN0ICYgMHg3RjtcbiAgICBsZXQgcmVzID0gMDtcbiAgICB3aGlsZSAobnVtQnl0ZXMtLSkge1xuICAgICAgcmVzID0gKHJlcyA8PCA4KSB8IGJ1ZmZlci5yZWFkQnl0ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9XG4gIHJldHVybiBmaXJzdDtcbn1cblxuZnVuY3Rpb24gcmVhZEludGVnZXIoYnVmZmVyKSB7XG4gIGNvbnN0IHRhZyA9IGJ1ZmZlci5yZWFkQnl0ZSgpO1xuICBpZiAodGFnICE9PSAweDAyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIHRhZyBmb3IgaW50ZWdlciB2YWx1ZScpO1xuICB9XG4gIGNvbnN0IGxlbiA9IHJlYWRMZW5ndGgoYnVmZmVyKTtcbiAgbGV0IHZhbCA9IGJ1ZmZlci5yZWFkQnl0ZXMobGVuKTtcbiAgaWYgKHZhbFswXSA9PT0gMCkgeyAvLyBSZW1vdmUgcGFkZGluZz9cbiAgICB2YWwgPSB2YWwuc3ViYXJyYXkoMSk7XG4gIH1cbiAgcmV0dXJuIHZhbDtcbn1cblxuZnVuY3Rpb24gX19pbXBvcnRLZXkoYnVmZmVyLCB2YWx1ZXMpIHtcbiAgY29uc3Qga2V5ID0ge307XG4gIGlmIChidWZmZXIucmVhZEJ5dGUoKSA9PT0gMHgzMCkge1xuICAgIHJlYWRMZW5ndGgoYnVmZmVyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7ICsraSkge1xuICAgICAgbGV0IHZhbCA9IHJlYWRJbnRlZ2VyKGJ1ZmZlcik7XG4gICAgICB2YWwgPSB0b0Jhc2U2NHVybCh0b0Jhc2U2NCh2YWwpKTtcbiAgICAgIGtleVt2YWx1ZXNbaV1dID0gdmFsO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpcnN0IHZhbHVlIG5vdCBjb3JyZWN0Jyk7XG4gIH1cbiAgaWYgKGJ1ZmZlci5wb3MgIT09IGJ1ZmZlci5idWZmZXIubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdub3QgYWxsIGlucHV0IGRhdGEgY29uc3VtZWQnKTtcbiAgfVxuICBrZXkuYWxnID0gJ1JTMjU2JztcbiAga2V5LmV4dCA9IHRydWU7XG4gIGtleS5rdHkgPSAnUlNBJztcbiAgcmV0dXJuIGtleTtcbn1cblxuZnVuY3Rpb24gX2ltcG9ydEtleShkYXRhLCB2YWx1ZXMpIHtcbiAgY29uc3QgYnVmZmVyID0gbmV3IEJ5dGVCdWZmZXIoMCk7XG4gIGJ1ZmZlci5zZXREYXRhKGZyb21CYXNlNjQoZGF0YSkpO1xuICByZXR1cm4gX19pbXBvcnRLZXkoYnVmZmVyLCB2YWx1ZXMpO1xufVxuXG5mdW5jdGlvbiBpbXBvcnRQdWJsaWNLZXkoZGF0YSkge1xuICBjb25zdCBidWZmZXIgPSBuZXcgQnl0ZUJ1ZmZlcigwKTtcbiAgYnVmZmVyLnNldERhdGEoZnJvbUJhc2U2NChkYXRhKSk7XG4gIGlmIChidWZmZXIucmVhZEJ5dGUoKSA9PT0gMHgzMCkge1xuICAgIHJlYWRMZW5ndGgoYnVmZmVyKTtcbiAgICBidWZmZXIucmVhZEJ5dGVzKDE1KTtcbiAgICBpZiAoYnVmZmVyLnJlYWRCeXRlKCkgIT09IDB4MDMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZm9ybWF0IG5vdCBjb3JyZWN0Jyk7XG4gICAgfVxuICAgIHJlYWRMZW5ndGgoYnVmZmVyKTtcbiAgICBpZiAoYnVmZmVyLnJlYWRCeXRlKCkgIT09IDB4MDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZm9ybWF0IG5vdCBjb3JyZWN0Jyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignZm9ybWF0IG5vdCBjb3JyZWN0Jyk7XG4gIH1cbiAgcmV0dXJuIF9faW1wb3J0S2V5KGJ1ZmZlciwgWyduJywgJ2UnXSk7XG59XG5cbmZ1bmN0aW9uIGltcG9ydFByaXZhdGVLZXkoZGF0YSkge1xuICBjb25zdCByZXMgPSBfaW1wb3J0S2V5KGRhdGEsIFsndmVyc2lvbicsICduJywgJ2UnLCAnZCcsICdwJywgJ3EnLCAnZHAnLCAnZHEnLCAncWknXSk7XG4gIGRlbGV0ZSByZXMudmVyc2lvbjtcbiAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gcHJpdmF0ZUtleXRvS2V5cGFpcihwcml2YXRlS2V5KSB7XG4gIGNvbnN0IGtleSA9IGltcG9ydFByaXZhdGVLZXkocHJpdmF0ZUtleSk7XG4gIHJldHVybiBbZXhwb3J0UHVibGljS2V5U1BLSShrZXkpLCBleHBvcnRQcml2YXRlS2V5UEtDUzgoa2V5KV07XG59XG5cbmV4cG9ydCB7IGV4cG9ydFByaXZhdGVLZXlQS0NTOCwgZXhwb3J0UHJpdmF0ZUtleSwgZXhwb3J0UHVibGljS2V5LCBleHBvcnRQdWJsaWNLZXlTUEtJLFxuICBpbXBvcnRQdWJsaWNLZXksIGltcG9ydFByaXZhdGVLZXksIHByaXZhdGVLZXl0b0tleXBhaXIgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh1cmwpIHtcblxuXHR2YXIgY29yZSA9IHtcblxuICAgIC8vIE1ldGhvZCB0aGF0IHBlcmZvcm1zIHJlcXVlc3RcbiAgICByZXEgOiBmdW5jdGlvbiAobWV0aG9kLCB1cmwsIGRhdGEsIHR5cGUpIHtcblx0ICAgICAgLy8gQ3JlYXRpbmcgYSBwcm9taXNlXG5cdCAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoIGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblxuICAgICAgICAvLyBJbnN0YW50aWF0ZXMgdGhlIFhNTEh0dHBSZXF1ZXN0XG4gICAgICAgIHZhciBjbGllbnQgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgdmFyIHVyaSA9IHVybDtcbiAgICAgICAgdmFyIHRzID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgY2xpZW50Lm9wZW4obWV0aG9kLCB1cmksIHRydWUpO1xuICAgICAgICBjbGllbnQuc2V0UmVxdWVzdEhlYWRlcihcIngtdHlwZVwiLCB0eXBlID8gdHlwZSA6IFwiZGVsYXllZFwiKTtcbiAgICAgICAgY2xpZW50Lm92ZXJyaWRlTWltZVR5cGUoJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgLy9jbGllbnQuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOFwiKTtcblxuICAgICAgICBjbGllbnQub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBcdHZhciBzdGF0dXNDbGFzcyA9IHBhcnNlSW50KGNsaWVudC5zdGF0dXMgLyAxMDApO1xuICAgICAgICAgIGlmKHN0YXR1c0NsYXNzID09IDIgfHwgc3RhdHVzQ2xhc3MgPT0gMyB8fCBzdGF0dXNDbGFzcyA9PSAwIC8qIGxvY2FsIGZpbGVzICovKXtcbiAgICAgICAgICAgIC8vIFBlcmZvcm1zIHRoZSBmdW5jdGlvbiBcInJlc29sdmVcIiB3aGVuIHRoaXMuc3RhdHVzIGlzIGVxdWFsIHRvIDJ4eFxuICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnJlc3BvbnNlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gUGVyZm9ybXMgdGhlIGZ1bmN0aW9uIFwicmVqZWN0XCIgd2hlbiB0aGlzLnN0YXR1cyBpcyBkaWZmZXJlbnQgdGhhbiAyeHhcblxuICAgICAgICAgICAgcmVqZWN0KHRoaXMuc3RhdHVzVGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjbGllbnQub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXHRyZWplY3QodGhpcy5zdGF0dXNUZXh0KTtcbiAgICAgICAgfTtcbiAgICAgICAgY2xpZW50Lm9udGltZW91dCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIFx0cmVqZWN0KHRoaXMuc3RhdHVzVGV4dCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY2xpZW50LnNlbmQoZGF0YSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gUmV0dXJuIHRoZSBwcm9taXNlXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gIH07XG5cblxuICByZXR1cm4ge1xuICBcdCdnZXQnIDogZnVuY3Rpb24oYXJncykge1xuICBcdFx0cmV0dXJuIGNvcmUucmVxKCdHRVQnLCB1cmwsIGFyZ3MpO1xuICBcdH0sXG4gIFx0J3Bvc3QnIDogZnVuY3Rpb24oYXJncywgdHlwZSkge1xuICBcdFx0cmV0dXJuIGNvcmUucmVxKCdQT1NUJywgdXJsLCBhcmdzLCB0eXBlKTtcbiAgXHR9XG4gIH07XG59XG4iLCJpbXBvcnQgQ2xpcXpTZWN1cmVNZXNzYWdlIGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHtcbiAgcHJpdmF0ZUtleXRvS2V5cGFpcixcbiAgZXhwb3J0UHJpdmF0ZUtleSxcbiAgZXhwb3J0UHVibGljS2V5XG59IGZyb20gJy4uLy4uL2NvcmUvY3J5cHRvL3BrY3MtY29udmVyc2lvbic7XG5cbmltcG9ydCB7XG4gIHRvVVRGOCxcbiAgdG9IZXgsXG4gIGZyb21IZXgsXG4gIGZyb21CYXNlNjRcbn0gZnJvbSAnLi4vLi4vY29yZS9lbmNvZGluZyc7XG5cbmltcG9ydCBfaHR0cCBmcm9tICcuL2h0dHAtd29ya2VyJztcblxuaW1wb3J0IGNyeXB0byBmcm9tICcuLi8uLi9wbGF0Zm9ybS9jcnlwdG8nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKG1zZykge1xuICAgIHRoaXMucHJpdmF0ZUtleSA9IFwiXCI7XG4gICAgdGhpcy5wdWJsaWNLZXkgPSBcIlwiO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBzaWduIHRoZSBzdHIgdXNpbmcgdXNlclNLLlxuICAgKiBAcmV0dXJucyBzaWduYXR1cmUgaW4gaGV4IGZvcm1hdC5cbiAgICovXG4gIHNpZ24obXNnKXtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICB2YXIgcHBrID0gcHJpdmF0ZUtleXRvS2V5cGFpcihDbGlxelNlY3VyZU1lc3NhZ2UudVBLLnByaXZhdGVLZXkpO1xuICAgICAgY3J5cHRvLnN1YnRsZS5pbXBvcnRLZXkoXG4gICAgICAgIFwicGtjczhcIixcbiAgICAgICAgZnJvbUJhc2U2NChwcGtbMV0pLFxuICAgICAgICB7bmFtZTogXCJSU0FTU0EtUEtDUzEtdjFfNVwiLCBoYXNoOiBcIlNIQS0yNTZcIn0sXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBbXCJzaWduXCJdXG4gICAgICApXG4gICAgICAudGhlbihmdW5jdGlvbihwcml2YXRlS2V5KSB7XG4gICAgICAgIHZhciBkb2N1bWVudEJ5dGVzID0gdG9VVEY4KG1zZyk7XG4gICAgICAgIGNyeXB0by5zdWJ0bGUuc2lnbihcbiAgICAgICAgICB7bmFtZTogXCJSU0FTU0EtUEtDUzEtdjFfNVwiLCBoYXNoOiBcIlNIQS0yNTZcIn0sXG4gICAgICAgICAgcHJpdmF0ZUtleSxcbiAgICAgICAgICBkb2N1bWVudEJ5dGVzXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oc2lnbmF0dXJlQnVmZmVyKSB7XG4gICAgICAgICAgdmFyIHNpZ25hdHVyZUJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoc2lnbmF0dXJlQnVmZmVyKTtcbiAgICAgICAgICB2YXIgc2lnbmF0dXJlSGV4ID0gdG9IZXgoc2lnbmF0dXJlQnl0ZXMpO1xuICAgICAgICAgIHJlc29sdmUoc2lnbmF0dXJlSGV4KTtcbiAgICAgICAgfSkuY2F0Y2goIGVyciA9PiByZWplY3QoZXJyKSk7XG4gICAgICB9KS5jYXRjaChlcnIgPT4gcmVqZWN0KGVycikpO1xuICAgIH0pO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgdmVyaWZ5KHNpZywgbXNnKXtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICB2YXIgcHBrID0gcHJpdmF0ZUtleXRvS2V5cGFpcihDbGlxelNlY3VyZU1lc3NhZ2UudVBLLnByaXZhdGVLZXkpO1xuICAgICAgY3J5cHRvLnN1YnRsZS5pbXBvcnRLZXkoXG4gICAgICAgIFwic3BraVwiLFxuICAgICAgICBmcm9tQmFzZTY0KHBwa1swXSksXG4gICAgICAgIHtuYW1lOiBcIlJTQVNTQS1QS0NTMS12MV81XCIsIGhhc2g6IFwiU0hBLTI1NlwifSxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIFtcInZlcmlmeVwiXVxuICAgICAgKVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocHVibGljS2V5KSB7XG4gICAgICAgIHZhciBzaWduYXR1cmVCeXRlcyA9IGZyb21IZXgoc2lnKTtcbiAgICAgICAgdmFyIGRvY3VtZW50Qnl0ZXMgPSB0b1VURjgobXNnKTtcbiAgICAgICAgY3J5cHRvLnN1YnRsZS52ZXJpZnkoXG4gICAgICAgICAge25hbWU6IFwiUlNBU1NBLVBLQ1MxLXYxXzVcIiwgaGFzaDogXCJTSEEtMjU2XCJ9LFxuICAgICAgICAgIHB1YmxpY0tleSxcbiAgICAgICAgICBzaWduYXR1cmVCeXRlcyxcbiAgICAgICAgICBkb2N1bWVudEJ5dGVzXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24odmFsaWRTaWduYXR1cmUpIHtcbiAgICAgICAgICByZXNvbHZlKHZhbGlkU2lnbmF0dXJlKTtcbiAgICAgICAgfSkuY2F0Y2goIGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgZ2VuZXJhdGVLZXkoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICBjcnlwdG8uc3VidGxlLmdlbmVyYXRlS2V5KFxuICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJSU0FTU0EtUEtDUzEtdjFfNVwiLFxuICAgICAgICAgICAgbW9kdWx1c0xlbmd0aDogMjA0OCxcbiAgICAgICAgICAgIHB1YmxpY0V4cG9uZW50OiBuZXcgVWludDhBcnJheShbMHgwMSwgMHgwMCwgMHgwMV0pLFxuICAgICAgICAgICAgaGFzaDoge25hbWU6IFwiU0hBLTI1NlwifSxcbiAgICAgICAgIH0sXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgIFtcInNpZ25cIiwgXCJ2ZXJpZnlcIl1cbiAgICAgICkudGhlbigga2V5ID0+IHtcbiAgICAgICAgcmV0dXJuIGNyeXB0by5zdWJ0bGUuZXhwb3J0S2V5KFwiandrXCIsIGtleS5wcml2YXRlS2V5KVxuICAgICAgfSkudGhlbigga2V5ID0+IHtcbiAgICAgICAgIHZhciByZXR1cm5fZGF0YSA9IHt9XG4gICAgICAgICByZXR1cm5fZGF0YVtcInByaXZLZXlCNjRcIl0gPSBleHBvcnRQcml2YXRlS2V5KGtleSk7XG4gICAgICAgICByZXR1cm5fZGF0YVtcInB1YmxpY0tleUI2NFwiXSA9IGV4cG9ydFB1YmxpY0tleShrZXkpO1xuICAgICAgICAgX3RoaXMucHJpdmF0ZUtleSA9IHJldHVybl9kYXRhW1wicHJpdktleUI2NFwiXTtcbiAgICAgICAgIF90aGlzLnB1YmxpY0tleSA9IHJldHVybl9kYXRhW1wicHVibGljS2V5QjY0XCJdO1xuICAgICAgICAgcmV0dXJuIHJldHVybl9kYXRhO1xuICAgICAgfSkudGhlbigga2V5cyA9PiB7XG4gICAgICAgICByZXR1cm4gX2h0dHAoQ2xpcXpTZWN1cmVNZXNzYWdlLlVTRVJfUkVHKS5wb3N0KEpTT04uc3RyaW5naWZ5KHtcInBrXCI6a2V5c1tcInB1YmxpY0tleUI2NFwiXX0pKTtcbiAgICAgIH0pLnRoZW4oIGUgPT4gcmVzb2x2ZSh7XCJzdGF0dXNcIjp0cnVlLFwicHJpdmF0ZUtleVwiOl90aGlzLnByaXZhdGVLZXksXCJwdWJsaWNLZXlcIjpfdGhpcy5wdWJsaWNLZXl9KSlcbiAgICAgIC5jYXRjaCggZSA9PiByZWplY3Qoe1wic3RhdHVzXCI6IGUubWVzc2FnZX0pKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxufTtcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEJpZyBJbnRlZ2VyIExpYnJhcnkgdi4gNS41XG4vLyBDcmVhdGVkIDIwMDAsIGxhc3QgbW9kaWZpZWQgMjAxM1xuLy8gTGVlbW9uIEJhaXJkXG4vLyB3d3cubGVlbW9uLmNvbVxuLy9cbi8vIFZlcnNpb24gaGlzdG9yeTpcbi8vIHYgNS41ICAxNyBNYXIgMjAxM1xuLy8gICAtIHR3byBsaW5lcyBvZiBhIGZvcm0gbGlrZSBcImlmICh4PDApIHgrPW5cIiBoYWQgdGhlIFwiaWZcIiBjaGFuZ2VkIHRvIFwid2hpbGVcIiB0b1xuLy8gICAgIGhhbmRsZSB0aGUgY2FzZSB3aGVuIHg8LW4uIChUaGFua3MgdG8gSmFtZXMgQW5zZWxsIGZvciBmaW5kaW5nIHRoYXQgYnVnKVxuLy8gdiA1LjQgIDMgT2N0IDIwMDlcbi8vICAgLSBhZGRlZCBcInZhciBpXCIgdG8gZ3JlYXRlclNoaWZ0KCkgc28gaSBpcyBub3QgZ2xvYmFsLiAoVGhhbmtzIHRvIFDFvXRlciBTemFi4oCUIGZvciBmaW5kaW5nIHRoYXQgYnVnKVxuLy9cbi8vIHYgNS4zICAyMSBTZXAgMjAwOVxuLy8gICAtIGFkZGVkIHJhbmRQcm9iUHJpbWUoaykgZm9yIHByb2JhYmxlIHByaW1lc1xuLy8gICAtIHVucm9sbGVkIGxvb3AgaW4gbW9udF8gKHNsaWdodGx5IGZhc3Rlcilcbi8vICAgLSBtaWxsZXJSYWJpbiBub3cgdGFrZXMgYSBiaWdJbnQgcGFyYW1ldGVyIHJhdGhlciB0aGFuIGFuIGludFxuLy9cbi8vIHYgNS4yICAxNSBTZXAgMjAwOVxuLy8gICAtIGZpeGVkIGNhcGl0YWxpemF0aW9uIGluIGNhbGwgdG8gaW50MmJpZ0ludCBpbiByYW5kQmlnSW50XG4vLyAgICAgKHRoYW5rcyB0byBFbWlsaSBFdnJpcGlkb3UsIFJlaW5ob2xkIEJlaHJpbmdlciwgYW5kIFNhbXVlbCBNYWNhbGVlc2UgZm9yIGZpbmRpbmcgdGhhdCBidWcpXG4vL1xuLy8gdiA1LjEgIDggT2N0IDIwMDdcbi8vICAgLSByZW5hbWVkIGludmVyc2VNb2RJbnRfIHRvIGludmVyc2VNb2RJbnQgc2luY2UgaXQgZG9lc24ndCBjaGFuZ2UgaXRzIHBhcmFtZXRlcnNcbi8vICAgLSBhZGRlZCBmdW5jdGlvbnMgR0NEIGFuZCByYW5kQmlnSW50LCB3aGljaCBjYWxsIEdDRF8gYW5kIHJhbmRCaWdJbnRfXG4vLyAgIC0gZml4ZWQgYSBidWcgZm91bmQgYnkgUm9iIFZpc3NlciAoc2VlIGNvbW1lbnQgd2l0aCBoaXMgbmFtZSBiZWxvdylcbi8vICAgLSBpbXByb3ZlZCBjb21tZW50c1xuLy9cbi8vIFRoaXMgZmlsZSBpcyBwdWJsaWMgZG9tYWluLiAgIFlvdSBjYW4gdXNlIGl0IGZvciBhbnkgcHVycG9zZSB3aXRob3V0IHJlc3RyaWN0aW9uLlxuLy8gSSBkbyBub3QgZ3VhcmFudGVlIHRoYXQgaXQgaXMgY29ycmVjdCwgc28gdXNlIGl0IGF0IHlvdXIgb3duIHJpc2suICBJZiB5b3UgdXNlXG4vLyBpdCBmb3Igc29tZXRoaW5nIGludGVyZXN0aW5nLCBJJ2QgYXBwcmVjaWF0ZSBoZWFyaW5nIGFib3V0IGl0LiAgSWYgeW91IGZpbmRcbi8vIGFueSBidWdzIG9yIG1ha2UgYW55IGltcHJvdmVtZW50cywgSSdkIGFwcHJlY2lhdGUgaGVhcmluZyBhYm91dCB0aG9zZSB0b28uXG4vLyBJdCB3b3VsZCBhbHNvIGJlIG5pY2UgaWYgbXkgbmFtZSBhbmQgVVJMIHdlcmUgbGVmdCBpbiB0aGUgY29tbWVudHMuICBCdXQgbm9uZVxuLy8gb2YgdGhhdCBpcyByZXF1aXJlZC5cbi8vXG4vLyBUaGlzIGNvZGUgZGVmaW5lcyBhIGJpZ0ludCBsaWJyYXJ5IGZvciBhcmJpdHJhcnktcHJlY2lzaW9uIGludGVnZXJzLlxuLy8gQSBiaWdJbnQgaXMgYW4gYXJyYXkgb2YgaW50ZWdlcnMgc3RvcmluZyB0aGUgdmFsdWUgaW4gY2h1bmtzIG9mIGJwZSBiaXRzLFxuLy8gbGl0dGxlIGVuZGlhbiAoYnVmZlswXSBpcyB0aGUgbGVhc3Qgc2lnbmlmaWNhbnQgd29yZCkuXG4vLyBOZWdhdGl2ZSBiaWdJbnRzIGFyZSBzdG9yZWQgdHdvJ3MgY29tcGxlbWVudC4gIEFsbW9zdCBhbGwgdGhlIGZ1bmN0aW9ucyB0cmVhdFxuLy8gYmlnSW50cyBhcyBub25uZWdhdGl2ZS4gIFRoZSBmZXcgdGhhdCB2aWV3IHRoZW0gYXMgdHdvJ3MgY29tcGxlbWVudCBzYXkgc29cbi8vIGluIHRoZWlyIGNvbW1lbnRzLiAgU29tZSBmdW5jdGlvbnMgYXNzdW1lIHRoZWlyIHBhcmFtZXRlcnMgaGF2ZSBhdCBsZWFzdCBvbmVcbi8vIGxlYWRpbmcgemVybyBlbGVtZW50LiBGdW5jdGlvbnMgd2l0aCBhbiB1bmRlcnNjb3JlIGF0IHRoZSBlbmQgb2YgdGhlIG5hbWUgcHV0XG4vLyB0aGVpciBhbnN3ZXIgaW50byBvbmUgb2YgdGhlIGFycmF5cyBwYXNzZWQgaW4sIGFuZCBoYXZlIHVucHJlZGljdGFibGUgYmVoYXZpb3Jcbi8vIGluIGNhc2Ugb2Ygb3ZlcmZsb3csIHNvIHRoZSBjYWxsZXIgbXVzdCBtYWtlIHN1cmUgdGhlIGFycmF5cyBhcmUgYmlnIGVub3VnaCB0b1xuLy8gaG9sZCB0aGUgYW5zd2VyLiAgQnV0IHRoZSBhdmVyYWdlIHVzZXIgc2hvdWxkIG5ldmVyIGhhdmUgdG8gY2FsbCBhbnkgb2YgdGhlXG4vLyB1bmRlcnNjb3JlZCBmdW5jdGlvbnMuICBFYWNoIGltcG9ydGFudCB1bmRlcnNjb3JlZCBmdW5jdGlvbiBoYXMgYSB3cmFwcGVyIGZ1bmN0aW9uXG4vLyBvZiB0aGUgc2FtZSBuYW1lIHdpdGhvdXQgdGhlIHVuZGVyc2NvcmUgdGhhdCB0YWtlcyBjYXJlIG9mIHRoZSBkZXRhaWxzIGZvciB5b3UuXG4vLyBGb3IgZWFjaCB1bmRlcnNjb3JlZCBmdW5jdGlvbiB3aGVyZSBhIHBhcmFtZXRlciBpcyBtb2RpZmllZCwgdGhhdCBzYW1lIHZhcmlhYmxlXG4vLyBtdXN0IG5vdCBiZSB1c2VkIGFzIGFub3RoZXIgYXJndW1lbnQgdG9vLiAgU28sIHlvdSBjYW5ub3Qgc3F1YXJlIHggYnkgZG9pbmdcbi8vIG11bHRNb2RfKHgseCxuKS4gIFlvdSBtdXN0IHVzZSBzcXVhcmVNb2RfKHgsbikgaW5zdGVhZCwgb3IgZG8geT1kdXAoeCk7IG11bHRNb2RfKHgseSxuKS5cbi8vIE9yIHNpbXBseSB1c2UgdGhlIG11bHRNb2QoeCx4LG4pIGZ1bmN0aW9uIHdpdGhvdXQgdGhlIHVuZGVyc2NvcmUsIHdoZXJlXG4vLyBzdWNoIGlzc3VlcyBuZXZlciBhcmlzZSwgYmVjYXVzZSBub24tdW5kZXJzY29yZWQgZnVuY3Rpb25zIG5ldmVyIGNoYW5nZVxuLy8gdGhlaXIgcGFyYW1ldGVyczsgdGhleSBhbHdheXMgYWxsb2NhdGUgbmV3IG1lbW9yeSBmb3IgdGhlIGFuc3dlciB0aGF0IGlzIHJldHVybmVkLlxuLy9cbi8vIFRoZXNlIGZ1bmN0aW9ucyBhcmUgZGVzaWduZWQgdG8gYXZvaWQgZnJlcXVlbnQgZHluYW1pYyBtZW1vcnkgYWxsb2NhdGlvbiBpbiB0aGUgaW5uZXIgbG9vcC5cbi8vIEZvciBtb3N0IGZ1bmN0aW9ucywgaWYgaXQgbmVlZHMgYSBCaWdJbnQgYXMgYSBsb2NhbCB2YXJpYWJsZSBpdCB3aWxsIGFjdHVhbGx5IHVzZVxuLy8gYSBnbG9iYWwsIGFuZCB3aWxsIG9ubHkgYWxsb2NhdGUgdG8gaXQgb25seSB3aGVuIGl0J3Mgbm90IHRoZSByaWdodCBzaXplLiAgVGhpcyBlbnN1cmVzXG4vLyB0aGF0IHdoZW4gYSBmdW5jdGlvbiBpcyBjYWxsZWQgcmVwZWF0ZWRseSB3aXRoIHNhbWUtc2l6ZWQgcGFyYW1ldGVycywgaXQgb25seSBhbGxvY2F0ZXNcbi8vIG1lbW9yeSBvbiB0aGUgZmlyc3QgY2FsbC5cbi8vXG4vLyBOb3RlIHRoYXQgZm9yIGNyeXB0b2dyYXBoaWMgcHVycG9zZXMsIHRoZSBjYWxscyB0byBNYXRoLnJhbmRvbSgpIG11c3Rcbi8vIGJlIHJlcGxhY2VkIHdpdGggY2FsbHMgdG8gYSBiZXR0ZXIgcHNldWRvcmFuZG9tIG51bWJlciBnZW5lcmF0b3IuXG4vL1xuLy8gSW4gdGhlIGZvbGxvd2luZywgXCJiaWdJbnRcIiBtZWFucyBhIGJpZ0ludCB3aXRoIGF0IGxlYXN0IG9uZSBsZWFkaW5nIHplcm8gZWxlbWVudCxcbi8vIGFuZCBcImludGVnZXJcIiBtZWFucyBhIG5vbm5lZ2F0aXZlIGludGVnZXIgbGVzcyB0aGFuIHJhZGl4LiAgSW4gc29tZSBjYXNlcywgaW50ZWdlclxuLy8gY2FuIGJlIG5lZ2F0aXZlLiAgTmVnYXRpdmUgYmlnSW50cyBhcmUgMnMgY29tcGxlbWVudC5cbi8vXG4vLyBUaGUgZm9sbG93aW5nIGZ1bmN0aW9ucyBkbyBub3QgbW9kaWZ5IHRoZWlyIGlucHV0cy5cbi8vIFRob3NlIHJldHVybmluZyBhIGJpZ0ludCwgc3RyaW5nLCBvciBBcnJheSB3aWxsIGR5bmFtaWNhbGx5IGFsbG9jYXRlIG1lbW9yeSBmb3IgdGhhdCB2YWx1ZS5cbi8vIFRob3NlIHJldHVybmluZyBhIGJvb2xlYW4gd2lsbCByZXR1cm4gdGhlIGludGVnZXIgMCAoZmFsc2UpIG9yIDEgKHRydWUpLlxuLy8gVGhvc2UgcmV0dXJuaW5nIGJvb2xlYW4gb3IgaW50IHdpbGwgbm90IGFsbG9jYXRlIG1lbW9yeSBleGNlcHQgcG9zc2libHkgb24gdGhlIGZpcnN0XG4vLyB0aW1lIHRoZXkncmUgY2FsbGVkIHdpdGggYSBnaXZlbiBwYXJhbWV0ZXIgc2l6ZS5cbi8vXG4vLyBiaWdJbnQgIGFkZCh4LHkpICAgICAgICAgICAgICAgLy9yZXR1cm4gKHgreSkgZm9yIGJpZ0ludHN0ciB4IGFuZCB5LlxuLy8gYmlnSW50ICBhZGRJbnQoeCxuKSAgICAgICAgICAgIC8vcmV0dXJuICh4K24pIHdoZXJlIHggaXMgYSBiaWdJbnQgYW5kIG4gaXMgYW4gaW50ZWdlci5cbi8vIHN0cmluZyAgYmlnSW50MnN0cih4LGJhc2UpICAgICAvL3JldHVybiBhIHN0cmluZyBmb3JtIG9mIGJpZ0ludCB4IGluIGEgZ2l2ZW4gYmFzZSwgd2l0aCAyIDw9IGJhc2UgPD0gOTVcbi8vIGludCAgICAgYml0U2l6ZSh4KSAgICAgICAgICAgICAvL3JldHVybiBob3cgbWFueSBiaXRzIGxvbmcgdGhlIGJpZ0ludCB4IGlzLCBub3QgY291bnRpbmcgbGVhZGluZyB6ZXJvc1xuLy8gYmlnSW50ICBkdXAoeCkgICAgICAgICAgICAgICAgIC8vcmV0dXJuIGEgY29weSBvZiBiaWdJbnQgeFxuLy8gYm9vbGVhbiBlcXVhbHMoeCx5KSAgICAgICAgICAgIC8vaXMgdGhlIGJpZ0ludCB4IGVxdWFsIHRvIHRoZSBiaWdpbnQgeT9cbi8vIGJvb2xlYW4gZXF1YWxzSW50KHgseSkgICAgICAgICAvL2lzIGJpZ2ludCB4IGVxdWFsIHRvIGludGVnZXIgeT9cbi8vIGJpZ0ludCAgZXhwYW5kKHgsbikgICAgICAgICAgICAvL3JldHVybiBhIGNvcHkgb2YgeCB3aXRoIGF0IGxlYXN0IG4gZWxlbWVudHMsIGFkZGluZyBsZWFkaW5nIHplcm9zIGlmIG5lZWRlZFxuLy8gQXJyYXkgICBmaW5kUHJpbWVzKG4pICAgICAgICAgIC8vcmV0dXJuIGFycmF5IG9mIGFsbCBwcmltZXMgbGVzcyB0aGFuIGludGVnZXIgblxuLy8gYmlnSW50ICBHQ0QoeCx5KSAgICAgICAgICAgICAgIC8vcmV0dXJuIGdyZWF0ZXN0IGNvbW1vbiBkaXZpc29yIG9mIGJpZ0ludHMgeCBhbmQgeSAoZWFjaCB3aXRoIHNhbWUgbnVtYmVyIG9mIGVsZW1lbnRzKS5cbi8vIGJvb2xlYW4gZ3JlYXRlcih4LHkpICAgICAgICAgICAvL2lzIHg+eT8gICh4IGFuZCB5IGFyZSBub25uZWdhdGl2ZSBiaWdJbnRzKVxuLy8gYm9vbGVhbiBncmVhdGVyU2hpZnQoeCx5LHNoaWZ0KS8vaXMgKHggPDwoc2hpZnQqYnBlKSkgPiB5P1xuLy8gYmlnSW50ICBpbnQyYmlnSW50KHQsbixtKSAgICAgIC8vcmV0dXJuIGEgYmlnSW50IGVxdWFsIHRvIGludGVnZXIgdCwgd2l0aCBhdCBsZWFzdCBuIGJpdHMgYW5kIG0gYXJyYXkgZWxlbWVudHNcbi8vIGJpZ0ludCAgaW52ZXJzZU1vZCh4LG4pICAgICAgICAvL3JldHVybiAoeCoqKC0xKSBtb2QgbikgZm9yIGJpZ0ludHMgeCBhbmQgbi4gIElmIG5vIGludmVyc2UgZXhpc3RzLCBpdCByZXR1cm5zIG51bGxcbi8vIGludCAgICAgaW52ZXJzZU1vZEludCh4LG4pICAgICAvL3JldHVybiB4KiooLTEpIG1vZCBuLCBmb3IgaW50ZWdlcnMgeCBhbmQgbi4gIFJldHVybiAwIGlmIHRoZXJlIGlzIG5vIGludmVyc2Vcbi8vIGJvb2xlYW4gaXNaZXJvKHgpICAgICAgICAgICAgICAvL2lzIHRoZSBiaWdJbnQgeCBlcXVhbCB0byB6ZXJvP1xuLy8gYm9vbGVhbiBtaWxsZXJSYWJpbih4LGIpICAgICAgIC8vZG9lcyBvbmUgcm91bmQgb2YgTWlsbGVyLVJhYmluIGJhc2UgaW50ZWdlciBiIHNheSB0aGF0IGJpZ0ludCB4IGlzIHBvc3NpYmx5IHByaW1lPyAoYiBpcyBiaWdJbnQsIDE8Yjx4KVxuLy8gYm9vbGVhbiBtaWxsZXJSYWJpbkludCh4LGIpICAgIC8vZG9lcyBvbmUgcm91bmQgb2YgTWlsbGVyLVJhYmluIGJhc2UgaW50ZWdlciBiIHNheSB0aGF0IGJpZ0ludCB4IGlzIHBvc3NpYmx5IHByaW1lPyAoYiBpcyBpbnQsICAgIDE8Yjx4KVxuLy8gYmlnSW50ICBtb2QoeCxuKSAgICAgICAgICAgICAgIC8vcmV0dXJuIGEgbmV3IGJpZ0ludCBlcXVhbCB0byAoeCBtb2QgbikgZm9yIGJpZ0ludHMgeCBhbmQgbi5cbi8vIGludCAgICAgbW9kSW50KHgsbikgICAgICAgICAgICAvL3JldHVybiB4IG1vZCBuIGZvciBiaWdJbnQgeCBhbmQgaW50ZWdlciBuLlxuLy8gYmlnSW50ICBtdWx0KHgseSkgICAgICAgICAgICAgIC8vcmV0dXJuIHgqeSBmb3IgYmlnSW50cyB4IGFuZCB5LiBUaGlzIGlzIGZhc3RlciB3aGVuIHk8eC5cbi8vIGJpZ0ludCAgbXVsdE1vZCh4LHksbikgICAgICAgICAvL3JldHVybiAoeCp5IG1vZCBuKSBmb3IgYmlnSW50cyB4LHksbi4gIEZvciBncmVhdGVyIHNwZWVkLCBsZXQgeTx4LlxuLy8gYm9vbGVhbiBuZWdhdGl2ZSh4KSAgICAgICAgICAgIC8vaXMgYmlnSW50IHggbmVnYXRpdmU/XG4vLyBiaWdJbnQgIHBvd01vZCh4LHksbikgICAgICAgICAgLy9yZXR1cm4gKHgqKnkgbW9kIG4pIHdoZXJlIHgseSxuIGFyZSBiaWdJbnRzIGFuZCAqKiBpcyBleHBvbmVudGlhdGlvbi4gIDAqKjA9MS4gRmFzdGVyIGZvciBvZGQgbi5cbi8vIGJpZ0ludCAgcmFuZEJpZ0ludChuLHMpICAgICAgICAvL3JldHVybiBhbiBuLWJpdCByYW5kb20gQmlnSW50IChuPj0xKS4gIElmIHM9MSwgdGhlbiB0aGUgbW9zdCBzaWduaWZpY2FudCBvZiB0aG9zZSBuIGJpdHMgaXMgc2V0IHRvIDEuXG4vLyBiaWdJbnQgIHJhbmRUcnVlUHJpbWUoaykgICAgICAgLy9yZXR1cm4gYSBuZXcsIHJhbmRvbSwgay1iaXQsIHRydWUgcHJpbWUgYmlnSW50IHVzaW5nIE1hdXJlcidzIGFsZ29yaXRobS5cbi8vIGJpZ0ludCAgcmFuZFByb2JQcmltZShrKSAgICAgICAvL3JldHVybiBhIG5ldywgcmFuZG9tLCBrLWJpdCwgcHJvYmFibGUgcHJpbWUgYmlnSW50IChwcm9iYWJpbGl0eSBpdCdzIGNvbXBvc2l0ZSBsZXNzIHRoYW4gMl4tODApLlxuLy8gYmlnSW50ICBzdHIyYmlnSW50KHMsYixuLG0pICAgIC8vcmV0dXJuIGEgYmlnSW50IGZvciBudW1iZXIgcmVwcmVzZW50ZWQgaW4gc3RyaW5nIHMgaW4gYmFzZSBiIHdpdGggYXQgbGVhc3QgbiBiaXRzIGFuZCBtIGFycmF5IGVsZW1lbnRzXG4vLyBiaWdJbnQgIHN1Yih4LHkpICAgICAgICAgICAgICAgLy9yZXR1cm4gKHgteSkgZm9yIGJpZ0ludHMgeCBhbmQgeS4gIE5lZ2F0aXZlIGFuc3dlcnMgd2lsbCBiZSAycyBjb21wbGVtZW50XG4vLyBiaWdJbnQgIHRyaW0oeCxrKSAgICAgICAgICAgICAgLy9yZXR1cm4gYSBjb3B5IG9mIHggd2l0aCBleGFjdGx5IGsgbGVhZGluZyB6ZXJvIGVsZW1lbnRzXG4vL1xuLy9cbi8vIFRoZSBmb2xsb3dpbmcgZnVuY3Rpb25zIGVhY2ggaGF2ZSBhIG5vbi11bmRlcnNjb3JlZCB2ZXJzaW9uLCB3aGljaCBtb3N0IHVzZXJzIHNob3VsZCBjYWxsIGluc3RlYWQuXG4vLyBUaGVzZSBmdW5jdGlvbnMgZWFjaCB3cml0ZSB0byBhIHNpbmdsZSBwYXJhbWV0ZXIsIGFuZCB0aGUgY2FsbGVyIGlzIHJlc3BvbnNpYmxlIGZvciBlbnN1cmluZyB0aGUgYXJyYXlcbi8vIHBhc3NlZCBpbiBpcyBsYXJnZSBlbm91Z2ggdG8gaG9sZCB0aGUgcmVzdWx0LlxuLy9cbi8vIHZvaWQgICAgYWRkSW50Xyh4LG4pICAgICAgICAgIC8vZG8geD14K24gd2hlcmUgeCBpcyBhIGJpZ0ludCBhbmQgbiBpcyBhbiBpbnRlZ2VyXG4vLyB2b2lkICAgIGFkZF8oeCx5KSAgICAgICAgICAgICAvL2RvIHg9eCt5IGZvciBiaWdJbnRzIHggYW5kIHlcbi8vIHZvaWQgICAgY29weV8oeCx5KSAgICAgICAgICAgIC8vZG8geD15IG9uIGJpZ0ludHMgeCBhbmQgeVxuLy8gdm9pZCAgICBjb3B5SW50Xyh4LG4pICAgICAgICAgLy9kbyB4PW4gb24gYmlnSW50IHggYW5kIGludGVnZXIgblxuLy8gdm9pZCAgICBHQ0RfKHgseSkgICAgICAgICAgICAgLy9zZXQgeCB0byB0aGUgZ3JlYXRlc3QgY29tbW9uIGRpdmlzb3Igb2YgYmlnSW50cyB4IGFuZCB5LCAoeSBpcyBkZXN0cm95ZWQpLiAgKFRoaXMgbmV2ZXIgb3ZlcmZsb3dzIGl0cyBhcnJheSkuXG4vLyBib29sZWFuIGludmVyc2VNb2RfKHgsbikgICAgICAvL2RvIHg9eCoqKC0xKSBtb2QgbiwgZm9yIGJpZ0ludHMgeCBhbmQgbi4gUmV0dXJucyAxICgwKSBpZiBpbnZlcnNlIGRvZXMgKGRvZXNuJ3QpIGV4aXN0XG4vLyB2b2lkICAgIG1vZF8oeCxuKSAgICAgICAgICAgICAvL2RvIHg9eCBtb2QgbiBmb3IgYmlnSW50cyB4IGFuZCBuLiAoVGhpcyBuZXZlciBvdmVyZmxvd3MgaXRzIGFycmF5KS5cbi8vIHZvaWQgICAgbXVsdF8oeCx5KSAgICAgICAgICAgIC8vZG8geD14KnkgZm9yIGJpZ0ludHMgeCBhbmQgeS5cbi8vIHZvaWQgICAgbXVsdE1vZF8oeCx5LG4pICAgICAgIC8vZG8geD14KnkgIG1vZCBuIGZvciBiaWdJbnRzIHgseSxuLlxuLy8gdm9pZCAgICBwb3dNb2RfKHgseSxuKSAgICAgICAgLy9kbyB4PXgqKnkgbW9kIG4sIHdoZXJlIHgseSxuIGFyZSBiaWdJbnRzIChuIGlzIG9kZCkgYW5kICoqIGlzIGV4cG9uZW50aWF0aW9uLiAgMCoqMD0xLlxuLy8gdm9pZCAgICByYW5kQmlnSW50XyhiLG4scykgICAgLy9kbyBiID0gYW4gbi1iaXQgcmFuZG9tIEJpZ0ludC4gaWYgcz0xLCB0aGVuIG50aCBiaXQgKG1vc3Qgc2lnbmlmaWNhbnQgYml0KSBpcyBzZXQgdG8gMS4gbj49MS5cbi8vIHZvaWQgICAgcmFuZFRydWVQcmltZV8oYW5zLGspIC8vZG8gYW5zID0gYSByYW5kb20gay1iaXQgdHJ1ZSByYW5kb20gcHJpbWUgKG5vdCBqdXN0IHByb2JhYmxlIHByaW1lKSB3aXRoIDEgaW4gdGhlIG1zYi5cbi8vIHZvaWQgICAgc3ViXyh4LHkpICAgICAgICAgICAgIC8vZG8geD14LXkgZm9yIGJpZ0ludHMgeCBhbmQgeS4gTmVnYXRpdmUgYW5zd2VycyB3aWxsIGJlIDJzIGNvbXBsZW1lbnQuXG4vL1xuLy8gVGhlIGZvbGxvd2luZyBmdW5jdGlvbnMgZG8gTk9UIGhhdmUgYSBub24tdW5kZXJzY29yZWQgdmVyc2lvbi5cbi8vIFRoZXkgZWFjaCB3cml0ZSBhIGJpZ0ludCByZXN1bHQgdG8gb25lIG9yIG1vcmUgcGFyYW1ldGVycy4gIFRoZSBjYWxsZXIgaXMgcmVzcG9uc2libGUgZm9yXG4vLyBlbnN1cmluZyB0aGUgYXJyYXlzIHBhc3NlZCBpbiBhcmUgbGFyZ2UgZW5vdWdoIHRvIGhvbGQgdGhlIHJlc3VsdHMuXG4vL1xuLy8gdm9pZCBhZGRTaGlmdF8oeCx5LHlzKSAgICAgICAvL2RvIHg9eCsoeTw8KHlzKmJwZSkpXG4vLyB2b2lkIGNhcnJ5Xyh4KSAgICAgICAgICAgICAgIC8vZG8gY2FycmllcyBhbmQgYm9ycm93cyBzbyBlYWNoIGVsZW1lbnQgb2YgdGhlIGJpZ0ludCB4IGZpdHMgaW4gYnBlIGJpdHMuXG4vLyB2b2lkIGRpdmlkZV8oeCx5LHEscikgICAgICAgIC8vZGl2aWRlIHggYnkgeSBnaXZpbmcgcXVvdGllbnQgcSBhbmQgcmVtYWluZGVyIHJcbi8vIGludCAgZGl2SW50Xyh4LG4pICAgICAgICAgICAgLy9kbyB4PWZsb29yKHgvbikgZm9yIGJpZ0ludCB4IGFuZCBpbnRlZ2VyIG4sIGFuZCByZXR1cm4gdGhlIHJlbWFpbmRlci4gKFRoaXMgbmV2ZXIgb3ZlcmZsb3dzIGl0cyBhcnJheSkuXG4vLyBpbnQgIGVHQ0RfKHgseSxkLGEsYikgICAgICAgIC8vc2V0cyBhLGIsZCB0byBwb3NpdGl2ZSBiaWdJbnRzIHN1Y2ggdGhhdCBkID0gR0NEXyh4LHkpID0gYSp4LWIqeVxuLy8gdm9pZCBoYWx2ZV8oeCkgICAgICAgICAgICAgICAvL2RvIHg9Zmxvb3IofHh8LzIpKnNnbih4KSBmb3IgYmlnSW50IHggaW4gMidzIGNvbXBsZW1lbnQuICAoVGhpcyBuZXZlciBvdmVyZmxvd3MgaXRzIGFycmF5KS5cbi8vIHZvaWQgbGVmdFNoaWZ0Xyh4LG4pICAgICAgICAgLy9sZWZ0IHNoaWZ0IGJpZ0ludCB4IGJ5IG4gYml0cy4gIG48YnBlLlxuLy8gdm9pZCBsaW5Db21iXyh4LHksYSxiKSAgICAgICAvL2RvIHg9YSp4K2IqeSBmb3IgYmlnSW50cyB4IGFuZCB5IGFuZCBpbnRlZ2VycyBhIGFuZCBiXG4vLyB2b2lkIGxpbkNvbWJTaGlmdF8oeCx5LGIseXMpIC8vZG8geD14K2IqKHk8PCh5cypicGUpKSBmb3IgYmlnSW50cyB4IGFuZCB5LCBhbmQgaW50ZWdlcnMgYiBhbmQgeXNcbi8vIHZvaWQgbW9udF8oeCx5LG4sbnApICAgICAgICAgLy9Nb250Z29tZXJ5IG11bHRpcGxpY2F0aW9uIChzZWUgY29tbWVudHMgd2hlcmUgdGhlIGZ1bmN0aW9uIGlzIGRlZmluZWQpXG4vLyB2b2lkIG11bHRJbnRfKHgsbikgICAgICAgICAgIC8vZG8geD14Km4gd2hlcmUgeCBpcyBhIGJpZ0ludCBhbmQgbiBpcyBhbiBpbnRlZ2VyLlxuLy8gdm9pZCByaWdodFNoaWZ0Xyh4LG4pICAgICAgICAvL3JpZ2h0IHNoaWZ0IGJpZ0ludCB4IGJ5IG4gYml0cy4gIDAgPD0gbiA8IGJwZS4gKFRoaXMgbmV2ZXIgb3ZlcmZsb3dzIGl0cyBhcnJheSkuXG4vLyB2b2lkIHNxdWFyZU1vZF8oeCxuKSAgICAgICAgIC8vZG8geD14KnggIG1vZCBuIGZvciBiaWdJbnRzIHgsblxuLy8gdm9pZCBzdWJTaGlmdF8oeCx5LHlzKSAgICAgICAvL2RvIHg9eC0oeTw8KHlzKmJwZSkpLiBOZWdhdGl2ZSBhbnN3ZXJzIHdpbGwgYmUgMnMgY29tcGxlbWVudC5cbi8vXG4vLyBUaGUgZm9sbG93aW5nIGZ1bmN0aW9ucyBhcmUgYmFzZWQgb24gYWxnb3JpdGhtcyBmcm9tIHRoZSBfSGFuZGJvb2sgb2YgQXBwbGllZCBDcnlwdG9ncmFwaHlfXG4vLyAgICBwb3dNb2RfKCkgICAgICAgICAgID0gYWxnb3JpdGhtIDE0Ljk0LCBNb250Z29tZXJ5IGV4cG9uZW50aWF0aW9uXG4vLyAgICBlR0NEXyxpbnZlcnNlTW9kXygpID0gYWxnb3JpdGhtIDE0LjYxLCBCaW5hcnkgZXh0ZW5kZWQgR0NEX1xuLy8gICAgR0NEXygpICAgICAgICAgICAgICA9IGFsZ29yb3RobSAxNC41NywgTGVobWVyJ3MgYWxnb3JpdGhtXG4vLyAgICBtb250XygpICAgICAgICAgICAgID0gYWxnb3JpdGhtIDE0LjM2LCBNb250Z29tZXJ5IG11bHRpcGxpY2F0aW9uXG4vLyAgICBkaXZpZGVfKCkgICAgICAgICAgID0gYWxnb3JpdGhtIDE0LjIwICBNdWx0aXBsZS1wcmVjaXNpb24gZGl2aXNpb25cbi8vICAgIHNxdWFyZU1vZF8oKSAgICAgICAgPSBhbGdvcml0aG0gMTQuMTYgIE11bHRpcGxlLXByZWNpc2lvbiBzcXVhcmluZ1xuLy8gICAgcmFuZFRydWVQcmltZV8oKSAgICA9IGFsZ29yaXRobSAgNC42MiwgTWF1cmVyJ3MgYWxnb3JpdGhtXG4vLyAgICBtaWxsZXJSYWJpbigpICAgICAgID0gYWxnb3JpdGhtICA0LjI0LCBNaWxsZXItUmFiaW4gYWxnb3JpdGhtXG4vL1xuLy8gUHJvZmlsaW5nIHNob3dzOlxuLy8gICAgIHJhbmRUcnVlUHJpbWVfKCkgc3BlbmRzOlxuLy8gICAgICAgICAxMCUgb2YgaXRzIHRpbWUgaW4gY2FsbHMgdG8gcG93TW9kXygpXG4vLyAgICAgICAgIDg1JSBvZiBpdHMgdGltZSBpbiBjYWxscyB0byBtaWxsZXJSYWJpbigpXG4vLyAgICAgbWlsbGVyUmFiaW4oKSBzcGVuZHM6XG4vLyAgICAgICAgIDk5JSBvZiBpdHMgdGltZSBpbiBjYWxscyB0byBwb3dNb2RfKCkgICAoYWx3YXlzIHdpdGggYSBiYXNlIG9mIDIpXG4vLyAgICAgcG93TW9kXygpIHNwZW5kczpcbi8vICAgICAgICAgOTQlIG9mIGl0cyB0aW1lIGluIGNhbGxzIHRvIG1vbnRfKCkgIChhbG1vc3QgYWx3YXlzIHdpdGggeD09eSlcbi8vXG4vLyBUaGlzIHN1Z2dlc3RzIHRoZXJlIGFyZSBzZXZlcmFsIHdheXMgdG8gc3BlZWQgdXAgdGhpcyBsaWJyYXJ5IHNsaWdodGx5OlxuLy8gICAgIC0gY29udmVydCBwb3dNb2RfIHRvIHVzZSBhIE1vbnRnb21lcnkgZm9ybSBvZiBrLWFyeSB3aW5kb3cgKG9yIG1heWJlIGEgTW9udGdvbWVyeSBmb3JtIG9mIHNsaWRpbmcgd2luZG93KVxuLy8gICAgICAgICAtLSB0aGlzIHNob3VsZCBlc3BlY2lhbGx5IGZvY3VzIG9uIGJlaW5nIGZhc3Qgd2hlbiByYWlzaW5nIDIgdG8gYSBwb3dlciBtb2QgblxuLy8gICAgIC0gY29udmVydCByYW5kVHJ1ZVByaW1lXygpIHRvIHVzZSBhIG1pbmltdW0gciBvZiAxLzMgaW5zdGVhZCBvZiAxLzIgd2l0aCB0aGUgYXBwcm9wcmlhdGUgY2hhbmdlIHRvIHRoZSB0ZXN0XG4vLyAgICAgLSB0dW5lIHRoZSBwYXJhbWV0ZXJzIGluIHJhbmRUcnVlUHJpbWVfKCksIGluY2x1ZGluZyBjLCBtLCBhbmQgcmVjTGltaXRcbi8vICAgICAtIHNwZWVkIHVwIHRoZSBzaW5nbGUgbG9vcCBpbiBtb250XygpIHRoYXQgdGFrZXMgOTUlIG9mIHRoZSBydW50aW1lLCBwZXJoYXBzIGJ5IHJlZHVjaW5nIGNoZWNraW5nXG4vLyAgICAgICB3aXRoaW4gdGhlIGxvb3Agd2hlbiBhbGwgdGhlIHBhcmFtZXRlcnMgYXJlIHRoZSBzYW1lIGxlbmd0aC5cbi8vXG4vLyBUaGVyZSBhcmUgc2V2ZXJhbCBpZGVhcyB0aGF0IGxvb2sgbGlrZSB0aGV5IHdvdWxkbid0IGhlbHAgbXVjaCBhdCBhbGw6XG4vLyAgICAgLSByZXBsYWNpbmcgdHJpYWwgZGl2aXNpb24gaW4gcmFuZFRydWVQcmltZV8oKSB3aXRoIGEgc2lldmUgKHRoYXQgc3BlZWRzIHVwIHNvbWV0aGluZyB0YWtpbmcgYWxtb3N0IG5vIHRpbWUgYW55d2F5KVxuLy8gICAgIC0gaW5jcmVhc2UgYnBlIGZyb20gMTUgdG8gMzAgKHRoYXQgd291bGQgaGVscCBpZiB3ZSBoYWQgYSAzMiozMi0+NjQgbXVsdGlwbGllciwgYnV0IG5vdCB3aXRoIEphdmFTY3JpcHQncyAzMiozMi0+MzIpXG4vLyAgICAgLSBzcGVlZGluZyB1cCBtb250Xyh4LHksbixucCkgd2hlbiB4PT15IGJ5IGRvaW5nIGEgbm9uLW1vZHVsYXIsIG5vbi1Nb250Z29tZXJ5IHNxdWFyZVxuLy8gICAgICAgZm9sbG93ZWQgYnkgYSBNb250Z29tZXJ5IHJlZHVjdGlvbi4gIFRoZSBpbnRlcm1lZGlhdGUgYW5zd2VyIHdpbGwgYmUgdHdpY2UgYXMgbG9uZyBhcyB4LCBzbyB0aGF0XG4vLyAgICAgICBtZXRob2Qgd291bGQgYmUgc2xvd2VyLiAgVGhpcyBpcyB1bmZvcnR1bmF0ZSBiZWNhdXNlIHRoZSBjb2RlIGN1cnJlbnRseSBzcGVuZHMgYWxtb3N0IGFsbCBvZiBpdHMgdGltZVxuLy8gICAgICAgZG9pbmcgbW9udF8oeCx4LC4uLiksIGJvdGggZm9yIHJhbmRUcnVlUHJpbWVfKCkgYW5kIHBvd01vZF8oKS4gIEEgZmFzdGVyIG1ldGhvZCBmb3IgTW9udGdvbWVyeSBzcXVhcmluZ1xuLy8gICAgICAgd291bGQgaGF2ZSBhIGxhcmdlIGltcGFjdCBvbiB0aGUgc3BlZWQgb2YgcmFuZFRydWVQcmltZV8oKSBhbmQgcG93TW9kXygpLiAgSEFDIGhhcyBhIGNvdXBsZSBvZiBwb29ybHktd29yZGVkXG4vLyAgICAgICBzZW50ZW5jZXMgdGhhdCBzZWVtIHRvIGltcGx5IGl0J3MgZmFzdGVyIHRvIGRvIGEgbm9uLW1vZHVsYXIgc3F1YXJlIGZvbGxvd2VkIGJ5IGEgc2luZ2xlXG4vLyAgICAgICBNb250Z29tZXJ5IHJlZHVjdGlvbiwgYnV0IHRoYXQncyBvYnZpb3VzbHkgd3JvbmcuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vZ2xvYmFsc1xuYnBlPTA7ICAgICAgICAgLy9iaXRzIHN0b3JlZCBwZXIgYXJyYXkgZWxlbWVudFxubWFzaz0wOyAgICAgICAgLy9BTkQgdGhpcyB3aXRoIGFuIGFycmF5IGVsZW1lbnQgdG8gY2hvcCBpdCBkb3duIHRvIGJwZSBiaXRzXG5yYWRpeD1tYXNrKzE7ICAvL2VxdWFscyAyXmJwZS4gIEEgc2luZ2xlIDEgYml0IHRvIHRoZSBsZWZ0IG9mIHRoZSBsYXN0IGJpdCBvZiBtYXNrLlxuXG4vL3RoZSBkaWdpdHMgZm9yIGNvbnZlcnRpbmcgdG8gZGlmZmVyZW50IGJhc2VzXG5kaWdpdHNTdHI9JzAxMjM0NTY3ODlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6Xz0hQCMkJV4mKigpW117fXw7OiwuPD4vP2B+IFxcXFxcXCdcXFwiKy0nO1xuXG4vL2luaXRpYWxpemUgdGhlIGdsb2JhbCB2YXJpYWJsZXNcbmZvciAoYnBlPTA7ICgxPDwoYnBlKzEpKSA+ICgxPDxicGUpOyBicGUrKyk7ICAvL2JwZT1udW1iZXIgb2YgYml0cyBpbiB0aGUgbWFudGlzc2Egb24gdGhpcyBwbGF0Zm9ybVxuYnBlPj49MTsgICAgICAgICAgICAgICAgICAgLy9icGU9bnVtYmVyIG9mIGJpdHMgaW4gb25lIGVsZW1lbnQgb2YgdGhlIGFycmF5IHJlcHJlc2VudGluZyB0aGUgYmlnSW50XG5tYXNrPSgxPDxicGUpLTE7ICAgICAgICAgICAvL0FORCB0aGUgbWFzayB3aXRoIGFuIGludGVnZXIgdG8gZ2V0IGl0cyBicGUgbGVhc3Qgc2lnbmlmaWNhbnQgYml0c1xucmFkaXg9bWFzaysxOyAgICAgICAgICAgICAgLy8yXmJwZS4gIGEgc2luZ2xlIDEgYml0IHRvIHRoZSBsZWZ0IG9mIHRoZSBmaXJzdCBiaXQgb2YgbWFza1xub25lPWludDJiaWdJbnQoMSwxLDEpOyAgICAgLy9jb25zdGFudCB1c2VkIGluIHBvd01vZF8oKVxuXG4vL3RoZSBmb2xsb3dpbmcgZ2xvYmFsIHZhcmlhYmxlcyBhcmUgc2NyYXRjaHBhZCBtZW1vcnkgdG9cbi8vcmVkdWNlIGR5bmFtaWMgbWVtb3J5IGFsbG9jYXRpb24gaW4gdGhlIGlubmVyIGxvb3BcbnQ9bmV3IEFycmF5KDApO1xuc3M9dDsgICAgICAgLy91c2VkIGluIG11bHRfKClcbnMwPXQ7ICAgICAgIC8vdXNlZCBpbiBtdWx0TW9kXygpLCBzcXVhcmVNb2RfKClcbnMxPXQ7ICAgICAgIC8vdXNlZCBpbiBwb3dNb2RfKCksIG11bHRNb2RfKCksIHNxdWFyZU1vZF8oKVxuczI9dDsgICAgICAgLy91c2VkIGluIHBvd01vZF8oKSwgbXVsdE1vZF8oKVxuczM9dDsgICAgICAgLy91c2VkIGluIHBvd01vZF8oKVxuczQ9dDsgczU9dDsgLy91c2VkIGluIG1vZF8oKVxuczY9dDsgICAgICAgLy91c2VkIGluIGJpZ0ludDJzdHIoKVxuczc9dDsgICAgICAgLy91c2VkIGluIHBvd01vZF8oKVxuVD10OyAgICAgICAgLy91c2VkIGluIEdDRF8oKVxuc2E9dDsgICAgICAgLy91c2VkIGluIG1vbnRfKClcbm1yX3gxPXQ7IG1yX3I9dDsgbXJfYT10OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy91c2VkIGluIG1pbGxlclJhYmluKClcbmVnX3Y9dDsgZWdfdT10OyBlZ19BPXQ7IGVnX0I9dDsgZWdfQz10OyBlZ19EPXQ7ICAgICAgICAgICAgICAgLy91c2VkIGluIGVHQ0RfKCksIGludmVyc2VNb2RfKClcbm1kX3ExPXQ7IG1kX3EyPXQ7IG1kX3EzPXQ7IG1kX3I9dDsgbWRfcjE9dDsgbWRfcjI9dDsgbWRfdHQ9dDsgLy91c2VkIGluIG1vZF8oKVxuXG5wcmltZXM9dDsgcG93cz10OyBzX2k9dDsgc19pMj10OyBzX1I9dDsgc19ybT10OyBzX3E9dDsgc19uMT10O1xuICBzX2E9dDsgc19yMj10OyBzX249dDsgc19iPXQ7IHNfZD10OyBzX3gxPXQ7IHNfeDI9dCwgc19hYT10OyAvL3VzZWQgaW4gcmFuZFRydWVQcmltZV8oKVxuXG5ycHByYj10OyAvL3VzZWQgaW4gcmFuZFByb2JQcmltZVJvdW5kcygpICh3aGljaCBhbHNvIHVzZXMgXCJwcmltZXNcIilcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbi8vcmV0dXJuIGFycmF5IG9mIGFsbCBwcmltZXMgbGVzcyB0aGFuIGludGVnZXIgblxuZnVuY3Rpb24gZmluZFByaW1lcyhuKSB7XG4gIHZhciBpLHMscCxhbnM7XG4gIHM9bmV3IEFycmF5KG4pO1xuICBmb3IgKGk9MDtpPG47aSsrKVxuICAgIHNbaV09MDtcbiAgc1swXT0yO1xuICBwPTA7ICAgIC8vZmlyc3QgcCBlbGVtZW50cyBvZiBzIGFyZSBwcmltZXMsIHRoZSByZXN0IGFyZSBhIHNpZXZlXG4gIGZvcig7c1twXTxuOykgeyAgICAgICAgICAgICAgICAgIC8vc1twXSBpcyB0aGUgcHRoIHByaW1lXG4gICAgZm9yKGk9c1twXSpzW3BdOyBpPG47IGkrPXNbcF0pIC8vbWFyayBtdWx0aXBsZXMgb2Ygc1twXVxuICAgICAgc1tpXT0xO1xuICAgIHArKztcbiAgICBzW3BdPXNbcC0xXSsxO1xuICAgIGZvcig7IHNbcF08biAmJiBzW3NbcF1dOyBzW3BdKyspOyAvL2ZpbmQgbmV4dCBwcmltZSAod2hlcmUgc1twXT09MClcbiAgfVxuICBhbnM9bmV3IEFycmF5KHApO1xuICBmb3IoaT0wO2k8cDtpKyspXG4gICAgYW5zW2ldPXNbaV07XG4gIHJldHVybiBhbnM7XG59XG5cblxuLy9kb2VzIGEgc2luZ2xlIHJvdW5kIG9mIE1pbGxlci1SYWJpbiBiYXNlIGIgY29uc2lkZXIgeCB0byBiZSBhIHBvc3NpYmxlIHByaW1lP1xuLy94IGlzIGEgYmlnSW50LCBhbmQgYiBpcyBhbiBpbnRlZ2VyLCB3aXRoIGI8eFxuZnVuY3Rpb24gbWlsbGVyUmFiaW5JbnQoeCxiKSB7XG4gIGlmIChtcl94MS5sZW5ndGghPXgubGVuZ3RoKSB7XG4gICAgbXJfeDE9ZHVwKHgpO1xuICAgIG1yX3I9ZHVwKHgpO1xuICAgIG1yX2E9ZHVwKHgpO1xuICB9XG5cbiAgY29weUludF8obXJfYSxiKTtcbiAgcmV0dXJuIG1pbGxlclJhYmluKHgsbXJfYSk7XG59XG5cbi8vZG9lcyBhIHNpbmdsZSByb3VuZCBvZiBNaWxsZXItUmFiaW4gYmFzZSBiIGNvbnNpZGVyIHggdG8gYmUgYSBwb3NzaWJsZSBwcmltZT9cbi8veCBhbmQgYiBhcmUgYmlnSW50cyB3aXRoIGI8eFxuZnVuY3Rpb24gbWlsbGVyUmFiaW4oeCxiKSB7XG4gIHZhciBpLGosayxzO1xuXG4gIGlmIChtcl94MS5sZW5ndGghPXgubGVuZ3RoKSB7XG4gICAgbXJfeDE9ZHVwKHgpO1xuICAgIG1yX3I9ZHVwKHgpO1xuICAgIG1yX2E9ZHVwKHgpO1xuICB9XG5cbiAgY29weV8obXJfYSxiKTtcbiAgY29weV8obXJfcix4KTtcbiAgY29weV8obXJfeDEseCk7XG5cbiAgYWRkSW50Xyhtcl9yLC0xKTtcbiAgYWRkSW50Xyhtcl94MSwtMSk7XG5cbiAgLy9zPXRoZSBoaWdoZXN0IHBvd2VyIG9mIHR3byB0aGF0IGRpdmlkZXMgbXJfclxuICBrPTA7XG4gIGZvciAoaT0wO2k8bXJfci5sZW5ndGg7aSsrKVxuICAgIGZvciAoaj0xO2o8bWFzaztqPDw9MSlcbiAgICAgIGlmICh4W2ldICYgaikge1xuICAgICAgICBzPShrPG1yX3IubGVuZ3RoK2JwZSA/IGsgOiAwKTtcbiAgICAgICAgIGk9bXJfci5sZW5ndGg7XG4gICAgICAgICBqPW1hc2s7XG4gICAgICB9IGVsc2VcbiAgICAgICAgaysrO1xuXG4gIGlmIChzKVxuICAgIHJpZ2h0U2hpZnRfKG1yX3Iscyk7XG5cbiAgcG93TW9kXyhtcl9hLG1yX3IseCk7XG5cbiAgaWYgKCFlcXVhbHNJbnQobXJfYSwxKSAmJiAhZXF1YWxzKG1yX2EsbXJfeDEpKSB7XG4gICAgaj0xO1xuICAgIHdoaWxlIChqPD1zLTEgJiYgIWVxdWFscyhtcl9hLG1yX3gxKSkge1xuICAgICAgc3F1YXJlTW9kXyhtcl9hLHgpO1xuICAgICAgaWYgKGVxdWFsc0ludChtcl9hLDEpKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgICAgaisrO1xuICAgIH1cbiAgICBpZiAoIWVxdWFscyhtcl9hLG1yX3gxKSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9XG4gIHJldHVybiAxO1xufVxuXG4vL3JldHVybnMgaG93IG1hbnkgYml0cyBsb25nIHRoZSBiaWdJbnQgaXMsIG5vdCBjb3VudGluZyBsZWFkaW5nIHplcm9zLlxuZnVuY3Rpb24gYml0U2l6ZSh4KSB7XG4gIHZhciBqLHosdztcbiAgZm9yIChqPXgubGVuZ3RoLTE7ICh4W2pdPT0wKSAmJiAoaj4wKTsgai0tKTtcbiAgZm9yICh6PTAsdz14W2pdOyB3OyAodz4+PTEpLHorKyk7XG4gIHorPWJwZSpqO1xuICByZXR1cm4gejtcbn1cblxuLy9yZXR1cm4gYSBjb3B5IG9mIHggd2l0aCBhdCBsZWFzdCBuIGVsZW1lbnRzLCBhZGRpbmcgbGVhZGluZyB6ZXJvcyBpZiBuZWVkZWRcbmZ1bmN0aW9uIGV4cGFuZCh4LG4pIHtcbiAgdmFyIGFucz1pbnQyYmlnSW50KDAsKHgubGVuZ3RoPm4gPyB4Lmxlbmd0aCA6IG4pKmJwZSwwKTtcbiAgY29weV8oYW5zLHgpO1xuICByZXR1cm4gYW5zO1xufVxuXG4vL3JldHVybiBhIGstYml0IHRydWUgcmFuZG9tIHByaW1lIHVzaW5nIE1hdXJlcidzIGFsZ29yaXRobS5cbmZ1bmN0aW9uIHJhbmRUcnVlUHJpbWUoaykge1xuICB2YXIgYW5zPWludDJiaWdJbnQoMCxrLDApO1xuICByYW5kVHJ1ZVByaW1lXyhhbnMsayk7XG4gIHJldHVybiB0cmltKGFucywxKTtcbn1cblxuLy9yZXR1cm4gYSBrLWJpdCByYW5kb20gcHJvYmFibGUgcHJpbWUgd2l0aCBwcm9iYWJpbGl0eSBvZiBlcnJvciA8IDJeLTgwXG5mdW5jdGlvbiByYW5kUHJvYlByaW1lKGspIHtcbiAgaWYgKGs+PTYwMCkgcmV0dXJuIHJhbmRQcm9iUHJpbWVSb3VuZHMoaywyKTsgLy9udW1iZXJzIGZyb20gSEFDIHRhYmxlIDQuM1xuICBpZiAoaz49NTUwKSByZXR1cm4gcmFuZFByb2JQcmltZVJvdW5kcyhrLDQpO1xuICBpZiAoaz49NTAwKSByZXR1cm4gcmFuZFByb2JQcmltZVJvdW5kcyhrLDUpO1xuICBpZiAoaz49NDAwKSByZXR1cm4gcmFuZFByb2JQcmltZVJvdW5kcyhrLDYpO1xuICBpZiAoaz49MzUwKSByZXR1cm4gcmFuZFByb2JQcmltZVJvdW5kcyhrLDcpO1xuICBpZiAoaz49MzAwKSByZXR1cm4gcmFuZFByb2JQcmltZVJvdW5kcyhrLDkpO1xuICBpZiAoaz49MjUwKSByZXR1cm4gcmFuZFByb2JQcmltZVJvdW5kcyhrLDEyKTsgLy9udW1iZXJzIGZyb20gSEFDIHRhYmxlIDQuNFxuICBpZiAoaz49MjAwKSByZXR1cm4gcmFuZFByb2JQcmltZVJvdW5kcyhrLDE1KTtcbiAgaWYgKGs+PTE1MCkgcmV0dXJuIHJhbmRQcm9iUHJpbWVSb3VuZHMoaywxOCk7XG4gIGlmIChrPj0xMDApIHJldHVybiByYW5kUHJvYlByaW1lUm91bmRzKGssMjcpO1xuICAgICAgICAgICAgICByZXR1cm4gcmFuZFByb2JQcmltZVJvdW5kcyhrLDQwKTsgLy9udW1iZXIgZnJvbSBIQUMgcmVtYXJrIDQuMjYgKG9ubHkgYW4gZXN0aW1hdGUpXG59XG5cbi8vcmV0dXJuIGEgay1iaXQgcHJvYmFibGUgcmFuZG9tIHByaW1lIHVzaW5nIG4gcm91bmRzIG9mIE1pbGxlciBSYWJpbiAoYWZ0ZXIgdHJpYWwgZGl2aXNpb24gd2l0aCBzbWFsbCBwcmltZXMpXG5mdW5jdGlvbiByYW5kUHJvYlByaW1lUm91bmRzKGssbikge1xuICB2YXIgYW5zLCBpLCBkaXZpc2libGUsIEI7XG4gIEI9MzAwMDA7ICAvL0IgaXMgbGFyZ2VzdCBwcmltZSB0byB1c2UgaW4gdHJpYWwgZGl2aXNpb25cbiAgYW5zPWludDJiaWdJbnQoMCxrLDApO1xuXG4gIC8vb3B0aW1pemF0aW9uOiB0cnkgbGFyZ2VyIGFuZCBzbWFsbGVyIEIgdG8gZmluZCB0aGUgYmVzdCBsaW1pdC5cblxuICBpZiAocHJpbWVzLmxlbmd0aD09MClcbiAgICBwcmltZXM9ZmluZFByaW1lcygzMDAwMCk7ICAvL2NoZWNrIGZvciBkaXZpc2liaWxpdHkgYnkgcHJpbWVzIDw9MzAwMDBcblxuICBpZiAocnBwcmIubGVuZ3RoIT1hbnMubGVuZ3RoKVxuICAgIHJwcHJiPWR1cChhbnMpO1xuXG4gIGZvciAoOzspIHsgLy9rZWVwIHRyeWluZyByYW5kb20gdmFsdWVzIGZvciBhbnMgdW50aWwgb25lIGFwcGVhcnMgdG8gYmUgcHJpbWVcbiAgICAvL29wdGltaXphdGlvbjogcGljayBhIHJhbmRvbSBudW1iZXIgdGltZXMgTD0yKjMqNSouLi4qcCwgcGx1cyBhXG4gICAgLy8gICByYW5kb20gZWxlbWVudCBvZiB0aGUgbGlzdCBvZiBhbGwgbnVtYmVycyBpbiBbMCxMKSBub3QgZGl2aXNpYmxlIGJ5IGFueSBwcmltZSB1cCB0byBwLlxuICAgIC8vICAgVGhpcyBjYW4gcmVkdWNlIHRoZSBhbW91bnQgb2YgcmFuZG9tIG51bWJlciBnZW5lcmF0aW9uLlxuXG4gICAgcmFuZEJpZ0ludF8oYW5zLGssMCk7IC8vYW5zID0gYSByYW5kb20gb2RkIG51bWJlciB0byBjaGVja1xuICAgIGFuc1swXSB8PSAxO1xuICAgIGRpdmlzaWJsZT0wO1xuXG4gICAgLy9jaGVjayBhbnMgZm9yIGRpdmlzaWJpbGl0eSBieSBzbWFsbCBwcmltZXMgdXAgdG8gQlxuICAgIGZvciAoaT0wOyAoaTxwcmltZXMubGVuZ3RoKSAmJiAocHJpbWVzW2ldPD1CKTsgaSsrKVxuICAgICAgaWYgKG1vZEludChhbnMscHJpbWVzW2ldKT09MCAmJiAhZXF1YWxzSW50KGFucyxwcmltZXNbaV0pKSB7XG4gICAgICAgIGRpdmlzaWJsZT0xO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgIC8vb3B0aW1pemF0aW9uOiBjaGFuZ2UgbWlsbGVyUmFiaW4gc28gdGhlIGJhc2UgY2FuIGJlIGJpZ2dlciB0aGFuIHRoZSBudW1iZXIgYmVpbmcgY2hlY2tlZCwgdGhlbiBlbGltaW5hdGUgdGhlIHdoaWxlIGhlcmUuXG5cbiAgICAvL2RvIG4gcm91bmRzIG9mIE1pbGxlciBSYWJpbiwgd2l0aCByYW5kb20gYmFzZXMgbGVzcyB0aGFuIGFuc1xuICAgIGZvciAoaT0wOyBpPG4gJiYgIWRpdmlzaWJsZTsgaSsrKSB7XG4gICAgICByYW5kQmlnSW50XyhycHByYixrLDApO1xuICAgICAgd2hpbGUoIWdyZWF0ZXIoYW5zLHJwcHJiKSkgLy9waWNrIGEgcmFuZG9tIHJwcHJiIHRoYXQncyA8IGFuc1xuICAgICAgICByYW5kQmlnSW50XyhycHByYixrLDApO1xuICAgICAgaWYgKCFtaWxsZXJSYWJpbihhbnMscnBwcmIpKVxuICAgICAgICBkaXZpc2libGU9MTtcbiAgICB9XG5cbiAgICBpZighZGl2aXNpYmxlKVxuICAgICAgcmV0dXJuIGFucztcbiAgfVxufVxuXG4vL3JldHVybiBhIG5ldyBiaWdJbnQgZXF1YWwgdG8gKHggbW9kIG4pIGZvciBiaWdJbnRzIHggYW5kIG4uXG5mdW5jdGlvbiBtb2QoeCxuKSB7XG4gIHZhciBhbnM9ZHVwKHgpO1xuICBtb2RfKGFucyxuKTtcbiAgcmV0dXJuIHRyaW0oYW5zLDEpO1xufVxuXG4vL3JldHVybiAoeCtuKSB3aGVyZSB4IGlzIGEgYmlnSW50IGFuZCBuIGlzIGFuIGludGVnZXIuXG5mdW5jdGlvbiBhZGRJbnQoeCxuKSB7XG4gIHZhciBhbnM9ZXhwYW5kKHgseC5sZW5ndGgrMSk7XG4gIGFkZEludF8oYW5zLG4pO1xuICByZXR1cm4gdHJpbShhbnMsMSk7XG59XG5cbi8vcmV0dXJuIHgqeSBmb3IgYmlnSW50cyB4IGFuZCB5LiBUaGlzIGlzIGZhc3RlciB3aGVuIHk8eC5cbmZ1bmN0aW9uIG11bHQoeCx5KSB7XG4gIHZhciBhbnM9ZXhwYW5kKHgseC5sZW5ndGgreS5sZW5ndGgpO1xuICBtdWx0XyhhbnMseSk7XG4gIHJldHVybiB0cmltKGFucywxKTtcbn1cblxuLy9yZXR1cm4gKHgqKnkgbW9kIG4pIHdoZXJlIHgseSxuIGFyZSBiaWdJbnRzIGFuZCAqKiBpcyBleHBvbmVudGlhdGlvbi4gIDAqKjA9MS4gRmFzdGVyIGZvciBvZGQgbi5cbmZ1bmN0aW9uIHBvd01vZCh4LHksbikge1xuICB2YXIgYW5zPWV4cGFuZCh4LG4ubGVuZ3RoKTtcbiAgcG93TW9kXyhhbnMsdHJpbSh5LDIpLHRyaW0obiwyKSwwKTsgIC8vdGhpcyBzaG91bGQgd29yayB3aXRob3V0IHRoZSB0cmltLCBidXQgZG9lc24ndFxuICByZXR1cm4gdHJpbShhbnMsMSk7XG59XG5cbi8vcmV0dXJuICh4LXkpIGZvciBiaWdJbnRzIHggYW5kIHkuICBOZWdhdGl2ZSBhbnN3ZXJzIHdpbGwgYmUgMnMgY29tcGxlbWVudFxuZnVuY3Rpb24gc3ViKHgseSkge1xuICB2YXIgYW5zPWV4cGFuZCh4LCh4Lmxlbmd0aD55Lmxlbmd0aCA/IHgubGVuZ3RoKzEgOiB5Lmxlbmd0aCsxKSk7XG4gIHN1Yl8oYW5zLHkpO1xuICByZXR1cm4gdHJpbShhbnMsMSk7XG59XG5cbi8vcmV0dXJuICh4K3kpIGZvciBiaWdJbnRzIHggYW5kIHkuXG5mdW5jdGlvbiBhZGQoeCx5KSB7XG4gIHZhciBhbnM9ZXhwYW5kKHgsKHgubGVuZ3RoPnkubGVuZ3RoID8geC5sZW5ndGgrMSA6IHkubGVuZ3RoKzEpKTtcbiAgYWRkXyhhbnMseSk7XG4gIHJldHVybiB0cmltKGFucywxKTtcbn1cblxuLy9yZXR1cm4gKHgqKigtMSkgbW9kIG4pIGZvciBiaWdJbnRzIHggYW5kIG4uICBJZiBubyBpbnZlcnNlIGV4aXN0cywgaXQgcmV0dXJucyBudWxsXG5mdW5jdGlvbiBpbnZlcnNlTW9kKHgsbikge1xuICB2YXIgYW5zPWV4cGFuZCh4LG4ubGVuZ3RoKTtcbiAgdmFyIHM7XG4gIHM9aW52ZXJzZU1vZF8oYW5zLG4pO1xuICByZXR1cm4gcyA/IHRyaW0oYW5zLDEpIDogbnVsbDtcbn1cblxuLy9yZXR1cm4gKHgqeSBtb2QgbikgZm9yIGJpZ0ludHMgeCx5LG4uICBGb3IgZ3JlYXRlciBzcGVlZCwgbGV0IHk8eC5cbmZ1bmN0aW9uIG11bHRNb2QoeCx5LG4pIHtcbiAgdmFyIGFucz1leHBhbmQoeCxuLmxlbmd0aCk7XG4gIG11bHRNb2RfKGFucyx5LG4pO1xuICByZXR1cm4gdHJpbShhbnMsMSk7XG59XG5cbi8vZ2VuZXJhdGUgYSBrLWJpdCB0cnVlIHJhbmRvbSBwcmltZSB1c2luZyBNYXVyZXIncyBhbGdvcml0aG0sXG4vL2FuZCBwdXQgaXQgaW50byBhbnMuICBUaGUgYmlnSW50IGFucyBtdXN0IGJlIGxhcmdlIGVub3VnaCB0byBob2xkIGl0LlxuZnVuY3Rpb24gcmFuZFRydWVQcmltZV8oYW5zLGspIHtcbiAgdmFyIGMsbSxwbSxkZCxqLHIsQixkaXZpc2libGUseix6eixyZWNTaXplO1xuXG4gIGlmIChwcmltZXMubGVuZ3RoPT0wKVxuICAgIHByaW1lcz1maW5kUHJpbWVzKDMwMDAwKTsgIC8vY2hlY2sgZm9yIGRpdmlzaWJpbGl0eSBieSBwcmltZXMgPD0zMDAwMFxuXG4gIGlmIChwb3dzLmxlbmd0aD09MCkge1xuICAgIHBvd3M9bmV3IEFycmF5KDUxMik7XG4gICAgZm9yIChqPTA7ajw1MTI7aisrKSB7XG4gICAgICBwb3dzW2pdPU1hdGgucG93KDIsai81MTEuLTEuKTtcbiAgICB9XG4gIH1cblxuICAvL2MgYW5kIG0gc2hvdWxkIGJlIHR1bmVkIGZvciBhIHBhcnRpY3VsYXIgbWFjaGluZSBhbmQgdmFsdWUgb2YgaywgdG8gbWF4aW1pemUgc3BlZWRcbiAgYz0wLjE7ICAvL2M9MC4xIGluIEhBQ1xuICBtPTIwOyAgIC8vZ2VuZXJhdGUgdGhpcyBrLWJpdCBudW1iZXIgYnkgZmlyc3QgcmVjdXJzaXZlbHkgZ2VuZXJhdGluZyBhIG51bWJlciB0aGF0IGhhcyBiZXR3ZWVuIGsvMiBhbmQgay1tIGJpdHNcbiAgcmVjTGltaXQ9MjA7IC8vc3RvcCByZWN1cnNpb24gd2hlbiBrIDw9cmVjTGltaXQuICBNdXN0IGhhdmUgcmVjTGltaXQgPj0gMlxuXG4gIGlmIChzX2kyLmxlbmd0aCE9YW5zLmxlbmd0aCkge1xuICAgIHNfaTI9ZHVwKGFucyk7XG4gICAgc19SID1kdXAoYW5zKTtcbiAgICBzX24xPWR1cChhbnMpO1xuICAgIHNfcjI9ZHVwKGFucyk7XG4gICAgc19kID1kdXAoYW5zKTtcbiAgICBzX3gxPWR1cChhbnMpO1xuICAgIHNfeDI9ZHVwKGFucyk7XG4gICAgc19iID1kdXAoYW5zKTtcbiAgICBzX24gPWR1cChhbnMpO1xuICAgIHNfaSA9ZHVwKGFucyk7XG4gICAgc19ybT1kdXAoYW5zKTtcbiAgICBzX3EgPWR1cChhbnMpO1xuICAgIHNfYSA9ZHVwKGFucyk7XG4gICAgc19hYT1kdXAoYW5zKTtcbiAgfVxuXG4gIGlmIChrIDw9IHJlY0xpbWl0KSB7ICAvL2dlbmVyYXRlIHNtYWxsIHJhbmRvbSBwcmltZXMgYnkgdHJpYWwgZGl2aXNpb24gdXAgdG8gaXRzIHNxdWFyZSByb290XG4gICAgcG09KDE8PCgoaysyKT4+MSkpLTE7IC8vcG0gaXMgYmluYXJ5IG51bWJlciB3aXRoIGFsbCBvbmVzLCBqdXN0IG92ZXIgc3FydCgyXmspXG4gICAgY29weUludF8oYW5zLDApO1xuICAgIGZvciAoZGQ9MTtkZDspIHtcbiAgICAgIGRkPTA7XG4gICAgICBhbnNbMF09IDEgfCAoMTw8KGstMSkpIHwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKigxPDxrKSk7ICAvL3JhbmRvbSwgay1iaXQsIG9kZCBpbnRlZ2VyLCB3aXRoIG1zYiAxXG4gICAgICBmb3IgKGo9MTsoajxwcmltZXMubGVuZ3RoKSAmJiAoKHByaW1lc1tqXSZwbSk9PXByaW1lc1tqXSk7aisrKSB7IC8vdHJpYWwgZGl2aXNpb24gYnkgYWxsIHByaW1lcyAzLi4uc3FydCgyXmspXG4gICAgICAgIGlmICgwPT0oYW5zWzBdJXByaW1lc1tqXSkpIHtcbiAgICAgICAgICBkZD0xO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNhcnJ5XyhhbnMpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEI9YyprKms7ICAgIC8vdHJ5IHNtYWxsIHByaW1lcyB1cCB0byBCIChvciBhbGwgdGhlIHByaW1lc1tdIGFycmF5IGlmIHRoZSBsYXJnZXN0IGlzIGxlc3MgdGhhbiBCKS5cbiAgaWYgKGs+MiptKSAgLy9nZW5lcmF0ZSB0aGlzIGstYml0IG51bWJlciBieSBmaXJzdCByZWN1cnNpdmVseSBnZW5lcmF0aW5nIGEgbnVtYmVyIHRoYXQgaGFzIGJldHdlZW4gay8yIGFuZCBrLW0gYml0c1xuICAgIGZvciAocj0xOyBrLWsqcjw9bTsgKVxuICAgICAgcj1wb3dzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo1MTIpXTsgICAvL3I9TWF0aC5wb3coMixNYXRoLnJhbmRvbSgpLTEpO1xuICBlbHNlXG4gICAgcj0uNTtcblxuICAvL3NpbXVsYXRpb24gc3VnZ2VzdHMgdGhlIG1vcmUgY29tcGxleCBhbGdvcml0aG0gdXNpbmcgcj0uMzMzIGlzIG9ubHkgc2xpZ2h0bHkgZmFzdGVyLlxuXG4gIHJlY1NpemU9TWF0aC5mbG9vcihyKmspKzE7XG5cbiAgcmFuZFRydWVQcmltZV8oc19xLHJlY1NpemUpO1xuICBjb3B5SW50XyhzX2kyLDApO1xuICBzX2kyW01hdGguZmxvb3IoKGstMikvYnBlKV0gfD0gKDE8PCgoay0yKSVicGUpKTsgICAvL3NfaTI9Ml4oay0yKVxuICBkaXZpZGVfKHNfaTIsc19xLHNfaSxzX3JtKTsgICAgICAgICAgICAgICAgICAgICAgICAvL3NfaT1mbG9vcigoMl4oay0xKSkvKDJxKSlcblxuICB6PWJpdFNpemUoc19pKTtcblxuICBmb3IgKDs7KSB7XG4gICAgZm9yICg7OykgeyAgLy9nZW5lcmF0ZSB6LWJpdCBudW1iZXJzIHVudGlsIG9uZSBmYWxscyBpbiB0aGUgcmFuZ2UgWzAsc19pLTFdXG4gICAgICByYW5kQmlnSW50XyhzX1IseiwwKTtcbiAgICAgIGlmIChncmVhdGVyKHNfaSxzX1IpKVxuICAgICAgICBicmVhaztcbiAgICB9ICAgICAgICAgICAgICAgIC8vbm93IHNfUiBpcyBpbiB0aGUgcmFuZ2UgWzAsc19pLTFdXG4gICAgYWRkSW50XyhzX1IsMSk7ICAvL25vdyBzX1IgaXMgaW4gdGhlIHJhbmdlIFsxLHNfaV1cbiAgICBhZGRfKHNfUixzX2kpOyAgIC8vbm93IHNfUiBpcyBpbiB0aGUgcmFuZ2UgW3NfaSsxLDIqc19pXVxuXG4gICAgY29weV8oc19uLHNfcSk7XG4gICAgbXVsdF8oc19uLHNfUik7XG4gICAgbXVsdEludF8oc19uLDIpO1xuICAgIGFkZEludF8oc19uLDEpOyAgICAvL3Nfbj0yKnNfUipzX3ErMVxuXG4gICAgY29weV8oc19yMixzX1IpO1xuICAgIG11bHRJbnRfKHNfcjIsMik7ICAvL3NfcjI9MipzX1JcblxuICAgIC8vY2hlY2sgc19uIGZvciBkaXZpc2liaWxpdHkgYnkgc21hbGwgcHJpbWVzIHVwIHRvIEJcbiAgICBmb3IgKGRpdmlzaWJsZT0wLGo9MDsgKGo8cHJpbWVzLmxlbmd0aCkgJiYgKHByaW1lc1tqXTxCKTsgaisrKVxuICAgICAgaWYgKG1vZEludChzX24scHJpbWVzW2pdKT09MCAmJiAhZXF1YWxzSW50KHNfbixwcmltZXNbal0pKSB7XG4gICAgICAgIGRpdmlzaWJsZT0xO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgIGlmICghZGl2aXNpYmxlKSAgICAvL2lmIGl0IHBhc3NlcyBzbWFsbCBwcmltZXMgY2hlY2ssIHRoZW4gdHJ5IGEgc2luZ2xlIE1pbGxlci1SYWJpbiBiYXNlIDJcbiAgICAgIGlmICghbWlsbGVyUmFiaW5JbnQoc19uLDIpKSAvL3RoaXMgbGluZSByZXByZXNlbnRzIDc1JSBvZiB0aGUgdG90YWwgcnVudGltZSBmb3IgcmFuZFRydWVQcmltZV9cbiAgICAgICAgZGl2aXNpYmxlPTE7XG5cbiAgICBpZiAoIWRpdmlzaWJsZSkgeyAgLy9pZiBpdCBwYXNzZXMgdGhhdCB0ZXN0LCBjb250aW51ZSBjaGVja2luZyBzX25cbiAgICAgIGFkZEludF8oc19uLC0zKTtcbiAgICAgIGZvciAoaj1zX24ubGVuZ3RoLTE7KHNfbltqXT09MCkgJiYgKGo+MCk7IGotLSk7ICAvL3N0cmlwIGxlYWRpbmcgemVyb3NcbiAgICAgIGZvciAoeno9MCx3PXNfbltqXTsgdzsgKHc+Pj0xKSx6eisrKTtcbiAgICAgIHp6Kz1icGUqajsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8veno9bnVtYmVyIG9mIGJpdHMgaW4gc19uLCBpZ25vcmluZyBsZWFkaW5nIHplcm9zXG4gICAgICBmb3IgKDs7KSB7ICAvL2dlbmVyYXRlIHotYml0IG51bWJlcnMgdW50aWwgb25lIGZhbGxzIGluIHRoZSByYW5nZSBbMCxzX24tMV1cbiAgICAgICAgcmFuZEJpZ0ludF8oc19hLHp6LDApO1xuICAgICAgICBpZiAoZ3JlYXRlcihzX24sc19hKSlcbiAgICAgICAgICBicmVhaztcbiAgICAgIH0gICAgICAgICAgICAgICAgLy9ub3cgc19hIGlzIGluIHRoZSByYW5nZSBbMCxzX24tMV1cbiAgICAgIGFkZEludF8oc19uLDMpOyAgLy9ub3cgc19hIGlzIGluIHRoZSByYW5nZSBbMCxzX24tNF1cbiAgICAgIGFkZEludF8oc19hLDIpOyAgLy9ub3cgc19hIGlzIGluIHRoZSByYW5nZSBbMixzX24tMl1cbiAgICAgIGNvcHlfKHNfYixzX2EpO1xuICAgICAgY29weV8oc19uMSxzX24pO1xuICAgICAgYWRkSW50XyhzX24xLC0xKTtcbiAgICAgIHBvd01vZF8oc19iLHNfbjEsc19uKTsgICAvL3NfYj1zX2FeKHNfbi0xKSBtb2R1bG8gc19uXG4gICAgICBhZGRJbnRfKHNfYiwtMSk7XG4gICAgICBpZiAoaXNaZXJvKHNfYikpIHtcbiAgICAgICAgY29weV8oc19iLHNfYSk7XG4gICAgICAgIHBvd01vZF8oc19iLHNfcjIsc19uKTtcbiAgICAgICAgYWRkSW50XyhzX2IsLTEpO1xuICAgICAgICBjb3B5XyhzX2FhLHNfbik7XG4gICAgICAgIGNvcHlfKHNfZCxzX2IpO1xuICAgICAgICBHQ0RfKHNfZCxzX24pOyAgLy9pZiBzX2IgYW5kIHNfbiBhcmUgcmVsYXRpdmVseSBwcmltZSwgdGhlbiBzX24gaXMgYSBwcmltZVxuICAgICAgICBpZiAoZXF1YWxzSW50KHNfZCwxKSkge1xuICAgICAgICAgIGNvcHlfKGFucyxzX2FhKTtcbiAgICAgICAgICByZXR1cm47ICAgICAvL2lmIHdlJ3ZlIG1hZGUgaXQgdGhpcyBmYXIsIHRoZW4gc19uIGlzIGFic29sdXRlbHkgZ3VhcmFudGVlZCB0byBiZSBwcmltZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vUmV0dXJuIGFuIG4tYml0IHJhbmRvbSBCaWdJbnQgKG4+PTEpLiAgSWYgcz0xLCB0aGVuIHRoZSBtb3N0IHNpZ25pZmljYW50IG9mIHRob3NlIG4gYml0cyBpcyBzZXQgdG8gMS5cbmZ1bmN0aW9uIHJhbmRCaWdJbnQobixzKSB7XG4gIHZhciBhLGI7XG4gIGE9TWF0aC5mbG9vcigobi0xKS9icGUpKzI7IC8vIyBhcnJheSBlbGVtZW50cyB0byBob2xkIHRoZSBCaWdJbnQgd2l0aCBhIGxlYWRpbmcgMCBlbGVtZW50XG4gIGI9aW50MmJpZ0ludCgwLDAsYSk7XG4gIHJhbmRCaWdJbnRfKGIsbixzKTtcbiAgcmV0dXJuIGI7XG59XG5cbi8vU2V0IGIgdG8gYW4gbi1iaXQgcmFuZG9tIEJpZ0ludC4gIElmIHM9MSwgdGhlbiB0aGUgbW9zdCBzaWduaWZpY2FudCBvZiB0aG9zZSBuIGJpdHMgaXMgc2V0IHRvIDEuXG4vL0FycmF5IGIgbXVzdCBiZSBiaWcgZW5vdWdoIHRvIGhvbGQgdGhlIHJlc3VsdC4gTXVzdCBoYXZlIG4+PTFcbmZ1bmN0aW9uIHJhbmRCaWdJbnRfKGIsbixzKSB7XG4gIHZhciBpLGE7XG4gIGZvciAoaT0wO2k8Yi5sZW5ndGg7aSsrKVxuICAgIGJbaV09MDtcbiAgYT1NYXRoLmZsb29yKChuLTEpL2JwZSkrMTsgLy8jIGFycmF5IGVsZW1lbnRzIHRvIGhvbGQgdGhlIEJpZ0ludFxuICBmb3IgKGk9MDtpPGE7aSsrKSB7XG4gICAgYltpXT1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKDE8PChicGUtMSkpKTtcbiAgfVxuICBiW2EtMV0gJj0gKDI8PCgobi0xKSVicGUpKS0xO1xuICBpZiAocz09MSlcbiAgICBiW2EtMV0gfD0gKDE8PCgobi0xKSVicGUpKTtcbn1cblxuLy9SZXR1cm4gdGhlIGdyZWF0ZXN0IGNvbW1vbiBkaXZpc29yIG9mIGJpZ0ludHMgeCBhbmQgeSAoZWFjaCB3aXRoIHNhbWUgbnVtYmVyIG9mIGVsZW1lbnRzKS5cbmZ1bmN0aW9uIEdDRCh4LHkpIHtcbiAgdmFyIHhjLHljO1xuICB4Yz1kdXAoeCk7XG4gIHljPWR1cCh5KTtcbiAgR0NEXyh4Yyx5Yyk7XG4gIHJldHVybiB4Yztcbn1cblxuLy9zZXQgeCB0byB0aGUgZ3JlYXRlc3QgY29tbW9uIGRpdmlzb3Igb2YgYmlnSW50cyB4IGFuZCB5IChlYWNoIHdpdGggc2FtZSBudW1iZXIgb2YgZWxlbWVudHMpLlxuLy95IGlzIGRlc3Ryb3llZC5cbmZ1bmN0aW9uIEdDRF8oeCx5KSB7XG4gIHZhciBpLHhwLHlwLEEsQixDLEQscSxzaW5nO1xuICBpZiAoVC5sZW5ndGghPXgubGVuZ3RoKVxuICAgIFQ9ZHVwKHgpO1xuXG4gIHNpbmc9MTtcbiAgd2hpbGUgKHNpbmcpIHsgLy93aGlsZSB5IGhhcyBub256ZXJvIGVsZW1lbnRzIG90aGVyIHRoYW4geVswXVxuICAgIHNpbmc9MDtcbiAgICBmb3IgKGk9MTtpPHkubGVuZ3RoO2krKykgLy9jaGVjayBpZiB5IGhhcyBub256ZXJvIGVsZW1lbnRzIG90aGVyIHRoYW4gMFxuICAgICAgaWYgKHlbaV0pIHtcbiAgICAgICAgc2luZz0xO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICBpZiAoIXNpbmcpIGJyZWFrOyAvL3F1aXQgd2hlbiB5IGFsbCB6ZXJvIGVsZW1lbnRzIGV4Y2VwdCBwb3NzaWJseSB5WzBdXG5cbiAgICBmb3IgKGk9eC5sZW5ndGg7IXhbaV0gJiYgaT49MDtpLS0pOyAgLy9maW5kIG1vc3Qgc2lnbmlmaWNhbnQgZWxlbWVudCBvZiB4XG4gICAgeHA9eFtpXTtcbiAgICB5cD15W2ldO1xuICAgIEE9MTsgQj0wOyBDPTA7IEQ9MTtcbiAgICB3aGlsZSAoKHlwK0MpICYmICh5cCtEKSkge1xuICAgICAgcSA9TWF0aC5mbG9vcigoeHArQSkvKHlwK0MpKTtcbiAgICAgIHFwPU1hdGguZmxvb3IoKHhwK0IpLyh5cCtEKSk7XG4gICAgICBpZiAocSE9cXApXG4gICAgICAgIGJyZWFrO1xuICAgICAgdD0gQS1xKkM7ICAgQT1DOyAgIEM9dDsgICAgLy8gIGRvIChBLEIseHAsIEMsRCx5cCkgPSAoQyxELHlwLCBBLEIseHApIC0gcSooMCwwLDAsIEMsRCx5cClcbiAgICAgIHQ9IEItcSpEOyAgIEI9RDsgICBEPXQ7XG4gICAgICB0PXhwLXEqeXA7IHhwPXlwOyB5cD10O1xuICAgIH1cbiAgICBpZiAoQikge1xuICAgICAgY29weV8oVCx4KTtcbiAgICAgIGxpbkNvbWJfKHgseSxBLEIpOyAvL3g9QSp4K0IqeVxuICAgICAgbGluQ29tYl8oeSxULEQsQyk7IC8veT1EKnkrQypUXG4gICAgfSBlbHNlIHtcbiAgICAgIG1vZF8oeCx5KTtcbiAgICAgIGNvcHlfKFQseCk7XG4gICAgICBjb3B5Xyh4LHkpO1xuICAgICAgY29weV8oeSxUKTtcbiAgICB9XG4gIH1cbiAgaWYgKHlbMF09PTApXG4gICAgcmV0dXJuO1xuICB0PW1vZEludCh4LHlbMF0pO1xuICBjb3B5SW50Xyh4LHlbMF0pO1xuICB5WzBdPXQ7XG4gIHdoaWxlICh5WzBdKSB7XG4gICAgeFswXSU9eVswXTtcbiAgICB0PXhbMF07IHhbMF09eVswXTsgeVswXT10O1xuICB9XG59XG5cbi8vZG8geD14KiooLTEpIG1vZCBuLCBmb3IgYmlnSW50cyB4IGFuZCBuLlxuLy9JZiBubyBpbnZlcnNlIGV4aXN0cywgaXQgc2V0cyB4IHRvIHplcm8gYW5kIHJldHVybnMgMCwgZWxzZSBpdCByZXR1cm5zIDEuXG4vL1RoZSB4IGFycmF5IG11c3QgYmUgYXQgbGVhc3QgYXMgbGFyZ2UgYXMgdGhlIG4gYXJyYXkuXG5mdW5jdGlvbiBpbnZlcnNlTW9kXyh4LG4pIHtcbiAgdmFyIGs9MSsyKk1hdGgubWF4KHgubGVuZ3RoLG4ubGVuZ3RoKTtcblxuICBpZighKHhbMF0mMSkgICYmICEoblswXSYxKSkgeyAgLy9pZiBib3RoIGlucHV0cyBhcmUgZXZlbiwgdGhlbiBpbnZlcnNlIGRvZXNuJ3QgZXhpc3RcbiAgICBjb3B5SW50Xyh4LDApO1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgaWYgKGVnX3UubGVuZ3RoIT1rKSB7XG4gICAgZWdfdT1uZXcgQXJyYXkoayk7XG4gICAgZWdfdj1uZXcgQXJyYXkoayk7XG4gICAgZWdfQT1uZXcgQXJyYXkoayk7XG4gICAgZWdfQj1uZXcgQXJyYXkoayk7XG4gICAgZWdfQz1uZXcgQXJyYXkoayk7XG4gICAgZWdfRD1uZXcgQXJyYXkoayk7XG4gIH1cblxuICBjb3B5XyhlZ191LHgpO1xuICBjb3B5XyhlZ192LG4pO1xuICBjb3B5SW50XyhlZ19BLDEpO1xuICBjb3B5SW50XyhlZ19CLDApO1xuICBjb3B5SW50XyhlZ19DLDApO1xuICBjb3B5SW50XyhlZ19ELDEpO1xuICBmb3IgKDs7KSB7XG4gICAgd2hpbGUoIShlZ191WzBdJjEpKSB7ICAvL3doaWxlIGVnX3UgaXMgZXZlblxuICAgICAgaGFsdmVfKGVnX3UpO1xuICAgICAgaWYgKCEoZWdfQVswXSYxKSAmJiAhKGVnX0JbMF0mMSkpIHsgLy9pZiBlZ19BPT1lZ19CPT0wIG1vZCAyXG4gICAgICAgIGhhbHZlXyhlZ19BKTtcbiAgICAgICAgaGFsdmVfKGVnX0IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWRkXyhlZ19BLG4pOyAgaGFsdmVfKGVnX0EpO1xuICAgICAgICBzdWJfKGVnX0IseCk7ICBoYWx2ZV8oZWdfQik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgd2hpbGUgKCEoZWdfdlswXSYxKSkgeyAgLy93aGlsZSBlZ192IGlzIGV2ZW5cbiAgICAgIGhhbHZlXyhlZ192KTtcbiAgICAgIGlmICghKGVnX0NbMF0mMSkgJiYgIShlZ19EWzBdJjEpKSB7IC8vaWYgZWdfQz09ZWdfRD09MCBtb2QgMlxuICAgICAgICBoYWx2ZV8oZWdfQyk7XG4gICAgICAgIGhhbHZlXyhlZ19EKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZF8oZWdfQyxuKTsgIGhhbHZlXyhlZ19DKTtcbiAgICAgICAgc3ViXyhlZ19ELHgpOyAgaGFsdmVfKGVnX0QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghZ3JlYXRlcihlZ192LGVnX3UpKSB7IC8vZWdfdiA8PSBlZ191XG4gICAgICBzdWJfKGVnX3UsZWdfdik7XG4gICAgICBzdWJfKGVnX0EsZWdfQyk7XG4gICAgICBzdWJfKGVnX0IsZWdfRCk7XG4gICAgfSBlbHNlIHsgICAgICAgICAgICAgICAgICAgLy9lZ192ID4gZWdfdVxuICAgICAgc3ViXyhlZ192LGVnX3UpO1xuICAgICAgc3ViXyhlZ19DLGVnX0EpO1xuICAgICAgc3ViXyhlZ19ELGVnX0IpO1xuICAgIH1cblxuICAgIGlmIChlcXVhbHNJbnQoZWdfdSwwKSkge1xuICAgICAgd2hpbGUgKG5lZ2F0aXZlKGVnX0MpKSAvL21ha2Ugc3VyZSBhbnN3ZXIgaXMgbm9ubmVnYXRpdmVcbiAgICAgICAgYWRkXyhlZ19DLG4pO1xuICAgICAgY29weV8oeCxlZ19DKTtcblxuICAgICAgaWYgKCFlcXVhbHNJbnQoZWdfdiwxKSkgeyAvL2lmIEdDRF8oeCxuKSE9MSwgdGhlbiB0aGVyZSBpcyBubyBpbnZlcnNlXG4gICAgICAgIGNvcHlJbnRfKHgsMCk7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICB9XG59XG5cbi8vcmV0dXJuIHgqKigtMSkgbW9kIG4sIGZvciBpbnRlZ2VycyB4IGFuZCBuLiAgUmV0dXJuIDAgaWYgdGhlcmUgaXMgbm8gaW52ZXJzZVxuZnVuY3Rpb24gaW52ZXJzZU1vZEludCh4LG4pIHtcbiAgdmFyIGE9MSxiPTAsdDtcbiAgZm9yICg7Oykge1xuICAgIGlmICh4PT0xKSByZXR1cm4gYTtcbiAgICBpZiAoeD09MCkgcmV0dXJuIDA7XG4gICAgYi09YSpNYXRoLmZsb29yKG4veCk7XG4gICAgbiU9eDtcblxuICAgIGlmIChuPT0xKSByZXR1cm4gYjsgLy90byBhdm9pZCBuZWdhdGl2ZXMsIGNoYW5nZSB0aGlzIGIgdG8gbi1iLCBhbmQgZWFjaCAtPSB0byArPVxuICAgIGlmIChuPT0wKSByZXR1cm4gMDtcbiAgICBhLT1iKk1hdGguZmxvb3IoeC9uKTtcbiAgICB4JT1uO1xuICB9XG59XG5cbi8vdGhpcyBkZXByZWNhdGVkIGZ1bmN0aW9uIGlzIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IG9ubHkuXG5mdW5jdGlvbiBpbnZlcnNlTW9kSW50Xyh4LG4pIHtcbiAgIHJldHVybiBpbnZlcnNlTW9kSW50KHgsbik7XG59XG5cblxuLy9HaXZlbiBwb3NpdGl2ZSBiaWdJbnRzIHggYW5kIHksIGNoYW5nZSB0aGUgYmlnaW50cyB2LCBhLCBhbmQgYiB0byBwb3NpdGl2ZSBiaWdJbnRzIHN1Y2ggdGhhdDpcbi8vICAgICB2ID0gR0NEXyh4LHkpID0gYSp4LWIqeVxuLy9UaGUgYmlnSW50cyB2LCBhLCBiLCBtdXN0IGhhdmUgZXhhY3RseSBhcyBtYW55IGVsZW1lbnRzIGFzIHRoZSBsYXJnZXIgb2YgeCBhbmQgeS5cbmZ1bmN0aW9uIGVHQ0RfKHgseSx2LGEsYikge1xuICB2YXIgZz0wO1xuICB2YXIgaz1NYXRoLm1heCh4Lmxlbmd0aCx5Lmxlbmd0aCk7XG4gIGlmIChlZ191Lmxlbmd0aCE9aykge1xuICAgIGVnX3U9bmV3IEFycmF5KGspO1xuICAgIGVnX0E9bmV3IEFycmF5KGspO1xuICAgIGVnX0I9bmV3IEFycmF5KGspO1xuICAgIGVnX0M9bmV3IEFycmF5KGspO1xuICAgIGVnX0Q9bmV3IEFycmF5KGspO1xuICB9XG4gIHdoaWxlKCEoeFswXSYxKSAgJiYgISh5WzBdJjEpKSB7ICAvL3doaWxlIHggYW5kIHkgYm90aCBldmVuXG4gICAgaGFsdmVfKHgpO1xuICAgIGhhbHZlXyh5KTtcbiAgICBnKys7XG4gIH1cbiAgY29weV8oZWdfdSx4KTtcbiAgY29weV8odix5KTtcbiAgY29weUludF8oZWdfQSwxKTtcbiAgY29weUludF8oZWdfQiwwKTtcbiAgY29weUludF8oZWdfQywwKTtcbiAgY29weUludF8oZWdfRCwxKTtcbiAgZm9yICg7Oykge1xuICAgIHdoaWxlKCEoZWdfdVswXSYxKSkgeyAgLy93aGlsZSB1IGlzIGV2ZW5cbiAgICAgIGhhbHZlXyhlZ191KTtcbiAgICAgIGlmICghKGVnX0FbMF0mMSkgJiYgIShlZ19CWzBdJjEpKSB7IC8vaWYgQT09Qj09MCBtb2QgMlxuICAgICAgICBoYWx2ZV8oZWdfQSk7XG4gICAgICAgIGhhbHZlXyhlZ19CKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZF8oZWdfQSx5KTsgIGhhbHZlXyhlZ19BKTtcbiAgICAgICAgc3ViXyhlZ19CLHgpOyAgaGFsdmVfKGVnX0IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHdoaWxlICghKHZbMF0mMSkpIHsgIC8vd2hpbGUgdiBpcyBldmVuXG4gICAgICBoYWx2ZV8odik7XG4gICAgICBpZiAoIShlZ19DWzBdJjEpICYmICEoZWdfRFswXSYxKSkgeyAvL2lmIEM9PUQ9PTAgbW9kIDJcbiAgICAgICAgaGFsdmVfKGVnX0MpO1xuICAgICAgICBoYWx2ZV8oZWdfRCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRfKGVnX0MseSk7ICBoYWx2ZV8oZWdfQyk7XG4gICAgICAgIHN1Yl8oZWdfRCx4KTsgIGhhbHZlXyhlZ19EKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWdyZWF0ZXIodixlZ191KSkgeyAvL3Y8PXVcbiAgICAgIHN1Yl8oZWdfdSx2KTtcbiAgICAgIHN1Yl8oZWdfQSxlZ19DKTtcbiAgICAgIHN1Yl8oZWdfQixlZ19EKTtcbiAgICB9IGVsc2UgeyAgICAgICAgICAgICAgICAvL3Y+dVxuICAgICAgc3ViXyh2LGVnX3UpO1xuICAgICAgc3ViXyhlZ19DLGVnX0EpO1xuICAgICAgc3ViXyhlZ19ELGVnX0IpO1xuICAgIH1cbiAgICBpZiAoZXF1YWxzSW50KGVnX3UsMCkpIHtcbiAgICAgIHdoaWxlIChuZWdhdGl2ZShlZ19DKSkgeyAgIC8vbWFrZSBzdXJlIGEgKEMpIGlzIG5vbm5lZ2F0aXZlXG4gICAgICAgIGFkZF8oZWdfQyx5KTtcbiAgICAgICAgc3ViXyhlZ19ELHgpO1xuICAgICAgfVxuICAgICAgbXVsdEludF8oZWdfRCwtMSk7ICAvLy9tYWtlIHN1cmUgYiAoRCkgaXMgbm9ubmVnYXRpdmVcbiAgICAgIGNvcHlfKGEsZWdfQyk7XG4gICAgICBjb3B5XyhiLGVnX0QpO1xuICAgICAgbGVmdFNoaWZ0Xyh2LGcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vaXMgYmlnSW50IHggbmVnYXRpdmU/XG5mdW5jdGlvbiBuZWdhdGl2ZSh4KSB7XG4gIHJldHVybiAoKHhbeC5sZW5ndGgtMV0+PihicGUtMSkpJjEpO1xufVxuXG5cbi8vaXMgKHggPDwgKHNoaWZ0KmJwZSkpID4geT9cbi8veCBhbmQgeSBhcmUgbm9ubmVnYXRpdmUgYmlnSW50c1xuLy9zaGlmdCBpcyBhIG5vbm5lZ2F0aXZlIGludGVnZXJcbmZ1bmN0aW9uIGdyZWF0ZXJTaGlmdCh4LHksc2hpZnQpIHtcbiAgdmFyIGksIGt4PXgubGVuZ3RoLCBreT15Lmxlbmd0aDtcbiAgaz0oKGt4K3NoaWZ0KTxreSkgPyAoa3grc2hpZnQpIDoga3k7XG4gIGZvciAoaT1reS0xLXNoaWZ0OyBpPGt4ICYmIGk+PTA7IGkrKylcbiAgICBpZiAoeFtpXT4wKVxuICAgICAgcmV0dXJuIDE7IC8vaWYgdGhlcmUgYXJlIG5vbnplcm9zIGluIHggdG8gdGhlIGxlZnQgb2YgdGhlIGZpcnN0IGNvbHVtbiBvZiB5LCB0aGVuIHggaXMgYmlnZ2VyXG4gIGZvciAoaT1reC0xK3NoaWZ0OyBpPGt5OyBpKyspXG4gICAgaWYgKHlbaV0+MClcbiAgICAgIHJldHVybiAwOyAvL2lmIHRoZXJlIGFyZSBub256ZXJvcyBpbiB5IHRvIHRoZSBsZWZ0IG9mIHRoZSBmaXJzdCBjb2x1bW4gb2YgeCwgdGhlbiB4IGlzIG5vdCBiaWdnZXJcbiAgZm9yIChpPWstMTsgaT49c2hpZnQ7IGktLSlcbiAgICBpZiAgICAgICh4W2ktc2hpZnRdPnlbaV0pIHJldHVybiAxO1xuICAgIGVsc2UgaWYgKHhbaS1zaGlmdF08eVtpXSkgcmV0dXJuIDA7XG4gIHJldHVybiAwO1xufVxuXG4vL2lzIHggPiB5PyAoeCBhbmQgeSBib3RoIG5vbm5lZ2F0aXZlKVxuZnVuY3Rpb24gZ3JlYXRlcih4LHkpIHtcbiAgdmFyIGk7XG4gIHZhciBrPSh4Lmxlbmd0aDx5Lmxlbmd0aCkgPyB4Lmxlbmd0aCA6IHkubGVuZ3RoO1xuXG4gIGZvciAoaT14Lmxlbmd0aDtpPHkubGVuZ3RoO2krKylcbiAgICBpZiAoeVtpXSlcbiAgICAgIHJldHVybiAwOyAgLy95IGhhcyBtb3JlIGRpZ2l0c1xuXG4gIGZvciAoaT15Lmxlbmd0aDtpPHgubGVuZ3RoO2krKylcbiAgICBpZiAoeFtpXSlcbiAgICAgIHJldHVybiAxOyAgLy94IGhhcyBtb3JlIGRpZ2l0c1xuXG4gIGZvciAoaT1rLTE7aT49MDtpLS0pXG4gICAgaWYgKHhbaV0+eVtpXSlcbiAgICAgIHJldHVybiAxO1xuICAgIGVsc2UgaWYgKHhbaV08eVtpXSlcbiAgICAgIHJldHVybiAwO1xuICByZXR1cm4gMDtcbn1cblxuLy9kaXZpZGUgeCBieSB5IGdpdmluZyBxdW90aWVudCBxIGFuZCByZW1haW5kZXIgci4gIChxPWZsb29yKHgveSksICByPXggbW9kIHkpLiAgQWxsIDQgYXJlIGJpZ2ludHMuXG4vL3ggbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBsZWFkaW5nIHplcm8gZWxlbWVudC5cbi8veSBtdXN0IGJlIG5vbnplcm8uXG4vL3EgYW5kIHIgbXVzdCBiZSBhcnJheXMgdGhhdCBhcmUgZXhhY3RseSB0aGUgc2FtZSBsZW5ndGggYXMgeC4gKE9yIHEgY2FuIGhhdmUgbW9yZSkuXG4vL011c3QgaGF2ZSB4Lmxlbmd0aCA+PSB5Lmxlbmd0aCA+PSAyLlxuZnVuY3Rpb24gZGl2aWRlXyh4LHkscSxyKSB7XG4gIHZhciBreCwga3k7XG4gIHZhciBpLGoseTEseTIsYyxhLGI7XG4gIGNvcHlfKHIseCk7XG4gIGZvciAoa3k9eS5sZW5ndGg7eVtreS0xXT09MDtreS0tKTsgLy9reSBpcyBudW1iZXIgb2YgZWxlbWVudHMgaW4geSwgbm90IGluY2x1ZGluZyBsZWFkaW5nIHplcm9zXG5cbiAgLy9ub3JtYWxpemU6IGVuc3VyZSB0aGUgbW9zdCBzaWduaWZpY2FudCBlbGVtZW50IG9mIHkgaGFzIGl0cyBoaWdoZXN0IGJpdCBzZXRcbiAgYj15W2t5LTFdO1xuICBmb3IgKGE9MDsgYjsgYSsrKVxuICAgIGI+Pj0xO1xuICBhPWJwZS1hOyAgLy9hIGlzIGhvdyBtYW55IGJpdHMgdG8gc2hpZnQgc28gdGhhdCB0aGUgaGlnaCBvcmRlciBiaXQgb2YgeSBpcyBsZWZ0bW9zdCBpbiBpdHMgYXJyYXkgZWxlbWVudFxuICBsZWZ0U2hpZnRfKHksYSk7ICAvL211bHRpcGx5IGJvdGggYnkgMTw8YSBub3csIHRoZW4gZGl2aWRlIGJvdGggYnkgdGhhdCBhdCB0aGUgZW5kXG4gIGxlZnRTaGlmdF8ocixhKTtcblxuICAvL1JvYiBWaXNzZXIgZGlzY292ZXJlZCBhIGJ1ZzogdGhlIGZvbGxvd2luZyBsaW5lIHdhcyBvcmlnaW5hbGx5IGp1c3QgYmVmb3JlIHRoZSBub3JtYWxpemF0aW9uLlxuICBmb3IgKGt4PXIubGVuZ3RoO3Jba3gtMV09PTAgJiYga3g+a3k7a3gtLSk7IC8va3ggaXMgbnVtYmVyIG9mIGVsZW1lbnRzIGluIG5vcm1hbGl6ZWQgeCwgbm90IGluY2x1ZGluZyBsZWFkaW5nIHplcm9zXG5cbiAgY29weUludF8ocSwwKTsgICAgICAgICAgICAgICAgICAgICAgLy8gcT0wXG4gIHdoaWxlICghZ3JlYXRlclNoaWZ0KHkscixreC1reSkpIHsgIC8vIHdoaWxlIChsZWZ0U2hpZnRfKHksa3gta3kpIDw9IHIpIHtcbiAgICBzdWJTaGlmdF8ocix5LGt4LWt5KTsgICAgICAgICAgICAgLy8gICByPXItbGVmdFNoaWZ0Xyh5LGt4LWt5KVxuICAgIHFba3gta3ldKys7ICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHFba3gta3ldKys7XG4gIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cblxuICBmb3IgKGk9a3gtMTsgaT49a3k7IGktLSkge1xuICAgIGlmIChyW2ldPT15W2t5LTFdKVxuICAgICAgcVtpLWt5XT1tYXNrO1xuICAgIGVsc2VcbiAgICAgIHFbaS1reV09TWF0aC5mbG9vcigocltpXSpyYWRpeCtyW2ktMV0pL3lba3ktMV0pO1xuXG4gICAgLy9UaGUgZm9sbG93aW5nIGZvcig7OykgbG9vcCBpcyBlcXVpdmFsZW50IHRvIHRoZSBjb21tZW50ZWQgd2hpbGUgbG9vcCxcbiAgICAvL2V4Y2VwdCB0aGF0IHRoZSB1bmNvbW1lbnRlZCB2ZXJzaW9uIGF2b2lkcyBvdmVyZmxvdy5cbiAgICAvL1RoZSBjb21tZW50ZWQgbG9vcCBjb21lcyBmcm9tIEhBQywgd2hpY2ggYXNzdW1lcyByWy0xXT09eVstMV09PTBcbiAgICAvLyAgd2hpbGUgKHFbaS1reV0qKHlba3ktMV0qcmFkaXgreVtreS0yXSkgPiByW2ldKnJhZGl4KnJhZGl4K3JbaS0xXSpyYWRpeCtyW2ktMl0pXG4gICAgLy8gICAgcVtpLWt5XS0tO1xuICAgIGZvciAoOzspIHtcbiAgICAgIHkyPShreT4xID8geVtreS0yXSA6IDApKnFbaS1reV07XG4gICAgICBjPXkyPj5icGU7XG4gICAgICB5Mj15MiAmIG1hc2s7XG4gICAgICB5MT1jK3FbaS1reV0qeVtreS0xXTtcbiAgICAgIGM9eTE+PmJwZTtcbiAgICAgIHkxPXkxICYgbWFzaztcblxuICAgICAgaWYgKGM9PXJbaV0gPyB5MT09cltpLTFdID8geTI+KGk+MSA/IHJbaS0yXSA6IDApIDogeTE+cltpLTFdIDogYz5yW2ldKVxuICAgICAgICBxW2kta3ldLS07XG4gICAgICBlbHNlXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGxpbkNvbWJTaGlmdF8ocix5LC1xW2kta3ldLGkta3kpOyAgICAvL3I9ci1xW2kta3ldKmxlZnRTaGlmdF8oeSxpLWt5KVxuICAgIGlmIChuZWdhdGl2ZShyKSkge1xuICAgICAgYWRkU2hpZnRfKHIseSxpLWt5KTsgICAgICAgICAvL3I9citsZWZ0U2hpZnRfKHksaS1reSlcbiAgICAgIHFbaS1reV0tLTtcbiAgICB9XG4gIH1cblxuICByaWdodFNoaWZ0Xyh5LGEpOyAgLy91bmRvIHRoZSBub3JtYWxpemF0aW9uIHN0ZXBcbiAgcmlnaHRTaGlmdF8ocixhKTsgIC8vdW5kbyB0aGUgbm9ybWFsaXphdGlvbiBzdGVwXG59XG5cbi8vZG8gY2FycmllcyBhbmQgYm9ycm93cyBzbyBlYWNoIGVsZW1lbnQgb2YgdGhlIGJpZ0ludCB4IGZpdHMgaW4gYnBlIGJpdHMuXG5mdW5jdGlvbiBjYXJyeV8oeCkge1xuICB2YXIgaSxrLGMsYjtcbiAgaz14Lmxlbmd0aDtcbiAgYz0wO1xuICBmb3IgKGk9MDtpPGs7aSsrKSB7XG4gICAgYys9eFtpXTtcbiAgICBiPTA7XG4gICAgaWYgKGM8MCkge1xuICAgICAgYj0tKGM+PmJwZSk7XG4gICAgICBjKz1iKnJhZGl4O1xuICAgIH1cbiAgICB4W2ldPWMgJiBtYXNrO1xuICAgIGM9KGM+PmJwZSktYjtcbiAgfVxufVxuXG4vL3JldHVybiB4IG1vZCBuIGZvciBiaWdJbnQgeCBhbmQgaW50ZWdlciBuLlxuZnVuY3Rpb24gbW9kSW50KHgsbikge1xuICB2YXIgaSxjPTA7XG4gIGZvciAoaT14Lmxlbmd0aC0xOyBpPj0wOyBpLS0pXG4gICAgYz0oYypyYWRpeCt4W2ldKSVuO1xuICByZXR1cm4gYztcbn1cblxuLy9jb252ZXJ0IHRoZSBpbnRlZ2VyIHQgaW50byBhIGJpZ0ludCB3aXRoIGF0IGxlYXN0IHRoZSBnaXZlbiBudW1iZXIgb2YgYml0cy5cbi8vdGhlIHJldHVybmVkIGFycmF5IHN0b3JlcyB0aGUgYmlnSW50IGluIGJwZS1iaXQgY2h1bmtzLCBsaXR0bGUgZW5kaWFuIChidWZmWzBdIGlzIGxlYXN0IHNpZ25pZmljYW50IHdvcmQpXG4vL1BhZCB0aGUgYXJyYXkgd2l0aCBsZWFkaW5nIHplcm9zIHNvIHRoYXQgaXQgaGFzIGF0IGxlYXN0IG1pblNpemUgZWxlbWVudHMuXG4vL1RoZXJlIHdpbGwgYWx3YXlzIGJlIGF0IGxlYXN0IG9uZSBsZWFkaW5nIDAgZWxlbWVudC5cbmZ1bmN0aW9uIGludDJiaWdJbnQodCxiaXRzLG1pblNpemUpIHtcbiAgdmFyIGksaztcbiAgaz1NYXRoLmNlaWwoYml0cy9icGUpKzE7XG4gIGs9bWluU2l6ZT5rID8gbWluU2l6ZSA6IGs7XG4gIGJ1ZmY9bmV3IEFycmF5KGspO1xuICBjb3B5SW50XyhidWZmLHQpO1xuICByZXR1cm4gYnVmZjtcbn1cblxuLy9yZXR1cm4gdGhlIGJpZ0ludCBnaXZlbiBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBpbiBhIGdpdmVuIGJhc2UuXG4vL1BhZCB0aGUgYXJyYXkgd2l0aCBsZWFkaW5nIHplcm9zIHNvIHRoYXQgaXQgaGFzIGF0IGxlYXN0IG1pblNpemUgZWxlbWVudHMuXG4vL0lmIGJhc2U9LTEsIHRoZW4gaXQgcmVhZHMgaW4gYSBzcGFjZS1zZXBhcmF0ZWQgbGlzdCBvZiBhcnJheSBlbGVtZW50cyBpbiBkZWNpbWFsLlxuLy9UaGUgYXJyYXkgd2lsbCBhbHdheXMgaGF2ZSBhdCBsZWFzdCBvbmUgbGVhZGluZyB6ZXJvLCB1bmxlc3MgYmFzZT0tMS5cbmZ1bmN0aW9uIHN0cjJiaWdJbnQocyxiYXNlLG1pblNpemUpIHtcbiAgdmFyIGQsIGksIGosIHgsIHksIGtrO1xuICB2YXIgaz1zLmxlbmd0aDtcbiAgaWYgKGJhc2U9PS0xKSB7IC8vY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgYXJyYXkgZWxlbWVudHMgaW4gZGVjaW1hbFxuICAgIHg9bmV3IEFycmF5KDApO1xuICAgIGZvciAoOzspIHtcbiAgICAgIHk9bmV3IEFycmF5KHgubGVuZ3RoKzEpO1xuICAgICAgZm9yIChpPTA7aTx4Lmxlbmd0aDtpKyspXG4gICAgICAgIHlbaSsxXT14W2ldO1xuICAgICAgeVswXT1wYXJzZUludChzLDEwKTtcbiAgICAgIHg9eTtcbiAgICAgIGQ9cy5pbmRleE9mKCcsJywwKTtcbiAgICAgIGlmIChkPDEpXG4gICAgICAgIGJyZWFrO1xuICAgICAgcz1zLnN1YnN0cmluZyhkKzEpO1xuICAgICAgaWYgKHMubGVuZ3RoPT0wKVxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKHgubGVuZ3RoPG1pblNpemUpIHtcbiAgICAgIHk9bmV3IEFycmF5KG1pblNpemUpO1xuICAgICAgY29weV8oeSx4KTtcbiAgICAgIHJldHVybiB5O1xuICAgIH1cbiAgICByZXR1cm4geDtcbiAgfVxuXG4gIHg9aW50MmJpZ0ludCgwLGJhc2UqaywwKTtcbiAgZm9yIChpPTA7aTxrO2krKykge1xuICAgIGQ9ZGlnaXRzU3RyLmluZGV4T2Yocy5zdWJzdHJpbmcoaSxpKzEpLDApO1xuICAgIGlmIChiYXNlPD0zNiAmJiBkPj0zNikgIC8vY29udmVydCBsb3dlcmNhc2UgdG8gdXBwZXJjYXNlIGlmIGJhc2U8PTM2XG4gICAgICBkLT0yNjtcbiAgICBpZiAoZD49YmFzZSB8fCBkPDApIHsgICAvL3N0b3AgYXQgZmlyc3QgaWxsZWdhbCBjaGFyYWN0ZXJcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBtdWx0SW50Xyh4LGJhc2UpO1xuICAgIGFkZEludF8oeCxkKTtcbiAgfVxuXG4gIGZvciAoaz14Lmxlbmd0aDtrPjAgJiYgIXhbay0xXTtrLS0pOyAvL3N0cmlwIG9mZiBsZWFkaW5nIHplcm9zXG4gIGs9bWluU2l6ZT5rKzEgPyBtaW5TaXplIDogaysxO1xuICB5PW5ldyBBcnJheShrKTtcbiAga2s9azx4Lmxlbmd0aCA/IGsgOiB4Lmxlbmd0aDtcbiAgZm9yIChpPTA7aTxraztpKyspXG4gICAgeVtpXT14W2ldO1xuICBmb3IgKDtpPGs7aSsrKVxuICAgIHlbaV09MDtcbiAgcmV0dXJuIHk7XG59XG5cbi8vaXMgYmlnaW50IHggZXF1YWwgdG8gaW50ZWdlciB5P1xuLy95IG11c3QgaGF2ZSBsZXNzIHRoYW4gYnBlIGJpdHNcbmZ1bmN0aW9uIGVxdWFsc0ludCh4LHkpIHtcbiAgdmFyIGk7XG4gIGlmICh4WzBdIT15KVxuICAgIHJldHVybiAwO1xuICBmb3IgKGk9MTtpPHgubGVuZ3RoO2krKylcbiAgICBpZiAoeFtpXSlcbiAgICAgIHJldHVybiAwO1xuICByZXR1cm4gMTtcbn1cblxuLy9hcmUgYmlnaW50cyB4IGFuZCB5IGVxdWFsP1xuLy90aGlzIHdvcmtzIGV2ZW4gaWYgeCBhbmQgeSBhcmUgZGlmZmVyZW50IGxlbmd0aHMgYW5kIGhhdmUgYXJiaXRyYXJpbHkgbWFueSBsZWFkaW5nIHplcm9zXG5mdW5jdGlvbiBlcXVhbHMoeCx5KSB7XG4gIHZhciBpO1xuICB2YXIgaz14Lmxlbmd0aDx5Lmxlbmd0aCA/IHgubGVuZ3RoIDogeS5sZW5ndGg7XG4gIGZvciAoaT0wO2k8aztpKyspXG4gICAgaWYgKHhbaV0hPXlbaV0pXG4gICAgICByZXR1cm4gMDtcbiAgaWYgKHgubGVuZ3RoPnkubGVuZ3RoKSB7XG4gICAgZm9yICg7aTx4Lmxlbmd0aDtpKyspXG4gICAgICBpZiAoeFtpXSlcbiAgICAgICAgcmV0dXJuIDA7XG4gIH0gZWxzZSB7XG4gICAgZm9yICg7aTx5Lmxlbmd0aDtpKyspXG4gICAgICBpZiAoeVtpXSlcbiAgICAgICAgcmV0dXJuIDA7XG4gIH1cbiAgcmV0dXJuIDE7XG59XG5cbi8vaXMgdGhlIGJpZ0ludCB4IGVxdWFsIHRvIHplcm8/XG5mdW5jdGlvbiBpc1plcm8oeCkge1xuICB2YXIgaTtcbiAgZm9yIChpPTA7aTx4Lmxlbmd0aDtpKyspXG4gICAgaWYgKHhbaV0pXG4gICAgICByZXR1cm4gMDtcbiAgcmV0dXJuIDE7XG59XG5cbi8vY29udmVydCBhIGJpZ0ludCBpbnRvIGEgc3RyaW5nIGluIGEgZ2l2ZW4gYmFzZSwgZnJvbSBiYXNlIDIgdXAgdG8gYmFzZSA5NS5cbi8vQmFzZSAtMSBwcmludHMgdGhlIGNvbnRlbnRzIG9mIHRoZSBhcnJheSByZXByZXNlbnRpbmcgdGhlIG51bWJlci5cbmZ1bmN0aW9uIGJpZ0ludDJzdHIoeCxiYXNlKSB7XG4gIHZhciBpLHQscz1cIlwiO1xuXG4gIGlmIChzNi5sZW5ndGghPXgubGVuZ3RoKVxuICAgIHM2PWR1cCh4KTtcbiAgZWxzZVxuICAgIGNvcHlfKHM2LHgpO1xuXG4gIGlmIChiYXNlPT0tMSkgeyAvL3JldHVybiB0aGUgbGlzdCBvZiBhcnJheSBjb250ZW50c1xuICAgIGZvciAoaT14Lmxlbmd0aC0xO2k+MDtpLS0pXG4gICAgICBzKz14W2ldKycsJztcbiAgICBzKz14WzBdO1xuICB9XG4gIGVsc2UgeyAvL3JldHVybiBpdCBpbiB0aGUgZ2l2ZW4gYmFzZVxuICAgIHdoaWxlICghaXNaZXJvKHM2KSkge1xuICAgICAgdD1kaXZJbnRfKHM2LGJhc2UpOyAgLy90PXM2ICUgYmFzZTsgczY9Zmxvb3IoczYvYmFzZSk7XG4gICAgICBzPWRpZ2l0c1N0ci5zdWJzdHJpbmcodCx0KzEpK3M7XG4gICAgfVxuICB9XG4gIGlmIChzLmxlbmd0aD09MClcbiAgICBzPVwiMFwiO1xuICByZXR1cm4gcztcbn1cblxuLy9yZXR1cm5zIGEgZHVwbGljYXRlIG9mIGJpZ0ludCB4XG5mdW5jdGlvbiBkdXAoeCkge1xuICB2YXIgaTtcbiAgYnVmZj1uZXcgQXJyYXkoeC5sZW5ndGgpO1xuICBjb3B5XyhidWZmLHgpO1xuICByZXR1cm4gYnVmZjtcbn1cblxuLy9kbyB4PXkgb24gYmlnSW50cyB4IGFuZCB5LiAgeCBtdXN0IGJlIGFuIGFycmF5IGF0IGxlYXN0IGFzIGJpZyBhcyB5IChub3QgY291bnRpbmcgdGhlIGxlYWRpbmcgemVyb3MgaW4geSkuXG5mdW5jdGlvbiBjb3B5Xyh4LHkpIHtcbiAgdmFyIGk7XG4gIHZhciBrPXgubGVuZ3RoPHkubGVuZ3RoID8geC5sZW5ndGggOiB5Lmxlbmd0aDtcbiAgZm9yIChpPTA7aTxrO2krKylcbiAgICB4W2ldPXlbaV07XG4gIGZvciAoaT1rO2k8eC5sZW5ndGg7aSsrKVxuICAgIHhbaV09MDtcbn1cblxuLy9kbyB4PXkgb24gYmlnSW50IHggYW5kIGludGVnZXIgeS5cbmZ1bmN0aW9uIGNvcHlJbnRfKHgsbikge1xuICB2YXIgaSxjO1xuICBmb3IgKGM9bixpPTA7aTx4Lmxlbmd0aDtpKyspIHtcbiAgICB4W2ldPWMgJiBtYXNrO1xuICAgIGM+Pj1icGU7XG4gIH1cbn1cblxuLy9kbyB4PXgrbiB3aGVyZSB4IGlzIGEgYmlnSW50IGFuZCBuIGlzIGFuIGludGVnZXIuXG4vL3ggbXVzdCBiZSBsYXJnZSBlbm91Z2ggdG8gaG9sZCB0aGUgcmVzdWx0LlxuZnVuY3Rpb24gYWRkSW50Xyh4LG4pIHtcbiAgdmFyIGksayxjLGI7XG4gIHhbMF0rPW47XG4gIGs9eC5sZW5ndGg7XG4gIGM9MDtcbiAgZm9yIChpPTA7aTxrO2krKykge1xuICAgIGMrPXhbaV07XG4gICAgYj0wO1xuICAgIGlmIChjPDApIHtcbiAgICAgIGI9LShjPj5icGUpO1xuICAgICAgYys9YipyYWRpeDtcbiAgICB9XG4gICAgeFtpXT1jICYgbWFzaztcbiAgICBjPShjPj5icGUpLWI7XG4gICAgaWYgKCFjKSByZXR1cm47IC8vc3RvcCBjYXJyeWluZyBhcyBzb29uIGFzIHRoZSBjYXJyeSBpcyB6ZXJvXG4gIH1cbn1cblxuLy9yaWdodCBzaGlmdCBiaWdJbnQgeCBieSBuIGJpdHMuICAwIDw9IG4gPCBicGUuXG5mdW5jdGlvbiByaWdodFNoaWZ0Xyh4LG4pIHtcbiAgdmFyIGk7XG4gIHZhciBrPU1hdGguZmxvb3Iobi9icGUpO1xuICBpZiAoaykge1xuICAgIGZvciAoaT0wO2k8eC5sZW5ndGgtaztpKyspIC8vcmlnaHQgc2hpZnQgeCBieSBrIGVsZW1lbnRzXG4gICAgICB4W2ldPXhbaStrXTtcbiAgICBmb3IgKDtpPHgubGVuZ3RoO2krKylcbiAgICAgIHhbaV09MDtcbiAgICBuJT1icGU7XG4gIH1cbiAgZm9yIChpPTA7aTx4Lmxlbmd0aC0xO2krKykge1xuICAgIHhbaV09bWFzayAmICgoeFtpKzFdPDwoYnBlLW4pKSB8ICh4W2ldPj5uKSk7XG4gIH1cbiAgeFtpXT4+PW47XG59XG5cbi8vZG8geD1mbG9vcih8eHwvMikqc2duKHgpIGZvciBiaWdJbnQgeCBpbiAyJ3MgY29tcGxlbWVudFxuZnVuY3Rpb24gaGFsdmVfKHgpIHtcbiAgdmFyIGk7XG4gIGZvciAoaT0wO2k8eC5sZW5ndGgtMTtpKyspIHtcbiAgICB4W2ldPW1hc2sgJiAoKHhbaSsxXTw8KGJwZS0xKSkgfCAoeFtpXT4+MSkpO1xuICB9XG4gIHhbaV09KHhbaV0+PjEpIHwgKHhbaV0gJiAocmFkaXg+PjEpKTsgIC8vbW9zdCBzaWduaWZpY2FudCBiaXQgc3RheXMgdGhlIHNhbWVcbn1cblxuLy9sZWZ0IHNoaWZ0IGJpZ0ludCB4IGJ5IG4gYml0cy5cbmZ1bmN0aW9uIGxlZnRTaGlmdF8oeCxuKSB7XG4gIHZhciBpO1xuICB2YXIgaz1NYXRoLmZsb29yKG4vYnBlKTtcbiAgaWYgKGspIHtcbiAgICBmb3IgKGk9eC5sZW5ndGg7IGk+PWs7IGktLSkgLy9sZWZ0IHNoaWZ0IHggYnkgayBlbGVtZW50c1xuICAgICAgeFtpXT14W2kta107XG4gICAgZm9yICg7aT49MDtpLS0pXG4gICAgICB4W2ldPTA7XG4gICAgbiU9YnBlO1xuICB9XG4gIGlmICghbilcbiAgICByZXR1cm47XG4gIGZvciAoaT14Lmxlbmd0aC0xO2k+MDtpLS0pIHtcbiAgICB4W2ldPW1hc2sgJiAoKHhbaV08PG4pIHwgKHhbaS0xXT4+KGJwZS1uKSkpO1xuICB9XG4gIHhbaV09bWFzayAmICh4W2ldPDxuKTtcbn1cblxuLy9kbyB4PXgqbiB3aGVyZSB4IGlzIGEgYmlnSW50IGFuZCBuIGlzIGFuIGludGVnZXIuXG4vL3ggbXVzdCBiZSBsYXJnZSBlbm91Z2ggdG8gaG9sZCB0aGUgcmVzdWx0LlxuZnVuY3Rpb24gbXVsdEludF8oeCxuKSB7XG4gIHZhciBpLGssYyxiO1xuICBpZiAoIW4pXG4gICAgcmV0dXJuO1xuICBrPXgubGVuZ3RoO1xuICBjPTA7XG4gIGZvciAoaT0wO2k8aztpKyspIHtcbiAgICBjKz14W2ldKm47XG4gICAgYj0wO1xuICAgIGlmIChjPDApIHtcbiAgICAgIGI9LShjPj5icGUpO1xuICAgICAgYys9YipyYWRpeDtcbiAgICB9XG4gICAgeFtpXT1jICYgbWFzaztcbiAgICBjPShjPj5icGUpLWI7XG4gIH1cbn1cblxuLy9kbyB4PWZsb29yKHgvbikgZm9yIGJpZ0ludCB4IGFuZCBpbnRlZ2VyIG4sIGFuZCByZXR1cm4gdGhlIHJlbWFpbmRlclxuZnVuY3Rpb24gZGl2SW50Xyh4LG4pIHtcbiAgdmFyIGkscj0wLHM7XG4gIGZvciAoaT14Lmxlbmd0aC0xO2k+PTA7aS0tKSB7XG4gICAgcz1yKnJhZGl4K3hbaV07XG4gICAgeFtpXT1NYXRoLmZsb29yKHMvbik7XG4gICAgcj1zJW47XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5cbi8vZG8gdGhlIGxpbmVhciBjb21iaW5hdGlvbiB4PWEqeCtiKnkgZm9yIGJpZ0ludHMgeCBhbmQgeSwgYW5kIGludGVnZXJzIGEgYW5kIGIuXG4vL3ggbXVzdCBiZSBsYXJnZSBlbm91Z2ggdG8gaG9sZCB0aGUgYW5zd2VyLlxuZnVuY3Rpb24gbGluQ29tYl8oeCx5LGEsYikge1xuICB2YXIgaSxjLGssa2s7XG4gIGs9eC5sZW5ndGg8eS5sZW5ndGggPyB4Lmxlbmd0aCA6IHkubGVuZ3RoO1xuICBraz14Lmxlbmd0aDtcbiAgZm9yIChjPTAsaT0wO2k8aztpKyspIHtcbiAgICBjKz1hKnhbaV0rYip5W2ldO1xuICAgIHhbaV09YyAmIG1hc2s7XG4gICAgYz4+PWJwZTtcbiAgfVxuICBmb3IgKGk9aztpPGtrO2krKykge1xuICAgIGMrPWEqeFtpXTtcbiAgICB4W2ldPWMgJiBtYXNrO1xuICAgIGM+Pj1icGU7XG4gIH1cbn1cblxuLy9kbyB0aGUgbGluZWFyIGNvbWJpbmF0aW9uIHg9YSp4K2IqKHk8PCh5cypicGUpKSBmb3IgYmlnSW50cyB4IGFuZCB5LCBhbmQgaW50ZWdlcnMgYSwgYiBhbmQgeXMuXG4vL3ggbXVzdCBiZSBsYXJnZSBlbm91Z2ggdG8gaG9sZCB0aGUgYW5zd2VyLlxuZnVuY3Rpb24gbGluQ29tYlNoaWZ0Xyh4LHksYix5cykge1xuICB2YXIgaSxjLGssa2s7XG4gIGs9eC5sZW5ndGg8eXMreS5sZW5ndGggPyB4Lmxlbmd0aCA6IHlzK3kubGVuZ3RoO1xuICBraz14Lmxlbmd0aDtcbiAgZm9yIChjPTAsaT15cztpPGs7aSsrKSB7XG4gICAgYys9eFtpXStiKnlbaS15c107XG4gICAgeFtpXT1jICYgbWFzaztcbiAgICBjPj49YnBlO1xuICB9XG4gIGZvciAoaT1rO2MgJiYgaTxraztpKyspIHtcbiAgICBjKz14W2ldO1xuICAgIHhbaV09YyAmIG1hc2s7XG4gICAgYz4+PWJwZTtcbiAgfVxufVxuXG4vL2RvIHg9eCsoeTw8KHlzKmJwZSkpIGZvciBiaWdJbnRzIHggYW5kIHksIGFuZCBpbnRlZ2VycyBhLGIgYW5kIHlzLlxuLy94IG11c3QgYmUgbGFyZ2UgZW5vdWdoIHRvIGhvbGQgdGhlIGFuc3dlci5cbmZ1bmN0aW9uIGFkZFNoaWZ0Xyh4LHkseXMpIHtcbiAgdmFyIGksYyxrLGtrO1xuICBrPXgubGVuZ3RoPHlzK3kubGVuZ3RoID8geC5sZW5ndGggOiB5cyt5Lmxlbmd0aDtcbiAga2s9eC5sZW5ndGg7XG4gIGZvciAoYz0wLGk9eXM7aTxrO2krKykge1xuICAgIGMrPXhbaV0reVtpLXlzXTtcbiAgICB4W2ldPWMgJiBtYXNrO1xuICAgIGM+Pj1icGU7XG4gIH1cbiAgZm9yIChpPWs7YyAmJiBpPGtrO2krKykge1xuICAgIGMrPXhbaV07XG4gICAgeFtpXT1jICYgbWFzaztcbiAgICBjPj49YnBlO1xuICB9XG59XG5cbi8vZG8geD14LSh5PDwoeXMqYnBlKSkgZm9yIGJpZ0ludHMgeCBhbmQgeSwgYW5kIGludGVnZXJzIGEsYiBhbmQgeXMuXG4vL3ggbXVzdCBiZSBsYXJnZSBlbm91Z2ggdG8gaG9sZCB0aGUgYW5zd2VyLlxuZnVuY3Rpb24gc3ViU2hpZnRfKHgseSx5cykge1xuICB2YXIgaSxjLGssa2s7XG4gIGs9eC5sZW5ndGg8eXMreS5sZW5ndGggPyB4Lmxlbmd0aCA6IHlzK3kubGVuZ3RoO1xuICBraz14Lmxlbmd0aDtcbiAgZm9yIChjPTAsaT15cztpPGs7aSsrKSB7XG4gICAgYys9eFtpXS15W2kteXNdO1xuICAgIHhbaV09YyAmIG1hc2s7XG4gICAgYz4+PWJwZTtcbiAgfVxuICBmb3IgKGk9aztjICYmIGk8a2s7aSsrKSB7XG4gICAgYys9eFtpXTtcbiAgICB4W2ldPWMgJiBtYXNrO1xuICAgIGM+Pj1icGU7XG4gIH1cbn1cblxuLy9kbyB4PXgteSBmb3IgYmlnSW50cyB4IGFuZCB5LlxuLy94IG11c3QgYmUgbGFyZ2UgZW5vdWdoIHRvIGhvbGQgdGhlIGFuc3dlci5cbi8vbmVnYXRpdmUgYW5zd2VycyB3aWxsIGJlIDJzIGNvbXBsZW1lbnRcbmZ1bmN0aW9uIHN1Yl8oeCx5KSB7XG4gIHZhciBpLGMsayxraztcbiAgaz14Lmxlbmd0aDx5Lmxlbmd0aCA/IHgubGVuZ3RoIDogeS5sZW5ndGg7XG4gIGZvciAoYz0wLGk9MDtpPGs7aSsrKSB7XG4gICAgYys9eFtpXS15W2ldO1xuICAgIHhbaV09YyAmIG1hc2s7XG4gICAgYz4+PWJwZTtcbiAgfVxuICBmb3IgKGk9aztjICYmIGk8eC5sZW5ndGg7aSsrKSB7XG4gICAgYys9eFtpXTtcbiAgICB4W2ldPWMgJiBtYXNrO1xuICAgIGM+Pj1icGU7XG4gIH1cbn1cblxuLy9kbyB4PXgreSBmb3IgYmlnSW50cyB4IGFuZCB5LlxuLy94IG11c3QgYmUgbGFyZ2UgZW5vdWdoIHRvIGhvbGQgdGhlIGFuc3dlci5cbmZ1bmN0aW9uIGFkZF8oeCx5KSB7XG4gIHZhciBpLGMsayxraztcbiAgaz14Lmxlbmd0aDx5Lmxlbmd0aCA/IHgubGVuZ3RoIDogeS5sZW5ndGg7XG4gIGZvciAoYz0wLGk9MDtpPGs7aSsrKSB7XG4gICAgYys9eFtpXSt5W2ldO1xuICAgIHhbaV09YyAmIG1hc2s7XG4gICAgYz4+PWJwZTtcbiAgfVxuICBmb3IgKGk9aztjICYmIGk8eC5sZW5ndGg7aSsrKSB7XG4gICAgYys9eFtpXTtcbiAgICB4W2ldPWMgJiBtYXNrO1xuICAgIGM+Pj1icGU7XG4gIH1cbn1cblxuLy9kbyB4PXgqeSBmb3IgYmlnSW50cyB4IGFuZCB5LiAgVGhpcyBpcyBmYXN0ZXIgd2hlbiB5PHguXG5mdW5jdGlvbiBtdWx0Xyh4LHkpIHtcbiAgdmFyIGk7XG4gIGlmIChzcy5sZW5ndGghPTIqeC5sZW5ndGgpXG4gICAgc3M9bmV3IEFycmF5KDIqeC5sZW5ndGgpO1xuICBjb3B5SW50XyhzcywwKTtcbiAgZm9yIChpPTA7aTx5Lmxlbmd0aDtpKyspXG4gICAgaWYgKHlbaV0pXG4gICAgICBsaW5Db21iU2hpZnRfKHNzLHgseVtpXSxpKTsgICAvL3NzPTEqc3MreVtpXSooeDw8KGkqYnBlKSlcbiAgY29weV8oeCxzcyk7XG59XG5cbi8vZG8geD14IG1vZCBuIGZvciBiaWdJbnRzIHggYW5kIG4uXG5mdW5jdGlvbiBtb2RfKHgsbikge1xuICBpZiAoczQubGVuZ3RoIT14Lmxlbmd0aClcbiAgICBzND1kdXAoeCk7XG4gIGVsc2VcbiAgICBjb3B5XyhzNCx4KTtcbiAgaWYgKHM1Lmxlbmd0aCE9eC5sZW5ndGgpXG4gICAgczU9ZHVwKHgpO1xuICBkaXZpZGVfKHM0LG4sczUseCk7ICAvL3ggPSByZW1haW5kZXIgb2YgczQgLyBuXG59XG5cbi8vZG8geD14KnkgbW9kIG4gZm9yIGJpZ0ludHMgeCx5LG4uXG4vL2ZvciBncmVhdGVyIHNwZWVkLCBsZXQgeTx4LlxuZnVuY3Rpb24gbXVsdE1vZF8oeCx5LG4pIHtcbiAgdmFyIGk7XG4gIGlmIChzMC5sZW5ndGghPTIqeC5sZW5ndGgpXG4gICAgczA9bmV3IEFycmF5KDIqeC5sZW5ndGgpO1xuICBjb3B5SW50XyhzMCwwKTtcbiAgZm9yIChpPTA7aTx5Lmxlbmd0aDtpKyspXG4gICAgaWYgKHlbaV0pXG4gICAgICBsaW5Db21iU2hpZnRfKHMwLHgseVtpXSxpKTsgICAvL3MwPTEqczAreVtpXSooeDw8KGkqYnBlKSlcbiAgbW9kXyhzMCxuKTtcbiAgY29weV8oeCxzMCk7XG59XG5cbi8vZG8geD14KnggbW9kIG4gZm9yIGJpZ0ludHMgeCxuLlxuZnVuY3Rpb24gc3F1YXJlTW9kXyh4LG4pIHtcbiAgdmFyIGksaixkLGMsa3gsa24saztcbiAgZm9yIChreD14Lmxlbmd0aDsga3g+MCAmJiAheFtreC0xXTsga3gtLSk7ICAvL2lnbm9yZSBsZWFkaW5nIHplcm9zIGluIHhcbiAgaz1reD5uLmxlbmd0aCA/IDIqa3ggOiAyKm4ubGVuZ3RoOyAvL2s9IyBlbGVtZW50cyBpbiB0aGUgcHJvZHVjdCwgd2hpY2ggaXMgdHdpY2UgdGhlIGVsZW1lbnRzIGluIHRoZSBsYXJnZXIgb2YgeCBhbmQgblxuICBpZiAoczAubGVuZ3RoIT1rKVxuICAgIHMwPW5ldyBBcnJheShrKTtcbiAgY29weUludF8oczAsMCk7XG4gIGZvciAoaT0wO2k8a3g7aSsrKSB7XG4gICAgYz1zMFsyKmldK3hbaV0qeFtpXTtcbiAgICBzMFsyKmldPWMgJiBtYXNrO1xuICAgIGM+Pj1icGU7XG4gICAgZm9yIChqPWkrMTtqPGt4O2orKykge1xuICAgICAgYz1zMFtpK2pdKzIqeFtpXSp4W2pdK2M7XG4gICAgICBzMFtpK2pdPShjICYgbWFzayk7XG4gICAgICBjPj49YnBlO1xuICAgIH1cbiAgICBzMFtpK2t4XT1jO1xuICB9XG4gIG1vZF8oczAsbik7XG4gIGNvcHlfKHgsczApO1xufVxuXG4vL3JldHVybiB4IHdpdGggZXhhY3RseSBrIGxlYWRpbmcgemVybyBlbGVtZW50c1xuZnVuY3Rpb24gdHJpbSh4LGspIHtcbiAgdmFyIGkseTtcbiAgZm9yIChpPXgubGVuZ3RoOyBpPjAgJiYgIXhbaS0xXTsgaS0tKTtcbiAgeT1uZXcgQXJyYXkoaStrKTtcbiAgY29weV8oeSx4KTtcbiAgcmV0dXJuIHk7XG59XG5cbi8vZG8geD14Kip5IG1vZCBuLCB3aGVyZSB4LHksbiBhcmUgYmlnSW50cyBhbmQgKiogaXMgZXhwb25lbnRpYXRpb24uICAwKiowPTEuXG4vL3RoaXMgaXMgZmFzdGVyIHdoZW4gbiBpcyBvZGQuICB4IHVzdWFsbHkgbmVlZHMgdG8gaGF2ZSBhcyBtYW55IGVsZW1lbnRzIGFzIG4uXG5mdW5jdGlvbiBwb3dNb2RfKHgseSxuKSB7XG4gIHZhciBrMSxrMixrbixucDtcbiAgaWYoczcubGVuZ3RoIT1uLmxlbmd0aClcbiAgICBzNz1kdXAobik7XG5cbiAgLy9mb3IgZXZlbiBtb2R1bHVzLCB1c2UgYSBzaW1wbGUgc3F1YXJlLWFuZC1tdWx0aXBseSBhbGdvcml0aG0sXG4gIC8vcmF0aGVyIHRoYW4gdXNpbmcgdGhlIG1vcmUgY29tcGxleCBNb250Z29tZXJ5IGFsZ29yaXRobS5cbiAgaWYgKChuWzBdJjEpPT0wKSB7XG4gICAgY29weV8oczcseCk7XG4gICAgY29weUludF8oeCwxKTtcbiAgICB3aGlsZSghZXF1YWxzSW50KHksMCkpIHtcbiAgICAgIGlmICh5WzBdJjEpXG4gICAgICAgIG11bHRNb2RfKHgsczcsbik7XG4gICAgICBkaXZJbnRfKHksMik7XG4gICAgICBzcXVhcmVNb2RfKHM3LG4pO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICAvL2NhbGN1bGF0ZSBucCBmcm9tIG4gZm9yIHRoZSBNb250Z29tZXJ5IG11bHRpcGxpY2F0aW9uc1xuICBjb3B5SW50XyhzNywwKTtcbiAgZm9yIChrbj1uLmxlbmd0aDtrbj4wICYmICFuW2tuLTFdO2tuLS0pO1xuICBucD1yYWRpeC1pbnZlcnNlTW9kSW50KG1vZEludChuLHJhZGl4KSxyYWRpeCk7XG4gIHM3W2tuXT0xO1xuICBtdWx0TW9kXyh4ICxzNyxuKTsgICAvLyB4ID0geCAqIDIqKihrbipicCkgbW9kIG5cblxuICBpZiAoczMubGVuZ3RoIT14Lmxlbmd0aClcbiAgICBzMz1kdXAoeCk7XG4gIGVsc2VcbiAgICBjb3B5XyhzMyx4KTtcblxuICBmb3IgKGsxPXkubGVuZ3RoLTE7azE+MCAmICF5W2sxXTsgazEtLSk7ICAvL2sxPWZpcnN0IG5vbnplcm8gZWxlbWVudCBvZiB5XG4gIGlmICh5W2sxXT09MCkgeyAgLy9hbnl0aGluZyB0byB0aGUgMHRoIHBvd2VyIGlzIDFcbiAgICBjb3B5SW50Xyh4LDEpO1xuICAgIHJldHVybjtcbiAgfVxuICBmb3IgKGsyPTE8PChicGUtMSk7azIgJiYgISh5W2sxXSAmIGsyKTsgazI+Pj0xKTsgIC8vazI9cG9zaXRpb24gb2YgZmlyc3QgMSBiaXQgaW4geVtrMV1cbiAgZm9yICg7Oykge1xuICAgIGlmICghKGsyPj49MSkpIHsgIC8vbG9vayBhdCBuZXh0IGJpdCBvZiB5XG4gICAgICBrMS0tO1xuICAgICAgaWYgKGsxPDApIHtcbiAgICAgICAgbW9udF8oeCxvbmUsbixucCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGsyPTE8PChicGUtMSk7XG4gICAgfVxuICAgIG1vbnRfKHgseCxuLG5wKTtcblxuICAgIGlmIChrMiAmIHlbazFdKSAvL2lmIG5leHQgYml0IGlzIGEgMVxuICAgICAgbW9udF8oeCxzMyxuLG5wKTtcbiAgfVxufVxuXG5cbi8vZG8geD14KnkqUmkgbW9kIG4gZm9yIGJpZ0ludHMgeCx5LG4sXG4vLyAgd2hlcmUgUmkgPSAyKiooLWtuKmJwZSkgbW9kIG4sIGFuZCBrbiBpcyB0aGVcbi8vICBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhlIG4gYXJyYXksIG5vdFxuLy8gIGNvdW50aW5nIGxlYWRpbmcgemVyb3MuXG4vL3ggYXJyYXkgbXVzdCBoYXZlIGF0IGxlYXN0IGFzIG1hbnkgZWxlbW50cyBhcyB0aGUgbiBhcnJheVxuLy9JdCdzIE9LIGlmIHggYW5kIHkgYXJlIHRoZSBzYW1lIHZhcmlhYmxlLlxuLy9tdXN0IGhhdmU6XG4vLyAgeCx5IDwgblxuLy8gIG4gaXMgb2RkXG4vLyAgbnAgPSAtKG5eKC0xKSkgbW9kIHJhZGl4XG5mdW5jdGlvbiBtb250Xyh4LHksbixucCkge1xuICB2YXIgaSxqLGMsdWksdCxrcztcbiAgdmFyIGtuPW4ubGVuZ3RoO1xuICB2YXIga3k9eS5sZW5ndGg7XG5cbiAgaWYgKHNhLmxlbmd0aCE9a24pXG4gICAgc2E9bmV3IEFycmF5KGtuKTtcblxuICBjb3B5SW50XyhzYSwwKTtcblxuICBmb3IgKDtrbj4wICYmIG5ba24tMV09PTA7a24tLSk7IC8vaWdub3JlIGxlYWRpbmcgemVyb3Mgb2YgblxuICBmb3IgKDtreT4wICYmIHlba3ktMV09PTA7a3ktLSk7IC8vaWdub3JlIGxlYWRpbmcgemVyb3Mgb2YgeVxuICBrcz1zYS5sZW5ndGgtMTsgLy9zYSB3aWxsIG5ldmVyIGhhdmUgbW9yZSB0aGFuIHRoaXMgbWFueSBub256ZXJvIGVsZW1lbnRzLlxuXG4gIC8vdGhlIGZvbGxvd2luZyBsb29wIGNvbnN1bWVzIDk1JSBvZiB0aGUgcnVudGltZSBmb3IgcmFuZFRydWVQcmltZV8oKSBhbmQgcG93TW9kXygpIGZvciBsYXJnZSBudW1iZXJzXG4gIGZvciAoaT0wOyBpPGtuOyBpKyspIHtcbiAgICB0PXNhWzBdK3hbaV0qeVswXTtcbiAgICB1aT0oKHQgJiBtYXNrKSAqIG5wKSAmIG1hc2s7ICAvL3RoZSBpbm5lciBcIiYgbWFza1wiIHdhcyBuZWVkZWQgb24gU2FmYXJpIChidXQgbm90IE1TSUUpIGF0IG9uZSB0aW1lXG4gICAgYz0odCt1aSpuWzBdKSA+PiBicGU7XG4gICAgdD14W2ldO1xuXG4gICAgLy9kbyBzYT0oc2EreFtpXSp5K3VpKm4pL2IgICB3aGVyZSBiPTIqKmJwZS4gIExvb3AgaXMgdW5yb2xsZWQgNS1mb2xkIGZvciBzcGVlZFxuICAgIGo9MTtcbiAgICBmb3IgKDtqPGt5LTQ7KSB7IGMrPXNhW2pdK3VpKm5bal0rdCp5W2pdOyAgIHNhW2otMV09YyAmIG1hc2s7ICAgYz4+PWJwZTsgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICBjKz1zYVtqXSt1aSpuW2pdK3QqeVtqXTsgICBzYVtqLTFdPWMgJiBtYXNrOyAgIGM+Pj1icGU7ICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgYys9c2Fbal0rdWkqbltqXSt0Knlbal07ICAgc2Fbai0xXT1jICYgbWFzazsgICBjPj49YnBlOyAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgIGMrPXNhW2pdK3VpKm5bal0rdCp5W2pdOyAgIHNhW2otMV09YyAmIG1hc2s7ICAgYz4+PWJwZTsgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICBjKz1zYVtqXSt1aSpuW2pdK3QqeVtqXTsgICBzYVtqLTFdPWMgJiBtYXNrOyAgIGM+Pj1icGU7ICAgaisrOyB9XG4gICAgZm9yICg7ajxreTspICAgeyBjKz1zYVtqXSt1aSpuW2pdK3QqeVtqXTsgICBzYVtqLTFdPWMgJiBtYXNrOyAgIGM+Pj1icGU7ICAgaisrOyB9XG4gICAgZm9yICg7ajxrbi00OykgeyBjKz1zYVtqXSt1aSpuW2pdOyAgICAgICAgICBzYVtqLTFdPWMgJiBtYXNrOyAgIGM+Pj1icGU7ICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgYys9c2Fbal0rdWkqbltqXTsgICAgICAgICAgc2Fbai0xXT1jICYgbWFzazsgICBjPj49YnBlOyAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgIGMrPXNhW2pdK3VpKm5bal07ICAgICAgICAgIHNhW2otMV09YyAmIG1hc2s7ICAgYz4+PWJwZTsgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICBjKz1zYVtqXSt1aSpuW2pdOyAgICAgICAgICBzYVtqLTFdPWMgJiBtYXNrOyAgIGM+Pj1icGU7ICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgYys9c2Fbal0rdWkqbltqXTsgICAgICAgICAgc2Fbai0xXT1jICYgbWFzazsgICBjPj49YnBlOyAgIGorKzsgfVxuICAgIGZvciAoO2o8a247KSAgIHsgYys9c2Fbal0rdWkqbltqXTsgICAgICAgICAgc2Fbai0xXT1jICYgbWFzazsgICBjPj49YnBlOyAgIGorKzsgfVxuICAgIGZvciAoO2o8a3M7KSAgIHsgYys9c2Fbal07ICAgICAgICAgICAgICAgICAgc2Fbai0xXT1jICYgbWFzazsgICBjPj49YnBlOyAgIGorKzsgfVxuICAgIHNhW2otMV09YyAmIG1hc2s7XG4gIH1cblxuICBpZiAoIWdyZWF0ZXIobixzYSkpXG4gICAgc3ViXyhzYSxuKTtcbiAgY29weV8oeCxzYSk7XG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IFRleHRFbmNvZGVyO1xuIiwiZXhwb3J0IGRlZmF1bHQgVGV4dERlY29kZXI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1iaXR3aXNlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXNwYXJzZS1hcnJheXMgKi9cblxuaW1wb3J0IFRleHRFbmNvZGVyIGZyb20gJy4uL3BsYXRmb3JtL3RleHQtZW5jb2Rlcic7XG5pbXBvcnQgVGV4dERlY29kZXIgZnJvbSAnLi4vcGxhdGZvcm0vdGV4dC1kZWNvZGVyJztcblxuZnVuY3Rpb24gdG9CeXRlQXJyYXkoZGF0YSkge1xuICBpZiAoZGF0YS5idWZmZXIpIHtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZGF0YS5idWZmZXIsIGRhdGEuYnl0ZU9mZnNldCwgZGF0YS5ieXRlTGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG59XG5cbi8qIEVuY29kZXMgYSBVaW50OEFycmF5IGFzIGEgYmFzZTY0IHN0cmluZyAqL1xuZnVuY3Rpb24gdG9CYXNlNjRGYXN0KGRhdGEpIHtcbiAgZGF0YSA9IHRvQnl0ZUFycmF5KGRhdGEpO1xuICBjb25zdCBDSFVOS19TSVpFID0gMzI3Njc7XG4gIGNvbnN0IGMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSBDSFVOS19TSVpFKSB7XG4gICAgYy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgZGF0YS5zdWJhcnJheShpLCBpICsgQ0hVTktfU0laRSkpKTtcbiAgfVxuICByZXR1cm4gYnRvYShjLmpvaW4oJycpKTtcbn1cblxuLyogRGVjb2RlcyBhIGJhc2U2NCBzdHJpbmcgYXMgYSBVaW50OEFycmF5ICovXG5mdW5jdGlvbiBmcm9tQmFzZTY0RmFzdChkYXRhKSB7XG4gIGNvbnN0IGRlYyA9IGF0b2IoZGF0YSk7XG4gIGNvbnN0IGxlbiA9IGRlYy5sZW5ndGg7XG4gIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobGVuKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGJ5dGVzW2ldID0gZGVjLmNoYXJDb2RlQXQoaSk7XG4gIH1cbiAgcmV0dXJuIGJ5dGVzO1xufVxuXG4vKiB0b0Jhc2U2NCB3aXRob3V0IHVzaW5nIGJ0b2EgKi9cbmZ1bmN0aW9uIHRvQmFzZTY0U2xvdyhkYXRhKSB7XG4gIGRhdGEgPSB0b0J5dGVBcnJheShkYXRhKTtcbiAgY29uc3QgbW9kdGFibGUgPSBbMCwgMiwgMV07XG4gIGNvbnN0IGVuY3RhYmxlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xuICBjb25zdCBpbmxlbmd0aCA9IGRhdGEuYnl0ZUxlbmd0aDtcbiAgY29uc3Qgb3V0bGVuZ3RoID0gNCAqIChNYXRoLmZsb29yKChpbmxlbmd0aCArIDIpIC8gMykpO1xuXG4gIGNvbnN0IGVuY2RhdGEgPSBuZXcgQXJyYXkob3V0bGVuZ3RoKTtcblxuICBmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCBpbmxlbmd0aDspIHtcbiAgICBjb25zdCBvY3RhID0gaSA8IGlubGVuZ3RoID8gZGF0YVtpKytdIDogMDtcbiAgICBjb25zdCBvY3RiID0gaSA8IGlubGVuZ3RoID8gZGF0YVtpKytdIDogMDtcbiAgICBjb25zdCBvY3RjID0gaSA8IGlubGVuZ3RoID8gZGF0YVtpKytdIDogMDtcblxuICAgIGNvbnN0IHRyaXBsZSA9IChvY3RhIDw8IDB4MTApICsgKG9jdGIgPDwgMHgwOCkgKyBvY3RjO1xuXG4gICAgZW5jZGF0YVtqKytdID0gZW5jdGFibGVbKHRyaXBsZSA+PiAzICogNikgJiAweDNGXTtcbiAgICBlbmNkYXRhW2orK10gPSBlbmN0YWJsZVsodHJpcGxlID4+IDIgKiA2KSAmIDB4M0ZdO1xuICAgIGVuY2RhdGFbaisrXSA9IGVuY3RhYmxlWyh0cmlwbGUgPj4gMSAqIDYpICYgMHgzRl07XG4gICAgZW5jZGF0YVtqKytdID0gZW5jdGFibGVbKHRyaXBsZSA+PiAwICogNikgJiAweDNGXTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kdGFibGVbaW5sZW5ndGggJSAzXTsgaSsrKSB7XG4gICAgZW5jZGF0YVtvdXRsZW5ndGggLSAxIC0gaV0gPSAnPSc7XG4gIH1cblxuICByZXR1cm4gZW5jZGF0YS5qb2luKCcnKTtcbn1cblxuLyogZnJvbUJhc2U2NCB3aXRob3V0IHVzaW5nIGF0b2IgKi9cbmZ1bmN0aW9uIGZyb21CYXNlNjRTbG93KGRhdGEpIHtcbiAgY29uc3QgZGVjdGFibGUgPSBbLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCA2MiwsLCwgNjMsIDUyLCA1MywgNTQsIDU1LCA1NixcbiAgICA1NywgNTgsIDU5LCA2MCwgNjEsLCwsLCwsLCAwLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1LCAxNiwgMTcsIDE4LFxuICAgIDE5LCAyMCwgMjEsIDIyLCAyMywgMjQsIDI1LCwsLCwsLCAyNiwgMjcsIDI4LCAyOSwgMzAsIDMxLCAzMiwgMzMsIDM0LCAzNSwgMzYsIDM3LCAzOCwgMzksXG4gICAgNDAsIDQxLCA0MiwgNDMsIDQ0LCA0NSwgNDYsIDQ3LCA0OCwgNDksIDUwLCA1MV07XG5cbiAgY29uc3QgaW5sZW5ndGggPSBkYXRhLmxlbmd0aDtcbiAgaWYgKGlubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbGV0IG91dGxlbmd0aCA9IE1hdGguZmxvb3IoaW5sZW5ndGggLyA0KSAqIDM7XG4gIGlmIChkYXRhW2lubGVuZ3RoIC0gMV0gPT09ICc9Jykge1xuICAgIG91dGxlbmd0aC0tO1xuICB9XG4gIGlmIChkYXRhW2lubGVuZ3RoIC0gMl0gPT09ICc9Jykge1xuICAgIG91dGxlbmd0aC0tO1xuICB9XG5cbiAgY29uc3QgZGVjZGF0YSA9IG5ldyBVaW50OEFycmF5KG91dGxlbmd0aCk7XG4gIGZvciAobGV0IGkgPSAwLCBqID0gMDsgaSA8IGlubGVuZ3RoOykge1xuICAgIGNvbnN0IHNleHRhID0gZGF0YVtpXSA9PT0gJz0nID8gMCAmIGkrKyA6IGRlY3RhYmxlW2RhdGFbaSsrXS5jaGFyQ29kZUF0KCldO1xuICAgIGNvbnN0IHNleHRiID0gZGF0YVtpXSA9PT0gJz0nID8gMCAmIGkrKyA6IGRlY3RhYmxlW2RhdGFbaSsrXS5jaGFyQ29kZUF0KCldO1xuICAgIGNvbnN0IHNleHRjID0gZGF0YVtpXSA9PT0gJz0nID8gMCAmIGkrKyA6IGRlY3RhYmxlW2RhdGFbaSsrXS5jaGFyQ29kZUF0KCldO1xuICAgIGNvbnN0IHNleHRkID0gZGF0YVtpXSA9PT0gJz0nID8gMCAmIGkrKyA6IGRlY3RhYmxlW2RhdGFbaSsrXS5jaGFyQ29kZUF0KCldO1xuXG4gICAgY29uc3QgdHJpcGxlID0gKHNleHRhIDw8IDMgKiA2KSArIChzZXh0YiA8PCAyICogNikgK1xuICAgICAgKHNleHRjIDw8IDEgKiA2KSArIChzZXh0ZCA8PCAwICogNik7XG4gICAgaWYgKGogPCBvdXRsZW5ndGgpIHtcbiAgICAgIGRlY2RhdGFbaisrXSA9ICh0cmlwbGUgPj4gMiAqIDgpICYgMHhGRjtcbiAgICB9XG4gICAgaWYgKGogPCBvdXRsZW5ndGgpIHtcbiAgICAgIGRlY2RhdGFbaisrXSA9ICh0cmlwbGUgPj4gMSAqIDgpICYgMHhGRjtcbiAgICB9XG4gICAgaWYgKGogPCBvdXRsZW5ndGgpIHtcbiAgICAgIGRlY2RhdGFbaisrXSA9ICh0cmlwbGUgPj4gMCAqIDgpICYgMHhGRjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlY2RhdGE7XG59XG5cbi8qIEVuY29kZXMgYSBVaW50OEFycmF5IGFzIGFuIGhleCBzdHJpbmcgKi9cbmZ1bmN0aW9uIHRvSGV4KGRhdGEpIHtcbiAgZGF0YSA9IHRvQnl0ZUFycmF5KGRhdGEpO1xuICBjb25zdCBlbmN0YWJsZWhleCA9ICcwMTIzNDU2Nzg5YWJjZGVmJztcbiAgY29uc3QgaW5sZW5ndGggPSBkYXRhLmJ5dGVMZW5ndGg7XG4gIGNvbnN0IGVuY2RhdGEgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmxlbmd0aDsgKytpKSB7XG4gICAgZW5jZGF0YVsyICogaV0gPSBlbmN0YWJsZWhleFtkYXRhW2ldID4+IDRdO1xuICAgIGVuY2RhdGFbKDIgKiBpKSArIDFdID0gZW5jdGFibGVoZXhbZGF0YVtpXSAmIDB4MEZdO1xuICB9XG4gIHJldHVybiBlbmNkYXRhLmpvaW4oJycpO1xufVxuXG4vKiBEZWNvZGVzIGFuIGhleCBzdHJpbmcgYXMgYSBVaW50OEFycmF5ICovXG5mdW5jdGlvbiBmcm9tSGV4KGRhdGEpIHtcbiAgY29uc3QgZGVjdGFibGVoZXggPSBbLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsIDAsIDEsIDIsIDMsIDQsIDUsIDYsXG4gICAgNywgOCwgOSwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwgMTAsIDExLCAxMiwgMTMsIDE0LCAxNV07XG5cbiAgZGF0YSA9IGRhdGEudG9Mb3dlckNhc2UoKTtcbiAgaWYgKGRhdGEubGVuZ3RoICUgMiAhPT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgZnJvbUhleDogJHtkYXRhfSBoYXMgb2RkIGxlbmd0aGApO1xuICB9XG4gIGNvbnN0IG91dGxlbmd0aCA9IGRhdGEubGVuZ3RoIC8gMjtcbiAgY29uc3QgZGVjZGF0YSA9IG5ldyBVaW50OEFycmF5KG91dGxlbmd0aCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb3V0bGVuZ3RoOyBpKyspIHtcbiAgICBkZWNkYXRhW2ldID1cbiAgICAgIChkZWN0YWJsZWhleFtkYXRhWzIgKiBpXS5jaGFyQ29kZUF0KCldIDw8IDQpIHxcbiAgICAgIChkZWN0YWJsZWhleFtkYXRhWygyICogaSkgKyAxXS5jaGFyQ29kZUF0KCldKTtcbiAgfVxuICByZXR1cm4gZGVjZGF0YTtcbn1cblxuLyogUmV0dXJucyBhIHN0cmluZyBnaXZlbiBhIFVpbnQ4QXJyYXkgVVRGLTggZW5jb2RpbmcgKi9cbmNvbnN0IGRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKTtcbmZ1bmN0aW9uIGZyb21VVEY4KGJ5dGVzKSB7XG4gIHJldHVybiBkZWNvZGVyLmRlY29kZSh0b0J5dGVBcnJheShieXRlcykpO1xufVxuXG4vKiBSZXR1cm5zIGEgVWludDhBcnJheSBVVEYtOCBlbmNvZGluZyBvZiB0aGUgZ2l2ZW4gc3RyaW5nICovXG5jb25zdCBlbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCk7XG5mdW5jdGlvbiB0b1VURjgoc3RyKSB7XG4gIHJldHVybiBlbmNvZGVyLmVuY29kZShzdHIpO1xufVxuXG5jb25zdCB0b0Jhc2U2NCA9IHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJyA/IHRvQmFzZTY0RmFzdCA6IHRvQmFzZTY0U2xvdztcbmNvbnN0IGZyb21CYXNlNjQgPSB0eXBlb2YgYXRvYiAhPT0gJ3VuZGVmaW5lZCcgPyBmcm9tQmFzZTY0RmFzdCA6IGZyb21CYXNlNjRTbG93O1xuZXhwb3J0IHsgdG9CYXNlNjQsIGZyb21CYXNlNjQsIHRvSGV4LCBmcm9tSGV4LCB0b1VURjgsIGZyb21VVEY4IH07XG4iLCJleHBvcnQgZGVmYXVsdCBjcnlwdG87XG4iLCJpbXBvcnQgcmFuZEJpZ0ludCBmcm9tICdiaWdpbnQnO1xuaW1wb3J0IENsaXF6U2VjdXJlTWVzc2FnZSBmcm9tICcuL2luZGV4JztcblxuaW1wb3J0IHtcbiAgZnJvbUJhc2U2NCxcbiAgdG9VVEY4LFxuICB0b0hleFxufSBmcm9tICcuLi8uLi9jb3JlL2VuY29kaW5nJztcblxuaW1wb3J0IGNyeXB0byBmcm9tICcuLi8uLi9wbGF0Zm9ybS9jcnlwdG8nO1xuXG5mdW5jdGlvbiBiYXNlNjRVcmxEZWNvZGUoc3RyKSB7XG4gIHN0ciA9IGF0b2Ioc3RyLnJlcGxhY2UoLy0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJykpO1xuICB2YXIgYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoc3RyLmxlbmd0aCk7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBidWZmZXJbaV0gPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgfVxuICByZXR1cm4gYnVmZmVyO1xufVxuXG5mdW5jdGlvbiBoMmQocykge1xuICAgIGZ1bmN0aW9uIGFkZCh4LCB5KSB7XG4gICAgICAgIHZhciBjID0gMCwgciA9IFtdO1xuICAgICAgICB2YXIgeCA9IHguc3BsaXQoJycpLm1hcChOdW1iZXIpO1xuICAgICAgICB2YXIgeSA9IHkuc3BsaXQoJycpLm1hcChOdW1iZXIpO1xuICAgICAgICB3aGlsZSh4Lmxlbmd0aCB8fCB5Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHMgPSAoeC5wb3AoKSB8fCAwKSArICh5LnBvcCgpIHx8IDApICsgYztcbiAgICAgICAgICAgIHIudW5zaGlmdChzIDwgMTAgPyBzIDogcyAtIDEwKTtcbiAgICAgICAgICAgIGMgPSBzIDwgMTAgPyAwIDogMTtcbiAgICAgICAgfVxuICAgICAgICBpZihjKSByLnVuc2hpZnQoYyk7XG4gICAgICAgIHJldHVybiByLmpvaW4oJycpO1xuICAgIH1cblxuICAgIHZhciBkZWMgPSAnMCc7XG4gICAgcy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihjaHIpIHtcbiAgICAgICAgdmFyIG4gPSBwYXJzZUludChjaHIsIDE2KTtcbiAgICAgICAgZm9yKHZhciB0ID0gODsgdDsgdCA+Pj0gMSkge1xuICAgICAgICAgICAgZGVjID0gYWRkKGRlYywgZGVjKTtcbiAgICAgICAgICAgIGlmKG4gJiB0KSBkZWMgPSBhZGQoZGVjLCAnMScpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlYztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRFNLZXkoKXtcbiAgICAvLyBQYXJzZSBrZXkgY29udGVudHMuXG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgICAgY3J5cHRvLnN1YnRsZS5pbXBvcnRLZXkoXG4gICAgICAgICAnc3BraScsXG4gICAgICAgICAgZnJvbUJhc2U2NChDbGlxelNlY3VyZU1lc3NhZ2UuZHNQSy5wdWJLZXlCNjQpLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdSU0EtT0FFUCcsXG4gICAgICAgICAgICBoYXNoOiB7IG5hbWU6ICdTSEEtMScgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICBbJ2VuY3J5cHQnXVxuICAgICAgICApLnRoZW4oIGtleT0+IHtcbiAgICAgICAgICBjcnlwdG8uc3VidGxlLmV4cG9ydEtleShcImp3a1wiLCBrZXkpLnRoZW4oXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgIC8vIGJhc2U2NHVybC1kZWNvZGUgbW9kdWx1c1xuICAgICAgICAgICAgICAgIHZhciBtb2R1bHVzID0gYmFzZTY0VXJsRGVjb2RlKGtleS5uKTtcbiAgICAgICAgICAgICAgICBDbGlxelNlY3VyZU1lc3NhZ2UuZHNQS1tcIm5cIl0gPSBoMmQodG9IZXgobW9kdWx1cykpO1xuICAgICAgICAgICAgICAgIC8vIGJhc2U2NHVybC1kZWNvZGUgZXhwb25lbnRcbiAgICAgICAgICAgICAgICB2YXIgZXhwb25lbnQgPSBiYXNlNjRVcmxEZWNvZGUoa2V5LmUpO1xuICAgICAgICAgICAgICAgIENsaXF6U2VjdXJlTWVzc2FnZS5kc1BLW1wiZVwiXSA9ICcnICsgaDJkKHRvSGV4KGV4cG9uZW50KSk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIC8vIG1vZHVsdXMgYW5kIGV4cG9uZW50IGFyZSBub3cgVWludDhBcnJheXNcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5CbGluZE1lc3NhZ2UoYmxpbmRTaWduZWRNZXNzYWdlLCB1bkJsaW5kZXIpe1xuICAvLyBVbmJsaW5kIHRoZSBtZXNzYWdlIGJlZm9yZSBzZW5kaW5nIGl0IGZvciB2ZXJpZmljYXRpb24uXG4gIC8vIHMgPSB1KihicykgbW9kIG5cbiAgdmFyIF91cyA9IG11bHRNb2QodW5CbGluZGVyLCBzdHIyYmlnSW50KGJsaW5kU2lnbmVkTWVzc2FnZSwgMTYpLCBzdHIyYmlnSW50KENsaXF6U2VjdXJlTWVzc2FnZS5kc1BLLm4sIDEwKSk7XG4gIHZhciB1cyA9IGJpZ0ludDJzdHIoX3VzLDEwLCAwKTtcbiAgcmV0dXJuIHVzO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlCbGluZFNpZ25hdHVyZShzaWduZWRNZXNzYWdlLCBoYXNoZWRPcmlnaW5hbE1lc3NhZ2Upe1xuICAgIC8vIFZlcmlmeSB0aGUgbWVzc2FnZSB0byBzZWUsIHRoZSBzaWduZXIgaXMgbm90IHRoZSBwcm9ibGVtLlxuICAgIC8vIG0gPSBzXmUgbW9kIG5cblxuICAgIHZhciBtZXNzYWdlX3NpZ25lZCA9IGJpZ0ludDJzdHIocG93TW9kKHN0cjJiaWdJbnQoc2lnbmVkTWVzc2FnZSwxMCwwKSwgc3RyMmJpZ0ludChDbGlxelNlY3VyZU1lc3NhZ2UuZHNQSy5lLCAxMCksIHN0cjJiaWdJbnQoQ2xpcXpTZWN1cmVNZXNzYWdlLmRzUEsubiwgMTApKSwxMCk7XG4gICAgdmFyIG9yaWdpbmFsX21lc3NhZ2UgPSBiaWdJbnQyc3RyKHN0cjJiaWdJbnQoaGFzaGVkT3JpZ2luYWxNZXNzYWdlLDE2KSwxMCk7XG5cbiAgICBpZihvcmlnaW5hbF9tZXNzYWdlID09PSBtZXNzYWdlX3NpZ25lZC50b0xvd2VyQ2FzZSgpKXtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4vLyBTZXQgdGhlIGNvbnRleHQgZm9yIGJsaW5kIHNpZ25hdHVyZXMgcmlnaHQuXG5leHBvcnQgbGV0IGJsaW5kU2lnbkNvbnRleHQgPSBmdW5jdGlvbiAobXNnKSB7XG4gICAgLypcbiAgICBJbml0aWFsaXplIGl0IHdpdGggdGhlIGZvbGxvd2luZzpcbiAgICAxLiBTaWduZXIgUHVibGljIEtleVxuICAgIDIuIFNpZ25lciBQdWJsaWMgRXhwb25lbnRcbiAgICAzLiBTaWduZXIgUHVibGljIE1vZHVsb3VzXG4gICAgKi9cblxuICAgIC8vIHRoaXMua2V5T2JqID0gbmV3IEpTRW5jcnlwdCgpO1xuICAgIHRoaXMucmFuZG9tTnVtYmVyID0gbnVsbDtcbiAgICB0aGlzLmJsaW5kaW5nTm9uY2UgPSBudWxsO1xuICAgIHRoaXMuYmxpbmRlciA9IG51bGw7XG4gICAgdGhpcy51bmJsaW5kZXIgPSBudWxsO1xuICAgIHRoaXMua2V5U2l6ZSA9IDQwOTY7XG4gICAgdGhpcy5oYXNoZWRNZXNzYWdlID0gXCJcIjtcbiAgICB0aGlzLmJtID0gXCJcIjtcbiAgICB0aGlzLnNpZ25lZE1lc3NhZ2UgPSBcIlwiO1xuICAgIHRoaXMubXNnID0gbXNnO1xufVxuXG5ibGluZFNpZ25Db250ZXh0LnByb3RvdHlwZS5leHBvbmVudCA9IGZ1bmN0aW9uKCl7XG4gICAgLy8gUmV0dXJuIHRoZSBwdWJsaWMgZXhwb25lbnRcbiAgICByZXR1cm4gdGhpcy5lO1xufVxuXG5ibGluZFNpZ25Db250ZXh0LnByb3RvdHlwZS5tb2R1bHVzID0gZnVuY3Rpb24oKXtcbiAgICAvLyBSZXR1cm4gdGhlIHB1YmxpYyBtb2R1bG91c1xuICAgIHJldHVybiB0aGlzLm47XG59XG5cbmJsaW5kU2lnbkNvbnRleHQucHJvdG90eXBlLmxvZyA9ICBmdW5jdGlvbihtc2cpe1xuICBjb25zb2xlLmxvZyhtc2csIFwiQmxpbmQgU2lnbmF0dXJlXCIpO1xuXG59XG5cbmJsaW5kU2lnbkNvbnRleHQucHJvdG90eXBlLmhhc2hNZXNzYWdlID0gZnVuY3Rpb24oKXtcbiAgICAvLyBOZWVkIHNoYTI1NiBkaWdlc3QgdGhlIG1lc3NhZ2UuXG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICBjcnlwdG8uc3VidGxlLmRpZ2VzdChcIlNIQS0yNTZcIiwgdG9VVEY4KF90aGlzLm1zZykpLnRoZW4oIGhhc2ggPT4ge1xuICAgICAgICByZXNvbHZlKHRvSGV4KG5ldyBVaW50OEFycmF5KGhhc2gpKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAvKlxuICAgIHZhciBtc2cgPSB0aGlzLm1zZztcbiAgICB0aGlzLmhhc2hlZE1lc3NhZ2UgPSBzaGEyNTZfZGlnZXN0KG1zZyk7XG4gICAgcmV0dXJuIHRoaXMuaGFzaGVkTWVzc2FnZTtcbiAgICAqL1xufVxuXG5ibGluZFNpZ25Db250ZXh0LnByb3RvdHlwZS5nZXRCbGluZGluZ05vbmNlID0gZnVuY3Rpb24oKXtcbiAgICAvLyBDcmVhdGUgYSByYW5kb20gdmFsdWUuXG5cbiAgICB2YXIgcmFuZG9tTnVtYmVyID0gcmFuZEJpZ0ludC5yYW5kQmlnSW50KHRoaXMua2V5U2l6ZSwxKTtcbiAgICB0aGlzLmJsaW5kaW5nTm9uY2UgPSByYW5kb21OdW1iZXI7XG4gICAgcmV0dXJuIHJhbmRvbU51bWJlcjtcbn1cblxuYmxpbmRTaWduQ29udGV4dC5wcm90b3R5cGUuZ2V0QmxpbmRlciA9IGZ1bmN0aW9uKCl7XG4gICAgLy8gQ2FsY3VsYXRlIGJsaW5kZXIuXG4gICAgLy8gYiA9IHIgXiBlIG1vZCBuXG4gICAgdmFyIGIgPSBwb3dNb2QodGhpcy5ibGluZGluZ05vbmNlLCBzdHIyYmlnSW50KENsaXF6U2VjdXJlTWVzc2FnZS5kc1BLLmUsIDEwKSwgc3RyMmJpZ0ludChDbGlxelNlY3VyZU1lc3NhZ2UuZHNQSy5uLCAxMCkpO1xuICAgIHRoaXMuYmxpbmRlciA9IGI7XG4gICAgcmV0dXJuIGI7XG59XG5cbmJsaW5kU2lnbkNvbnRleHQucHJvdG90eXBlLmdldFVuQmxpbmRlciA9IGZ1bmN0aW9uKCl7XG4gICAgLy8gQ2FsY3VsYXRlIGJsaW5kZXIuXG4gICAgLy8gYiA9IHIgXiBlIG1vZCBuXG4gICAgdmFyIHUgPSBpbnZlcnNlTW9kKHRoaXMuYmxpbmRpbmdOb25jZSwgc3RyMmJpZ0ludChDbGlxelNlY3VyZU1lc3NhZ2UuZHNQSy5uLCAxMCkpO1xuICAgIHRoaXMudW5ibGluZGVyID0gdTtcbiAgICByZXR1cm4gdTtcbn1cblxuYmxpbmRTaWduQ29udGV4dC5wcm90b3R5cGUuYmxpbmRNZXNzYWdlID0gZnVuY3Rpb24oKXtcbiAgICAvLyBCbGluZCB0aGUgbWVzc2FnZSBiZWZvcmUgc2VuZGluZyBpdCBmb3Igc2lnbmluZy5cbiAgICAvLyBibSA9IGIqbSBtb2QgblxuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgX3RoaXMuaGFzaE1lc3NhZ2UoKS50aGVuKCBoYXNoTWVzc2FnZSA9PiB7XG4gICAgICAgIC8vIHZhciBybmQgPSB0aGlzLmdldEJsaW5kaW5nTm9uY2UoKTtcbiAgICAgICAgdmFyIGJsaW5kZXIgPSBfdGhpcy5nZXRCbGluZGVyKCk7XG4gICAgICAgIHZhciBibSA9IG11bHRNb2QoYmxpbmRlciwgc3RyMmJpZ0ludChoYXNoTWVzc2FnZSwgMTYpLCBzdHIyYmlnSW50KENsaXF6U2VjdXJlTWVzc2FnZS5kc1BLLm4sIDEwKSk7XG4gICAgICAgIF90aGlzLmJtID0gYmlnSW50MnN0cihibSwgMTApO1xuICAgICAgICByZXNvbHZlKF90aGlzLmJtKTtcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cblxuYmxpbmRTaWduQ29udGV4dC5wcm90b3R5cGUudW5CbGluZE1lc3NhZ2UgPSBmdW5jdGlvbihibGluZFNpZ25lZE1lc3NhZ2Upe1xuICAgIC8vIFVuYmxpbmQgdGhlIG1lc3NhZ2UgYmVmb3JlIHNlbmRpbmcgaXQgZm9yIHZlcmlmaWNhdGlvbi5cbiAgICAvLyBzID0gdSooYnMpIG1vZCBuXG5cbiAgICB2YXIgYnMgPSBibGluZFNpZ25lZE1lc3NhZ2U7XG4gICAgdmFyIHVzID0gbXVsdE1vZCh0aGlzLnVuYmxpbmRlciwgc3RyMmJpZ0ludChicywgMTYpLCBzdHIyYmlnSW50KENsaXF6U2VjdXJlTWVzc2FnZS5kc1BLLm4sIDEwKSk7XG4gICAgdmFyIHVzID0gYmlnSW50MnN0cihfdXMsMTAsIDApXG4gICAgdGhpcy5zaWduZWRNZXNzYWdlID0gdXM7XG4gICAgcmV0dXJuIHVzO1xufVxuXG5ibGluZFNpZ25Db250ZXh0LnByb3RvdHlwZS52ZXJpZnkgPSBmdW5jdGlvbigpe1xuICAgIC8vIFZlcmlmeSB0aGUgbWVzc2FnZSB0byBzZWUsIHRoZSBzaWduZXIgaXMgbm90IHRoZSBwcm9ibGVtLlxuICAgIC8vIG0gPSBzXmUgbW9kIG5cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgICB2YXIgbWVzc2FnZV9zaWduZWQgPSBiaWdJbnQyc3RyKHBvd01vZChzdHIyYmlnSW50KF90aGlzLnNpZ25lZE1lc3NhZ2UsMTAsMCksIHN0cjJiaWdJbnQoX3RoaXMuZSwgMTApLCBzdHIyYmlnSW50KF90aGlzLm4sIDEwKSksMTApO1xuICAgICAgICB2YXIgb3JpZ2luYWxfbWVzc2FnZSA9IGJpZ0ludDJzdHIoc3RyMmJpZ0ludChfdGhpcy5oYXNoZWRNZXNzYWdlLDE2KSwxMCk7XG4gICAgICAgIC8vIHZhciBvcmlnaW5hbF9tZXNzYWdlID0gX3RoaXMuaGFzaGVkTWVzc2FnZTtcbiAgICAgICAgX3RoaXMubG9nKFwiT3JnIG1lc3NhZ2U6XCIgKyBvcmlnaW5hbF9tZXNzYWdlKTtcbiAgICAgICAgX3RoaXMubG9nKFwiU2lnbiBtZXNzYWdlOlwiICsgbWVzc2FnZV9zaWduZWQpO1xuICAgICAgICBpZihvcmlnaW5hbF9tZXNzYWdlID09PSBtZXNzYWdlX3NpZ25lZC50b0xvd2VyQ2FzZSgpKXtcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIC8vIE5lZWQgdG8gcmVwbGFjZSB0aGlzIHdpdGggcmVqZWN0LlxuICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cblxuICAgIH0pXG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgXCJwbGF0Zm9ybVwiOiBcImNocm9taXVtXCIsXG4gIFwiYnJvY2ZpbGVcIjogXCJub2RlLkJyb2NmaWxlLmpzXCIsXG4gIFwiYmFzZVVSTFwiOiBcIi9jbGlxei9cIixcbiAgXCJzb3VyY2VNYXBzXCI6IHRydWUsXG4gIFwiZm9ybWF0XCI6IFwiY29tbW9uXCIsXG4gIFwic2V0dGluZ3NcIjoge1xuICAgIFwiY2hhbm5lbFwiOiBcIkNIODBcIixcbiAgICBcInRyaWdnZXJzLXJvb3RcIjogXCJnaG9zdGVyeS1yb290XCIsXG4gICAgXCJDT05GSUdfUFJPVklERVJcIjogXCJodHRwczovL3NhZmUtYnJvd3NpbmcuZ2hvc3RlcnkuY29tL2NvbmZpZ1wiLFxuICAgIFwiRU5EUE9JTlRfQkxJTkRfU0lHTkVSXCI6IFwiaHR0cHM6Ly9naG9zdGVyeS1zaWduLmdob3N0ZXJ5LmNvbS9zaWduXCIsXG4gICAgXCJFTkRQT0lOVF9VU0VSX1JFR1wiOiBcImh0dHBzOi8vZ2hvc3Rlcnktc2lnbi5naG9zdGVyeS5jb20vcmVnaXN0ZXJcIixcbiAgICBcIkVORFBPSU5UX1NPVVJDRV9NQVBfUFJPVklERVJcIjogXCJodHRwczovL2dob3N0ZXJ5LWNvbGxlY3Rvci5naG9zdGVyeS5jb20vc291cmNlbWFwanNvblwiLFxuICAgIFwiRU5EUE9JTlRfTE9PS1VQX1RBQkxFX1BST1ZJREVSXCI6IFwiaHR0cHM6Ly9naG9zdGVyeS1jb2xsZWN0b3IuZ2hvc3RlcnkuY29tL2xvb2t1cHRhYmxlXCIsXG4gICAgXCJFTkRQT0lOVF9LRVlTX1BST1ZJREVSXCI6IFwiaHR0cHM6Ly9naG9zdGVyeS1jb2xsZWN0b3IuZ2hvc3RlcnkuY29tL3NpZ25lcktleVwiLFxuICAgIFwiRU5EUE9JTlRfUFJPWFlfTElTVF9QUk9WSURFUlwiOiBcImh0dHBzOi8vZ2hvc3RlcnktY29sbGVjdG9yLmdob3N0ZXJ5LmNvbS9wcm94eUxpc3RcIixcbiAgICBcIkVORFBPSU5UX1BBVFRFUk5TVVJMXCI6IFwiaHR0cHM6Ly9zYWZlLWJyb3dzaW5nLmdob3N0ZXJ5LmNvbS9wYXR0ZXJuc1wiLFxuICAgIFwiRU5EUE9JTlRfQU5PTlBBVFRFUk5TVVJMXCI6IFwiaHR0cHM6Ly9zYWZlLWJyb3dzaW5nLmdob3N0ZXJ5LmNvbS9wYXR0ZXJucy1hbm9uXCIsXG4gICAgXCJFTkRQT0lOVF9DT05GSUdVUkxcIjogXCJodHRwczovL3NhZmUtYnJvd3NpbmcuZ2hvc3RlcnkuY29tL3RzLWNvbmZpZ1wiLFxuICAgIFwiRU5EUE9JTlRfU0FGRV9RVU9SVU1fRU5EUE9JTlRcIjogXCJodHRwczovL3NhZmUtYnJvd3NpbmctcXVvcnVtLmdob3N0ZXJ5LmNvbS9cIixcbiAgICBcIkVORFBPSU5UX1NBRkVfUVVPUlVNX1BST1ZJREVSXCI6IFwiaHR0cHM6Ly9zYWZlLWJyb3dzaW5nLXF1b3J1bS5naG9zdGVyeS5jb20vY29uZmlnXCIsXG4gICAgXCJNU0dDSEFOTkVMXCI6IFwid2ViLWV4dGVuc2lvblwiLFxuICAgIFwiS0VZX0RTX1BVQktFWVwiOiBcIk1JSUJJakFOQmdrcWhraUc5dzBCQVFFRkFBT0NBUThBTUlJQkNnS0NBUUVBd1hvNGhYdmJvS0hDZ2dOSjBVTkZ2WlFmRFdpMGpOY0Yxa0JIdGh4aWxNdTZMQi9oRnJTTVErL0ZnVHFWRTM2Y0NleldFMEsxVWN3bVlHVnN1cXhjdnFsODJSZkNtWVVWQnJvSjNVRkc4cW5ldFlmVTVGT2s0M0M1NTVwNWw1SHpsRjhRaWxjQ1VCQ080U0NqOWxFWjMvOEZKYm9DdXBUcXhFVXE3bndVZ2FOWk9pR0tNZERVQlpKTzF0VzRMU0g0bGo5SUFaY2NFSjVIS1ZtSktvcFEzaG16V2dEcW93eG5pNE5ReiswRG5zU2ZDR0F1cEthSkR4amZhakpvc1g1aTY3NHJnZEhiWkd0Z0hCM005amhjNkhGTlBjbXRVZ0x3Z3RVdFJ3TWhTbnlhNnEvTzA2ZXVvdU5pMWgwbTVlUnJXZU1SbEpTZFVuZWxMU1U4UU55N0xRSURBUUFCXCIsXG4gICAgXCJLRVlfU0VDVVJFX0xPR0dFUl9QVUJLRVlcIjogXCJNSUlDSWpBTkJna3Foa2lHOXcwQkFRRUZBQU9DQWc4QU1JSUNDZ0tDQWdFQWg1SGhjUkFuNis2d29YUVhsL050WitmT29vTmdsWmN0L0hTcFl1cWtjbXJQYXVIVzdFdU9TcTVidnBCWlJURFJPalIva1VQb21xVlpJenFoZENGUEE4QndYU0N6N2hBZWwyUTE1N3Z0QnZoOXNuZ01NTFhiNUZnemVmNU40RXVLTzhwTDVLclMrSTl0ZlphYzQxdkZKU2RwZ0FpclpZaGgrdGRjUVExejBRdi9SdzB6T1hqZnZkZEN6M2dFdjJnQjlLc0xNVm5UUzFKNFlPT2dmemEyYWRnOUViejF6OTlEaUY0dnRDd24wSVV3SC8zVG9UQndKTGJNbkMzT2w0M3lCTms4cmdLMm1rZ0NpNjE0dk9TRDNoblZtaW8raVc2K0FVa2xNOFZQbDZsN2hFSzljbGpKWSs5VXNNVm1UcnZhRmJNUHdTNkFkWkNYS1RtTmRhTUpjeTN6U09YdTV6dnppaG9RTHdBdTlMTTNsMmVWazBNdzBLN0pYT1AyMGZjOEJ0eldDT0xZVlAzMnI0UjBCTnVoVHR2R3FqSE5aSFBKTjVPd2F4a0xwbjJkdWpMOXVEV0dqUmlPSXRLTVZxL25PcW1OR2docmJmOElPYUtUN1ZRaHFPVTRjWFJrQi91RjFVallFVEJhdndVWkF4eDlXZC9jTWNBR21LaUR4aWdoeHhRMjlqRHVmbCsyV0cwNjV0bUp6K3pDeG1nclBoNlpiM0tGVXhQVGU2eWtzQWhXSmhtR1NoQTl2MjB0ODRNNWM2TnBaWG9Vc0ZjVmphNlh4ekhlU0I4ZFdxOVV1NVFjWjgzR3ovcm9ud2RFalQyT0dUdEJnT0ZlVERxTFlVZ3BoQzFnY1VFSE9DblROWFJNUU9YcUd3QmZaSHArTXE2MVFjTXEyck5TN3hFQ0F3RUFBUT09XCIsXG4gICAgXCJmcmFtZVNjcmlwdFdoaXRlbGlzdFwiOiBbXVxuICB9LFxuICBcImRlZmF1bHRfcHJlZnNcIjoge1xuICAgIFwib2ZmZXJzMkZlYXR1cmVFbmFibGVkXCI6IHRydWUsXG4gICAgXCJvZmZlcnNMb2dzRW5hYmxlZFwiOiBmYWxzZSxcbiAgICBcInNob3dDb25zb2xlTG9nc1wiOiBmYWxzZVxuICB9LFxuICBcIm1vZHVsZXNcIjogW1xuICAgIFwiY29yZVwiLFxuICAgIFwibWVzc2FnZS1jZW50ZXJcIixcbiAgICBcImhwblwiLFxuICAgIFwic3RhdGljXCIsXG4gICAgXCJvZmZlcnMtdjJcIlxuICBdLFxuICBcImVudmlyb25tZW50XCI6IFwicHJvZHVjdGlvblwiLFxuICBcIkVYVEVOU0lPTl9WRVJTSU9OXCI6IFwiNy4xNy4xXCIsXG4gIFwiaW5zdHJ1bWVudEZ1bmN0aW9uc1wiOiBcIlwiXG59IiwiaW1wb3J0IG1lc3NhZ2VDb250ZXh0IGZyb20gJy4vbWVzc2FnZS1jb250ZXh0JztcbmltcG9ydCB7IHNoYTEgfSBmcm9tICcuLi8uLi9jb3JlL2NyeXB0by91dGlscyc7XG5pbXBvcnQgbWQ1IGZyb20gJ21kNSc7XG5pbXBvcnQgcmFuZEJpZ0ludCBmcm9tICdiaWdpbnQnO1xuaW1wb3J0IHVzZXJQSyBmcm9tICcuL3VzZXItcGsnO1xuaW1wb3J0IHsgcGFyc2VEU0tleSB9IGZyb20gJy4vYmxpbmQtc2lnbmF0dXJlJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vY29yZS9jb25maWcnO1xuXG4vLyBHbG9iYWwgdmFyaWFibGVzXG5jb25zdCBDbGlxelNlY3VyZU1lc3NhZ2UgPSB7fTtcbmV4cG9ydCBsZXQgbG9jYWxUZW1wb3JhbFVuaXEgPSB7fTtcbkNsaXF6U2VjdXJlTWVzc2FnZS5CTElORF9TSUdORVIgPSBjb25maWcuc2V0dGluZ3MuRU5EUE9JTlRfQkxJTkRfU0lHTkVSO1xuQ2xpcXpTZWN1cmVNZXNzYWdlLlVTRVJfUkVHID0gY29uZmlnLnNldHRpbmdzLkVORFBPSU5UX1VTRVJfUkVHO1xuXG5zZWxmLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGUpIHtcbiAgY29uc3QgbXNnVHlwZSA9IGUuZGF0YS50eXBlO1xuXG4gIGlmKCBtc2dUeXBlID09PSAnaW5zdGFudCcgKSB7XG4gICAgY29uc3QgbXNnID0gZS5kYXRhLm1zZztcbiAgICBjb25zdCB1aWQgPSAgZS5kYXRhLnVpZDtcbiAgICBjb25zdCByZXNwb25zZSA9IHt9O1xuICAgIENsaXF6U2VjdXJlTWVzc2FnZS5zb3VyY2VNYXAgPSBlLmRhdGEuc291cmNlbWFwO1xuICAgIENsaXF6U2VjdXJlTWVzc2FnZS51UEsgPSBlLmRhdGEudXBrO1xuICAgIGNvbnN0IHF1ZXJ5UHJveHlVcmwgPSBlLmRhdGEucXVlcnlQcm94eVVybDtcbiAgICBDbGlxelNlY3VyZU1lc3NhZ2UuZHNQSyA9IGUuZGF0YS5kc3BrO1xuICAgIENsaXF6U2VjdXJlTWVzc2FnZS5zZWN1cmVMb2dnZXIgPSBlLmRhdGEuc3NwaztcblxuICAgIGNvbnN0IG1jID0gbmV3IG1lc3NhZ2VDb250ZXh0KG1zZyk7XG4gICAgbWMucXVlcnkocXVlcnlQcm94eVVybCkudGhlbiggcmVzdWx0ID0+IHtcbiAgICAgIHJlc3BvbnNlLnJlcyA9IHJlc3VsdDtcbiAgICAgIHJlc3BvbnNlLnVpZCA9IHVpZDtcbiAgICAgIHJlc3BvbnNlLnR5cGUgPSAnaW5zdGFudCc7XG4gICAgICBwb3N0TWVzc2FnZShyZXNwb25zZSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAobXNnVHlwZSA9PT0gJ3RlbGVtZXRyeScpIHtcbiAgICBjb25zdCBtc2cgPSBlLmRhdGEubXNnO1xuICAgIGNvbnN0IHJlc3BvbnNlID0ge307XG4gICAgcmVzcG9uc2UudHlwZSA9ICd0ZWxlbWV0cnknO1xuICAgIGxldCBtYyA9IG51bGw7XG4gICAgQ2xpcXpTZWN1cmVNZXNzYWdlLnNvdXJjZU1hcCA9IGUuZGF0YS5zb3VyY2VtYXA7XG4gICAgQ2xpcXpTZWN1cmVNZXNzYWdlLnVQSyA9IGUuZGF0YS51cGs7XG4gICAgQ2xpcXpTZWN1cmVNZXNzYWdlLmRzUEsgPSBlLmRhdGEuZHNwaztcbiAgICBDbGlxelNlY3VyZU1lc3NhZ2Uuc2VjdXJlTG9nZ2VyID0gZS5kYXRhLnNzcGs7XG4gICAgQ2xpcXpTZWN1cmVNZXNzYWdlLnJvdXRlVGFibGUgPSBlLmRhdGEucm91dGV0YWJsZTtcbiAgICBsb2NhbFRlbXBvcmFsVW5pcSA9IGUuZGF0YS5sb2NhbFRlbXBvcmFsVW5pcTtcblxuICAgIHRyeSB7XG4gICAgICBtYyA9IG5ldyBtZXNzYWdlQ29udGV4dChtc2cpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXNwb25zZS5sb2NhbFRlbXBvcmFsVW5pcSA9IGxvY2FsVGVtcG9yYWxVbmlxO1xuICAgICAgICBwb3N0TWVzc2FnZShyZXNwb25zZSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwYXJzZURTS2V5KCkudGhlbiggZSA9PiB7XG4gICAgICBtYy5lbmNyeXB0ZWRUZWxlbWV0cnkoKS50aGVuKCByZXN1bHQgPT4ge1xuICAgICAgICByZXNwb25zZS5sb2NhbFRlbXBvcmFsVW5pcSA9IGxvY2FsVGVtcG9yYWxVbmlxO1xuICAgICAgICBwb3N0TWVzc2FnZShyZXNwb25zZSk7XG4gICAgICB9KS5jYXRjaCggZXJyID0+IHtcbiAgICAgICAgcmVzcG9uc2UubG9jYWxUZW1wb3JhbFVuaXEgPSBsb2NhbFRlbXBvcmFsVW5pcTtcbiAgICAgICAgcG9zdE1lc3NhZ2UocmVzcG9uc2UpO1xuICAgICAgfSk7XG4gICAgfSlcbiAgfVxuXG4gIGlmIChtc2dUeXBlID09PSAndXNlci1rZXknKSB7XG4gICAgY29uc3QgdXBrID0gbmV3IHVzZXJQSygpO1xuICAgIHVway5nZW5lcmF0ZUtleSgpLnRoZW4oIGUgPT4ge1xuICAgICAgcG9zdE1lc3NhZ2UoZSk7XG4gICAgfSkuY2F0Y2goIGUgPT4gcG9zdE1lc3NhZ2UoZSkpO1xuICB9XG5cbiAgaWYgKG1zZ1R5cGUgPT09ICd0ZXN0Jykge1xuICAgIGNvbnN0IG1zZyA9IGUuZGF0YS5tc2c7XG4gICAgY29uc3QgcmVzcG9uc2UgPSB7fTtcbiAgICByZXNwb25zZS50eXBlID0gJ3Rlc3QnO1xuICAgIENsaXF6U2VjdXJlTWVzc2FnZS5zb3VyY2VNYXAgPSBlLmRhdGEuc291cmNlbWFwO1xuICAgIENsaXF6U2VjdXJlTWVzc2FnZS51UEsgPSBlLmRhdGEudXBrO1xuICAgIENsaXF6U2VjdXJlTWVzc2FnZS5kc1BLID0gZS5kYXRhLmRzcGs7XG4gICAgQ2xpcXpTZWN1cmVNZXNzYWdlLnJvdXRlVGFibGUgPSBlLmRhdGEucm91dGV0YWJsZTtcbiAgICBsb2NhbFRlbXBvcmFsVW5pcSA9IGUuZGF0YS5sb2NhbFRlbXBvcmFsVW5pcTtcblxuICAgIGNvbnN0IG1jID0gbmV3IG1lc3NhZ2VDb250ZXh0KG1zZyk7XG4gICAgbWMuZ2V0cHJveHlDb29yZGluYXRvcigpXG4gICAgICAudGhlbiggZSA9PiB7XG4gICAgICAgIHJlc3BvbnNlLm1jID0gbWM7XG4gICAgICAgIHBvc3RNZXNzYWdlKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgaWYgKG1zZ1R5cGUgPT09ICd0ZXN0LXNoYTEnIHx8IG1zZ1R5cGUgPT09ICdody1zaGExJykge1xuICAgIHNoYTEoZS5kYXRhLm1zZylcbiAgICAgIC50aGVuKCByZXN1bHQgPT4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHt9O1xuICAgICAgICByZXNwb25zZS5yZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgIHBvc3RNZXNzYWdlKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgaWYgKG1zZ1R5cGUgPT09ICd0ZXN0LW1kNScgfHwgbXNnVHlwZSA9PT0gJ2h3LW1kNScpIHtcbiAgICBsZXQgX2hhc2ggPSBtZDUubWQ1KGUuZGF0YS5tc2cpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0ge307XG4gICAgcmVzcG9uc2UucmVzdWx0ID0gX2hhc2g7XG4gICAgcG9zdE1lc3NhZ2UocmVzcG9uc2UpO1xuICB9XG5cbiAgaWYgKG1zZ1R5cGUgPT09ICd0ZXN0LWJpZ2ludCcgfHwgbXNnVHlwZSA9PT0gJ2h3LWJpZ2ludCcpIHtcbiAgICBsZXQgcm5kID0gcmFuZEJpZ0ludC5yYW5kQmlnSW50KDEwMjQsIDEpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0ge307XG4gICAgcmVzcG9uc2UucmVzdWx0ID0gcm5kO1xuICAgIHBvc3RNZXNzYWdlKHJlc3BvbnNlKTtcbiAgfVxuXG4gIGlmIChtc2dUeXBlID09PSAndGVzdC1yc2Etc2lnbicpIHtcbiAgICBjb25zdCBtc2cgPSBlLmRhdGEubXNnO1xuICAgIGNvbnN0IHJlc3BvbnNlID0ge307XG4gICAgQ2xpcXpTZWN1cmVNZXNzYWdlLnVQSyA9IHsncHJpdmF0ZUtleScgOiBlLmRhdGEudXBrfTtcbiAgICBjb25zdCB1UEsgPSBuZXcgdXNlclBLKG1zZyk7XG5cbiAgICB1UEsuc2lnbihtc2cpXG4gICAgICAudGhlbiggcmVzdWx0ID0+IHtcbiAgICAgICAgcmVzcG9uc2UucmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICBwb3N0TWVzc2FnZShyZXNwb25zZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKCBlcnIgPT4ge1xuICAgICAgICByZXNwb25zZS5yZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgcG9zdE1lc3NhZ2UocmVzcG9uc2UpO1xuICAgICAgfSk7XG4gIH1cblxuICBpZiAoIG1zZ1R5cGUgPT09ICd0ZXN0LXJzYS12ZXJpZnknICl7XG4gICAgY29uc3Qgc2lnbmF0dXJlID0gZS5kYXRhLnNpZztcbiAgICBjb25zdCBtc2cgPSBlLmRhdGEubXNnO1xuICAgIGNvbnN0IHJlc3BvbnNlID0ge307XG5cbiAgICBDbGlxelNlY3VyZU1lc3NhZ2UudVBLID0geydwcml2YXRlS2V5JyA6IGUuZGF0YS51cGt9O1xuICAgIGNvbnN0IHVQSyA9IG5ldyB1c2VyUEsobXNnKTtcblxuICAgIHVQSy52ZXJpZnkoc2lnbmF0dXJlLCBtc2cpXG4gICAgICAudGhlbiggcmVzdWx0ID0+IHtcbiAgICAgICAgcmVzcG9uc2UucmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICBwb3N0TWVzc2FnZShyZXNwb25zZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKCBlcnIgPT4ge1xuICAgICAgICByZXNwb25zZS5yZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgcG9zdE1lc3NhZ2UocmVzcG9uc2UpO1xuICAgICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENsaXF6U2VjdXJlTWVzc2FnZTtcbiJdfQ==