(()=>{var t={757:(t,e,n)=>{t.exports=n(666)},666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof y?e:y,o=Object.create(i.prototype),a=new O(r||[]);return o._invoke=function(t,e,n){var r=h;return function(i,o){if(r===v)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw o;return q()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var c=M(a,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=v;var s=l(t,e,n);if("normal"===s.type){if(r=n.done?d:f,s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=d,n.method="throw",n.arg=s.arg)}}}(t,n,a),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",v="executing",d="completed",p={};function y(){}function m(){}function g(){}var b={};b[o]=function(){return this};var w=Object.getPrototypeOf,L=w&&w(w(A([])));L&&L!==n&&r.call(L,o)&&(b=L);var E=g.prototype=y.prototype=Object.create(b);function k(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(i,o,a,c){var s=l(t[i],t,o);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}}function M(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,M(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,p;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function A(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:q}}function q(){return{value:e,done:!0}}return m.prototype=E.constructor=g,g.constructor=m,m.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},k(x.prototype),x.prototype[a]=function(){return this},t.AsyncIterator=x,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new x(u(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(E),s(E,c,"Generator"),E[o]=function(){return this},E.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=A,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return c.type="throw",c.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;S(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:A(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}var i=function(){function e(n,r){t(this,e),this.linksInternos=document.querySelectorAll(n),this.options=void 0===r?{behavior:"smooth",block:"start"}:r,this.scrollToSection=this.scrollToSection.bind(this)}return r(e,[{key:"scrollToSection",value:function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}},{key:"addLinkEvent",value:function(){var t=this;this.linksInternos.forEach((function(e){e.addEventListener("click",t.scrollToSection)}))}},{key:"init",value:function(){return this.linksInternos.length&&this.addLinkEvent(),this}}]),e}(),o=function(){function e(n){t(this,e),this.accordionList=document.querySelectorAll(n),this.activeClass="active"}return r(e,[{key:"toggleAccordion",value:function(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}},{key:"addAccordionEvent",value:function(){var t=this;this.accordionList.forEach((function(e){e.addEventListener("click",(function(){return t.toggleAccordion(e)}))}))}},{key:"init",value:function(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}]),e}(),a=function(){function e(n,r){t(this,e),this.tabMenu=document.querySelectorAll(n),this.tabContent=document.querySelectorAll(r),this.activeClass="active",this.activeTab=this.activeTab.bind(this)}return r(e,[{key:"activeTab",value:function(t){var e=this;this.tabContent.forEach((function(t){t.classList.remove(e.activeClass)}));var n=this.tabContent[t].dataset.anime;this.tabContent[t].classList.add(this.activeClass,n)}},{key:"addTabNavEvent",value:function(){var t=this;this.tabMenu.forEach((function(e,n){e.addEventListener("click",(function(){return t.activeTab(n)}))}))}},{key:"init",value:function(){this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabNavEvent())}}]),e}(),c=function(){function e(n){t(this,e),this.sections=document.querySelectorAll(n),this.windowHeight=.6*window.innerHeight,this.animaScroll=this.animaScroll.bind(this)}return r(e,[{key:"animaScroll",value:function(){var t=this;this.sections.forEach((function(e){e.getBoundingClientRect().top-t.windowHeight<0?e.classList.add("active"):e.classList.contains("active")&&e.classList.remove("active")}))}},{key:"init",value:function(){this.sections.length&&(this.animaScroll(),window.addEventListener("scroll",this.animaScroll))}}]),e}(),s=function(){function e(n,r,i){t(this,e),this.abrir=document.querySelector(n),this.fechar=document.querySelector(r),this.container=document.querySelector(i),this.eventToggleModal=this.eventToggleModal.bind(this),this.clickOutSide=this.clickOutSide.bind(this)}return r(e,[{key:"toggleModal",value:function(){this.container.classList.toggle("ativo")}},{key:"eventToggleModal",value:function(t){t.preventDefault(),this.toggleModal()}},{key:"clickOutSide",value:function(t){t.target===this.container&&this.toggleModal(t)}},{key:"init",value:function(){return this.abrir&&this.fechar&&this.container&&(this.abrir.addEventListener("click",this.eventToggleModal),this.fechar.addEventListener("click",this.eventToggleModal),this.container.addEventListener("click",this.clickOutSide)),this}}]),e}(),u=function(){function e(n){t(this,e),this.tooltips=document.querySelectorAll(n),this.onMouseOver=this.onMouseOver.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this)}return r(e,[{key:"onMouseOver",value:function(t){var e=t.currentTarget;this.createTooltipBox(e),e.addEventListener("mousemove",this.onMouseMove),e.addEventListener("mouseleave",this.onMouseLeave)}},{key:"onMouseMove",value:function(t){this.tooltipBox.style.top=t.pageY+10+"px",t.pageX+240>window.innerWidth?this.tooltipBox.style.left=t.pageX-190+"px":this.tooltipBox.style.left=t.pageX+10+"px"}},{key:"onMouseLeave",value:function(t){var e=t.currentTarget;this.tooltipBox.remove(),e.removeEventListener("mouseleave",this.onMouseLeave),e.removeEventListener("mousemove",this.onMouseMove)}},{key:"addTooltipsEvents",value:function(){var t=this;this.tooltips.forEach((function(e){e.addEventListener("mouseover",t.onMouseOver)}))}},{key:"init",value:function(){return this.tooltips.length&&this.addTooltipsEvents(),this}},{key:"createTooltipBox",value:function(t){var e=document.createElement("div"),n=t.getAttribute("aria-label");e.innerText=n,e.classList.add("tooltip"),document.body.appendChild(e),this.tooltipBox=e}}]),e}();function l(t,e,n){var r="data-outside";function i(o){t.contains(o.target)||(n(),t.removeAttribute(r),e.forEach((function(t){document.documentElement.removeEventListener(t,i)})))}t.hasAttribute(r)||(t.setAttribute(r,""),e.forEach((function(t){setTimeout((function(){return document.documentElement.addEventListener(t,i)}))})))}var h=document.querySelectorAll("[data-dropdown]"),f=["click","touchstart"];function v(t){var e=this;t.preventDefault(),this.classList.add("ativo"),l(this,f,(function(){e.classList.remove("ativo")}))}function d(t,e,n,r,i,o,a){try{var c=t[o](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,i)}function p(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(t){d(o,r,i,a,c,"next",t)}function c(t){d(o,r,i,a,c,"throw",t)}a(void 0)}))}}h.forEach((function(t){f.forEach((function(e){t.addEventListener(e,v)}))}));var y,m,g,b,w,L,E,k,x=n(757),M=n.n(x),T=function(){function e(n,r,i){t(this,e),this.numeros=document.querySelectorAll(n),this.observerTarget=document.querySelector(r),this.observerClass=i,this.handleMutation=this.handleMutation.bind(this)}return r(e,[{key:"animarNumeros",value:function(){var t=this;this.numeros.forEach((function(e){return t.constructor.incrementarNumero(e)}))}},{key:"handleMutation",value:function(t){t[0].target.classList.contains("active")&&(this.observer.disconnect(),this.animarNumeros())}},{key:"addMutationObserver",value:function(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}},{key:"init",value:function(){this.numeros.length&&this.observerTarget&&this.addMutationObserver()}}],[{key:"incrementarNumero",value:function(t){var e=+t.innerText,n=0,r=setInterval((function(){n++,t.innerText=Math.round(n*(e/100)),+t.innerText>=e&&clearInterval(r)}),30*Math.random())}}]),e}();new i('[data-menu="suave"] a[href^="#"]').init(),new o('[data-anime="accordion"] dt').init(),new a('[data-tab="menu"] li','[data-tab="content"] section').init(),new s('[data-anima="abrir"]','[data-modal="fechar"]','[data-modal="container"]').init(),new u("[data-tooltip]").init(),new c('[data-anime="scroll"]').init(),function(){var t=document.querySelector("[data-menu='button']"),e=document.querySelector("[data-menu='list']"),n=["click","touchstart"];function r(r){r.preventDefault(),t.classList.add("active"),e.classList.add("active"),l(e,n,(function(){t.classList.remove("active"),e.classList.remove("active")}))}t&&n.forEach((function(e){t.addEventListener(e,r)}))}(),m=(y=document.querySelector("[data-dias]")).dataset.horario.split(",").map(Number),g=y.dataset.dias.split(",").map(Number),w=(b=new Date).getHours(),L=b.getDay(),E=w>=m[0]&&w<m[1],k=-1!==g.indexOf(L),E&&k&&y.classList.add("open"),function(t,e){function n(){new T("[data-numero]",".numeros","active").init()}var r=document.querySelector(".numeros-grid");function i(t){var e,n,i=(e=t,(n=document.createElement("div")).classList.add("numero-animal"),n.innerHTML="<h3>".concat(e.specie,"</h3> <span data-numero>").concat(e.total,"</span>"),n);r.appendChild(i)}function o(){return(o=p(M().mark((function e(){var r;return M().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return r=e.sent,e.next=5,r.json();case 5:e.sent.forEach((function(t){return i(t)})),n();case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){o.apply(this,arguments)}()}("../../animais.json"),function(t,e){function n(){return(n=p(M().mark((function n(){var r,i,o,a;return M().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(t);case 2:return r=n.sent,n.next=5,r.json();case 5:i=n.sent,o=document.querySelector(e),a=100/i.BRL.buy,o.innerText=a.toFixed(5);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}("https://blockchain.info/ticker",".btc-price")})()})();