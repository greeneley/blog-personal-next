"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2688],{9618:function(e,r,n){n.d(r,{a:function(){return a}});var t=n(7294),i=n(4929),a=e=>{let{children:r,...n}=e;return(0,t.createElement)(i.c,{...n,as:"label",css:{display:"inline-block",cursor:"pointer",userSelect:"none",marginRight:"8px",marginBottom:"0px",letterSpacing:"0px",verticalAlign:"top"},variant:"secondary",size:"1",weight:"3"},r)}},7558:function(e,r,n){n.d(r,{a:function(){return c}});var t=n(7294),i=n(9618),a=n(4181),o=(0,n(1130).g)("input",{WebkitAppearance:"none",MozAppearance:"none",flexShrink:0,height:"24px",width:"24px",outline:"none",display:"inline-block",position:"relative",margin:0,cursor:"pointer",borderRadius:"var(--border-radius-1)",border:"1px solid var(--border-color, var(--maximeheckel-form-input-border))",background:"var(--background, var(--maximeheckel-form-input-background))",boxShadow:"var(--shadow, none)",transition:"background 0.3s, border-color 0.3s, box-shadow 0.2s","--shadow-hover-primary":"0 2px 20px 3px var(--maximeheckel-form-input-focus)","&:after":{content:"",display:"block",position:"absolute",opacity:"var(--opacity, 0)",transition:"transform var(--d-t, 0.3s) var(--d-t-e, ease) var(--d-t-d, 0s), opacity var(--d-o, 0.2s)",width:"6px",height:"10px",border:"2px solid var(--maximeheckel-form-input-background)",borderTop:"0",borderLeft:"0",left:"8px",top:"5px",transform:"rotate(var(--rotation, 20deg))"},"&:checked":{"--background":"var(--maximeheckel-form-input-active)","--border-color":"var(--maximeheckel-form-input-active)","--d-o":"0.3s","--d-t":"0.6s","--d-t-e":"cubic-bezier(0.2, 0.85, 0.32, 1.2)","--d-t-d":"0.1s","--opacity":"1","--rotation":"43deg"},"&:disabled":{"--background":"var(--maximeheckel-form-input-disabled)",cursor:"not-allowed",opacity:"0.65","&:checked":{"--border-color":"var(--maximeheckel-form-input-border)"},"& + label":{cursor:"not-allowed"}},"&:hover":{"&:not(:disabled)":{"&:not(:checked)":{"--border-color":"var(--maximeheckel-form-input-active)"},"--shadow":"var(--shadow-hover-primary)"}},"&:focus-visible":{"--border-color":"var(--maximeheckel-form-input-active)","--shadow":"var(--shadow-hover-primary)"}}),c=e=>{let{checked:r,disabled:n,id:c,label:d,...u}=e;return(0,t.createElement)(a.a,{gap:2},(0,t.createElement)(o,{id:c,type:"checkbox",checked:r,disabled:n,"aria-checked":r,role:"checkbox",...u}),d?(0,t.createElement)(i.a,{htmlFor:c},d):null)}},2688:function(e,r,n){n.r(r),n.d(r,{default:function(){return O}});var t=n(1799),i=n(9396),a=n(828),o=n(943);var c=n(3375);var d=n(1566);function u(e){return function(e){if(Array.isArray(e))return(0,o.Z)(e)}(e)||(0,c.Z)(e)||(0,d.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=n(5893),s=n(7301),h=n(4181),p=n(1665),v=n(32),f=n(5372),x=n(7558),m=n(4929),g=n(3589),y=n(655),k=n(4394),b=n(7294),w=(0,b.createContext)(null),j=n(9130),_=n(6681),E=n(2453),R=n(10);var C=(0,b.forwardRef)((function(e,r){var n=e.children,t=e.as,i=void 0===t?"ul":t,a=e.axis,o=void 0===a?"y":a,c=e.onReorder,d=e.values,u=(0,y.__rest)(e,["children","as","axis","onReorder","values"]),l=(0,_.h)((function(){return(0,j.E)(i)})),s=[],h=(0,b.useRef)(!1);(0,k.k)(Boolean(d),"Reorder.Group must be provided a values prop");var p={axis:o,registerItem:function(e,r){r&&-1===s.findIndex((function(r){return e===r.value}))&&(s.push({value:e,layout:r[o]}),s.sort(S))},updateOrder:function(e,r,n){if(!h.current){var t=function(e,r,n,t){if(!t)return e;var i=e.findIndex((function(e){return e.value===r}));if(-1===i)return e;var a=t>0?1:-1,o=e[i+a];if(!o)return e;var c=e[i],d=o.layout,u=(0,E.C)(d.min,d.max,.5);return 1===a&&c.layout.max+n>u||-1===a&&c.layout.min+n<u?(0,R.uo)(e,i,i+a):e}(s,e,r,n);s!==t&&(h.current=!0,c(t.map(I).filter((function(e){return-1!==d.indexOf(e)}))))}}};return(0,b.useEffect)((function(){h.current=!1})),b.createElement(l,(0,y.__assign)({},u,{ref:r}),b.createElement(w.Provider,{value:p},n))}));function I(e){return e.value}function S(e,r){return e.layout.min-r.layout.min}var B=n(4960),M=n(4827),A=n(406);function D(e,r){return void 0===r&&(r=0),(0,A.i)(e)?e:(0,B.c)(r)}var z={Group:C,Item:(0,b.forwardRef)((function(e,r){var n=e.children,t=e.style,i=e.value,a=e.as,o=void 0===a?"li":a,c=e.onDrag,d=e.layout,u=void 0===d||d,l=(0,y.__rest)(e,["children","style","value","as","onDrag","layout"]),s=(0,_.h)((function(){return(0,j.E)(o)})),h=(0,b.useContext)(w),p={x:D(null===t||void 0===t?void 0:t.x),y:D(null===t||void 0===t?void 0:t.y)},v=(0,M.H)([p.x,p.y],(function(e){var r=(0,y.__read)(e,2),n=r[0],t=r[1];return n||t?1:"unset"})),f=(0,b.useRef)(null);(0,k.k)(Boolean(h),"Reorder.Item must be a child of Reorder.Group");var x=h,m=x.axis,g=x.registerItem,E=x.updateOrder;return(0,b.useEffect)((function(){g(i,f.current)}),[h]),b.createElement(s,(0,y.__assign)({drag:m},l,{dragSnapToOrigin:!0,style:(0,y.__assign)((0,y.__assign)({},t),{x:p.x,y:p.y,zIndex:v}),layout:u,onDrag:function(e,r){var n=r.velocity;n[m]&&E(i,p[m].get(),n[m]),null===c||void 0===c||c(e,r)},onLayoutMeasure:function(e){f.current=e},ref:r}),n)}))},G=n(5421),Z=n(1130),L=(0,Z.g)("hr",{height:"2px",width:"100%",background:"hsl(var(--palette-gray-20))",border:"none",marginBottom:"16px"}),N=[{text:"Finish blog post \u270d\ufe0f",checked:!1,id:1},{text:"Build new Three.js experiences \u2728",checked:!1,id:2},{text:"Add new components to Design System \ud83c\udf08",checked:!1,id:3},{text:"Make some coffee \u2615\ufe0f",checked:!1,id:4},{text:"Drink water \ud83d\udca7",checked:!1,id:5},{text:"Go to the gym \ud83c\udfc3\u200d\u2642\ufe0f",checked:!1,id:6}],O=function(){var e=(0,a.Z)(b.useState(N),2),r=e[0],n=e[1];return(0,l.jsx)(s.a,{depth:1,css:{marginBottom:"2.25rem"},children:(0,l.jsx)(s.a.Body,{css:{height:"640px"},children:(0,l.jsxs)(h.a,{direction:"column",gap:"4",alignItems:"start",children:[(0,l.jsxs)(h.a,{gap:4,children:[(0,l.jsx)(p.a,{variant:"secondary",disabled:r.length>5,onClick:function(){return n((function(e){return u(e).concat([{text:"Prepare for space travel \ud83e\uddd1\u200d\ud83d\ude80",id:Math.random(),checked:!1}])}))},children:"Add item"}),(0,l.jsx)(v.a,{id:"tooltip-reset-list",content:"Reset task list",children:(0,l.jsx)(p.a,{variant:"icon",onClick:function(){return n(N)},icon:(0,l.jsx)(f.a.Repeat,{})})})]}),(0,l.jsxs)(g.S,{children:[(0,l.jsx)(z.Group,{axis:"y",values:r,onReorder:n,className:(0,Z.c)({display:"flex",flexDirection:"column",gap:"12px",margin:"0",padding:"0",width:"100%"})(),children:(0,l.jsx)(G.M,{children:r.map((function(e){return(0,l.jsxs)(h.a,{alignItems:"center",justifyContent:"space-between",as:j.E.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.2}},gap:"6",children:[(0,l.jsx)(s.a,{as:z.Item,css:{listStyle:"none",cursor:"grab",height:"100%",flexGrow:1},style:{position:"relative",borderRadius:"12px",width:e.checked?"70%":"100%"},depth:1,value:e,children:(0,l.jsxs)(s.a.Body,{as:j.E.div,layout:"position",css:{display:"flex",alignItems:"center",gap:"var(--space-4)",padding:"var(--space-4)"},children:[(0,l.jsx)(x.a,{id:"checkbox-".concat(e.id),"aria-label":"Mark as done",checked:e.checked,onChange:function(){return function(e){var a=r.map((function(r){return r.id===e?(0,i.Z)((0,t.Z)({},r),{checked:!r.checked}):r}));n(a)}(e.id)}}),(0,l.jsx)(m.c,{size:"2",css:{marginBottom:0},children:e.text})]})}),(0,l.jsx)(G.M,{initial:!1,children:e.checked?(0,l.jsx)(j.E.div,{layout:!0,initial:{opacity:0},animate:{opacity:1,transition:{delay:.2}},exit:{opacity:0},children:(0,l.jsx)(p.a,{variant:"icon",icon:(0,l.jsx)(f.a.X,{}),onClick:function(){return n((function(r){return r.filter((function(r){return r.id!==e.id}))}))}})}):null})]},e.id)}))})}),(0,l.jsxs)(j.E.div,{layout:!0,children:[(0,l.jsx)(L,{}),(0,l.jsx)(m.c,{size:2,children:"Check items off the list when you're done!"})]})]})]})})})}},3589:function(e,r,n){n.d(r,{S:function(){return s}});var t=n(655),i=n(7294),a=n(5364),o=(0,i.createContext)(null),c=n(6337),d=function(e){return!e.isLayoutDirty&&e.willUpdate(!1)};function u(){var e=new Set,r=new WeakMap,n=function(){return e.forEach(d)};return{add:function(t){e.add(t),r.set(t,t.addEventListener("willUpdate",n))},remove:function(t){var i;e.delete(t),null===(i=r.get(t))||void 0===i||i(),r.delete(t),n()},dirty:n}}var l=function(e){return!0===e},s=function(e){var r,n,d=e.children,s=e.id,h=e.inheritId,p=e.inherit,v=void 0===p||p;void 0!==h&&(v=h);var f=(0,i.useContext)(a.p),x=(0,i.useContext)(o),m=(0,t.__read)((0,c.N)(),2),g=m[0],y=m[1],k=(0,i.useRef)(null),b=null!==(r=f.id)&&void 0!==r?r:x;null===k.current&&(function(e){return l(!0===e)||"id"===e}(v)&&b&&(s=s?b+"-"+s:b),k.current={id:s,group:l(v)&&null!==(n=null===f||void 0===f?void 0:f.group)&&void 0!==n?n:u()});var w=(0,i.useMemo)((function(){return(0,t.__assign)((0,t.__assign)({},k.current),{forceRender:g})}),[y]);return i.createElement(a.p.Provider,{value:w},d)}}}]);