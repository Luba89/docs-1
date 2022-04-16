"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2670],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},74645:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={sidebar_position:10},p="Executing Scripts",l={unversionedId:"cep/tutorials/executing-scripts",id:"cep/tutorials/executing-scripts",title:"Executing Scripts",description:"The script provides the ability to write custom functions in other programming languages and execute them within Stream applications. The custom functions using scripts can be defined via the function definitions and accessed in queries similar to any other inbuilt functions.",source:"@site/docs/cep/tutorials/executing-scripts.md",sourceDirName:"cep/tutorials",slug:"/cep/tutorials/executing-scripts",permalink:"/docs/cep/tutorials/executing-scripts",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Publishing Data",permalink:"/docs/cep/tutorials/publishing-data"},next:{title:"Overview",permalink:"/docs/cep/reference/overview"}},c={},m=[{value:"Syntax",id:"syntax",level:2},{value:"Transform data using Custom Functions",id:"transform-data-using-custom-functions",level:2},{value:"Transform complex json data using Custom Functions",id:"transform-complex-json-data-using-custom-functions",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"executing-scripts"},"Executing Scripts"),(0,o.kt)("p",null,"The script provides the ability to write custom functions in other programming languages and execute them within Stream applications. The custom functions using scripts can be defined via the function definitions and accessed in queries similar to any other inbuilt functions."),(0,o.kt)("p",null,"Scripts help to define custom functions in other programming languages such as javascript. This can eliminate the need for writing extensions to fulfill the functionalities that are not provided in Stream Applications or by its extension."),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,"The syntax for defining the script is as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"define function <function name>[<language name>] return <return type> {\n    <function logic>\n};\n")),(0,o.kt)("p",null,"The defined function can be used in the queries similar to inbuilt functions as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"<function name>( (<function parameter>(, <function parameter>)*)? )\n")),(0,o.kt)("p",null,"Here, the ",(0,o.kt)("inlineCode",{parentName:"p"},"&lt;function parameter&gt;"),"'s are passed into the ",(0,o.kt)("inlineCode",{parentName:"p"},"&lt;function logic&gt;")," of the definition as an ",(0,o.kt)("inlineCode",{parentName:"p"},"Object[]")," with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"data"),"."),(0,o.kt)("p",null,"The functions defined via the function definitions have higher precedence compared to inbuilt functions and the functions provided via extensions."),(0,o.kt)("p",null,"The following parameters are used to configure the function definition:"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",{class:"header"},(0,o.kt)("th",null,"Parameter"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",{class:"odd"},(0,o.kt)("td",null,"`<function name>`"),(0,o.kt)("td",null,"The name of the function created. (It is recommended to define a function name in `camelCase`.)")),(0,o.kt)("tr",{class:"even"},(0,o.kt)("td",null,"`<language name>`"),(0,o.kt)("td",null,"Name of the programming language used to define the script, such as `javascript`, `r`, or `scala`")),(0,o.kt)("tr",{class:"odd"},(0,o.kt)("td",null,"`<return type>`"),(0,o.kt)("td",null,"The return type of the function. This can be `int, long, float, double, string, bool` or `object`. Here, the function implementer is responsible for returning the output according on the defined return type to ensure proper functionality.")),(0,o.kt)("tr",{class:"even"},(0,o.kt)("td",null,"`<language name>`"),(0,o.kt)("td",null,"The execution logic that is written in the language specified under the `<language name>`, where it consumes the `<function parameter>`'s through the `data` variable and returns the output in the type specified via the `<return type>` parameter.")))),(0,o.kt)("h2",{id:"transform-data-using-custom-functions"},"Transform data using Custom Functions"),(0,o.kt)("p",null,"To write custom function calls, follow the procedure below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the GUI. Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Stream Apps")," tab.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"New")," to start defining a new stream application.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Type a ",(0,o.kt)("strong",{parentName:"p"},"Name")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"TemperatureProcessing")," or feel free to chose any other name for the stream application.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Type a ",(0,o.kt)("strong",{parentName:"p"},"Description"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"TemperatureProcessing")," stream application, define a source stream as follows."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE STREAM TempStream (deviceID long, roomNo int, temp double);\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add sink stream to send results of script function"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE SINK DeviceTempStream WITH (type= 'stream', stream='DeviceTempStream', map.type='json') (id string, temp double);\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In this example, you can write a function that can be used to concatenate the room number and device ID as follows."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"define function concatFn[javascript] return string {\n    var str1 = data[0];\n    var str2 = data[1];\n    var str3 = data[2];\n    var responce = str1 + str2 + str3;\n    return responce;\n};\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add stream query to apply the script you wrote to the relevant attributes of the input stream definition."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"insert into DeviceTempStream\nselect concatFn(roomNo,'-',deviceID) as id, temp\nfrom TempStream;\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Save the stream application. The completed stream application is as follows."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"@App:name(\"TemperatureProcessing\")\n@App:description(\"Calculate an average temperature of the room\")\n@App:qlVersion(\"2\")\n\nCREATE STREAM TempStream (deviceID long, roomNo int, temp double);\n\nCREATE SINK DeviceTempStream WITH (type= 'stream', stream='DeviceTempStream', map.type='json') (id string, temp double);\n\nCREATE FUNCTION concatFn[javascript] return string {\n        var str1 = data[0];\n        var str2 = data[1];\n        var str3 = data[2];\n        var responce = str1 + str2 + str3;\n        return responce;\n};\n\ninsert into DeviceTempStream\nselect concatFn(roomNo,'-',deviceID) as id, temp\nfrom TempStream;\n")))),(0,o.kt)("h2",{id:"transform-complex-json-data-using-custom-functions"},"Transform complex json data using Custom Functions"),(0,o.kt)("p",null,"Parsing complex JSON data would be good application to write custom functions. Consider that nested json data is received over an input stream. Defining a message schema while defining a stream as explained in ",(0,o.kt)("a",{parentName:"p",href:"/docs/cep/tutorials/consuming-data#introduction"},"Consuming Data - Introduction")," can be cumbersome or error prone."),(0,o.kt)("p",null,"In the below example we will see how complex data can be parsed using custom javascript function."),(0,o.kt)("p",null,"To write custom function calls, follow the procedure below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the GUI. Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Stream Apps")," tab.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("strong",{parentName:"p"},"New")," to start defining a new stream application.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter a ",(0,o.kt)("strong",{parentName:"p"},"Name")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"ProcessEmployeeData")," or feel free to chose any other name for the stream application.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter a ",(0,o.kt)("strong",{parentName:"p"},"Description"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Define an input C8DB collection"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE SOURCE STREAM CompanyXInputStream WITH (type = \'database\', collection = "CompanyXInputStream", collection.type="doc" , replication.type="global", map.type=\'json\') (seqNo string, name string, address string);\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Define an output stream   "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE SINK CompanyXProfessionalInfo WITH (type = \'c8streams\', stream = "CompanyXProfessionalInfo", replication.type="local") (name string, workAddress string);\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Consider that ",(0,o.kt)("inlineCode",{parentName:"p"},"CompanyXInputStream")," will receive employee data in below format."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "seqNo": "1200001",\n  "name": "Raleigh McGilvra",\n  "address": {\n    "permanent": {\n      "street": "236  Pratt Avenue",\n      "city": "Orchards",\n      "state": "Washington",\n      "country": "USA",\n      "zip": "98662"\n    },\n    "work": {\n      "street": "1746  Rosebud Avenue",\n      "city": "Little Rock",\n      "state": "Arkansas",\n      "country": "USA",\n      "zip": "72212"\n    }\n  }\n}\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Consider that we want to convert ",(0,o.kt)("inlineCode",{parentName:"p"},"address.work")," in the well formatted string.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Define a javascript function to process ",(0,o.kt)("inlineCode",{parentName:"p"},"address")," field."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},'define function getWorkAddress[javascript] return string {\n    work_address = JSON.parse(data[0]).work\n\n    // Concatenate all the address fields as a single string\n    formatted_address =  work_address.street + ", " + work_address.city + ", " + work_address.state + ", " + work_address.country + ", " + work_address.zip;\n    return formatted_address\n};\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Write a Stream Query to transfom data using ",(0,o.kt)("inlineCode",{parentName:"p"},"getWorkAddress")," function."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- Data Processing\n@info(name='Query')\ninsert into CompanyXProfessionalInfo\nselect name, getWorkAddress(address) as workAddress\nfrom CompanyXInputStream;\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Save the stream application. The completed stream application is as follows."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'@App:name(\'ProcessEmployeeData\')\n@App:qlVersion("2")\n\nCREATE SOURCE CompanyXInputStream WITH (type = \'database\', collection = "CompanyXInputStream", collection.type="doc" , replication.type="global", map.type=\'json\') (seqNo string, name string, address string);\n\nCREATE SINK CompanyXProfessionalInfo WITH (type = \'c8streams\', stream = "CompanyXProfessionalInfo", replication.type="local") (name string, workAddress string);\n\nCREATE FUNCTION getWorkAddress[javascript] return string {\n    work_address = JSON.parse(data[0]).work\n    formatted_address =  work_address.street + ", " + work_address.city + ", " + work_address.state + ", " + work_address.country + ", " + work_address.zip;\n    return formatted_address\n};\n\n-- Data Processing\n@info(name=\'Query\')\ninsert into CompanyXProfessionalInfo\nselect name, getWorkAddress(address) as workAddress\nfrom CompanyXInputStream;\n')))))}d.isMDXComponent=!0}}]);