"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[973],{2973:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(5893),a=n(7294),l=n(4184),u=n.n(l),s=n(8416),d=n(3460);let c=e=>{let{className:t,showOnFocus:n,as:a="span",children:l,visible:s,...d}=e;return(0,r.jsx)(a,{className:u()("visually-hidden",t,{"visually-hidden--hidden":!s&&!n,"visually-hidden--show-on-focus":n}),...d})},i=["ア","イ","ウ","エ","オ","カ","キ","ク","ケ","コ","サ","シ","ス","セ","ソ","タ","チ","ツ","テ","ト","ナ","ニ","ヌ","ネ","ノ","ハ","ヒ","フ","ヘ","ホ","マ","ミ","ム","メ","モ","ヤ","ユ","ヨ","ー","ラ","リ","ル","レ","ロ","ワ","ヰ","ヱ","ヲ","ン","ガ","ギ","グ","ゲ","ゴ","ザ","ジ","ズ","ゼ","ゾ","ダ","ヂ","ヅ","デ","ド","バ","ビ","ブ","ベ","ボ","パ","ピ","プ","ペ","ポ"],o={Glyph:"glyph",Value:"value"},h=e=>{let{text:t,start:n=!0,delay:l=0,className:h,...p}=e,v=(0,a.useRef)([{type:o.Glyph,value:""}]),f=(0,a.useRef)(),m=(0,s.Z)();return(0,a.useEffect)(()=>{let e;let r=f.current,a=t.split(""),u=()=>{let e=v.current.map(e=>'<span class="decoder-text__'.concat(e.type,'">').concat(e.value,"</span>"));r.innerHTML=e.join("")},s=(0,d.S3)(0,e=>{var t;v.current=(t=v.current,a.map((n,r)=>{if(r<e)return{type:o.Value,value:n};if(e%1<.5){let a=Math.floor(Math.random()*i.length);return{type:o.Glyph,value:i[a]}}return{type:o.Glyph,value:t[r].value}})),u()});return!n||e||m||(e=(0,d.tS)((0,d.gw)(l),(0,d.ST)({from:0,to:a.length,stiffness:8,damping:5})).start(s)),m&&(v.current=a.map((e,t)=>({type:o.Value,value:a[t]})),u()),()=>{e&&e.stop()}},[m,n,l,t]),(0,r.jsxs)("span",{className:u()("decoder-text",h),...p,children:[(0,r.jsx)(c,{className:"decoder-text__label",children:t}),(0,r.jsx)("span",{"aria-hidden":!0,className:"decoder-text__content",ref:f})]})};var p=(0,a.memo)(h)},8416:function(e,t,n){var r=n(7294);t.Z=function(){let[e,t]=(0,r.useState)(()=>{var e;return null===(e=window.matchMedia)||void 0===e?void 0:e.call(window,"(prefers-reduced-motion: reduce)").matches});return(0,r.useEffect)(()=>{var e;let n=null===(e=window.matchMedia)||void 0===e?void 0:e.call(window,"(prefers-reduced-motion: reduce)"),r=()=>{t(null==n?void 0:n.matches)};try{return null==n||n.addEventListener("change",e=>r()),()=>{null==n||n.removeEventListener("change",e=>r())}}catch(a){return null==n||n.addListener(e=>r()),()=>{null==n||n.removeListener(e=>r())}}},[]),e}}}]);