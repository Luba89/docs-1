"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6200],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93448:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={sidebar_position:18,title:"C8QL Examples"},s=void 0,p={unversionedId:"tutorials/c8ql-examples",id:"tutorials/c8ql-examples",title:"C8QL Examples",description:"Assumptions",source:"@site/docs/tutorials/c8ql-examples.md",sourceDirName:"tutorials",slug:"/tutorials/c8ql-examples",permalink:"/docs/tutorials/c8ql-examples",tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18,title:"C8QL Examples"},sidebar:"tutorialSidebar",previous:{title:"Dynamo Mode",permalink:"/docs/tutorials/dynamo"},next:{title:"Global Address Book",permalink:"/docs/apps/address-book"}},c={},u=[],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Assumptions")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Collection Name (should exist): ",(0,a.kt)("inlineCode",{parentName:"li"},"demo_queries"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Sample Queries")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Insert 10 documents into the ",(0,a.kt)("inlineCode",{parentName:"p"},"demo_queries")," collection, using a bindvar to pass in a name prefix for the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," field of the data in the new documents to be inserted:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'FOR i IN 1..10 \n    INSERT { name: CONCAT(@user_prefix, i), gender: (i % 2 == 0 ? "f" : "m"), likes: ROUND(RAND()*100), follows: ROUND(RAND() * 100) } \n    INTO demo_queries\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"View all the docs in the collection, sorted in ascending order of the document key:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'FOR doc IN demo_queries \n    SORT doc._key \n    RETURN {"Key":doc._key, "Name":doc.name, "Gender":doc.gender, "Likes":doc.likes, "Follows":doc.follows} \n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Update all documents in the ",(0,a.kt)("inlineCode",{parentName:"p"},"demo_queries")," collection. The ",(0,a.kt)("inlineCode",{parentName:"p"},"gender"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"likes")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"follows")," fields are updated with values accepted from the bindvars. If no bindvar values are specified, the fields are blanked. All documents will be updated to have the same value for these fields."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"FOR doc IN demo_queries \n    UPDATE { _key:doc._key, gender:@gender, likes:@likes, follows:@follows} \n    IN demo_queries\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Remove all documents in the ",(0,a.kt)("inlineCode",{parentName:"p"},"demo_queries")," collection. The collection will continue to exist but will be empty."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"FOR doc IN demo_queries \n    REMOVE doc \n    IN demo_queries\n")))))}m.isMDXComponent=!0}}]);