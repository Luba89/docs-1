"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4406],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},47927:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={sidebar_position:8,title:"Credits & Acknowledgements"},p=void 0,l={unversionedId:"essentials/Credits",id:"essentials/Credits",title:"Credits & Acknowledgements",description:"Building something as audacious as Macrometa\u2019s GDN cloud would not have been possible without the extraordinary contributions of many people. We are deeply indebted to the following people for the extraordinary body of research work and publications that have enabled us to build Macrometa.",source:"@site/docs/essentials/Credits.md",sourceDirName:"essentials",slug:"/essentials/Credits",permalink:"/docs/essentials/Credits",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Credits & Acknowledgements"},sidebar:"tutorialSidebar",previous:{title:"Commands",permalink:"/docs/essentials/CLI/commands"},next:{title:"Quickstart",permalink:"/docs/collections/keyvalue/quickstart"}},c={},u=[{value:"Conflict Free Replicated Data Types (CRDTs)",id:"conflict-free-replicated-data-types-crdts",level:2},{value:"Open Sources",id:"open-sources",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Building something as audacious as Macrometa\u2019s GDN cloud would not have been possible without the extraordinary contributions of many people. We are deeply indebted to the following people for the extraordinary body of research work and publications that have enabled us to build Macrometa."),(0,o.kt)("h2",{id:"conflict-free-replicated-data-types-crdts"},"Conflict Free Replicated Data Types (CRDTs)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Christopher Meiklejohn")," - Christopher is consulting scientist for Macrometa. Christopher\u2019s research into state and operational Conflict Free Replicated Data Types & implementations such as LASP, Partisan and work on AntidoteDB, enabled us to bring the best ideas from CRDTs to our vision for a geo distributed database. In addition, Chris is just one of the most humble and great people we have had the good fortune of collaborating with.\n",(0,o.kt)("a",{parentName:"p",href:"http://christophermeiklejohn.com"},"http://christophermeiklejohn.com")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Marc Shapiro"),"\u2019s research at INRIA, France lead to the creation of CRDTs, Strong Eventual Consistency, and its applications in wide area and disconnected applications. His papers and videos helped us several years back with our initial investigation of replicated data types. ",(0,o.kt)("a",{parentName:"p",href:"https://dl.acm.org/author_page.cfm?id=81100431017"},"https://dl.acm.org/author_page.cfm?id=81100431017")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Carlos Baquero"),"\u2019s \u201cPure Operation-Based Replicated Data Types\u201d paper enabled us to think about the right approach to multi master replication and causal broadcast.\n",(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/1710.04469.pdf"},"https://arxiv.org/pdf/1710.04469.pdf")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Martin Klepmann"),"\u2019s ground breaking book \u201cDesigning Data-Intensive Applications\u201d opened up many exciting approaches and techniques for us to consider when building our geo-distributed cloud service at scale. We continues to source inspiration from his work, presentations and papers on streams and consistency.\n",(0,o.kt)("a",{parentName:"p",href:"http://dataintensive.net/"},"http://dataintensive.net/")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Leslie Lamport")," invented Latex, but even more importantly gave the world a way to think about time keeping that results in correctness, performance and reliability in geo distributed systems. His paper \u201cTime, Clocks, and the Ordering of Events in a Distributed System\u201d helped us create our logical clock and causal ordering implementations.\n",(0,o.kt)("a",{parentName:"p",href:"https://lamport.azurewebsites.net/pubs/time-clocks.pdf"},"https://lamport.azurewebsites.net/pubs/time-clocks.pdf")),(0,o.kt)("h2",{id:"open-sources"},"Open Sources"),(0,o.kt)("p",null,"We leverage following open sources in our geo-distributed platform. "),(0,o.kt)("p",null,"Macrometa utilizes ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/arangodb/arangodb"},(0,o.kt)("strong",{parentName:"a"},"ArangoDB"))," query engine and AQL syntax as the foundation for our database query functionality. "),(0,o.kt)("p",null,"Macrometa utilizes ",(0,o.kt)("a",{parentName:"p",href:"https://siddhi.io/"},(0,o.kt)("strong",{parentName:"a"},"Apache Siddhi"))," library internally for pipelines processing, ",(0,o.kt)("a",{parentName:"p",href:"http://bookkeeper.apache.org/"},(0,o.kt)("strong",{parentName:"a"},"Apache Bookkeeper"))," & ",(0,o.kt)("a",{parentName:"p",href:"http://zookeeper.apache.org/"},(0,o.kt)("strong",{parentName:"a"},"ZooKeeper"))," for low-latency append-only log optimized for real-time messaging."))}m.isMDXComponent=!0}}]);