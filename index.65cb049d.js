function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var a=o("iQIUW"),i=o("fZKcF"),d=o("kmrz3"),s=o("6A20M");const l=document.querySelector(".search-form"),c=document.querySelector(".gallery"),u=document.querySelector(".load-more");let f="",h=1,y={};const g=new(e(i))(".gallery a");function m(e){c.insertAdjacentHTML("beforeend",(0,s.default)(e.data.hits)),1===h&&a.Notify.success(`Hooray! We found ${e.data.totalHits} images.`),g.refresh()}function v(e){u.disabled=e,u.textContent=e?"Loading":"Load more"}l.addEventListener("submit",(async function(e){if(e.preventDefault(),f=e.currentTarget.elements.searchQuery.value.trim(),c.innerHTML="",u.classList.add("hidden"),h=1,""===f)return a.Notify.warning("No data to search");try{if(y=await(0,d.default)(f,h),0===y.data.hits.length)return a.Notify.failure("Sorry, there are no images matching your search query. Please try again.");if(y.data.hits.length<40)return u.classList.add("hidden"),void m(y);u.classList.remove("hidden"),v(!0),m(y),v(!1)}catch(e){return a.Notify.info("We're sorry, but you've reached the end of search results.")}})),u.addEventListener("click",(async function(){v(!0),h+=1;try{const e=await(0,d.default)(f,h);e.data.hits.length<40&&(u.classList.add("hidden"),a.Notify.info("We're sorry, but you've reached the end of search results.")),m(e),v(!1);const{height:t}=c.firstElementChild.getBoundingClientRect();window.scrollBy({top:2*t,behavior:"smooth"})}catch(e){u.classList.add("hidden"),a.Notify.info("We're sorry, but you've reached the end of search results.")}}));
//# sourceMappingURL=index.65cb049d.js.map