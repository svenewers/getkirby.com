!function(e){var t={};function r(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:s})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/assets/",r(r.s=36)}({36:function(e,t,r){e.exports=r(37)},37:function(e,t,r){"use strict";r(38)},38:function(e,t){!function(e,t,r){"use strict";function s(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function n(e,t,r){var s=t*Math.pow(e-.4,1.9);return o||(s/=1.3),(e+=s)>r}function i(e,t){return e.res-t.res}function c(e,t,r){var s;return!r&&t&&(r=(r=e[x.ns].sets)&&r[r.length-1]),(s=a(t,r))&&(t=x.makeUrl(t),e[x.ns].curSrc=t,e[x.ns].curCan=s,s.res||J(s,s.set.sizes)),s}function a(e,t){var r,s,n;if(e&&t)for(n=x.parseSet(t),e=x.makeUrl(e),r=0;r<n.length;r++)if(e==x.makeUrl(n[r].url)){s=n[r];break}return s}var u,l,o,p,m,f,d,h,g,v,x={},y=function(){},S=t.createElement("img"),w=S.getAttribute,b=S.setAttribute,z=S.removeAttribute,T=t.documentElement,E={},M={xQuant:1,lazyFactor:.4,maxX:2},C="data-pfsrc",R=C+"set",P="webkitBackfaceVisibility"in T.style,k=navigator.userAgent,$=/rident/.test(k)||/ecko/.test(k)&&k.match(/rv\:(\d+)/)&&RegExp.$1>35,A="currentSrc",F=/\s+\+?\d+(e\d+)?w/,I=/((?:\([^)]+\)(?:\s*and\s*|\s*or\s*|\s*not\s*)?)+)?\s*(.+)/,L=/^([\+eE\d\.]+)(w|x)$/,U=/\s*\d+h\s*/,G=e.respimgCFG,W=(location.protocol,"position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)"),j="font-size:100%!important;",D=!0,N={},O={},Q=e.devicePixelRatio,V={px:1,in:96},X=t.createElement("a"),q=!1,H=function(e,t,r,s){e.addEventListener?e.addEventListener(t,r,s||!1):e.attachEvent&&e.attachEvent("on"+t,r)},_=function(e){var t={};return function(r){return r in t||(t[r]=e(r)),t[r]}},B=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=_(function(e){return"return "+function(){for(var e=arguments,t=0,r=e[0];++t in e;)r=r.replace(e[t],e[++t]);return r}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")});return function(r,s){var n;if(!(r in N))if(N[r]=!1,s&&(n=r.match(e)))N[r]=n[1]*V[n[2]];else try{N[r]=new Function("e",t(r))(V)}catch(e){}return N[r]}}(),J=function(e,t){return e.w?(e.cWidth=x.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.x,e},K=function(r){var s,n,i,c=r||{};if(c.elements&&1==c.elements.nodeType&&("IMG"==c.elements.nodeName.toUpperCase()?c.elements=[c.elements]:(c.context=c.elements,c.elements=null)),c.reparse&&(c.reevaluate=!0,e.console&&console.warn&&console.warn("reparse was renamed to reevaluate!")),i=(s=c.elements||x.qsa(c.context||t,c.reevaluate||c.reselect?x.sel:x.selShort)).length){for(x.setupRun(c),q=!0,n=0;i>n;n++)x.fillImg(s[n],c);x.teardownRun(c)}},Y=_(function(e){var t=[1,"x"],r=s(e||"");return r&&(t=!!(r=r.replace(U,"")).match(L)&&[1*RegExp.$1,RegExp.$2]),t});if(A in S||(A="src"),E["image/jpeg"]=!0,E["image/gif"]=!0,E["image/png"]=!0,E["image/svg+xml"]=t.implementation.hasFeature("http://wwwindow.w3.org/TR/SVG11/feature#Image","1.1"),x.ns=("ri"+(new Date).getTime()).substr(0,9),x.supSrcset="srcset"in S,x.supSizes="sizes"in S,x.supPicture=!!e.HTMLPictureElement,x.supSrcset&&x.supPicture&&!x.supSizes&&function(e){S.srcset="data:,a",e.src="data:,a",x.supSrcset=S.complete===e.complete,x.supPicture=x.supSrcset&&x.supPicture}(t.createElement("img")),x.selShort="picture>img,img[srcset]",x.sel=x.selShort,x.cfg=M,x.supSrcset&&(x.sel+=",img["+R+"]"),x.DPR=Q||1,x.u=V,x.types=E,h=x.supSrcset&&!x.supSizes,x.setSize=y,x.makeUrl=_(function(e){return X.href=e,X.href}),x.qsa=function(e,t){return e.querySelectorAll(t)},x.matchesMedia=function(){return x.matchesMedia=e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?function(e){return!e||matchMedia(e).matches}:x.mMQ,x.matchesMedia.apply(this,arguments)},x.mMQ=function(e){return!e||B(e)},x.calcLength=function(e){var t=B(e,!0)||!1;return 0>t&&(t=!1),t},x.supportsType=function(e){return!e||E[e]},x.parseSize=_(function(e){var t=(e||"").match(I);return{media:t&&t[1],length:t&&t[2]}}),x.parseSet=function(e){if(!e.cands){var t,r,s,n,i,c=e.srcset;for(e.cands=[];c;)s=null,-1!=(t=(c=c.replace(/^\s+/g,"")).search(/\s/g))?(","!=(r=c.slice(0,t)).charAt(r.length-1)&&r||(r=r.replace(/,+$/,""),s=""),c=c.slice(t+1),null==s&&(-1!=(n=c.indexOf(","))?(s=c.slice(0,n),c=c.slice(n+1)):(s=c,c=""))):(r=c,c=""),r&&(s=Y(s))&&((i={url:r.replace(/^,+/,""),set:e})[s[1]]=s[0],"x"==s[1]&&1==s[0]&&(e.has1x=!0),e.cands.push(i))}return e.cands},x.getEmValue=function(){var e;if(!d&&(e=t.body)){var r=t.createElement("div"),s=T.style.cssText,n=e.style.cssText;r.style.cssText=W,T.style.cssText=j,e.style.cssText=j,e.appendChild(r),d=r.offsetWidth,e.removeChild(r),d=parseFloat(d,10),T.style.cssText=s,e.style.cssText=n}return d||16},x.calcListLength=function(e){if(!(e in O)||M.uT){var t,r,n,i,c,a,u=s(e).split(/\s*,\s*/),l=!1;for(c=0,a=u.length;a>c&&(t=u[c],n=(r=x.parseSize(t)).length,i=r.media,!n||!x.matchesMedia(i)||!1===(l=x.calcLength(n)));c++);O[e]=l||V.width}return O[e]},x.setRes=function(e){var t;if(e)for(var r=0,s=(t=x.parseSet(e)).length;s>r;r++)J(t[r],e.sizes);return t},x.setRes.res=J,x.applySetCandidate=function(e,t){if(e.length){var r,s,a,o,d,h,g,y,S,w,b,z,T,E=t[x.ns],M=v,C=p,R=f;if(y=E.curSrc||t[A],S=E.curCan||c(t,y,e[0].set),s=x.DPR,T=S&&S.res,!g&&y&&((z=$&&!t.complete&&S&&T-.2>s)||S&&!(m>T)||(S&&s>T&&T>u&&(l>T&&(C*=.8,R+=.04*s),S.res+=C*Math.pow(T-R,2)),w=!E.pic||S&&S.set==e[0].set,S&&w&&S.res>=s&&(g=S))),!g)for(T&&(S.res=S.res-(S.res-T)/2),e.sort(i),g=e[(h=e.length)-1],a=0;h>a;a++)if((r=e[a]).res>=s){g=e[o=a-1]&&(d=r.res-s)&&(z||y!=x.makeUrl(r.url))&&n(e[o].res,d,s)?e[o]:r;break}return T&&(S.res=T),g&&(b=x.makeUrl(g.url),E.curSrc=b,E.curCan=g,b!=y&&x.setSrc(t,g),x.setSize(t)),M}},x.setSrc=function(e,t){var r;e.src=t.url,P&&(r=e.style.zoom,e.style.zoom="0.999",e.style.zoom=r)},x.getSet=function(e){var t,r,s,n=!1,i=e[x.ns].sets;for(t=0;t<i.length&&!n;t++)if((r=i[t]).srcset&&x.matchesMedia(r.media)&&(s=x.supportsType(r.type))){"pending"==s&&(r=s),n=r;break}return n},x.parseSets=function(e,t,s){var n,i,c,u,l="PICTURE"==t.nodeName.toUpperCase(),o=e[x.ns];(o.src===r||s.src)&&(o.src=w.call(e,"src"),o.src?b.call(e,C,o.src):z.call(e,C)),(o.srcset===r||!x.supSrcset||e.srcset||s.srcset)&&(n=w.call(e,"srcset"),o.srcset=n,u=!0),o.sets=[],l&&(o.pic=!0,function(e,t){var r,s,n,i,c=e.getElementsByTagName("source");for(r=0,s=c.length;s>r;r++)(n=c[r])[x.ns]=!0,(i=n.getAttribute("srcset"))&&t.push({srcset:i,media:n.getAttribute("media"),type:n.getAttribute("type"),sizes:n.getAttribute("sizes")})}(t,o.sets)),o.srcset?(i={srcset:o.srcset,sizes:w.call(e,"sizes")},o.sets.push(i),(c=(h||o.src)&&F.test(o.srcset||""))||!o.src||a(o.src,i)||i.has1x||(i.srcset+=", "+o.src,i.cands.push({url:o.src,x:1,set:i}))):o.src&&o.sets.push({srcset:o.src,sizes:null}),o.curCan=null,o.curSrc=r,o.supported=!(l||i&&!x.supSrcset||c),u&&x.supSrcset&&!o.supported&&(n?(b.call(e,R,n),e.srcset=""):z.call(e,R)),o.supported&&!o.srcset&&(!o.src&&e.src||e.src!=x.makeUrl(o.src))&&(null==o.src?e.removeAttribute("src"):e.src=o.src),o.parsed=!0},x.fillImg=function(e,t){var r,s,n=t.reselect||t.reevaluate;if(e[x.ns]||(e[x.ns]={}),s=e[x.ns],n||s.evaled!=v){if(!s.parsed||t.reevaluate){if(!(r=e.parentNode))return;x.parseSets(e,r,t)}s.supported?s.evaled=v:function(e){var t,r=x.getSet(e),s=!1;"pending"!=r&&(s=v,r&&(t=x.setRes(r),s=x.applySetCandidate(t,e))),e[x.ns].evaled=s}(e)}},x.setupRun=function(t){(!q||D||Q!=e.devicePixelRatio)&&(function(){var t;D=!1,Q=e.devicePixelRatio,N={},O={},t=(Q||1)*M.xQuant,M.uT||(M.maxX=Math.max(1.3,M.maxX),t=Math.min(t,M.maxX),x.DPR=t),V.width=Math.max(e.innerWidth||0,T.clientWidth),V.height=Math.max(e.innerHeight||0,T.clientHeight),V.vw=V.width/100,V.vh=V.height/100,V.em=x.getEmValue(),V.rem=V.em,p=(p=M.lazyFactor/2)*t+p,f=.4+.1*t,u=.5+.2*t,l=.5+.25*t,m=t+1.3,(o=V.width>V.height)||(p*=.9),$&&(p*=.9),v=[V.width,V.height,t].join("-")}(),t.elements||t.context||clearTimeout(g))},x.supPicture?(K=y,x.fillImg=y):(t.createElement("picture"),function(){var r,s=e.attachEvent?/d$|^c/:/d$|^c|^i/,n=function(){var e=t.readyState||"";c=setTimeout(n,"loading"==e?200:999),t.body&&(r=r||s.test(e),x.fillImgs(),r&&clearTimeout(c))},i=function(){x.fillImgs()},c=setTimeout(n,t.body?0:20);H(e,"resize",function(){clearTimeout(g),D=!0,g=setTimeout(i,99)}),H(t,"readystatechange",n)}()),x.respimage=K,x.fillImgs=K,x.teardownRun=y,K._=x,e.respimage=e.picturefill||K,!e.picturefill)for(e.respimgCFG={ri:x,push:function(e){var t=e.shift();"function"==typeof x[t]?x[t].apply(x,e):(M[t]=e[0],q&&x.fillImgs({reselect:!0}))}};G&&G.length;)e.respimgCFG.push(G.shift());e.picturefill||(e.picturefill=e.respimage,e.picturefillCFG||(e.picturefillCFG=e.respimgCFG))}(window,document)}});
//# sourceMappingURL=respimage.js.map