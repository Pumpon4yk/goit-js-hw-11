!function(){function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=r.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){n[e]=r},r.parcelRequired7c6=o);var a=o("bpxeT"),s=o("2TvXO"),u=o("h6c0i"),i=o("5IjG7"),c=o("kJ0yB"),l=o("llrIs"),f=document.querySelector(".search-form"),d=document.querySelector(".gallery"),h=document.querySelector(".loader"),p="",y=1,v={},b=new(e(i))(".gallery a");f.addEventListener("submit",(function(e){return w.apply(this,arguments)}));var g=new IntersectionObserver((function(e,r){e.forEach((function(t){if(t.isIntersecting){if(console.log(e),0===v.data.hits.length)return u.Notify.info("We're sorry, but you've reached the end of search results."),r.unobserve(h);!function(){m.apply(this,arguments)}(),N()}}))}),{root:null,rootMargin:"300px",threshold:1});function w(){return(w=e(a)(e(s).mark((function r(t){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),p=t.currentTarget.elements.searchQuery.value.trim(),d.innerHTML="",y=1,v={},N(),window.scrollBy(0,-75),""!==p){e.next=10;break}return N(),e.abrupt("return",u.Notify.warning("No data to search"));case 10:return e.prev=10,e.next=13,(0,c.default)(p,y);case 13:if(0!==(v=e.sent).data.hits.length){e.next=17;break}return N(),e.abrupt("return",u.Notify.failure("Sorry, there are no images matching your search query. Please try again."));case 17:x(v),N(),g.observe(h),e.next=27;break;case 22:return e.prev=22,e.t0=e.catch(10),N(),console.log(e.t0),e.abrupt("return",u.Notify.info("We're sorry, but you've reached the end of search results."));case 27:case"end":return e.stop()}}),r,null,[[10,22]])})))).apply(this,arguments)}function x(e){1===y&&u.Notify.success("Hooray! We found ".concat(e.data.totalHits," images.")),d.insertAdjacentHTML("beforeend",(0,l.default)(e.data.hits)),b.refresh()}function m(){return(m=e(a)(e(s).mark((function r(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y+=1,e.prev=1,e.next=4,(0,c.default)(p,y);case 4:x(v=e.sent),N(),e.next=14;break;case 9:return e.prev=9,e.t0=e.catch(1),N(),g.unobserve(h),e.abrupt("return",u.Notify.info("We're sorry, but you've reached the end of search results."));case 14:case"end":return e.stop()}}),r,null,[[1,9]])})))).apply(this,arguments)}function N(){return h.classList.contains("is-hidden")?h.classList.remove("is-hidden"):h.classList.add("is-hidden")}}();
//# sourceMappingURL=gallery_infinite-scroll.4eb34949.js.map
