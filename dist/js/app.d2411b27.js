(function(e){function t(t){for(var r,o,c=t[0],i=t[1],l=t[2],s=0,f=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f00df309"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"2707cd3f"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var l=u[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],s=l.getAttribute("data-href");if(s===r||s===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],d.parentNode.removeChild(d),n(u)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/idatt2105-fullstack_appliksjonsutvikling/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={id:"nav"},a=Object(r["f"])("About"),u=Object(r["f"])("clcltr");function c(e,t){var n=Object(r["x"])("router-link"),c=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["d"])(r["a"],null,[Object(r["e"])("div",o,[Object(r["g"])(n,{to:"/"},{default:Object(r["C"])((function(){return[a]})),_:1}),Object(r["g"])(n,{to:"/calculator"},{default:Object(r["C"])((function(){return[u]})),_:1})]),Object(r["g"])(c)],64)}n("715b");var i=n("6b0d"),l=n.n(i);const s={},f=l()(s,[["render",c]]);var d=f,p=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),b=function(e){return Object(r["t"])("data-v-6ea772fa"),e=e(),Object(r["r"])(),e},h=b((function(){return Object(r["e"])("div",{class:"home"},[Object(r["e"])("h1",null,"This is a Vue app made to showcase my work in the subject IDATT2105")],-1)})),m=b((function(){return Object(r["e"])("h1",null,"APE",-1)}));function v(e,t,n,o,a,u){return Object(r["q"])(),Object(r["d"])(r["a"],null,[h,m],64)}var j={name:"Home",components:{}};n("6a35");const g=l()(j,[["render",v],["__scopeId","data-v-6ea772fa"]]);var O=g,y=[{path:"/",name:"Home",component:O},{path:"/calculator",name:"Calculator",component:function(){return n.e("about").then(n.bind(null,"8e22"))}}],w=Object(p["a"])({history:Object(p["b"])(),routes:y}),_=w,k=n("5502"),P=Object(k["a"])({state:{},mutations:{},actions:{},modules:{}});Object(r["c"])(d).use(P).use(_).mount("#app")},"6a35":function(e,t,n){"use strict";n("e6fe")},"715b":function(e,t,n){"use strict";n("cc56")},cc56:function(e,t,n){},e6fe:function(e,t,n){}});
//# sourceMappingURL=app.d2411b27.js.map