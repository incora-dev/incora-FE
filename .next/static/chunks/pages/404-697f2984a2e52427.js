(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{7138:function(e,t,n){"use strict";n.d(t,{Z:function(){return a},R:function(){return o}});n(6086),[40,52,64].map((function(e){return e+"em"}));var r=function(e,t,n,r,o){for(t=t&&t.split?t.split("."):[t],r=0;r<t.length;r++)e=e?e[t[r]]:o;return e===o?n:e},o=function(e,t){return void 0===t&&(t=null),function(n){return r(n.theme,e,t)}},a=o},8e3:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},5646:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(8e3);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},2717:function(e,t,n){"use strict";var r=n(1682);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=d,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),s=(a=n(1585))&&a.__esModule?a:{default:a},c=n(8e3),l=n(5850),p=n(5646);function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var s=o.key.slice(o.key.indexOf("$")+1);e.has(s)?a=!1:e.add(s)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,l=f.length;c<l;c++){var p=f[c];if(o.props.hasOwnProperty(p))if("charSet"===p)n.has(p)?a=!1:n.add(p);else{var d=o.props[p],u=r[p]||new Set;"name"===p&&i||!u.has(d)?(u.add(d),r[p]=u):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,i.default.cloneElement(e,s)}return i.default.cloneElement(e,{key:a})}))}var m=function(e){var t=e.children,n=i.useContext(c.AmpStateContext),r=i.useContext(l.HeadManagerContext);return i.default.createElement(s.default,{reduceComponentsToState:h,headManager:r,inAmpMode:p.isInAmpMode(n)},t)};t.default=m},1585:function(e,t,n){"use strict";var r=n(3115),o=n(2553),a=n(2012),i=(n(450),n(9807)),s=n(7690),c=n(9828);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294));var d=function(e){i(n,e);var t=l(n);function n(e){var a;return o(this,n),(a=t.call(this,e)).emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(p.Component);t.default=d},6652:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return H}});var r,o,a,i,s,c,l,p,d=n(9008),u=(n(348),n(2308)),f=n(4575),h=n(979),m=n(8015),y=n(7049),v=n(3877),x=n(1096),g=n(7138),_=x.ZP.div.withConfig({displayName:"Header404style__Div",componentId:"sc-1c34sxm-0"})(["overflow:hidden;background-color:",";@media only screen and (max-width:","){height:calc(100vh - 374px);min-height:500px;}@media only screen and (max-width:","){height:calc(100vh - 328px);min-height:500px;}@media only screen and (max-width:","){height:auto;}"],(0,g.Z)("colors.black"),(0,g.Z)("breakpoints.tabletPro"),(0,g.Z)("breakpoints.tablet"),(0,g.Z)("breakpoints.sTablet")),b=x.ZP.div.withConfig({displayName:"Header404style__Wrapper",componentId:"sc-1c34sxm-1"})(["max-width:1006px;margin:0 auto;padding:181px 0 237px;@media only screen and (max-width:","){padding:181px 25px 237px;}@media only screen and (max-width:","){width:100%;padding:70px 15px 99px;}"],(0,g.Z)("breakpoints.tablet"),(0,g.Z)("breakpoints.mobile")),w=x.ZP.div.withConfig({displayName:"Header404style__MainBlock",componentId:"sc-1c34sxm-2"})(["position:relative;right:-11px;display:flex;flex-direction:column;row-gap:68px;@media only screen and (max-width:","){row-gap:0;right:0;}"],(0,g.Z)("breakpoints.mobile")),O=x.ZP.div.withConfig({displayName:"Header404style__IconBlock",componentId:"sc-1c34sxm-3"})(["width:max-content;@media only screen and (max-width:","){transform:scale(0.6);position:relative;left:-97px;}"],(0,g.Z)("breakpoints.mobile")),C=x.ZP.div.withConfig({displayName:"Header404style__TextBlock",componentId:"sc-1c34sxm-4"})(["margin-left:24px;@media only screen and (max-width:","){margin-left:0;}"],(0,g.Z)("breakpoints.tablet")),E=x.ZP.p.withConfig({displayName:"Header404style__Text",componentId:"sc-1c34sxm-5"})(["width:max-content;position:relative;z-index:1;font-style:normal;font-weight:bold;font-size:var(--fs-16);line-height:30px;letter-spacing:0.1em;color:",";@media only screen and (max-width:","){font-size:var(--fs-14);}span{cursor:pointer;}&:before{position:absolute;bottom:7px;right:-6px;width:79px;height:10px;z-index:-1;content:'';background-color:",";}&:after{position:absolute;bottom:7px;right:-6px;z-index:-1;width:0;height:10px;content:'';background-color:",";transition:width ",";@media only screen and (max-width:","){right:-5px;width:73px;height:6px;}}&:hover:after{width:79px;}"],(0,g.Z)("colors.white"),(0,g.Z)("breakpoints.mobile"),(0,g.Z)("colors.yellow"),(0,g.Z)("colors.yellow5"),(0,g.Z)("transition.button"),(0,g.Z)("breakpoints.mobile")),j=n(7294);function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var M=function(e){return j.createElement("svg",k({width:481,height:172,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),j.createElement("g",{clipPath:"url(#404_svg__a)"},r||(r=j.createElement("path",{d:"M182 172c35.899 0 65-28.654 65-64 0-35.346-29.101-64-65-64s-65 28.654-65 64c0 35.346 29.101 64 65 64Z",fill:"url(#404_svg__b)"})),o||(o=j.createElement("path",{transform:"rotate(90 420 125)",fill:"url(#404_svg__c)",d:"M420 125h47v103h-47z"})),a||(a=j.createElement("path",{d:"M.73 144.4v-37.26L71.34 6.4h49.45v98.9h17.71v39.1h-17.71V172H75.25v-27.6H.73ZM78.7 57.23 46.96 105.3H78.7V57.23ZM173.094 85.52c0-26.373 5.367-47.15 16.1-62.33s27.6-22.77 50.6-22.77 39.867 7.59 50.6 22.77c10.887 15.18 16.33 35.957 16.33 62.33 0 26.68-5.367 47.61-16.1 62.79s-27.677 22.77-50.83 22.77-40.097-7.59-50.83-22.77c-10.58-15.18-15.87-36.11-15.87-62.79Zm89.01 0c0-13.8-1.457-24.303-4.37-31.51-2.913-7.36-8.893-11.04-17.94-11.04s-15.027 3.68-17.94 11.04c-2.913 7.207-4.37 17.71-4.37 31.51 0 14.107 1.38 24.84 4.14 32.2 2.913 7.207 8.97 10.81 18.17 10.81 9.2 0 15.18-3.603 17.94-10.81 2.913-7.36 4.37-18.093 4.37-32.2ZM343.116 144.4v-37.26L413.726 6.4h49.45v98.9h17.71v39.1h-17.71V172h-45.54v-27.6h-74.52Zm77.97-87.17-31.74 48.07h31.74V57.23Z",fill:"#2B2B30"})),j.createElement("mask",{id:"404_svg__d",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:217,y:4,width:148,height:125},i||(i=j.createElement("path",{d:"M239.794 42.97c9.047 0 54.293-44.83 57.206-37.47 93.5 7 66.527 41.74 56 64.5-3.552 7.68-90.896 12.038-90.896 15.52 0 14.107-1.456 24.84-4.37 32.2-2.76 7.207-8.74 10.81-17.94 10.81-9.2 0-15.256-3.603-18.17-10.81-2.76-7.36-4.14-18.093-4.14-32.2 0-13.8 1.457-24.303 4.37-31.51 2.914-7.36 8.894-11.04 17.94-11.04Z",fill:"#2B2B30"}))),s||(s=j.createElement("g",{mask:"url(#404_svg__d)"},j.createElement("path",{d:"m260.996 169.811 19.327-27.504a52.517 52.517 0 0 1-11.634-72.352 52.514 52.514 0 0 1 72.015-13.554l19.327-27.504a86.138 86.138 0 0 0-118.874 21.752 86.161 86.161 0 0 0 19.839 119.162Z",fill:"url(#404_svg__e)"}))),c||(c=j.createElement("path",{d:"m136.568 138.965-19.763-18.084a41.853 41.853 0 0 1-58.37 1.806 41.848 41.848 0 0 1-3.359-58.3L35.313 46.301a68.647 68.647 0 0 0 5.051 96.173 68.66 68.66 0 0 0 96.204-3.51Z",fill:"url(#404_svg__f)"})),l||(l=j.createElement("path",{d:"M421 42v63h-64c0-16.709 6.743-32.733 18.745-44.548C387.748 48.638 404.026 42 421 42Z",fill:"url(#404_svg__g)"}))),p||(p=j.createElement("defs",null,j.createElement("linearGradient",{id:"404_svg__b",x1:182,y1:-7,x2:182,y2:135.5,gradientUnits:"userSpaceOnUse"},j.createElement("stop",{stopColor:"#FEC506"}),j.createElement("stop",{offset:1,stopColor:"#FEC506",stopOpacity:.2})),j.createElement("linearGradient",{id:"404_svg__c",x1:443.5,y1:60.5,x2:443.5,y2:236,gradientUnits:"userSpaceOnUse"},j.createElement("stop",{stopColor:"#FEC506"}),j.createElement("stop",{offset:1,stopColor:"#FEC506",stopOpacity:0})),j.createElement("linearGradient",{id:"404_svg__e",x1:287.85,y1:43.412,x2:279.928,y2:160.974,gradientUnits:"userSpaceOnUse"},j.createElement("stop",{stopColor:"#FEC506"}),j.createElement("stop",{offset:1,stopColor:"#FEC506",stopOpacity:0})),j.createElement("linearGradient",{id:"404_svg__f",x1:134.845,y1:100.133,x2:3.944,y2:81.445,gradientUnits:"userSpaceOnUse"},j.createElement("stop",{offset:.292,stopColor:"#FEC506"}),j.createElement("stop",{offset:1,stopColor:"#FEC506",stopOpacity:0})),j.createElement("linearGradient",{id:"404_svg__g",x1:359.465,y1:105.002,x2:418.139,y2:47.931,gradientUnits:"userSpaceOnUse"},j.createElement("stop",{stopColor:"#FEC506"}),j.createElement("stop",{offset:1,stopColor:"#FEC506",stopOpacity:0})),j.createElement("clipPath",{id:"404_svg__a"},j.createElement("path",{fill:"#fff",transform:"translate(.73 .42)",d:"M0 0h480.156v171.58H0z"})))))},Z=n(5893),P=function(){return(0,Z.jsx)(_,{children:(0,Z.jsx)(b,{children:(0,Z.jsxs)(w,{children:[(0,Z.jsx)(O,{children:(0,Z.jsx)(M,{})}),(0,Z.jsx)(C,{children:(0,Z.jsxs)(E,{children:["Something\u2019s missing.",(0,Z.jsx)("span",{onClick:function(){return history.back()},children:" Go back"})]})})]})})})},S=["Services","Expertise","Case Studies","Company","Insights","Contact Us"];m.Z,y.Z,v.Z;var H=function(){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(d.default,{children:[(0,Z.jsx)("title",{children:"Create Next App"}),(0,Z.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,Z.jsx)("link",{rel:"icon",href:"/favicon.ico"})]})}),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(u.Z,{backgroundColor:f.r.colors.black,titlesColor:f.r.colors.white,titles:S,children:(0,Z.jsx)(P,{})}),(0,Z.jsx)(h.Z,{})]})]})}},9014:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n(6652)}])},9008:function(e,t,n){e.exports=n(2717)},8164:function(e,t,n){var r=n(4360);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},3115:function(e,t,n){var r=n(8164),o=n(7381),a=n(3585),i=n(5725);e.exports=function(e){return r(e)||o(e)||a(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0}},function(e){e.O(0,[604,774,888,179],(function(){return t=9014,e(e.s=t);var t}));var t=e.O();_N_E=t}]);