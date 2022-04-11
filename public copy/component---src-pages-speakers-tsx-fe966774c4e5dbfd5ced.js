"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[758],{5978:function(e,t,n){var i=n(7294),a=n(9),r=n(2138),o=n(6199),l=a.default.div.withConfig({displayName:"cardGrid__StyledCardGrid",componentId:"sc-1vh5894-0"})(["display:grid;grid-auto-flow:row;grid-template-columns:repeat(2,1fr);column-gap:1em;row-gap:0.5em;@media ","{max-width:70%;grid-template-columns:repeat(4,1fr);column-gap:0;row-gap:1.2em;}"],r.H.laptopMin),c=a.default.div.withConfig({displayName:"cardGrid__Card",componentId:"sc-1vh5894-1"})(["div{a{color:white;transition:all 0.5s;text-decoration:none;:hover{color:",";}}> p:nth-child(2){font-weight:200;font-style:italic;color:",";font-size:clamp(0.7em,1vw,1.4em);}}img{width:100%;max-width:30vw;object-fit:cover;height:170px;background-color:black;}@media ","{transition:transform 0.3s;max-width:12vw;:hover{transform:translateY(-10px) scale(1.004);}img{max-width:100%;height:27vh;}}"],o.P5,o.P5,r.H.laptopMin);t.Z=function(e){var t=e.nodes,n=e.panelNodes;return i.createElement(l,null,t?null==t?void 0:t.map((function(e){var t,n,a,r,o,l;return i.createElement(c,{key:e.id},i.createElement("a",{href:null===(t=e.data)||void 0===t?void 0:t.linkedInUrl},i.createElement("img",{src:null===(n=e.data)||void 0===n||null===(a=n.Attachments)||void 0===a?void 0:a.map((function(e){var t,n;return null==e||null===(t=e.thumbnails)||void 0===t||null===(n=t.large)||void 0===n?void 0:n.url}))[0]})),i.createElement("div",null,i.createElement("p",null,i.createElement("a",{href:null===(r=e.data)||void 0===r?void 0:r.linkedInUrl},null===(o=e.data)||void 0===o?void 0:o.Name)),i.createElement("p",null,null===(l=e.data)||void 0===l?void 0:l.Program)))})):n?null==n?void 0:n.map((function(e){var t,n,a,r,o,l,d;return i.createElement(c,{key:e.id},i.createElement("a",{href:null===(t=e.data)||void 0===t?void 0:t.LinkedIn_Url},i.createElement("img",{src:null===(n=e.data)||void 0===n||null===(a=n.Attachments)||void 0===a?void 0:a.map((function(e){var t,n;return null==e||null===(t=e.thumbnails)||void 0===t||null===(n=t.large)||void 0===n?void 0:n.url}))[0]})),i.createElement("div",null,i.createElement("p",null,i.createElement("a",{href:null===(r=e.data)||void 0===r?void 0:r.LinkedIn_Url},null===(o=e.data)||void 0===o?void 0:o.Name)),i.createElement("p",null,null===(l=e.data)||void 0===l?void 0:l.Title,", ",null===(d=e.data)||void 0===d?void 0:d.Organization)))})):i.createElement("div",null))}},8659:function(e,t,n){var i=n(7294),a=n(7500),r=n(6199),o=n(9),l=n(5606),c=n(3493),d=n(2138),s=o.default.header.withConfig({displayName:"layout__Header",componentId:"sc-u0vulc-0"})(["margin-top:",";padding-left:",";padding-right:",";@media ","{padding:0;margin:auto;width:70%;}div{height:1px;width:50%;background-color:white;@media ","{width:80%;}}"],r.bX+"em",2*r.bX+"em",2*r.bX+"em",d.H.mobileL,d.H.mobileL),m=o.default.div.withConfig({displayName:"layout__Section",componentId:"sc-u0vulc-1"})(["margin-top:",";padding-left:",";padding-right:",";@media ","{padding:0;margin:auto;width:70%;margin-top:20px;}"],r.bX+"em",2*r.bX+"em",2*r.bX+"em",d.H.mobileL);t.Z=function(e){var t=e.pageTitle,n=e.children,d=e.hideTitle;return i.createElement(o.ThemeProvider,{theme:r.ZP},i.createElement(l.Z,null),i.createElement("title",null,"SABF - ",t),i.createElement("div",{style:{height:"100%",minHeight:"90vh"}},i.createElement(a.Z,null),d?i.createElement(i.Fragment,null):i.createElement(s,null,i.createElement("h1",null,t),i.createElement("div",null)),i.createElement(m,null,n)),i.createElement(c.Z,null))}},7131:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var i=n(8659),a=n(7294),r=n(9),o=n(2138),l=n(6199),c=n(2884),d=n(2932),s=r.default.div.withConfig({displayName:"keynotes__Wrapper",componentId:"sc-6ygop-0"})(["margin-top:1em;@media ","{display:flex;flex-direction:row;justify-content:space-around;padding-left:1em;padding-right:1em;}"],o.H.mobileLMin),m=r.default.div.withConfig({displayName:"keynotes__KeynoteItem",componentId:"sc-6ygop-1"})(["flex-grow:1;display:flex;flex-direction:column;justify-content:center;text-align:center;margin-bottom:2em;img{width:100%;max-width:50vw;object-fit:cover;height:170px;border-radius:50%;margin-bottom:1em;margin:auto;}a{color:white;transition:all 0.5s;text-decoration:none;:hover{color:",";}}div{max-width:80%;margin:auto;> p:nth-of-type(2){color:",";font-weight:200;font-style:italic;color:",";font-size:clamp(0.7em,1vw,1.4em);}}@media ","{padding-left:3em;padding-right:3em;img{width:inherit;height:50vh;margin-bottom:1.5em;}div{max-width:50%;}}"],l.P5,l.P5,l.P5,o.H.mobileLMin),u=function(e){var t=e.data,n=(0,a.useRef)(),i=c.p8.utils.selector(n);return(0,a.useLayoutEffect)((function(){c.p8.registerPlugin(d.i),i(".photoPlace").forEach((function(e){var t=e.querySelector(".gatsbyImg");console.log("hi",t),c.p8.timeline({scrollTrigger:{trigger:e,toggleActions:"restart none none reset"}}).from(t,{scale:1.1,duration:1.5,ease:"power2.easeOut"})}))})),a.createElement(s,{ref:n},t.keynote.nodes.map((function(e){var t,n,i,r,o,l,c;return a.createElement(m,null,a.createElement("a",{href:null===(t=e.data)||void 0===t?void 0:t.LinkedIn_Url,className:"photoPlace"},a.createElement("img",{className:"gatsbyImg",src:null===(n=e.data)||void 0===n||null===(i=n.Attachments)||void 0===i?void 0:i.map((function(e){var t,n;return null==e||null===(t=e.thumbnails)||void 0===t||null===(n=t.large)||void 0===n?void 0:n.url}))[0]})),a.createElement("div",null,a.createElement("p",null,a.createElement("a",{href:null===(r=e.data)||void 0===r?void 0:r.LinkedIn_Url},null===(o=e.data)||void 0===o?void 0:o.Name)),a.createElement("p",null,null===(l=e.data)||void 0===l?void 0:l.Title,", ",null===(c=e.data)||void 0===c?void 0:c.Organization)))})))},p=[{number:1,link:"Health",name:"Healthcare",title:"Leveraging Technology to Improve Health Outcomes",text:"The COVID-19 pandemic highlighted the importance of access to healthcare for the traditionally underserved. Our  panelists will discuss how we can leverage technology to improve health outcomes, even in the face of infrastructure constraints."},{number:2,link:"Energy",name:"Clean Energy",title:"Collaboration and Innovation Driving a Prosperous and Inclusive African Energy Transition",text:"Energy and infrastructure are essential to economic development and critical societal needs such as medicine, education, and security. Even as Africa continues on its industrialization and development, there is tremendous pressure and perhaps opportunity to do so in an environmentally-friendly way. There is also great hope and opportunity for the continent’s energy and infrastructure ecosystem. "},{number:3,link:"FinTech",name:"FinTech",title:"FinTech Beyond Borders",text:"FinTechs has dominated fundraising, accounting for nearly two-thirds of all investments to the African continent in recent years. As foreign investments pour in, our panel will explore how can FinTech firms continue expanding across the continent both in reach and services to drive economic growth."},{number:4,link:"Entrepreneurship",name:"Entrepreneurship",title:"Innovation Through Entrepreneurship: Building Scalable, Long-Lasting Businesses",text:"More than 600 African tech companies raised a total of $5.2 billion from Venture Capital Firms in 2021. This record sum is three times that of 2020 and was partly driven by renewed interest in growth stage funding for startups on the continent. An experienced   group of professionals will discuss their experiences working in the African entrepreneurship ecosystem and their view of the future. "},{number:5,link:"Investing",name:"Investing (PE/VC)",title:"Acceleration of Venture Capital Financing in Africa: Implications for the Region",text:"Venture capital (VC) investment and overall funding across a variety of industries in Africa have experienced an important growth in recent years. Firms across the world are turning their attention to Africa given the increase in its population, the propensity of its industries for disruption  and the proven growth metrics of continental startups. Our panelists will shed light on the challenges vernture capital and private equity firms face  un understanding the markets dynamics."},{number:6,link:"Blockchain",name:"Blockchain & Crypto",title:"The Future of Blockchain in Africa",text:"In 2021, Nigeria was bitcoin’s second-largest market by volume – despite crypto being illegal in the country. With the vast majority of the continent unbanked, and adoption of mobile payments accelerating rapidly, Africa represents one of the world’s most fertile grounds for blockchain adoption. However, regulation remains undefined, and crypto startups are rapidly growing while operating in a grey zone of legality. What unique opportunities do crypto/blockchain solutions have on the continent? What unique challenges do they face? Our panel holds the answer to these questions and more."},{number:7,link:"Infrastructure",name:"Infrastructure and Cities",title:"Building the African City of the Future",text:"900 million people will move into cities in Africa over the next thirty years,  resulting in  the greatest period of urbanization in human history. Our  panelists will discuss  shaping the future of African cities and show the world that real estate can do much more than just provide shelter."}],h=n(9869),f=n(5978),g="15em",v=r.default.div.withConfig({displayName:"panels__Wrapper",componentId:"sc-1lew8za-0"})(["margin-top:0.8em;"]),y=(0,r.default)(h.P).withConfig({displayName:"panels__StyledAnchorLink",componentId:"sc-1lew8za-1"})(["color:",";text-decoration:none;transition:all 0.5s;:hover{color:white;}font-weight:200;font-style:normal;"],l.P5),w=r.default.div.withConfig({displayName:"panels__PanelMenu",componentId:"sc-1lew8za-2"})(["p{margin-bottom:0.4em;}@media ","{display:grid;grid-template-columns:repeat(2,1fr);column-gap:1.2em;grid-template-rows:repeat(4,1fr);grid-auto-flow:column;p{margin:0;}};"],o.H.laptopMin),b=r.default.div.withConfig({displayName:"panels__TopDiv",componentId:"sc-1lew8za-3"})(["> p:first-child{margin-bottom:1em;}@media ","{display:flex;flex-direction:row;justify-content:space-between;> p:first-child{max-width:60%;font-size:1em;margin-bottom:0;}};"],o.H.laptopMin),E=r.default.div.withConfig({displayName:"panels__BottmDiv",componentId:"sc-1lew8za-4"})(["display:flex;flex-direction:row;justify-content:space-between;margin-top:1em;position:relative;@media ","{margin-top:4em;position:relative;};"],o.H.laptopMin),k=r.default.div.withConfig({displayName:"panels__PanelHolder",componentId:"sc-1lew8za-5"})(["h3{font-weight:600;}@media ","{margin-left:",";};"],o.H.laptopMin,g),_=r.default.div.withConfig({displayName:"panels__PanelItem",componentId:"sc-1lew8za-6"})(["margin-bottom:1em;> p:first-of-type{margin-top:0.2em;margin-bottom:0.8em;color:",";font-weight:600;font-style:italic;}@media ","{max-width:80%;h3{font-size:1.5em;}};"],l.P5,o.H.laptopMin),x=r.default.div.withConfig({displayName:"panels__PanelGroup",componentId:"sc-1lew8za-7"})(["margin-bottom:2em;@media ","{margin-bottom:7em;}"],o.H.laptopMin),P=(r.default.div.withConfig({displayName:"panels__ScrollPanelMenu",componentId:"sc-1lew8za-8"})(["display:none;@media ","{display:block;min-width:",";position:fixed;top:20%;p{margin-bottom:0.5em;}};"],o.H.laptopMin,g),function(e){var t=e.data,n=(0,a.useRef)();return(0,a.useEffect)((function(){c.p8.registerPlugin(d.i);var e=c.p8.utils.selector(n)(".group");console.log(e),e.forEach((function(e){c.p8.timeline({scrollTrigger:{trigger:e,toggleActions:"restart none none reset"}}).from(e,{opacity:0,yPercent:-10,duration:1,ease:"power2.easeOut"})}))})),a.createElement(v,null,a.createElement(b,null,a.createElement("p",null,"Our panels will feature invited guests from a diverse range of industries. These thought-leaders will share their expertise about everything from healthcare to cryptocurrency, and the innovations taking place on the African continent. Stay tuned for profiles of our amazing panelists."),a.createElement(w,null,p.map((function(e){return a.createElement(y,{to:"/speakers#"+e.link},a.createElement("p",null,"0"+e.number+" "+e.link))})))),a.createElement(E,{id:"bottomDiv"},a.createElement("div",{ref:n},a.createElement(k,null,p.map((function(e){return a.createElement("div",{className:"group"},a.createElement(x,null,a.createElement(_,{id:e.link},a.createElement("h3",null,"0"+e.number+" "+e.title),a.createElement("p",null,e.name+" Panel"),a.createElement("p",null,e.text)),a.createElement(f.Z,{panelNodes:t[e.link]?t[e.link].nodes:void 0})))}))))))}),I=r.default.section.withConfig({displayName:"speakers__Section",componentId:"sc-liykn5-0"})(["margin-bottom:2em;h1{display:inline;}"]),C=function(e){var t=e.data;return a.createElement(i.Z,{pageTitle:"Speakers + Panels",hideTitle:!0},a.createElement(I,null,a.createElement("h1",null," Keynote Speakers "),a.createElement(u,{data:t})),a.createElement(I,null,a.createElement("h1",null,"Panels"),a.createElement(P,{data:t})))}},2450:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.AnchorLink=m;var i=l(n(7294)),a=n(5444),r=l(n(5697)),o=n(9650);function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){var t=e.to,n=e.title,r=e.children,l=e.className,c=e.stripHash,s=void 0!==c&&c,m=e.gatsbyLinkProps,u=void 0===m?{}:m,p=e.onAnchorLinkClick,h=s?o.handleStrippedLinkClick:o.handleLinkClick,f=d(d({},u),{},{to:s?(0,o.stripHashedLocation)(t):t,onClick:function(e){return h(t,e,p)}});return n&&(f.title=n),l&&(f.className=l),i.default.createElement(a.Link,f,r||n)}m.propTypes={to:r.default.string.isRequired,title:r.default.string,className:r.default.string,stripHash:r.default.bool,gatsbyLinkProps:r.default.object,onAnchorLinkClick:r.default.func,children:r.default.node}},9869:function(e,t,n){Object.defineProperty(t,"P",{enumerable:!0,get:function(){return i.AnchorLink}});var i=n(2450)}}]);
//# sourceMappingURL=component---src-pages-speakers-tsx-fe966774c4e5dbfd5ced.js.map