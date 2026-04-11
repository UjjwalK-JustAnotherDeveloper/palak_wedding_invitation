/*
 * ╔══════════════════════════════════════════════════════════════╗
 * ║       Palak & Shubham Wedding — script.js                    ║
 * ║  PART 1 · Tilda Library JS (all CDN files inlined)          ║
 * ║  PART 2 · Per-section block initialisers                    ║
 * ║  PART 3 · Custom — Music + RSVP (Google Sheets)            ║
 * ║  ► Change music  → search vpBackgroundAudio               ║
 * ║  ► RSVP Sheets  → search VP_SHEET_URL                      ║
 * ║  ► Countdown    → search eventLocal=new Date               ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

/* ════════════════════════════════════════════════════════════
   PART 1 — TILDA LIBRARY JS
   ════════════════════════════════════════════════════════════ */
try {
 
/* === tilda-fallback === */
function t_fallback__init(){t_fallback__initTags("LINK"),t_fallback__initTags("SCRIPT"),"loading"!=document.readyState?t_fallback__initTags("IMG"):document.addEventListener("DOMContentLoaded",(function(){t_fallback__initTags("IMG")}))}function t_fallback__initTags(t){var a=document.querySelectorAll(t);Array.prototype.forEach.call(a,(function(a){"set"!==a.isReloadFuncSet&&(a.onerror=function(){t_fallback__reloadSRC(this),this.isReloadFuncSet="set"}),"y"===a.loaderr&&(a.loaderr="",t_fallback__reloadSRC(a)),"IMG"==t&&a.complete&&0===a.naturalWidth&&""!==a.src&&t_fallback__reloadSRC(a)}))}function t_fallback__reloadSRC(t){"function"==typeof t_falladv__reloadSRC?t_falladv__reloadSRC(t):(t_fallback__loadAdvancedJS(),setTimeout((function(){t_fallback__reloadSRC(t)}),500))}function t_fallback__handleTimeout(){"loading"==document.readyState&&"object"==typeof window.performance&&null!==document.head.querySelector('script[src^="https://static.tildacdn."]')&&(t_fallback__loadAdvancedJS(),setTimeout((function(){"function"==typeof t_falladv__handleDomTimeOut?t_falladv__handleDomTimeOut():t_fallback__handleTimeout()}),500))}function t_fallback__loadAdvancedJS(){if(!0!==window.t_isfalladvstartload){window.t_isfalladvstartload=!0;var t=new XMLHttpRequest;t.open("GET","https://neo.tildacdn.com/js/tilda-fallback-advanced-1.0.min.js",!0),t.onreadystatechange=function(){if(4==t.readyState&&200==t.status){var a=document.createElement("script");a.innerHTML=t.responseText,document.head.appendChild(a)}},t.send()}}t_fallback__init(),document.addEventListener("DOMContentLoaded",t_fallback__init),setTimeout(t_fallback__handleTimeout,3e4),setTimeout((function(){var t=document.getElementById("allrecords");if(t&&!t.classList.contains("t-records_animated")){var a=document.createElement("style");a.type="text/css",a.innerHTML="div.t-records {opacity: 1;}",document.getElementsByTagName("head")[0].appendChild(a)}}),5e3);

/* === tilda-scripts === */
function t_onReady(t){"loading"!=document.readyState?t():document.addEventListener("DOMContentLoaded",t)}function t_addClass(t,e){document.body.classList?t.classList.add(e):t.className+=(t.className?" ":"")+e}function t_removeClass(t,e){document.body.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\s+)"+e+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")}function t_removeEl(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function t_outerWidth(t){var e=getComputedStyle(t),n=e.width,o=e.marginLeft,i=e.marginRight;return"auto"===n&&(n=0),"auto"===o&&(o=0),"auto"===i&&(i=0),n=parseInt(n)+parseInt(o)+parseInt(i)}var version,version;(window.isSearchBot=!1,/Bot/i.test(navigator.userAgent)&&(window.isSearchBot=!0),window.isMobile=!1,window.$isMobile=!1,/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(window.isMobile=!0,window.$isMobile=!0),window.isTablet=/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/i.test(navigator.userAgent),window.isiOS=!1,/iPhone|iPad|iPod/i.test(navigator.userAgent)&&(window.isiOS=!0),window.isiOSChrome=!!navigator.userAgent.match("CriOS"),window.isFirefox=/firefox/i.test(navigator.userAgent),window.isOpera=!!window.opr&&!!window.opr.addons||!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0,window.isiOSVersion="",window.isiOS)&&(null!==(version=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/))&&(window.isiOSVersion=[parseInt(version[1],10),parseInt(version[2],10),parseInt(version[3]||0,10)]));(window.isSafari=!1,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&(window.isSafari=!0),window.isIE=!!document.documentMode,window.isSafariVersion="",window.isSafari)&&(null!==(version=navigator.appVersion.match(/Version\/(\d+)\.(\d+)\.?(\d+)? Safari/))&&(window.isSafariVersion=[parseInt(version[1],10),parseInt(version[2],10),parseInt(version[3]||0,10)]));function t_throttle(t,e,n){var o,i;return e||(e=250),function(){var r=n||this,a=+new Date,l=arguments;o&&a<o+e?(clearTimeout(i),i=setTimeout((function(){o=a,t.apply(r,l)}),e)):(o=a,t.apply(r,l))}}function t_onFuncLoad(t,e,n){var o=15e3,i=t_checkIsEditMode(),r=function t(){return!i||i&&t_checkEditorIsReady()},a=function t(e){return"function"==typeof window[e]||"object"==typeof window[e]};if(a(t)&&r())e();else{var l=Date.now(),d=new Error(t+" is undefined"),s=function t(){throw d};setTimeout((function i(){var d=Date.now();a(t)&&r()?e():("complete"===document.readyState&&d-l>o&&!a(t)&&s(),setTimeout(i,n||100))}))}}function t_checkIsEditMode(){var t=!1,e=document.getElementById("allrecords");if(!e)return!1;var n=e.getAttribute("data-tilda-mode");return!!(t=n&&"edit"===n)}function t_checkEditorIsReady(){var t=!1;if(!t_checkIsEditMode())return!1;var e=document.body.getAttribute("data-ready-status");return!!(t=e&&"ready"===e)}function t_scrollBarWidthCompensator__setObject(){window.scrollBarWidthCompensator={};var t=window.scrollBarWidthCompensator;t.isInited=!1,t.scrollBarWidth=Math.abs(window.innerWidth-document.documentElement.clientWidth),t.delay=0,t.cancelTimeout=null;var e=["t450","t282__container","t282__container__bg_opened","t282__menu__container","t830m","t830__panel","t451m","t204__menu","tn-atom__sbs-anim-wrapper"],n=document.querySelectorAll("*");n=Array.prototype.filter.call(n,(function(t){return!t.closest(".t1093")&&!e.some((function(e){return t.classList.contains(e)}))})),t.fixedElements=[],Array.prototype.forEach.call(n,(function(e){if(!e.classList.contains("t975")){var n=window.getComputedStyle(e),o=n.getPropertyValue("position"),i=n.getPropertyValue("width"),r=n.getPropertyValue("height"),a="100%"===i||i===window.innerWidth+"px"||i===window.innerWidth-t.scrollBarWidth+"px"||"100vw"===i,l="100%"===r||r===window.innerHeight+"px"||r===window.innerHeight-t.scrollBarWidth+"px"||"auto"===r||"100vh"===r;("fixed"===o||"absolute"===o&&a&&!l)&&t.fixedElements.push({el:e,computedStyle:n})}}))}function t_scrollBarWidthCompensator__init(){if(!window.isMobile){window.scrollBarWidthCompensator||t_scrollBarWidthCompensator__setObject();var t=window.scrollBarWidthCompensator;if(t.scrollBarWidth=Math.abs(window.innerWidth-document.documentElement.clientWidth),t.cancelTimeout&&(window.clearTimeout(t.cancelTimeout),t.cancelTimeout=null),!t.isInited&&t.scrollBarWidth){t.isInited=!0;var e=window.getComputedStyle(document.body).getPropertyValue("padding-right");e=parseInt(e.replace("px",""),10);var n=document.body.style.paddingRight;n&&document.body.setAttribute("data-tilda-initial-padding-right",n),document.body.style.paddingRight=t.scrollBarWidth+e+"px",document.body.style.height="100vh",document.body.style.minHeight="100vh",document.body.style.overflow="hidden";var o=[];Array.prototype.forEach.call(t.fixedElements,(function(e){var n=e.el;if(document.body.contains(n)&&!n.classList.contains("t975")&&!n.classList.contains("t975")){var i=e.computedStyle,r=i.getPropertyValue("position");if("fixed"===r||"absolute"===r){var a=i.getPropertyValue("transition-duration");a.indexOf("ms")+1?(a=parseInt(a.replace("ms",""),10),o.push(a)):a.indexOf("s")+1&&(a=1e3*parseFloat(a.replace("s","")),o.push(a));var l=i.getPropertyValue("right");l=parseInt(l.replace("px",""),10);var d=i.getPropertyValue("width"),s=i.getPropertyValue("height"),c=n.style.right;c&&n.setAttribute("data-tilda-initial-right",c);var u=n.style.width;u&&n.setAttribute("data-tilda-initial-width",u);var m="100%"===d||d===window.innerWidth+"px"||d===window.innerWidth-t.scrollBarWidth+"px"||"100vw"===d,p="100%"===s||s===window.innerHeight+"px"||s===window.innerHeight-t.scrollBarWidth+"px"||"auto"===s||"100vh"===s;!l&&0!==l||"auto"===n.style.right||"absolute"===r||m?m&&!p&&(n.style.width="calc(100vw - "+t.scrollBarWidth+"px)"):n.style.right=t.scrollBarWidth+l+"px"}}})),o.length&&(t.delay=Math.max.apply(null,o))}}}function t_scrollBarWidthCompensator__cancel(){var t=window.scrollBarWidthCompensator;t&&t.isInited&&(t.isInited=!1,t.delay=0,document.body.hasAttribute("data-tilda-initial-padding-right")?(document.body.style.paddingRight=document.body.getAttribute("data-tilda-initial-padding-right"),document.body.removeAttribute("data-tilda-initial-padding-right")):document.body.style.removeProperty("padding-right"),document.body.style.removeProperty("height"),document.body.style.removeProperty("min-height"),document.body.style.removeProperty("overflow"),Array.prototype.forEach.call(t.fixedElements,(function(t){var e=t.el,n=e.classList.contains("tn-atom__sticky-wrapper")||e.classList.contains("tn-atom__sbs-anim-wrapper");e.hasAttribute("data-tilda-initial-right")?(e.style.right=e.getAttribute("data-tilda-initial-right"),e.removeAttribute("data-tilda-initial-right")):e.style.removeProperty("right"),e.hasAttribute("data-tilda-initial-width")?(e.style.width=e.getAttribute("data-tilda-initial-width"),e.removeAttribute("data-tilda-initial-width")):(e.style.removeProperty("width"),n&&(e.style.width="inherit"))})))}function t_triggerEvent(t,e){var n;document.createEvent?(n=document.createEvent("HTMLEvents")).initEvent(e,!0,!1):document.createEventObject&&((n=document.createEventObject()).eventType=e),n.eventName=e,t.dispatchEvent?t.dispatchEvent(n):t.fireEvent?t.fireEvent("on"+n.eventType,n):t[e]?t[e]():t["on"+e]&&t["on"+e]()}function t_getRootZone(){var t=document.getElementById("allrecords"),e;return t&&t.getAttribute("data-tilda-root-zone")||"com"}function t_modifyRootZone(t){return t&&t.includes("static.tildacdn.com")?t.replace("static.tildacdn.com","static.tildacdn."+t_getRootZone()):t}function t_loadJsFile(t,e,n){void 0===n&&(n=0);var o=3,i=1e3,r=t_modifyRootZone(t);if(document.querySelector('script[src^="'+r+'"]'))e&&e();else{var a=document.createElement("script");a.type="text/javascript",a.src=r,e&&a.addEventListener("load",(function(){e()})),a.addEventListener("error",(function(t){if(!(n<=3)){var o=t.message||"<no error message>";throw new Error("Failed to load "+r+" script: "+o,{cause:t})}setTimeout((function(){a.remove(),t_loadJsFile(r,e,n+1),console.warn("Retrying to load "+r+". Retry: "+(n+1))}),n*i)})),document.head.appendChild(a)}}function t_loadCSSFile(t,e,n){void 0===n&&(n=0);var o=3,i=1e3,r=t_modifyRootZone(t);if(document.querySelector('link[href^="'+r+'"]'))e&&e();else{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.media="all",a.href=r,a.crossOrigin="anonymous",e&&a.addEventListener("load",e),a.addEventListener("error",(function(t){if(!(n<=3)){var o=t.message||"<no error message>";throw new Error("Failed to load "+r+" style: "+o,{cause:t})}setTimeout((function(){a.remove(),t_loadCSSFile(r,e,n+1),console.warn("Retrying to load "+r+". Retry: "+(n+1))}),n*i)})),document.head.appendChild(a)}}function t_scrollTo(t,e){if(t){var n=e||{},o=n.useNativeScrollTo,i=n.duration,r=n.behavior,a=void 0===r?"instant":r,l=n.offset,d=void 0===l?0:l,s=Math.max(parseInt(t.getBoundingClientRect().top+window.scrollY-d,10),0);o||"instant"===a?window.scrollTo({left:0,top:s,behavior:a}):t_smoothScrollTo(s,i)}}function t_smoothScrollTo(t,e){void 0===e&&(e=500);var n=document.body,o=window.scrollY||window.pageYOffset,i=t-o,r=performance.now();function a(t){return Math.pow(t,2)}function l(){var d=performance.now(),s=Math.min((d-r)/e,1),c=a(s);window.scrollTo(0,o+i*c),s<1?requestAnimationFrame(l):(n.removeAttribute("data-scroll"),n.removeAttribute("data-scrollable"),window.scrollTo(0,t))}n.setAttribute("data-scroll","true"),n.setAttribute("data-scrollable","true"),requestAnimationFrame(l)}window.browserLang=(window.navigator.userLanguage||window.navigator.language).toUpperCase().slice(0,2),window.tildaBrowserLang=window.browserLang,t_onReady((function(){var t=document.getElementById("allrecords");if(t)var e=t.getAttribute("data-tilda-project-lang");e&&(window.browserLang=e)})),t_onReady((function(){var t=window.navigator.userAgent,e=-1!==t.indexOf("Instagram"),n=-1!==t.indexOf("FBAV"),o=-1!==t.indexOf("YaSearchBrowser"),i=-1!==t.indexOf("SamsungBrowser"),r=-1!==t.indexOf("DuckDuckGo"),a;if(-1!==t.indexOf("Android")&&(n||e||o||i||r)){var l=document.createElement("p");l.style.lineHeight="100px",l.style.padding="0",l.style.margin="0",l.style.height="auto",l.style.position="absolute",l.style.opacity="0.001",l.innerText="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",document.body.appendChild(l);var d=100/l.getBoundingClientRect().height;l.parentNode.removeChild(l),d<.98&&document.body.insertAdjacentHTML("beforeend",'<style>.t396 [data-elem-type="text"] .tn-atom {zoom: '+100*d+"%;}</style>")}window.isiOS&&!window.MSStream&&(document.body.style.setProperty("-webkit-text-size-adjust","100%"),document.body.style.setProperty("text-size-adjust","100%"))})),t_onReady((function(){setTimeout((function(){var t=document.querySelector("html"),e=document.querySelector(".t-tildalabel"),n=t.offsetHeight;if(document.body&&(n=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.body.clientHeight,t.offsetHeight)),(document.getElementById("tildacopy")||e)&&e.querySelectorAll("div"))n+70>window.innerHeight&&e&&e.setAttribute("style","display: block !important; visibility: visible !important; position: relative !important; width: 100% !important; pointer-events: all !important; opacity: 1 !important; margin: 0 !important; z-index: 1 !important");else{for(var o=document.body.childNodes,i=[],r=0;r<o.length;r++){var a=o[r];8===a.nodeType&&i.push(a)}for(var r=0;r<i.length;r++)-1!==i[r].nodeValue.indexOf("'t remove this l")&&document.getElementById("allrecords").insertAdjacentHTML("afterend",'<div class="t-tildalabel t-tildalabel-free" style="display: block !important; visibility: visible !important; position: relative !important; width: 100% !important; pointer-events: all !important; opacity: 1 !important; margin: 0 !important; z-index: 99900 !important"><div class="t-tildalabel-free__main"><a href="https://tilda.cc" target="_blank" style="padding-bottom:12px; display: block;"><img style="width:40px;" src="https://static.tildacdn.'+t_getRootZone()+'/img/tildacopy.png"></a><div style="padding-bottom: 15px;">This site was made on <a href="https://tilda.cc" target="_blank" style="text-decoration: none; color:inherit;">Tilda — a website builder</a> that helps to&nbsp;create a&nbsp;website without any code</div><a href="https://tilda.cc/registration/" target="_blank" style="display: inline-block; padding: 10px 20px; font-size: 13px; border-radius: 50px; background-color: #fa8669; color: #fff; text-decoration: none;">Create a website</a></div><div class="t-tildalabel-free__links-wr"><a class="t-tildalabel-free__txt-link" href="https://help'+("RU"===window.browserLang?"-ru":"")+'.tilda.cc/white-label" target="_blank">'+("RU"===window.browserLang?"Как удалить этот лейбл":"How to remove this block")+"?</a></div></div>")}}),500)})),t_onReady((function(){var t=document.getElementById("allrecords");if(!window.isMobile&&t&&"yes"!==t.getAttribute("data-blocks-animationoff")&&!1===window.isSearchBot){for(var e=document.querySelectorAll(".r"),n=0;n<e.length;n++){var o,i=(o=e[n]).getAttribute("style");i&&-1!==i.indexOf("background-color")&&o.setAttribute("data-animationappear","off")}for(var r=Array.prototype.slice.call(e).filter((function(t){return!t.getAttribute("data-animationappear")&&!t.getAttribute("data-screen-min")&&!t.getAttribute("data-screen-max")})),n=0;n<r.length;n++){var o,a=(o=r[n]).getBoundingClientRect().top+window.pageYOffset,l=window.pageYOffset+window.innerHeight+300;t_addClass(o,a>1e3&&a>l?"r_hidden":"r_showed"),t_addClass(o,"r_anim")}if(r.length){function d(){for(var t=r.length-1;t>=0;t--){var e=r[t],n,o=0;e.getBoundingClientRect().top+window.pageYOffset<(o=e.offsetHeight<=100?window.pageYOffset+window.innerHeight:window.pageYOffset+window.innerHeight-100)&&(t_removeClass(e,"r_hidden"),t_addClass(e,"r_showed"),(r=Array.prototype.slice.call(r)).splice(t,1))}}var s=document.querySelectorAll('[data-record-type="400"], [data-parenttplid="400"]');if(s.length>0)var c=0,u=0,m=setInterval((function(){300===(u+=1)&&clearInterval(m);for(var t=0;t<s.length;t++){var e;"yes"===s[t].getAttribute("data-hiding-completed")&&(c+=1)}c===s.length&&(d(),clearInterval(m))}),100);window.addEventListener("scroll",t_throttle((function(){d()}),200)),window.addEventListener("tildatab:change",t_throttle((function(){d()}),200)),setTimeout((function(){d()}))}}var p=document.querySelector("html"),h=document.body;"none"===p.style.display&&(p.style.display="block");var w=document.querySelector(".t-tildalabel"),f;(f=h?Math.max(h.scrollHeight,h.offsetHeight,h.clientHeight,p.offsetHeight):p.offsetHeight)+70<window.innerHeight?w&&(w.style.display="none"):w&&w.setAttribute("style","display: block !important")})),function(){function t(){window.winWidth=window.innerWidth,window.winHeight=window.innerHeight}function e(){var t=window.isMobile?document.documentElement.clientWidth:window.innerWidth,e=document.querySelectorAll(".r[data-screen-max], .r[data-screen-min]"),n,o,i;-1!==navigator.userAgent.indexOf("Instagram")&&(t=screen.width);for(var r=0;r<e.length;r++){var a=e[r],l=a.id.replace("rec","");if("yes"===a.getAttribute("data-connect-with-tab")||document.querySelector('[data-popup-rec-ids="'+l+'"]'))return;i=getComputedStyle(a).display,(n=a.getAttribute("data-screen-max"))||(n=1e4),(o=a.getAttribute("data-screen-min"))||(o=0),n=parseInt(n),(o=parseInt(o))<=n&&(t<=n&&t>o?"block"!==i&&(a.style.display="block"):"none"!==i&&(a.style.display="none"))}}t_onReady((function(){t(),e(),window.addEventListener("resize",t_throttle((function(){t()}),200)),window.addEventListener("resize",t_throttle((function(){e()}),200))}))}(),function(){var t=-1!==navigator.userAgent.indexOf("Instagram");function e(){for(var t=document.querySelectorAll(".t-cover__carrier"),e=0,n=0;n<t.length;n++){var o,i;if((i=(o=t[n]).style).height.indexOf("vh")>-1){e=parseInt(i.height,10)/100;var r=document.createElement("div");r.id="tempDiv",r.style.cssText="position:absolute;top:0;left:0;width:100%;height:100vh;visibility:hidden;",document.body.appendChild(r);var a=document.getElementById("tempDiv"),l=parseInt(getComputedStyle(a).height.replace("px",""));t_removeEl(a);var d=Math.round(l*e)+"px",s=o.closest(".t-cover");if(s){var c=s.querySelector(".t-cover__filter"),u=s.querySelector(".t-cover__wrapper");s.style.height=d,c&&(c.style.height=d),u&&(u.style.height=d)}i.height=d}}var m=document.querySelectorAll("[data-height-correct-vh]"),p=window.innerHeight;e=0;for(var n=0;n<m.length;n++){var o,i;(i=(o=m[n]).style).height.indexOf("vh")>-1&&(e=parseInt(i.height)/100,d=p*(isNaN(e)?1:e)+"px",i.height=d)}}function n(){var e=t?screen.width:window.innerWidth;window.isMobile&&!t&&(e=document.documentElement.clientWidth);for(var n=document.querySelectorAll('.r:not([data-record-type="396"], [data-record-type="1003"], [data-parenttplid="396"], [data-parenttplid="1003"])'),o=[],i=0;i<n.length;i++){var r=n[i],a=getComputedStyle(r);"none"!==a.display&&"hidden"!==a.visibility&&"0"!==a.opacity&&o.push(r)}for(var l=0;l<o.length;l++)for(var d=o[l],s=d.querySelectorAll('div:not([data-auto-correct-mobile-width="false"]):not(.tn-elem):not(.tn-atom):not(.tn-atom__sbs-anim-wrapper):not(.tn-atom__prx-wrapper):not(.tn-atom__videoiframe):not(.tn-atom__sticky-wrapper):not(.t-catalog__relevants__container):not(.t-slds__items-wrapper):not(.js-product-controls-wrapper):not(.t-store__relevants__container):not(.t-slds__items-wrapper):not(.js-product-controls-wrapper):not(.js-product-edition-option):not(.t-product__option-variants)'),c=0;c<s.length;c++){var u=s[c];d.style.wordBreak="";var m=t_outerWidth(u);if(m>e){if("yes"===u.getAttribute("[data-customstyle]")&&"false"===u.parentNode.getAttribute("[data-auto-correct-mobile-width]"))return;console.log("Block not optimized for mobile width. Block width:"+m+" Block id:"+d.getAttribute("id")),console.log(u),d.style.overflow="auto",d.style.wordBreak=m-3>e?"break-word":""}}}function o(t){for(var e=document.querySelectorAll('.t-text:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-name:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-title:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-descr:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-heading:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-text-impact:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-subtitle:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-uptitle:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"])'),n=0;n<e.length;n++){var o=e[n],i=o.getAttribute("style");if(i){var r="rem"===o.getAttribute("data-auto-correct-font-size"),a;if(document.documentElement.clientWidth>t)a=(a=i.replace("lineheight","line-height")).replace("fontsize","font-size"),o.setAttribute("style",a);else{if(-1===i.indexOf("font-size"))continue;if(parseInt(getComputedStyle(o).fontSize.replace("px",""))<26)continue;a=i.replace("line-height","lineheight"),a=r?a.replace(/font-size.*px;/gi,"font-size: 1.6rem;"):a.replace("font-size","fontsize"),o.setAttribute("style",a)}}}}(window.isMobile||window.parent.isPagePreview)&&(t_onReady((function(){setTimeout(e,400)})),window.addEventListener("load",(function(){setTimeout(e,400)})),window.innerWidth<480||window.isMobile&&document.documentElement.clientWidth<480||t&&screen.width<480?(t_onReady((function(){for(var t=document.querySelectorAll('[data-customstyle="yes"]'),e=document.querySelectorAll("[field] span, [field] strong, [field] em, [field] a"),n=0;n<t.length;n++){var i=t[n];parseInt(getComputedStyle(i).fontSize.replace("px",""))>26&&(i.style.fontSize=null,i.style.lineHeight=null)}for(var n=0;n<e.length;n++){var i=e[n];parseInt(getComputedStyle(i).fontSize.replace("px",""))>26&&(i.style.fontSize=null)}o(480),window.addEventListener("orientationchange",(function(){setTimeout((function(){o(480)}),500)}))})),window.addEventListener("load",n),window.addEventListener("orientationchange",(function(){setTimeout((function(){n()}),500)}))):(window.innerWidth<900||window.isMobile&&document.documentElement.clientWidth<900||t&&screen.width<900)&&t_onReady((function(){for(var t=document.querySelectorAll('[data-customstyle="yes"]'),e=document.querySelectorAll("[field] span, [field] strong, [field] em, [field] a"),n=0;n<t.length;n++){var o=t[n];parseInt(getComputedStyle(o).fontSize.replace("px",""))>30&&(o.style.fontSize=null,o.style.lineHeight=null)}for(var n=0;n<e.length;n++){var o=e[n];parseInt(getComputedStyle(o).fontSize.replace("px",""))>30&&(o.style.fontSize=null)}for(var i=document.querySelectorAll('.t-text:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-name:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-title:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-descr:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-heading:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-text-impact:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-subtitle:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-uptitle:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"])'),n=0;n<i.length;n++){var o,r=(o=i[n]).getAttribute("style");if(r&&r.indexOf("font-size")>-1&&parseInt(getComputedStyle(o).fontSize.replace("px",""))>30)if("rem"===o.getAttribute("data-auto-correct-font-size")){var a=r.replace(/font-size.*px;/gi,"font-size: 1.6rem;").replace("line-height","lineheight");o.setAttribute("style",a)}else{var a=r.replace("font-size","fontsize").replace("line-height","lineheight");o.setAttribute("style",a)}}})))}(),t_onReady((function(){setTimeout((function(){for(var t=document.querySelectorAll('a[href^="http"][target="_blank"]'),e=0;e<t.length;e++){var n=t[e],o=n.getAttribute("rel")||"";""===o?n.setAttribute("rel","noopener"):-1===o.indexOf("noopener")&&n.setAttribute("rel",o+" noopener")}}),2500)})),function(t,e){t.onerror=function(e,n,o,i,r){"object"!=typeof t.t_jserrors&&(t.t_jserrors=[]),t.t_jserrors.push({message:e,filename:n,lineno:o,colno:i,error:r})}}(window,Math),t_onReady((function(){document.body.addEventListener("popupShowed",t_scrollBarWidthCompensator__init),document.body.addEventListener("popupHidden",(function(){var t=window.scrollBarWidthCompensator;t&&(t.cancelTimeout&&(window.clearTimeout(t.cancelTimeout),t.cancelTimeout=null),t.cancelTimeout=window.setTimeout((function(){t.cancelTimeout=null,t_scrollBarWidthCompensator__cancel()}),Math.min(300,t.delay)))}))})),window.scrollBarWidthCompensator;


/* === tilda-blocks-page === */
window.isiOS=!1;if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){window.isiOS=!0}
window.isiOSVersion='';if(window.isiOS){var version=(navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);if(version!==null){window.isiOSVersion=[parseInt(version[1],10),parseInt(version[2],10),parseInt(version[3]||0,10)]}}
function t_throttle(fn,threshhold,scope){var last;var deferTimer;threshhold||(threshhold=250);return function(){var context=scope||this;var now=+new Date();var args=arguments;if(last&&now<last+threshhold){clearTimeout(deferTimer);deferTimer=setTimeout(function(){last=now;fn.apply(context,args)},threshhold)}else{last=now;fn.apply(context,args)}}}
function t702_initPopup(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t702');if(!container)return;rec.setAttribute('data-animationappear','off');rec.setAttribute('data-popup-subscribe-inited','y');rec.style.opacity=1;var documentBody=document.body;var popup=rec.querySelector('.t-popup');var popupTooltipHook=popup.getAttribute('data-tooltip-hook');var analitics=popup.getAttribute('data-track-popup');var popupCloseBtn=popup.querySelector('.t-popup__close');var hrefs=rec.querySelectorAll('a[href*="#"]');var submitHref=rec.querySelector('.t-submit[href*="#"]');if(popupTooltipHook){t_onFuncLoad('t_popup__addAttributesForAccessibility',function(){t_popup__addAttributesForAccessibility(popupTooltipHook)});document.addEventListener('click',function(event){var target=event.target;var href=target.closest('a[href$="'+popupTooltipHook+'"]')?target:!1;if(!href)return;event.preventDefault();t702_showPopup(recId);t_onFuncLoad('t_popup__resizePopup',function(){t_popup__resizePopup(recId)});t702__lazyLoad();if(analitics&&window.Tilda){Tilda.sendEventToStatistics(analitics,popupTooltipHook)}});t_onFuncLoad('t_popup__addClassOnTriggerButton',function(){t_popup__addClassOnTriggerButton(document,popupTooltipHook)})}
popup.addEventListener('scroll',t_throttle(function(){t702__lazyLoad()}));popup.addEventListener('click',function(event){var windowWithoutScrollBar=window.innerWidth-17;if(event.clientX>windowWithoutScrollBar)return;if(event.target===this)t702_closePopup(recId)});popupCloseBtn.addEventListener('click',function(){t702_closePopup(recId)});if(submitHref){submitHref.addEventListener('click',function(){if(documentBody.classList.contains('t-body_scroll-locked')){documentBody.classList.remove('t-body_scroll-locked')}})}
for(var i=0;i<hrefs.length;i++){hrefs[i].addEventListener('click',function(){var url=this.getAttribute('href');if(!url||url.substring(0,7)!='#price:'){t702_closePopup(recId);if(!url||url.substring(0,7)=='#popup:'){setTimeout(function(){if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupShowed');documentBody.classList.add('t-body_popupshowed')},300)}}})}
function t702_escClosePopup(event){if(event.key==='Escape')t702_closePopup(recId)}
popup.addEventListener('tildamodal:show'+popupTooltipHook,function(){document.addEventListener('keydown',t702_escClosePopup)});popup.addEventListener('tildamodal:close'+popupTooltipHook,function(){document.removeEventListener('keydown',t702_escClosePopup)});rec.addEventListener('conditional-form-init',function(){t_onFuncLoad('t_form__conditionals_addFieldsListeners',function(){t_form__conditionals_addFieldsListeners(recId,function(){t_popup__resizePopup(recId)})})},{once:!0})}
function t702_lockScroll(){var documentBody=document.body;if(!documentBody.classList.contains('t-body_scroll-locked')){var bodyScrollTop=typeof window.pageYOffset!=='undefined'?window.pageYOffset:(document.documentElement||documentBody.parentNode||documentBody).scrollTop;documentBody.classList.add('t-body_scroll-locked');documentBody.style.top='-'+bodyScrollTop+'px';documentBody.setAttribute('data-popup-scrolltop',bodyScrollTop)}}
function t702_unlockScroll(){var documentBody=document.body;if(documentBody.classList.contains('t-body_scroll-locked')){var bodyScrollTop=documentBody.getAttribute('data-popup-scrolltop');documentBody.classList.remove('t-body_scroll-locked');documentBody.style.top=null;documentBody.removeAttribute('data-popup-scrolltop');document.documentElement.scrollTop=parseInt(bodyScrollTop)}}
function t702_showPopup(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t702');if(!container)return;var windowWidth=window.innerWidth;var screenMin=rec.getAttribute('data-screen-min');var screenMax=rec.getAttribute('data-screen-max');if(screenMin&&windowWidth<parseInt(screenMin,10))return;if(screenMax&&windowWidth>parseInt(screenMax,10))return;var popup=rec.querySelector('.t-popup');var popupTooltipHook=popup.getAttribute('data-tooltip-hook');var ranges=rec.querySelectorAll('.t-range');var documentBody=document.body;if(ranges.length){Array.prototype.forEach.call(ranges,function(range){t702__triggerEvent(range,'popupOpened')})}
t_onFuncLoad('t_popup__showPopup',function(){t_popup__showPopup(popup)});if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupShowed');documentBody.classList.add('t-body_popupshowed');documentBody.classList.add('t702__body_popupshowed');if(/iPhone|iPad|iPod/i.test(navigator.userAgent)&&!window.MSStream&&window.isiOSVersion&&window.isiOSVersion[0]===11){setTimeout(function(){t702_lockScroll()},500)}
t702__lazyLoad();t702__triggerEvent(popup,'tildamodal:show'+popupTooltipHook);t_onFuncLoad('t_forms__calculateInputsWidth',function(){t_forms__calculateInputsWidth(recId)})}
function t702_closePopup(recId){var rec=document.getElementById('rec'+recId);var popup=rec.querySelector('.t-popup');var popupTooltipHook=popup.getAttribute('data-tooltip-hook');var popupAll=document.querySelectorAll('.t-popup_show:not(.t-feed__post-popup):not(.t945__popup)');if(popupAll.length==1){if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupHidden');document.body.classList.remove('t-body_popupshowed')}else{var newPopup=[];for(var i=0;i<popupAll.length;i++){if(popupAll[i].getAttribute('data-tooltip-hook')===popupTooltipHook){popupAll[i].classList.remove('t-popup_show');newPopup.push(popupAll[i])}}
if(newPopup.length===popupAll.length){if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupHidden');document.body.classList.remove('t-body_popupshowed')}}
if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupHidden');popup.classList.remove('t-popup_show');document.body.classList.remove('t702__body_popupshowed');if(/iPhone|iPad|iPod/i.test(navigator.userAgent)&&!window.MSStream&&window.isiOSVersion&&window.isiOSVersion[0]===11){t702_unlockScroll()}
t_onFuncLoad('t_popup__addFocusOnTriggerButton',function(){t_popup__addFocusOnTriggerButton()});setTimeout(function(){var popupHide=document.querySelectorAll('.t-popup:not(.t-popup_show)');for(var i=0;i<popupHide.length;i++){popupHide[i].style.display='none'}},300);t702__triggerEvent(popup,'tildamodal:close'+popupTooltipHook)}
function t702_sendPopupEventToStatistics(popupName){var virtPage='/tilda/popup/';var virtTitle='Popup: ';if(popupName.substring(0,7)=='#popup:'){popupName=popupName.substring(7)}
virtPage+=popupName;virtTitle+=popupName;if(window.Tilda&&typeof Tilda.sendEventToStatistics=='function'){Tilda.sendEventToStatistics(virtPage,virtTitle,'',0)}else{if(ga){if(window.mainTracker!='tilda'){ga('send',{hitType:'pageview',page:virtPage,title:virtTitle})}}
if(window.mainMetrika&&window[window.mainMetrika]){window[window.mainMetrika].hit(virtPage,{title:virtTitle,referer:window.location.href})}}}
function t702_onSuccess(form){t_onFuncLoad('t_forms__onSuccess',function(){t_forms__onSuccess(form)})}
function t702__lazyLoad(){if(window.lazy==='y'||document.getElementById('allrecords').getAttribute('data-tilda-lazy')==='yes'){t_onFuncLoad('t_lazyload_update',function(){t_lazyload_update()})}}
function t702__triggerEvent(el,eventName){var event;if(typeof window.CustomEvent==='function'){event=new CustomEvent(eventName)}else if(document.createEvent){event=document.createEvent('HTMLEvents');event.initEvent(eventName,!0,!1)}else if(document.createEventObject){event=document.createEventObject();event.eventType=eventName}
event.eventName=eventName;if(el.dispatchEvent){el.dispatchEvent(event)}else if(el.fireEvent){el.fireEvent('on'+event.eventType,event)}else if(el[eventName]){el[eventName]()}else if(el['on'+eventName]){el['on'+eventName]()}}

/* === tilda-lazyload === */
function t_lazyload__init(){t_lazyload__detectwebp();var e=document.querySelector("#allrecords");e&&"yes"===e.getAttribute("data-tilda-imgoptimoff")?window.lazy_imgoptimoff="yes":window.lazy_imgoptimoff="";for(var t=document.querySelectorAll(".t156 .t-img"),i=0;i<t.length;i++)t[i].setAttribute("data-lazy-rule","skip");var n=document.querySelectorAll(".t492,.t552,.t251,.t603,.t660,.t661,.t662,.t680,.t827,.t909,.t218,.t740,.t132,.t694,.t762,.t786,.t546");Array.prototype.forEach.call(n,(function(e){var t=e.querySelectorAll(".t-bgimg");Array.prototype.forEach.call(t,(function(e){e.setAttribute("data-lazy-rule","comm:resize,round:100")}))})),setTimeout((function(){window.lazyload_cover=new window.LazyLoad({elements_selector:".t-cover__carrier",show_while_loading:!1,data_src:"content-cover-bg",placeholder:"",threshold:700})}),100);var o=t_lazyload__detectZeroBlockInViewport(),a,r=500;setTimeout((function(){var e;if(window.lazyload_img=new window.LazyLoad({elements_selector:".t-img",threshold:800}),window.lazyload_bgimg=new window.LazyLoad({elements_selector:".t-bgimg",show_while_loading:!1,placeholder:"",threshold:800}),window.jQuery&&(e=jQuery)(document).bind("slide.bs.carousel",(function(){setTimeout(t_lazyload_update,500)})),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&document.body&&"object"==typeof document.body&&document.body.classList){if(document.querySelector(".t-mbfix"))return;var t=document.createElement("div");t.classList.add("t-mbfix"),document.body.appendChild(t),setTimeout((function(){t.classList.add("t-mbfix_hide")}),50),setTimeout((function(){t&&t.parentNode&&t.parentNode.removeChild(t)}),1e3)}}),o?200:500),setTimeout((function(){window.lazyload_iframe=new window.LazyLoad({elements_selector:".t-iframe"})}),r),window.addEventListener("resize",(function(){clearTimeout(window.t_lazyload_resize_timerid),window.t_lazyload_resize_timerid=setTimeout(t_lazyload__onWindowResize,1e3)})),setTimeout((function(){"object"==typeof performance&&"object"==typeof performance.timing&&(window.t_lazyload_domloaded=1*window.performance.timing.domContentLoadedEventEnd-1*window.performance.timing.navigationStart)}),0)}function t_lazyload_update(){"undefined"!=typeof lazyload_cover&&window.lazyload_cover.update(),"undefined"!=typeof lazyload_img&&window.lazyload_img.update(),"undefined"!=typeof lazyload_bgimg&&window.lazyload_bgimg.update(),"undefined"!=typeof lazyload_iframe&&window.lazyload_iframe.update()}function t_lazyload__onWindowResize(){if(t_lazyload_update(),"yes"!==window.lazy_imgoptimoff){var e=document.querySelectorAll(".t-cover__carrier, .t-bgimg, .t-img, .tn-atom__img");Array.prototype.forEach.call(e,(function(e){window.t_lazyload_updateResize_elem(e)}))}}function t_lazyload__detectwebp(){var e=new Image,t=function t(){2!=e.height||(window.lazy_webp="y")};e.onload=t,e.onerror=t,e.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"}function t_lazyLoad__appendImgStatToArr(e,t){if(void 0!==navigator.sendBeacon){var i=(new Date).getTime(),n=e.getAttribute("src");if(n){var o={time:i-t};0===n.indexOf("https://"+t_lazyload__getThumbDomainName())&&(o.th="y"),0===n.indexOf("https://static.tildacdn")&&(o.st="y"),(o.th||o.st)&&window.t_loadImgStats.push(o)}}}function t_lazyload__ping(e){var t="https://"+e+".tildacdn.com";if("static"==e){var i=document.currentScript;if("object"==typeof i&&"string"==typeof i.src&&0===i.src.indexOf(t))return;if(null===document.head.querySelector('script[src^="'+t+'"]'))return}var n=new Image;n.src=t+"/pixel.png",n.onload=function(){window["lazy_ok_"+e]="y"},setTimeout((function(){if("y"!==window["lazy_ok_"+e]){window["lazy_err_"+e]="y",console.error(e+" ping error");var i=document.querySelectorAll(".loading");Array.prototype.forEach.call(i,(function(e){var i;i=e.lazy_loading_src,"string"==typeof str&&0===i.indexOf(t)&&(e.classList.remove("loading"),e.wasProcessed=!1)})),t_lazyload_update()}}),1e4)}function t_lazyload__getThumbDomainName(){return"optim.tildacdn"}function t_lazyload__getRootZone(){var e=document.getElementById("allrecords"),t;return e&&e.getAttribute("data-tilda-root-zone")||"com"}function t_lazyload__getBackgroundStyles(e){var t=getComputedStyle(e),i="IMG"===e.tagName,n=i?t.objectPosition:t.backgroundPosition,o=i?t.objectFit:t.backgroundSize,a=t.backgroundAttachment;if(n){var r=n.split(" "),l=r[0],s=r[1],d={"0%":"left","50%":"center","100%":"right"},c={"0%":"top","50%":"center","100%":"bottom"};return d[l]&&(l=d[l]),c[s]&&(s=c[s]),{positionX:l,positionY:s,size:o,attachment:a}}return{positionX:"",positionY:"",size:o,attachment:a}}function t_lazyload__detectZeroBlockInViewport(){var e=document.querySelectorAll(".t396"),t;return Array.from(e).some((function(e){var t=e.getBoundingClientRect();return t.top<=(window.innerHeight||document.documentElement.clientHeight)&&t.bottom>=0&&t.left<=(window.innerWidth||document.documentElement.clientWidth)&&t.right>=0}))}function t_lazyload__getResizeCommand(e,t,i){var n=i.x,o=i.y,a;return e?"contain"===t?"contain":"cover"===t?"cover":"resize":"contain"===t?"contain":!Number.isNaN(parseFloat(n))&&!Number.isNaN(parseFloat(o))?"resize":"cover"}window.lazy="y",window.t_loadImgStats=[],function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.LazyLoad=t()}(window,(function(){var e,t,i=!1,n,o,a=!1,r=/\/static\.tildacdn\.(info|.{1,3})\//,l={},s="undefined"!=typeof getComputedStyle;function d(){i||(e={elements_selector:"img",container:window,threshold:300,throttle:50,data_src:"original",data_srcset:"original-set",class_loading:"loading",class_loaded:"loaded",skip_invisible:!0,show_while_loading:!0,callback_load:null,callback_error:null,callback_set:null,callback_processed:null,placeholder:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},document.body&&"object"==typeof document.body&&(t=!!document.body.classList),a="IntersectionObserver"in window,i=!0,n=["200x151","640x712","320x356","670x744","335x372","300x225","500x375","400x301","748x832","374x416","670x502","335x251","360x234","560x622","280x311","640x416"],o=["353x245","155x151","158x164","372x495","280x272","117x117","291x280","280x269","335x241","283x283","150x156","353x233","414x730","372x362","275x206","290x322","248x207","177x136","173x173","280x308","195x214","248x191","155x196","163x203","320x444","158x162","176x203","412x700","360x88","360x616","167x167","130x144","280x233","560x314","320x299","372x275","320x178","372x242","360x352","353x294","260x182","372x310","335x344","374x432","414x500","374x360","220x338","150x146","335x239","176x176","320x302","374x260","360x568","191x221","192x192","372x558","335x188","320x358","335x258","374x575","26x26","353x360","360x206","335x248","335x322","167x256","560x364","155x172","163x216","163x181","360x257","374x561","374x243","220x212","177x148","291x324","167x160","375x749","335x387","172x172","260x302","414x700","220x254","177x172","374x519","176x169","320x352","335x233","150x203","360x207","158x121","360x396","158x131","150x98","220x169","182x202","320x179","372x413","181x226","353x200","158x153","375x628","176x271","374x364","320x492","374x247","414x833","353x393","335x218","560x399","412x264","293x164","56x56","177x204","248x382","181x181","118x118","260x346","374x497","260x202","393x251","158x158","372x200","373x414","320x229","177x177","312x175","374x312","84x84","320x329","177x194","353x350","335x503","335x446","335x326","374x200","158x182","320x237","335x221","176x196","150x229","320x224","248x276","360x299","260x289","196x216","335x279","177x272","320x426","260x172","155x194","320x369","372x350","360x302","360x402","169x186","158x242","173x199","167x185","360x238","220x123","320x308","414x265","374x350","300x333","177x170","320x222","320x311","260x169","150x173","320x246","353x265","192x222","158x151","372x414","150x144","760x502","314x176","320x208","182x182","320x211","163x163","372x279","360x202","360x252","260x252","260x286","353x392","160x104","374x281","353x353","150x231","320x267","372x372","177x197","275x154","158x175","374x374","150x167","260x146"],l={com:"com",info:"pub",pub:"pub",ink:"ink",pro:"pro",biz:"biz",net:"net",one:"one"})}function c(){var e;return(new Date).getTime()}function u(e,t){var i={},n;for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n]);for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n]);return i}function _(e){var t;try{t=Array.prototype.slice.call(e)}catch(a){var i=[],n,o=e.length;for(n=0;n<o;n++)i.push(e[n]);t=i}return t.forEach((function(e){var t=p(e,"t-rec");y(t)&&(e.isNotUnderScreenRange=!1===t.hasAttribute("data-screen-max")&&!1===t.hasAttribute("data-screen-min"))})),t}function x(e){return null===e.offsetParent&&!1===y(p(e,"t396__carrier-wrapper"))&&"fixed"!==e.getAttribute("data-content-cover-parallax")}function f(e,i){t?e.classList.add(i):e.className+=(e.className?" ":"")+i}function m(e,i){t?e.classList.remove(i):e.className=e.className.replace(new RegExp("(^|\\s+)"+i+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")}function g(e,i){return t?e.classList.contains(i):new RegExp(" "+i+" ").test(" "+e.className+" ")}function p(e,t){for(var i=e.parentNode;i&&i!==document;){if(!0===g(i,t))return i;i=i.parentNode}return null}function y(e){return null!=e}function w(e){var t=e.getBoundingClientRect();return{top:t.top+document.body.scrollTop,left:t.left+document.body.scrollLeft}}function h(e){return r.test(e)}function b(e){return e.replace(r,(function(e,t){return"/"+t_lazyload__getThumbDomainName()+"."+(l[t]||"com")+"/"}))}function v(e,t,i,a){var l=t.getAttribute("data-"+a);if(l){var d=t.clientWidth,c=t.clientHeight,u;if((g(t,"t-slds__bgimg")||g(t,"t-slds__img"))&&!g(t,"t827__image")){var _=p(t,"t-slds__wrapper");_||(_=p(t,"t-slds__container")),!1===y(_)&&(_=p(t,"t-slds__thumbsbullet")),y(_)&&(d=_.clientWidth,c=_.clientHeight)}if(g(t,"tn-atom")&&g(t,"t-bgimg")||g(t,"tn-atom__img")){var x=p(t,"tn-atom__scale-wrapper");if(y(x)){var f=x.getBoundingClientRect(),w=A("round",f.width,f.height,10);d=w[0],c=w[1]}}var b="",v="",I="",L,N=1,S=!0,E=!1;if("yes"==window.lazy_imgoptimoff&&(S=!1),"y"!==window.lazy_err_thumb&&"y"!==window.lazy_err_static||(S=!1),"IMG"!==t.tagName||s)if(s){var M=t_lazyload__getBackgroundStyles(t),R=M.positionX,T=M.positionY,C=M.size,j=M.attachment,B="IMG"===t.tagName;I=t_lazyload__getResizeCommand(B,C,{x:R,y:T}),b=R,v=T,"fixed"===j&&B&&(E=!0)}else E=!0;else I="resize";if(L=t.getAttribute("data-lazy-rule")){var P=L.split(","),q;for(q=0;q<P.length;q++)P[q].indexOf("round:")>-1&&(N=1*P[q].split(":")[1]),P[q].indexOf("comm:")>-1&&"resize"!=(I=P[q].split(":")[1])&&"cover"!=I&&"contain"!=I&&(S=!1),P[q].indexOf("skip")>-1&&(E=!0),P[q].indexOf("optimoff")>-1&&(S=!1)}if(N>1){var D=A(I,d,c,N);d=D[0],c=D[1]}if("cover"==I&&d>0&&c>0&&d<=1e3)if(d===5*Math.ceil(d/5)&&c===5*Math.ceil(c/5));else if(n.indexOf(d+"x"+c)>-1);else if(o.indexOf(d+"x"+c)>-1);else if(g(t,"tn-atom")||g(t,"tn-atom__img"));else{g(t,"t-cover__carrier")||(I="resize");var G=A(I,d,c,100);d=G[0],c=G[1]}if("resize"==I&&d<30&&(E=!0),!0===S&&(l=!0===E||d>1e3||c>1e3||0==d||"IMG"!=t.tagName&&0==c?k(l):O(t.tagName,I,l,d,c,b,v)),"y"===window.lazy_err_static&&h(l)&&(l=l.replace(r,"/static3.tildacdn.com/")),l){if("IMG"===e.tagName)e.setAttribute("src",l);else if("IFRAME"===e.tagName)e.setAttribute("src",l);else if("OBJECT"===e.tagName)e.setAttribute("data",l);else{var W,H;if(-1!==e.style.backgroundImage.indexOf("-gradient("))W=e.style.backgroundImage.split("), ")[1];W?e.style.backgroundImage="url("+l+"), "+W:(e.style.backgroundImage="url("+l+")",z(e,l))}t.lazy_loading_src=l}}else m(t,"loading")}function z(e,t){var i=e.getAttribute("data-content-cover-id");if(i){var n=t.split(".");n=n[n.length-1];var o=document.getElementById("recorddiv"+i);"svg"===n&&(o.style.backgroundImage="")}}function A(e,t,i,n){var o=t,a=i;if("cover"==e&&o>0&&a>0){var r=o/a,l=1;r<=1?(r<=.8&&(l=.8),r<=.751&&(l=.75),r<=.667&&(l=.667),r<=.563&&(l=.562),r<=.501&&(l=.5),a=Math.ceil(a/n)*n,o=Math.ceil(a*l),o=10*Math.ceil(o/10)):(r>=1.25&&(l=1.25),r>=1.332&&(l=1.333),r>=1.5&&(l=1.5),r>=1.777&&(l=1.777),r>=2&&(l=2),o=Math.ceil(o/n)*n,a=Math.ceil(o/l),a=10*Math.ceil(a/10))}else o>0&&(o=Math.ceil(o/n)*n),a>0&&(a=Math.ceil(a/n)*n);return[o,a]}function O(e,t,i,n,o,a,r){if("undefined"==i||null==i)return i;var l=null==i?void 0:i.toLowerCase();if(l.indexOf(".svg")>0||l.indexOf(".gif")>0||l.indexOf(".ico")>0||-1===i.indexOf("static.tildacdn.")||i.indexOf("-/empty/")>0||i.indexOf("-/resizeb/")>0)return i;if(i.indexOf("/-/")>-1)return i;if(0==n&&0==o)return i;if("y"==window.lazy_err_thumb)return i;if(i.indexOf("lib")>-1)return i;if("IMG"!==e&&"DIV"!==e&&"TD"!==e&&"A"!==e)return i;var s=1;1===window.devicePixelRatio&&Math.max(n,o)<=400&&(s=1.2),window.devicePixelRatio>1&&(s=2);var d=n,c=o,u,_;if(d>0&&(d=parseInt(s*d)),c>0&&(c=parseInt(s*c)),d>1e3||c>1800)return k(i);if("resize"==t)(_=i.split("/")).splice(i.split("/").length-1,0,"-/resize/"+d+"x"+("DIV"==e&&c>0?c:"")+"/"+("y"==window.lazy_webp?"-/format/webp":"")),u=b(_.join("/"));else{if(d<=0&&c<=0)return i;var x=a,f=r;"left"!==a&&"right"!==a&&(x="center"),"top"!==r&&"bottom"!==r&&(f="center"),(_=i.split("/")).splice(i.split("/").length-1,0,"-/"+t+"/"+d+"x"+c+"/"+x+"/"+f+"/"+("y"==window.lazy_webp?"-/format/webp":"")),u=b(_.join("/"))}var m=".webp",g=-1!==u.indexOf(m,u.length-5);return"y"!=window.lazy_webp||g||(u+=".webp"),u}function k(e){if("undefined"==e||null==e)return e;var t=null==e?void 0:e.toLowerCase();if(t.indexOf(".svg")>0||t.indexOf(".gif")>0||t.indexOf(".ico")>0||-1===e.indexOf("static.tildacdn.")||e.indexOf("-/empty/")>0||e.indexOf("-/resizeb/")>0)return e;if(e.indexOf("/-/")>-1)return e;if(e.indexOf("lib")>-1)return e;if("y"!==window.lazy_webp)return e;if("y"===window.lazy_err_thumb)return e;var i=e.split("/");i.splice(e.split("/").length-1,0,"-/format/webp");var n=b(i.join("/")),o=".webp",a;return-1!==n.indexOf(o,n.length-5)||(n+=".webp"),n}function I(e,t,i){if("string"==typeof t&&null!=t&&""!=t){var n;if(console.error("lazy loading err"),h(t))return window.lazy_err_static="y",void L(e,t.replace(r,"/static3.tildacdn.com/"));if(-1!==t.indexOf(t_lazyload__getThumbDomainName())&&-1!==t.indexOf("/-/")){window.lazy_err_thumb="y";var o=t.split("/"),a="",l="",s;if(o.length>3)for(var d=0;d<o.length;d++)""!==o[d]&&("til"==o[d].substring(0,3)&&36==o[d].length&&4==(o[d].match(/-/g)||[]).length&&(a=o[d]),d==o.length-1&&(l=o[d]));if(""!==a&&""!==l)L(e,"https://static3.tildacdn.com/"+a+"/"+(l=l.replace(/(\.(jpe?g|png|gif|svg))\.webp$/i,"$1")));if("function"!=typeof t_errors__sendCDNErrors){var u=document.createElement("script");u.src="https://static.tildacdn."+t_lazyload__getRootZone()+"/js/tilda-errors-1.0.min.js",u.type="text/javascript",u.async=!0,document.body.appendChild(u)}var _=i>1?c()-i:"";"object"!=typeof window.t_cdnerrors&&(window.t_cdnerrors=[]),window.t_cdnerrors.push({url:t,time:_,debug:{domloaded:window.t_lazyload_domloaded}})}}}function L(e,t){console.info("try reload: "+t),"IMG"===e.tagName?t&&e.setAttribute("src",t):t&&(e.style.backgroundImage="url("+t+")")}function N(t){d(),this._settings=u(e,t),this._queryOriginNode=this._settings.container===window?document:this._settings.container,this._previousLoopTime=0,this._loopTimeout=null,a&&this._initializeObserver(),this.update(),this.loadAnimatedImages()}return window.t_lazyload_setSources=v,N.prototype._showOnLoad=function(e){var t,i=this._settings,n;function o(){null!==i&&(t_lazyLoad__appendImgStatToArr(t,n),i.callback_load&&i.callback_load(e),v(e,e,i.data_srcset,i.data_src),i.callback_set&&i.callback_set(e),m(e,i.class_loading),f(e,i.class_loaded),t.removeEventListener("load",o))}!e.getAttribute("src")&&i.placeholder&&e.setAttribute("src",i.placeholder),(t=document.createElement("img")).addEventListener("load",o),t.addEventListener("error",(function(t){m(e,i.class_loading),i.callback_error&&i.callback_error(e),void 0!==t.path?I(e,t.path[0].currentSrc,n):void 0!==t.target&&I(e,t.target.currentSrc,n)})),f(e,i.class_loading),n=c(),v(t,e,i.data_srcset,i.data_src)},N.prototype._showOnAppear=function(e){var t=this._settings,i;function n(){null!==t&&(t_lazyLoad__appendImgStatToArr(e,i),t.callback_load&&t.callback_load(e),m(e,t.class_loading),f(e,t.class_loaded),e.removeEventListener("load",n))}"IMG"!==e.tagName&&"IFRAME"!==e.tagName||(e.addEventListener("load",n),e.addEventListener("error",(function(o){e.removeEventListener("load",n),m(e,t.class_loading),t.callback_error&&t.callback_error(e),void 0!==o.path?I(e,o.path[0].currentSrc,i):void 0!==o.target&&I(e,o.target.currentSrc,i)})),f(e,t.class_loading)),i=c(),v(e,e,t.data_srcset,t.data_src),t.callback_set&&t.callback_set(e)},N.prototype._show=function(e){this._settings.show_while_loading?this._showOnAppear(e):this._showOnLoad(e)},N.prototype._initializeObserver=function(){var e=this;this._intersectionObserver=new IntersectionObserver((function(t){var i=window.scrollY;t.forEach((function(t){var n=t.target;if(!(e._settings.skip_invisible&&x(n)&&n.isNotUnderScreenRange)){var o=t.boundingClientRect.top+i<0,a=n.closest(".t396__elem"),r=a&&0===a.style.top.indexOf("-"),l=n.closest(".tn-group"),s=l&&0===l.style.top.indexOf("-"),d=t.intersectionRatio>=Number(n.getAttribute("data-intersection-aspect-ratio")||0);if(n.wasProcessed)return e._intersectionObserver.unobserve(n),void(e._settings.callback_processed&&e._settings.callback_processed(e._elements.length));(t.isIntersecting&&d||o||r||s)&&(e._show(n),n.wasProcessed=!0)}}))}),{rootMargin:this._settings.threshold+"px",threshold:[0]})},N.prototype.loadAnimatedImages=function(){var e,t,i=this._settings,n=this._elements,o=n?n.length:0;function a(e,t){var i;if("trigger"===t){var n=e.getAttribute("data-animate-sbs-trgels");n&&(i=document.querySelector('[data-elem-id="'+n+'"]'))}else"viewport"===t&&(i=p(e,"t396"));return y(i)?w(i):null}function r(e,t){var n=a(e,t);if(!n)return!1;var o=w(e),r=Math.abs(n.top-o.top),l=Math.abs(n.left-o.left);return r>i.threshold||l>i.threshold}for(e=0;e<o;e++)if(g(t=n[e],"tn-atom__img")||g(t,"tn-atom")){var l=p(t,"tn-elem"),s=l.getAttribute("data-animate-sbs-opts"),d=l.getAttribute("data-animate-sbs-event"),c,u;"intoview"!==d&&"blockintoview"!==d||(u="viewport"),l.getAttribute("data-animate-sbs-trgels")||(u="trigger"),i.skip_invisible&&null===t.offsetParent||!s||r(l,u)&&(i.show_while_loading?this._showOnAppear(t):this._showOnLoad(t),t.wasProcessed=!0,i.callback_processed&&i.callback_processed(n.length))}},N.prototype.update=function(){var e=this;if(this._elements=_(this._queryOriginNode.querySelectorAll(this._settings.elements_selector)),a&&this._intersectionObserver)return this._intersectionObserver.disconnect(),void this._elements.forEach((function(t){e._intersectionObserver.observe(t)}));this._elements.forEach((function(t){e._show(t),e._settings.callback_processed&&e._settings.callback_processed(e._elements.length),t.wasProcessed=!0}))},N.prototype.destroy=function(){this._intersectionObserver.disconnect(),this._elements=null,this._queryOriginNode=null,this._settings=null},N})),"loading"!=document.readyState?t_lazyload__init():document.addEventListener("DOMContentLoaded",t_lazyload__init),window.t_lazyload_updateResize_elem=function(e){var t,i=e;if(window.jQuery&&i instanceof jQuery){if(0==i.length)return;i=i.get(0)}if(null!=i){var n=i.tagName,o,a,r="";if("undefined"!=typeof getComputedStyle){var l="IMG"===n,s=t_lazyload__getBackgroundStyles(i),d=s.size,c=s.positionX,u=s.positionY;r=l?i.getAttribute("src"):i.style.backgroundImage.replace("url(","").replace(")","").replace(/"/gi,""),a="-/"+t_lazyload__getResizeCommand(l,d,{x:c,y:u})+"/"}else a="-/cover/";var _=null==(t=r)?void 0:t.toLowerCase();if(!(null==r||-1===r.indexOf(a)||_.indexOf(".svg")>0||_.indexOf(".gif")>0||_.indexOf(".ico")>0||-1===r.indexOf(t_lazyload__getThumbDomainName())||r.indexOf("-/empty/")>0&&r.indexOf("-/resizeb/")>0)){var x=r.indexOf(a)+a.length,f=r.indexOf("/",x);if(x>0&&f>0){var m=r.slice(x,f).split("x"),g=i.clientWidth,p=i.clientHeight;if(g>0&&p>0&&(m[0]>0||m[1]>0)&&(m[0]>0&&g>m[0]||m[1]>0&&p>m[1])&&(m[0]>0&&g-m[0]>100||m[1]>0&&p-m[1]>100)){var y=r.slice(0,x)+(m[0]>0?g:"")+"x"+(m[1]>0?p:"")+r.substring(f);"IMG"==n?i.setAttribute("src",y):i.style.backgroundImage="url('"+y+"')"}}}}};


/* === tilda-animation === */
function t_animate__init(){t_animate__checkAnimationAvailability()&&(t_animate__generateStyles(),t_animate__wrapTextWithOpacity(),t_animate__addNoHoverClassToBtns(),t_animate__preventHorizontalScroll(),document.documentElement.clientWidth>=1200&&t_animate__parseNumberText(),setTimeout((function(){t_animate__startAnimation()}),1500))}function t_animate__checkMobile(t){return t.filter((function(t){var e=t.closest(".t396__elem, .t396__group"),a,n;return!(!e||"y"!==e.getAttribute("data-animate-mobile"))||(t.classList.contains("r")?Array.prototype.forEach.call(t.querySelectorAll(".t-animate"),(function(t){t_animate__removeAnimationClass(t,"")})):t_animate__removeAnimationClass(t,""),!1)}))}function t_animate__removeAnimationClass(t,e){if(t){var a="t-animate";t.classList.remove(a),e&&("string"==typeof e&&(e=[e]),e.forEach((function(e){var n=a+"_"+e;t.classList.remove(n)})))}}function t_animate__preventHorizontalScroll(){var t,e=Array.from(document.querySelectorAll('[data-animate-style="fadeinleft"]')).filter((function(t){return!t.closest(".t396__artboard, .t-cover")&&t.getBoundingClientRect().right>window.innerWidth}));!e.length||window.innerWidth<980||e.forEach((function(t){var e;t.closest(".r").classList.add("t-animate__overflow-x-hidden")}))}function t_animate__checkAnimationAvailability(){var t=document.querySelector(".t-records"),e=t?t.getAttribute("data-blocks-animationoff"):null,a=t?t.getAttribute("data-tilda-mode"):null;if(/Bot/i.test(navigator.userAgent)||"yes"===e||t_animate__checkIE()||"edit"===a){var n=document.querySelectorAll(".t-animate");return Array.prototype.forEach.call(n,(function(t){t_animate__removeAnimationClass(t,"")})),!1}return!0}function t_animate__generateStyles(){var t;if(!!document.querySelector(".t396")){for(var e=t_animate__getBreakpointsArr(),a='.t396 .t-animate[data-animate-style="fadein"],.t396 .t-animate[data-animate-style="fadeinup"],.t396 .t-animate[data-animate-style="fadeindown"],.t396 .t-animate[data-animate-style="fadeinleft"],.t396 .t-animate[data-animate-style="fadeinright"],.t396 .t-animate[data-animate-style="zoomin"],.t396 .t-animate[data-animate-style="zoomout"] {opacity: 0;-webkit-transition-property: opacity, transform;transition-property: opacity, transform;-webkit-transition-duration: 1s;transition-duration: 1s;-webkit-transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);-webkit-backface-visibility: hidden;backface-visibility: hidden;}',n=0;n<e.length;n++){var i;(i=t_animate__getMediaQuery(e,n)).isContinue||(a+=i.text+".t396 .t-animate[data-animate-style-res-"+i.minRes+'="fadein"],.t396 .t-animate[data-animate-style-res-'+i.minRes+'="fadeinup"],.t396 .t-animate[data-animate-style-res-'+i.minRes+'="fadeindown"],.t396 .t-animate[data-animate-style-res-'+i.minRes+'="fadeinleft"],.t396 .t-animate[data-animate-style-res-'+i.minRes+'="fadeinright"],.t396 .t-animate[data-animate-style-res-'+i.minRes+'="zoomin"],.t396 .t-animate[data-animate-style-res-'+i.minRes+'="zoomout"] {opacity: 0;-webkit-transition-property: opacity, transform;transition-property: opacity, transform;-webkit-transition-duration: 1s;transition-duration: 1s;-webkit-transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);-webkit-backface-visibility: hidden;backface-visibility: hidden;}}')}a+='.t396 .t-title.t-animate {-webkit-transition-duration: 1.2s;transition-duration: 1.2s;}.t396 .t-descr.t-animate,.t396 .t-uptitle.t-animate,.t396 .t-subtitle.t-animate,.t396 .t-text.t-animate {-webkit-transition-duration: 0.7s;transition-duration: 0.7s;}.t396 .t-item.t-animate {-webkit-transition-duration: 0.5s;transition-duration: 0.5s;}.t396 .t-animate[data-animate-style="fadein"] {opacity: 0;transform: none;}';for(var n=0;n<e.length;n++){var i;(i=t_animate__getMediaQuery(e,n)).isContinue||(a+=i.text+"#allrecords .t396 .t-animate[data-animate-style-res-"+i.minRes+'="fadein"] {opacity: 0;transform: none;}}')}a+='.t396 .t-animate_started[data-animate-style="fadein"] {opacity: 1;}';for(var n=0;n<e.length;n++){var i;(i=t_animate__getMediaQuery(e,n)).isContinue||(a+=i.text+"#allrecords .t396 .t-animate_started[data-animate-style-res-"+i.minRes+'="fadein"] {opacity: 1;}}')}a+='.t396 .t-animate[data-animate-style="fadeinup"] {-webkit-transform: translate(0, 100px);transform: translate(0, 100px);}';for(var n=0;n<e.length;n++){var i;(i=t_animate__getMediaQuery(e,n)).isContinue||(a+=i.text+"#allrecords .t396 .t-animate[data-animate-style-res-"+i.minRes+'="fadeinup"] {-webkit-transform: translate(0, 100px);transform: translate(0, 100px);}}')}a+='.t396 .t-animate_started[data-animate-style="fadeinup"] {opacity: 1;-webkit-transform: none;transform: none;}';for(var n=0;n<e.length;n++){var i;(i=t_animate__getMediaQuery(e,n)).isContinue||(a+=i.text+"#allrecords .t396 .t-animate_started[data-animate-style-res-"+i.minRes+'="fadeinup"] {opacity: 1;-webkit-transform: none;transform: none;}}')}a+='.t396 .t-animate[data-animate-style="fadeindown"] {-webkit-transform: translate(0, -100px);transform: translate(0, -100px);}';for(var n=0;n<e.length;n++){var i;(i=t_animate__getMediaQuery(e,n)).isContinue||(a+=i.text+"#allrecords .t396 .t-animate[data-animate-style-res-"+i.minRes+'="fadeindown"] {-webkit-transform: translate(0, -100px);transform: translate(0, -100px);}}')}a+='.t396 .t-animate_started[data-animate-style="fadeindown"] {opacity: 1;-webkit-transform: none;transform: none;}';for(var n=0;n<e.length;n++){var i;(i=t_animate__getMediaQuery(e,n)).isContinue||(a+=i.text+"#allrecords .t396 .t-animate_started[data-animate-style-res-"+i.minRes+'="fadeindown"] {opacity: 1;-webkit-transform: none;transform: none;}}')}a+='.t396 .t-animate[data-animate-style="fadeinleft"] {-webkit-transform: translate(100px, 0);transform: translate(100px, 0);}';for(var n=0;n<e.length;n++){var i;(i=t_animate__getMediaQuery(e,n)).isContinue||(a+=i.text+"#allrecords .t396 .t-animate[data-animate-style-res-"+i.minRes+'="fadeinleft"] {-webkit-transform: translate(100px, 0);transform: translate(100px, 0);}}')}a+='.t396 .t-animate_started[data-animate-style="fadeinleft"] {opacity: 1;-webkit-transform: none;transform: none;}';for(var n=0;n<e.length;n++){var i;(i=t_animate__getMediaQuery(e,n)).isContinue||(a+=i.text+"#allrecords .t396 .t-animate_started[data-animate-style-res-"+i.minRes+'="fadeinleft"] {opacity: 1;-webkit-transform: none;transform: none;}}')}a+='.t396 .t-animate[data-animate-style="fadeinright"] {-webkit-transform: translate(-100px, 0);transform: translate(-100px, 0);}';for(var n=0;n<e.length;n++){var i;(i=t_animate__getMediaQuery(e,n)).isContinue||(a+=i.text+"#allrecords .t396 .t-animate[data-animate-style-res-"+i.minRes+'="fadeinright"] {-webkit-transform: translate(-100px, 0);transform: translate(-100px, 0);}}')}a+='.t396 .t-animate_started[data-animate-style="fadeinright"] {opacity: 1;-webkit-transform: none;transform: none;}';for(var n=0;n<e.length;n++){var i;(i=t_animate__getMediaQuery(e,n)).isContinue||(a+=i.text+"#allrecords .t396 .t-animate_started[data-animate-style-res-"+i.minRes+'="fadeinright"] {opacity: 1;-webkit-transform: none;transform: none;}}')}a+='.t396 .t-animate[data-animate-style="zoomin"] {-webkit-transform: scale(0.9);transform: scale(0.9);}';for(var n=0;n<e.length;n++){var i;(i=t_animate__getMediaQuery(e,n)).isContinue||(a+=i.text+"#allrecords .t396 .t-animate[data-animate-style-res-"+i.minRes+'="zoomin"] {-webkit-transform: scale(0.9);transform: scale(0.9);}}')}a+='.t396 .t-animate_started[data-animate-style="zoomin"] {opacity: 1;-webkit-transform: scale(1);transform: scale(1);}';for(var n=0;n<e.length;n++){var i;(i=t_animate__getMediaQuery(e,n)).isContinue||(a+=i.text+"#allrecords .t396 .t-animate_started[data-animate-style-res-"+i.minRes+'="zoomin"] {opacity: 1;-webkit-transform: scale(1);transform: scale(1);}}')}a+='.t396 .t-animate[data-animate-style="zoomout"] {-webkit-transform: scale(1.2);transform: scale(1.2);}';for(var n=0;n<e.length;n++){var i;(i=t_animate__getMediaQuery(e,n)).isContinue||(a+=i.text+"#allrecords .t396 .t-animate[data-animate-style-res-"+i.minRes+'="zoomout"] {-webkit-transform: scale(1.2);transform: scale(1.2);}}')}a+='.t396 .t-animate_started[data-animate-style="zoomout"] {opacity: 1;-webkit-transform: scale(1);transform: scale(1);}';for(var n=0;n<e.length;n++){var i;(i=t_animate__getMediaQuery(e,n)).isContinue||(a+=i.text+"#allrecords .t396 .t-animate_started[data-animate-style-res-"+i.minRes+'="zoomout"] {opacity: 1;-webkit-transform: scale(1);transform: scale(1);}}')}a+=".t396 .t-animate_started[data-animate-distance],.t396 .t-animate_started[data-animate-scale]{-webkit-transform: none !important;transform: none !important;}";for(var n=0;n<e.length;n++){var i;(i=t_animate__getMediaQuery(e,n)).isContinue||(a+=i.text+"#allrecords .t396 .t-animate_started[data-animate-distance-res-"+i.minRes+"],#allrecords .t396 .t-animate_started[data-animate-style-res-"+i.minRes+'="zoomout"] {-webkit-transform: none !important;transform: none !important;}}')}var r=document.createElement("style"),o=document.head||document.querySelector("head");r.textContent=a,o.appendChild(r)}}function t_animate__getBreakpointsArr(){var t=[],e=Array.prototype.slice.call(document.querySelectorAll('.r[data-record-type="396"]:not(.t397__off, .t395__off, .t400__off) .t396__artboard, .r[data-parenttplid="396"]:not(.t397__off, .t395__off, .t400__off) .t396__artboard'));return Array.prototype.forEach.call(e,(function(e){if(e.classList.contains("t396__artboard")){var a=e.getAttribute("data-artboard-screens"),n=(a=(a=a?a.split(","):[1200,960,640,480,320]).map((function(t){return parseInt(t,10)}))).filter((function(e){return-1===t.indexOf(e)}));t=t.concat(n)}})),t=t_animate__sortArr(t)}function t_animate__getMediaQuery(t,e){var a="",n=!1,i=t[e+1],r=t[e]-1,o=e===t.length-1,s=e===t.length-2;return o?n=!0:a+=s?"@media screen and (max-width: "+r+"px) {":"@media screen and (min-width: "+i+"px) and (max-width: "+r+"px) {",{text:a,isContinue:n,minRes:i}}function t_animate__sortArr(t){return t.sort((function(t,e){return e-t}))}function t_animate__startAnimation(){var t=document.querySelectorAll(".r"),e=Array.prototype.filter.call(t,(function(t){return t.querySelector(".t-animate[data-animate-group=yes]")})),a=Array.prototype.filter.call(t,(function(t){return t.querySelector('.t-animate[data-animate-chain="yes"]')})),n=document.querySelectorAll(".t-animate");if(n=Array.prototype.filter.call(n,(function(t){return!("yes"===t.getAttribute("data-animate-group")||"yes"===t.getAttribute("data-animate-chain")||t.getAttribute("observer-ready"))})),window.innerWidth<1200&&(e=t_animate__checkMobile(e),a=t_animate__checkMobile(a),n=t_animate__checkMobile(n)),e.length||n.length||a.length){t_animate__setAnimationState(e,a,n),e=t_animate__hasWaitAnimation(e),n=t_animate__hasWaitAnimation(n),a=t_animate__hasWaitAnimation(a);var i="undefined"!=typeof navigator&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)[4-9]/i.test(navigator.userAgent);if("IntersectionObserver"in window&&!i){if(e.length){var r=[];e.forEach((function(t){var e=t.querySelector(".t-animate"),a,n;if("fadeindown"===e.getAttribute("data-animate-style")&&e.closest(".t-cover")){var i=t.querySelector(".t-animate:not(:first-child)");i&&(e=i)}r.push(e)})),r.forEach((function(t){var e={rootMargin:t.offsetHeight/5*-1+"px 0px"},a;new IntersectionObserver((function(t,e){t.forEach((function(t){if(t.isIntersecting){var a=t.target;e.unobserve(a);var n=a.closest(".r").querySelectorAll(".t-animate");n=Array.prototype.filter.call(n,(function(t){return!(t.classList.contains("t-animate__btn-wait-chain")||"yes"===t.getAttribute("data-animate-chain"))})),t_animate__makeSectionButtonWait(a),t_animate__saveSectionHeaderStartTime(a),Array.prototype.forEach.call(n,(function(t){t.classList.remove("t-animate_wait"),t_animate__removeNoHoverClassFromBtns(t),t_animate__setStartAnimationClass(t,!1)}))}}))}),e).observe(t)}))}var o;if(n.length&&n.forEach((function(t){var e={},a=t_animate__getAttrByResBase(t,"trigger-offset");a&&(e.rootMargin="0px 0px "+-1*a.replace("px","")+"px 0px");var n=new IntersectionObserver((function(t,e){t.forEach((function(t){var a=t.target;if(!a.demandTransform&&a.style.transform)a.demandTransform=a.style.transform,a.style.transform="unset";else{var n=window.getComputedStyle(a).transform;a.style.transform||"none"===n||(a.demandTransform=n,a.style.transform="unset")}if(t.isIntersecting){a.closest(".t1093")||e.unobserve(a);var i=a.style.transitionDelay||"0ms";i=-1!==i.indexOf("ms")?parseInt(i)+250:1e3*parseFloat(i)+250;var r=function t(){a.classList.remove("t-animate_wait"),t_animate__removeNoHoverClassFromBtns(a),t_animate__setStartAnimationClass(a,!0),"animatednumber"===t_animate__getAttrByResBase(a,"style")&&t_animate__animateNumbers(a)};a.demandTransform&&-1!==a.demandTransform.indexOf("matrix")&&(a.style.transform=""),a.demandTransform&&"unset"===a.style.transform&&(a.style.transform=a.demandTransform,delete a.demandTransform),setTimeout((function(){r()}),i)}}))}),e);t.dataset.observerReady=!0,n.observe(t)})),a.length)(o=function t(){t_animate__getChainOffsets(a)})(),window.addEventListener("resize",t_throttle((function(){o()}))),setInterval(o,5e3),window.addEventListener("scroll",t_throttle((function(){var t,e=window.pageYOffset+window.innerHeight;t_animate__animateChainsBlocks(a,e)})))}else{var o;(o=function t(){t_animate__getGroupsOffsets(e),t_animate__getChainOffsets(a),t_animate__getElemsOffsets(n)})(),window.addEventListener("resize",t_throttle(o)),setInterval(o,5e3),window.addEventListener("scroll",t_throttle((function(){var t=t_animate__deleteAnimatedEls(e,n);n=t[0];var i=t_animate__animateOnScroll(e=t[1],a,n);i&&i.length&&(e=i[0],a=i[1],n=i[2])})))}Array.prototype.forEach.call(t,(function(t){var e=t.querySelector(".t-popup");e&&e.addEventListener("scroll",t_throttle((function(){var t=window.pageYOffset+window.innerHeight;if(e.classList.contains("t-animate")&&"yes"===e.getAttribute("data-animate-chain")||e.querySelector(".t-animate[data-animate-chain=yes]")){var a=[e];t_animate__setAnimationStateChains(a),t_animate__getChainOffsets(a=Array.prototype.filter.call(a,(function(t){return t.querySelector(".t-animate_wait")}))),t_animate__animateChainsBlocks(a,t)}})))}))}}function t_animate__animateOnScroll(t,e,a){if(t.length||e.length||a.length){var n=window.pageYOffset,i=n+window.innerHeight,r,o,s;return[t_animate__animateGroups(t,i,n),t_animate__animateChainsBlocks(e,i,n),t_animate__animateElems(a,i,n)]}}function t_animate__animateGroups(t,e){return t.forEach((function(t){if(t.curTopOffset<e){var a=t.querySelectorAll(".t-animate");a=Array.prototype.filter.call(a,(function(t){return!(t.classList.contains("t-animate__btn-wait-chain")||"yes"===t.getAttribute("data-animate-chain"))})),t_animate__makeSectionButtonWait(t),t_animate__saveSectionHeaderStartTime(t),Array.prototype.forEach.call(a,(function(t){t.classList.remove("t-animate_wait"),t_animate__removeNoHoverClassFromBtns(t),t_animate__setStartAnimationClass(t,!1)}))}})),t}function t_animate__animateChainsBlocks(t,e){return t.forEach((function(t){t.itemsOffsets[0]<e&&t.querySelectorAll(".t-animate_wait").length&&(t_animate__animateChainItemsOnScroll(t,e),t.itemsOffsets.length&&t_animate__checkSectionButtonAnimation__outOfTurn(t))})),t}function t_animate__animateElems(t,e,a){return Array.prototype.filter.call(t,(function(t){var n=t_animate__detectElemTriggerOffset(t,e);return t.curTopOffset<n?(t.classList.remove("t-animate_wait"),t_animate__removeNoHoverClassFromBtns(t),t_animate__setStartAnimationClass(t,!1),"animatednumber"===t_animate__getAttrByResBase(t,"style")&&t_animate__animateNumbers(t),!0):!(t.curTopOffset<a)&&void 0})),t}function t_animate__deleteAnimatedEls(t,e){var a=window.pageYOffset,n=[],i=[];return t.forEach((function(t){if(t.curTopOffset<=a){var e=t.querySelectorAll(".t-animate");Array.prototype.forEach.call(e,(function(t){t_animate__removeAnimationClass(t,["wait","no-hover"])}))}else n.push(t)})),e.forEach((function(t){t.curTopOffset<=a?(t_animate__removeAnimationClass(t,["wait","no-hover"]),t_animate__setStartAnimationClass(t,!1)):i.push(t)})),[i,n]}function t_animate__animateChainItemsOnScroll(t,e){var a=t.querySelectorAll(".t-animate_wait[data-animate-chain=yes]");a=Array.prototype.slice.call(a);var n=0,i=0,r=t.itemsOffsets[0],o=.16,s=t_animate__getDelayFromPreviousScrollEvent(t,o),l=t_animate__getSectionHeadDealy(t);a.length&&a[0].classList.add("t-animate__chain_first-in-row");for(var m=0;m<a.length;m++){var c=a[m],_=t.itemsOffsets[m];if(!(_<e))break;_!==r&&(c.classList.add("t-animate__chain_first-in-row"),n=++i,r=_);var f=n*o+s+l;c.style.transitionDelay=f+"s",c.classList.remove("t-animate_wait"),t_animate__setStartAnimationClass(c,!1),c.setAttribute("data-animate-start-time",Date.now()+1e3*f),c[0]===a[a.length-1]&&t_animate__checkSectionButtonAnimation(t,f),+_==+r&&n++,a.splice(m,1),t.itemsOffsets.splice(m,1),m--}t_animate__catchTransitionEndEvent(t)}function t_animate__getSectionHeadDealy(t){var e=t.querySelector(".t-section__title.t-animate"),a=t.querySelector(".t-section__descr.t-animate"),n=0;if(e){var i=e.getAttribute("data-animate-start-time")||0;if(Date.now()-i<=160)return n=.16}if(a){var r=a.getAttribute("data-animate-start-time")||0;if(Date.now()-r<=160)return n=.16}return n}function t_animate__getDelayFromPreviousScrollEvent(t,e){var a=!t.querySelectorAll(".t-animate_started").length,n=t.querySelectorAll(".t-animate__chain_first-in-row.t-animate_started");if(n=Array.prototype.filter.call(n,(function(t){return!t.classList.contains("t-animate__chain_showed")})),a||!n.length)return 0;if(n.length){var i,r,o=(n[n.length-1].getAttribute("data-animate-start-time")||0)-Date.now();return o<=0?e:o/1e3+e}}function t_animate__setStartAnimationClass(t,e){if(t){if(e){var a="t-animate-for-wrapper",n=t.closest("."+a);n&&n.classList.remove(a)}var i;if(t.classList.add("t-animate_started"),"fadeinleft"===t.getAttribute("data-animate-style")){var r=t.closest(".t-animate__overflow-x-hidden");r&&!r.querySelector('[data-animate-style="fadeinleft"]:not(.t-animate_started)')&&r.classList.remove("t-animate__overflow-x-hidden")}}}function t_animate__catchTransitionEndEvent(t){var e=t.querySelectorAll(".t-animate__chain_first-in-row.t-animate_started");e=Array.prototype.filter.call(e,(function(t){return!t.classList.contains("t-animate__chain_showed")})),Array.prototype.forEach.call(e,(function(t){var e;["transitionend","webkitTransitionEnd","oTransitionEnd","otransitionend","MSTransitionEnd"].forEach((function(e){t.addEventListener(e,(function(){t_animate__addEventOnAnimateChain(t)})),t.removeEventListener(e,(function(){t_animate__addEventOnAnimateChain(t)}))}))}))}function t_animate__parseNumberText(){var t=window.pageYOffset,e=document.querySelectorAll(".t-animate[data-animate-style='animatednumber']");Array.prototype.forEach.call(e,(function(e){var a,n="",i=e.querySelectorAll("span");if(Array.prototype.forEach.call(i,(function(t){n+=t.getAttribute("style")||"",t.removeAttribute("style"),t.removeAttribute("data-redactor-style")})),e.querySelectorAll('div[data-customstyle="yes"]').length){var r=e.querySelector('div[data-customstyle="yes"]');a=r?r.innerHTML:"";var o=e.getAttribute("style")||"",s=e.querySelector("div[data-customstyle]"),l=s?s.getAttribute("style"):"";l&&(o+=l),e.setAttribute("style",o)}else a=e.innerHTML;if(n=n.split(";").filter((function(t,e){return n.split(";").indexOf(t)===e})).join(";"),!(e.getBoundingClientRect().top+window.pageYOffset<t-500)&&a.length){var m=a.replace(/<br>/g," ").replace(/[^\d., ]+/g,"").replace(/ (\.|,)/g,"").replace(/(\d)(?=\d) /g,"$1").trim(),c=m;if(-1===a.indexOf(m)&&(c=m=m.split(" ")[0]),""!==m){e.setAttribute("data-animate-number-count",a),t_animate__changeNumberOnZero(e,a.replace(c,"num"));var _=e.querySelectorAll("span");_=Array.prototype.filter.call(_,(function(t){return!t.classList.contains(".t-animate__number")})),Array.prototype.forEach.call(_,(function(t){t.setAttribute("style",n)}))}}}))}function t_animate__changeNumberOnZero(t,e){t.innerHTML=e.replace(/num/g,'<span class="t-animate__number">0</span>')}function t_animate__animateNumbers(t){if(!t)return!1;var e=t.getAttribute("data-animate-number-count"),a=[],n=t.querySelectorAll("span");(n=Array.prototype.filter.call(n,(function(t){return!t.classList.contains(".t-animate__number")}))).length&&(a=n[0].getAttribute("style")||"");var i=[],r=null;if(e){r=e.match(/\d+\.\d+|\d+,\d+/g);var o=e.match(/\d+/g),s,l;e.replace(/(\d)(?= \d) /g,"$1").split(" ").forEach((function(t){isNaN(parseInt(t.replace(/[^\d., ]+/g,""),10))||i.push(t.replace(/[^\d., ]+/g,""))}))}var m=0,c=!1,_=!1;t.removeAttribute("data-animate-number-count"),null!==r&&(_=-1!==r[0].indexOf(",")),i.forEach((function(t,e){var a;null!==r&&(-1!==t.indexOf(",")&&(a=t.split(",")),-1!==t.indexOf(".")&&(a=t.split(".")),-1===t.indexOf(",")&&-1===t.indexOf(".")||(m=a[1].length,i[e]=+a.join("."),c=!0))}));var f=t.querySelector(".t-animate__number");if(i[0]){var d=Number(i[0])||0,u=0,y=Math.pow(10,m);c&&(d*=y,u*=y);var p=12,h=0,g=setInterval((function(){if(u+=d/108,h=c?(Math.round(u)/y).toFixed(m)+"":Math.floor(u)+"",o.length>1&&(h=h.replace(/(\d)(?=(\d{3})+([^\d]|$))/g,"$1 ")),_&&(h=h.replace(/\./g,",")),f&&(f.textContent=h),u>=d){clearInterval(g),t.innerHTML=e;var n=t.querySelectorAll("span");Array.prototype.forEach.call(n,(function(t){t.setAttribute("style",a)}))}}),p)}}function t_animate__setAnimationState(t,e,a){var n=window.pageYOffset,i=n+window.innerHeight;t_animate__setGroupsBlocksState(t,n,i),e.forEach((function(t){t_animate__assignChainDelay(t,i,n),t_animate__checkSectionButtonAnimation__outOfTurn(t)})),t_animate__setAnimELemsState(a,n,i),window.addEventListener("resize",t_throttle(t_animate__removeInlineAnimStyles))}function t_animate__setAnimELemsState(t,e,a){t.forEach((function(t){var n=t.getBoundingClientRect().top+window.pageYOffset;if(n<e-500)return t_animate__removeAnimationClass(t,"no-hover"),"animatednumber"===t_animate__getAttrByResBase(t,"style")&&t_animate__animateNumbers(t),!0;var i=t_animate__detectElemTriggerOffset(t,a);t_animate__setCustomAnimSettings(t,n,a),n<i&&!t.closest(".t1093")&&(t_animate__removeNoHoverClassFromBtns(t),t_animate__setStartAnimationClass(t,!0),"animatednumber"===t_animate__getAttrByResBase(t,"style")&&t_animate__animateNumbers(t)),(n>=i||t.closest(".t1093"))&&t.classList.add("t-animate_wait")}))}function t_animate__setGroupsBlocksState(t,e,a){t.forEach((function(t){var n=t.querySelectorAll(".t-animate");n=Array.prototype.filter.call(n,(function(t){return!("yes"===t.getAttribute("data-animate-chain"))}));var i=t.getBoundingClientRect().top+window.pageYOffset;t_animate__removeAnimFromHiddenSlides(t);var r=t_animate__assignSectionDelay(t);t_animate__assignGroupDelay(t,r),Array.prototype.forEach.call(n,(function(n){var r=n.closest(".t397__off")||n.closest(".t395__off")||n.closest(".t400__off");if(n.classList.contains("t-animate_no-hover")&&r&&n.classList.remove("t-animate_no-hover"),i<=e-100)return t_animate__saveSectionHeaderStartTime(t),t_animate__removeAnimationClass(n,"no-hover"),n.style.transitionDelay="",!0;i<a&&i>e-100&&(t_animate__makeSectionButtonWait(t),n.classList.contains(".t-animate__btn-wait-chain")||(t_animate__removeNoHoverClassFromBtns(n),r?n.classList.add("t-animate_wait"):t_animate__setStartAnimationClass(n,!1))),i>=a&&n.classList.add("t-animate_wait")}))}))}function t_animate__setAnimationStateChains(t){if(!t||!t.length)return!1;var e=window.pageYOffset,a=e+window.innerHeight;Array.prototype.forEach.call(t,(function(t){t_animate__assignChainDelay(t,a,e),t_animate__checkSectionButtonAnimation__outOfTurn(t)}))}function t_animate__assignSectionDelay(t){var e=0,a=t.querySelectorAll(".t-section__title.t-animate"),n=t.querySelectorAll(".t-section__descr.t-animate");return a.length&&(e=.16),n.length&&(Array.prototype.forEach.call(n,(function(t){t.style.transitionDelay=e+"s"})),e+=.16),e}function t_animate__assignGroupDelay(t,e){var a=0;if(t.querySelectorAll("[data-animate-order]").length)t_animate__assignOrderedElemsDelay(t,e);else{var n=t.querySelectorAll(".t-img.t-animate"),i=t.querySelectorAll(".t-uptitle.t-animate"),r=t.querySelectorAll(".t-title.t-animate");r=Array.prototype.filter.call(r,(function(t){return!t.classList.contains("t-section__title")}));var o=t.querySelectorAll(".t-descr.t-animate");o=Array.prototype.filter.call(o,(function(t){return!t.classList.contains("t-section__descr")}));var s=t.querySelectorAll(".t-btn.t-animate, .t-btnwrapper.t-animate");s=Array.prototype.filter.call(s,(function(t){return!t.closest(".t-section__bottomwrapper")}));var l=t.querySelectorAll(".t-timer.t-animate"),m=t.querySelectorAll("form.t-animate");n.length&&(a=.5),r.length&&Array.prototype.forEach.call(r,(function(t){t.style.transitionDelay=a+"s"})),r.length&&(a+=.3),o.length&&Array.prototype.forEach.call(o,(function(t){t.style.transitionDelay=a+"s"})),o.length&&(a+=.3),i.length&&Array.prototype.forEach.call(i,(function(t){t.style.transitionDelay=a+"s"})),i.length&&(a+=.3),(i.length||r.length||o.length)&&(a+=.2),l.length&&Array.prototype.forEach.call(l,(function(t){t.style.transitionDelay=a+"s"})),l.length&&(a+=.5),s.length&&(s[0].style.transitionDelay=a+"s"),2===s.length&&(a+=.4),2===s.length&&(s[1].style.transitionDelay=a+"s"),0!==m.length&&Array.prototype.forEach.call(m,(function(t){t.style.transitionDelay=a+"s"}))}}function t_animate__assignOrderedElemsDelay(t,e){var a=0;e&&(a=e);var n=t.querySelectorAll('.t-animate[data-animate-order="1"]'),i=t.querySelectorAll('.t-animate[data-animate-order="2"]'),r=t.querySelectorAll('.t-animate[data-animate-order="3"]'),o=t.querySelectorAll('.t-animate[data-animate-order="4"]'),s=t.querySelectorAll('.t-animate[data-animate-order="5"]'),l=t.querySelectorAll('.t-animate[data-animate-order="6"]'),m=t.querySelectorAll('.t-animate[data-animate-order="7"]'),c=t.querySelectorAll('.t-animate[data-animate-order="8"]'),_=t.querySelectorAll('.t-animate[data-animate-order="9"]');n.length&&Array.prototype.forEach.call(n,(function(t){t.style.transitionDelay=a+"s"})),n.length&&i.length&&(a+=1*t_animate__getAttrByResBase(i[0],"delay"),Array.prototype.forEach.call(i,(function(t){t.style.transitionDelay=a+"s"}))),(n.length||i.length)&&r.length&&(a+=1*t_animate__getAttrByResBase(r[0],"delay"),Array.prototype.forEach.call(r,(function(t){t.style.transitionDelay=a+"s"}))),(n.length||i.length||r.length)&&o.length&&(a+=1*t_animate__getAttrByResBase(o[0],"delay"),Array.prototype.forEach.call(o,(function(t){t.style.transitionDelay=a+"s"}))),(n.length||i.length||r.length||o.length)&&s.length&&(a+=1*t_animate__getAttrByResBase(s[0],"delay"),Array.prototype.forEach.call(s,(function(t){t.style.transitionDelay=a+"s"}))),(n.length||i.length||r.length||o.length||s.length)&&l.length&&(a+=1*t_animate__getAttrByResBase(l[0],"delay"),Array.prototype.forEach.call(l,(function(t){t.style.transitionDelay=a+"s"}))),(n.length||i.length||r.length||o.length||s.length||l.length)&&m.length&&(a+=1*t_animate__getAttrByResBase(m[0],"delay"),Array.prototype.forEach.call(m,(function(t){t.style.transitionDelay=a+"s"}))),(n.length||i.length||r.length||o.length||s.length||l.length||m.length)&&c.length&&(a+=1*t_animate__getAttrByResBase(c[0],"delay"),Array.prototype.forEach.call(c,(function(t){t.style.transitionDelay=a+"s"}))),(n.length||i.length||r.length||o.length||s.length||l.length||m.length||c.length)&&_.length&&(a+=1*t_animate__getAttrByResBase(_[0],"delay"),Array.prototype.forEach.call(_,(function(t){t.style.transitionDelay=a+"s"})))}function t_animate__assignChainDelay(t,e,a){var n=t.querySelectorAll(".t-animate[data-animate-chain=yes]"),i=0;if(n.length){var r=n[0],o=r.getBoundingClientRect().top+window.pageYOffset;r.classList.add("t-animate__chain_first-in-row");var s=t_animate__getCurBlockSectionHeadDelay(t);Array.prototype.forEach.call(n,(function(l){var m=l.getBoundingClientRect().top+window.pageYOffset;if(m<a)return t_animate__removeAnimationClass(l,""),!0;if(m<e){m!==o&&(l.classList.add("t-animate__chain_first-in-row"),o=m);var c=.16*i+s,_;l.style.transitionDelay=c+"s",t_animate__setStartAnimationClass(l,!1),l.setAttribute("data-animate-start-time",Date.now()+1e3*c),r===n[n.length-1]&&t_animate__checkSectionButtonAnimation(t,c),i++,["transitionend","webkitTransitionEnd","oTransitionEnd","otransitionend","MSTransitionEnd"].forEach((function(t){l.addEventListener(t,(function(){t_animate__addEventOnAnimateChain(l)})),l.removeEventListener(t,(function(){t_animate__addEventOnAnimateChain(l)}))}))}else l.classList.add("t-animate_wait")}))}}function t_animate__getAttrByResBase(t,e){var a,n=t.closest(".t396__artboard");if(!n)return t.getAttribute("data-animate-"+e);var i,r="ab"+n.getAttribute("data-artboard-recid"),o,s,l;void 0!==window.tn[r]?(o=window.tn[r].curResolution,s=window.tn[r].curResolution_max,l=window.tn[r].screens.slice()):(o=window.tn.curResolution,s=1200,l=[320,480,640,960,1200]);var m=t.closest(".t396__elem, .t396__group"),c=m&&m.getAttribute("data-animate-mobile");if(o===s)a=t.getAttribute("data-animate-"+e);else{if("y"!==c&&o<1200)return t.style.transition="none",null;a=t.getAttribute("data-animate-"+e+"-res-"+o)}if(!a&&""!==a)for(var _=0;_<l.length;_++){var f=l[_];if(!(f<=o)&&(a=f===s?t.getAttribute("data-animate-"+e):t.getAttribute("data-animate-"+e+"-res-"+f)))break}return a}function t_animate__hasWaitAnimation(t){return t.filter((function(t){return t.classList.contains("t-animate_wait")||t.querySelector(".t-animate_wait")}))}function t_animate__addEventOnAnimateChain(t){t.classList.add("t-animate__chain_showed")}function t_animate__setCustomAnimSettings(t,e,a){var n=t_animate__getAttrByResBase(t,"style"),i=t_animate__getAttrByResBase(t,"distance");if(i&&""!==i){switch(i=i.replace("px",""),t.style.transitionDuration="0s",t.style.transitionDelay="0s",n){case"fadeinup":t.style.transform="translate3d(0,"+i+"px,0)";break;case"fadeindown":t.style.transform="translate3d(0,-"+i+"px,0)";break;case"fadeinleft":t.style.transform="translate3d("+i+"px,0,0)";break;case"fadeinright":t.style.transform="translate3d(-"+i+"px,0,0)"}t_animate__forceElemInViewPortRepaint(t,e,a),t.style.transitionDuration="",t.style.transitionDelay=""}var r=t_animate__getAttrByResBase(t,"scale");r&&(t.style.transitionDuration="0s",t.style.transitionDelay="0s",t.style.transform="scale("+r+")",t_animate__forceElemInViewPortRepaint(t,e,a),t.style.transitionDuration="",t.style.transitionDelay="");var o=t_animate__getAttrByResBase(t,"delay");o&&(t.style.transitionDelay=o+"s");var s=t_animate__getAttrByResBase(t,"duration");s&&(t.style.transitionDuration=s+"s")}function t_animate__removeInlineAnimStyles(){if(window.innerWidth<980){var t=document.querySelectorAll(".t396__elem.t-animate:not(.t-animate_wait)");Array.prototype.forEach.call(t,(function(t){t.style.transform="",t.style.transitionDuration="",t.style.transitionDelay=""}))}}function t_animate__forceElemInViewPortRepaint(t,e,a){t&&e<a+500&&t.offsetHeight}function t_animate__detectElemTriggerOffset(t,e){var a=t_animate__getAttrByResBase(t,"trigger-offset"),n=e;return a&&(n=e-1*(a=a.replace("px",""))),n}function t_animate__saveSectionHeaderStartTime(t){var e=t.querySelectorAll(".t-section__title.t-animate"),a=t.querySelectorAll(".t-section__descr.t-animate");e.length&&Array.prototype.forEach.call(e,(function(t){t.setAttribute("data-animate-start-time",Date.now())})),a.length&&Array.prototype.forEach.call(a,(function(t){t.setAttribute("data-animate-start-time",Date.now()+160)}))}function t_animate__getCurBlockSectionHeadDelay(t){var e=0;return t.querySelectorAll(".t-section__title.t-animate").length&&(e+=.16),t.querySelectorAll(".t-section__descr.t-animate").length&&(e+=.16),e}function t_animate__makeSectionButtonWait(t){var e=t.querySelectorAll(".t-animate[data-animate-chain=yes]").length,a=t.querySelectorAll(".t-section__bottomwrapper .t-btn.t-animate");e.length&&a.length&&Array.prototype.forEach.call(a,(function(t){t.classList.add("t-animate__btn-wait-chain")}))}function t_animate__checkSectionButtonAnimation(t,e){var a=t.querySelectorAll(".t-animate__btn-wait-chain");a.length&&Array.prototype.forEach.call(a,(function(t){t.style.transitionDelay=e+.16+"s",t_animate__removeNoHoverClassFromBtns(t),t.classList.remove("t-animate__btn-wait-chain"),t_animate__setStartAnimationClass(t,!1)}))}function t_animate__checkSectionButtonAnimation__outOfTurn(t){var e=t.querySelectorAll(".t-animate[data-animate-chain=yes]"),a;(e=Array.prototype.filter.call(e,(function(t){return!t.classList.contains("t-animate_started")}))).length||t_animate__checkSectionButtonAnimation(t,.16)}function t_animate__addNoHoverClassToBtns(){var t=document.querySelectorAll(".t-btn.t-animate");Array.prototype.forEach.call(t,(function(t){t.classList.add("t-animate_no-hover")}))}function t_animate__removeNoHoverClassFromBtns(t){if(!t)return!1;var e=t.classList.contains("t-btn")?t:null;e&&(e.ontransitionend=function(t){"opacity"!==t.propertyName&&"transform"!==t.propertyName||(e.classList.remove("t-animate_no-hover"),e.style.transitionDelay="",e.style.transitionDuration="",this.ontransitionend=null)})}function t_animate__getGroupsOffsets(t){t.forEach((function(t){var e=t.querySelector(".t-animate");if(e){t.curTopOffset=e.getBoundingClientRect().top+window.pageYOffset;var a=t_animation__getZoom(t);window.isOnlyScalable||(t.curTopOffset*=a)}}))}function t_animation__getZoom(t){if(void 0!==t.scaleFactor)return t.scaleFactor;var e=t.closest(".t396__artboard");if(!e)return 1;var a=document.querySelector('script[src*="tilda-blocks-2.7"]');return e.classList.contains("t396__artboard_scale")||!a&&"undefined"!=typeof t396_ab__getFieldValue&&"window"===t396_ab__getFieldValue(e,"upscale")?window.tn_scale_factor:1}function t_animate__getChainOffsets(t){t.forEach((function(t){var e=t.querySelectorAll(".t-animate_wait[data-animate-chain=yes]");t.itemsOffsets=[],Array.prototype.forEach.call(e,(function(e,a){t.itemsOffsets[a]=e.getBoundingClientRect().top+window.pageYOffset}))}))}function t_animate__getElemsOffsets(t){t.forEach((function(t){t.curTopOffset=window.pageYOffset+t.getBoundingClientRect().top;var e=t_animation__getZoom(t);window.isOnlyScalable||(t.curTopOffset*=e)}))}function t_animate__removeAnimFromHiddenSlides(t){var e;if(t.querySelectorAll(".t-slides").length){var a=t.querySelectorAll(".t-slides__item");a=Array.prototype.filter.call(a,(function(t){return!t.classList.contains("t-slides__item_active")}));var n=[];a.forEach((function(t){var e=t.querySelector(".t-animate");e&&n.push(e)})),n.forEach((function(t){t_animate__removeAnimationClass(t,"no-hover")}))}}function t_animate__wrapTextWithOpacity(){var t=document.querySelectorAll(".t-title.t-animate, .t-descr.t-animate, .t-uptitle.t-animate, .t-text.t-animate");Array.prototype.forEach.call(t,(function(t){var e=t.getAttribute("style");if(e&&-1!==e.indexOf("opacity")){var a=t.style.opacity;if(a&&a>0){t.style.opacity="";var n=document.createElement("div");n.style.opacity=a;var i=t.childNodes;Array.prototype.forEach.call(i,(function(t){var e=t.cloneNode(!0);n.appendChild(e)})),t.innerHTML="",t.appendChild(n)}}}))}function t_animate__checkIE(){var t=window.navigator.userAgent,e=t.indexOf("MSIE"),a="",n=!1;return e>0&&(8!==(a=parseInt(t.substring(e+5,t.indexOf(".",e))))&&9!==a||(n=!0)),n}"loading"!==document.readyState?t_animate__init():document.addEventListener("DOMContentLoaded",t_animate__init);


/* === tilda-zero === */
function t396__parseGlobalStyleCSSVar(t){try{var e,i=/var\((--uc-([^-]+)-([^-]+)-([^,]+)),\s?(.*)\)/.exec(t);if(!i)return;var r=i[0],o=i[1],n=i[2],a=i[3],l=i[4],d=i[5],_,s;if(!(r&&n&&a&&l&&d))return;return{parent:{id:l,type:n},fallback:window.getComputedStyle(document.body).getPropertyValue(o)||d,field:a}}catch(u){console.error("Error trying to parse CSS Variable")}}function t396__hex2rgba(t,e){if(!t)return!1;var i=t396__parseGlobalStyleCSSVar(t);i&&(t=i.fallback);var r=t.replace(/#/,"");if(3===r.length){var o=r[0],n=r[1],a=r[2];t="#"+o+o+n+n+a+a}var l=parseInt(t.substring(1),16),d,_,s;return[(16711680&l)>>16,(65280&l)>>8,255&l,parseFloat(e)]}function t396__isElementUsingCalcZoom(t){var e=["gallery"],i=t.getAttribute("data-elem-type");return e.includes(i)}function t396__isFlex(t){var e=t.classList.contains("t396__artboard-flex"),i=t.classList.contains("t396__group-flex");return e||i}function t396__setOverflowToAllRecords(){var t=document.getElementById("allrecords");if(t){var e=[".t951__sidebar_sticky",".t1206__content_sticky",".t754__col_fixed",".t776__col_fixed",".t786__col_fixed",".t-store__prod-popup__col_fixed"];t396__generateOverflowStyle();var i=Boolean(document.querySelector(e.join(", ")));t.classList.remove("t-records__overflow-clip","t-records__overflow-hidden"),t.classList.add(i?"t-records__overflow-clip":"t-records__overflow-hidden")}}function t396__generateOverflowStyle(){if(!document.getElementById("t396__overflow-styles")){var t=document.createElement("style");t.id="t396__overflow-styles",t.innerHTML=".t-records__overflow-clip { overflow: clip; }\n\t\t\t\t\t\t.t-records__overflow-hidden { overflow: hidden; }",document.head.appendChild(t)}}function t396__getArtboards(t){var e=document.getElementById("allrecords"),i,r=e&&"edit"===e.getAttribute("data-tilda-mode")?'.record[data-record-type="'+t+'"] .r:not(.t397__off, .t395__off, .t400__off) .t396__artboard, .record[data-parenttplid="'+t+'"] .r:not(.t397__off, .t395__off, .t400__off) .t396__artboard':'.r[data-record-type="'+t+'"]:not(.t397__off, .t395__off, .t400__off) .t396__artboard, .r[data-parenttplid="'+t+'"]:not(.t397__off, .t395__off, .t400__off) .t396__artboard';return Array.from(document.querySelectorAll(r))}function t396__getZeroBlocks(){var t=[].concat(t396__getArtboards("396"),t396__getArtboards("121")),e;return t.length?t.map((function(t){return{record:t.closest(".r:not(.t397__off):not(.t395__off):not(.t400__off)"),artboard:t}})).filter((function(t){return t.record})):[]}function t396__isInsideGroupWithZoom(t){for(var e=t.closest(".t396__group");e;){var i;if(e.style.zoom)return!0;e=null==(i=e.parentElement)?void 0:i.closest(".t396__group")}return!1}var t396__uniqueId__generator=function t(){var e=0;return function(){var t=String(e+=1).padStart(6,"0");return""+Date.now()+t}},t396__getUniqueId=t396__uniqueId__generator();function t396_isBlockVisible(t){var e=window.innerWidth,i=t.getAttribute("data-screen-min"),r=t.getAttribute("data-screen-max");return!(i&&e<parseInt(i,10))&&!(r&&e>parseInt(r,10))}var t396__onReady=function t(e){"loading"!==document.readyState?e():document.addEventListener("DOMContentLoaded",e)};function t396_elem__getFormInputsValue(t){var e=t.querySelector(".tn-atom__inputs-textarea");if(e){var i=e.value;if(i)try{return JSON.parse(i)}catch(n){return console.error("Error parsing form inputs textarea value:",n,i),[]}}var r=t.querySelector(".tn-atom__inputs-data");if(r){var o=r.getAttribute("data-value");if(o)try{return JSON.parse(o)}catch(n){return console.error("Error parsing form inputs data:",n,o),[]}}return[]}function t396_init(t){var e=document.getElementById("rec"+t),i=e?e.querySelector(".t396"):null,r=e?e.querySelector(".t396__artboard"):null;if(r){t396_initTNobj(t,r),t396__initOnlyScalable();var o="",n=t396_detectResolution(t),a=document.getElementById("allrecords"),l=a&&"edit"===a.getAttribute("data-tilda-mode");void 0===window.tn.isEditMode&&(window.tn.isEditMode=l),t396_switchResolution(t,n);var d="window"===t396_ab__getFieldValue(r,"upscale"),_=t396__setGlobalScaleVariables(t,n,d);if(t396__setScaleFactorForElements(t,_),t396_updateTNobj(t),t396_artboard_build(o,t),window.addEventListener("load",(function(){t396_allelems__renderView(r),t396_allgroups__renderView(r),t396__initializeArtboardOverflow(a,r)})),window.tildaMembers&&"MutationObserver"in window){var s=new MutationObserver((function(e){e.forEach((function(e){"attributes"===e.type&&"class"===e.attributeName&&e.target.classList.contains("tlk-courses_page")&&(t396_doResize(t,!0),s.disconnect())}))}));s.observe(document.body,{attributes:!0})}document.querySelector(".t830")&&t_onReady((function(){var e,i;["t830__allrecords_padd","t830__allrecords_padd-small"].some((function(t){return a.classList.contains(t)}))?t396_doResize(t,!0):a.addEventListener("allRecPaddingInit",(function(){t396_doResize(t,!0)}))})),e&&i&&r&&"yes"===e.getAttribute("data-connect-with-tab")&&i.addEventListener("displayChanged",(function(){t396_allelems__renderView(r),t396_allgroups__renderView(r),t396_doResize(t,!0)}));var u="hug"===r.getAttribute("data-artboard-heightmode"),c;if(u){var f=t_throttle((function(){t396__updateAutoHeight(r)}),100);f(),setInterval(f,3e3),document.fonts&&document.fonts.ready.then(f),r.querySelectorAll("img").forEach((function(t){t.onload=f})),new MutationObserver(f).observe(r,{subtree:!0,characterData:!0,characterDataOldValue:!0}),new MutationObserver((function(t){t.forEach((function(t){var e;"childList"===t.type&&(Array.from(t.addedNodes).concat(Array.from(t.removedNodes)).some((function(t){return 3!==t.nodeType&&(t.classList.contains("t396__elem")||t.classList.contains("t396__group"))}))&&f())}))})).observe(r,{subtree:!0,childList:!0})}(a.classList.contains("t235__beforeready")||e&&e.closest("#allrecordstable")||a.querySelector('[data-record-type="263"]'))&&i&&r&&i.addEventListener("displayChanged",(function(){t396_allelems__renderView(r),t396_allgroups__renderView(r),t396_doResize(t,!0)}));var g=!!document.querySelector(".t635__textholder");e&&g&&i&&r&&i.addEventListener("animationInited",(function(){t396_allelems__renderView(r),t396_allgroups__renderView(r),t396_doResize(t,!0)})),e&&document.querySelector(".t431")&&i&&r&&t_onReady((function(){setTimeout((function(){t396_doResize(t,!0)}))})),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&i&&i.classList.add("t396_safari"),d&&!l&&t_onFuncLoad("t396_scaleBlock",(function(){t396_scaleBlock(t)})),l||"y"!==t396_ab__getFieldValue(r,"fixed-need-js")||t_onFuncLoad("t396__processFixedArtBoard",(function(){t396__processFixedArtBoard(r)})),t396__processAbsoluteArtBoard(r),t396__processTopShift(r,t,!1),window.t396__isMobile||u||t396__removeInlineHeight([r,r.querySelector(".t396__carrier"),r.querySelector(".t396__filter")]),l||t396__intializeUndercut(e)}}window.t396__isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||navigator.userAgent.indexOf("Instagram")>-1,window.t396__isIPad="ontouchend"in document&&-1!==navigator.userAgent.indexOf("AppleWebKit"),window.t396__isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),window.t396__isTouchDevice="ontouchend"in document,window.t396__isInAppBrowser=/WebView|(iPhone|iPod|iPad)(?!.*Safari)/gi.test(navigator.userAgent),window.t396__isFacebookMessengerInApp=/FBAN|FBAV/gi.test(navigator.userAgent)&&window.t396__isInAppBrowser,window.t396__isInstagramInApp=/\bInstagram/gi.test(navigator.userAgent)&&window.t396__isInAppBrowser,t_onReady(t396__globalInit);var t396_waitForFinalEvent=function(){var t={};return function(e,i,r){var o=r||"Don't call this twice without a uniqueId";t[o]&&clearTimeout(t[o]),t[o]=setTimeout(e,i)}}();function t396__handleResizeOpenedPopup(){t396__waitForPopup().then((function(t){if(t){var e=t.querySelector(".t396__artboard");e&&t396_doResize(e.getAttribute("data-artboard-recid"))}}))}function t396__initPopupResize(){document.body.removeEventListener("popupShowed",t396__handleResizeOpenedPopup),document.body.addEventListener("popupShowed",t396__handleResizeOpenedPopup)}function t396_ab__getWindowHeight(t){return t396__shouldUseVisualViewportHeight()&&t396__isInPopup(t)?window.visualViewport.height:t396__getWindowDimensions().height;var e,i}function t396_ab__getWindowWidth(t){return t396__isInPopup(t)?document.documentElement.clientWidth:t396__getWindowDimensions().width;var e,i}function t396__getTNWindowHeight(){return window.t396__isMobile||window.t396__isIPad?document.documentElement.clientHeight:window.innerHeight}function t396__getTNWindowWidth(){var t=t396__getBlockEditorWidth();if(t)return t;var e=document.documentElement.clientWidth,i=t396__getAxisXPadding();return i&&(e-=i),e}function t396__getCSSWindowWidth(){var t=t396__getBlockEditorWidth(),e;return t||(window.t396__isMobile||window.t396__isIPad||window.t396__isSafari?document.documentElement.clientWidth:window.innerWidth)}function t396__getWindowDimensions(t){var e,i=(t||{}).forceUpdate,r=void 0!==i&&i,o=!window.tn.window_width||!window.tn.window_height||!window.tn.window_width_css,n;return(r||o)&&t396__updateWindowDimensions(),{width:window.tn.window_width,height:window.tn.window_height,cssWidth:window.tn.window_width_css}}function t396__updateWindowDimensions(){window.tn.window_width=t396__getTNWindowWidth(),window.tn.window_height=t396__getTNWindowHeight(),window.tn.window_width_css=t396__getCSSWindowWidth()}function t396__revalidateDimensions(){var t,e=t396__getWindowDimensions().width,i,r;return t396__updateWindowDimensions(),e!==t396__getWindowDimensions().width}function t396__removeInlineHeight(t){"1.0"!==window.TN_SCALE_INITIAL_VER&&t.filter(Boolean).forEach((function(t){t&&(t.style.height="")}))}function t396__clearInitialScaleStyles(){if("1.0"===window.TN_SCALE_INITIAL_VER){var t=function t(e){var i;e&&("var(--initial-scale-height)"===e.style.getPropertyValue("height")&&e.style.removeProperty("height"))},e;t396__getZeroBlocks().forEach((function(e){var i=e.artboard;i&&(i.style.removeProperty("--initial-scale-height"),t(i),t(i.querySelector(".t396__carrier")),t(i.querySelector(".t396__filter")))}))}}function t396__globalInit(){window.tn||t396_initTNobj__createDefault(),t396__isAllZeroBlocksRendered((function(){t396__applyFixesForAllElements(),t396__initializeAnchorLinkOverflowFix(),t396__initPopupResize(),t396__clearInitialScaleStyles(),window.addEventListener("resize",t396__onResize),window.addEventListener("orientationchange",t396__onOrientationChange)}))}function t396__onResize(){t396_waitForFinalEvent((function(){var t;t396__revalidateDimensions()&&(t396__getZeroBlocks().forEach((function(t){var e=t.record;if(e&&t396_isBlockVisible(e))try{t396_doResize(e.id.replace("rec",""))}catch(i){console.error("Error trying to resize "+e.id,i)}})),document.dispatchEvent(new CustomEvent("zero:window-width-changed")))}),500,"global_resize_zero_unique_id")}function t396__onOrientationChange(){t396_waitForFinalEvent((function(){t396__updateWindowDimensions(),t396__getZeroBlocks().forEach((function(t){var e=t.record;e&&t396_isBlockVisible(e)&&t396_doResize(e.id.replace("rec",""))}))}),600,"global_orientationchange_zero_unique_id")}function t396_isOnlyScalableBrowser(){return window.isOnlyScalable}function t396__initOnlyScalable(){if(void 0===window.isOnlyScalable){var t=window.navigator.userAgent.match(/Firefox\/([0-9]+)\./),e=t?parseInt(t[1],10):126,i=window.navigator.userAgent.match(/Chrome\/([0-9]+)\./),r=i&&parseInt(i[1],10)||0;window.isOnlyScalable=e<126,window.shouldUseScaleFactor=!window.isOnlyScalable&&!t&&r<=127}}function t396__setGlobalScaleVariables(t,e,i){var r=1,o=document.getElementById("rec"+t),n=o?o.querySelector(".t396__artboard"):null;if(!n)return 1;var a=t396_ab__getWindowWidth(n),l=i?parseFloat((a/e).toFixed(3)):1,d="ab"+t;window.tn[d].scaleFactor=l,window.tn_scale_factor=l;var _=document.getElementById("rec"+t);return _&&!window.tn.isEditMode&&_.style.setProperty("--zoom",l.toString()),l}function t396__processTopShift(t,e,i){"function"!=typeof window.t396__updateTopShift||"y"!==t396_ab__getFieldValue(t,"shift-processed")&&"y"!==t396_ab__getFieldValue(t,"fixed-shift")||window.t396__updateTopShift(e,i)}function t396_doResize(t,e){e&&t396__updateWindowDimensions();var i=t396_isOnlyScalableBrowser(),r=document.getElementById("rec"+t),o=document.getElementById("allrecords"),n=t396_detectResolution(t),a;if(t396_removeElementFromDOM(r?r.querySelector(".t396__scale-style"):null),i){var l=r?r.querySelectorAll(".tn-molecule, .tn-atom"):[];Array.prototype.forEach.call(l,(function(t){if(!t.classList.contains("tn-atom")||!t.closest(".tn-molecule")){var e=t.closest(".tn-atom__scale-wrapper"),i=e?e.parentNode:null;i&&i.removeChild(e),i&&i.appendChild(t)}}))}else{var d=r?r.querySelectorAll(".t396__elem, .t396__group"):[];Array.prototype.forEach.call(d,(function(t){t.style.zoom="";var e=t.querySelector(".tn-atom");e&&(e.style.transformOrigin="",e.style.fontSize="",e.style.webkitTextSizeAdjust="")}))}t396_switchResolution(t,n);var _=r?r.querySelector(".t396__artboard"):null,s="window"===t396_ab__getFieldValue(_,"upscale"),u=t396__setGlobalScaleVariables(t,n,s);t396__setScaleFactorForElements(t,u),t396_updateTNobj(t),t396_ab__renderView(_);var c=o?o.getAttribute("data-tilda-mode"):"";s&&"edit"!==c&&t_onFuncLoad("t396_scaleBlock",(function(){t396_scaleBlock(t)})),"edit"!==c&&"y"===t396_ab__getFieldValue(_,"fixed-need-js")&&t_onFuncLoad("t396__processFixedArtBoard",(function(){t396__processFixedArtBoard(_)})),t396__processAbsoluteArtBoard(_),t396__processTopShift(_,t,!0),t396_allelems__renderView(_),t396_allgroups__renderView(_),t396__applyFixesForAllElements(),t396__updateAutoHeight(_),_&&_.dispatchEvent(new CustomEvent("artBoardResized"));var f="hug"===_.getAttribute("data-artboard-heightmode");_&&!f&&(window.t396__isMobile||t396__removeInlineHeight([_,_.querySelector(".t396__carrier"),_.querySelector(".t396__filter")]))}function t396__updateAutoHeight(t){var e,i;if("hug"===t.getAttribute("data-artboard-heightmode")){var r=t396__getAutoHeight(t),o=t.offsetHeight;if(!(Math.abs(r-o)<=.7)){var n,a="ab"+t.getAttribute("data-artboard-recid"),l=window.tn[a].curResolution,d;l===window.tn[a].curResolution_max?t.setAttribute("data-artboard-height",r):t.setAttribute("data-artboard-height-res-"+l,r),t396_ab__renderView(t),null==(e=t.closest(".t396"))||e.dispatchEvent(new CustomEvent("zero:height-changed"))}}}function t396__getAutoHeight(t){var e,i=t.classList.contains("t396__artboard-flex"),r=Array.from(t.querySelectorAll(":scope > .tn-group, :scope > .tn-elem")),o=t.style.height,n;if(t396__autoHeight__canAutocalculateHeight(t,r)&&o){var a=t.style.height;t.style.height="auto",e=t.offsetHeight,t.style.height=a}else e=r.reduce((function(e,r){var o=t396_core__getFieldValue(r,"axisy"),n=t396_core__getFieldValue(r,"topunits"),a=t396_core__getFieldValue(r,"heightunits");if("%"===n||"%"===a||"bottom"===o||"center"===o)return e;var l=0;if("gallery"===r.getAttribute("data-elem-type")&&(l=t396__autoHeight__getAdditionalOffsetForGallery(r)),i){var d=t396__ab__getPaddingValue(t,"paddingbottom");l+=parseInt(d,10)}var _=r.offsetTop+r.offsetHeight+l,s,u,c;"window"!==t396_ab__getFieldValue(t,"upscale")||window.tn.isEditMode||(_*=t396__getCurrentScaleFactor(t.getAttribute("data-artboard-recid")));return _>e?_:e}),-1/0);return e===-1/0?0:e}function t396__autoHeight__getAdditionalOffsetForGallery(t){var e=0,i=t.querySelector(".t-slds__title"),r="none"!==t396_core__getFieldValue(t,"slds_dotscontrols"),o="under"===t396_core__getFieldValue(t,"slds_arrowcontrols");if(i||r||o){var n=t.querySelector(".t-slds__title"),a=n?n.offsetHeight:0,l=t.querySelector(".t-slds__caption.t-slds__caption-active"),d=getComputedStyle(l),_;e+=parseInt(d.marginTop,10)+a}return i||!r&&!o||(e-=20),e}function t396__autoHeight__canAutocalculateHeight(t,e){var i,r;if(!t.classList.contains("t396__artboard-flex"))return!1;if(e.some((function(t){return"gallery"===t.getAttribute("data-elem-type")}))){var o=t396_ab__getFieldValue(t,"flexdirection"),n=t396_ab__getFieldValue(t,"flexalignitems"),a=t396_ab__getFieldValue(t,"flexjustifycontent"),l;return"row"===o&&"flex-end"===n||"column"===o&&"flex-end"===a}return!0}function t396__ab__getPaddingValue(t,e){var i=(t396_ab__getFieldValue(t,"padding")||"0px 0px 0px 0px").split(" "),r={paddingtop:i[0],paddingright:i[1],paddingbottom:i[2],paddingleft:i[3]};return parseInt(r[e],10)||0}function t396__processAbsoluteArtBoard(t){if(t){var e=t396_ab__getFieldValue(t,"pos");if("fixed"!==e){var i="t396__artboard-fixed-no-bg";if("absolute"===e){var r=getComputedStyle(t),o=t.querySelector(".t396__filter"),n=!o||"none"===getComputedStyle(o).backgroundImage,a,l="rgba(0, 0, 0, 0)"===r.backgroundColor&&"none"===r.backgroundImage&&n?"add":"remove";t.classList[l](i)}else t.classList.remove(i)}}}function t396_detectResolution(t){if(!t)return null;var e,i=t396__getWindowDimensions().cssWidth,r="ab"+t,o;return window.tn[r].screens.forEach((function(t){i>=t&&(o=t)})),void 0===o&&(o=window.tn[r].screens[0]),o}function t396_initTNobj__createDefault(){window.tn={},window.tn.ab_fields=["height","width","bgcolor","bgimg","bgattachment","bgposition","filteropacity","filtercolor","filteropacity2","filtercolor2","height_vh","valign"]}function t396_initTNobj(t,e){e&&(window.tn||t396_initTNobj__createDefault(),t396_setScreensTNobj(t,e))}function t396_setScreensTNobj(t,e){var i="ab"+t;window.tn[i]={},window.tn[i].screens=[];var r=e.getAttribute("data-artboard-screens");r?(r=r.split(",")).forEach((function(t){window.tn[i].screens.push(parseInt(t,10))})):window.tn[i].screens=[320,480,640,960,1200]}function t396__getAxisXPadding(){var t=document.getElementById("allrecords"),e=Boolean(window.tildaMembers)||"allrecords"===window.zero_window_width_hook,i,r;return t&&e&&[document.body,t].reduce((function(t,e){var i=window.getComputedStyle(e).paddingLeft,r=window.getComputedStyle(e).paddingRight;return t+parseInt(i,10)+parseInt(r,10)}),0)||0}function t396_updateTNobj(t){for(var e,i=t396__getWindowDimensions().width,r="ab"+t,o=window.tn[r].screens.slice().reverse(),n=0;n<o.length;n++)window.tn[r].curResolution===o[n]&&(window.tn[r].canvas_min_width=o[n],window.tn[r].canvas_max_width=0===n?i:o[n-1]);var a="allrecords"===window.zero_window_width_hook;window.tn[r].grid_width=window.tn[r].canvas_min_width;var l=(i-window.tn[r].grid_width)/2;window.tn[r].grid_offset_left=l<0&&a?0:l}function t396_switchResolution(t,e){var i="ab"+t,r=window.tn[i].screens[window.tn[i].screens.length-1];window.tn[i].curResolution=e,window.tn[i].curResolution_max=r,window.tn.curResolution=e,window.tn.curResolution_max=r}function t396_artboard_build(t,e){var i=document.getElementById("rec"+e),r=i?i.querySelector(".t396__artboard"):null;if(r){t396_ab__renderView(r),t396_allgroups__renderView(r);var o=r.querySelectorAll(".tn-elem");Array.prototype.forEach.call(o,(function(t){var i;switch(t.getAttribute("data-elem-type")){case"text":t396_addText(r,t);break;case"image":t396_addImage(r,t);break;case"shape":t396_addShape(r,t);break;case"button":t396_addButton(r,t);break;case"video":t396_addVideo(r,t);break;case"html":t396_addHtml(r,t);break;case"tooltip":t396_addTooltip(r,t);break;case"form":t396_addForm(r,t,e);break;case"gallery":t396_addGallery(r,t,e);break;case"vector":t396_addVector(r,t)}})),r.classList.remove("rendering"),r.classList.add("rendered"),r.dispatchEvent(new Event("artBoardRendered",{bubbles:!0,cancelable:!0}));var n=r.getAttribute("data-artboard-ovrflw");if(["visible","visibleX"].includes(n)&&(t396__setOverflowToAllRecords(),document.body.addEventListener("tStoreGalleryInitialized",(function(){t396__setOverflowToAllRecords()}))),"auto"===n){var a=Math.abs(r.offsetHeight-r.clientHeight);0!==a&&(r.style.paddingBottom=a+"px")}if(window.t396__isMobile||window.t396__isIPad){var l=document.createElement("style");l.textContent="@media only screen and (min-width:1366px) and (orientation:landscape) and (-webkit-min-device-pixel-ratio:2) {.t396__carrier {background-attachment:scroll!important;}}",i.insertAdjacentElement("beforeend",l)}}}function t396_ab__renderView(t){if(t){for(var e=window.tn.ab_fields,i=document.getElementById("allrecords"),r,o=0;o<e.length;o++)t396_ab__renderViewOneField(t,e[o]);var n=t396_ab__getFieldValue(t,"height"),a=t396_ab__getHeight(t),l,d=t396__getCurrentScaleFactor(t.getAttribute("data-artboard-recid")),_=!!i&&"edit"===i.getAttribute("data-tilda-mode"),s="window"===t396_ab__getFieldValue(t,"upscale"),u,c,f;if(r=t396_ab__getFieldValue(t,"height_vh"),s&&!_&&r&&(u=parseInt(n,10)*d),n===a||u&&u>=a)c=0;else switch(t396_ab__getFieldValue(t,"valign")){case"top":default:c=0;break;case"center":c=u?parseFloat(((a-u)/2).toFixed(1)):parseFloat(((a-n)/2).toFixed(1));break;case"bottom":c=u?parseFloat((a-u).toFixed(1)):parseFloat((a-n).toFixed(1));break;case"stretch":c=0,n=a}t.setAttribute("data-artboard-proxy-min-offset-top",c),t.setAttribute("data-artboard-proxy-min-height",n),t.setAttribute("data-artboard-proxy-max-height",a);var g=t.querySelector(".t396__filter"),w=t.querySelector(".t396__carrier"),p;if(r=t396_ab__getFieldValue(t,"height_vh"),r=parseFloat(r),(window.t396__isMobile||window.t396__isIPad)&&r){var h=t396_ab__getWindowHeight(t)*r/100;t.style.height=h+"px",g&&(g.style.height=h+"px"),w&&(w.style.height=h+"px")}"hug"===t.getAttribute("data-artboard-heightmode")&&!r&&(t.style.height=n+"px",g&&(g.style.height=n+"px"),w&&(w.style.height=n+"px"))}}function t396__getCurrentScaleFactor(t){var e="ab"+t,i;return window.tn&&window.tn[e]&&window.tn[e].scaleFactor||window.tn_scale_factor}function t396__setScaleFactorForElements(t,e){var i=document.getElementById("rec"+t),r=i?i.querySelector(".t396__artboard"):null;if(r){var o=r.querySelectorAll(".t396__elem, .tn-group");Array.prototype.forEach.call(o,(function(t){t.scaleFactor=e}))}}function t396_addText(t,e){var i=t396_getEl(e);if(i){var r="top,left,width,height,container,axisx,axisy,widthunits,leftunits,topunits";i.setAttribute("data-fields",r),t396_elem__renderView(i)}}function t396_addImage(t,e){var i=t396_getEl(e);if(i){var r="img,width,filewidth,fileheight,top,left,container,axisx,axisy,widthunits,leftunits,topunits";i.setAttribute("data-fields",r),t396_elem__renderView(i);var o=i.querySelector("img");o&&(o.addEventListener("load",(function(){document.contains(o)&&(t396_elem__renderViewOneField(i,"top"),o.src&&setTimeout((function(){document.contains(o)&&(t396_elem__renderViewOneField(i,"top"),t396__updateAutoHeight(t))}),2e3))})),o.complete&&(t396_elem__renderViewOneField(i,"top"),o.src&&setTimeout((function(){document.contains(o)&&(t396_elem__renderViewOneField(i,"top"),t396__updateAutoHeight(t))}),2e3)),o.addEventListener("tuwidget_done",(function(){t396_elem__renderViewOneField(i,"top")})),setTimeout((function(){t396_changeFilterOnSafari(i)})))}}function t396_addShape(t,e){var i=t396_getEl(e);if(i){var r="width,height,top,left,";r+="container,axisx,axisy,widthunits,heightunits,leftunits,topunits",i.setAttribute("data-fields",r),t396_elem__renderView(i)}}function t396_changeFilterOnSafari(t){var e;if(/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&(t396__checkContainBackdropFilter(t)&&"IntersectionObserver"in window)){var i=t.querySelector(".tn-atom"),r;new IntersectionObserver((function(e,i){e.forEach((function(e){if(e.isIntersecting){var r=e.target;i.unobserve(r),t396__processBackdropFilterOnImage(t)}}))})).observe(i)}}function t396__checkContainBackdropFilter(t){if(!t)return!1;var e=window.getComputedStyle(t).webkitBackdropFilter;if(e&&"none"!==e)return!0;var i=t.querySelector(".tn-atom__sbs-anim-wrapper, .tn-atom__prx-wrapper, .tn-atom__sticky-wrapper");if(!i)return!1;var r=window.getComputedStyle(i).webkitBackdropFilter;return r&&"none"!==r}function t396__processBackdropFilterOnImage(t){if(t){var e=t.getAttribute("data-animate-sbs-opts"),i=t.getAttribute("data-animate-prx")||t.getAttribute("data-animate-fix"),r=e||i,o=t.classList.contains("t396__elem--backdrop-filter-img-wrappered");r&&o||!r?t396__updateBackdropFilterOnImage(t):t.addEventListener("backdropFilterImgWrappered",(function(){t396__updateBackdropFilterOnImage(t)}))}}function t396__updateBackdropFilterOnImage(t){if(t){var e=t,i=e.querySelector("img"),r=e.querySelector(".tn-atom__sbs-anim-wrapper, .tn-atom__prx-wrapper, .tn-atom__sticky-wrapper"),o="";r&&(e=r,o=window.getComputedStyle(e).webkitBackdropFilter||""),e.style.webkitBackdropFilter="none",t396_waitForUploadImg(i,(function(){e.style.webkitBackdropFilter=o}))}}function t396_waitForUploadImg(t,e){if("y"===window.lazy)var i=setTimeout((function(){t.classList.contains("loaded")&&t.clientWidth&&t.src?(e(),clearTimeout(i)):t396_waitForUploadImg(t,e)}),300);else e()}function t396_addButton(t,e){var i=t396_getEl(e);if(!i)return null;var r="top,left,width,height,container,axisx,axisy,caption,leftunits,topunits";return i.setAttribute("data-fields",r),t396_elem__renderView(i),i}function t396_addVideo(t,e){var i=t396_getEl(e);if(i){var r="width,height,top,left,";r+="container,axisx,axisy,widthunits,heightunits,leftunits,topunits",i.setAttribute("data-fields",r),t396_elem__renderView(i),t_onFuncLoad("t396_initVideo",(function(){t396_initVideo(i)}))}}function t396_addHtml(t,e){var i=t396_getEl(e);if(i){var r="width,height,top,left,";r+="container,axisx,axisy,widthunits,heightunits,leftunits,topunits",i.setAttribute("data-fields",r),t396_elem__renderView(i)}}function t396_addTooltip(t,e){var i=t396_getEl(e);if(i){var r="width,height,top,left,";r+="container,axisx,axisy,widthunits,heightunits,leftunits,topunits,tipposition",i.setAttribute("data-fields",r),t396_elem__renderView(i),t_onFuncLoad("t396_initTooltip",(function(){t396_initTooltip(i)}))}}function t396_addForm(t,e,i){var r=t396_getEl(e);if(r){var o="width,top,left,";o+="inputs,container,axisx,axisy,widthunits,leftunits,topunits",r.setAttribute("data-fields",o);var n=t396_elem__getFormInputsValue(r),a=r.getAttribute("data-fe-elem-id")||r.getAttribute("data-elem-id");t_onFuncLoad("t_zeroForms__init",(function(){t396_elem__renderView(r),t_zeroForms__init(i,a,n),t396_elem__renderView(r)}))}}function t396_addGallery(t,e,i){var r=t396_getEl(e);if(r){var o="width,height,top,left,";o+="imgs,container,axisx,axisy,widthunits,heightunits,leftunits,topunits",r.setAttribute("data-fields",o),t396_elem__renderView(r);var n=r.getAttribute("data-fe-elem-id")||r.getAttribute("data-elem-id");t_onFuncLoad("t_zeroGallery__init",(function(){t_zeroGallery__init(i,n)}))}}function t396_addVector(t,e){var i=t396_getEl(e);if(i){var r="width,filewidth,fileheight,top,left,container,axisx,axisy,widthunits,leftunits,topunits";i.setAttribute("data-fields",r),t396_elem__renderView(i)}}function t396_elem__getFieldValue(t,e){var i=t396_getEl(t);if(!i)return null;if(i.classList.contains("tn-group"))return t396_group__getFieldValue(i,e);var r=i.closest(".t396__artboard"),o=r.getAttribute("data-artboard-recid"),n="ab"+o,a;void 0===window.tn[n]&&(t396_initTNobj(o,r),t396_switchResolution(o,t396_detectResolution(o)));var l=window.tn[n].curResolution,d=window.tn[n].curResolution_max,_=window.tn[n].screens,s;if(!(s=l===d?i.getAttribute("data-field-"+e+"-value"):i.getAttribute("data-field-"+e+"-res-"+l+"-value"))&&""!==s)for(var u=0;u<_.length;u++){var c=_[u];if(!(c<=l)&&(s=c===d?i.getAttribute("data-field-"+e+"-value"):i.getAttribute("data-field-"+e+"-res-"+c+"-value")))break}var f=t396__parseGlobalStyleCSSVar(s);return f&&(s=f.fallback),s}function t396_elem__renderView(t){var e=t396_getEl(t),i=e?e.getAttribute("data-fields"):"";i&&(i=i.split(",")).forEach((function(t){t396_elem__renderViewOneField(e,t)}))}function t396_group__renderView(t){var e=t?t.getAttribute("data-fields"):"";e&&(e=e.split(",")).forEach((function(e){var i=t396_group__getFieldValue(t,e);switch(e){case"left":i=t396_elem__convertPosition__Local__toAbsolute(t,e,i),t.style.left=parseFloat(i).toFixed(1)+"px";break;case"top":i=t396_elem__convertPosition__Local__toAbsolute(t,e,i),t.style.top=parseFloat(i).toFixed(1)+"px";break;case"container":t396_elem__renderViewOneField(t,"left"),t396_elem__renderViewOneField(t,"top")}}))}function t396_elem__renderViewOneField(t,e){var i=t396_getEl(t);if(i){var r=document.getElementById("allrecords"),o=r?r.getAttribute("data-tilda-mode"):"",n,a="window"===t396_ab__getFieldValue(i.closest(".t396__artboard"),"upscale");if("yes"!==i.getAttribute("data-scale-off")||!a||"edit"===o){var l=t396_elem__getFieldValue(i,e),d,_=["fill","hug"],s=t396__isElementUsingCalcZoom(i);switch(e){case"left":l=t396_elem__convertPosition__Local__toAbsolute(i,e,l),l=s?t396__zoomifyValue(i,l):parseFloat(l).toFixed(1)+"px",i.style.left=l;break;case"top":l=t396_elem__convertPosition__Local__toAbsolute(i,e,l),l=s?t396__zoomifyValue(i,l):parseFloat(l).toFixed(1)+"px",i.style.top=l;break;case"width":d=i.getAttribute("data-elem-type");var u=t396_elem__getFieldValue(i,"widthmode"),c;if((c=t396_elem__getFieldValue(i,"textfit"))||("button"===d?c="fixedsize":"text"===d&&(c="autoheight")),("text"===d||"button"===d)&&"autowidth"===c)return void(i.style.width="auto");if(_.includes(u))return void(i.style.width="");switch(l=t396_elem__getWidth(i,l),i.style.width=parseFloat(l).toFixed(1)+"px",d){case"tooltip":var f=i.querySelectorAll(".tn-atom__pin-icon");Array.prototype.forEach.call(f,(function(t){var e=parseFloat(l).toFixed(1)+"px";t.style.width=e,t.style.height=e})),i.style.height=parseInt(l).toFixed(1)+"px";break;case"gallery":t396_elem__setGallerySize(i,"width",l)}break;case"height":d=i.getAttribute("data-elem-type");var g=t396_elem__getFieldValue(i,"heightmode"),c;if((c=t396_elem__getFieldValue(i,"textfit"))||("button"===d?c="fixedsize":"text"===d&&(c="autoheight")),("text"===d||"button"===d)&&["autowidth","autoheight","singleline"].includes(c))return void(i.style.height="auto");if(_.includes(g)&&"tooltip"!==d)return void(i.style.height="");if("tooltip"===d)return;l=t396_elem__getHeight(i,l),i.style.height=parseFloat(l).toFixed(1)+"px","gallery"===d&&t396_elem__setGallerySize(i,"height",l);break;case"container":t396_elem__renderViewOneField(i,"left"),t396_elem__renderViewOneField(i,"top");break;case"inputs":try{l=t396_elem__getFormInputsValue(i),window.t_zeroForms__renderForm(i,l)}catch(w){}}"width"!==e&&"height"!==e&&"fontsize"!==e&&"fontfamily"!==e&&"letterspacing"!==e&&"fontweight"!==e&&"img"!==e||(t396_elem__renderViewOneField(i,"left"),t396_elem__renderViewOneField(i,"top"))}}}function t396_elem__setGallerySize(t,e,i){var r=i,o=t396_elem__getFieldValue(t,"borderwidth"),n=t396_elem__getFieldValue(t,"borderstyle");n&&o&&"none"!==n||(o=0),r-=2*o;var a=Math.round(parseFloat(r))+"px";a="width"===e||"height"===e?t396__zoomifyValue(t,a,{round:!0}):t396__zoomifyValue(t,a);var l=t.querySelector(".t-slds__main"),d=t.querySelectorAll(".tn-atom__slds-img");t.style[e]=a,l&&(l.style[e]=a),Array.prototype.forEach.call(d,(function(t){t.style[e]=a}))}function t396_elem__convertPosition__Local__toAbsolute(t,e,i){var r=t396_getEl(t);if(!r)return null;var o=r.closest(".t396__artboard"),n=o.getAttribute("data-artboard-recid"),a="ab"+n,l=t396_ab__getFieldValue(o,"valign"),d="window"===t396_ab__getFieldValue(o,"upscale"),_=document.getElementById("allrecords"),s,u="edit"===(_?_.getAttribute("data-tilda-mode"):""),c=t396_isOnlyScalableBrowser(),f=!u&&d&&c,g=!u&&d&&!c,w=t396_elem__getFieldValue(r,"axisy"),p=t396_elem__getFieldValue(r,"axisx"),h=t396_elem__getFieldValue(r,"container"),m=r.classList.contains("tn-group")&&"physical"===t396_group__getFieldValue(r,"type"),b=r.parentNode.closest(".tn-group"),v="physical"===t396_group__getFieldValue(b,"type");m&&(h=h||"grid");var y=parseInt(i),F,A,S,x,V,E,I,k=t396__getCurrentScaleFactor(n);switch(e){case"left":var z,L=t396__getWindowDimensions().width,B;if(F="grid"===h?"grid":"window",A="grid"===h?window.tn[a].grid_offset_left:0,V="grid"===h?window.tn[a].grid_width:L,"%"===t396_elem__getFieldValue(r,"leftunits")&&(y=t396_roundFloat(V*y/100)),v){var O=parseInt(t396_group__getFieldValue(b,"left"),10),q;"%"===t396_group__getFieldValue(b,"leftunits")&&(O=t396_roundFloat(V*O/100)),y-=O;break}!u&&d?"grid"===h&&c&&(y*=k):y=A+y,"center"===p&&(x=t396_elem__getWidth(r),f&&"window"!==F&&(V*=k,x*=k),y=V/2-x/2+y),"right"===p&&(x=t396_elem__getWidth(r),f&&"window"!==F&&(V*=k,x*=k),y=V-x+y),f&&"window"!==F&&(y+=((x=t396_elem__getWidth(r))*k-x)/2);break;case"top":var R=r.closest(".t396__artboard"),T=R?R.getAttribute("data-artboard-proxy-min-offset-top"):"0",W=R?R.getAttribute("data-artboard-proxy-min-height"):"0",H=R?R.getAttribute("data-artboard-proxy-max-height"):"0",C=function t(e){var i=t396_elem__getHeight(e);if(e&&"image"===e.getAttribute("data-elem-type")){var r=t396_elem__getWidth(e),o=t396_elem__getFieldValue(e,"filewidth"),n=t396_elem__getFieldValue(e,"fileheight"),a;if(o&&n)i=r/(parseInt(o)/parseInt(n))}return i},P;if(F="grid"===h?"grid":"window",S="grid"===h?parseFloat(T):0,I="grid"===h?parseFloat(W):parseFloat(H),"%"===t396_elem__getFieldValue(r,"topunits")&&(y=I*(y/100)),v){var M=parseInt(t396_group__getFieldValue(b,"top"),10),N;"%"===t396_group__getFieldValue(b,"topunits")&&(M=t396_roundFloat(I*M/100)),y-=M;break}f&&"window"!==F&&(y*=k),g&&"window"!==F&&(S="stretch"===l?0:S/k),y=S+y;var D=t396_ab__getFieldValue(R,"height_vh"),j=t396_ab__getFieldValue(R,"height"),G=t396_ab__getHeight(R),Z;if(d&&!u&&D&&(Z=parseInt(j,10)*k),"center"===w&&(E=C(r),f&&"window"!==F&&("stretch"!==l?I*=k:I=Z?Z>G?Z:G:R.clientHeight,E*=k),u||!d||c||"window"===F||"stretch"!==l||(I=Z?Z>G?Z:G:R.clientHeight,I/=k),y=I/2-E/2+y),"bottom"===w&&(E=C(r),f&&"window"!==F&&("stretch"!==l?I*=k:I=Z?Z>G?Z:G:R.clientHeight,E*=k),u||!d||c||"window"===F||"stretch"!==l||(I=Z?Z>G?Z:G:R.clientHeight,I/=k),y=I-E+y),f&&"window"!==F){var U=((E=C(r))*k-E)/2;y+=U=Math.round(U)}}return y}function t396_elem_findFirstLevelParentGroup(t){for(var e=t.closest(".t396__group");e;){var i=e.parentElement.closest(".t396__group");if(!i)break;e=i}return e}function t396_ab__getFieldValue(t,e){if(!t)return null;var i,r=t.getAttribute("data-artboard-recid"),o="ab"+r,n;void 0===window.tn[o]&&(t396_initTNobj(r,t),t396_switchResolution(r,t396_detectResolution(r)));var a=window.tn[o].curResolution,l=window.tn[o].curResolution_max,d=window.tn[o].screens;if(null===(i=a===l?t.getAttribute("data-artboard-"+e):t.getAttribute("data-artboard-"+e+"-res-"+a)))for(var _=0;_<d.length;_++){var s=d[_];if(!(s<=a)&&null!==(i=s===l?t.getAttribute("data-artboard-"+e):t.getAttribute("data-artboard-"+e+"-res-"+s)))break}var u=t396__parseGlobalStyleCSSVar(i);return u&&(i=u.fallback),i}function t396_ab__renderViewOneField(t,e){t396_ab__getFieldValue(t,e)}function t396_core__getFieldValue(t,e){return t.classList.contains("t396__elem")?t396_elem__getFieldValue(t,e):t396_group__getFieldValue(t,e)}function t396_group__getFieldValue(t,e){if(!t)return null;var i,r,o="ab"+t.closest(".t396__artboard").getAttribute("data-artboard-recid"),n=window.tn[o].curResolution,a=window.tn[o].curResolution_max,l=window.tn[o].screens,d=["widthmode","heightmode","flex"].includes(e)?"":"-value";if(null===(i=n===a?t.getAttribute("data-group-"+e+d):t.getAttribute("data-group-"+e+"-res-"+n+d)))for(var _=0;_<l.length;_++){var s=l[_];if(!(s<=n)&&null!==(i=s===a?t.getAttribute("data-group-"+e+d):t.getAttribute("data-group-"+e+"-res-"+s+d)))break}var u=t396__parseGlobalStyleCSSVar(i);return u&&(i=u.fallback),i}function t396_allgroups__renderView(t){if(t){var e=t.querySelectorAll(".tn-group"),i=Array.prototype.filter.call(e,(function(t){return"physical"===t396_group__getFieldValue(t,"type")}));Array.prototype.forEach.call(i,(function(t){t396_group__renderView(t),t396_allgroups__renderViewAutolayout(t)}))}}function t396_allgroups__renderViewAutolayout(t){if(t&&t.classList.contains("t396__group-flex")){var e=t396_group__getFieldValue(t,"widthmode"),i=t396_group__getFieldValue(t,"heightmode");"fill"===e?(t.style.width="100%",t.style.flexShrink="1"):(t.style.width="hug"===e?"min-content":"",t.style.height="hug"===i?"initial":"",t.style.flexShrink="")}}function t396_allelems__renderView(t){if(t){var e=t.querySelectorAll(".tn-elem");Array.prototype.forEach.call(e,(function(t){t396_elem__renderView(t)}))}}function t396_ab__getHeight(t,e){var i=e;i||(i=t396_ab__getFieldValue(t,"height")),i=parseFloat(i);var r=t396_ab__getFieldValue(t,"height_vh");if(r&&(r=parseFloat(r),!isNaN(r))){var o=t396_ab__getWindowHeight(t)*r/100;i<o&&(i=o)}return i}function t396_elem__getWidth(t,e){var i=t396_getEl(t),r,o,n="ab"+i.closest(".t396__artboard").getAttribute("data-artboard-recid"),a=e,l,d,_,s;(a||(a=t396_elem__getFieldValue(i,"width")),a=parseFloat(a),"%"===t396_elem__getFieldValue(i,"widthunits"))&&(a="window"===t396_elem__getFieldValue(i,"container")?t396__getWindowDimensions().width*a/100:window.tn[n].grid_width*a/100);return a}function t396_elem__getHeight(t,e){var i=t396_getEl(t),r=e;r||(r=t396_elem__getFieldValue(i,"height")),r=parseFloat(r);var o=i.getAttribute("data-elem-type"),n=t396_elem__getFieldValue(i,"textfit"),a;if(n||("button"===o?n="fixedsize":"text"===o&&(n="autoheight")),"shape"===o||"video"===o||"html"===o||"gallery"===o||("text"===o||"button"===o)&&"fixedsize"===n){var l;if("%"===t396_elem__getFieldValue(i,"heightunits")){var d=i.closest(".t396__artboard"),_=d?d.getAttribute("data-artboard-proxy-min-height"):"0",s=d?d.getAttribute("data-artboard-proxy-max-height"):"0",u=parseFloat(_),c=parseFloat(s),f;r="window"===t396_elem__getFieldValue(i,"container")?c*(r/100):u*(r/100)}return r}if("text"===o){var g=i.querySelector(".tn-atom");g&&(g.style.lineHeight="")}return i.clientHeight}function t396_roundFloat(t){return Math.round(100*t)/100}function t396_removeElementFromDOM(t){var e=t396_getEl(t);e&&e.parentNode&&e.parentNode.removeChild(e)}function t396_getEl(t){return window.jQuery&&t instanceof jQuery?t.length?t.get(0):null:t}function t396__getBlockEditorWidth(){if(!window.tn.isEditMode)return 0;var t,e=window.getComputedStyle(document.body).getPropertyValue("--page-view-width");return e&&"100%"!==e?parseInt(e,10):0}function t396__isAllZeroBlocksRendered(t,e){void 0===e&&(e=0);var i=t396__getZeroBlocks(),r=document.getElementById("allrecords"),o=r&&"edit"===r.getAttribute("data-tilda-mode"),n="ready"===document.body.getAttribute("data-ready-status"),a=!1;if(i.length||!o||n){if(!i.length&&o&&n)return e>30?void t():void setTimeout((function(){t396__isAllZeroBlocksRendered(t,e+1)}),100);var l=i.map((function(t){return t.artboard})),d;if(l.length>0&&l.every((function(t){return t.classList.contains("rendered")})))t();else{var _=l.filter((function(t){return t.classList.contains("rendered")}));l.forEach((function(e){e.classList.contains("rendered")||e.addEventListener("artBoardRendered",(function(){_.push(e),_.length!==l.length||a||t()}))})),setTimeout((function(){a=!0,_.length!==l.length&&t()}),3e3)}}else{var s=new MutationObserver((function(e){e.forEach((function(e){"ready"===e.target.getAttribute("data-ready-status")&&(s.disconnect(),t396__isAllZeroBlocksRendered(t))}))}));s.observe(document.body,{attributes:!0,attributeFilter:["data-ready-status"]})}}function t396__processElementsTransform(t){var e=t396__initFastDOM(),i=[];e.read((function(){Array.prototype.forEach.call(t,(function(t){var e=t.getAttribute("data-elem-type");if("text"===e||"image"===e||"shape"===e||"button"===e||"vector"===e){var r=getComputedStyle(t),o=r.backdropFilter&&"none"!==r.backdropFilter||r.webkitBackdropFilter&&"none"!==r.webkitBackdropFilter,n=t.getAttribute("data-animate-style");if(o&&!n){var a=t.querySelector(".tn-atom"),l=a?window.getComputedStyle(a).transform:"none";"matrix(1, 0, 0, 1, 0, 0)"===l&&(l="none"),"none"!==l&&i.push({element:t,atom:a,atomTransform:l})}}}))})),e.write((function(){i.forEach((function(t){t.atom.style.transform="none",t.element.style.transform=t.atomTransform}))}))}function t396__fixElementsLineHeights(t){var e=t396__initFastDOM(),i=[];e.read((function(){Array.prototype.forEach.call(t,(function(t){var e;if("text"===t.getAttribute("data-elem-type")){var r=t.querySelector(".tn-atom");if(r&&!t396__isInsideGroupWithZoom(t)){var o=t.style.zoom,n=r.style.webkitTextSizeAdjust,a=r.style.fontSize;i.push({element:t,atom:r,zoom:o,textSizeAdjust:n,fontSize:a})}}}))})),e.write((function(){i.forEach((function(t){t.atom.style.removeProperty("line-height"),window.t396__isSafari&&t.zoom&&(t.atom.style.webkitTextSizeAdjust="none",t.atom.style.fontSize="",t.element.style.zoom="")}))})),e.read((function(){i.forEach((function(t){t.computedLineHeight=parseFloat(window.getComputedStyle(t.atom).lineHeight)}))})),e.write((function(){i.forEach((function(t){var e=t.computedLineHeight;window.t396__isSafari&&t.zoom&&(t.atom.style.webkitTextSizeAdjust=t.textSizeAdjust,t.atom.style.fontSize=t.fontSize,t.zoom&&(t.element.style.zoom=t.zoom)),e&&!isNaN(e)&&(t.atom.style.lineHeight=Math.round(e)+"px")}))}))}function t396__fixElementsFontSizes(t){var e;if(!window.t396__isMobile&&window.t396__isIPad||window.t396__isFacebookMessengerInApp||window.t396__isInstagramInApp){var i=t396__initFastDOM(),r=[];i.read((function(){Array.prototype.forEach.call(t,(function(t){var e=t.getAttribute("data-elem-type");if("text"===e||"button"===e){var i=t.querySelector(".tn-atom");if(i){var o=t396_elem_findFirstLevelParentGroup(t),n={element:t,atom:i,zoom:1,elementType:e};if(o&&o.style.zoom&&(n.zoom=parseFloat(o.style.zoom)),1!==n.zoom){var a=t396_elem__getFieldValue(t,"fontsize");a&&(n.fieldFontSize=parseFloat(a)),r.push(n)}}}}))})),i.write((function(){r.forEach((function(t){t.atom.style.fontSize=""}))})),i.read((function(){r.forEach((function(t){var e=parseFloat(window.getComputedStyle(t.atom).fontSize),i=t.fieldFontSize&&Math.abs(t.fieldFontSize-e)<=.01,r=Number.isInteger(e);t.correctFontSize=i||r?"calc("+e+"px * var(--zoom, 1))":"calc("+e+"px * var(--zoom, 1) * var(--zoom, 1))"}))})),i.write((function(){r.forEach((function(t){t.atom.style.fontSize=t.correctFontSize}))}))}}function t396__initFastDOM(){return{read:function t(e){e()},write:function t(e){e()}}}function t396__applyFixesForAllElements(){var t=document.querySelectorAll(".t396__elem"),e=window.t396__isSafari||window.t396__isFacebookMessengerInApp||window.t396__isInstagramInApp;document.fonts&&e?document.fonts.ready.then((function(){t396__fixElementsFontSizes(t),t396__fixElementsLineHeights(t)})):t396__fixElementsLineHeights(t),t396__processElementsTransform(t)}function t396__zoomifyValue(t,e,i){void 0===i&&(i={});var r,o=e+(String(e).endsWith("px")?"":"px"),n;if(t396__isInsideGroupWithZoom(t))return o;var a=window.CSS&&window.CSS.supports&&CSS.supports("width","round(10px, 1px)");return i.round&&a?"round("+o+" * var(--zoom, 1), 1px)":"calc("+o+" * var(--zoom, 1))"}function t396__isInPopup(t){if(!t)return!1;var e=t.getAttribute("data-artboard-recid"),i,r;return document.getElementById("rec"+e).parentNode.classList.contains("t-popup__container")}function t396__waitForPopup(){return new Promise((function(t){var e=0,i=5;function r(){var i=document.querySelector(".t-popup_show");i?t(i):e>=5?t(null):(e++,setTimeout(r,100*e))}r()}))}function t396__shouldUseVisualViewportHeight(){return"visualViewport"in window&&window.t396__isMobile&&window.t396__isSafari}function t396__getRootZone(){var t=document.getElementById("allrecords"),e;return t&&t.getAttribute("data-tilda-root-zone")||"com"}function t396__intializeUndercut(t){if(t&&t.querySelector(".ql-undercut")){var e,i="https://static.tildacdn."+t396__getRootZone()+"/js/tilda-undercut-1.0.min.js";t_onFuncLoad("t_loadJsFile",(function(){t_loadJsFile(i,(function(){t_onFuncLoad("t_quillUndercut_parseNodes",(function(){t_quillUndercut_parseNodes(t)}))}))}))}}function t396__initializeArtboardOverflow(t,e){if(e&&t){var i=window.getComputedStyle(e).getPropertyValue("overflow");if("auto"===i){var r=t.getAttribute("data-tilda-lazy");"y"!==window.lazy&&"yes"!==r||t_onFuncLoad("t_lazyload_update",(function(){e.addEventListener("scroll",t_throttle(window.t_lazyload_update,500))}))}""!==window.location.hash&&"visible"===i&&(e.style.overflow="hidden",setTimeout((function(){e.style.overflow="visible"}),1))}}function t396__initializeAnchorLinkOverflowFix(){var t=document.querySelectorAll('[data-artboard-ovrflw="visible"]');t.length&&document.addEventListener("click",(function(e){var i;e.target.closest('a[href^="#"]')&&(t.forEach((function(t){t.style.overflow="hidden"})),setTimeout((function(){t.forEach((function(t){t.style.overflow="visible"}))})))}))}


/* === tilda-popup === */
function t_popup__trapFocus(t){var e=t.querySelectorAll('a, button, input:not([type="hidden"]):not(.js-form-spec-comments), select, textarea, embed, video, iframe, [tabindex="0"]'),o=e[0],p=e[e.length-1];document.addEventListener("keydown",(function(t){if(document.body.classList.contains("t-body_popupshowed")){var e="Tab"===t.key||9===t.keyCode,n;(e||e&&t.shiftKey)&&(t.shiftKey&&document.activeElement.classList.contains("t-popup_show")&&p.focus(),"Tab"!==t.key||t.shiftKey||document.activeElement!==p||(t.preventDefault(),o.focus()),"Tab"===t.key&&t.shiftKey&&document.activeElement===o&&(t.preventDefault(),p.focus()))}}))}function t_popup__addAttributesForAccessibility(t){var e=document.querySelectorAll('a[href="'+t+'"]');Array.prototype.forEach.call(e,(function(t){t&&(t.setAttribute("role","button"),t.setAttribute("aria-haspopup","dialog"))}))}function t_popup__resizePopup(t){var e=document.getElementById("rec"+t);if(e){var o=e.querySelector(".t-popup__container");if(o){var p=getComputedStyle(o,null),n=parseInt(p.paddingTop)||0,r=parseInt(p.paddingBottom)||0,s=o.clientHeight-(n+r),c=120,u=e.getAttribute("data-parenttplid")||e.getAttribute("data-record-type"),a,i="1093"===u||"121"===u&&e.querySelector(".t1093");"364"!==u&&"365"!==u||(c=30),("868"===u||"331"===u||"358"===u||"1013"===u||"746"===u||i)&&(c=0),s>window.innerHeight-c?o.classList.add("t-popup__container-static"):o.classList.remove("t-popup__container-static")}}}function t_popup__showPopup(t){t&&(t.style.display="block"),setTimeout((function(){t.focus();var e=t?t.querySelector(".t-popup__container"):null;e&&e.classList.add("t-popup__container-animated"),t&&t.classList.add("t-popup_show"),t_onFuncLoad("t_popup__trapFocus",(function(){t_popup__trapFocus(t)}))}),50)}function t_popup__closePopup(t){var e=document.querySelector(".t-popup.t-popup_show"),o=t.querySelector(".t-popup__container");if(t===e){var p=document.body;p.dispatchEvent(new CustomEvent("popupHidden")),p.classList.remove("t-body_popupshowed"),p.classList.remove("t-quiz__body_popupshowed")}t.classList.remove("t-popup_show"),o.style.removeProperty("transition"),o.classList.remove("t-popup__container_no-transform"),setTimeout((function(){var t;document.querySelectorAll(".t-popup:not(.t-popup_show)").forEach((function(t){t.style.display="none"}))}),300),t_popup__addFocusOnTriggerButton()}function t_popup__addClassOnTriggerButton(t,e){var o=document.querySelectorAll(".t-popup__triggered-btn");Array.prototype.forEach.call(o,(function(t){t.classList.remove("t-popup__triggered-btn")})),t.addEventListener("keydown",(function(t){if(13===t.keyCode){var o=t.target,p=!!o.closest('a[href="'+e+'"]')&&o;if(!p)return;window.isMobile||p.classList.add("t-popup__triggered-btn")}}))}function t_popup__addFocusOnTriggerButton(){var t=document.querySelector(".t-popup__triggered-btn");t&&!t.classList.contains("t724__opener")&&(t.focus(),t.classList.remove("t-popup__triggered-btn"))}Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.msMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.oMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){for(var e=this;e&&1===e.nodeType;){if(Element.prototype.matches.call(e,t))return e;e=e.parentElement||e.parentNode}return null});


/* === tilda-forms === */
function _catch$1(t,e){try{var r=t()}catch(o){return e(o)}return r&&r.then?r.then(void 0,e):r}var FORMS_API_FIELD={EMAIL:"em",PHONE:"ph",NAME:"nm",CONTACT_METHOD:"contact_method",INPUT:"in",TEXTAREA:"ta",DATE:"da",TEXT:"tx",URL:"ur",HIDDEN:"hd",SELECT:"sb",TIME:"tm",VARIANTS:"rd",IMAGE_VARIANTS:"ri",RATING:"rs",CHECKBOX:"cb",FILE:"uw",UPLOADCARE_FILE:"uc",DELIVERY:"dl",SAVE_CONTACT:"sf",PROMOCODE:"pc",QUANTITY:"qn",RANGE:"rg",CALC:"fr",WHITESPACE:"ws"},t_formsApi__safeValue=function t(e){return e?e.value:""},t_formsApi__safeFocus=function t(e){return e&&e.focus()},t_formsApi__sendChange=function t(e){return e&&e.dispatchEvent(new Event("change"))},t_formsApi__sendReset=function t(e){return e&&e.dispatchEvent(new CustomEvent("reset"))},t_formsApi__safeSetValue=function t(e,r,o){var n,a=(o||{}).silent,i=void 0!==a&&a;return e&&e.value!==r&&(e.value=r,i||t_formsApi__sendChange(e)),r},t_formsApi__guessFieldName=function t(e){var r=e.querySelector(".js-tilda-rule[name]");return r?r.name:""},t_formsApi__getFieldData=function t(e){var r=e.dataset,o=r.inputLid,n=r.fieldType,a=r.fieldName,i=r.fieldAsync,s=r.defaultValue,l;return{lid:o,fieldType:n,fieldName:a||t_formsApi__guessFieldName(e),isAsync:"true"===i,defaultValue:s}},t_formsApi__waitForFieldReadyState=function t(e){return new Promise((function(t){var r=function r(){e.element.setAttribute("data-input-ready","true"),t(e)},o="true"===e.element.getAttribute("data-input-ready");e.data.isAsync&&!o?e.element.addEventListener("inputReady",r,{once:!0}):r()}))},t_formsApi__sortFieldsBeforeClear=function t(e){return e.data.fieldType===FORMS_API_FIELD.CALC?1:-1},t_formsApi__isConditionalForm=function t(e){return e.classList.contains("t-conditional-form")||e.querySelector(".t-conditional")},t_formsApi__getTildaField=function t(e){if(!e)throw new Error("inputGroup element is missing");var r=t_formsApi__getFieldData(e),o=r.lid,n=r.fieldType,a=r.fieldName;if(!o||!n||!a)throw new Error("Please, set all the required data-attrs to initialize FormInput.");var i=function t(){return e.querySelector('[name="'+a+'"]')},s=function t(){var e=i();return{value:t_formsApi__safeValue(e)}},l=[],c=new Map,u,d,m,f={element:e,data:r,getValue:s,onChange:function t(e,r){var o,n=(r||{}).uniqueKey;if(n){var a;if(c.has(n))return;c.set(n,e)}else l.push(e)},focus:function t(){var e=i();t_formsApi__safeFocus(e)},reset:function t(){var e=i(),o=r.defaultValue||"";t_formsApi__safeSetValue(e,o,{silent:!0})},onFieldReady:function t(){return t_formsApi__waitForFieldReadyState(f)},_onChangeCallbacks:l,_uniqueOnChangeCallbacks:c},_=function t(e){l.forEach((function(t){return t({event:e,field:f})})),c.forEach((function(t){return t({event:e,field:f})}))};return e.addEventListener("change",_),e.t_field=f,f},t_formsApi__radioFieldMixin=function t(e){return e.data.inputs=Array.from(e.element.querySelectorAll('[type="radio"]')),e.getValue=function(){var t=e.data.inputs.find((function(t){return t.checked}));return{value:t_formsApi__safeValue(t)}},e.reset=function(){var t=Number(e.data.defaultValue),r=null!=t&&t>0;e.data.inputs.forEach((function(e,o){e.checked=!(!r||t!==o+1)})),e.data.ownVariantInput&&t_formsApi__sendReset(e.data.ownVariantInput)},e},t_formsApi__ownVariantMixin=function t(e){return e.onFieldReady=function(){return t_formsApi__waitForFieldReadyState(e).then((function(){var t=e.element.querySelector(".t-radio-ownanswer, .t-checkbox-ownanswer"),r=t?t.getAttribute("data-own-variant-title"):"";return e.data.ownVariantInput=t,e.data.ownVariantTitle=r,e}))},e},t_formsApi__checkboxesMixin=function t(e){return e.data.inputs=Array.from(e.element.querySelectorAll('[type="checkbox"]')),e.focus=function(){var t=e.element.querySelector('[type="checkbox"]');t_formsApi__safeFocus(t)},e.reset=function(){var t=e.element.querySelector('[name="'+e.data.fieldName+'"]'),r=Number(e.data.defaultValue),o=null!=r&&r>0;t_formsApi__safeSetValue(t,"",{silent:!0}),e.data.ownVariantInput&&t_formsApi__sendReset(e.data.ownVariantInput),e.data.inputs.forEach((function(t){return t.checked=!1})),e.data.inputs.forEach((function(t,e){var n;o&&r===e+1&&t.click()}))},e},t_formsApi__getUploadWidgetField=function t(e){var r=t_formsApi__getTildaField(e);return r.onFieldReady=function(){return t_formsApi__waitForFieldReadyState(r).then((function(){return r.element.addEventListener("uwFileUploaded",(function(){return t_formsApi__sendChange(r.element)})),r.element.addEventListener("uwFileRemoved",(function(){return t_formsApi__sendChange(r.element)})),r}))},r.getValue=function(){var t,o;return{value:Array.from(e.querySelectorAll('[name^="'+r.data.fieldName+'"]')).map((function(t){return t_formsApi__safeValue(t)})).filter(Boolean).join("; ")}},r.focus=function(){r.element.scrollIntoView({block:"center"})},r.reset=function(){t_formsApi__sendReset(r.element)},r},t_formsApi__getUploadCareField=function t(e){try{var r=t_formsApi__getTildaField(e);return r.onFieldReady=function(){return new Promise((function(t){t_onFuncLoad("uploadcare",(function(){r.data.widget=window.uploadcare.Widget('[data-input-lid="'+r.data.lid+'"] [role="uploadcare-uploader"]'),r.data.widget.onUploadComplete.add((function(){return t_formsApi__sendChange(r.element)})),t(r)}))}))},r.focus=function(){r.element.scrollIntoView({block:"center"})},r.reset=function(){var t=r.data.widget;t_formsApi__safeSetValue(t.inputElement,"",{silent:!0}),t.reloadInfo()},r}catch(o){return console.error(o),null}},t_formsApi__getContactMethodField=function t(e){var r=t_formsApi__getTildaField(e),o=(r.data.fieldName||"").split(";"),n=o[0],a=o[1];r.data.isContactMethod=!0,r.data.typeInputName=n,r.data.idInputName=a;var i,s=Array.from(e.querySelectorAll(".t-contact-method__type")).map((function(t){var e=t.querySelector("[name="+r.data.typeInputName+"]");return{wrapper:t,input:e,displayText:t.textContent.trim()}}));return r.getValue=function(){var t,o=t_formsApi__safeValue(e.querySelector('[name="'+r.data.idInputName+'"]:not([disabled])')),n=s.find((function(t){return t.input.checked})),a=t_formsApi__safeValue(n.input),i=n?n.displayText:"";return{value:(t={},t[r.data.idInputName]={value:o},t[r.data.typeInputName]={value:a,typeInputDisplayText:i},t)}},r.focus=function(){var t,e=r.element.querySelector(".t-contact-method__value-container > :not(.t-contact-method__hidden)").querySelector(".t-input-block:not(.t-contact-method__hidden)"),o=e.querySelector(".js-username-input");if(o)t_formsApi__safeFocus(o);else{var n=e.querySelector('.t-input[type="tel"]');t_formsApi__safeFocus(n)}},r.reset=function(){t_formsApi__sendReset(r.element)},r},t_formsApi__getCheckboxField=function t(e){var r=t_formsApi__getTildaField(e);return r.getValue=function(){var t=e.querySelector('[name="'+r.data.fieldName+'"]');return{value:t&&t.checked?"yes":"no"}},r.reset=function(){var t=e.querySelector('[name="'+r.data.fieldName+'"]'),o=r.data.defaultValue;t.checked="y"===o},r},t_formsApi__getRadioButtonsField=function t(e){return t_formsApi__ownVariantMixin(t_formsApi__radioFieldMixin(t_formsApi__getTildaField(e)))},t_formsApi__getCheckboxesField=function t(e){return t_formsApi__ownVariantMixin(t_formsApi__checkboxesMixin(t_formsApi__getTildaField(e)))},t_formsApi__getRadioImagesField=function t(e){return t_formsApi__radioFieldMixin(t_formsApi__getTildaField(e))},t_formsApi__getCheckboxImagesField=function t(e){return t_formsApi__checkboxesMixin(t_formsApi__getTildaField(e))},t_formsApi__getRatingField=function t(e){var r=t_formsApi__radioFieldMixin(t_formsApi__getTildaField(e)),o=r.reset;return r.reset=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];o.call.apply(o,[this].concat(e)),t_formsApi__sendReset(r.element)},r},t_formsApi__getBasicDeliveryField=function t(e){var r=t_formsApi__radioFieldMixin(t_formsApi__getTildaField(e));return r.getValue=function(){var t=r.data.inputs.find((function(t){return t.checked})),e=t?t.getAttribute("data-delivery-price"):null,o=t_formsApi__safeValue(t);return e&&(o=o.split("=")[0]),{value:o,deliveryPrice:e}},r},t_formsApi__getPhoneField=function t(e){var r=t_formsApi__getTildaField(e);return r.focus=function(){var t=r.element.querySelector('.t-input[type="tel"]');t_formsApi__safeFocus(t)},r.reset=function(){t_formsApi__sendReset(r.element);var t=r.element.querySelector('.t-input[type="tel"]');t_formsApi__safeSetValue(t,"",{silent:!0})},r},t_formsApi__getSelectboxField=function t(e){try{var r=t_formsApi__getTildaField(e),o=r.element.querySelector('[name="'+r.data.fieldName+'"]');return r.reset=function(){if(o){var t=o.options[0],e=t&&""===t.value,n=Number(r.data.defaultValue)||0,a=Math.max(0,e?n:n-1),i;o.options[a].selected=!0}},r}catch(n){return console.error(n),null}},t_formsApi__getCalculatorField=function t(e){try{var r=t_formsApi__getTildaField(e);return r.reset=function(){r.element.dispatchEvent(new CustomEvent("recalculate"))},r}catch(o){return console.error(o),null}},t_formsApi__getRangeField=function t(e){try{var r=t_formsApi__getTildaField(e),o=r.element.querySelector(".t-range"),n=r.reset;return r.reset=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];n.call.apply(n,[this].concat(e)),null==o||o.dispatchEvent(new CustomEvent("displayChanged"))},r}catch(a){return console.error(a),null}},t_formsApi__getFieldConstructor=function t(e){var r=e.getAttribute("data-field-type"),o="cb"===e.getAttribute("data-field-radcb");switch(r){case FORMS_API_FIELD.VARIANTS:return o?t_formsApi__getCheckboxesField(e):t_formsApi__getRadioButtonsField(e);case FORMS_API_FIELD.IMAGE_VARIANTS:return o?t_formsApi__getCheckboxImagesField(e):t_formsApi__getRadioImagesField(e);case FORMS_API_FIELD.FILE:return t_formsApi__getUploadWidgetField(e);case FORMS_API_FIELD.CONTACT_METHOD:return t_formsApi__getContactMethodField(e);case FORMS_API_FIELD.CHECKBOX:return t_formsApi__getCheckboxField(e);case FORMS_API_FIELD.UPLOADCARE_FILE:return t_formsApi__getUploadCareField(e);case FORMS_API_FIELD.RATING:return t_formsApi__getRatingField(e);case FORMS_API_FIELD.DELIVERY:return t_formsApi__getBasicDeliveryField(e);case FORMS_API_FIELD.PHONE:return t_formsApi__getPhoneField(e);case FORMS_API_FIELD.SELECT:return t_formsApi__getSelectboxField(e);case FORMS_API_FIELD.CALC:return t_formsApi__getCalculatorField(e);case FORMS_API_FIELD.RANGE:return t_formsApi__getRangeField(e);default:return t_formsApi__getTildaField(e)}},t_formsApi__initTildaField=function t(e){return new Promise((function(t,r){var o=e.t_field;if(o)return t(o);var n=t_formsApi__getFieldConstructor(e);return n||r(new Error("Error while trying to initialize TildaField Api.")),n.onFieldReady().then(t)}))},t_formsApi__clearForm=function t(e){try{return Promise.resolve(_catch$1((function(){if(!(e instanceof HTMLFormElement))throw new Error("Must be called on a form element");var t=e.closest(".t-rec"),r,o=Array.from(e.querySelectorAll(".t-input-group")).map(t_formsApi__initTildaField);return Promise.resolve(Promise.allSettled(o)).then((function(r){var o,n;r.filter((function(t){return"fulfilled"===t.status})).map((function(t){return t.value})).sort(t_formsApi__sortFieldsBeforeClear).forEach((function(t){return t.reset&&t.reset()})),t_formsApi__isConditionalForm(e)&&t.dispatchEvent(new CustomEvent("sync-conditionals",{detail:{shouldPreventSubmit:!1}}))}))}),(function(t){console.error("Error trying to clear form:",t)})))}catch(r){return Promise.reject(r)}};function _catch(t,e){try{var r=t()}catch(o){return e(o)}return r&&r.then?r.then(void 0,e):r}var t_forms__updateAllVariables=function t(e){try{var r=_catch((function(){var t=e.closest(".t-rec"),r=t_forms__getUsedVariables([t],{unique:!0}),o;r.filter(t_forms__isSystemVariable).forEach((function(e){return t_forms__updateSystemVariable(t,t,e)}));var n,a=r.filter((function(t){return!t_forms__isSystemVariable(t)})).map((function(e){try{var r=t_forms__findFormField(t,e.name);return r?Promise.resolve(t_formsApi__initTildaField(r)).then((function(r){return r?(t_forms__updateInputVariable(t,e,r),Promise.resolve()):Promise.resolve()})):Promise.resolve()}catch(o){return Promise.reject(o)}}));return Promise.resolve(Promise.all(a)).then((function(){}))}),(function(t){console.error("Failed to update variabls in rec:",t)}));return Promise.resolve(r&&r.then?r.then((function(){})):void 0)}catch(o){return Promise.reject(o)}},t_forms__focusInput=function t(e){try{if(!e)return Promise.resolve();var r=e.closest(".t-input-group");if(!r)return Promise.resolve();var o=_catch((function(){return Promise.resolve(t_formsApi__initTildaField(r)).then((function(t){t.focus()}))}),(function(){e.focus()}));return Promise.resolve(o&&o.then?o.then((function(){})):void 0)}catch(n){return Promise.reject(n)}};function t_forms__setupCloseHandlers(t,e){var r=document.body,o=t.querySelector(".t-form-success-popup__close-icon"),n=document.getElementById("tildaformsuccesspopupbtn-new");function a(){o&&o.removeEventListener("click",window.tildaForm.handleClosePopup),n&&n.removeEventListener("click",window.tildaForm.handleClosePopup),r.removeEventListener("keydown",i),t.removeEventListener("click",s)}function i(t){"Escape"!==t.key&&27!=t.keyCode||window.tildaForm.handleClosePopup()}function s(e){e.target===t&&window.tildaForm.handleClosePopup()}window.tildaForm.currentRemoveCloseHandlers=a,o&&o.addEventListener("click",window.tildaForm.handleClosePopup),n&&n.addEventListener("click",window.tildaForm.handleClosePopup),e||(r.addEventListener("keydown",i),t.addEventListener("click",s))}function t_forms__initForms(){var t=document.querySelectorAll('.r:not([data-record-type="1093"], [data-parenttplid="1093"])');window.t_forms__inputData={},t_forms__addRecaptcha();var e=t_forms__getCanonicalUrl(),r=t_forms__isCachedPage();Array.prototype.forEach.call(t,(function(t){var o=t.id;if(!window.initForms[o]){var n=t_forms__getRecForm(t);if(r&&n)return t_forms__onCachedPageAction(n,e),void t_forms__offInputsAutocomplete(n);if(t_forms__initFormFields(t),t_forms__initEventPlaceholder(t),t_forms__addInputItsGood(t),t_forms__addAttrAction(t),t_forms__onSubmit(t),t_forms__onClick(t),t_forms__onRender(t),t_forms__addFocusOnTab(t),t_onFuncLoad("t_throttle",(function(){window.addEventListener("resize",t_throttle((function(){t_forms__calculateInputsWidth(o)})))})),window.initForms[o]=!0,n&&t_forms__isNewSuccessBox(n)){n.setAttribute("data-success-popup","y");var a=n.querySelector(".t-form__successbox");a&&a.classList.add("t-form-success-popup")}}}))}function t_forms__validateOwnVariant(t){var e;t&&(t.value&&(t.value=""),t.closest(".tn-atom__form")||(t.timerID&&clearTimeout(t.timerID),t.timerID=setTimeout((function(){t.classList.add("t-input-ownanswer_active"),t.style.display="flex",clearTimeout(t.timerID)}),500)))}function t_forms__addFocusOnTab(t){if(!window.isMobile){var e=t.querySelectorAll(".t-input, .t-select");if(e){var r=null;document.addEventListener("keydown",(function(){r="keyboard"})),document.addEventListener("mousedown",(function(){r="mouse"})),document.addEventListener("visibilitychange",(function(){r="mouse"})),Array.prototype.forEach.call(e,(function(t){t.addEventListener("focus",(function(){if("keyboard"===r){var e=t;(e.classList.contains("t-input_pvis")||e.classList.contains("t-input-phonemask"))&&(e=e.parentElement),e.classList.add("t-focusable"),r=null}})),t.addEventListener("blur",(function(){t.classList.remove("t-focusable")}))}))}}}function t_forms__initEventPlaceholder(t){var e="focus",r="blur";document.addEventListener||(e="focusin",r="focusout"),t_removeEventListener(t,e,t_forms__removePlaceholder),t_addEventListener(t,e,t_forms__removePlaceholder,!0),t_removeEventListener(t,r,t_forms__addPlaceholder),t_addEventListener(t,r,t_forms__addPlaceholder,!0)}function t_forms__removePlaceholder(t){var e=t||window.event,r=e.target||e.srcElement;if("INPUT"===r.tagName){var o=r.closest("[data-input-lid]"),n=r.getAttribute("placeholder"),a="";if(o)a=o.getAttribute("data-input-lid");else{var i=r.closest("form");i&&(a=i.getAttribute("data-input-lid"))}n&&a&&(window.t_forms__inputData[a]=n,r.setAttribute("placeholder",""))}}function t_forms__addMoveToInputWithErrorClickHandler(t,e){e&&t&&(e.TElementToFocus=t,e.removeEventListener("click",t_forms__handleClickOnError),e.addEventListener("click",t_forms__handleClickOnError))}function t_forms__handleClickOnError(t){t.preventDefault();var e=t.target.closest(".t-form__errorbox-item");if(e){var r=e.TElementToFocus;t_forms__focusInput(r)}}function t_forms__addPlaceholder(t){var e=t||window.event,r=e.target||e.srcElement,o=r.closest("[data-input-lid]"),n="";if(o)n=o.getAttribute("data-input-lid");else{var a=r.closest("form");a&&(n=a.getAttribute("data-input-lid"))}var i=window.t_forms__inputData[n]||"";i&&n&&(r.setAttribute("placeholder",i),window.t_forms__inputData[n]="")}function t_forms__addInputItsGood(t){var e=t.querySelectorAll(".js-form-proccess[data-formactiontype]");Array.prototype.forEach.call(e,(function(t){var e=t.getAttribute("data-formactiontype"),r=t.querySelector('input[name="form-spec-comments"]');"1"===e||r||t.insertAdjacentHTML("beforeend",'<div style="position: absolute; left: -5000px; bottom: 0; display: none;"><input type="text" name="form-spec-comments" value="Its good" class="js-form-spec-comments" tabindex="-1" /></div>')}))}function t_forms__addAttrAction(t){var e=t.querySelectorAll(".js-form-proccess");Array.prototype.forEach.call(e,(function(t){var e;"2"===t.getAttribute("data-formactiontype")&&t.setAttribute("action","#")}))}function t_forms__calculateInputsWidth(t){var e=t;e&&(e=e.replace("rec",""));var r=document.querySelector("#rec"+e);if(e||!document.body.classList.contains("t706__body_cartwinshowed")&&!document.body.classList.contains("t706__body_cartpageshowed")||(r=document.querySelector(".t706")),r){var o=r.querySelector(".t-form__inputsbox");if(o){o.closest(".t706")&&o.classList.add("t-form__inputsbox_inrow");var n=r.querySelectorAll(".t-input-group_widthdef, .t-input-group_inrow");if(o.classList.contains("t-form__inputsbox_inrow")||(n=r.querySelectorAll(".t-input-block_width")),0!==n.length){(o.classList.contains("t-form__inputsbox_vertical-form")||o.closest(".t706"))&&o.classList.add("t-form__inputsbox_flex");var a=o.offsetWidth,i=["rd","ri","uc","ws","hd","fr","st"];Array.prototype.forEach.call(n,(function(t){var e=t,r;if(o.classList.contains("t-form__inputsbox_inrow")||(e=e.closest(".t-input-group")),e&&e.classList.contains("t-input-group_inrow-withsibling")){r=e.nextElementSibling;var n=i.filter((function(t){return r.classList.contains("t-input-group_"+t)}));if(!r||0!==n.length||!(r.classList.contains("t-input-group_inrow")&&!e.classList.contains("t-input-group_widthdef")||e.classList.contains("t-input-group_widthdef")&&r.classList.contains("t-input-group")&&!r.classList.contains("t-input-group_inrow")))return e.classList.remove("t-input-group_inrow-withsibling"),void e.classList.add("t-input-group_inrow-last");r.classList.add("t-input-group_inonerow")}else e.classList.add("t-input-group_inrow-last");r&&e.classList.contains("t-input-group_widthdef")&&e.classList.contains("t-input-group_inrow-withsibling")&&r.classList.contains("t-input-group_inonerow")&&!r.classList.contains("t-input-group_inrow")&&(r.classList.add("t-input-group_widthdef"),r.classList.contains("t-input-group_inrow-withsibling")||r.classList.add("t-input-group_inrow-last"),r.classList.contains("t-input-group_inrow")&&e.classList.add("t-input-group_inrow-last")),o.classList.contains("t-form__inputsbox_inrow")||t_forms__calculateFieldsWidthInJS(e,a)}));var s=r.querySelectorAll(".t-input-group_inrow.t-input-group_inonerow.t-input-group_inrow-last");s.length>0&&t_forms__moveFieldToNextRow(s);var l=r.querySelectorAll(".t-input-group_widthdef.t-input-group_inrow-last");o.classList.contains("t-form__inputsbox_inrow")&&l.length>0&&t_forms__combineFieldsWithDefWidth(l,e)}}}}function t_forms__moveFieldToNextRow(t){var e;t_forms__createArrWithAllRows(t,"t-input-group_inrow").forEach((function(t){var e=!1;if(t.forEach((function(t){t.classList.contains("t-input-group_inrow-last")&&t.nextElementSibling&&!t.nextElementSibling.classList.contains("t-input-group_inonerow")&&(e=!0)})),!e){var r=t.reduce((function(t,e){var r,o=e.classList.value.split(" ").filter((function(t){return-1!==t.indexOf("t-input-group_width")})),n=2,a;return-1!==(o=o[0]).indexOf("100")&&(n=3),t+Number(o.substr(o.length-2,n))}),0);r<=100||t.forEach((function(t){t.classList.contains("t-input-group_inrow-last")&&(t.style.marginRight="calc(100% - ("+(r-100)+"%)",t.style.flex="0 0 auto")}))}}))}function t_forms__combineFieldsWithDefWidth(t,e){var r=[],o;t_forms__createArrWithAllRows(t,"t-input-group_widthdef").forEach((function(t){var e=4;if(t.length>4)for(var o=0;o<t.length;o+=4){var n=t.slice(o,o+4);r.push(n)}else r.push(t)})),r.forEach((function(t){var r,o="t-input-group_width"+({4:"25",3:"33",2:"50"}[t.length]||"100");t.forEach((function(t){if(t.classList.add(o),t.classList.contains("t-input-group_rg")){var r=t.getAttribute("data-input-lid");window.t_input_range_init(e,r)}}))}))}function t_forms__createArrWithAllRows(t,e){var r=[],o=[];return Array.prototype.forEach.call(t,(function(t){var n=t;for(o.push(n);n.previousElementSibling&&n.previousElementSibling.classList.contains(e)&&!n.previousElementSibling.classList.contains("t-input-group_inrow-last");)n=n.previousElementSibling,o.push(n);r.push(o.reverse()),o=[]})),r}function t_forms__calculateFieldsWidthInJS(t,e){var r=15,o={1:"t-input-block_width100",2:"t-input-block_width50",3:"t-input-block_width33",4:"t-input-block_width25"};for(var n in o)if(t.classList.contains(o[n])){t.style.width=(e-r*(n-1))/n+"px";var a=t.previousElementSibling;a&&a.classList.contains("t-input-title")&&(a.style.width=(e-r*(n-1))/n+"px"),window.innerWidth<480&&(t&&(t.style.width="100%"),a&&(a.style.width="100%"))}}function t_forms__onSubmit(t){var e=t.querySelectorAll(".js-form-proccess");Array.prototype.forEach.call(e,(function(t){t_removeEventListener(t,"submit",t_forms__submitEvent),t_addEventListener(t,"submit",t_forms__submitEvent)}))}function t_forms__onClick(t){t_addEventListener(t,"dblclick",t_forms__initBtnDblClick),t_removeEventListener(t,"click",t_forms__initBtnClick),t_addEventListener(t,"click",t_forms__initBtnClick)}function t_forms__onCachedPageAction(t,e){t_addEventListener(t,"click",(function(){t_forms__showWrongPageUrlMessage(e)})),t_addEventListener(t,"submit",(function(t){t.preventDefault(),t.stopPropagation(),t_forms__showWrongPageUrlMessage(e)}))}function t_forms__offInputsAutocomplete(t){var e=t.querySelectorAll(".t-input");Array.prototype.forEach.call(e,(function(t){t.setAttribute("autocomplete","off")}))}function t_forms__initBtnDblClick(t){var e=t||window.event,r;(e.target||e.srcElement).closest('[type="submit"]')&&(e.preventDefault?e.preventDefault():e.returnValue=!1)}function t_forms__initBtnClick(t){var e=t||window.event,r=e.target||e.srcElement,o=!!r.closest('[type="submit"]')&&r;if(o){var n=o.closest(".js-form-proccess");if(n){e.preventDefault?e.preventDefault():e.returnValue=!1;var a=n.getAttribute("id"),i,s="";if(o.tildaSendingStatus&&(s=o.tildaSendingStatus),!(s&&s>=1||t_hasClass(o,"t706__submit_disable")))if(t_addClass(o,"t-btn_sending"),o.tildaSendingStatus="1",window.tildaForm.hideErrors(n),i=window.tildaForm.validate(n),window.tildaForm.showErrors(n,i))t_removeClass(o,"t-btn_sending"),o.tildaSendingStatus="0";else{var l,c=document.getElementById("allrecords").getAttribute("data-tilda-formskey"),u=parseInt(n.getAttribute("data-formactiontype")),d;if(!n.querySelectorAll(".js-formaction-services").length&&1!==u&&!c){var m=t_forms__getErrorContainers(n,""),f=m.errorBoxes,_=m.allError;return Array.prototype.forEach.call(_,(function(t){t.innerHTML="Please set receiver in block with forms",t.style.display="block"})),Array.prototype.forEach.call(f,(function(t){t.style.display="block"})),t_addClass(n,"js-send-form-error"),t_removeClass(o,"t-btn_sending"),o.tildaSendingStatus="0",void t_triggerEvent(n,"tildaform:aftererror")}if(n.querySelector(".g-recaptcha")&&window.grecaptcha){window.tildaForm.currentFormProccessing={form:n,btn:o,formtype:u,formskey:c};var p=n.tildaCaptchaClientId;if(p)window.grecaptcha.reset(p);else{var w={size:"invisible",sitekey:n.getAttribute("data-tilda-captchakey"),callback:window.tildaForm.captchaCallback};p=window.grecaptcha.render(a+"recaptcha",w),n.tildaCaptchaClientId=p}return void window.grecaptcha.execute(p)}window.tildaForm.send(n,o,u,c)}}}}function t_forms__onRender(t){var e;!!t.querySelector(".t396")&&(t_removeEventListener(t,"render",t_forms__renderEvent),t_addEventListener(t,"render",t_forms__renderEvent))}function t_forms__renderEvent(){t_forms__onSubmit(this)}function t_forms__submitEvent(t){var e=t;if(t.target&&(e=t.target),e){var r=e.querySelector('[type="submit"]'),o="";r&&r.tildaSendingStatus&&(o=r.tildaSendingStatus),o&&"3"===o?r.tildaSendingStatus="":(r&&!t_hasClass(r,"t706__submit_disable")&&r.click(),t.preventDefault?t.preventDefault():t.returnValue=!1)}}function t_asyncLoad(t){var e=t.getAttribute("data-tilda-mask"),r=t.getAttribute("data-tilda-mask-holder"),o=t.getAttribute("data-tilda-mask-init");e&&!o&&(r?t_onFuncLoad("t_customMask__mask",(function(){t_customMask__mask(t,e,{placeholder:r})})):t_onFuncLoad("t_customMask__mask",(function(){t_customMask__mask(t,e)})),t.setAttribute("data-tilda-mask-init","1"))}function t_forms__getErrorContainers(t,e){var r=t.querySelectorAll(".js-errorbox-all"),o=t.querySelectorAll(".js-errorbox-all .js-rule-error-all");return r.length||(t.insertAdjacentHTML("afterbegin",'<div class="js-errorbox-all"></div>'),r=t.querySelectorAll(".js-errorbox-all")),o.length||(Array.prototype.forEach.call(r,(function(t){t.insertAdjacentHTML("beforeend",'<p class="js-rule-error-all">'+e+"</p>")})),o=t.querySelectorAll(".js-errorbox-all .js-rule-error-all")),{errorBoxes:r,allError:o}}function t_forms__addRecaptcha(){var t=document.querySelectorAll(".js-tilda-captcha");Array.prototype.forEach.call(t,(function(t){var e=t.getAttribute("data-tilda-captchakey");if(e){var r=t.getAttribute("id");if(!window.tildaForm.isRecaptchaScriptInit){var o=document.head,n=document.createElement("script");window.tildaForm.isRecaptchaScriptInit=!0,n.type="text/javascript",n.src="https://www.google.com/recaptcha/api.js?render=explicit",n.async=!0,o.appendChild(n),o.insertAdjacentHTML("beforeend",'<style type="text/css">.js-send-form-success .grecaptcha-badge {display: none;}</style>')}document.getElementById(r+"recaptcha")||t.insertAdjacentHTML("beforeend",'<div id="'+r+'recaptcha" class="g-recaptcha" data-sitekey="'+e+'" data-callback="window.tildaForm.captchaCallback" data-size="invisible"></div>')}else t_removeClass(t,"js-tilda-captcha")}))}window.t_forms__lang=(window.navigator.userLanguage||window.navigator.language).toUpperCase().slice(0,2),window.scriptSysPayment={},window.handlerSysPayment={},window.isInitEventsZB={},window.isInitEventsCustomMask={},window.initForms={},window.tildaForm={versionLib:"02.001",endpoint:"forms.tildacdn.com",isRecaptchaScriptInit:!1,currentFormProccessing:!1},window.t_forms__clearForm=t_formsApi__clearForm,window.t_forms__updateAllVariables=t_forms__updateAllVariables,window.t_forms__fieldApi=t_formsApi__initTildaField,t_onReady((function(){var t=document.getElementById("allrecords"),e;if(t){var r=t.getAttribute("data-tilda-project-lang");r&&(window.t_forms__lang=r);var o=t.getAttribute("data-tilda-root-zone");o&&(window.tildaForm.endpoint="forms.tildaapi."+o)}t_forms__initForms(),t_forms__processGetParameters(),Array.from(document.querySelectorAll('.t396__elem[data-elem-type="form"]:not(.zero-form-rendered)')).forEach((function(t){return t.addEventListener("render",t_forms__processGetParameters)}));var n=!!document.querySelector(".t706"),a=!!document.querySelector(".js-payment-systembox"),i=!!document.querySelector("input[name=tld_product]");if(n||a||i){var s="tilda-forms-payments-1.0";if(!document.head.querySelector('script[src*="'+s+'"]')){var l=document.createElement("script");l.type="text/javascript",l.src="https://static.tildacdn."+t_forms__getRootZone()+"/js/"+s+".min.js",l.onerror=function(){console.error("Failed to load tilda-forms-payments: ",this.src)},document.head.appendChild(l)}}var c=window.t_forms__lang;if("RU"!==c&&"EN"!==c){var u="tilda-forms-dict-1.0";if(!document.head.querySelector('script[src*="'+u+'"]')){var d=document.createElement("script");d.type="text/javascript",d.src="https://static.tildacdn."+t_forms__getRootZone()+"/js/"+u+".min.js",d.onerror=function(){console.error("Failed to load tilda-forms-dictionary: ",this.src)},document.head.appendChild(d)}}})),window.tildaForm.captchaCallback=function(){window.tildaForm.currentFormProccessing&&window.tildaForm.currentFormProccessing.form&&(window.tildaForm.send(window.tildaForm.currentFormProccessing.form,window.tildaForm.currentFormProccessing.btn,window.tildaForm.currentFormProccessing.formtype,window.tildaForm.currentFormProccessing.formskey),window.tildaForm.currentFormProccessing=!1)},window.tildaForm_customMasksLoad=function(){if(!0!==window.isInitEventsCustomMask){var t=document.createElement("script");t.type="text/javascript",t.src="https://static.tildacdn."+t_forms__getRootZone()+"/js/tilda-forms-custommask-1.0.min.js",document.head.appendChild(t),t.onload=function(){window.isInitEventsCustomMask=!0}}},window.tildaForm_initMasks=function(){var t=document.querySelectorAll(".js-tilda-mask");if(t.length&&!0!==window.isInitEventsCustomMask)return window.tildaForm_customMasksLoad(),void window.setTimeout((function(){window.tildaForm_initMasks()}),100);!0===window.isInitEventsCustomMask&&Array.prototype.forEach.call(t,(function(t){t_asyncLoad(t)}))},t_onReady((function(){window.tildaForm_initMasks()})),window.tildaForm.validate=function(t){for(var e=t_forms__getElement(t),r=e.querySelectorAll(".js-tilda-rule"),o=[],n=!0,a=e.getAttribute("data-formcart"),i,s=t_forms__getConditionCheckHandler(e).isHiddenByCondition,l=0;l<r.length;l++){var c=r[l];if(!s(c)){var u=!!parseInt(c.getAttribute("data-tilda-req")||0,10),d=c.getAttribute("data-tilda-rule")||"none",m,f,_=c.getAttribute("data-tilda-rule-minlength")||0,p=c.getAttribute("data-tilda-rule-maxlength")||0,w={},v=c.value,h="",g=c.getAttribute("type"),y=c.getAttribute("name");w.obj=c,w.type=[],v&&v.length&&(h=v.replace(/[\s\u0000—\u001F\u2000-\u200F\uFEFF\u2028-\u202F\u205F-\u206F]/gi,""),v=v.trim()),_&&(_=parseInt(_,10)),p&&(p=parseInt(p,10));var b=!v.length&&!h.length,E="checkbox"===g||"radio"===g,A=e.querySelectorAll('[name="'+y+'"]:checked').length,F=c.classList.contains("t-checkboxes__hiddeninput");if(F||"radio"===g){var x=F?"checkbox":"radio",S=c.closest(".t-input-block"),C=S&&S.querySelector(".t-input__own-answer-input, .t-"+x+"-ownanswer");if(C&&C.checked){var T=S.querySelector(".t-input__own-answer, .t-input-ownanswer"),k;T&&!T.value.trim()&&(t_forms__validateOwnVariant(T),b=!0)}}if((v.length&&!E||E&&A)&&(n=!1),u&&(b||E&&!A))w.type.push("req");else{switch(d){case"email":m=/^(?!\.)(?!.*\.\.)[a-zA-Zёа-яЁА-Я0-9\u2E80-\u2FD5\u3190-\u319f\u3400-\u4DBF\u4E00-\u9FCC\uF900-\uFAAD_\.\-\+]{0,63}[a-zA-Zёа-яЁА-Я0-9\u2E80-\u2FD5\u3190-\u319f\u3400-\u4DBF\u4E00-\u9FCC\uF900-\uFAAD_\-\+]@[a-zA-Zёа-яЁА-ЯЁёäöüÄÖÜßèéû0-9][a-zA-Zёа-яЁА-ЯЁёäöüÄÖÜßèéû0-9\.\-]{0,253}\.[a-zA-Zёа-яЁА-Я]{2,11}$/gi,v.length&&!v.match(m)&&w.type.push("email");break;case"url":if(m=/^((https?|ftp):\/\/)?[a-zA-Zёа-яЁА-ЯЁёäöüÄÖÜßèéûşç0-9xn\-][a-zA-Zёа-яЁА-ЯЁёäöüÄÖÜßèéûşç0-9_\.\-]{0,253}\.[a-zA-Zёа-яЁА-Я\-0-9]{2,11}\/?$/gi,v.length)if((f=(f=(f=v.split("//"))&&f.length>1?f[1]:f[0]).split("/"))&&f.length&&f[0]){if(!(f=f[0]).match(m)){var L=/^[a-zA-Zёа-яЁА-ЯЁёäöüÄÖÜßèéûşç0-9]([a-zA-Zёа-яЁА-ЯЁёäöüÄÖÜßèéûşç0-9_\-]|xn--)*(\.[a-zA-Zёа-яЁА-ЯЁёäöüÄÖÜßèéûşç0-9\-]{2,})+$/i;f.match(L)||w.type.push("url")}}else f&&!f[0]||w.type.push("url");break;case"phone":var I=c.getAttribute("data-tilda-mask"),j="^[0-9()+-";I&&(-1!==I.indexOf("*")?j+="a-zёа-я":(-1!==I.indexOf("a")&&(j+="a-z"),-1!==I.indexOf("а")&&(j+="а-яё"))),j+="]+$",m=new RegExp(j,"gi"),(h.length&&!h.match(m)||1==(f=h.replace(/[^0-9]+/g,"")).indexOf("000")||1==f.indexOf("111")&&"9"!=f.substring(0,1)||1==f.indexOf("222")&&"5"!=f.substring(0,1)||1==f.indexOf("333")||1==f.indexOf("444")||1==f.indexOf("5555")&&"0"!=f.substring(0,1)||1==f.indexOf("666")&&"0"!=f.substring(0,1)||1==f.indexOf("8888")&&"4"!=f.substring(0,1))&&w.type.push("phone");break;case"number":m=/^[0-9]+$/gi,h.length>0&&!h.match(m)&&w.type.push("number");break;case"date":t_onFuncLoad("t_datepicker__readDateFromInput",(function(){var t=t_datepicker__readDateFromInput(c);h.length>0&&!window.t_datepicker__isDateValid(t)&&w.type.push("date")}));break;case"time":m=/^[0-9]{2}[:\.][0-9]{2}$/gi,//! TODO: 00:00 - 23:59. Заменить на
h.length>0&&!h.match(m)&&w.type.push("time");break;case"name":m=/^([ЁёäöüÄÖÜßèéûҐґЄєІіЇїӐӑЙйК̆к̆Ӄ̆ӄ̆Ԛ̆ԛ̆Г̆г̆Ҕ̆ҕ̆ӖӗѢ̆ѣ̆ӁӂꚄ̆ꚅ̆ҊҋО̆о̆Ө̆ө̆Ꚍ̆ꚍ̆ЎўХ̆х̆Џ̆џ̆Ꚏ̆ꚏ̆Ꚇ̆ꚇ̆Ҽ̆ҽ̆Ш̆ш̆Ꚗ̆ꚗ̆Щ̆щ̆Ы̆ы̆Э̆э̆Ю̆ю̆Я̆я̆А́а́ЃѓД́д́Е́е́Ё́ёӘ́ә́З́з́И́и́І́і́Ї́ї́ЌќЛ́л́Н́н́О́о́Р́р́С́с́Т́т́У́у́Ӱ́ӱ́Ү́ү́Х́х́Ц́ц́Ы́ы́Э́э́Ӭ́ӭ́Ю́ю́Ю̈́ю̈́Я́я́Ѣ́ѣ́ҒғӺӻҒ̌ғ̌Ј̵ј̵ҞҟҜҝԞԟӨөҎҏҰұӾӿҸҹҌҍҢңҚқҒғӘәҺһІіҰұҮүӨөȺⱥꜺꜻƂƃɃƀȻȼꞒꞓƋƌĐđɆɇǤǥꞠꞡĦħƗɨƗ́ɨ́Ɨ̀ɨ̀Ɨ̂ɨ̂Ɨ̌ɨ̌Ɨ̃ɨ̃Ɨ̄ɨ̄Ɨ̈ɨ̈Ɨ̋ɨ̋Ɨ̏ɨ̏Ɨ̧ɨ̧Ɨ̧̀ɨ̧̀Ɨ̧̂ɨ̧̂Ɨ̧̌ɨ̧̌ᵼɈɉɟɟ̟ʄʄ̊ʄ̥K̵k̵ꝀꝁꝂꝃꝄꝅꞢꞣŁłł̓Ł̣ł̣ᴌȽƚⱠⱡꝈꝉƛƛ̓ꞤꞥꝊꝋØøǾǿØ̀ø̀Ø̂øØ̌ø̌Ø̄ø̄Ø̃ø̃Ø̨ø̨Ø᷎ø᷎ᴓⱣᵽꝐꝑꝖꝗꝘꝙɌɍꞦꞧꞨꞩẜẝŦŧȾⱦᵺꝤꝥꝦꝧɄʉɄ́ʉ́Ʉ̀ʉ̀Ʉ̂ʉ̂Ʉ̌ʉ̌Ʉ̄ʉ̄Ʉ̃ʉ̃Ʉ̃́ʉ̃́Ʉ̈ʉ̈ʉ̞ᵾU̸u̸ᵿꝞꝟw̸ɎɏƵƶA-Za-z\u00C0\u00C0-\u00C3\u00C8-\u00CA\u00CC\u00CD\u00D2-\u00D9\u00DA\u00DD\u00E0-\u00E3\u00E8\u00E9\u00EA\u00EC\u00ED\u00F2-\u00F5\u00F9\u00FA\u00FD\u0102\u0103\u0110\u0111\u0128\u0129\u0168\u0169\u01A0\u01A1\u01AF\u01B0\u1EA0\u1EA1-\u1EF9\u0027\u2019\u0300-\u03FF\u0400-\u04FF\u0500-\u05FF\u0600-\u06FF\u3040-\u30FF\u0041-\u007A\u00C0-\u02B8\uFB1D-\uFB1F\uFB2A-\uFB4E\u0E00-\u0E7F\u10A0-\u10FF\u3040-\u309F\u30A0-\u30FF\u2E80-\u2FD5\u3190-\u319f\u3400-\u4DBF\u4E00-\u9FCC\uF900-\uFAAD]{1,})([ЁёäöüÄÖÜßèéûҐґЄєІіЇїӐӑЙйК̆к̆Ӄ̆ӄ̆Ԛ̆ԛ̆Г̆г̆Ҕ̆ҕ̆ӖӗѢ̆ѣ̆ӁӂꚄ̆ꚅ̆ҊҋО̆о̆Ө̆ө̆Ꚍ̆ꚍ̆ЎўХ̆х̆Џ̆џ̆Ꚏ̆ꚏ̆Ꚇ̆ꚇ̆Ҽ̆ҽ̆Ш̆ш̆Ꚗ̆ꚗ̆Щ̆щ̆Ы̆ы̆Э̆э̆Ю̆ю̆Я̆я̆А́а́ЃѓД́д́Е́е́Ё́ёӘ́ә́З́з́И́и́І́і́Ї́ї́ЌќЛ́л́Н́н́О́о́Р́р́С́с́Т́т́У́у́Ӱ́ӱ́Ү́ү́Х́х́Ц́ц́Ы́ы́Э́э́Ӭ́ӭ́Ю́ю́Ю̈́ю̈́Я́я́Ѣ́ѣ́ҒғӺӻҒ̌ғ̌Ј̵ј̵ҞҟҜҝԞԟӨөҎҏҰұӾӿҸҹҌҍҢңҚқҒғӘәҺһІіҰұҮүӨөȺⱥꜺꜻƂƃɃƀȻȼꞒꞓƋƌĐđɆɇǤǥꞠꞡĦħƗɨƗ́ɨ́Ɨ̀ɨ̀Ɨ̂ɨ̂Ɨ̌ɨ̌Ɨ̃ɨ̃Ɨ̄ɨ̄Ɨ̈ɨ̈Ɨ̋ɨ̋Ɨ̏ɨ̏Ɨ̧ɨ̧Ɨ̧̀ɨ̧̀Ɨ̧̂ɨ̧̂Ɨ̧̌ɨ̧̌ᵼɈɉɟɟ̟ʄʄ̊ʄ̥K̵k̵ꝀꝁꝂꝃꝄꝅꞢꞣŁłł̓Ł̣ł̣ᴌȽƚⱠⱡꝈꝉƛƛ̓ꞤꞥꝊꝋØøǾǿØ̀ø̀Ø̂øØ̌ø̌Ø̄ø̄Ø̃ø̃Ø̨ø̨Ø᷎ø᷎ᴓⱣᵽꝐꝑꝖꝗꝘꝙɌɍꞦꞧꞨꞩẜẝŦŧȾⱦᵺꝤꝥꝦꝧɄʉɄ́ʉ́Ʉ̀ʉ̀Ʉ̂ʉ̂Ʉ̌ʉ̌Ʉ̄ʉ̄Ʉ̃ʉ̃Ʉ̃́ʉ̃́Ʉ̈ʉ̈ʉ̞ᵾU̸u̸ᵿꝞꝟw̸ɎɏƵƶA-Za-z\u00C0\u00C0-\u00C3\u00C8-\u00CA\u00CC\u00CD\u00D2-\u00D9\u00DA\u00DD\u00E0-\u00E3\u00E8\u00E9\u00EA\u00EC\u00ED\u00F2-\u00F5\u00F9\u00FA\u00FD\u0102\u0103\u0110\u0111\u0128\u0129\u0168\u0169\u01A0\u01A1\u01AF\u01B0\u1EA0\u1EA1-\u1EF9\u0041-\u007A\u00C0-\u02B8\u0300-\u03FF\u0400-\u04FF\u0500-\u05FF\u0600-\u06FF\u3040-\u30FF\uFB1D-\uFB1F\uFB2A-\uFB4E\u0E00-\u0E7F\u10A0-\u10FF\u3040-\u309F\u30A0-\u30FF\u2E80-\u2FD5\u3190-\u319f\u3400-\u4DBF\u4E00-\u9FCC\uF900-\uFAAD\-\'‘ʼ\s\.]{0,})$/gi,v.length&&!v.match(m)&&w.type.push("name");break;case"nameeng":m=/^([A-Za-z\s]{1,}((\-)?[A-Za-z\.\s](\')?){0,})*$/i,v.length&&!v.match(m)&&w.type.push("nameeng");break;case"namerus":m=/^([А-Яа-яЁё\s]{1,}((\-)?[А-Яа-яЁё\.\s](\')?){0,})*$/i,v.length&&!v.match(m)&&w.type.push("namerus");break;case"string":m=/^[A-Za-zА-Яа-я0-9ЁёЁёäöüÄÖÜßèéûӐӑЙйК̆к̆Ӄ̆ӄ̆Ԛ̆ԛ̆Г̆г̆Ҕ̆ҕ̆ӖӗѢ̆ѣ̆ӁӂꚄ̆ꚅ̆ҊҋО̆о̆Ө̆ө̆Ꚍ̆ꚍ̆ЎўХ̆х̆Џ̆џ̆Ꚏ̆ꚏ̆Ꚇ̆ꚇ̆Ҽ̆ҽ̆Ш̆ш̆Ꚗ̆ꚗ̆Щ̆щ̆Ы̆ы̆Э̆э̆Ю̆ю̆Я̆я̆А́а́ЃѓД́д́Е́е́Ё́ёӘ́ә́З́з́И́и́І́і́Ї́ї́ЌќЛ́л́Н́н́О́о́Р́р́С́с́Т́т́У́у́Ӱ́ӱ́Ү́ү́Х́х́Ц́ц́Ы́ы́Э́э́Ӭ́ӭ́Ю́ю́Ю̈́ю̈́Я́я́Ѣ́ѣ́ҒғӺӻҒ̌ғ̌Ј̵ј̵ҞҟҜҝԞԟӨөҎҏҰұӾӿҸҹҌҍҢңҚқҒғӘәҺһІіҰұҮүӨөȺⱥꜺꜻƂƃɃƀȻȼꞒꞓƋƌĐđɆɇǤǥꞠꞡĦħƗɨƗ́ɨ́Ɨ̀ɨ̀Ɨ̂ɨ̂Ɨ̌ɨ̌Ɨ̃ɨ̃Ɨ̄ɨ̄Ɨ̈ɨ̈Ɨ̋ɨ̋Ɨ̏ɨ̏Ɨ̧ɨ̧Ɨ̧̀ɨ̧̀Ɨ̧̂ɨ̧̂Ɨ̧̌ɨ̧̌ᵼɈɉɟɟ̟ʄʄ̊ʄ̥K̵k̵ꝀꝁꝂꝃꝄꝅꞢꞣŁłł̓Ł̣ł̣ᴌȽƚⱠⱡꝈꝉƛƛ̓ꞤꞥꝊꝋØøǾǿØ̀ø̀Ø̂øØ̌ø̌Ø̄ø̄Ø̃ø̃Ø̨ø̨Ø᷎ø᷎ᴓⱣᵽꝐꝑꝖꝗꝘꝙɌɍꞦꞧꞨꞩẜẝŦŧȾⱦᵺꝤꝥꝦꝧɄʉɄ́ʉ́Ʉ̀ʉ̀Ʉ̂ʉ̂Ʉ̌ʉ̌Ʉ̄ʉ̄Ʉ̃ʉ̃Ʉ̃́ʉ̃́Ʉ̈ʉ̈ʉ̞ᵾU̸u̸ᵿꝞꝟw̸ɎɏƵƶ\u0041-\u007A\u00C0-\u02B8\u0300-\u03FF\u0400-\u04FF\u0500-\u05FF\u0600-\u06FF\u3040-\u30FF\uFB1D-\uFB1F\uFB2A-\uFB4E\u0E00-\u0E7F\u10A0-\u10FF\u3040-\u309F\u30A0-\u30FF\u2E80-\u2FD5\u3190-\u319f\u3400-\u4DBF\u4E00-\u9FCC\uF900-\uFAAD,\.:;\"\'\`\-\_\+\?\!\%\$\@\*\&\^\s]$/i,v.length&&!v.match(m)&&w.type.push("string");break;case"chosevalue":var D;"true"===c.getAttribute("data-option-selected")||w.type.push("chosevalue");break;case"promocode":"y"!==a||!h.length||!window.tcart||window.tcart.promocode&&window.tcart.prodamount_discountsum||w.type.push("promocode");break;case"deliveryreq":w.type.push("deliveryreq");break;case"unauthorized_order":w.type.push("unauthorized_order")}_>0&&v.length&&v.length<_&&w.type.push("minlength"),p>0&&v.length&&v.length>p&&w.type.push("maxlength")}w.type&&w.type.length&&(o[o.length]=w)}}if("y"===a){var M=window.tcart_minorder>0,P=window.tcart_mincntorder>0,q;if(M)if((q=window.tcart.prodamount_withdiscount>0?window.tcart.prodamount_withdiscount:void 0!==window.tcart.prodamount_withdyndiscount&&window.t_cart__discounts&&window.t_cart__discounts.length>0?window.tcart.prodamount_withdyndiscount:void 0!==window.tcart.prodamount_withdiscount&&window.tcart.promocode&&"OK"===window.tcart.promocode.message?window.tcart.prodamount_withdiscount:window.tcart.prodamount)<window.tcart_minorder){var R={obj:{},type:[]};R.type.push("minorder"),o.push(R)}if(P&&window.tcart.total<window.tcart_mincntorder){var B={obj:{},type:[]};B.type.push("minquantity"),o.push(B)}}return n&&!o.length&&r.length&&(o=[{obj:"none",type:["emptyfill"]}]),o},window.tildaForm.hideErrors=function(t){if("object"!=typeof t||t.length){var e=t_forms__getElement(t),r=e.querySelectorAll(".js-errorbox-all"),o=e.querySelectorAll(".js-rule-error"),n=e.querySelectorAll(".js-error-rule-all"),a=e.querySelectorAll(".js-successbox"),i=e.querySelectorAll(".js-error-control-box"),s=e.querySelectorAll(".js-error-control-box .t-input-error"),l=document.getElementById("tilda-popup-for-error");Array.prototype.forEach.call(r,(function(t){t.style.display="none"})),Array.prototype.forEach.call(o,(function(t){t.style.display="none"})),Array.prototype.forEach.call(n,(function(t){t.innerHTML=""})),Array.prototype.forEach.call(a,(function(t){t.style.display="none"})),Array.prototype.forEach.call(s,(function(t){t.innerHTML=""})),Array.prototype.forEach.call(i,(function(t){t_removeClass(t,"js-error-control-box")})),t_removeClass(e,"js-send-form-error"),t_removeClass(e,"js-send-form-success"),l&&t_fadeOut(l)}},window.tildaForm.showErrorInPopup=function(t,e){var r=t_forms__getElement(t);if(!e||!e.length)return!1;var o=r.getAttribute("id"),n=r.getAttribute("data-inputbox");n||(n=".blockinput");var a="",i=!1,s=!0,l,c="",u="",d="",m=document.getElementById("tilda-popup-for-error"),f;m||(document.body.insertAdjacentHTML("beforeend",'<div id="tilda-popup-for-error" class="js-form-popup-errorbox tn-form__errorbox-popup" style="display: none;"> <div class="t-form__errorbox-text t-text t-text_xs"> error </div> <div class="tn-form__errorbox-close js-errorbox-close"> <div class="tn-form__errorbox-close-line tn-form__errorbox-close-line-left"></div> <div class="tn-form__errorbox-close-line tn-form__errorbox-close-line-right"></div> </div> </div>'),t_addEventListener(m=document.getElementById("tilda-popup-for-error"),"click",(function(t){var e=t||window.event,r,o;(e.target||e.srcElement).closest(".js-errorbox-close")&&(e.preventDefault?e.preventDefault():e.returnValue=!1,t_fadeOut(m))})));for(var _=0;_<e.length;_++)if(e[_]&&e[_].obj){if(0===_&&"none"===e[_].obj){d='<p class="t-form__errorbox-item">'+t_forms__getMsg("emptyfill")+"</p>";break}var p=t_forms__getElement(e[_].obj);p&&(a=p.closest(n)),a&&(c=a.querySelectorAll(".t-input-error"),t_addClass(a,"js-error-control-box"),c.length&&(i=!0));for(var w=0;w<e[_].type.length;w++){var v=e[_].type[w],h=t_forms__getMsg(v);u="",(l=r.querySelector(".js-rule-error-"+v))?l.textContent&&l.innerText||!h||-1!==d.indexOf(h)?(u=l.textContent||l.innerText,-1===d.indexOf(u)&&(d=d+'<p class="t-form__errorbox-item">'+u+"</p>")):d=d+'<p class="t-form__errorbox-item">'+h+"</p>":h&&-1===d.indexOf(h)&&(d=d+'<p class="t-form__errorbox-item">'+h+"</p>"),i&&(!u&&t_forms__getMsg(v+"field")&&(u=t_forms__getMsg(v+"field")),!u&&h&&(u=h),u&&a&&(c=a.querySelectorAll(".t-input-error"),Array.prototype.forEach.call(c,(function(t){t.innerHTML=u,t_fadeIn(t)}))))}}if(d){m.querySelector(".t-form__errorbox-text").innerHTML=d;var g=m.querySelectorAll(".t-form__errorbox-item");if(Array.prototype.forEach.call(g,(function(t){t.style.display="block"})),document.querySelector('.t1093 [data-elem-type="form"]')){var y=window.tPopupObj&&window.tPopupObj.openPopUpList;if(y&&y.length){var b,E='.t1093 .t-popup[data-tooltip-hook="'+y[y.length-1]+'"]',A=document.querySelector(E),F=A?getComputedStyle(A).zIndex:0,x;F>1e4&&(m.style.zIndex=F+1)}else m.style.zIndex=""}t_fadeIn(m)}function S(t){var e=t||window.event,r;if("INPUT"===(e.target||e.srcElement).tagName&&f){var n=f.querySelectorAll("form .t-input-error");t_fadeOut(m),Array.prototype.forEach.call(n,(function(t){t.innerHTML="",t_fadeOut(t)})),window.t_forms__errorTimerID&&(window.clearTimeout(window.t_forms__errorTimerID),window.t_forms__errorTimerID=0),window.isInitEventsZB[o]=!0}}if(window.t_forms__errorTimerID&&window.clearTimeout(window.t_forms__errorTimerID),window.t_forms__errorTimerID=window.setTimeout((function(){t_fadeOut(m),c=r.querySelectorAll(".t-input-error"),Array.prototype.forEach.call(c,(function(t){t.innerHTML="",t_fadeOut(t)})),window.t_forms__errorTimerID=0}),1e4),!window.isInitEventsZB[o]){f=r.closest(".r");var C="focus";document.addEventListener||(C="focusin"),t_removeEventListener(f,C,S),t_addEventListener(f,C,S,!0),t_removeEventListener(f,"change",S),t_addEventListener(f,"change",S,!0)}return t_triggerEvent(r,"tildaform:aftererror"),!0},window.tildaForm.showErrors=function(t,e,r){var o=t_forms__getElement(t);if(!e||!e.length)return!1;if("y"===o.getAttribute("data-error-popup"))return window.tildaForm.showErrorInPopup(o,e);for(var n,a=(r||{}).inputBoxSelector,i,s=void 0===a?o.getAttribute("data-inputbox")||".blockinput":a,l=t_forms__createErrorFocusHash(),c=0;c<e.length;c++){var u=0===c,d=e[c];if(d&&d.obj){var m=d.obj;if("none"===m&&u){t_forms__showEmptyFormError(o);break}var f=t_forms__getElement(m),_;if(f&&f instanceof Element)t_forms__showInputErrors(o,f.closest(s),d);t_forms__showFormErrors(o,d,l)}}return t_forms__scrollToInputWithError(e[0]),t_forms__showFormErrorsContainers(o),t_triggerEvent(o,"tildaform:aftererror"),!0},window.tildaForm.addTildaCaptcha=function(t,e){var r=t_forms__getElement(t),o=document.getElementById("tildaformcaptchabox"),n=document.getElementById("js-tildaspec-captcha"),a;o&&t_removeEl(o),n&&t_removeEl(n),r.insertAdjacentHTML("beforeend",'<input type="hidden" name="tildaspec-tildacaptcha" id="js-tildaspec-captcha">');try{a=(new Date).getTime()+"="+parseInt(8*Math.random(),10)}catch(s){a="rnd="+parseInt(8*Math.random(),10)}var i='<div id="tildaformcaptchabox" tabindex="-1" style="z-index: 99999999999; position:fixed; text-align: center; vertical-align: middle; top: 0px; left:0px; bottom: 0px; right: 0px; background: rgba(255,255,255,0.97);"><iframe id="captchaIframeBox" src="//'+window.tildaForm.endpoint+"/procces/captcha/?tildaspec-formid="+r.getAttribute("id")+"&tildaspec-formskey="+e+"&"+a+'" frameborder="0" width="100%" height="100%"></iframe></div>';document.body.insertAdjacentHTML("beforeend",i),window.removeEventListener("message",checkVerifyTildaCaptcha),window.addEventListener("message",checkVerifyTildaCaptcha),document.getElementById("tildaformcaptchabox").focus()},window.tildaForm.addMembersInfoToForm=function(t){var e=t_forms__getElement(t);if(e)try{var r=e.querySelector(".js-tilda-mauserinfo");if(r&&t_removeEl(r),!window.mauser)return;window.tildaForm.tildamember={},window.mauser.name&&(window.tildaForm.tildamember.name=window.mauser.name),window.mauser.code&&window.mauser.email&&(window.tildaForm.tildamember.email=window.mauser.email,window.tildaForm.tildamember.code=window.mauser.code),window.mauser.phonecode&&window.mauser.phone&&(window.tildaForm.tildamember.phone=window.mauser.phone,window.tildaForm.tildamember.phonecode=window.mauser.phonecode),window.mauser.token&&(window.tildaForm.tildamember.token=window.mauser.token)}catch(o){console.error("addMembersInfoToForm exception: ",o)}},window.tildaForm.closeSuccessPopup=function(){var t=document.getElementById("tildaformsuccesspopup-new"),e=document.getElementById("tildaformsuccesspopup"),r,o=e&&"block"===getComputedStyle(e).display?e:t;if(o){t_removeClass(document.body,"t-body_success-popup-showed"),t_forms__isIOS()&&window.tildaForm.unlockBodyScroll(),t_fadeOut(o),o.classList.contains("t-form-success-popup_new")&&o.classList.remove("t-popup_show");var n=document.querySelector("style.t-success-popup");n&&n.remove()}},window.tildaForm.lockBodyScroll=function(){var t=document.body;if(!t_hasClass(t,"t-body_scroll-locked")){var e=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;t_addClass(t,"t-body_scroll-locked"),t.style.top="-"+e+"px",t.setAttribute("data-popup-scrolltop",e)}},window.tildaForm.unlockBodyScroll=function(){var t=document.body;if(t_hasClass(t,"t-body_scroll-locked")){var e=t.getAttribute("data-popup-scrolltop");t_removeClass(t,"t-body_scroll-locked"),t.style.top=null,t.removeAttribute("data-popup-scrolltop"),document.documentElement.scrollTop=parseInt(e)}},window.tildaForm.showSuccessPopup=function(t){var e="",r=document.getElementById("tildaformsuccesspopup"),o=document.getElementById("tildaformsuccesspopuptext"),n=document.body;if(!r){e+='<style media="screen"> .t-form-success-popup { display: none; position: fixed; background-color: rgba(0,0,0,.8); top: 0px; left: 0px; width: 100%; height: 100%; z-index: 10000; overflow-y: auto; cursor: pointer; } .t-body_success-popup-showed { height: 100vh; min-height: 100vh; overflow: hidden; } .t-form-success-popup__window { width: 100%; max-width: 400px; position: absolute; top: 50%; -webkit-transform: translateY(-50%); transform: translateY(-50%); left: 0px; right: 0px; margin: 0 auto; padding: 20px; box-sizing: border-box; } .t-form-success-popup__wrapper { background-color: #fff; padding: 40px 40px 50px; box-sizing: border-box; border-radius: 5px; text-align: center; position: relative; cursor: default; } .t-form-success-popup__text { padding-top: 20px; word-break: break-word; } .t-form-success-popup__close-icon { position: absolute; top: 14px; right: 14px; cursor: pointer; } @media screen and (max-width: 480px) { .t-form-success-popup__text { padding-top: 10px; } .t-form-success-popup__wrapper { padding-left: 20px; padding-right: 20px; } } </style>',e+='<div class="t-form-success-popup" style="display:none;" id="tildaformsuccesspopup"> <div class="t-form-success-popup__window"> <div class="t-form-success-popup__wrapper"> <svg class="t-form-success-popup__close-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" class="t657__icon-close" viewBox="0 0 23 23"> <g fill-rule="evenodd"> <path d="M0 1.41L1.4 0l21.22 21.21-1.41 1.42z"/> <path d="M21.21 0l1.42 1.4L1.4 22.63 0 21.21z"/> </g> </svg> <svg width="50" height="50" fill="#62C584"> <path d="M25.1 49.28A24.64 24.64 0 0 1 .5 24.68 24.64 24.64 0 0 1 25.1.07a24.64 24.64 0 0 1 24.6 24.6 24.64 24.64 0 0 1-24.6 24.61zm0-47.45A22.87 22.87 0 0 0 2.26 24.68 22.87 22.87 0 0 0 25.1 47.52a22.87 22.87 0 0 0 22.84-22.84A22.87 22.87 0 0 0 25.1 1.83z"/> <path d="M22.84 30.53l-4.44-4.45a.88.88 0 1 1 1.24-1.24l3.2 3.2 8.89-8.9a.88.88 0 1 1 1.25 1.26L22.84 30.53z"/> </svg> <div class="t-form-success-popup__text t-descr t-descr_sm" id="tildaformsuccesspopuptext"> Thank You! </div> </div> </div> </div>',n.insertAdjacentHTML("beforeend",e),r=document.getElementById("tildaformsuccesspopup"),o=document.getElementById("tildaformsuccesspopuptext");var a=r.querySelector(".t-form-success-popup__close-icon");t_addEventListener(r,"click",(function(t){var e=t||window.event,r;(e.target||e.srcElement)===this&&window.tildaForm.closeSuccessPopup()})),t_addEventListener(a,"click",(function(){window.tildaForm.closeSuccessPopup()})),t_addEventListener(n,"keydown",(function(t){var e=t||window.event,r;27==(e.keyCode||e.which)&&window.tildaForm.closeSuccessPopup()}))}o.innerHTML=t,t_fadeIn(r),t_addClass(n,"t-body_success-popup-showed"),t_forms__isIOS()&&setTimeout((function(){window.tildaForm.lockBodyScroll()}),500)},window.tildaForm.showSuccessPopupNew=function(t,e,r,o){var n="tildaformsuccesspopup-new",a=document.body,i=t.getAttribute("data-success-url"),s=!!i;if(window.isRedirectError||!s||e||r){var l=window.isRedirectError&&s&&!e&&!r,c=!r&&!e,u=d();p(),w(),t_forms__setupCloseHandlers(u,s),m(),setTimeout((function(){u.focus(),t_forms__trapFocus(u)}),50)}function d(){var t=document.getElementById(n);return t||(a.insertAdjacentHTML("beforeend",t_forms__drawNewSuccessPopup()),t=document.getElementById(n)),t}function m(){t_fadeIn(u),t_addClass(a,"t-body_success-popup-showed"),u.classList.add("t-popup_show"),f(u),t_forms__isIOS()&&setTimeout((function(){window.tildaForm.lockBodyScroll()}),500)}function f(){var t=120,e=window.innerHeight-t,r=u.querySelector(".t-form-success-popup__wrapper"),o=getComputedStyle(r,null),n=parseInt(o.paddingTop)||0,a=parseInt(o.paddingBottom)||0,i,s,l;r.clientHeight-(n+a)<=e?r.classList.remove("t-popup__container-static"):r.classList.add("t-popup__container-static")}function _(){return{title:{element:document.getElementById("tildaformsuccesspopuptitle-new"),content:c?t_forms__getMsg("success_title"):r,show:!!c||!!r},text:{element:document.getElementById("tildaformsuccesspopuptext-new"),content:c?t_forms__getMsg("success_text"):e,show:!!c||!!e},linkButton:{element:document.getElementById("tildaformsuccesspopuplink-new"),content:o||t_forms__getMsg(s?"success_btn_redirect":"success_btn"),show:s},closeButton:{element:document.getElementById("tildaformsuccesspopupbtn-new"),content:o||t_forms__getMsg(s?"success_btn_redirect":"success_btn"),show:!s},info:{element:document.getElementById("tildaformsuccesspopupinfo-new"),content:null,show:s},infoText:{element:document.getElementById("tildaformsuccesspopupinfotext-new"),content:t_forms__getMsg(l?"success_info_redirect_error":"success_info"),show:s},infoDigit:{element:document.getElementById("tildaformsuccesspopupinfodigit-new"),content:l?"":"3",show:s},closeIcon:{element:document.getElementById("tildaformsuccesspopupclose-new"),content:null,show:!s}}}function p(){var t=_();Object.keys(t).forEach((function(e){var r=t[e],o=r.element,n=r.content,a=r.show;o&&(o.classList.toggle("t-form-success-popup_hidden",!a),a&&n&&(o.innerHTML=n),"linkButton"===e&&s&&o.setAttribute("href",i))}))}function w(){var t=document.querySelector(".t-form-success-popup__content-icon");if(t){var e=t.cloneNode(!0);t.parentNode.replaceChild(e,t)}}},window.tildaForm.handleClosePopup=function(){window.tildaForm.closeSuccessPopup(),window.tildaForm.currentRemoveCloseHandlers&&"function"==typeof window.tildaForm.currentRemoveCloseHandlers&&window.tildaForm.currentRemoveCloseHandlers()},window.tildaForm.successEnd=function(t,e,r){var o=t_forms__getElement(t);t_addClass(o,"js-send-form-success"),t_forms__updateAllSystemVariables(o);var n=o.closest(".t-popup"),a=o.closest(".t1093"),i=t_forms__isNewSuccessBox(o)&&n&&!a,s="y"===o.getAttribute("data-success-popup");function l(){t_forms__handleSuccess(o,{successCallback:r,successUrl:e}),window.tildaForm.clearTCart(o),t_forms__clearFormInputs(o),t_forms__clearFormData(o),(t_forms__isNewSuccessBox(o)||s)&&window.t_forms__clearForm(o)}function c(){t_forms__showSuccessbox(o).finally((function(){l()}))}if(i){var u=320;return t_forms__processFormsInPopup(n,o),void setTimeout(c,u)}c()},window.tildaForm.clearTCart=function(t){var e;if("y"===t_forms__getElement(t).getAttribute("data-formcart")){if(window.clearTCart=!0,window.tcart={amount:0,currency:"",system:"",products:[]},window.tcart.system="none","object"==typeof localStorage)try{localStorage.removeItem("tcart")}catch(r){console.error("Your web browser does not support localStorage. Code status: ",r)}try{delete window.tcart,window.tcart__loadLocalObj()}catch(r){}window.tcart_success="yes"}},window.tildaForm.send=function(formNode,btnSubmitNode,formType,formKey){var form=t_forms__getElement(formNode),btnSubmit=t_forms__getElement(btnSubmitNode),allRecords=document.getElementById("allrecords"),pageId=allRecords.getAttribute("data-tilda-page-id"),projectId=allRecords.getAttribute("data-tilda-project-id"),formId=form.getAttribute("id"),dataFormCart=form.getAttribute("data-formcart"),msgContainers,errorBoxes,allError;window.tildaForm.tildapayment=!1,("y"===dataFormCart||form.closest(".t706__orderform"))&&window.tildaForm.addPaymentInfoToForm(form);try{window.mauser&&window.tildaForm.addMembersInfoToForm(form)}catch(error){}var inputItsGood=form.querySelector('input[name="form-spec-comments"]');if(inputItsGood||form.insertAdjacentHTML("beforeend",'<div style="position: absolute; left: -5000px; bottom: 0; display: none;"><input type="text" name="form-spec-comments" value="Its good" class="js-form-spec-comments" tabindex="-1" /></div>'),2===formType||!formType&&formKey){var tildaSpecs={"tildaspec-cookie":document.cookie,"tildaspec-referer":window.location.href,"tildaspec-formid":formId,"tildaspec-formskey":formKey,"tildaspec-version-lib":window.tildaForm.versionLib,"tildaspec-pageid":pageId,"tildaspec-projectid":projectId,"tildaspec-lang":window.t_forms__lang},hiddenInput;for(var spec in tildaSpecs)hiddenInput=form.querySelector('input[name="'+spec+'"]'),hiddenInput||(form.insertAdjacentHTML("beforeend",'<input type="hidden" name="'+spec+'" value="">'),hiddenInput=form.querySelector('input[name="'+spec+'"]'),hiddenInput.value=tildaSpecs[spec]);try{hiddenInput=form.querySelector("input[name=tildaspec-fp]"),hiddenInput||(form.insertAdjacentHTML("beforeend",'<input type="hidden" name="tildaspec-fp" value="">'),hiddenInput=form.querySelector("input[name=tildaspec-fp]")),window.tildastat?hiddenInput.value=window.tildastat("fingerprint"):hiddenInput.value="st"+window.pageYOffset+"w"+window.innerWidth+"h"+window.innerHeight+"ft"+form.getBoundingClientRect().top+window.pageYOffset}catch(error){}inputItsGood=form.querySelector(".js-form-spec-comments"),inputItsGood&&(inputItsGood.value="");var _t_forms__getFormData=t_forms__getFormData(form),status=_t_forms__getFormData.status,formData=_t_forms__getFormData.data,contentType=_t_forms__getFormData.contentType;if("invalid"===status)return!1;var startRequest=Date.now();t_triggerEvent(form,"tildaform:beforesend");var formUrl="https://"+window.tildaForm.endpoint+"/procces/",secondFormTypeXhr=new XMLHttpRequest;return secondFormTypeXhr.open("POST",formUrl,!0),secondFormTypeXhr.setRequestHeader("Content-Type",contentType),secondFormTypeXhr.setRequestHeader("Accept","application/json, text/javascript, */*; q=0.01"),secondFormTypeXhr.onreadystatechange=function(){if(4===secondFormTypeXhr.readyState)if(secondFormTypeXhr.status>=200&&secondFormTypeXhr.status<400){var data=secondFormTypeXhr.responseText;if(data){var objData=JSON.parse(data);if("object"==typeof objData){var dataSuccessUrl=form.getAttribute("data-success-url"),dataSuccessCallback=form.getAttribute("data-success-callback"),dataFormSendedCallback=form.getAttribute("data-formsended-callback");t_removeClass(btnSubmit,"t-btn_sending"),btnSubmit.tildaSendingStatus="0";try{if(objData&&objData.redirectto&&3==objData.redirectto.length&&window.tildaForm.endpoint.substring(window.tildaForm.endpoint.length-3)!=objData.redirectto)return window.tildaForm.endpoint="forms.tildaapi."+objData.redirectto,window.tildaForm.send(form,btnSubmit,formType,formKey),!1}catch(e){console.error("error in dc action.")}if(objData&&objData.error)msgContainers=t_forms__getErrorContainers(form,""),errorBoxes=msgContainers.errorBoxes,allError=msgContainers.allError,Array.prototype.forEach.call(allError,(function(t){t.style.display="block"})),Array.prototype.forEach.call(errorBoxes,(function(t){var e=t.querySelector(".t-form__errorbox-text");e?e.innerHTML=objData.error:t.innerHTML=objData.error,t.style.display="block"})),t_addClass(form,"js-send-form-error"),t_triggerEvent(form,"tildaform:aftererror"),window.t_cart__discounts&&window.localStorage.removeItem("tcart_discounts");else{var _objData$member;if(objData&&objData.needcaptcha)return formKey?(window.tildaForm.addTildaCaptcha(form,formKey),!1):(alert("Server busy. Please try again later."),!1);var formResult={};if(objData&&objData.results&&objData.results[0]){var strValue=objData.results[0];strValue=strValue.split(":"),formResult.tranId=strValue[0]+":"+strValue[1],formResult.orderId=strValue[2]?strValue[2]:"0",formResult.orderId&&"0"!==formResult.orderId&&(window.tildaForm.orderIdForStat=formResult.orderId)}else formResult.tranId="0",formResult.orderId="0";"undefined"!=typeof jQuery&&jQuery(form).data("tildaformresult",formResult),form.tildaTranId=formResult.tranId,form.tildaOrderId=formResult.orderId;var dataEventName=form.getAttribute("data-tilda-event-name")||"";dataEventName||(dataEventName="y"===dataFormCart&&objData&&(objData.next&&objData.next.type&&("function"!==objData.next.type||objData.next.value&&("stripev3"===objData.next.value.sysname||"outersite"===objData.next.value.installation))||!objData.next)?"/tilda/"+formId+"/payment/":"/tilda/"+formId+"/submitted/");var title="Send data from form "+formId,price=0,product="",priceEl=form.querySelector(".js-tilda-price");if(window.Tilda&&"function"==typeof window.Tilda.sendEventToStatistics){window.tildaForm.tildapayment&&window.tildaForm.tildapayment.amount?(price=window.tildaForm.tildapayment.amount,parseFloat(price)>0&&(title="Order "+formResult.orderId)):priceEl&&(price=priceEl.value,parseFloat(price)>0&&(title="Order "+formResult.orderId));try{window.Tilda.sendEventToStatistics(dataEventName,title,product,price)}catch(error){console.error("Error while sending statistics. Code status: ",error)}window.dataLayer&&window.dataLayer.push({event:"submit_"+formId})}else{try{"undefined"!=typeof ga&&"tilda"!==window.mainTracker&&ga("send",{hitType:"pageview",page:dataEventName,title:title}),window.mainMetrika&&window[window.mainMetrika]&&window[window.mainMetrika].hit(dataEventName,{title:title,referer:window.location.href})}catch(error){console.error("Error while sending main metrica. Code status: ",error)}window.dataLayer&&window.dataLayer.push({event:"submit_"+formId})}if("y"===dataFormCart&&null!=(_objData$member=objData.member)&&_objData$member.token){var _objData$member2,profileName="tilda_members_profile"+projectId,memberInfo={token:null==(_objData$member2=objData.member)?void 0:_objData$member2.token,projectid:projectId};localStorage.setItem(profileName,JSON.stringify(memberInfo)),localStorage.setItem(profileName+"_timestamp",Math.floor(Date.now()/1e3).toString()),t_onFuncLoad("t_bd__init",(function(){t_bd__init(),window.tcart__initAuthAndDelivery(!0,!1)}))}try{t_triggerEvent(form,"tildaform:aftersuccess"),dataFormSendedCallback&&"function"==typeof jQuery?eval(dataFormSendedCallback+"(jQuery(form));"):dataFormSendedCallback&&eval(dataFormSendedCallback+"(form);")}catch(error){console.error("Error while call success callback. Code status: ",error)}if(objData&&objData.next&&objData.next.type)return window.tildaForm.payment(form,objData.next),!1;window.tildaForm.successEnd(form,dataSuccessUrl,dataSuccessCallback)}}}}else{var tsDelta=Date.now()-startRequest;if(t_removeClass(btnSubmit,"t-btn_sending"),btnSubmit.tildaSendingStatus="0",msgContainers=t_forms__getErrorContainers(form,""),errorBoxes=msgContainers.errorBoxes,allError=msgContainers.allError,!secondFormTypeXhr||0==secondFormTypeXhr.status&&tsDelta<100)Array.prototype.forEach.call(allError,(function(t){t.innerHTML="Request error (sending form data). Please check internet connection..."}));else{if(secondFormTypeXhr&&(secondFormTypeXhr.status>=500||408==secondFormTypeXhr.status||410==secondFormTypeXhr.status||429==secondFormTypeXhr.status||"timeout"==secondFormTypeXhr.statusText)&&-1!==window.tildaForm.endpoint.indexOf("forms.tilda"))return window.tildaForm.endpoint="forms2.tildacdn.com",window.tildaForm.send(form,btnSubmit,formType,formKey),!1;secondFormTypeXhr&&secondFormTypeXhr.responseText?Array.prototype.forEach.call(allError,(function(t){t.innerHTML="["+secondFormTypeXhr.status+"] "+secondFormTypeXhr.responseText+". Please, try again later."})):secondFormTypeXhr&&secondFormTypeXhr.statusText?Array.prototype.forEach.call(allError,(function(t){t.innerHTML="Error ["+secondFormTypeXhr.status+", "+secondFormTypeXhr.statusText+"]. Please, try again later."})):Array.prototype.forEach.call(allError,(function(t){t.innerHTML="["+secondFormTypeXhr.status+"] Unknown error. Please, try again later."}))}Array.prototype.forEach.call(allError,(function(t){t.style.display="block"})),Array.prototype.forEach.call(errorBoxes,(function(t){t.style.display="block"})),t_addClass(form,"js-send-form-error"),t_triggerEvent(form,"tildaform:aftererror")}return!0},secondFormTypeXhr.send(formData),!1}if("y"===form.getAttribute("data-is-formajax")){var _t_forms__getFormData2=t_forms__getFormData(form),_status=_t_forms__getFormData2.status,_contentType=_t_forms__getFormData2.contentType,dataForm=_t_forms__getFormData2.data;if("invalid"===_status)return!1;var formAjaxXhr=new XMLHttpRequest;return formAjaxXhr.open("POST",form.getAttribute("action"),!0),formAjaxXhr.setRequestHeader("Content-Type",_contentType),formAjaxXhr.setRequestHeader("Accept","text/plain, */*; q=0.01"),formAjaxXhr.onreadystatechange=function(){if(4===formAjaxXhr.readyState)if(formAjaxXhr.status>=200&&formAjaxXhr.status<400){var t=form.querySelector(".js-successbox"),e=form.getAttribute("data-success-url"),r=form.getAttribute("data-success-callback");t_removeClass(btnSubmit,"t-btn_sending"),btnSubmit.tildaSendingStatus="0";var o=formAjaxXhr.responseText;if(o)if("{"==o.substring(0,1)){var n=JSON.parse(o);if("object"==typeof n)if(n&&n.message&&"OK"!==n.message)t.innerHTML=n.message;else if(n&&n.error)return msgContainers=t_forms__getErrorContainers(form,"Unknown error. Please, try again later."),errorBoxes=msgContainers.errorBoxes,allError=msgContainers.allError,Array.prototype.forEach.call(allError,(function(t){t.style.display="block",t.innerHTML=n.error})),Array.prototype.forEach.call(errorBoxes,(function(t){t.style.display="block"})),t_addClass(form,"js-send-form-error"),t_triggerEvent(form,"tildaform:aftererror"),!1}else t.innerHTML=o,t_parseScripts(t,"");var a="/tilda/"+formId+"/submitted/",i="Send data from form "+formId;window.Tilda&&"function"==typeof window.Tilda.sendEventToStatistics?window.Tilda.sendEventToStatistics(a,i,"",0):"undefined"!=typeof ga&&"tilda"!==window.mainTracker?ga("send",{hitType:"pageview",page:a,title:i}):window.mainMetrika>""&&window[window.mainMetrika]&&window[window.mainMetrika].hit(a,{title:i,referer:window.location.href}),t_triggerEvent(form,"tildaform:aftersuccess"),window.tildaForm.successEnd(form,e,r)}else{t_removeClass(btnSubmit,"t-btn_sending"),btnSubmit.tildaSendingStatus="0",msgContainers=t_forms__getErrorContainers(form,""),errorBoxes=msgContainers.errorBoxes,allError=msgContainers.allError;var s=formAjaxXhr.responseText;Array.prototype.forEach.call(allError,(function(t){s?t.innerHTML=s+". Please, try again later. ["+formAjaxXhr.status+"]":formAjaxXhr.statusText?t.innerHTML="Error ["+formAjaxXhr.statusText+"]. Please, try again later. ["+formAjaxXhr.status+"]":t.innerHTML="Unknown error. Please, try again later. ["+formAjaxXhr.status+"]",t.style.display="block"})),Array.prototype.forEach.call(errorBoxes,(function(t){t.style.display="block"})),t_addClass(form,"js-send-form-error"),t_triggerEvent(form,"tildaform:aftererror")}return!0},formAjaxXhr.send(dataForm),!1}return-1==form.getAttribute("action").indexOf(window.tildaForm.endpoint)&&(t_removeClass(btnSubmit,"t-btn_sending"),btnSubmit.tildaSendingStatus="3",form.submit(),!0)},window.validateForm=function(t){return window.tildaForm.validate(t)},function(){try{var t=window.location.href,e,r="";if(-1!==t.toLowerCase().indexOf("utm_")&&"string"==typeof(e=(e=(t=t.toLowerCase()).split("?"))[1])){var o,n,a=e.split("&");for(n in a)"function"!=typeof a[n]&&"utm_"==(o=a[n].split("="))[0].substring(0,4)&&(r=r+a[n]+"|||");if(r.length>0&&(!window.tildastatcookie||"no"!=window.tildastatcookie)){var i=new Date;i.setDate(i.getDate()+30),document.cookie="TILDAUTM="+encodeURIComponent(r)+"; path=/; expires="+i.toUTCString()}}}catch(s){}}();var t_forms__setFormErrorMsg=function t(e,r){e.getAttribute("data-rule-filled")?e.style.display="block":r&&(e.innerHTML='<a href="#" class="t-form__errorbox-link">'+r+"</a>",e.style.display="block")};function t_forms__showEmptyFormError(t){var e=t.querySelectorAll(".js-rule-error-all"),r=t_forms__getMsg("emptyfill"),o;e.forEach((function(t){t_forms__setFormErrorMsg(t,r)})),t_forms__addMoveToInputWithErrorClickHandler(t.querySelector(".t-input-group"),e[0])}function t_forms__showInputErrors(t,e,r){if(e&&"none"!==r.obj){e.classList.add("js-error-control-box");var o=e.querySelectorAll(".t-input-error");r.type.forEach((function(e){var r,n=t_forms__getCustomMessage(t,e)||t_forms__getFieldErrorText(e);n&&o.forEach((function(t){t.innerHTML=n}))}))}}function t_forms__showFormErrors(t,e,r){e.type.forEach((function(o){var n=t.querySelectorAll(".js-rule-error-"+o),a,i=t_forms__getCustomMessage(t,o)||t_forms__getMsg(o),s;(n.length?n:t.querySelectorAll(".js-rule-error-all")).forEach((function(t){t_forms__setFormErrorMsg(t,i,o),r.add(o,e.obj,t)}))}))}function t_forms__getFieldErrorText(t){var e=t_forms__getMsg(t+"field"),r;return e||t_forms__getMsg(t)}function t_forms__getCustomMessage(t,e){var r=t.querySelector(".js-rule-error-"+e);if(!r)return"";var o=r.getAttribute("data-original-msg"),n=o?o.replace(/\\\'/g,"&#39;"):o;if(null!=n)return n;var a=r?r.textContent.replace(/\\\'/g,"&#39;"):"";return r.setAttribute("data-original-msg",a),a}function t_forms__createErrorFocusHash(){var t={};return{add:function e(r,o,n){var a=o instanceof Element;!t[r]&&o&&a&&(t_forms__addMoveToInputWithErrorClickHandler(o,n),t[r]=o)}}}function t_forms__scrollToInputWithError(t){if(t){var e=t.obj,r=e instanceof Element;"none"!==e&&r&&t_forms__focusInput(e)}}function t_forms__showFormErrorsContainers(t){var e;t.querySelectorAll(".js-errorbox-all").forEach((function(t){t.style.display="block"}))}function t_forms__getElement(t){return t instanceof Element?t:t[0]}function t_forms__getMsg(t){var e=[],r=window.t_forms__lang;return e.EN={success_title:"Thank you!",success_text:"Data submitted successfully",success_btn:"Done",success_btn_redirect:"Continue",success_info:"You'll be automatically redirected in:",success_info_redirect_error:"Redirecting...",success:"Thank you! Your data has been submitted.",successorder:"Thank you! Order created. Please wait while you are redirected to the payment page...",email:"Please enter a valid email address",url:"Please put a correct URL",phone:"Please put a correct phone number",number:"Please put a correct number",date:"Please put a correct date",time:"Please put a correct time (HH:mm)",name:"Please put a name",namerus:"Please put a correct name (only cyrillic letters)",nameeng:"Please put a correct name (only latin letters)",string:"You put incorrect symbols. Only letters, numbers and punctuation symbols are allowed",req:"Please fill out all required fields",reqfield:"Required field",minlength:"Value is too short",maxlength:"Value too big",emptyfill:"None of the fields are filled in",chosevalue:"Please select an address from the options",deliveryreq:"It is not possible to place an order without delivery. Please refresh the page and try again",unauthorized_order:"Please log in to proceed with your order",promocode:"Please activate promo code or clear input field",cached_page_popup_title:"Form submission available on original page",cached_page_popup_text:"To fill out and submit the form, go to the original page",cached_page_popup_btn:"Proceed"},e.RU={success_title:"Спасибо!",success_text:"Данные успешно отправлены.",success_btn:"Хорошо",success_btn_redirect:"Продолжить",success_info:"Автоматический переход через:",success_info_redirect_error:"Перенаправление...",success:"Спасибо! Данные успешно отправлены.",successorder:"Спасибо! Заказ оформлен. Пожалуйста, подождите. Идет переход к оплате...",email:"Укажите, пожалуйста, корректный email",url:"Укажите, пожалуйста, корректный URL",phone:"Укажите, пожалуйста, корректный номер телефона",number:"Укажите, пожалуйста, корректный номер",date:"Укажите, пожалуйста, корректную дату",time:"Укажите, пожалуйста, корректное время (ЧЧ:ММ)",name:"Укажите, пожалуйста, имя",namerus:"Укажите, пожалуйста, имя (только кириллица)",nameeng:"Укажите, пожалуйста, имя (только латиница)",string:"Вы написали некорректные символы. Разрешены только буквы, числа и знаки пунктуации",req:"Пожалуйста, заполните все обязательные поля",reqfield:"Обязательное поле",minlength:"Слишком короткое значение",maxlength:"Слишком длинное",emptyfill:"Ни одно поле не заполнено",chosevalue:"Пожалуйста, выберите адрес из предложенных вариантов",deliveryreq:"Невозможно оформить заказ без доставки. Пожалуйста, перезагрузите страницу и попробуйте еще раз.",unauthorized_order:"Пожалуйста, авторизуйтесь для оформления заказа",promocode:"Активируйте, пожалуйста, промокод или очистите поле",cached_page_popup_title:"Отправка формы доступна на оригинальной странице",cached_page_popup_text:"Чтобы заполнить и отправить форму перейдите на оригинальную страницу",cached_page_popup_btn:"Перейти"},"function"==typeof t_forms__getDict&&"RU"!==r&&"EN"!==r&&(e=window.t_forms__getDict()),e[r]?e[r][t]:e.EN[t]}function checkVerifyTildaCaptcha(t){var e=t||window.event;if(-1!==e.origin.indexOf(window.tildaForm.endpoint)){var r=document.getElementById("js-tildaspec-captcha"),o=document.getElementById("tildaformcaptchabox");if("closeiframe"==e.data)return o&&t_removeEl(o),void(r&&t_removeEl(r));var n=e.data;if("object"==typeof n&&(n=JSON.stringify(n),Array.isArray(window.t_jserrors)||(window.t_jserrors=[]),window.t_jserrors.push({message:"Recaptcha returned object, instead of string: "+n,filename:"tilda-form-1.0",lineno:0,colno:0})),r){r.value=n,o&&t_removeEl(o);var a=r.closest("form");a&&t_forms__submitEvent(a)}}}function t_parseScripts(t,e){var r=t.querySelectorAll(e+"script");Array.prototype.forEach.call(r,(function(e){for(var r=document.createElement("script"),o=0;o<e.attributes.length;o++){var n=e.attributes[o];r.setAttribute(n.name,n.value)}if(e.innerHTML.length)r.appendChild(document.createTextNode(e.innerHTML)),e.parentNode.replaceChild(r,e);else{var a=document.createElement("script");a.src=e.attributes.src.value,t.appendChild(a),t_removeEl(e)}}))}function t_forms__onSuccess(t){window.isRedirectError=!1;var e=t_forms__getElement(t),r=e.closest(".r"),o=r.getAttribute("data-parenttplid")||r.getAttribute("data-record-type"),n=e.querySelector(".t-form__inputsbox"),a=getComputedStyle(n,null),i=parseInt(a.paddingTop)||0,s=parseInt(a.paddingBottom)||0,l,c,u=n.clientHeight-(i+s)+(n.getBoundingClientRect().top+window.pageYOffset),d=e.querySelector(".t-form__successbox"),m=d?d.getBoundingClientRect().top+window.pageYOffset:0,f,_=window.innerHeight,p=document.body,w=document.documentElement,v=Math.max(p.scrollHeight,p.offsetHeight,w.clientHeight,w.scrollHeight,w.offsetHeight);if(121==o){var h=e.getAttribute("data-success-callback");h&&(o=h.split("_onSuccess")[0].replace("t",""))}var g="t"+o+"__inputsbox_hidden",y=[702,708,862,945,1014,1114],b=!0;f=window.innerWidth>960?m-200:m-100;var E=document.querySelector(".t-tildalabel"),A=t_forms__isNewSuccessBox(e);if(m>window.scrollY||v-u<_-100)A||n.classList.add(g),_>v&&E&&setTimeout((function(){t_fadeOut(E)}),300);else{for(var F=0;F<y.length;F++)if(y[F]==o){b=!1;break}b&&t_forms__scrollBeginForm(f),setTimeout((function(){A||n.classList.add(g)}),400)}var x=e.getAttribute("data-success-url");if(x&&t_forms__handleRedirect(e,x,d),835==o||862==o){var S=r.querySelector(".t"+o+"__btn_prev"),C=r.querySelector(".t"+o+"__wrapper"),T=r.querySelector(".t"+o+"__quiz-form-wrapper");S&&(S.style.display="none"),C&&(C.style.minHeight=""),T&&(T.style.minHeight="")}}function t_forms__handleRedirect(t,e,r){var o=500;if(t_forms__isNewSuccessBox(t)){var n=(null==r?void 0:r.getAttribute("data-success-title"))||"",a=(null==r?void 0:r.getAttribute("data-success-message"))||"",i=Boolean(n||a),s=document.getElementById("tildaformsuccesspopupinfodigit-new");i&&_(o=5e3);var l=document.getElementById("tildaformsuccesspopuplink-new");l&&(l.removeEventListener("click",d),l.addEventListener("click",d));var c=null,u=null;function d(t){var e;t.preventDefault(),clearTimeout(c),m(t.currentTarget.getAttribute("href"))}function m(t){window.tildaForm.handleClosePopup(),window.location.href=t}function f(){window.isRedirectError=!0,s.textContent="",t_forms__showSuccessbox(t),new MutationObserver((function(t,e){(l=document.getElementById("tildaformsuccesspopuplink-new"))&&(e.disconnect(),l.removeEventListener("click",d),l.addEventListener("click",d))})).observe(document.body,{childList:!0})}function _(t){var e=t/1e3;s.textContent=e;var r=setInterval((function(){e--,s.textContent=e,e<=0&&clearInterval(r)}),1e3)}c=setTimeout((function(){try{var t=window.location.href;m(e),i||(window.tildaForm.handleClosePopup(),u=setTimeout((function(){try{window.location.href===t&&f()}catch(e){console.error(e)}}),2e3))}catch(r){console.error(r)}}),o),window.addEventListener("pageshow",(function(){clearTimeout(c),clearTimeout(u)}))}else setTimeout((function(){window.location.href=e}),o)}function t_forms__scrollBeginForm(t){var e=400,r=(window.pageYOffset||document.documentElement.scrollTop)-(document.documentElement.clientTop||0),o=t-r,n=0,a=16;function i(t){var e=t;return(e/=200)<1?o/2*e*e*e+r:o/2*((e-=2)*e*e+2)+r}function s(){n+=a,window.scrollTo(0,i(n)),n<e?setTimeout(s,a):document.body.removeAttribute("data-scrollable")}document.body.setAttribute("data-scrollable","true"),s()}function t_forms__getConditionCheckHandler(t){var e=Array.from(t.querySelectorAll('[data-hidden-by-condition="true"]')),r;return{isHiddenByCondition:function t(r){return e.some((function(t){return t===r||t.contains(r)}))}}}function t_forms__getRecForm(t){return t.querySelector(".t-form")}function t_forms__hasFormInRec(t){return!!t_forms__getRecForm(t)}function t_forms__initFormFields(t){var e;t_forms__getRecForm(t)&&t_forms__parseVariables(t)}function t_forms__getVariableRegexp(){return/{{(form|tilda).([A-zА-я0-9_-]+)(?:=([^{}]+))?}}/g}function t_forms__elementHasVariables(t){var e;return t_forms__getVariableRegexp().test(t.textContent)}function t_forms__replaceVariablesWithPlaceholders(t){var e=t_forms__findMatchingTextNodes(t,t_forms__elementHasVariables);return e.forEach((function(t){t.innerHTML=t.innerHTML.replace(t_forms__getVariableRegexp(),(function(t,e,r,o){return t_forms__buildVariablePlaceholderHTML(t,e,r,o)}))})),e}function t_forms__buildVariablePlaceholderHTML(t,e,r,o){var n=document.createElement("span");return n.classList.add("t-variable-placeholder"),n.setAttribute("data-variable",r),n.setAttribute("data-variable-domain",e),n.setAttribute("data-original",t),o&&n.setAttribute("data-default-value",o),n.textContent=o||r,n.outerHTML}function t_forms__findMatchingTextNodes(t,e){for(var r=[],o=document.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function t(r){return e(r)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});o.nextNode();){var n=o.currentNode;["SCRIPT","STYLE"].includes(n.parentElement.tagName)||r.push(n.parentElement)}return t_forms__removeDuplicateElements(r)}function t_forms__bindFormVariablesToPlaceholders(t,e){return new Promise((function(r){var o,n=t_forms__getUsedVariables(e,{unique:!0}).map((function(r){if(t_forms__isSystemVariable(r))return e.forEach((function(e){return t_forms__updateSystemVariable(t,e,r)})),Promise.resolve();var o=t_forms__findFormField(t,r.name);return o?t_formsApi__initTildaField(o).then((function(o){var n=function t(e){return t_forms__updateInputVariable(e,r,o)};o.onChange((function(){return n(t)}),{uniqueKey:r.name}),e.forEach(n)})):Promise.resolve()}));Promise.all(n).then(r)}))}function t_forms__getSystemVariables(){return{LEAD_ID:"lead_id"}}function t_forms__isSystemVariable(t){return"tilda"===t.domain&&Object.values(t_forms__getSystemVariables()).includes(t.name)}function t_forms__updateVariables(t,e,r){var o=t.querySelectorAll('.t-variable-placeholder[data-variable="'+e.name+'"][data-variable-domain="'+e.domain+'"]');o.length&&o.forEach((function(t){var e=t.dataset,o=e.variable,n=e.defaultValue;t.textContent=r||n||o}))}function t_forms__updateInputVariable(t,e,r){var o=r.getValue,n=r.data,a,i=o().value;if(n.ownVariantTitle&&i&&(i=i.replace(n.ownVariantTitle+": ","")),n.isContactMethod){var s=i[e.name];i=s.typeInputDisplayText?s.typeInputDisplayText:i[e.name].value}t_forms__updateVariables(t,e,i)}function t_forms__updateSystemVariable(t,e,r){var o=t_forms__getSystemVariables(),n=t.querySelector(".t-form");if(n){var a=r.name,i,s,l;if(r.name===o.LEAD_ID)a=(n.tildaTranId||"").split(":")[1]||"0";t_forms__updateVariables(e,r,a)}}function t_forms__updateAllSystemVariables(t){var e=t.closest(".t-rec"),r,o;t_forms__getUsedVariables([e],{unique:!0}).filter(t_forms__isSystemVariable).forEach((function(t){t_forms__updateSystemVariable(e,e,t)}))}function t_forms__getUsedVariables(t,e){void 0===e&&(e={});var r,o=e.unique,n=Array.from(t).flatMap((function(t){return Array.from(t.querySelectorAll(".t-variable-placeholder")).map((function(t){return{name:t.getAttribute("data-variable"),domain:t.getAttribute("data-variable-domain")}})).filter((function(t){return t.name&&t.domain}))}));if(o){var a={};return n.filter((function(t){var e=t.name+"|"+t.domain;return!a[e]&&(a[e]=!0,!0)}))}return n}function t_forms__parseVariables(t){var e=t_forms__replaceVariablesWithPlaceholders(t),r;return e.length?t_forms__bindFormVariablesToPlaceholders(t.closest(".t-rec"),e):Promise.resolve()}function t_forms__findFormField(t,e){var r=t.querySelector('.t-input-group[data-field-name="'+e+'"]'),o;return r||Array.from(t.querySelectorAll('.t-input-group[data-field-name*="'+e+'"]')).find((function(t){return t.getAttribute("data-field-name").split(";").includes(e)}))}function t_forms__clearFormInputs(t){var e=t.querySelectorAll(".t-upwidget-container__data_table_actions_remove svg"),r=t.querySelectorAll('input[type="text"]'),o=t.querySelectorAll('input[type="number"]'),n=t.querySelectorAll('input[type="email"]'),a=t.querySelectorAll('input[type="tel"], input[type="hidden"][data-tilda-rule="phone"]'),i=t.querySelectorAll("textarea");e.forEach((function(t){t_triggerEvent(t,"click")})),r.forEach((function(t){t.value=""})),o.forEach((function(t){t.value=""})),n.forEach((function(t){t.value=""})),a.forEach((function(t){t.value=""})),i.forEach((function(t){t.innerHTML="",t.value=""}))}function t_forms__clearFormData(t){"undefined"!=typeof jQuery&&jQuery(t).data("tildaformresult",{tranId:"0",orderId:"0"}),t.tildaTranId="0",t.tildaOrderId="0"}function t_forms__showSuccessbox(t){var e=t.querySelector(".js-successbox");if(!e)return Promise.resolve();var r=t_forms__isNewSuccessBox(t),o=t_forms__getSuccessBoxContent(e,r);return e.innerHTML=r?'\n\t\t\t<div class="t-form__successbox-title">'+o.title+'</div>\n\t\t\t<div class="t-form__successbox-text">'+o.text+'</div>\n\t\t\t<div class="t-form__successbox-btn">'+o.button+"</div>\n\t\t":o.text,t_forms__parseVariables(e).finally((function(){"y"!==t.getAttribute("data-success-popup")?e.style.display="block":t_forms__showSuccessPopup(t,e)}))}function t_forms__getSuccessBoxContent(t,e){var r=t_forms__getMsg("success"),o=t.getAttribute("data-success-message"),n={text:"",title:"",button:""};return o?n.text=o:t.textContent&&t.innerText||o||!r?n.text=t.innerHTML:n.text=r,e&&(o||(n.text=""),n.title=t.getAttribute("data-success-title")||"",n.button=t.getAttribute("data-success-btn")||""),n}function t_forms__showSuccessPopup(t,e){var r,o,n,a;if(!!t.closest(".t396"))window.tildaForm.showSuccessPopup(e.innerHTML);else{var i={title:e.querySelector(".t-form__successbox-title"),text:e.querySelector(".t-form__successbox-text"),btn:e.querySelector(".t-form__successbox-btn")};window.tildaForm.showSuccessPopupNew(t,(null==(r=i.text)?void 0:r.innerHTML)||"",(null==(o=i.title)?void 0:o.innerHTML)||"",(null==(n=i.btn)?void 0:n.innerHTML)||"")}}function t_forms__handleSuccess(form,options){var _ref2=options||{},successUrl=_ref2.successUrl,_ref2$successCallback=_ref2.successCallback,successCallback=void 0===_ref2$successCallback?"":_ref2$successCallback,callback=(successCallback||"").replace("window.","");if(callback&&"function"==typeof window[callback])"undefined"!=typeof jQuery?eval(callback+"(jQuery(form))"):eval(callback+"(form)");else if(successUrl){var successBox=form.querySelector(".t-form__successbox");t_forms__handleRedirect(form,successUrl,successBox)}}function t_forms__getRootZone(){var t=document.getElementById("allrecords"),e;return t&&t.getAttribute("data-tilda-root-zone")||"com"}function t_forms__isTesterPage(){var t=document.getElementById("allrecords"),e;return t&&"y"===t.getAttribute("data-tilda-ts")}function t_forms__isTeam(){var t=document.getElementById("allrecords");return t&&"y"===t.getAttribute("data-tilda-te")}function t_forms__isQuiz(t){return t&&t.closest(".t-quiz")}function t_forms__isIOS(){return/iPhone|iPad|iPod/i.test(navigator.userAgent)&&!window.MSStream}function t_forms__isNewSuccessBox(t){return!!t&&(!t_forms__isQuiz(t)&&!["t396","t447","t651","t653","t706","t708","t945","t1122"].some((function(e){return t.closest("."+e)})));var e,r}function t_forms__removeDuplicateElements(t){var e=new Map;return t.forEach((function(t){return e.set(t,!0)})),Array.from(e.keys())}function t_forms__getFormData(t){var e="text/plain",r="application/x-www-form-urlencoded; charset=UTF-8";try{var o;if(t_forms__shouldEnableFormAsJSON()){var n=t_forms__getFormDataJSON(t),a=window.tildaForm.tildapayment&&window.tildaForm.tildapayment.products,i=window.tildaForm.tildamember&&Object.keys(window.tildaForm.tildamember).length>0;return!a&&t.closest(".t706__orderform")?{status:"invalid",data:"",contentType:""}:(Object.keys(n).forEach((function(t){t.includes("tildadelivery-")&&delete n[t]})),a&&(n.tildapayment=window.tildaForm.tildapayment),i&&(n.tildamember=window.tildaForm.tildamember),{status:"valid",data:JSON.stringify(n),contentType:e})}var s,l=t_serializeArray(t).filter((function(t){return-1===t.name.indexOf("tildadelivery-")}));if(window.tildaForm.tildapayment&&window.tildaForm.tildapayment.products)l.push({name:"tildapayment",value:JSON.stringify(window.tildaForm.tildapayment)});else if(t.closest(".t706__orderform"))return{status:"invalid",data:"",contentType:""};return window.tildaForm.tildamember&&Object.keys(window.tildaForm.tildamember).length>0&&l.push({name:"tildamember",value:JSON.stringify(window.tildaForm.tildamember)}),{status:"valid",data:t_forms__formData(l),contentType:r}}catch(c){return console.error("Failed to prepare form data for process. Error:",c),{status:"invalid",data:"",contentType:""}}}function t_forms__shouldEnableFormAsJSON(){try{var t;return"true"===new URLSearchParams(window.location.search).get("sendjson")}catch(e){return!1}}function t_removeEl(t){t&&t.parentNode&&t.parentNode.removeChild(t)}var t_forms__htmlEvents={onblur:1,onchange:1,onfocus:1,onsubmit:1,onclick:1,ondblclick:1,onkeydown:1,onkeypress:1,onpaste:1,oninput:1};function t_removeEventListener(t,e,r){t.removeEventListener?t.removeEventListener(e,r,!1):t.detachEvent&&t_forms__htmlEvents["on"+e]?t.detachEvent("on"+e,r):t["on"+e]=null}function t_addEventListener(t,e,r,o){t.addEventListener?t.addEventListener(e,r,o):t.attachEvent&&t_forms__htmlEvents["on"+e]?t.attachEvent("on"+e,r):t["on"+e]=r}function t_serializeArray(t){for(var e=[],r=t.querySelectorAll("input, textarea, button, select"),o,n=t_forms__getConditionCheckHandler(t).isHiddenByCondition,a=0;a<r.length;a++)if(!(!r[a].name||r[a].disabled||["file","reset","submit","button"].indexOf(r[a].type)>-1||n(r[a])))if("select-multiple"!==r[a].type){if(!(["checkbox","radio"].indexOf(r[a].type)>-1)||r[a].checked){var i=r[a].name,s=r[a].value;e.push({name:i,value:s})}}else for(var l=r[a].options,c=0;c<l.length;c++)l[c].selected&&e.push({name:l[c].name,value:l[c].value});return e}function t_forms__getFormDataJSON(t){var e={},r=t.querySelectorAll("input, textarea, button, select"),o,n=t_forms__getConditionCheckHandler(t).isHiddenByCondition,a=function t(r,o){Array.isArray(e[r])||(e[r]=[]),e[r].push(o)};return r.forEach((function(t){var r=t.name,o=t.type,i=t.disabled,s=t.value,l=t.checked,c=t.options;if(r&&!i&&!n(t)&&!["file","reset","submit","button"].includes(o)&&(!["checkbox","radio"].includes(o)||l))if("select-multiple"!==o)if(r.includes("[]")){var u=r.replace("[]","");a(u,s)}else e[r]=s;else Array.from(c||[]).filter((function(t){return t.selected})).forEach((function(t){return a(r,t.value)}))})),e}function t_addClass(t,e){document.body.classList?t.classList.add(e):t.className+=(t.className?" ":"")+e}function t_removeClass(t,e){document.body.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\s+)"+e+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")}function t_hasClass(t,e){return document.body.classList?t.classList.contains(e):new RegExp("(\\s|^)"+e+"(\\s|$)").test(t.className)}function t_forms__formData(t){for(var e="",r=0;r<t.length;r++)""!==e&&(e+="&"),e+=encodeURIComponent(t[r].name)+"="+encodeURIComponent(t[r].value);return e.replace(/%20/g,"+")}function t_fadeOut(t){if("none"!==t.style.display)var e=1,r=setInterval((function(){t.style.opacity=e,(e-=.1)<=.1&&(clearInterval(r),t.style.display="none",t.style.opacity=null)}),30)}function t_fadeIn(t){if("block"!==t.style.display){var e=0;t.style.opacity=e,t.style.display="block";var r=setInterval((function(){t.style.opacity=e,(e+=.1)>=1&&clearInterval(r)}),30)}}function t_triggerEvent(t,e){var r;document.createEvent?(r=document.createEvent("HTMLEvents")).initEvent(e,!0,!1):document.createEventObject&&((r=document.createEventObject()).eventType=e),r.eventName=e,t.dispatchEvent?t.dispatchEvent(r):t.fireEvent?t.fireEvent("on"+r.eventType,r):t[e]?t[e]():t["on"+e]&&t["on"+e]()}function t_forms__processFormsInPopup(t,e){if(t.style.backgroundColor){var r=document.createElement("style");r.className="t-success-popup";var o="\n\t\t\t#tildaformsuccesspopup-new {\n\t\t\t\tbackground-color: "+t.style.backgroundColor+";\n\t\t\t}";r.textContent=o,document.head.appendChild(r)}var n=e.closest(".t-rec"),a=n.getAttribute("data-parenttplid")||n.getAttribute("data-record-type"),i;"121"===a&&(a=t.querySelector(".t-popup__container").getAttribute("data-popup-type")||"121");var s="t"+a+"_closePopup",l=n.id.replace("rec",""),c=window[s];"function"==typeof c&&c(l)}function t_forms__drawNewSuccessPopup(){return'\n\t\t<div class="t-form-success-popup t-form-success-popup_new" style="display:none;" id="tildaformsuccesspopup-new"\n\t\t\trole="dialog"\n\t\t\taria-modal="true"\n\t\t\ttabindex="-1"\n\t\t\taria-label="Success"\n\t\t>\n\t\t\t<div class="t-form-success-popup__wrapper">\n\n\t\t\t\t<button type="button" class="t-form-success-popup__close-icon" id="tildaformsuccesspopupclose-new" aria-label="Закрыть диалоговое окно">\n\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">\n\t\t\t\t\t\t<path fill="#000" fill-rule="evenodd" d="M7 5.863 1.138 0 0 1.138 5.862 7 0 12.862 1.137 14 7 8.137 12.863 14 14 12.862 8.138 7 14 1.138 12.863 0 7.001 5.863Z" clip-rule="evenodd" opacity=".4"/>\n\t\t\t\t\t</svg>\n\t\t\t\t</button>\n\n\t\t\t\t<svg class="t-form-success-popup__content-icon" xmlns="http://www.w3.org/2000/svg" width="41" height="41" fill="none" viewBox="0 0 210 210">\n\t\t\t\t\t<path class="t-form-success-popup__content-icon-background"\n\t\t\t\t\t\td="M 86.0696 10.2777 C 97.7443 -0.973851 116.104 -0.973851 127.779 10.2777 L 127.779 10.2777 C 133.881 16.1585 142.136 19.1954 150.551 18.6547 L 150.551 18.6547 C 166.65 17.6203 180.714 29.5482 182.502 45.7521 L 182.502 45.7521 C 183.436 54.2214 187.829 61.9111 194.619 66.9636 L 194.619 66.9636 C 207.609 76.6302 210.798 94.9049 201.862 108.479 L 201.862 108.479 C 197.191 115.574 195.665 124.318 197.653 132.6 L 197.653 132.6 C 201.457 148.445 192.277 164.515 176.799 169.108 L 176.799 169.108 C 168.709 171.509 161.979 177.216 158.235 184.852 L 158.235 184.852 C 151.072 199.461 133.819 205.807 119.041 199.27 L 119.041 199.27 C 111.317 195.853 102.532 195.853 94.8075 199.27 L 94.8075 199.27 C 80.0294 205.807 62.7766 199.461 55.6135 184.852 L 55.6135 184.852 C 51.8695 177.216 45.1396 171.509 37.0495 169.108 L 37.0495 169.108 C 21.5714 164.515 12.3913 148.445 16.1948 132.6 L 16.1948 132.6 C 18.1828 124.318 16.6573 115.574 11.9867 108.479 L 11.9867 108.479 C 3.05084 94.9049 6.23902 76.6302 19.2295 66.9636 L 19.2295 66.9636 C 26.0194 61.9111 30.4119 54.2214 31.3462 45.7521 L 31.3462 45.7521 C 33.1339 29.5482 47.1984 17.6203 63.2976 18.6547 L 63.2976 18.6547 C 71.7122 19.1954 79.9676 16.1585 86.0696 10.2777 L 86.0696 10.2777 Z"\n\t\t\t\t\t\tfill="#30C546">\n\t\t\t\t\t</path>\n\t\t\t\t\t<path class="t-form-success-popup__content-icon-check"\n\t\t\t\t\t\td="M 66.7645 107.258 L 90.6617 129.843 L 143.235 80.157"\n\t\t\t\t\t\tstroke="white"\n\t\t\t\t\t\tstroke-width="14.7059"\n\t\t\t\t\t\tstroke-linecap="round"\n\t\t\t\t\t\tstroke-linejoin="round"\n\t\t\t\t\t\tfill="none"\n\t\t\t\t\t\tpathLength="1">\n\t\t\t\t\t</path>\n\t\t\t\t</svg>\n\n\t\t\t\t<div class="t-form-success-popup__title t-title" id="tildaformsuccesspopuptitle-new"></div>\n\n\t\t\t\t<div class="t-form-success-popup__text t-text" id="tildaformsuccesspopuptext-new"></div>\n\n\t\t\t\t<a href="" class="t-form-success-popup__button t-btn t-form-success-popup_hidden" id="tildaformsuccesspopuplink-new"></a>\n\n\t\t\t\t<button type="button" class="t-form-success-popup__button t-btn t-form-success-popup_hidden" id="tildaformsuccesspopupbtn-new"></button>\n\n\t\t\t\t<div class="t-form-success-popup__info t-form-success-popup_hidden" id="tildaformsuccesspopupinfo-new">\n\t\t\t\t\t<span class="t-form-success-popup__info-text t-text" id="tildaformsuccesspopupinfotext-new"></span>\n\t\t\t\t\t<span class="t-form-success-popup__info-timer t-text">\n\t\t\t\t\t\t<span class="t-form-success-popup__info-digit" id="tildaformsuccesspopupinfodigit-new"></span>\n\n\t\t\t\t\t\t<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t\t\t\t<path d="M9 0.6C7.33864 0.6 5.71458 1.09265 4.33321 2.01566C2.95184 2.93866 1.87519 4.25056 1.23941 5.78546C0.603636 7.32036 0.437288 9.00932 0.761404 10.6388C1.08552 12.2682 1.88554 13.7649 3.0603 14.9397C4.23506 16.1145 5.7318 16.9145 7.36124 17.2386C8.99068 17.5627 10.6796 17.3964 12.2145 16.7606C13.7494 16.1248 15.0613 15.0482 15.9843 13.6668C16.9073 12.2854 17.4 10.6614 17.4 9" stroke="black" stroke-width="1.2"/>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>'}function t_forms__trapFocus(t){var e=t.querySelectorAll('a, button, input:not([type="hidden"]):not(.js-form-spec-comments), select, textarea, embed, video, iframe, [tabindex="0"]'),r=e[0],o=e[e.length-1];document.addEventListener("keydown",(function(t){if(document.body.classList.contains("t-body_popupshowed")){var e="Tab"===t.key||9===t.keyCode,n;(e||e&&t.shiftKey)&&(t.shiftKey&&document.activeElement.classList.contains("t-popup_show")&&o.focus(),"Tab"!==t.key||t.shiftKey||document.activeElement!==o||(t.preventDefault(),r.focus()),"Tab"===t.key&&t.shiftKey&&document.activeElement===r&&(t.preventDefault(),o.focus()))}}))}function t_forms__isCachedPage(){try{for(var t=new URL(window.location.href),e=t.hostname,r=t.href,o,n=0,a=[{domains:["webcache.googleusercontent.com"],urlPattern:/(^|&|\?)q=cache:/},{domains:["www.google.com"],urlPattern:/\/amp\/s\//},{domains:["t.me"],urlPattern:/\/web\//},{domains:["dzen.ru"],urlPattern:/\/away\?/},{domains:["yandex.ru","yandexwebcache.net","archive.today","archive.ph","archive.is","web.archive.org","ghostarchive.org","cachedview.com"]}];n<a.length;n++){var i=a[n],s=i.domains.some((function(t){return e===t})),l=!i.urlPattern||i.urlPattern.test(r);if(s&&l)return!0}return!1}catch(c){return!1}}function t_forms__getCanonicalUrl(){var t=document.querySelector('link[rel="canonical"]');return t?t.getAttribute("href"):""}function t_forms__showWrongPageUrlMessage(t){if(t){var e="tildaforms-origin-url-popup-notification",r=document.getElementById(e);if(r)i(r);else{var o='\n\t\t<div id="'+e+'" class="t-form-success-popup t-form-success-popup_new" role="dialog" aria-modal="true" tabindex="-1" aria-label="Wrong Page URL">\n\t\t\t<div class="t-form-success-popup__wrapper">\n\n\t\t\t\t<button type="button" class="t-form-success-popup__close-icon" aria-label="Закрыть диалоговое окно">\n\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">\n\t\t\t\t\t\t<path fill="#000" fill-rule="evenodd" d="M7 5.863 1.138 0 0 1.138 5.862 7 0 12.862 1.137 14 7 8.137 12.863 14 14 12.862 8.138 7 14 1.138 12.863 0 7.001 5.863Z" clip-rule="evenodd" opacity=".4"></path>\n\t\t\t\t\t</svg>\n\t\t\t\t</button>\n\n\t\t\t\t<svg class="t-form-success-popup__content-icon" xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 21 21" fill="none" data-app="Xyris">\n\t\t\t\t\t<circle cx="10.5" cy="10.5" r="10.5" fill="#F87A61"/>\n\t\t\t\t\t<path d="M10.0781 13.1562L9.64844 7.08594V4.54688H11.3906V7.08594L10.9844 13.1562H10.0781ZM9.71094 16V14.3984H11.3281V16H9.71094Z" fill="white"/>\n\t\t\t\t</svg>\n\n\t\t\t\t<div class="t-form-success-popup__title t-title">'+t_forms__getMsg("cached_page_popup_title")+'</div>\n\n\t\t\t\t<div class="t-form-success-popup__text t-text">'+t_forms__getMsg("cached_page_popup_text")+'</div>\n\n\t\t\t\t<a href="'+t+'" class="t-form-success-popup__button t-btn">'+t_forms__getMsg("cached_page_popup_btn")+"</a>\n\t\t\t</div>\n\t\t</div>\n\t";document.body.insertAdjacentHTML("beforeend",o);var n=document.getElementById(e),a=n.querySelector(".t-form-success-popup__close-icon");t_addEventListener(n,"click",(function(t){var e=t||window.event,r;(e.target||e.srcElement)===this&&s(n)})),t_addEventListener(a,"click",(function(){s(n)})),i(n)}}function i(t){t_fadeIn(t),t_addClass(document.body,"t-body_success-popup-showed"),t_forms__isIOS()&&setTimeout((function(){window.tildaForm.lockBodyScroll()}),500),t_forms__trapFocus(t)}function s(t){t_removeClass(document.body,"t-body_success-popup-showed"),t_forms__isIOS()&&window.tildaForm.unlockBodyScroll(),t_fadeOut(t)}}function t_forms__processGetParameters(t){if(void 0===t&&(t={}),window.URLSearchParams&&"published"===t_forms__getTildaMode()){var e=new URLSearchParams(window.location.search);if(null!=e&&e.size){var r,o=t.currentTarget,n=[".t-select",".t-input",".t-rate",".t-radio",".t-checkbox",".t-img-select",".t-range",".t-checkboxes__hiddeninput",".t-img-select__hiddeninput",'[type="hidden"]'];o||(n=n.map((function(t){return".js-form-proccess "+t})));var a=o||document,i=Array.from(a.querySelectorAll(n)),s;if(i.length)new Set(i.map((function(t){return t.getAttribute("name")})).filter((function(t){return t}))).forEach((function(t){var r=e.get("form-setter-"+t);if(r){var o=i.filter((function(e){return e.getAttribute("name")===t}));(o=t_forms__includeCheckboxesForInputList(o)).forEach((function(t){return t_forms__setGetParameterToField(t,r)}))}}))}}}function t_forms__includeCheckboxesForInputList(t){return t.reduce((function(t,e){if(e.classList.contains("t-checkboxes__hiddeninput")||e.classList.contains("t-img-select__hiddeninput")){var r=e.closest(".t-input-block"),o=Array.from((null==r?void 0:r.querySelectorAll(".t-checkbox, .t-img-select"))||[]);t.push.apply(t,o)}else t.push(e);return t}),[])}function t_forms__setGetParameterToField(t,e){if(!["tel","number","range"].includes(t.type)||!isNaN(e)){var r=500;["checkbox","radio"].includes(t.type)?l((function(){var n,s=e.split(","),l=(null==t||null==(n=t.value)?void 0:n.trim())||"";s.includes(l)&&(t.checked=!0,"checkbox"===t.type&&o(),t.classList.contains("t-rate")&&a(),"radio"===t.type&&t.closest(".t-contact-method__types-container")&&i(r))})):"select-one"===t.type?n():(t.value=e,t.classList.contains("t-range")&&i(),"tel"===t.type&&s()),l(i,!1)}function o(){var e=t.closest(".tn-elem .t-checkbox__control"),o=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);if(e)setTimeout((function(){t.dispatchEvent(new Event("input"))}),r);else{var n=t.closest(".t-checkbox__control, .t-img-select__control");n&&o&&(t.checked=!1),n&&n.dispatchEvent(new Event("click"))}}function n(){var r,o=Array.from(t.options).find((function(t){return t.value.trim()===e}));o&&(o.selected=!0)}function a(){var e;null==(e=t.closest(".t-rate__wrapper"))||e.classList.add("t-rate__wrapper_active")}function i(e){var r=function e(){return t.dispatchEvent(new Event("change"))};e?setTimeout(r,e):r()}function s(){var e=t.getAttribute("data-phonemask-lid");e&&(e="input_"+e),e||(e=t.id),e&&setTimeout((function(){var t=document.getElementById(e);null==t||t.dispatchEvent(new Event("input"))}),r)}function l(t,e){void 0===e&&(e=!0);var r=c();(e||r)&&(r&&"y"!==r.getAttribute("data-init-calc")?r.addEventListener("inputReady",t):t())}function c(){var e=t.closest(".t-form");if(!e)return null;var r=Array.from(e.querySelectorAll("[data-calc-expr]"));if(!r.length)return null;var o=r.find((function(e){return e.getAttribute("data-calc-expr").includes(t.name)}));return(null==o?void 0:o.closest(".t-input-group"))||null}}function t_forms__getTildaMode(){if(void 0!==window.tildamode)return window.tildamode;var t=document.getElementById("allrecords");return t?(window.tildamode=t.getAttribute("data-tilda-mode")||"published",window.tildamode):"notdefined"}


/* === tilda-animation-sbs === */
function t396__parseGlobalStyleCSSVar(t){try{var e,n=/var\((--uc-([^-]+)-([^-]+)-([^,]+)),\s?(.*)\)/.exec(t);if(!n)return;var i=n[0],a=n[1],r=n[2],o=n[3],s=n[4],l=n[5],_,c;if(!(i&&r&&o&&s&&l))return;return{parent:{id:s,type:r},fallback:window.getComputedStyle(document.body).getPropertyValue(a)||l,field:o}}catch(m){console.error("Error trying to parse CSS Variable")}}function t396__hex2rgba(t,e){if(!t)return!1;var n=t396__parseGlobalStyleCSSVar(t);n&&(t=n.fallback);var i=t.replace(/#/,"");if(3===i.length){var a=i[0],r=i[1],o=i[2];t="#"+a+a+r+r+o+o}var s=parseInt(t.substring(1),16),l,_,c;return[(16711680&s)>>16,(65280&s)>>8,255&s,parseFloat(e)]}function t396__isElementUsingCalcZoom(t){var e=["gallery"],n=t.getAttribute("data-elem-type");return e.includes(n)}function t396__isFlex(t){var e=t.classList.contains("t396__artboard-flex"),n=t.classList.contains("t396__group-flex");return e||n}function t396__setOverflowToAllRecords(){var t=document.getElementById("allrecords");if(t){var e=[".t951__sidebar_sticky",".t1206__content_sticky",".t754__col_fixed",".t776__col_fixed",".t786__col_fixed",".t-store__prod-popup__col_fixed"];t396__generateOverflowStyle();var n=Boolean(document.querySelector(e.join(", ")));t.classList.remove("t-records__overflow-clip","t-records__overflow-hidden"),t.classList.add(n?"t-records__overflow-clip":"t-records__overflow-hidden")}}function t396__generateOverflowStyle(){if(!document.getElementById("t396__overflow-styles")){var t=document.createElement("style");t.id="t396__overflow-styles",t.innerHTML=".t-records__overflow-clip { overflow: clip; }\n\t\t\t\t\t\t.t-records__overflow-hidden { overflow: hidden; }",document.head.appendChild(t)}}function t396__getArtboards(t){var e=document.getElementById("allrecords"),n,i=e&&"edit"===e.getAttribute("data-tilda-mode")?'.record[data-record-type="'+t+'"] .r:not(.t397__off, .t395__off, .t400__off) .t396__artboard, .record[data-parenttplid="'+t+'"] .r:not(.t397__off, .t395__off, .t400__off) .t396__artboard':'.r[data-record-type="'+t+'"]:not(.t397__off, .t395__off, .t400__off) .t396__artboard, .r[data-parenttplid="'+t+'"]:not(.t397__off, .t395__off, .t400__off) .t396__artboard';return Array.from(document.querySelectorAll(i))}function t396__getZeroBlocks(){var t=[].concat(t396__getArtboards("396"),t396__getArtboards("121")),e;return t.length?t.map((function(t){return{record:t.closest(".r:not(.t397__off):not(.t395__off):not(.t400__off)"),artboard:t}})).filter((function(t){return t.record})):[]}function t396__isInsideGroupWithZoom(t){for(var e=t.closest(".t396__group");e;){var n;if(e.style.zoom)return!0;e=null==(n=e.parentElement)?void 0:n.closest(".t396__group")}return!1}var t396__uniqueId__generator=function t(){var e=0;return function(){var t=String(e+=1).padStart(6,"0");return""+Date.now()+t}},t396__getUniqueId=t396__uniqueId__generator();function t396_isBlockVisible(t){var e=window.innerWidth,n=t.getAttribute("data-screen-min"),i=t.getAttribute("data-screen-max");return!(n&&e<parseInt(n,10))&&!(i&&e>parseInt(i,10))}var t396__onReady=function t(e){"loading"!==document.readyState?e():document.addEventListener("DOMContentLoaded",e)};function t396_elem__getFormInputsValue(t){var e=t.querySelector(".tn-atom__inputs-textarea");if(e){var n=e.value;if(n)try{return JSON.parse(n)}catch(r){return console.error("Error parsing form inputs textarea value:",r,n),[]}}var i=t.querySelector(".tn-atom__inputs-data");if(i){var a=i.getAttribute("data-value");if(a)try{return JSON.parse(a)}catch(r){return console.error("Error parsing form inputs data:",r,a),[]}}return[]}function t_animationSBS__checkVisibilityPage(){"visible"===document.visibilityState&&(t_animationSBS__onReady(t_animationSBS__init),document.removeEventListener("visibilitychange",t_animationSBS__checkVisibilityPage))}function t_animationSBS__onReady(t){"loading"!==document.readyState?t():document.addEventListener("DOMContentLoaded",t)}function t_animationSBS__init(){var t=document.getElementById("allrecords"),e=t?"edit"===t.getAttribute("data-tilda-mode"):null;e||(e=Boolean(document.getElementById("for_redactor_toolbar"))),/Bot/i.test(navigator.userAgent)||document.documentMode<11||e||(t_animationSBS__processHorizontalScroll(),t_animationSBS__isZeroBlocksRendered((function(){t_animationSBS_isInstagramRendered((function(){var t;t_animationSBS__setAutoScaleInfo(),t_animationSBS__wrapAndUpdateEls(Array.prototype.slice.call(document.querySelectorAll("[data-animate-sbs-event]"))),t_animationSBS__initAllRes(e)}))})))}function t_animationSBS__processHorizontalScroll(){var t='[data-animate-sbs-event="scroll"]',e=Array.from(document.querySelectorAll(t)),n,i;e.length&&(e.map((function(t){return t.closest(".t396__artboard")})).some((function(t){var e=t.getAttribute("data-artboard-ovrflw");return["visible","visibleX"].includes(e)}))?t396__setOverflowToAllRecords():(t_animationSBS__generateOverflowStyles(),e.forEach((function(t){var e;t.closest(".r").classList.add("t-animation-sbs__overflow-x")}))))}function t_animationSBS__generateOverflowStyles(){if(!document.getElementById("sbs-animation-block-overflow")){var t=document.createElement("style");t.id="sbs-animation-block-overflow",t.innerHTML=".t-animation-sbs__overflow-x { overflow-x: hidden; }",document.head.appendChild(t)}}function t_animationSBS__setAutoScaleInfo(){if(void 0===window.shouldUseScaleFactor){var t=window.navigator.userAgent.match(/Firefox\/([0-9]+)\./),e=t?parseInt(t[1],10):126,n=window.navigator.userAgent.match(/Chrome\/([0-9]+)\./),i=n&&parseInt(n[1],10)||0;window.isOnlyScalable=e<126,window.shouldUseScaleFactor=!window.isOnlyScalable&&!t&&i<=127}}function t_animationSBS__isZeroBlocksRendered(t){var e=t_animationSBS__getArtboards("396"),n=t_animationSBS__getArtboards("121"),i=[].concat(e,n);if(i.length){var a=!1;if(i.every((function(t){return t.classList.contains("rendered")})))t();else if(document.querySelectorAll('script[src*="tilda-blocks-2"], script[src*="tilda-blocks-1"]').length)t_animationSBS__backwardCompatibilityWait(i,Date.now(),t);else{var r=i.filter((function(t){return t.classList.contains("rendered")}));i.forEach((function(e){e.classList.contains("rendered")||e.addEventListener("artBoardRendered",(function(){r.push(e),r.length!==i.length||a||t()}))})),setTimeout((function(){a=!0,r.length!==i.length&&t()}),3e3)}}}function t_animationSBS__getArtboards(t){var e='.r[data-record-type="'+t+'"]:not(.t397__off, .t395__off, .t400__off) .t396__artboard, .r[data-parenttplid="'+t+'"]:not(.t397__off, .t395__off, .t400__off) .t396__artboard';return Array.from(document.querySelectorAll(e))}function t_animationSBS__backwardCompatibilityWait(t,e,n){if(t.every((function(t){return t.classList.contains("rendered")})))n();else{if(Date.now()-e>1e4)return void console.warn("all zero-blocks can't be rendered");setTimeout((function(){t_animationSBS__backwardCompatibilityWait(t,e,n)}),500)}}function t_animationSBS_isInstagramRendered(t){if(window.animationSBS__isIOS&&-1!==navigator.userAgent.indexOf("Instagram"))var e=setTimeout((function(){window.innerWidth!==screen.width&&window.innerHeight>window.innerWidth?t_animationSBS_isInstagramRendered(t):(clearTimeout(e),t())}),100);else t()}function t_animationSBS__wrapAndUpdateEls(t){var e=-1!==navigator.userAgent.indexOf("Chrome");t.forEach((function(t){var n=t.querySelector(".tn-molecule, .tn-atom");if(n){-1===navigator.userAgent.indexOf("Chrome")&&(n.style.WebkitBackfaceVisibility="hidden",n.style.backfaceVisibility="hidden");var i=t.querySelector(".tn-atom__sbs-anim-wrapper"),a=t_animationSBS__getAnimOptions(t,"published",null);if(!i&&a){var r=getComputedStyle(n).display,o;n.classList.contains("tn-molecule")&&"flex"!==r&&(n.style.display="inherit");var s=t_animationSBS__getScaleWrapper(n),l=t.style.transform,_;l&&-1!==l.indexOf("matrix(")&&(t_animationSBS__wrapEl(s||n,"tn-atom__sbs-transform-wrapper"),(_=t.querySelector(".tn-atom__sbs-transform-wrapper")).style.transform=l,t.style.transform=""),t_animationSBS__wrapEl((_=t.querySelector(".tn-atom__sbs-transform-wrapper"))||s||n,"tn-atom__sbs-anim-wrapper"),i=t.querySelector(".tn-atom__sbs-anim-wrapper"),t_animationSBS__updateStylesAfterWrapping(t,_||i,e)}}}))}function t_animationSBS__getScaleWrapper(t){if(!t)return null;var e=t.closest(".t396__group"),n=t.classList.contains("tn-atom");return e&&n?null:t.closest(".tn-atom__scale-wrapper")}function t_animationSBS__wrapAndUpdateElOnResize(t){if(t.length){var e=t.filter((function(t){return!t.querySelector(".tn-atom__sbs-anim-wrapper")}));e.length&&t_animationSBS__wrapAndUpdateEls(e)}}function t_animationSBS__updateStylesAfterWrapping(t,e,n){var i=t.getAttribute("data-elem-type"),a=getComputedStyle(t),r=t.querySelector(".tn-molecule, .tn-atom"),o=a.getPropertyValue("border-radius");"shape"!==i&&"button"!==i&&"image"!==i||!parseInt(o,10)||(e.style.borderRadius=o);var s=["filter","backdrop-filter"];s=(s=s.map((function(t){var e="-webkit-"+t,n=a.getPropertyValue(t);if("none"!==n&&""!==n||(n=a.getPropertyValue(e)),"none"!==n&&""!==n)return{filter:t,webkitFilter:e,value:n}}))).filter((function(t){return t}));var r=t.querySelector(".tn-molecule, .tn-atom"),l=getComputedStyle(r).transform,_=document.createEvent("Event");_.initEvent("backdropFilterImgWrappered",!0,!0),s.forEach((function(a){window.t_animationSBS__isFirefox&&(e.style.backfaceVisibility="visible"),e.style[a.webkitFilter]=a.value,e.style[a.filter]=a.value,t.style[a.webkitFilter]="none",t.style[a.filter]="none","image"===i&&window.t_animationSBS__isSafari&&(t.dispatchEvent(_),t.classList.add("t396__elem--backdrop-filter-img-wrappered")),n&&"backdrop-filter"===a.filter&&(r.style[a.webkitFilter]="inherit",r.style[a.filter]="inherit"),"none"===l&&(r.style.transform="translateZ(0)")}));var c=s.some((function(t){return"backdrop-filter"===t.filter}));n&&c&&t_animationSBS__chromeFixBackdropFilter(r,e)}function t_animationSBS__chromeFixBackdropFilter(t,e){var n=getComputedStyle(t),i=n.getPropertyValue("background-color"),a=n.getPropertyValue("opacity"),r=n.getPropertyValue("box-shadow");if("rgba(0, 0, 0, 0)"!==i&&"1"!==a){var o=i.substring(i.indexOf("(")+1,i.indexOf(")")),s=t_animationSBS__processBoxShadowRGB(r,a);s&&(e.style.boxShadow=s,t.style.boxShadow="none"),e.style.backgroundColor="rgba("+o+","+a+")",t.style.opacity="1",t.style.backgroundColor="transparent",t.style.backdropFilter="initial",t.style.WebkitBackdropFilter="initial"}}function t_animationSBS__processBoxShadowRGB(t,e){if(!t)return!1;if(-1===t.indexOf("rgba")&&-1===t.indexOf("rgb")||"1"===e)return!1;var n=t.substring(t.indexOf("(")+1,t.indexOf(")")),i=n.split(", ");3===i.length?i.push(e):i[3]*=e;var a=t.replace(n,i.join(", "));return-1!==a.indexOf("rgb(")&&(a=a.replace("rgb(","rgba(")),a}function t_animationSBS__initAllRes(t){var e={elements:Array.prototype.slice.call(document.querySelectorAll("[data-animate-sbs-event]")),scrollTop:window.pageYOffset,isEditMode:t,clickedTriggerEls:[],hoverTriggerEls:[]};if(e.elements.length){t_animationSBS__cacheAndSetData(e),t_animationSBS__generateKeyframes(e);var n=document.getElementById("allrecords"),i=!!n&&"yes"===n.getAttribute("data-tilda-lazy");("y"===window.lazy||i)&&t_onFuncLoad("t_lazyload_update",(function(){t_lazyload_update()}));var a=t_animationSBS__getAnimElsOnView(e.elements),r,o=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);if("ResizeObserver"in window){var s=t_animationSBS__getAllBreakpoints(),l;t_animationSBS__createResizeObserver({breakpoints:s,currentRes:t_animationSBS__getCurrentRes(s,o),isMobile:o},d)}else o?window.addEventListener("orientationchange",(function(){setTimeout((function(){d()}),300)})):window.addEventListener("resize",d);var _=document.querySelectorAll(".t396"),c;if(Array.prototype.forEach.call(_,(function(t){t.addEventListener("displayChanged",d)})),window.t_animationSBS__isSafari){function m(){0!==window.pageYOffset&&d(),window.removeEventListener("scroll",m)}window.addEventListener("scroll",m)}t_animationSBS__triggerNoScrollAnimation(e,a),document.querySelectorAll('[data-animate-sbs-event="scroll"]').length&&(t_animationSBS__triggerScrollAnim(e),t_animationSBS__checkFrame(e)),window.addEventListener("load",(function(){t_animationSBS__changeElValues(e)})),setTimeout((function(){"complete"!==document.readyState&&t_animationSBS__changeElValues(e)}),3e3)}function d(){clearTimeout(r),r=setTimeout((function(){var t=Array.prototype.slice.call(document.querySelectorAll("[data-animate-sbs-event]"));t_animationSBS__updateAnimatedObjectState(e,"elements",t),t_animationSBS__wrapAndUpdateElOnResize(e.elements),t_animationSBS__cacheAndSetData(e),t_animationSBS__triggerScrollAnim(e),a=t_animationSBS__getAnimElsOnView(e.elements),t_animationSBS__triggerNoScrollAnimation(e,a),t_animationSBS__generateKeyframes(e)}),500)}}function t_animationSBS__getAnimElsOnView(t){return t.filter((function(t){var e="data-animate-sbs-event";return"intoview"===t.getAttribute(e)||"blockintoview"===t.getAttribute(e)}))}function t_animationSBS__getAllBreakpoints(){var t=Array.prototype.slice.call(document.querySelectorAll(".r .t396__artboard")),e=[];return t.forEach((function(t){var n=t_animationSBS__getResOpts(t),i=n.breakpoints.filter((function(t){return-1===e.indexOf(t)}));-1===(e=e.concat(i)).indexOf(n.resMax)&&e.push(n.resMax)})),e.sort((function(t,e){return e-t}))}function t_animationSBS__getCurrentRes(t,e){var n,i=e||"ontouchend"in document&&-1!==navigator.userAgent.indexOf("AppleWebKit")?document.documentElement.clientWidth:window.innerWidth;return t.find((function(t){return i>t}))}function t_animationSBS__updateAnimatedObjectState(t,e,n){t[e]=n}function t_animationSBS__setKeyForAnimatedObject(t,e,n){t[e]||t_animationSBS__updateAnimatedObjectState(t,e,n)}function t_animationSBS__createResizeObserver(t,e){var n=document.body.getClientRects(),i=n[0].height,a;new ResizeObserver((function(a){a.forEach((function(a){if(!document.body.classList.contains("t-body_scroll-locked")&&!document.body.classList.contains("t-body_popupshowed")){var r=t_animationSBS__getCurrentRes(t.breakpoints,t.isMobile);a.contentRect.height===i&&t.currentRes===r||(t.currentRes=r,i=n[0].height,e())}}))})).observe(document.body)}function t_animationSBS__changeElValues(t){t.elements.forEach((function(e){document.contains(e)&&(t_animationSBS__setAndCacheElTopPos(e,t),"scroll"===e.animType&&t_animationSBS__updateStepsValues(e))}))}function t_animationSBS__checkFrame(t){var e;"function"==typeof window.requestAnimationFrame&&(t_animationSBS__checkPosChanges(t)&&t_animationSBS__triggerScrollAnim(t),requestAnimationFrame((function(){t_animationSBS__checkFrame(t)})))}function t_animationSBS__checkPosChanges(t){var e=t.scrollTop,n=window.pageYOffset;return n<0&&window.t_animationSBS__isSafari&&(n=0),t_animationSBS__updateAnimatedObjectState(t,"scrollTop",n),e!==n}function t_animationSBS__triggerScrollAnim(t){t.elements.forEach((function(e){if("scroll"===e.animType){var n={opacity:1,blur:0,fix:!1,fixedShiftY:0,translateX:0,translateY:0,scaleX:1,scaleY:1,rotate:0};t_animationSBS__scrollAnimationCheckSteps(t,e,n),t_animationSBS__scrollAnimationUpdateTransform(e,n)}}))}function t_animationSBS__scrollAnimationCheckSteps(t,e,n){e.steps.forEach((function(i,a){var r=t.scrollTop+e.triggerOffset,o=t_animationSBS__getZoom(e);e.scaledDifference&&(r+=e.scaledDifference);var s=r>=i.start,l=r<i.start,_=i.end<=r,c=i.end>r;if(s&&c){i.state="started",e.wrapperEl&&(e.wrapperEl.style.willChange="transform");var m=r-i.start,d=0===i.dist?1:m/i.dist;n.prevUnfixedDist=i.prevUnfixedDist,t_animationSBS__scrollAnimationCalcStepStyles(n,i,d,a,o)}_&&(i.state="finished",e.wrapperEl&&(e.wrapperEl.style.willChange=""),t_animationSBS__scrollAnimationCalcStepStyles(n,i,1,a,o)),!l||"started"!==i.state&&"finished"!==i.state||(i.state="unactive",e.wrapperEl&&(e.wrapperEl.style.willChange=""),t_animationSBS__scrollAnimationCalcStepStyles(n,i,0,a,o))})),e.classList.remove("t396__elem--anim-hidden"),e.steps[1]&&0===e.steps[1].dist&&0===e.steps[1].styles.opacity&&"unactive"===e.steps[1].state&&(n.opacity=0)}function t_animationSBS__scrollAnimationCalcStepStyles(t,e,n,i,a){if(!0===e.styles.fix&&"started"===e.state&&(t.fix=!0,t.fixedShiftY=0),!0===e.styles.fix&&"finished"===e.state&&(t.fix=!1,t.fixedShiftY+=e.dist/a),!0===e.styles.fix&&"unactive"===e.state){if(i>0&&!0===t.fix)return;t.fix=!1}t.opacity+=n*(e.styles.opacity-t.opacity),t.blur+=n*(e.styles.blur-t.blur),t.translateX+=n*e.styles.moveX,t.translateY+=n*e.styles.moveY,t.scaleX+=n*(e.styles.scaleX-t.scaleX),t.scaleY+=n*(e.styles.scaleY-t.scaleY),t.rotate+=n*e.styles.rotate}function t_animationSBS__scrollAnimationUpdateTransform(t,e){if(t.wrapperEl){var n=t_animationSBS__getZoom(t),i=getComputedStyle(t).willChange,a=window.isOnlyScalable||t396__isElementUsingCalcZoom(t);if(!0===e.fix&&"fixed"!==t.wrapperEl.style.position){var r=t.triggerOffset-e.prevUnfixedDist;a||(r/=n),t.scaledDifference&&(r+=t.scaledDifference),t.wrapperEl.style.top=r+"px",t.wrapperEl.style.position="fixed",i&&"auto"!==i&&(t.style.willChange="unset"),t.zIndex&&(t.wrapperEl.style.zIndex=t.zIndex)}!1===e.fix&&"fixed"===t.wrapperEl.style.position&&(t.wrapperEl.style.position="",t.wrapperEl.style.top="",t.wrapperEl.style.zIndex="",t.zIndex&&(t.style.zIndex=t.zIndex),t.style.willChange=""),t.wrapperEl.style.opacity=e.opacity.toString();var o="";if(e.translateX){var s=e.translateX;a&&(s*=n),o+="translateX("+s.toFixed(2)+"px)"}if(0!==e.translateY||0!==e.fixedShiftY){var l=e.translateY+e.fixedShiftY;a&&(l*=n),o+="translateY("+l.toFixed(2)+"px)"}1===e.scaleX&&1===e.scaleY||(o+="scale("+e.scaleX+","+e.scaleY+")"),0!==e.rotate&&(o+="rotate("+e.rotate+"deg)"),t.wrapperEl.style.transform=o||"scale(1)"}}function t_animationSBS__generateKeyframes(t){var e="";if(t.elements.forEach((function(t){if("scroll"!==t.animType){var n={timeDuration:0},i=[],a=t_animationSBS__createEmptyStyleOptionsForKeyframes(t.steps);t_animationSBS__generateKeyframes__combineObjects(t.steps,i,n,a),t_animationSBS__generateKeyframes__correctFrames(i),t_animationSBS__generateKeyframes__countPercent(i,n),t_animationSBS__generateKeyframes__correctOpacityOnFirstStep(t,i);var r=t_animationSBS__generateKeyframes__getTxtStyles(t,i),o;if(n.timeDuration/=1e3,r)if(e+=t_animationSBS__generateKeyframes__getFinalCss(t,n,r),"hover"===t.animType||"click"===t.animType)(!t.loop||"loopwithreverse"===t.loop)&&(e+=t_animationSBS__generateKeyframes__getReverseAnim(t))}})),e){if(t.isEditMode)return e;var n=document.querySelector(".sbs-anim-keyframes");n?n.textContent!==e&&(n.textContent=e):((n=document.createElement("style")).classList.add("sbs-anim-keyframes"),n.textContent=e,document.head.insertAdjacentElement("beforeend",n))}}function t_animationSBS__createEmptyStyleOptionsForKeyframes(t){return{moveX:t.every((function(t){return 0===t.styles.moveX})),moveY:t.every((function(t){return 0===t.styles.moveY})),scaleX:t.every((function(t){return 1===t.styles.scaleX})),scaleY:t.every((function(t){return 1===t.styles.scaleY})),rotate:t.every((function(t){return 0===t.styles.rotate})),blur:t.every((function(t){return 0===t.styles.blur})),opacity:t.every((function(t){return 1===t.styles.opacity})),fix:t.every((function(t){return!1===t.styles.fix}))}}function t_animationSBS__generateKeyframes__combineObjects(t,e,n,i){t.forEach((function(a,r){var o={};for(var s in o.styles=a.styles,i)i[s]&&delete o.styles[s];"{}"!==JSON.stringify(o.styles)&&(o.time=1*a.time||0,r!==t.length-1&&(o.ease=t[r+1].ease),e.push(o),n.timeDuration+=o.time)}))}function t_animationSBS__generateKeyframes__correctFrames(t){t.forEach((function(e,n){var i=n===t.length-1,a=0===n,r=i?null:t[n+1],o=a?null:t[n-1];for(var s in e.styles)a||s in o.styles||t_animationSBS__generateKeyframes__addStyleToKeyframe(e,o,s,0),i||(s in r.styles?"moveX"!==s&&"moveY"!==s&&"rotate"!==s||t_animationSBS__generateKeyframes__recalculateValue(e,r,s):t_animationSBS__generateKeyframes__addStyleToKeyframe(e,r,s,1))}))}function t_animationSBS__generateKeyframes__addStyleToKeyframe(t,e,n,i){"blur"!==n&&"rotate"!==n&&"moveX"!==n&&"moveY"!==n||(e.styles[n]=0===i?0:t.styles[n]),"opacity"!==n&&"scaleX"!==n&&"scaleY"!==n||(e.styles[n]=0===i?1:t.styles[n])}function t_animationSBS__generateKeyframes__recalculateValue(t,e,n){switch(n){case"rotate":e.styles.rotate+=t.styles.rotate;break;case"moveX":e.styles.moveX+=t.styles.moveX;break;case"moveY":e.styles.moveY+=t.styles.moveY}}function t_animationSBS__generateKeyframes__countPercent(t,e){for(var n=0;n<t.length;n++){var i=t[n],a;if(0===n)0===e.timeDuration?i.percent=0:(a=(100*i.time/e.timeDuration).toFixed(2),i.percent=parseFloat(a));else if(n===t.length-1)i.percent=100;else{var r=t[n-1].percent;if(0===e.timeDuration)i.percent=0;else{if(a=(100*i.time/e.timeDuration+r).toFixed(2),100===parseInt(a,10)&&n===t.length-2&&0!==n)continue;i.percent=parseFloat(a)}i.percent===r&&(i.percent+=1),i.percent>100&&(i.percent=99)}}}function t_animationSBS__generateKeyframes__correctOpacityOnFirstStep(t,e){var n=e[1];t&&t.classList.remove("t396__elem--anim-hidden");var i=t?t.querySelector(".tn-atom__sbs-anim-wrapper"):null;n&&0===n.time&&0===n.styles.opacity?(i&&(i.style.opacity="0"),e[0].styles.opacity=0):i&&"0"===i.style.opacity&&i&&(i.style.opacity="")}function t_animationSBS__generateKeyframes__getTxtStyles(t,e){var n="";return e.forEach((function(e){e.changes||(e.changes=t_animationSBS__generateKeyframes__getFrameChanges(t,e)),n+="number"==typeof e.percent?e.percent+"% {"+e.changes+"}\n":""})),n}function t_animationSBS__generateKeyframes__shouldUseZoom(t,e){var n,i;if(t396__isElementUsingCalcZoom(t))return!t396__isInsideGroupWithZoom(t);var a,r=t_animationSBS__getScaleWrapper(t.querySelector(".tn-molecule, .tn-atom"));return!(1!==e&&!r)}function t_animationSBS__generateKeyframes__getFrameChanges(t,e){var n="",i="",a={x:1,y:1,changed:!1},r=1,o=t396__isElementUsingCalcZoom(t);(window.isOnlyScalable||o)&&(r=t_animationSBS__getZoom(t));var s=t_animationSBS__generateKeyframes__shouldUseZoom(t,r);for(var l in s||(r=1),e.styles)switch(l){case"opacity":n+="opacity:"+e.styles.opacity+";";break;case"scaleX":a.x=e.styles.scaleX,a.changed=!0;break;case"scaleY":a.y=e.styles.scaleY,a.changed=!0;break;case"moveX":i+="translateX("+Math.round(e.styles.moveX*r)+"px)";break;case"moveY":i+="translateY("+Math.round(e.styles.moveY*r)+"px)";break;case"rotate":i+="rotate("+e.styles.rotate+"deg)"}if(!0===a.changed&&(i+="scale("+a.x+","+a.y+")"),""!==i&&(n+="transform:"+i+";"),void 0!==e.ease)switch(n+="animation-timing-function:",e.ease){case"easeIn":n+="ease-in;";break;case"easeOut":n+="ease-out;";break;case"easeInOut":n+="ease-in-out;";break;case"bounceFin":n+="cubic-bezier(0.34,1.61,0.7,1);";break;default:n+=""===e.ease.trim()?"linear;":e.ease+";"}return n}function t_animationSBS__generateKeyframes__getFinalCss(t,e,n){var i="",a=t.uniqueID,r=".t-sbs-anim_started #"+t.uniqueID,o;"published"!==window.tildamode&&(t.timeDuration=e.timeDuration),i+=r+" {\nanimation: "+a+" "+(0===e.timeDuration?1e-5:e.timeDuration)+"s";var s=t.loop&&-1!==t.loop.indexOf("loop");return s&&(i+=" infinite"),i+=" linear",s?"loopwithreverse"===t.loop&&(i+=" alternate"):i+=" forwards",i+=";\nbackface-visibility: hidden;\n}\n\n@keyframes "+a+" {\n"+n+"}\n\n"}function t_animationSBS__generateKeyframes__getReverseAnim(t){var e=t_animationSBS__getAttributeSelector(t),n,i,a="["+e.attribute+'="'+e.id+'"]',r;return"#"+(t.closest(".t-rec")?t.closest(".t-rec").getAttribute("id"):"")+" "+a+".t-sbs-anim_started.t-sbs-anim_reversed .tn-atom__sbs-anim-wrapper {-webkit-animation-direction: reverse;animation-direction: reverse;}"}function t_animationSBS__getAttributeSelector(t){var e={feed:"data-fe-elem-id",group:"data-group-id",element:"data-elem-id"},n=Object.keys(e).find((function(n){return t.hasAttribute(e[n])}));return n&&e[n]?{attribute:e[n],id:t.getAttribute(e[n])||""}:{attribute:"",id:""}}function t_animationSBS__getAnimOptions(t,e,n){if(!t)return"";var i=["sbs","opts"];n||(n="edit"===e?i.join(""):i.join("-"));var a="edit"===e?"field":"animate",r="edit"===e?"-value":"",o="edit"===e?"data-field-animmobile-value":"data-animate-mobile",s="y"===t.getAttribute(o),l,_=t_animationSBS__getResOpts(t.closest(".t396__artboard")),c=t_animationSBS__generateAttr(a,n,r,!1);if(_.res===_.resMax)return t.getAttribute(c);if(!s&&"edit"!==e&&_.res<1200)return t.style.transition="none",t.classList.remove("t396__elem--anim-hidden"),"";var m=t_animationSBS__generateAttr(a,n,r,_.res),d=t.getAttribute(m);return d||(_.breakpoints.forEach((function(e){if(!(e<=_.res||d)){var i=t_animationSBS__generateAttr(a,n,r,e);d=t.getAttribute(i)}})),d||t.getAttribute(c)||"")}function t_animationSBS__generateAttr(t,e,n,i){var a="data-"+t+"-"+e;return i&&(a+="-res-"+i),a+=n}function t_animationSBS__getResOpts(t){var e=[1200,960,640,480,320];if(!window.tn){var n,i=window.innerWidth;return e.forEach((function(t){n||i>=t&&(n=t)})),{res:n||320,resMax:1200,breakpoints:[320,480,640,960]}}var a=t?t.getAttribute("data-artboard-recid"):"",n;return a&&window.tn["ab"+a]?{res:window.t396_detectResolution?t396_detectResolution(a):window.tn["ab"+a].curResolution,resMax:window.tn["ab"+a].curResolution_max,breakpoints:window.tn["ab"+a].screens.slice(0,-1)}:window.tn.screens?{res:window.tn.curResolution,resMax:window.tn.topResolution,breakpoints:window.tn.screens.slice(0,-1)}:{res:n=t_animationSBS__getCurrentRes(e,window.isMobile),resMax:1200,breakpoints:[320,480,640,960]}}function t_animationSBS__cacheAndSetData(t){t.elements.forEach((function(e){var n=e.closest(".t396__artboard");if("scroll"!==e.animType||!n||"fixed"!==t396_ab__getFieldValue(n,"pos")){var i=t.isEditMode?"data-field-sbsevent-value":"data-animate-sbs-event";e.animType=e.getAttribute(i);var a=t.isEditMode?"data-field-sbstrg-value":"data-animate-sbs-trg";e.trigger=parseFloat(e.getAttribute(a)),isNaN(e.trigger)&&(e.trigger=1),e.triggerElems=t_animationSBS__getAnimOptions(e,"published","sbs-trgels"),e.wrapperEl=e.querySelector(".tn-atom__sbs-anim-wrapper");var r=t_animationSBS__getAnimOptions(e,t.isEditMode?"edit":"published",null);if(e.status=r?"active":"innactive","innactive"!==e.status){-1!==r.indexOf("fixed")&&(e.zIndex=getComputedStyle(e).getPropertyValue("z-index")),r=r.replace(/'/g,'"'),t_animationSBS__addDelayToSteps(r=JSON.parse(r));var o=t.isEditMode?"data-field-sbsloop-value":"data-animate-sbs-loop";e.loop=e.getAttribute(o)||"",t_animationSBS__setAndCacheElTopPos(e,t);var s=t_animationSBS__getZoom(e);e.steps=[];var l=0;r.forEach((function(t,n){var i={state:"unactive"};i.styles=t_animationSBS__createStepStyles(t),"scroll"===e.animType?(i.prevUnfixedDist=l,i.dist=t.di*s,!1===i.styles.fix&&(l+=i.dist),i.start=0===n?e.topOffset:e.steps[n-1].end,i.end=i.start+i.dist):(i.time=t.ti,i.ease=t.ea),e.steps.push(i)})),!e.wrapperEl||e.wrapperEl.id&&e.uniqueID||t_animationSBS__generateUniqueIDForEl(e),t_animationSBS__updateInfoOnImgLoad(e,t),t_animationSBS__updateMoveAndRotateStepsStyles(e.steps)}}}));var e=t.elements.filter((function(t){if("innactive"===t.status){var e=t_animationSBS__getSizeBasedOnDimensionMode(t),n=e.width,i=e.height;t.wrapperEl&&t.wrapperEl.removeAttribute("style"),t.wrapperEl&&(t.wrapperEl.style.display="table"),t.wrapperEl&&(t.wrapperEl.style.width=n),t.wrapperEl&&(t.wrapperEl.style.height=i)}return"innactive"!==t.status}));t_animationSBS__updateAnimatedObjectState(t,"elements",e)}function t_animationSBS__generateUniqueIDForEl(t){var e=t.closest(".t396__artboard, .tn-artboard"),n="";e&&(n=e.getAttribute("data-record-id")||e.getAttribute("data-artboard-recid"));var i,a=t_animationSBS__getAttributeSelector(t).id;t.uniqueID="sbs-"+n+"-"+a,t.wrapperEl.id=t.uniqueID}function t_animationSBS__updateInfoOnImgLoad(t,e){var n=t.querySelector("img");n&&(n.addEventListener("load",(function(){t_animationSBS__updateValuesAterIMGLoading(t,e)})),n.complete&&t_animationSBS__updateValuesAterIMGLoading(t,e))}function t_animationSBS__updateValuesAterIMGLoading(t,e){t_animationSBS__setAndCacheElTopPos(t,e),"scroll"===t.animType&&t_animationSBS__updateStepsValues(t)}function t_animationSBS__updateStepsValues(t){t.steps.forEach((function(e,n){e.start=0===n?t.topOffset:t.steps[n-1].end,e.end=e.start+e.dist}))}function t_animationSBS__setAndCacheElTopPos(t,e){var n=t_animationSBS__getZoom(t),i,a=["scroll","intoview","blockintoview"].every((function(e){return t.animType!==e}));if(!e.isEditMode&&!a){var r=t_animationSBS__getTopOffset(t);r+=t_animationSBS__accumulateParentGroupOffset(t),"scroll"!==t.animType&&"intoview"!==t.animType||window.isOnlyScalable||t396__isElementUsingCalcZoom(t)||(r*=n);var o=t.closest(".r"),s=o?o.getBoundingClientRect().top+window.pageYOffset:0,l=o&&parseInt(getComputedStyle(o).paddingTop,10)||0;t.parentRecTopPos=s,t.topOffset=s+r+l,t_animationSBS__setScaledDifference(t,n),t_animationSBS__setTriggerOffset(t)}}function t_animationSBS__getTopOffset(t){if(!t)return 0;if(t.getAttribute("data-fe-elem-id"))return t.offsetTop;var e=parseInt(t.style.top,10);return isNaN(e)?t.offsetTop||0:e}function t_animationSBS__accumulateParentGroupOffset(t){for(var e=0,n=t.parentElement.closest(".t396__group");n;)e+=t_animationSBS__getTopOffset(n),n=n.parentElement.closest(".t396__group");return e}function t_animationSBS__setScaledDifference(t,e){if(!t.scaledDifference&&window.isOnlyScalable&&"fixed"!==t.wrapperEl.style.position&&t396__isElementUsingCalcZoom(t)){var n=t.wrapperEl?t.wrapperEl.getBoundingClientRect().height:0,i=Math.abs((n*e-n)/2);i=Math.round(i),t.scaledDifference=i}}function t_animationSBS__addDelayToSteps(t){for(var e=0;e<t.length;e++){var n=t[e];if(0!==e&&(parseInt(n.dd,10)||parseInt(n.dt,10))){var i=Object.create(t[e-1]);void 0!==n.dt?i.ti=n.dt:i.di=n.dd,t.splice(e,0,i),e++}}}function t_animationSBS__updateMoveAndRotateStepsStyles(t){var e=t[0].styles.moveX,n=t[0].styles.moveY,i=t[0].styles.rotate;t.forEach((function(t){var a=t.styles;a.moveX-=e,e+=a.moveX,a.moveY-=n,n+=a.moveY,a.rotate-=i,i+=a.rotate}))}function t_animationSBS__createStepStyles(t){return{moveX:parseInt(t.mx,10)||0,moveY:parseInt(t.my,10)||0,scaleX:isNaN(parseFloat(t.sx))?1:parseFloat(t.sx),scaleY:isNaN(parseFloat(t.sy))?1:parseFloat(t.sy),opacity:isNaN(parseFloat(t.op))?1:parseFloat(t.op),rotate:parseInt(t.ro,10)||0,blur:parseInt(t.bl,10)||0,fix:"fixed"===t.fi}}function t_animationSBS__setTriggerOffset(t){var e=window.innerHeight,n=t_animationSBS__getZoom(t);t.triggerOffset=parseInt(t_animationSBS__getAnimOptions(t,"published","sbs-trgofst"),10),(window.isOnlyScalable||"scroll"===t.animType||t396__isElementUsingCalcZoom(t))&&(t.triggerOffset*=n),t.triggerOffset||(t.triggerOffset=0),.5!==t.trigger&&1!==t.trigger||(t.triggerOffset+=e*t.trigger,("intoview"===t.animType||"scroll"===t.animType)&&t.triggerOffset>t.topOffset&&t.triggerOffset<=e*t.trigger&&(t.triggerOffset=t.topOffset,t.scaledDifference&&(t.triggerOffset<0||t.triggerOffset===t.scaledDifference)&&(t.scaledDifference=0)),"blockintoview"===t.animType&&t.triggerOffset>t.parentRecTopPos&&t.triggerOffset<=e*t.trigger&&(t.triggerOffset=t.parentRecTopPos))}function t_animationSBS__triggerNoScrollAnimation(t,e){t_animationSBS__processElsIntoView(t,e),t_animationSBS__removeHoverClickTriggers(t),t_animationSBS__initClickTriggers(t),t_animationSBS__initHoverTriggers(t)}function t_animationSBS__processElsIntoView(t,e){t_animationSBS__updateIntoViewElsState(e);var n=0;t_animationSBS__setKeyForAnimatedObject(t,"onScrollUpdateElsIntoView",(function(){n||(n=setTimeout((function(){var e;t_animationSBS__updateIntoViewElsState(t_animationSBS__getAnimElsOnView(t.elements)),n=0}),200))})),window.removeEventListener("scroll",t.onScrollUpdateElsIntoView),window.addEventListener("scroll",t.onScrollUpdateElsIntoView)}function t_animationSBS__removeHoverClickTriggers(t){var e=["js-sbs-anim-trigger_click","js-sbs-anim-trigger_hover"],n=document.querySelectorAll("."+e.join(", ."));n.length&&((n=Array.prototype.slice.call(n)).forEach((function(t){e.forEach((function(e){t.classList.remove(e)}))})),t.clickedTriggerEls.forEach((function(t){t.removeEventListener("click",t_animationSBS__initClickCallback),t_animationSBS__removeTriggerList(t,"click")})),t.hoverTriggerEls.forEach((function(t){t.removeEventListener("click",t_animationSBS__initHoverTrigger),t.removeEventListener("mouseenter",t_animationSBS__initHoverTrigger),t.removeEventListener("mouseleave",t_animationSBS__initHoverTrigger),t_animationSBS__removeTriggerList(t,"hover")})),t_animationSBS__updateAnimatedObjectState(t,"clickedTriggerEls",[]),t_animationSBS__updateAnimatedObjectState(t,"hoverTriggerEls",[]))}function t_animationSBS__removeTriggerList(t,e){t["triggerList-on-"+e]&&(t["triggerList-on-"+e]=[]),t["triggerOnceList-on-"+e]&&(t["triggerOnceList-on-"+e]=[])}function t_animationSBS__initClickTriggers(t){var e=t.elements.filter((function(t){return"click"===t.getAttribute("data-animate-sbs-event")}));if(e.length){t_animationSBS__connectTriggersWithAnimEls(e);var n=Array.prototype.slice.call(document.querySelectorAll(".js-sbs-anim-trigger_click"));if(n.length){if(!document.getElementById("js-sbs-anim-trigger-styles")){var i=document.createElement("style");i.id="js-sbs-anim-trigger-styles",i.textContent=".js-sbs-anim-trigger_click { cursor: pointer; }",document.head.insertAdjacentElement("beforeend",i)}t.clickedTriggerEls=n,n.forEach((function(t){t_animationSBS__preventAnimatedParentTrigger(t),t.removeEventListener("click",t_animationSBS__initClickCallback),t.addEventListener("click",t_animationSBS__initClickCallback)}))}}}function t_animationSBS__initClickCallback(){var t=this["triggerList-on-click"]||[],e=this["triggerOnceList-on-click"]||[];(t.length||e.length)&&(t_animationSBS__playOnceAnimation(this,e,"click"),t.forEach((function(t){t.classList.contains("t-sbs-anim_started")&&!t.classList.contains("t-sbs-anim_reversed")?t_animationSBS__setActionOnEnd(t):t_animationSBS__setActionOnStart(t)})))}function t_animationSBS__playOnceAnimation(t,e,n){if(e&&e.length){t_animationSBS__actionOnStart(e);var i=document.createEvent("Event");i.initEvent("updateAnimOnce",!0,!0),e.forEach((function(t){t.dispatchEvent(i)})),t["triggerOnceList-on-"+n]=[]}}function t_animationSBS__initHoverTriggers(t){var e=t.elements.filter((function(t){return"hover"===t.getAttribute("data-animate-sbs-event")}));if(e.length){t_animationSBS__connectTriggersWithAnimEls(e);var n=document.querySelectorAll(".js-sbs-anim-trigger_hover");n=Array.prototype.slice.call(n),t.hoverTriggerEls=n,n.forEach((function(t){t_animationSBS__preventAnimatedParentTrigger(t),window.animationSBS__isIOS?(t.removeEventListener("click",t_animationSBS__initHoverTrigger),t.addEventListener("click",t_animationSBS__initHoverTrigger)):(t.removeEventListener("mouseenter",t_animationSBS__initHoverTrigger),t.removeEventListener("mouseleave",t_animationSBS__initHoverTrigger),t.addEventListener("mouseenter",t_animationSBS__initHoverTrigger),t.addEventListener("mouseleave",t_animationSBS__initHoverTrigger))}))}}function t_animationSBS__preventAnimatedParentTrigger(t){if("none"!==getComputedStyle(t).pointerEvents){var e=t.querySelector(".tn-molecule, .tn-atom");e&&(t.style.pointerEvents="none",e.style.pointerEvents="auto")}}function t_animationSBS__initHoverTrigger(t){var e=t.currentTarget,n=t.currentTarget["triggerList-on-hover"],i=t.currentTarget["triggerOnceList-on-hover"];function a(t){e.closest(".t396__elem")!==t.target.closest(".t396__elem")&&(t_animationSBS__actionOnEnd(n),e.classList.remove("t-hover-mob-active"),document.removeEventListener("click",a))}(n&&n.length||i&&i.length)&&(t_animationSBS__playOnceAnimation(e,i,"hover"),n&&n.length&&("mouseenter"===t.type&&t_animationSBS__actionOnStart(n),"mouseleave"===t.type&&t_animationSBS__actionOnEnd(n),"click"===t.type&&(e.classList.contains("t-hover-mob-active")||(setTimeout((function(){t_animationSBS__actionOnStart(n),e.classList.add("t-hover-mob-active")})),setTimeout((function(){document.addEventListener("click",a)}))))))}function t_animationSBS__connectTriggersWithAnimEls(t){var e=t[0].getAttribute("data-animate-sbs-event");t.forEach((function(t){var n=t.triggerElems;if(n){var i=n?n.split(","):[],a=t.closest(".t396__artboard"),r=a?a.getAttribute("data-artboard-recid"):"";i.forEach((function(n){var i=r+n,a;t_animationSBS__processTriggersElemList(document.querySelector(".tn-elem__"+i+", .tn-group__"+i),t,e)}))}else{var o;t_animationSBS__processTriggersElemList(t.querySelector(".tn-atom__sbs-anim-wrapper"),t,e)}}))}function t_animationSBS__processTriggersElemList(t,e,n){var i;t&&("once"===e.loop?e.classList.contains("t-sbs-anim_started")||t_animationSBS__initTriggersList(t,"triggerOnceList",n,e):t_animationSBS__initTriggersList(t,"triggerList",n,e))}function t_animationSBS__initTriggersList(t,e,n,i){t[e+"-on-"+n]?-1===t[e+"-on-"+n].indexOf(i)&&t[e+"-on-"+n].push(i):t[e+"-on-"+n]=[i],t[e+"-on-"+n].length&&!t.classList.contains("js-sbs-anim-trigger_"+n)&&t.classList.add("js-sbs-anim-trigger_"+n),i.addEventListener("updateAnimOnce",(function(){t[e+"-on-"+n]=t[e+"-on-"+n].filter((function(t){return t!==i})),t["triggerList-on-"+n]&&t["triggerList-on-"+n].length||t.classList.remove("js-sbs-anim-trigger_"+n)}))}function t_animationSBS__actionOnStart(t){t.forEach(t_animationSBS__setActionOnStart)}function t_animationSBS__setActionOnStart(t){t.classList.contains("t-sbs-anim_playing")?t.setAttribute("data-planned-dir","play"):t_animationSBS__playAnimation(t,!1)}function t_animationSBS__actionOnEnd(t){t.forEach(t_animationSBS__setActionOnEnd)}function t_animationSBS__setActionOnEnd(t){var e=t.loop,n="noreverse"===e&&"hover"===t.getAttribute("data-animate-sbs-event");e&&-1!==e.indexOf("loop")?t.addEventListener("animationiteration",t_animationSBS__setIterationAnimation):t.classList.contains("t-sbs-anim_playing")&&!n?t.setAttribute("data-planned-dir","reverse"):n||t_animationSBS__playAnimation(t,!0)}function t_animationSBS__setIterationAnimation(t){var e=t.target.closest(".t396__elem");if(e){if("loopwithreverse"===e.loop){var n=t_animationSBS__getAnimationFullTime(e,!0),i,a;if(1e3*t.elapsedTime/n%2!=0)return}e.classList.remove("t-sbs-anim_started"),e.classList.remove("t-sbs-anim_reversed"),e.classList.remove("t-sbs-anim_playing"),e.removeEventListener("animationiteration",t_animationSBS__setIterationAnimation)}}function t_animationSBS__animationEnd(t){t.removeEventListener("animationend",t_animationSBS__animationEndingEvent),t.addEventListener("animationend",t_animationSBS__animationEndingEvent)}function t_animationSBS__animationEndingEvent(){this.classList.remove("t-sbs-anim_playing");var t=this.getAttribute("data-planned-dir");"play"===t&&this.classList.contains("t-sbs-anim_reversed")?t_animationSBS__playAnimation(this,!1):"reverse"!==t||this.classList.contains("t-sbs-anim_reversed")||t_animationSBS__playAnimation(this,!0),this.setAttribute("data-planned-dir","")}function t_animationSBS__getAnimationFullTime(t,e){var n,i;return t.getAttribute("data-animate-sbs-opts")?JSON.parse(t.getAttribute("data-animate-sbs-opts").split("'").join('"')).reduce((function(t,n){return e&&(t+=parseInt(n.dt,10)||0),t+(parseInt(n.ti,10)||0)}),0):0}function t_animationSBS__playAnimation(t,e){t.classList.remove("t-sbs-anim_started"),e||t.classList.remove("t-sbs-anim_reversed"),t_animationSBS__forceRepaint(t);var n=t_animationSBS__getAnimationFullTime(t,!1),i=["t-sbs-anim_started"];e&&i.push("t-sbs-anim_reversed"),n>0&&i.push("t-sbs-anim_playing"),i.forEach((function(e){t.classList.add(e)})),t_animationSBS__animationEnd(t)}function t_animationSBS__forceRepaint(t){t.offsetWidth}function t_animationSBS__updateIntoViewElsState(t){t&&t.length&&t.forEach((function(t){if(document.contains(t)){var e=window.pageYOffset+t.triggerOffset,n="blockintoview"===t.animType?e>=t.parentRecTopPos:e>=t.topOffset,i=t.closest(".t396").parentElement,a,r=["t397__off","t395__off","t400__off"].some((function(t){return i.classList.contains(t)}));n&&!r&&(t.classList.contains("t-sbs-anim_started")||t.classList.add("t-sbs-anim_started"))}}))}function t_animationSBS__getZoom(t){if(void 0!==t.scaleFactor)return t.scaleFactor;var e=t.closest(".t396__artboard");if(!e)return 1;var n=e.getAttribute("data-artboard-recid");return e.classList.contains("t396__artboard_scale")||!window.animationSBS__isOldPage&&"undefined"!=typeof t396_ab__getFieldValue&&"window"===t396_ab__getFieldValue(e,"upscale")?n&&window.tn["ab"+n]&&window.tn["ab"+n].scaleFactor||window.tn_scale_factor:1}function t_animateSbs__wrapAtomEls(){var t=document.querySelectorAll("[data-animate-sbs-event]");Array.prototype.forEach.call(t,(function(t){var e=t.querySelector(".tn-atom");if(e&&!e.closest(".tn-atom__sbs-anim-wrapper")){t_animationSBS__wrapEl(e,"tn-atom__sbs-anim-wrapper");var n=t.getAttribute("data-elem-type"),i=window.getComputedStyle(t).getPropertyValue("border-radius");if("shape"===n&&i&&parseInt(i)){var a=t.querySelector(".tn-atom__sbs-anim-wrapper");a&&(a.style.borderRadius=i)}}}))}function t_animateSbs__cashElsInfo(t){var e=t.els;t.triggerElemsAttrName="edit"===t.mode?"data-field-sbstrgels-value":"data-animate-sbs-trgels",Array.prototype.forEach.call(e,(function(e){e.state="unactive",e.animType="edit"===t.mode?e.getAttribute("data-field-sbsevent-value"):e.getAttribute("data-animate-sbs-event"),e.changeType="scroll"===e.animType?"scroll":"time",e.trigger="edit"===t.mode?e.getAttribute("data-field-sbstrg-value"):e.getAttribute("data-animate-sbs-trg"),e.trigger=e.trigger?e.trigger:1,e.triggerElems=e.getAttribute(t.triggerElemsAttrName),e.wrapperEl=e.querySelector(".tn-atom__sbs-anim-wrapper"),e.steps=[];var n="edit"===t.mode?e.getAttribute("data-field-sbsopts-value"):e.getAttribute("data-animate-sbs-opts");if(n){-1!==n.indexOf("fixed")&&(e.zIndex=window.getComputedStyle(e).getPropertyValue("z-index")),n=n.replace(/'/g,'"');var i=JSON.parse(n);t_animationSBS__addDelayToSteps(i),e.loop="edit"===t.mode?e.getAttribute("data-field-sbsloop-value"):e.getAttribute("data-animate-sbs-loop"),t_animationSBS__setAndCacheElTopPos(e,t);for(var a=0,r=0;r<i.length;r++){var o={state:"unactive"};o.styles=t_animationSBS__createStepStyles(i[r]),"scroll"===e.changeType?(o.prevUnfixedDist=a,o.dist=i[r].di,!1===o.styles.fix&&(a+=Number(o.dist)),o.start=0===r?e.topOffset:e.steps[r-1].end,o.end=o.start+1*o.dist):(o.time=i[r].ti,o.ease=i[r].ea),e.steps.push(o)}t_animationSBS__updateInfoOnImgLoad(e,t),t_animationSBS__updateMoveAndRotateStepsStyles(e.steps)}}))}function t_animateSbs__reset(t){for(var e=t.els,n=0;n<e.length;n++){var i=e[n].animType;if("intoview"===i||"blockintoview"===i||"click"===i||"hover"===i){e[n].classList.remove("t-sbs-anim_started");var a=e[n].querySelector(".tn-atom__sbs-anim-wrapper");a&&(a.style.opacity="")}else{e[n].state="reseted";var r=e[n].wrapperEl;r&&(r.style.transform="",r.style.position="",r.style.top="",r.style.opacity="")}}}function t_animationSBS__getSizeBasedOnDimensionMode(t){if(!t)return{width:"inherit",height:"inherit"};var e=t.parentNode.closest(".tn-group")||t.parentNode,n,i,a;return e&&t396__isFlex(e)?{width:"fill"===t396_elem__getFieldValue(t,"widthmode")?"100%":"inherit",height:"fill"===t396_elem__getFieldValue(t,"heightmode")?"100%":"inherit"}:{width:"inherit",height:"inherit"}}function t_animationSBS__wrapEl(t,e){if(!t)return!1;var n=t.parentNode,i=document.createElement("div"),a="image"===t.parentElement.getAttribute("data-elem-type"),r=t396__isFlex(t.parentElement),o=t_animationSBS__getSizeBasedOnDimensionMode(n),s=o.width,l=o.height,_=/firefox|Firefox/.test(navigator.userAgent);"string"==typeof e?i.classList.add(e):e.forEach((function(t){i.classList.add(t)})),i.style.display=a||_||r?"inherit":"table",i.style.width=s,i.style.height=l,i.appendChild(t),n&&n.appendChild(i)}window.t_animationSBS__isFirefox=-1!==navigator.userAgent.search("Firefox"),window.t_animationSBS__isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),window.animationSBS__isIOS=/iPhone|iPad|iPod/i.test(navigator.userAgent)||"ontouchend"in document&&/Macintosh/.test(navigator.userAgent),window.animationSBS__isOldPage=Boolean(document.querySelector('script[src*="tilda-blocks-2.7"]')),"visible"===document.visibilityState?"loading"!==document.readyState?t_animationSBS__init():document.addEventListener("DOMContentLoaded",t_animationSBS__init):document.addEventListener("visibilitychange",t_animationSBS__checkVisibilityPage);


/* === tilda-zero-scale === */
function t396_scaleBlock(e){var t=t396_detectResolution(e),l=document.getElementById("rec"+e);if(l){var a;"function"==typeof window.t396__getCurrentScaleFactor?a=t396__getCurrentScaleFactor(e):(a=window.tn&&window.tn["ab"+e]&&window.tn["ab"+e].scaleFactor)||(a=window.tn_scale_factor);var o=l.querySelector(".t396__artboard"),n=t396_scale__collectScaleData(o,a);if(o){var r=t396_ab__getFieldValue(o,"height"),i=Math.floor(r*a),c,_;if(t396_ab__getFieldValue(o,"height_vh")){var s=t396_ab__getFieldValue(o,"height"),d=t396_ab__getHeight(o),u=s*a;i=u>=d?u:d}if(t396_scale__updateArtboardState(o,i),0!==n.length)if(t396_isOnlyScalableBrowser())t396_scale__scaleIsOnlyScalableBlock(n);else{var m=n.filter((function(e){var t=e.elemType;return"text"===t||"button"===t})),h=n.filter((function(e){var t;return"shape"===e.elemType})),p=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),f;p&&t396_scale__schedule__scaleTextElements(m),t396_scale__schedule__scaleShapeElements(h),n.forEach((function(e){var l=e.element,o=e.elementCore,n=e.elemType,r="gallery"===n;"yes"===l.getAttribute("data-scale-off")||r||(l.style.zoom=a),r&&(l.style.zoom=null),"text"===n&&t<1200&&o&&!p&&(o.style.webkitTextSizeAdjust="auto"),o&&(o.style.transformOrigin="center")})),Array.from(o.querySelectorAll(":scope > .t396__elem, :scope > .t396__group")).forEach((function(e){var t;("left"!==t396_core__getFieldValue(e,"axisx")||"top"!==t396_core__getFieldValue(e,"axisy"))&&(t396_elem__renderViewOneField(e,"left"),t396_elem__renderViewOneField(e,"top"))}))}}}}function t396_scale__schedule__scaleTextElements(e){window.tn||(window.tn={}),window.tn.scheduledTextElementsForScale||(window.tn.scheduledTextElementsForScale=[]),window.tn.scheduledTextElementsForScale=window.tn.scheduledTextElementsForScale.concat(e),clearTimeout(window.tn.textElementsScaleTimer),window.tn.textElementsScaleTimer=setTimeout((function(){t396_scale__scaleTextElements(window.tn.scheduledTextElementsForScale),window.tn.scheduledTextElementsForScale=[]}),1)}function t396_scale__scaleTextElements(e){var t=t396__initFastDOM();t.write((function(){e.forEach((function(e){e.element.style.zoom=""}))})),t.read((function(){e.forEach((function(e){e.cachedFontSize=parseFloat(getComputedStyle(e.elementCore).fontSize),e.cachedTextSizeAdjust=e.elementCore.style.webkitTextSizeAdjust}))})),t.write((function(){e.forEach((function(e){e.elementCore.style.webkitTextSizeAdjust="none",e.element.style.zoom=e.scaleFactor}))})),t.read((function(){e.forEach((function(e){e.currentFontSize=parseFloat(getComputedStyle(e.elementCore).fontSize)}))})),t.write((function(){e.forEach((function(e){var t=Math.abs(e.cachedFontSize-e.currentFontSize);e.elementCore.style.webkitTextSizeAdjust=t>=1?"none":e.cachedTextSizeAdjust,t>=1&&(e.elementCore.style.fontSize=Math.round(e.cachedFontSize*e.scaleFactor)+"px")}))}))}function t396_scale__schedule__scaleShapeElements(e){window.tn||(window.tn={}),window.tn.scheduledShapeElementsForScale||(window.tn.scheduledShapeElementsForScale=[]),window.tn.scheduledShapeElementsForScale=window.tn.scheduledShapeElementsForScale.concat(e),clearTimeout(window.tn.shapeElementsScaleTimer),window.tn.shapeElementsScaleTimer=setTimeout((function(){t396_scale__scaleShapeElements(window.tn.scheduledShapeElementsForScale),window.tn.scheduledShapeElementsForScale=[]}),1)}function t396_scale__scaleShapeElements(e){var t=t396__initFastDOM();t.read((function(){e.forEach((function(e){var t=t396_elem__getFieldValue(e.element,"height");t=t396_elem__getHeight(e.element,t),t=t396_elem__convertPosition__Local__toAbsolute(e.element,"height",t);var l=t396_elem__getFieldValue(e.element,"width");l=t396_elem__getWidth(e.element,l),l=t396_elem__convertPosition__Local__toAbsolute(e.element,"width",l);var a=parseFloat(t396_elem__getFieldValue(e.element,"top"));a=t396_elem__convertPosition__Local__toAbsolute(e.element,"top",a);var o=parseFloat(t396_elem__getFieldValue(e.element,"left"));o=t396_elem__convertPosition__Local__toAbsolute(e.element,"left",o),e.shapeSize={top:a,left:o,width:l,height:t}}))}));var l=e.filter((function(e){return e.shapeSize.width<=2||e.shapeSize.height<=2}));t.read((function(){l.forEach((function(e){var t=window.getComputedStyle(e.elementCore);e.borderWidth=t.borderWidth,e.isImage="none"!==t.backgroundImage,e.isAnimated=e.element.getAttribute("data-animate-sbs-event")}))})),t.write((function(){l.forEach((function(e){if("0px"===e.borderWidth&&!e.isImage&&!e.isAnimated){e.element.style.removeProperty("zoom");var t=e.shapeSize.width*e.scaleFactor,l=e.shapeSize.height*e.scaleFactor,a=e.shapeSize.top*e.scaleFactor,o=e.shapeSize.left*e.scaleFactor;e.element.style.width=parseFloat(t)+"px",e.element.style.height=parseFloat(l)+"px",e.element.style.top=Math.round(a)+"px",e.element.style.left=Math.round(o)+"px",e.element.setAttribute("data-scale-off","yes")}}))}))}function t396_scale__collectScaleData(e,t){var l;return t396_scale__getElementsToScale(e).map((function(e){var l=e.querySelector(".tn-molecule, .tn-atom"),a=t396_scale__getElementType(e),o=t396_elem__getFieldValue(e,"container");if(o||"group"!==a||(o="grid"),l&&"grid"===o)return{element:e,elementCore:l,elemType:a,scaleFactor:t}})).filter(Boolean)}function t396_scale__scaleIsOnlyScalableBlock(e){e.forEach((function(e){var t=e.element,l=e.elementCore,a=e.elemType,o=l.closest(".tn-atom__scale-wrapper");o||(t396_scale__wrapElement(l,currentScaleFactor,"tn-atom__scale-wrapper"),o=l.closest(".tn-atom__scale-wrapper")),t.style.zoom="",t396_scale__processBackdropFilter(t,l,o),t396_scale__processBackgroundForShape(t,l,a,currentScaleFactor)}))}function t396_scale__getElementsToScale(e){return e?Array.prototype.slice.call(e.children).filter((function(e){return e&&(e.classList.contains("t396__elem")||e.classList.contains("t396__group"))})):[]}function t396_scale__updateArtboardState(e,t){e.classList.add("t396__artboard_scale");var l=e.getAttribute("data-artboard-recid"),a;if(!("hug"===e.getAttribute("data-artboard-heightmode"))){var o='<style class="t396__scale-style">.t-rec#rec'+l+" { overflow: visible; }#rec"+l+" .t396__artboard:not(.t396__artboard-flex),#rec"+l+" .t396__artboard:not(.t396__artboard-flex) .t396__carrier,#rec"+l+" .t396__artboard:not(.t396__artboard-flex) .t396__filter { width: 100vw !important; max-width: 100%;}#rec"+l+" .t396__carrier,#rec"+l+" .t396__filter,#rec"+l+" .t396__artboard {height: "+t+"px !important;}</style>";e.insertAdjacentHTML("beforeend",o)}}function t396_scale__wrapElement(e,t,l){if(e){var a=e.parentNode;if(a){var o=document.createElement("div");o.classList.add(l),o.style.transform="scale("+t+")",o.appendChild(e),a.appendChild(o)}}}function t396_scale__processBackdropFilter(e,t,l){"none"===e.style.backdropFilter&&(e.style.backdropFilter="");var a=getComputedStyle(e).backdropFilter;if(a){e.style.backdropFilter="none",l.style.backdropFilter=a;var o=getComputedStyle(t).borderRadius;"0px"!==o&&(l.style.borderRadius=o)}}function t396_scale__processBackgroundForShape(e,t,l,a){if("shape"===l){var o=t&&getComputedStyle(t),n;if(o)if((o&&o.backgroundImage||t.getAttribute("data-original"))&&"fixed"===o.backgroundAttachment){e.removeChild(t.parentNode),e.appendChild(t);var r=t396_elem__getFieldValue(e,"height");r=t396_elem__getHeight(e,r),r=t396_elem__convertPosition__Local__toAbsolute(e,"height",r);var i=t396_elem__getFieldValue(e,"width");i=t396_elem__getWidth(e,i),i=t396_elem__convertPosition__Local__toAbsolute(e,"width",i);var c=parseFloat(t396_elem__getFieldValue(e,"top")),_=parseFloat(t396_elem__getFieldValue(e,"left"));e.style.top=c*a+"px",e.style.left=_*a+"px",e.style.height=r*a+"px",e.style.width=i*a+"px",e.setAttribute("data-scale-off","yes")}}}function t396_scale__getElementType(e){var t=e.getAttribute("data-elem-type");return!t&&e.classList.contains("tn-group")&&(t="group"),t}window.t396_initialScale||(window.t396_initialScale=function(){});


/* === tilda-zero-fixed === */
function t396__processFixedArtBoard(t){if(t){var e=document.getElementById("tildacopy");if("fixed"!==t396_ab__getFieldValue(t,"pos"))return t.fixedOnScroll&&window.removeEventListener("scroll",t.fixedOnScroll),t396__unfixedArtBoard(t),void t396__setAndUpdateFixedAbList(e,t);var i=t396_ab__getFieldValue(t,"fixed-trigger"),d="fixslide"!==t396_ab__getFieldValue(t,"appear-anim"),o=getComputedStyle(t),n="t396__artboard-fixed-no-bg",o=("rgba(0, 0, 0, 0)"===o.backgroundColor&&"none"===o.backgroundImage?t.classList.add(n):t.classList.remove(n),d&&i?"t396__artboard-fixed-innactive":"");d&&i?t.classList.add(o):t.classList.remove("t396__artboard-fixed-innactive"),t396__setAndUpdateFixedAbList(e,t),i?(t396__changeFixedArtBoardClass(t,i,n="t396__artboard-fixed-active",o),t396__updateOnScrollFixedAB(t,i,n,o)):t.fixedOnScroll&&window.removeEventListener("scroll",t.fixedOnScroll)}}function t396__unfixedArtBoard(e){["t396__artboard-fixed-no-bg","t396__artboard-fixed-innactive","t396__artboard-fixed-active"].forEach(function(t){e.classList.remove(t)})}function t396__setAndUpdateFixedAbList(t,e){!t||"none"===getComputedStyle(t).display||Math.max(document.body.scrollHeight,document.body.offsetHeight,document.body.clientHeight,document.documentElement.offsetHeight)+t.offsetHeight<window.innerHeight||(window.tn.abFixedPosList||(window.tn.abFixedPosList=[]),t396__updateFixedPosList(e),t396__updateTildaCopyPadding(t))}function t396__updateOnScrollFixedAB(t,e,i,d){t.fixedOnScroll&&window.removeEventListener("scroll",t.fixedOnScroll);var o=0;t.fixedOnScroll=function(){o=o||setTimeout(function(){t396__changeFixedArtBoardClass(t,e,i,d),clearTimeout(o),o=0},200)},window.addEventListener("scroll",t.fixedOnScroll)}function t396__changeFixedArtBoardClass(t,e,i,d){window.pageYOffset>e?(t.classList.add(i),d&&t.classList.remove(d)):(t.classList.remove(i),d&&t.classList.add(d))}function t396__updateFixedPosList(t){var e,i,d,o;void 0!==window.tn.abFixedPosList&&(o="fixed"===t396_ab__getFieldValue(t,"pos"),e="bottom"===t396_ab__getFieldValue(t,"fixed-pos"),i=t.classList.contains("t396__artboard-fixed-no-bg"),d=t.offsetHeight,t=t.getAttribute("data-artboard-recid"),o&&e&&d&&!i?(o={abID:t,abHeight:d},t396__removeCurrentAbFromFixedPosList(t),window.tn.abFixedPosList.push(o)):t396__removeCurrentAbFromFixedPosList(t))}function t396__removeCurrentAbFromFixedPosList(e){void 0!==window.tn.abFixedPosList&&(window.tn.abFixedPosList=window.tn.abFixedPosList.filter(function(t){return t.abID!==e}))}function t396__updateTildaCopyPadding(t){var e,i;void 0!==window.tn.abFixedPosList&&(t=getComputedStyle(t).backgroundColor,(e=document.querySelector(".tildacopy-padding"))||((i=document.createElement("div")).classList.add("tildacopy-padding"),i.style.backgroundColor=t,document.body.appendChild(i)),e=document.querySelector(".tildacopy-padding"),0===window.tn.abFixedPosList.length?e.style.height="0":(t=window.tn.abFixedPosList.reduce(function(t,e){return t=e.abHeight>t?e.abHeight:t},0),e.style.height=t+"px"))}

/* === tilda-events === */
window.Tilda=window.Tilda||{},function(){function e(){var e=navigator.userAgent.toLowerCase(),t=-1!==e.indexOf("msie")&&parseInt(e.split("msie")[1]);if(8===t||9===t){var r=document.querySelectorAll(".t-btn");Array.prototype.forEach.call(r,(function(e){var t=e.getAttribute("href");e.querySelector("table")&&t&&-1===t.indexOf("#popup:")&&-1===t.indexOf("#price:")&&e.addEventListener("click",(function(e){var t=e.target.getAttribute("href");e.preventDefault(),window.location.href=t}))}))}try{var a=document.getElementById("allrecords"),i=a?a.getAttribute("data-tilda-cookie"):null;a&&"no"===i||Tilda.saveUTM()}catch(n){}var o=document.querySelectorAll(".r");function c(e){var t=e.target.closest("a.js-click-stat")||e.target.closest(".js-click-zero-stat");if(e.target&&t){var r=e.currentTarget,a;if(t.closest(".r")!==r)return;var i=t.getAttribute("data-tilda-event-name"),o=t.textContent,c=t.getAttribute("href")||"",d=t.getAttribute("target"),n;if(!i)i="/tilda/click/"+(r?r.getAttribute("id"):"")+"/?url="+c;if(Tilda.sendEventToStatistics(i,o),"http"===c.substring(0,4)&&-1===c.indexOf(".typeform.com/"))return window.setTimeout((function(){window.open(c,"_blank"===d?"_blank":"_self")}),"_blank"===d?0:300),e.preventDefault(),!1}}Array.prototype.forEach.call(o,(function(e){e.removeEventListener("click",c),e.addEventListener("click",c)}));var d=document.querySelectorAll("input.js-amount");Array.prototype.forEach.call(d,(function(e){var t=e.value;t=t.replace(/,/g,"."),t=parseFloat(t.replace(/[^0-9\.]/g,"")),e.value=t}))}Tilda.sendEcommerceEvent=function(e,t){if(void 0===t||0===t.length)return!1;if(void 0===e||"add"!==e&&"remove"!==e&&"purchase"!==e&&"detail"!==e)return!1;for(var r,a="",i=0,o=[],c,d,n="",m="",l="",u=0;u<t.length;u++){a>""&&(a+=", "),a+=(d=t[u]).name,i+=d.price,c="",void 0!==d.options&&d.options.length>0&&Array.prototype.forEach.call(d.options,(function(e){c+=e.option+": "+e.variant+"; "}));var p={name:d.name,price:d.price,variant:c,quantity:1};d.id&&d.id>0&&(id=d.id,p.id=d.id),d.uid&&d.uid>0&&(m=d.uid,p.uid=d.uid),d.recid&&d.recid>0&&(n=d.recid,p.recid=d.recid),d.lid&&d.lid>0&&(l=d.lid,p.lid=d.lid),d.sku&&d.sku>0&&(p.sku=d.sku),o[o.length]=p}var p;"add"!==e&&"remove"!==e||(r="/tilda/cart/"+e+"/",n>0&&(r+=""+n),m>0?r+="-u"+m:l>0&&(r+="-"+l)),"detail"===e&&(r="/tilda/product/detail/",m>0?r+=m+"/":(n>0&&(r+="r"+n),l>0&&(r+="-l"+l))),"purchase"===e&&(r="/tilda/rec"+n+"/payment/"),(p={ecommerce:{}}).ecommerce[e]={products:o},Tilda.sendEventToStatistics(r,a,p,i)},Tilda.sendEventToStatistics=function(e,t,r,a){var i="/"===e.substring(0,1),o=[],c,d;(c=document.getElementById("allrecords"))&&(d=null!==c.getAttribute("data-fb-event")?c.getAttribute("data-fb-event"):window.jQuery&&void 0!==jQuery("#allrecords").data("fb-event")?jQuery("#allrecords").data("fb-event"):null);var n=!(!d||"nosend"!==d),m=c?c.getAttribute("data-vk-event"):null;c&&(m=null!==c.getAttribute("data-vk-event")?c.getAttribute("data-vk-event"):window.jQuery&&void 0!==jQuery("#allrecords").data("vk-event")?jQuery("#allrecords").data("vk-event"):null);var l=!(!m||"nosend"!==m),u="",p=document.querySelector(".t706");if(u=c.getAttribute("data-tilda-currency")?c.getAttribute("data-tilda-currency"):p&&p.getAttribute("data-project-currency-code")?p.getAttribute("data-project-currency-code"):"RUB",r||(r=window.location.href),(a=a?parseFloat(a):0)>0)if(window.dataLayer||(window.dataLayer=[]),-1!==e.indexOf("/tilda/")&&-1!==e.indexOf("/payment/")&&window.tildaForm&&window.tildaForm.orderIdForStat>"")r={ecommerce:{purchase:{actionField:{id:window.tildaForm.orderIdForStat,revenue:window.tildaForm.amountForStat},products:window.tildaForm.arProductsForStat}}},window.tildaForm.tildapayment&&window.tildaForm.tildapayment.promocode&&(r.ecommerce.purchase.actionField.coupon=window.tildaForm.tildapayment.promocode),r.event="purchase";else if(r&&r.ecommerce&&(r.ecommerce.add&&r.ecommerce.add.products?o=r.ecommerce.add.products:r.ecommerce.remove&&r.ecommerce.remove.products?o=r.ecommerce.remove.products:r.ecommerce.detail&&r.ecommerce.detail.products&&(o=r.ecommerce.detail.products),o&&o.length>0)){for(var s=0;s<o.length;s++)o[s].id||(o[s].uid?o[s].id=o[s].uid:o[s].sku?o[s].id=o[s].sku:o[s].recid&&o[s].lid&&(o[s].id=o[s].recid+"_"+o[s].lid));r.ecommerce.add&&r.ecommerce.add.products?(r.ecommerce.add.products=o,r.event="addToCart"):r.ecommerce.remove&&r.ecommerce.remove.products?(r.ecommerce.remove.products=o,r.event="removeFromCart"):r.ecommerce.detail&&r.ecommerce.detail.products?(r.ecommerce.detail.products=o,r.event="viewProduct"):(i?(r.event="pageView",r.eventAction=e):r.event=e,r.title=t,r.value=a)}void 0!==window.dataLayer&&(i?a>0?r&&r.ecommerce?window.dataLayer.push(r):window.dataLayer.push({event:"pageView",eventAction:e,title:t,value:a,product:r}):window.dataLayer.push({event:"pageView",eventAction:e,title:t,referer:r}):r&&r.ecommerce?window.dataLayer.push(r):window.dataLayer.push({event:e,eventAction:t,value:a,referer:r}));try{var v;if(window.gtagTrackerID&&"gtag"===window.mainTracker)if(i)if(r&&r.event)if("purchase"===r.event){for(var o=r.ecommerce.purchase.products,w=0,g=0;g<o.length;g++)if("delivery"===o[g].id){w=o[g];break}gtag("event","purchase",{transaction_id:r.ecommerce.purchase.actionField.id,value:parseFloat(a).toFixed(2),currency:u,shipping:w,items:r.ecommerce.purchase.products})}else"addToCart"===r.event&&r.ecommerce.add?gtag("event","add_to_cart",{items:r.ecommerce.add.products}):"removeFromCart"===r.event&&r.ecommerce.remove?gtag("event","remove_from_cart",{items:r.ecommerce.remove.products}):"viewProduct"===r.event&&r.ecommerce.detail&&gtag("event","view_item",{items:r.ecommerce.detail.products});else!!window.gtagTrackerID&&-1!==window.gtagTrackerID.indexOf("UA-")?gtag("config",window.gtagTrackerID,{page_title:t,page_path:e}):gtag("event",window.gtagTrackerID,{page_title:t,page_path:e,send_to:window.gtagTrackerID});else gtag("event",e,{event_category:"tilda",event_label:t,value:a})}catch(x){}if(window.ga&&"tilda"!==window.mainTracker&&"gtag"!==window.mainTracker)if(i)if(r&&r.event){try{if(window.Tilda.isLoadGAEcommerce||(window.Tilda.isLoadGAEcommerce=!0,ga("require","ec")),ga("set","currencyCode",u),"purchase"===r.event){for(var f,y=r.ecommerce.purchase.products.length,g=0;g<y;g++)f=r.ecommerce.purchase.products[g],ga("ec:addProduct",{id:f.id||g,name:f.name,price:parseFloat(f.price).toFixed(2),quantity:f.quantity});ga("ec:setAction","purchase",{id:r.ecommerce.purchase.actionField.id,revenue:parseFloat(a).toFixed(2)})}else if("addToCart"===r.event&&r.ecommerce.add){for(var f,y=r.ecommerce.add.products.length,g=0;g<y;g++)f=r.ecommerce.add.products[g],ga("ec:addProduct",{id:f.id||g,name:f.name,price:parseFloat(f.price).toFixed(2),quantity:f.quantity});ga("ec:setAction","add")}else if("removeFromCart"===r.event&&r.ecommerce.remove){for(var f,y=r.ecommerce.remove.products.length,g=0;g<y;g++)f=r.ecommerce.remove.products[g],ga("ec:addProduct",{id:f.id||g,name:f.name,price:parseFloat(f.price).toFixed(2),quantity:f.quantity});ga("ec:setAction","remove")}else if("viewProduct"===r.event&&r.ecommerce.detail){for(var f,y=r.ecommerce.detail.products.length,g=0;g<y;g++)f=r.ecommerce.detail.products[g],ga("ec:addProduct",{id:f.id||g,name:f.name,price:parseFloat(f.price).toFixed(2),quantity:f.quantity});ga("ec:setAction","detail")}}catch(x){}ga("send",{hitType:"pageview",page:e,title:t,params:r})}else ga("send",{hitType:"pageview",page:e,title:t});else ga("send",{hitType:"event",eventCategory:"tilda",eventAction:e,eventLabel:t,eventValue:a});if(window.mainMetrikaId&&window.mainMetrikaId>0&&"function"==typeof ym)if(i){var h={title:t};a>0?(h.params={order_price:a},u&&(h.params.currency=u),ym(window.mainMetrikaId,"hit",e,h)):ym(window.mainMetrikaId,"hit",e,h)}else a>0?(h={order_price:a},u&&(h.currency=u),ym(window.mainMetrikaId,"reachGoal",e,h)):ym(window.mainMetrikaId,"reachGoal",e);if(window.mainMetrika>""&&window[window.mainMetrika]&&(i?a>0?window[window.mainMetrika].hit(e,{title:t,order_price:a,params:r}):window[window.mainMetrika].hit(e,{title:t}):a>0?window[window.mainMetrika].reachGoal(e,{title:t,params:r,order_price:a}):window[window.mainMetrika].reachGoal(e,{title:t,referer:r})),void 0!==window.fbq&&!1===n)try{if(i)if(-1===e.indexOf("tilda/")||-1===e.indexOf("/payment/")&&-1===e.indexOf("/submitted/"))if(r&&r.event&&a>0)if("addToCart"===r.event&&r.ecommerce.add){for(var f,y=r.ecommerce.add.products.length,k=[],g=0;g<y;g++)f=r.ecommerce.add.products[g],k.push(f.id||f.uid||f.name);window.fbq("track","AddToCart",{content_ids:k,content_type:"product",value:a,currency:u})}else if("viewProduct"===r.event&&r.ecommerce.detail){for(var f,y=r.ecommerce.detail.products.length,k=[],g=0;g<y;g++)f=r.ecommerce.detail.products[g],k.push(f.id||f.uid||f.name);window.fbq("track","ViewContent",{content_ids:k,content_type:"product",value:a,currency:u})}else e.indexOf("tilda/popup"),window.fbq("track","ViewContent",{content_name:t,content_category:e});else e.indexOf("tilda/popup"),window.fbq("track","ViewContent",{content_name:t,content_category:e});else a>0&&u?window.fbq("track","InitiateCheckout",{content_name:t,content_category:e,value:a,currency:u}):window.fbq("track","Lead",{content_name:t,content_category:e});else window.fbq("track",e,{content_name:t,value:a})}catch(x){}if(void 0!==window.VK&&void 0!==window.VK.Retargeting&&!1===l)try{if(i){var c,_=(c=document.getElementById("allrecords"))?c.getAttribute("data-vk-price-list-id"):null,b=_&&parseInt(_)||0,T="",A=!1,F,F,F,F,F;if(r&&r.event)if(A={products:[],currency_code:"",total_price:0},"purchase"===r.event&&r.ecommerce.purchase)if(a>0&&b>0){var f;A.currency_code=u;for(var y=r.ecommerce.purchase.products.length,k=[],g=0;g<y;g++)f=r.ecommerce.purchase.products[g],A.products.push({id:f.id||f.uid||f.name,price:f.price?f.price:0}),A.total_price=a;T="init_checkout"}else T="t-purchase";else if("addToCart"===r.event&&r.ecommerce.add)if(a>0&&b>0){var f;A.currency_code=u;for(var y=r.ecommerce.add.products.length,k=[],g=0;g<y;g++)f=r.ecommerce.add.products[g],A.products.push({id:f.id||f.uid||f.name,price:f.price?f.price:0}),A.total_price=a;T="add_to_cart"}else T="t-add-to-cart",r.ecommerce.add[0]&&r.ecommerce.add[0].uid&&(T+="-"+r.ecommerce.add[0].uid);else if("viewProduct"===r.event&&r.ecommerce.detail)if(a>0&&b>0){var f;A.currency_code=u;for(var y=r.ecommerce.detail.products.length,k=[],g=0;g<y;g++)f=r.ecommerce.detail.products[g],A.products.push({id:f.id||f.uid||f.name,price:f.price?f.price:0}),A.total_price=a;T="view_product"}else T="t-view-product",r.ecommerce.detail[0]&&r.ecommerce.detail[0].uid&&(T+="-"+r.ecommerce.detail[0].uid);else if("removeFromCart"===r.event&&r.ecommerce.remmove)if(a>0&&b>0){var f;A.currency_code=u;for(var y=r.ecommerce.remove.products.length,k=[],g=0;g<y;g++)f=r.ecommerce.remove.products[g],A.products.push({id:f.id||f.uid||f.name,price:f.price?f.price:0}),A.total_price=a;T="remove_from_cart"}else T="t-remove-product",r.ecommerce.remove[0]&&r.ecommerce.remove[0].uid&&(T+="-"+r.ecommerce.remove[0].uid);else T=r.event;else if(-1!==e.indexOf("tilda/")&&-1!==e.indexOf("/payment/"))T="t-purchase-"+(F=(F=(F=e.replace("/tilda/","")).replace("tilda/","")).replace("/payment/",""));else if(-1!==e.indexOf("tilda/")&&-1!==e.indexOf("/submitted/"))T="t-lead-"+(F=(F=(F=e.replace("/tilda/","")).replace("tilda/","")).replace("/submitted/",""));else if(-1!==e.indexOf("tilda/popup"))T="t-"+(F=(F=e.replace("/tilda/","")).replace("/","-"));else if(-1!==e.indexOf("tilda/click"))T="t-"+(F=(F=e.replace("/tilda/","")).replace("/","-"));else T="t-"+(F=e.replace("/","-"));b>0&&A&&A.currency_code?(VK.Retargeting.Event("purchase"),VK.Retargeting.ProductEvent(b,T,A)):(VK.Retargeting.Event(T),"t-purchase"===T.substring(0,10)?VK.Goal("purchase"):"t-lead"===T.substring(0,6)&&VK.Goal("lead"))}else VK.Retargeting.Event(e)}catch(x){}if(window.mainMailruId>"0"){var E=window._tmr||(window._tmr=[]);i?a>0?E.push({id:""+window.mainMailruId,type:"pageView",url:e,value:a,start:(new Date).getTime()}):E.push({id:""+window.mainMailruId,type:"pageView",url:e,start:(new Date).getTime()}):a>0?E.push({id:""+window.mainMailruId,type:"reachGoal",goal:e,value:a}):E.push({id:""+window.mainMailruId,type:"reachGoal",goal:e})}"function"==typeof window.tildastat&&(i?(e.indexOf("payment")>0&&e.indexOf("tilda/form")>-1&&(e=e.replace("tilda/form","tilda/rec")),window.tildastat("pageview",{page:e})):window.tildastat("pageview",{page:"/tilda/event/"+e}))},Tilda.saveUTM=function(){try{var e=window.location.href,t="",r="";if(-1!==e.toLowerCase().indexOf("utm_")&&"string"==typeof(t=(t=(e=e.toLowerCase()).split("?"))[1])){var a,i=t.split("&");for(var o in i)"amp;"===(a=i[o].split("="))[0].substring(0,4)&&(a[0]=a[0].substring(4)),"utm_"===a[0].substring(0,4)&&(r=r+i[o]+"|||");if(r.length>0){var c=new Date;c.setDate(c.getDate()+30),document.cookie="TILDAUTM="+encodeURIComponent(r)+"; path=/; expires="+c.toUTCString()}}}catch(d){}},"loading"!==document.readyState?e():document.addEventListener("DOMContentLoaded",e)}(),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.msMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.oMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(Element.prototype.matches.call(t,e))return t;t=t.parentElement||t.parentNode}return null});


/* === tilda-variant-select === */
function t_variants__translate(e){var t={checkboxes_hint:{RU:"*Отметьте один или несколько вариантов",EN:"*Select one or more options",DE:"*Wählen Sie eine oder mehrere Optionen",ES:"*Seleccione una o varias opciones",PT:"*Selecionar uma ou mais opções",FR:"*Sélectionner une ou plusieurs options",JA:"*1つ以上のオプションを選択",ZH:"*选择一个或多个选项",UK:"*Виберіть одну або декілька опцій",PL:"*Wybierz jedną lub więcej opcji",KK:"*Бір немесе бірнеше опцияны таңдаңыз",IT:"*Selezionare una o più opzioni",LV:"*Izvēlieties vienu vai vairākas opcijas"}};if(!t[e])return e;var n=t_variants__getLang()||"EN";return t[e][n]}function t_variants__getLang(){var e,t=document.getElementById("allrecords").getAttribute("data-tilda-project-lang"),n;return t||(window.navigator.userLanguage||window.navigator.language).toUpperCase().slice(0,2)}function t_variants__applyTranslation(e){var t=e.querySelector(".t-quiz__variants-hint");t&&(t.textContent=t_variants__translate("checkboxes_hint"))}!function(){function e(e,t){var n=document.getElementById("rec"+e);if(n){var a=n.querySelector('[data-input-lid="'+t+'"]');if(a){var r=a.querySelector(".t-checkboxes__hiddeninput"),i=a.querySelectorAll(".t-checkbox"),o=Array.from(i).filter((function(e){return e.checked})).map((function(e){return e.value})),l=r.value,c=o.join("; ");r.value=c,l!==c&&r.dispatchEvent(new Event("change",{bubbles:!0}))}}}function t(t,n){var a=document.getElementById("rec"+t);if(a){var r=a.querySelector('[data-input-lid="'+n+'"]');if(r){var i=r.querySelector(".t-checkboxes__ownvariant-wrapper"),o=i.querySelector(".t-input-ownanswer"),l="",c=r.querySelector(".t-input-block_rd-flex"),u=o.closest(".t-ownvariant-wrapper_flex").querySelector("span"),s=i.querySelector(".t-checkbox-ownanswer");s.setAttribute("data-own-variant-title",s.value),s.addEventListener("click",(function(){s.checked?(o.style.display="flex",o.classList.add("t-input-ownanswer_active"),o.focus(),u&&c&&(u.style.display="none")):(o.classList.remove("t-input-ownanswer_active"),o.value.trim()||(o.style.display="none"))})),o.addEventListener("input",(function(){l=o.value})),o.addEventListener("focus",(function(){u&&c&&(u.style.display="none")})),o.addEventListener("blur",(function(){var a=""!==l.trim()?": "+l:"",r=s.getAttribute("data-own-variant-title");s.value=r+a,""===l.trim()&&(o.style.display="none"),u&&c&&(u.style.display="block"),e(t,n)})),s.addEventListener("reset",(function(){l="",o.value="",o.style.display="none"}))}}}function n(n,a){var r=document.getElementById("rec"+n);if(r){var i=r.querySelector('[data-input-lid="'+a+'"]');if(i){var o=i.querySelectorAll(".t-checkbox__control"),l;Array.prototype.forEach.call(o,(function(t){t.addEventListener("click",(function(){e(n,a)}))})),e(n,a),i.querySelector(".t-checkboxes__ownvariant-wrapper")&&t(n,a),t_variants__applyTranslation(i),i.dispatchEvent(new CustomEvent("inputReady")),i.setAttribute("data-input-ready","true")}}}function a(e){var t="",n=e.querySelector(".t-radio__ownvariant-wrapper"),a=n.querySelector(".t-input-ownanswer"),r=e.querySelector(".t-input-block_rd-flex"),i=a.closest(".t-ownvariant-wrapper_flex").querySelector("span"),o=n.querySelector(".t-radio-ownanswer");o.setAttribute("data-own-variant-title",o.value),o.addEventListener("click",(function(){o.checked&&(a.style.display="flex",a.classList.add("t-input-ownanswer_active"),a.focus(),i&&r&&(i.style.display="none"))}));var l=e.querySelectorAll(".t-radio:not(.t-radio-ownanswer)");Array.prototype.forEach.call(l,(function(e){e.addEventListener("click",(function(){a.classList.remove("t-input-ownanswer_active"),a.value.trim()||(a.style.display="none")}))})),a.addEventListener("input",(function(){t=a.value})),a.addEventListener("focus",(function(){i&&r&&(i.style.display="none")})),a.addEventListener("blur",(function(){var e=o.getAttribute("data-own-variant-title"),n=t.trim();n?o.value=e+": "+n:(o.value=e,a.style.display="none"),i&&r&&(i.style.display="block"),o.dispatchEvent(new Event("change",{bubbles:!0}))})),o.addEventListener("reset",(function(){a.value="",a.style.display="none"}))}function r(e,t){var n=document.getElementById("rec"+e);if(n){var r=n.querySelector('[data-input-lid="'+t+'"]'),i;if(r)r.querySelector(".t-radio__ownvariant-wrapper")&&a(r),r.dispatchEvent(new CustomEvent("inputReady")),r.setAttribute("data-input-ready","true")}}window.t_input_checkboxes_init=n,window.t_input_radiobuttons_init=r}();


} catch(e) { console.warn('Tilda lib:', e); }

/* ════════════════════════════════════════════════════════════
   PART 2 — BLOCK INITIALISERS
   ════════════════════════════════════════════════════════════ */
function t_onReady(func) {if(document.readyState!='loading') {func();} else {document.addEventListener('DOMContentLoaded',func);}}
function t_onFuncLoad(funcName,okFunc,time) {if(typeof window[funcName]==='function') {okFunc();} else {setTimeout(function() {t_onFuncLoad(funcName,okFunc,time);},(time||100));}}function t396_initialScale(t){var e=document.getElementById("rec"+t);if(e){var i=e.querySelector(".t396__artboard");if(i){window.tn_scale_initial_window_width||(window.tn_scale_initial_window_width=document.documentElement.clientWidth);var a=window.tn_scale_initial_window_width,r=[],n,l=i.getAttribute("data-artboard-screens");if(l){l=l.split(",");for(var o=0;o<l.length;o++)r[o]=parseInt(l[o],10)}else r=[320,480,640,960,1200];for(var o=0;o<r.length;o++){var d=r[o];a>=d&&(n=d)}var _="edit"===window.allrecords.getAttribute("data-tilda-mode"),c="center"===t396_getFieldValue(i,"valign",n,r),s="grid"===t396_getFieldValue(i,"upscale",n,r),w=t396_getFieldValue(i,"height_vh",n,r),g=t396_getFieldValue(i,"height",n,r),u=!!window.opr&&!!window.opr.addons||!!window.opera||-1!==navigator.userAgent.indexOf(" OPR/");if(!_&&c&&!s&&!w&&g&&!u){var h=parseFloat((a/n).toFixed(3)),f=[i,i.querySelector(".t396__carrier"),i.querySelector(".t396__filter")],v=Math.floor(parseInt(g,10)*h)+"px",p;i.style.setProperty("--initial-scale-height",v);for(var o=0;o<f.length;o++)f[o].style.setProperty("height","var(--initial-scale-height)");t396_scaleInitial__getElementsToScale(i).forEach((function(t){t.style.zoom=h}))}}}}function t396_scaleInitial__getElementsToScale(t){return t?Array.prototype.slice.call(t.children).filter((function(t){return t&&(t.classList.contains("t396__elem")||t.classList.contains("t396__group"))})):[]}function t396_getFieldValue(t,e,i,a){var r,n=a[a.length-1];if(!(r=i===n?t.getAttribute("data-artboard-"+e):t.getAttribute("data-artboard-"+e+"-res-"+i)))for(var l=0;l<a.length;l++){var o=a[l];if(!(o<=i)&&(r=o===n?t.getAttribute("data-artboard-"+e):t.getAttribute("data-artboard-"+e+"-res-"+o)))break}return r}window.TN_SCALE_INITIAL_VER="1.0",window.tn_scale_initial_window_width=null;

window.dataLayer=window.dataLayer||[];

(function() {if((/bot|google|yandex|baidu|bing|msn|duckduckbot|teoma|slurp|crawler|spider|robot|crawling|facebook/i.test(navigator.userAgent))===false&&typeof(sessionStorage)!='undefined'&&sessionStorage.getItem('visited')!=='y'&&document.visibilityState){var style=document.createElement('style');style.type='text/css';style.innerHTML='@media screen and (min-width: 980px) {.t-records {opacity: 0;}.t-records_animated {-webkit-transition: opacity ease-in-out .2s;-moz-transition: opacity ease-in-out .2s;-o-transition: opacity ease-in-out .2s;transition: opacity ease-in-out .2s;}.t-records.t-records_visible {opacity: 1;}}';document.getElementsByTagName('head')[0].appendChild(style);function t_setvisRecs(){var alr=document.querySelectorAll('.t-records');Array.prototype.forEach.call(alr,function(el) {el.classList.add("t-records_animated");});setTimeout(function() {Array.prototype.forEach.call(alr,function(el) {el.classList.add("t-records_visible");});sessionStorage.setItem("visited","y");},400);}
document.addEventListener('DOMContentLoaded',t_setvisRecs);}})();

// Force a clean restart when Chrome restores a stale tab/session.
var VP_SESSION_RESTORE = {
  suspendedAtKey: 'vp-session-suspended-at',
  reloadingKey: 'vp-session-reloading',
  restoreThresholdMs: 30000
};

function vpGetSessionValue(key) {
  try {
    return typeof sessionStorage !== 'undefined' ? sessionStorage.getItem(key) : null;
  } catch (error) {
    return null;
  }
}

function vpSetSessionValue(key, value) {
  try {
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem(key, value);
    }
  } catch (error) {}
}

function vpRemoveSessionValue(key) {
  try {
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.removeItem(key);
    }
  } catch (error) {}
}

function vpMarkSessionSuspended() {
  vpSetSessionValue(VP_SESSION_RESTORE.suspendedAtKey, String(Date.now()));
}

function vpPrepareFreshSessionReload() {
  if (vpGetSessionValue(VP_SESSION_RESTORE.reloadingKey) === 'y') return false;

  vpSetSessionValue(VP_SESSION_RESTORE.reloadingKey, 'y');
  vpRemoveSessionValue('visited');
  vpRemoveSessionValue(VP_SESSION_RESTORE.suspendedAtKey);
  return true;
}

function vpClearSessionSuspendMarker() {
  vpRemoveSessionValue(VP_SESSION_RESTORE.suspendedAtKey);
  vpRemoveSessionValue(VP_SESSION_RESTORE.reloadingKey);
}

function vpShouldReloadFreshSession(event) {
  if (document.visibilityState === 'hidden') return false;
  if (event && event.type === 'pageshow' && event.persisted) return true;
  if (document.wasDiscarded === true) return true;

  var suspendedAt = parseInt(vpGetSessionValue(VP_SESSION_RESTORE.suspendedAtKey), 10);
  if (isNaN(suspendedAt)) return false;

  return Date.now() - suspendedAt >= VP_SESSION_RESTORE.restoreThresholdMs;
}

function vpHandleSessionRestore(event) {
  if (!vpShouldReloadFreshSession(event)) {
    vpClearSessionSuspendMarker();
    return;
  }

  if (!vpPrepareFreshSessionReload()) return;
  window.location.reload();
}

(function vpInitSessionRestoreGuard() {
  vpHandleSessionRestore();
  window.addEventListener('pageshow', vpHandleSessionRestore);
  window.addEventListener('pagehide', vpMarkSessionSuspended);
  window.addEventListener('beforeunload', vpMarkSessionSuspended);
  window.addEventListener('focus', function() {
    if (!document.hidden) {
      vpHandleSessionRestore();
    }
  });
  document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
      vpHandleSessionRestore();
    }
  });
  document.addEventListener('freeze', vpMarkSessionSuspended);
})();

t_onReady(function() {t_onFuncLoad('t396_init',function() {t396_init('2052880283');});});

var VP_OPENING_STAGE = {
  recId: '2052880283',
  artboardWidth: 1200,
  artboardHeight: 850,
  envelopeWidth: 1012,
  envelopeHeight: 865
};

function vpApplyDesktopArtboardLayout(record) {
  if (!record) return null;

  var artboard = record.querySelector('.t396__artboard');
  var carrier = record.querySelector('.t396__carrier');
  var filter = record.querySelector('.t396__filter');
  var wrapper = record.querySelector('.t396');
  var elements = record.querySelectorAll('.tn-elem');

  Array.prototype.forEach.call(elements, function(elem) {
    var top = elem.getAttribute('data-field-top-value');
    var left = elem.getAttribute('data-field-left-value');
    var width = elem.getAttribute('data-field-width-value');
    var height = elem.getAttribute('data-field-height-value');
    var elemType = elem.getAttribute('data-elem-type');
    var heightMode = elem.getAttribute('data-field-heightmode-value');

    if (top !== null) elem.style.top = top + 'px';
    if (left !== null) elem.style.left = left + 'px';
    if (width !== null) elem.style.width = width + 'px';

    if (height !== null) {
      if (heightMode === 'fixed' || elemType === 'shape' || elemType === 'html') {
        elem.style.height = height + 'px';
      } else if (heightMode === 'hug' || elemType === 'image' || elemType === 'text' || elemType === 'button') {
        elem.style.height = 'auto';
      }
    }
  });

  return {
    artboard: artboard,
    carrier: carrier,
    filter: filter,
    wrapper: wrapper
  };
}

function vpGetViewportHeight() {
  var heightCandidates = [
    window.innerHeight,
    document.documentElement ? document.documentElement.clientHeight : 0
  ];

  if (window.visualViewport && window.visualViewport.height) {
    heightCandidates.push(window.visualViewport.height);
  }

  return heightCandidates.reduce(function(maxHeight, candidate) {
    var normalizedCandidate = Math.round(Number(candidate) || 0);
    return normalizedCandidate > maxHeight ? normalizedCandidate : maxHeight;
  }, 0) || VP_OPENING_STAGE.artboardHeight;
}

function vpSetRuntimeViewportHeight(viewportHeight) {
  var normalizedHeight = Math.max(Math.round(Number(viewportHeight) || 0), 1);
  var cssHeight = normalizedHeight + 'px';

  document.documentElement.style.setProperty('--vp-runtime-viewport-height', cssHeight);
  if (document.body) {
    document.body.style.setProperty('--vp-runtime-viewport-height', cssHeight);
  }
}

function vpUpdateOpeningStage() {
  var config = VP_OPENING_STAGE;
  var record = document.getElementById('rec' + config.recId);
  var parts = vpApplyDesktopArtboardLayout(record);
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth || config.artboardWidth;
  var viewportHeight = vpGetViewportHeight();
  var aspectRatio = viewportWidth / Math.max(viewportHeight, 1);
  var sideStrip = viewportWidth < 480 ? 0 : viewportWidth < 768 ? 18 : viewportWidth < 1200 ? 32 : 48;
  var scaleByWidth = Math.max(viewportWidth - sideStrip * 2, 0) / config.envelopeWidth;
  var scaleByHeight = viewportHeight / config.envelopeHeight;
  var cropAllowance = viewportHeight < 520 ? 1.72 : aspectRatio > 1.55 ? 1.38 : 1.2;
  var scale = Math.max(scaleByHeight, Math.min(scaleByWidth, scaleByHeight * cropAllowance));
  var ctaScale = scale < 0.9 ? Math.min(1.22, 0.92 / scale) : 1;

  if (!record || !parts || !parts.artboard) return;

  vpSetRuntimeViewportHeight(viewportHeight);
  record.style.setProperty('--vp-opening-scale', scale.toFixed(4));
  record.style.setProperty('--vp-opening-stage-height', viewportHeight + 'px');
  record.style.setProperty('--vp-opening-cta-scale', ctaScale.toFixed(3));

  if (parts.artboard) parts.artboard.style.height = config.artboardHeight + 'px';
  if (parts.carrier) parts.carrier.style.height = config.artboardHeight + 'px';
  if (parts.filter) parts.filter.style.height = config.artboardHeight + 'px';
  if (parts.wrapper) parts.wrapper.style.height = viewportHeight + 'px';

  record.style.height = viewportHeight + 'px';
  record.style.minHeight = viewportHeight + 'px';
}

function vpScheduleOpeningStageUpdate() {
  window.requestAnimationFrame(vpUpdateOpeningStage);
}

t_onReady(function() {
  vpUpdateOpeningStage();
  window.setTimeout(vpScheduleOpeningStageUpdate, 0);
  window.setTimeout(vpScheduleOpeningStageUpdate, 320);
  window.addEventListener('resize', vpScheduleOpeningStageUpdate);
  window.addEventListener('orientationchange', vpScheduleOpeningStageUpdate);
  window.addEventListener('load', vpScheduleOpeningStageUpdate);
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', vpScheduleOpeningStageUpdate);
  }
});

t_onReady(function() {t_onFuncLoad('t396_init',function() {t396_init('2049114373');});});

t_onReady(function() {t_onFuncLoad('t396_init',function() {t396_init('2002273681');});});

const eventLocal = new Date(2026, 10, 20, 0, 0, 0);

function vpUpdateCountdown() {
  var countdownContainer = document.getElementById('countdownContainer');
  var days = document.getElementById('days');
  var hours = document.getElementById('hours');
  var minutes = document.getElementById('minutes');
  var seconds = document.getElementById('seconds');

  if (!countdownContainer || !days || !hours || !minutes || !seconds) return false;

  var now = new Date();
  var distance = eventLocal - now;

  if (distance < 0) {
    countdownContainer.innerHTML =
      document.body && document.body.getAttribute('data-language') === 'gu'
        ? 'સમય પૂર્ણ થયો'
        : 'EXPIRED';
    return true;
  }

  days.textContent = vpLocalizeActiveDigits(String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0'));
  hours.textContent = vpLocalizeActiveDigits(String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'));
  minutes.textContent = vpLocalizeActiveDigits(String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'));
  seconds.textContent = vpLocalizeActiveDigits(String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0'));

  return false;
}

vpUpdateCountdown();
const interval = setInterval(function() {
  if (vpUpdateCountdown()) {
    clearInterval(interval);
  }
}, 1000);

t_onReady(function() {t_onFuncLoad('t396_init',function() {t396_init('2002274581');});});

t_onReady(function() {t_onFuncLoad('t396_init',function() {t396_init('2002506421');});});

t_onReady(function() {t_onFuncLoad('t396_init',function() {t396_init('2002802231');});});

t_onReady(function() {t_onFuncLoad('t396_init',function() {t396_init('2003451831');});});

t_onReady(function() {t_onFuncLoad('t396_init',function() {t396_init('2003555721');});});

t_onReady(function() {t_onFuncLoad('t396_init',function() {t396_init('2003860951');});});

t_onReady(function() {var rec=document.getElementById('rec2003860951');if(!rec) return;var buttons=rec.querySelectorAll('[data-animate-btn-effect] .tn-atom');Array.prototype.forEach.call(buttons,function(button) {var buttonEffect=button.querySelector('.t-btn_wrap-effects');if(!buttonEffect) {button.insertAdjacentHTML('beforeend','<div class="t-btn_wrap-effects"><div class="t-btn_effects"></div></div>');buttonEffect=button.querySelector('.t-btn_wrap-effects');};if(button.offsetWidth>230) {buttonEffect.classList.add('t-btn_wrap-effects_md');};if(button.offsetWidth>750) {buttonEffect.classList.remove('t-btn_wrap-effects_md');buttonEffect.classList.add('t-btn_wrap-effects_lg');}});});

t_onReady(function() {t_onFuncLoad('t_loadJsFile',function() {t_loadJsFile('https://static.tildacdn.net/js/tilda-variant-select-1.0.min.js',function() {t_onFuncLoad('t_input_checkboxes_init',function() {t_input_checkboxes_init('2052858183','5828866651121');})})});});

t_onReady(function() {t_onFuncLoad('t702_initPopup',function() {t702_initPopup('2052858183');});});

t_onReady(function() {window.setTimeout(function() {var rec=document.getElementById('rec2052858183');if(!rec) return;var firstButton=rec.querySelectorAll('.t-btn[data-btneffects-first], .t-submit[data-btneffects-first]');Array.prototype.forEach.call(firstButton,function(button) {var buttonEffect=button.querySelector('.t-btn_wrap-effects');if(!buttonEffect) {button.insertAdjacentHTML('beforeend','<div class="t-btn_wrap-effects"><div class="t-btn_effects"></div></div>');buttonEffect=button.querySelector('.t-btn_wrap-effects');};if(button.offsetWidth>230) {buttonEffect.classList.add('t-btn_wrap-effects_md');};if(button.offsetWidth>750) {buttonEffect.classList.remove('t-btn_wrap-effects_md');buttonEffect.classList.add('t-btn_wrap-effects_lg');}});},1000);});

t_onReady(function() {t_onFuncLoad('t396_init',function() {t396_init('2003869491');});});

if(!window.mainTracker) {window.mainTracker='tilda';}
window.tildastatcookie='no';setTimeout(function(){(function(d,w,k,o,g) {var n=d.getElementsByTagName(o)[0],s=d.createElement(o),f=function(){n.parentNode.insertBefore(s,n);};s.type="text/javascript";s.async=true;s.key=k;s.id="tildastatscript";s.src=g;if(w.opera=="[object Opera]") {d.addEventListener("DOMContentLoaded",f,false);} else {f();}})(document,window,'f1858a1c1e1fba20f7e23d6ee739727b','script','https://static.tildacdn.net/js/tilda-stat-1.0.min.js');},2000);

/* ════════════════════════════════════════════════════════════
   PART 3 — CUSTOM
   ════════════════════════════════════════════════════════════ */

/* ════════════════════════════════════════════════════════════════
   CUSTOM — Local Background Music
   ════════════════════════════════════════════════════════════════ */
var vpBackgroundAudio = new Audio('assets/music/nastelbom-romantic-454545.mp3');
vpBackgroundAudio.loop = true;
vpBackgroundAudio.preload = 'auto';
var vpBackgroundAudioHasStarted = false;
var vpBackgroundAudioMediaSessionReady = false;

function vpSyncBackgroundAudioMediaSessionState() {
  if (typeof navigator === 'undefined' || !('mediaSession' in navigator)) return;

  try {
    navigator.mediaSession.playbackState = vpBackgroundAudio.paused ? 'paused' : 'playing';
  } catch (error) {}
}

function vpSetBackgroundAudioMediaActionHandler(action, handler) {
  if (typeof navigator === 'undefined' || !('mediaSession' in navigator)) return;
  if (typeof navigator.mediaSession.setActionHandler !== 'function') return;

  try {
    navigator.mediaSession.setActionHandler(action, handler);
  } catch (error) {}
}

function vpRegisterBackgroundAudioMediaSession() {
  if (typeof navigator === 'undefined' || !('mediaSession' in navigator)) return;

  if ('MediaMetadata' in window) {
    try {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: 'Palak and Shubham',
        artist: 'Wedding Invitation',
        album: 'Palak and Shubham'
      });
    } catch (error) {}
  }

  if (!vpBackgroundAudioMediaSessionReady) {
    vpSetBackgroundAudioMediaActionHandler('play', function() {
      vpStartBackgroundAudio();
    });
    vpSetBackgroundAudioMediaActionHandler('pause', function() {
      vpPauseBackgroundAudio();
    });
    vpSetBackgroundAudioMediaActionHandler('stop', function() {
      vpPauseBackgroundAudio();
      vpBackgroundAudio.currentTime = 0;
      vpSyncBackgroundAudioMediaSessionState();
    });
    vpBackgroundAudioMediaSessionReady = true;
  }

  vpSyncBackgroundAudioMediaSessionState();
}

function vpStartBackgroundAudio(options) {
  var shouldRestart = options && options.restart === true;

  if (shouldRestart) {
    vpBackgroundAudio.currentTime = 0;
  }

  vpBackgroundAudioHasStarted = true;
  vpRegisterBackgroundAudioMediaSession();

  return vpBackgroundAudio.play().catch(function(error) {
    console.warn('Background audio could not start automatically.', error);
  });
}

function vpPauseBackgroundAudio() {
  if (!vpBackgroundAudio.paused) {
    vpBackgroundAudio.pause();
  }

  vpSyncBackgroundAudioMediaSessionState();
}

vpBackgroundAudio.addEventListener('play', vpSyncBackgroundAudioMediaSessionState);
vpBackgroundAudio.addEventListener('pause', vpSyncBackgroundAudioMediaSessionState);
vpBackgroundAudio.addEventListener('ended', vpSyncBackgroundAudioMediaSessionState);
vpRegisterBackgroundAudioMediaSession();

document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    vpPauseBackgroundAudio();
  }
});

window.addEventListener('blur', vpPauseBackgroundAudio);
window.addEventListener('pagehide', vpPauseBackgroundAudio);

/* ════════════════════════════════════════════════════════════════
   CUSTOM — RSVP → Google Sheets
   ─────────────────────────────────────────────────────────────
   Standalone mode: this bypasses Tilda's built-in form receiver,
   so RSVP can be submitted from localhost and any deployed domain.
   1. Open google-apps-script.gs in this project
   2. Create an Apps Script project connected to your Google account
   3. Paste that file there and deploy as Web App with access set to Anyone
   4. Paste the Web App URL below
   Note: your Google Sheet sharing link is not a writable API endpoint
   ════════════════════════════════════════════════════════════════ */
var VP_SHEET_URL = "https://script.google.com/macros/s/AKfycbx6ADP68xhzYbTQ0YcdEXrozPrkZ7Yoj6nsmdUVbuHqNmhmjmYBkS7LeyAYjEZsnZNE/exec";

document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('form2052858183');
  if (!form) return;
  form.setAttribute('novalidate', 'novalidate');
  var foodGroup = form.querySelector('[data-input-lid="5828866651122"]');
  if (foodGroup) foodGroup.remove();

  var submitBtn = form.querySelector('[type="submit"]');
  var submitLabel = submitBtn ? submitBtn.querySelector('.t-btnflex__text') : null;
  var popupContainer = document.querySelector('#rec2052858183 .t-popup__container');
  var popupDescription = document.querySelector('#rec2052858183 .t702__descr');
  var availabilityInputs = Array.prototype.slice.call(form.querySelectorAll('input.t-checkbox'));

  availabilityInputs.forEach(function(input) {
    input.addEventListener('change', function() {
      if (!input.checked) return;
      availabilityInputs.forEach(function(other) {
        if (other !== input) other.checked = false;
      });
    });
  });

  function setSubmitText(text) {
    if (submitLabel) {
      submitLabel.textContent = text;
    } else if (submitBtn) {
      submitBtn.textContent = text;
    }
  }

  function setDeadlineMessageVisible(isVisible) {
    if (!popupDescription) return;
    popupDescription.style.display = isVisible ? '' : 'none';
  }

  function setSuccessState(isSuccess) {
    if (!popupContainer) return;
    popupContainer.classList.toggle('vp-rsvp-success-state', !!isSuccess);
  }

  setDeadlineMessageVisible(true);
  setSuccessState(false);

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    e.stopPropagation();

    var name = ((form.querySelector('input[name="Your name"]') || {}).value || '').trim();
    var selectedAvailability = form.querySelector('input.t-checkbox:checked');
    var availability = selectedAvailability ? selectedAvailability.value : '';
    var successBox = form.querySelector('.js-successbox');
    var inputsBox = form.querySelector('.t-form__inputsbox');

    if (!name || !availability) {
      alert('Please enter your name and availability.');
      return;
    }

    if (VP_SHEET_URL === 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE') {
      if (successBox) {
        successBox.style.display = 'block';
        successBox.innerHTML = '<p>Please connect the Google Apps Script Web App URL in script.js before using RSVP.</p>';
      }
      return;
    }

    if (successBox) successBox.style.display = 'none';
    if (submitBtn) {
      submitBtn.disabled = true;
      setSubmitText('Sending...');
    }

    fetch(VP_SHEET_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        name: name,
        availability: availability
      })
    }).then(function(){
      if (successBox) {
        successBox.style.display = 'block';
        successBox.innerHTML = '<div class="vp-rsvp-success-card" role="status"><div class="vp-rsvp-success-badge" aria-hidden="true">✓</div><div class="vp-rsvp-success-copy"><strong>Thank you!</strong><span>We look forward to celebrating with you.</span></div></div>';
      }
      setDeadlineMessageVisible(false);
      if (inputsBox) inputsBox.style.display = 'none';
      setSuccessState(true);
    }).catch(function(){
      if (submitBtn) {
        submitBtn.disabled = false;
        setSubmitText('Submit');
      }
      alert('Something went wrong. Please try again.');
    });
  });
});

var VP_EVENT_TIMELINE_CONTENT = {
  en: {
    title: 'Event Timeline',
    items: [
      { text: '19 Nov 8 pm - Sangeet and Cocktail Night', x: '7.45%', y: '0.97%', width: '60.00%', dotX: 5, dotY: 25 },
      { text: '20 Nov 10 am - Haldi', x: '39.36%', y: '23.74%', width: '50.00%', dotX: 150, dotY: 143 },
      { text: '20 Nov 7 pm - Shadi Night', x: '43.62%', y: '37.16%', width: '42.00%', dotX: 167, dotY: 207 }
    ]
  },
  gu: {
    title: 'ઇવેન્ટ ટાઇમલાઇન',
    items: [
      { text: '૧૯ નવેમ્બર સાંજે ૮ વાગ્યે - સંગીત અને કોકટેલ નાઇટ', x: '7.45%', y: '0.97%', width: '60.00%', dotX: 5, dotY: 25 },
      { text: '૨૦ નવેમ્બર સવારે ૧૦ વાગ્યે - હળદી', x: '39.36%', y: '23.74%', width: '50.00%', dotX: 150, dotY: 143 },
      { text: '૨૦ નવેમ્બર સાંજે ૭ વાગ્યે - લગ્ન રાત્રિ', x: '43.62%', y: '37.16%', width: '42.00%', dotX: 167, dotY: 207 }
    ]
  }
};

var VP_EVENT_TIMELINE_VIEWBOX = {
  width: 440,
  height: 514
};

function vpGetEventTimelineStops(count) {
  if (count <= 1) return [0.36];
  if (count === 3) return [0.28, 0.43, 0.58];

  var start = 0.14;
  var end = 0.7;
  var step = (end - start) / (count - 1);

  return Array.from({ length: count }, function(_, index) {
    return start + (step * index);
  });
}

function vpGetEventTimelineLayout(path, items) {
  if (!path || !items || !items.length) return [];

  var totalLength = path.getTotalLength();
  var stops = vpGetEventTimelineStops(items.length);

  return stops.map(function(stop) {
    var point = path.getPointAtLength(totalLength * stop);
    var itemLeft = Math.min(point.x + 26, VP_EVENT_TIMELINE_VIEWBOX.width - 150);
    var itemWidth = Math.max(120, VP_EVENT_TIMELINE_VIEWBOX.width - itemLeft - 14);

    return {
      dotX: point.x.toFixed(2),
      dotY: point.y.toFixed(2),
      itemLeft: ((itemLeft / VP_EVENT_TIMELINE_VIEWBOX.width) * 100).toFixed(2) + '%',
      itemTop: ((point.y / VP_EVENT_TIMELINE_VIEWBOX.height) * 100).toFixed(2) + '%',
      itemWidth: ((itemWidth / VP_EVENT_TIMELINE_VIEWBOX.width) * 100).toFixed(2) + '%'
    };
  });
}

function vpCreateEventTimelineMarkup() {
  return [
    '<section class="vp-event-timeline" aria-label="Event Timeline">',
    '  <h2 class="vp-event-timeline__title" data-role="title"></h2>',
    '  <div class="vp-event-timeline__canvas">',
    '    <div class="vp-event-timeline__stage">',
    '    <svg class="vp-event-timeline__svg" viewBox="0 0 440 514" aria-hidden="true">',
    '      <path id="vpTimelinePath" d="M0.982 0.982C0.982 16.704 6.951 28.707 16.205 40.759C23.71 50.533 37.43 74.926 45.67 84.464C54.846 95.087 56.964 101.727 56.964 115.893C56.964 124.63 53.603 129.897 45.67 133.571C37.883 137.177 28.23 135.004 24.063 127.188C16.933 113.817 21.783 104.392 30.938 93.795C42.05 80.931 53.124 80.045 68.75 80.045C81.108 80.045 99.246 84.636 108.036 93.795C116.875 100.179 122.255 104.779 129.152 111.964C136.161 119.267 133.067 117.774 139.464 125.223C146.181 133.044 156.221 158.172 159.107 167.946C161.994 177.72 161.529 181.249 164.509 188.08C167.489 194.912 168.929 220.948 168.929 228.348C168.929 240.295 164.602 249.531 159.107 259.777C148.924 278.762 122.068 290.648 103.71 299.151C84.242 308.165 65.053 322.236 61.384 343.259C57.146 367.545 79.299 383.794 103.185 392.091C128.896 401.019 157.847 403.071 184.835 405.321C237.96 409.75 291.65 416.24 343.725 429.049C378.464 437.594 431.124 462.717 439.018 503.839" fill="none" stroke="#9bb7a1" stroke-width="2" stroke-linecap="round" stroke-dasharray="6 6"></path>',
    '      <g data-role="dots"></g>',
    '      <g id="vpTimelinePlaneGroup" class="vp-event-timeline__plane-group">',
    '        <image class="vp-event-timeline__plane" href="assets/images/timeline-plane.webp" x="-22" y="-22" width="44" height="44" preserveAspectRatio="xMidYMid meet"></image>',
    '      </g>',
    '    </svg>',
    '    <div data-role="items"></div>',
    '    </div>',
    '  </div>',
    '</section>'
  ].join('');
}

function vpEnsureEventTimeline() {
  var rec = document.getElementById('rec2002506421');
  if (!rec) return null;

  var artboard = rec.querySelector('.t396__artboard');
  if (!artboard) return null;

  var timeline = artboard.querySelector('.vp-event-timeline');
  if (!timeline) {
    artboard.insertAdjacentHTML('beforeend', vpCreateEventTimelineMarkup());
    timeline = artboard.querySelector('.vp-event-timeline');
    vpInitEventTimelineAnimation(timeline);
  }

  return timeline;
}

function vpBuildEventTimelineItems(items, layout) {
  return items.map(function(item, index) {
    var position = layout[index] || {
      itemLeft: '18%',
      itemTop: '20%',
      itemWidth: '60%'
    };

    return [
      '<article class="vp-event-timeline__item" style="--item-x:', position.itemLeft, ';--item-y:', position.itemTop, ';--item-width:', position.itemWidth, ';">',
      '  <span class="vp-event-timeline__item-text">', item.text, '</span>',
      '</article>'
    ].join('');
  }).join('');
}

function vpBuildEventTimelineDots(layout) {
  return layout.map(function(position) {
    return '<circle class="vp-event-timeline__dot" cx="' + position.dotX + '" cy="' + position.dotY + '" r="4"></circle>';
  }).join('');
}

function vpRenderEventTimeline(lang) {
  var timeline = vpEnsureEventTimeline();
  if (!timeline) return;

  var content = VP_EVENT_TIMELINE_CONTENT[lang] || VP_EVENT_TIMELINE_CONTENT.en;
  var title = timeline.querySelector('[data-role="title"]');
  var dots = timeline.querySelector('[data-role="dots"]');
  var items = timeline.querySelector('[data-role="items"]');
  var path = timeline.querySelector('#vpTimelinePath');
  var layout = vpGetEventTimelineLayout(path, content.items);

  if (title) title.textContent = content.title;
  if (dots) dots.innerHTML = vpBuildEventTimelineDots(layout);
  if (items) items.innerHTML = vpBuildEventTimelineItems(content.items, layout);
  if (typeof timeline.vpTimelineRefresh === 'function') timeline.vpTimelineRefresh();
}

function vpInitEventTimelineAnimation(timeline) {
  if (!timeline || timeline.dataset.timelineReady === 'true') return;

  var path = timeline.querySelector('#vpTimelinePath');
  var planeGroup = timeline.querySelector('#vpTimelinePlaneGroup');
  if (!path || !planeGroup) return;

  timeline.dataset.timelineReady = 'true';

  var totalLength = path.getTotalLength();
  var rafId = 0;
  var isAnimating = false;
  var timelineTop = 0;
  var timelineHeight = 0;
  var currentProgress = 0;
  var targetProgress = 0;
  var sampleCount = Math.max(120, Math.round(totalLength / 3));
  var pathSamples = [];
  var smoothFactor = window.matchMedia('(pointer: coarse)').matches ? 0.22 : 0.3;
  var planeConfig = {
    width: 44,
    height: 44,
    trackBodyX: 23,
    trackBodyY: 23,
    trackTipX: 35,
    trackTipY: 11
  };
  var planeCenter = {
    x: planeConfig.width / 2,
    y: planeConfig.height / 2
  };
  var planeBodyOffset = {
    x: planeConfig.trackBodyX - planeCenter.x,
    y: planeConfig.trackBodyY - planeCenter.y
  };
  var planeTipOffset = {
    x: planeConfig.trackTipX - planeCenter.x,
    y: planeConfig.trackTipY - planeCenter.y
  };
  var planeGuideVector = {
    x: planeTipOffset.x - planeBodyOffset.x,
    y: planeTipOffset.y - planeBodyOffset.y
  };
  var planeGuideAngle = Math.atan2(planeGuideVector.y, planeGuideVector.x);
  var planeGuideLength = Math.sqrt((planeGuideVector.x * planeGuideVector.x) + (planeGuideVector.y * planeGuideVector.y));

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function ease(progress) {
    return progress * progress * (3 - 2 * progress);
  }

  function getPageScrollY() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }

  function getViewportHeight() {
    if (window.visualViewport && window.visualViewport.height) {
      return Math.round(window.visualViewport.height);
    }

    return window.innerHeight || document.documentElement.clientHeight || 1;
  }

  function buildPlaneSample(progress) {
    var length = totalLength * progress;
    var bodyPoint = path.getPointAtLength(length);
    var tipPoint = path.getPointAtLength(Math.min(totalLength, length + planeGuideLength));
    var worldGuideAngle = Math.atan2(tipPoint.y - bodyPoint.y, tipPoint.x - bodyPoint.x);
    var rotationInRadians = worldGuideAngle - planeGuideAngle;
    var rotation = rotationInRadians * 180 / Math.PI;
    var offsetX = planeBodyOffset.x * Math.cos(rotationInRadians) - planeBodyOffset.y * Math.sin(rotationInRadians);
    var offsetY = planeBodyOffset.x * Math.sin(rotationInRadians) + planeBodyOffset.y * Math.cos(rotationInRadians);

    return {
      progress: progress,
      x: bodyPoint.x - offsetX,
      y: bodyPoint.y - offsetY,
      rotation: rotation
    };
  }

  function rebuildPathSamples() {
    pathSamples = [];

    for (var index = 0; index <= sampleCount; index += 1) {
      pathSamples.push(buildPlaneSample(index / sampleCount));
    }
  }

  function interpolateAngle(start, end, progress) {
    var delta = ((end - start + 540) % 360) - 180;
    return start + (delta * progress);
  }

  function positionPlane(progress) {
    var boundedProgress = clamp(progress, 0, 1);
    var scaledIndex = boundedProgress * sampleCount;
    var baseIndex = Math.floor(scaledIndex);
    var nextIndex = Math.min(sampleCount, baseIndex + 1);
    var localProgress = scaledIndex - baseIndex;
    var from = pathSamples[baseIndex] || pathSamples[0];
    var to = pathSamples[nextIndex] || from;
    var centerX = from.x + ((to.x - from.x) * localProgress);
    var centerY = from.y + ((to.y - from.y) * localProgress);
    var rotation = interpolateAngle(from.rotation, to.rotation, localProgress);

    planeGroup.setAttribute('transform', 'translate(' + centerX.toFixed(2) + ' ' + centerY.toFixed(2) + ') rotate(' + rotation.toFixed(2) + ')');
  }

  function measureTimeline() {
    var rect = timeline.getBoundingClientRect();
    timelineTop = rect.top + getPageScrollY();
    timelineHeight = rect.height || timeline.offsetHeight || 1;
  }

  function updateTargetProgress() {
    var viewportHeight = getViewportHeight();
    var rawProgress = ((getPageScrollY() + viewportHeight) - timelineTop) / (viewportHeight + timelineHeight);
    targetProgress = ease(clamp(rawProgress, 0, 1));
  }

  function renderTimeline() {
    var delta = targetProgress - currentProgress;

    if (Math.abs(delta) < 0.0012) {
      currentProgress = targetProgress;
      positionPlane(currentProgress);
      isAnimating = false;
      rafId = 0;
      return;
    }

    currentProgress += delta * smoothFactor;
    positionPlane(currentProgress);
    rafId = window.requestAnimationFrame(renderTimeline);
  }

  function requestTick() {
    updateTargetProgress();

    if (isAnimating) return;

    isAnimating = true;
    rafId = window.requestAnimationFrame(renderTimeline);
  }

  function refreshTimeline() {
    measureTimeline();
    updateTargetProgress();
    if (!isAnimating) {
      currentProgress = targetProgress;
      positionPlane(currentProgress);
    } else {
      requestTick();
    }
  }

  rebuildPathSamples();
  measureTimeline();
  timeline.vpTimelineRefresh = refreshTimeline;
  positionPlane(0);
  requestTick();
  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('resize', refreshTimeline);
  window.addEventListener('orientationchange', refreshTimeline);
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', refreshTimeline);
  }

  window.addEventListener('beforeunload', function() {
    if (rafId) window.cancelAnimationFrame(rafId);
    window.removeEventListener('scroll', requestTick);
    window.removeEventListener('resize', refreshTimeline);
    window.removeEventListener('orientationchange', refreshTimeline);
    if (window.visualViewport) {
      window.visualViewport.removeEventListener('resize', refreshTimeline);
    }
  });
}

var VP_GUJARATI_DIGIT_MAP = {
  '0': '૦',
  '1': '૧',
  '2': '૨',
  '3': '૩',
  '4': '૪',
  '5': '૫',
  '6': '૬',
  '7': '૭',
  '8': '૮',
  '9': '૯'
};

function vpToGujaratiDigits(value) {
  return String(value).replace(/\d/g, function(digit) {
    return VP_GUJARATI_DIGIT_MAP[digit] || digit;
  });
}

function vpLocalizeGujaratiValue(lang, value) {
  if (value == null) return '';
  var text = String(value);
  return lang === 'gu' ? vpToGujaratiDigits(text) : text;
}

function vpLocalizeActiveDigits(value) {
  if (value == null) return '';
  var text = String(value);
  return document.body && document.body.getAttribute('data-language') === 'gu' ? vpToGujaratiDigits(text) : text;
}

var VP_LOCATION_SECTION_CONTENT = {
  en: {
    eyebrow: 'Venue',
    title: 'Where To Find Us',
    hint: '\u2190 swipe to see all events \u2192',
    note: 'Each celebration has its own venue. Please check the details on each card before traveling.',
    items: [
      {
        theme: 'stay',
        tag: 'Stay',
        date: 'Thursday \u00b7 19 Nov 2026 to Saturday \u00b7 21 Nov 2026',
        details: [
          { label: 'Check-in', value: 'Thursday \u00b7 19 Nov 2026 \u00b7 12:00 PM' },
          { label: 'Check-out', value: 'Saturday \u00b7 21 Nov 2026 \u00b7 11:00 AM' }
        ],
        venue: 'FabHotel Golf Inn',
        address: 'Golf Inn 637, Sector 43, Gurgaon 122002, India',
        mapUrl: 'https://maps.app.goo.gl/Gawg7uYu8j2GJ91f7',
        cta: 'Get Directions'
      },
      {
        theme: 'sangeet',
        tag: 'Sangeet & Cocktail',
        date: 'Thursday \u00b7 19 Nov 2026 \u00b7 8:00 PM',
        venue: 'The Palms Town & Country Club',
        address: 'B Block, Sushant Lok, Phase I, Gurgaon - 122001, India',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=The%20Palms%20Town%20%26%20Country%20Club%2C%20B%20Block%2C%20Sushant%20Lok%2C%20Phase%20I%2C%20Gurgaon%20-%20122001%2C%20India',
        cta: 'Get Directions'
      },
      {
        theme: 'haldi',
        tag: 'Haldi',
        date: 'Friday \u00b7 20 Nov 2026 \u00b7 10:00 AM',
        venue: 'FabHotel Golf Inn',
        address: 'Golf Inn 637, Sector 43, Gurgaon 122002, India',
        mapUrl: 'https://maps.app.goo.gl/Gawg7uYu8j2GJ91f7',
        cta: 'Get Directions'
      },
      {
        theme: 'shadi',
        tag: 'Shadi Night',
        date: 'Friday \u00b7 20 Nov 2026 \u00b7 7:00 PM',
        venue: 'The Bristol Hotel, Gurgaon',
        address: 'DLF Phase-I, Gurgaon-122002, Haryana, India',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=The%20Bristol%20Hotel%2C%20DLF%20Phase-I%2C%20Gurgaon-122002%2C%20Haryana%2C%20India',
        cta: 'Get Directions'
      }
    ]
  },
  gu: {
    eyebrow: 'સ્થળ',
    title: 'અહીં મળીએ',
    hint: '\u2190 બધા કાર્યક્રમો જોવા સ્વાઇપ કરો \u2192',
    note: 'દરેક કાર્યક્રમનું સ્થળ અલગ છે. નીકળતા પહેલાં દરેક કાર્ડ તપાસો.',
    items: [
      {
        theme: 'stay',
        tag: 'રહેઠાણ',
        date: 'ગુરુવાર \u00b7 19 નવેમ્બર 2026 થી શનિવાર \u00b7 21 નવેમ્બર 2026',
        details: [
          { label: 'ચેક-ઇન', value: 'ગુરુવાર \u00b7 19 નવેમ્બર 2026 \u00b7 બપોરે 12:00' },
          { label: 'ચેક-આઉટ', value: 'શનિવાર \u00b7 21 નવેમ્બર 2026 \u00b7 સવારે 11:00' }
        ],
        venue: 'ફેબહોટેલ ગોલ્ફ ઇન',
        address: 'ગોલ્ફ ઇન 637, સેક્ટર 43, ગુરુગ્રામ 122002, ભારત',
        mapUrl: 'https://maps.app.goo.gl/Gawg7uYu8j2GJ91f7',
        cta: 'નકશો ખોલો'
      },
      {
        theme: 'sangeet',
        tag: 'સંગીત અને કોકટેલ',
        date: 'ગુરુવાર \u00b7 19 નવેમ્બર 2026 \u00b7 સાંજ 8:00',
        venue: 'ધ પામ્સ ટાઉન એન્ડ કન્ટ્રી ક્લબ',
        address: 'બી બ્લોક, સુશાંત લોક, ફેઝ 1, ગુરુગ્રામ - 122001, ભારત',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=The%20Palms%20Town%20%26%20Country%20Club%2C%20B%20Block%2C%20Sushant%20Lok%2C%20Phase%20I%2C%20Gurgaon%20-%20122001%2C%20India',
        cta: 'નકશો ખોલો'
      },
      {
        theme: 'haldi',
        tag: 'હળદી',
        date: 'શુક્રવાર \u00b7 20 નવેમ્બર 2026 \u00b7 સવારે 10:00',
        venue: 'ફેબહોટેલ ગોલ્ફ ઇન',
        address: 'ગોલ્ફ ઇન 637, સેક્ટર 43, ગુરુગ્રામ 122002, ભારત',
        mapUrl: 'https://maps.app.goo.gl/Gawg7uYu8j2GJ91f7',
        cta: 'નકશો ખોલો'
      },
      {
        theme: 'shadi',
        tag: 'લગ્ન રાત્રિ',
        date: 'શુક્રવાર \u00b7 20 નવેમ્બર 2026 \u00b7 સાંજ 7:00',
        venue: 'ધ બ્રિસ્ટલ હોટેલ, ગુરુગ્રામ',
        address: 'ડીએલએફ ફેઝ-1, ગુરુગ્રામ-122002, હરિયાણા, ભારત',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=The%20Bristol%20Hotel%2C%20DLF%20Phase-I%2C%20Gurgaon-122002%2C%20Haryana%2C%20India',
        cta: 'નકશો ખોલો'
      }
    ]
  }
};

var VP_LOCATION_IMAGE = 'assets/images/Haldi_location.webp';
var VP_LOCATION_THEME_IMAGES = {
  stay: 'assets/images/Haldi_location.webp',
  haldi: 'assets/images/Haldi_location.webp',
  sangeet: 'assets/images/sangeet_location.webp',
  shadi: 'assets/images/wedding_location.webp'
};
var VP_LOCATION_IMAGE_ALT = 'Chateau de Paon';
var VP_LOCATION_MASK_IMAGE = 'assets/images/Mask_group_2_1_Trace.svg';
var VP_LOCATION_MAP_URL = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Petit Chemin de Saint-Gilles 13200 Arles, France');

function vpEnsureLocationStyles() {
  if (document.getElementById('vp-location-styles')) return;

  var style = document.createElement('style');
  style.id = 'vp-location-styles';
  style.textContent = [
    '.vp-location{position:relative; background:#fffaf8; padding:0 0 96px; overflow:hidden;}',
    '.vp-location__mask{position:relative; z-index:1; display:flex; justify-content:center; width:100%; pointer-events:none;}',
    '.vp-location__mask img{display:block; width:630px; max-width:none; height:auto;}',
    '.vp-location__mask--top{margin-top:-76px;}',
    '.vp-location__mask--bottom{display:none;}',
    '.vp-location__panel{position:relative; z-index:2; max-width:1040px; margin:0 auto; padding:22px 24px 0;}',
    '.vp-location__eyebrow{margin:0 0 10px; text-align:center; font:400 clamp(24px, 2.3vw, 30px)/1 \"GoodVibrationsScript\", cursive; letter-spacing:0.01em; text-transform:none; color:#b8892f;}',
    '.vp-location__title{margin:0 0 34px; text-align:center; color:#3a3a3a; font-size:clamp(34px, 3.05vw, 44px); line-height:1.18; font-weight:500; font-family:\"Arsenica\", Georgia, serif; text-wrap:balance;}',
    '.vp-location__callout{display:flex; align-items:flex-start; gap:16px; max-width:760px; margin:0 auto 26px; padding:16px 20px; border:1px solid rgba(216,183,154,0.8); border-radius:18px; background:linear-gradient(135deg, #f6ede5 0%, #fff7f0 100%); box-shadow:0 10px 24px rgba(105,56,31,0.06);}',
    '.vp-location__callout-icon{display:inline-flex; width:30px; height:30px; align-items:center; justify-content:center; border-radius:999px; background:#b8892f; color:#fffaf8; font:700 clamp(13px, 0.95vw, 14px)/1 Arial, sans-serif; box-shadow:0 8px 18px rgba(184,137,47,0.22);}',
    '.vp-location__callout-copy{flex:1; min-width:0; padding-top:2px;}',
    '.vp-location__note{width:100%; margin:0; color:#5a2e24; font:400 clamp(14px, 1.05vw, 16px)/1.68 \"PTSerif\", Georgia, serif; text-align:left; text-wrap:pretty;}',
    '.vp-location__note-text{display:block;}',
    '.vp-location__cards{display:grid; grid-template-columns:repeat(3, minmax(0, 1fr)); gap:22px;}',
    '.vp-location__cards.vp-location__cards--four{grid-template-columns:repeat(2, minmax(0, 1fr)); max-width:860px; margin:0 auto;}',
    '.vp-location__card{display:flex; flex-direction:column; background:#fff8f2; border:1px solid rgba(216,184,163,0.52); border-radius:18px; overflow:hidden; box-shadow:0 18px 36px rgba(88,49,49,0.08); min-width:0;}',
    '.vp-location__media{position:relative; aspect-ratio:4/3; overflow:hidden; background:#fff8f2; isolation:isolate; flex-shrink:0;}',
    '.vp-location__media::after{content:\"\"; position:absolute; inset:0; background:linear-gradient(180deg, rgba(19,7,11,0.08), rgba(19,7,11,0.34));}',
    '.vp-location__media img{width:100%; height:100%; object-fit:cover; display:block; filter:sepia(30%) saturate(85%) brightness(95%);}',
    '.vp-location__card[data-theme=\"stay\"]{--vp-location-accent:#617a58;}',
    '.vp-location__card[data-theme=\"sangeet\"]{--vp-location-accent:#7a4766;}',
    '.vp-location__card[data-theme=\"haldi\"]{--vp-location-accent:#b8892f;}',
    '.vp-location__card[data-theme=\"shadi\"]{--vp-location-accent:#6a2b3f;}',
    '.vp-location__card[data-theme=\"shadi\"] .vp-location__media img{filter:grayscale(100%) brightness(1.04) contrast(0.96);}',
    '.vp-location__body{padding:22px 22px 24px; display:flex; flex-direction:column; flex:1; min-height:258px;}',
    '.vp-location__tags{display:flex; flex-wrap:wrap; gap:8px; margin-bottom:14px;}',
    '.vp-location__tag{display:inline-flex; align-self:flex-start; padding:5px 13px; border-radius:999px; background:var(--vp-location-accent, #66021f); color:#fff; font:700 clamp(9px, 0.68vw, 10px)/1.2 \"PTSerif\", Georgia, serif; letter-spacing:0.12em; text-transform:uppercase;}',
    '.vp-location__tag--stay{background:#617a58; color:#fffaf8;}',
    '.vp-location__date{margin:0 0 8px; color:#9c7a5a; font:400 clamp(10px, 0.78vw, 11px)/1.5 \"PTSerif\", Georgia, serif; letter-spacing:0.06em; text-transform:uppercase;}',
    '.vp-location__info{display:flex; flex:1; flex-direction:column;}',
    '.vp-location__details{display:grid; gap:8px; margin:0 0 14px;}',
    '.vp-location__detail{padding:9px 11px; border-radius:12px; background:#f6efe7; border:1px solid rgba(200,160,144,0.35);}',
    '.vp-location__detail-label{display:block; margin:0 0 3px; color:#8a6d5f; font:700 clamp(9px, 0.7vw, 10px)/1.2 \"PTSerif\", Georgia, serif; letter-spacing:0.08em; text-transform:uppercase;}',
    '.vp-location__detail-value{display:block; color:#4b3c35; font:400 clamp(12px, 0.92vw, 13px)/1.5 \"PTSerif\", Georgia, serif;}',
    '.vp-location__venue{margin:0 0 12px; color:#2b1610; font:500 clamp(28px, 2.18vw, 33px)/1.12 \"Arsenica\", Georgia, serif; text-wrap:balance;}',
    '.vp-location__divider{width:34px; height:1px; margin:0 0 12px; background:#e2d4c8;}',
    '.vp-location__address{max-width:29ch; margin:0 0 12px; color:#7a6555; font:400 clamp(14px, 1.02vw, 15px)/1.72 \"PTSerif\", Georgia, serif; text-wrap:pretty;}',
    '.vp-location__cta{display:inline-flex; align-items:center; align-self:center; justify-content:center; min-height:42px; margin-top:auto; padding:0 20px; border-radius:999px; border:1px solid #c8a090; background:transparent; color:#66021f; font:700 clamp(11px, 0.82vw, 12px)/1.2 \"PTSerif\", Georgia, serif; letter-spacing:0.1em; text-transform:uppercase; text-decoration:none; text-align:center; white-space:nowrap; transition:background-color .2s ease, color .2s ease, border-color .2s ease;}',
    '.vp-location__cta:hover{background:#66021f; border-color:#66021f; color:#fffaf8;}',
    '.vp-location__hint{font-family:\"PTSerif\", Georgia, serif; text-align:center;}',
    '.vp-location__hint{display:none; margin:10px 0 0; color:#9c7a5a; font-size:clamp(10px, 0.78vw, 11px); letter-spacing:0.08em; text-transform:uppercase;}',
    '.vp-location--mobile{padding-bottom:84px;}',
    '.vp-location--mobile .vp-location__panel{padding-left:24px; padding-right:24px;}',
    '.vp-location--mobile .vp-location__title{font-size:32px; margin-bottom:28px;}',
    '.vp-location--mobile .vp-location__callout{margin-bottom:22px; padding:13px 16px; gap:10px;}',
    '.vp-location--mobile .vp-location__callout-icon{width:28px; height:28px; font-size:13px;}',
    '.vp-location--mobile .vp-location__note{font-size:14px;}',
    '.vp-location--mobile .vp-location__cards{display:flex; gap:16px; overflow-x:auto; margin:0 -24px; padding:4px 24px 16px; scroll-snap-type:x proximity; scrollbar-width:none; overscroll-behavior-x:contain; overscroll-behavior-y:auto; touch-action:pan-y pinch-zoom; cursor:grab; -webkit-overflow-scrolling:touch;}',
    '.vp-location--mobile .vp-location__cards::-webkit-scrollbar{display:none;}',
    '.vp-location--mobile .vp-location__card{width:78vw; max-width:320px; flex:0 0 auto; scroll-snap-align:start;}',
    '.vp-location--mobile .vp-location__body{min-height:236px;}',
    '.vp-location--mobile .vp-location__hint{display:block;}',
    '#rec2003451831{position:relative; overflow:visible !important;}',
    '#rec2003451831::before{content:\"\"; position:absolute; left:50%; top:-62px; z-index:5; width:630px; height:121px; transform:translateX(-50%) rotate(180deg); background:url(\"assets/images/Mask_group_2_1_Trace.svg\") center center / contain no-repeat; pointer-events:none;}',
    '@media screen and (max-width:1199px){.vp-location__mask img{width:630px;}.vp-location__mask--top{margin-top:-76px;}}',
    '@media screen and (max-width:959px){.vp-location__mask img{width:630px;}.vp-location__mask--top{margin-top:-74px;}}',
    '@media screen and (max-width:639px){.vp-location__mask img{width:630px;}.vp-location__mask--top{margin-top:-74px;}}',
    '@media screen and (max-width:479px){.vp-location__mask img{width:630px;}.vp-location__mask--top{margin-top:-77px;}}'
  ].join('');
  document.head.appendChild(style);
}

function vpCreateLocationSectionMarkup() {
  return [
    '<section id="vp-location-section" class="vp-location" aria-label="Venue information">',
    '  <div class="vp-location__mask vp-location__mask--top" aria-hidden="true"><img src="' + VP_LOCATION_MASK_IMAGE + '" alt=""></div>',
    '  <div class="vp-location__panel">',
    '    <p class="vp-location__eyebrow" data-role="eyebrow"></p>',
    '    <h2 class="vp-location__title" data-role="title"></h2>',
    '    <div class="vp-location__callout" data-role="note-callout">',
    '      <span class="vp-location__callout-icon" aria-hidden="true">i</span>',
    '      <div class="vp-location__callout-copy">',
    '        <p class="vp-location__note"><span class="vp-location__note-text" data-role="note"></span></p>',
    '      </div>',
    '    </div>',
    '    <div class="vp-location__cards" data-role="cards"></div>',
    '    <p class="vp-location__hint" data-role="hint"></p>',
    '  </div>',
    '  <div class="vp-location__mask vp-location__mask--bottom" aria-hidden="true"><img src="' + VP_LOCATION_MASK_IMAGE + '" alt=""></div>',
    '</section>'
  ].join('');
}

function vpIsLocationMobileMode() {
  if (window.isMobile) return true;
  if (typeof window.innerWidth === 'number' && window.innerWidth < 768) return true;
  if (window.screen && typeof window.screen.width === 'number' && window.screen.width < 768) return true;
  return false;
}

function vpSyncLocationSectionMode(section) {
  if (!section) return;
  section.classList.toggle('vp-location--mobile', vpIsLocationMobileMode());
}

function vpEnsureLocationSection() {
  var legacyRec = document.getElementById('rec2002802231');
  if (!legacyRec) return null;

  vpEnsureLocationStyles();

  if (legacyRec.dataset.vpLocationHidden !== 'true') {
    legacyRec.style.display = 'none';
    legacyRec.setAttribute('aria-hidden', 'true');
    legacyRec.dataset.vpLocationHidden = 'true';
  }

  var section = document.getElementById('vp-location-section');
  if (!section) {
    legacyRec.insertAdjacentHTML('afterend', vpCreateLocationSectionMarkup());
    section = document.getElementById('vp-location-section');
  }

  if (section && section.dataset.locationReady !== 'true') {
    section.dataset.locationReady = 'true';
    var syncMode = function() {
      vpSyncLocationSectionMode(section);
    };
    syncMode();
    window.addEventListener('resize', syncMode);
    window.addEventListener('orientationchange', syncMode);
  }

  return section;
}

function vpBuildLocationCards(items, lang) {
  return items.map(function(item) {
    var image = VP_LOCATION_THEME_IMAGES[item.theme] || VP_LOCATION_IMAGE;
    var mapUrl = item.mapUrl || VP_LOCATION_MAP_URL;
    var hasDetails = Array.isArray(item.details) && item.details.length;
    var cardClassName = 'vp-location__card' + (hasDetails ? '' : ' vp-location__card--compact');
    var tags = Array.isArray(item.tags) && item.tags.length ? item.tags : [item.tag];
    var tagsMarkup = tags.map(function(tag) {
      var tagClass = 'vp-location__tag';
      var normalizedTag = typeof tag === 'string' ? tag.trim().toLowerCase() : '';
      if (normalizedTag === 'stay' || tag === 'રહેઠાણ') {
        tagClass += ' vp-location__tag--stay';
      }
      return '<span class="' + tagClass + '">' + vpLocalizeGujaratiValue(lang, tag) + '</span>';
    }).join('');
    var detailsMarkup = hasDetails ? [
      '<div class="vp-location__details">',
      item.details.map(function(detail) {
        return [
          '<div class="vp-location__detail">',
          '  <span class="vp-location__detail-label">', vpLocalizeGujaratiValue(lang, detail.label), '</span>',
          '  <span class="vp-location__detail-value">', vpLocalizeGujaratiValue(lang, detail.value), '</span>',
          '</div>'
        ].join('');
      }).join(''),
      '</div>'
    ].join('') : '';
    return [
      '<article class="', cardClassName, '" data-theme="', item.theme, '">',
      '  <div class="vp-location__media">',
      '    <img src="', image, '" alt="', vpLocalizeGujaratiValue(lang, item.venue || VP_LOCATION_IMAGE_ALT), '" loading="lazy">',
      '  </div>',
      '  <div class="vp-location__body">',
      '    <div class="vp-location__tags">', tagsMarkup, '</div>',
      '    <p class="vp-location__date">', vpLocalizeGujaratiValue(lang, item.date), '</p>',
      '    <div class="vp-location__info">',
      '      <p class="vp-location__venue">', vpLocalizeGujaratiValue(lang, item.venue), '</p>',
      '      <div class="vp-location__divider"></div>',
      '      <p class="vp-location__address">', vpLocalizeGujaratiValue(lang, item.address), '</p>',
      detailsMarkup,
      '    </div>',
      '    <div class="vp-location__footer">',
      '      <a class="vp-location__cta" href="', mapUrl, '" target="_blank" rel="noreferrer noopener">', vpLocalizeGujaratiValue(lang, item.cta), '</a>',
      '    </div>',
      '  </div>',
      '</article>'
    ].join('');
  }).join('');
}

function vpRenderLocationSection(lang) {
  var section = vpEnsureLocationSection();
  if (!section) return;

  var content = VP_LOCATION_SECTION_CONTENT[lang] || VP_LOCATION_SECTION_CONTENT.en;
  var eyebrow = section.querySelector('[data-role="eyebrow"]');
  var title = section.querySelector('[data-role="title"]');
  var cards = section.querySelector('[data-role="cards"]');
  var hint = section.querySelector('[data-role="hint"]');
  var note = section.querySelector('[data-role="note"]');

  if (eyebrow) eyebrow.textContent = content.eyebrow;
  if (title) title.textContent = content.title;
  if (cards) {
    cards.classList.toggle('vp-location__cards--four', content.items.length >= 4);
    cards.innerHTML = vpBuildLocationCards(content.items, lang);
    vpEnhanceHorizontalScroller(cards);
  }
  if (hint) hint.textContent = content.hint;
  if (note) note.textContent = content.note;
  vpSyncLocationSectionMode(section);
}

var VP_DRESS_CODE_CONTENT = {
  en: {
    ariaLabel: 'Dress code',
    eyebrow: 'Style Notes',
    title: 'Dress Code',
    subtitle: 'Three celebrations, three distinct moods.',
    swipeHint: '← Swipe to explore each celebration →',
    items: [
      {
        theme: 'haldi',
        eventLabel: 'Haldi',
        moodLabel: 'Day Festive',
        dressValue: 'Hues of Yellow',
        note: 'Bright, playful Indian wear with breezy comfort feels just right.'
      },
      {
        theme: 'sangeet',
        eventLabel: 'Sangeet & Cocktail',
        moodLabel: 'Evening Glam',
        dressValue: 'Glitz & Glam Indo Western',
        note: 'Think shimmer, movement, and statement styling for the dance floor.',
        offset: true
      },
      {
        theme: 'wedding',
        eventLabel: 'Wedding',
        moodLabel: 'Regal Elegance',
        dressValue: 'Royal Indian Attire',
        note: 'Rich silhouettes, heirloom details, and polished Indian elegance shine here.'
      }
    ]
  },
  gu: {
    ariaLabel: 'ડ્રેસ કોડ',
    eyebrow: 'સ્ટાઇલ નોંધો',
    title: 'ડ્રેસ કોડ',
    subtitle: 'ત્રણ ઉજવણીઓ, ત્રણ અલગ માહોલ.',
    swipeHint: 'દરેક ઉજવણી જોવા સ્વાઇપ કરો',
    items: [
      {
        theme: 'haldi',
        eventLabel: 'હળદી',
        moodLabel: 'દિવસની મજા',
        dressValue: 'પીળા રંગના શેડ્સ',
        note: 'હળવા, ખુશખુશાલ અને આરામદાયક ભારતીય વસ્ત્રો અહીં સુંદર લાગશે.'
      },
      {
        theme: 'sangeet',
        eventLabel: 'સંગીત અને કોકટેલ',
        moodLabel: 'સાંજનો ગ્લેમર',
        dressValue: 'ગ્લિટ્ઝ એન્ડ ગ્લેમ ઇન્ડો વેસ્ટર્ન',
        note: 'શિમર, ફ્લો અને સ્ટેટમેન્ટ સ્ટાઇલિંગ સાથે નિર્ભયતાથી ઝળહળો.',
        offset: true
      },
      {
        theme: 'wedding',
        eventLabel: 'લગ્ન',
        moodLabel: 'રાજસી શાન',
        dressValue: 'રોયલ ઇન્ડિયન અટાયર',
        note: 'ભવ્ય સિલુએટ્સ, સમૃદ્ધ કઢાઇ અને સજ્જડ ભારતીય શૈલી પસંદ કરો.'
      }
    ]
  }
};

var VP_DRESS_CODE_IMAGES = {
  haldi: 'assets/images/haldi_attire_couple.jpg',
  sangeet: 'assets/images/sangeet_attire_couple.jpg',
  wedding: 'assets/images/wedding_royal_attire_couple.jpg'
};

function vpCreateDressCodeMarkup() {
  return [
    '<section id="vp-dress-code-section" class="vp-dress" aria-label="Dress code">',
    '  <div class="vp-dress__inner">',
    '    <span class="vp-dress__eyebrow vp-dress__reveal" data-role="eyebrow"></span>',
    '    <h2 class="vp-dress__title vp-dress__reveal" data-role="title"></h2>',
    '    <div class="vp-dress__ornament vp-dress__reveal" aria-hidden="true">',
    '      <span class="vp-dress__line"></span>',
    '      <span class="vp-dress__dot"></span>',
    '      <span class="vp-dress__dot"></span>',
    '      <span class="vp-dress__dot"></span>',
    '      <span class="vp-dress__line"></span>',
    '    </div>',
    '    <p class="vp-dress__subtitle vp-dress__reveal" data-role="subtitle"></p>',
    '    <div class="vp-dress__grid" data-role="grid"></div>',
    '    <p class="vp-dress__hint" data-role="hint"></p>',
    '  </div>',
    '</section>'
  ].join('');
}

function vpBuildDressCodeCards(content) {
  return content.items.map(function(item) {
    var classes = ['vp-dress__card', 'vp-dress__reveal'];
    var image = VP_DRESS_CODE_IMAGES[item.theme];
    if (item.offset) classes.push('vp-dress__card--offset');

    return [
      '<article class="', classes.join(' '), '" data-theme="', item.theme, '">',
      '  <div class="vp-dress__frame">',
      '    <div class="vp-dress__photo">',
      image ? '      <img src="' + image + '" alt="' + item.eventLabel + ' attire inspiration" loading="lazy">' : '',
      '    </div>',
      '    <div class="vp-dress__chips">',
      '      <span class="vp-dress__chip vp-dress__chip--event">', item.eventLabel, '</span>',
      '      <span class="vp-dress__chip vp-dress__chip--mood">', item.moodLabel, '</span>',
      '    </div>',
      '  </div>',
      '  <div class="vp-dress__body">',
      '    <h3 class="vp-dress__dress-value">', item.dressValue, '</h3>',
      '    <p class="vp-dress__note">', item.note, '</p>',
      '  </div>',
      '</article>'
    ].join('');
  }).join('');
}

function vpEnsureDressCodeVisibility(section) {
  if (!section || section.dataset.dressObserverReady === 'true') return;

  section.dataset.dressObserverReady = 'true';

  if (!('IntersectionObserver' in window)) {
    section.classList.add('is-visible');
    return;
  }

  var observer = new IntersectionObserver(function(entries, currentObserver) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        section.classList.add('is-visible');
        currentObserver.disconnect();
      }
    });
  }, {
    threshold: 0.2
  });

  observer.observe(section);
}

function vpEnsureDressCodeSection() {
  var legacyRec = document.getElementById('rec2003451831');
  if (!legacyRec) return null;

  var legacyLayout = legacyRec.querySelector('.t396');
  if (legacyLayout && legacyRec.dataset.vpDressHidden !== 'true') {
    legacyLayout.style.display = 'none';
    legacyLayout.setAttribute('aria-hidden', 'true');
    legacyRec.dataset.vpDressHidden = 'true';
  }

  legacyRec.style.paddingTop = '0';
  legacyRec.style.paddingBottom = '0';
  legacyRec.classList.add('vp-dress-rec');

  var section = document.getElementById('vp-dress-code-section');
  if (!section) {
    legacyRec.insertAdjacentHTML('afterbegin', vpCreateDressCodeMarkup());
    section = document.getElementById('vp-dress-code-section');
  }

  vpEnsureDressCodeVisibility(section);
  return section;
}

function vpRenderDressCodeSection(lang) {
  var section = vpEnsureDressCodeSection();
  if (!section) return;

  var content = VP_DRESS_CODE_CONTENT[lang] || VP_DRESS_CODE_CONTENT.en;
  var eyebrow = section.querySelector('[data-role="eyebrow"]');
  var title = section.querySelector('[data-role="title"]');
  var subtitle = section.querySelector('[data-role="subtitle"]');
  var grid = section.querySelector('[data-role="grid"]');
  var hint = section.querySelector('[data-role="hint"]');

  section.setAttribute('aria-label', content.ariaLabel);
  if (eyebrow) eyebrow.textContent = content.eyebrow;
  if (title) title.textContent = content.title;
  if (subtitle) subtitle.textContent = content.subtitle;
  if (grid) {
    grid.innerHTML = vpBuildDressCodeCards(content);
    vpEnhanceHorizontalScroller(grid);
  }
  if (hint) hint.textContent = content.swipeHint || '';

  if (section.classList.contains('is-visible')) {
    section.classList.remove('is-visible');
    window.requestAnimationFrame(function() {
      window.requestAnimationFrame(function() {
        section.classList.add('is-visible');
      });
    });
  }
}

function vpNormalizeWheelDelta(event, delta) {
  if (event.deltaMode === 1) return delta * 16;
  if (event.deltaMode === 2) return delta * (window.innerHeight || 0);
  return delta;
}

// Keep vertical page scrolling natural inside horizontal carousels.
function vpEnhanceHorizontalScroller(scroller) {
  if (!scroller || scroller.dataset.vpScrollerReady === 'true') return;

  scroller.dataset.vpScrollerReady = 'true';

  var dragState = null;
  var suppressClick = false;

  function canScrollHorizontally() {
    return scroller.scrollWidth > scroller.clientWidth + 8;
  }

  function clearDragState() {
    if (dragState && dragState.dragging) {
      scroller.classList.remove('vp-horizontal-scroll--dragging');
      suppressClick = true;
      window.setTimeout(function() {
        suppressClick = false;
      }, 0);
    }

    dragState = null;
  }

  scroller.addEventListener('mousedown', function(event) {
    if (!canScrollHorizontally() || event.button !== 0) return;

    dragState = {
      startX: event.clientX,
      startScrollLeft: scroller.scrollLeft,
      dragging: false
    };
  });

  document.addEventListener('mousemove', function(event) {
    if (!dragState) return;

    var deltaX = event.clientX - dragState.startX;

    if (!dragState.dragging) {
      if (Math.abs(deltaX) < 6) return;
      dragState.dragging = true;
      scroller.classList.add('vp-horizontal-scroll--dragging');
    }

    event.preventDefault();
    scroller.scrollLeft = dragState.startScrollLeft - deltaX;
  });

  document.addEventListener('mouseup', clearDragState);
  window.addEventListener('blur', clearDragState);

  scroller.addEventListener('dragstart', function(event) {
    if (dragState) {
      event.preventDefault();
    }
  });

  scroller.addEventListener('click', function(event) {
    if (!suppressClick) return;
    event.preventDefault();
    event.stopPropagation();
  }, true);

  scroller.addEventListener('wheel', function(event) {
    if (!canScrollHorizontally()) return;

    var absX = Math.abs(event.deltaX);
    var absY = Math.abs(event.deltaY);
    var isHorizontalIntent = event.shiftKey || absX > absY;

    if (isHorizontalIntent) {
      var horizontalDelta = event.shiftKey && absX < 1 ? event.deltaY : event.deltaX;
      horizontalDelta = vpNormalizeWheelDelta(event, horizontalDelta);
      if (!horizontalDelta) return;

      event.preventDefault();
      scroller.scrollLeft += horizontalDelta;
      return;
    }

    if (!absY) return;

    event.preventDefault();
    window.scrollBy({
      left: 0,
      top: vpNormalizeWheelDelta(event, event.deltaY),
      behavior: 'auto'
    });
  }, { passive: false });
}

function vpGetHeroScrollCueText() {
  return document.body && document.body.getAttribute('data-language') === 'gu'
    ? 'આગળ વધવા માટે સ્ક્રોલ કરો'
    : 'Scroll to continue';
}

function vpUpdateHeroScrollCueLanguage() {
  var label = document.querySelector('#vp-hero-scroll-cue .vp-hero-scroll-cue__label');
  if (label) {
    label.textContent = vpGetHeroScrollCueText();
  }
}

function vpEnsureHeroScrollCue() {
  var cue = document.getElementById('vp-hero-scroll-cue');

  if (!cue && document.body) {
    cue = document.createElement('div');
    cue.id = 'vp-hero-scroll-cue';
    cue.setAttribute('aria-hidden', 'true');
    cue.innerHTML = '<div class="vp-hero-scroll-cue__label"></div><div class="vp-hero-scroll-cue__mouse"></div>';
    document.body.appendChild(cue);
  }

  vpUpdateHeroScrollCueLanguage();
  return cue;
}

function vpNeutralizeOpeningSealScaleAnimation(envelope) {
  if (!envelope) return;

  envelope.setAttribute(
    'data-animate-sbs-opts',
    "[{'mx':0,'my':0,'sx':1,'sy':1,'op':1,'ro':0,'ti':0,'ea':'0','dt':0},{'mx':0,'my':0,'sx':1,'sy':1,'op':0,'ro':0,'ti':1500,'ea':'0','dt':1000}]"
  );
}

// Prevent multiple clicks on envelope
document.addEventListener('DOMContentLoaded', function() {
  const openingRecord = document.getElementById('rec2052880283');
  const allRecords = document.getElementById('allrecords');
  const heroRecord = document.getElementById('rec2049114373');
  const nextRecord = document.getElementById('rec2002273681');
  const envelope = document.querySelector('[data-elem-id="1773847037346"]');
  const envelopeImage = envelope ? envelope.querySelector('.tn-atom__img') : null;
  const envelopeLabel = document.querySelector('#rec2052880283 [data-elem-id="1773926384566"]');
  const envelopeSubtitle = document.querySelector('#rec2052880283 [data-elem-id="1774451670001"]');
  const video = document.querySelector('video');
  const languageToggle = document.getElementById('language-toggle');
  const heroScrollCue = vpEnsureHeroScrollCue();
  const OPENING_SEAL_FALLBACK_SRC = 'assets/images/Pi7_cropper-fallback.png';
  const SCROLL_UNLOCK_DELAY = 4500;
  const OPENING_DISMISS_DELAY = 3200;
  const OPENING_HIDE_DELAY = 4100;
  const LANGUAGE_TOGGLE_HIDE_DELAY = 1000;
  const OPENING_SKIP_SCROLL_THRESHOLD = 8;
  const HERO_SCROLL_CUE_DELAY = 5000;
  const HERO_STUCK_PEEK_DELAY = 6000;
  const HERO_SCROLL_THRESHOLD = 4;
  const HERO_PEEK_TRAVEL_DURATION = 500;
  const HERO_PEEK_HOLD_DELAY = 1000;
  const scrollKeys = new Set(['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ', 'Spacebar']);
  let heroGuidanceStarted = false;
  let heroGuidanceDismissed = false;
  let heroCueTimeout = 0;
  let heroPeekTimeout = 0;
  let heroPeekReturnTimeout = 0;
  let heroPeekAnimationFrame = 0;
  let autoPeekTarget = 0;
  let autoPeekHomeY = 0;
  let autoPeekInProgress = false;

  function applyEnvelopeImageFallback() {
    if (!envelopeImage || envelopeImage.dataset.vpFallbackApplied === 'true') return;

    envelopeImage.dataset.vpFallbackApplied = 'true';
    envelopeImage.src = OPENING_SEAL_FALLBACK_SRC;
    envelopeImage.setAttribute('src', OPENING_SEAL_FALLBACK_SRC);
    envelopeImage.setAttribute('data-original', OPENING_SEAL_FALLBACK_SRC);
  }

  if (envelopeImage) {
    envelopeImage.classList.remove('t-img');
    envelopeImage.removeAttribute('data-original');
    envelopeImage.setAttribute('loading', 'eager');
    envelopeImage.setAttribute('fetchpriority', 'high');
    envelopeImage.addEventListener('error', applyEnvelopeImageFallback);
  }

  if (video) {
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.setAttribute('disablepictureinpicture', '');
    video.setAttribute('disableremoteplayback', '');

    try {
      video.disablePictureInPicture = true;
    } catch (error) {}

    try {
      video.disableRemotePlayback = true;
    } catch (error) {}

    video.addEventListener('pause', function() {
      if (vpBackgroundAudioHasStarted && !vpBackgroundAudio.paused && !document.hidden) {
        vpPauseBackgroundAudio();
      }
    });
  }

  function preventScroll(event) {
    event.preventDefault();
  }

  function preventScrollKeys(event) {
    if (scrollKeys.has(event.key)) {
      event.preventDefault();
    }
  }

  function lockScroll() {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
    window.scrollTo(0, 0);
    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });
    window.addEventListener('keydown', preventScrollKeys, false);
  }

  function unlockScroll() {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
    window.removeEventListener('wheel', preventScroll, { passive: false });
    window.removeEventListener('touchmove', preventScroll, { passive: false });
    window.removeEventListener('keydown', preventScrollKeys, false);
  }

  function hideLanguageToggle() {
    if (languageToggle) {
      window.setTimeout(function() {
        languageToggle.classList.add('is-hiding');
      }, LANGUAGE_TOGGLE_HIDE_DELAY);
    }
  }

  function dismissOpeningStage() {
    if (!openingRecord || openingRecord.dataset.vpDismissed === 'true') return;

    openingRecord.dataset.vpDismissed = 'true';
    openingRecord.classList.add('vp-opening-stage--dismissing');

    window.setTimeout(function() {
      openingRecord.style.display = 'none';
    }, Math.max(0, OPENING_HIDE_DELAY - OPENING_DISMISS_DELAY));
  }

  function restorePageLayoutAfterOpening() {
    if (!allRecords) return;

    allRecords.style.zoom = '';
    allRecords.style.width = '';
    allRecords.style.maxWidth = '';
    allRecords.style.transform = '';
    allRecords.style.transformOrigin = '';
    allRecords.style.marginLeft = '';
    allRecords.style.marginRight = '';
  }

  function hideOpeningStageImmediately() {
    if (!openingRecord || openingRecord.dataset.vpDismissed === 'true') return false;

    openingRecord.dataset.vpDismissed = 'true';
    openingRecord.classList.add('vp-opening-stage--dismissing');
    openingRecord.style.display = 'none';
    restorePageLayoutAfterOpening();
    unlockScroll();

    if (languageToggle) {
      languageToggle.classList.add('is-hiding');
    }

    return true;
  }

  function getCurrentScrollY() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }

  function skipOpeningStageForRestoredScroll() {
    return getCurrentScrollY() > OPENING_SKIP_SCROLL_THRESHOLD && hideOpeningStageImmediately();
  }

  function scheduleOpeningStageRestoreCheck() {
    window.requestAnimationFrame(skipOpeningStageForRestoredScroll);
    window.setTimeout(skipOpeningStageForRestoredScroll, 0);
    window.setTimeout(skipOpeningStageForRestoredScroll, 120);
    window.setTimeout(skipOpeningStageForRestoredScroll, 360);
  }

  function clearHeroGuidanceTimers() {
    if (heroCueTimeout) {
      window.clearTimeout(heroCueTimeout);
      heroCueTimeout = 0;
    }

    if (heroPeekTimeout) {
      window.clearTimeout(heroPeekTimeout);
      heroPeekTimeout = 0;
    }

    if (heroPeekReturnTimeout) {
      window.clearTimeout(heroPeekReturnTimeout);
      heroPeekReturnTimeout = 0;
    }

    if (heroPeekAnimationFrame) {
      window.cancelAnimationFrame(heroPeekAnimationFrame);
      heroPeekAnimationFrame = 0;
    }
  }

  function hideHeroScrollCue() {
    if (heroScrollCue) {
      heroScrollCue.classList.remove('is-visible');
    }
  }

  function easeHeroPeekProgress(progress) {
    return progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;
  }

  function animateHeroPeekScroll(targetY, duration, onComplete) {
    var startY = getCurrentScrollY();
    var distance = targetY - startY;
    var startTime = 0;

    if (heroPeekAnimationFrame) {
      window.cancelAnimationFrame(heroPeekAnimationFrame);
      heroPeekAnimationFrame = 0;
    }

    if (!distance || duration <= 0) {
      window.scrollTo(0, targetY);
      if (typeof onComplete === 'function') {
        onComplete();
      }
      return;
    }

    function step(timestamp) {
      if (heroGuidanceDismissed) {
        heroPeekAnimationFrame = 0;
        return;
      }

      if (!startTime) {
        startTime = timestamp;
      }

      var progress = Math.min((timestamp - startTime) / duration, 1);
      var easedProgress = easeHeroPeekProgress(progress);
      var nextY = Math.round(startY + distance * easedProgress);

      window.scrollTo(0, nextY);

      if (progress < 1) {
        heroPeekAnimationFrame = window.requestAnimationFrame(step);
        return;
      }

      heroPeekAnimationFrame = 0;
      if (typeof onComplete === 'function') {
        onComplete();
      }
    }

    heroPeekAnimationFrame = window.requestAnimationFrame(step);
  }

  function dismissHeroGuidance() {
    if (heroGuidanceDismissed) return;

    heroGuidanceDismissed = true;
    clearHeroGuidanceTimers();
    autoPeekInProgress = false;
    hideHeroScrollCue();
  }

  function getHeroPeekTarget() {
    var viewportHeight = vpGetViewportHeight();
    var peekAmount = Math.max(54, Math.min(108, Math.round(viewportHeight * 0.11)));
    var nextTop = nextRecord ? nextRecord.offsetTop : 0;

    return Math.max(0, Math.round(nextTop - viewportHeight + peekAmount));
  }

  function handleHeroScrollProgress() {
    if (!heroGuidanceStarted || heroGuidanceDismissed) return;

    var currentY = getCurrentScrollY();

    if (autoPeekInProgress) {
      return;
    }

    if (currentY > HERO_SCROLL_THRESHOLD) {
      dismissHeroGuidance();
    }
  }

  function handleHeroScrollIntent(event) {
    if (!heroGuidanceStarted || heroGuidanceDismissed) return;

    if (event.type === 'keydown' && !scrollKeys.has(event.key)) {
      return;
    }

    dismissHeroGuidance();
  }

  function startHeroGuidance() {
    if (!heroScrollCue || !heroRecord || !nextRecord || heroGuidanceStarted || heroGuidanceDismissed) return;

    if (getCurrentScrollY() > HERO_SCROLL_THRESHOLD) {
      heroGuidanceDismissed = true;
      return;
    }

    heroGuidanceStarted = true;
    vpUpdateHeroScrollCueLanguage();

    heroCueTimeout = window.setTimeout(function() {
      if (heroGuidanceDismissed || getCurrentScrollY() > HERO_SCROLL_THRESHOLD) {
        dismissHeroGuidance();
        return;
      }

      heroScrollCue.classList.add('is-visible');
    }, HERO_SCROLL_CUE_DELAY);

    heroPeekTimeout = window.setTimeout(function() {
      var targetScroll = getHeroPeekTarget();

      if (heroGuidanceDismissed || getCurrentScrollY() > HERO_SCROLL_THRESHOLD) {
        dismissHeroGuidance();
        return;
      }

      if (targetScroll <= getCurrentScrollY() + 8) {
        return;
      }

      autoPeekHomeY = getCurrentScrollY();
      autoPeekTarget = targetScroll;
      autoPeekInProgress = true;

      animateHeroPeekScroll(targetScroll, HERO_PEEK_TRAVEL_DURATION, function() {
        if (heroGuidanceDismissed) return;

        heroPeekReturnTimeout = window.setTimeout(function() {
          animateHeroPeekScroll(autoPeekHomeY, HERO_PEEK_TRAVEL_DURATION, function() {
            autoPeekInProgress = false;
          });
        }, HERO_PEEK_HOLD_DELAY);
      });
    }, HERO_STUCK_PEEK_DELAY);
  }

  window.addEventListener('scroll', handleHeroScrollProgress, { passive: true });
  window.addEventListener('wheel', handleHeroScrollIntent, { passive: true });
  window.addEventListener('touchmove', handleHeroScrollIntent, { passive: true });
  window.addEventListener('keydown', handleHeroScrollIntent);
  window.addEventListener('pageshow', scheduleOpeningStageRestoreCheck);
  window.addEventListener('load', scheduleOpeningStageRestoreCheck);

  vpNeutralizeOpeningSealScaleAnimation(envelope);

  if (envelope && video) {
    lockScroll();
    scheduleOpeningStageRestoreCheck();

    if (skipOpeningStageForRestoredScroll()) {
      return;
    }

    let clicked = false;
    envelope.addEventListener('click', function(event) {
      if (!clicked) {
        clicked = true;
        hideLanguageToggle();
        video.play().catch(function(error) {
          console.warn('Hero video could not start automatically.', error);
        });
        vpStartBackgroundAudio({ restart: true });

        setTimeout(dismissOpeningStage, OPENING_DISMISS_DELAY);
        setTimeout(function() {
          if (openingRecord) {
            openingRecord.style.display = 'none';
          }
          restorePageLayoutAfterOpening();
        }, OPENING_HIDE_DELAY);

        setTimeout(function() {
          unlockScroll();
          startHeroGuidance();
        }, SCROLL_UNLOCK_DELAY);
      } else {
        event.stopImmediatePropagation();
        event.preventDefault();
        return false;
      }
    }, true); // Use capture phase

    if (envelopeLabel) {
      envelopeLabel.addEventListener('click', function(event) {
        if (clicked) {
          event.preventDefault();
          return;
        }

        event.preventDefault();
        envelope.click();
      });
    }

    if (envelopeSubtitle) {
      envelopeSubtitle.addEventListener('click', function(event) {
        if (clicked) {
          event.preventDefault();
          return;
        }

        event.preventDefault();
        envelope.click();
      });
    }
  }

  window.addEventListener('resize', function() {
    if (openingRecord && openingRecord.dataset.vpDismissed === 'true') {
      restorePageLayoutAfterOpening();
    }
  });
});

// Language Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  const langSwitch = document.getElementById('lang-switch');
  const langEn = document.getElementById('lang-en');
  const langGu = document.getElementById('lang-gu');
  let currentLang = localStorage.getItem('language') || 'en';

  function setHtml(selector, value) {
    const element = document.querySelector(selector);
    if (element) {
      element.innerHTML = value;
    }
  }

  function setHtmlAll(selector, value) {
    document.querySelectorAll(selector).forEach(function(element) {
      element.innerHTML = value;
    });
  }

  function setText(selector, value) {
    const element = document.querySelector(selector);
    if (element) {
      element.textContent = value;
    }
  }

  function setTextAll(selector, value) {
    document.querySelectorAll(selector).forEach(function(element) {
      element.textContent = value;
    });
  }

  function setPhoneLink(selector, displayValue, phoneNumber, hintText) {
    var safeDisplayValue = displayValue == null ? '' : String(displayValue);
    var safeHintText = hintText == null ? '' : String(hintText);
    var normalizedNumber = phoneNumber == null ? '' : String(phoneNumber).replace(/[^\d+]/g, '');
    setHtml(
      selector,
      '<a class="vp-phone-link" href="tel:' + normalizedNumber + '" aria-label="' + safeHintText + ' ' + safeDisplayValue + '">' +
        '<span class="vp-phone-link__hint">' +
          '<span class="vp-phone-link__hint-icon" aria-hidden="true">' +
            '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
              '<path d="M22 16.92V20a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h3.09a2 2 0 0 1 2 1.72l.42 2.86a2 2 0 0 1-.57 1.72l-1.5 1.5a16 16 0 0 0 4.95 4.95l1.5-1.5a2 2 0 0 1 1.72-.57l2.86.42A2 2 0 0 1 22 16.92Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>' +
            '</svg>' +
          '</span>' +
          '<span class="vp-phone-link__hint-text">' + safeHintText + '</span>' +
        '</span>' +
        '<span class="vp-phone-link__number">' + safeDisplayValue + '</span>' +
      '</a>'
    );
  }

  function setLanguage(lang) {
    localStorage.setItem('language', lang);
    document.documentElement.setAttribute('lang', lang === 'gu' ? 'gu' : 'en');
    document.body.setAttribute('data-language', lang);
    const toggle = document.getElementById('language-toggle');
    if (lang === 'en') {
      langSwitch.checked = false;
      langEn.style.color = 'red';
      langGu.style.color = 'red';
      toggle.style.background = 'transparent';
      setEnglish();
    } else {
      langSwitch.checked = true;
      langEn.style.color = 'grey';
      langGu.style.color = 'grey';
      toggle.style.background = 'rgb(102, 2, 31)';
      setGujarati();
    }

    vpUpdateHeroScrollCueLanguage();
  }

  function setEnglish() {
    setHtml('[field="tn_text_1763402147625"]', 'Palak<br /><br />Shubham');
    setHtml('[field="tn_text_176340398328864790"]', 'Wedding Day');
    setHtml('[field="tn_text_176340401720454780"]', '20 . 11 . 26');
    setHtml('[field="tn_text_176340390975774690"]', 'Weds');
    setHtml('[field="tn_text_1773926384566"]', 'Click to open');
    setHtml('[field="tn_text_1774451670001"]', 'With joyful hearts, we invite you to unfold our story.');

    setHtml('#rec2002273681 [field="tn_text_1763405219328"]', 'Dear Friends and Family,');
    setHtml('#rec2002273681 [field="tn_text_1763405268776"]', 'With joyful hearts and countless blessings, we warmly invite you to celebrate the wedding of Palak and Shubham and witness the beginning of their beautiful forever together.');

    setHtml('#rec2002274581 [field="tn_text_1771277026942000001"]', 'The Celebration Begins In');
    setText('#countdownContainer .time-block:nth-child(1) .label', 'Days');
    setText('#countdownContainer .time-block:nth-child(3) .label', 'Hours');
    setText('#countdownContainer .time-block:nth-child(5) .label', 'Minutes');
    setText('#countdownContainer .time-block:nth-child(7) .label', 'Seconds');

    vpRenderLocationSection('en');
    vpRenderEventTimeline('en');
    setHtml('#rec2002506421 [field="tn_text_1772803062504"]', '19 Nov 8 pm');
    vpRenderDressCodeSection('en');

    setHtml('#rec2003555721 [field="tn_text_1771277026942000001"]', 'Details');
    setHtml('#rec2003555721 [field="tn_text_1772804808869"]', '');
    setHtml('#rec2003555721 [field="tn_text_1772822506940000003"]', 'Your gracious presence and blessings will make the day even more memorable.');
    setHtml('#rec2003555721 [field="tn_text_1772822008587000001"]', 'For more details, contact Manish Katira');
    setPhoneLink('#rec2003555721 [field="tn_text_1772822026012000002"]', '7028028194', '+917028028194', 'Tap to call');

    setHtml('#rec2003860951 [field="tn_text_1763405219328"]', 'Confirm Your Attendance');
    setHtml('#rec2003860951 [field="tn_text_1772813849329000001"]', 'To help us prepare for a joyful celebration, kindly confirm your attendance.');
    setText('#rec2003860951 .tn-atom__button-text', 'Confirm Attendance');

    setText('#popuptitle_2052858183', 'Confirm Your Attendance');
    setText('#rec2052858183 .t702__descr', 'Please RSVP before March 20');
    setText('#field-title_5828866651120', 'Your name');
    setText('#field-title_5828866651121', 'Will you come?');
    setTextAll('#rec2052858183 .t-checkboxes__item span', '');
    setText('#rec2052858183 .t-checkboxes__item:nth-child(1) span', 'Yes, I will');
    setText('#rec2052858183 .t-checkboxes__item:nth-child(2) span', 'Unfortunately, I cant :(');
    document.querySelectorAll('#rec2052858183 .t-checkbox').forEach(function(input, index) {
      input.value = index === 0 ? 'Yes, I will' : 'Unfortunately, I cant :(';
    });
    setText('#rec2052858183 .t-btnflex__text', 'Submit');

    setHtml('#rec2003869491 [field="tn_text_1763405219328"]', 'Hope to see you there!');
    setHtml('#rec2003869491 [field="tn_text_1772813849329000001"]', 'Palak and Shubham');
    setText('#vp-made-with-love', 'Made for Palak and Shubham with ❤️');
  }

  function setGujarati() {
    setHtml('[field="tn_text_1763402147625"]', 'પલક<br /><br />શુભમ');
    setHtml('[field="tn_text_176340398328864790"]', 'લગ્ન દિવસ');
    setHtml('[field="tn_text_176340401720454780"]', '૨૦ . ૧૧ . ૨૬');
    setHtml('[field="tn_text_176340390975774690"]', 'વેડ્સ');
    setHtml('[field="tn_text_1773926384566"]', 'ખોલવા માટે ક્લિક કરો');
    setHtml('[field="tn_text_1774451670001"]', 'આનંદભર્યા હૃદયોથી, અમે તમને અમારી વાર્તા ખુલ્લી જોવા આમંત્રિત કરીએ છીએ.');

    setHtml('#rec2002273681 [field="tn_text_1763405219328"]', 'પ્રિય મિત્રો અને પરિવાર,');
    setHtml('#rec2002273681 [field="tn_text_1763405268776"]', 'આનંદભર્યા હૃદયો અને અગણિત આશીર્વાદ સાથે, અમે આપને પલક અને શુભમના લગ્નોત્સવમાં હાર્દિક આમંત્રિત કરીએ છીએ અને તેમના સુંદર સદાયના સફરની શરૂઆતના સાક્ષી બનવા આમંત્રણ આપીએ છીએ.');

    setHtml('#rec2002274581 [field="tn_text_1771277026942000001"]', 'ઉજવણી શરૂ થવામાં બાકી છે');
    setText('#countdownContainer .time-block:nth-child(1) .label', 'દિવસ');
    setText('#countdownContainer .time-block:nth-child(3) .label', 'કલાક');
    setText('#countdownContainer .time-block:nth-child(5) .label', 'મિનિટ');
    setText('#countdownContainer .time-block:nth-child(7) .label', 'સેકંડ');

    vpRenderLocationSection('gu');
    vpRenderEventTimeline('gu');
    setHtml('#rec2002506421 [field="tn_text_1772803062504"]', '૧૯ નવેમ્બર સાંજે ૮ વાગ્યે');
    vpRenderDressCodeSection('gu');

    setHtml('#rec2003555721 [field="tn_text_1771277026942000001"]', 'વિગતો');
    setHtml('#rec2003555721 [field="tn_text_1772804808869"]', '');
    setHtml('#rec2003555721 [field="tn_text_1772822506940000003"]', 'આપની સ્નેહભરી ઉપસ્થિતિ અને આશીર્વાદ આ દિવસને વધુ યાદગાર બનાવશે.');
    setHtml('#rec2003555721 [field="tn_text_1772822008587000001"]', 'વધુ વિગતો માટે, મનીષ કટીરાનો સંપર્ક કરો');
    setPhoneLink('#rec2003555721 [field="tn_text_1772822026012000002"]', '૭૦૨૮૦૨૮૧૯૪', '+917028028194', 'ટૅપ કરીને કૉલ કરો');

    setHtml('#rec2003860951 [field="tn_text_1763405219328"]', 'હાજરીની પુષ્ટિ કરો');
    setHtml('#rec2003860951 [field="tn_text_1772813849329000001"]', 'અમારી આનંદમય ઉજવણીની તૈયારીઓમાં મદદ કરવા માટે, કૃપા કરીને તમારી હાજરીની પુષ્ટિ કરો.');
    setText('#rec2003860951 .tn-atom__button-text', 'હાજરીની પુષ્ટિ કરો');

    setText('#popuptitle_2052858183', 'હાજરીની પુષ્ટિ કરો');
    setText('#rec2052858183 .t702__descr', 'કૃપા કરીને ૨૦ માર્ચ પહેલાં RSVP કરો');
    setText('#field-title_5828866651120', 'તમારું નામ');
    setText('#field-title_5828866651121', 'શું તમે આવશો?');
    setText('#rec2052858183 .t-checkboxes__item:nth-child(1) span', 'હા, હું આવીશ');
    setText('#rec2052858183 .t-checkboxes__item:nth-child(2) span', 'દુર્ભાગ્યે, હું આવી શકતો નથી');
    document.querySelectorAll('#rec2052858183 .t-checkbox').forEach(function(input, index) {
      input.value = index === 0 ? 'હા, હું આવીશ' : 'દુર્ભાગ્યે, હું આવી શકતો નથી';
    });
    setText('#rec2052858183 .t-btnflex__text', 'મોકલો');

    setHtml('#rec2003869491 [field="tn_text_1763405219328"]', 'ત્યાં તમને જોવાની આશા છે!');
    setHtml('#rec2003869491 [field="tn_text_1772813849329000001"]', 'પલક અને શુભમ');
    setText('#vp-made-with-love', 'પલક અને શુભમ માટે પ્રેમથી બનાવ્યું ❤️');
  }

  langSwitch.addEventListener('change', function() {
    setLanguage(this.checked ? 'gu' : 'en');
  });

  setLanguage(currentLang);
});
