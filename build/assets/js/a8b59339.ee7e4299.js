"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6724],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return b}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),b=a,f=m["".concat(l,".").concat(b)]||m[b]||p[b]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66555:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={sidebar_position:3},l="GeoFabrics",c={unversionedId:"essentials/geofabrics",id:"essentials/geofabrics",title:"GeoFabrics",description:"GeoFabrics enable you to create region-based subsets within your tenants. Each GeoFabric represents a group of collections, processes, and data that cannot be accessed from other GeoFabrics. You must log into the _system GeoFabric to create, modify, or delete GeoFabrics. Each GeoFabric has a unique URL that enables access to permissed users.",source:"@site/docs/essentials/geofabrics.md",sourceDirName:"essentials",slug:"/essentials/geofabrics",permalink:"/docs/essentials/geofabrics",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/docs/essentials/Authentication"},next:{title:"Troubleshooting",permalink:"/docs/essentials/Troubleshooting"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create or Delete GeoFabrics",id:"create-or-delete-geofabrics",level:2},{value:"Enable Unique URLs",id:"enable-unique-urls",level:2}],m={toc:p};function b(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"geofabrics"},"GeoFabrics"),(0,o.kt)("p",null,"GeoFabrics enable you to create region-based subsets within your tenants. Each GeoFabric represents a group of collections, processes, and data that cannot be accessed from other GeoFabrics. You must log into the ",(0,o.kt)("inlineCode",{parentName:"p"},"_system")," GeoFabric to create, modify, or delete GeoFabrics. Each GeoFabric has a unique URL that enables access to permissed users."),(0,o.kt)("p",null,"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"../docs/documents/appendix/glossary#geofabric"},"glossary")," or ",(0,o.kt)("a",{parentName:"p",href:"https://www.macrometa.com/blog/introducing-geofabrics"},"Introducing Geofabrics")," for more details."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You must be logged into the ",(0,o.kt)("inlineCode",{parentName:"li"},"_system")," GeoFabric to create, modify, or delete GeoFabrics.")),(0,o.kt)("h2",{id:"create-or-delete-geofabrics"},"Create or Delete GeoFabrics"),(0,o.kt)("p",null,"To create a GeoFabric:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log into an administrator account in the ",(0,o.kt)("inlineCode",{parentName:"li"},"_system")," GeoFabric."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"GEO FABRICS")," to navigate to the GeoFabrics management page."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"New Geo Fabric"),"."),(0,o.kt)("li",{parentName:"ol"},"Enter a GeoFabric name."),(0,o.kt)("li",{parentName:"ol"},"Select at least two Edge Locations across which you want the GeoFabric distributed."),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"Username")," of the account for which you want to own the GeoFabric. Default is ",(0,o.kt)("inlineCode",{parentName:"li"},"root"),"."),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"Spot Primary Region"),".")),(0,o.kt)("p",null,"After creating the GeoFabric, click the GeoFabric name on the list to view its unique URL. The owning user can also select their GeoFabric and log in normally."),(0,o.kt)("p",null,"To modify a GeoFabric:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log into an administrator account in the ",(0,o.kt)("inlineCode",{parentName:"li"},"_system")," GeoFabric."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"GEO FABRICS")," to navigate to the GeoFabrics management page."),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Status")," switch to add or remove regions to or from the GeoFabric.")),(0,o.kt)("p",null,"To delete a GeoFabric:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log into an administrator account in the ",(0,o.kt)("inlineCode",{parentName:"li"},"_system")," GeoFabric."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"GEO FABRICS")," to navigate to the GeoFabrics management page."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Delete")," on the row of the GeoFabric you want to delete.")),(0,o.kt)("p",null,"You must type the name of the GeoFabric to verify its deletion."),(0,o.kt)("h2",{id:"enable-unique-urls"},"Enable Unique URLs"),(0,o.kt)("p",null,"To enable unique URLs for each GeoFabric:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log into an administrator account in the ",(0,o.kt)("inlineCode",{parentName:"li"},"_system")," GeoFabric."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"TENANTS")," to navigate to the Tenants management page."),(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"Platform Limits")," tab, select the ",(0,o.kt)("strong",{parentName:"li"},"Enable Tenant URLs")," check box.")))}b.isMDXComponent=!0}}]);