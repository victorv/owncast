(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2476,1382],{63606:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(1413),a=n(67294),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},i=n(42135),c=function(e,t){return a.createElement(i.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:o}))};c.displayName="CheckOutlined";var l=a.forwardRef(c)},81643:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=function(e){return e?"function"==typeof e?e():e:null}},24093:function(e,t,n){"use strict";n.d(t,{C:function(){return Z}});var r=n(87462),a=n(4942),o=n(71002),i=n(97685),c=n(94184),l=n.n(c),s=n(48555),u=n(42550),f=n(67294),d=n(53124),m=n(25378),p=n(24308),v=f.createContext("default"),y=function(e){var t=e.children,n=e.size;return f.createElement(v.Consumer,null,function(e){return f.createElement(v.Provider,{value:n||e},t)})},h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},g=f.forwardRef(function(e,t){var n,c,y,g=f.useContext(v),x=f.useState(1),b=(0,i.Z)(x,2),w=b[0],E=b[1],Z=f.useState(!1),j=(0,i.Z)(Z,2),O=j[0],k=j[1],C=f.useState(!0),S=(0,i.Z)(C,2),N=S[0],T=S[1],P=f.useRef(null),_=f.useRef(null),D=(0,u.sQ)(t,P),I=f.useContext(d.E_).getPrefixCls,R=function(){if(_.current&&P.current){var t=_.current.offsetWidth,n=P.current.offsetWidth;if(0!==t&&0!==n){var r=e.gap,a=void 0===r?4:r;2*a<n&&E(n-2*a<t?(n-2*a)/t:1)}}};f.useEffect(function(){k(!0)},[]),f.useEffect(function(){T(!0),E(1)},[e.src]),f.useEffect(function(){R()},[e.gap]);var z=e.prefixCls,F=e.shape,A=void 0===F?"circle":F,M=e.size,L=void 0===M?"default":M,Q=e.src,W=e.srcSet,q=e.icon,H=e.className,$=e.alt,B=e.draggable,G=e.children,U=e.crossOrigin,Y=h(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children","crossOrigin"]),V="default"===L?g:L,X=Object.keys("object"===(0,o.Z)(V)&&V||{}).some(function(e){return["xs","sm","md","lg","xl","xxl"].includes(e)}),K=(0,m.Z)(X),J=f.useMemo(function(){if("object"!==(0,o.Z)(V))return{};var e=V[p.c4.find(function(e){return K[e]})];return e?{width:e,height:e,lineHeight:"".concat(e,"px"),fontSize:q?e/2:18}:{}},[K,V]),ee=I("avatar",z),et=l()((n={},(0,a.Z)(n,"".concat(ee,"-lg"),"large"===V),(0,a.Z)(n,"".concat(ee,"-sm"),"small"===V),n)),en=f.isValidElement(Q),er=l()(ee,et,(c={},(0,a.Z)(c,"".concat(ee,"-").concat(A),!!A),(0,a.Z)(c,"".concat(ee,"-image"),en||Q&&N),(0,a.Z)(c,"".concat(ee,"-icon"),!!q),c),H);if("string"==typeof Q&&N)y=f.createElement("img",{src:Q,draggable:B,srcSet:W,onError:function(){var t=e.onError;!1!==(t?t():void 0)&&T(!1)},alt:$,crossOrigin:U});else if(en)y=Q;else if(q)y=q;else if(O||1!==w){var ea="scale(".concat(w,") translateX(-50%)");y=f.createElement(s.default,{onResize:R},f.createElement("span",{className:"".concat(ee,"-string"),ref:_,style:(0,r.Z)((0,r.Z)({},"number"==typeof V?{lineHeight:"".concat(V,"px")}:{}),{msTransform:ea,WebkitTransform:ea,transform:ea})},G))}else y=f.createElement("span",{className:"".concat(ee,"-string"),style:{opacity:0},ref:_},G);return delete Y.onError,delete Y.gap,f.createElement("span",(0,r.Z)({},Y,{style:(0,r.Z)((0,r.Z)((0,r.Z)({},"number"==typeof V?{width:V,height:V,lineHeight:"".concat(V,"px"),fontSize:q?V/2:18}:{}),J),Y.style),className:er,ref:D}),y)}),x=n(50344),b=n(55241),w=n(96159),E=g;E.Group=function(e){var t=f.useContext(d.E_),n=t.getPrefixCls,r=t.direction,o=e.prefixCls,i=e.className,c=e.maxCount,s=e.maxStyle,u=e.size,m=n("avatar-group",o),p=l()(m,(0,a.Z)({},"".concat(m,"-rtl"),"rtl"===r),void 0===i?"":i),v=e.children,h=e.maxPopoverPlacement,E=e.maxPopoverTrigger,Z=(0,x.Z)(v).map(function(e,t){return(0,w.Tm)(e,{key:"avatar-key-".concat(t)})}),j=Z.length;if(c&&c<j){var O=Z.slice(0,c),k=Z.slice(c,j);return O.push(f.createElement(b.Z,{key:"avatar-popover-key",content:k,trigger:void 0===E?"hover":E,placement:void 0===h?"top":h,overlayClassName:"".concat(m,"-popover")},f.createElement(g,{style:s},"+".concat(j-c)))),f.createElement(y,{size:u},f.createElement("div",{className:p,style:e.style},O))}return f.createElement(y,{size:u},f.createElement("div",{className:p,style:e.style},Z))};var Z=E},97183:function(e,t,n){"use strict";var r=n(2897),a=n(7293),o=r.ZP;o.Header=r.h4,o.Footer=r.$_,o.Content=r.VY,o.Sider=a.Z,t.Z=o},55241:function(e,t,n){"use strict";var r=n(87462),a=n(67294),o=n(53124),i=n(94199),c=n(81643),l=n(33603),s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},u=function(e){var t=e.title,n=e.content,r=e.prefixCls;return t||n?a.createElement(a.Fragment,null,t&&a.createElement("div",{className:"".concat(r,"-title")},(0,c.Z)(t)),a.createElement("div",{className:"".concat(r,"-inner-content")},(0,c.Z)(n))):null},f=a.forwardRef(function(e,t){var n=e.prefixCls,c=e.title,f=e.content,d=e._overlay,m=e.placement,p=e.trigger,v=e.mouseEnterDelay,y=e.mouseLeaveDelay,h=e.overlayStyle,g=s(e,["prefixCls","title","content","_overlay","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),x=a.useContext(o.E_).getPrefixCls,b=x("popover",n),w=x();return a.createElement(i.Z,(0,r.Z)({placement:void 0===m?"top":m,trigger:void 0===p?"hover":p,mouseEnterDelay:void 0===v?.1:v,mouseLeaveDelay:void 0===y?.1:y,overlayStyle:void 0===h?{}:h},g,{prefixCls:b,ref:t,overlay:d||a.createElement(u,{prefixCls:b,title:c,content:f}),transitionName:(0,l.mL)(w,"zoom-big",g.transitionName)}))});t.Z=f},11382:function(e,t,n){"use strict";var r=n(87462),a=n(4942),o=n(97685),i=n(94184),c=n.n(i),l=n(23279),s=n.n(l),u=n(98423),f=n(67294),d=n(53124),m=n(96159),p=n(93355),v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};(0,p.b)("small","default","large");var y=null,h=function(e){var t=e.spinPrefixCls,n=e.spinning,i=void 0===n||n,l=e.delay,p=e.className,h=e.size,g=void 0===h?"default":h,x=e.tip,b=e.wrapperClassName,w=e.style,E=e.children,Z=v(e,["spinPrefixCls","spinning","delay","className","size","tip","wrapperClassName","style","children"]),j=f.useState(function(){return i&&(!i||!l||!!isNaN(Number(l)))}),O=(0,o.Z)(j,2),k=O[0],C=O[1];return f.useEffect(function(){var e=s()(function(){C(i)},l);return e(),function(){var t;null===(t=null==e?void 0:e.cancel)||void 0===t||t.call(e)}},[l,i]),f.createElement(d.C,null,function(n){var o,i,l,s=n.direction,d=c()(t,(l={},(0,a.Z)(l,"".concat(t,"-sm"),"small"===g),(0,a.Z)(l,"".concat(t,"-lg"),"large"===g),(0,a.Z)(l,"".concat(t,"-spinning"),k),(0,a.Z)(l,"".concat(t,"-show-text"),!!x),(0,a.Z)(l,"".concat(t,"-rtl"),"rtl"===s),l),p),v=(0,u.Z)(Z,["indicator","prefixCls"]),h=f.createElement("div",(0,r.Z)({},v,{style:w,className:d,"aria-live":"polite","aria-busy":k}),(o=e.indicator,i="".concat(t,"-dot"),null===o?null:(0,m.l$)(o)?(0,m.Tm)(o,{className:c()(o.props.className,i)}):(0,m.l$)(y)?(0,m.Tm)(y,{className:c()(y.props.className,i)}):f.createElement("span",{className:c()(i,"".concat(t,"-dot-spin"))},f.createElement("i",{className:"".concat(t,"-dot-item")}),f.createElement("i",{className:"".concat(t,"-dot-item")}),f.createElement("i",{className:"".concat(t,"-dot-item")}),f.createElement("i",{className:"".concat(t,"-dot-item")}))),x?f.createElement("div",{className:"".concat(t,"-text")},x):null);if(void 0!==E){var j=c()("".concat(t,"-container"),(0,a.Z)({},"".concat(t,"-blur"),k));return f.createElement("div",(0,r.Z)({},v,{className:c()("".concat(t,"-nested-loading"),b)}),k&&f.createElement("div",{key:"loading"},h),f.createElement("div",{className:j,key:"container"},E))}return h})},g=function(e){var t=e.prefixCls,n=(0,f.useContext(d.E_).getPrefixCls)("spin",t),a=(0,r.Z)((0,r.Z)({},e),{spinPrefixCls:n});return f.createElement(h,(0,r.Z)({},a))};g.setDefaultIndicator=function(e){y=e},t.Z=g},93645:function(e,t,n){"use strict";n.d(t,{u:function(){return a}});var r={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function a(e){return e?r[e]:r.trunc}},59910:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(19013),a=n(13882);function o(e,t){return(0,a.Z)(2,arguments),(0,r.Z)(e).getTime()-(0,r.Z)(t).getTime()}},11699:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(59910),a=n(13882),o=n(93645);function i(e,t,n){(0,a.Z)(2,arguments);var i=(0,r.Z)(e,t)/1e3;return(0,o.u)(null==n?void 0:n.roundingMethod)(i)}},62705:function(e,t,n){var r=n(55639).Symbol;e.exports=r},44239:function(e,t,n){var r=n(62705),a=n(89607),o=n(2333),i=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?a(e):o(e)}},27561:function(e,t,n){var r=n(67990),a=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(a,""):e}},31957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},89607:function(e,t,n){var r=n(62705),a=Object.prototype,o=a.hasOwnProperty,i=a.toString,c=r?r.toStringTag:void 0;e.exports=function(e){var t=o.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(a){}var l=i.call(e);return r&&(t?e[c]=n:delete e[c]),l}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},55639:function(e,t,n){var r=n(31957),a="object"==typeof self&&self&&self.Object===Object&&self,o=r||a||Function("return this")();e.exports=o},67990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},23279:function(e,t,n){var r=n(13218),a=n(7771),o=n(14841),i=Math.max,c=Math.min;e.exports=function(e,t,n){var l,s,u,f,d,m,p=0,v=!1,y=!1,h=!0;if("function"!=typeof e)throw TypeError("Expected a function");function g(t){var n=l,r=s;return l=s=void 0,p=t,f=e.apply(r,n)}function x(e){var n=e-m,r=e-p;return void 0===m||n>=t||n<0||y&&r>=u}function b(){var e,n,r,o=a();if(x(o))return w(o);d=setTimeout(b,(e=o-m,n=o-p,r=t-e,y?c(r,u-n):r))}function w(e){return(d=void 0,h&&l)?g(e):(l=s=void 0,f)}function E(){var e,n=a(),r=x(n);if(l=arguments,s=this,m=n,r){if(void 0===d)return p=e=m,d=setTimeout(b,t),v?g(e):f;if(y)return clearTimeout(d),d=setTimeout(b,t),g(m)}return void 0===d&&(d=setTimeout(b,t)),f}return t=o(t)||0,r(n)&&(v=!!n.leading,u=(y="maxWait"in n)?i(o(n.maxWait)||0,t):u,h="trailing"in n?!!n.trailing:h),E.cancel=function(){void 0!==d&&clearTimeout(d),p=0,l=m=s=d=void 0},E.flush=function(){return void 0===d?f:w(a())},E}},13218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},37005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},33448:function(e,t,n){var r=n(44239),a=n(37005);e.exports=function(e){return"symbol"==typeof e||a(e)&&"[object Symbol]"==r(e)}},7771:function(e,t,n){var r=n(55639);e.exports=function(){return r.Date.now()}},14841:function(e,t,n){var r=n(27561),a=n(13218),o=n(33448),i=0/0,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return i;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=l.test(e);return n||s.test(e)?u(e.slice(2),n?2:8):c.test(e)?i:+e}},89675:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/federation/followers",function(){return n(50080)}])},50080:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(85893),a=n(67294),o=n(24093),i=n(54398),c=n(71577),l=n(84381),s=n(58091),u=n(5152),f=n.n(u),d=n(99519),m=n(64777),p=n(70241),v=n(6960);let y=f()(()=>Promise.all([n.e(2074),n.e(6910)]).then(n.t.bind(n,66910,23)),{loadableGenerated:{webpack:()=>[66910]},ssr:!1}),h=f()(()=>Promise.all([n.e(2074),n.e(6139)]).then(n.t.bind(n,26139,23)),{loadableGenerated:{webpack:()=>[26139]},ssr:!1});function g(){let[e,t]=(0,a.useState)([]),[n,u]=(0,a.useState)([]),[f,v]=(0,a.useState)([]),[g,x]=(0,a.useState)(0),[b,w]=(0,a.useState)(0),E=(0,a.useContext)(d.aC),{serverConfig:Z}=E||{},{federation:j}=Z,{isPrivate:O}=j,k=async()=>{try{let e="".concat(m.HP,"?offset=").concat(50*b,"&limit=").concat(50),r=await (0,m.rQ)(e,{auth:!0}),{results:a,total:o}=r;(0,p.Qr)(a)?v([]):(x(o),v(a));let i=await (0,m.rQ)(m.E8,{auth:!0});(0,p.Qr)(i)?t([]):t(i);let c=await (0,m.rQ)(m.Y9,{auth:!0});(0,p.Qr)(n)?u([]):u(c)}catch(l){console.log("==== error",l)}};(0,a.useEffect)(()=>{k()},[]);let C=[{title:"",dataIndex:"image",key:"image",width:90,render:e=>(0,r.jsx)(o.C,{size:40,src:e||"/img/logo.svg"})},{title:"Name",dataIndex:"name",key:"name",render:(e,t)=>(0,r.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",children:t.name||t.username})},{title:"URL",dataIndex:"link",key:"link",render:(e,t)=>(0,r.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",children:t.link})}];function S(e,t){return(0,r.jsx)(i.Z,{dataSource:e,columns:t,size:"small",rowKey:e=>e.link,pagination:{pageSize:50,hideOnSinglePage:!0,showSizeChanger:!1,total:g},onChange:e=>{let t=e.current;w(t)}})}async function N(e){try{await (0,m.rQ)(m.kb,{auth:!0,method:"POST",data:{actorIRI:e.link,approved:!0}}),k()}catch(t){console.error(t)}}async function T(e){try{await (0,m.rQ)(m.kb,{auth:!0,method:"POST",data:{actorIRI:e.link,approved:!1}}),k()}catch(t){console.error(t)}}let P=[...C];P.unshift({title:"Approve",dataIndex:null,key:null,render:e=>(0,r.jsx)(c.Z,{type:"primary",icon:(0,r.jsx)(y,{}),onClick:()=>{N(e)}}),width:50},{title:"Reject",dataIndex:null,key:null,render:e=>(0,r.jsx)(c.Z,{type:"primary",danger:!0,icon:(0,r.jsx)(h,{}),onClick:()=>{T(e)}}),width:50}),P.push({title:"Requested",dataIndex:"timestamp",key:"requested",width:200,render:e=>{let t=new Date(e);return(0,r.jsx)(r.Fragment,{children:(0,s.Z)(t,"P")})},sorter:(e,t)=>new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime(),sortDirections:["descend","ascend"],defaultSortOrder:"descend"});let _=[...C];_.unshift({title:"Approve",dataIndex:null,key:null,render:e=>(0,r.jsx)(c.Z,{type:"primary",icon:(0,r.jsx)(y,{}),size:"large",onClick:()=>{N(e)}}),width:50}),_.push({title:"Requested",dataIndex:"timestamp",key:"requested",width:200,render:e=>{let t=new Date(e);return(0,r.jsx)(r.Fragment,{children:(0,s.Z)(t,"P")})},sorter:(e,t)=>new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime(),sortDirections:["descend","ascend"],defaultSortOrder:"descend"},{title:"Rejected/Blocked",dataIndex:"timestamp",key:"disabled_at",width:200,render:e=>{let t=new Date(e);return(0,r.jsx)(r.Fragment,{children:(0,s.Z)(t,"P")})},sorter:(e,t)=>new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime(),sortDirections:["descend","ascend"],defaultSortOrder:"descend"});let D=[...C];D.push({title:"Added",dataIndex:"timestamp",key:"timestamp",width:200,render:e=>{let t=new Date(e);return(0,r.jsx)(r.Fragment,{children:(0,s.Z)(t,"P")})},sorter:(e,t)=>new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime(),sortDirections:["descend","ascend"],defaultSortOrder:"descend"},{title:"Remove",dataIndex:null,key:null,render:e=>(0,r.jsx)(c.Z,{type:"primary",danger:!0,icon:(0,r.jsx)(h,{}),onClick:()=>{T(e)}}),width:50});let I=(0,r.jsxs)("span",{children:["Followers ",f.length>0&&"(".concat(f.length,")")]}),R=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"The following accounts get notified when you go live or send a post."}),S(f,D)," "]}),z=(0,r.jsxs)("span",{children:["Requests ",e.length>0&&"(".concat(e.length,")")]}),F=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:["The following people are requesting to follow your Owncast server on the"," ",(0,r.jsx)("a",{href:"https://en.wikipedia.org/wiki/Fediverse",target:"_blank",rel:"noopener noreferrer",children:"Fediverse"})," ","and be alerted to when you go live. Each must be approved."]}),S(e,P)]}),A=(0,r.jsxs)("span",{children:["Blocked ",n.length>0&&"(".concat(n.length,")")]}),M=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"The following people were either rejected or blocked by you. You can approve them as a follower."}),(0,r.jsx)("p",{children:S(n,_)})]});return(0,r.jsx)("div",{className:"followers-section",children:(0,r.jsx)(l.Z,{defaultActiveKey:"1",items:[{label:I,key:"1",children:R},O&&{label:z,key:"2",children:F},{label:A,key:"3",children:M}]})})}g.getLayout=function(e){return(0,r.jsx)(v.l,{page:e})}},9008:function(e,t,n){e.exports=n(83121)},11163:function(e,t,n){e.exports=n(80880)},92703:function(e,t,n){"use strict";var r=n(50414);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,i){if(i!==r){var c=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},45697:function(e,t,n){e.exports=n(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},79370:function(e,t,n){"use strict";n.d(t,{G:function(){return i}});var r=n(98924),a=function(e){if((0,r.Z)()&&window.document.documentElement){var t=Array.isArray(e)?e:[e],n=window.document.documentElement;return t.some(function(e){return e in n.style})}return!1},o=function(e,t){if(!a(e))return!1;var n=document.createElement("div"),r=n.style[e];return n.style[e]=t,n.style[e]!==r};function i(e,t){return Array.isArray(e)||void 0===t?a(e):o(e,t)}}},function(e){e.O(0,[173,164,2138,31,4931,5402,2231,492,7524,9915,6386,3698,3013,4398,8091,4381,710,6960,9774,2888,179],function(){return e(e.s=89675)}),_N_E=e.O()}]);
//# sourceMappingURL=followers-6fca8865775a9ba4.js.map