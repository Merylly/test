import{a,P as f}from"./assets/vendor-90aadca8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();a.defaults.baseURL="https://energyflow.b.goit.study/api";document.querySelector(".switch-list");const p=document.querySelector(".exercises-list"),d=document.querySelector(".exercises-page");let g=8;async function m({filter:s,page:o=1,limit:n=12,type:t}){try{return(await a.get(`/${t}`,{params:{filter:s,page:o,limit:n}})).data}catch{console.error("n")}}async function y(){try{const s=await m({type:"filters",filter:"Muscles",limit:g}).then(o=>{const{page:n,totalPages:t,results:e}=o;p.innerHTML=h(e),d.innerHTML=l(n,t)})}catch{}}y();function h(s){return s.map(({name:n,filter:t,imgUrl:e})=>`<li class="exercises-item">
              <a class="exercises-link" href=""
                ><div class="image-container">
                  <img class="exercises-image" src="${e}"/>
                  <div class="text-container">
                    <h3 class="exercises-title">${n}</h3>
                    <p class="exercises-text">${t}</p>
                  </div>
                </div>
              </a>
            </li>`).join()}function l(s,o){let n="";for(let t=1;t<=o;t+=1)n+=`<button class="page active-page">${i}</button>`;return n}console.log(l());const u=new f("pagination",{totalItems:500});u.on("beforeMove",function(s){return confirm("Go to page "+s.page+"?")});u.on("afterMove",function(s){alert("The current page is "+s.page)});
//# sourceMappingURL=commonHelpers.js.map
