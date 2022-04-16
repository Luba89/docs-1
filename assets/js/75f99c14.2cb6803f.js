"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4824],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),p=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=p(a),d=r,y=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(y,l(l({ref:e},c),{},{components:a})):n.createElement(y,l({ref:e},c))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=u;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:r,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},18712:function(t,e,a){a.r(e),a.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=["components"],s={sidebar_position:4,title:"Realtime Log Analytics"},i=void 0,p={unversionedId:"apps/realtime-log-analytics",id:"apps/realtime-log-analytics",title:"Realtime Log Analytics",description:"Realtime Log Analytics integrating logs from Fastly with Macrometa GDN to monitor the status and activity of Stream workers and Query workers. Fastly provides data about HTTP latency, response count, response size, and unique visitor traffic.",source:"@site/docs/apps/realtime-log-analytics.md",sourceDirName:"apps",slug:"/apps/realtime-log-analytics",permalink:"/docs/apps/realtime-log-analytics",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Realtime Log Analytics"},sidebar:"tutorialSidebar",previous:{title:"OTT App",permalink:"/docs/apps/ott-app"},next:{title:"PostHog Analytics Integration",permalink:"/docs/apps/posthog"}},c={},m=[{value:"Setup",id:"setup",level:2},{value:"Solution",id:"solution",level:2}],u={toc:m};function d(t){var e=t.components,a=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Realtime Log Analytics integrating logs from Fastly with Macrometa GDN to monitor the status and activity of Stream workers and Query workers. Fastly provides data about HTTP latency, response count, response size, and unique visitor traffic."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Federation")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Email")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Passsword")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Dashboard")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://gdn.paas.macrometa.io/"},"Global Data Network")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"mailto:demo-fastly-realtime-logs@macrometa.io"},"demo-fastly-realtime-logs@macrometa.io")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"xxxxxxxx")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://macrometacorp.github.io/demo-fastly-jsc8-realtime-logs"},"Dashboard"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://manage.fastly.com"},"Fastly Account")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"mailto:demo@macrometa.com"},"demo@macrometa.com")),(0,o.kt)("td",{parentName:"tr",align:null},"--"),(0,o.kt)("td",{parentName:"tr",align:null},"--")))),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create and publish the following Stream Workers in your GDN account:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"fastly-log-generator\nfastly-http-request-worker\nfastly-http-request-stats-1m-worker\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Create the following Query workers in your GDN account:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"fastlyGetTopUrl\nfastlyGetStatusCodeRatio\nfastlyGetStatsByCollection\nfastlyGetTopErrorByUrlPath\nfastlyGetUniqueVisitorsByCountry\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Query Workers")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Create the following collections in your GDN account:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastly_users (global)\nfastly_logs (global)\nfastly_http_url_stats_1m (global)\nfastly_http_response_code_stats_1m (global)\nfastly_http_response_latency_stats_1m (global)\nfastly_http_error_response_code_stats_1m (global)\nfasty_unique_visitor_by_country_stats_1m (global)\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"On the development machine, run the following commands in a console:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"1. git clone git@github.com:Macrometacorp/demo-fastly-jsc8-realtime-logs.git\n2. cd fastly-edgeworker-log-analytics\n3. git fetch\n4. npm install\n5. npm run start\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sample Log Format:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "timestamp": "2021-09-02T14:44:31+0000",\n  "request_method": "POST",\n  "response_status": 400,\n  "url": "/collections/query",\n  "response_body_size": 134,\n  "time_elapsed": 16,\n  "geo_country": "india",\n  "client_ip": "172.105.56.148"\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"GitHub")," - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Macrometacorp/demo-fastly-jsc8-realtime-logs"},"https://github.com/Macrometacorp/demo-fastly-jsc8-realtime-logs")))}d.isMDXComponent=!0}}]);