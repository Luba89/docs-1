"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5508],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6582:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={sidebar_position:1,title:"Overview"},l=void 0,c={unversionedId:"search/Overview",id:"search/Overview",title:"Overview",description:"Macrometa GDN Search (or C8Search) is a full-text search engine that supports key values, documents, and graphs as data models. Compared to a a full-text index C8Search is more configurable and customizable, combining Boolean and generalized ranking retrieval techniques to refine your search results. All Boolean-approved results are ranked by relevance to the respective query using the Vector Space Model in conjunction with BM25 or TF-IDF weighting schemes.",source:"@site/docs/search/Overview.md",sourceDirName:"search",slug:"/search/Overview",permalink:"/docs/search/Overview",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Using Rest API",permalink:"/docs/collections/graphs/tutorials/using_rest_api"},next:{title:"Views",permalink:"/docs/search/Views"}},u={},p=[],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Macrometa GDN Search (or ",(0,i.kt)("em",{parentName:"p"},"C8Search"),") is a full-text search engine that supports key values, documents, and graphs as data models. Compared to a a ",(0,i.kt)("a",{parentName:"p",href:"../collections/documents/indexing/working-with-indexes#fulltext-indexes"},"full-text index")," C8Search is more configurable and customizable, combining Boolean and generalized ranking retrieval techniques to refine your search results. All Boolean-approved results are ranked by relevance to the respective query using the Vector Space Model in conjunction with BM25 or TF-IDF weighting schemes."),(0,i.kt)("p",null,"C8Search provides the following capabilities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Complex searches with Boolean operators"),(0,i.kt)("li",{parentName:"ul"},"Relevance-based matching"),(0,i.kt)("li",{parentName:"ul"},"Phrase and prefix matching"),(0,i.kt)("li",{parentName:"ul"},"Custom ranking and relevance tuning"),(0,i.kt)("li",{parentName:"ul"},"Configurable analyzers and tokenization"),(0,i.kt)("li",{parentName:"ul"},"Retrieval of both documents and projections of documents"),(0,i.kt)("li",{parentName:"ul"},"Combinable search queries with multiple supported data models & access patterns"),(0,i.kt)("li",{parentName:"ul"},"Geo-replicated search indexes for instant results")),(0,i.kt)("p",null,"We provide ",(0,i.kt)("em",{parentName:"p"},"Views")," and ",(0,i.kt)("em",{parentName:"p"},"Analyzers")," that boost the efficiency of your search queries:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("a",{parentName:"li",href:"../../docs/Search/Views"},"View")," is a virtual collection that provides fast full-text searching over multiple linked collections."),(0,i.kt)("li",{parentName:"ul"},"An ",(0,i.kt)("a",{parentName:"li",href:"../../docs/Search/Analyzers"},"Analyzer")," parses input values and transforms them into sets of sub-values for the following use cases:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Tokenization (splitting text into words and normalizing them)."),(0,i.kt)("li",{parentName:"ul"},"Language-specific word stemming."),(0,i.kt)("li",{parentName:"ul"},"Case conversion."),(0,i.kt)("li",{parentName:"ul"},"Removal of diacritical (accent) marks.")))),(0,i.kt)("p",null,"C8Search features are integrated into C8QL as a SEARCH operation and a set of C8QL functions. Some use cases include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Perform federated full-text searches over product descriptions in a web shop with product documents stored in collections."),(0,i.kt)("li",{parentName:"ul"},"Retrieve information in a research database and rank it by relevance based on term frequency (TF-IDF) using case and accent insensitive stemmed phrases with irrelevant terms filtered out."),(0,i.kt)("li",{parentName:"ul"},"Query a data set of movies for titles with words in a particular order and optional wild cards. Sort the results by best matching (BM25) but favor movies with longer duration.")))}m.isMDXComponent=!0}}]);