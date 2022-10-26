(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6271],{4098:function(e,t){var n="undefined"!==typeof self?self:this,r=function(){function e(){this.fetch=!1,this.DOMException=n.DOMException}return e.prototype=n,new e}();!function(e){!function(t){var n="URLSearchParams"in e,r="Symbol"in e&&"iterator"in Symbol,i="FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),o="FormData"in e,a="ArrayBuffer"in e;if(a)var s=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],u=ArrayBuffer.isView||function(e){return e&&s.indexOf(Object.prototype.toString.call(e))>-1};function c(e){if("string"!==typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function f(e){return"string"!==typeof e&&(e=String(e)),e}function l(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return r&&(t[Symbol.iterator]=function(){return t}),t}function p(e){this.map={},e instanceof p?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function d(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function h(e){return new Promise((function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function y(e){var t=new FileReader,n=h(t);return t.readAsArrayBuffer(e),n}function v(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function m(){return this.bodyUsed=!1,this._initBody=function(e){var t;this._bodyInit=e,e?"string"===typeof e?this._bodyText=e:i&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:o&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:n&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():a&&i&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=v(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):a&&(ArrayBuffer.prototype.isPrototypeOf(e)||u(e))?this._bodyArrayBuffer=v(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"===typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i&&(this.blob=function(){var e=d(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?d(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(y)}),this.text=function(){var e=d(this);if(e)return e;if(this._bodyBlob)return function(e){var t=new FileReader,n=h(t);return t.readAsText(e),n}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},o&&(this.formData=function(){return this.text().then(w)}),this.json=function(){return this.text().then(JSON.parse)},this}p.prototype.append=function(e,t){e=c(e),t=f(t);var n=this.map[e];this.map[e]=n?n+", "+t:t},p.prototype.delete=function(e){delete this.map[c(e)]},p.prototype.get=function(e){return e=c(e),this.has(e)?this.map[e]:null},p.prototype.has=function(e){return this.map.hasOwnProperty(c(e))},p.prototype.set=function(e,t){this.map[c(e)]=f(t)},p.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},p.prototype.keys=function(){var e=[];return this.forEach((function(t,n){e.push(n)})),l(e)},p.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),l(e)},p.prototype.entries=function(){var e=[];return this.forEach((function(t,n){e.push([n,t])})),l(e)},r&&(p.prototype[Symbol.iterator]=p.prototype.entries);var b=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function g(e,t){var n=(t=t||{}).body;if(e instanceof g){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new p(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,n||null==e._bodyInit||(n=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new p(t.headers)),this.method=function(e){var t=e.toUpperCase();return b.indexOf(t)>-1?t:e}(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function w(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),i=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(i))}})),t}function O(e){var t=new p;return e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(e){var n=e.split(":"),r=n.shift().trim();if(r){var i=n.join(":").trim();t.append(r,i)}})),t}function E(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new p(t.headers),this.url=t.url||"",this._initBody(e)}g.prototype.clone=function(){return new g(this,{body:this._bodyInit})},m.call(g.prototype),m.call(E.prototype),E.prototype.clone=function(){return new E(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new p(this.headers),url:this.url})},E.error=function(){var e=new E(null,{status:0,statusText:""});return e.type="error",e};var x=[301,302,303,307,308];E.redirect=function(e,t){if(-1===x.indexOf(t))throw new RangeError("Invalid status code");return new E(null,{status:t,headers:{location:e}})},t.DOMException=e.DOMException;try{new t.DOMException}catch(T){t.DOMException=function(e,t){this.message=e,this.name=t;var n=Error(e);this.stack=n.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOMException.prototype.constructor=t.DOMException}function _(e,n){return new Promise((function(r,o){var a=new g(e,n);if(a.signal&&a.signal.aborted)return o(new t.DOMException("Aborted","AbortError"));var s=new XMLHttpRequest;function u(){s.abort()}s.onload=function(){var e={status:s.status,statusText:s.statusText,headers:O(s.getAllResponseHeaders()||"")};e.url="responseURL"in s?s.responseURL:e.headers.get("X-Request-URL");var t="response"in s?s.response:s.responseText;r(new E(t,e))},s.onerror=function(){o(new TypeError("Network request failed"))},s.ontimeout=function(){o(new TypeError("Network request failed"))},s.onabort=function(){o(new t.DOMException("Aborted","AbortError"))},s.open(a.method,a.url,!0),"include"===a.credentials?s.withCredentials=!0:"omit"===a.credentials&&(s.withCredentials=!1),"responseType"in s&&i&&(s.responseType="blob"),a.headers.forEach((function(e,t){s.setRequestHeader(t,e)})),a.signal&&(a.signal.addEventListener("abort",u),s.onreadystatechange=function(){4===s.readyState&&a.signal.removeEventListener("abort",u)}),s.send("undefined"===typeof a._bodyInit?null:a._bodyInit)}))}_.polyfill=!0,e.fetch||(e.fetch=_,e.Headers=p,e.Request=g,e.Response=E),t.Headers=p,t.Request=g,t.Response=E,t.fetch=_,Object.defineProperty(t,"__esModule",{value:!0})}({})}(r),r.fetch.ponyfill=!0,delete r.fetch.polyfill;var i=r;(t=i.fetch).default=i.fetch,t.fetch=i.fetch,t.Headers=i.Headers,t.Request=i.Request,t.Response=i.Response,e.exports=t},2445:function(e){"use strict";e.exports=function(e){var t=e.uri,n=e.name,r=e.type;this.uri=t,this.name=n,this.type=r}},804:function(e,t,n){"use strict";var r=n(1268);e.exports=function e(t,n,i){var o;void 0===n&&(n=""),void 0===i&&(i=r);var a=new Map;function s(e,t){var n=a.get(t);n?n.push.apply(n,e):a.set(t,e)}if(i(t))o=null,s([n],t);else{var u=n?n+".":"";if("undefined"!==typeof FileList&&t instanceof FileList)o=Array.prototype.map.call(t,(function(e,t){return s([""+u+t],e),null}));else if(Array.isArray(t))o=t.map((function(t,n){var r=e(t,""+u+n,i);return r.files.forEach(s),r.clone}));else if(t&&t.constructor===Object)for(var c in o={},t){var f=e(t[c],""+u+c,i);f.files.forEach(s),o[c]=f.clone}else o=t}return{clone:o,files:a}}},4823:function(e,t,n){"use strict";t.ReactNativeFile=n(2445),t.extractFiles=n(804),t.isExtractableFile=n(1268)},1268:function(e,t,n){"use strict";var r=n(2445);e.exports=function(e){return"undefined"!==typeof File&&e instanceof File||"undefined"!==typeof Blob&&e instanceof Blob||e instanceof r}},6230:function(e){e.exports="object"==typeof self?self.FormData:window.FormData},8458:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(4823),o=r(n(6230)),a=function(e){return i.isExtractableFile(e)||null!==e&&"object"===typeof e&&"function"===typeof e.pipe};t.default=function(e,t){var n=i.extractFiles({query:e,variables:t},"",a),r=n.clone,s=n.files;if(0===s.size)return JSON.stringify(r);var u=new("undefined"===typeof FormData?o.default:FormData);u.append("operations",JSON.stringify(r));var c={},f=0;return s.forEach((function(e){c[++f]=e})),u.append("map",JSON.stringify(c)),f=0,s.forEach((function(e,t){u.append(""+ ++f,t)})),u}},8687:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},s=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{u(r.next(e))}catch(t){o(t)}}function s(e){try{u(r.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))},u=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(s){o=[6,s],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},c=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},f=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.gql=t.request=t.rawRequest=t.GraphQLClient=t.ClientError=void 0;var l=a(n(4098)),p=l,d=n(9627),h=f(n(8458)),y=n(8308),v=n(8308);Object.defineProperty(t,"ClientError",{enumerable:!0,get:function(){return v.ClientError}});var m=function(e){var t={};return e&&("undefined"!==typeof Headers&&e instanceof Headers||e instanceof p.Headers?t=function(e){var t={};return e.forEach((function(e,n){t[n]=e})),t}(e):Array.isArray(e)?e.forEach((function(e){var n=e[0],r=e[1];t[n]=r})):t=e),t},b=function(){function e(e,t){this.url=e,this.options=t||{}}return e.prototype.rawRequest=function(e,t){return s(this,void 0,void 0,(function(){var n,i,o,a,s,f,p,d,v,b,g;return u(this,(function(u){switch(u.label){case 0:return n=this.options,i=n.headers,o=n.fetch,a=void 0===o?l.default:o,s=c(n,["headers","fetch"]),f=h.default(e,t),i=m(i),[4,a(this.url,r({method:"POST",headers:r(r({},"string"===typeof f?{"Content-Type":"application/json"}:{}),i),body:f},s))];case 1:return[4,w(p=u.sent())];case 2:if(d=u.sent(),p.ok&&!d.errors&&d.data)return v=p.headers,b=p.status,[2,r(r({},d),{headers:v,status:b})];throw g="string"===typeof d?{error:d}:d,new y.ClientError(r(r({},g),{status:p.status,headers:p.headers}),{query:e,variables:t})}}))}))},e.prototype.request=function(e,t){return s(this,void 0,void 0,(function(){var n,i,o,a,s,f,p,v,b,g;return u(this,(function(u){switch(u.label){case 0:return n=this.options,i=n.headers,o=n.fetch,a=void 0===o?l.default:o,s=c(n,["headers","fetch"]),i=m(i),f=function(e){return"string"===typeof e?e:d.print(e)}(e),p=h.default(f,t),[4,a(this.url,r({method:"POST",headers:r(r({},"string"===typeof p?{"Content-Type":"application/json"}:{}),i),body:p},s))];case 1:return[4,w(v=u.sent())];case 2:if(b=u.sent(),v.ok&&!b.errors&&b.data)return[2,b.data];throw g="string"===typeof b?{error:b}:b,new y.ClientError(r(r({},g),{status:v.status}),{query:f,variables:t})}}))}))},e.prototype.setHeaders=function(e){return this.options.headers=e,this},e.prototype.setHeader=function(e,t){var n,r=this.options.headers;return r?r[e]=t:this.options.headers=((n={})[e]=t,n),this},e}();function g(e,t,n){return s(this,void 0,void 0,(function(){return u(this,(function(r){return[2,new b(e).request(t,n)]}))}))}function w(e){var t=e.headers.get("Content-Type");return t&&t.startsWith("application/json")?e.json():e.text()}t.GraphQLClient=b,t.rawRequest=function(e,t,n){return s(this,void 0,void 0,(function(){return u(this,(function(r){return[2,new b(e).rawRequest(t,n)]}))}))},t.request=g,t.default=g,t.gql=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return e.reduce((function(e,n,r){return""+e+n+(r in t?t[r]:"")}),"")}},8308:function(e,t){"use strict";var n=this&&this.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0}),t.ClientError=void 0;var r=function(e){function t(n,r){var i=this,o=t.extractMessage(n)+": "+JSON.stringify({response:n,request:r});return i=e.call(this,o)||this,Object.setPrototypeOf(i,t.prototype),i.response=n,i.request=r,"function"===typeof Error.captureStackTrace&&Error.captureStackTrace(i,t),i}return n(t,e),t.extractMessage=function(e){try{return e.errors[0].message}catch(t){return"GraphQL Error (Code: "+e.status+")"}},t}(Error);t.ClientError=r},7297:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{Z:function(){return r}})},9627:function(e,t,n){"use strict";n.r(t),n.d(t,{print:function(){return p}});var r="function"===typeof Symbol&&"function"===typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):void 0;function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function o(e){return a(e,[])}function a(e,t){switch(i(e)){case"string":return JSON.stringify(e);case"function":return e.name?"[function ".concat(e.name,"]"):"[function]";case"object":return null===e?"null":function(e,t){if(-1!==t.indexOf(e))return"[Circular]";var n=[].concat(t,[e]),i=function(e){var t=e[String(r)];if("function"===typeof t)return t;if("function"===typeof e.inspect)return e.inspect}(e);if(void 0!==i){var o=i.call(e);if(o!==e)return"string"===typeof o?o:a(o,n)}else if(Array.isArray(e))return function(e,t){if(0===e.length)return"[]";if(t.length>2)return"[Array]";for(var n=Math.min(10,e.length),r=e.length-n,i=[],o=0;o<n;++o)i.push(a(e[o],t));1===r?i.push("... 1 more item"):r>1&&i.push("... ".concat(r," more items"));return"["+i.join(", ")+"]"}(e,n);return function(e,t){var n=Object.keys(e);if(0===n.length)return"{}";if(t.length>2)return"["+function(e){var t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if("Object"===t&&"function"===typeof e.constructor){var n=e.constructor.name;if("string"===typeof n&&""!==n)return n}return t}(e)+"]";var r=n.map((function(n){return n+": "+a(e[n],t)}));return"{ "+r.join(", ")+" }"}(e,n)}(e,t);default:return String(e)}}function s(e){var t=e.prototype.toJSON;"function"===typeof t||function(e,t){if(!Boolean(e))throw new Error(null!=t?t:"Unexpected invariant triggered.")}(0),e.prototype.inspect=t,r&&(e.prototype[r]=t)}function u(e){return null!=e&&"string"===typeof e.kind}s(function(){function e(e,t,n){this.start=e.start,this.end=t.end,this.startToken=e,this.endToken=t,this.source=n}return e.prototype.toJSON=function(){return{start:this.start,end:this.end}},e}()),s(function(){function e(e,t,n,r,i,o,a){this.kind=e,this.start=t,this.end=n,this.line=r,this.column=i,this.value=a,this.prev=o,this.next=null}return e.prototype.toJSON=function(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}},e}());var c={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},f=Object.freeze({});function l(e,t,n){var r=e[t];if(r){if(!n&&"function"===typeof r)return r;var i=n?r.leave:r.enter;if("function"===typeof i)return i}else{var o=n?e.leave:e.enter;if(o){if("function"===typeof o)return o;var a=o[t];if("function"===typeof a)return a}}}function p(e){return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c,r=void 0,i=Array.isArray(e),a=[e],s=-1,p=[],d=void 0,h=void 0,y=void 0,v=[],m=[],b=e;do{var g=++s===a.length,w=g&&0!==p.length;if(g){if(h=0===m.length?void 0:v[v.length-1],d=y,y=m.pop(),w){if(i)d=d.slice();else{for(var O={},E=0,x=Object.keys(d);E<x.length;E++){var _=x[E];O[_]=d[_]}d=O}for(var T=0,D=0;D<p.length;D++){var S=p[D][0],j=p[D][1];i&&(S-=T),i&&null===j?(d.splice(S,1),T++):d[S]=j}}s=r.index,a=r.keys,p=r.edits,i=r.inArray,r=r.prev}else{if(h=y?i?s:a[s]:void 0,null===(d=y?y[h]:b)||void 0===d)continue;y&&v.push(h)}var A,P=void 0;if(!Array.isArray(d)){if(!u(d))throw new Error("Invalid AST Node: ".concat(o(d),"."));var F=l(t,d.kind,g);if(F){if((P=F.call(t,d,h,y,v,m))===f)break;if(!1===P){if(!g){v.pop();continue}}else if(void 0!==P&&(p.push([h,P]),!g)){if(!u(P)){v.pop();continue}d=P}}}void 0===P&&w&&p.push([h,d]),g?v.pop():(r={inArray:i,index:s,keys:a,edits:p,prev:r},a=(i=Array.isArray(d))?d:null!==(A=n[d.kind])&&void 0!==A?A:[],s=-1,p=[],y&&m.push(y),y=d)}while(void 0!==r);return 0!==p.length&&(b=p[p.length-1][1]),b}(e,{leave:d})}var d={Name:function(e){return e.value},Variable:function(e){return"$"+e.name},Document:function(e){return y(e.definitions,"\n\n")+"\n"},OperationDefinition:function(e){var t=e.operation,n=e.name,r=m("(",y(e.variableDefinitions,", "),")"),i=y(e.directives," "),o=e.selectionSet;return n||i||r||"query"!==t?y([t,y([n,r]),i,o]," "):o},VariableDefinition:function(e){var t=e.variable,n=e.type,r=e.defaultValue,i=e.directives;return t+": "+n+m(" = ",r)+m(" ",y(i," "))},SelectionSet:function(e){return v(e.selections)},Field:function(e){var t=e.alias,n=e.name,r=e.arguments,i=e.directives,o=e.selectionSet,a=m("",t,": ")+n,s=a+m("(",y(r,", "),")");return s.length>80&&(s=a+m("(\n",b(y(r,"\n")),"\n)")),y([s,y(i," "),o]," ")},Argument:function(e){return e.name+": "+e.value},FragmentSpread:function(e){return"..."+e.name+m(" ",y(e.directives," "))},InlineFragment:function(e){var t=e.typeCondition,n=e.directives,r=e.selectionSet;return y(["...",m("on ",t),y(n," "),r]," ")},FragmentDefinition:function(e){var t=e.name,n=e.typeCondition,r=e.variableDefinitions,i=e.directives,o=e.selectionSet;return"fragment ".concat(t).concat(m("(",y(r,", "),")")," ")+"on ".concat(n," ").concat(m("",y(i," ")," "))+o},IntValue:function(e){return e.value},FloatValue:function(e){return e.value},StringValue:function(e,t){var n=e.value;return e.block?function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=-1===e.indexOf("\n"),i=" "===e[0]||"\t"===e[0],o='"'===e[e.length-1],a="\\"===e[e.length-1],s=!r||o||a||n,u="";return!s||r&&i||(u+="\n"+t),u+=t?e.replace(/\n/g,"\n"+t):e,s&&(u+="\n"),'"""'+u.replace(/"""/g,'\\"""')+'"""'}(n,"description"===t?"":"  "):JSON.stringify(n)},BooleanValue:function(e){return e.value?"true":"false"},NullValue:function(){return"null"},EnumValue:function(e){return e.value},ListValue:function(e){return"["+y(e.values,", ")+"]"},ObjectValue:function(e){return"{"+y(e.fields,", ")+"}"},ObjectField:function(e){return e.name+": "+e.value},Directive:function(e){return"@"+e.name+m("(",y(e.arguments,", "),")")},NamedType:function(e){return e.name},ListType:function(e){return"["+e.type+"]"},NonNullType:function(e){return e.type+"!"},SchemaDefinition:h((function(e){var t=e.directives,n=e.operationTypes;return y(["schema",y(t," "),v(n)]," ")})),OperationTypeDefinition:function(e){return e.operation+": "+e.type},ScalarTypeDefinition:h((function(e){return y(["scalar",e.name,y(e.directives," ")]," ")})),ObjectTypeDefinition:h((function(e){var t=e.name,n=e.interfaces,r=e.directives,i=e.fields;return y(["type",t,m("implements ",y(n," & ")),y(r," "),v(i)]," ")})),FieldDefinition:h((function(e){var t=e.name,n=e.arguments,r=e.type,i=e.directives;return t+(w(n)?m("(\n",b(y(n,"\n")),"\n)"):m("(",y(n,", "),")"))+": "+r+m(" ",y(i," "))})),InputValueDefinition:h((function(e){var t=e.name,n=e.type,r=e.defaultValue,i=e.directives;return y([t+": "+n,m("= ",r),y(i," ")]," ")})),InterfaceTypeDefinition:h((function(e){var t=e.name,n=e.interfaces,r=e.directives,i=e.fields;return y(["interface",t,m("implements ",y(n," & ")),y(r," "),v(i)]," ")})),UnionTypeDefinition:h((function(e){var t=e.name,n=e.directives,r=e.types;return y(["union",t,y(n," "),r&&0!==r.length?"= "+y(r," | "):""]," ")})),EnumTypeDefinition:h((function(e){var t=e.name,n=e.directives,r=e.values;return y(["enum",t,y(n," "),v(r)]," ")})),EnumValueDefinition:h((function(e){return y([e.name,y(e.directives," ")]," ")})),InputObjectTypeDefinition:h((function(e){var t=e.name,n=e.directives,r=e.fields;return y(["input",t,y(n," "),v(r)]," ")})),DirectiveDefinition:h((function(e){var t=e.name,n=e.arguments,r=e.repeatable,i=e.locations;return"directive @"+t+(w(n)?m("(\n",b(y(n,"\n")),"\n)"):m("(",y(n,", "),")"))+(r?" repeatable":"")+" on "+y(i," | ")})),SchemaExtension:function(e){var t=e.directives,n=e.operationTypes;return y(["extend schema",y(t," "),v(n)]," ")},ScalarTypeExtension:function(e){return y(["extend scalar",e.name,y(e.directives," ")]," ")},ObjectTypeExtension:function(e){var t=e.name,n=e.interfaces,r=e.directives,i=e.fields;return y(["extend type",t,m("implements ",y(n," & ")),y(r," "),v(i)]," ")},InterfaceTypeExtension:function(e){var t=e.name,n=e.interfaces,r=e.directives,i=e.fields;return y(["extend interface",t,m("implements ",y(n," & ")),y(r," "),v(i)]," ")},UnionTypeExtension:function(e){var t=e.name,n=e.directives,r=e.types;return y(["extend union",t,y(n," "),r&&0!==r.length?"= "+y(r," | "):""]," ")},EnumTypeExtension:function(e){var t=e.name,n=e.directives,r=e.values;return y(["extend enum",t,y(n," "),v(r)]," ")},InputObjectTypeExtension:function(e){var t=e.name,n=e.directives,r=e.fields;return y(["extend input",t,y(n," "),v(r)]," ")}};function h(e){return function(t){return y([t.description,e(t)],"\n")}}function y(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return null!==(t=null===e||void 0===e?void 0:e.filter((function(e){return e})).join(n))&&void 0!==t?t:""}function v(e){return m("{\n",b(y(e,"\n")),"\n}")}function m(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return null!=t&&""!==t?e+t+n:""}function b(e){return m("  ",e.replace(/\n/g,"\n  "))}function g(e){return-1!==e.indexOf("\n")}function w(e){return null!=e&&e.some(g)}}}]);