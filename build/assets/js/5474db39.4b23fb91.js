"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4867],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||o;return n?i.createElement(m,r(r({ref:t},u),{},{components:n})):i.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},79458:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=["components"],s={},l="Which Index to use when",d={unversionedId:"collections/documents/indexing/which-index",id:"collections/documents/indexing/which-index",title:"Which Index to use when",description:"GDN automatically indexes the key attribute in each collection. There is no need to index this attribute separately. Please note that a document's id attribute is derived from the _key attribute, and is thus implicitly indexed, too.",source:"@site/docs/collections/documents/indexing/which-index.md",sourceDirName:"collections/documents/indexing",slug:"/collections/documents/indexing/which-index",permalink:"/docs/collections/documents/indexing/which-index",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Working with Indexes",permalink:"/docs/collections/documents/indexing/working-with-indexes"},next:{title:"Concepts",permalink:"/docs/collections/documents/geospatial/concepts"}},u={},c=[{value:"Index types",id:"index-types",level:2},{value:"hash index",id:"hash-index",level:3},{value:"skiplist index",id:"skiplist-index",level:3},{value:"persistent index",id:"persistent-index",level:3},{value:"ttl index",id:"ttl-index",level:3},{value:"geo index",id:"geo-index",level:3},{value:"fulltext index",id:"fulltext-index",level:3},{value:"Sparse vs. Non-Sparse indexes",id:"sparse-vs-non-sparse-indexes",level:2}],p={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"which-index-to-use-when"},"Which Index to use when"),(0,o.kt)("p",null,"GDN automatically indexes the ",(0,o.kt)("inlineCode",{parentName:"p"},"_key")," attribute in each collection. There is no need to index this attribute separately. Please note that a document's ",(0,o.kt)("inlineCode",{parentName:"p"},"_id")," attribute is derived from the ",(0,o.kt)("inlineCode",{parentName:"p"},"_key")," attribute, and is thus implicitly indexed, too."),(0,o.kt)("p",null,"GDN will also automatically create an index on ",(0,o.kt)("inlineCode",{parentName:"p"},"_from")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"_to")," in any edge collection, meaning incoming and outgoing connections can be determined efficiently."),(0,o.kt)("h2",{id:"index-types"},"Index types"),(0,o.kt)("p",null,"Users can define additional indexes on one or multiple document attributes. Several different index types are provided by GDN. These indexes have different usage scenarios:"),(0,o.kt)("h3",{id:"hash-index"},"hash index"),(0,o.kt)("p",null,"Provides quick access to individual documents if (and only if) all indexed attributes are provided in the search query. The index will only be used for equality comparisons. It does not support range queries and cannot be used for sorting."),(0,o.kt)("p",null,"The hash index is a good candidate if all or most queries on the indexed attribute(s) are equality comparisons. The unique hash index provides an amortized complexity of O(1) for insert, update, remove and lookup operations. The non-unique hash index provides O(1) inserts, updates and removes, and will allow looking up documents by index value with amortized O(n) complexity, with ",(0,o.kt)("em",{parentName:"p"},"n")," being the number of documents with that index value."),(0,o.kt)("p",null,"A non-unique hash index on an optional document attribute should be declared sparse so that it will not index documents for which the index attribute is not set."),(0,o.kt)("h3",{id:"skiplist-index"},"skiplist index"),(0,o.kt)("p",null,"Skiplists keep the indexed values in an order, so they can be used for equality lookups, range queries and for sorting. For high selectivity attributes, skiplist indexes will have a higher overhead than hash indexes. For low selectivity attributes, skiplist indexes will be more efficient than non-unique hash indexes."),(0,o.kt)("p",null,"Additionally, skiplist indexes allow more use cases (e.g. range queries, sorting) than hash indexes. Furthermore, they can be used for lookups based on a leftmost prefix of the index attributes."),(0,o.kt)("h3",{id:"persistent-index"},"persistent index"),(0,o.kt)("p",null,"A persistent index behaves much like the sorted skiplist index, except that all index values are persisted on disk and do not need to be rebuilt in memory when the server is restarted or the indexed collection is reloaded. The operations in a persistent index have logarithmic complexity, but operations have may have a higher constant factor than the operations in a skiplist index, because the persistent index may need to make extra roundtrips to the primary index to fetch the actual documents."),(0,o.kt)("p",null,"A persistent index can be used for equality lookups, range queries and for sorting. For high selectivity attributes, persistent indexes will have a higher overhead than skiplist or hash indexes. "),(0,o.kt)("p",null,"Persistent indexes allow more use cases (e.g. range queries, sorting) than hash indexes. Furthermore, they can be used for lookups based on a leftmost prefix of the index attributes. In contrast to the in-memory skiplist indexes, persistent indexes do not need to be rebuilt in-memory so they don't influence the loading time of collections as other in-memory indexes do."),(0,o.kt)("h3",{id:"ttl-index"},"ttl index"),(0,o.kt)("p",null,"The TTL index provided by GDN can be used for automatically removing expired documents from a collection. "),(0,o.kt)("p",null,"The TTL index is set up by setting an ",(0,o.kt)("inlineCode",{parentName:"p"},"expireAfter")," value and by picking a single document attribute which contains the documents' reference timepoint. Documents are expired ",(0,o.kt)("inlineCode",{parentName:"p"},"expireAfter")," seconds after their reference timepoint has been reached. The documents' reference timepoint is specified as either a numeric timestamp (Unix timestamp) or a date string in format ",(0,o.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DDTHH:MM:SS")," with optional milliseconds. All date strings will be interpreted as UTC dates."),(0,o.kt)("p",null,"For example, if ",(0,o.kt)("inlineCode",{parentName:"p"},"expireAfter"),' is set to 600 seconds (10 minutes) and the index attribute is "creationDate" and there is the following document:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    { "creationDate" : 1550165973 }\n')),(0,o.kt)("p",null,"This document will be indexed with a creation date time value of ",(0,o.kt)("inlineCode",{parentName:"p"},"1550165973"),", which translates to the human-readable date ",(0,o.kt)("inlineCode",{parentName:"p"},"2019-02-14T17:39:33.000Z"),". The document will expire 600 seconds afterwards, which is at timestamp ",(0,o.kt)("inlineCode",{parentName:"p"},"1550166573")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"2019-02-14T17:49:33.000Z")," in the human-readable version)."),(0,o.kt)("p",null,"The actual removal of expired documents will not necessarily happen immediately. Expired documents will eventually removed by a background thread that is periodically going through all TTL indexes and removing the expired documents. The frequency for invoking this background thread can be configured using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--ttl.frequency")," startup option. "),(0,o.kt)("p",null,"There is no guarantee when exactly the removal of expired documents will be carried out, so queries may still find and return documents that have already expired. These will eventually be removed when the background thread kicks in and has capacity to remove the expired documents. It is guaranteed however that only documents which are past their expiration time will actually be removed."),(0,o.kt)("p",null,"Please note that the numeric date time values for the index attribute should be specified in seconds since January 1st 1970 (Unix timestamp). To calculate the current timestamp from JavaScript in this format, there is ",(0,o.kt)("inlineCode",{parentName:"p"},"Date.now() / 1000"),", to calculate it from an arbitrary Date instance, there is ",(0,o.kt)("inlineCode",{parentName:"p"},"Date.getTime() / 1000"),"."),(0,o.kt)("p",null,"Alternatively, the index attribute values can be specified as a date string in format ",(0,o.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DDTHH:MM:SS")," with optional milliseconds. All date strings will be interpreted as UTC dates."),(0,o.kt)("p",null,"The above example document using a date string attribute value would be"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    { "creationDate" : "2019-02-14T17:39:33.000Z" }\n')),(0,o.kt)("p",null,"In case the index attribute does not contain a numeric value nor a proper date string, the document will not be stored in the TTL index and thus will not become a candidate for expiration and removal. Providing either a non-numeric value or even no value for the index attribute is a supported way of keeping documents from being expired and removed."),(0,o.kt)("p",null,"TTL indexes are designed exactly for the purpose of removing expired documents from a collection. It is ",(0,o.kt)("em",{parentName:"p"},"not recommended")," to rely on TTL indexes for user-land C8QL queries. This is because TTL indexes internally may store a transformed, always numerical version of the index attribute value even if it was originally passed in as a datestring. As a result TTL indexes will likely not be used for filtering and sort operations in user-land C8QL queries."),(0,o.kt)("h3",{id:"geo-index"},"geo index"),(0,o.kt)("p",null,"The geo index provided by GDNDB allows searching for documents within a radius around a two-dimensional earth coordinate (point), or to find documents with are closest to a point. Document coordinates can either be specified in two different document attributes or in a single attribute, e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    { "latitude": 50.9406645, "longitude": 6.9599115 }\n')),(0,o.kt)("p",null,"  or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    { "coords": [ 50.9406645, 6.9599115 ] }\n')),(0,o.kt)("p",null,"Geo indexes will be invoked via special functions or C8QL optimization. The optimization can be triggered when a collection with geo index is enumerated and a ",(0,o.kt)("inlineCode",{parentName:"p"},"SORT")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"FILTER")," statement is used in conjunction with the distance function."),(0,o.kt)("h3",{id:"fulltext-index"},"fulltext index"),(0,o.kt)("p",null,"A fulltext index can be used to index all words contained in a specific attribute of all documents in a collection. Only words with a (specifiable) minimum length are indexed. Word tokenization is done using the word boundary analysis provided by libicu, which is taking into account the selected language provided at server start."),(0,o.kt)("p",null,"The index supports complete match queries (full words) and prefix queries. Fulltext indexes will only be invoked via special functions."),(0,o.kt)("h2",{id:"sparse-vs-non-sparse-indexes"},"Sparse vs. Non-Sparse indexes"),(0,o.kt)("p",null,"Hash indexes and skiplist indexes can optionally be created sparse. A sparse index does not contain documents for which at least one of the index attribute is not set or contains a value of ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,o.kt)("p",null,"As such documents are excluded from sparse indexes, they may contain fewer documents than their non-sparse counterparts. This enables faster indexing and can lead to reduced memory usage in case the indexed attribute does occur only in some, but not all documents of the collection. Sparse indexes will also reduce the number of collisions in non-unique hash indexes in case non-existing or optional attributes are indexed."),(0,o.kt)("p",null,"In order to create a sparse index, an object with the attribute ",(0,o.kt)("inlineCode",{parentName:"p"},"sparse")," can be added to the index creation commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'collection.ensureIndex({ type: "hash", fields: [ "attributeName" ], sparse: true }); \ncollection.ensureIndex({ type: "hash", fields: [ "attributeName1", "attributeName2" ], sparse: true }); \ncollection.ensureIndex({ type: "hash", fields: [ "attributeName" ], unique: true, sparse: true }); \ncollection.ensureIndex({ type: "hash", fields: [ "attributeName1", "attributeName2" ], unique: true, sparse: true }); \n\ncollection.ensureIndex({ type: "skiplist", fields: [ "attributeName" ], sparse: true }); \ncollection.ensureIndex({ type: "skiplist", fields: [ "attributeName1", "attributeName2" ], sparse: true }); \ncollection.ensureIndex({ type: "skiplist", fields: [ "attributeName" ], unique: true, sparse: true }); \ncollection.ensureIndex({ type: "skiplist", fields: [ "attributeName1", "attributeName2" ], unique: true, sparse: true }); \n')),(0,o.kt)("p",null,"When not explicitly set, the ",(0,o.kt)("inlineCode",{parentName:"p"},"sparse")," attribute defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," for new indexes. Other indexes than hash and skiplist do not support sparsity."),(0,o.kt)("p",null,"As sparse indexes may exclude some documents from the collection, they cannot be used for all types of queries. Sparse hash indexes cannot be used to find documents for which at least one of the indexed attributes has a value of ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),". For example, the following C8QL query cannot use a sparse index, even if one was created on attribute ",(0,o.kt)("inlineCode",{parentName:"p"},"attr"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"    FOR doc In collection\n      FILTER doc.attr == null \n      RETURN doc\n")),(0,o.kt)("p",null,"If the lookup value is non-constant, a sparse index may or may not be used, depending on the other types of conditions in the query. If the optimizer can safely determine that the lookup value cannot be ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", a sparse index may be used. When uncertain, the optimizer will not make use of a sparse index in a query in order to produce correct results."),(0,o.kt)("p",null,"For example, the following queries cannot use a sparse index on ",(0,o.kt)("inlineCode",{parentName:"p"},"attr")," because the optimizer will not know beforehand whether the values which are compared to ",(0,o.kt)("inlineCode",{parentName:"p"},"doc.attr")," will include ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"    FOR doc In collection \n      FILTER doc.attr == SOME_FUNCTION(...) \n      RETURN doc\n\n    FOR other IN otherCollection \n      FOR doc In collection \n        FILTER doc.attr == other.attr \n        RETURN doc\n")),(0,o.kt)("p",null,"Sparse skiplist indexes can be used for sorting if the optimizer can safely detect that the index range does not include ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," for any of the index attributes. "),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you intend to use ",(0,o.kt)("a",{parentName:"p",href:"/docs/c8ql/examples/joins"},"joins")," it may be clever to use non-sparsity and maybe even uniqueness for that attribute, else all items containing the ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," value will match against each other and thus produce large results."))))}h.isMDXComponent=!0}}]);