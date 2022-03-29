"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5875],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},27670:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],s={sidebar_position:9},l="Projections and filters",c={unversionedId:"c8ql/examples/projections-and-filters",id:"c8ql/examples/projections-and-filters",title:"Projections and filters",description:"Returning unaltered documents",source:"@site/docs/c8ql/examples/projections-and-filters.md",sourceDirName:"c8ql/examples",slug:"/c8ql/examples/projections-and-filters",permalink:"/docs/c8ql/examples/projections-and-filters",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Multiple Path Search",permalink:"/docs/c8ql/examples/multiple-path-search"},next:{title:"Queries without Collections",permalink:"/docs/c8ql/examples/queries-without-collections"}},u={},p=[{value:"Returning unaltered documents",id:"returning-unaltered-documents",level:2},{value:"Projections",id:"projections",level:2},{value:"Filters",id:"filters",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"projections-and-filters"},"Projections and filters"),(0,i.kt)("h2",{id:"returning-unaltered-documents"},"Returning unaltered documents"),(0,i.kt)("p",null,"To return three complete documents from collection ",(0,i.kt)("inlineCode",{parentName:"p"},"users"),", the following query can be used:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"FOR u IN users \n  LIMIT 0, 3\n  RETURN u\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[ \n  { \n    "_id" : "users/229886047207520", \n    "_rev" : "229886047207520", \n    "_key" : "229886047207520", \n    "active" : true, \n    "id" : 206, \n    "age" : 31, \n    "gender" : "f", \n    "name" : "Abigail" \n  }, \n  { \n    "_id" : "users/229886045175904", \n    "_rev" : "229886045175904", \n    "_key" : "229886045175904", \n    "active" : true, \n    "id" : 101, \n    "age" : 36, \n    "name" : "Fred", \n    "gender" : "m" \n  }, \n  { \n    "_id" : "users/229886047469664", \n    "_rev" : "229886047469664", \n    "_key" : "229886047469664", \n    "active" : true, \n    "id" : 208, \n    "age" : 29, \n    "name" : "Mary", \n    "gender" : "f" \n  }\n]\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"There is a ",(0,i.kt)("inlineCode",{parentName:"p"},"LIMIT")," clause but no ",(0,i.kt)("inlineCode",{parentName:"p"},"SORT")," clause. In this case it is not guaranteed which of the user documents are returned. Effectively the document return order is unspecified if no ",(0,i.kt)("inlineCode",{parentName:"p"},"SORT")," clause is used, and you should not rely on the order in such queries."))),(0,i.kt)("h2",{id:"projections"},"Projections"),(0,i.kt)("p",null,"To return a projection from the collection ",(0,i.kt)("inlineCode",{parentName:"p"},"users")," use a modified ",(0,i.kt)("inlineCode",{parentName:"p"},"RETURN")," instruction:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'FOR u IN users \n  LIMIT 0, 3\n  RETURN { \n    "user" : { \n      "isActive" : u.active ? "yes" : "no", \n      "name" : u.name \n    } \n  }\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[ \n  { \n    "user" : { \n      "isActive" : "yes", \n      "name" : "John" \n    } \n  }, \n  { \n    "user" : { \n      "isActive" : "yes", \n      "name" : "Anthony" \n    } \n  }, \n  { \n    "user" : { \n      "isActive" : "yes", \n      "name" : "Fred" \n    } \n  }\n]\n')),(0,i.kt)("h2",{id:"filters"},"Filters"),(0,i.kt)("p",null,"To return a filtered projection from collection ",(0,i.kt)("inlineCode",{parentName:"p"},"users"),", you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"FILTER")," keyword. Additionally, a ",(0,i.kt)("inlineCode",{parentName:"p"},"SORT")," clause is used to have the result returned in a specific order:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'FOR u IN users \n  FILTER u.active == true && u.age >= 30\n  SORT u.age DESC\n  LIMIT 0, 5\n  RETURN { \n    "age" : u.age, \n    "name" : u.name \n  }\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[ \n  { \n    "age" : 37, \n      "name" : "Sophia" \n  }, \n  { \n    "age" : 37, \n    "name" : "John" \n  }, \n  { \n    "age" : 36, \n    "name" : "Emma" \n  }, \n  { \n    "age" : 36, \n    "name" : "Fred" \n  }, \n  { \n    "age" : 34, \n    "name" : "Madison" \n  } \n]\n')))}m.isMDXComponent=!0}}]);