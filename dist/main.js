!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(d," */")),r=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(r).concat([i]).join("\n")}var a,c,d;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&i[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},function(e,t,n){var o=n(2),i=n(3);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);e.exports=i.locals||{}},function(e,t,n){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},o=[],i=0;i<e.length;i++){var r=e[i],d=t.base?r[0]+t.base:r[0],l=n[d]||0,m="".concat(d," ").concat(l);n[d]=l+1;var u=c(m),s={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(a[u].references++,a[u].updater(s)):a.push({identifier:m,updater:h(s,t),references:1}),o.push(m)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var m,u=(m=[],function(e,t){return m[e]=t,m.filter(Boolean).join("\n")});function s(e,t,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function f(e,t,n){var o=n.css,i=n.media,r=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,g=0;function h(e,t){var n,o,i;if(t.singleton){var r=g++;n=p||(p=l(t)),o=s.bind(null,n,r,!1),i=s.bind(null,n,r,!0)}else n=l(t),o=f.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var i=c(n[o]);a[i].references--}for(var r=d(e,t),l=0;l<n.length;l++){var m=c(n[l]);0===a[m].references&&(a[m].updater(),a.splice(m,1))}n=r}}}},function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o)()(!1);i.push([e.i,'html{font-size:62.5%;box-sizing:border-box;margin:0 auto;padding:0 auto}*,*:before,*:after{box-sizing:inherit}body{background-color:#FFDED6;font-family:"Cereal","Helvetica Neue",sans-serif;font-size:2rem}#content{background-color:white;padding:1.75rem;height:auto}header{width:100%;text-align:center;margin-top:0.5rem}header h1{margin:0 auto;padding:1.5rem;cursor:pointer}#tab-div{max-width:100%;margin-top:2%;margin-bottom:2%;display:flex;justify-content:space-between}.tab-button{width:49.5%;border:0.2rem solid #003811;border-radius:0.25rem;font-size:1.5rem;line-height:300%;text-transform:uppercase;font-family:"Andale Mono","Lucida Console",monospace;font-weight:bold;color:#003811;background-color:white}.tab-button:hover{color:white;background-color:#003811;cursor:pointer}#main-div{width:100%}#home-div img{display:block;max-width:100%}#home-div p{font-family:"Andale Mono","Lucida Console",monospace;font-style:italic;font-size:1.5rem;text-align:center;color:#D56638}#menu-div{display:grid;grid-template-columns:1fr 1fr 1fr;grid-auto-rows:1fr;align-items:stretch;grid-gap:0.5rem}.menu-item{display:flex;flex-direction:column;justify-content:space-evenly;align-items:center}.menu-item img{margin-top:2%;height:80%;width:90%;object-fit:cover}.menu-item p{font-style:normal;color:#003811;font-family:"Andale Mono","Lucida Console",monospace;font-weight:bold;font-size:1.5rem;text-align:center}.menu-item:hover{background-color:#003811}#menu-div .menu-item:hover p{color:white}#contact-div{display:grid;grid-template-columns:1fr 2fr;grid-column-gap:5rem;align-items:center}.contact-method{font-family:"Andale Mono","Lucida Console",monospace;text-transform:uppercase;color:#D56638;text-align:right;place-self:end}.contact-info{font-size:1.6rem;text-align:left;font-style:italic}@media (max-width: 500px){body{background-color:white}#content{padding:0}#tab-div{margin-top:0;margin-bottom:5%}.tab-button{font-size:1.5rem;line-height:200%;background-color:#003811;color:white}#main-div{background-color:#FFDED6;padding-bottom:0.5rem}#home-div{height:auto}#home-div img{border:1.5rem solid;border-color:#FFDED6}#home-div p{background-color:white;width:92%;margin:1rem auto;padding:1rem}#menu-div{background-color:white;display:grid;grid-template-columns:1fr;grid-auto-rows:40rem;grid-gap:1rem}.menu-item{background-color:#FFDED6}.menu-item p{color:#003811;font-size:1.5rem;background-color:white;padding:2%}.menu-item img{margin-top:0;height:70%}.contact-method{background-color:white}}@media screen and (min-width: 500px){#menu-div{display:grid;grid-template-columns:1fr 1fr;grid-gap:0.5rem}}@media screen and (min-width: 800px){body{margin:0 10rem}header{width:80%;margin:0 auto 3rem auto;display:grid;grid-template-columns:2fr 1fr;grid-column-gap:0;align-items:stretch;justify-items:stretch}header h1{margin:0;font-size:4.5rem;text-align:left}.tab-button{margin:0.5rem;min-width:10rem;font-size:1.6rem}#content{min-height:100vh}#home-div{width:80%;margin:auto}#home-div p{font-size:2rem}#menu-div{width:80%;margin:auto}#contact-div{width:80%;margin:auto;border:0.25rem solid;border-color:#D56638}}\n',""]),t.default=i},function(e,t,n){"use strict";function o(){let e=document.createElement("div");e.id="home-div";let t=document.createElement("img");t.src="images/breakfast.jpg",e.appendChild(t);let n=document.createElement("p");return n.textContent="Serving the best brunch in San Fransokyo since the invention of brunch.",n.id="tagline",e.appendChild(n),e}n.r(t);let i=[{name:"Eggs Benedict",image:"eggs-benedict.jpg"},{name:"Avocado Toast",image:"avocado-toast.jpg"},{name:"Breakfast Bagel",image:"breakfast-bagel.jpg"},{name:"Chocolate Waffles",image:"chocolate-waffles.jpg"},{name:"Full English Breakfast",image:"full-english.jpg"},{name:"Berry Oatmeal",image:"oatmeal.jpg"},{name:"All-Dressed Omelette",image:"omelette.jpg"},{name:"Berry Pancakes",image:"pancakes.jpg"},{name:"Shakshuka",image:"shakshuka.jpg"}];function r(){let e=document.createElement("div");return e.id="menu-div",i.forEach(t=>{e.appendChild(function(e){let t=document.createElement("div");t.setAttribute("class","menu-item");let n=document.createElement("img");n.src="./images/menu/"+e.image,n.class="menu-image",t.appendChild(n);let o=document.createElement("p");return o.textContent=e.name,o.class="menu-text",t.appendChild(o),t}(t))}),e}let a={address:"1024 Cedar Avenue, San Fransokyo",phone:"555-235-2795",email:"contact@baymaxco.com"};n(1);!function(){const e=document.getElementById("content");let t=document.createElement("header"),n=document.createElement("h1");n.textContent="Baymax & Co.",n.id="title",t.appendChild(n);let i=document.createElement("div");i.id="tab-div";let r=document.createElement("button");r.textContent="Menu",r.id="menu-button",r.setAttribute("class","tab-button"),i.appendChild(r);let a=document.createElement("button");a.textContent="Contact",a.id="contact-button",a.setAttribute("class","tab-button"),i.appendChild(a),t.appendChild(i),e.appendChild(t);let c=document.createElement("div");c.id="main-div",c.appendChild(o()),e.appendChild(c)}();document.getElementById("content");const c=document.getElementById("main-div"),d=document.getElementById("title"),l=document.getElementById("menu-button"),m=document.getElementById("contact-button");l.addEventListener("click",()=>{c.innerHTML="",c.appendChild(r())}),d.addEventListener("click",()=>{c.innerHTML="",c.appendChild(o())}),m.addEventListener("click",()=>{c.innerHTML="",c.appendChild(function(){let e=document.createElement("div");return e.id="contact-div",Object.keys(a).forEach(t=>{let n=document.createElement("p");n.textContent=""+t,n.classList.add("contact-method"),e.appendChild(n);let o=document.createElement("p");o.textContent=""+a[t],o.classList.add("contact-info"),e.appendChild(o)}),e}())})}]);