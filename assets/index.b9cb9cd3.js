const u=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}};u();var d="/assets/qr-logo-error.02a2e4e0.png",f="/assets/qr-logo.bf5200f5.png";const t=document.getElementById("app"),a=document.querySelector("form"),i=document.getElementById("qr-input");t.innerHTML=`<img src="${f}" alt="qr code">`;a.addEventListener("submit",s=>{s.preventDefault(),t.innerHTML="",i.value!==""?new QRCode(t,i.value):t.innerHTML=`<img src="${d}" alt="qr code error">`,i.value=""});