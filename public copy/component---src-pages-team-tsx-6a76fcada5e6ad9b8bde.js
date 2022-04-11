"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[181],{5978:function(e,t,n){var a=n(7294),l=n(9),i=n(2138),r=n(6199),o=l.default.div.withConfig({displayName:"cardGrid__StyledCardGrid",componentId:"sc-1vh5894-0"})(["display:grid;grid-auto-flow:row;grid-template-columns:repeat(2,1fr);column-gap:1em;row-gap:0.5em;@media ","{max-width:70%;grid-template-columns:repeat(4,1fr);column-gap:0;row-gap:1.2em;}"],i.H.laptopMin),d=l.default.div.withConfig({displayName:"cardGrid__Card",componentId:"sc-1vh5894-1"})(["div{a{color:white;transition:all 0.5s;text-decoration:none;:hover{color:",";}}> p:nth-child(2){font-weight:200;font-style:italic;color:",";font-size:clamp(0.7em,1vw,1.4em);}}img{width:100%;max-width:30vw;object-fit:cover;height:170px;background-color:black;}@media ","{transition:transform 0.3s;max-width:12vw;:hover{transform:translateY(-10px) scale(1.004);}img{max-width:100%;height:27vh;}}"],r.P5,r.P5,i.H.laptopMin);t.Z=function(e){var t=e.nodes,n=e.panelNodes;return a.createElement(o,null,t?null==t?void 0:t.map((function(e){var t,n,l,i,r,o;return a.createElement(d,{key:e.id},a.createElement("a",{href:null===(t=e.data)||void 0===t?void 0:t.linkedInUrl},a.createElement("img",{src:null===(n=e.data)||void 0===n||null===(l=n.Attachments)||void 0===l?void 0:l.map((function(e){var t,n;return null==e||null===(t=e.thumbnails)||void 0===t||null===(n=t.large)||void 0===n?void 0:n.url}))[0]})),a.createElement("div",null,a.createElement("p",null,a.createElement("a",{href:null===(i=e.data)||void 0===i?void 0:i.linkedInUrl},null===(r=e.data)||void 0===r?void 0:r.Name)),a.createElement("p",null,null===(o=e.data)||void 0===o?void 0:o.Program)))})):n?null==n?void 0:n.map((function(e){var t,n,l,i,r,o,m;return a.createElement(d,{key:e.id},a.createElement("a",{href:null===(t=e.data)||void 0===t?void 0:t.LinkedIn_Url},a.createElement("img",{src:null===(n=e.data)||void 0===n||null===(l=n.Attachments)||void 0===l?void 0:l.map((function(e){var t,n;return null==e||null===(t=e.thumbnails)||void 0===t||null===(n=t.large)||void 0===n?void 0:n.url}))[0]})),a.createElement("div",null,a.createElement("p",null,a.createElement("a",{href:null===(i=e.data)||void 0===i?void 0:i.LinkedIn_Url},null===(r=e.data)||void 0===r?void 0:r.Name)),a.createElement("p",null,null===(o=e.data)||void 0===o?void 0:o.Title,", ",null===(m=e.data)||void 0===m?void 0:m.Organization)))})):a.createElement("div",null))}},8659:function(e,t,n){var a=n(7294),l=n(7500),i=n(6199),r=n(9),o=n(5606),d=n(3493),m=n(2138),c=r.default.header.withConfig({displayName:"layout__Header",componentId:"sc-u0vulc-0"})(["margin-top:",";padding-left:",";padding-right:",";@media ","{padding:0;margin:auto;width:70%;}div{height:1px;width:50%;background-color:white;@media ","{width:80%;}}"],i.bX+"em",2*i.bX+"em",2*i.bX+"em",m.H.mobileL,m.H.mobileL),u=r.default.div.withConfig({displayName:"layout__Section",componentId:"sc-u0vulc-1"})(["margin-top:",";padding-left:",";padding-right:",";@media ","{padding:0;margin:auto;width:70%;margin-top:20px;}"],i.bX+"em",2*i.bX+"em",2*i.bX+"em",m.H.mobileL);t.Z=function(e){var t=e.pageTitle,n=e.children,m=e.hideTitle;return a.createElement(r.ThemeProvider,{theme:i.ZP},a.createElement(o.Z,null),a.createElement("title",null,"SABF - ",t),a.createElement("div",{style:{height:"100%",minHeight:"90vh"}},a.createElement(l.Z,null),m?a.createElement(a.Fragment,null):a.createElement(c,null,a.createElement("h1",null,t),a.createElement("div",null)),a.createElement(u,null,n)),a.createElement(d.Z,null))}},8940:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var a=n(8659),l=n(7294),i=n(9),r=n(2138),o=n(5978),d=i.default.div.withConfig({displayName:"roleGroup__Wrapper",componentId:"sc-62o3td-0"})(["box-sizing:border-box;h3{padding-bottom:0.5em;font-weight:600;}margin-bottom:1em;@media ","{margin-bottom:3em;h3{font-size:1.5em;padding-bottom:1em;}}"],r.H.laptopMin),m=function(e){var t=e.groupTitle,n=e.nodes;return l.createElement(d,null,l.createElement("h3",null,t),l.createElement(o.Z,{nodes:n}))},c=n(2884),u=n(2932),s=function(e){var t=e.data,n=(0,l.useRef)();return(0,l.useLayoutEffect)((function(){c.p8.registerPlugin(u.i);var e=c.p8.utils.selector(n)(".group");console.log(e),e.forEach((function(e){c.p8.timeline({scrollTrigger:{trigger:e,toggleActions:"restart none none reset"}}).from(e,{opacity:0,yPercent:-10,duration:1,ease:"power2.easeOut"})}))})),l.createElement(a.Z,{pageTitle:"Team"},l.createElement("div",{ref:n},l.createElement("div",{className:"group"},l.createElement(m,{groupTitle:"Co-Presidents",nodes:t.leadership.nodes})),l.createElement("div",{className:"group"},l.createElement(m,{groupTitle:"Finance & Sponsorships Team",nodes:t.finance.nodes})," "),l.createElement("div",{className:"group"},l.createElement(m,{groupTitle:"Pitch Competition Team",nodes:t.pitch.nodes}))," ",l.createElement("div",{className:"group"},l.createElement(m,{groupTitle:"Marketing Team",nodes:t.marketing.nodes})," ")," ",l.createElement("div",{className:"group"},l.createElement(m,{groupTitle:"Content Team",nodes:t.speakers.nodes})," ")," ",l.createElement("div",{className:"group"},l.createElement(m,{groupTitle:"Gala and After-Party Team",nodes:t.gala.nodes})," ")," ",l.createElement("div",{className:"group"},l.createElement(m,{groupTitle:"Platform Team",nodes:t.platform.nodes})," ")," ",l.createElement("div",{className:"group"},l.createElement(m,{groupTitle:"Website Team",nodes:t.website.nodes})," ")))}}}]);
//# sourceMappingURL=component---src-pages-team-tsx-6a76fcada5e6ad9b8bde.js.map