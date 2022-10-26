"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8160],{9618:function(a,r,e){e.d(r,{a:function(){return t}});var n=e(7294),i=e(4929),t=a=>{let{children:r,...e}=a;return(0,n.createElement)(i.c,{...e,as:"label",css:{display:"inline-block",cursor:"pointer",userSelect:"none",marginRight:"8px",marginBottom:"0px",letterSpacing:"0px",verticalAlign:"top"},variant:"secondary",size:"1",weight:"3"},r)}},3590:function(a,r,e){e.d(r,{a:function(){return o},b:function(){return c}});var n=e(7294),i=e(9618),t=e(1130),o=(a,r)=>{let[e,i]=n.useState(a);return n.useEffect((()=>{let e=setTimeout((()=>{i(a)}),r);return()=>{clearTimeout(e)}}),[a,r]),e},l=(0,t.g)("input",{WebkitAppearance:"none",MozAppearance:"none",width:"100%",outline:"none",position:"relative",display:"block",margin:0,flexShrink:0,background:"transparent","&::-moz-range-track":{MozAppearance:"none",width:"100%",height:"4px",border:"none",borderRadius:"var(--border-radius-0)",background:"var(--track-background, transparent)"},"&::-webkit-slider-runnable-track":{WebkitAppearance:"none",width:"100%",height:"4px",border:"none",borderRadius:"var(--border-radius-0)",background:"var(--track-background, transparent)"},"&::-moz-range-thumb":{MozAppearance:"none",height:"24px",width:"24px",borderRadius:"50%",background:"var(--maximeheckel-form-input-background)",border:"1px solid var(--border-color, var(--maximeheckel-form-input-border))",marginTop:"-10px",cursor:"grab",boxShadow:`var(--shadow, ${t.a[2]})`,transition:"background 0.3s, border-color 0.3s, box-shadow 0.2s"}," &::-webkit-slider-thumb":{WebkitAppearance:"none",height:"24px",width:"24px",borderRadius:"50%",background:"var(--maximeheckel-form-input-background)",border:"1px solid var(--border-color, var(--maximeheckel-form-input-border))",marginTop:"-10px",cursor:"grab",boxShadow:`var(--shadow, ${t.a[2]})`,transition:"background 0.3s, border-color 0.3s, box-shadow 0.2s"},"&:active":{"&::-moz-range-thumb":{cursor:"grabbing"},"&::-webkit-slider-thumb":{cursor:"grabbing"}},"&:disabled":{"&::-moz-range-thumb":{cursor:"not-allowed"},"&::-webkit-slider-thumb":{cursor:"not-allowed"}},"&:hover":{"&:not(:disabled)":{"&::-moz-range-thumb":{"--border-color":"var(--maximeheckel-form-input-active)","--shadow":"0 2px 20px 3px var(--maximeheckel-form-input-focus)"},"  &::-webkit-slider-thumb":{"--border-color":"var(--maximeheckel-form-input-active)","--shadow":"0 2px 20px 3px var(--maximeheckel-form-input-focus)"}}},"&:focus-visible":{"&::-moz-range-thumb":{"--border-color":"var(--maximeheckel-form-input-active)","--shadow":"0 2px 20px 3px var(--maximeheckel-form-input-focus)"},"&::-webkit-slider-thumb":{"--border-color":"var(--maximeheckel-form-input-active)","--shadow":"0 2px 20px 3px var(--maximeheckel-form-input-focus)"}}});var c=a=>{let{debounce:r=0,step:e,id:t,disabled:c,max:d,min:s,onChange:u,value:b,label:h,...m}=a,[p,g]=n.useState(b),x=o(p,r);n.useEffect((()=>{u(x)}),[x]);let f=n.useMemo((()=>function(a,r,e,n){let i=100*(a-r)/(e-r);return`linear-gradient(to right, ${n?"var(--maximeheckel-form-input-border)":"var(--maximeheckel-form-input-active)"} ${i}%, var(--maximeheckel-form-input-disabled) ${i}%)`}(b,s,d,c)),[b,s,d,c]);return(0,n.createElement)("div",{style:{width:"100%",margin:"8px 0px"}},h?(0,n.createElement)(i.a,{htmlFor:t,style:{marginBottom:"12px"}},h):null,(0,n.createElement)(l,{id:t,type:"range",min:s,max:d,step:e,value:b,onChange:a=>g(parseFloat(a.target.value)),css:{"--track-background":`${f}`},disabled:c,...m}))}},8160:function(a,r,e){e.r(r);var n=e(828),i=e(5893),t=e(7301),o=e(4181),l=e(1291),c=e(3590),d=e(7294),s=e(8831);r.default=function(){var a=(0,n.Z)(d.useState(222),2),r=a[0],e=a[1],u=(0,n.Z)(d.useState(89),2),b=u[0],h=u[1],m=(0,n.Z)(d.useState(55),2),p=m[0],g=m[1],x=(0,n.Z)(d.useState(100),2),f=x[0],v=x[1],k="background-color: hsla(".concat(r,", ").concat(b,"%, ").concat(p,"%, ").concat(f,"%)");return(0,i.jsx)(t.a,{depth:1,css:{marginBottom:"2.25rem"},children:(0,i.jsxs)(s.EF,{css:{height:"700px"},children:[(0,i.jsxs)(o.a,{css:{width:"350px","@media (max-width: 700px)":{width:"100%"}},justifyContent:"space-between",children:[(0,i.jsx)("div",{style:{backgroundColor:"hsla(".concat(r,", ").concat(b,"%, ").concat(p,"%, ").concat(f,"%)"),height:"150px",width:"150px",borderRadius:"20px",willChange:"background-color"}}),(0,i.jsxs)("div",{style:{position:"relative",height:"150px",width:"150px",borderRadius:"50%",opacity:"".concat(f,"%"),background:"radial-gradient(\n                  circle at 50% 0,\n                  red,\n                  rgba(242, 13, 13, 0.8) 10%,\n                  rgba(230, 26, 26, 0.6) 20%,\n                  rgba(204, 51, 51, 0.4) 30%,\n                  rgba(166, 89, 89, 0.2) 40%,\n                  hsla(0, 0%, 50%, 0) 50%\n                ),\n                radial-gradient(\n                  circle at 85.35533905932738% 14.644660940672622%,\n                  #ffbf00,\n                  rgba(242, 185, 13, 0.8) 10%,\n                  rgba(230, 179, 26, 0.6) 20%,\n                  rgba(204, 166, 51, 0.4) 30%,\n                  rgba(166, 147, 89, 0.2) 40%,\n                  hsla(45, 0%, 50%, 0) 50%\n                ),\n                radial-gradient(\n                  circle at 100% 50%,\n                  #80ff00,\n                  rgba(128, 242, 13, 0.8) 10%,\n                  rgba(128, 230, 26, 0.6) 20%,\n                  rgba(128, 204, 51, 0.4) 30%,\n                  rgba(128, 166, 89, 0.2) 40%,\n                  hsla(90, 0%, 50%, 0) 50%\n                ),\n                radial-gradient(\n                  circle at 85.35533905932738% 85.35533905932738%,\n                  #00ff40,\n                  rgba(13, 242, 70, 0.8) 10%,\n                  rgba(26, 230, 77, 0.6) 20%,\n                  rgba(51, 204, 89, 0.4) 30%,\n                  rgba(89, 166, 108, 0.2) 40%,\n                  hsla(135, 0%, 50%, 0) 50%\n                ),\n                radial-gradient(\n                  circle at 50.00000000000001% 100%,\n                  #0ff,\n                  rgba(13, 242, 242, 0.8) 10%,\n                  rgba(26, 230, 230, 0.6) 20%,\n                  rgba(51, 204, 204, 0.4) 30%,\n                  rgba(89, 166, 166, 0.2) 40%,\n                  hsla(180, 0%, 50%, 0) 50%\n                ),\n                radial-gradient(\n                  circle at 14.64466094067263% 85.35533905932738%,\n                  #0040ff,\n                  rgba(13, 70, 242, 0.8) 10%,\n                  rgba(26, 77, 230, 0.6) 20%,\n                  rgba(51, 89, 204, 0.4) 30%,\n                  rgba(89, 108, 166, 0.2) 40%,\n                  hsla(225, 0%, 50%, 0) 50%\n                ),\n                radial-gradient(\n                  circle at 0 50.00000000000001%,\n                  #7f00ff,\n                  rgba(128, 13, 242, 0.8) 10%,\n                  rgba(128, 26, 230, 0.6) 20%,\n                  rgba(128, 51, 204, 0.4) 30%,\n                  rgba(128, 89, 166, 0.2) 40%,\n                  hsla(270, 0%, 50%, 0) 50%\n                ),\n                radial-gradient(\n                  circle at 14.644660940672615% 14.64466094067263%,\n                  #ff00bf,\n                  rgba(242, 13, 185, 0.8) 10%,\n                  rgba(230, 26, 179, 0.6) 20%,\n                  rgba(204, 51, 166, 0.4) 30%,\n                  rgba(166, 89, 147, 0.2) 40%,\n                  hsla(315, 0%, 50%, 0) 50%\n                )"},children:[(0,i.jsx)("div",{style:{position:"absolute",height:"150px",width:"150px",borderRadius:"50%",backgroundColor:"hsla(0, 0%, ".concat(p,"%, 100%)"),opacity:"".concat(2*Math.abs(p-50),"%")}}),(0,i.jsx)("div",{style:{position:"absolute",left:"0",right:"0",top:"0",bottom:"0",margin:"auto",transform:"rotate(".concat(r,"deg)"),height:"".concat(b,"%")},children:(0,i.jsx)("div",{style:{width:"2px",height:"50%",margin:"0 auto",backgroundColor:"var(--maximeheckel-colors-brand)",transform:"rotate(180deg)"}})})]})]}),(0,i.jsx)(l.a,{children:k}),(0,i.jsxs)(s.l0,{children:[(0,i.jsx)(c.b,{id:"hue1",label:(0,i.jsxs)("span",{children:["Hue: ",(0,i.jsx)(s.o9,{children:r})]}),"aria-label":"Hue",min:0,max:359,value:r,onChange:function(a){return e(a)}}),(0,i.jsx)(c.b,{id:"saturation1",label:(0,i.jsxs)("span",{children:["Saturation: ",(0,i.jsx)(s.o9,{children:b})]}),"aria-label":"Saturation",min:1,max:100,value:b,onChange:function(a){return h(a)}}),(0,i.jsx)(c.b,{id:"lightness",label:(0,i.jsxs)("span",{children:["Lightness: ",(0,i.jsx)(s.o9,{children:p})]}),"aria-label":"Lightness",min:0,max:100,value:p,onChange:function(a){return g(a)}}),(0,i.jsx)(c.b,{id:"alpha",label:(0,i.jsxs)("span",{children:["Alpha: ",(0,i.jsx)(s.o9,{children:f})]}),"aria-label":"Alpha",min:0,max:100,value:f,onChange:function(a){return v(a)}})]})]})})}},8831:function(a,r,e){e.d(r,{EF:function(){return t},i5:function(){return i},im:function(){return l},l0:function(){return c},o9:function(){return o}});var n=e(1130),i=(0,n.g)("div",{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gridGap:"32px","@media (max-width: 950px)":{padding:"0"},"> div":{width:"100%",maxWidth:"400px",marginLeft:"auto",marginRight:"auto"}}),t=(0,n.g)("div",{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around",height:"475px",padding:"12px 0px"}),o=(0,n.g)("div",{borderRadius:"var(--border-radius-0)",backgroundColor:"var(--maximeheckel-colors-emphasis)",color:"var(--maximeheckel-colors-brand)",border:"2px solid var(--maximeheckel-colors-brand)",padding:"2px 6px",fontFamily:"var(--font-numeric)",fontSize:"var(--font-size-2)",display:"inline-block",lineHeight:"1rem"}),l=(0,n.g)("div",{margin:"30px 0px","@media (min-width: 1100px)":{position:"relative",maxWidth:"1000px",width:"calc(100% + 300px)",margin:"30px -150px"}}),c=(0,n.g)("form",{margin:"20px 0",width:"70%",zIndex:"1",display:"flex",flexDirection:"column",justifyContent:"space-around",fontSize:"14px",label:{marginBottom:"8px"},input:{marginBottom:"24px"},select:{border:"1px solid var(--maximeheckel-colors-brand)",boxShadow:"none",backgroundColor:"var(--maximeheckel-colors-emphasis)",color:"var(--maximeheckel-colors-brand)",height:"30px",borderRadius:"var(--border-radius-0)",padding:"5px"}})}}]);