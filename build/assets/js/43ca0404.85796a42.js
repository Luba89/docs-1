"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8870],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return t?a.createElement(h,i(i({ref:n},u),{},{components:t})):a.createElement(h,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58215:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(67294);function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(87462),r=t(67294),l=t(72389),i=t(17984),o=t(86010),s="tabItem_LplD";function c(e){var n,t,l,c=e.lazy,u=e.block,p=e.defaultValue,d=e.values,m=e.groupId,h=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:y.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,i.lx)(v,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===p?p:null!=(n=null!=p?p:null==(t=y.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=y[0])?void 0:l.props.value;if(null!==f&&!v.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.UB)(),b=g.tabGroupChoices,C=g.setTabGroupChoices,x=(0,r.useState)(f),N=x[0],T=x[1],w=[],P=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=b[m];null!=j&&j!==N&&v.some((function(e){return e.value===j}))&&T(j)}var O=function(e){var n=e.currentTarget,t=w.indexOf(n),a=v[t].value;a!==N&&(P(n),T(a),null!=m&&C(m,a))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.currentTarget)+1;t=w[a]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.currentTarget)-1;t=w[r]||w[w.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},h)},v.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:function(e){return w.push(e)},onKeyDown:I,onFocus:O,onClick:O},l,{className:(0,o.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":N===n})}),null!=t?t:n)}))),c?(0,r.cloneElement)(y.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}function u(e){var n=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(n)},e))}},55869:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),i=t(9877),o=t(58215),s=["components"],c={sidebar_position:1,title:"Quickstart"},u="Quickstart with Search",p={unversionedId:"search/quickstart",id:"search/quickstart",title:"Quickstart",description:"Macrometa GDN includes a fast and powerful geo-replicated full-text search engine natively integrated into its various data models-  Key Value, Documents and Graphs.",source:"@site/docs/search/quickstart.md",sourceDirName:"search",slug:"/search/quickstart",permalink:"/docs/search/quickstart",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Quickstart"},sidebar:"tutorialSidebar",previous:{title:"Using Rest API",permalink:"/docs/collections/graphs/tutorials/using_rest_api"},next:{title:"Overview",permalink:"/docs/search/Overview"}},d={},m=[{value:"Pre-requisite",id:"pre-requisite",level:2},{value:"Installation",id:"installation",level:2},{value:"Connect to GDN",id:"connect-to-gdn",level:2},{value:"Create Collection",id:"create-collection",level:2},{value:"Insert Key Value Pairs",id:"insert-key-value-pairs",level:2},{value:"TBD",id:"tbd",level:2},{value:"Enable Search",id:"enable-search",level:3},{value:"Basic Querying",id:"basic-querying",level:3},{value:"Search vs Filter",id:"search-vs-filter",level:3},{value:"Phrase Search",id:"phrase-search",level:3},{value:"Proximity Search",id:"proximity-search",level:3},{value:"Min Match",id:"min-match",level:3},{value:"Analyzers",id:"analyzers",level:3},{value:"Ranking in Search",id:"ranking-in-search",level:3},{value:"Relevance Tuning",id:"relevance-tuning",level:3},{value:"Complete Example",id:"complete-example",level:3}],h={toc:m};function y(e){var n=e.components,t=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"quickstart-with-search"},"Quickstart with Search"),(0,l.kt)("p",null,"Macrometa GDN includes a fast and powerful geo-replicated full-text search engine natively integrated into its various data models-  ",(0,l.kt)("inlineCode",{parentName:"p"},"Key Value"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Documents")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Graphs"),"."),(0,l.kt)("p",null,"The search engine allows users to combine two information retrieval techniques: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"generalized ranking retrieval"),". The search results ",(0,l.kt)("inlineCode",{parentName:"p"},"approved")," by the boolean model are ",(0,l.kt)("inlineCode",{parentName:"p"},"ranked by relevance")," to the respective query using the Vector Space Model in conjunction with ",(0,l.kt)("inlineCode",{parentName:"p"},"BM25")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"TFIDF")," weighting schemes."),(0,l.kt)("p",null,"The search engine provides following capabilities to its users:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Complex Searches with Boolean Operators"),(0,l.kt)("li",{parentName:"ul"},"Relevance-Based Matching"),(0,l.kt)("li",{parentName:"ul"},"Phrase and Prefix Matching"),(0,l.kt)("li",{parentName:"ul"},"Custom Ranking and Relevance Tuning"),(0,l.kt)("li",{parentName:"ul"},"Configurable Analyzers & Tokenization"),(0,l.kt)("li",{parentName:"ul"},"Return whole documents or projections of documents."),(0,l.kt)("li",{parentName:"ul"},"Combinability of search queries with multiple supported data models & access patterns"),(0,l.kt)("li",{parentName:"ul"},"Geo Replicated Search indexes for instant results.")),(0,l.kt)("h2",{id:"pre-requisite"},"Pre-requisite"),(0,l.kt)("p",null,"Let's assume your"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"tenant name is ",(0,l.kt)("inlineCode",{parentName:"li"},"nemo@nautilus.com")," and "),(0,l.kt)("li",{parentName:"ul"},"user password is ",(0,l.kt)("inlineCode",{parentName:"li"},"xxxxxxx"),".")),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)(i.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"With Yarn or NPM\n\n    yarn add jsc8\n    (or)\n    npm install jsc8\n\nIf you want to use the driver outside of the current directory, you can also install it globally using the `--global` flag:\n\n    npm install --global jsc8\n\nFrom source,\n\n    git clone https://github.com/macrometacorp/jsc8.git\n    cd jsC8\n    npm install\n    npm run dist\n"))),(0,l.kt)(o.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"pyC8 requires Python 3.5+. Python 3.6 or higher is recommended\n\nTo install pyC8, simply run\n\n    $ pip3 install pyC8\n\nor, if you prefer to use conda:\n\n    conda install -c conda-forge pyC8\n\nor pipenv:\n\n    pipenv install --pre pyC8\n\nOnce the installation process is finished, you can begin developing applications in Python.\n")))),(0,l.kt)("h2",{id:"connect-to-gdn"},"Connect to GDN"),(0,l.kt)("p",null,"The first step in using GDN is to establish a connection to a local region. When this code executes, it initializes the server connection to the URL you sepcified. You can create an API key from the GUI or REST API."),(0,l.kt)(i.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const jsc8 = require("jsc8");\n\n// Simple Way\nconst client = new jsc8({\n  url: "https://gdn.paas.macrometa.io", \n  token: "", \n  fabricName: \'_system\'\n});\n\n// ----- OR -----\nconst client = new jsc8({\n  url: "https://gdn.paas.macrometa.io", \n  apiKey: "<your-api-key>", \n  fabricName: \'_system\'\n});\n\n// To use advanced options\nconst client = new jsc8("https://gdn.paas.macrometa.io"); \n'))),(0,l.kt)(o.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"from c8 import C8Client\n\n# Simple Way\nprint(\"--- Connecting to C8\")\nclient = C8Client(protocol='https', host='gdn.paas.macrometa.io', port=443,\n                        email='nemo@nautilus.com', password=\"xxxxxx\",\n                        geofabric='_system')\n\n# OR Using token\nclient = C8Client(protocol='https', host='gdn.paas.macrometa.io', port=443,\ntoken=\"XXXX\")\n\n# OR Using API Key\nclient = C8Client(protocol='https', host='gdn.paas.macrometa.io', port=443,\napikey=\"<your-api-key>\")\n")))),(0,l.kt)("h2",{id:"create-collection"},"Create Collection"),(0,l.kt)("p",null,"Create a Collection for saving the Key Value Pairs"),(0,l.kt)(i.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// Add this snippet in previously created main function\nconst coll = await client.getKVCollections();\nconsole.log("Existing Collections: ", coll.result);\n\ntry {\n    await client.createKVCollection(collectionName);\n    console.log("Collection Created Successfully");\n} catch(e) {\n    console.log("Collection creation did not succeed due to " + e);\n}\n'))),(0,l.kt)(o.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'from c8 import C8Client\n\nkey = "<your-api-key>"\ncollection_name = "students"\n\n# Create a connection to gdn\nclient = C8Client(protocol=\'https\', host=\'gdn.paas.macrometa.io\', port=443,\napikey=key)\n\n# Create a new collection if it does not exist\nif client.has_collection(collection_name):\n    print("Collection exists")\nelse:\n    client.create_collection_kv(name=collection_name)\n')))),(0,l.kt)("h2",{id:"insert-key-value-pairs"},"Insert Key Value Pairs"),(0,l.kt)("p",null,"Insert key value pairs into the collection."),(0,l.kt)(i.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// Insert Key Value pairs\nconst data = [\n  {\n    "_key": "John",\n    "value": "Science",\n    "expireAt": 0\n  },\n  {\n    "_key": "Alice",\n    "value": "Maths",\n    "expireAt": 0\n  },\n  {\n    "_key": "Alex",\n    "value": "Physics",\n    "expireAt": 0\n  },\n  {\n    "_key": "Monika",\n    "value": "Chemistry",\n    "expireAt": 0\n  }\n];\n\ntry {\n    await client.insertKVPairs(collectionName, data);\n    console.log("Key Value pairs inserted successfully.");\n} catch(e) {\n    console.log("Key Value Pairs not inserted due to " + e);\n}\n'))),(0,l.kt)(o.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'from c8 import C8Client\n\nkey = "<your-api-key>"\ncollection_name = "students"\n\n# Create a connection to gdn\nclient = C8Client(protocol=\'https\', host=\'gdn.paas.macrometa.io\', port=443,\napikey=key)\n# Insert Key Value pairs\ndata = [\n  {\n    "_key": "John",\n    "value": "Science",\n    "expireAt": 0\n  },\n  {\n    "_key": "Alice",\n    "value": "Maths",\n    "expireAt": 0\n  },\n  {\n    "_key": "Alex",\n    "value": "Physics",\n    "expireAt": 0\n  },\n  {\n    "_key": "Monika",\n    "value": "Chemistry",\n    "expireAt": 0\n  }\n]\n\nclient.insert_key_value_pair(collection_name, data)\nprint("KV Pairs Inserted")\n')))),(0,l.kt)("h2",{id:"tbd"},"TBD"),(0,l.kt)("h3",{id:"enable-search"},"Enable Search"),(0,l.kt)("h3",{id:"basic-querying"},"Basic Querying"),(0,l.kt)("h3",{id:"search-vs-filter"},"Search vs Filter"),(0,l.kt)("h3",{id:"phrase-search"},"Phrase Search"),(0,l.kt)("h3",{id:"proximity-search"},"Proximity Search"),(0,l.kt)("h3",{id:"min-match"},"Min Match"),(0,l.kt)("h3",{id:"analyzers"},"Analyzers"),(0,l.kt)("h3",{id:"ranking-in-search"},"Ranking in Search"),(0,l.kt)("h3",{id:"relevance-tuning"},"Relevance Tuning"),(0,l.kt)("h3",{id:"complete-example"},"Complete Example"))}y.isMDXComponent=!0}}]);