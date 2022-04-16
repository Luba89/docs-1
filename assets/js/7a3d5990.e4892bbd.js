"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6258],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,A=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(A,s(s({ref:n},u),{},{components:t})):r.createElement(A,s({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58215:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(67294);function a(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(87462),a=t(67294),o=t(72389),s=t(17984),i=t(86010),l="tabItem_LplD";function p(e){var n,t,o,p=e.lazy,u=e.block,c=e.defaultValue,d=e.values,m=e.groupId,A=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),E=(0,s.lx)(b,(function(e,n){return e.value===n.value}));if(E.length>0)throw new Error('Docusaurus error: Duplicate values "'+E.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===c?c:null!=(n=null!=c?c:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=f[0])?void 0:o.props.value;if(null!==v&&!b.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,s.UB)(),y=T.tabGroupChoices,g=T.setTabGroupChoices,h=(0,a.useState)(v),_=h[0],S=h[1],N=[],P=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var w=y[m];null!=w&&w!==_&&b.some((function(e){return e.value===w}))&&S(w)}var I=function(e){var n=e.currentTarget,t=N.indexOf(n),r=b[t].value;r!==_&&(P(n),S(r),null!=m&&g(m,r))},R=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.currentTarget)+1;t=N[r]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.currentTarget)-1;t=N[a]||N[N.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},A)},b.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:_===n?0:-1,"aria-selected":_===n,key:n,ref:function(e){return N.push(e)},onKeyDown:R,onFocus:I,onClick:I},o,{className:(0,i.Z)("tabs__item",l,null==o?void 0:o.className,{"tabs__item--active":_===n})}),null!=t?t:n)}))),p?(0,a.cloneElement)(f.filter((function(e){return e.props.value===_}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==_})}))))}function u(e){var n=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}},71557:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),s=t(9877),i=t(58215),l=["components"],p={sidebar_position:1,title:"Using Rest API"},u="Using REST APIs",c={unversionedId:"cep/tutorials/using_rest_api",id:"cep/tutorials/using_rest_api",title:"Using Rest API",description:"Modern applications need to be highly responsive, always online, and able to access data instantly across the globe. At the same time, they need to be deployed on datacenters close to their users. Macrometa global data network (GDN) is a real-time materialized view engine that provides instant data to applications and APIs in a simple interface.",source:"@site/docs/cep/tutorials/using_rest_api.md",sourceDirName:"cep/tutorials",slug:"/cep/tutorials/using_rest_api",permalink:"/docs/cep/tutorials/using_rest_api",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Using Rest API"},sidebar:"tutorialSidebar",previous:{title:"Quickstart",permalink:"/docs/cep/quickstart"},next:{title:"Create Stream Application",permalink:"/docs/cep/tutorials/create-stream-app"}},d={},m=[{value:"API Browser",id:"api-browser",level:2},{value:"Stream Processing",id:"stream-processing",level:2}],A={toc:m};function f(e){var n=e.components,p=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},A,p,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-rest-apis"},"Using REST APIs"),(0,o.kt)("p",null,"Modern applications need to be highly responsive, always online, and able to access data instantly across the globe. At the same time, they need to be deployed on datacenters close to their users. Macrometa global data network (GDN) is a real-time materialized view engine that provides instant data to applications and APIs in a simple interface."),(0,o.kt)("p",null,"If you are new to Macrometa GDN, start by reading the ",(0,o.kt)("a",{parentName:"p",href:"/docs/essentials/overview"},"essentials")," of Macrometa GDN."),(0,o.kt)("p",null,"Prerequisites:"),(0,o.kt)("p",null,"A Macrometa GDN tenant account and credentials."),(0,o.kt)("h2",{id:"api-browser"},"API Browser"),(0,o.kt)("p",null,"Your main tool for using REST APIs is the API reference in the ",(0,o.kt)("a",{parentName:"p",href:"https://gdn.paas.macrometa.io"},"GDN")," web browser interface. Use the built-in API reference to run various calls and view their input and output."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"GDN API Browser",src:t(25369).Z,width:"2474",height:"1896"})),(0,o.kt)("h2",{id:"stream-processing"},"Stream Processing"),(0,o.kt)("p",null,"Macrometa Stream Processing allows you to integrate streaming data and take appropriate actions. "),(0,o.kt)(s.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'    import requests\n    import json\n    from websocket import create_connection\n    import base64\n    import six\n    import time\n    # Constants\n\n    FEDERATION = "api-gdn-us-west1.prod.macrometa.io"\n    FED_URL = "https://{}".format(FEDERATION)\n    EMAIL = "nemo@nautilus.com"\n    PASSWORD = "xxxxxx"\n    FABRIC = "_system"\n    AUTH_TOKEN = "bearer "\n    TENANT_NAME = "xxxxxx"\n    STREAM_NAME = "tutorialAppInputStream"\n    STREAM_APP_NAME = "stream_app_tutorial"\n    STREAM_APP =\'\'\'\n      @App:name(\'stream_app_tutorial\')\n      @App:qlVersion("2")\n\n      CREATE FUNCTION concatFn[javascript] return string {\n          var str1 = data[0];\n          var str2 = data[1];\n          var str3 = data[2];\n          var response = str1 + str2 + str3;\n          return response;\n      };\n\n      -- Stream\n      CREATE STREAM tutorialAppInputStream (deviceID string, roomNo int, temperature double);\n\n      -- Table\n      CREATE TABLE tutorialAppOutputTable (id string, temperature double);\n\n      @info(name=\'Query\')\n      INSERT INTO tutorialAppOutputTable\n      SELECT concatFn(roomNo,\'-\',deviceID) as id, temperature\n      FROM tutorialAppInputStream;\n    \'\'\'\n    INPUT_DATA = [\n          {\n            "deviceID": "AD11",\n            "roomNo": 200,\n            "temperature": 18,\n          },\n          { "deviceID": "AD11",\n            "roomNo": 201,\n            "temperature": 47 },\n        ]\n    SELECT_QUERY = "FOR doc IN tutorialAppOutputTable return doc"\n\n    # Create a HTTPS Session\n\n    url = "{}/_open/auth".format(FED_URL)\n    payload = {\n        \'email\':EMAIL,\n        \'password\':PASSWORD\n        }\n    headers = {\n        \'content-type\': \'application/json\'\n        }\n\n    response = requests.post(url, data = json.dumps(payload), headers = headers)\n\n    if response.status_code == 200:\n        resp_body = json.loads(response.text)\n        AUTH_TOKEN += resp_body["jwt"]\n        TENANT = resp_body["tenant"]\n    else:\n        raise Exception("Error while getting auth token. Code:{}, Reason:{}".format(response.status_code,response.reason))\n\n\n    session = requests.session()\n    session.headers.update({"content-type": \'application/json\'})\n    session.headers.update({"authorization": AUTH_TOKEN})\n\n    # Create a Stream Application\n\n    url = FED_URL + "/_api/streamapps"\n    payload = {\n      "definition": STREAM_APP,\n      "regions": ["gdn-us-west1"]\n    }\n\n    resp = session.post(url, data=json.dumps(payload))\n    result = json.loads(resp.text)\n    print("\\nStream App Created: ", result)\n\n    # Activate Stream Application\n\n    url = FED_URL + "/_api/streamapps/" + STREAM_APP_NAME + "/active?active=true"\n    resp = session.patch(url)\n    result = json.loads(resp.text)\n    print("\\nStream App Activated: ", result)\n\n    # Wait for all inputs and outputs to initialize\n    time.sleep(20)\n\n    # Publish Messages to the input stream\n    stream_type = "c8local"\n    producerurl = "wss://" + FEDERATION + "/_ws/ws/v2/producer/persistent/" + TENANT_NAME +\\\n                    "/" + stream_type + "." + FABRIC + "/" + stream_type + "s." + STREAM_NAME\n\n    ws = create_connection(producerurl)\n    payload = {\n                    "payload": base64.b64encode(\n                        six.b(json.dumps(INPUT_DATA[0]))\n                    ).decode("utf-8")\n                }\n    ws.send(json.dumps(payload))\n    response = json.loads(ws.recv())\n    if response[\'result\'] == \'ok\':\n        print(\'Message published successfully\')\n    else:\n        print(\'Failed to publish message:\', response)\n\n    payload = {\n                    "payload": base64.b64encode(\n                        six.b(json.dumps(INPUT_DATA[1]))\n                    ).decode("utf-8")\n                }\n    ws.send(json.dumps(payload))\n    response = json.loads(ws.recv())\n    if response[\'result\'] == \'ok\':\n        print(\'Message published successfully\')\n    else:\n        print(\'Failed to publish message:\', response)\n\n    ws.close()\n\n    # Verify results from the collection\n\n    url = FED_URL + "/_api/cursor"\n    payload= {\n      "id": "tutorialStreamAppQuery",\n      "query": SELECT_QUERY,\n      "bindVars": {},\n    }\n    resp = session.post(url, data=json.dumps(payload))\n    result = json.loads(resp.text)\n    print("\\nStream App Results: ", result)\n    # Delete Stream Apllication\n\n    url = FED_URL + "/_api/streamapps/" + STREAM_APP_NAME\n    resp = session.delete(url)\n    result = json.loads(resp.text)\n    print("\\nStream App Deleted: ", result)\n'))),(0,o.kt)(i.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'    class APIRequest {\n      _headers = {\n        Accept: "application/json",\n        "Content-Type": "application/json",\n      };\n\n      constructor(url) {\n        this._url = url;\n      }\n\n      login(email, password) {\n        const endpoint = "/_open/auth";\n\n        const self = this;\n\n        return new Promise(function (resolve, reject) {\n          self\n            .req(endpoint, {\n              body: { email, password },\n              method: "POST",\n            })\n            .then(({ jwt, ...data }) => {\n              self._headers.authorization = `bearer ${jwt}`;\n              resolve(data);\n            })\n            .catch(reject);\n        });\n      }\n\n      _handleResponse(response, resolve, reject) {\n        if (response.ok) {\n          resolve(response.json());\n        } else {\n          reject(response);\n        }\n      }\n\n      req(endpoint, { body, ...options } = {}) {\n        const self = this;\n        return new Promise(function (resolve, reject) {\n          fetch(self._url + endpoint, {\n            headers: self._headers,\n            body: body ? JSON.stringify(body) : undefined,\n            ...options,\n          }).then((response) => self._handleResponse(response, resolve, reject));\n        });\n      }\n    }\n    const EMAIL = "nemo@nautilus.com";\n    const PASSWORD = "xxxxxx";\n    const FEDERATION_NAME = "api-gdn.prod.macrometa.io";\n    const FEDERATION_URL = `https://${FEDERATION_NAME}`;\n\n    const IS_GLOBAL = true;\n    const STREAM_NAME = `tutorialAppInputStream`;\n    const STREAM_APP_NAME = `strean_app_tutorial`;\n    const STREAM_APP = `@App:name(\'strean_app_tutorial\')\n      @App:description(\'This application demonstrates how to use user defined functions in the stream app\')\n      @App:qlVersion("2")\n\n      CREATE FUNCTION concatFn[javascript] return string {\n          var str1 = data[0];\n          var str2 = data[1];\n          var str3 = data[2];\n          var response = str1 + str2 + str3;\n          return response;\n      };\n\n      -- Stream\n      CREATE STREAM tutorialAppInputStream (deviceID string, roomNo int, temperature double);\n\n      -- Table\n      CREATE TABLE tutorialAppOutputTable (id string, temperature double);\n\n      @info(name=\'Query\')\n      INSERT INTO tutorialAppOutputTable\n      SELECT concatFn(roomNo,\'-\',deviceID) as id, temperature\n      FROM tutorialAppInputStream;`;\n\n    const run = async function () {\n      try {\n        const connection = new APIRequest(FEDERATION_URL);\n\n        /* -------------------- Login (nemo@nautilus.com/xxxxxx) -------------------- */\n\n        const { tenant } = await connection.login(EMAIL, PASSWORD);\n\n        console.log("Login Successfully using", tenant);\n\n        /* ---------------------------- Create StreamApp ---------------------------- */\n        const streamApp = await connection.req("/_fabric/_system/_api/streamapps", {\n          body: {\n            definition: STREAM_APP,\n            regions: [],\n          },\n          method: "POST",\n        });\n\n        console.log("STREAM APP CREATED SUCCESSFULLY", streamApp);\n\n        /* --------------------------- Activate StreamApp --------------------------- */\n\n        await connection.req(\n          `/_fabric/_system/_api/streamapps/${STREAM_APP_NAME}/active?active=true`,\n          {\n            method: "PATCH",\n          }\n        );\n\n        console.log("ACTIVATING STREAM APP...", STREAM_APP_NAME);\n\n        await new Promise((resolve) => setTimeout(resolve, 10000));\n\n        console.log("STREAM APP ACTIVATED SUCCESSFULLY");\n\n        /* ------------------ Publish messages to Sample StreamApp ------------------ */\n        const region = IS_GLOBAL ? "c8global" : "c8local";\n        const streamName = `${region}s.${STREAM_NAME}`;\n        const url = IS_GLOBAL\n          ? FEDERATION_NAME;\n          : `api-${streamApp.streamApps[0].regions[0]}.prod.macrometa.io`\n\n        const producerUrl = `wss://${url}/_ws/ws/v2/producer/persistent/${tenant}/${region}._system/${streamName}`;\n\n        /* -------------------------- Initalizing Producer -------------------------- */\n\n        const producer = new WebSocket(producerUrl);\n\n        producer.onopen = function () {\n          console.log("WebSocket:Producer is open now for " + streamName);\n        };\n\n        producer.onerror = function () {\n          console.log(\n            "Failed to establish WebSocket:Producer connection for " + streamName\n          );\n        };\n\n        producer.onclose = function () {\n          console.log("Closed WebSocket:Producer connection for " + streamName);\n        };\n\n        producer.onmessage = function () {\n          console.log("WebSocket:Producer message sent successfully");\n        };\n\n        await new Promise((resolve) => setTimeout(resolve, 10000));\n\n        const INPUT_DATA = [\n          {\n            deviceID: "AD11",\n            roomNo: 200,\n            temperature: 18,\n          },\n          { deviceID: "AD11", roomNo: 201, temperature: 47 },\n        ];\n\n        producer.send(\n          JSON.stringify({\n            payload: btoa(JSON.stringify(INPUT_DATA[0])),\n          })\n        );\n\n        await new Promise((resolve) => setTimeout(resolve, 10000));\n\n        producer.send(\n          JSON.stringify({\n            payload: btoa(JSON.stringify(INPUT_DATA[1])),\n          })\n        );\n\n        await new Promise((resolve) => setTimeout(resolve, 10000));\n\n        producer.close();\n\n        /* ----------------------------- Verify results ----------------------------- */\n\n        const SELECT_QUERY = "FOR doc IN tutorialAppOutputTable return doc";\n\n        const result = await connection.req(`/_fabric/_system/_api/cursor`, {\n          body: {\n            id: "tutorialStreamAppQuery",\n            query: SELECT_QUERY,\n            bindVars: {},\n          },\n          method: "POST",\n        });\n\n        console.log("INPUT SENT ---\x3e", INPUT_DATA);\n        console.log("OUTPUT DATA ---\x3e", result.results);\n\n        /* ---------------------------- Delete StreamApp ---------------------------- */\n        const deletion = await connection.req(\n          `/_fabric/_system/_api/streamapps/${STREAM_APP_NAME}`,\n          {\n            method: "DELETE",\n          }\n        );\n\n        console.log("STREAM APP DELETED SUCCESSFULLY", deletion);\n      } catch (e) {\n        console.error(e);\n      }\n    };\n\n    run();\n')))))}f.isMDXComponent=!0},25369:function(e,n,t){n.Z=t.p+"assets/images/gdn-api-browser-0c8c99ab1aea5bc3346f0788df0606c5.png"}}]);