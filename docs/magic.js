"use strict";function b(a){return m(a)||c(a)||k()}function c(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function d(a,b){if(null==a)return{};var c,d,f=e(a,b);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(d=0;d<g.length;d++)c=g[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(f[c]=a[c])}return f}function e(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function f(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function g(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?f(Object(b),!0).forEach(function(c){i(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):f(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function i(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function j(a,b){return m(a)||l(a,b)||k()}function k(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function l(a,b){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function m(a){if(Array.isArray(a))return a}function n(a){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},n(a)}var o=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,h=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=h(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},m=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},o=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||m(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},p=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2).toLowerCase()]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=h(d)))?a.setAttribute(b,d):a.removeAttribute(b)},q=function(a,c,d){var e=a.props,f=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name,{is:e.is}):document.createElement(a.name,{is:e.is});for(var g in e)p(f,g,null,e[g],c,d);for(var h=0,j=a.children.length;h<j;h++)f.appendChild(q(a.children[h]=v(a.children[h]),c,d));return a.node=f},r=function(a){return null==a?null:a.key},s=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(q(e=v(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,o=e.props,t=d.children,u=e.children,w=0,x=0,y=t.length-1,z=u.length-1;for(var A in g=g||"svg"===e.name,j(n,o))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==o[A]&&p(c,A,n[A],o[A],f,g);for(;x<=z&&w<=y&&null!=(l=r(t[w]))&&l===r(u[x]);)s(c,t[w].node,t[w],u[x]=v(u[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=r(t[y]))&&l===r(u[z]);)s(c,t[y].node,t[y],u[z]=v(u[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(q(u[x]=v(u[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=r(k=t[w]),m=r(u[x]=v(u[x],k)),C[l]||null!=m&&m===r(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(s(c,k&&k.node,k,u[x],f,g),x++),w++):(l===m?(s(c,k.node,k,u[x],f,g),C[m]=!0,w++):null==(h=B[m])?s(c,k&&k.node,null,u[x],f,g):(s(c,c.insertBefore(h.node,k&&k.node),h,u[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==r(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},t=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(a){return"object"===n(a)?a:x(a)},v=function(b,c){return b.type===a?((!c||c.type!==a||t(c.lazy,b.lazy))&&((c=u(b.lazy.view(b.lazy))).lazy=b.lazy),c):b},w=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},x=function(a,e){return w(a,c,d,e,void 0,b)},y=function(a){return a.nodeType===b?x(a.nodeValue,a):w(a.nodeName.toLowerCase(),c,e.call(a.childNodes,y),a,void 0,1)};return{h:function h(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push(u(d));return b=b||c,"function"==typeof a?a(b,g):w(a,b,g,void 0,b.key)},app:function app(a){var b={},c=!1,d=a.view,e=a.node,h=e&&y(e),i=a.subscriptions,j=[],l=function(a){n(this.actions[a.type],a)},m=function(a){return b!==a&&(b=a,i&&(j=o(j,k([i(b)]),n)),d&&!c&&g(p,c=!0)),b},n=(a.middleware||function(a){return a})(function(a,c){return"function"==typeof a?n(a(b,c)):f(a)?"function"==typeof a[0]||f(a[0])?n(a[0],"function"==typeof a[1]?a[1](c):a[1]):(k(a.slice(1)).map(function(a){a&&a[0](n,a[1])},m(a[0])),b):m(a)}),p=function(){c=!1,e=s(e.parentNode,e,h,h=u(d(b)),l)};n(a.init)}}}(),q=o.h,h=o.app,r=function(a){return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},d=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===n(a)})};if(!d)if(e(b,"string","number","function")||Array.isArray(b))d=b,b={};else if(e(b.View,"function"))d=b.View,b={};else if(b.props||b.c)return q(a,{},b);return q(a,b,d)}},s=r("a"),a=r("button"),t=r("code"),u=r("div"),v=r("footer"),w=r("h2"),x=r("h3"),y=r("h4"),z=r("h5"),A=r("header"),B=r("img"),C=r("input"),D=r("label"),E=r("li"),F=r("link"),G=r("main"),H=r("meta"),I=r("nav"),J=r("p"),p=r("pre"),K=r("script"),L=r("span"),M=r("title"),N=r("ul"),O={description:"json client lib for @magic. returns errors instead of throwing them.",gdpr:{allowed:[],show:!0},logotext:"@magic-libraries/json",menu:[{text:"installation",to:"/#installation"},{text:"usage",to:"/#usage"},{text:"caveat",to:"/#caveat"},{text:"source",to:"/#source"}],pageClass:{},root:"/json/",theme:"dark",title:"@magic-libraries/json",url:"/json/"},P={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}},mapClickToGo:function mapClickToGo(a){return a.preventDefault(),a}},Q=function(a){var b,c=a.blog,d=a.link,e=a.month,f=a.url,h=a.year,i=Object.entries(c[h][e]),k=[e];return d?b="".concat(d).concat(e,"/"):k.push(" - ",h),[x(b?Y({to:b},k):k),i.map(function(c){var d=j(c,2),e=d[0],f=d[1];return f.map(function(c){return R(g({},a,{},c.state,{name:c.name,link:b,day:e}))})})]},R=function(a){return u([y([a.day,"-",a.month,"-",a.year," - ",Y({to:a.name},a.title)]),J(a.description)])},S=function(a){var b,c=a.link,d=a.year,e=a.blog,f=a.url;return c?b="".concat(c).concat(d,"/"):f.endsWith("".concat(d,"/"))&&(b=f),u([w(c?Y({to:b},d):d),Object.entries(e[d]).map(function(c){var d=j(c,2),e=d[0],f=d[1];return Q(g({},a,{month:e,days:f,link:b}))})])},T=function(){var a=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return v({class:"Footer"},[u({class:"Container"},[a,u({class:"Credits"},["made with a few bits of ",Y({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])])},U=function(a){var b=a.gdpr,c=void 0===b?{}:b,d=a.cookies,e=void 0===d?[]:d,f=c.show,g=c.title,h=void 0===g?"Privacy Information":g,i=c.content,j=void 0===i?"This app neither saves, collects, nor shares any data about you.":i,k=c.noDataText,l=void 0===k?"Awesome.":k,m=c.allowTitle,n=void 0===m?"Allow:":m,o=c.allowAllText,p=void 0===o?"all":o,q=c.allowText,r=void 0===q?"selected":q,s=c.denyText,t=void 0===s?"none":s;if(f){var v=!!e.length;return u({class:"Gdpr"},[C({type:"checkbox",name:"show-hide",id:"show-hide",checked:!f}),u({class:"Container"},[h&&x(h),j&&J(j),v&&[N(e.map(function(a){var b=a.name,d=a.title,e=a.content,f=a.allowed;return E({class:"Cookie"},[C({type:"checkbox",title:"allow ".concat(b," data"),id:b,checked:c.allowed.includes(b),onchange:[da.gdpr.toggleAllow,{name:b}]}),(d||e)&&D({for:b},[d&&y(d),e&&J(e)])])}))],v?[z(n),D({class:"button allow all",for:"show-hide",onclick:da.gdpr.allow},p),D({class:"button allow",for:"show-hide",onclick:da.gdpr.close},r),D({class:"button allow none",for:"show-hide",onclick:da.gdpr.deny},t)]:D({class:"button",for:"show-hide",onclick:da.gdpr.close},l)])])}},V=function(a){if("string"==typeof a)a={project:a};else if(!a.project)return;var b=a,c=b.project,d=void 0!==c&&c,e=b.branch,f=void 0===e?"master":e,g=b.host,h=void 0===g?"github":g,i=[["npm",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://www.npmjs.com/package/@".concat(a),src:"https://img.shields.io/npm/v/@".concat(a,".svg")}}],["travis",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://img.shields.io/travis/com/".concat(a,"/").concat(f)}}],["appveyor",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;if(a){var b=a.split("/"),c=j(b,2),e=c[0],g=c[1];return e=e.replace(/-/g,""),{to:"https://ci.appveyor.com/project/".concat(e,"/").concat(g,"/branch/").concat(f),src:"https://img.shields.io/appveyor/ci/".concat(e,"/").concat(g,"/").concat(f,".svg")}}}],["coveralls",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return{to:"https://coveralls.io/".concat(h,"/").concat(a),src:"https://img.shields.io/coveralls/".concat(h,"/").concat(a,"/").concat(f,".svg")}}],["greenkeeper",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://greenkeeper.io",src:"https://badges.greenkeeper.io/".concat(a,".svg")}}],["snyk",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://snyk.io/test/".concat(h,"/").concat(a),src:"https://img.shields.io/snyk/vulnerabilities/github/".concat(a,".svg")}}]].map(function(b){var c=j(b,2),d=c[0],e=c[1];return e(a[d])}).filter(function(b){return b.to&&b.src});return i.length?N({class:"GitBadges"},i.map(function(a){var b=a.to,c=a.src;return E([Y({to:b},X({src:c}))])})):void 0},W=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],c=a.logo,e=a.menu,f=a.logotext,g=d(a,["logo","menu","logotext"]);return c||e||f?A({class:"Header"},[(c||f)&&Y({to:g.root,class:"Logo"},[c&&X(c),f&&L(f)]),e&&Z({state:g,items:e}),b]):void 0},X=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),B(a)},Y=function(a,b){var c=a.to,e=d(a,["to"]),f=e.href,g=e.text,h=e.nofollow,i=e.noreferrer,j=d(e,["href","text","nofollow","noreferrer"]);c=c||f||"",j.href=c;var k="/"===c[0]||"#"===c[0];return k?j.onclick=[da.go,P.mapClickToGo]:(j.target="_blank",j.rel="noopener",h&&(j.rel+=" nofollow"),i&&(j.rel+=" noreferrer")),s(j,[g,b])},Z=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a.items,c=a["class"],d=void 0===c?"Menu":c,e=a.collapse,f=a.state;if(b.length){var h=f.url||"";return f.hash&&!h.endsWith(f.hash)&&(h+="#".concat(f.hash)),I({className:d},N(b.map(function(a){return $(g({},a,{url:h,state:f,collapse:void 0===e||e}))})))}},$=function(a){var b=a.text,c=a.items,e=void 0===c?[]:c,f=a.url,h=a.state,i=a.parentTo,j=void 0===i?void 0:i,k=a.collapse,l=d(a,["text","items","url","state","parentTo","collapse"]),m=h.root;if(l.to||b){var n={class:{}},o=l.to;o.startsWith("/#")&&(o=o.substr(1));var p=l.to[0],q="/"===p||"-"===p||"#"===p;if(j&&q)if("-"===p||"#"===p)o=j+o;else{var u=o.split("/")[1];if(u){var v=j.endsWith("/".concat(u,"/"));!v&&q&&(o=j+o)}}("/"!==l.to&&f.endsWith(l.to)||l.to===f)&&(n["class"].active=!0);var r=o.startsWith(m);m&&q&&!r&&(o=m+o),l.to=o.replace(/\/\//g,"/");var s=[],t=f&&f.includes(l.to);return(e.length&&t||!k)&&(s=N(e.map(function(a){return $(g({parentTo:l.to,url:f,state:h,collapse:k},a))}))),E(n,[l.to?Y(l,b):L(l,b),s])}},_=function(a,b){var c=a.page,d=a.state;c=c?c(d):"404 - not found";var e={id:"Magic",class:d.pageClass};return G(e,u({class:{Wrapper:!0}},[ba({state:d,page:c}),b]))},aa=function(b,c){"string"==typeof b?b={content:b}:c&&(b=g({content:c},b));var d=b,f=d.content,h=d.lines;return u({class:{Pre:!0,lines:!(void 0!==h)||h}},[u({class:"menu"},[a({onclick:[da.pre.clip,function(a){return{e:a,content:f}}]},"copy")]),p(ca.pre.format(f))])},ba=function(a){var b=a.page,c=a.state;return[W(c),u({class:"Page"},b),T(c)]},ca={db:function(){return{set:function set(a,b){var c=b.action,d=b.key,e=b.value,f=ca.db.init(),g=ca.json.stringify(e);return"Error"==typeof g?void a(c,new Error("db:write ".concat(d," ").concat(val))):void(f[d]=g,a(c,{key:d,value:e}))},get:function get(a,b){var c=b.action,d=b.key,e=ca.db.init(),f=void 0;return e[d]&&(f=ca.json.parse(e[d]),"Error"==typeof res)?void a(c,new Error("db:read ".concat(d))):void a(c,{key:d,value:f})},del:function del(a,b){var c=b.action,d=b.key,e=ca.db.init();e[d]&&e.removeItem(d),a(c,{key:d,value:void 0})},init:function init(){return"undefined"!=typeof window&&window.localStorage||{}}}}(),json:function(){var a=function(a){return function(){try{return a.apply(void 0,arguments)}catch(a){return a}}},b=a(JSON.parse),c=a(JSON.stringify);return{parse:b,stringify:c}}(),pre:function(){var a="\nlet this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\ndefault do static void\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports require\n".trim().split(/\b/g).map(function(a){return a.trim()}),c="\nArray Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array\n".trim().split(/\b/g).map(function(a){return a.trim()}),d=["true","false"],e=function(b){if("string"!=typeof b)return b;var e=b.split(/\b/);return b=e.map(function(b,f){if(""!==b){var g="";return"state"===b?g="state":"actions"===b?g="actions":e[f+1]&&e[f+1].includes(":")?g="colon":a.includes(b)?g="keyword":c.includes(b)?g="builtin":d.includes(b)?g="boolean":"."===e[f-1]?g="property":"."===e[f+1]&&(g="object"),g&&(b=L({class:g},b)),b}}),b},f=/([a-zA-Z0-9:+._-]+@[a-zA-Z0-9._-]+)/g,g=function(a){return a.split(f).map(function(a){if(f.test(a)){var b=a.startsWith("mailto:")?a:"mailto:".concat(a),c=a.replace("mailto:","");return Y({class:"email",to:b},c)}return e(a)})},h=function(a,b){return[m(a.substring(0,b)),m(a.substring(b))]},i=function(a){return a.split(/(?= )/).map(function(a){if(!a.includes("://"))return m(a);var b=a.split("://"),c=j(b,2),d=c[0],e=c[1];return d.match(/[a-z]/g)?a:Y({to:a},a)})},k=function(a){return a.includes("://")&&!a.includes("@")?i(a):g(a)},l=function(a){var c=a.replace(/"/g,"'"),d=c.split("'"),f=b(d),g=f[0],h=f[1],i=f.slice(2),j=i;1===j.length?j=m(j[0]):1<j.length&&(j=m(j.join("'")));var l=[];return l="undefined"==typeof h?e(a):[e(g),L({class:"string"},["'",k(h),"'"]),j],l},m=function(a){var b=a.indexOf("//"),c=a.trim();if(c.startsWith("//")){for(var d=a.search(/\S|$/),e="",f=0;f<d;f++)e+=" ";return c.startsWith("// ")||(a="".concat(e,"// ").concat(c.substr(2))),L({class:"comment"},[e,"// ",m(c.substring(3))])}return-1<b&&":"!==a[b-1]?h(a,b):2<a.indexOf("://")?i(a):a.indexOf("@")&&a.includes(".")&&!a.trim().includes(" ")?g(a):l(a)},n=function(a){return t({class:"line"},m(a))};return{format:function format(a){return a.trim().split("\n").map(n)}}}()},da={changeTheme:function changeTheme(a){return g({},a,{pageClass:g({},a.pageClass,{light:"dark"===a.theme}),theme:"dark"===a.theme?"light":"dark"})},gdpr:{allow:function allow(a){return[g({},a,{gdpr:g({},a.gdpr,{show:!1})}),[ca.db.set,{key:"magic-gdpr",value:{allowed:a.cookies.map(function(a){return a.name}),show:!1},action:[da.gdpr.show,{show:!1}]}]]},close:function close(a){return[g({},a,{gdpr:g({},a.gdpr,{show:!1})}),[ca.db.set,{key:"magic-gdpr",value:{allowed:a.gdpr.allowed,show:!1},action:[da.gdpr.show,{show:!1}]}]]},deny:function deny(a){return[a,[ca.db.set,{key:"magic-gdpr",value:{allowed:[],show:!1},action:[da.gdpr.show,{show:!1}]}]]},load:function load(a){return[a,[ca.db.get,{key:"magic-gdpr",action:da.gdpr.show}]]},show:function(a,b){var c=b.show;return b.value&&"undefined"!=typeof b.value.show&&(c=b.value.show),"undefined"==typeof c?a:g({},a,{gdpr:g({},a.gdpr,{show:c})})},toggleAllow:function toggleAllow(a,b){var d=b.name,e=a.gdpr,f=e.allowed.includes(d);return f?e.allowed=e.allowed.filter(function(a){return a!==d}):e.allowed.push(d),g({},a,{gdpr:e})}},go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),d=c.split("#"),e=j(d,2),f=e[0],h=e[1],i=void 0===h?"":h;return f===a.url&&i===a.hash?a:(window.history.pushState({url:f,hash:i},"",c),i?window.location.hash=i:window.scroll(0,0),g({},a,{url:f,hash:i,prev:a.url}))},pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;return e=e.substring(1),b.state&&(d=b.state.url,e=b.state.hash),e?window.location.hash=e:window.scroll(0,0),g({},a,{url:d,hash:e})},pre:{clip:function clip(a,b){var c=b.content;if("undefined"!=typeof document&&"function"==typeof document.execCommand){var d=document.createElement("textarea");d.id="copy",d.innerHTML=c,document.body.appendChild(d);var e=document.getElementById("copy");e.select(),document.execCommand("copy"),document.body.removeChild(e)}return a}}},ea={"/json/":function json(a){return[w(a.title),J(["this is the ",Y({to:"https://github.com/magic-libraries"},"@magic-libraries")," json library. it returns errors instead of throwing them"," and catches (some) malformed objects when stringifying."]),V("magic-libraries/json"),x({id:"installation"},"installation:"),aa("npm install @magic-libraries/json"),x({id:"usage"},"usage:"),J("in a page/component, just use the lib.json functions"),aa("module.exports = () => Pre(lib.json.stringify({ some: { object: ['with', 'values'] } }))"),J("renders"),aa(ca.json.stringify({some:{object:["with","values"]}})),x({id:"caveat"},"caveat"),J(["this library is intended to handle incoming web traffic."," we can never be sure that this incoming packets will not include faulty json."]),J(["only use this library without checking it's return value"," if you know that your input json is not malformed."," in all other cases the following pattern should be employed "," (and enhanced with custom error messages)."]),aa("\nexport const ViewStringify = unsafe => {\n  const result = lib.json.stringify(unsafe)\n  return div([result.message ? result.message : result])\n}\n\nexport const ViewParse = unsafe => {\n  const result = lib.json.parse(unsafe)\n  // in this case we can not check for .message,\n  // since unsafe might have a .message key after parsing\n  div([result instanceof Error ? result.message : result])\n}\n"),x({id:"source"},"source"),J(["the source for this page is in the ",Y({to:"https://github.com/magic-libraries/json/tree/master/example"},"example directory")," and gets built and published to github using ",Y({to:"https://github.com/magic/core"},"@magic/core")])]},"/json/404/":function json404(){return u("404 - not found")}};h({init:function init(){return da.gdpr.load(g({},O,{url:window.location.pathname}))},subscriptions:function subscriptions(){return[[P.listenPopState,da.pop]]},view:function view(a){var b=ea[a.url]?a.url:"/404/",c=ea[b],d=a.pages&&a.pages[b];return d&&Object.keys(d).forEach(function(b){a[b]=d[b]}),_({page:c,state:a},U(a))},node:document.getElementById("Magic")});