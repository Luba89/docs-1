"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[249],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},x=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),x=l(t),u=o,m=x["".concat(s,".").concat(u)]||x[u]||d[u]||a;return t?r.createElement(m,c(c({ref:n},p),{},{components:t})):r.createElement(m,c({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=x;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}x.displayName="MDXCreateElement"},28995:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),c=["components"],i={},s=void 0,l={unversionedId:"collections/dynamo/reference/createNewItem",id:"collections/dynamo/reference/createNewItem",title:"createNewItem",description:"1. Browser",source:"@site/docs/collections/dynamo/reference/createNewItem.md",sourceDirName:"collections/dynamo/reference",slug:"/collections/dynamo/reference/createNewItem",permalink:"/docs/collections/dynamo/reference/createNewItem",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Connect to dynamodb C8",permalink:"/docs/collections/dynamo/reference/"},next:{title:"createTable",permalink:"/docs/collections/dynamo/reference/createTable"}},p={},d=[],x={toc:d};function u(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},x,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Browser")),(0,a.kt)("p",null,"Save as .html and open the file in your browser."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head>\n    <script src="https://sdk.amazonaws.com/js/aws-sdk-2.7.16.min.js"><\/script>\n\n    <script>\n      const dcName = "test.macrometa.io";\n      const host = "https://api-" + dcName;\n\n      const apiKey = "xxxxxxxxxxxxxxxxxxxxxx";\n      const accessKeyId = "apikey " + apiKey;\n\n      // OR\n      // const JWT = "xxxxxxxxxxxxxxxxxxxxxx";\n      // const accessKeyId = "bearer " + JWT;\n\n      const service = "dynamodb";\n      const region = "us-east-1";\n      const endpoint = host + "/_api/dynamo";\n      const secretAccessKey = "c8";\n\n      AWS.config.update({\n        region,\n        endpoint,\n        accessKeyId,\n        secretAccessKey,\n      });\n\n      var docClient = new AWS.DynamoDB.DocumentClient();\n\n      function createItem() {\n        var params = {\n          TableName: "Movies",\n          Item: {\n            year: 2015,\n            title: "The Big New Movie",\n            info: {\n              plot: "Nothing happens at all.",\n              rating: 0,\n            },\n          },\n        };\n        docClient.put(params, function (err, data) {\n          if (err) {\n            document.getElementById("textarea").innerHTML =\n              "Unable to add item: " + "\\n" + JSON.stringify(err, undefined, 2);\n          } else {\n            document.getElementById("textarea").innerHTML =\n              "PutItem succeeded: " + "\\n" + JSON.stringify(data, undefined, 2);\n          }\n        });\n      }\n    <\/script>\n  </head>\n\n  <body>\n    <input\n      id="createItem"\n      type="button"\n      value="Create Item"\n      onclick="createItem();"\n    />\n    <br /><br />\n    <textarea\n      readonly\n      id="textarea"\n      style={{ width:400px; height:800px }}\n    ></textarea>\n  </body>\n</html>\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"JS/NODE")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var AWS = require("aws-sdk");\n\nconst dcName = "test.macrometa.io";\nconst host = "https://api-" + dcName;\n\nconst apiKey = "xxxxxxxxxxxxxxxxxxxxxx";\nconst accessKeyId = "apikey " + apiKey;\n\n// OR\n// const JWT = "xxxxxxxxxxxxxxxxxxxxxx";\n// const accessKeyId = "bearer " + JWT;\n\nconst service = "dynamodb";\nconst region = "us-east-1";\nconst endpoint = host + "/_api/dynamo";\nconst secretAccessKey = "c8";\n\nAWS.config.update({\n  region,\n  endpoint,\n  accessKeyId,\n  secretAccessKey,\n});\n\nvar docClient = new AWS.DynamoDB.DocumentClient();\n\nvar params = {\n  TableName: "Movies",\n  Item: {\n    year: 2015,\n    title: "The Big New Movie",\n    info: {\n      plot: "Nothing happens at all.",\n      rating: 0,\n    },\n  },\n};\n\nconsole.log("Adding a new item...");\ndocClient.put(params, function (err, data) {\n  if (err) {\n    console.error(\n      "Unable to add item. Error JSON:",\n      JSON.stringify(err, null, 2)\n    );\n  } else {\n    console.log("Added item:", JSON.stringify(data, null, 2));\n  }\n});\n')))}u.isMDXComponent=!0}}]);