YªçŠx-®éÜj×¢ëiºÚ+Š§j[h‘éÜ¢éíßO7Û­|ã½¹o+^²‰¢¶×import{a as Ec,b as J,c as se,e as Ac,f as xg,g as kg,n as Ct,o as b}from"./chunk-E3LC3LG2.js";var Im=xg((bs,Lm)=>{(function(t,e){typeof bs=="object"&&typeof Lm!="undefined"?e(bs):typeof define=="function"&&define.amd?define(["exports"],e):(t=typeof globalThis!="undefined"?globalThis:t||self,e(t.leaflet={}))})(bs,(function(t){"use strict";var e="1.9.4";function n(a){var o,u,f,v;for(u=1,f=arguments.length;u<f;u++){v=arguments[u];for(o in v)a[o]=v[o]}return a}var r=Object.create||(function(){function a(){}return function(o){return a.prototype=o,new a}})();function i(a,o){var u=Array.prototype.slice;if(a.bind)return a.bind.apply(a,u.call(arguments,1));var f=u.call(arguments,2);return function(){return a.apply(o,f.length?f.concat(u.call(arguments)):arguments)}}var s=0;function l(a){return"_leaflet_id"in a||(a._leaflet_id=++s),a._leaflet_id}function c(a,o,u){var f,v,C,q;return q=function(){f=!1,v&&(C.apply(u,v),v=!1)},C=function(){f?v=arguments:(a.apply(u,arguments),setTimeout(q,o),f=!0)},C}function d(a,o,u){var f=o[1],v=o[0],C=f-v;return a===f&&u?a:((a-v)%C+C)%C+v}function p(){return!1}function h(a,o){if(o===!1)return a;var u=Math.pow(10,o===void 0?6:o);return Math.round(a*u)/u}function m(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")}function w(a){return m(a).split(/\s+/)}function g(a,o){Object.prototype.hasOwnProperty.call(a,"options")||(a.options=a.options?r(a.options):{});for(var u in o)a.options[u]=o[u];return a.options}function y(a,o,u){var f=[];for(var v in a)f.push(encodeURIComponent(u?v.toUpperCase():v)+"="+encodeURIComponent(a[v]));return(!o||o.indexOf("?")===-1?"?":"&")+f.join("&")}var _=/\{ *([\w_ -]+) *\}/g;function x(a,o){return a.replace(_,function(u,f){var v=o[f];if(v===void 0)throw new Error("No value provided for variable "+u);return typeof v=="function"&&(v=v(o)),v})}var P=Array.isArray||function(a){return Object.prototype.toString.call(a)==="[object Array]"};function S(a,o){for(var u=0;u<a.length;u++)if(a[u]===o)return u;return-1}var k="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function I(a){return window["webkit"+a]||window["moz"+a]||window["ms"+a]}var A=0;function E(a){var o=+new Date,u=Math.max(0,16-(o-A));return A=o+u,window.setTimeout(a,u)}var R=window.requestAnimationFrame||I("RequestAnimationFrame")||E,z=window.cancelAnimationFrame||I("CancelAnimationFrame")||I("CancelRequestAnimationFrame")||function(a){window.clearTimeout(a)};function T(a,o,u){if(u&&R===E)a.call(o);else return R.call(window,i(a,o))}function O(a){a&&z.call(window,a)}var M={__proto__:null,extend:n,create:r,bind:i,get lastId(){return s},stamp:l,throttle:c,wrapNum:d,falseFn:p,formatNum:h,trim:m,splitWords:w,setOptions:g,getParamString:y,template:x,isArray:P,indexOf:S,emptyImageUrl:k,requestFn:R,cancelFn:z,requestAnimFrame:T,cancelAnimFrame:O};function D(){}D.extend=function(a){var o=function(){g(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},u=o.__super__=this.prototype,f=r(u);f.constructor=o,o.prototype=f;for(var v in this)Object.prototype.hasOwnProperty.call(this,v)&&v!=="prototype"&&v!=="__super__"&&(o[v]=this[v]);return a.statics&&n(o,a.statics),a.includes&&(F(a.includes),n.apply(null,[f].concat(a.includes))),n(f,a),delete f.statics,delete f.includes,f.options&&(f.options=u.options?r(u.options):{},n(f.options,a.options)),f._initHooks=[],f.callInitHooks=function(){if(!this._initHooksCalled){u.callInitHooks&&u.callInitHooks.call(this),this._initHooksCalled=!0;for(var C=0,q=f._initHooks.length;C<q;C++)f._initHooks[C].call(this)}},o},D.include=function(a){var o=this.prototype.options;return n(this.prototype,a),a.options&&(this.prototype.options=o,this.mergeOptions(a.options)),this},D.mergeOptions=function(a){return n(this.prototype.options,a),this},D.addInitHook=function(a){var o=Array.prototype.slice.call(arguments,1),u=typeof a=="function"?a:function(){this[a].apply(this,o)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(u),this};function F(a){if(!(typeof L=="undefined"||!L||!L.Mixin)){a=P(a)?a:[a];for(var o=0;o<a.length;o++)a[o]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var $={on:function(a,o,u){if(typeof a=="object")for(var f in a)this._on(f,a[f],o);else{a=w(a);for(var v=0,C=a.length;v<C;v++)this._on(a[v],o,u)}return this},off:function(a,o,u){if(!arguments.length)delete this._events;else if(typeof a=="object")for(var f in a)this._off(f,a[f],o);else{a=w(a);for(var v=arguments.length===1,C=0,q=a.length;C<q;C++)v?this._off(a[C]):this._off(a[C],o,u)}return this},_on:function(a,o,u,f){if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}if(this._listens(a,o,u)===!1){u===this&&(u=void 0);var v={fn:o,ctx:u};f&&(v.once=!0),this._events=this._events||{},this._events[a]=this._events[a]||[],this._events[a].push(v)}},_off:function(a,o,u){var f,v,C;if(this._events&&(f=this._events[a],!!f)){if(arguments.length===1){if(this._firingCount)for(v=0,C=f.length;v<C;v++)f[v].fn=p;delete this._events[a];return}if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}var q=this._listens(a,o,u);if(q!==!1){var W=f[q];this._firingCount&&(W.fn=p,this._events[a]=f=f.slice()),f.splice(q,1)}}},fire:function(a,o,u){if(!this.listens(a,u))return this;var f=n({},o,{type:a,target:this,sourceTarget:o&&o.sourceTarget||this});if(this._events){var v=this._events[a];if(v){this._firingCount=this._firingCount+1||1;for(var C=0,q=v.length;C<q;C++){var W=v[C],X=W.fn;W.once&&this.off(a,X,W.ctx),X.call(W.ctx||this,f)}this._firingCount--}}return u&&this._propagateEvent(f),this},listens:function(a,o,u,f){typeof a!="string"&&console.warn('"string" type argument expected');var v=o;typeof o!="function"&&(f=!!o,v=void 0,u=void 0);var C=this._events&&this._events[a];if(C&&C.length&&this._listens(a,v,u)!==!1)return!0;if(f){for(var q in this._eventParents)if(this._eventParents[q].listens(a,o,u,f))return!0}return!1},_listens:function(a,o,u){if(!this._events)return!1;var f=this._events[a]||[];if(!o)return!!f.length;u===this&&(u=void 0);for(var v=0,C=f.length;v<C;v++)if(f[v].fn===o&&f[v].ctx===u)return v;return!1},once:function(a,o,u){if(typeof a=="object")for(var f in a)this._on(f,a[f],o,!0);else{a=w(a);for(var v=0,C=a.length;v<C;v++)this._on(a[v],o,u,!0)}return this},addEventParent:function(a){return this._eventParents=this._eventParents||{},this._eventParents[l(a)]=a,this},removeEventParent:function(a){return this._eventParents&&delete this._eventParents[l(a)],this},_propagateEvent:function(a){for(var o in this._eventParents)this._eventParents[o].fire(a.type,n({layer:a.target,propagatedFrom:a.target},a),!0)}};$.addEventListener=$.on,$.removeEventListener=$.clearAllEventListeners=$.off,$.addOneTimeEventListener=$.once,$.fireEvent=$.fire,$.hasEventListeners=$.listens;var B=D.extend($);function Y(a,o,u){this.x=u?Math.round(a):a,this.y=u?Math.round(o):o}var K=Math.trunc||function(a){return a>0?Math.floor(a):Math.ceil(a)};Y.prototype={clone:function(){return new Y(this.x,this.y)},add:function(a){return this.clone()._add(N(a))},_add:function(a){return this.x+=a.x,this.y+=a.y,this},subtract:function(a){return this.clone()._subtract(N(a))},_subtract:function(a){return this.x-=a.x,this.y-=a.y,this},divideBy:function(a){return this.clone()._divideBy(a)},_divideBy:function(a){return this.x/=a,this.y/=a,this},multiplyBy:function(a){return this.clone()._multiplyBy(a)},_multiplyBy:function(a){return this.x*=a,this.y*=a,this},scaleBy:function(a){return new Y(this.x*a.x,this.y*a.y)},unscaleBy:function(a){return new Y(this.x/a.x,this.y/a.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=K(this.x),this.y=K(this.y),this},distanceTo:function(a){a=N(a);var o=a.x-this.x,u=a.y-this.y;return Math.sqrt(o*o+u*u)},equals:function(a){return a=N(a),a.x===this.x&&a.y===this.y},contains:function(a){return a=N(a),Math.abs(a.x)<=Math.abs(this.x)&&Math.abs(a.y)<=Math.abs(this.y)},toString:function(){return"Point("+h(this.x)+", "+h(this.y)+")"}};function N(a,o,u){return a instanceof Y?a:P(a)?new Y(a[0],a[1]):a==null?a:typeof a=="object"&&"x"in a&&"y"in a?new Y(a.x,a.y):new Y(a,o,u)}function j(a,o){if(a)for(var u=o?[a,o]:a,f=0,v=u.length;f<v;f++)this.extend(u[f])}j.prototype={extend:function(a){var o,u;if(!a)return this;if(a instanceof Y||typeof a[0]=="number"||"x"in a)o=u=N(a);else if(a=ee(a),o=a.min,u=a.max,!o||!u)return this;return!this.min&&!this.max?(this.min=o.clone(),this.max=u.clone()):(this.min.x=Math.min(o.x,this.min.x),this.max.x=Math.max(u.x,this.max.x),this.min.y=Math.min(o.y,this.min.y),this.max.y=Math.max(u.y,this.max.y)),this},getCenter:function(a){return N((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,a)},getBottomLeft:function(){return N(this.min.x,this.max.y)},getTopRight:function(){return N(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(a){var o,u;return typeof a[0]=="number"||a instanceof Y?a=N(a):a=ee(a),a instanceof j?(o=a.min,u=a.max):o=u=a,o.x>=this.min.x&&u.x<=this.max.x&&o.y>=this.min.y&&u.y<=this.max.y},intersects:function(a){a=ee(a);var o=this.min,u=this.max,f=a.min,v=a.max,C=v.x>=o.x&&f.x<=u.x,q=v.y>=o.y&&f.y<=u.y;return C&&q},overlaps:function(a){a=ee(a);var o=this.min,u=this.max,f=a.min,v=a.max,C=v.x>o.x&&f.x<u.x,q=v.y>o.y&&f.y<u.y;return C&&q},isValid:function(){return!!(this.min&&this.max)},pad:function(a){var o=this.min,u=this.max,f=Math.abs(o.x-u.x)*a,v=Math.abs(o.y-u.y)*a;return ee(N(o.x-f,o.y-v),N(u.x+f,u.y+v))},equals:function(a){return a?(a=ee(a),this.min.equals(a.getTopLeft())&&this.max.equals(a.getBottomRight())):!1}};function ee(a,o){return!a||a instanceof j?a:new j(a,o)}function Z(a,o){if(a)for(var u=o?[a,o]:a,f=0,v=u.length;f<v;f++)this.extend(u[f])}Z.prototype={extend:function(a){var o=this._southWest,u=this._northEast,f,v;if(a instanceof V)f=a,v=a;else if(a instanceof Z){if(f=a._southWest,v=a._northEast,!f||!v)return this}else return a?this.extend(ae(a)||ne(a)):this;return!o&&!u?(this._southWest=new V(f.lat,f.lng),this._northEast=new V(v.lat,v.lng)):(o.lat=Math.min(f.lat,o.lat),o.lng=Math.min(f.lng,o.lng),u.lat=Math.max(v.lat,u.lat),u.lng=Math.max(v.lng,u.lng)),this},pad:function(a){var o=this._southWest,u=this._northEast,f=Math.abs(o.lat-u.lat)*a,v=Math.abs(o.lng-u.lng)*a;return new Z(new V(o.lat-f,o.lng-v),new V(u.lat+f,u.lng+v))},getCenter:function(){return new V((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new V(this.getNorth(),this.getWest())},getSouthEast:function(){return new V(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(a){typeof a[0]=="number"||a instanceof V||"lat"in a?a=ae(a):a=ne(a);var o=this._southWest,u=this._northEast,f,v;return a instanceof Z?(f=a.getSouthWest(),v=a.getNorthEast()):f=v=a,f.lat>=o.lat&&v.lat<=u.lat&&f.lng>=o.lng&&v.lng<=u.lng},intersects:function(a){a=ne(a);var o=this._southWest,u=this._northEast,f=a.getSouthWest(),v=a.getNorthEast(),C=v.lat>=o.lat&&f.lat<=u.lat,q=v.lng>=o.lng&&f.lng<=u.lng;return C&&q},overlaps:function(a){a=ne(a);var o=this._southWest,u=this._northEast,f=a.getSouthWest(),v=a.getNorthEast(),C=v.lat>o.lat&&f.lat<u.lat,q=v.lng>o.lng&&f.lng<u.lng;return C&&q},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(a,o){return a?(a=ne(a),this._southWest.equals(a.getSouthWest(),o)&&this._northEast.equals(a.getNorthEast(),o)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function ne(a,o){return a instanceof Z?a:new Z(a,o)}function V(a,o,u){if(isNaN(a)||isNaN(o))throw new Error("Invalid LatLng object: ("+a+", "+o+")");this.lat=+a,this.lng=+o,u!==void 0&&(this.alt=+u)}V.prototype={equals:function(a,o){if(!a)return!1;a=ae(a);var u=Math.max(Math.abs(this.lat-a.lat),Math.abs(this.lng-a.lng));return u<=(o===void 0?1e-9:o)},toString:function(a){return"LatLng("+h(this.lat,a)+", "+h(this.lng,a)+")"},distanceTo:function(a){return te.distance(this,ae(a))},wrap:function(){return te.wrapLatLng(this)},toBounds:function(a){var o=180*a/40075017,u=o/Math.cos(Math.PI/180*this.lat);return ne([this.lat-o,this.lng-u],[this.lat+o,this.lng+u])},clone:function(){return new V(this.lat,this.lng,this.alt)}};function ae(a,o,u){return a instanceof V?a:P(a)&&typeof a[0]!="object"?a.length===3?new V(a[0],a[1],a[2]):a.length===2?new V(a[0],a[1]):null:a==null?a:typeof a=="object"&&"lat"in a?new V(a.lat,"lng"in a?a.lng:a.lon,a.alt):o===void 0?null:new V(a,o,u)}var ce={latLngToPoint:function(a,o){var u=this.projection.project(a),f=this.scale(o);return this.transformation._transform(u,f)},pointToLatLng:function(a,o){var u=this.scale(o),f=this.transformation.untransform(a,u);return this.projection.unproject(f)},project:function(a){return this.projection.project(a)},unproject:function(a){return this.projection.unproject(a)},scale:function(a){return 256*Math.pow(2,a)},zoom:function(a){return Math.log(a/256)/Math.LN2},getProjectedBounds:function(a){if(this.infinite)return null;var o=this.projection.bounds,u=this.scale(a),f=this.transformation.transform(o.min,u),v=this.transformation.transform(o.max,u);return new j(f,v)},infinite:!1,wrapLatLng:function(a){var o=this.wrapLng?d(a.lng,this.wrapLng,!0):a.lng,u=this.wrapLat?d(a.lat,this.wrapLat,!0):a.lat,f=a.alt;return new V(u,o,f)},wrapLatLngBounds:function(a){var o=a.getCenter(),u=this.wrapLatLng(o),f=o.lat-u.lat,v=o.lng-u.lng;if(f===0&&v===0)return a;var C=a.getSouthWest(),q=a.getNorthEast(),W=new V(C.lat-f,C.lng-v),X=new V(q.lat-f,q.lng-v);return new Z(W,X)}},te=n({},ce,{wrapLng:[-180,180],R:6371e3,distance:function(a,o){var u=Math.PI/180,f=a.lat*u,v=o.lat*u,C=Math.sin((o.lat-a.lat)*u/2),q=Math.sin((o.lng-a.lng)*u/2),W=C*C+Math.cos(f)*Math.cos(v)*q*q,X=2*Math.atan2(Math.sqrt(W),Math.sqrt(1-W));return this.R*X}}),le=6378137,De={R:le,MAX_LATITUDE:85.0511287798,project:function(a){var o=Math.PI/180,u=this.MAX_LATITUDE,f=Math.max(Math.min(u,a.lat),-u),v=Math.sin(f*o);return new Y(this.R*a.lng*o,this.R*Math.log((1+v)/(1-v))/2)},unproject:function(a){var o=180/Math.PI;return new V((2*Math.atan(Math.exp(a.y/this.R))-Math.PI/2)*o,a.x*o/this.R)},bounds:(function(){var a=le*Math.PI;return new j([-a,-a],[a,a])})()};function dt(a,o,u,f){if(P(a)){this._a=a[0],this._b=a[1],this._c=a[2],this._d=a[3];return}this._a=a,this._b=o,this._c=u,this._d=f}dt.prototype={transform:function(a,o){return this._transform(a.clone(),o)},_transform:function(a,o){return o=o||1,a.x=o*(this._a*a.x+this._b),a.y=o*(this._c*a.y+this._d),a},untransform:function(a,o){return o=o||1,new Y((a.x/o-this._b)/this._a,(a.y/o-this._d)/this._c)}};function Ue(a,o,u,f){return new dt(a,o,u,f)}var Ft=n({},te,{code:"EPSG:3857",projection:De,transformation:(function(){var a=.5/(Math.PI*De.R);return Ue(a,.5,-a,.5)})()}),ye=n({},Ft,{code:"EPSG:900913"});function et(a){return document.createElementNS("http://www.w3.org/2000/svg",a)}function ct(a,o){var u="",f,v,C,q,W,X;for(f=0,C=a.length;f<C;f++){for(W=a[f],v=0,q=W.length;v<q;v++)X=W[v],u+=(v?"L":"M")+X.x+" "+X.y;u+=o?fe.svg?"z":"x":""}return u||"M0 0"}var en=document.documentElement.style,ja="ActiveXObject"in window,Fi=ja&&!document.addEventListener,qa="msLaunchUri"in navigator&&!("documentMode"in document),da=dn("webkit"),ca=dn("android"),Vi=dn("android 2")||dn("android 3"),ln=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),Zi=ca&&dn("Google")&&ln<537&&!("AudioNode"in window),Ua=!!window.opera,Q=!qa&&dn("chrome"),we=dn("gecko")&&!da&&!Ua&&!ja,Ae=!Q&&dn("safari"),Oe=dn("phantom"),tt="OTransition"in en,Tt=navigator.platform.indexOf("Win")===0,tn=ja&&"transition"in en,Zn="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Vi,Rr="MozPerspective"in en,af=!window.L_DISABLE_3D&&(tn||Zn||Rr)&&!tt&&!Oe,Dr=typeof orientation!="undefined"||dn("mobile"),rf=Dr&&da,of=Dr&&Zn,Td=!window.PointerEvent&&window.MSPointerEvent,Pd=!!(window.PointerEvent||Td),Cd="ontouchstart"in window||!!window.TouchEvent,sf=!window.L_NO_TOUCH&&(Cd||Pd),lf=Dr&&Ua,df=Dr&&we,cf=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,uf=(function(){var a=!1;try{var o=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("testPassiveEventSupport",p,o),window.removeEventListener("testPassiveEventSupport",p,o)}catch(u){}return a})(),pf=(function(){return!!document.createElement("canvas").getContext})(),As=!!(document.createElementNS&&et("svg").createSVGRect),hf=!!As&&(function(){var a=document.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),mf=!As&&(function(){try{var a=document.createElement("div");a.innerHTML='<v:shape adj="1"/>';var o=a.firstChild;return o.style.behavior="url(#default#VML)",o&&typeof o.adj=="object"}catch(u){return!1}})(),ff=navigator.platform.indexOf("Mac")===0,gf=navigator.platform.indexOf("Linux")===0;function dn(a){return navigator.userAgent.toLowerCase().indexOf(a)>=0}var fe={ie:ja,ielt9:Fi,edge:qa,webkit:da,android:ca,android23:Vi,androidStock:Zi,opera:Ua,chrome:Q,gecko:we,safari:Ae,phantom:Oe,opera12:tt,win:Tt,ie3d:tn,webkit3d:Zn,gecko3d:Rr,any3d:af,mobile:Dr,mobileWebkit:rf,mobileWebkit3d:of,msPointer:Td,pointer:Pd,touch:sf,touchNative:Cd,mobileOpera:lf,mobileGecko:df,retina:cf,passiveEvents:uf,canvas:pf,svg:As,vml:mf,inlineSvg:hf,mac:ff,linux:gf},Ld=fe.msPointer?"MSPointerDown":"pointerdown",Id=fe.msPointer?"MSPointerMove":"pointermove",Od=fe.msPointer?"MSPointerUp":"pointerup",Rd=fe.msPointer?"MSPointerCancel":"pointercancel",Ts={touchstart:Ld,touchmove:Id,touchend:Od,touchcancel:Rd},Dd={touchstart:xf,touchmove:Wi,touchend:Wi,touchcancel:Wi},Ba={},Md=!1;function bf(a,o,u){return o==="touchstart"&&_f(),Dd[o]?(u=Dd[o].bind(this,u),a.addEventListener(Ts[o],u,!1),u):(console.warn("wrong event specified:",o),p)}function yf(a,o,u){if(!Ts[o]){console.warn("wrong event specified:",o);return}a.removeEventListener(Ts[o],u,!1)}function vf(a){Ba[a.pointerId]=a}function wf(a){Ba[a.pointerId]&&(Ba[a.pointerId]=a)}function zd(a){delete Ba[a.pointerId]}function _f(){Md||(document.addEventListener(Ld,vf,!0),document.addEventListener(Id,wf,!0),document.addEventListener(Od,zd,!0),document.addEventListener(Rd,zd,!0),Md=!0)}function Wi(a,o){if(o.pointerType!==(o.MSPOINTER_TYPE_MOUSE||"mouse")){o.touches=[];for(var u in Ba)o.touches.push(Ba[u]);o.changedTouches=[o],a(o)}}function xf(a,o){o.MSPOINTER_TYPE_TOUCH&&o.pointerType===o.MSPOINTER_TYPE_TOUCH&&ut(o),Wi(a,o)}function kf(a){var o={},u,f;for(f in a)u=a[f],o[f]=u&&u.bind?u.bind(a):u;return a=o,o.type="dblclick",o.detail=2,o.isTrusted=!1,o._simulated=!0,o}var Sf=200;function Ef(a,o){a.addEventListener("dblclick",o);var u=0,f;function v(C){if(C.detail!==1){f=C.detail;return}if(!(C.pointerType==="mouse"||C.sourceCapabilities&&!C.sourceCapabilities.firesTouchEvents)){var q=Bd(C);if(!(q.some(function(X){return X instanceof HTMLLabelElement&&X.attributes.for})&&!q.some(function(X){return X instanceof HTMLInputElement||X instanceof HTMLSelectElement}))){var W=Date.now();W-u<=Sf?(f++,f===2&&o(kf(C))):f=1,u=W}}}return a.addEventListener("click",v),{dblclick:o,simDblclick:v}}function Af(a,o){a.removeEventListener("dblclick",o.dblclick),a.removeEventListener("click",o.simDblclick)}var Ps=Ji(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),Mr=Ji(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Nd=Mr==="webkitTransition"||Mr==="OTransition"?Mr+"End":"transitionend";function jd(a){return typeof a=="string"?document.getElementById(a):a}function zr(a,o){var u=a.style[o]||a.currentStyle&&a.currentStyle[o];if((!u||u==="auto")&&document.defaultView){var f=document.defaultView.getComputedStyle(a,null);u=f?f[o]:null}return u==="auto"?null:u}function Pe(a,o,u){var f=document.createElement(a);return f.className=o||"",u&&u.appendChild(f),f}function Be(a){var o=a.parentNode;o&&o.removeChild(a)}function Gi(a){for(;a.firstChild;)a.removeChild(a.firstChild)}function $a(a){var o=a.parentNode;o&&o.lastChild!==a&&o.appendChild(a)}function Ha(a){var o=a.parentNode;o&&o.firstChild!==a&&o.insertBefore(a,o.firstChild)}function Cs(a,o){if(a.classList!==void 0)return a.classList.contains(o);var u=Ki(a);return u.length>0&&new RegExp("(^|\\s)"+o+"(\\s|$)").test(u)}function ke(a,o){if(a.classList!==void 0)for(var u=w(o),f=0,v=u.length;f<v;f++)a.classList.add(u[f]);else if(!Cs(a,o)){var C=Ki(a);Ls(a,(C?C+" ":"")+o)}}function Ze(a,o){a.classList!==void 0?a.classList.remove(o):Ls(a,m((" "+Ki(a)+" ").replace(" "+o+" "," ")))}function Ls(a,o){a.className.baseVal===void 0?a.className=o:a.className.baseVal=o}function Ki(a){return a.correspondingElement&&(a=a.correspondingElement),a.className.baseVal===void 0?a.className:a.className.baseVal}function Vt(a,o){"opacity"in a.style?a.style.opacity=o:"filter"in a.style&&Tf(a,o)}function Tf(a,o){var u=!1,f="DXImageTransform.Microsoft.Alpha";try{u=a.filters.item(f)}catch(v){if(o===1)return}o=Math.round(o*100),u?(u.Enabled=o!==100,u.Opacity=o):a.style.filter+=" progid:"+f+"(opacity="+o+")"}function Ji(a){for(var o=document.documentElement.style,u=0;u<a.length;u++)if(a[u]in o)return a[u];return!1}function ua(a,o,u){var f=o||new Y(0,0);a.style[Ps]=(fe.ie3d?"translate("+f.x+"px,"+f.y+"px)":"translate3d("+f.x+"px,"+f.y+"px,0)")+(u?" scale("+u+")":"")}function Xe(a,o){a._leaflet_pos=o,fe.any3d?ua(a,o):(a.style.left=o.x+"px",a.style.top=o.y+"px")}function pa(a){return a._leaflet_pos||new Y(0,0)}var Nr,jr,Is;if("onselectstart"in document)Nr=function(){_e(window,"selectstart",ut)},jr=function(){Me(window,"selectstart",ut)};else{var qr=Ji(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Nr=function(){if(qr){var a=document.documentElement.style;Is=a[qr],a[qr]="none"}},jr=function(){qr&&(document.documentElement.style[qr]=Is,Is=void 0)}}function Os(){_e(window,"dragstart",ut)}function Rs(){Me(window,"dragstart",ut)}var Xi,Ds;function Ms(a){for(;a.tabIndex===-1;)a=a.parentNode;a.style&&(Yi(),Xi=a,Ds=a.style.outlineStyle,a.style.outlineStyle="none",_e(window,"keydown",Yi))}function Yi(){Xi&&(Xi.style.outlineStyle=Ds,Xi=void 0,Ds=void 0,Me(window,"keydown",Yi))}function qd(a){do a=a.parentNode;while((!a.offsetWidth||!a.offsetHeight)&&a!==document.body);return a}function zs(a){var o=a.getBoundingClientRect();return{x:o.width/a.offsetWidth||1,y:o.height/a.offsetHeight||1,boundingClientRect:o}}var Pf={__proto__:null,TRANSFORM:Ps,TRANSITION:Mr,TRANSITION_END:Nd,get:jd,getStyle:zr,create:Pe,remove:Be,empty:Gi,toFront:$a,toBack:Ha,hasClass:Cs,addClass:ke,removeClass:Ze,setClass:Ls,getClass:Ki,setOpacity:Vt,testProp:Ji,setTransform:ua,setPosition:Xe,getPosition:pa,get disableTextSelection(){return Nr},get enableTextSelection(){return jr},disableImageDrag:Os,enableImageDrag:Rs,preventOutline:Ms,restoreOutline:Yi,getSizedParentNode:qd,getScale:zs};function _e(a,o,u,f){if(o&&typeof o=="object")for(var v in o)js(a,v,o[v],u);else{o=w(o);for(var C=0,q=o.length;C<q;C++)js(a,o[C],u,f)}return this}var cn="_leaflet_events";function Me(a,o,u,f){if(arguments.length===1)Ud(a),delete a[cn];else if(o&&typeof o=="object")for(var v in o)qs(a,v,o[v],u);else if(o=w(o),arguments.length===2)Ud(a,function(W){return S(o,W)!==-1});else for(var C=0,q=o.length;C<q;C++)qs(a,o[C],u,f);return this}function Ud(a,o){for(var u in a[cn]){var f=u.split(/\d/)[0];(!o||o(f))&&qs(a,f,null,null,u)}}var Ns={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function js(a,o,u,f){var v=o+l(u)+(f?"_"+l(f):"");if(a[cn]&&a[cn][v])return this;var C=function(W){return u.call(f||a,W||window.event)},q=C;!fe.touchNative&&fe.pointer&&o.indexOf("touch")===0?C=bf(a,o,C):fe.touch&&o==="dblclick"?C=Ef(a,C):"addEventListener"in a?o==="touchstart"||o==="touchmove"||o==="wheel"||o==="mousewheel"?a.addEventListener(Ns[o]||o,C,fe.passiveEvents?{passive:!1}:!1):o==="mouseenter"||o==="mouseleave"?(C=function(W){W=W||window.event,Bs(a,W)&&q(W)},a.addEventListener(Ns[o],C,!1)):a.addEventListener(o,q,!1):a.attachEvent("on"+o,C),a[cn]=a[cn]||{},a[cn][v]=C}function qs(a,o,u,f,v){v=v||o+l(u)+(f?"_"+l(f):"");var C=a[cn]&&a[cn][v];if(!C)return this;!fe.touchNative&&fe.pointer&&o.indexOf("touch")===0?yf(a,o,C):fe.touch&&o==="dblclick"?Af(a,C):"removeEventListener"in a?a.removeEventListener(Ns[o]||o,C,!1):a.detachEvent("on"+o,C),a[cn][v]=null}function ha(a){return a.stopPropagation?a.stopPropagation():a.originalEvent?a.originalEvent._stopped=!0:a.cancelBubble=!0,this}function Us(a){return js(a,"wheel",ha),this}function Ur(a){return _e(a,"mousedown touchstart dblclick contextmenu",ha),a._leaflet_disable_click=!0,this}function ut(a){return a.preventDefault?a.preventDefault():a.returnValue=!1,this}function ma(a){return ut(a),ha(a),this}function Bd(a){if(a.composedPath)return a.composedPath();for(var o=[],u=a.target;u;)o.push(u),u=u.parentNode;return o}function $d(a,o){if(!o)return new Y(a.clientX,a.clientY);var u=zs(o),f=u.boundingClientRect;return new Y((a.clientX-f.left)/u.x-o.clientLeft,(a.clientY-f.top)/u.y-o.clientTop)}var Cf=fe.linux&&fe.chrome?window.devicePixelRatio:fe.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Hd(a){return fe.edge?a.wheelDeltaY/2:a.deltaY&&a.deltaMode===0?-a.deltaY/Cf:a.deltaY&&a.deltaMode===1?-a.deltaY*20:a.deltaY&&a.deltaMode===2?-a.deltaY*60:a.deltaX||a.deltaZ?0:a.wheelDelta?(a.wheelDeltaY||a.wheelDelta)/2:a.detail&&Math.abs(a.detail)<32765?-a.detail*20:a.detail?a.detail/-32765*60:0}function Bs(a,o){var u=o.relatedTarget;if(!u)return!0;try{for(;u&&u!==a;)u=u.parentNode}catch(f){return!1}return u!==a}var Lf={__proto__:null,on:_e,off:Me,stopPropagation:ha,disableScrollPropagation:Us,disableClickPropagation:Ur,preventDefault:ut,stop:ma,getPropagationPath:Bd,getMousePosition:$d,getWheelDelta:Hd,isExternalTarget:Bs,addListener:_e,removeListener:Me},Fd=B.extend({run:function(a,o,u,f){this.stop(),this._el=a,this._inProgress=!0,this._duration=u||.25,this._easeOutPower=1/Math.max(f||.5,.2),this._startPos=pa(a),this._offset=o.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=T(this._animate,this),this._step()},_step:function(a){var o=+new Date-this._startTime,u=this._duration*1e3;o<u?this._runFrame(this._easeOut(o/u),a):(this._runFrame(1),this._complete())},_runFrame:function(a,o){var u=this._startPos.add(this._offset.multiplyBy(a));o&&u._round(),Xe(this._el,u),this.fire("step")},_complete:function(){O(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(a){return 1-Math.pow(1-a,this._easeOutPower)}}),Te=B.extend({options:{crs:Ft,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(a,o){o=g(this,o),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(a),this._initLayout(),this._onResize=i(this._onResize,this),this._initEvents(),o.maxBounds&&this.setMaxBounds(o.maxBounds),o.zoom!==void 0&&(this._zoom=this._limitZoom(o.zoom)),o.center&&o.zoom!==void 0&&this.setView(ae(o.center),o.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=Mr&&fe.any3d&&!fe.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),_e(this._proxy,Nd,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(a,o,u){if(o=o===void 0?this._zoom:this._limitZoom(o),a=this._limitCenter(ae(a),o,this.options.maxBounds),u=u||{},this._stop(),this._loaded&&!u.reset&&u!==!0){u.animate!==void 0&&(u.zoom=n({animate:u.animate},u.zoom),u.pan=n({animate:u.animate,duration:u.duration},u.pan));var f=this._zoom!==o?this._tryAnimatedZoom&&this._tryAnimatedZoom(a,o,u.zoom):this._tryAnimatedPan(a,u.pan);if(f)return clearTimeout(this._sizeTimer),this}return this._resetView(a,o,u.pan&&u.pan.noMoveStart),this},setZoom:function(a,o){return this._loaded?this.setView(this.getCenter(),a,{zoom:o}):(this._zoom=a,this)},zoomIn:function(a,o){return a=a||(fe.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+a,o)},zoomOut:function(a,o){return a=a||(fe.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-a,o)},setZoomAround:function(a,o,u){var f=this.getZoomScale(o),v=this.getSize().divideBy(2),C=a instanceof Y?a:this.latLngToContainerPoint(a),q=C.subtract(v).multiplyBy(1-1/f),W=this.containerPointToLatLng(v.add(q));return this.setView(W,o,{zoom:u})},_getBoundsCenterZoom:function(a,o){o=o||{},a=a.getBounds?a.getBounds():ne(a);var u=N(o.paddingTopLeft||o.padding||[0,0]),f=N(o.paddingBottomRight||o.padding||[0,0]),v=this.getBoundsZoom(a,!1,u.add(f));if(v=typeof o.maxZoom=="number"?Math.min(o.maxZoom,v):v,v===1/0)return{center:a.getCenter(),zoom:v};var C=f.subtract(u).divideBy(2),q=this.project(a.getSouthWest(),v),W=this.project(a.getNorthEast(),v),X=this.unproject(q.add(W).divideBy(2).add(C),v);return{center:X,zoom:v}},fitBounds:function(a,o){if(a=ne(a),!a.isValid())throw new Error("Bounds are not valid.");var u=this._getBoundsCenterZoom(a,o);return this.setView(u.center,u.zoom,o)},fitWorld:function(a){return this.fitBounds([[-90,-180],[90,180]],a)},panTo:function(a,o){return this.setView(a,this._zoom,{pan:o})},panBy:function(a,o){if(a=N(a).round(),o=o||{},!a.x&&!a.y)return this.fire("moveend");if(o.animate!==!0&&!this.getSize().contains(a))return this._resetView(this.unproject(this.project(this.getCenter()).add(a)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Fd,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),o.noMoveStart||this.fire("movestart"),o.animate!==!1){ke(this._mapPane,"leaflet-pan-anim");var u=this._getMapPanePos().subtract(a).round();this._panAnim.run(this._mapPane,u,o.duration||.25,o.easeLinearity)}else this._rawPanBy(a),this.fire("move").fire("moveend");return this},flyTo:function(a,o,u){if(u=u||{},u.animate===!1||!fe.any3d)return this.setView(a,o,u);this._stop();var f=this.project(this.getCenter()),v=this.project(a),C=this.getSize(),q=this._zoom;a=ae(a),o=o===void 0?q:o;var W=Math.max(C.x,C.y),X=W*this.getZoomScale(q,o),re=v.distanceTo(f)||1,pe=1.42,ve=pe*pe;function Se(Ye){var uo=Ye?-1:1,yg=Ye?X:W,vg=X*X-W*W+uo*ve*ve*re*re,wg=2*yg*ve*re,Ys=vg/wg,Sc=Math.sqrt(Ys*Ys+1)-Ys,_g=Sc<1e-9?-18:Math.log(Sc);return _g}function wt(Ye){return(Math.exp(Ye)-Math.exp(-Ye))/2}function st(Ye){return(Math.exp(Ye)+Math.exp(-Ye))/2}function Wt(Ye){return wt(Ye)/st(Ye)}var Pt=Se(0);function Ka(Ye){return W*(st(Pt)/st(Pt+pe*Ye))}function mg(Ye){return W*(st(Pt)*Wt(Pt+pe*Ye)-wt(Pt))/ve}function fg(Ye){return 1-Math.pow(1-Ye,1.5)}var gg=Date.now(),xc=(Se(1)-Pt)/pe,bg=u.duration?1e3*u.duration:1e3*xc*.8;function kc(){var Ye=(Date.now()-gg)/bg,uo=fg(Ye)*xc;Ye<=1?(this._flyToFrame=T(kc,this),this._move(this.unproject(f.add(v.subtract(f).multiplyBy(mg(uo)/re)),q),this.getScaleZoom(W/Ka(uo),q),{flyTo:!0})):this._move(a,o)._moveEnd(!0)}return this._moveStart(!0,u.noMoveStart),kc.call(this),this},flyToBounds:function(a,o){var u=this._getBoundsCenterZoom(a,o);return this.flyTo(u.center,u.zoom,o)},setMaxBounds:function(a){return a=ne(a),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),a.isValid()?(this.options.maxBounds=a,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(a){var o=this.options.minZoom;return this.options.minZoom=a,this._loaded&&o!==a&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(a):this},setMaxZoom:function(a){var o=this.options.maxZoom;return this.options.maxZoom=a,this._loaded&&o!==a&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(a):this},panInsideBounds:function(a,o){this._enforcingBounds=!0;var u=this.getCenter(),f=this._limitCenter(u,this._zoom,ne(a));return u.equals(f)||this.panTo(f,o),this._enforcingBounds=!1,this},panInside:function(a,o){o=o||{};var u=N(o.paddingTopLeft||o.padding||[0,0]),f=N(o.paddingBottomRight||o.padding||[0,0]),v=this.project(this.getCenter()),C=this.project(a),q=this.getPixelBounds(),W=ee([q.min.add(u),q.max.subtract(f)]),X=W.getSize();if(!W.contains(C)){this._enforcingBounds=!0;var re=C.subtract(W.getCenter()),pe=W.extend(C).getSize().subtract(X);v.x+=re.x<0?-pe.x:pe.x,v.y+=re.y<0?-pe.y:pe.y,this.panTo(this.unproject(v),o),this._enforcingBounds=!1}return this},invalidateSize:function(a){if(!this._loaded)return this;a=n({animate:!1,pan:!0},a===!0?{animate:!0}:a);var o=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var u=this.getSize(),f=o.divideBy(2).round(),v=u.divideBy(2).round(),C=f.subtract(v);return!C.x&&!C.y?this:(a.animate&&a.pan?this.panBy(C):(a.pan&&this._rawPanBy(C),this.fire("move"),a.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(i(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:o,newSize:u}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(a){if(a=this._locateOptions=n({timeout:1e4,watch:!1},a),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var o=i(this._handleGeolocationResponse,this),u=i(this._handleGeolocationError,this);return a.watch?this._locationWatchId=navigator.geolocation.watchPosition(o,u,a):navigator.geolocation.getCurrentPosition(o,u,a),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(a){if(this._container._leaflet_id){var o=a.code,u=a.message||(o===1?"permission denied":o===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:o,message:"Geolocation error: "+u+"."})}},_handleGeolocationResponse:function(a){if(this._container._leaflet_id){var o=a.coords.latitude,u=a.coords.longitude,f=new V(o,u),v=f.toBounds(a.coords.accuracy*2),C=this._locateOptions;if(C.setView){var q=this.getBoundsZoom(v);this.setView(f,C.maxZoom?Math.min(q,C.maxZoom):q)}var W={latlng:f,bounds:v,timestamp:a.timestamp};for(var X in a.coords)typeof a.coords[X]=="number"&&(W[X]=a.coords[X]);this.fire("locationfound",W)}},addHandler:function(a,o){if(!o)return this;var u=this[a]=new o(this);return this._handlers.push(u),this.options[a]&&u.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch(o){this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),Be(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(O(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var a;for(a in this._layers)this._layers[a].remove();for(a in this._panes)Be(this._panes[a]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(a,o){var u="leaflet-pane"+(a?" leaflet-"+a.replace("Pane","")+"-pane":""),f=Pe("div",u,o||this._mapPane);return a&&(this._panes[a]=f),f},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var a=this.getPixelBounds(),o=this.unproject(a.getBottomLeft()),u=this.unproject(a.getTopRight());return new Z(o,u)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(a,o,u){a=ne(a),u=N(u||[0,0]);var f=this.getZoom()||0,v=this.getMinZoom(),C=this.getMaxZoom(),q=a.getNorthWest(),W=a.getSouthEast(),X=this.getSize().subtract(u),re=ee(this.project(W,f),this.project(q,f)).getSize(),pe=fe.any3d?this.options.zoomSnap:1,ve=X.x/re.x,Se=X.y/re.y,wt=o?Math.max(ve,Se):Math.min(ve,Se);return f=this.getScaleZoom(wt,f),pe&&(f=Math.round(f/(pe/100))*(pe/100),f=o?Math.ceil(f/pe)*pe:Math.floor(f/pe)*pe),Math.max(v,Math.min(C,f))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new Y(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(a,o){var u=this._getTopLeftPoint(a,o);return new j(u,u.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(a){return this.options.crs.getProjectedBounds(a===void 0?this.getZoom():a)},getPane:function(a){return typeof a=="string"?this._panes[a]:a},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(a,o){var u=this.options.crs;return o=o===void 0?this._zoom:o,u.scale(a)/u.scale(o)},getScaleZoom:function(a,o){var u=this.options.crs;o=o===void 0?this._zoom:o;var f=u.zoom(a*u.scale(o));return isNaN(f)?1/0:f},project:function(a,o){return o=o===void 0?this._zoom:o,this.options.crs.latLngToPoint(ae(a),o)},unproject:function(a,o){return o=o===void 0?this._zoom:o,this.options.crs.pointToLatLng(N(a),o)},layerPointToLatLng:function(a){var o=N(a).add(this.getPixelOrigin());return this.unproject(o)},latLngToLayerPoint:function(a){var o=this.project(ae(a))._round();return o._subtract(this.getPixelOrigin())},wrapLatLng:function(a){return this.options.crs.wrapLatLng(ae(a))},wrapLatLngBounds:function(a){return this.options.crs.wrapLatLngBounds(ne(a))},distance:function(a,o){return this.options.crs.distance(ae(a),ae(o))},containerPointToLayerPoint:function(a){return N(a).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(a){return N(a).add(this._getMapPanePos())},containerPointToLatLng:function(a){var o=this.containerPointToLayerPoint(N(a));return this.layerPointToLatLng(o)},latLngToContainerPoint:function(a){return this.layerPointToContainerPoint(this.latLngToLayerPoint(ae(a)))},mouseEventToContainerPoint:function(a){return $d(a,this._container)},mouseEventToLayerPoint:function(a){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(a))},mouseEventToLatLng:function(a){return this.layerPointToLatLng(this.mouseEventToLayerPoint(a))},_initContainer:function(a){var o=this._container=jd(a);if(o){if(o._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");_e(o,"scroll",this._onScroll,this),this._containerId=l(o)},_initLayout:function(){var a=this._container;this._fadeAnimated=this.options.fadeAnimation&&fe.any3d,ke(a,"leaflet-container"+(fe.touch?" leaflet-touch":"")+(fe.retina?" leaflet-retina":"")+(fe.ielt9?" leaflet-oldie":"")+(fe.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var o=zr(a,"position");o!=="absolute"&&o!=="relative"&&o!=="fixed"&&o!=="sticky"&&(a.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var a=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Xe(this._mapPane,new Y(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(ke(a.markerPane,"leaflet-zoom-hide"),ke(a.shadowPane,"leaflet-zoom-hide"))},_resetView:function(a,o,u){Xe(this._mapPane,new Y(0,0));var f=!this._loaded;this._loaded=!0,o=this._limitZoom(o),this.fire("viewprereset");var v=this._zoom!==o;this._moveStart(v,u)._move(a,o)._moveEnd(v),this.fire("viewreset"),f&&this.fire("load")},_moveStart:function(a,o){return a&&this.fire("zoomstart"),o||this.fire("movestart"),this},_move:function(a,o,u,f){o===void 0&&(o=this._zoom);var v=this._zoom!==o;return this._zoom=o,this._lastCenter=a,this._pixelOrigin=this._getNewPixelOrigin(a),f?u&&u.pinch&&this.fire("zoom",u):((v||u&&u.pinch)&&this.fire("zoom",u),this.fire("move",u)),this},_moveEnd:function(a){return a&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return O(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(a){Xe(this._mapPane,this._getMapPanePos().subtract(a))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(a){this._targets={},this._targets[l(this._container)]=this;var o=a?Me:_e;o(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&o(window,"resize",this._onResize,this),fe.any3d&&this.options.transform3DLimit&&(a?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){O(this._resizeRequest),this._resizeRequest=T(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var a=this._getMapPanePos();Math.max(Math.abs(a.x),Math.abs(a.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(a,o){for(var u=[],f,v=o==="mouseout"||o==="mouseover",C=a.target||a.srcElement,q=!1;C;){if(f=this._targets[l(C)],f&&(o==="click"||o==="preclick")&&this._draggableMoved(f)){q=!0;break}if(f&&f.listens(o,!0)&&(v&&!Bs(C,a)||(u.push(f),v))||C===this._container)break;C=C.parentNode}return!u.length&&!q&&!v&&this.listens(o,!0)&&(u=[this]),u},_isClickDisabled:function(a){for(;a&&a!==this._container;){if(a._leaflet_disable_click)return!0;a=a.parentNode}},_handleDOMEvent:function(a){var o=a.target||a.srcElement;if(!(!this._loaded||o._leaflet_disable_events||a.type==="click"&&this._isClickDisabled(o))){var u=a.type;u==="mousedown"&&Ms(o),this._fireDOMEvent(a,u)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(a,o,u){if(a.type==="click"){var f=n({},a);f.type="preclick",this._fireDOMEvent(f,f.type,u)}var v=this._findEventTargets(a,o);if(u){for(var C=[],q=0;q<u.length;q++)u[q].listens(o,!0)&&C.push(u[q]);v=C.concat(v)}if(v.length){o==="contextmenu"&&ut(a);var W=v[0],X={originalEvent:a};if(a.type!=="keypress"&&a.type!=="keydown"&&a.type!=="keyup"){var re=W.getLatLng&&(!W._radius||W._radius<=10);X.containerPoint=re?this.latLngToContainerPoint(W.getLatLng()):this.mouseEventToContainerPoint(a),X.layerPoint=this.containerPointToLayerPoint(X.containerPoint),X.latlng=re?W.getLatLng():this.layerPointToLatLng(X.layerPoint)}for(q=0;q<v.length;q++)if(v[q].fire(o,X,!0),X.originalEvent._stopped||v[q].options.bubblingMouseEvents===!1&&S(this._mouseEvents,o)!==-1)return}},_draggableMoved:function(a){return a=a.dragging&&a.dragging.enabled()?a:this,a.dragging&&a.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var a=0,o=this._handlers.length;a<o;a++)this._handlers[a].disable()},whenReady:function(a,o){return this._loaded?a.call(o||this,{target:this}):this.on("load",a,o),this},_getMapPanePos:function(){return pa(this._mapPane)||new Y(0,0)},_moved:function(){var a=this._getMapPanePos();return a&&!a.equals([0,0])},_getTopLeftPoint:function(a,o){var u=a&&o!==void 0?this._getNewPixelOrigin(a,o):this.getPixelOrigin();return u.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(a,o){var u=this.getSize()._divideBy(2);return this.project(a,o)._subtract(u)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(a,o,u){var f=this._getNewPixelOrigin(u,o);return this.project(a,o)._subtract(f)},_latLngBoundsToNewLayerBounds:function(a,o,u){var f=this._getNewPixelOrigin(u,o);return ee([this.project(a.getSouthWest(),o)._subtract(f),this.project(a.getNorthWest(),o)._subtract(f),this.project(a.getSouthEast(),o)._subtract(f),this.project(a.getNorthEast(),o)._subtract(f)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(a){return this.latLngToLayerPoint(a).subtract(this._getCenterLayerPoint())},_limitCenter:function(a,o,u){if(!u)return a;var f=this.project(a,o),v=this.getSize().divideBy(2),C=new j(f.subtract(v),f.add(v)),q=this._getBoundsOffset(C,u,o);return Math.abs(q.x)<=1&&Math.abs(q.y)<=1?a:this.unproject(f.add(q),o)},_limitOffset:function(a,o){if(!o)return a;var u=this.getPixelBounds(),f=new j(u.min.add(a),u.max.add(a));return a.add(this._getBoundsOffset(f,o))},_getBoundsOffset:function(a,o,u){var f=ee(this.project(o.getNorthEast(),u),this.project(o.getSouthWest(),u)),v=f.min.subtract(a.min),C=f.max.subtract(a.max),q=this._rebound(v.x,-C.x),W=this._rebound(v.y,-C.y);return new Y(q,W)},_rebound:function(a,o){return a+o>0?Math.round(a-o)/2:Math.max(0,Math.ceil(a))-Math.max(0,Math.floor(o))},_limitZoom:function(a){var o=this.getMinZoom(),u=this.getMaxZoom(),f=fe.any3d?this.options.zoomSnap:1;return f&&(a=Math.round(a/f)*f),Math.max(o,Math.min(u,a))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){Ze(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(a,o){var u=this._getCenterOffset(a)._trunc();return(o&&o.animate)!==!0&&!this.getSize().contains(u)?!1:(this.panBy(u,o),!0)},_createAnimProxy:function(){var a=this._proxy=Pe("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(a),this.on("zoomanim",function(o){var u=Ps,f=this._proxy.style[u];ua(this._proxy,this.project(o.center,o.zoom),this.getZoomScale(o.zoom,1)),f===this._proxy.style[u]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){Be(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var a=this.getCenter(),o=this.getZoom();ua(this._proxy,this.project(a,o),this.getZoomScale(o,1))},_catchTransitionEnd:function(a){this._animatingZoom&&a.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(a,o,u){if(this._animatingZoom)return!0;if(u=u||{},!this._zoomAnimated||u.animate===!1||this._nothingToAnimate()||Math.abs(o-this._zoom)>this.options.zoomAnimationThreshold)return!1;var f=this.getZoomScale(o),v=this._getCenterOffset(a)._divideBy(1-1/f);return u.animate!==!0&&!this.getSize().contains(v)?!1:(T(function(){this._moveStart(!0,u.noMoveStart||!1)._animateZoom(a,o,!0)},this),!0)},_animateZoom:function(a,o,u,f){this._mapPane&&(u&&(this._animatingZoom=!0,this._animateToCenter=a,this._animateToZoom=o,ke(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:a,zoom:o,noUpdate:f}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(i(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&Ze(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function If(a,o){return new Te(a,o)}var nn=D.extend({options:{position:"topright"},initialize:function(a){g(this,a)},getPosition:function(){return this.options.position},setPosition:function(a){var o=this._map;return o&&o.removeControl(this),this.options.position=a,o&&o.addControl(this),this},getContainer:function(){return this._container},addTo:function(a){this.remove(),this._map=a;var o=this._container=this.onAdd(a),u=this.getPosition(),f=a._controlCorners[u];return ke(o,"leaflet-control"),u.indexOf("bottom")!==-1?f.insertBefore(o,f.firstChild):f.appendChild(o),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(Be(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(a){this._map&&a&&a.screenX>0&&a.screenY>0&&this._map.getContainer().focus()}}),Br=function(a){return new nn(a)};Te.include({addControl:function(a){return a.addTo(this),this},removeControl:function(a){return a.remove(),this},_initControlPos:function(){var a=this._controlCorners={},o="leaflet-",u=this._controlContainer=Pe("div",o+"control-container",this._container);function f(v,C){var q=o+v+" "+o+C;a[v+C]=Pe("div",q,u)}f("top","left"),f("top","right"),f("bottom","left"),f("bottom","right")},_clearControlPos:function(){for(var a in this._controlCorners)Be(this._controlCorners[a]);Be(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Vd=nn.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(a,o,u,f){return u<f?-1:f<u?1:0}},initialize:function(a,o,u){g(this,u),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var f in a)this._addLayer(a[f],f);for(f in o)this._addLayer(o[f],f,!0)},onAdd:function(a){this._initLayout(),this._update(),this._map=a,a.on("zoomend",this._checkDisabledLayers,this);for(var o=0;o<this._layers.length;o++)this._layers[o].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(a){return nn.prototype.addTo.call(this,a),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var a=0;a<this._layers.length;a++)this._layers[a].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(a,o){return this._addLayer(a,o),this._map?this._update():this},addOverlay:function(a,o){return this._addLayer(a,o,!0),this._map?this._update():this},removeLayer:function(a){a.off("add remove",this._onLayerChange,this);var o=this._getLayer(l(a));return o&&this._layers.splice(this._layers.indexOf(o),1),this._map?this._update():this},expand:function(){ke(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var a=this._map.getSize().y-(this._container.offsetTop+50);return a<this._section.clientHeight?(ke(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=a+"px"):Ze(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return Ze(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var a="leaflet-control-layers",o=this._container=Pe("div",a),u=this.options.collapsed;o.setAttribute("aria-haspopup",!0),Ur(o),Us(o);var f=this._section=Pe("section",a+"-list");u&&(this._map.on("click",this.collapse,this),_e(o,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var v=this._layersLink=Pe("a",a+"-toggle",o);v.href="#",v.title="Layers",v.setAttribute("role","button"),_e(v,{keydown:function(C){C.keyCode===13&&this._expandSafely()},click:function(C){ut(C),this._expandSafely()}},this),u||this.expand(),this._baseLayersList=Pe("div",a+"-base",f),this._separator=Pe("div",a+"-separator",f),this._overlaysList=Pe("div",a+"-overlays",f),o.appendChild(f)},_getLayer:function(a){for(var o=0;o<this._layers.length;o++)if(this._layers[o]&&l(this._layers[o].layer)===a)return this._layers[o]},_addLayer:function(a,o,u){this._map&&a.on("add remove",this._onLayerChange,this),this._layers.push({layer:a,name:o,overlay:u}),this.options.sortLayers&&this._layers.sort(i(function(f,v){return this.options.sortFunction(f.layer,v.layer,f.name,v.name)},this)),this.options.autoZIndex&&a.setZIndex&&(this._lastZIndex++,a.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Gi(this._baseLayersList),Gi(this._overlaysList),this._layerControlInputs=[];var a,o,u,f,v=0;for(u=0;u<this._layers.length;u++)f=this._layers[u],this._addItem(f),o=o||f.overlay,a=a||!f.overlay,v+=f.overlay?0:1;return this.options.hideSingleBase&&(a=a&&v>1,this._baseLayersList.style.display=a?"":"none"),this._separator.style.display=o&&a?"":"none",this},_onLayerChange:function(a){this._handlingClick||this._update();var o=this._getLayer(l(a.target)),u=o.overlay?a.type==="add"?"overlayadd":"overlayremove":a.type==="add"?"baselayerchange":null;u&&this._map.fire(u,o)},_createRadioElement:function(a,o){var u='<input type="radio" class="leaflet-control-layers-selector" name="'+a+'"'+(o?' checked="checked"':"")+"/>",f=document.createElement("div");return f.innerHTML=u,f.firstChild},_addItem:function(a){var o=document.createElement("label"),u=this._map.hasLayer(a.layer),f;a.overlay?(f=document.createElement("input"),f.type="checkbox",f.className="leaflet-control-layers-selector",f.defaultChecked=u):f=this._createRadioElement("leaflet-base-layers_"+l(this),u),this._layerControlInputs.push(f),f.layerId=l(a.layer),_e(f,"click",this._onInputClick,this);var v=document.createElement("span");v.innerHTML=" "+a.name;var C=document.createElement("span");o.appendChild(C),C.appendChild(f),C.appendChild(v);var q=a.overlay?this._overlaysList:this._baseLayersList;return q.appendChild(o),this._checkDisabledLayers(),o},_onInputClick:function(){if(!this._preventClick){var a=this._layerControlInputs,o,u,f=[],v=[];this._handlingClick=!0;for(var C=a.length-1;C>=0;C--)o=a[C],u=this._getLayer(o.layerId).layer,o.checked?f.push(u):o.checked||v.push(u);for(C=0;C<v.length;C++)this._map.hasLayer(v[C])&&this._map.removeLayer(v[C]);for(C=0;C<f.length;C++)this._map.hasLayer(f[C])||this._map.addLayer(f[C]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var a=this._layerControlInputs,o,u,f=this._map.getZoom(),v=a.length-1;v>=0;v--)o=a[v],u=this._getLayer(o.layerId).layer,o.disabled=u.options.minZoom!==void 0&&f<u.options.minZoom||u.options.maxZoom!==void 0&&f>u.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var a=this._section;this._preventClick=!0,_e(a,"click",ut),this.expand();var o=this;setTimeout(function(){Me(a,"click",ut),o._preventClick=!1})}}),Of=function(a,o,u){return new Vd(a,o,u)},$s=nn.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(a){var o="leaflet-control-zoom",u=Pe("div",o+" leaflet-bar"),f=this.options;return this._zoomInButton=this._createButton(f.zoomInText,f.zoomInTitle,o+"-in",u,this._zoomIn),this._zoomOutButton=this._createButton(f.zoomOutText,f.zoomOutTitle,o+"-out",u,this._zoomOut),this._updateDisabled(),a.on("zoomend zoomlevelschange",this._updateDisabled,this),u},onRemove:function(a){a.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(a){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(a.shiftKey?3:1))},_zoomOut:function(a){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(a.shiftKey?3:1))},_createButton:function(a,o,u,f,v){var C=Pe("a",u,f);return C.innerHTML=a,C.href="#",C.title=o,C.setAttribute("role","button"),C.setAttribute("aria-label",o),Ur(C),_e(C,"click",ma),_e(C,"click",v,this),_e(C,"click",this._refocusOnMap,this),C},_updateDisabled:function(){var a=this._map,o="leaflet-disabled";Ze(this._zoomInButton,o),Ze(this._zoomOutButton,o),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||a._zoom===a.getMinZoom())&&(ke(this._zoomOutButton,o),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||a._zoom===a.getMaxZoom())&&(ke(this._zoomInButton,o),this._zoomInButton.setAttribute("aria-disabled","true"))}});Te.mergeOptions({zoomControl:!0}),Te.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new $s,this.addControl(this.zoomControl))});var Rf=function(a){return new $s(a)},Zd=nn.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(a){var o="leaflet-control-scale",u=Pe("div",o),f=this.options;return this._addScales(f,o+"-line",u),a.on(f.updateWhenIdle?"moveend":"move",this._update,this),a.whenReady(this._update,this),u},onRemove:function(a){a.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(a,o,u){a.metric&&(this._mScale=Pe("div",o,u)),a.imperial&&(this._iScale=Pe("div",o,u))},_update:function(){var a=this._map,o=a.getSize().y/2,u=a.distance(a.containerPointToLatLng([0,o]),a.containerPointToLatLng([this.options.maxWidth,o]));this._updateScales(u)},_updateScales:function(a){this.options.metric&&a&&this._updateMetric(a),this.options.imperial&&a&&this._updateImperial(a)},_updateMetric:function(a){var o=this._getRoundNum(a),u=o<1e3?o+" m":o/1e3+" km";this._updateScale(this._mScale,u,o/a)},_updateImperial:function(a){var o=a*3.2808399,u,f,v;o>5280?(u=o/5280,f=this._getRoundNum(u),this._updateScale(this._iScale,f+" mi",f/u)):(v=this._getRoundNum(o),this._updateScale(this._iScale,v+" ft",v/o))},_updateScale:function(a,o,u){a.style.width=Math.round(this.options.maxWidth*u)+"px",a.innerHTML=o},_getRoundNum:function(a){var o=Math.pow(10,(Math.floor(a)+"").length-1),u=a/o;return u=u>=10?10:u>=5?5:u>=3?3:u>=2?2:1,o*u}}),Df=function(a){return new Zd(a)},Mf='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Hs=nn.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(fe.inlineSvg?Mf+" ":"")+"Leaflet</a>"},initialize:function(a){g(this,a),this._attributions={}},onAdd:function(a){a.attributionControl=this,this._container=Pe("div","leaflet-control-attribution"),Ur(this._container);for(var o in a._layers)a._layers[o].getAttribution&&this.addAttribution(a._layers[o].getAttribution());return this._update(),a.on("layeradd",this._addAttribution,this),this._container},onRemove:function(a){a.off("layeradd",this._addAttribution,this)},_addAttribution:function(a){a.layer.getAttribution&&(this.addAttribution(a.layer.getAttribution()),a.layer.once("remove",function(){this.removeAttribution(a.layer.getAttribution())},this))},setPrefix:function(a){return this.options.prefix=a,this._update(),this},addAttribution:function(a){return a?(this._attributions[a]||(this._attributions[a]=0),this._attributions[a]++,this._update(),this):this},removeAttribution:function(a){return a?(this._attributions[a]&&(this._attributions[a]--,this._update()),this):this},_update:function(){if(this._map){var a=[];for(var o in this._attributions)this._attributions[o]&&a.push(o);var u=[];this.options.prefix&&u.push(this.options.prefix),a.length&&u.push(a.join(", ")),this._container.innerHTML=u.join(' <span aria-hidden="true">|</span> ')}}});Te.mergeOptions({attributionControl:!0}),Te.addInitHook(function(){this.options.attributionControl&&new Hs().addTo(this)});var zf=function(a){return new Hs(a)};nn.Layers=Vd,nn.Zoom=$s,nn.Scale=Zd,nn.Attribution=Hs,Br.layers=Of,Br.zoom=Rf,Br.scale=Df,Br.attribution=zf;var un=D.extend({initialize:function(a){this._map=a},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});un.addTo=function(a,o){return a.addHandler(o,this),this};var Nf={Events:$},Wd=fe.touch?"touchstart mousedown":"mousedown",Wn=B.extend({options:{clickTolerance:3},initialize:function(a,o,u,f){g(this,f),this._element=a,this._dragStartTarget=o||a,this._preventOutline=u},enable:function(){this._enabled||(_e(this._dragStartTarget,Wd,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Wn._dragging===this&&this.finishDrag(!0),Me(this._dragStartTarget,Wd,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(a){if(this._enabled&&(this._moved=!1,!Cs(this._element,"leaflet-zoom-anim"))){if(a.touches&&a.touches.length!==1){Wn._dragging===this&&this.finishDrag();return}if(!(Wn._dragging||a.shiftKey||a.which!==1&&a.button!==1&&!a.touches)&&(Wn._dragging=this,this._preventOutline&&Ms(this._element),Os(),Nr(),!this._moving)){this.fire("down");var o=a.touches?a.touches[0]:a,u=qd(this._element);this._startPoint=new Y(o.clientX,o.clientY),this._startPos=pa(this._element),this._parentScale=zs(u);var f=a.type==="mousedown";_e(document,f?"mousemove":"touchmove",this._onMove,this),_e(document,f?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(a){if(this._enabled){if(a.touches&&a.touches.length>1){this._moved=!0;return}var o=a.touches&&a.touches.length===1?a.touches[0]:a,u=new Y(o.clientX,o.clientY)._subtract(this._startPoint);!u.x&&!u.y||Math.abs(u.x)+Math.abs(u.y)<this.options.clickTolerance||(u.x/=this._parentScale.x,u.y/=this._parentScale.y,ut(a),this._moved||(this.fire("dragstart"),this._moved=!0,ke(document.body,"leaflet-dragging"),this._lastTarget=a.target||a.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),ke(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(u),this._moving=!0,this._lastEvent=a,this._updatePosition())}},_updatePosition:function(){var a={originalEvent:this._lastEvent};this.fire("predrag",a),Xe(this._element,this._newPos),this.fire("drag",a)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(a){Ze(document.body,"leaflet-dragging"),this._lastTarget&&(Ze(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),Me(document,"mousemove touchmove",this._onMove,this),Me(document,"mouseup touchend touchcancel",this._onUp,this),Rs(),jr();var o=this._moved&&this._moving;this._moving=!1,Wn._dragging=!1,o&&this.fire("dragend",{noInertia:a,distance:this._newPos.distanceTo(this._startPos)})}});function Gd(a,o,u){var f,v=[1,4,2,8],C,q,W,X,re,pe,ve,Se;for(C=0,pe=a.length;C<pe;C++)a[C]._code=fa(a[C],o);for(W=0;W<4;W++){for(ve=v[W],f=[],C=0,pe=a.length,q=pe-1;C<pe;q=C++)X=a[C],re=a[q],X._code&ve?re._code&ve||(Se=Qi(re,X,ve,o,u),Se._code=fa(Se,o),f.push(Se)):(re._code&ve&&(Se=Qi(re,X,ve,o,u),Se._code=fa(Se,o),f.push(Se)),f.push(X));a=f}return a}function Kd(a,o){var u,f,v,C,q,W,X,re,pe;if(!a||a.length===0)throw new Error("latlngs not passed");Zt(a)||(console.warn("latlngs are not flat! Only the first ring will be used"),a=a[0]);var ve=ae([0,0]),Se=ne(a),wt=Se.getNorthWest().distanceTo(Se.getSouthWest())*Se.getNorthEast().distanceTo(Se.getNorthWest());wt<1700&&(ve=Fs(a));var st=a.length,Wt=[];for(u=0;u<st;u++){var Pt=ae(a[u]);Wt.push(o.project(ae([Pt.lat-ve.lat,Pt.lng-ve.lng])))}for(W=X=re=0,u=0,f=st-1;u<st;f=u++)v=Wt[u],C=Wt[f],q=v.y*C.x-C.y*v.x,X+=(v.x+C.x)*q,re+=(v.y+C.y)*q,W+=q*3;W===0?pe=Wt[0]:pe=[X/W,re/W];var Ka=o.unproject(N(pe));return ae([Ka.lat+ve.lat,Ka.lng+ve.lng])}function Fs(a){for(var o=0,u=0,f=0,v=0;v<a.length;v++){var C=ae(a[v]);o+=C.lat,u+=C.lng,f++}return ae([o/f,u/f])}var jf={__proto__:null,clipPolygon:Gd,polygonCenter:Kd,centroid:Fs};function Jd(a,o){if(!o||!a.length)return a.slice();var u=o*o;return a=Bf(a,u),a=Uf(a,u),a}function Xd(a,o,u){return Math.sqrt($r(a,o,u,!0))}function qf(a,o,u){return $r(a,o,u)}function Uf(a,o){var u=a.length,f=typeof Uint8Array!="undefined"?Uint8Array:Array,v=new f(u);v[0]=v[u-1]=1,Vs(a,v,o,0,u-1);var C,q=[];for(C=0;C<u;C++)v[C]&&q.push(a[C]);return q}function Vs(a,o,u,f,v){var C=0,q,W,X;for(W=f+1;W<=v-1;W++)X=$r(a[W],a[f],a[v],!0),X>C&&(q=W,C=X);C>u&&(o[q]=1,Vs(a,o,u,f,q),Vs(a,o,u,q,v))}function Bf(a,o){for(var u=[a[0]],f=1,v=0,C=a.length;f<C;f++)$f(a[f],a[v])>o&&(u.push(a[f]),v=f);return v<C-1&&u.push(a[C-1]),u}var Yd;function Qd(a,o,u,f,v){var C=f?Yd:fa(a,u),q=fa(o,u),W,X,re;for(Yd=q;;){if(!(C|q))return[a,o];if(C&q)return!1;W=C||q,X=Qi(a,o,W,u,v),re=fa(X,u),W===C?(a=X,C=re):(o=X,q=re)}}function Qi(a,o,u,f,v){var C=o.x-a.x,q=o.y-a.y,W=f.min,X=f.max,re,pe;return u&8?(re=a.x+C*(X.y-a.y)/q,pe=X.y):u&4?(re=a.x+C*(W.y-a.y)/q,pe=W.y):u&2?(re=X.x,pe=a.y+q*(X.x-a.x)/C):u&1&&(re=W.x,pe=a.y+q*(W.x-a.x)/C),new Y(re,pe,v)}function fa(a,o){var u=0;return a.x<o.min.x?u|=1:a.x>o.max.x&&(u|=2),a.y<o.min.y?u|=4:a.y>o.max.y&&(u|=8),u}function $f(a,o){var u=o.x-a.x,f=o.y-a.y;return u*u+f*f}function $r(a,o,u,f){var v=o.x,C=o.y,q=u.x-v,W=u.y-C,X=q*q+W*W,re;return X>0&&(re=((a.x-v)*q+(a.y-C)*W)/X,re>1?(v=u.x,C=u.y):re>0&&(v+=q*re,C+=W*re)),q=a.x-v,W=a.y-C,f?q*q+W*W:new Y(v,C)}function Zt(a){return!P(a[0])||typeof a[0][0]!="object"&&typeof a[0][0]!="undefined"}function ec(a){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),Zt(a)}function tc(a,o){var u,f,v,C,q,W,X,re;if(!a||a.length===0)throw new Error("latlngs not passed");Zt(a)||(console.warn("latlngs are not flat! Only the first ring will be used"),a=a[0]);var pe=ae([0,0]),ve=ne(a),Se=ve.getNorthWest().distanceTo(ve.getSouthWest())*ve.getNorthEast().distanceTo(ve.getNorthWest());Se<1700&&(pe=Fs(a));var wt=a.length,st=[];for(u=0;u<wt;u++){var Wt=ae(a[u]);st.push(o.project(ae([Wt.lat-pe.lat,Wt.lng-pe.lng])))}for(u=0,f=0;u<wt-1;u++)f+=st[u].distanceTo(st[u+1])/2;if(f===0)re=st[0];else for(u=0,C=0;u<wt-1;u++)if(q=st[u],W=st[u+1],v=q.distanceTo(W),C+=v,C>f){X=(C-f)/v,re=[W.x-X*(W.x-q.x),W.y-X*(W.y-q.y)];break}var Pt=o.unproject(N(re));return ae([Pt.lat+pe.lat,Pt.lng+pe.lng])}var Hf={__proto__:null,simplify:Jd,pointToSegmentDistance:Xd,closestPointOnSegment:qf,clipSegment:Qd,_getEdgeIntersection:Qi,_getBitCode:fa,_sqClosestPointOnSegment:$r,isFlat:Zt,_flat:ec,polylineCenter:tc},Zs={project:function(a){return new Y(a.lng,a.lat)},unproject:function(a){return new V(a.y,a.x)},bounds:new j([-180,-90],[180,90])},Ws={R:6378137,R_MINOR:6356752314245179e-9,bounds:new j([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(a){var o=Math.PI/180,u=this.R,f=a.lat*o,v=this.R_MINOR/u,C=Math.sqrt(1-v*v),q=C*Math.sin(f),W=Math.tan(Math.PI/4-f/2)/Math.pow((1-q)/(1+q),C/2);return f=-u*Math.log(Math.max(W,1e-10)),new Y(a.lng*o*u,f)},unproject:function(a){for(var o=180/Math.PI,u=this.R,f=this.R_MINOR/u,v=Math.sqrt(1-f*f),C=Math.exp(-a.y/u),q=Math.PI/2-2*Math.atan(C),W=0,X=.1,re;W<15&&Math.abs(X)>1e-7;W++)re=v*Math.sin(q),re=Math.pow((1-re)/(1+re),v/2),X=Math.PI/2-2*Math.atan(C*re)-q,q+=X;return new V(q*o,a.x*o/u)}},Ff={__proto__:null,LonLat:Zs,Mercator:Ws,SphericalMercator:De},Vf=n({},te,{code:"EPSG:3395",projection:Ws,transformation:(function(){var a=.5/(Math.PI*Ws.R);return Ue(a,.5,-a,.5)})()}),nc=n({},te,{code:"EPSG:4326",projection:Zs,transformation:Ue(1/180,1,-1/180,.5)}),Zf=n({},ce,{projection:Zs,transformation:Ue(1,0,-1,0),scale:function(a){return Math.pow(2,a)},zoom:function(a){return Math.log(a)/Math.LN2},distance:function(a,o){var u=o.lng-a.lng,f=o.lat-a.lat;return Math.sqrt(u*u+f*f)},infinite:!0});ce.Earth=te,ce.EPSG3395=Vf,ce.EPSG3857=Ft,ce.EPSG900913=ye,ce.EPSG4326=nc,ce.Simple=Zf;var an=B.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(a){return a.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(a){return a&&a.removeLayer(this),this},getPane:function(a){return this._map.getPane(a?this.options[a]||a:this.options.pane)},addInteractiveTarget:function(a){return this._map._targets[l(a)]=this,this},removeInteractiveTarget:function(a){return delete this._map._targets[l(a)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(a){var o=a.target;if(o.hasLayer(this)){if(this._map=o,this._zoomAnimated=o._zoomAnimated,this.getEvents){var u=this.getEvents();o.on(u,this),this.once("remove",function(){o.off(u,this)},this)}this.onAdd(o),this.fire("add"),o.fire("layeradd",{layer:this})}}});Te.include({addLayer:function(a){if(!a._layerAdd)throw new Error("The provided object is not a Layer.");var o=l(a);return this._layers[o]?this:(this._layers[o]=a,a._mapToAdd=this,a.beforeAdd&&a.beforeAdd(this),this.whenReady(a._layerAdd,a),this)},removeLayer:function(a){var o=l(a);return this._layers[o]?(this._loaded&&a.onRemove(this),delete this._layers[o],this._loaded&&(this.fire("layerremove",{layer:a}),a.fire("remove")),a._map=a._mapToAdd=null,this):this},hasLayer:function(a){return l(a)in this._layers},eachLayer:function(a,o){for(var u in this._layers)a.call(o,this._layers[u]);return this},_addLayers:function(a){a=a?P(a)?a:[a]:[];for(var o=0,u=a.length;o<u;o++)this.addLayer(a[o])},_addZoomLimit:function(a){(!isNaN(a.options.maxZoom)||!isNaN(a.options.minZoom))&&(this._zoomBoundLayers[l(a)]=a,this._updateZoomLevels())},_removeZoomLimit:function(a){var o=l(a);this._zoomBoundLayers[o]&&(delete this._zoomBoundLayers[o],this._updateZoomLevels())},_updateZoomLevels:function(){var a=1/0,o=-1/0,u=this._getZoomSpan();for(var f in this._zoomBoundLayers){var v=this._zoomBoundLayers[f].options;a=v.minZoom===void 0?a:Math.min(a,v.minZoom),o=v.maxZoom===void 0?o:Math.max(o,v.maxZoom)}this._layersMaxZoom=o===-1/0?void 0:o,this._layersMinZoom=a===1/0?void 0:a,u!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Fa=an.extend({initialize:function(a,o){g(this,o),this._layers={};var u,f;if(a)for(u=0,f=a.length;u<f;u++)this.addLayer(a[u])},addLayer:function(a){var o=this.getLayerId(a);return this._layers[o]=a,this._map&&this._map.addLayer(a),this},removeLayer:function(a){var o=a in this._layers?a:this.getLayerId(a);return this._map&&this._layers[o]&&this._map.removeLayer(this._layers[o]),delete this._layers[o],this},hasLayer:function(a){var o=typeof a=="number"?a:this.getLayerId(a);return o in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(a){var o=Array.prototype.slice.call(arguments,1),u,f;for(u in this._layers)f=this._layers[u],f[a]&&f[a].apply(f,o);return this},onAdd:function(a){this.eachLayer(a.addLayer,a)},onRemove:function(a){this.eachLayer(a.removeLayer,a)},eachLayer:function(a,o){for(var u in this._layers)a.call(o,this._layers[u]);return this},getLayer:function(a){return this._layers[a]},getLayers:function(){var a=[];return this.eachLayer(a.push,a),a},setZIndex:function(a){return this.invoke("setZIndex",a)},getLayerId:function(a){return l(a)}}),Wf=function(a,o){return new Fa(a,o)},An=Fa.extend({addLayer:function(a){return this.hasLayer(a)?this:(a.addEventParent(this),Fa.prototype.addLayer.call(this,a),this.fire("layeradd",{layer:a}))},removeLayer:function(a){return this.hasLayer(a)?(a in this._layers&&(a=this._layers[a]),a.removeEventParent(this),Fa.prototype.removeLayer.call(this,a),this.fire("layerremove",{layer:a})):this},setStyle:function(a){return this.invoke("setStyle",a)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var a=new Z;for(var o in this._layers){var u=this._layers[o];a.extend(u.getBounds?u.getBounds():u.getLatLng())}return a}}),Gf=function(a,o){return new An(a,o)},Va=D.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(a){g(this,a)},createIcon:function(a){return this._createIcon("icon",a)},createShadow:function(a){return this._createIcon("shadow",a)},_createIcon:function(a,o){var u=this._getIconUrl(a);if(!u){if(a==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var f=this._createImg(u,o&&o.tagName==="IMG"?o:null);return this._setIconStyles(f,a),(this.options.crossOrigin||this.options.crossOrigin==="")&&(f.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),f},_setIconStyles:function(a,o){var u=this.options,f=u[o+"Size"];typeof f=="number"&&(f=[f,f]);var v=N(f),C=N(o==="shadow"&&u.shadowAnchor||u.iconAnchor||v&&v.divideBy(2,!0));a.className="leaflet-marker-"+o+" "+(u.className||""),C&&(a.style.marginLeft=-C.x+"px",a.style.marginTop=-C.y+"px"),v&&(a.style.width=v.x+"px",a.style.height=v.y+"px")},_createImg:function(a,o){return o=o||document.createElement("img"),o.src=a,o},_getIconUrl:function(a){return fe.retina&&this.options[a+"RetinaUrl"]||this.options[a+"Url"]}});function Kf(a){return new Va(a)}var Hr=Va.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(a){return typeof Hr.imagePath!="string"&&(Hr.imagePath=this._detectIconPath()),(this.options.imagePath||Hr.imagePath)+Va.prototype._getIconUrl.call(this,a)},_stripUrl:function(a){var o=function(u,f,v){var C=f.exec(u);return C&&C[v]};return a=o(a,/^url\((['"])?(.+)\1\)$/,2),a&&o(a,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var a=Pe("div","leaflet-default-icon-path",document.body),o=zr(a,"background-image")||zr(a,"backgroundImage");if(document.body.removeChild(a),o=this._stripUrl(o),o)return o;var u=document.querySelector('link[href$="leaflet.css"]');return u?u.href.substring(0,u.href.length-11-1):""}}),ac=un.extend({initialize:function(a){this._marker=a},addHooks:function(){var a=this._marker._icon;this._draggable||(this._draggable=new Wn(a,a,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),ke(a,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Ze(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(a){var o=this._marker,u=o._map,f=this._marker.options.autoPanSpeed,v=this._marker.options.autoPanPadding,C=pa(o._icon),q=u.getPixelBounds(),W=u.getPixelOrigin(),X=ee(q.min._subtract(W).add(v),q.max._subtract(W).subtract(v));if(!X.contains(C)){var re=N((Math.max(X.max.x,C.x)-X.max.x)/(q.max.x-X.max.x)-(Math.min(X.min.x,C.x)-X.min.x)/(q.min.x-X.min.x),(Math.max(X.max.y,C.y)-X.max.y)/(q.max.y-X.max.y)-(Math.min(X.min.y,C.y)-X.min.y)/(q.min.y-X.min.y)).multiplyBy(f);u.panBy(re,{animate:!1}),this._draggable._newPos._add(re),this._draggable._startPos._add(re),Xe(o._icon,this._draggable._newPos),this._onDrag(a),this._panRequest=T(this._adjustPan.bind(this,a))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(a){this._marker.options.autoPan&&(O(this._panRequest),this._panRequest=T(this._adjustPan.bind(this,a)))},_onDrag:function(a){var o=this._marker,u=o._shadow,f=pa(o._icon),v=o._map.layerPointToLatLng(f);u&&Xe(u,f),o._latlng=v,a.latlng=v,a.oldLatLng=this._oldLatLng,o.fire("move",a).fire("drag",a)},_onDragEnd:function(a){O(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",a)}}),eo=an.extend({options:{icon:new Hr,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(a,o){g(this,o),this._latlng=ae(a)},onAdd:function(a){this._zoomAnimated=this._zoomAnimated&&a.options.markerZoomAnimation,this._zoomAnimated&&a.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(a){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&a.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(a){var o=this._latlng;return this._latlng=ae(a),this.update(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},setZIndexOffset:function(a){return this.options.zIndexOffset=a,this.update()},getIcon:function(){return this.options.icon},setIcon:function(a){return this.options.icon=a,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var a=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(a)}return this},_initIcon:function(){var a=this.options,o="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),u=a.icon.createIcon(this._icon),f=!1;u!==this._icon&&(this._icon&&this._removeIcon(),f=!0,a.title&&(u.title=a.title),u.tagName==="IMG"&&(u.alt=a.alt||"")),ke(u,o),a.keyboard&&(u.tabIndex="0",u.setAttribute("role","button")),this._icon=u,a.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&_e(u,"focus",this._panOnFocus,this);var v=a.icon.createShadow(this._shadow),C=!1;v!==this._shadow&&(this._removeShadow(),C=!0),v&&(ke(v,o),v.alt=""),this._shadow=v,a.opacity<1&&this._updateOpacity(),f&&this.getPane().appendChild(this._icon),this._initInteraction(),v&&C&&this.getPane(a.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Me(this._icon,"focus",this._panOnFocus,this),Be(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&Be(this._shadow),this._shadow=null},_setPos:function(a){this._icon&&Xe(this._icon,a),this._shadow&&Xe(this._shadow,a),this._zIndex=a.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(a){this._icon&&(this._icon.style.zIndex=this._zIndex+a)},_animateZoom:function(a){var o=this._map._latLngToNewLayerPoint(this._latlng,a.zoom,a.center).round();this._setPos(o)},_initInteraction:function(){if(this.options.interactive&&(ke(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),ac)){var a=this.options.draggable;this.dragging&&(a=this.dragging.enabled(),this.dragging.disable()),this.dragging=new ac(this),a&&this.dragging.enable()}},setOpacity:function(a){return this.options.opacity=a,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var a=this.options.opacity;this._icon&&Vt(this._icon,a),this._shadow&&Vt(this._shadow,a)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var a=this._map;if(a){var o=this.options.icon.options,u=o.iconSize?N(o.iconSize):N(0,0),f=o.iconAnchor?N(o.iconAnchor):N(0,0);a.panInside(this._latlng,{paddingTopLeft:f,paddingBottomRight:u.subtract(f)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function Jf(a,o){return new eo(a,o)}var Gn=an.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(a){this._renderer=a.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(a){return g(this,a),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&a&&Object.prototype.hasOwnProperty.call(a,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),to=Gn.extend({options:{fill:!0,radius:10},initialize:function(a,o){g(this,o),this._latlng=ae(a),this._radius=this.options.radius},setLatLng:function(a){var o=this._latlng;return this._latlng=ae(a),this.redraw(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(a){return this.options.radius=this._radius=a,this.redraw()},getRadius:function(){return this._radius},setStyle:function(a){var o=a&&a.radius||this._radius;return Gn.prototype.setStyle.call(this,a),this.setRadius(o),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var a=this._radius,o=this._radiusY||a,u=this._clickTolerance(),f=[a+u,o+u];this._pxBounds=new j(this._point.subtract(f),this._point.add(f))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(a){return a.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function Xf(a,o){return new to(a,o)}var Gs=to.extend({initialize:function(a,o,u){if(typeof o=="number"&&(o=n({},u,{radius:o})),g(this,o),this._latlng=ae(a),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(a){return this._mRadius=a,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var a=[this._radius,this._radiusY||this._radius];return new Z(this._map.layerPointToLatLng(this._point.subtract(a)),this._map.layerPointToLatLng(this._point.add(a)))},setStyle:Gn.prototype.setStyle,_project:function(){var a=this._latlng.lng,o=this._latlng.lat,u=this._map,f=u.options.crs;if(f.distance===te.distance){var v=Math.PI/180,C=this._mRadius/te.R/v,q=u.project([o+C,a]),W=u.project([o-C,a]),X=q.add(W).divideBy(2),re=u.unproject(X).lat,pe=Math.acos((Math.cos(C*v)-Math.sin(o*v)*Math.sin(re*v))/(Math.cos(o*v)*Math.cos(re*v)))/v;(isNaN(pe)||pe===0)&&(pe=C/Math.cos(Math.PI/180*o)),this._point=X.subtract(u.getPixelOrigin()),this._radius=isNaN(pe)?0:X.x-u.project([re,a-pe]).x,this._radiusY=X.y-q.y}else{var ve=f.unproject(f.project(this._latlng).subtract([this._mRadius,0]));this._point=u.latLngToLayerPoint(this._latlng),this._radius=this._point.x-u.latLngToLayerPoint(ve).x}this._updateBounds()}});function Yf(a,o,u){return new Gs(a,o,u)}var Tn=Gn.extend({options:{smoothFactor:1,noClip:!1},initialize:function(a,o){g(this,o),this._setLatLngs(a)},getLatLngs:function(){return this._latlngs},setLatLngs:function(a){return this._setLatLngs(a),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(a){for(var o=1/0,u=null,f=$r,v,C,q=0,W=this._parts.length;q<W;q++)for(var X=this._parts[q],re=1,pe=X.length;re<pe;re++){v=X[re-1],C=X[re];var ve=f(a,v,C,!0);ve<o&&(o=ve,u=f(a,v,C))}return u&&(u.distance=Math.sqrt(o)),u},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return tc(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(a,o){return o=o||this._defaultShape(),a=ae(a),o.push(a),this._bounds.extend(a),this.redraw()},_setLatLngs:function(a){this._bounds=new Z,this._latlngs=this._convertLatLngs(a)},_defaultShape:function(){return Zt(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(a){for(var o=[],u=Zt(a),f=0,v=a.length;f<v;f++)u?(o[f]=ae(a[f]),this._bounds.extend(o[f])):o[f]=this._convertLatLngs(a[f]);return o},_project:function(){var a=new j;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,a),this._bounds.isValid()&&a.isValid()&&(this._rawPxBounds=a,this._updateBounds())},_updateBounds:function(){var a=this._clickTolerance(),o=new Y(a,a);this._rawPxBounds&&(this._pxBounds=new j([this._rawPxBounds.min.subtract(o),this._rawPxBounds.max.add(o)]))},_projectLatlngs:function(a,o,u){var f=a[0]instanceof V,v=a.length,C,q;if(f){for(q=[],C=0;C<v;C++)q[C]=this._map.latLngToLayerPoint(a[C]),u.extend(q[C]);o.push(q)}else for(C=0;C<v;C++)this._projectLatlngs(a[C],o,u)},_clipPoints:function(){var a=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(a))){if(this.options.noClip){this._parts=this._rings;return}var o=this._parts,u,f,v,C,q,W,X;for(u=0,v=0,C=this._rings.length;u<C;u++)for(X=this._rings[u],f=0,q=X.length;f<q-1;f++)W=Qd(X[f],X[f+1],a,f,!0),W&&(o[v]=o[v]||[],o[v].push(W[0]),(W[1]!==X[f+1]||f===q-2)&&(o[v].push(W[1]),v++))}},_simplifyPoints:function(){for(var a=this._parts,o=this.options.smoothFactor,u=0,f=a.length;u<f;u++)a[u]=Jd(a[u],o)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(a,o){var u,f,v,C,q,W,X=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(a))return!1;for(u=0,C=this._parts.length;u<C;u++)for(W=this._parts[u],f=0,q=W.length,v=q-1;f<q;v=f++)if(!(!o&&f===0)&&Xd(a,W[v],W[f])<=X)return!0;return!1}});function Qf(a,o){return new Tn(a,o)}Tn._flat=ec;var Za=Tn.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Kd(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(a){var o=Tn.prototype._convertLatLngs.call(this,a),u=o.length;return u>=2&&o[0]instanceof V&&o[0].equals(o[u-1])&&o.pop(),o},_setLatLngs:function(a){Tn.prototype._setLatLngs.call(this,a),Zt(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Zt(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var a=this._renderer._bounds,o=this.options.weight,u=new Y(o,o);if(a=new j(a.min.subtract(u),a.max.add(u)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(a))){if(this.options.noClip){this._parts=this._rings;return}for(var f=0,v=this._rings.length,C;f<v;f++)C=Gd(this._rings[f],a,!0),C.length&&this._parts.push(C)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(a){var o=!1,u,f,v,C,q,W,X,re;if(!this._pxBounds||!this._pxBounds.contains(a))return!1;for(C=0,X=this._parts.length;C<X;C++)for(u=this._parts[C],q=0,re=u.length,W=re-1;q<re;W=q++)f=u[q],v=u[W],f.y>a.y!=v.y>a.y&&a.x<(v.x-f.x)*(a.y-f.y)/(v.y-f.y)+f.x&&(o=!o);return o||Tn.prototype._containsPoint.call(this,a,!0)}});function eg(a,o){return new Za(a,o)}var Pn=An.extend({initialize:function(a,o){g(this,o),this._layers={},a&&this.addData(a)},addData:function(a){var o=P(a)?a:a.features,u,f,v;if(o){for(u=0,f=o.length;u<f;u++)v=o[u],(v.geometries||v.geometry||v.features||v.coordinates)&&this.addData(v);return this}var C=this.options;if(C.filter&&!C.filter(a))return this;var q=no(a,C);return q?(q.feature=io(a),q.defaultOptions=q.options,this.resetStyle(q),C.onEachFeature&&C.onEachFeature(a,q),this.addLayer(q)):this},resetStyle:function(a){return a===void 0?this.eachLayer(this.resetStyle,this):(a.options=n({},a.defaultOptions),this._setLayerStyle(a,this.options.style),this)},setStyle:function(a){return this.eachLayer(function(o){this._setLayerStyle(o,a)},this)},_setLayerStyle:function(a,o){a.setStyle&&(typeof o=="function"&&(o=o(a.feature)),a.setStyle(o))}});function no(a,o){var u=a.type==="Feature"?a.geometry:a,f=u?u.coordinates:null,v=[],C=o&&o.pointToLayer,q=o&&o.coordsToLatLng||Ks,W,X,re,pe;if(!f&&!u)return null;switch(u.type){case"Point":return W=q(f),rc(C,a,W,o);case"MultiPoint":for(re=0,pe=f.length;re<pe;re++)W=q(f[re]),v.push(rc(C,a,W,o));return new An(v);case"LineString":case"MultiLineString":return X=ao(f,u.type==="LineString"?0:1,q),new Tn(X,o);case"Polygon":case"MultiPolygon":return X=ao(f,u.type==="Polygon"?1:2,q),new Za(X,o);case"GeometryCollection":for(re=0,pe=u.geometries.length;re<pe;re++){var ve=no({geometry:u.geometries[re],type:"Feature",properties:a.properties},o);ve&&v.push(ve)}return new An(v);case"FeatureCollection":for(re=0,pe=u.features.length;re<pe;re++){var Se=no(u.features[re],o);Se&&v.push(Se)}return new An(v);default:throw new Error("Invalid GeoJSON object.")}}function rc(a,o,u,f){return a?a(o,u):new eo(u,f&&f.markersInheritOptions&&f)}function Ks(a){return new V(a[1],a[0],a[2])}function ao(a,o,u){for(var f=[],v=0,C=a.length,q;v<C;v++)q=o?ao(a[v],o-1,u):(u||Ks)(a[v]),f.push(q);return f}function Js(a,o){return a=ae(a),a.alt!==void 0?[h(a.lng,o),h(a.lat,o),h(a.alt,o)]:[h(a.lng,o),h(a.lat,o)]}function ro(a,o,u,f){for(var v=[],C=0,q=a.length;C<q;C++)v.push(o?ro(a[C],Zt(a[C])?0:o-1,u,f):Js(a[C],f));return!o&&u&&v.length>0&&v.push(v[0].slice()),v}function Wa(a,o){return a.feature?n({},a.feature,{geometry:o}):io(o)}function io(a){return a.type==="Feature"||a.type==="FeatureCollection"?a:{type:"Feature",properties:{},geometry:a}}var Xs={toGeoJSON:function(a){return Wa(this,{type:"Point",coordinates:Js(this.getLatLng(),a)})}};eo.include(Xs),Gs.include(Xs),to.include(Xs),Tn.include({toGeoJSON:function(a){var o=!Zt(this._latlngs),u=ro(this._latlngs,o?1:0,!1,a);return Wa(this,{type:(o?"Multi":"")+"LineString",coordinates:u})}}),Za.include({toGeoJSON:function(a){var o=!Zt(this._latlngs),u=o&&!Zt(this._latlngs[0]),f=ro(this._latlngs,u?2:o?1:0,!0,a);return o||(f=[f]),Wa(this,{type:(u?"Multi":"")+"Polygon",coordinates:f})}}),Fa.include({toMultiPoint:function(a){var o=[];return this.eachLayer(function(u){o.push(u.toGeoJSON(a).geometry.coordinates)}),Wa(this,{type:"MultiPoint",coordinates:o})},toGeoJSON:function(a){var o=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(o==="MultiPoint")return this.toMultiPoint(a);var u=o==="GeometryCollection",f=[];return this.eachLayer(function(v){if(v.toGeoJSON){var C=v.toGeoJSON(a);if(u)f.push(C.geometry);else{var q=io(C);q.type==="FeatureCollection"?f.push.apply(f,q.features):f.push(q)}}}),u?Wa(this,{geometries:f,type:"GeometryCollection"}):{type:"FeatureCollection",features:f}}});function ic(a,o){return new Pn(a,o)}var tg=ic,oo=an.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(a,o,u){this._url=a,this._bounds=ne(o),g(this,u)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(ke(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){Be(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(a){return this.options.opacity=a,this._image&&this._updateOpacity(),this},setStyle:function(a){return a.opacity&&this.setOpacity(a.opacity),this},bringToFront:function(){return this._map&&$a(this._image),this},bringToBack:function(){return this._map&&Ha(this._image),this},setUrl:function(a){return this._url=a,this._image&&(this._image.src=a),this},setBounds:function(a){return this._bounds=ne(a),this._map&&this._reset(),this},getEvents:function(){var a={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(a.zoomanim=this._animateZoom),a},setZIndex:function(a){return this.options.zIndex=a,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var a=this._url.tagName==="IMG",o=this._image=a?this._url:Pe("img");if(ke(o,"leaflet-image-layer"),this._zoomAnimated&&ke(o,"leaflet-zoom-animated"),this.options.className&&ke(o,this.options.className),o.onselectstart=p,o.onmousemove=p,o.onload=i(this.fire,this,"load"),o.onerror=i(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(o.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),a){this._url=o.src;return}o.src=this._url,o.alt=this.options.alt},_animateZoom:function(a){var o=this._map.getZoomScale(a.zoom),u=this._map._latLngBoundsToNewLayerBounds(this._bounds,a.zoom,a.center).min;ua(this._image,u,o)},_reset:function(){var a=this._image,o=new j(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),u=o.getSize();Xe(a,o.min),a.style.width=u.x+"px",a.style.height=u.y+"px"},_updateOpacity:function(){Vt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var a=this.options.errorOverlayUrl;a&&this._url!==a&&(this._url=a,this._image.src=a)},getCenter:function(){return this._bounds.getCenter()}}),ng=function(a,o,u){return new oo(a,o,u)},oc=oo.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var a=this._url.tagName==="VIDEO",o=this._image=a?this._url:Pe("video");if(ke(o,"leaflet-image-layer"),this._zoomAnimated&&ke(o,"leaflet-zoom-animated"),this.options.className&&ke(o,this.options.className),o.onselectstart=p,o.onmousemove=p,o.onloadeddata=i(this.fire,this,"load"),a){for(var u=o.getElementsByTagName("source"),f=[],v=0;v<u.length;v++)f.push(u[v].src);this._url=u.length>0?f:[o.src];return}P(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(o.style,"objectFit")&&(o.style.objectFit="fill"),o.autoplay=!!this.options.autoplay,o.loop=!!this.options.loop,o.muted=!!this.options.muted,o.playsInline=!!this.options.playsInline;for(var C=0;C<this._url.length;C++){var q=Pe("source");q.src=this._url[C],o.appendChild(q)}}});function ag(a,o,u){return new oc(a,o,u)}var sc=oo.extend({_initImage:function(){var a=this._image=this._url;ke(a,"leaflet-image-layer"),this._zoomAnimated&&ke(a,"leaflet-zoom-animated"),this.options.className&&ke(a,this.options.className),a.onselectstart=p,a.onmousemove=p}});function rg(a,o,u){return new sc(a,o,u)}var pn=an.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(a,o){a&&(a instanceof V||P(a))?(this._latlng=ae(a),g(this,o)):(g(this,a),this._source=o),this.options.content&&(this._content=this.options.content)},openOn:function(a){return a=arguments.length?a:this._source._map,a.hasLayer(this)||a.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(a){return this._map?this.close():(arguments.length?this._source=a:a=this._source,this._prepareOpen(),this.openOn(a._map)),this},onAdd:function(a){this._zoomAnimated=a._zoomAnimated,this._container||this._initLayout(),a._fadeAnimated&&Vt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),a._fadeAnimated&&Vt(this._container,1),this.bringToFront(),this.options.interactive&&(ke(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(a){a._fadeAnimated?(Vt(this._container,0),this._removeTimeout=setTimeout(i(Be,void 0,this._container),200)):Be(this._container),this.options.interactive&&(Ze(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(a){return this._latlng=ae(a),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(a){return this._content=a,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var a={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(a.zoomanim=this._animateZoom),a},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&$a(this._container),this},bringToBack:function(){return this._map&&Ha(this._container),this},_prepareOpen:function(a){var o=this._source;if(!o._map)return!1;if(o instanceof An){o=null;var u=this._source._layers;for(var f in u)if(u[f]._map){o=u[f];break}if(!o)return!1;this._source=o}if(!a)if(o.getCenter)a=o.getCenter();else if(o.getLatLng)a=o.getLatLng();else if(o.getBounds)a=o.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(a),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var a=this._contentNode,o=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof o=="string")a.innerHTML=o;else{for(;a.hasChildNodes();)a.removeChild(a.firstChild);a.appendChild(o)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var a=this._map.latLngToLayerPoint(this._latlng),o=N(this.options.offset),u=this._getAnchor();this._zoomAnimated?Xe(this._container,a.add(u)):o=o.add(a).add(u);var f=this._containerBottom=-o.y,v=this._containerLeft=-Math.round(this._containerWidth/2)+o.x;this._container.style.bottom=f+"px",this._container.style.left=v+"px"}},_getAnchor:function(){return[0,0]}});Te.include({_initOverlay:function(a,o,u,f){var v=o;return v instanceof a||(v=new a(f).setContent(o)),u&&v.setLatLng(u),v}}),an.include({_initOverlay:function(a,o,u,f){var v=u;return v instanceof a?(g(v,f),v._source=this):(v=o&&!f?o:new a(f,this),v.setContent(u)),v}});var so=pn.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(a){return a=arguments.length?a:this._source._map,!a.hasLayer(this)&&a._popup&&a._popup.options.autoClose&&a.removeLayer(a._popup),a._popup=this,pn.prototype.openOn.call(this,a)},onAdd:function(a){pn.prototype.onAdd.call(this,a),a.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Gn||this._source.on("preclick",ha))},onRemove:function(a){pn.prototype.onRemove.call(this,a),a.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Gn||this._source.off("preclick",ha))},getEvents:function(){var a=pn.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(a.preclick=this.close),this.options.keepInView&&(a.moveend=this._adjustPan),a},_initLayout:function(){var a="leaflet-popup",o=this._container=Pe("div",a+" "+(this.options.className||"")+" leaflet-zoom-animated"),u=this._wrapper=Pe("div",a+"-content-wrapper",o);if(this._contentNode=Pe("div",a+"-content",u),Ur(o),Us(this._contentNode),_e(o,"contextmenu",ha),this._tipContainer=Pe("div",a+"-tip-container",o),this._tip=Pe("div",a+"-tip",this._tipContainer),this.options.closeButton){var f=this._closeButton=Pe("a",a+"-close-button",o);f.setAttribute("role","button"),f.setAttribute("aria-label","Close popup"),f.href="#close",f.innerHTML='<span aria-hidden="true">&#215;</span>',_e(f,"click",function(v){ut(v),this.close()},this)}},_updateLayout:function(){var a=this._contentNode,o=a.style;o.width="",o.whiteSpace="nowrap";var u=a.offsetWidth;u=Math.min(u,this.options.maxWidth),u=Math.max(u,this.options.minWidth),o.width=u+1+"px",o.whiteSpace="",o.height="";var f=a.offsetHeight,v=this.options.maxHeight,C="leaflet-popup-scrolled";v&&f>v?(o.height=v+"px",ke(a,C)):Ze(a,C),this._containerWidth=this._container.offsetWidth},_animateZoom:function(a){var o=this._map._latLngToNewLayerPoint(this._latlng,a.zoom,a.center),u=this._getAnchor();Xe(this._container,o.add(u))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var a=this._map,o=parseInt(zr(this._container,"marginBottom"),10)||0,u=this._container.offsetHeight+o,f=this._containerWidth,v=new Y(this._containerLeft,-u-this._containerBottom);v._add(pa(this._container));var C=a.layerPointToContainerPoint(v),q=N(this.options.autoPanPadding),W=N(this.options.autoPanPaddingTopLeft||q),X=N(this.options.autoPanPaddingBottomRight||q),re=a.getSize(),pe=0,ve=0;C.x+f+X.x>re.x&&(pe=C.x+f-re.x+X.x),C.x-pe-W.x<0&&(pe=C.x-W.x),C.y+u+X.y>re.y&&(ve=C.y+u-re.y+X.y),C.y-ve-W.y<0&&(ve=C.y-W.y),(pe||ve)&&(this.options.keepInView&&(this._autopanning=!0),a.fire("autopanstart").panBy([pe,ve]))}},_getAnchor:function(){return N(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),ig=function(a,o){return new so(a,o)};Te.mergeOptions({closePopupOnClick:!0}),Te.include({openPopup:function(a,o,u){return this._initOverlay(so,a,o,u).openOn(this),this},closePopup:function(a){return a=arguments.length?a:this._popup,a&&a.close(),this}}),an.include({bindPopup:function(a,o){return this._popup=this._initOverlay(so,this._popup,a,o),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(a){return this._popup&&(this instanceof An||(this._popup._source=this),this._popup._prepareOpen(a||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(a){return this._popup&&this._popup.setContent(a),this},getPopup:function(){return this._popup},_openPopup:function(a){if(!(!this._popup||!this._map)){ma(a);var o=a.layer||a.target;if(this._popup._source===o&&!(o instanceof Gn)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(a.latlng);return}this._popup._source=o,this.openPopup(a.latlng)}},_movePopup:function(a){this._popup.setLatLng(a.latlng)},_onKeyPress:function(a){a.originalEvent.keyCode===13&&this._openPopup(a)}});var lo=pn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(a){pn.prototype.onAdd.call(this,a),this.setOpacity(this.options.opacity),a.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(a){pn.prototype.onRemove.call(this,a),a.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var a=pn.prototype.getEvents.call(this);return this.options.permanent||(a.preclick=this.close),a},_initLayout:function(){var a="leaflet-tooltip",o=a+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=Pe("div",o),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+l(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(a){var o,u,f=this._map,v=this._container,C=f.latLngToContainerPoint(f.getCenter()),q=f.layerPointToContainerPoint(a),W=this.options.direction,X=v.offsetWidth,re=v.offsetHeight,pe=N(this.options.offset),ve=this._getAnchor();W==="top"?(o=X/2,u=re):W==="bottom"?(o=X/2,u=0):W==="center"?(o=X/2,u=re/2):W==="right"?(o=0,u=re/2):W==="left"?(o=X,u=re/2):q.x<C.x?(W="right",o=0,u=re/2):(W="left",o=X+(pe.x+ve.x)*2,u=re/2),a=a.subtract(N(o,u,!0)).add(pe).add(ve),Ze(v,"leaflet-tooltip-right"),Ze(v,"leaflet-tooltip-left"),Ze(v,"leaflet-tooltip-top"),Ze(v,"leaflet-tooltip-bottom"),ke(v,"leaflet-tooltip-"+W),Xe(v,a)},_updatePosition:function(){var a=this._map.latLngToLayerPoint(this._latlng);this._setPosition(a)},setOpacity:function(a){this.options.opacity=a,this._container&&Vt(this._container,a)},_animateZoom:function(a){var o=this._map._latLngToNewLayerPoint(this._latlng,a.zoom,a.center);this._setPosition(o)},_getAnchor:function(){return N(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),og=function(a,o){return new lo(a,o)};Te.include({openTooltip:function(a,o,u){return this._initOverlay(lo,a,o,u).openOn(this),this},closeTooltip:function(a){return a.close(),this}}),an.include({bindTooltip:function(a,o){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(lo,this._tooltip,a,o),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(a){if(!(!a&&this._tooltipHandlersAdded)){var o=a?"off":"on",u={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?u.add=this._openTooltip:(u.mouseover=this._openTooltip,u.mouseout=this.closeTooltip,u.click=this._openTooltip,this._map?this._addFocusListeners():u.add=this._addFocusListeners),this._tooltip.options.sticky&&(u.mousemove=this._moveTooltip),this[o](u),this._tooltipHandlersAdded=!a}},openTooltip:function(a){return this._tooltip&&(this instanceof An||(this._tooltip._source=this),this._tooltip._prepareOpen(a)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(a){return this._tooltip&&this._tooltip.setContent(a),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(a){var o=typeof a.getElement=="function"&&a.getElement();o&&(_e(o,"focus",function(){this._tooltip._source=a,this.openTooltip()},this),_e(o,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(a){var o=typeof a.getElement=="function"&&a.getElement();o&&o.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(a){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var o=this;this._map.once("moveend",function(){o._openOnceFlag=!1,o._openTooltip(a)});return}this._tooltip._source=a.layer||a.target,this.openTooltip(this._tooltip.options.sticky?a.latlng:void 0)}},_moveTooltip:function(a){var o=a.latlng,u,f;this._tooltip.options.sticky&&a.originalEvent&&(u=this._map.mouseEventToContainerPoint(a.originalEvent),f=this._map.containerPointToLayerPoint(u),o=this._map.layerPointToLatLng(f)),this._tooltip.setLatLng(o)}});var lc=Va.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(a){var o=a&&a.tagName==="DIV"?a:document.createElement("div"),u=this.options;if(u.html instanceof Element?(Gi(o),o.appendChild(u.html)):o.innerHTML=u.html!==!1?u.html:"",u.bgPos){var f=N(u.bgPos);o.style.backgroundPosition=-f.x+"px "+-f.y+"px"}return this._setIconStyles(o,"icon"),o},createShadow:function(){return null}});function sg(a){return new lc(a)}Va.Default=Hr;var Fr=an.extend({options:{tileSize:256,opacity:1,updateWhenIdle:fe.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(a){g(this,a)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(a){a._addZoomLimit(this)},onRemove:function(a){this._removeAllTiles(),Be(this._container),a._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&($a(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Ha(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(a){return this.options.opacity=a,this._updateOpacity(),this},setZIndex:function(a){return this.options.zIndex=a,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var a=this._clampZoom(this._map.getZoom());a!==this._tileZoom&&(this._tileZoom=a,this._updateLevels()),this._update()}return this},getEvents:function(){var a={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=c(this._onMoveEnd,this.options.updateInterval,this)),a.move=this._onMove),this._zoomAnimated&&(a.zoomanim=this._animateZoom),a},createTile:function(){return document.createElement("div")},getTileSize:function(){var a=this.options.tileSize;return a instanceof Y?a:new Y(a,a)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(a){for(var o=this.getPane().children,u=-a(-1/0,1/0),f=0,v=o.length,C;f<v;f++)C=o[f].style.zIndex,o[f]!==this._container&&C&&(u=a(u,+C));isFinite(u)&&(this.options.zIndex=u+a(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!fe.ielt9){Vt(this._container,this.options.opacity);var a=+new Date,o=!1,u=!1;for(var f in this._tiles){var v=this._tiles[f];if(!(!v.current||!v.loaded)){var C=Math.min(1,(a-v.loaded)/200);Vt(v.el,C),C<1?o=!0:(v.active?u=!0:this._onOpaqueTile(v),v.active=!0)}}u&&!this._noPrune&&this._pruneTiles(),o&&(O(this._fadeFrame),this._fadeFrame=T(this._updateOpacity,this))}},_onOpaqueTile:p,_initContainer:function(){this._container||(this._container=Pe("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var a=this._tileZoom,o=this.options.maxZoom;if(a!==void 0){for(var u in this._levels)u=Number(u),this._levels[u].el.children.length||u===a?(this._levels[u].el.style.zIndex=o-Math.abs(a-u),this._onUpdateLevel(u)):(Be(this._levels[u].el),this._removeTilesAtZoom(u),this._onRemoveLevel(u),delete this._levels[u]);var f=this._levels[a],v=this._map;return f||(f=this._levels[a]={},f.el=Pe("div","leaflet-tile-container leaflet-zoom-animated",this._container),f.el.style.zIndex=o,f.origin=v.project(v.unproject(v.getPixelOrigin()),a).round(),f.zoom=a,this._setZoomTransform(f,v.getCenter(),v.getZoom()),p(f.el.offsetWidth),this._onCreateLevel(f)),this._level=f,f}},_onUpdateLevel:p,_onRemoveLevel:p,_onCreateLevel:p,_pruneTiles:function(){if(this._map){var a,o,u=this._map.getZoom();if(u>this.options.maxZoom||u<this.options.minZoom){this._removeAllTiles();return}for(a in this._tiles)o=this._tiles[a],o.retain=o.current;for(a in this._tiles)if(o=this._tiles[a],o.current&&!o.active){var f=o.coords;this._retainParent(f.x,f.y,f.z,f.z-5)||this._retainChildren(f.x,f.y,f.z,f.z+2)}for(a in this._tiles)this._tiles[a].retain||this._removeTile(a)}},_removeTilesAtZoom:function(a){for(var o in this._tiles)this._tiles[o].coords.z===a&&this._removeTile(o)},_removeAllTiles:function(){for(var a in this._tiles)this._removeTile(a)},_invalidateAll:function(){for(var a in this._levels)Be(this._levels[a].el),this._onRemoveLevel(Number(a)),delete this._levels[a];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(a,o,u,f){var v=Math.floor(a/2),C=Math.floor(o/2),q=u-1,W=new Y(+v,+C);W.z=+q;var X=this._tileCoordsToKey(W),re=this._tiles[X];return re&&re.active?(re.retain=!0,!0):(re&&re.loaded&&(re.retain=!0),q>f?this._retainParent(v,C,q,f):!1)},_retainChildren:function(a,o,u,f){for(var v=2*a;v<2*a+2;v++)for(var C=2*o;C<2*o+2;C++){var q=new Y(v,C);q.z=u+1;var W=this._tileCoordsToKey(q),X=this._tiles[W];if(X&&X.active){X.retain=!0;continue}else X&&X.loaded&&(X.retain=!0);u+1<f&&this._retainChildren(v,C,u+1,f)}},_resetView:function(a){var o=a&&(a.pinch||a.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),o,o)},_animateZoom:function(a){this._setView(a.center,a.zoom,!0,a.noUpdate)},_clampZoom:function(a){var o=this.options;return o.minNativeZoom!==void 0&&a<o.minNativeZoom?o.minNativeZoom:o.maxNativeZoom!==void 0&&o.maxNativeZoom<a?o.maxNativeZoom:a},_setView:function(a,o,u,f){var v=Math.round(o);this.options.maxZoom!==void 0&&v>this.options.maxZoom||this.options.minZoom!==void 0&&v<this.options.minZoom?v=void 0:v=this._clampZoom(v);var C=this.options.updateWhenZooming&&v!==this._tileZoom;(!f||C)&&(this._tileZoom=v,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),v!==void 0&&this._update(a),u||this._pruneTiles(),this._noPrune=!!u),this._setZoomTransforms(a,o)},_setZoomTransforms:function(a,o){for(var u in this._levels)this._setZoomTransform(this._levels[u],a,o)},_setZoomTransform:function(a,o,u){var f=this._map.getZoomScale(u,a.zoom),v=a.origin.multiplyBy(f).subtract(this._map._getNewPixelOrigin(o,u)).round();fe.any3d?ua(a.el,v,f):Xe(a.el,v)},_resetGrid:function(){var a=this._map,o=a.options.crs,u=this._tileSize=this.getTileSize(),f=this._tileZoom,v=this._map.getPixelWorldBounds(this._tileZoom);v&&(this._globalTileRange=this._pxBoundsToTileRange(v)),this._wrapX=o.wrapLng&&!this.options.noWrap&&[Math.floor(a.project([0,o.wrapLng[0]],f).x/u.x),Math.ceil(a.project([0,o.wrapLng[1]],f).x/u.y)],this._wrapY=o.wrapLat&&!this.options.noWrap&&[Math.floor(a.project([o.wrapLat[0],0],f).y/u.x),Math.ceil(a.project([o.wrapLat[1],0],f).y/u.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(a){var o=this._map,u=o._animatingZoom?Math.max(o._animateToZoom,o.getZoom()):o.getZoom(),f=o.getZoomScale(u,this._tileZoom),v=o.project(a,this._tileZoom).floor(),C=o.getSize().divideBy(f*2);return new j(v.subtract(C),v.add(C))},_update:function(a){var o=this._map;if(o){var u=this._clampZoom(o.getZoom());if(a===void 0&&(a=o.getCenter()),this._tileZoom!==void 0){var f=this._getTiledPixelBounds(a),v=this._pxBoundsToTileRange(f),C=v.getCenter(),q=[],W=this.options.keepBuffer,X=new j(v.getBottomLeft().subtract([W,-W]),v.getTopRight().add([W,-W]));if(!(isFinite(v.min.x)&&isFinite(v.min.y)&&isFinite(v.max.x)&&isFinite(v.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var re in this._tiles){var pe=this._tiles[re].coords;(pe.z!==this._tileZoom||!X.contains(new Y(pe.x,pe.y)))&&(this._tiles[re].current=!1)}if(Math.abs(u-this._tileZoom)>1){this._setView(a,u);return}for(var ve=v.min.y;ve<=v.max.y;ve++)for(var Se=v.min.x;Se<=v.max.x;Se++){var wt=new Y(Se,ve);if(wt.z=this._tileZoom,!!this._isValidTile(wt)){var st=this._tiles[this._tileCoordsToKey(wt)];st?st.current=!0:q.push(wt)}}if(q.sort(function(Pt,Ka){return Pt.distanceTo(C)-Ka.distanceTo(C)}),q.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var Wt=document.createDocumentFragment();for(Se=0;Se<q.length;Se++)this._addTile(q[Se],Wt);this._level.el.appendChild(Wt)}}}},_isValidTile:function(a){var o=this._map.options.crs;if(!o.infinite){var u=this._globalTileRange;if(!o.wrapLng&&(a.x<u.min.x||a.x>u.max.x)||!o.wrapLat&&(a.y<u.min.y||a.y>u.max.y))return!1}if(!this.options.bounds)return!0;var f=this._tileCoordsToBounds(a);return ne(this.options.bounds).overlaps(f)},_keyToBounds:function(a){return this._tileCoordsToBounds(this._keyToTileCoords(a))},_tileCoordsToNwSe:function(a){var o=this._map,u=this.getTileSize(),f=a.scaleBy(u),v=f.add(u),C=o.unproject(f,a.z),q=o.unproject(v,a.z);return[C,q]},_tileCoordsToBounds:function(a){var o=this._tileCoordsToNwSe(a),u=new Z(o[0],o[1]);return this.options.noWrap||(u=this._map.wrapLatLngBounds(u)),u},_tileCoordsToKey:function(a){return a.x+":"+a.y+":"+a.z},_keyToTileCoords:function(a){var o=a.split(":"),u=new Y(+o[0],+o[1]);return u.z=+o[2],u},_removeTile:function(a){var o=this._tiles[a];o&&(Be(o.el),delete this._tiles[a],this.fire("tileunload",{tile:o.el,coords:this._keyToTileCoords(a)}))},_initTile:function(a){ke(a,"leaflet-tile");var o=this.getTileSize();a.style.width=o.x+"px",a.style.height=o.y+"px",a.onselectstart=p,a.onmousemove=p,fe.ielt9&&this.options.opacity<1&&Vt(a,this.options.opacity)},_addTile:function(a,o){var u=this._getTilePos(a),f=this._tileCoordsToKey(a),v=this.createTile(this._wrapCoords(a),i(this._tileReady,this,a));this._initTile(v),this.createTile.length<2&&T(i(this._tileReady,this,a,null,v)),Xe(v,u),this._tiles[f]={el:v,coords:a,current:!0},o.appendChild(v),this.fire("tileloadstart",{tile:v,coords:a})},_tileReady:function(a,o,u){o&&this.fire("tileerror",{error:o,tile:u,coords:a});var f=this._tileCoordsToKey(a);u=this._tiles[f],u&&(u.loaded=+new Date,this._map._fadeAnimated?(Vt(u.el,0),O(this._fadeFrame),this._fadeFrame=T(this._updateOpacity,this)):(u.active=!0,this._pruneTiles()),o||(ke(u.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:u.el,coords:a})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),fe.ielt9||!this._map._fadeAnimated?T(this._pruneTiles,this):setTimeout(i(this._pruneTiles,this),250)))},_getTilePos:function(a){return a.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(a){var o=new Y(this._wrapX?d(a.x,this._wrapX):a.x,this._wrapY?d(a.y,this._wrapY):a.y);return o.z=a.z,o},_pxBoundsToTileRange:function(a){var o=this.getTileSize();return new j(a.min.unscaleBy(o).floor(),a.max.unscaleBy(o).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var a in this._tiles)if(!this._tiles[a].loaded)return!1;return!0}});function lg(a){return new Fr(a)}var Ga=Fr.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(a,o){this._url=a,o=g(this,o),o.detectRetina&&fe.retina&&o.maxZoom>0?(o.tileSize=Math.floor(o.tileSize/2),o.zoomReverse?(o.zoomOffset--,o.minZoom=Math.min(o.maxZoom,o.minZoom+1)):(o.zoomOffset++,o.maxZoom=Math.max(o.minZoom,o.maxZoom-1)),o.minZoom=Math.max(0,o.minZoom)):o.zoomReverse?o.minZoom=Math.min(o.maxZoom,o.minZoom):o.maxZoom=Math.max(o.minZoom,o.maxZoom),typeof o.subdomains=="string"&&(o.subdomains=o.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(a,o){return this._url===a&&o===void 0&&(o=!0),this._url=a,o||this.redraw(),this},createTile:function(a,o){var u=document.createElement("img");return _e(u,"load",i(this._tileOnLoad,this,o,u)),_e(u,"error",i(this._tileOnError,this,o,u)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(u.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(u.referrerPolicy=this.options.referrerPolicy),u.alt="",u.src=this.getTileUrl(a),u},getTileUrl:function(a){var o={r:fe.retina?"@2x":"",s:this._getSubdomain(a),x:a.x,y:a.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var u=this._globalTileRange.max.y-a.y;this.options.tms&&(o.y=u),o["-y"]=u}return x(this._url,n(o,this.options))},_tileOnLoad:function(a,o){fe.ielt9?setTimeout(i(a,this,null,o),0):a(null,o)},_tileOnError:function(a,o,u){var f=this.options.errorTileUrl;f&&o.getAttribute("src")!==f&&(o.src=f),a(u,o)},_onTileRemove:function(a){a.tile.onload=null},_getZoomForUrl:function(){var a=this._tileZoom,o=this.options.maxZoom,u=this.options.zoomReverse,f=this.options.zoomOffset;return u&&(a=o-a),a+f},_getSubdomain:function(a){var o=Math.abs(a.x+a.y)%this.options.subdomains.length;return this.options.subdomains[o]},_abortLoading:function(){var a,o;for(a in this._tiles)if(this._tiles[a].coords.z!==this._tileZoom&&(o=this._tiles[a].el,o.onload=p,o.onerror=p,!o.complete)){o.src=k;var u=this._tiles[a].coords;Be(o),delete this._tiles[a],this.fire("tileabort",{tile:o,coords:u})}},_removeTile:function(a){var o=this._tiles[a];if(o)return o.el.setAttribute("src",k),Fr.prototype._removeTile.call(this,a)},_tileReady:function(a,o,u){if(!(!this._map||u&&u.getAttribute("src")===k))return Fr.prototype._tileReady.call(this,a,o,u)}});function dc(a,o){return new Ga(a,o)}var cc=Ga.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(a,o){this._url=a;var u=n({},this.defaultWmsParams);for(var f in o)f in this.options||(u[f]=o[f]);o=g(this,o);var v=o.detectRetina&&fe.retina?2:1,C=this.getTileSize();u.width=C.x*v,u.height=C.y*v,this.wmsParams=u},onAdd:function(a){this._crs=this.options.crs||a.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var o=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[o]=this._crs.code,Ga.prototype.onAdd.call(this,a)},getTileUrl:function(a){var o=this._tileCoordsToNwSe(a),u=this._crs,f=ee(u.project(o[0]),u.project(o[1])),v=f.min,C=f.max,q=(this._wmsVersion>=1.3&&this._crs===nc?[v.y,v.x,C.y,C.x]:[v.x,v.y,C.x,C.y]).join(","),W=Ga.prototype.getTileUrl.call(this,a);return W+y(this.wmsParams,W,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+q},setParams:function(a,o){return n(this.wmsParams,a),o||this.redraw(),this}});function dg(a,o){return new cc(a,o)}Ga.WMS=cc,dc.wms=dg;var Cn=an.extend({options:{padding:.1},initialize:function(a){g(this,a),l(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),ke(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var a={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(a.zoomanim=this._onAnimZoom),a},_onAnimZoom:function(a){this._updateTransform(a.center,a.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(a,o){var u=this._map.getZoomScale(o,this._zoom),f=this._map.getSize().multiplyBy(.5+this.options.padding),v=this._map.project(this._center,o),C=f.multiplyBy(-u).add(v).subtract(this._map._getNewPixelOrigin(a,o));fe.any3d?ua(this._container,C,u):Xe(this._container,C)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var a in this._layers)this._layers[a]._reset()},_onZoomEnd:function(){for(var a in this._layers)this._layers[a]._project()},_updatePaths:function(){for(var a in this._layers)this._layers[a]._update()},_update:function(){var a=this.options.padding,o=this._map.getSize(),u=this._map.containerPointToLayerPoint(o.multiplyBy(-a)).round();this._bounds=new j(u,u.add(o.multiplyBy(1+a*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),uc=Cn.extend({options:{tolerance:0},getEvents:function(){var a=Cn.prototype.getEvents.call(this);return a.viewprereset=this._onViewPreReset,a},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Cn.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var a=this._container=document.createElement("canvas");_e(a,"mousemove",this._onMouseMove,this),_e(a,"click dblclick mousedown mouseup contextmenu",this._onClick,this),_e(a,"mouseout",this._handleMouseOut,this),a._leaflet_disable_events=!0,this._ctx=a.getContext("2d")},_destroyContainer:function(){O(this._redrawRequest),delete this._ctx,Be(this._container),Me(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var a;this._redrawBounds=null;for(var o in this._layers)a=this._layers[o],a._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Cn.prototype._update.call(this);var a=this._bounds,o=this._container,u=a.getSize(),f=fe.retina?2:1;Xe(o,a.min),o.width=f*u.x,o.height=f*u.y,o.style.width=u.x+"px",o.style.height=u.y+"px",fe.retina&&this._ctx.scale(2,2),this._ctx.translate(-a.min.x,-a.min.y),this.fire("update")}},_reset:function(){Cn.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(a){this._updateDashArray(a),this._layers[l(a)]=a;var o=a._order={layer:a,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=o),this._drawLast=o,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(a){this._requestRedraw(a)},_removePath:function(a){var o=a._order,u=o.next,f=o.prev;u?u.prev=f:this._drawLast=f,f?f.next=u:this._drawFirst=u,delete a._order,delete this._layers[l(a)],this._requestRedraw(a)},_updatePath:function(a){this._extendRedrawBounds(a),a._project(),a._update(),this._requestRedraw(a)},_updateStyle:function(a){this._updateDashArray(a),this._requestRedraw(a)},_updateDashArray:function(a){if(typeof a.options.dashArray=="string"){var o=a.options.dashArray.split(/[, ]+/),u=[],f,v;for(v=0;v<o.length;v++){if(f=Number(o[v]),isNaN(f))return;u.push(f)}a.options._dashArray=u}else a.options._dashArray=a.options.dashArray},_requestRedraw:function(a){this._map&&(this._extendRedrawBounds(a),this._redrawRequest=this._redrawRequest||T(this._redraw,this))},_extendRedrawBounds:function(a){if(a._pxBounds){var o=(a.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new j,this._redrawBounds.extend(a._pxBounds.min.subtract([o,o])),this._redrawBounds.extend(a._pxBounds.max.add([o,o]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var a=this._redrawBounds;if(a){var o=a.getSize();this._ctx.clearRect(a.min.x,a.min.y,o.x,o.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var a,o=this._redrawBounds;if(this._ctx.save(),o){var u=o.getSize();this._ctx.beginPath(),this._ctx.rect(o.min.x,o.min.y,u.x,u.y),this._ctx.clip()}this._drawing=!0;for(var f=this._drawFirst;f;f=f.next)a=f.layer,(!o||a._pxBounds&&a._pxBounds.intersects(o))&&a._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(a,o){if(this._drawing){var u,f,v,C,q=a._parts,W=q.length,X=this._ctx;if(W){for(X.beginPath(),u=0;u<W;u++){for(f=0,v=q[u].length;f<v;f++)C=q[u][f],X[f?"lineTo":"moveTo"](C.x,C.y);o&&X.closePath()}this._fillStroke(X,a)}}},_updateCircle:function(a){if(!(!this._drawing||a._empty())){var o=a._point,u=this._ctx,f=Math.max(Math.round(a._radius),1),v=(Math.max(Math.round(a._radiusY),1)||f)/f;v!==1&&(u.save(),u.scale(1,v)),u.beginPath(),u.arc(o.x,o.y/v,f,0,Math.PI*2,!1),v!==1&&u.restore(),this._fillStroke(u,a)}},_fillStroke:function(a,o){var u=o.options;u.fill&&(a.globalAlpha=u.fillOpacity,a.fillStyle=u.fillColor||u.color,a.fill(u.fillRule||"evenodd")),u.stroke&&u.weight!==0&&(a.setLineDash&&a.setLineDash(o.options&&o.options._dashArray||[]),a.globalAlpha=u.opacity,a.lineWidth=u.weight,a.strokeStyle=u.color,a.lineCap=u.lineCap,a.lineJoin=u.lineJoin,a.stroke())},_onClick:function(a){for(var o=this._map.mouseEventToLayerPoint(a),u,f,v=this._drawFirst;v;v=v.next)u=v.layer,u.options.interactive&&u._containsPoint(o)&&(!(a.type==="click"||a.type==="preclick")||!this._map._draggableMoved(u))&&(f=u);this._fireEvent(f?[f]:!1,a)},_onMouseMove:function(a){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var o=this._map.mouseEventToLayerPoint(a);this._handleMouseHover(a,o)}},_handleMouseOut:function(a){var o=this._hoveredLayer;o&&(Ze(this._container,"leaflet-interactive"),this._fireEvent([o],a,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(a,o){if(!this._mouseHoverThrottled){for(var u,f,v=this._drawFirst;v;v=v.next)u=v.layer,u.options.interactive&&u._containsPoint(o)&&(f=u);f!==this._hoveredLayer&&(this._handleMouseOut(a),f&&(ke(this._container,"leaflet-interactive"),this._fireEvent([f],a,"mouseover"),this._hoveredLayer=f)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,a),this._mouseHoverThrottled=!0,setTimeout(i(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(a,o,u){this._map._fireDOMEvent(o,u||o.type,a)},_bringToFront:function(a){var o=a._order;if(o){var u=o.next,f=o.prev;if(u)u.prev=f;else return;f?f.next=u:u&&(this._drawFirst=u),o.prev=this._drawLast,this._drawLast.next=o,o.next=null,this._drawLast=o,this._requestRedraw(a)}},_bringToBack:function(a){var o=a._order;if(o){var u=o.next,f=o.prev;if(f)f.next=u;else return;u?u.prev=f:f&&(this._drawLast=f),o.prev=null,o.next=this._drawFirst,this._drawFirst.prev=o,this._drawFirst=o,this._requestRedraw(a)}}});function pc(a){return fe.canvas?new uc(a):null}var Vr=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(a){return document.createElement("<lvml:"+a+' class="lvml">')}}catch(a){}return function(a){return document.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),cg={_initContainer:function(){this._container=Pe("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Cn.prototype._update.call(this),this.fire("update"))},_initPath:function(a){var o=a._container=Vr("shape");ke(o,"leaflet-vml-shape "+(this.options.className||"")),o.coordsize="1 1",a._path=Vr("path"),o.appendChild(a._path),this._updateStyle(a),this._layers[l(a)]=a},_addPath:function(a){var o=a._container;this._container.appendChild(o),a.options.interactive&&a.addInteractiveTarget(o)},_removePath:function(a){var o=a._container;Be(o),a.removeInteractiveTarget(o),delete this._layers[l(a)]},_updateStyle:function(a){var o=a._stroke,u=a._fill,f=a.options,v=a._container;v.stroked=!!f.stroke,v.filled=!!f.fill,f.stroke?(o||(o=a._stroke=Vr("stroke")),v.appendChild(o),o.weight=f.weight+"px",o.color=f.color,o.opacity=f.opacity,f.dashArray?o.dashStyle=P(f.dashArray)?f.dashArray.join(" "):f.dashArray.replace(/( *, *)/g," "):o.dashStyle="",o.endcap=f.lineCap.replace("butt","flat"),o.joinstyle=f.lineJoin):o&&(v.removeChild(o),a._stroke=null),f.fill?(u||(u=a._fill=Vr("fill")),v.appendChild(u),u.color=f.fillColor||f.color,u.opacity=f.fillOpacity):u&&(v.removeChild(u),a._fill=null)},_updateCircle:function(a){var o=a._point.round(),u=Math.round(a._radius),f=Math.round(a._radiusY||u);this._setPath(a,a._empty()?"M0 0":"AL "+o.x+","+o.y+" "+u+","+f+" 0,"+65535*360)},_setPath:function(a,o){a._path.v=o},_bringToFront:function(a){$a(a._container)},_bringToBack:function(a){Ha(a._container)}},co=fe.vml?Vr:et,Zr=Cn.extend({_initContainer:function(){this._container=co("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=co("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){Be(this._container),Me(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Cn.prototype._update.call(this);var a=this._bounds,o=a.getSize(),u=this._container;(!this._svgSize||!this._svgSize.equals(o))&&(this._svgSize=o,u.setAttribute("width",o.x),u.setAttribute("height",o.y)),Xe(u,a.min),u.setAttribute("viewBox",[a.min.x,a.min.y,o.x,o.y].join(" ")),this.fire("update")}},_initPath:function(a){var o=a._path=co("path");a.options.className&&ke(o,a.options.className),a.options.interactive&&ke(o,"leaflet-interactive"),this._updateStyle(a),this._layers[l(a)]=a},_addPath:function(a){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(a._path),a.addInteractiveTarget(a._path)},_removePath:function(a){Be(a._path),a.removeInteractiveTarget(a._path),delete this._layers[l(a)]},_updatePath:function(a){a._project(),a._update()},_updateStyle:function(a){var o=a._path,u=a.options;o&&(u.stroke?(o.setAttribute("stroke",u.color),o.setAttribute("stroke-opacity",u.opacity),o.setAttribute("stroke-width",u.weight),o.setAttribute("stroke-linecap",u.lineCap),o.setAttribute("stroke-linejoin",u.lineJoin),u.dashArray?o.setAttribute("stroke-dasharray",u.dashArray):o.removeAttribute("stroke-dasharray"),u.dashOffset?o.setAttribute("stroke-dashoffset",u.dashOffset):o.removeAttribute("stroke-dashoffset")):o.setAttribute("stroke","none"),u.fill?(o.setAttribute("fill",u.fillColor||u.color),o.setAttribute("fill-opacity",u.fillOpacity),o.setAttribute("fill-rule",u.fillRule||"evenodd")):o.setAttribute("fill","none"))},_updatePoly:function(a,o){this._setPath(a,ct(a._parts,o))},_updateCircle:function(a){var o=a._point,u=Math.max(Math.round(a._radius),1),f=Math.max(Math.round(a._radiusY),1)||u,v="a"+u+","+f+" 0 1,0 ",C=a._empty()?"M0 0":"M"+(o.x-u)+","+o.y+v+u*2+",0 "+v+-u*2+",0 ";this._setPath(a,C)},_setPath:function(a,o){a._path.setAttribute("d",o)},_bringToFront:function(a){$a(a._path)},_bringToBack:function(a){Ha(a._path)}});fe.vml&&Zr.include(cg);function hc(a){return fe.svg||fe.vml?new Zr(a):null}Te.include({getRenderer:function(a){var o=a.options.renderer||this._getPaneRenderer(a.options.pane)||this.options.renderer||this._renderer;return o||(o=this._renderer=this._createRenderer()),this.hasLayer(o)||this.addLayer(o),o},_getPaneRenderer:function(a){if(a==="overlayPane"||a===void 0)return!1;var o=this._paneRenderers[a];return o===void 0&&(o=this._createRenderer({pane:a}),this._paneRenderers[a]=o),o},_createRenderer:function(a){return this.options.preferCanvas&&pc(a)||hc(a)}});var mc=Za.extend({initialize:function(a,o){Za.prototype.initialize.call(this,this._boundsToLatLngs(a),o)},setBounds:function(a){return this.setLatLngs(this._boundsToLatLngs(a))},_boundsToLatLngs:function(a){return a=ne(a),[a.getSouthWest(),a.getNorthWest(),a.getNorthEast(),a.getSouthEast()]}});function ug(a,o){return new mc(a,o)}Zr.create=co,Zr.pointsToPath=ct,Pn.geometryToLayer=no,Pn.coordsToLatLng=Ks,Pn.coordsToLatLngs=ao,Pn.latLngToCoords=Js,Pn.latLngsToCoords=ro,Pn.getFeature=Wa,Pn.asFeature=io,Te.mergeOptions({boxZoom:!0});var fc=un.extend({initialize:function(a){this._map=a,this._container=a._container,this._pane=a._panes.overlayPane,this._resetStateTimeout=0,a.on("unload",this._destroy,this)},addHooks:function(){_e(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Me(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){Be(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(a){if(!a.shiftKey||a.which!==1&&a.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Nr(),Os(),this._startPoint=this._map.mouseEventToContainerPoint(a),_e(document,{contextmenu:ma,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(a){this._moved||(this._moved=!0,this._box=Pe("div","leaflet-zoom-box",this._container),ke(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(a);var o=new j(this._point,this._startPoint),u=o.getSize();Xe(this._box,o.min),this._box.style.width=u.x+"px",this._box.style.height=u.y+"px"},_finish:function(){this._moved&&(Be(this._box),Ze(this._container,"leaflet-crosshair")),jr(),Rs(),Me(document,{contextmenu:ma,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(a){if(!(a.which!==1&&a.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(i(this._resetState,this),0);var o=new Z(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(o).fire("boxzoomend",{boxZoomBounds:o})}},_onKeyDown:function(a){a.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});Te.addInitHook("addHandler","boxZoom",fc),Te.mergeOptions({doubleClickZoom:!0});var gc=un.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(a){var o=this._map,u=o.getZoom(),f=o.options.zoomDelta,v=a.originalEvent.shiftKey?u-f:u+f;o.options.doubleClickZoom==="center"?o.setZoom(v):o.setZoomAround(a.containerPoint,v)}});Te.addInitHook("addHandler","doubleClickZoom",gc),Te.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var bc=un.extend({addHooks:function(){if(!this._draggable){var a=this._map;this._draggable=new Wn(a._mapPane,a._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),a.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),a.on("zoomend",this._onZoomEnd,this),a.whenReady(this._onZoomEnd,this))}ke(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Ze(this._map._container,"leaflet-grab"),Ze(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var a=this._map;if(a._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var o=ne(this._map.options.maxBounds);this._offsetLimit=ee(this._map.latLngToContainerPoint(o.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(o.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;a.fire("movestart").fire("dragstart"),a.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(a){if(this._map.options.inertia){var o=this._lastTime=+new Date,u=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(u),this._times.push(o),this._prunePositions(o)}this._map.fire("move",a).fire("drag",a)},_prunePositions:function(a){for(;this._positions.length>1&&a-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var a=this._map.getSize().divideBy(2),o=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=o.subtract(a).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(a,o){return a-(a-o)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var a=this._draggable._newPos.subtract(this._draggable._startPos),o=this._offsetLimit;a.x<o.min.x&&(a.x=this._viscousLimit(a.x,o.min.x)),a.y<o.min.y&&(a.y=this._viscousLimit(a.y,o.min.y)),a.x>o.max.x&&(a.x=this._viscousLimit(a.x,o.max.x)),a.y>o.max.y&&(a.y=this._viscousLimit(a.y,o.max.y)),this._draggable._newPos=this._draggable._startPos.add(a)}},_onPreDragWrap:function(){var a=this._worldWidth,o=Math.round(a/2),u=this._initialWorldOffset,f=this._draggable._newPos.x,v=(f-o+u)%a+o-u,C=(f+o+u)%a-o-u,q=Math.abs(v+u)<Math.abs(C+u)?v:C;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=q},_onDragEnd:function(a){var o=this._map,u=o.options,f=!u.inertia||a.noInertia||this._times.length<2;if(o.fire("dragend",a),f)o.fire("moveend");else{this._prunePositions(+new Date);var v=this._lastPos.subtract(this._positions[0]),C=(this._lastTime-this._times[0])/1e3,q=u.easeLinearity,W=v.multiplyBy(q/C),X=W.distanceTo([0,0]),re=Math.min(u.inertiaMaxSpeed,X),pe=W.multiplyBy(re/X),ve=re/(u.inertiaDeceleration*q),Se=pe.multiplyBy(-ve/2).round();!Se.x&&!Se.y?o.fire("moveend"):(Se=o._limitOffset(Se,o.options.maxBounds),T(function(){o.panBy(Se,{duration:ve,easeLinearity:q,noMoveStart:!0,animate:!0})}))}}});Te.addInitHook("addHandler","dragging",bc),Te.mergeOptions({keyboard:!0,keyboardPanDelta:80});var yc=un.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(a){this._map=a,this._setPanDelta(a.options.keyboardPanDelta),this._setZoomDelta(a.options.zoomDelta)},addHooks:function(){var a=this._map._container;a.tabIndex<=0&&(a.tabIndex="0"),_e(a,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Me(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var a=document.body,o=document.documentElement,u=a.scrollTop||o.scrollTop,f=a.scrollLeft||o.scrollLeft;this._map._container.focus(),window.scrollTo(f,u)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(a){var o=this._panKeys={},u=this.keyCodes,f,v;for(f=0,v=u.left.length;f<v;f++)o[u.left[f]]=[-1*a,0];for(f=0,v=u.right.length;f<v;f++)o[u.right[f]]=[a,0];for(f=0,v=u.down.length;f<v;f++)o[u.down[f]]=[0,a];for(f=0,v=u.up.length;f<v;f++)o[u.up[f]]=[0,-1*a]},_setZoomDelta:function(a){var o=this._zoomKeys={},u=this.keyCodes,f,v;for(f=0,v=u.zoomIn.length;f<v;f++)o[u.zoomIn[f]]=a;for(f=0,v=u.zoomOut.length;f<v;f++)o[u.zoomOut[f]]=-a},_addHooks:function(){_e(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Me(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(a){if(!(a.altKey||a.ctrlKey||a.metaKey)){var o=a.keyCode,u=this._map,f;if(o in this._panKeys){if(!u._panAnim||!u._panAnim._inProgress)if(f=this._panKeys[o],a.shiftKey&&(f=N(f).multiplyBy(3)),u.options.maxBounds&&(f=u._limitOffset(N(f),u.options.maxBounds)),u.options.worldCopyJump){var v=u.wrapLatLng(u.unproject(u.project(u.getCenter()).add(f)));u.panTo(v)}else u.panBy(f)}else if(o in this._zoomKeys)u.setZoom(u.getZoom()+(a.shiftKey?3:1)*this._zoomKeys[o]);else if(o===27&&u._popup&&u._popup.options.closeOnEscapeKey)u.closePopup();else return;ma(a)}}});Te.addInitHook("addHandler","keyboard",yc),Te.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var vc=un.extend({addHooks:function(){_e(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Me(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(a){var o=Hd(a),u=this._map.options.wheelDebounceTime;this._delta+=o,this._lastMousePos=this._map.mouseEventToContainerPoint(a),this._startTime||(this._startTime=+new Date);var f=Math.max(u-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(i(this._performZoom,this),f),ma(a)},_performZoom:function(){var a=this._map,o=a.getZoom(),u=this._map.options.zoomSnap||0;a._stop();var f=this._delta/(this._map.options.wheelPxPerZoomLevel*4),v=4*Math.log(2/(1+Math.exp(-Math.abs(f))))/Math.LN2,C=u?Math.ceil(v/u)*u:v,q=a._limitZoom(o+(this._delta>0?C:-C))-o;this._delta=0,this._startTime=null,q&&(a.options.scrollWheelZoom==="center"?a.setZoom(o+q):a.setZoomAround(this._lastMousePos,o+q))}});Te.addInitHook("addHandler","scrollWheelZoom",vc);var pg=600;Te.mergeOptions({tapHold:fe.touchNative&&fe.safari&&fe.mobile,tapTolerance:15});var wc=un.extend({addHooks:function(){_e(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Me(this._map._container,"touchstart",this._onDown,this)},_onDown:function(a){if(clearTimeout(this._holdTimeout),a.touches.length===1){var o=a.touches[0];this._startPos=this._newPos=new Y(o.clientX,o.clientY),this._holdTimeout=setTimeout(i(function(){this._cancel(),this._isTapValid()&&(_e(document,"touchend",ut),_e(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",o))},this),pg),_e(document,"touchend touchcancel contextmenu",this._cancel,this),_e(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function a(){Me(document,"touchend",ut),Me(document,"touchend touchcancel",a)},_cancel:function(){clearTimeout(this._holdTimeout),Me(document,"touchend touchcancel contextmenu",this._cancel,this),Me(document,"touchmove",this._onMove,this)},_onMove:function(a){var o=a.touches[0];this._newPos=new Y(o.clientX,o.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(a,o){var u=new MouseEvent(a,{bubbles:!0,cancelable:!0,view:window,screenX:o.screenX,screenY:o.screenY,clientX:o.clientX,clientY:o.clientY});u._simulated=!0,o.target.dispatchEvent(u)}});Te.addInitHook("addHandler","tapHold",wc),Te.mergeOptions({touchZoom:fe.touch,bounceAtZoomLimits:!0});var _c=un.extend({addHooks:function(){ke(this._map._container,"leaflet-touch-zoom"),_e(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){Ze(this._map._container,"leaflet-touch-zoom"),Me(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(a){var o=this._map;if(!(!a.touches||a.touches.length!==2||o._animatingZoom||this._zooming)){var u=o.mouseEventToContainerPoint(a.touches[0]),f=o.mouseEventToContainerPoint(a.touches[1]);this._centerPoint=o.getSize()._divideBy(2),this._startLatLng=o.containerPointToLatLng(this._centerPoint),o.options.touchZoom!=="center"&&(this._pinchStartLatLng=o.containerPointToLatLng(u.add(f)._divideBy(2))),this._startDist=u.distanceTo(f),this._startZoom=o.getZoom(),this._moved=!1,this._zooming=!0,o._stop(),_e(document,"touchmove",this._onTouchMove,this),_e(document,"touchend touchcancel",this._onTouchEnd,this),ut(a)}},_onTouchMove:function(a){if(!(!a.touches||a.touches.length!==2||!this._zooming)){var o=this._map,u=o.mouseEventToContainerPoint(a.touches[0]),f=o.mouseEventToContainerPoint(a.touches[1]),v=u.distanceTo(f)/this._startDist;if(this._zoom=o.getScaleZoom(v,this._startZoom),!o.options.bounceAtZoomLimits&&(this._zoom<o.getMinZoom()&&v<1||this._zoom>o.getMaxZoom()&&v>1)&&(this._zoom=o._limitZoom(this._zoom)),o.options.touchZoom==="center"){if(this._center=this._startLatLng,v===1)return}else{var C=u._add(f)._divideBy(2)._subtract(this._centerPoint);if(v===1&&C.x===0&&C.y===0)return;this._center=o.unproject(o.project(this._pinchStartLatLng,this._zoom).subtract(C),this._zoom)}this._moved||(o._moveStart(!0,!1),this._moved=!0),O(this._animRequest);var q=i(o._move,o,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=T(q,this,!0),ut(a)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,O(this._animRequest),Me(document,"touchmove",this._onTouchMove,this),Me(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});Te.addInitHook("addHandler","touchZoom",_c),Te.BoxZoom=fc,Te.DoubleClickZoom=gc,Te.Drag=bc,Te.Keyboard=yc,Te.ScrollWheelZoom=vc,Te.TapHold=wc,Te.TouchZoom=_c,t.Bounds=j,t.Browser=fe,t.CRS=ce,t.Canvas=uc,t.Circle=Gs,t.CircleMarker=to,t.Class=D,t.Control=nn,t.DivIcon=lc,t.DivOverlay=pn,t.DomEvent=Lf,t.DomUtil=Pf,t.Draggable=Wn,t.Evented=B,t.FeatureGroup=An,t.GeoJSON=Pn,t.GridLayer=Fr,t.Handler=un,t.Icon=Va,t.ImageOverlay=oo,t.LatLng=V,t.LatLngBounds=Z,t.Layer=an,t.LayerGroup=Fa,t.LineUtil=Hf,t.Map=Te,t.Marker=eo,t.Mixin=Nf,t.Path=Gn,t.Point=Y,t.PolyUtil=jf,t.Polygon=Za,t.Polyline=Tn,t.Popup=so,t.PosAnimation=Fd,t.Projection=Ff,t.Rectangle=mc,t.Renderer=Cn,t.SVG=Zr,t.SVGOverlay=sc,t.TileLayer=Ga,t.Tooltip=lo,t.Transformation=dt,t.Util=M,t.VideoOverlay=oc,t.bind=i,t.bounds=ee,t.canvas=pc,t.circle=Yf,t.circleMarker=Xf,t.control=Br,t.divIcon=sg,t.extend=n,t.featureGroup=Gf,t.geoJSON=ic,t.geoJson=tg,t.gridLayer=lg,t.icon=Kf,t.imageOverlay=ng,t.latLng=ae,t.latLngBounds=ne,t.layerGroup=Wf,t.map=If,t.marker=Jf,t.point=N,t.polygon=eg,t.polyline=Qf,t.popup=ig,t.rectangle=ug,t.setOptions=g,t.stamp=l,t.svg=hc,t.svgOverlay=rg,t.tileLayer=dc,t.tooltip=og,t.transformation=Ue,t.version=e,t.videoOverlay=ag;var hg=window.L;t.noConflict=function(){return window.L=hg,this},window.L=t}))});var Sg=new Set(["booking","task","gear"]),Eg=new Set(["×§×™×™×","×™×©","××•×›×Ÿ","× ×¨×›×©","×”×•×©×œ×","ready","owned"]),Qs=(t,e)=>e?Math.round(t/e*1e3)/10:null,Tc=t=>String(t!=null?t:"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function po(t){var n,r;let e=t.payload||{};return t.kind==="booking"?["×”×•×–××Ÿ","×©×•×œ×"].includes((n=e.status)==null?void 0:n.trim()):t.kind==="task"?e.done===!0||e.workflowStatus==="completed":t.kind==="gear"?Eg.has((r=e.status)==null?void 0:r.trim()):!1}function el(t,e={}){var d;let n=new Set,r=new Map,i=0,s=0;for(let[p,h]of(t||[]).entries()){if(!Sg.has(h.kind))continue;let m=h.kind+":"+(h.id||h.legacy_id||p);if(n.has(m))continue;n.add(m);let w=h.payload||{},g=((d=h.kind==="booking"?w.type:w.category)==null?void 0:d.trim())||(h.kind==="gear"?"×¦×™×•×“":"×›×œ×œ×™");r.has(g)||r.set(g,{category:g,total:0,completed:0,awaitingApproval:0});let y=r.get(g);i++,y.total++,po(h)&&(s++,y.completed++),w.workflowStatus==="awaiting_approval"&&y.awaitingApproval++}let l=Number(e.days)||0,c=new Set((t||[]).filter(p=>{var h,m;return p.kind==="stop"&&Number.isInteger((h=p.payload)==null?void 0:h.day)&&p.payload.day>=1&&p.payload.day<=l&&((m=p.payload.place)==null?void 0:m.trim())}).map(p=>p.payload.day)).size;return{total:i,completed:s,percent:Qs(s,i),categories:[...r.values()].map(p=>se(J({},p),{percent:Qs(p.completed,p.total)})).sort((p,h)=>p.category.localeCompare(h.category,"he")),route:{days:l,covered:c,percent:Qs(c,l)}}}function Pc(t,e={}){let n=el(t,e);return'<section class="trip-completion" aria-label="×‘×™×¦×•×¢ ×”×”×›× ×•×ª ×œ×˜×™×•×œ"><div class="row"><h2>××¦×‘ ×”×”×›× ×•×ª ×œ×˜×™×•×œ</h2><strong class="metric">'+(n.percent===null?"×˜×¨× ×”×•×’×“×¨":n.percent+"%")+"</strong></div><p>"+n.completed+" ××ª×•×š "+n.total+' ×¤×¨×™×˜×™ ×”×›× ×” ×”×•×©×œ××•</p><progress max="100" value="'+(n.percent||0)+'" aria-label="××—×•×– ×‘×™×¦×•×¢ ×›×œ×œ×™"></progress><p class="muted">×”×–×× ×•×ª × ×¡×¤×¨×•×ª ×›×”×•×©×œ××• ×¨×§ ×›×©×¡×•×× ×• ×´×”×•×–××Ÿ×´ ××• ×´×©×•×œ××´. ××™×©×•×¨ ×”×¦×¢×” ××™× ×• ×”×–×× ×”. ××©×™××•×ª ×•×¦×™×•×“ × ×¡×¤×¨×™× ×œ×¤×™ ×¡×™××•×Ÿ ×”×‘×™×¦×•×¢ ×©×œ×”×; ×›×œ ×¨×©×•××” × ×¡×¤×¨×ª ×¤×¢× ××—×ª.</p><div class="completion-categories">'+n.categories.map(i=>'<article><div class="row"><strong>'+Tc(i.category)+"</strong><span>"+i.percent+'%</span></div><progress max="100" value="'+i.percent+'" aria-label="×‘×™×¦×•×¢ '+Tc(i.category)+'"></progress><small>'+i.completed+" ××ª×•×š "+i.total+" ×”×•×©×œ××•"+(i.awaitingApproval?" Â· "+i.awaitingApproval+" ×××ª×™× ×™× ×œ××™×©×•×¨":"")+"</small></article>").join("")+'</div><p class="muted">×›×™×¡×•×™ ××¡×œ×•×œ: '+n.route.covered+" ××ª×•×š "+n.route.days+" ×™××™× ××ª×•×›× × ×™×. ××™×“×¢ ×¢×œ ××§×•××•×ª ×•×¢×¦×™×¨×•×ª ××™× ×• × ×¡×¤×¨ ×›×”×–×× ×” ×©×‘×•×¦×¢×”.</p></section>"}function ze(t){if(typeof t!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(t))return!1;let e=new Date(t+"T00:00:00Z");return Number.isFinite(e.getTime())&&e.toISOString().slice(0,10)===t&&Number(t.slice(0,4))>=1900}function ga(t){if(typeof t!="string"||t.length>100||!/^([A-Za-z_]+\/[^\s]+|UTC|GMT)$/.test(t))return!1;try{return new Intl.DateTimeFormat("en",{timeZone:t}),!0}catch(e){return!1}}function Wr(t){if(!Array.isArray(t)||t.length>100)throw Error("×¢×“ 100 ×“×¨×™×©×•×ª ×œ×˜×™×•×œ");let e=new Set;return t.map(n=>{if(!n||typeof n!="object"||typeof n.id!="string"||!/^[a-zA-Z0-9_-]{1,100}$/.test(n.id)||e.has(n.id)||typeof n.title!="string"||!n.title.trim()||n.title.length>200||!["task","gear","booking","route","lodging"].includes(n.kind)||typeof n.applicable!="boolean"||!Array.isArray(n.itemIds)||n.itemIds.length>200||n.itemIds.some(r=>typeof r!="string"||!r||r.length>100))throw Error("×“×¨×™×©×ª ××•×›× ×•×ª ×œ× ×ª×§×™× ×”");return e.add(n.id),{id:n.id,title:n.title.trim(),kind:n.kind,applicable:n.applicable,itemIds:[...new Set(n.itemIds)]}})}var Cc={overdue:0,unknown:1,open:2,completed:3,excluded:4},Ag=(t,e)=>new Date(Date.parse(t+"T00:00:00Z")+e*864e5).toISOString().slice(0,10);function Tg(t,e){var l,c;let n=t.payload||{},r=[],i=t.kind==="task"?n.dueDate:n.actionDueDate,s;return po(t)?(s="completed",r.push(t.kind==="booking"?"×¡×•×× ×” ×›×”×•×–×× ×” ××• ×©×•×œ××” ×œ×¤×™ ×”×¨×©×•××”; ×œ× ××™××•×ª ×¢×¦×××™ ××•×œ ×¡×¤×§":"×¡×™××•×Ÿ ×‘×™×¦×•×¢ ××¤×•×¨×© ×‘×¨×©×•××”")):t.kind==="task"?(s="open",r.push(n.workflowStatus==="awaiting_approval"?"× ×“×¨×©×ª ×”×—×œ×˜×” ×©×œ ×”××©×ª××©":"×”××©×™××” ×¢×“×™×™×Ÿ ×¤×ª×•×—×”")):t.kind==="gear"?(s=(l=n.status)!=null&&l.trim()&&["×˜×¨× × ×¨×›×©","×—×¡×¨","×œ× ××•×›×Ÿ","×œ×¨×›×™×©×”","×‘×”×–×× ×”"].includes(n.status.trim())?"open":"unknown",r.push(s==="unknown"?"×™×© ×œ×”×©×œ×™× ××• ×œ×”×‘×”×™×¨ ××ª ××¦×‘ ×”×¦×™×•×“":"×”×¦×™×•×“ ×¢×“×™×™×Ÿ ××™× ×• ××•×›×Ÿ")):(s=(c=n.status)!=null&&c.trim()?"open":"unknown",r.push(n.workflowStatus==="awaiting_approval"?"×”×¦×¢×” ×××ª×™× ×” ×œ××™×©×•×¨; ×˜×¨× ×‘×•×¦×¢×” ×”×–×× ×”":s==="unknown"?"×œ× ×”×•×’×“×¨ ××¦×‘ ×”×–×× ×”":"×”×”×–×× ×” ×¢×“×™×™×Ÿ ××™× ×” ××¡×•×× ×ª ×›×”×•×–×× ×” ××• ×©×•×œ××”")),s!=="completed"&&i&&(ze(i)?i<e&&(s="overdue",r.push("××•×¢×“ ×”×˜×™×¤×•×œ ×—×œ×£: "+i)):(s="unknown",r.push("××•×¢×“ ×˜×™×¤×•×œ ×œ× ×ª×§×™×Ÿ"))),{id:t.id,kind:t.kind,title:n.title||n.name||"×¤×¨×™×˜ ×œ×œ× ×©×",status:s,reasons:r,deadline:ze(i)?i:null}}function Ja({trip:t,items:e=[],requirements:n=(i=>(i=t==null?void 0:t.settings)==null?void 0:i.readinessRequirements)()||[],now:r=new Date}){var S;let s=(t==null?void 0:t.settings)||{},l=new Date(r);if(!Number.isFinite(l.getTime()))throw Error("×–××Ÿ ×“×•×— ×œ× ×ª×§×™×Ÿ");let c=!ga(s.timeZone),d=c?"Asia/Jerusalem":s.timeZone,p=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:d,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(l).map(k=>[k.type,k.value])),h=p.year+"-"+p.month+"-"+p.day,m=new Map;for(let k of e)!(k!=null&&k.id)||k.trip_id&&k.trip_id!==t.id||m.has(k.id)||m.set(k.id,k);let w=[...m.values()].filter(k=>["booking","task","gear"].includes(k.kind)).map(k=>Tg(k,h)),g=new Map(w.map(k=>[k.id,k])),y=Number.isInteger(s.days)&&s.days>=1&&s.days<=365?s.days:null,_=Wr(n).map(k=>{if(!k.applicable)return se(J({},k),{status:"excluded",reasons:["×¡×•×× ×” ×›×œ× ×¨×œ×•×•× ×˜×™×ª"]});if(k.kind==="route"){if(!y)return se(J({},k),{status:"unknown",reasons:["××©×š ×”×˜×™×•×œ ××™× ×• ××•×’×“×¨"]});let z=new Set([...m.values()].filter(O=>{var M,D;return O.kind==="stop"&&((D=(M=O.payload)==null?void 0:M.place)==null?void 0:D.trim())&&Number.isInteger(O.payload.day)&&O.payload.day>=1&&O.payload.day<=y}).map(O=>O.payload.day)),T=Array.from({length:y},(O,M)=>M+1).filter(O=>!z.has(O));return se(J({},k),{status:T.length?"open":"completed",missingDays:T,reasons:[T.length?"×—×¡×¨×” ×ª×•×›× ×™×ª ×œ×™××™×: "+T.join(", "):"×™×© ×ª×—× ×•×ª ×œ×›×œ ×™×•×; ××™×Ÿ ×‘×›×š ××™××•×ª × ×™×•×•×˜ ××• ×‘×˜×™×—×•×ª"]})}if(!k.itemIds.length)return se(J({},k),{status:"unknown",reasons:["×œ× ×§×•×©×¨×• ×¨×©×•××•×ª ×œ×“×¨×™×©×”"]});let I=k.kind==="lodging"?"booking":k.kind,A=k.itemIds.map(z=>m.get(z));if(A.some(z=>!z||z.kind!==I))return se(J({},k),{status:"unknown",reasons:["×¨×©×•××” ××§×•×©×¨×ª ×—×¡×¨×” ××• ××™× ×” ××”×¡×•×’ ×”××ª××™×"]});if(k.kind==="lodging"){if(!y||!ze(s.start))return se(J({},k),{status:"unknown",reasons:["×™×© ×œ×”×©×œ×™× ×ª××¨×™×š ×™×¦×™××” ×•××©×š ×˜×™×•×œ"]});let z=A.filter(po);if(z.some(M=>!ze(M.payload.checkInDate)||!ze(M.payload.checkOutDate)||M.payload.checkOutDate<=M.payload.checkInDate))return se(J({},k),{status:"unknown",reasons:["×™×© ×œ×”×©×œ×™× ×ª××¨×™×›×™ ×›× ×™×¡×” ×•×™×¦×™××” ×œ×œ×™× ×”"]});let T=Array.from({length:Math.max(0,y-1)},(M,D)=>Ag(s.start,D)),O=T.filter(M=>!z.some(D=>D.payload.checkInDate<=M&&D.payload.checkOutDate>M));return se(J({},k),{status:O.length?"open":"completed",missingNights:O,reasons:[O.length?"×œ×™×œ×•×ª ×œ×œ× ×œ×™× ×” ××¡×•×× ×ª ×›×”×•×–×× ×”: "+O.join(", "):"×”×œ×™×œ×•×ª ××›×•×¡×™× ×œ×¤×™ ×ª××¨×™×›×™ ×”×”×–×× ×•×ª ×©×“×•×•×—×•; ×œ× ××™××•×ª ×¡×¤×§"]})}let E=k.itemIds.map(z=>g.get(z)),R=E.map(z=>z.status).sort((z,T)=>Cc[z]-Cc[T])[0];return se(J({},k),{status:R,reasons:[...new Set(E.filter(z=>z.status!=="completed"||R==="completed").flatMap(z=>z.reasons))]})}),x=_.filter(k=>k.status!=="excluded"),P=x.filter(k=>k.status==="completed").length;return{asOf:l.toISOString(),sourceVersion:(S=t==null?void 0:t.version)!=null?S:null,timeZone:d,timeZoneAssumed:c,today:h,items:w,requirementRows:_,requirements:{total:x.length,completed:P,excluded:_.length-x.length,percent:x.length?Math.round(P/x.length*100):null}}}var Gt=[["planning","×‘×ª×›× ×•×Ÿ"],["ready","××•×›×Ÿ ×œ×™×¦×™××”"],["traveling","×‘××”×œ×š ×”×˜×™×•×œ"],["completed","×”×•×©×œ×"],["postponed","× ×“×—×”"],["cancelled","×‘×•×˜×œ"]],Lc=864e5,tl=t=>!!t&&typeof t=="object"&&!Array.isArray(t),Ic=(t,e)=>(Date.parse(e+"T00:00:00Z")-Date.parse(t+"T00:00:00Z"))/Lc+1;function Kn(t={}){var e;return((e=Gt.find(([n])=>n===t.tripStatus))==null?void 0:e[1])||"×˜×¨× ×”×•×’×“×¨"}function ho(t){if(!tl(t))throw Error("×¤×¨×˜×™ ×”×˜×™×•×œ ××™× × ×ª×§×™× ×™×");if("tripStatus"in t&&!Gt.some(([e])=>e===t.tripStatus))throw Error("×¡×˜×˜×•×¡ ×”×˜×™×•×œ ××™× ×• ×ª×§×™×Ÿ");if("start"in t&&(typeof t.start!="string"||t.start&&!ze(t.start)))throw Error("×ª××¨×™×š ×™×¦×™××” ××™× ×• ×ª×§×™×Ÿ");if("days"in t&&(!Number.isInteger(t.days)||t.days<1||t.days>365))throw Error("××©×š ×”×˜×™×•×œ ×—×™×™×‘ ×œ×”×™×•×ª ×‘×™×Ÿ 1 ×œÖ¾365 ×™××™×");if("returnDate"in t){if(typeof t.returnDate!="string"||t.returnDate&&!ze(t.returnDate))throw Error("×ª××¨×™×š ×—×–×¨×” ××™× ×• ×ª×§×™×Ÿ");if(t.returnDate){if(!ze(t.start))throw Error("×™×© ×œ×§×‘×•×¢ ×ª××¨×™×š ×™×¦×™××” ×œ×¤× ×™ ×ª××¨×™×š ×—×–×¨×”");let e=Ic(t.start,t.returnDate);if(e<1)throw Error("×ª××¨×™×š ×—×–×¨×” ××™× ×• ×™×›×•×œ ×œ×”×™×•×ª ×œ×¤× ×™ ×ª××¨×™×š ×”×™×¦×™××”");if(e>365)throw Error("×˜×•×•×— ×”×™×¦×™××” ×•×”×—×–×¨×” ××•×’×‘×œ ×œÖ¾365 ×™××™×");if(t.days!==e)throw Error("×ª××¨×™×š ×”×—×–×¨×” ××™× ×• ×ª×•×× ×œ××©×š ×”×˜×™×•×œ; ×™×© ×œ×¢×“×›×Ÿ ××ª ×¤×¨×˜×™ ×”×˜×™×•×œ")}}}function mo(t={},e={}){if(!tl(t)||!tl(e))throw Error("×¤×¨×˜×™ ×”×˜×™×•×œ ××™× × ×ª×§×™× ×™×");Object.hasOwn(e,"days")&&ho({days:e.days});let n=J(J({},t),e);return e.tripStatus===""&&delete n.tripStatus,Object.hasOwn(e,"returnDate")&&e.returnDate&&ze(n.start)&&ze(e.returnDate)&&(n.days=Ic(n.start,e.returnDate)),ho(n),n}function nl(t={}){if(ze(t.returnDate))return{date:t.returnDate,estimated:!1};if(!ze(t.start)||!Number.isInteger(t.days)||t.days<1||t.days>365)return{date:"",estimated:!1};let e=new Date(Date.parse(t.start+"T00:00:00Z")+(t.days-1)*Lc).toISOString().slice(0,10);return ze(e)?{date:e,estimated:!0}:{date:"",estimated:!1}}var fo=t=>String(t!=null?t:"").normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").toLocaleLowerCase("he").trim().replace(/\s+/g," "),Oc=t=>t.destination_name||t.title||"",Pg=t=>Gt.some(([e])=>{var n;return e===((n=t.settings)==null?void 0:n.tripStatus)})?t.settings.tripStatus:"unset";function al(t,{query:e="",status:n=""}={}){let r=fo(e);return t.filter(i=>(!n||Pg(i)===n)&&(!r||fo(Oc(i)).includes(r)))}var Cg=0;function Rc({root:t,destinations:e,state:n,onFilter:r}){let i=!1,s=t.ownerDocument,l="destination-name-options-"+ ++Cg;t.className="destination-search-controls",t.dir="rtl",t.innerHTML='<input type="search" data-destination-name-search aria-label="×—×™×¤×•×© ×™×¢×“" placeholder="×”×§×œ×“ ×©× ×™×¢×“â€¦" autocomplete="off" maxlength="120" aria-autocomplete="list"><select data-destination-status-filter aria-label="×¡×˜×˜×•×¡ ×”×˜×™×•×œ"></select><button type="button" data-clear-destination-search class="secondary">× ×™×§×•×™ ×—×™×¤×•×©</button><p role="status" aria-live="polite" data-destination-search-count></p><datalist></datalist>';let c=t.querySelector("input"),d=t.querySelector("select"),p=t.querySelector("button"),h=t.querySelector("[role=status]"),m=t.querySelector("datalist");m.id=l,c.setAttribute("list",l);for(let[y,_]of[["","×›×œ ×”×¡×˜×˜×•×¡×™×"],...Gt,["unset","×˜×¨× ×”×•×’×“×¨"]]){let x=s.createElement("option");x.value=y,x.textContent=_,d.append(x)}c.value=n.query||"",d.value=n.status||"",d.selectedIndex<0&&(d.value="");let w=()=>{if(i)return;n.query=c.value,n.status=d.value;let y=al(e,n),_=new Map;for(let x of y){let P=Oc(x);P&&!_.has(fo(P))&&_.set(fo(P),P)}m.replaceChildren(...[..._.values()].map(x=>{let P=s.createElement("option");return P.value=x,P})),h.textContent=e.length===0?"××™×Ÿ ×¢×“×™×™×Ÿ ×™×¢×“×™× ×©××•×¨×™×":y.length===0?"××™×Ÿ ×™×¢×“×™× ×”×ª×•×××™× ×œ×—×™×¤×•×©. ××¤×©×¨ ×œ×©× ×•×ª ×¡×˜×˜×•×¡ ××• ×œ× ×§×•×ª ××ª ×”×—×™×¤×•×©.":y.length+" ××ª×•×š "+e.length+" ×™×¢×“×™×",p.disabled=!n.query&&!n.status,r(y)},g=()=>{c.value="",d.value="",w(),c.focus()};return c.addEventListener("input",w),c.addEventListener("change",w),d.addEventListener("change",w),p.addEventListener("click",g),w(),()=>{i=!0,c.removeEventListener("input",w),c.removeEventListener("change",w),d.removeEventListener("change",w),p.removeEventListener("click",g)}}var Lt=[["opened","× ×¤×ª×—"],["read_by_agent","× ×§×¨× ×¢×´×™ ×”×¡×•×›×Ÿ"],["email_sent","× ×©×œ×— ××™××™×™×œ"],["policy_updated","××“×™× ×™×•×ª ×”×–×× ×” ×¢×•×“×›× ×”"],["awaiting_approval","×××ª×™×Ÿ ×œ××™×©×•×¨×š"],["awaiting_details","×××ª×™×Ÿ ×œ×”×•×¡×¤×ª ×¤×¨×˜×™×"],["updated","××¢×•×“×›×Ÿ"],["rejected","× ×“×—×”"],["completed","×¡×™×™× ×‘×”×¦×œ×—×”"]];function Kt(t){let e=t.payload;return Lt.some(([n])=>n===e.workflowStatus)?e.workflowStatus:t.kind==="task"&&e.done||["×”×•×–××Ÿ","×©×•×œ×"].includes(e.status)?"completed":"opened"}function Dc(t){return Lt.find(([e])=>e===Kt(t))[1]}function Lg(t){var e;return((e=t.kind==="task"?t.payload.category:t.payload.type)==null?void 0:e.trim())||(t.kind==="task"?"×›×œ×œ×™":"×œ×œ× ×§×˜×’×•×¨×™×”")}function Ig(t){let e=Object.fromEntries(Lt.map(([r])=>[r,0])),n=new Map;for(let r of t){let i=Lg(r),s=Kt(r);e[s]++,n.has(i)||n.set(i,{category:i,total:0,counts:Object.fromEntries(Lt.map(([c])=>[c,0]))});let l=n.get(i);l.total++,l.counts[s]++}return{total:t.length,counts:e,categories:[...n.values()].sort((r,i)=>r.category.localeCompare(i.category,"he"))}}var go=t=>String(t!=null?t:"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Mc(t){let e=Ig(t),n=(l,c,d="",p)=>'<button type="button" class="stat-drill" data-stat-drill data-drill-status="'+d+'"'+(p===void 0?"":' data-drill-category="'+go(p)+'"')+' aria-label="'+go(c)+'">'+go(l)+"</button>",r=([l,c])=>'<button type="button" class="workflow-stat" data-status="'+l+'" data-stat-drill data-drill-status="'+l+'" aria-label="×”×¦×’ '+e.counts[l]+" ×¤×¨×™×˜×™× ×‘×¡×˜×˜×•×¡ "+c+'"><strong>'+e.counts[l]+"</strong><span>"+c+"</span></button>",i=l=>e.counts[l]?"":' class="workflow-zero-column"',s=l=>Lt.map(([c,d])=>"<li><span>"+d+"</span>"+n(l.counts[c],"×”×¦×’ "+l.counts[c]+" ×¤×¨×™×˜×™×: "+l.category+", "+d,c,l.category)+"</li>").join("");return'<div class="workflow-statistics"><p class="muted">'+n(e.total+" ×¤×¨×™×˜×™× ×‘×¡×™× ×•×Ÿ ×”× ×•×›×—×™","×”×¦×’ ××ª ×›×œ ×”×¤×¨×™×˜×™× ×‘×¡×™× ×•×Ÿ ×”× ×•×›×—×™")+'</p><div class="workflow-status-summary">'+Lt.filter(([l])=>e.counts[l]>0).map(r).join("")+'</div><details class="workflow-all-statuses"><summary>×›×œ ×”×¡×˜×˜×•×¡×™×</summary><div class="workflow-status-summary">'+Lt.map(r).join("")+'</div></details><h3>×§×˜×’×•×¨×™×•×ª ×•×¡×˜×˜×•×¡×™×</h3><details class="workflow-all-columns"><summary>×›×œ ×”×¡×˜×˜×•×¡×™× ×‘×˜×‘×œ×ª ×”×§×˜×’×•×¨×™×•×ª</summary><p class="muted">×›×œ ×¢××•×“×•×ª ×”×¡×˜×˜×•×¡ ××•×¦×’×•×ª ×‘×˜×‘×œ×”. ×‘× ×™×™×“, ×¤×ª×—×• ×§×˜×’×•×¨×™×” ×œ×¤×™×¨×•×˜ ×›×œ ×”×¡×˜×˜×•×¡×™×.</p></details><div class="workflow-table-scroll" tabindex="0" role="region" aria-label="×˜×‘×œ×ª ×¡×˜×˜×™×¡×˜×™×§×•×ª ×œ×¤×™ ×§×˜×’×•×¨×™×” ×•×¡×˜×˜×•×¡"><table class="workflow-table"><caption>×œ×—×¥ ×¢×œ ××¡×¤×¨ ×›×“×™ ×œ×”×¦×™×’ ××ª ×”×¤×¨×™×˜×™× ×”××ª××™××™×</caption><thead><tr><th scope="col">×§×˜×’×•×¨×™×”</th><th scope="col">×¡×”×´×›</th>'+Lt.map(([l,c])=>'<th scope="col"'+i(l)+">"+c+"</th>").join("")+"</tr></thead><tbody>"+e.categories.map(l=>'<tr data-stat-category="'+go(l.category)+'"><th scope="row">'+n(l.category,"×”×¦×’ ××ª ×›×œ ×”×¤×¨×™×˜×™× ×‘×§×˜×’×•×¨×™×” "+l.category,"",l.category)+'<details class="workflow-category-details"><summary>×¤×™×¨×•×˜ ×¡×˜×˜×•×¡×™× Â· '+l.total+" ×¤×¨×™×˜×™×</summary><ul>"+s(l)+"</ul></details></th><td>"+n(l.total,"×”×¦×’ ××ª ×›×œ ×”×¤×¨×™×˜×™× ×‘×§×˜×’×•×¨×™×” "+l.category,"",l.category)+"</td>"+Lt.map(([c,d])=>"<td"+i(c)+">"+n(l.counts[c],"×”×¦×’ "+l.counts[c]+" ×¤×¨×™×˜×™×: "+l.category+", "+d,c,l.category)+"</td>").join("")+"</tr>").join("")+"</tbody></table></div>"+(e.total?"":"<p>××™×Ÿ ×¢×“×™×™×Ÿ ×¤×¨×™×˜×™× ×œ×”×¦×’×ª ×¡×˜×˜×™×¡×˜×™×§×•×ª.</p>")+"</div>"}var G=t=>String(t!=null?t:"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),rl={plus:'<path d="M12 5v14M5 12h14"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/>',route:'<circle cx="6" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="M9 6h6a4 4 0 0 1 0 8H9a4 4 0 0 0-4 4"/>',agentCompass:'<circle cx="12" cy="12" r="8.5"/><path d="m15.6 8.4-2.2 5.1-5 2.3 2.2-5.2z"/><circle cx="18.5" cy="18.5" r="1.5"/><path d="m13.4 13.4 5.1 5.1"/>',booking:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v4m10-4v4M3 11h18m-13 5h3"/>',place:'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',task:'<path d="m4 7 2 2 4-4m3 2h7M4 15l2 2 4-4m3 2h7"/>',wallet:'<rect x="3" y="5" width="18" height="15" rx="3"/><path d="M3 8V5a2 2 0 0 1 2-2h12v2M16 12h5v5h-5a2.5 2.5 0 0 1 0-5Z"/>',gear:'<rect x="5" y="6" width="14" height="15" rx="3"/><path d="M9 6V4a3 3 0 0 1 6 0v2m-6 7h6m-6 4h6"/>',dashboard:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="11" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="18" width="7" height="3" rx="1"/>',settings:'<path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="3"/><circle cx="15" cy="17" r="3"/>',more:'<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',edit:'<path d="m15 4 5 5M4 20l5-1L21 7a2 2 0 0 0-5-5L4 15Z"/>',trash:'<path d="M3 6h18M9 6V3h6v3M6 6l1 15h10l1-15M10 10v7m4-7v7"/>',chevron:'<path d="m6 9 6 6 6-6"/>',refresh:'<path d="M20 7v5h-5M4 17v-5h5M6 6a8 8 0 0 1 13 3M5 15a8 8 0 0 0 13 3"/>',shield:'<path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6Z"/><path d="m8 12 3 3 5-6"/>'};Object.assign(rl,{trips:'<rect x="4" y="3" width="15" height="16" rx="2"/><path d="M1 7v13a3 3 0 0 0 3 3h12M8 7h7M8 11h7M8 15h4"/>',people:'<circle cx="9" cy="8" r="3"/><path d="M3 21v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M18 15a5 5 0 0 1 3 5"/>',document:'<path d="M14 2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9ZM14 2v7h7m-14 6 3 3 6-6"/>',field:'<path d="m3 6 6-3 6 3 6-3v11m-18-8v15l6-3 3 1M9 3v15m6-12v5m3 3v8m-3-3 3 3 3-3"/>',sources:'<path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-2 2m2 6a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l2-2"/>',backup:'<path d="M12 3v12m-4-4 4 4 4-4M4 16v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4"/>'});function je(t){var e;return'<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">'+((e=rl[t])!=null?e:rl.route)+"</svg>"}var nt=t=>new Intl.NumberFormat("he-IL",{style:"currency",currency:"ILS",minimumFractionDigits:0,maximumFractionDigits:2}).format(Number(t||0));function zc(t,e,{disabled:n=!1}={}){let r=["dashboard","stop","booking","expenses","agent"],i={dashboard:"×œ×•×— ×‘×§×¨×”",stop:"××¡×œ×•×œ ×•×™××™×",booking:"×”×–×× ×•×ª",expenses:"×ª×§×¦×™×‘",agent:"×¡×•×›×Ÿ ×•××™×©×•×¨×™×"},s={dashboard:"dashboard",stop:"route",booking:"booking",expenses:"wallet",agent:"shield",task:"task",gear:"gear",place:"place",group:"people",documents:"document",field:"field",sources:"sources",settings:"backup"},l=([g,y])=>'<button type="button" data-tab="'+G(g)+'" aria-label="'+G(i[g]||y)+'" class="nav-item '+(!n&&e===g?"active":"")+'" '+(n?'disabled aria-disabled="true"':e===g?'aria-current="page"':"")+">"+je(s[g])+'<span class="nav-label">'+G(i[g]||y)+"</span></button>",c=(g,y)=>y.length?'<div class="nav-tool-group" role="group" aria-label="'+g+'"><p class="control-menu-heading">'+g+"</p>"+y.map(l).join("")+"</div>":"",d=g=>g.map(y=>t.find(_=>_[0]===y)).filter(Boolean),p=["task","gear","place"],h=["group","documents","field","sources"],m=(g,y,_,x,P)=>'<details id="'+g+'" class="nav-more '+(!n&&x.includes(e)?"active":"")+'"><summary aria-label="'+y+'">'+je(_)+"<span>"+y+'</span></summary><div class="nav-menu">'+P+"</div></details>",w=t.filter(([g])=>![...r,...p,...h,"settings"].includes(g));return d(["dashboard","stop"]).map(l).join("")+m("nav-preparation","×”×›× ×•×ª","task",p,c("×”×›× ×•×ª",d(p)))+d(["booking","expenses","agent"]).map(l).join("")+m("nav-more","××¡××›×™× ×•×©×™×ª×•×£","document",[...h,"settings",...w.map(([g])=>g)],c("××¡××›×™× ×•×©×™×ª×•×£",d(h))+c("× ×ª×•× ×™×",d(["settings"]))+w.map(l).join(""))}function Og(t,e){try{let n=new URL(t);return["https:","http:"].includes(n.protocol)?'<a class="record-link" href="'+G(n.href)+'" target="_blank" rel="noopener noreferrer">'+G(e)+" â†—</a>":""}catch(n){return""}}function Nc(t,e,n=""){var g,y,_,x,P,S;let r=t.payload,i=(_=(y=(g=r.name)!=null?g:r.place)!=null?y:r.title)!=null?_:"×¤×¨×™×˜",s=t.kind==="stop",l=t.kind==="task",c=[s?"×™×•× "+r.day:(P=(x=r.type)!=null?x:r.category)!=null?P:"",s?r.kind:"",(S=r.status)!=null?S:""].filter(Boolean),d=t.kind==="booking"?'<div class="record-price">'+(Number(r.cost)>0||["×”×•×–××Ÿ","×©×•×œ×"].includes(r.status)&&typeof r.cost=="number"?G(nt(r.cost)):"×˜×¨× ×ª×•××—×¨")+"</div>":"",p=new Set(["name","place","title","type","category","status","day","kind","notes","workflowStatus"]);t.kind==="booking"&&p.add("cost");let h=e.filter(([k])=>!p.has(k)&&r[k]!==void 0&&r[k]!=="").map(([k,I])=>{let A=["url","guide"].includes(k)?Og(r[k],I):G(["paid","cost"].includes(k)?r[k]===null?"×œ× ×™×“×•×¢":nt(r[k]):r[k]);return A?"<div><dt>"+G(I)+"</dt><dd>"+A+"</dd></div>":""}).join(""),m=r.notes?String(r.notes):"",w=m.length>170?'<p class="record-excerpt">'+G(m.slice(0,125))+'â€¦</p><details class="card-notes"><summary><span>×¤×¨×˜×™ ×”×ª×›× ×•×Ÿ</span>'+je("chevron")+"</summary><p>"+G(m)+"</p></details>":m?'<p class="record-notes">'+G(m)+"</p>":"";return'<article class="card record-card '+(l&&Kt(t)==="completed"?"is-complete":"")+'" data-id="'+G(t.id)+'" aria-labelledby="record-'+G(t.id)+'"><div class="record-badges">'+c.map(k=>'<span class="badge">'+G(k)+"</span>").join("")+(["booking","task"].includes(t.kind)?'<span class="badge workflow-badge" data-workflow-status="'+Kt(t)+'">'+Dc(t)+"</span>":"")+'</div><h3 class="record-title" id="record-'+G(t.id)+'">'+G(i)+"</h3>"+d+(l?'<label class="task-toggle"><input type="checkbox" aria-labelledby="record-'+G(t.id)+" task-label-"+G(t.id)+'" '+(Kt(t)==="completed"?"checked":"")+'><span id="task-label-'+G(t.id)+'">×”××©×™××” ×”×•×©×œ××”</span></label>':"")+(h?'<dl class="record-meta">'+h+"</dl>":"")+w+n+'<div class="record-actions"><button type="button" data-action="edit">'+je("edit")+'×¢×¨×™×›×”</button><button type="button" data-action="delete" class="danger">'+je("trash")+"××—×™×§×”</button></div></article>"}function Rg(t={}){var n;let e=nl(t);return'<dl class="trip-details-summary"><div><dt>×¡×˜×˜×•×¡ ×”×˜×™×•×œ</dt><dd>'+G(Kn(t))+"</dd></div><div><dt>×™×¦×™××”</dt><dd>"+G(t.start||"×œ× × ×§×‘×¢")+"</dd></div><div><dt>×—×–×¨×”</dt><dd>"+G(e.date||"×œ× × ×§×‘×¢")+(e.estimated?' <span class="muted">(××©×•×¢×¨ ×œ×¤×™ ××©×š ×”×˜×™×•×œ)</span>':"")+"</dd></div><div><dt>××©×š ×”×˜×™×•×œ</dt><dd>"+G((n=t.days)!=null?n:"×œ× × ×§×‘×¢")+(t.days?" ×™××™×":"")+"</dd></div></dl>"}function jc({root:t,trip:e,onSave:n,onEditAdvanced:r}){let i=t.ownerDocument,s=!0,l=!1,c=J({},e.settings),d=i.createElement("section");d.className="trip-details",d.dir="rtl",d.setAttribute("aria-label","×¤×¨×˜×™ ×”×˜×™×•×œ"),t.replaceChildren(d);let p=()=>s&&d.parentNode===t;function h(w="",g=!1){if(!p())return;d.removeAttribute("aria-busy"),d.innerHTML='<div class="trip-details-row">'+Rg(c)+'<div class="trip-details-actions"><button type="button" data-edit-trip-details data-trip-edit>×¢×¨×™×›×ª ×¤×¨×˜×™ ×”×˜×™×•×œ</button>'+(typeof r=="function"?'<button type="button" data-edit-trip-advanced>×›×œ ×”×’×“×¨×•×ª ×”×˜×™×•×œ</button>':"")+'</div></div><p class="trip-details-feedback" role="status" aria-live="polite" data-trip-feedback>'+G(w)+"</p>";let y=d.querySelector("[data-edit-trip-details]");y.onclick=m;let _=d.querySelector("[data-edit-trip-advanced]");_==null||_.addEventListener("click",()=>{l||r()}),g&&y.focus()}function m(){var I,A;if(!p()||l)return;d.innerHTML='<form class="trip-details-form" data-trip-edit-form novalidate><div class="trip-details-fields"><label>×¡×˜×˜×•×¡ ×”×˜×™×•×œ<select name="tripStatus"><option value="">×˜×¨× ×”×•×’×“×¨</option>'+Gt.map(([E,R])=>'<option value="'+G(E)+'" '+(c.tripStatus===E?"selected":"")+">"+G(R)+"</option>").join("")+'</select></label><label>×ª××¨×™×š ×™×¦×™××”<input type="date" name="start" value="'+G(c.start||"")+'"></label><label>×ª××¨×™×š ×—×–×¨×” (××•×¤×¦×™×•× ×œ×™)<input type="date" name="returnDate" value="'+G(c.returnDate||"")+'"></label><label>××¡×¤×¨ ×™××™×<input type="number" name="days" min="1" max="365" step="1" required value="'+G((I=c.days)!=null?I:"")+'"></label></div><p class="muted">×´××•×›×Ÿ ×œ×™×¦×™××”×´ ×”×•× ×¡×™××•×Ÿ ×©×œ×š ×•××™× ×• ××™×©×•×¨ ×‘×˜×™×—×•×ª ××• ××™××•×ª ×”×–×× ×•×ª.</p><p class="trip-details-preview" data-trip-preview aria-live="polite"></p><div class="trip-details-actions"><button type="submit" class="primary">×©××™×¨×ª ×¤×¨×˜×™ ×”×˜×™×•×œ</button><button type="button" data-cancel-trip-details>×‘×™×˜×•×œ</button>'+(typeof r=="function"?'<button type="button" data-edit-trip-advanced>×›×œ ×”×’×“×¨×•×ª ×”×˜×™×•×œ</button>':"")+'</div><p class="trip-details-feedback" data-trip-feedback role="status" aria-live="polite"></p></form>';let w=d.querySelector("form"),g=w.elements,y=d.querySelector("[data-trip-feedback]"),_=d.querySelector("[data-trip-preview]"),x=()=>p()&&d.querySelector("form")===w,P=()=>mo(c,{tripStatus:g.tripStatus.value,start:g.start.value,returnDate:g.returnDate.value,days:Number(g.days.value)});function S(){if(!(!x()||l)){g.days.readOnly=!!(g.start.value&&g.returnDate.value);try{let E=P(),R=nl(E);g.days.readOnly&&(g.days.value=E.days);let z=E.days!==c.days,T=(e.items||[]).some(O=>{var M;return O.kind==="stop"&&Number((M=O.payload)==null?void 0:M.day)>E.days});_.textContent=(R.date?"×—×–×¨×”: "+R.date+(R.estimated?" (××©×•×¢×¨ ×œ×¤×™ ××©×š ×”×˜×™×•×œ)":"")+". ":"")+(z?"××©×š ×”×˜×™×•×œ ×™×©×ª× ×” ×Ö¾"+c.days+" ×œÖ¾"+E.days+" ×™××™×. ":"××©×š ×”×˜×™×•×œ: "+E.days+" ×™××™×. ")+(T?"×™×© ×ª×—× ×•×ª ×‘×™××™× ×©××¢×‘×¨ ×œ××©×š ×”×˜×™×•×œ ×”×—×“×©. ×”×ª×—× ×•×ª ×™×™×©××¨×•. ":"")+(z?"×”××¡×œ×•×œ, ×”×”×–×× ×•×ª ×•×”××›×¡×•×ª ×œ× ×™×©×ª× ×• ××•×˜×•××˜×™×ª.":""),y.textContent=""}catch(E){_.textContent="",y.textContent=E.message||"×™×© ×œ×‘×“×•×§ ××ª ×ª××¨×™×›×™ ×”×˜×™×•×œ ×•××¡×¤×¨ ×”×™××™×."}}}w.oninput=S,w.onchange=S;let k=()=>{x()&&!l&&h("",!0)};d.querySelector("[data-cancel-trip-details]").onclick=k,(A=d.querySelector("[data-edit-trip-advanced]"))==null||A.addEventListener("click",()=>{l||(k(),r())}),w.onkeydown=E=>{E.key==="Escape"&&(E.preventDefault(),k())},w.onsubmit=E=>b(null,null,function*(){if(E.preventDefault(),!x()||l)return;let R;try{if(R=P(),!w.checkValidity())throw Error("×™×© ×œ×”×–×™×Ÿ ×ª××¨×™×›×™× ×ª×§×™× ×™× ×•××¡×¤×¨ ×™××™× ×©×œ× ×‘×™×Ÿ 1 ×œÖ¾365.")}catch(T){y.textContent=T.message||"×¤×¨×˜×™ ×”×˜×™×•×œ ××™× × ×ª×§×™× ×™×.";return}l=!0,d.setAttribute("aria-busy","true"),y.textContent="×©×•××¨ ×¤×¨×˜×™ ×˜×™×•×œâ€¦";let z=[...w.querySelectorAll("input,select,button")];z.forEach(T=>T.disabled=!0);try{yield n(R),x()&&(c=R,h("×¤×¨×˜×™ ×”×˜×™×•×œ × ×©××¨×•.",!0))}catch(T){x()&&(y.textContent=(T==null?void 0:T.message)||"×”×©××™×¨×” × ×›×©×œ×”. ×”×˜×™×•×˜×” × ×©××¨×” ×›××Ÿ; ××¤×©×¨ ×œ× ×¡×•×ª ×©×•×‘.")}finally{l=!1,x()&&(d.removeAttribute("aria-busy"),z.forEach(T=>T.disabled=!1))}}),S(),g.tripStatus.focus()}return h(),()=>{s=!1}}function qc(t,{now:e=new Date}={}){let n=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Jerusalem",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(e).map(c=>[c.type,c.value])),r=n.year+"-"+n.month+"-"+n.day,i=t.filter(c=>{var d;return c.is_active===!0&&!["completed","postponed","cancelled"].includes((d=c.settings)==null?void 0:d.tripStatus)}),s=i.filter(c=>{var d;return ze((d=c.settings)==null?void 0:d.start)&&c.settings.start>=r}).sort((c,d)=>c.settings.start.localeCompare(d.settings.start)),l=i.filter(c=>{var d;return ze((d=c.settings)==null?void 0:d.start)&&c.settings.start<r}).sort((c,d)=>d.settings.start.localeCompare(c.settings.start));return s[0]||l[0]||i[0]||null}var Dg=new Set(Gt.map(([t])=>t));function Mg(t,{query:e="",activity:n="active",statuses:r=["planning","ready","traveling"]}={}){let i=new Set(r);return al(t,{query:e}).filter(s=>{var l;return(n==="all"||(n==="inactive"?s.is_active===!1:s.is_active===!0))&&i.has(Dg.has((l=s.settings)==null?void 0:l.tripStatus)?s.settings.tripStatus:"unset")})}var zg=0;function Uc({select:t,destinations:e}){var K;if(!t)return()=>{};let n=t.ownerDocument,r=n.defaultView,i=t.closest(".destination-picker");if(!i||typeof((K=r.HTMLDialogElement)==null?void 0:K.prototype.showModal)!="function")return()=>{};let s=!1,l=[],c=-1,d="destination-options-"+ ++zg,p=n.createElement("button");p.type="button",p.id="destination-picker-trigger",p.className="header-control",p.setAttribute("data-open-destination-picker",""),p.setAttribute("aria-haspopup","dialog"),p.setAttribute("aria-expanded","false");let h=n.createElement("span"),m=n.createElement("span");m.textContent="âŒ„",m.setAttribute("aria-hidden","true"),p.append(h,m),p.disabled=t.disabled||!e.length,e.length||p.setAttribute("aria-disabled","true");let w=i.querySelector("label");w&&(w.htmlFor=p.id),t.hidden=!0,i.append(p);let g=n.createElement("dialog");g.className="destination-picker-dialog",g.dir="rtl",g.setAttribute("data-destination-picker-dialog",""),g.setAttribute("aria-label","×—×™×¤×•×© ×•×‘×—×™×¨×ª ×™×¢×“"),g.innerHTML='<div class="destination-picker-heading"><h2>×‘×—×™×¨×ª ×™×¢×“</h2><button type="button" data-close-picker aria-label="×¡×’×™×¨×ª ×‘×—×™×¨×ª ×™×¢×“">Ã—</button></div><label>×©× ×”×™×¢×“<input type="search" placeholder="×”×§×œ×“ ×©× ×œ×—×™×¤×•×©â€¦" autocomplete="off" maxlength="120" role="combobox" aria-autocomplete="list" aria-expanded="true"></label><label>×ª×¦×•×’×ª ×™×¢×“×™×<select data-picker-activity></select></label><details class="picker-status-group"><summary data-picker-status-summary></summary><fieldset><legend>×¡×˜×˜×•×¡ ×”×˜×™×•×œ â€” ××¤×©×¨ ×œ×‘×—×•×¨ ×›××”</legend><div class="picker-status-grid"></div><div class="picker-status-actions"><button type="button" data-picker-all-statuses>×›×œ ×”×¡×˜×˜×•×¡×™×</button><button type="button" data-picker-defaults>×‘×¨×™×¨×ª ××—×“×œ</button></div></fieldset></details><p role="status" aria-live="polite"></p><div class="destination-picker-results" role="listbox" aria-label="×™×¢×“×™× ×ª×•×××™×"></div>',n.body.append(g);let y=g.querySelector("input"),_=g.querySelector("select"),x=g.querySelector("[role=listbox]"),P=g.querySelector("[role=status]");x.id=d,y.setAttribute("aria-controls",d);for(let[N,j]of[["active","×¤×¢×™×œ×™× ×‘×œ×‘×“"],["all","×¤×¢×™×œ×™× ×•×œ× ×¤×¢×™×œ×™×"],["inactive","×œ× ×¤×¢×™×œ×™× ×‘×œ×‘×“"]]){let ee=n.createElement("option");ee.value=N,ee.textContent=j,_.append(ee)}let S=[...Gt,["unset","×˜×¨× ×”×•×’×“×¨"]],k=g.querySelector(".picker-status-grid"),I=g.querySelector(".picker-status-group"),A=g.querySelector("[data-picker-status-summary]");for(let[N,j]of S){let ee=n.createElement("label"),Z=n.createElement("input");ee.className="picker-status-option",Z.type="checkbox",Z.value=N,Z.dataset.pickerStatus=N,ee.append(Z,n.createTextNode(j)),k.append(ee)}let E=[...k.querySelectorAll("input")],R=()=>{_.value="active",E.forEach(N=>N.checked=["planning","ready","traveling"].includes(N.value))},z=()=>{var N;h.textContent=((N=t.selectedOptions[0])==null?void 0:N.textContent)||"×‘×—×™×¨×ª ×™×¢×“"};z();let T=()=>{if(!g.open)return;let N=p.getBoundingClientRect(),j=g.getBoundingClientRect();g.style.left=Math.max(12,Math.min(N.right-j.width,r.innerWidth-j.width-12))+"px",g.style.top=Math.max(12,Math.min(N.bottom+8,r.innerHeight-j.height-12))+"px"},O=()=>{g.open&&g.close()},M=N=>{s||!e.some(j=>j.id===N)||t.disabled||(O(),t.value=N,t.dispatchEvent(new r.Event("change",{bubbles:!0})),s||z())},D=()=>{var j,ee;let N=[...x.children];N.forEach((Z,ne)=>Z.classList.toggle("is-highlighted",ne===c)),c>=0?(y.setAttribute("aria-activedescendant",N[c].id),(ee=(j=N[c]).scrollIntoView)==null||ee.call(j,{block:"nearest"})):y.removeAttribute("aria-activedescendant")},F=()=>{if(s)return;let N=E.filter(j=>j.checked).map(j=>j.value);l=Mg(e,{query:y.value,activity:_.value,statuses:N}),A.textContent=N.length===S.length?"×›×œ ×”×¡×˜×˜×•×¡×™×":N.length?"×¡×˜×˜×•×¡: "+S.filter(([j])=>N.includes(j)).map(([,j])=>j).join(", "):"×¡×˜×˜×•×¡: ×œ× × ×‘×—×¨×• ×¡×˜×˜×•×¡×™×",c=-1,y.removeAttribute("aria-activedescendant"),x.replaceChildren(...l.map((j,ee)=>{var ae;let Z=n.createElement("button");Z.type="button",Z.tabIndex=-1,Z.id=d+"-"+ee,Z.setAttribute("role","option"),Z.setAttribute("aria-selected",String(j.id===t.value)),Z.dataset.pickId=j.id;let ne=n.createElement("strong"),V=n.createElement("small");return ne.textContent=j.destination_name||j.title||"",V.textContent=Kn(j.settings)+(j.is_active===!1?" Â· ×œ× ×¤×¢×™×œ":"")+((ae=j.settings)!=null&&ae.start?" Â· "+j.settings.start:""),Z.append(ne,V),Z.addEventListener("click",()=>M(j.id)),Z})),P.textContent=l.length?l.length+" ×™×¢×“×™× ×ª×•×××™×":"××™×Ÿ ×™×¢×“×™× ×ª×•×××™×. ××¤×©×¨ ×œ×©× ×•×ª ××ª ×”×©× ××• ×”×¡×˜×˜×•×¡×™×.",g.open&&g.getBoundingClientRect().bottom>r.innerHeight-12&&T()},$=()=>{s||t.disabled||n.querySelector("#editor[open]")||(y.value="",R(),I.open=!1,F(),g.showModal(),p.setAttribute("aria-expanded","true"),T(),y.focus())},B=N=>{["ArrowDown","ArrowUp"].includes(N.key)&&l.length?(N.preventDefault(),c=N.key==="ArrowDown"?(c+1)%l.length:c<=0?l.length-1:c-1,D()):N.key==="Enter"&&(N.preventDefault(),l.length&&M(l[c<0?0:c].id))},Y=()=>{p.setAttribute("aria-expanded","false"),!s&&p.isConnected&&p.focus()};return p.addEventListener("click",$),y.addEventListener("input",F),_.addEventListener("change",F),k.addEventListener("change",F),I.addEventListener("toggle",T),g.querySelector("[data-picker-all-statuses]").addEventListener("click",()=>{E.forEach(N=>N.checked=!0),F()}),g.querySelector("[data-picker-defaults]").addEventListener("click",()=>{R(),F()}),y.addEventListener("keydown",B),g.querySelector("[data-close-picker]").addEventListener("click",O),g.addEventListener("close",Y),g.addEventListener("click",N=>{if(N.target!==g)return;let j=g.getBoundingClientRect();(N.clientX<j.left||N.clientX>j.right||N.clientY<j.top||N.clientY>j.bottom)&&O()}),t.addEventListener("change",z),r.addEventListener("resize",T),()=>{s||(s=!0,O(),g.remove(),p.remove(),t.hidden=!1,w&&(w.htmlFor=t.id),t.removeEventListener("change",z),r.removeEventListener("resize",T))}}var il=(t,e,n,r=!1)=>'<button type="button" class="header-control" id="'+t+'" '+(r?'aria-current="page" ':"")+'aria-label="'+n+'">'+je(e)+'<span class="control-label">'+n+"</span></button>",Ng=t=>'<button type="button" class="header-control agent-launcher" id="agent-launcher" aria-label="×¡×•×›×Ÿ ×”×˜×™×•×œ" '+(t?"":'disabled aria-disabled="true" title="×™×© ×œ×‘×—×•×¨ ×˜×™×•×œ ×œ×¤× ×™ ×¤×ª×™×—×ª ×”×¡×•×›×Ÿ."')+">"+je("agentCompass").replace('class="icon"','class="icon agent-compass"')+'<span class="control-label">×¡×•×›×Ÿ ×”×˜×™×•×œ</span></button>';function jg({trip:t=null,destinations:e=[],email:n="",isAdmin:r=!1,homeActive:i=t===null}={}){let s=t?'<button type="button" id="edit-current-destination">×¢×¨×™×›×ª ×”×™×¢×“ ×”× ×‘×—×¨</button>':e.length?'<p class="control-menu-heading">×¢×¨×™×›×ª ×™×¢×“×™×</p>'+e.map(d=>'<button type="button" data-destination-edit="'+G(d.id)+'" aria-label="×¢×¨×™×›×ª ×™×¢×“ '+G(d.destination_name||d.title)+'">'+G(d.destination_name||d.title)+"</button>").join(""):"",l=e.some(d=>d.id===(t==null?void 0:t.id))?t.id:"";return'<div class="destination-tools" role="group" aria-label="×‘×—×™×¨×ª ×˜×™×•×œ ×•×™×¦×™×¨×ª ×™×¢×“">'+('<div class="destination-picker"><select id="client-destination-picker" aria-label="×‘×—×™×¨×ª ×™×¢×“"'+(e.length?"":" disabled")+">"+(l?"":'<option value="" selected>×‘×—×™×¨×ª ×™×¢×“</option>')+e.map(d=>'<option value="'+G(d.id)+'"'+(d.id===l?" selected":"")+">"+G(d.destination_name||d.title)+(d.is_active===!1?" â€” ×œ× ×¤×¢×™×œ":"")+"</option>").join("")+"</select></div>")+'<details class="destination-menu"><summary class="header-control">'+je("trips")+'<span class="control-label">× ×™×”×•×œ ×™×¢×“×™×</span></summary><div>'+il("destinations-home","trips","×”×˜×™×•×œ×™× ×©×œ×™",!t&&i)+'<button type="button" id="search-destinations">×—×™×¤×•×© ×•×¡×™× ×•×Ÿ ×™×¢×“×™×</button>'+il("add-destination","plus","×™×¢×“ ×—×“×©")+s+'</div></details></div><div class="account-tools" role="group" aria-label="×¨×¢× ×•×Ÿ, ×¡×•×›×Ÿ ×•×—×©×‘×•×Ÿ">'+il("refresh","refresh","×¨×¢× ×•×Ÿ")+Ng(t)+'<details class="account-menu"><summary class="header-control" aria-label="×”×—×©×‘×•×Ÿ ×©×œ×™">'+je("user")+'<span class="control-label">×”×—×©×‘×•×Ÿ ×©×œ×™</span></summary><div><div class="banner-account-info"><strong>×”×—×©×‘×•×Ÿ ×©×œ×™</strong><small dir="auto">'+G(n)+'</small></div><button type="button" id="billing-account">×¤×¨×˜×™× ×•×—×‘×™×œ×”</button>'+(r===!0?'<button type="button" id="admin-accounts">× ×™×”×•×œ ××©×ª××©×™× ×•×—×‘×™×œ×•×ª</button>':"")+'<p class="control-menu-heading">× ×ª×•× ×™×</p><button type="button" id="account-data"'+(t?"":' disabled aria-disabled="true"')+'>×’×™×‘×•×™ ×•×™×™×‘×•× ×©×œ ×”×™×¢×“</button><button type="button" id="changepassword">×©×™× ×•×™ ×¡×™×¡××”</button><button type="button" id="signout" class="danger">×™×¦×™××” ××”×—×©×‘×•×Ÿ</button></div></details></div>'}function Bc(r){var i=r,{accountRoot:t,destinationRoot:e}=i,n=Ac(i,["accountRoot","destinationRoot"]);let s=t.ownerDocument.createElement("template");return s.innerHTML=jg(n),e.replaceChildren(s.content.querySelector(".destination-tools")),t.replaceChildren(s.content.querySelector(".account-tools")),Uc({select:e.querySelector("#client-destination-picker"),destinations:n.destinations||[]})}function ol(t){let e=()=>{throw Error("× ×“×¨×© ×§×™×©×•×¨ HTTPS ×¦×™×‘×•×¨×™ × ×§×™, ×œ×œ× ×¤×¨×˜×™ ×›× ×™×¡×”, ×¤×¨××˜×¨×™×, fragment ××• ×§×™×©×•×¨ ×œ× ×™×”×•×œ ×”×–×× ×”.")};if(typeof t!="string"||t.length>2e3||t!==t.trim()||/[\s\\?#%]|[^\x21-\x7e]/.test(t)||!/^https:\/\/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}(?::443)?(?:\/[^\s\\?#]*)?$/i.test(t))return e();let n;try{n=new URL(t)}catch(i){return e()}if(n.username||n.password||n.hostname.length>253||/(?:^|\.)(?:localhost|local|internal|test|invalid|example|onion)$/.test(n.hostname))return e();let r;try{r=decodeURIComponent(n.pathname)}catch(i){return e()}return/%|[\x00-\x20\\?#]/.test(r)||/(?:^|[/_.-])(?:token|session|auth|login|account|manage|checkout|payment|reset|secret|apikey|api-key)(?:[/_.-]|$)/i.test(r)||/[a-z0-9_-]{48,}/i.test(r)?e():n.href}function mt({root:t,groups:e,state:n={},prefix:r="section",label:i="×§×˜×’×•×¨×™×•×ª ×¤× ×™××™×•×ª",onSelect:s}){if(!e.length)return;let l=t.ownerDocument,c=l.createElement("div");c.className="section-tabs",c.setAttribute("role","tablist"),c.setAttribute("aria-label",i),c.dir="rtl";let d=e.flatMap(w=>w.nodes).find(Boolean);t.insertBefore(c,d||null);let p=c,h=e.map(w=>{let g=l.createElement("div");g.className="section-tab-panel",g.id=r+"-panel-"+w.id,g.setAttribute("role","tabpanel"),g.setAttribute("aria-labelledby",r+"-tab-"+w.id),g.tabIndex=0,t.insertBefore(g,p.nextSibling),p=g,g.append(...w.nodes.filter(Boolean));let y=l.createElement("button");return y.type="button",y.id=r+"-tab-"+w.id,y.dataset.sectionTab=w.id,y.setAttribute("role","tab"),y.setAttribute("aria-controls",g.id),y.textContent=w.label,c.append(y),{group:w,panel:g,button:y}}),m=w=>{n.selected=h.some(g=>g.group.id===w)?w:h[0].group.id;for(let g of h){let y=g.group.id===n.selected;g.panel.hidden=!y,g.button.setAttribute("aria-selected",String(y)),g.button.tabIndex=y?0:-1}s==null||s(n.selected)};return h.forEach((w,g)=>{w.button.onclick=()=>m(w.group.id),w.button.onkeydown=y=>{let _;if(y.key==="ArrowLeft")_=(g+1)%h.length;else if(y.key==="ArrowRight")_=(g+h.length-1)%h.length;else if(y.key==="Home")_=0;else if(y.key==="End")_=h.length-1;else return;y.preventDefault(),m(h[_].group.id),h[_].button.focus()}}),m(n.selected),m}var sl=t=>{let e=t.ownerDocument.defaultView;return e.innerWidth<600?2:e.innerHeight<760?4:6};function Ce({container:t,items:e,state:n={},pageSize:r=sl(t)}){var h;if(e.length<=r){n.page=0,e.forEach(m=>m.hidden=!1);return}e.forEach(m=>m.dataset.pagedItem="");let i=t.ownerDocument,s=i.createElement("div");s.className="item-pages",s.setAttribute("role","group"),s.setAttribute("aria-label","×“×¤×“×•×£ ×‘×¨×©×™××”");let l=i.createElement("button"),c=i.createElement("button"),d=i.createElement("span");l.type=c.type="button",l.dataset.pagePrev="",c.dataset.pageNext="",l.textContent="×”×§×•×“×",c.textContent="×”×‘×",d.tabIndex=-1,d.setAttribute("aria-live","polite"),s.append(l,d,c),((h=e[0])==null?void 0:h.parentNode)===t?t.insertBefore(s,e[0]):t.prepend(s);let p=(m=!1)=>{let w=Math.ceil(e.length/r);n.page=Math.max(0,Math.min(Number.isInteger(n.page)?n.page:0,w-1)),e.forEach((g,y)=>g.hidden=y<n.page*r||y>=(n.page+1)*r),d.textContent="×¢××•×“ "+(n.page+1)+" ××ª×•×š "+w+" Â· "+e.length+" ×¤×¨×™×˜×™×",l.disabled=n.page===0,c.disabled=n.page===w-1,m&&d.focus({preventScroll:!0})};l.onclick=()=>{n.page--,p(!0)},c.onclick=()=>{n.page++,p(!0)},p()}function $c({container:t,items:e,state:n={}}){e.forEach(d=>d.dataset.pagedItem="");let r=[...new Set(e.map(d=>d.dataset.day))].sort((d,p)=>Number(d)-Number(p));if(!r.length)return;r.includes(n.day)||(n.day=r[0]);let i=t.ownerDocument,s=i.createElement("label");s.className="day-picker",s.textContent="×™×•× ×‘×ª×•×›× ×™×ª";let l=i.createElement("select");l.dataset.dayPicker="";for(let d of r){let p=i.createElement("option");p.value=d,p.textContent="×™×•× "+d,l.append(p)}l.value=n.day,s.append(l),t.prepend(s);let c=()=>{var d;n.day=l.value,(d=t.querySelector(":scope > .item-pages"))==null||d.remove(),e.forEach(p=>p.hidden=p.dataset.day!==n.day),Ce({container:t,items:e.filter(p=>p.dataset.day===n.day),state:n.pages||(n.pages={})})};l.onchange=()=>{n.pages={},c()},c()}var Hc={unknown:"×˜×¨× ×“×•×•×—",booked:"×”×–×× ×ª×™ â€” ×“×™×•×•×— ×©×œ×™",not_booked:"×œ× ×”×–×× ×ª×™",later:"×××©×™×š ××—×¨ ×›×š"},bo=t=>t?new Date(t).toLocaleString("he-IL"):"×œ× × ×‘×“×§ ×™×“× ×™×ª";function Fc(t){return{call:(e,n)=>b(null,null,function*(){let{data:r,error:i}=yield t.rpc("trip_booking_source",{p_action:e,p_data:n});if(i)throw Error(i.code==="40001"?"×”× ×ª×•× ×™× ×”×©×ª× ×•; ×¨×¢× ×Ÿ ××ª ×”×˜×™×•×œ ×•×¤×ª×— ×©×•×‘.":"×”×¤×¢×•×œ×” × ×“×—×ª×”. ×‘×“×•×§ ×›× ×™×¡×” ×¤×¢×™×œ×”, ×¤×¨×˜×™ ××§×•×¨ ×•×§×™×©×•×¨ ×¦×™×‘×•×¨×™ × ×§×™.");return r})}}function Vc({root:t,dialog:e,trip:n,api:r,onRefresh:i}){let s=t.ownerDocument,l=!0,c=0,d={sources:[]},p=!1,h=null,m=!1,w={},g=(k,I={})=>r.call(k,J({tripId:n.id},I)),y=k=>{l&&(t.querySelector("[data-source-status]").textContent=k)},_=k=>{m&&e.querySelector("form")===h&&k.preventDefault()};e.addEventListener("cancel",_);function x(){return b(this,null,function*(){let k=++c;try{let I=yield g("list");l&&k===c&&(d=I,P())}catch(I){y(I.message)}})}function P(){t.innerHTML='<section><h2>××§×•×¨×•×ª ×•×“×™×•×•×—×™ ×”×–×× ×”</h2><p>×›××Ÿ ×©×•××¨×™× ×§×™×©×•×¨ ×œ×¡×¤×§ ×•××ª×¢×“×™× ××” ×§×¨×” ××—×¨×™ ×”×”××©×š ×œ××ª×¨ ×©×œ×•. ××™×Ÿ ×—×™×‘×•×¨ ××¡×—×¨×™, ×‘×“×™×§×ª ××œ××™, ×‘×™×¦×•×¢ ×”×–×× ×” ××• ×’×‘×™×™×” ×‘××¤×œ×™×§×¦×™×”.</p><p>×´× ×‘×“×§ ×™×“× ×™×ª×´ ×”×•× ×“×™×•×•×— ×©×œ×š ×©×§×¨××ª ××ª ×”×¢××•×“, ×•×œ× ××™××•×ª ××•×œ ×”×¡×¤×§. ××—×™×¨ ×”×•× ××™× ×“×™×§×¦×™×” ×œ××•×¢×“ ×”×‘×“×™×§×” ×‘×œ×‘×“; ×™×© ×œ×‘×“×•×§ ×©×•×‘ ××—×™×¨, ×–××™× ×•×ª ×•×ª× ××™× ×œ×¤× ×™ ×¨×›×™×©×”.</p><button type="button" data-refresh-sources>×¨×¢× ×Ÿ ××”×©×¨×ª</button><p role="status" data-source-status></p><div data-source-cards></div></section>';let k=t.querySelector("[data-source-cards]"),I=n.items.filter(E=>E.kind==="booking");k.innerHTML=I.length?I.map(E=>{let R=d.sources.find(T=>T.bookingId===E.id),z="";if(R)try{z=ol(R.url)}catch(T){}return'<article style="padding:12px 0;border-bottom:1px solid #51485f"><h3>'+G(E.payload.name)+"</h3><p>××¦×‘ ×©×”×•×–×Ÿ ×‘×˜×™×•×œ: "+G(E.payload.status||"×œ×‘×“×™×§×”")+"</p>"+(R?"<p>×¡×¤×§: "+G(R.provider)+" Â· ×§×™×©×•×¨ ×©×”×•×–×Ÿ ×¢×œ ×™×“×™ ×”××©×ª××© Â· ×œ× ××™××•×ª ××•×œ ×”×¡×¤×§</p><p>×‘×“×™×§×” ×™×“× ×™×ª ×©×œ ×”×¢××•×“: "+G(bo(R.checkedAt))+"</p><p>××—×™×¨ ×©×“×•×•×—: "+(R.amount===null?"×œ× ×™×“×•×¢":G(R.amount)+" "+G(R.currency)+" Â· "+G(R.basis))+"</p>"+(R.terms?'<details><summary>×ª× ××™× ×©×”×•×–× ×• ×™×“× ×™×ª</summary><p style="white-space:pre-wrap">'+G(R.terms)+"</p></details>":"")+'<div class="row">'+(z?'<a data-open-source="'+G(E.id)+'" href="'+G(z)+'" target="_blank" rel="noopener noreferrer">×¤×ª×— ××¦×œ ×”×¡×¤×§ â†—</a>':"<span>×”×§×™×©×•×¨ ××™× ×• ××ª××™× ×œ×¤×ª×™×—×”; ×¢×¨×•×š ××§×•×¨.</span>")+'<button type="button" data-edit-source="'+G(E.id)+'">×¢×¨×•×š ××§×•×¨</button></div><p>×‘×§×©×•×ª ×œ×¤×ª×™×—×ª ×§×™×©×•×¨: '+G(R.openCount||0)+". ×œ×—×™×¦×” ××™× ×” ×”×•×›×—×” ×œ×”×–×× ×”, ×œ×ª×©×œ×•× ××• ×œ×¢××œ×”.</p><details><summary>×“×™×•×•×—×™× ×œ××—×¨ ×”×”××©×š ×œ×¡×¤×§ â€” ×¢×©×¨ ×”×‘×§×©×•×ª ×”××—×¨×•× ×•×ª</summary>"+(R.attempts||[]).map(T=>{var O;return'<div style="padding:10px 0"><p>×‘×§×©×ª ×¤×ª×™×—×”: '+G(bo(T.requestedAt))+" Â· ×’×¨×¡×ª ××§×•×¨ "+G((O=T.sourceVersion)!=null?O:"?")+"</p><p>×“×™×•×•×— × ×•×›×—×™: "+G(Hc[T.outcome])+(T.reportedAt?" Â· "+G(bo(T.reportedAt)):"")+'</p><label>××” ×§×¨×” ××¦×œ ×”×¡×¤×§?<select data-outcome="'+G(T.id)+'"><option value="">×‘×—×¨ ×“×™×•×•×—</option>'+["booked","not_booked","later"].map(M=>'<option value="'+M+'">'+G(Hc[M])+"</option>").join("")+'</select></label><button type="button" data-report="'+G(T.id)+'">×©××•×¨ ×“×™×•×•×—</button></div>'}).join("")+"</details>":'<p>×œ× ×”×•×’×“×¨ ××§×•×¨ ×œ×”×¦×¢×” ×”×–×•. ××™×Ÿ ×‘×“×™×§×ª ×¡×¤×§ ××• ××—×™×¨.</p><button type="button" data-edit-source="'+G(E.id)+'">×”×•×¡×£ ××§×•×¨ ×•×§×™×©×•×¨</button>')+'<p class="muted">×“×™×•×•×— ×´×”×–×× ×ª×™×´ ××™× ×• ××©× ×” ××ª ×”×”×–×× ×” ××• ×”×ª×©×œ×•× ×‘×˜×™×•×œ. ××¤×©×¨ ×œ×¢×“×›×Ÿ ××•×ª× ×‘× ×¤×¨×“ ××• ×œ×”×¢×œ×•×ª ××™×©×•×¨ ×‘×œ×©×•× ×™×ª ××™×©×•×¨×™ ×œ×™× ×”. ××™×Ÿ ×¢××œ×” ××• ×”×–×× ×” ×××•××ª×ª ××•×œ ×¡×¤×§ ×‘×©×œ×‘ ×–×”.</p></article>'}).join(""):"<p>××™×Ÿ ×¢×“×™×™×Ÿ ×¨×©×•××•×ª ×”×–×× ×” ×‘×˜×™×•×œ. ×”×•×¡×£ ×”×–×× ×” ×‘×œ×©×•× ×™×ª ×”×–×× ×•×ª ×•××– ×”×•×¡×£ ×œ×” ××§×•×¨.</p>";let A=[...k.querySelectorAll(":scope > article")];A.length&&Ce({container:k,items:A,state:w}),t.querySelector("[data-refresh-sources]").onclick=()=>i?i():x(),t.querySelectorAll("[data-edit-source]").forEach(E=>E.onclick=()=>S(I.find(R=>R.id===E.dataset.editSource))),t.querySelectorAll("[data-open-source]").forEach(E=>{let R=d.sources.find(T=>T.bookingId===E.dataset.openSource),z=s.defaultView.crypto.randomUUID();E.onclick=T=>{if(!l||p){T.preventDefault();return}p=!0,g("open",{bookingId:R.bookingId,expectedVersion:R.version,requestId:z}).then(()=>b(null,null,function*(){l&&(yield x(),y("×‘×§×©×ª ×¤×ª×™×—×ª ×”×§×™×©×•×¨ ×ª×•×¢×“×”. ×›×©×ª×—×–×•×¨, ××¤×©×¨ ×œ×“×•×•×— ××” ×§×¨×” ××¦×œ ×”×¡×¤×§."))})).catch(O=>y("×‘×§×©×ª ×”×¤×ª×™×—×” × ×©×œ×—×” ×œ×“×¤×“×¤×Ÿ, ××š ×”×ª×™×¢×•×“ ×œ× ××•×©×¨: "+O.message)).finally(()=>{p=!1})}}),t.querySelectorAll("[data-report]").forEach(E=>{let R=d.sources.find(T=>{var O;return(O=T.attempts)==null?void 0:O.some(M=>M.id===E.dataset.report)}),z=R.attempts.find(T=>T.id===E.dataset.report);E.onclick=()=>b(null,null,function*(){if(p||!l)return;let T=[...t.querySelectorAll("[data-outcome]")].find(O=>O.dataset.outcome===z.id).value;if(!T){y("×‘×—×¨ ××” ×§×¨×” ××¦×œ ×”×¡×¤×§ ×œ×¤× ×™ ×©××™×¨×ª ×”×“×™×•×•×—");return}p=!0,E.disabled=!0;try{yield g("report",{attemptId:z.id,expectedVersion:z.version,outcome:T,requestId:s.defaultView.crypto.randomUUID()}),l&&(yield x(),y("×”×“×™×•×•×— × ×©××¨ ×›×”×¦×”×¨×ª ×œ×§×•×— ×‘×œ×‘×“; ×”×”×–×× ×” ×•×”×ª×©×œ×•× ×œ× ×©×•× ×•."))}catch(O){y(O.message)}finally{p=!1,l&&E.isConnected&&(E.disabled=!1)}})})}function S(k){var T;if(p||!k)return;let I=d.sources.find(O=>O.bookingId===k.id),A=s.defaultView.crypto.randomUUID();e.innerHTML="<form><h2>××§×•×¨ ×œ×”×¦×¢×”: "+G(k.payload.name)+'</h2><p>×”××§×•×¨ ×”×•× ×§×™×©×•×¨ ×©×”×œ×§×•×— ××–×™×Ÿ. ××™×Ÿ ××™××•×ª ×¡×¤×§, ×—×™×‘×•×¨ ××¡×—×¨×™ ××• ×§×™×©×•×¨ ×©×•×ª×¤×™×.</p><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,230px),1fr));gap:10px"><label>×©× ×¡×¤×§ *<input name="provider" required maxlength="100" value="'+G((I==null?void 0:I.provider)||"")+'"></label><label>×§×™×©×•×¨ ×¦×™×‘×•×¨×™ × ×§×™ *<input name="url" type="url" required maxlength="2000" dir="ltr" value="'+G((I==null?void 0:I.url)||"")+'"></label><label>××—×™×¨ ××™× ×“×™×§×˜×™×‘×™ ×‘××˜×‘×¢ ××§×•×¨<input name="amount" type="number" min="0" max="1000000000" step="0.01" value="'+G((T=I==null?void 0:I.amount)!=null?T:"")+'"></label><label>××˜×‘×¢<select name="currency"><option value="">×œ× ×™×“×•×¢</option>'+["ILS","USD","EUR","GBP","THB","JPY","CAD","AUD","CHF","VND"].map(O=>"<option "+((I==null?void 0:I.currency)===O?"selected":"")+">"+O+"</option>").join("")+'</select></label><label>××” ×›×œ×•×œ ×‘××—×™×¨<input name="basis" maxlength="500" value="'+G((I==null?void 0:I.basis)||"")+'"></label><label>×ª× ××™× ××¨×›×–×™×™× ×©×”×•×–× ×• ×™×“× ×™×ª<textarea name="terms" maxlength="2000">'+G((I==null?void 0:I.terms)||"")+'</textarea></label></div><p>×™×© ×œ×”×–×™×Ÿ HTTPS ×¢× ×©× ××ª×—× ×¦×™×‘×•×¨×™ ×•× ×ª×™×‘ ×¤×©×•×˜ ×‘×× ×’×œ×™×ª, ×œ×œ× ×¤×¨××˜×¨×™×, fragment, ×¤×¨×˜×™ ×›× ×™×¡×” ××• ×§×™×©×•×¨ ×œ× ×™×”×•×œ ×”×–×× ×”. ××™×Ÿ ×‘×“×™×§×ª DNS ××• ×’×œ×™×©×” ××•×˜×•××˜×™×ª ×œ×›×ª×•×‘×ª. ×”×–×Ÿ ××—×™×¨ ×¨×§ ×›×©×™×“×•×¢×™× ×”××˜×‘×¢ ×•×”×ª×›×•×œ×”.</p><label><input type="checkbox" name="manualChecked">×¤×ª×—×ª×™ ×•×‘×“×§×ª×™ ×›×¢×ª ××ª ×”×¢××•×“ ×‘×¢×¦××™; ×–×• ××™× ×” ×‘×“×™×§×” ×©×œ ×”××¤×œ×™×§×¦×™×” ××•×œ ×”×¡×¤×§.</label><p>×‘×“×™×§×” ×§×•×“××ª: '+G(bo(I==null?void 0:I.checkedAt))+'. ××—×™×¨ ××™× ×• ×¡×›×•× ×¡×•×¤×™ ××• ××™×©×•×¨ ×–××™× ×•×ª; ×œ× ××ª×‘×¦×¢×ª ×”××¨×” ×œ×©×§×œ×™× ××• ×¢×“×›×•×Ÿ ×›×¡×¤×™ ×”×”×–×× ×”.</p><div class="row"><button type="submit">×©××•×¨ ××§×•×¨</button><button type="button" data-close-source>×¡×’×•×¨ ×œ×œ× ×©××™×¨×”</button></div><p role="status" data-source-editor-status></p></form>';let E=e.querySelector("form");h=E;let R=()=>l&&e.open&&e.querySelector("form")===E&&h===E,z=O=>{R()&&(E.querySelector("[data-source-editor-status]").textContent=O)};E.oninput=()=>{A=s.defaultView.crypto.randomUUID()},E.querySelector("[data-close-source]").onclick=()=>{m||e.close()},E.onsubmit=O=>b(null,null,function*(){var $;if(O.preventDefault(),!R()||m||!E.reportValidity())return;let M=new s.defaultView.FormData(E),D={provider:M.get("provider").trim(),url:M.get("url"),manualChecked:E.elements.manualChecked.checked,amount:M.get("amount")===""?null:Number(M.get("amount")),currency:M.get("currency"),basis:M.get("basis").trim(),terms:M.get("terms").trim()};try{if(D.url=ol(D.url),D.amount!==null&&(!D.manualChecked||!D.currency||!D.basis))throw Error("××—×™×¨ ××—×™×™×‘ ×‘×“×™×§×” ×™×“× ×™×ª ×›×¢×ª, ××˜×‘×¢ ×•×ª×™××•×¨ ×”×ª×›×•×œ×”.")}catch(B){z(B.message);return}m=!0;let F=[...E.querySelectorAll("input,select,textarea,button")];F.forEach(B=>B.disabled=!0);try{yield g("save",{bookingId:k.id,bookingVersion:k.version,expectedVersion:($=I==null?void 0:I.version)!=null?$:null,requestId:A,fields:D}),R()&&(e.close(),yield x(),y("×”××§×•×¨ × ×©××¨ ×›××™×“×¢ ×©×”×•×–×Ÿ ×¢×œ ×™×“×š; ××™×Ÿ ××™××•×ª ××•×œ ×¡×¤×§."))}catch(B){z(B.message)}finally{m=!1,R()&&F.forEach(B=>B.disabled=!1)}}),e.showModal()}return t.innerHTML='<section><h2>××§×•×¨×•×ª ×•×“×™×•×•×—×™×</h2><p data-source-status role="status">×˜×•×¢×Ÿ ××§×•×¨×•×ª...</p></section>',x(),()=>{l=!1,c++,e.removeEventListener("cancel",_),h&&e.open&&e.querySelector("form")===h&&e.close(),h=null}}var yo=t=>({×ª××™×œ× ×“:"Thailand",×•×™×™×˜× ××:"Vietnam",×•×™××˜× ×:"Vietnam",×•×™×™×˜× ×:"Vietnam"})[t]||t||"Thailand";function vo(t,e="Thailand"){let n="";try{let r=new URL(t.url);["www.google.com","maps.google.com","google.com"].includes(r.hostname)&&r.pathname.startsWith("/maps")&&(n=r.searchParams.get("query")||r.searchParams.get("destination")||r.searchParams.get("q")||"")}catch(r){}return{label:t.place,query:n||t.place+" "+yo(e)}}var qg=[{aliases:["×¦×³×× ×’ ×××™","×¦â€™×× ×’ ×××™","×¦×× ×’ ×××™","chiang mai"],lat:18.7883,lng:98.9853,query:"Chiang Mai, Thailand"},{aliases:["chom thong","×¦×³×•× ×ª×•× ×’"],lat:18.419,lng:98.68,query:"Chom Thong, Chiang Mai, Thailand"},{aliases:["×“×•×™ ××™× ×ª× ×•×Ÿ","doi inthanon"],lat:18.588,lng:98.487,query:"Doi Inthanon National Park, Thailand"},{aliases:["××” ×”×•× ×’ ×¡×•×Ÿ","mae hong son"],lat:19.3003,lng:97.9654,query:"Mae Hong Son, Thailand"},{aliases:["××” ×¡×¨×™×× ×’","×××” ×¡×¨×™×× ×’","mae sariang"],lat:18.162,lng:97.933,query:"Mae Sariang, Thailand"},{aliases:["×¤××™","pai"],lat:19.359,lng:98.441,query:"Pai, Mae Hong Son, Thailand"},{aliases:["×¨×™×™×œ×™","railay"],lat:8.012,lng:98.837,query:"Railay Beach, Krabi, Thailand"},{aliases:["××™×™ ×”×•× ×’","hong island"],lat:8.079,lng:98.68,query:"Hong Island, Krabi, Thailand"},{aliases:["××• × ×× ×’","ao nang"],lat:8.032,lng:98.824,query:"Ao Nang, Krabi, Thailand"},{aliases:["×§×¨××‘×™","krabi"],lat:8.063,lng:98.916,query:"Krabi, Thailand"},{aliases:["×‘× ×’×§×•×§","bangkok"],lat:13.7563,lng:100.5018,query:"Bangkok, Thailand"}];function ll(t,e){return t===void 0||e===void 0||String(t).trim()===""||String(e).trim()===""?null:(t=Number(t),e=Number(e),Number.isFinite(t)&&Number.isFinite(e)&&Math.abs(t)<=90&&Math.abs(e)<=180?{lat:t,lng:e}:null)}function Ug(t,e="Thailand"){var s,l;let n=ll(t.lat,t.lng);if(n)return se(J({},n),{precision:"exact"});try{let c=new URL(t.url),d=(s=c.searchParams.get("query"))!=null?s:c.searchParams.get("q");if(d&&d.toLowerCase().includes("suvarnabhumi"))return{lat:13.69,lng:100.75,precision:"area",query:"Suvarnabhumi Airport, Thailand"};if(d&&/^-?\d+(?:\.\d+)?\s*,\s*-?\d+(?:\.\d+)?$/.test(d)){let p=ll(...d.split(","));if(p)return se(J({},p),{precision:"exact"})}}catch(c){}if(yo(e)!=="Thailand")return null;let r=String((l=t.place)!=null?l:"").toLowerCase(),i=qg.find(c=>c.aliases.some(d=>r.includes(d)));return i?{lat:i.lat,lng:i.lng,query:i.query,precision:"area"}:null}function wo(t,e="Thailand"){return t.filter(n=>n.kind==="stop").map(n=>{let r=Ug(n.payload,e);return r?se(J({},r),{id:n.id,day:n.payload.day,label:n.payload.place,kind:n.payload.kind,destination:vo(n.payload,e)}):null}).filter(Boolean).sort((n,r)=>n.day-r.day)}function Zc(t){let e=new Map;for(let n of t){let r=n.lat.toFixed(6)+","+n.lng.toFixed(6);e.has(r)||e.set(r,{lat:n.lat,lng:n.lng,points:[]}),e.get(r).points.push(n)}return[...e.values()]}function _o(t){var s;let e=t.precision==="exact"&&ll(t.lat,t.lng),n=e?t.lat+","+t.lng:((s=t.destination)==null?void 0:s.query)||t.query||t.label,r=new URL("https://www.google.com/maps/dir/");r.searchParams.set("api","1"),r.searchParams.set("destination",n),r.searchParams.set("dir_action","navigate");let i=new URL("https://waze.com/ul");return e?(i.searchParams.set("ll",n),i.searchParams.set("navigate","yes")):i.searchParams.set("q",n),{google:r.href,waze:i.href}}var Jn=t=>Array.from(String(t!=null?t:"")).filter(e=>{let n=e.codePointAt(0);return[9,10,13].includes(n)||n>=32&&n<=55295||n>=57344&&n<=65533||n>=65536&&n<=1114111}).join("").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"})[e]);function Wc(t,e){return t.items.filter(n=>n.kind==="stop"&&e.includes(n.payload.day)).sort((n,r)=>n.payload.day-r.payload.day||String(n.payload.place).localeCompare(String(r.payload.place),"he")||n.id.localeCompare(r.id)).map(n=>n.id)}function Gc(t,e={}){var I;let n=structuredClone(t);if(!n||!Array.isArray(n.items)||n.items.length>1e4||!Number.isInteger((I=n.settings)==null?void 0:I.days)||n.settings.days<1||n.settings.days>365||!Number.isFinite(Date.parse(n.capturedAt))||!/^[a-f0-9]{12}$/.test(n.revision))throw Error("×ª××•× ×ª ×”×˜×™×•×œ ××™× ×” ×ª×§×™× ×”");let r=Array.isArray(e.days)?e.days.slice():e.days;if(!Array.isArray(r)||!r.length||new Set(r).size!==r.length||r.some(A=>!Number.isInteger(A)||A<1||A>n.settings.days))throw Error("×‘×—×¨ ×™××™× ×ª×§×™× ×™×");r.sort((A,E)=>A-E);let i=n.items.filter(A=>A.kind==="stop"&&r.includes(A.payload.day)),s=e.order;if(!Array.isArray(s)||s.length!==i.length||new Set(s).size!==s.length||s.some(A=>!i.some(E=>E.id===A)))throw Error("×™×© ×œ×§×‘×•×¢ ×¡×“×¨ ×œ×›×œ ×”×ª×—× ×•×ª ×©× ×‘×—×¨×•");let l=s.map(A=>i.find(E=>E.id===A));if(l.some((A,E)=>E&&A.payload.day<l[E-1].payload.day))throw Error("×¡×“×¨ ×”×™××™× ××™× ×• ×ª×§×™×Ÿ");let c=n.items.filter(A=>A.kind==="booking").map(A=>A.payload.ref).filter(A=>typeof A=="string"&&A.length>=3),d=A=>{let E=String(A!=null?A:"").slice(0,1e4);if(!e.includeReferences)for(let R of c)E=E.split(R).join("[××¡××›×ª× ×”×•×¡×¨×”]");return E=E.split(/\r?\n/).map(R=>/\b(?:password|api[ _-]?key|token|secret|authorization)\b|×¡×™×¡××”|××¤×ª×—\s*API/i.test(R)?"[×©×•×¨×” ×¨×’×™×©×” ×”×•×¡×¨×”]":R).join(`
`).replace(/https?:\/\/[^\s<>]+/gi,"[×§×™×©×•×¨ ××§×•×¨×™ ×”×•×¡×¨]").replace(/\b(?:\d[ -]?){13,19}\b/g,"[××¡×¤×¨ ××¨×•×š ×”×•×¡×¨]"),e.includeContacts||(E=E.replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi,"[×“×•××´×œ ×”×•×¡×¨]").replace(/\+?\d[\d ().-]{7,}\d/g,R=>/^\d{4}-\d{2}-\d{2}$/.test(R.trim())||R.replace(/\D/g,"").length<9?R:"[×˜×œ×¤×•×Ÿ ×”×•×¡×¨]")),Jn(E)},p=new Map(wo(l,n.destination_name).filter(A=>A.precision==="exact").map(A=>[A.id,A])),h=l.flatMap(A=>p.has(A.id)?[se(J({},p.get(A.id)),{label:d(A.payload.place)})]:[]),m=l.filter(A=>!p.has(A.id)).map(A=>({name:String(A.payload.place),day:A.payload.day,reason:"××™×Ÿ ××™×§×•× ××“×•×™×§; × ×§×•×“×” ××–×•×¨×™×ª ××• ×—×¡×¨×” ××™× ×” ××™×•×¦××ª ×œ× ×™×•×•×˜"})),w=ze(n.settings.start)?n.settings.start:null,g=A=>w?new Date(Date.parse(w+"T00:00:00Z")+(A-1)*864e5).toISOString().slice(0,10):null,y=ga(n.settings.timeZone)?n.settings.timeZone:"Asia/Jerusalem (×‘×¨×™×¨×ª ××—×“×œ; ×œ× ×”×•×’×“×¨ ×‘×˜×™×•×œ)",_=A=>e.includeNotes&&A.notes?'<p class="note">'+d(A.notes)+"</p>":"",x="";for(let A of r){let E=l.filter(R=>R.payload.day===A);if(x+='<section id="day-'+A+'"><h2>×™×•× '+A+(g(A)?" Â· "+g(A):" Â· ×ª××¨×™×š ×œ× ×”×•×’×“×¨")+"</h2>",e.program!==!1&&(x+="<h3>×ª×•×›× ×™×ª ×”×™×•×</h3>"+(E.length?"<ol>"+E.map(R=>{let z=R.payload,T=p.get(R.id);return"<li><strong>"+d(z.place)+"</strong>"+(z.kind?" Â· "+d(z.kind):"")+(T?"<p>×§×•××•×¨×“×™× ×˜×•×ª ×©×”×•×–× ×• ×‘×˜×™×•×œ: <bdi>"+T.lat+", "+T.lng+'</bdi> Â· <a href="https://www.google.com/maps/dir/?api=1&amp;destination='+T.lat+","+T.lng+'" rel="noreferrer noopener">×§×™×©×•×¨ × ×™×•×•×˜ â€” ×“×•×¨×© ×¨×©×ª</a></p>':"<p>×œ×œ× ××™×§×•× ××“×•×™×§; ×™×© ×œ×××ª ×›×ª×•×‘×ª.</p>")+_(z)+"</li>"}).join("")+"</ol>":"<p>××™×Ÿ ×ª×—× ×•×ª ×©××•×¨×•×ª ×œ×™×•× ×–×”.</p>")),e.lodging){let R=n.items.filter(z=>z.kind==="booking"&&z.payload.type==="×œ×™× ×”"&&["×”×•×–××Ÿ","×©×•×œ×"].includes(z.payload.status)&&g(A)&&ze(z.payload.checkInDate)&&ze(z.payload.checkOutDate)&&z.payload.checkInDate<=g(A)&&g(A)<z.payload.checkOutDate);x+="<h3>×œ×™× ×” ×¨×©×•××”</h3>"+(R.length?R.map(z=>"<article><strong>"+d(z.payload.name)+"</strong><p>"+Jn(z.payload.checkInDate)+" ×¢×“ "+Jn(z.payload.checkOutDate)+" Â· ××¦×‘ ×©×”×•×–×Ÿ: "+d(z.payload.status)+"</p><p>×“×™×•×•×— ×‘×˜×™×•×œ; ××™×Ÿ ××™××•×ª ××•×œ ×¡×¤×§ ××• ×”×‘×˜×—×” ×©×”×”×–×× ×” ×‘×ª×•×§×£.</p>"+(e.includeReferences&&z.payload.ref?"<p>××¡××›×ª×: "+d(z.payload.ref)+"</p>":"")+_(z.payload)+"</article>").join(""):"<p>×œ× × ××¦××” ×œ×™× ×” ×¨×©×•××” ×¢× ×˜×•×•×— ×ª××¨×™×›×™× ××ª××™×. ××™×Ÿ ×‘×›×š ×”×•×›×—×” ×©××™×Ÿ ×”×–×× ×”.</p>")}x+="</section>"}e.tasks&&(x+="<section><h2>××©×™××•×ª ×‘×–××Ÿ ×”×™×¦×•×</h2><ul>"+n.items.filter(A=>A.kind==="task").map(A=>"<li>"+d(A.payload.title)+" Â· "+(A.payload.done?"×”×•×©×œ××”":"×¤×ª×•×—×”")+(A.payload.dueDate?" Â· ××•×¢×“ "+d(A.payload.dueDate):"")+_(A.payload)+"</li>").join("")+"</ul></section>"),e.gear&&(x+="<section><h2>×¦×™×•×“ ×‘×–××Ÿ ×”×™×¦×•×</h2><ul>"+n.items.filter(A=>A.kind==="gear").map(A=>"<li>"+d(A.payload.name)+" Â· "+d(A.payload.status||"××¦×‘ ×œ× ×™×“×•×¢")+_(A.payload)+"</li>").join("")+"</ul></section>");let S=`<!doctype html><html lang="he" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; base-uri 'none'; form-action 'none'"><meta name="referrer" content="no-referrer"><title>×¢×¨×›×ª ×©×˜×— Â· `+d(n.destination_name)+"</title><style>body{font:17px/1.6 system-ui,sans-serif;max-width:900px;margin:auto;padding:20px;color:#172b35;background:#fff;overflow-wrap:anywhere}section{border-top:1px solid #ccc;margin-top:20px}li,article{margin:12px 0}h1,h2,h3{line-height:1.3}.note{white-space:pre-wrap}a{color:#064b85}@media print{body{font-size:12pt;padding:0}h2,h3{break-after:avoid}li,article{break-inside:avoid}a{color:#000}}</style></head><body><h1>"+d(n.destination_name)+" â€” ×¢×¨×›×ª ×©×˜×—</h1><p>×”×•×¤×§: "+Jn(n.capturedAt)+" Â· ×’×¨×¡×” "+Jn(n.revision)+" Â· ××–×•×¨ ×–××Ÿ: "+Jn(y)+"</p><p>"+"×¢×•×ª×§ ×¢×¦×××™ ×œ×§×¨×™××”; ×œ× ××ª×¢×“×›×Ÿ ××•×˜×•××˜×™×ª. ××™×Ÿ ××¤×•×ª ×œ× ××§×•×•× ×•×ª ××• × ×™×•×•×˜ ×¤× ×™×™×”Ö¾×¤× ×™×™×”. ×™×© ×œ×‘×“×•×§ ××ª ×”×§×•×‘×¥ ×œ×œ× ×¨×©×ª ×œ×¤× ×™ ×™×¦×™××”. ×§×•×‘×¥ ×©×”×•×¢×‘×¨ ×œ××—×¨ ××™× ×• × ×™×ª×Ÿ ×œ×‘×™×˜×•×œ ××¨×—×•×§."+'</p><p>×§×™×©×•×¨×™× ××§×•×¨×™×™× ××™× × × ×›×œ×œ×™× ×›×“×™ ×œ×¦××¦× ×—×©×™×¤×ª ×¡×•×“×•×ª. ×¤×¨×˜×™× ×©× ×‘×—×¨×• ×•×”×¢×¨×•×ª ×“×•×¨×©×™× ×‘×“×™×§×” ×œ×¤× ×™ ×”×¢×‘×¨×ª ×”×§×•×‘×¥.</p><nav aria-label="×™××™×">'+r.map(A=>'<a href="#day-'+A+'">×™×•× '+A+"</a>").join(" Â· ")+"</nav>"+x+(m.length?"<section><h2>×ª×—× ×•×ª ×©×”×•×—×¨×’×• ×Ö¾GPX</h2><ul>"+m.map(A=>"<li>×™×•× "+A.day+" Â· "+d(A.name)+" â€” "+A.reason+"</li>").join("")+"</ul></section>":"")+"</body></html>",k=h.length?'<?xml version="1.0" encoding="UTF-8"?><gpx version="1.1" creator="Motor Trip Studio" xmlns="http://www.topografix.com/GPX/1/1"><metadata><name>'+d(n.destination_name)+"</name><desc>× ×§×•×“×•×ª ×™×¢×“ ×‘×œ×‘×“; ×”×“×¨×š ×œ× × ××“×“×”. ×›×œ×™ ×”× ×™×•×•×˜ ××—×©×‘ ××ª ×”×“×¨×š. ×’×¨×¡×” "+Jn(n.revision)+"</desc><time>"+Jn(new Date(n.capturedAt).toISOString())+"</time></metadata>"+r.filter(A=>h.some(E=>E.day===A)).map(A=>"<rte><name>×™×•× "+A+"</name>"+h.filter(E=>E.day===A).map((E,R)=>'<rtept lat="'+E.lat+'" lon="'+E.lng+'"><name>'+(R+1)+". "+E.label+"</name><desc>× ×§×•×“×ª ×™×¢×“ ×©×”×•×–× ×” ×‘×˜×™×•×œ; ×™×© ×œ×××ª ×’×™×©×” ×•×‘×˜×™×—×•×ª.</desc></rtept>").join("")+"</rte>").join("")+"</gpx>":null;return{html:S,gpx:k,points:h,excluded:m,filename:"motor-trip-field-"+n.capturedAt.slice(0,10)+"-"+n.revision,revision:n.revision}}function Kc(t){return{snapshot:e=>b(null,null,function*(){let{data:n,error:r}=yield t.rpc("trip_field_snapshot",{p_trip_id:e});if(r)throw Error("×œ× × ×™×ª×Ÿ ×œ×”×›×™×Ÿ ×ª××•× ×” ×¢×“×›× ×™×ª. × ×“×¨×©×ª ×‘×¢×œ×•×ª ×•×›× ×™×¡×” ×œ×—×©×‘×•×Ÿ ×œ×§×•×— ×¤×¢×™×œ.");return n})}}function Jc({root:t,api:e,tripId:n,download:r}){let i=t.ownerDocument,s=!0,l=null,c=[],d=null,p={},h=!1,m=new Set;r!=null||(r=((I,A,E)=>{let R=URL.createObjectURL(new Blob([I],{type:E}));m.add(R);let z=i.createElement("a");z.href=R,z.download=A,i.body.append(z),z.click(),z.remove(),setTimeout(()=>{URL.revokeObjectURL(R),m.delete(R)},3e4)}));let w=I=>{s&&(t.querySelector("[data-export-status]").textContent=I)},g=()=>{let I=Number(t.querySelector("[name=fromDay]").value),A=Number(t.querySelector("[name=toDay]").value);if(!Number.isInteger(I)||!Number.isInteger(A)||I<1||A>l.settings.days||A<I)throw Error("×˜×•×•×— ×™××™× ×œ× ×ª×§×™×Ÿ");return Array.from({length:A-I+1},(E,R)=>I+R)},y=()=>J({days:g(),order:c},Object.fromEntries(["program","lodging","tasks","gear","includeNotes","includeReferences","includeContacts"].map(I=>[I,t.querySelector("[name="+I+"]").checked]))),_=()=>{d=null,t.querySelector("[data-html]").disabled=!0,t.querySelector("[data-gpx]").disabled=!0,t.querySelector("[name=confirmedOrder]").checked=!1,t.querySelector("[data-preview-panel]").replaceChildren(),w("×”×ª×›×•×œ×” ×”×©×ª× ×ª×”; ×™×© ×œ×”×›×™×Ÿ ×ª×¦×•×’×” ××§×“×™××” ×—×“×©×”.")};function x(){let I;try{I=g()}catch(T){w(T.message);return}let A=Wc(l,I),E=c.filter(T=>A.includes(T));c=[...E,...A.filter(T=>!E.includes(T))].sort((T,O)=>l.items.find(M=>M.id===T).payload.day-l.items.find(M=>M.id===O).payload.day);let R=t.querySelector("[data-export-order]");R.innerHTML=c.map(T=>{let O=l.items.find(D=>D.id===T),M=c.filter(D=>l.items.find(F=>F.id===D).payload.day===O.payload.day);return'<article style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;padding:8px 0"><span>×™×•× '+O.payload.day+" Â· "+G(O.payload.place)+'</span><button type="button" data-move="'+G(T)+'" data-direction="-1" '+(M[0]===T?"disabled":"")+'>×”×§×“×</button><button type="button" data-move="'+G(T)+'" data-direction="1" '+(M.at(-1)===T?"disabled":"")+">××—×¨</button></article>"}).join("")||"<p>××™×Ÿ ×ª×—× ×•×ª ×‘×˜×•×•×— ×”×™××™× ×©× ×‘×—×¨.</p>",R.querySelectorAll("[data-move]").forEach(T=>T.onclick=()=>{let O=c.indexOf(T.dataset.move),M=O+Number(T.dataset.direction);if(M<0||M>=c.length)return;let D=F=>l.items.find($=>$.id===F).payload.day;D(c[O])===D(c[M])&&([c[O],c[M]]=[c[M],c[O]],_(),x())});let z=[...R.querySelectorAll(":scope > article")];z.length&&Ce({container:R,items:z,state:p})}function P(I){return b(this,null,function*(){if(h||!d)return;h=!0;let A=d;t.querySelector("[data-html]").disabled=t.querySelector("[data-gpx]").disabled=!0;try{let E=yield e.snapshot(n);if(!s)return;if(d!==A){w("×”×ª×›×•×œ×” ×”×©×ª× ×ª×” ×‘×–××Ÿ ×”×‘×“×™×§×”; ×”×”×•×¨×“×” ×”×™×©× ×” ×‘×•×˜×œ×”. ×™×© ×œ×”×›×™×Ÿ ×ª×¦×•×’×” ×—×“×©×”.");return}if(E.revision!==l.revision){l=E,c=[],S(),w("× ×ª×•× ×™ ×”×˜×™×•×œ ×”×©×ª× ×•. × ×•×¦×¨×” ×ª××•× ×” ×—×“×©×”; ×‘×“×•×§ ×ª×›×•×œ×” ×•×¡×“×¨ ×•×”×›×Ÿ ×ª×¦×•×’×” ××§×“×™××” ××—×“×©.");return}if(I==="gpx"&&!t.querySelector("[name=confirmedOrder]").checked)return;r(A[I],A.filename+"."+I,I==="gpx"?"application/gpx+xml;charset=utf-8":"text/html;charset=utf-8"),w("×‘×§×©×ª ×”×”×•×¨×“×” × ×©×œ×—×” ×œ×“×¤×“×¤×Ÿ. ×™×© ×œ×¤×ª×•×— ××ª ×”×§×•×‘×¥ ×•×œ×‘×“×•×§ ××•×ª×•; ××™×Ÿ ××™×©×•×¨ ××•×˜×•××˜×™ ×©×”×•× × ×©××¨ ××• ×©× ×™×ª×Ÿ ×œ× ×•×•×˜ ×‘×•.")}catch(E){w(E.message)}finally{h=!1,s&&d&&(t.querySelector("[data-html]").disabled=!1,t.querySelector("[data-gpx]").disabled=!d.gpx||!t.querySelector("[name=confirmedOrder]").checked)}})}function S(){d=null,p={},t.innerHTML="<section><h2>×¢×¨×›×ª ×©×˜×— ×•Ö¾GPX</h2><p>×§×•×‘×¥ ×¢×¦×××™ ×œ×§×¨×™××” ×•×”×“×¤×¡×” ×œ×œ× ×¨×©×ª. ××™×Ÿ ××¤×•×ª ×œ× ××§×•×•× ×•×ª ××• × ×™×•×•×˜ ×¤× ×™×™×”Ö¾×¤× ×™×™×”. ×œ×œ× ×”×¨×¦×ª AI ×•×œ×œ× ×—×™×•×‘ × ×•×¡×£.</p><p>×ª××•× ×” ×Ö¾"+G(l.capturedAt)+" Â· ×’×¨×¡×” "+G(l.revision)+'. ×”×¢×•×ª×§ ××™× ×• ××ª×¢×“×›×Ÿ; ×§×•×‘×¥ ×©×”×•×¢×‘×¨ ×œ××—×¨ ××™× ×• × ×™×ª×Ÿ ×œ×‘×™×˜×•×œ ××¨×—×•×§.</p><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,230px),1fr));gap:10px"><label>××™×•×<input type="number" name="fromDay" min="1" max="'+l.settings.days+'" value="1"></label><label>×¢×“ ×™×•×<input type="number" name="toDay" min="1" max="'+l.settings.days+'" value="'+l.settings.days+'"></label></div><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr));gap:8px">'+[["program","×ª×•×›× ×™×ª ×”×™××™× ×©× ×‘×—×¨×•",!0],["lodging","×œ×™× ×” ×¨×©×•××” ×‘×ª××¨×™×›×™× ×”××ª××™××™×",!0],["tasks","×›×œ ××©×™××•×ª ×”×˜×™×•×œ",!1],["gear","×›×œ ×¦×™×•×“ ×”×˜×™×•×œ",!1],["includeNotes","×›×œ×•×œ ×”×¢×¨×•×ª ××”×¡×¢×™×¤×™× ×©× ×‘×—×¨×•",!1],["includeReferences","×›×œ×•×œ ××¡××›×ª××•×ª ×œ×™× ×”",!1],["includeContacts","×›×œ×•×œ ×¤×¨×˜×™ ×§×©×¨ ××ª×•×š ×”×˜×§×¡×˜×™× ×©× ×‘×—×¨×•",!1]].map(([I,A,E])=>'<label style="display:block"><input type="checkbox" name="'+I+'" '+(E?"checked":"")+"> "+A+"</label>").join("")+'</div><details><summary>×¡×“×¨ ×ª×—× ×•×ª ×œ×™×¦×•× â€” ×©×™× ×•×™ ×‘×ª×•×š ×›×œ ×™×•×</summary><p>×”×¡×“×¨ ×”×”×ª×—×œ×ª×™ ×‘×ª×•×š ×™×•× ×”×•× ×œ×¤×™ ×©×, ×•××™× ×• ×”××œ×¦×ª × ×¡×™×¢×”. ×§×‘×¢ ××ª ×”×¡×“×¨ ×”×¨×¦×•×™ ×•×‘×“×•×§ ××ª ×”××™×§×•××™× ×œ×¤× ×™ ×™×¦×•×.</p><div data-export-order></div></details><p>GPX ×›×•×œ×œ ×¨×§ ××™×§×•××™× ××“×•×™×§×™× ×©× ×©××¨×• ×‘×˜×™×•×œ, ×œ×œ× ××¡×œ×•×œ ×“×¨×š ×©× ××“×“. × ×§×•×“×•×ª ××©×•×¢×¨×•×ª ××•×—×¨×’×•×ª. ×›×œ×™ ×”× ×™×•×•×˜ ××—×©×‘ ×›×‘×™×©×™× ×œ×¤×™ ×”×’×“×¨×•×ª×™×•; ×™×© ×œ×‘×“×•×§ ×’×™×©×” ×•×‘×˜×™×—×•×ª.</p><div class="row"><button type="button" data-preview>×”×›×Ÿ ×ª×¦×•×’×” ××§×“×™××”</button><button type="button" data-refresh-export>×˜×¢×Ÿ ×ª××•× ×” ×¢×“×›× ×™×ª</button></div><label><input type="checkbox" name="confirmedOrder"> ×‘×“×§×ª×™ ×•××™×©×¨×ª×™ ××ª ×¡×“×¨ ×”×ª×—× ×•×ª ×œÖ¾GPX</label><div class="row"><button type="button" data-html disabled>×”×•×¨×“ ×¢×¨×›×ª ×©×˜×— HTML</button><button type="button" data-gpx disabled>×”×•×¨×“ GPX</button></div><p role="status" data-export-status></p><div data-preview-panel></div></section>',x(),t.querySelectorAll("[name=fromDay],[name=toDay]").forEach(I=>I.onchange=()=>{c=[],_(),x()}),t.querySelectorAll("input[type=checkbox]:not([name=confirmedOrder])").forEach(I=>I.onchange=_),t.querySelector("[name=confirmedOrder]").onchange=()=>{t.querySelector("[data-gpx]").disabled=h||!(d!=null&&d.gpx)||!t.querySelector("[name=confirmedOrder]").checked},t.querySelector("[data-preview]").onclick=()=>{try{d=Gc(l,y());let I=t.querySelector("[data-preview-panel]");I.innerHTML="<p>"+d.points.length+" × ×§×•×“×•×ª ××“×•×™×§×•×ª Â· "+d.excluded.length+" ×ª×—× ×•×ª ×”×•×—×¨×’×• ×Ö¾GPX.</p>"+(d.excluded.length?"<ul>"+d.excluded.map(E=>"<li>×™×•× "+E.day+" Â· "+G(E.name)+" â€” "+G(E.reason)+"</li>").join("")+"</ul>":"")+'<details><summary>×ª×¦×•×’×ª ×¢×¨×›×ª ×”××™×“×¢</summary><p>×œ×”×“×¤×¡×”: ×”×•×¨×“ HTML, ×¤×ª×— ×‘×“×¤×“×¤×Ÿ ×•×‘×—×¨ ×”×“×¤×¡×”. ×”×§×™×©×•×¨×™× ××•×©×‘×ª×™× ×‘×ª×¦×•×’×” ×”××§×“×™××”; ×‘×§×•×‘×¥ ×©×”×•×¨×“ ×§×™×©×•×¨×™ ×”×™××™× ×¤×¢×™×œ×™× ×•×§×™×©×•×¨×™× ×—×™×¦×•× ×™×™× ×“×•×¨×©×™× ×¨×©×ª.</p><iframe sandbox="" referrerpolicy="no-referrer" title="×ª×¦×•×’×” ××§×“×™××” ×©×œ ×¢×¨×›×ª ×”×©×˜×—" style="width:100%;height:55vh;border:1px solid #777;background:white"></iframe></details>';let A=new i.defaultView.DOMParser().parseFromString(d.html,"text/html");A.querySelectorAll("a").forEach(E=>E.removeAttribute("href")),I.querySelector("iframe").srcdoc="<!doctype html>"+A.documentElement.outerHTML,t.querySelector("[data-html]").disabled=!1,t.querySelector("[data-gpx]").disabled=!d.gpx||!t.querySelector("[name=confirmedOrder]").checked,w(d.gpx?"×”×ª×¦×•×’×” ××•×›× ×”. ×‘×“×•×§ ××ª ×”×ª×›×•×œ×”, ×”××™×§×•××™× ×•×¡×“×¨ ×”×ª×—× ×•×ª ×œ×¤× ×™ ×”×•×¨×“×”.":"××¤×©×¨ ×œ×”×•×¨×™×“ ×¢×¨×›×ª ××™×“×¢. ××™×Ÿ ××™×§×•××™× ××“×•×™×§×™× ×œ×™×¦×•× GPX.")}catch(I){d=null,w(I.message)}},t.querySelector("[data-html]").onclick=()=>P("html"),t.querySelector("[data-gpx]").onclick=()=>P("gpx"),t.querySelector("[data-refresh-export]").onclick=k}function k(){return b(this,null,function*(){if(!h){h=!0,t.innerHTML='<section><h2>×¢×¨×›×ª ×©×˜×—</h2><p data-export-status role="status">××›×™×Ÿ ×ª××•× ×” ×¢×“×›× ×™×ª ××”×©×¨×ª...</p></section>';try{let I=yield e.snapshot(n);if(!s)return;l=I,c=[],S()}catch(I){w(I.message)}finally{h=!1}}})}return k(),()=>{var I;s=!1,d=null,l=null,(I=t.querySelector("iframe"))==null||I.remove();for(let A of m)URL.revokeObjectURL(A);m.clear()}}var Xc={name:/^(?:hotel(?: name)?|property(?: name)?|accommodation|×©× (?:×”××œ×•×Ÿ|××§×•× ×”×œ×™× ×”)|××œ×•×Ÿ)\s*[:\-]\s*(.+)$/i,ref:/^(?:confirmation (?:number|code)|booking (?:number|reference|id)|reservation (?:number|code)|××¡×¤×¨ (?:×”×–×× ×”|××™×©×•×¨))\s*[:#\-]\s*(.+)$/i,checkInDate:/^(?:check[ -]?in(?: date)?|arrival(?: date)?|×ª××¨×™×š ×›× ×™×¡×”|×›× ×™×¡×”)\s*[:\-]\s*(.+)$/i,checkOutDate:/^(?:check[ -]?out(?: date)?|departure(?: date)?|×ª××¨×™×š ×™×¦×™××”|×™×¦×™××”)\s*[:\-]\s*(.+)$/i,total:/^(?:total(?: amount| price| cost)?|grand total|××—×™×¨ ×›×•×œ×œ|×¡×›×•× ×›×•×œ×œ|×¡×”[×´"']?×›)\s*[:\-]\s*(.+)$/i,paid:/^(?:amount paid|total paid|paid amount|×©×•×œ×|×¡×›×•× ×©×©×•×œ×)\s*[:\-]\s*(.+)$/i};function Bg(t){var i;let e=(i=/\b(\d{4}-\d{2}-\d{2})\b/.exec(t))==null?void 0:i[1];if(e)return ze(e)?e:null;let n=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"],r=/\b(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})\b/.exec(t);if(r){let s=n.indexOf(r[2].slice(0,3).toLowerCase()),l=r[3]+"-"+String(s+1).padStart(2,"0")+"-"+r[1].padStart(2,"0");return s>=0&&ze(l)?l:null}return null}function Yc(t){var i,s;let e=((s=(i=/\b(ILS|USD|EUR|GBP|THB|JPY|CAD|AUD|CHF|VND)\b/i.exec(t))==null?void 0:i[1])==null?void 0:s.toUpperCase())||(t.includes("â‚ª")?"ILS":t.includes("â‚¬")?"EUR":null),n=t.replace(/\b(ILS|USD|EUR|GBP|THB|JPY|CAD|AUD|CHF|VND)\b/gi,"").replace(/[â‚ªâ‚¬$Â£]/g,"").trim();if(!/^(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d{1,2})?$/.test(n))return{currency:e,total:null};let r=Number(n.replaceAll(",",""));return{currency:e,total:Number.isFinite(r)&&r>=0&&r<=1e9?r:null}}function Qc(t){if(!Array.isArray(t)||t.length>10||t.some(c=>!c||typeof c.text!="string"||c.text.length>2e4||!Number.isInteger(c.page)||c.page<1||c.page>10))throw Error("×˜×§×¡×˜ ×”××¡××š ×—×•×¨×’ ××”××’×‘×œ×•×ª");let e={name:null,ref:null,checkInDate:null,checkOutDate:null,total:null,paid:null,currency:null,status:"×œ×‘×“×™×§×”"},n={},r=[],i=Object.fromEntries(Object.keys(Xc).map(c=>[c,[]])),s="";for(let c of t){s+=`
`+c.text;for(let d of c.text.split(/[\r\n]+/).map(p=>p.trim()))for(let[p,h]of Object.entries(Xc)){let m=h.exec(d);m&&i[p].push({value:m[1].trim(),page:c.page,snippet:d.slice(0,300)})}}/(?:cancell?ation confirmation|(?:^|\n)(?:booking|reservation) cancell?ation[ \t]*(?:\n|$)|(?:booking|reservation)(?: has been| is)? cancell?ed|×”×–×× ×” ×‘×•×˜×œ×”|××™×©×•×¨ ×‘×™×˜×•×œ ×”×–×× ×”)/i.test(s)?e.status="×‘×•×˜×œ":/(?:booking confirmation|reservation confirmation|confirmed reservation|××™×©×•×¨ ×”×–×× ×”)/i.test(s)&&(e.status="×”×•×–××Ÿ"),i.name.length||r.push("×œ× ×–×•×”×• ×‘×‘×™×¨×•×¨ ×¤×¨×˜×™ ×œ×™× ×”; ×™×© ×œ×”×©×œ×™× ××• ×œ×‘×—×•×¨ ××¡××š ××ª××™×.");let l=new Set;for(let[c,d]of Object.entries(i)){if(!d.length)continue;let p=d.map(m=>se(J({},m),{value:c.endsWith("Date")?Bg(m.value):["total","paid"].includes(c)?Yc(m.value).total:m.value.slice(0,c==="name"?200:100)})),h=[...new Set(p.map(m=>m.value))];if(h.length!==1){r.push("× ××¦××• ×¢×¨×›×™× ×¡×•×ª×¨×™× ×‘×©×“×” "+c);continue}if(h[0]===null){r.push("×œ× × ×™×ª×Ÿ ×œ×§×‘×•×¢ ×‘×‘×˜×—×” ××ª ×”×©×“×” "+c);continue}if(e[c]=h[0],n[c]={page:p[0].page,snippet:p[0].snippet},["total","paid"].includes(c))for(let m of d){let w=Yc(m.value).currency;w?l.add(w):r.push("×™×© ×œ×‘×“×•×§ ××ª ×”××˜×‘×¢ ×©×œ ×”×¡×›×•× ×©×—×•×œ×¥.")}}return l.size===1?e.currency=[...l][0]:l.size>1&&(r.push("× ××¦××• ××˜×‘×¢×•×ª ×¡×•×ª×¨×™×; ×”×¡×›×•××™× ×“×•×¨×©×™× ×‘×“×™×§×”."),e.total=e.paid=null),e.checkInDate&&e.checkOutDate&&e.checkOutDate<=e.checkInDate&&(r.push("×ª××¨×™×›×™ ×”×œ×™× ×” ××™× × ×‘×¡×“×¨ ×ª×§×™×Ÿ."),e.checkOutDate=null),e.currency&&e.currency!=="ILS"&&r.push("×”×¡×›×•××™× ×‘××˜×‘×¢ ×”××§×•×¨; ×”× ×œ× ×™×•×–× ×• ××•×˜×•××˜×™×ª ×œ×©×“×•×ª ×”×©×§×œ×™×."),!e.currency&&(e.total!==null||e.paid!==null)&&r.push("××™×Ÿ ××˜×‘×¢ ××–×•×”×”; ××™×Ÿ ×œ×”×–×™×Ÿ ××ª ×”×¡×›×•× ×›×©×§×œ×™× ×œ×œ× ×‘×“×™×§×”."),{fields:e,evidence:n,warnings:[...new Set(r)],verified:!1}}function dl(t,e){let n=null,r=null;if(e==="image/png"){if(t.length<45||t[0]!==137||new TextDecoder().decode(t.subarray(1,8))!==`PNG\r
\x1a
`||new TextDecoder().decode(t.subarray(12,16))!=="IHDR"||new TextDecoder().decode(t.subarray(t.length-8,t.length-4))!=="IEND")throw Error("×§×•×‘×¥ PNG ×œ× ×ª×§×™×Ÿ");let i=new DataView(t.buffer,t.byteOffset,t.byteLength);n=i.getUint32(16),r=i.getUint32(20)}else{if(t.length<12||t[0]!==255||t[1]!==216||t.at(-2)!==255||t.at(-1)!==217)throw Error("×§×•×‘×¥ JPEG ×œ× ×ª×§×™×Ÿ");let i=2,s=0;for(;i+4<=t.length&&s++<1e4;){if(t[i++]!==255)throw Error("×§×•×‘×¥ JPEG ×œ× ×ª×§×™×Ÿ");for(;t[i]===255;)i++;let l=t[i++];if(l===217||l===218)break;if(l>=208&&l<=215||l===1)continue;let c=t[i]*256+t[i+1];if(c<2||i+c>t.length)throw Error("×§×•×‘×¥ JPEG ×œ× ×ª×§×™×Ÿ");if([192,193,194,195,197,198,199,201,202,203,205,206,207].includes(l)){if(c<8)throw Error("××™×“×•×ª ×ª××•× ×” ×œ× ×ª×§×™× ×•×ª");r=t[i+3]*256+t[i+4],n=t[i+5]*256+t[i+6];break}i+=c}}if(e!=="application/pdf"&&(!n||!r||n*r>2e7))throw Error("×”×ª××•× ×” ×’×“×•×œ×” ××“×™ ××• ×¤×’×•××”");return{width:n,height:r}}var tu=10485760,eu=2e7,ba=()=>new DOMException("×¢×™×‘×•×“ ×”××¡××š ×‘×•×˜×œ","AbortError");function nu(l){return b(this,arguments,function*(t,{signal:e,onProgress:n=()=>{},languagePath:r,decodeImage:i=c=>createImageBitmap(c),createCanvas:s=(c,d)=>{let p=document.createElement("canvas");return p.width=c,p.height=d,p}}={}){var I,A;if(e!=null&&e.aborted)throw ba();if(!t||!["application/pdf","image/jpeg","image/png"].includes(t.type)||t.size<1||t.size>tu)throw Error("××¤×©×¨ PDF, JPEG ××• PNG ×¢×“ 10MB");let c=new AbortController,d=c.signal,p=null,h=null,m=null,w=null,g=null,y=null,_=()=>c.abort();e==null||e.addEventListener("abort",_,{once:!0});let x=setTimeout(()=>c.abort(),12e4),P=E=>d.aborted?Promise.reject(ba()):new Promise((R,z)=>{let T=()=>z(ba());d.addEventListener("abort",T,{once:!0}),Promise.resolve(E).then(R,z).finally(()=>d.removeEventListener("abort",T))}),S=(E,R)=>{d.aborted||n({stage:E,progress:R})},k=E=>b(null,null,function*(){if(!p){S("ocr_loading",0);let R=yield P(import("./src-4XQUKV4T.js")),z=R.createWorker||R.default.createWorker;if(typeof window!="undefined"){let T="booking-ocr-"+crypto.randomUUID();y=new BroadcastChannel(T),g=URL.createObjectURL(new Blob([`const channel=new BroadcastChannel(${JSON.stringify(T)});channel.onmessage=()=>self.close();setTimeout(()=>self.close(),125000);importScripts("https://cdn.jsdelivr.net/npm/tesseract.js@7.0.0/dist/worker.min.js");`],{type:"application/javascript"}))}h=z("eng+heb",1,se(J({langPath:r||"https://cdn.jsdelivr.net/gh/tesseract-ocr/tessdata_fast@4.1.0",gzip:!1,errorHandler:()=>{}},typeof window!="undefined"?{workerPath:g,workerBlobURL:!1,corePath:"https://cdn.jsdelivr.net/npm/tesseract.js-core@7.0.0"}:{}),{cacheMethod:"none",logger:T=>S("ocr",Number(T.progress)||0)})),h.then(T=>{d.aborted&&T.terminate()}).catch(()=>{}),p=yield P(h)}return(yield P(p.recognize(E,{},{text:!0}))).data.text});try{let E=new Uint8Array(yield P(t.arrayBuffer()));if(E.length!==t.size)throw Error("×’×•×“×œ ×”×§×•×‘×¥ ××™× ×• ×ª×§×™×Ÿ");let R=[...new Uint8Array(yield P(crypto.subtle.digest("SHA-256",E)))].map(O=>O.toString(16).padStart(2,"0")).join(""),z=[],T=!1;if(t.type==="application/pdf"){if(new TextDecoder().decode(E.subarray(0,5))!=="%PDF-")throw Error("×§×•×‘×¥ PDF ×œ× ×ª×§×™×Ÿ");let O=yield P(import("./pdf-Q2CDDOZ2.js"));typeof window!="undefined"&&(O.GlobalWorkerOptions.workerSrc="https://cdn.jsdelivr.net/npm/pdfjs-dist@6.5.438/legacy/build/pdf.worker.min.mjs"),m=O.getDocument({data:E.slice(),isEvalSupported:!1,disableAutoFetch:!0,disableRange:!0,disableStream:!0,useWorkerFetch:!1,disableFontFace:!0,standardFontDataUrl:"https://cdn.jsdelivr.net/npm/pdfjs-dist@6.5.438/standard_fonts/",enableXfa:!1,stopAtErrors:!0});let M=()=>{m==null||m.destroy().catch(()=>{})};if(d.addEventListener("abort",M,{once:!0}),w=yield P(m.promise),w.numPages<1||w.numPages>10)throw Error("×¢×“ 10 ×¢××•×“×™× ×œ××¡××š");for(let D=1;D<=w.numPages;D++){S("pdf_text",D/w.numPages);let F=yield P(w.getPage(D)),$=yield P(F.getTextContent()),B="",Y=null;for(let K of $.items){if(!("str"in K))continue;let N=(I=K.transform)==null?void 0:I[5];Y!==null&&Math.abs(N-Y)>2&&(B+=`
`),B+=K.str+(K.hasEOL?`
`:" "),Y=N}if(B.trim().length<30){T=!0;let K=F.getViewport({scale:1}),N=Math.min(1.5,Math.sqrt(eu/(K.width*K.height))),j=F.getViewport({scale:N}),ee=s(Math.max(1,Math.floor(j.width)),Math.max(1,Math.floor(j.height)));ee.width=Math.max(1,Math.floor(j.width)),ee.height=Math.max(1,Math.floor(j.height)),yield P(F.render({canvasContext:ee.getContext("2d"),viewport:j}).promise),B=yield k(ee.toDataURL("image/png")),ee.width=ee.height=1}z.push({page:D,text:B.slice(0,2e4)}),F.cleanup()}}else{dl(E,t.type);let O=yield P(i(new Blob([E],{type:t.type})));try{if(!O.width||!O.height||O.width*O.height>eu)throw Error("×”×ª××•× ×” ×—×•×¨×’×ª ×××’×‘×œ×ª 20 ××™×œ×™×•×Ÿ ×¤×™×§×¡×œ×™×");T=!0,z.push({page:1,text:(yield k(E)).slice(0,2e4)})}finally{(A=O.close)==null||A.call(O)}}if(d.aborted)throw ba();return{pages:z,hash:R,method:T?"local_ocr":"pdf_text",size:E.length,mime:t.type}}finally{clearTimeout(x),e==null||e.removeEventListener("abort",_),y==null||y.postMessage("close"),y==null||y.close(),g&&URL.revokeObjectURL(g),yield p==null?void 0:p.terminate(),yield m==null?void 0:m.destroy().catch(()=>{})}})}function au(i,s){return b(this,arguments,function*(t,e,n=1,{signal:r}={}){if(r!=null&&r.aborted)throw ba();if(!Number.isInteger(n)||n<1||n>10||t.size>tu)throw Error("×¢××•×“ ××§×•×¨ ×œ× ×ª×§×™×Ÿ");let l=new Uint8Array(yield t.arrayBuffer()),c,d,p=()=>c==null?void 0:c.destroy().catch(()=>{});r==null||r.addEventListener("abort",p,{once:!0});try{if(t.type==="application/pdf"){let h=yield import("./pdf-Q2CDDOZ2.js");typeof window!="undefined"&&(h.GlobalWorkerOptions.workerSrc="https://cdn.jsdelivr.net/npm/pdfjs-dist@6.5.438/legacy/build/pdf.worker.min.mjs"),c=h.getDocument({data:l,isEvalSupported:!1,disableAutoFetch:!0,disableRange:!0,disableStream:!0,useWorkerFetch:!1,disableFontFace:!0,enableXfa:!1,standardFontDataUrl:"https://cdn.jsdelivr.net/npm/pdfjs-dist@6.5.438/standard_fonts/"});let m=yield c.promise;if(m.numPages>10||n>m.numPages)throw Error("×¢××•×“ ××§×•×¨ ×œ× ×ª×§×™×Ÿ");let w=yield m.getPage(n),g=w.getViewport({scale:1}),y=Math.min(1.5,Math.sqrt(2e6/(g.width*g.height))),_=w.getViewport({scale:y});if(e.width=Math.max(1,Math.floor(_.width)),e.height=Math.max(1,Math.floor(_.height)),r!=null&&r.aborted)throw ba();yield w.render({canvasContext:e.getContext("2d"),viewport:_}).promise}else{dl(l,t.type),d=yield createImageBitmap(new Blob([l],{type:t.type}));let h=Math.min(1,Math.sqrt(2e6/(d.width*d.height)));if(e.width=Math.max(1,Math.floor(d.width*h)),e.height=Math.max(1,Math.floor(d.height*h)),r!=null&&r.aborted)throw ba();e.getContext("2d").drawImage(d,0,0,e.width,e.height)}}finally{r==null||r.removeEventListener("abort",p),d==null||d.close(),yield c==null?void 0:c.destroy().catch(()=>{})}})}function ru(t){return{call:(e,n)=>b(null,null,function*(){let{data:r,error:i}=yield t.rpc("booking_document",{p_action:e,p_data:n});if(i)throw Error(i.code==="40001"?"×”× ×ª×•× ×™× ×”×©×ª× ×•. ×¨×¢× ×Ÿ ×•×‘×“×•×§ ×©×•×‘.":"×”×¤×¢×•×œ×” × ×“×—×ª×”. ×‘×“×•×§ ×”×¨×©××”, ×ª×•×§×£ ×•×¤×¨×˜×™ ×œ×™× ×”.");return r}),upload:(e,n)=>b(null,null,function*(){let{error:r}=yield t.storage.from("booking-documents").upload(e,n,{contentType:n.type,upsert:!1});if(r)throw Error("×”×¢×œ××ª ×”××§×•×¨ × ×›×©×œ×”. ××¤×©×¨ ×œ× ×¡×•×ª ×©×•×‘ ××• ×œ×¤×ª×•×— ××¡××š ×©×›×‘×¨ ×”×•×¢×œ×”.")}),download:e=>b(null,null,function*(){let{data:n,error:r}=yield t.storage.from("booking-documents").download(e);if(r)throw Error("×”××§×•×¨ ××™× ×• ×–××™×Ÿ");return n}),verify:(e,n)=>b(null,null,function*(){let{data:r,error:i}=yield t.functions.invoke("booking-documents",{body:{action:"verify",tripId:e,id:n}});if(i||r!=null&&r.error)throw Error("××™××•×ª ×”××§×•×¨ × ×›×©×œ. ××™×Ÿ ×©××™×¨×ª ×”×–×× ×”.");return r})}}function iu({root:t,dialog:e,trip:n,api:r,extract:i=nu,onChanged:s=()=>{}}){let l={},c=!0,d=null,p=!1,h=null,m=null,w=t.ownerDocument,g=n.id,y=(A,E={})=>r.call(A,J({tripId:g},E)),_=A=>{c&&(t.querySelector("[data-document-status]").textContent=A)};t.innerHTML='<section><h2>×§×œ×™×˜×ª ××™×©×•×¨×™ ×œ×™× ×”</h2><p>PDF, JPEG ××• PNG ×¢×“ 10MB ×•Ö¾10 ×¢××•×“×™×. ×—×™×œ×•×¥ ××§×•××™ ×‘××›×©×™×¨; ×”×ª×•×¦××•×ª ×”×Ÿ ×˜×™×•×˜×” ×œ×‘×“×™×§×”, ×œ×œ× ××™××•×ª ××•×œ ×”×¡×¤×§ ×•×œ×œ× ×‘×™×¦×•×¢ ×”×–×× ×”.</p><p>×¨×›×™×‘×™ ×–×™×”×•×™ ××•×¨×“×™× ×‘×¢×ª ×”×¦×•×¨×š; ×”××¡××š ××™× ×• × ×©×œ×— ×œ×¡×¤×§ AI. ××§×•×¨ × ×©××¨ ×‘×—×©×‘×•×Ÿ ×”×¤×¨×˜×™ ×œÖ¾30 ×™×•×, ×¢× × ×™×§×•×™ ×©×¨×ª×™ ×œ××—×¨ ×¤×§×™×¢×ª ×”×’×™×©×”. ×’×™×‘×•×™×™ ×”×¡×¤×§ ×›×¤×•×¤×™× ×œ××“×™× ×™×•×ª×•. ××™×Ÿ ×’×™×©×” ×œ×× ×”×œ ××• ×œ×§×‘×•×¦×”.</p><p>×”×¢×œ×” ××™×©×•×¨ ×œ×™× ×” ×‘×œ×‘×“, ×œ×œ× × ×ª×•× ×™ ××©×¨××™, ×“×¨×›×•× ×™× ××• ××™×“×¢ ×©××™× ×• × ×—×•×¥. ××’×‘×œ×ª ××—×¡×•×Ÿ ×˜×›× ×™×ª ×œ×’×¨×¡×ª ×”×‘×“×™×§×”: 50 ××§×•×¨×•×ª ×•Ö¾50MB ×œ×—×©×‘×•×Ÿ, ×›×•×œ×œ ××§×•×¨×•×ª ×©×××ª×™× ×™× ×œ× ×™×§×•×™.</p><label>×‘×—×¨ ××™×©×•×¨ ×œ×™× ×”<input type="file" accept="application/pdf,image/jpeg,image/png" data-document-file></label><button type="button" data-cancel-extraction hidden>×‘×˜×œ ×¢×™×‘×•×“</button><p role="status" data-document-status></p><div data-document-list></div></section>';let x=t.querySelector("[data-document-file]"),P=t.querySelector("[data-cancel-extraction]");P.onclick=()=>d==null?void 0:d.abort();let S=()=>b(null,null,function*(){try{let A=yield y("list");if(!c)return;t.querySelector("[data-document-list]").innerHTML=(A.documents||[]).map(R=>{var z,T,O,M;return'<article style="padding:10px 0;border-bottom:1px solid #484154"><strong>'+G({awaiting_upload:"×××ª×™×Ÿ ×œ×”×¢×œ××” ×•×œ××™××•×ª",verified:"××§×•×¨ ××•××ª ×˜×›× ×™×ª â€” ×××ª×™×Ÿ ×œ××™×©×•×¨",committed:"× ×©××¨ ×œ××—×¨ ×‘×“×™×§×ª ×”×œ×§×•×—",cancelled:"×‘×•×˜×œ",expired:"×ª×•×§×£ ×”××§×•×¨ ×¤×’"}[R.state]||R.state)+"</strong><p>"+G(R.mime)+" Â· "+G((z=R.pages)!=null?z:"?")+" ×¢××•×“×™× Â· ××§×•×¨ ×¢×“ "+G(new Date(R.expiresAt).toLocaleDateString("he-IL"))+"</p>"+(R.bookingId?"<p>××§×•×©×¨ ×œ×”×–×× ×” "+G(((T=n.items.find(D=>D.id===R.bookingId))==null?void 0:T.payload.name)||"×©××™× ×” ×‘×¨×©×™××”")+". ××§×•×¨: ××¡××š ×©×”×œ×§×•×— ×”×¢×œ×”; ×œ× ××™××•×ª ×¡×¤×§.</p>":"")+(R.source?"<p>×¡×›×•× ××§×•×¨: "+G((O=R.source.total)!=null?O:"×œ× ×™×“×•×¢")+" "+G(R.source.currency||"××˜×‘×¢ ×œ× ×™×“×•×¢")+"; ×©×•×œ× ×‘××§×•×¨: "+G((M=R.source.paid)!=null?M:"×œ× ×™×“×•×¢")+"</p>":"")+(R.available?'<button type="button" data-source="'+G(R.id)+'">×”×•×¨×“ ××§×•×¨ ×¤×¨×˜×™</button> <button type="button" data-delete-source="'+G(R.id)+'">××—×§ ××§×•×¨ ××•×§×“×</button> '+(R.state==="verified"?'<button type="button" data-resume="'+G(R.id)+'">×¤×ª×— ×œ×‘×“×™×§×”</button>':""):"")+"</article>"}).join("")||"<p>×˜×¨× ×”×•×¢×œ×” ××™×©×•×¨ ×œ×™× ×” ×œ×˜×™×•×œ.</p>";let E=t.querySelector("[data-document-list]");Ce({container:E,items:[...E.querySelectorAll(":scope > article")],state:l}),t.querySelectorAll("[data-source]").forEach(R=>R.onclick=()=>b(null,null,function*(){try{let z=yield y("context",{id:R.dataset.source}),T=yield r.download(z.path);if(!c)return;let O=URL.createObjectURL(T),M=w.createElement("a");M.href=O,M.download="lodging-source."+{"application/pdf":"pdf","image/jpeg":"jpg","image/png":"png"}[z.mime],M.click(),setTimeout(()=>URL.revokeObjectURL(O),3e4)}catch(z){_(z.message)}})),t.querySelectorAll("[data-delete-source]").forEach(R=>R.onclick=()=>b(null,null,function*(){if(w.defaultView.confirm("×œ×¡×’×•×¨ ×’×™×©×” ×œ××§×•×¨ ×•×œ×‘×§×© ××—×™×§×”? ×”×”×–×× ×” ×¢×¦××” ×ª×™×©××¨. ×”××—×™×§×” ×”×¤×™×–×™×ª ××ª×‘×¦×¢×ª ×‘× ×™×§×•×™ ×”××ª×•×–××Ÿ."))try{yield y("deleteSource",{id:R.dataset.deleteSource}),_("×”×’×™×©×” ×œ××§×•×¨ × ×¡×’×¨×” ×•×”××§×•×¨ ×××ª×™×Ÿ ×œ× ×™×§×•×™. ×”×”×–×× ×” × ×©××¨×”."),yield S()}catch(z){_(z.message)}})),t.querySelectorAll("[data-resume]").forEach(R=>R.onclick=()=>b(null,null,function*(){try{let z=yield y("context",{id:R.dataset.resume}),T=yield r.download(z.path);if(!c)return;yield k(new w.defaultView.File([T],"source",{type:z.mime}),z)}catch(z){_(z.message)}}))}catch(A){_(A.message)}});function k(A,E=null){return b(this,null,function*(){if(!(p||!c)){p=!0,x.disabled=!0,P.hidden=!1,d=new AbortController;try{let R=yield i(A,{signal:d.signal,onProgress:z=>_({pdf_text:"×§×¨×™××ª ×˜×§×¡×˜",ocr_loading:"×˜×¢×™× ×ª ×¨×›×™×‘×™ ×–×™×”×•×™ ××§×•××™",ocr:"×–×™×”×•×™ ××§×•××™"}[z.stage]+" "+Math.round(z.progress*100)+"%")});if(!c||d.signal.aborted)return;_("×”×—×™×œ×•×¥ ×”×¡×ª×™×™×. ×‘×“×•×§ ×›×œ ×©×“×” ×œ×¤× ×™ ×©××™×¨×”."),I(A,R,E)}catch(R){_(R.name==="AbortError"?"×”×¢×™×‘×•×“ ×‘×•×˜×œ; ×œ× × ×©××¨×” ×”×–×× ×”.":R.message)}finally{p=!1,c&&(x.disabled=!1,P.hidden=!0,x.value="")}}})}x.onchange=()=>{var E;let A=(E=x.files)==null?void 0:E[0];A&&k(A)};function I(A,E,R){m==null||m.abort();let z=Qc(E.pages),T=z.fields,O=R,M=w.defaultView.crypto.randomUUID(),D=!1,F=!1,$={name:"×©× ××§×•× ×”×œ×™× ×”",ref:"××¡×¤×¨ ×”×–×× ×” / ××¡××›×ª×",checkInDate:"×ª××¨×™×š ×›× ×™×¡×”",checkOutDate:"×ª××¨×™×š ×™×¦×™××”",total:"×¡×›×•× ×›×•×œ×œ ×‘××˜×‘×¢ ×”××§×•×¨",paid:"×¡×›×•× ×©×©×•×œ× ×‘××˜×‘×¢ ×”××§×•×¨"};e.innerHTML="<form><h2>×‘×“×™×§×ª ×¤×¨×˜×™ ××™×©×•×¨ ×œ×™× ×”</h2><p>××§×•×¨: ××¡××š ×©×”×œ×§×•×— ×”×¢×œ×”. ×”×—×™×œ×•×¥ ××™× ×• ××™××•×ª ×¡×¤×§; ×œ× ×‘×•×¦×¢×” ×”×–×× ×” ××• ×’×‘×™×™×”. ×¢×¨×š ×¨×™×§ ×”×•× ×œ× ×™×“×•×¢, ×œ× ××¤×¡.</p>"+z.warnings.map(j=>'<p class="muted">'+G(j)+"</p>").join("")+"<details data-source-preview><summary>×ª×¦×•×’×ª ×¢××•×“ ×”××§×•×¨</summary><label>×¢××•×“<select data-source-page>"+E.pages.map(j=>'<option value="'+j.page+'">'+j.page+"</option>").join("")+'</select></label><p data-source-preview-status></p><canvas data-source-canvas style="width:100%;height:auto;max-width:100%;background:white" aria-label="×¢××•×“ ×”××§×•×¨"></canvas></details><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,230px),1fr));gap:10px">'+Object.entries($).map(([j,ee])=>{var Z;return"<label>"+ee+'<input name="'+j+'" type="'+(j.endsWith("Date")?"date":["total","paid"].includes(j)?"number":"text")+'" '+(["name","checkInDate","checkOutDate"].includes(j)?"required":"")+" "+(["total","paid"].includes(j)?'min="0" max="10000000" step="0.01"':'maxlength="200"')+' value="'+G((Z=T[j])!=null?Z:"")+'">'+(z.evidence[j]?"<small>×¢××•×“ "+G(z.evidence[j].page)+": "+G(z.evidence[j].snippet)+"</small>":"<small>×œ× ×—×•×œ×¥ ×‘×‘×™×¨×•×¨; ×™×© ×œ×‘×“×•×§ ×‘××§×•×¨.</small>")+"</label>"}).join("")+'<label>××˜×‘×¢ ××§×•×¨<select name="currency"><option value="">×œ× ×™×“×•×¢</option>'+["ILS","USD","EUR","GBP","THB","OTHER"].map(j=>'<option value="'+j+'" '+(T.currency===j?"selected":"")+">"+j+"</option>").join("")+'</select></label><label>××¦×‘ ××“×•×•×— ×‘××¡××š<select name="status">'+["×œ×‘×“×™×§×”","×”×•×–××Ÿ","×‘×•×˜×œ"].map(j=>"<option "+(T.status===j?"selected":"")+">"+j+"</option>").join("")+'</select></label><label>×©××™×¨×” ×›<select name="bookingId"><option value="">×”×–×× ×” ×—×“×©×”</option>'+n.items.filter(j=>j.kind==="booking"&&j.payload.type==="×œ×™× ×”").map(j=>'<option value="'+G(j.id)+'">×¢×“×›×•×Ÿ: '+G(j.payload.name)+" Â· "+G(j.payload.ref||"×œ×œ× ××¡××›×ª×")+"</option>").join("")+"</select></label></div><details><summary>×˜×§×¡×˜ ×©×—×•×œ×¥ ×œ×¤×™ ×¢××•×“</summary>"+E.pages.map(j=>"<h3>×¢××•×“ "+j.page+'</h3><pre style="white-space:pre-wrap;overflow-wrap:anywhere">'+G(j.text)+"</pre>").join("")+'</details><p>×¡×›×•× ×©××™× ×• ILS × ×©××¨ ×›××˜×‘×¢ ××§×•×¨ ×‘×œ×‘×“; ×‘×”×–×× ×” ×—×“×©×” ×¡×›×•××™ ×”×©×§×œ×™× ×™×™×©××¨×• ×œ× ×™×“×•×¢×™× ×¢×“ ×œ×¢×“×›×•×Ÿ ×™×“× ×™. ×‘×¢×“×›×•×Ÿ × ×©××¨×™× ×¡×›×•××™ ×©×§×œ×™× ×§×™×™××™× ×× ××™×Ÿ ×¡×›×•× ILS ×™×“×•×¢. ×”×¢×¨×•×ª ×§×™×™××•×ª × ×©××¨×•×ª. ×‘×™×˜×•×œ ××™× ×• ×”×—×–×¨ ×›×¡×£.</p><label><input type="checkbox" name="sourceConsent" required>×× ×™ ×××©×¨ ×©××™×¨×ª ××§×•×¨ ×¤×¨×˜×™ ×œÖ¾30 ×™×•× ×‘×©×¨×ª.</label><label><input type="checkbox" name="reviewed" required>×‘×“×§×ª×™ ××•×œ ×”××§×•×¨ ××ª ×”×¤×¨×˜×™×, ×”×ª××¨×™×›×™×, ×”××˜×‘×¢, ×”××¦×‘ ×•×”×”×–×× ×” ×”××™×•×¢×“×ª ×œ×¢×“×›×•×Ÿ.</label><div class="row"><button type="submit">××©×¨ ×•×©××•×¨ ×”×–×× ×”</button><button type="button" data-close-document>×¡×’×•×¨ ×œ×œ× ×©××™×¨×”</button></div><p data-review-status role="status"></p></form>';let B=e.querySelector("form");h=B;let Y=B.querySelector("[data-source-preview]"),K=()=>b(null,null,function*(){m==null||m.abort(),m=new AbortController;let j=m,ee=B.querySelector("[data-source-preview-status]");ee.textContent="×˜×•×¢×Ÿ ×¢××•×“ ××§×•×¨...";try{yield au(A,B.querySelector("[data-source-canvas]"),Number(B.querySelector("[data-source-page]").value),{signal:j.signal}),j.signal.aborted||(ee.textContent="×‘×“×•×§ ××•×œ ×”××§×•×¨; ×–×•×”×™ ×ª×¦×•×’×” ××§×•××™×ª.")}catch(Z){j.signal.aborted||(ee.textContent="×œ× × ×™×ª×Ÿ ×œ×”×¦×™×’ ××ª ×”××§×•×¨. ××™×Ÿ ×œ×©××•×¨ ×œ×¤× ×™ ×‘×“×™×§×ª×• ×‘×§×•×‘×¥ ×”××§×•×¨×™.")}});Y.ontoggle=()=>{Y.open?K():m==null||m.abort()},B.querySelector("[data-source-page]").onchange=K,e.addEventListener("close",()=>m==null?void 0:m.abort(),{once:!0});let N=j=>{c&&h===B&&e.querySelector("form")===B&&e.open&&(B.querySelector("[data-review-status]").textContent=j)};B.querySelector("[data-close-document]").onclick=()=>{D||e.close()},B.elements.bookingId.onchange=()=>{var ee,Z;let j=n.items.find(ne=>ne.id===B.elements.bookingId.value);N(j?"×”×–×× ×” ×§×™×™××ª: "+j.payload.name+"; ××¦×‘: "+j.payload.status+"; ×›× ×™×¡×”: "+(j.payload.checkInDate||"×œ× ×™×“×•×¢")+"; ×™×¦×™××”: "+(j.payload.checkOutDate||"×œ× ×™×“×•×¢")+"; ×¢×œ×•×ª ×‘×©×§×œ×™×: "+((ee=j.payload.cost)!=null?ee:"×œ× ×™×“×•×¢")+"; ×©×•×œ×: "+((Z=j.payload.paid)!=null?Z:"×œ× ×™×“×•×¢")+". ×”×¢×¨×•×ª ×§×™×™××•×ª ×™×™×©××¨×•. ×¡×›×•××™ ××§×•×¨ ×œ× ×™×“×•×¢×™× ××• ×‘××˜×‘×¢ ×–×¨ ×œ× ×™×“×¨×¡×• ×¡×›×•××™ ×©×§×œ×™× ×§×™×™××™×.":"×”×–×× ×” ×—×“×©×”"),B.elements.reviewed.checked=!1},B.onsubmit=j=>b(null,null,function*(){var ae,ce;if(j.preventDefault(),!c||!e.open||h!==B||e.querySelector("form")!==B||D)return;if(!B.elements.sourceConsent.checked||!B.elements.reviewed.checked){N("× ×“×¨×©×™× ××™×©×•×¨ ××§×•×¨ ×•×‘×“×™×§×” ××¤×•×¨×©×ª");return}if(!B.reportValidity())return;let ee=new w.defaultView.FormData(B),Z=Object.fromEntries(Object.keys($).map(te=>[te,["total","paid"].includes(te)?ee.get(te)===""?null:Number(ee.get(te)):ee.get(te)]));Z.currency=ee.get("currency"),Z.status=ee.get("status");let ne=n.items.find(te=>te.id===ee.get("bookingId"));if(Z.checkOutDate<=Z.checkInDate){N("×ª××¨×™×š ×”×™×¦×™××” ×—×™×™×‘ ×œ×”×™×•×ª ××—×¨×™ ×ª××¨×™×š ×”×›× ×™×¡×”");return}if(Z.status==="×‘×•×˜×œ"&&!ne){N("×œ×‘×™×˜×•×œ ×‘×—×¨ ×”×–×× ×ª ×œ×™× ×” ×§×™×™××ª");return}D=!0;let V=[...B.querySelectorAll("input,button,select")];V.forEach(te=>te.disabled=!0),N("××××ª ××§×•×¨ ×•×©×•××¨...");try{if(O||(O=yield y("prepare",{hash:E.hash,mime:E.mime,size:E.size,requestId:M})),O.state==="awaiting_upload"){try{yield r.upload(O.path,A)}catch(te){try{let le=yield r.verify(g,O.id);O=J(J({},O),le)}catch(le){throw te}}O.state==="awaiting_upload"&&(O=J(J({},O),yield r.verify(g,O.id)))}if(!c||h!==B||e.querySelector("form")!==B||!e.open)return;F=!0,yield y("commit",{id:O.id,expectedVersion:O.version,reviewed:!0,fields:Z,bookingId:(ae=ne==null?void 0:ne.id)!=null?ae:null,bookingVersion:(ce=ne==null?void 0:ne.version)!=null?ce:null}),F=!1,c&&h===B&&e.querySelector("form")===B&&e.open&&(e.close(),_("×”×”×–×× ×” × ×©××¨×” ×œ××—×¨ ××™×©×•×¨×š. ××™×Ÿ ××™××•×ª ××•×œ ×”×¡×¤×§."),yield S(),s())}catch(te){N(te.message+(F?" ×™×™×ª×›×Ÿ ×©×”×©×¨×ª ×¡×™×™×; ×¨×¢× ×Ÿ ××ª ×”×¨×©×™××” ×œ×¤× ×™ ×©×™× ×•×™ ×”×¤×¨×˜×™×.":""))}finally{D=!1,c&&h===B&&e.querySelector("form")===B&&e.open&&V.forEach(te=>te.disabled=!1)}}),e.showModal()}return S(),()=>{c=!1,d==null||d.abort(),m==null||m.abort(),h&&e.open&&e.querySelector("form")===h&&e.close(),h=null}}var Le=t=>String(t!=null?t:"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),ou=t=>t==="participant"?"××©×ª×ª×£ â€” ××©×™××•×ª ×•×”×¦×¢×•×ª":"×¦×•×¤×” ×‘×œ×‘×“";function $g(t,e){if(!/^[a-f0-9]{64}$/.test(e))throw Error("×§×™×©×•×¨ ×”×–×× ×” ×œ× ×ª×§×™×Ÿ");let n=new URL("./",t);return n.hash="tripInvite="+e,n.href}function su(t){var e,n;return(n=(e=/^#tripInvite=([a-f0-9]{64})$/.exec(t||""))==null?void 0:e[1])!=null?n:null}function lu(t){return{call(i){return b(this,arguments,function*(n,r={}){let s;try{s=yield t.rpc("trip_group",{p_action:n,p_data:r})}catch(d){throw Error("×œ× × ×™×ª×Ÿ ×œ×”×©×œ×™× ××ª ×”×¤×¢×•×œ×”. ×‘×“×•×§ ××ª ×”×—×™×‘×•×¨ ×•× ×¡×” ×©×•×‘.")}let{data:l,error:c}=s;if(c)throw Error(c.code==="40001"?"×”× ×ª×•× ×™× ×”×©×ª× ×•. ×¨×¢× ×Ÿ ×œ×¤× ×™ × ×™×¡×™×•×Ÿ × ×•×¡×£.":c.code==="42501"?"××™×Ÿ ×’×™×©×” ×œ×¤×¢×•×œ×” ××• ×©×”×”×–×× ×” ××™× ×” ××ª××™××” ×œ×—×©×‘×•×Ÿ ×–×”.":c.code==="PGRST202"?"×”×©×™×ª×•×£ ×¢×“×™×™×Ÿ ××™× ×• ×–××™×Ÿ ×‘×©×¨×ª.":"×”×¤×¢×•×œ×” ×œ× ×”×•×©×œ××”. ×‘×“×•×§ ××ª ×”×¤×¨×˜×™×, ×”×—×‘×¨×•×ª ×•×”××’×‘×œ×•×ª ×•× ×¡×” ×©×•×‘.");return l})}}}function du({root:t,dialog:e,trip:n,api:r,state:i={},onChanged:s=()=>{}}){let l=!0,c=0,d=!1,p=null,h="",m=t.ownerDocument.defaultView.crypto.randomUUID(),w=t.ownerDocument;function g(P){l&&t.querySelector("[data-group-feedback]")&&(t.querySelector("[data-group-feedback]").textContent=P)}function y(){return b(this,null,function*(){let P=++c;p||(t.innerHTML='<p role="status">×˜×•×¢×Ÿ ×§×‘×•×¦×”â€¦</p>');try{let S=yield r.call("manage",{tripId:n.id});if(!l||P!==c)return;p=S,x()}catch(S){l&&P===c&&(t.innerHTML='<h2>×”×§×‘×•×¦×” ×©×œ×™</h2><p role="status">'+Le(S.message)+'</p><button type="button" data-group-retry>× ×¡×” ×©×•×‘</button>',t.querySelector("button").onclick=y)}})}function _(P,S,k){return b(this,null,function*(){if(d||!l)return;d=!0;let I=[...t.querySelectorAll("button,input,select")].map(A=>({node:A,disabled:A.disabled}));I.forEach(A=>A.node.disabled=!0);try{let A=yield r.call(P,J({tripId:n.id},S));if(!l)return;k?yield k(A):yield y()}catch(A){g(A.message)}finally{d=!1,l&&I.forEach(A=>{t.contains(A.node)&&(A.node.disabled=A.disabled)})}})}function x(){var E,R,z,T;let P=p.members||[],S=p.invitations||[],k=p.assignments||[],I=p.proposals||[];t.innerHTML='<div class="row"><h2>×”×§×‘×•×¦×” ×©×œ×™</h2><button type="button" data-group-refresh>×¨×¢× ×•×Ÿ ×”×˜×™×•×œ ×•×”×§×‘×•×¦×”</button></div><p>×¤×¨×¡×•× ×™×™×¢×•×“×™ ×©×œ ×©× ×”×˜×™×•×œ, ×ª××¨×™×›×™× ×•×ª×—× ×•×ª ×‘×œ×‘×“. ××™×Ÿ ×©×™×ª×•×£ ×›×¨×˜×™×¡×™×, ×ª×©×œ×•××™ ×ª×•×›× ×”, ××¡××›×ª××•×ª, ××¡××›×™ ××§×•×¨ ××• ×”×¢×¨×•×ª ×¤×¨×˜×™×•×ª. ×¢×“ 25 ×—×‘×¨×™× ×¤×¢×™×œ×™× ×•Ö¾25 ×”×–×× ×•×ª ×¤×ª×•×—×•×ª ×‘×’×¨×¡×ª ×”×‘×“×™×§×”.</p><p data-group-feedback role="status" aria-live="polite"></p><section data-group-members><h3>×—×‘×¨×™× ×•×”×–×× ×•×ª</h3><label>××™×™×œ ×××•××ª ×©×œ ×”××•×–××Ÿ<input name="inviteEmail" type="email" maxlength="254" autocomplete="off"></label><label>×ª×¤×§×™×“<select name="inviteRole"><option value="viewer">×¦×•×¤×” ×‘×œ×‘×“</option><option value="participant">××©×ª×ª×£ â€” ××©×™××•×ª ×•×”×¦×¢×•×ª</option></select></label><button type="button" data-create-invite>×¦×•×¨ ×§×™×©×•×¨ ×”×–×× ×” ××™×©×™</button><p class="muted">×”×§×™×©×•×¨ ×ª×§×£ ×œ×©×‘×¢×” ×™××™× ×•×œ×—×©×‘×•×Ÿ ×”××ª××™× ×‘×œ×‘×“. ××™×Ÿ ×©×œ×™×—×ª ××™×™×œ ××•×˜×•××˜×™×ª. ××“× ×—×“×© ×¦×¨×™×š ×—×©×‘×•×Ÿ ×××•×©×¨; ×”×”×–×× ×” ××™× ×” ×¤×•×ª×—×ª ×”×¨×©××” ×¦×™×‘×•×¨×™×ª.</p>'+(h?'<label>×§×™×©×•×¨ ××™×©×™ â€” ×”×¢×ª×§ ×•×©×œ×— ×œ××•×–××Ÿ<input data-invite-link readonly value="'+Le(h)+'"></label><button type="button" data-copy-invite>×”×¢×ª×§ ×§×™×©×•×¨</button>':"")+"<div data-member-list>"+P.map(O=>"<article><strong>"+Le(O.email||"×—×‘×¨")+"</strong> Â· "+Le(O.status==="active"?ou(O.role):"×”×’×™×©×” ×”×•×¡×¨×”")+(O.status==="active"?'<div class="row"><button type="button" data-revoke-member="'+Le(O.userId)+'">×”×¡×¨ ×’×™×©×”</button><button type="button" data-role-member="'+Le(O.userId)+'">×”×—×œ×£ ×œ'+(O.role==="viewer"?"××©×ª×ª×£":"×¦×•×¤×”")+"</button></div>":"")+"</article>").join("")+"</div><h3>×”×–×× ×•×ª ×©× ×•×¦×¨×•</h3><div data-invitation-list>"+S.map(O=>"<article>"+Le(O.email)+" Â· "+Le(ou(O.role))+" Â· "+Le(O.state==="pending"?new Date(O.expiresAt)>new Date?"×××ª×™× ×” ×œ×§×‘×œ×”":"×¤×’ ×ª×•×§×£":O.state==="accepted"?"×”×ª×§×‘×œ×”":"×‘×•×˜×œ×”")+(O.state==="pending"?'<button type="button" data-revoke-invite="'+Le(O.id)+'">×‘×˜×œ ×”×–×× ×”</button>':"")+"</article>").join("")+"</div></section><section data-group-publication><h3>×¤×¨×¡×•× ×ª×•×›× ×™×ª ×œ×§×‘×•×¦×”</h3><p>"+(p.publication?"×’×¨×¡×” ××©×•×ª×¤×ª "+Le(p.publication.version)+" Â· "+Le(new Date(p.publication.publishedAt).toLocaleString("he-IL")):"×˜×¨× ×¤×•×¨×¡××” ×ª×•×›× ×™×ª. ×—×‘×¨×™× ×œ× ×™×§×‘×œ×• ×’×™×©×” ×œ×˜×™×•×˜×•×ª ×”××§×•×¨.")+"</p><p>×©×: "+Le(n.destination_name||n.title||"×”×˜×™×•×œ")+" Â· ×™×¦×™××”: "+Le(((E=n.settings)==null?void 0:E.start)||"×˜×¨× × ×§×‘×¢×”")+" Â· ××©×š: "+Le((z=(R=n.settings)==null?void 0:R.days)!=null?z:"×œ× ×™×“×•×¢")+" ×™××™×.</p><details><summary>××” ×™×¤×•×¨×¡×: ×ª×—× ×•×ª ×œ×¤×™ ×™××™×</summary><div data-publish-preview>"+n.items.filter(O=>O.kind==="stop").sort((O,M)=>O.payload.day-M.payload.day||O.id.localeCompare(M.id)).map(O=>"<p>×™×•× "+Le(O.payload.day)+" Â· "+Le(O.payload.place)+" Â· "+Le(O.payload.kind)+"</p>").join("")+'</div></details><button type="button" data-publish-group>××©×¨ ×•×¤×¨×¡× ×ª×•×›× ×™×ª ××¦×•××¦××ª ×œ×§×‘×•×¦×”</button><p>×©××™×¨×” ×‘×˜×™×•×œ ××™× ×” ×¤×¨×¡×•× ××•×˜×•××˜×™. ×¢×•×ª×§ ×©×›×‘×¨ × ×¨××” ××• ×”×•×¢×ª×§ ××™× ×• × ××—×§ ××¨×—×•×§ ×œ××—×¨ ×‘×™×˜×•×œ ×’×™×©×”.</p></section><section data-group-tasks><h3>××—×¨×™×•×ª ×œ××©×™××•×ª</h3><div data-task-assignments>'+n.items.filter(O=>O.kind==="task").map(O=>{let M=k.find(D=>D.itemId===O.id);return"<article><strong>"+Le(O.payload.title)+'</strong><label>××—×¨××™<select data-assignee="'+Le(O.id)+'"><option value="">×‘×—×¨ ××©×ª×ª×£</option>'+P.filter(D=>D.status==="active"&&D.role==="participant").map(D=>'<option value="'+Le(D.userId)+'" '+(D.userId===(M==null?void 0:M.userId)?"selected":"")+">"+Le(D.email)+"</option>").join("")+"</select></label>"+(M&&!P.some(D=>D.userId===M.userId&&D.status==="active"&&D.role==="participant")?"<p>× ×“×¨×© ×©×™×•×š ××—×“×© â€” ×”×—×‘×¨ ××™× ×• ××©×ª×ª×£ ×¤×¢×™×œ.</p>":"")+'<button type="button" data-assign-task="'+Le(O.id)+'">×©××•×¨ ××—×¨×™×•×ª</button></article>'}).join("")+"</div></section><section data-group-decisions><h3>×”×¦×¢×•×ª ×•×”×—×œ×˜×•×ª</h3><div data-group-proposals>"+I.map(O=>{var M,D,F,$,B;return"<article><strong>×©×™× ×•×™ ××•×¦×¢: ×™×•× "+Le(O.day)+" Â· "+Le(O.place)+"</strong><p>×œ×¤× ×™ ×”×”×¦×¢×”: ×™×•× "+Le((D=(M=O.before_data)==null?void 0:M.day)!=null?D:"×œ× ×™×“×•×¢")+" Â· "+Le(($=(F=O.before_data)==null?void 0:F.place)!=null?$:"×œ× ×™×“×•×¢")+"</p><p>××¦×™×¢: "+Le(((B=P.find(Y=>Y.userId===O.proposer_id))==null?void 0:B.email)||"×—×‘×¨ ×©××™× ×• ×–××™×Ÿ ×‘×¨×©×™××”")+" Â· "+Le(O.created_at?new Date(O.created_at).toLocaleString("he-IL"):"×–××Ÿ ×œ× ×™×“×•×¢")+"</p><p>××¦×‘: "+Le(O.state==="pending"?"×××ª×™× ×” ×œ×”×›×¨×¢×”":O.state==="approved"?"××•×©×¨×” â€” ×™×© ×œ×¤×¨×¡× ×œ×§×‘×•×¦×”":"× ×“×—×ª×”")+"</p>"+(O.state==="pending"?'<p>×©×™× ×•×™ ××§×•× ××¡×™×¨ ××™×§×•× ×•×§×™×©×•×¨ × ×™×•×•×˜ ×™×©× ×™×. ×”××™×©×•×¨ ××™× ×• ×”×–×× ×” ××¦×œ ×¡×¤×§ ×•××™× ×• ××¤×¨×¡× ××•×˜×•××˜×™×ª.</p><div class="row"><button type="button" data-resolve="'+Le(O.id)+'" data-decision="approve">××©×¨ ×©×™× ×•×™ ×‘×˜×™×•×œ</button><button type="button" data-resolve="'+Le(O.id)+'" data-decision="reject">×“×—×”</button></div>':"")+"</article>"}).join("")+"</div></section>";let A=["members","publication","tasks","decisions"].map(O=>({id:O,label:{members:"×—×‘×¨×™× ×•×”×–×× ×•×ª",publication:"×¤×¨×¡×•× ×ª×•×›× ×™×ª",tasks:"××©×™××•×ª",decisions:"×”×—×œ×˜×•×ª"}[O],nodes:[t.querySelector("[data-group-"+O+"]")]}));mt({root:t,groups:A,state:i.tabs||(i.tabs={}),prefix:"trip-group",label:"× ×™×”×•×œ ×§×‘×•×¦×”"});for(let O of["member-list","invitation-list","task-assignments","group-proposals"]){let M=t.querySelector("[data-"+O+"]"),D=[...M.querySelectorAll(":scope > article")];D.length&&Ce({container:M,items:D,state:i[O]||(i[O]={})})}t.querySelector("[data-group-refresh]").onclick=s,t.querySelector("[name=inviteEmail]").oninput=()=>{m=w.defaultView.crypto.randomUUID()},t.querySelector("[name=inviteRole]").onchange=()=>{m=w.defaultView.crypto.randomUUID()},t.querySelector("[data-create-invite]").onclick=()=>{let O=t.querySelector("[name=inviteEmail]").value.trim(),M=t.querySelector("[name=inviteRole]").value;_("invite",{email:O,role:M,requestId:m},D=>b(null,null,function*(){if(D.needsNewLink){g("×”×‘×§×©×” ×›×‘×¨ ×˜×•×¤×œ×”. ×‘×˜×œ ××ª ×”×”×–×× ×” ×”×§×•×“××ª ×•×¦×•×¨ ×§×™×©×•×¨ ×—×“×© ×× ×”×§×™×©×•×¨ ×œ× ×”×ª×§×‘×œ.");return}h=$g(w.defaultView.location.href,D.token),m=w.defaultView.crypto.randomUUID(),yield y()}))},(T=t.querySelector("[data-copy-invite]"))==null||T.addEventListener("click",()=>b(null,null,function*(){try{yield w.defaultView.navigator.clipboard.writeText(h),g("×”×§×™×©×•×¨ ×”×•×¢×ª×§")}catch(O){g("×”×¢×ª×§ ××ª ×”×§×™×©×•×¨ ××”×©×“×”")}})),t.querySelectorAll("[data-revoke-invite]").forEach(O=>O.onclick=()=>_("revokeInvite",{invitationId:O.dataset.revokeInvite})),t.querySelectorAll("[data-revoke-member]").forEach(O=>O.onclick=()=>{let M=P.find(D=>D.userId===O.dataset.revokeMember);_("revoke",{userId:M.userId,expectedVersion:M.version})}),t.querySelectorAll("[data-role-member]").forEach(O=>O.onclick=()=>{let M=P.find(D=>D.userId===O.dataset.roleMember);_("setRole",{userId:M.userId,expectedVersion:M.version,role:M.role==="viewer"?"participant":"viewer"})}),t.querySelector("[data-publish-group]").onclick=()=>_("publish",{expectedVersion:n.version,expectedItems:n.items.map(O=>({id:O.id,version:O.version})).sort((O,M)=>O.id.localeCompare(M.id))}),t.querySelectorAll("[data-assign-task]").forEach(O=>O.onclick=()=>{var $;let M=n.items.find(B=>B.id===O.dataset.assignTask),D=k.find(B=>B.itemId===M.id),F=[...t.querySelectorAll("[data-assignee]")].find(B=>B.dataset.assignee===M.id);_("assign",{itemId:M.id,userId:F.value,expectedVersion:M.version,expectedAssignmentVersion:($=D==null?void 0:D.version)!=null?$:null})}),t.querySelectorAll("[data-resolve]").forEach(O=>O.onclick=()=>{let M=I.find(D=>D.id===O.dataset.resolve);_("resolve",{proposalId:M.id,expectedVersion:M.version,decision:O.dataset.decision},()=>s())})}return y(),()=>{l=!1,c++,h=""}}var We=t=>String(t!=null?t:"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function cu({root:t,api:e,onOpen:n=()=>{}}){let r=!0;return t.innerHTML='<h2>×˜×™×•×œ×™× ××©×•×ª×¤×™× ××™×ª×™</h2><p role="status">×˜×•×¢×Ÿ ×©×™×ª×•×¤×™×â€¦</p>',e.call("sharedList").then(i=>{if(!r)return;let s=(i==null?void 0:i.trips)||[];t.innerHTML="<h2>×˜×™×•×œ×™× ××©×•×ª×¤×™× ××™×ª×™</h2>"+(s.length?s.map(l=>'<button type="button" data-shared-open="'+We(l.id)+'">'+We(l.name)+" Â· "+(l.role==="participant"?"××©×ª×ª×£":"×¦×¤×™×™×” ×‘×œ×‘×“")+"</button>").join(""):"<p>××™×Ÿ ×˜×™×•×œ×™× ××©×•×ª×¤×™×. ×”×–×× ×” ××™×©×™×ª ×“×•×¨×©×ª ×§×‘×œ×” ×‘×—×©×‘×•×Ÿ ×¢× ×”××™×™×œ ×”×××•××ª ×”××ª××™×.</p>"),t.querySelectorAll("[data-shared-open]").forEach(l=>l.onclick=()=>n(l.dataset.sharedOpen))}).catch(i=>{r&&(t.innerHTML="<h2>×˜×™×•×œ×™× ××©×•×ª×¤×™× ××™×ª×™</h2><p>"+We(i.message)+"</p>")}),()=>{r=!1}}function uu({dialog:t,api:e,token:n,onAccepted:r=()=>{}}){let i=t.ownerDocument;t.innerHTML='<form data-trip-invitation><h2>×”×–×× ×” ××™×©×™×ª ×œ×˜×™×•×œ</h2><p>×”×”×–×× ×” × ×™×ª× ×ª ×œ×§×‘×œ×” ×¨×§ ×‘×—×©×‘×•×Ÿ ×œ×§×•×— ×¤×¢×™×œ ×¢× ×”××™×™×œ ×”×××•××ª ×”××ª××™×. ×”×§×‘×œ×” ×××¤×©×¨×ª ×’×™×©×” ×œ×ª×•×›× ×™×ª ×©×”×××¨×’×Ÿ ×‘×—×¨ ×œ×¤×¨×¡×, ×œ×¤×™ ×”×ª×¤×§×™×“ ×©×”×•×’×“×¨. ××™×Ÿ ×”×¨×©××ª ×¨×›×™×©×” ××• ×”×¤×¢×œ×ª AI ×‘×©× ×”×××¨×’×Ÿ.</p><div class="row"><button type="submit" data-accept-trip-invite>××©×¨ ×”×¦×˜×¨×¤×•×ª ×œ×˜×™×•×œ</button><button type="button" data-dismiss-trip-invite>×¡×’×™×¨×”</button></div><p role="status" data-invite-feedback></p></form>';let s=t.querySelector("form"),l=!1,c=()=>t.open&&t.querySelector("[data-trip-invitation]")===s;return s.querySelector("[data-dismiss-trip-invite]").onclick=()=>{l||t.close()},s.onsubmit=d=>b(null,null,function*(){if(d.preventDefault(),!(l||!c())){l=!0,s.querySelectorAll("button").forEach(p=>p.disabled=!0);try{let p=yield e.call("accept",{token:n});if(!c())return;t.close(),r(p.tripId)}catch(p){c()&&(s.querySelector("[data-invite-feedback]").textContent=p.message)}finally{c()&&(l=!1,s.querySelectorAll("button").forEach(p=>p.disabled=!1))}}}),t.showModal(),()=>{n="",c()&&t.close()}}function pu({root:t,dialog:e,api:n,tripId:r,state:i={},onBack:s=()=>{}}){let l=!0,c=0,d=null,p=!1,h=null,m=t.ownerDocument,w=new Map,g=S=>{l&&t.querySelector("[data-shared-feedback]")&&(t.querySelector("[data-shared-feedback]").textContent=S)};function y(){return b(this,null,function*(){let S=++c;d||(t.innerHTML='<p role="status">×˜×•×¢×Ÿ ×ª×•×›× ×™×ª ××©×•×ª×¤×ªâ€¦</p>');try{let k=yield n.call("read",{tripId:r});l&&c===S&&(d=k,P())}catch(k){l&&c===S&&(t.innerHTML="<h2>×˜×™×•×œ ××©×•×ª×£</h2><p>"+We(k.message)+'</p><button type="button" data-shared-back>×—×–×¨×” ×œ×˜×™×•×œ×™×</button>',t.querySelector("button").onclick=s)}})}function _(S,k,I){return b(this,null,function*(){if(p||!l)return;p=!0;let A=[...t.querySelectorAll("button")].map(E=>({node:E,disabled:E.disabled}));A.forEach(E=>E.node.disabled=!0);try{let E=yield n.call(S,J({tripId:r},k));if(!l)return;I?yield I(E):yield y()}catch(E){g(E.message)}finally{p=!1,l&&A.forEach(E=>{t.contains(E.node)&&(E.node.disabled=E.disabled)})}})}function x(S){if(!e||p||!l)return;e.innerHTML='<form data-group-proposal-form><h2>×”×¦×¢×ª ×©×™× ×•×™ ×œ×××¨×’×Ÿ</h2><p>×”×¦×¢×” ×‘×œ×‘×“. ×”×××¨×’×Ÿ ×™×‘×“×•×§ ×•×™×—×œ×™×˜; ××™×Ÿ ×©×™× ×•×™ ××•×˜×•××˜×™ ××• ×”×–×× ×”.</p><label>×™×•× ×‘×˜×™×•×œ<input name="proposalDay" type="number" min="1" max="'+We(d.publication.content.days||365)+'" value="'+We(S.day)+'" required></label><label>××§×•× ××•×¦×¢<input name="proposalPlace" maxlength="200" value="'+We(S.place)+'" required></label><div class="row"><button type="submit">×©×œ×— ×”×¦×¢×” ×œ×××¨×’×Ÿ</button><button type="button" data-close-proposal>×‘×™×˜×•×œ</button></div><p data-proposal-error role="status"></p></form>';let k=e.querySelector("form"),I=m.defaultView.crypto.randomUUID();h=k;let A=!1,E=()=>l&&e.open&&e.querySelector("[data-group-proposal-form]")===k;k.querySelector("[data-close-proposal]").onclick=()=>{A||e.close()},k.onsubmit=R=>b(null,null,function*(){if(R.preventDefault(),!(A||!E())){A=!0,k.querySelectorAll("button,input").forEach(z=>z.disabled=!0);try{if(yield n.call("propose",{tripId:r,itemId:S.id,publicationVersion:d.publication.version,place:k.elements.proposalPlace.value.trim(),day:Number(k.elements.proposalDay.value),requestId:I}),!E())return;e.close(),h=null,yield y()}catch(z){E()&&(k.querySelector("[data-proposal-error]").textContent=z.message)}finally{E()&&(A=!1,k.querySelectorAll("button,input").forEach(z=>z.disabled=!1))}}}),e.showModal()}function P(){var E;let S=d.publication,k=S==null?void 0:S.content,I=d.role==="participant";t.innerHTML='<div class="row"><h2>'+We((k==null?void 0:k.name)||"×˜×™×•×œ ××©×•×ª×£")+'</h2><button type="button" data-shared-back>×—×–×¨×” ×œ×˜×™×•×œ×™×</button><button type="button" data-shared-refresh>×¨×¢× ×Ÿ ×ª×•×›× ×™×ª</button></div><p>'+(I?"××©×ª×ª×£ â€” ××©×™××•×ª ×•×”×¦×¢×•×ª":"×¦×¤×™×™×” ×‘×œ×‘×“")+' Â· ××•×¦×’×ª ×¨×§ ×”×ª×•×›× ×™×ª ×©×”×××¨×’×Ÿ ×¤×¨×¡×. ××™×Ÿ ×’×™×©×” ×œ× ×ª×•× ×™ ×”×—×©×‘×•×Ÿ ×©×œ×•.</p><p data-shared-feedback role="status"></p><section data-shared-route><h3>×ª×•×›× ×™×ª ×©×¤×•×¨×¡××”</h3>'+(S?"<p>×’×¨×¡×” "+We(S.version)+" Â· ×¢×•×“×›× ×” "+We(new Date(S.publishedAt).toLocaleString("he-IL"))+" Â· ×™×¦×™××” "+We(k.start||"×˜×¨× × ×§×‘×¢×”")+"</p><div data-shared-stops>"+k.stops.map(R=>"<article><strong>×™×•× "+We(R.day)+" Â· "+We(R.place)+"</strong><p>"+We(R.kind)+"</p>"+(I?'<button type="button" data-propose-change="'+We(R.id)+'">×”×¦×¢ ×©×™× ×•×™</button>':"")+"</article>").join("")+"</div>":"<p>×”×××¨×’×Ÿ ×¢×“×™×™×Ÿ ×œ× ×¤×¨×¡× ×ª×•×›× ×™×ª.</p>")+"</section><section data-shared-tasks><h3>×”××©×™××•×ª ×©×œ×™</h3><div data-shared-task-list>"+(d.tasks||[]).map(R=>"<article><strong>"+We(R.title)+"</strong><p>"+We(R.dueDate||"×œ×œ× ××•×¢×“ ××—×¨×•×Ÿ")+" Â· "+(R.done?"×”×•×©×œ××”":"×œ×‘×™×¦×•×¢")+"</p>"+(I&&!R.done?'<button type="button" data-complete-shared-task="'+We(R.id)+'">×¡××Ÿ ×©×‘×•×¦×¢</button>':"")+"</article>").join("")+"</div>"+((E=d.tasks)!=null&&E.length?"":"<p>××™×Ÿ ××©×™××•×ª ×”××©×•×™×›×•×ª ×œ×š.</p>")+"</section><section data-shared-decisions><h3>×”×”×¦×¢×•×ª ×©×œ×™</h3>"+(d.proposals||[]).map(R=>"<article>×™×•× "+We(R.day)+" Â· "+We(R.place)+" Â· "+We(R.state==="pending"?"×××ª×™× ×”":R.state==="approved"?"××•×©×¨×”; ×ª×•×¤×™×¢ ×œ××—×¨ ×¤×¨×¡×•× ×”×××¨×’×Ÿ":"× ×“×—×ª×”")+"</article>").join("")+'</section><button type="button" data-leave-group>×¢×–×•×‘ ××ª ×”×§×‘×•×¦×”</button>';let A=[{id:"route",label:"×ª×•×›× ×™×ª ×©×¤×•×¨×¡××”",nodes:[t.querySelector("[data-shared-route]")]}];I?A.push({id:"tasks",label:"×”××©×™××•×ª ×©×œ×™",nodes:[t.querySelector("[data-shared-tasks]")]},{id:"decisions",label:"×”×”×¦×¢×•×ª ×©×œ×™",nodes:[t.querySelector("[data-shared-decisions]")]}):(t.querySelector("[data-shared-tasks]").remove(),t.querySelector("[data-shared-decisions]").remove()),mt({root:t,groups:A,state:i.tabs||(i.tabs={}),prefix:"shared-trip",label:"×˜×™×•×œ ××©×•×ª×£"});for(let R of["[data-shared-stops]","[data-shared-task-list]"]){let z=t.querySelector(R);z&&Ce({container:z,items:[...z.querySelectorAll(":scope > article")],state:i[R]||(i[R]={})})}t.querySelector("[data-shared-back]").onclick=s,t.querySelector("[data-shared-refresh]").onclick=y,t.querySelector("[data-leave-group]").onclick=()=>_("leave",{expectedVersion:d.membershipVersion},s),t.querySelectorAll("[data-propose-change]").forEach(R=>R.onclick=()=>x(k.stops.find(z=>z.id===R.dataset.proposeChange))),t.querySelectorAll("[data-complete-shared-task]").forEach(R=>R.onclick=()=>{let z=d.tasks.find(T=>T.id===R.dataset.completeSharedTask);w.has(z.id+":"+z.version)||w.set(z.id+":"+z.version,m.defaultView.crypto.randomUUID()),_("complete",{itemId:z.id,expectedVersion:z.version,requestId:w.get(z.id+":"+z.version)})})}return y(),()=>{l=!1,c++,w.clear(),h&&e.querySelector("[data-group-proposal-form]")===h&&e.close()}}var Jt=t=>String(t!=null?t:"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Hg={session:"×“×™×•×•×— ×—×™×‘×•×¨",session_start:"×ª×—×™×œ×ª ×©×™××•×© ×‘×—×©×‘×•×Ÿ",session_end:"×‘×§×©×ª ×™×¦×™××” ××”×—×©×‘×•×Ÿ",action_failed:"×“×™×•×•×— ×¢×œ ×©××™×¨×” ×©×œ× ×”×•×©×œ××”",customer:"×œ×§×•×—",admin:"×× ×”×œ",agent:"×¡×•×›×Ÿ",system:"××¢×¨×›×ª",insert:"×™×¦×™×¨×”",update:"×¢×“×›×•×Ÿ",delete:"××—×™×§×”",journal_view:"×¦×¤×™×™×” ×‘×ª×™×¢×•×“",page_view:"×›× ×™×¡×” ×œ××¡×š",trips:"×˜×™×•×œ×™×",trip_items:"×¤×¨×™×˜×™ ×˜×™×•×œ ×•××©×™××•×ª",planner_runs:"×”×¨×¦×•×ª ×”×¡×•×›×Ÿ",agent_daily_settings:"×”×’×“×¨×•×ª ×¡×•×›×Ÿ ×™×•××™",agent_daily_checks:"×“×•×—×•×ª ×™×•××™×™×",agent_booking_requests:"××™×©×•×¨×™×",account_access:"×¡×˜×˜×•×¡ ×—×©×‘×•×Ÿ",profiles:"×¤×¨×˜×™ ×œ×§×•×—",orders:"×ª×©×œ×•××™×",entitlements:"×–×›××•×ª ×—×‘×™×œ×”",package_trials:"× ×™×¡×™×•×Ÿ ×¨××©×•× ×™",package_versions:"×’×¨×¡××•×ª ×—×‘×™×œ×•×ª",package_catalog:"×§×˜×œ×•×’ ×—×‘×™×œ×•×ª",billing_config:"×”×’×“×¨×•×ª ×¡×œ×™×§×”",customer_admin_events:"× ×™×”×•×œ ×œ×§×•×—",settings_audit:"×”×’×“×¨×•×ª ×× ×”×œ",account_audit:"×©×™× ×•×™ ×¡×˜×˜×•×¡ ×œ×§×•×—",sms_requests:"×©×œ×™×—×ª SMS",terms_publications:"×ª× ××™ ×©×™××•×©",journal:"×™×•××Ÿ ×¤×¢×•×œ×•×ª",management:"××¡×›×™ × ×™×”×•×œ",usage:"×¡×˜×˜×™×¡×˜×™×§×ª ×©×™××•×©×™×•×ª",view:"×¦×¤×™×™×”",click:"×œ×—×™×¦×”",destinations:"×™×¢×“×™×",trip:"×˜×™×•×œ",account:"×—×©×‘×•×Ÿ",planning:"×ª×›× ×•×Ÿ",daily:"×¡×•×›×Ÿ ×™×•××™",route:"××¡×œ×•×œ",booking:"×”×–×× ×•×ª",task:"××©×™××•×ª",gear:"×¦×™×•×“",place:"××§×•××•×ª",stop:"×¢×¦×™×¨×•×ª",expenses:"×”×•×¦××•×ª",page:"×¢××•×“",navigate:"× ×™×•×•×˜",add:"×”×•×¡×¤×”",edit:"×¢×¨×™×›×”",save:"×©××™×¨×”",cancel:"×‘×™×˜×•×œ",refresh:"×¨×¢× ×•×Ÿ",export:"×™×™×¦×•×",import:"×™×™×‘×•×",approve:"××™×©×•×¨",reject:"×“×—×™×™×”",other:"×¤×¢×•×œ×” ××—×¨×ª"},Xa=t=>Hg[t]||t||"â€”";function hu(t=new Date){let e=Object.fromEntries(new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Jerusalem",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(t).map(i=>[i.type,i.value])),n=e.year+"-"+e.month+"-"+e.day,r=new Date(n+"T12:00:00Z");return r.setUTCDate(r.getUTCDate()-6),{from:r.toISOString().slice(0,10),to:n}}var mu=t=>/^\d{4}-\d{2}-\d{2}$/.test(t)&&Number.isFinite(Date.parse(t))&&new Date(t).toISOString().slice(0,10)===t;function xo({root:t,api:e,customerId:n=null,mode:r="journal"}){let i={},s=!0,l=0,c=[],d=null,p=hu();t.innerHTML='<section dir="rtl"><h2>'+(r==="usage"?"×¡×˜×˜×™×¡×˜×™×§×ª ×©×™××•×©×™×•×ª":n?"×™×•××Ÿ ×¤×¢×•×œ×•×ª ×”×œ×§×•×— ×•×”×¡×•×›×Ÿ":"×™×•××Ÿ ×¤×¢×•×œ×•×ª ×× ×”×œ")+'</h2><form class="row" data-activity-range><label>××ª××¨×™×š<input type="date" name="from" required value="'+p.from+'"></label><label>×¢×“ ×ª××¨×™×š<input type="date" name="to" required value="'+p.to+'"></label><button>×”×¦×’</button><button type="button" data-week>7 ×™××™× ××—×¨×•× ×™×</button></form><p>×”×ª××¨×™×›×™× ×œ×¤×™ ×©×¢×•×Ÿ ×™×©×¨××œ, ×›×•×œ×œ ×ª××¨×™×š ×”×¡×™×•×.</p><p>'+(r==="usage"?"× ×ª×•× ×™× ××¦×˜×‘×¨×™× ××›×œ ×”×œ×§×•×—×•×ª. ×¦×¤×™×•×ª ×•×œ×—×™×¦×•×ª ××“×•×•×—×•×ª ××”×××©×§ ×•××™× ×Ÿ ××™×©×•×¨ ×œ×‘×™×¦×•×¢ ×¤×¢×•×œ×”; ×—×¡×™××ª ××™×¡×•×£ ××• × ×™×ª×•×§ ×¢×©×•×™×™× ×œ×”×©×¤×™×¢ ×¢×œ ×”×¡×¤×™×¨×”.":"×”×ª×™×¢×•×“ ××ª×—×™×œ ×××•×¢×“ ×”×ª×§× ×ª ×”×™×•××Ÿ. ×©×™× ×•×™×™× ×©× ×©××¨×• ×‘×©×¨×ª ××ª×•×¢×“×™× ×‘× ×¤×¨×“ ××›× ×™×¡×•×ª ×œ××¡×š ×”××“×•×•×—×•×ª ××”×××©×§. ×ª×©×œ×•× ×˜×¡×˜ ××™× ×• ×—×™×•×‘ ×××™×ª×™.")+'</p><p data-activity-status role="status" aria-live="polite"></p><div data-activity-results></div><button type="button" data-more hidden style="display:none">×”×¦×’ ×¤×¢×•×œ×•×ª ×§×•×“××•×ª</button></section>';let h=S=>t.querySelector(S),m=h("form"),w=h("[data-activity-status]"),g=h("[data-activity-results]"),y=h("[data-more]");function _(){g.innerHTML=c.map(S=>'<article class="package-disclosure" style="margin:8px 0;padding:12px"><strong>'+Jt(Xa(S.entity))+" Â· "+Jt(Xa(S.action))+"</strong><p>"+Jt(new Date(S.created_at).toLocaleString("he-IL",{timeZone:"Asia/Jerusalem"}))+" Â· "+Jt(Xa(S.actor_kind))+" Â· "+(S.source==="authenticated_client"?"×“×™×•×•×— ××”×××©×§":"× ×¨×©× ×‘×©×¨×ª")+"</p><small>××–×”×” ××™×¨×•×¢: "+Jt(S.id)+" Â· ××‘×¦×¢: "+Jt(S.actor_id||"×©×™×¨×•×ª ××¢×¨×›×ª")+(S.customer_id?" Â· ×œ×§×•×—: "+Jt(S.customer_id):"")+"</small><details><summary>×¤×¨×˜×™ ×”×¤×¢×•×œ×” ×•×”×©×™× ×•×™</summary><p>×™×©×•×ª: "+Jt(S.entity_id||"â€”")+'</p><pre dir="ltr" style="white-space:pre-wrap;overflow-wrap:anywhere">'+Jt(JSON.stringify({before:S.before_data,after:S.after_data},null,2))+"</pre></details></article>").join("")||"<p>××™×Ÿ ×¤×¢×•×œ×•×ª ×‘×ª×§×•×¤×” ×©× ×‘×—×¨×”.</p>",Ce({container:g,items:[...g.querySelectorAll(":scope > article")],state:i})}function x(S=!1){return b(this,null,function*(){var I,A;let k=++l;y.disabled=!0,w.textContent="×˜×•×¢×Ÿâ€¦",S||(i.page=0,c=[],d=null,g.replaceChildren(),y.hidden=!0,y.style.display="none");try{let E=r==="usage"?yield e.usage(p):yield e.activity(se(J({},p),{customerId:n,before:d}));if(!s||k!==l)return;if(r==="usage"){if(!Array.isArray(E.rows))throw Error();g.innerHTML="<p>××™×¨×•×¢×™×: "+Jt(E.events)+" Â· ×œ×§×•×—×•×ª ×™×™×—×•×“×™×™× ×‘×ª×§×•×¤×”: "+Jt(E.customers)+'</p><div style="overflow:auto"><table style="width:100%;border-collapse:collapse;text-align:right"><thead><tr><th style="padding:10px 12px;border-bottom:1px solid #454052">×™×•×</th><th style="padding:10px 12px;border-bottom:1px solid #454052">×¢××•×“</th><th style="padding:10px 12px;border-bottom:1px solid #454052">×¤×¢×™×œ×•×ª</th><th style="padding:10px 12px;border-bottom:1px solid #454052">×¤×¢×•×œ×”</th><th style="padding:10px 12px;border-bottom:1px solid #454052">××™×¨×•×¢×™×</th><th style="padding:10px 12px;border-bottom:1px solid #454052">×œ×§×•×—×•×ª ×™×™×—×•×“×™×™× ×‘×™×•× ×•×‘×¤×¢×™×œ×•×ª</th></tr></thead><tbody>'+E.rows.map(z=>"<tr>"+[z.day,Xa(z.page),Xa(z.kind),Xa(z.control),z.events,z.customers].map(T=>'<td style="padding:10px 12px;border-bottom:1px solid #454052">'+Jt(T)+"</td>").join("")+"</tr>").join("")+"</tbody></table></div>"+(E.rows.length?"":"<p>××™×Ÿ × ×ª×•× ×™ ×©×™××•×© ×œ×ª×§×•×¤×” ×©× ×‘×—×¨×”.</p>");let R=g.querySelector("table");Ce({container:R.parentElement,items:[...R.querySelectorAll("tbody tr")],state:i})}else{if(!Array.isArray(E.events))throw Error();c.push(...E.events),d=(A=(I=c.at(-1))==null?void 0:I.id)!=null?A:null,y.hidden=!E.hasMore,y.style.display=E.hasMore?"":"none",_()}w.textContent="×¢×•×“×›×Ÿ"}catch(E){s&&k===l&&(w.textContent="×œ× × ×™×ª×Ÿ ×œ×˜×¢×•×Ÿ ××ª ×”×ª×™×¢×•×“. ××¤×©×¨ ×œ× ×¡×•×ª ×©×•×‘; ××™×Ÿ ×œ×”×¡×™×§ ×©×œ× ×‘×•×¦×¢×• ×¤×¢×•×œ×•×ª.")}finally{s&&k===l&&(y.disabled=!1)}})}function P(){let S=m.elements.from.value,k=m.elements.to.value;if(!mu(S)||!mu(k)||S>k||(Date.parse(k)-Date.parse(S))/864e5>365){w.textContent="×™×© ×œ×‘×—×•×¨ ×˜×•×•×— ×ª××¨×™×›×™× ×ª×§×™×Ÿ ×©×œ ×¢×“ 366 ×™××™×.";return}p={from:S,to:k},x()}return m.onsubmit=S=>{S.preventDefault(),P()},h("[data-week]").onclick=()=>{let S=hu();m.elements.from.value=S.from,m.elements.to.value=S.to,P()},y.onclick=()=>x(!0),x(),()=>{s=!1,l++}}var Fg=new Set(["destinations","trip","account","planning","daily","route","booking","task","gear","place","stop","expenses"]),Vg=new Set(["navigate","add","edit","delete","save","cancel","planning","account","refresh","export","import","approve","reject"]);function fu({document:t,context:e,send:n}){let r=!0,i=[],s=!1,l=null,c=t.defaultView;function d(){var x;let _=(x=e())==null?void 0:x.page;return Fg.has(_)?_:"trip"}function p(_,x){!r||i.length>=30||i.push({id:c.crypto.randomUUID(),kind:_,page:d(),control:x})}function h(){let _=d();_!==l&&(l=_,p("view","page"))}function m(_){var S,k,I;let x=(k=(S=_.target).closest)==null?void 0:k.call(S,"button,a,summary");if(!x||x.disabled)return;let P=x.dataset.action||x.dataset.usageControl||((I=x.id)==null?void 0:I.replace(/^(add|edit|delete|save|cancel|refresh|export|import|approve|reject|planning|account)(?:[-_].*)?$/,"$1"));p("click",Vg.has(P)?P:x.hasAttribute("data-tab")||x.hasAttribute("data-section-tab")||x.hasAttribute("data-destination-open")?"navigate":"other")}function w(){return b(this,null,function*(){if(!r||s||!i.length)return;s=!0;let _=i;i=[];try{yield n(_)}catch(x){}finally{s=!1}})}let g=new c.MutationObserver(h);for(let _ of["view","tabs","editor"]){let x=t.getElementById(_);x&&g.observe(x,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["open"]})}t.addEventListener("click",m,!0);let y=c.setInterval(w,3e3);return h(),{flush:w,dispose(){r=!1,i=[],c.clearInterval(y),g.disconnect(),t.removeEventListener("click",m,!0)}}}function Mt(t,e=null){let n=t==="test"||t==="live"?t:"unknown";if((e==null?void 0:e.ownerDocument)&&Array.from(e.ownerDocument.querySelectorAll(".billing-mode-notice[data-billing-mode]")).find(s=>!e.contains(s)&&s.dataset.paymentMode===n&&!s.closest("[hidden]")&&(!s.closest("dialog")||s.closest("dialog").open)))return'<span data-billing-mode data-payment-mode="'+n+'" hidden></span>';let i=t==="test"?"×¡×œ×™×§×” ×‘××¦×‘ ×˜×¡×˜ â€” ×‘×“×™×§×•×ª ×‘×œ×‘×“. ××™×Ÿ ×œ×”×–×™×Ÿ ×›×¨×˜×™×¡ ×××™×ª×™. ×ª×©×œ×•× ×˜×¡×˜ ××™× ×• ×—×™×•×‘ ×××™×ª×™. ×©×™××•×© ×‘Ö¾AI ×¢×©×•×™ ×œ×¢×œ×•×ª ×›×¡×£ ×‘×›×¤×•×£ ×œ×ª×§×¨×•×ª ×”×§×™×™××•×ª.":t==="live"?"×¡×œ×™×§×” ×—×™×” â€” ×ª×©×œ×•× ×‘×›×¡×£ ×××™×ª×™.":"××¦×‘ ×”×¡×œ×™×§×” ×˜×¨× ××•××ª â€” ×”×ª×©×œ×•× ×—×¡×•×.";return'<aside data-billing-mode data-payment-mode="'+n+'" class="billing-mode-notice" dir="rtl" role="note"><strong>'+i+"</strong></aside>"}function Ya(t){let e={paid:"×©×•×œ×",pending:"×××ª×™×Ÿ ×œ×ª×©×œ×•× ××• ×œ××™××•×ª",creating:"×‘×”×§××”",attention:"×“×•×¨×© ×‘×™×¨×•×¨ â€” ××™×Ÿ ××™×©×•×¨ ×œ×ª×©×œ×•×"}[t.state]||"××¦×‘ ×œ× ××•×›×¨ â€” ×™×© ×œ×‘×¨×¨";return t.payment_mode==="test"?"×˜×¡×˜ â€” "+(t.state==="paid"?"×‘×“×™×§×” ××•×©×¨×”; ×œ×œ× ×—×™×•×‘ ×××™×ª×™":e):e}var ya=(t,e)=>t[e]||(t[e]={});function gu(t,e,n){if(!e.length)return;let r=t.ownerDocument.createElement("details"),i=t.ownerDocument.createElement("summary");r.className="section-explanation",i.textContent=n,r.append(i,...e),t.append(r)}function bu(t,e){var c;let n=t.querySelector(".expenses-page"),r=[...n.querySelectorAll(":scope > section")],i=r[0].querySelector(".row");n.prepend(i),gu(r[0],[...r[0].querySelectorAll(":scope > p.muted")],"×”×¡×‘×¨ ×¢×œ ×”×ª×§×¦×™×‘ ×•×”×—×™×©×•×‘×™×"),mt({root:n,prefix:"expenses",label:"××–×•×¨×™ ×ª×§×¦×™×‘ ×•×”×•×¦××•×ª",state:e,groups:r.map((d,p)=>({id:["summary","categories","details"][p],label:["×¡×™×›×•×","×¡×˜×˜×™×¡×˜×™×§×•×ª ×œ×¤×™ ×§×˜×’×•×¨×™×”","×¤×™×¨×•×˜ ×”×•×¦××•×ª"][p],nodes:[d]}))});let s=n.querySelector(".expense-list");Ce({container:s,items:[...s.querySelectorAll(":scope > .expense-row")],state:ya(e,"pages-"+(((c=n.querySelector("[data-expense-filter]"))==null?void 0:c.value)||"all"))});let l=n.querySelector(".expense-table");l&&Ce({container:l.parentElement,items:[...l.querySelectorAll("tbody tr")],state:ya(e,"categoryPages")})}function yu(t,e){let n=t.querySelector(".agent-hub"),r=[...n.querySelectorAll(":scope > section")],i=r[0],s=n.querySelector(".trip-completion"),l=n.querySelector("[data-run-progress]"),c=r.find(w=>{var g;return((g=w.querySelector("h2"))==null?void 0:g.textContent)==="×‘×§×©×•×ª ××™×©×•×¨ ×•×”×¦×¢×•×ª"}),d=r.find(w=>{var g;return((g=w.querySelector("h2"))==null?void 0:g.textContent)==="×“×•×´×—×•×ª ×™×•××™×™×"}),p=i.querySelector(".row"),h=i.querySelector("[data-daily-feedback]");n.prepend(p),p.after(h),gu(i,[...i.querySelectorAll(":scope > p")].slice(0,2),"××™×š ×¤×•×¢×œ×ª ×”×‘×“×™×§×” ×”×™×•××™×ª"),mt({root:n,prefix:"agent",label:"××–×•×¨×™ ××™×©×•×¨×™× ×•×“×•×—×•×ª",state:e,groups:[{id:"status",label:"××¦×‘ ×”×¡×•×›×Ÿ",nodes:[i,l]},{id:"preparation",label:"×”×ª×§×“××•×ª ×”×”×›× ×•×ª",nodes:[s]},{id:"approvals",label:"×”×¦×¢×•×ª ×œ××™×©×•×¨",nodes:[c]},{id:"reports",label:"×“×•×—×•×ª ×™×•××™×™×",nodes:[d]}]}),c&&Ce({container:c,items:[...c.querySelectorAll(":scope > .daily-offer")],state:ya(e,"approvalPages")}),d&&Ce({container:d,items:[...d.querySelectorAll(":scope > .daily-report")],state:ya(e,"reportPages")});let m=s==null?void 0:s.querySelector(".completion-categories");m&&Ce({container:m,items:[...m.children],state:ya(e,"preparationPages")})}function vu(t,e){let n=t.querySelector("section"),r=t.querySelector("#export"),i=t.querySelector("#import").closest("label"),s=t.querySelector("#localimport");mt({root:n,prefix:"backup",state:e,groups:[{id:"export",label:"×”×•×¨×“×ª ×’×™×‘×•×™",nodes:[r]},{id:"import",label:"×™×™×‘×•× ×’×™×‘×•×™",nodes:[i]},{id:"local",label:"× ×ª×•× ×™× ××”××›×©×™×¨",nodes:[s]}]})}function wu(t,{state:e,kind:n,items:r}){var c,d;for(let[p,h]of[["policies",".policy-cards"],["reviews",".policy-reviews"]]){let m=t.querySelector(h);m&&Ce({container:m,items:[...m.querySelectorAll(":scope > article")],state:ya(e,p)})}let i=t.querySelector(".workflow-table");i&&Ce({container:i.parentElement,items:[...i.querySelectorAll("tbody tr")],state:ya(e,"statPages")});let s=t.querySelector(".cards");if(!s)return;let l=[...s.querySelectorAll(":scope > [data-id]")];if(n==="stop"){for(let p of l)p.dataset.day=String((d=(c=r.find(h=>h.id===p.dataset.id))==null?void 0:c.payload.day)!=null?d:"");$c({container:s,items:l,state:e})}else Ce({container:s,items:l,state:e})}var Zg=[["home","×¡×§×™×¨×”"],["users","××©×ª××©×™×"],["package","×—×‘×™×œ×•×ª ×•×ª××—×•×¨"],["providers","×¡×¤×§×™×"],["terms","×ª× ××™ ×©×™××•×©"],["audit","×¤×¢×•×œ×•×ª ×× ×”×œ"],["usage","×¡×˜×˜×™×¡×˜×™×§×ª ×©×™××•×©×™×•×ª"]],Wg=[["maps","Google Maps Platform"],["sms","SMS4FREE"],["billing","×¡×¤×§ ×¡×œ×™×§×”"],["hotel-directory","×¡×¤×¨ ××œ×•× ××•×ª"],["duffel","Duffel Flights"]];function _u({root:t,navigate:e,logout:n,password:r,active:i="home"}){t.dataset.adminNavigation="",t.innerHTML='<nav aria-label="× ×™×•×•×˜ ×¨××©×™ ×‘× ×™×”×•×œ ×”××¢×¨×›×ª">'+Zg.filter(([p])=>p!=="providers").map(([p,h])=>'<button type="button" data-admin-destination="'+p+'" data-manage-'+p+" "+(p===i?'aria-current="page"':"")+">"+h+"</button>").join("")+'<details class="admin-navigation-providers" data-admin-providers><summary data-manage-providers>×¡×¤×§×™×</summary><div>'+Wg.map(([p,h])=>'<button type="button" data-provider-menu="'+p+'" data-manage-'+p+">"+h+"</button>").join("")+'</div></details><details class="admin-navigation-account"><summary>×—×©×‘×•×Ÿ</summary><div><button type="button" data-admin-password>×©×™× ×•×™ ×¡×™×¡××”</button><button type="button" data-admin-logout>×™×¦×™××”</button></div></details></nav>';let s=p=>t.ownerDocument.querySelectorAll("[data-admin-destination]").forEach(h=>{h.dataset.adminDestination===p?h.setAttribute("aria-current","page"):h.removeAttribute("aria-current")});t.querySelectorAll("[data-admin-destination]").forEach(p=>p.onclick=()=>{t.querySelectorAll("details").forEach(h=>h.open=!1),s(p.dataset.adminDestination),e(p.dataset.adminDestination)}),t.querySelectorAll("[data-provider-menu]").forEach(p=>p.onclick=()=>{t.querySelectorAll("details").forEach(h=>h.open=!1),e(p.dataset.providerMenu)}),t.querySelector("[data-admin-password]").onclick=()=>{t.querySelector("details").open=!1,r()},t.querySelector("[data-admin-logout]").onclick=n;let l=t.ownerDocument.defaultView,c=()=>{t.dataset.adminNavigationLocation==="page"&&t.ownerDocument.documentElement.style.setProperty("--admin-navigation-space",Math.ceil(t.getBoundingClientRect().height)+12+"px")},d=l.ResizeObserver?new l.ResizeObserver(c):null;return d==null||d.observe(t),c(),()=>{d==null||d.disconnect(),t.replaceChildren()}}var Gg=t=>String(t!=null?t:"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Kg=["apiNameConfigured","terminalSecretConfigured","terminalMatches","checkoutEnabled","serverBillingEnabled","cardSetupEnabled","serverCardStorageEnabled","packageConfigured"];function xu(t){if(!["test","live"].includes(t==null?void 0:t.paymentMode)||Kg.some(e=>typeof t[e]!="boolean")||!(t.terminal===null||Number.isSafeInteger(t.terminal)&&t.terminal>0)||!["test","live",null].includes(t.serverMode))throw Error("Invalid configuration")}function ku({root:t,api:e,state:n={}}){let r=!0,i=0,s=!1,l=!1,c=!!(n.checkoutEnabled||n.cardSetupEnabled);t.innerHTML=Mt(n.paymentMode,t)+"<h3>Cardcom â€” "+(n.checkoutEnabled?"×¡×œ×™×§×” ××•×¤×¢×œ×ª":"×”×—×™×‘×•×¨ ×›×‘×•×™")+'</h3><p>×¢×¨×™×›×ª ×¤×¨×˜×™ ×”×—×™×‘×•×¨ ×•×©××™×¨×ª× ×œ×× ×”×œ ×¤×¢×™×œ ×‘×œ×‘×“. ×©×“×•×ª ×”××¡×•×× ×™× ×‘Ö¾* ×”× ×—×•×‘×”. ×”×¤×¢×œ×” ×•××¢×‘×¨ ×œ×—×™ ×™×™×¤×ª×—×• ×œ××—×¨ ×”×©×œ××ª ×‘×“×™×§×•×ª ×”×§×‘×œ×”.</p><a data-cardcom-login href="https://secure.cardcom.solutions/" target="_blank" rel="noopener noreferrer">×”×ª×—×‘×¨×•×ª ×œ××¢×¨×›×ª Cardcom â†—</a><div data-billing-config></div><p data-billing-config-status role="status" aria-live="polite"></p><button type="button" data-billing-config-refresh>×¨×¢× ×Ÿ ×”×’×“×¨×•×ª</button>';let d=x=>t.querySelector(x),p=d("[data-billing-config]"),h=d("[data-billing-config-status]");function m(){t.querySelectorAll("form input,form select,form button").forEach(x=>x.disabled=s||c)}function w(){return b(this,null,function*(){if(s)return;let x=t.querySelector("form"),P=l&&x?{terminal:x.elements.terminal.value,paymentMode:x.elements.paymentMode.value}:null,S=++i;s=!0,d("[data-billing-config-refresh]").disabled=!0,x==null||x.querySelectorAll("input,select,button").forEach(k=>k.disabled=!0),x!=null&&x.elements.apiName&&(x.elements.apiName.value=""),h.textContent="×˜×•×¢×Ÿ ×”×’×“×¨×•×ª ××”×©×¨×ªâ€¦";try{let k=yield e.billingStatus();if(!r||S!==i)return;xu(k),g(k,P)}catch(k){r&&S===i&&(h.textContent="×œ× × ×™×ª×Ÿ ×œ×§×¨×•× ××ª ×”×”×’×“×¨×•×ª. ×”×˜×™×•×˜×” ×”×œ× ×¡×•×“×™×ª × ×©××¨×”; ××™×Ÿ ×œ×”×¡×™×§ ×©×”×—×™×‘×•×¨ ××•×’×“×¨ ××• ×©×—×¡×¨×™× ×¤×¨×˜×™×.")}finally{s=!1,r&&(d("[data-billing-config-refresh]").disabled=!1,m())}})}function g(x,P=null){c=x.checkoutEnabled||x.cardSetupEnabled,c&&(P=null),t.querySelector("[data-billing-mode]").outerHTML=Mt(x.paymentMode,t),p.innerHTML=(Number.isSafeInteger(x.version)&&x.version>0?_(x):"")+(x.paymentMode==="test"?y():""),t.querySelector("h3").textContent="Cardcom â€” "+(x.checkoutEnabled&&x.serverBillingEnabled?"×¡×œ×™×§×” ××•×¤×¢×œ×ª":"×”×—×™×‘×•×¨ ×›×‘×•×™"),h.textContent=P?"×”×’×“×¨×•×ª ×”×©×¨×ª ×¢×•×“×›× ×• ×•×”×˜×™×•×˜×” ×”×œ× ×¡×•×“×™×ª × ×©××¨×”. ×‘×“×•×§ ××ª ×”×˜×™×•×˜×” ×œ×¤× ×™ ×©××™×¨×”.":"";let S=t.querySelector("[data-billing-settings]");S&&(S.elements.checkoutEnabled.value=String(x.checkoutEnabled),S.elements.cardSetupEnabled.value=String(x.cardSetupEnabled),S.elements.paymentMode.value=(P==null?void 0:P.paymentMode)||x.paymentMode,P&&(S.elements.terminal.value=P.terminal),l=!!P,S.oninput=()=>{l=!0},S.onchange=()=>{l=!0},S.onsubmit=k=>b(null,null,function*(){if(k.preventDefault(),s||c||!r)return;let I=Number(S.elements.terminal.value),A=S.elements.apiName.value;if(!Number.isSafeInteger(I)||I<1||I>2147483647||S.elements.paymentMode.value!=="test"||A.length>200||/\s/.test(A)||!x.apiNameConfigured&&!A){h.textContent="×™×© ×œ×”×©×œ×™× ××ª ×©×“×•×ª ×”×—×•×‘×” ×‘×¤×¨×˜×™× ×ª×§×™× ×™×. ××¢×‘×¨ ×œ×—×™ ×˜×¨× ×–××™×Ÿ.";return}let E={version:x.version,provider:"cardcom",paymentMode:S.elements.paymentMode.value,terminal:I,apiName:A,checkoutEnabled:!1,cardSetupEnabled:!1};S.elements.apiName.value="",s=!0,d("[data-billing-config-refresh]").disabled=!0,S.querySelectorAll("input,select,button").forEach(R=>R.disabled=!0),h.textContent="×©×•××¨ ×”×’×“×¨×•×ªâ€¦";try{let R=yield e.saveBilling(E);if(!r)return;xu(R),g(R),l=!1,h.textContent="×”×”×’×“×¨×•×ª × ×©××¨×•. ×”×¡×œ×™×§×” × ×©××¨×” ×›×‘×•×™×”; ×œ× ×‘×•×¦×¢×” ×¢×¡×§×”."}catch(R){r&&(h.textContent=R.message+" ×©×“×” ×”××¤×ª×— × ×•×§×”; ×™×© ×œ×”×–×™×Ÿ ××—×“×© ××¤×ª×— ×©×œ× × ×©××¨.")}finally{E.apiName="",s=!1,r&&(d("[data-billing-config-refresh]").disabled=!1,m())}}))}function y(){return'<aside data-cardcom-test-cards class="cardcom-test-cards"><h4>×›×¨×˜×™×¡×™ ×‘×“×™×§×” ×©×œ Cardcom</h4><p><strong>×œ×©×™××•×© ×‘×¡×‘×™×‘×ª ×‘×“×™×§×•×ª ×‘×œ×‘×“ â€” ××™×Ÿ ×œ×”×–×™×Ÿ ×›×¨×˜×™×¡ ×××™×ª×™.</strong></p><div class="cardcom-test-table"><table><thead><tr><th scope="col">×¡×•×’</th><th scope="col">××¡×¤×¨ ×›×¨×˜×™×¡</th><th scope="col">×ª×•×§×£ ×œ×“×•×’××”</th><th scope="col">CVV</th></tr></thead><tbody><tr><th scope="row">×™×©×¨××œ×™</th><td><bdi dir="ltr">4580280000000008</bdi></td><td><bdi dir="ltr">12/30</bdi></td><td><bdi dir="ltr">123</bdi></td></tr><tr><th scope="row">×ª×™×™×¨</th><td><bdi dir="ltr">4580000000000000</bdi></td><td><bdi dir="ltr">12/30</bdi></td><td><bdi dir="ltr">123</bdi></td></tr></tbody></table></div><p>×™×© ×œ×”×©×ª××© ×‘×ª×•×§×£ ×¢×ª×™×“×™. ×”×›×¨×˜×™×¡ ×”×™×©×¨××œ×™ ×ª×•××š ×‘×ª×©×œ×•××™× ×•×‘×§×¨×“×™×˜; ×›×¨×˜×™×¡ ×”×ª×™×™×¨ ××™× ×• ×ª×•××š ×‘×”×. ×œ×¤×™ Cardcom, ×¡×›×•× × ××•×š ×Ö¾5,000 ×©×´×— ××“××” ×”×¦×œ×—×” ×•×¡×›×•× ×’×‘×•×” ×Ö¾5,000 ×©×´×— ××“××” ×›×™×©×œ×•×Ÿ; ×”×”×ª× ×”×’×•×ª ×‘×¡×›×•× ×©×œ 5,000 ×©×´×— ×‘×“×™×•×§ ××™× ×” ××¤×•×¨×˜×ª ×‘××§×•×¨.</p><p>××œ×” ×›×¨×˜×™×¡×™ ×”×‘×“×™×§×” ×©×œ ×”×¡×¤×§, ×•×œ× ××–×”×™ SIM ×©×œ ×”×¡×™××•×œ×˜×•×¨ ×”××§×•××™. ×”×¦×’×ª ×”×¤×¨×˜×™× ××™× ×” ××¤×¢×™×œ×” ×¡×œ×™×§×”.</p><a href="https://kb.cardcom.solutions/support/he/articles/390/%D7%94%D7%AA%D7%A0%D7%A1%D7%95%D7%AA-%D7%91%D7%9E%D7%A2%D7%A8%D7%9B%D7%AA-%D7%98%D7%A1%D7%98%D7%99%D7%9D-%D7%9C%D7%9C%D7%A7%D7%95%D7%97%D7%95%D7%AA" target="_blank" rel="noopener noreferrer">×”× ×—×™×•×ª Cardcom ×”×¨×©××™×•×ª â†—</a></aside>'}function _(x){var P;return'<form data-billing-settings autocomplete="off"><div class="account-fields"><label>×¡×¤×§ ×¡×œ×™×§×” *<select name="provider" required><option value="cardcom">Cardcom</option></select></label><label>××¦×‘ ×¡×œ×™×§×” *<select name="paymentMode" required><option value="test">×˜×¡×˜ â€” ×‘×“×™×§×•×ª ×‘×œ×‘×“</option><option value="live" disabled>×—×™ â€” × ×¢×•×œ ×¢×“ ×œ×”×©×œ××ª ×‘×“×™×§×•×ª ×§×‘×œ×”</option></select></label><label>××¡×¤×¨ ××¡×•×£ *<input name="terminal" type="number" min="1" max="2147483647" step="1" required value="'+Gg((P=x.terminal)!=null?P:"")+'"></label><label>API Name'+(x.apiNameConfigured?" â€” ×”×—×œ×¤×ª ××¤×ª×—":" *")+'<input name="apiName" type="password" autocomplete="new-password" spellcheck="false" maxlength="200" '+(x.apiNameConfigured?'placeholder="××•×’×“×¨ â€” ×©×“×” ×¨×™×§ ×©×•××¨ ××ª ×”×§×™×™×"':"required")+'></label><label>×”×¤×¢×œ×ª ×¡×œ×™×§×” *<select name="checkoutEnabled" required><option value="false">×›×‘×•×™×”</option><option value="true" disabled>×¤×¢×™×œ×”</option></select></label><label>×©××™×¨×ª ×›×¨×˜×™×¡ *<select name="cardSetupEnabled" required><option value="false">×›×‘×•×™×”</option><option value="true" disabled>×¤×¢×™×œ×”</option></select></label></div>'+(c?"<p data-billing-connection-locked>×™×© ×œ×”×¤×¡×™×§ ××ª ×”×—×™×‘×•×¨ ×”×¤×¢×™×œ ×œ×¤× ×™ ×¢×¨×™×›×ª ×¤×¨×˜×™ ×”×—×™×‘×•×¨. ×¢×¨×™×›×ª ×”×¤×¨×˜×™× ×•×”×©××™×¨×” × ×¢×•×œ×•×ª ×›×œ ×¢×•×“ ×¡×œ×™×§×” ××• ×©××™×¨×ª ×›×¨×˜×™×¡ ×¤×¢×™×œ×•×ª.</p>":"")+'<p>×”××¤×ª×— × ×©××¨ ××•×¦×¤×Ÿ ×‘×©×¨×ª ×•××™× ×• ××•×¦×’ ×©×•×‘. ××™×Ÿ ×œ×”×–×™×Ÿ ×¡×™×¡××ª ×›× ×™×¡×” ××• ×¤×¨×˜×™ ×›×¨×˜×™×¡.</p><button type="submit">×©××•×¨ ×”×’×“×¨×•×ª ×¡×œ×™×§×”</button></form>'}return d("[data-billing-config-refresh]").onclick=w,w(),()=>{r=!1,i++;let x=t.querySelector("[name=apiName]");x&&(x.value=""),t.replaceChildren()}}var Ln=[["SIM-0001","success","×ª×©×œ×•× ×“××” ×”×¦×œ×™×—"],["SIM-0002","declined","×ª×©×œ×•× ×“××” × ×“×—×”"],["SIM-0003","insufficient","×‘×“×™×§×”: ×™×ª×¨×” ×œ× ××¡×¤×§×ª"],["SIM-0004","expired","×‘×“×™×§×”: ×›×¨×˜×™×¡ ×¤×’ ×ª×•×§×£"],["SIM-0005","authentication","×‘×“×™×§×”: × ×“×¨×© ××™××•×ª × ×•×¡×£"],["SIM-0006","unknown","×‘×“×™×§×”: ×”×ª×•×¦××” ××™× ×” ×™×“×•×¢×”; ××™×Ÿ ××™×©×•×¨ ×œ×ª×©×œ×•×"],["SIM-0007","pending","×ª×©×œ×•× ×“××” ×××ª×™×Ÿ ×œ××™×©×•×¨"]],Jg={idle:"×‘×—×¨ ×›×¨×˜×™×¡ ×“××” ×›×“×™ ×œ×”×ª×—×™×œ ×‘×“×™×§×”.",invalid:"××–×”×” ×œ× ××•×›×¨. ×”×©×ª××© ×¨×§ ×‘××–×”×™ ×”×“××” ×©×‘×¨×©×™××”; ××™×Ÿ ×œ×”×–×™×Ÿ ×›×¨×˜×™×¡ ×××™×ª×™.",success:Ln[0][2],declined:Ln[1][2],insufficient:Ln[2][2],expired:Ln[3][2],authentication:Ln[4][2],unknown:Ln[5][2],pending:Ln[6][2],authFailed:"×‘×“×™×§×”: ×”××™××•×ª × ×›×©×œ; ×ª×©×œ×•× ×”×“××” ×œ× ××•×©×¨.",cancelled:"×‘×“×™×§×” ×‘×•×˜×œ×”; ××™×Ÿ ××™×©×•×¨ ×œ×ª×©×œ×•× ×“××”."};function Su({root:t,back:e,state:n={},api:r={}}){let i=!0,s="idle",l=null,c=m=>t.querySelector(m),d=()=>{l==null||l(),i=!1,s="idle",t.replaceChildren()};t.innerHTML='<section dir="rtl" class="admin-workspace"><header class="admin-page-heading"><h2>×¡×¤×§ ×¡×œ×™×§×”</h2><button type="button" data-back>×—×–×¨×” ×œ× ×™×”×•×œ</button></header><label>×‘×—×™×¨×ª ×¡×¤×§<select name="provider"><option value="local">×¡×™××•×œ×˜×•×¨ ××§×•××™</option><option value="cardcom">Cardcom</option></select></label><div data-provider></div></section>',c("[data-back]").onclick=()=>{i&&(d(),e())};function p(m=""){let w=c("[data-result]");w.dataset.state=s,w.textContent=Jg[s]+(m?" "+m:"");let g=["authentication","unknown","pending"].includes(s);c("[data-actions]").innerHTML=(s==="authentication"?'<button type="button" data-auth-pass>×“××” ××™××•×ª ××•×¦×œ×—</button><button type="button" data-auth-fail>×“××” ××™××•×ª ×©× ×›×©×œ</button>':"")+(["unknown","pending"].includes(s)?'<button type="button" data-late>×“××” ××™×©×•×¨ ×××•×—×¨</button>':"")+(g?'<button type="button" data-cancel>×‘×˜×œ × ×™×¡×™×•×Ÿ ×‘×“×™×§×”</button>':"")+(s==="success"?'<button type="button" data-duplicate>×“××” ×”×•×“×¢×ª ××™×©×•×¨ ×›×¤×•×œ×”</button>':"");let y=(_,x,P)=>{let S=c(_);S&&(S.onclick=()=>{!i||!x.includes(s)||(s=P,p())})};y("[data-auth-pass]",["authentication"],"success"),y("[data-auth-fail]",["authentication"],"authFailed"),y("[data-late]",["pending","unknown"],"success"),y("[data-cancel]",["authentication","pending","unknown"],"cancelled"),c("[data-duplicate]")&&(c("[data-duplicate]").onclick=()=>{i&&s==="success"&&p("×”×•×“×¢×” ×›×¤×•×œ×” ×–×•×”×ª×”; ×”××™×©×•×¨ ×”×§×™×™× ×œ× ×”×©×ª× ×” ×•×œ× × ×•×¦×¨ ×ª×©×œ×•× × ×•×¡×£.")})}function h(){if(!i)return;l==null||l(),l=null,s="idle";let m=c("[data-provider]");if(c("[name=provider]").value==="cardcom"){l=ku({root:m,api:r,state:n});return}m.innerHTML='<h3>×¡×™××•×œ×˜×•×¨ ××§×•××™ â€” ×¤×¢×™×œ</h3><p><strong>××¦×‘ ×‘×“×™×§×” â€” ×œ×œ× ×—×™×•×‘</strong></p><p>×”×‘×“×™×§×” ××ª×‘×¦×¢×ª ×‘×“×¤×“×¤×Ÿ ×‘×œ×‘×“. ××™×Ÿ ×—×™×‘×•×¨ ×œ×¡×¤×§, ×©××™×¨×ª ×›×¨×˜×™×¡, ×¤×ª×™×—×ª ×—×‘×™×œ×” ××• ×©×™× ×•×™ ×‘× ×ª×•× ×™ ×œ×§×•×—×•×ª. ×”×™×¦×™××” ××”××¡×š ××•×—×§×ª ××ª ×ª×•×¦××ª ×”×‘×“×™×§×”.</p><a href="#demo-cards" data-help>×›×¨×˜×™×¡×™ ×“××” ×•×ª×¨×—×™×©×™ ×‘×“×™×§×”</a><form autocomplete="off"><label>××–×”×” ×›×¨×˜×™×¡ ×“××”<input name="card" dir="ltr" inputmode="text" maxlength="32" placeholder="SIM-0001" aria-describedby="demo-input-help"></label><p id="demo-input-help">×”×–×Ÿ ××–×”×” SIM ××”×¨×©×™××” ×‘×œ×‘×“. ××™×Ÿ ×œ×”×–×™×Ÿ ××¡×¤×¨ ××©×¨××™, ×ª×•×§×£ ××• ×§×•×“ ××‘×˜×—×”.</p><button type="submit">×”×¤×¢×œ ×ª×©×œ×•× ×“××”</button></form><p data-result role="status" aria-live="polite"></p><div data-actions class="row"></div><details id="demo-cards"><summary>×”×¡×‘×¨ ×¢×œ ×›×¨×˜×™×¡×™ ×”×“××”</summary><p>××–×”×™× ××œ×” ××•×’×“×¨×™× ×‘×¡×™××•×œ×˜×•×¨ ×”××§×•××™ ×‘×œ×‘×“ ×•××™× × ×›×¨×˜×™×¡×™ Cardcom.</p><ul>'+Ln.map(([w,,g])=>'<li><bdi dir="ltr">'+w+"</bdi> â€” "+g+"</li>").join("")+"</ul><p>××™××•×ª × ×•×¡×£: ×‘×—×¨ ×”×¦×œ×—×” ××• ×›×™×©×œ×•×Ÿ ×‘×›×¤×ª×•×¨×™×. ×‘××¦×‘ ×××ª×™×Ÿ ××• ×œ× ×™×“×•×¢ ××¤×©×¨ ×œ×“××•×ª ××™×©×•×¨ ×××•×—×¨ ××• ×‘×™×˜×•×œ. ×œ××—×¨ ×”×¦×œ×—×” ××¤×©×¨ ×œ×“××•×ª ×”×•×“×¢×” ×›×¤×•×œ×”; ×”×™× ××™× ×” ×™×•×¦×¨×ª ×ª×©×œ×•× × ×•×¡×£.</p></details>",c("[data-help]").onclick=w=>{var y;w.preventDefault();let g=c("#demo-cards");g.open=!0,g.querySelector("summary").focus(),(y=g.scrollIntoView)==null||y.call(g,{block:"nearest"})},c("form").onsubmit=w=>{var y;if(w.preventDefault(),!i)return;let g=c("[name=card]").value.trim().toUpperCase();s=((y=Ln.find(([_])=>_===g))==null?void 0:y[1])||"invalid",c("[name=card]").value="",p()},p()}return["test","live"].includes(n.paymentMode)&&(c("[name=provider]").value="cardcom"),c("[name=provider]").onchange=h,h(),d}var hn=t=>String(t!=null?t:"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Xn={accepted:"×”×”×•×“×¢×” ×”×ª×§×‘×œ×” ×œ×©×œ×™×—×” ××¦×œ ×”×¡×¤×§. ××™×Ÿ ×‘×›×š ××™×©×•×¨ ××¡×™×¨×” ×œ×œ×§×•×—.",rejected:"×”×¡×¤×§ ×“×—×” ××ª ×”×”×•×“×¢×”. ×œ× ×™×‘×•×¦×¢ × ×™×¡×™×•×Ÿ ×—×•×–×¨ ××•×˜×•××˜×™.",reserved:"×”×‘×§×©×” ×¨×©×•××” ×•×××ª×™× ×” ×œ×‘×™×¨×•×¨. ××™×Ÿ ×œ×©×œ×•×— ×©×•×‘.",dispatched:"×”×‘×§×©×” ×”×•×¢×‘×¨×” ×œ×¢×™×‘×•×“. ×”×ª×•×¦××” ×˜×¨× ××•×©×¨×”; ××™×Ÿ ×œ×©×œ×•×— ×©×•×‘.",unknown:"×ª×•×¦××ª ×”×©×œ×™×—×” ××™× ×” ×™×“×•×¢×”. ××™×Ÿ ×œ×©×œ×•×— ×©×•×‘ ×œ×¤× ×™ ×‘×“×™×§×” ××¦×œ ×”×¡×¤×§."};function cl({root:t,api:e,back:n}){let r=!0,i=!1,s=0,l,c="",d="",p="",h=null,m=!1,w=()=>{},g=A=>t.querySelector(A),y=()=>r&&t.isConnected,_=A=>{y()&&(g("[data-feedback]").textContent=A)},x=A=>t.querySelectorAll("input,textarea,select,button").forEach(E=>E.disabled=A),P=()=>{r=!1,s++,d="",p="",h=null,t.replaceChildren()},S=A=>((l==null?void 0:l.unresolved)||[]).some(E=>E.customerId===A);function k(){var R,z;if(!y())return;t.innerHTML='<section dir="rtl"><button data-back type="button">×—×–×¨×” ×œ× ×™×”×•×œ</button><h2>×©×œ×™×—×ª ×”×•×“×¢×ª ×©×™×¨×•×ª ×œ×œ×§×•×—</h2><form data-limit><label>×ª×§×¨×ª × ×™×¡×™×•× ×•×ª ×©×œ×™×—×” ×œ×™×•×<input name="limit" type="number" min="0" max="10000" step="1" required value="'+hn((R=l.dailyLimit)!=null?R:"")+'"></label><button>×©××•×¨ ×ª×§×¨×” ×™×•××™×ª</button></form><p>×œ×œ× ×ª×§×¨×” ××•×’×“×¨×ª ×”×©×œ×™×—×” ×—×¡×•××”. 0 ×—×•×¡× ×©×œ×™×—×•×ª. ×”×™×•× × ×•×¦×œ×• ××• ×©×•×¨×™×™× ×• '+hn(l.used)+' ×™×—×™×“×•×ª.</p><form data-search><label>×—×™×¤×•×© ×œ×§×•×— ×œ×¤×™ ×©× ××• ××™×™×œ<input name="query" maxlength="200" value="'+hn(c)+'"></label><button>×—×¤×©</button></form>'+((z=l.unresolved)!=null&&z.length?"<aside><h3>×‘×§×©×•×ª ×§×•×“××•×ª ×œ×œ× ×ª×•×¦××” ×¡×•×¤×™×ª</h3>"+l.unresolved.map(T=>"<p>"+hn(T.name||"×œ×§×•×—")+" Â· "+hn(Xn[T.state]||Xn.unknown)+' <button type="button" data-unresolved="'+hn(T.id)+'">×‘×“×•×§ ××¦×‘</button></p>').join("")+"<p>×©×œ×™×—×” × ×•×¡×¤×ª ×œ××•×ª×• ×œ×§×•×— ×—×¡×•××” ×¢×“ ×‘×™×¨×•×¨ ×ª×•×¦××ª ×”×‘×§×©×”.</p></aside>":"")+'<form data-compose><label>×œ×§×•×—<select name="customer" required><option value="">×‘×—×¨ ×œ×§×•×—</option>'+l.clients.map(T=>'<option value="'+hn(T.id)+'">'+hn(T.name)+" Â· "+hn(T.email)+"</option>").join("")+'</select></label><p data-phone></p><p>×”××¡×¤×¨ × ×œ×§×— ××¤×¨×˜×™ ×”×œ×§×•×—; ××™××•×ª ×‘×¢×œ×•×ª ×‘× ×™×™×“ ×¢×“×™×™×Ÿ ×œ× ××•××©.</p><label>×”×•×“×¢×ª ×©×™×¨×•×ª<textarea name="message" required maxlength="134" rows="5">'+hn(d)+'</textarea></label><p data-count></p><p>×©×œ×™×—×” ×œ× ××¢×Ÿ ××—×“ ×‘×œ×‘×“, ×¢×“ 134 ×™×—×™×“×•×ª ×ª×•×•×™×. ×œ×—×™×¦×” ×¢×œ ×©×œ×™×—×” ×¢×©×•×™×” ×œ× ×›×•×ª ×”×•×“×¢×” ××™×ª×¨×ª SMS4FREE. ××™×Ÿ ×œ×©×œ×•×— ×ª×•×›×Ÿ ×¤×¨×¡×•××™.</p><button data-send>×©×œ×— ×”×•×“×¢×”</button><button data-check type="button" hidden>×‘×“×•×§ ××¦×‘ ×‘×§×©×”</button><button data-new type="button" hidden>×”×•×“×¢×” ×—×“×©×”</button></form><p data-feedback role="status" aria-live="polite"></p></section>',g("[data-back]").onclick=()=>{i||(P(),n())};let A=g("[data-compose]");A.elements.customer.value=p;function E(){d=A.elements.message.value,p=A.elements.customer.value;let T=l.clients.find(O=>O.id===p);g("[data-phone]").textContent=T?"× ××¢×Ÿ: "+T.phone:"×‘×—×¨ ×œ×§×•×— ×¢× × ×™×™×“ ×™×©×¨××œ×™ ×ª×§×™×Ÿ",g("[data-count]").textContent=d.length+" / 134",g("[data-send]").disabled=i||m||!!h||!l.ready||!p||!d.trim()||d.length>134||S(p)}A.elements.customer.onchange=E,A.elements.message.oninput=E,w=E,E(),t.querySelectorAll("[data-unresolved]").forEach(T=>T.onclick=()=>b(null,null,function*(){if(!i){i=!0;try{let O=yield e.smsStatus(T.dataset.unresolved);y()&&_(O?Xn[O.state]||Xn.unknown:"×œ× × ××¦××” ×‘×§×©×”. ×™×© ×œ×‘×¨×¨ ×œ×¤× ×™ ×©×œ×™×—×” × ×•×¡×¤×ª.")}catch(O){_("×œ× × ×™×ª×Ÿ ×œ×‘×“×•×§ ××¦×‘ ×›×¨×’×¢.")}finally{i=!1}}})),g("[data-search]").onsubmit=T=>{T.preventDefault(),!(i||h)&&(c=T.target.elements.query.value.trim(),I())},g("[data-limit]").onsubmit=T=>b(null,null,function*(){if(T.preventDefault(),i||h)return;let O=Number(T.target.elements.limit.value);if(!(!Number.isInteger(O)||O<0||O>1e4)){i=!0,x(!0);try{l=yield e.smsLimit({version:l.version,limit:O}),y()&&(k(),_("×”×ª×§×¨×” × ×©××¨×”. ×œ× × ×©×œ×—×” ×”×•×“×¢×”."))}catch(M){_(M.message)}finally{i=!1,y()&&(x(!1),w())}}}),A.onsubmit=T=>b(null,null,function*(){if(T.preventDefault(),!(i||h||m||!l.ready)&&(d=A.elements.message.value,p=A.elements.customer.value,!(!p||!d.trim()||d.length>134||S(p)))){h={id:t.ownerDocument.defaultView.crypto.randomUUID(),customerId:p,message:d,version:l.version},i=!0,x(!0),_("××¢×‘×™×¨ ×‘×§×©×ª ×©×œ×™×—×”â€¦");try{let O=yield e.smsSend(h);y()&&(m=!0,_(Xn[O==null?void 0:O.state]||Xn.unknown),g("[data-check]").hidden=["accepted","rejected"].includes(O==null?void 0:O.state),g("[data-new]").hidden=!["accepted","rejected"].includes(O==null?void 0:O.state))}catch(O){y()&&(m=!0,_("×œ× ×”×ª×§×‘×œ ××™×©×•×¨ ×œ×ª×•×¦××”. ××™×Ÿ ×œ×©×œ×•×— ×©×•×‘; ×‘×“×•×§ ××ª ××¦×‘ ×”×‘×§×©×”."),g("[data-check]").hidden=!1)}finally{i=!1,y()&&(x(!0),g("[data-back]").disabled=!1,g("[data-check]").disabled=!1,g("[data-new]").disabled=!1)}}}),g("[data-check]").onclick=()=>b(null,null,function*(){if(!(i||!h)){i=!0;try{let T=yield e.smsStatus(h.id);y()&&(_(T?Xn[T.state]||Xn.unknown:"×œ× × ××¦××” ×‘×§×©×”. ×¤× ×” ×œ×‘×“×™×§×” ×œ×¤× ×™ × ×™×¡×™×•×Ÿ ×—×“×©."),g("[data-new]").hidden=!["accepted","rejected"].includes(T==null?void 0:T.state))}catch(T){_("×œ× × ×™×ª×Ÿ ×œ×‘×“×•×§ ××¦×‘ ×›×¨×’×¢. ××™×Ÿ ×œ×©×œ×•×— ×©×•×‘.")}finally{i=!1}}}),g("[data-new]").onclick=()=>{i||(h=null,m=!1,d="",I())}}function I(){return b(this,null,function*(){let A=++s;i=!0,l?x(!0):t.innerHTML='<p role=ëmyÚÚ$z{-®éÜj×YK™]\Ù]œXÚØYÙT^O]ÙKšYYK^ÛÛ[Hµæuéµæuä5å5ç5êµêuç5åuçH‹YKœİ[K˜ÜÜÕ^H›X\™Ú[‹]ÜœÛZ[‹ZZYÚŒÌœÜY[™ÎÙ›Û\Ú^™N‹™[H‹K˜Y\ŠYJKYK›Û˜ÛXÚÏJ
OOÛ]ÙO]œ]Y\TÙ[XİÜŠ	ÖÙ]K\XÚØYÙKZYH‰ÊĞÔÔË™\ØØ\JÙKšY
JÉÈ—IÊNÚYŠSÙJ\™]\›ÓÙK˜ÛXÚÊ
NÛ]]œ]Y\TÙ[XİÜŠ–Û˜[YOXÛÛœÙ[HŠNİ˜ÚXÚÙYØİœ™\]Y\İİX›Z]

NŠ
µæuêH5ç5ä5êuê5ä5êˆ5êµè5ä5æH5å5êuæuçµåuêH5ç5é5è5æH5å5çµèµäuê5ç5êµêuç5åuçKˆŠK™›Øİ\Ê
J__JNÛ]]JXOQJ–Ù]K\XÚØYÙK]š\HŠJOO[[İ›ÚY•XK˜ÛÜÙ\İ
›X™[ŠNÙ]	‰Š]™]\Ù]š\XÚÙ\HˆŠNÛ]İQJ–Ù]KXÚXÚÛİ]HŠK[XİO[[İ›ÚY˜İœ]Y\TÙ[XİÜŠ–Ù]K\XÚØYÙK\ØÛÜWHŠK˜OXİÖË‹‹˜İœ]Y\TÙ[XİÜ[
œØÛÜHˆšY[Ù]ŠWK™š[™
OO”HOOY[ŠN›[šOJKÙKYJOOİ˜\ˆÚYŠT_

TKœ\™[[[Y[
OO[[İ›ÚY•YÓ˜[YJOOOH‘URSÈŠ\™]\›ˆOO[[İ›ÚY”Kœ\™[[[Y[Û]ÙO]›İÛ™\‘Øİ[Y[˜Ü™X]Q[[Y[
™]Z[ÈŠNÓÙK™]\Ù]˜ÛÛ\XİÙXİ[ÛHˆ‹ÙK›Ü[PYNÛ]]›İÛ™\‘Øİ[Y[˜Ü™X]Q[[Y[
œİ[[X\HŠNÜ™]\›ˆ^ÛÛ[]ÙKÙK˜\[™

KKœ\™[›ÙKš[œÙ\™Y›Ü™JÙKJKÙK˜\[™
JKÙ_KXOQšJ[‹µêµåõåuç5êˆ5å5åõäuæuç5å‹LJKOQšJ˜Kµäuåõê5åH5åõäuæuç5å‹LJKØOJ
OOİ˜\ˆÛ]O\XOO[[İ›ÚYœXKœ]Y\TÙ[XİÜŠœİ[[X\HŠKÙOYOO[[İ›ÚY™Kœ]Y\TÙ[XİÜŠœİ[[X\HŠKYOJ
]œ]Y\TÙ[XİÜŠ	ÖÛ˜[YOHœXÚØYÙK\ØÛÜH—N˜ÚXÚÙY	ÊJOO[[İ›ÚY˜[YJ_ËÙOJQJ–Û˜[YOY\İ[˜][Û—HŠJOO[[İ›ÚY•˜[YKš[J
NÔI‰ŠK^ÛÛ[Hµêµåõåuç5êˆ5å5åõäuæuç5å0­ÈŠÊYOOOH˜XØÛİ[Èµäµç5åuäuç5æuêˆ5ç5æõç5å5åõêuäuåuçÈˆµç5æuèµäÈ5å5èué5éµæué5æHŠÊÙOÈˆ0­ÈŠÓÙNˆˆŠJJKÙI‰ŠÙK^ÛÛ[Hµäuåõê5åH5åõäuæuç5åŠÊO[[	‰š›˜[YOÈˆ0­ÈŠÚ›˜[YNˆˆŠJ_NØØJ
NÛ]šOTOOŠOO[[İ›ÚY”Kœ[—ØÛÙJOOOHœİ\\ˆ‰‰ˆ[KšX[]˜Z[X›OÈµç5ä5è5æuêµçÈ5ç5äuåõåuêˆ5å5è5æuèuæuåuçÈ5å5ê5ä5êuåuè5æH5æõäuê5è5åuéµçˆ”HO[[	‰”K™[˜X›YÊOO[[İ›ÚY”KœšXÙWØYÛÜ›İ
OŒ	‰ˆ[K˜ÚXÚÛİ][˜X›YÈµç5ä5è5æuêµçÈ5ç5äuåõåuêˆ5êµêuç5åuçH5çµä5åuäuæ5åÈ5ä5æuè5åH5åµçµæuçÈ5æõê5äµè‹ˆ›K™[][Y[	‰ŠOO[[İ›ÚY”KœšXÙWØYÛÜ›İ
OŒÈµç5ä5è5æuêµçÈ5ç5äuåõåuêˆ5å5åõäuæuç5å5ä5æuè5å5êµåuä5çµêˆ5ç5åµæõä5åuêˆ5å5é5èµæuç5åˆˆµç5ä5è5æuêµçÈ5ç5äuåõåuê5äuä5é5êuê5åuêˆ5åµåH5æõê5äµè‹ˆˆµç5ä5è5æuêµçÈ5ç5äuåõåuêˆ5å5åõäuæuç5å5ä5æuè5å5åµçµæuè5å5æõê5äµè‹ˆİœ]Y\TÙ[XİÜ[
–Ù]K\XÚØYÙKZYHŠK™›Ü‘XXÚ
OOÚYŠTK™\ØX›Y
\™]\›Û]ÙOUšJK™š[™
ÙOO“ÙKšYOOTK˜[YJJNÔK]O]ÙKKœÙ]]šX]J˜\šXK[X™[‹K™Ù]]šX]J˜\šXK[X™[ŠJÈˆ8 %ŠİÙJNÛ]YOTK˜ÛÜÙ\İ
›X™[ŠNĞYI‰ŠYK]O]ÙKYK™]\Ù]™\ØX›Y™X\ÛÛ]ÙJ_JNÛ]QJ–Û˜[YOXÛÛœÙ[HŠNÚYŠˆO[[	‰›‹™\ØX›Y
^Û]O[K\›\ÒYÈµç5ä5è5æuêµçÈ5ç5å5çµêuæuæˆ5æuêH5ç5å5êuç5æuçH5ä5êˆ5å5êµè5ä5æuçH5å5è5äõê5êuæuçKˆˆµç5ä5è5æuêµçÈ5ç5å5çµêuæuæˆ5êµè5ä5æH5å5êuæuçµåuêH5å5çµåõæuæuäuæuçH5ä5æuè5çH5åµçµæuè5æuçKˆÛ‹]OTK‹œÙ]]šX]J˜\šXK[X™[‹‹™Ù]]šX]J˜\šXK[X™[ŠJÈˆ8 %ŠÔJK‹˜ÛÜÙ\İ
›X™[ŠI‰Š‹˜ÛÜÙ\İ
›X™[ŠK]OTJ_]œ]Y\TÙ[XİÜ[
–Ù]K\XÚØYÙKXÛÛ[HˆÙ]KXİ\œ™[\XÚØYÙWHÙ]K\XÚØYÙKXÛÛ[HŠK™›Ü‘XXÚ
OOÔKœİ[K›X\™Ú[Hœ‹Kœİ[K›[™RZYÚHŒKHŸJKKœXÚØYÙ\Ñ[˜X›YÊ[K™[XZ[™\šYšYY[Kœ›Ùš[PÛÛ\]JI‰•
µè5äõê5êuæuçH5ä5æuçµåuêˆ5çµæuæuç5åuå5êuç5çµêˆ5é5ê5æ5æH5å5åõêuäuåuçËˆŠN•
µå5åõäuæuç5åuêˆ5èµäõæuæuçÈ5ä5æuè5çÈ5çµåué5èµç5åuê‹ˆ5ç5ä5äuåuéµèˆ5åõæuåuäKˆŠKœ]Y\TÙ[XİÜ[
–Ù]K\XÚØYÙKZYHŠK™›Ü‘XXÚ
OO”K›Û˜Ú[™ÙOJ
OO˜Š[[[˜İ[ÛŠŠ
^Ú[K˜Ø][ÙË™š[™
YOOYKšYOOTK˜[YJKÏ[[Û]ÙOJÊÜÚYŠJ–Û˜[YOXÛÛœÙ[HŠK˜ÚXÚÙYHLKJ
K

KØJ
K	

KJ–Ù]K\][İWHŠK^ÛÛ[ZœšXÙWØYÛÜ›İOOLÈµè5æuèuæuåuçÈ5ç5ç5ä5êµêuç5åuçHšÚJœšXÙWØYÛÜ›İ
KœšXÙWØYÛÜ›İŒ	‰šJ^ÑJ–Ù]K\][İWHŠK^ÛÛ[HµäuåuäõéÈ5çµåõæuê5êuäõê5åuä¸ )ˆİ^Û]YO^ZY[‹\Ü˜YT][İJKšY
NÚYŠ^Š
_ÙHOO\
\™]\›İÏPYKJ–Ù]K\][İWHŠK^ÛÛ[Hµç5êµêuç5åuçH5æõèµêˆŠÚÚJYK˜Ú\™ÙPYÛÜ›İ
JÈˆ0­È5åµæuæõåuæH5çµêµêuç5åuçµæuçH5çµä5åuçµêµæuçNˆŠÚÚJYK˜Ü™Y]YÛÜ›İ
K	

_XØ]Ú
YJ^ŞŠ
I‰ÙOOO\	‰Š
YK›Y\ÜØYÙJKJ–Ù]K\][İWHŠK^ÛÛ[Hµç5ä5è5æuêµçÈ5ç5ä5çµêˆ5ä5êˆ5çµåõæuê5å5êuäõê5åuä‹ˆ5ê5èµè5è5åH5ä5êˆ5å5åõäuæuç5åuê‹ˆŠ___JJKÉ‰ŠJ–Ù]K\XÚØYÙK]š\HŠK›Û˜Ú[™ÙOJ
OOÛ]OJK›İÛ™Y\İ[˜][Ûœß×JK™š[™
ÙOOÙKšYOOQJ–Ù]K\XÚØYÙK]š\HŠK˜[YJNÚOJOO[[İ›ÚY”KšY
_[ÏJOO[[İ›ÚY”K™\İ[˜][Û—Û˜[YJ_ˆ‹J–Û˜[YOXÛÛœÙ[HŠK˜ÚXÚÙYHLKŠ
_JNÛ]šOJ
OOÛ]OQJ–Û˜[YOY\İ[˜][Û—HŠKÙOJOO[[İ›ÚY”K˜ÛÜÙ\İ
›X™[ŠJ_
OO[[İ›ÚY”Kœ\™[[[Y[
KYO]œ]Y\TÙ[XİÜŠ–Ù]KY\İ[˜][Û‹\ÛİHŠKÙO]œ]Y\TÙ[XİÜŠ–Û˜[YO\XÚØYÙK\ØÛÜWN˜ÚXÚÙYŠNÓÙI‰ŠÏSÙK˜[YJNÛ]ZÏOOHš\‹PY_ÙNÕ	‰ŠšY[H]œİ[K™\Ü^O]Èˆˆ››Û™HŠNÛ]TOO[[İ›ÚY”Kœ™]š[İ\Ñ[[Y[ÚX›[™ÎÊO[[İ›ÚY‹YÓ˜[YJOOOH”‰‰Š‹šY[H]‹œİ[K™\Ü^O]Èˆˆ››Û™HŠ_Nİœ]Y\TÙ[XİÜ[
–Û˜[YO\XÚØYÙK\ØÛÜWHŠK™›Ü‘XXÚ
OOÛ]ÙOJ
OOİ˜\ˆYNÚÏTK˜ÚXÚÙYÔK˜[YNŠ
YO]œ]Y\TÙ[XİÜŠ–Û˜[YO\XÚØYÙK\ØÛÜWN˜ÚXÚÙYŠJOO[[İ›ÚYYK˜[YJ_ËšJ
KØJ
KJ–Ù]K\XÚØYÙK\ØÛÜKZ[HŠK^ÛÛ[ZÏOOH˜XØÛİ[Èµå5æuêµê5å5êµå5æuå5åµçµæuè5å5ç5æõç5å5æuèµäõæuçH5äuåõêuäuåuçËˆ5è5æuêµçÈ5ç5è5æuæuäÈ5æuêµê5å5é5è5åuæuå5ç5æuèµäÈ5èué5éµæué5æH5äuå5çµêuæ‹ˆˆµå5æuêµê5å5êµæuêuçµê5èµäuåuê5å5æ5æuåuç5å5è5äuåõê5äuç5äuäËˆ5è5æuêµçÈ5ç5è5æuæuäÈ5æuêµê5å5é5è5åuæuå5äuå5çµêuæ‹ˆ‹J–Û˜[YOXÛÛœÙ[HŠK˜ÚXÚÙYHLK	

_NÔK›Û˜Ú[™ÙO]ÙKK›Û˜ÛXÚÏ]Ù_JKšJ
KJ–Û˜[YOY\İ[˜][Û—HŠK›Ûš[œ]J
OOÑJ–Û˜[YOXÛÛœÙ[HŠK˜ÚXÚÙYHLKØJ
K


OÈµæuêH5æ5æuåuç5éõæuæuçH5ç5æuèµäÈ5åµåˆ5äuåõê5åH5ä5êˆ5å5æ5æuåuç5å5éõæuæuçH5äuê5êuæuçµå5æõäõæH5ç5ê5ä5åuêˆ5çµåõæuê5êuäõê5åuäˆ5çµäõåuæuéËˆˆˆŠK	

_KJ–Û˜[YOXÛÛœÙ[HŠK›Û˜Ú[™ÙOIJ–Ù]KXÚXÚÛİ]HŠK›ÛœİX›Z]Z‹
O[[İ›ÚYšœšXÙWØYÛÜ›İ
OOOL	‰ŠJ–Ù]K\][İWHŠK^ÛÛ[SJ
OÈµè5æuèuæuåuçÈ5ç5ç5ä5êµêuç5åuçH˜YOOOHš\ÈµåµåH5å5åõäuæuç5å5å5è5åuæõåõæuêˆ5ç5æ5æuåuçˆˆµå5è5æuèuæuåuçÈ5ä5æuè5åH5åµçµæuçÈ5ç5å5é5èµç5å5è5åuèué5êˆ5äuæ5æuåuç5åµåˆŠK	

_Y[˜İ[ÛˆJ
^Û]^NŞO[[‰‰Š‹›Ü[‰‰–‹˜ÛÜÙJ
K‹œ™[[İ™J
JKÈO[[	‰—Ëš\ĞÛÛ›™XİY	‰Š
I‰—Ë™›Øİ\Ê
KÏ[[Y[˜İ[ÛˆÊ‹™J^ÚYŠVŸ^Š
J\™]\›ÖJ
KÏ[™NÛ]]›İÛ™\‘Øİ[Y[˜Ü™X]Q[[Y[
™X[ÙÈŠNŞOU‹‹™\Hœ‹‹œÙ]]šX]J˜\šXK[X™[‹µé5ê5æ5æH5å5åõäuæuç5å8 %ŠÖ‹›˜[YJK‹™]\Ù]œXÚØYÙT™XY\Hˆ‹‹œİ[K˜ÜÜÕ^H˜›Ş\Ú^š[™Î˜›Ü™\‹X›ŞÛİ™\™›İÎšY[İÚY˜Ø[ÊLÈH
NÛX^]ÚYÛX^ZZYÚ˜Ø[ÊLšHÌœ
NÛX\™Ú[˜]]È‹‹š[›™\’SIÏXY\ˆİ[OH™\Ü^N™›^Ú\İYKXÛÛ[œÜXÙKX™]ÙY[Ø[YÛ‹Z][\Î˜Ù[\ÙØ\ŒLœÙ›^\Úš[šÎŒÏ‰ÊÑÙJ‹›˜[YJJÉÈ8 %5é5ê5æ5æH5å5åõäuæuç5åÚÏ]Ûˆ\OH˜]Ûˆˆ]KXÛÜÙK\™XY\ˆ\šXK[X™[Hµèuäµæuê5êˆ5é5ê5æ5æH5å5åõäuæuç5å¸§%OØ]ÛÚXY\]ˆİ[OH›İ™\™›İÎ˜]]ÎÛZ[‹ZZYÚŒİÚ]K\ÜXÙNœ™K]Ü˜\Û[™KZZYÚŒKÈ‰ÊÊKœ^[Y[[ÙOOOH\İÈİ›Û™ÏµçµéµäH5æ5èuæ8 %5å5çµåõæuê5çµåuéµäˆ5ç5äuäõæuéõå5äuç5äuäË5ç5ç5ä5åõæuåuäH5ä5çµæuêµæKÜİ›Û™ÏÜˆˆˆŠJÑÙJœŠŠJJÉÏÙ]›Ûİ\ˆİ[OHœY[™Ë]ÜÙ›^\Úš[šÎŒ]Ûˆ\OH˜]Ûˆˆ]KXÛÜÙK\™XY\µèuäµæuê5åØ]ÛÙ›Ûİ\‰Ë‹˜\[™
ŠK‹œ]Y\TÙ[XİÜ[
–Ù]KXÛÜÙK\™XY\—HŠK™›Ü‘XXÚ
YOO˜YK›Û˜ÛXÚÏVJK‹˜Y]™[\İ[™\Š˜ÛÜÙH‹

OOŞOOOU‰‰–J
_JK‹œÚİÓ[Ù[

K‹œİ[K™\Ü^OH™›^‹‹œİ[K™›^\™Xİ[ÛH˜ÛÛ[[ˆ‹‹œ]Y\TÙ[XİÜŠ–Ù]KXÛÜÙK\™XY\—HŠK™›Øİ\Ê
_Y[˜İ[ÛˆŠ
^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^ÖJ
NÛ]JÊÜÚ[[Ï[[ÏHLJ–Ù]K\XÚØYÙK\İX›Z]HŠI‰‰

K
ˆŠNİ^Û]™O^ZY[‹œXÚØYÙSÜ[ÛœÊJK[‹˜Ø\™ÏŞZY[‹˜Ø\™Ê
N›[ÚYŠ^Š
_ˆOO\
\™]\›ÛO\ÙJŠßK™JKÚ\ÔØ]™YØ\™›‹˜Ø\™ÏĞ\œ˜^Kš\Ğ\œ˜^JO[[İ›ÚY•‹œ^[Y[Y]ÙÊI‰•‹œ^[Y[Y]ÙË›[™İŒˆLJKÏHLKŠ
_XØ]Ú
™J^ŞŠ
I‰–OO\	‰ŠÏHLK
™K›Y\ÜØYÙ_µç5ä5è5æuêµçÈ5ç5æ5èµåuçÈ5åõäuæuç5åuê‹ˆ5ê5èµè5è5åH5åuè5èuåH5êuåuäKˆŠJ__J_Y[˜İ[ÛˆŠŠ^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^ÚYŠ‹œ™]™[Y˜][

KQŠ
_QJ–Û˜[YOXÛÛœÙ[HŠK˜ÚXÚÙY
\™]\›Û]™OQJ–Û˜[YOY\İ[˜][Û—HŠK˜[YKš[J
NÚYŠZI‰ˆ[™J^Õ
µæuêH5ç5å5åµæuçÈ5æuèµäÈ5ç5æ5æuåuçŠNÜ™]\›ŸZYŠÏOOHš\‰‰ˆZI‰ˆ[™J^Õ
µæuêH5ç5å5åµæuçÈ5æuèµäÈ5ç5æ5æuåuçŠNÜ™]\›ŸYÏHL	

NÛ]JÊÜYOZÕ
ˆŠNÛ]ÙO^ÜØÛÜU\NšËØÛÜUš\YšÏOOHš\ÚN›[Nİ^ÚYŠYKœšXÙWØYÛÜ›İOOL
^ÚYŠZY[‹šX[
ŠÜÜXÚØYÙN˜YKšYİš\šKÙ\İ[˜][ÛšOÛ[›™Kİ\›\Î›K\›\ÒYØÛÛœÙ[ˆLKÙJJK^Š
_ˆOO\
\™]\›Õ
µå5è5æuèuæuåuçÈ5å5åué5èµçˆ5ç5ä5äuåuéµèˆ5êµêuç5åuçKˆŠKZY[Š
KŠ
I‰ŠZY[Š
J_Y[Ù^Û]O^ZY[‹˜ÚXÚÛİ]
ŠÜXÚØYÙRY˜YKšYš\YšK\İ[˜][Û›™KÛÛœÙ[™\œÚ[Ûˆ™YK\XÚØYÙ\Ë]ŒH‹\›\ÒY›K\›\ÒYKÙJJNÚYŠ^Š
_ˆOO\
\™]\›Û]O[™]ÈT“
OO[[İ›ÚYK\›
NÚYŠKœ›İØÛÛOOHšÎˆŸKšÜİ˜[YHOOHœÙXİ\™K˜Ø\™ÛÛKœÛÛ][ÛœÈŸKœÜK\Ù\›˜[Y_Kœ\ÜİÛÜ™
]›İÈ\œ›ÜŠµæõêµåuäuêˆ5êµêuç5åuçH5ç5ä5êµéõæuè5åŠNİ›İÛ™\‘Øİ[Y[™Y˜][šY]Ë›ØØ][Û‹˜\ÜÚYÛŠKš™YŠ__XØ]Ú
J^ŞŠ
I‰•OO\	‰ŠZY[Š
K
K›Y\ÜØYÙ_µå5é5èµåuç5å5ç5ä5å5åuêuç5çµåˆ5äuäõéõåH5èuæ5æ5åuèH5ç5é5è5æH5è5æuèuæuåuçÈ5è5åuèuèËˆŠJ_Yš[˜[^ŞŠ
I‰ŠÏHLKJ–Ù]K\XÚØYÙK\İX›Z]HŠI‰‰

J__J_\™]\›ˆŠ
K]˜\ˆXO]O”İš[™ÊO[[İˆˆŠKœ™\XÙJÖÉˆ‰×KÙËOOŠÈ‰ˆˆ‰˜[\È‹ˆ‰›È‹ˆˆ‰™İÈ‹	È‰Îˆ‰œ][İÈ‹‰Èˆ‰ˆÌÎNÈŸJVÙWJNİ˜\ˆ]]O“[X™\‹š\ÔØY™R[YÙ\Š
I‰LÛ™]È[“[X™\‘›Ü›X]
šKRS‹Üİ[Nˆ˜İ\œ™[˜ŞH‹İ\œ™[˜ŞNˆ’SÈŸJK™›Ü›X]
ÌL
Nˆµç5ä5åµçµæuçÈ‹]O	‰ˆS[X™\‹š\Ó˜SŠ]Kœ\œÙJ
JOÛ™]È[‘]U[YQ›Ü›X]
šKRS‹Ù]Tİ[NˆœÚÜ‹[YTİ[NˆœÚÜ‹[YV›Û™Nˆ\ÚXKÒ™\\Ø[[HŸJK™›Ü›X]
™]È]J
JNˆµç5ä5åµçµæuçÈÙ[˜İ[ÛˆÚ
Ü›Ûİİ\İÛY\’Y™K\N›ŸJ^Û]HLOLÏLYOœ]Y\TÙ[XİÜŠ
NÙ[˜İ[ÛˆÊ
^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^Û]]˜ÛÛZ[œÊ›İÛ™\‘Øİ[Y[˜Xİ]™Q[[Y[
KJÊÚNİš[›™\’SIÏ›ÛOHœİ]\Èµæ5åuèµçÈ5äõåuåõåuêˆ5æõèué5æuæuçx )Ü‰Îİ^Û]O^ZY[‹˜İ\İÛY\‘š[˜[˜ÙJK
NÚYŠ\ŸOOZ_]š\ĞÛÛ›™XİY
\™]\›ÚYŠ
OO[[İ›ÚY›K\Ù\—ÚY
HOOY_K›Ù™œÙ]OOYP\œ˜^Kš\Ğ\œ˜^JK›Ü™\œÊJ]›İÈ\œ›ÜŠ’[˜[Y™\ÜŠNÜÏYš[›™\’SIÏÈXš[™^H‹LHµèµèuéõä5åuêˆ5êµêuç5åuçOÚÏµçµåuéµäµæuçH5ê5æuêuåuçµæH5ê5æõæuêuêˆ5åõäuæuç5åuêˆ5êuç5å5ç5éõåuåÈ5å5è5äuåõê5äuç5äuäËˆ5êµêuç5åuçH5çµçµêµæuçÈ5ä5åH5äõåuê5êH5äuæuê5åuê5ä5æuè5åH5ä5æuêuåuê5åõæuåuäKˆ5å5êµä5ê5æuæõæuçH5ç5é5æH5êuèµåuçÈ5æuêuê5ä5çÜ]ˆÛ\ÜÏH˜İ\İÛY\‹]˜[œØXİ[ÛœÈ‰ÊÊK›Ü™\œË›[™İÛK›Ü™\œË›X\
ÏOˆ\XÛOˆŠÒXJË™\İ[˜][Û—Û˜[YJJÉÏÚµçµèué5ê5å5åµçµè5åÙ\H›ˆ‰ÊÒXJËšY
JÈÙµèuæõåuçOÙˆŠÒXJ]ŠËœšXÙWØYÛÜ›İ
JJÈÙµèuæ5æ5åuèOÙˆŠÒXJXJÊJJÈÙµêµä5ê5æuæˆ5æuéµæuê5åÙˆŠÒXJ
Ë˜Ü™X]YØ]
JJÈÙµêµä5ê5æuæˆ5ä5æuêuåuê5êµêuç5åuçOÙˆŠÒXJËœİ]OOOHœZYŞ
ËœZYØ]
Nˆµä5æuçÈ5ä5æuêuåuê5êµêuç5åuçHŠJÉÏÙµçµåµå5å5èµèuéõêˆ5èué5éÏÙ\H˜]]È‰ÊÒXJË˜[œØXİ[Û—ÚYµç5ä5å5êµéõäuçŠJÈÙµåõêuäuåuè5æuêÙµä5æuçÈ5çµèuçµæˆ5åµçµæuçÏÙµéõäuç5åÙµä5æuçÈ5çµèuçµæˆ5åµçµæuçÏÙÙØ\XÛOˆŠKš›Ú[ŠˆŠNˆµä5æuçÈ5èµèuéõä5åuêˆ5äuê5æuêuåuçµæH5å5ç5éõåuåÈ5äuèµçµåuäÈ5åµåÜˆŠJÉÏÙ]]ˆÛ\ÜÏHœ›İÈ]Ûˆ\OH˜]Ûˆˆ]K\™]‹Yš[˜[˜ÙH	ÊÊÏOOLÈ™\ØX›YˆˆŠJÈµå5éõåuäõçOØ]ÛÜ[µèµçµåuäÈŠÊËÍL
ÌJJÉÏÜÜ[]Ûˆ\OH˜]Ûˆˆ]K[™^Yš[˜[˜ÙH	ÊÊKš\Ó[Ü™OÈˆˆ™\ØX›YŠJÈµå5äuäØ]ÛÙ]Ïµåõêuäuåuè5æuåuêˆ5åuéõäuç5åuêÚÏµçµä5äµê5å5çµèuçµæõæuçH5å5åõêuäuåuè5ä5æuæuçH5æ5ê5çH5åõåuäuêˆ5ä5æuçÈ5çµèuçµæˆ5åµçµæuçÈ5ç5å5åuê5äõåÈ5åõæuäuåuê5åuå5é5éõêˆ5çµèuçµæõæuçH5æuäuåuéµèµåH5äuçµêuæuçµå5è5é5ê5äõê‹Üˆ‹	‰ˆ]˜ÛÜÙ\İ
–ÚY[—HŠI‰›İÛ™\‘Øİ[Y[˜Xİ]™Q[[Y[OO]›İÛ™\‘Øİ[Y[˜›ÙI‰›
šÈŠK™›Øİ\Ê
K
–Ù]K\™]‹Yš[˜[˜ÙWHŠK›Û˜ÛXÚÏJ
OO˜ÊX]›X^
ËML
JK
–Ù]K[™^Yš[˜[˜ÙWHŠK›Û˜ÛXÚÏJ
OO˜ÊÊÍL
_XØ]Ú
J^Ü‰‰šOOZI‰Šš[›™\’SIÏ›ÛOHœİ]\Èµç5ä5è5æuêµçÈ5ç5æ5èµåuçÈ5ä5êˆ5å5äõåuåÈ5å5æõèué5æKˆ5ä5æuçÈ5ç5å5èuæuéÈ5çµæõæˆ5êuä5æuçÈ5èµèuéõä5åuê‹Ü]Ûˆ\OH˜]Ûˆˆ]K\™]KYš[˜[˜ÙOµè5èuå5êuåuäOØ]Û‰Ë
–Ù]K\™]KYš[˜[˜ÙWHŠK›Û˜ÛXÚÏJ
OO˜Ê
J__J_\™]\›ˆÊ
K

OOÜHLKJÊËœ™\XÙPÚ[™[Š
__]˜\ˆ]O”İš[™ÊO[[İˆˆŠKœ™\XÙJÖÉˆ‰×KÙËOOŠÈ‰ˆˆ‰˜[\È‹ˆ‰›È‹ˆˆ‰™İÈ‹	È‰Îˆ‰œ][İÈ‹‰Èˆ‰ˆÌÎNÈŸJVÙWJKÚVÖÈ›˜[YH‹µêuçH5çµç5ä—KÈœÛ™H‹µæ5ç5é5åuçÈ—KÈœİ™Y]‹µê5åõåuäH5åuçµèué5ê5äuæuêˆ—KÈ˜Ú]H‹µèµæuê—KÈœÜİÛÙH‹µçµæuéõåuäÈ—KÈ˜Ûİ[H‹µçµäõæuè5å—WK^Ü[™[™ÎˆµçµçµêµæuçÈ5ç5ä5æuçµåuêˆ5åuêµêuç5åuçH‹Xİ]™Nˆµé5èµæuç‹İ\Ü[™Yˆµçµåuêuå5å‹ÛÜÙYˆµèuäµåuêŸNÙ[˜İ[ÛˆZ
J^Ü™]\›ˆŠ\Ë\™İ[Y[Ë[˜İ[ÛŠŠÜ›Ûİİ\İÛY\’Y™K\N›‹˜XÚÎœŸJ^Û]ÏHLLÏHœ›Ùš[H‹J
OOßKJ
OOßK]ÏOœ]Y\TÙ[XİÜŠÊNİš[›™\’SIÏ›ÛOHœİ]\Èµæ5åuèµçÈ5é5ê5æ5æH5ç5éõåuåø )Ü‰ÎÙ[˜İ[ÛˆJ
^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^İ˜\ˆËNÛ]ÏJÊÛİ^Û]Ï^ZY[‹˜İ\İÛY\ŠJNÚYŠ\ßÈOO[]š\ĞÛÛ›™XİY
\™]\›Û]WË™[XZ[™\šYšYY	‰–È˜Xİ]™H‹œ[™[™È—Kš[˜ÛY\ÊËœİ]\ÊNİš[›™\’SIÏÙXİ[ÛˆÛ\ÜÏH˜YZ[‹Xİ\İÛY\ˆˆ]KXYZ[‹Xİ\İÛY\XY\ˆÛ\ÜÏH˜XØÛİ[XÙ[\‹ZXY[™È]Ü[ˆÛ\ÜÏH˜XØÛİ[Y^YXœ›İÈµè5æuå5åuç5ç5éõåuåÏÜÜ[‰ÊŞ
Ëœ›Ùš[K›˜[Y_Ë™[XZ[
JÉÏÚÙ]]Ûˆ\OH˜]Ûˆˆ]KX˜XÚËXİ\İÛY\œÏµåõåµê5å5ç5ê5êuæuçµåØ]ÛÚXY\]KXXØÛİ[\XÚØYÙOµåõäuæuç5êˆ5äuê5æuê5êˆ5çµåõäõç5äuåõêuäuåuçÎˆ	ÊŞ


ÏWË˜XØÛİ[XÚØYÙJOO[[İ›ÚY™Ë›˜[YJ_µè5æuèuæuåuçÈ5ê5ä5êuåuè5æHŠJÉÏÜ]KXİ\İÛY\‹[Y\ÜØYÙH›ÛOHœİ]\Èˆ\šXK[]™OHœÛ]HÜ›Ü›H]KXİ\İÛY\‹\›Ùš[OÏµé5ê5æ5æuçH5ä5æuêuæuæuçH5åuæõêµåuäuêÚÏX™[µçµæuæuç5å5æõè5æuèuå5å5çµä5åuçµê[œ]\OH™[XZ[ˆ™XYÛ›H˜[YOH‰ÊŞ
Ë™[XZ[
JÉÈÛX™[Û\ÜÏH˜İ\İÛY\‹ZY[]K[›İHµæõêµåuäuêˆ5å5æõè5æuèuå5å5æuä5åµå5åuêˆ5çµä5åuçµêµêÈ5èµê5æuæõêˆ5é5ê5æ5æH5å5éõêuê5ä5æuè5å5çµêuè5å5ä5åuêµåÜ]ˆÛ\ÜÏH˜XØÛİ[YšY[È‰ÊÔÚ›X\

Ñ—JOOˆX™[ˆŠÑŠÉÏ[œ]˜[YOH‰ÊÑ
ÉÈˆ˜[YOH‰ÊŞ
Ëœ›Ùš[VÑJJÉÈˆ™\]Z\™YX^[™İHŒŒÛX™[‰ÊKš›Ú[ŠˆŠJÉÏÙ]]Ûµêuçµåuê5é5ê5æ5æH5ç5éõåuåÏØ]ÛÙ›Ü›O›Ü›H]KXİ\İÛY\‹\İ]\ÏÏµèuæ5æ5åuèH5åõêuäuåuçÏÚÏX™[µèuæ5æ5åuèOÙ[Xİ˜[YOHœİ]\È‰ÊÓØš™Xİ™[šY\ÊŠK›X\

Ñ—JOO‰ÏÜ[Ûˆ˜[YOH‰ÊÑ
ÉÈˆ	ÊÊOOWËœİ]\ÏÈœÙ[XİYˆˆŠJÈˆŠÑŠÈÛÜ[ÛˆŠKš›Ú[ŠˆŠJÉÏÜÙ[XİÛX™[X™[µèuæuäuêˆ5êuæuè5åuæO[œ]˜[YOHœ™X\ÛÛˆˆZ[›[™İHŒÈˆX^[™İHLˆ™\]Z\™YÛX™[]ÛµèµäõæõçÈ5èuæ5æ5åuèOØ]ÛÙ›Ü›OÙXİ[ÛˆÛ\ÜÏH˜İ\İÛY\‹\ÙXİ\š]HÏµèuæuèuçµåÚÏµçµè5å5ç5æuæõåuç5ç5äuéõêH5ä5æué5åuèH5èuæuèuçµåˆ5éõæuêuåuê5çµä5åuäuæ5åÈ5è5êuç5åÈ5ç5çµæuæuç5å5çµä5åuçµêˆ5êuç5å5ç5éõåuåË5åuå5ç5éõåuåÈ5äuåuåõê5èuæuèuçµå5åõäõêuåˆ5ä5æuçÈ5äµæuêuå5ç5èuæuèuçµå5å5éõæuæuçµê‹ÜX™[µèuæuäuêˆ5å5ä5æué5åuèO[œ]]K\™\Ù]\™X\ÛÛˆZ[›[™İHŒÈˆX^[™İHLˆXÙZÛ\Hµèuæuäuêˆ5äuéõêuêˆ5å5ä5æué5åuèHÛX™[]Ûˆ\OH˜]Ûˆˆ]K\™\Ù]Xİ\İÛY\ˆ	ÊÊÈˆˆ™\ØX›YŠJÉÏµêuç5åÈ5éõæuêuåuê5ç5ä5æué5åuèH5èuæuèuçµå5ç5ç5éõåuåÏØ]ÛÜÙXİ[ÛÙXİ[ÛˆÛ\ÜÏHœ^[Y[[Y]ÙÈÏµæõê5æ5æuèuæH5ä5êuê5ä5æH5êuç5å5ç5éõåuåÏÚÏµå5åµè5êˆ5é5ê5æ5æH5å5æõê5æ5æuèH5çµêµäuéµèµêˆ5äuäõèÈ5å5çµä5åuäuæ5åÈ5êuç5èué5éÈ5å5èuç5æuéõå5äuç5äuäËˆ5êuçµæuê5å5ä5æuè5å5ä5æuêuåuê5ç5åõæuåuäH5åuä5æuè5å5çµé5èµæuç5å5åõêuäuåuçËÜ]‰Ê×Ëœ^[Y[Y]ÙË›X\
O‰Ï\XÛHÛ\ÜÏHœØ]™YXØ\™]İ›Û™Ï‰ÊÊ›\İÈµæõê5æ5æuèH5å5çµèuêµæuæuçH5äu¯ˆŠŞ
›\İ
Nˆµæõê5æ5æuèH5êuçµåuê5ä5éµç5å5èué5éÈŠJÈÜİ›Û™ÏÛX[ˆŠŞ
™^\WÛ[Û
JÈ‹ÈŠŞ
™^\WŞYX\ŠJÉÏÜÛX[Ù]]Ûˆ\OH˜]Ûˆˆ]K\™[[İ™KXİ\İÛY\‹XØ\™H‰ÊŞ
šY
JÉÈˆ	ÊÊÈˆˆ™\ØX›YŠJÈµå5èuê5çµå5åõêuäuåuçÏØ]ÛØ\XÛOˆŠKš›Ú[ŠˆŠJÉÏÙ]X™[µèuæuäuå5ç5é5èµåuç5êˆ5ä5çµéµèµæH5êµêuç5åuçO[œ]]KXØ\™\™X\ÛÛˆZ[›[™İHŒÈˆX^[™İHLˆXÙZÛ\Hµèuæuäuå5ç5êµæuèµåuäÈ5å5è5æuå5åuçÛX™[X™[Û\ÜÏH˜XØÛİ[XÛÛœÙ[[œ]\OH˜ÚXÚØ›Şˆ]KXİ\İÛY\‹XØ\™XÛÛœÙ[ˆ5äuê5êuåuêµæH5å5ê5êuä5êˆ5å5ç5éõåuåÈ5ç5êuçµåuê5èµäuåuê5åH5çµåµå5å5æõê5æ5æuèH5ä5éµç5èué5éÈ5å5èuç5æuéõåÛX™[]Ûˆ\OH˜]Ûˆˆ]KXYXİ\İÛY\‹XØ\™	ÊÊ^WË˜Ø\™Ù]\[˜X›YÈ™\ØX›YˆˆŠJÈµå5åuèuèÈ5æõê5æ5æuèH5ä5êuê5ä5æH5ç5ç5éõåuåÏØ]ÛˆŠÊË˜Ø\™Ù]\[˜X›YÈµå5é5ê5æ5æuçH5çµåuåµè5æuçH5ä5éµç5èué5éÈ5å5èuç5æuéõåÈ5ä5æuçÈ5åõæuåuäH5ä5åuæ5åuçµæ5æKˆˆµêuçµæuê5êˆ5æõê5æ5æuèuæuçH5èµäõæuæuçÈ5æõäuåuæuå5èµäÈ5ç5å5êuç5çµêˆ5åõæuäuåuê5èué5éÈ5å5èuç5æuéõåˆŠJÈÜˆŠ×Ë˜Ø\™Ù]\Ë›X\
O‰Ï]Ûˆ\OH˜]Ûˆˆ]KXÚXÚËXİ\İÛY\‹XØ\™H‰ÊŞ
šY
JÉÈˆ	ÊÊ^WË˜Ø\™Ù]\[˜X›YÈ™\ØX›YˆˆŠJÈµäuäõæuéõêˆ5êuçµæuê5êˆ5æõê5æ5æuèH8 %ŠŞ
Ü[™[™ÎˆµçµçµêµæuçÈ5ç5ä5æuçµåuêˆ‹Ü™X][™Îˆµæuéµæuê5êˆ5äõèÈ‹][[Ûˆµè5äõê5êuêˆ5äuäõæuéõåŸVÑœİ]W_œİ]JJÊ˜Ü™X]YØ]Èˆ0­ÈŠŞ
™]È]J˜Ü™X]YØ]
KÓØØ[Tİš[™ÊšKRS‹İ[YV›Û™Nˆ\ÚXKÒ™\\Ø[[HŸJJNˆˆŠJÈØ]ÛˆŠKš›Ú[ŠˆŠJÈÜÙXİ[Û]Z[Ïİ[[X\Oµé5èµåuç5åuêˆ5è5æuå5åuç5ä5åõê5åuè5åuêÜİ[[X\OˆŠ×Ë˜]Y]›X\
OˆˆŠŞ
Ü›Ùš[NˆµèµäõæõåuçÈ5é5ê5æ5æuçH‹™\Ù]\ÜİÛÜ™ˆµäuéõêuêˆ5ä5æué5åuèH5èuæuèuçµå‹YØ\™ˆµäuéõêuêˆ5äõèÈ5êuçµæuê5êˆ5æõê5æ5æuèH‹™[[İ™PØ\™ˆµå5èuê5êˆ5æõê5æ5æuèHŸVÑ˜Xİ[Û—_˜Xİ[ÛŠJÈˆ0­ÈŠŞ
œİ]JJÈˆ0­ÈŠŞ
™]È]J˜Ü™X]YØ]
KÓØØ[Tİš[™ÊšKRSŠJJÈÜˆŠKš›Ú[ŠˆŠJÈÙ]Z[ÏÜÙXİ[Ûˆ‹

K

NÛ]VÖÈœ›Ùš[H‹µé5ê5æ5æuçH5ä5æuêuæuæuçH5åuæõêµåuäuêˆ—KÈœİ]\È‹µèuæ5æ5åuèH5åõêuäuåuçÈ—KÈ˜Ø\™È‹µæõê5æ5æuèuæH5ä5êuê5ä5æH5êuç5å5ç5éõåuåÈ—KÈ™š[˜[˜ÙH‹µäõåuåõåuêˆ5æõèué5æuæuçH—KÈ˜Xİ]š]H‹µæuåuçµçÈ5é5èµåuç5åuêˆ—WKÏZ
–Ù]KXYZ[‹Xİ\İÛY\—HŠKÏ]›İÛ™\‘Øİ[Y[˜Ü™X]Q[[Y[
™]ˆŠNÚË˜Û\ÜÓ˜[YOH˜İ\İÛY\‹Y]Z[]XœÈ‹ËœÙ]]šX]Jœ›ÛH‹X›\İŠKËœÙ]]šX]J˜\šXK[X™[‹µè5æuå5åuç5ç5éõåuåÈŠKËœÙ]]šX]J˜\šXK[ÜšY[][Ûˆ‹šÜš^›Û[ŠKËš[›™\’ST›X\

Ñ—JOO‰Ï]Ûˆ\OH˜]Ûˆˆ›ÛOHXˆˆYH˜İ\İÛY\‹]X‹IÊÑ
ÉÈˆ]KXİ\İÛY\‹]XH‰ÊÑ
ÉÈˆ\šXKXÛÛ›ÛÏH˜İ\İÛY\‹\[™[IÊÑ
ÉÈ‰ÊÑŠÈØ]ÛˆŠKš›Ú[ŠˆŠK
–Ù]KXİ\İÛY\‹[Y\ÜØYÙWHŠK˜Y\ŠÊNÛ]O^Ü›Ùš[N–Ú
–Ù]KXİ\İÛY\‹\›Ùš[WHŠWKİ]\Î–Ú
–Ù]KXİ\İÛY\‹\İ]\×HŠK
‹˜İ\İÛY\‹\ÙXİ\š]HŠKËœ]Y\TÙ[XİÜŠ™]Z[ÈŠWKØ\™Î–Ú
‹œ^[Y[[Y]ÙÈŠWKš[˜[˜ÙN–×KXİ]š]N–×_NÙ›ÜŠ]Ñ[Ùˆ
^Û]]›İÛ™\‘Øİ[Y[˜Ü™X]Q[[Y[
™]ˆŠNÑ‹šYH˜İ\İÛY\‹\[™[HŠÑ‹™]\Ù]˜İ\İÛY\”[™[Q‹œÙ]]šX]Jœ›ÛH‹Xœ[™[ŠK‹œÙ]]šX]J˜\šXK[X™[YH‹˜İ\İÛY\‹]X‹HŠÑ
K‹X’[™^L‹˜\[™
‹‹’VÑJKË˜\[™
Š_[]OHLKOHLKQOØÏQOOH˜Xİ]š]H‰‰ˆQI‰ŠOHL^ÊÜ›Ûİš
–Ù]KXİ\İÛY\‹\[™[XXİ]š]WHŠKİ\İÛY\’Y™K\N›ŸJJNÙ›ÜŠ]Ñ—[Ùˆ
^Û]	QOOQZ
–Ù]KXİ\İÛY\‹]XHŠÑŠÈ—HŠNĞ‹œÙ]]šX]J˜\šXK\Ù[XİY‹İš[™Ê	
JK‹X’[™^IÌ‹LK
–Ù]KXİ\İÛY\‹\[™[HŠÑŠÈ—HŠKšY[HIQOOH™š[˜[˜ÙH‰‰ˆPI‰ŠOHLZÚ
Ü›Ûİš
–Ù]KXİ\İÛY\‹\[™[Yš[˜[˜ÙWHŠKİ\İÛY\’Y™K\N›ŸJJ_NÔ™›Ü‘XXÚ

ÑKŠOOÛ]	Z
–Ù]KXİ\İÛY\‹]XHŠÑ
È—HŠNÉ›Û˜ÛXÚÏJ
OO”Š
K	›ÛšÙ^YİÛPOÛ]NÚYŠ‹šÙ^OOOH\œ›İÓYŠVOJŠÌJIT›[™İÙ[ÙHYŠ‹šÙ^OOOH\œ›İÔšYÚŠVOJŠÔ›[™İLJIT›[™İÙ[ÙHYŠ‹šÙ^OOOH’ÛYHŠVOLÙ[ÙHYŠ‹šÙ^OOOH‘[™ŠVOT›[™İLNÙ[ÙH™]\›Ğ‹œ™]™[Y˜][

KŠÖWVÌJK
–Ù]KXİ\İÛY\‹]XHŠÔÖWVÌJÈ—HŠK™›Øİ\Ê
__JKŠÊNÛ]Z
–Ù]KXİ\İÛY\‹[Y\ÜØYÙWHŠKQO‹^ÛÛ[QÚ
–Ù]KX˜XÚËXİ\İÛY\œ×HŠK›Û˜ÛXÚÏJ
OOÜÏHLK
ÊË

K

KŠ
_NÛ]ÏJŠOO‘œ]Y\TÙ[XİÜ[
˜]ÛˆŠK™›Ü‘XXÚ
	O‰™\ØX›YQŠNÚ
–Ù]KXİ\İÛY\‹\›Ùš[WHŠK›ÛœİX›Z]QO˜Š[[[˜İ[ÛŠŠ
^Ñœ™]™[Y˜][

NÛ]Q\™Ù]	SØš™Xİ™œ›ÛQ[šY\ÊÚ›X\

Ğ—JOO–Ğ‹‹™[[Y[ÖĞ—K˜[YKš[J
WJJNÓÊ‹L
Nİ^ÚYŠZY[‹œØ]™Pİ\İÛY\ŠÜİ\Ù\™Kİ™\œÚ[Û—Ëœ›Ùš[Wİ™\œÚ[Û‹Ù]Z[Î‰JK\Ê\™]\›ŞZY[J
K
–Ù]KXİ\İÛY\‹[Y\ÜØYÙWHŠK^ÛÛ[Hµé5ê5æ5æH5å5ç5éõåuåÈ5èµåuäõæõè5åHŸXØ]Ú
Š^ÜÉ‰•
µå5èµäõæõåuçÈ5ç5ä5è5êuçµêˆŠĞ‹›Y\ÜØYÙJ_Yš[˜[^ÜÉ‰“Ê‹LJ__JK
–Ù]KXİ\İÛY\‹\İ]\×HŠK›ÛœİX›Z]QO˜Š[[[˜İ[ÛŠŠ
^Ñœ™]™[Y˜][

NÛ]Q\™Ù]ÓÊ‹L
Nİ^ÚYŠZY[‹œİ]\ÊÜİ\Ù\™Kİ™\œÚ[Û—Ë™\œÚ[Û‹Üİ]\Î‘‹™[[Y[Ëœİ]\Ë˜[YKÜ™X\ÛÛ‘‹™[[Y[Ëœ™X\ÛÛ‹˜[Y_JK\Ê\™]\›ŞZY[J
K
–Ù]KXİ\İÛY\‹[Y\ÜØYÙWHŠK^ÛÛ[Hµèuæ5æ5åuèH5å5ç5éõåuåÈ5èµåuäõæõçÈŸXØ]Ú
	
^ÜÉ‰•
	›Y\ÜØYÙJ_Yš[˜[^ÜÉ‰“Ê‹LJ__JK
–Ù]K\™\Ù]Xİ\İÛY\—HŠK›Û˜ÛXÚÏQO˜Š[[[˜İ[ÛŠŠ
^Û]Z
–Ù]K\™\Ù]\™X\ÛÛ—HŠK˜[YKš[J
NÚYŠ‹›[™İÊ^Õ
µæuêH5ç5éµæuæuçÈ5èuæuäuêˆ5ä5æué5åuèHŠNÜ™]\›Ÿ[]	Q˜İ\œ™[\™Ù]É™\ØX›YHLİ^ŞZY[‹˜İ\İÛY\Xİ[ÛŠØXİ[Ûˆœ™\Ù]\ÜİÛÜ™‹İ\İÛY\’Y™K™X\ÛÛ‘ŸJKÉ‰•
µäuéõêuêˆ5éõæuêuåuê5ä5æué5åuèH5è5êuç5åõå5ç5çµæuæuç5å5çµä5åuçµêˆ5êuç5å5ç5éõåuåËˆ5å5èuæuèuçµå5å5éõæuæuçµêˆ5ç5ä5å5åuéµäµåˆŠ_XØ]Ú
Š^ÜÉ‰•
‹›Y\ÜØYÙJ_Yš[˜[^ÜÉ‰Š	™\ØX›YHLJ__JNÛ]OJ
OOÛ]Z
–Ù]KXØ\™\™X\ÛÛ—HŠK˜[YKš[J
NÚYŠ›[™İÊ]›İÈ\œ›ÜŠµæuêH5ç5éµæuæuçÈ5èuæuäuå5ç5é5èµåuç5êˆ5ä5çµéµèµæH5êµêuç5åuçHŠNÜ™]\›ˆNÚ
–Ù]KXYXİ\İÛY\‹XØ\™HŠK›Û˜ÛXÚÏQO˜Š[[[˜İ[ÛŠŠ
^Û]Q˜İ\œ™[\™Ù]İ^Û]	SJ
NÚYŠZ
–Ù]KXİ\İÛY\‹XØ\™XÛÛœÙ[HŠK˜ÚXÚÙY
]›İÈ\œ›ÜŠµæuêH5ç5ä5êuê5êuéõæuæuçµêˆ5å5ê5êuä5êˆ5å5ç5éõåuåÈŠNÑ‹™\ØX›YHLÛ]^ZY[‹˜İ\İÛY\Xİ[ÛŠØXİ[Ûˆ˜YØ\™‹İ\İÛY\’Y™K™X\ÛÛ‰ÛÛœÙ[™\œÚ[ÛˆœİÜ™KXØ\™[Û‹X™Z[‹]ŒHŸJKO[™]ÈT“
‹\›
NÚYŠKœ›İØÛÛOOHšÎˆŸKšÜİ˜[YHOOHœÙXİ\™K˜Ø\™ÛÛKœÛÛ][ÛœÈŸKœÜK\Ù\›˜[Y_Kœ\ÜİÛÜ™
]›İÈ\œ›ÜŠµäõèÈ5å5èuç5æuéõå5ä5æuè5åH5êµéõæuçÈŠNÜÉ‰š\ĞÛÛ›™XİY	‰›İÛ™\‘Øİ[Y[™Y˜][šY]Ë›ØØ][Û‹˜\ÜÚYÛŠKš™YŠ_XØ]Ú
	
^ÜÉ‰•
	›Y\ÜØYÙJ_Yš[˜[^ÜÉ‰Š‹™\ØX›YHLJ__JKœ]Y\TÙ[XİÜ[
–Ù]K\™[[İ™KXİ\İÛY\‹XØ\™HŠK™›Ü‘XXÚ
O‘›Û˜ÛXÚÏJ
OO˜Š[[[˜İ[ÛŠŠ
^İ^Û]SJ
NÑ™\ØX›YHLZY[‹˜İ\İÛY\Xİ[ÛŠØXİ[Ûˆœ™[[İ™PØ\™‹İ\İÛY\’Y™K™X\ÛÛ‘‹Y]ÙY‘™]\Ù]œ™[[İ™Pİ\İÛY\Ø\™JKÉ‰ŠZY[J
J_XØ]Ú
Š^ÜÉ‰•
‹›Y\ÜØYÙJ_Yš[˜[^ÜÉ‰Š™\ØX›YHLJ__JJKœ]Y\TÙ[XİÜ[
–Ù]KXÚXÚËXİ\İÛY\‹XØ\™HŠK™›Ü‘XXÚ
O‘›Û˜ÛXÚÏJ
OO˜Š[[[˜İ[ÛŠŠ
^Ñ™\ØX›YHLİ^Û]^ZY[‹˜İ\İÛY\Xİ[ÛŠØXİ[Ûˆœ™XÛÛ˜Ú[PØ\™‹İ\İÛY\’Y™KÙ]\Y‘™]\Ù]˜ÚXÚĞİ\İÛY\Ø\™JNÜÉ‰ŠZY[J
K
–Ù]KXİ\İÛY\‹[Y\ÜØYÙWHŠK^ÛÛ[Q‹˜ÛÛ\]YÑ‹˜[™XYTİÜ™YÈµå5æõê5æ5æuèH5æõäuê5êuçµåuê5äuåõêuäuåuçÎÈ5ç5ä5è5åuèué5å5æõé5æuç5åuê‹ˆˆµå5æõê5æ5æuèH5è5êuçµê5ä5éµç5å5èué5éÈ‘‹›[Z]™XXÚYÈµå5æõê5æ5æuèH5ä5åuçµê‹5ä5æˆ5æõäuê5êuçµåuê5æuçH5åõçµæuêuå5æõê5æ5æuèuæuçKˆ5æuêH5ç5å5èuæuê5æõê5æ5æuèH5êuçµåuê5åuç5äuäõåuéÈ5êuåuäH5ä5êˆ5å5äuéõêuåˆ‘‹œ›İšY\ÛÙOÈµå5èué5éÈ5æ5ê5çH5ä5æuêuê5ä5êˆ5å5êuçµæuê5å
5éõåuäÈŠÑ‹œ›İšY\ÛÙJÈŠKˆ5å5åuèué5êˆ5æõê5æ5æuèH5êµé5êµåÈ5äõèÈ5åõäõêNÈ5å5äuéõêuå5å5éõåuäõçµêˆ5è5êuçµê5êˆ5ç5äuäõæuéõåˆˆµêuçµæuê5êˆ5å5æõê5æ5æuèH5èµäõæuæuçÈ5çµçµêµæuè5å5ç5ä5æuêuåuêŠ_XØ]Ú
Š^ÜÉ‰•
‹›Y\ÜØYÙJ_Yš[˜[^ÜÉ‰Š™\ØX›YHLJ__JJ_XØ]Ú
Ê^ÜÉ‰š\ĞÛÛ›™XİY	‰Šš[›™\’SIÏ›ÛOHœİ]\Èµç5ä5è5æuêµçÈ5ç5æ5èµåuçÈ5é5ê5æ5æH5ç5éõåuåÎˆ	ÊŞ
Ë›Y\ÜØYÙJJÈÜ]Ûˆ]KX˜XÚËXİ\İÛY\œÏµåõåµê5å5ç5ê5êuæuçµåØ]ÛˆŠK
O]œ]Y\TÙ[XİÜŠ–Ù]KX˜XÚËXİ\İÛY\œ×HŠJOO[[K˜Y]™[\İ[™\Š˜ÛXÚÈ‹

OOÜÏHLKŠ
_J__J_\™]\›ˆZY[J
K

OOÜÏHLK
ÊË

K

__J_]˜\ˆÜ]O”İš[™ÊO[[İˆˆŠKœ™\XÙJÖÉˆ‰×KÙËOOŠÈ‰ˆˆ‰˜[\È‹ˆ‰›È‹ˆˆ‰™İÈ‹	È‰Îˆ‰œ][İÈ‹‰Èˆ‰ˆÌÎNÈŸJVÙWJNÙ[˜İ[ÛˆZ
Ü›Ûİİ]N™K\N›‹™Yœ™\ÚœJ
OO˜Š[[[˜İ[ÛŠŠ
^ßJ_J^Ù[˜İ[ÛˆJÊ^Û]HHJË˜Ø\™Ù]\[˜X›Y	‰™K™[XZ[™\šYšYY	‰–Èœ[™[™È‹˜Xİ]™H—Kš[˜ÛY\ÊKœİ]\ÊJNİš[›™\’SIÏÙXİ[ÛˆÛ\ÜÏHœ^[Y[[Y]ÙÈˆ\šXK[X™[YOHœ^[Y[[Y]ÙË]]HÈYHœ^[Y[[Y]ÙË]]Hµä5çµéµèµæH5êµêuç5åuçOÚÏµå5åuèuèÈ5æõê5æ5æuèH5ä5êuê5ä5æH5ç5åõêuäuåuçÈ5äõê5æˆ5äõèÈ5çµä5åuäuæ5åÈ5êuç5èué5éÈ5å5èuç5æuéõåˆ5çµèué5ê5å5æõê5æ5æuèH5å5çµç5ä5åuéõåuäÈ5å5ä5äuæ5åõå5ä5æuè5çH5è5êuçµê5æuçH5äuä5êµêÜ]ˆ]KXØ\™[\İ‰ÊÊ
Ëœ^[Y[Y]Ùß×JK›X\
O‰Ï\XÛHÛ\ÜÏHœØ]™YXØ\™]İ›Û™Ï‰ÊÊ›\İÈµæõê5æ5æuèH5å5çµèuêµæuæuçH5äu¯™OˆŠİÜŠ›\İ
JÈØ™Oˆˆµæõê5æ5æuèH5êuçµåuê5ä5éµç5èué5éÈ5å5èuç5æuéõåŠJÈÜİ›Û™ÏÛX[µêµåuéõèÈ™OˆŠİÜŠİš[™Ê™^\WÛ[Û
KœYİ\
‹ŒŠJJÈ‹ÈŠİÜŠ™^\WŞYX\ŠJÉÏØ™OÜÛX[Ù]]Ûˆ\OH˜]Ûˆˆ]K\™[[İ™KXØ\™H‰ÊİÜŠšY
JÉÈˆÛ\ÜÏHœÙXÛÛ™\Hµå5èuê5çµå5åõêuäuåuçÏØ]ÛØ\XÛO‰ÊKš›Ú[ŠˆŠ_	ÏÛ\ÜÏH™[\KXØ\™Èµä5æuçÈ5æõê5æ5æuèuæuçH5êuçµåuê5æuçH5äuåõêuäuåuçËÜ‰ÊJÉÏÙ]X™[Û\ÜÏH˜XØÛİ[XÛÛœÙ[[œ]\OH˜ÚXÚØ›Şˆ]KXØ\™XÛÛœÙ[	ÊÊÈˆˆ™\ØX›YŠJÉÏˆ5ä5è5æH5çµèuæõæuçH5ç5êuçµæuê5êˆ5çµåµå5å5æõê5æ5æuèH5ä5éµç5èué5éÈ5å5èuç5æuéõåˆ5êuçµæuê5å5ä5æuè5å5ê5æõæuêuêˆ5åõäuæuç5å5åuä5æuè5å5å5ê5êuä5å5ç5åõæuåuäH5ä5åuæ5åuçµæ5æKÛX™[]Ûˆ\OH˜]Ûˆˆ]KXYXØ\™	ÊÊÈˆˆ™\ØX›YŠJÉÏµå5åuèuèÈ5æõê5æ5æuèH5ä5êuê5ä5æOØ]ÛÛ\ÜÏH˜Ø\™X]˜Z[Xš[]H‰ÊÊK™[XZ[™\šYšYYÛÈµå5å5åuèué5å5çµæuåuèµäõêˆ5ç5êuçµæuê5êˆ5æõê5æ5æuèH5äuç5äuäËˆ5ê5æõæuêuêˆ5åõäuæuç5å5êµåõæuæuäH5ä5æuêuåuê5è5é5ê5äÈ5êuç5å5èuæõåuçKˆˆµå5åuèué5êˆ5æõê5æ5æuèH5èµäõæuæuçÈ5ä5æuè5å5åµçµæuè5åˆ5åõæuäuåuê5èué5éÈ5å5èuç5æuéõå5ç5êuçµæuê5êˆ5æõê5æ5æuèuæuçH5æ5ê5çH5å5åuêuç5çKˆˆµæuêH5ç5ä5çµêˆ5ä5êˆ5æõêµåuäuêˆ5å5çµæuæuç5ç5é5è5æH5å5åuèué5êˆ5æõê5æ5æuèKˆŠJÈÜ]ˆ]KXØ\™\[™[™ÏˆŠÊË˜Ø\™Ù]\ß×JK›X\
O‰Ï]Ûˆ\OH˜]Ûˆˆ]KXÚXÚËXØ\™H‰ÊİÜŠšY
JÉÈµäuäõæuéõêˆ5å5åuèué5êˆ5æõê5æ5æuèH8 %	ÊÊœİ]OOOHœ[™[™ÈÈµçµçµêµæuçÈ5ç5ä5æuêuåuêˆµè5äõê5êuêˆ5äuäõæuéõåŠJÊ˜Ü™X]YØ]Èˆ0­ÈŠİÜŠ™]È]J˜Ü™X]YØ]
KÓØØ[Tİš[™ÊšKRS‹İ[YV›Û™Nˆ\ÚXKÒ™\\Ø[[HŸJJNˆˆŠJÈØ]ÛˆŠKš›Ú[ŠˆŠJÉÏÙ]]KXØ\™[Y\ÜØYÙH›ÛOHœİ]\Èˆ\šXK[]™OHœÛ]HÜÜÙXİ[Û‰ÎÛ]Ï]œ]Y\TÙ[XİÜŠ–Ù]KXØ\™[Y\ÜØYÙWHŠNİœ]Y\TÙ[XİÜŠ–Ù]KXYXØ\™HŠK›Û˜ÛXÚÏYO˜Š[[[˜İ[ÛŠŠ
^Û]Y˜İ\œ™[\™Ù]ÚYŠ
^ÚYŠ]œ]Y\TÙ[XİÜŠ–Ù]KXØ\™XÛÛœÙ[HŠK˜ÚXÚÙY
^ØË^ÛÛ[HµæuêH5ç5ä5êuê5êuçµæuê5êˆ5æõê5æ5æuèH5ç5é5è5æH5çµèµäuê5ç5èué5éÈÜ™]\›Ÿ\™\ØX›YHLİ^Û]^ZY[‹˜YØ\™

KO[™]ÈT“
\›
NÚYŠKœ›İØÛÛOOHšÎˆŸKšÜİ˜[YHOOHœÙXİ\™K˜Ø\™ÛÛKœÛÛ][ÛœÈŸKœÜK\Ù\›˜[Y_Kœ\ÜİÛÜ™
]›İÈ\œ›ÜŠµæõêµåuäuêˆ5äõèÈ5êuçµæuê5êˆ5å5æõê5æ5æuèH5ä5æuè5å5êµéõæuè5åŠNİš\ĞÛÛ›™XİY	‰›İÛ™\‘Øİ[Y[™Y˜][šY]Ë›ØØ][Û‹˜\ÜÚYÛŠKš™YŠ_XØ]Ú

^İš\ĞÛÛ›™XİY	‰ŠË^ÛÛ[Z›Y\ÜØYÙ_µç5ä5è5æuêµçÈ5ç5é5êµåuåÈ5äõèÈ5å5åuèué5êˆ5æõê5æ5æuèKˆ5ç5ä5è5ê5æõêuå5åõäuæuç5åˆ‹™\ØX›YHLJ___JKœ]Y\TÙ[XİÜ[
–Ù]K\™[[İ™KXØ\™HŠK™›Ü‘XXÚ
O™›Û˜ÛXÚÏJ
OO˜Š[[[˜İ[ÛŠŠ
^Ù™\ØX›YHLİ^ÚYŠZY[‹œ™[[İ™PØ\™
™]\Ù]œ™[[İ™PØ\™
K]š\ĞÛÛ›™XİY
\™]\›Û]\ÙJŠßKÊKÜ^[Y[Y]ÙÎœËœ^[Y[Y]ÙË™š[\ŠOššYOOY™]\Ù]œ™[[İ™PØ\™
_JNÚJ
Kœ]Y\TÙ[XİÜŠ–Ù]KXØ\™[Y\ÜØYÙWHŠK^ÛÛ[Hµå5æõê5æ5æuèH5å5åuèuê5çµå5åõêuäuåuçËˆ5ç5ä5è5æuêµçÈ5ç5å5êuêµçµêH5äuåH5äõê5æˆ5å5çµåuéµêˆŸXØ]Ú

^İš\ĞÛÛ›™XİY	‰ŠË^ÛÛ[Hµå5èuê5êˆ5å5æõê5æ5æuèH5ç5ä5å5åuêuç5çµåˆ5è5èuå5êuåuäKˆ‹™\ØX›YHLJ__JJKœ]Y\TÙ[XİÜ[
–Ù]KXÚXÚËXØ\™HŠK™›Ü‘XXÚ
O™›Û˜ÛXÚÏJ
OO˜Š[[[˜İ[ÛŠŠ
^Ù™\ØX›YHLİ^Û]^ZY[‹œ™XÛÛ˜Ú[PØ\™
™]\Ù]˜ÚXÚĞØ\™
NÚYŠ]š\ĞÛÛ›™XİY
\™]\›ØË^ÛÛ[\˜ÛÛ\]YÜ˜[™XYTİÜ™YÈµå5æõê5æ5æuèH5æõäuê5êuçµåuê5äuåõêuäuåuçÎÈ5ç5ä5è5åuèué5å5æõé5æuç5åuê‹ˆˆµå5æõê5æ5æuèH5è5êuçµê5ä5éµç5å5èué5éÈœ›[Z]™XXÚYÈµå5æõê5æ5æuèH5ä5åuçµê‹5ä5æˆ5æõäuê5êuçµåuê5æuçH5åõçµæuêuå5æõê5æ5æuèuæuçKˆ5æuêH5ç5å5èuæuê5æõê5æ5æuèH5åuç5äuäõåuéÈ5êuåuäH5ä5êˆ5å5äuéõêuåˆœœ›İšY\ÛÙOÈµå5èué5éÈ5æ5ê5çH5ä5æuêuê5ä5êˆ5å5êuçµæuê5å
5éõåuäÈŠÜœ›İšY\ÛÙJÈŠKˆ5ä5é5êuê5ç5é5êµåuåÈ5äõèÈ5åõäõêH5äuä5çµéµèµåuêˆ5å5åuèué5êˆ5æõê5æ5æuèKˆˆµå5åuèué5êˆ5å5æõê5æ5æuèH5èµäõæuæuçÈ5çµçµêµæuè5å5ç5ä5æuêuåuê‹˜ÛÛ\]Y	‰›‹˜Ø\™É‰šJZY[‹˜Ø\™Ê
J_XØ]Ú

^İš\ĞÛÛ›™XİY	‰ŠË^ÛÛ[Hµêuçµæuê5êˆ5å5æõê5æ5æuèH5æ5ê5çH5ä5åuçµêµåˆ5è5èuå5ç5ê5èµè5çÈ5äuå5çµêuæ‹ˆŠ_Yš[˜[^İš\ĞÛÛ›™XİY	‰Š™\ØX›YHLJ__JJ_ZJJK‹˜Ø\™É‰™K™[XZ[™\šYšYY	‰›‹˜Ø\™Ê
K[ŠÏOİš\ĞÛÛ›™XİY	‰šJÊ_JK˜Ø]Ú


OOİš\ĞÛÛ›™XİY	‰Šœ]Y\TÙ[XİÜŠ–Ù]KXØ\™[Y\ÜØYÙWHŠK^ÛÛ[Hµç5ä5è5æuêµçÈ5ç5æ5èµåuçÈ5ä5çµéµèµæH5êµêuç5åuçKˆ5ê5èµè5çÈ5ä5êˆ5å5åõêuäuåuçÈ5åuè5èuå5êuåuäKˆŠ_J_]˜\ˆ]O”İš[™ÊO[[İˆˆŠKœ™\XÙJÖÉˆ‰×KÙËOOŠÈ‰ˆˆ‰˜[\È‹ˆ‰›È‹ˆˆ‰™İÈ‹	È‰Îˆ‰œ][İÈ‹‰Èˆ‰ˆÌÎNÈŸJVÙWJKY^Ü[™[™ÎˆµçµçµêµæuçÈ5ç5ä5æuçµåuêˆ5åuêµêuç5åuçH‹Xİ]™Nˆµé5èµæuç‹İ\Ü[™Yˆµçµåuêuå5å‹ÛÜÙYˆµèuäµåuêŸKVÖÈ›˜[YH‹µêuçH5çµç5ä‹›˜[YH—KÈœÛ™H‹µæ5ç5é5åuçÈ‹[—KÈœİ™Y]‹µê5åõåuäH5åuçµèué5ê5äuæuêˆ‹œİ™Y]XY™\ÜÈ—KÈ˜Ú]H‹µèµæuê‹˜Y™\ÜË[]™[ˆ—KÈœÜİÛÙH‹µçµæuéõåuäÈ‹œÜİ[XÛÙH—KÈ˜Ûİ[H‹µçµäõæuè5å‹˜Ûİ[K[˜[YH—WKÚ]O”›X\

ÙK‹—JOOˆX™[ˆŠÛŠÉÏ[œ]˜[YOH‰ÊÙJÉÈˆ]]ØÛÛ\]OH‰ÊÜŠÉÈˆ˜[YOH‰ÊØ
O[[İ›ÚYÙWJJÉÈˆ™\]Z\™YX^[™İHŒŒÛX™[‰ÊKš›Ú[ŠˆŠKİ]O›™]È[“[X™\‘›Ü›X]
šKRS‹Üİ[Nˆ˜İ\œ™[˜ŞH‹İ\œ™[˜ŞNˆ’SÈŸJK™›Ü›X]
ÌL
NÙ[˜İ[Ûˆ

^Ü™]\›‰ÏÙXİ[ÛˆÛ\ÜÏHœ™YÚ\İ˜][ÛˆÜ[ˆÛ\ÜÏH˜XØÛİ[Y^YXœ›İÈ“SÕÔˆ’TÕQSÏÜÜ[µå5æ5æuåuç5å5äuä5çµêµåõæuç5æõä5çÏÚµåõêuäuåuçÈ5ä5åõäÈ5ç5êµæõè5åuçË5ç5èuåuæõçÈ5åuç5êµéõéµæuäH5å5æ5æuåuç5êuç5æ‹ÜÛÛ\ÜÏH˜XØÛİ[\İ\ÈOµé5ê5æ5æuçOÛOOµä5æuçµåuêˆ5çµæuæuçÛOOµåõäuæuç5å5åuêµêuç5åuçOÛOÛÛ›Ü›HYHœ™YÚ\İ˜][Ûˆ]ˆÛ\ÜÏH˜XØÛİ[YšY[È‰ÊĞÚ

JÉÏX™[µæõêµåuäuêˆ5çµæuæuç[œ]˜[YOH™[XZ[ˆ\OH™[XZ[ˆ]]ØÛÛ\]OH™[XZ[ˆ™\]Z\™YX^[™İHŒMÛX™[X™[µèuæuèuçµå5åõäõêuå[œ]˜[YOHœ\ÜİÛÜ™ˆ\OHœ\ÜİÛÜ™ˆ]]ØÛÛ\]OH›™]Ë\\ÜİÛÜ™ˆZ[›[™İHŒLˆˆ™\]Z\™YÛX™[X™[µä5æuçµåuêˆ5èuæuèuçµå[œ]˜[YOH˜ÛÛ™š\›Hˆ\OHœ\ÜİÛÜ™ˆ]]ØÛÛ\]OH›™]Ë\\ÜİÛÜ™ˆZ[›[™İHŒLˆˆ™\]Z\™YÛX™[Ù]\ÚYHÛ\ÜÏHœXÚØYÙKY\ØÛÜİ\™Hİ›Û™Ïµåõäuæuç5å5äuêµêuç5åuçH5åõäõ¯µé5èµçµæH5ç5æõç5æ5æuåuçÜİ›Û™Ïµå5çµåõæuê5åuçµæõèuêˆ5å5¯RH5æuåuéµäµåH5ç5é5è5æH5å5êµêuç5åuçKˆ5ä5æuçÈ5åõæuäõåuêH5åõåuäõêuæH5ä5åuæ5åuçµæ5æH5ä5åH5åõæuåuäH5çµèµäuê5ç5çµæõèuåˆ5å5å5é5èµç5å5ç5ä5åõê5ä5æuçµåuêˆ5å5çµæuæuç5åuä5æuêuåuê5å5êµêuç5åuçKÜµé5ê5æ5æH5å5ä5êuê5ä5æH5æuåuåµè5åH5ê5éÈ5äuäõèÈ5êµêuç5åuçH5çµä5åuäuæ5åÈ5êuç5èué5éÈ5å5èuç5æuéõåˆ5ç5ä5è5äµäuå5êµêuç5åuçH5äuæ5åué5èH5åµåÜØ\ÚYOH™YHİšY]Ï]\›\Èˆ\™Ù]H—Ø›[šÈˆ™[H››ÛÜ[™\ˆ›Ü™Y™\œ™\ˆµêµè5ä5æH5êuæuçµåuêH0­È\›\È	˜[\ÈÛÛ™][ÛœÏØOÜ]Ûˆ\OHœİX›Z]µæuéµæuê5êˆ5åõêuäuåuçÈ5åuêuç5æuåõêˆ5çµæuæuç5ä5æuçµåuêØ]Û]Ûˆ\OH˜]ÛˆˆYH˜˜XÚË]Ë[ÙÚ[ˆˆÛ\ÜÏHœÙXÛÛ™\Hµæõäuê5æuêH5ç5æH5åõêuäuåuçÏØ]Û]KXXØÛİ[[Y\ÜØYÙH›ÛOHœİ]\Èˆ\šXK[]™OHœÛ]HÜÙ›Ü›OÜÙXİ[Û‰ßY[˜İ[ÛˆZ

^Ù[˜İ[ÛˆJ
^Ü™]\›ˆŠ\Ë\™İ[Y[Ë[˜İ[ÛŠŠÏ^ßJ^Û]Ù]Nœ\œ›ÜšO^ZY[œœÊÊNÚYŠ
]›İÈ\œ›ÜŠ›Y\ÜØYÙ_µç5ä5è5æuêµçÈ5ç5äuäõåuéÈ5å5ê5êuä5åuêˆ5åõêuäuåuçÈŠNÜ™]\›ˆJ_Y[˜İ[ÛˆŠË
^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^İ˜\ˆÛ]]\[ÙŠÏO[[İ›ÚY˜Ë™\œ›ÜŠOOHœİš[™ÈØË™\œ›Ü›[ÚYŠ\	‰Š
[O[[İ›ÚY›˜ÛÛ^
HO[[	‰ššœÛÛŠJ]^Û]O^ZY[˜ÛÛ^šœÛÛŠ
Nİ\[ÙŠOO[[İ›ÚY›K™\œ›ÜŠOOHœİš[™È‰‰Š[K™\œ›ÜŠ_XØ]Ú
J^ß\™]\›ˆ\œ›ÜŠ
_J_Y[˜İ[ÛˆŠ
^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^İ˜\ˆÛ]Ù]N˜Ë\œ›Ü™O^ZY[™[˜İ[ÛœËš[›ÚÙJ˜YZ[‹\Û\È‹Ø›ÙN›JNÚYŠÈO[[	‰˜Ë™\œ›ÜŠ^Û]XÏO[[İ›ÚY˜Ë™\œ›ÜÚYŠZ	‰Š
YO[[İ›ÚY™˜ÛÛ^
HO[[	‰œšœÛÛŠJ]^ÚJZY[˜ÛÛ^šœÛÛŠ
JK™\œ›ÜŸXØ]Ú
J^ß]›İÈ\œ›ÜŠµç5ä5è5æuêµçÈ5ç5å5êuç5æuçH5é5èµåuç5êˆÓTÈŠ_\™]\›ˆßJ_Y[˜İ[ÛˆJ
^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^İ˜\ˆÛ]Ù]N˜Ë\œ›Ü™O^ZY[™[˜İ[ÛœËš[›ÚÙJ˜YZ[‹\Ù][™ÜÈ‹Ø›ÙN›JNÚYŠÈO[[	‰˜Ë™\œ›ÜŠ^Û]XÏO[[İ›ÚY˜Ë™\œ›ÜÚYŠZ	‰Š
YO[[İ›ÚY™˜ÛÛ^
HO[[	‰œšœÛÛŠJ]^Û]O^ZY[˜ÛÛ^šœÛÛŠ
Nİ\[ÙŠOO[[İ›ÚY›K™\œ›ÜŠOOHœİš[™È‰‰Š[K™\œ›ÜŠ_XØ]Ú
J^ß]›İÈ\œ›ÜŠµêuæuê5åuêˆ5å5å5äµäõê5åuêˆ5ä5æuè5åH5åµçµæuçÈŠ_\™]\›ˆßJ_\™]\›ÜXÚØYÙP˜[[˜Ù\ÎŠ[[
OO™J˜XØÛİ[ÜXÚØYÙWØ˜[[˜Ù\È‹Üİš\›JKÙ\ÜÚ[ÛXİ]š]N›O™Jœ™XÛÜ™ÜÙ\ÜÚ[Û—ØXİ]š]H‹ÜØXİ[Û›JKXİ]š]NŠÙœ›ÛN›Î˜Ëİ\İÛY\’Y™[[™Y›Ü™Nœ[[JOO™J˜YZ[—ØXİ]š]WÜ™XÛÜ™È‹ÜÙœ›ÛN›İÎ˜ËØİ\İÛY\™Ø™Y›Ü™NœJK\ØYÙNŠÙœ›ÛN›Î˜ßJOO™J˜YZ[—İ\ØYÙWÙZ[H‹ÜÙœ›ÛN›İÎ˜ßJK\ØYÙQ]™[Î›O™Jœ™XÛÜ™İ\ØYÙWÙ]™[È‹ÜÙ]™[Î›JKYZ[•šY]ÎŠÏ[[
OO™Jœ™XÛÜ™ØYZ[—İšY]È‹ÜÜYÙN›Øİ\İÛY\˜ßJKYZ[Ø][ÙÎŠ
OO™J˜YZ[—ÜXÚØYÙWØØ][ÙÈŠKØ]™PYZ[”XÚØYÙN›O™J˜YZ[—ÜXÚØYÙWØØ][Ù×ÜØ]™H‹
KXÚØYÙSÜ[ÛœÎŠ[[
OO™J˜XØÛİ[ÜXÚØYÙWÛÜ[ÛœÈ‹Üİš\›JKšX[›O™JœXÚØYÙWİšX[‹
K\Ü˜YT][İNŠÊOO™JœXÚØYÙWİ\Ü˜YWÜ][İH‹Üİš\›ÜXÚØYÙN˜ßJKØ]™Pš[[™Ê
^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^İ˜\ˆÛ]Ù]N˜Ë\œ›Ü™O^ZY[™[˜İ[ÛœËš[›ÚÙJš\Xš[[™È‹Ø›ÙN’ŠØXİ[Ûˆ˜YZ[”Ø]™HŸK
_JNÚYŠÈO[[	‰˜Ë™\œ›ÜŠ^Û]XÏO[[İ›ÚY˜Ë™\œ›ÜÚYŠZ	‰Š
YO[[İ›ÚY™˜ÛÛ^
HO[[	‰œšœÛÛŠJ]^ÚJZY[˜ÛÛ^šœÛÛŠ
JK™\œ›ÜŸXØ]Ú
J^ß]›İÈ\œ›ÜŠµêuçµæuê5êˆ5å5å5äµäõê5åuêˆ5ç5ä5å5åuêuç5çµåŠ_\™]\›ˆßJ_Kš[[™Ôİ]\Ê
^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^Û]Ù]N›\œ›Ü˜ßO^ZY[™[˜İ[ÛœËš[›ÚÙJš\Xš[[™È‹Ø›ÙNØXİ[Ûˆ˜YZ[”İ]\ÈŸ_JNÚYŠßO[[	‰›™\œ›ÜŠ]›İÈ\œ›ÜŠµç5ä5è5æuêµçÈ5ç5éõê5åuä5å5äµäõê5åuêˆ5èuç5æuéõåŠNÜ™]\›ˆJ_KÛ\Ğ˜[[˜ÙNŠ
OOœŠØXİ[Ûˆ˜˜[[˜ÙHŸJKÛ\Óİ™\šY]Î›OœŠØXİ[Ûˆ›İ™\šY]È‹]Y\N›JKÛ\Ó[Z]›OœŠŠØXİ[Ûˆ›[Z]ŸK
JKÛ\ÔÙ[™›OœŠŠØXİ[ÛˆœÙ[™ŸK
JKÛ\Ôİ]\Î›OœŠØXİ[Ûˆœİ]\È‹Y›JKÙ][™ÜÎŠ
OOšJØXİ[ÛˆœÛ\Ô™XYŸJKØ]™TÛ\Î›OšJŠØXİ[ÛˆœÛ\ÔØ]™HŸK
JKX\ÔÙ][™ÜÎŠ
OOšJØXİ[Ûˆ›X\Ô™XYŸJKØ]™SX\ÔÙ][™ÜÎ›OšJŠØXİ[Ûˆ›X\ÔØ]™HŸK
JK\›\Ñ˜YŠ
OOšJØXİ[Ûˆ\›\Ô™XYŸJKØ]™U\›\Î›OšJŠØXİ[Ûˆ\›\ÔØ]™HŸK
JKX›\Ú\›\Î›OšJŠØXİ[Ûˆ\›\ÔX›\ÚŸK
JKX›XÕ\›\Î›OšJØXİ[ÛˆœX›XÕ\›\È‹Y›JKİ\İÛY\›O™J˜YZ[—Øİ\İÛY\—Ù]Z[È‹Üİ\Ù\›JKİ\İÛY\‘š[˜[˜ÙNŠÏL
OO™J˜YZ[—Øİ\İÛY\—Ùš[˜[˜ÙH‹Üİ\Ù\›ÛÙ™œÙ]˜ßJKØ]™Pİ\İÛY\›O™J˜YZ[—Øİ\İÛY\—ÜØ]™WÜ›Ùš[H‹
Kİ\İÛY\Xİ[ÛŠ
^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^Û]Ù]N˜Ë\œ›Ü™O^ZY[™[˜İ[ÛœËš[›ÚÙJ˜YZ[‹Xİ\İÛY\œÈ‹Ø›ÙN›JNÚYŠÈO[[	‰˜Ë™\œ›ÜŠ]›İÈZY[ŠËµç5ä5è5æuêµçÈ5ç5å5êuç5æuçH5ä5êˆ5é5èµåuç5êˆ5è5æuå5åuç5å5ç5éõåuåÈŠNÜ™]\›ˆßJ_KÜ[˜ZPÜ™Y]Š
OO™J˜YZ[—ÛÜ[˜ZWØÜ™Y]Üİ]\ÈŠKš[˜[˜ÙNŠ
OO™J˜YZ[—Ùš[˜[˜ÙWÛİ™\šY]ÈŠKš[˜[˜ÙT\š[ÙŠÙœ›ÛN›Î˜ßJOO™J˜YZ[—Ùš[˜[˜ÙWÜ\š[Ù‹ÜÙœ›ÛN›İÎ˜ßJKØ\™ÎŠ
OO™J˜XØÛİ[ØØ\™ÛY]ÙÈŠK™[[İ™PØ\™›O™J˜XØÛİ[ØØ\™Ü™[[İ™H‹ÜÚY›JKYØ\™

^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^Û]Ù]N›\œ›Ü˜ßO^ZY[™[˜İ[ÛœËš[›ÚÙJš\Xš[[™È‹Ø›ÙNØXİ[Ûˆ˜YØ\™‹ÛÛœÙ[™\œÚ[ÛˆœİÜ™KXØ\™[Û›K]ŒHŸ_JNÚYŠßO[[	‰›™\œ›ÜŠ]›İÈZY[ŠËµç5ä5è5æuêµçÈ5ç5é5êµåuåÈ5å5åuèué5êˆ5æõê5æ5æuèHŠNÜ™]\›ˆJ_K™XÛÛ˜Ú[PØ\™

^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^Û]Ù]N˜Ë\œ›Ü™O^ZY[™[˜İ[ÛœËš[›ÚÙJš\Xš[[™È‹Ø›ÙNØXİ[Ûˆœ™XÛÛ˜Ú[PØ\™‹Ù]\Y›_JNÚYŠÈO[[	‰˜Ë™\œ›ÜŠ]›İÈ\œ›ÜŠµç5ä5è5æuêµçÈ5ç5ä5çµêˆ5å5åuèué5êˆ5æõê5æ5æuèHŠNÜ™]\›ˆßJ_Kİ]NŠ
OO™J˜XØÛİ[Üİ]HŠK›Ùš[N›O™J˜XØÛİ[ÜØ]™WÜ›Ùš[H‹ÜÙ]Z[Î›JK\İŠLÏHˆŠOO™J˜YZ[—ØXØÛİ[È‹ÜÛÙ™œÙ]›Ü]Y\N˜ßJKİ]\Î›O™J˜YZ[—ØXØÛİ[Üİ]\È‹
KÚXÚÛİ]

^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^İ˜\ˆÛ]Ù]N˜Ë\œ›Ü™O^ZY[™[˜İ[ÛœËš[›ÚÙJš\Xš[[™È‹Ø›ÙN’ŠØXİ[Ûˆ˜ÚXÚÛİ]ŸK
_JNÚYŠÈO[[	‰˜Ë™\œ›ÜŠ^Û]XÏO[[İ›ÚY˜Ë™\œ›ÜÚYŠZ	‰Š
YO[[İ›ÚY™˜ÛÛ^
HO[[	‰œšœÛÛŠJ]^Û]O^ZY[˜ÛÛ^šœÛÛŠ
Nİ\[ÙŠOO[[İ›ÚY›K™\œ›ÜŠOOHœİš[™È‰‰Š[K™\œ›ÜŠ_XØ]Ú
J^ß]›İÈ\œ›ÜŠµêuæuê5åuêˆ5å5êµêuç5åuçH5ä5æuè5åH5åµçµæuçÈŠ_\™]\›ˆßJ_K™XÛÛ˜Ú[J
^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^Û]Ù]N˜Ë\œ›Ü™O^ZY[™[˜İ[ÛœËš[›ÚÙJš\Xš[[™È‹Ø›ÙNØXİ[Ûˆœ™XÛÛ˜Ú[H‹Ü™\’Y›_JNÚYŠÈO[[	‰˜Ë™\œ›ÜŠ]›İÈ\œ›ÜŠ
ÏO[[İ›ÚY˜Ë™\œ›ÜŠ_µç5ä5è5æuêµçÈ5ç5äuäõåuéÈ5êµêuç5åuçHŠNÜ™]\›ˆßJ___Y[˜İ[Ûˆ\ÊJ^İœ]Y\TÙ[XİÜ[
˜]ÛˆŠK™›Ü‘XXÚ
O›‹™\ØX›YYJ_]˜\ˆœÏ[™]ÈÙXZÓX\Ù[˜İ[ÛˆÚJ
^İ˜\ˆNÊO\œË™Ù]

JOO[[J
K›Ü[‰‰˜ÛÜÙJ
_Y[˜İ[Ûˆ™
Ê^Ü™]\›ˆŠ\Ë\™İ[Y[Ë[˜İ[ÛŠŠÙX[ÙÎ\N™Kİ]N›‹Ú[™ÙYœ‹İ\İÛY\’YšO[[[X™YYœÏHLK[š]X[[™[›H\Ù\œÈŸJ^ÔÚJ
Kš[›™\’SIÏ]ˆÛ\ÜÏH˜XØÛİ[XÙ[\ˆXY\ˆÛ\ÜÏH˜XØÛİ[XÙ[\‹ZXY[™È]Ü[ˆÛ\ÜÏH˜XØÛİ[Y^YXœ›İÈµè5æuå5åuç5å5çµåuéµêÜÜ[µè5æuå5åuç5åõêuäuåuè5åuêˆ5åuåõäuæuç5åuêÚÙ]]Ûˆ\OH˜]ÛˆˆÛ\ÜÏH˜Xİ[Û‹XÛÜÙHˆ]KXÛÜÙH\šXK[X™[Hµèuäµæuê5å¸§%OØ]ÛÚXY\]ˆÛ\ÜÏH˜XØÛİ[\ÙXİ[Û‹]XœÈˆ›ÛOHX›\İ]Ûˆ\OH˜]Ûˆˆ›ÛOHXˆˆ\šXK\Ù[XİYHYHˆ]K\[™[H\Ù\œÈµåõêuäuåuè5åuêØ]Û]Ûˆ\OH˜]Ûˆˆ›ÛOHXˆˆ\šXK\Ù[XİYH™˜[ÙHˆ]K\[™[HœXÚØYÙHµåõäuæuç5å5åuçµæõèuêˆROØ]ÛÙ]]KXXØÛİ[[Y\ÜØYÙH›ÛOHœİ]\Èˆ\šXK[]™OHœÛ]HÜÙXİ[Ûˆ]K\ÙXİ[ÛH\Ù\œÈ›Ü›H]K\ÙX\˜ÚX™[µåõæué5åuêH5ç5é5æH5êuçH5ä5åH5çµæuæuç[œ]˜[YOHœ]Y\Hˆ\OHœÙX\˜ÚˆX^[™İHŒŒÛX™[]Ûµåõæué5åuêOØ]ÛÙ›Ü›O]ˆ]K]\Ù\œÏµæ5åuèµçÈ5åõêuäuåuè5åuê¸ )Ù]]ˆÛ\ÜÏHœ›İÈ]Ûˆ\OH˜]Ûˆˆ]K\™]µå5éõåuäõçOØ]Û]Ûˆ\OH˜]Ûˆˆ]K[™^µå5äuäØ]ÛÙ]ÜÙXİ[ÛÙXİ[Ûˆ]K\ÙXİ[ÛHœXÚØYÙHˆY[]ˆ]KXYZ[‹\XÚØYÙKXØ][ÙÏÙ]ÜÙXİ[ÛÙ]‰ÎÛ]QOOœ]Y\TÙ[XİÜŠJKY
–Ù]KXXØÛİ[[Y\ÜØYÙWHŠKLOHˆ‹ÏHLÏLOHLKÏ[[[[J
OOİÉ‰ŠÏHLKÊÊËÏO[[Ê
KO[[

Kœ™[[İ™Q]™[\İ[™\Š˜ÛÜÙH‹ÊKœË™Ù]

OOOT	‰œœË™[]J
J_NÜœËœÙ]

NÛ]ÏJ
OOÔ

K˜ÛÜÙJ
_NÙ
–Ù]KXÛÜÙWHŠK›Û˜ÛXÚÏTË˜Y]™[\İ[™\Š˜ÛÜÙH‹ÊNÙ[˜İ[ÛˆÊ
^İ›Ü[Ÿ

_]œ]Y\TÙ[XİÜ[
–Ù]K\[™[HŠK™›Ü‘XXÚ
OO‘K›Û˜ÛXÚÏJ
OOİœ]Y\TÙ[XİÜ[
–Ù]K\[™[HŠK™›Ü‘XXÚ
O”‹œÙ]]šX]J˜\šXK\Ù[XİY‹İš[™ÊOOQJJJKœ]Y\TÙ[XİÜ[
–Ù]K\ÙXİ[Û—HŠK™›Ü‘XXÚ
O”‹šY[T‹™]\Ù]œÙXİ[ÛˆOOQK™]\Ù]œ[™[
KK™]\Ù]œ[™[OOHœXÚØYÙH‰‰ˆ^	‰Š]Ú
Ü›Ûİ™
–Ù]KXYZ[‹\XÚØYÙKXØ][Ù×HŠK\N™KÚ[™ÙYœŸJJ_JNÙ[˜İ[ÛˆJ
^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^Û]OJÊÙÎİ^Û]^ZY[K›\İ
JNÚYŠ]ß_HOOYÊ\™]\›Û]J‹˜XØÛİ[ß×JK™š[\ŠOˆUš\×Üİ\\\Ù\ŠNÙ
–Ù]K\™]—HŠK™\ØX›YZOOL
–Ù]K[™^HŠK™\ØX›Y^‹›[™İML
–Ù]K]\Ù\œ×HŠKš[›™\’S^‹œÛXÙJL
K›X\
O‰Ï\XÛHÛ\ÜÏH›X[˜YÙYXXØÛİ[]İ›Û™Ï‰ÊØ
›˜[Y_™[XZ[
JÉÏÜİ›Û™ÏÛX[\H˜]]È‰ÊØ
™[XZ[
JÉÏÜÛX[Ü[ˆÛ\ÜÏH˜XØÛİ[\İ]\È	ÊØ
œİ]\ÊJÉÈ‰ÊØ
YÕœİ]\×JJÈÜÜ[ˆŠÊš\×Üİ\\\Ù\ÈÛX[µèuåué5ê5¯µæuåuåµêÜÛX[ˆˆˆŠJÉÏÙ]]Ûˆ\OH˜]Ûˆˆ]KXİ\İÛY\‹[Ü[H‰ÊØ
\Ù\—ÚY
JÉÈµé5ê5æ5æH5ç5éõåuåË5èuæuèuçµå5åuä5çµéµèµæH5êµêuç5åuçOØ]Û›Ü›H]K]\Ù\H‰ÊØ
\Ù\—ÚY
JÉÈX™[µèuæ5æ5åuèOÙ[Xİ˜[YOHœİ]\È‰ÊÓØš™Xİ™[šY\ÊY
K›X\

ÓËWJOO‰ÏÜ[Ûˆ˜[YOH‰ÊÓÊÉÈˆ	ÊÊœİ]\ÏOOSÏÈœÙ[XİYˆˆŠJÈˆŠÓJÈÛÜ[ÛˆŠKš›Ú[ŠˆŠJÉÏÜÙ[XİÛX™[X™[µèuæuäuêˆ5êuæuè5åuæO[œ]˜[YOHœ™X\ÛÛˆˆ™\]Z\™YZ[›[™İHŒÈˆX^[™İHLˆXÙZÛ\Hµèuæuäuå5ç5êµæuèµåuäÈ5å5è5æuå5åuçÛX™[]Ûµêuçµåuê5èuæ5æ5åuèOØ]Û[œ]˜[YOH™\œÚ[Ûˆˆ\OHšY[ˆˆ˜[YOH‰ÊØ
™\œÚ[ÛŠJÉÈÙ›Ü›OØ\XÛO‰ÊKš›Ú[ŠˆŠ_µä5æuçÈ5ç5éõåuåõåuêˆ5ç5å5éµäµåˆ5åõêuäuåuè5åuêˆ5çµè5å5ç5ä5æuè5çH5åõêuäuåuè5åuêˆ5ç5éõåuåÈ5åuä5æuè5çH5çµåué5æuèµæuçH5äuê5êuæuçµå5åµåKÜˆ‹ÙJØÛÛZ[™\™
–Ù]K]\Ù\œ×HŠK][\Î–Ë‹‹™
–Ù]K]\Ù\œ×HŠKœ]Y\TÙ[XİÜ[
œØÛÜHˆ\XÛHŠWKİ]NßKYÙTÚ^™NŒŸJKœ]Y\TÙ[XİÜ[
–Ù]KXİ\İÛY\‹[Ü[—HŠK™›Ü‘XXÚ
O•›Û˜ÛXÚÏJ
OOJ™]\Ù]˜İ\İÛY\“Ü[ŠJKœ]Y\TÙ[XİÜ[
–Ù]K]\Ù\—HŠK™›Ü‘XXÚ
O•›ÛœİX›Z]SÏO˜Š[[[˜İ[ÛŠŠ
^ÓËœ™]™[Y˜][

K\ÊL
K^ÛÛ[Hµêuåuçµê8 )ˆİ^ÚYŠZY[Kœİ]\ÊÜİ\Ù\•™]\Ù]\Ù\‹İ™\œÚ[Û“[X™\Š™[[Y[Ë™\œÚ[Û‹˜[YJKÜİ]\Î•™[[Y[Ëœİ]\Ë˜[YKÜ™X\ÛÛ•™[[Y[Ëœ™X\ÛÛ‹˜[Y_JK]Ê\™]\›Ü^ÛÛ[Hµèuæ5æ5åuèH5å5åõêuäuåuçÈ5èµåuäõæõçËˆ5èuåuæõçÈ5æuåuçµæH5êuç5åõêuäuåuçÈ5êuä5æuè5åH5é5èµæuç5è5èµéµêˆ‹ZY[J
_XØ]Ú
J^İÉ‰Š^ÛÛ[SK›Y\ÜØYÙJ_Yš[˜[^İÉ‰š\ÊLJ__JJ_XØ]Ú
Š^İÉ‰Š^ÛÛ[T‹›Y\ÜØYÙJ__J_Y
–Ù]K\ÙX\˜ÚHŠK›ÛœİX›Z]QOOÑKœ™]™[Y˜][

KOQK\™Ù]™[[Y[Ëœ]Y\K˜[YKš[J
KLJ
_K
–Ù]K\™]—HŠK›Û˜ÛXÚÏJ
OOÚSX]›X^
ML
KJ
_K
–Ù]K[™^HŠK›Û˜ÛXÚÏJ
OOÚ
ÏMLJ
_NÙ[˜İ[ÛˆJJ^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^İ˜\ˆÎÊÏJYK˜YZ[•šY]ÊOO[[İ›ÚY•˜Ø[
K˜İ\İÛY\ˆ‹JJOO[[Ë˜Ø]Ú


OOßJKOHLÊÊËÏO[[Ê
K
–Ù]K\ÙX\˜ÚHŠKšY[HL
–Ù]K\™]—HŠKœ\™[[[Y[šY[HL
–Ù]K]\Ù\œ×HŠKš[›™\’SH]ˆ]KXİ\İÛY\‹Y]Z[Ù]ˆÛ]Y
–Ù]KXİ\İÛY\‹Y]Z[HŠK^ZY[Z
Ü›Ûİ”‹İ\İÛY\’Y‘K\N™K˜XÚÎŠ
OO×ÏO[[Ê
KOHLKÊÊË
–Ù]K\ÙX\˜ÚHŠKšY[HLK
–Ù]K\™]—HŠKœ\™[[[Y[šY[HLKJ
__JNİÉ‰›Ü[×Ï^Š
_J_\É‰Š
‹˜XØÛİ[XÙ[\‹ZXY[™ÈˆŠK^ÛÛ[[OOHœXÚØYÙHÈµåõäuæuç5åuêˆ5åuêµçµåõåuêˆµè5æuå5åuç5çµêuêµçµêuæuçH‹
‹˜XØÛİ[\ÙXİ[Û‹]XœÈŠKšY[HL
KOOHœXÚØYÙH‰‰™
–Ù]K\[™[\XÚØYÙWHŠK˜ÛXÚÊ
KÏİœÚİÊ
NœÚİÓ[Ù[

KZY[J
KI‰É‰ŠZY[JJJ_J_Y[˜İ[ÛˆY
Ü›Ûİİ]N™K\N›‹™Yœ™\Úœ‹ÚYÛ“İ]šKš\YœÏ[[\İ[˜][Û“˜[YN›HˆŸJ^İ˜\ˆKK‹ÊOU™Ù]

JOO[[J
Kš[›™\’SS]
Kœ^[Y[[ÙK
JÉÏÙXİ[ÛˆÛ\ÜÏHœ™YÚ\İ˜][ÛˆÜ[ˆÛ\ÜÏH˜XØÛİ[Y^YXœ›İÈµå5åõêuäuåuçÈ5êuç5æOÜÜ[µé5ê5æ5æH5å5åõêuäuåuçÈ5åuå5åõäuæuç5åÚ‰ÊØ
YÙKœİ]\×_ˆŠJÉÏÜ›Ü›H]K\›Ùš[OÏµé5ê5æ5æuçH5ç5æuéµæuê5êˆ5éõêuêÚÏ]ˆÛ\ÜÏH˜XØÛİ[YšY[È‰ÊĞÚ
Kœ›Ùš[JJÉÏÙ]]Ûµêuçµåuê5é5ê5æ5æuçOØ]ÛÙ›Ü›O]ˆ]KXİ\İÛY\‹\XÚØYÙ\ÏÙ]]ˆ]K\^[Y[[Y]ÙÏÙ]]ˆ]KY[][Y[ÏÙ]]ˆ]KXXØÛİ[Z\İÜOÙ]]ˆ]KXXØÛİ[X˜[[˜Ù\ÏÙ]]KXXØÛİ[[Y\ÜØYÙH›ÛOHœİ]\Èˆ\šXK[]™OHœÛ]HÜ]Ûˆ\OH˜]Ûˆˆ]KXÚXÚËXXØÛİ[µê5èµè5çÈ5èuæ5æ5åuèH5åõêuäuåuçÈ5åuêµêuç5åuçOØ]Û]Ûˆ\OH˜]Ûˆˆ]K\ÚYÛ›İ]Û\ÜÏHœÙXÛÛ™\Hµæuéµæuä5åØ]ÛÜÙXİ[Û‰ÎÛ]ÏUOœ]Y\TÙ[XİÜŠ
KXÊ–Ù]KXXØÛİ[[Y\ÜØYÙWHŠKHL[[OXÊ‹œ™YÚ\İ˜][ÛˆŠKÏJ
OOœ	‰˜ÛÛZ[œÊJNÛKœ]Y\TÙ[XİÜŠšˆŠKœİ[K˜ÜÜÕ^H™›Û\Ú^™NŒKŒÍ\™[NÛX\™Ú[‹Kœ]Y\TÙ[XİÜŠœØÛÜHˆŠKœİ[K›X\™Ú[HÛ]ÏWÚ
Ü›Ûİ˜Ê–Ù]KXİ\İÛY\‹\XÚØYÙ\×HŠKİ]N™K\N›‹™Yœ™\Úœ‹š\YœË\İ[˜][Û“˜[YN›Û“™YYØ\™Š
OOİ˜\ˆÜ™]\›Š]œ]Y\TÙ[XİÜŠ	ÖÙ]K\ÙXİ[Û‹]XH˜Ø\™È—IÊJOO[[İ›ÚY•˜ÛXÚÊ
__JKO]˜ÛÜÙ\İ
™X[ÙÈŠKÏJ
OOÜHLKÊ
KO[[

KOO[[Kœ™[[İ™Q]™[\İ[™\Š˜ÛÜÙH‹
_NÙ[˜İ[Ûˆ

^ŞK›Ü[ŸÊ
_ZYŠœÙ]
ÊKOO[[K˜Y]™[\İ[™\Š˜ÛÜÙH‹
KÊ–Ù]K\ÚYÛ›İ]HŠK›Û˜ÛXÚÏJ
OO×Ê
KJ
_KÊ–Ù]KXÚXÚËXXØÛİ[HŠK›Û˜ÛXÚÏ\‹Z
Ü›Ûİ˜Ê–Ù]K\^[Y[[Y]Ù×HŠKİ]N™K\N›‹™Yœ™\ÚœŸJK
OYK›Ü™\œÊHO[[	‰‘K›[™İ
^Û]]›İÛ™\‘Øİ[Y[˜Ü™X]Q[[Y[
œÙXİ[ÛˆŠNÕ˜Û\ÜÓ˜[YOH˜XØÛİ[[Ü™\œÈ‹š[›™\’SHÏµêµêuç5åuçµæuçH5åuåõäuæuç5åuêÚÏˆŠÙK›Ü™\œË›X\
ÏOİ˜\ˆNÜ™]\›ˆ\XÛOİ›Û™ÏˆŠØ
Ë™\İ[˜][Û—Û˜[YJJÈÜİ›Û™ÏÜ[ˆŠÙİŠ
OSË˜Ú\™ÙWØYÛÜ›İ
HO[[ÓN“ËœšXÙWØYÛÜ›İ
JÈˆ0­ÈŠØ
XJÊJJÈÜÜ[ˆŠÊËœİ]OOOHœ[™[™ÈÉÏ]Ûˆ\OH˜]Ûˆˆ]K[Ü™\H‰ÊØ
ËšY
JÉÈµäuäõæuéõêˆ5ä5æuêuåuê5êµêuç5åuçOØ]Û‰ÎˆˆŠJÈØ\XÛOˆŸJKš›Ú[ŠˆŠKÊ–Ù]KXXØÛİ[Z\İÜWHŠK˜\[™

Kœ]Y\TÙ[XİÜ[
–Ù]K[Ü™\—HŠK™›Ü‘XXÚ
ÏO“Ë›Û˜ÛXÚÏJ
OO˜Š[[[˜İ[ÛŠŠ
^ÓË™\ØX›YHLİ^Û]O^ZY[‹œ™XÛÛ˜Ú[JË™]\Ù]›Ü™\ŠNÚYŠ]Ê
J\™]\›Ù^ÛÛ[SKœZYÓKœ^[Y[[ÙOOOH\İÈµêµêuç5åuçH5å5æ5èuæ5ä5åuêuê8 %5ä5æuçÈ5ä5æuêuåuê5ç5åõæuåuäH5ä5çµæuêµæHˆµå5êµêuç5åuçH5ä5åuêuêˆµå5êµêuç5åuçH5èµäõæuæuçÈ5çµçµêµæuçÈ5ç5ä5æuêuåuê‹ZY[Š
_XØ]Ú
J^İÊ
I‰Š^ÛÛ[Hµå5êµêuç5åuçH5æ5ê5çH5ä5åuçµê‹ˆ5ä5æuçÈ5ç5äuéµèˆ5êµêuç5åuçH5è5åuèuèÈ5ç5é5è5æH5äuäõæuéõêˆ5å5èuæ5æ5åuèKˆŠ_Yš[˜[^İÊ
I‰ŠË™\ØX›YHLJ__JJ_H\É‰Š
YK™[][Y[ÊHO[[	‰”‹›[™İ
I‰˜Ê–Ù]KY[][Y[×HŠKš[œÙ\Y˜XÙ[S
˜Y\˜™YÚ[ˆ‹Ïµçµæõèuåuêˆ5ç5é5æH5æ5æuåuçÚÏˆŠÙK™[][Y[Ë›X\
Oˆ\XÛOİ›Û™ÏˆŠØ
™\İ[˜][Û—Û˜[YJJÈÜİ›Û™ÏˆŠÊœ^[Y[Û[ÙOOOH\İÈµåõäuæuç5êˆ5æ5èuæÜˆˆˆŠJÊœ^[Y[Û[ÙI‰•œ^[Y[Û[ÙHOOYKœ^[Y[[ÙOÈµä5æuè5å5åµçµæuè5å5äuçµéµäH5å5èuç5æuéõå5å5è5åuæõåõæOÜˆˆˆŠJÊœ[—ØÛÙOOO[[Èµåµæõä5åuêˆ5å5æuèuæ5åuê5æuêÈ5ä5æuçÈ5ç5å5èuæuéÈ5çµçµè5å5çµæõèuåuêˆ5åõäuæuç5å5åõäõêuåÜˆ–ÖÈš[š]X[‹µêµæõè5åuçÈ—KÈ\]H‹µèµäõæõåuçÈ—KÈœ™\ÙX\˜Ú‹µçµåõéõê5æuåuçµæH—WK›X\

ÓËWJOOİ˜\ˆ‹	‹NÜ™]\›ˆˆŠÓJÈˆ5è5åuêµê5åHŠØ
X]›X^


UÓÊÈ—Û[Z]—JHO[[ÑŒ
KJ
UÓÊÈ—İ\ÙY—JHO[[ÑŒ
KJ
	UÓÊÈ—Ü™\Ù\™Y—JHO[[ÉŒ
JJJÈˆ0­È5è5åuéµç5åHŠØ

UÓÊÈ—İ\ÙY—JHO[[ĞŒ
JÈˆ0­È5êuçµåuê5åuêˆŠØ

OUÓÊÈ—Ü™\Ù\™Y—JHO[[ÖNŒ
JÈÜˆŸJKš›Ú[ŠˆŠJJÈØ\XÛOˆŠKš›Ú[ŠˆŠJKÊ–Ù]K\›Ùš[WHŠK›ÛœİX›Z]UO˜Š[[[˜İ[ÛŠŠ
^ÚYŠœ™]™[Y˜][

KVÈœ[™[™È‹˜Xİ]™H—Kš[˜ÛY\ÊKœİ]\Ê_Kš\Ôİ\\\Ù\ŸKš\×Üİ\\\Ù\Š\™]\›Û]ÏU\™Ù]Ú\ÊËL
Nİ^Û]OSØš™Xİ™œ›ÛQ[šY\Ê›X\

ÑJOO–ÑË™[[Y[ÖÑK˜[YKš[J
WJJNÚYŠZY[‹œ›Ùš[JJK]Ê
J\™]\›Ù^ÛÛ[Hµå5é5ê5æ5æuçH5è5êuçµê5åH‹ZY[Š
_XØ]Ú
J^İÊ
I‰Š^ÛÛ[SK›Y\ÜØYÙJ_Yš[˜[^İÊ
I‰š\ÊËLJ__JK
YK›Ü™\œÊHO[[	‰‹›[™İ
Ê–Ù]KXXØÛİ[Z\İÜWHŠKš[›™\’SHµä5æuçÈ5êµêuç5åuçµæuçH5ç5å5éµäµå5äuåõêuäuåuçËÜˆŠK]
Ü›Ûİ›K™Yš^ˆ›^KXXØÛİ[‹X™[ˆµé5ê5æ5æH5å5åõêuäuåuçÈ5åuå5åõäuæuç5å‹Û”Ù[Xİ•OÕOOH˜˜[[˜Ù\È‰‰ˆZ	‰Š^Z
Ü›Ûİ˜Ê–Ù]KXXØÛİ[X˜[[˜Ù\×HŠK\N›‹š\YœßJJ_KÜ›İ\Î–ŞÚYˆœ›Ùš[H‹X™[ˆµé5ê5æ5æuçH5ä5æuêuæuæuçH‹›Ù\Î–ØÊ–Ù]K\›Ùš[WHŠW_KÚYˆœXÚØYÙH‹X™[ˆµåõäuæuç5å5åuçµæõèuåuêˆ‹›Ù\Î–ØÊ–Ù]KXİ\İÛY\‹\XÚØYÙ\×HŠW_KÚYˆ˜Ø\™È‹X™[ˆµä5çµéµèµæH5êµêuç5åuçH‹›Ù\Î–ØÊ–Ù]K\^[Y[[Y]Ù×HŠW_KÚYˆš\İÜH‹X™[ˆµå5æuèuæ5åuê5æuæuêˆ5êµêuç5åuçµæuçH‹›Ù\Î–ØÊ–Ù]KXXØÛİ[Z\İÜWHŠW_KÚYˆ˜˜[[˜Ù\È‹X™[ˆµêµêuç5åuçµæuçH5åuæuêµê5åuêˆ‹›Ù\Î–ØÊ–Ù]KY[][Y[×HŠKÊ–Ù]KXXØÛİ[X˜[[˜Ù\×HŠW_W_JKKœ]Y\TÙ[XİÜŠ–Ü›ÛO]X›\İHŠKœİ[K›X\™Ú[HœLÛ]]›İÛ™\‘Øİ[Y[˜Ü™X]Q[[Y[
™]ˆŠNÔ˜Û\ÜÓ˜[YOHœ›İÈ‹™]\Ù]˜XØÛİ[Xİ[ÛœÏHˆ‹œİ[K˜ÜÜÕ^H™Ø\Ù›^]Ü˜\››İÜ˜\ÛX\™Ú[‹]ÜœØ[YÛ‹Z][\Î˜Ù[\ˆÛ]ÏXÊ–Ù]K\›Ùš[WHŠNÔËšYH˜XØÛİ[\›Ùš[KY›Ü›HÛ]ÏXÊ–Ù]K\›Ùš[WH]ÛˆŠNÚË™]\Ù]œØ]™T›Ùš[OHˆ‹Ë˜Û\ÜÓ\İ˜Y
˜Xİ[Û‹\Ø]™HŠKËœÙ]]šX]J™›Ü›H‹ËšY
KË›Û˜ÛXÚÏUOÕœ™]™[Y˜][

KËœ™\]Y\İİX›Z]

_KË^ÛÛ[H¸§$È5êuçµåuêÛ]OXÊ–Ù]KXÚXÚËXXØÛİ[HŠNÜ™]\›ˆK˜Û\ÜÓ\İ˜Y
˜Xİ[Û‹\ÙXÛÛ™\HŠKK^ÛÛ[Hµê5èµè5åuçÈ‹Ê–Ù]K\ÚYÛ›İ]HŠKœ™[[İ™J
KÊ–Ù]KXÚXÚËXXØÛİ[HŠK˜™Y›Ü™J
K˜\[™
ËJKœİ[K›Z[’ZYÚHŒ‹œİ[K›X\™Ú[H‹ß]˜\ˆ[™]ÈÙXZÓX\İ˜\ˆÜÏ]O“X]œ›İ[™

ŒL
KÜÏ]O\[ÙˆOH›[X™\ˆ‰‰“[X™\‹š\Ñš[š]J
I‰LÙ[˜İ[ÛˆØJ
^ÚYŠP\œ˜^Kš\Ğ\œ˜^J
_›[™İL
]›İÈ\œ›ÜŠµê5êuæuçµêˆ5å5å5åuéµä5åuêˆ5çµåuäµäuç5êˆ5ç5¯L5é5ê5æuæ5æuçHŠNÛ]O[™]ÈÙ]Ü™]\›ˆ›X\
Oİ˜\ˆKÎÚYŠ[Ÿ\[Ùˆ‹šYOHœİš[™ÈŸK×–ØK^KVŒNWËW^ÌKLIË\İ
‹šY
_Kš\Ê‹šY
J]›İÈ\œ›ÜŠµçµåµå5å5å5åuéµä5å5ç5ä5êµéõæuçÈ5ä5åH5æõé5åuçŠNÙK˜Y
‹šY
NÛ]^ÚY›‹šYNÙ›ÜŠ]ÛË[Ù–ÖÈ›˜[YH‹ÌLKÈ˜Ø]YÛÜH‹LLKÈ››İ\È‹™LËLWWJ^Û]JO[–ÛJHO[[ÚNˆˆÚYŠ\[ÙˆOHœİš[™ÈŸ›[™İ˜ß	‰ˆ\š[J
J]›İÈ\œ›ÜŠµæuêH5ç5çµç5ä5êµæuä5åuê5åuéõæ5äµåuê5æuå5êµéõæuè5æuçH5ç5å5åuéµä5åŠNÜ–ÛO\š[J
_Y›ÜŠ]Ù–È˜ÛÜİ‹œZY—J^Û]ÏJÏ[–ÛJHO[[ÜÎ›OOH˜ÛÜİÛ[ŒÚYŠOOH˜ÛÜİ‰‰˜ÏOO[[
^Ü‹˜ÛÜİ[[ØÛÛ[Y_ZYŠ\ÜÊÊ_ÏŒYNJ]›İÈ\œ›ÜŠµèuæõåuçµæH5å5åuéµä5å5åõæuæuäuæuçH5ç5å5æuåuêˆ5çµèué5ê5æuçH5åõæuåuäuæuæuçH5ä5åH5ä5é5èHŠNÜ–ÛO[ÜÊÊKÌL\™]\›ÚYœ‹šY˜[YNœ‹›˜[YKØ]YÛÜNœ‹˜Ø]YÛÜKÛÜİœ‹˜ÛÜİZYœ‹œZY›İ\Îœ‹››İ\ß_J_Y[˜İ[Ûˆ˜JO^ßJ^İ˜\ˆNÛ][™]ÈÙ]V×NÙ›ÜŠ]ÈÙˆ×J^ÚYŠËšÚ[™OOH˜›ÛÚÚ[™ÈŸ‹š\ÊËšY
JXÛÛ[YNÛ‹˜Y
ËšY
NÛ]\Ëœ^[ØYßNÜ‹œ\Ú
ÚYœËšYÛİ\˜ÙNˆ˜›ÛÚÚ[™È‹˜[YN››˜[Y_µå5åµçµè5å‹Ø]YÛÜNŠ
O[\JOO[[İ›ÚYšKš[J
J_µç5ç5ä5éõæ5äµåuê5æuå‹ÛÜİœÜÊ˜ÛÜİ
I‰›˜ÛÜİŒÛ˜ÛÜİ›[ZY›œZYOO[[Û[œÜÊœZY
OÛœZYŒ›İ\Î›››İ\ßˆ‹İ]\Î›œİ]\ßµç5äuäõæuéõåŸJ_Y›ÜŠ]ÈÙˆØJK™^[œÙ\ß×JJ\‹œ\Ú
ÙJŠßKÊKÜÛİ\˜ÙNˆ›X[X[‹İ]\Îˆµå5åuéµä5å5æuäõè5æuêˆŸJJNÜ™]\›ˆŸY[˜İ[ÛˆZJJ^Û][™]ÈX\^Ü[›™YŒZYŒ›Ú™XİYŒ[œZYŒ[šÛ›İÛŒÛİ[ŒNÙ›ÜŠ]ÈÙˆ
^Û‹š\ÊË˜Ø]YÛÜJ_‹œÙ]
Ë˜Ø]YÛÜKØØ]YÛÜN˜Ë˜Ø]YÛÜK[›™YŒZYŒ›Ú™XİYŒ[œZYŒ[šÛ›İÛŒÛİ[ŒJNÛ]XË˜ÛÜİOO[[Û[›ÜÊË˜ÛÜİ
K[ÜÊËœZY
K^Ü[›™Y™O[[ÙŒZYœ›Ú™XİY“X]›X^
O[[ÙŒ
K[œZY“X]›X^

O[[ÙŒ
K\
K[šÛ›İÛ™OO[[ÌNŒÛİ[Œ_NÙ›ÜŠ]HÙˆØš™XİšÙ^\Ê
J\–ÛWJÏZÛWK‹™Ù]
Ë˜Ø]YÛÜJVÛWJÏZÛW_[]OXÏO’ŠŠßKÊKØš™Xİ™œ›ÛQ[šY\ÊÈœ[›™Y‹œZY‹œ›Ú™XİY‹[œZY—K›X\
O–ÙÖÙKÌLJJJKÏ\ÜÊJI‰™OŒ\ÏÛÜÊJN›[Ü™]\›ˆÙJŠßKJŠJKØYÙ]œÏÙN›[™[XZ[š[™ĞYÙ]œÏÊ\‹œZY
KÌL›[[›š[™Ğ˜[[˜ÙNœÏÊ\‹œ›Ú™XİY
KÌL›[Ø]YÛÜšY\Î–Ë‹‹›‹˜[Y\Ê
WK›X\
JKœÛÜ

Ë
OO˜Ë˜Ø]YÛÜK›ØØ[PÛÛ\\™J˜Ø]YÛÜKšHŠJ_J_Y[˜İ[ÛˆÚ
OHˆŠ^Û]T˜Jš][\ËœÙ][™ÜÊKQZJ‹œÙ][™ÜË˜YÙ]
KOYOÛ‹™š[\ŠO™˜Ø]YÛÜOOOYJN›‹ÏYO™OO[[Èµæ5ê5çH5è5éõäuèˆ›

KJ‹œÛÛYJO™œZYOO[[
OÉÏÛ\ÜÏH™^[œÙK]Ø\›š[™Èµêµêuç5åuçµæuçH5ä5æuè5çH5æuäõåuèµæuçH5äuåõç5éÈ5çµå5å5åµçµè5åuê‹ˆ5èuæuæõåuçµæH5å5êµêuç5åuçµæuçH5åuå5æuêµê5åuêˆ5åõç5éõæuæuçKÜ‰ÎˆˆŠJÊ‹[šÛ›İÛÉÏÛ\ÜÏH™^[œÙK]Ø\›š[™Èµåõèuê5æuçH5çµåõæuê5æuçH5ç5¯‰ÊÜ‹[šÛ›İÛŠÈˆ5å5åuéµä5åuê‹ˆ5èuæuæõåuçµæH5å5êµæõè5åuçÈ5åuå5æuêµê5å5ç5êµêuç5åuçH5åõç5éõæuæuçNÈ5êµêuç5åuçµæuçH5êuæõäuê5å5åuåµè5åH5è5èué5ê5æuçH5äuçµç5åuä5çKÜˆˆˆŠNÜ™]\›‰Ï]ˆÛ\ÜÏH™^[œÙ\Ë\YÙHÙXİ[Û]ˆÛ\ÜÏHœ›İÈµêµéõéµæuäH5åuå5åuéµä5åuêÚ]Ûˆ\OH˜]Ûˆˆ]KXYY^[œÙOŠÈ5å5åuèuèÈ5å5åuéµä5åØ]ÛÙ]Û\ÜÏH›]]Yµæõç5å5èuæõåuçµæuçH5äuêuéõç5æuçKˆ5å5åµçµè5åuêˆ5çµèuåuè5æõê5è5åuêˆ5ä5åuæ5åuçµæ5æuêÈ5ä5é5êuê5ç5å5åuèuæuèÈ5ä5åuæõç5äõç5éË5éµæuåuäÈ5åuå5åuéµä5åuêˆ5è5åuèué5åuê‹ˆ5å5æuçµè5èˆ5çµå5åµè5êˆ5ä5åuêµå5å5åuéµä5å5äµçH5æõå5åµçµè5å5åuäµçH5æõå5åuéµä5å5æuäõè5æuê‹Ü]ˆÛ\ÜÏH™^[œÙK[Y]šXÜÈ‰ÊÖÖÈµêµéõéµæuäH5å5æ5æuåuç‹‹˜YÙ]KÈµêµæõè5åuçÈ5å5åuéµä5åuêˆ5æuäõåuèˆ‹‹œ[›™YKÈµêuåuç5çH5èµäÈ5èµæõêuæuåH‹‹œZYKÈµè5åuêµê5ç5êµêuç5åuçH5ç5é5æH5å5èuæõåuçµæuçH5å5æuäõåuèµæuçH‹‹[œZYKÈµæuêµê5êˆ5êµéõéµæuäH5ç5ä5åõê5êµêuç5åuçµæuçH‹‹œ™[XZ[š[™ĞYÙ]KÈµæuêµê5êˆ5êµéõéµæuäH5ç5ä5åõê5å5êµæõè5åuçÈ‹‹œ[›š[™Ğ˜[[˜ÙWWK›X\

ÙJOO‰Ï\XÛHÛ\ÜÏH™^[œÙK[Y]šXÈ	ÊÊOO[[	‰œÈš\Ë[İ™\‹XYÙ]ˆˆŠJÉÈÜ[‰ÊÙ
ÈÜÜ[İ›Û™ÏˆŠÜÊ
JÈÜİ›Û™ÏØ\XÛOˆŠKš›Ú[ŠˆŠJÈÙ]ˆŠÛ
ÉÏÛ\ÜÏH›]]Yµå5æuêµê5å5ç5ä5åõê5êµêuç5åuçµæuçH5å5æuä5å5êµéõéµæuäH5é5åõåuêˆ5çµå5êuæõäuê5êuåuç5çKˆ5å5æuêµê5å5ç5ä5åõê5å5êµæõè5åuçÈ5çµé5åõæuêµå5äµçH5å5åuéµä5åuêˆ5çµêµåuæõè5è5åuêˆ5êuæ5ê5çH5êuåuç5çµåNÈ5ä5çH5å5êµêuç5åuçH5äµäuåuå5çµå5êµæõè5åuçË5å5åuä5è5ç5éõåÈ5äuåõêuäuåuçÈ5äuçµç5åuä5åKˆ5êµéõéµæuäH5å5èuåuæõçÈ5è5é5ê5äÈ5çµêµéõéµæuäH5å5æ5æuåuçÜÜÙXİ[ÛÙXİ[ÛÏµèuæ5æ5æuèuæ5æuéõåuêˆ5ç5é5æH5éõæ5äµåuê5æuåÚÏ‰ÊÊ‹˜Ø]YÛÜšY\Ë›[™İÉÏ]ˆÛ\ÜÏH™^[œÙK]X›K\ØÜ›Ûˆ›ÛOHœ™YÚ[Ûˆˆ\šXK[X™[HµèuæuæõåuçH5å5åuéµä5åuêˆ5ç5é5æH5éõæ5äµåuê5æuåˆXš[™^HŒX›HÛ\ÜÏH™^[œÙK]X›HXYØÛÜOH˜ÛÛµéõæ5äµåuê5æuåİØÛÜOH˜ÛÛµêµæõè5åuçÈ5æuäõåuèİØÛÜOH˜ÛÛµêuåuç5çOİØÛÜOH˜ÛÛµè5åuêµê5ç5êµêuç5åuçOİØÛÜOH˜ÛÛµå5êµéõäõçµåuêˆ5êµêuç5åuçOİİİXY›ÙO‰ÊÜ‹˜Ø]YÛÜšY\Ë›X\
O‰ÏØÛÜOHœ›İÈ‰ÊÑÊ˜Ø]YÛÜJJÊ[šÛ›İÛÈÛX[ˆŠÙ[šÛ›İÛŠÈˆ5ç5ç5ä5çµåõæuêÜÛX[ˆˆˆŠJÈİˆŠÛ
œ[›™Y
JÈİˆŠÛ
œZY
JÈİˆŠÛ
[œZY
JÉÏİ›ÙÜ™\ÜÈX^H‰ÊÊœ›Ú™XİYJJÉÈˆ˜[YOH‰ÊÙœZY
ÉÈˆ\šXK[X™[Hµêµêuç5åuçµæuçH5äuéõæ5äµåuê5æuå	ÊÑÊ˜Ø]YÛÜJJÉÈÜ›ÙÜ™\ÜÏÛX[‰ÊÊœ›Ú™XİYÓX]œ›İ[™
œZYÙœ›Ú™XİY
ŒL
JÈ‰H5çµå5èµç5åuêˆ5å5æuäõåuèµåˆµæ5ê5çH5è5éõäuèµå5èµç5åuêˆŠJÈÜÛX[İİˆŠKš›Ú[ŠˆŠJÈİ›ÙOİX›OÙ]ˆˆµä5æuçÈ5èµäõæuæuçÈ5å5åuéµä5åuêˆ5ç5å5éµäµêˆ5èuæ5æ5æuèuæ5æuéõåuê‹ÜˆŠJÉÏÜÙXİ[ÛÙXİ[Û]ˆÛ\ÜÏHœ›İÈÏµé5æuê5åuæ5å5å5åuéµä5åuêÚÏX™[Û\ÜÏH™^[œÙKYš[\ˆµèuæuè5åuçÈ5å5ê5êuæuçµå5ç5é5æH5éõæ5äµåuê5æuåÙ[Xİ]KY^[œÙKYš[\Ü[Ûˆ˜[YOHˆµæõç5å5éõæ5äµåuê5æuåuêÛÜ[Û‰ÊÜ‹˜Ø]YÛÜšY\Ë›X\
O‰ÏÜ[Ûˆ˜[YOH‰ÊÑÊ˜Ø]YÛÜJJÉÈˆ	ÊÊ˜Ø]YÛÜOOOYOÈœÙ[XİYˆˆŠJÈˆŠÑÊ˜Ø]YÛÜJJÈÛÜ[ÛˆŠKš›Ú[ŠˆŠJÉÏÜÙ[XİÛX™[Ù]]ˆÛ\ÜÏH™^[œÙK[\İ‰ÊÚK›X\
O‰Ï\XÛHÛ\ÜÏH™^[œÙK\›İÈ]ˆÛ\ÜÏHœ›İÈ]Ü[ˆÛ\ÜÏH˜˜YÙH‰ÊÑÊ˜Ø]YÛÜJJÈÜÜ[ˆŠÑÊ›˜[YJJÈÚÛX[ˆŠÑÊœÛİ\˜ÙOOOH˜›ÛÚÚ[™ÈÈµçµêµåuæˆ5å5å5åµçµè5åuêˆ0­ÈŠÙœİ]\Îˆµå5åuéµä5å5æuäõè5æuêˆŠJÉÏÜÛX[Ù]]ˆÛ\ÜÏHœ›İÈ]Ûˆ\OH˜]Ûˆˆ]KY^[œÙKYY]H‰ÊÑÊšY
JÉÈˆ]KY^[œÙK\Ûİ\˜ÙOH‰ÊÙœÛİ\˜ÙJÉÈµèµê5æuæõåØ]Û‰ÊÊœÛİ\˜ÙOOOH›X[X[ÉÏ]Ûˆ\OH˜]Ûˆˆ]KY^[œÙKY[]OH‰ÊÑÊšY
JÉÈµçµåõæuéõåØ]Û‰ÎˆˆŠJÈÙ]Ù]]µèuæõåuçH5çµêµåuæõè5çÏÙˆŠÜÊ˜ÛÜİ
JÈÙÙ]]µêuåuç5çH5èµäÈ5èµæõêuæuåOÙˆŠÊœZYOO[[Èµç5ä5æuäõåuèˆ›
œZY
JJÈÙÙ]]µè5åuêµê5ç5êµêuç5åuçOÙˆŠÊ˜ÛÜİOO[[œZYOO[[ÈµèuæõåuçH5åõèuê›
X]›X^
˜ÛÜİYœZY
JJJÈÙÙ]ÙˆŠÊ˜ÛÜİOO[[	‰™œZY™˜ÛÜİÉÏÛ\ÜÏH™^[œÙK]Ø\›š[™Èµå5êµêuç5åuçH5äµäuåuå5çµå5èuæõåuçH5å5çµêµåuæõè5çËˆ5æõäõä5æH5ç5èµäõæõçÈ5ä5êˆ5å5êµæõè5åuçËÜ‰ÎˆˆŠJÊ››İ\ÏÈ]Z[Ïİ[[X\Oµå5èµê5åuêÜİ[[X\OˆŠÑÊ››İ\ÊJÈÜÙ]Z[ÏˆˆˆŠJÈØ\XÛOˆŠKš›Ú[ŠˆŠJÈÙ]ˆŠÊK›[™İÈˆˆµä5æuçÈ5å5åuéµä5åuêˆ5äuéõæ5äµåuê5æuå5êuè5äuåõê5åÜˆŠJÈÜÙXİ[ÛÙ]ˆŸ]˜\ˆVŞÚÙ^NˆœXÙH‹X™[ˆµéõéµäH5å5æ5æuåuç‹Ü[ÛœÎ–ÖÈœ™[^Y‹µéõéµäH5ê5äµåuèˆ—KÈ˜˜[[˜ÙY‹µéõéµäH5çµä5åuåµçÈ—KÈ™[‹µæuçµæuçH5çµç5ä5æuçH5åué5èµæuç5æuçH—W_KÚÙ^Nˆ›ÙÚ[™È‹X™[ˆµèuäµè5åuçÈ5ç5æuè5å‹Ü[ÛœÎ–ÖÈ˜ÛÛY›ÜX›H‹µçµç5åuè5åuêˆ5è5åuåõæuçH5äuê5çµå5æ5åuäuå—KÈ˜›İ]\]YH‹µçµç5åuè5åuêˆ5äuåuæ5æuéÈ—KÈ›^\H‹µçµç5åuè5åuêˆ5çµé5è5éõæuçH5äuê5çµå5äµäuåuå5å—KÈœÚ[\H‹µç5æuè5å5é5êuåuæ5å5åuè5éõæuæuå—W_KÚÙ^Nˆ™š]š[™È‹X™[ˆµçµêuæˆ5è5èuæuèµå5æuåuçµæH5çµåuèµäõèÈ‹Ü[ÛœÎ–ÖÈœÚÜ‹µèµäÈÈ5êuèµåuêˆ5è5èuæuèµå5äuæuåuçH—KÈ›YY][H‹Œø $ÍH5êuèµåuêˆ5è5èuæuèµå5äuæuåuçH—KÈ›Û™È‹µèµäÈˆ5êuèµåuêˆ5è5èuæuèµå5äuæuåuçH—W_KÚÙ^Nˆš[\™\İÈ‹X™[ˆµçµå5çµèµè5æuæuçÈ5ä5åuêµæÈ‹][\NˆLÜ[ÛœÎ–ÖÈ›˜]\™H‹µæ5äuèˆ5åuè5åué5æuçH—KÈšY]ÜÚ[È‹µêµéµé5æuåuêˆ5åuéµæuç5åuçH—KÈ›ØØ[Ù›ÛÙ‹µä5åuæõç5çµéõåuçµæH5åuäuêµæH5éõé5å—KÈ˜İ[\™H‹µêµê5äuåuêˆ5åuçµéõäõêuæuçH—KÈ˜™XXÚ‹µåõåué5æuçH5åuçµè5åuåõå—KÈ›X\šÙ]È‹µêuåuåuéõæuçH5åuéõè5æuåuêˆ—W_KÚÙ^Nˆœ›ØYÈ‹X™[ˆµå5èµäõé5åuêˆ5çµèuç5åuç‹][\NˆLÜ[ÛœÎ–ÖÈœØÙ[šXÈ‹µæõäuæuêuæuçH5è5åué5æuæuçH—KÈÚ[™[™È‹µæõäuæuêuæuçH5çµé5åuêµç5æuçH—KÈœ]™Y‹µæõäuæuêuæuçH5èuç5åuç5æuçH5äuç5äuäÈ—KÈ˜]›ÚYÚYÚØ^\È‹µç5å5æuçµè5èˆ5çµæõäuæuêuæuçH5çµå5æuê5æuçH—W_KÚÙ^Nˆ˜ÛÛœİ˜Z[È‹X™[ˆµä5æuç5åuéµæuçH5åuäõê5æuêuåuêˆ‹][\NˆLÜ[ÛœÎ–ÖÈ››×ÛšYÚ‹µç5ç5ä5ê5æõæuäuå5äuç5æuç5å—KÈ™œ™\]Y[Ü™\İ‹µèµéµæuê5åuêˆ5çµè5åuåõå5êµæõåué5åuêˆ—KÈœÚÜİØ[ÜÈ‹µç5ç5ä5å5ç5æuæõåuêˆ5ä5ê5åuæõåuêˆ—KÈœÙXİ\™WÜ\šÚ[™È‹µåõè5æuå5çµä5åuäuæ5åõêˆ5ç5ä5åué5è5åuèˆ—KÈœ™\İÙ^\È‹µç5êuç5äH5æuçµæH5çµè5åuåõå5ç5ç5ä5è5èuæuèµåuêˆ—W_WNÙ[˜İ[ÛˆÜŠ
^Û]O^ßNÙ›ÜŠ]ÈÙˆŠ^Û][™]ÈÙ]
Ë›Ü[ÛœË›X\

Ø×JOO˜ÊJNÙVÜËšÙ^WO\Ë›][\Oİ™Ù][
œ™Y™\™[˜ÙWÈŠÜËšÙ^JK™š[\ŠÏO›š\ÊÊJN›š\Ê™Ù]
œ™Y™\™[˜ÙWÈŠÜËšÙ^JJOİ™Ù]
œ™Y™\™[˜ÙWÈŠÜËšÙ^JNˆˆŸ[]Tİš[™Ê™Ù]
œ™Y™\™[˜Ù\ÈŠ_ˆŠK^‹™›]X\
ÏOÛ][™]ÈÙ]
Ë›][\OÙVÜËšÙ^WN–ÙVÜËšÙ^WWJKÏ\Ë›Ü[ÛœË™š[\Š
ÙJOO›š\Ê
JK›X\

ËJOO™
NÜ™]\›ˆË›[™İÖÜË›X™[
ÈˆŠØËš›Ú[Š‹ŠWN–×_JNÛ‹š[J
I‰œ‹œ\Ú
µå5èµäõé5åuêˆ5è5åuèué5åuêˆ5äuæ5éõèuæ5åõåué5êuæNˆŠÛ‹š[J
JNÛ]O\‹š›Ú[Š˜
NÚYŠK›[™İŒ™LÊ]›İÈ\œ›ÜŠµå5äuåõæuê5åuêˆ5åuå5æ5éõèuæ5å5åõåué5êuæH5æuåõäÈ5çµåuäµäuç5æuçH5ç5¯Œ‹5êµåuåuæuçKˆ5æuêH5ç5éõéµê5ä5êˆ5å5æ5éõèuæˆŠNÜ™]\›ØÚÚXÙ\Î™Kœ™YU^›‹™Y™\™[˜Ù\Îš__Y[˜İ[Ûˆš
KŠ^Û]^‹™š[\ŠÏOˆ\Ë›][\JK›X\
ÏOˆX™[ˆŠÜË›X™[
ÉÏÙ[Xİ˜[YOHœ™Y™\™[˜ÙWÉÊÜËšÙ^JÉÈÜ[Ûˆ˜[YOHˆµç5ç5ä5å5èµäõé5åÛÜ[Û‰ÊÜË›Ü[ÛœË›X\

Û×JOO‰ÏÜ[Ûˆ˜[YOH‰ÊÛ
ÉÈˆ	ÊÊÜËšÙ^WOOO[ÈœÙ[XİYˆˆŠJÈˆŠØÊÈÛÜ[ÛˆŠKš›Ú[ŠˆŠJÈÜÙ[XİÛX™[ˆŠKš›Ú[ŠˆŠKO^‹™š[\ŠÏOœË›][\JK›X\
ÏO‰ÏšY[Ù]Û\ÜÏHœ™Y™\™[˜ÙK[Ü[ÛœÈYÙ[™‰ÊÜË›X™[
ÉÏÛYÙ[™]ˆÛ\ÜÏHœ™Y™\™[˜ÙKXÚÚXÙKYÜšY‰ÊÜË›Ü[ÛœË›X\

Û×JOO‰ÏX™[Û\ÜÏHœ™Y™\™[˜ÙKXÚÚXÙH[œ]\OH˜ÚXÚØ›Şˆ˜[YOHœ™Y™\™[˜ÙWÉÊÜËšÙ^JÉÈˆ˜[YOH‰ÊÛ
ÉÈˆ	ÊÊ
ÜËšÙ^W_×JKš[˜ÛY\Ê
OÈ˜ÚXÚÙYˆˆŠJÈÜ[ˆŠØÊÈÜÜ[ÛX™[ˆŠKš›Ú[ŠˆŠJÈÙ]ÙšY[Ù]ˆŠKš›Ú[ŠˆŠNÜ™]\›‰ÏšY[Ù]Û\ÜÏHœ[›™\‹\™Y™\™[˜Ù\ÈYÙ[™µå5èµäõé5åuêˆ5åuä5æuç5åuéµæuçOÛYÙ[™Û\ÜÏH›]]Yµä5é5êuê5ç5äuåõåuê5æõçµå5ä5é5êuê5åuæuåuêˆ5äuêµåõåuçµæH5å5èµè5æuæuçË5äuçµèuç5åuç5åuäuä5æuç5åuéµæuçKˆ5æõç5å5äuåõæuê5åuêˆ5ä5åué5éµæuåuè5ç5æuåuê‹Ü]ˆÛ\ÜÏHœ[›™\‹YÜšY‰ÊÜŠÈÙ]ˆŠÚJÉÏX™[µå5èµäõé5åuêˆ5è5åuèué5åuêˆ8 %5æ5éõèuæ5åõåué5êuæH
5ä5åué5éµæuåuè5ç5æJO^\™XH˜[YOHœ™Y™\™[˜Ù\ÈˆX^[™İHŒŒˆXÙZÛ\Hµäuéõêuåuêˆ5è5åuèué5åuêˆ5êuç5ä5çµåué5æuèµåuêˆ5äuä5é5êuê5åuæuåuêˆ5å5äuåõæuê5å‰ÊÛŠJJÉÏİ^\™XOÛX™[Û\ÜÏH›]]Yµå5äuåõæuê5åuêˆ5åuå5æ5éõèuæ5æuåuéµäµåH5æuåõäÈ5äuèuæuæõåuçH5ç5é5è5æH5ä5æuêuåuê5å5å5ê5éµåˆ5ä5æuçÈ5ç5å5åµæuçÈ5èuæuèuçµä5åuê‹5é5ê5æ5æH5êµêuç5åuçH5ä5åH5çµèuçµæõæuçH5ä5æuêuæuæuçKÜÙšY[Ù]‰ß]˜\ˆVÈ™\İ[˜][Ûˆ‹™]\È‹˜YÙ]‹˜]™[\œÈ‹œİ[H‹š[\™\İÈ‹˜ÛÛœİ˜Z[È‹œØY™]H—KZVÈ™›YÚÈ‹›ÙÚ[™È‹˜[œÜÜ‹™›ÛÙ‹˜Xİ]š]Y\È‹š[œİ\˜[˜ÙH—NÙ[˜İ[ÛˆŠJ^Ü™]\›ˆÜŠÙÙ]›O›OOHœ™Y™\™[˜Ù\ÈÙNÛ‹œ™\XÙJœ™Y™\™[˜ÙWÈ‹ˆŠWKÙ][›OÛ‹œ™\XÙJœ™Y™\™[˜ÙWÈ‹ˆŠW_×_JKœ™Y™\™[˜Ù\ßY[˜İ[Ûˆ]ŠHˆŠ^Û]O^ßKV×KHLNÙ›ÜŠ]HÙˆİš[™Ê
KœÜ]
˜
J^ÚYŠKœİ\ÕÚ]
µå5èµäõé5åuêˆ5è5åuèué5åuêˆ5äuæ5éõèuæ5åõåué5êuæNˆŠJ^Û‹œ\Ú
KœÛXÙJÊJKHLØÛÛ[Y_ZYŠŠ^Û‹œ\Ú
JNØÛÛ[Y_[]Ï^‹™š[™
OšKœİ\ÕÚ]
›X™[
ÈˆŠJNÚYŠ\Ê^ÚI‰›‹œ\Ú
JNØÛÛ[Y_[]ZKœÛXÙJË›X™[›[™İ
ÌŠKœÜ]
‹ŠKÏ\Ë›Ü[ÛœË™š[\Š
ËJOO›š[˜ÛY\Ê
JK›X\

ÜJOOœ
NÙVÜËšÙ^WO\Ë›][\OØÎ˜ÖÌ_ˆÛ][™š[\ŠOˆ\Ë›Ü[ÛœËœÛÛYJ
ËJOOšOO\
JNÙ›[™İ	‰›‹œ\Ú
Ë›X™[
ÈˆŠÙš›Ú[Š‹ŠJ_\™]\›ØÚÚXÙ\Î™Kœ™YU^›‹š›Ú[Š˜
__Y[˜İ[ÛˆZJ
^İ˜\ˆNÚYŠ]œØÚ[XU™\œÚ[ÛˆOOL_]š[œ]\[Ùˆš[œ]OH›Øš™XİŸ\œ˜^Kš\Ğ\œ˜^Jš[œ]
_]˜ÚÚXÙ\ß\[Ùˆ˜ÚÚXÙ\ÈOH›Øš™XİŸ\œ˜^Kš\Ğ\œ˜^J˜ÚÚXÙ\Ê_\[Ùˆ™œ™YU^OHœİš[™ÈŸ™œ™YU^›[™İŒ™LßP\œ˜^Kš\Ğ\œ˜^Jœ™]šY]ÙY
_œ™]šY]ÙYœÛÛYJÏOˆQš[˜ÛY\ÊÊJJ]›İÈ\œ›ÜŠµå5äµäõê5åuêˆ5å5êµæõè5åuçÈ5ä5æuè5çÈ5êµéõæuè5åuêˆŠNÛ]O^ßK^ßNÙ›ÜŠ]ÜËË[Ù–ÖÈ™^\È‹KÍKLKÈ™X\›Y\‘^\È‹ŒLKÈ›]\‘^\È‹ŒLKÈœÚÜ\‘^\È‹ÌLKÈ›Û™Ù\‘^\È‹ÌLKÈ˜]™[\œÈ‹KŒLKÈœ›ÛÛ\È‹KŒLKÈœ[“[Z]YÛÜ›İ‹KLLKÈ˜YÙ]‹YM‹LWKÈ˜YÙ]]šX][Û”İ‹LLWWJ^Û]]š[œ]Ü×NÚYŠ\[ÙˆOH›[X™\ˆŸS[X™\‹š\Ñš[š]J
_˜ß	‰ˆS[X™\‹š\Ò[YÙ\Š
J]›İÈ\œ›ÜŠµèµê5æˆ5ç5ä5êµéõæuçÈ5äuå5äµäõê5åuêˆ5å5êµæõè5åuçÎˆŠÜÊNÙVÜ×O\Y›ÜŠ]ÜË[Ù–ÖÈœİ\‹LKÈ™\\\™H‹LWJ^Û]Ï]š[œ]Ü×NÚYŠ\[ÙˆÈOHœİš[™ÈŸË›[™İ›
]›İÈ\œ›ÜŠµè5êµåuè5æH5êµæõè5åuçÈ5ç5ä5êµéõæuè5æuçHŠNÙVÜ×OXËš[J
_ZYŠKœİ\	‰ŠK×—ÍKWÌŸKWÌŸIË\İ
Kœİ\
_S[X™\‹š\Ñš[š]J]Kœ\œÙJKœİ\
J_™]È]JKœİ\
KÒTÓÔİš[™Ê
KœÛXÙJL
HOOYKœİ\
J]›İÈ\œ›ÜŠµêµä5ê5æuæˆ5ç5ä5êµéõæuçÈŠNÚYŠVÈ›[İÜ˜ŞXÛH‹˜Ø\ˆ‹œX›XÈ‹›Z^Y—Kš[˜ÛY\Êš[œ]˜[œÜÜ
_P\œ˜^Kš\Ğ\œ˜^Jš[œ]š[˜ÛY\Ê_š[œ]š[˜ÛY\ËœÛÛYJÏOˆSZš[˜ÛY\ÊÊJJ]›İÈ\œ›ÜŠµäuåõæuê5åuêˆ5êµæõè5åuçÈ5ç5ä5êµéõæuè5åuêˆŠNÙK˜[œÜÜ]š[œ]˜[œÜÜKš[˜ÛY\ÏVË‹‹›™]ÈÙ]
š[œ]š[˜ÛY\ÊWNÙ›ÜŠ]ÈÙˆŠ^Û]\Ë›Ü[ÛœË›X\

ÙJOO™
KÏJO]˜ÚÚXÙ\ÖÜËšÙ^WJHO[[ÚNœË›][\OÖ×NˆˆÚYŠË›][\J^ÚYŠP\œ˜^Kš\Ğ\œ˜^JÊ_ËœÛÛYJOˆ[š[˜ÛY\Ê
JJ]›İÈ\œ›ÜŠµå5èµäõé5å5ç5ä5êµéõæuè5åŠNÛ–ÜËšÙ^WOVË‹‹›™]ÈÙ]
ÊW_Y[Ù^ÚYŠ\[ÙˆÈOHœİš[™ÈŸÈOOHˆ‰‰ˆ[š[˜ÛY\ÊÊJ]›İÈ\œ›ÜŠµå5èµäõé5å5ç5ä5êµéõæuè5åŠNÛ–ÜËšÙ^WOXß_[]]™œ™YU^Ü™]\›ˆKœ™Y™\™[˜Ù\ÏXŠ‹ŠKÜØÚ[XU™\œÚ[ÛŒK[œ]™KÚÚXÙ\Î›‹œ™YU^œ‹™]šY]ÙY–Ë‹‹›™]ÈÙ]
œ™]šY]ÙY
W__Y[˜İ[ÛˆJ^ßKO[[
^İ˜\ˆËËÛ]]œ[›š[™Ñ˜Y^Üİ\ˆˆ‹^\ÎŒŒKX\›Y\‘^\ÎŒ]\‘^\ÎŒÚÜ\‘^\ÎŒÛ™Ù\‘^\ÎŒYÙ]ŒYÙ]]šX][Û”İŒ˜]™[\œÎŒK›ÛÛ\ÎŒK\\\™Nˆˆ‹˜[œÜÜˆ›[İÜ˜ŞXÛH‹[˜ÛY\Î“Z™Y™\™[˜Ù\Îˆˆ‹[“[Z]YÛÜ›İLKO^]ŠOO[[İ›ÚY™Kœ™Y™\™[˜Ù\ÊNÜ™]\›ˆZJÜØÚ[XU™\œÚ[ÛŒK[œ]œÙJŠŠŠßKŠK_ßJK
O[[İ›ÚY›‹š[œ]
_ßJKÜİ\ŠÏ]œİ\
HO[[ÜÎˆˆ‹^\ÎŠ]™^\ÊHO[[ÛŒŒKYÙ]ŠÏ]˜YÙ]
HO[[ØÎŒJKÚÚXÙ\ÎŠO[[İ›ÚY›‹˜ÚÚXÙ\Ê_K˜ÚÚXÙ\Ëœ™YU^Š[O[[İ›ÚY›‹™œ™YU^
HO[[ÙšK™œ™YU^™]šY]ÙYŠO[[İ›ÚY›‹œ™]šY]ÙY
_
OÑ–×J_J_]˜\ˆ›]O”İš[™ÊO[[İˆˆŠKœ™\XÙJÖÉˆ‰×KÙËOOŠÈ‰ˆˆ‰˜[\È‹ˆ‰›È‹ˆˆ‰™İÈ‹	È‰Îˆ‰œ][İÈ‹‰Èˆ‰ˆÌÎNÈŸJVÙWJNÙ[˜İ[Ûˆš

^ÚYŠP\œ˜^Kš\Ğ\œ˜^J
_›[™İL
]›İÈ\œ›ÜŠµê5êuæuçµêˆ5å5éµèµåuêˆ5ç5ä5êµéõæuè5åŠNÛ]O[™]ÈÙ]Ü™]\›ˆ›X\
Oİ˜\ˆËÚYŠ[Ÿ\[Ùˆ‹šYOHœİš[™ÈŸ[‹šY‹šY›[™İŒLKš\Ê‹šY
_\[Ùˆ‹˜Ø]YÛÜHOHœİš[™ÈŸ[‹˜Ø]YÛÜKš[J
_‹˜Ø]YÛÜK›[™İŒL
]›İÈ\œ›ÜŠµå5éµèµêˆ5çµäõæuè5æuåuêˆ5ç5ä5êµéõæuè5åŠNÚYŠK˜Y
‹šY
KVÈœÛXŞWİ\]Y‹˜]ØZ][™×Ø\›İ˜[‹˜\›İ™Y‹œ™Z™XİY—Kš[˜ÛY\Ê‹œİ]JJ]›İÈ\œ›ÜŠµçµéµäH5å5éµèµå5ç5ä5êµéõæuçÈŠNÚYŠP\œ˜^Kš\Ğ\œ˜^J‹›Ü[ÛœÊ_‹›Ü[ÛœË›[™İŒLP\œ˜^Kš\Ğ\œ˜^J
Ï[‹˜›ÛÚÚ[™ÒYÊHO[[ØÎ–×JJ]›İÈ\œ›ÜŠµä5é5êuê5åuæuåuêˆ5å5å5éµèµå5ç5ä5êµéõæuè5åuêˆŠNÛ][™]ÈÙ]O[‹›Ü[ÛœË›X\
OOİ˜\ˆÎÚYŠ[_\[ÙˆKšYOHœİš[™ÈŸ[KšYKšY›[™İŒL‹š\ÊKšY
_\[ÙˆK›X™[OHœİš[™ÈŸ[K›X™[š[J
_K›X™[›[™İL
]›İÈ\œ›ÜŠµä5é5êuê5åuêˆ5ç5ä5êµéõæuè5åŠNÜ‹˜Y
KšY
NÛ]Ï^ÚY›KšYX™[›K›X™[]Z[Î”İš[™Ê
Ï[K™]Z[ÊHO[[ÙÎˆˆŠK™XÛÛ[Y[™Y›Kœ™XÛÛ[Y[™YOOHLNÚYŠË™]Z[Ë›[™İŒYM
]›İÈ\œ›ÜŠµêµæuä5åuê5ä5ê5åuæˆ5çµäõæHŠNÚYŠKœÛİ\˜ÙU\›
^Û]O[™]ÈT“
KœÛİ\˜ÙU\›
NÚYŠVÈšˆ‹šÎˆ—Kš[˜ÛY\ÊKœ›İØÛÛ
J]›İÈ\œ›ÜŠµéõæuêuåuê5ç5ä5êµéõæuçÈŠNİËœÛİ\˜ÙU\›^Kš™YŸZYŠK™\İ[X]YÛÜİOO]›ÚY
^ÚYŠ\[ÙˆK™\İ[X]YÛÜİOH›[X™\ˆŸS[X™\‹š\Ñš[š]JK™\İ[X]YÛÜİ
_K™\İ[X]YÛÜİ
]›İÈ\œ›ÜŠµèµç5åuêˆ5ç5ä5êµéõæuè5åŠNÚYŠË™\İ[X]YÛÜİ[K™\İ[X]YÛÜİË˜ÛÜİ˜\Ú\Ï[K˜ÛÜİ˜\Ú\ß˜›ÛÚÚ[™È‹VÈ˜›ÛÚÚ[™È‹›šYÚ‹™^H‹œ\œÛÛˆ—Kš[˜ÛY\ÊË˜ÛÜİ˜\Ú\ÊJ]›İÈ\œ›ÜŠµäuèuæuèH5èµç5åuêˆ5ç5ä5êµéõæuçÈŠ_\™]\›ˆßJKÏJ[‹˜\›İ™YÜ[Û’YÊHO[[Ù–×NÚYŠP\œ˜^Kš\Ğ\œ˜^JÊ_™]ÈÙ]
ÊKœÚ^™HOO\Ë›[™İËœÛÛYJOOˆ\‹š\ÊJJJ]›İÈ\œ›ÜŠµäuåõæuê5åuêˆ5ç5ä5êµéõæuè5åuêˆŠNÚYŠ‹˜YÙ]Ú\™TİOO]›ÚY	‰›‹˜YÙ]Ú\™TİOO[[	‰Š\[Ùˆ‹˜YÙ]Ú\™TİOH›[X™\ˆŸS[X™\‹š\Ñš[š]J‹˜YÙ]Ú\™Tİ
_‹˜YÙ]Ú\™Tİ‹˜YÙ]Ú\™TİŒL
J]›İÈ\œ›ÜŠµä5åõåuåˆ5êµéõéµæuäH5ç5ä5êµéõæuçÈŠNÛ]^ÚY›‹šYØ]YÛÜN›‹˜Ø]YÛÜKš[J
Kİ]N›‹œİ]KÜ[ÛœÎšK›ÛÚÚ[™ÒYÎŠ
[‹˜›ÛÚÚ[™ÒYÊHO[[Ü–×JK›X\
OOÚYŠ\[ÙˆHOHœİš[™ÈŸK×–ÌNXKY‹W^ÌÍŸIÚK\İ
JJ]›İÈ\œ›ÜŠµçµåµå5å5å5åµçµè5å5ç5ä5êµéõæuçÈŠNÜ™]\›ˆ_JKYÙ]Ú\™TİŠ[‹˜YÙ]Ú\™Tİ
HO[[Ú›[\›İ™YÜ[Û’YÎœßNÙ›ÜŠ]HÙ–È˜Ü™X]Y]‹œ™]šY]ÙY]—JZYŠ–ÛWHOO]›ÚY
^ÚYŠ\[Ùˆ–ÛWHOHœİš[™ÈŸS[X™\‹š\Ñš[š]J]Kœ\œÙJ–ÛWJJJ]›İÈ\œ›ÜŠµêµä5ê5æuæˆ5å5éµèµå5ç5ä5êµéõæuçÈŠNÛÛWO[–ÛW_\™]\›ˆJ_Y[˜İ[ÛˆŠJ^Ü™]\›–Ë‹‹˜›ÛÚÚ[™ÔÛXŞT›ÜÜØ[ß×WKœ™]™\œÙJ
K™š[™
O›‹˜Ø]YÛÜOOOYJ_[Y[˜İ[ÛˆİŠJ^Û]S[X™\Š˜YÙ]
NÜ™]\›ˆŒ	‰ŠOO[[İ›ÚY™K˜YÙ]Ú\™Tİ
HOO[[	‰ŠOO[[İ›ÚY™K˜YÙ]Ú\™Tİ
HOO]›ÚYÓX]œ›İ[™
Š™K˜YÙ]Ú\™Tİ
KÌL›[]˜\ˆš]Oİ^Û]O[™]ÈT“

NÜ™]\›–ÈšÎˆ‹šˆ—Kš[˜ÛY\ÊKœ›İØÛÛ
OÙKš™YˆˆŸXØ]Ú
J^Ü™]\›ˆˆŸ_KÙ]O›™]È[“[X™\‘›Ü›X]
šKRS‹Üİ[Nˆ˜İ\œ™[˜ŞH‹İ\œ™[˜ŞNˆ’SÈ‹X^[][Qœ˜Xİ[Û‘YÚ]ÎŒJK™›Ü›X]

NÙ[˜İ[Ûˆš
KŠ^Û]VË‹‹›™]ÈÙ]
Ë‹‹™š[\ŠOOšKšÚ[™OOH˜›ÛÚÚ[™ÈŠK›X\
OOİ˜\ˆÎÜ™]\›Š
ÏZKœ^[ØY\JOO[[İ›ÚYœËš[J
J_µç5ç5ä5éõæ5äµåuê5æuåŸJK‹‹ŠK˜›ÛÚÚ[™ÔÛXŞT›ÜÜØ[ß×JK›X\
OOšK˜Ø]YÛÜJWJWK™š[\ŠOO›OO[[OOO[ŠNÜ™]\›‰Ï]ˆÛ\ÜÏHœÛXŞK\™]šY]ËZ[›ÈÏµä5é5êuê5åuæuåuêˆ5êuå5èuåuæõçÈ5çµéµä8 %5ç5ä5æuêuåuê5æÚÏµå5èuåuæõçÈ5æuéµæuäˆ5ä5é5êuê5åuæuåuêˆ5åuæuçµç5æuéH5èµç5äuåõæuê5åuê‹ˆ5èµäuåuê5èµç5æuå5çÈ5åuèuçµçÈ5ä5êˆ5å5ä5é5êuê5åuæuåuêˆ5å5çµéõåuäuç5åuêˆ5èµç5æuæ‹ˆ5ä5æuêuåuê5æõä5çÈ5çµä5êuê5ä5êˆ5ä5é5êuê5åuæuåuêˆ5å5çµäõæuè5æuåuêˆ5äuç5äuäËÜİ›Û™ÏµêµéõéµæuäH5å5æ5æuåuçˆ	ÊÊK˜YÙ]ŒÛÙ
K˜YÙ]
Nˆµæ5ê5çH5å5åuäµäõê8 %5æuêH5ç5èµäõæõçÈ5äuå5äµäõê5åuêˆ5å5æ5æuåuçŠJÉÏÜİ›Û™ÏÜÙ]]ˆÛ\ÜÏHœÛXŞK\™]šY]ÜÈ‰ÊÜ‹›X\
OOÛ]Ï]ŠKJNÚYŠ\Ê\™]\›‰Ï\XÛHÛ\ÜÏH˜Ø\™Ï‰ÊÓ›ŠJJÉÏÚÏÛ\ÜÏH›]]Yµæ5ê5çH5å5êµéõäuç5åH5ä5é5êuê5åuæuåuêˆ5çµå5èuåuæõçÈ5èµäuåuê5éõæ5äµåuê5æuå5åµåKÜØ\XÛO‰ÎÛ]VÈœÛXŞWİ\]Y‹˜]ØZ][™×Ø\›İ˜[—Kš[˜ÛY\ÊËœİ]JKÏ]İŠKÊNÜ™]\›‰Ï\XÛHÛ\ÜÏH˜Ø\™Ü[ˆÛ\ÜÏH˜˜YÙH‰ÊŞÜÛXŞWİ\]Yˆµçµäõæuè5æuåuêˆ5å5åµçµè5å5èµåuäõæõè5å‹]ØZ][™×Ø\›İ˜[ˆµçµçµêµæuçÈ5ç5ä5æuêuåuê5æˆ‹\›İ™Yˆµå5äuåõæuê5åuêˆ5ä5åuêuê5åH‹™Z™XİYˆµå5å5éµèµå5è5äõåõêµåŸVÜËœİ]WJÈÜÜ[ÏˆŠÓ›ŠJJÈÚÏˆŠÊË˜YÙ]Ú\™TİOO[[	‰œË˜YÙ]Ú\™TİOO]›ÚYÊÈµå5éõéµä5å5çµåuéµèµêˆˆµå5éõéµä5êˆ5éõæ5äµåuê5æuåˆŠJÓ›ŠË˜YÙ]Ú\™Tİ
JÈ‰H5çµêµéõéµæuäH5å5æ5æuåuçŠÊÈOO[[Èˆ8 %ŠÛÙ
ÊNˆˆ8 %5å5èuæõåuçH5æuåõåuêuäH5ç5ä5åõê5å5äµäõê5êˆ5å5êµéõéµæuäHŠNˆµåõç5åuéõêˆ5å5êµéõéµæuäH5ç5éõæ5äµåuê5æuå5æ5ê5çH5å5åuéµèµåŠJÉÏÜ›Ü›H]K\ÛXŞK\™]šY]ÏH‰ÊÓ›ŠËšY
JÉÈ‰ÊÜË›Ü[ÛœË›X\
O‰ÏX™[Û\ÜÏHœÛXŞK[Ü[Ûˆ[œ]\OH˜ÚXÚØ›Şˆ˜[YOH›Ü[Ûˆˆ˜[YOH‰ÊÓ›ŠšY
JÉÈˆ	ÊÊ
Ùœ™XÛÛ[Y[™YŠË˜\›İ™YÜ[Û’Yß×JKš[˜ÛY\ÊšY
JOÈ˜ÚXÚÙYˆˆŠJÊÈˆˆ™\ØX›YŠJÈÜ[İ›Û™ÏˆŠÓ›Š›X™[
JÈÜİ›Û™ÏˆŠÊœ™XÛÛ[Y[™YÉÏÜ[ˆÛ\ÜÏH˜˜YÙHµå5èuåuæõçÈ5çµçµç5æuéOÜÜ[‰ÎˆˆŠJÈÜ[ˆŠÓ›Š™]Z[ÊJÈÜÜ[ˆŠÊ™\İ[X]YÛÜİOO]›ÚYÈÜ[µèµç5åuêˆ5çµêuåuèµê5êˆŠÛÙ
™\İ[X]YÛÜİ
JÈˆŠŞØ›ÛÚÚ[™Îˆµç5å5åµçµè5å‹šYÚˆµç5ç5æuç5å‹^Nˆµç5æuåuçH‹\œÛÛˆµç5ä5äõçHŸVÙ˜ÛÜİ˜\Ú\ß˜›ÛÚÚ[™È—JÈÜÜ[ˆˆˆŠJÊš
œÛİ\˜ÙU\›
OÉÏH™YH‰ÊÓ›Šš
œÛİ\˜ÙU\›
JJÉÈˆ\™Ù]H—Ø›[šÈˆ™[H››ÛÜ[™\ˆ›Ü™Y™\œ™\ˆµäuäõæuéõêˆ5å5çµéõåuêØO‰ÎˆˆŠJÈÜÜ[ÛX™[ˆŠKš›Ú[ŠˆŠJÊ	‰œË›Ü[ÛœË›[™İÉÏ]ˆÛ\ÜÏHœ›İÈ]Ûˆ\OHœİX›Z]µä5êuê5ä5êˆ5å5ä5é5êuê5åuæuåuêˆ5êuèuæuçµè5êµæOØ]Û]Ûˆ\OH˜]Ûˆˆ]K\™Z™Xİ\ÛXŞOH‰ÊÓ›ŠËšY
JÉÈˆÛ\ÜÏH™[™Ù\ˆµäõåõå5å5éµèµåØ]ÛÙ]‰ÎˆˆŠJÉÏ]K\ÛXŞKY™YY˜XÚÈ›ÛOHœİ]\Èˆ\šXK[]™OHœÛ]HÜÙ›Ü›OØ\XÛO‰ßJKš›Ú[ŠˆŠJÈÙ]ˆŸ]˜\ˆÏ^ØYÙ]˜\Ú\Î–ÖÈ˜›ÛÚÚ[™È‹µç5æõç5å5å5åµçµè5å—KÈ›šYÚ‹µç5ç5æuç5å—KÈ™^H‹µç5æuåuçH—KÈœ\œÛÛˆ‹µç5ä5äõçH—WKØ[˜Ù[][Û–ÖÈˆ‹µç5ä5å5åuäµäõê—KÈ™œ™YWÜ™\]Z\™Y‹µäuæuæ5åuç5ç5ç5ä5èµç5åuêˆ8 %5åõåuäuå—KÈ™›^X›WÜ™\]Z\™Y‹µä5é5êuê5åuêˆ5äuæuæ5åuç5äµçµæuêuå8 %5åõåuäuå—KÈ™›^X›WÜ™Y™\œ™Y‹µèµäõæué5åuêˆ5ç5äuæuæ5åuç5äµçµæuêH—WK›ÛÛU\N–ÖÈˆ‹µç5ä5å5åuäµäõê—KÈœÚ[™ÛH‹µåõäõê5ç5æuåõæuäÈ—KÈ™İX›H‹µåõäõê5åµåuäµæH—KÈœİZ]H‹µèuåuåuæuæ5å—WKœ™XZÙ˜\İ–ÖÈˆ‹µç5ä5å5åuäµäõê—KÈœ™\]Z\™Y‹µåõåuäuå5ç5æõç5åuç—KÈœ™Y™\œ™Y‹µèµäõæué5åuêˆ5ç5æõç5åuç—KÈ››İÛ™YYY‹µä5æuçÈ5éµåuê5æˆ—WKİÙ\™YšZÙN–ÖÈˆ‹µç5ä5å5åuäµäõê—KÈœ™\]Z\™Y‹µä5åué5è5åuèˆ5çµåuè5çµæˆ8 %5åõåuäuå—KÈœ™Y™\œ™Y‹µèµäõæué5åuêˆ5ç5ä5åué5è5åuèˆ5çµåuè5çµæˆ—WKXÚİ\–ÖÈˆ‹µç5ä5å5åuäµäõê—KÈœ™\]Z\™Y‹µä5æuèuåuèÈ5çµå5çµç5åuçÈ8 %5åõåuäuå—KÈœ™Y™\œ™Y‹µèµäõæué5åuêˆ5ç5ä5æuèuåuèÈ—W_KZ^ÛX^YÙ]›[YÙ]˜\Ú\Îˆ˜›ÛÚÚ[™È‹Ø[˜Ù[][Ûˆˆ‹]T[\Îˆˆ‹›ÛÛU\Nˆˆ‹İY\İÎ›[œ™XZÙ˜\İˆˆ‹İÙ\™YšZÙNˆˆ‹šZÙS[Ù[ˆˆ‹X^ÙX]ZYÚÛN›[˜YÙØYÙRÙÎ›[X^ÛÛ›™Xİ[ÛœÎ›[XÚİ\ˆˆ‹™\]Z\™Y›İ\Îˆˆ‹™Y™\œ™Y›İ\Îˆˆ‹œ™YU^ˆˆŸNÙ[˜İ[ÛˆÊ
^Û]OVÖÈ˜Ø[˜Ù[][Ûˆ‹µçµäõæuè5æuåuêˆ5äuæuæ5åuç‹œÙ[Xİ—KÈ™]T[\È‹µçµäµäuç5åuêˆ5êµä5ê5æuæõæuçK5æuçµæH5êuäuåuèˆ5åuåõäµæuçH‹^\™XH—WNÜ™]\›‹õçµç5åuçß5ç5æuè5åË\İ

I‰™Kœ\Ú
Èœ›ÛÛU\H‹µèuåuäˆ5å5åõäõê‹œÙ[Xİ—KÈ™İY\İÈ‹µçµèué5ê5ä5åuê5åõæuçH‹›[X™\ˆ—KÈ˜œ™XZÙ˜\İ‹µä5ê5åuåõêˆ5äuåuéõê‹œÙ[Xİ—JKõä5åué5è5åuèŸ5ê5æõäKË\İ

I‰™Kœ\Ú
È›İÙ\™YšZÙH‹µä5åué5è5åuèˆ5çµåuè5çµæˆ‹œÙ[Xİ—KÈ˜šZÙS[Ù[‹µäõäµçH5çµäuåuéõêHÈ5åõç5åué5åuêˆ5çµåuêµê5åuêˆ‹^—KÈ›X^ÙX]ZYÚÛH‹µäµåuäuå5çµåuêuäH5çµê5äuæH5äuèuí5çˆ‹›[X™\ˆ—JKõæ5æuèKË\İ

I‰™Kœ\Ú
È˜˜YÙØYÙRÙÈ‹µæõäuåuäõå5è5äõê5êuêˆ5äuéõí5äˆ‹›[X™\ˆ—KÈ›X^ÛÛ›™Xİ[ÛœÈ‹µçµèué5ê5éõåuè5éõêuè5æuçH5çµê5äuæH‹›[X™\ˆ—JKõé5èµæuç5åuêŸ5èuæuåuê5êµåõäuåuê5åË\İ

I‰™Kœ\Ú
ÈœXÚİ\‹µä5æuèuåuèÈ5çµå5çµç5åuçÈ‹œÙ[Xİ—JKË‹‹™KÈœ™\]Z\™Y›İ\È‹µäõê5æuêuåuêˆ5åõåuäuå5è5åuèué5åuêˆ‹^\™XH—KÈœ™Y™\œ™Y›İ\È‹µå5èµäõé5åuêˆ8 %5ä5é5êuê5ç5å5êµé5êuê5èµç5æuå5çÈ‹^\™XH—KÈ™œ™YU^‹µæ5éõèuæ5åõåué5êuæH5åuå5è5åõæuåuêˆ5è5åuèué5åuêˆ5ç5èuåuæõçÈ‹^\™XH—WK›X\

Û‹‹WJOOŠÚÙ^N›‹X™[œ‹\NšKÜ[ÛœÎ›ÖÛ—_JJ_Y[˜İ[ÛˆÙ

^İ˜\ˆÚYŠ]\[ÙˆOH›Øš™XİŸ\œ˜^Kš\Ğ\œ˜^J
_\[Ùˆ˜Ø]YÛÜHOHœİš[™ÈŸ]˜Ø]YÛÜKš[J
_˜Ø]YÛÜKš[J
K›[™İŒL
]›İÈ\œ›ÜŠµæuêH5ç5å5åµæuçÈ5éõæ5äµåuê5æuå5èµäÈL5êµåuåuæuçHŠNÛ]O^ØØ]YÛÜN˜Ø]YÛÜKš[J
_NÙ›ÜŠ]Ü‹W[ÙˆØš™Xİ™[šY\ÊZ
J^Û]ÏJ]Ü—JHO[[ÛšNÚYŠOOO[[
^ÚYŠÏOOHˆ‰‰ŠÏ[[
KÈOO[[	‰Š\[ÙˆÈOH›[X™\ˆŸS[X™\‹š\Ñš[š]JÊ_Ï
J]›İÈ\œ›ÜŠµèµê5æˆ5çµèué5ê5æH5ç5ä5êµéõæuçÈ5äuçµäõæuè5æuåuêˆŠNÚYŠÈ™İY\İÈ‹›X^ÛÛ›™Xİ[ÛœÈ—Kš[˜ÛY\ÊŠI‰œÈOO[[	‰ˆS[X™\‹š\Ò[YÙ\ŠÊJ]›İÈ\œ›ÜŠµçµèué5ê5ä5åuê5åõæuçH5åuéõåuè5éõêuè5æuçH5åõæuæuäH5ç5å5æuåuêˆ5êuç5çHŠNÚYŠOOH™İY\İÈ‰‰œÏOOL
]›İÈ\œ›ÜŠµçµèué5ê5ä5åuê5åõæuçH5åõæuæuäH5ç5å5æuåuêˆ5åõæuåuäuæHŠ_Y[Ù^ÚYŠ\[ÙˆÈOHœİš[™ÈŸË›[™İŒYM
]›İÈ\œ›ÜŠµæ5éõèuæ5å5çµäõæuè5æuåuêˆ5ä5æuè5åH5êµéõæuçÈŠNÚYŠÏ\Ëš[J
KÖÜ—I‰ˆ[ÖÜ—KœÛÛYJ
ÛJOO›OO\ÊJ]›İÈ\œ›ÜŠµäuåõæuê5å5ç5ä5êµéõæuè5å5äuçµäõæuè5æuåuêˆŠ_YVÜ—O\ßZYŠ\]Y]OO]›ÚY
^ÚYŠ\[Ùˆ\]Y]OHœİš[™ÈŸS[X™\‹š\Ñš[š]J]Kœ\œÙJ\]Y]
JJ]›İÈ\œ›ÜŠµêµä5ê5æuæˆ5çµäõæuè5æuåuêˆ5ç5ä5êµéõæuçÈŠNÙK\]Y]]\]Y]\™]\›ˆ_Y[˜İ[ÛˆZ

^ÚYŠP\œ˜^Kš\Ğ\œ˜^J
_›[™İŒŒ
]›İÈ\œ›ÜŠµê5êuæuçµêˆ5çµäõæuè5æuåuêˆ5ç5ä5êµéõæuè5åŠNÛ]O[™]ÈÙ]Ü™]\›ˆ›X\
OÛ]\Ù
ŠKO\‹˜Ø]YÛÜKÓİÙ\Ø\ÙJ
NÚYŠKš\ÊJJ]›İÈ\œ›ÜŠµçµäõæuè5æuåuêˆ5æõé5åuç5å5ç5ä5åuêµå5éõæ5äµåuê5æuåŠNÜ™]\›ˆK˜Y
JKŸJ_]˜\ˆO]O”İš[™ÊO[[İˆˆŠKœ™\XÙJÖÉˆ‰×KÙËOOŠÈ‰ˆˆ‰˜[\È‹ˆ‰›È‹ˆˆ‰™İÈ‹	È‰Îˆ‰œ][İÈ‹‰Èˆ‰ˆÌÎNÈŸJVÙWJNÙ[˜İ[Ûˆš
K‹^ØYÙ]ŒJ^Û]OVË‹‹›™]ÈÙ]
Ë‹‹™š[\ŠO›šÚ[™OOH˜›ÛÚÚ[™ÈŠK›X\
Oİ˜\ˆÎÜ™]\›Š
Ï[œ^[ØY\JOO[[İ›ÚY˜Ëš[J
J_µç5ç5ä5éõæ5äµåuê5æuåŸJK‹‹™K›X\
O›˜Ø]YÛÜJWJWKœÛÜ

ÊOO››ØØ[PÛÛ\\™JËšHŠJKÏ[OO[[ÚNšK™š[\ŠO›OO[ŠNÜ™]\›ˆš
‹ŠJÉÏ]Z[ÈÛ\ÜÏHœÛXŞK\™Y™\™[˜Ù\Èİ[[X\Oµå5è5åõæuåuêˆ5åuå5èµäõé5åuêˆ5ê5ä5êuåuè5æuåuêˆ5ç5éõæ5äµåuê5æuåuêÜİ[[X\O]ˆÛ\ÜÏH˜Ø\™ÈÛXŞKXØ\™È‰ÊÜË›X\
OÛ]ÏYK™š[™
Oœ˜Ø]YÛÜOOO[
KXÏÙÊ
K™š[\ŠO˜ÖÜšÙ^WHOO[[	‰˜ÖÜšÙ^WHOOHˆ‰‰œšÙ^HOOH˜YÙ]˜\Ú\ÈŠK›X\
Oİ˜\ˆKËËNÛ]JÏJÏJO\›Ü[ÛœÊOO[[İ›ÚY›K™š[™

××JOO—ÏOOXÖÜšÙ^WJJOO[[İ›ÚYÖÌWJHO[[ÙÎ˜ÖÜšÙ^WNÜ™]\›ˆšÙ^OOOH›X^YÙ]‰‰Š[™]È[“[X™\‘›Ü›X]
šKRS‹Üİ[Nˆ˜İ\œ™[˜ŞH‹İ\œ™[˜ŞNˆ’SÈŸJK™›Ü›X]

JÈˆŠÊ
O[Ë˜YÙ]˜\Ú\Ë™š[™

××JOO—ÏOOXË˜YÙ]˜\Ú\ÊJOO[[İ›ÚYVÌWJJK]ˆŠÜ›X™[
ÈÙˆŠÔJ
JÈÙÙ]ˆŸJKš›Ú[ŠˆŠNˆˆÜ™]\›‰Ï\XÛHÛ\ÜÏH˜Ø\™ÛXŞKXØ\™Ü[ˆÛ\ÜÏH˜˜YÙH‰ÊÊÏÈµå5è5åõæuåuêˆ5ê5ä5êuåuè5æuåuêˆˆµç5ç5ä5å5è5åõæuåuêˆ5ê5ä5êuåuè5æuåuêˆŠJÈÜÜ[ÏˆŠÔJ
JÈÚÏˆŠÊÉÏÛ\ÜÏHœ™XÛÜ™[Y]H‰ÊÙ
ÈÙˆ‰ÏÛ\ÜÏH›]]Yµä5é5êuê5ç5å5åuèuæuèÈ5å5è5åõæuåuêˆ5ê5ä5êuåuè5æuåuêˆ5êuæuèµåµê5åH5ç5èuåuæõçÈ5ç5çµéµåuä5ä5é5êuê5åuæuåuê‹Ü‰ÊJÉÏ]Ûˆ\OH˜]Ûˆˆ]K\ÛXŞKXØ]YÛÜOH‰ÊÔJ
JÉÈ‰ÊÊÏÈµèµê5æuæõêˆ5å5è5åõæuåuêˆˆµå5åuèuèÈ5å5è5åõæuåuêˆŠJÈØ]ÛØ\XÛOˆŸJKš›Ú[ŠˆŠJÈÙ]ˆŠÊË›[™İÈˆˆµç5åõéH5èµç5í5çµäõæuè5æuåuêˆ5åõäõêuå5í5æõäõæH5ç5å5äµäõæuê5êµè5ä5æuçH5ç5éõæ5äµåuê5æuå5å5ê5ä5êuåuè5åÜˆŠJÈÙ]Z[ÏˆŸY[˜İ[Ûˆ
J^Û]RŠŠßKZ
KJNÜ™]\›ˆÊ
K›X\
OˆX™[ˆŠÜ‹›X™[
Ê‹\OOOHœÙ[XİÉÏÙ[Xİ˜[YOH‰ÊÜ‹šÙ^JÉÈ‰ÊÜ‹›Ü[ÛœË›X\

ÚK×JOO‰ÏÜ[Ûˆ˜[YOH‰ÊÚJÉÈˆ	ÊÊ–Ü‹šÙ^WOOOZOÈœÙ[XİYˆˆŠJÈˆŠÜÊÈÛÜ[ÛˆŠKš›Ú[ŠˆŠJÈÜÙ[Xİˆœ‹\OOOH^\™XHÉÏ^\™XH˜[YOH‰ÊÜ‹šÙ^JÉÈ‰ÊÔJ–Ü‹šÙ^WJJÈİ^\™XOˆ‰Ï[œ]˜[YOH‰ÊÜ‹šÙ^JÉÈˆ\OH‰ÊÜ‹\JÉÈˆ˜[YOH‰ÊÔJ–Ü‹šÙ^WJJÉÈˆ	ÊÊ‹\OOOH›[X™\ˆÉÛZ[HŒˆİ\H˜[H‰ÎˆˆŠJÈˆŠJÈÛX™[ˆŠKš›Ú[ŠˆŠ_]˜\ˆİ^Ø›ÛÚÚ[™Îˆ˜›ÛÚÚ[™ÜÈ‹İÜˆœİÜÈ‹XÙNˆœXÙ\È‹ÙX\ˆ™ÙX\ˆ‹\ÚÎˆ\ÚÜÈŸK	^Ø›ÛÚÚ[™Î–È›˜[YH‹\H‹œİ]\È‹œİ\Y\ˆ‹˜ÛÜİ‹œZY‹œ™Yˆ‹\›‹››İ\È—KİÜ–È™^H‹œXÙH‹šÚ[™‹\›‹››İ\È‹›]‹›™È—KXÙN–È›˜[YH‹\H‹˜\™XH‹\›‹››İ\È—KÙX\–È›˜[YH‹˜Ø]YÛÜH‹œİ]\È‹\›‹™İZYH‹››İ\È—K\ÚÎ–È]H‹™Û™H‹˜Ø]YÛÜH—_NÙ[˜İ[Ûˆ˜JJ^İ˜\ˆKÎÚYŠIİ_Y_\[ÙˆHOH›Øš™XİŸ\œ˜^Kš\Ğ\œ˜^JJJ]›İÈ\œ›ÜŠ’[˜[Y][HŠNÛ]^ßNÙ›ÜŠ]ÙˆOOH\ÚÈÖÈ™YQ]H—NOOH˜›ÛÚÚ[™ÈÖÈ˜Xİ[Û‘YQ]H‹˜ÚXÚÒ[‘]H‹˜ÚXÚÓİ]]H—N–×J^Û]ÏYVÛNÚYŠJÏOO]›ÚYÏOOHˆŠJ^ÚYŠ^™JÊJ]›İÈ\œ›ÜŠµêµä5ê5æuæˆ5ç5ä5êµéõæuçÈŠNÛ–ÛOXß_ZYŠ‹˜ÚXÚÒ[‘]I‰›‹˜ÚXÚÓİ]]I‰›‹˜ÚXÚÓİ]]O[‹˜ÚXÚÒ[‘]J]›İÈ\œ›ÜŠµêµä5ê5æuæˆ5æuéµæuä5å5åõæuæuäH5ç5å5æuåuêˆ5ä5åõê5æH5å5æõè5æuèuåŠNÚYŠÈ˜›ÛÚÚ[™È‹\ÚÈ—Kš[˜ÛY\Ê
J^ÚYŠKÛÜšÙ›İÔİ]\ÈOO]›ÚY
^ÚYŠSœÛÛYJ
ÛJOO›OOYKÛÜšÙ›İÔİ]\ÊJ]›İÈ\œ›ÜŠ’[˜[YÛÜšÙ›İÈİ]\ÈŠNÛ‹ÛÜšÙ›İÔİ]\ÏYKÛÜšÙ›İÔİ]\ßZYŠKÛÜšÙ›İÕ\]Y]OO]›ÚY
^ÚYŠ\[ÙˆKÛÜšÙ›İÕ\]Y]OHœİš[™ÈŸS[X™\‹š\Ñš[š]J]Kœ\œÙJKÛÜšÙ›İÕ\]Y]
JJ]›İÈ\œ›ÜŠ’[˜[YÛÜšÙ›İÈ[Y\İ[\ŠNÛ‹ÛÜšÙ›İÕ\]Y]YKÛÜšÙ›İÕ\]Y]ZYŠKÛÜšÙ›İÕ\]YHOO]›ÚY
^ÚYŠVÈ\Ù\ˆ‹˜YÙ[—Kš[˜ÛY\ÊKÛÜšÙ›İÕ\]YJJ]›İÈ\œ›ÜŠ’[˜[YÛÜšÙ›İÈXİÜˆŠNÛ‹ÛÜšÙ›İÕ\]YOYKÛÜšÙ›İÕ\]Y__Y›ÜŠ]Ùˆ	İJ^Û]ÏYVÛNÚYŠJOOH\ÚÈ‰‰›OOH˜Ø]YÛÜH‰‰˜ÏOO]›ÚY
I‰ˆJOOH›]ŸOOH›™ÈŠJ^ÚYŠOOH™Û™HŠ^ÚYŠÈOO]›ÚY	‰\[ÙˆÈOH˜›ÛÛX[ˆŠ]›İÈ\œ›ÜŠ’[˜[Y\ÚÈİ]HŠNÛ–ÛOXÈO[[ØÎˆLNØÛÛ[Y_ZYŠÈ™^H‹˜ÛÜİ‹œZY—Kš[˜ÛY\Ê
J^ÚYŠÏOO[[	‰›OOH™^HŠ^Û–ÛO[[ØÛÛ[Y_[]XÈO[[ØÎ›OOH™^HÌNŒÚYŠ\[ÙˆOH›[X™\ˆŸS[X™\‹š\Ñš[š]J
_OOH™^H‰‰ŠS[X™\‹š\Ò[YÙ\Š
__ŒÍJJ]›İÈ\œ›ÜŠ’[˜[Y[X™\ˆŠNÛ–ÛOYØÛÛ[Y_ZYŠÈOO]›ÚY	‰\[ÙˆÈOHœİš[™ÈŠ]›İÈ\œ›ÜŠ’[˜[Y^ŠNÚYŠ–ÛOXÈO[[ØÎˆˆ‹–ÛK›[™İŒYM
]›İÈ\œ›ÜŠ•^ÛÈÛ™ÈŠNÚYŠÈ\›‹™İZYH—Kš[˜ÛY\Ê
I‰›–ÛJ^Û]İ^Ù[™]ÈT“
–ÛJ_XØ]Ú

^İ›İÈ\œ›ÜŠ’[˜[YT“Š_ZYŠVÈšÎˆ‹šˆ—Kš[˜ÛY\Êœ›İØÛÛ
J]›İÈ\œ›ÜŠ•[œØY™HT“Š___ZYŠOOHœİÜŠ^Û]JOYK›]
HO[[ÚNˆˆ‹ÏJÏYK›™ÊHO[[ÜÎˆˆÚYŠ\[ÙˆOHœİš[™ÈŸ\[ÙˆÈOHœİš[™ÈŠ]›İÈ\œ›ÜŠ’[˜[YÛÛÜ™[˜]\ÈŠNÚYŠš[J
_Ëš[J
J^ÚYŠ[š[J
_XËš[J
_S[X™\‹š\Ñš[š]J[X™\Š
J_S[X™\‹š\Ñš[š]J[X™\ŠÊJ_X]˜XœÊ[X™\Š
JOLX]˜XœÊ[X™\ŠÊJOŒN
]›İÈ\œ›ÜŠµéõåuä5åuê5äõæuè5æ5åuêˆ5ç5ä5êµéõæuè5åuêˆŠNÛ‹›][š[J
K‹›™ÏXËš[J
__[]]OOHœİÜÛ‹œXÙNOOH\ÚÈÛ‹]N›‹›˜[YNÚYŠJˆO[[	‰œ‹š[J
JJ]›İÈ\œ›ÜŠ“Z\ÜÚ[™È][H]HŠNÜ™]\›ˆŸY[˜İ[ÛˆÚJ
^ÚYŠ]\[ÙˆOH›Øš™XİŸ\œ˜^Kš\Ğ\œ˜^J
J]›İÈ\œ›ÜŠ’[˜[YÙ][™ÜÈŠNÛ]Üİ\™OHˆ‹^\Î›LŒKYÙ]œLİ\œ™[˜ŞNšOH’SÈŸO]ÚYŠÊÙJŠßK
KÜİ\™K^\Î›ŸJJK\[ÙˆHOHœİš[™ÈŸI‰ˆK×—ÍKWÌŸKWÌŸIË\İ
J_S[X™\‹š\Ò[YÙ\ŠŠ__ŒÍ_\[ÙˆˆOH›[X™\ˆŸS[X™\‹š\Ñš[š]JŠ_HOOH’SÈŠ]›İÈ\œ›ÜŠ’[˜[YÙ][™ÜÈŠNÚYŠ[YV›Û™HOO]›ÚY	‰ˆYØJ[YV›Û™JJ]›İÈ\œ›ÜŠµä5åµåuê5åµçµçÈ5ç5ä5êµéõæuçÈŠNÜ™]\›ˆŠŠŠŠŠŠŠŠÜİ\™K^\Î›‹YÙ]œ‹İ\œ™[˜ŞNš_KØš™Xİš\ÓİÛŠš\İ]\ÈŠOŞİš\İ]\Îš\İ]\ßNßJKØš™Xİš\ÓİÛŠœ™]\›‘]HŠOŞÜ™]\›‘]Nœ™]\›‘]_NßJK[YV›Û™HOO]›ÚYŞİ[YV›Û™N[YV›Û™_NßJKœ™XY[™\ÜÔ™\]Z\™[Y[ÈOO]›ÚYŞÜ™XY[™\ÜÔ™\]Z\™[Y[Î•ÜŠœ™XY[™\ÜÔ™\]Z\™[Y[Ê_NßJK™^[œÙ\ÈOO]›ÚYŞÙ^[œÙ\Î“ØJ™^[œÙ\Ê_NßJKœ[›š[™Ñ˜YOO]›ÚYŞÜ[›š[™Ñ˜YZJÙJŠßKœ[›š[™Ñ˜Y
KÚ[œ]œÙJŠßKœ[›š[™Ñ˜Yš[œ]
KÜİ\™K^\Î›‹YÙ]œŸJ_JJ_NßJK˜›ÛÚÚ[™ÔÛXÚY\ÈOO]›ÚYŞØ›ÛÚÚ[™ÔÛXÚY\Î•Z
˜›ÛÚÚ[™ÔÛXÚY\Ê_NßJK˜›ÛÚÚ[™ÔÛXŞT›ÜÜØ[ÈOO]›ÚYŞØ›ÛÚÚ[™ÔÛXŞT›ÜÜØ[Î“š
˜›ÛÚÚ[™ÔÛXŞT›ÜÜØ[Ê_NßJ_Y[˜İ[Ûˆ

^İ˜\ˆÚYŠ\[ÙˆOHœİš[™ÈŸ›[™İYMŠ]›İÈ\œ›ÜŠ˜XÚİ\ÛÈ\™ÙHŠNÛ]OR”ÓÓ‹œ\œÙJ
NÚYŠY_\[ÙˆHOH›Øš™XİŸ\œ˜^Kš\Ğ\œ˜^JJJ]›İÈ\œ›ÜŠ’[˜[Y˜XÚİ\ŠNÚYŠKœØÚ[XU™\œÚ[ÛˆOO]›ÚY	‰ˆVÌK—Kš[˜ÛY\ÊKœØÚ[XU™\œÚ[ÛŠJ]›İÈ\œ›ÜŠ•[œİ\ÜY™\œÚ[ÛˆŠNÛ]JYK™]JHO[[Û™KPÚJ‹œÙ][™ÜÊKOV×NÚYŠKœØÚ[XU™\œÚ[ÛOOLŠ^ÚYŠP\œ˜^Kš\Ğ\œ˜^J‹š][\ÊJ]›İÈ\œ›ÜŠ’[˜[Y][\ÈŠNÚO[‹š][\Ë›X\
ÏOİ˜\ˆÜ™]\›ÚÚ[™˜ËšÚ[™YØXŞWÚYŠXË›YØXŞWÚY
HO[[Ù˜ËšY^[ØY›˜JËšÚ[™Ëœ^[ØY
__J_Y[ÙH›ÜŠ]ØË[ÙˆØš™Xİ™[šY\ÊİŠJ^ÚYŠP\œ˜^Kš\Ğ\œ˜^J–ÙJJ]›İÈ\œ›ÜŠ“Z\ÜÚ[™ÈÛÛXİ[ÛˆŠNÚKœ\Ú
‹‹›–ÙK›X\
OŠÚÚ[™˜ËYØXŞWÚYœO[[İ›ÚYœšY^[ØY›˜JË
_JJJ_ZYŠK›[™İYLÊ]›İÈ\œ›ÜŠ•ÛÈX[H][\ÈŠNÛ]Ï[™]ÈÙ]Ù›ÜŠ]ÈÙˆJ^ÚYŠ\[ÙˆË›YØXŞWÚYOHœİš[™ÈŸXË›YØXŞWÚY›[™İË›YØXŞWÚY›[™İŒŒ
]›İÈ\œ›ÜŠ’[˜[YÛİ\˜ÙHQŠNÛ]R”ÓÓ‹œİš[™ÚYJØËšÚ[™Ë›YØXŞWÚYJNÚYŠËš\Ê
J]›İÈ\œ›ÜŠ‘\XØ]HÛİ\˜ÙHQŠNÜË˜Y

_\™]\›ÜÙ][™ÜÎœ‹][\Îš__Y[˜İ[Ûˆ
J^Û][™]ÈÙ]
›X\
Oİ˜\ˆNÜ™]\›ˆ”ÓÓ‹œİš[™ÚYJÜ‹šÚ[™
O\‹›YØXŞWÚY
HO[[ÚNœ‹šYJ_JJNÜ™]\›ØY™K™š[\ŠOˆ[‹š\Ê”ÓÓ‹œİš[™ÚYJÜ‹šÚ[™‹›YØXŞWÚYJJJKÚÚ\™K™š[\ŠO›‹š\Ê”ÓÓ‹œİš[™ÚYJÜ‹šÚ[™‹›YØXŞWÚYJJJ__Y[˜İ[Ûˆš

^Ü™]\›ˆ”ÓÓ‹œİš[™ÚYJÜØÚ[XU™\œÚ[ÛŒ‹^ÜY]›™]È]J
KÒTÓÔİš[™Ê
K]NÙ\İ[˜][ÛÛ˜[YN™\İ[˜][Û—Û˜[Y_]_ˆ‹\ĞXİ]™Nš\×ØXİ]™HOOHL_KÙ][™ÜÎœÙ][™ÜË][\Îš][\Ë›X\
OOİ˜\ˆÜ™]\›ÚY™KšYYØXŞWÚYŠYK›YØXŞWÚY
HO[[Û™KšYÚ[™™KšÚ[™^[ØY™Kœ^[ØY_J__K[Š_]˜\ˆ^Ù›YÚÎˆµæ5æuèuåuêˆ‹ÙÚ[™Îˆµç5æuè5å‹˜[œÜÜˆµêµåõäuåuê5å5åuä5åué5è5åuèˆ‹›ÛÙˆµä5åuæõç‹Xİ]š]Y\Îˆµé5èµæuç5åuæuåuêˆ‹[œİ\˜[˜ÙNˆµäuæuæ5åuåÈŸKš^Ü]Y]YYˆµäuêµåuê5ç5êµæõè5åuçÈ‹™\ÙX\˜Ú[™Îˆµçµåõéõê5åuêµæõè5åuçÈ‹™XYNˆµêµæõè5åuçÈ5çµåuæõçÈ5ç5äuäõæuéõå‹ÛÛ\]Yˆµå5êµæõè5åuçÈ5è5åuèuèÈ5ç5ä5êµê‹Ø[˜Ù[Yˆµå5å5ê5éµå5äuåuæ5ç5å‹˜Z[Yˆµå5å5ê5éµå5è5æõêuç5å‹YÙ]Ù^]\İYˆµêµéõéµæuäH5å5èuåuæõçÈ5è5åuéµç‹™YY×Ù]Z[Îˆµè5äõê5êuæuçH5é5ê5æ5æuçH5è5åuèué5æuçHŸNÙ[˜İ[ÛˆŠKŠ^ÚYŠ\[ÙˆOHœİš[™ÈŸ]š[J
_›[™İ™J]›İÈ\œ›ÜŠµèµê5æˆ5ç5ä5êµéõæuçÎˆŠÛŠNÜ™]\›ˆš[J
_Y[˜İ[ÛˆÙ
K‹‹OHLJ^ÚYŠ\[ÙˆOH›[X™\ˆŸS[X™\‹š\Ñš[š]J
__›ŸI‰ˆS[X™\‹š\Ò[YÙ\Š
J]›İÈ\œ›ÜŠµèµê5æˆ5ç5ä5êµéõæuçÎˆŠÜŠNÜ™]\›ˆY[˜İ[ÛˆİŠ
^ÚYŠ\[ÙˆOHœİš[™ÈŸK×—ÍKWÌŸKWÌŸIË\İ

_S[X™\‹š\Ñš[š]J]Kœ\œÙJ
J_™]È]J
KÒTÓÔİš[™Ê
KœÛXÙJL
HOO]
]›İÈ\œ›ÜŠµêµä5ê5æuæˆ5ç5ä5êµéõæuçÈŠNÜ™]\›ˆY[˜İ[ÛˆJ
^ÚYŠ]\[ÙˆOH›Øš™XİŸ\œ˜^Kš\Ğ\œ˜^J
J]›İÈ\œ›ÜŠµè5êµåuè5æH5êµæõè5åuçÈ5åõèuê5æuçHŠNÛ]O^Üİ\šİŠœİ\
_NÙ›ÜŠ]Û‹‹W[Ù–ÖÈ™^\È‹KLKÈ™X\›Y\‘^\È‹ŒKÈ›]\‘^\È‹ŒKÈœÚÜ\‘^\È‹ÌKÈ›Û™Ù\‘^\È‹ÌKÈ˜]™[\œÈ‹KŒKÈœ›ÛÛ\È‹KŒKÈœ[“[Z]YÛÜ›İ‹KLWJYVÛ—OXÙ
Û—K‹K‹L
NÚYŠKœÚÜ\‘^\ÏYK™^\ßK™^\ÊÙK›Û™Ù\‘^\ÏLKœ›ÛÛ\Ï™K˜]™[\œÊ]›İÈ\œ›ÜŠµäuäõåuéÈ5ä5êˆ5çµêuæˆ5å5æ5æuåuç5åuçµèué5ê5å5åõäõê5æuçHŠNÚYŠK˜YÙ]XÙ
˜YÙ]KYM‹µêµéõéµæuäHŠKK˜YÙ]]šX][Û”İXÙ
˜YÙ]]šX][Û”İLµåõê5æuäµåŠKK™\\\™O^Š™\\\™KLµçµåuéµäŠKVÈ›[İÜ˜ŞXÛH‹˜Ø\ˆ‹œX›XÈ‹›Z^Y—Kš[˜ÛY\Ê˜[œÜÜ
J]›İÈ\œ›ÜŠµä5çµéµèµæH5êµåõäuåuê5å5åõèuêŠNÚYŠK˜[œÜÜ]˜[œÜÜP\œ˜^Kš\Ğ\œ˜^Jš[˜ÛY\Ê_]š[˜ÛY\Ë›[™İš[˜ÛY\ËœÛÛYJOˆSØš™Xİš\ÓİÛŠ‹ŠJ_™]ÈÙ]
š[˜ÛY\ÊKœÚ^™HOO]š[˜ÛY\Ë›[™İ
]›İÈ\œ›ÜŠµäuåõê5çµå5è5æõç5ç5äuêµéõéµæuäHŠNÚYŠKš[˜ÛY\ÏVË‹‹š[˜ÛY\×K\[Ùˆœ™Y™\™[˜Ù\ÈOHœİš[™ÈŸœ™Y™\™[˜Ù\Ë›[™İŒ™LÊ]›İÈ\œ›ÜŠµå5èµäõé5åuêˆ5èµäÈŒ5êµåuåuæuçHŠNÜ™]\›ˆKœ™Y™\™[˜Ù\Ï]œ™Y™\™[˜Ù\Ëš[J
K_Y[˜İ[ÛˆÜÊ
^Û]Nİ^ÙO[™]ÈT“

_XØ]Ú
Š^İ›İÈ\œ›ÜŠµéõæuêuåuê5ç5ä5êµéõæuçÈŠ_[]YKšÜİ˜[YKÓİÙ\Ø\ÙJ
NÚYŠKœ›İØÛÛOOHšÎˆŸK\Ù\›˜[Y_Kœ\ÜİÛÜ™KœÜOOH›ØØ[ÜİŸ[‹š[˜ÛY\Ê‹ˆŠ_×–×—JÉË\İ
Š_‹š[˜ÛY\ÊˆŠ_×ŠØØ[[\›˜[ØØ[Üİ\İ[˜[Y
IË\İ
ŠJ]›İÈ\œ›ÜŠµéõæuêuåuê5ä5æuè5åH5ä5êµê5éµæuäuåuê5æH5çµä5åuäuæ5åÈŠNÜ™]\›ˆKš™YŸ]˜\ˆYOVÖÈ™\İ[˜][Ûˆ‹µé5ê5æ5æH5å5æuèµäÈ‹µêuçH5å5æuèµäÈ5åuå5é5èµæuç5åuêˆ5êuç5åH—KÈ™]\È‹µêµä5ê5æuæõæuçH5åuäµçµæuêuåuêˆ‹µçµåuèµäË5çµêuæˆ5åuæ5åuåuåÈ5å5êuæuè5åuæuæuçH5å5çµåuêµê—KÈ˜YÙ]‹µêµéõéµæuäH5åuêµæõåuç5å‹µå5êµéõéµæuäH5å5æõåuç5ç5åuå5éõæ5äµåuê5æuåuêˆ5å5æõç5åuç5åuêˆ5äuåH—KÈ˜]™[\œÈ‹µçµæ5æuæuç5æuçH5åuêµåõäuåuê5å‹µçµêuêµêµé5æuçK5åõäõê5æuçK5çµåuéµä5åuä5çµéµèµæH5êµåõäuåuê5å—KÈœİ[H‹µéõéµäH5åuç5æuè5å‹µéõéµäH5å5æ5æuåuç5ä5æuæõåuêˆ5å5ç5æuè5å5åuçµêuæˆ5å5è5èuæuèµå—KÈš[\™\İÈ‹µèµè5æuæuçÈ5åuçµèuç5åuç‹µçµå5ç5ê5ä5åuêˆ5åuäuä5æuç5åH5äõê5æõæuçH5ç5è5èuåuèˆ—KÈ˜ÛÛœİ˜Z[È‹µä5æuç5åuéµæuçH5åuå5èµê5åuêˆ‹µäõê5æuêuåuêˆ5ç5äuåõæuê5å5åuæ5éõèuæ5åõåué5êuæH—KÈœØY™]H‹µêµéõéµæuäH5å5èuåuæõçÈ‹µäµäuåuç5åuêˆ5èµç5åuêˆ5åuå5ê5êuä5åuêˆ5å5é5èµåuç5å—WKİ^Û[İÜ˜ŞXÛNˆµä5åué5è5åuèˆ‹Ø\ˆµê5æõäH‹X›XÎˆµêµåõäuåuê5å5éµæuäuåuê5æuêˆ‹Z^Yˆµêuæuç5åuäH5ä5çµéµèµæuçHŸNÙ[˜İ[Ûˆš
ÙX[ÙÎ\İ[˜][Û™O[[\N›‹Û”Ø]™Nœ‹Û”[šOJ
OOßKÛ”XÚØYÙNœÏJ
OOßKÛÛÜÙN›J
OOß_J^İ˜\ˆNÛ]Ï]›İÛ™\‘Øİ[Y[™Y˜][šY]ËHLHLKLOYKÏUJOO[[İ›ÚY™KœÙ][™ÜÊKÏ[™]ÈÙ]O[[Ï[[HLK[™]ÈÙ]ÏRÏOœ]Y\TÙ[XİÜŠÊKÏRÏOœ]Y\TÙ[XİÜ[
ÊKOJË‹H^‹YO[[[[
OOˆX™[ˆŠÑÊŠJÉÏ[œ]˜[YOH‰ÊÒÊÉÈˆ\OH‰ÊÚŠÉÈˆ˜[YOH‰ÊÑÊÏOOH™\İ[˜][ÛˆÊOO[[İ›ÚY›K™\İ[˜][Û—Û˜[YJ_ˆ’ÏOOHœ[“[Z]İËš[œ]œ[“[Z]YÛÜ›İÌLËš[œ]Ò×JJÉÈˆ	ÊÊYHOO[[ÉÛZ[H‰ÊÙYJÉÈˆ	ÎˆˆŠJÊˆOO[[ÉÛX^H‰ÊÖŠÉÈˆ	ÎˆˆŠJÊOOH›[X™\ˆÉÜİ\H‰ÊÊÈ˜YÙ]‹˜YÙ]]šX][Û”İ‹œ[“[Z]—Kš[˜ÛY\ÊÊOÈŒŒHˆŒHŠJÉÈ‰ÎˆˆŠJÊÏOOH™\\\™HŸÏOOH™\İ[˜][ÛˆÉÛX^[™İHŒL‰ÎˆˆŠJÈÛX™[ˆ‹ORÏOÛ]^‹™š[™
Oš‹šÙ^OOORÊNÜ™]\›ˆ‹›][\OÉÏšY[Ù]Û\ÜÏHœ™Y™\™[˜ÙK[Ü[ÛœÈYÙ[™‰ÊÑÊ‹›X™[
JÉÏÛYÙ[™]ˆÛ\ÜÏHœ™Y™\™[˜ÙKXÚÚXÙKYÜšY‰ÊÓ‹›Ü[ÛœË›X\

Ú‹YWJOO‰ÏX™[Û\ÜÏHœ™Y™\™[˜ÙKXÚÚXÙH[œ]\OH˜ÚXÚØ›Şˆ˜[YOHœ™Y™\™[˜ÙWÉÊÒÊÉÈˆ˜[YOH‰ÊÚŠÉÈˆ	ÊÊ
Ë˜ÚÚXÙ\ÖÒ×_×JKš[˜ÛY\ÊŠOÈ˜ÚXÚÙYˆˆŠJÈÜ[ˆŠÑÊYJJÈÜÜ[ÛX™[ˆŠKš›Ú[ŠˆŠJÈÙ]ÙšY[Ù]ˆˆX™[ˆŠÑÊ‹›X™[
JÉÏÙ[Xİ˜[YOHœ™Y™\™[˜ÙWÉÊÒÊÉÈÜ[Ûˆ˜[YOHˆµç5ç5ä5å5èµäõé5åÛÜ[Û‰ÊÓ‹›Ü[ÛœË›X\

Ú‹YWJOO‰ÏÜ[Ûˆ˜[YOH‰ÊÚŠÉÈˆ	ÊÊË˜ÚÚXÙ\ÖÒ×OOOZÈœÙ[XİYˆˆŠJÈˆŠÑÊYJJÈÛÜ[ÛˆŠKš›Ú[ŠˆŠJÈÜÙ[XİÛX™[ˆŸNÙ[˜İ[ÛˆJÊ^ÜİÚ]Ú
Ê^ØØ\ÙH™\İ[˜][Ûˆœ™]\›ˆJ™\İ[˜][Ûˆ‹µêuçH5å5æuèµäÈŠJÉÏX™[µèuæ5æ5åuèH5æuèµäÏÙ[Xİ˜[YOHš\İ]\È‰ÊÑİ›X\

Ó‹—JOOİ˜\ˆYNÜ™]\›‰ÏÜ[Ûˆ˜[YOH‰ÊÓŠÉÈˆ	ÊÊ


YO[OO[[İ›ÚY›KœÙ][™ÜÊOO[[İ›ÚY™YKš\İ]\Ê_œ[›š[™ÈŠOOOSÈœÙ[XİYˆˆŠJÈˆŠÑÊŠJÈÛÜ[ÛˆŸJKš›Ú[ŠˆŠJÉÏÜÙ[XİÛX™[Û\ÜÏH›]]Yµä5é5êuê5ç5êuçµåuê5æuèµäÈ5äµçH5ç5é5è5æH5å5êuç5çµêˆ5æõç5å5å5äµäõê5åuê‹5åuç5åõåµåuê5ä5ç5æuåH5äuå5çµêuæ‹Ü‰ÎØØ\ÙH™]\Èœ™]\›‰Ï]ˆÛ\ÜÏHœ[›™\‹YÜšY‰ÊÒJœİ\‹µêµä5ê5æuæˆ5å5êµåõç5å‹™]HŠJÒJ™^\È‹µçµèué5ê5æuçµæH5å5æ5æuåuç‹›[X™\ˆ‹KÍJJÒJ™X\›Y\‘^\È‹µä5é5êuê5ç5å5éõäõæuçH5èµäÈ5æõçµå5æuçµæuçOÈ‹›[X™\ˆ‹Œ
JÒJ›]\‘^\È‹µä5é5êuê5ç5ä5åõê5èµäÈ5æõçµå5æuçµæuçOÈ‹›[X™\ˆ‹Œ
JÒJœÚÜ\‘^\È‹µä5é5êuê5ç5éõéµê5èµäÈ5æõçµå5æuçµæuçOÈ‹›[X™\ˆ‹Ì
JÒJ›Û™Ù\‘^\È‹µä5é5êuê5ç5å5ä5ê5æuæˆ5èµäÈ5æõçµå5æuçµæuçOÈ‹›[X™\ˆ‹Ì
JÉÏÙ]Û\ÜÏH›]]Yµå5èuåuæõçÈ5êµåuçµæˆ5äuêµæõè5åuçÈ5êuç5èµäÈL5æuçµæuçK5æõåuç5ç5å5ä5ê5æõåÜ‰ÎØØ\ÙH˜YÙ]œ™]\›‰Ï]ˆÛ\ÜÏHœ[›™\‹YÜšY‰ÊÒJ˜YÙ]‹µêµéõéµæuäH5æõåuç5ç5äuêuí5åÈ‹›[X™\ˆ‹YMŠJÒJ˜YÙ]]šX][Û”İ‹µåõê5æuäµå5çµåuêµê5êˆ5äuä5åõåuåµæuçH‹›[X™\ˆ‹L
JÉÏÙ]šY[Ù]YÙ[™µçµå5æõç5åuç5äuêµéõéµæuäOÏÛYÙ[™]ˆÛ\ÜÏHœ[›™\‹XÚXÚÜÈ‰ÊÓØš™Xİ™[šY\ÊŠK›X\

Ó‹—JOO‰ÏX™[[œ]˜[YOHš[˜ÛY\Èˆ\OH˜ÚXÚØ›Şˆ˜[YOH‰ÊÓŠÉÈˆ	ÊÊËš[œ]š[˜ÛY\Ëš[˜ÛY\ÊŠOÈ˜ÚXÚÙYˆˆŠJÈˆŠÚŠÈÛX™[ˆŠKš›Ú[ŠˆŠJÈÙ]ÙšY[Ù]ˆØØ\ÙH˜]™[\œÈœ™]\›‰Ï]ˆÛ\ÜÏHœ[›™\‹YÜšY‰ÊÒJ˜]™[\œÈ‹µçµèué5ê5çµæ5æuæuç5æuçH‹›[X™\ˆ‹KŒ
JÒJœ›ÛÛ\È‹µçµèué5ê5åõäõê5æuçH‹›[X™\ˆ‹KŒ
JÒJ™\\\™H‹µèµæuêÈ5êuäõå5æuéµæuä5åŠJÉÏX™[µä5çµéµèµæH5êµåõäuåuê5åÙ[Xİ˜[YOH˜[œÜÜ‰ÊÓØš™Xİ™[šY\ÊİŠK›X\

Ó‹—JOO‰ÏÜ[Ûˆ˜[YOH‰ÊÓŠÉÈˆ	ÊÊËš[œ]˜[œÜÜOOSÈœÙ[XİYˆˆŠJÈˆŠÚŠÈÛÜ[ÛˆŠKš›Ú[ŠˆŠJÈÜÙ[XİÛX™[Ù]ˆØØ\ÙHœİ[Hœ™]\›‰Ï]ˆÛ\ÜÏHœ[›™\‹YÜšY‰ÊĞJœXÙHŠJĞJ›ÙÚ[™ÈŠJĞJ™š]š[™ÈŠJÉÏÙ]Û\ÜÏH›]]Yµæõç5å5äuåõæuê5åuêˆ5æõä5çÈ5ä5åué5éµæuåuè5ç5æuåuê‹ˆ5êuçµåuê5æõäõæH5ç5êuçµåuê5ä5êˆ5å5å5äµäõê5åuê‹Ü‰ÎØØ\ÙHš[\™\İÈœ™]\›ˆJš[\™\İÈŠJĞJœ›ØYÈŠNØØ\ÙH˜ÛÛœİ˜Z[Èœ™]\›ˆJ˜ÛÛœİ˜Z[ÈŠJÉÏX™[µå5èµäõé5åuêˆ5è5åuèué5åuêˆ8 %5æ5éõèuæ5åõåué5êuæH
5ä5åué5éµæuåuè5ç5æJO^\™XH˜[YOHœ™Y™\™[˜Ù\ÈˆX^[™İHŒŒˆ›İÜÏHHˆXÙZÛ\Hµäuéõêuåuêˆ5è5åuèué5åuêˆ5êuç5ä5çµåué5æuèµåuêˆ5äuäuåõæuê5åuêˆ‰ÊÑÊË™œ™YU^
JÉÏİ^\™XOÛX™[Û\ÜÏH›]]Yµå5äuåõæuê5åuêˆ5åuå5æ5éõèuæ5å5åõåué5êuæH5çµåuäµäuç5æuçH5æuåõäÈ5ç5¯Œ‹5êµåuåuæuçKˆ5ä5æuçÈ5ç5å5åµæuçÈ5èuæuèuçµä5åuêˆ5ä5åH5é5ê5æ5æH5êµêuç5åuçKÜ‰ÎØØ\ÙHœØY™]Hœ™]\›‰Ï]ˆÛ\ÜÏHÚ^˜\™\ØY™]H‰ÊÚ™JœÚY[ŠJÈ]İ›Û™Ïµä5êµå5çµä5êuê5æõç5éµèµäÈ5çµêuçµèµåuêµæOÜİ›Û™Ïµå5èuåuæõçÈ5ê5êuä5æH5ç5åõéõåuê5çµæuäõèˆ5éµæuäuåuê5æH5åuç5å5æõæuçÈ5å5éµèµåuê‹ˆ5å5åµçµè5å5êµêuç5åuçH5ä5åH5çµêuç5åuåÈ5å5åuäõèµåuêˆ5ç5èué5éõæuçH5ä5æuè5çH5çµäuåuéµèµæuçKÜÙ]Ù]ˆŠÒJœ[“[Z]‹µêµéõê5êˆ5èµç5åuêˆ5ç5å5ê5éµå5äuêuí5åÈ‹›[X™\ˆ‹ŒKJJÈµêµéõê5å5åõåuäõêuæuêˆ5ç5æõç5å5åõêuäuåuçÎˆİ›Û™ÏŒŒ8 ªÜİ›Û™Ï‹ˆ5å5èµç5åuêˆ5å5çµê5äuæuêˆ5ç5å5ê5éµå5å5æuäH8 ª‹ˆ5êuçµæuê5êˆ5å5å5äµäõê5åuêˆ5ä5æuè5å5çµé5èµæuç5å5ä5êˆ5å5èuåuæõçËÜˆŸ_Y[˜İ[ÛˆŠ
^Û]ÏTÊˆÙ\İ[˜][Û‹Y›Ü›HŠK[™]ÈË‘›Ü›Q]JÊKWÜŠŠKYORŠßKËš[œ]
NÙ›ÜŠ]ˆÙ–È™^\È‹™X\›Y\‘^\È‹›]\‘^\È‹œÚÜ\‘^\È‹›Û™Ù\‘^\È‹˜YÙ]‹˜YÙ]]šX][Û”İ‹˜]™[\œÈ‹œ›ÛÛ\È—JYYVÖ—OS[X™\Š‹™Ù]
ŠJNÙ›ÜŠ]ˆÙ–Èœİ\‹™\\\™H‹˜[œÜÜ‹š\İ]\È—JYYVÖ—OS‹™Ù]
ŠNÜ™]\›ˆYKš[˜ÛY\ÏS‹™Ù][
š[˜ÛY\ÈŠKYKœ[“[Z]YÛÜ›İSX]œ›İ[™
[X™\Š‹™Ù]
œ[“[Z]ŠJJŒL
KÜØÚ[XU™\œÚ[ÛŒK[œ]œÙJŠßKYJKÜ™Y™\™[˜Ù\Îš‹œ™Y™\™[˜Ù\ßJKÚÚXÙ\Îš‹˜ÚÚXÙ\Ëœ™YU^š‹™œ™YU^™]šY]ÙY–Ë‹‹Ëœ™]šY]ÙY__Y[˜İ[ÛˆŠÊ^İ˜\ˆ™K‹YNÛ]]Ëš[œ]]Ë˜ÚÚXÙ\ËYO]Ëœ™]šY]ÙYš[˜ÛY\ÊÊKJÙKKJOO“[X™\‹š\Ò[YÙ\ŠÙJI‰˜ÙO]I‰˜ÙO[NÜİÚ]Ú
Ê^ØØ\ÙH™\İ[˜][Ûˆœ™]\›ˆHTÊ–Û˜[YOY\İ[˜][Û—HŠK˜[YKš[J
NØØ\ÙH™]\Èœ™]\›ˆHS‹œİ\	‰“[X™\‹š\Ñš[š]J]Kœ\œÙJ‹œİ\
JI‰–Š‹™^\ËKL
I‰–Š‹™X\›Y\‘^\ËŒ
I‰–Š‹›]\‘^\ËŒ
I‰–Š‹œÚÜ\‘^\ËÌ
I‰–Š‹›Û™Ù\‘^\ËÌ
I‰“‹œÚÜ\‘^\Ï‹™^\É‰“‹™^\ÊÓ‹›Û™Ù\‘^\ÏNLØØ\ÙH˜YÙ]œ™]\›ˆ‹˜YÙ]Œ	‰“‹˜YÙ]LYM‰‰“‹˜YÙ]]šX][Û”İL	‰“‹˜YÙ]]šX][Û”İLL	‰“‹š[˜ÛY\Ë›[™İŒØØ\ÙH˜]™[\œÈœ™]\›ˆHS‹™\\\™Kš[J
I‰–Š‹˜]™[\œËKŒ
I‰–Š‹œ›ÛÛ\ËK‹˜]™[\œÊNØØ\ÙHœİ[Hœ™]\›ˆY_HJ‹œXÙI‰š‹›ÙÚ[™É‰š‹™š]š[™ÊNØØ\ÙHš[\™\İÈœ™]\›ˆY_HJ
™OZ‹š[\™\İÊHO[[	‰›™K›[™İ	‰Š
Z‹œ›ØYÊHO[[	‰•‹›[™İ
JNØØ\ÙH˜ÛÛœİ˜Z[Èœ™]\›ˆY_HJ
YOZ‹˜ÛÛœİ˜Z[ÊHO[[	‰˜YK›[™İË™œ™YU^š[J
JNØØ\ÙHœØY™]Hœ™]\›ˆYI‰–Š‹œ[“[Z]YÛÜ›İKL
NÙY˜][œ™]\›ˆL__Y[˜İ[Ûˆ
Ê^Ù	‰ŠÊ–Ù]KYX[ÙË\İ]\×HŠK^ÛÛ[RÊ_Y[˜İ[ÛˆÊ
^ÚYŠY
\™]\›Ù›ÜŠ]Ó—[ÙˆYJ^Û]TÊ	ÖÙ]K]Ú^˜\™]XH‰ÊÓŠÉÈ—IÊKYO^ŠŠKYËš\ÊŠOÈ™\H™YOÈ˜ÛÛ\]Hˆ™[\HÚ‹™]\Ù]œİ]OV‹‹œ]Y\TÙ[XİÜŠœÛX[ŠK^ÛÛ[VOOH™\HÈµêuåuè5å0­È5æ5ê5çH5è5êuçµê–OOH˜ÛÛ\]HÈµå5åuäµäõê5åuè5êuçµêˆµæ5ê5çH5å5åuäµäõê‹‹œ]Y\TÙ[XİÜŠ–Ù]K\İ\\Ş[X›ÛHŠK^ÛÛ[VOOH™\HÈ¸ (ˆ–OOH˜ÛÛ\]HÈ¸§$Èˆ¸¥âÈÛ]™OTÊ	ÖÙ]K]Ú^˜\™[[Øš[K\İ\HÜ[Û–İ˜[YOH‰ÊÓŠÉÈ—IÊNÛ™K^ÛÛ[\YK™š[™[™^
O•–ÌOOOSŠJÌJÈ‹Î0­ÈŠÜYK™š[™
O•–ÌOOOSŠVÌWJÈˆ0­ÈŠÊOOH™\HÈ¸ (ˆ5æ5ê5çH5è5êuçµê–OOH˜ÛÛ\]HÈ¸§$È5è5êuçµêˆ¸¥âÈ5æ5ê5çH5å5åuäµäõêŠ_TÊ–Ù]K]Ú^˜\™[[Øš[K\İ\HŠK™]\Ù]œİ]OTÊ	ÖÙ]K]Ú^˜\™]XH‰ÊÜYVÚVÌJÉÈ—IÊK™]\Ù]œİ]NÛ]Ï\YK™š[\Š
Ó—JOOŠŠJK›[™İÔÊ–Ù]K]Ú^˜\™XÛİ[HŠK^ÛÛ[RÊÈˆ5çµêµåuæˆŠÜYK›[™İ
Èˆ5ç5êuåuè5æuåuêˆ5å5åuäµäõê5åH‹Ê–Ù]K]Ú^˜\™\›ÙÜ™\Ü×HŠK˜[YORËÊ–Ù]K]Ú^˜\™\Ø]™K\İ]WHŠK^ÛÛ[YËœÚ^™OÈµæuêH5êuæuè5åuæuæuçH5êuæ5ê5çH5è5êuçµê5åH›OÈµæõç5å5êuæuè5åuæuæuçH5êuçµåuê5æuçHˆµå5æuèµäÈ5èµäõæuæuçÈ5ç5ä5è5êuçµêŸY[˜İ[ÛˆJËHLJ^İ˜\ˆYK‹™NÚSX]›X^
X]›Z[ŠYK›[™İLKÊJKÊ–Ü›ÛO]X—HŠK™›Ü‘XXÚ

‹YJOOÕ‹œÙ]]šX]J˜\šXK\Ù[XİY‹İš[™ÊYOOOZ
JK‹X’[™^XYOOOZÌ‹L_JKÊ–Ü›ÛO]Xœ[™[HŠK™›Ü‘XXÚ

‹YJOO•‹šY[XYHOOZ
KÊ–Ù]K]Ú^˜\™\™]—HŠK™\ØX›YZOOLÊ–Ù]K]Ú^˜\™[™^HŠK™\ØX›YZOO\YK›[™İL_Ê–Ù]K]Ú^˜\™\ÜÚ][Û—HŠK^ÛÛ[Hµêuç5äHŠÊ
ÌJJÈˆ5çµêµåuæˆŠÜYK›[™İÛ]TÊ–Ù]K]Ú^˜\™[[Øš[K\İ\HŠNÚ‹˜[YO\YVÚVÌK‹™]\Ù]œİ]OTÊ	ÖÙ]K]Ú^˜\™]XH‰ÊÜYVÚVÌJÉÈ—IÊK™]\Ù]œİ]KÊ–Ù]K[[Øš[K\™]—HŠK™\ØX›YZOOLÊ–Ù]K[[Øš[K[™^HŠK™\ØX›YZOO\YK›[™İL_‰‰Š›İÛ™\‘Øİ[Y[˜Xİ]™Q[[Y[OOZ‰‰š‹˜›\Š
K
™OJTÊ‹Ú^˜\™XÛÛ[ŠJKœØÜ›Û[ÕšY]ÊOO[[™K˜Ø[
‹Ø›ØÚÎˆ›™X\™\İ‹™Z]š[ÜŠYOXË›X]ÚYYXJHO[[	‰™YK˜Ø[
ËŠ™Y™\œË\™YXÙY[[İ[Ûˆ™YXÙJHŠK›X]Ú\ÏÈ˜]]ÈˆœÛ[ÛİŸJJ_Y[˜İ[Ûˆ

^İš[›™\’SIÏ›Ü›HYH™\İ[˜][Û‹Y›Ü›HˆÛ\ÜÏH™\İ[˜][Û‹]Ú^˜\™ˆ›İ˜[Y]OXY\ˆÛ\ÜÏHÚ^˜\™ZXY[™È]Ü[ˆÛ\ÜÏHœ[›™\‹Y^YXœ›İÈµæõç5å5å5äµäõê5åuê‹5äuçµéõåuçH5ä5åõäÏÜÜ[‰ÊÊOÈµèµê5æuæõêˆ5æuèµäÈˆµæuèµäÈ5åõäõêHŠJÈÚˆŠÑÊ
OO[[İ›ÚY›K™\İ[˜][Û—Û˜[YJ_µäuåuè5æuçH5ä5êˆ5å5æ5æuåuç5å5äuä5êuç5æˆŠJÉÏÜÙ]]Ûˆ\OH˜]ÛˆˆYH˜Ø[˜Ù[Y\İ[˜][Ûˆˆ\šXK[X™[Hµèuäµåuê5èµê5æuæõêˆ5æuèµäÈµèuäµæuê5åØ]ÛÚXY\]ˆÛ\ÜÏHÚ^˜\™[İ™\šY]ÈÜ[ˆ]K]Ú^˜\™XÛİ[ÜÜ[Ü[ˆ]K]Ú^˜\™\Ø]™K\İ]OÜÜ[›ÙÜ™\ÜÈ]K]Ú^˜\™\›ÙÜ™\ÜÈX^Hˆ˜[YOHŒˆ\šXK[X™[Hµå5êuç5çµêˆ5å5äµäõê5åuêˆ5å5æuèµäÈÜ›ÙÜ™\ÜÏÙ]Û\ÜÏHÚ^˜\™[YÙ[™¸§$È5æuê5åuéÎˆ5å5åuäµäõê5åuè5êuçµê0­È8 (ˆ5æõêµåuçNˆ5êuæuè5åuæuæuçH5ç5êuçµæuê5å0­È8¥âÈ5ä5é5åuêˆ5æ5ê5çH5å5åuäµäõêÜ]ˆ]K]Ú^˜\™\™XÛİ™\OÙ]]ˆÛ\ÜÏHÚ^˜\™[[Øš[K[˜]šYØ][Ûˆˆİ[OH™\Ü^N™›^ˆ\šXK[X™[Hµè5æuåuåuæ5éõåuçµé5éõæ5æH5äuæuçÈ5êuç5äuæuçH]Ûˆ\OH˜]Ûˆˆ]K[[Øš[K\™]ˆ\šXK[X™[Hµå5êuç5äH5å5éõåuäõçH¸¡¤Ø]ÛÙ[Xİ]K]Ú^˜\™[[Øš[K\İ\\šXK[X™[Hµäuåõæuê5êˆ5êuç5äH5äuå5äµäõê5êˆ5æuèµäÈ‰ÊÜYK›X\

Û™K—KYJOO‰ÏÜ[Ûˆ˜[YOH‰ÊÛ™JÉÈ‰ÊÊYJÌJJÈ‹Î0­ÈŠÑÊŠJÈÛÜ[ÛˆŠKš›Ú[ŠˆŠJÉÏÜÙ[Xİ]Ûˆ\OH˜]Ûˆˆ]K[[Øš[K[™^\šXK[X™[Hµå5êuç5äH5å5äuä¸¡¤Ø]ÛÙ]]ˆÛ\ÜÏHÚ^˜\™[^[İ]ˆİ[OH™\Ü^N˜›ØÚÈ˜]ˆÛ\ÜÏHÚ^˜\™]XœÈˆY[ˆİ[OH™\Ü^N››Û™Hˆ›ÛOHX›\İˆ\šXK[X™[Hµéõæ5äµåuê5æuåuêˆ5å5äµäõê5êˆ5æuèµäÈ‰ÊÜYK›X\

Û™K—KYJOO‰Ï]Ûˆ\OH˜]Ûˆˆ›ÛOHXˆˆYHÚ^˜\™]X‹IÊÛ™JÉÈˆ]K]Ú^˜\™]XH‰ÊÛ™JÉÈˆ\šXKXÛÛ›ÛÏHÚ^˜\™\[™[IÊÛ™JÉÈˆ\šXK\Ù[XİYH‰ÊÊYOOOZ
JÉÈÜ[ˆÛ\ÜÏHÚ^˜\™\İ\Z[™^ˆ]K\İ\\Ş[X›Û¸¥âÏÜÜ[Ü[‰ÊÑÊŠJÈÛX[ÜÛX[ÜÜ[Ø]ÛˆŠKš›Ú[ŠˆŠJÉÏÛ˜]]ˆÛ\ÜÏHÚ^˜\™XÛÛ[‰ÊÜYK›X\

Û™K‹YWJOO‰ÏÙXİ[Ûˆ›ÛOHXœ[™[ˆYHÚ^˜\™\[™[IÊÛ™JÉÈˆ]K]Ú^˜\™\[™[H‰ÊÛ™JÉÈˆ\šXK[X™[YOHÚ^˜\™]X‹IÊÛ™JÉÈˆ	ÊÊ™HOO\YVÚVÌOÈšY[ˆˆˆŠJÉÏÜ[ˆÛ\ÜÏHÚ^˜\™\[™[Y^YXœ›İÈµå5äµäõê5åuêˆ5å5æ5æuåuçÜÜ[Ï‰ÊÑÊŠJÉÏÚÏÛ\ÜÏH›]]Y‰ÊÑÊYJJÈÜˆŠÑJ™JJÈÜÙXİ[ÛˆŠKš›Ú[ŠˆŠJÉÏÙ]Ù]›Ûİ\ˆÛ\ÜÏHÚ^˜\™Y›Ûİ\ˆ]ˆÛ\ÜÏHœ›İÈÚ^˜\™[˜]šYØ][Ûˆ]Ûˆ\OH˜]Ûˆˆ]K]Ú^˜\™\™]µå5éõåuäõçOØ]ÛÜ[ˆ]K]Ú^˜\™\ÜÚ][ÛÜÜ[]Ûˆ\OH˜]Ûˆˆ]K]Ú^˜\™[™^µå5äuäØ]ÛÙ]]ˆÛ\ÜÏHœ›İÈÚ^˜\™\Ø]™KXXİ[ÛœÈ]Ûˆ\OH˜]Ûˆˆ]K]Ú^˜\™\Ø]™HÛ\ÜÏHœš[X\Hµêuçµåuê5êuæuè5åuæuæuçOØ]Û]Ûˆ\OHœİX›Z]ˆYHœ[‹Y\İ[˜][Ûˆµå5é5èµç5èuåuæõçÈ5ç5êµæõè5åuçÈ5å5æ5æuåuçØ]ÛÙ]]KYX[ÙË\İ]\È›ÛOHœİ]\Èˆ\šXK[]™OHœÛ]HÜÛX[µí5å5é5èµç5èuåuæõçÈ5ç5êµæõè5åuçÈ5å5æ5æuåuç5í5êuåuçµê5ä5êˆ5å5êuæuè5åuæuæuçH5åué5åuêµåÈ5èuæuæõåuçH5ç5ä5æuêuåuêˆ5å5ê5éµêˆRH5êµêµåõæuç5ê5éÈ5ç5ä5åõê5ä5æuêuåuê5æ‹ÜÛX[Ù›Ûİ\Ù›Ü›O‰ÎÛ]ÏXË™Øİ[Y[˜Ü™X]Q[[Y[
˜]ÛˆŠNÒË\OH˜]Ûˆ‹Ë˜Û\ÜÓ˜[YOH˜Xİ[Û‹\ÙXÛÛ™\H‹Ë^ÛÛ[Hµé5ê5æ5æuçH5åuåõäuæuç5å‹Ë™]\Ù]Ú^˜\™XÚØYÙOHYH‹Ë›Û˜ÛXÚÏJ
OOÜÊ
_NÛ]TÊ–Ù]K]Ú^˜\™\Ø]™WHŠKTÊˆÜ[‹Y\İ[˜][ÛˆŠKYOTÊˆØØ[˜Ù[Y\İ[˜][ÛˆŠNÓ‹^ÛÛ[H¸§$È5êuçµåuê‹‹˜Û\ÜÓ\İ˜Y
˜Xİ[Û‹\Ø]™HŠK‹^ÛÛ[Hµå5é5èµç5èuåuæõçÈ‹‹˜Û\ÜÓ\İ˜Y
˜Xİ[Û‹\ÙXÛÛ™\HŠKYK^ÛÛ[H°åÈ‹YK˜Û\ÜÓ˜[YOH˜Xİ[Û‹XÛÜÙH‹Ê‹Ú^˜\™ZXY[™ÈŠKœ™\[™
YJK‹˜Y\ŠÊKÊ–Ù]K]Ú^˜\™]X—HŠK™›Ü‘XXÚ

™KŠOOÛ™K›Û˜ÛXÚÏJ
OO“JŠK™K›ÛšÙ^YİÛXYOOÛ]ÙNØYKšÙ^OOOH\œ›İÓY‰‰ŠÙOUŠÌJKYKšÙ^OOOH\œ›İÔšYÚ‰‰ŠÙOU‹LJKYKšÙ^OOOH’ÛYH‰‰ŠÙOL
KYKšÙ^OOOH‘[™‰‰ŠÙO\YK›[™İLJKÙHOO]›ÚY	‰ŠYKœ™]™[Y˜][

KJ
ÙJÜYK›[™İ
I\YK›[™İL
J__JKÊ–Ù]K]Ú^˜\™[[Øš[K\İ\HŠK›Û˜Ú[™ÙO[™OO“JYK™š[™[™^
O•–ÌOOO[™K\™Ù]˜[YJKL
KÊ–Ù]K[[Øš[K\™]—HŠK›Û˜ÛXÚÏJ
OO“JLKL
KÊ–Ù]K[[Øš[K[™^HŠK›Û˜ÛXÚÏJ
OO“J
ÌKL
KÊ–Ù]K]Ú^˜\™\™]—HŠK›Û˜ÛXÚÏJ
OO“JLKL
KÊ–Ù]K]Ú^˜\™[™^HŠK›Û˜ÛXÚÏJ
OO“J
ÌKL
NÛ][™OOİ˜\ˆYNÚYŠ
\™]\›Û]JYO[™K\™Ù]˜ÛÜÙ\İ
–Ù]K]Ú^˜\™\[™[HŠJOO[[İ›ÚY˜YK™]\Ù]Ú^˜\™[™[ÚYŠŠ^ÙË˜Y
ŠK™K\™Ù]›˜[YI‰”˜Y
™K\™Ù]›˜[YJNİ^İÏTŠ
KÊ
K
ˆŠ_XØ]Ú
ÙJ^ÔÊ	ÖÙ]K]Ú^˜\™]XH‰ÊÕŠÉÈ—IÊK™]\Ù]œİ]OH™\H‹
ÙK›Y\ÜØYÙJ___NÔÊˆÙ\İ[˜][Û‹Y›Ü›HŠK›Ûš[œ]V‹ÊˆÙ\İ[˜][Û‹Y›Ü›HŠK›Û˜Ú[™ÙOV‹Ê–Ù]K]Ú^˜\™\Ø]™WHŠK›Û˜ÛXÚÏJ
OO‘ŠLJKÊˆÙ\İ[˜][Û‹Y›Ü›HŠK›ÛœİX›Z][™OOÛ™Kœ™]™[Y˜][

KŠL
_KÊˆØØ[˜Ù[Y\İ[˜][ÛˆŠK›Û˜ÛXÚÏJ
OOÜËœÚ^™I‰ˆXË˜ÛÛ™š\›JµæuêH5êuæuè5åuæuæuçH5êuç5ä5è5êuçµê5åKˆ5ç5èuäµåuê5äuç5æH5ç5êuçµåuêÈŠ_˜ÛÜÙJ
_KJ
KÊ
_Y[˜İ[ÛˆŠÊ^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^İ˜\ˆ™NÚYŠYÉ‰ŠHL
µæ5åuèµçÈ5ä5êˆ5å5å5äµäõê5åuêˆ5çµå5êµæõè5åuçÈ5å5ä5åõê5åuçÈ5ç5é5è5æH5å5êuçµæuê5å8 )ˆŠKZY[ËHLKY
J\™]\›Û]‹‹YKHLNİ^İÏPZJŠ
JNÛ]]Ëš[œ]š\İ]\ß

™O[OO[[İ›ÚY›KœÙ][™ÜÊOO[[İ›ÚY›™Kš\İ]\Ê_œ[›š[™ÈÚYŠRÉ‰–Èœİ[H‹š[\™\İÈ‹˜ÛÛœİ˜Z[È‹œØY™]H—Kš[˜ÛY\ÊYVÚVÌJI‰ŠËœ™]šY]ÙYVË‹‹›™]ÈÙ]
Ë‹‹Ëœ™]šY]ÙYYVÚVÌWJWJKTÊ–Û˜[YOY\İ[˜][Û—HŠK˜[YKš[J
KYOVÈœ[›š[™È‹œ™XYH‹˜]™[[™È—Kš[˜ÛY\ÊŠKZŸ‹›[™İŒL
]›İÈJ
K\œ›ÜŠµæuêH5ç5å5åµæuçÈ5êuçH5æuèµäÈ5èµäÈL5êµåuåuæuçHŠNÚYŠÊ]^ÓJËš[œ]
_XØ]Ú
YJ^Û]ÙO\YK™š[™[™^

İWJOO–È™]\È‹˜YÙ]‹˜]™[\œÈ—Kš[˜ÛY\ÊJI‰ˆ^ŠJJNİ›İÈÙOL	‰“JÙJKY_S\ÙJŠßK[Ê
OO[[İ›ÚY›KœÙ][™ÜÊ_ßKÜİ\Ëš[œ]œİ\^\ÎËš[œ]™^\Ëš\İ]\Î•ŸJJKØYÙ]Ëš[œ]˜YÙ]İ\œ™[˜ŞNˆ’SÈ‹[›š[™Ñ˜YßJ_XØ]Ú
Š^Õ
‹›Y\ÜØYÙJNÜ™]\›Ÿ\HLÊ˜]Û‹[œ]Ù[Xİ^\™XHŠK™›Ü‘XXÚ
O•‹™\ØX›YHL
K
µêuåuçµê5ä5êˆ5å5å5äµäõê5åuêˆ5äuèµè5çø )ˆŠNİ^Û]^ZY[ŠÛ˜[YNš‹Xİ]™N™YKÙ][™ÜÎ“‹^\İ[™Î›_JNÚYŠY
\™]\›ÛOU‹Ë˜ÛX\Š
KHLÊ
K
µæõç5å5êuæuè5åuæuæuçH5è5êuçµê5åH5äuèµè5çÈŠKÉ‰ŠZY[JŠKHLKœ™[[İ™Q]™[\İ[™\Š˜Ø[˜Ù[‹	
Kœ™[[İ™Q]™[\İ[™\Š˜ÛÜÙH‹ŠJ_XØ]Ú
Š^Ù	‰•

Èµå5å5äµäõê5åuêˆ5è5êuçµê5åK5ä5æˆ5ç5ä5è5æuêµçÈ5ç5é5êµåuåÈ5ä5êˆ5å5êµæõè5åuçÎˆˆµå5êuæuè5åuæuæuçH5ç5ä5è5êuçµê5åNˆŠJÕ‹›Y\ÜØYÙJ_Yš[˜[^ÜHLK	‰ŠÊ˜]Û‹[œ]Ù[Xİ^\™XHŠK™›Ü‘XXÚ
O•‹™\ØX›YHLJKJ
J__J_[]	RÏOÊËœÚ^™I‰ˆXË˜ÛÛ™š\›JµæuêH5êuæuè5åuæuæuçH5êuç5ä5è5êuçµê5åKˆ5ç5èuäµåuê5äuç5æH5ç5êuçµåuêÈŠJI‰’Ëœ™]™[Y˜][

_KJ
OOÛ]ÏYÙHLKœ™[[İ™Q]™[\İ[™\Š˜Ø[˜Ù[‹	
KÉ‰›
J_NÜ™]\›ˆ˜Y]™[\İ[™\Š˜Ø[˜Ù[‹	
K˜Y]™[\İ[™\Š˜ÛÜÙH‹‹ÛÛ˜ÙNˆLJK

K›Ü[ŸœÚİÓ[Ù[

KI‰ˆJ
OYKœÙ][™ÜÊHO[[	‰–Kœ[›š[™Ñ˜Y
I‰ŠˆO[[	‰›‹›İ™\šY]ÊI‰ŠÏ[‹›İ™\šY]ÊKšY
K[ŠÏOİ˜\ˆYKÚYŠY
YO[OO[[İ›ÚY›KœÙ][™ÜÊHO[[	‰™YKœ[›š[™Ñ˜YJ
RÏO[[İ›ÚY’Ëœ[ŠHO[[	‰–‹š[œ]
J\™]\›ŞORËœ[‹š[œ]Û]UJKœÙ][™ÜËJK\ÙJŠßK‹š[œ]
KÜ[“[Z]“‹š[œ]œ[“[Z]YÛÜ›İÌL™Y™\™[˜Ù\Î“‹™œ™YU^JNÙ›ÜŠ]™HÙˆŠZ–Èœ™Y™\™[˜ÙWÈŠÛ™KšÙ^WOS‹˜ÚÚXÙ\ÖÛ™KšÙ^WNÙ›ÜŠ]Û™K—[ÙˆØš™Xİ™[šY\ÊŠJ^ÚYŠš\Ê™J_Èœ[“[Z]YÛÜ›İ—Kš[˜ÛY\Ê™JJXÛÛ[YNÛ]YOVË‹‹šÊ	ÖÛ˜[YOH‰ÊÛ™JÉÈ—IÊWNÙ›ÜŠ]ÙHÙˆYJXÙK\OOOH˜ÚXÚØ›ŞØÙK˜ÚXÚÙYP\œ˜^Kš\Ğ\œ˜^JŠI‰•‹š[˜ÛY\ÊÙK˜[YJN˜ÙK˜[YOUˆO[[ÕˆˆŸ]ÏTŠ
KËœ™]šY]ÙYVË‹‹›™]ÈÙ]
Ë‹‹Ëœ™]šY]ÙY‹‹“‹œ™]šY]ÙYJWNÙ›ÜŠ]Û™W[ÙˆYJ[™HOOH™\İ[˜][Ûˆ‰‰™Ë˜Y
™JNÓÊ
K
µå5å5äµäõê5åuêˆ5êuåuåõåµê5åH5çµå5êµæõè5åuçÈ5å5ä5åõê5åuçËˆ5å5êuæuè5åuæuæuçH5êuæõäuê5èµê5æõêˆ5è5êuçµê5åH5äuæ5æuåuæ5åÈ5ç5åõéH5êuçµæuê5å5æõäõæH5ç5êuçµåuê5å5æõåuç5äuèµè5çËˆŠ_JK˜Ø]Ú


OOÙ	‰•
µç5ä5è5æuêµçÈ5ç5æ5èµåuçÈ5æõèµêˆ5ä5êˆ5å5êµæõè5åuçÈ5å5ä5åõê5åuçËˆ5ä5é5êuê5ç5èµê5åuæˆ5åuç5êuçµåuê5ä5êˆ5å5å5äµäõê5åuêˆ5æõä5çËˆŠ_JJK

OOÙHLKœ™[[İ™Q]™[\İ[™\Š˜Ø[˜Ù[‹	
Kœ™[[İ™Q]™[\İ[™\Š˜ÛÜÙH‹Š__Y[˜İ[Ûˆ›ŠJ^İ˜\ˆNÚYŠ
O[[İ›ÚYš[š\š]Y
OOOHL
\™]\›ˆLÛ]]O[[İ›ÚY™[][Y[JO]O[[İ›ÚYœ™[XZ[š[™ÊOO[[İ›ÚYšVÙWNÜ™]\›ŠO[[İ›ÚYœXÚØYÙ\Ñ[˜X›Y
OOOHL	‰–È\İ‹›]™H—Kš[˜ÛY\Êœ^[Y[[ÙJI‰ŠO[[İ›ÚY›‹œ^[Y[Û[ÙJOOO]œ^[Y[[ÙI‰\[Ùˆ‹œXÚØYÙWİ™\œÚ[Û—ÚYOHœİš[™È‰‰–Èœİ\\ˆ‹™[‹˜ÛÛ\[š[Ûˆ—Kš[˜ÛY\Ê‹œ[—ØÛÙJI‰ŠHOOHœ™\ÙX\˜ÚŸ‹œ[—ØÛÙOOOH˜ÛÛ\[š[ÛˆŠI‰“[X™\‹š\ÔØY™R[YÙ\ŠŠI‰œŒ]˜\ˆÚ[™]ÈÙ]
Èœ]Y]YY‹œ™\ÙX\˜Ú[™È—JKÏ^Ü]\ÙY–Èµå5å5ê5éµå5çµåuêuå5æuêˆ‹µç5åõéH5å5çµêuæˆ5æõäõæH5ç5åõåµåuê5ç5ä5åuêµå5å5ê5éµåˆ5ç5ä5êµæué5êµåÈ5äuéõêuêˆ5êµæõè5åuçÈ5åõäõêuåˆ—K]\ÙYÜ™XYN–Èµå5êµæõè5åuçÈ5çµåuæõçÈ5åuçµåuêuå5å‹µå5êµåuéµä5å5è5êuçµê5å5æõæ5æuåuæ5åˆ5ç5åõéH5å5çµêuæˆ5æõäõæH5ç5äuäõåuéÈ5åuç5ä5êuê5ä5åuêµåˆ—K™\İ[YY–Èµå5å5ê5éµå5åõåuäõêuå‹µå5çµêuæˆ5èµäuåuäõå5èµç5ä5åuêµå5å5ê5éµåˆ—K]Y]YY–Èµçµçµêµæuè5å5ç5êµåõæuç5êˆ5èµäuåuäõå‹µå5äuéõêuå5å5êµéõäuç5å5åuçµçµêµæuè5å5ç5å5é5èµç5åˆ—KİX›Z][™Î–Èµêuåuç5åÈ5äuéõêuå5ç5èué5éÈRH‹µè5êµåuè5æH5å5êµæõè5åuçÈ5è5äuäõéõåH5åuå5äuéõêuå5è5êuç5åõêˆ5ç5èué5éËˆ—KİX›Z]Y–Èµå5äuéõêuå5å5êµéõäuç5å5ä5éµç5èué5éÈRH‹µçµçµêµæuçÈ5ç5èµäõæõåuçÈ5çµå5èué5éËˆ5ä5æuçÈ5æõê5äµèˆ5åµçµçÈ5èuæuåuçH5çµäõåuæuéËˆ—K›İšY\—Ü]Y]YY–Èµäuêµåuê5ä5éµç5èué5éÈRH‹µå5èué5éÈ5ä5æuêuê5ä5êˆ5å5äuéõêuå5åuå5æuä5çµçµêµæuè5å5ç5èµæuäuåuäËˆ5ä5æuçÈ5æõê5äµèˆ5åµçµçÈ5èuæuåuçH5çµäõåuæuéËˆ—K›İšY\—İÛÜšÚ[™Î–Èµèué5éÈRH5èµåuäuäÈ5èµç5å5êµæõè5åuçÈ‹µå5èué5éÈ5èµäõæuæuçÈ5çµèµäuäÈ5ä5êˆ5å5êµåuæõè5æuê‹ˆ5ä5æuçÈ5æõê5äµèˆ5åµçµçÈ5èuæuåuçH5çµäõåuæuéËˆ—K™\ÙX\˜Ú[™Î–Èµåõæué5åuêH5çµæuäõèˆ5éµæuäuåuê5æH‹µå5èué5éÈ5çµäõåuåuåÈ5èµç5åõæué5åuêH5çµéõåuê5åuê‹ˆ5åµçµçÈ5å5èuæuåuçH5èµäõæuæuçÈ5ä5æuè5åH5æuäõåuè‹ˆ—K˜Y[™Î–ÈµçµæõæuçÈ5ä5êˆ5å5êµåuæõè5æuêˆ5å5çµåuéµèµêˆ‹µå5êµéõäuç5èuæuçµçÈ5ç5å5æõè5êˆ5å5êµêuåuäuåˆ5å5êµåuæõè5æuêˆ5èµäõæuæuçÈ5ä5æuè5å5çµåuæõè5å5ç5äuäõæuéõåˆ—K˜[Y][™Î–ÈµäuåuäõéÈ5ä5êˆ5å5êµåuæõè5æuêˆ5êuå5êµéõäuç5å‹µäuåuäõéÈ5ä5êˆ5çµäuè5å5å5êµåuæõè5æuê‹5å5êµä5ê5æuæõæuçK5å5êµéõéµæuäH5åuå5çµéõåuê5åuê‹ˆ—K›İšY\—Ü™]N–ÈµçµçµêµæuçÈ5ç5åõæuäõåuêH5å5éõêuê5èµçH5å5èué5éÈ‹µäuäõæuéõêˆ5å5çµéµäH5çµåuç5å5èué5éÈ5è5æõêuç5åˆ5å5çµèµê5æõêˆ5êµäuäõåuéÈ5êuåuäH5ç5ç5ä5êuç5æuåõêˆ5äuéõêuêˆ5êµæõè5åuçÈ5è5åuèué5ê‹ˆ—K™XYN–Èµå5êµæõè5åuçÈ5çµåuæõçÈ5ç5äuäõæuéõå‹µå5äuäõæuéõåuêˆ5å5èuêµæuæuçµåKˆ5äuäõåuéÈ5ä5êˆ5å5å5éµèµå5ç5é5è5æH5ä5æuêuåuê5å5åuèué5êµå5ç5ä5êµêˆ—KÛÛ\]Y–Èµå5êµæõè5åuçÈ5è5åuèuèÈ5ç5ä5êµê‹µå5å5åuèué5å5å5èuêµæuæuçµå5ç5ä5åõê5ä5æuêuåuê5æ‹ˆ—KØ[˜Ù[Y–Èµå5å5ê5éµå5äuåuæ5ç5å‹µå5äuæuæ5åuç5èuåué5æKˆ5ä5æH5ä5é5êuê5ç5å5çµêuæuæˆ5å5ê5éµå5åµåH5åuç5ä5êµêµåuåuèuèÈ5çµçµè5å5êµåuæõè5æuê‹ˆ—K˜Z[Y–Èµå5å5ê5éµå5è5æõêuç5å‹µå5å5ê5éµå5å5èuêµæuæuçµå5ç5ç5ä5å5åuèué5êˆ5êµåuæõè5æuê‹ˆ—K™YY×Ù]Z[Î–Èµå5êµæõè5åuçÈ5ç5ä5èµäuê5ä5êˆ5æõç5å5äuäõæuéõåuêˆ‹µå5êµéõäuç5å5êµêuåuäuå5êuç5ä5èµäuê5å5ä5æuçµåuê‹ˆ5ç5ä5êuåuè5åH5è5êµåuè5æH5å5æ5æuåuçˆ—KYÙ]Ù^]\İY–Èµå5å5ê5éµå5è5èµéµê5å5ç5äuäõæuéõêˆ5èµç5åuêˆ‹µç5ä5è5æuêµçÈ5ç5å5çµêuæuæˆ5ç5é5è5æH5äuäõæuéõêˆ5è5êµåuè5æH5å5èµç5åuê‹ˆ—_K]]OÛ]OQ]Kœ\œÙJ
NÜ™]\›ˆ[X™\‹š\Ñš[š]JJOÙN›[K\Ï]OÛ]OSX]›X^
X]™›ÛÜŠÌYLÊJNÜ™]\›ˆİš[™ÊX]™›ÛÜŠKÍŒ
JKœYİ\
‹ŒŠJÈˆŠÔİš[™ÊIMŒ
KœYİ\
‹ŒŠ_KZO]O”İš[™ÊO[[İˆˆŠKœ™\XÙJÖÉˆ‰×KÙËOOŠÈ‰ˆˆ‰˜[\È‹ˆ‰›È‹ˆˆ‰™İÈ‹	È‰Îˆ‰œ][İÈ‹‰Èˆ‰ˆÌÎNÈŸJVÙWJNÙ[˜İ[ÛˆÚ
OQ]K››İÊ
J^İ˜\ˆËNÛ]UÚš\Êœİ]JK^]
˜Ü™X]YØ]
KO[İœİ]OOOHœ]Y]YY‰‰œ]\ÙYØ]	‰ŠÏ^]
œ]\ÙYØ]
JHO[[ØÎ™NŠ^]
™š[š\ÚYØ]
JHO[[Ù]
\]YØ]
KÏ^]

]œ›ÙÜ™\ÜÊOO[[İ›ÚYœ˜ÚXÚÙY]
_]
\]YØ]
_‹[ÙNšNÜ™]\›Ù[\ÙYœOO[[OOO[[Èµç5ä5åµçµæuçÈ\ÊK\ŠKXY[™NœOO[[OO[[Èµç5ä5åµçµæuçÈ\Ê

^]
™XY[™WØ]
JHO[[ÚœŠÌMJ™M
KJœİ]OOOHœ]Y]YY‰‰œ]\ÙYØ]	‰ŠO^]
œ]\ÙYØ]
JHO[[ÛN›
JK\İXİ]š]NœÏOO[[OO[[Èµæ5ê5çH5å5êµéõäuç\Ê\Ê__Y[˜İ[ÛˆÚ
OQ]K››İÊ
J^İ˜\ˆËËNÛ]UÚš\Êœİ]JKHH]œ]\ÙYØ]	‰–Èœ]Y]YY‹œ™\ÙX\˜Ú[™È‹œ™XYH—Kš[˜ÛY\Êœİ]JKO\İœİ]OOOHœ™XYHÈœ]\ÙYÜ™XYHˆœ]\ÙY›ÜÖÊÏ]œ›ÙÜ™\ÜÊOO[[İ›ÚYËœİYÙWOİœ›ÙÜ™\ÜËœİYÙNœİ]OOOHœ]Y]YYÈœ]Y]YYˆœ›İšY\—İÛÜšÚ[™Èœİ]KÜËO\ÖÚW_ÈµçµéµäH5ç5ä5æuäõåuèˆ‹µæuêH5ç5ê5èµè5çÈ5ä5êˆ5çµéµäH5å5å5ê5éµåˆ—Nİœ\œÜÙOOOH™Z[H‰‰ŠOOOH˜ÛÛ\]YÊÏHµå5äuäõæuéõå5å5æuåuçµæuêˆ5å5èuêµæuæuçµå‹Hµå5äõåuí5åÈ5åuäuéõêuåuêˆ5å5ä5æuêuåuê5åµçµæuè5æuçH5äuçµèuæˆ5å5èuåuæõçËˆ5ç5ä5äuåuéµèµå5å5åµçµè5å5ä5éµç5èué5éËˆŠNšOOOHœ™XYHÊÏHµå5çµåõéõê5å5æuåuçµæH5çµåuæõçÈ‹Hµå5çµèµê5æõêˆ5çµæõæuè5å5äõåuí5åÈ5åuå5éµèµåuêˆ5ç5äuäõæuéõå5æuäõè5æuê‹ˆŠNšOOOHœ]\ÙYÜ™XYH‰‰ŠÏHµå5çµåõéõê5å5æuåuçµæH5çµåuæõçÈ5åuçµåuêuå5å‹Hµç5åõéH5å5çµêuæˆ5æõäõæH5ç5é5ê5èuçH5ä5êˆ5å5äõåuí5åÈ5åuäuéõêuåuêˆ5å5ä5æuêuåuêˆŠJNÛ]Ï^]

Ï]œ›ÙÜ™\ÜÊOO[[İ›ÚY™Ë˜ÚXÚÙY]
_]
\]YØ]
_]
˜Ü™X]YØ]
K[‰‰ˆ\‰‰˜ÈOO[[	‰™KXÏŒNMS[X™\Šœ™\Ù\™YØYÛÜ›İ
_[‰‰ˆJ‰‰œİ]OOOHœ]Y]YYŠI‰]
˜Ü™X]YØ]
HOO[[	‰™OŠ
O^]
™XY[™WØ]
JHO[[ŞN]
˜Ü™X]YØ]
JÌMJ™M
KO\İœİ]OOOHœ]Y]YYÈµç5ä5êµæuêuç5åÈ5äuéõêuêˆRH5èµäÈ5ç5ç5åõæuéµå5èµç5å5çµêuæ‹ˆ5å5êµéõéµæuäH5è5êuä5ê5êuçµåuê5ç5å5ê5éµå5åµåKˆœİ]OOOHœ™XYHÈµå5êµåuæõè5æuêˆ5çµåuæõè5å5ä5æˆ5ä5æuè5å5çµä5åuêuê5êˆ5ç5é5ê5èuåuçKˆ5ç5åõéH5å5çµêuæˆ5æõäõæH5ç5äuäõåuéÈ5åuç5å5åuèuæuèÈ5ä5åuêµåˆˆµäuéõêuêˆRH5êuæõäuê5è5êuç5åõå5ç5èué5éÈ5èµêuåuæuå5ç5å5çµêuæuæˆ5åuç5éµê5åuæˆ5êµéõéµæuäKˆ5ä5æuçÈ5é5ê5èuåuçH5äuåµçµçÈ5å5êuå5æuåÈ5å5çµêuæˆ5æuåõåµåuê5ç5ä5åuêµå5å5ê5éµåˆˆ[‰‰œŒÈµå5å5ê5éµå5ä5æuè5å5é5èµæuç5åˆ5èµç5åuêˆ5å5èué5éÈ5æ5ê5çH5ä5åuçµêµåÈŠÊÌL
KÑš^Y
ŠJÈˆ8 ªˆ5è5êuä5ê5åH5êuçµåuê5æuçH5ç5äuäõæuéõåˆšÈµåõç5é5å5çµäµäuç5êˆ5å5åµçµçÈ5êuç5å5å5ê5éµåˆ5çµçµêµæuçÈ5ç5ä5æuêuåuê5å5èuæuåuçH5çµå5êuê5êÈ5ä5æuçÈ5éµåuê5æˆ5ç5å5êµåõæuç5å5ê5éµå5è5åuèué5ê‹ˆ™Èµç5ä5å5êµéõäuç5èµäõæõåuçÈ5çµå5èuåuæõçÈ5çµèµçÈ5äõéõåuê‹ˆ5æuæuêµæõçÈ5èµæuæõåuäH5ä5éµç5å5èué5éÎÈ5ä5é5êuê5ç5ê5èµè5çÈ5çµéµäH5ä5åH5ç5èµéµåuêˆˆˆÜ™]\›ØXİ]™N›‹]\ÙYœ‹İYÙNšK]NœË\ØÜš\[Û›İ[N™›İXÙN›__Y[˜İ[Ûˆ]Š
^Û]O]ÚÙ[—İ\ØYÙNÚYŠJI‰–Èš[œ]İÚÙ[œÈ‹›İ]]İÚÙ[œÈ‹İ[İÚÙ[œÈ—K™]™\JOO“[X™\‹š\ÔØY™R[YÙ\ŠVÚWJI‰™VÚWOL
I‰™Kİ[İÚÙ[œÏOOYKš[œ]İÚÙ[œÊÙK›İ]]İÚÙ[œÊJ\™]\›‰ÏÛ\ÜÏH›]]Yˆ]K\[‹]ÚÙ[‹][˜]˜Z[X›Oµè5êµåuè5æH5æ5åuéõè5æuçH5ä5æuè5çH5åµçµæuè5æuçH5ç5å5ê5éµå5åµåKÜ‰ÎÛ]ZOO›™]È[“[X™\‘›Ü›X]
šKRSŠK™›Ü›X]
JNÜ™]\›‰ÏÙXİ[ÛˆÛ\ÜÏHœ[‹]ÚÙ[‹]\ØYÙHˆ\šXK[X™[Hµè5æuéµåuç5æ5åuéõè5æuçHµæ5åuéõè5æuçH5êuè5åuéµç5åH5äuå5ê5éµåÚ]ˆÛ\ÜÏHœ[‹][Z[™È]Ü[µéõç5æÜÜ[İ›Û™Ï‰ÊÜŠKš[œ]İÚÙ[œÊJÈÜİ›Û™ÏÙ]]Ü[µé5ç5æÜÜ[İ›Û™ÏˆŠÜŠK›İ]]İÚÙ[œÊJÈÜİ›Û™ÏÙ]]Ü[µèuæˆ5å5æõåuçÜÜ[İ›Û™È]K\[‹]ÚÙ[‹]İ[ˆŠÜŠKİ[İÚÙ[œÊJÉÏÜİ›Û™ÏÙ]Ù]Û\ÜÏH›]]Yµç5é5æH5äõæuåuåuåÈ5å5èué5éËˆ5èµç5åuêˆ5åõæué5åuêH5åuæõç5æuçH5çµåõåuêuäuêˆ5äuè5é5ê5äËÜÜÙXİ[Û‰ßY[˜İ[ÛˆÊOQ]K››İÊ
J^İ˜\ˆËKÎÛ]RÚ
JKQÚ
JKOP\œ˜^Kš\Ğ\œ˜^J
Ï]œ›ÙÜ™\ÜÊOO[[İ›ÚY˜Ë™]™[ÊOİœ›ÙÜ™\ÜË™]™[Ë™š[\ŠÏOœÖÙËœİYÙWI‰]
Ë˜]
HOO[[
KœÛXÙJLLŠN–×KÏVŞÜİYÙNˆœ]Y]YY‹]˜Ü™X]YØ]WNÛ‹˜Xİ]™_Ëœ\Ú
ÜİYÙN›‹œİYÙK]\]YØ]JNÛ]ZK›[™İÖË‹‹œËœÛXÙJJK‹‹šK‹‹›‹˜Xİ]™OÖ×N–ŞÜİYÙN›‹œİYÙK]\]YØ]WWNœÎÜ™]\›‰ÏÙXİ[ÛˆÛ\ÜÏHœ[‹\›ÙÜ™\ÜÈˆ]K\[‹\›ÙÜ™\ÜÈ\šXK[X™[HµçµèµéõäH5èµäuåuäõêˆ5å5èuåuæõçÈ]ˆÛ\ÜÏHœ[‹\›ÙÜ™\ÜËZXY[™ÈÜ[ˆÛ\ÜÏHœ[‹\İ]H	ÊÊ‹˜Xİ]™I‰ˆ[‹œ]\ÙYÈš\Ë\[›š[™ÈˆˆŠJÉÈ‰ÊÊ‹œ]\ÙYÈµçµåuêuå5å›‹˜Xİ]™OÈµäuêµå5ç5æuæˆˆµå5èuêµæuæuçHŠJÈÜÜ[È]K\[‹]]OˆŠÒZJ‹]JJÈÚÏÙ]ˆŠÒZJ‹™\ØÜš\[ÛŠJÉÏÜ]ˆÛ\ÜÏHœ[‹][Z[™È]Ü[µåµçµçÈ5êuåõç5èÏÜÜ[İ›Û™È]K\[‹Y[\ÙY‰ÊÜ‹™[\ÙY
ÈÜİ›Û™ÏÙ]ˆŠÊ‹˜Xİ]™OÈ]Ü[µèµäÈ5çµäµäuç5êˆ5å5åµçµçÈ
5ç5ä5åµçµçÈ5èuæuåuçH5çµêuåuèµê
OÜÜ[İ›Û™È]K\[‹YXY[™OˆŠÜ‹™XY[™JÈÜİ›Û™ÏÙ]ˆˆˆŠJÈ]Ü[µåµçµçÈ5çµä5åˆ5å5èµäõæõåuçÈ5å5ä5åõê5åuçÈ5çµå5èuåuæõçÏÜÜ[İ›Û™È]K\[‹[\İXXİ]š]OˆŠÜ‹›\İXİ]š]JÈÜİ›Û™ÏÙ]Ù]ˆŠÊ‹˜Xİ]™OÈˆ‘]Š
JJÉÏÛ\ÜÏHœ[‹[›İXÙHˆ]K\[‹\İ[H	ÊÊ‹››İXÙOÈˆˆšY[ˆŠJÈˆŠÒZJ‹››İXÙJJÉÏÜÛ\ÜÏH›]]Yˆ]K\[‹\Ş[˜Ï‰ÊÊ‹˜Xİ]™OÈµäuåuäõéÈ5çµéµäH5çµåuç5å5êuê5ê¸ )ˆˆµå5å5ê5éµå5å5èuêµæuæuçµå0­È5å5êuèµåuè5æuçH5è5èµéµê5åHŠJÈÜˆŠÊ‹˜Xİ]™OÉÏÛ\ÜÏH›]]Yµå5çµèuæˆ5äuåuäõéÈ5çµéµäH5æõçH5êuè5æuåuê‹ˆ5èµäõæõåuçÈ5çµå5èué5éÈ5èµêuåuæH5ç5éõåõêˆ5èµäÈ5æõäõéõåˆ5çµäµäuç5êˆ5å5å5ê5éµå5å5æuäMH5äõéõåuêÈ5åµå5ä5æuè5åH5åµçµçÈ5èuæuåuçH5çµåuäuæ5åËÜ‰ÎˆˆŠJÉÏµçµå5äuåuéµèˆ5èµäÈ5èµæõêuæuåOÏÚÛÛ\ÜÏHœ[‹][Y[[™H‰ÊÛ›X\
ÏOİ˜\ˆNÜ™]\›ˆOÜ[ˆŠÒZJ

O\ÖÙËœİYÙWJOO[[İ›ÚYVÌJ_ËœİYÙJJÈÜÜ[[YOˆŠÒZJ]
Ë˜]
OOO[[Èˆ›™]È]JË˜]
KÓØØ[U[YTİš[™ÊšKRS‹Úİ\ˆŒ‹YYÚ]‹Z[]NˆŒ‹YYÚ]‹ÙXÛÛ™ˆŒ‹YYÚ]ŸJJJÈİ[YOÛOˆŸJKš›Ú[ŠˆŠJÈÛÛˆŠÊ

]œ›ÙÜ™\ÜÊOO[[İ›ÚY™œÙX\˜Ú\ÊOŒÈµåõæué5åuêuæH5çµæuäõèˆ5êuå5åuêuç5çµåNˆŠÓ[X™\Šœ›ÙÜ™\ÜËœÙX\˜Ú\ÊJÈÜˆˆˆŠJÊ˜\Y˜XİÈµå5êµåuéµä5å5æõåuç5ç5êˆŠÊ
ÏJOJ]˜\Y˜Xİœ™XÛÜ™ÊOO[[İ›ÚYœ›[™İ
HO[[ÛNŠ]˜\Y˜Xİ˜ÚXÚÜÊOO[[İ›ÚYš›[™İ
HO[[İÎŒ
JÈˆ5é5ê5æuæ5æuçH5åu¯ˆŠİ˜\Y˜XİœÛİ\˜Ù\Ë›[™İ
Èˆ5çµéõåuê5åuêˆ5ç5äuäõæuéõåÜˆˆˆŠJÉÏ]ˆÛ\ÜÏHœ›İÈ[‹XÛÛ›ÛÈ]Ûˆ\OH˜]Ûˆˆ]K\™Yœ™\Ú\[µê5èµè5çÈ5çµéµäH5èµæõêuæuåOØ]Û‰ÊÊ‹œ]\ÙYÉÏ]Ûˆ\OH˜]Ûˆˆ]K\™\İ[YK\[ˆÛ\ÜÏHœš[X\Hµå5çµêuæØ]Û‰Î›‹˜Xİ]™OÉÏ]Ûˆ\OH˜]Ûˆˆ]K\]\ÙK\[µèµéµåuê5åµçµè5æuêØ]Û‰ÎˆˆŠJÊ‹˜Xİ]™_‹œ]\ÙYœİ]OOOHœ™XYHÉÏ]Ûˆ\OH˜]Ûˆˆ]KXØ[˜Ù[\[ˆÛ\ÜÏH™[™Ù\ˆµäuæ5ç5å5ê5éµåØ]Û‰ÎˆˆŠJÉÏÙ]Û\ÜÏH›]]Y‰ÊÊ‹œ]\ÙY	‰œİ]OOOHœ]Y]YYÈµå5å5ê5éµå5çµåuêuå5æuêˆ5äuêuê5ê‹ˆ5ä5é5êuê5ç5èuäµåuê5ä5êˆ5å5åõç5åuçÈ5åuç5åõåµåuê5äuå5çµêuæ‹ˆ›‹˜Xİ]™OÈµä5é5êuê5ç5èuäµåuê5ä5êˆ5å5åõç5åuçÈ5åuç5åõåµåuê5äõê5æˆ5í5êµæõè5åuçÈ5æuèµäõíÈ5å5èµäuåuäõå5çµêµäuéµèµêˆ5äuêuê5ê‹ˆˆµé5ê5æ5æH5å5å5ê5éµå5è5êuçµê5åKˆ5ä5é5êuê5ç5åõåµåuê5ä5ç5æuå5çH5äõê5æˆ5í5êµæõè5åuçÈ5æuèµäõíˆŠJÈÜÜÙXİ[ÛˆŸY[˜İ[ÛˆÜŠK‹Q]K››İÊ
J^Û]OQÚ
KŠKÏRÚ
KŠNÙ›ÜŠ]Ù[Ù–ÖÈ™[\ÙY‹–Ù]K\[‹Y[\ÙYH—KÈ™XY[™H‹–Ù]K\[‹YXY[™WH—KÈ›\İXİ]š]H‹–Ù]K\[‹[\İXXİ]š]WH—WJ^Û]]œ]Y\TÙ[XİÜŠ
NÚ	‰Š^ÛÛ[ZVÙJ_[]]œ]Y\TÙ[XİÜŠ–Ù]K\[‹\İ[WHŠNÛ	‰ŠšY[H\Ë››İXÙK^ÛÛ[\Ë››İXÙJNÛ]Ï]œ]Y\TÙ[XİÜŠ–Ù]K\[‹\Ş[˜×HŠNØÉ‰ŠË^ÛÛ[\Ë˜Xİ]™OÛÈµå5åõæuäuåuê5ç5êuê5êˆ5è5äuäõéÈ5ç5é5è5æHŠİ\Ê‹[ŠNˆµçµçµêµæuçÈ5ç5èµäõæõåuçÈ5çµå5êuê5êˆˆµå5å5ê5éµå5å5èuêµæuæuçµå0­È5å5êuèµåuè5æuçH5è5èµéµê5åHŠ_]˜\ˆ]]OÛ]O[™]È]J
NÜ™]\›ˆ[X™\‹š\Ñš[š]J
ÙJOÙKÓØØ[Tİš[™ÊšKRS‹İ[YV›Û™Nˆ\ÚXKÒ™\\Ø[[HŸJNˆµç5ä5åµçµæuçÈŸKYJJOOİ^Ü™]\›‰ÏH™YH‰ÊÑÊÜÊ
JJÉÈˆ\™Ù]H—Ø›[šÈˆ™[H››ÛÜ[™\ˆ›Ü™Y™\œ™\ˆ‰ÊÑÊJJÈˆ8¡¥ÏØOˆŸXØ]Ú
Š^Ü™]\›ˆˆŸ_K^ØXİ]™Nˆµé5èµæuç‹]\ÙYˆµçµåuêuå5å‹İÜYˆµæõäuåuæHŸK^Ü[™[™Îˆµçµçµêµæuè5å5ç5ä5æuêuåuê‹\›İ™Yˆµä5åuêuê5å5ç5äuæuéµåuèˆ5æuäõè5æH‹™Z™XİYˆµè5äõåõêµå‹İ\\œÙYYˆµå5åuåõç5é5å5äuå5éµèµå5ä5åõê5êˆŸNÙ[˜İ[ÛˆİŠJ^İ˜\ˆÛ]J
]œØÚY[JOO[[İ›ÚYšœİ]J_œİÜY‹]˜YÙ]ßKO]œ™\]Y\İß×KÏ]œ™\Üß×K]œ[‹Ï[OOH˜Xİ]™HÖÖÈœ]\ÙH‹µèµéµåuê5åµçµè5æuêˆ—KÈœİÜ‹µäuæ5ç5é5èµæuç5åuêˆ5æuåuçµæuêˆ—WN›OOHœ]\ÙYÖÖÈœ™\İ[YH‹µå5çµêuæˆ—KÈœİÜ‹µäuæ5ç5é5èµæuç5åuêˆ5æuåuçµæuêˆ—WN–ÖÈ™[˜X›H‹µå5é5èµç5äuäõæuéõå5æuåuçµæuêˆ—WK[OOHœİÜYÉÏX™[Û\ÜÏH™Z[KXÛÛœÙ[[œ]\OH˜ÚXÚØ›Şˆ]KYZ[KXÛÛœÙ[ˆ5ä5è5æH5çµä5êuê5çµåõéõêRH5æuåuçµæH5äuêµêuç5åuçH5äuçµèuäµê5êˆ5êµéõê5êˆŒ8 ªˆ5äuåõåuäõêH5åuèµäÈH8 ªˆ5ç5å5ê5éµå5åuêuæuêµåuèÈ5è5êµåuè5æH5å5êµæõè5åuçÈ5å5äõê5åuêuæuçH5èµçH5èué5éÈ5å5¯RKˆ5ç5ä5æuêµäuéµèµåH5å5åµçµè5åuê‹5åõæuåuäuæuçH5ä5éµç5èué5éõæH5è5èuæuèµåuêˆ5ä5åH5çµêuç5åuåÈ5å5åuäõèµåuê‹ÛX™[‰Îˆˆ‹[	‰–Èœ]Y]YY‹œ™\ÙX\˜Ú[™È‹œ™XYH—Kš[˜ÛY\Êœİ]JNÜ™]\›‰Ï]ˆÛ\ÜÏH˜YÙ[ZXˆÙXİ[Û]ˆÛ\ÜÏHœ›İÈµå5èuåuæõçÈ5êuç5æOÚİ›Û™ÈÛ\ÜÏHœ[‹\İ]H‰ÊÕ–Û—JÈÜİ›Û™ÏÙ]µäuäõæuéõå5æuåuçµæuêˆ5äuêuèµåİ›Û™ÏŒŒ5ç5é5æH5êuèµåuçÈ5æuêuê5ä5çÜİ›Û™Ïˆ
\ÚXKÒ™\\Ø[[JK5æõåuç5ç5å5êµä5çµå5ç5êuèµåuçÈ5éõæuéKˆ5ç5ä5åõê5å5å5é5èµç5åˆ5å5äuäõæuéõå5å5ê5ä5êuåuè5å5çµåõê5äu¯ŒŒˆ5åõæuäõåuêH5å5êuå5æuå5çµçµêuæuæˆ5å5ê5éµå5éõæuæuçµêÈ5äuäõæuéõåuêˆ5åõäõêuåuêˆ5æuåõç5åH5ç5çµåõê5ê‹Üµå5èuåuæõçÈ5äuåuäõéÈ5çµæuäõèˆ5éµæuäuåuê5æH5èµç5çµç5åuè5åuê‹5æ5æuèuåuê‹5å5êuæõê5êˆ5ä5åué5è5åuèˆ5åuêuä5ê5å5å5åµçµè5åuêˆ5å5é5êµåuåõåuê‹ˆ5æõç5äuäõæuéõå5çµæõèuå5èµäÈ5é5ê5æuæ5æuçH5äuèuäuäH5äuæuçÈ5éõæ5äµåuê5æuåuê‹5èµçH5é5æuê5åuæ5çµå5è5äuäõéÈ5åuçµå5è5êuä5êˆ5å5äuäõæuéõå5êµåõç5èuçµåuæˆ5ç5¯ŒŒ5äuå5êµä5çH5ç5åµçµæuè5åuêˆ5å5êuæuê5åuêˆ5åuå5êµéõéµæuäKÜİ›Û™Ïµä5æuêuåuê5å5éµèµå5ä5æuè5åH5å5åµçµè5åÜİ›Û™Ïˆ5å5å5åµçµè5å5åuå5êµêuç5åuçH5çµêµäuéµèµæuçH5æuäõè5æuêˆ5äuä5êµê5å5èué5éËˆ5å5çµåõæuê5æuçH5çµêuåuèµê5æuçH5åuå5åµçµæuè5åuêˆ5äõåuê5êuêˆ5ä5æuçµåuê‹ÜµêµéõéµæuäHRH5å5åõåuäõêNˆŠÛ

‹œÜ[YÛÜ›İ
KÌL
JÈˆ5è5åuéµç5åH0­ÈŠÛ

‹œ™\Ù\™YYÛÜ›İ
KÌL
JÈˆ5êuçµåuê5æuçH0­ÈŠÛ
X]›X^
™LËJ‹œÜ[YÛÜ›İ
KJ‹œ™\Ù\™YYÛÜ›İ
JKÌL
JÈˆ5åµçµæuè5æuçKˆ5äuäõæuéõå5êuè5åõèuçµå5êµåué5æuèˆ5äuäõåuí5åË5ç5ç5ä5éõê5æuä5êˆRKÜˆŠÊ˜˜\Ù[[™P]˜Z[X›OÈˆ‰ÏÛ\ÜÏHœ[‹[›İXÙHµæuêH5ç5çµç5ä5åuç5ä5êuê5êµåõæuç5å5ä5êˆ5êuä5ç5åuçÈ5í5êµæõè5åuçÈ5æuèµäõí5æõäõæH5ç5êuçµåuê5å5èµäõé5åuêˆ5ç5çµåõéõê5å5æuåuçµæKÜ‰ÊJÙ
ÉÏ]ˆÛ\ÜÏHœ›İÈ‰ÊØË›X\

ÛK×JOO‰Ï]Ûˆ\OH˜]Ûˆˆ]KYZ[KXÛÛ›ÛH‰ÊÛJÉÈˆ	ÊÊOOOH™[˜X›HŸOOOHœ™\İ[YH‰‰ˆZ›ŠœXÚØYÙSÜ[ÛœËœ™\ÙX\˜ÚŠOÈ™\ØX›YˆˆŠJÈˆŠİÊÈØ]ÛˆŠKš›Ú[ŠˆŠJÉÏ]Ûˆ\OH˜]Ûˆˆ]K\™Yœ™\ÚYZ[Oµê5èµè5çÈ5çµéµäH5åuäõåuí5åõåuêØ]ÛÙ]]KYZ[KY™YY˜XÚÈ›ÛOHœİ]\Èˆ\šXK[]™OHœÛ]HÜÜÙXİ[Û‰ÊÔÊKš][\ËKœÙ][™ÜÊJÊÚÊ
NˆˆŠJÉÏÙXİ[Ûµäuéõêuåuêˆ5ä5æuêuåuê5åuå5éµèµåuêÚÛ\ÜÏH›]]Yµä5æuêuåuê5êuåuçµê5ä5êˆ5å5äuåõæuê5å5ç5éµåuê5æˆ5å5êµæõè5åuçÈ5åuçµé5è5å5ç5å5åµçµè5å5æuäõè5æuê‹ˆ5ä5åõê5æH5å5å5åµçµè5å5èµäõæõçÈ5ä5êˆ5ê5êuåuçµêˆ5å5å5åµçµè5å5ç5í5å5åuåµçµçõí5ä5åH5í5êuåuç5çuí5æõäõæH5ç5èµäõæõçÈ5ä5êˆ5å5å5êµéõäõçµåuê‹ˆ5êµåuéõèÈ5å5éµèµå5å5åuä5êuèµåuêˆ5çµçµåuèµäÈ5å5çµåõéõêÜ‰ÊÊK›[™İÚK›X\
OOÛ]ÏYKš][\Ë™š[™
O”šYOO[K˜›ÛÚÚ[™×ÚY
KÏ]É‰Ë™\œÚ[ÛOO[K˜›ÛÚÚ[™×İ™\œÚ[Û‰‰›Kš\İ™\œÚ[ÛOOYK™\œÚ[Û‹OQ]Kœ\œÙJK™^\™\×Ø]
OQ]K››İÊ
KÏ[Kœİ]OOOHœ[™[™È‰‰™É‰ˆ^I‰ˆVÈµå5åuåµçµçÈ‹µêuåuç5çH—Kš[˜ÛY\ÊÏO[[İ›ÚYËœ^[ØYœİ]\ÊK[K›Ù™™\ŸßNÜ™]\›‰Ï\XÛHÛ\ÜÏH™Z[K[Ù™™\ˆ]ˆÛ\ÜÏHœ›İÈÏ‰ÊÑÊ
ÏO[[İ›ÚYËœ^[ØY›˜[YJ_µå5éµèµêˆ5å5åµçµè5åŠJÈÚÏİ›Û™ÏˆŠÛ
İ[ÛÜİ
JÈÜİ›Û™ÏÙ]ˆŠÑÊœİ\Y\ŠJÈˆ0­ÈŠÑÊ›X™[
JÈÜˆŠÑÊ™]Z[ÊJÈÜˆŠÑÊOÈµé5äˆ5êµåuéõèÈ™ÏÔ–ÛKœİ]W_Kœİ]Nˆµè5êµåuè5æH5å5å5åµçµè5å5å5êuêµè5åNÈ5è5äõê5êuêˆ5äuäõæuéõå5åõäõêuåŠJÈˆ0­È5êµåuéõèÈ5èµäÈŠÑÊ]ŠK™^\™\×Ø]
JJÉÏÜ]ˆÛ\ÜÏHœ›İÈ‰ÊİY
œÛİ\˜ÙU\›µçµéõåuê5å5çµåõéõêŠJÊKœİ]OOOH˜\›İ™Y‰‰™É‰ˆ^OİY
\›µå5çµêuæˆ5ç5äuäõæuéõå5åuç5å5åµçµè5å5æuäõè5æuêˆ5ä5éµç5å5èué5éÈŠNˆˆŠJÊÏÉÏ]Ûˆ\OH˜]Ûˆˆ]K\™\]Y\İH‰ÊÑÊKšY
JÉÈˆ]K]™\œÚ[ÛH‰ÊÛK™\œÚ[ÛŠÉÈˆ]KYXÚ\Ú[ÛH˜\›İ™Yµä5êuê5å5éµèµå5ç5äuæuéµåuèˆ5æuäõè5æOØ]Û]Ûˆ\OH˜]Ûˆˆ]K\™\]Y\İH‰ÊÑÊKšY
JÉÈˆ]K]™\œÚ[ÛH‰ÊÛK™\œÚ[ÛŠÉÈˆ]KYXÚ\Ú[ÛHœ™Z™XİYµäõåõå5å5éµèµåØ]Û‰ÎˆˆŠJÈÙ]Ø\XÛOˆŸJKš›Ú[ŠˆŠNˆµèµäõæuæuçÈ5ä5æuçÈ5äuéõêuåuêˆ5ä5æuêuåuêˆ5å5çÈ5æuåué5æuèµåH5æõä5çÈ5ç5ä5åõê5äuäõæuéõå5æuåuçµæuêˆ5êuêµçµéµä5ä5é5êuê5åuæuåuêˆ5èµçH5çµéõåuê5åuê‹ÜˆŠJÈÜÙXİ[ÛÙXİ[Ûµäõåuí5åõåuêˆ5æuåuçµæuæuçOÚˆŠÊË›[™İÜË›X\
OOÛ]Ï[Kœ™\ÜßKÏ]Ë˜Ûİ™\˜YÙNÜ™]\›‰Ï]Z[ÈÛ\ÜÏH™Z[K\™\Üİ[[X\O‰ÊÑÊKœ™\ÜÙ]JJÈˆ0­ÈŠÑÊKœİ]OOOHœ]Y]YYÈµäuäõæuéõå5äuêµå5ç5æuæˆ›Kœİ]OOOH˜]ØZ][™×Ü™\İ[YHÈµçµçµêµæuçÈ5ç5å5çµêuæˆ›Kœİ]OOOHœÚÚ\YÈµç5ä5å5åué5èµç5å5äuäõæuéõåˆµå5èuêµæuæuçHŠJÈÜİ[[X\OˆŠÑÊËœİ[[X\_µçµçµêµæuçÈ5ç5êµåuéµä5åuêˆ5å5èuåuæõçÈŠJÈÜˆŠÊÏÈµè5äuäõéõåHŠÓ[X™\ŠË˜ÚXÚÙY
JÈˆ5çµêµåuæˆŠÓ[X™\ŠË›İ]İ[™[™ÊJÈˆ5å5åµçµè5åuêˆ5é5êµåuåõåuêÈŠÓ[X™\ŠË[˜ÚXÚÙY
JÈˆ5æ5ê5çH5è5äuäõéõåH5äuèuäuäH5åµåˆ5äuéõêuåuêˆ5ä5æuêuåuê5êuè5åuéµê5åNˆŠÓ[X™\ŠËœ™\]Y\İĞÜ™X]Y
JÈ‹ˆ5å5éµèµåuêˆ5êuç5ä5é5åuê5èuçµåH5æõæH5å5è5êµåuè5æuçH5å5êuêµè5åNˆŠÓ[X™\ŠËœİ[P›ÛÚÚ[™Üß
JÈ‹ˆ5å5éµèµåuêˆ5êuå5êµæuæuêuè5åH5ç5é5è5æH5å5é5ê5èuåuçNˆŠÓ[X™\ŠË™^\™YÙ™™\œß
JÈ‹ÜˆˆˆŠJÊË˜ÛÛ\][ÛÈµå5æõè5åuêˆ5äuåµçµçÈ5å5äuäõæuéõåˆŠÊË˜ÛÛ\][Û‹œ\˜Ù[OO[[Èµæ5ê5çH5å5åuäµäõê5åHË˜ÛÛ\][Û‹œ\˜Ù[
È‰HŠJÈˆ0­ÈŠİË˜ÛÛ\][Û‹˜ÛÛ\]Y
Èˆ5çµêµåuæˆŠİË˜ÛÛ\][Û‹İ[
ÈÜˆˆˆŠJÊË˜ÚXÚÜß×JK›X\
OOİ˜\ˆÎÜ™]\›ˆİ›Û™ÏˆŠÑÊ

ÏYKš][\Ë™š[™
OšYOO^K˜›ÛÚÚ[™ÒY
JOO[[İ›ÚY—Ëœ^[ØY›˜[YJ_K˜Ø]YÛÜJJÈÜİ›Û™ÏˆŠÑÊK™^[˜][ÛŠJÈÜˆŸJKš›Ú[ŠˆŠJÊËØ\›š[™Üß×JK›X\
OO‰ÏÛ\ÜÏH›]]Y‰ÊÑÊJJÈÜˆŠKš›Ú[ŠˆŠJÊ
ËœÛİ\˜Ù\ß×JK›[™İÈ[ˆŠİËœÛİ\˜Ù\Ë›X\
OOˆOˆŠİY
K\›K]JJÈÛOˆŠKš›Ú[ŠˆŠJÈİ[ˆˆˆŠJÊËœÜ[YÛÜ›İOO]›ÚYÈµèµç5åuêˆRH5çµä5åuçµêµêˆŠÛ
ËœÜ[YÛÜ›İÌL
JÊËœ™\Ù\™YYÛÜ›İÈˆ0­È5æuêµê5å5êuçµåuê5å5ç5äuæuê5åuêˆŠÛ
Ëœ™\Ù\™YYÛÜ›İÌL
NˆˆŠJÈÜˆˆˆŠJÈÙ]Z[ÏˆŸJKš›Ú[ŠˆŠNˆµèµäõæuæuçÈ5ä5æuçÈ5äõåuí5åõåuê‹ˆ5äµçH5äuäõæuéõå5êuè5åõèuçµå5äuäµç5ç5êµéõéµæuäH5ä5åH5åõåuèuê5äuè5êµåuè5æuçH5êµêµåuèµäÈ5æõä5çËÜˆŠJÈÜÙXİ[ÛÙ]ˆŸY[˜İ[Ûˆš
ØÛÛZ[™\š\™K\N›‹šY]Ôİ]Nœ^ß_J^Û]OHLKÏHLKHLKÏ[[Hˆ‹Lİš[›™\’SIÏÙXİ[Ûµå5èuåuæõçÈ5êuç5æOÚ›ÛOHœİ]\Èµæ5åuèµçÈ5çµéµäH5åuäõåuí5åõåuê¸ )ÜÜÙXİ[Û‰ÎÛ]TÏOÛ]Ï]œ]Y\TÙ[XİÜŠ–Ù]KYZ[KY™YY˜XÚ×HŠNÚÉ‰ŠË^ÛÛ[TÊ_KOJ
OOÛ]Ï]œ]Y\TÙ[XİÜŠ–Ù]KYZ[KXÛÛœÙ[HŠNÔÉ‰ŠË›Û˜Ú[™ÙOJ
OOİœ]Y\TÙ[XİÜŠ	ÖÙ]KYZ[KXÛÛ›ÛH™[˜X›H—IÊK™\ØX›YHTË˜ÚXÚÙYXË˜˜\Ù[[™P]˜Z[X›_Z›ŠËœXÚØYÙSÜ[ÛœËœ™\ÙX\˜ÚŠ_JKœ]Y\TÙ[XİÜŠ–Ù]K\™Yœ™\ÚYZ[WHŠK›Û˜ÛXÚÏJ
OOJL
NÙ›ÜŠ]HÙˆœ]Y\TÙ[XİÜ[
–Ù]KYZ[KXÛÛ›ÛHŠJRK›Û˜ÛXÚÏJ
OOÖÈ™[˜X›H‹œ™\İ[YH—Kš[˜ÛY\ÊK™]\Ù]™Z[PÛÛ›Û
I‰ˆZ›ŠËœXÚØYÙSÜ[ÛœËœ™\ÙX\˜ÚŠ_Ê

OO›‹™Z[PÛÛ›Û
KšYK™]\Ù]™Z[PÛÛ›ÛK™\œÚ[ÛŠJ_NÙ›ÜŠ]HÙˆœ]Y\TÙ[XİÜ[
–Ù]KYXÚ\Ú[Û—HŠJRK›Û˜ÛXÚÏJ
OO—Ê

OO›‹œ™]šY]ÑZ[JK™]\Ù]œ™\]Y\İ[X™\ŠK™]\Ù]™\œÚ[ÛŠKK™]\Ù]™XÚ\Ú[ÛŠJNÛ]Ï]œ]Y\TÙ[XİÜŠ–Ù]K\™Yœ™\Ú\[—HŠNÚÉ‰ŠË›Û˜ÛXÚÏJ
OOJL
JNÙ›ÜŠ]ÒKW[Ù–ÖÈ–Ù]K\]\ÙK\[—H‹œ]\ÙH—KÈ–Ù]K\™\İ[YK\[—H‹œ™\İ[YH—KÈ–Ù]KXØ[˜Ù[\[—H‹œİÜ—WJ^Û]O]œ]Y\TÙ[XİÜŠJNÑI‰ŠOOOHœ™\İ[YH‰‰ŠK™\ØX›YHZ›ŠËœXÚØYÙSÜ[ÛœËœ™\ÙX\˜ÚŠJKK›Û˜ÛXÚÏJ
OOĞOOOHœ™\İ[YH‰‰ˆZ›ŠËœXÚØYÙSÜ[ÛœËœ™\ÙX\˜ÚŠ_Ê

OO›‹™Z[PÛÛ›Û
KšYKK™\œÚ[ÛŠJ_J__KÏTÏOİ˜\ˆNÚYŠJ\™]\›ØÏTËQ]K››İÊ
NÛ]ÏR”ÓÓ‹œİš[™ÚYJÊNÚYŠÈOOY
^ÙZÎÛ]O]›İÛ™\‘Øİ[Y[˜Xİ]™Q[[Y[O]˜ÛÛZ[œÊJOĞK™]\Ù]œÙXİ[Û•XŸ
K˜ÛÜÙ\İ
‹š][K\YÙ\ÈŠOÜ‹œÙ[XİY›[
N›[VË‹‹œ]Y\TÙ[XİÜ[
‹™Z[K\™\ÜŠWK›X\

‹
OO‹›Ü[Õ‹LJNİš[›™\’SPİŠËJK‹™›Ü‘XXÚ
OŞL	‰œ]Y\TÙ[XİÜ[
‹™Z[K\™\ÜŠVŞ—I‰Šœ]Y\TÙ[XİÜ[
‹™Z[K\™\ÜŠVŞ—K›Ü[HL
_JKJ
K]JŠKI‰›İÛ™\‘Øİ[Y[˜Xİ]™Q[[Y[OO]›İÛ™\‘Øİ[Y[˜›ÙI‰Š
O]œ]Y\TÙ[XİÜŠ	ÖÙ]K\ÙXİ[Û‹]XH‰ÊÑJÉÈ—IÊJOO[[K™›Øİ\ÊÜ™]™[ØÜ›ÛˆLJJ__NÙ[˜İ[ÛˆÊ
^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^İ^Ü™]\›ˆ‹œXÚØYÙSÜ[ÛœÏŞZY[‹œXÚØYÙSÜ[ÛœÊKšY
N›[XØ]Ú
Ê^Ü™]\›ˆ[_J_Y[˜İ[ÛˆJÏHLJ^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^ÚYŠJ_ß
J^ÜÏHLİ^Û]ÚËWO^ZY[›ÛZ\ÙK˜[
Û‹™Z[Sİ™\šY]ÊKšY
KÊ
WJNİÊÙJŠßKÊKÜXÚØYÙSÜ[ÛœÎ’_JJKÉ‰š
µå5çµéµäH5èµåuäõæõçÈ5çµå5êuê5êˆŠ_XØ]Ú
Ê^ÚYŠZJZYŠXÊ]š[›™\’SIÏÙXİ[Ûµå5èuåuæõçÈ5êuç5æOÚ›ÛOH˜[\‰ÊÑÊË›Y\ÜØYÙJJÉÏÜ]Ûˆ\OH˜]Ûˆˆ]K\™]Oµè5èuå5êuåuäOØ]ÛÜÙXİ[Û‰Ëœ]Y\TÙ[XİÜŠ–Ù]K\™]WHŠK›Û˜ÛXÚÏJ
OOJL
NÙ[Ù^ØËœXÚØYÙSÜ[ÛœÏ[[Ù›ÜŠ]HÙˆœ]Y\TÙ[XİÜ[
–Ù]KYZ[KXÛÛ›ÛY[˜X›WKÙ]KYZ[KXÛÛ›Û\™\İ[YWKÙ]K\™\İ[YK\[—HŠJRK™\ØX›YHLÚ
Ë›Y\ÜØYÙJ__Yš[˜[^ÜÏHL___J_Y[˜İ[ÛˆÊÊ^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^İ˜\ˆNÚYŠ_Ê\™]\›ÛHLÛ]ÏVË‹‹œ]Y\TÙ[XİÜ[
˜]Û‹[œ]ŠWK›X\
OOŠÛ›ÙNK\ØX›YK™\ØX›YJJNÚË™›Ü‘XXÚ

Û›ÙN_JOOK™\ØX›YHL
Nİ^Û]O^ZY[Ê
KO^ZY[Ê
NİÊÙJŠßKJKÜXÚØYÙSÜ[ÛœÎ‘_JJK
µå5é5èµåuç5å5è5êuçµê5åˆ5ç5ä5äuåuéµèµå5å5åµçµè5å5ä5éµç5èué5éËˆŠ_XØ]Ú
J^Ú
K›Y\ÜØYÙJ_Yš[˜[^ÚYŠHLKZJ^ÚË™›Ü‘XXÚ

Û›ÙN‘K\ØX›Y”ŸJOOİ˜ÛÛZ[œÊJI‰ŠK™\ØX›YTŠ_JNÛ]O]œ]Y\TÙ[XİÜŠ	ÖÙ]KYZ[KXÛÛ›ÛH™[˜X›H—IÊNĞI‰ŠK™\ØX›YHJ
O]œ]Y\TÙ[XİÜŠ–Ù]KYZ[KXÛÛœÙ[HŠJHO[[	‰’K˜ÚXÚÙY
_XË˜˜\Ù[[™P]˜Z[X›_Z›ŠËœXÚØYÙSÜ[ÛœËœ™\ÙX\˜ÚŠJ___J_^J
NÛ]\Ù][\˜[


OOJ
KYLÊK\Ù][\˜[


OOØÈO[[	‰˜Ëœ[‰‰ˆZI‰šÜŠËœ[‹
_KYLÊNÜ™]\›Š
OOÚOHLÛX\’[\˜[

KÛX\’[\˜[

__]˜\ˆ\Ï]O”İš[™ÊO[[İˆˆŠKœ™\XÙJÖÉˆ‰×KÙËOOŠÈ‰ˆˆ‰˜[\È‹ˆ‰›È‹ˆˆ‰™İÈ‹	È‰Îˆ‰œ][İÈ‹‰Èˆ‰ˆÌÎNÈŸJVÙWJK]O›™]È[“[X™\‘›Ü›X]
šKRS‹Üİ[Nˆ˜İ\œ™[˜ŞH‹İ\œ™[˜ŞNˆ’SÈŸJK™›Ü›X]


KÌL
K]]Oİ^Û]O[™]ÈT“
İš[™Ê
JNÚYŠKœ›İØÛÛOOHšÎˆŸK\Ù\›˜[Y_Kœ\ÜİÛÜ™
\™]\›ˆ[Û]YKšÜİ˜[YKÓİÙ\Ø\ÙJ
NÜ™]\›ˆOOH›X\Ë™ÛÛÙÛK˜ÛÛHŸOOH›X\Ë˜\™ÛÛË™ÛŸ
OOHİİË™ÛÛÙÛK˜ÛÛHŸOOH™ÛÛÙÛK˜ÛÛHŠI‰™Kœ]˜[YKœİ\ÕÚ]
‹ÛX\ÈŠOÙKš™Y›[XØ]Ú
J^Ü™]\›ˆ[_NÙ[˜İ[ÛˆİŠØÛÛ^[[›ÜÜØ[™O[[›ØÚÙY™X\ÛÛ›Hˆ‹Ü[œHL_O^ßJ^Û]OH]H[‹Ï]ÈµèuåuæõçÈ5å5æ5æuåuçˆŠİ™\İ[˜][Û“˜[YNˆµèuåuæõçÈ5å5æ5æuåuç‹\‰‰È]ˆ]KXYÙ[[Ü[‹XÛÛ\ÜÙ\Ù]ˆšOÉÏÛ\ÜÏH˜YÙ[X›ØÚÙYˆ›ÛOHœİ]\È‰ÊÛ\ÊŸµæuêH5ç5äuåõåuê5æ5æuåuç5ç5é5è5æH5é5èµåuç5å5åµåHŠJÈÜˆˆˆ‹ÏYOÈ\XÛH]KXYÙ[\›ÜÜØ[ÏˆŠÛ\ÊK]JJÈÚÏµê5çµêˆ5ä5æuêuåuêˆŠÛ\ÊK˜\›İ˜[]™[
JÈÜµèµç5åuêˆ5çµêuåuèµê5êˆŠÓŠK˜ÛÜİYÛÜ›İ
JÉÏÜ]Ûˆ\OH˜]Ûˆˆ]KXYÙ[X\›İ™H	ÊÊOÈ™\ØX›YˆˆŠJÈµä5æuêuåuê5é5èµåuç5åØ]ÛØ\XÛOˆ‰Ï]Ûˆ\OH˜]Ûˆˆ]KXYÙ[\İ\	ÊÊ_È™\ØX›YˆˆŠJÈµå5êµåõç5êˆ5é5èµåuç5åØ]ÛˆÜ™]\›‰ÏÙXİ[Ûˆ\HœˆÛ\ÜÏH˜YÙ[\[™[ˆ\šXK[X™[YOH˜YÙ[]]HXY\ˆYH˜YÙ[]]H‰ÊÛ\ÊÊJÈÚÚXY\ˆŠÛ
ØÊÈÜÙXİ[ÛˆŸY[˜İ[Ûˆ
ÛÛ”İ\™KÛ”™\]Y\İ›‹Û“˜]šYØ]Nœ‹Û\›İ™NšKÛØ[˜Ù[œßJ^Û]]œ]Y\TÙ[XİÜŠ–Ù]KXYÙ[\İ\HŠKÏ]œ]Y\TÙ[XİÜŠ–Ù]KXYÙ[[Ü[‹XÛÛ\ÜÙ\—HŠNÚYŠ[	‰ˆXÊ\™]\›Û]]›İÛ™\‘Øİ[Y[˜Ü™X]Q[[Y[
™]ˆŠNÙš[›™\’SIÏ]ˆ]KXYÙ[]˜[œØÜš\›ÛOH›ÙÈˆ\šXK[]™OHœÛ]HÙ]]ˆÛ\ÜÏH˜YÙ[XÛÛ\ÜÙ\‹[X™[]ˆÛ\ÜÏH˜YÙ[XÛÛ\ÜÙ\ˆ^\™XH]KXYÙ[\™\]Y\İ›İÜÏHŒˆˆXÙZÛ\Hµç5äõåuäµçµåˆ5äuäõåuéÈ5ä5é5êuê5åuæuåuêˆ5ç5æuè5å5äuæ5æuåuçİ^\™XO]Ûˆ\OH˜]Ûˆˆ]KXYÙ[\İX›Z]\šXK[X™[Hµêuç5åÈ5äuéõêuå¸¡¤OØ]ÛÙ]Ù]‰Ë
ÊKœ™\XÙUÚ]

KJ
NÛ]Yœ]Y\TÙ[XİÜŠ–Ù]KXYÙ[]˜[œØÜš\HŠKYœ]Y\TÙ[XİÜŠ–Ù]KXYÙ[\™\]Y\İHŠKOYœ]Y\TÙ[XİÜŠ–Ù]KXYÙ[\İX›Z]HŠKÏ^OOİ˜\ˆËÎÛ]ÏY›İÛ™\‘Øİ[Y[˜Ü™X]Q[[Y[
œŠN×Ë™]\Ù]˜YÙ[Y\ÜØYÙOH˜YÙ[‹Ë˜\[™
µèuåuæõçÎˆŠÊ\[ÙˆOOHœİš[™ÈŞNŠOO[[İ›ÚYK^
_µå5äuéõêuå5å5êµéõäuç5å5ç5äuäõæuéõåˆŠJNÛ]J^OO[[İ›ÚYK›[šÊOO[[İ›ÚY”š™YÚYŠO[[	‰œİ\ÕÚ]
ˆÈŠJ^Û]OY›İÛ™\‘Øİ[Y[˜Ü™X]Q[[Y[
˜HŠNÒKš™Y^K^ÛÛ[^K›[šË]_µé5êµæuåõêˆ5å5çµèuæˆ‹K˜Û\ÜÓ˜[YOH˜YÙ[X[œİÙ\‹[[šÈ‹K›Û˜ÛXÚÏPOOĞKœ™]™[Y˜][

KŠœÛXÙJJJ_KË˜\[™
ˆ‹J_ZYŠ
OO[[İ›ÚYKšÚ[™
OOOH˜Xİ[Ûˆ‰‰Š
Ï^K˜Xİ[ÛŠHO[[	‰”ËšY
J^Û]O^K˜Xİ[Û‹šYOOH˜Ü™X]Wİ\ÚÈ‹O[[ÚYŠJ^Û]Y›İÛ™\‘Øİ[Y[˜Ü™X]Q[[Y[
›X™[ŠNÔ‹^ÛÛ[Hµæõåuêµê5êˆ5å5çµêuæuçµå‹OY›İÛ™\‘Øİ[Y[˜Ü™X]Q[[Y[
š[œ]ŠKK\OH^‹K›X^[™İLŒK™]\Ù]˜YÙ[\ÚÕ]OHˆ‹‹˜\[™
JKË˜\[™
ˆ‹Š_[]OY›İÛ™\‘Øİ[Y[˜Ü™X]Q[[Y[
˜]ÛˆŠNÑK\OH˜]Ûˆ‹K™]\Ù]˜YÙ[Xİ[Û^K˜Xİ[Û‹šYK^ÛÛ[Hµä5êuêŠÊK˜Xİ[Û‹›X™[µé5èµåuç5åŠKK›Û˜ÛXÚÏJ
OO˜Š[[[˜İ[ÛŠŠ
^İ˜\ˆÛ]^K˜Xİ[ÛÚYŠJ^Û]PK˜[YKš[J
NÚYŠU›[™İŒŒ
^ĞKœÙ]İ\İÛU˜[Y]JµæuêH5ç5å5åµæuçÈ5æõåuêµê5êˆ5çµêuæuçµå5èµäÈŒ5êµåuåuæuçHŠKKœ™\Ü˜[Y]J
NÜ™]\›ŸPKœÙ]İ\İÛU˜[Y]JˆŠK\ÙJŠßKK˜Xİ[ÛŠKØ\™ÜÎİ]N•_J_QK™\ØX›YHLK^ÛÛ[Hµæuåuéµê5äuéõêuêˆ5ä5æuêuåuê8 )ˆİ^Û]^ZY[JØXİ[Û”ŸJNÚYŠ
UO[[İ›ÚY•˜\›İ˜[
HO[[	‰‹šYO[[	‰•šY
^Û]ÏU˜\›İ˜[OY›İÛ™\‘Øİ[Y[˜Ü™X]Q[[Y[
™]ˆŠNÓK™]\Ù]˜YÙ[\›İ˜[SËšYKš[›™\’SROÈİ›Û™Ïµäuéõêuêˆ5ä5æuêuåuê5çµåuæõè5åÜİ›Û™ÏœÜ[µå5æ5æuåuç5ç5ä5êuåuè5åˆ5å5ä5æuêuåuê5æuæuéµåuê5ä5êˆ5å5çµêuæuçµå5å5çµåuéµäµê‹ÜÜ[ˆˆİ›Û™Ïµäuéõêuêˆ5ä5æuêuåuê5çµåuæõè5åÜİ›Û™ÏœÜ[µå5æ5æuåuç5ç5ä5êuåuè5åˆ5ä5æuêuåuê5å5äuéõêuå5ä5æuè5åH5çµäuéµèˆ5ä5êˆ5å5é5èµåuç5åÜÜ[ˆ‹I‰“K˜\[™
›İÛ™\‘Øİ[Y[˜Ü™X]Q[[Y[
˜œˆŠKµçµêuæuçµåˆŠÓË]JNÛ]Y›İÛ™\‘Øİ[Y[˜Ü™X]Q[[Y[
œŠNÑ™]\Ù]˜YÙ[\›İ˜[İ]\ÏHˆ‹œÙ]]šX]Jœ›ÛH‹œİ]\ÈŠNÛ]Y›İÛ™\‘Øİ[Y[˜Ü™X]Q[[Y[
˜]ÛˆŠNÑ‹\OH˜]Ûˆ‹‹™]\Ù]˜YÙ[š[˜[\›İ™OHˆ‹‹^ÛÛ[ROÈµä5êuê5åuéµåuê5çµêuæuçµåˆµä5êuê5äuéõêuå5äuç5äuäÈÛ]	Y›İÛ™\‘Øİ[Y[˜Ü™X]Q[[Y[
˜]ÛˆŠNÉ\OH˜]Ûˆ‹	™]\Ù]˜YÙ[Ø[˜Ù[Hˆ‹	^ÛÛ[Hµäuæ5ç5äuéõêuå‹‹›Û˜ÛXÚÏJ
OO˜Š[[[˜İ[ÛŠŠ
^Ñ‹™\ØX›YHL	™\ØX›YHL^ÛÛ[Hµçµä5êuê5äuéõêuå8 )ˆİ^Û]^ZY[JÊNÒI‰ŠO[[İ›ÚY‹œİ]JOOOHœİXØÙYYYÊ^ÛÛ[Hµå5çµêuæuçµå5è5åuéµê5å5äuæ5æuåuçˆ‹‹^ÛÛ[Hµå5çµêuæuçµå5è5åuéµê5åŠNˆRI‰ŠO[[İ›ÚY‹œİ]JOOOH˜\›İ™YÊ^ÛÛ[Hµå5äuéõêuå5ä5åuêuê5åˆ5ç5ä5äuåuéµèˆ5êuæuè5åuæH5äuæ5æuåuçˆ‹‹^ÛÛ[Hµå5äuéõêuå5ä5åuêuê5åŠNŠ^ÛÛ[ROÈµç5ä5è5æuêµçÈ5ç5ä5çµêˆ5ä5êˆ5æuéµæuê5êˆ5å5çµêuæuçµåˆ5ê5èµè5çÈ5ä5êˆ5ê5êuæuçµêˆ5å5çµêuæuçµåuêˆ5ç5é5è5æH5è5æuèuæuåuçÈ5è5åuèuèËˆˆµç5ä5è5æuêµçÈ5ç5ä5êuê5ä5êˆ5å5äuéõêuåˆ5ç5ä5äuåuéµèˆ5êuæuè5åuæKˆ‹‹™\ØX›YHLK	™\ØX›YHLJ_XØ]Ú
Š^Ñ^ÛÛ[ROÈµç5ä5è5æuêµçÈ5ç5ä5çµêˆ5ä5êˆ5æuéµæuê5êˆ5å5çµêuæuçµåˆ5ê5èµè5çÈ5ä5êˆ5ê5êuæuçµêˆ5å5çµêuæuçµåuêˆ5ç5é5è5æH5è5æuèuæuåuçÈ5è5åuèuèËˆˆµç5ä5è5æuêµçÈ5ç5ä5êuê5ä5êˆ5å5äuéõêuåˆ5ç5ä5äuåuéµèˆ5êuæuè5åuæKˆ‹‹™\ØX›YHLK	™\ØX›YHL__JK	›Û˜ÛXÚÏJ
OO˜Š[[[˜İ[ÛŠŠ
^É™\ØX›YHL‹™\ØX›YHL^ÛÛ[Hµçµäuæ5ç5äuéõêuå8 )ˆİ^Û]^ZY[ÊÊNÊO[[İ›ÚY‹œİ]JOOOH˜Ø[˜Ù[YÊ^ÛÛ[Hµå5äuéõêuå5äuåuæ5ç5åˆ5ç5ä5äuåuéµèˆ5êuæuè5åuæH5äuæ5æuåuçˆ‹	^ÛÛ[Hµå5äuéõêuå5äuåuæ5ç5åŠNŠ^ÛÛ[Hµç5ä5è5æuêµçÈ5ç5äuæ5ç5ä5êˆ5å5äuéõêuåˆ‹	™\ØX›YHLK‹™\ØX›YHLJ_XØ]Ú
Š^Ñ^ÛÛ[Hµç5ä5è5æuêµçÈ5ç5äuæ5ç5ä5êˆ5å5äuéõêuåˆ‹	™\ØX›YHLK‹™\ØX›YHL__JKK˜\[™
ˆ‹‹ˆ‹	
K˜\[™
J_Y[ÙHK™\ØX›YHLKK^ÛÛ[Hµä5êuêŠÊK˜Xİ[Û‹›X™[µé5èµåuç5åŠ_XØ]Ú

^ÑK™\ØX›YHLKK^ÛÛ[Hµè5èuå5êuåuäHŸ_JKË˜\[™
ˆ‹J_ZYŠ˜\[™
ÊK
OO[[İ›ÚYKšÚ[™
OOOHX›H‰‰Š
Ï^KX›JHO[[	‰šË˜ÛÛ[[œÊI‰\œ˜^Kš\Ğ\œ˜^JKX›Kœ›İÜÊJ^Û]OY›İÛ™\‘Øİ[Y[˜Ü™X]Q[[Y[
™]ˆŠNÒK˜Û\ÜÓ˜[YOH˜YÙ[X[œİÙ\‹]X›K]Ü˜\Û]OY›İÛ™\‘Øİ[Y[˜Ü™X]Q[[Y[
X›HŠNĞK˜Û\ÜÓ˜[YOH˜YÙ[X[œİÙ\‹]X›H‹KœÙ]]šX]J˜\šXK[X™[‹KX›K˜Ø\[ÛŸµæ5äuç5êˆ5êµåuéµä5åuêˆŠNÛ]OPK˜Ü™X]PØ\[ÛŠ
NÑK^ÛÛ[^KX›K˜Ø\[ÛŸµêµåuéµä5åuêˆÛ]PK˜Ü™X]UXY

Kš[œÙ\›İÊ
NŞKX›K˜ÛÛ[[œË™›Ü‘XXÚ
OÛ]ÏY›İÛ™\‘Øİ[Y[˜Ü™X]Q[[Y[
ŠNÓËœØÛÜOH˜ÛÛ‹Ë^ÛÛ[U‹˜\[™
Ê_JNÛ]PK˜Ü™X]U›ÙJ
NŞKX›Kœ›İÜË™›Ü‘XXÚ
OÛ]Ï^‹š[œÙ\›İÊ
NÕ™›Ü‘XXÚ

K
OOİ˜\ˆNÛ]SËš[œÙ\Ù[

K	Tİš[™ÊI‰\[ÙˆOOH›Øš™XİÊOSK^
HO[[ÖNˆˆ“HO[[ÓNˆˆŠNÑ‹^ÛÛ[IÛ]SI‰\[ÙˆOOH›Øš™XİÒ]ŠKš™YŠN›[ÚYŠŠ^Û]ÏY›İÛ™\‘Øİ[Y[˜Ü™X]Q[[Y[
˜HŠNÒËš™YP‹Ë^ÛÛ[IË\™Ù]H—Ø›[šÈ‹Ëœ™[H››ÛÜ[™\ˆ›Ü™Y™\œ™\ˆ‹‹œ™\XÙPÚ[™[ŠÊ_QOOU›[™İLI‰Š‹˜Û\ÜÓ˜[YOH˜YÙ[X[œİÙ\‹\İ]\ÈŠK	š[˜ÛY\Êµçµä5åuçµêˆŠOÑ‹™]\Ù]œİ]\ÏH™\šYšYY‰š[˜ÛY\Êµå5èµê5æõåŠOÑ‹™]\Ù]œİ]\ÏH™\İ[X]YŠ	š[˜ÛY\ÊµäuäõæuéõåŠ_	š[˜ÛY\Êµç5ä5åµåuå5åŠJI‰Š‹™]\Ù]œİ]\ÏH›™YYË\™]šY]ÈŠ_J_JKK˜\[™
JK˜\[™
J__KÏJ
OOÛ]OZ˜[YKš[J
NÚYŠ^J\™]\›Û]ÏY›İÛ™\‘Øİ[Y[˜Ü™X]Q[[Y[
œŠN×Ë™]\Ù]˜YÙ[Y\ÜØYÙOH\Ù\ˆ‹Ë^ÛÛ[Hµä5êµåˆŠŞK˜\[™
ÊNÛ]Y›İÛ™\‘Øİ[Y[˜Ü™X]Q[[Y[
œŠNŞ™]\Ù]˜YÙ[Y\ÜØYÙOH˜YÙ[‹^ÛÛ[HµèuåuæõçÎˆ5äuåuäõéÈ5ä5êˆ5å5è5êµåuè5æuçx )ˆ‹˜\[™

K˜[YOHˆ‹™›Øİ\Ê
Nİ^Û][ŠJNÔ	‰\[Ùˆ[OH™[˜İ[ÛˆÔ[ŠÏOŞœ™[[İ™J
KÊÊ_JK˜Ø]Ú


OOŞ^ÛÛ[HµèuåuæõçÎˆ5ç5ä5è5æuêµçÈ5ç5å5êuç5æuçH5ä5êˆ5å5äuäõæuéõå5æõê5äµè‹ˆŸJNŠœ™[[İ™J
KÊ
J_XØ]Ú

^Ş^ÛÛ[HµèuåuæõçÎˆ5ç5ä5è5æuêµçÈ5ç5å5êuç5æuçH5ä5êˆ5å5äuäõæuéõå5æõê5äµè‹ˆŸ_NÛK›Û˜ÛXÚÏYË˜Y]™[\İ[™\ŠšÙ^YİÛˆ‹OOŞKšÙ^OOOH‘[\ˆ‰‰ˆ^KœÚYÙ^I‰ŠKœ™]™[Y˜][

KÊ
J_JK™›Øİ\Ê
_Y[˜İ[ÛˆJÜ›ÛİÛÛ^™O[[›ÜÜØ[›[[›ØÚÙY™X\ÛÛœHˆ‹Ü[šOHLKÛ\›İ™NœÏJ
OOßKÛØ[˜Ù[›J
OOßKÛ”İ\˜ÏJ
OOßKÛ”™\]Y\İ™J
OOßKÛ“˜]šYØ]NœJ
OOß_O^ßJ^İš[›™\’SSİŠØÛÛ^™K›ÜÜØ[›‹›ØÚÙY™X\ÛÛœ‹Ü[š_JNÛ]HLKO]œ]Y\TÙ[XİÜŠ–Ù]KXYÙ[X\›İ™WHŠNÛI‰ŠK›Û˜ÛXÚÏJ
OOÚK™\ØX›Y
HLK™\ØX›YHLÊ
J_JNÛ]Ï]œ]Y\TÙ[XİÜŠ–Ù]KXYÙ[\İ\HŠNÜ™]\›ˆÉ‰ŠË›Û˜ÛXÚÏJ
OOÚË™\ØX›Y
HLË™\ØX›YHL
ÛÛ”İ\˜ËÛ”™\]Y\İ™Û“˜]šYØ]NœÛ\›İ™NœËÛØ[˜Ù[›JJ_JKI‰–
ÛÛ”İ\˜ËÛ”™\]Y\İ™Û“˜]šYØ]NœÛ\›İ™NœËÛØ[˜Ù[›JK

OOİ^ÛÛ[HˆŸ_Y[˜İ[ÛˆZ
ÙØİ[Y[ÛÛ[™OHˆ‹ÛÛÜÙN›J
OOß_O^ßJ^Û]]˜Ü™X]Q[[Y[
™]ˆŠNÜ‹˜Û\ÜÓ˜[YOH˜YÙ[[İ™\›^H‹‹š[›™\’SIÏ]ˆÛ\ÜÏH˜YÙ[[İ™\›^KX˜XÚÙ›Üˆ]KXYÙ[[İ™\›^KXÛÜÙOÙ]ÙXİ[ÛˆÛ\ÜÏH˜YÙ[[İ™\›^K]Ú[™İÈˆ›ÛOH™X[ÙÈˆ\šXK[[Ù[HYHˆ\šXK[X™[HµèuåuæõçÈ5å5æ5æuåuç]Ûˆ\OH˜]ÛˆˆÛ\ÜÏH˜YÙ[[İ™\›^KXÛÜÙHˆ]KXYÙ[[İ™\›^KXÛÜÙH\šXK[X™[Hµèuäµæuê5êˆ5èuåuæõçÈ°åÏØ]Û]ˆ]KXYÙ[[İ™\›^KXÛÛ[Ù]ÜÙXİ[Û‰Ë‹œ]Y\TÙ[XİÜŠ–Ù]KXYÙ[[İ™\›^KXÛÛ[HŠKš[›™\’SYNÛ]OJ
OOÜ‹š\ĞÛÛ›™XİY	‰Š‹œ™[[İ™J
KŠ
J_NÜ™]\›ˆ‹œ]Y\TÙ[XİÜ[
–Ù]KXYÙ[[İ™\›^KXÛÜÙWHŠK™›Ü‘XXÚ
ÏOœË›Û˜ÛXÚÏZJK˜›ÙK˜\[™
ŠKÜ›Ûİœ‹ÛÜÙNš__]˜\ˆ^ØYÙ[ØÛÛ™\œØ][Û—ÛÜ[ˆµç5ä5è5æuêµçÈ5ç5é5êµåuåÈ5êuæuåõêˆ5èuåuæõçÈ5æõê5äµè‹ˆ‹YÙ[Ø\›İ˜[ØÜ™X]Nˆµç5ä5è5æuêµçÈ5ç5æuéµåuê5äuéõêuêˆ5ä5æuêuåuê5æõê5äµè‹ˆ‹YÙ[Ø\›İ˜[Ø\›İ™Nˆµç5ä5è5æuêµçÈ5ç5ä5êuê5ä5êˆ5å5é5èµåuç5åˆ5æuæuêµæõçÈ5êuå5æ5æuåuç5å5êuêµè5åˆ‹YÙ[Ø\›İ˜[ØØ[˜Ù[ˆµç5ä5è5æuêµçÈ5ç5äuæ5ç5ä5êˆ5å5ä5æuêuåuê5æõê5äµè‹ˆ‹YÙ[İ\Ú×Ù^Xİ]Nˆµç5ä5è5æuêµçÈ5ç5ä5çµêˆ5ä5êˆ5æuéµæuê5êˆ5å5çµêuæuçµå5æõê5äµè‹ˆ‹YÙ[Ø]Y]Ü™XÛÜ™ˆµç5ä5è5æuêµçÈ5ç5ê5êuåuçH5ä5êˆ5êµåuéµä5êˆ5å5é5èµåuç5åˆŸNÙ[˜İ[ÛˆXJ
^Û]OJ‹ŠOO˜Š[[[˜İ[ÛŠŠ
^ÚYŠJO[[	‰œœÊJ]›İÈ\œ›ÜŠµêuæuê5åuêˆ5å5èuåuæõçÈ5ä5æuè5åH5åµçµæuçÈ5æõê5äµè‹ˆŠNÛ]Ù]NšK\œ›ÜœßO^ZY[œœÊ‹ŠNÚYŠÊ]›İÈ\œ›ÜŠ–Û—_µç5ä5è5æuêµçÈ5ç5å5êuç5æuçH5ä5êˆ5é5èµåuç5êˆ5å5èuåuæõçËˆŠNÜ™]\›ˆ_JNÜ™]\›ÛÜ[ÛÛ™\œØ][Û›O™J˜YÙ[ØÛÛ™\œØ][Û—ÛÜ[ˆ‹Üİš\›ˆO[[Û›[JKÜ™X]P\›İ˜[›O™J˜YÙ[Ø\›İ˜[ØÜ™X]H‹ÜØÛÛ™\œØ][Û›‹˜ÛÛ™\œØ][Û’Yİš\›‹š\Yİš\İ™\œÚ[Û›‹š\™\œÚ[Û‹Ü™\]Y\İÚY›‹œ™\]Y\İYØÛÛ[X[™ÚÚ[™›‹˜ÛÛ[X[™Ú[™Ü^[ØYÚ\Ú›‹œ^[ØY\ÚÙ^\™\×Ø]›‹™^\™\Ğ]JK\›İ™N›O™J˜YÙ[Ø\›İ˜[Ø\›İ™H‹ÜØ\›İ˜[›‹˜\›İ˜[Yİš\İ™\œÚ[Û›‹š\™\œÚ[Û‹Ü^[ØYÚ\Ú›‹œ^[ØY\ÚJK^Xİ]U\ÚÎ›O™J˜YÙ[İ\Ú×Ù^Xİ]H‹ÜØ\›İ˜[›‹˜\›İ˜[Yİš\İ™\œÚ[Û›‹š\™\œÚ[Û‹Ü^[ØYİ^›‹œ^[ØY^JKØ[˜Ù[›O™J˜YÙ[Ø\›İ˜[ØØ[˜Ù[‹ÜØ\›İ˜[›ŸJK]Y]›Oİ˜\ˆ‹KËËÜ™]\›ˆJ˜YÙ[Ø]Y]Ü™XÛÜ™‹ÜØÛÛ™\œØ][ÛŠ[‹˜ÛÛ™\œØ][Û’Y
HO[[Ü›[İš\ŠO[‹š\Y
HO[[ÚN›[ØÛÛ[X[™ÚÚ[™›‹˜ÛÛ[X[™Ú[™ØXİ[Û›‹˜Xİ[Û‹Ø\›İ˜[ŠÏ[‹˜\›İ˜[Y
HO[[ÜÎ›[İš\İ™\œÚ[ÛŠ[‹š\™\œÚ[ÛŠHO[[Û›[ØÛÜİØYÛÜ›İŠÏ[‹˜ÛÜİYÛÜ›İ
HO[[ØÎ›[Ü™\İ[Üİ]N›‹œ™\İ[İ]KÛY]Y]NŠ[‹›Y]Y]JHO[[Ùß_J___Y[˜İ[ÛˆZ
J^Ü™]\›ˆŠ\Ë\™İ[Y[Ë[˜İ[ÛŠŠÙØ]]Ø^NXİ[Û™Kš\›‹ÛÛ™\œØ][Û’YœŸJ^İ˜\ˆËÎÚYŠJHO[[	‰™KšY
_JˆO[[	‰›‹šY
_S[X™\‹š\Ò[YÙ\Š‹™\œÚ[ÛŠ_\Š]›İÈ\œ›ÜŠ“Z\ÜÚ[™È\›İ˜[ÛÛ^ŠNÛ]ÏXÜ\Ëœ˜[™ÛUURQ

KYKšYOOH˜Ü™X]Wİ\ÚÈÔİš[™Ê
ÏJÏYK˜\™ÜÊOO[[İ›ÚYË]JHO[[ÙÎˆˆŠKš[J
N›[ÚYŠKšYOOH˜Ü™X]Wİ\ÚÈ‰‰Š[›[™İŒŒ
J]›İÈ\œ›ÜŠ’[˜[Y\ÚÈ]HŠNÛ]ÏRŠØXİ[Û™KšYš\Y›‹šYš\™\œÚ[Û›‹™\œÚ[ÛŸKŞØ\™ÜÎİ]N›_NßJKR”ÓÓ‹œİš[™ÚYJÊK^ZY[Ü\ËœİXK™YÙ\İ
”ÒKLMˆ‹™]È^[˜ÛÙ\Š
K™[˜ÛÙJ
JKVË‹‹›™]ÈZ[\œ˜^J
WK›X\
OOKÔİš[™ÊMŠKœYİ\
‹ŒŠJKš›Ú[ŠˆŠKO^ZY[˜Ü™X]P\›İ˜[
ØÛÛ™\œØ][Û’Yœ‹š\Y›‹šYš\™\œÚ[Û›‹™\œÚ[Û‹™\]Y\İYœËÛÛ[X[™Ú[™ˆ›]]][Ûˆ‹^[ØY\Úš^\™\Ğ]›™]È]J]K››İÊ
JÎL
ŒYLÊKÒTÓÔİš[™Ê
_JNÚYŠJHO[[	‰›K˜\›İ˜[Y
_Kœİ]HOOHœ[™[™ÈŠ]›İÈ\œ›ÜŠ\›İ˜[Ø\È›İÜ™X]YŠNÜ™]\›Ø\›İ˜[œÙJŠÚY›K˜\›İ˜[Yš\™\œÚ[Û›‹™\œÚ[Û‹^[ØY\Úš^[ØY^™Xİ[Û’Y™KšYKŞİ]N›NßJKÙ^\™\Ğ]›K™^\™\Ğ]J__J_Y[˜İ[Ûˆ[JJ^Ü™]\›ˆŠ\Ë\™İ[Y[Ë[˜İ[ÛŠŠÙØ]]Ø^N™XÛÜ™™Kš\›‹ÛÛ™\œØ][Û’YœŸJ^İ˜\ˆÛ]Ï^ZY[˜\›İ™JØ\›İ˜[Y™KšYš\™\œÚ[ÛŠYKš\™\œÚ[ÛŠHO[[Û›‹™\œÚ[Û‹^[ØY\Ú™Kœ^[ØY\ÚJNÚYŠ
ÏO[[İ›ÚYœËœİ]JHOOH˜\›İ™YŠ\™]\›ˆÎİ^ŞZY[˜]Y]
ØÛÛ™\œØ][Û’Yœ‹š\Y›‹šYÛÛ[X[™Ú[™ˆ›]]][Ûˆ‹Xİ[Ûˆ˜YÙ[Ø\›İ˜[Ø\›İ™Y‹\›İ˜[Y™KšYš\™\œÚ[Û›‹™\œÚ[Û‹™\İ[İ]Nˆ[œ™\ÛÛ™Y‹Y]Y]NÜ™X\ÛÛˆ™^Xİ][Û—ÙØ]]Ø^WÛ›İØÛÛ›™XİYŸ_J_XØ]Ú
Ê^ß\™]\›ˆßJ_]˜\ˆÜSØš™Xİ™œ™Y^™JÓÑ‘ˆ›Ù™ˆ‹SÕˆœ[İ‹Óˆ›ÛˆŸJNÙ[˜İ[ÛˆJÛ[ÙNTÜ‹“Ñ‘‹İÛ™\’Y™OHˆ‹Xİ]™N›HLK\ÓX[˜YÙ[Y[œHLK[İÛ\İšOV×_O^ßJ^Ü™]\›ˆ[ŸŞÙ[˜X›YˆLK™X\ÛÛˆQÑS•Ô“ÓÕUĞPĞÓÕS•Ğ“ĞÒÑQŸNOOTÜ‹“ÓŞÙ[˜X›YˆL™X\ÛÛˆQÑS•Ô“ÓÕUÑSP“QŸNOOTÜ‹”SÕ	‰šKš[˜ÛY\ÊJOŞÙ[˜X›YˆL™X\ÛÛˆQÑS•Ô“ÓÕUÔSÕŸNÙ[˜X›YˆLK™X\ÛÛOOTÜ‹”SÕÈQÑS•Ô“ÓÕUÓ“ÕÒS—ÔSÕˆQÑS•Ô“ÓÕUÑTĞP“QŸ_Y[˜İ[Ûˆ

^Ü™]\›ˆŠ\Ë\™İ[Y[Ë[˜İ[ÛŠŠÙØ]]Ø^N›Ûİ]™O^ßKš\Y›[[O^ßJ^Û]]JÛ[ÙN™K›[Ù_Ü‹“Ñ‘‹İÛ™\’Y™K›İÛ™\’YXİ]™N™K˜Xİ]™K\ÓX[˜YÙ[Y[™Kš\ÓX[˜YÙ[Y[[İÛ\İ™K˜[İÛ\İ×_JNÚYŠ\‹™[˜X›Y
\™]\›ÛÚÎˆLK›ØÚÙYˆL™X\ÛÛœ‹œ™X\ÛÛŸNÚYŠ[Š\™]\›ÛÚÎˆLK›ØÚÙYˆL™X\ÛÛˆQÑS•ĞÓÓ•VÔ‘TURT‘QŸNÚYŠJO[[	‰›Ü[ÛÛ™\œØ][ÛŠJ\™]\›ÛÚÎˆLK›ØÚÙYˆL™X\ÛÛˆQÑS•ÑĞUUĞVWÕSURSP“HŸNİ^Ü™]\›ÛÚÎˆLÛÛ™\œØ][ÛZY[›Ü[ÛÛ™\œØ][ÛŠŠ__XØ]Ú
J^Ü™]\›ÛÚÎˆLK›ØÚÙYˆL™X\ÛÛˆQÑS•ÔÑTÔÒSÓ—ÕSURSP“HŸ__J_]˜\ˆ[O]O”İš[™ÊO[[İˆˆŠKš[J
K›O]O\[ÙˆOH›[X™\ˆ‰‰“[X™\‹š\Ñš[š]J
Oİ›[]O˜[J
KÓØØ[SİÙ\Ø\ÙJšHŠKœ™\XÙJÖ××LŒ—LŒWJËÙËˆŠNÙ[˜İ[Ûˆ›J^ßKO^ßJ^İ˜\ˆKËËKËÛ]]œÙ][™ÜßßKP\œ˜^Kš\Ğ\œ˜^Jš][\ÊOİš][\Î–×KOV×KÏ\‹™š[\ŠOŠO[[İ›ÚY”šÚ[™
OOOHœİÜŠK[™]ÈX\Ù›ÜŠ]ÙˆÊ^Û]ÏS[X™\Š
OTœ^[ØY
OO[[İ›ÚY›K™^JNÈS[X™\‹š\Ò[YÙ\ŠÊ_Ï_
š\ÊÊ_œÙ]
Ë×JK™Ù]
ÊKœ\Ú

J_Y›ÜŠ]Ô×[Ùˆ
TË›[™İ‰‰šKœ\Ú
ÚYˆ›İ™\›ØYYY^H‹Ù]™\š]NˆØ\›š[™È‹^N”^˜5æuåuçH	ÔH5æõåuç5ç	ÔË›[™İH5èµéµæuê5åuêÈ5æõäõä5æH5ç5äuäõåuéÈ5çµê5åuåuåõæuçK5åµçµè5æH5è5èuæuèµå5åuçµè5åuåõå˜JNÛ]Ï[™]ÈX\Ù›ÜŠ]ÙˆÊ^Û]ÏQŠ

ÏTœ^[ØY
OO[[İ›ÚYËœXÙJ_

ÏTœ^[ØY
OO[[İ›ÚY™Ë›˜[YJJNÚYŠTÊXÛÛ[YNÛ]ÏS[X™\Š
OTœ^[ØY
OO[[İ›ÚYK™^J_[OXË™Ù]
ÊNÒOÚKœ\Ú
ÚYˆ™\XØ]K\İÜ‹Ù]™\š]NˆØ\›š[™È‹^NšË^˜5å5èµéµæuê5å8 '‰Ø[J

ÏTœ^[ØY
OO[[İ›ÚY—ËœXÙJ_

Tœ^[ØY
OO[[İ›ÚY›˜[YJJ_x 'H5çµåué5æuèµå5æuåuêµê5çµé5èµçH5ä5åõê‰ÒK™^I‰šÉ‰’K™^HOOZÏØ
5æuçµæuçH	ÒK™^_H5åu¯‰ÚßJXˆˆŸK˜JN˜ËœÙ]
ËÙ^NšßJ_[]\‹™š[\ŠOİ˜\ˆÎÜ™]\›ŠO[[İ›ÚY”šÚ[™
OOOH\ÚÈ‰‰Š
ÏTœ^[ØY
OO[[İ›ÚY”Ë™Û™JHOOHLJNÙ›[™İ	‰šKœ\Ú
ÚYˆ›Ü[‹]\ÚÈ‹Ù]™\š]Nˆš[™›È‹^˜5è5êuä5ê5åH	Ù›[™İH5çµêuæuçµåuêˆ5é5êµåuåõåuêˆ5ç5äuäõæuéõå˜JNÛ][›J‹˜YÙ]
K[›JKœÜ[
NÜ™]\›ˆOO[[	‰œŒ	‰šOO[[	‰šœ	‰šK[œÚY
ÚYˆ˜YÙ][İ™\œ[ˆ‹Ù]™\š]NˆØ\›š[™È‹^˜5å5å5åuéµä5åuêˆ5å5æuäõåuèµåuêˆ5åõåuê5äµåuêˆ5äu¯‰Ê\
KÑš^Y
Š_H8 ªˆ5çµå5êµéõéµæuäH5êuå5åuäµäõê˜JKÙš[™[™ÜÎšK\ÕØ\›š[™ÜÎšKœÛÛYJO”œÙ]™\š]OOOHØ\›š[™ÈŠ__]˜\ˆ]]O\[ÙˆOHœİš[™È‰‰“[X™\‹š\Ñš[š]J]Kœ\œÙJ
JNÙ[˜İ[ÛˆÚJÛ›İÎ™OQ]K››İÊ
KX^YÙS\Î›LM
Œ
ŒYLßO^ßJ^ÚYŠ]œİ]\ÈOOH™\šYšYYŸ\[ÙˆœÛİ\˜ÙHOHœİš[™ÈŸ]œÛİ\˜ÙKš[J
_S]Š˜ÚXÚÙY]
J\™]\›ˆ[Û]YKQ]Kœ\œÙJ˜ÚXÚÙY]
NÜ™]\›ˆJL
ŒYLÊ_›Û[]˜\ˆšO^İÙX]\ŒÍŒ
Œ
ŒYLËÜ[š[™Òİ\œÎŒM
Œ
ŒYLË›İ]NŒÍŒ
ŒYLßNİ˜\ˆ˜O]O”İš[™ÊˆŠKš[J
KÓØØ[SİÙ\Ø\ÙJšHŠKÛOVŞÚYˆ™\Ú›Ø\™‹]Nˆµèuéõæuê5å‹™YˆˆÙ\Ú›Ø\™‹\›\Î–Èµèuéõæuê5å‹µç5åuåÈ5äuéõê5å‹µäõêuäuåuê5äÈ‹µçµéµäH5å5æ5æuåuç—K\ØÜš\[ÛˆµèuæuæõåuçH5çµéµäH5å5æ5æuåuç5åuå5å5æõè5åuê‹ˆŸKÚYˆ˜YÙ[‹]NˆµèuåuæõçË5ä5æuêuåuê5æuçH5åuäõåuí5åõåuêˆ‹™YˆˆØYÙ[‹\›\Î–ÈµèuåuæõçÈ‹µä5æuêuåuê5æuçH‹µäõåuí5åõåuêˆ‹µèµåµê5å5åuêµæõè5åuçÈ—K\ØÜš\[Ûˆµêuä5ç5åuê‹5å5éµèµåuêˆ5åuä5æuêuåuê5æuçH5êuç5å5èuåuæõçËˆŸKÚYˆ™^[œÙ\È‹]NˆµêµéõéµæuäH5åuå5åuéµä5åuêˆ‹™YˆˆÙ^[œÙ\È‹\›\Î–ÈµêµéõéµæuäH‹µå5åuéµä5åuêˆ‹µæõçµå5è5êuä5ê‹µæuêµê5å—K\ØÜš\[ÛˆµêµéõéµæuäH5å5æ5æuåuç5å5åuéµä5åuêˆ5åuæuêµê5åˆŸKÚYˆ˜›ÛÚÚ[™È‹]Nˆµå5åµçµè5åuêˆ‹™YˆˆØ›ÛÚÚ[™È‹\›\Î–Èµå5åµçµè5å‹µå5åµçµè5åuêˆ‹µçµç5åuçÈ‹µæ5æuèuå—K\ØÜš\[Ûˆµå5åµçµè5åuêˆ5åuèuæ5æ5åuèuæH5æ5æué5åuçˆŸKÚYˆœİÜ‹]Nˆµçµèuç5åuç5åuæuçµæuçH‹™YˆˆÜİÜ‹\›\Î–Èµçµèuç5åuç‹µêµæõè5åuçÈ5çµèuç5åuç‹µêµæõè5åuçÈ5å5æ5æuåuç‹µèµéµæuê5å‹µèµéµæuê5åuêˆ‹µæuçµæuçH—K\ØÜš\[Ûˆµêµæõè5åuçÈ5å5çµèuç5åuç5ç5é5æH5æuçµæuçH5åuèµéµæuê5åuê‹ˆŸKÚYˆœXÙH‹]Nˆµçµéõåuçµåuêˆ5åuêuæuê5åuêµæuçH‹™YˆˆÜXÙH‹\›\Î–Èµçµéõåuçµåuêˆ‹µêuæuê5åuêµæuçH‹µæuèµäÈ—K\ØÜš\[Ûˆµçµéõåuçµåuêˆ5åuêuæuê5åuêµæuçH5å5éõêuåuê5æuçH5ç5æ5æuåuçˆŸKÚYˆ™ÙX\ˆ‹]NˆµéµæuåuäÈ5åuå5äõê5æõåuêˆ‹™YˆˆÙÙX\ˆ‹\›\Î–ÈµéµæuåuäÈ‹µå5äõê5æõå‹µéµæuåuäÈ5ç5æ5æuåuç—K\ØÜš\[ÛˆµéµæuåuäË5éõæ5äµåuê5æuåuêˆ5åuå5äõê5æõåuêˆ5êuæuçµåuêKˆŸKÚYˆ\ÚÈ‹]Nˆµçµêuæuçµåuêˆ‹™Yˆˆİ\ÚÈ‹\›\Î–Èµçµêuæuçµå‹µçµêuæuçµåuêˆ‹µçµæ5ç5åuêˆ—K\ØÜš\[Ûˆµçµêuæuçµåuêˆ5é5êµåuåõåuêˆ5åuçµéµäH5å5æ5æué5åuç5äuå5çËˆŸKÚYˆ™Øİ[Y[È‹]Nˆµä5æuêuåuê5æH5ç5æuè5å‹™YˆˆÙØİ[Y[È‹\›\Î–Èµä5æuêuåuê5æH5ç5æuè5å‹µçµèuçµæõæuçH‹µä5æuêuåuê—K\ØÜš\[ÛˆµçµèuçµæõæuçH5åuä5æuêuåuê5æuçH5êuå5åuèµç5åH5ç5æ5æuåuçˆŸWKVŞÚYˆ˜Y\İÜ‹X™[ˆµå5åuèué5êˆ5èµéµæuê5å5ç5çµèuç5åuç‹\›\Î–Èµå5åuèuèÈ5èµéµæuê5å‹µå5åuèué5êˆ5èµéµæuê5å‹µéµåuê5èµéµæuê5å—K\™Ù]ˆœİÜ‹\›İ˜[ˆœ™\]Z\™YŸKÚYˆ˜Ü™X]Wİ\ÚÈ‹X™[ˆµå5åuèué5êˆ5çµêuæuçµå‹\›\Î–Èµå5åuèuèÈ5çµêuæuçµå‹µå5åuèué5êˆ5çµêuæuçµå‹µéµåuê5çµêuæuçµå—K\™Ù]ˆ\ÚÈ‹\›İ˜[ˆœ™\]Z\™YŸWK[O]OÛ]O^˜J
NÜ™]\›ˆOÜÛK›X\

‹ŠOOÛ]O[‹\›\Ë™š[\ŠÏO™Kš[˜ÛY\Ê˜JÊJJNÜ™]\›ˆK›[™İÜÙJŠßKŠKÜØÛÜ™NšK›[™İ
ŒL
ÊKš[˜ÛY\Ê˜J‹]JJOÍNŒ
K\‹ÌLJN›[JK™š[\Š›ÛÛX[ŠKœÛÜ

‹ŠOOœ‹œØÛÜ™K[‹œØÛÜ™JN–×_Kİ]OœÛK™š[™
OO™KšYOO]
_[J^ßJOOİ˜\ˆÛ]OJ

]š\
OO[[İ›ÚYœ‹š][\Ê_×JK™š[\ŠOOšKšÚ[™OOHœİÜŠKœÛÜ

KÊOOİ˜\ˆÎÜ™]\›Š[X™\Š
ZKœ^[ØY
OO[[İ›ÚY›™^J_
KJ[X™\Š
Ï\Ëœ^[ØY
OO[[İ›ÚY˜Ë™^J_
_JKYKœÛXÙJJK›X\
OOİ˜\ˆËÎÜ™]\›˜5æuåuçH	Ê
ÏZKœ^[ØY
OO[[İ›ÚYœË™^J_ÈŸNˆ	Ê
ZKœ^[ØY
OO[[İ›ÚY›œXÙJ_

ÏZKœ^[ØY
OO[[İ›ÚY˜Ë›˜[YJ_µèµéµæuê5åŸXJKš›Ú[Šˆ0­ÈŠNÜ™]\›ÚÚ[™ˆ™]H‹^˜5ä5êˆ5êµæõè5åuçÈ5å5çµèuç5åuç5å5çµç5ä5ê5åuä5æuçH5äuç5êuåuè5æuêˆ8 'µçµèuç5åuç5åuæuçµæuçx 'K‰ÙK›[™İØ5è5çµéµä5åH	ÙK›[™İH5èµéµæuê5åuê‰ÛØˆ	ÛŸIÙK›[™İOÈˆ5åuèµåuäÈˆˆŸK˜ˆ‹ˆŸXˆˆŸX[šÎšİ
œİÜŠ__KÛOJKŠOOOOLOÙN˜	İH	ÛŸXJ^ßJOOİ˜\ˆNÛ]OJ
O]š\
OO[[İ›ÚYšKš][\Ê_×KYK™š[\ŠÏOİ˜\ˆÜ™]\›ˆËšÚ[™OOH\ÚÈ‰‰Š
\Ëœ^[ØY
OO[[İ›ÚY›™Û™JHOOHLJK›[™İYK™š[\ŠÏOİ˜\ˆÜ™]\›ˆËšÚ[™OOH˜›ÛÚÚ[™È‰‰ˆVÈµå5åuåµçµçÈ‹µêuåuç5çH—Kš[˜ÛY\Ê
\Ëœ^[ØY
OO[[İ›ÚY›œİ]\Ê_JK›[™İÜ™]\›ÚÚ[™ˆ™]H‹^˜5è5çµéµä5åH	ÛÛJ‹µçµêuæuçµå5ä5åõêˆ5é5êµåuåõå‹µçµêuæuçµåuêˆ5é5êµåuåõåuêˆŠ_H5åu¯‰ÛÛJ‹µå5åµçµè5å5ä5åõêˆ5é5êµåuåõå‹µå5åµçµè5åuêˆ5é5êµåuåõåuêˆŠ_K˜[šÎšİ
™\Ú›Ø\™Š__K]J^ßJOOİ˜\ˆÛ]OJ
]š\
OO[[İ›ÚYœ‹š][\Ê_×KYK™š[\ŠOOİ˜\ˆÎÜ™]\›ˆKšÚ[™OOH\ÚÈ‰‰Š
ÏZKœ^[ØY
OO[[İ›ÚYœË™Û™JHOOHLJK›X\
OOİ˜\ˆËÜ™]\›Š
ÏZKœ^[ØY
OO[[İ›ÚYœË]J_

ZKœ^[ØY
OO[[İ›ÚY››˜[YJ_µçµêuæuçµå5ç5ç5ä5êuçHŸJNÜ™]\›ÚÚ[™ˆ™]H‹^›‹›[™İØ5èµäõæuæuçÈ5åõèuê5ç5å5êuç5æuçNˆ	Û‹š›Ú[Šˆ0­ÈŠ_K˜ˆµç5é5æH5å5è5êµåuè5æuçH5å5êuçµåuê5æuçH5ä5æuçÈ5çµêuæuçµåuêˆ5é5êµåuåõåuêˆ5æõê5äµè‹ˆ‹[šÎšİ
\ÚÈŠ__K]J^ßJOOİ˜\ˆËÛ]OJ
]š\
OO[[İ›ÚY›š][\Ê_×KS[X™\Š
JÏ]š\
OO[[İ›ÚY˜ËœÙ][™ÜÊOO[[İ›ÚY™™^\ÊK[™]ÈX\Ù›ÜŠ]ÙˆJ^ÚYŠšÚ[™OOHœİÜŠXÛÛ[YNÛ]OS[X™\Š
Zœ^[ØY
OO[[İ›ÚYœ™^JNÓ[X™\‹š\Ò[YÙ\ŠJI‰›OŒ	‰œ‹œÙ]
K
‹™Ù]
J_
JÌJ_[]OS[X™\‹š\Ò[YÙ\ŠŠI‰›ŒÛœ‹œÚ^™OÓX]›X^
‹‹œ‹šÙ^\Ê
JNŒÏVË‹‹œ‹™[šY\Ê
WKœÛÜ

JOOšÌK[VÌJK›X\

ÚWJOO˜5æuåuçH	ÚNˆ	Û_X
Kš›Ú[Šˆ0­ÈŠNÜ™]\›ÚÚ[™ˆ™]H‹^˜5å5æ5æuåuç5çµêµåuæõè5çÈ5ç5¯‰Ú_H5æuçµæuçK˜
ÊÏØ5çµèué5ê5å5èµéµæuê5åuêˆ5ç5é5æH5æuåuçNˆ	ÜßK˜ˆˆŠK[šÎšİ
œİÜŠ__KJ^ßJOOİ˜\ˆÛ]OJ

]š\
OO[[İ›ÚY›‹š][\Ê_×JK™š[\ŠOİ˜\ˆKÎÜ™]\›ˆ‹šÚ[™OOH˜›ÛÚÚ[™È‰‰‹õç5æuè5å5çµç5åuçßİ[ÙËÚK\İ
İš[™Ê

O\‹œ^[ØY
OO[[İ›ÚYšK\J_

Ï\‹œ^[ØY
OO[[İ›ÚYœË˜Ø]YÛÜJ_ˆŠJ_JK›X\
OÛ]O\‹œ^[ØYßNÜ™]\›˜	ÚKœXÙ_K›˜[Y_µçµéõåuçH5ç5æuè5å5ç5ä5éµåuæuçÈŸIÚK™^OØ
5æuåuçH	ÚK™^_JXˆˆŸXJNÜ™]\›ÚÚ[™ˆ™]H‹^™K›[™İØ5çµéõåuçµåuêˆ5å5ç5æuè5å5êuè5êuçµê5åH5äuæ5æuåuçˆ	ÙKš›Ú[Šˆ0­ÈŠ_K˜ˆµç5ä5è5êuçµê5åH5èµäõæuæuçÈ5çµéõåuçµåuêˆ5ç5æuè5å5äuæ5æuåuçˆ‹[šÎšİ
˜›ÛÚÚ[™ÈŠ__K	J^ßJOOÛ]O\›Jš\ßKÜÜ[œÜ[JNÜ™]\›ˆK™š[™[™ÜË›[™İŞÚÚ[™ˆ™]H‹^˜5äuäõæuéõêˆ5å5æ5æuåuç5çµéµä5åˆ	ÙK™š[™[™ÜË›X\
O›‹^
Kš›Ú[ŠˆŠ_X[šÎšİ
˜YÙ[Š_NÚÚ[™ˆ™]H‹^ˆµç5ä5è5çµéµä5åH5æõê5äµèˆ5äuèµæuåuêˆ5çµä5åuçµêµåuêˆ5äuè5êµåuè5æH5å5æ5æuåuç5êuè5êuçµê5åKˆ‹[šÎšİ
˜YÙ[Š__KJ^ßJOOÛ]O]š\ßKR˜Jİš\™K][\Î™Kš][\ß×_JNÚYŠ[‹œ™\]Z\™[Y[Ëİ[
\™]\›ÚÚ[™ˆ™]H‹^ˆµç5ä5å5åuäµäõê5åH5èµäõæuæuçÈ5äõê5æuêuåuêˆ5çµåuæõè5åuêˆ5ê5êuçµæuåuêˆ5ç5æ5æuåuçÈ5ç5æõçÈ5å5èuåuæõçÈ5ç5ä5çµèuçµçÈ5ä5êˆ5å5æ5æuåuç5æõçµåuæõçËˆ‹[šÎšİ
˜YÙ[Š_NÛ][‹œ™\]Z\™[Y[›İÜË™š[\ŠOOšKœİ]\ÈOOH˜ÛÛ\]Y‰‰šKœİ]\ÈOOH™^ÛYYŠK™›]X\
OO–ÚK]K‹‹šKœ™X\ÛÛœß×WJNÜ™]\›ÚÚ[™ˆ™]H‹^œ‹›[™İØ5å5æ5æuåuç5èµäõæuæuçÈ5ä5æuè5åH5çµåuæõçÈ5ç5é5æH5å5äõê5æuêuåuêˆ5êuè5êuçµê5åNˆ	Ü‹š›Ú[Šˆ0­ÈŠ_K˜˜5æõç5äõê5æuêuåuêˆ5å5çµåuæõè5åuêˆ5êuè5êuçµê5åH5å5åuêuç5çµåH
	Û‹œ™\]Z\™[Y[Ë˜ÛÛ\]YKÉÛ‹œ™\]Z\™[Y[Ëİ[JNÈ5åµåH5ä5æuè5å5äuäõæuéõêˆ5èué5éÈ5ä5åH5äuæ5æuåõåuêˆ5åõæuéµåuè5æuê‹˜[šÎšİ
˜YÙ[Š__KJ
OOŠÚÚ[™ˆ™]H‹^ˆµå5èuåuæõçÈ5çµé5ê5æuäÈ5äuæuçÈ5è5êµåuè5æuçH5êuè5êuçµê5åH5äuæ5æuåuç5åõæuêuåuäuæuçH5çµéõåuçµæuæuçK5çµæuäõèˆ5êuè5çµèuê5èµç5æuäõæH5å5çµêuêµçµêH5åuçµåõéõê5åõæuéµåuè5æKˆ5è5êµåuçÈ5çµéõåuçµæH5çµèuåuçµçÈ5æõçµä5åuçµêˆ5ç5é5æH5å5ê5êuåuçµåÈ5çµê5åõéÈ5çµèuåuçµçÈ5çµä5åuçµêˆ5ê5éÈ5ç5ä5åõê5êµêuåuäuêˆ5èué5éÈ5çµé5åuêÈ5çµåõæuê5åµçµæuè5åuê‹5êuèµåuêˆ5é5êµæuåõå5åuçµåµäˆ5ä5åuåuæuê5äõåuê5êuæuçH5çµéõåuê5åuêµä5ê5æuæˆ5äuäõæuéõåˆ5å5èuåuæõçÈ5ç5ä5çµéµæuäˆ5å5éµèµå5éõæuêuåuê5ä5åH5äõæuåuåuåÈ5çµêuêµçµêH5æõå5åµçµè5å5ä5åH5æõêµêuç5åuçH5êuäuåuéµèµåKˆ‹[šÎšİ
˜YÙ[Š_JK\]OŠÚÚ[™ˆ™]H‹^˜5å5êuä5ç5å5äõåuê5êuêˆ5èué5éÈ5åõæuéµåuè5æH
	İJK5ä5æˆ5ä5æuçÈ5æõê5äµèˆ5êµåuéµä5êˆ5èué5éÈ5çµä5åuçµêˆ5åµçµæuè5åˆ5æuêH5ç5å5äµäõæuê5åuç5äuäõåuéÈ5ä5êˆ5å5èué5éÈ5äuçµèuæˆ5å5è5æuå5åuç5ç5é5è5æH5êuä5éµæuäˆ5êµåõåµæuêˆ5ä5åH5êuèµåuêˆ5é5êµæuåõåˆ5ç5ä5å5åuçµéµä5çµæuäõè‹˜[šÎ›[JKJ^ßJOOİ˜\ˆËNÛ]OSÚJÙX]\‹ÛX^YÙS\Î”šKÙX]\ŸJNÚYŠY_P\œ˜^Kš\Ğ\œ˜^JK™›Ü™XØ\İ^\Ê_YK™›Ü™XØ\İ^\Ë›[™İ
\™]\›ˆ\Šµçµåµäˆ5ä5åuåuæuêŠNÛ]YK™›Ü™XØ\İ^\ÖÌ_ßK[‹™\Ü^Q]OØ	Û‹™\Ü^Q]K™^_KÉÛ‹™\Ü^Q]K›[ÛXˆµå5æuåuçH‹OJ
ÏJ[‹™^][YQ›Ü™XØ\İ
OO[[İ›ÚY›ÙX]\ÛÛ™][ÛŠOO[[İ›ÚY˜Ë™\ØÜš\[ÛŠ_

J[‹™^][YQ›Ü™XØ\İ
OO[[İ›ÚY™ÙX]\ÛÛ™][ÛŠOO[[İ›ÚYœ\J_

[‹ÙX]\ÛÛ™][ÛŠOO[[İ›ÚYš™\ØÜš\[ÛŠ_

O[‹ÙX]\ÛÛ™][ÛŠOO[[İ›ÚY›K\JKÏ]\[ÙˆOOHœİš[™ÈÚNŠOO[[İ›ÚYšK^
_
OO[[İ›ÚYšK›˜[YJ_µêµè5ä5æH5çµåµäˆ5å5ä5åuåuæuê5å5êµéõäuç5åH5ç5ç5ä5êµæuä5åuêÜ™]\›ÚÚ[™ˆ™]H‹^˜5êµåõåµæuêˆ5çµä5åuçµêµêˆ5ç5¯‰ÜŸNˆ	ÜßKˆ5çµéõåuêˆ	ÙKœÛİ\˜Ù_µèué5éÈ5çµåµäˆ5å5ä5åuåuæuêŸNÈ5è5äuäõéÈ5äu¯‰ÙK˜ÚXÚÙY]µçµåuèµäÈ5ç5ä5æuäõåuèˆŸK˜[šÎšİ
˜YÙ[Š__KœÏJO^ßJOO‹õçµåµä—Êµåõä5åuåOõæuê5êµåõåµæuêŸ5äµêuç_5æ5çµé5ê5æ5åuê5åË\İ
˜J
JOÕŠJN›[J^ßJOOİ˜\ˆÛ]OSÚJ›Ü[š[™Òİ\œËÛX^YÙS\Î”šK›Ü[š[™Òİ\œßJNÚYŠYJ\™]\›ˆ\Šµêuèµåuêˆ5é5êµæuåõåŠNÛ]YKÙYZÙ^Q\ØÜš\[Ûœß

YKœ™Yİ[\“Ü[š[™Òİ\œÊOO[[İ›ÚYœ‹ÙYZÙ^Q\ØÜš\[ÛœÊNÜ™]\›ˆP\œ˜^Kš\Ğ\œ˜^JŠ_[‹›[™İÑ\Šµêuèµåuêˆ5é5êµæuåõåŠNÚÚ[™ˆ™]H‹^˜5êuèµåuêˆ5å5é5êµæuåõå5å5çµä5åuçµêµåuêˆ5êuç	ÙKœXÙS˜[Y_µå5çµéõåuçHŸNˆ	Û‹š›Ú[Šˆ0­ÈŠ_Kˆ5çµéõåuêˆ	ÙKœÛİ\˜Ù_‘ÛÛÙÛHXÙ\ÈTHŸNÈ5è5äuäõéÈ5äu¯‰ÙK˜ÚXÚÙY]µçµåuèµäÈ5ç5ä5æuäõåuèˆŸK˜[šÎšİ
˜YÙ[Š__KOJO^ßJOO‹õêuèµåuê‹Šµé5êµæuåõå5é5êµåuåÈ5å5æuåuç_5çµêµæH5é5êµåuåß5ä5æuê5åuèµæuçKË\İ
˜J
JOÖŠJN›[Ù[˜İ[ÛˆJO^ßJ^Û]^˜J
K^‹™š[™
O›\›\ËœÛÛYJÏO›‹š[˜ÛY\Ê˜JÊJJJNÚYŠŠ\™]\›ÚÚ[™ˆ˜Xİ[Ûˆ‹^˜5ä5é5êuê5ç5äuéµèˆ5ä5êˆ5å5é5èµåuç5å8 '‰Ü‹›X™[x 'K5ä5æˆ5è5äõê5êH5ä5æuêuåuê5çµé5åuê5êH5ç5é5è5æH5êuæuè5åuæH5å5æ5æuåuç˜Xİ[Ûœ‹[šÎšİ
‹\™Ù]
_NÚYŠ‹š[˜ÛY\Êµçµä5äõæuçHŠJ\™]\›ÚÚ[™ˆ[šÛ›İÛˆ‹^ˆµç5ä5çµéµä5êµæH5êµêuåuäuå5çµä5åuçµêµêˆ5ç5êuä5ç5å5å5åµåH5äuæuæõåuç5åuêˆ5å5èuåuæõçËˆ‹[šÎ›[NÚYŠõçµåµä‹õå5ä5åuåuæuê5çµåµäˆ5ä5åuåuæuê5êµåõåµæuêŸ5äµêuç_5æ5çµé5ê5æ5åuê5åË\İ
ŠJ\™]\›ˆ\Šµçµåµäˆ5ä5åuåuæuêŠNÚYŠõêuèµåuê‹Šµé5êµæuåõå5é5êµåuåÈ5å5æuåuç_5çµêµæH5é5êµåuåß5ä5æuê5åuèµæuçKË\İ
ŠJ\™]\›ˆ\Šµêuèµåuêˆ5é5êµæuåõåŠNÚYŠõêµè5åuèµå5é5éõéõæuç_5èµåuçµèH5äuæõäuæuê_5åµçµçÈ5è5èuæuèµå5èµæõêuæuåKË\İ
ŠJ\™]\›ˆ\Šµêµè5åuèµåŠNÚYŠõä5çµæuè5åuêŸ5çµéõåuê5åuêŸ5çµä5åuçµêŸ5çµä5åuçµêµæuç_5çµå5äuäõåuéËË\İ
ŠJ\™]\›ˆŠ
NÚYŠõçµåuæõçß5çµåuæõè5åuêŸ5çµåuæõè5æuç_5å5æõè5å5ç5æuéµæuä5å5åõèuê5éµæuåuäËË\İ
ŠJ\™]\›ˆŠJNÚYŠõçµå5å5äuèµæuåuêŸ5äuèµæuåuêˆ5äuæ5æuåuç5äuèµæuåuêˆ5äuêµæõè5åuçß5å5êµæõè5åuçÈ5çµä5åuåµçß5æuêH5æõé5æuç5åuæuåuêŸ5äuäõåuéÈ5ä5êˆ5å5æ5æuåuç5è5æuêµåuåÈ5å5æ5æuåuçË\İ
ŠJ\™]\›ˆ	ŠJNÚYŠõçµå5åõèuê5çµå5è5êuä5ê5ç5å5êuç5æuç_5çµå5èµåuäÈ5éµê5æuæ‹Ë\İ
ŠJ\™]\›ˆ]ŠJNÚYŠõä5æué5å5æuêuè5æuç_5çµéõåuçµåuêˆ5ç5æuè5å5ç5æuè5å5çµç5åuçËË\İ
ŠJ\™]\›ˆŠJNÚYŠõæõçµåŠµæuçµæuç_5çµêuæˆ5å5æ5æuåuç5èµéµæuê5åuêˆ5äuæõç5æuåuçKË\İ
ŠJ\™]\›ˆ]ŠJNÚYŠõæõçµåŠŠ5çµêuæuçµåuêŸ5å5åµçµè5åuêŠ_5çµéµäKŠŠ5çµêuæuçµåuêŸ5å5åµçµè5åuêŠ_5é5êµåuåõåuê‹Ë\İ
ŠJ\™]\›ˆŠJNÚYŠõä5æué5å5é5êµåß5èµäuåuê5êµèµäuæuê5ç5å5äµæuè‹Ë\İ
ŠJ^Û]Z[JŠNÚYŠ›[™İ
\™]\›ÚÚ[™ˆ›˜]šYØ]H‹^˜5ä5é5êuê5ç5èµäuåuê5ç5çµèuæˆ8 '‰ÛÌK]_x 'K˜[šÎ›Ì__ZYŠõêµéõéµæuä_5è5êuä5ê5æuêµê5åË\İ
ŠJ^Û]S[X™\ŠK˜YÙ]
KÏS[X™\ŠKœÜ[
NÜ™]\›ˆ[X™\‹š\Ñš[š]J
I‰“[X™\‹š\Ñš[š]JÊOŞÚÚ[™ˆ™]H‹^˜5æuêµê5êˆ5å5êµéõéµæuäH5ç5ä5åõê5å5åuéµä5åuêˆ	ÊXÊKÑš^Y
Š_H8 ª‹˜[šÎšİ
™^[œÙ\ÈŠ_NÚÚ[™ˆ™]H‹^ˆµç5ä5å5åuäµäõê5êµéõéµæuäH5çµèué5æuéÈ5æõäõæH5ç5åõêuäH5æuêµê5åˆ‹[šÎšİ
™^[œÙ\ÈŠ__ZYŠõçµèuç5åuç5êµæõè5åuçÈ5å5çµèuç5åuç5êµæõè5åuçÈ5å5æ5æuåuç5èµéµæuê5åuêŸ5ä5æuæ‹Šµê5åuä5åË\İ
ŠJ\™]\›ˆŠJNÛ]ÏZ[JŠNÜ™]\›ˆË›[™İŞÚÚ[™ˆ›[šÈ‹^˜5å5çµèuæˆ5å5çµêµä5æuçH5å5åuä8 '‰ÜÖÌK]_x 'H8 %	ÜÖÌK™\ØÜš\[ÛŸX[šÎœÖÌ_NÚÚ[™ˆ[šÛ›İÛˆ‹^ˆµç5ä5çµéµä5êµæH5êµêuåuäuå5çµä5åuçµêµêˆ5ç5êuä5ç5å5å5åµåH5äuæuæõåuç5åuêˆ5å5èuåuæõçËˆ‹[šÎ›[_]˜\ˆ\]Oİ˜\ˆKÜ™]\›ŠO[[İ›ÚYšÚ[™
OOOH˜›ÛÚÚ[™È‰‰‹õç5æuè5å5çµç5åuçßİ[ÙËÚK\İ
İš[™Ê

O]œ^[ØY
OO[[İ›ÚY™K\J_

]œ^[ØY
OO[[İ›ÚY›‹˜Ø]YÛÜJ_ˆŠJ_K]Oİ˜\ˆK‹Ü™]\›Š
O]O[[İ›ÚYœ^[ØY
OO[[İ›ÚY™KœXÙJ_

]O[[İ›ÚYœ^[ØY
OO[[İ›ÚY›‹›˜[YJ_

]O[[İ›ÚYœ^[ØY
OO[[İ›ÚYœ‹]J_µç5ç5ä5êuçHŸK]Oİ˜\ˆNÜ™]\›ˆ[X™\Š
O]O[[İ›ÚYœ^[ØY
OO[[İ›ÚY™K™^J_K]O\[ÙˆOHœİš[™È‰‰‹×—ÍKWÌŸKWÌŸIË\İ

Oİˆµç5ä5å5åuäµäõê‹İJJOOÛ]Q]Kœ\œÙJ
È•ŒŒˆŠKQ]Kœ\œÙJJÈ•ŒŒˆŠNÜ™]\›ˆ[X™\‹š\Ñš[š]JŠI‰“[X™\‹š\Ñš[š]JŠI‰œ›Ê‹[ŠKÎMN›[KY]O”İš[™ÊˆŠKÓØØ[SİÙ\Ø\ÙJšHŠKœ™\XÙJÖø $ø %0­ß

V×^ßWKÙËˆŠKœ™\XÙJ×ÊËÙËˆŠKš[J
KOJJOOÛ][Y

KTİš[™Ê
J_ˆŠKO[Y
ŠKÏ[Y
‹œÜ]
×ÊËWÊßÊø $×ÊßÊø %ÊËÊVÌJNÜ™]\›ˆHJ‰‰ŠI‰›‹š[˜ÛY\ÊJ_É‰›‹š[˜ÛY\ÊÊ_I‰šKš[˜ÛY\ÊŠJJ_NÙ[˜İ[ÛˆÛJİš\™O^ßKİ[[X\N›^ßK]Y\NœHˆŸO^ßJ^İ˜\ˆÛ]OP\œ˜^Kš\Ğ\œ˜^JKš][\ÊOÙKš][\Î–×KÏYKœÙ][™ÜßßNÚYŠOOH™Ù]İš\Ù]Z[ÈŠ\™]\›ÚÚ[™ˆ™]H‹^˜5æuèµäÈ5å5æ5æuåuçˆ	ÙK™\İ[˜][Û—Û˜[Y_K™\İ[˜][ÛŸK™\İ[˜][Û“˜[Y_µç5ä5å5åuäµäõêŸKˆ5êµä5ê5æuæˆ5æuéµæuä5åˆ	Ú
Ëœİ\
_Kˆ5çµêuæˆ	Ó[X™\ŠË™^\ÊOŒÜË™^\ÊÈˆ5æuçµæuçHˆµç5ä5å5åuäµäõêŸK˜NÚYŠOOH™Ù]Ù^WÜ[ˆŠ^Û]ÏTİš[™ÊŠK›X]Ú
õæuåuçWÊŠ
ÊKÊKXÏÓ[X™\ŠÖÌWJN›[ÚYŠY
\™]\›ÚÚ[™ˆ™]H‹^ˆµæuêH5ç5éµæuæuçÈ5çµèué5ê5æuåuçH5æõäõæH5ç5å5éµæuäˆ5ä5êˆ5å5êµåuæõè5æuêˆ5êuç5åKˆŸNÛ]ZK™š[\ŠOššÚ[™OOHœİÜ‰‰•Š
OOOY
K›X\

NÜ™]\›ÚÚ[™ˆ™]H‹^œ›[™İØ5êµåuæõè5æuêˆ5æuåuçH	ÙNˆ	Üš›Ú[Šˆ0­ÈŠ_K˜˜5ç5ä5è5êuçµê5åH5èµéµæuê5åuêˆ5ç5æuåuçH	ÙK˜_ZYŠOOH™Ù]ÜİÜ×ØWÙ^HŠ^Û]Ï[™]ÈX\Ü™]\›ˆK™š[\ŠOœšÚ[™OOHœİÜŠK™›Ü‘XXÚ
OÛ]UŠ
_ÈØËš\Ê
_ËœÙ]
×JKË™Ù]

Kœ\Ú


J_JKÚÚ[™ˆ™]H‹^–Ë‹‹˜×KœÛÜ


OO“[X™\ŠÌJKS[X™\ŠÌJJK›X\

ÜJOO˜5æuåuçH	ÜNˆ	Úš›Ú[Šˆ0­ÈŠ_X
Kš›Ú[ŠˆŠ_µç5ä5è5êuçµê5åH5èµéµæuê5åuêˆ5äuçµèuç5åuçˆŸ_ZYŠOOH™Ù]ÛÙÚ[™×Üİ[[X\HŠ^Û]ÏZK™š[\Š\ŠK›X\

NÜ™]\›ÚÚ[™ˆ™]H‹^˜Ë›[™İØ5çµéõåuçµåuêˆ5å5ç5æuè5å5êuè5êuçµê5åNˆ	ØËš›Ú[Šˆ0­ÈŠ_K˜ˆµç5ä5è5êuçµê5åH5çµéõåuçµåuêˆ5ç5æuè5å5äuæ5æuåuçˆŸ_ZYŠOOH™Ù]ÛÙÚ[™×Ù]\ÈŠ^Û]ÏZK™š[\Š\ŠKXË™š[\ŠO™J‹
JKJ›[™İÙ˜ÊK›X\
OÛ]OZœ^[ØYßKÏ[K˜ÚXÚÒ[‘]_Kœİ\]KÏ[K˜ÚXÚÓİ]]_K™[™]KO[K˜ÚXÚÒ[•[Y_K˜\œš]˜[[YKÏ[K˜ÚXÚÓİ][Y_K™\\\™U[YNÜ™]\›˜	Ú

_H8 %5æõè5æuèuå	Ú
Ê_IŞOØ5äuêuèµå	Ş_Xˆˆ
5êuèµêˆ5æõè5æuèuå5ç5ä5å5åuåµè5å
HŸK5æuéµæuä5å	Ú
Ê_I×ÏØ5äuêuèµå	×ßXˆˆŸXJNÜ™]\›ÚÚ[™ˆ™]H‹^œ›[™İÙ›[™İØ5é5ê5æ5æH5å5ç5æuè5å5èµäuåuê	Ú
ÌJ_Nˆ	ÜÌ_K˜˜5êµä5ê5æuæõæH5å5ç5æuè5å5êuè5êuçµê5åNˆ	Üš›Ú[Šˆ0­ÈŠ_K˜ˆµç5ä5è5êuçµê5åH5êµä5ê5æuæõæH5ç5æuè5å5äuæ5æuåuçˆŸ_ZYŠOOH™Ù]ÛÙÚ[™×ØÚXÚÚ[ˆŠ^Û]ÏZK™š[\Š\ŠK™š[™
O™J‹
JNÚYŠXÊ\™]\›ÚÚ[™ˆ™]H‹^ˆµæuêH5ç5éµæuæuçÈ5ä5êˆ5êuçH5å5çµç5åuçÈ5æõäõæH5ç5äuäõåuéÈ5ä5êˆ5åµçµçÈ5å5æõè5æuèuåˆŸNÛ]XËœ^[ØYßKY˜ÚXÚÒ[•[Y_˜\œš]˜[[YNÜ™]\›ÚÚ[™ˆ™]H‹^œØ5åµçµçÈ5å5æõè5æuèuå5ç5çµç5åuçÈ	Ú
Ê_Nˆ	ÜK˜˜5ç5ä5è5êuçµê5åµçµçÈ5æõè5æuèuå5ç5çµç5åuçÈ	Ú
Ê_H5äuå5åµçµè5å˜_ZYŠOOH˜Ø[İ[]WÛÙÚ[™×ÛšYÚÈŠ^Û]ÏZK™š[\Š\ŠK›X\
OÛ]Yœ^[ØYßKUİŠ˜ÚXÚÒ[‘]_œİ\]_ˆ‹˜ÚXÚÓİ]]_™[™]_ˆŠNÜ™]\›˜	Ú

_H8 %	ÚOO[[Èµçµèué5ê5ç5æuç5åuêˆ5ç5ä5è5æuêµçÈ5ç5åõæuêuåuäHš
Èˆ5ç5æuç5åuêˆŸXJNÜ™]\›ÚÚ[™ˆ™]H‹^˜Ë›[™İØ5çµèué5ê5å5ç5æuç5åuêˆ	ØËš›Ú[Šˆ0­ÈŠ_K˜ˆµç5ä5è5êuçµê5åH5êµä5ê5æuæõæH5ç5æuè5åˆŸ_ZYŠOOH™Ù]ÜØ]™YÛÙÚ[™×ÜšXÙ\ÈŠ^Û]ÏZK™š[\Š\ŠK›X\
Oİ˜\ˆKÎÛ]Yœ^[ØYßKJÏJO\œšXÙJHO[[ÛNœ˜ÛÜİ
HO[[İÎœİ[Ü™]\›˜	Ú

_H8 %	ÚOO]›ÚYÈµçµåõæuê5ç5ä5è5êuçµêš
ÈˆŠÊ˜İ\œ™[˜Ş_¸ ªˆŠ_XJNÜ™]\›ÚÚ[™ˆ™]H‹^˜Ë›[™İØ5çµåõæuê5æH5å5ç5æuè5å5å5êuçµåuê5æuçNˆ	ØËš›Ú[Šˆ0­ÈŠ_K˜ˆµç5ä5è5êuçµê5åH5å5åµçµè5åuêˆ5ç5æuè5åˆŸ_ZYŠOOH™Ù]Ø›ÛÚÚ[™×Üİ]\ÈŠ^Û]ÏZK™š[\ŠOœšÚ[™OOH˜›ÛÚÚ[™ÈŠKXË™š[\ŠOİ˜\ˆÜ™]\›ˆVÈµå5åuåµçµçÈ‹µêuåuç5çH‹µçµä5åuêuê—Kš[˜ÛY\Êİš[™Ê

\œ^[ØY
OO[[İ›ÚYšœİ]\Ê_œİ]\ßˆŠJ_JK›[™İÜ™]\›ÚÚ[™ˆ™]H‹^˜5è5çµéµä5åH	ØË›[™İH5å5åµçµè5åuêˆ5äuæ5æuåuçÈ	ÙH5èµäõæuæuçÈ5äõåuê5êuåuêˆ5æ5æué5åuçˆ5å5è5êµåuçÈ5çµäuåuèuèH5èµç5å5ê5êuåuçµåuêˆ5å5çµéõåuçµæuåuêˆ5äuç5äuäË˜_ZYŠOOH™Ù]ØYÙ]Üİ[[X\HŠ^Û]ÏS[X™\ŠË˜YÙ]
KS[X™\Š‹œZY
NÜ™]\›ˆS[X™\‹š\Ñš[š]JÊ_S[X™\‹š\Ñš[š]J
OŞÚÚ[™ˆ™]H‹^ˆµç5ä5å5åuäµäõê5åH5çµèué5æuéÈ5è5êµåuè5æH5êµéõéµæuäH5æõäõæH5ç5åõêuäH5æuêµê5åˆŸNÚÚ[™ˆ™]H‹^˜5êµéõéµæuäH5å5æ5æuåuçˆ	ØËÑš^Y
Š_H8 ª‹ˆ5å5åuéµä5åuêˆ5êuè5èué5ê5åNˆ	ÙÑš^Y
Š_H8 ª‹ˆ5æuêµê5å5çµåõåuêuäuêˆ	ÊËY
KÑš^Y
Š_H8 ª‹˜_ZYŠOOH™Ù]İ\Ú×Üİ]\ÈŠ^Û]ÏZK™š[\ŠOœšÚ[™OOH\ÚÈŠKXË™š[\ŠOİ˜\ˆÜ™]\›Š
\œ^[ØY
OO[[İ›ÚYš™Û™JHOOHLJK›X\

NÜ™]\›ÚÚ[™ˆ™]H‹^™›[™İØ5çµêuæuçµåuêˆ5é5êµåuåõåuêˆ	Ùš›Ú[Šˆ0­ÈŠ_K˜ˆµä5æuçÈ5çµêuæuçµåuêˆ5é5êµåuåõåuêˆ5äuê5êuåuçµåuêˆ5å5çµéõåuçµæuåuê‹ˆŸ_ZYŠOOH™Ù]ÛZ\ÜÚ[™×Ù]HŠ^Û]ÏV×NÜ™]\›ˆËœİ\Ëœ\Ú
µêµä5ê5æuæˆ5æuéµæuä5åŠK[X™\ŠË™^\Ê_Ëœ\Ú
µçµêuæˆ5å5æ5æuåuçŠKKœÛÛYJ\Š_Ëœ\Ú
µçµéõåuçH5ç5æuè5åŠKÚÚ[™ˆ™]H‹^˜Ë›[™İØ5çµæuäõèˆ5êuèµäõæuæuçÈ5åõèuêˆ	ØËš›Ú[Šˆ0­ÈŠ_K˜ˆµç5ä5åµåuå5å5çµæuäõèˆ5äuèuæuèuæH5åõèuê5äuê5êuåuçµåuêˆ5å5çµéõåuçµæuåuê‹ˆŸ_ZYŠOOH™Ù]ÜÛİ\˜ÙWÜİ]\ÈŠ\™]\›ÚÚ[™ˆ™]H‹^ˆµå5èuåuæõçÈ5çµé5ê5æuäÈ5äuæuçÈ5è5êµåuè5æuçH5êuè5êuçµê5åH5äuæ5æuåuç5åõæuêuåuäuæuçH5çµéõåuçµæuæuçH5åuçµæuäõèˆ5åõæuéµåuè5æKˆ5çµåõæuê5åµçµæuè5åuê‹5çµåµäˆ5ä5åuåuæuê5åuêuèµåuêˆ5é5êµæuåõå5çµåuéµäµæuçH5æõçµä5åuçµêµæuçH5ê5éÈ5ç5ä5åõê5éõäuç5êˆ5çµéõåuê5åuêµä5ê5æuæˆ5äuäõæuéõåˆŸNÚYŠOOH™Ù]İÙX]\—Üİ]\ÈŠ^Û]ÏJYKœÙ][™ÜÊOO[[İ›ÚY›ÙX]\Ü™]\›ÚÚ[™ˆ™]H‹^˜É‰\œ˜^Kš\Ğ\œ˜^JË™›Ü™XØ\İ^\ÊI‰˜Ë™›Ü™XØ\İ^\Ë›[™İŒÈµéõæuæuçµêˆ5êµåõåµæuêˆ5êuçµåuê5å5äuæ5æuåuçÈ5æuêH5ç5äuäõåuéÈ5ä5êˆ5åµçµçÈ5å5äuäõæuéõå5ç5é5è5æH5êuæuçµåuêKˆˆµä5æuçÈ5æõê5äµèˆ5êµåõåµæuêˆ5êuçµåuê5å5åuçµä5åuçµêµêˆ5äuæ5æuåuçˆ5êµåõåµæuêˆ5çµèµäuê5ç5¯ŒL5æuçµæuçH5ä5æuè5å5åµçµæuè5åˆŸ_ZYŠOOH˜ÚXÚ×Ú[™›Ü›X][Û—Ùœ™\Ú™\ÜÈŠ^Û]ÏZK™›]X\
Oİ˜\ˆNÜ™]\›ˆ\œ˜^Kš\Ğ\œ˜^J
OZœ^[ØY
OO[[İ›ÚY›KœÛİ\˜Ù\ÊOÚœ^[ØYœÛİ\˜Ù\Î–×_JKQ]K››İÊ
NÚYŠXË›[™İ
\™]\›ÚÚ[™ˆ™]H‹^ˆµç5ä5è5êuçµê5åH5çµéõåuê5åuêˆ5åõæuéµåuè5æuæuçH5êuè5æuêµçÈ5ç5äuäõåuéÈ5ä5êˆ5ê5èµè5è5åuêµçKˆŸNÛ]XË™š[\ŠOˆZœ™]šY]™Y]S[X™\‹š\Ñš[š]J]Kœ\œÙJœ™]šY]™Y]
J_Q]Kœ\œÙJœ™]šY]™Y]
OÊMJK›[™İÜ™]\›ÚÚ[™ˆ™]H‹^œØ5è5çµéµä5åH	ÜH5çµéõåuê5åuêˆ5æuêuè5æuçH5ä5åH5åõèuê5æH5åµçµçÈ5äuäõæuéõåÈ5æuêH5ç5äuéµèˆ5çµåõéõê5åõåuåµê˜ˆµå5çµéõåuê5åuêˆ5êuè5êuçµê5åH5è5äuäõéõåH5äuçµå5ç5æˆ5êuäuèµêˆ5å5æuçµæuçH5å5ä5åõê5åuè5æuçKˆŸ_ZYŠOOH™Ù]Ù›YÚÙ]Z[ÈŠ^Û]ÏZK™š[\ŠOİ˜\ˆNÜ™]\›ˆšÚ[™OOH˜›ÛÚÚ[™È‰‰‹õæ5æuè_›YÚZ\œÜÚK\İ
İš[™Ê

Yœ^[ØY
OO[[İ›ÚYœ\J_

Yœ^[ØY
OO[[İ›ÚYš›˜[YJ_

OYœ^[ØY
OO[[İ›ÚY›K››İ\Ê_ˆŠJ_JNÜ™]\›ÚÚ[™ˆ™]H‹^˜Ë›[™İØ5æ5æuèuåuêˆ5êuè5êuçµê5åNˆ	ØË›X\
Oš

JÈˆ8 %5æuåuçHŠÊŠ
_ÈŠJKš›Ú[Šˆ0­ÈŠ_K˜ˆµç5ä5è5êuçµê5åH5é5ê5æ5æH5æ5æuèuå5äuæ5æuåuçˆŸ_ZYŠOOH™Ù]İ˜[œÙ™\—Ù^\ÈŠ^Û]ÏZK™š[\ŠOİ˜\ˆNÜ™]\›ˆšÚ[™OOH˜›ÛÚÚ[™È‰‰‹õæ5æuè_›YÚZ\œÜ5çµèµäuêÚK\İ
İš[™Ê

Yœ^[ØY
OO[[İ›ÚYœ\J_

Yœ^[ØY
OO[[İ›ÚYš›˜[YJ_

OYœ^[ØY
OO[[İ›ÚY›K››İ\Ê_ˆŠJ_JK›X\
ŠK™š[\Š[X™\‹š\Ò[YÙ\ŠNÜ™]\›ÚÚ[™ˆ™]H‹^˜Ë›[™İØ5æuçµæH5çµèµäuê5ä5åuåuæuê5æH5êuè5çµéµä5åNˆ	ÖË‹‹›™]ÈÙ]
ÊWKœÛÜ


OO™\
Kš›Ú[Š‹Š_K˜ˆµç5ä5åµåuå5åH5æuçµæH5çµèµäuê5ä5åuåuæuê5æH5äuê5êuåuçµåuê‹ˆŸ_ZYŠOOH˜[Y]WÙ›YÚÜÙ\]Y[˜ÙHŠ^Û]ÏZK™š[\ŠOİ˜\ˆKÎÜ™]\›ˆšÚ[™OOH˜›ÛÚÚ[™È‰‰‹õæ5æuè_›YÚZ\œÜÚK\İ
İš[™Ê

\œ^[ØY
OO[[İ›ÚYš\J_

O\œ^[ØY
OO[[İ›ÚY›K›˜[YJ_

Ï\œ^[ØY
OO[[İ›ÚYË››İ\Ê_ˆŠJ_JK›X\
ŠK™š[\Š[X™\‹š\Ò[YÙ\ŠKœÛÜ


OOœZ
KXË™š[\Š

OOš	‰œOOXÖÚLWJÌJNÜ™]\›ÚÚ[™ˆ™]H‹^™›[™İØ5è5äõê5êuêˆ5äuäõæuéõåˆ5è5çµéµä5åH5æuçµæH5æ5æuèuå5ê5éµåué5æuçH	ÖË‹‹›™]ÈÙ]

WKš›Ú[Š‹Š_K˜ˆµç5ä5è5çµéµä5å5æ5æuèuå5äuêuç5åuêuå5æuçµæuçH5ê5éµåué5æuçH5ç5é5æH5å5ê5êuåuçµåuêˆ5å5çµéõåuçµæuåuê‹ˆŸ_ZYŠOOH˜[Y]WÜİÜÜÙ\]Y[˜ÙHŠ^Û]ÏZK™š[\ŠOœšÚ[™OOHœİÜŠKXË™š[\ŠOˆZ

_S[X™\‹š\Ò[YÙ\ŠŠ
JJNÜ™]\›ÚÚ[™ˆ™]H‹^™›[™İØ5è5çµéµä5åH	Ù›[™İH5èµéµæuê5åuêˆ5êuåõèuê5æuçH5äuå5çÈ5æuåuçH5ä5åH5êuçK˜˜5ê5éµèÈ	ØË›[™İH5å5èµéµæuê5åuêˆ5æõåuç5ç5æuåuçH5åuêuçH5äuæõç5ê5êuåuçµå˜_\™]\›ˆOOH˜Ø[İ[]Wİš\Ù\İ[X]HŞÚÚ[™ˆ™]H‹^˜5èuæõåuçH5æuäõåuèˆ5çµêµåuæˆ5å5ê5êuåuçµåuêˆ	ÚKœ™YXÙJ

OOİ˜\ˆKËËKÎÜ™]\›ˆ
Ó[X™\Š
ÏJOJÏJ\œ^[ØY
OO[[İ›ÚYšœšXÙJHO[[İÎŠO\œ^[ØY
OO[[İ›ÚY›K˜ÛÜİ
HO[[ŞNŠÏ\œ^[ØY
OO[[İ›ÚY™ËœZY
HO[[×ÎŒ
_K
KÑš^Y
Š_H8 ª‹ˆ5åµåH5ä5æuè5å5èµç5åuêˆ5çµç5ä5åÈ5çµåõæuê5æuçH5åõèuê5æuçH5ç5ä5å5åuçµéµä5åK˜N›[]˜\ˆİ]O”İš[™ÊO[[İˆˆŠKœ™\XÙJÖÉˆ‰×KÙËOOŠÈ‰ˆˆ‰˜[\È‹ˆ‰›È‹ˆˆ‰™İÈ‹	È‰Îˆ‰œ][İÈ‹‰Èˆ‰ˆÌÎNÈŸJVÙWJKİ^İ[šÛ›İÛˆµåõèuê5çµæuäõèˆ‹Ü[ˆµç5äuæuéµåuèˆ‹İ™\™YNˆµäuä5æuåõåuê‹ÛÛ\]Yˆµå5åuêuç5çHŸKİ^İ\ÚÎˆµçµêuæuçµåuêˆ‹ÙX\ˆµéµæuåuäÈ‹›ÛÚÚ[™Îˆµå5åµçµè5åuêˆ‹›İ]Nˆµêµåuæõè5æuêˆ5æuåuçµæuêˆ‹ÙÚ[™ÎˆµæõæuèuåuæH5ç5æuè5åŸNÙ[˜İ[Ûˆ[JÜ›ÛİX[ÙÎ™Kš\›‹İ]Nœ^ßK›İÎšKÛ‘Y]œÏJ
OOßKÛ”Ø]™T™\]Z\™[Y[Î›J
OO˜Š[[[˜İ[ÛŠŠ
^ßJKÛ”™Yœ™\Ú˜ÏJ
OOßKÛ”Ø]™Y™J
OOß_J^Û]HLHLKOR˜Jİš\›‹][\Î›‹š][\Ë›İÎš_JKÏ]›İÛ™\‘Øİ[Y[Ù[˜İ[ÛˆÊ
^Û][Kœ™\]Z\™[Y[Îİš[›™\’SIÏ]ˆÛ\ÜÏHœ›İÈµäõåuåÈ5çµåuæõè5åuêˆ5ç5æ5æuåuçÚ]Ûˆ\OH˜]Ûˆˆ]K\™XY[™\ÜËXÛÛ™šYÏµå5äµäõê5êˆ5äõê5æuêuåuêØ]Û]Ûˆ\OH˜]Ûˆˆ]K\™XY[™\ÜË\™Yœ™\Úµê5èµè5åuçÈ5çµå5êuê5êØ]ÛÙ]‰ÊÊİ[Ş˜ÛÛ\]Y
Èˆ5çµêµåuæˆŠŞİ[
Èˆ5äõê5æuêuåuêˆ5êuå5äµäõê5êˆ5å5åuêuç5çµåHˆµæ5ê5çH5å5åuäµäõê5çµå5è5äõê5êH5ç5æ5æuåuçˆ5å5ê5êuåuçµåuêˆ5å5éõæuæuçµåuêˆ5çµåuéµäµåuêˆ5äuè5é5ê5äËˆŠJÊ™^ÛYYÈˆ0­ÈŠŞ™^ÛYY
Èˆ5ç5ä5ê5ç5åuåuè5æ5æuåuêˆˆˆŠJÉÏÜÛ\ÜÏH›]]Yµç5é5æH5å5è5êµåuè5æuçH5å5êuçµåuê5æuçH5äuç5äuäÎÈ5ä5æuè5åH5ä5æuêuåuê5èué5éÈ5ä5åH5äuäõæuéõêˆ5äuæ5æuåõåuê‹ˆ5èµåuäõæõçÎˆ	ÊÔİ
™]È]JK˜\ÓÙŠKÓØØ[Tİš[™ÊšKRS‹İ[YV›Û™N›K[YV›Û™_JJJÈˆ0­ÈŠÔİ
K[YV›Û™JJÊK[YV›Û™P\Üİ[YYÈˆ8 %5äuê5æuê5êˆ5çµåõäõç5ç5åõæuêuåuäH5äuç5äuäË5è5æuêµçÈ5ç5êuè5åuêˆ5äuå5äµäõê5åuêˆ5å5äõåuåÈˆˆŠJÉÏÜX™[µå5éµäÙ[Xİ]K\™XY[™\ÜË\ØÛÜOÜ[Ûˆ˜[YOHš][\Èµê5êuåuçµåuêˆ5å5æ5æuåuçÛÜ[ÛÜ[Ûˆ˜[YOHœ™\]Z\™[Y[Èµå5äõê5æuêuåuêˆ5êuå5äµäõê5êÛÜ[ÛÜÙ[XİÛX™[]ˆ]K\™XY[™\ÜË[\İÏÙ]‰ÎÛ]]œ]Y\TÙ[XİÜŠ–Ù]K\™XY[™\ÜË\ØÛÜWHŠNÔ˜[YO\‹œØÛÜ_š][\È‹›Û˜Ú[™ÙOJ
OOÜ‹œØÛÜOT˜[YKJ
_Kœ]Y\TÙ[XİÜŠ–Ù]K\™XY[™\ÜËXÛÛ™šY×HŠK›Û˜ÛXÚÏWËœ]Y\TÙ[XİÜŠ–Ù]K\™XY[™\ÜË\™Yœ™\ÚHŠK›Û˜ÛXÚÏXËJ
_Y[˜İ[ÛˆJ
^Û]]œ]Y\TÙ[XİÜŠ–Ù]K\™XY[™\ÜË[\İ×HŠNŞš[›™\’SHˆÛ]J‹œØÛÜOOOHœ™\]Z\™[Y[ÈÛKœ™\]Z\™[Y[›İÜÎ›Kš][\ÊK™š[\ŠÏOšËœİ]\ÈOOH™^ÛYYŠKÏSØš™Xİ™[šY\ÊİŠK›X\

ÚËWJOOİ˜\ˆÛ]O]Ë˜Ü™X]Q[[Y[
œÙXİ[ÛˆŠKOT™š[\ŠO•œİ]\ÏOOZÊNĞKš[›™\’SHÏˆŠÔİ
JJÈÚÏˆŠÊK›[™İÑK›X\
O‰Ï\XÛHİ[OHœY[™ÎØ›Ü™\‹X›İÛNŒ\ÛÛY˜\ŠKX›Ü™\‹ÍMLÊHİ›Û™Ï‰ÊÔİ
]JJÉÏÜİ›Û™Ïİ[OH›X\™Ú[‰ÊÕœ™X\ÛÛœË›X\
İ
Kš›Ú[Šˆ0­ÈŠJÈÜˆŠÊ‹œØÛÜHOOHœ™\]Z\™[Y[ÈÉÏ]Ûˆ\OH˜]Ûˆˆ]K\™XY[™\ÜËYY]H‰ÊÔİ
šY
JÉÈµé5êµåÈ5ê5êuåuçµåØ]Û‰Î•š][RYË™š[\ŠÏO›‹š][\ËœÛÛYJOO“KšYOOSÊJK›X\
ÏOİ˜\ˆK‹	Ü™]\›‰Ï]Ûˆ\OH˜]Ûˆˆ]K\™XY[™\ÜËYY]H‰ÊÔİ
ÊJÉÈ‰ÊÔİ


JO[‹š][\Ë™š[™
O‹šYOOSÊJOO[[İ›ÚY“Kœ^[ØY
OO[[İ›ÚY‘]J_

	J[‹š][\Ë™š[™
O‹šYOOSÊJOO[[İ›ÚY‘‹œ^[ØY
OO[[İ›ÚY‰›˜[YJ_µé5êµåÈ5ê5êuåuçµåŠJÈØ]ÛˆŸJKš›Ú[ŠˆŠJJÈØ\XÛOˆŠKš›Ú[ŠˆŠNˆµä5æuçÈ5é5ê5æuæ5æuçH5ç5å5éµäµåÜˆŠNÛ]VË‹‹Kœ]Y\TÙ[XİÜ[
˜\XÛHŠWNÜ™]\›ˆ‹›[™İ	‰ÙJØÛÛZ[™\K][\Î”‹İ]Nœ–ŞHœYÙKHŠÚ×_
–Ş—O^ßJ_JK˜\[™
JKÚYšËX™[’JÈˆ
ŠÑK›[™İ
ÈŠH‹›Ù\Î–ĞW__JNÛ]
Ü›ÛİÜ›İ\Î”Ëİ]Nœ‹Xœß
‹XœÏ^ßJK™Yš^ˆœ™XY[™\ÜÈ‹X™[ˆµçµéµäuæH5çµåuæõè5åuêˆŸJKœ]Y\TÙ[XİÜ[
–Ù]K\™XY[™\ÜËYY]HŠK™›Ü‘XXÚ
ÏOšË›Û˜ÛXÚÏJ
OOÛ]O[‹š][\Ë™š[™
OOKšYOOZË™]\Ù]œ™XY[™\ÜÑY]
NÜ	‰’I‰œÊJ_J_Y[˜İ[ÛˆÊ
^İ˜\ˆ‹	ÚYŠ\YJ\™]\›ÚHLÛ]\İXİ\™YÛÛ™J‹œÙ][™ÜËœ™XY[™\ÜÔ™\]Z\™[Y[ß×JKJ	J^ÌJOO[[İ›ÚY‘‹šY
HO[[É›[ÏHLKÏ]Ë˜Xİ]™Q[[Y[OJ
OOœ	‰š	‰™K›Ü[‰‰™Kœ]Y\TÙ[XİÜŠ–Ù]K\™XY[™\ÜËYY]Ü—HŠOOOPNÙKš[›™\’SIÏ›Ü›H]K\™XY[™\ÜËYY]Üµäõê5æuêuåuêˆ5å5çµåuæõè5åuêˆ5ç5æ5æuåuçÚµäuåõê5çµå5è5äõê5êH5åuéõêuê5ç5ê5êuåuçµåuêˆ5éõæuæuçµåuê‹ˆ5ê5êuæuçµå5åµåH5ä5æuè5å5êµäuè5æuêˆ5äuæ5æuåõåuêˆ5çµåõæuæuäuê‹ÜX™[µä5åµåuê5åµçµçÈ5ç5åõæuêuåuäH5çµåuèµäõæuçO[œ]˜[YOHœ™XY[™\ÜÕ[YV›Û™Hˆ˜[YOH‰ÊÔİ
‹œÙ][™ÜË[YV›Û™_\ÚXKÒ™\\Ø[[HŠJÉÈˆXÙZÛ\H\ÚXKĞ˜[™ÚÛÚÈˆ™\]Z\™YÛX™[]ˆÛ\ÜÏHœ›İÈÙ[Xİ\šXK[X™[Hµäuåõê5äõê5æuêuåˆ]K\™\]Z\™[Y[\XÚÙ\ÜÙ[Xİ]Ûˆ\OH˜]Ûˆˆ]KXY\™\]Z\™[Y[µå5åuèuèÈ5äõê5æuêuåØ]ÛÙ]]ˆ]K\™\]Z\™[Y[YšY[ÏÙ]]ˆÛ\ÜÏHœ›İÈ]Ûˆ\OH˜]Ûˆˆ]K\Ø]™K\™\]Z\™[Y[Ïµêuçµåuê5äõê5æuêuåuêØ]Û]Ûˆ\OH˜]Ûˆˆ]KXØ[˜Ù[\™\]Z\™[Y[Ïµäuæuæ5åuçØ]ÛÙ]]K\™XY[™\ÜËY\œ›Üˆ›ÛOHœİ]\ÈÜÙ›Ü›O‰ÎÛ]OYKœ]Y\TÙ[XİÜŠ™›Ü›HŠKOPKœ]Y\TÙ[XİÜŠ–Ù]K\™\]Z\™[Y[\XÚÙ\—HŠKPKœ]Y\TÙ[XİÜŠ–Ù]K\™\]Z\™[Y[YšY[×HŠKPKœ]Y\TÙ[XİÜŠ–Ù]K\™XY[™\ÜËY\œ›Ü—HŠNÙ[˜İ[Ûˆ

^Û]^™š[™
OO–KšYOOT
NÈPŸT‹œ]Y\TÙ[XİÜŠ–Û˜[YO\™\]Z\™[Y[]WHŠ_
‹]OT‹œ]Y\TÙ[XİÜŠ–Û˜[YO\™\]Z\™[Y[]WHŠK˜[YK‹šÚ[™T‹œ]Y\TÙ[XİÜŠ–Û˜[YO\™\]Z\™[Y[Ú[™HŠK˜[YK‹˜\XØX›OT‹œ]Y\TÙ[XİÜŠ–Û˜[YO\™\]Z\™[Y[\XØX›WHŠK˜ÚXÚÙY‹š][RYÏVË‹‹”‹œ]Y\TÙ[XİÜ[
–Û˜[YO[[šÒ][WN˜ÚXÚÙYŠWK›X\
OO–K˜[YJJ_Y[˜İ[ÛˆÊ
^ÑKš[›™\’S^›X\
O‰ÏÜ[Ûˆ˜[YOH‰ÊÔİ
‹šY
JÉÈ‰ÊÔİ
‹]_µäõê5æuêuå5åõäõêuåŠJÈÛÜ[ÛˆŠKš›Ú[ŠˆŠKK™\ØX›YH^›[™İK˜[YOTˆÛ]^™š[™
Oš‹šYOOT
NÚYŠPŠ^Ô‹š[›™\’SHµä5æuçÈ5äõê5æuêuåuê‹ˆ5ä5é5êuê5ç5å5åuèuæuèÈ5äõê5æuêuå5ä5åH5ç5êuçµåuê5ê5êuæuçµå5ê5æuéõåÜˆÜ™]\›Ÿ[]OP‹šÚ[™OOH›ÙÚ[™ÈÈ˜›ÛÚÚ[™È‹šÚ[™Ï[‹š][\Ë™š[\ŠOš‹šÚ[™OOVJNÔ‹š[›™\’SIÏX™[µêuçH5å5äõê5æuêuå[œ]˜[YOHœ™\]Z\™[Y[]HˆX^[™İHŒŒˆ˜[YOH‰ÊÔİ
‹]JJÉÈÛX™[X™[µêµåõåuçOÙ[Xİ˜[YOHœ™\]Z\™[Y[Ú[™‰ÊÓØš™Xİ™[šY\ÊİŠK›X\

Ú‹YWJOO‰ÏÜ[Ûˆ˜[YOH‰ÊÚŠÉÈˆ	ÊÊOOP‹šÚ[™ÈœÙ[XİYˆˆŠJÈˆŠÙYJÈÛÜ[ÛˆŠKš›Ú[ŠˆŠJÉÏÜÙ[XİÛX™[X™[[œ]\OH˜ÚXÚØ›Şˆ˜[YOHœ™\]Z\™[Y[\XØX›Hˆ	ÊÊ‹˜\XØX›OÈ˜ÚXÚÙYˆˆŠJÈˆ5ê5ç5åuåuè5æ5æuêˆ5ç5æ5æuåuçÛX™[ˆŠÊ‹šÚ[™OOHœ›İ]HÈµäuåuäõéÈ5êuæuêH5êµåõè5å5ç5æõç5æuåuçH5äuæ5æuåuçÈ5ä5æuè5åH5çµä5çµêˆ5äõê5æˆ5ä5åH5äuæ5æuåõåuê‹ÜˆˆšY[Ù]YÙ[™µê5êuåuçµåuêˆ5è5äõê5êuåuêˆ8 %5æõåuç5çÈ5éµê5æuæõåuêˆ5ç5å5æuåuêˆ5çµåuæõè5åuêÛYÙ[™ˆŠÒË›X\
O‰ÏX™[[œ]\OH˜ÚXÚØ›Şˆ˜[YOH›[šÒ][Hˆ˜[YOH‰ÊÔİ
‹šY
JÉÈˆ	ÊÊ‹š][RYËš[˜ÛY\Ê‹šY
OÈ˜ÚXÚÙYˆˆŠJÈˆŠÔİ
‹œ^[ØY]_‹œ^[ØY›˜[YJJÈÛX™[ˆŠKš›Ú[ŠˆŠJĞ‹š][RYË™š[\ŠOˆRËœÛÛYJYOO™YKšYOOZŠJK›X\
O‰ÏX™[[œ]\OH˜ÚXÚØ›Şˆ˜[YOH›[šÒ][Hˆ˜[YOH‰ÊÔİ
ŠJÉÈˆÚXÚÙYˆ5ê5êuåuçµå5çµéõåuêuê5êˆ5ç5ä5åµçµæuè5å8 %5å5èuê5èuæuçµåuçÈ5ê5éÈ5ä5çH5äuê5éµåuè5æˆ5ç5å5èuæuê5å5çµå5äõê5æuêuåÛX™[‰ÊKš›Ú[ŠˆŠJÊË›[™İÈˆˆµä5æuçÈ5ê5êuåuçµåuêˆ5çµêµä5æuçµåuê‹ˆ5å5äõê5æuêuå5êµæuêuä5ê5èµçH5çµæuäõèˆ5åõèuêÜˆŠJÈÙšY[Ù]ˆŠJÉÏ]Ûˆ\OH˜]Ûˆˆ]K\™[[İ™K\™\]Z\™[Y[µå5èuê5çµå5äõê5æuêuåuêØ]Û‰ÎÛ]T‹œ]Y\TÙ[XİÜŠ™šY[Ù]ŠNÓ‰‰ÙJØÛÛZ[™\“‹][\Î–Ë‹‹“‹œ]Y\TÙ[XİÜ[
œØÛÜHˆX™[ŠWKYÙTÚ^™NË™Y˜][šY]Ëš[›™\•ÚYŒÌŒËİ]Nß_JK‹œ]Y\TÙ[XİÜŠ–Û˜[YO\™\]Z\™[Y[Ú[™HŠK›Û˜Ú[™ÙOZOÕ

K‹šÚ[™Z‹\™Ù]˜[YK‹š][RYÏV×KÊ
_K‹œ]Y\TÙ[XİÜŠ–Ù]K\™[[İ™K\™\]Z\™[Y[HŠK›Û˜ÛXÚÏJ
OOİ˜\ˆ‹YNŞ^™š[\ŠO–‹šYOOT
KJYOJ^ÌJOO[[İ›ÚYš‹šY
HO[[ÙYN›[Ê
__QK›Û˜Ú[™ÙOJ
OOÕ

KQK˜[YKÊ
_KKœ]Y\TÙ[XİÜŠ–Ù]KXY\™\]Z\™[Y[HŠK›Û˜ÛXÚÏJ
OOÚYŠ›[™İLL
^Ş‹^ÛÛ[HµèµäÈL5äõê5æuêuåuêˆ5ç5æ5æuåuçÜ™]\›ŸU

NÛ]^ÚYË™Y˜][šY]Ë˜Ü\Ëœ˜[™ÛUURQ

K]Nˆµäõê5æuêuå5åõäõêuå‹Ú[™ˆ\ÚÈ‹\XØX›NˆL][RYÎ–×_NŞœ\Ú
ŠKP‹šYÊ
_NÛ]OJ
OOİ˜\ˆÔß
HLKK˜ÛÜÙJ
K
ZÏO[[İ›ÚYšË™›Øİ\ÊOO[[‹˜Ø[
ÊJ_NĞKœ]Y\TÙ[XİÜŠ–Ù]KXØ[˜Ù[\™\]Z\™[Y[×HŠK›Û˜ÛXÚÏSNÛ]J
OO˜Š[[[˜İ[ÛŠŠ
^İ˜\ˆÚYŠJßRJ
JJ]^Õ

NÛ]OUÜŠ
KÏPK™[[Y[Ëœ™XY[™\ÜÕ[YV›Û™K˜[YKš[J
NÚYŠYØJÊJ]›İÈ\œ›ÜŠµæuêH5ç5å5åµæuçÈ5ä5åµåuê5åµçµçÈ5êµéõæuçË5ç5äõåuäµçµå\ÚXKĞ˜[™ÚÛÚÈŠNÚYŠÏHLKœ]Y\TÙ[XİÜ[
š[œ]Ù[Xİ]ÛˆŠK™›Ü‘XXÚ
O“‹™\ØX›YHL
KZY[
Ü™\]Z\™[Y[Î–K[YV›Û™N’ßJKRJ
J\™]\›ÚHLKK˜ÛÜÙJ
K
ZÏO[[İ›ÚYšË™›Øİ\ÊOO[[‹˜Ø[
ÊK

_XØ]Ú
J^ÒJ
I‰Š‹^ÛÛ[VK›Y\ÜØYÙKÏHLKKœ]Y\TÙ[XİÜ[
š[œ]Ù[Xİ]ÛˆŠK™›Ü‘XXÚ
ÏO’Ë™\ØX›YHLJJ__JNĞK›ÛœİX›Z]POĞ‹œ™]™[Y˜][

K

_KKœ]Y\TÙ[XİÜŠ–Ù]K\Ø]™K\™\]Z\™[Y[×HŠK›Û˜ÛXÚÏQÊ
KKœÚİÓ[Ù[

_\™]\›ˆÊ
K

OOÜHLK	‰ŠHO[[	‰™Kœ]Y\TÙ[XİÜŠ–Ù]K\™XY[™\ÜËYY]Ü—HŠJI‰ŠHLKK˜ÛÜÙJ
J__]˜\ˆO^Ú[˜[YÚœÛÛˆµå5èué5éÈ5å5åõåµæuê5êµêuåuäuå5êuä5æuè5å5äuçµäuè5å5å5è5äõê5êK5åuç5æõçÈ5ç5ä5è5æuêµçÈ5ç5éõê5åuä5ä5êˆ5å5êµæõè5åuçËˆ5çµåuçµç5éH5ç5é5è5åuêˆ5ç5äuäõæuéõå5ç5é5è5æH5è5æuèuæuåuçÈ5è5åuèuèËˆ‹[˜[YÜİ[[X\Nˆµå5èuåuæõçÈ5å5åõåµæuê5èuæuæõåuçH5åõèuê5ä5åH5ä5ê5åuæˆ5çµå5çµåuêµêˆ5çµåuçµç5éH5ç5äuéõêH5êµæuéõåuçÈ5êuç5å5êµåuéµä5åˆ‹[˜[YİØ\›š[™Îˆµå5èuåuæõçÈ5å5åõåµæuê5å5èµê5å5åõèuê5å5ä5åH5ä5ê5åuæõå5çµå5çµåuêµêˆ5çµåuçµç5éH5ç5äuéõêH5êµæuéõåuçÈ5êuç5å5êµåuéµä5åˆ‹[˜[YİØ\›š[™ÜÎˆµê5êuæuçµêˆ5å5ä5åµå5ê5åuêˆ5åõèuê5å5ä5åH5ä5æuè5å5êµéõæuè5åˆ5çµåuçµç5éH5ç5äuéõêH5êµæuéõåuçÈ5êuç5å5êµåuéµä5åˆ‹[˜[YÜ™XÛÜ™Îˆµê5êuæuçµêˆ5é5ê5æuæ5æH5å5êµæõè5åuçÈ5åõèuê5å5ä5åH5åõåuê5äµêˆ5çµå5äµåuäõç5å5çµåuêµêˆ5çµåuçµç5éH5ç5äuäõåuéÈ5ä5êˆ5å5æuéõèÈ5å5êµæõè5åuçÈ5äuêuä5ç5åuçËˆ‹[˜[YÜ™XÛÜ™ÚÚ[™ˆµå5èuåuæõçÈ5å5éµæuèˆ5èuåuäˆ5é5ê5æuæ5êuå5çµèµê5æõêˆ5ä5æuè5å5êµåuçµæõêˆ5äuåKˆ5çµåuçµç5éH5ç5é5è5åuêˆ5ç5äuäõæuéõåˆ‹[œØY™WØ›ÛÚÚ[™×Üİ]Nˆµå5èuåuæõçÈ5èuæuçµçÈ5å5éµèµå5æõå5åµçµè5å5ä5åH5æõêµêuç5åuçH5êuäuåuéµèµåK5ç5ç5ä5ä5æuêuåuê5èué5éËˆ5å5êµåuéµä5å5è5äõåõêµåÈ5çµåuçµç5éH5ç5äuäõåuéÈ5æuäõè5æuêˆ5ä5éµç5èué5éÈ5å5è5èuæuèµåuê‹ˆ‹[œØY™WİÛÜšÙ›İ×Üİ]Nˆµå5èuåuæõçÈ5èuæuçµçÈ5é5èµåuç5å5æõå5åuêuç5çµå5ç5ç5ä5ê5ä5æuæuêˆ5äuæuéµåuè‹ˆ5å5êµåuéµä5å5è5äõåõêµåÈ5çµåuçµç5éH5ç5äuäõåuéÈ5ä5êˆ5å5é5èµåuç5å5æuäõè5æuê‹ˆ‹[˜[Yİ\›ˆµä5åõäÈ5å5éõæuêuåuê5æuçH5äuêµåuéµä5å5ä5æuè5åH5êµéõæuçËˆ5çµåuçµç5éH5ç5äuäõåuéÈ5ä5êˆ5çµéõåuê5åuêˆ5å5êµæõè5åuçËˆ‹[œØY™Wİ\›ˆµä5åõäÈ5å5éõæuêuåuê5æuçH5ä5æuè5åH5æõêµåuäuêˆ5éµæuäuåuê5æuêˆ5çµä5åuäuæ5åõêˆ5å5çµåuêµê5êˆ5ç5çµåõéõêˆ5çµåuçµç5éH5ç5äuäõåuéÈ5ä5êˆ5çµéõåuê5åuêˆ5å5êµæõè5åuçËˆ‹Ûİ\˜ÙWÛZ\ÛX]Úˆµçµéõåuê5êuå5èuåuæõçÈ5éµæuæuçÈ5ä5æuè5åH5êµåuä5çH5ç5çµéõåuê5åuêˆ5êuå5êµéõäuç5åH5äuçµåõéõê5ä5åH5êuå5çµåõæuê5å5åuéµäˆ5æõçµä5åuçµêˆ5ç5ç5ä5ê5ä5æuåˆ5çµåuçµç5éH5ç5äuäõåuéÈ5ä5êˆ5å5çµéõåuê5åuêˆ5åuå5çµåõæuê5æuçH5æuäõè5æuê‹ˆ‹[˜[YÙ]\Îˆµå5êµä5ê5æuæõæuçH5ä5åH5çµèué5ê5å5æuçµæuçH5ä5æuè5çH5êµåuä5çµæuçH5ç5ä5æuêuåuê5ä5åH5êuåõèuê5æuçH5æuçµæuçH5äuçµèuç5åuçˆ5çµåuçµç5éH5ç5äuäõåuéÈ5ä5êˆ5å5êuä5ç5åuçÈ5åuç5äuéõêH5êµæõè5åuçÈ5êuçµæõèuå5ä5êˆ5æõç5å5æuçµæuçH5äuæ5åuåuåÈ5êuä5åuêuêˆ‹[˜[YØYÙ]ˆµè5êµåuçÈ5æõèué5æH5äuêµåuéµä5å5ä5æuè5åH5êµéõæuçÈ5ä5åH5ä5æuè5åH5êµåuä5çH5ç5êµéõéµæuäKˆ5çµåuçµç5éH5ç5äuäõåuéÈ5ä5êˆ5èuæõåuçµæH5å5å5éµèµåuêˆ5åuå5å5åuéµä5åuêˆ5å5éõæuæuçµåuêˆ5ç5é5è5æH5è5æuèuæuåuçÈ5è5åuèuèËˆ‹[˜[YÜ™XÛÜ™ˆµä5åõäÈ5çµé5ê5æuæ5æH5å5êµæõè5åuçÈ5çµæõæuç5è5êµåuçÈ5åõèuê5ä5åH5ç5ä5êµéõæuçËˆ5çµåuçµç5éH5ç5é5è5åuêˆ5ç5äuäõæuéõå5êuç5å5êµåuéµä5åˆ‹[˜[YÜ[ˆµå5êµåuéµä5å5ç5ä5èµåuçµäõêˆ5äuçµäuè5å5å5êµæõè5åuçÈ5å5è5äõê5êKˆ5å5èuæuäuå5å5çµäõåuæuéõêˆ5ä5æuè5å5åµçµæuè5åˆ5çµåuçµç5éH5ç5é5è5åuêˆ5ç5äuäõæuéõå5èµçH5çµåuèµäÈ5å5å5ê5éµåˆŸNÙ[˜İ[ÛˆJ
^Û]OTİš[™Ê›Y\ÜØYÙ_ˆŠKYK›X]Ú
×µå5êµæõè5åuçÈ5ç5ä5èµäuê5ä5æuçµåuêˆÊØK^—×JÊWWˆ5ç5ä5êuåuè5åH5è5êµåuè5æH5å5æ5æuåuç‰ÊNÜ™]\›ˆÊVÛ–ÌWW_Kš[˜[YÜ[ŠJÈˆ5äuå5ê5éµå5æuêuè5å5åµåH5ç5ä5è5êuçµê5å5é5æuê5åuæ5êuçµä5é5êuê5ç5åµå5åuêˆ5ä5êˆ5å5èuæuäuå5å5çµäõåuæuéõê‹ˆ5ç5ä5êuåuè5åH5è5êµåuè5æH5å5æ5æuåuçˆÈŠÛ–ÌWJÈ—H™_]˜\ˆO]O”İš[™ÊO[[İˆˆŠKœ™\XÙJÖÉˆ‰×KÙËOOŠÈ‰ˆˆ‰˜[\È‹ˆ‰›È‹ˆˆ‰™İÈ‹	È‰Îˆ‰œ][İÈ‹‰Èˆ‰ˆÌÎNÈŸJVÙWJK[]O›™]È[“[X™\‘›Ü›X]
šKRS‹Üİ[Nˆ˜İ\œ™[˜ŞH‹İ\œ™[˜ŞNˆ’SÈ‹X^[][Qœ˜Xİ[Û‘YÚ]ÎŒŸJK™›Ü›X]

K[O^Û[İÜ˜ŞXÛNˆµä5åué5è5åuèˆ‹Ø\ˆµê5æõäH‹X›XÎˆµêµåõäuåuê5å5éµæuäuåuê5æuêˆ‹Z^Yˆµêuæuç5åuäH5ä5çµéµèµæuçHŸNÙ[˜İ[Ûˆ›JÙX[ÙÎ\İ[˜][Û™K\N›‹Û˜XÚÎœJ
OO˜ÛÜÙJ
KÛ”X›\ÚYšOJ
OOßK™]šY]ÓÛ›NœÏHLKÛ‘Y]›[[J^Û]Ï]›İÛ™\‘Øİ[Y[XË™Y˜][šY]ËHLHLKOHLKÏ[[Ï[[OHš[œ]‹ÏUJKœÙ][™ÜÊKRŠßKËš[œ]
KYÛØ˜[\Ë˜Ü\Ëœ˜[™ÛUURQ

KÏWË˜ÚÚXÙ\ËÏWË™œ™YU^OHLKO[[OLHˆ‹[[Hˆ‹ÏYœÙ][\˜[


OOİ˜\ˆNÜ	‰OOOH›[Ûš]Üˆ‰‰–Èœ]Y]YY‹œ™\ÙX\˜Ú[™È—Kš[˜ÛY\Ê
OYÏO[[İ›ÚY™Ëœ[ŠOO[[İ›ÚYKœİ]JI‰šÜŠËœ[‹J_KYLÊNÙ[˜İ[ÛˆJ
^ÜHLK˜ÛX\•[Y[İ]
ÊK˜ÛX\’[\˜[
ÊKJÊß]˜Y]™[\İ[™\Š˜ÛÜÙH‹KÛÛ˜ÙNˆLJNÙ[˜İ[Ûˆ
J^Ü™]\›ˆœ]Y\TÙ[XİÜŠJ_Y[˜İ[ÛˆŠJ^Ü	‰‘
–Ù]K\[›™\‹\İ]\×HŠI‰Š
–Ù]K\[›™\‹\İ]\×HŠK^ÛÛ[]J_Y[˜İ[Ûˆ	
J^Ü	‰Šš[›™\’SIÏ]ˆÛ\ÜÏHœ[›™\ˆ]ˆÛ\ÜÏHœ›İÈ[›™\‹ZXY[™È]Ü[ˆÛ\ÜÏHœ[›™\‹Y^YXœ›İÈµêµæõè5åuçÈ5äuèµåµê5êˆ5èuåuæõçÏÜÜ[‰ÊŞJK™\İ[˜][Û—Û˜[YJJÉÏÚÙ]]Ûˆ\OH˜]Ûˆˆ]K\[›™\‹X˜XÚÏµåõåµê5å5ç5èµê5æuæõêˆ5æuèµäÏØ]ÛÙ]]ˆ]KXYÙ[XYÙ]Û\ÜÏHœ[›™\‹XYÙ]Ù]]K\[›™\‹\İ]\È›ÛOHœİ]\Èˆ\šXK[]™OHœÛ]HÜ]ˆ]K\[‹\™\İ[YOÙ]]ˆ]K\XÚØYÙKXÛÛ›ÛÏÙ]‰ÊİJÈÙ]ˆ‹
–Ù]K\[›™\‹X˜XÚ×HŠK›Û˜ÛXÚÏJ
OOÓJ
KŠ
_KÊ
KJ
J_Y[˜İ[ÛˆŠJ^Ü™]\›ˆI‰š›Š‹J_Y[˜İ[ÛˆJ
^Û]OQ
–Ù]K\XÚØYÙKXÛÛ›Û×HŠNİI‰ŠKš[›™\’SHµçµæõèuåuêˆ5å5åõäuæuç5åˆŠÊ
O[[İ›ÚY‹š[š\š]Y
OOOHLÈµäµæuêuå5å5æuèuæ5åuê5æuêˆ0­È5êµéõê5åuêˆ5èµç5åuêˆ5å5èuåuæõçÈ5è5êuçµê5åuêˆˆO[[	‰‹œ™[XZ[š[™ÏÈµêµæõè5åuçÈŠŞJ‹œ™[XZ[š[™Ëš[š]X[
JÈˆ0­È5èµäõæõåuçÈŠŞJ‹œ™[XZ[š[™Ë\]JJÈˆ0­È5çµåõéõêŠŞJ‹œ™[XZ[š[™Ëœ™\ÙX\˜Ú
Nˆµç5ä5åµçµæuè5åuêÈ5æuêH5ç5ê5èµè5çÈ5ä5êˆ5è5êµåuè5æH5å5åõäuæuç5åŠJÉÏÜ]Ûˆ\OH˜]Ûˆˆ]K[™]Ë]\]H	ÊÊPŠ\]HŠ_JˆO[[	‰‹˜\›İ™Y[œ]
OÈ™\ØX›YˆˆŠJÈµèµäõæõåuçÈ5çµèuç5åuç5éõæuæuçOØ]Ûˆ‹
–Ù]K[™]Ë]\]WHŠK›Û˜ÛXÚÏJ
OOĞŠ\]HŠI‰ŠˆO[[	‰‹˜\›İ™Y[œ]
I‰ŠYÛØ˜[\Ë˜Ü\Ëœ˜[™ÛUURQ

K™J
J_J_Y[˜İ[ÛˆÊ
^Û]OQ
–Ù]KXYÙ[XYÙ]HŠNÚYŠ]J\™]\›Û]OJ
ÏO[[İ›ÚY™ËœÜ[YÛÜ›İ
_
JÊ
ÏO[[İ›ÚY™Ëœ™\Ù\™YYÛÜ›İ
_
NİKš[›™\’SHİ›Û™ÏµêµéõéµæuäH5å5èuåuæõçÎˆŒ8 ªˆ5äuåõåuäõêOÜİ›Û™ÏÜ[µè5é5ê5äÈ5çµêµéõéµæuäH5å5æ5æuåuç0­È5ç5ç5ä5åõæuåuäH5ç5éõåuåÏÜÜ[Ü[µè5åuéµçˆŠÜ[Š

ÏO[[İ›ÚY™ËœÜ[YÛÜ›İ
_
KÌL
JÈˆ0­È5êuçµåuê5ç5é5èµåuç5åuêˆŠÜ[Š

ÏO[[İ›ÚY™Ëœ™\Ù\™YYÛÜ›İ
_
KÌL
JÈˆ0­È5æuêµê5åˆŠÜ[ŠX]›X^
™LË[JKÌL
JÉÏÜÜ[›ÙÜ™\ÜÈX^HŒŒˆ˜[YOH‰ÊÛJÉÈˆ\šXK[X™[Hµè5æuéµåuç5êµéõéµæuäH5å5èuåuæõçÈÜ›ÙÜ™\ÜÏ‰ÊÊOLMŒÈİ›Û™Ïµè5åuéµç5åH5ç5é5åõåuêˆ	H5çµå5êµéõéµæuäH5å5åõåuäõêuæOÜİ›Û™ÏˆˆˆŠKß
Kš[›™\’SHİ›Û™ÏµêµéõéµæuäH5å5èuåuæõçÎˆŒ8 ªˆ5äuåõåuäõêOÜİ›Û™ÏÜ[µè5é5ê5äÈ5çµêµéõéµæuäH5å5æ5æuåuç0­È5ç5ç5ä5åõæuåuäH5ç5éõåuåÏÜÜ[Ü[µæ5åuèµçÈ5æuêµê5å5çµå5êuê5ê¸ )ÜÜ[ˆŠNÛ]OQ
–Ù]K\[‹\™\İ[YWHŠNÑI‰ŠÈO[[	‰™Ëœ[ŠI‰HOOH›[Ûš]Üˆ‰‰ŠKš[›™\’SIÏ]Ûˆ\OH˜]Ûˆˆ]K]šY]Ë\[µé5êµåÈ5êµæõè5åuçÈ5ä5åõê5åuçÎˆ	ÊŞJËœ[‹œ]\ÙYØ]Èµå5å5ê5éµå5çµåuêuå5æuêˆ•šÙËœ[‹œİ]W_µçµèµéõäHŠJÈØ]Ûˆ‹
–Ù]K]šY]Ë\[—HŠK›Û˜ÛXÚÏXYJ_Y[˜İ[ÛˆŠKKKYOLJ^Ü™]\›ˆX™[ˆŠÛJÉÏ[œ]˜[YOH‰ÊİJÉÈˆ\OH›[X™\ˆˆZ[H‰ÊÑJÉÈˆX^H‰ÊÙ
ÉÈˆİ\H‰ÊÕYJÉÈˆ™\]Z\™Y˜[YOH‰ÊŞJİWJJÉÈÛX™[‰ßY[˜İ[ÛˆŠJ^Û]O[™]È‘›Ü›Q]JJKORŠßK
NÙ›ÜŠ]YHÙ–È™^\È‹™X\›Y\‘^\È‹›]\‘^\È‹œÚÜ\‘^\È‹›Û™Ù\‘^\È‹˜YÙ]‹˜YÙ]]šX][Û”İ‹˜]™[\œÈ‹œ›ÛÛ\È—JQVÕYWOS[X™\ŠK™Ù]
YJJNÙ›ÜŠ]YHÙ–Èœİ\‹™\\\™H‹˜[œÜÜ—JQVÕYWO[K™Ù]
YJNÛ]WÜŠJNÜ™]\›ˆÏY˜ÚÚXÙ\ËÏY™œ™YU^Kœ™Y™\™[˜Ù\ÏYœ™Y™\™[˜Ù\ËKš[˜ÛY\Ï[K™Ù][
š[˜ÛY\ÈŠKKœ[“[Z]YÛÜ›İSX]œ›İ[™
[X™\ŠK™Ù]
œ[“[Z]ŠJJŒL
KJJ_Y[˜İ[ÛˆYJ
^ŞOHš[œ]‹	
	Ï›Ü›HYHœ[›š[™ËZ[œ]µå5æuèµäÈ5éõäuåuè‹ˆ5è5ä5êuê5æuåõäÈ5ä5êˆ5å5ä5æuç5åuéµæuçH5ç5é5è5æH5êuå5èuåuæõçÈ5çµêµåõæuçÜšY[Ù]YÙ[™µêµä5ê5æuæõæuçH5åuçµêuæÛYÙ[™]ˆÛ\ÜÏHœ[›™\‹YÜšYX™[µêµä5ê5æuæˆ5å5êµåõç5å[œ]˜[YOHœİ\ˆ\OH™]Hˆ™\]Z\™Y˜[YOH‰ÊŞJœİ\
JÉÈÛX™[‰ÊÓŠ™^\È‹µçµèué5ê5æuçµæH5å5æ5æuåuç‹KL
JÓŠ™X\›Y\‘^\È‹µä5é5êuê5ç5å5éõäõæuçH5èµäÈ5æõçµå5æuçµæuçOÈ‹Œ
JÓŠ›]\‘^\È‹µä5é5êuê5ç5ä5åõê5èµäÈ5æõçµå5æuçµæuçOÈ‹Œ
JÓŠœÚÜ\‘^\È‹µä5é5êuê5ç5éõéµê5èµäÈ5æõçµå5æuçµæuçOÈ‹Ì
JÓŠ›Û™Ù\‘^\È‹µä5é5êuê5ç5å5ä5ê5æuæˆ5èµäÈ5æõçµå5æuçµæuçOÈ‹Ì
JÉÏÙ]ÙšY[Ù]šY[Ù]YÙ[™µêµéõéµæuäH5å5æ5æuåuçÛYÙ[™]ˆÛ\ÜÏHœ[›™\‹YÜšY‰ÊÓŠ˜YÙ]‹µêµéõéµæuäH5æõåuç5ç5äuêuí5åÈ‹KYM‹JJÓŠ˜YÙ]]šX][Û”İ‹µåõê5æuäµå5çµåuêµê5êˆ5äuä5åõåuåµæuçH‹LJJÉÏÙ]µçµå5æõç5åuç5äuêµéõéµæuäOÏÜ]ˆÛ\ÜÏHœ[›™\‹XÚXÚÜÈ‰ÊÓØš™Xİ™[šY\ÊŠK›X\

İKWJOO‰ÏX™[[œ]˜[YOHš[˜ÛY\Èˆ˜[YOH‰ÊİJÉÈˆ\OH˜ÚXÚØ›Şˆ	ÊÊš[˜ÛY\Ëš[˜ÛY\ÊJOÈ˜ÚXÚÙYˆˆŠJÈˆŠÛJÈÛX™[ˆŠKš›Ú[ŠˆŠJÉÏÙ]ÙšY[Ù]šY[Ù]YÙ[™µçµæ5æuæuç5æuçH5åuèuäµè5åuçÏÛYÙ[™]ˆÛ\ÜÏHœ[›™\‹YÜšY‰ÊÓŠ˜]™[\œÈ‹µçµèué5ê5çµæ5æuæuç5æuçH‹KŒ
JÓŠœ›ÛÛ\È‹µçµèué5ê5åõäõê5æuçH‹KŒ
JÉÏX™[µèµæuêÈ5êuäõå5æuéµæuä5å[œ]˜[YOH™\\\™HˆX^[™İHŒLˆ™\]Z\™Y˜[YOH‰ÊŞJ™\\\™JJÉÈÛX™[X™[µä5çµéµèµæH5êµåõäuåuê5åÙ[Xİ˜[YOH˜[œÜÜ‰ÊÓØš™Xİ™[šY\Ê[JK›X\

İKWJOO‰ÏÜ[Ûˆ˜[YOH‰ÊİJÉÈˆ	ÊÊ˜[œÜÜOO]OÈœÙ[XİYˆˆŠJÈˆŠÛJÈÛÜ[ÛˆŠKš›Ú[ŠˆŠJÈÜÙ[XİÛX™[Ù]ÙšY[Ù]ˆŠÔš
ËËJJÉÏ]Z[ÈÛ\ÜÏHœ[›™\‹\ØY™]Hİ[[X\Oµäuæ5æuåõåuêˆ5åuêµéõéµæuäH5å5èuåuæõçÏÜİ[[X\O[Oµçµåuêµê5ç5åõéõåuê5çµæuäõèˆ5éµæuäuåuê5æH5åuç5æuéµåuê5å5éµèµåuêˆ5ç5çµèuç5åuç5å5åµçµè5åuêˆ5åuçµêuæuçµåuê‹ÛOOµä5èuåuê5ç5ê5æõåuêK5ç5êuç5çK5ç5êuç5åuåÈ5å5åuäõèµåuêˆ5ä5åH5ç5êuè5åuêˆ5ä5æuêuåuê5æH5çµäõæuè5æuåuê‹ÛOOµä5æuçÈ5çµåõæuéõå5ä5åH5å5åõç5é5å5ä5åuæ5åuçµæ5æuêˆ5êuç5çµæuäõèˆ5éõæuæuçKˆ5å5åuèué5å5ç5æuèµäÈ5éõæuæuçH5äõåuê5êuêˆ5äuäõæuéõå5åuä5æuêuåuêÛOOµêuæuè5åuæH5êµä5ê5æuæˆ5çµåõåuéH5ç5æ5åuåuåÈ5êuä5åuêuê5äõåuê5êH5ä5æuêuåuê5è5åuèuèËˆ5åõæuèuæõåuçÈ5çµèµçMIH5æuåuéµäˆ5èµçH5å5èuäuê5åuçµéõåuê5åuêˆ5äuä5æuæõåuêˆ5äõåuçµåÛOOµå5çµäµäuç5å5å5åõåuäõêuæuêˆ5åõç5å5èµç5æõç5å5æuèµäõæuçH5æuåõäÎÈ5è5æuèuæuåuè5åuêˆ5åõåuåµê5æuçH5æõç5åuç5æuçKÛOOµèµéµæuê5å5çµåuè5èµêˆ5é5èµåuç5åuêˆ5åõäõêuåuêÈ5é5èµåuç5å5êuæõäuê5è5êuç5åõå5æuæõåuç5å5ç5éµê5åuæˆ5ä5êˆ5å5êµéõéµæuäH5êuêuåuê5æuæuçËÛOİ[X™[µêµéõê5êˆ5èµç5åuêˆ5ç5å5ê5éµå5äuêuí5åÏ[œ]˜[YOHœ[“[Z]ˆ\OH›[X™\ˆˆZ[HŒŒHˆX^HHˆİ\HŒŒHˆ˜[YOH‰ÊŞJœ[“[Z]YÛÜ›İÌL
JÉÈˆ™\]Z\™YÛX™[Ù]Z[Ï]Ûˆ\OHœİX›Z]ˆÛ\ÜÏHœš[X\Hµå5çµêuæˆ5ç5èuæuæõåuçH5åuç5ä5æuêuåuêØ]ÛÙ›Ü›O‰ÊK
ˆÜ[›š[™ËZ[œ]ŠK˜Y]™[\İ[™\Šš[œ]‹

OOÒOHLJK
ˆÜ[›š[™ËZ[œ]ŠK˜Y]™[\İ[™\Š˜Ú[™ÙH‹

OOÒOHLJK
ˆÜ[›š[™ËZ[œ]ŠK›ÛœİX›Z]]OOİKœ™]™[Y˜][

Nİ^ŞZŠK\™Ù]
KŠ
_XØ]Ú
J^ÑŠK›Y\ÜØYÙJ__KÉ‰ˆ[I‰‘Šµå5èuåuæõçÈ5èµäõæuæuçÈ5ä5æuè5åH5çµåõåuäuê5ç5èué5éÈRKˆ5ä5é5êuê5ç5å5æõæuçÈ5ä5êˆ5è5êµåuè5æH5å5êµæõè5åuçË5ä5æˆ5å5å5ê5éµå5åõèuåuçµåˆŠ_Y[˜İ[ÛˆŠ
^ŞOHœİ[[X\H‹	
	ÏÏµäuäõæuéõêˆ5å5è5êµåuè5æuçH5ç5é5è5æH5êµåõæuç5êˆ5êµæõè5åuçÏÚÏÛ\ÜÏHœ[›™\‹\İ[[X\HµæuèµäÏÙ‰ÊŞJK™\İ[˜][Û—Û˜[YJJÈÙµæuéµæuä5å5åuçµêuæÙˆŠŞJœİ\
JÈˆ0­ÈŠŞ™^\ÊÈˆ5æuçµæuçOÙµäµçµæuêuåuêˆ5äuêµä5ê5æuæÙµå5éõäõçµå5èµäÈŠŞ™X\›Y\‘^\ÊÈˆ5æuçµæuçK5ä5æuåõåuê5èµäÈŠŞ›]\‘^\ÊÈˆ5æuçµæuçOÙµäµçµæuêuåuêˆ5äuçµêuæÙµéõæuéµåuê5èµäÈŠŞœÚÜ\‘^\ÊÈˆ5æuçµæuçK5å5ä5ê5æõå5èµäÈŠŞ›Û™Ù\‘^\ÊÈˆ5æuçµæuçOÙµêµéõéµæuäH5å5æ5æuåuçÙˆŠÜ[Š˜YÙ]
JÈˆ0­È5åõê5æuäµå5çµåuêµê5êˆŠŞ˜YÙ]]šX][Û”İ
È‰OÙµæõç5åuç5äuêµéõéµæuäOÙˆŠŞš[˜ÛY\Ë›X\
OO–İWJKš›Ú[Š‹ŠJÈÙµçµæ5æuæuç5æuçOÙˆŠŞ˜]™[\œÊÈˆ0­ÈŠŞœ›ÛÛ\ÊÈˆ5åõäõê5æuçH0­È5æuéµæuä5å5çµ¯ˆŠŞJ™\\\™JJÈˆ0­ÈŠŞJ[VŞ˜[œÜÜJJÉÏÙµå5èµäõé5åuêˆ5åuä5æuç5åuéµæuçOÙÛ\ÜÏHœ™Y™\™[˜ÙK\İ[[X\H‰ÊŞJœ™Y™\™[˜Ù\ßµç5ç5ä5êµåuèué5êˆŠJÈÙµèµç5åuêˆ5èuåuæõçÈ5çµê5äuæuêˆ5ç5å5ê5éµåÙˆŠÜ[Šœ[“[Z]YÛÜ›İÌL
JÉÈ0­È5ç5ç5ä5åõæuåuäH5ç5éõåuåÏÙÙµä5æuêuåuê5å5è5êµåuè5æuçH5çµêµæuê5çµåõéõê5åuêµæõè5åuçÈ5äuç5äuäËˆ5é5ê5æ5æH5å5êµæõè5åuçÈ5å5è5åõåuéµæuçH5æuåuèµäuê5åH5ç5èué5éÈ5å5äuæuè5å5å5çµç5ä5æõåuêµæuê‹ˆ5å5åµçµè5åuêˆ5åuêµêuç5åuçµæuçH5ä5æuè5çH5çµäuåuéµèµæuçKÜ]ˆÛ\ÜÏHœ›İÈ]Ûˆ]KX\›İ™KZ[œ]ÈÛ\ÜÏHœš[X\Hˆ	ÊÊŠš[š]X[ŠOÈˆˆ™\ØX›YŠJÈµçµä5êuê5è5êµåuè5æuçH5åuå5êµåõç5êˆ5êµæõè5åuçÏØ]Û]Ûˆ]KYY]Z[œ]Ïµåõåµåuê5ç5êuä5ç5åuçÏØ]ÛÙ]ˆŠK
–Ù]KYY]Z[œ]×HŠK›Û˜ÛXÚÏJ
OOÛÊJ
K

JN™YJ
_K
–Ù]KX\›İ™KZ[œ]×HŠK›Û˜ÛXÚÏJ
OO˜Š[[[˜İ[ÛŠŠ
^ÚYŠJPŠš[š]X[ŠJJ^ÚHL
–Ù]KX\›İ™KZ[œ]×HŠK™\ØX›YHLŠµêuåuç5åÈ5äuéõêuêˆ5êµæõè5åuçÈ5ç5êuê5ê¸ )ˆŠNİ^Û]O^ZY[‹œİ\
KšYK™\œÚ[Û‹
NÜ	‰ŠÏ\ÙJŠßKÊKÜ[_JKYJ
KÙJ
J_XØ]Ú
J^ÑŠK›Y\ÜØYÙJK	‰Š
–Ù]KX\›İ™KZ[œ]×HŠK™\ØX›YHPŠš[š]X[ŠJ_Yš[˜[^ÚHL___JK_Šµå5èuåuæõçÈ5èµäõæuæuçÈ5ä5æuè5åH5çµåõåuäuê5ç5èué5éÈRKˆ5å5å5ê5éµå5åõèuåuçµå5èµäÈ5ç5å5êuç5çµêˆ5å5åõæuäuåuê5å5çµä5åuäuæ5åËˆŠ_Y[˜İ[Ûˆ™J
^ŞOH\]H‹	
	ÏÏµäuéõêuêˆ5èµäõæõåuçÈ5ç5çµèuç5åuç5çµä5åuêuêÚÏµå5èµäõæõåuçÈ5çµêuêµçµêH5äuêµä5ê5æuæõæuçK5äuêµéõéµæuäH5åuäuä5æuç5åuéµæuçH5å5çµä5åuêuê5æuçKˆ5å5èuåuæõçÈ5æuéµæuèˆ5êuæuè5åuæuæuçH5äuç5äuäÎÈ5æuêH5ç5ä5êuê5ä5åuêµçH5äuè5é5ê5äËÜ›Ü›H]K]\]KY›Ü›OX™[µçµå5ç5êuè5åuêÏ^\™XH˜[YOH\]R[œİXİ[ÛœÈˆ™\]Z\™YX^[™İHŒŒ‰ÊŞJ
JÉÏİ^\™XOÛX™[]Ûˆ\OHœİX›Z]µå5çµêuæˆ5ç5äuäõæuéõêˆ5å5äuéõêuåØ]ÛÙ›Ü›O‰ÊK
–Ù]K]\]KY›Ü›WHŠK›ÛœİX›Z]]OOÚYŠKœ™]™[Y˜][

KQ
–Û˜[YO]\]R[œİXİ[Ûœ×HŠK˜[YKš[J
KU›[™İŒ™LÊ^ÑŠµæuêH5ç5æõêµåuäH5äuéõêuêˆ5èµäõæõåuçÈ5äuä5åuê5æˆx $ÌŒ5êµåuåuæuçHŠNÜ™]\›ŸUŠ
__Y[˜İ[ÛˆŠ
^ŞOH\]K\™]šY]È‹	
Ïµä5æuêuåuê5çµåõéõê5ç5èµäõæõåuçÈ5çµèuç5åuçÚÏˆŠŞJ
JÈÜµå5é5èµåuç5å5éµåuê5æõêˆ5çµæõèuêˆ5èµäõæõåuçÈ5åuæõé5åué5å5ç5êµéõê5åuêˆ5èµç5åuêˆ5å5èuåuæõçÎˆ5èµäÈH8 ªˆ5ç5å5ê5éµå5åu¯ŒŒ8 ªˆ5ç5åõåuäõêKˆ5êµêµéõäuç5å5éµèµå5äuç5äuäÈ5ç5ç5ä5å5åµçµè5å5ä5åH5êµêuç5åuçKÜ]Ûˆ]KX\›İ™K]\]HŠÊPŠ\]HŠ_JˆO[[	‰‹˜\›İ™Y[œ]
OÈ™\ØX›YˆˆŠJÈµçµä5êuê5å5êµåõç5êˆ5çµåõéõê5ç5èµäõæõåuçÏØ]Û]Ûˆ]KYY]]\]Oµèµê5æuæõêˆ5å5äuéõêuåØ]ÛˆŠK
–Ù]KYY]]\]WHŠK›Û˜ÛXÚÏ[™K
–Ù]KX\›İ™K]\]WHŠK›Û˜ÛXÚÏJ
OO˜Š[[[˜İ[ÛŠŠ
^ÚYŠJPŠ\]HŠ_JˆO[[	‰‹˜\›İ™Y[œ]
JJ^ÚHL
–Ù]KX\›İ™K]\]WHŠK™\ØX›YHLİ^Û]O^ZY[‹\]Tİ\
KšYK™\œÚ[Û‹‹˜\›İ™Y[œ]
NÜ	‰ŠÏ\ÙJŠßKÊKÜ[_JKYJ
KÙJ
J_XØ]Ú
J^ÑŠK›Y\ÜØYÙJK	‰Š
–Ù]KX\›İ™K]\]WHŠK™\ØX›YHPŠ\]HŠJ_Yš[˜[^ÚHL___J_Y[˜İ[ÛˆYJ
^İ˜\ˆYKŞOH›[Ûš]ÜˆÛ]OYÏO[[İ›ÚY™Ëœ[ÚYŠ]J^ÙYJ
NÜ™]\›Ÿ[]O]K˜\Y˜XİOZÊJJÈˆŠŞJJJJJÈÜµèµç5åuêˆ5êuè5ê5êuçµåˆŠÜ[Š
KœÜ[ØYÛÜ›İ
KÌL
JÈˆ0­È5êuçµåuêˆŠÜ[Š
Kœ™\Ù\™YØYÛÜ›İ
KÌL
JÈÜˆÊOO[[İ›ÚY›KšÚ[™
OOOHœ[—İ\]HÊJÏHÏµèµäõæõåuçÈ5çµåuéµèˆ5ç5çµèuç5åuç5å5éõæuæuçOÚÏˆŠŞJKœİ[[X\JJÈÜ[ˆŠÊKØ\›š[™Üß×JK›X\
YOOˆOˆŠŞJYJJÈÛOˆŠKš›Ú[ŠˆŠJÉÏİ[]ˆÛ\ÜÏHœ[›™\‹\™]šY]È‰ÊÛK˜Ú[™Ù\Ë›X\
YOOˆ\XÛOˆŠŞJYKœ^[ØY›˜[Y_YKœ^[ØY]_YKœ^[ØYœXÙ_YKšÚ[™
JÈÚµê5êuåuçµåŠŞJYKšY
JÈˆ0­È5äµê5èuåŠŞJYK™\œÚ[ÛŠJÈÜˆŠÓØš™Xİ™[šY\ÊYKœ^[ØY
K›X\

Ù]İJOOˆˆŠŞJÛ˜[YNˆµêuçH‹]Nˆµæõåuêµê5êˆ‹XÙNˆµçµéõåuçH‹^NˆµæuåuçH‹Ú[™ˆµèuåuäˆ‹\›ˆµéõæuêuåuê‹›İ\Îˆµå5èµê5åuêˆ‹]ˆµéõåH5ê5åuåõäH‹™ÎˆµéõåH5ä5åuê5æˆ‹Ø]YÛÜNˆµéõæ5äµåuê5æuå‹\Nˆµèuåuäˆ‹\™XNˆµä5åµåuê‹İZYNˆµçµäõê5æuæˆ‹Û™Nˆµå5åuêuç5çH‹ÛÜšÙ›İÔİ]\ÎˆµçµéµäHŸVÙ]_]
JÈÙˆŠŞJ\[ÙˆİOH›Øš™XİÒ”ÓÓ‹œİš[™ÚYJİ
N˜İ
JÈÙˆŠKš›Ú[ŠˆŠJÈÙØ\XÛOˆŠKš›Ú[ŠˆŠJÈÙ]]Z[Ïİ[[X\Oµçµéõåuê5åuêˆ5å5çµåõéõêÜİ[[X\OˆŠÊKœÛİ\˜Ù\ß×JK›X\
YOOİ^Ü™]\›‰ÏH™YH‰ÊŞJÜÊYK\›
JJÉÈˆ\™Ù]H—Ø›[šÈˆ™[H››ÛÜ[™\ˆ›Ü™Y™\œ™\ˆ‰ÊŞJYK]JJÈØOœˆŠŞJYK™^Ù\œ
JÈÜˆŸXØ]Ú
]
^Ü™]\›ˆˆŸ_JKš›Ú[ŠˆŠJÈÙ]Z[Ïµå5ä5æuêuåuê5æuåõæuç5ê5éÈ5ä5êˆ5å5êuæuè5åuæuæuçH5å5çµåuéµäµæuçH5èµç5å5é5ê5æuæ5æuçH5å5éõæuæuçµæuçKˆ5ä5æuçÈ5å5åµçµè5å5ä5åH5êµêuç5åuçKˆ5êuæuè5åuæH5äuè5êµåuè5æuçH5çµä5åˆ5å5å5éµèµå5æuåõæuæuäH5ê5èµè5åuçËÜˆ‹Kœİ]OOOHœ™XYH‰‰ŠJÏIÏ]Ûˆ]K\X›\Ú\[ˆÛ\ÜÏHœš[X\Hˆ	ÊÊKœ]\ÙYØ][K˜Ú[™Ù\Ë›[™İÈ™\ØX›YˆˆŠJÈµçµä5êuê5ä5êˆ5å5êuæuè5åuæuæuçH5å5çµåuéµäµæuçH5ç5çµèuç5åuçØ]ÛˆŠJN›I‰ŠJÏHÏµå5êµæõè5åuçÈ5å5çµåuéµèÚÏˆŠŞJKœİ[[X\JJÈÜˆŠŞJKœİ\
JÈˆ0­ÈŠÛK™^\ÊÈˆ5æuçµæuçH0­È5èµç5åuêˆ5çµêuåuèµê5êˆŠÜ[ŠK™\İ[X]Yİ[
JÈÜ[ˆŠÛKØ\›š[™ÜË›X\
YOOˆOˆŠŞJYJJÈÛOˆŠKš›Ú[ŠˆŠJÈİ[ˆŠÛK™]P[\›˜]]™\Ë›X\
YOO‰Ï\ÚYHÛ\ÜÏHœ[›™\‹XYÙ]İ›Û™Ïµå5éµèµêˆ5êuæuè5åuæH5êµä5ê5æuæˆ	ÊŞJYKœİ\
JÈˆ0­È5åõæuèuæõåuçÈ5çµêuåuèµêŠŞYKœØ]š[™ÜÔİ
È‰OÜİ›Û™ÏˆŠŞJYKœ™X\ÛÛŠJÈˆ0­È5äõåuê5êH5ä5æuêuåuê5åuêuæuè5åuæH5è5êµåuè5æuçH5ç5é5è5æH5êµæõè5åuçÈ5çµåõäõêOÜØ\ÚYOˆŠKš›Ú[ŠˆŠJÉÏ]ˆÛ\ÜÏHœ[›™\‹\™]šY]È‰ÊÛKœ™XÛÜ™Ë›X\
YOO‰Ï\XÛOÜ[ˆÛ\ÜÏH˜˜YÙH‰ÊŞJÜİÜˆµçµèuç5åuç‹›ÛÚÚ[™Îˆµå5éµèµêˆ5å5åµçµè5å‹\ÚÎˆµçµêuæuçµå‹XÙNˆµçµéõåuçH5åuêuæuê5åuêˆ‹ÙX\ˆµéµæuåuäÈŸVŞYKšÚ[™JJÈÜÜ[ˆŠŞJYKœ^[ØY›˜[Y_YKœ^[ØY]_YKœ^[ØYœXÙJJÈÚˆŠŞJYKœ^[ØY››İ\ßˆŠJÈÜˆŠÊYKšÚ[™OOH˜›ÛÚÚ[™ÈÈİ›Û™Ïµçµåõæuê5æõåuç5ç5çµêuåuèµêˆŠÜ[ŠYKœ^[ØY˜ÛÜİ
JÈÜİ›Û™ÏÜµèué5éÎˆŠŞJYKœ^[ØYœİ\Y\Ÿµæ5ê5çH5è5äuåõêŠJÈÜˆŠÊYKœ^[ØY\›ÉÏH™YH‰ÊŞJYKœ^[ØY\›
JÉÈˆ\™Ù]H—Ø›[šÈˆ™[H››ÛÜ[™\ˆ›Ü™Y™\œ™\ˆµé5ê5æ5æH5å5å5éµèµå8¡¥ÏØO‰ÎˆˆŠNˆˆŠJÊYKšÚ[™OOHœİÜÈÛX[µæuåuçHŠŞYKœ^[ØY™^JÈÜÛX[ˆˆˆŠJÈØ\XÛOˆŠKš›Ú[ŠˆŠJÈÙ]]Z[Ïİ[[X\Oµçµéõåuê5åuêˆ5å5çµåõéõêÜİ[[X\OˆŠÛKœÛİ\˜Ù\Ë›X\
YOO‰ÏH\™Ù]H—Ø›[šÈˆ™[H››ÛÜ[™\ˆ›Ü™Y™\œ™\ˆˆ™YH‰ÊŞJYK\›
JÉÈ‰ÊŞJYK]JJÈØOœˆŠŞJYK™^Ù\œ
JÈœÛX[µçµåõæuê5çµêuåuèµêÈ5ä5æuè5äõæuéõéµæuå0­ÈŠŞJYKœ™]šY]™Y]ˆŠJÈÜÛX[ÜˆŠKš›Ú[ŠˆŠJÈÙ]Z[Ïˆ‹Kœİ]OOOHœ™XYH‰‰ŠJÏHµå5é5èµåuç5å5êµåuèuæuèÈŠÛKœ™XÛÜ™Ë›[™İ
ÉÈ5ê5êuåuçµåuê‹ˆ5äuäõåuéÈ5æõé5æuç5åuæuåuêˆ5çµåuç5å5êµæõè5åuçÈ5å5éõæuæuçNÈ5çµæuäõèˆ5éõæuæuçH5ç5ä5æuæuçµåõéÈ5ä5åH5æuåuåõç5èËˆ5êµä5ê5æuæˆ5åuçµêuæˆ5å5æ5æuåuç5æuèµåuäõæõè5åH5ç5é5æH5å5êµæõè5åuçÈ5å5çµåuéµä‹Ü]Ûˆ]K\X›\Ú\[ˆÛ\ÜÏHœš[X\Hˆ	ÊÊKœ]\ÙYØ]È™\ØX›YˆˆŠJÈµçµä5êuê5ä5êˆ5å5êµæõè5åuçÈ5å5çµåuéµäˆ5åuå5åuèué5êµåH5ç5ä5êµêØ]ÛˆŠJKÈœ]Y]YY‹œ™\ÙX\˜Ú[™È‹œ™XYH—Kš[˜ÛY\ÊKœİ]J_
JÏH]Ûˆ]K[™]Ë\[µêµæõè5åuçÈ5è5åuèuèÏØ]ÛˆŠK	
JKR”ÓÓ‹œİš[™ÚYJJKÜŠKJK
–Ù]K\™Yœ™\Ú\[—HŠK›Û˜ÛXÚÏ^YOO˜Š[[[˜İ[ÛŠŠ
^Û]]^YK˜İ\œ™[\™Ù]Ù]™\ØX›YHL]^ÛÛ[HµäuåuäõéÈ5çµéµäx )ˆİ^ŞZY[ÙJ
_Yš[˜[^Ü	‰™]š\ĞÛÛ›™XİY	‰Š]™\ØX›YHLK]^ÛÛ[Hµê5èµè5çÈ5çµéµäH5èµæõêuæuåHŠ__JK
Q
–Ù]K[™]Ë\[—HŠJOO[[˜Y]™[\İ[™\Š˜ÛXÚÈ‹

OOÛÊJ
K

JNŠYÛØ˜[\Ë˜Ü\Ëœ˜[™ÛUURQ

KYJ
J_JNÙ›ÜŠ]YHÙ–Èœ]\ÙH‹œ™\İ[YH‹˜Ø[˜Ù[—JJYOQ
–Ù]KHŠŞYJÈ‹\[—HŠJOO[[YK˜Y]™[\İ[™\Š˜ÛXÚÈ‹]O˜Š[[[˜İ[ÛŠŠ
^ÚYŠYOOOH˜Ø[˜Ù[‰‰ˆY˜ÛÛ™š\›Jµç5äuæ5ç5ä5êˆ5å5å5ê5éµåÈ5ä5æH5ä5é5êuê5ç5å5çµêuæuæˆ5å5ê5éµå5êuäuåuæ5ç5åˆ5é5èµåuç5å5êuæõäuê5è5êuç5åõå5ç5èué5éÈ5èµêuåuæuå5ç5éµê5åuæˆ5êµéõéµæuäKˆŠJ\™]\›ÚHLÛ]İY]˜İ\œ™[\™Ù]Øİ™\ØX›YHLŠÜ]\ÙNˆµçµêuå5å5ä5êˆ5å5å5ê5éµå8 )ˆ‹™\İ[YNˆµçµçµêuæuæˆ5ä5êˆ5ä5åuêµå5å5ê5éµå8 )ˆ‹Ø[˜Ù[ˆµçµäuæ5ç5ä5êˆ5å5å5ê5éµå8 )ˆŸVŞYWJNİ^Û][^ZY[–ŞYWJKšY
NÚYŠ\
\™]\›Ù[‰‰ŠÏ\ÙJŠßKÊKÜ[™[ŸJKYJ
JKZY[ÙJ
_XØ]Ú
[Š^ÑŠ[‹›Y\ÜØYÙJ_Yš[˜[^ÚHLK	‰˜İš\ĞÛÛ›™XİY	‰Šİ™\ØX›YHLJ__JJNÊQ
–Ù]K\X›\Ú\[—HŠJOO[[˜Y]™[\İ[™\Š˜ÛXÚÈ‹YOO˜Š[[[˜İ[ÛŠŠ
^ŞYK\™Ù]™\ØX›YHLİ^ŞZY[
Kœ\œÜÙOOOH\]HŸ
OO[[İ›ÚY›KšÚ[™
OOOHœ[—İ\]HÛ‹\]TX›\Ú›‹œX›\Ú
JKšYKš\İ™\œÚ[ÛŠK	‰ŠJ
K˜ÛÜÙJ
KZY[J
J_XØ]Ú
]
^ÑŠ]›Y\ÜØYÙJK	‰ŠYK\™Ù]™\ØX›YHLJ__JJ_Y[˜İ[ÛˆÙJ
^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^Ù˜ÛX\•[Y[İ]
ÊNÛ]OJÊÑNİ^Û]ÛKWO^ZY[›ÛZ\ÙK˜[
Û‹›İ™\šY]ÊKšY
K‹œXÚØYÙSÜ[ÛœÏÛ‹œXÚØYÙSÜ[ÛœÊKšY
K˜Ø]Ú


OO›[
N”›ÛZ\ÙKœ™\ÛÛ™J[
WJNÚYŠ\HOOQJ\™]\›ĞOQ]K››İÊ
KŠˆŠKÏ[KQKO[Kœ™XYOOOHLÊ
KJ
KOOOH›[Ûš]ÜˆÔˆOOR”ÓÓ‹œİš[™ÚYJKœ[ŠOØYJ
NšÜŠKœ[‹JNOOOHš[œ]‰‰ˆRI‰›Kœ[‰‰ŠÈœ]Y]YY‹œ™\ÙX\˜Ú[™È—Kš[˜ÛY\ÊKœ[‹œİ]J_Kœ[‹œ]\ÙYØ]
OØYJ
NOOOH\]K\™]šY]ÈÑ
–Ù]KX\›İ™K]\]WHŠK™\ØX›YHPŠ\]HŠ_JˆO[[	‰‹˜\›İ™Y[œ]
NOOOHœİ[[X\H‰‰Š
–Ù]KX\›İ™KZ[œ]×HŠK™\ØX›YHPŠš[š]X[ŠJK[I‰HOOH›[Ûš]Üˆ‰‰‘Šµå5èuåuæõçÈ5èµäõæuæuçÈ5ä5æuè5åH5çµåõåuäuê5ç5èué5éÈRKˆ5ä5é5êuê5ç5çµç5ä5ä5êˆ5å5êuä5ç5åuçÎÈ5å5å5ê5éµå5åõèuåuçµåˆŠKKœ[‰‰ŠÈœ]Y]YY‹œ™\ÙX\˜Ú[™È—Kš[˜ÛY\ÊKœ[‹œİ]J_Kœ[‹œ]\ÙYØ]Kœ[‹œİ]OOOH˜Ø[˜Ù[Y‰‰›Kœ[‹œ™\Ù\™YØYÛÜ›İŒ
I‰ŠÏYœÙ][Y[İ]
ÙKYLÊJ_XØ]Ú
J^Ü	‰OOOQI‰Š[[J
K
–Ù]KX\›İ™KZ[œ]×HŠI‰Š
–Ù]KX\›İ™KZ[œ]×HŠK™\ØX›YHL
K
–Ù]KX\›İ™K]\]WHŠI‰Š
–Ù]KX\›İ™K]\]WHŠK™\ØX›YHL
KŠµç5ä5è5æuêµçÈ5ç5èµäõæõçÈ5ä5êˆ5çµéµäH5å5å5ê5éµå5æõê5äµè‹ˆŠÛK›Y\ÜØYÙJÈˆ0­È5äuäõæuéõå5è5åuèué5êˆ5äuèµåuäÈL5êuè5æuåuêÈ5ä5æuçÈ5éµåuê5æˆ5ç5å5êµåõæuç5å5ê5éµå5åõäõêuåˆŠKÏYœÙ][Y[İ]
ÙKYM
J__J_ZYŠÊ]^ŞSJ
KŠ
_XØ]Ú
J^ÙYJ
_Y[ÙHYJ
NÜ™]\›ˆ›Ü[ŸœÚİÓ[Ù[

KÙJ
K_Y[˜İ[ÛˆZJ
^Ù[˜İ[ÛˆJÊ^Ü™]\›ˆŠ\Ë\™İ[Y[Ë[˜İ[ÛŠŠ‹O^ßJ^İ˜\ˆÚYŠ]™[˜İ[ÛœÊ]›İÈ\œ›ÜŠµêuæuê5åuêˆ5å5èuåuæõçÈ5ä5æuè5åH5åµçµæuçÈ5æõê5äµèˆŠNÛ]Ù]N›\œ›Ü˜ßO^ZY[™[˜İ[ÛœËš[›ÚÙJš\\[›™\ˆ‹Ø›ÙN’ŠØXİ[ÛœŸKJ_JNÚYŠßO[[	‰›™\œ›ÜŠ^Û][O[[İ›ÚY›™\œ›ÜÚYŠZ	‰Š
XÏO[[İ›ÚY˜Ë˜ÛÛ^
HO[[	‰™˜ÛÛ™JJ]^ÚJ^ZY[Ë˜ÛÛ^˜ÛÛ™J
KšœÛÛŠ
JOO[[İ›ÚYœ™\œ›ÜŸXØ]Ú
J^ß]›İÈ\œ›ÜŠ\[ÙˆOHœİš[™È‰‰š›[™İMLÚˆµç5ä5è5æuêµçÈ5ç5å5êuç5æuçH5ä5êˆ5å5é5èµåuç5å5çµåuç5êuæuê5åuêˆ5å5èuåuæõçËˆ5è5èuå5ç5ê5èµè5çËˆŠ_\™]\›ˆJ_\™]\›ÜXÚØYÙSÜ[ÛœÎœO˜Š[[[˜İ[ÛŠŠ
^Û]Ù]NšK\œ›ÜœßO^ZY[œœÊ˜XØÛİ[ÜXÚØYÙWÛÜ[ÛœÈ‹Üİš\œŸJNÚYŠÊ]›İÈ\œ›ÜŠµç5ä5è5æuêµçÈ5ç5èµäõæõçÈ5ä5êˆ5åµæõä5åuêˆ5å5åõäuæuç5åˆ5è5èuå5ç5ê5èµè5çËˆŠNÜ™]\›ˆ_JK›İ]Q\İ[˜ÙNŠ‹KÏH‘’U‘HŠOO˜Š[[[˜İ[ÛŠŠ
^Û]^ZY[Jœ›İ]Q\İ[˜ÙH‹İš\Yœ‹š\™\œÚ[ÛšK˜]™[[ÙNœßJNÜ™]\›ˆ[\[ÙˆOH›Øš™XİŞÜİ]\Îˆ[œ™\ÛÛ™Y‹Ûİ\˜ÙNˆš\\[›™\ˆ‹ÚXÚÙY]›[^\Î–×Kİ[Ù\İ[˜ÙSY]\œÎ›[\˜][Û”ÙXÛÛ™Î›[K[œ™\ÛÛ™Y–ŞÜİÜY›[™X\ÛÛˆµêuæuê5åuêˆ5å5èuåuæõçÈ5å5åõåµæuê5êµêuåuäuêˆ5çµèuç5åuç5ê5æuéõåˆŸW_NŠO[[İ›ÚY›œİ]\ÊOOOHœİXØÙ\ÜÈ‰‰ˆSÚJÜİ]\Îˆ™\šYšYY‹Ûİ\˜ÙN›œÛİ\˜ÙKÚXÚÙY]›˜ÚXÚÙY]KÛX^YÙS\Î”šKœ›İ]_JOŞÜİ]\Îˆ[œ™\ÛÛ™Y‹Ûİ\˜ÙN›œÛİ\˜Ù_™ÛÛÙÛWÜ›İ]\È‹ÚXÚÙY]›˜ÚXÚÙY][^\Î–×Kİ[Ù\İ[˜ÙSY]\œÎ›[\˜][Û”ÙXÛÛ™Î›[K[œ™\ÛÛ™Y–ŞÜİÜY›[™X\ÛÛˆµêµåuéµä5êˆ5å5çµèuç5åuç5ä5æuè5å5æ5ê5æuæuå5çµèué5æuéËˆŸW_N›œİ]\ÈOOHœİXØÙ\ÜÈ‰‰ˆP\œ˜^Kš\Ğ\œ˜^J[œ™\ÛÛ™Y
OÜÙJŠßK
KÜİ]\Îˆ[œ™\ÛÛ™Y‹[œ™\ÛÛ™Y–ŞÜİÜY›[™X\ÛÛˆµêuæuê5åuêˆ5å5çµèuç5åuç5å5åõåµæuê5çµäuè5å5êµêuåuäuå5ç5ä5êµéõæuçËˆŸW_JN›JK\]Tİ\Š‹KËÊOO™J\]Tİ\‹İš\Yœ‹™\œÚ[ÛšK[œ]œËÙ^N›[œİXİ[ÛœÎ˜ßJK\]TX›\ÚŠ‹JOO™J\]TX›\Ú‹Ü[’Yœ‹™\œÚ[Ûš_JKZ[Sİ™\šY]ÎœO™J™Z[Sİ™\šY]È‹İš\YœŸJKZ[PÛÛ›ÛŠ‹KÊOO™J™Z[PÛÛ›Û‹İš\Yœ‹ÛÛ›ÛšK™\œÚ[ÛœßJK™]šY]ÑZ[NŠ‹KÊOO™Jœ™]šY]ÑZ[H‹Ü™\]Y\İYœ‹™\œÚ[ÛšKXÚ\Ú[ÛœßJKİ™\šY]ÎœO™J›İ™\šY]È‹İš\YœŸJKİ\Š‹KË
OO™Jœİ\‹İš\Yœ‹™\œÚ[ÛšK[œ]œËÙ^N›JK]\ÙNœO™Jœ]\ÙH‹Ü[’YœŸJK™\İ[YNœO™Jœ™\İ[YH‹Ü[’YœŸJKØ[˜Ù[œO™J˜Ø[˜Ù[‹Ü[’YœŸJKX›\ÚŠ‹JOO™JœX›\Ú‹Ü[’Yœ‹™\œÚ[Ûš_J__Y[˜İ[ÛˆÛJJ^Ü™]\›ˆŠ\Ë\™İ[Y[Ë[˜İ[ÛŠŠİš\Y™Kš\™\œÚ[Û›‹]Y\NœŸO^ßJ^ÚYŠJO[[	‰™[˜İ[ÛœÊJ]›İÈ\œ›ÜŠµêuæuê5åuêˆ5å5èuåuæõçÈ5ä5æuè5åH5åµçµæuçÈ5æõê5äµèˆŠNÛ]ÏS[X™\ŠŠKTİš[™ÊˆO[[ÜˆˆŠKš[J
NÚYŠ\[ÙˆHOHœİš[™ÈŸYKš[J
_S[X™\‹š\ÔØY™R[YÙ\ŠÊ_Ï_[
]›İÈ\œ›ÜŠµåõèuê5å5éõêuê5êµéõæuçÈ5ç5äuåõæuê5êˆ5æuæõåuç5êˆ5å5èuåuæõçÈŠNÛ]Ù]N˜Ë\œ›Ü™O^ZY[™[˜İ[ÛœËš[›ÚÙJš\\[›™\ˆ‹Ø›ÙNØXİ[Ûˆ˜YÙ[ÛÛÙ[Xİ‹š\Y™Kš[J
Kš\™\œÚ[ÛœË]Y\N›_JNÚYŠÈO[[	‰˜Ë™\œ›ÜŠ^Û]]\[ÙŠÏO[[İ›ÚY˜Ë™\œ›ÜŠOOHœİš[™ÈØË™\œ›Ü\[ÙŠO[[İ›ÚY™›Y\ÜØYÙJOOHœİš[™ÈÙ›Y\ÜØYÙNˆµç5ä5è5æuêµçÈ5ç5äuåõåuê5æuæõåuç5êˆ5èuåuæõçÈ5æõê5äµèˆİ›İÈ\œ›ÜŠ
_\™]\›ˆßJ_]˜\ˆ]Oİ˜\ˆKÜ™]\›ŠO[[İ›ÚYšÚ[™
OOOH˜›ÛÚÚ[™È‰‰‹õç5æuè5å5çµç5åuçßİ[ÙËÚK\İ
İš[™Ê

O]œ^[ØY
OO[[İ›ÚY™K\J_

]œ^[ØY
OO[[İ›ÚY›‹˜Ø]YÛÜJ_ˆŠJ_KÜÏ]Oİ˜\ˆK‹Ü™]\›Š
O]O[[İ›ÚYœ^[ØY
OO[[İ›ÚY™KœXÙJ_

]O[[İ›ÚYœ^[ØY
OO[[İ›ÚY›‹›˜[YJ_

]O[[İ›ÚYœ^[ØY
OO[[İ›ÚYœ‹]J_ˆŸK™]O”İš[™ÊˆŠKÓØØ[SİÙ\Ø\ÙJšHŠKœ™\XÙJÖø $ø %KÙË‹HŠKœ™\XÙJ×ÊËÙËˆŠKš[J
NÙ[˜İ[ÛˆŠJ^Û]Y™

KY™
ÜÊJJKOY™
‹œÜ]
×ÊËWÊËÊVÌJNÜ™]\›ˆHJ‰‰Š‰‰›‹š[˜ÛY\ÊŠ_I‰›‹š[˜ÛY\ÊJ_‰‰œ‹š[˜ÛY\ÊŠJJ_Y[˜İ[Ûˆ›JO^ßJ^Û]OJ\œ˜^Kš\Ğ\œ˜^JKš][\ÊOÙKš][\Î–×JK™š[\ŠŠK™š[™
O–Š
JNÚYŠZJ\™]\›Û[ÙNˆ›™YY×ØÛ\šYšXØ][Ûˆ‹ÛÛˆ™Ù]ÛÙÚ[™×ØÚXÚÚ[ˆ‹İ[›[NÛ]ÏZKœ^[ØYßK\Ë˜ÚXÚÒ[•[Y_Ë˜\œš]˜[[YNÚYŠ
\™]\›Û[ÙNˆ›ØØ[‹ÛÛˆ™Ù]ÛÙÚ[™×ØÚXÚÚ[ˆ‹İ[™ÜÊJK˜[YN›NÛ]Ï\Ë˜ÚXÚÒ[‘]_Ëœİ\]_[\Ë˜ÚXÚÓİ]]_Ë™[™]_[]\[ÙˆËœXÙRYOHœİš[™È‰‰œËœXÙRYš[J
OÜËœXÙRYš[J
N›[Ü™]\›Û[ÙNˆœ™\ÙX\˜Ú‹ÛÛˆœ™\ÙX\˜ÚÙ^\›˜[Ú[™›Ü›X][Ûˆ‹İ[™ÜÊJK\™İ[Y[ÎÙÛXZ[ˆšİ[‹[]N™ÜÊJK]Y\İ[Û”İš[™ÊˆŠKš[J
KÛİ\˜ÙR[œËÙXœÚ]_Ë\›ËœÛİ\˜ÙU\›[XÙRYœÚXÚÒ[‘]N˜ËÚXÚÓİ]]N™__]˜\ˆ]SØš™Xİ™œ™Y^™JÔ‘PQˆœ™XY‹ÓÓ•Vˆ˜ÛÛ^‹“ÔÔĞSˆœ›ÜÜØ[‹UUUSÓˆ›]]][Ûˆ‹VS”ÒU‘Nˆ™^[œÚ]™H‹TÕ•PÕU‘Nˆ™\İXİ]™H‹“ÒP’UQˆœ›ÚXš]Y‹SP’QÕSÕTÎˆ˜[XšYİ[İ\ÈŸJK]SØš™Xİ™œ™Y^™JÔ‘PQŒ“ÔÔĞSŒKUUUSÓŒ‹VS”ÒU‘NŒËTÕ•PÕU‘N“ÒP’UQ_JK]SØš™Xİ™œ™Y^™JĞSP’QÕSÕT×ĞÓÓ•VˆQÑS•ĞSP’QÕSÕT×ĞÓÓ•V‹“ÒP’UQĞPÕSÓˆQÑS•Ô“ÒP’UQĞPÕSÓˆ‹S•SQĞÓÓSPS‘ˆQÑS•ÒS•SQĞÓÓSPS‘‹S•SQÔ‘TÔÓ”ÑNˆQÑS•ÒS•SQÔ‘TÔÓ”ÑH‹“Õ’QT—ÕSÑT•RSˆQÑS•Ô“Õ’QT—ÕSÑT•RSˆŸJK]SØš™Xİ™œ™Y^™JÒÕSˆšİ[‹“QÒˆ™›YÚ‹ÑPUTˆÙX]\ˆ‹“ÕUNˆœ›İ]H‹UPÕSÓˆ˜]˜Xİ[Ûˆ‹‘TÕUTS•ˆœ™\İ]\˜[‹ÑPˆÙXˆŸJK]ÏSØš™Xİ™œ™Y^™JÕ‘T’Q’QQˆ™\šYšYY‹TÕSPUQˆ™\İ[X]Y‹S”‘TÓÓ‘Qˆ[œ™\ÛÛ™YŸJKQO[™]ÈÙ]
Øš™Xİ˜[Y\Ê]ŠJK‘O[™]ÈÙ]
Øš™Xİ˜[Y\Ê]ÊJNİ˜\ˆ	O[™]ÈÙ]
Øš™Xİ˜[Y\Ê]
JKO^ÖÑ]”‘PQNœ]”‘PQÑ]ÓÓ•VNœ]”‘PQÑ]SP’QÕSÕT×Nœ]”‘PQÑ]”“ÔÔĞSNœ]”“ÔÔĞSÑ]“UUUSÓ—Nœ]“UUUSÓ‹Ñ]‘VS”ÒU‘WNœ]‘VS”ÒU‘KÑ]‘TÕ•PÕU‘WNœ]‘TÕ•PÕU‘KÑ]”“ÒP’UQNœ]”“ÒP’UQNİ˜\ˆYOJKV×KH™]HŠOOŠÛ˜[YN\ØÜš\[Û™KÚ[™‘]”‘PQ\›İ˜[]™[œ]”‘PQ™\]Z\™YÛÛ^–È›İÛ™\’Y‹š\Y‹š\™\œÚ[Ûˆ—K™\]Z\™Y\™İ[Y[Î›‹™\İ[Ú\NœŸJKÏSØš™Xİ™œ™Y^™JÒYJ™Ù]İÙX]\ˆ‹µêµåõåµæuêˆ5çµåµäˆ5ä5åuåuæuê5ç5é5æH5çµæuéõåuçH5åuêµä5ê5æuæˆ‹È™^H—K™›Ü™XØ\İŠKYJ™Ù]Ü›İ]WÙ\İ[˜ÙH‹µçµê5åõéÈ5åuåµçµçÈ5è5èuæuèµå5ç5é5æH5æuçµæH5å5çµèuç5åuç‹×Kœ›İ]K]X›HŠKYJ™Ù]ÛÜ[š[™×Úİ\œÈ‹µêuèµåuêˆ5é5êµæuåõå5êuç5çµéõåuçH5äuèµçXÙHQ‹ÈœXÙRY—K›Ü[š[™ËZİ\œÈŠKYJ™Ù]İš\Ü™XY[™\ÜÈ‹µäuäõæuéõêˆ5çµåuæõè5åuêˆ5å5æ5æuåuç‹×Kœ™XY[™\ÜÈŠKYJ™Ù]İš\Ù]Z[È‹µé5ê5æ5æH5å5æ5æuåuç5æuèµäË5êµä5ê5æuæõæuçH5åuçµêuæˆ‹×Kš\Y]Z[ÈŠKYJ™Ù]Ù^WÜ[ˆ‹µêµåuæõè5æuêˆ5å5æuåuçH5åuå5èµéµæuê5åuêˆ5äuæuåuçH5çµèuåuæuçH‹È™^H—K™^K\[ˆŠKYJ™Ù]ÜİÜ×ØWÙ^H‹µæõç5å5èµéµæuê5åuêˆ5ç5é5æH5æuçµæuçH‹×KœİÜËXKY^HŠKYJ™Ù]ÛÙÚ[™×Üİ[[X\H‹µèuæuæõåuçH5çµéõåuçµåuêˆ5å5ç5æuè5å‹×K›ÙÚ[™Ë\İ[[X\HŠKYJ™Ù]ÛÙÚ[™×Ù]\È‹µçµéõåuçµåuêˆ5ç5æuè5å5åuêµä5ê5æuæõæH5ç5æuè5å‹×K›ÙÚ[™ËY]\ÈŠKYJ™Ù]ÛÙÚ[™×ØÚXÚÚ[ˆ‹µêuèµêˆ5å5æõè5æuèuå5ç5çµéõåuçH5ç5æuè5å5çµèuåuæuçH‹×K›ÙÚ[™ËXÚXÚÚ[ˆŠKYJ˜Ø[İ[]WÛÙÚ[™×ÛšYÚÈ‹µåõæuêuåuäH5çµèué5ê5ç5æuç5åuêˆ5ç5é5æH5êµä5ê5æuæõæH5ç5æuè5å‹×K›ÙÚ[™Ë[šYÚÈŠKYJ™Ù]ÜØ]™YÛÙÚ[™×ÜšXÙ\È‹µçµåõæuê5æH5ç5æuè5å5êuæõäuê5è5êuçµê5åH5äuå5åµçµè5åuêˆ‹×KœØ]™Y[ÙÚ[™Ë\šXÙ\ÈŠKYJ™Ù]Ø›ÛÚÚ[™×Üİ]\È‹µèuæ5æ5åuèH5å5å5åµçµè5åuêˆ5åuå5ä5æuêuåuê5æuçH‹×K˜›ÛÚÚ[™Ë\İ]\ÈŠKYJ™Ù]ØYÙ]Üİ[[X\H‹µêµéõéµæuäK5å5åuéµä5åuêˆ5åuæuêµê5å‹×K˜YÙ]\İ[[X\HŠKYJ™Ù]İ\Ú×Üİ]\È‹µçµêuæuçµåuêˆ5é5êµåuåõåuêˆ5åuèuäµåuê5åuêˆ‹×K\ÚË\İ]\ÈŠKYJ™Ù]ÛZ\ÜÚ[™×Ù]H‹µçµæuäõèˆ5åõèuê5äuæ5æuåuç‹×K›Z\ÜÚ[™ËY]HŠKYJ™Ù]ÜÛİ\˜ÙWÜİ]\È‹µçµéµäH5çµéõåuê5åuêˆ5åuä5æuçµåuêˆ‹×KœÛİ\˜ÙK\İ]\ÈŠKYJœ™\ÙX\˜ÚÙ^\›˜[Ú[™›Ü›X][Ûˆ‹µçµåõéõê5çµæuäõèˆ5åõæuéµåuè5æH5ç5é5æH5êµåõåuçH5åuçµéõåuê‹È™ÛXZ[ˆ‹œ]Y\İ[Ûˆ—Kœ™\ÙX\˜ÚŠKYJ™Ù]Úİ[ÜšXÙ\È‹µçµåõæuê5æH5çµç5åuè5åuêˆ5ç5é5æH5êµä5ê5æuæõæuçH8 %5äõåuê5êH5çµéõåuê5åõæuéµåuè5æH‹×Kšİ[\šXÙ\ÈŠKYJœÙX\˜ÚÚİ[ÜšXÙ\È‹µåõæué5åuêH5çµåõæuê5æH5çµç5åuè5åuêˆ5çµèué5éÈ5åõæuéµåuè5æH‹×Kšİ[\ÙX\˜ÚŠKYJœÙX\˜ÚÚİ[Ø]˜Z[Xš[]H‹µäuäõæuéõêˆ5åµçµæuè5åuêˆ5çµç5åuçÈ‹×Kšİ[X]˜Z[Xš[]HŠKYJ˜ÛÛ\\™WÚİ[ÜšXÙ\È‹µå5êuåuåuä5êˆ5çµåõæuê5æH5çµç5åuè5åuêˆ‹×Kšİ[XÛÛ\\š\ÛÛˆŠKYJœ™\ÛÛ™WÜXÙWÚY‹µçµéµæuä5êˆXÙHQ5åuéõåuä5åuê5äõæuè5æ5åuêˆ‹×KœXÙK\™\ÛÛ][ÛˆŠKYJ™Ù]ÜXÙWÙ]Z[È‹µé5ê5æ5æH5çµéõåuçH5åuæõêµåuäuêˆ‹×KœXÙKY]Z[ÈŠKYJ™Ù]Ü›İ]WÛX]š^‹µå5êuåuåuä5êˆ5çµê5åõéõæuçH5åuåµçµè5æH5è5èuæuèµå‹×Kœ›İ]K[X]š^ŠKYJ˜[Y]WÜ›İ]H‹µäuäõæuéõêˆ5êµéõæuè5åuêˆ5çµê5åõéõæuçH5åuåµçµè5æuçH‹×Kœ›İ]K]˜[Y][ÛˆŠKYJ™Ù]İÙX]\—Üİ]\È‹µçµéµäH5åµçµæuè5åuêˆ5åuê5èµè5è5åuêˆ5êµåõåµæuêˆ‹×KÙX]\‹\İ]\ÈŠKYJœÙX\˜ÚØ]˜Xİ[ÛœÈ‹µåõæué5åuêH5ä5æ5ê5éõéµæuåuêˆ‹×K˜]˜Xİ[ÛœÈŠKYJ™Ù]Ø]˜Xİ[Û—Ù]Z[È‹µé5ê5æ5æH5ä5æ5ê5éõéµæuå‹×K˜]˜Xİ[Û‹Y]Z[ÈŠKYJ™Ù]Ø]˜Xİ[Û—Úİ\œÈ‹µêuèµåuêˆ5é5èµæuç5åuêˆ5êuç5ä5æ5ê5éõéµæuå‹×K˜]˜Xİ[Û‹Zİ\œÈŠKYJ™Ù]Ø]˜Xİ[Û—ÜšXÙ\È‹µçµåõæuê5æH5æõè5æuèuå5ç5ä5æ5ê5éõéµæuå‹×K˜]˜Xİ[Û‹\šXÙ\ÈŠK‹‹–È™Ù]Øİ\œ™[İÙX]\ˆ‹™Ù]Úİ\›WİÙX]\ˆ‹™Ù]İÙX]\—Ø[\È‹™Ù]Ù›YÚÙ]Z[È‹™Ù]Ù›YÚÙ\˜][Ûˆ‹™Ù]Ù›YÚÙ\İ[˜ÙH‹™Ù]İ˜[œÙ™\—Ù^\È‹˜[Y]WÙ›YÚÜÙ\]Y[˜ÙH‹œÙX\˜ÚÙ›YÚÛÜ[ÛœÈ‹™Ù]ÙÜ›İ[™İ˜[œÙ™\ˆ‹œÙX\˜ÚÜ™\İ]\˜[È‹œÙX\˜ÚÛ[İÜ˜ŞXÛWÜ›İ]\È‹˜[Y]WÜİÜÜÙ\]Y[˜ÙH‹œİYÙÙ\İÛ™X\˜WÜİÜÈ‹œÙX\˜ÚİÙX—ÜÛİ\˜Ù\È‹œİ[[X\š^™WÜÛİ\˜Ù\È‹˜ÛÛ\\™WÛÜ[ÛœÈ‹˜Ø[İ[]Wİš\Ù\İ[X]H‹˜ÚXÚ×Ú[™›Ü›X][Û—Ùœ™\Ú™\ÜÈ‹œ™]Wİ[œ™\ÛÛ™YÜ™\ÙX\˜Ú—K›X\
OŠÛ˜[YN\ØÜš\[Ûˆµæõç5æH5éõê5æuä5å5ä5åH5çµåõéõê5åõæuéµåuè5æH‹Ú[™‘]”‘PQ\›İ˜[]™[œ]”‘PQ™\]Z\™YÛÛ^–È›İÛ™\’Y‹š\Y‹š\™\œÚ[Ûˆ—K™\]Z\™Y\™İ[Y[Î–×K™\İ[Ú\Nˆ™^\›˜[ŸJJKÙJŠßKYJ›˜]šYØ]Wİ×ÜØÜ™Y[ˆ‹µé5êµæuåõêˆ5çµèuæˆ5çµêµä5æuçH5äuä5é5ç5æuéõéµæuå‹ÈœØÜ™Y[ˆ—K›˜]šYØ][ÛˆŠJKÚÚ[™‘]ÓÓ•VJKÛ˜[YNˆ˜Ü™X]WÜİÜ‹\ØÜš\[Ûˆµå5åuèué5êˆ5èµéµæuê5å5ç5çµèuç5åuç5ç5ä5åõê5ä5æuêuåuê5çµé5åuê5êH‹Ú[™‘]“UUUSÓ‹\›İ˜[]™[œ]“UUUSÓ‹™\]Z\™YÛÛ^–È›İÛ™\’Y‹š\Y‹š\™\œÚ[Ûˆ—K™\]Z\™Y\™İ[Y[Î–È™^H‹œXÙH—K™\İ[Ú\Nˆ›]]][ÛˆŸK‹‹–È\]Wİš\Ù]Z[È‹\]WÛÙÚ[™È‹\]WÜİÜ‹œ™[[İ™WÜİÜ‹˜Ü™X]Wİ\ÚÈ‹\]Wİ\ÚÈ‹\]WØ›ÛÚÚ[™×Üİ]\È‹œØ]™WÜXÙWÚY‹œ™Yœ™\Úİš\Ü™\ÙX\˜Ú—K›X\
OŠÛ˜[YN\ØÜš\[Ûˆµé5èµåuç5êˆ5êuæuè5åuæH5å5äõåuê5êuêˆ5ä5æuêuåuê5çµé5åuê5êH‹Ú[™‘]“UUUSÓ‹\›İ˜[]™[œ]“UUUSÓ‹™\]Z\™YÛÛ^–È›İÛ™\’Y‹š\Y‹š\™\œÚ[Ûˆ—K™\]Z\™Y\™İ[Y[Î–×K™\İ[Ú\Nˆ›]]][ÛˆŸJJWJK‘O[™]ÈX\
Ë›X\
O–İ›˜[YKJJNÙ[˜İ[Ûˆ[J
^Û]OTİš[™ÊˆŠKš[J
KÓØØ[SİÙ\Ø\ÙJšHŠNÜ™]\›‹õæõçµåŠŠ5æuèµç5å5èµåuç5å5çµåõæuê5èµç5åuêŠ_5çµåõæuêŠµçµç5åuçß5èµç5åuê‹Šµçµç5åuçËË\İ
JOŞİÛÛˆ™Ù]Úİ[ÜšXÙ\È‹\™İ[Y[Îß_N‹õåµçµæuè5åuêŸ5é5è5åuæ_5ä5é5êuê5ç5å5åµçµæuçËË\İ
JI‰‹õçµç5åuçß5ç5æuè5å5åõäõêË\İ
JOŞİÛÛˆœÙX\˜ÚÚİ[Ø]˜Z[Xš[]H‹\™İ[Y[Îß_N‹õå5êuåuåuå5å5êuåuåuä5êŸ5ç5å5êuåuåuê‹Ë\İ
JI‰‹õçµç5åuçß5ç5æuè5å5çµåõæuêË\İ
JOŞİÛÛˆ˜ÛÛ\\™WÚİ[ÜšXÙ\È‹\™İ[Y[Îß_N‹ÜXÙKÚY5çµåµå5å5çµéõåuç_5éõåuä5åuê5äõæuè5æ5åuêŸ5åµæuå5åuæH5çµéõåuçKË\İ
JOŞİÛÛˆœ™\ÛÛ™WÜXÙWÚY‹\™İ[Y[Îß_N‹õé5ê5æ5æH5å5çµéõåuç_5æõêµåuäuêŸ5æ5ç5é5åuçËŠµçµéõåuçKË\İ
JOŞİÛÛˆ™Ù]ÜXÙWÙ]Z[È‹\™İ[Y[Îß_N‹õçµæ5ê5æuéõè_5å5êuåuåuä5ê‹Šµçµê5åõéß5å5êuåuåuåŠµçµèuç5åuç5æuçKË\İ
JOŞİÛÛˆ™Ù]Ü›İ]WÛX]š^‹\™İ[Y[Îß_N‹õäuäõåuéËŠµçµèuç5åuç5çµê5åõéõæuçKŠµèuäuæuê5åµçµè5æuçKŠµèuäuæuêË\İ
JOŞİÛÛˆ˜[Y]WÜ›İ]H‹\™İ[Y[Îß_N‹õçµéµäKŠµêµåõåµæuêŸ5ê5èµè5è5åuê‹ŠµçµåµäŸ5å5ä5çKŠµêµåõåµæuê‹Šµåµçµæuè5åË\İ
JOŞİÛÛˆ™Ù]İÙX]\—Üİ]\È‹\™İ[Y[Îß_N‹õä5æ5ê5éõéµæuåuêŸ5çµå5ç5èµêuåuêŸ5çµéõåuçµåuêˆ5çµèµè5æuæuè5æuçKË\İ
JOŞİÛÛˆœÙX\˜ÚØ]˜Xİ[ÛœÈ‹\™İ[Y[Îß_N‹õçµåµä‹Šµèµæõêuæuå_5æ5çµé5ê5æ5åuê5å5èµæõêuæuåKË\İ
JOŞİÛÛˆ™Ù]Øİ\œ™[İÙX]\ˆ‹\™İ[Y[Îß_N‹õêµåõåµæuêˆ5ç5é5æH5êuèµåuêŸ5çµåµä‹Šµêuèµåuê‹Ë\İ
JOŞİÛÛˆ™Ù]Úİ\›WİÙX]\ˆ‹\™İ[Y[Îß_N‹õä5åµå5ê5åuêˆ5çµåµäŸ5å5êµê5ä5êˆ5çµåµä‹Ë\İ
JOŞİÛÛˆ™Ù]İÙX]\—Ø[\È‹\™İ[Y[Îß_N‹õæ5æuèuå5æ5æuèuåuê‹Ë\İ
JI‰‹õé5ê5æ5æuç_5çµêµæ_5çµèué5êË\İ
JOŞİÛÛˆ™Ù]Ù›YÚÙ]Z[È‹\™İ[Y[Îß_N‹õåµçµçÈ5æ5æuèuåË\İ
JOŞİÛÛˆ™Ù]Ù›YÚÙ\˜][Ûˆ‹\™İ[Y[Îß_N‹õçµê5åõéËŠµæ5æuèuå5çµê5åõéÈ5ä5åuåuæuê5æKË\İ
JOŞİÛÛˆ™Ù]Ù›YÚÙ\İ[˜ÙH‹\™İ[Y[Îß_N‹õæuçµæH5çµèµäuê5æuåuçH5çµèµäuê5çµèµäuê5äuæuçÈ5æuèµäõæuçKË\İ
JOŞİÛÛˆ™Ù]İ˜[œÙ™\—Ù^\È‹\™İ[Y[Îß_N‹õê5éµèÈ5æ5æuèuåuêŸ5äuäõåuéËŠµæ5æuèuåuê‹Ë\İ
JOŞİÛÛˆ˜[Y]WÙ›YÚÜÙ\]Y[˜ÙH‹\™İ[Y[Îß_N‹õçµèuèµäõåuêŸ5ä5æué5å5ç5ä5æõåuçË\İ
JOŞİÛÛˆœÙX\˜ÚÜ™\İ]\˜[È‹\™İ[Y[Îß_N‹õçµèuç5åuçŠµä5åué5è5åuèŸ5çµèuç5åuç5æH5ê5æõæuäuåË\İ
JOŞİÛÛˆœÙX\˜ÚÛ[İÜ˜ŞXÛWÜ›İ]\È‹\™İ[Y[Îß_N‹õèuäõê5å5èµéµæuê5åuêŸ5ê5éµèÈ5å5èµéµæuê5åuê‹Ë\İ
JOŞİÛÛˆ˜[Y]WÜİÜÜÙ\]Y[˜ÙH‹\™İ[Y[Îß_N‹õçµå5æuêH5ç5æuäß5çµéõåuçµåuêˆ5ç5æuäß5éõê5åuäH5çË\İ
JOŞİÛÛˆœİYÙÙ\İÛ™X\˜WÜİÜÈ‹\™İ[Y[Îß_N‹õçµåõéõê5çµéõåuê5åuêŸ5åõé5êH5äuê5êuêŸ5äuäõåuéÈ5äuä5æuè5æ5ê5è5æË\İ
JOŞİÛÛˆœÙX\˜ÚİÙX—ÜÛİ\˜Ù\È‹\™İ[Y[Îß_N‹õå5êuåuåuå5ä5é5êuê5åuæuåuêŸ5å5êuåuåuä5åË\İ
JOŞİÛÛˆ˜ÛÛ\\™WÛÜ[ÛœÈ‹\™İ[Y[Îß_N‹õå5èµê5æõå5æõåuç5ç5êŸ5æõçµå5æuèµç5å5å5æ5æuåuçË\İ
JOŞİÛÛˆ˜Ø[İ[]Wİš\Ù\İ[X]H‹\™İ[Y[Îß_N‹õå5ä5çKŠµèµäõæõè5æ_5ê5èµè5è5åuêˆ5çµæuäõèŸ5çµêµæH5è5äuäõéËË\İ
JOŞİÛÛˆ˜ÚXÚ×Ú[™›Ü›X][Û—Ùœ™\Ú™\ÜÈ‹\™İ[Y[Îß_N‹õè5èuå5êuåuäKŠµçµåõéõê5ê5èµè5çËŠµçµéõåuê5åuê‹Ë\İ
JOŞİÛÛˆœ™]Wİ[œ™\ÛÛ™YÜ™\ÙX\˜Ú‹\™İ[Y[Îß_N‹õåµç–õçõåWKŠµæõè5æuèuåŠŠ5çµç5åuçß5ç5æuè5å
_5çµêµæKŠµè5æõè5èuæuçKŠŠ5çµç5åuçß5ç5æuè5å
_
5çµç5åuçß5ç5æuè5å
KŠµåµç–õçõåWKŠµæõè5æuèuå5é‰õéËõä5æuçËË\İ
JOŞİÛÛˆ™Ù]ÛÙÚ[™×ØÚXÚÚ[ˆ‹\™İ[Y[Îß_N‹õäuä5æuç5åH5êµä5ê5æuæõæuçKŠŠ5çµç5åuçß5ç5æuè5å
_5êµä5ê5æuæõæKŠŠ5ç5æuè5å5çµç5åuçÊ_5ä5æué5å5æuêuè5æuç_5åµç–õçõåWKŠµæuéµæuä5åŠŠ5çµç5åuçß5ç5æuè5å
_
5çµç5åuçß5ç5æuè5å
KŠµåµç–õçõåWKŠµæuéµæuä5å5çµêµæKŠµæuåuéµä5æuçKŠŠ5çµç5åuçß5ç5æuè5å
KË\İ
JOŞİÛÛˆ™Ù]ÛÙÚ[™×Ù]\È‹\™İ[Y[Îß_N‹õæõçµå5ç5æuç5åuêŸ5çµèué5ê5ç5æuç5åuê‹Ë\İ
JOŞİÛÛˆ˜Ø[İ[]WÛÙÚ[™×ÛšYÚÈ‹\™İ[Y[Îß_N‹õçµåõæuêŠŠ5êuçµåuê5å5åµçµè5å
_5èµç5åuê‹Šµå5åµçµè5å5æõçµå5êuæuç5çµêµæKŠµçµç5åuçËË\İ
JOŞİÛÛˆ™Ù]ÜØ]™YÛÙÚ[™×ÜšXÙ\È‹\™İ[Y[Îß_N‹õê5êuæuçµê‹ŠŠ5ç5æuè5å5çµç5åuè5åuêŠ_5çµéõåuçµåuê‹Šµç5æuè5åË\İ
JOŞİÛÛˆ™Ù]ÛÙÚ[™×Üİ[[X\H‹\™İ[Y[Îß_N‹õèµéµæuê5åuê‹Šµç5é5æH5æuåuç_5æõç5å5èµéµæuê5åuêŸ5ä5æuç5åH5èµéµæuê5åuê‹Ë\İ
JOŞİÛÛˆ™Ù]ÜİÜ×ØWÙ^H‹\™İ[Y[Îß_N‹õçµå5æuêH5äuæuåuçWÊ—
ß5êµåuæõè5æuê‹Šµæuåuç_5æuåuçWÊ—
ËŠŠ5çµèuç5åuç5èµéµæuê5åuêŠKË\İ
JOŞİÛÛˆ™Ù]Ù^WÜ[ˆ‹\™İ[Y[Îß_N‹õêµéõéµæuä_5æõçµå5è5êuä5ê5æuêµê5å5å5åuéµä5åuê‹Ë\İ
JOŞİÛÛˆ™Ù]ØYÙ]Üİ[[X\H‹\™İ[Y[Îß_N‹õèuæ5æ5åuèKŠŠ5å5åµçµè5åuêŸ5ä5æuêuåuê5æuçJ_5çµå5å5åuåµçµçß5çµå5èµäõæuæuçÈ5ç5ä5ä5åuêuêË\İ
JOŞİÛÛˆ™Ù]Ø›ÛÚÚ[™×Üİ]\È‹\™İ[Y[Îß_N‹õçµêuæuçµåuêŸ5çµæ5ç5åuê‹Ë\İ
JOŞİÛÛˆ™Ù]İ\Ú×Üİ]\È‹\™İ[Y[Îß_N‹õçµå5åõèuê5çµæuäõèˆ5åõèuê5çµå5è5êuä5ê5ç5å5êuç5æuçKË\İ
JOŞİÛÛˆ™Ù]ÛZ\ÜÚ[™×Ù]H‹\™İ[Y[Îß_N‹õçµéõåuê5åuêŸ5çµå5çµä5åuçµêŸ5ä5çµæuè5åuê‹Ë\İ
JOŞİÛÛˆ™Ù]ÜÛİ\˜ÙWÜİ]\È‹\™İ[Y[Îß_N‹õé5ê5æ5æH5å5æ5æuåuç5çµêµæH5å5æ5æuåuç5çµå5å5æuèµäß5æõçµå5æuçµæuçKË\İ
JOŞİÛÛˆ™Ù]İš\Ù]Z[È‹\™İ[Y[Îß_N‹õçµåµä—Êµåõä5åuåOõæuê5êµåõåµæuêŸ5äµêuç_5æ5çµé5ê5æ5åuê5åË\İ
JOŞİÛÛˆ™Ù]İÙX]\ˆ‹\™İ[Y[Îß_N‹õêuèµåuê‹Šµé5êµæuåõå5é5êµåuåÈ5å5æuåuç_5çµêµæH5é5êµåuåß5ä5æuê5åuèµæuçKË\İ
JOŞİÛÛˆ™Ù]ÛÜ[š[™×Úİ\œÈ‹\™İ[Y[Îß_N‹õä5åuê5æŸ5çµê5åõéß5éõæuç5åuçµæ5ê5éÖõí‰×OõçŸ5åµçµçÈ5è5èuæuèµå5æõçµåŠµè5åuèuè‹Ë\İ
JOŞİÛÛˆ™Ù]Ü›İ]WÙ\İ[˜ÙH‹\™İ[Y[Îß_N‹õçµåuæõçß5çµåuæõè5åuêŸ5å5æõè5å5ç5æuéµæuä5å5åõèuê5éµæuåuäËË\İ
JOŞİÛÛˆ™Ù]İš\Ü™XY[™\ÜÈ‹\™İ[Y[Îß_N‹õå5åuèuèÈ5èµéµæuê5å5å5åuèué5êˆ5èµéµæuê5å5éµåuê5èµéµæuê5åË\İ
JOŞİÛÛˆ˜Ü™X]WÜİÜ‹\™İ[Y[Îß_N‹õêuè5åŠŠ5êµä5ê5æuæŸ5é5ê5æ5æH5å5æ5æuåuç
_5èµäõæõçËŠµêµä5ê5æuæõæuçKË\İ
JOŞİÛÛˆ\]Wİš\Ù]Z[È‹\™İ[Y[Îß_N‹õêuè5åŠŠ5çµç5åuçß5ç5æuè5å
_5èµäõæõçËŠµç5æuè5åË\İ
JOŞİÛÛˆ\]WÛÙÚ[™È‹\™İ[Y[Îß_N‹õêuè5åŠµèµéµæuê5å5èµäõæõçËŠµèµéµæuê5åË\İ
JOŞİÛÛˆ\]WÜİÜ‹\™İ[Y[Îß_N‹õçµåõéËŠµèµéµæuê5å5å5èuêŠµèµéµæuê5åË\İ
JOŞİÛÛˆœ™[[İ™WÜİÜ‹\™İ[Y[Îß_N‹õå5åuèuèËŠµçµêuæuçµå5éµåuêŠµçµêuæuçµåË\İ
JOŞİÛÛˆ˜Ü™X]Wİ\ÚÈ‹\™İ[Y[Îß_N‹õèµäõæõçËŠµçµêuæuçµå5èuäµåuêŠµçµêuæuçµåË\İ
JOŞİÛÛˆ\]Wİ\ÚÈ‹\™İ[Y[Îß_N‹õèµäõæõçËŠµèuæ5æ5åuèKŠµå5åµçµè5å5èuçµçËŠµå5åuåµçµçß5èuçµçËŠµêuåuç5çKË\İ
JOŞİÛÛˆ\]WØ›ÛÚÚ[™×Üİ]\È‹\™İ[Y[Îß_N‹õêuçµåuêŠœXÙKÚY5êuçµåuêŠµçµåµå5å5çµéõåuçKË\İ
JOŞİÛÛˆœØ]™WÜXÙWÚY‹\™İ[Y[Îß_N‹õê5èµè5çËŠµçµåõéõê5äuäõåuéÈ5êuåuäKŠµè5êµåuè5æuçKË\İ
JOŞİÛÛˆœ™Yœ™\Úİš\Ü™\ÙX\˜Ú‹\™İ[Y[Îß_NİÛÛ›[\™İ[Y[Îß__Y[˜İ[Ûˆ›JO^ßJ^Û]Tİš[™ÊˆŠK[‹ÓØØ[SİÙ\Ø\ÙJšHŠNÜ™]\›‹õêuèµåuê‹Šµé5êµæuåõå5é5êµåuåÈ5å5æuåuç_5çµêµæH5é5êµåuåß5ä5æuê5åuèµæuçKË\İ
ŠOÜÙJŠßKJKİÛÛˆ™Ù]ÛÜ[š[™×Úİ\œÈ‹\™İ[Y[Îß_JN‹õçµç5åuçß5ç5æuè5å5åõäõêË\İ
ŠI‰‹Ê5çµåõæuê5èµç5åuêŸ5æuèµç5å5èµåuç5å5æõçµåŠµæõèuèß5æõçµåŠµç5êuç5çJKË\İ
ŠOÜÙJŠßKJKİÛÛˆ™Ù]Úİ[ÜšXÙ\È‹\™İ[Y[Îß_JN‹õçµç5åuçß5ç5æuè5å5åõäõêË\İ
ŠI‰‹Ê5æõè5æuèuå5æuéµæuä5å5åµç–õçõåWH5å5êŸ5êµä5ê5æuæŸ5çµêµæ_5é‰õéËõä5æuçß5é‰õéËõä5ä5åuæ
KË\İ
ŠOÜÙJŠßKJKİÛÛ‹õæõè5æuèuå5é‰õéËõä5æuçËË\İ
ŠOÈ™Ù]ÛÙÚ[™×ØÚXÚÚ[ˆˆ™Ù]ÛÙÚ[™×Ù]\È‹\™İ[Y[Îß_JN‹ÊÎµçµê5åõéß5éõæuç5åuçµæ5ê5éÖõí‰×OõçŸ5åµçµçÈ5è5èuæuèµå5æõçµåŠŠÎµè5åuèuèŸ5çµê5åõéß5éÖõí‰×OõçŠ_ÛÛÙÛH›İ]\ÊKÚK\İ
ŠOÜÙJŠßKJKİÛÛˆ™Ù]Ü›İ]WÙ\İ[˜ÙH‹\™İ[Y[Îß_JN™_Y[˜İ[ÛˆÛJJ^Û]]œ]Y\TÙ[XİÜŠ‹œÚ]KZXY\ˆŠK]œ]Y\TÙ[XİÜŠˆØXØÛİ[ŠKO]œ]Y\TÙ[XİÜŠˆİXœÈŠNÚYŠ[Ÿ\Š\™]\›Û]Ï]˜Ü™X]Q[[Y[
™]ˆŠK]˜Ü™X]Q[[Y[
™]ˆŠNÜËšYH™›Ø][™ËZXY\ˆ‹šYH™\İ[˜][Û‹XÛÛ›ÛÈ‹‹˜™Y›Ü™JÊKË˜\[™
‹‹‹šOÖÚWN–×KŠKËš[™\HLNÛ]ÏJ
OOÛ]SX]˜ÙZ[
Ë™Ù]›İ[™[™ĞÛY[™Xİ

KšZYÚ
NÙŒ	‰™Øİ[Y[[[Y[œİ[KœÙ]›Ü\J‹KXÛY[ZXY\‹\ÜXÙH‹
ÈœŠ_NÙK”™\Ú^™SØœÙ\™\‰‰›™]ÈK”™\Ú^™SØœÙ\™\ŠÊK›ØœÙ\™JÊKÊ
_]˜\ˆÛO[™]ÈÙ]
È™ÛÛÙÛH‹™˜XÙX›ÛÚÈ—JK]J
OO‘\œ›ÜŠµç5ä5è5æuêµçÈ5ç5å5êuç5æuçH5ä5êˆ5å5æõè5æuèuåˆ5æuêH5ç5è5èuåuêˆ5êuåuäH5ä5åH5ç5é5è5åuêˆ5ç5êµçµæuæõåˆŠNÙ[˜İ[ÛˆJ
^Û]O\OÚYŠ\[ÙˆˆOHœİš[™ÈŠ\™]\›ˆİ^Û]OR”ÓÓ‹œ\œÙJŠNÚYŠI‰\[ÙˆOOH›Øš™Xİ‰‰ˆP\œ˜^Kš\Ğ\œ˜^JJJ\™]\›ˆ[]HKœ›İšY\—İÚÙ[‹[]HKœ›İšY\—Ü™Yœ™\ÚİÚÙ[‹”ÓÓ‹œİš[™ÚYJJ_XØ]Ú
J^ß\™]\›ˆŸNÜ™]\›ÙÙ]][JŠ^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^Û]O^ZY[™Ù]][JŠKÏYJJNÜ™]\›ˆÈOOZI‰ŠZY[œÙ]][J‹ÊJKßJ_KÙ]][NŠ‹JOOœÙ]][J‹JJJK™[[İ™R][NœOœ™[[İ™R][JŠ__Y[˜İ[ÛˆÛJJ^Û]‹J
OOÛ][™]ÈT“
JNÚYŠ\Ù\›˜[Y_œ\ÜİÛÜ™Jœ›İØÛÛOOHšÎˆŸœ›İØÛÛOOHšˆ‰‰–È›ØØ[Üİ‹ŒLËŒŒŒH—Kš[˜ÛY\ÊšÜİ˜[YJJJ]›İÈ]

NÜ™]\›ˆœÙX\˜ÚHˆ‹š\ÚHˆ‹KOJ
OOÛ]\Š
NÜ™]\›ˆœÙX\˜Ú\˜[\ËœÙ]
˜]]ØØ[˜XÚÈ‹ŒHŠKš™YŸKÏ\O˜Š[[[˜İ[ÛŠŠ
^İ^Û]Ù]Nš\œ›Ü›_O^ZY[œœÊ
NÚYŠ_Z\[ÙˆOH›Øš™XİŠ]›İÈ]

NÜ™]\›ˆXØ]Ú

^İ›İÈ]

__JKJ
OO˜Š[[[˜İ[ÛŠŠ
^Û]^ZY[Ê˜İ\İÛY\—ÛÙÚ[—ÛÜ[ÛœÈŠNÚYŠVÈ›YØXŞH‹œÛØÚX[—Kš[˜ÛY\Ê›[ÙJJ]›İÈ]

NÜ™]\›Û[ÙNœ›[ÙK›İšY\œÎœ›[ÙOOOHœÛØÚX[‰‰\œ˜^Kš\Ğ\œ˜^Jœ›İšY\œÊOÖË‹‹›™]ÈÙ]
œ›İšY\œË™š[\ŠO—ÛKš\Ê
JJWN–×__JKÏ\O˜Š[[[˜İ[ÛŠŠ
^İ^Û]^ZY[

NÚYŠO[[	‰š™\œ›ÜŠ]›İÈ]

NÜ™]\›ˆO[[İ›ÚYš™]_XØ]Ú

^İ›İÈ]

__JNÜ™]\›ÛÙÚ[“Ü[ÛœÎ›İ\İÛY\]]İ]\Ê
^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^Û]^ZY[Ê˜İ\İÛY\—Ø]]Üİ]\ÈŠNÚYŠVÈ›YØXŞH‹œÛØÚX[—Kš[˜ÛY\Ê›[ÙJ_VÈ˜[İÙY‹›ZYÜ˜][Û—Ü™\]Z\™Y‹›Ø]]Ü™\]Z\™Y‹˜›ØÚÙY—Kš[˜ÛY\Ê˜XØÙ\ÜÊJ]›İÈ]

NÜ™]\›ˆÙJŠßK
KÛZYÜ˜][Û”[™[™Îœ›ZYÜ˜][Û”[™[™ÏOOHLØ[“[šÑÛÛÙÛNœ˜Ø[“[šÑÛÛÙÛOOOHLJ_J_KÚYÛ’[”›İšY\Š
^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^ÚYŠWÛKš\Ê
J]›İÈ]

NÛ]^ZY[

NÚYŠ›[ÙHOOHœÛØÚX[ŸZœ›İšY\œËš[˜ÛY\Ê
J]›İÈ]

NŞZY[Ê

OO˜]]œÚYÛ’[•Ú]Ğ]]
Ü›İšY\œÜ[ÛœÎÜ™Y\™XİÎšJ
__JJ_J_K™YÚ[‘ÛÛÙÛS[šÊ
^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^Û]ZJ
NŞZY[Ê˜İ\İÛY\—Û[š×Ø™YÚ[ˆŠKZY[Ê

OO˜]]›[šÒY[]JÜ›İšY\ˆ™ÛÛÙÛH‹Ü[ÛœÎÜ™Y\™XİÎœ_JJ_J_K™\İ[YQÛÛÙÛS[šÊ
^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^ŞZY[Ê˜İ\İÛY\—Û[š×Ü™\İ[YHŠNÛ]^ZY[

NÚYŠ›[ÙHOOHœÛØÚX[Ÿ\œ›İšY\œËš[˜ÛY\Ê™ÛÛÙÛHŠJ]›İÈ]

NŞZY[Ê

OO˜]]œÚYÛ’[•Ú]Ğ]]
Ü›İšY\ˆ™ÛÛÙÛH‹Ü[ÛœÎÜ™Y\™XİÎšJ
__JJ_J_KÛÛ\]QÛÛÙÛS[šÊ
^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^Û]^ZY[Ê˜İ\İÛY\—Û[š×ØÛÛ\]HŠNÜ™]\›ˆZY[Ê

OO˜]]œ™Yœ™\ÚÙ\ÜÚ[ÛŠ
JKJ_KÛÛ\]SĞ]]Ø[˜XÚÊ
^Ü™]\›ˆŠ\Ë\™İ[Y[Ë[˜İ[ÛŠŠİ\›œJOOŠOYÛØ˜[\Ë›ØØ][ÛŠOO[[İ›ÚY›Kš™YŠJ
K\İÜNšYÛØ˜[\Ëš\İÜ_O^ßJ^Û]Ï[™]ÈT“

KÏ[™]ÈT“ÙX\˜Ú\˜[\ÊËš\ÚœÛXÙJJJKOVÈ˜ÛÙH‹œİ]H‹™\œ›Üˆ‹™\œ›Ü—ØÛÙH‹™\œ›Ü—Ù\ØÜš\[Ûˆ‹˜]]ØØ[˜XÚÈ‹˜XØÙ\Ü×İÚÙ[ˆ‹œ™Yœ™\ÚİÚÙ[ˆ‹œ›İšY\—İÚÙ[ˆ‹œ›İšY\—Ü™Yœ™\ÚİÚÙ[ˆ‹ÚÙ[—İ\H‹™^\™\×Ú[ˆ‹™^\™\×Ø]‹\H‹œØ—Ù›İ×ÚY—NÚYŠ^KœÛÛYJÏOËœÙX\˜Ú\˜[\Ëš\ÊÊ_Ëš\ÊÊJJ\™]\›Ú[™YˆL_NÛ]\Š
K]Ë›ÜšYÚ[ˆOO^›ÜšYÚ[ŸËœ]˜[YHOO^œ]˜[Y_H]Ë\Ù\›˜[Y_H]Ëœ\ÜİÛÜ™Ï]ËœÙX\˜Ú\˜[\Ë™Ù]
˜ÛÙHŠKÏ]ËœÙX\˜Ú\˜[\Ë™Ù][
˜ÛÙHŠK›[™İO]ËœÙX\˜Ú\˜[\Ë™Ù]
œØ—Ù›İ×ÚYŠKOVÈ™\œ›Üˆ‹™\œ›Ü—ØÛÙH‹™\œ›Ü—Ù\ØÜš\[Ûˆ—KœÛÛYJÏOËœÙX\˜Ú\˜[\Ëš\ÊÊ_Ëš\ÊÊJKO]ËœÙX\˜Ú\˜[\Ë™Ù]
›[ÙHŠOOOH˜YZ[ˆ‹HT	‰ˆQI‰ˆPI‰ˆ]ËœÙX\˜Ú\˜[\Ëš\Ê˜]]ØØ[˜XÚÈŠI‰ˆ]ËœÙX\˜Ú\˜[\Ëš\Ê˜ÛÙHŠI‰ˆYËš\Ê˜ÛÙHŠI‰™Ë™Ù]
\HŠOOOHœ™XÛİ™\H‰‰™Ë™Ù][
\HŠK›[™İOOLI‰™Ë™Ù][
˜XØÙ\Ü×İÚÙ[ˆŠK›[™İOOLI‰ˆHYË™Ù]
˜XØÙ\Ü×İÚÙ[ˆŠI‰™Ë™Ù][
œ™Yœ™\ÚİÚÙ[ˆŠK›[™İOOLI‰ˆHYË™Ù]
œ™Yœ™\ÚİÚÙ[ˆŠI‰ˆVÈ˜XØÙ\Ü×İÚÙ[ˆ‹œ™Yœ™\ÚİÚÙ[ˆ‹œ›İšY\—İÚÙ[ˆ‹œ›İšY\—Ü™Yœ™\ÚİÚÙ[ˆ—KœÛÛYJÏOËœÙX\˜Ú\˜[\Ëš\ÊÊJI‰ˆYËš\Êœ›İšY\—İÚÙ[ˆŠI‰ˆYËš\Êœ›İšY\—Ü™Yœ™\ÚİÚÙ[ˆŠI‰ˆYËš\Ê˜]]ØØ[˜XÚÈŠKTŞØXØÙ\Ü×İÚÙ[™Ë™Ù]
˜XØÙ\Ü×İÚÙ[ˆŠK™Yœ™\ÚİÚÙ[™Ë™Ù]
œ™Yœ™\ÚİÚÙ[ˆŠ_N›[T__Ëš\Ê˜XØÙ\Ü×İÚÙ[ˆŠ_ËœÙX\˜Ú\˜[\Ëš\Ê˜XØÙ\Ü×İÚÙ[ˆŠ_ËœÙX\˜Ú\˜[\Ëš\Êœ™Yœ™\ÚİÚÙ[ˆŠ_Ëš\Êœ™Yœ™\ÚİÚÙ[ˆŠNÙ›ÜŠ]ÈÙˆJ]ËœÙX\˜Ú\˜[\Ë™[]JÊKË™[]JÊNÚYŠËš\ÚYËÔİš[™Ê
OÈˆÈŠÙËÔİš[™Ê
Nˆˆ‹O[[œ™\XÙTİ]J[ˆ‹Ëš™YŠKT‰‰ŠTßÈOOLJ_Š]›İÈ]

NÛXÊÊ
OO˜]]œÙ]Ù\ÜÚ[ÛŠŠNŠ
OO’Oİ˜]]™^Ú[™ÙPÛÙQ›Ü”Ù\ÜÚ[ÛŠËÙ›İÒY’_JN˜]]™^Ú[™ÙPÛÙQ›Ü”Ù\ÜÚ[ÛŠÊJNİ^Û]Ï^ZY[ÚYŠ‰‰ˆJÈO[[	‰“ËœÙ\ÜÚ[ÛŠJ]›İÈ]

NÜ™]\›ˆŸ
ÏO[[İ›ÚY“Ëœ™Y\™Xİ\JOOOHœ™XÛİ™\HŞÚ[™YˆL™XÛİ™\NˆLNÚ[™YˆL_Yš[˜[^Û[[_J_K™\]Y\İ[šÊ
^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^ÚYŠ\š[J
KK×–×—ĞJĞ×—ĞJ×–×—ĞJÉË\İ

J]›İÈ\œ›ÜŠµæõêµåuäuêˆ5çµæuæuç5ç5ä5êµéõæuè5åŠNÛ]Ù\œ›ÜšO^ZY[˜]]œÚYÛ’[•Ú]İ
Ù[XZ[œÜ[ÛœÎÜÚİ[Ü™X]U\Ù\ˆLK[XZ[™Y\™XİÎ™__JNÚYŠ
]›İÈ\œ›ÜŠ›Y\ÜØYÙJ_J_KÚYÛ•\
J^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^ÚYŠ›[™İLŠ]›İÈ\œ›ÜŠµè5äõê5êuêˆ5èuæuèuçµå5äuä5åuê5æˆLˆ5êµåuåuæuçH5ç5é5åõåuêˆŠNÛ]Ù\œ›ÜßO^ZY[˜]]œÚYÛ•\
Ù[XZ[œš[J
K\ÜİÛÜ™šÜ[ÛœÎÙ[XZ[™Y\™XİÎ™K]NÜ›Ùš[N›___JNÚYŠÊ]›İÈ\œ›ÜŠË›Y\ÜØYÙJ_J_KÚYÛ“İ]ØØ[

^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^Û]Ù\œ›ÜœO^ZY[˜]]œÚYÛ“İ]
ÜØÛÜNˆ›ØØ[ŸJNÚYŠ
]›İÈ\œ›ÜŠ›Y\ÜØYÙJ_J_KÚYÛ’[YZ[Š
^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^Û]Ù]N›K\œ›ÜßO^ZY[™[˜İ[ÛœËš[›ÚÙJ˜YZ[‹X]]‹Ø›ÙNØXİ[ÛˆœÚYÛš[ˆ‹\Ù\›˜[YNœš[J
KÓİÙ\Ø\ÙJ
K\ÜİÛÜ™š_JNÚYŠßHO[[	‰›K™\œ›ÜŸJHO[[	‰›K˜XØÙ\Ü×İÚÙ[Š_JHO[[	‰›Kœ™Yœ™\ÚİÚÙ[ŠJ]›İÈ\œ›ÜŠµêuçH5å5çµêuêµçµêH5ä5åH5å5èuæuèuçµå5êuäµåuæuæuçK5å5åõêuäuåuçÈ5ä5æuè5åH5é5èµæuç5ä5åH5êuæuêH5ç5å5çµêµæuçÈ5ç5é5è5æH5è5æuèuæuåuçÈ5è5åuèuèÈŠNÚYŠ
ZY[˜]]œÙ]Ù\ÜÚ[ÛŠØXØÙ\Ü×İÚÙ[›K˜XØÙ\Ü×İÚÙ[‹™Yœ™\ÚİÚÙ[›Kœ™Yœ™\ÚİÚÙ[ŸJJK™\œ›ÜŠ]›İÈ\œ›ÜŠµç5ä5è5æuêµçÈ5ç5å5êuç5æuçH5æõè5æuèuêˆ5çµè5å5çŠ_J_K™\]Y\İYZ[”™\Ù]

^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^Û]Ù\œ›ÜšO^ZY[™[˜İ[ÛœËš[›ÚÙJ˜YZ[‹X]]‹Ø›ÙNØXİ[Ûˆœ™\Ù]‹\Ù\›˜[YNœš[J
KÓİÙ\Ø\ÙJ
__JNÚYŠ
]›İÈ\œ›ÜŠµç5ä5è5æuêµçÈ5ç5êuç5åuåÈ5éõæuêuåuê5æõê5äµèˆŠ_J_KÚYÛ’[Š
^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^Û]Ù\œ›Ü›_O^ZY[˜]]œÚYÛ’[•Ú]\ÜİÛÜ™
Ù[XZ[œš[J
K\ÜİÛÜ™šJNÚYŠJ]›İÈ\œ›ÜŠK›Y\ÜØYÙJ_J_KÚ[™ÙT\ÜİÛÜ™

^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^Û]Ù\œ›ÜšO^ZY[˜]]\]U\Ù\ŠÜ\ÜİÛÜ™œJNÚYŠ
]›İÈ\œ›ÜŠ›Y\ÜØYÙJ_J_K™\]Y\İ™\Ù]

^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^Û]Ù\œ›ÜšO^ZY[˜]]œ™\Ù]\ÜİÛÜ™›Ü‘[XZ[
š[J
KÜ™Y\™XİÎ™_JNÚYŠ
]›İÈ\œ›ÜŠ›Y\ÜØYÙJ_J_KÙ\ÜÚ[ÛŠ
^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^Û]Ù]Nœ\œ›ÜšO^ZY[˜]]™Ù]Ù\ÜÚ[ÛŠ
NÚYŠ
]›İÈ\œ›ÜŠ›Y\ÜØYÙJNÜ™]\›ˆœÙ\ÜÚ[ÛŸJ_KÚYÛ“İ]

^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^Û]Ù\œ›ÜœO^ZY[˜]]œÚYÛ“İ]

NÚYŠ
]›İÈ\œ›ÜŠ›Y\ÜØYÙJ_J_KÛÚ[™ÙJ
^Ü™]\›ˆ˜]]›Û]]İ]PÚ[™ÙJ
JOOÜÙ][Y[İ]


OOœ
K
K
_JK™]KœİXœØÜš\[ÛŸ__]˜\ˆÛO^ÙÛÛÙÛNˆµå5çµêuæˆ5èµçHÛÛÙÛH‹˜XÙX›ÛÚÎˆµå5çµêuæˆ5èµçH˜XÙX›ÛÚÈŸKÏHµç5ä5è5æuêµçÈ5ç5å5êuç5æuçH5ä5êˆ5å5é5èµåuç5åˆ5è5èuåH5êuåuäH5ä5åH5é5è5åH5ç5êµçµæuæõåˆÙ[˜İ[Ûˆ[JKŠ^Û]HLKOHLNİš[›™\’SHˆÛ]Ï]›İÛ™\‘Øİ[Y[\Ë˜Ü™X]Q[[Y[
œÙXİ[ÛˆŠNÛ˜Û\ÜÓ˜[YOH˜İ\İÛY\‹\ÛØÚX[X]]‹™\Hœ‹œÙ]]šX]J˜\šXK[X™[‹JNÛ]Ï\Ë˜Ü™X]Q[[Y[
šHŠNØË^ÛÛ[YK˜\[™
ÊNÛ]\Ë˜Ü™X]Q[[Y[
œŠNÙ˜Û\ÜÓ˜[YOHœÛØÚX[X]]\İ]\È‹œÙ]]šX]Jœ›ÛH‹œİ]\ÈŠKœÙ]]šX]J˜\šXK[]™H‹œÛ]HŠK˜\[™

K˜\[™

NÛ]YÏOÜŸ
^ÛÛ[YËO[[ŠÊJ_NÜ™]\›ØØ\™›ØÎœË^™ÏOÛ]O\Ë˜Ü™X]Q[[Y[
œŠNÜ™]\›ˆK^ÛÛ[YËš[œÙ\™Y›Ü™JK
K_K]ÛŠËKÊOOÛ]\Ë˜Ü™X]Q[[Y[
˜]ÛˆŠNÜ™]\›ˆ\OH˜]Ûˆ‹^ÛÛ[YËÉ‰œÙ]]šX]JËˆŠK˜Y]™[\İ[™\Š˜ÛXÚÈ‹

OOÈ\‰‰ˆZI‰J
_JKš[œÙ\™Y›Ü™J
KKİ]\Îœ[™ÏO˜Š[[[˜İ[ÛŠŠ
^ÚYŠJŸJJ^ÚOHLœÙ]]šX]J˜\šXKX\ŞH‹YHŠKœ]Y\TÙ[XİÜ[
˜]Û‹[œ]ŠK™›Ü‘XXÚ
OOK™\ØX›YHL
K
µäuêµå5ç5æuæ¸ )ˆŠNİ^ŞZY[Ê
KŸ
ˆŠ_XØ]Ú
J^Ü
Ê_Yš[˜[^ÜŸ
OHLKœ™[[İ™P]šX]J˜\šXKX\ŞHŠKœ]Y\TÙ[XİÜ[
˜]Û‹[œ]ŠK™›Ü‘XXÚ
OOK™\ØX›YHLJJ___JK[]™NŠ
OOˆ\‹\ÜÜÙNŠ
OOÜHLœ™[[İ™J
___Y[˜İ[Ûˆ[JÜ›Ûİ]]™KÛYZ[›‹Û“YØXŞSZYÜ˜][Ûœ‹Û”İ]\Îš_J^Û]ÏQ[Jµæõè5æuèuêˆ5ç5éõåuåõåuêˆ‹JNÜË^
µå5êµåõäuê5åuêˆ5ç5åõêuäuåuçÈ5éõæuæuçH5äuä5çµéµèµåuêˆ5èué5éÈ5åµå5åuêˆ5çµä5åuêuêˆ5å5ê5êuçµå5éµæuäuåuê5æuêˆ5ä5æuè5å5åµçµæuè5åˆŠKËœİ]\ÊµäuåuäõéõæuçH5ä5é5êuê5åuæuåuêˆ5æõè5æuèuå8 )ˆŠK‰‰œË˜]ÛŠµæõè5æuèuêˆ5çµè5å5ç‹‹™]KXYZ[‹[ÙÚ[ˆŠNÛ]XÏOÚYŠ\Ë˜[]™J
_Ë˜Ø\™œ]Y\TÙ[XİÜŠ™›Ü›HŠJ\™]\›ØËšY[HLË^
µçµèµäuê5åõäõ¯µé5èµçµæH5ç5æõè5æuèuå5èµçHÛÛÙÛHŠKË^
µç5ç5éõåuåÈ5éõæuæuçH5äuç5äuäÎˆ5æuêH5ç5å5åµäõå5åuêˆ5äuäõåuä5ê5åuäuèuæuèuçµå5å5éõæuæuçµæuçH5æõäõæH5ç5éõêuêÛÛÙÛH5ç5ä5åuêµåH5åõêuäuåuçËˆŠNÛ]\Ë™ØË˜Ü™X]Q[[Y[
™›Ü›HŠK\Ë™ØË˜Ü™X]Q[[Y[
›X™[ŠNÜ^ÛÛ[Hµäõåuä5ê5ä5ç5éõæ5ê5åuè5æH5êuç5å5åõêuäuåuçÈ5å5éõæuæuçHÛ]\Ë™ØË˜Ü™X]Q[[Y[
š[œ]ŠNÚ\OH™[XZ[‹›˜[YOH™[XZ[‹˜]]ØÛÛ\]OH\Ù\›˜[YH‹œ™\]Z\™YHL™\H›ˆ‹˜\[™

NÛ]O\Ë™ØË˜Ü™X]Q[[Y[
›X™[ŠNÛK^ÛÛ[Hµå5èuæuèuçµå5å5éõæuæuçµêˆ5ç5éµåuê5æˆ5å5çµèµäuêÛ]Ï\Ë™ØË˜Ü™X]Q[[Y[
š[œ]ŠNİË\OHœ\ÜİÛÜ™‹Ë›˜[YOHœ\ÜİÛÜ™‹Ë˜]]ØÛÛ\]OH˜İ\œ™[\\ÜİÛÜ™‹Ëœ™\]Z\™YHLË™\H›ˆ‹K˜\[™
ÊNÛ]Ï\Ë™ØË˜Ü™X]Q[[Y[
˜]ÛˆŠNÙË\OHœİX›Z]‹Ë^ÛÛ[Hµä5æuçµåuêˆ5å5åõêuäuåuçÈ5ç5éõê5ä5êˆ5éõæuêuåuêÛÛÙÛH‹˜\[™
KÊKË˜Ø\™˜\[™

K™›Øİ\Ê
K˜Y]™[\İ[™\ŠœİX›Z]‹OOŞKœ™]™[Y˜][

KËœ[Š

OO˜Š[[[˜İ[ÛŠŠ
^Û]Ï]Ë˜[YNİË˜[YOHˆ‹ZY[KœÚYÛ’[Š˜[YKÊKË˜[]™J
I‰ŠZY[O[[İ›ÚYœŠ
J_JJ_J_NÜ™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™J
K[Š

OO™K›ÙÚ[“Ü[ÛœÊ
JK[ŠÏOÚYŠ\Ë˜[]™J
J\™]\›ÜËœİ]\ÊˆŠNÛ]JÏO[[İ›ÚY˜Ë›[ÙJOOOHœÛØÚX[‰‰\œ˜^Kš\Ğ\œ˜^JËœ›İšY\œÊOØËœ›İšY\œË™š[\ŠO“Øš™Xİš\ÓİÛŠÛK
JN–×NÙ›ÜŠ]Ùˆ™]ÈÙ]

J\Ë˜]ÛŠÛVÜK

OOœËœ[Š

OO™KœÚYÛ’[”›İšY\Š
JK]K\›İšY\‹IÜX
NÚYŠš[˜ÛY\Ê™ÛÛÙÛHŠJ^Û]Ü\Ë˜]ÛŠµçµèµäuê5åõäõ¯µé5èµçµæH5ç5æõè5æuèuå5èµçHÛÛÙÛH‹

OO›

K™]K[ZYÜ˜][Û‹\İ\Š_Y›[™İËœİ]\Êµæõè5æuèuå5åõäuê5êµæuêˆ5èµäõæuæuçÈ5ä5æuè5å5åµçµæuè5åˆ5æuêH5ç5é5è5åuêˆ5ç5êµçµæuæõåˆŠ_JK˜Ø]Ú


OOœËœİ]\Êµç5ä5è5æuêµçÈ5ç5æ5èµåuçÈ5ä5é5êuê5åuæuåuêˆ5æõè5æuèuåˆ5è5èuåH5ç5ê5èµè5çÈ5ä5êˆ5å5äõèËˆŠJKË™\ÜÜÙ_Y[˜İ[ÛˆJÜ›Ûİ]]™Kİ]\Î›‹Û”™Yœ™\Úœ‹Û”İ]\ÎšKÛ”ÚYÛ“İ]œßJ^Û]Q[Jµå5êuç5çµêˆ5å5çµèµäuê5ç5æõè5æuèuå5èµçHÛÛÙÛH‹JNÜ™]\›ŠO[[İ›ÚY›‹˜XØÙ\ÜÊOOOH›ZYÜ˜][Û—Ü™\]Z\™YÊ^
µæuêH5ç5å5êuç5æuçH5éõæuêuåuêÛÛÙÛH5ç5åõêuäuåuçÈ5å5éõæuæuçH5ç5é5è5æH5å5çµêuæˆ5å5êuæuçµåuêKˆ5è5êµåuè5æH5å5åõêuäuåuçÈ5è5êuä5ê5æuçH5äuä5åuêµåH5åõêuäuåuçËˆŠK‹˜Ø[”™\İ[YQÛÛÙÛOOOHLÊ^
‘ÛÛÙÛH5æõäuê5éõåuêuê5ç5åõêuäuåuçËˆ5æuêH5ç5ä5çµêˆ5êuåuäH5ä5êˆ5å5æõè5æuèuå5æõäõæH5ç5å5êuç5æuçH5ä5êˆ5å5çµèµäuêˆŠK˜]ÛŠµå5çµêuæˆ5ä5æuçµåuêˆ5èµçHÛÛÙÛH‹

OO›œ[Š

OO™Kœ™\İ[YQÛÛÙÛS[šÊ
JK™]K\™\İ[YKYÛÛÙÛHŠJN›‹˜Ø[“[šÑÛÛÙÛOOOHLÛ˜]ÛŠµéõæuêuåuê5åõêuäuåuçÈÛÛÙÛH‹

OO›œ[Š

OO™K˜™YÚ[‘ÛÛÙÛS[šÊ
JK™]K[[šËYÛÛÙÛHŠN›‹™ÛÛÙÛS[šÙYOOHL	‰›‹›[šÔİ\YOOHL	‰›‹š[[˜[YOOHL	‰ˆ[‹˜Ø[ÛÛ\]QÛÛÙÛOÊ^
‘ÛÛÙÛH5éõåuêuê5äuå5éµç5åõåˆ5è5äõê5êuêˆ5æõè5æuèuå5åõäõêuå5èµçHÛÛÙÛH5æõäõæH5ç5å5êuç5æuçH5ä5êˆ5å5ä5æuçµåuê‹ˆŠK˜]ÛŠµæõè5æuèuå5çµåõäõêH5èµçHÛÛÙÛH‹

OO›œ[Š

OO™KœÚYÛ’[”›İšY\Š™ÛÛÙÛHŠJK™]K\™X]]YÛÛÙÛHŠJN›‹˜Ø[ÛÛ\]QÛÛÙÛ_^
µè5äõê5êuêˆ5æõè5æuèuå5æ5ê5æuæuå5ç5éµåuê5æˆ5å5éõæuêuåuêˆ5æuêH5ç5éµä5êˆ5åuç5å5êµåõæuç5ä5êˆ5å5çµèµäuê5å5åõäõ¯µé5èµçµæH5èµçH5å5èuæuèuçµå5å5éõæuæuçµê‹ˆŠK‹˜Ø[ÛÛ\]QÛÛÙÛOOOHL	‰›˜]ÛŠµäuäõæuéõêˆ5å5êuç5çµêˆ5å5éõæuêuåuê‹

OO›œ[Š

OO˜Š[[[˜İ[ÛŠŠ
^ŞZY[K˜ÛÛ\]QÛÛÙÛS[šÊ
K˜[]™J
I‰ŠZY[O[[İ›ÚYœŠ
J_JJK™]K[ZYÜ˜][Û‹XÛÛ\]HŠJNŠO[[İ›ÚY›‹˜XØÙ\ÜÊOOOH›Ø]]Ü™\]Z\™YÛ^
µè5äõê5êuêˆ5æõè5æuèuå5èµçHÛÛÙÛH5ä5åH5èué5éÈ5çµä5åuêuê5æõäõæH5ç5å5çµêuæuæ‹ˆ5æuêH5ç5éµä5êˆ5åuç5å5êµåõäuê5äuä5çµéµèµåuêˆ5å5èué5éËˆŠN›^
µå5äµæuêuå5ç5åõêuäuåuçÈ5ä5æuè5å5åµçµæuè5åˆ5æuêH5ç5é5è5åuêˆ5ç5êµçµæuæõåˆŠK˜]ÛŠµäuäõæuéõêˆ5çµéµäH5çµåõäõêH‹

OO›œ[Š

OO˜Š[[[˜İ[ÛŠŠ
^Û˜[]™J
I‰ŠZY[O[[İ›ÚYœŠ
J_JJK™]K[ZYÜ˜][Û‹\™Yœ™\ÚŠKÉ‰›˜]ÛŠµæuéµæuä5å‹

OO›œ[ŠÊK™]K[ZYÜ˜][Û‹\ÚYÛ›İ]ŠK™\ÜÜÙ_Y[˜İ[ÛˆŠ
^ÚYŠ™\œ›ÜŠ]›İÈ\œ›ÜŠ™\œ›Ü‹›Y\ÜØYÙJNÜ™]\›ˆ™]_Y[˜İ[ÛˆXJ
^Û]OTŠ
NÚYŠJHO[[	‰™K›[™İ
J]›İÈ\œ›ÜŠ•™\œÚ[ÛˆÛÛ™›Xİˆ5å5é5ê5æuæ5å5êuêµè5å5äuçµæõêuæuê5ä5åõêˆ5ê5èµè5çÈ5ç5é5è5æH5è5æuèuæuåuçÈ5è5åuèuèËˆŠNÜ™]\›ˆVÌ_Y[˜İ[ÛˆJ
^Ü™]\›Û\İ\İ[˜][ÛœÊ
^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^Ü™]\›ˆŠZY[™œ›ÛJš\ÈŠKœÙ[Xİ
ŠˆŠK›Ü™\Š˜Ü™X]YØ]ŠK›[Z]
L
J_J_KÜ™X]Q\İ[˜][ÛŠË
^Ü™]\›ˆŠ\Ë\™İ[Y[Ë[˜İ[ÛŠŠ‹‹KÏ^Üİ\ˆˆ‹^\ÎŒŒKYÙ]Œİ\œ™[˜ŞNˆ’SÈŸJ^ÚYŠTİš[™ÊŠKš[J
K\Ÿ‹›[™İŒL
]›İÈ\œ›ÜŠµêuçH5æuèµäÈ5è5äõê5êH5åuèµäÈL5êµåuåuæuçHŠNÜ™]\›ˆXJZY[™œ›ÛJš\ÈŠKš[œÙ\
ÚY˜Ü\Ëœ˜[™ÛUURQ

KİÛ™\—ÚY›‹]Nœ‹\İ[˜][Û—Û˜[YNœ‹\×ØXİ]™NšKÙ][™ÜÎÚJÊ_JKœÙ[Xİ

J_J_K\]Q\İ[˜][ÛŠ‹‹KË
^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^ÚYŠOTİš[™ÊJKš[J
KZ_K›[™İŒL
]›İÈ\œ›ÜŠµêuçH5æuèµäÈ5è5äõê5êH5åuèµäÈL5êµåuåuæuçHŠNÜ™]\›ˆXJZY[œœÊOO]›ÚYÈ\]Wİš\Ù\İ[˜][Ûˆˆ\]Wİš\Ù\İ[˜][Û—Ù]Z[È‹ŠÜÚY›‹Ù^XİYİ™\œÚ[Ûœ‹Ù\İ[˜][Û—Û˜[YNšKÚ\×ØXİ]™NœßKOO]›ÚYŞßNÜÜÙ][™ÜÎÚJ
_JJJ_J_KÙ]š\
Š^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^ÚYŠ[Š]›İÈ\œ›ÜŠµæuêH5ç5äuåõåuê5æuèµäÈŠNÛ]TŠZY[™œ›ÛJš\ÈŠKœÙ[Xİ
ŠˆŠK™\JšY‹ŠK›Ü™\Š˜Ü™X]YØ]ŠK›[Z]
ŠJNÚYŠ‹›[™İOOLJ]›İÈ\œ›ÜŠ‹›[™İÈµæuåuêµê5çµæuèµäÈ5ä5åõäÈ5êµåuä5çH5ç5äuåõæuê5åˆµå5æuèµäÈ5ç5ä5è5çµéµä5ä5åH5ä5æuè5åH5çµêuåuæuæˆ5ç5åõêuäuåuçËˆŠNÛ]O\–ÌKÏV×NÙ›ÜŠ]LÎÛ
ÏLYLÊ^Û]ÏTŠZY[™œ›ÛJš\Ú][\ÈŠKœÙ[Xİ
ŠˆŠK™\Jš\ÚY‹KšY
K›Ü™\ŠšYŠKœ˜[™ÙJ
ÎNNJJNÚYŠËœ\Ú
‹‹˜ÊKË›[™İYLÊXœ™XZß\™]\›ˆÙJŠßKJKÚ][\ÎœßJ_J_KÜ™X]R][J‹Š^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^İ˜\ˆÛ]O[˜J‹šÚ[™‹œ^[ØY
KÏ^ÚYœ‹šYš\ÚY›‹Ú[™œ‹šÚ[™YØXŞWÚYŠ\‹›YØXŞWÚY
HO[[Ù›[^[ØYš_K^ZY[™œ›ÛJš\Ú][\ÈŠKš[œÙ\
ÊKœÙ[Xİ

NÚYŠ[™\œ›ÜŸ™\œ›Ü‹˜ÛÙHOOHŒŒÍLHŠ\™]\›ˆXJ
NÛ]ÏTŠZY[™œ›ÛJš\Ú][\ÈŠKœÙ[Xİ
ŠˆŠK™\JšY‹‹šY
K›X^X™TÚ[™ÛJ
JNÚYŠÉ‰˜Ëš\ÚYOO[‰‰˜ËšÚ[™OO\‹šÚ[™	‰’”ÓÓ‹œİš[™ÚYJ˜J‹šÚ[™Ëœ^[ØY
JOOOR”ÓÓ‹œİš[™ÚYJJJ\™]\›ˆÎİ›İÈ\œ›ÜŠ•™\œÚ[ÛˆÛÛ™›Xİˆ5å5é5ê5æuæ5æõäuê5éõæuæuçKˆ5ê5èµè5çÈ5ç5é5è5æH5è5æuèuæuåuçÈ5è5åuèuèËˆŠ_J_K\]R][J‹‹KÊ^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^Ü™]\›ˆXJZY[œœÊ\]Wİš\Ú][H‹ÜÚY›‹Ù^XİYİ™\œÚ[Ûœ‹Ü^[ØY›˜JKÊ_JJ_J_K[]R][J‹Š^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^Ü™]\›ˆXJZY[œœÊ™[]Wİš\Ú][H‹ÜÚY›‹Ù^XİYİ™\œÚ[ÛœŸJJ_J_K™]šY]ÔÛXŞJ‹‹KË
^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^Ü™]\›ˆXJZY[œœÊœ™]šY]×Ø›ÛÚÚ[™×ÜÛXŞH‹Üİš\ÚY›‹Ù^XİYİ™\œÚ[Ûœ‹Ü›ÜÜØ[ÚYšKÜÙ[XİYÚYÎœËÙXÚ\Ú[Û›JJ_J_K\]TÙ][™ÜÊ‹‹J^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^Ü™]\›ˆXJZY[œœÊ\]Wİš\ÜÙ][™ÜÈ‹ÜÚY›‹Ù^XİYİ™\œÚ[Ûœ‹ÜÙ][™ÜÎÚJJ_JJ_J_K[\Ü][\Ê‹Š^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^Û]O\‹›X\
ÏOŠÚY˜Ü\Ëœ˜[™ÛUURQ

Kš\ÚY›‹Ú[™œËšÚ[™YØXŞWÚYœË›YØXŞWÚY^[ØY›˜JËšÚ[™Ëœ^[ØY
_JJNÜ™]\›ˆK›[™İÔŠZY[™œ›ÛJš\Ú][\ÈŠK\Ù\
KÛÛÛÛ™›Xİˆš\ÚYÚ[™YØXŞWÚY‹YÛ›Ü™Q\XØ]\ÎˆLJKœÙ[Xİ

JN–×_J___Y[˜İ[Ûˆ]ÊKH•Z[[™Š^İ˜\ˆÎÛ]Tİš[™Êœ^[ØY››İ\ßˆŠK›X]Ú
ÊÎ—ŸŠuç5æuè5å—ÊŠ×—‹—JÊJÎ—Ÿ	
KÊNÚYŠ\Ÿ×µç5ç5äŸµç5ç5äËË\İ
–ÌWKš[J
JJ\™]\›ˆ[Û]O\–ÌWKš[J
KÏZKœÜ]
×ÊÖø $ø %WÊËÊVÌKš[J
KYK™š[™
Oİ˜\ˆÜ™]\›ˆšÚ[™OOH˜›ÛÚÚ[™È‰‰™œ^[ØY\OOOHµçµç5åuçÈ‰‰Šœ^[ØYœİ\Y\OO\ß

Yœ^[ØY›˜[YJOO[[İ›ÚYœœİ\ÕÚ]
ÊÈˆ8 $ÈŠJJ_JNÜ™]\›ÛX™[šK]Y\NœÊÈˆŠÊ

Ï[O[[İ›ÚY›œ^[ØY›˜[YJOO[[İ›ÚY˜ËœÜ]
×ÊÖø $ø %WÊËÊKœÛXÙJJKš›Ú[ŠˆŠJ_œ^[ØYœXÙJJÈˆŠŞ[ÊŠKİ]\ÎŠO[[İ›ÚY›œ^[ØYœİ]\Ê_µç5äuäõæuéõåŸ_Y[˜İ[ÛˆÛJKH•Z[[™Š^Û]X]ÊKŠNÚYŠ\Š\™]\›ˆˆÛ]OWÛÊÙJŠßKŠKÜ™XÚ\Ú[Ûˆ[šÛ›İÛˆŸJJNÜ™]\›‰Ï]ˆÛ\ÜÏH™Z[K[ÙÚ[™Èµç5æuè5å5äuèuæuåuçH5å5æuåuçOÚ‰ÊÑÊ‹›X™[
JÉÈÜ[ˆÛ\ÜÏH˜˜YÙH‰ÊÑÊ‹œİ]\ÊJÉÏÜÜ[Ü]ˆÛ\ÜÏHœ›İÈ‰ÊÖÖÈ™ÛÛÙÛH‹‘ÛÛÙÛHX\È—KÈØ^™H‹•Ø^™H—WK›X\

ÜËJOO‰ÏHÛ\ÜÏH˜ˆˆ]K[ÙÚ[™Ë[˜]šYØ][ÛH‰ÊÜÊÉÈˆ™YH‰ÊÑÊVÜ×JJÉÈˆ\™Ù]H—Ø›[šÈˆ™[H››ÛÜ[™\ˆ›Ü™Y™\œ™\ˆµè5æuåuåuæ5ç5ç5æuè5å5äu¯‰ÊÛ
ÈØOˆŠKš›Ú[ŠˆŠJÈÙ]ÛX[µåõæué5åuêH5çµéõåuçH5å5ç5æuè5å5å5ê5êuåuçH5äuêµæõè5åuçÎÈ5æuêH5ç5ä5çµêˆ5ä5êˆ5å5è5æõèH5åuå5æõêµåuäuêˆ5ç5é5è5æH5æuéµæuä5åÜÛX[Ù]ˆŸ]˜\ˆšOZÙÊ[J
KJNÙ[˜İ[ÛˆÙ
J^Û]SX]›X^
X]›Z[ŠÍ
ÌŒ
KMÌ
JKSX]›X^

_Í
KLLL
NÜ™]\›ÛX^ÚY›‹X^ZYÚœ‹Z[•ÚY“X]›Z[ŠLŒŠ__Y[˜İ[Ûˆ
KŠ^Û]YØİ[Y[˜Ü™X]Q[[Y[

NÜ™]\›ˆHOO]›ÚY	‰Š‹^ÛÛ[YJK‰‰Š‹˜Û\ÜÓ˜[YO[ŠKŸY[˜İ[ÛˆÊ
^Û]O\
™]ˆ‹›ÚYœ›İÈX\[˜]šYØ][ÛˆŠKWÛÊ
NÙ›ÜŠ]Ü‹W[Ù–ÖÈ™ÛÛÙÛH‹‘ÛÛÙÛHX\È—KÈØ^™H‹•Ø^™H—WJ^Û]Ï\
˜H‹µè5æuåuåuæ5äu¯ˆŠÚK˜ˆŠNÜËš™Y[–Ü—KË\™Ù]H—Ø›[šÈ‹Ëœ™[H››ÛÜ[™\ˆ›Ü™Y™\œ™\ˆ‹Ë™]\Ù]›˜]šYØ][Û\‹K˜\[™
Ê_\™]\›ˆ_Y[˜İ[Ûˆ™
J^İ˜\ˆNÛ]\
™]ˆ‹›ÚY›X\\İÜŠNÛ‹˜\[™

œİ›Û™È‹µæuåuçHŠİ™^JÈˆ0­ÈŠİ›X™[
JK‹˜\[™

œ‹µæuèµäÈ5äuêµåuæõè5æuêˆ5å5æuåuçµæuêˆŠÊ

O]™\İ[˜][ÛŠOO[[İ›ÚYšKœ]Y\J_›X™[
JJKœ™XÚ\Ú[ÛˆOOH™^Xİ‰‰›‹˜\[™

œÛX[‹µèuæuæõêˆ5å5çµé5å5çµéµæuæuè5êˆ5ä5åµåuêÈ5å5è5æuåuåuæ5çµåõé5êH5ä5êˆ5æuèµäÈ5å5æuåuçKˆ5æuêH5ç5ä5çµêˆ5æõêµåuäuêˆ5ç5é5è5æH5æuéµæuä5åˆ‹›]]YŠJK‹˜\[™
Ê
JNÛ]\
˜]Ûˆ‹µé5êµåÈ5êµåuæõè5æuêˆ5ç5æuåuçHŠİ™^K˜ˆŠNÜ™]\›ˆ‹\OH˜]Ûˆ‹‹™]\Ù]›Ü[‘^O]šY‹›Û˜ÛXÚÏJ
OO™OO[[İ›ÚY™JšY
K‹˜\[™
ŠKŸY[˜İ[ÛˆÛJK‹H•Z[[™Š^İ˜\ˆÎÛ]OYK™š[\ŠÏOšËšÚ[™OOHœİÜŠKœÛÜ

ËJOOšËœ^[ØY™^KRKœ^[ØY™^JKÏ]ÛÊKŠKV˜ÊÊKÏ[™]ÈÙ]
Ë›X\
ÏOšËšY
JK\
œ‹›[™İ
Èˆ5è5éõåuäõåuêˆ5èµç5å5çµé5å0­ÈŠÜË›[™İ
Èˆ5èµéµæuê5åuêˆ5çµçµåuéõçµåuêˆ5çµêµåuæˆŠÚK›[™İ
Nİ˜\[™

NÛ]\
™]ˆŠNÜšYHœ›İ]K[X\‹œÙ]]šX]J˜\šXK[X™[‹µçµé5å5ä5æuè5æ5ê5ä5éõæ5æuäuæuêˆ5êuç5è5éõåuäõåuêˆ5å5çµèuç5åuçŠK˜\[™

NÛ]\
œ‹µê5éõèˆ5å5çµé5å5ç5ä5è5æ5èµçËˆ5ä5é5êuê5ç5å5êuêµçµêH5äuæõé5êµåuê5æH5å5è5æuåuåuæ5äuê5êuæuçµêˆ5å5è5éõåuäõåuêˆ5ç5çµæ5åˆ‹›X\]Ø\›š[™ÈŠNÚšY[HL˜\[™

NÛ]OZK™š[\ŠÏOˆXËš\ÊËšY
JNÚYŠK›[™İ
^Û]Ï\
™]ˆŠNÚËšYH[›X\Y\İÜÈ‹Ë˜\[™

šÈ‹µèµéµæuê5åuêˆ5ç5ç5ä5çµæuéõåuçH5äuçµé5åŠJKË˜\[™

œ‹µä5é5êuê5ç5å5åuèuæuèÈ5éõåH5ê5åuåõäH5åuéõåH5ä5åuê5æˆ5äuèµê5æuæõêˆ5å5èµéµæuê5å5äuêµåuæõè5æuêˆ5å5æuåuçµæuê‹ˆŠJNÙ›ÜŠ]HÙˆJZË˜\[™
™
ÚY’KšY^N’Kœ^[ØY™^KX™[’Kœ^[ØYœXÙK\İ[˜][Û›ÊKœ^[ØYŠK™XÚ\Ú[Ûˆ[šÛ›İÛˆŸKŠJNİ˜\[™
Ê_[]Ï\
™]Z[ÈŠNİË˜\[™

œİ[[X\H‹µæõç5è5éõåuäõåuêˆ5å5çµèuç5åuç
ŠÚK›[™İ
ÈŠHŠJNÙ›ÜŠ]ÈÙˆJ]Ë˜\[™
™

Ï\Ë™š[™
OO’KšYOOZËšY
JHO[[ÔÎÙ^NšËœ^[ØY™^KX™[šËœ^[ØYœXÙK\İ[˜][Û›ÊËœ^[ØYŠK™XÚ\Ú[Ûˆ[šÛ›İÛˆŸKŠJNÚYŠ˜\[™
ÊK˜\[™

œ‹µäuè5éõåuäõåuêˆ5êuç5êuæuæ5ä5åH5æ5æuèuå5æuêH5ç5äuåõåuê5ä5êˆ5å5ê5éµæuèÈ5ä5åH5êuäõå5å5êµèµåué5å5å5ê5ç5åuåuè5æ5æKˆ‹›]]YŠJK[›[™İ
\™]\›ˆ˜\[™

œ‹µæõäõæH5ç5å5éµæuäˆ5è5éõåuäõåuêˆ5äuçµé5å5å5åuèuèÈ5èµéµæuê5åuêˆ5èµçH5çµæuéõåuçH5äuêµåuæõè5æuêˆ5å5æuåuçµæuê‹ˆŠJK

OOßNÛ]Ï^šK™Y˜][›X\
ÜØÜ›ÛÚY[›ÛÛNˆL_JNÙË˜]šX][ÛÛÛ›ÛœÙ]™Yš^
LJNÛ]O[[ÏJ
OOÛ]ÏYË™Ù]Ú^™J
KOYÙ
ËËJNÜœİ[KœÙ]›Ü\J‹K\›İ]K\Ü\]ÚY‹K›X^ÚY
ÈœŠKœİ[KœÙ]›Ü\J‹K\›İ]K\Ü\ZZYÚ‹K›X^ZYÚ
ÈœŠNÛ]O^NÜ™]\›ˆI‰ŠØš™Xİ˜\ÜÚYÛŠK›Ü[ÛœËJKK\]J
JK_N×Ê
KË›ÛŠœ™\Ú^™H‹ÊKË›ÛŠœÜ\Ü[ˆ‹ÏOŞOZËœÜ\Ê
_JKË›ÛŠœÜ\ÛÜÙH‹

OOŞO[[JKšK™Y˜][[S^Y\ŠšÎ‹Ëİ[K›Ü[œİ™Y]X\›Ü™ËŞŞŸKŞŞKŞŞ_Kœ™È‹ÛX^›ÛÛNŒNK]šX][Û‰É˜ÛÜNÈH™YHšÎ‹ËİİİË›Ü[œİ™Y]X\›Ü™ËØÛÜ\šYÚˆ\™Ù]H—Ø›[šÈˆ™[H››ÛÜ[™\ˆ›Ü™Y™\œ™\ˆ“Ü[”İ™Y]X\ØOˆÛÛšX]ÜœÉßJK›ÛŠ[Y\œ›Üˆ‹

OOÚšY[HL_JK˜YÊÊNÙ›ÜŠ]ÈÙˆ
^Û]OZËœÚ[ÖÌKO\
œÜ[ˆ‹İš[™ÊK™^JJÊËœÚ[Ë›[™İŒOÈŠÈˆˆŠJKO^šK™Y˜][™]’XÛÛŠØÛ\ÜÓ˜[YNˆœ›İ]K[X\šÙ\ˆ‹[KXÛÛ”Ú^™N–ÍKXÛÛ[˜ÚÜ–ÌŒ‹Œ—_JK\
™]ˆŠNÔ‹™\HœÙ›ÜŠ]ˆÙˆËœÚ[ÊT‹˜\[™
™
‹ŠJNŞšK™Y˜][›X\šÙ\ŠÚË›]Ë›™×KÚXÛÛ‘K]NšËœÚ[Ë›X\
OˆµæuåuçHŠŞ‹™^JÈˆ0­ÈŠŞ‹›X™[
Kš›Ú[ŠˆÈŠ_JK˜š[™Ü\
‹ÙJŠßKÙ
Ë™Ù]Ú^™J
KË™Ù]Ú^™J
KJJKØÛ\ÜÓ˜[YNˆœ›İ]K\Ü\‹]]Ô[”Y[™Î–ÌM‹M—KÙY\[•šY]ÎˆLJJK˜YÊÊ_YË™š]›İ[™Ê›X\
ÏO–ÚË›]Ë›™×JKÜY[™Î–ÌÌÌKX^›ÛÛNŒLŸJNÛ]\Ù][Y[İ]


OOİ˜\ˆÎÙËš[˜[Y]TÚ^™J
K
Ï\œØÜ›Û[ÕšY]ÊOO[[Ë˜Ø[
Ø›ØÚÎˆœİ\‹™Z]š[Üˆš[œİ[ŸJ_K
K]\[Ùˆ™\Ú^™SØœÙ\™\OH™[˜İ[ÛˆÛ™]È™\Ú^™SØœÙ\™\Š

OO™Ëš[˜[Y]TÚ^™J
JN›[Ü™]\›ˆO[[›ØœÙ\™J
K

OOØÛX\•[Y[İ]

KO[[™\ØÛÛ›™Xİ

KËœ™[[İ™J
__]˜\ˆ›O^Ûİ™\™YNˆµäuä5æuåõåuê‹[šÛ›İÛˆµåõèuê5çµæuäõèˆ‹Ü[ˆµç5äuæuéµåuèˆŸKO^Ûİ™\™YNŒ[šÛ›İÛŒKÜ[ŒŸK]ÏVÖÈœİÜ‹œ›İ]H‹µçµé5å5åuçµèuç5åuç—KÈ™Z[H‹˜›ÛÚÚ[™È‹µêµåuæõè5æuêˆ5æuåuçµæuêˆ—KÈ™^[œÙ\È‹Ø[]‹µêµéõéµæuäH5åuå5åuéµä5åuêˆ—KÈ™Øİ[Y[È‹˜›ÛÚÚ[™È‹µä5æuêuåuê5æH5ç5æuè5å—KÈ™Ü›İ\‹\Ù\ˆ‹µå5éõäuåuéµå5êuç5æH—KÈ™šY[‹™ÙX\ˆ‹µèµê5æõêˆ5êuæ5åÈ5åu¯‘Ô—WNÙ[˜İ[ÛˆİÊÛ›İÎ™O[™]È]_O^ßJ^Û][™]ÈÙ]Jš][\ß×JK™š[\ŠOˆYšY‹š\ÊšY
_š\ÚY	‰™š\ÚYOO]šYÈLNŠ‹˜Y
šY
KL
JKO]œÙ][™ÜßßKÏT˜J‹JKÏR˜Jİš\][\Îœ‹›İÎ™_JKš][\Ë™š[\ŠO™œİ]\ÈOOH˜ÛÛ\]YŠKœÛÜ


OO‘VÙœİ]\×KQVÜœİ]\×_
™XY[™_NNNHŠK›ØØ[PÛÛ\\™J™XY[™_NNNHŠJNÜ™]\›ØÛÛ\][Û™[
‹JK^[œÙ\Î‘ZJËK˜YÙ]
K[šÛ›İÛ”^[Y[ÎœËœÛÛYJO™œZYOO[[
K][[Û˜ËœÛXÙJJK][[Û[˜Ë][[ÛÛİ[˜Ë›[™İ_]˜\ˆšO]OOO[[Èµæ5ê5çH5è5éõäuèˆ›

NÙ[˜İ[Ûˆ[JKŠ^Ü™]\›‰Ï\XÛHÛ\ÜÏH™\Ú›Ø\™\›ÙÜ™\ÜÈ]ˆÛ\ÜÏHœ›İÈÏ‰Êİ
ÈÚÏİ›Û™ÏˆŠÊOOO[[Èµæ5ê5çH5å5åuäµäõê‘ÊJJÈ‰HŠJÈÜİ›Û™ÏÙ]ˆŠÊOOO[[Èˆ‰Ï›ÙÜ™\ÜÈX^HŒLˆ˜[YOH‰ÊÑÊJJÉÈˆ\šXK[X™[H‰Êİ
ÉÈÜ›ÙÜ™\ÜÏ‰ÊJÈˆŠÛŠÈÜØ\XÛOˆŸY[˜İ[Ûˆ›JÜ›Ûİš\™Kİ]N›^ßK›İÎœ‹Û“˜]šYØ]NšOJ
OOßKÛ‘Y]œÏJ
OOßKÛÚ[™ÙQ\İ[˜][Û›J
OOß_J^İ˜\ˆNÛ]Ï[İÊKÛ›İÎœŸJKXË˜ÛÛ\][Û‹XË™^[œÙ\Îİš[›™\’SIÏ]ˆÛ\ÜÏH˜ÛY[Y\Ú›Ø\™\Ú›Ø\™Yš\œİˆ]KXÛY[Y\Ú›Ø\™]ˆÛ\ÜÏHÛÜšÜÜXÙKZ\›È\Ú›Ø\™Z\›Èˆ›ÛOHœ™YÚ[Ûˆˆ\šXK[X™[YOHÛÜšÜÜXÙK]]HˆYHÛÜšÜÜXÙK]]HˆÛ\ÜÏHš\Y\Ú›Ø\™]]Hµç5åuåÈ5äuéõê5å5ç5æ5æuåuçÚ]ˆ]K]š\Y]Z[ÏÙ]Ù]]ˆÛ\ÜÏH™\Ú›Ø\™\İ[[X\H]ˆÛ\ÜÏH™\Ú›Ø\™[XZ[ˆÙXİ[ÛˆÛ\ÜÏH™\Ú›Ø\™\[™[]ˆÛ\ÜÏH™\Ú›Ø\™\[™[ZXY[™ÈÏµçµåuæõè5åuêˆ5åuçµèuç5åuçÚÏ]Ûˆ\OH˜]Ûˆˆ]KY\Ú›Ø\™\™XY[™\ÜÏµäõåuåÈ5çµåuæõè5åuêˆ8¡¤Ø]ÛÙ]]ˆÛ\ÜÏH™\Ú›Ø\™\›ÙÜ™\ÜËYÜšY‰ÊÓ[Jµé5ê5æuæ5æH5å5æõè5å‹œ\˜Ù[˜ÛÛ\]Y
Èˆ5çµêµåuæˆŠÙİ[
Èˆ5å5åuêuç5çµåHŠJÓ[JµæõæuèuåuæH5æuçµæH5çµèuç5åuç‹œ›İ]Kœ\˜Ù[œ›İ]K˜Ûİ™\™Y
Èˆ5çµêµåuæˆŠÙœ›İ]K™^\ÊÈˆ5æuçµæuçH5çµêµåuæõè5è5æuçHŠJÉÏÙ]Û\ÜÏH™\Ú›Ø\™[›İHµç5é5æH5å5ê5êuåuçµåuêˆ5å5êuçµåuê5åuêÈ5ä5æuè5åH5ä5æuçµåuêˆ5å5åµçµè5å5êµêuç5åuçH5ä5åH5äuæ5æuåõåuêˆ5çµèuç5åuçÜÜÙXİ[ÛÙXİ[ÛˆÛ\ÜÏH™\Ú›Ø\™\[™[]ˆÛ\ÜÏH™\Ú›Ø\™\[™[ZXY[™ÈÏµêµéõéµæuäH5å5æ5æuåuçÚÏ]Ûˆ\OH˜]Ûˆˆ]KY\Ú›Ø\™YÛÏH™^[œÙ\Èµé5æuê5åuæ5å5åuéµä5åuêˆ8¡¤Ø]ÛÙ]]Z[ÈÛ\ÜÏH™\Ú›Ø\™XYÙ]Y]Z[È‰ÊÊ

O[‹˜YÙ]Ü[ŠHO[[ÒN›İÛ™\‘Øİ[Y[™Y˜][šY]Ëš[›™\•ÚYÌ
OÈˆÜ[ˆˆˆŠJÈİ[[X\OµêµéõéµæuäNˆŠÑÊšJ˜YÙ]
JJÉÈ0­È5é5æuê5åuæÜİ[[X\OÛ\ÜÏH™\Ú›Ø\™[[Û™^H]µêµéõéµæuäOÙ‰ÊÑÊšJ˜YÙ]
JJÈÙÙ]]µå5åuéµä5åuêˆ5æuäõåuèµåuêÙˆŠÑÊšJœ[›™Y
JJÈÙÙ]]µêµêuç5åuçµæuçH5çµäõåuåuåõæuçOÙˆŠÑÊšJœZY
JJÉÏÙÙ]]µæuêµê5å5ç5ä5åõê5êµêuç5åuçµæuçOÙÛ\ÜÏH‰ÊÊœ™[XZ[š[™ĞYÙ]È™\Ú›Ø\™[™YØ]]™HˆˆŠJÉÈ‰ÊÑÊšJœ™[XZ[š[™ĞYÙ]
JJÈÙÙ]ÙÙ]Z[ÏˆŠÊ[šÛ›İÛŸË[šÛ›İÛ”^[Y[ÏÉÏÛ\ÜÏH™\Ú›Ø\™]Ø\›š[™ÈµèuæuæõåuçH5åõç5éõæNˆ	ÊÊ[šÛ›İÛÑÊ[šÛ›İÛŠJÈˆ5å5åuéµä5åuêˆ5ç5ç5ä5çµåõæuêˆˆˆŠJÊË[šÛ›İÛ”^[Y[ÏÈµæuêH5êµêuç5åuçµæuçH5äuèuæõåuçH5ç5ä5æuäõåuè‹ˆˆˆŠJÈµæuêH5ç5å5êuç5æuçH5è5êµåuè5æuçH5äuêµéõéµæuäKÜˆˆˆŠJÉÏÛ\ÜÏH™\Ú›Ø\™[›İHµèuæõåuçµæuçH5äuêuéõç5æuçH5ç5é5æH5äõæuåuåuåõæH5å5ê5êuåuçµåuêÈ5ä5æuè5çH5ä5æuçµåuêˆ5èué5éËˆ5êµéõéµæuäHRH5è5é5ê5äËÜÜÙXİ[ÛÙXİ[ÛˆÛ\ÜÏH™\Ú›Ø\™\[™[\Ú›Ø\™[™^Ïµç5æ5æué5åuç5äuæ5æuåuçÚÏ‰ÊÑÊË˜][[ÛÛİ[
JÉÈ5é5ê5æuæ5æuçH5é5êµåuåõæuçH5ä5åH5èµçH5çµæuäõèˆ5åõèuêÜ]Ûˆ\OH˜]Ûˆˆ]KY\Ú›Ø\™X][[Ûµç5ê5êuæuçµå5ç5é5æH5éõæ5äµåuê5æuå8¡¤Ø]ÛÜÙXİ[Û]Z[ÈÛ\ÜÏH™\Ú›Ø\™\]ZXÚÈİ[[X\Oµé5èµåuç5åuêˆ5çµå5æuê5åuêÜİ[[X\O˜]ˆÛ\ÜÏH™\Ú›Ø\™\ÚÜİ]Èˆ\šXK[X™[Hµéõæuéµåuê5æH5äõê5æˆ5ç5æ5æuåuç]Ûˆ\OH˜]Ûˆˆ]KY\Ú›Ø\™XÚ[™ÙOµè5æuå5åuç5æuèµäõæuçOØ]Û‰ÊÚ]Ë›X\

ĞKK—JOO‰Ï]Ûˆ\OH˜]Ûˆˆ]KY\Ú›Ø\™YÛÏH‰ÊĞJÉÈ‰ÊÚ™JJJÈÜ[ˆŠÔŠÈÜÜ[Ø]ÛˆŠKš›Ú[ŠˆŠJÉÏÛ˜]Ù]Z[ÏÙ]Ù]ÙXİ[ÛˆÛ\ÜÏH™\Ú›Ø\™\[™[\Ú›Ø\™X][[Ûˆˆ\šXK[X™[YOH™\Ú›Ø\™X][[Û‹]]HÈYH™\Ú›Ø\™X][[Û‹]]Hµäõåuê5êH5êµêuåuçµêˆ5ç5äOÚÏ]ˆÛ\ÜÏH™\Ú›Ø\™X][[Û‹Yš[\œÈX™[µéõæ5äµåuê5æuåÙ[Xİ]KX][[Û‹ZÚ[™Ü[Ûˆ˜[YOHˆµæõç5å5éõæ5äµåuê5æuåuêÛÜ[ÛÜ[Ûˆ˜[YOH\ÚÈµçµêuæuçµåuêÛÜ[ÛÜ[Ûˆ˜[YOH™ÙX\ˆµéµæuåuäÏÛÜ[ÛÜ[Ûˆ˜[YOH˜›ÛÚÚ[™Èµå5åµçµè5åuêÛÜ[ÛÜÙ[XİÛX™[X™[µçµéµäOÙ[Xİ]KX][[Û‹\İ]\ÏÜ[Ûˆ˜[YOHˆµæõç5å5çµéµäuæuçOÛÜ[Û‰ÊÓØš™Xİ™[šY\Ê›JK›X\

ĞKWJOO‰ÏÜ[Ûˆ˜[YOH‰ÊĞJÉÈ‰ÊÑJÈÛÜ[ÛˆŠKš›Ú[ŠˆŠJÉÏÜÙ[XİÛX™[Ù]]KX][[Û‹XÛİ[›ÛOHœİ]\ÈÜ]ˆÛ\ÜÏH™\Ú›Ø\™X][[Û‹[\İÙ]ÜÙXİ[ÛÙXİ[ÛˆÛ\ÜÏHš\XÛÛ\][Ûˆˆ\šXK[X™[HµäõåuåÈ5çµåuæõè5åuêˆ5ç5æ5æuåuçÜÙXİ[ÛÙ]‰ÎÛ]]œ]Y\TÙ[XİÜŠ‹˜ÛY[Y\Ú›Ø\™ŠKOZœ]Y\TÙ[XİÜŠ‹™\Ú›Ø\™X][[Û‹[\İŠKÏ[]
Ü›Ûİš™Yš^ˆ›İ™\šY]È‹X™[ˆµä5åµåuê5æH5ç5åuåÈ5å5çµèuèˆ‹İ]N›‹Ü›İ\Î–ŞÚYˆœİ[[X\H‹X™[ˆµêµçµåuè5êˆ5çµéµäH‹›Ù\Î–Úœ]Y\TÙ[XİÜŠ‹™\Ú›Ø\™\İ[[X\HŠW_KÚYˆ˜][[Ûˆ‹X™[ˆµç5æ5æué5åuç
ŠØË˜][[ÛÛİ[
ÈŠH‹›Ù\Î–Úœ]Y\TÙ[XİÜŠ‹™\Ú›Ø\™X][[ÛˆŠW_KÚYˆœ™\\˜][Ûˆ‹X™[ˆµçµåuæõè5åuêˆ‹›Ù\Î–Úœ]Y\TÙ[XİÜŠ‹š\XÛÛ\][ÛˆŠW_W_JKÏHLOZœ]Y\TÙ[XİÜŠ‹™\Ú›Ø\™XYÙ]Y]Z[ÈŠNŞK›ÛÙÙÛOJ
OOÙÉ‰Š‹˜YÙ]Ü[^K›Ü[Š_NÛ]Ï[‹˜][[ÛŸ
‹˜][[Û^ÚÚ[™ˆˆ‹İ]\Îˆˆ‹YÙ\Îß_JKZœ]Y\TÙ[XİÜŠ–Ù]KX][[Û‹ZÚ[™HŠKZœ]Y\TÙ[XİÜŠ–Ù]KX][[Û‹\İ]\×HŠNŞ˜[YOWËšÚ[™˜[YOWËœİ]\ÎÙ[˜İ[ÛˆÊ
^ÛKœ]Y\TÙ[XİÜ[
–Ù]KY\Ú›Ø\™YY]HŠK™›Ü‘XXÚ
OO‘K›Û˜ÛXÚÏ[[
NÛ]OXË˜][[Û[™š[\ŠOOŠ^˜[Y_KšÚ[™OO^˜[YJI‰ŠT˜[Y_Kœİ]\ÏOOT˜[YJJNÚœ]Y\TÙ[XİÜŠ–Ù]KX][[Û‹XÛİ[HŠK^ÛÛ[PK›[™İ
Èˆ5çµêµåuæˆŠØË˜][[ÛÛİ[
Èˆ5é5ê5æuæ5æuçH‹Kš[›™\’SPK›X\
OO‰Ï\XÛO]Ü[ˆÛ\ÜÏH™\Ú›Ø\™\İ]H	ÊÑKœİ]\ÊÉÈ‰ÊÔ›VÑKœİ]\×JÈÜÜ[ˆŠÑÊK]JJÈÚ]Z[Ïİ[[X\Oµé5ê5æ5æuçOÜİ[[X\OˆŠÑKœ™X\ÛÛœË›X\
ÊKš›Ú[Šˆ0­ÈŠJÉÏÜÙ]Z[ÏÙ]]Ûˆ\OH˜]Ûˆˆ]KY\Ú›Ø\™YY]H‰ÊÑÊKšY
JÉÈµé5êµåÈ5ê5êuåuçµå8¡¤Ø]ÛØ\XÛO‰ÊKš›Ú[ŠˆŠ_µä5æuçÈ5é5ê5æuæ5æuçH5äuèuæuè5åuçÈ5å5è5äuåõêÜˆ‹ÙJØÛÛZ[™\›K][\Î–Ë‹‹›Kœ]Y\TÙ[XİÜ[
˜\XÛHŠWKİ]N—ËœYÙ\ËYÙTÚ^™N›İÛ™\‘Øİ[Y[™Y˜][šY]Ëš[›™\•ÚYŒÌŒßJKKœ]Y\TÙ[XİÜ[
–Ù]KY\Ú›Ø\™YY]HŠK™›Ü‘XXÚ
OO‘K›Û˜ÛXÚÏJ
OOÚYŠYÊ\™]\›Û]JKš][\ß×JK™š[™
O‹šYOOQK™]\Ù]™\Ú›Ø\™Y]	‰Š^‹š\ÚY‹š\ÚYOOYKšY
JNÔ‰‰œÊŠ_J_Y›ÜŠ]HÙ–ŞJPK›Û˜Ú[™ÙOJ
OO×ËšÚ[™^˜[YKËœİ]\ÏT˜[YKËœYÙ\Ï^ßKÊ
_NÔÊ
NÛ]ÏVË‹‹šœ]Y\TÙ[XİÜ[
–Ù]KY\Ú›Ø\™YÛ×KÙ]KY\Ú›Ø\™XÚ[™ÙWKÙ]KY\Ú›Ø\™\™XY[™\Ü×KÙ]KY\Ú›Ø\™X][[Û—HŠWNÙ›ÜŠ]HÙˆÊPK›Û˜ÛXÚÏJ
OOÚYŠYÊ\™]\›ÚYŠKš\Ğ]šX]J™]KY\Ú›Ø\™YÛÈŠJ\™]\›ˆJK™]\Ù]™\Ú›Ø\™ÛÊNÚYŠKš\Ğ]šX]J™]KY\Ú›Ø\™XÚ[™ÙHŠJ\™]\›ˆ

NÛ]OPKš\Ğ]šX]J™]KY\Ú›Ø\™X][[ÛˆŠOÈ˜][[Ûˆˆœ™\\˜][ÛˆİÊJKœ]Y\TÙ[XİÜŠˆÛİ™\šY]Ë]X‹HŠÑJK™›Øİ\Ê
_NÜ™]\›Š
OOÙÏHLKË™›Ü‘XXÚ
OOK›Û˜ÛXÚÏ[[
KKœ]Y\TÙ[XİÜ[
˜]ÛˆŠK™›Ü‘XXÚ
OOK›Û˜ÛXÚÏ[[
K›Û˜Ú[™ÙOT›Û˜Ú[™ÙO[[K›ÛÙÙÛO[[_]˜\ˆİÏ]OÛ]OTİš[™ÊˆŠK›X]Ú
ÊÎµæõè5æuèuå5é‰õéËõä5æuçÊWÊŠ
ÊWÊ‹ÊŠÎµæuéµæuä5å5é‰õéËõä5ä5åuæ
WÊŠ
ÊKÚJNÜ™]\›ˆOŞÜİ\“[X™\ŠVÌWJK[™“[X™\ŠVÌ—J_N›[NÙ[˜İ[ÛˆšJV×KJ^Û]S[X™\ŠJNÚYŠS[X™\‹š\Ò[YÙ\ŠŠ_J\™]\›ˆ[Û]]™š[\ŠOOİ˜\ˆÎÜ™]\›ŠOO[[İ›ÚYšKšÚ[™
OOOH˜›ÛÚÚ[™È‰‰‹õçµç5åuçß5ç5æuè5åİ[™\ÛÜš[YÙKÚK\İ
İš[™Ê

ÏZKœ^[ØY
OO[[İ›ÚYœË\J_ˆŠJ_JNÙ›ÜŠ]HÙˆŠ^Û]ÏZKœ^[ØYßK\İÊË››İ\ÊKÏ\Ë›˜[Y_ËœXÙ_Ëœİ\Y\ÚYŠ	‰›[œİ\	‰›™[™	‰˜Ê\™]\›Û˜[YN˜Ë›İ\Î”İš[™ÊË››İ\ßˆŠKÛİ\˜ÙRYšKšYİ\^N›œİ\[™^N›™[™_\™]\›ˆ[Y[˜İ[ÛˆÊJ^Ü™]\›˜[İÜ‹]š\\İY[Î˜˜XÚÙÜ›İ[™‰Ôİš[™Ê˜[›Û[[İ\ÈŠ_N‰Ôİš[™Ê_[šÛ›İÛˆŠ_XY[˜İ[Ûˆ›JKŠ^Û]X	İˆŸN‰Ù_ˆŸXOLŒMŒLÍŒŒNÙ›ÜŠ]ÏLÜÏ‹›[™İÜÊÊÊZW\‹˜Ú\ÛÙP]
ÊKOSX]š[][
KMÍÍÍŒNJNÜ™]\›ˆX]˜XœÊJI[ŸY[˜İ[Ûˆ›Jİ\Ù\’Yš\Y™KİÜ˜YÙN›YÛØ˜[\Ë›ØØ[İÜ˜YÙK˜[™ÛNœSX]œ˜[™ÛKÛİ[šOLßO^ßJ^Û]ÏSX]›X^
K[X™\ŠJ_ÊK[ÊJKÎİ^ØÏ[O[[İ›ÚY›‹™Ù]][J
_XØ]Ú

^ß[]S[X™\ŠÊNÚYŠÈOO[[	‰˜ÈOOHˆ‰‰“[X™\‹š\Ò[YÙ\Š
I‰™L	‰™Ê\™]\›Ú[™^™Ù^N›NÛ]İ^Û]S[X™\ŠŠ
JNÜS[X™\‹š\Ñš[š]J
OÓX]™›ÛÜŠX]›X^
X]›Z[ŠNNNNNK
JJœÊN“›JKÊ_XØ]Ú

^ÜS›JKÊ_]^ÛO[[‹œÙ]][Jİš[™Ê
J_XØ]Ú

^ß\™]\›Ú[™^œÙ^N›_]˜\ˆY\İJÚ[™İË›ØØ][Û‹š\Ú
KZO[[ÚYŠÚ[™İË›ØØ][Û‹š\Úœİ\ÕÚ]
ˆİš\[š]OHŠJ^Û][™]ÈT“
Ú[™İË›ØØ][Û‹š™YŠNİš\ÚHˆ‹Ú[™İËš\İÜKœ™\XÙTİ]J[ˆ‹
_]˜\ˆYOXœŠ[‹\›[‹œX›\ÚX›RÙ^KØ]]Ü\œÚ\İÙ\ÜÚ[ÛˆL]]Ô™Yœ™\ÚÚÙ[ˆL›İÕ\NˆœØÙH‹]XİÙ\ÜÚ[Û’[•\›ˆLKİÜ˜YÙNJÚ[™İË›ØØ[İÜ˜YÙJKİÜ˜YÙRÙ^NˆZ[[™XÛİYX]]Ÿ_JK™ORZ
YJKÜÏ[JYJKÏ\JYJKİÏRØÊYJK]ÏQ˜ÊYJK™O[[L[[\ÏL™HLœÏHLKYOZÛJYK™]ÈT“
‹‹È‹Ú[™İË›ØØ][Û‹š™YŠKš™YŠKTJYJKO]O™Øİ[Y[œ]Y\TÙ[XİÜŠ
KO]O”İš[™ÊO[[İˆˆŠKœ™\XÙJÖÉˆ‰×KÙËOOŠÈ‰ˆˆ‰˜[\È‹ˆ‰›È‹ˆˆ‰™İÈ‹	È‰Îˆ‰œ][İÈ‹‰Èˆ‰ˆÌÎNÈŸJVÙWJKÜÏVÖÈ™\Ú›Ø\™‹µèuéõæuê5å—KÈ˜YÙ[‹µèuåuæõçË5ä5æuêuåuê5æuçH5åuäõåuí5åõåuêˆ—KÈ™^[œÙ\È‹µêµéõéµæuäH5åuå5åuéµä5åuêˆ—KÈ˜›ÛÚÚ[™È‹µå5åµçµè5åuêˆ—KÈœİÜ‹µçµèuç5åuç—KÈœXÙH‹µçµéõåuçµåuêˆ5åuêuæuê5åuêµæuçH—KÈ™ÙX\ˆ‹µéµæuåuäÈ5åuå5äõê5æõåuêˆ—KÈ\ÚÈ‹µçµêuæuçµåuêˆ—KÈ™Ü›İ\‹µå5éõäuåuéµå5êuç5æH—KÈ™Øİ[Y[È‹µä5æuêuåuê5æH5ç5æuè5å—KÈ™šY[‹µèµê5æõêˆ5êuæ5åÈ5åu¯‘Ô—KÈœÛİ\˜Ù\È‹µçµéõåuê5åuêˆ5åuäõæuåuåuåõæH5å5åµçµè5å—KÈœÙ][™ÜÈ‹µäµæuäuåuæH5åuè5êµåuè5æuçH—WK[OVÈœXÙRY‹‘ÛÛÙÛHXÙHQ8 %5çµêµéõäuç5çµäuåõæuê5êˆ5çµéõåuçH5äu¯‘ÛÛÙÛHX\È—KÙ^Ø›ÛÚÚ[™Î–ÖÈ›˜[YH‹µêµæuä5åuê5å5åµçµè5å—KÈ\H‹µèuåuäˆ—KÈœİ]\È‹µçµéµäH5å5åµçµè5åÈ5êµêuç5åuçH—KÈÛÜšÙ›İÔİ]\È‹µèuæ5æ5åuèH5æ5æué5åuç‹ÛÜšÙ›İÈ—KÈœİ\Y\ˆ‹µèué5éÈ—KÈ˜Xİ[Û‘YQ]H‹µçµåuèµäÈ5ä5åõê5åuçÈ5ç5æ5æué5åuç8 %5ä5åué5éµæuåuè5ç5æH‹™]H—KÈ˜ÚXÚÒ[‘]H‹µêµåõæuç5êˆ5ç5æuè5å8 %5ä5åué5éµæuåuè5ç5æH‹™]H—KÈ˜ÚXÚÓİ]]H‹µèuæuåuçH5ç5æuè5å8 %5ä5åué5éµæuåuè5ç5æH‹™]H—KÈ˜ÛÜİ‹µçµåõæuê5æõåuç5ç8 ªˆ‹›[X™\ˆ—KÈœZY‹µêuåuç5çH8 ªˆ‹›[X™\ˆ—KÈœ™Yˆ‹µçµèué5ê5ä5æuêuåuêÈ5å5åµçµè5å—KÈ\›‹µéõæuêuåuê5ç5å5åµçµè5å‹\›—KÈ››İ\È‹µå5èµê5åuêˆ‹^\™XH—WKİÜ–ÖÈ™^H‹µæuåuçH5äuæ5æuåuç‹›[X™\ˆ—KÈœXÙH‹µçµéõåuçHÈ5æuèµäÈ—KÈšÚ[™‹µèuåuäˆ5èµéµæuê5å—K[KÈ\›‹µéõæuêuåuê5ç5è5æuåuåuæ‹\›—KÈ››İ\È‹µêµæõè5åuçÈ5åuå5èµê5åuêˆ‹^\™XH—KÈ›]‹µéõåH5ê5åuåõäH
]]YJH8 $È5ä5åué5éµæuåuè5ç5æH—KÈ›™È‹µéõåH5ä5åuê5æˆ
Û™Ú]YJH8 $È5ä5åué5éµæuåuè5ç5æH—WKXÙN–ÖÈ›˜[YH‹µêuçH5å5çµéõåuçH—KÈ\H‹µèuåuäˆ—K[KÈ˜\™XH‹µä5åµåuê—KÈ\›‹µéõæuêuåuê5ç5çµé5åuêˆÈ5ä5êµê‹\›—KÈ››İ\È‹µå5èµê5åuêˆÈ5æ5ç5é5åuçÈÈ5êuèµåuêˆ‹^\™XH—WKÙX\–ÖÈ›˜[YH‹µé5ê5æuæ—KÈ˜Ø]YÛÜH‹µéõæ5äµåuê5æuå—KÈœİ]\È‹µèuæ5æ5åuèH—KÈ\›‹µéõæuêuåuê5ç5ê5æõæuêuå‹\›—KÈ™İZYH‹µéõæuêuåuê5ç5å5äõê5æõêˆ5êuæuçµåuêH‹\›—KÈ››İ\È‹µå5èµê5åuêˆ‹^\™XH—WK\ÚÎ–ÖÈ]H‹µçµêuæuçµå—KÈ˜Ø]YÛÜH‹µéõæ5äµåuê5æuå—KÈ™YQ]H‹µçµåuèµäÈ5ä5åõê5åuçÈ8 %5ä5åué5éµæuåuè5ç5æH‹™]H—KÈÛÜšÙ›İÔİ]\È‹µèuæ5æ5åuèH5æ5æué5åuç‹ÛÜšÙ›İÈ—W_KXO[[ÛO^Ü]Y\Nˆˆ‹İ]\ÎˆˆŸKÜÏHLKšO^ßKÛ]Oİ˜\ˆNÜ™]\›ˆšVÙOJ
O[[İ›ÚY’šY
_ˆŠJÈˆŠİ_
šVÙWO^ßJ_K	[[Ù[[YO[[[[OHœİÜ‹^ÜXÙN›[›ÛÚÚ[™Î›[\ÚÎ›[ÙX\›[KÛH›X\‹][[ÙO[[ØO[[ÙOHLKÛL™OLL›[[\HL[[[İV×KÜHLKHˆ‹[^Ø›ÛÚÚ[™Îˆœİ]È‹\ÚÎˆœİ]ÈŸK˜O^Ø›ÛÚÚ[™Îˆˆ‹\ÚÎˆˆŸK[OVÈ›[İ[Z[‹\›ØYœ™È‹šÜ˜XšKXÛØ\İœ™È‹›Z\İK\›ØYœ™È—KÏ]O›™]ÈT“
‹Ù\İØ˜XÚÙÜ›İ[™ËÉİXÚ[™İË›ØØ][Û‹š™YŠKš™YÙ[˜İ[ÛˆJ
^ÙØİ[Y[˜›ÙK˜Û\ÜÓ\İœ™[[İ™Jš\X˜XÚÙÜ›İ[™XXİ]™HŠKØİ[Y[™Øİ[Y[[[Y[œİ[Kœ™[[İ™T›Ü\J‹K]š\X˜XÚÙÜ›İ[™Z[XYÙHŠ_Y[˜İ[ÛˆÛJ
^İ˜\ˆNÚYŠJ
O[YOO[[İ›ÚY›YK\Ù\ŠHO[[	‰™KšY
_JO[[	‰’šY
J^ÒJ
NÜ™]\›Ÿ[]Z›Jİ\Ù\’Y›YK\Ù\‹šYš\Y’šYÛİ[•[K›[™İJNÙØİ[Y[™Øİ[Y[[[Y[œİ[KœÙ]›Ü\J‹K]š\X˜XÚÙÜ›İ[™Z[XYÙH‹\›
	ÜÊ[Vİš[™^J_JX
KØİ[Y[˜›ÙK˜Û\ÜÓ\İ˜Y
š\X˜XÚÙÜ›İ[™XXİ]™HŠ_]ÛJØİ[Y[Ú[™İÊNÙ[˜İ[ÛˆJ
^ÕJˆÛY\ÜØYÙHŠK^ÛÛ[]JˆÛY\ÜØYÙHŠK™]\Ù]œ\ÜÚ]™OTİš[™Ê×µè5æ5èµçÈ5çµå5èµè5çßµè5êuçµê5äuèµè5çËË\İ

JNÛ]OUJˆÙY]ÜˆŠKœ]Y\TÙ[XİÜŠ–Ù]KYX[ÙË\İ]\×HŠNÙI‰ŠK^ÛÛ[]
_]˜\ˆÏ]OŠO[[İ›ÚY™]\Ù]™\ØX›Y™X\ÛÛŠ_
O[[İ›ÚY]J_µå5é5èµåuç5å5ä5æuè5å5åµçµæuè5å5æõê5äµèˆ5ç5é5æH5çµéµäH5å5åõêuäuåuçÈ5ä5åH5å5è5êµåuè5æuçH5å5è5äõê5êuæuçKˆ‹›O[[Ù]Oİ˜\ˆ‹KÎÛ]OJOJ]\™Ù]
OO[[İ›ÚYœ‹˜ÛÜÙ\İ
OO[[İ›ÚYšK˜Ø[
‹	Ø]Û‹[œ]Ù[Xİ^\™XKÜ›ÛOH˜]Ûˆ—IÊNÚYŠY_JK™\ØX›YK™Ù]]šX]J˜\šXKY\ØX›YŠOOOHYHŠJ\™]\›Û]ZÊJNÙK]O[‹KœÙ]]šX]J˜\šXK[X™[‹
K™Ù]]šX]J˜\šXK[X™[Š_

ÏYK^ÛÛ[
OO[[İ›ÚYœËš[J
J_µé5éõäÈŠJÈˆ8 %ŠÛŠK
\OOOHœÚ[\™İÛˆŸ\OOOH˜ÛXÚÈŠI‰Šœ™]™[Y˜][

KœİÜ›ÜYØ][ÛŠ
JKÈœÚ[\›İ™\ˆ‹œÚ[\™İÛˆ‹˜ÛXÚÈ—Kš[˜ÛY\Ê\JI‰ŠJŠKÛX\•[Y[İ]
›JK›O\Ù][Y[İ]


OO™JˆŠKÍL
J_NÙØİ[Y[˜Y]™[\İ[™\ŠœÚ[\›İ™\ˆ‹ÙL
NÙØİ[Y[˜Y]™[\İ[™\ŠœÚ[\™İÛˆ‹ÙL
NÙØİ[Y[˜Y]™[\İ[™\Š˜ÛXÚÈ‹ÙL
NÙ[˜İ[Ûˆ	
KHˆ‹H^Š^Ü™]\›ˆOOHÛÜšÙ›İÈÈX™[ˆŠÒJJJÉÏÙ[Xİ˜[YOH‰Êİ
ÉÈ‰ÊÓ›X\

ÚK×JOO‰ÏÜ[Ûˆ˜[YOH‰ÊÚJÉÈˆ	ÊÊOOO[ÈœÙ[XİYˆˆŠJÈˆŠÜÊÈÛÜ[ÛˆŠKš›Ú[ŠˆŠJÈÜÙ[XİÛX™[ˆˆX™[ˆŠÒJJJÊOOH^\™XHÉÏ^\™XH˜[YOH‰Êİ
ÉÈ‰ÊÒJŠJÈİ^\™XOˆ‰Ï[œ]]]ØÛÛ\]OH›Ù™ˆˆ˜[YOH‰Êİ
ÉÈˆ\OH‰ÊÜŠÉÈˆ˜[YOH‰ÊÒJŠJÉÈˆ	ÊÊÈ›]‹›™È—Kš[˜ÛY\Ê
OÉÚ[œ][ÙOH™XÚ[X[ˆ	ÎˆˆŠJÊOOH›[X™\ˆÉÛZ[HŒˆİ\H˜[H‰ÎˆˆŠJÈˆŠJÈÛX™[ˆŸY[˜İ[Ûˆ

^ÒÙO]Øİ[Y[œ]Y\TÙ[XİÜ[
˜]ÛˆŠK™›Ü‘XXÚ
OO™K™\ØX›Y]K™Ù]]šX]J˜\šXKY\ØX›YŠOOOHYHŠ_Y[˜İ[Ûˆİ

^İ˜\ˆK‹ÒJ
KXOO[[XJ
KXO[[ÛO^Ü]Y\Nˆˆ‹İ]\ÎˆˆŸKÜÏHLK\ÊÊËO[[

K[[ZOO[[ZJ
KZO[[›[[	O[[	‹™\ÜÜÙJ
K	[[Ù[[
OYØİ[Y[œ]Y\TÙ[XİÜŠ–Ù]KYÛØ˜[Xš[[™Ë[[ÙWHŠJOO[[Kœ™[[İ™J
KÚJJˆÙY]ÜˆŠJKšO^ßKØOO[[ØJ
KØO[[
YØİ[Y[œ]Y\TÙ[XİÜŠ	ÖÙ]KXYZ[‹[˜]šYØ][Û‹[ØØ][ÛHœYÙH—IÊJOO[[‹œ™[[İ™J
KŠÊË™O[[Û]YØİ[Y[œ]Y\TÙ[XİÜŠ‹œÚ]KZXY\ˆ˜œ˜[™ŠNİ	‰Š^ÛÛ[Hˆ‹šY[HL
KØİ[Y[˜›ÙK™]\Ù]œØÜ™Y[H›ÙÚ[ˆ‹Hˆ‹ÙOO[[ÙJ
KÙO[[ÛH›X\‹][[ÛŠÊË™JÊËYO[[[[\HL[[[İV×K[^Ø›ÛÚÚ[™Îˆœİ]È‹\ÚÎˆœİ]ÈŸK˜O^Ø›ÛÚÚ[™Îˆˆ‹\ÚÎˆˆŸK^ÜXÙN›[›ÛÚÚ[™Î›[\ÚÎ›[ÙX\›[KÙOHLKJˆÙY]ÜˆŠK˜ÛÜÙJ
KJˆÙY]ÜˆŠKš[›™\’SHˆ‹JˆİXœÈŠKš[›™\’SHˆ‹JˆØXØÛİ[ŠKš[›™\’SHˆ‹
UJˆÙ\İ[˜][Û‹XÛÛ›ÛÈŠJOO[[‹œ™\XÙPÚ[™[Š
KJˆİšY]ÈŠKš[›™\’SHˆ‹JˆŠ_]˜\ˆÏJ
OO›™]ÈT“
Ú[™İË›ØØ][Û‹š™YŠKœÙX\˜Ú\˜[\Ë™Ù]
›[ÙHŠOOOH˜YZ[ˆÙ[˜İ[ÛˆÜÊ
^ÛYI‰Š™HO[[	‰˜™Kš\Ôİ\\\Ù\ŠI‰ŠHL
NÛ]O[™]ÈT“
Ú[™İË›ØØ][Û‹š™YŠNİÙKœÙX\˜Ú\˜[\ËœÙ]
›[ÙH‹˜YZ[ˆŠN™KœÙX\˜Ú\˜[\Ë™[]J›[ÙHŠKÚ[™İËš\İÜKœ™\XÙTİ]J[ˆ‹JNÛ][YNÓİ

KÑ›ŠŠK˜Ø]Ú
O™J‹›Y\ÜØYÙJJN

_Y[˜İ[Ûˆ

^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^Û]JÊŞ\ÎÚYŠO[[

K[[Ê
J^Û]Ê
NÜ™]\›ŸUJˆİšY]ÈŠK^ÛÛ[HµäuåuäõéõæuçH5ä5é5êuê5åuæuåuêˆ5æõè5æuèuå8 )ˆÛ]Nİ^ÙO^ZY[YK›ÙÚ[“Ü[ÛœÊ
_XØ]Ú
Š^İOO^\É‰™Jµç5ä5è5æuêµçÈ5ç5äuäõåuéÈ5ä5é5êuê5åuæuåuêˆ5æõè5æuèuåˆ5æuêH5ç5ê5èµè5çÈ5åuç5è5èuåuêˆ5êuåuäKˆŠNÜ™]\›ŸZYŠOO^\Ê^ÚYŠK›[ÙOOOHœÛØÚX[Š^ÔP[JÜ›Ûİ•JˆİšY]ÈŠK]]”YKÛYZ[Š
OOšÜÊL
KÛ“YØXŞSZYÜ˜][ÛŠ
OO˜Š[[[˜İ[ÛŠŠ
^Ü™]\›ˆ›ŠZY[YKœÙ\ÜÚ[ÛŠ
J_JKÛ”İ]\Î™_JNÜ™]\›ŸYØİ[Y[˜›ÙK™]\Ù]œØÜ™Y[H›ÙÚ[ˆ‹JˆİšY]ÈŠKš[›™\’SIÏÙXİ[ÛˆÛ\ÜÏH›ÙÚ[ˆ]ˆÛ\ÜÏH›ÙÚ[‹Z[›ÈÜ[ˆÛ\ÜÏH›ÙÚ[‹\Ş[X›Û‰ÊÚ™Jœ›İ]HŠJÉÏÜÜ[µæõè5æuèuå5ç5¯“[İÜˆš\İY[ÏÚµæõç5å5æuèµäõæuçH5åuå5æ5æuåuç5æuçH5êuç5æˆ5äuçµéõåuçH5ä5åõäË5çµèuåuè5æõê5è5æuçH5äuæuçÈ5å5ä5æuæué5åuçÈ5ç5çµåõêuäKÜÙ]›Ü›HYH›ÙÚ[ˆ‰ÊÉ
™[XZ[‹µæõêµåuäuêˆ5çµæuæuç‹ˆ‹™[XZ[ŠJÉ
œ\ÜİÛÜ™‹µèuæuèuçµå‹ˆ‹œ\ÜİÛÜ™ŠJÉÏ]Ûˆ\OHœİX›Z]µæõè5æuèuå5èµçH5èuæuèuçµåØ]Û]Ûˆ\OH˜]ÛˆˆYH›Ü[‹XYZ[‹[ÙÚ[ˆˆÛ\ÜÏHœÙXÛÛ™\Hµæõè5æuèuêˆ5çµè5å5çØ]Û]Ûˆ\OH˜]ÛˆˆYH›Ü[‹\™YÚ\İ˜][ÛˆˆÛ\ÜÏHœÙXÛÛ™\Hµæuéµæuê5êˆ5åõêuäuåuçÈ5åõäõêOØ]Û]Ûˆ\OH˜]ÛˆˆYHœ™\Ù]\ÜİÛÜ™µå5äµäõê5êˆ5èuæuèuçµå5ê5ä5êuåuè5åÈ5êuæõåõêµæH5èuæuèuçµåØ]ÛÙ›Ü›O]ˆÛ\ÜÏH›ÙÚ[‹\š]˜XŞH‰ÊÚ™JœÚY[ŠJÈÜ[µå5äµæuêuå5ç5æ5æuåuç5æuçH5åuç5èuåuæõçÈ5åµçµæuè5å5ç5åõêuäuåuè5åuêˆ5é5èµæuç5æuçH5äuç5äuäËˆ5åõêuäuåuçÈ5åõäõêH5çµåué5èµç5ä5åõê5æH5ä5æuçµåuêˆ5çµæuæuç5åuä5æuêuåuê5êµêuç5åuçKÜÜ[Ù]ÜÙXİ[Ûˆ‹JˆÛÙÚ[ˆ[œ]Û˜[YOY[XZ[HŠK˜]]ØÛÛ\]OH\Ù\›˜[YH‹JˆÛÙÚ[ˆ[œ]Û˜[YOY[XZ[HŠKœÜ[ÚXÚÏHLKJˆÛÙÚ[ˆ[œ]Û˜[YOY[XZ[HŠKœÙ]]šX]J˜]]ØØ\][^™H‹››Û™HŠKJˆÛÙÚ[ˆ[œ]Û˜[YO\\ÜİÛÜ™HŠK˜]]ØÛÛ\]OH˜İ\œ™[\\ÜİÛÜ™‹JˆÛÙÚ[ˆŠKœ]Y\TÙ[XİÜ[
š[œ]ŠK™›Ü‘XXÚ
O›‹œ™\]Z\™YHL
KJˆÛÙÚ[ˆŠK›ÛœİX›Z][O˜Š[[[˜İ[ÛŠŠ
^Û‹œ™]™[Y˜][

NÛ][‹\™Ù]O\‹™[[Y[Ë™[XZ[˜[YKÏ\‹™[[Y[Ëœ\ÜİÛÜ™˜[YNÜ‹™[[Y[Ëœ\ÜİÛÜ™˜[YOHˆ‹
L
KJµçµêµåõäuê8 )ˆŠNİ^ŞZY[YKœÚYÛ’[ŠKÊKJµå5æõè5æuèuå5å5éµç5æuåõåŠ_XØ]Ú

^ÙJµå5æõè5æuèuå5è5æõêuç5åˆŠÛ›Y\ÜØYÙJ_Yš[˜[^Ñ
LJ__JKJˆÛÜ[‹XYZ[‹[ÙÚ[ˆŠK›Û˜ÛXÚÏJ
OOšÜÊL
KJˆÛÜ[‹\™YÚ\İ˜][ÛˆŠK›Û˜ÛXÚÏYËJˆÜ™\Ù]\ÜİÛÜ™ŠK›Û˜ÛXÚÏJ
OO˜Š[[[˜İ[ÛŠŠ
^Û]UJˆÛÙÚ[ˆ[œ]Û˜[YOY[XZ[HŠNÚYŠ‹œ™\Ü˜[Y]J
J^Ñ
L
Nİ^ŞZY[YKœ™\]Y\İ™\Ù]
‹˜[YJKJµä5çH5å5åõêuäuåuçÈ5éõæuæuçH5åuçµåuêµê5ç5êuç5åuåÈ5ä5ç5æuåH5çµæuæuç5æuæuêuç5åÈ5éõæuêuåuê5ç5å5äµäõê5êˆ5èuæuèuçµåˆ5é5êµåÈ5ê5éÈ5ä5êˆ5å5å5åuäõèµå5å5åõäõêuå5äuæuåuêµêˆŠ_XØ]Ú
Š^ÙJµç5ä5è5æuêµçÈ5ç5êuç5åuåÈ5éõæuêuåuê5ç5å5äµäõê5êˆ5èuæuèuçµåˆŠÜ‹›Y\ÜØYÙJ_Yš[˜[^Ñ
LJ___J__J_Y[˜İ[Ûˆ]Ê
^ÙØİ[Y[˜›ÙK™]\Ù]œØÜ™Y[H›ÙÚ[ˆ‹JˆİšY]ÈŠKš[›™\’SIÏÙXİ[ÛˆÛ\ÜÏH›ÙÚ[ˆYZ[‹[ÙÚ[ˆÜ[ˆÛ\ÜÏH˜XØÛİ[Y^YXœ›İÈ“SÕÔˆ’TÕQSÈ0­ÈQRSÜÜ[µæõè5æuèuå5ç5è5æuå5åuç5å5çµèµê5æõêÚµæõè5æuèuå5äuêuçH5å5çµêuêµçµêHYZ[ˆ5åuäuèuæuèuçµêˆ5å5çµè5å5çˆ5åõêuäuåuçÈ5å5è5æuå5åuç5è5é5ê5äÈ5çµåõêuäuåuçÈ5å5ç5éõåuåÈ5åué5åuèµç5ç5ç5ä5æõêµåuäuêˆ5çµæuæuçˆ5ä5æuçÈ5êuåõåµåuê5èuæuèuçµå5äuçµæuæuçÜ›Ü›HYH˜YZ[‹[ÙÚ[ˆ‰ÊÉ
\Ù\›˜[YH‹µêuçH5çµêuêµçµêH‹˜YZ[ˆŠJÉ
œ\ÜİÛÜ™‹µèuæuèuçµêˆ5çµè5å5ç‹ˆ‹œ\ÜİÛÜ™ŠJÉÏ]Ûˆ\OHœİX›Z]µæõè5æuèuå5ç5çµçµêuéÈ5å5è5æuå5åuçØ]Û]Ûˆ\OH˜]ÛˆˆYH˜İ\İÛY\‹[ÙÚ[ˆˆÛ\ÜÏHœÙXÛÛ™\Hµæõè5æuèuêˆ5ç5éõåuåÏØ]ÛÙ›Ü›OÜÙXİ[Û‰ÎÛ]UJˆØYZ[‹[ÙÚ[ˆŠNİ™[[Y[Ë\Ù\›˜[YKœ™\]Z\™YHL™[[Y[Ë\Ù\›˜[YK˜]]ØÛÛ\]OH\Ù\›˜[YH‹™[[Y[Ëœ\ÜİÛÜ™œ™\]Z\™YHL™[[Y[Ëœ\ÜİÛÜ™˜]]ØÛÛ\]OH˜İ\œ™[\\ÜİÛÜ™‹JˆØİ\İÛY\‹[ÙÚ[ˆŠK›Û˜ÛXÚÏJ
OOšÜÊLJK›ÛœİX›Z]YOO˜Š[[[˜İ[ÛŠŠ
^ÙKœ™]™[Y˜][

NÛ]]™[[Y[Ë\Ù\›˜[YK˜[YK]™[[Y[Ëœ\ÜİÛÜ™˜[YNİ™[[Y[Ëœ\ÜİÛÜ™˜[YOHˆ‹
L
KJµäuåuäõéÈ5æõè5æuèuêˆ5çµè5å5ç8 )ˆŠNİ^ŞZY[YKœÚYÛ’[YZ[Š‹Š_XØ]Ú
J^ÙJK›Y\ÜØYÙJ_Yš[˜[^Ñ
LJ__J_Y[˜İ[ÛˆÜŠ
^İ˜\ˆKÎÚYŠJˆİšY]ÈÙ]KXYZ[‹]ÛÜšÜÜXÙWHŠJ\™]\›ÒJ
KÙOO[[ÙJ
KÙO[[ÛŠÊË™JÊË[[[[[İV×KJˆÙY]ÜˆŠK˜ÛÜÙJ
KJˆÙY]ÜˆŠKš[›™\’SHˆ‹JˆİXœÈŠKš[›™\’SHˆ‹Øİ[Y[˜›ÙK™]\Ù]œØÜ™Y[H˜YZ[ˆÛ]YØİ[Y[œ]Y\TÙ[XİÜŠ‹œÚ]KZXY\ˆ˜œ˜[™ŠNİ	‰Š^ÛÛ[Hµè5æuå5åuç5å5çµèµê5æõêˆ‹šY[HLJK
OUJˆÙ\İ[˜][Û‹XÛÛ›ÛÈŠJOO[[Kœ™\XÙPÚ[™[Š
KJˆØXØÛİ[ŠKš[›™\’SIÏ]Ûˆ\OH˜]ÛˆˆYH˜YZ[‹\\ÜİÛÜ™µêuæuè5åuæH5èuæuèuçµêˆ5çµè5å5çØ]Û]Ûˆ\OH˜]ÛˆˆYH˜YZ[‹\ÚYÛ›İ]µæuéµæuä5åØ]Û‰ÎÛ]OJ
OO˜Š[[[˜İ[ÛŠŠ
^İ^ŞZY[™KœÙ\ÜÚ[ÛXİ]š]JœÙ\ÜÚ[Û—Ù[™ŠK˜Ø]Ú


OOßJKZY[YKœÚYÛ“İ]

Kİ

K

_XØ]Ú
Ê^ÙJË›Y\ÜØYÙJ__JNÕJˆØYZ[‹\ÚYÛ›İ]ŠK›Û˜ÛXÚÏYKJˆØYZ[‹\\ÜİÛÜ™ŠK›Û˜ÛXÚÏINÛ]J
OOÛÙOO[[ÙJ
KÙO\
Ü›Ûİ•JˆİšY]ÈŠK\N”™KÙXİ[ÛˆœÛ\È‹˜XÚÎÜ‹Ù[™Û\ÎŠ
OOÛÙOO[[ÙJ
KÙOXÛ
Ü›Ûİ•JˆİšY]ÈŠK\N”™K˜XÚÎ›ŸJ__J_KJ
OOÔÚJJˆÙY]ÜˆŠJKJˆÙY]ÜˆŠKš[›™\’SHˆ‹	J
_KOYÏO˜Š[[[˜İ[ÛŠŠ
^ÚYŠØİ[Y[œ]Y\TÙ[XİÜ[
–Ù]KXYZ[‹Y\İ[˜][Û—HŠK™›Ü‘XXÚ
OOÛ]ÏYÏOOHœÙ[™Û\ÈŸÈœÛ\È‹›X\È‹˜š[[™È‹šİ[Y\™XİÜH‹™Y™™[—Kš[˜ÛY\ÊÊOÈœ›İšY\œÈ™ÎŞK™]\Ù]˜YZ[‘\İ[˜][ÛOOWÏŞKœÙ]]šX]J˜\šXKXİ\œ™[‹œYÙHŠNKœ™[[İ™P]šX]J˜\šXKXİ\œ™[Š_JK™K˜YZ[•šY]ÊÊK˜Ø]Ú


OOßJKÚJJˆÙY]ÜˆŠJKJˆÙY]ÜˆŠKš[›™\’SHˆ‹ÏOOHšÛYHŠ^ĞÜŠ
NÜ™]\›ŸZYŠÏOOHœ›İšY\œÈŠ^ÛÙOO[[ÙJ
KÙOYÚ
Ü›Ûİ•JˆİšY]ÈŠK˜]šYØ]NOOšJJ_JNÜ™]\›ŸZYŠÏOOHšİ[Y\™XİÜHŠ^ÛÙOO[[ÙJ
KÙOYš
Ü›Ûİ•JˆİšY]ÈŠ_JNÜ™]\›ŸZYŠÏOOH™Y™™[Š^ÛÙOO[[ÙJ
KÙOV
Ü›Ûİ•JˆİšY]ÈŠ_JNÜ™]\›ŸZYŠÈœXÙ\È‹˜Y™šXÈ—Kš[˜ÛY\ÊÊJ^ÛÙOO[[ÙJ
KÙOXš
Ü›Ûİ•JˆİšY]ÈŠK›İšY\’Y™ßJNÜ™]\›ŸZYŠÏOOH›X\ÈŠ^ÛÙOSJÜ›Ûİ•JˆİšY]ÈŠK\N”™_JNÜ™]\›ŸZYŠÏOOH˜]Y]ŸÏOOH\ØYÙHŠ^ÛÙOO[[ÙJ
KÙO^ÊÜ›Ûİ•JˆİšY]ÈŠK\N”™K[ÙN™ÏOOH\ØYÙHÈ\ØYÙHˆš›İ\›˜[ŸJNÜ™]\›ŸZYŠÏOOH˜š[[™ÈŠ^ÛÙOO[[ÙJ
KÙOTİJÜ›Ûİ•JˆİšY]ÈŠK˜XÚÎÜ‹İ]N˜™K\N”™_JNÜ™]\›ŸZYŠÏOOHœÙ[™Û\ÈŠ^ÛÙOO[[ÙJ
KÙOXÛ
Ü›Ûİ•JˆİšY]ÈŠK\N”™K˜XÚÎÜŸJNÜ™]\›ŸZYŠÏOOHœÛ\ÈŠ^ÛŠ
NÜ™]\›ŸZYŠÏOOH\›\ÈŠ^ÛÙOO[[ÙJ
KÙO\
Ü›Ûİ•JˆİšY]ÈŠK\N”™KÙXİ[Û™Ë˜XÚÎÜŸJNÜ™]\›Ÿ]^ŞZY[™
ÙX[ÙÎ•JˆÙY]ÜˆŠK\N”™Kİ]N˜™K[X™YYˆL[š]X[[™[™ËÚ[™ÙYŠ
OO˜Š[[[˜İ[ÛŠŠ
^Ø™O^ZY[™Kœİ]J
_J_J_XØ]Ú
J^ÙJK›Y\ÜØYÙJ__JNÛØOO[[ØJ
K
ÏYØİ[Y[œ]Y\TÙ[XİÜŠ	ÖÙ]KXYZ[‹[˜]šYØ][Û‹[ØØ][ÛHœYÙH—IÊJOO[[Ëœ™[[İ™J
NÛ]ÏYØİ[Y[˜Ü™X]Q[[Y[
™]ˆŠNÜË™]\Ù]˜YZ[“˜]šYØ][Û“ØØ][ÛHœYÙH‹JˆİšY]ÈŠK˜™Y›Ü™JÊKØOWİJÜ›ÛİœË˜]šYØ]NšKÙÛİ]™K\ÜİÛÜ™œŸJKÙOS]JÜ›Ûİ•JˆİšY]ÈŠK\N”™KÙÛİ]™KX[˜YÙNš_JKJˆŠNÛ][™]ÈT“
Ú[™İË›ØØ][Û‹š™YŠKÏ[œÙX\˜Ú\˜[\Ë™Ù]
˜YZ[—Øİ\İÛY\ˆŠK[œÙX\˜Ú\˜[\Ë™Ù]
˜YZ[—ØØ\™Ü™]\›ˆŠKR™K[YK\Ù\‹šYË×–ØKYŒNKW^ÌÍŸIÚK\İ
ßˆŠI‰‹×–ØKYŒNKW^ÌÍŸIÚK\İ
ˆŠI‰”™K˜İ\İÛY\Xİ[ÛŠØXİ[Ûˆœ™XÛÛ˜Ú[PØ\™‹İ\İÛY\’Y˜ËÙ]\Y™JK[Š

OO˜Š[[[˜İ[ÛŠŠ
^ÜOOR™_
YOO[[İ›ÚY›YK\Ù\‹šY
HOOZJ™HO[[	‰˜™Kš\Ôİ\\\Ù\Š_
œÙX\˜Ú\˜[\Ë™[]J˜YZ[—Øİ\İÛY\ˆŠKœÙX\˜Ú\˜[\Ë™[]J˜YZ[—ØØ\™Ü™]\›ˆŠKÚ[™İËš\İÜKœ™\XÙTİ]J[ˆ‹
KZY[™
ÙX[ÙÎ•JˆÙY]ÜˆŠK\N”™Kİ]N˜™K[X™YYˆLİ\İÛY\’Y˜ËÚ[™ÙYŠ
OO˜Š[[[˜İ[ÛŠŠ
^Ø™O^ZY[™Kœİ]J
_J_JJ_JJK˜Ø]Ú
ÏOÜOOR™I‰™JË›Y\ÜØYÙJ_J_Y[˜İ[ÛˆÊ
^ÕJˆİšY]ÈŠKš[›™\’SS

KJˆØ˜XÚË]Ë[ÙÚ[ˆŠK›Û˜ÛXÚÏPJˆÜ™YÚ\İ˜][ÛˆŠK›ÛœİX›Z]]O˜Š[[[˜İ[ÛŠŠ
^İœ™]™[Y˜][

NÛ]O]\™Ù]YKœ]Y\TÙ[XİÜŠ–Ù]KXXØÛİ[[Y\ÜØYÙWHŠNÚYŠK™[[Y[Ëœ\ÜİÛÜ™˜[YHOOYK™[[Y[Ë˜ÛÛ™š\›K˜[YJ^Û‹^ÛÛ[Hµå5èuæuèuçµä5åuêˆ5ä5æuè5çÈ5åµå5åuêˆÜ™]\›Ÿ[]SØš™Xİ™œ›ÛQ[šY\ÊÈ›˜[YH‹œÛ™H‹œİ™Y]‹˜Ú]H‹œÜİÛÙH‹˜Ûİ[H—K›X\
O–ÛK™[[Y[ÖÛK˜[YKš[J
WJJKOYK™[[Y[Ëœ\ÜİÛÜ™˜[YKÏYK™[[Y[Ë™[XZ[˜[YNÙK™[[Y[Ëœ\ÜİÛÜ™˜[YOHˆ‹K™[[Y[Ë˜ÛÛ™š\›K˜[YOHˆ‹
L
Nİ^ŞZY[YKœÚYÛ•\
ËKŠKKœ™\Ù]

K‹^ÛÛ[Hµä5çH5å5å5ê5êuçµå5åµçµæuè5å5è5êuç5åÈ5éõæuêuåuê5ä5æuçµåuêˆ5ç5çµæuæuçˆ5é5êµåÈ5ä5åuêµåH5åuåõåµåuê5ç5æõä5çÈ5ç5å5êuç5çµêˆ5å5åõäuæuç5åˆ5ç5ä5äuåuéµèˆ5åõæuåuäKˆŸXØ]Ú

^Û‹^ÛÛ[KÙ\ØX›Y›İ[İÙYÚK\İ
›Y\ÜØYÙJOÈµå5ê5êuçµå5åõäõêuå5èµäõæuæuçÈ5èuäµåuê5å5äuå5äµäõê5åuêˆ5å5çµèµê5æõê‹ˆ5ç5ä5è5åuéµê5åõæuåuäKˆ››Y\ÜØYÙ_Yš[˜[^Ñ
LJ__J_Y[˜İ[ÛˆY

^Û]UJˆÙY]ÜˆŠNİš[›™\’SIÏ]ˆ]KXXØÛİ[\YÙOÙ]]Ûˆ\OH˜]Ûˆˆ]KXÛÜÙKXXØÛİ[µèuäµæuê5åØ]Û‰ËY
Ü›Ûİœ]Y\TÙ[XİÜŠ–Ù]KXXØÛİ[\YÙWHŠKİ]N˜™K\N”™Kš\YŠO[[İ›ÚY’šY
_[\İ[˜][Û“˜[YNŠO[[İ›ÚY’™\İ[˜][Û—Û˜[YJ_ˆ‹™Yœ™\ÚŠ
OO˜Š[[[˜İ[ÛŠŠ
^ŞZY[\Ê
KYI‰Š™OO[[İ›ÚY˜™Kœİ]\ÊOOOH˜Xİ]™H‰‰‘Y

_JKÚYÛ“İ]Š
OO˜Š[[[˜İ[ÛŠŠ
^ŞZY[™KœÙ\ÜÚ[ÛXİ]š]JœÙ\ÜÚ[Û—Ù[™ŠK˜Ø]Ú


OOßJKZY[YKœÚYÛ“İ]

Kİ

K

_J_JNÛ]O]œ]Y\TÙ[XİÜŠ–Ù]KXÛÜÙKXXØÛİ[HŠK]œ]Y\TÙ[XİÜŠ–Ù]KXXØÛİ[XXİ[Ûœ×HŠNÛ‰‰™OÊK^ÛÛ[H°åÈ‹K˜Û\ÜÓ˜[YOH˜Xİ[Û‹XÛÜÙH‹Kœ™[[İ™P]šX]J™]KXÛÜÙKXXØÛİ[ŠKK™]\Ù]˜XØÛİ[ÛÜÙOHˆ‹K›Û˜ÛXÚÏJ
OO˜ÛÜÙJ
K‹˜\[™Ú[
JK˜\[™Ú[
JJN™K›Û˜ÛXÚÏJ
OO˜ÛÜÙJ
K›Ü[ŸœÚİÓ[Ù[

_Y[˜İ[Ûˆ	J
^Ò™JÊËJˆÙY]ÜˆŠKš[›™\’SIÏ›Ü›HYHœ\ÜİÛÜ™›Ü›Hµå5äµäõê5êˆ5èuæuèuçµå5åõäõêuåÚ‰ÊÉ
œ\ÜİÛÜ™‹µèuæuèuçµå5åõäõêuå‹ˆ‹œ\ÜİÛÜ™ŠJÉ
˜ÛÛ™š\›H‹µä5æuçµåuêˆ5èuæuèuçµå‹ˆ‹œ\ÜİÛÜ™ŠJÉÏ]Ûˆ\OHœİX›Z]µêuçµåuê5èuæuèuçµå5åõäõêuåØ]Û]Ûˆ\OH˜]ÛˆˆYH˜Ø[˜Ù[\ÜİÛÜ™µäuæuæ5åuçØ]ÛYHœ\ÜİÛÜ™\œ›Üˆˆ›ÛOHœİ]\ÈÜÙ›Ü›O‰ÎÛ]UJˆÜ\ÜİÛÜ™›Ü›HŠNÕJˆÙY]ÜˆŠK˜Y]™[\İ[™\Š˜ÛÜÙH‹

OOœ™\Ù]

KÛÛ˜ÙNˆLJKœ]Y\TÙ[XİÜ[
š[œ]ŠK™›Ü‘XXÚ
OOÙKœ™\]Z\™YHLK›Z[“[™İLL‹K˜]]ØÛÛ\]OH›™]Ë\\ÜİÛÜ™ŸJKJˆØØ[˜Ù[\ÜİÛÜ™ŠK›Û˜ÛXÚÏJ
OO•JˆÙY]ÜˆŠK˜ÛÜÙJ
K›ÛœİX›Z]YOO˜Š[[[˜İ[ÛŠŠ
^ÚYŠKœ™]™[Y˜][

K™[[Y[Ëœ\ÜİÛÜ™˜[YHOO]™[[Y[Ë˜ÛÛ™š\›K˜[YJ^ÕJˆÜ\ÜİÛÜ™\œ›ÜˆŠK^ÛÛ[Hµå5èuæuèuçµä5åuêˆ5ä5æuè5çÈ5åµå5åuêˆÜ™]\›Ÿ[]]™[[Y[Ëœ\ÜİÛÜ™˜[YNÑ
L
Nİ^ŞZY[YK˜Ú[™ÙT\ÜİÛÜ™
ŠKœ™\Ù]

KJˆÙY]ÜˆŠK˜ÛÜÙJ
KJµå5èuæuèuçµå5èµåuäõæõè5åŠ_XØ]Ú
Š^İœ™\Ù]

KJˆÜ\ÜİÛÜ™\œ›ÜˆŠK^ÛÛ[Hµå5èµäõæõåuçÈ5è5æõêuçˆŠÜ‹›Y\ÜØYÙ_Yš[˜[^Ñ
LJ__JKØİ[Y[˜›ÙK™]\Ù]œØÜ™Y[OOH˜YZ[ˆÕJˆÙY]ÜˆŠKœÚİÊ
N•JˆÙY]ÜˆŠKœÚİÓ[Ù[

_Y[˜İ[Ûˆ	JO[[
^İ˜\ˆKËËKËËËKKK‹‹ÎÛ]QZJ˜Jš][\ËœÙ][™ÜÊKœÙ][™ÜË˜YÙ]
KJOO[[İ›ÚY™KÛÛ
_

YOO[[İ›ÚY™KœÙ[Xİ[ÛŠOO[[İ›ÚYšÛÛ
_[ÚYŠOOH™Ù]ÛÙÚ[™×ØÚXÚÚ[ˆŠ^Û]OX›J
NÚYŠK›[ÙOOOHœ™\ÙX\˜ÚŠ\™]\›ŠOQYK™[˜İ[ÛœÊHO[[	‰›Kš[›ÚÙOÑYK™[˜İ[ÛœËš[›ÚÙJšİ[Z[™›Ü›X][Ûˆ‹Ø›ÙNİš\Y’šYš\™\œÚ[Û’™\œÚ[Û‹[]N“K˜\™İ[Y[Ë™[]K]Y\İ[Û“K˜\™İ[Y[Ëœ]Y\İ[Û‹Ûİ\˜ÙR[“K˜\™İ[Y[ËœÛİ\˜ÙR[XÙRY“K˜\™İ[Y[ËœXÙRYÚXÚÒ[‘]N“K˜\™İ[Y[Ë˜ÚXÚÒ[‘]KÚXÚÓİ]]N“K˜\™İ[Y[Ë˜ÚXÚÓİ]]__JK[Š
Ù]N‘\œ›Ü‘ŸJOO‘Ÿ
O[[İ›ÚY‘œİ]\ÊOOOH[œ™\ÛÛ™YŸO[[	‰‘™\œ›ÜŞİ^ŠO[[İ›ÚY‘˜[œİÙ\Š_µç5ä5è5æuêµçÈ5ç5ä5çµêˆ5æõê5äµèˆ5ä5êˆ5é5ê5æ5æH5å5çµç5åuçËˆ‹\œ›ÜÛÙNŠO[[İ›ÚY‘™\œ›ÜÛÙJ_’ÕSÔ‘TÑPTÒÕS”‘TÓÓ‘QŸNİ^ŠO[[İ›ÚY‘˜[œİÙ\Š_µç5ä5å5êµéõäuç5å5êµêuåuäuå5çµä5åuçµêµêˆ5çµçµéõåuê5å5çµç5åuçËˆ‹Ú[™ˆ™]H‹™\ÙX\˜Ú‘JK˜Ø]Ú


OOŠİ^ˆµç5ä5è5æuêµçÈ5ç5ä5çµêˆ5æõê5äµèˆ5ä5êˆ5é5ê5æ5æH5å5çµç5åuçËˆ‹\œ›ÜÛÙNˆ’ÕSÔ‘TÑPTÒÕSURSP“HŸJJN”›ÛZ\ÙKœ™\ÛÛ™Jİ^˜5ç5ä5è5êuçµê5åµçµçÈ5æõè5æuèuå5ç5çµç5åuçÈ	ÓKšİ[Kˆ5è5äõê5êH5çµåõéõê5åõæuéµåuè5æH5çµä5åuçµêÈ5ç5ä5å5åuéµäˆ5è5êµåuçÈ5çµêuåuèµê˜\œ›ÜÛÙNˆ’ÕSÔ‘TÑPTÒÔ‘TURT‘Q‹™\ÙX\˜ÚİÛÛ“KÛÛ\™İ[Y[Î“K˜\™İ[Y[ß_J_ZYŠÈ˜Ü™X]WÜİÜ‹\]Wİš\Ù]Z[È‹\]WÛÙÚ[™È‹\]WÜİÜ‹œ™[[İ™WÜİÜ‹˜Ü™X]Wİ\ÚÈ‹\]Wİ\ÚÈ‹\]WØ›ÛÚÚ[™×Üİ]\È‹œØ]™WÜXÙWÚY‹œ™Yœ™\Úİš\Ü™\ÙX\˜Ú—Kš[˜ÛY\ÊŠJ\™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™JÚÚ[™ˆ˜Xİ[Ûˆ‹^ˆµå5èuåuæõçÈ5åµæuå5å5é5èµåuç5å5êuçµêuè5å5ä5êˆ5å5æ5æuåuçˆ5å5åuä5æuæõæuçÈ5äuéõêuêˆ5ä5æuêuåuê5ä5æˆ5ç5ä5æuäuéµèˆ5êuæuè5åuæH5äuç5æH5ä5æuêuåuê5çµé5åuê5êKˆ‹Xİ[ÛÚYœ‹X™[œOOH˜Ü™X]Wİ\ÚÈÈµæuéµæuê5êˆ5çµêuæuçµåˆµä5æuêuåuêŠÜŸK\œ›ÜÛÙNˆ‘VPÒUĞT“ÕSÔ‘TURT‘QŸJNÚYŠÈ™Ù]Úİ[ÜšXÙ\È‹œÙX\˜ÚÚİ[ÜšXÙ\È‹œÙX\˜ÚÚİ[Ø]˜Z[Xš[]H‹˜ÛÛ\\™WÚİ[ÜšXÙ\È—Kš[˜ÛY\ÊŠJ\™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™Jİ^ˆµå5èuåuæõçÈ5åµæuå5å5ä5êˆ5äuéõêuêˆ5å5çµç5åuè5åuê‹5ä5æˆ5èué5éÈ5çµåõæuê5æH5çµç5åuè5åuêˆ5åuåµçµæuè5åuêˆ5èµäõæuæuçÈ5ç5ä5çµåõåuäuêˆ5ç5ä5å5åuéµäˆ5çµåõæuê5ä5åH5åµçµæuè5åuêˆ5çµåuçµéµä5æuçKˆ‹\œ›ÜÛÙNˆ’ÕSÔ“Õ’QT—ÕSURSP“HŸJNÚYŠÈœÙX\˜ÚÙ›YÚÛÜ[ÛœÈ—Kš[˜ÛY\ÊŠJ\™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™Jİ^ˆµå5èuåuæõçÈ5åµæuå5å5äuéõêuêˆ5åõæué5åuêH5æ5æuèuåuê‹ˆ5èué5éÈ5å5æ5æuèuåuêˆ5êuè5äuåõê5å5åuäY™™[5ä5æˆ5åõèuê5èµäõæuæuçÈ\İÚÙ[ˆ5çµä5åuçµêÈ5ç5ä5å5åuéµäµåH5çµåõæuê5æuçH5ä5åH5åµçµæuè5åuêˆ5çµåuçµéµä5æuçKˆ‹\œ›ÜÛÙNˆ‘“QÒÔ“Õ’QT—Ó“ÕĞÓÓ‘’QÕT‘QŸJNÚYŠÈœÙX\˜ÚØ]˜Xİ[ÛœÈ‹œÙX\˜ÚÜ™\İ]\˜[È—Kš[˜ÛY\ÊŠI‰Š
ÏQYK™[˜İ[ÛœÊHO[[	‰Ëš[›ÚÙJJ^Û]O\OOHœÙX\˜ÚÜ™\İ]\˜[ÈÈœ™\İ]\˜[ˆ˜]˜Xİ[Ûˆ‹Tİš[™ÊˆŠKœ™\XÙJ×Š5åõé5ê_5äuäõåuéß5å5çµç5é_5êµçÈ5ç5æ_5ä5æué5å5æuê_5ä5æué5å5ç5ä5æõåuç
WÊ‹ËˆŠKš[J
_
OOOHœ™\İ]\˜[Èµçµèuèµäõåuêˆ5çµåuçµç5éµåuêˆˆµä5æ5ê5éõéµæuåuêˆ5çµåuçµç5éµåuêˆŠNÜ™]\›ˆYK™[˜İ[ÛœËš[›ÚÙJœXÙ\Ë\ÙX\˜Ú‹Ø›ÙNİš\Y’šYš\™\œÚ[Û’™\œÚ[Û‹ÛXZ[“K]Y\N‘\İ[˜][Û’™\İ[˜][Û—Û˜[Y_™\İ[˜][ÛŸˆŸ_JK[Š
Ù]N‘‹\œ›Ü‰JOOÚYŠ	
O[[İ›ÚY‘‹œİ]\ÊOOOH[œ™\ÛÛ™YŸˆO[[	‰‘‹™\œ›ÜŠ\™]\›İ^ˆµç5ä5è5æuêµçÈ5ç5åõé5êH5æõê5äµèˆ5çµéõåuçµåuêˆ5çµä5åuçµêµæuçH5äu¯‘ÛÛÙÛHXÙ\Ëˆ‹\œ›ÜÛÙNŠO[[İ›ÚY‘‹™\œ›ÜÛÙJ_”PÑT×ÔÑPTÒÕSURSP“HŸNÛ]J‹œ™\İ[ß×JK›X\
OO–ÖKœXÙS˜[Y_µç5ä5æuäõåuèˆ‹K˜Y™\Üßµæõêµåuäuêˆ5ç5ä5è5çµèuê5å‹Kœ˜][™ÏÔİš[™ÊKœ˜][™ÊNˆ¸ %‹K›X\Õ\›Şİ^ˆµé5êµåÈ5çµé5å‹™Y–K›X\Õ\›Nˆ¸ %—JNÜ™]\›ÚÚ[™ˆX›H‹^˜5è5çµéµä5åH	Ğ‹›[™İH5êµåuéµä5åuêˆ5çµ¯‘ÛÛÙÛHXÙ\Ëˆ5ä5ç5åH5å5éµèµåuêˆ5çµåõéõê5äuç5äuäË5ç5ä5å5åµçµè5åuê‹˜X›NØØ\[Û“OOOHœ™\İ]\˜[Èµçµèuèµäõåuêˆ5êuè5çµéµä5åHˆµä5æ5ê5éõéµæuåuêˆ5êuè5çµéµä5åH‹ÛÛ[[œÎ–ÈµêuçH‹µæõêµåuäuêˆ‹µäõæuê5åuäˆ‹µçµé5å—K›İÜÎŸ__JK˜Ø]Ú


OOŠİ^ˆµç5ä5è5æuêµçÈ5ç5åõé5êH5æõê5äµèˆ5çµéõåuçµåuêˆ5çµä5åuçµêµæuçH5äu¯‘ÛÛÙÛHXÙ\Ëˆ‹\œ›ÜÛÙNˆ”PÑT×ÔÑPTÒÕSURSP“HŸJJ_ZYŠÈœ™\ÛÛ™WÜXÙWÚY‹™Ù]ÜXÙWÙ]Z[È‹œÙX\˜ÚØ]˜Xİ[ÛœÈ‹™Ù]Ø]˜Xİ[Û—Ù]Z[È‹™Ù]Ø]˜Xİ[Û—Úİ\œÈ‹™Ù]Ø]˜Xİ[Û—ÜšXÙ\È‹™Ù]Øİ\œ™[İÙX]\ˆ‹™Ù]Úİ\›WİÙX]\ˆ‹™Ù]İÙX]\—Ø[\È‹™Ù]Ù›YÚÙ\˜][Ûˆ‹™Ù]Ù›YÚÙ\İ[˜ÙH‹œÙX\˜ÚÙ›YÚÛÜ[ÛœÈ‹™Ù]ÙÜ›İ[™İ˜[œÙ™\ˆ‹œÙX\˜ÚÜ™\İ]\˜[È‹œÙX\˜ÚÛ[İÜ˜ŞXÛWÜ›İ]\È‹œİYÙÙ\İÛ™X\˜WÜİÜÈ‹œÙX\˜ÚİÙX—ÜÛİ\˜Ù\È‹œİ[[X\š^™WÜÛİ\˜Ù\È‹˜ÛÛ\\™WÛÜ[ÛœÈ‹œ™]Wİ[œ™\ÛÛ™YÜ™\ÙX\˜Ú—Kš[˜ÛY\ÊŠJ\™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™Jİ^ˆµå5èuåuæõçÈ5åµæuå5å5ä5êˆ5å5äuéõêuå5ä5æˆ5èué5éÈ5å5çµæuäõèˆ5å5çµêµä5æuçH5èµäõæuæuçÈ5ç5ä5å5åõåµæuê5êµåuéµä5å5çµä5åuçµêµê‹ˆ5ç5ä5å5åuéµäˆ5çµæuäõèˆ5çµåuçµéµäˆ‹\œ›ÜÛÙNˆ‘VT“SÔ“Õ’QT—ÕSURSP“HŸJNÛ]XÛJ‹İš\’İ[[X\N›‹]Y\NJNÚYŠ
\™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™J
NÚYŠ
OOH™Ù]İÙX]\ˆŸœÊßJJI‰Š
ÏQYK™[˜İ[ÛœÊHO[[	‰™Ëš[›ÚÙJJ^Û]OTİš[™ÊˆŠK›X]Ú
õæuåuçWÊŠ
ÊKÊKSOÓ[X™\ŠVÌWJN›ÚYJORO[[İ›ÚY’œÙ][™ÜÊOO[[İ›ÚYKœİ\ÚYŠŠ^Û]Q]Kœ\œÙJŠÈ•ŒŒˆŠKOQ]Kœ\œÙJ™]È]J
KÒTÓÔİš[™Ê
KœÛXÙJL
JÈ•ŒŒˆŠKÏJ‹VJKÎMJÊÑLNŒ
NÚYŠ[X™\‹š\Ñš[š]JÊI‰’ÏJ\™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™Jİ^ˆµä5æuçÈ5êµåõåµæuêˆ5ä5çµæuè5å5èµäõæuæuçÈ‹\œ›ÜÛÙNˆ•ÑPUT—Ñ“Ô‘PĞTÕÓÕUÓÑ—ÔS‘ÑHŸJ_[]	J‹JOO˜Š[[[˜İ[ÛŠŠ
^ÚYŠP‰‰ŠOO[[İ›ÚY–Kœİ]\ÊOOOH™\šYšYYŠ\™]\›ˆ[ÚYŠHO[[	‰–K™\œ›ÜŠ\™]\›ˆNÛ]ÏPO[[İ›ÚY‹˜ÛÛ^ÚYŠÈO[[	‰’Ë˜ÛÛ™J]^Ü™]\›ˆZY[Ë˜ÛÛ™J
KšœÛÛŠ
_XØ]Ú
Š^ßZYŠ\[ÙŠÏO[[İ›ÚY’ËšœÛÛŠOOH™[˜İ[ÛˆŠ]^Ü™]\›ˆZY[ËšœÛÛŠ
_XØ]Ú
Š^ß\™]\›Ù\œ›ÜŠO[[İ›ÚY‹›Y\ÜØYÙJ_µêuæuê5åuêˆ5çµåµäˆ5å5ä5åuåuæuê5ç5ä5å5åõåµæuê5êµêuåuäuåˆ‹\œ›ÜÛÙNŠO[[İ›ÚY‹›˜[YJ_•ÑPUT—Ô‘TUQTÕÑRSQŸ_JNÜ™]\›ˆYK™[˜İ[ÛœËš[›ÚÙJ™ÛÛÙÛK]ÙX]\ˆ‹Ø›ÙN’Šİš\Y’šYš\™\œÚ[Û’™\œÚ[ÛŸKŞÙ^N‘NßJ_JK[ŠÏO˜Š[Ò×K[˜İ[ÛŠŠÙ]N‹\œ›Ü–_J^Û]^ZY[	
KŠNÚYŠ_ˆO[[	‰“‹™\œ›ÜŠ\™]\›İ^ŠO[[İ›ÚY“‹™\œ›ÜŠ_µêuæuê5åuêˆ5çµåµäˆ5å5ä5åuåuæuê5ç5ä5å5åõåµæuê5êµêuåuäuåˆ‹\œ›ÜÛÙNŠO[[İ›ÚY“‹™\œ›ÜÛÙJ_•ÑPUT—Ô‘TUQTÕÑRSQŸNÛ]YœÊİÙX]\ŸJNÜ™]\›ˆˆO[[	‰š‹›[šÏÚİ^ŠO[[İ›ÚYš‹^
_µç5ä5è5çµéµä5å5êµåõåµæuêˆ5çµä5åuçµêµê‹ˆŸ_JJK˜Ø]Ú
OŠİ^ŠO[[İ›ÚY‹›Y\ÜØYÙJ_µêuæuê5åuêˆ5çµåµäˆ5å5ä5åuåuæuê5ç5ä5å5åõåµæuê5êµêuåuäuåˆ‹\œ›ÜÛÙNŠO[[İ›ÚY‹›˜[YJ_•ÑPUT—Ô‘TUQTÕÑRSQŸJJ_ZYŠOOH™Ù]ÛÜ[š[™×Úİ\œÈŸõêuèµåuê‹Šµé5êµæuåõå5é5êµåuåÈ5å5æuåuç_5çµêµæH5é5êµåuåß5ä5æuê5åuèµæuçKË\İ
İš[™ÊˆŠJJ^Û]OTİš[™ÊˆŠKÓØØ[SİÙ\Ø\ÙJ
KJš][\ß×JK™š[\ŠÏO–ÈœXÙH‹œİÜ‹˜›ÛÚÚ[™È—Kš[˜ÛY\ÊËšÚ[™
JK™š[\ŠÏOÛ]RËœ^[ØYßKTİš[™Ê‹›˜[Y_‹œXÙ_‹šİ[˜[Y_ˆŠKÓØØ[SİÙ\Ø\ÙJ
KYOZ‹œÜ]
×ÊËWÊßÊø $×ÊßÊø %ÊËÊVÌKš[J
NÜ™]\›ˆHJ‰‰ŠKš[˜ÛY\ÊŠ_YI‰“Kš[˜ÛY\ÊYJJJ_JKœÛÜ

ËŠOOŠÊ‹šÚ[™OOH˜›ÛÚÚ[™ÈŠKJÊËšÚ[™OOH˜›ÛÚÚ[™ÈŠJK	Q˜ÛÛ˜Ø]

š][\ß×JK™š[\ŠÏOÚYŠVÈœXÙH‹œİÜ‹˜›ÛÚÚ[™È—Kš[˜ÛY\ÊËšÚ[™
J\™]\›ˆLNÛ]RËœ^[ØYßNÜ™]\›ˆ\[ÙŠ‹œXÙRY‹œXÙWÚY
OOHœİš[™È‰‰ˆQš[˜ÛY\ÊÊ_JJVÌNÚYŠ›[™İ	‰ˆJ
ÏIO[[İ›ÚY‰œ^[ØY
HO[[	‰—ËœXÙRY
IO[[İ›ÚY‰œ^[ØY
HO[[	‰œXÙWÚY
J^Û]ÏJ
IO[[İ›ÚY‰œ^[ØY
OO[[İ›ÚY”›˜[YJ_

ÏIO[[İ›ÚY‰œ^[ØY
OO[[İ›ÚY”ËœXÙJ_

ÏIO[[İ›ÚY‰œ^[ØY
OO[[İ›ÚYšËšİ[˜[YJ_ˆÜ™]\›ŠOQYK™[˜İ[ÛœÊHO[[	‰’Kš[›ÚÙI‰Š	O[[İ›ÚY‰šÚ[™
OOOH˜›ÛÚÚ[™ÈÑYK™[˜İ[ÛœËš[›ÚÙJœXÙ\Ë\ÙX\˜Ú‹Ø›ÙNİš\Y’šYš\™\œÚ[Û’™\œÚ[Û‹][RY‰šYÛXZ[ˆšİ[‹]Y\N’Ë\İ[˜][Û’™\İ[˜][Û—Û˜[Y_ˆŸ_JK[Š
Ù]N“‹\œ›ÜšŸJOOÚYŠŸ
O[[İ›ÚY“‹œİ]\ÊOOOH[œ™\ÛÛ™YŸˆO[[	‰“‹™\œ›ÜŠ\™]\›İ^˜5ç5ä5è5æuêµçÈ5ç5åµå5åuêˆ5ä5êˆ5å5çµç5åuçÈ	ÒßH5äu¯‘ÛÛÙÛHXÙ\Ë˜\œ›ÜÛÙNŠO[[İ›ÚY“‹™\œ›ÜÛÙJ_”PÑT×ÒÕSÔÑPTÒÑRSQŸNÛ]YOP\œ˜^Kš\Ğ\œ˜^J‹œ™\İ[ÊOÓ‹œ™\İ[Ë™š[\ŠO–‹œXÙRY
N–×NÜ™]\›ˆYK›[™İOOLOŞİ^˜5è5çµéµä5åH	ÙYK›[™İµæõçµåŸH5å5êµä5çµåuêˆ5ç5¯‰ÒßKˆ5æuêH5ç5äuåõåuê5ä5êˆ5å5çµç5åuçÈ5å5çµêµä5æuçH5ç5é5è5æH5äuäõæuéõêˆ5êuèµåuêˆ5å5é5êµæuåõå˜\œ›ÜÛÙNˆ”PÑT×ÒÕSĞSP’QÕSÕTÈ‹Ø[™Y]\Î™Y_N‘YK™[˜İ[ÛœËš[›ÚÙJœXÙ\Ë[Ü[š[™ËZİ\œÈ‹Ø›ÙNİš\Y’šYš\™\œÚ[Û’™\œÚ[Û‹XÙRY™YVÌKœXÙRY^XİY˜[YN’ß_JK[Š
Ù]N–‹\œ›Ü›™_JOOÚYŠ™_ˆO[[	‰–‹™\œ›ÜŠ\™]\›İ^ŠO[[İ›ÚY–‹™\œ›ÜŠ_5ç5ä5è5æuêµçÈ5ç5ä5çµêˆ5ä5êˆ5êuèµåuêˆ5å5é5êµæuåõå5êuç	ÒßK˜\œ›ÜÛÙNŠO[[İ›ÚY–‹™\œ›ÜÛÙJ_”PÑT×ÓÔS’S‘×ÒÕT”×ÑRSQŸNÛ]QJÛÜ[š[™Òİ\œÎ–ŸJNÜ™]\›ˆˆO[[	‰•‹›[šÏÕİ^ŠO[[İ›ÚY•‹^
_µç5ä5è5çµéµä5å5êµêuåuäuêˆ5êuèµåuêˆ5é5êµæuåõå5çµä5åuçµêµê‹ˆŸ_JK˜Ø]Ú


OOŠİ^˜5ç5ä5è5æuêµçÈ5ç5ä5çµêˆ5ä5êˆ5êuèµåuêˆ5å5é5êµæuåõå5êuç	ÒßK˜\œ›ÜÛÙNˆ”PÑT×ÓÔS’S‘×ÒÕT”×ÑRSQŸJJ_JK˜Ø]Ú


OOŠİ^˜5ç5ä5è5æuêµçÈ5ç5åµå5åuêˆ5ä5êˆ5å5çµç5åuçÈ	ÒßH5äu¯‘ÛÛÙÛHXÙ\Ë˜\œ›ÜÛÙNˆ”PÑT×ÒÕSÔÑPTÒÑRSQŸJJN”›ÛZ\ÙKœ™\ÛÛ™Jİ^˜5ç5¯‰Òßµå5çµéõåuçH5êuäuæuéõêuêˆŸH5èµäõæuæuçÈ5ç5ä5è5êuçµêÛÛÙÛHXÙHQˆ5æuêH5ç5åµå5åuêˆ5ä5êˆ5å5çµç5åuçÈ5ç5é5è5æH5äuäõæuéõêˆ5êuèµåuêˆ5å5é5êµæuåõå˜\œ›ÜÛÙNˆ”PÑT×ÔPÑWÒQÔ‘TURT‘QŸJ_[]J
OIO[[İ›ÚY‰œ^[ØY
OO[[İ›ÚYKœXÙRY
_

OIO[[İ›ÚY‰œ^[ØY
OO[[İ›ÚY‘KœXÙWÚY
NÚYŠPŸJ
QYK™[˜İ[ÛœÊHO[[	‰”‹š[›ÚÙJJ\™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™JJßJJNÛ]OJ
IO[[İ›ÚY‰œ^[ØY
OO[[İ›ÚY‹›˜[YJ_

IO[[İ›ÚY‰œ^[ØY
OO[[İ›ÚY•œXÙJ_

ÏIO[[İ›ÚY‰œ^[ØY
OO[[İ›ÚY“Ëšİ[˜[YJ_ˆÜ™]\›ˆYK™[˜İ[ÛœËš[›ÚÙJœXÙ\Ë[Ü[š[™ËZİ\œÈ‹Ø›ÙNİš\Y’šYš\™\œÚ[Û’™\œÚ[Û‹XÙRY‹^XİY˜[YN–__JK[Š
Ù]N’Ë\œ›Ü“ŸJOOÚYŠŸÈO[[	‰’Ë™\œ›ÜŠ\™]\›İ^ŠÏO[[İ›ÚY’Ë™\œ›ÜŠ_µç5ä5è5æuêµçÈ5ç5ä5çµêˆ5æõê5äµèˆ5ä5êˆ5êuèµåuêˆ5å5é5êµæuåõåˆ‹\œ›ÜÛÙNŠÏO[[İ›ÚY’Ë™\œ›ÜÛÙJ_”PÑT×ÓÔS’S‘×ÒÕT”×ÑRSQŸNÛ]QJÛÜ[š[™Òİ\œÎ’ßJNÜ™]\›ˆˆO[[	‰š‹›[šÏÚİ^ŠO[[İ›ÚYš‹^
_µç5ä5è5çµéµä5å5êµêuåuäuêˆ5êuèµåuêˆ5é5êµæuåõå5çµä5åuçµêµê‹ˆŸ_JK˜Ø]Ú


OOŠİ^ˆµç5ä5è5æuêµçÈ5ç5ä5çµêˆ5æõê5äµèˆ5ä5êˆ5êuèµåuêˆ5å5é5êµæuåõåˆ‹\œ›ÜÛÙNˆ”PÑT×ÓÔS’S‘×ÒÕT”×ÑRSQŸJJ_ZYŠJÈ™Ù]Ü›İ]WÙ\İ[˜ÙH‹™Ù]Ü›İ]WÛX]š^‹˜[Y]WÜ›İ]H—Kš[˜ÛY\ÊŠ_ÊÎµä5åuê5æŸ5çµê5åõéß5éÖõí‰×OõçŸ5éõæuç5åuçµæ5ê5åµçµçÈ5è5èuæuèµå5æõçµåŠŠÎµè5åuèuèŸ5çµê5åõéß5éÖõí‰×OõçŠJKÚK\İ
İš[™ÊˆŠJJJ^Û]O^İš\’YÙ]’œÙ][™ÜË˜YÙ]Ü[›‹œZYÙX]\’œÙ][™ÜËÙX]\‹Ü[š[™Òİ\œÎ’œÙ][™ÜË›Ü[š[™Òİ\œßKYœÊJ_JJ_JJNÜ™]\›ˆ›[šÏÑİ^‘^_\™]\›ˆZJYJKœ›İ]Q\İ[˜ÙJšY™\œÚ[Û‹‘’U‘HŠK[ŠOOİ˜\ˆYK‹™K‹YNÚYŠ
OO[[İ›ÚY“Kœİ]\ÊHOOHœİXØÙ\ÜÈŠ\™]\›İ^ˆµç5ä5è5æuêµçÈ5ç5ä5çµêˆ5æõê5äµèˆ5ä5êˆ5çµê5åõéõæH5å5çµèuç5åuçˆ5èuæuäuêˆ5å5èué5éÎˆŠÊ

JYOSOO[[İ›ÚY“K[œ™\ÛÛ™Y
OO[[İ›ÚY™YVÌJOO[[İ›ÚY–‹œ™X\ÛÛŠ_µêuæuê5åuêˆ5å5çµèuç5åuç5ç5ä5å5åõåµæuê5êµåuéµä5êˆ5ä5æuçµåuê‹ˆŠ_NÛ]J™OTİš[™ÊˆŠK›X]Ú
õæuåuçWÊŠ
ÊKÚJJOO[[İ›ÚY›™VÌWKQÊK™^\ß×JK™š[\ŠÙOO”İš[™ÊÙK™^JOOOQ
N“K™^\ß×K	J‹œ™YXÙJ
ÙKJOO˜ÙJÓ[X™\ŠK™\İ[˜ÙSY]\œß
K
KÌYLÊKÑš^Y
JKHQ	‰Š
YOJSKİ[
OO[[İ›ÚY•‹˜Y™šXÊOO[[İ›ÚY˜YKœİ]\ÊOOOH™\šYšYYØ5åµçµçÈ5êµè5åuèµå5çµä5åuçµêˆ	ÓX]œ›İ[™
[X™\ŠKİ[˜Y™šXË™\˜][Û”ÙXÛÛ™ß
KÍŒ
_H5äõéõåuê‹˜ˆˆ‹OQ‹›X\
ÙOOİ˜\ˆÛ]OS[X™\ŠÙK™\İ[˜ÙSY]\œß
KOS[X™\ŠÙK™\˜][Û”ÙXÛÛ™ß
KOH]I‰ˆ[KXÙK›[ÙOOOH˜Z\ˆÈµæ5æuèuåÈ5çµèµäuê5ä5åuåuæuê5æH‘OÈµæuåuçH5çµéõåuçµæHÈ5çµè5åuåõå˜ÙK˜ÛÛ™šY[˜ÙOOOH™\İ[X]YÈµå5èµê5æõå5äuç5äuäÈŠ
XÙK˜Y™šXÊOO[[İ›ÚY‘œİ]\ÊOOOH™\šYšYYÈµçµä5åuçµêˆˆµäõåuê5êH5äuäõæuéõå‹YOXÙK›[ÙOOOH˜Z\ˆØÙK™\˜][Û”ÙXÛÛ™ÏOO[[ÙK™\˜][Û”ÙXÛÛ™ÏOO]›ÚYÈµåµçµçÈ5æ5æuèuå5ç5ä5å5åuåµçÈ˜	ÓX]œ›İ[™
KÍŒ
_H5äõéõåuêˆ5æ5æuèuå˜	ÓX]œ›İ[™
KÍŒ
_H5äõéõåuê˜Ü™]\›Ù^N˜5æuåuçH	ØÙK™^_X\İ[˜ÙN˜	ÊKÌYLÊKÑš^Y
J_H5éõí5ç˜\˜][Û•YK˜Y™šXÎ™_JNÚYŠ	‰ˆVK›[™İ
\™]\›İ^˜5ç5ä5è5çµéµä5åH5è5êµåuè5æH›İ]\È5ç5æuåuçH	ÑK˜NÛ]ÏQ	‰–K›[™İŒ	‰–K™]™\JÙOO˜ÙK˜Y™šXÏOOHµæ5æuèuåÈ5çµèµäuê5ä5åuåuæuê5æHŠKVKœÛÛYJÙOO˜ÙK˜Y™šXÏOOHµå5èµê5æõå5äuç5äuäÈŠKRÏÈµåµå5åH5çµèµäuê5ä5åuåuæuê5æNÈ5ç5ä5åõåuêuäH5åµçµçÈ5ê5æõæuäuåˆ“Èµå5æuåuçH5æõåuç5ç5å5èµê5æõå5äuç5äuäÈ8 %5è5äõê5êH5ä5æuçµåuêˆ5çµèuç5åuç5æõäuæuêKˆ“KœÛİ\˜ÙOOOH›Z^YÜ›İ]\×Ù\İ[X]HÈµå5çµèuç5åuç5æõåuç5ç5äµçH5å5èµê5æõåuêˆ5äuç5äuäËˆˆµå5çµê5åõéõæuçH5å5åµçµæuè5æuçH5ä5åuçµêµåH5çµåuçÛÛÙÛH›İ]\ËˆÜ™]\›ÚÚ[™ˆX›H‹^‘Ø5æuåuçH	ÑNˆ	ÉH5éõí5ç‹ˆ	ÚŸX˜5ä5åuê5æˆ5éõæ5èµæH5å5ê5æõæuäuå5åuå5è5èuæuèµåˆ	ÉH5éõí5ç‹ˆ	ÚŸX
Ğ‹X›NØØ\[Û‘Ø5é5æuê5åuæ›İ]\È8 %5æuåuçH	ÑXˆµé5æuê5åuæ5å5çµèuç5åuç5ç5é5æH5æuåuçH‹ÛÛ[[œÎ–ÈµæuåuçH‹µçµê5åõéÈ‹µåµçµçÈ5è5èuæuèµå‹µèuæ5æ5åuèH—K›İÜÎ–K›X\
ÙOO–ØÙK™^KÙK™\İ[˜ÙKÙK™\˜][Û‹ÙK˜Y™šX×J___JK˜Ø]Ú
OOŠİ^ŠOO[[İ›ÚY“K›Y\ÜØYÙJ_µåõæuêuåuäH5å5çµèuç5åuç5åõèuåuçH5èµäÈ5ç5åõæuäuåuê5èué5éÈ5çµé5åuêˆ5çµä5åuçµê‹ˆŸJJ_Y[˜İ[Ûˆ›J
^Û]OJ
OOÛ]^[J
NÜ™]\›ˆ‹ÛÛÉJŠNİ^ˆµç5ä5è5æuêµçÈ5ç5äuåõåuê5æuæõåuç5êˆ5èuåuæõçÈ5æõê5äµè‹ˆ5è5èuå5ç5è5èuåÈ5ä5êˆ5å5êuä5ç5å5çµåõäõêKˆ‹\œ›ÜÛÙNˆQÑS•ÕÓÓÕSURSP“HŸ_NÜ™]\›ˆÛJYKİš\Y’O[[İ›ÚY’šYš\™\œÚ[Û’O[[İ›ÚY’™\œÚ[Û‹]Y\NJK[ŠOİ˜\ˆNÜ™]\›ˆ]›JŠKJ
O[[İ›ÚY›‹ÛÛ
_

O[O[[İ›ÚY›‹œÙ[Xİ[ÛŠOO[[İ›ÚYšKÛÛ
J_
O[[İ›ÚY›‹œİ]\ÊOOOH˜›ØÚÙYŸˆO[[	‰›‹™\œ›ÜŸˆO[[	‰›‹™\œ›ÜÛÙOÙJ
N‰JŠ_JK˜Ø]Ú


OO™J
J_Y[˜İ[ÛˆJJ^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^ÚYŠ]Y_R
\™]\›ˆJµåõèuê5å5éõêuê5ç5ä5æuêuåuê5å5é5èµåuç5åˆ5ç5ä5äuåuéµèˆ5êuæuè5åuæKˆŠNİ^Û]^ZY[Z
ÙØ]]Ø^N“XJYJKXİ[Ûš\’ÛÛ™\œØ][Û’Y™_JNÜ™]\›ˆJšYOOH˜Ü™X]Wİ\ÚÈÈµäuéõêuêˆ5å5çµêuæuçµå5è5åuéµê5åˆ5å5çµêuæuçµå5êµæuåuåuéµê5ê5éÈ5ç5ä5åõê5ä5æuêuåuê5å5æõåuêµê5ê‹ˆˆµäuéõêuêˆ5å5ä5æuêuåuê5è5åuéµê5åˆ5ä5æuêuåuê5å5äuéõêuå5èµäõæuæuçÈ5ä5æuè5åH5çµäuéµèˆ5êuæuè5åuæH5äuæ5æuåuçˆŠKŸXØ]Ú
Š^Ü™]\›ˆJµç5ä5è5æuêµçÈ5ç5æuéµåuê5äuéõêuêˆ5ä5æuêuåuê5æõê5äµè‹ˆ5ç5ä5äuåuéµèˆ5êuæuè5åuæKˆŠK[_J_Y[˜İ[Ûˆ[JJ^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^ÚYŠJO[[	‰šY
_R
\™]\›ˆJµåõèuê5çµåµå5å5ä5æuêuåuê5ä5åH5æ5æuåuçˆ5ç5ä5äuåuéµèˆ5êuæuè5åuæKˆŠNÚYŠ˜Xİ[Û’YOOH˜Ü™X]Wİ\ÚÈŠ^Û]İ^Û^ZY[XJYJK™^Xİ]U\ÚÊØ\›İ˜[YšYš\™\œÚ[Ûš\™\œÚ[Û‹^[ØY^œ^[ØY^J_XØ]Ú
Š^Ü™]\›ˆJµç5ä5è5æuêµçÈ5ç5ä5çµêˆ5ä5êˆ5æuéµæuê5êˆ5å5çµêuæuçµåˆ5ê5èµè5çÈ5ä5êˆ5ê5êuæuçµêˆ5å5çµêuæuçµåuêˆ5ç5é5è5æH5è5æuèuæuåuçÈ5è5åuèuèËˆŠK[ZYŠ
O[[İ›ÚY›‹œİ]JHOOHœİXØÙYYYŠ\™]\›ˆJµæuéµæuê5êˆ5å5çµêuæuçµå5ç5ä5ä5åuêuê5åˆ5ê5èµè5çÈ5ä5êˆ5å5æ5æuåuç5ç5é5è5æH5è5æuèuæuåuçÈ5è5åuèuèËˆŠKÙJµå5çµêuæuçµå5è5åuéµê5å5äuæ5æuåuçˆŠNİ^ŞZY[]

_XØ]Ú
Š^ÙJµå5çµêuæuçµå5è5åuéµê5å5ä5æˆ5ê5èµè5åuçÈ5å5æ5æuåuç5è5æõêuçˆ5ê5èµè5çÈ5æuäõè5æuê‹ˆŠ_\™]\›ˆŸ]^Û]^ZY[[JÙØ]]Ø^N“XJYJK™XÛÜ™š\’ÛÛ™\œØ][Û’Y™_JNÜ™]\›ˆJ
O[[İ›ÚY›‹œİ]JOOOH˜\›İ™YÈµå5äuéõêuå5ä5åuêuê5å5ä5æˆ5êuèµê5å5äuæuéµåuèˆ5èµäõæuæuçÈ5ç5ä5çµåõåuäuêˆ5ç5ä5äuåuéµèˆ5êuæuè5åuæH5äuæ5æuåuçˆˆµå5ä5æuêuåuê5ç5ä5å5åuêuç5çKˆ5ç5ä5äuåuéµèˆ5êuæuè5åuæKˆŠKŸXØ]Ú
Š^Ü™]\›ˆJµç5ä5è5æuêµçÈ5ç5ä5êuê5ä5êˆ5å5é5èµåuç5åˆ5æuæuêµæõçÈ5êuå5æ5æuåuç5å5êuêµè5åˆ5ç5ä5äuåuéµèˆ5êuæuè5åuæKˆŠK[_J_Y[˜İ[Ûˆ[J
^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^ÚYŠJO[[	‰šY
J\™]\›ˆ[İ^Ü™]\›ˆZY[XJYJK˜Ø[˜Ù[
šY
_XØ]Ú
J^Ü™]\›ˆJµç5ä5è5æuêµçÈ5ç5äuæ5ç5ä5êˆ5äuéõêuêˆ5å5ä5æuêuåuê5æõê5äµè‹ˆŠK[_J_Y[˜İ[ÛˆYŠ
^ÚYŠR[YJ\™]\›ÙØİ[Y[œ]Y\TÙ[XİÜ[
ˆØXØÛİ[]Z[ËÙ\İ[˜][Û‹XÛÛ›ÛÈ]Z[ËİXœÈ]Z[ÈŠK™›Ü‘XXÚ
ÏOœË›Ü[HLJNÛ]VZ
ÙØİ[Y[ÛÛ[ˆ]ˆ]KXYÙ[[İ™\›^K\[™[Ù]ˆŸJKO]œ›Ûİœ]Y\TÙ[XİÜŠ–Ù]KXYÙ[[İ™\›^K\[™[HŠKHLKQJÜ›Ûİ™K›ØÚÙY™X\ÛÛˆµçµä5çµêˆ5å5ê5êuä5êˆ5èuåuæõçø )ˆŸJKOJ
OOÛŸ
HLO[[Š
K˜ÛÜÙJ
J_Nİœ›Ûİœ]Y\TÙ[XİÜŠ–Ù]KXYÙ[[İ™\›^KXÛÜÙWHŠK›Û˜ÛXÚÏZK
ÙØ]]Ø^N“XJYJK›Ûİ]Û[ÙNˆ›Ûˆ‹İÛ™\’Y›YK\Ù\‹šYXİ]™NŠ™OO[[İ›ÚY˜™Kœİ]\ÊOOOH˜Xİ]™H‹\ÓX[˜YÙ[Y[Š™OO[[İ›ÚY˜™Kš\Ôİ\\\Ù\ŠOOOHLKš\Y’šYJK[ŠÏOİ˜\ˆÛŸ
O[[Š
KQJÜ›Ûİ™KÛÛ^œË›ÚÏŞÙ\İ[˜][Û“˜[YNŠ
\Ë˜ÛÛ™\œØ][ÛŠOO[[İ›ÚY›™\İ[˜][Û“˜[YJ_™\İ[˜][Û—Û˜[Y_N›[Ü[œË›ÚË›ØÚÙY™X\ÛÛœË›ÚÏÈˆœËœ™X\ÛÛ‹Û”İ\˜ÏOİ˜\ˆÜ™]\›ˆÈO[[	‰˜Ë˜Xİ[ÛÖJË˜Xİ[Û‹

\Ë˜ÛÛ™\œØ][ÛŠOO[[İ›ÚY™˜ÛÛ™\œØ][Û’Y
_

\Ë˜ÛÛ™\œØ][ÛŠOO[[İ›ÚYœšY
JN™Jµå5é5èµåuç5å5êµåué5èµç5ç5ä5åõê5äuåõæuê5êˆ5é5éõåuäõå5åuä5æuêuåuê5çµé5åuê5êKˆŠ_KÛ\›İ™N˜ÏOİ˜\ˆÜ™]\›ˆ[JË

\Ë˜ÛÛ™\œØ][ÛŠOO[[İ›ÚY™˜ÛÛ™\œØ][Û’Y
_

\Ë˜ÛÛ™\œØ][ÛŠOO[[İ›ÚYœšY
J_KÛØ[˜Ù[”[KÛ“˜]šYØ]N˜ÏOÚJ
KJ
I‰ŠOXÏOOH™Z[HÈœİÜ˜Ë
ÏOOH™Z[HŸÏOOHœİÜŠI‰ŠÛXÏOOH™Z[HÈ›\İˆ›X\‹][[
K

K›Š
J_KÛ”™\]Y\İ’›_JJ_JK˜Ø]Ú


OOÛŸ
O[[Š
KQJÜ›Ûİ™K›ØÚÙY™X\ÛÛˆµå5èuåuæõçÈ5ä5æuè5åH5åµçµæuçÈ5æõê5äµè‹ˆ5è5èuå5ç5ê5èµè5çÈ5ä5åH5ç5é5è5åuêˆ5ç5êµçµæuæõåˆŸJJ_J_Y[˜İ[ÛˆØJ
^ÙØİ[Y[˜›ÙK™]\Ù]œØÜ™Y[RÈš\ˆ™\İ[˜][ÛœÈ‹ÛJ
NÛ]YØİ[Y[œ]Y\TÙ[XİÜŠ‹œÚ]KZXY\ˆ˜œ˜[™ŠNİ	‰Š^ÛÛ[R	‰šHOOH™\Ú›Ø\™Èµèuæ5æ5åuèNˆŠÒÛŠœÙ][™ÜÊNˆˆ‹šY[HROOOH™\Ú›Ø\™ŠKXOO[[XJ
KXOP˜ÊØXØÛİ[›Ûİ•JˆØXØÛİ[ŠK\İ[˜][Û”›Ûİ•JˆÙ\İ[˜][Û‹XÛÛ›ÛÈŠKš\’\İ[˜][ÛœÎ›İÛYPXİ]™NˆR	‰ˆU›‰‰ˆQ[‹[XZ[›YK\Ù\‹™[XZ[\ĞYZ[Š™OO[[İ›ÚY˜™Kš\Ôİ\\\Ù\ŠOOOHLJKÙ
LJNÛ]OJ
OO™Øİ[Y[œ]Y\TÙ[XİÜ[
ˆØXØÛİ[]Z[ËÙ\İ[˜][Û‹XÛÛ›ÛÈ]Z[ËİXœÈ]Z[ÈŠK™›Ü‘XXÚ
Oš›Ü[HLJKUJˆØÛY[Y\İ[˜][Û‹\XÚÙ\ˆŠNÛ‰‰Š‹™\ØX›YRÙK‹›Û˜Ú[™ÙOJ
OOİŠ‹˜[YJ_
‹˜[YOJO[[İ›ÚY’šY
_ˆŠ_JNÛ]JHLJOOÒÙ_[J
_
ÜÏZOOHLJˆÙY]ÜˆŠK˜ÛÜÙJ
KÙOO[[ÙJ
KÙO[[\HLK[[[›[[[[ÛŠÊË™JÊË]

K˜Ø]Ú

J_KOUJˆÙ\İ[˜][ÛœËZÛYHŠNÚI‰ŠK›Û˜ÛXÚÏJ
OOœŠ
JNÛ]ÏUJˆÜÙX\˜ÚY\İ[˜][ÛœÈŠNÜÉ‰ŠË›Û˜ÛXÚÏJ
OOÒÙ_JˆÙY]ÜˆŠK›Ü[ŸŠL
_JKJˆØYY\İ[˜][ÛˆŠK›Û˜ÛXÚÏJ
OOÒÙ_
J
K˜J
J_NÛ]UJˆØYÙ[[][˜Ú\ˆŠNÛ	‰Š›Û˜ÛXÚÏJ
OOÚYŠR
^ÙJµæuêH5ç5äuåõåuê5æ5æuåuç5ç5é5è5æH5é5êµæuåõêˆ5å5èuåuæõçËˆŠNÜ™]\›ŸYYŠ
_JKJˆÜ™Yœ™\ÚŠK›Û˜ÛXÚÏJ
OOÚYŠJˆİšY]ÈÙ]K]š\YY]Y›Ü›WHŠJ^ÙJµæuêH5ç5êuçµåuê5ä5åH5ç5äuæ5ç5ä5êˆ5èµê5æuæõêˆ5é5ê5æ5æH5å5æ5æuåuç5ç5é5è5æH5ê5èµè5åuçËˆŠNÜ™]\›ŸSÜ‰‰ˆXÛÛ™š\›Jµê5èµè5åuçÈ5æuåõç5æuèÈ5äuåõæuê5åuêˆ5êuæ5ê5çH5ä5åuêuê5åKˆ5ç5å5çµêuæuæÈŠ_
ÜHLK]

K˜Ø]Ú

J_KØİ[Y[œ]Y\TÙ[XİÜ[
ˆØXØÛİ[Ù]KY\İ[˜][Û‹YY]KÙ\İ[˜][Û‹XÛÛ›ÛÈÙ]KY\İ[˜][Û‹YY]HŠK™›Ü‘XXÚ
Oš›Û˜ÛXÚÏJ
OOÙJ
K˜Jİ™š[™
OO›KšYOOZ™]\Ù]™\İ[˜][Û‘Y]
J_JNÛ]ÏUJˆÙY]Xİ\œ™[Y\İ[˜][ÛˆŠNØÉ‰ŠË›Û˜ÛXÚÏJ
OOÙJ
K˜J
_JKJˆØš[[™ËXXØÛİ[ŠK›Û˜ÛXÚÏJ
OOÙJ
KY

_NÛ]UJˆØXØÛİ[Y]HŠNÙ	‰Š›Û˜ÛXÚÏJ
OOÒÙ_R[J
_
J
KOHœÙ][™ÜÈ‹

K›Š
J_JNÛ]UJˆØYZ[‹XXØÛİ[ÈŠNÜ	‰Š›Û˜ÛXÚÏJ
OOÙJ
KÜÊL
_JKJˆØÚ[™Ù\\ÜİÛÜ™ŠK›Û˜ÛXÚÏJ
OOÙJ
K	J
_KJˆÜÚYÛ›İ]ŠK›Û˜ÛXÚÏJ
OO˜Š[[[˜İ[ÛŠŠ
^Ñ
L
Nİ^ŞZY[™KœÙ\ÜÚ[ÛXİ]š]JœÙ\ÜÚ[Û—Ù[™ŠK˜Ø]Ú


OOßJKZY[YKœÚYÛ“İ]

Kİ

K

KJµæuéµä5êˆ5çµå5åõêuäuåuçÈŠ_XØ]Ú

^ÙJµå5æuéµæuä5å5ç5ä5å5åuêuç5çµåˆŠÚ›Y\ÜØYÙJ_Yš[˜[^Ñ
LJ__JKJˆØXØÛİ[ŠKœ]Y\TÙ[XİÜ[
œİ[[X\HŠK™›Ü‘XXÚ
Oš›Û˜ÛXÚÏJ
OO•JˆØXØÛİ[ŠKœ]Y\TÙ[XİÜ[
™]Z[ÈŠK™›Ü‘XXÚ
OOÛHOOZœ\™[[[Y[	‰ŠK›Ü[HLJ_JJKØİ[Y[œ]Y\TÙ[XİÜ[
ˆÙ\İ[˜][Û‹XÛÛ›ÛÈ]Û‹ØXØÛİ[]ÛˆŠK™›Ü‘XXÚ
Oš™\ØX›YRÙ_™Ù]]šX]J˜\šXKY\ØX›YŠOOOHYHŠK	‰šÙ

_Y[˜İ[Ûˆ

^Ò[[YI‰Š™OO[[İ›ÚY˜™Kœİ]\ÊOOOH˜Xİ]™H‰‰ˆJ™HO[[	‰˜™Kš\Ôİ\\\Ù\ŠOÜØJ
N•JˆİXœÈŠKš[›™\’SHˆ‹JˆİšY]ÈŠKš[›™\’SHÙXİ[Ûµç5ä5è5æuêµçÈ5ç5æ5èµåuçÈ5ä5êˆ5å5æ5æuåuçÚˆŠÒJ›Y\ÜØYÙJJÉÏÜ]ÛˆYHœ™]Hµè5èuå5êuåuäOØ]ÛÜÙXİ[Û‰ËJˆÜ™]HŠK›Û˜ÛXÚÏJ
OO]

K˜Ø]Ú

KJµå5çµæuäõèˆ5çµå5èµè5çÈ5ç5ä5è5æ5èµçËˆŠ_Y[˜İ[Ûˆ]

^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^ÚYŠÊ
_™HO[[	‰˜™Kš\Ôİ\\\Ù\Ÿ[Y_
™OO[[İ›ÚY˜™Kœİ]\ÊHOOH˜Xİ]™HŸÙ_JˆÙY]ÜˆŠK›Ü[ŸJˆİšY]ÈÙ]K]š\YY]Y›Ü›WHŠJ\™]\›Û]JÊÔÛ‹OR™K[YK\Ù\‹šYJ
OOOOTÛ‰‰™OOOR™I‰ŠYOO[[İ›ÚY›YK\Ù\‹šY
OOO[‰‰ˆRÙI‰ˆUJˆİšY]ÈÙ]K]š\YY]Y›Ü›WHŠNÙJµæ5åuèµçÈ5çµå5èµè5çø )ˆŠNİ^ÚYŠ›ŠPY
›ŠNÙ[ÙHYŠ[Š^Û]O^ZY[›\İ\İ[˜][ÛœÊ
NÚYŠ\Š
J\™]\›Û]Ï^ZY[™Ù]š\
[ŠNÚYŠ\Š
J\™]\›ÛİZK\Ë

KØJ
_Y[Ù^Û]O^ZY[›\İ\İ[˜][ÛœÊ
NÚYŠ\Š
J\™]\›ÛİZNÛ]ÏR\ÜXÊJN›[ÚYŠÊ^Û]^ZY[™Ù]š\
ËšY
NÚYŠ\Š
J\™]\›Ò\HLK[\ËšY[OH™\Ú›Ø\™‹

KØJ
_Y[ÙH\HLK[[İÊ
KØJ
_YJµè5æ5èµçÈ5çµå5èµè5çÈ8 (ˆŠÛ™]È]J
KÓØØ[U[YTİš[™ÊšKRSŠJ_XØ]Ú
J^ÚYŠŠ
J]›İÈ__J_Y[˜İ[ÛˆŠ
^Ü™]\›ˆÙ_JˆÙY]ÜˆŠK›Ü[Ÿ[İœÛÛYJOO™KšYOO]
_[J
OÈLNŠÙOO[[ÙJ
KÙO[[›[[[]\HLK[[J
KHˆ‹OH™\Ú›Ø\™‹šO^ßK^ÜXÙN›[›ÛÚÚ[™Î›[\ÚÎ›[ÙX\›[K[^Ø›ÛÚÚ[™Îˆœİ]È‹\ÚÎˆœİ]ÈŸK˜O^Ø›ÛÚÚ[™Îˆˆ‹\ÚÎˆˆŸKÛH›X\‹][[ÛŠÊË™JÊËJˆİšY]ÈŠK^ÛÛ[Hµæ5åuèµçÈ5ä5êˆ5å5æuèµäÈ5êuè5äuåõê8 )ˆ‹ØJ
K]

K˜Ø]Ú

KL
_Y[˜İ[ÛˆÛŠ
^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^ÚYŠÙJ\™]\›ˆLNÛ]OTÛÑ
L
KJµêuåuçµê5äuèµè5çø )ˆŠNİ^Ü™]\›ˆZY[

KHOOTÛŸ[YOÈLNŠJµè5êuçµê5äuèµè5çÈŠKL
_XØ]Ú
Š^Ü™]\›ˆOOOTÛ‰‰ŠJµç5ä5è5êuçµêˆŠÛ‹›Y\ÜØYÙJK™KœÙ\ÜÚ[ÛXİ]š]J˜Xİ[Û—Ù˜Z[YŠK˜Ø]Ú


OOßJJKL_Yš[˜[^Ñ
LJ__J_Y[˜İ[ÛˆJ
^Ü™]\›ˆŠ\Ë\™İ[Y[Ë[˜İ[ÛŠŠV×J^İ˜\ˆ‹KËÚYŠRJ
QYK™[˜İ[ÛœÊHO[[	‰œ‹š[›ÚÙJJ\™]\›Û]O[™]ÈÙ]
›X\
[X™\ŠK™š[\Š[X™\‹š\Ò[YÙ\ŠJKRš][\Ë™š[\ŠÏOİ˜\ˆKËÎÜ™]\›ˆËšÚ[™OOHœİÜ‰‰ŠYKœÚ^™_Kš\Ê[X™\Š
XËœ^[ØY
OO[[İ›ÚY™™^JJJI‰ˆJ
XËœ^[ØY
HO[[	‰œœXÙRY
I‰ˆJ
XËœ^[ØY
HO[[	‰šœXÙWÚY
I‰ˆJ[X™\‹š\Ñš[š]J[X™\Š
OXËœ^[ØY
OO[[İ›ÚY›K›]
JI‰“[X™\‹š\Ñš[š]J[X™\Š
ÏXËœ^[ØY
OO[[İ›ÚYË›™ÊJJI‰ˆKÊÎ¸¡¤ŸOŸ5è5èuæuèµå5äuäõê5æŸ5ä5åµåuê5ä5æuåµåuê5è5åué5æuêŸØÙ[šXß›İ]JKÚK\İ
İš[™Ê

ÏXËœ^[ØY
OO[[İ›ÚY™ËœXÙJ_ˆŠJ_JNÙ›ÜŠ]ÈÙˆŠ^Û]ZšJš][\Ë
OXËœ^[ØY
OO[[İ›ÚYšK™^JNİ^ÙJµçµèµäõæõçÈ5ä5åuæ5åuçµæ5æuêˆ5çµéõåuçH5åu¯”XÙHQ5ç5æuåuçHŠÊ
ÏXËœ^[ØY
OO[[İ›ÚYœË™^JJÈ¸ )ˆŠKZY[YK™[˜İ[ÛœËš[›ÚÙJœXÙ\Ë\›İ]K\™\ÛÛ™\ˆ‹Ø›ÙNİš\Y’šYš\™\œÚ[Û’™\œÚ[Û‹][RY˜ËšYXÙNŠ
XËœ^[ØY
OO[[İ›ÚY›œXÙJ_ˆ‹\İ[˜][Û’™\İ[˜][Û—Û˜[YKÙÚ[™ÎŠO[[İ›ÚY™›˜[YJ_ˆŸ_J_XØ]Ú

^ß__J_Y[˜İ[Ûˆ]

^Ü™]\›ˆŠ\Ë\™İ[Y[Ë[˜İ[ÛŠŠ^ßJ^İ˜\ˆNİ^İ˜]]Ô™\ÛÛ™P[ŞZY[J
NŠO]˜]]Ô™\ÛÛ™Q^\ÊHO[[	‰™K›[™İ	‰ŠZY[J˜]]Ô™\ÛÛ™Q^\ÊJKZY[]

KJµè5êuçµê5äuèµè5çÈŠ_XØ]Ú
Š^Ò
ŠKJµå5êuæuè5åuæH5è5êuçµê5äuèµè5çË5ä5æˆ5å5ê5èµè5åuçÈ5è5æõêuçˆ5è5èuå5ç5ê5èµè5çÈ5êuåuäKˆŠ__J_Y[˜İ[ÛˆY

^ÛÙOO[[ÙJ
K[[[[[›]™JÊËJˆİXœÈŠKš[›™\’SHˆ‹ÙO\JÜ›Ûİ•JˆİšY]ÈŠKX[ÙÎ•JˆÙY]ÜˆŠK\N”ÜËš\Yİ]NšÛŠœÚ\™YˆŠİ
KÛ˜XÚÎŠ
OOÕ›[[]

K˜Ø]Ú

__JKØJ
_Y[˜İ[ÛˆİÊ
^İ˜\ˆÕ›[[J
KÙOO[[ÙJ
KÙO[[Ú[™İË™\Ü]Ú]™[
™]È]™[
œØÜ›ÛŠJKJˆİXœÈŠKš[›™\’SHˆ‹Øİ[Y[™Øİ[Y[[[Y[œİ[KœÙ]›Ü\J‹K[˜]šYØ][Û‹\ÜXÙH‹ŒŠKJˆİšY]ÈŠKš[›™\’SIÏÙXİ[ÛˆÛ\ÜÏH™\İ[˜][Û‹ZÛYHˆ\šXK[X™[YOH™\İ[˜][Û‹ZÛYK]]H]ˆÛ\ÜÏH™\İ[˜][Û‹ZÛYKZXY[™ÈˆYH™\İ[˜][Û‹ZÛYK]]Hµäuåõæuê5êˆ5æuèµäÏÚ]ˆÛ\ÜÏH™\İ[˜][Û‹\İ\XØ\™ˆ]K[™]ËY\İ[˜][Û]İ›Û™Ïµçµêµåõæuç5æuçH5æõä5çÎˆ5æuèµäÈ5åõäõêOÜİ›Û™Ïµéµê5åH5æuèµäÈ5åõäõêH5æõäõæH5ç5å5êµåõæuç5ç5êµæõè5çÈ5ä5êˆ5å5æ5æuåuç5êuç5æõçKÜÙ]]Ûˆ\OH˜]ÛˆˆÛ\ÜÏHœš[X\Hˆ]K[™]ËY\İ[˜][Û‹XXİ[Ûµæuéµæuê5êˆ5æuèµäÈ5åõäõêOØ]ÛÙ]Ù]]ˆ]KY\İ[˜][Û‹\ÙX\˜ÚÙ]‰ÊÊ[İœÛÛYJOOšKš\×ØXİ]™OOOHL
I‰›İ›[™İÉÏÛ\ÜÏH›]]Yµä5æuçÈ5æõê5äµèˆ5æ5æuåuç5é5èµæuçˆ5ä5é5êuê5ç5äuåõåuê5æuèµäÈ5çµå5ê5êuæuçµå5ä5åH5ç5å5åuèuæuèÈ5æuèµäÈ5äõê5æˆ5è5æuå5åuç5æuèµäõæuçKÜ‰ÎˆˆŠJÉÏ]ˆÛ\ÜÏH™\İ[˜][Û‹YÜšY‰ÊÛİ›X\
OO‰Ï\XÛHÛ\ÜÏH™\İ[˜][Û‹XØ\™	ÊÊKš\×ØXİ]™OOOHLOÈ™\İ[˜][Û‹Z[˜Xİ]™HˆˆŠJÉÈ]Ûˆ\OH˜]Ûˆˆ]KY\İ[˜][Û‹[Ü[H‰ÊÒJKšY
JÉÈˆÛ\ÜÏH™\İ[˜][Û‹XÚÚXÙHˆ\šXK[X™[Hµé5êµåÈ5êµæõè5åuçÎˆ	ÊÒJK™\İ[˜][Û—Û˜[Y_K]JJÉÈÜ[ˆÛ\ÜÏH™\İ[˜][Û‹XÚÚXÙKZXÛÛˆ‰ÊÚ™Jœ›İ]HŠJÉÏÜÜ[Ü[ˆÛ\ÜÏH™\İ[˜][Û‹XÚÚXÙKXÛÛ[İ›Û™Ï‰ÊÒJK™\İ[˜][Û—Û˜[Y_K]JJÉÏÜİ›Û™ÏÜ[ˆÛ\ÜÏH™\İ[˜][Û‹[Y]H‰ÊÒJKœÙ][™ÜË™^\ÊJÈˆ5æuçµæuçHŠÊKœÙ][™ÜËœİ\Èˆ0­ÈŠÒJKœÙ][™ÜËœİ\
Nˆˆ0­È5êµä5ê5æuæˆ5æ5ê5çH5è5éõäuèˆŠJÉÏÜÜ[Ü[ˆÛ\ÜÏH™\İ[˜][Û‹]š\\İ]\È‰ÊÒJÛŠKœÙ][™ÜÊJJÈÜÜ[ˆŠÊKš\×ØXİ]™OOOHLOÉÏÜ[ˆÛ\ÜÏH™\İ[˜][Û‹\İ]Hµç5ä5é5èµæuçÜÜ[‰ÎˆˆŠJÉÏÜÜ[Ü[ˆÛ\ÜÏH™\İ[˜][Û‹XÚÚXÙKX\œ›İÈ‰ÊÚ™J˜Ú]œ›ÛˆŠJÈÜÜ[Ø]ÛØ\XÛOˆŠKš›Ú[ŠˆŠJÈÙ]ˆŠÊİ›[™İÈˆ‰ÏÛ\ÜÏH™\İ[˜][Û‹Y[\Hµä5æuçÈ5èµäõæuæuçÈ5æuèµäõæuçH5êuçµåuê5æuçKˆ5å5êµåõæuç5åH5æõä5çÈ5èµçH5æuéµæuê5êˆ5æuèµäÈ5åõäõêKÜ‰ÊJÈÜÙXİ[Ûˆ‹JˆİšY]ÈÙ]K[™]ËY\İ[˜][Û‹XXİ[Û—HŠK›Û˜ÛXÚÏJ
OOÒÙ_
Øİ[Y[œ]Y\TÙ[XİÜ[
ˆØXØÛİ[]Z[ËÙ\İ[˜][Û‹XÛÛ›ÛÈ]Z[ËİXœÈ]Z[ÈŠK™›Ü‘XXÚ
OOšK›Ü[HLJK˜J
J_NÛ]T˜ÊÜ›Ûİ•JˆİšY]ÈÙ]KY\İ[˜][Û‹\ÙX\˜ÚHŠK\İ[˜][ÛœÎ›İİ]N‘ÛKÛ‘š[\šOOÛ]Ï[™]ÈÙ]
K›X\
O›šY
JNÕJˆİšY]ÈŠKœ]Y\TÙ[XİÜ[
–Ù]KY\İ[˜][Û‹[Ü[—HŠK™›Ü‘XXÚ
O›˜ÛÜÙ\İ
‹™\İ[˜][Û‹XØ\™ŠKšY[H\Ëš\Ê™]\Ù]™\İ[˜][Û“Ü[ŠJ__JN×ÜÉ‰ŠÜÏHLK
UJˆİšY]ÈÙ]KY\İ[˜][Û‹[˜[YK\ÙX\˜ÚHŠJOO[[‹™›Øİ\Ê
JKJˆİšY]ÈŠKœ]Y\TÙ[XİÜ[
–Ù]KY\İ[˜][Û‹[Ü[—HŠK™›Ü‘XXÚ
OOšK›Û˜ÛXÚÏJ
OOŠK™]\Ù]™\İ[˜][Û“Ü[ŠJNÛ]OYØİ[Y[˜Ü™X]Q[[Y[
œÙXİ[ÛˆŠNÙK™]\Ù]œÚ\™Yš\ÛYOHˆ‹JˆİšY]ÈŠK˜\[™
JNÛ]XİJÜ›Ûİ™K\N”ÜËÛ“Ü[YJNÛÙOJ
OOİ

KO[[Š
__Y[˜İ[Ûˆ˜J
^ÚYŠJˆİšY]ÈÙ]K]š\YY]Y›Ü›WHŠJ^ÙJµæuêH5ç5êuçµåuê5ä5åH5ç5äuæ5ç5ä5êˆ5èµê5æuæõêˆ5é5ê5æ5æH5å5æ5æuåuç5ç5é5è5æH5é5êµæuåõêˆ5èµåuê5æˆ5å5æuèµäõæuçKˆŠNÜ™]\›ŸR™JÊÎÛ]O[YOO[[İ›ÚY›YK\Ù\‹šYÖš
ÙX[ÙÎ•JˆÙY]ÜˆŠK\İ[˜][Û\N“ZJYJKÛ”Ø]™N›O˜Š[ÛK[˜İ[ÛŠŠÛ˜[YN›‹Xİ]™Nœ‹Ù][™ÜÎšK^\İ[™ÎœßJ^Û]ÏJÊÒ™KÚYŠÉ‰›OO\Ë™\İ[˜][Û—Û˜[YI‰œOO\Ëš\×ØXİ]™I‰’”ÓÓ‹œİš[™ÚYJJOOOR”ÓÓ‹œİš[™ÚYJËœÙ][™ÜÊJ\™]\›ˆÎÚYŠJZY[ÛŠ

OO˜Š[[[˜İ[ÛŠŠ
^Ù^ZY[ÏÛ\]Q\İ[˜][ÛŠËšYË™\œÚ[Û‹‹‹JN›˜Ü™X]Q\İ[˜][ÛŠK‹‹J_JJJJ]›İÈ\œ›ÜŠJˆÛY\ÜØYÙHŠK^ÛÛ[µå5êuçµæuê5å5è5æõêuç5åŠNÚYŠ
YOO[[İ›ÚY›YK\Ù\‹šY
HOOY_ÈOOR™J]›İÈ\œ›ÜŠµå5åõêuäuåuçÈ5ä5åH5å5æuèµäÈ5å5êuêµè5åKˆ5æuêH5ç5é5êµåuåÈ5ä5êˆ5å5èµê5æuæõå5çµåõäõêKˆŠNÜ™]\›ŠO[[İ›ÚY’šY
OOOYšY	‰ŠRŠŠßK
K
JKİ[İœÛÛYJOššYOOYšY
OÛİ›X\
OššYOOYšYÙš
N–Ë‹‹›İKJKÛ”[›O˜Š[[[˜İ[ÛŠŠ
^Û]R™KO^ZY[™Ù]š\
‹šY
NÚYŠ
YOO[[İ›ÚY›YK\Ù\‹šY
HOOY_ˆOOR™J]›İÈ\œ›ÜŠµå5åõêuäuåuçÈ5ä5åH5å5æuèµäÈ5å5êuêµè5åHŠNÙ›JÙX[ÙÎ•JˆÙY]ÜˆŠK\İ[˜][ÛšK\N“ZJYJK™]šY]ÓÛ›NˆLÛ‘Y]Š
OO“˜JJKÛ˜XÚÎŠ
OO“˜JJKÛ”X›\ÚYŠ
OO•]
Ø]]Ô™\ÛÛ™P[ˆLJ_J_JKÛ”XÚØYÙNŠ
OOÊYOO[[İ›ÚY›YK\Ù\‹šY
OOOYI‰ŠJˆÙY]ÜˆŠK˜ÛÜÙJ
KY

J_KÛÛÜÙNŠ
OO˜Š[[[˜İ[ÛŠŠ
^ÚYŠ
YOO[[İ›ÚY›YK\Ù\‹šY
OOOYJ]^ŞZY[]

_XØ]Ú
Š^Ò
Š__J_J_Y[˜İ[Ûˆ›J
^İ˜\ˆÎÒ™JÊÎÛ]ORšYR™\œÚ[Û‹\İXİ\™YÛÛ™JœÙ][™ÜÊKO]ÚY˜Ü\Ëœ˜[™ÛUURQ

K˜[YNˆˆ‹Ø]YÛÜNˆˆ‹ÛÜİ›[ZYŒ›İ\ÎˆˆŸKÏVË‹‹›™]ÈÙ]
Èµçµç5åuçÈ‹µæ5æuèuåuêˆ‹µä5åué5è5åuèˆ‹µä5åuæõç‹µäõç5éÈ‹µé5èµæuç5åuæuåuêˆ‹µäuæuæ5åuåÈ‹µéµæuåuäÈ‹‹‹”˜Jš][\ËŠK›X\
O™˜Ø]YÛÜJWJWNÕJˆÙY]ÜˆŠKš[›™\’SIÏ›Ü›HYH™^[œÙKY›Ü›H‰ÊÊÈµèµê5æuæõêˆ5å5åuéµä5åˆµå5åuéµä5å5åõäõêuåŠJÈÚˆŠÉ
›˜[YH‹µèµç5çµå5å5å5åuéµä5åÈ‹K›˜[YJJÉ
˜Ø]YÛÜH‹µéõæ5äµåuê5æuå‹K˜Ø]YÛÜJJÉÏ][\İYH™^[œÙKXØ]YÛÜšY\È‰ÊÜË›X\
O‰ÏÜ[Ûˆ˜[YOH‰ÊÒJ
JÉÈ‰ÊKš›Ú[ŠˆŠJÈÙ][\İˆŠÉ
˜ÛÜİ‹µèuæõåuçH5çµêµåuæõè5çÈ5äuêuí5åÈ8 %5ä5é5êuê5ç5å5êuä5æuê5ê5æuéÈ5ä5çH5èµäõæuæuçÈ5ç5ä5æuäõåuèˆ‹
ÏZK˜ÛÜİ
HO[[ØÎˆˆ‹›[X™\ˆŠJÉ
œZY‹µæõçµå5êuåuç5çH5èµäÈ5èµæõêuæuåH5äuêuí5åÈ‹KœZY›[X™\ˆŠJÉ
››İ\È‹µå5èµê5åuêˆ‹K››İ\Ë^\™XHŠJÉÏÛ\ÜÏH›]]Yµå5åµçµè5åuêˆ5éõæuæuçµåuêˆ5æõäuê5è5æõç5ç5åuêˆ5äuèuæuæõåuçKˆ5å5åuèuèÈ5æõä5çÈ5ê5éÈ5å5åuéµä5åuêˆ5è5åuèué5åuêˆ5æõäõæH5ç5çµè5åuèˆ5èué5æuê5å5æõé5åuç5åˆ5èuæõåuçH5ê5æuéÈ5é5æuê5åuêuåH5çµåõæuê5åõèuêÈ5ä5é5èH5å5åuä5å5åuéµä5å5ç5ç5ä5èµç5åuê‹Ü]ˆÛ\ÜÏHœ›İÈ]Ûˆ\OHœİX›Z]µêuçµåuê5å5åuéµä5åØ]Û]Ûˆ\OH˜]Ûˆˆ]KXØ[˜Ù[Y^[œÙOµäuæuæ5åuçØ]ÛÙ]]KYX[ÙË\İ]\È›ÛOHœİ]\Èˆ\šXK[]™OHœÛ]HÜÙ›Ü›O‰ÎÛ]UJˆÙ^[œÙKY›Ü›HŠNÛ™[[Y[Ë›˜[YKœ™\]Z\™YHL™[[Y[Ë›˜[YK›X^[™İLÌ™[[Y[Ë˜Ø]YÛÜKœ™\]Z\™YHL™[[Y[Ë˜Ø]YÛÜK›X^[™İLL™[[Y[Ë˜Ø]YÛÜKœÙ]]šX]J›\İ‹™^[œÙKXØ]YÛÜšY\ÈŠK™[[Y[ËœZYœ™\]Z\™YHL™[[Y[Ë˜ÛÜİœİ\HŒŒH‹™[[Y[ËœZYœİ\HŒŒH‹™[[Y[Ë››İ\Ë›X^[™İL™LËJ–Ù]KXØ[˜Ù[Y^[œÙWHŠK›Û˜ÛXÚÏJ
OO•JˆÙY]ÜˆŠK˜ÛÜÙJ
K›ÛœİX›Z]YO˜Š[[[˜İ[ÛŠŠ
^Ùœ™]™[Y˜][

NÛ]İ^ÜSØJŞÚYšKšY˜[YN›™[[Y[Ë›˜[YK˜[YKØ]YÛÜN›™[[Y[Ë˜Ø]YÛÜK˜[YKÛÜİ›™[[Y[Ë˜ÛÜİ˜[YOOOHˆÛ[“[X™\Š™[[Y[Ë˜ÛÜİ˜[YJKZY“[X™\Š™[[Y[ËœZY˜[YJK›İ\Î›™[[Y[Ë››İ\Ë˜[Y_WJVÌ_XØ]Ú
J^ÙJK›Y\ÜØYÙJNÜ™]\›Ÿ[]SØJÊ‹™^[œÙ\ß×JK›X\
OO›KšYOOZKšYÜ›JN–Ë‹‹œ‹™^[œÙ\ß×KJNÊZY[ÛŠ

OO›\]TÙ][™ÜÊK‹ÙJŠßKŠKÙ^[œÙ\ÎšJJJJI‰ŠJˆÙY]ÜˆŠK˜ÛÜÙJ
KZY[]

J_JKJˆÙY]ÜˆŠKœÚİÓ[Ù[

_Y[˜İ[ÛˆÙ
HHR
^İ˜\ˆ‹NÕJˆİXœÈŠKš[›™\’S^˜ÊÜËÚN›[Ù\ØX›Yˆ]JNÛ]OYØİ[Y[™Øİ[Y[[[Y[˜ÛY[ÚYÚYŠ

]Ú[™İË›X]ÚYYXJOO[[İ›ÚYœ‹˜Ø[
Ú[™İËŠX^]ÚYˆÌ
HŠK›X]Ú\Ê_OŒ	‰™OMÌ
^Û]ÏUJˆİXœÈŠK\Ëœ]Y\TÙ[XİÜŠˆÛ˜]‹[[Ü™HŠKÏ[O[[İ›ÚY›œ]Y\TÙ[XİÜŠ‹›˜]‹[Y[HŠNÚYŠ	‰˜É‰ˆ\Ëœ]Y\TÙ[XİÜŠˆÛ˜]‹[[Øš[K[[Ü™HŠJ^Û]YØİ[Y[˜Ü™X]Q[[Y[
™]Z[ÈŠNÙšYH›˜]‹[[Øš[K[[Ü™H‹˜Û\ÜÓ˜[YOH›˜]‹[[Ü™H˜]‹[[Øš[K[[Ü™H‹š[›™\’SIÏİ[[X\H\šXK[X™[HµèµåuäÈ‰ÊÚ™J›[Ü™HŠJÉÏÜ[µèµåuäÏÜÜ[Üİ[[X\O]ˆÛ\ÜÏH›˜]‹[Y[HÙ]‰ÎÛ]Yœ]Y\TÙ[XİÜŠ‹›˜]‹[Y[HŠKYØİ[Y[˜Ü™X]Q[[Y[
™]ˆŠNÚ˜Û\ÜÓ˜[YOH›˜]‹[[Øš[K\š[X\H‹È˜YÙ[‹œİÜ‹™\Ú›Ø\™—K™›Ü‘XXÚ
OÛ]\Ëœ]Y\TÙ[XİÜŠ	ÎœØÛÜHˆ›˜]‹Z][VÙ]K]XH‰ÊŞ
ÉÈ—IÊNÔ	‰š˜\[™

_JK
OYØİ[Y[œ]Y\TÙ[XİÜŠˆØXØÛİ[˜XØÛİ[]ÛÛÈˆ˜YÙ[[][˜Ú\ˆŠJOO[[Kœ™[[İ™J
NÛ]OYØİ[Y[˜Ü™X]Q[[Y[
˜]ÛˆŠNÛK\OH˜]Ûˆ‹KšYH›[Øš[KXYÙ[[][˜Ú\ˆ‹K˜Û\ÜÓ˜[YOHšXY\‹XÛÛ›Û[Øš[K[[Ü™KXÛÛ›Û‹KœÙ]]šX]J˜\šXK[X™[‹µèuåuæõçÈ5å5æ5æuåuçŠKKš[›™\’SZ™J˜YÙ[ÛÛ\\ÜÈŠJÉÏÜ[ˆÛ\ÜÏH˜ÛÛ›Û[X™[µèuåuæõçÈ5å5æ5æuåuçÜÜ[‰ËK›Û˜ÛXÚÏJ
OOÚYŠR
^ÙJµæuêH5ç5äuåõåuê5æ5æuåuç5ç5é5è5æH5é5êµæuåõêˆ5å5èuåuæõçËˆŠNÜ™]\›ŸYYŠ
_NÛ]ÏYØİ[Y[œ]Y\TÙ[XİÜŠˆÙ\İ[˜][Û‹XÛÛ›ÛÈŠNİÉ‰Ë˜\[™
JKÈ˜›ÛÚÚ[™È‹™^[œÙ\È—K™›Ü‘XXÚ
OÛ]\Ëœ]Y\TÙ[XİÜŠ	ÎœØÛÜHˆ›˜]‹Z][VÙ]K]XH‰ÊŞ
ÉÈ—IÊNÔ	‰œ˜\[™

_JNÛ]Ï\Ëœ]Y\TÙ[XİÜŠˆÛ˜]‹\™\\˜][ÛˆŠNÙÉ‰Š\œ˜^K™œ›ÛJËœ]Y\TÙ[XİÜ[
‹›˜]‹[Y[Hˆ›˜]‹]ÛÛYÜ›İ\ˆ›˜]‹Z][HŠJK™›Ü‘XXÚ
Oœ˜\[™

JKËœ™[[İ™J
JK\œ˜^K™œ›ÛJËœ]Y\TÙ[XİÜ[
‹›˜]‹]ÛÛYÜ›İ\ˆ›˜]‹Z][HŠJK™›Ü‘XXÚ
Oœ˜\[™

JKœ™[[İ™J
KË˜\[™

NÛ]OYœ]Y\TÙ[XİÜŠ‹›˜]‹[Y[HŠKÏVÙØİ[Y[œ]Y\TÙ[XİÜŠˆÙ\İ[˜][Û‹XÛÛ›ÛÈ™\İ[˜][Û‹[Y[HŠKØİ[Y[œ]Y\TÙ[XİÜŠˆØXØÛİ[˜XØÛİ[]ÛÛÈˆÜ™Yœ™\ÚŠKØİ[Y[œ]Y\TÙ[XİÜŠˆØXØÛİ[˜XØÛİ[]ÛÛÈˆ˜XØÛİ[[Y[HŠWK™š[\Š›ÛÛX[ŠNÚYŠI‰ˆ^Kœ]Y\TÙ[XİÜŠ‹›[Øš[KZXY\‹XXİ[ÛœÈŠJ^Û]YØİ[Y[˜Ü™X]Q[[Y[
™]ˆŠNŞ˜Û\ÜÓ˜[YOH›˜]‹]ÛÛYÜ›İ\[Øš[KZXY\‹XXİ[ÛœÈ‹œÙ]]šX]Jœ›ÛH‹™Ü›İ\ŠKœÙ]]šX]J˜\šXK[X™[‹µæõç5æuçH5è5åuèué5æuçHŠNÛ]YØİ[Y[˜Ü™X]Q[[Y[
œŠNÔ˜Û\ÜÓ˜[YOH˜ÛÛ›Û[Y[KZXY[™È‹^ÛÛ[Hµæõç5æuçH5è5åuèué5æuçH‹˜\[™

KË™›Ü‘XXÚ
ÏOÔË˜Û\ÜÓ\İ˜Y
›[Øš[K[[Ü™KXÛÛ›ÛŠK˜\[™
Ê_JK˜Ú[™[‹›[™İŒI‰K˜\[™

___UJˆİXœÈŠKœ]Y\TÙ[XİÜ[
˜]Û–Ù]K]X—HŠK™›Ü‘XXÚ
ÏOœË›Û˜ÛXÚÏJ
OOÈ]RÙ_[J
_
O\Ë™]\Ù]X‹

K›Š
J_J_Y[˜İ[ÛˆJ
^Ü™]\›ˆUJˆİšY]ÈÙ]K]š\YY]Y›Ü›WHŠ_ÛÛ™š\›JµæuêH5èµê5æuæõêˆ5é5ê5æ5æH5æ5æuåuç5é5êµåuåõåˆ5ç5èµåµåuäH5ç5ç5ä5êuçµæuê5åÈŠ_Y[˜İ[Ûˆ›Š
^Û]UJˆİšY]ÈˆŠNİ	‰ŠX’[™^KLK™›Øİ\Ê
J_Y[˜İ[Ûˆ

^İ˜\ˆÎÚYŠÜHLKÙOO[[ÙJ
KÙO[[R[YJ\™]\›ÒÛJ
K™JÊÎÛ]YØİ[Y[œ]Y\TÙ[XİÜŠ‹œÚ]KZXY\ˆ˜œ˜[™ŠNÚYŠ	‰Š^ÛÛ[ZHOOH™\Ú›Ø\™Èµèuæ5æ5åuèNˆŠÒÛŠœÙ][™ÜÊNˆˆ‹šY[ZOOOH™\Ú›Ø\™ŠKÙ

KOOOHœÛİ\˜Ù\ÈŠ^ÕJˆİšY]ÈŠKš[›™\’SHÙXİ[Ûˆ]KX›ÛÚÚ[™Ë\Ûİ\˜Ù\ÏÜÙXİ[Ûˆ‹ÙOU˜ÊÜ›Ûİ•JˆİšY]ÈÙ]KX›ÛÚÚ[™Ë\Ûİ\˜Ù\×HŠKX[ÙÎ•JˆÙY]ÜˆŠKš\’\N]ËÛ”™Yœ™\ÚŠ
OO]

K˜Ø]Ú

_JNÜ™]\›ŸZYŠOOOH™šY[Š^ÕJˆİšY]ÈŠKš[›™\’SHÙXİ[Ûˆ]KYšY[Y^ÜÜÙXİ[Ûˆ‹ÙOR˜ÊÜ›Ûİ•JˆİšY]ÈÙ]KYšY[Y^ÜHŠK\N˜İËš\Y’šYJNÜ™]\›ŸZYŠOOOH™Øİ[Y[ÈŠ^ÕJˆİšY]ÈŠKš[›™\’SHÙXİ[Ûˆ]KX›ÛÚÚ[™ËYØİ[Y[ÏÜÙXİ[Ûˆ‹ÙOZ]JÜ›Ûİ•JˆİšY]ÈÙ]KX›ÛÚÚ[™ËYØİ[Y[×HŠKX[ÙÎ•JˆÙY]ÜˆŠKš\’\N™ËÛÚ[™ÙYŠ
OO]

K˜Ø]Ú

_JNÜ™]\›ŸZYŠOOOH™Ü›İ\Š^ÕJˆİšY]ÈŠKš[›™\’SHÙXİ[Ûˆ]K[İÛ™\‹YÜ›İ\ÜÙXİ[Ûˆ‹ÙOYJÜ›Ûİ•JˆİšY]ÈÙ]K[İÛ™\‹YÜ›İ\HŠKX[ÙÎ•JˆÙY]ÜˆŠKš\’\N”ÜËİ]NšÛŠ™Ü›İ\ŠKÛÚ[™ÙYŠ
OO]

K˜Ø]Ú

_JNÜ™]\›ŸZYŠOOOH˜YÙ[Š^ÕJˆİšY]ÈŠKœ™\XÙPÚ[™[Š
NÛ]ÏYØİ[Y[˜Ü™X]Q[[Y[
™]ˆŠNÙË™]\Ù]˜YÙ[X”›ÛİHˆ‹JˆİšY]ÈŠK˜\[™
ÊNÛ]ORš
ØÛÛZ[™\™Ëš\’\N“ZJYJKšY]Ôİ]NšÛŠ˜YÙ[Š_JKÏYØİ[Y[˜Ü™X]Q[[Y[
™]ˆŠN×Ë™]\Ù]šXœšYYÙ[Hˆ‹JˆİšY]ÈŠKœ™\[™
ÊNÛ]HLKQJÜ›Ûİ—Ë›ØÚÙY™X\ÛÛˆµçµä5çµêˆ5å5ê5êuä5êˆ5èuåuæõçø )ˆŸJNÜ
ÙØ]]Ø^N“XJYJK›Ûİ]Û[ÙNˆ›Ûˆ‹İÛ™\’Y›YK\Ù\‹šYXİ]™NŠ™OO[[İ›ÚY˜™Kœİ]\ÊOOOH˜Xİ]™H‹\ÓX[˜YÙ[Y[Š™OO[[İ›ÚY˜™Kš\Ôİ\\\Ù\ŠOOOHLKš\Y’šYJK[ŠÏOİ˜\ˆÎŞ
O[[

KQJÜ›Ûİ—ËÛÛ^”Ë›ÚÏŞÙ\İ[˜][Û“˜[YNŠ
ÏTË˜ÛÛ™\œØ][ÛŠOO[[İ›ÚYšË™\İ[˜][Û“˜[YJ_™\İ[˜][Û—Û˜[Y_N›[›ØÚÙY™X\ÛÛ”Ë›ÚÏÈˆ”Ëœ™X\ÛÛ‹Û”İ\’OOİ˜\ˆKNÜ™]\›ˆHO[[	‰’K˜Xİ[ÛÖJK˜Xİ[Û‹

OTË˜ÛÛ™\œØ][ÛŠOO[[İ›ÚYK˜ÛÛ™\œØ][Û’Y
_

OTË˜ÛÛ™\œØ][ÛŠOO[[İ›ÚY‘KšY
JN™Jµå5é5èµåuç5å5êµåué5èµç5ç5ä5åõê5äuåõæuê5êˆ5é5éõåuäõå5åuä5æuêuåuê5çµé5åuê5êKˆŠ_KÛ\›İ™N’OOİ˜\ˆKNÜ™]\›ˆ[JK

OTË˜ÛÛ™\œØ][ÛŠOO[[İ›ÚYK˜ÛÛ™\œØ][Û’Y
_

OTË˜ÛÛ™\œØ][ÛŠOO[[İ›ÚY‘KšY
J_KÛØ[˜Ù[”[KÛ“˜]šYØ]N’OOÛJ
I‰ŠOROOOH™Z[HÈœİÜ’K
OOOH™Z[HŸOOOHœİÜŠI‰ŠÛROOOH™Z[HÈ›\İˆ›X\‹][[
K

K›Š
J_KÛ”™\]Y\İ’›_JJ_JK˜Ø]Ú


OOŞ
O[[

KQJÜ›Ûİ—Ë›ØÚÙY™X\ÛÛˆµå5èuåuæõçÈ5ä5æuè5åH5åµçµæuçÈ5æõê5äµè‹ˆ5è5èuå5ç5ê5èµè5çÈ5ä5åH5ç5é5è5åuêˆ5ç5êµçµæuæõåˆŸJJ_JKÙOJ
OOŞHLO[[

KOO[[J
_NÜ™]\›ŸZYŠOOOH™^[œÙ\ÈŠ^Ô˜Jš][\ËœÙ][™ÜÊKœÛÛYJOOK˜Ø]YÛÜOOOSŠ_
HˆŠKJˆİšY]ÈŠKš[›™\’SSÚ
ŠKJ–Ù]KXYY^[œÙWHŠK›Û˜ÛXÚÏJ
OO‘›J
KJ–Ù]KY^[œÙKYš[\—HŠK›Û˜Ú[™ÙO^OOİ˜\ˆÎÓ^K\™Ù]˜[YK

K
ÏUJˆİšY]ÈÙ]KY^[œÙKYš[\—HŠJOO[[Ë™›Øİ\ÊÜ™]™[ØÜ›ÛˆLJ_KJˆİšY]ÈŠKœ]Y\TÙ[XİÜ[
–Ù]KY^[œÙKYY]HŠK™›Ü‘XXÚ
OOK›Û˜ÛXÚÏJ
OOÚYŠK™]\Ù]™^[œÙTÛİ\˜ÙOOOH˜›ÛÚÚ[™ÈŠ^Û]ÏRš][\Ë™š[™
OšÚ[™OOH˜›ÛÚÚ[™È‰‰šYOO^K™]\Ù]™^[œÙQY]
N×É‰œZJ˜›ÛÚÚ[™È‹Ê_Y[Ù^Û]ÏJœÙ][™ÜË™^[œÙ\ß×JK™š[™
OšYOO^K™]\Ù]™^[œÙQY]
N×É‰‘›JÊ__JKJˆİšY]ÈŠKœ]Y\TÙ[XİÜ[
–Ù]KY^[œÙKY[]WHŠK™›Ü‘XXÚ
OOK›Û˜ÛXÚÏJ
OO˜Š[[[˜İ[ÛŠŠ
^ÚYŠÙ_XÛÛ™š\›Jµç5çµåõåuéÈ5å5åuéµä5å5åµåOÈ5èuæõåuçµæH5å5êµæõè5åuçÈ5åuå5êµêuç5åuçµæuçH5äuäõåuí5åÈ5æuêuêµè5åH5äuå5êµä5çKˆŠJ\™]\›Û]Ï\ÙJŠßKœÙ][™ÜÊKÙ^[œÙ\ÎŠœÙ][™ÜË™^[œÙ\ß×JK™š[\ŠOšYOO^K™]\Ù]™^[œÙQ[]J_JNÊZY[ÛŠ

OO›\]TÙ][™ÜÊšY™\œÚ[Û‹ÊJJI‰ŠZY[]

J_JJKJJˆİšY]ÈŠKÛŠ™^[œÙ\ÈŠJNÜ™]\›ŸZYŠOOOH™\Ú›Ø\™Š^Û]Ï^›JÜ›Ûİ•JˆİšY]ÈŠKš\’İ]NšÛŠ›İ™\šY]ÈŠKÛ“˜]šYØ]NšÏOÛJ
I‰ŠOZÏOOH™Z[HÈœİÜšË
ÏOOH™Z[HŸÏOOHœİÜŠI‰ŠÛZÏOOH™Z[HÈ›\İˆ›X\‹][[
K

K›Š
J_KÛ‘Y]šÏOœZJËšÚ[™ÊKÛÚ[™ÙQ\İ[˜][ÛŠ
OOİ˜\ˆÎÜ™]\›ŠÏUJˆÙ\İ[˜][ÛœËZÛYHŠJOO[[İ›ÚYšË˜ÛXÚÊ
__JKORÏ[YK\Ù\‹šYZ˜ÊÜ›Ûİ•JˆİšY]ÈÙ]K]š\Y]Z[×HŠKš\Kİ]NšÛŠš\Y]Z[ÈŠKÛ”Ø]™NšÏO˜Š[[[˜İ[ÛŠŠ
^İ˜\ˆNÚYŠ
YOO[[İ›ÚY›YK\Ù\‹šY
HOOWß
O[[İ›ÚY’šY
HOO^KšY
™OO[[İ›ÚY˜™Kœİ]\ÊHOOH˜Xİ]™HŠ]›İÈ\œ›ÜŠµå5æ5æuåuç5ä5åH5å5åõêuäuåuçÈ5å5êuêµè5åKˆ5æuêH5ç5é5êµåuåÈ5çµåõäõêH5ä5êˆ5å5èµê5æuæõåˆŠNÛ]KO^ZY[ÛŠ

OO˜Š[[[˜İ[ÛŠŠ
^ÒO^ZY[\]TÙ][™ÜÊKšYK™\œÚ[Û‹Ê_JJNÚYŠ
YOO[[İ›ÚY›YK\Ù\‹šY
HOOWß
O[[İ›ÚY’šY
HOO^KšY
]›İÈ\œ›ÜŠµå5æ5æuåuç5ä5åH5å5åõêuäuåuçÈ5å5êuêµè5åKˆŠNÚYŠPJ]›İÈ\œ›ÜŠJˆÛY\ÜØYÙHŠK^ÛÛ[µå5êuçµæuê5å5ç5ä5å5åuêuç5çµåŠNÒ\ÙJŠŠßK
KJKÚ][\Î’š][\ßJKİ[İ›X\
O”‹šYOORKšYÒŠŠßKŠKJN”ŠK

KØJ
KJˆİšY]ÈÙ]K]š\Y™YY˜XÚ×HŠK^ÛÛ[Hµé5ê5æ5æH5å5æ5æuåuç5è5êuçµê5åKˆ‹
OUJˆİšY]ÈÙ]K]š\YY]HŠJOO[[K™›Øİ\ÊÜ™]™[ØÜ›ÛˆLJ_JKÛ‘Y]Y˜[˜ÙYŠ
OOÛJ
I‰“˜JJ__JKRÏ][JÜ›Ûİ•JˆİšY]Èš\XÛÛ\][ÛˆŠKX[ÙÎ•JˆÙY]ÜˆŠKš\”İ]NšÛŠœ™XY[™\ÜÈŠKÛ‘Y]šÏOœZJËšÚ[™ÊKÛ”™Yœ™\ÚŠ
OO]

K˜Ø]Ú

KÛ”Ø]™T™\]Z\™[Y[ÎOO˜Š[ĞWK[˜İ[ÛŠŠÜ™\]Z\™[Y[ÎšË[YV›Û™N’_J^ÚYŠ
O[[İ›ÚY’šY
HOOTšY
]›İÈ\œ›ÜŠµå5æ5æuåuç5å5êuêµè5åˆ5é5êµåÈ5çµåõäõêH5ä5êˆ5å5å5äµäõê5åuê‹ˆŠNÚYŠJZY[ÛŠ

OO›\]TÙ][™ÜÊšY™\œÚ[Û‹ÙJŠßKœÙ][™ÜÊKİ[YV›Û™N’K™XY[™\ÜÔ™\]Z\™[Y[ÎšßJJJJJ]›İÈ\œ›ÜŠµå5å5äµäõê5åuêˆ5ç5ä5è5êuçµê5åKˆ5äuäõåuéÈ5ä5êˆ5å5å5åuäõèµå5åuè5èuå5êuåuäKˆŠ_JKÛ”Ø]™Y•]JNÛÙOJ
OOŞ

KÊ
KÊ
_NÜ™]\›ŸZYŠOOOHœÙ][™ÜÈŠ^Ş]Ê
NÜ™]\›Ÿ[]ORš][\Ë™š[\ŠÏO™ËšÚ[™OOZJNÚOOOHœİÜ‰‰™KœÛÜ

ËJOO™Ëœ^[ØY™^K^Kœ^[ØY™^JNÛ]Hˆ‹V×NÚYŠOOOHœİÜŠ^ÚYŠIÏ]ˆÛ\ÜÏHœ›İÈˆ›ÛOH™Ü›İ\ˆ\šXK[X™[Hµêµéµåuäµêˆ5çµèuç5åuçˆİ[OH›X\™Ú[ŒLœ‰ÊÖÖÈ›X\‹µçµé5å—KÈ›\İ‹µêµåuæõè5æuêˆ5æuåuçµæuêˆ—WK›X\

ÙËWJOO‰Ï]Ûˆ\OH˜]Ûˆˆ]K\›İ]K]šY]ÏH‰ÊÙÊÉÈˆ\šXK\™\ÜÙYH‰ÊÊÛOOYÊJÉÈˆÛ\ÜÏH‰ÊÊÛOOYÏÈ˜Xİ]™HˆˆŠJÉÈ‰ÊŞJÈØ]ÛˆŠKš›Ú[ŠˆŠJÈÙ]ˆ‹ÛOOH›X\Š^ÕJˆİšY]ÈŠKš[›™\’SIÏÙXİ[Û]ˆÛ\ÜÏHœ›İÈµçµèuç5åuçÚÙ]‰ÊÛŠÉÏ]ˆYHœ›İ]K[X\\[™[Ù]ÜÙXİ[Û‰ËJˆİšY]ÈŠKœ]Y\TÙ[XİÜ[
–Ù]K\›İ]K]šY]×HŠK™›Ü‘XXÚ
ÏO™Ë›Û˜ÛXÚÏJ
OOÛÛYË™]\Ù]œ›İ]UšY]Ë][[

K›Š
_JKÙOSÛJJˆÜ›İ]K[X\\[™[ŠKKÏOİ˜\ˆËËNÚ]JÏJÏYK™š[™
OOKšYOOYÊJOO[[İ›ÚY”Ëœ^[ØY™^JHO[[ÚÎ›[ÛH›\İÛ]OYK™š[\ŠOO”İš[™ÊKœ^[ØY™^JOOOTİš[™Ê]
JKÏZÛŠœİÜ˜[˜[ˆŠÊ]O[[Ú]ˆ˜[ŠJN×Ë™^OTİš[™Ê]
KËœYÙ\Ï^ÜYÙN“X]™›ÛÜŠX]›X^
K™š[™[™^
OOKšYOOYÊJKÜÛ
JˆİšY]ÈŠJJ_K

NÛ]VË‹‹•JˆİšY]ÈŠKœ]Y\TÙ[XİÜ[
–Ù]KZYHŠWK™š[™
OOK™]\Ù]šYOOYÊK^O[[İ›ÚYœ]Y\TÙ[XİÜŠšÈŠNÔ	‰ŠX’[™^KLK™›Øİ\Ê
K
OTœØÜ›Û[ÕšY]ÊOO[[K˜Ø[
Ø›ØÚÎˆœİ\ŸJJ_K™\İ[˜][Û—Û˜[YJNÜ™]\›ŸZ]OO[[	‰ŠOYK™š[\ŠÏO”İš[™ÊËœ^[ØY™^JOOOTİš[™Ê]
JKŠÏIÏ›ÛOHœİ]\Èµêµåuæõè5æuêˆ5ç5æuåuçH	ÊÒJ]
JÈˆ0­È5ç5éµé5æuæuå5äuæõç5å5æuçµæuçH5ç5åõéH5èµç5í5êµåuæõè5æuêˆ5æuåuçµæuêµíÜˆŠ_ZYŠÈœXÙH‹˜›ÛÚÚ[™È‹\ÚÈ‹™ÙX\ˆ—Kš[˜ÛY\ÊJJ^Û]ÏWÏOİ˜\ˆÜ™]\›Š
VÈ\ÚÈ‹™ÙX\ˆ—Kš[˜ÛY\ÊJO×Ëœ^[ØY˜Ø]YÛÜN—Ëœ^[ØY\JOO[[İ›ÚYš[J
J_
OOOH\ÚÈÈµæõç5ç5æHˆµç5ç5ä5éõæ5äµåuê5æuåŠ_KO[™]ÈX\ÚYŠK™›Ü‘XXÚ
ÏOKœÙ]
ÊÊK
K™Ù]
ÊÊJ_
JÌJJKOOOH˜›ÛÚÚ[™ÈŠY›ÜŠ]ÈÙ–Ë‹‹’œÙ][™ÜË˜›ÛÚÚ[™ÔÛXÚY\ß×K‹‹’œÙ][™ÜË˜›ÛÚÚ[™ÔÛXŞT›ÜÜØ[ß×WJ^Kš\ÊË˜Ø]YÛÜJ_KœÙ]
Ë˜Ø]YÛÜK
NİÚWHOO[[	‰ˆ^Kš\ÊÚWJI‰ŠÚWO[[
KVÛ[‹‹–Ë‹‹KšÙ^\Ê
WKœÛÜ

Ë
OO—Ë›ØØ[PÛÛ\\™JšHŠJWKIÏ]ˆÛ\ÜÏHœXÙKYš[\‹X˜\ˆX™[›ÜHœXÙKXØ]YÛÜHµéõæ5äµåuê5æuåÛX™[Ù[XİYHœXÙKXØ]YÛÜHˆ\šXK[X™[Hµéõæ5äµåuê5æuåuêˆ	ÊÒJÜË™š[™
ÏO—ÖÌOOOZJVÌWJJÉÈ‰ÊÜ‹›X\

Ë
OO‰ÏÜ[Ûˆ˜[YOH‰ÊŞ
ÉÈˆ	ÊÊÚWOOOWÏÈœÙ[XİYˆˆŠJÈˆŠÒJÈO[[×Îˆµå5æõåuçŠJÈˆ
ŠÊÏOO[[ÙK›[™İK™Ù]
ÊJJÈŠOÛÜ[ÛˆŠKš›Ú[ŠˆŠJÈÜÙ[XİÙ]ˆ‹ÚWHOO[[	‰ŠOYK™š[\ŠÏO™ÊÊOOO]ÚWJJ_[]OHˆ‹ÏHˆ‹VÈ˜›ÛÚÚ[™È‹\ÚÈ—Kš[˜ÛY\ÊJKÏ[	‰•[–ÚWOOOHœİ]È‹ZOOOH˜›ÛÚÚ[™È‰‰•[‹˜›ÛÚÚ[™ÏOOHœÛXÚY\ÈÛ	‰ŠOIÏ]ˆÛ\ÜÏHÛÜšÙ›İË]šY]ÜÈˆ›ÛOH™Ü›İ\ˆ\šXK[X™[Hµêµéµåuäµêˆ	ÊÒJÜË™š[™
ÏO™ÖÌOOOZJVÌWJJÉÈ‰ÊÖÖÈ˜İ\œ™[‹µçµéµäH5è5åuæõåõæH—KÈœİ]È‹µèuæ5æ5æuèuæ5æuéõåuêˆ—K‹‹šOOOH˜›ÛÚÚ[™ÈÖÖÈœÛXÚY\È‹µçµäõæuè5æuåuêˆ5å5åµçµè5å—WN–×WK›X\

ÙËWJOO‰Ï]Ûˆ\OH˜]Ûˆˆ]K]ÛÜšË]šY]ÏH‰ÊÙÊÉÈˆ\šXK\™\ÜÙYH‰ÊÊ[–ÚWOOOYÊJÉÈˆÛ\ÜÏH‰ÊÊ[–ÚWOOOYÏÈ˜Xİ]™HˆˆŠJÉÈ‰ÊŞJÈØ]ÛˆŠKš›Ú[ŠˆŠJÈÙ]ˆ‹ÜÏPš
š][\ËœÙ][™ÜË˜›ÛÚÚ[™ÔÛXÚY\ß×K˜›ÛÚÚ[™ËœÙ][™ÜÊN˜ÏÜÏSXÊJNŠJÏIÏ]ˆÛ\ÜÏHœXÙKYš[\‹X˜\ˆX™[›ÜHÛÜšÙ›İËYš[\ˆµèuæ5æ5åuèOÛX™[Ù[XİYHÛÜšÙ›İËYš[\ˆÜ[Ûˆ˜[YOHˆµæõç5å5èuæ5æ5åuèuæuçOÛÜ[Û‰ÊÓ›X\

ÙËWJOO‰ÏÜ[Ûˆ˜[YOH‰ÊÙÊÉÈˆ	ÊÊ˜VÚWOOOYÏÈœÙ[XİYˆˆŠJÈˆŠŞJÈˆ
ŠÙK™š[\ŠÏO’İ
ÊOOOYÊK›[™İ
ÈŠOÛÜ[ÛˆŠKš›Ú[ŠˆŠJÈÜÙ[XİÙ]ˆ‹˜VÚWI‰ŠOYK™š[\ŠÏO’İ
ÊOOO\˜VÚWJJJJKXÉ‰ˆY	‰ŠÏIÏ]ˆÛ\ÜÏH˜Ø\™È‰ÊÙK›X\
ÏOİ˜\ˆNÜ™]\›ˆ˜ÊËÙÚWKOOOHœİÜĞÛJËš][\Ë™\İ[˜][Û—Û˜[YJNšOOOH˜›ÛÚÚ[™ÈÉÏ]Ûˆ\OH˜]Ûˆˆ]KX›ÛÚÚ[™Ë\ÛXŞOH‰ÊÒJ

OYËœ^[ØY\JOO[[İ›ÚYKš[J
J_µç5ç5ä5éõæ5äµåuê5æuåŠJÉÈµä5é5êuê5åuæuåuêˆ5çµäõæuè5æuåuêˆ5ç5ä5æuêuåuêØ]Û‰ÎˆˆŠ_JKš›Ú[ŠˆŠJÈÙ]ˆŠÊK›[™İÈˆˆµä5æuçÈ5é5ê5æuæ5æuçH5ç5å5éµäµå5äuèuæuè5åuçÈ5å5è5åuæõåõæKÜˆŠJKJˆİšY]ÈŠKš[›™\’SIÏÙXİ[ÛXY\ˆÛ\ÜÏHœ™XÛÜ™Ë]ÛÛ˜\ˆ‰ÊİÜË™š[™
ÏO™ÖÌOOOZJVÌWJÈÚˆŠÚJÛŠÉÏ]ÛˆYH˜Y‰ÊÊÈŠÈ5å5è5åõæuåuêˆ5ç5éõæ5äµåuê5æuåˆŠÈ5å5åuèuèÈ5é5ê5æuæŠJÈØ]ÛÚXY\ˆŠÜÊÈÜÙXİ[Ûˆ‹JˆİšY]ÈŠKœ]Y\TÙ[XİÜ[
–Ù]K\›İ]K]šY]×HŠK™›Ü‘XXÚ
ÏO™Ë›Û˜ÛXÚÏJ
OOÛÛYË™]\Ù]œ›İ]UšY]Ë][[

K›Š
_JKJˆİšY]ÈŠKœ]Y\TÙ[XİÜ[
–Ù]K\İ]Yš[HŠK™›Ü‘XXÚ
ÏO™Ë›Û˜ÛXÚÏJ
OOİ˜\ˆKÎÙË™]\Ù]™š[Ø]YÛÜHOO]›ÚY	‰ŠÚWOYË™]\Ù]™š[Ø]YÛÜJK˜VÚWOYË™]\Ù]™š[İ]\ßˆ‹[–ÚWOH˜İ\œ™[‹

K›Š
K
ÏJOUJˆİšY]ÈˆŠJOO[[İ›ÚYKœØÜ›Û[ÕšY]ÊOO[[Ë˜Ø[
KØ›ØÚÎˆœİ\ŸJ_JKJˆİšY]ÈŠKœ]Y\TÙ[XİÜ[
–Ù]K]ÛÜšË]šY]×HŠK™›Ü‘XXÚ
ÏO™Ë›Û˜ÛXÚÏJ
OOİ˜\ˆNÕ[–ÚWOYË™]\Ù]ÛÜšÕšY]Ë

K
OUJˆİšY]ÈÙ]K]ÛÜšË]šY]×VØ\šXK\™\ÜÙY]YWHŠJOO[[K™›Øİ\Ê
_JNÛ]UJˆİÛÜšÙ›İËYš[\ˆŠNÜ	‰Š›Û˜Ú[™ÙOJ
OOİ˜\ˆÎÜ˜VÚWO\˜[YK

K
ÏUJˆİÛÜšÙ›İËYš[\ˆŠJOO[[Ë™›Øİ\Ê
_JNÛ]UJˆÜXÙKXØ]YÛÜHŠNÚ	‰Š›Û˜Ú[™ÙOJ
OOİ˜\ˆÎİÚWO\–Ó[X™\Š˜[YJWK

K
ÏUJˆÜXÙKXØ]YÛÜHŠJOO[[Ë™›Øİ\ÊÜ™]™[ØÜ›ÛˆLJ_JKJˆİšY]ÈŠKœ]Y\TÙ[XİÜ[
–Ù]KX›ÛÚÚ[™Ë\ÛXŞWHŠK™›Ü‘XXÚ
ÏO™Ë›Û˜ÛXÚÏJ
OOİ˜›ÛÚÚ[™ÏYË™]\Ù]˜›ÛÚÚ[™ÔÛXŞK[‹˜›ÛÚÚ[™ÏHœÛXÚY\È‹

K›Š
_JKJˆİšY]ÈŠKœ]Y\TÙ[XİÜ[
–Ù]K\XÙK\™\ÛÛ™WHŠK™›Ü‘XXÚ
ÏO™Ë›Û˜ÛXÚÏJ
OO˜Š[[[˜İ[ÛŠŠ
^İ˜\ˆÚYŠÙJ\™]\›Û]ORš][\Ë™š[™
ÏO”ËšYOOYË™]\Ù]œXÙT™\ÛÛ™JNÚYŠ^J\™]\›Û]ÏZšJš][\Ë
^Kœ^[ØY
OO[[İ›ÚY™^JNÙË™\ØX›YHLJµçµåõé5êH5çµéõåuçH5ç5é5æH5å5çµç5åuçÈ5êuç5ä5åuêµåH5æuåuçx )ˆŠNİ^Û]Ù]N”Ë\œ›ÜšßO^ZY[YK™[˜İ[ÛœËš[›ÚÙJœXÙ\Ë\›İ]K\™\ÛÛ™\ˆ‹Ø›ÙNİš\Y’šYš\™\œÚ[Û’™\œÚ[Û‹][RYKšYXÙNŠ
^Kœ^[ØY
OO[[İ›ÚY”œXÙJ_ˆ‹\İ[˜][Û’™\İ[˜][Û—Û˜[YKÙÚ[™ÎŠÏO[[İ›ÚY—Ë›˜[YJ_ˆŸ_JNÚYŠßÈO[[	‰”Ë™\œ›ÜŠ]›İÈ\œ›ÜŠ
ÏO[[İ›ÚY”Ë™\œ›ÜŠ_µç5ä5è5æuêµçÈ5ç5åµå5åuêˆ5ä5êˆ5å5çµéõåuçHŠNÚYŠËœİ]\ÏOOH˜[XšYİ[İ\ÈŠ^ÙJµè5çµéµä5åH5æõçµå5ä5é5êuê5åuæuåuê‹ˆ5æuêH5ç5äuåõåuê5çµéõåuçH5æuäõè5æuêˆŠÔË˜Ø[™Y]\Ë›X\
OO’KœXÙRY
Kš›Ú[Šˆ0­ÈŠJNÜ™]\›ŸYJµå5çµéõåuçH5åµåuå5å5åuè5êuçµêˆŠKZY[]

_XØ]Ú
Ê^ÙJË›Y\ÜØYÙ_µç5ä5è5æuêµçÈ5ç5åµå5åuêˆ5ä5êˆ5å5çµéõåuçHŠ_Yš[˜[^ÙË™\ØX›YHL__JJNÛ]OUJˆİšY]ÈŠKœ]Y\TÙ[XİÜŠ–Ù]K\™\ÛÛ™K[ÙÚ[™×HŠNÚYŠI‰ŠK›Û˜ÛXÚÏJ
OO˜Š[[[˜İ[ÛŠŠ
^İ˜\ˆËËKKK‹ÚYŠÙJ\™]\›Û]ÏJ
OO’š][\Ë™š[\ŠOİ˜\ˆËKÜ™]\›ˆšÚ[™OOHœİÜ‰‰ˆJ
ÏUœ^[ØY
HO[[	‰“ËœXÙRY
I‰ˆJ
OUœ^[ØY
HO[[	‰“KœXÙWÚY
I‰ˆS[X™\‹š\Ñš[š]J[X™\Š
Uœ^[ØY
OO[[İ›ÚY‘›]
J_JKœÛÜ

ÊOOİ˜\ˆKÜ™]\›ˆ[X™\Š

OUœ^[ØY
OO[[İ›ÚY“K™^J_
KS[X™\Š

SËœ^[ØY
OO[[İ›ÚY‘™^J_
_JKOYÊ
K›[™İÚYŠ^J^ÙJµç5æõç5å5èµéµæuê5åuêˆ5æõäuê5è5êuçµê5çµæuéõåuçH5ä5åHXÙHQˆŠNÜ™]\›Ÿ[K™\ØX›YHLÛ]ÏV×Nİ^Ù›ÜŠ]ÈÙˆÊ
J^Û]ORš][\Ë™š[™
	O‰šYOOSËšY
NÚYŠSJXÛÛ[YNÛ]ZšJš][\Ë
SKœ^[ØY
OO[[İ›ÚY™^JKJO[[İ›ÚY‘›˜[YJ_µç5ä5è5çµéµä5å5ç5æuè5åÙJµçµåµå5åŠÊË›[™İ
ÌJJÈˆ5çµêµåuæˆŠŞJÈˆ5ç5é5æHŠÑŠÈ¸ )ˆŠNİ^Û]Ù]N‰\œ›ÜŸO^ZY[YK™[˜İ[ÛœËš[›ÚÙJœXÙ\Ë\›İ]K\™\ÛÛ™\ˆ‹Ø›ÙNİš\Y’šYš\™\œÚ[Û’™\œÚ[Û‹][RY“KšYXÙN‘ˆOOHµç5ä5è5çµéµä5å5ç5æuè5åÑŠ
SKœ^[ØY
OO[[İ›ÚY”œXÙJ_ˆ‹\İ[˜][Û’™\İ[˜][Û—Û˜[YKÙÚ[™ÎŠO[[İ›ÚY‘›˜[YJ_ˆŸ_JNÚYŠŸ	O[[	‰‰™\œ›ÜŠ]›İÈ\œ›ÜŠ
	O[[İ›ÚY‰™\œ›ÜŠ_œ™\ÛÛ™\ˆŠNÉœİ]\ÏOOH˜[XšYİ[İ\È×Ëœ\Ú
Ù^NŠÏSKœ^[ØY
OO[[İ›ÚY”Ë™^KİÜŠ
ÏSKœ^[ØY
OO[[İ›ÚYšËœXÙJ_ˆ‹ÙÚ[™Î‘‹™\İ[ˆµäõê5åuêuå5äuåõæuê5å‹XÙRYŠ
OI˜Ø[™Y]\ÊOO[[İ›ÚY’K›X\
OO–KœXÙRY
Kš›Ú[Šˆ0­ÈŠJ_ˆŸJNŠËœ\Ú
Ù^NŠOSKœ^[ØY
OO[[İ›ÚYK™^KİÜŠ
OSKœ^[ØY
OO[[İ›ÚY‘KœXÙJ_ˆ‹ÙÚ[™Î‘‹™\İ[ˆµè5êuçµê‹XÙRY‰œXÙRYˆŸJKZY[]

J_XØ]Ú
	
^×Ëœ\Ú
Ù^NŠSKœ^[ØY
OO[[İ›ÚY”‹™^KİÜŠ
SKœ^[ØY
OO[[İ›ÚY‹œXÙJ_ˆ‹ÙÚ[™Î‘‹™\İ[ˆµç5ä5åµåuå5å‹XÙRYˆˆŸJ__[]UJˆİšY]ÈŠKœ]Y\TÙ[XİÜŠ–Ù]K\XÙK\™\ÛÛ][Û‹\™\İ[×HŠNÕ	‰ŠšY[HLKš[›™\’SIÏÏµêµåuéµä5åuêˆ5åµæuå5åuæH5çµéõåuçµåuêÚÏ]ˆİ[OH›İ™\™›İÎ˜]]ÈX›OXYµæuåuçOİµèµéµæuê5åİµçµéõåuçH5ç5æuè5åİµêµåuéµä5åİ”XÙHQİİİXY›ÙO‰Ê×Ë›X\
ÏOˆˆŠÒJË™^_ˆŠJÈİˆŠÒJËœİÜ
JÈİˆŠÒJË›ÙÚ[™ÊJÈİˆŠÒJËœ™\İ[
JÉÏİİ[OH™›Û\Ú^™N‹Î[NİÛÜ™Xœ™XZÎ˜œ™XZËX[‰ÊÒJËœXÙRY¸ %ŠJÈİİˆŠKš›Ú[ŠˆŠJÈİ›ÙOİX›OÙ]ˆŠKJµå5åµæuå5åuæH5å5èuêµæuæuçKˆ5å5êµåuéµä5åuêˆ5çµåuéµäµåuêˆ5äuæ5äuç5åˆŠ_Yš[˜[^ÛK™\ØX›YHL__JJKJ^ÛKš[œÙ\Y˜XÙ[S
˜Y\™[™‹	Ï]Ûˆ\OH˜]Ûˆˆ]K\™\Z\‹XÛÛÜ™[˜]\Ïµê5èµè5åuçÈ5éõåuä5åuê5äõæuè5æ5åuêˆ5ç5çµéõåuçµåuêˆ5çµåµåuå5æuçOØ]Û‰ÊNÛ]ÏUJˆİšY]ÈŠKœ]Y\TÙ[XİÜŠ–Ù]K\™\Z\‹XÛÛÜ™[˜]\×HŠNÙË›Û˜ÛXÚÏJ
OO˜Š[[[˜İ[ÛŠŠ
^İ˜\ˆÎÚYŠÙJ\™]\›Û]ORš][\Ë™š[\ŠÏOšËšÚ[™OOHœİÜŠNÙË™\ØX›YHLJµçµê5èµè5çÈ5éõåuä5åuê5äõæuè5æ5åuêˆ5ç5çµéõåuçµåuêˆ5êuæõäuê5åµåuå5åx )ˆŠNÛ]ÏLLÙ›ÜŠ]ÈÙˆJ^Û]OZšJš][\Ë
ZËœ^[ØY
OO[[İ›ÚY”™^JNİ^Û]Ù]NK\œ›Ü‘_O^ZY[YK™[˜İ[ÛœËš[›ÚÙJœXÙ\Ë\›İ]K\™\ÛÛ™\ˆ‹Ø›ÙNİš\Y’šYš\™\œÚ[Û’™\œÚ[Û‹][RYšËšYXÙNŠOO[[İ›ÚY’K›˜[YJ_

ÏZËœ^[ØY
OO[[İ›ÚY”ËœXÙJ_ˆ‹\İ[˜][Û’™\İ[˜][Û—Û˜[YKÙÚ[™ÎŠOO[[İ›ÚY’K›˜[YJ_ˆŸ_JNÚYŠ_HO[[	‰K™\œ›ÜŸKœİ]\ÈOOH™\šYšYYŠ]›İÈ\œ›ÜŠ[œ™\ÛÛ™YŠN×ÊÊËZY[]

_XØ]Ú
J^Ş
Êß_YJµê5èµè5åuçÈ5å5éõåuä5åuê5äõæuè5æ5åuêˆ5å5èuêµæuæuçNˆŠ×ÊÈˆ5è5êuçµê5åKŠŞ
Èˆ5ç5ä5èµåuäõæõè5åKˆŠKË™\ØX›YHL_J_UJˆİšY]ÈŠKœ]Y\TÙ[XİÜ[
–Ù]K\ÛXŞK\™]šY]×HŠK™›Ü‘XXÚ
ÏOÙË›Û˜Ú[™ÙOJ
OOÓÜHLNÛ]O^O˜Š[[[˜İ[ÛŠŠ
^Û]VË‹‹™Ëœ]Y\TÙ[XİÜ[
š[œ]Û˜[YO[Ü[Û—N˜ÚXÚÙYŠWK›X\
ÏOšË˜[YJNÚYŠOOH˜\›İ™Y‰‰ˆT›[™İ
^ÙËœ]Y\TÙ[XİÜŠ–Ù]K\ÛXŞKY™YY˜XÚ×HŠK^ÛÛ[Hµäuåõê5ç5é5åõåuêˆ5ä5é5êuê5åuêˆ5ä5åõêˆ5ç5ä5æuêuåuêÜ™]\›ŸJZY[ÛŠ

OO›œ™]šY]ÔÛXŞJšY™\œÚ[Û‹Ë™]\Ù]œÛXŞT™]šY]Ë
JJOŞZY[]

N™Ëœ]Y\TÙ[XİÜŠ–Ù]K\ÛXŞKY™YY˜XÚ×HŠK^ÛÛ[UJˆÛY\ÜØYÙHŠK^ÛÛ[JNÙË›ÛœİX›Z]^OŞœ™]™[Y˜][

KJ˜\›İ™YŠ_NÛ]ÏYËœ]Y\TÙ[XİÜŠ–Ù]K\™Z™Xİ\ÛXŞWHŠN×É‰ŠË›Û˜ÛXÚÏJ
OOJœ™Z™XİYŠJ_JKJˆİšY]ÈŠKœ]Y\TÙ[XİÜ[
–Ù]K\ÛXŞKXØ]YÛÜWHŠK™›Ü‘XXÚ
ÏO™Ë›Û˜ÛXÚÏJ
OO•›JË™]\Ù]œÛXŞPØ]YÛÜJJKJˆØYŠK›Û˜ÛXÚÏJ
OO™Õ›J
NœZJJKJˆİšY]ÈŠKœ]Y\TÙ[XİÜ[
–Ù]KZYHŠK™›Ü‘XXÚ
ÏOÛ]OYK™š[™
OšYOOYË™]\Ù]šY
NÙËœ]Y\TÙ[XİÜŠ–Ù]KXXİ[ÛYY]HŠK›Û˜ÛXÚÏJ
OOœZJKšÚ[™JKËœ]Y\TÙ[XİÜŠ–Ù]KXXİ[ÛY[]WHŠK›Û˜ÛXÚÏJ
OO˜Š[[[˜İ[ÛŠŠ
^ØÛÛ™š\›Jµç5çµåõåuéÈ5ä5êˆ5å5é5ê5æuæ5çµå5èµè5çÈ5åuçµæõç5å5çµæõêuæuê5æuçOÈŠI‰ŠZY[ÛŠ

OO›™[]R][JKšYK™\œÚ[ÛŠJJI‰ŠZY[]

J_JNÛ]ÏYËœ]Y\TÙ[XİÜŠš[œ]İ\OXÚXÚØ›ŞHŠN×É‰ŠË›Û˜Ú[™ÙOJ
OO˜Š[[[˜İ[ÛŠŠ
^Û]WË˜ÚXÚÙYÊZY[ÛŠ

OO›\]R][JKšYK™\œÚ[Û‹KšÚ[™ÙJŠßKKœ^[ØY
KÙÛ™NÛÜšÙ›İÔİ]\ÎÈ˜ÛÛ\]Yˆ›Ü[™Y‹ÛÜšÙ›İÕ\]Y]›™]È]J
KÒTÓÔİš[™Ê
KÛÜšÙ›İÕ\]YNˆ\Ù\ˆŸJJJJOŞZY[]

N—Ë˜ÚXÚÙYRİ
JOOOH˜ÛÛ\]YŸJJ_JKİJJˆİšY]ÈŠKÚÚ[™šK][\Î™Kİ]NšÛŠJÈˆŠÊ
Ï]ÚWJHO[[İÎˆ˜[ŠJÈˆŠÊ˜VÚW_˜[ŠJÈˆŠÊ]O[[Ú]ˆ˜[ŠJ_J_Y[˜İ[Ûˆ›JHˆŠ^Ò™JÊÎÛ]OJœÙ][™ÜË˜›ÛÚÚ[™ÔÛXÚY\ß×JK™š[™
ÏO˜Ë˜Ø]YÛÜOOO]
KRšYR™\œÚ[Û‹O\İXİ\™YÛÛ™JœÙ][™ÜÊNÕJˆÙY]ÜˆŠKš[›™\’SIÏ›Ü›HYHœÛXŞKY›Ü›Hµå5è5åõæuåuêˆ5ê5ä5êuåuè5æuåuêˆ5ç5èuåuæõçÏÚ‰ÊÉ
˜Ø]YÛÜH‹µéõæ5äµåuê5æuå‹
JÉÏ]ˆYHœÛXŞKYšY[È‰ÊÛ
JJÉÏÙ]Û\ÜÏH›]]Yµå5èuåuæõçÈ5æuçµéµä5ä5é5êuê5åuæuåuêˆ5ç5é5æH5å5å5è5åõæuåuê‹5åuæuéµæuäˆ5ä5åuêµçÈ5ç5ä5æuêuåuê5æ‹ˆ5å5êµéõéµæuäH5è5äµåµê5çµêµéõéµæuäH5å5æ5æuåuç5å5æõåuç5çÜ]ˆÛ\ÜÏHœ›İÈ›Ü›KXXİ[ÛœÈ]Ûˆ\OHœİX›Z]µêuçµåuê5å5è5åõæuåuêØ]Û]Ûˆ\OH˜]ÛˆˆYH˜Ø[˜Ù[\ÛXŞHµäuæuæ5åuçØ]ÛÙ]]KYX[ÙË\İ]\È›ÛOHœİ]\Èˆ\šXK[]™OHœÛ]HÜÙ›Ü›O‰ÎÛ]ÏUJˆÜÛXŞKY›Ü›HŠNÜË™[[Y[Ë˜Ø]YÛÜKœ™\]Z\™YHLË™[[Y[Ë˜Ø]YÛÜK›X^[™İLLI‰ŠË™[[Y[Ë˜Ø]YÛÜKœ™XYÛ›OHL
NÛ]J
OOÛ]Ï[™]È›Ü›Q]JÊK^ØØ]YÛÜN˜Ë™Ù]
˜Ø]YÛÜHŠKš[J
K\]Y]›™]È]J
KÒTÓÔİš[™Ê
_NÙ›ÜŠ]ÙˆÊ˜Ø]YÛÜJJ^Û]XË™Ù]
šÙ^JNÙÜšÙ^WO\\OOOH›[X™\ˆÚOO[[OOHˆÛ[“[X™\Š
NšO[[ÚˆˆŸ\™]\›ˆNÜË™[[Y[Ë˜Ø]YÛÜK›Û˜Ú[™ÙOJ
OOÛ]Ï[

NÕJˆÜÛXŞKYšY[ÈŠKš[›™\’S[
Ë™[[Y[Ë˜Ø]YÛÜK˜[YKÊ_KJˆØØ[˜Ù[\ÛXŞHŠK›Û˜ÛXÚÏJ
OO•JˆÙY]ÜˆŠK˜ÛÜÙJ
KË›ÛœİX›Z]XÏO˜Š[[[˜İ[ÛŠŠ
^ØËœ™]™[Y˜][

NÛ]İ^Ù\Ù


J_XØ]Ú
J^ÙJK›Y\ÜØYÙJNÜ™]\›Ÿ[]\İXİ\™YÛÛ™JK˜›ÛÚÚ[™ÔÛXÚY\ß×JK\™š[™[™^
OO›K˜Ø]YÛÜKÓİÙ\Ø\ÙJ
OOOY˜Ø]YÛÜKÓİÙ\Ø\ÙJ
JNÚYŠYI‰šL
^ÙJµæõäuê5éõæuæuçµêˆ5çµäõæuè5æuåuêˆ5ç5éõæ5äµåuê5æuå5åµåKˆ5é5êµåÈ5ä5åuêµå5ç5èµê5æuæõåˆŠNÜ™]\›ŸZLÜÚOYœœ\Ú

K
ZY[ÛŠ

OO›\]TÙ][™ÜÊ‹‹ÙJŠßKJKØ›ÛÚÚ[™ÔÛXÚY\ÎœJJJJI‰ŠJˆÙY]ÜˆŠK˜ÛÜÙJ
KZY[]

J_JKJˆÙY]ÜˆŠKœÚİÓ[Ù[

_Y[˜İ[ÛˆZJJ^Ò™JÊÎÛ]YOÜİXİ\™YÛÛ™JJNÚY˜Ü\Ëœ˜[™ÛUURQ

KÚ[™^[ØY–ÈœXÙH‹˜›ÛÚÚ[™È‹\ÚÈ‹™ÙX\ˆ—Kš[˜ÛY\Ê
I‰İHOO[[ŞÖÖÈ\ÚÈ‹™ÙX\ˆ—Kš[˜ÛY\Ê
OÈ˜Ø]YÛÜHˆ\H—NİOOOHµç5ç5ä5éõæ5äµåuê5æuåÈˆİ_Nß_NÕJˆÙY]ÜˆŠKš[›™\’SH›Ü›OˆŠÊOÈµèµê5æuæõêˆ5é5ê5æuæˆµå5åuèué5êˆ5é5ê5æuæŠJÈÚˆŠİÙİK›X\

Ü‹K×JOOİ˜\ˆÜ™]\›ˆ	
‹K
[‹œ^[ØYÜ—OOO[[	‰–È˜ÛÜİ‹œZY—Kš[˜ÛY\ÊŠOÈˆ›‹œ^[ØYÜ—JHO[[ÛœÏOOHÛÜšÙ›İÈÒİ
ŠNœÏOOH›[X™\ˆÜOOH™^HÌNŒˆˆ‹Ê_JKš›Ú[ŠˆŠJÉÏ]ˆÛ\ÜÏHœ›İÈ›Ü›KXXİ[ÛœÈ]Ûˆ\OHœİX›Z]µêuçµåuê5äuèµè5çÏØ]Û]Ûˆ\OH˜]ÛˆˆYH˜Ø[˜Ù[µäuæuæ5åuçØ]ÛÙ]]KYX[ÙË\İ]\È›ÛOHœİ]\Èˆ\šXK[]™OHœÛ]HÜÛ\ÜÏH™›Ü›KZ[µå5êuæuè5åuæuæuçH5æuæuêuçµê5åH5äuåõêuäuåuè5æˆ5äuèµè5çËÜÙ›Ü›O‰ËJˆØØ[˜Ù[ŠK›Û˜ÛXÚÏJ
OO•JˆÙY]ÜˆŠK˜ÛÜÙJ
KJˆÙY]Üˆ›Ü›HŠK›ÛœİX›Z]\O˜Š[[[˜İ[ÛŠŠ
^Ü‹œ™]™[Y˜][

NÛ]O[™]È›Ü›Q]J‹\™Ù]
KÏRŠßK‹œ^[ØY
NÙ›ÜŠ]ØË[ÙˆÙİJ\ÖØ×O\OOH›[X™\ˆÚK™Ù]
ÊOOOHˆ‰‰–È˜ÛÜİ‹œZY—Kš[˜ÛY\ÊÊOÛ[“[X™\ŠK™Ù]
ÊJNšK™Ù]
ÊNÖÈ˜›ÛÚÚ[™È‹\ÚÈ—Kš[˜ÛY\Ê
I‰Š
Y_ËÛÜšÙ›İÔİ]\ÈOORİ
ŠJI‰ŠËÛÜšÙ›İÕ\]Y][™]È]J
KÒTÓÔİš[™Ê
KËÛÜšÙ›İÕ\]YOH\Ù\ˆŠKOOH\ÚÈ‰‰ŠË™Û™O\ËÛÜšÙ›İÔİ]\ÏOOH˜ÛÛ\]YŠJK
ZY[ÛŠ

OO™OÛ\]R][J‹šY‹™\œÚ[Û‹ÊN›˜Ü™X]R][JšYÙJŠßKŠKÜ^[ØYœßJJJJI‰ŠJˆÙY]ÜˆŠK˜ÛÜÙJ
KZY[]
OOHœİÜŞØ]]Ô™\ÛÛ™Q^\Î–ÜË™^W_NßJJ_JKJˆÙY]ÜˆŠKœÚİÓ[Ù[

_Y[˜İ[ÛˆÊ
^Û]OUT“˜Ü™X]SØš™XİT“
™]È›ØŠİKİ\Nˆ˜\XØ][Û‹ÚœÛÛˆŸJJKYØİ[Y[˜Ü™X]Q[[Y[
˜HŠNÛ‹š™YYK‹™İÛ›ØYH›[İÜ‹]š\HŠÊ
O[[İ›ÚY’™\İ[˜][Û—Û˜[YJ_™\İ[˜][ÛˆŠJÈ‹X˜XÚİ\šœÛÛˆ‹Øİ[Y[˜›ÙK˜\[™
ŠK‹˜ÛXÚÊ
K‹œ™[[İ™J
KÙ][Y[İ]


OO•T“œ™]›ÚÙSØš™XİT“
JKYLÊ_Y[˜İ[Ûˆ›J
^Û]OR
š][\Ëš][\ÊKRšYÕJˆÙY]ÜˆŠKš[›™\’SHµêµéµåuäµå5çµéõäõæuçµå5ç5æuæuäuåuäÚµé5ê5æuæ5æuçH5åõäõêuæuçNˆŠÙK˜Y›[™İ
Èˆ5é5ê5æuæ5æuçH5éõæuæuçµæuçH5êuæuæuêuä5ê5åH5ç5ç5ä5êuæuè5åuæNˆŠÙKœÚÚ\›[™İ
ÈÜµå5äµäõê5åuêˆ5å5æ5æuåuç5åuå5çµæuäõèˆ5å5éõæuæuçH5ç5ä5æuåuåõç5é5åKÜ[ˆŠÙK˜Y›X\
Oİ˜\ˆKÎÜ™]\›ˆOˆŠÒJ
ÏJO\‹œ^[ØYœXÙJHO[[ÚNœ‹œ^[ØY›˜[YJHO[[ÜÎœ‹œ^[ØY]JJÈÛOˆŸJKš›Ú[ŠˆŠJÉÏİ[]ˆÛ\ÜÏHœ›İÈ]ÛˆYH˜ÛÛ™š\›Z[\Üµå5åuèuèÈ5é5ê5æuæ5æuçH5ç5èµè5çÏØ]Û]ÛˆYH˜Ø[˜Ù[[\Üµäuæuæ5åuçØ]ÛÙ]‰ËJˆØØ[˜Ù[[\ÜŠK›Û˜ÛXÚÏJ
OO•JˆÙY]ÜˆŠK˜ÛÜÙJ
KJˆØÛÛ™š\›Z[\ÜŠK›Û˜ÛXÚÏJ
OO˜Š[[[˜İ[ÛŠŠ
^ÊZY[ÛŠ

OO›š[\Ü][\Ê‹K˜Y
JJI‰ŠJˆÙY]ÜˆŠK˜ÛÜÙJ
KZY[]

J_JKJˆÙY]ÜˆŠKœÚİÓ[Ù[

_Y[˜İ[Ûˆ]Ê
^ÕJˆİšY]ÈŠKš[›™\’SIÏÙXİ[ÛµäµæuäuåuæH5åuå5èµäuê5êˆ5è5êµåuè5æuçOÚµå5çµæuäõèˆ5è5êuçµê5äuåõêuäuåuè5æˆ5äuèµè5çËˆ5äµæuäuåuæH”ÓÓˆ5æõåuç5ç5é5ê5æuæ5æH5æ5æuåuç5åuå5äµäõê5åuêÈ5çµèuçµæõæH5çµéõåuê5êuæuêµåué5æuçH5åuçµéõåuê5åuêˆ5å5åµçµè5å5è5êuçµê5æuçH5äuè5é5ê5äÈ5äuêuê5ê‹ˆ5çµåuçµç5éH5ç5å5åuê5æuäÈ5äµæuäuåuæH5ç5é5è5æH5êuæuè5åuæuæuçH5äµäõåuç5æuçKÜ]ÛˆYH™^Üµæuéµåuä5äµæuäuåuæH”ÓÓØ]ÛX™[µæuäuåuä5äµæuäuåuæH”ÓÓ[œ]YHš[\Üˆ\OH™š[HˆXØÙ\H˜\XØ][Û‹ÚœÛÛ‹šœÛÛˆÛX™[]ÛˆYH›ØØ[[\Üµå5èµäuê5è5êµåuè5æuçH5çµå5äµê5èuå5å5çµéõåuçµæuêˆ5äuçµæõêuæuê5åµåØ]Ûµå5æuæuäuåuä5çµåuèuæuèÈ5é5ê5æuæ5æuçH5åõäõêuæuçH5ç5ä5åõê5êµéµåuäµå5çµéõäõæuçµåˆ5å5åuä5ä5æuè5åH5çµåuåõéÈ5ä5åH5çµåõç5æuèÈ5é5ê5æuæ5æuçH5éõæuæuçµæuçKÜÜÙXİ[Û‰ËJˆÙ^ÜŠK›Û˜ÛXÚÏJ
OO˜Êš

JKJˆÚ[\ÜŠK›Û˜Ú[™ÙO]O˜Š[[[˜İ[ÛŠŠ
^Û]O]\™Ù]™š[\ÖÌNÚYŠJ]^ÚYŠKœÚ^™OYMŠ]›İÈ\œ›ÜŠµéõåuäuéH5äµäõåuç5çµäõæHŠNÖ›J
ZY[K^

JJ_XØ]Ú
Š^ÙJµå5æuæuäuåuä5ç5ä5äuåuéµèˆŠÛ‹›Y\ÜØYÙJ_Yš[˜[^İ\™Ù]˜[YOHˆŸ_JKJˆÛØØ[[\ÜŠK›Û˜ÛXÚÏJ
OOİ^Û][ØØ[İÜ˜YÙK™Ù]][JZ[[™Û[İ×İš\İŒHŠNÚYŠ]
]›İÈ\œ›ÜŠµç5ä5è5çµéµä5åH5è5êµåuè5æuçH5çµéõåuçµæuæuçH5äuçµæõêuæuê5åµåŠNÖ›J

J_XØ]Ú

^ÙJµå5æuæuäuåuä5ç5ä5äuåuéµèˆŠİ›Y\ÜØYÙJ__KJJˆİšY]ÈŠKÛŠ˜˜XÚİ\ŠJ_Y[˜İ[Ûˆ›Š
^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^İ˜\ˆNÛ]O[YOO[[İ›ÚY›YK\Ù\‹šYÚYŠ]
^Óİ

K

NÜ™]\›ŸYHOO]\Ù\‹šY	‰Šİ

KOHœİÜŠNÛ]JÊÒ‹İ^Û]Ï^ZY[YK˜İ\İÛY\]]İ]\Ê
NÚYŠˆOORŠ\™]\›ÚYŠË˜XØÙ\ÜÈOOH˜[İÙYŠ^Óİ

KYO]UJÜ›Ûİ•JˆİšY]ÈŠK]]”YKİ]\ÎœËÛ”™Yœ™\ÚŠ
OO‘›Š
KÛ”İ]\Î™KÛ”ÚYÛ“İ]Š
OO˜Š[[[˜İ[ÛŠŠ
^ŞZY[YKœÚYÛ“İ]

Kİ

K

_J_JNÜ™]\›ŸTO[[

K[[^ZY[™Kœİ]J
NÛ][™]ÈT“
Ú[™İË›ØØ][Û‹š™YŠKœÙX\˜Ú\˜[\Ë™Ù]
˜Ø\™ÜÙ]\Ü™]\›ˆŠNÚYŠ\‹š\Ôİ\\\Ù\‰‰–Èœ[™[™È‹˜Xİ]™H—Kš[˜ÛY\ÊO[[İ›ÚYœ‹œİ]\ÊI‰‹×–ØKYŒNKW^ÌÍŸIÚK\İ
ˆŠJ]^ÚYŠ
ZY[™Kœ™XÛÛ˜Ú[PØ\™

JK˜ÛÛ\]Y
^Û][™]ÈT“
Ú[™İË›ØØ][Û‹š™YŠNÜœÙX\˜Ú\˜[\Ë™[]J˜Ø\™ÜÙ]\Ü™]\›ˆŠKÚ[™İËš\İÜKœ™\XÙTİ]J[ˆ‹
__XØ]Ú

^ß[]Ï[™]ÈT“
Ú[™İË›ØØ][Û‹š™YŠKœÙX\˜Ú\˜[\Ë™Ù]
˜š[[™×Ü™]\›ˆŠNÚYŠ\‹š\Ôİ\\\Ù\‰‰–Èœ[™[™È‹˜Xİ]™H—Kš[˜ÛY\ÊO[[İ›ÚYœ‹œİ]\ÊI‰‹×–ØKYŒNKW^ÌÍŸIÚK\İ
ßˆŠJ]^ÚYŠ
ZY[™Kœ™XÛÛ˜Ú[JÊJKœZY
^Û][™]ÈT“
Ú[™İË›ØØ][Û‹š™YŠNÜœÙX\˜Ú\˜[\Ë™[]J˜š[[™×Ü™]\›ˆŠKÚ[™İËš\İÜKœ™\XÙTİ]J[ˆ‹
K^ZY[™Kœİ]J
__XØ]Ú

^ß_XØ]Ú
Ê^ÚYŠˆOORŠ\™]\›Óİ

K

KJµç5ä5è5æuêµçÈ5ç5ä5çµêˆ5å5ê5êuä5åuêˆ5åõêuäuåuçËˆ5å5êµåõäuê5êuåuäNˆŠÜË›Y\ÜØYÙJNÜ™]\›ŸZYŠOORŠ^ÚYŠVÈ˜Xİ]™H‹œ[™[™È—Kš[˜ÛY\ÊO[[İ›ÚYœ‹œİ]\ÊJ^Óİ

K

NÛ]ÏJO[[İ›ÚYœ‹œİ]\ÊOOOHœİ\Ü[™YÈµå5åõêuäuåuçÈ5çµåuêuå5åˆ5å5äµæuêuå5ç5çµèµê5æõêˆ5è5åõèuçµåˆˆµå5åõêuäuåuçÈ5ä5æuè5åH5é5èµæuçˆ5å5äµæuêuå5ç5çµèµê5æõêˆ5è5åõèuçµåˆÙJÊNİ^ŞZY[YKœÚYÛ“İ]ØØ[

_XØ]Ú

^ß\™]\›ŸZYŠ™O\‹YO]ÙOO]\Ù\‹šY	‰ŠÙ]\Ù\‹šY™KœÙ\ÜÚ[ÛXİ]š]JœÙ\ÜÚ[Û—Üİ\ŠK˜Ø]Ú


OOßJJK™Š‹œ^[Y[[ÙJK	O[[	‹™\ÜÜÙJ
K	[[‹š\Ôİ\\\Ù\Ÿ
	YJÙØİ[Y[ÛÛ^Š
OOŠÜYÙNœ‹œİ]\ÏOOHœ[™[™ÈŸØİ[Y[œ]Y\TÙ[XİÜŠ™X[ÙÖÛÜ[—HÙ]KXXØÛİ[\YÙWHŠOÈ˜XØÛİ[’ÚOOOH˜YÙ[Èœ[›š[™ÈšNˆ™\İ[˜][ÛœÈŸJKÙ[™œÏO”™K\ØYÙQ]™[ÊÊ_JJK‹š\Ôİ\\\Ù\‰‰ˆ^Ê
J^Û]Ï[™]ÈT“
Ú[™İË›ØØ][Û‹š™YŠNÜËœÙX\˜Ú\˜[\ËœÙ]
›[ÙH‹˜YZ[ˆŠKÚ[™İËš\İÜKœ™\XÙTİ]J[ˆ‹Ê_ZYŠÊ
J^ÚYŠ‹œİ]\ÈOOH˜Xİ]™HŸ\‹š\Ôİ\\\Ù\Š^Óİ

K

KJµç5åõêuäuåuçÈ5åµå5ä5æuçÈ5å5ê5êuä5êˆ5çµè5å5ç5é5èµæuçˆ5ä5é5êuê5ç5èµäuåuê5ç5æõè5æuèuêˆ5ç5éõåuåËˆŠNÜ™]\›ŸPÜŠ
NÜ™]\›ŸZYŠ‹œİ]\ÏOOHœ[™[™ÈŠ^Ò[[[[[İV×KÛŠÊËÙOO[[ÙJ
KÙO[[JˆÙY]ÜˆŠK˜ÛÜÙJ
KJˆÙY]ÜˆŠKš[›™\’SHˆ‹JˆİXœÈŠKš[›™\’SHˆ‹JˆØXØÛİ[ŠKš[›™\’SHˆ‹
OUJˆÙ\İ[˜][Û‹XÛÛ›ÛÈŠJOO[[Kœ™\XÙPÚ[™[Š
KØİ[Y[˜›ÙK™]\Ù]œØÜ™Y[H›ÙÚ[ˆ‹ÙOZY
Ü›Ûİ•JˆİšY]ÈŠKİ]Nœ‹\N”™K™Yœ™\ÚŠ
OO‘›Š
KÚYÛ“İ]Š
OO˜Š[[[˜İ[ÛŠŠ
^ŞZY[™KœÙ\ÜÚ[ÛXİ]š]JœÙ\ÜÚ[Û—Ù[™ŠK˜Ø]Ú


OOßJKZY[YKœÚYÛ“İ]

Kİ

K

_J_JKJµåõêuäuåuçÈ5åõäõêNˆ5æuêH5ç5å5êuç5æuçH5ä5æuçµåuêˆ5çµæuæuç5åuç5äuåõåuê5åõäuæuç5å5æõåuç5ç5è5æuèuæuåuçÈ5ç5ç5ä5êµêuç5åuçHŠNÜ™]\›ŸZYŠØJ
KR
^ÕJˆİšY]ÈŠK^ÛÛ[Hµæ5åuèµçÈ5çµå5èµè5çø )ˆİ^ŞZY[]

_XØ]Ú
Ê^Ò
Ê__ZYŠY	‰œ‹œİ]\ÏOOH˜Xİ]™H‰‰ˆ\‹š\Ôİ\\\Ù\Š^Û]Ï^YŞY[[ZO]]JÙX[ÙÎ•JˆÙY]ÜˆŠK\N”ÜËÚÙ[œËÛXØÙ\YYJ___J_Y[˜İ[Ûˆ™Š
^İ˜\ˆ‹NÊYØİ[Y[œ]Y\TÙ[XİÜŠ–Ù]KYÛØ˜[Xš[[™Ë[[ÙWHŠJOO[[‹œ™[[İ™J
NÛ]OYØİ[Y[˜Ü™X]Q[[Y[
™]ˆŠNÙK™]\Ù]™ÛØ˜[š[[™Ó[ÙOHˆ‹Kš[›™\’SS]

NÛ]YØİ[Y[œ]Y\TÙ[XİÜŠˆÙ›Ø][™ËZXY\ˆŠNÛÛ‹˜™Y›Ü™JJNŠOYØİ[Y[œ]Y\TÙ[XİÜŠ‹œÚ]KZXY\ˆŠJOO[[K˜Y\ŠJ_Y[˜İ[Ûˆ\Ê
^Ü™]\›ˆŠ\Ë[[˜İ[ÛŠŠ
^ÚYŠ[YJ\™]\›Û][YKOJÊÒİ^Û]^ZY[YK˜İ\İÛY\]]İ]\Ê
NÚYŠHOORŠ\™]\›ÚYŠ‹˜XØÙ\ÜÈOOH˜[İÙYŸX™J^ŞZY[›Š
NÜ™]\›Ÿ[]^ZY[™Kœİ]J
NÚYŠHOORŸ
YOO[[İ›ÚY›YK\Ù\‹šY
HOO]\Ù\‹šY
\™]\›ÚYŠ
O[[İ›ÚYœ‹œİ]\ÊHOOJ™OO[[İ›ÚY˜™Kœİ]\ÊJ^ŞZY[›Š
NÜ™]\›Ÿ[]O\‹š\Ôİ\\\Ù\ˆOOX™Kš\Ôİ\\\Ù\Ø™O\‹™Š‹œ^[Y[[ÙJKI‰œ‹œİ]\ÏOOH˜Xİ]™H‰‰ŠZY[›Š
J_XØ]Ú
Š^ÚYŠHOORŠ\™]\›Óİ

K

KJµç5ä5è5æuêµçÈ5ç5ä5çµêˆ5å5ê5êuä5åuêˆ5åõêuäuåuçËˆ5å5êµåõäuê5êuåuäKˆŠ__J_]Ú[™İËœÙ][\˜[


OOÛYI‰™Øİ[Y[š\ÚXš[]Tİ]OOOHš\ÚX›H‰‰‘\Ê
K˜Ø]Ú
O™J›Y\ÜØYÙJJ_KMYLÊNİ˜\ˆÛNÊÛOQYK˜Ú[›™[
OO[[ÛK˜Ø[
YK˜XØÛİ[XXØÙ\ÜÈŠK›ÛŠœÜİÜ™\×ØÚ[™Ù\È‹Ù]™[ˆ•TUH‹ØÚ[XNˆœX›XÈ‹X›Nˆ˜XØÛİ[ØXØÙ\ÜÈŸK

OO‘\Ê
K˜Ø]Ú
O™J›Y\ÜØYÙJJJKœİXœØÜšX™J
NÔYK›ÛÚ[™ÙJ
JOOÚYŠ™
^ÙOOOH”TÔÕÓÔ‘Ô‘PÓÕ‘T–H‰‰ŠœÏHL
NÜ™]\›Ÿ[™]ÈT“
Ú[™İË›ØØ][Û‹š™YŠKœÙX\˜Ú\˜[\Ë™Ù]
šY]ÈŠHOOH\›\È‰‰Š
ÊË›Š
K[Š

OOÙOOOH”TÔÕÓÔ‘Ô‘PÓÕ‘T–H‰‰›YI‰‰J
_JK˜Ø]Ú
O™J‹›Y\ÜØYÙJJJ_JNÙØİ[Y[˜Y]™[\İ[™\Š˜ÛXÚÈ‹OÛ]OVË‹‹™Øİ[Y[œ]Y\TÙ[XİÜ[
ˆÙ›Ø][™ËZXY\ˆ]Z[ÈŠWK]\™Ù]˜ÛÜÙ\İ
œİ[[X\HŠNÙ›ÜŠ]ˆÙˆJJ\‹˜ÛÛZ[œÊ\™Ù]
_‰‰›‹œ\™[[[Y[OO\ŠI‰Š‹›Ü[HLJ_JNÙØİ[Y[˜Y]™[\İ[™\ŠšÙ^YİÛˆ‹Oİ˜\ˆNÚYŠšÙ^OOOH‘\ØØ\HŠY›ÜŠ]ˆÙˆØİ[Y[œ]Y\TÙ[XİÜ[
ˆÙ›Ø][™ËZXY\ˆ]Z[ÖÛÜ[—HŠJ[‹›Ü[HLK
O[‹œ]Y\TÙ[XİÜŠœİ[[X\HŠJOO[[K™›Øİ\Ê
_JNÙØİ[Y[˜Y]™[\İ[™\Šš[œ]‹Oİ\™Ù]˜ÛÜÙ\İ
–Ù]KY\İ[˜][Û‹\XÚÙ\‹YX[Ù×HŠ_™JÊßJNÕJˆÙY]ÜˆŠK˜Y]™[\İ[™\Š˜Ø[˜Ù[‹OÒÙI‰œ™]™[Y˜][

_JNÙØİ[Y[˜Y]™[\İ[™\Šš\ÚXš[]XÚ[™ÙH‹

OOÙØİ[Y[š\ÚXš[]Tİ]OOOHš\ÚX›H‰‰›YI‰‘\Ê
K˜Ø]Ú
O™J›Y\ÜØYÙJJKØİ[Y[š\ÚXš[]Tİ]OOOHš\ÚX›H‰‰ˆSÜ‰‰›YI‰ˆRÙI‰šHOOHœÙ][™ÜÈ‰‰ˆUJˆÙY]ÜˆŠK›Ü[‰‰]

K˜Ø]Ú

_JNİ˜\ˆÏ[™]ÈT“
Ú[™İË›ØØ][Û‹š™YŠKœÙX\˜Ú\˜[\Ë™Ù]
šY]ÈŠOOOH\›\ÈİÏÛÙOUJÜ›Ûİ•JˆİšY]ÈŠK\N”™KY›™]ÈT“
Ú[™İË›ØØ][Û‹š™YŠKœÙX\˜Ú\˜[\Ë™Ù]
™\œÚ[ÛˆŠ_JN”YK˜ÛÛ\]SĞ]]Ø[˜XÚÊ
K[ŠOŠœß
œÏ]œ™XÛİ™\OOOHL
K™HLKYKœÙ\ÜÚ[ÛŠ
JJK[ŠO˜Š[[[˜İ[ÛŠŠ
^ŞOOL	‰ŠZY[›Š
KœÉ‰›YI‰˜™I‰‰J
KœÏHLJ_JJK˜Ø]Ú
Oİ™HLKOOL	‰Šİ

K

KJµäuäõæuéõêˆ5å5å5êµåõäuê5åuêˆ5è5æõêuç5åˆŠİ›Y\ÜØYÙJJ_JNİÚ[™İËœÙ][\˜[


OOÛYI‰’	‰ˆSÜ‰‰ˆRÙI‰–È˜›ÛÚÚ[™È‹\ÚÈ‹™^[œÙ\È—Kš[˜ÛY\ÊJI‰ˆUJˆÙY]ÜˆŠK›Ü[‰‰™Øİ[Y[š\ÚXš[]Tİ]OOOHš\ÚX›H‰‰]

K˜Ø]Ú
O™Jµç5ä5è5æuêµçÈ5ç5ê5èµè5çÈ5èuæ5æ5åuèuæuçNˆŠİ›Y\ÜØYÙJJ_KÙM
NÂ‹ÊˆH[™YXÙ[œÙH[™›Ü›X][Û‚‚›XY›]Ù\İÛXY›]\Ü˜ËšœÎ‚ˆ

ˆ™\Ù\™Bˆ
ˆXY›]KKH”ÈXœ˜\H›Üˆ[\˜Xİ]™HX\ËˆÎ‹ËÛXY›]œË˜ÛÛBˆ
ˆ
ÊHŒLLŒŒÈ›Y[Z\ˆYØY›ÛšÚ[‹
ÊHŒLLŒLHÛİYXYBˆ
ŠBŠ‹Â