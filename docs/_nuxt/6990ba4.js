/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{203:function(e,t,n){var content=n(207);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(54).default)("a8d998f8",content,!0,{sourceMap:!1})},204:function(e,t,n){var content=n(211);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(54).default)("9dc2eade",content,!0,{sourceMap:!1})},205:function(e,t,n){var content=n(213);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(54).default)("6a0b58cd",content,!0,{sourceMap:!1})},206:function(e,t,n){"use strict";n(203)},207:function(e,t,n){(t=n(53)(!1)).push([e.i,".mw-600[data-v-e638f23a]{max-width:600px;margin:0 auto}img[data-v-e638f23a]{max-width:100%}",""]),e.exports=t},208:function(e,t,n){"use strict";n.r(t);var o={props:{src:{default:"https://placehold.it/600x400"},alt:{default:""}}},r=(n(206),n(31)),component=Object(r.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mw-600"},[t("img",{staticClass:"d-block mx-auto mb-3",attrs:{src:this.src,alt:this.alt}})])}),[],!1,null,"e638f23a",null);t.default=component.exports},209:function(e,t,n){var o,r;!function(l,c){"use strict";void 0===(r="function"==typeof(o=function(){var e,t,u,n,o,b={},r={captions:!0,buttons:"auto",fullScreen:!1,noScrollbars:!1,bodyClass:"baguetteBox-open",titleTag:!1,async:!1,preload:2,animation:"slideIn",afterShow:null,afterHide:null,onChange:null,overlayBackgroundColor:"rgba(0,0,0,.8)"},l={},c=[],d=0,f=!1,i={},a=!1,h=/.+\.(gif|jpe?g|png|webp)/i,m={},y=[],s=null,w=function(e){-1!==e.target.id.indexOf("baguette-img")&&A()},v=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,L()},x=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,F()},k=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,A()},B=function(e){i.count++,1<i.count&&(i.multitouch=!0),i.startX=e.changedTouches[0].pageX,i.startY=e.changedTouches[0].pageY},j=function(e){if(!a&&!i.multitouch){e.preventDefault?e.preventDefault():e.returnValue=!1;var t=e.touches[0]||e.changedTouches[0];40<t.pageX-i.startX?(a=!0,L()):t.pageX-i.startX<-40?(a=!0,F()):100<i.startY-t.pageY&&A()}},C=function(){i.count--,i.count<=0&&(i.multitouch=!1),a=!1},E=function(){C()},J=function(t){"block"===e.style.display&&e.contains&&!e.contains(t.target)&&(t.stopPropagation(),W())};function _(e){if(m.hasOwnProperty(e)){var t=m[e].galleries;[].forEach.call(t,(function(e){[].forEach.call(e,(function(e){Y(e.imageElement,"click",e.eventHandler)})),c===e&&(c=[])})),delete m[e]}}function I(e){switch(e.keyCode){case 37:L();break;case 39:F();break;case 27:A();break;case 36:!function(e){e&&e.preventDefault(),S(0)}(e);break;case 35:!function(e){e&&e.preventDefault(),S(c.length-1)}(e)}}function R(o,l){if(c!==o){for(c=o,function(o){for(var l in o=o||{},r)b[l]=r[l],void 0!==o[l]&&(b[l]=o[l]);t.style.transition=t.style.webkitTransition="fadeIn"===b.animation?"opacity .4s ease":"slideIn"===b.animation?"":"none","auto"===b.buttons&&("ontouchstart"in window||1===c.length)&&(b.buttons=!1),u.style.display=n.style.display=b.buttons?"":"none";try{e.style.backgroundColor=b.overlayBackgroundColor}catch(e){}}(l);t.firstChild;)t.removeChild(t.firstChild);for(var d,f=[],i=[],a=y.length=0;a<o.length;a++)(d=X("div")).className="full-image",d.id="baguette-img-"+a,y.push(d),f.push("baguetteBox-figure-"+a),i.push("baguetteBox-figcaption-"+a),t.appendChild(y[a]);e.setAttribute("aria-labelledby",f.join(" ")),e.setAttribute("aria-describedby",i.join(" "))}}function T(t){b.noScrollbars&&(document.documentElement.style.overflowY="hidden",document.body.style.overflowY="scroll"),"block"!==e.style.display&&(M(document,"keydown",I),i={count:0,startX:null,startY:null},q(d=t,(function(){H(d),O(d)})),P(),e.style.display="block",b.fullScreen&&(e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.mozRequestFullScreen&&e.mozRequestFullScreen()),setTimeout((function(){e.className="visible",b.bodyClass&&document.body.classList&&document.body.classList.add(b.bodyClass),b.afterShow&&b.afterShow()}),50),b.onChange&&b.onChange(d,y.length),s=document.activeElement,W(),f=!0)}function W(){b.buttons?u.focus():o.focus()}function A(){b.noScrollbars&&(document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto"),"none"!==e.style.display&&(Y(document,"keydown",I),e.className="",setTimeout((function(){e.style.display="none",document.fullscreen&&(document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()),b.bodyClass&&document.body.classList&&document.body.classList.remove(b.bodyClass),b.afterHide&&b.afterHide(),s&&s.focus(),f=!1}),500))}function q(e,t){var n=y[e],o=c[e];if(void 0!==n&&void 0!==o)if(n.getElementsByTagName("img")[0])t&&t();else{var i=o.imageElement,a=i.getElementsByTagName("img")[0],s="function"==typeof b.captions?b.captions.call(c,i):i.getAttribute("data-caption")||i.title,r=function(e){var t=e.href;if(e.dataset){var n=[];for(var o in e.dataset)"at-"!==o.substring(0,3)||isNaN(o.substring(3))||(n[o.replace("at-","")]=e.dataset[o]);for(var i=Object.keys(n).sort((function(e,t){return parseInt(e,10)<parseInt(t,10)?-1:1})),a=window.innerWidth*window.devicePixelRatio,s=0;s<i.length-1&&i[s]<a;)s++;t=n[i[s]]||t}return t}(i),l=X("figure");if(l.id="baguetteBox-figure-"+e,l.innerHTML='<div class="baguetteBox-spinner"><div class="baguetteBox-double-bounce1"></div><div class="baguetteBox-double-bounce2"></div></div>',b.captions&&s){var u=X("figcaption");u.id="baguetteBox-figcaption-"+e,u.innerHTML=s,l.appendChild(u)}n.appendChild(l);var d=X("img");d.onload=function(){var n=document.querySelector("#baguette-img-"+e+" .baguetteBox-spinner");l.removeChild(n),!b.async&&t&&t()},d.setAttribute("src",r),d.alt=a&&a.alt||"",b.titleTag&&s&&(d.title=s),l.appendChild(d),b.async&&t&&t()}}function F(){return S(d+1)}function L(){return S(d-1)}function S(e,t){return!f&&0<=e&&e<t.length?(R(t,b),T(e),!0):e<0?(b.animation&&N("left"),!1):e>=y.length?(b.animation&&N("right"),!1):(q(d=e,(function(){H(d),O(d)})),P(),b.onChange&&b.onChange(d,y.length),!0)}function N(e){t.className="bounce-from-"+e,setTimeout((function(){t.className=""}),400)}function P(){var e=100*-d+"%";"fadeIn"===b.animation?(t.style.opacity=0,setTimeout((function(){l.transforms?t.style.transform=t.style.webkitTransform="translate3d("+e+",0,0)":t.style.left=e,t.style.opacity=1}),400)):l.transforms?t.style.transform=t.style.webkitTransform="translate3d("+e+",0,0)":t.style.left=e}function H(e){e-d>=b.preload||q(e+1,(function(){H(e+1)}))}function O(e){d-e>=b.preload||q(e-1,(function(){O(e-1)}))}function M(e,t,n,o){e.addEventListener?e.addEventListener(t,n,o):e.attachEvent("on"+t,(function(e){(e=e||window.event).target=e.target||e.srcElement,n(e)}))}function Y(e,t,n,o){e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent("on"+t,n)}function D(e){return document.getElementById(e)}function X(e){return document.createElement(e)}return[].forEach||(Array.prototype.forEach=function(e,t){for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),[].filter||(Array.prototype.filter=function(e,t,n,o,i){for(n=this,o=[],i=0;i<n.length;i++)e.call(t,n[i],i,n)&&o.push(n[i]);return o}),{run:function(r,c){return l.transforms=function(){var e=X("div");return void 0!==e.style.perspective||void 0!==e.style.webkitPerspective}(),l.svg=function(){var e=X("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"===(e.firstChild&&e.firstChild.namespaceURI)}(),l.passiveEvents=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(e){}return e}(),function(){if(e=D("baguetteBox-overlay"))return t=D("baguetteBox-slider"),u=D("previous-button"),n=D("next-button"),void(o=D("close-button"));(e=X("div")).setAttribute("role","dialog"),e.id="baguetteBox-overlay",document.getElementsByTagName("body")[0].appendChild(e),(t=X("div")).id="baguetteBox-slider",e.appendChild(t),(u=X("button")).setAttribute("type","button"),u.id="previous-button",u.setAttribute("aria-label","Previous"),u.innerHTML=l.svg?'<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>':"&lt;",e.appendChild(u),(n=X("button")).setAttribute("type","button"),n.id="next-button",n.setAttribute("aria-label","Next"),n.innerHTML=l.svg?'<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>':"&gt;",e.appendChild(n),(o=X("button")).setAttribute("type","button"),o.id="close-button",o.setAttribute("aria-label","Close"),o.innerHTML=l.svg?'<svg width="30" height="30"><g stroke="rgb(160,160,160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>':"&times;",e.appendChild(o),u.className=n.className=o.className="baguetteBox-button",function(){var r=l.passiveEvents?{passive:!1}:null,c=l.passiveEvents?{passive:!0}:null;M(e,"click",w),M(u,"click",v),M(n,"click",x),M(o,"click",k),M(t,"contextmenu",E),M(e,"touchstart",B,c),M(e,"touchmove",j,r),M(e,"touchend",C),M(document,"focus",J,!0)}()}(),_(r),function(e,a){var t=document.querySelectorAll(e),n={galleries:[],nodeList:t};return m[e]=n,[].forEach.call(t,(function(e){a&&a.filter&&(h=a.filter);var t=[];if(t="A"===e.tagName?[e]:e.getElementsByTagName("a"),0!==(t=[].filter.call(t,(function(e){if(-1===e.className.indexOf(a&&a.ignoreClass))return h.test(e.href)}))).length){var i=[];[].forEach.call(t,(function(e,t){var n=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1,R(i,a),T(t)},o={eventHandler:n,imageElement:e};M(e,"click",n),i.push(o)})),n.galleries.push(i)}})),n.galleries}(r,c)},show:S,showNext:F,showPrevious:L,hide:A,destroy:function(){!function(){var r=l.passiveEvents?{passive:!1}:null,c=l.passiveEvents?{passive:!0}:null;Y(e,"click",w),Y(u,"click",v),Y(n,"click",x),Y(o,"click",k),Y(t,"contextmenu",E),Y(e,"touchstart",B,c),Y(e,"touchmove",j,r),Y(e,"touchend",C),Y(document,"focus",J,!0)}(),function(){for(var e in m)m.hasOwnProperty(e)&&_(e)}(),Y(document,"keydown",I),document.getElementsByTagName("body")[0].removeChild(document.getElementById("baguetteBox-overlay")),m={},c=[],d=0}}})?o.call(t,n,t,e):o)||(e.exports=r)}()},210:function(e,t,n){"use strict";n(204)},211:function(e,t,n){(t=n(53)(!1)).push([e.i,".baguette-box-container .gallery-container{display:flex;flex-wrap:wrap;justify-content:center;align-items:center}.baguette-box-container .gallery-container a{max-width:25%}.baguette-box-container .gallery-container a img{padding:.75em;width:100%}",""]),e.exports=t},212:function(e,t,n){"use strict";n(205)},213:function(e,t,n){(t=n(53)(!1)).push([e.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*!\n * baguetteBox.js\n * @author  feimosi\n * @version 1.11.1\n * @url https://github.com/feimosi/baguetteBox.js\n */#baguetteBox-overlay{display:none;opacity:0;position:fixed;overflow:hidden;top:0;left:0;width:100%;height:100%;z-index:1000000;background-color:#222;background-color:rgba(0,0,0,.8);transition:opacity .5s ease}#baguetteBox-overlay.visible{opacity:1}#baguetteBox-overlay .full-image{display:inline-block;position:relative;width:100%;height:100%;text-align:center}#baguetteBox-overlay .full-image figure{display:inline;margin:0;height:100%}#baguetteBox-overlay .full-image img{display:inline-block;width:auto;height:auto;max-height:100%;max-width:100%;vertical-align:middle;box-shadow:0 0 8px rgba(0,0,0,.6)}#baguetteBox-overlay .full-image figcaption{display:block;position:absolute;bottom:0;width:100%;text-align:center;line-height:1.8;white-space:normal;color:#ccc;background-color:#000;background-color:rgba(0,0,0,.6);font-family:sans-serif}#baguetteBox-overlay .full-image:before{content:"";display:inline-block;height:50%;width:1px;margin-right:-1px}#baguetteBox-slider{position:absolute;left:0;top:0;height:100%;width:100%;white-space:nowrap;transition:left .4s ease,transform .4s ease}#baguetteBox-slider.bounce-from-right{-webkit-animation:bounceFromRight .4s ease-out;animation:bounceFromRight .4s ease-out}#baguetteBox-slider.bounce-from-left{-webkit-animation:bounceFromLeft .4s ease-out;animation:bounceFromLeft .4s ease-out}@-webkit-keyframes bounceFromRight{0%,to{margin-left:0}50%{margin-left:-30px}}@keyframes bounceFromRight{0%,to{margin-left:0}50%{margin-left:-30px}}@-webkit-keyframes bounceFromLeft{0%,to{margin-left:0}50%{margin-left:30px}}@keyframes bounceFromLeft{0%,to{margin-left:0}50%{margin-left:30px}}.baguetteBox-button#next-button,.baguetteBox-button#previous-button{top:50%;top:calc(50% - 30px);width:44px;height:60px}.baguetteBox-button{position:absolute;cursor:pointer;outline:0;padding:0;margin:0;border:0;border-radius:15%;background-color:#323232;background-color:rgba(50,50,50,.5);color:#ddd;font:1.6em sans-serif;transition:background-color .4s ease}.baguetteBox-button:focus,.baguetteBox-button:hover{background-color:rgba(50,50,50,.9)}.baguetteBox-button#next-button{right:2%}.baguetteBox-button#previous-button{left:2%}.baguetteBox-button#close-button{top:20px;right:2%;right:calc(2% + 6px);width:30px;height:30px}.baguetteBox-button svg{position:absolute;left:0;top:0}.baguetteBox-spinner{width:40px;height:40px;display:inline-block;position:absolute;top:50%;left:50%;margin-top:-20px;margin-left:-20px}.baguetteBox-double-bounce1,.baguetteBox-double-bounce2{width:100%;height:100%;border-radius:50%;background-color:#fff;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:bounce 2s ease-in-out infinite;animation:bounce 2s ease-in-out infinite}.baguetteBox-double-bounce2{-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes bounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}@keyframes bounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}',""]),e.exports=t},214:function(e,t,n){"use strict";n.r(t);n(11);var o=n(209),r=n.n(o),l={name:"BaguetteBox",props:{gallery:Array,name:{default:"gallery"},button:{default:!1,type:Boolean},buttonColor:{default:"primary"},buttonText:{default:"Launch Gallery"}},data:function(){return{runGallery:null}},methods:{run:function(){r.a.show(0,this.runGallery[0])}},mounted:function(){this.runGallery=r.a.run(".".concat(this.name))}},c=(n(210),n(212),n(31)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"baguette-box-container"},[e.button?n("button",{class:"btn btn-"+e.buttonColor,on:{click:e.run}},[e._v(e._s(e.buttonText))]):e._e(),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.button,expression:"!button"}],staticClass:"gallery-container",class:e.name},e._l(e.gallery,(function(g,e){return n("a",{key:e,attrs:{href:g.img,"data-caption":g.title}},[n("img",{attrs:{src:g.thumbnail,alt:g.title}})])})),0)])}),[],!1,null,null,null);t.default=component.exports},227:function(e,t,n){"use strict";n.r(t);var o={head:function(){return{title:"Jeffrey R. Wangsgard & Associates",meta:[{hid:"description",content:"A project by Nathan Blaylock for Jeffrey R. Wangsgard and Associates, who needed help with branding and a website. See a brief overview of the project.",name:"description"},{hid:"og:title",content:"Jeffrey R. Wangsgard & Associates",property:"og:title"},{hid:"og:description",content:"A project by Nathan Blaylock for Jeffrey R. Wangsgard and Associates, who needed help with branding and a website. See a brief overview of the project.",property:"og:description"}]}},data:function(){return{gallery:[{img:"/img/projects/jrwcpatax/JRW-gallery-1.png",thumbnail:"/img/projects/jrwcpatax/JRW-gallery-1.png",title:"Outdoor Sign"},{img:"/img/projects/jrwcpatax/JRW-gallery-2.png",thumbnail:"/img/projects/jrwcpatax/JRW-gallery-2.png",title:"Indoor Sign"},{img:"/img/projects/jrwcpatax/JRW-gallery-3.png",thumbnail:"/img/projects/jrwcpatax/JRW-gallery-3.png",title:"Wordmark Sign"},{img:"/img/projects/jrwcpatax/JRW-gallery-4.png",thumbnail:"/img/projects/jrwcpatax/JRW-gallery-4.png",title:"Letterhead Design"},{img:"/img/projects/jrwcpatax/JRW-gallery-5.png",thumbnail:"/img/projects/jrwcpatax/JRW-gallery-5.png",title:"Business Card & Tax Folder"}]}}},r=n(31),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pb-5"},[n("img",{staticClass:"img-fluid",attrs:{src:"/img/projects/jrwcpatax/JRW-hero.png",alt:""}}),e._v(" "),n("div",{staticClass:"container-sm"},[n("h1",[e._v("Jeffrey R. Wangsgard & Associates")]),e._v(" "),n("p",[e._v("\n      Jeffrey Wangsgard is a Certified Public Accountant in Cache Valley, and\n      has been working with a partner for a number of years. After he and his\n      partner decided to split the business and go separate directions Jeffrey\n      started looking for branding and a website for his new business. He had\n      a one month timeline between when he contacted me to when he would be in\n      his new office space. It was time to get started.\n    ")]),e._v(" "),n("p",[e._v("\n      The first thing to start on was branding. I did quite a bit of brand\n      research and tried out a few options, and ended up with a wordmark. The\n      font I chose was Alegreya Sans SC. It is professional, clean, and not a\n      common font. I especially liked it because it was designed to be a small\n      cap font. Another thing that I liked about the font was that the “J” in\n      Jeffrey goes below the font baseline. I thought that worked really well\n      being the first character in the wordmark.\n    ")]),e._v(" "),n("ProjectImg",{attrs:{src:"/img/projects/jrwcpatax/JRW-wordmarks.png"}}),e._v(" "),n("p",[e._v("\n      I played around with a few colors, and chose to go with teal and dark\n      teal. To add some contrast, I also added in a golden orange color, which\n      actually helps tie in his previous business color scheme. Once we had\n      his branding in order, I gathered all of his branding assets into one\n      package that he could keep at his business, and use however he needed.\n      Some important parts of his package included his logo in different\n      colors and formats (jpg, png, eps), the fonts we used, and the colors\n      listed out in HEX, RGB, and CMYK.\n    ")]),e._v(" "),n("ProjectImg",{attrs:{src:"/img/projects/jrwcpatax/JRW-colors.png"}}),e._v(" "),n("p",[e._v("\n      Once Jeffrey gave me the go-ahead, we moved on to some building signage\n      and promotional materials. Jeffrey’s business is on Main Street in\n      Logan, and he had a space where he could put his logo on an outdoor\n      sign. He connected me with a sign maker in town that he had worked with\n      before, and got me the dimensions of the sign. We worked together to\n      talk about materials and his process. Before too long, we had his logo\n      up so everyone could see it. Inside the building, we put up a big window\n      sign on all the exterior windows, and included some instructions to\n      which door was the correct door to go in (it was a pretty confusing\n      space if you enter the building through the wrong door). We got some\n      business cards for Jeffrey and his employees, as well as a tax folder.\n      Jeffrey was officially ready to start seeing clients.\n    ")]),e._v(" "),n("ProjectImg",{attrs:{src:"/img/projects/jrwcpatax/JRW-gallery.png"}}),e._v(" "),n("BaguetteBox",{staticClass:"d-block mb-3 text-center",attrs:{gallery:e.gallery,button:""}}),e._v(" "),n("p",[e._v("\n      During the same time that we worked on the promotional materials, we\n      also got the website up and running. The website reflected his brand\n      really well. We used the same teal and dark teal colors primarily\n      throughout the website, and used the golden orange color for some\n      buttons to help them stand out more. For me, the hardest part of\n      building a website is getting all the content in order. Fortunately,\n      Jeffrey was able to get me all the content quickly. That was very\n      helpful since Jeffrey knew his own content much better than I ever\n      could. One extra feature that we were able to put on his website is a\n      login to a third party software group that Jeffrey uses for his clients.\n      A client would normally go to this company’s website and login from\n      there, but the company gave us some code that would allow the user to\n      log in straight from Jeffery’s website, then be redirected to where they\n      needed to go. We felt like that would provide a better user experience.\n    ")]),e._v(" "),n("ProjectImg",{attrs:{src:"/img/projects/jrwcpatax/JRW-screenshot.png"}}),e._v(" "),e._m(0),e._v(" "),n("p",[e._v("\n      It was so much fun to work on this branding and website project with\n      Jeffrey. I still continue to help him out with any needs he has with\n      branding. I loved working with Jeffrey, and feel like the work I did for\n      him really helped his business out in many ways. We got lots of\n      compliments from his returning clients on how well the brand turned out\n      and how easy the website was to use.\n    ")])],1)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"text-center"},[t("a",{staticClass:"btn btn-primary",attrs:{href:"https://jrwcpatax.com",target:"_blank"}},[this._v("View Website")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{ProjectImg:n(208).default,BaguetteBox:n(214).default})}}]);