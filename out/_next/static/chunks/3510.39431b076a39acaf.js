"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3510],{9618:function(e,n,t){t.d(n,{a:function(){return i}});var a=t(7294),r=t(4929),i=e=>{let{children:n,...t}=e;return(0,a.createElement)(r.c,{...t,as:"label",css:{display:"inline-block",cursor:"pointer",userSelect:"none",marginRight:"8px",marginBottom:"0px",letterSpacing:"0px",verticalAlign:"top"},variant:"secondary",size:"1",weight:"3"},n)}},3590:function(e,n,t){t.d(n,{a:function(){return o},b:function(){return c}});var a=t(7294),r=t(9618),i=t(1130),o=(e,n)=>{let[t,r]=a.useState(e);return a.useEffect((()=>{let t=setTimeout((()=>{r(e)}),n);return()=>{clearTimeout(t)}}),[e,n]),t},s=(0,i.g)("input",{WebkitAppearance:"none",MozAppearance:"none",width:"100%",outline:"none",position:"relative",display:"block",margin:0,flexShrink:0,background:"transparent","&::-moz-range-track":{MozAppearance:"none",width:"100%",height:"4px",border:"none",borderRadius:"var(--border-radius-0)",background:"var(--track-background, transparent)"},"&::-webkit-slider-runnable-track":{WebkitAppearance:"none",width:"100%",height:"4px",border:"none",borderRadius:"var(--border-radius-0)",background:"var(--track-background, transparent)"},"&::-moz-range-thumb":{MozAppearance:"none",height:"24px",width:"24px",borderRadius:"50%",background:"var(--maximeheckel-form-input-background)",border:"1px solid var(--border-color, var(--maximeheckel-form-input-border))",marginTop:"-10px",cursor:"grab",boxShadow:`var(--shadow, ${i.a[2]})`,transition:"background 0.3s, border-color 0.3s, box-shadow 0.2s"}," &::-webkit-slider-thumb":{WebkitAppearance:"none",height:"24px",width:"24px",borderRadius:"50%",background:"var(--maximeheckel-form-input-background)",border:"1px solid var(--border-color, var(--maximeheckel-form-input-border))",marginTop:"-10px",cursor:"grab",boxShadow:`var(--shadow, ${i.a[2]})`,transition:"background 0.3s, border-color 0.3s, box-shadow 0.2s"},"&:active":{"&::-moz-range-thumb":{cursor:"grabbing"},"&::-webkit-slider-thumb":{cursor:"grabbing"}},"&:disabled":{"&::-moz-range-thumb":{cursor:"not-allowed"},"&::-webkit-slider-thumb":{cursor:"not-allowed"}},"&:hover":{"&:not(:disabled)":{"&::-moz-range-thumb":{"--border-color":"var(--maximeheckel-form-input-active)","--shadow":"0 2px 20px 3px var(--maximeheckel-form-input-focus)"},"  &::-webkit-slider-thumb":{"--border-color":"var(--maximeheckel-form-input-active)","--shadow":"0 2px 20px 3px var(--maximeheckel-form-input-focus)"}}},"&:focus-visible":{"&::-moz-range-thumb":{"--border-color":"var(--maximeheckel-form-input-active)","--shadow":"0 2px 20px 3px var(--maximeheckel-form-input-focus)"},"&::-webkit-slider-thumb":{"--border-color":"var(--maximeheckel-form-input-active)","--shadow":"0 2px 20px 3px var(--maximeheckel-form-input-focus)"}}});var c=e=>{let{debounce:n=0,step:t,id:i,disabled:c,max:l,min:d,onChange:u,value:p,label:h,...m}=e,[x,g]=a.useState(p),k=o(x,n);a.useEffect((()=>{u(k)}),[k]);let b=a.useMemo((()=>function(e,n,t,a){let r=100*(e-n)/(t-n);return`linear-gradient(to right, ${a?"var(--maximeheckel-form-input-border)":"var(--maximeheckel-form-input-active)"} ${r}%, var(--maximeheckel-form-input-disabled) ${r}%)`}(p,d,l,c)),[p,d,l,c]);return(0,a.createElement)("div",{style:{width:"100%",margin:"8px 0px"}},h?(0,a.createElement)(r.a,{htmlFor:i,style:{marginBottom:"12px"}},h):null,(0,a.createElement)(s,{id:i,type:"range",min:d,max:l,step:t,value:p,onChange:e=>g(parseFloat(e.target.value)),css:{"--track-background":`${b}`},disabled:c,...m}))}},1672:function(e,n,t){t.r(n),t.d(n,{HighlightedCodeText:function(){return b},default:function(){return v}});var a=t(1799),r=t(9396),i=t(5893),o=t(7301),s=t(1130),c=t(7410),l=t(3746),d=t(828),u=t(4960),p=t(4827),h=t(9130),m=t(7294),x=(0,s.g)("button",{background:"transparent",border:"none",svg:{marginTop:"4px"},"&:focus:not(:focus-visible)":{outline:"0"},"&:focus-visible":{outline:"2px solid var(--maximeheckel-colors-brand)"},variants:{checked:{true:{cursor:"default"},false:{cursor:"pointer"}}}}),g=function(e){var n=.4,t={checked:{opacity:0},unchecked:{opacity:1}},a=(0,d.Z)(m.useState(!1),2),r=a[0],o=a[1],s=(0,u.c)(0),c=(0,p.H)(s,[.05,.15],[0,1]);return m.useEffect((function(){r&&setTimeout((function(){return o(!1)}),3e3)}),[r]),(0,i.jsx)(x,{checked:r,"aria-label":"Copy to clipboard",disabled:r,onClick:function(){!function(e){var n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="absolute",n.style.left="-9999px",document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n)}(e.text),o(!0)},children:(0,i.jsxs)(h.E.svg,{initial:"idle",whileHover:"hover",whileTap:"pressed",transition:{duration:n},variants:{hover:function(e){return{scale:e?1:1.05}},pressed:function(e){return{scale:e?1:.95}},idle:{scale:1}},custom:r,width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)(h.E.path,{d:"M20.8511 9.46338H11.8511C10.7465 9.46338 9.85107 10.3588 9.85107 11.4634V20.4634C9.85107 21.5679 10.7465 22.4634 11.8511 22.4634H20.8511C21.9556 22.4634 22.8511 21.5679 22.8511 20.4634V11.4634C22.8511 10.3588 21.9556 9.46338 20.8511 9.46338Z",stroke:"var(--maximeheckel-colors-typeface-tertiary)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:r?"checked":"unchecked",variants:t,custom:r,transition:{duration:n}}),(0,i.jsx)(h.E.path,{d:"M5.85107 15.4634H4.85107C4.32064 15.4634 3.81193 15.2527 3.43686 14.8776C3.06179 14.5025 2.85107 13.9938 2.85107 13.4634V4.46338C2.85107 3.93295 3.06179 3.42424 3.43686 3.04917C3.81193 2.67409 4.32064 2.46338 4.85107 2.46338H13.8511C14.3815 2.46338 14.8902 2.67409 15.2653 3.04917C15.6404 3.42424 15.8511 3.93295 15.8511 4.46338V5.46338",stroke:"var(--maximeheckel-colors-typeface-tertiary)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:r?"checked":"unchecked",variants:t,custom:r,transition:{duration:n}}),(0,i.jsx)(h.E.path,{d:"M20 6L9 17L4 12",stroke:"var(--maximeheckel-colors-typeface-tertiary)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:r?"checked":"unchecked",variants:{pressed:function(e){return{pathLength:e?.85:.05}},checked:{pathLength:1},unchecked:{pathLength:0}},style:{pathLength:s,opacity:c},custom:r,transition:{duration:n}})]})})},k=t(3128);("undefined"!==typeof t.g?t.g:window).Prism=c.Z,t(874),t(9812);var b=function(e){var n=e.codeString,t=e.language,o=e.highlightLine;return(0,i.jsx)(l.ZP,(0,r.Z)((0,a.Z)({},l.lG),{theme:{plain:{},styles:[]},code:n,language:t,children:function(e){var n=e.className,t=e.style,r=e.tokens,s=e.getLineProps,c=e.getTokenProps;return(0,i.jsx)(f,{className:n,style:t,children:r.map((function(e,n){var t=s({className:o&&o(n)?"highlight-line":"",key:n,line:e}).className;return(0,i.jsxs)(y,{"data-testid":o&&o(n)?"highlight-line":"line",className:t,children:[(0,i.jsx)(j,{"data-testid":"number-line",children:n+1}),(0,i.jsx)(w,{children:e.map((function(e,n){return(0,i.jsx)("span",(0,a.Z)({"data-testid":"content-line"},c({key:n,token:e})),n)}))})]},n)}))})}}))},v=function(e){var n=e.codeString,t=e.language,a=e.metastring,r=(0,k.om)(a),s=(0,k.dc)(a);return(0,i.jsxs)(o.a,{css:{marginBottom:"32px",background:"unset","@media(max-width: 750px)":{width:"100vw",position:"relative",left:"50%",right:"50%",marginLeft:"-50vw",marginRight:"-50vw",borderRadius:"0px"}},children:[s?(0,i.jsxs)(o.a.Header,{css:{padding:"0px 16px",backgroundColor:"var(--code-snippet-background)"},children:[(0,i.jsx)(C,{"data-testid":"codesnippet-title",children:s}),(0,i.jsx)(g,{title:s,text:n})]}):null,(0,i.jsx)(b,{codeString:n,language:t,highlightLine:r})]})},f=(0,s.g)("pre",{marginTop:"0",marginBottom:"0",textAlign:"left",padding:"8px 0px",overflow:"auto",borderBottomLeftRadius:"var(--border-radius-2)",borderBottomRightRadius:"var(--border-radius-2)",backgroundColor:"var(--code-snippet-background)",fontFamily:"var(--font-mono)",fontSize:"var(--font-size-1)",lineHeight:"26px",".token.parameter,.token.imports,.token.plain,.token.comment,.token.prolog,.token.doctype,.token.cdata":{color:"var(--token-comment)"},".token.punctuation":{color:"var(--token-punctuation)"},".token.property,.token.tag,.token.boolean,.token.number,.token.constant,.token.symbol,.token.deleted":{color:"var(--token-symbol)"},".token.selector,.token.attr-name,.token.char,.token.builtin,.token.number,.token.string,.token.inserted":{color:"var(--token-selector)"},".token.operator,.token.entity,.token.url,.language-css .style":{color:"var(--token-operator)"},".token.atrule,.token.attr-value,.token.keyword":{color:"var(--token-keyword)"},".token.function,.token.maybe-class-name,.token.class-name":{color:"var(--token-function)"},".token.regex,.token.important,.token.variable":{color:"var(--token-operator)"}}),y=(0,s.g)("div",{display:"table",borderCollapse:"collapse",padding:"0px 14px",borderLeft:"3px solid transparent","&.highlight-line":{background:"var(--maximeheckel-colors-emphasis)",borderColor:"var(--maximeheckel-colors-brand)"},"&:hover":{backgroundColor:"var(--maximeheckel-colors-emphasis)"}}),j=(0,s.g)("div",{width:"45px",padding:"0 12px",userSelect:"none",opacity:"1",color:"var(--maximeheckel-colors-typeface-tertiary)"}),w=(0,s.g)("span",{display:"table-cell",width:"100%"}),C=(0,s.g)("p",{marginBlockStart:"0px",fontSize:"var(--font-size-1)",marginBottom:"0px",color:"var(--maximeheckel-colors-typeface-primary)",fontWeight:"500"})},8831:function(e,n,t){t.d(n,{EF:function(){return i},i5:function(){return r},im:function(){return s},l0:function(){return c},o9:function(){return o}});var a=t(1130),r=(0,a.g)("div",{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gridGap:"32px","@media (max-width: 950px)":{padding:"0"},"> div":{width:"100%",maxWidth:"400px",marginLeft:"auto",marginRight:"auto"}}),i=(0,a.g)("div",{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around",height:"475px",padding:"12px 0px"}),o=(0,a.g)("div",{borderRadius:"var(--border-radius-0)",backgroundColor:"var(--maximeheckel-colors-emphasis)",color:"var(--maximeheckel-colors-brand)",border:"2px solid var(--maximeheckel-colors-brand)",padding:"2px 6px",fontFamily:"var(--font-numeric)",fontSize:"var(--font-size-2)",display:"inline-block",lineHeight:"1rem"}),s=(0,a.g)("div",{margin:"30px 0px","@media (min-width: 1100px)":{position:"relative",maxWidth:"1000px",width:"calc(100% + 300px)",margin:"30px -150px"}}),c=(0,a.g)("form",{margin:"20px 0",width:"70%",zIndex:"1",display:"flex",flexDirection:"column",justifyContent:"space-around",fontSize:"14px",label:{marginBottom:"8px"},input:{marginBottom:"24px"},select:{border:"1px solid var(--maximeheckel-colors-brand)",boxShadow:"none",backgroundColor:"var(--maximeheckel-colors-emphasis)",color:"var(--maximeheckel-colors-brand)",height:"30px",borderRadius:"var(--border-radius-0)",padding:"5px"}})},3510:function(e,n,t){t.r(n);var a=t(828),r=t(5893),i=t(3590),o=t(7301),s=t(9618),c=t(1672),l=t(9130),d=t(7294),u=t(8046),p=t(8831);n.default=function(){var e=(0,a.Z)((0,u.YD)(),2),n=e[0],t=e[1],h=(0,a.Z)(d.useState("easeInOut"),2),m=h[0],x=h[1],g=(0,a.Z)(d.useState(3),2),k=g[0],b=g[1],v=(0,a.Z)(d.useState(1),2),f=v[0],y=v[1],j=(0,a.Z)(d.useState(50),2),w=j[0],C=j[1],S=(0,a.Z)(d.useState(100),2),E=S[0],L=S[1],z=(0,a.Z)(d.useState(0),2),T=z[0],H=z[1],I=(0,a.Z)(d.useState(0),2),R=I[0],Z=I[1],O=(0,i.a)(k,300),B=(0,i.a)(E,300),A=(0,i.a)(f,300),F=(0,i.a)(w,300);d.useEffect((function(){H(T+1)}),[O,B,A]),d.useEffect((function(){Z(R+1)}),[F]);var M="<motion.div\n    ...\n    transition={{\n      type: 'spring',\n      stiffness: ".concat(E,",\n      mass: ").concat(k,",\n      damping: ").concat(f,",\n    }}\n  />\n  "),W="<motion.div\n  ...\n  transition={{\n    type: 'tween',\n    ease: '".concat(m,"',\n    duration: 2,\n    ...\n  }}\n  />\n  "),N="<motion.div\n    ...\n    transition={{\n      type: 'inertia',\n      velocity: ".concat(w,",\n    }}\n  />\n\n\n  ");return(0,r.jsx)(p.im,{ref:n,children:(0,r.jsxs)(p.i5,{children:[(0,r.jsxs)(o.a,{glass:!0,depth:1,children:[(0,r.jsx)(o.a.Header,{children:"Spring"}),(0,r.jsxs)(p.EF,{children:[(0,r.jsxs)(p.l0,{children:[(0,r.jsx)(i.b,{id:"mass1","aria-label":"Mass",label:(0,r.jsxs)("span",{children:["Mass: ",(0,r.jsx)(p.o9,{children:k})]}),min:1,max:10,value:k,onChange:function(e){return b(e)}}),(0,r.jsx)(i.b,{id:"stiffness1","aria-label":"Stiffness",label:(0,r.jsxs)("span",{children:["Stiffness: ",(0,r.jsx)(p.o9,{children:E})]}),min:1,max:500,value:E,onChange:function(e){return L(e)}}),(0,r.jsx)(i.b,{id:"damping","aria-label":"Damping",label:(0,r.jsxs)("span",{children:["Damping: ",(0,r.jsx)(p.o9,{children:f})]}),min:0,max:5,step:"0.10",value:f,onChange:function(e){return y(e)}})]}),(0,r.jsx)("div",{}),(0,r.jsx)(l.E.div,{style:{background:"linear-gradient(90deg,#ffa0ae 0%,#aacaef 75%)",height:"100px",width:"100px",borderRadius:"10px"},initial:{y:-100},animate:t?{y:0}:{y:-100},transition:{type:"spring",stiffness:E,mass:k,damping:f}},T)]}),(0,r.jsx)(c.HighlightedCodeText,{codeString:M,language:"javascript"})]}),(0,r.jsxs)(o.a,{glass:!0,depth:1,children:[(0,r.jsx)(o.a.Header,{children:"Tween"}),(0,r.jsxs)(p.EF,{children:[(0,r.jsx)(p.l0,{children:(0,r.jsxs)("div",{style:{display:"grid"},children:[(0,r.jsx)(s.a,{htmlFor:"tween-type",children:"Ease"}),(0,r.jsxs)("select",{id:"tween-type",value:m,onChange:function(e){x(e.target.value)},children:[(0,r.jsx)("option",{value:"linear",children:"linear"}),(0,r.jsx)("option",{value:"easeIn",children:"easeIn"}),(0,r.jsx)("option",{value:"easeOut",children:"easeOut"}),(0,r.jsx)("option",{value:"easeInOut",children:"easeInOut"}),(0,r.jsx)("option",{value:"circIn",children:"circIn"}),(0,r.jsx)("option",{value:"circOut",children:"circOut"}),(0,r.jsx)("option",{value:"circInOut",children:"circInOut"}),(0,r.jsx)("option",{value:"backIn",children:"backIn"}),(0,r.jsx)("option",{value:"backOut",children:"backOut"}),(0,r.jsx)("option",{value:"backInOut",children:"backInOut"}),(0,r.jsx)("option",{value:"anticipate",children:"anticipate"})]})]})}),(0,r.jsx)("div",{}),(0,r.jsx)(l.E.div,{style:{background:"linear-gradient(90deg,#ffa0ae 0%,#aacaef 75%)",height:"100px",width:"100px",borderRadius:"10px"},initial:{y:-120},animate:t?{y:20}:{y:-120},transition:{ease:m,repeat:1/0,repeatType:"reverse",repeatDelay:1,duration:2}},m)]}),(0,r.jsx)(c.HighlightedCodeText,{codeString:W,language:"javascript"})]}),(0,r.jsxs)(o.a,{glass:!0,depth:1,children:[(0,r.jsx)(o.a.Header,{children:"Inertia"}),(0,r.jsxs)(p.EF,{children:[(0,r.jsx)(p.l0,{children:(0,r.jsx)("div",{style:{display:"grid"},children:(0,r.jsx)(i.b,{id:"velocity","aria-label":"Velocity",label:(0,r.jsxs)("span",{children:["Velocity: ",(0,r.jsx)(p.o9,{children:w})]}),min:1,max:500,value:w,onChange:function(e){return C(e)}})})}),(0,r.jsx)("div",{}),(0,r.jsx)(l.E.div,{style:{background:"linear-gradient(90deg,#ffa0ae 0%,#aacaef 75%)",height:"100px",width:"100px",borderRadius:"10px"},initial:{y:-120},animate:t?{y:20}:{y:-120},transition:{type:"inertia",velocity:w,repeat:1/0,repeatType:"reverse"}},R)]}),(0,r.jsx)(c.HighlightedCodeText,{codeString:N,language:"javascript"})]})]})})}}}]);