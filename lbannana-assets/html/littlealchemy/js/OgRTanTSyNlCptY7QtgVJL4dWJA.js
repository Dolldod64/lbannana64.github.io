window.CloudflareApps=window.Eager=window.CloudflareApps||window.Eager||{},window.CloudflareApps=window.CloudflareApps||{},CloudflareApps.siteId="3eb78d9f98cabeb48e6e4632a9e90ef0",CloudflareApps.installs=CloudflareApps.installs||{},function(){"use strict";CloudflareApps.internal=CloudflareApps.internal||{};var e=[];CloudflareApps.internal.placementErrors=e;var t={};function n(n){var a=n.selector+"::"+n.type+"::"+(n.installId||"");t[a]||(t[a]=!0,e.push(n))}var a={},r=!1;CloudflareApps.internal.markSelectors=function(){r||(!function(){var e=window.CloudflareApps.installs;for(var t in e)if(e.hasOwnProperty(t)){var r=e[t].selectors;if(r)for(var o in r)if(r.hasOwnProperty(o)){var d=t+"::"+o;if(!a[d]){var l=document.querySelectorAll(r[o]);l&&l.length>1?(n({type:"init:too-many",option:o,selector:r[o],installId:t}),a[d]=!0):l&&l.length&&(a[d]=!0,l[0].setAttribute("cfapps-selector",r[o]))}}}}(),r=!0,setTimeout((function(){r=!1})))},CloudflareApps.querySelector=function(e){if("body"===e||"head"===e)return document[e];CloudflareApps.internal.markSelectors();var t=document.querySelectorAll('[cfapps-selector="'+e+'"]');return t&&t.length?(t.length>1&&n({type:"select:too-many:by-attribute",selector:e}),t[0]):(n({type:"select:not-found:by-attribute",selector:e}),(t=document.querySelectorAll(e))&&t.length?(t.length>1&&n({type:"select:too-many:by-query",selector:e}),t[0]):(n({type:"select:not-found:by-query",selector:e}),null))}}(),function(){"use strict";var e={};CloudflareApps.createElement=function(t,n){t=t||{},CloudflareApps.internal.markSelectors();try{var a;if(n&&n.parentNode)n.cfAppsElementId&&(a=e[n.cfAppsElementId]),a?(n.parentNode.replaceChild(a,n),delete e[n.cfAppsElementId]):n.parentNode.removeChild(n);var r,o=document.createElement("cloudflare-app");if(t.pages&&t.pages.URLPatterns&&!CloudflareApps.matchPage(t.pages.URLPatterns))return o;try{r=CloudflareApps.querySelector(t.selector)}catch(e){}if(!r)return o;if(!r.parentNode&&("after"===t.method||"before"===t.method||"replace"===t.method))return o;switch(r===document.body&&("after"===t.method?t.method="append":"before"===t.method&&(t.method="prepend")),t.method){case"prepend":if(r.firstChild){r.insertBefore(o,r.firstChild);break}case"append":r.appendChild(o);break;case"after":r.nextSibling?r.parentNode.insertBefore(o,r.nextSibling):r.parentNode.appendChild(o);break;case"before":r.parentNode.insertBefore(o,r);break;case"replace":try{var d=o.cfAppsElementId=Math.random().toString(36);e[d]=r}catch(e){}r.parentNode.replaceChild(o,r)}return o}catch(e){"undefined"!=typeof console&&void 0!==console.error&&console.error("Error creating Cloudflare Apps element",e)}}}(),function(){"use strict";CloudflareApps.matchPage=function(e){if(!e||!e.length)return!0;var t=document.location.host+document.location.pathname;if(window.CloudflareApps&&CloudflareApps.proxy&&CloudflareApps.proxy.originalURL){var n=CloudflareApps.proxy.originalURL.parsed;t=n.host+n.path}for(var a=0;a<e.length;a++){if(new RegExp(e[a],"i").test(t))return!0}return!1}}(),CloudflareApps.installs.oy1J7tbRFjqx={appId:"ynYCifFKSA_0",scope:{}},CloudflareApps.installs.oy1J7tbRFjqx.options={PPLanguage:"en",addCPBanner:!1,addPPBadge:!1,addPPBanner:!1,ppPublicId:"7940122",siteId:"636353"},CloudflareApps.installs.oy1J7tbRFjqx.product={id:"iubenda-legacy"},CloudflareApps.matchPage(CloudflareApps.installs.oy1J7tbRFjqx.URLPatterns)&&function(){"use strict";window._iub=window._iub||[];var e=CloudflareApps.installs.oy1J7tbRFjqx.options,t=e.PPLanguage,n=e.ppPublicId,a=e.siteId;function r(){var r;void 0!==e.addPPBadge?r=e.addPPBadge:void 0!==e.addPPBanner?r=e.addPPBanner:void 0!==e.skip_badge&&(r=!e.skip_badge),r&&n&&!(document.getElementById("iubenda-ibadge")||document.getElementsByClassName("iubenda-ibadge")[0]||document.getElementById("iubenda-embed"))&&function(){var e=document.createElement("a");e.href="https://www.iubenda.com/privacy-policy/"+n,e.className="iubenda-white iubenda-embed no-brand iub-anchor",e.title="Privacy Policy",e.textContent="Privacy Policy",document.body.appendChild(e);var t=document.createElement("script");t.src="https://cdn.iubenda.com/iubenda.js",document.head.appendChild(t)}(),e.addCPBanner&&a&&function(){window._iub.csConfiguration={cookiePolicyId:n,siteId:a,lang:t};var e=document.createElement("script");e.src="https://cdn.iubenda.com/cookie_solution/safemode/iubenda_cs.js",document.head.appendChild(e)}()}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",r):r()}();