(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[903],{9075:function(i,e,n){"use strict";n.d(e,{Z:function(){return d}});var t=n(5893),a=n(7294),s=n(3067),o=n(4811),r=n(798),c=n.n(r);function d(i){let{children:e}=i,[n,r]=(0,a.useState)(!1),d=e.length>1?e[0]:null,l=e.length>1?e[1]:e[0],_=(0,a.useRef)(),g=i=>{r(!1)};return(0,a.useEffect)(()=>(document.addEventListener("mousedown",g),n?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.removeEventListener("mousedown",g)}),[n]),(0,t.jsx)(s.M,{children:n?(0,t.jsx)(o.E.div,{ref:_,className:c().modal,onClick(){r(!1)},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:"0.2"},children:l},"modal"):(0,t.jsx)(o.E.div,{onClick(){r(!0)},children:d})})}},3903:function(i,e,n){"use strict";n.r(e),n.d(e,{default:function(){return l}});var t=n(5893),a=n(5675),s=n.n(a),o=n(4811),r=n(9075),c=n(3348),d=n.n(c);function l(i){let{gigs:e}=i;return(0,t.jsx)("div",{className:d().container,children:e.map(i=>{let{position:e,organization:n,logo:a,description:c,color:l,backgroundColor:_}=i;return(0,t.jsx)(r.Z,{children:[(0,t.jsx)(o.E.div,{className:d().compactCard,initial:{x:0,scale:1,rotation:0},whileTap:{scale:.9},whileHover:{scale:1.1},transition:{duration:"0.2",type:"intertia"},children:(0,t.jsx)(s(),{src:a,width:150,height:150,alt:"Picture of ".concat(n)})}),(0,t.jsx)("div",{children:(0,t.jsxs)(o.E.div,{className:d().expandedCard,intial:{scale:"0.2",boxShadow:"none"},animate:{boxShadow:"0px 0px 100rem 100rem rgba(0, 0, 0, 0.8)",scale:1},transition:{duration:0,type:"keyframes"},children:[(0,t.jsxs)("div",{className:d().headerGrid,children:[(0,t.jsx)("div",{className:"".concat(d().cardLogo," ").concat(d().thirdGrid," ").concat(d().col),children:(0,t.jsx)(s(),{src:a,width:80,height:80,alt:n})}),(0,t.jsxs)("div",{className:"".concat(d().titles," ").concat(d().col),children:[(0,t.jsx)("div",{className:d().organization,children:n}),(0,t.jsx)("div",{className:d().position,children:e})]})]}),(0,t.jsx)("div",{className:d().description,children:c})]})})]},n)})})}},798:function(i){i.exports={backdrop:"modal_backdrop__g0Q_d",modal:"modal_modal__3DbJV"}},3348:function(i){i.exports={white:"gigs_white__SQDyj",black:"gigs_black__jZbA2",container:"gigs_container__5bS8T",compactCard:"gigs_compactCard__qjs5S",headerGrid:"gigs_headerGrid__xXM8F",col:"gigs_col__jnC85",thirdGrid:"gigs_thirdGrid__gZrrg",expandedCard:"gigs_expandedCard__ArNZY",cardLogo:"gigs_cardLogo__v03Hb",titles:"gigs_titles__Nptr_",organization:"gigs_organization__JXb_F",position:"gigs_position__74rPM",description:"gigs_description__X8gwM"}}}]);