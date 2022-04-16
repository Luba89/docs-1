"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3983],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return p}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(t),p=o,y=u["".concat(l,".").concat(p)]||u[p]||d[p]||a;return t?r.createElement(y,c(c({ref:n},m),{},{components:t})):r.createElement(y,c({ref:n},m))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},36605:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),c=["components"],i={},l=void 0,s={unversionedId:"collections/dynamo/reference/mmdynamo/deleteTable",id:"collections/dynamo/reference/mmdynamo/deleteTable",title:"deleteTable",description:"1. Browser",source:"@site/docs/collections/dynamo/reference/mmdynamo/deleteTable.md",sourceDirName:"collections/dynamo/reference/mmdynamo",slug:"/collections/dynamo/reference/mmdynamo/deleteTable",permalink:"/docs/collections/dynamo/reference/mmdynamo/deleteTable",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"deleteAnItem",permalink:"/docs/collections/dynamo/reference/mmdynamo/deleteAnItem"},next:{title:"readAnItem",permalink:"/docs/collections/dynamo/reference/mmdynamo/readAnItem"}},m={},d=[],u={toc:d};function p(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Browser")),(0,a.kt)("p",null,"Save as .html and open the file in your browser."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head>\n    <script src="https://unpkg.com/mmdynamo@0.2.0/dist/mmdynamo.umd.js"><\/script>\n\n    <script>\n      const dcName = "test.macrometa.io";\n      const host = "https://api-" + dcName;\n      const apiKey = "xxxxxxxxxxxxxxxxxxxxxx";\n      /*\n   If you have a JWT token\n   \n   const JWT = "xxxxxxxxxxxxxxxxxxxxxx";\n   */\n\n      const service = "dynamodb";\n      const region = "us-east-1";\n      const endpoint = host + "/_api/dynamo";\n      // secretAccessKey is a required parameter for aws-sdk we recommend you to pass "c8"\n      const secretAccessKey = "c8";\n      const accessKeyId = "apikey " + apiKey;\n      /*\n   If you are using JWT token use the below instead\n   \n   const accessKeyId = "bearer " + JWT;\n   */\n      const { DynamoDB } = window.mmdynamo;\n\n      const client = new DynamoDB({\n        region,\n        endpoint,\n        accessKeyId,\n        secretAccessKey,\n      });\n\n      function deleteMovies() {\n        var params = {\n          TableName: "Movies",\n        };\n\n        client.deleteTable(params, function (err, data) {\n          if (err) {\n            document.getElementById("textarea").innerHTML =\n              "Unable to delete table: " +\n              "\\n" +\n              JSON.stringify(err, undefined, 2);\n          } else {\n            document.getElementById("textarea").innerHTML = "Table deleted.";\n          }\n        });\n      }\n    <\/script>\n  </head>\n\n  <body>\n    <input\n      id="deleteTableButton"\n      type="button"\n      value="Delete Table"\n      onclick="deleteMovies();"\n    />\n    <br /><br />\n    <textarea\n      readonly\n      id="textarea"\n      style={{ width:400px; height:800px }}\n    ></textarea>\n  </body>\n</html>\n')))}p.isMDXComponent=!0}}]);