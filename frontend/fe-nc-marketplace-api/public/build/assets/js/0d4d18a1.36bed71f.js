(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{67:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),i=r(7),o=(r(0),r(98)),a={id:"delete-item-by-id",title:"DELETE /api/items/:item_id",sidebar_position:4},s={unversionedId:"Items/delete-item-by-id",id:"Items/delete-item-by-id",isDocsHomePage:!1,title:"DELETE /api/items/:item_id",description:"Deletes the requested item. If the item is currently in any user's basket it is also removed from their basket.",source:"@site/docs/Items/delete-item-by-id.md",sourceDirName:"Items",slug:"/Items/delete-item-by-id",permalink:"/docs/Items/delete-item-by-id",version:"current",sidebarPosition:4,frontMatter:{id:"delete-item-by-id",title:"DELETE /api/items/:item_id",sidebar_position:4},sidebar:"docsSidebar",previous:{title:"GET /api/items/:item_id",permalink:"/docs/Items/get-item-by-id"},next:{title:"GET /api/users/:username/orders",permalink:"/docs/Orders/get-orders"}},c=[{value:"Example Response",id:"example-response",children:[]}],l={toc:c};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Deletes the requested item. If the item is currently in any user's basket it is also removed from their basket."),Object(o.b)("h2",{id:"example-response"},"Example Response"),Object(o.b)("p",null,"Status 204 - No Content"),Object(o.b)("p",null,"No body is returned by this endpoint."))}p.isMDXComponent=!0},98:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,b=u["".concat(a,".").concat(m)]||u[m]||d[m]||o;return r?i.a.createElement(b,s(s({ref:t},l),{},{components:r})):i.a.createElement(b,s({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);