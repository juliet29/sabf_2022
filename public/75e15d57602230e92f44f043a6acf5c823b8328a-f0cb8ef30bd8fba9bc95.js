"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[140],{7070:function(e,t,n){n.d(t,{Z:function(){return B}});var r=n(6459),o=n(5444),a=n(7294),i=n(9),l=n(6199),c=n(4694),s=n(5697),d=n.n(s);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function g(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var w=["style"];function v(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,r=t.indexOf(":"),o=h(t.slice(0,r)),a=t.slice(r+1).trim();return o.startsWith("webkit")?e[(n=o,n.charAt(0).toUpperCase()+n.slice(1))]=a:e[o]=a,e}),{})}var x=!1;try{x=!0}catch(M){}function E(e){return e&&"object"===m(e)&&e.prefix&&e.iconName&&e.icon?e:c.parse.icon?c.parse.icon(e):null===e?null:e&&"object"===m(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function k(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?p({},e,t):{}}var O=["forwardedRef"];function _(e){var t=e.forwardedRef,n=b(e,O),r=n.icon,o=n.mask,a=n.symbol,i=n.className,l=n.title,s=n.titleId,d=E(r),f=k("classes",[].concat(g(function(e){var t,n=e.beat,r=e.fade,o=e.flash,a=e.spin,i=e.spinPulse,l=e.spinReverse,c=e.pulse,s=e.fixedWidth,d=e.inverse,f=e.border,u=e.listItem,m=e.flip,b=e.size,g=e.rotation,y=e.pull,h=(p(t={"fa-beat":n,"fa-fade":r,"fa-flash":o,"fa-spin":a,"fa-spin-reverse":l,"fa-spin-pulse":i,"fa-pulse":c,"fa-fw":s,"fa-inverse":d,"fa-border":f,"fa-li":u,"fa-flip-horizontal":"horizontal"===m||"both"===m,"fa-flip-vertical":"vertical"===m||"both"===m},"fa-".concat(b),null!=b),p(t,"fa-rotate-".concat(g),null!=g&&0!==g),p(t,"fa-pull-".concat(y),null!=y),p(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(h).map((function(e){return h[e]?e:null})).filter((function(e){return e}))}(n)),g(i.split(" ")))),m=k("transform","string"==typeof n.transform?c.parse.transform(n.transform):n.transform),y=k("mask",E(o)),h=(0,c.icon)(d,u(u(u(u({},f),m),y),{},{symbol:a,title:l,titleId:s}));if(!h)return function(){var e;!x&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",d),null;var w=h.abstract,v={ref:t};return Object.keys(n).forEach((function(e){_.defaultProps.hasOwnProperty(e)||(v[e]=n[e])})),j(w[0],v)}_.displayName="FontAwesomeIcon",_.propTypes={beat:d().bool,border:d().bool,className:d().string,fade:d().bool,flash:d().bool,mask:d().oneOfType([d().object,d().array,d().string]),fixedWidth:d().bool,inverse:d().bool,flip:d().oneOf(["horizontal","vertical","both"]),icon:d().oneOfType([d().object,d().array,d().string]),listItem:d().bool,pull:d().oneOf(["right","left"]),pulse:d().bool,rotation:d().oneOf([0,90,180,270]),size:d().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:d().bool,spinPulse:d().bool,spinReverse:d().bool,symbol:d().oneOfType([d().bool,d().string]),title:d().string,transform:d().oneOfType([d().string,d().object]),swapOpacity:d().bool},_.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var j=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var o=(n.children||[]).map((function(n){return e(t,n)})),a=Object.keys(n.attributes||{}).reduce((function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=v(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[h(t)]=r}return e}),{attrs:{}}),i=r.style,l=void 0===i?{}:i,c=b(r,w);return a.attrs.style=u(u({},a.attrs.style),l),t.apply(void 0,[n.tag,u(u({},a.attrs),c)].concat(g(o)))}.bind(null,a.createElement),N=n(7190),C=n(2138),I=n(2105),L=i.default.footer.withConfig({displayName:"footer__StyledFooter",componentId:"sc-r0gnt3-0"})(["margin-top:20vh;padding:",";padding-top:7em;padding-left:7em;@media ","{padding-top:2em;padding-left:2em;padding-right:2em;}display:flex;flex-direction:row;position:relative;bottom:0;width:100%;background-color:",";"],l.bX+"em",C.H.mobileL,l.P5),S=i.default.div.withConfig({displayName:"footer__LeftColumn",componentId:"sc-r0gnt3-1"})(["flex-grow:2;@media ","{flex-grow:1;}"],C.H.mobileL),P=i.default.div.withConfig({displayName:"footer__RightColumn",componentId:"sc-r0gnt3-2"})(["flex-grow:1;@media ","{font-size:0.5em;}"],C.H.mobileL),A=i.default.div.withConfig({displayName:"footer__FooterMenu",componentId:"sc-r0gnt3-3"})(["display:flex;flex-direction:column;height:100%;"]),z=(0,i.default)(o.Link).withConfig({displayName:"footer__FooterMenuItem",componentId:"sc-r0gnt3-4"})(["color:white;text-decoration:none;flex-grow:1;transition:0.1s all ease-in-out;display:inline-block;width:content;h2:hover{display:inline-block;text-decoration:underline;color:",";}"],l.Hk),H=i.default.div.withConfig({displayName:"footer__SocialLinksMenu",componentId:"sc-r0gnt3-5"})(["display:flex;flex-direction:column;row-gap:2em;div{display:flex;flex-direction:row;column-gap:2em;@media ","{column-gap:3em;row-gap:2em;}}"],C.H.mobileL),D=i.default.a.withConfig({displayName:"footer__SocialLinksItem",componentId:"sc-r0gnt3-6"})(["color:white;transition:0.3s all ease-in-out;:hover{color:",";}"],l.Hk),T=i.default.div.withConfig({displayName:"footer__TextInfo",componentId:"sc-r0gnt3-7"})(["margin-top:4em;p{margin-bottom:1em;}"]),B=function(e){(0,r.Z)(e);var t=(0,I.i)().width;return a.createElement(L,null,a.createElement(S,null,a.createElement(A,null,a.createElement(z,{to:"/"},a.createElement("h2",null,"01 About")),a.createElement(z,{to:"/attend"},a.createElement("h2",null,"02 Events")),a.createElement(z,{to:"/team"},a.createElement("h2",null,"03 History")),a.createElement(z,{to:"/press"},a.createElement("h2",null,"04 Sponsors")))),a.createElement(P,null,a.createElement(H,null,a.createElement("div",null,a.createElement(D,{href:"https://www.instagram.com/stanford_abc/?hl=en"}," ",a.createElement(_,{icon:N.Xg5,size:"3x"})),a.createElement(D,{href:"https://www.youtube.com/channel/UCwJjlor3HDcRayDtd_NqiBg"}," ",a.createElement(_,{icon:N.NY9,size:"3x"}))),a.createElement("div",null,a.createElement(D,{href:"https://www.linkedin.com/company/stanfordabf/"}," ",a.createElement(_,{icon:N.D9H,size:"3x"})),a.createElement(D,{href:"https://twitter.com/stanfordabf"}," ",a.createElement(_,{icon:N.sd1,size:"3x"})))),a.createElement(T,null,t>C.A?a.createElement("p",null,"Please direct all inquiries to ",a.createElement("br",null)," gsb_africabusinessforumleadership@stanford.edu."):a.createElement("p",null,"Please direct all inquiries to ",a.createElement("br",null)," gsb_africabusinessforum ",a.createElement("br",null)," -leadership@stanford.edu."),a.createElement("p",null,"Sign up to attend the event ",a.createElement(o.Link,{to:"/attend",style:{color:"white"}},"here"),"."))))}},7500:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(6459),o=n(5444),a=n(7294),i=n(9),l=n(6199),c=n(6125),s=n(2105),d=n(2138),f=i.default.div.withConfig({displayName:"burgerMenu__Wrapper",componentId:"sc-exr93l-0"})(["display:flex;flex-direction:column;justify-content:center;height:100vh;text-align:left;padding:1em;position:absolute;top:0;left:0;transition:transform 0.3s ease-in-out;background-color:",";padding:0;@media ","{width:100%;}transform:",";"],l.P5,d.H.mobileL,(function(e){return e.open?"translateX(0)":"translateX(-100%)"})),u=(0,i.default)(o.Link).withConfig({displayName:"burgerMenu__NavLink",componentId:"sc-exr93l-1"})(["font-size:1rem;text-align:center;text-transform:uppercase;padding:2rem 1em;font-weight:bold;letter-spacing:0.5rem;color:black;text-decoration:none;transition:color 0.3s linear;&:hover{color:white;}"]),m=function(e){var t=e.open;return a.createElement(f,{open:t},a.createElement(u,{to:"/press"},"Press + Videos"),a.createElement(u,{to:"/pitch"},"Pitch Competition"),a.createElement(u,{to:"/speakers"},"Speakers + Panels"),a.createElement(u,{to:"/team"},"Team"),a.createElement(u,{to:"/attend"},"Attend"))},p=i.default.button.withConfig({displayName:"burgerMenuIcon__Burger",componentId:"sc-1lnl0br-0"})(["margin-right:1em;display:flex;flex-direction:column;justify-content:space-around;width:2rem;height:2rem;background:transparent;border:none;cursor:pointer;padding:0;z-index:10;&:focus{outline:none;}div{width:2rem;height:0.15rem;background:",";border-radius:1px;transition:all 0.3s linear;position:relative;transform-origin:1px;:nth-child(1){transform:",";}:nth-child(2){opacity:",";transform:",";}:nth-child(3){transform:",";}}"],(function(e){return e.open?""+l.Hk:""+l.P5}),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"0":"1"}),(function(e){return e.open?"translateX(20px)":"translateX(0)"}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),b=function(e){var t=e.open,n=e.setOpen;return a.createElement(p,{open:t,onClick:function(){return n(!t)}},a.createElement("div",null),a.createElement("div",null),a.createElement("div",null))},g=i.default.nav.withConfig({displayName:"navBar__NavBarNav",componentId:"sc-jq2yk-0"})(["z-index:10000000000;padding-top:1em;padding-bottom:1em;padding-left:1em;padding-right:1em;position:sticky;top:0;background-color:black;@media ","{box-sizing:border-box;width:100vw;padding:1em;}"],d.H.mobileL),y=i.default.div.withConfig({displayName:"navBar__NavBarDiv",componentId:"sc-jq2yk-1"})(["display:flex;flex-direction:row;justify-content:space-between;align-items:center;"]),h=i.default.div.withConfig({displayName:"navBar__NavMenuDiv",componentId:"sc-jq2yk-2"})(["display:flex;flex-direction:row;justify-content:space-between;"]),w=(0,i.default)(o.Link).withConfig({displayName:"navBar__NavLink",componentId:"sc-jq2yk-3"})(["color:",";margin-left:1em;margin-right:1em;text-decoration:none;text-transform:uppercase;transition:0.3s all ease-in-out;:hover{color:white;text-decoration:underline;}"],l.P5),v=function(e){(0,r.Z)(e);var t=(0,s.i)().width,o=(0,a.useState)(!1),i=o[0],l=o[1];return a.createElement(g,null,a.createElement(y,null,a.createElement(w,{to:"/"},a.createElement(c.S,{src:"../../assets/sabfLogo.png",alt:"SABF",width:110,__imageData:n(4960)})),t>d.A?a.createElement(h,null,a.createElement(w,{to:"/press"},"Press + Videos"),a.createElement(w,{to:"/pitch"},"Pitch Competition"),a.createElement(w,{to:"/speakers"},"Speakers + Panels"),a.createElement(w,{to:"/team"},"Team"),a.createElement(w,{to:"/attend"},"Attend")):a.createElement(a.Fragment,null,a.createElement(m,{open:i,setOpen:l}),a.createElement(b,{open:i,setOpen:l}))))}},2105:function(e,t,n){n.d(t,{i:function(){return a}});var r=n(7294),o="undefined"!=typeof window,a=function(){var e=(0,r.useState)({width:0,height:0}),t=e[0],n=e[1];return(0,r.useEffect)((function(){function e(){n({width:window.innerWidth,height:window.innerHeight})}if(o)return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),t}},5606:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(9),o=n(6199),a=(0,r.createGlobalStyle)(["html{background-color:",";font-family:",";color:white;}body{margin:0;}h1,h2,p,a{font-size:clamp(var(--min),var(--val),var(--max));margin:0;font-weight:normal;}a{}h1{--min:2em;--val:5vw;--max:3em;}h2{--min:1.5em;--val:2vw;--max:2.25em;}p,a{--min:0.8em;--val:1.2vw;--max:1.5em;}"],o.eE,o.I8)},6459:function(e,t,n){function r(e){if(null==e)throw new TypeError("Cannot destructure undefined")}n.d(t,{Z:function(){return r}})},4960:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/388d464dd89249d1a135b8e69d97a7ec/1e010/sabfLogo.png","srcSet":"/static/388d464dd89249d1a135b8e69d97a7ec/7a5b8/sabfLogo.png 28w,\\n/static/388d464dd89249d1a135b8e69d97a7ec/4c483/sabfLogo.png 55w,\\n/static/388d464dd89249d1a135b8e69d97a7ec/1e010/sabfLogo.png 110w,\\n/static/388d464dd89249d1a135b8e69d97a7ec/43be6/sabfLogo.png 220w","sizes":"(min-width: 110px) 110px, 100vw"},"sources":[{"srcSet":"/static/388d464dd89249d1a135b8e69d97a7ec/629a0/sabfLogo.webp 28w,\\n/static/388d464dd89249d1a135b8e69d97a7ec/938d3/sabfLogo.webp 55w,\\n/static/388d464dd89249d1a135b8e69d97a7ec/8c6ff/sabfLogo.webp 110w,\\n/static/388d464dd89249d1a135b8e69d97a7ec/4c27b/sabfLogo.webp 220w","type":"image/webp","sizes":"(min-width: 110px) 110px, 100vw"}]},"width":110,"height":110}')}}]);
//# sourceMappingURL=75e15d57602230e92f44f043a6acf5c823b8328a-f0cb8ef30bd8fba9bc95.js.map