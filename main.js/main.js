(()=>{"use strict";function t(t,e,n){const o="data-outside";function a(c){t.contains(c.target)||(n(),t.removeAttribute(o),e.forEach((t=>{document.documentElement.removeEventListener(t,a)})))}t.hasAttribute(o)||(t.setAttribute(o,""),e.forEach((t=>{setTimeout((()=>document.documentElement.addEventListener(t,a)))})))}const e=document.querySelectorAll("[data-dropdown]"),n=["click","touchstart"];function o(e){e.preventDefault(),this.classList.add("ativo"),t(this,n,(()=>{this.classList.remove("ativo")}))}e.forEach((t=>{n.forEach((e=>{t.addEventListener(e,o)}))})),console.log([].from),console.log(Array.from),async function(t){const e=document.querySelector(".btc-price"),n=await fetch("https://blockchain.info/ticker"),o=100/(await n.json()).BRL.buy;e.innerText=o.toFixed(5)}(),console.log("oi"),function(){const t=document.querySelectorAll("[data-tab='menu'] li"),e=document.querySelectorAll("[data-tab='content'] section");function n(t){e.forEach((t=>{t.classList.remove("active")}));const n=e[t].dataset.anime;e[t].classList.add("active",n)}t.length&&e.length&&(n(0),t.forEach(((t,e)=>{t.addEventListener("click",(()=>{n(e)}))})))}(),function(){const t=document.querySelectorAll("[data-anime='scroll']");t[0].classList.add("active");const e=.6*window.innerHeight;t.length&&window.addEventListener("scroll",(function(){t.forEach((t=>{t.getBoundingClientRect().top-e<0&&t.classList.add("active")}))}))}(),function(){const t=document.querySelectorAll('[data-menu="suave"] a[href^="#"]');function e(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})}t.length&&t.forEach((t=>{t.addEventListener("click",e)}))}(),function(){const t=document.querySelectorAll("[data-anime='accordion'] dt"),e="active";function n(t){t.target.nextElementSibling.classList.toggle(e),t.target.classList.toggle(e)}t.length&&(t[0].classList.add(e),t[0].nextElementSibling.classList.add(e),t.forEach((t=>{t.addEventListener("click",n)})))}(),function(){const t=document.querySelector('[data-anima="abrir"]'),e=document.querySelector('[data-modal="fechar"'),n=document.querySelector('[data-modal="container"]');function o(t){t.preventDefault(),n.classList.toggle("ativo")}t&&e&&n&&(t.addEventListener("click",o),e.addEventListener("click",o),n.addEventListener("click",(function(t){t.target===this&&o(t)})))}(),function(){document.querySelector("[data-tooltip]").addEventListener("mouseover",(function(){const n=function(t){const e=document.createElement("div"),n=t.getAttribute("aria-label");return e.innerText=n,e.classList.add("tooltip"),document.body.appendChild(e),e}(this);this.addEventListener("mousemove",e),e.tooltipBox=n,t.tooltipBox=n,t.element=this,this.addEventListener("mouseleave",t)}));const t={handleEvent(){this.tooltipBox.remove(),this.element.removeEventListener("mouseleave",t),this.element.removeEventListener("mousemove",e)}},e={handleEvent(t){this.tooltipBox.style.top=t.pageY+10+"px",this.tooltipBox.style.left=t.pageX+10+"px"}}}(),function(){const e=document.querySelector("[data-menu='button']"),n=document.querySelector("[data-menu='list']"),o=["click","touchstart"];function a(a){a.preventDefault(),e.classList.add("active"),n.classList.add("active"),t(n,o,(()=>{e.classList.remove("active"),n.classList.remove("active")}))}e&&o.forEach((t=>{e.addEventListener(t,a)}))}(),function(){const t=document.querySelector("[data-dias]"),e=t.dataset.horario.split(",").map(Number),n=t.dataset.dias.split(",").map(Number),o=new Date,a=o.getHours(),c=o.getDay(),i=a>=e[0]&&a<e[1],s=-1!==n.indexOf(c);i&&s&&t.classList.add("open")}(),async function(t){const e=await fetch("animais.json"),n=await e.json(),o=document.querySelector(".numeros-grid");n.forEach((t=>{const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.specie}</h3> <span data-numero>${t.total}</span>`,e}(t);o.appendChild(e)})),function(){const t=Array.from(document.querySelectorAll("[data-numero]"));window.addEventListener("scroll",(function e(){document.querySelector(".numeros").classList.contains("active")&&(window.removeEventListener("scroll",e),function(t){t.forEach((t=>{const e=+t.innerText;let n=0;const o=setInterval((()=>{n++,t.innerText=Math.round(n*(e/100)),+t.innerText>=e&&clearInterval(o)}),30*Math.random())}))}(t))}))}()}()})();