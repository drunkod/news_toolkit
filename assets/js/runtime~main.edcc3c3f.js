(()=>{"use strict";var e,t,r,o,a,d={},c={};function f(e){var t=c[e];if(void 0!==t)return t.exports;var r=c[e]={exports:{}};return d[e].call(r.exports,r,r.exports,f),r.exports}f.m=d,e=[],f.O=(t,r,o,a)=>{if(!r){var d=1/0;for(b=0;b<e.length;b++){r=e[b][0],o=e[b][1],a=e[b][2];for(var c=!0,n=0;n<r.length;n++)(!1&a||d>=a)&&Object.keys(f.O).every((e=>f.O[e](r[n])))?r.splice(n--,1):(c=!1,a<d&&(d=a));if(c){e.splice(b--,1);var i=o();void 0!==i&&(t=i)}}return t}a=a||0;for(var b=e.length;b>0&&e[b-1][2]>a;b--)e[b]=e[b-1];e[b]=[r,o,a]},f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var a=Object.create(null);f.r(a);var d={};t=t||[null,r({}),r([]),r(r)];for(var c=2&o&&e;"object"==typeof c&&!~t.indexOf(c);c=r(c))Object.getOwnPropertyNames(c).forEach((t=>d[t]=()=>e[t]));return d.default=()=>e,f.d(a,d),a},f.d=(e,t)=>{for(var r in t)f.o(t,r)&&!f.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((t,r)=>(f.f[r](e,t),t)),[])),f.u=e=>"assets/js/"+({4:"645c32ca",15:"b1ec67dd",18:"db1a1be6",34:"60085406",53:"935f2afb",80:"fd9c6f87",81:"2bc0a795",112:"318c858b",141:"27ce4e45",158:"ddf693d6",173:"b37d231f",236:"cf1aa562",275:"c0d4c503",372:"1db64337",403:"6254851c",416:"fd76d24f",422:"04c52025",468:"e2dbf4b2",514:"1be78505",618:"dac4e74d",651:"0c92d972",653:"766c440a",782:"97f0c794",817:"14eb3368",918:"17896441",928:"c5602d75",935:"74d5fd07",945:"0ef06715",962:"a3980708",969:"6610a5ce",985:"4072a5f0"}[e]||e)+"."+{4:"869e702f",15:"b8aa8e26",18:"7dcd6b64",34:"4c04b8dc",53:"cde98d00",80:"70e67664",81:"7c1c8be1",112:"1659347c",141:"c9209ed3",158:"b714e11a",173:"ae1d6614",236:"936036e0",275:"430a40cb",372:"b590cc11",403:"e8ca6d16",416:"4de65bd3",422:"82cd541f",468:"b8ed267d",514:"c67b07d1",618:"f90d6d16",651:"30b440f5",653:"8b513eb8",782:"3bc425e4",817:"c3ceef94",918:"f351de14",928:"5cd7527c",935:"29791033",945:"05b1c1fb",962:"67951afd",969:"afc43d82",972:"0620d9a5",985:"6c535189"}[e]+".js",f.miniCssF=e=>{},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},a="flutter-news-toolkit-docs:",f.l=(e,t,r,d)=>{if(o[e])o[e].push(t);else{var c,n;if(void 0!==r)for(var i=document.getElementsByTagName("script"),b=0;b<i.length;b++){var l=i[b];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==a+r){c=l;break}}c||(n=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,f.nc&&c.setAttribute("nonce",f.nc),c.setAttribute("data-webpack",a+r),c.src=e),o[e]=[t];var u=(t,r)=>{c.onerror=c.onload=null,clearTimeout(s);var a=o[e];if(delete o[e],c.parentNode&&c.parentNode.removeChild(c),a&&a.forEach((e=>e(r))),t)return t(r)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=u.bind(null,c.onerror),c.onload=u.bind(null,c.onload),n&&document.head.appendChild(c)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/news_toolkit/",f.gca=function(e){return e={17896441:"918",60085406:"34","645c32ca":"4",b1ec67dd:"15",db1a1be6:"18","935f2afb":"53",fd9c6f87:"80","2bc0a795":"81","318c858b":"112","27ce4e45":"141",ddf693d6:"158",b37d231f:"173",cf1aa562:"236",c0d4c503:"275","1db64337":"372","6254851c":"403",fd76d24f:"416","04c52025":"422",e2dbf4b2:"468","1be78505":"514",dac4e74d:"618","0c92d972":"651","766c440a":"653","97f0c794":"782","14eb3368":"817",c5602d75:"928","74d5fd07":"935","0ef06715":"945",a3980708:"962","6610a5ce":"969","4072a5f0":"985"}[e]||e,f.p+f.u(e)},(()=>{var e={303:0,532:0};f.f.j=(t,r)=>{var o=f.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var a=new Promise(((r,a)=>o=e[t]=[r,a]));r.push(o[2]=a);var d=f.p+f.u(t),c=new Error;f.l(d,(r=>{if(f.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),d=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+d+")",c.name="ChunkLoadError",c.type=a,c.request=d,o[1](c)}}),"chunk-"+t,t)}},f.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,d=r[0],c=r[1],n=r[2],i=0;if(d.some((t=>0!==e[t]))){for(o in c)f.o(c,o)&&(f.m[o]=c[o]);if(n)var b=n(f)}for(t&&t(r);i<d.length;i++)a=d[i],f.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return f.O(b)},r=self.webpackChunkflutter_news_toolkit_docs=self.webpackChunkflutter_news_toolkit_docs||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();