import{a}from"./assets/vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();class i{constructor(){this.baseURL="https://your-energy.b.goit.study/api/",this.page=0}resetPage(){this.page=0}async getExercises(e,s){try{return this.page+=1,(await a.get(`${this.baseURL}exercises?${e}=${s}&page=1&limit=10`)).data.results}catch(o){console.log(o)}}async getExercisesById(e){try{return this.page+=1,(await a.get(`${this.baseURL}exercises/${e}`)).data}catch(s){console.log(s)}}async getFilter(e){try{return(await a.get(`${this.baseURL}filters?filter=${e}`)).data.results}catch(s){console.log(s)}}async getQuote(){try{return this.page+=1,(await a.get(`${this.baseURL}quote`)).data}catch(e){console.log(e)}}async patchRating(e,s){try{return this.page+=1,(await a.patch(`${this.baseURL}exercises/${e}/rating`,s)).data}catch(o){console.log(o)}}async postSubscriptions(e){try{return this.page+=1,(await a.post(`${this.baseURL}subscription`,e)).data}catch(s){console.log(s)}}}const l=document.querySelector(".js-quote"),u=new i;p();async function p(){try{const n=await u.getQuote();g(n)}catch(n){console.log(n)}}function g({author:n,quote:e}){l.innerHTML=`
  <p class="quote__text">${e}</p>
  <h4 class="quote__author">${n}</h4>
    `}
//# sourceMappingURL=commonHelpers.js.map