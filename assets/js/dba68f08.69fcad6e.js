"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6267],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(t),d=l,b=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return t?a.createElement(b,r(r({ref:n},u),{},{components:t})):a.createElement(b,r({ref:n},u))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var s=2;s<o;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},58215:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(67294);function l(e){var n=e.children,t=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:l},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(87462),l=t(67294),o=t(72389),r=t(17984),i=t(86010),c="tabItem_LplD";function s(e){var n,t,o,s=e.lazy,u=e.block,p=e.defaultValue,m=e.values,d=e.groupId,b=e.className,f=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,r.lx)(g,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(n=null!=p?p:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=f[0])?void 0:o.props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,r.UB)(),k=h.tabGroupChoices,_=h.setTabGroupChoices,w=(0,l.useState)(y),T=w[0],C=w[1],x=[],E=(0,r.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var O=k[d];null!=O&&O!==T&&g.some((function(e){return e.value===O}))&&C(O)}var N=function(e){var n=e.currentTarget,t=x.indexOf(n),a=g[t].value;a!==T&&(E(n),C(a),null!=d&&_(d,a))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;t=x[a]||x[0];break;case"ArrowLeft":var l=x.indexOf(e.currentTarget)-1;t=x[l]||x[x.length-1]}null==(n=t)||n.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},b)},g.map((function(e){var n=e.value,t=e.label,o=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return x.push(e)},onKeyDown:D,onFocus:N,onClick:N},o,{className:(0,i.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),s?(0,l.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function u(e){var n=(0,o.Z)();return l.createElement(s,(0,a.Z)({key:String(n)},e))}},78243:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=t(87462),l=t(63366),o=(t(67294),t(3905)),r=t(9877),i=t(58215),c=["components"],s={sidebar_position:3,title:"Realtime Updates"},u=void 0,p={unversionedId:"streams/tutorials/using-realtime-updates",id:"streams/tutorials/using-realtime-updates",title:"Realtime Updates",description:"This tutorial is about using Macrometa GDN as a realtime database with local latencies across the globe.",source:"@site/docs/streams/tutorials/using-realtime-updates.md",sourceDirName:"streams/tutorials",slug:"/streams/tutorials/using-realtime-updates",permalink:"/docs/streams/tutorials/using-realtime-updates",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Realtime Updates"},sidebar:"tutorialSidebar",previous:{title:"Pub-Sub with Streams",permalink:"/docs/streams/tutorials/pub-sub-streams"},next:{title:"Integrating Plugins",permalink:"/docs/streams/tutorials/integrating-plugins"}},m={},d=[{value:"Pre-requisite",id:"pre-requisite",level:2},{value:"Driver download",id:"driver-download",level:2},{value:"Code Sample",id:"code-sample",level:2}],b={toc:d};function f(e){var n=e.components,t=(0,l.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This tutorial is about using Macrometa GDN as a realtime database with local latencies across the globe."),(0,o.kt)("h2",{id:"pre-requisite"},"Pre-requisite"),(0,o.kt)("p",null,"Let's assume your"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tenant name is ",(0,o.kt)("inlineCode",{parentName:"li"},"nemo@nautilus.com")," and"),(0,o.kt)("li",{parentName:"ul"},"User password is ",(0,o.kt)("inlineCode",{parentName:"li"},"xxxxxx"),".")),(0,o.kt)("h2",{id:"driver-download"},"Driver download"),(0,o.kt)(r.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"With Yarn or NPM\n\n    yarn add jsc8\n    (or)\n    npm install jsc8\n\nIf you want to use the driver outside of the current directory, you can also install it globally using the `--global` flag:\n\n    npm install --global jsc8\n\nFrom source,\n\n    git clone https://github.com/macrometacorp/jsc8.git\n    cd jsC8\n    npm install\n    npm run dist\n"))),(0,o.kt)(i.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"pyC8 requires Python 3.5+. Python 3.6 or higher is recommended\n\nTo install pyC8, simply run\n\n    $ pip3 install pyC8\n\nor, if you prefer to use conda:\n\n    conda install -c conda-forge pyC8\n\nor pipenv:\n\n    pipenv install --pre pyC8\n\nOnce the installation process is finished, you can begin developing applications in Python.\n")))),(0,o.kt)("h2",{id:"code-sample"},"Code Sample"),(0,o.kt)(r.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const jsc8 = require(\'jsc8\');\n\n// Variables - DB\nconst global_url = "https://gdn.paas.macrometa.io";\n\n// Crete a authenticated instance with Token / Apikey\n// const client = new jsc8({url: global_url, token: "XXXX", fabricName: \'_system\'});\n// const client = new jsc8({url: global_url, apiKey: "XXXX", fabricName: \'_system\'});\n// await console.log("Authentication done!!...");\n\n// Or use Email & Password to Authenticate client instance\nconst client = new jsc8(global_url);\n\nawait client.login("nemo@nautilus.com", "xxxxxx");\n\n//Variables\nconst collection_name = "ddos";\nlet collectionDetails;\n\n// Variables - Data\nconst data = [\n  {"ip": "10.1.1.1", "action": "block", "rule": "blacklistA"},\n  {"ip": "20.1.1.2", "action": "block", "rule": "blacklistA"},\n  {"ip": "30.1.1.3", "action": "block", "rule": "blacklistB"},\n  {"ip": "40.1.1.4", "action": "block", "rule": "blacklistA"},\n  {"ip": "50.1.1.5", "action": "block", "rule": "blacklistB"},\n];\n\nasync function createCollection() {\n  console.log("\\n 2. CREATE_COLLECTION");\n\n  try{\n      console.log(`Creating the collection ${collection_name}...`);\n      const exists_coll = await client.hasCollection(collection_name);\n      if (exists_coll === false) {\n          await client.createCollection(collection_name);\n      }\n\n      // adding a onChange listner for collection\n        const listener = await client.onCollectionChange(collection_name);\n        listener.on(\'message\',(msg) => console.log("message=>", msg));\n        listener.on(\'open\',() => {\n          this.callback_fn(collection);\n        });\n        listener.on(\'close\',() => console.log("connection closed"));\n    }\n    catch (e) {\n      await console.log("Collection creation did not succeed due to " + e);\n    }\n}\n\nasync function insertData() {\n  console.log(`\\n 3. INSERT_DATA in region ${global_url}`);\n  await client.insertDocumentMany(collection_name, data);\n}\n\nasync function deleteData(){\n  console.log("\\n 4. DELETE_DATA");\n  await client.deleteCollection(collection_name);\n}\n\n(async function(){\n  await createCollection();\n  await insertData();\n  await deleteData();\n})();\n'))),(0,o.kt)(i.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'from c8 import C8Client\nimport threading\nimport pprint\nimport time\n\n# Variables - URLs\nglobal_url = "gdn.paas.macrometa.io"\n\n\n# Variables - DB\nemail = "nemo@nautilus.com"\npassword = "xxxxxx"\ngeo_fabric = "_system"\ncollection_name = "ddos"\n\n# Variables - Data\ndata = [\n    {"ip": "10.1.1.1", "action": "block", "rule": "blacklistA"},\n    {"ip": "20.1.1.2", "action": "block", "rule": "blacklistA"},\n    {"ip": "30.1.1.3", "action": "block", "rule": "blacklistB"},\n    {"ip": "40.1.1.4", "action": "block", "rule": "blacklistA"},\n    {"ip": "50.1.1.5", "action": "block", "rule": "blacklistB"},\n  ]\n\npp = pprint.PrettyPrinter(indent=4)\n\nif __name__ == \'__main__\':\n\n  # Step1: Open connection to GDN. You will be routed to closest region.\n  print("\\n1. CONNECT: federation: {},  user: {}".format(global_url, email))\n  client = C8Client(protocol=\'https\', host=global_url, port=443,\n                    email=email, password=password,\n                    geofabric=geo_fabric)      \n\n  # Step2: Create a collection if not exists\n  print("\\n2. CREATE_COLLECTION: region: {},  collection: {}".format(global_url, collection_name))\n  if client.has_collection(collection_name):\n      collection = client.collection(collection_name)\n  else:\n      collection = client.create_collection(collection_name)\n\n  # Subscriber to receive events when changes are made to collection.\n  def create_callback():\n    def callback_fn(event):\n        pp.pprint(event)\n        return\n    client.on_change(collection_name, callback=callback_fn)\n\n  # Step3: Subscribe to receive documents in realtime (PUSH model)\n  print("\\n3. SUBSCRIBE_COLLECTION: region: {},  collection: {}".format(global_url, collection_name))\n  rt_thread = threading.Thread(target=create_callback)\n  rt_thread.start()\n  time.sleep(2)\n  print("Callback registered for collection: {}".format(collection_name))\n\n  # Step4: Subscribe to receive documents in realtime (PUSH model)\n  print("\\n4. INSERT_DOCUMENTS: region: {},  collection: {}".format(global_url, collection_name))\n  client.insert_document(collection_name, document=data)\n  \n  # Step5: Wait to close the callback.\n  print("\\n5. Waiting to close callback")\n  rt_thread.join()\n\n  # Step6: Delete data.\n  print("\\n6. DELETE_DATA: region: {}, collection: {}".format(global_url, collection_name))\n  collection.truncate()\n  #client.delete_collection(collection_name)\n')))))}f.isMDXComponent=!0}}]);