"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6092],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33163:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={sidebar_position:8,title:"Fulltext Functions"},p=void 0,s={unversionedId:"c8ql/functions/fulltext",id:"c8ql/functions/fulltext",title:"Fulltext Functions",description:"C8QL offers the following functions to filter data based on fulltext indexes.",source:"@site/docs/c8ql/functions/fulltext.md",sourceDirName:"c8ql/functions",slug:"/c8ql/functions/fulltext",permalink:"/docs/c8ql/functions/fulltext",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Fulltext Functions"},sidebar:"tutorialSidebar",previous:{title:"Geo Functions",permalink:"/docs/c8ql/functions/geo"},next:{title:"Search Functions",permalink:"/docs/c8ql/functions/search"}},c={},m=[{value:"FULLTEXT()",id:"fulltext",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"C8QL offers the following functions to filter data based on ",(0,i.kt)("a",{parentName:"p",href:"../../collections/documents/indexing/working-with-indexes#fulltext"},"fulltext indexes"),"."),(0,i.kt)("h2",{id:"fulltext"},"FULLTEXT()"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"FULLTEXT(coll, attribute, query, limit) \u2192 docArray")),(0,i.kt)("p",null,"Return all documents from collection ",(0,i.kt)("em",{parentName:"p"},"coll"),", for which the attribute ",(0,i.kt)("em",{parentName:"p"},"attribute")," matches the fulltext search phrase ",(0,i.kt)("em",{parentName:"p"},"query"),", optionally capped to ",(0,i.kt)("em",{parentName:"p"},"limit")," results."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"FULLTEXT()")," function requires the collection ",(0,i.kt)("em",{parentName:"p"},"coll")," to have a fulltext index on ",(0,i.kt)("em",{parentName:"p"},"attribute"),". If no fulltext index is available, this function will fail with an error at runtime. It doesn't fail when explaining the query however."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"coll")," (collection): a collection"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"attribute")," (string): the attribute name of the attribute to search in"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"query")," (string): a fulltext search expression as described below"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"limit")," (number, ",(0,i.kt)("em",{parentName:"li"},"optional"),"): if set to a non-zero value, it will cap the result to at most this number of documents"),(0,i.kt)("li",{parentName:"ul"},"returns ",(0,i.kt)("strong",{parentName:"li"},"docArray")," (array): an array of documents")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"FULLTEXT()")," is not meant to be used as an argument to ",(0,i.kt)("inlineCode",{parentName:"p"},"FILTER"),", but rather to be used as the expression of a ",(0,i.kt)("inlineCode",{parentName:"p"},"FOR")," statement:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'FOR oneMail IN FULLTEXT(emails, "body", "banana,-apple")\n    RETURN oneMail._id\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"query")," is a comma-separated list of sought words (or prefixes of sought words). To distinguish between prefix searches and complete-match searches, each word can optionally be prefixed with either the ",(0,i.kt)("inlineCode",{parentName:"p"},"prefix:")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"complete:")," qualifier. Different qualifiers can be mixed in the same query. Not specifying a qualifier for a search word will implicitly execute a complete-match search for the given word:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'FULLTEXT(emails, "body", "banana")'),(0,i.kt)("br",null)," Will look for the word ",(0,i.kt)("em",{parentName:"p"},"banana")," in the attribute ",(0,i.kt)("em",{parentName:"p"},"body")," of the collection ",(0,i.kt)("em",{parentName:"p"},"collection"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'FULLTEXT(emails, "body", "banana,orange")'),(0,i.kt)("br",null)," Will look for both words ",(0,i.kt)("em",{parentName:"p"},"banana")," and ",(0,i.kt)("em",{parentName:"p"},"orange")," in the mentioned attribute. Only those documents will be returned that contain both words.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'FULLTEXT(emails, "body", "prefix:head")'),(0,i.kt)("br",null)," Will look for documents that contain any words starting with the prefix ",(0,i.kt)("em",{parentName:"p"},"head"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'FULLTEXT(emails, "body", "prefix:head,complete:aspirin")'),(0,i.kt)("br",null)," Will look for all documents that contain a word starting with the prefix ",(0,i.kt)("em",{parentName:"p"},"head")," and that also contain the (complete) word ",(0,i.kt)("em",{parentName:"p"},"aspirin"),". Note: specifying ",(0,i.kt)("inlineCode",{parentName:"p"},"complete:")," is optional here.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'FULLTEXT(emails, "body", "prefix:cent,prefix:subst")'),(0,i.kt)("br",null)," Will look for all documents that contain a word starting with the prefix ",(0,i.kt)("em",{parentName:"p"},"cent")," and that also contain a word starting with the prefix ",(0,i.kt)("em",{parentName:"p"},"subst"),"."))),(0,i.kt)("p",null,"If multiple search words (or prefixes) are given, then by default the results will be AND-combined, meaning only the logical intersection of all searches will be returned. It is also possible to combine partial results with a logical OR, and with a logical NOT:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'FULLTEXT(emails, "body", "+this,+text,+document")'),(0,i.kt)("br",null)," Will return all documents that contain all the mentioned words. Note: specifying the ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," symbols is optional here.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'FULLTEXT(emails, "body", "banana,|apple")'),(0,i.kt)("br",null)," Will return all documents that contain either (or both) words ",(0,i.kt)("em",{parentName:"p"},"banana")," or ",(0,i.kt)("em",{parentName:"p"},"apple"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'FULLTEXT(emails, "body", "banana,-apple")'),(0,i.kt)("br",null)," Will return all documents that contain the word ",(0,i.kt)("em",{parentName:"p"},"banana"),", but do not contain the word ",(0,i.kt)("em",{parentName:"p"},"apple"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'FULLTEXT(emails, "body", "banana,pear,-cranberry")'),(0,i.kt)("br",null)," Will return all documents that contain both the words ",(0,i.kt)("em",{parentName:"p"},"banana")," and ",(0,i.kt)("em",{parentName:"p"},"pear"),", but do not contain the word ",(0,i.kt)("em",{parentName:"p"},"cranberry"),"."))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"No precedence of logical operators will be honored in a fulltext query. The query will simply be evaluated from left to right."))))}d.isMDXComponent=!0}}]);