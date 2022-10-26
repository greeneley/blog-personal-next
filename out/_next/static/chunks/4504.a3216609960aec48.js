"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4504],{4504:function(e,t,n){n.r(t);var r=n(5893),o=n(2481),a=n(4929),i=n(5566);t.default=function(){var e=(0,i.Z)(),t=e.tier,n=e.loading,c=t>1?"Demos will be run automatically.":'You will need to run demos manually by clicking on the "Run" button present on the bottom right of some code snippets.';return(0,r.jsxs)(o.a,{variant:"danger",children:[(0,r.jsx)(a.c,{as:"p",children:"This blog post includes WebGL based demos that can be pretty heavy to run on some devices. To ensure the best reading experience (and avoid crashes) I automatically check your GPU tier when possible to decide whether to auto-run the demos or not."}),n?null:(0,r.jsxs)(a.c,{as:"p",variant:"info",children:["Your current device has a tier ",t," GPU. ",c]})]})}},5566:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(828);function o(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{d(r.next(e))}catch(e){a(e)}}function c(e){try{d(r.throw(e))}catch(e){a(e)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}d((r=r.apply(e,t||[])).next())}))}const a=["geforce 320m","geforce 8600","geforce 8600m gt","geforce 8800 gs","geforce 8800 gt","geforce 9400","geforce 9400m g","geforce 9400m","geforce 9600m gt","geforce 9600m","geforce fx go5200","geforce gt 120","geforce gt 130","geforce gt 330m","geforce gtx 285","google swiftshader","intel g41","intel g45","intel gma 4500mhd","intel gma x3100","intel hd 3000","intel q45","legacy","mali-2","mali-3","mali-4","quadro fx 1500","quadro fx 4","quadro fx 5","radeon hd 2400","radeon hd 2600","radeon hd 4670","radeon hd 4850","radeon hd 4870","radeon hd 5670","radeon hd 5750","radeon hd 6290","radeon hd 6300","radeon hd 6310","radeon hd 6320","radeon hd 6490m","radeon hd 6630m","radeon hd 6750m","radeon hd 6770m","radeon hd 6970m","sgx 543","sgx543"];function i(e){return e.toLowerCase().replace(/^angle ?\((.+)\)*$/,"$1").replace(/\s(\d{1,2}gb|direct3d.+$)|\(r\)| \([^)]+\)$/g,"").replace(/(?:vulkan|opengl) \d+\.\d+(?:\.\d+)?(?: \((.*)\))?/,"$1")}const c="undefined"==typeof window,d=(()=>{if(c)return;const{userAgent:e,platform:t,maxTouchPoints:n}=window.navigator,r=/(iphone|ipod|ipad)/i.test(e),o="iPad"===t||"MacIntel"===t&&n>0&&!window.MSStream;return{isIpad:o,isMobile:/android/i.test(e)||r||o,isSafari12:/Version\/12.+Safari/.test(e)}})();const l=[],s=[];function u(e,t){if(e===t)return 0;const n=e;e.length>t.length&&(e=t,t=n);let r=e.length,o=t.length;for(;r>0&&e.charCodeAt(~-r)===t.charCodeAt(~-o);)r--,o--;let a,i=0;for(;i<r&&e.charCodeAt(i)===t.charCodeAt(i);)i++;if(r-=i,o-=i,0===r)return o;let c,d,u=0,f=0,h=0;for(;f<r;)s[f]=e.charCodeAt(i+f),l[f]=++f;for(;h<o;)for(a=t.charCodeAt(i+h),c=h++,u=h,f=0;f<r;f++)d=a===s[f]?c:c+1,c=l[f],u=l[f]=c>u?d>u?u+1:d:d>c?c+1:d;return u}function f(e){return null!=e}class h extends Error{constructor(e){super(e),Object.setPrototypeOf(this,new.target.prototype)}}const g=({mobileTiers:e=[0,15,30,60],desktopTiers:t=[0,15,30,60],override:n={},glContext:r,failIfMajorPerformanceCaveat:l=!1,benchmarksURL:s="https://unpkg.com/detect-gpu@4.0.42/dist/benchmarks"}={})=>o(void 0,void 0,void 0,(function*(){const g={};if(c)return{tier:0,type:"SSR"};const{isIpad:p=!!(null==d?void 0:d.isIpad),isMobile:m=!!(null==d?void 0:d.isMobile),screenSize:v=window.screen,loadBenchmarks:w=(e=>o(void 0,void 0,void 0,(function*(){const t=yield fetch(`${s}/${e}`).then((e=>e.json()));if(parseInt(t.shift().split(".")[0],10)<4)throw new h("Detect GPU benchmark data is out of date. Please update to version 4x");return t})))}=n;let{renderer:b}=n;const x=(e,t,n,r,o)=>({device:o,fps:r,gpu:n,isMobile:m,tier:e,type:t});let y,A="";if(b)b=i(b),y=[b];else{const e=r||function(e,t=!1){const n={alpha:!1,antialias:!1,depth:!1,failIfMajorPerformanceCaveat:t,powerPreference:"high-performance",stencil:!1};e&&delete n.powerPreference;const r=window.document.createElement("canvas"),o=r.getContext("webgl",n)||r.getContext("experimental-webgl",n);return null!=o?o:void 0}(null==d?void 0:d.isSafari12,l);if(!e)return x(0,"WEBGL_UNSUPPORTED");const t=e.getExtension("WEBGL_debug_renderer_info");if(t&&(b=e.getParameter(t.UNMASKED_RENDERER_WEBGL)),!b)return x(1,"FALLBACK");A=b,b=i(b),y=function(e,t,n){return"apple gpu"===t?function(e,t,n){if(!n)return[t];const r=function(e){const t=e.createShader(35633),n=e.createShader(35632),r=e.createProgram();if(!(n&&t&&r))return;e.shaderSource(t,"\n    precision highp float;\n    attribute vec3 aPosition;\n    varying float vvv;\n    void main() {\n      vvv = 0.31622776601683794;\n      gl_Position = vec4(aPosition, 1.0);\n    }\n  "),e.shaderSource(n,"\n    precision highp float;\n    varying float vvv;\n    void main() {\n      vec4 enc = vec4(1.0, 255.0, 65025.0, 16581375.0) * vvv;\n      enc = fract(enc);\n      enc -= enc.yzww * vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 0.0);\n      gl_FragColor = enc;\n    }\n  "),e.compileShader(t),e.compileShader(n),e.attachShader(r,t),e.attachShader(r,n),e.linkProgram(r),e.detachShader(r,t),e.detachShader(r,n),e.deleteShader(t),e.deleteShader(n),e.useProgram(r);const o=e.createBuffer();e.bindBuffer(34962,o),e.bufferData(34962,new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),35044);const a=e.getAttribLocation(r,"aPosition");e.vertexAttribPointer(a,3,5126,!1,0,0),e.enableVertexAttribArray(a),e.clearColor(1,1,1,1),e.clear(16384),e.viewport(0,0,1,1),e.drawArrays(4,0,3);const i=new Uint8Array(4);return e.readPixels(0,0,1,1,6408,5121,i),e.deleteProgram(r),e.deleteBuffer(o),i.join("")}(e),o="801621810",a="8016218135",i="80162181161",c=(null==d?void 0:d.isIpad)?[["a7",i,12],["a8",a,15],["a8x",a,15],["a9",a,15],["a9x",a,15],["a10",a,15],["a10x",a,15],["a12",o,15],["a12x",o,15],["a12z",o,15],["a14",o,15],["m1",o,15]]:[["a7",i,12],["a8",a,12],["a9",a,15],["a10",a,15],["a11",o,15],["a12",o,15],["a13",o,15],["a14",o,15]];let l;return"80162181255"===r?l=c.filter((([,,e])=>e>=14)):(l=c.filter((([,e])=>e===r)),l.length||(l=c)),l.map((([e])=>`apple ${e} gpu`))}(e,t,n):[t]}(e,b,m)}const P=(yield Promise.all(y.map((function(e){var t;return o(this,void 0,void 0,(function*(){const n=(e=>{const t=m?["adreno","apple","mali-t","mali","nvidia","powervr"]:["intel","apple","amd","radeon","nvidia","geforce"];for(const n of t)if(e.includes(n))return n})(e);if(!n)return;const r=`${m?"m":"d"}-${n}${p?"-ipad":""}.json`,o=g[r]=null!==(t=g[r])&&void 0!==t?t:w(r);let a;try{a=yield o}catch(n){if(n instanceof h)throw n;return}const i=function(e){var t;const n=(e=e.replace(/\([^)]+\)/,"")).match(/\d+/)||e.match(/(\W|^)([A-Za-z]{1,3})(\W|$)/g);return null!==(t=null==n?void 0:n.join("").replace(/\W|amd/g,""))&&void 0!==t?t:""}(e);let c=a.filter((([,e])=>e===i));c.length||(c=a.filter((([t])=>t.includes(e))));const d=c.length;if(0===d)return;let l,[s,,,f]=d>1?c.map((t=>[t,u(e,t[0])])).sort((([,e],[,t])=>e-t))[0][0]:c[0],b=Number.MAX_VALUE;const{devicePixelRatio:x}=window,y=v.width*x*v.height*x;for(const e of f){const[t,n]=e,r=t*n,o=Math.abs(y-r);o<b&&(b=o,l=e)}if(!l)return;const[,,A,P]=l;return[b,A,s,P]}))})))).filter(f).sort((([e=Number.MAX_VALUE,t],[n=Number.MAX_VALUE,r])=>e===n?t-r:e-n));if(!P.length){const e=a.find((e=>b.includes(e)));return e?x(0,"BLOCKLISTED",e):x(1,"FALLBACK",`${b} (${A})`)}const[,S,C,E]=P[0];if(-1===S)return x(0,"BLOCKLISTED",C,S,E);const L=m?e:t;let _=0;for(let e=0;e<L.length;e++)S>=L[e]&&(_=e);return x(_,"BENCHMARK",C,S,E)}));var p=n(7294),m=function(){var e=(0,r.Z)(p.useState(0),2),t=e[0],n=e[1],o=(0,r.Z)(p.useState(!0),2),a=o[0],i=o[1];return p.useEffect((function(){g().then((function(e){var t=e.tier;n(t),i(!1)}))}),[n]),{tier:t,loading:a}}}}]);