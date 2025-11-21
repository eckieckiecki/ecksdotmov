(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function u(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(c){if(c.ep)return;c.ep=!0;const d=u(c);fetch(c.href,d)}})();function Mc(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var ec={exports:{}},Ui={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function iy(){if(Lp)return Ui;Lp=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function u(s,c,d){var p=null;if(d!==void 0&&(p=""+d),c.key!==void 0&&(p=""+c.key),"key"in c){d={};for(var y in c)y!=="key"&&(d[y]=c[y])}else d=c;return c=d.ref,{$$typeof:l,type:s,key:p,ref:c!==void 0?c:null,props:d}}return Ui.Fragment=r,Ui.jsx=u,Ui.jsxs=u,Ui}var $p;function ry(){return $p||($p=1,ec.exports=iy()),ec.exports}var A=ry(),ac={exports:{}},At={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function oy(){if(Yp)return At;Yp=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),p=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),E=Symbol.iterator;function O(w){return w===null||typeof w!="object"?null:(w=E&&w[E]||w["@@iterator"],typeof w=="function"?w:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,F={};function _(w,Q,et){this.props=w,this.context=Q,this.refs=F,this.updater=et||U}_.prototype.isReactComponent={},_.prototype.setState=function(w,Q){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,Q,"setState")},_.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function $(){}$.prototype=_.prototype;function B(w,Q,et){this.props=w,this.context=Q,this.refs=F,this.updater=et||U}var G=B.prototype=new $;G.constructor=B,Y(G,_.prototype),G.isPureReactComponent=!0;var I=Array.isArray,W={H:null,A:null,T:null,S:null,V:null},nt=Object.prototype.hasOwnProperty;function lt(w,Q,et,H,P,it){return et=it.ref,{$$typeof:l,type:w,key:Q,ref:et!==void 0?et:null,props:it}}function yt(w,Q){return lt(w.type,Q,void 0,void 0,void 0,w.props)}function ft(w){return typeof w=="object"&&w!==null&&w.$$typeof===l}function Ot(w){var Q={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(et){return Q[et]})}var Rt=/\/+/g;function vt(w,Q){return typeof w=="object"&&w!==null&&w.key!=null?Ot(""+w.key):Q.toString(36)}function g(){}function V(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(g,g):(w.status="pending",w.then(function(Q){w.status==="pending"&&(w.status="fulfilled",w.value=Q)},function(Q){w.status==="pending"&&(w.status="rejected",w.reason=Q)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function D(w,Q,et,H,P){var it=typeof w;(it==="undefined"||it==="boolean")&&(w=null);var at=!1;if(w===null)at=!0;else switch(it){case"bigint":case"string":case"number":at=!0;break;case"object":switch(w.$$typeof){case l:case r:at=!0;break;case x:return at=w._init,D(at(w._payload),Q,et,H,P)}}if(at)return P=P(w),at=H===""?"."+vt(w,0):H,I(P)?(et="",at!=null&&(et=at.replace(Rt,"$&/")+"/"),D(P,Q,et,"",function(J){return J})):P!=null&&(ft(P)&&(P=yt(P,et+(P.key==null||w&&w.key===P.key?"":(""+P.key).replace(Rt,"$&/")+"/")+at)),Q.push(P)),1;at=0;var st=H===""?".":H+":";if(I(w))for(var dt=0;dt<w.length;dt++)H=w[dt],it=st+vt(H,dt),at+=D(H,Q,et,it,P);else if(dt=O(w),typeof dt=="function")for(w=dt.call(w),dt=0;!(H=w.next()).done;)H=H.value,it=st+vt(H,dt++),at+=D(H,Q,et,it,P);else if(it==="object"){if(typeof w.then=="function")return D(V(w),Q,et,H,P);throw Q=String(w),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return at}function R(w,Q,et){if(w==null)return w;var H=[],P=0;return D(w,H,"","",function(it){return Q.call(et,it,P++)}),H}function L(w){if(w._status===-1){var Q=w._result;Q=Q(),Q.then(function(et){(w._status===0||w._status===-1)&&(w._status=1,w._result=et)},function(et){(w._status===0||w._status===-1)&&(w._status=2,w._result=et)}),w._status===-1&&(w._status=0,w._result=Q)}if(w._status===1)return w._result.default;throw w._result}var q=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function rt(){}return At.Children={map:R,forEach:function(w,Q,et){R(w,function(){Q.apply(this,arguments)},et)},count:function(w){var Q=0;return R(w,function(){Q++}),Q},toArray:function(w){return R(w,function(Q){return Q})||[]},only:function(w){if(!ft(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},At.Component=_,At.Fragment=u,At.Profiler=c,At.PureComponent=B,At.StrictMode=s,At.Suspense=b,At.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,At.__COMPILER_RUNTIME={__proto__:null,c:function(w){return W.H.useMemoCache(w)}},At.cache=function(w){return function(){return w.apply(null,arguments)}},At.cloneElement=function(w,Q,et){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var H=Y({},w.props),P=w.key,it=void 0;if(Q!=null)for(at in Q.ref!==void 0&&(it=void 0),Q.key!==void 0&&(P=""+Q.key),Q)!nt.call(Q,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&Q.ref===void 0||(H[at]=Q[at]);var at=arguments.length-2;if(at===1)H.children=et;else if(1<at){for(var st=Array(at),dt=0;dt<at;dt++)st[dt]=arguments[dt+2];H.children=st}return lt(w.type,P,void 0,void 0,it,H)},At.createContext=function(w){return w={$$typeof:p,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:d,_context:w},w},At.createElement=function(w,Q,et){var H,P={},it=null;if(Q!=null)for(H in Q.key!==void 0&&(it=""+Q.key),Q)nt.call(Q,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(P[H]=Q[H]);var at=arguments.length-2;if(at===1)P.children=et;else if(1<at){for(var st=Array(at),dt=0;dt<at;dt++)st[dt]=arguments[dt+2];P.children=st}if(w&&w.defaultProps)for(H in at=w.defaultProps,at)P[H]===void 0&&(P[H]=at[H]);return lt(w,it,void 0,void 0,null,P)},At.createRef=function(){return{current:null}},At.forwardRef=function(w){return{$$typeof:y,render:w}},At.isValidElement=ft,At.lazy=function(w){return{$$typeof:x,_payload:{_status:-1,_result:w},_init:L}},At.memo=function(w,Q){return{$$typeof:m,type:w,compare:Q===void 0?null:Q}},At.startTransition=function(w){var Q=W.T,et={};W.T=et;try{var H=w(),P=W.S;P!==null&&P(et,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(rt,q)}catch(it){q(it)}finally{W.T=Q}},At.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},At.use=function(w){return W.H.use(w)},At.useActionState=function(w,Q,et){return W.H.useActionState(w,Q,et)},At.useCallback=function(w,Q){return W.H.useCallback(w,Q)},At.useContext=function(w){return W.H.useContext(w)},At.useDebugValue=function(){},At.useDeferredValue=function(w,Q){return W.H.useDeferredValue(w,Q)},At.useEffect=function(w,Q,et){var H=W.H;if(typeof et=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return H.useEffect(w,Q)},At.useId=function(){return W.H.useId()},At.useImperativeHandle=function(w,Q,et){return W.H.useImperativeHandle(w,Q,et)},At.useInsertionEffect=function(w,Q){return W.H.useInsertionEffect(w,Q)},At.useLayoutEffect=function(w,Q){return W.H.useLayoutEffect(w,Q)},At.useMemo=function(w,Q){return W.H.useMemo(w,Q)},At.useOptimistic=function(w,Q){return W.H.useOptimistic(w,Q)},At.useReducer=function(w,Q,et){return W.H.useReducer(w,Q,et)},At.useRef=function(w){return W.H.useRef(w)},At.useState=function(w){return W.H.useState(w)},At.useSyncExternalStore=function(w,Q,et){return W.H.useSyncExternalStore(w,Q,et)},At.useTransition=function(){return W.H.useTransition()},At.version="19.1.0",At}var Gp;function zc(){return Gp||(Gp=1,ac.exports=oy()),ac.exports}var v=zc();const j=Mc(v);var lc={exports:{}},Li={},nc={exports:{}},ic={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function uy(){return qp||(qp=1,function(l){function r(R,L){var q=R.length;R.push(L);t:for(;0<q;){var rt=q-1>>>1,w=R[rt];if(0<c(w,L))R[rt]=L,R[q]=w,q=rt;else break t}}function u(R){return R.length===0?null:R[0]}function s(R){if(R.length===0)return null;var L=R[0],q=R.pop();if(q!==L){R[0]=q;t:for(var rt=0,w=R.length,Q=w>>>1;rt<Q;){var et=2*(rt+1)-1,H=R[et],P=et+1,it=R[P];if(0>c(H,q))P<w&&0>c(it,H)?(R[rt]=it,R[P]=q,rt=P):(R[rt]=H,R[et]=q,rt=et);else if(P<w&&0>c(it,q))R[rt]=it,R[P]=q,rt=P;else break t}}return L}function c(R,L){var q=R.sortIndex-L.sortIndex;return q!==0?q:R.id-L.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;l.unstable_now=function(){return d.now()}}else{var p=Date,y=p.now();l.unstable_now=function(){return p.now()-y}}var b=[],m=[],x=1,E=null,O=3,U=!1,Y=!1,F=!1,_=!1,$=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function I(R){for(var L=u(m);L!==null;){if(L.callback===null)s(m);else if(L.startTime<=R)s(m),L.sortIndex=L.expirationTime,r(b,L);else break;L=u(m)}}function W(R){if(F=!1,I(R),!Y)if(u(b)!==null)Y=!0,nt||(nt=!0,vt());else{var L=u(m);L!==null&&D(W,L.startTime-R)}}var nt=!1,lt=-1,yt=5,ft=-1;function Ot(){return _?!0:!(l.unstable_now()-ft<yt)}function Rt(){if(_=!1,nt){var R=l.unstable_now();ft=R;var L=!0;try{t:{Y=!1,F&&(F=!1,B(lt),lt=-1),U=!0;var q=O;try{e:{for(I(R),E=u(b);E!==null&&!(E.expirationTime>R&&Ot());){var rt=E.callback;if(typeof rt=="function"){E.callback=null,O=E.priorityLevel;var w=rt(E.expirationTime<=R);if(R=l.unstable_now(),typeof w=="function"){E.callback=w,I(R),L=!0;break e}E===u(b)&&s(b),I(R)}else s(b);E=u(b)}if(E!==null)L=!0;else{var Q=u(m);Q!==null&&D(W,Q.startTime-R),L=!1}}break t}finally{E=null,O=q,U=!1}L=void 0}}finally{L?vt():nt=!1}}}var vt;if(typeof G=="function")vt=function(){G(Rt)};else if(typeof MessageChannel<"u"){var g=new MessageChannel,V=g.port2;g.port1.onmessage=Rt,vt=function(){V.postMessage(null)}}else vt=function(){$(Rt,0)};function D(R,L){lt=$(function(){R(l.unstable_now())},L)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(R){R.callback=null},l.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):yt=0<R?Math.floor(1e3/R):5},l.unstable_getCurrentPriorityLevel=function(){return O},l.unstable_next=function(R){switch(O){case 1:case 2:case 3:var L=3;break;default:L=O}var q=O;O=L;try{return R()}finally{O=q}},l.unstable_requestPaint=function(){_=!0},l.unstable_runWithPriority=function(R,L){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var q=O;O=R;try{return L()}finally{O=q}},l.unstable_scheduleCallback=function(R,L,q){var rt=l.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?rt+q:rt):q=rt,R){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=q+w,R={id:x++,callback:L,priorityLevel:R,startTime:q,expirationTime:w,sortIndex:-1},q>rt?(R.sortIndex=q,r(m,R),u(b)===null&&R===u(m)&&(F?(B(lt),lt=-1):F=!0,D(W,q-rt))):(R.sortIndex=w,r(b,R),Y||U||(Y=!0,nt||(nt=!0,vt()))),R},l.unstable_shouldYield=Ot,l.unstable_wrapCallback=function(R){var L=O;return function(){var q=O;O=L;try{return R.apply(this,arguments)}finally{O=q}}}}(ic)),ic}var Qp;function sy(){return Qp||(Qp=1,nc.exports=uy()),nc.exports}var rc={exports:{}},xe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function cy(){if(Xp)return xe;Xp=1;var l=zc();function r(b){var m="https://react.dev/errors/"+b;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)m+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+b+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var s={d:{f:u,r:function(){throw Error(r(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(b,m,x){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:E==null?null:""+E,children:b,containerInfo:m,implementation:x}}var p=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(b,m){if(b==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return xe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,xe.createPortal=function(b,m){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(r(299));return d(b,m,null,x)},xe.flushSync=function(b){var m=p.T,x=s.p;try{if(p.T=null,s.p=2,b)return b()}finally{p.T=m,s.p=x,s.d.f()}},xe.preconnect=function(b,m){typeof b=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(b,m))},xe.prefetchDNS=function(b){typeof b=="string"&&s.d.D(b)},xe.preinit=function(b,m){if(typeof b=="string"&&m&&typeof m.as=="string"){var x=m.as,E=y(x,m.crossOrigin),O=typeof m.integrity=="string"?m.integrity:void 0,U=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;x==="style"?s.d.S(b,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:E,integrity:O,fetchPriority:U}):x==="script"&&s.d.X(b,{crossOrigin:E,integrity:O,fetchPriority:U,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},xe.preinitModule=function(b,m){if(typeof b=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var x=y(m.as,m.crossOrigin);s.d.M(b,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(b)},xe.preload=function(b,m){if(typeof b=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var x=m.as,E=y(x,m.crossOrigin);s.d.L(b,x,{crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},xe.preloadModule=function(b,m){if(typeof b=="string")if(m){var x=y(m.as,m.crossOrigin);s.d.m(b,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(b)},xe.requestFormReset=function(b){s.d.r(b)},xe.unstable_batchedUpdates=function(b,m){return b(m)},xe.useFormState=function(b,m,x){return p.H.useFormState(b,m,x)},xe.useFormStatus=function(){return p.H.useHostTransitionStatus()},xe.version="19.1.0",xe}var Vp;function Dm(){if(Vp)return rc.exports;Vp=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),rc.exports=cy(),rc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function fy(){if(Zp)return Li;Zp=1;var l=sy(),r=zc(),u=Dm();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function d(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function p(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function y(t){if(d(t)!==t)throw Error(s(188))}function b(t){var e=t.alternate;if(!e){if(e=d(t),e===null)throw Error(s(188));return e!==t?null:t}for(var a=t,n=e;;){var i=a.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===a)return y(i),t;if(o===n)return y(i),e;o=o.sibling}throw Error(s(188))}if(a.return!==n.return)a=i,n=o;else{for(var f=!1,h=i.child;h;){if(h===a){f=!0,a=i,n=o;break}if(h===n){f=!0,n=i,a=o;break}h=h.sibling}if(!f){for(h=o.child;h;){if(h===a){f=!0,a=o,n=i;break}if(h===n){f=!0,n=o,a=i;break}h=h.sibling}if(!f)throw Error(s(189))}}if(a.alternate!==n)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:e}function m(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=m(t),e!==null)return e;t=t.sibling}return null}var x=Object.assign,E=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),U=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),B=Symbol.for("react.consumer"),G=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),lt=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),ft=Symbol.for("react.activity"),Ot=Symbol.for("react.memo_cache_sentinel"),Rt=Symbol.iterator;function vt(t){return t===null||typeof t!="object"?null:(t=Rt&&t[Rt]||t["@@iterator"],typeof t=="function"?t:null)}var g=Symbol.for("react.client.reference");function V(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===g?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Y:return"Fragment";case _:return"Profiler";case F:return"StrictMode";case W:return"Suspense";case nt:return"SuspenseList";case ft:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case U:return"Portal";case G:return(t.displayName||"Context")+".Provider";case B:return(t._context.displayName||"Context")+".Consumer";case I:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lt:return e=t.displayName||null,e!==null?e:V(t.type)||"Memo";case yt:e=t._payload,t=t._init;try{return V(t(e))}catch{}}return null}var D=Array.isArray,R=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},rt=[],w=-1;function Q(t){return{current:t}}function et(t){0>w||(t.current=rt[w],rt[w]=null,w--)}function H(t,e){w++,rt[w]=t.current,t.current=e}var P=Q(null),it=Q(null),at=Q(null),st=Q(null);function dt(t,e){switch(H(at,e),H(it,t),H(P,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?hp(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=hp(e),t=pp(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}et(P),H(P,t)}function J(){et(P),et(it),et(at)}function gt(t){t.memoizedState!==null&&H(st,t);var e=P.current,a=pp(e,t.type);e!==a&&(H(it,t),H(P,a))}function ht(t){it.current===t&&(et(P),et(it)),st.current===t&&(et(st),Ni._currentValue=q)}var xt=Object.prototype.hasOwnProperty,Ct=l.unstable_scheduleCallback,_t=l.unstable_cancelCallback,qt=l.unstable_shouldYield,ae=l.unstable_requestPaint,Qt=l.unstable_now,be=l.unstable_getCurrentPriorityLevel,re=l.unstable_ImmediatePriority,Le=l.unstable_UserBlockingPriority,Ee=l.unstable_NormalPriority,ia=l.unstable_LowPriority,$e=l.unstable_IdlePriority,Ha=l.log,$l=l.unstable_setDisableYieldValue,Ua=null,Ae=null;function ra(t){if(typeof Ha=="function"&&$l(t),Ae&&typeof Ae.setStrictMode=="function")try{Ae.setStrictMode(Ua,t)}catch{}}var we=Math.clz32?Math.clz32:Go,$o=Math.log,Yo=Math.LN2;function Go(t){return t>>>=0,t===0?32:31-($o(t)/Yo|0)|0}var Yl=256,Gl=4194304;function ga(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ql(t,e,a){var n=t.pendingLanes;if(n===0)return 0;var i=0,o=t.suspendedLanes,f=t.pingedLanes;t=t.warmLanes;var h=n&134217727;return h!==0?(n=h&~o,n!==0?i=ga(n):(f&=h,f!==0?i=ga(f):a||(a=h&~t,a!==0&&(i=ga(a))))):(h=n&~o,h!==0?i=ga(h):f!==0?i=ga(f):a||(a=n&~t,a!==0&&(i=ga(a)))),i===0?0:e!==0&&e!==i&&(e&o)===0&&(o=i&-i,a=e&-e,o>=a||o===32&&(a&4194048)!==0)?e:i}function pl(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function qo(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wc(){var t=Yl;return Yl<<=1,(Yl&4194048)===0&&(Yl=256),t}function Jc(){var t=Gl;return Gl<<=1,(Gl&62914560)===0&&(Gl=4194304),t}function Qo(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function qn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Zg(t,e,a,n,i,o){var f=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var h=t.entanglements,S=t.expirationTimes,M=t.hiddenUpdates;for(a=f&~a;0<a;){var X=31-we(a),K=1<<X;h[X]=0,S[X]=-1;var z=M[X];if(z!==null)for(M[X]=null,X=0;X<z.length;X++){var N=z[X];N!==null&&(N.lane&=-536870913)}a&=~K}n!==0&&Fc(t,n,0),o!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=o&~(f&~e))}function Fc(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var n=31-we(e);t.entangledLanes|=e,t.entanglements[n]=t.entanglements[n]|1073741824|a&4194090}function Ic(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var n=31-we(a),i=1<<n;i&e|t[n]&e&&(t[n]|=e),a&=~i}}function Xo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Vo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Pc(){var t=L.p;return t!==0?t:(t=window.event,t===void 0?32:Np(t.type))}function Kg(t,e){var a=L.p;try{return L.p=t,e()}finally{L.p=a}}var La=Math.random().toString(36).slice(2),ye="__reactFiber$"+La,Te="__reactProps$"+La,Ql="__reactContainer$"+La,Zo="__reactEvents$"+La,Wg="__reactListeners$"+La,Jg="__reactHandles$"+La,tf="__reactResources$"+La,Qn="__reactMarker$"+La;function Ko(t){delete t[ye],delete t[Te],delete t[Zo],delete t[Wg],delete t[Jg]}function Xl(t){var e=t[ye];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Ql]||a[ye]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=yp(t);t!==null;){if(a=t[ye])return a;t=yp(t)}return e}t=a,a=t.parentNode}return null}function Vl(t){if(t=t[ye]||t[Ql]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Xn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function Zl(t){var e=t[tf];return e||(e=t[tf]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function oe(t){t[Qn]=!0}var ef=new Set,af={};function ml(t,e){Kl(t,e),Kl(t+"Capture",e)}function Kl(t,e){for(af[t]=e,t=0;t<e.length;t++)ef.add(e[t])}var Fg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lf={},nf={};function Ig(t){return xt.call(nf,t)?!0:xt.call(lf,t)?!1:Fg.test(t)?nf[t]=!0:(lf[t]=!0,!1)}function Ji(t,e,a){if(Ig(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function Fi(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function ba(t,e,a,n){if(n===null)t.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+n)}}var Wo,rf;function Wl(t){if(Wo===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);Wo=e&&e[1]||"",rf=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wo+t+rf}var Jo=!1;function Fo(t,e){if(!t||Jo)return"";Jo=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(N){var z=N}Reflect.construct(t,[],K)}else{try{K.call()}catch(N){z=N}t.call(K.prototype)}}else{try{throw Error()}catch(N){z=N}(K=t())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(N){if(N&&z&&typeof N.stack=="string")return[N.stack,z.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=n.DetermineComponentFrameRoot(),f=o[0],h=o[1];if(f&&h){var S=f.split(`
`),M=h.split(`
`);for(i=n=0;n<S.length&&!S[n].includes("DetermineComponentFrameRoot");)n++;for(;i<M.length&&!M[i].includes("DetermineComponentFrameRoot");)i++;if(n===S.length||i===M.length)for(n=S.length-1,i=M.length-1;1<=n&&0<=i&&S[n]!==M[i];)i--;for(;1<=n&&0<=i;n--,i--)if(S[n]!==M[i]){if(n!==1||i!==1)do if(n--,i--,0>i||S[n]!==M[i]){var X=`
`+S[n].replace(" at new "," at ");return t.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",t.displayName)),X}while(1<=n&&0<=i);break}}}finally{Jo=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Wl(a):""}function Pg(t){switch(t.tag){case 26:case 27:case 5:return Wl(t.type);case 16:return Wl("Lazy");case 13:return Wl("Suspense");case 19:return Wl("SuspenseList");case 0:case 15:return Fo(t.type,!1);case 11:return Fo(t.type.render,!1);case 1:return Fo(t.type,!0);case 31:return Wl("Activity");default:return""}}function of(t){try{var e="";do e+=Pg(t),t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Ye(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function uf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function t0(t){var e=uf(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,o=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(f){n=""+f,o.call(this,f)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(f){n=""+f},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ii(t){t._valueTracker||(t._valueTracker=t0(t))}function sf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),n="";return t&&(n=uf(t)?t.checked?"true":"false":t.value),t=n,t!==a?(e.setValue(t),!0):!1}function Pi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var e0=/[\n"\\]/g;function Ge(t){return t.replace(e0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Io(t,e,a,n,i,o,f,h){t.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.type=f:t.removeAttribute("type"),e!=null?f==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ye(e)):t.value!==""+Ye(e)&&(t.value=""+Ye(e)):f!=="submit"&&f!=="reset"||t.removeAttribute("value"),e!=null?Po(t,f,Ye(e)):a!=null?Po(t,f,Ye(a)):n!=null&&t.removeAttribute("value"),i==null&&o!=null&&(t.defaultChecked=!!o),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?t.name=""+Ye(h):t.removeAttribute("name")}function cf(t,e,a,n,i,o,f,h){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.type=o),e!=null||a!=null){if(!(o!=="submit"&&o!=="reset"||e!=null))return;a=a!=null?""+Ye(a):"",e=e!=null?""+Ye(e):a,h||e===t.value||(t.value=e),t.defaultValue=e}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=h?t.checked:!!n,t.defaultChecked=!!n,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.name=f)}function Po(t,e,a){e==="number"&&Pi(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Jl(t,e,a,n){if(t=t.options,e){e={};for(var i=0;i<a.length;i++)e["$"+a[i]]=!0;for(a=0;a<t.length;a++)i=e.hasOwnProperty("$"+t[a].value),t[a].selected!==i&&(t[a].selected=i),i&&n&&(t[a].defaultSelected=!0)}else{for(a=""+Ye(a),e=null,i=0;i<t.length;i++){if(t[i].value===a){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ff(t,e,a){if(e!=null&&(e=""+Ye(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Ye(a):""}function df(t,e,a,n){if(e==null){if(n!=null){if(a!=null)throw Error(s(92));if(D(n)){if(1<n.length)throw Error(s(93));n=n[0]}a=n}a==null&&(a=""),e=a}a=Ye(e),t.defaultValue=a,n=t.textContent,n===a&&n!==""&&n!==null&&(t.value=n)}function Fl(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var a0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hf(t,e,a){var n=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":n?t.setProperty(e,a):typeof a!="number"||a===0||a0.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function pf(t,e,a){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="");for(var i in e)n=e[i],e.hasOwnProperty(i)&&a[i]!==n&&hf(t,i,n)}else for(var o in e)e.hasOwnProperty(o)&&hf(t,o,e[o])}function tu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var l0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),n0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tr(t){return n0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var eu=null;function au(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Il=null,Pl=null;function mf(t){var e=Vl(t);if(e&&(t=e.stateNode)){var a=t[Te]||null;t:switch(t=e.stateNode,e.type){case"input":if(Io(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ge(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var n=a[e];if(n!==t&&n.form===t.form){var i=n[Te]||null;if(!i)throw Error(s(90));Io(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<a.length;e++)n=a[e],n.form===t.form&&sf(n)}break t;case"textarea":ff(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Jl(t,!!a.multiple,e,!1)}}}var lu=!1;function gf(t,e,a){if(lu)return t(e,a);lu=!0;try{var n=t(e);return n}finally{if(lu=!1,(Il!==null||Pl!==null)&&(Lr(),Il&&(e=Il,t=Pl,Pl=Il=null,mf(e),t)))for(e=0;e<t.length;e++)mf(t[e])}}function Vn(t,e){var a=t.stateNode;if(a===null)return null;var n=a[Te]||null;if(n===null)return null;a=n[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,e,typeof a));return a}var ya=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nu=!1;if(ya)try{var Zn={};Object.defineProperty(Zn,"passive",{get:function(){nu=!0}}),window.addEventListener("test",Zn,Zn),window.removeEventListener("test",Zn,Zn)}catch{nu=!1}var $a=null,iu=null,er=null;function bf(){if(er)return er;var t,e=iu,a=e.length,n,i="value"in $a?$a.value:$a.textContent,o=i.length;for(t=0;t<a&&e[t]===i[t];t++);var f=a-t;for(n=1;n<=f&&e[a-n]===i[o-n];n++);return er=i.slice(t,1<n?1-n:void 0)}function ar(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function lr(){return!0}function yf(){return!1}function Re(t){function e(a,n,i,o,f){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=f,this.currentTarget=null;for(var h in t)t.hasOwnProperty(h)&&(a=t[h],this[h]=a?a(o):o[h]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?lr:yf,this.isPropagationStopped=yf,this}return x(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=lr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=lr)},persist:function(){},isPersistent:lr}),e}var gl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nr=Re(gl),Kn=x({},gl,{view:0,detail:0}),i0=Re(Kn),ru,ou,Wn,ir=x({},Kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Wn&&(Wn&&t.type==="mousemove"?(ru=t.screenX-Wn.screenX,ou=t.screenY-Wn.screenY):ou=ru=0,Wn=t),ru)},movementY:function(t){return"movementY"in t?t.movementY:ou}}),vf=Re(ir),r0=x({},ir,{dataTransfer:0}),o0=Re(r0),u0=x({},Kn,{relatedTarget:0}),uu=Re(u0),s0=x({},gl,{animationName:0,elapsedTime:0,pseudoElement:0}),c0=Re(s0),f0=x({},gl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),d0=Re(f0),h0=x({},gl,{data:0}),xf=Re(h0),p0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},m0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},g0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function b0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=g0[t])?!!e[t]:!1}function su(){return b0}var y0=x({},Kn,{key:function(t){if(t.key){var e=p0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ar(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?m0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(t){return t.type==="keypress"?ar(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ar(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),v0=Re(y0),x0=x({},ir,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Af=Re(x0),A0=x({},Kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),w0=Re(A0),S0=x({},gl,{propertyName:0,elapsedTime:0,pseudoElement:0}),E0=Re(S0),T0=x({},ir,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),R0=Re(T0),k0=x({},gl,{newState:0,oldState:0}),D0=Re(k0),C0=[9,13,27,32],cu=ya&&"CompositionEvent"in window,Jn=null;ya&&"documentMode"in document&&(Jn=document.documentMode);var O0=ya&&"TextEvent"in window&&!Jn,wf=ya&&(!cu||Jn&&8<Jn&&11>=Jn),Sf=" ",Ef=!1;function Tf(t,e){switch(t){case"keyup":return C0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var tn=!1;function M0(t,e){switch(t){case"compositionend":return Rf(e);case"keypress":return e.which!==32?null:(Ef=!0,Sf);case"textInput":return t=e.data,t===Sf&&Ef?null:t;default:return null}}function z0(t,e){if(tn)return t==="compositionend"||!cu&&Tf(t,e)?(t=bf(),er=iu=$a=null,tn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return wf&&e.locale!=="ko"?null:e.data;default:return null}}var N0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!N0[t.type]:e==="textarea"}function Df(t,e,a,n){Il?Pl?Pl.push(n):Pl=[n]:Il=n,e=Xr(e,"onChange"),0<e.length&&(a=new nr("onChange","change",null,a,n),t.push({event:a,listeners:e}))}var Fn=null,In=null;function j0(t){up(t,0)}function rr(t){var e=Xn(t);if(sf(e))return t}function Cf(t,e){if(t==="change")return e}var Of=!1;if(ya){var fu;if(ya){var du="oninput"in document;if(!du){var Mf=document.createElement("div");Mf.setAttribute("oninput","return;"),du=typeof Mf.oninput=="function"}fu=du}else fu=!1;Of=fu&&(!document.documentMode||9<document.documentMode)}function zf(){Fn&&(Fn.detachEvent("onpropertychange",Nf),In=Fn=null)}function Nf(t){if(t.propertyName==="value"&&rr(In)){var e=[];Df(e,In,t,au(t)),gf(j0,e)}}function _0(t,e,a){t==="focusin"?(zf(),Fn=e,In=a,Fn.attachEvent("onpropertychange",Nf)):t==="focusout"&&zf()}function B0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return rr(In)}function H0(t,e){if(t==="click")return rr(e)}function U0(t,e){if(t==="input"||t==="change")return rr(e)}function L0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Me=typeof Object.is=="function"?Object.is:L0;function Pn(t,e){if(Me(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),n=Object.keys(e);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!xt.call(e,i)||!Me(t[i],e[i]))return!1}return!0}function jf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _f(t,e){var a=jf(t);t=0;for(var n;a;){if(a.nodeType===3){if(n=t+a.textContent.length,t<=e&&n>=e)return{node:a,offset:e-t};t=n}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=jf(a)}}function Bf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Bf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Hf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Pi(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=Pi(t.document)}return e}function hu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var $0=ya&&"documentMode"in document&&11>=document.documentMode,en=null,pu=null,ti=null,mu=!1;function Uf(t,e,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;mu||en==null||en!==Pi(n)||(n=en,"selectionStart"in n&&hu(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ti&&Pn(ti,n)||(ti=n,n=Xr(pu,"onSelect"),0<n.length&&(e=new nr("onSelect","select",null,e,a),t.push({event:e,listeners:n}),e.target=en)))}function bl(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var an={animationend:bl("Animation","AnimationEnd"),animationiteration:bl("Animation","AnimationIteration"),animationstart:bl("Animation","AnimationStart"),transitionrun:bl("Transition","TransitionRun"),transitionstart:bl("Transition","TransitionStart"),transitioncancel:bl("Transition","TransitionCancel"),transitionend:bl("Transition","TransitionEnd")},gu={},Lf={};ya&&(Lf=document.createElement("div").style,"AnimationEvent"in window||(delete an.animationend.animation,delete an.animationiteration.animation,delete an.animationstart.animation),"TransitionEvent"in window||delete an.transitionend.transition);function yl(t){if(gu[t])return gu[t];if(!an[t])return t;var e=an[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Lf)return gu[t]=e[a];return t}var $f=yl("animationend"),Yf=yl("animationiteration"),Gf=yl("animationstart"),Y0=yl("transitionrun"),G0=yl("transitionstart"),q0=yl("transitioncancel"),qf=yl("transitionend"),Qf=new Map,bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bu.push("scrollEnd");function Fe(t,e){Qf.set(t,e),ml(e,[t])}var Xf=new WeakMap;function qe(t,e){if(typeof t=="object"&&t!==null){var a=Xf.get(t);return a!==void 0?a:(e={value:t,source:e,stack:of(e)},Xf.set(t,e),e)}return{value:t,source:e,stack:of(e)}}var Qe=[],ln=0,yu=0;function or(){for(var t=ln,e=yu=ln=0;e<t;){var a=Qe[e];Qe[e++]=null;var n=Qe[e];Qe[e++]=null;var i=Qe[e];Qe[e++]=null;var o=Qe[e];if(Qe[e++]=null,n!==null&&i!==null){var f=n.pending;f===null?i.next=i:(i.next=f.next,f.next=i),n.pending=i}o!==0&&Vf(a,i,o)}}function ur(t,e,a,n){Qe[ln++]=t,Qe[ln++]=e,Qe[ln++]=a,Qe[ln++]=n,yu|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function vu(t,e,a,n){return ur(t,e,a,n),sr(t)}function nn(t,e){return ur(t,null,null,e),sr(t)}function Vf(t,e,a){t.lanes|=a;var n=t.alternate;n!==null&&(n.lanes|=a);for(var i=!1,o=t.return;o!==null;)o.childLanes|=a,n=o.alternate,n!==null&&(n.childLanes|=a),o.tag===22&&(t=o.stateNode,t===null||t._visibility&1||(i=!0)),t=o,o=o.return;return t.tag===3?(o=t.stateNode,i&&e!==null&&(i=31-we(a),t=o.hiddenUpdates,n=t[i],n===null?t[i]=[e]:n.push(e),e.lane=a|536870912),o):null}function sr(t){if(50<Ti)throw Ti=0,Ts=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var rn={};function Q0(t,e,a,n){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ze(t,e,a,n){return new Q0(t,e,a,n)}function xu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function va(t,e){var a=t.alternate;return a===null?(a=ze(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Zf(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function cr(t,e,a,n,i,o){var f=0;if(n=t,typeof t=="function")xu(t)&&(f=1);else if(typeof t=="string")f=Vb(t,a,P.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case ft:return t=ze(31,a,e,i),t.elementType=ft,t.lanes=o,t;case Y:return vl(a.children,i,o,e);case F:f=8,i|=24;break;case _:return t=ze(12,a,e,i|2),t.elementType=_,t.lanes=o,t;case W:return t=ze(13,a,e,i),t.elementType=W,t.lanes=o,t;case nt:return t=ze(19,a,e,i),t.elementType=nt,t.lanes=o,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $:case G:f=10;break t;case B:f=9;break t;case I:f=11;break t;case lt:f=14;break t;case yt:f=16,n=null;break t}f=29,a=Error(s(130,t===null?"null":typeof t,"")),n=null}return e=ze(f,a,e,i),e.elementType=t,e.type=n,e.lanes=o,e}function vl(t,e,a,n){return t=ze(7,t,n,e),t.lanes=a,t}function Au(t,e,a){return t=ze(6,t,null,e),t.lanes=a,t}function wu(t,e,a){return e=ze(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var on=[],un=0,fr=null,dr=0,Xe=[],Ve=0,xl=null,xa=1,Aa="";function Al(t,e){on[un++]=dr,on[un++]=fr,fr=t,dr=e}function Kf(t,e,a){Xe[Ve++]=xa,Xe[Ve++]=Aa,Xe[Ve++]=xl,xl=t;var n=xa;t=Aa;var i=32-we(n)-1;n&=~(1<<i),a+=1;var o=32-we(e)+i;if(30<o){var f=i-i%5;o=(n&(1<<f)-1).toString(32),n>>=f,i-=f,xa=1<<32-we(e)+i|a<<i|n,Aa=o+t}else xa=1<<o|a<<i|n,Aa=t}function Su(t){t.return!==null&&(Al(t,1),Kf(t,1,0))}function Eu(t){for(;t===fr;)fr=on[--un],on[un]=null,dr=on[--un],on[un]=null;for(;t===xl;)xl=Xe[--Ve],Xe[Ve]=null,Aa=Xe[--Ve],Xe[Ve]=null,xa=Xe[--Ve],Xe[Ve]=null}var Se=null,Kt=null,Nt=!1,wl=null,oa=!1,Tu=Error(s(519));function Sl(t){var e=Error(s(418,""));throw li(qe(e,t)),Tu}function Wf(t){var e=t.stateNode,a=t.type,n=t.memoizedProps;switch(e[ye]=t,e[Te]=n,a){case"dialog":Dt("cancel",e),Dt("close",e);break;case"iframe":case"object":case"embed":Dt("load",e);break;case"video":case"audio":for(a=0;a<ki.length;a++)Dt(ki[a],e);break;case"source":Dt("error",e);break;case"img":case"image":case"link":Dt("error",e),Dt("load",e);break;case"details":Dt("toggle",e);break;case"input":Dt("invalid",e),cf(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Ii(e);break;case"select":Dt("invalid",e);break;case"textarea":Dt("invalid",e),df(e,n.value,n.defaultValue,n.children),Ii(e)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||n.suppressHydrationWarning===!0||dp(e.textContent,a)?(n.popover!=null&&(Dt("beforetoggle",e),Dt("toggle",e)),n.onScroll!=null&&Dt("scroll",e),n.onScrollEnd!=null&&Dt("scrollend",e),n.onClick!=null&&(e.onclick=Vr),e=!0):e=!1,e||Sl(t)}function Jf(t){for(Se=t.return;Se;)switch(Se.tag){case 5:case 13:oa=!1;return;case 27:case 3:oa=!0;return;default:Se=Se.return}}function ei(t){if(t!==Se)return!1;if(!Nt)return Jf(t),Nt=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Ys(t.type,t.memoizedProps)),a=!a),a&&Kt&&Sl(t),Jf(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(e===0){Kt=Pe(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;t=t.nextSibling}Kt=null}}else e===27?(e=Kt,al(t.type)?(t=Xs,Xs=null,Kt=t):Kt=e):Kt=Se?Pe(t.stateNode.nextSibling):null;return!0}function ai(){Kt=Se=null,Nt=!1}function Ff(){var t=wl;return t!==null&&(Ce===null?Ce=t:Ce.push.apply(Ce,t),wl=null),t}function li(t){wl===null?wl=[t]:wl.push(t)}var Ru=Q(null),El=null,wa=null;function Ya(t,e,a){H(Ru,e._currentValue),e._currentValue=a}function Sa(t){t._currentValue=Ru.current,et(Ru)}function ku(t,e,a){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===a)break;t=t.return}}function Du(t,e,a,n){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var o=i.dependencies;if(o!==null){var f=i.child;o=o.firstContext;t:for(;o!==null;){var h=o;o=i;for(var S=0;S<e.length;S++)if(h.context===e[S]){o.lanes|=a,h=o.alternate,h!==null&&(h.lanes|=a),ku(o.return,a,t),n||(f=null);break t}o=h.next}}else if(i.tag===18){if(f=i.return,f===null)throw Error(s(341));f.lanes|=a,o=f.alternate,o!==null&&(o.lanes|=a),ku(f,a,t),f=null}else f=i.child;if(f!==null)f.return=i;else for(f=i;f!==null;){if(f===t){f=null;break}if(i=f.sibling,i!==null){i.return=f.return,f=i;break}f=f.return}i=f}}function ni(t,e,a,n){t=null;for(var i=e,o=!1;i!==null;){if(!o){if((i.flags&524288)!==0)o=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var f=i.alternate;if(f===null)throw Error(s(387));if(f=f.memoizedProps,f!==null){var h=i.type;Me(i.pendingProps.value,f.value)||(t!==null?t.push(h):t=[h])}}else if(i===st.current){if(f=i.alternate,f===null)throw Error(s(387));f.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Ni):t=[Ni])}i=i.return}t!==null&&Du(e,t,a,n),e.flags|=262144}function hr(t){for(t=t.firstContext;t!==null;){if(!Me(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Tl(t){El=t,wa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ve(t){return If(El,t)}function pr(t,e){return El===null&&Tl(t),If(t,e)}function If(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},wa===null){if(t===null)throw Error(s(308));wa=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else wa=wa.next=e;return a}var X0=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,n){t.push(n)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},V0=l.unstable_scheduleCallback,Z0=l.unstable_NormalPriority,le={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cu(){return{controller:new X0,data:new Map,refCount:0}}function ii(t){t.refCount--,t.refCount===0&&V0(Z0,function(){t.controller.abort()})}var ri=null,Ou=0,sn=0,cn=null;function K0(t,e){if(ri===null){var a=ri=[];Ou=0,sn=zs(),cn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Ou++,e.then(Pf,Pf),e}function Pf(){if(--Ou===0&&ri!==null){cn!==null&&(cn.status="fulfilled");var t=ri;ri=null,sn=0,cn=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function W0(t,e){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return t.then(function(){n.status="fulfilled",n.value=e;for(var i=0;i<a.length;i++)(0,a[i])(e)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var td=R.S;R.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&K0(t,e),td!==null&&td(t,e)};var Rl=Q(null);function Mu(){var t=Rl.current;return t!==null?t:Gt.pooledCache}function mr(t,e){e===null?H(Rl,Rl.current):H(Rl,e.pool)}function ed(){var t=Mu();return t===null?null:{parent:le._currentValue,pool:t}}var oi=Error(s(460)),ad=Error(s(474)),gr=Error(s(542)),zu={then:function(){}};function ld(t){return t=t.status,t==="fulfilled"||t==="rejected"}function br(){}function nd(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(br,br),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,rd(t),t;default:if(typeof e.status=="string")e.then(br,br);else{if(t=Gt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(n){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=n}},function(n){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,rd(t),t}throw ui=e,oi}}var ui=null;function id(){if(ui===null)throw Error(s(459));var t=ui;return ui=null,t}function rd(t){if(t===oi||t===gr)throw Error(s(483))}var Ga=!1;function Nu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ju(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function qa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Qa(t,e,a){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,(Bt&2)!==0){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,e=sr(t),Vf(t,null,a),e}return ur(t,n,e,a),sr(t)}function si(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,Ic(t,a)}}function _u(t,e){var a=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,o=null;if(a=a.firstBaseUpdate,a!==null){do{var f={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};o===null?i=o=f:o=o.next=f,a=a.next}while(a!==null);o===null?i=o=e:o=o.next=e}else i=o=e;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Bu=!1;function ci(){if(Bu){var t=cn;if(t!==null)throw t}}function fi(t,e,a,n){Bu=!1;var i=t.updateQueue;Ga=!1;var o=i.firstBaseUpdate,f=i.lastBaseUpdate,h=i.shared.pending;if(h!==null){i.shared.pending=null;var S=h,M=S.next;S.next=null,f===null?o=M:f.next=M,f=S;var X=t.alternate;X!==null&&(X=X.updateQueue,h=X.lastBaseUpdate,h!==f&&(h===null?X.firstBaseUpdate=M:h.next=M,X.lastBaseUpdate=S))}if(o!==null){var K=i.baseState;f=0,X=M=S=null,h=o;do{var z=h.lane&-536870913,N=z!==h.lane;if(N?(Mt&z)===z:(n&z)===z){z!==0&&z===sn&&(Bu=!0),X!==null&&(X=X.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});t:{var bt=t,pt=h;z=e;var $t=a;switch(pt.tag){case 1:if(bt=pt.payload,typeof bt=="function"){K=bt.call($t,K,z);break t}K=bt;break t;case 3:bt.flags=bt.flags&-65537|128;case 0:if(bt=pt.payload,z=typeof bt=="function"?bt.call($t,K,z):bt,z==null)break t;K=x({},K,z);break t;case 2:Ga=!0}}z=h.callback,z!==null&&(t.flags|=64,N&&(t.flags|=8192),N=i.callbacks,N===null?i.callbacks=[z]:N.push(z))}else N={lane:z,tag:h.tag,payload:h.payload,callback:h.callback,next:null},X===null?(M=X=N,S=K):X=X.next=N,f|=z;if(h=h.next,h===null){if(h=i.shared.pending,h===null)break;N=h,h=N.next,N.next=null,i.lastBaseUpdate=N,i.shared.pending=null}}while(!0);X===null&&(S=K),i.baseState=S,i.firstBaseUpdate=M,i.lastBaseUpdate=X,o===null&&(i.shared.lanes=0),Ia|=f,t.lanes=f,t.memoizedState=K}}function od(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function ud(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)od(a[t],e)}var fn=Q(null),yr=Q(0);function sd(t,e){t=Oa,H(yr,t),H(fn,e),Oa=t|e.baseLanes}function Hu(){H(yr,Oa),H(fn,fn.current)}function Uu(){Oa=yr.current,et(fn),et(yr)}var Xa=0,Et=null,Ut=null,Pt=null,vr=!1,dn=!1,kl=!1,xr=0,di=0,hn=null,J0=0;function Ft(){throw Error(s(321))}function Lu(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Me(t[a],e[a]))return!1;return!0}function $u(t,e,a,n,i,o){return Xa=o,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,R.H=t===null||t.memoizedState===null?Vd:Zd,kl=!1,o=a(n,i),kl=!1,dn&&(o=fd(e,a,n,i)),cd(t),o}function cd(t){R.H=Rr;var e=Ut!==null&&Ut.next!==null;if(Xa=0,Pt=Ut=Et=null,vr=!1,di=0,hn=null,e)throw Error(s(300));t===null||ue||(t=t.dependencies,t!==null&&hr(t)&&(ue=!0))}function fd(t,e,a,n){Et=t;var i=0;do{if(dn&&(hn=null),di=0,dn=!1,25<=i)throw Error(s(301));if(i+=1,Pt=Ut=null,t.updateQueue!=null){var o=t.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}R.H=lb,o=e(a,n)}while(dn);return o}function F0(){var t=R.H,e=t.useState()[0];return e=typeof e.then=="function"?hi(e):e,t=t.useState()[0],(Ut!==null?Ut.memoizedState:null)!==t&&(Et.flags|=1024),e}function Yu(){var t=xr!==0;return xr=0,t}function Gu(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function qu(t){if(vr){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}vr=!1}Xa=0,Pt=Ut=Et=null,dn=!1,di=xr=0,hn=null}function ke(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?Et.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function te(){if(Ut===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=Ut.next;var e=Pt===null?Et.memoizedState:Pt.next;if(e!==null)Pt=e,Ut=t;else{if(t===null)throw Et.alternate===null?Error(s(467)):Error(s(310));Ut=t,t={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},Pt===null?Et.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function Qu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hi(t){var e=di;return di+=1,hn===null&&(hn=[]),t=nd(hn,t,e),e=Et,(Pt===null?e.memoizedState:Pt.next)===null&&(e=e.alternate,R.H=e===null||e.memoizedState===null?Vd:Zd),t}function Ar(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return hi(t);if(t.$$typeof===G)return ve(t)}throw Error(s(438,String(t)))}function Xu(t){var e=null,a=Et.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var n=Et.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=Qu(),Et.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),n=0;n<t;n++)a[n]=Ot;return e.index++,a}function Ea(t,e){return typeof e=="function"?e(t):e}function wr(t){var e=te();return Vu(e,Ut,t)}function Vu(t,e,a){var n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=a;var i=t.baseQueue,o=n.pending;if(o!==null){if(i!==null){var f=i.next;i.next=o.next,o.next=f}e.baseQueue=i=o,n.pending=null}if(o=t.baseState,i===null)t.memoizedState=o;else{e=i.next;var h=f=null,S=null,M=e,X=!1;do{var K=M.lane&-536870913;if(K!==M.lane?(Mt&K)===K:(Xa&K)===K){var z=M.revertLane;if(z===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),K===sn&&(X=!0);else if((Xa&z)===z){M=M.next,z===sn&&(X=!0);continue}else K={lane:0,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},S===null?(h=S=K,f=o):S=S.next=K,Et.lanes|=z,Ia|=z;K=M.action,kl&&a(o,K),o=M.hasEagerState?M.eagerState:a(o,K)}else z={lane:K,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},S===null?(h=S=z,f=o):S=S.next=z,Et.lanes|=K,Ia|=K;M=M.next}while(M!==null&&M!==e);if(S===null?f=o:S.next=h,!Me(o,t.memoizedState)&&(ue=!0,X&&(a=cn,a!==null)))throw a;t.memoizedState=o,t.baseState=f,t.baseQueue=S,n.lastRenderedState=o}return i===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function Zu(t){var e=te(),a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var n=a.dispatch,i=a.pending,o=e.memoizedState;if(i!==null){a.pending=null;var f=i=i.next;do o=t(o,f.action),f=f.next;while(f!==i);Me(o,e.memoizedState)||(ue=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),a.lastRenderedState=o}return[o,n]}function dd(t,e,a){var n=Et,i=te(),o=Nt;if(o){if(a===void 0)throw Error(s(407));a=a()}else a=e();var f=!Me((Ut||i).memoizedState,a);f&&(i.memoizedState=a,ue=!0),i=i.queue;var h=md.bind(null,n,i,t);if(pi(2048,8,h,[t]),i.getSnapshot!==e||f||Pt!==null&&Pt.memoizedState.tag&1){if(n.flags|=2048,pn(9,Sr(),pd.bind(null,n,i,a,e),null),Gt===null)throw Error(s(349));o||(Xa&124)!==0||hd(n,e,a)}return a}function hd(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=Et.updateQueue,e===null?(e=Qu(),Et.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function pd(t,e,a,n){e.value=a,e.getSnapshot=n,gd(e)&&bd(t)}function md(t,e,a){return a(function(){gd(e)&&bd(t)})}function gd(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Me(t,a)}catch{return!0}}function bd(t){var e=nn(t,2);e!==null&&He(e,t,2)}function Ku(t){var e=ke();if(typeof t=="function"){var a=t;if(t=a(),kl){ra(!0);try{a()}finally{ra(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},e}function yd(t,e,a,n){return t.baseState=a,Vu(t,Ut,typeof n=="function"?n:Ea)}function I0(t,e,a,n,i){if(Tr(t))throw Error(s(485));if(t=e.action,t!==null){var o={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){o.listeners.push(f)}};R.T!==null?a(!0):o.isTransition=!1,n(o),a=e.pending,a===null?(o.next=e.pending=o,vd(e,o)):(o.next=a.next,e.pending=a.next=o)}}function vd(t,e){var a=e.action,n=e.payload,i=t.state;if(e.isTransition){var o=R.T,f={};R.T=f;try{var h=a(i,n),S=R.S;S!==null&&S(f,h),xd(t,e,h)}catch(M){Wu(t,e,M)}finally{R.T=o}}else try{o=a(i,n),xd(t,e,o)}catch(M){Wu(t,e,M)}}function xd(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Ad(t,e,n)},function(n){return Wu(t,e,n)}):Ad(t,e,a)}function Ad(t,e,a){e.status="fulfilled",e.value=a,wd(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,vd(t,a)))}function Wu(t,e,a){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=a,wd(e),e=e.next;while(e!==n)}t.action=null}function wd(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Sd(t,e){return e}function Ed(t,e){if(Nt){var a=Gt.formState;if(a!==null){t:{var n=Et;if(Nt){if(Kt){e:{for(var i=Kt,o=oa;i.nodeType!==8;){if(!o){i=null;break e}if(i=Pe(i.nextSibling),i===null){i=null;break e}}o=i.data,i=o==="F!"||o==="F"?i:null}if(i){Kt=Pe(i.nextSibling),n=i.data==="F!";break t}}Sl(n)}n=!1}n&&(e=a[0])}}return a=ke(),a.memoizedState=a.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sd,lastRenderedState:e},a.queue=n,a=qd.bind(null,Et,n),n.dispatch=a,n=Ku(!1),o=ts.bind(null,Et,!1,n.queue),n=ke(),i={state:e,dispatch:null,action:t,pending:null},n.queue=i,a=I0.bind(null,Et,i,o,a),i.dispatch=a,n.memoizedState=t,[e,a,!1]}function Td(t){var e=te();return Rd(e,Ut,t)}function Rd(t,e,a){if(e=Vu(t,e,Sd)[0],t=wr(Ea)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=hi(e)}catch(f){throw f===oi?gr:f}else n=e;e=te();var i=e.queue,o=i.dispatch;return a!==e.memoizedState&&(Et.flags|=2048,pn(9,Sr(),P0.bind(null,i,a),null)),[n,o,t]}function P0(t,e){t.action=e}function kd(t){var e=te(),a=Ut;if(a!==null)return Rd(e,a,t);te(),e=e.memoizedState,a=te();var n=a.queue.dispatch;return a.memoizedState=t,[e,n,!1]}function pn(t,e,a,n){return t={tag:t,create:a,deps:n,inst:e,next:null},e=Et.updateQueue,e===null&&(e=Qu(),Et.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(n=a.next,a.next=t,t.next=n,e.lastEffect=t),t}function Sr(){return{destroy:void 0,resource:void 0}}function Dd(){return te().memoizedState}function Er(t,e,a,n){var i=ke();n=n===void 0?null:n,Et.flags|=t,i.memoizedState=pn(1|e,Sr(),a,n)}function pi(t,e,a,n){var i=te();n=n===void 0?null:n;var o=i.memoizedState.inst;Ut!==null&&n!==null&&Lu(n,Ut.memoizedState.deps)?i.memoizedState=pn(e,o,a,n):(Et.flags|=t,i.memoizedState=pn(1|e,o,a,n))}function Cd(t,e){Er(8390656,8,t,e)}function Od(t,e){pi(2048,8,t,e)}function Md(t,e){return pi(4,2,t,e)}function zd(t,e){return pi(4,4,t,e)}function Nd(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function jd(t,e,a){a=a!=null?a.concat([t]):null,pi(4,4,Nd.bind(null,e,t),a)}function Ju(){}function _d(t,e){var a=te();e=e===void 0?null:e;var n=a.memoizedState;return e!==null&&Lu(e,n[1])?n[0]:(a.memoizedState=[t,e],t)}function Bd(t,e){var a=te();e=e===void 0?null:e;var n=a.memoizedState;if(e!==null&&Lu(e,n[1]))return n[0];if(n=t(),kl){ra(!0);try{t()}finally{ra(!1)}}return a.memoizedState=[n,e],n}function Fu(t,e,a){return a===void 0||(Xa&1073741824)!==0?t.memoizedState=e:(t.memoizedState=a,t=Lh(),Et.lanes|=t,Ia|=t,a)}function Hd(t,e,a,n){return Me(a,e)?a:fn.current!==null?(t=Fu(t,a,n),Me(t,e)||(ue=!0),t):(Xa&42)===0?(ue=!0,t.memoizedState=a):(t=Lh(),Et.lanes|=t,Ia|=t,e)}function Ud(t,e,a,n,i){var o=L.p;L.p=o!==0&&8>o?o:8;var f=R.T,h={};R.T=h,ts(t,!1,e,a);try{var S=i(),M=R.S;if(M!==null&&M(h,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var X=W0(S,n);mi(t,e,X,Be(t))}else mi(t,e,n,Be(t))}catch(K){mi(t,e,{then:function(){},status:"rejected",reason:K},Be())}finally{L.p=o,R.T=f}}function tb(){}function Iu(t,e,a,n){if(t.tag!==5)throw Error(s(476));var i=Ld(t).queue;Ud(t,i,e,q,a===null?tb:function(){return $d(t),a(n)})}function Ld(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:q},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function $d(t){var e=Ld(t).next.queue;mi(t,e,{},Be())}function Pu(){return ve(Ni)}function Yd(){return te().memoizedState}function Gd(){return te().memoizedState}function eb(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Be();t=qa(a);var n=Qa(e,t,a);n!==null&&(He(n,e,a),si(n,e,a)),e={cache:Cu()},t.payload=e;return}e=e.return}}function ab(t,e,a){var n=Be();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Tr(t)?Qd(e,a):(a=vu(t,e,a,n),a!==null&&(He(a,t,n),Xd(a,e,n)))}function qd(t,e,a){var n=Be();mi(t,e,a,n)}function mi(t,e,a,n){var i={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tr(t))Qd(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var f=e.lastRenderedState,h=o(f,a);if(i.hasEagerState=!0,i.eagerState=h,Me(h,f))return ur(t,e,i,0),Gt===null&&or(),!1}catch{}finally{}if(a=vu(t,e,i,n),a!==null)return He(a,t,n),Xd(a,e,n),!0}return!1}function ts(t,e,a,n){if(n={lane:2,revertLane:zs(),action:n,hasEagerState:!1,eagerState:null,next:null},Tr(t)){if(e)throw Error(s(479))}else e=vu(t,a,n,2),e!==null&&He(e,t,2)}function Tr(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function Qd(t,e){dn=vr=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Xd(t,e,a){if((a&4194048)!==0){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,Ic(t,a)}}var Rr={readContext:ve,use:Ar,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useLayoutEffect:Ft,useInsertionEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useSyncExternalStore:Ft,useId:Ft,useHostTransitionStatus:Ft,useFormState:Ft,useActionState:Ft,useOptimistic:Ft,useMemoCache:Ft,useCacheRefresh:Ft},Vd={readContext:ve,use:Ar,useCallback:function(t,e){return ke().memoizedState=[t,e===void 0?null:e],t},useContext:ve,useEffect:Cd,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Er(4194308,4,Nd.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Er(4194308,4,t,e)},useInsertionEffect:function(t,e){Er(4,2,t,e)},useMemo:function(t,e){var a=ke();e=e===void 0?null:e;var n=t();if(kl){ra(!0);try{t()}finally{ra(!1)}}return a.memoizedState=[n,e],n},useReducer:function(t,e,a){var n=ke();if(a!==void 0){var i=a(e);if(kl){ra(!0);try{a(e)}finally{ra(!1)}}}else i=e;return n.memoizedState=n.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},n.queue=t,t=t.dispatch=ab.bind(null,Et,t),[n.memoizedState,t]},useRef:function(t){var e=ke();return t={current:t},e.memoizedState=t},useState:function(t){t=Ku(t);var e=t.queue,a=qd.bind(null,Et,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:Ju,useDeferredValue:function(t,e){var a=ke();return Fu(a,t,e)},useTransition:function(){var t=Ku(!1);return t=Ud.bind(null,Et,t.queue,!0,!1),ke().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var n=Et,i=ke();if(Nt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=e(),Gt===null)throw Error(s(349));(Mt&124)!==0||hd(n,e,a)}i.memoizedState=a;var o={value:a,getSnapshot:e};return i.queue=o,Cd(md.bind(null,n,o,t),[t]),n.flags|=2048,pn(9,Sr(),pd.bind(null,n,o,a,e),null),a},useId:function(){var t=ke(),e=Gt.identifierPrefix;if(Nt){var a=Aa,n=xa;a=(n&~(1<<32-we(n)-1)).toString(32)+a,e="«"+e+"R"+a,a=xr++,0<a&&(e+="H"+a.toString(32)),e+="»"}else a=J0++,e="«"+e+"r"+a.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:Pu,useFormState:Ed,useActionState:Ed,useOptimistic:function(t){var e=ke();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=ts.bind(null,Et,!0,a),a.dispatch=e,[t,e]},useMemoCache:Xu,useCacheRefresh:function(){return ke().memoizedState=eb.bind(null,Et)}},Zd={readContext:ve,use:Ar,useCallback:_d,useContext:ve,useEffect:Od,useImperativeHandle:jd,useInsertionEffect:Md,useLayoutEffect:zd,useMemo:Bd,useReducer:wr,useRef:Dd,useState:function(){return wr(Ea)},useDebugValue:Ju,useDeferredValue:function(t,e){var a=te();return Hd(a,Ut.memoizedState,t,e)},useTransition:function(){var t=wr(Ea)[0],e=te().memoizedState;return[typeof t=="boolean"?t:hi(t),e]},useSyncExternalStore:dd,useId:Yd,useHostTransitionStatus:Pu,useFormState:Td,useActionState:Td,useOptimistic:function(t,e){var a=te();return yd(a,Ut,t,e)},useMemoCache:Xu,useCacheRefresh:Gd},lb={readContext:ve,use:Ar,useCallback:_d,useContext:ve,useEffect:Od,useImperativeHandle:jd,useInsertionEffect:Md,useLayoutEffect:zd,useMemo:Bd,useReducer:Zu,useRef:Dd,useState:function(){return Zu(Ea)},useDebugValue:Ju,useDeferredValue:function(t,e){var a=te();return Ut===null?Fu(a,t,e):Hd(a,Ut.memoizedState,t,e)},useTransition:function(){var t=Zu(Ea)[0],e=te().memoizedState;return[typeof t=="boolean"?t:hi(t),e]},useSyncExternalStore:dd,useId:Yd,useHostTransitionStatus:Pu,useFormState:kd,useActionState:kd,useOptimistic:function(t,e){var a=te();return Ut!==null?yd(a,Ut,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Xu,useCacheRefresh:Gd},mn=null,gi=0;function kr(t){var e=gi;return gi+=1,mn===null&&(mn=[]),nd(mn,t,e)}function bi(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Dr(t,e){throw e.$$typeof===E?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Kd(t){var e=t._init;return e(t._payload)}function Wd(t){function e(k,T){if(t){var C=k.deletions;C===null?(k.deletions=[T],k.flags|=16):C.push(T)}}function a(k,T){if(!t)return null;for(;T!==null;)e(k,T),T=T.sibling;return null}function n(k){for(var T=new Map;k!==null;)k.key!==null?T.set(k.key,k):T.set(k.index,k),k=k.sibling;return T}function i(k,T){return k=va(k,T),k.index=0,k.sibling=null,k}function o(k,T,C){return k.index=C,t?(C=k.alternate,C!==null?(C=C.index,C<T?(k.flags|=67108866,T):C):(k.flags|=67108866,T)):(k.flags|=1048576,T)}function f(k){return t&&k.alternate===null&&(k.flags|=67108866),k}function h(k,T,C,Z){return T===null||T.tag!==6?(T=Au(C,k.mode,Z),T.return=k,T):(T=i(T,C),T.return=k,T)}function S(k,T,C,Z){var ut=C.type;return ut===Y?X(k,T,C.props.children,Z,C.key):T!==null&&(T.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===yt&&Kd(ut)===T.type)?(T=i(T,C.props),bi(T,C),T.return=k,T):(T=cr(C.type,C.key,C.props,null,k.mode,Z),bi(T,C),T.return=k,T)}function M(k,T,C,Z){return T===null||T.tag!==4||T.stateNode.containerInfo!==C.containerInfo||T.stateNode.implementation!==C.implementation?(T=wu(C,k.mode,Z),T.return=k,T):(T=i(T,C.children||[]),T.return=k,T)}function X(k,T,C,Z,ut){return T===null||T.tag!==7?(T=vl(C,k.mode,Z,ut),T.return=k,T):(T=i(T,C),T.return=k,T)}function K(k,T,C){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=Au(""+T,k.mode,C),T.return=k,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case O:return C=cr(T.type,T.key,T.props,null,k.mode,C),bi(C,T),C.return=k,C;case U:return T=wu(T,k.mode,C),T.return=k,T;case yt:var Z=T._init;return T=Z(T._payload),K(k,T,C)}if(D(T)||vt(T))return T=vl(T,k.mode,C,null),T.return=k,T;if(typeof T.then=="function")return K(k,kr(T),C);if(T.$$typeof===G)return K(k,pr(k,T),C);Dr(k,T)}return null}function z(k,T,C,Z){var ut=T!==null?T.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return ut!==null?null:h(k,T,""+C,Z);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case O:return C.key===ut?S(k,T,C,Z):null;case U:return C.key===ut?M(k,T,C,Z):null;case yt:return ut=C._init,C=ut(C._payload),z(k,T,C,Z)}if(D(C)||vt(C))return ut!==null?null:X(k,T,C,Z,null);if(typeof C.then=="function")return z(k,T,kr(C),Z);if(C.$$typeof===G)return z(k,T,pr(k,C),Z);Dr(k,C)}return null}function N(k,T,C,Z,ut){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return k=k.get(C)||null,h(T,k,""+Z,ut);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case O:return k=k.get(Z.key===null?C:Z.key)||null,S(T,k,Z,ut);case U:return k=k.get(Z.key===null?C:Z.key)||null,M(T,k,Z,ut);case yt:var Tt=Z._init;return Z=Tt(Z._payload),N(k,T,C,Z,ut)}if(D(Z)||vt(Z))return k=k.get(C)||null,X(T,k,Z,ut,null);if(typeof Z.then=="function")return N(k,T,C,kr(Z),ut);if(Z.$$typeof===G)return N(k,T,C,pr(T,Z),ut);Dr(T,Z)}return null}function bt(k,T,C,Z){for(var ut=null,Tt=null,ct=T,mt=T=0,ce=null;ct!==null&&mt<C.length;mt++){ct.index>mt?(ce=ct,ct=null):ce=ct.sibling;var zt=z(k,ct,C[mt],Z);if(zt===null){ct===null&&(ct=ce);break}t&&ct&&zt.alternate===null&&e(k,ct),T=o(zt,T,mt),Tt===null?ut=zt:Tt.sibling=zt,Tt=zt,ct=ce}if(mt===C.length)return a(k,ct),Nt&&Al(k,mt),ut;if(ct===null){for(;mt<C.length;mt++)ct=K(k,C[mt],Z),ct!==null&&(T=o(ct,T,mt),Tt===null?ut=ct:Tt.sibling=ct,Tt=ct);return Nt&&Al(k,mt),ut}for(ct=n(ct);mt<C.length;mt++)ce=N(ct,k,mt,C[mt],Z),ce!==null&&(t&&ce.alternate!==null&&ct.delete(ce.key===null?mt:ce.key),T=o(ce,T,mt),Tt===null?ut=ce:Tt.sibling=ce,Tt=ce);return t&&ct.forEach(function(ol){return e(k,ol)}),Nt&&Al(k,mt),ut}function pt(k,T,C,Z){if(C==null)throw Error(s(151));for(var ut=null,Tt=null,ct=T,mt=T=0,ce=null,zt=C.next();ct!==null&&!zt.done;mt++,zt=C.next()){ct.index>mt?(ce=ct,ct=null):ce=ct.sibling;var ol=z(k,ct,zt.value,Z);if(ol===null){ct===null&&(ct=ce);break}t&&ct&&ol.alternate===null&&e(k,ct),T=o(ol,T,mt),Tt===null?ut=ol:Tt.sibling=ol,Tt=ol,ct=ce}if(zt.done)return a(k,ct),Nt&&Al(k,mt),ut;if(ct===null){for(;!zt.done;mt++,zt=C.next())zt=K(k,zt.value,Z),zt!==null&&(T=o(zt,T,mt),Tt===null?ut=zt:Tt.sibling=zt,Tt=zt);return Nt&&Al(k,mt),ut}for(ct=n(ct);!zt.done;mt++,zt=C.next())zt=N(ct,k,mt,zt.value,Z),zt!==null&&(t&&zt.alternate!==null&&ct.delete(zt.key===null?mt:zt.key),T=o(zt,T,mt),Tt===null?ut=zt:Tt.sibling=zt,Tt=zt);return t&&ct.forEach(function(ny){return e(k,ny)}),Nt&&Al(k,mt),ut}function $t(k,T,C,Z){if(typeof C=="object"&&C!==null&&C.type===Y&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case O:t:{for(var ut=C.key;T!==null;){if(T.key===ut){if(ut=C.type,ut===Y){if(T.tag===7){a(k,T.sibling),Z=i(T,C.props.children),Z.return=k,k=Z;break t}}else if(T.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===yt&&Kd(ut)===T.type){a(k,T.sibling),Z=i(T,C.props),bi(Z,C),Z.return=k,k=Z;break t}a(k,T);break}else e(k,T);T=T.sibling}C.type===Y?(Z=vl(C.props.children,k.mode,Z,C.key),Z.return=k,k=Z):(Z=cr(C.type,C.key,C.props,null,k.mode,Z),bi(Z,C),Z.return=k,k=Z)}return f(k);case U:t:{for(ut=C.key;T!==null;){if(T.key===ut)if(T.tag===4&&T.stateNode.containerInfo===C.containerInfo&&T.stateNode.implementation===C.implementation){a(k,T.sibling),Z=i(T,C.children||[]),Z.return=k,k=Z;break t}else{a(k,T);break}else e(k,T);T=T.sibling}Z=wu(C,k.mode,Z),Z.return=k,k=Z}return f(k);case yt:return ut=C._init,C=ut(C._payload),$t(k,T,C,Z)}if(D(C))return bt(k,T,C,Z);if(vt(C)){if(ut=vt(C),typeof ut!="function")throw Error(s(150));return C=ut.call(C),pt(k,T,C,Z)}if(typeof C.then=="function")return $t(k,T,kr(C),Z);if(C.$$typeof===G)return $t(k,T,pr(k,C),Z);Dr(k,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,T!==null&&T.tag===6?(a(k,T.sibling),Z=i(T,C),Z.return=k,k=Z):(a(k,T),Z=Au(C,k.mode,Z),Z.return=k,k=Z),f(k)):a(k,T)}return function(k,T,C,Z){try{gi=0;var ut=$t(k,T,C,Z);return mn=null,ut}catch(ct){if(ct===oi||ct===gr)throw ct;var Tt=ze(29,ct,null,k.mode);return Tt.lanes=Z,Tt.return=k,Tt}finally{}}}var gn=Wd(!0),Jd=Wd(!1),Ze=Q(null),ua=null;function Va(t){var e=t.alternate;H(ne,ne.current&1),H(Ze,t),ua===null&&(e===null||fn.current!==null||e.memoizedState!==null)&&(ua=t)}function Fd(t){if(t.tag===22){if(H(ne,ne.current),H(Ze,t),ua===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(ua=t)}}else Za()}function Za(){H(ne,ne.current),H(Ze,Ze.current)}function Ta(t){et(Ze),ua===t&&(ua=null),et(ne)}var ne=Q(0);function Cr(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Qs(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function es(t,e,a,n){e=t.memoizedState,a=a(n,e),a=a==null?e:x({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var as={enqueueSetState:function(t,e,a){t=t._reactInternals;var n=Be(),i=qa(n);i.payload=e,a!=null&&(i.callback=a),e=Qa(t,i,n),e!==null&&(He(e,t,n),si(e,t,n))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var n=Be(),i=qa(n);i.tag=1,i.payload=e,a!=null&&(i.callback=a),e=Qa(t,i,n),e!==null&&(He(e,t,n),si(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Be(),n=qa(a);n.tag=2,e!=null&&(n.callback=e),e=Qa(t,n,a),e!==null&&(He(e,t,a),si(e,t,a))}};function Id(t,e,a,n,i,o,f){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,o,f):e.prototype&&e.prototype.isPureReactComponent?!Pn(a,n)||!Pn(i,o):!0}function Pd(t,e,a,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,n),e.state!==t&&as.enqueueReplaceState(e,e.state,null)}function Dl(t,e){var a=e;if("ref"in e){a={};for(var n in e)n!=="ref"&&(a[n]=e[n])}if(t=t.defaultProps){a===e&&(a=x({},a));for(var i in t)a[i]===void 0&&(a[i]=t[i])}return a}var Or=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function th(t){Or(t)}function eh(t){console.error(t)}function ah(t){Or(t)}function Mr(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function lh(t,e,a){try{var n=t.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function ls(t,e,a){return a=qa(a),a.tag=3,a.payload={element:null},a.callback=function(){Mr(t,e)},a}function nh(t){return t=qa(t),t.tag=3,t}function ih(t,e,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var o=n.value;t.payload=function(){return i(o)},t.callback=function(){lh(e,a,n)}}var f=a.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(t.callback=function(){lh(e,a,n),typeof i!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var h=n.stack;this.componentDidCatch(n.value,{componentStack:h!==null?h:""})})}function nb(t,e,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=a.alternate,e!==null&&ni(e,a,i,!0),a=Ze.current,a!==null){switch(a.tag){case 13:return ua===null?ks():a.alternate===null&&Wt===0&&(Wt=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===zu?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([n]):e.add(n),Cs(t,n,i)),!1;case 22:return a.flags|=65536,n===zu?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([n]):a.add(n)),Cs(t,n,i)),!1}throw Error(s(435,a.tag))}return Cs(t,n,i),ks(),!1}if(Nt)return e=Ze.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,n!==Tu&&(t=Error(s(422),{cause:n}),li(qe(t,a)))):(n!==Tu&&(e=Error(s(423),{cause:n}),li(qe(e,a))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,n=qe(n,a),i=ls(t.stateNode,n,i),_u(t,i),Wt!==4&&(Wt=2)),!1;var o=Error(s(520),{cause:n});if(o=qe(o,a),Ei===null?Ei=[o]:Ei.push(o),Wt!==4&&(Wt=2),e===null)return!0;n=qe(n,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=i&-i,a.lanes|=t,t=ls(a.stateNode,n,t),_u(a,t),!1;case 1:if(e=a.type,o=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(Pa===null||!Pa.has(o))))return a.flags|=65536,i&=-i,a.lanes|=i,i=nh(i),ih(i,t,a,n),_u(a,i),!1}a=a.return}while(a!==null);return!1}var rh=Error(s(461)),ue=!1;function he(t,e,a,n){e.child=t===null?Jd(e,null,a,n):gn(e,t.child,a,n)}function oh(t,e,a,n,i){a=a.render;var o=e.ref;if("ref"in n){var f={};for(var h in n)h!=="ref"&&(f[h]=n[h])}else f=n;return Tl(e),n=$u(t,e,a,f,o,i),h=Yu(),t!==null&&!ue?(Gu(t,e,i),Ra(t,e,i)):(Nt&&h&&Su(e),e.flags|=1,he(t,e,n,i),e.child)}function uh(t,e,a,n,i){if(t===null){var o=a.type;return typeof o=="function"&&!xu(o)&&o.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=o,sh(t,e,o,n,i)):(t=cr(a.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!fs(t,i)){var f=o.memoizedProps;if(a=a.compare,a=a!==null?a:Pn,a(f,n)&&t.ref===e.ref)return Ra(t,e,i)}return e.flags|=1,t=va(o,n),t.ref=e.ref,t.return=e,e.child=t}function sh(t,e,a,n,i){if(t!==null){var o=t.memoizedProps;if(Pn(o,n)&&t.ref===e.ref)if(ue=!1,e.pendingProps=n=o,fs(t,i))(t.flags&131072)!==0&&(ue=!0);else return e.lanes=t.lanes,Ra(t,e,i)}return ns(t,e,a,n,i)}function ch(t,e,a){var n=e.pendingProps,i=n.children,o=t!==null?t.memoizedState:null;if(n.mode==="hidden"){if((e.flags&128)!==0){if(n=o!==null?o.baseLanes|a:a,t!==null){for(i=e.child=t.child,o=0;i!==null;)o=o|i.lanes|i.childLanes,i=i.sibling;e.childLanes=o&~n}else e.childLanes=0,e.child=null;return fh(t,e,n,a)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&mr(e,o!==null?o.cachePool:null),o!==null?sd(e,o):Hu(),Fd(e);else return e.lanes=e.childLanes=536870912,fh(t,e,o!==null?o.baseLanes|a:a,a)}else o!==null?(mr(e,o.cachePool),sd(e,o),Za(),e.memoizedState=null):(t!==null&&mr(e,null),Hu(),Za());return he(t,e,i,a),e.child}function fh(t,e,a,n){var i=Mu();return i=i===null?null:{parent:le._currentValue,pool:i},e.memoizedState={baseLanes:a,cachePool:i},t!==null&&mr(e,null),Hu(),Fd(e),t!==null&&ni(t,e,n,!0),null}function zr(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function ns(t,e,a,n,i){return Tl(e),a=$u(t,e,a,n,void 0,i),n=Yu(),t!==null&&!ue?(Gu(t,e,i),Ra(t,e,i)):(Nt&&n&&Su(e),e.flags|=1,he(t,e,a,i),e.child)}function dh(t,e,a,n,i,o){return Tl(e),e.updateQueue=null,a=fd(e,n,a,i),cd(t),n=Yu(),t!==null&&!ue?(Gu(t,e,o),Ra(t,e,o)):(Nt&&n&&Su(e),e.flags|=1,he(t,e,a,o),e.child)}function hh(t,e,a,n,i){if(Tl(e),e.stateNode===null){var o=rn,f=a.contextType;typeof f=="object"&&f!==null&&(o=ve(f)),o=new a(n,o),e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=as,e.stateNode=o,o._reactInternals=e,o=e.stateNode,o.props=n,o.state=e.memoizedState,o.refs={},Nu(e),f=a.contextType,o.context=typeof f=="object"&&f!==null?ve(f):rn,o.state=e.memoizedState,f=a.getDerivedStateFromProps,typeof f=="function"&&(es(e,a,f,n),o.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(f=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),f!==o.state&&as.enqueueReplaceState(o,o.state,null),fi(e,n,o,i),ci(),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(t===null){o=e.stateNode;var h=e.memoizedProps,S=Dl(a,h);o.props=S;var M=o.context,X=a.contextType;f=rn,typeof X=="object"&&X!==null&&(f=ve(X));var K=a.getDerivedStateFromProps;X=typeof K=="function"||typeof o.getSnapshotBeforeUpdate=="function",h=e.pendingProps!==h,X||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(h||M!==f)&&Pd(e,o,n,f),Ga=!1;var z=e.memoizedState;o.state=z,fi(e,n,o,i),ci(),M=e.memoizedState,h||z!==M||Ga?(typeof K=="function"&&(es(e,a,K,n),M=e.memoizedState),(S=Ga||Id(e,a,S,n,z,M,f))?(X||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=M),o.props=n,o.state=M,o.context=f,n=S):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{o=e.stateNode,ju(t,e),f=e.memoizedProps,X=Dl(a,f),o.props=X,K=e.pendingProps,z=o.context,M=a.contextType,S=rn,typeof M=="object"&&M!==null&&(S=ve(M)),h=a.getDerivedStateFromProps,(M=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(f!==K||z!==S)&&Pd(e,o,n,S),Ga=!1,z=e.memoizedState,o.state=z,fi(e,n,o,i),ci();var N=e.memoizedState;f!==K||z!==N||Ga||t!==null&&t.dependencies!==null&&hr(t.dependencies)?(typeof h=="function"&&(es(e,a,h,n),N=e.memoizedState),(X=Ga||Id(e,a,X,n,z,N,S)||t!==null&&t.dependencies!==null&&hr(t.dependencies))?(M||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,N,S),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,N,S)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||f===t.memoizedProps&&z===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||f===t.memoizedProps&&z===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=N),o.props=n,o.state=N,o.context=S,n=X):(typeof o.componentDidUpdate!="function"||f===t.memoizedProps&&z===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||f===t.memoizedProps&&z===t.memoizedState||(e.flags|=1024),n=!1)}return o=n,zr(t,e),n=(e.flags&128)!==0,o||n?(o=e.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:o.render(),e.flags|=1,t!==null&&n?(e.child=gn(e,t.child,null,i),e.child=gn(e,null,a,i)):he(t,e,a,i),e.memoizedState=o.state,t=e.child):t=Ra(t,e,i),t}function ph(t,e,a,n){return ai(),e.flags|=256,he(t,e,a,n),e.child}var is={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rs(t){return{baseLanes:t,cachePool:ed()}}function os(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=Ke),t}function mh(t,e,a){var n=e.pendingProps,i=!1,o=(e.flags&128)!==0,f;if((f=o)||(f=t!==null&&t.memoizedState===null?!1:(ne.current&2)!==0),f&&(i=!0,e.flags&=-129),f=(e.flags&32)!==0,e.flags&=-33,t===null){if(Nt){if(i?Va(e):Za(),Nt){var h=Kt,S;if(S=h){t:{for(S=h,h=oa;S.nodeType!==8;){if(!h){h=null;break t}if(S=Pe(S.nextSibling),S===null){h=null;break t}}h=S}h!==null?(e.memoizedState={dehydrated:h,treeContext:xl!==null?{id:xa,overflow:Aa}:null,retryLane:536870912,hydrationErrors:null},S=ze(18,null,null,0),S.stateNode=h,S.return=e,e.child=S,Se=e,Kt=null,S=!0):S=!1}S||Sl(e)}if(h=e.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return Qs(h)?e.lanes=32:e.lanes=536870912,null;Ta(e)}return h=n.children,n=n.fallback,i?(Za(),i=e.mode,h=Nr({mode:"hidden",children:h},i),n=vl(n,i,a,null),h.return=e,n.return=e,h.sibling=n,e.child=h,i=e.child,i.memoizedState=rs(a),i.childLanes=os(t,f,a),e.memoizedState=is,n):(Va(e),us(e,h))}if(S=t.memoizedState,S!==null&&(h=S.dehydrated,h!==null)){if(o)e.flags&256?(Va(e),e.flags&=-257,e=ss(t,e,a)):e.memoizedState!==null?(Za(),e.child=t.child,e.flags|=128,e=null):(Za(),i=n.fallback,h=e.mode,n=Nr({mode:"visible",children:n.children},h),i=vl(i,h,a,null),i.flags|=2,n.return=e,i.return=e,n.sibling=i,e.child=n,gn(e,t.child,null,a),n=e.child,n.memoizedState=rs(a),n.childLanes=os(t,f,a),e.memoizedState=is,e=i);else if(Va(e),Qs(h)){if(f=h.nextSibling&&h.nextSibling.dataset,f)var M=f.dgst;f=M,n=Error(s(419)),n.stack="",n.digest=f,li({value:n,source:null,stack:null}),e=ss(t,e,a)}else if(ue||ni(t,e,a,!1),f=(a&t.childLanes)!==0,ue||f){if(f=Gt,f!==null&&(n=a&-a,n=(n&42)!==0?1:Xo(n),n=(n&(f.suspendedLanes|a))!==0?0:n,n!==0&&n!==S.retryLane))throw S.retryLane=n,nn(t,n),He(f,t,n),rh;h.data==="$?"||ks(),e=ss(t,e,a)}else h.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=S.treeContext,Kt=Pe(h.nextSibling),Se=e,Nt=!0,wl=null,oa=!1,t!==null&&(Xe[Ve++]=xa,Xe[Ve++]=Aa,Xe[Ve++]=xl,xa=t.id,Aa=t.overflow,xl=e),e=us(e,n.children),e.flags|=4096);return e}return i?(Za(),i=n.fallback,h=e.mode,S=t.child,M=S.sibling,n=va(S,{mode:"hidden",children:n.children}),n.subtreeFlags=S.subtreeFlags&65011712,M!==null?i=va(M,i):(i=vl(i,h,a,null),i.flags|=2),i.return=e,n.return=e,n.sibling=i,e.child=n,n=i,i=e.child,h=t.child.memoizedState,h===null?h=rs(a):(S=h.cachePool,S!==null?(M=le._currentValue,S=S.parent!==M?{parent:M,pool:M}:S):S=ed(),h={baseLanes:h.baseLanes|a,cachePool:S}),i.memoizedState=h,i.childLanes=os(t,f,a),e.memoizedState=is,n):(Va(e),a=t.child,t=a.sibling,a=va(a,{mode:"visible",children:n.children}),a.return=e,a.sibling=null,t!==null&&(f=e.deletions,f===null?(e.deletions=[t],e.flags|=16):f.push(t)),e.child=a,e.memoizedState=null,a)}function us(t,e){return e=Nr({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Nr(t,e){return t=ze(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function ss(t,e,a){return gn(e,t.child,null,a),t=us(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function gh(t,e,a){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),ku(t.return,e,a)}function cs(t,e,a,n,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=a,o.tailMode=i)}function bh(t,e,a){var n=e.pendingProps,i=n.revealOrder,o=n.tail;if(he(t,e,n.children,a),n=ne.current,(n&2)!==0)n=n&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gh(t,a,e);else if(t.tag===19)gh(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}switch(H(ne,n),i){case"forwards":for(a=e.child,i=null;a!==null;)t=a.alternate,t!==null&&Cr(t)===null&&(i=a),a=a.sibling;a=i,a===null?(i=e.child,e.child=null):(i=a.sibling,a.sibling=null),cs(e,!1,i,a,o);break;case"backwards":for(a=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Cr(t)===null){e.child=i;break}t=i.sibling,i.sibling=a,a=i,i=t}cs(e,!0,a,null,o);break;case"together":cs(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ra(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),Ia|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(ni(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,a=va(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=va(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function fs(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&hr(t)))}function ib(t,e,a){switch(e.tag){case 3:dt(e,e.stateNode.containerInfo),Ya(e,le,t.memoizedState.cache),ai();break;case 27:case 5:gt(e);break;case 4:dt(e,e.stateNode.containerInfo);break;case 10:Ya(e,e.type,e.memoizedProps.value);break;case 13:var n=e.memoizedState;if(n!==null)return n.dehydrated!==null?(Va(e),e.flags|=128,null):(a&e.child.childLanes)!==0?mh(t,e,a):(Va(e),t=Ra(t,e,a),t!==null?t.sibling:null);Va(e);break;case 19:var i=(t.flags&128)!==0;if(n=(a&e.childLanes)!==0,n||(ni(t,e,a,!1),n=(a&e.childLanes)!==0),i){if(n)return bh(t,e,a);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(ne,ne.current),n)break;return null;case 22:case 23:return e.lanes=0,ch(t,e,a);case 24:Ya(e,le,t.memoizedState.cache)}return Ra(t,e,a)}function yh(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)ue=!0;else{if(!fs(t,a)&&(e.flags&128)===0)return ue=!1,ib(t,e,a);ue=(t.flags&131072)!==0}else ue=!1,Nt&&(e.flags&1048576)!==0&&Kf(e,dr,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var n=e.elementType,i=n._init;if(n=i(n._payload),e.type=n,typeof n=="function")xu(n)?(t=Dl(n,t),e.tag=1,e=hh(null,e,n,t,a)):(e.tag=0,e=ns(null,e,n,t,a));else{if(n!=null){if(i=n.$$typeof,i===I){e.tag=11,e=oh(null,e,n,t,a);break t}else if(i===lt){e.tag=14,e=uh(null,e,n,t,a);break t}}throw e=V(n)||n,Error(s(306,e,""))}}return e;case 0:return ns(t,e,e.type,e.pendingProps,a);case 1:return n=e.type,i=Dl(n,e.pendingProps),hh(t,e,n,i,a);case 3:t:{if(dt(e,e.stateNode.containerInfo),t===null)throw Error(s(387));n=e.pendingProps;var o=e.memoizedState;i=o.element,ju(t,e),fi(e,n,null,a);var f=e.memoizedState;if(n=f.cache,Ya(e,le,n),n!==o.cache&&Du(e,[le],a,!0),ci(),n=f.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:f.cache},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){e=ph(t,e,n,a);break t}else if(n!==i){i=qe(Error(s(424)),e),li(i),e=ph(t,e,n,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Kt=Pe(t.firstChild),Se=e,Nt=!0,wl=null,oa=!0,a=Jd(e,null,n,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ai(),n===i){e=Ra(t,e,a);break t}he(t,e,n,a)}e=e.child}return e;case 26:return zr(t,e),t===null?(a=wp(e.type,null,e.pendingProps,null))?e.memoizedState=a:Nt||(a=e.type,t=e.pendingProps,n=Zr(at.current).createElement(a),n[ye]=e,n[Te]=t,me(n,a,t),oe(n),e.stateNode=n):e.memoizedState=wp(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return gt(e),t===null&&Nt&&(n=e.stateNode=vp(e.type,e.pendingProps,at.current),Se=e,oa=!0,i=Kt,al(e.type)?(Xs=i,Kt=Pe(n.firstChild)):Kt=i),he(t,e,e.pendingProps.children,a),zr(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Nt&&((i=n=Kt)&&(n=Nb(n,e.type,e.pendingProps,oa),n!==null?(e.stateNode=n,Se=e,Kt=Pe(n.firstChild),oa=!1,i=!0):i=!1),i||Sl(e)),gt(e),i=e.type,o=e.pendingProps,f=t!==null?t.memoizedProps:null,n=o.children,Ys(i,o)?n=null:f!==null&&Ys(i,f)&&(e.flags|=32),e.memoizedState!==null&&(i=$u(t,e,F0,null,null,a),Ni._currentValue=i),zr(t,e),he(t,e,n,a),e.child;case 6:return t===null&&Nt&&((t=a=Kt)&&(a=jb(a,e.pendingProps,oa),a!==null?(e.stateNode=a,Se=e,Kt=null,t=!0):t=!1),t||Sl(e)),null;case 13:return mh(t,e,a);case 4:return dt(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=gn(e,null,n,a):he(t,e,n,a),e.child;case 11:return oh(t,e,e.type,e.pendingProps,a);case 7:return he(t,e,e.pendingProps,a),e.child;case 8:return he(t,e,e.pendingProps.children,a),e.child;case 12:return he(t,e,e.pendingProps.children,a),e.child;case 10:return n=e.pendingProps,Ya(e,e.type,n.value),he(t,e,n.children,a),e.child;case 9:return i=e.type._context,n=e.pendingProps.children,Tl(e),i=ve(i),n=n(i),e.flags|=1,he(t,e,n,a),e.child;case 14:return uh(t,e,e.type,e.pendingProps,a);case 15:return sh(t,e,e.type,e.pendingProps,a);case 19:return bh(t,e,a);case 31:return n=e.pendingProps,a=e.mode,n={mode:n.mode,children:n.children},t===null?(a=Nr(n,a),a.ref=e.ref,e.child=a,a.return=e,e=a):(a=va(t.child,n),a.ref=e.ref,e.child=a,a.return=e,e=a),e;case 22:return ch(t,e,a);case 24:return Tl(e),n=ve(le),t===null?(i=Mu(),i===null&&(i=Gt,o=Cu(),i.pooledCache=o,o.refCount++,o!==null&&(i.pooledCacheLanes|=a),i=o),e.memoizedState={parent:n,cache:i},Nu(e),Ya(e,le,i)):((t.lanes&a)!==0&&(ju(t,e),fi(e,null,null,a),ci()),i=t.memoizedState,o=e.memoizedState,i.parent!==n?(i={parent:n,cache:n},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),Ya(e,le,n)):(n=o.cache,Ya(e,le,n),n!==i.cache&&Du(e,[le],a,!0))),he(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function ka(t){t.flags|=4}function vh(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!kp(e)){if(e=Ze.current,e!==null&&((Mt&4194048)===Mt?ua!==null:(Mt&62914560)!==Mt&&(Mt&536870912)===0||e!==ua))throw ui=zu,ad;t.flags|=8192}}function jr(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Jc():536870912,t.lanes|=e,xn|=e)}function yi(t,e){if(!Nt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function Zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,n=0;if(e)for(var i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=a,e}function rb(t,e,a){var n=e.pendingProps;switch(Eu(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(e),null;case 1:return Zt(e),null;case 3:return a=e.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Sa(le),J(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ei(e)?ka(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ff())),Zt(e),null;case 26:return a=e.memoizedState,t===null?(ka(e),a!==null?(Zt(e),vh(e,a)):(Zt(e),e.flags&=-16777217)):a?a!==t.memoizedState?(ka(e),Zt(e),vh(e,a)):(Zt(e),e.flags&=-16777217):(t.memoizedProps!==n&&ka(e),Zt(e),e.flags&=-16777217),null;case 27:ht(e),a=at.current;var i=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==n&&ka(e);else{if(!n){if(e.stateNode===null)throw Error(s(166));return Zt(e),null}t=P.current,ei(e)?Wf(e):(t=vp(i,n,a),e.stateNode=t,ka(e))}return Zt(e),null;case 5:if(ht(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&ka(e);else{if(!n){if(e.stateNode===null)throw Error(s(166));return Zt(e),null}if(t=P.current,ei(e))Wf(e);else{switch(i=Zr(at.current),t){case 1:t=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=i.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?t.multiple=!0:n.size&&(t.size=n.size);break;default:t=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}t[ye]=e,t[Te]=n;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=t;t:switch(me(t,a,n),a){case"button":case"input":case"select":case"textarea":t=!!n.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&ka(e)}}return Zt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==n&&ka(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(s(166));if(t=at.current,ei(e)){if(t=e.stateNode,a=e.memoizedProps,n=null,i=Se,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}t[ye]=e,t=!!(t.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||dp(t.nodeValue,a)),t||Sl(e)}else t=Zr(t).createTextNode(n),t[ye]=e,e.stateNode=t}return Zt(e),null;case 13:if(n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=ei(e),n!==null&&n.dehydrated!==null){if(t===null){if(!i)throw Error(s(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));i[ye]=e}else ai(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Zt(e),i=!1}else i=Ff(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(Ta(e),e):(Ta(e),null)}if(Ta(e),(e.flags&128)!==0)return e.lanes=a,e;if(a=n!==null,t=t!==null&&t.memoizedState!==null,a){n=e.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool);var o=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==i&&(n.flags|=2048)}return a!==t&&a&&(e.child.flags|=8192),jr(e,e.updateQueue),Zt(e),null;case 4:return J(),t===null&&Bs(e.stateNode.containerInfo),Zt(e),null;case 10:return Sa(e.type),Zt(e),null;case 19:if(et(ne),i=e.memoizedState,i===null)return Zt(e),null;if(n=(e.flags&128)!==0,o=i.rendering,o===null)if(n)yi(i,!1);else{if(Wt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Cr(t),o!==null){for(e.flags|=128,yi(i,!1),t=o.updateQueue,e.updateQueue=t,jr(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Zf(a,t),a=a.sibling;return H(ne,ne.current&1|2),e.child}t=t.sibling}i.tail!==null&&Qt()>Hr&&(e.flags|=128,n=!0,yi(i,!1),e.lanes=4194304)}else{if(!n)if(t=Cr(o),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,jr(e,t),yi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Nt)return Zt(e),null}else 2*Qt()-i.renderingStartTime>Hr&&a!==536870912&&(e.flags|=128,n=!0,yi(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(t=i.last,t!==null?t.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Qt(),e.sibling=null,t=ne.current,H(ne,n?t&1|2:t&1),e):(Zt(e),null);case 22:case 23:return Ta(e),Uu(),n=e.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?(a&536870912)!==0&&(e.flags&128)===0&&(Zt(e),e.subtreeFlags&6&&(e.flags|=8192)):Zt(e),a=e.updateQueue,a!==null&&jr(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==a&&(e.flags|=2048),t!==null&&et(Rl),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Sa(le),Zt(e),null;case 25:return null;case 30:return null}throw Error(s(156,e.tag))}function ob(t,e){switch(Eu(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Sa(le),J(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return ht(e),null;case 13:if(Ta(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));ai()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return et(ne),null;case 4:return J(),null;case 10:return Sa(e.type),null;case 22:case 23:return Ta(e),Uu(),t!==null&&et(Rl),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Sa(le),null;case 25:return null;default:return null}}function xh(t,e){switch(Eu(e),e.tag){case 3:Sa(le),J();break;case 26:case 27:case 5:ht(e);break;case 4:J();break;case 13:Ta(e);break;case 19:et(ne);break;case 10:Sa(e.type);break;case 22:case 23:Ta(e),Uu(),t!==null&&et(Rl);break;case 24:Sa(le)}}function vi(t,e){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){n=void 0;var o=a.create,f=a.inst;n=o(),f.destroy=n}a=a.next}while(a!==i)}}catch(h){Yt(e,e.return,h)}}function Ka(t,e,a){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var o=i.next;n=o;do{if((n.tag&t)===t){var f=n.inst,h=f.destroy;if(h!==void 0){f.destroy=void 0,i=e;var S=a,M=h;try{M()}catch(X){Yt(i,S,X)}}}n=n.next}while(n!==o)}}catch(X){Yt(e,e.return,X)}}function Ah(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{ud(e,a)}catch(n){Yt(t,t.return,n)}}}function wh(t,e,a){a.props=Dl(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(n){Yt(t,e,n)}}function xi(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;case 30:n=t.stateNode;break;default:n=t.stateNode}typeof a=="function"?t.refCleanup=a(n):a.current=n}}catch(i){Yt(t,e,i)}}function sa(t,e){var a=t.ref,n=t.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){Yt(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Yt(t,e,i)}else a.current=null}function Sh(t){var e=t.type,a=t.memoizedProps,n=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break t;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){Yt(t,t.return,i)}}function ds(t,e,a){try{var n=t.stateNode;Db(n,t.type,a,e),n[Te]=e}catch(i){Yt(t,t.return,i)}}function Eh(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&al(t.type)||t.tag===4}function hs(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Eh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&al(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ps(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=Vr));else if(n!==4&&(n===27&&al(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(ps(t,e,a),t=t.sibling;t!==null;)ps(t,e,a),t=t.sibling}function _r(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(n!==4&&(n===27&&al(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(_r(t,e,a),t=t.sibling;t!==null;)_r(t,e,a),t=t.sibling}function Th(t){var e=t.stateNode,a=t.memoizedProps;try{for(var n=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);me(e,n,a),e[ye]=t,e[Te]=a}catch(o){Yt(t,t.return,o)}}var Da=!1,It=!1,ms=!1,Rh=typeof WeakSet=="function"?WeakSet:Set,se=null;function ub(t,e){if(t=t.containerInfo,Ls=Pr,t=Hf(t),hu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{a.nodeType,o.nodeType}catch{a=null;break t}var f=0,h=-1,S=-1,M=0,X=0,K=t,z=null;e:for(;;){for(var N;K!==a||i!==0&&K.nodeType!==3||(h=f+i),K!==o||n!==0&&K.nodeType!==3||(S=f+n),K.nodeType===3&&(f+=K.nodeValue.length),(N=K.firstChild)!==null;)z=K,K=N;for(;;){if(K===t)break e;if(z===a&&++M===i&&(h=f),z===o&&++X===n&&(S=f),(N=K.nextSibling)!==null)break;K=z,z=K.parentNode}K=N}a=h===-1||S===-1?null:{start:h,end:S}}else a=null}a=a||{start:0,end:0}}else a=null;for($s={focusedElem:t,selectionRange:a},Pr=!1,se=e;se!==null;)if(e=se,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,se=t;else for(;se!==null;){switch(e=se,o=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&o!==null){t=void 0,a=e,i=o.memoizedProps,o=o.memoizedState,n=a.stateNode;try{var bt=Dl(a.type,i,a.elementType===a.type);t=n.getSnapshotBeforeUpdate(bt,o),n.__reactInternalSnapshotBeforeUpdate=t}catch(pt){Yt(a,a.return,pt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)qs(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":qs(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=e.sibling,t!==null){t.return=e.return,se=t;break}se=e.return}}function kh(t,e,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Wa(t,a),n&4&&vi(5,a);break;case 1:if(Wa(t,a),n&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(f){Yt(a,a.return,f)}else{var i=Dl(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(f){Yt(a,a.return,f)}}n&64&&Ah(a),n&512&&xi(a,a.return);break;case 3:if(Wa(t,a),n&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{ud(t,e)}catch(f){Yt(a,a.return,f)}}break;case 27:e===null&&n&4&&Th(a);case 26:case 5:Wa(t,a),e===null&&n&4&&Sh(a),n&512&&xi(a,a.return);break;case 12:Wa(t,a);break;case 13:Wa(t,a),n&4&&Oh(t,a),n&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=bb.bind(null,a),_b(t,a))));break;case 22:if(n=a.memoizedState!==null||Da,!n){e=e!==null&&e.memoizedState!==null||It,i=Da;var o=It;Da=n,(It=e)&&!o?Ja(t,a,(a.subtreeFlags&8772)!==0):Wa(t,a),Da=i,It=o}break;case 30:break;default:Wa(t,a)}}function Dh(t){var e=t.alternate;e!==null&&(t.alternate=null,Dh(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Ko(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Vt=null,De=!1;function Ca(t,e,a){for(a=a.child;a!==null;)Ch(t,e,a),a=a.sibling}function Ch(t,e,a){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(Ua,a)}catch{}switch(a.tag){case 26:It||sa(a,e),Ca(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:It||sa(a,e);var n=Vt,i=De;al(a.type)&&(Vt=a.stateNode,De=!1),Ca(t,e,a),Ci(a.stateNode),Vt=n,De=i;break;case 5:It||sa(a,e);case 6:if(n=Vt,i=De,Vt=null,Ca(t,e,a),Vt=n,De=i,Vt!==null)if(De)try{(Vt.nodeType===9?Vt.body:Vt.nodeName==="HTML"?Vt.ownerDocument.body:Vt).removeChild(a.stateNode)}catch(o){Yt(a,e,o)}else try{Vt.removeChild(a.stateNode)}catch(o){Yt(a,e,o)}break;case 18:Vt!==null&&(De?(t=Vt,bp(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Hi(t)):bp(Vt,a.stateNode));break;case 4:n=Vt,i=De,Vt=a.stateNode.containerInfo,De=!0,Ca(t,e,a),Vt=n,De=i;break;case 0:case 11:case 14:case 15:It||Ka(2,a,e),It||Ka(4,a,e),Ca(t,e,a);break;case 1:It||(sa(a,e),n=a.stateNode,typeof n.componentWillUnmount=="function"&&wh(a,e,n)),Ca(t,e,a);break;case 21:Ca(t,e,a);break;case 22:It=(n=It)||a.memoizedState!==null,Ca(t,e,a),It=n;break;default:Ca(t,e,a)}}function Oh(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Hi(t)}catch(a){Yt(e,e.return,a)}}function sb(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Rh),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Rh),e;default:throw Error(s(435,t.tag))}}function gs(t,e){var a=sb(t);e.forEach(function(n){var i=yb.bind(null,t,n);a.has(n)||(a.add(n),n.then(i,i))})}function Ne(t,e){var a=e.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],o=t,f=e,h=f;t:for(;h!==null;){switch(h.tag){case 27:if(al(h.type)){Vt=h.stateNode,De=!1;break t}break;case 5:Vt=h.stateNode,De=!1;break t;case 3:case 4:Vt=h.stateNode.containerInfo,De=!0;break t}h=h.return}if(Vt===null)throw Error(s(160));Ch(o,f,i),Vt=null,De=!1,o=i.alternate,o!==null&&(o.return=null),i.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Mh(e,t),e=e.sibling}var Ie=null;function Mh(t,e){var a=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ne(e,t),je(t),n&4&&(Ka(3,t,t.return),vi(3,t),Ka(5,t,t.return));break;case 1:Ne(e,t),je(t),n&512&&(It||a===null||sa(a,a.return)),n&64&&Da&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Ie;if(Ne(e,t),je(t),n&512&&(It||a===null||sa(a,a.return)),n&4){var o=a!==null?a.memoizedState:null;if(n=t.memoizedState,a===null)if(n===null)if(t.stateNode===null){t:{n=t.type,a=t.memoizedProps,i=i.ownerDocument||i;e:switch(n){case"title":o=i.getElementsByTagName("title")[0],(!o||o[Qn]||o[ye]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=i.createElement(n),i.head.insertBefore(o,i.querySelector("head > title"))),me(o,n,a),o[ye]=t,oe(o),n=o;break t;case"link":var f=Tp("link","href",i).get(n+(a.href||""));if(f){for(var h=0;h<f.length;h++)if(o=f[h],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(h,1);break e}}o=i.createElement(n),me(o,n,a),i.head.appendChild(o);break;case"meta":if(f=Tp("meta","content",i).get(n+(a.content||""))){for(h=0;h<f.length;h++)if(o=f[h],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(h,1);break e}}o=i.createElement(n),me(o,n,a),i.head.appendChild(o);break;default:throw Error(s(468,n))}o[ye]=t,oe(o),n=o}t.stateNode=n}else Rp(i,t.type,t.stateNode);else t.stateNode=Ep(i,n,t.memoizedProps);else o!==n?(o===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):o.count--,n===null?Rp(i,t.type,t.stateNode):Ep(i,n,t.memoizedProps)):n===null&&t.stateNode!==null&&ds(t,t.memoizedProps,a.memoizedProps)}break;case 27:Ne(e,t),je(t),n&512&&(It||a===null||sa(a,a.return)),a!==null&&n&4&&ds(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Ne(e,t),je(t),n&512&&(It||a===null||sa(a,a.return)),t.flags&32){i=t.stateNode;try{Fl(i,"")}catch(N){Yt(t,t.return,N)}}n&4&&t.stateNode!=null&&(i=t.memoizedProps,ds(t,i,a!==null?a.memoizedProps:i)),n&1024&&(ms=!0);break;case 6:if(Ne(e,t),je(t),n&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n}catch(N){Yt(t,t.return,N)}}break;case 3:if(Jr=null,i=Ie,Ie=Kr(e.containerInfo),Ne(e,t),Ie=i,je(t),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Hi(e.containerInfo)}catch(N){Yt(t,t.return,N)}ms&&(ms=!1,zh(t));break;case 4:n=Ie,Ie=Kr(t.stateNode.containerInfo),Ne(e,t),je(t),Ie=n;break;case 12:Ne(e,t),je(t);break;case 13:Ne(e,t),je(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ws=Qt()),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,gs(t,n)));break;case 22:i=t.memoizedState!==null;var S=a!==null&&a.memoizedState!==null,M=Da,X=It;if(Da=M||i,It=X||S,Ne(e,t),It=X,Da=M,je(t),n&8192)t:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(a===null||S||Da||It||Cl(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){S=a=e;try{if(o=S.stateNode,i)f=o.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{h=S.stateNode;var K=S.memoizedProps.style,z=K!=null&&K.hasOwnProperty("display")?K.display:null;h.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(N){Yt(S,S.return,N)}}}else if(e.tag===6){if(a===null){S=e;try{S.stateNode.nodeValue=i?"":S.memoizedProps}catch(N){Yt(S,S.return,N)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}n&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,gs(t,a))));break;case 19:Ne(e,t),je(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,gs(t,n)));break;case 30:break;case 21:break;default:Ne(e,t),je(t)}}function je(t){var e=t.flags;if(e&2){try{for(var a,n=t.return;n!==null;){if(Eh(n)){a=n;break}n=n.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var i=a.stateNode,o=hs(t);_r(t,o,i);break;case 5:var f=a.stateNode;a.flags&32&&(Fl(f,""),a.flags&=-33);var h=hs(t);_r(t,h,f);break;case 3:case 4:var S=a.stateNode.containerInfo,M=hs(t);ps(t,M,S);break;default:throw Error(s(161))}}catch(X){Yt(t,t.return,X)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function zh(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;zh(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Wa(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)kh(t,e.alternate,e),e=e.sibling}function Cl(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Ka(4,e,e.return),Cl(e);break;case 1:sa(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&wh(e,e.return,a),Cl(e);break;case 27:Ci(e.stateNode);case 26:case 5:sa(e,e.return),Cl(e);break;case 22:e.memoizedState===null&&Cl(e);break;case 30:Cl(e);break;default:Cl(e)}t=t.sibling}}function Ja(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var n=e.alternate,i=t,o=e,f=o.flags;switch(o.tag){case 0:case 11:case 15:Ja(i,o,a),vi(4,o);break;case 1:if(Ja(i,o,a),n=o,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(M){Yt(n,n.return,M)}if(n=o,i=n.updateQueue,i!==null){var h=n.stateNode;try{var S=i.shared.hiddenCallbacks;if(S!==null)for(i.shared.hiddenCallbacks=null,i=0;i<S.length;i++)od(S[i],h)}catch(M){Yt(n,n.return,M)}}a&&f&64&&Ah(o),xi(o,o.return);break;case 27:Th(o);case 26:case 5:Ja(i,o,a),a&&n===null&&f&4&&Sh(o),xi(o,o.return);break;case 12:Ja(i,o,a);break;case 13:Ja(i,o,a),a&&f&4&&Oh(i,o);break;case 22:o.memoizedState===null&&Ja(i,o,a),xi(o,o.return);break;case 30:break;default:Ja(i,o,a)}e=e.sibling}}function bs(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ii(a))}function ys(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ii(t))}function ca(t,e,a,n){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Nh(t,e,a,n),e=e.sibling}function Nh(t,e,a,n){var i=e.flags;switch(e.tag){case 0:case 11:case 15:ca(t,e,a,n),i&2048&&vi(9,e);break;case 1:ca(t,e,a,n);break;case 3:ca(t,e,a,n),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ii(t)));break;case 12:if(i&2048){ca(t,e,a,n),t=e.stateNode;try{var o=e.memoizedProps,f=o.id,h=o.onPostCommit;typeof h=="function"&&h(f,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(S){Yt(e,e.return,S)}}else ca(t,e,a,n);break;case 13:ca(t,e,a,n);break;case 23:break;case 22:o=e.stateNode,f=e.alternate,e.memoizedState!==null?o._visibility&2?ca(t,e,a,n):Ai(t,e):o._visibility&2?ca(t,e,a,n):(o._visibility|=2,bn(t,e,a,n,(e.subtreeFlags&10256)!==0)),i&2048&&bs(f,e);break;case 24:ca(t,e,a,n),i&2048&&ys(e.alternate,e);break;default:ca(t,e,a,n)}}function bn(t,e,a,n,i){for(i=i&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var o=t,f=e,h=a,S=n,M=f.flags;switch(f.tag){case 0:case 11:case 15:bn(o,f,h,S,i),vi(8,f);break;case 23:break;case 22:var X=f.stateNode;f.memoizedState!==null?X._visibility&2?bn(o,f,h,S,i):Ai(o,f):(X._visibility|=2,bn(o,f,h,S,i)),i&&M&2048&&bs(f.alternate,f);break;case 24:bn(o,f,h,S,i),i&&M&2048&&ys(f.alternate,f);break;default:bn(o,f,h,S,i)}e=e.sibling}}function Ai(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,n=e,i=n.flags;switch(n.tag){case 22:Ai(a,n),i&2048&&bs(n.alternate,n);break;case 24:Ai(a,n),i&2048&&ys(n.alternate,n);break;default:Ai(a,n)}e=e.sibling}}var wi=8192;function yn(t){if(t.subtreeFlags&wi)for(t=t.child;t!==null;)jh(t),t=t.sibling}function jh(t){switch(t.tag){case 26:yn(t),t.flags&wi&&t.memoizedState!==null&&Kb(Ie,t.memoizedState,t.memoizedProps);break;case 5:yn(t);break;case 3:case 4:var e=Ie;Ie=Kr(t.stateNode.containerInfo),yn(t),Ie=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=wi,wi=16777216,yn(t),wi=e):yn(t));break;default:yn(t)}}function _h(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Si(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];se=n,Hh(n,t)}_h(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Bh(t),t=t.sibling}function Bh(t){switch(t.tag){case 0:case 11:case 15:Si(t),t.flags&2048&&Ka(9,t,t.return);break;case 3:Si(t);break;case 12:Si(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Br(t)):Si(t);break;default:Si(t)}}function Br(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];se=n,Hh(n,t)}_h(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ka(8,e,e.return),Br(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Br(e));break;default:Br(e)}t=t.sibling}}function Hh(t,e){for(;se!==null;){var a=se;switch(a.tag){case 0:case 11:case 15:Ka(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:ii(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,se=n;else t:for(a=t;se!==null;){n=se;var i=n.sibling,o=n.return;if(Dh(n),n===a){se=null;break t}if(i!==null){i.return=o,se=i;break t}se=o}}}var cb={getCacheForType:function(t){var e=ve(le),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a}},fb=typeof WeakMap=="function"?WeakMap:Map,Bt=0,Gt=null,kt=null,Mt=0,Ht=0,_e=null,Fa=!1,vn=!1,vs=!1,Oa=0,Wt=0,Ia=0,Ol=0,xs=0,Ke=0,xn=0,Ei=null,Ce=null,As=!1,ws=0,Hr=1/0,Ur=null,Pa=null,pe=0,tl=null,An=null,wn=0,Ss=0,Es=null,Uh=null,Ti=0,Ts=null;function Be(){if((Bt&2)!==0&&Mt!==0)return Mt&-Mt;if(R.T!==null){var t=sn;return t!==0?t:zs()}return Pc()}function Lh(){Ke===0&&(Ke=(Mt&536870912)===0||Nt?Wc():536870912);var t=Ze.current;return t!==null&&(t.flags|=32),Ke}function He(t,e,a){(t===Gt&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)&&(Sn(t,0),el(t,Mt,Ke,!1)),qn(t,a),((Bt&2)===0||t!==Gt)&&(t===Gt&&((Bt&2)===0&&(Ol|=a),Wt===4&&el(t,Mt,Ke,!1)),fa(t))}function $h(t,e,a){if((Bt&6)!==0)throw Error(s(327));var n=!a&&(e&124)===0&&(e&t.expiredLanes)===0||pl(t,e),i=n?pb(t,e):Ds(t,e,!0),o=n;do{if(i===0){vn&&!n&&el(t,e,0,!1);break}else{if(a=t.current.alternate,o&&!db(a)){i=Ds(t,e,!1),o=!1;continue}if(i===2){if(o=e,t.errorRecoveryDisabledLanes&o)var f=0;else f=t.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){e=f;t:{var h=t;i=Ei;var S=h.current.memoizedState.isDehydrated;if(S&&(Sn(h,f).flags|=256),f=Ds(h,f,!1),f!==2){if(vs&&!S){h.errorRecoveryDisabledLanes|=o,Ol|=o,i=4;break t}o=Ce,Ce=i,o!==null&&(Ce===null?Ce=o:Ce.push.apply(Ce,o))}i=f}if(o=!1,i!==2)continue}}if(i===1){Sn(t,0),el(t,e,0,!0);break}t:{switch(n=t,o=i,o){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e)break;case 6:el(n,e,Ke,!Fa);break t;case 2:Ce=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(i=ws+300-Qt(),10<i)){if(el(n,e,Ke,!Fa),ql(n,0,!0)!==0)break t;n.timeoutHandle=mp(Yh.bind(null,n,a,Ce,Ur,As,e,Ke,Ol,xn,Fa,o,2,-0,0),i);break t}Yh(n,a,Ce,Ur,As,e,Ke,Ol,xn,Fa,o,0,-0,0)}}break}while(!0);fa(t)}function Yh(t,e,a,n,i,o,f,h,S,M,X,K,z,N){if(t.timeoutHandle=-1,K=e.subtreeFlags,(K&8192||(K&16785408)===16785408)&&(zi={stylesheets:null,count:0,unsuspend:Zb},jh(e),K=Wb(),K!==null)){t.cancelPendingCommit=K(Kh.bind(null,t,e,o,a,n,i,f,h,S,X,1,z,N)),el(t,o,f,!M);return}Kh(t,e,o,a,n,i,f,h,S)}function db(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],o=i.getSnapshot;i=i.value;try{if(!Me(o(),i))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function el(t,e,a,n){e&=~xs,e&=~Ol,t.suspendedLanes|=e,t.pingedLanes&=~e,n&&(t.warmLanes|=e),n=t.expirationTimes;for(var i=e;0<i;){var o=31-we(i),f=1<<o;n[o]=-1,i&=~f}a!==0&&Fc(t,a,e)}function Lr(){return(Bt&6)===0?(Ri(0),!1):!0}function Rs(){if(kt!==null){if(Ht===0)var t=kt.return;else t=kt,wa=El=null,qu(t),mn=null,gi=0,t=kt;for(;t!==null;)xh(t.alternate,t),t=t.return;kt=null}}function Sn(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Ob(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Rs(),Gt=t,kt=a=va(t.current,null),Mt=e,Ht=0,_e=null,Fa=!1,vn=pl(t,e),vs=!1,xn=Ke=xs=Ol=Ia=Wt=0,Ce=Ei=null,As=!1,(e&8)!==0&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var i=31-we(n),o=1<<i;e|=t[i],n&=~o}return Oa=e,or(),a}function Gh(t,e){Et=null,R.H=Rr,e===oi||e===gr?(e=id(),Ht=3):e===ad?(e=id(),Ht=4):Ht=e===rh?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,_e=e,kt===null&&(Wt=1,Mr(t,qe(e,t.current)))}function qh(){var t=R.H;return R.H=Rr,t===null?Rr:t}function Qh(){var t=R.A;return R.A=cb,t}function ks(){Wt=4,Fa||(Mt&4194048)!==Mt&&Ze.current!==null||(vn=!0),(Ia&134217727)===0&&(Ol&134217727)===0||Gt===null||el(Gt,Mt,Ke,!1)}function Ds(t,e,a){var n=Bt;Bt|=2;var i=qh(),o=Qh();(Gt!==t||Mt!==e)&&(Ur=null,Sn(t,e)),e=!1;var f=Wt;t:do try{if(Ht!==0&&kt!==null){var h=kt,S=_e;switch(Ht){case 8:Rs(),f=6;break t;case 3:case 2:case 9:case 6:Ze.current===null&&(e=!0);var M=Ht;if(Ht=0,_e=null,En(t,h,S,M),a&&vn){f=0;break t}break;default:M=Ht,Ht=0,_e=null,En(t,h,S,M)}}hb(),f=Wt;break}catch(X){Gh(t,X)}while(!0);return e&&t.shellSuspendCounter++,wa=El=null,Bt=n,R.H=i,R.A=o,kt===null&&(Gt=null,Mt=0,or()),f}function hb(){for(;kt!==null;)Xh(kt)}function pb(t,e){var a=Bt;Bt|=2;var n=qh(),i=Qh();Gt!==t||Mt!==e?(Ur=null,Hr=Qt()+500,Sn(t,e)):vn=pl(t,e);t:do try{if(Ht!==0&&kt!==null){e=kt;var o=_e;e:switch(Ht){case 1:Ht=0,_e=null,En(t,e,o,1);break;case 2:case 9:if(ld(o)){Ht=0,_e=null,Vh(e);break}e=function(){Ht!==2&&Ht!==9||Gt!==t||(Ht=7),fa(t)},o.then(e,e);break t;case 3:Ht=7;break t;case 4:Ht=5;break t;case 7:ld(o)?(Ht=0,_e=null,Vh(e)):(Ht=0,_e=null,En(t,e,o,7));break;case 5:var f=null;switch(kt.tag){case 26:f=kt.memoizedState;case 5:case 27:var h=kt;if(!f||kp(f)){Ht=0,_e=null;var S=h.sibling;if(S!==null)kt=S;else{var M=h.return;M!==null?(kt=M,$r(M)):kt=null}break e}}Ht=0,_e=null,En(t,e,o,5);break;case 6:Ht=0,_e=null,En(t,e,o,6);break;case 8:Rs(),Wt=6;break t;default:throw Error(s(462))}}mb();break}catch(X){Gh(t,X)}while(!0);return wa=El=null,R.H=n,R.A=i,Bt=a,kt!==null?0:(Gt=null,Mt=0,or(),Wt)}function mb(){for(;kt!==null&&!qt();)Xh(kt)}function Xh(t){var e=yh(t.alternate,t,Oa);t.memoizedProps=t.pendingProps,e===null?$r(t):kt=e}function Vh(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=dh(a,e,e.pendingProps,e.type,void 0,Mt);break;case 11:e=dh(a,e,e.pendingProps,e.type.render,e.ref,Mt);break;case 5:qu(e);default:xh(a,e),e=kt=Zf(e,Oa),e=yh(a,e,Oa)}t.memoizedProps=t.pendingProps,e===null?$r(t):kt=e}function En(t,e,a,n){wa=El=null,qu(e),mn=null,gi=0;var i=e.return;try{if(nb(t,i,e,a,Mt)){Wt=1,Mr(t,qe(a,t.current)),kt=null;return}}catch(o){if(i!==null)throw kt=i,o;Wt=1,Mr(t,qe(a,t.current)),kt=null;return}e.flags&32768?(Nt||n===1?t=!0:vn||(Mt&536870912)!==0?t=!1:(Fa=t=!0,(n===2||n===9||n===3||n===6)&&(n=Ze.current,n!==null&&n.tag===13&&(n.flags|=16384))),Zh(e,t)):$r(e)}function $r(t){var e=t;do{if((e.flags&32768)!==0){Zh(e,Fa);return}t=e.return;var a=rb(e.alternate,e,Oa);if(a!==null){kt=a;return}if(e=e.sibling,e!==null){kt=e;return}kt=e=t}while(e!==null);Wt===0&&(Wt=5)}function Zh(t,e){do{var a=ob(t.alternate,t);if(a!==null){a.flags&=32767,kt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){kt=t;return}kt=t=a}while(t!==null);Wt=6,kt=null}function Kh(t,e,a,n,i,o,f,h,S){t.cancelPendingCommit=null;do Yr();while(pe!==0);if((Bt&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));if(o=e.lanes|e.childLanes,o|=yu,Zg(t,a,o,f,h,S),t===Gt&&(kt=Gt=null,Mt=0),An=e,tl=t,wn=a,Ss=o,Es=i,Uh=n,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,vb(Ee,function(){return Ph(),null})):(t.callbackNode=null,t.callbackPriority=0),n=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||n){n=R.T,R.T=null,i=L.p,L.p=2,f=Bt,Bt|=4;try{ub(t,e,a)}finally{Bt=f,L.p=i,R.T=n}}pe=1,Wh(),Jh(),Fh()}}function Wh(){if(pe===1){pe=0;var t=tl,e=An,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=R.T,R.T=null;var n=L.p;L.p=2;var i=Bt;Bt|=4;try{Mh(e,t);var o=$s,f=Hf(t.containerInfo),h=o.focusedElem,S=o.selectionRange;if(f!==h&&h&&h.ownerDocument&&Bf(h.ownerDocument.documentElement,h)){if(S!==null&&hu(h)){var M=S.start,X=S.end;if(X===void 0&&(X=M),"selectionStart"in h)h.selectionStart=M,h.selectionEnd=Math.min(X,h.value.length);else{var K=h.ownerDocument||document,z=K&&K.defaultView||window;if(z.getSelection){var N=z.getSelection(),bt=h.textContent.length,pt=Math.min(S.start,bt),$t=S.end===void 0?pt:Math.min(S.end,bt);!N.extend&&pt>$t&&(f=$t,$t=pt,pt=f);var k=_f(h,pt),T=_f(h,$t);if(k&&T&&(N.rangeCount!==1||N.anchorNode!==k.node||N.anchorOffset!==k.offset||N.focusNode!==T.node||N.focusOffset!==T.offset)){var C=K.createRange();C.setStart(k.node,k.offset),N.removeAllRanges(),pt>$t?(N.addRange(C),N.extend(T.node,T.offset)):(C.setEnd(T.node,T.offset),N.addRange(C))}}}}for(K=[],N=h;N=N.parentNode;)N.nodeType===1&&K.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<K.length;h++){var Z=K[h];Z.element.scrollLeft=Z.left,Z.element.scrollTop=Z.top}}Pr=!!Ls,$s=Ls=null}finally{Bt=i,L.p=n,R.T=a}}t.current=e,pe=2}}function Jh(){if(pe===2){pe=0;var t=tl,e=An,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=R.T,R.T=null;var n=L.p;L.p=2;var i=Bt;Bt|=4;try{kh(t,e.alternate,e)}finally{Bt=i,L.p=n,R.T=a}}pe=3}}function Fh(){if(pe===4||pe===3){pe=0,ae();var t=tl,e=An,a=wn,n=Uh;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?pe=5:(pe=0,An=tl=null,Ih(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(Pa=null),Vo(a),e=e.stateNode,Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(Ua,e,void 0,(e.current.flags&128)===128)}catch{}if(n!==null){e=R.T,i=L.p,L.p=2,R.T=null;try{for(var o=t.onRecoverableError,f=0;f<n.length;f++){var h=n[f];o(h.value,{componentStack:h.stack})}}finally{R.T=e,L.p=i}}(wn&3)!==0&&Yr(),fa(t),i=t.pendingLanes,(a&4194090)!==0&&(i&42)!==0?t===Ts?Ti++:(Ti=0,Ts=t):Ti=0,Ri(0)}}function Ih(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,ii(e)))}function Yr(t){return Wh(),Jh(),Fh(),Ph()}function Ph(){if(pe!==5)return!1;var t=tl,e=Ss;Ss=0;var a=Vo(wn),n=R.T,i=L.p;try{L.p=32>a?32:a,R.T=null,a=Es,Es=null;var o=tl,f=wn;if(pe=0,An=tl=null,wn=0,(Bt&6)!==0)throw Error(s(331));var h=Bt;if(Bt|=4,Bh(o.current),Nh(o,o.current,f,a),Bt=h,Ri(0,!1),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(Ua,o)}catch{}return!0}finally{L.p=i,R.T=n,Ih(t,e)}}function tp(t,e,a){e=qe(a,e),e=ls(t.stateNode,e,2),t=Qa(t,e,2),t!==null&&(qn(t,2),fa(t))}function Yt(t,e,a){if(t.tag===3)tp(t,t,a);else for(;e!==null;){if(e.tag===3){tp(e,t,a);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Pa===null||!Pa.has(n))){t=qe(a,t),a=nh(2),n=Qa(e,a,2),n!==null&&(ih(a,n,e,t),qn(n,2),fa(n));break}}e=e.return}}function Cs(t,e,a){var n=t.pingCache;if(n===null){n=t.pingCache=new fb;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(a)||(vs=!0,i.add(a),t=gb.bind(null,t,e,a),e.then(t,t))}function gb(t,e,a){var n=t.pingCache;n!==null&&n.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Gt===t&&(Mt&a)===a&&(Wt===4||Wt===3&&(Mt&62914560)===Mt&&300>Qt()-ws?(Bt&2)===0&&Sn(t,0):xs|=a,xn===Mt&&(xn=0)),fa(t)}function ep(t,e){e===0&&(e=Jc()),t=nn(t,e),t!==null&&(qn(t,e),fa(t))}function bb(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),ep(t,a)}function yb(t,e){var a=0;switch(t.tag){case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(s(314))}n!==null&&n.delete(e),ep(t,a)}function vb(t,e){return Ct(t,e)}var Gr=null,Tn=null,Os=!1,qr=!1,Ms=!1,Ml=0;function fa(t){t!==Tn&&t.next===null&&(Tn===null?Gr=Tn=t:Tn=Tn.next=t),qr=!0,Os||(Os=!0,Ab())}function Ri(t,e){if(!Ms&&qr){Ms=!0;do for(var a=!1,n=Gr;n!==null;){if(t!==0){var i=n.pendingLanes;if(i===0)var o=0;else{var f=n.suspendedLanes,h=n.pingedLanes;o=(1<<31-we(42|t)+1)-1,o&=i&~(f&~h),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(a=!0,ip(n,o))}else o=Mt,o=ql(n,n===Gt?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(o&3)===0||pl(n,o)||(a=!0,ip(n,o));n=n.next}while(a);Ms=!1}}function xb(){ap()}function ap(){qr=Os=!1;var t=0;Ml!==0&&(Cb()&&(t=Ml),Ml=0);for(var e=Qt(),a=null,n=Gr;n!==null;){var i=n.next,o=lp(n,e);o===0?(n.next=null,a===null?Gr=i:a.next=i,i===null&&(Tn=a)):(a=n,(t!==0||(o&3)!==0)&&(qr=!0)),n=i}Ri(t)}function lp(t,e){for(var a=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes&-62914561;0<o;){var f=31-we(o),h=1<<f,S=i[f];S===-1?((h&a)===0||(h&n)!==0)&&(i[f]=qo(h,e)):S<=e&&(t.expiredLanes|=h),o&=~h}if(e=Gt,a=Mt,a=ql(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n=t.callbackNode,a===0||t===e&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)return n!==null&&n!==null&&_t(n),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||pl(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(n!==null&&_t(n),Vo(a)){case 2:case 8:a=Le;break;case 32:a=Ee;break;case 268435456:a=$e;break;default:a=Ee}return n=np.bind(null,t),a=Ct(a,n),t.callbackPriority=e,t.callbackNode=a,e}return n!==null&&n!==null&&_t(n),t.callbackPriority=2,t.callbackNode=null,2}function np(t,e){if(pe!==0&&pe!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Yr()&&t.callbackNode!==a)return null;var n=Mt;return n=ql(t,t===Gt?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n===0?null:($h(t,n,e),lp(t,Qt()),t.callbackNode!=null&&t.callbackNode===a?np.bind(null,t):null)}function ip(t,e){if(Yr())return null;$h(t,e,!0)}function Ab(){Mb(function(){(Bt&6)!==0?Ct(re,xb):ap()})}function zs(){return Ml===0&&(Ml=Wc()),Ml}function rp(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:tr(""+t)}function op(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function wb(t,e,a,n,i){if(e==="submit"&&a&&a.stateNode===i){var o=rp((i[Te]||null).action),f=n.submitter;f&&(e=(e=f[Te]||null)?rp(e.formAction):f.getAttribute("formAction"),e!==null&&(o=e,f=null));var h=new nr("action","action",null,n,i);t.push({event:h,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Ml!==0){var S=f?op(i,f):new FormData(i);Iu(a,{pending:!0,data:S,method:i.method,action:o},null,S)}}else typeof o=="function"&&(h.preventDefault(),S=f?op(i,f):new FormData(i),Iu(a,{pending:!0,data:S,method:i.method,action:o},o,S))},currentTarget:i}]})}}for(var Ns=0;Ns<bu.length;Ns++){var js=bu[Ns],Sb=js.toLowerCase(),Eb=js[0].toUpperCase()+js.slice(1);Fe(Sb,"on"+Eb)}Fe($f,"onAnimationEnd"),Fe(Yf,"onAnimationIteration"),Fe(Gf,"onAnimationStart"),Fe("dblclick","onDoubleClick"),Fe("focusin","onFocus"),Fe("focusout","onBlur"),Fe(Y0,"onTransitionRun"),Fe(G0,"onTransitionStart"),Fe(q0,"onTransitionCancel"),Fe(qf,"onTransitionEnd"),Kl("onMouseEnter",["mouseout","mouseover"]),Kl("onMouseLeave",["mouseout","mouseover"]),Kl("onPointerEnter",["pointerout","pointerover"]),Kl("onPointerLeave",["pointerout","pointerover"]),ml("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ml("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ml("onBeforeInput",["compositionend","keypress","textInput","paste"]),ml("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ml("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ml("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ki="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ki));function up(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var n=t[a],i=n.event;n=n.listeners;t:{var o=void 0;if(e)for(var f=n.length-1;0<=f;f--){var h=n[f],S=h.instance,M=h.currentTarget;if(h=h.listener,S!==o&&i.isPropagationStopped())break t;o=h,i.currentTarget=M;try{o(i)}catch(X){Or(X)}i.currentTarget=null,o=S}else for(f=0;f<n.length;f++){if(h=n[f],S=h.instance,M=h.currentTarget,h=h.listener,S!==o&&i.isPropagationStopped())break t;o=h,i.currentTarget=M;try{o(i)}catch(X){Or(X)}i.currentTarget=null,o=S}}}}function Dt(t,e){var a=e[Zo];a===void 0&&(a=e[Zo]=new Set);var n=t+"__bubble";a.has(n)||(sp(e,t,2,!1),a.add(n))}function _s(t,e,a){var n=0;e&&(n|=4),sp(a,t,n,e)}var Qr="_reactListening"+Math.random().toString(36).slice(2);function Bs(t){if(!t[Qr]){t[Qr]=!0,ef.forEach(function(a){a!=="selectionchange"&&(Tb.has(a)||_s(a,!1,t),_s(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qr]||(e[Qr]=!0,_s("selectionchange",!1,e))}}function sp(t,e,a,n){switch(Np(e)){case 2:var i=Ib;break;case 8:i=Pb;break;default:i=Js}a=i.bind(null,e,a,t),i=void 0,!nu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,a,{capture:!0,passive:i}):t.addEventListener(e,a,!0):i!==void 0?t.addEventListener(e,a,{passive:i}):t.addEventListener(e,a,!1)}function Hs(t,e,a,n,i){var o=n;if((e&1)===0&&(e&2)===0&&n!==null)t:for(;;){if(n===null)return;var f=n.tag;if(f===3||f===4){var h=n.stateNode.containerInfo;if(h===i)break;if(f===4)for(f=n.return;f!==null;){var S=f.tag;if((S===3||S===4)&&f.stateNode.containerInfo===i)return;f=f.return}for(;h!==null;){if(f=Xl(h),f===null)return;if(S=f.tag,S===5||S===6||S===26||S===27){n=o=f;continue t}h=h.parentNode}}n=n.return}gf(function(){var M=o,X=au(a),K=[];t:{var z=Qf.get(t);if(z!==void 0){var N=nr,bt=t;switch(t){case"keypress":if(ar(a)===0)break t;case"keydown":case"keyup":N=v0;break;case"focusin":bt="focus",N=uu;break;case"focusout":bt="blur",N=uu;break;case"beforeblur":case"afterblur":N=uu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=vf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=o0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=w0;break;case $f:case Yf:case Gf:N=c0;break;case qf:N=E0;break;case"scroll":case"scrollend":N=i0;break;case"wheel":N=R0;break;case"copy":case"cut":case"paste":N=d0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Af;break;case"toggle":case"beforetoggle":N=D0}var pt=(e&4)!==0,$t=!pt&&(t==="scroll"||t==="scrollend"),k=pt?z!==null?z+"Capture":null:z;pt=[];for(var T=M,C;T!==null;){var Z=T;if(C=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||C===null||k===null||(Z=Vn(T,k),Z!=null&&pt.push(Di(T,Z,C))),$t)break;T=T.return}0<pt.length&&(z=new N(z,bt,null,a,X),K.push({event:z,listeners:pt}))}}if((e&7)===0){t:{if(z=t==="mouseover"||t==="pointerover",N=t==="mouseout"||t==="pointerout",z&&a!==eu&&(bt=a.relatedTarget||a.fromElement)&&(Xl(bt)||bt[Ql]))break t;if((N||z)&&(z=X.window===X?X:(z=X.ownerDocument)?z.defaultView||z.parentWindow:window,N?(bt=a.relatedTarget||a.toElement,N=M,bt=bt?Xl(bt):null,bt!==null&&($t=d(bt),pt=bt.tag,bt!==$t||pt!==5&&pt!==27&&pt!==6)&&(bt=null)):(N=null,bt=M),N!==bt)){if(pt=vf,Z="onMouseLeave",k="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(pt=Af,Z="onPointerLeave",k="onPointerEnter",T="pointer"),$t=N==null?z:Xn(N),C=bt==null?z:Xn(bt),z=new pt(Z,T+"leave",N,a,X),z.target=$t,z.relatedTarget=C,Z=null,Xl(X)===M&&(pt=new pt(k,T+"enter",bt,a,X),pt.target=C,pt.relatedTarget=$t,Z=pt),$t=Z,N&&bt)e:{for(pt=N,k=bt,T=0,C=pt;C;C=Rn(C))T++;for(C=0,Z=k;Z;Z=Rn(Z))C++;for(;0<T-C;)pt=Rn(pt),T--;for(;0<C-T;)k=Rn(k),C--;for(;T--;){if(pt===k||k!==null&&pt===k.alternate)break e;pt=Rn(pt),k=Rn(k)}pt=null}else pt=null;N!==null&&cp(K,z,N,pt,!1),bt!==null&&$t!==null&&cp(K,$t,bt,pt,!0)}}t:{if(z=M?Xn(M):window,N=z.nodeName&&z.nodeName.toLowerCase(),N==="select"||N==="input"&&z.type==="file")var ut=Cf;else if(kf(z))if(Of)ut=U0;else{ut=B0;var Tt=_0}else N=z.nodeName,!N||N.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?M&&tu(M.elementType)&&(ut=Cf):ut=H0;if(ut&&(ut=ut(t,M))){Df(K,ut,a,X);break t}Tt&&Tt(t,z,M),t==="focusout"&&M&&z.type==="number"&&M.memoizedProps.value!=null&&Po(z,"number",z.value)}switch(Tt=M?Xn(M):window,t){case"focusin":(kf(Tt)||Tt.contentEditable==="true")&&(en=Tt,pu=M,ti=null);break;case"focusout":ti=pu=en=null;break;case"mousedown":mu=!0;break;case"contextmenu":case"mouseup":case"dragend":mu=!1,Uf(K,a,X);break;case"selectionchange":if($0)break;case"keydown":case"keyup":Uf(K,a,X)}var ct;if(cu)t:{switch(t){case"compositionstart":var mt="onCompositionStart";break t;case"compositionend":mt="onCompositionEnd";break t;case"compositionupdate":mt="onCompositionUpdate";break t}mt=void 0}else tn?Tf(t,a)&&(mt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(mt="onCompositionStart");mt&&(wf&&a.locale!=="ko"&&(tn||mt!=="onCompositionStart"?mt==="onCompositionEnd"&&tn&&(ct=bf()):($a=X,iu="value"in $a?$a.value:$a.textContent,tn=!0)),Tt=Xr(M,mt),0<Tt.length&&(mt=new xf(mt,t,null,a,X),K.push({event:mt,listeners:Tt}),ct?mt.data=ct:(ct=Rf(a),ct!==null&&(mt.data=ct)))),(ct=O0?M0(t,a):z0(t,a))&&(mt=Xr(M,"onBeforeInput"),0<mt.length&&(Tt=new xf("onBeforeInput","beforeinput",null,a,X),K.push({event:Tt,listeners:mt}),Tt.data=ct)),wb(K,t,M,a,X)}up(K,e)})}function Di(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Xr(t,e){for(var a=e+"Capture",n=[];t!==null;){var i=t,o=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||o===null||(i=Vn(t,a),i!=null&&n.unshift(Di(t,i,o)),i=Vn(t,e),i!=null&&n.push(Di(t,i,o))),t.tag===3)return n;t=t.return}return[]}function Rn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function cp(t,e,a,n,i){for(var o=e._reactName,f=[];a!==null&&a!==n;){var h=a,S=h.alternate,M=h.stateNode;if(h=h.tag,S!==null&&S===n)break;h!==5&&h!==26&&h!==27||M===null||(S=M,i?(M=Vn(a,o),M!=null&&f.unshift(Di(a,M,S))):i||(M=Vn(a,o),M!=null&&f.push(Di(a,M,S)))),a=a.return}f.length!==0&&t.push({event:e,listeners:f})}var Rb=/\r\n?/g,kb=/\u0000|\uFFFD/g;function fp(t){return(typeof t=="string"?t:""+t).replace(Rb,`
`).replace(kb,"")}function dp(t,e){return e=fp(e),fp(t)===e}function Vr(){}function Lt(t,e,a,n,i,o){switch(a){case"children":typeof n=="string"?e==="body"||e==="textarea"&&n===""||Fl(t,n):(typeof n=="number"||typeof n=="bigint")&&e!=="body"&&Fl(t,""+n);break;case"className":Fi(t,"class",n);break;case"tabIndex":Fi(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Fi(t,a,n);break;case"style":pf(t,n,o);break;case"data":if(e!=="object"){Fi(t,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=tr(""+n),t.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(a==="formAction"?(e!=="input"&&Lt(t,e,"name",i.name,i,null),Lt(t,e,"formEncType",i.formEncType,i,null),Lt(t,e,"formMethod",i.formMethod,i,null),Lt(t,e,"formTarget",i.formTarget,i,null)):(Lt(t,e,"encType",i.encType,i,null),Lt(t,e,"method",i.method,i,null),Lt(t,e,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=tr(""+n),t.setAttribute(a,n);break;case"onClick":n!=null&&(t.onclick=Vr);break;case"onScroll":n!=null&&Dt("scroll",t);break;case"onScrollEnd":n!=null&&Dt("scrollend",t);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(s(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}a=tr(""+n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""+n):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":n===!0?t.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,n):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(a,n):t.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(a):t.setAttribute(a,n);break;case"popover":Dt("beforetoggle",t),Dt("toggle",t),Ji(t,"popover",n);break;case"xlinkActuate":ba(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":ba(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":ba(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":ba(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":ba(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":ba(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":ba(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":ba(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":ba(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Ji(t,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=l0.get(a)||a,Ji(t,a,n))}}function Us(t,e,a,n,i,o){switch(a){case"style":pf(t,n,o);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(s(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof n=="string"?Fl(t,n):(typeof n=="number"||typeof n=="bigint")&&Fl(t,""+n);break;case"onScroll":n!=null&&Dt("scroll",t);break;case"onScrollEnd":n!=null&&Dt("scrollend",t);break;case"onClick":n!=null&&(t.onclick=Vr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!af.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),e=a.slice(2,i?a.length-7:void 0),o=t[Te]||null,o=o!=null?o[a]:null,typeof o=="function"&&t.removeEventListener(e,o,i),typeof n=="function")){typeof o!="function"&&o!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,n,i);break t}a in t?t[a]=n:n===!0?t.setAttribute(a,""):Ji(t,a,n)}}}function me(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Dt("error",t),Dt("load",t);var n=!1,i=!1,o;for(o in a)if(a.hasOwnProperty(o)){var f=a[o];if(f!=null)switch(o){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Lt(t,e,o,f,a,null)}}i&&Lt(t,e,"srcSet",a.srcSet,a,null),n&&Lt(t,e,"src",a.src,a,null);return;case"input":Dt("invalid",t);var h=o=f=i=null,S=null,M=null;for(n in a)if(a.hasOwnProperty(n)){var X=a[n];if(X!=null)switch(n){case"name":i=X;break;case"type":f=X;break;case"checked":S=X;break;case"defaultChecked":M=X;break;case"value":o=X;break;case"defaultValue":h=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(s(137,e));break;default:Lt(t,e,n,X,a,null)}}cf(t,o,h,S,M,f,i,!1),Ii(t);return;case"select":Dt("invalid",t),n=f=o=null;for(i in a)if(a.hasOwnProperty(i)&&(h=a[i],h!=null))switch(i){case"value":o=h;break;case"defaultValue":f=h;break;case"multiple":n=h;default:Lt(t,e,i,h,a,null)}e=o,a=f,t.multiple=!!n,e!=null?Jl(t,!!n,e,!1):a!=null&&Jl(t,!!n,a,!0);return;case"textarea":Dt("invalid",t),o=i=n=null;for(f in a)if(a.hasOwnProperty(f)&&(h=a[f],h!=null))switch(f){case"value":n=h;break;case"defaultValue":i=h;break;case"children":o=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:Lt(t,e,f,h,a,null)}df(t,n,i,o),Ii(t);return;case"option":for(S in a)if(a.hasOwnProperty(S)&&(n=a[S],n!=null))switch(S){case"selected":t.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Lt(t,e,S,n,a,null)}return;case"dialog":Dt("beforetoggle",t),Dt("toggle",t),Dt("cancel",t),Dt("close",t);break;case"iframe":case"object":Dt("load",t);break;case"video":case"audio":for(n=0;n<ki.length;n++)Dt(ki[n],t);break;case"image":Dt("error",t),Dt("load",t);break;case"details":Dt("toggle",t);break;case"embed":case"source":case"link":Dt("error",t),Dt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in a)if(a.hasOwnProperty(M)&&(n=a[M],n!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Lt(t,e,M,n,a,null)}return;default:if(tu(e)){for(X in a)a.hasOwnProperty(X)&&(n=a[X],n!==void 0&&Us(t,e,X,n,a,void 0));return}}for(h in a)a.hasOwnProperty(h)&&(n=a[h],n!=null&&Lt(t,e,h,n,a,null))}function Db(t,e,a,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,o=null,f=null,h=null,S=null,M=null,X=null;for(N in a){var K=a[N];if(a.hasOwnProperty(N)&&K!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":S=K;default:n.hasOwnProperty(N)||Lt(t,e,N,null,n,K)}}for(var z in n){var N=n[z];if(K=a[z],n.hasOwnProperty(z)&&(N!=null||K!=null))switch(z){case"type":o=N;break;case"name":i=N;break;case"checked":M=N;break;case"defaultChecked":X=N;break;case"value":f=N;break;case"defaultValue":h=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(137,e));break;default:N!==K&&Lt(t,e,z,N,n,K)}}Io(t,f,h,S,M,X,o,i);return;case"select":N=f=h=z=null;for(o in a)if(S=a[o],a.hasOwnProperty(o)&&S!=null)switch(o){case"value":break;case"multiple":N=S;default:n.hasOwnProperty(o)||Lt(t,e,o,null,n,S)}for(i in n)if(o=n[i],S=a[i],n.hasOwnProperty(i)&&(o!=null||S!=null))switch(i){case"value":z=o;break;case"defaultValue":h=o;break;case"multiple":f=o;default:o!==S&&Lt(t,e,i,o,n,S)}e=h,a=f,n=N,z!=null?Jl(t,!!a,z,!1):!!n!=!!a&&(e!=null?Jl(t,!!a,e,!0):Jl(t,!!a,a?[]:"",!1));return;case"textarea":N=z=null;for(h in a)if(i=a[h],a.hasOwnProperty(h)&&i!=null&&!n.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Lt(t,e,h,null,n,i)}for(f in n)if(i=n[f],o=a[f],n.hasOwnProperty(f)&&(i!=null||o!=null))switch(f){case"value":z=i;break;case"defaultValue":N=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(s(91));break;default:i!==o&&Lt(t,e,f,i,n,o)}ff(t,z,N);return;case"option":for(var bt in a)if(z=a[bt],a.hasOwnProperty(bt)&&z!=null&&!n.hasOwnProperty(bt))switch(bt){case"selected":t.selected=!1;break;default:Lt(t,e,bt,null,n,z)}for(S in n)if(z=n[S],N=a[S],n.hasOwnProperty(S)&&z!==N&&(z!=null||N!=null))switch(S){case"selected":t.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Lt(t,e,S,z,n,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pt in a)z=a[pt],a.hasOwnProperty(pt)&&z!=null&&!n.hasOwnProperty(pt)&&Lt(t,e,pt,null,n,z);for(M in n)if(z=n[M],N=a[M],n.hasOwnProperty(M)&&z!==N&&(z!=null||N!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,e));break;default:Lt(t,e,M,z,n,N)}return;default:if(tu(e)){for(var $t in a)z=a[$t],a.hasOwnProperty($t)&&z!==void 0&&!n.hasOwnProperty($t)&&Us(t,e,$t,void 0,n,z);for(X in n)z=n[X],N=a[X],!n.hasOwnProperty(X)||z===N||z===void 0&&N===void 0||Us(t,e,X,z,n,N);return}}for(var k in a)z=a[k],a.hasOwnProperty(k)&&z!=null&&!n.hasOwnProperty(k)&&Lt(t,e,k,null,n,z);for(K in n)z=n[K],N=a[K],!n.hasOwnProperty(K)||z===N||z==null&&N==null||Lt(t,e,K,z,n,N)}var Ls=null,$s=null;function Zr(t){return t.nodeType===9?t:t.ownerDocument}function hp(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function pp(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Ys(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gs=null;function Cb(){var t=window.event;return t&&t.type==="popstate"?t===Gs?!1:(Gs=t,!0):(Gs=null,!1)}var mp=typeof setTimeout=="function"?setTimeout:void 0,Ob=typeof clearTimeout=="function"?clearTimeout:void 0,gp=typeof Promise=="function"?Promise:void 0,Mb=typeof queueMicrotask=="function"?queueMicrotask:typeof gp<"u"?function(t){return gp.resolve(null).then(t).catch(zb)}:mp;function zb(t){setTimeout(function(){throw t})}function al(t){return t==="head"}function bp(t,e){var a=e,n=0,i=0;do{var o=a.nextSibling;if(t.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(0<n&&8>n){a=n;var f=t.ownerDocument;if(a&1&&Ci(f.documentElement),a&2&&Ci(f.body),a&4)for(a=f.head,Ci(a),f=a.firstChild;f;){var h=f.nextSibling,S=f.nodeName;f[Qn]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=h}}if(i===0){t.removeChild(o),Hi(e);return}i--}else a==="$"||a==="$?"||a==="$!"?i++:n=a.charCodeAt(0)-48;else n=0;a=o}while(a);Hi(e)}function qs(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":qs(a),Ko(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Nb(t,e,a,n){for(;t.nodeType===1;){var i=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[Qn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(o=t.getAttribute("rel"),o==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(o!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(o=t.getAttribute("src"),(o!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&o&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var o=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===o)return t}else return t;if(t=Pe(t.nextSibling),t===null)break}return null}function jb(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Pe(t.nextSibling),t===null))return null;return t}function Qs(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function _b(t,e){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")e();else{var n=function(){e(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),t._reactRetry=n}}function Pe(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Xs=null;function yp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}function vp(t,e,a){switch(e=Zr(a),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Ci(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Ko(t)}var We=new Map,xp=new Set;function Kr(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ma=L.d;L.d={f:Bb,r:Hb,D:Ub,C:Lb,L:$b,m:Yb,X:qb,S:Gb,M:Qb};function Bb(){var t=Ma.f(),e=Lr();return t||e}function Hb(t){var e=Vl(t);e!==null&&e.tag===5&&e.type==="form"?$d(e):Ma.r(t)}var kn=typeof document>"u"?null:document;function Ap(t,e,a){var n=kn;if(n&&typeof e=="string"&&e){var i=Ge(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),xp.has(i)||(xp.add(i),t={rel:t,crossOrigin:a,href:e},n.querySelector(i)===null&&(e=n.createElement("link"),me(e,"link",t),oe(e),n.head.appendChild(e)))}}function Ub(t){Ma.D(t),Ap("dns-prefetch",t,null)}function Lb(t,e){Ma.C(t,e),Ap("preconnect",t,e)}function $b(t,e,a){Ma.L(t,e,a);var n=kn;if(n&&t&&e){var i='link[rel="preload"][as="'+Ge(e)+'"]';e==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+Ge(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+Ge(a.imageSizes)+'"]')):i+='[href="'+Ge(t)+'"]';var o=i;switch(e){case"style":o=Dn(t);break;case"script":o=Cn(t)}We.has(o)||(t=x({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),We.set(o,t),n.querySelector(i)!==null||e==="style"&&n.querySelector(Oi(o))||e==="script"&&n.querySelector(Mi(o))||(e=n.createElement("link"),me(e,"link",t),oe(e),n.head.appendChild(e)))}}function Yb(t,e){Ma.m(t,e);var a=kn;if(a&&t){var n=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+Ge(n)+'"][href="'+Ge(t)+'"]',o=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Cn(t)}if(!We.has(o)&&(t=x({rel:"modulepreload",href:t},e),We.set(o,t),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Mi(o)))return}n=a.createElement("link"),me(n,"link",t),oe(n),a.head.appendChild(n)}}}function Gb(t,e,a){Ma.S(t,e,a);var n=kn;if(n&&t){var i=Zl(n).hoistableStyles,o=Dn(t);e=e||"default";var f=i.get(o);if(!f){var h={loading:0,preload:null};if(f=n.querySelector(Oi(o)))h.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":e},a),(a=We.get(o))&&Vs(t,a);var S=f=n.createElement("link");oe(S),me(S,"link",t),S._p=new Promise(function(M,X){S.onload=M,S.onerror=X}),S.addEventListener("load",function(){h.loading|=1}),S.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Wr(f,e,n)}f={type:"stylesheet",instance:f,count:1,state:h},i.set(o,f)}}}function qb(t,e){Ma.X(t,e);var a=kn;if(a&&t){var n=Zl(a).hoistableScripts,i=Cn(t),o=n.get(i);o||(o=a.querySelector(Mi(i)),o||(t=x({src:t,async:!0},e),(e=We.get(i))&&Zs(t,e),o=a.createElement("script"),oe(o),me(o,"link",t),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(i,o))}}function Qb(t,e){Ma.M(t,e);var a=kn;if(a&&t){var n=Zl(a).hoistableScripts,i=Cn(t),o=n.get(i);o||(o=a.querySelector(Mi(i)),o||(t=x({src:t,async:!0,type:"module"},e),(e=We.get(i))&&Zs(t,e),o=a.createElement("script"),oe(o),me(o,"link",t),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(i,o))}}function wp(t,e,a,n){var i=(i=at.current)?Kr(i):null;if(!i)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=Dn(a.href),a=Zl(i).hoistableStyles,n=a.get(e),n||(n={type:"style",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Dn(a.href);var o=Zl(i).hoistableStyles,f=o.get(t);if(f||(i=i.ownerDocument||i,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(t,f),(o=i.querySelector(Oi(t)))&&!o._p&&(f.instance=o,f.state.loading=5),We.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},We.set(t,a),o||Xb(i,t,a,f.state))),e&&n===null)throw Error(s(528,""));return f}if(e&&n!==null)throw Error(s(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Cn(a),a=Zl(i).hoistableScripts,n=a.get(e),n||(n={type:"script",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Dn(t){return'href="'+Ge(t)+'"'}function Oi(t){return'link[rel="stylesheet"]['+t+"]"}function Sp(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function Xb(t,e,a,n){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?n.loading=1:(e=t.createElement("link"),n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2}),me(e,"link",a),oe(e),t.head.appendChild(e))}function Cn(t){return'[src="'+Ge(t)+'"]'}function Mi(t){return"script[async]"+t}function Ep(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var n=t.querySelector('style[data-href~="'+Ge(a.href)+'"]');if(n)return e.instance=n,oe(n),n;var i=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),oe(n),me(n,"style",i),Wr(n,a.precedence,t),e.instance=n;case"stylesheet":i=Dn(a.href);var o=t.querySelector(Oi(i));if(o)return e.state.loading|=4,e.instance=o,oe(o),o;n=Sp(a),(i=We.get(i))&&Vs(n,i),o=(t.ownerDocument||t).createElement("link"),oe(o);var f=o;return f._p=new Promise(function(h,S){f.onload=h,f.onerror=S}),me(o,"link",n),e.state.loading|=4,Wr(o,a.precedence,t),e.instance=o;case"script":return o=Cn(a.src),(i=t.querySelector(Mi(o)))?(e.instance=i,oe(i),i):(n=a,(i=We.get(o))&&(n=x({},a),Zs(n,i)),t=t.ownerDocument||t,i=t.createElement("script"),oe(i),me(i,"link",n),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(n=e.instance,e.state.loading|=4,Wr(n,a.precedence,t));return e.instance}function Wr(t,e,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,o=i,f=0;f<n.length;f++){var h=n[f];if(h.dataset.precedence===e)o=h;else if(o!==i)break}o?o.parentNode.insertBefore(t,o.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function Vs(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Zs(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Jr=null;function Tp(t,e,a){if(Jr===null){var n=new Map,i=Jr=new Map;i.set(a,n)}else i=Jr,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(t))return n;for(n.set(t,null),a=a.getElementsByTagName(t),i=0;i<a.length;i++){var o=a[i];if(!(o[Qn]||o[ye]||t==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var f=o.getAttribute(e)||"";f=t+f;var h=n.get(f);h?h.push(o):n.set(f,[o])}}return n}function Rp(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function Vb(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function kp(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var zi=null;function Zb(){}function Kb(t,e,a){if(zi===null)throw Error(s(475));var n=zi;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var i=Dn(a.href),o=t.querySelector(Oi(i));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(n.count++,n=Fr.bind(n),t.then(n,n)),e.state.loading|=4,e.instance=o,oe(o);return}o=t.ownerDocument||t,a=Sp(a),(i=We.get(i))&&Vs(a,i),o=o.createElement("link"),oe(o);var f=o;f._p=new Promise(function(h,S){f.onload=h,f.onerror=S}),me(o,"link",a),e.instance=o}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(n.count++,e=Fr.bind(n),t.addEventListener("load",e),t.addEventListener("error",e))}}function Wb(){if(zi===null)throw Error(s(475));var t=zi;return t.stylesheets&&t.count===0&&Ks(t,t.stylesheets),0<t.count?function(e){var a=setTimeout(function(){if(t.stylesheets&&Ks(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Fr(){if(this.count--,this.count===0){if(this.stylesheets)Ks(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ir=null;function Ks(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ir=new Map,e.forEach(Jb,t),Ir=null,Fr.call(t))}function Jb(t,e){if(!(e.state.loading&4)){var a=Ir.get(t);if(a)var n=a.get(null);else{a=new Map,Ir.set(t,a);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<i.length;o++){var f=i[o];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(a.set(f.dataset.precedence,f),n=f)}n&&a.set(null,n)}i=e.instance,f=i.getAttribute("data-precedence"),o=a.get(f)||n,o===n&&a.set(null,i),a.set(f,i),this.count++,n=Fr.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),o?o.parentNode.insertBefore(i,o.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var Ni={$$typeof:G,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function Fb(t,e,a,n,i,o,f,h){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qo(0),this.hiddenUpdates=Qo(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=o,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function Dp(t,e,a,n,i,o,f,h,S,M,X,K){return t=new Fb(t,e,a,f,h,S,M,K),e=1,o===!0&&(e|=24),o=ze(3,null,null,e),t.current=o,o.stateNode=t,e=Cu(),e.refCount++,t.pooledCache=e,e.refCount++,o.memoizedState={element:n,isDehydrated:a,cache:e},Nu(o),t}function Cp(t){return t?(t=rn,t):rn}function Op(t,e,a,n,i,o){i=Cp(i),n.context===null?n.context=i:n.pendingContext=i,n=qa(e),n.payload={element:a},o=o===void 0?null:o,o!==null&&(n.callback=o),a=Qa(t,n,e),a!==null&&(He(a,t,e),si(a,t,e))}function Mp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function Ws(t,e){Mp(t,e),(t=t.alternate)&&Mp(t,e)}function zp(t){if(t.tag===13){var e=nn(t,67108864);e!==null&&He(e,t,67108864),Ws(t,67108864)}}var Pr=!0;function Ib(t,e,a,n){var i=R.T;R.T=null;var o=L.p;try{L.p=2,Js(t,e,a,n)}finally{L.p=o,R.T=i}}function Pb(t,e,a,n){var i=R.T;R.T=null;var o=L.p;try{L.p=8,Js(t,e,a,n)}finally{L.p=o,R.T=i}}function Js(t,e,a,n){if(Pr){var i=Fs(n);if(i===null)Hs(t,e,n,to,a),jp(t,n);else if(ey(i,t,e,a,n))n.stopPropagation();else if(jp(t,n),e&4&&-1<ty.indexOf(t)){for(;i!==null;){var o=Vl(i);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var f=ga(o.pendingLanes);if(f!==0){var h=o;for(h.pendingLanes|=2,h.entangledLanes|=2;f;){var S=1<<31-we(f);h.entanglements[1]|=S,f&=~S}fa(o),(Bt&6)===0&&(Hr=Qt()+500,Ri(0))}}break;case 13:h=nn(o,2),h!==null&&He(h,o,2),Lr(),Ws(o,2)}if(o=Fs(n),o===null&&Hs(t,e,n,to,a),o===i)break;i=o}i!==null&&n.stopPropagation()}else Hs(t,e,n,null,a)}}function Fs(t){return t=au(t),Is(t)}var to=null;function Is(t){if(to=null,t=Xl(t),t!==null){var e=d(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=p(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return to=t,null}function Np(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(be()){case re:return 2;case Le:return 8;case Ee:case ia:return 32;case $e:return 268435456;default:return 32}default:return 32}}var Ps=!1,ll=null,nl=null,il=null,ji=new Map,_i=new Map,rl=[],ty="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jp(t,e){switch(t){case"focusin":case"focusout":ll=null;break;case"dragenter":case"dragleave":nl=null;break;case"mouseover":case"mouseout":il=null;break;case"pointerover":case"pointerout":ji.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_i.delete(e.pointerId)}}function Bi(t,e,a,n,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:a,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Vl(e),e!==null&&zp(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ey(t,e,a,n,i){switch(e){case"focusin":return ll=Bi(ll,t,e,a,n,i),!0;case"dragenter":return nl=Bi(nl,t,e,a,n,i),!0;case"mouseover":return il=Bi(il,t,e,a,n,i),!0;case"pointerover":var o=i.pointerId;return ji.set(o,Bi(ji.get(o)||null,t,e,a,n,i)),!0;case"gotpointercapture":return o=i.pointerId,_i.set(o,Bi(_i.get(o)||null,t,e,a,n,i)),!0}return!1}function _p(t){var e=Xl(t.target);if(e!==null){var a=d(e);if(a!==null){if(e=a.tag,e===13){if(e=p(a),e!==null){t.blockedOn=e,Kg(t.priority,function(){if(a.tag===13){var n=Be();n=Xo(n);var i=nn(a,n);i!==null&&He(i,a,n),Ws(a,n)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function eo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Fs(t.nativeEvent);if(a===null){a=t.nativeEvent;var n=new a.constructor(a.type,a);eu=n,a.target.dispatchEvent(n),eu=null}else return e=Vl(a),e!==null&&zp(e),t.blockedOn=a,!1;e.shift()}return!0}function Bp(t,e,a){eo(t)&&a.delete(e)}function ay(){Ps=!1,ll!==null&&eo(ll)&&(ll=null),nl!==null&&eo(nl)&&(nl=null),il!==null&&eo(il)&&(il=null),ji.forEach(Bp),_i.forEach(Bp)}function ao(t,e){t.blockedOn===e&&(t.blockedOn=null,Ps||(Ps=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,ay)))}var lo=null;function Hp(t){lo!==t&&(lo=t,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){lo===t&&(lo=null);for(var e=0;e<t.length;e+=3){var a=t[e],n=t[e+1],i=t[e+2];if(typeof n!="function"){if(Is(n||a)===null)continue;break}var o=Vl(a);o!==null&&(t.splice(e,3),e-=3,Iu(o,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function Hi(t){function e(S){return ao(S,t)}ll!==null&&ao(ll,t),nl!==null&&ao(nl,t),il!==null&&ao(il,t),ji.forEach(e),_i.forEach(e);for(var a=0;a<rl.length;a++){var n=rl[a];n.blockedOn===t&&(n.blockedOn=null)}for(;0<rl.length&&(a=rl[0],a.blockedOn===null);)_p(a),a.blockedOn===null&&rl.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],o=a[n+1],f=i[Te]||null;if(typeof o=="function")f||Hp(a);else if(f){var h=null;if(o&&o.hasAttribute("formAction")){if(i=o,f=o[Te]||null)h=f.formAction;else if(Is(i)!==null)continue}else h=f.action;typeof h=="function"?a[n+1]=h:(a.splice(n,3),n-=3),Hp(a)}}}function tc(t){this._internalRoot=t}no.prototype.render=tc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var a=e.current,n=Be();Op(a,n,t,e,null,null)},no.prototype.unmount=tc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Op(t.current,2,null,t,null,null),Lr(),e[Ql]=null}};function no(t){this._internalRoot=t}no.prototype.unstable_scheduleHydration=function(t){if(t){var e=Pc();t={blockedOn:null,target:t,priority:e};for(var a=0;a<rl.length&&e!==0&&e<rl[a].priority;a++);rl.splice(a,0,t),a===0&&_p(t)}};var Up=r.version;if(Up!=="19.1.0")throw Error(s(527,Up,"19.1.0"));L.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=b(e),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var ly={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!io.isDisabled&&io.supportsFiber)try{Ua=io.inject(ly),Ae=io}catch{}}return Li.createRoot=function(t,e){if(!c(t))throw Error(s(299));var a=!1,n="",i=th,o=eh,f=ah,h=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(o=e.onCaughtError),e.onRecoverableError!==void 0&&(f=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(h=e.unstable_transitionCallbacks)),e=Dp(t,1,!1,null,null,a,n,i,o,f,h,null),t[Ql]=e.current,Bs(t),new tc(e)},Li.hydrateRoot=function(t,e,a){if(!c(t))throw Error(s(299));var n=!1,i="",o=th,f=eh,h=ah,S=null,M=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(f=a.onCaughtError),a.onRecoverableError!==void 0&&(h=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(S=a.unstable_transitionCallbacks),a.formState!==void 0&&(M=a.formState)),e=Dp(t,1,!0,e,a??null,n,i,o,f,h,S,M),e.context=Cp(null),a=e.current,n=Be(),n=Xo(n),i=qa(n),i.callback=null,Qa(a,i,n),a=n,e.current.lanes=a,qn(e,a),fa(e),t[Ql]=e.current,Bs(t),new no(e)},Li.version="19.1.0",Li}var Kp;function dy(){if(Kp)return lc.exports;Kp=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),lc.exports=fy(),lc.exports}var Cm=dy();const Oe=Mc(Cm);/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Wp="popstate";function hy(l={}){function r(c,d){let{pathname:p="/",search:y="",hash:b=""}=$n(c.location.hash.substring(1));return!p.startsWith("/")&&!p.startsWith(".")&&(p="/"+p),mc("",{pathname:p,search:y,hash:b},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function u(c,d){let p=c.document.querySelector("base"),y="";if(p&&p.getAttribute("href")){let b=c.location.href,m=b.indexOf("#");y=m===-1?b:b.slice(0,m)}return y+"#"+(typeof d=="string"?d:qi(d))}function s(c,d){aa(c.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(d)})`)}return my(r,u,s,l)}function ie(l,r){if(l===!1||l===null||typeof l>"u")throw new Error(r)}function aa(l,r){if(!l){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function py(){return Math.random().toString(36).substring(2,10)}function Jp(l,r){return{usr:l.state,key:l.key,idx:r}}function mc(l,r,u=null,s){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof r=="string"?$n(r):r,state:u,key:r&&r.key||s||py()}}function qi({pathname:l="/",search:r="",hash:u=""}){return r&&r!=="?"&&(l+=r.charAt(0)==="?"?r:"?"+r),u&&u!=="#"&&(l+=u.charAt(0)==="#"?u:"#"+u),l}function $n(l){let r={};if(l){let u=l.indexOf("#");u>=0&&(r.hash=l.substring(u),l=l.substring(0,u));let s=l.indexOf("?");s>=0&&(r.search=l.substring(s),l=l.substring(0,s)),l&&(r.pathname=l)}return r}function my(l,r,u,s={}){let{window:c=document.defaultView,v5Compat:d=!1}=s,p=c.history,y="POP",b=null,m=x();m==null&&(m=0,p.replaceState({...p.state,idx:m},""));function x(){return(p.state||{idx:null}).idx}function E(){y="POP";let _=x(),$=_==null?null:_-m;m=_,b&&b({action:y,location:F.location,delta:$})}function O(_,$){y="PUSH";let B=mc(F.location,_,$);u&&u(B,_),m=x()+1;let G=Jp(B,m),I=F.createHref(B);try{p.pushState(G,"",I)}catch(W){if(W instanceof DOMException&&W.name==="DataCloneError")throw W;c.location.assign(I)}d&&b&&b({action:y,location:F.location,delta:1})}function U(_,$){y="REPLACE";let B=mc(F.location,_,$);u&&u(B,_),m=x();let G=Jp(B,m),I=F.createHref(B);p.replaceState(G,"",I),d&&b&&b({action:y,location:F.location,delta:0})}function Y(_){return gy(_)}let F={get action(){return y},get location(){return l(c,p)},listen(_){if(b)throw new Error("A history only accepts one active listener");return c.addEventListener(Wp,E),b=_,()=>{c.removeEventListener(Wp,E),b=null}},createHref(_){return r(c,_)},createURL:Y,encodeLocation(_){let $=Y(_);return{pathname:$.pathname,search:$.search,hash:$.hash}},push:O,replace:U,go(_){return p.go(_)}};return F}function gy(l,r=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),ie(u,"No window.location.(origin|href) available to create URL");let s=typeof l=="string"?l:qi(l);return s=s.replace(/ $/,"%20"),!r&&s.startsWith("//")&&(s=u+s),new URL(s,u)}function Om(l,r,u="/"){return by(l,r,u,!1)}function by(l,r,u,s){let c=typeof r=="string"?$n(r):r,d=_a(c.pathname||"/",u);if(d==null)return null;let p=Mm(l);yy(p);let y=null;for(let b=0;y==null&&b<p.length;++b){let m=Cy(d);y=ky(p[b],m,s)}return y}function Mm(l,r=[],u=[],s="",c=!1){let d=(p,y,b=c,m)=>{let x={relativePath:m===void 0?p.path||"":m,caseSensitive:p.caseSensitive===!0,childrenIndex:y,route:p};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(s)&&b)return;ie(x.relativePath.startsWith(s),`Absolute route path "${x.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(s.length)}let E=ja([s,x.relativePath]),O=u.concat(x);p.children&&p.children.length>0&&(ie(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),Mm(p.children,r,O,E,b)),!(p.path==null&&!p.index)&&r.push({path:E,score:Ty(E,p.index),routesMeta:O})};return l.forEach((p,y)=>{var b;if(p.path===""||!((b=p.path)!=null&&b.includes("?")))d(p,y);else for(let m of zm(p.path))d(p,y,!0,m)}),r}function zm(l){let r=l.split("/");if(r.length===0)return[];let[u,...s]=r,c=u.endsWith("?"),d=u.replace(/\?$/,"");if(s.length===0)return c?[d,""]:[d];let p=zm(s.join("/")),y=[];return y.push(...p.map(b=>b===""?d:[d,b].join("/"))),c&&y.push(...p),y.map(b=>l.startsWith("/")&&b===""?"/":b)}function yy(l){l.sort((r,u)=>r.score!==u.score?u.score-r.score:Ry(r.routesMeta.map(s=>s.childrenIndex),u.routesMeta.map(s=>s.childrenIndex)))}var vy=/^:[\w-]+$/,xy=3,Ay=2,wy=1,Sy=10,Ey=-2,Fp=l=>l==="*";function Ty(l,r){let u=l.split("/"),s=u.length;return u.some(Fp)&&(s+=Ey),r&&(s+=Ay),u.filter(c=>!Fp(c)).reduce((c,d)=>c+(vy.test(d)?xy:d===""?wy:Sy),s)}function Ry(l,r){return l.length===r.length&&l.slice(0,-1).every((s,c)=>s===r[c])?l[l.length-1]-r[r.length-1]:0}function ky(l,r,u=!1){let{routesMeta:s}=l,c={},d="/",p=[];for(let y=0;y<s.length;++y){let b=s[y],m=y===s.length-1,x=d==="/"?r:r.slice(d.length)||"/",E=xo({path:b.relativePath,caseSensitive:b.caseSensitive,end:m},x),O=b.route;if(!E&&m&&u&&!s[s.length-1].route.index&&(E=xo({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},x)),!E)return null;Object.assign(c,E.params),p.push({params:c,pathname:ja([d,E.pathname]),pathnameBase:Ny(ja([d,E.pathnameBase])),route:O}),E.pathnameBase!=="/"&&(d=ja([d,E.pathnameBase]))}return p}function xo(l,r){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[u,s]=Dy(l.path,l.caseSensitive,l.end),c=r.match(u);if(!c)return null;let d=c[0],p=d.replace(/(.)\/+$/,"$1"),y=c.slice(1);return{params:s.reduce((m,{paramName:x,isOptional:E},O)=>{if(x==="*"){let Y=y[O]||"";p=d.slice(0,d.length-Y.length).replace(/(.)\/+$/,"$1")}const U=y[O];return E&&!U?m[x]=void 0:m[x]=(U||"").replace(/%2F/g,"/"),m},{}),pathname:d,pathnameBase:p,pattern:l}}function Dy(l,r=!1,u=!0){aa(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let s=[],c="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,y,b)=>(s.push({paramName:y,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(s.push({paramName:"*"}),c+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?c+="\\/*$":l!==""&&l!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,r?void 0:"i"),s]}function Cy(l){try{return l.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return aa(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),l}}function _a(l,r){if(r==="/")return l;if(!l.toLowerCase().startsWith(r.toLowerCase()))return null;let u=r.endsWith("/")?r.length-1:r.length,s=l.charAt(u);return s&&s!=="/"?null:l.slice(u)||"/"}function Oy(l,r="/"){let{pathname:u,search:s="",hash:c=""}=typeof l=="string"?$n(l):l;return{pathname:u?u.startsWith("/")?u:My(u,r):r,search:jy(s),hash:_y(c)}}function My(l,r){let u=r.replace(/\/+$/,"").split("/");return l.split("/").forEach(c=>{c===".."?u.length>1&&u.pop():c!=="."&&u.push(c)}),u.length>1?u.join("/"):"/"}function oc(l,r,u,s){return`Cannot include a '${l}' character in a manually specified \`to.${r}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function zy(l){return l.filter((r,u)=>u===0||r.route.path&&r.route.path.length>0)}function Nm(l){let r=zy(l);return r.map((u,s)=>s===r.length-1?u.pathname:u.pathnameBase)}function jm(l,r,u,s=!1){let c;typeof l=="string"?c=$n(l):(c={...l},ie(!c.pathname||!c.pathname.includes("?"),oc("?","pathname","search",c)),ie(!c.pathname||!c.pathname.includes("#"),oc("#","pathname","hash",c)),ie(!c.search||!c.search.includes("#"),oc("#","search","hash",c)));let d=l===""||c.pathname==="",p=d?"/":c.pathname,y;if(p==null)y=u;else{let E=r.length-1;if(!s&&p.startsWith("..")){let O=p.split("/");for(;O[0]==="..";)O.shift(),E-=1;c.pathname=O.join("/")}y=E>=0?r[E]:"/"}let b=Oy(c,y),m=p&&p!=="/"&&p.endsWith("/"),x=(d||p===".")&&u.endsWith("/");return!b.pathname.endsWith("/")&&(m||x)&&(b.pathname+="/"),b}var ja=l=>l.join("/").replace(/\/\/+/g,"/"),Ny=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),jy=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,_y=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function By(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}var _m=["POST","PUT","PATCH","DELETE"];new Set(_m);var Hy=["GET",..._m];new Set(Hy);var Yn=v.createContext(null);Yn.displayName="DataRouter";var Co=v.createContext(null);Co.displayName="DataRouterState";v.createContext(!1);var Bm=v.createContext({isTransitioning:!1});Bm.displayName="ViewTransition";var Uy=v.createContext(new Map);Uy.displayName="Fetchers";var Ly=v.createContext(null);Ly.displayName="Await";var pa=v.createContext(null);pa.displayName="Navigation";var Oo=v.createContext(null);Oo.displayName="Location";var Ba=v.createContext({outlet:null,matches:[],isDataRoute:!1});Ba.displayName="Route";var Nc=v.createContext(null);Nc.displayName="RouteError";function $y(l,{relative:r}={}){ie(Zi(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:s}=v.useContext(pa),{hash:c,pathname:d,search:p}=Ki(l,{relative:r}),y=d;return u!=="/"&&(y=d==="/"?u:ja([u,d])),s.createHref({pathname:y,search:p,hash:c})}function Zi(){return v.useContext(Oo)!=null}function hl(){return ie(Zi(),"useLocation() may be used only in the context of a <Router> component."),v.useContext(Oo).location}var Hm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Um(l){v.useContext(pa).static||v.useLayoutEffect(l)}function Yy(){let{isDataRoute:l}=v.useContext(Ba);return l?tv():Gy()}function Gy(){ie(Zi(),"useNavigate() may be used only in the context of a <Router> component.");let l=v.useContext(Yn),{basename:r,navigator:u}=v.useContext(pa),{matches:s}=v.useContext(Ba),{pathname:c}=hl(),d=JSON.stringify(Nm(s)),p=v.useRef(!1);return Um(()=>{p.current=!0}),v.useCallback((b,m={})=>{if(aa(p.current,Hm),!p.current)return;if(typeof b=="number"){u.go(b);return}let x=jm(b,JSON.parse(d),c,m.relative==="path");l==null&&r!=="/"&&(x.pathname=x.pathname==="/"?r:ja([r,x.pathname])),(m.replace?u.replace:u.push)(x,m.state,m)},[r,u,d,c,l])}v.createContext(null);function Ki(l,{relative:r}={}){let{matches:u}=v.useContext(Ba),{pathname:s}=hl(),c=JSON.stringify(Nm(u));return v.useMemo(()=>jm(l,JSON.parse(c),s,r==="path"),[l,c,s,r])}function qy(l,r,u,s,c){ie(Zi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=v.useContext(pa),{matches:p}=v.useContext(Ba),y=p[p.length-1],b=y?y.params:{},m=y?y.pathname:"/",x=y?y.pathnameBase:"/",E=y&&y.route;{let B=E&&E.path||"";Lm(m,!E||B.endsWith("*")||B.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B==="/"?"*":`${B}/*`}">.`)}let O=hl(),U;U=O;let Y=U.pathname||"/",F=Y;if(x!=="/"){let B=x.replace(/^\//,"").split("/");F="/"+Y.replace(/^\//,"").split("/").slice(B.length).join("/")}let _=Om(l,{pathname:F});return aa(E||_!=null,`No routes matched location "${U.pathname}${U.search}${U.hash}" `),aa(_==null||_[_.length-1].route.element!==void 0||_[_.length-1].route.Component!==void 0||_[_.length-1].route.lazy!==void 0,`Matched leaf route at location "${U.pathname}${U.search}${U.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),Ky(_&&_.map(B=>Object.assign({},B,{params:Object.assign({},b,B.params),pathname:ja([x,d.encodeLocation?d.encodeLocation(B.pathname).pathname:B.pathname]),pathnameBase:B.pathnameBase==="/"?x:ja([x,d.encodeLocation?d.encodeLocation(B.pathnameBase).pathname:B.pathnameBase])})),p,u,s,c)}function Qy(){let l=Py(),r=By(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),u=l instanceof Error?l.stack:null,s="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:s},d={padding:"2px 4px",backgroundColor:s},p=null;return console.error("Error handled by React Router default ErrorBoundary:",l),p=v.createElement(v.Fragment,null,v.createElement("p",null,"💿 Hey developer 👋"),v.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",v.createElement("code",{style:d},"ErrorBoundary")," or"," ",v.createElement("code",{style:d},"errorElement")," prop on your route.")),v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},r),u?v.createElement("pre",{style:c},u):null,p)}var Xy=v.createElement(Qy,null),Vy=class extends v.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,r){return r.location!==l.location||r.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:r.error,location:r.location,revalidation:l.revalidation||r.revalidation}}componentDidCatch(l,r){this.props.unstable_onError?this.props.unstable_onError(l,r):console.error("React Router caught the following error during render",l)}render(){return this.state.error!==void 0?v.createElement(Ba.Provider,{value:this.props.routeContext},v.createElement(Nc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Zy({routeContext:l,match:r,children:u}){let s=v.useContext(Yn);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),v.createElement(Ba.Provider,{value:l},u)}function Ky(l,r=[],u=null,s=null,c=null){if(l==null){if(!u)return null;if(u.errors)l=u.matches;else if(r.length===0&&!u.initialized&&u.matches.length>0)l=u.matches;else return null}let d=l,p=u==null?void 0:u.errors;if(p!=null){let m=d.findIndex(x=>x.route.id&&(p==null?void 0:p[x.route.id])!==void 0);ie(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),d=d.slice(0,Math.min(d.length,m+1))}let y=!1,b=-1;if(u)for(let m=0;m<d.length;m++){let x=d[m];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(b=m),x.route.id){let{loaderData:E,errors:O}=u,U=x.route.loader&&!E.hasOwnProperty(x.route.id)&&(!O||O[x.route.id]===void 0);if(x.route.lazy||U){y=!0,b>=0?d=d.slice(0,b+1):d=[d[0]];break}}}return d.reduceRight((m,x,E)=>{let O,U=!1,Y=null,F=null;u&&(O=p&&x.route.id?p[x.route.id]:void 0,Y=x.route.errorElement||Xy,y&&(b<0&&E===0?(Lm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),U=!0,F=null):b===E&&(U=!0,F=x.route.hydrateFallbackElement||null)));let _=r.concat(d.slice(0,E+1)),$=()=>{let B;return O?B=Y:U?B=F:x.route.Component?B=v.createElement(x.route.Component,null):x.route.element?B=x.route.element:B=m,v.createElement(Zy,{match:x,routeContext:{outlet:m,matches:_,isDataRoute:u!=null},children:B})};return u&&(x.route.ErrorBoundary||x.route.errorElement||E===0)?v.createElement(Vy,{location:u.location,revalidation:u.revalidation,component:Y,error:O,children:$(),routeContext:{outlet:null,matches:_,isDataRoute:!0},unstable_onError:s}):$()},null)}function jc(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wy(l){let r=v.useContext(Yn);return ie(r,jc(l)),r}function Jy(l){let r=v.useContext(Co);return ie(r,jc(l)),r}function Fy(l){let r=v.useContext(Ba);return ie(r,jc(l)),r}function _c(l){let r=Fy(l),u=r.matches[r.matches.length-1];return ie(u.route.id,`${l} can only be used on routes that contain a unique "id"`),u.route.id}function Iy(){return _c("useRouteId")}function Py(){var s;let l=v.useContext(Nc),r=Jy("useRouteError"),u=_c("useRouteError");return l!==void 0?l:(s=r.errors)==null?void 0:s[u]}function tv(){let{router:l}=Wy("useNavigate"),r=_c("useNavigate"),u=v.useRef(!1);return Um(()=>{u.current=!0}),v.useCallback(async(c,d={})=>{aa(u.current,Hm),u.current&&(typeof c=="number"?l.navigate(c):await l.navigate(c,{fromRouteId:r,...d}))},[l,r])}var Ip={};function Lm(l,r,u){!r&&!Ip[l]&&(Ip[l]=!0,aa(!1,u))}v.memo(ev);function ev({routes:l,future:r,state:u,unstable_onError:s}){return qy(l,void 0,u,s,r)}function av({basename:l="/",children:r=null,location:u,navigationType:s="POP",navigator:c,static:d=!1}){ie(!Zi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=l.replace(/^\/*/,"/"),y=v.useMemo(()=>({basename:p,navigator:c,static:d,future:{}}),[p,c,d]);typeof u=="string"&&(u=$n(u));let{pathname:b="/",search:m="",hash:x="",state:E=null,key:O="default"}=u,U=v.useMemo(()=>{let Y=_a(b,p);return Y==null?null:{location:{pathname:Y,search:m,hash:x,state:E,key:O},navigationType:s}},[p,b,m,x,E,O,s]);return aa(U!=null,`<Router basename="${p}"> is not able to match the URL "${b}${m}${x}" because it does not start with the basename, so the <Router> won't render anything.`),U==null?null:v.createElement(pa.Provider,{value:y},v.createElement(Oo.Provider,{children:r,value:U}))}var ho="get",po="application/x-www-form-urlencoded";function Mo(l){return l!=null&&typeof l.tagName=="string"}function lv(l){return Mo(l)&&l.tagName.toLowerCase()==="button"}function nv(l){return Mo(l)&&l.tagName.toLowerCase()==="form"}function iv(l){return Mo(l)&&l.tagName.toLowerCase()==="input"}function rv(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function ov(l,r){return l.button===0&&(!r||r==="_self")&&!rv(l)}var ro=null;function uv(){if(ro===null)try{new FormData(document.createElement("form"),0),ro=!1}catch{ro=!0}return ro}var sv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function uc(l){return l!=null&&!sv.has(l)?(aa(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${po}"`),null):l}function cv(l,r){let u,s,c,d,p;if(nv(l)){let y=l.getAttribute("action");s=y?_a(y,r):null,u=l.getAttribute("method")||ho,c=uc(l.getAttribute("enctype"))||po,d=new FormData(l)}else if(lv(l)||iv(l)&&(l.type==="submit"||l.type==="image")){let y=l.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=l.getAttribute("formaction")||y.getAttribute("action");if(s=b?_a(b,r):null,u=l.getAttribute("formmethod")||y.getAttribute("method")||ho,c=uc(l.getAttribute("formenctype"))||uc(y.getAttribute("enctype"))||po,d=new FormData(y,l),!uv()){let{name:m,type:x,value:E}=l;if(x==="image"){let O=m?`${m}.`:"";d.append(`${O}x`,"0"),d.append(`${O}y`,"0")}else m&&d.append(m,E)}}else{if(Mo(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=ho,s=null,c=po,p=l}return d&&c==="text/plain"&&(p=d,d=void 0),{action:s,method:u.toLowerCase(),encType:c,formData:d,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Bc(l,r){if(l===!1||l===null||typeof l>"u")throw new Error(r)}function fv(l,r,u){let s=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return s.pathname==="/"?s.pathname=`_root.${u}`:r&&_a(s.pathname,r)==="/"?s.pathname=`${r.replace(/\/$/,"")}/_root.${u}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${u}`,s}async function dv(l,r){if(l.id in r)return r[l.id];try{let u=await import(l.module);return r[l.id]=u,u}catch(u){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function hv(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function pv(l,r,u){let s=await Promise.all(l.map(async c=>{let d=r.routes[c.route.id];if(d){let p=await dv(d,u);return p.links?p.links():[]}return[]}));return yv(s.flat(1).filter(hv).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function Pp(l,r,u,s,c,d){let p=(b,m)=>u[m]?b.route.id!==u[m].route.id:!0,y=(b,m)=>{var x;return u[m].pathname!==b.pathname||((x=u[m].route.path)==null?void 0:x.endsWith("*"))&&u[m].params["*"]!==b.params["*"]};return d==="assets"?r.filter((b,m)=>p(b,m)||y(b,m)):d==="data"?r.filter((b,m)=>{var E;let x=s.routes[b.route.id];if(!x||!x.hasLoader)return!1;if(p(b,m)||y(b,m))return!0;if(b.route.shouldRevalidate){let O=b.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:((E=u[0])==null?void 0:E.params)||{},nextUrl:new URL(l,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof O=="boolean")return O}return!0}):[]}function mv(l,r,{includeHydrateFallback:u}={}){return gv(l.map(s=>{let c=r.routes[s.route.id];if(!c)return[];let d=[c.module];return c.clientActionModule&&(d=d.concat(c.clientActionModule)),c.clientLoaderModule&&(d=d.concat(c.clientLoaderModule)),u&&c.hydrateFallbackModule&&(d=d.concat(c.hydrateFallbackModule)),c.imports&&(d=d.concat(c.imports)),d}).flat(1))}function gv(l){return[...new Set(l)]}function bv(l){let r={},u=Object.keys(l).sort();for(let s of u)r[s]=l[s];return r}function yv(l,r){let u=new Set;return new Set(r),l.reduce((s,c)=>{let d=JSON.stringify(bv(c));return u.has(d)||(u.add(d),s.push({key:d,link:c})),s},[])}function $m(){let l=v.useContext(Yn);return Bc(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function vv(){let l=v.useContext(Co);return Bc(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var Hc=v.createContext(void 0);Hc.displayName="FrameworkContext";function Ym(){let l=v.useContext(Hc);return Bc(l,"You must render this element inside a <HydratedRouter> element"),l}function xv(l,r){let u=v.useContext(Hc),[s,c]=v.useState(!1),[d,p]=v.useState(!1),{onFocus:y,onBlur:b,onMouseEnter:m,onMouseLeave:x,onTouchStart:E}=r,O=v.useRef(null);v.useEffect(()=>{if(l==="render"&&p(!0),l==="viewport"){let F=$=>{$.forEach(B=>{p(B.isIntersecting)})},_=new IntersectionObserver(F,{threshold:.5});return O.current&&_.observe(O.current),()=>{_.disconnect()}}},[l]),v.useEffect(()=>{if(s){let F=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(F)}}},[s]);let U=()=>{c(!0)},Y=()=>{c(!1),p(!1)};return u?l!=="intent"?[d,O,{}]:[d,O,{onFocus:$i(y,U),onBlur:$i(b,Y),onMouseEnter:$i(m,U),onMouseLeave:$i(x,Y),onTouchStart:$i(E,U)}]:[!1,O,{}]}function $i(l,r){return u=>{l&&l(u),u.defaultPrevented||r(u)}}function Av({page:l,...r}){let{router:u}=$m(),s=v.useMemo(()=>Om(u.routes,l,u.basename),[u.routes,l,u.basename]);return s?v.createElement(Sv,{page:l,matches:s,...r}):null}function wv(l){let{manifest:r,routeModules:u}=Ym(),[s,c]=v.useState([]);return v.useEffect(()=>{let d=!1;return pv(l,r,u).then(p=>{d||c(p)}),()=>{d=!0}},[l,r,u]),s}function Sv({page:l,matches:r,...u}){let s=hl(),{manifest:c,routeModules:d}=Ym(),{basename:p}=$m(),{loaderData:y,matches:b}=vv(),m=v.useMemo(()=>Pp(l,r,b,c,s,"data"),[l,r,b,c,s]),x=v.useMemo(()=>Pp(l,r,b,c,s,"assets"),[l,r,b,c,s]),E=v.useMemo(()=>{if(l===s.pathname+s.search+s.hash)return[];let Y=new Set,F=!1;if(r.forEach($=>{var G;let B=c.routes[$.route.id];!B||!B.hasLoader||(!m.some(I=>I.route.id===$.route.id)&&$.route.id in y&&((G=d[$.route.id])!=null&&G.shouldRevalidate)||B.hasClientLoader?F=!0:Y.add($.route.id))}),Y.size===0)return[];let _=fv(l,p,"data");return F&&Y.size>0&&_.searchParams.set("_routes",r.filter($=>Y.has($.route.id)).map($=>$.route.id).join(",")),[_.pathname+_.search]},[p,y,s,c,m,r,l,d]),O=v.useMemo(()=>mv(x,c),[x,c]),U=wv(x);return v.createElement(v.Fragment,null,E.map(Y=>v.createElement("link",{key:Y,rel:"prefetch",as:"fetch",href:Y,...u})),O.map(Y=>v.createElement("link",{key:Y,rel:"modulepreload",href:Y,...u})),U.map(({key:Y,link:F})=>v.createElement("link",{key:Y,nonce:u.nonce,...F})))}function Ev(...l){return r=>{l.forEach(u=>{typeof u=="function"?u(r):u!=null&&(u.current=r)})}}var Gm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Gm&&(window.__reactRouterVersion="7.9.1")}catch{}function Tv({basename:l,children:r,window:u}){let s=v.useRef();s.current==null&&(s.current=hy({window:u,v5Compat:!0}));let c=s.current,[d,p]=v.useState({action:c.action,location:c.location}),y=v.useCallback(b=>{v.startTransition(()=>p(b))},[p]);return v.useLayoutEffect(()=>c.listen(y),[c,y]),v.createElement(av,{basename:l,children:r,location:d.location,navigationType:d.action,navigator:c})}var qm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qm=v.forwardRef(function({onClick:r,discover:u="render",prefetch:s="none",relative:c,reloadDocument:d,replace:p,state:y,target:b,to:m,preventScrollReset:x,viewTransition:E,...O},U){let{basename:Y}=v.useContext(pa),F=typeof m=="string"&&qm.test(m),_,$=!1;if(typeof m=="string"&&F&&(_=m,Gm))try{let ft=new URL(window.location.href),Ot=m.startsWith("//")?new URL(ft.protocol+m):new URL(m),Rt=_a(Ot.pathname,Y);Ot.origin===ft.origin&&Rt!=null?m=Rt+Ot.search+Ot.hash:$=!0}catch{aa(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let B=$y(m,{relative:c}),[G,I,W]=xv(s,O),nt=Cv(m,{replace:p,state:y,target:b,preventScrollReset:x,relative:c,viewTransition:E});function lt(ft){r&&r(ft),ft.defaultPrevented||nt(ft)}let yt=v.createElement("a",{...O,...W,href:_||B,onClick:$||d?r:lt,ref:Ev(U,I),target:b,"data-discover":!F&&u==="render"?"true":void 0});return G&&!F?v.createElement(v.Fragment,null,yt,v.createElement(Av,{page:B})):yt});Qm.displayName="Link";var Rv=v.forwardRef(function({"aria-current":r="page",caseSensitive:u=!1,className:s="",end:c=!1,style:d,to:p,viewTransition:y,children:b,...m},x){let E=Ki(p,{relative:m.relative}),O=hl(),U=v.useContext(Co),{navigator:Y,basename:F}=v.useContext(pa),_=U!=null&&jv(E)&&y===!0,$=Y.encodeLocation?Y.encodeLocation(E).pathname:E.pathname,B=O.pathname,G=U&&U.navigation&&U.navigation.location?U.navigation.location.pathname:null;u||(B=B.toLowerCase(),G=G?G.toLowerCase():null,$=$.toLowerCase()),G&&F&&(G=_a(G,F)||G);const I=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let W=B===$||!c&&B.startsWith($)&&B.charAt(I)==="/",nt=G!=null&&(G===$||!c&&G.startsWith($)&&G.charAt($.length)==="/"),lt={isActive:W,isPending:nt,isTransitioning:_},yt=W?r:void 0,ft;typeof s=="function"?ft=s(lt):ft=[s,W?"active":null,nt?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let Ot=typeof d=="function"?d(lt):d;return v.createElement(Qm,{...m,"aria-current":yt,className:ft,ref:x,style:Ot,to:p,viewTransition:y},typeof b=="function"?b(lt):b)});Rv.displayName="NavLink";var kv=v.forwardRef(({discover:l="render",fetcherKey:r,navigate:u,reloadDocument:s,replace:c,state:d,method:p=ho,action:y,onSubmit:b,relative:m,preventScrollReset:x,viewTransition:E,...O},U)=>{let Y=zv(),F=Nv(y,{relative:m}),_=p.toLowerCase()==="get"?"get":"post",$=typeof y=="string"&&qm.test(y),B=G=>{if(b&&b(G),G.defaultPrevented)return;G.preventDefault();let I=G.nativeEvent.submitter,W=(I==null?void 0:I.getAttribute("formmethod"))||p;Y(I||G.currentTarget,{fetcherKey:r,method:W,navigate:u,replace:c,state:d,relative:m,preventScrollReset:x,viewTransition:E})};return v.createElement("form",{ref:U,method:_,action:F,onSubmit:s?b:B,...O,"data-discover":!$&&l==="render"?"true":void 0})});kv.displayName="Form";function Dv(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Xm(l){let r=v.useContext(Yn);return ie(r,Dv(l)),r}function Cv(l,{target:r,replace:u,state:s,preventScrollReset:c,relative:d,viewTransition:p}={}){let y=Yy(),b=hl(),m=Ki(l,{relative:d});return v.useCallback(x=>{if(ov(x,r)){x.preventDefault();let E=u!==void 0?u:qi(b)===qi(m);y(l,{replace:E,state:s,preventScrollReset:c,relative:d,viewTransition:p})}},[b,y,m,u,s,r,l,c,d,p])}var Ov=0,Mv=()=>`__${String(++Ov)}__`;function zv(){let{router:l}=Xm("useSubmit"),{basename:r}=v.useContext(pa),u=Iy();return v.useCallback(async(s,c={})=>{let{action:d,method:p,encType:y,formData:b,body:m}=cv(s,r);if(c.navigate===!1){let x=c.fetcherKey||Mv();await l.fetch(x,u,c.action||d,{preventScrollReset:c.preventScrollReset,formData:b,body:m,formMethod:c.method||p,formEncType:c.encType||y,flushSync:c.flushSync})}else await l.navigate(c.action||d,{preventScrollReset:c.preventScrollReset,formData:b,body:m,formMethod:c.method||p,formEncType:c.encType||y,replace:c.replace,state:c.state,fromRouteId:u,flushSync:c.flushSync,viewTransition:c.viewTransition})},[l,r,u])}function Nv(l,{relative:r}={}){let{basename:u}=v.useContext(pa),s=v.useContext(Ba);ie(s,"useFormAction must be used inside a RouteContext");let[c]=s.matches.slice(-1),d={...Ki(l||".",{relative:r})},p=hl();if(l==null){d.search=p.search;let y=new URLSearchParams(d.search),b=y.getAll("index");if(b.some(x=>x==="")){y.delete("index"),b.filter(E=>E).forEach(E=>y.append("index",E));let x=y.toString();d.search=x?`?${x}`:""}}return(!l||l===".")&&c.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(d.pathname=d.pathname==="/"?u:ja([u,d.pathname])),qi(d)}function jv(l,{relative:r}={}){let u=v.useContext(Bm);ie(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Xm("useViewTransitionState"),c=Ki(l,{relative:r});if(!u.isTransitioning)return!1;let d=_a(u.currentLocation.pathname,s)||u.currentLocation.pathname,p=_a(u.nextLocation.pathname,s)||u.nextLocation.pathname;return xo(c.pathname,p)!=null||xo(c.pathname,d)!=null}var _v=Dm(),de=function(){return de=Object.assign||function(r){for(var u,s=1,c=arguments.length;s<c;s++){u=arguments[s];for(var d in u)Object.prototype.hasOwnProperty.call(u,d)&&(r[d]=u[d])}return r},de.apply(this,arguments)};function Qi(l,r,u){if(u||arguments.length===2)for(var s=0,c=r.length,d;s<c;s++)(d||!(s in r))&&(d||(d=Array.prototype.slice.call(r,0,s)),d[s]=r[s]);return l.concat(d||Array.prototype.slice.call(r))}var Xt="-ms-",Gi="-moz-",jt="-webkit-",Vm="comm",zo="rule",Uc="decl",Bv="@import",Zm="@keyframes",Hv="@layer",Km=Math.abs,Lc=String.fromCharCode,gc=Object.assign;function Uv(l,r){return fe(l,0)^45?(((r<<2^fe(l,0))<<2^fe(l,1))<<2^fe(l,2))<<2^fe(l,3):0}function Wm(l){return l.trim()}function Na(l,r){return(l=r.exec(l))?l[0]:l}function wt(l,r,u){return l.replace(r,u)}function mo(l,r,u){return l.indexOf(r,u)}function fe(l,r){return l.charCodeAt(r)|0}function jn(l,r,u){return l.slice(r,u)}function da(l){return l.length}function Jm(l){return l.length}function Yi(l,r){return r.push(l),l}function Lv(l,r){return l.map(r).join("")}function tm(l,r){return l.filter(function(u){return!Na(u,r)})}var No=1,_n=1,Fm=0,Je=0,ee=0,Gn="";function jo(l,r,u,s,c,d,p,y){return{value:l,root:r,parent:u,type:s,props:c,children:d,line:No,column:_n,length:p,return:"",siblings:y}}function ul(l,r){return gc(jo("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},r)}function On(l){for(;l.root;)l=ul(l.root,{children:[l]});Yi(l,l.siblings)}function $v(){return ee}function Yv(){return ee=Je>0?fe(Gn,--Je):0,_n--,ee===10&&(_n=1,No--),ee}function ea(){return ee=Je<Fm?fe(Gn,Je++):0,_n++,ee===10&&(_n=1,No++),ee}function _l(){return fe(Gn,Je)}function go(){return Je}function _o(l,r){return jn(Gn,l,r)}function bc(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Gv(l){return No=_n=1,Fm=da(Gn=l),Je=0,[]}function qv(l){return Gn="",l}function sc(l){return Wm(_o(Je-1,yc(l===91?l+2:l===40?l+1:l)))}function Qv(l){for(;(ee=_l())&&ee<33;)ea();return bc(l)>2||bc(ee)>3?"":" "}function Xv(l,r){for(;--r&&ea()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return _o(l,go()+(r<6&&_l()==32&&ea()==32))}function yc(l){for(;ea();)switch(ee){case l:return Je;case 34:case 39:l!==34&&l!==39&&yc(ee);break;case 40:l===41&&yc(l);break;case 92:ea();break}return Je}function Vv(l,r){for(;ea()&&l+ee!==57;)if(l+ee===84&&_l()===47)break;return"/*"+_o(r,Je-1)+"*"+Lc(l===47?l:ea())}function Zv(l){for(;!bc(_l());)ea();return _o(l,Je)}function Kv(l){return qv(bo("",null,null,null,[""],l=Gv(l),0,[0],l))}function bo(l,r,u,s,c,d,p,y,b){for(var m=0,x=0,E=p,O=0,U=0,Y=0,F=1,_=1,$=1,B=0,G="",I=c,W=d,nt=s,lt=G;_;)switch(Y=B,B=ea()){case 40:if(Y!=108&&fe(lt,E-1)==58){mo(lt+=wt(sc(B),"&","&\f"),"&\f",Km(m?y[m-1]:0))!=-1&&($=-1);break}case 34:case 39:case 91:lt+=sc(B);break;case 9:case 10:case 13:case 32:lt+=Qv(Y);break;case 92:lt+=Xv(go()-1,7);continue;case 47:switch(_l()){case 42:case 47:Yi(Wv(Vv(ea(),go()),r,u,b),b);break;default:lt+="/"}break;case 123*F:y[m++]=da(lt)*$;case 125*F:case 59:case 0:switch(B){case 0:case 125:_=0;case 59+x:$==-1&&(lt=wt(lt,/\f/g,"")),U>0&&da(lt)-E&&Yi(U>32?am(lt+";",s,u,E-1,b):am(wt(lt," ","")+";",s,u,E-2,b),b);break;case 59:lt+=";";default:if(Yi(nt=em(lt,r,u,m,x,c,y,G,I=[],W=[],E,d),d),B===123)if(x===0)bo(lt,r,nt,nt,I,d,E,y,W);else switch(O===99&&fe(lt,3)===110?100:O){case 100:case 108:case 109:case 115:bo(l,nt,nt,s&&Yi(em(l,nt,nt,0,0,c,y,G,c,I=[],E,W),W),c,W,E,y,s?I:W);break;default:bo(lt,nt,nt,nt,[""],W,0,y,W)}}m=x=U=0,F=$=1,G=lt="",E=p;break;case 58:E=1+da(lt),U=Y;default:if(F<1){if(B==123)--F;else if(B==125&&F++==0&&Yv()==125)continue}switch(lt+=Lc(B),B*F){case 38:$=x>0?1:(lt+="\f",-1);break;case 44:y[m++]=(da(lt)-1)*$,$=1;break;case 64:_l()===45&&(lt+=sc(ea())),O=_l(),x=E=da(G=lt+=Zv(go())),B++;break;case 45:Y===45&&da(lt)==2&&(F=0)}}return d}function em(l,r,u,s,c,d,p,y,b,m,x,E){for(var O=c-1,U=c===0?d:[""],Y=Jm(U),F=0,_=0,$=0;F<s;++F)for(var B=0,G=jn(l,O+1,O=Km(_=p[F])),I=l;B<Y;++B)(I=Wm(_>0?U[B]+" "+G:wt(G,/&\f/g,U[B])))&&(b[$++]=I);return jo(l,r,u,c===0?zo:y,b,m,x,E)}function Wv(l,r,u,s){return jo(l,r,u,Vm,Lc($v()),jn(l,2,-2),0,s)}function am(l,r,u,s,c){return jo(l,r,u,Uc,jn(l,0,s),jn(l,s+1,-1),s,c)}function Im(l,r,u){switch(Uv(l,r)){case 5103:return jt+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return jt+l+l;case 4789:return Gi+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return jt+l+Gi+l+Xt+l+l;case 5936:switch(fe(l,r+11)){case 114:return jt+l+Xt+wt(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return jt+l+Xt+wt(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return jt+l+Xt+wt(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return jt+l+Xt+l+l;case 6165:return jt+l+Xt+"flex-"+l+l;case 5187:return jt+l+wt(l,/(\w+).+(:[^]+)/,jt+"box-$1$2"+Xt+"flex-$1$2")+l;case 5443:return jt+l+Xt+"flex-item-"+wt(l,/flex-|-self/g,"")+(Na(l,/flex-|baseline/)?"":Xt+"grid-row-"+wt(l,/flex-|-self/g,""))+l;case 4675:return jt+l+Xt+"flex-line-pack"+wt(l,/align-content|flex-|-self/g,"")+l;case 5548:return jt+l+Xt+wt(l,"shrink","negative")+l;case 5292:return jt+l+Xt+wt(l,"basis","preferred-size")+l;case 6060:return jt+"box-"+wt(l,"-grow","")+jt+l+Xt+wt(l,"grow","positive")+l;case 4554:return jt+wt(l,/([^-])(transform)/g,"$1"+jt+"$2")+l;case 6187:return wt(wt(wt(l,/(zoom-|grab)/,jt+"$1"),/(image-set)/,jt+"$1"),l,"")+l;case 5495:case 3959:return wt(l,/(image-set\([^]*)/,jt+"$1$`$1");case 4968:return wt(wt(l,/(.+:)(flex-)?(.*)/,jt+"box-pack:$3"+Xt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+jt+l+l;case 4200:if(!Na(l,/flex-|baseline/))return Xt+"grid-column-align"+jn(l,r)+l;break;case 2592:case 3360:return Xt+wt(l,"template-","")+l;case 4384:case 3616:return u&&u.some(function(s,c){return r=c,Na(s.props,/grid-\w+-end/)})?~mo(l+(u=u[r].value),"span",0)?l:Xt+wt(l,"-start","")+l+Xt+"grid-row-span:"+(~mo(u,"span",0)?Na(u,/\d+/):+Na(u,/\d+/)-+Na(l,/\d+/))+";":Xt+wt(l,"-start","")+l;case 4896:case 4128:return u&&u.some(function(s){return Na(s.props,/grid-\w+-start/)})?l:Xt+wt(wt(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return wt(l,/(.+)-inline(.+)/,jt+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(da(l)-1-r>6)switch(fe(l,r+1)){case 109:if(fe(l,r+4)!==45)break;case 102:return wt(l,/(.+:)(.+)-([^]+)/,"$1"+jt+"$2-$3$1"+Gi+(fe(l,r+3)==108?"$3":"$2-$3"))+l;case 115:return~mo(l,"stretch",0)?Im(wt(l,"stretch","fill-available"),r,u)+l:l}break;case 5152:case 5920:return wt(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,c,d,p,y,b,m){return Xt+c+":"+d+m+(p?Xt+c+"-span:"+(y?b:+b-+d)+m:"")+l});case 4949:if(fe(l,r+6)===121)return wt(l,":",":"+jt)+l;break;case 6444:switch(fe(l,fe(l,14)===45?18:11)){case 120:return wt(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+jt+(fe(l,14)===45?"inline-":"")+"box$3$1"+jt+"$2$3$1"+Xt+"$2box$3")+l;case 100:return wt(l,":",":"+Xt)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return wt(l,"scroll-","scroll-snap-")+l}return l}function Ao(l,r){for(var u="",s=0;s<l.length;s++)u+=r(l[s],s,l,r)||"";return u}function Jv(l,r,u,s){switch(l.type){case Hv:if(l.children.length)break;case Bv:case Uc:return l.return=l.return||l.value;case Vm:return"";case Zm:return l.return=l.value+"{"+Ao(l.children,s)+"}";case zo:if(!da(l.value=l.props.join(",")))return""}return da(u=Ao(l.children,s))?l.return=l.value+"{"+u+"}":""}function Fv(l){var r=Jm(l);return function(u,s,c,d){for(var p="",y=0;y<r;y++)p+=l[y](u,s,c,d)||"";return p}}function Iv(l){return function(r){r.root||(r=r.return)&&l(r)}}function Pv(l,r,u,s){if(l.length>-1&&!l.return)switch(l.type){case Uc:l.return=Im(l.value,l.length,u);return;case Zm:return Ao([ul(l,{value:wt(l.value,"@","@"+jt)})],s);case zo:if(l.length)return Lv(u=l.props,function(c){switch(Na(c,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":On(ul(l,{props:[wt(c,/:(read-\w+)/,":"+Gi+"$1")]})),On(ul(l,{props:[c]})),gc(l,{props:tm(u,s)});break;case"::placeholder":On(ul(l,{props:[wt(c,/:(plac\w+)/,":"+jt+"input-$1")]})),On(ul(l,{props:[wt(c,/:(plac\w+)/,":"+Gi+"$1")]})),On(ul(l,{props:[wt(c,/:(plac\w+)/,Xt+"input-$1")]})),On(ul(l,{props:[c]})),gc(l,{props:tm(u,s)});break}return""})}}var t1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ue={},Bn=typeof process<"u"&&Ue!==void 0&&(Ue.REACT_APP_SC_ATTR||Ue.SC_ATTR)||"data-styled",Pm="active",tg="data-styled-version",Bo="6.1.17",$c=`/*!sc*/
`,wo=typeof window<"u"&&"HTMLElement"in window,e1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ue!==void 0&&Ue.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ue.REACT_APP_SC_DISABLE_SPEEDY!==""?Ue.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ue.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ue!==void 0&&Ue.SC_DISABLE_SPEEDY!==void 0&&Ue.SC_DISABLE_SPEEDY!==""&&Ue.SC_DISABLE_SPEEDY!=="false"&&Ue.SC_DISABLE_SPEEDY),a1={},Ho=Object.freeze([]),Hn=Object.freeze({});function eg(l,r,u){return u===void 0&&(u=Hn),l.theme!==u.theme&&l.theme||r||u.theme}var ag=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),l1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,n1=/(^-|-$)/g;function lm(l){return l.replace(l1,"-").replace(n1,"")}var i1=/(a)(d)/gi,oo=52,nm=function(l){return String.fromCharCode(l+(l>25?39:97))};function vc(l){var r,u="";for(r=Math.abs(l);r>oo;r=r/oo|0)u=nm(r%oo)+u;return(nm(r%oo)+u).replace(i1,"$1-$2")}var cc,lg=5381,Nn=function(l,r){for(var u=r.length;u;)l=33*l^r.charCodeAt(--u);return l},ng=function(l){return Nn(lg,l)};function ig(l){return vc(ng(l)>>>0)}function r1(l){return l.displayName||l.name||"Component"}function fc(l){return typeof l=="string"&&!0}var rg=typeof Symbol=="function"&&Symbol.for,og=rg?Symbol.for("react.memo"):60115,o1=rg?Symbol.for("react.forward_ref"):60112,u1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ug={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c1=((cc={})[o1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},cc[og]=ug,cc);function im(l){return("type"in(r=l)&&r.type.$$typeof)===og?ug:"$$typeof"in l?c1[l.$$typeof]:u1;var r}var f1=Object.defineProperty,d1=Object.getOwnPropertyNames,rm=Object.getOwnPropertySymbols,h1=Object.getOwnPropertyDescriptor,p1=Object.getPrototypeOf,om=Object.prototype;function sg(l,r,u){if(typeof r!="string"){if(om){var s=p1(r);s&&s!==om&&sg(l,s,u)}var c=d1(r);rm&&(c=c.concat(rm(r)));for(var d=im(l),p=im(r),y=0;y<c.length;++y){var b=c[y];if(!(b in s1||u&&u[b]||p&&b in p||d&&b in d)){var m=h1(r,b);try{f1(l,b,m)}catch{}}}}return l}function Bl(l){return typeof l=="function"}function Yc(l){return typeof l=="object"&&"styledComponentId"in l}function Nl(l,r){return l&&r?"".concat(l," ").concat(r):l||r||""}function xc(l,r){if(l.length===0)return"";for(var u=l[0],s=1;s<l.length;s++)u+=l[s];return u}function Xi(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function Ac(l,r,u){if(u===void 0&&(u=!1),!u&&!Xi(l)&&!Array.isArray(l))return r;if(Array.isArray(r))for(var s=0;s<r.length;s++)l[s]=Ac(l[s],r[s]);else if(Xi(r))for(var s in r)l[s]=Ac(l[s],r[s]);return l}function Gc(l,r){Object.defineProperty(l,"toString",{value:r})}function Hl(l){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var m1=function(){function l(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return l.prototype.indexOfGroup=function(r){for(var u=0,s=0;s<r;s++)u+=this.groupSizes[s];return u},l.prototype.insertRules=function(r,u){if(r>=this.groupSizes.length){for(var s=this.groupSizes,c=s.length,d=c;r>=d;)if((d<<=1)<0)throw Hl(16,"".concat(r));this.groupSizes=new Uint32Array(d),this.groupSizes.set(s),this.length=d;for(var p=c;p<d;p++)this.groupSizes[p]=0}for(var y=this.indexOfGroup(r+1),b=(p=0,u.length);p<b;p++)this.tag.insertRule(y,u[p])&&(this.groupSizes[r]++,y++)},l.prototype.clearGroup=function(r){if(r<this.length){var u=this.groupSizes[r],s=this.indexOfGroup(r),c=s+u;this.groupSizes[r]=0;for(var d=s;d<c;d++)this.tag.deleteRule(s)}},l.prototype.getGroup=function(r){var u="";if(r>=this.length||this.groupSizes[r]===0)return u;for(var s=this.groupSizes[r],c=this.indexOfGroup(r),d=c+s,p=c;p<d;p++)u+="".concat(this.tag.getRule(p)).concat($c);return u},l}(),yo=new Map,So=new Map,vo=1,uo=function(l){if(yo.has(l))return yo.get(l);for(;So.has(vo);)vo++;var r=vo++;return yo.set(l,r),So.set(r,l),r},g1=function(l,r){vo=r+1,yo.set(l,r),So.set(r,l)},b1="style[".concat(Bn,"][").concat(tg,'="').concat(Bo,'"]'),y1=new RegExp("^".concat(Bn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),v1=function(l,r,u){for(var s,c=u.split(","),d=0,p=c.length;d<p;d++)(s=c[d])&&l.registerName(r,s)},x1=function(l,r){for(var u,s=((u=r.textContent)!==null&&u!==void 0?u:"").split($c),c=[],d=0,p=s.length;d<p;d++){var y=s[d].trim();if(y){var b=y.match(y1);if(b){var m=0|parseInt(b[1],10),x=b[2];m!==0&&(g1(x,m),v1(l,x,b[3]),l.getTag().insertRules(m,c)),c.length=0}else c.push(y)}}},um=function(l){for(var r=document.querySelectorAll(b1),u=0,s=r.length;u<s;u++){var c=r[u];c&&c.getAttribute(Bn)!==Pm&&(x1(l,c),c.parentNode&&c.parentNode.removeChild(c))}};function A1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var cg=function(l){var r=document.head,u=l||r,s=document.createElement("style"),c=function(y){var b=Array.from(y.querySelectorAll("style[".concat(Bn,"]")));return b[b.length-1]}(u),d=c!==void 0?c.nextSibling:null;s.setAttribute(Bn,Pm),s.setAttribute(tg,Bo);var p=A1();return p&&s.setAttribute("nonce",p),u.insertBefore(s,d),s},w1=function(){function l(r){this.element=cg(r),this.element.appendChild(document.createTextNode("")),this.sheet=function(u){if(u.sheet)return u.sheet;for(var s=document.styleSheets,c=0,d=s.length;c<d;c++){var p=s[c];if(p.ownerNode===u)return p}throw Hl(17)}(this.element),this.length=0}return l.prototype.insertRule=function(r,u){try{return this.sheet.insertRule(u,r),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},l.prototype.getRule=function(r){var u=this.sheet.cssRules[r];return u&&u.cssText?u.cssText:""},l}(),S1=function(){function l(r){this.element=cg(r),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(r,u){if(r<=this.length&&r>=0){var s=document.createTextNode(u);return this.element.insertBefore(s,this.nodes[r]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},l.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},l}(),E1=function(){function l(r){this.rules=[],this.length=0}return l.prototype.insertRule=function(r,u){return r<=this.length&&(this.rules.splice(r,0,u),this.length++,!0)},l.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},l.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},l}(),sm=wo,T1={isServer:!wo,useCSSOMInjection:!e1},Eo=function(){function l(r,u,s){r===void 0&&(r=Hn),u===void 0&&(u={});var c=this;this.options=de(de({},T1),r),this.gs=u,this.names=new Map(s),this.server=!!r.isServer,!this.server&&wo&&sm&&(sm=!1,um(this)),Gc(this,function(){return function(d){for(var p=d.getTag(),y=p.length,b="",m=function(E){var O=function($){return So.get($)}(E);if(O===void 0)return"continue";var U=d.names.get(O),Y=p.getGroup(E);if(U===void 0||!U.size||Y.length===0)return"continue";var F="".concat(Bn,".g").concat(E,'[id="').concat(O,'"]'),_="";U!==void 0&&U.forEach(function($){$.length>0&&(_+="".concat($,","))}),b+="".concat(Y).concat(F,'{content:"').concat(_,'"}').concat($c)},x=0;x<y;x++)m(x);return b}(c)})}return l.registerId=function(r){return uo(r)},l.prototype.rehydrate=function(){!this.server&&wo&&um(this)},l.prototype.reconstructWithOptions=function(r,u){return u===void 0&&(u=!0),new l(de(de({},this.options),r),this.gs,u&&this.names||void 0)},l.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(r=function(u){var s=u.useCSSOMInjection,c=u.target;return u.isServer?new E1(c):s?new w1(c):new S1(c)}(this.options),new m1(r)));var r},l.prototype.hasNameForId=function(r,u){return this.names.has(r)&&this.names.get(r).has(u)},l.prototype.registerName=function(r,u){if(uo(r),this.names.has(r))this.names.get(r).add(u);else{var s=new Set;s.add(u),this.names.set(r,s)}},l.prototype.insertRules=function(r,u,s){this.registerName(r,u),this.getTag().insertRules(uo(r),s)},l.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},l.prototype.clearRules=function(r){this.getTag().clearGroup(uo(r)),this.clearNames(r)},l.prototype.clearTag=function(){this.tag=void 0},l}(),R1=/&/g,k1=/^\s*\/\/.*$/gm;function fg(l,r){return l.map(function(u){return u.type==="rule"&&(u.value="".concat(r," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(r," ")),u.props=u.props.map(function(s){return"".concat(r," ").concat(s)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=fg(u.children,r)),u})}function D1(l){var r,u,s,c=Hn,d=c.options,p=d===void 0?Hn:d,y=c.plugins,b=y===void 0?Ho:y,m=function(O,U,Y){return Y.startsWith(u)&&Y.endsWith(u)&&Y.replaceAll(u,"").length>0?".".concat(r):O},x=b.slice();x.push(function(O){O.type===zo&&O.value.includes("&")&&(O.props[0]=O.props[0].replace(R1,u).replace(s,m))}),p.prefix&&x.push(Pv),x.push(Jv);var E=function(O,U,Y,F){U===void 0&&(U=""),Y===void 0&&(Y=""),F===void 0&&(F="&"),r=F,u=U,s=new RegExp("\\".concat(u,"\\b"),"g");var _=O.replace(k1,""),$=Kv(Y||U?"".concat(Y," ").concat(U," { ").concat(_," }"):_);p.namespace&&($=fg($,p.namespace));var B=[];return Ao($,Fv(x.concat(Iv(function(G){return B.push(G)})))),B};return E.hash=b.length?b.reduce(function(O,U){return U.name||Hl(15),Nn(O,U.name)},lg).toString():"",E}var C1=new Eo,wc=D1(),dg=j.createContext({shouldForwardProp:void 0,styleSheet:C1,stylis:wc});dg.Consumer;j.createContext(void 0);function Sc(){return v.useContext(dg)}var O1=function(){function l(r,u){var s=this;this.inject=function(c,d){d===void 0&&(d=wc);var p=s.name+d.hash;c.hasNameForId(s.id,p)||c.insertRules(s.id,p,d(s.rules,p,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=u,Gc(this,function(){throw Hl(12,String(s.name))})}return l.prototype.getName=function(r){return r===void 0&&(r=wc),this.name+r.hash},l}(),M1=function(l){return l>="A"&&l<="Z"};function cm(l){for(var r="",u=0;u<l.length;u++){var s=l[u];if(u===1&&s==="-"&&l[0]==="-")return l;M1(s)?r+="-"+s.toLowerCase():r+=s}return r.startsWith("ms-")?"-"+r:r}var hg=function(l){return l==null||l===!1||l===""},pg=function(l){var r,u,s=[];for(var c in l){var d=l[c];l.hasOwnProperty(c)&&!hg(d)&&(Array.isArray(d)&&d.isCss||Bl(d)?s.push("".concat(cm(c),":"),d,";"):Xi(d)?s.push.apply(s,Qi(Qi(["".concat(c," {")],pg(d),!1),["}"],!1)):s.push("".concat(cm(c),": ").concat((r=c,(u=d)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||r in t1||r.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return s};function cl(l,r,u,s){if(hg(l))return[];if(Yc(l))return[".".concat(l.styledComponentId)];if(Bl(l)){if(!Bl(d=l)||d.prototype&&d.prototype.isReactComponent||!r)return[l];var c=l(r);return cl(c,r,u,s)}var d;return l instanceof O1?u?(l.inject(u,s),[l.getName(s)]):[l]:Xi(l)?pg(l):Array.isArray(l)?Array.prototype.concat.apply(Ho,l.map(function(p){return cl(p,r,u,s)})):[l.toString()]}function mg(l){for(var r=0;r<l.length;r+=1){var u=l[r];if(Bl(u)&&!Yc(u))return!1}return!0}var z1=ng(Bo),N1=function(){function l(r,u,s){this.rules=r,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&mg(r),this.componentId=u,this.baseHash=Nn(z1,u),this.baseStyle=s,Eo.registerId(u)}return l.prototype.generateAndInjectStyles=function(r,u,s){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,u,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))c=Nl(c,this.staticRulesId);else{var d=xc(cl(this.rules,r,u,s)),p=vc(Nn(this.baseHash,d)>>>0);if(!u.hasNameForId(this.componentId,p)){var y=s(d,".".concat(p),void 0,this.componentId);u.insertRules(this.componentId,p,y)}c=Nl(c,p),this.staticRulesId=p}else{for(var b=Nn(this.baseHash,s.hash),m="",x=0;x<this.rules.length;x++){var E=this.rules[x];if(typeof E=="string")m+=E;else if(E){var O=xc(cl(E,r,u,s));b=Nn(b,O+x),m+=O}}if(m){var U=vc(b>>>0);u.hasNameForId(this.componentId,U)||u.insertRules(this.componentId,U,s(m,".".concat(U),void 0,this.componentId)),c=Nl(c,U)}}return c},l}(),Vi=j.createContext(void 0);Vi.Consumer;function j1(l){var r=j.useContext(Vi),u=v.useMemo(function(){return function(s,c){if(!s)throw Hl(14);if(Bl(s)){var d=s(c);return d}if(Array.isArray(s)||typeof s!="object")throw Hl(8);return c?de(de({},c),s):s}(l.theme,r)},[l.theme,r]);return l.children?j.createElement(Vi.Provider,{value:u},l.children):null}var dc={};function _1(l,r,u){var s=Yc(l),c=l,d=!fc(l),p=r.attrs,y=p===void 0?Ho:p,b=r.componentId,m=b===void 0?function(I,W){var nt=typeof I!="string"?"sc":lm(I);dc[nt]=(dc[nt]||0)+1;var lt="".concat(nt,"-").concat(ig(Bo+nt+dc[nt]));return W?"".concat(W,"-").concat(lt):lt}(r.displayName,r.parentComponentId):b,x=r.displayName,E=x===void 0?function(I){return fc(I)?"styled.".concat(I):"Styled(".concat(r1(I),")")}(l):x,O=r.displayName&&r.componentId?"".concat(lm(r.displayName),"-").concat(r.componentId):r.componentId||m,U=s&&c.attrs?c.attrs.concat(y).filter(Boolean):y,Y=r.shouldForwardProp;if(s&&c.shouldForwardProp){var F=c.shouldForwardProp;if(r.shouldForwardProp){var _=r.shouldForwardProp;Y=function(I,W){return F(I,W)&&_(I,W)}}else Y=F}var $=new N1(u,O,s?c.componentStyle:void 0);function B(I,W){return function(nt,lt,yt){var ft=nt.attrs,Ot=nt.componentStyle,Rt=nt.defaultProps,vt=nt.foldedComponentIds,g=nt.styledComponentId,V=nt.target,D=j.useContext(Vi),R=Sc(),L=nt.shouldForwardProp||R.shouldForwardProp,q=eg(lt,D,Rt)||Hn,rt=function(it,at,st){for(var dt,J=de(de({},at),{className:void 0,theme:st}),gt=0;gt<it.length;gt+=1){var ht=Bl(dt=it[gt])?dt(J):dt;for(var xt in ht)J[xt]=xt==="className"?Nl(J[xt],ht[xt]):xt==="style"?de(de({},J[xt]),ht[xt]):ht[xt]}return at.className&&(J.className=Nl(J.className,at.className)),J}(ft,lt,q),w=rt.as||V,Q={};for(var et in rt)rt[et]===void 0||et[0]==="$"||et==="as"||et==="theme"&&rt.theme===q||(et==="forwardedAs"?Q.as=rt.forwardedAs:L&&!L(et,w)||(Q[et]=rt[et]));var H=function(it,at){var st=Sc(),dt=it.generateAndInjectStyles(at,st.styleSheet,st.stylis);return dt}(Ot,rt),P=Nl(vt,g);return H&&(P+=" "+H),rt.className&&(P+=" "+rt.className),Q[fc(w)&&!ag.has(w)?"class":"className"]=P,yt&&(Q.ref=yt),v.createElement(w,Q)}(G,I,W)}B.displayName=E;var G=j.forwardRef(B);return G.attrs=U,G.componentStyle=$,G.displayName=E,G.shouldForwardProp=Y,G.foldedComponentIds=s?Nl(c.foldedComponentIds,c.styledComponentId):"",G.styledComponentId=O,G.target=s?c.target:l,Object.defineProperty(G,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(I){this._foldedDefaultProps=s?function(W){for(var nt=[],lt=1;lt<arguments.length;lt++)nt[lt-1]=arguments[lt];for(var yt=0,ft=nt;yt<ft.length;yt++)Ac(W,ft[yt],!0);return W}({},c.defaultProps,I):I}}),Gc(G,function(){return".".concat(G.styledComponentId)}),d&&sg(G,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),G}function fm(l,r){for(var u=[l[0]],s=0,c=r.length;s<c;s+=1)u.push(r[s],l[s+1]);return u}var dm=function(l){return Object.assign(l,{isCss:!0})};function ot(l){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];if(Bl(l)||Xi(l))return dm(cl(fm(Ho,Qi([l],r,!0))));var s=l;return r.length===0&&s.length===1&&typeof s[0]=="string"?cl(s):dm(cl(fm(s,r)))}function Ec(l,r,u){if(u===void 0&&(u=Hn),!r)throw Hl(1,r);var s=function(c){for(var d=[],p=1;p<arguments.length;p++)d[p-1]=arguments[p];return l(r,u,ot.apply(void 0,Qi([c],d,!1)))};return s.attrs=function(c){return Ec(l,r,de(de({},u),{attrs:Array.prototype.concat(u.attrs,c).filter(Boolean)}))},s.withConfig=function(c){return Ec(l,r,de(de({},u),c))},s}var gg=function(l){return Ec(_1,l)},tt=gg;ag.forEach(function(l){tt[l]=gg(l)});var B1=function(){function l(r,u){this.rules=r,this.componentId=u,this.isStatic=mg(r),Eo.registerId(this.componentId+1)}return l.prototype.createStyles=function(r,u,s,c){var d=c(xc(cl(this.rules,u,s,c)),""),p=this.componentId+r;s.insertRules(p,p,d)},l.prototype.removeStyles=function(r,u){u.clearRules(this.componentId+r)},l.prototype.renderStyles=function(r,u,s,c){r>2&&Eo.registerId(this.componentId+r),this.removeStyles(r,s),this.createStyles(r,u,s,c)},l}();function H1(l){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];var s=ot.apply(void 0,Qi([l],r,!1)),c="sc-global-".concat(ig(JSON.stringify(s))),d=new B1(s,c),p=function(b){var m=Sc(),x=j.useContext(Vi),E=j.useRef(m.styleSheet.allocateGSInstance(c)).current;return m.styleSheet.server&&y(E,b,m.styleSheet,x,m.stylis),j.useLayoutEffect(function(){if(!m.styleSheet.server)return y(E,b,m.styleSheet,x,m.stylis),function(){return d.removeStyles(E,m.styleSheet)}},[E,b,m.styleSheet,x,m.stylis]),null};function y(b,m,x,E,O){if(d.isStatic)d.renderStyles(b,a1,x,O);else{var U=de(de({},m),{theme:eg(m,E,p.defaultProps)});d.renderStyles(b,U,x,O)}}return j.memo(p)}var U1=`
  html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1.5;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
ul,
li {
  list-style-type: none;
}
button {
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  color: black;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

`;const qc="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",Qc="inset 2px 2px 3px rgba(0,0,0,0.2)",la=()=>ot`
  -webkit-text-fill-color: ${({theme:l})=>l.materialTextDisabled};
  color: ${({theme:l})=>l.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:l})=>l.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,na=({background:l="material",color:r="materialText"}={})=>ot`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:u})=>u[l]};
  color: ${({theme:u})=>u[r]};
`,Wi=({mainColor:l="black",secondaryColor:r="transparent",pixelSize:u=2})=>ot`
  background-image: ${[`linear-gradient(
      45deg,
      ${l} 25%,
      transparent 25%,
      transparent 75%,
      ${l} 75%
    )`,`linear-gradient(
      45deg,
      ${l} 25%,
      transparent 25%,
      transparent 75%,
      ${l} 75%
    )`].join(",")};
  background-color: ${r};
  background-size: ${`${u*2}px ${u*2}px`};
  background-position: 0 0, ${`${u}px ${u}px`};
`,Ul=()=>ot`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:l})=>l.materialText};
  background: ${({$disabled:l,theme:r})=>l?r.flatLight:r.canvas};
  border: 2px solid ${({theme:l})=>l.canvas};
  outline: 2px solid ${({theme:l})=>l.flatDark};
  outline-offset: -4px;
`,Mn={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},L1=({theme:l,topLeftInner:r,bottomRightInner:u,hasShadow:s=!1,hasInsetShadow:c=!1})=>[s?qc:!1,c?Qc:!1,r!==null?`inset 1px 1px 0px 1px ${l[r]}`:!1,u!==null?`inset -1px -1px 0 1px ${l[u]}`:!1].filter(Boolean).join(", "),Jt=({invert:l=!1,style:r="button"}={})=>{const u={topLeftOuter:l?"bottomRightOuter":"topLeftOuter",topLeftInner:l?"bottomRightInner":"topLeftInner",bottomRightInner:l?"topLeftInner":"bottomRightInner",bottomRightOuter:l?"topLeftOuter":"bottomRightOuter"};return ot`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:s})=>s[Mn[r][u.topLeftOuter]]};
    border-top-color: ${({theme:s})=>s[Mn[r][u.topLeftOuter]]};
    border-right-color: ${({theme:s})=>s[Mn[r][u.bottomRightOuter]]};
    border-bottom-color: ${({theme:s})=>s[Mn[r][u.bottomRightOuter]]};
    box-shadow: ${({theme:s,shadow:c})=>L1({theme:s,topLeftInner:Mn[r][u.topLeftInner],bottomRightInner:Mn[r][u.bottomRightInner],hasShadow:c})};
  `},Un=()=>ot`
  outline: 2px dotted ${({theme:l})=>l.materialText};
`,$1=l=>Buffer.from(l).toString("base64"),Y1=typeof btoa<"u"?btoa:$1,so=(l,r=0)=>{const u=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${r} 13 13)">
      <polygon fill="${l}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${Y1(u)})`},Xc=(l="default")=>ot`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:r})=>Wi({mainColor:l==="flat"?r.flatLight:r.material,secondaryColor:l==="flat"?r.canvas:r.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${na()}
    ${l==="flat"?Ul():Jt({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:r})=>r.material};
  }
  ::-webkit-scrollbar-button {
    ${na()}
    ${l==="flat"?Ul():Jt({style:"window"})}
      display: block;
    outline-offset: -2px;
    height: 26px;
    width: 26px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  ::-webkit-scrollbar-button:active,
  ::-webkit-scrollbar-button:active {
    background-position: 0 1px;
    ${l==="default"?Jt({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:r})=>so(r.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:r})=>so(r.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:r})=>so(r.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:r})=>so(r.materialText,0)};
  }
`,G1=tt.a`
  color: ${({theme:l})=>l.anchor};
  font-size: inherit;
  text-decoration: ${({underline:l})=>l?"underline":"none"};
  &:visited {
    color: ${({theme:l})=>l.anchorVisited};
  }
`,q1=v.forwardRef(({children:l,underline:r=!0,...u},s)=>j.createElement(G1,{ref:s,underline:r,...u},l));q1.displayName="Anchor";const Q1=tt.header`
  ${Jt()};
  ${na()};

  position: ${l=>{var r;return(r=l.position)!==null&&r!==void 0?r:l.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,bg=v.forwardRef(({children:l,fixed:r=!0,position:u="fixed",...s},c)=>j.createElement(Q1,{fixed:r,position:r!==!1?u:void 0,ref:c,...s},l));bg.displayName="AppBar";const Ll=()=>{};function jl(l,r,u){return u!==null&&l>u?u:r!==null&&l<r?r:l}function X1(l){if(Math.abs(l)<1){const u=l.toExponential().split("e-"),s=u[0].split(".")[1];return(s?s.length:0)+parseInt(u[1],10)}const r=l.toString().split(".")[1];return r?r.length:0}function hm(l,r,u){const s=Math.round((l-u)/r)*r+u;return Number(s.toFixed(X1(r)))}function fl(l){return typeof l=="number"?`${l}px`:l}const V1=tt.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:l})=>`
    height: ${l};
    width: ${l};
    `}
  border-radius: ${({square:l})=>l?0:"50%"};
  overflow: hidden;
  ${({noBorder:l,theme:r})=>!l&&`
    border-top: 2px solid ${r.borderDark};
    border-left: 2px solid ${r.borderDark};
    border-bottom: 2px solid ${r.borderLightest};
    border-right: 2px solid ${r.borderLightest};
    background: ${r.material};
  `}
  ${({src:l})=>!l&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,Z1=tt.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,K1=v.forwardRef(({alt:l="",children:r,noBorder:u=!1,size:s=35,square:c=!1,src:d,...p},y)=>j.createElement(V1,{noBorder:u,ref:y,size:fl(s),square:c,src:d,...p},d?j.createElement(Z1,{src:d,alt:l}):r));K1.displayName="Avatar";const ge={sm:"28px",md:"36px",lg:"44px"},W1=ot`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:l="md"})=>ge[l]};
  width: ${({fullWidth:l,size:r="md",square:u})=>l?"100%":u?ge[r]:"auto"};
  padding: ${({square:l})=>l?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:l})=>!l&&"2px"};
  }
  padding-top: ${({active:l,disabled:r})=>l&&!r&&"2px"};
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  font-family: inherit;
`,Uo=tt.button`
  ${({active:l,disabled:r,primary:u,theme:s,variant:c})=>c==="flat"?ot`
          ${Ul()}
          ${u?`
          border: 2px solid ${s.checkmark};
            outline: 2px solid ${s.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${s.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!l&&!r&&Un}
            outline-offset: -4px;
          }
        `:c==="menu"||c==="thin"?ot`
          ${na()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!r&&!l&&Jt({style:"buttonThin"})}
          }
          &:active {
            ${!r&&Jt({style:"buttonThinPressed"})}
          }
          ${l&&Jt({style:"buttonThinPressed"})}
          ${r&&la()}
        `:ot`
          ${na()};
          border: none;
          ${r&&la()}
          ${l?Wi({mainColor:s.material,secondaryColor:s.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${u?ot`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${s.borderDarkest};
                `:ot`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${Jt(l?{style:c==="raised"?"window":"button",invert:!0}:{style:c==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!r&&Jt({style:c==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!l&&!r&&Un}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${l?"0":"1px"};
          }
        `}
  ${W1}
`,Ln=v.forwardRef(({onClick:l,disabled:r=!1,children:u,type:s="button",fullWidth:c=!1,size:d="md",square:p=!1,active:y=!1,onTouchStart:b=Ll,primary:m=!1,variant:x="default",...E},O)=>j.createElement(Uo,{active:y,disabled:r,$disabled:r,fullWidth:c,onClick:r?void 0:l,onTouchStart:b,primary:m,ref:O,size:d,square:p,type:s,variant:x,...E},u));Ln.displayName="Button";function dl({defaultValue:l,onChange:r,onChangePropName:u="onChange",readOnly:s,value:c,valuePropName:d="value"}){const p=c!==void 0,[y,b]=v.useState(l),m=v.useCallback(x=>{p||b(x)},[p]);if(p&&typeof r!="function"&&!s){const x=`Warning: You provided a \`${d}\` prop to a component without an \`${u}\` handler.${d==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${u}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${u}\` function that updates \`${d}\`.`}`;console.warn(x)}return[p?c:y,m]}const Tc=tt.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${l=>ge[l.size]};
  width: ${l=>l.square?ge[l.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${l=>l.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${l=>ge[l.size]};
  color: ${({theme:l})=>l.materialText};
  pointer-events: ${({$disabled:l})=>l?"none":"auto"};
  font-weight: ${({primary:l})=>l?"bold":"normal"};
  &:hover {
    ${({theme:l,$disabled:r})=>!r&&`
        color: ${l.materialTextInvert};
        background: ${l.hoverBackground};
      `}

    cursor: default;
  }
  ${l=>l.$disabled&&la()}
`,sl=v.forwardRef(({size:l="lg",disabled:r,square:u,children:s,onClick:c,primary:d,...p},y)=>j.createElement(Tc,{$disabled:r,size:l,square:u,onClick:r?void 0:c,primary:d,role:"menuitem",ref:y,"aria-disabled":r,...p},s));sl.displayName="MenuListItem";const yg=tt.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${l=>l.fullWidth?"100%":"auto"};
  padding: 4px;
  ${Jt({style:"window"})}
  ${na()}
  ${l=>l.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;yg.displayName="MenuList";const ha=20,To=tt.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${ha}px;
  height: ${ha}px;
  opacity: 0;
  z-index: -1;
`,Vc=tt.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:l})=>l?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:l})=>l.materialText};
  ${l=>l.$disabled&&la()}

  ${Tc} & {
    margin: 0;
    height: 100%;
  }
  ${Tc}:hover & {
    ${({$disabled:l,theme:r})=>!l&&ot`
        color: ${r.materialTextInvert};
      `};
  }
`,Zc=tt.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${To}:focus ~ & {
    ${Un}
  }
  ${To}:not(:disabled) ~ &:active {
    ${Un}
  }
`,ma=tt.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({theme:l})=>l.borderDark};
  border-top-color: ${({theme:l})=>l.borderDark};
  border-right-color: ${({theme:l})=>l.borderLightest};
  border-bottom-color: ${({theme:l})=>l.borderLightest};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: calc(100% - 4px);
    height: calc(100% - 4px);

    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:l})=>l.borderDarkest};
    border-top-color: ${({theme:l})=>l.borderDarkest};
    border-right-color: ${({theme:l})=>l.borderLight};
    border-bottom-color: ${({theme:l})=>l.borderLight};

    pointer-events: none;
    ${l=>l.shadow&&`box-shadow:${Qc};`}
  }
`,J1=tt.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${Xc()}
`,vg=v.forwardRef(({children:l,shadow:r=!0,...u},s)=>j.createElement(ma,{ref:s,shadow:r,...u},j.createElement(J1,null,l)));vg.displayName="ScrollView";const xg=ot`
  width: ${ha}px;
  height: ${ha}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,F1=tt(ma)`
  ${xg}
  width: ${ha}px;
  height: ${ha}px;
  background: ${({$disabled:l,theme:r})=>l?r.material:r.canvas};
  &:before {
    box-shadow: none;
  }
`,I1=tt.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:l,theme:r})=>l?r.flatLight:r.canvas};
  ${xg}
  width: ${ha-4}px;
  height: ${ha-4}px;
  outline: none;
  border: 2px solid ${({theme:l})=>l.flatDark};
  background: ${({$disabled:l,theme:r})=>l?r.flatLight:r.canvas};
`,P1=tt.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - 1px);
    width: 3px;
    height: 7px;

    border: solid
      ${({$disabled:l,theme:r})=>l?r.checkmarkDisabled:r.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${l=>l.$disabled?l.theme.checkmarkDisabled:l.theme.checkmark};
  }
`,tx=tt.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:l,theme:r})=>Wi({mainColor:l?r.checkmarkDisabled:r.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,ex={flat:I1,default:F1},ax=v.forwardRef(({checked:l,className:r="",defaultChecked:u=!1,disabled:s=!1,indeterminate:c=!1,label:d="",onChange:p=Ll,style:y={},value:b,variant:m="default",...x},E)=>{var O;const[U,Y]=dl({defaultValue:u,onChange:p,readOnly:(O=x.readOnly)!==null&&O!==void 0?O:s,value:l}),F=v.useCallback(B=>{const G=B.target.checked;Y(G),p(B)},[p,Y]),_=ex[m];let $=null;return c?$=tx:U&&($=P1),j.createElement(Vc,{$disabled:s,className:r,style:y},j.createElement(To,{disabled:s,onChange:s?void 0:F,readOnly:s,type:"checkbox",value:b,checked:U,"data-indeterminate":c,ref:E,...x}),j.createElement(_,{$disabled:s,role:"presentation"},$&&j.createElement($,{$disabled:s,variant:m})),d&&j.createElement(Zc,null,d))});ax.displayName="Checkbox";const Ro=tt.div`
  ${({orientation:l,theme:r,size:u="100%"})=>l==="vertical"?`
    height: ${fl(u)};
    border-left: 2px solid ${r.borderDark};
    border-right: 2px solid ${r.borderLightest};
    margin: 0;
    `:`
    width: ${fl(u)};
    border-bottom: 2px solid ${r.borderLightest};
    border-top: 2px solid ${r.borderDark};
    margin: 0;
    `}
`;Ro.displayName="Separator";const lx=tt(Uo)`
  padding-left: 8px;
`,nx=tt(Ro)`
  height: 21px;
  position: relative;
  top: 0;
`,Ag=tt.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`,ix=tt.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:l})=>l};

  ${({$disabled:l})=>l?ot`
          border: 2px solid ${({theme:r})=>r.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:r})=>r.materialTextDisabledShadow}
          );
        `:ot`
          border: 2px solid ${({theme:r})=>r.materialText};
        `}
  ${Ag}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Un}
    outline-offset: -8px;
  }
`,rx=tt.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:l})=>l?ot`
          border-top: 6px solid ${({theme:r})=>r.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:r})=>r.materialTextDisabledShadow}
          );
        `:ot`
          border-top: 6px solid ${({theme:r})=>r.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({variant:l})=>l==="flat"?"6px":"8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`,ox=v.forwardRef(({value:l,defaultValue:r,onChange:u=Ll,disabled:s=!1,variant:c="default",...d},p)=>{var y;const[b,m]=dl({defaultValue:r,onChange:u,readOnly:(y=d.readOnly)!==null&&y!==void 0?y:s,value:l}),x=E=>{const O=E.target.value;m(O),u(E)};return j.createElement(lx,{disabled:s,as:"div",variant:c,size:"md"},j.createElement(Ag,{onChange:x,readOnly:s,disabled:s,value:b??"#008080",type:"color",ref:p,...d}),j.createElement(ix,{$disabled:s,color:b??"#008080",role:"presentation"}),c==="default"&&j.createElement(nx,{orientation:"vertical"}),j.createElement(rx,{$disabled:s,variant:c}))});ox.displayName="ColorInput";const ux=tt.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:l})=>ot`
    width: ${11*l}px;
    height: ${21*l}px;
    margin: ${l}px;

    span,
    span:before,
    span:after {
      box-sizing: border-box;
      display: inline-block;
      position: absolute;
    }
    span.active,
    span.active:before,
    span.active:after {
      background: var(--react95-digit-primary-color);
    }
    span:not(.active),
    span:not(.active):before,
    span:not(.active):after {
      ${Wi({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:l})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${l}px;
      border-left: ${l}px solid var(--react95-digit-bg-color);
      border-right: ${l}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${l}px;
      border-left: ${l}px solid var(--react95-digit-primary-color);
      border-right: ${l}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${l}px;
      width: ${9*l}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${l}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${l*2}px);
      top: ${2*l}px;
      left: ${l}px;
    }
    span.horizontal.top {
      top: 0;
    }
    span.horizontal.bottom {
      bottom: 0;
      transform: rotateX(180deg);
    }

    span.center,
    span.center:before,
    span.center:after {
      height: ${l}px;
      border-left: ${l}px solid var(--react95-digit-bg-color);
      border-right: ${l}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${l}px solid var(--react95-digit-primary-color);
      border-right: ${l}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${l}px;
      width: ${9*l}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${l}px;
    }
    span.center:after {
      bottom: ${l}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${l}px;
      border-top: ${l}px solid var(--react95-digit-bg-color);
      border-bottom: ${l}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*l}px;
    }
    span.vertical.left {
      left: 0;
    }
    span.vertical.right {
      right: 0;
      transform: rotateY(180deg);
    }
    span.vertical.top {
      top: 0px;
    }
    span.vertical.bottom {
      bottom: 0px;
    }
    span.vertical:before {
      content: '';
      height: 100%;
      top: ${0}px;
      left: ${l}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${l*2}px);
      top: ${l}px;
      left: ${l*2}px;
    }
  `}
`,pm=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],sx=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function cx({digit:l=0,pixelSize:r=2,...u}){const s=sx[Number(l)].map((c,d)=>c?`${pm[d]} active`:pm[d]);return j.createElement(ux,{pixelSize:r,...u},s.map((c,d)=>j.createElement("span",{className:c,key:d})))}const fx=tt.div`
  ${Jt({style:"status"})}
  display: inline-flex;
  background: #000000;
`,dx={sm:1,md:2,lg:3,xl:4},hx=v.forwardRef(({value:l=0,minLength:r=3,size:u="md",...s},c)=>{const d=v.useMemo(()=>l.toString().padStart(r,"0").split(""),[r,l]);return j.createElement(fx,{ref:c,...s},d.map((p,y)=>j.createElement(cx,{digit:p,pixelSize:dx[u],key:y})))});hx.displayName="Counter";const wg=ot`
  display: flex;
  align-items: center;
  width: ${({fullWidth:l})=>l?"100%":"auto"};
  min-height: ${ge.md};
`,px=tt(ma).attrs({"data-testid":"variant-default"})`
  ${wg}
  background: ${({$disabled:l,theme:r})=>l?r.material:r.canvas};
`,mx=tt.div.attrs({"data-testid":"variant-flat"})`
  ${Ul()}
  ${wg}
  position: relative;
`,Sg=ot`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  min-height: 27px;
  font-family: inherit;
  color: ${({theme:l})=>l.canvasText};
  ${({disabled:l,variant:r})=>r!=="flat"&&l&&la()}
`,gx=tt.input`
  ${Sg}
  padding: 0 8px;
`,bx=tt.textarea`
  ${Sg}
  padding: 8px;
  resize: none;
  ${({variant:l})=>Xc(l)}
`,Eg=v.forwardRef(({className:l,disabled:r=!1,fullWidth:u,onChange:s=Ll,shadow:c=!0,style:d,variant:p="default",...y},b)=>{const m=p==="flat"?mx:px,x=v.useMemo(()=>{var E;return y.multiline?j.createElement(bx,{disabled:r,onChange:r?void 0:s,readOnly:r,ref:b,variant:p,...y}):j.createElement(gx,{disabled:r,onChange:r?void 0:s,readOnly:r,ref:b,type:(E=y.type)!==null&&E!==void 0?E:"text",variant:p,...y})},[r,s,y,b,p]);return j.createElement(m,{className:l,fullWidth:u,$disabled:r,shadow:c,style:d},x)});Eg.displayName="TextInput";const yx=tt.div`
  display: inline-flex;
  align-items: center;
`,Rc=tt(Ln)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:l})=>l==="flat"?ot`
          height: calc(50% - 1px);
        `:ot`
          height: 50%;
        `}
`,vx=tt.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:l})=>l==="flat"?ot`
          height: calc(${ge.md} - 4px);
        `:ot`
          height: ${ge.md};
          margin-left: 2px;
        `}
`,mm=tt.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:l})=>l?ot`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:r})=>r.materialText};
        `:ot`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:r})=>r.materialText};
        `}
  ${Rc}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:l})=>l.materialTextDisabledShadow}
    );
    ${({invert:l})=>l?ot`
            border-bottom-color: ${({theme:r})=>r.materialTextDisabled};
          `:ot`
            border-top-color: ${({theme:r})=>r.materialTextDisabled};
          `}
  }
`,Tg=v.forwardRef(({className:l,defaultValue:r,disabled:u=!1,max:s,min:c,onChange:d,readOnly:p,step:y=1,style:b,value:m,variant:x="default",width:E,...O},U)=>{const[Y,F]=dl({defaultValue:r,onChange:d,readOnly:p,value:m}),_=v.useCallback(nt=>{const lt=parseFloat(nt.target.value);F(lt)},[F]),$=v.useCallback(nt=>{const lt=jl(parseFloat(((Y??0)+nt).toFixed(2)),c??null,s??null);F(lt),d==null||d(lt)},[s,c,d,F,Y]),B=v.useCallback(()=>{Y!==void 0&&(d==null||d(Y))},[d,Y]),G=v.useCallback(()=>{$(y)},[$,y]),I=v.useCallback(()=>{$(-y)},[$,y]),W=x==="flat"?"flat":"raised";return j.createElement(yx,{className:l,style:{...b,width:E!==void 0?fl(E):"auto"},...O},j.createElement(Eg,{value:Y,variant:x,onChange:_,disabled:u,type:"number",readOnly:p,ref:U,fullWidth:!0,onBlur:B}),j.createElement(vx,{variant:x},j.createElement(Rc,{"data-testid":"increment",variant:W,disabled:u||p,onClick:G},j.createElement(mm,{invert:!0})),j.createElement(Rc,{"data-testid":"decrement",variant:W,disabled:u||p,onClick:I},j.createElement(mm,null))))});Tg.displayName="NumberInput";function xx(){const l="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let r="";for(let u=0;u<10;u+=1)r+=l[Math.floor(Math.random()*l.length)];return r}const Rg=l=>v.useMemo(()=>xx(),[l]),kg=ot`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,Dg=ot`
  background: ${({theme:l})=>l.hoverBackground};
  color: ${({theme:l})=>l.canvasTextInvert};
`,Kc=tt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,Ax=tt.div`
  ${kg}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${Kc}:focus & {
    ${Dg}
    border: 2px dotted ${({theme:l})=>l.focusSecondary};
  }
`,Cg=ot`
  height: ${ge.md};
  display: inline-block;
  color: ${({$disabled:l=!1,theme:r})=>l?la():r.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:l})=>l?"default":"pointer"};
`,wx=tt(ma)`
  ${Cg}
  background: ${({$disabled:l=!1,theme:r})=>l?r.material:r.canvas};
  &:focus {
    outline: 0;
  }
`,Sx=tt.div`
  ${Ul()}
  ${Cg}
  background: ${({$disabled:l=!1,theme:r})=>l?r.flatLight:r.canvas};
`,Ex=tt.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-size: 1rem;
  border: 0;
  margin: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  padding-right: 30px;
  ${kg}
  cursor: pointer;
  &:disabled {
    ${la()};
    background: ${({theme:l})=>l.material};
    cursor: default;
  }
`,Og=tt(Uo).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:l="default"})=>l==="flat"?ot`
          height: 100%;
          margin-right: 0;
        `:ot`
          height: 100%;
        `}
  ${({native:l=!1,variant:r="default"})=>l&&(r==="flat"?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:l=!1,native:r=!1})=>l||r?"none":"auto"}
`,Tx=tt.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  border-top: 6px solid
    ${({$disabled:l=!1,theme:r})=>l?r.materialTextDisabled:r.materialText};
  ${({$disabled:l=!1,theme:r})=>l&&`
    filter: drop-shadow(1px 1px 0px ${r.materialTextDisabledShadow});
    border-top-color: ${r.materialTextDisabled};
    `}
  ${Og}:active & {
    margin-top: 2px;
  }
`,Rx=tt.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({theme:l})=>l.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${qc};
  ${({variant:l="default"})=>l==="flat"?ot`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:r})=>r.flatDark};
        `:ot`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:r})=>r.borderDarkest};
        `}
  ${({variant:l="default"})=>Xc(l)}
`,kx=tt.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${ge.md} - 4px);
  line-height: calc(${ge.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:l})=>l.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:l})=>l?Dg:""}
  user-select: none;
`,Dx=[],Mg=({className:l,defaultValue:r,disabled:u,native:s,onChange:c,options:d=Dx,readOnly:p,style:y,value:b,variant:m,width:x})=>{var E;const O=v.useMemo(()=>d.filter(Boolean),[d]),[U,Y]=dl({defaultValue:r??((E=O==null?void 0:O[0])===null||E===void 0?void 0:E.value),onChange:c,readOnly:p,value:b}),F=!(u||p),_=v.useMemo(()=>({className:l,style:{...y,width:x}}),[l,y,x]),$=v.useMemo(()=>j.createElement(Og,{as:"div","data-testid":"select-button",$disabled:u,native:s,tabIndex:-1,variant:m==="flat"?"flat":"raised"},j.createElement(Tx,{"data-testid":"select-icon",$disabled:u})),[u,s,m]),B=v.useMemo(()=>m==="flat"?Sx:wx,[m]);return v.useMemo(()=>({isEnabled:F,options:O,value:U,setValue:Y,wrapperProps:_,DropdownButton:$,Wrapper:B}),[$,B,F,O,Y,U,_])},Cx={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},Ox=1e3,Mx=({onBlur:l,onChange:r,onClose:u,onFocus:s,onKeyDown:c,onMouseDown:d,onOpen:p,open:y,options:b,readOnly:m,value:x,selectRef:E,setValue:O,wrapperRef:U})=>{const Y=v.useRef(null),F=v.useRef([]),_=v.useRef(0),$=v.useRef(0),B=v.useRef(),G=v.useRef("search"),I=v.useRef(""),W=v.useRef(),[nt,lt]=dl({defaultValue:!1,onChange:p,onChangePropName:"onOpen",readOnly:m,value:y,valuePropName:"open"}),yt=v.useMemo(()=>{const J=b.findIndex(gt=>gt.value===x);return _.current=jl(J,0,null),b[J]},[b,x]),[ft,Ot]=v.useState(b[0]),Rt=v.useCallback(J=>{const gt=Y.current,ht=F.current[J];if(!ht||!gt){B.current=J;return}B.current=void 0;const xt=gt.clientHeight,Ct=gt.scrollTop,_t=gt.scrollTop+xt,qt=ht.offsetTop,ae=ht.offsetHeight,Qt=ht.offsetTop+ht.offsetHeight;qt<Ct&&gt.scrollTo(0,qt),Qt>_t&&gt.scrollTo(0,qt-xt+ae),ht.focus({preventScroll:!0})},[Y]),vt=v.useCallback((J,{scroll:gt}={})=>{var ht;const xt=b.length-1;let Ct;switch(J){case"first":{Ct=0;break}case"last":{Ct=xt;break}case"next":{Ct=jl($.current+1,0,xt);break}case"previous":{Ct=jl($.current-1,0,xt);break}case"selected":{Ct=jl((ht=_.current)!==null&&ht!==void 0?ht:0,0,xt);break}default:Ct=J}$.current=Ct,Ot(b[Ct]),gt&&Rt(Ct)},[$,b,Rt]),g=v.useCallback(({fromEvent:J})=>{lt(!0),vt("selected",{scroll:!0}),p==null||p({fromEvent:J})},[vt,p,lt]),V=v.useCallback(()=>{G.current="search",I.current="",clearTimeout(W.current)},[]),D=v.useCallback(({focusSelect:J,fromEvent:gt})=>{var ht;u==null||u({fromEvent:gt}),lt(!1),Ot(b[0]),V(),B.current=void 0,J&&((ht=E.current)===null||ht===void 0||ht.focus())},[V,u,b,E,lt]),R=v.useCallback(({fromEvent:J})=>{nt?D({focusSelect:!1,fromEvent:J}):g({fromEvent:J})},[D,g,nt]),L=v.useCallback((J,{fromEvent:gt})=>{_.current!==J&&(_.current=J,O(b[J].value),r==null||r(b[J],{fromEvent:gt}))},[r,b,O]),q=v.useCallback(({focusSelect:J,fromEvent:gt})=>{L($.current,{fromEvent:gt}),D({focusSelect:J,fromEvent:gt})},[D,L]),rt=v.useCallback((J,{fromEvent:gt,select:ht})=>{var xt;switch(G.current==="cycleFirstLetter"&&J!==I.current&&(G.current="search"),J===I.current?G.current="cycleFirstLetter":I.current+=J,G.current){case"search":{let Ct=b.findIndex(_t=>{var qt;return((qt=_t.label)===null||qt===void 0?void 0:qt.toLocaleUpperCase().indexOf(I.current))===0});Ct<0&&(Ct=b.findIndex(_t=>{var qt;return((qt=_t.label)===null||qt===void 0?void 0:qt.toLocaleUpperCase().indexOf(J))===0}),I.current=J),Ct>=0&&(ht?L(Ct,{fromEvent:gt}):vt(Ct,{scroll:!0}));break}case"cycleFirstLetter":{const Ct=ht?(xt=_.current)!==null&&xt!==void 0?xt:-1:$.current;let _t=b.findIndex((qt,ae)=>{var Qt;return ae>Ct&&((Qt=qt.label)===null||Qt===void 0?void 0:Qt.toLocaleUpperCase().indexOf(J))===0});_t<0&&(_t=b.findIndex(qt=>{var ae;return((ae=qt.label)===null||ae===void 0?void 0:ae.toLocaleUpperCase().indexOf(J))===0})),_t>=0&&(ht?L(_t,{fromEvent:gt}):vt(_t,{scroll:!0}));break}}clearTimeout(W.current),W.current=setTimeout(()=>{G.current==="search"&&(I.current="")},Ox)},[vt,b,L]),w=v.useCallback(J=>{var gt;J.button===0&&(J.preventDefault(),(gt=E.current)===null||gt===void 0||gt.focus(),R({fromEvent:J}),d==null||d(J))},[d,E,R]),Q=v.useCallback(J=>{q({focusSelect:!0,fromEvent:J})},[q]),et=v.useCallback(J=>{const{altKey:gt,code:ht,ctrlKey:xt,metaKey:Ct,shiftKey:_t}=J,{ARROW_DOWN:qt,ARROW_UP:ae,END:Qt,ENTER:be,ESC:re,HOME:Le,SPACE:Ee,TAB:ia}=Cx,$e=gt||xt||Ct||_t;if(!(ht===ia&&(gt||xt||Ct)||ht!==ia&&$e))switch(ht){case qt:{if(J.preventDefault(),!nt){g({fromEvent:J});return}vt("next",{scroll:!0});break}case ae:{if(J.preventDefault(),!nt){g({fromEvent:J});return}vt("previous",{scroll:!0});break}case Qt:{if(J.preventDefault(),!nt){g({fromEvent:J});return}vt("last",{scroll:!0});break}case be:{if(!nt)return;J.preventDefault(),q({focusSelect:!0,fromEvent:J});break}case re:{if(!nt)return;J.preventDefault(),D({focusSelect:!0,fromEvent:J});break}case Le:{if(J.preventDefault(),!nt){g({fromEvent:J});return}vt("first",{scroll:!0});break}case Ee:{J.preventDefault(),nt?q({focusSelect:!0,fromEvent:J}):g({fromEvent:J});break}case ia:{if(!nt)return;_t||J.preventDefault(),q({focusSelect:!_t,fromEvent:J});break}default:!$e&&ht.match(/^Key/)&&(J.preventDefault(),J.stopPropagation(),rt(ht.replace(/^Key/,""),{select:!nt,fromEvent:J}))}},[vt,D,nt,g,rt,q]),H=v.useCallback(J=>{et(J),c==null||c(J)},[et,c]),P=v.useCallback(J=>{vt(J)},[vt]),it=v.useCallback(J=>{nt||(V(),l==null||l(J))},[V,l,nt]),at=v.useCallback(J=>{V(),s==null||s(J)},[V,s]),st=v.useCallback(J=>{Y.current=J,B.current!==void 0&&Rt(B.current)},[Rt]),dt=v.useCallback((J,gt)=>{F.current[gt]=J,B.current===gt&&Rt(B.current)},[Rt]);return v.useEffect(()=>{if(!nt)return()=>{};const J=gt=>{var ht;const xt=gt.target;!((ht=U.current)===null||ht===void 0)&&ht.contains(xt)||(gt.preventDefault(),D({focusSelect:!1,fromEvent:gt}))};return document.addEventListener("mousedown",J),()=>{document.removeEventListener("mousedown",J)}},[D,nt,U]),v.useMemo(()=>({activeOption:ft,handleActivateOptionIndex:P,handleBlur:it,handleButtonKeyDown:H,handleDropdownKeyDown:et,handleFocus:at,handleMouseDown:w,handleOptionClick:Q,handleSetDropdownRef:st,handleSetOptionRef:dt,open:nt,selectedOption:yt}),[ft,P,it,H,at,et,w,Q,st,dt,nt,yt])},zx=v.forwardRef(({className:l,defaultValue:r,disabled:u,onChange:s,options:c,readOnly:d,style:p,value:y,variant:b,width:m,...x},E)=>{const{isEnabled:O,options:U,setValue:Y,value:F,DropdownButton:_,Wrapper:$}=Mg({defaultValue:r,disabled:u,native:!0,onChange:s,options:c,readOnly:d,value:y,variant:b}),B=v.useCallback(G=>{const I=U.find(W=>W.value===G.target.value);I&&(Y(I.value),s==null||s(I,{fromEvent:G}))},[s,U,Y]);return j.createElement($,{className:l,style:{...p,width:m}},j.createElement(Kc,null,j.createElement(Ex,{...x,disabled:u,onChange:O?B:Ll,ref:E,value:F},U.map((G,I)=>{var W;return j.createElement("option",{key:`${G.value}-${I}`,value:G.value},(W=G.label)!==null&&W!==void 0?W:G.value)})),_))});zx.displayName="SelectNative";function Nx({activateOptionIndex:l,active:r,index:u,onClick:s,option:c,selected:d,setRef:p}){const y=v.useCallback(()=>{l(u)},[l,u]),b=v.useCallback(x=>{p(x,u)},[u,p]),m=Rg();return j.createElement(kx,{active:r,"aria-selected":d?"true":void 0,"data-value":c.value,id:m,onClick:s,onMouseEnter:y,ref:b,role:"option",tabIndex:0},c.label)}function jx({"aria-label":l,"aria-labelledby":r,className:u,defaultValue:s,disabled:c=!1,formatDisplay:d,inputProps:p,labelId:y,menuMaxHeight:b,name:m,onBlur:x,onChange:E,onClose:O,onFocus:U,onKeyDown:Y,onMouseDown:F,onOpen:_,open:$,options:B,readOnly:G,shadow:I=!0,style:W,variant:nt="default",value:lt,width:yt="auto",...ft},Ot){const{isEnabled:Rt,options:vt,setValue:g,value:V,wrapperProps:D,DropdownButton:R,Wrapper:L}=Mg({className:u,defaultValue:s,disabled:c,native:!1,onChange:E,options:B,style:W,readOnly:G,value:lt,variant:nt,width:yt}),q=v.useRef(null),rt=v.useRef(null),w=v.useRef(null),{activeOption:Q,handleActivateOptionIndex:et,handleBlur:H,handleButtonKeyDown:P,handleDropdownKeyDown:it,handleFocus:at,handleMouseDown:st,handleOptionClick:dt,handleSetDropdownRef:J,handleSetOptionRef:gt,open:ht,selectedOption:xt}=Mx({onBlur:x,onChange:E,onClose:O,onFocus:U,onKeyDown:Y,onMouseDown:F,onOpen:_,open:$,options:vt,value:V,selectRef:rt,setValue:g,wrapperRef:w});v.useImperativeHandle(Ot,()=>({focus:be=>{var re;(re=rt.current)===null||re===void 0||re.focus(be)},node:q.current,value:String(V)}),[V]);const Ct=v.useMemo(()=>xt?typeof d=="function"?d(xt):xt.label:"",[d,xt]),_t=Rt?1:void 0,qt=v.useMemo(()=>b?{overflow:"auto",maxHeight:b}:void 0,[b]),ae=Rg(),Qt=v.useMemo(()=>vt.map((be,re)=>{const Le=`${V}-${re}`,Ee=be===Q,ia=be===xt;return j.createElement(Nx,{activateOptionIndex:et,active:Ee,index:re,key:Le,onClick:dt,option:be,selected:ia,setRef:gt})}),[Q,et,dt,gt,vt,xt,V]);return j.createElement(L,{...D,$disabled:c,ref:w,shadow:I,style:{...W,width:yt}},j.createElement("input",{name:m,ref:q,type:"hidden",value:String(V),...p}),j.createElement(Kc,{"aria-disabled":c,"aria-expanded":ht,"aria-haspopup":"listbox","aria-label":l,"aria-labelledby":r??y,"aria-owns":Rt&&ht?ae:void 0,onBlur:H,onFocus:at,onKeyDown:P,onMouseDown:Rt?st:F,ref:rt,role:"button",tabIndex:_t,...ft},j.createElement(Ax,null,Ct),R),Rt&&ht&&j.createElement(Rx,{id:ae,onKeyDown:it,ref:J,role:"listbox",style:qt,tabIndex:0,variant:nt},Qt))}const zg=v.forwardRef(jx);zg.displayName="Select";const _x=tt.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${l=>l.noPadding?"0":"4px"};
`,ko=v.forwardRef(function({children:r,noPadding:u=!1,...s},c){return j.createElement(_x,{noPadding:u,ref:c,...s},r)});ko.displayName="Toolbar";const Bx=tt.div`
  padding: 16px;
`,Ng=v.forwardRef(function({children:r,...u},s){return j.createElement(Bx,{ref:s,...u},r)});Ng.displayName="WindowContent";const Hx=tt.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:l})=>l.material};
  ${({active:l})=>l===!1?ot`
          background: ${({theme:r})=>r.headerNotActiveBackground};
          color: ${({theme:r})=>r.headerNotActiveText};
        `:ot`
          background: ${({theme:r})=>r.headerBackground};
          color: ${({theme:r})=>r.headerText};
        `}

  ${Uo} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,jg=v.forwardRef(function({active:r=!0,children:u,...s},c){return j.createElement(Hx,{active:r,ref:c,...s},u)});jg.displayName="WindowHeader";const Ux=tt.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Jt({style:"window"})}
  ${na()}
`,Lx=tt.span`
  ${({theme:l})=>ot`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${l.borderLightest} 16.67%,
      ${l.material} 16.67%,
      ${l.material} 33.33%,
      ${l.borderDark} 33.33%,
      ${l.borderDark} 50%,
      ${l.borderLightest} 50%,
      ${l.borderLightest} 66.67%,
      ${l.material} 66.67%,
      ${l.material} 83.33%,
      ${l.borderDark} 83.33%,
      ${l.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,_g=v.forwardRef(({children:l,resizable:r=!1,resizeRef:u,shadow:s=!0,...c},d)=>j.createElement(Ux,{ref:d,shadow:s,...c},l,r&&j.createElement(Lx,{"data-testid":"resizeHandle",ref:u})));_g.displayName="Window";const $x=tt(vg)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:l})=>l.canvas};
`,Yx=tt.div`
  display: flex;
  background: ${({theme:l})=>l.materialDark};
  color: #dfe0e3;
`,Gx=tt.div`
  display: flex;
  flex-wrap: wrap;
`,za=tt.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,qx=tt.span`
  cursor: pointer;

  background: ${({active:l,theme:r})=>l?r.hoverBackground:"transparent"};
  color: ${({active:l,theme:r})=>l?r.canvasTextInvert:r.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:l,active:r})=>r?"none":l.materialDark};
  }
`,Qx=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function Xx(l,r){return new Date(l,r+1,0).getDate()}function Vx(l,r,u){return new Date(l,r,u).getDay()}function Zx(l){const r=new Date(Date.parse(l)),u=r.getUTCDate(),s=r.getUTCMonth(),c=r.getUTCFullYear();return{day:u,month:s,year:c}}const Kx=v.forwardRef(({className:l,date:r=new Date().toISOString(),onAccept:u,onCancel:s,shadow:c=!0},d)=>{const[p,y]=v.useState(()=>Zx(r)),{year:b,month:m,day:x}=p,E=v.useCallback(({value:_})=>{y($=>({...$,month:_}))},[]),O=v.useCallback(_=>{y($=>({...$,year:_}))},[]),U=v.useCallback(_=>{y($=>({...$,day:_}))},[]),Y=v.useCallback(()=>{const _=[p.year,p.month+1,p.day].map($=>String($).padStart(2,"0")).join("-");u==null||u(_)},[p.day,p.month,p.year,u]),F=v.useMemo(()=>{const _=Array.from({length:42}),$=Vx(b,m,1);let B=x;const G=Xx(b,m);return B=B<G?B:G,_.forEach((I,W)=>{if(W>=$&&W<G+$){const nt=W-$+1;_[W]=j.createElement(za,{key:W,onClick:()=>{U(nt)}},j.createElement(qx,{active:nt===B},nt))}else _[W]=j.createElement(za,{key:W})}),_},[x,U,m,b]);return j.createElement(_g,{className:l,ref:d,shadow:c,style:{margin:20}},j.createElement(jg,null,j.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),j.createElement(Ng,null,j.createElement(ko,{noPadding:!0,style:{justifyContent:"space-between"}},j.createElement(zg,{options:Qx,value:m,onChange:E,width:128,menuMaxHeight:200}),j.createElement(Tg,{value:b,onChange:O,width:100})),j.createElement($x,null,j.createElement(Yx,null,j.createElement(za,null,"S"),j.createElement(za,null,"M"),j.createElement(za,null,"T"),j.createElement(za,null,"W"),j.createElement(za,null,"T"),j.createElement(za,null,"F"),j.createElement(za,null,"S")),j.createElement(Gx,null,F)),j.createElement(ko,{noPadding:!0,style:{justifyContent:"space-between"}},j.createElement(Ln,{fullWidth:!0,onClick:s,disabled:!s},"Cancel"),j.createElement(Ln,{fullWidth:!0,onClick:u?Y:void 0,disabled:!u},"OK"))))});Kx.displayName="DatePicker";const Wx=l=>{switch(l){case"status":case"well":return ot`
        ${Jt({style:"status"})}
      `;case"window":case"outside":return ot`
        ${Jt({style:"window"})}
      `;case"field":return ot`
        ${Jt({style:"field"})}
      `;default:return ot`
        ${Jt()}
      `}},Jx=tt.div`
  position: relative;
  font-size: 1rem;
  ${({variant:l})=>Wx(l)}
  ${({variant:l})=>na(l==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,Bg=v.forwardRef(({children:l,shadow:r=!1,variant:u="window",...s},c)=>j.createElement(Jx,{ref:c,shadow:r,variant:u,...s},l));Bg.displayName="Frame";const Fx=tt.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:l,variant:r})=>r==="flat"?l.flatDark:l.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:l})=>l.materialText};
  ${({variant:l})=>l!=="flat"&&ot`
      box-shadow: -1px -1px 0 1px ${({theme:r})=>r.borderDark},
        inset -1px -1px 0 1px ${({theme:r})=>r.borderDark};
    `}
  ${l=>l.$disabled&&la()}
`,Ix=tt.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:l,variant:r})=>r==="flat"?l.canvas:l.material};
`,Px=v.forwardRef(({label:l,disabled:r=!1,variant:u="default",children:s,...c},d)=>j.createElement(Fx,{"aria-disabled":r,$disabled:r,variant:u,ref:d,...c},l&&j.createElement(Ix,{variant:u},l),s));Px.displayName="GroupBox";const Hg=tt.div`
  ${({theme:l,size:r="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${fl(r)};
  width: 5px;
  border-top: 2px solid ${l.borderLightest};
  border-left: 2px solid ${l.borderLightest};
  border-bottom: 2px solid ${l.borderDark};
  border-right: 2px solid ${l.borderDark};
  background: ${l.material};
`}
`;Hg.displayName="Handle";const tA="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",eA=tt.div`
  display: inline-block;
  height: ${({size:l})=>fl(l)};
  width: ${({size:l})=>fl(l)};
`,aA=tt.span`
  display: block;
  background: ${tA};
  background-size: cover;
  width: 100%;
  height: 100%;
`,lA=v.forwardRef(({size:l=30,...r},u)=>j.createElement(eA,{size:l,ref:u,...r},j.createElement(aA,null)));lA.displayName="Hourglass";const nA=tt.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,iA=tt.div`
  position: relative;
`,rA=tt.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({theme:l})=>l.material};
  border-top: 4px solid ${({theme:l})=>l.borderLightest};
  border-left: 4px solid ${({theme:l})=>l.borderLightest};
  border-bottom: 4px solid ${({theme:l})=>l.borderDark};
  border-right: 4px solid ${({theme:l})=>l.borderDark};

  outline: 1px dotted ${({theme:l})=>l.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({theme:l})=>l.material};
  }
  box-shadow: 1px 1px 0 1px ${({theme:l})=>l.borderDarkest};

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 4px;
    right: 12px;
    width: 10px;
    border-top: 2px solid #4d9046;
    border-bottom: 2px solid #07ff00;
  }
`,oA=tt(ma).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,uA=tt.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({theme:l})=>l.material};
  border-left: 2px solid ${({theme:l})=>l.borderLightest};
  border-bottom: 2px solid ${({theme:l})=>l.borderDarkest};
  border-right: 2px solid ${({theme:l})=>l.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({theme:l})=>l.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({theme:l})=>l.material};
    border-left: 2px solid ${({theme:l})=>l.borderLightest};
    border-right: 2px solid ${({theme:l})=>l.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({theme:l})=>l.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({theme:l})=>l.material};
    border: 2px solid ${({theme:l})=>l.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({theme:l})=>l.borderLightest},
      1px 1px 0 1px ${({theme:l})=>l.borderDarkest};
  }
`,sA=v.forwardRef(({backgroundStyles:l,children:r,...u},s)=>j.createElement(nA,{ref:s,...u},j.createElement(iA,null,j.createElement(rA,null,j.createElement(oA,{style:l},r)),j.createElement(uA,null))));sA.displayName="Monitor";const cA=tt.div`
  display: inline-block;
  height: ${ge.md};
  width: 100%;
`,fA=tt(ma)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,Ug=ot`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,dA=tt.div`
  position: relative;
  top: 4px;
  ${Ug}
  background: ${({theme:l})=>l.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:l})=>l.materialText};
`,hA=tt.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${Ug}
  color: ${({theme:l})=>l.materialTextInvert};
  background: ${({theme:l})=>l.progress};
  clip-path: polygon(
    0 0,
    ${({value:l=0})=>l}% 0,
    ${({value:l=0})=>l}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,pA=tt.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,Lg=17,mA=tt.span`
  display: inline-block;
  width: ${Lg}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:l})=>l.progress};
  border-color: ${({theme:l})=>l.material};
  border-width: 0px 1px;
  border-style: solid;
`,gA=v.forwardRef(({hideValue:l=!1,shadow:r=!0,value:u,variant:s="default",...c},d)=>{const p=l?null:`${u}%`,y=v.useRef(null),[b,m]=v.useState([]),x=v.useCallback(()=>{if(!y.current||u===void 0)return;const E=y.current.getBoundingClientRect().width,O=Math.round(u/100*E/Lg);m(Array.from({length:O}))},[u]);return v.useEffect(()=>(x(),window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)),[x]),j.createElement(cA,{"aria-valuenow":u!==void 0?Math.round(u):void 0,ref:d,role:"progressbar",variant:s,...c},j.createElement(fA,{variant:s,shadow:r},s==="default"?j.createElement(j.Fragment,null,j.createElement(dA,{"data-testid":"defaultProgress1"},p),j.createElement(hA,{"data-testid":"defaultProgress2",value:u},p)):j.createElement(pA,{ref:y,"data-testid":"tileProgress"},b.map((E,O)=>j.createElement(mA,{key:O})))))});gA.displayName="ProgressBar";const $g=ot`
  width: ${ha}px;
  height: ${ha}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,bA=tt(ma)`
  ${$g}
  background: ${({$disabled:l,theme:r})=>l?r.material:r.canvas};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }
`,yA=tt.div`
  ${Ul()}
  ${$g}
  outline: none;
  background: ${({$disabled:l,theme:r})=>l?r.flatLight:r.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({theme:l})=>l.flatDark};
    border-radius: 50%;
  }
`,vA=tt.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${l=>l.$disabled?l.theme.checkmarkDisabled:l.theme.checkmark};
`,xA={flat:yA,default:bA},AA=v.forwardRef(({checked:l,className:r="",disabled:u=!1,label:s="",onChange:c,style:d={},variant:p="default",...y},b)=>{const m=xA[p];return j.createElement(Vc,{$disabled:u,className:r,style:d},j.createElement(m,{$disabled:u,role:"presentation"},l&&j.createElement(vA,{$disabled:u,variant:p})),j.createElement(To,{disabled:u,onChange:u?void 0:c,readOnly:u,type:"radio",checked:l,ref:b,...y}),s&&j.createElement(Zc,null,s))});AA.displayName="Radio";const wA=typeof window<"u"?v.useLayoutEffect:v.useEffect;function zl(l){const r=v.useRef(l);return wA(()=>{r.current=l}),v.useCallback((...u)=>(0,r.current)(...u),[])}function gm(l,r){typeof l=="function"?l(r):l&&(l.current=r)}function bm(l,r){return v.useMemo(()=>l==null&&r==null?null:u=>{gm(l,u),gm(r,u)},[l,r])}let Lo=!0,kc=!1,ym;const SA={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function EA(l){if("type"in l){const{type:r,tagName:u}=l;if(u==="INPUT"&&SA[r]&&!l.readOnly||u==="TEXTAREA"&&!l.readOnly)return!0}return!!("isContentEditable"in l&&l.isContentEditable)}function TA(l){l.metaKey||l.altKey||l.ctrlKey||(Lo=!0)}function hc(){Lo=!1}function RA(){this.visibilityState==="hidden"&&kc&&(Lo=!0)}function kA(l){l.addEventListener("keydown",TA,!0),l.addEventListener("mousedown",hc,!0),l.addEventListener("pointerdown",hc,!0),l.addEventListener("touchstart",hc,!0),l.addEventListener("visibilitychange",RA,!0)}function DA(l){const{target:r}=l;try{return r.matches(":focus-visible")}catch{}return Lo||EA(r)}function CA(){kc=!0,window.clearTimeout(ym),ym=window.setTimeout(()=>{kc=!1},100)}function OA(){const l=v.useCallback(r=>{const u=_v.findDOMNode(r);u!=null&&kA(u.ownerDocument)},[]);return{isFocusVisible:DA,onBlurVisible:CA,ref:l}}function MA(l,r,u){return(u-r)*l+r}function co(l,r){if(r!==void 0&&"changedTouches"in l){for(let u=0;u<l.changedTouches.length;u+=1){const s=l.changedTouches[u];if(s.identifier===r)return{x:s.clientX,y:s.clientY}}return!1}return"clientX"in l?{x:l.clientX,y:l.clientY}:!1}function fo(l){return l&&l.ownerDocument||document}function zA(l,r){var u;const{index:s}=(u=l.reduce((c,d,p)=>{const y=Math.abs(r-d);return c===null||y<c.distance||y===c.distance?{distance:y,index:p}:c},null))!==null&&u!==void 0?u:{};return s??-1}const NA=tt.div`
  display: inline-block;
  position: relative;
  touch-action: none;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    left: -15px;
    width: calc(100% + 30px);
    height: ${({hasMarks:l})=>l?"41px":"39px"};
    ${({isFocused:l,theme:r})=>l&&`
        outline: 2px dotted ${r.materialText};
        `}
  }

  ${({orientation:l,size:r})=>l==="vertical"?ot`
          height: ${r};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:u})=>u?"41px":"39px"};
          }
        `:ot`
          width: ${r};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:u})=>u?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:l})=>l?"none":"auto"};
`,Yg=()=>ot`
  position: absolute;
  ${({orientation:l})=>l==="vertical"?ot`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:ot`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,jA=tt(ma)`
  ${Yg()}
`,_A=tt(ma)`
  ${Yg()}

  border-left-color: ${({theme:l})=>l.flatLight};
  border-top-color: ${({theme:l})=>l.flatLight};
  border-right-color: ${({theme:l})=>l.canvas};
  border-bottom-color: ${({theme:l})=>l.canvas};
  &:before {
    border-left-color: ${({theme:l})=>l.flatDark};
    border-top-color: ${({theme:l})=>l.flatDark};
    border-right-color: ${({theme:l})=>l.flatLight};
    border-bottom-color: ${({theme:l})=>l.flatLight};
  }
`,BA=tt.span`
  position: relative;
  ${({orientation:l})=>l==="vertical"?ot`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:ot`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:l})=>l==="flat"?ot`
          ${Ul()}
          outline: 2px solid ${({theme:r})=>r.flatDark};
          background: ${({theme:r})=>r.flatLight};
        `:ot`
          ${na()}
          ${Jt()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:l,theme:r})=>l&&Wi({mainColor:r.material,secondaryColor:r.borderLightest})}
`,Do=6,HA=tt.span`
  display: inline-block;
  position: absolute;

  ${({orientation:l})=>l==="vertical"?ot`
          right: ${-8}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${Do}px;
          border-bottom: 2px solid ${({theme:r})=>r.materialText};
        `:ot`
          bottom: ${-6}px;
          height: ${Do}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:r})=>r.materialText};
          border-right: 1px solid ${({theme:r})=>r.materialText};
        `}

  color:  ${({theme:l})=>l.materialText};
  ${({$disabled:l,theme:r})=>l&&ot`
      ${la()}
      box-shadow: 1px 1px 0px ${r.materialTextDisabledShadow};
      border-color: ${r.materialTextDisabled};
    `}
`,UA=tt.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:l})=>l==="vertical"?ot`
          transform: translate(${Do+2}px, ${Do+1}px);
        `:ot`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,LA=v.forwardRef(({defaultValue:l,disabled:r=!1,marks:u=!1,max:s=100,min:c=0,name:d,onChange:p,onChangeCommitted:y,onMouseDown:b,orientation:m="horizontal",size:x="100%",step:E=1,value:O,variant:U="default",...Y},F)=>{const _=U==="flat"?_A:jA,$=m==="vertical",[B=c,G]=dl({defaultValue:l,onChange:p??y,value:O}),{isFocusVisible:I,onBlurVisible:W,ref:nt}=OA(),[lt,yt]=v.useState(!1),ft=v.useRef(),Ot=v.useRef(null),Rt=bm(nt,ft),vt=bm(F,Rt),g=zl(H=>{I(H)&&yt(!0)}),V=zl(()=>{lt!==!1&&(yt(!1),W())}),D=v.useRef(),R=v.useMemo(()=>u===!0&&Number.isFinite(E)?[...Array(Math.round((s-c)/E)+1)].map((H,P)=>({label:void 0,value:c+E*P})):Array.isArray(u)?u:[],[u,s,c,E]),L=zl(H=>{const P=(s-c)/10,it=R.map(dt=>dt.value),at=it.indexOf(B);let st=0;switch(H.key){case"Home":st=c;break;case"End":st=s;break;case"PageUp":E&&(st=B+P);break;case"PageDown":E&&(st=B-P);break;case"ArrowRight":case"ArrowUp":E?st=B+E:st=it[at+1]||it[it.length-1];break;case"ArrowLeft":case"ArrowDown":E?st=B-E:st=it[at-1]||it[0];break;default:return}H.preventDefault(),E&&(st=hm(st,E,c)),st=jl(st,c,s),G(st),yt(!0),p==null||p(st),y==null||y(st)}),q=v.useCallback(H=>{if(!ft.current)return 0;const P=ft.current.getBoundingClientRect();let it;$?it=(P.bottom-H.y)/P.height:it=(H.x-P.left)/P.width;let at;if(at=MA(it,c,s),E)at=hm(at,E,c);else{const st=R.map(J=>J.value),dt=zA(st,at);at=st[dt]}return at=jl(at,c,s),at},[R,s,c,E,$]),rt=zl(H=>{var P;const it=co(H,D.current);if(!it)return;const at=q(it);(P=Ot.current)===null||P===void 0||P.focus(),G(at),yt(!0),p==null||p(at)}),w=zl(H=>{const P=co(H,D.current);if(!P)return;const it=q(P);y==null||y(it),D.current=void 0;const at=fo(ft.current);at.removeEventListener("mousemove",rt),at.removeEventListener("mouseup",w),at.removeEventListener("touchmove",rt),at.removeEventListener("touchend",w)}),Q=zl(H=>{var P;b==null||b(H),H.preventDefault(),(P=Ot.current)===null||P===void 0||P.focus(),yt(!0);const it=co(H,D.current);if(it){const st=q(it);G(st),p==null||p(st)}const at=fo(ft.current);at.addEventListener("mousemove",rt),at.addEventListener("mouseup",w)}),et=zl(H=>{var P;H.preventDefault();const it=H.changedTouches[0];it!=null&&(D.current=it.identifier),(P=Ot.current)===null||P===void 0||P.focus(),yt(!0);const at=co(H,D.current);if(at){const dt=q(at);G(dt),p==null||p(dt)}const st=fo(ft.current);st.addEventListener("touchmove",rt),st.addEventListener("touchend",w)});return v.useEffect(()=>{const{current:H}=ft;H==null||H.addEventListener("touchstart",et);const P=fo(H);return()=>{H==null||H.removeEventListener("touchstart",et),P.removeEventListener("mousemove",rt),P.removeEventListener("mouseup",w),P.removeEventListener("touchmove",rt),P.removeEventListener("touchend",w)}},[w,rt,et]),j.createElement(NA,{$disabled:r,hasMarks:!!R.length,isFocused:lt,onMouseDown:Q,orientation:m,ref:vt,size:fl(x),...Y},j.createElement("input",{disabled:r,name:d,type:"hidden",value:B??0}),R&&R.map(H=>j.createElement(HA,{$disabled:r,"data-testid":"tick",key:H.value/(s-c)*100,orientation:m,style:{[$?"bottom":"left"]:`${(H.value-c)/(s-c)*100}%`}},H.label&&j.createElement(UA,{"aria-hidden":!0,"data-testid":"mark",orientation:m},H.label))),j.createElement(_,{orientation:m,variant:U}),j.createElement(BA,{$disabled:r,"aria-disabled":r?!0:void 0,"aria-orientation":m,"aria-valuemax":s,"aria-valuemin":c,"aria-valuenow":B,onBlur:V,onFocus:g,onKeyDown:L,orientation:m,ref:Ot,role:"slider",style:{[$?"bottom":"left"]:`${($?-100:0)+100*(B-c)/(s-c)}%`},tabIndex:r?void 0:0,variant:U}))});LA.displayName="Slider";const $A=tt.tbody`
  background: ${({theme:l})=>l.canvas};
  display: table-row-group;
  box-shadow: ${Qc};
  overflow-y: auto;
`,YA=v.forwardRef(function({children:r,...u},s){return j.createElement($A,{ref:s,...u},r)});YA.displayName="TableBody";const GA=tt.td`
  padding: 0 8px;
`,qA=v.forwardRef(function({children:r,...u},s){return j.createElement(GA,{ref:s,...u},r)});qA.displayName="TableDataCell";const QA=tt.thead`
  display: table-header-group;
`,XA=v.forwardRef(function({children:r,...u},s){return j.createElement(QA,{ref:s,...u},r)});XA.displayName="TableHead";const VA=tt.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({theme:l})=>l.material};
  cursor: default;
  user-select: none;
  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Jt()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:l})=>!l&&ot`
      &:active {
        &:before {
          ${Jt({invert:!0,style:"window"})}
          border-left: none;
          border-top: none;
          padding-top: 2px;
        }

        & > div {
          position: relative;
          top: 2px;
        }
      }
    `}

  color: ${({theme:l})=>l.materialText};
  ${({$disabled:l})=>l&&la()}
  &:hover {
    color: ${({theme:l})=>l.materialText};
    ${({$disabled:l})=>l&&la()}
  }
`,ZA=v.forwardRef(function({disabled:r=!1,children:u,onClick:s,onTouchStart:c=Ll,sort:d,...p},y){const b=d==="asc"?"ascending":d==="desc"?"descending":void 0;return j.createElement(VA,{$disabled:r,"aria-disabled":r,"aria-sort":b,onClick:r?void 0:s,onTouchStart:r?void 0:c,ref:y,...p},j.createElement("div",null,u))});ZA.displayName="TableHeadCell";const KA=tt.tr`
  color: inherit;
  display: table-row;
  height: calc(${ge.md} - 2px);
  line-height: calc(${ge.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:l})=>l.canvasText};
  &:hover {
    background: ${({theme:l})=>l.hoverBackground};
    color: ${({theme:l})=>l.canvasTextInvert};
  }
`,WA=v.forwardRef(function({children:r,...u},s){return j.createElement(KA,{ref:s,...u},r)});WA.displayName="TableRow";const JA=tt.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,FA=tt(ma)`
  &:before {
    box-shadow: none;
  }
`,IA=v.forwardRef(({children:l,...r},u)=>j.createElement(FA,null,j.createElement(JA,{ref:u,...r},l)));IA.displayName="Table";const PA=tt.button`
  ${na()}
  ${Jt()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${ge.md};
  line-height: ${ge.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({theme:l})=>l.materialText};
  user-select: none;
  font-family: inherit;
  &:focus:after,
  &:active:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Un}
    outline-offset: -6px;
  }
  ${l=>l.selected&&`
    z-index: 1;
    height: calc(${ge.md} + 4px);
    top: -4px;
    margin-bottom: -6px;
    padding: 0 16px;
    margin-left: -8px;
    &:not(:last-child) {
      margin-right: -8px;
    }
  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;
    background: ${({theme:l})=>l.material};
    bottom: -4px;
    left: 2px;
  }
`,tw=v.forwardRef(({value:l,onClick:r,selected:u=!1,children:s,...c},d)=>j.createElement(PA,{"aria-selected":u,selected:u,onClick:p=>r==null?void 0:r(l,p),ref:d,role:"tab",...c},s));tw.displayName="Tab";const ew=tt.div`
  ${na()}
  ${Jt()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,aw=v.forwardRef(({children:l,...r},u)=>j.createElement(ew,{ref:u,...r},l));aw.displayName="TabBody";const lw=tt.div`
  position: relative;
  ${({isMultiRow:l,theme:r})=>l&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${r.borderDark};
  }
  `}
`,nw=tt.div.attrs(()=>({"data-testid":"tab-row"}))`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  text-align: left;
  left: 8px;
  width: calc(100% - 8px);

  &:not(:first-child):before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    border-right: 2px solid ${({theme:l})=>l.borderDarkest};
    border-left: 2px solid ${({theme:l})=>l.borderLightest};
  }
`;function iw(l,r){const u=[];for(let s=r;s>0;s-=1)u.push(l.splice(0,Math.ceil(l.length/s)));return u}const rw=v.forwardRef(({value:l,onChange:r=Ll,children:u,rows:s=1,...c},d)=>{const p=v.useMemo(()=>{var y;const b=(y=j.Children.map(u,E=>{if(!j.isValidElement(E))return null;const O={selected:E.props.value===l,onClick:r};return j.cloneElement(E,O)}))!==null&&y!==void 0?y:[],m=iw(b,s).map((E,O)=>({key:O,tabs:E})),x=m.findIndex(E=>E.tabs.some(O=>O.props.selected));return m.push(m.splice(x,1)[0]),m},[u,r,s,l]);return j.createElement(lw,{...c,isMultiRow:s>1,role:"tablist",ref:d},p.map(y=>j.createElement(nw,{key:y.key},y.tabs)))});rw.displayName="Tabs";const ow=["blur","focus"],uw=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function vm(l){return"nativeEvent"in l&&ow.includes(l.type)}function xm(l){return"nativeEvent"in l&&uw.includes(l.type)}const sw={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},cw=tt.span`
  position: absolute;

  z-index: 1;
  display: ${l=>l.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:l})=>l.borderDarkest};
  background: ${({theme:l})=>l.tooltip};
  box-shadow: ${qc};
  text-align: center;
  font-size: 1rem;
  ${l=>sw[l.position]}
`,fw=tt.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,dw=v.forwardRef(({className:l,children:r,disableFocusListener:u=!1,disableMouseListener:s=!1,enterDelay:c=1e3,leaveDelay:d=0,onBlur:p,onClose:y,onFocus:b,onMouseEnter:m,onMouseLeave:x,onOpen:E,style:O,text:U,position:Y="top",...F},_)=>{const[$,B]=v.useState(!1),[G,I]=v.useState(),[W,nt]=v.useState(),lt=!u,yt=!s,ft=q=>{window.clearTimeout(G),window.clearTimeout(W);const rt=window.setTimeout(()=>{B(!0),E==null||E(q)},c);I(rt)},Ot=q=>{q.persist(),vm(q)?b==null||b(q):xm(q)&&(m==null||m(q)),ft(q)},Rt=q=>{window.clearTimeout(G),window.clearTimeout(W);const rt=window.setTimeout(()=>{B(!1),y==null||y(q)},d);nt(rt)},vt=q=>{q.persist(),vm(q)?p==null||p(q):xm(q)&&(x==null||x(q)),Rt(q)},g=lt?vt:void 0,V=lt?Ot:void 0,D=yt?Ot:void 0,R=yt?vt:void 0,L=lt?0:void 0;return j.createElement(fw,{"data-testid":"tooltip-wrapper",onBlur:g,onFocus:V,onMouseEnter:D,onMouseLeave:R,tabIndex:L},j.createElement(cw,{className:l,"data-testid":"tooltip",position:Y,ref:_,show:$,style:O,...F},U),r)});dw.displayName="Tooltip";const Dc=tt(Zc)`
  white-space: nowrap;
`,Gg=ot`
  :focus {
    outline: none;
  }

  ${({$disabled:l})=>l?"cursor: default;":ot`
          cursor: pointer;

          :focus {
            ${Dc} {
              background: ${({theme:r})=>r.hoverBackground};
              color: ${({theme:r})=>r.materialTextInvert};
              outline: 2px dotted ${({theme:r})=>r.focusSecondary};
            }
          }
        `}
`,hw=tt.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:l})=>l&&ot`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({theme:r})=>r.borderDark};
      }
    `}

  ul {
    padding-left: 19.5px;
  }

  li {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 17.5px;
      left: 5.5px;
      width: 22px;
      border-top: 2px dashed ${({theme:l})=>l.borderDark};
      font-size: 12px;
    }
  }
`,pw=tt.li`
  position: relative;
  padding-left: ${({hasItems:l})=>l?"0":"13px"};

  ${({isRootLevel:l})=>l?ot`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({theme:r})=>r.material};
            }
          }
        `:ot`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({theme:r})=>r.material};
            }
          }
        `}

  & > details > ul {
    &:after {
      content: '';
      position: absolute;
      top: -18px;
      bottom: 0;
      left: 25px;
      border-left: 2px dashed ${({theme:l})=>l.borderDark};
    }
  }
`,mw=tt.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,gw=tt.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:l})=>l.materialText};
  user-select: none;
  padding-left: 18px;
  ${Gg};

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: '+';
    position: absolute;
    left: 0;
    display: block;
    width: 8px;
    height: 9px;
    border: 2px solid #808080;
    padding-left: 1px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
  }
`,Am=tt(Vc)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${Gg};
`,bw=tt.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function wm(l,r){return l.includes(r)?l.filter(u=>u!==r):[...l,r]}function Sm(l){l.preventDefault()}function qg({className:l,disabled:r,expanded:u,innerRef:s,level:c,select:d,selected:p,style:y,tree:b=[]}){const m=c===0,x=v.useCallback(E=>{var O,U;const Y=!!(E.items&&E.items.length>0),F=u.includes(E.id),_=(O=r||E.disabled)!==null&&O!==void 0?O:!1,$=_?Sm:W=>d(W,E),B=_?Sm:W=>d(W,E),G=p===E.id,I=j.createElement(bw,{"aria-hidden":!0},E.icon);return j.createElement(pw,{key:E.label,isRootLevel:m,role:"treeitem","aria-expanded":F,"aria-selected":G,hasItems:Y},Y?j.createElement(mw,{open:F},j.createElement(gw,{onClick:$,$disabled:_},j.createElement(Am,{$disabled:_},I,j.createElement(Dc,null,E.label))),F&&j.createElement(qg,{className:l,disabled:_,expanded:u,level:c+1,select:d,selected:p,style:y,tree:(U=E.items)!==null&&U!==void 0?U:[]})):j.createElement(Am,{as:"button",$disabled:_,onClick:B},I,j.createElement(Dc,null,E.label)))},[l,r,u,m,c,d,p,y]);return j.createElement(hw,{className:m?l:void 0,style:m?y:void 0,ref:m?s:void 0,role:m?"tree":"group",isRootLevel:m},b.map(x))}function yw({className:l,defaultExpanded:r=[],defaultSelected:u,disabled:s=!1,expanded:c,onNodeSelect:d,onNodeToggle:p,selected:y,style:b,tree:m=[]},x){const[E,O]=dl({defaultValue:r,onChange:p,onChangePropName:"onNodeToggle",value:c,valuePropName:"expanded"}),[U,Y]=dl({defaultValue:u,onChange:d,onChangePropName:"onNodeSelect",value:y,valuePropName:"selected"}),F=v.useCallback((B,G)=>{if(p){const I=wm(E,G);p(B,I)}O(I=>wm(I,G))},[E,p,O]),_=v.useCallback((B,G)=>{Y(G),d&&d(B,G)},[d,Y]),$=v.useCallback((B,G)=>{B.preventDefault(),_(B,G.id),G.items&&G.items.length&&F(B,G.id)},[_,F]);return j.createElement(qg,{className:l,disabled:s,expanded:E,level:0,innerRef:x,select:$,selected:U,style:b,tree:m})}const vw=v.forwardRef(yw);vw.displayName="TreeView";const xw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAD/AP8A/6C9p5MAAAVLSURBVFjD7ZdbiFVlFMd/a+1znZvjXNJx8lLmkIbaSxkFEQXKZGT2YkQPUREW+RD03FMU9GaQQQm9FT1EkaVCISFRqOUlNQ1Myrk1XufMnNvMOftbPezLOXNmxkYhguiDfdjfPt/51n/9//+91nfg//EvD6mfFItFstms7v7ww7Xnh0c6fDCpWyQilnZOJ4sFm20z9TxLt7dTKk9K3cayuLPjyo7t209NTEy4tra22QGYWTRvfvHJrR/pT4c3dZmrFj2PcqWKYpiIpR58WDpWr8GcA5HgCsDhSiUb2LvHciMjKiqogDMSunLV/l0Hv3u6Awr5fJ7W1tYYQCK62blzJ+nm5rWH93zxRtuZUw/0Xx5JrRdSY2pc8sETqKowvrqPpVueAHOY71MdHsQvFrBsllRrO4N7Pyc/dolKmE1F4NBg6v5XH+1/79Z773st7enFegZiAENDQ0hLa3vq6JFHNl8bbRIVFEMBDRM1EZwozhz4Pp5zNL+/i9wP3zK09DYyr7/JqoxHNg0XfOGKQQnjnj8Hu04UipvPqvfL6nXr9t++dOnx8wMD0wEAGNAssCTt0eGMBb7jWhTcwgUh3YgggJTKuLEybmEe3zkSBosqsCABFRUGxRidhGJ+rCPx3YG3zuSu6ejAwPEZDNSDyCD0qGF+LaiGbnHOxWuds4AlA/MNcwHKrEAWwzkjoXBJhF4cU67CuakpJmeTIN7ULEjXrGZRi3HUDBt+f+WOPnL5AtVFPbSk0zVXO1CFhT6sVuMCwgCQEmgCxucCELGAhDcSBQ3uVSV8Yww8j+SzL9DpHF3qUapM4lykU3AJsAwQM46Fm+v1GFAk0NgkDq5SA2VVH6v6iDlAUNUg1YC+AFxUPFyYhNYknF55ZpMAi7MXYIlCd5i9c47Sns9IH/4hlCB0Z5i0b46m4cFaEK2xGOA1BLs+AEEQZxBS2Rp5zsKMfj0FZ05N88e0zLQhy/rnDhriz+YBC/kS8Ou8EG3SkNk0EMwxrwfydxIYoeHCUUYpexr8ThoWRlpb3TOtzdWg2fdRMYTQwA0IZjJgxO8zBu+K8oWXJOspZoYZeBpEjTaz2A9hazAwFRY4eNsvscJ8zAIFGgiYBUBY+ZwJJ53Q8uhmtmy4h0RIS8SOagL1PHzfDxoThqhizjGRz5G7No4W8/z41T66xq+GPauunM4FQCT4qGL8bMrdGx9jw3MvcCPj4uWL/HHhD/Lnz/PbgYNM5K4G4GXmWm18EMhqpDCeSvqs9+zv4s0Y3Z3d3NK9GKk6Hk9W6PGiYPWnizkAWHgEmRT42IRjpvMI2ciikEwk8EXZW00wKnVvZ0M+MwGEOnnAcoOFduMMRHE8fJZJhbRFR6t5eMAI+r6a0CcO9WReAWcHYXSLR5ODgoKLHH49BiKaphx8YnDSd/MM1xjdqJryTTXJ6FwFizlKMRgZjGcEVG5SAoOkObZ6ZRYDFw1kXhKYxZ2w06AiNyeBqJBMKl1iHHRwziWoJgDRaRBiAC0tLSRbmidPdt4y8CX+8ucLVzMtAmePHuLCgjbwHWaBHCIan4w07NWRUCJCJpNhaGSYgeNHmSqW+cZSDKeaqsnO1svZnt6ccgQzQ8JjHQD79u0jk05nToyM9p7dvWv3tmPfP7QMeEeTfCqCB8SnMYmP8UH3lLh5xiBMHEkHa6aMq05Ir1g5dOemjdvu6us7vePll8YiADED/f395HK58kNtbb+/cuDrXR8UCl+3m3ODqPX4KsH/gOkS1nfi2ZpjAigBHk7aenrGV/b2ni5OjI9FIGFmb/hHhjXUErlJX/03x19dE2bA1PxYJgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNS0wMS0yOVQxMTowMjowOSswMDowMEhEIm4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjUtMDEtMjlUMTE6MDI6MDkrMDA6MDA5GZrSAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI1LTAxLTI5VDExOjAyOjEwKzAwOjAwNz7+QAAAAABJRU5ErkJggg==",Aw="/assets/power-Ch1zkzcl.png";var pc,Em;function ww(){if(Em)return pc;Em=1;var l={name:"vistaesqueMidnight",anchor:"rgb(64, 64, 192)",anchorVisited:"rgb(64, 64, 192)",borderDark:"rgb(21, 21, 21)",borderDarkest:"rgb(0, 0, 0)",borderLight:"rgb(32, 32, 32)",borderLightest:"rgb(128, 128, 128)",canvas:"rgb(0, 0, 0)",canvasText:"rgb(255, 255, 255)",canvasTextDisabled:"rgb(21, 21, 21)",canvasTextDisabledShadow:"rgb(128, 128, 128)",canvasTextInvert:"rgb(255, 255, 255)",checkmark:"rgb(255, 255, 255)",checkmarkDisabled:"rgb(32, 32, 32)",desktopBackground:"rgb(31, 60, 89)",flatDark:"rgb(21, 21, 21)",flatLight:"rgb(32, 32, 32)",focusSecondary:"rgb(128, 128, 128)",headerBackground:"linear-gradient(to right, rgb(81, 132, 188), rgb(100, 168, 60))",headerNotActiveBackground:"linear-gradient(to right, rgb(22, 46, 101), rgb(18, 91, 30))",headerNotActiveText:"rgb(192, 192, 192)",headerText:"rgb(255, 255, 255)",hoverBackground:"rgb(49, 106, 197)",material:"rgb(32, 32, 32)",materialDark:"rgb(22, 46, 101)",materialText:"rgb(255, 255, 255)",materialTextDisabled:"rgb(21, 21, 21)",materialTextDisabledShadow:"rgb(128, 128, 128)",materialTextInvert:"rgb(255, 255, 255)",progress:"rgb(49, 106, 197)",tooltip:"rgb(0, 0, 30)"};return pc=l,pc}var Sw=ww();const Ew=Mc(Sw);(function(){var l,r=document.createElement("div");r.innerHTML="<div class=crt></div><div class=wb-header><div class=wb-control><span class=wb-min></span><span class=wb-max></span><span class=wb-full></span><span class=wb-close></span></div><div class=wb-drag><div class=wb-icon></div><div class=wb-title></div></div></div><div class=wb-body></div><div class=wb-n></div><div class=wb-s></div><div class=wb-w></div><div class=wb-e></div><div class=wb-nw></div><div class=wb-ne></div><div class=wb-se></div><div class=wb-sw></div></div>";function u(g,V,D,R){g&&g.addEventListener(V,D,R||!1)}function s(g,V){var D=window,R=m;D&&D.removeEventListener(g,V,R||!1)}function c(g,V){g.stopPropagation(),V&&g.preventDefault()}function d(g,V,D){D=""+D,g["_s_"+V]!==D&&(g.style.setProperty(V,D),g["_s_"+V]=D)}var p=[],y=[],b={capture:!0,passive:!1},m={capture:!0,passive:!0},x,E=0,O=10,U,Y,F,_,$,B;function G(g,V){if(!(this instanceof G))return new G(g);if(x||W(),g){if(V){var D=g;g=V}if(typeof g=="string")D=g;else{var R=g.id,L=g.index,q=g.root,rt=g.template;D=D||g.title;var w=g.icon,Q=g.mount,et=g.html,H=g.url,P=g.width,it=g.height,at=g.minwidth,st=g.minheight,dt=g.maxwidth,J=g.maxheight,gt=g.autosize,ht=g.overflow,xt=g.min,Ct=g.max,_t=g.hidden,qt=g.modal,ae=g.x||(qt?"center":0),Qt=g.y||(qt?"center":0),be=g.top,re=g.left,Le=g.bottom,Ee=g.right,ia=g.background,$e=g.border,Ha=g.header,$l=g.class,Ua=g.oncreate,Ae=g.onclose,ra=g.onfocus,we=g.onblur,$o=g.onmove,Yo=g.onresize,Go=g.onfullscreen,Yl=g.onmaximize,Gl=g.onminimize,ga=g.onrestore,ql=g.onhide,pl=g.onshow,qo=g.onload}}this.g=(rt||r).cloneNode(!0),this.g.id=this.id=R||"winbox-"+ ++E,this.g.className="winbox"+($l?" "+(typeof $l=="string"?$l:$l.join(" ")):"")+(qt?" modal":""),this.g.winbox=this,this.window=this.g,this.body=this.g.getElementsByClassName("wb-body")[0],this.h=Ha||35,y.push(this),ia&&this.setBackground(ia),$e?d(this.body,"margin",$e+(isNaN($e)?"":"px")):$e=0,Ha&&(V=this.g.getElementsByClassName("wb-header")[0],d(V,"height",Ha+"px"),d(V,"line-height",Ha+"px"),d(this.body,"top",Ha+"px")),D&&this.setTitle(D),w&&this.setIcon(w),Q?this.mount(Q):et?this.body.innerHTML=et:H&&this.setUrl(H,qo),be=be?I(be,$):0,Le=Le?I(Le,$):0,re=re?I(re,_):0,Ee=Ee?I(Ee,_):0,D=_-re-Ee,w=$-be-Le,dt=dt?I(dt,D):D,J=J?I(J,w):w,at=at?I(at,dt):150,st=st?I(st,J):this.h,gt?((q||x).appendChild(this.body),P=Math.max(Math.min(this.body.clientWidth+2*$e+1,dt),at),it=Math.max(Math.min(this.body.clientHeight+this.h+$e+1,J),st),this.g.appendChild(this.body)):(P=P?I(P,dt):Math.max(dt/2,at)|0,it=it?I(it,J):Math.max(J/2,st)|0),ae=ae?I(ae,D,P):re,Qt=Qt?I(Qt,w,it):be,this.x=ae,this.y=Qt,this.width=P,this.height=it,this.s=at,this.o=st,this.m=dt,this.l=J,this.top=be,this.right=Ee,this.bottom=Le,this.left=re,this.index=L,this.j=ht,this.focused=this.hidden=this.full=this.max=this.min=!1,this.onclose=Ae,this.onfocus=ra,this.onblur=we,this.onmove=$o,this.onresize=Yo,this.onfullscreen=Go,this.onmaximize=Yl,this.onminimize=Gl,this.onrestore=ga,this.onhide=ql,this.onshow=pl,_t?this.hide():this.focus(),(L||L===0)&&(this.index=L,d(this.g,"z-index",L),L>O&&(O=L)),Ct?this.maximize():xt?this.minimize():this.resize().move(),nt(this),(q||x).appendChild(this.g),Ua&&Ua.call(this,g)}G.new=function(g){return new G(g)},G.stack=function(){return y};function I(g,V,D){return typeof g=="string"&&(g==="center"?g=(V-D)/2+.5|0:g==="right"||g==="bottom"?g=V-D:(D=parseFloat(g),g=(""+D!==g&&g.substring((""+D).length))==="%"?V/100*D+.5|0:D)),g}function W(){x=document.body,x[Y="requestFullscreen"]||x[Y="msRequestFullscreen"]||x[Y="webkitRequestFullscreen"]||x[Y="mozRequestFullscreen"]||(Y=""),F=Y&&Y.replace("request","exit").replace("mozRequest","mozCancel").replace("Request","Exit"),u(window,"resize",function(){Ot(),yt()}),u(x,"mousedown",function(){B=!1},!0),u(x,"mousedown",function(){if(!B){var g=y.length;if(g)for(--g;0<=g;g--){var V=y[g];if(V.focused){V.blur();break}}}}),Ot()}function nt(g){ft(g,"drag"),ft(g,"n"),ft(g,"s"),ft(g,"w"),ft(g,"e"),ft(g,"nw"),ft(g,"ne"),ft(g,"se"),ft(g,"sw"),u(g.g.getElementsByClassName("wb-min")[0],"click",function(V){c(V),g.min?g.restore().focus():g.minimize()}),u(g.g.getElementsByClassName("wb-max")[0],"click",function(V){c(V),g.max?g.restore().focus():g.maximize().focus()}),Y?u(g.g.getElementsByClassName("wb-full")[0],"click",function(V){c(V),g.fullscreen().focus()}):g.addClass("no-full"),u(g.g.getElementsByClassName("wb-close")[0],"click",function(V){c(V),g.close()||(g=null)}),u(g.g,"mousedown",function(){B=!0},!0),u(g.body,"mousedown",function(){g.focus()},!0)}function lt(g){p.splice(p.indexOf(g),1),yt(),g.removeClass("min"),g.min=!1,g.g.title=""}function yt(){for(var g=p.length,V={},D={},R=0,L;R<g;R++)L=p[R],L=L.left+":"+L.top,D[L]?D[L]++:(V[L]=0,D[L]=1);R=0;for(var q,rt;R<g;R++)L=p[R],q=L.left+":"+L.top,rt=Math.min((_-L.left-L.right)/D[q],250),L.resize(rt+1|0,L.h,!0).move(L.left+V[q]*rt|0,$-L.bottom-L.h,!0),V[q]++}function ft(g,V){function D(H){if(c(H,!0),g.focus(),V==="drag"){if(g.min){g.restore();return}if(!g.g.classList.contains("no-max")){var P=Date.now(),it=P-et;if(et=P,300>it){g.max?g.restore():g.maximize();return}}}g.min||(x.classList.add("wb-lock"),(rt=H.touches)&&(rt=rt[0])?(H=rt,u(window,"touchmove",R,m),u(window,"touchend",L,m)):(u(window,"mousemove",R,m),u(window,"mouseup",L,m)),w=H.pageX,Q=H.pageY)}function R(H){c(H),rt&&(H=H.touches[0]);var P=H.pageX;H=H.pageY;var it=P-w,at=H-Q,st=g.width,dt=g.height,J=g.x,gt=g.y,ht;if(V==="drag"){if(g.g.classList.contains("no-move"))return;g.x+=it,g.y+=at;var xt=ht=1}else{if(V==="e"||V==="se"||V==="ne"){g.width+=it;var Ct=1}else(V==="w"||V==="sw"||V==="nw")&&(g.x+=it,g.width-=it,xt=Ct=1);if(V==="s"||V==="se"||V==="sw"){g.height+=at;var _t=1}else(V==="n"||V==="ne"||V==="nw")&&(g.y+=at,g.height-=at,ht=_t=1)}Ct&&(g.width=Math.max(Math.min(g.width,g.m,_-g.x-g.right),g.s),Ct=g.width!==st),_t&&(g.height=Math.max(Math.min(g.height,g.l,$-g.y-g.bottom),g.o),_t=g.height!==dt),(Ct||_t)&&g.resize(),xt&&(g.max&&(g.x=(P<_/3?g.left:P>_/3*2?_-g.width-g.right:_/2-g.width/2)+it),g.x=Math.max(Math.min(g.x,g.j?_-30:_-g.width-g.right),g.j?30-g.width:g.left),xt=g.x!==J),ht&&(g.max&&(g.y=g.top+at),g.y=Math.max(Math.min(g.y,g.j?$-g.h:$-g.height-g.bottom),g.top),ht=g.y!==gt),(xt||ht)&&(g.max&&g.restore(),g.move()),(Ct||xt)&&(w=P),(_t||ht)&&(Q=H)}function L(H){c(H),x.classList.remove("wb-lock"),rt?(s("touchmove",R),s("touchend",L)):(s("mousemove",R),s("mouseup",L))}var q=g.g.getElementsByClassName("wb-"+V)[0];if(q){var rt,w,Q,et=0;u(q,"mousedown",D,b),u(q,"touchstart",D,b)}}function Ot(){var g=document.documentElement;_=g.clientWidth,$=g.clientHeight}l=G.prototype,l.mount=function(g){return this.unmount(),g.i||(g.i=g.parentNode),this.body.textContent="",this.body.appendChild(g),this},l.unmount=function(g){var V=this.body.firstChild;if(V){var D=g||V.i;D&&D.appendChild(V),V.i=g}return this},l.setTitle=function(g){var V=this.g.getElementsByClassName("wb-title")[0];g=this.title=g;var D=V.firstChild;return D?D.nodeValue=g:V.textContent=g,this},l.setIcon=function(g){var V=this.g.getElementsByClassName("wb-icon")[0];return d(V,"background-image","url("+g+")"),d(V,"display","inline-block"),this},l.setBackground=function(g){return d(this.g,"background",g),this},l.setUrl=function(g,V){var D=this.body.firstChild;return D&&D.tagName.toLowerCase()==="iframe"?D.src=g:(this.body.innerHTML='<iframe src="'+g+'"></iframe>',V&&(this.body.firstChild.onload=V)),this},l.focus=function(g){if(g===!1)return this.blur();if(!this.focused){if(g=y.length,1<g)for(var V=1;V<=g;V++){var D=y[g-V];if(D.focused){D.blur(),y.push(y.splice(y.indexOf(this),1)[0]);break}}d(this.g,"z-index",++O),this.index=O,this.addClass("focus"),this.focused=!0,this.onfocus&&this.onfocus()}return this},l.blur=function(g){return g===!1?this.focus():(this.focused&&(this.removeClass("focus"),this.focused=!1,this.onblur&&this.onblur()),this)},l.hide=function(g){if(g===!1)return this.show();if(!this.hidden)return this.onhide&&this.onhide(),this.hidden=!0,this.addClass("hide")},l.show=function(g){if(g===!1)return this.hide();if(this.hidden)return this.onshow&&this.onshow(),this.hidden=!1,this.removeClass("hide")},l.minimize=function(g){return g===!1?this.restore():(U&&vt(),this.max&&(this.removeClass("max"),this.max=!1),this.min||(p.push(this),yt(),this.g.title=this.title,this.addClass("min"),this.min=!0,this.focused&&(this.blur(),Rt()),this.onminimize&&this.onminimize()),this)};function Rt(){var g=y.length;if(g)for(--g;0<=g;g--){var V=y[g];if(!V.min){V.focus();break}}}l.restore=function(){return U&&vt(),this.min&&(lt(this),this.resize().move(),this.onrestore&&this.onrestore()),this.max&&(this.max=!1,this.removeClass("max").resize().move(),this.onrestore&&this.onrestore()),this},l.maximize=function(g){return g===!1?this.restore():(U&&vt(),this.min&&lt(this),this.max||(this.addClass("max").resize(_-this.left-this.right,$-this.top-this.bottom,!0).move(this.left,this.top,!0),this.max=!0,this.onmaximize&&this.onmaximize()),this)},l.fullscreen=function(g){if(this.min&&(lt(this),this.resize().move()),!U||!vt())this.body[Y](),U=this,this.full=!0,this.onfullscreen&&this.onfullscreen();else if(g===!1)return this.restore();return this};function vt(){if(U.full=!1,document.fullscreen||document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)return document[F](),!0}l.close=function(g){if(this.onclose&&this.onclose(g))return!0;this.min&&lt(this),y.splice(y.indexOf(this),1),this.unmount(),this.g.remove(),this.g.textContent="",this.g=this.body=this.g.winbox=null,this.focused&&Rt()},l.move=function(g,V,D){return g||g===0?D||(this.x=g?g=I(g,_-this.left-this.right,this.width):0,this.y=V?V=I(V,$-this.top-this.bottom,this.height):0):(g=this.x,V=this.y),d(this.g,"left",g+"px"),d(this.g,"top",V+"px"),this.onmove&&this.onmove(g,V),this},l.resize=function(g,V,D){return g||g===0?D||(this.width=g?g=I(g,this.m):0,this.height=V?V=I(V,this.l):0,g=Math.max(g,this.s),V=Math.max(V,this.o)):(g=this.width,V=this.height),d(this.g,"width",g+"px"),d(this.g,"height",V+"px"),this.onresize&&this.onresize(g,V),this},l.addControl=function(g){var V=g.class,D=g.image,R=g.click;g=g.index;var L=document.createElement("span"),q=this.g.getElementsByClassName("wb-control")[0],rt=this;return V&&(L.className=V),D&&d(L,"background-image","url("+D+")"),R&&(L.onclick=function(w){R.call(this,w,rt)}),q.insertBefore(L,q.childNodes[g||0]),this},l.removeControl=function(g){return(g=this.g.getElementsByClassName(g)[0])&&g.remove(),this},l.addClass=function(g){return this.g.classList.add(g),this},l.removeClass=function(g){return this.g.classList.remove(g),this},l.toggleClass=function(g){return this.g.classList.contains(g)?this.removeClass(g):this.addClass(g)},window.WinBox=G}).call(void 0);const ta=WinBox,Tw="/assets/monitor-CmERaNKN.gif",Rw=()=>{const[l,r]=v.useState(0),u=v.useRef(null);return v.useEffect(()=>{let s=setTimeout(()=>{let c=Date.now();u.current=setInterval(()=>{const d=Date.now()-c,p=Math.min(d/4400*100,100);r(p),p===100&&(clearInterval(u.current),setTimeout(()=>r(100),500))},30)},300);return()=>{clearTimeout(s),clearInterval(u.current)}},[]),A.jsx("div",{className:"loading",children:A.jsxs("div",{className:"loading_elements",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[A.jsx("img",{src:Tw,className:"monitor",alt:"~X:/WEBSITE/ > BOOTING UP..."}),A.jsx("br",{}),A.jsx("div",{className:"loading-bar-container",style:{width:240,height:18,background:"#222",borderRadius:1,overflow:"hidden",marginTop:24,border:"6px solid #000",boxShadow:"0 0 0 2px white"},children:A.jsx("div",{className:"loading-bar",style:{display:"flex",margin:0,width:`${l}%`,height:"100%",background:`repeating-linear-gradient(
        90deg,
        #fff 0,
        #fff 20px,
        #000 20px,
        #000 32px
      )`,transition:"width 0.1s linear"}})})]})})},kw="/assets/desktop_about-BSolwGv2.png",Dw="/assets/desktop_contact-CzjDK447.png",Cw="/assets/desktop_donate-DvEemoyz.png",Ow="/assets/desktop_gallery-BrU31pCN.png",Mw="/assets/desktop_videos-CZQy56j_.png",zw="/assets/desktop-about-5UQNFmge.gif",Nw="/assets/desktop-contact-BZXH_09O.gif",jw="/assets/desktop-donate-DQ3hbULG.gif",_w="/assets/desktop-gallery-BBDxh9IK.gif",Bw="/assets/desktop-videos-sxat4MtT.gif",Hw="/assets/steam-dEuQyfPr.png",Uw="/assets/money-spin-BlzhA9B2.gif",Lw="/assets/cashapp-Cjq2UZZq.png",$w="/assets/paypal-Dx-0PIKQ.png",Yw="/assets/tornada-BnYzoTfG.png",Gw="/assets/notepad-BzPf8E6H.png",qw="/assets/info-BTKMA8dZ.png",Qw="/assets/blog-D4q87bQu.png",Xw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAAQMAAADOtka5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAADUExURQAm/0mmUXMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA2SURBVHja7cEBAQAAAIIg/69uSEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwbggAAAWN1UKQAAAAASUVORK5CYII=",Vw="/assets/youtube-Bp2k9DZd.png",Zw="/assets/xitter-DLEKJHi9.png",Kw="/assets/instagram-BF4FSZOC.png",Ww="/assets/newgrounds-CgzA7QG0.png",Jw="/assets/reddit-CRfYQcex.png",Fw="/assets/facebook-BO--MLYP.png",Iw="/assets/light-mode-FXuk0yv8.png",Pw="/assets/dark-mode-C9bFRoYJ.png",St={desktop_about:kw,desktop_contact:Dw,desktop_donate:Cw,desktop_gallery:Ow,desktop_videos:Mw,desktop_about_gif:zw,desktop_contact_gif:Nw,desktop_gallery_gif:_w,desktop_donate_gif:jw,desktop_videos_gif:Bw,tornada:Yw,notepad:Gw,info:qw,pager:Xw,blog:Qw,youtube:Vw,xitter:Zw,instagram:Kw,newgrounds:Ww,reddit:Jw,facebook:Fw,steam:Hw,cashapp:Lw,paypal:$w,moneyspin:Uw,lightmode:Iw,darkmode:Pw},t2="/assets/BG-DNG1OH_1.gif",e2="/assets/BG2-afUp6XXV.gif",a2="/assets/BG3-D3gry5fr.gif",l2="/assets/BG4-niHp1bdb.gif",n2="/assets/BG5-3b4TfM3X.gif",i2="/assets/BG6-B2XIkXXV.gif",zn={background1:t2,background2:e2,background3:a2,background4:l2,background5:n2,background6:i2},r2="/assets/aboutem-COgL9iQm.gif",o2="/assets/this-is-my-tag-DHweJq1B.png",Tm=["jack of all trades, master at some","self-driven creative powerhouse","big boy with small dreams","just some guy tbh","nothing but a wizard","you're doing a great job!","set the scene. 86 degrees.","5'10, stand on my money, now I'm 5'6","long live the new flesh!","make that tv explode. bjork style.","antisocial experiment","do you like iPhone?","I'm afraid of what might happen if I relax."],Qg=Tm[Math.floor(Math.random()*Tm.length)];console.log("ECKS - ",Qg);const u2=()=>{const[l,r]=v.useState(!0);return v.useEffect(()=>{const u=setTimeout(()=>r(!1),1666);return()=>clearTimeout(u)},[]),A.jsxs(A.Fragment,{children:[l&&A.jsx("div",{className:`aboutme-splash${l?"":" splash-fade-out"}`,children:A.jsx("div",{className:"this-is-my-tag",children:A.jsx("img",{src:o2})})}),A.jsxs("div",{style:{width:"auto",height:"100%",padding:0,margin:0},children:[A.jsxs("div",{className:"about-me",style:{overflowX:"hidden"},children:[A.jsx("span",{className:"about-header",children:" SYSTEM > ABOUT"}),A.jsx("div",{className:"about-split"}),A.jsxs("div",{className:"about-content",children:[A.jsxs("span",{className:"about-tagline",style:{display:"flex",alignItems:"center"},children:[A.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[A.jsx("span",{className:"ECKS-NAME",children:"ECKS!"}),A.jsxs("span",{className:"about-quote",style:{marginTop:2},children:['"',Qg,'"']})]}),A.jsx("img",{src:r2,alt:"ECKS",className:"about-image",style:{right:0,marginLeft:50,maxWidth:172,alignSelf:"flex-start"}})]}),A.jsx("div",{className:"about-split"}),A.jsx("p",{className:"about-bio",style:{width:"95%"},children:"Nice to meet ya! I am a self-taught creative who finds retreat in curiously throwing things together in their free time. Over the last several years I have worked on various projects with my experiences in video editing, graphic design, VFX, and occasionally making music here and there."}),A.jsx("p",{className:"about-bio",style:{width:"95%"},children:"This site aims to be an archive of some of my best scraps, loosely stitched together in a way that can at least be presentable. Everything seen on here was formed from a collection of flickering synapses and contempt for predictability."}),A.jsxs("p",{className:"about-bio",style:{width:"98%"},children:["Some of my other work can be found at ",A.jsx("a",{href:"https://tornada.net",target:"_blank",children:A.jsx("span",{className:"bigdeal",children:"Tornada"})})," - an animation supergroup with an all-star lineup of me and my relatives."]}),A.jsx("p",{className:"about-bio",style:{width:"95%"},children:"At the end of the day, I simply just create the stuff that I wish to see and experience. To me that's the only compass that really makes sense."}),A.jsxs("p",{className:"about-bio",style:{width:"95%"},children:["Anyone hoping to get in touch (or just say hi) can reach me at ",A.jsx("a",{href:"mailto:spam@3cks.net",target:"_blank",rel:"noopener noreferrer",children:A.jsx("span",{className:"bigdeal",children:"spam@3cks.net"})})," or via the links listed on here. I'm open to work and/or whatever questions you may have."]})]})]}),A.jsx("span",{className:"bottom-tag",style:{marginTop:12,fontFamily:"Sans Nouveaux",fontSize:"8px"},children:"- 🅮 ECKS 2025 -"}),A.jsx("span",{style:{textAlign:"center",visibility:"hidden"},children:"."})]})]})},s2="/assets/Featured-VHS-DfAplfZO.gif",c2="/assets/videos-monitor-ksiYoajY.gif",Rm=[{title:"THE COLOR BROTHERS",description:"Four colorful boys and their dad.",featuring:"ColeDawg",featuring_link:"https://www.instagram.com/coledawg2001/"}],Cc=[{id:0,title:"BAKLAFA",window_title:"BAKLAVA-IS-FUCKING-AWESOME",alt_title:"BAKLAVA is FUCKING AWESOME",url:"https://iframe.mediadelivery.net/embed/516695/2a455ed0-a3b0-4171-9221-99c465d21d84?autoplay=true&loop=false&muted=false&preload=true&responsive=true",source:"https://3cks.net/#/watch/baklava-is-fucking-awesome",date:"06-2025",description:`Fresh hot two-pack of some commissions I did in June 2025... 
 First one is a promo video for @ciorecords’ BAKLAVA mixtape. Second one is for an artist named FuckingAwesome who wanted something more specific (quick and flashy with clips from Persona 3, L4D2, Panty n Stocking, and Dexter) and I was happy to oblige with both.`,thumbnail:"https://3cks.b-cdn.net/thumbnails/baklafa.jpg",isYouTube:!1},{id:1,title:"THE COLOR BROTHERS",window_title:"THE-COLOR-BROTHERS",alt_title:"COLOR BROTHERS",url:"https://iframe.mediadelivery.net/embed/516695/515277d2-1b3a-4169-b8f0-fc1fea52746b?autoplay=true&loop=false&muted=false&preload=true&responsive=true",source:"https://www.youtube.com/watch?v=KAqmREHqTmg",date:"03-23-2025",description:" Segment I did for Tornada’s “Four of a Kind.” This one was a long time in the making. We had already been trading around this idea for years before being blessed with the time and energy to shoot it. Many strings were pulled in one week but it led to some of the most fun I’ve ever had putting something together. We got plenty of B-Roll (of us asking people in public for happy meals) that I wanna put up eventually.",thumbnail:"https://3cks.b-cdn.net/thumbnails/colorbros.jpg",isYouTube:!1},{id:3,title:"HOT THEM SUMMER!",window_title:"HOT-THEM-SUMMER",alt_title:"HOT THEM SUMMER!",url:"https://iframe.mediadelivery.net/embed/516695/03c5e997-f922-42a8-8762-ccd12fab1d05?autoplay=true&loop=false&muted=false&preload=true&responsive=true",source:"https://3cks.net/#/watch/hot-them-summer",date:"11-24-2022",description:"Lyric video I did for my homegirl Lambs. Threw this together in about a day, just in time for the album she had just released back then. Peace to bluvelv who is on the song as well.",thumbnail:"https://3cks.b-cdn.net/thumbnails/lambs.jpg",isYouTube:!1},{id:4,title:"KNOWLEDGEGOD!",window_title:"KNOWLEDGE-GOD",alt_title:"KNOWLEDEGOD!",url:"https://iframe.mediadelivery.net/embed/516695/53a7705a-b207-4c1a-ac95-84cb68ca4cc6?autoplay=true&loop=false&muted=false&preload=true&responsive=true",source:"https://www.youtube.com/watch?v=sziewA2jzEY",date:"12-31-2022",description:'Segment I did for Tornada’s "Two of a Kind." Was asked to do a music video and this is what I sent back. You can prolly tell it was my first time datamoshing.',thumbnail:"https://3cks.b-cdn.net/thumbnails/knowledgegod.jpg",isYouTube:!1},{id:5,title:"RIDETOSEVENELEVEN",window_title:"MC-RIDE-GOES-TO-THE-STORE",alt_title:"MC RIDE GOES TO THE STORE",url:"https://www.youtube.com/embed/DKDvPdll1D4",source:"https://youtu.be/DKDvPdll1D4",date:"11-24-2019",description:"A fan favorite? Not sure. Made this in 20 minutes on a Sunday and still get asked about it.",thumbnail:"https://3cks.b-cdn.net/thumbnails/ride.jpg",isYouTube:!0},{id:6,title:"FED UP! (IN VR)",window_title:"FED-UP-IN-VR",alt_title:"FEDUP!INVR!",url:"https://www.youtube.com/embed/9m8US6X9gWs",source:"https://www.youtube.com/watch?v=9m8US6X9gWs",date:"08-31-2021",description:"This was one of my first times making money off editing. Threw this one together for Joy Way, the team behind the game being played. They used this video for promo and I was explicitly told to avoid using copyrighted music, but thankfully artist Bazanji came through with a plate of dense, royalty-free raps. Not my usual preferences but at least the client was happy. Honestly besides this I could NOT tell you the last time I played a VR game.",thumbnail:"https://3cks.b-cdn.net/thumbnails/stride.jpg",isYouTube:!0},{id:7,title:"CHOPPA WEDNESDAY!",window_title:"CHOPPA-WEDNESDAY",alt_title:"CHOPPA WEDNESDAY",url:"https://www.youtube.com/embed/G6ik_SLRulQ",source:"https://www.youtube.com/watch?v=G6ik_SLRulQ",date:"10-07-2020",description:"Got really into Team Fortress 2 (and Atlanta trap) during this era and made a few videos like this. I think they all look rougher around the edges now but this one is still my favorite. Was planning to do make 2-3 more but my SFM stopped working lol",thumbnail:"https://3cks.b-cdn.net/thumbnails/choppa.jpg",isYouTube:!0},{id:8,title:"BALD! (TF2)",window_title:"BALD",alt_title:"BALD! (TF2)",url:"https://www.youtube.com/embed/K3XvXyNBrHA",source:"https://www.youtube.com/watch?v=K3XvXyNBrHA",date:"06-10-2020",description:"This one came to me in a dream. It would ultimately serve as the beginning of a short series that kept me occupied during a weird time in my life. Most of my days were being eaten up by stress that I would channel into learning Source Filmmaker in the only way I knew how: by making quick lil videos that were asking to get several effects thrown on in post. Wouldn’t say it’s anywhere near my best work nowadays but I got some fond memories and met some cool people through it. Shoutout to anyone who remembers when I would promote this on TF2 trading sites.",thumbnail:"https://3cks.b-cdn.net/thumbnails/bald.jpg",isYouTube:!0},{id:9,title:"SAGGY AND SOGGY",window_title:"SAGGY-AND-SOGGY",alt_title:"SAGGY AND SOGGY - SODIUM CONNECTIONS",url:"https://www.youtube.com/embed/RnXMoazSLo4",source:"https://www.youtube.com/watch?vRnXMoazSLo4",date:"05-15-2020",description:'This one’s pretty old but still means a lot to me. Originally wrote the first draft of the script for this in 2018 after a PlayStation party with a friend. We were discussing what a funny name for a kids cartoon would be and landed on "Saggy and Soggy." That name stuck with me and would come up the next time I was in my studio. I wanted to write something I wasn’t used to, which at the time, was a cartoon longer than 30 seconds. Looking at it now, my writing was debatably as goofy as it is now, but for different reasons. While I was tryna get this up on the site, I came across the first draft again and was surprised at what got cut out. Mostly just random lines like Saggy saying "God and his son, Curious George" along with even having cutaway gags in the mix at some point. At the perfect time, Tornada just so happened to form, and after a few months, fellow videomaster and partner-in-crime Pity Fowl offered to take over. He showed (and has continued to show) a lotta love to this project, honestly more than what I had originally. That’s what ultimately led to his extended involvement: he wrote the second half of the script and ended up animating most of it. From my end, I offered a music video segment which was my first time using After Effects if you could not already tell..',thumbnail:"https://3cks.b-cdn.net/thumbnails/sagsog.jpg",isYouTube:!0},{id:10,title:"RIDETOSEVENELEVEN",window_title:"RIDETOSEVENELEVEN",alt_title:"MC RIDE GOES TO THE STORE",url:"https://www.youtube.com/embed/DKDvPdll1D4",source:"https://youtu.be/DKDvPdll1D4",date:"11-24-2019",description:"A fan favorite? Not sure. Made this in 20 minutes on a Sunday and still get asked about it.",thumbnail:"https://3cks.b-cdn.net/thumbnails/ride.jpg",isYouTube:!0}];function Oc(l){const r=document.createElement("div");new ta({title:`~/X/VIDEOS/${l.window_title}`,icon:St.desktop_videos,width:Math.min(500,window.innerWidth*.9)+"px",height:h2(),x:"center",y:"center",background:"#000",mount:r,setBackground:u=>console.log(`Background set to ${u}`),onClose:()=>{r.remove()}}),r.innerHTML=`
  <div>
  <div style="position:relative; padding-top:56.25%; border-bottom: 2px solid #FDFDFD"><iframe src="${l.url}" loading="lazy" style="border:0;position:absolute;top:0;height:100%;width:100%;"></iframe></div>
  </div>
  <div class="video-description" style="padding: 1em; border-top: 4px ridge #222; line-height: 1; background: linear-gradient(0deg,rgb(62, 62, 62) 0%, rgb(16, 16, 16) 86%); width:text-align: center;">
  <h2 style="color: #FDFDFD; margin: 0.3em 0;">${l.alt_title}</h2>
  ${l.date} - <a href="${l.source}" target="_blank" style="color:rgb(255, 0, 0); text-decoration: none; font-size: 14px; margin-top: 10px;">Watch Original Here</a>
  <button id="share-btn" class="share-btn" style="margin-left:10px;background:#222;color:#fff;border:'2px rigid #222';padding:2px 10px;border-radius:4px;cursor:pointer;font-size:13px;">Share</button>
  <p style="color: #FDFDFD; margin-top: 24px; white-space: pre-wrap; font-size: 16px; font-weight: bold;">Description / Notes:</p>
  <div class="description-border" style="font-size: 10pt;padding: 6px; line-height: 1.25em; background-color:rgba(0, 0, 0, 0.4); border: 2px solid #FDFDFD;">
  ${l.description}
  </div>
  </div>
  `,setTimeout(()=>{const u=r.querySelector("#share-btn");u&&u.addEventListener("click",()=>{const s=`https://3cks.net/#/watch/${l.window_title.toLowerCase()}`;if(navigator.share)navigator.share({title:l.title,url:s});else{const c=document.createElement("div");new ta({title:"~X/SHARE/",icon:St.blog,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",width:"375px",height:"215px",x:"center",y:"center",mount:c,setBackground:d=>console.log(`Background set to ${d}`),onClose:()=>{console.log("Window closed"),c.remove()}}),c.innerHTML=`
            <div style="padding: 24px; text-align: center; background: linear-gradient(0deg,rgb(33, 33, 33) 0%, rgb(12, 12, 12) 86%); width:text-align: center;">
              <div style="display: flex; align-items: center; gap: 10px; margin: 4px 0 16px 0; justify-content: center;">
<div style="display: flex; align-items: flex-end; gap: 32px; margin: 4px 0 16px 0; justify-content: center;font-family:'Pixeloid Sans';">
<div class="share-icon" style="display: flex; flex-direction: column; align-items: center;">
  <a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(s)}" target="_blank" title="Share on Twitter" style="display:inline-block;">
    <img src="${St.xitter}" alt="Twitter/X" style="width:33px;height:33px;margin-bottom:8px;" />
  <span style="color:#fdfdfd; font-size:14px;">Xitter</span>
      </a>
</div>
<div class="share-icon" style="display: flex; flex-direction: column; align-items: center;">
  <a href="https://www.reddit.com/submit?url=${encodeURIComponent(s)}" target="_blank" title="Share on Facebook" style="display:inline-block;">
    <img src="${St.reddit}" alt="Reddit" style="width:33px;height:33px;margin-bottom:8px;" />

  <span style="color:#fdfdfd; font-size:14px;">Reddit</span>
      </a>
</div>
<div class="share-icon" style="display: flex; flex-direction: column; align-items: center;">
  <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(s)}" target="_blank" title="Share on Reddit" style="display:inline-block;">
    <img src="${St.facebook}" alt="Facebook" style="width:33px;height:33px;margin-bottom:8px;" />

  <span style="color:#fdfdfd; font-size:14px;">Facebook</span>
      </a>
</div>
<div class="share-icon" style="display: flex; flex-direction: column; align-items: center;">
    <a href="mailto:?subject=Check%20this%20video&body=${encodeURIComponent(s)}" title="Share via Email" style="display:inline-block;">
    <img src="${St.desktop_contact}" alt="Email" style="width:33px;height:33px;margin-bottom:8px;" />

  <span style="color:#fdfdfd; font-size:14px;">Email</span>
      </a>
</div>
</div>
</div>

<div style="display: flex; align-items: center; justify-content: center; gap: 2px; margin-bottom: 16px;">
<input type="text" value="${s}" readonly style="width: 70%; background:#fdfdfd;color:#222; padding: 8px; font-size: 12px;font-family:'Pixeloid Sans';"/>
                <button id="copy-share-link" class="share-btn" style="background:#fdfdfd;color:#0d0d0d;border:'2px rigid #0d0d0d';padding:6px 18px;cursor:pointer;font-size:15px;font-family:'Pixeloid Sans';">Copy</button>
              </div>
              <br/>
              <span style="font-size:9px;color:#fdfdfd;font-family:'Sans Nouveaux'">- spread the luh -</span>
            </div>
            </div>
          `,setTimeout(()=>{const d=c.querySelector("#copy-share-link");d&&d.addEventListener("click",()=>{navigator.clipboard.writeText(s),d.textContent="Copied!",setTimeout(()=>d.textContent="Copy",1200)})},0)}})},0)}const f2=A.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",style:{marginLeft:4,verticalAlign:"middle"},children:A.jsx("path",{fill:"#FF0000",d:"M21.8 8.001a2.75 2.75 0 0 0-1.94-1.94C18.19 6 12 6 12 6s-6.19 0-7.86.061a2.75 2.75 0 0 0-1.94 1.94A28.6 28.6 0 0 0 2 12a28.6 28.6 0 0 0 .2 3.999 2.75 2.75 0 0 0 1.94 1.94C5.81 18 12 18 12 18s6.19 0 7.86-.061a2.75 2.75 0 0 0 1.94-1.94A28.6 28.6 0 0 0 22 12a28.6 28.6 0 0 0-.2-3.999zM10 15V9l5 3-5 3z"})}),d2=A.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",style:{marginLeft:4,verticalAlign:"middle"},children:A.jsx("path",{fill:"#888",d:"M10 17l5-5-5-5v10z"})}),h2=()=>window.innerWidth<768?"60%":"400px",p2=()=>{const l=v.useRef(null),[r,u]=v.useState(!0);return v.useEffect(()=>{const s=l.current;if(!s)return;const c=new window.ResizeObserver(d=>{for(let p of d)u(p.contentRect.width>480)});return c.observe(s),()=>c.disconnect()},[]),A.jsxs(A.Fragment,{children:[A.jsxs("div",{className:"videos-header",ref:l,style:{color:"#FDFDFD",fontSize:24,margin:0,overflowX:"visible",overflowY:"hidden",display:"flex",marginTop:-8,whiteSpace:"nowrap",marginBottom:16,maxHeight:222},children:[A.jsxs("div",{style:{fontFamily:"Pixeloid Sans",flexDirection:"column",display:"flex",minWidth:128,borderBottom:"2px solid black",width:"40%",paddingRight:20},children:[A.jsxs("span",{style:{paddingTop:30,marginLeft:24,fontSize:16,position:"absolute",wordSpacing:8},children:[A.jsx("span",{style:{color:"yellow",fontFamily:"Pixeloid Sans Bold",fontSize:18},children:"ECKS"}),"  →   bunker"]}),A.jsx("img",{src:c2,style:{width:"auto",height:"75%",objectFit:"contain",margin:"auto",marginLeft:0,paddingTop:48,alignSelf:"flex-start"}})]}),r&&A.jsx("div",{className:"videos-header-subtitle"}),A.jsx("div",{className:"videos-featured",style:{display:"flex",flexDirection:"column",alignItems:"flex-end",padding:4,paddingRight:24,borderRadius:0,cursor:"pointer",lineHeight:1,marginLeft:"auto"},onClick:()=>Oc(Cc[1]),children:A.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",textAlign:"center",flexDirection:"column",paddingLeft:36},children:[A.jsx("img",{src:s2,alt:Rm[0].title,style:{width:165,height:165,objectFit:"contain",paddingRight:6,margin:"auto",marginTop:33,display:"block"}}),A.jsxs("span",{style:{fontSize:12,marginRight:8,lineHeight:1,marginTop:-12},children:[A.jsx("span",{style:{color:"yellow"},children:"FEATURED VIDEO"}),A.jsx("br",{}),'"',Rm[0].title,'"']})]})})]}),A.jsx("div",{className:"videos-grid",style:{display:"flex",flexWrap:"wrap",width:"95%",textAlign:"center",gap:"12px"},children:Cc.filter(s=>s.id!==10).map(s=>A.jsxs("button",{className:"my-videos",style:{width:180,border:"2px ridge #222",borderRadius:1,height:"100%",margin:"auto",background:"#FDFDFD",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:"pointer",overflow:"hidden"},title:s.title,onClick:()=>Oc(s),children:[A.jsx("img",{src:s.thumbnail,alt:s.alt_title,loading:"lazy",style:{width:"90%",height:"90%",display:"block",border:"2px solid #222"}}),A.jsxs("span",{className:"video-title",style:{color:"black",fontWeight:"bold",fontSize:10,textAlign:"center",margin:"auto",padding:"6px 4px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",height:"100%"},children:[s.title,s.isYouTube?f2:d2]})]},s.id))}),A.jsx("span",{className:"bottom-tag",style:{marginTop:16,fontFamily:"Sans Nouveaux"},children:"- press play. trust the process. -"}),A.jsx("span",{style:{textAlign:"center",visibility:"hidden"},children:"..."})]})},m2=[{src:"/gallery/2025-alfreds-comm.jpg",alt:"ALFREDS-COMMISSION",year:"2025",full:"/gallery/2025-alfreds-comm.jpg",tags:["art/gfx"]},{src:"/gallery/2025-search-thumb.jpg",alt:"INTERNET-SEARCH",year:"2025",full:"/gallery/2025-search.jpg",tags:["art/gfx"]},{src:"/gallery/2025-baklava-mockup-thumb.jpg",alt:"BAKLAVA-AD-MOCKUP",year:"2025",full:"/gallery/2025-baklava-mockup.jpg",tags:["art/gfx"]},{src:"/gallery/2025-baklava-blend.jpg",alt:"BAKLAVA.BLEND",year:"2025",full:"/gallery/2025-baklava-blend.jpg",tags:["art/gfx"]},{src:"/gallery/2025-nadathumb.jpg",alt:"TOM-Y-JERRY",year:"2025",full:"/gallery/2025-nada.gif",tags:["art/gfx"]},{src:"/gallery/2025-banner.jpg",alt:"BANNER",year:"2025",full:"/gallery/2025-banner.jpg",tags:["art/gfx"]},{src:"/gallery/2025-you-rule-thumb.jpg",alt:"YOU-RULE",year:"2025",full:"/gallery/2025-you-rule.jpg",tags:["photos"]},{src:"/gallery/2025_crankdat.jpg",alt:"CRANKDAT",year:"2025",full:"/gallery/2025_crankdat.jpg",tags:["music"]},{src:"/gallery/2025-uhuhuh-thumb.jpg",alt:"UHUHUH",year:"2025",full:"/gallery/2025-uhuhuh.jpg",tags:["photos"]},{src:"/gallery/2025-vinyl.jpg",alt:"VINYL",year:"2025",full:"/gallery/2025-vinyl.jpg",tags:["music"]},{src:"/gallery/2025_bro-has-kickassia.jpg",alt:"BRO-HAS-KICKASSIA",year:"2025",full:"/gallery/2025_bro-has-kickassia.jpg",tags:["music"]},{src:"/gallery/2024-tape-mockup.jpg",alt:"SCRAPPED-TAPE-MOCKUP",year:"2024",full:"/gallery/2024-tape-mockup.jpg",tags:["art/gfx"]},{src:"/gallery/2024-be.jpg",alt:"BE",year:"2024",full:"/gallery/2024-be.jpg",tags:["music"]},{src:"/gallery/2024-HBO.jpg",alt:"HBO",year:"2024",full:"/gallery/2024-HBO.jpg",tags:["music"]},{src:"/gallery/2024-firestar-thumb.jpg",alt:"FIRESTAR",year:"2024",full:"/gallery/2024-firestar.jpg",tags:["photos"]},{src:"/gallery/2024-threebeersdeep.jpg",alt:"THREEBEERSDEEP",year:"2024",full:"/gallery/2024-threebeersdeep.jpg",tags:["photos"]},{src:"/gallery/2024-sagsog.jpg",alt:"SAG-SOG",year:"2024",full:"/gallery/2024-sagsog.jpg",tags:["photos"]},{src:"/gallery/2024-babygreen.jpg",alt:"BABYGREENONEARTH",year:"2024",full:"/gallery/2024-babygreen.jpg",tags:["photos"]},{src:"/gallery/2023-mach-stoney.jpg",alt:"MACH-STONEY",year:"2023",full:"/gallery/2023-mach-stoney.jpg",tags:["art/gfx"]},{src:"/gallery/2023-orpheus-thumb.jpg",alt:"ORPHEUS",year:"2023",full:"/gallery/2023-orpheus.jpg",tags:["music"]},{src:"/gallery/2023-setup.jpg",alt:"SETUP",year:"2023",full:"/gallery/2023-setup.jpg",tags:["photos"]},{src:"/gallery/2022-location.jpg",alt:"LOCATION",year:"2022",full:"/gallery/2022-location.jpg",tags:["photos"]},{src:"/gallery/2022-waffle-thumb.jpg",alt:"WAFFLES",year:"2022",full:"/gallery/2022-waffle.jpg",tags:["photos"]},{src:"/gallery/2020-fight-songs-thumb.jpg",alt:"FIGHT-SONGS",year:"2020",full:"/gallery/2020-fight-songs.jpg",tags:["music"]},{src:"/gallery/2020-floppa-thumb.jpg",alt:"BIG-FLOPPA",year:"2020",full:"/gallery/2020-floppa.jpg",tags:["photos"]},{src:"/gallery/2018-tux.jpg",alt:"TUX",year:"2018",full:"/gallery/2018-tux.jpg",tags:["photos"]}],km=["art/gfx","photos","music"],g2=()=>{const[l,r]=v.useState([...km]),u=d=>{r(p=>p.includes(d)?p.filter(y=>y!==d):[...p,d])},s=d=>{const p=document.createElement("div");p.style.background="#000",p.style.display="flex",p.style.alignItems="center",p.style.justifyContent="center",p.style.height="100%";const y=new window.Image;y.src=d.full,y.alt=d.alt,y.style.maxWidth="100%",y.style.maxHeight="100%",y.style.width="auto",y.style.height="auto",y.style.display="block",y.style.margin="auto",y.onload=()=>{const b=window.innerWidth*.6,m=window.innerHeight*.5;let x=y.naturalWidth,E=y.naturalHeight;const O=b/x,U=m/E,Y=Math.min(1,O,U);x=Math.max(220,x*Y),E=Math.max(150,E*Y),p.innerHTML="",p.appendChild(y),new ta({title:`~/X/GALLERY/${d.year}/${d.alt}`,icon:St.desktop_gallery,background:"#000",width:`${x}px`,height:`${E}px`,x:"center",y:"center",mount:p,setBackground:()=>{},onClose:()=>p.remove(),noResize:window.innerWidth<600,noMax:window.innerWidth<600,noMin:window.innerWidth<600,noFull:window.innerWidth<600})}},c=l.length===0?[]:m2.filter(d=>d.tags&&d.tags.some(p=>l.includes(p)));return A.jsxs(A.Fragment,{children:[A.jsxs("div",{className:"gallery-header",style:{color:"black",fontSize:40,margin:4},children:[A.jsx("p",{className:"gallery-header-title",children:"THE GALLERY"}),A.jsx("p",{className:"gallery-header-subtitle",style:{fontSize:14,lineHeight:1},children:"Here's a lil archive of images I have made, photos of my media collection, various side-quests and more. Double click an image to view it in full size."}),A.jsx("div",{className:"gallery-junk",style:{display:"flex",gap:18,justifyContent:"center",marginBottom:12,marginTop:12},children:km.map(d=>A.jsxs("label",{style:{display:"flex",alignItems:"center",cursor:"pointer",fontFamily:"Pixeloid Sans",fontSize:16},children:[A.jsx("input",{type:"checkbox",checked:l.includes(d),onChange:()=>u(d),style:{accentColor:"#222",width:18,height:18,marginRight:8,borderRadius:4,border:"2px solid #222",boxShadow:"0 2px 4px rgba(0,0,0,0.44)",cursor:"pointer"}}),A.jsx("span",{style:{color:l.includes(d)?"#222":"#888",fontWeight:l.includes(d)?"bold":"normal"},children:d.toUpperCase()})]},d))}),A.jsx("div",{className:"line"})]}),A.jsxs("div",{className:"gallery-grid",style:{width:"99%",display:"flex",flexWrap:"wrap",gap:16,justifyContent:"center",margin:"0 auto 16px auto",paddingLeft:16,paddingRight:24,boxSizing:"border-box"},children:[c.map((d,p)=>A.jsx("div",{className:"gallery-image-frame",style:{aspectRatio:"auto",background:"#111",border:"2px ridge #222",margin:"auto",padding:4,display:"flex",objectFit:"cover",alignItems:"center",justifyContent:"center",maxWidth:200,maxHeight:200,cursor:"pointer"},onDoubleClick:()=>s(d),onTouchEnd:()=>s(d),title:d.alt,children:A.jsx("img",{src:d.src,alt:d.alt,loading:"lazy",style:{background:"black",aspectRatio:"auto",maxWidth:"190px",maxHeight:"200px",width:"auto",height:"auto",display:"inline"}})},p)),A.jsx("br",{}),A.jsx("span",{className:"bottom-tag",style:{fontFamily:"Sans Nouveaux",marginTop:18},children:"- one shot. cut. print. perfect. -"})]})]})},b2=[{title:"track1.mp3",artist:"Artist A",src:"/music/track1.mp3",cover:"/covers/track1.jpg"},{title:"track2.mp3",artist:"Artist B",src:"/music/track2.mp3",cover:"/covers/track2.jpg"}],y2=()=>{const[l,r]=v.useState(!0);return v.useEffect(()=>{const u=setTimeout(()=>r(!1),1111);return()=>clearTimeout(u)},[]),l?A.jsx("div",{className:`aboutme-splash${l?"":" splash-fade-out"}`,children:A.jsx("h2",{style:{color:"#fff",fontFamily:"Pixeloid Sans",letterSpacing:2},children:"ABOUT ME"})}):A.jsxs("div",{style:{background:"linear-gradient(135deg, #181818 0%, #232323 100%)",minHeight:"100vh",color:"#fdfdfd",fontFamily:"Sans Nouveaux, Arial, sans-serif",padding:"32px",boxSizing:"border-box"},children:[A.jsx("h1",{style:{fontSize:32,marginBottom:24,fontWeight:"bold",letterSpacing:2},children:"Music"}),A.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"32px"},children:b2.map((u,s)=>A.jsxs("div",{style:{background:"#222",borderRadius:12,boxShadow:"0 2px 16px rgba(0,0,0,0.6)",padding:20,display:"flex",flexDirection:"column",alignItems:"center",transition:"box-shadow 0.2s"},children:[A.jsx("img",{src:u.cover,alt:u.title,style:{width:120,height:120,objectFit:"cover",borderRadius:8,marginBottom:16,boxShadow:"0 0 8px #000"}}),A.jsx("div",{style:{fontSize:18,fontWeight:"bold",marginBottom:4},children:u.title}),A.jsx("div",{style:{fontSize:14,color:"#aaa",marginBottom:12},children:u.artist}),A.jsxs("audio",{controls:!0,style:{width:"100%"},children:[A.jsx("source",{src:u.src,type:"audio/mp3"}),"Your browser does not support the audio element."]})]},s))})]})},v2=()=>A.jsxs("div",{className:"contact-me",style:{color:"black",fontSize:20,overflow:"hidden",marginLeft:12,marginRight:12,marginTop:12,paddingBottom:4,fontFamily:"Sans Nouveaux",textRendering:"optimizeLegibility"},children:[A.jsx("span",{style:{fontSize:14,marginTop:16,marginBottom:8},children:"Email:"}),A.jsx("a",{href:"mailto:spam@3cks.net",target:"_blank",children:A.jsx("div",{className:"email",style:{display:"flex",border:"2px solid #222",fontWeight:"bold",textAlign:"center",alignContent:"center",paddingTop:12,marginBottom:16,paddingBottom:16,marginTop:8,lineHeight:1},children:A.jsxs("span",{style:{margin:"0 auto"},children:[A.jsx("img",{src:St.desktop_contact,style:{width:24,height:24,marginRight:4}})," - spam@3cks.net"]})})}),A.jsx("span",{style:{fontSize:14,marginTop:16},children:"Socials:"}),A.jsxs("div",{className:"socials",style:{marginBottom:32,alignContent:"center",textAlign:"center",display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gridTemplateRows:"repeat(2, auto)",listStyleType:"disc",margin:"8px auto",lineHeight:1,fontSize:14,border:"2px solid #222"},children:[A.jsx("span",{className:"icon",children:A.jsx("a",{href:"https://youtube.com/ecksposting",target:"_blank",children:A.jsx("img",{src:St.youtube,alt:"YouTube",style:{width:48,height:48}})})}),A.jsx("span",{className:"icon",children:A.jsx("a",{href:"https://instagram.com/ecksposting",target:"_blank",children:A.jsx("img",{src:St.instagram,alt:"Instagram",style:{width:48,height:48}})})}),A.jsx("span",{className:"icon",children:A.jsx("a",{href:"https://twitter.com/ecksposting",target:"_blank",children:A.jsx("img",{src:St.xitter,alt:"Xitter",style:{width:48,height:48}})})}),A.jsx("span",{className:"icon",children:A.jsx("a",{href:"https://steamcommunity.com/id/ecksposting",target:"_blank",children:A.jsx("img",{src:St.steam,alt:"Steam",style:{width:48,height:48}})})}),A.jsx("span",{className:"icon",children:A.jsx("a",{href:"https://eckslol.newgrounds.com",target:"_blank",children:A.jsx("img",{src:St.newgrounds,alt:"Newgrounds",style:{width:48,height:48}})})})]}),A.jsx("span",{className:"bottom-tag",style:{marginTop:32},children:"- your move. -"})]}),x2=()=>A.jsx(A.Fragment,{children:A.jsxs("div",{className:"donate",style:{color:"black",fontSize:24,overflow:"hidden",margin:12,paddingBottom:4,fontFamily:"Sans Nouveaux"},children:[A.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:16},children:[A.jsx("img",{src:St.moneyspin,alt:"Donate",style:{width:96,height:128,objectFit:"contain",marginTop:8}}),A.jsxs("div",{style:{flex:1,lineHeight:1,fontSize:12,marginBottom:8},children:[A.jsx("span",{children:"Paypal:"}),A.jsx("a",{href:"https://paypal.me/ecksposting",target:"_blank",children:A.jsx("div",{className:"paypal-button",style:{display:"flex",border:"3px ridge #222",fontWeight:"bold",textAlign:"center",alignItems:"center",padding:8,marginBottom:8,marginTop:8,lineHeight:1,fontSize:12},children:A.jsx("span",{style:{margin:"0 auto"},children:"/ecksposting"})})}),A.jsx("span",{children:"Cashapp:"}),A.jsx("a",{href:"https://cash.app/$eckslol",target:"_blank",children:A.jsx("div",{className:"cashapp-button",style:{display:"flex",border:"3px ridge #222",fontWeight:"bold",textAlign:"center",alignItems:"center",padding:8,marginBottom:24,marginTop:8,lineHeight:1,fontSize:12},children:A.jsx("span",{style:{margin:"0 auto"},children:"$eckslol"})})})]})]}),A.jsx("span",{className:"bottom-tag",children:"- preciate it boss. -"})]})}),A2=()=>A.jsx(A.Fragment,{children:A.jsxs("div",{className:"notepad",style:{fontSize:8,fontFamily:"Sans Nouveaux",overflow:"hidden",paddingLeft:16,paddingRight:16,textRendering:"optimizeLegibility",lineHeight:1.4},children:[A.jsxs("p",{children:[A.jsx("span",{className:"notepad-header",children:"ADMIN"}),A.jsx("br",{}),A.jsx("span",{children:"Like most of what you see on here, this website was designed and built by the homeboy who's running it! He couldn't do it, however, without the help of:"})]}),A.jsxs("p",{className:"links",style:{fontSize:8,lineHeight:1.5},children:[A.jsx("span",{className:"notepad-header",children:"CODE"}),A.jsxs("span",{children:[A.jsx("br",{}),"- ",A.jsx("a",{href:"https://nextapps-de.github.io/winbox/",target:"_blank",children:"Winbox.js"})," | Window manager",A.jsx("br",{}),"- ",A.jsx("a",{href:"https://github.com/react95-io/React95",target:"_blank",children:"React95"})," | UI component library",A.jsx("br",{}),"- ",A.jsx("a",{href:"https://jdan.github.io/98.css/",target:"_blank",children:"98.css"})," | CSS for additional UI",A.jsx("br",{}),"- ",A.jsx("a",{href:"https://animate.style/",target:"_blank",children:"animate.css"})," | CSS animations",A.jsx("br",{}),"- ",A.jsx("a",{href:"https://oudkee.neocities.org/tutorials/tutcrt",target:"_blank",children:"@oudkee"})," | CRT Effect"]})]}),A.jsx("span",{className:"notepad-header",children:"ART"}),A.jsx("br",{}),A.jsxs("span",{children:["- Loading screen art by ",A.jsx("a",{href:"https://x.com/luvbappy",target:"_blank",children:"@luvbappy"}),A.jsx("br",{}),'- "About Me" illustration by ',A.jsx("a",{href:"https://www.instagram.com/coledawg2001/",target:"_blank",children:"@ColeDawg"})]}),A.jsxs("p",{children:[A.jsx("span",{className:"notepad-header",children:"SPECIAL THANKS"}),A.jsx("br",{}),"- Friends of the site:",A.jsxs("span",{children:[A.jsx("br",{}),A.jsx("a",{href:"https://lucke.neocities.org",target:"_blank",children:"lucke.neocities.org"}),", ",A.jsx("a",{href:"https://4nx4e.lol",target:"_blank",children:"4nx4e.lol"})]}),A.jsx("br",{}),A.jsx("span",{children:"- YOU! (Yes, you!) for being here!"}),A.jsx("br",{})]})]})}),w2="/assets/ms_sans_serif-Du8rjN1q.woff2",S2="/assets/ms_sans_serif_bold-D5dpRRHG.woff2";let Xg=[zn.background1,zn.background2,zn.background3,zn.background4,zn.background5,zn.background6],E2=Math.floor(Xg.length*Math.random()),Vg=Xg[E2];console.log(Vg);H1`
  ${U1}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${w2}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${S2}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;const T2=()=>{const[l,r]=v.useState(!0),[u,s]=v.useState(!0),c=()=>s(D=>!D);v.useEffect(()=>{u?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode"),document.querySelectorAll(".winbox").forEach(D=>{u?D.classList.add("dark-mode"):D.classList.remove("dark-mode")})},[u]);const d=()=>{r(D=>{const R=!D;return R?document.body.classList.add("crt"):document.body.classList.remove("crt"),R})},p=v.useRef(0),y=()=>{const D=Date.now();return D-p.current>=400?(p.current=D,!0):!1},[b,m]=v.useState(!0),[x,E]=v.useState(!1),[O,U]=v.useState(!1),Y=v.useRef(null),F=v.useRef(null);v.useEffect(()=>{if(!O)return;function D(R){F.current&&!F.current.contains(R.target)&&Y.current&&!Y.current.contains(R.target)&&U(!1)}return document.addEventListener("mousedown",D),()=>{document.removeEventListener("mousedown",D)}},[O]);const[_,$]=v.useState(new Date);v.useEffect(()=>{const D=setInterval(()=>$(new Date),1e3);return()=>clearInterval(D)},[]);const B=_.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"}),G=_.toLocaleDateString([],{month:"2-digit",day:"2-digit",year:"numeric"}),I=D=>window.innerWidth<768?"center":{about:"10%",gallery:"50%",videos:"25%",contact:"30%",donate:"50%",credits:"50%"}[D],W=(D,R="[3cks.net]")=>{document.title=D,setTimeout(()=>{document.title=R},11111)},lt=hl().pathname;v.useEffect(()=>{m(!0),E(!1),document.body.classList.add("crt");const D=setTimeout(()=>{m(!1);const R=lt.match(/^\/watch\/([^/]+)$/i);if(R){const L=R[1].toLowerCase(),q=Cc.find(rt=>rt.window_title.replace(/[^a-z0-9]/gi,"").toLowerCase()===L.replace(/[^a-z0-9]/gi,""));if(q){Oc(q);return}}switch(lt){case"/donate":ft();break;case"/videos":Rt();break;case"/gallery":g();break;case"/music":V();break;case"/blog":E(!0);break;default:E(!0);break}},6116);return()=>clearTimeout(D)},[lt]),v.useEffect(()=>{if(x){const D=document.createElement("div");new ta({title:"~X/WHATS_NEW/",icon:St.info,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",width:"375px",height:"400px",x:"center",y:"center",url:"https://eckis-chronicle.neocities.org",setBackground:R=>console.log(`Background set to ${R}`),onClose:()=>{console.log("Window closed"),D.remove()}}),E(!1)}},[x]),v.useEffect(()=>{document.body.style.backgroundImage=`url(${Vg})`,document.body.style.backgroundSize="cover",document.body.style.backgroundRepeat="no-repeat",document.body.style.backgroundPosition="center"},[]);const yt=()=>{if(!y())return;W("[3cks.net] - CREDITS!");const D=document.createElement("div");u&&D.classList.add("dark-mode");const R=new ta({title:"~X/CREDITS.TXT",icon:St.notepad,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:"255px",maxWidth:"20%",height:"360px",maxHeight:"25%",x:I("credits"),y:"45%",mount:D,setBackground:q=>console.log(`Background set to ${q}`),onClose:()=>{console.log("Window closed"),document.title="[3cks.net]",Oe.createRoot(D).unmount(),D.remove()}});u&&R.window.classList.add("dark-mode"),Oe.createRoot(D).render(A.jsx(A2,{}))},ft=()=>{if(!y())return;W("[3cks.net] - DONATE!");const D=document.createElement("div");u&&D.classList.add("dark-mode");const R=new ta({title:"~X/DONATE/",icon:St.desktop_donate,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:Math.min(325,window.innerWidth*.8)+"px",maxWidth:"40%",height:Math.min(230,window.innerHeight*.7)+"px",maxHeight:"35%",x:I("donate"),y:"45%",mount:D,setBackground:q=>console.log(`Background set to ${q}`),onClose:()=>{console.log("Window closed"),document.title="[3cks.net]",Oe.createRoot(D).unmount(),D.remove()}});u&&R.window.classList.add("dark-mode"),Oe.createRoot(D).render(A.jsx(x2,{}))},Ot=()=>{if(!y())return;W("[3cks.net] - ABOUT!");const D=document.createElement("div");u&&D.classList.add("dark-mode");const R=new ta({title:"~X/ABOUT/",className:"no-resize",icon:St.desktop_about,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:Math.min(440,window.innerWidth*.8)+"px",maxWidth:"440px",height:Math.min(575,window.innerHeight*.7)+"px",maxHeight:"550px",x:I("about"),y:"10%",mount:D,setBackground:q=>console.log(`Background set to ${q}`),noResize:!0,onClose:()=>{console.log("Window closed"),document.title="[3cks.net]",Oe.createRoot(D).unmount(),D.remove()}});u&&R.window.classList.add("dark-mode"),Oe.createRoot(D).render(A.jsx(u2,{}))},Rt=()=>{if(!y())return;W("[3cks.net] - VIDEOS!");const D=document.createElement("div");u&&D.classList.add("dark-mode"),l&&D.classList.add("crt");const R=new ta({title:"~X/VIDEOS/",icon:St.desktop_videos,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:Math.min(650,window.innerWidth*.8)+"px",maxWidth:"800px",height:Math.min(475,window.innerHeight*.7)+"px",maxHeight:"550px",x:I("videos"),y:"8%",mount:D,setBackground:q=>console.log(`Background set to ${q}`),onClose:()=>{console.log("Window closed"),document.title="[3cks.net]",Oe.createRoot(D).unmount(),D.remove()}});u&&R.window.classList.add("dark-mode"),Oe.createRoot(D).render(A.jsx(p2,{}))},vt=()=>{if(!y())return;W("[3cks.net] - CONTACT!");const D=document.createElement("div");u&&D.classList.add("dark-mode");const R=new ta({title:"~X/HIT_MY_LINE/",icon:St.desktop_contact,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:Math.min(325,window.innerWidth*.8)+"px",maxWidth:"600px",height:Math.min(280,window.innerHeight*.7)+"px",maxHeight:"400px",x:I("contact"),y:"30%",mount:D,setBackground:q=>console.log(`Background set to ${q}`),onClose:()=>{console.log("Window closed"),document.title="[3cks.net]",Oe.createRoot(D).unmount(),D.remove()}});u&&R.window.classList.add("dark-mode"),Oe.createRoot(D).render(A.jsx(v2,{}))},g=()=>{if(!y())return;W("[3cks.net] - GALLERY!");const D=document.createElement("div");u&&D.classList.add("dark-mode");const R=new ta({title:"~X/GALLERY/",icon:St.desktop_gallery,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:Math.min(490,window.innerWidth*.8)+"px",maxWidth:"800px",height:Math.min(580,window.innerHeight*.7)+"px",maxHeight:"650px",x:I("gallery"),y:"30%",mount:D,setBackground:q=>console.log(`Background set to ${q}`),onClose:()=>{console.log("Window closed"),document.title="[3cks.net]",Oe.createRoot(D).unmount(),D.remove()}});u&&R.window.classList.add("dark-mode"),Oe.createRoot(D).render(A.jsx(g2,{}))},V=()=>{if(!y())return;W("[3cks.net] - MUSIC!");const D=document.createElement("div");u&&D.classList.add("dark-mode");const R=new ta({title:"~X/MUSIC/",icon:St.desktop_gallery,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:Math.min(650,window.innerWidth*.8)+"px",maxWidth:"675px",height:Math.min(375,window.innerHeight*.7)+"px",maxHeight:"400px",x:I("gallery"),y:"30%",mount:D,setBackground:q=>console.log(`Background set to ${q}`),onClose:()=>{console.log("Window closed"),document.title="[3cks.net]",Oe.createRoot(D).unmount(),D.remove()}});u&&R.window.classList.add("dark-mode"),Oe.createRoot(D).render(A.jsx(y2,{}))};return v.useEffect(()=>{Object.values(St).forEach(D=>{const R=new window.Image;R.src=D})},[]),A.jsxs(A.Fragment,{children:[b&&A.jsx(Rw,{}),A.jsxs("div",{className:"App",children:[A.jsx("div",{className:"crt",style:{opacity:l?1:0,pointerEvents:"none",transition:"opacity 0.3 ease"}}),A.jsxs("div",{id:"desktop",children:[A.jsx("label",{htmlFor:"about-me",className:"desktop-item",onClick:Ot,children:A.jsxs("a",{href:"#/about/",onClick:D=>D.preventDefault(),children:[A.jsx("img",{src:St.desktop_about_gif,className:"logo",alt:"ABOUT"}),A.jsx("div",{className:"desktop-text",children:"ABOUT"})]})}),A.jsx("div",{id:"about-me-content",style:{display:"none"}}),A.jsx("label",{htmlFor:"videos",className:"desktop-item",onClick:Rt,children:A.jsxs("a",{href:"#/videos/",onClick:D=>D.preventDefault(),children:[A.jsx("img",{src:St.desktop_videos_gif,className:"logo",alt:"VIDEOS"}),A.jsx("div",{className:"desktop-text",children:"VIDEOS"})]})}),A.jsx("div",{id:"videos-content",style:{display:"none"}}),A.jsx("label",{htmlFor:"gallery",className:"desktop-item",onClick:g,children:A.jsxs("a",{href:"#/gallery/",onClick:D=>D.preventDefault(),children:[A.jsx("img",{src:St.desktop_gallery_gif,className:"logo",alt:"GALLERY"}),A.jsx("div",{className:"desktop-text",children:"GALLERY"})]})}),A.jsx("div",{id:"gallery-content",style:{display:"none"}}),A.jsx("label",{htmlFor:"contact",className:"desktop-item",onClick:vt,children:A.jsxs("a",{href:"#/contact/",onClick:D=>D.preventDefault(),children:[A.jsx("img",{src:St.desktop_contact_gif,className:"logo",alt:"CONTACT"}),A.jsx("div",{className:"desktop-text",children:"CONTACT"})]})}),A.jsx("div",{id:"contact-content",style:{display:"none"}}),A.jsx("label",{htmlFor:"donate",className:"desktop-item",onClick:ft,children:A.jsxs("a",{href:"#/donate/",onClick:D=>D.preventDefault(),children:[A.jsx("img",{src:St.desktop_donate_gif,className:"logo",alt:"GALLERY"}),A.jsx("div",{className:"desktop-text",children:"DONATE"})]})}),A.jsx("div",{id:"donate-content",style:{display:"none"}})]})]}),A.jsx("div",{className:"taskbar",children:A.jsx(j1,{theme:Ew,children:A.jsx(bg,{fixed:!0,style:{top:"auto",bottom:0,position:"fixed",zIndex:1},children:A.jsxs(ko,{noPadding:!0,style:{justifyContent:"space-between"},children:[A.jsxs("div",{style:{position:"relative",display:"flex",width:"100%",alignItems:"center",padding:"0px"},children:[A.jsxs(Ln,{ref:Y,onClick:()=>U(!O),active:O?!0:void 0,style:{fontWeight:"bold",marginRight:6,marginLeft:6},children:[A.jsx("img",{src:xw,alt:"react95 logo",style:{height:"20px",marginRight:4}}),"START"]}),A.jsx(Hg,{size:35,style:{marginRight:10}}),A.jsxs("div",{style:{position:"relative",display:"inline-block",marginRight:14},onClick:()=>window.open("https://youtube.com/ecksposting","_blank","noopener,noreferrer"),children:[A.jsx("img",{src:St.youtube,alt:"YouTube",className:"taskbar-item",style:{height:"25px"}}),A.jsx("div",{className:"taskbar-tooltip",style:{display:"none",position:"absolute",bottom:"120%",left:"50%",transform:"translateX(-45%)",background:"#222",color:"#fff",padding:"6px 8px",border:"2px solid white",fontSize:14,whiteSpace:"nowrap",zIndex:100,boxShadow:"0 2px 8px #0006",pointerEvents:"none"},children:"YOUTUBE"})]}),A.jsxs("div",{style:{position:"relative",display:"inline-block",marginRight:14},onClick:()=>window.open("https://youtube.com/ecksposting","_blank","noopener,noreferrer"),children:[A.jsx("img",{src:St.instagram,alt:"react95 logo",className:"taskbar-item",style:{height:"25px"}}),A.jsx("div",{className:"taskbar-tooltip",style:{display:"none",position:"absolute",bottom:"120%",left:"50%",transform:"translateX(-45%)",background:"#222",color:"#fff",padding:"6px 8px",border:"2px solid white",fontSize:14,whiteSpace:"nowrap",zIndex:100,boxShadow:"0 2px 8px #0006",pointerEvents:"none"},children:"INSTA"})]}),A.jsxs("div",{style:{position:"relative",display:"inline-block",marginRight:14},onClick:()=>window.open("https://youtube.com/ecksposting","_blank","noopener,noreferrer"),children:[A.jsx("img",{src:St.xitter,alt:"react95 logo",className:"taskbar-item",style:{height:"25px"}}),A.jsx("div",{className:"taskbar-tooltip",style:{display:"none",position:"absolute",bottom:"120%",left:"50%",transform:"translateX(-45%)",background:"#222",color:"#fff",padding:"6px 8px",border:"2px solid white",fontSize:14,whiteSpace:"nowrap",zIndex:100,boxShadow:"0 2px 8px #0006",pointerEvents:"none"},children:"XITTER"})]}),A.jsxs("div",{style:{position:"relative",display:"inline-block",marginRight:14},onClick:()=>window.open("https://eckslol.newgrounds.com/","_blank","noopener,noreferrer"),children:[A.jsx("img",{src:St.newgrounds,alt:"react95 logo",className:"taskbar-item",style:{height:"25px"}}),A.jsx("div",{className:"taskbar-tooltip",style:{display:"none",position:"absolute",bottom:"120%",left:"50%",transform:"translateX(-45%)",background:"#222",color:"#fff",padding:"6px 8px",border:"2px solid white",fontSize:14,whiteSpace:"nowrap",zIndex:100,boxShadow:"0 2px 8px #0006",pointerEvents:"none"},children:"NEWGROUNDS"})]}),O&&A.jsxs(yg,{ref:F,style:{position:"absolute",left:"-3px",bottom:"80%"},onClick:()=>U(!1),children:[A.jsxs(sl,{className:"taskbar-tab",onClick:Rt,style:{cursor:"pointer",fontFamily:"Pixeloid Sans"},children:[A.jsx("span",{role:"img",children:A.jsx("img",{src:St.desktop_videos,alt:"VIDEOS",style:{width:"20px",height:"20px",margin:"0 15px -4px 0"}})}),"VIDEOS"]}),A.jsxs(sl,{className:"taskbar-tab",onClick:g,style:{cursor:"pointer",fontFamily:"Pixeloid Sans"},children:[A.jsx("span",{role:"img",children:A.jsx("img",{src:St.desktop_gallery,alt:"GALLERY",style:{width:"20px",height:"20px",margin:"0 15px -4px 0"}})}),"GALLERY"]}),A.jsxs(sl,{className:"taskbar-tab",onClick:Ot,style:{cursor:"pointer",fontFamily:"Pixeloid Sans"},children:[A.jsx("span",{role:"img",children:A.jsx("img",{src:St.desktop_about,alt:"GALLERY",style:{width:"20px",height:"20px",margin:"0 15px -4px 0"}})}),"ABOUT"]}),A.jsxs(sl,{className:"taskbar-tab",onClick:x?()=>{}:()=>E(!0),style:{cursor:"pointer",fontFamily:"Pixeloid Sans"},children:[A.jsx("span",{role:"img",children:A.jsx("img",{src:St.blog,alt:"GALLERY",style:{width:"20px",height:"20px",margin:"0 15px -4px 0"}})}),"BLOG"]}),A.jsx(Ro,{}),A.jsxs(sl,{className:"taskbar-tab",onClick:()=>window.open("https://tornada.net/","_blank","noopener,noreferrer"),style:{cursor:"pointer",fontFamily:"Pixeloid Sans"},children:[A.jsx("span",{role:"img",children:A.jsx("img",{src:St.tornada,alt:"TORNADA",style:{width:"20px",height:"20px",margin:"0 15px -4px 0"}})}),"TORNADA"]}),A.jsx(Ro,{}),A.jsxs(sl,{className:"taskbar-tab",onClick:yt,style:{cursor:"pointer",fontFamily:"Pixeloid Sans"},children:[A.jsx("span",{role:"img",children:A.jsx("img",{src:St.notepad,alt:"CREDITS",style:{width:"20px",height:"20px",margin:"0 10px -3px 0"}})}),"CREDITS"]}),A.jsxs(sl,{disabled:!0,style:{fontFamily:"Pixeloid Sans"},children:[A.jsx("span",{role:"img",children:A.jsx("img",{src:Aw,style:{width:"20px",height:"20px",margin:"0 10px -3px 0"}})}),"SHUTDOWN"]})]})]}),A.jsx("img",{className:"taskbar-item",src:u?St.darkmode:St.lightmode,alt:u?"Dark mode":"Light mode",onClick:c,title:u?"Switch to light mode":"Switch to dark mode",style:{height:28,width:28,marginRight:8,cursor:"pointer",userSelect:"none",verticalAlign:"middle"}}),A.jsx(Ln,{style:{marginRight:8,fontWeight:"bold",background:l?"#222":"#444",color:"#fff"},onClick:d,children:l?"CRT":"LCD"}),A.jsxs(Bg,{variant:"well",shadow:!0,style:{right:"auto",padding:"0.1rem",width:"140px",height:"40px",textAlign:"center",fontSize:"1rem",fontWeight:"bold",color:"#fff",backgroundColor:"#000",border:"black inset 2px",borderRadius:"0.1rem",marginTop:4,marginBottom:4,marginRight:6,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[A.jsx("div",{style:{fontSize:"0.9em"},children:B}),A.jsx("div",{style:{fontSize:"0.9em",marginTop:6},children:G})]})]})})})})]})};Cm.createRoot(document.getElementById("root")).render(A.jsx(v.StrictMode,{children:A.jsx(Tv,{children:A.jsx(T2,{})})}));
