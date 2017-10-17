LPServer=function(){var e=null,r=null,t=function(e,r){if(4===e.readyState)if(200===e.status)switch(r.dataType){case"xml":r.success(e.responseXML,e.responseText);break;case"json":var t=null;try{t=JSON.parse(e.responseText)}catch(e){}r.success(t,e.responseText);break;default:r.success(e.responseText)}else r.error&&r.error(e,e.statusText)},n=function(){var e=function(e){var r={};for(var t in e){var n=e[t];if(null!==n&&void 0!==n||(n=""),"object"==typeof n)for(var o in n)n.hasOwnProperty(o)&&(r[t+"["+o+"]"]=n[o]);else r[t]=n}return r},r=function(t,n){t=e(t),n=n||"";var o=[];for(var i in t){var u=t[i];"object"==typeof u?o=o.concat(r(u,i)):(n&&(i=n+"["+i+"]"),o.push(i+"="+encodeURIComponent(u)))}return o};return function(e){return r(e).join("&")}}(),o=function(e){var r=new XMLHttpRequest,o=e.contentType||"application/x-www-form-urlencoded";e.success&&(r.onload=function(){t(r,e)}),e.error&&(r.onerror=function(){e.error(r,r.statusText)});var i=function(){return"application/json"===o?JSON.stringify(e.data):n(e.data)},u=e.url;if("GET"===e.type){var a=i();u=e.url+(a.length>0?"?"+a:"")}r.open(e.type||"GET",u,!0),"POST"===e.type?(r.setRequestHeader("Content-Type",o),e.beforeSend&&e.beforeSend(r,e),r.send(i())):(e.beforeSend&&e.beforeSend(r,e),r.send())},i=function(r,t){O.ajax({type:"POST",url:O.getBaseURL()+"getCSRFToken.php",success:function(t){e=t,r(e)},error:u(t)})},u=function(e){return function(r,t,n){"function"==typeof e?e():console.error(n)}},a=function(e,r,t,n){c(e,r,t,n)||r.error&&r.error(t)},c=function(){var e=function(e,r,t,n){if(e){var o=e[t];if("function"==typeof o)return o(n,r),!0}return!1};return function(r,t,n,o){var i=e(r,t,n,o);return i=e(t.callbacks,t,n,o)||i}}(),s=function(e,r){try{O.logException(e)}catch(e){}if(e instanceof N?r.error(e.message):r.error(),LPServer.throwExceptions)throw e},f=function(e,r){return function(t,n){try{if(c(e,r,n))return;if(null===t&&n&&"undefined"!=typeof DOMParser)try{t=(new DOMParser).parseFromString(n,"application/xml")}catch(e){}null===t?r.error("invalidxml"):y(t,e,r)}catch(e){s(e,r)}}},p=function(e,r){return e.getElementsByTagName(r)},l=function(e,r){var t=p(e,r);return t.length>0?t[0]:null},d=function(e,r){var t=l(e,r);return t?t.textContent:""},y=function(e,r,t){var n=l(e,"result"),o=l(e,"ok"),i=l(e,"error"),u=l(e,"failed");if(n){var s=n.getAttribute("rc"),f=n.getAttribute("msg"),p=n.getAttribute("success"),y=n.getAttribute("ok");if(s)return void a(r,t,s,n);if(f)return void a(r,t,f,n);if(p)return void a(r,t,p,n);if(y)return void a(r,t,"ok");var v=n.textContent.trim();if("ok"===v)return void(c(r,t,"ok")||a(r,t,d(e,"status")));if("bad"===v)return void t.error(d(e,"message"))}else{if(o)return void a(r,t,"ok",o);if(i)return void(c(r,t,i.getAttribute("cause"),i)||a(r,t,i.getAttribute("message"),i));if(u)return void a(r,t,u.getAttribute("reason"),u)}"function"==typeof t.error&&t.error()},v=function(e,r){return function(t,n){try{if(null===t&&n)r.error("invalidjson");else{if(t.error)return void(c(e,r,t.error,t)||r.error&&r.error(t.errortxt||t.error));if(t.hasOwnProperty("success")){if(t.success&&c(e,r,"success",t))return;if(!t.success)return void(r.error&&r.error())}else if(t.res){if("success"!==t.res)return void(c(e,r,t.res,t)||r.error&&r.error(t.errortxt));if(c(e,r,t.res,t))return}else{if(c(e,r,t.reason,t))return;if(c(e,r,t.status,t))return;if(c(e,r,t.cmd,t))return}}e&&"function"==typeof e.default?e.default(t,r):"function"==typeof r.success&&r.success(t)}catch(e){s(e,r)}}},S=function(e,r){return function(t,n){var o;try{o=JSON.parse(t.responseText)}catch(e){return void r.error("invalidjson")}c(e,r,o.code,o)||r.error(o.message)}},b=function(e,r,t){for(var n=[],o=0;o<t;++o)n.push(w(e,r+o));return n},g=function(r){if(r.userSupplied=r.userSupplied||{},r.type=void 0===r.type?"POST":r.type,r.url=O.getBaseURL()+r.url,r.data=E(r.data,r.userSupplied.requestArgs),void 0===r.error&&r.userSupplied.error&&(r.error=u(r.userSupplied.error)),r.data&&void 0===r.data.token&&(void 0===r.CSRFToken||r.CSRFToken)&&null===e)return void i(function(){O.ajax(r)},r.userSupplied.error);O.ajax(r)},k=function(e,r){var t={},n=r.userSupplied;switch("object"!=typeof n&&(n=r.userSupplied={}),typeof r.success){case"string":return t[r.success]=n.success,e(t,n);case"function":return t.default=r.success,e(t,n);default:if(r.callbacks||n.success||n.callbacks)return e(r.callbacks,n)}return null},x=function(r,t){t.data&&void 0===t.data.token&&(void 0===t.CSRFToken||t.CSRFToken)&&(t.data.token=e)},h=function(e){e.dataType="json",e.beforeSend=j(e.beforeSend,x),e.success=k(v,e),g(e)},m=function(e){e.dataType="xml",e.beforeSend=j(e.beforeSend,x),e.success=k(f,e),g(e)},_=function(e){e.dataType="text",e.beforeSend=j(e.beforeSend,x),g(e)},T=function(e,r,t){t=t||[];for(var n in r){var o=e[n],i=r[n];if("object"==typeof i)T(o,i,t.concat(n));else if(typeof o!==i)throw t.push(n),"Extension is missing the following property: "+t.join(".")+" ("+i+")"}},R=function(e,t){T(e,C);for(var n in t)O[n]=t[n];for(var o in P)O[o]=e[o];r=e},w=function(e,r,t){var n=e.getAttribute(r);return void 0===n?t:n},A=function(e,r,t){var n=parseInt(w(e,r,t));return isNaN(n)?t:n},E=function(e){e=e||{};for(var r=1,t=arguments.length;r<t;++r){var n=arguments[r];for(var o in n)e[o]=n[o]}return e},j=function(e,r){return e?function(){var t=r.apply(window,arguments);e.apply(window,t||arguments)}:r},C={StringUtils:{translate:"function"},AES:{Encrypt:"function",Decrypt:"function",hex2bin:"function",bin2hex:"function"},enc:"function",dec:"function",RSAKey:"function",createRandomHexString:"function",parse_public_key:"function",parse_private_key:"function",enccbc:"function",make_lp_key_iterations:"function",make_lp_hash_iterations:"function",get_random_password:"function"},P={RSAKey:!0},O={ajax:o,translate:function(){return r.StringUtils.translate.apply(r.StringUtils,arguments)},logException:function(){},hex2bin:function(){return r.AES.hex2bin.apply(r.AES,arguments)},bin2hex:function(){return r.AES.bin2hex.apply(r.AES,arguments)},encryptAES:function(e,t){return e.length>0?r.AES.Encrypt({pass:t,data:e,b64:!0,bits:256}):e},decryptAES:function(e,t){return r.AES.Decrypt({pass:t,data:e,b64:!0,bits:256})},encrypt:function(e,t){return r.enc(e,t)},decrypt:function(e,t){try{return r.dec(e,t)}catch(e){return""}},createRandomHexString:function(){return r.createRandomHexString.apply(r,arguments)},parsePublicKey:function(){return r.parse_public_key.apply(r,arguments)},parsePrivateKey:function(e,t){if(!(t=t||r.rsaprivatekeyhex))throw"rsaprivatekeyhex required for this action.";return r.parse_private_key(e,t)},extractPrivateKey:function(e,t){return r.rsa_extract_privatekey(e,t)},encryptCBC:function(){return r.enccbc.apply(r,arguments)},makeKey:function(){return r.make_lp_key_iterations.apply(r,arguments)},makeHash:function(){return r.make_lp_hash_iterations.apply(r,arguments)},makeRandomPassword:function(){return r.get_random_password.apply(r,arguments)},getBaseURL:function(){return r.base_url||""},getLocalKey:function(){return r.g_local_key},setLocalKey:function(e){r.g_local_key=e}},N=function(e){this.message=e,this.stack=(new Error).stack};N.prototype=Object.create(Error.prototype),N.prototype.name="ClientException",N.prototype.constructor=N;var q=function(){e=null},F=function(e,r){e.callbacks&&"function"==typeof e.callbacks[r]&&e.callbacks[r].apply(window,Array.prototype.slice.call(arguments,2))},K=function(){var r=function(r){r.setRequestHeader("X-CSRF-TOKEN",e)};return{jsonRequest:function(e){e.dataType="json",e.contentType="application/json",e.beforeSend=j(e.beforeSend,r),e.error=S(e.callbacks,e.userSupplied||{}),g(e)}}}();return{ajax:o,getRecordsFromResponse:b,jsonRequest:h,xmlRequest:m,textRequest:_,initialize:R,ext:O,getNodes:p,getNode:l,getNodeText:d,getAttr:w,getAttrInt:A,extend:E,extendCallback:j,ClientException:N,clearCSRFToken:q,callback:F,lmiapi:K}}();