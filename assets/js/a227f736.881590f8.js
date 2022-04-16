"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4580],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3155:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],s={sidebar_position:8,title:"LET"},l=void 0,u={unversionedId:"c8ql/operations/let",id:"c8ql/operations/let",title:"LET",description:"The LET statement can be used to assign an arbitrary value to a variable. The variable is then introduced in the scope the LET statement is placed in.",source:"@site/docs/c8ql/operations/let.md",sourceDirName:"c8ql/operations",slug:"/c8ql/operations/let",permalink:"/docs/c8ql/operations/let",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"LET"},sidebar:"tutorialSidebar",previous:{title:"LIMIT",permalink:"/docs/c8ql/operations/limit"},next:{title:"COLLECT",permalink:"/docs/c8ql/operations/collect"}},c={},p=[],m={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"LET")," statement can be used to assign an arbitrary value to a variable. The variable is then introduced in the scope the ",(0,o.kt)("inlineCode",{parentName:"p"},"LET")," statement is placed in."),(0,o.kt)("p",null,"The general syntax is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"LET variableName = expression\n")),(0,o.kt)("p",null,"Variables are immutable in C8QL, which means they can not be re-assigned:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"LET a = [1, 2, 3]  // initial assignment\n\na = PUSH(a, 4)     // syntax error, unexpected identifier\nLET a = PUSH(a, 4) // parsing error, variable 'a' is assigned multiple times\nLET b = PUSH(a, 4) // allowed, result: [1, 2, 3, 4]\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"LET")," statements are mostly used to declare complex computations and to avoid repeated computations of the same value at multiple parts of a query."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'FOR u IN users\n  LET numRecommendations = LENGTH(u.recommendations)\n  RETURN { \n    "user" : u, \n    "numRecommendations" : numRecommendations, \n    "isPowerUser" : numRecommendations >= 10 \n  } \n')),(0,o.kt)("p",null,"In the above example, the computation of the number of recommendations is factored out using a ",(0,o.kt)("inlineCode",{parentName:"p"},"LET")," statement, thus avoiding computing the value twice in the ",(0,o.kt)("inlineCode",{parentName:"p"},"RETURN")," statement."),(0,o.kt)("p",null,"Another use case for ",(0,o.kt)("inlineCode",{parentName:"p"},"LET")," is to declare a complex computation in a subquery, making the whole query more readable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'FOR u IN users\n  LET friends = (\n  FOR f IN friends \n    FILTER u.id == f.userId\n    RETURN f\n  )\n  LET memberships = (\n  FOR m IN memberships\n    FILTER u.id == m.userId\n      RETURN m\n  )\n  RETURN { \n    "user" : u, \n    "friends" : friends, \n    "numFriends" : LENGTH(friends), \n    "memberShips" : memberships \n  }\n')))}d.isMDXComponent=!0}}]);