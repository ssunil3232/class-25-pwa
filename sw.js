if(!self.define){let e,i={};const c=(c,n)=>(c=new URL(c+".js",n).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const a=e=>c(e,s),d={module:{uri:s},exports:o,require:a};i[s]=Promise.all(n.map((e=>d[e]||a(e)))).then((e=>(r(...e),o)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"c43cd371a49ee4ca17ab3a60e72bdd51"},{url:"assets/index-AydG4Cmu.css",revision:null},{url:"assets/index-hQ1bmPE-.js",revision:null},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"images/test.png",revision:"12e5cbbb63024460755560bb7e03f0a4"},{url:"index.html",revision:"d44080e9479d77ca74c29e789f0e2bc6"},{url:"masked-icon.svg",revision:"4e857233cbd3bb2d2db4f78bed62a52f"},{url:"pwa-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"pwa-512x512.png",revision:"0ff1bc4d14e5c9abcacba7c600d97814"},{url:"registerSW.js",revision:"079ec3eb51974c934125a2a217134007"},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"apple-touch-icon.png",revision:"c43cd371a49ee4ca17ab3a60e72bdd51"},{url:"masked-icon.svg",revision:"4e857233cbd3bb2d2db4f78bed62a52f"},{url:"pwa-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"pwa-512x512.png",revision:"0ff1bc4d14e5c9abcacba7c600d97814"},{url:"manifest.webmanifest",revision:"bcfb95ea9a8ac6f34cd9c03fc8cb71af"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
