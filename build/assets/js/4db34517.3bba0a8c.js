"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1440],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80601:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],c={sidebar_position:15},s="Working with Macrometa GDN and Cloudflare Workers",l={unversionedId:"demos/cloudflare-workers",id:"demos/cloudflare-workers",title:"Working with Macrometa GDN and Cloudflare Workers",description:"This brief tutorial will show you have to authenticate to the GDN using it's REST API and Cloudflare workers. It will then create a collection!",source:"@site/docs/demos/cloudflare-workers.md",sourceDirName:"demos",slug:"/demos/cloudflare-workers",permalink:"/docs/demos/cloudflare-workers",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Polling App",permalink:"/docs/demos/jamstack-gatsby"},next:{title:"ToDo App using CF Workers & Macrometa GDN",permalink:"/docs/demos/todo-app-cfworkers"}},u={},p=[{value:"Auth and create first collection:",id:"auth-and-create-first-collection",level:2},{value:"Response to collection creation:",id:"response-to-collection-creation",level:3}],d={toc:p};function f(e){var t=e.components,c=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"working-with-macrometa-gdn-and-cloudflare-workers"},"Working with Macrometa GDN and Cloudflare Workers"),(0,a.kt)("p",null,"This brief tutorial will show you have to authenticate to the GDN using it's REST API and Cloudflare workers. It will then create a collection! "),(0,a.kt)("h2",{id:"auth-and-create-first-collection"},"Auth and create first collection:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const macrometaHost = "https://api-gdn.paas.macrometa.io"\nconst authEndpoint = macrometaHost + "/_open/auth"\nconst collectionEndpoint = macrometaHost + "/_fabric/_system/_api/collection"\nconst type = "application/json;charset=UTF-8"\nconst authInfo = {\n  "email": "captian@nemo.com",\n  "password": "<P@55w0rd>",\n  "tenant": "captian_nemo.com",\n  "username": "root"\n}\n\nconst newCollection = {\n  "name": "mySecondCollection"\n  }\nconst getOptions = (requestBody,token) => ({\nmethod:\'POST\',\nbody:JSON.stringify(requestBody),\nheaders: { authorization:token,\n       "content-type": type\n        },\n});\n\nasync function handleRequest() { \n  const jwtRequest = await fetch(authEndpoint,getOptions(authInfo,""))\n  const jwtResponse = await jwtRequest.json();\n  const jwtToken=`bearer ${jwtResponse.jwt}`\n\n  const collectionRequest = await fetch(collectionEndpoint,getOptions(newCollection,jwtToken))\n  const collectionResponse = await collectionRequest.json()\n  return new Response(JSON.stringify(collectionResponse))\n}\n\naddEventListener("fetch", event => {\n  return event.respondWith(handleRequest())\n})\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Workers",src:n(56102).Z,width:"1909",height:"863"})),(0,a.kt)("h3",{id:"response-to-collection-creation"},"Response to collection creation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error":false,\n    "code":200,\n    "type":2,\n    "searchEnabled":false,\n    "name":"myFirstCollection",\n    "isSystem":false,\n    "collectionModel":"DOC",\n    "waitForSync":false,\n    "objectId":"550803885",\n    "cacheEnabled":false,\n    "keyOptions":{"allowUserKeys":true,"type":"traditional","lastValue":0},\n    "globallyUniqueId":"hEF7A96BFCCB/550803886",\n    "statusString":"loaded",\n    "id":"550803886",\n    "isLocal":false,\n    "status":3,\n    "isSpot":false\n}\n')),(0,a.kt)("p",null,"Now you have a collection created, you can check it out in the Macrometa console under the collections tab."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Bookstore",src:n(42587).Z,width:"1785",height:"725"})),(0,a.kt)("p",null,"If you'd like to learn more about the Macrometa service, head over to ",(0,a.kt)("a",{parentName:"p",href:"https://macrometa.dev/essentials/"},"Essentials")," section to get acquainted with the entire platform."))}f.isMDXComponent=!0},42587:function(e,t,n){t.Z=n.p+"assets/images/first-collection-1b18f08582d957a22239ab9a28e79f49.png"},56102:function(e,t,n){t.Z=n.p+"assets/images/worker-console-3b956d8ee01a23efdb87f57305705d44.png"}}]);