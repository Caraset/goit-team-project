parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"yOlU":[function(require,module,exports) {
(()=>{const e={openModalList:document.querySelector("[data-photos-list]"),modal:document.querySelector("[data-gallery-modal]"),modalGalleryList:document.querySelector("[data-gallery-list]"),targetsBigImages:document.querySelectorAll("[data-gallery-image]"),belowFoldItems:document.querySelectorAll("[data-li-below-fold]"),belowFoldImages:document.querySelectorAll("[data-photos-below-fold]"),galleryModalItems:document.querySelectorAll("[data-gallery-item]"),targets:document.querySelectorAll("[data-photos-lazy]"),galleryNextBtn:document.querySelector("[data-gallery-next]"),galleryBackBtn:document.querySelector("[data-gallery-back]"),svgLoaderWrapper:document.querySelector("[data-photos-loader]")},t=document.querySelector(".more-photos__list");t.addEventListener("click",e=>{console.dir(e.target.parentElement.children[0].attributes)});const l=t.childNodes;console.log(l);const a=l.map(e=>e);console.log(a);const o=t=>{new IntersectionObserver((t,l)=>{t.forEach(t=>{if(t.isIntersecting){const a=t.target;a.setAttribute("src","#"),t.target.closest("[data-gallery-list]")!==e.modalGalleryList&&a.classList.add("appear"),a.hasAttribute("data-photos-below-fold")&&a.removeAttribute("data-photos-below-fold"),l.disconnect()}})}).observe(t)};setTimeout(()=>{e.targets.forEach(o)},250);const s=t=>{t.currentTarget==e.openModalList&&e.modal.classList.contains("is-hidden")&&e.targetsBigImages.forEach(o),setTimeout(()=>{e.openModalList.removeEventListener("click",s)},250)};e.openModalList.addEventListener("click",s),function(t){t.matches&&e.svgLoaderWrapper.addEventListener("click",t=>{if(t.target===svgLoaderWrapper)for(let l=2;l>=0;l--){const t=e.belowFoldItems[l],a=e.belowFoldImages[l];t.classList.contains("is-hidden")&&(a(o),t.hasAttribute("data-li-below-fold")&&t.removeAttribute("data-li-below-fold")),t.classList.remove("is-hidden")}})}(window.matchMedia("(max-width: 767px)")),e.galleryNextBtn.addEventListener("click",()=>{for(let t=0;t<e.galleryModalItems.length;t++){const l=e.galleryModalItems[t];if(l.classList.contains("current-slide")){l.classList.toggle("current-slide"),l.classList.toggle("is-hidden");let a=0;return(a=t===e.galleryModalItems.length-1?e.galleryModalItems[0]:e.galleryModalItems[t+1]).classList.toggle("is-hidden"),void a.classList.toggle("current-slide")}}}),e.galleryBackBtn.addEventListener("click",()=>{for(let t=e.galleryModalItems.length-1;t>=0;t--){const l=e.galleryModalItems[t];if(l.classList.contains("current-slide")){l.classList.toggle("current-slide"),l.classList.toggle("is-hidden");let a=0;return(a=0===t?e.galleryModalItems[e.galleryModalItems.length-1]:e.galleryModalItems[t-1]).classList.toggle("is-hidden"),void a.classList.toggle("current-slide")}}})})();
},{}]},{},["yOlU"], null)
//# sourceMappingURL=/goit-team-project/more-photos.2b7bda17.js.map