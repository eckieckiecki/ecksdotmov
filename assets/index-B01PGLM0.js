(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))o(h);new MutationObserver(h=>{for(const g of h)if(g.type==="childList")for(const y of g.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&o(y)}).observe(document,{childList:!0,subtree:!0});function c(h){const g={};return h.integrity&&(g.integrity=h.integrity),h.referrerPolicy&&(g.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?g.credentials="include":h.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function o(h){if(h.ep)return;h.ep=!0;const g=c(h);fetch(h.href,g)}})();function os(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Bc={exports:{}},Ri={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f0;function ub(){if(f0)return Ri;f0=1;var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function c(o,h,g){var y=null;if(g!==void 0&&(y=""+g),h.key!==void 0&&(y=""+h.key),"key"in h){g={};for(var T in h)T!=="key"&&(g[T]=h[T])}else g=h;return h=g.ref,{$$typeof:n,type:o,key:y,ref:h!==void 0?h:null,props:g}}return Ri.Fragment=r,Ri.jsx=c,Ri.jsxs=c,Ri}var d0;function rb(){return d0||(d0=1,Bc.exports=ub()),Bc.exports}var b=rb(),jc={exports:{}},yt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0;function ob(){if(h0)return yt;h0=1;var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),y=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),C=Symbol.iterator;function Y(p){return p===null||typeof p!="object"?null:(p=C&&p[C]||p["@@iterator"],typeof p=="function"?p:null)}var tt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,ut={};function I(p,j,K){this.props=p,this.context=j,this.refs=ut,this.updater=K||tt}I.prototype.isReactComponent={},I.prototype.setState=function(p,j){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,j,"setState")},I.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function P(){}P.prototype=I.prototype;function lt(p,j,K){this.props=p,this.context=j,this.refs=ut,this.updater=K||tt}var V=lt.prototype=new P;V.constructor=lt,W(V,I.prototype),V.isPureReactComponent=!0;var at=Array.isArray,M={H:null,A:null,T:null,S:null,V:null},et=Object.prototype.hasOwnProperty;function F(p,j,K,N,q,nt){return K=nt.ref,{$$typeof:n,type:p,key:j,ref:K!==void 0?K:null,props:nt}}function xt(p,j){return F(p.type,j,void 0,void 0,void 0,p.props)}function At(p){return typeof p=="object"&&p!==null&&p.$$typeof===n}function Xt(p){var j={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(K){return j[K]})}var Ct=/\/+/g;function bt(p,j){return typeof p=="object"&&p!==null&&p.key!=null?Xt(""+p.key):j.toString(36)}function d(){}function U(p){switch(p.status){case"fulfilled":return p.value;case"rejected":throw p.reason;default:switch(typeof p.status=="string"?p.then(d,d):(p.status="pending",p.then(function(j){p.status==="pending"&&(p.status="fulfilled",p.value=j)},function(j){p.status==="pending"&&(p.status="rejected",p.reason=j)})),p.status){case"fulfilled":return p.value;case"rejected":throw p.reason}}throw p}function Z(p,j,K,N,q){var nt=typeof p;(nt==="undefined"||nt==="boolean")&&(p=null);var J=!1;if(p===null)J=!0;else switch(nt){case"bigint":case"string":case"number":J=!0;break;case"object":switch(p.$$typeof){case n:case r:J=!0;break;case R:return J=p._init,Z(J(p._payload),j,K,N,q)}}if(J)return q=q(p),J=N===""?"."+bt(p,0):N,at(q)?(K="",J!=null&&(K=J.replace(Ct,"$&/")+"/"),Z(q,j,K,"",function(G){return G})):q!=null&&(At(q)&&(q=xt(q,K+(q.key==null||p&&p.key===q.key?"":(""+q.key).replace(Ct,"$&/")+"/")+J)),j.push(q)),1;J=0;var ct=N===""?".":N+":";if(at(p))for(var ft=0;ft<p.length;ft++)N=p[ft],nt=ct+bt(N,ft),J+=Z(N,j,K,nt,q);else if(ft=Y(p),typeof ft=="function")for(p=ft.call(p),ft=0;!(N=p.next()).done;)N=N.value,nt=ct+bt(N,ft++),J+=Z(N,j,K,nt,q);else if(nt==="object"){if(typeof p.then=="function")return Z(U(p),j,K,N,q);throw j=String(p),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return J}function D(p,j,K){if(p==null)return p;var N=[],q=0;return Z(p,N,"","",function(nt){return j.call(K,nt,q++)}),N}function B(p){if(p._status===-1){var j=p._result;j=j(),j.then(function(K){(p._status===0||p._status===-1)&&(p._status=1,p._result=K)},function(K){(p._status===0||p._status===-1)&&(p._status=2,p._result=K)}),p._status===-1&&(p._status=0,p._result=j)}if(p._status===1)return p._result.default;throw p._result}var Q=typeof reportError=="function"?reportError:function(p){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof p=="object"&&p!==null&&typeof p.message=="string"?String(p.message):String(p),error:p});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",p);return}console.error(p)};function it(){}return yt.Children={map:D,forEach:function(p,j,K){D(p,function(){j.apply(this,arguments)},K)},count:function(p){var j=0;return D(p,function(){j++}),j},toArray:function(p){return D(p,function(j){return j})||[]},only:function(p){if(!At(p))throw Error("React.Children.only expected to receive a single React element child.");return p}},yt.Component=I,yt.Fragment=c,yt.Profiler=h,yt.PureComponent=lt,yt.StrictMode=o,yt.Suspense=A,yt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=M,yt.__COMPILER_RUNTIME={__proto__:null,c:function(p){return M.H.useMemoCache(p)}},yt.cache=function(p){return function(){return p.apply(null,arguments)}},yt.cloneElement=function(p,j,K){if(p==null)throw Error("The argument must be a React element, but you passed "+p+".");var N=W({},p.props),q=p.key,nt=void 0;if(j!=null)for(J in j.ref!==void 0&&(nt=void 0),j.key!==void 0&&(q=""+j.key),j)!et.call(j,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&j.ref===void 0||(N[J]=j[J]);var J=arguments.length-2;if(J===1)N.children=K;else if(1<J){for(var ct=Array(J),ft=0;ft<J;ft++)ct[ft]=arguments[ft+2];N.children=ct}return F(p.type,q,void 0,void 0,nt,N)},yt.createContext=function(p){return p={$$typeof:y,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null},p.Provider=p,p.Consumer={$$typeof:g,_context:p},p},yt.createElement=function(p,j,K){var N,q={},nt=null;if(j!=null)for(N in j.key!==void 0&&(nt=""+j.key),j)et.call(j,N)&&N!=="key"&&N!=="__self"&&N!=="__source"&&(q[N]=j[N]);var J=arguments.length-2;if(J===1)q.children=K;else if(1<J){for(var ct=Array(J),ft=0;ft<J;ft++)ct[ft]=arguments[ft+2];q.children=ct}if(p&&p.defaultProps)for(N in J=p.defaultProps,J)q[N]===void 0&&(q[N]=J[N]);return F(p,nt,void 0,void 0,null,q)},yt.createRef=function(){return{current:null}},yt.forwardRef=function(p){return{$$typeof:T,render:p}},yt.isValidElement=At,yt.lazy=function(p){return{$$typeof:R,_payload:{_status:-1,_result:p},_init:B}},yt.memo=function(p,j){return{$$typeof:v,type:p,compare:j===void 0?null:j}},yt.startTransition=function(p){var j=M.T,K={};M.T=K;try{var N=p(),q=M.S;q!==null&&q(K,N),typeof N=="object"&&N!==null&&typeof N.then=="function"&&N.then(it,Q)}catch(nt){Q(nt)}finally{M.T=j}},yt.unstable_useCacheRefresh=function(){return M.H.useCacheRefresh()},yt.use=function(p){return M.H.use(p)},yt.useActionState=function(p,j,K){return M.H.useActionState(p,j,K)},yt.useCallback=function(p,j){return M.H.useCallback(p,j)},yt.useContext=function(p){return M.H.useContext(p)},yt.useDebugValue=function(){},yt.useDeferredValue=function(p,j){return M.H.useDeferredValue(p,j)},yt.useEffect=function(p,j,K){var N=M.H;if(typeof K=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return N.useEffect(p,j)},yt.useId=function(){return M.H.useId()},yt.useImperativeHandle=function(p,j,K){return M.H.useImperativeHandle(p,j,K)},yt.useInsertionEffect=function(p,j){return M.H.useInsertionEffect(p,j)},yt.useLayoutEffect=function(p,j){return M.H.useLayoutEffect(p,j)},yt.useMemo=function(p,j){return M.H.useMemo(p,j)},yt.useOptimistic=function(p,j){return M.H.useOptimistic(p,j)},yt.useReducer=function(p,j,K){return M.H.useReducer(p,j,K)},yt.useRef=function(p){return M.H.useRef(p)},yt.useState=function(p){return M.H.useState(p)},yt.useSyncExternalStore=function(p,j,K){return M.H.useSyncExternalStore(p,j,K)},yt.useTransition=function(){return M.H.useTransition()},yt.version="19.1.0",yt}var p0;function cs(){return p0||(p0=1,jc.exports=ob()),jc.exports}var k=cs();const _=os(k);var Hc={exports:{}},zi={},Uc={exports:{}},$c={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0;function cb(){return m0||(m0=1,function(n){function r(D,B){var Q=D.length;D.push(B);t:for(;0<Q;){var it=Q-1>>>1,p=D[it];if(0<h(p,B))D[it]=B,D[Q]=p,Q=it;else break t}}function c(D){return D.length===0?null:D[0]}function o(D){if(D.length===0)return null;var B=D[0],Q=D.pop();if(Q!==B){D[0]=Q;t:for(var it=0,p=D.length,j=p>>>1;it<j;){var K=2*(it+1)-1,N=D[K],q=K+1,nt=D[q];if(0>h(N,Q))q<p&&0>h(nt,N)?(D[it]=nt,D[q]=Q,it=q):(D[it]=N,D[K]=Q,it=K);else if(q<p&&0>h(nt,Q))D[it]=nt,D[q]=Q,it=q;else break t}}return B}function h(D,B){var Q=D.sortIndex-B.sortIndex;return Q!==0?Q:D.id-B.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;n.unstable_now=function(){return g.now()}}else{var y=Date,T=y.now();n.unstable_now=function(){return y.now()-T}}var A=[],v=[],R=1,C=null,Y=3,tt=!1,W=!1,ut=!1,I=!1,P=typeof setTimeout=="function"?setTimeout:null,lt=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function at(D){for(var B=c(v);B!==null;){if(B.callback===null)o(v);else if(B.startTime<=D)o(v),B.sortIndex=B.expirationTime,r(A,B);else break;B=c(v)}}function M(D){if(ut=!1,at(D),!W)if(c(A)!==null)W=!0,et||(et=!0,bt());else{var B=c(v);B!==null&&Z(M,B.startTime-D)}}var et=!1,F=-1,xt=5,At=-1;function Xt(){return I?!0:!(n.unstable_now()-At<xt)}function Ct(){if(I=!1,et){var D=n.unstable_now();At=D;var B=!0;try{t:{W=!1,ut&&(ut=!1,lt(F),F=-1),tt=!0;var Q=Y;try{e:{for(at(D),C=c(A);C!==null&&!(C.expirationTime>D&&Xt());){var it=C.callback;if(typeof it=="function"){C.callback=null,Y=C.priorityLevel;var p=it(C.expirationTime<=D);if(D=n.unstable_now(),typeof p=="function"){C.callback=p,at(D),B=!0;break e}C===c(A)&&o(A),at(D)}else o(A);C=c(A)}if(C!==null)B=!0;else{var j=c(v);j!==null&&Z(M,j.startTime-D),B=!1}}break t}finally{C=null,Y=Q,tt=!1}B=void 0}}finally{B?bt():et=!1}}}var bt;if(typeof V=="function")bt=function(){V(Ct)};else if(typeof MessageChannel<"u"){var d=new MessageChannel,U=d.port2;d.port1.onmessage=Ct,bt=function(){U.postMessage(null)}}else bt=function(){P(Ct,0)};function Z(D,B){F=P(function(){D(n.unstable_now())},B)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):xt=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return Y},n.unstable_next=function(D){switch(Y){case 1:case 2:case 3:var B=3;break;default:B=Y}var Q=Y;Y=B;try{return D()}finally{Y=Q}},n.unstable_requestPaint=function(){I=!0},n.unstable_runWithPriority=function(D,B){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Q=Y;Y=D;try{return B()}finally{Y=Q}},n.unstable_scheduleCallback=function(D,B,Q){var it=n.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?it+Q:it):Q=it,D){case 1:var p=-1;break;case 2:p=250;break;case 5:p=1073741823;break;case 4:p=1e4;break;default:p=5e3}return p=Q+p,D={id:R++,callback:B,priorityLevel:D,startTime:Q,expirationTime:p,sortIndex:-1},Q>it?(D.sortIndex=Q,r(v,D),c(A)===null&&D===c(v)&&(ut?(lt(F),F=-1):ut=!0,Z(M,Q-it))):(D.sortIndex=p,r(A,D),W||tt||(W=!0,et||(et=!0,bt()))),D},n.unstable_shouldYield=Xt,n.unstable_wrapCallback=function(D){var B=Y;return function(){var Q=Y;Y=B;try{return D.apply(this,arguments)}finally{Y=Q}}}}($c)),$c}var g0;function sb(){return g0||(g0=1,Uc.exports=cb()),Uc.exports}var Lc={exports:{}},ye={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b0;function fb(){if(b0)return ye;b0=1;var n=cs();function r(A){var v="https://react.dev/errors/"+A;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)v+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+A+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var o={d:{f:c,r:function(){throw Error(r(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},h=Symbol.for("react.portal");function g(A,v,R){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:C==null?null:""+C,children:A,containerInfo:v,implementation:R}}var y=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function T(A,v){if(A==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return ye.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ye.createPortal=function(A,v){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(r(299));return g(A,v,null,R)},ye.flushSync=function(A){var v=y.T,R=o.p;try{if(y.T=null,o.p=2,A)return A()}finally{y.T=v,o.p=R,o.d.f()}},ye.preconnect=function(A,v){typeof A=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,o.d.C(A,v))},ye.prefetchDNS=function(A){typeof A=="string"&&o.d.D(A)},ye.preinit=function(A,v){if(typeof A=="string"&&v&&typeof v.as=="string"){var R=v.as,C=T(R,v.crossOrigin),Y=typeof v.integrity=="string"?v.integrity:void 0,tt=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;R==="style"?o.d.S(A,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:C,integrity:Y,fetchPriority:tt}):R==="script"&&o.d.X(A,{crossOrigin:C,integrity:Y,fetchPriority:tt,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},ye.preinitModule=function(A,v){if(typeof A=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var R=T(v.as,v.crossOrigin);o.d.M(A,{crossOrigin:R,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&o.d.M(A)},ye.preload=function(A,v){if(typeof A=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var R=v.as,C=T(R,v.crossOrigin);o.d.L(A,R,{crossOrigin:C,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},ye.preloadModule=function(A,v){if(typeof A=="string")if(v){var R=T(v.as,v.crossOrigin);o.d.m(A,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:R,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else o.d.m(A)},ye.requestFormReset=function(A){o.d.r(A)},ye.unstable_batchedUpdates=function(A,v){return A(v)},ye.useFormState=function(A,v,R){return y.H.useFormState(A,v,R)},ye.useFormStatus=function(){return y.H.useHostTransitionStatus()},ye.version="19.1.0",ye}var v0;function V0(){if(v0)return Lc.exports;v0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),Lc.exports=fb(),Lc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0;function db(){if(y0)return zi;y0=1;var n=sb(),r=cs(),c=V0();function o(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function g(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function y(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function T(t){if(g(t)!==t)throw Error(o(188))}function A(t){var e=t.alternate;if(!e){if(e=g(t),e===null)throw Error(o(188));return e!==t?null:t}for(var l=t,a=e;;){var i=l.return;if(i===null)break;var u=i.alternate;if(u===null){if(a=i.return,a!==null){l=a;continue}break}if(i.child===u.child){for(u=i.child;u;){if(u===l)return T(i),t;if(u===a)return T(i),e;u=u.sibling}throw Error(o(188))}if(l.return!==a.return)l=i,a=u;else{for(var s=!1,f=i.child;f;){if(f===l){s=!0,l=i,a=u;break}if(f===a){s=!0,a=i,l=u;break}f=f.sibling}if(!s){for(f=u.child;f;){if(f===l){s=!0,l=u,a=i;break}if(f===a){s=!0,a=u,l=i;break}f=f.sibling}if(!s)throw Error(o(189))}}if(l.alternate!==a)throw Error(o(190))}if(l.tag!==3)throw Error(o(188));return l.stateNode.current===l?t:e}function v(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=v(t),e!==null)return e;t=t.sibling}return null}var R=Object.assign,C=Symbol.for("react.element"),Y=Symbol.for("react.transitional.element"),tt=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),ut=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),lt=Symbol.for("react.consumer"),V=Symbol.for("react.context"),at=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),At=Symbol.for("react.activity"),Xt=Symbol.for("react.memo_cache_sentinel"),Ct=Symbol.iterator;function bt(t){return t===null||typeof t!="object"?null:(t=Ct&&t[Ct]||t["@@iterator"],typeof t=="function"?t:null)}var d=Symbol.for("react.client.reference");function U(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===d?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case W:return"Fragment";case I:return"Profiler";case ut:return"StrictMode";case M:return"Suspense";case et:return"SuspenseList";case At:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case tt:return"Portal";case V:return(t.displayName||"Context")+".Provider";case lt:return(t._context.displayName||"Context")+".Consumer";case at:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return e=t.displayName||null,e!==null?e:U(t.type)||"Memo";case xt:e=t._payload,t=t._init;try{return U(t(e))}catch{}}return null}var Z=Array.isArray,D=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},it=[],p=-1;function j(t){return{current:t}}function K(t){0>p||(t.current=it[p],it[p]=null,p--)}function N(t,e){p++,it[p]=t.current,t.current=e}var q=j(null),nt=j(null),J=j(null),ct=j(null);function ft(t,e){switch(N(J,e),N(nt,t),N(q,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?$h(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=$h(e),t=Lh(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(q),N(q,t)}function G(){K(q),K(nt),K(J)}function mt(t){t.memoizedState!==null&&N(ct,t);var e=q.current,l=Lh(e,t.type);e!==l&&(N(nt,t),N(q,l))}function dt(t){nt.current===t&&(K(q),K(nt)),ct.current===t&&(K(ct),Si._currentValue=Q)}var vt=Object.prototype.hasOwnProperty,Rt=n.unstable_scheduleCallback,Nt=n.unstable_cancelCallback,Gt=n.unstable_shouldYield,le=n.unstable_requestPaint,qt=n.unstable_now,ge=n.unstable_getCurrentPriorityLevel,ie=n.unstable_ImmediatePriority,He=n.unstable_UserBlockingPriority,Ee=n.unstable_NormalPriority,ll=n.unstable_LowPriority,Ue=n.unstable_IdlePriority,Cl=n.log,_a=n.unstable_setDisableYieldValue,Ml=null,xe=null;function al(t){if(typeof Cl=="function"&&_a(t),xe&&typeof xe.setStrictMode=="function")try{xe.setStrictMode(Ml,t)}catch{}}var Ae=Math.clz32?Math.clz32:Ar,yr=Math.log,xr=Math.LN2;function Ar(t){return t>>>=0,t===0?32:31-(yr(t)/xr|0)|0}var Na=256,Ba=4194304;function dl(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ja(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var i=0,u=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var f=a&134217727;return f!==0?(a=f&~u,a!==0?i=dl(a):(s&=f,s!==0?i=dl(s):l||(l=f&~t,l!==0&&(i=dl(l))))):(f=a&~u,f!==0?i=dl(f):s!==0?i=dl(s):l||(l=a&~t,l!==0&&(i=dl(l)))),i===0?0:e!==0&&e!==i&&(e&u)===0&&(u=i&-i,l=e&-e,u>=l||u===32&&(l&4194048)!==0)?e:i}function ua(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Sr(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function As(){var t=Na;return Na<<=1,(Na&4194048)===0&&(Na=256),t}function Ss(){var t=Ba;return Ba<<=1,(Ba&62914560)===0&&(Ba=4194304),t}function Er(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function Mn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Kp(t,e,l,a,i,u){var s=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var f=t.entanglements,m=t.expirationTimes,w=t.hiddenUpdates;for(l=s&~l;0<l;){var H=31-Ae(l),L=1<<H;f[H]=0,m[H]=-1;var z=w[H];if(z!==null)for(w[H]=null,H=0;H<z.length;H++){var O=z[H];O!==null&&(O.lane&=-536870913)}l&=~L}a!==0&&Es(t,a,0),u!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=u&~(s&~e))}function Es(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-Ae(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&4194090}function ws(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-Ae(l),i=1<<a;i&e|t[a]&e&&(t[a]|=e),l&=~i}}function wr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Tr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ts(){var t=B.p;return t!==0?t:(t=window.event,t===void 0?32:i0(t.type))}function Jp(t,e){var l=B.p;try{return B.p=t,e()}finally{B.p=l}}var _l=Math.random().toString(36).slice(2),be="__reactFiber$"+_l,we="__reactProps$"+_l,Ha="__reactContainer$"+_l,Dr="__reactEvents$"+_l,Wp="__reactListeners$"+_l,Fp="__reactHandles$"+_l,Ds="__reactResources$"+_l,_n="__reactMarker$"+_l;function Rr(t){delete t[be],delete t[we],delete t[Dr],delete t[Wp],delete t[Fp]}function Ua(t){var e=t[be];if(e)return e;for(var l=t.parentNode;l;){if(e=l[Ha]||l[be]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=Qh(t);t!==null;){if(l=t[be])return l;t=Qh(t)}return e}t=l,l=t.parentNode}return null}function $a(t){if(t=t[be]||t[Ha]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Nn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(o(33))}function La(t){var e=t[Ds];return e||(e=t[Ds]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ue(t){t[_n]=!0}var Rs=new Set,zs={};function ra(t,e){Ya(t,e),Ya(t+"Capture",e)}function Ya(t,e){for(zs[t]=e,t=0;t<e.length;t++)Rs.add(e[t])}var Ip=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Os={},ks={};function Pp(t){return vt.call(ks,t)?!0:vt.call(Os,t)?!1:Ip.test(t)?ks[t]=!0:(Os[t]=!0,!1)}function ji(t,e,l){if(Pp(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function Hi(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function hl(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}var zr,Cs;function Ga(t){if(zr===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);zr=e&&e[1]||"",Cs=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zr+t+Cs}var Or=!1;function kr(t,e){if(!t||Or)return"";Or=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var L=function(){throw Error()};if(Object.defineProperty(L.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(L,[])}catch(O){var z=O}Reflect.construct(t,[],L)}else{try{L.call()}catch(O){z=O}t.call(L.prototype)}}else{try{throw Error()}catch(O){z=O}(L=t())&&typeof L.catch=="function"&&L.catch(function(){})}}catch(O){if(O&&z&&typeof O.stack=="string")return[O.stack,z.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),s=u[0],f=u[1];if(s&&f){var m=s.split(`
`),w=f.split(`
`);for(i=a=0;a<m.length&&!m[a].includes("DetermineComponentFrameRoot");)a++;for(;i<w.length&&!w[i].includes("DetermineComponentFrameRoot");)i++;if(a===m.length||i===w.length)for(a=m.length-1,i=w.length-1;1<=a&&0<=i&&m[a]!==w[i];)i--;for(;1<=a&&0<=i;a--,i--)if(m[a]!==w[i]){if(a!==1||i!==1)do if(a--,i--,0>i||m[a]!==w[i]){var H=`
`+m[a].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=a&&0<=i);break}}}finally{Or=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?Ga(l):""}function tm(t){switch(t.tag){case 26:case 27:case 5:return Ga(t.type);case 16:return Ga("Lazy");case 13:return Ga("Suspense");case 19:return Ga("SuspenseList");case 0:case 15:return kr(t.type,!1);case 11:return kr(t.type.render,!1);case 1:return kr(t.type,!0);case 31:return Ga("Activity");default:return""}}function Ms(t){try{var e="";do e+=tm(t),t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function $e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _s(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function em(t){var e=_s(t)?"checked":"value",l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),a=""+t[e];if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,u=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){a=""+s,u.call(this,s)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ui(t){t._valueTracker||(t._valueTracker=em(t))}function Ns(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=_s(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function $i(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var lm=/[\n"\\]/g;function Le(t){return t.replace(lm,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Cr(t,e,l,a,i,u,s,f){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+$e(e)):t.value!==""+$e(e)&&(t.value=""+$e(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?Mr(t,s,$e(e)):l!=null?Mr(t,s,$e(l)):a!=null&&t.removeAttribute("value"),i==null&&u!=null&&(t.defaultChecked=!!u),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.name=""+$e(f):t.removeAttribute("name")}function Bs(t,e,l,a,i,u,s,f){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||l!=null){if(!(u!=="submit"&&u!=="reset"||e!=null))return;l=l!=null?""+$e(l):"",e=e!=null?""+$e(e):l,f||e===t.value||(t.value=e),t.defaultValue=e}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=f?t.checked:!!a,t.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s)}function Mr(t,e,l){e==="number"&&$i(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function qa(t,e,l,a){if(t=t.options,e){e={};for(var i=0;i<l.length;i++)e["$"+l[i]]=!0;for(l=0;l<t.length;l++)i=e.hasOwnProperty("$"+t[l].value),t[l].selected!==i&&(t[l].selected=i),i&&a&&(t[l].defaultSelected=!0)}else{for(l=""+$e(l),e=null,i=0;i<t.length;i++){if(t[i].value===l){t[i].selected=!0,a&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function js(t,e,l){if(e!=null&&(e=""+$e(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+$e(l):""}function Hs(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(o(92));if(Z(a)){if(1<a.length)throw Error(o(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=$e(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a)}function Qa(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var am=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Us(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||am.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function $s(t,e,l){if(e!=null&&typeof e!="object")throw Error(o(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var i in e)a=e[i],e.hasOwnProperty(i)&&l[i]!==a&&Us(t,i,a)}else for(var u in e)e.hasOwnProperty(u)&&Us(t,u,e[u])}function _r(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),im=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Li(t){return im.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Nr=null;function Br(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xa=null,Va=null;function Ls(t){var e=$a(t);if(e&&(t=e.stateNode)){var l=t[we]||null;t:switch(t=e.stateNode,e.type){case"input":if(Cr(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Le(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var i=a[we]||null;if(!i)throw Error(o(90));Cr(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&Ns(a)}break t;case"textarea":js(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&qa(t,!!l.multiple,e,!1)}}}var jr=!1;function Ys(t,e,l){if(jr)return t(e,l);jr=!0;try{var a=t(e);return a}finally{if(jr=!1,(Xa!==null||Va!==null)&&(Tu(),Xa&&(e=Xa,t=Va,Va=Xa=null,Ls(e),t)))for(e=0;e<t.length;e++)Ls(t[e])}}function Bn(t,e){var l=t.stateNode;if(l===null)return null;var a=l[we]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(o(231,e,typeof l));return l}var pl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hr=!1;if(pl)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){Hr=!0}}),window.addEventListener("test",jn,jn),window.removeEventListener("test",jn,jn)}catch{Hr=!1}var Nl=null,Ur=null,Yi=null;function Gs(){if(Yi)return Yi;var t,e=Ur,l=e.length,a,i="value"in Nl?Nl.value:Nl.textContent,u=i.length;for(t=0;t<l&&e[t]===i[t];t++);var s=l-t;for(a=1;a<=s&&e[l-a]===i[u-a];a++);return Yi=i.slice(t,1<a?1-a:void 0)}function Gi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qi(){return!0}function qs(){return!1}function Te(t){function e(l,a,i,u,s){this._reactName=l,this._targetInst=i,this.type=a,this.nativeEvent=u,this.target=s,this.currentTarget=null;for(var f in t)t.hasOwnProperty(f)&&(l=t[f],this[f]=l?l(u):u[f]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?qi:qs,this.isPropagationStopped=qs,this}return R(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=qi)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=qi)},persist:function(){},isPersistent:qi}),e}var oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qi=Te(oa),Hn=R({},oa,{view:0,detail:0}),um=Te(Hn),$r,Lr,Un,Xi=R({},Hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Un&&(Un&&t.type==="mousemove"?($r=t.screenX-Un.screenX,Lr=t.screenY-Un.screenY):Lr=$r=0,Un=t),$r)},movementY:function(t){return"movementY"in t?t.movementY:Lr}}),Qs=Te(Xi),rm=R({},Xi,{dataTransfer:0}),om=Te(rm),cm=R({},Hn,{relatedTarget:0}),Yr=Te(cm),sm=R({},oa,{animationName:0,elapsedTime:0,pseudoElement:0}),fm=Te(sm),dm=R({},oa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),hm=Te(dm),pm=R({},oa,{data:0}),Xs=Te(pm),mm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vm(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=bm[t])?!!e[t]:!1}function Gr(){return vm}var ym=R({},Hn,{key:function(t){if(t.key){var e=mm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Gi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gr,charCode:function(t){return t.type==="keypress"?Gi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xm=Te(ym),Am=R({},Xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vs=Te(Am),Sm=R({},Hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gr}),Em=Te(Sm),wm=R({},oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tm=Te(wm),Dm=R({},Xi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Rm=Te(Dm),zm=R({},oa,{newState:0,oldState:0}),Om=Te(zm),km=[9,13,27,32],qr=pl&&"CompositionEvent"in window,$n=null;pl&&"documentMode"in document&&($n=document.documentMode);var Cm=pl&&"TextEvent"in window&&!$n,Zs=pl&&(!qr||$n&&8<$n&&11>=$n),Ks=" ",Js=!1;function Ws(t,e){switch(t){case"keyup":return km.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fs(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Za=!1;function Mm(t,e){switch(t){case"compositionend":return Fs(e);case"keypress":return e.which!==32?null:(Js=!0,Ks);case"textInput":return t=e.data,t===Ks&&Js?null:t;default:return null}}function _m(t,e){if(Za)return t==="compositionend"||!qr&&Ws(t,e)?(t=Gs(),Yi=Ur=Nl=null,Za=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Zs&&e.locale!=="ko"?null:e.data;default:return null}}var Nm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Is(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Nm[t.type]:e==="textarea"}function Ps(t,e,l,a){Xa?Va?Va.push(a):Va=[a]:Xa=a,e=Cu(e,"onChange"),0<e.length&&(l=new Qi("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var Ln=null,Yn=null;function Bm(t){Nh(t,0)}function Vi(t){var e=Nn(t);if(Ns(e))return t}function tf(t,e){if(t==="change")return e}var ef=!1;if(pl){var Qr;if(pl){var Xr="oninput"in document;if(!Xr){var lf=document.createElement("div");lf.setAttribute("oninput","return;"),Xr=typeof lf.oninput=="function"}Qr=Xr}else Qr=!1;ef=Qr&&(!document.documentMode||9<document.documentMode)}function af(){Ln&&(Ln.detachEvent("onpropertychange",nf),Yn=Ln=null)}function nf(t){if(t.propertyName==="value"&&Vi(Yn)){var e=[];Ps(e,Yn,t,Br(t)),Ys(Bm,e)}}function jm(t,e,l){t==="focusin"?(af(),Ln=e,Yn=l,Ln.attachEvent("onpropertychange",nf)):t==="focusout"&&af()}function Hm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vi(Yn)}function Um(t,e){if(t==="click")return Vi(e)}function $m(t,e){if(t==="input"||t==="change")return Vi(e)}function Lm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Oe=typeof Object.is=="function"?Object.is:Lm;function Gn(t,e){if(Oe(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var i=l[a];if(!vt.call(e,i)||!Oe(t[i],e[i]))return!1}return!0}function uf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rf(t,e){var l=uf(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=uf(l)}}function of(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?of(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=$i(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=$i(t.document)}return e}function Vr(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Ym=pl&&"documentMode"in document&&11>=document.documentMode,Ka=null,Zr=null,qn=null,Kr=!1;function sf(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Kr||Ka==null||Ka!==$i(a)||(a=Ka,"selectionStart"in a&&Vr(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),qn&&Gn(qn,a)||(qn=a,a=Cu(Zr,"onSelect"),0<a.length&&(e=new Qi("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=Ka)))}function ca(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var Ja={animationend:ca("Animation","AnimationEnd"),animationiteration:ca("Animation","AnimationIteration"),animationstart:ca("Animation","AnimationStart"),transitionrun:ca("Transition","TransitionRun"),transitionstart:ca("Transition","TransitionStart"),transitioncancel:ca("Transition","TransitionCancel"),transitionend:ca("Transition","TransitionEnd")},Jr={},ff={};pl&&(ff=document.createElement("div").style,"AnimationEvent"in window||(delete Ja.animationend.animation,delete Ja.animationiteration.animation,delete Ja.animationstart.animation),"TransitionEvent"in window||delete Ja.transitionend.transition);function sa(t){if(Jr[t])return Jr[t];if(!Ja[t])return t;var e=Ja[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in ff)return Jr[t]=e[l];return t}var df=sa("animationend"),hf=sa("animationiteration"),pf=sa("animationstart"),Gm=sa("transitionrun"),qm=sa("transitionstart"),Qm=sa("transitioncancel"),mf=sa("transitionend"),gf=new Map,Wr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wr.push("scrollEnd");function We(t,e){gf.set(t,e),ra(e,[t])}var bf=new WeakMap;function Ye(t,e){if(typeof t=="object"&&t!==null){var l=bf.get(t);return l!==void 0?l:(e={value:t,source:e,stack:Ms(e)},bf.set(t,e),e)}return{value:t,source:e,stack:Ms(e)}}var Ge=[],Wa=0,Fr=0;function Zi(){for(var t=Wa,e=Fr=Wa=0;e<t;){var l=Ge[e];Ge[e++]=null;var a=Ge[e];Ge[e++]=null;var i=Ge[e];Ge[e++]=null;var u=Ge[e];if(Ge[e++]=null,a!==null&&i!==null){var s=a.pending;s===null?i.next=i:(i.next=s.next,s.next=i),a.pending=i}u!==0&&vf(l,i,u)}}function Ki(t,e,l,a){Ge[Wa++]=t,Ge[Wa++]=e,Ge[Wa++]=l,Ge[Wa++]=a,Fr|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Ir(t,e,l,a){return Ki(t,e,l,a),Ji(t)}function Fa(t,e){return Ki(t,null,null,e),Ji(t)}function vf(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var i=!1,u=t.return;u!==null;)u.childLanes|=l,a=u.alternate,a!==null&&(a.childLanes|=l),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(i=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,i&&e!==null&&(i=31-Ae(l),t=u.hiddenUpdates,a=t[i],a===null?t[i]=[e]:a.push(e),e.lane=l|536870912),u):null}function Ji(t){if(50<pi)throw pi=0,ic=null,Error(o(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ia={};function Xm(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ke(t,e,l,a){return new Xm(t,e,l,a)}function Pr(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ml(t,e){var l=t.alternate;return l===null?(l=ke(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function yf(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Wi(t,e,l,a,i,u){var s=0;if(a=t,typeof t=="function")Pr(t)&&(s=1);else if(typeof t=="string")s=Zg(t,l,q.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case At:return t=ke(31,l,e,i),t.elementType=At,t.lanes=u,t;case W:return fa(l.children,i,u,e);case ut:s=8,i|=24;break;case I:return t=ke(12,l,e,i|2),t.elementType=I,t.lanes=u,t;case M:return t=ke(13,l,e,i),t.elementType=M,t.lanes=u,t;case et:return t=ke(19,l,e,i),t.elementType=et,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:case V:s=10;break t;case lt:s=9;break t;case at:s=11;break t;case F:s=14;break t;case xt:s=16,a=null;break t}s=29,l=Error(o(130,t===null?"null":typeof t,"")),a=null}return e=ke(s,l,e,i),e.elementType=t,e.type=a,e.lanes=u,e}function fa(t,e,l,a){return t=ke(7,t,a,e),t.lanes=l,t}function to(t,e,l){return t=ke(6,t,null,e),t.lanes=l,t}function eo(t,e,l){return e=ke(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Pa=[],tn=0,Fi=null,Ii=0,qe=[],Qe=0,da=null,gl=1,bl="";function ha(t,e){Pa[tn++]=Ii,Pa[tn++]=Fi,Fi=t,Ii=e}function xf(t,e,l){qe[Qe++]=gl,qe[Qe++]=bl,qe[Qe++]=da,da=t;var a=gl;t=bl;var i=32-Ae(a)-1;a&=~(1<<i),l+=1;var u=32-Ae(e)+i;if(30<u){var s=i-i%5;u=(a&(1<<s)-1).toString(32),a>>=s,i-=s,gl=1<<32-Ae(e)+i|l<<i|a,bl=u+t}else gl=1<<u|l<<i|a,bl=t}function lo(t){t.return!==null&&(ha(t,1),xf(t,1,0))}function ao(t){for(;t===Fi;)Fi=Pa[--tn],Pa[tn]=null,Ii=Pa[--tn],Pa[tn]=null;for(;t===da;)da=qe[--Qe],qe[Qe]=null,bl=qe[--Qe],qe[Qe]=null,gl=qe[--Qe],qe[Qe]=null}var Se=null,Kt=null,kt=!1,pa=null,nl=!1,no=Error(o(519));function ma(t){var e=Error(o(418,""));throw Vn(Ye(e,t)),no}function Af(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[be]=t,e[we]=a,l){case"dialog":Dt("cancel",e),Dt("close",e);break;case"iframe":case"object":case"embed":Dt("load",e);break;case"video":case"audio":for(l=0;l<gi.length;l++)Dt(gi[l],e);break;case"source":Dt("error",e);break;case"img":case"image":case"link":Dt("error",e),Dt("load",e);break;case"details":Dt("toggle",e);break;case"input":Dt("invalid",e),Bs(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Ui(e);break;case"select":Dt("invalid",e);break;case"textarea":Dt("invalid",e),Hs(e,a.value,a.defaultValue,a.children),Ui(e)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||Uh(e.textContent,l)?(a.popover!=null&&(Dt("beforetoggle",e),Dt("toggle",e)),a.onScroll!=null&&Dt("scroll",e),a.onScrollEnd!=null&&Dt("scrollend",e),a.onClick!=null&&(e.onclick=Mu),e=!0):e=!1,e||ma(t)}function Sf(t){for(Se=t.return;Se;)switch(Se.tag){case 5:case 13:nl=!1;return;case 27:case 3:nl=!0;return;default:Se=Se.return}}function Qn(t){if(t!==Se)return!1;if(!kt)return Sf(t),kt=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||Ac(t.type,t.memoizedProps)),l=!l),l&&Kt&&ma(t),Sf(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(l=t.data,l==="/$"){if(e===0){Kt=Ie(t.nextSibling);break t}e--}else l!=="$"&&l!=="$!"&&l!=="$?"||e++;t=t.nextSibling}Kt=null}}else e===27?(e=Kt,Wl(t.type)?(t=Tc,Tc=null,Kt=t):Kt=e):Kt=Se?Ie(t.stateNode.nextSibling):null;return!0}function Xn(){Kt=Se=null,kt=!1}function Ef(){var t=pa;return t!==null&&(ze===null?ze=t:ze.push.apply(ze,t),pa=null),t}function Vn(t){pa===null?pa=[t]:pa.push(t)}var io=j(null),ga=null,vl=null;function Bl(t,e,l){N(io,e._currentValue),e._currentValue=l}function yl(t){t._currentValue=io.current,K(io)}function uo(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function ro(t,e,l,a){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){var s=i.child;u=u.firstContext;t:for(;u!==null;){var f=u;u=i;for(var m=0;m<e.length;m++)if(f.context===e[m]){u.lanes|=l,f=u.alternate,f!==null&&(f.lanes|=l),uo(u.return,l,t),a||(s=null);break t}u=f.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(o(341));s.lanes|=l,u=s.alternate,u!==null&&(u.lanes|=l),uo(s,l,t),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function Zn(t,e,l,a){t=null;for(var i=e,u=!1;i!==null;){if(!u){if((i.flags&524288)!==0)u=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(o(387));if(s=s.memoizedProps,s!==null){var f=i.type;Oe(i.pendingProps.value,s.value)||(t!==null?t.push(f):t=[f])}}else if(i===ct.current){if(s=i.alternate,s===null)throw Error(o(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Si):t=[Si])}i=i.return}t!==null&&ro(e,t,l,a),e.flags|=262144}function Pi(t){for(t=t.firstContext;t!==null;){if(!Oe(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ba(t){ga=t,vl=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ve(t){return wf(ga,t)}function tu(t,e){return ga===null&&ba(t),wf(t,e)}function wf(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},vl===null){if(t===null)throw Error(o(308));vl=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else vl=vl.next=e;return l}var Vm=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},Zm=n.unstable_scheduleCallback,Km=n.unstable_NormalPriority,ae={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function oo(){return{controller:new Vm,data:new Map,refCount:0}}function Kn(t){t.refCount--,t.refCount===0&&Zm(Km,function(){t.controller.abort()})}var Jn=null,co=0,en=0,ln=null;function Jm(t,e){if(Jn===null){var l=Jn=[];co=0,en=dc(),ln={status:"pending",value:void 0,then:function(a){l.push(a)}}}return co++,e.then(Tf,Tf),e}function Tf(){if(--co===0&&Jn!==null){ln!==null&&(ln.status="fulfilled");var t=Jn;Jn=null,en=0,ln=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Wm(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(i){l.push(i)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var i=0;i<l.length;i++)(0,l[i])(e)},function(i){for(a.status="rejected",a.reason=i,i=0;i<l.length;i++)(0,l[i])(void 0)}),a}var Df=D.S;D.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Jm(t,e),Df!==null&&Df(t,e)};var va=j(null);function so(){var t=va.current;return t!==null?t:Yt.pooledCache}function eu(t,e){e===null?N(va,va.current):N(va,e.pool)}function Rf(){var t=so();return t===null?null:{parent:ae._currentValue,pool:t}}var Wn=Error(o(460)),zf=Error(o(474)),lu=Error(o(542)),fo={then:function(){}};function Of(t){return t=t.status,t==="fulfilled"||t==="rejected"}function au(){}function kf(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(au,au),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Mf(t),t;default:if(typeof e.status=="string")e.then(au,au);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=a}},function(a){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Mf(t),t}throw Fn=e,Wn}}var Fn=null;function Cf(){if(Fn===null)throw Error(o(459));var t=Fn;return Fn=null,t}function Mf(t){if(t===Wn||t===lu)throw Error(o(483))}var jl=!1;function ho(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function po(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Hl(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ul(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(Bt&2)!==0){var i=a.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),a.pending=e,e=Ji(t),vf(t,null,l),e}return Ki(t,a,e,l),Ji(t)}function In(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,ws(t,l)}}function mo(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var i=null,u=null;if(l=l.firstBaseUpdate,l!==null){do{var s={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};u===null?i=u=s:u=u.next=s,l=l.next}while(l!==null);u===null?i=u=e:u=u.next=e}else i=u=e;l={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var go=!1;function Pn(){if(go){var t=ln;if(t!==null)throw t}}function ti(t,e,l,a){go=!1;var i=t.updateQueue;jl=!1;var u=i.firstBaseUpdate,s=i.lastBaseUpdate,f=i.shared.pending;if(f!==null){i.shared.pending=null;var m=f,w=m.next;m.next=null,s===null?u=w:s.next=w,s=m;var H=t.alternate;H!==null&&(H=H.updateQueue,f=H.lastBaseUpdate,f!==s&&(f===null?H.firstBaseUpdate=w:f.next=w,H.lastBaseUpdate=m))}if(u!==null){var L=i.baseState;s=0,H=w=m=null,f=u;do{var z=f.lane&-536870913,O=z!==f.lane;if(O?(zt&z)===z:(a&z)===z){z!==0&&z===en&&(go=!0),H!==null&&(H=H.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});t:{var gt=t,ht=f;z=e;var $t=l;switch(ht.tag){case 1:if(gt=ht.payload,typeof gt=="function"){L=gt.call($t,L,z);break t}L=gt;break t;case 3:gt.flags=gt.flags&-65537|128;case 0:if(gt=ht.payload,z=typeof gt=="function"?gt.call($t,L,z):gt,z==null)break t;L=R({},L,z);break t;case 2:jl=!0}}z=f.callback,z!==null&&(t.flags|=64,O&&(t.flags|=8192),O=i.callbacks,O===null?i.callbacks=[z]:O.push(z))}else O={lane:z,tag:f.tag,payload:f.payload,callback:f.callback,next:null},H===null?(w=H=O,m=L):H=H.next=O,s|=z;if(f=f.next,f===null){if(f=i.shared.pending,f===null)break;O=f,f=O.next,O.next=null,i.lastBaseUpdate=O,i.shared.pending=null}}while(!0);H===null&&(m=L),i.baseState=m,i.firstBaseUpdate=w,i.lastBaseUpdate=H,u===null&&(i.shared.lanes=0),Vl|=s,t.lanes=s,t.memoizedState=L}}function _f(t,e){if(typeof t!="function")throw Error(o(191,t));t.call(e)}function Nf(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)_f(l[t],e)}var an=j(null),nu=j(0);function Bf(t,e){t=Dl,N(nu,t),N(an,e),Dl=t|e.baseLanes}function bo(){N(nu,Dl),N(an,an.current)}function vo(){Dl=nu.current,K(an),K(nu)}var $l=0,Et=null,Ht=null,Pt=null,iu=!1,nn=!1,ya=!1,uu=0,ei=0,un=null,Fm=0;function Ft(){throw Error(o(321))}function yo(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!Oe(t[l],e[l]))return!1;return!0}function xo(t,e,l,a,i,u){return $l=u,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,D.H=t===null||t.memoizedState===null?vd:yd,ya=!1,u=l(a,i),ya=!1,nn&&(u=Hf(e,l,a,i)),jf(t),u}function jf(t){D.H=du;var e=Ht!==null&&Ht.next!==null;if($l=0,Pt=Ht=Et=null,iu=!1,ei=0,un=null,e)throw Error(o(300));t===null||re||(t=t.dependencies,t!==null&&Pi(t)&&(re=!0))}function Hf(t,e,l,a){Et=t;var i=0;do{if(nn&&(un=null),ei=0,nn=!1,25<=i)throw Error(o(301));if(i+=1,Pt=Ht=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}D.H=ng,u=e(l,a)}while(nn);return u}function Im(){var t=D.H,e=t.useState()[0];return e=typeof e.then=="function"?li(e):e,t=t.useState()[0],(Ht!==null?Ht.memoizedState:null)!==t&&(Et.flags|=1024),e}function Ao(){var t=uu!==0;return uu=0,t}function So(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function Eo(t){if(iu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}iu=!1}$l=0,Pt=Ht=Et=null,nn=!1,ei=uu=0,un=null}function De(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?Et.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function te(){if(Ht===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var e=Pt===null?Et.memoizedState:Pt.next;if(e!==null)Pt=e,Ht=t;else{if(t===null)throw Et.alternate===null?Error(o(467)):Error(o(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},Pt===null?Et.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function wo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function li(t){var e=ei;return ei+=1,un===null&&(un=[]),t=kf(un,t,e),e=Et,(Pt===null?e.memoizedState:Pt.next)===null&&(e=e.alternate,D.H=e===null||e.memoizedState===null?vd:yd),t}function ru(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return li(t);if(t.$$typeof===V)return ve(t)}throw Error(o(438,String(t)))}function To(t){var e=null,l=Et.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=Et.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=wo(),Et.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=Xt;return e.index++,l}function xl(t,e){return typeof e=="function"?e(t):e}function ou(t){var e=te();return Do(e,Ht,t)}function Do(t,e,l){var a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=l;var i=t.baseQueue,u=a.pending;if(u!==null){if(i!==null){var s=i.next;i.next=u.next,u.next=s}e.baseQueue=i=u,a.pending=null}if(u=t.baseState,i===null)t.memoizedState=u;else{e=i.next;var f=s=null,m=null,w=e,H=!1;do{var L=w.lane&-536870913;if(L!==w.lane?(zt&L)===L:($l&L)===L){var z=w.revertLane;if(z===0)m!==null&&(m=m.next={lane:0,revertLane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),L===en&&(H=!0);else if(($l&z)===z){w=w.next,z===en&&(H=!0);continue}else L={lane:0,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},m===null?(f=m=L,s=u):m=m.next=L,Et.lanes|=z,Vl|=z;L=w.action,ya&&l(u,L),u=w.hasEagerState?w.eagerState:l(u,L)}else z={lane:L,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},m===null?(f=m=z,s=u):m=m.next=z,Et.lanes|=L,Vl|=L;w=w.next}while(w!==null&&w!==e);if(m===null?s=u:m.next=f,!Oe(u,t.memoizedState)&&(re=!0,H&&(l=ln,l!==null)))throw l;t.memoizedState=u,t.baseState=s,t.baseQueue=m,a.lastRenderedState=u}return i===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Ro(t){var e=te(),l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=t;var a=l.dispatch,i=l.pending,u=e.memoizedState;if(i!==null){l.pending=null;var s=i=i.next;do u=t(u,s.action),s=s.next;while(s!==i);Oe(u,e.memoizedState)||(re=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),l.lastRenderedState=u}return[u,a]}function Uf(t,e,l){var a=Et,i=te(),u=kt;if(u){if(l===void 0)throw Error(o(407));l=l()}else l=e();var s=!Oe((Ht||i).memoizedState,l);s&&(i.memoizedState=l,re=!0),i=i.queue;var f=Yf.bind(null,a,i,t);if(ai(2048,8,f,[t]),i.getSnapshot!==e||s||Pt!==null&&Pt.memoizedState.tag&1){if(a.flags|=2048,rn(9,cu(),Lf.bind(null,a,i,l,e),null),Yt===null)throw Error(o(349));u||($l&124)!==0||$f(a,e,l)}return l}function $f(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=Et.updateQueue,e===null?(e=wo(),Et.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function Lf(t,e,l,a){e.value=l,e.getSnapshot=a,Gf(e)&&qf(t)}function Yf(t,e,l){return l(function(){Gf(e)&&qf(t)})}function Gf(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!Oe(t,l)}catch{return!0}}function qf(t){var e=Fa(t,2);e!==null&&Be(e,t,2)}function zo(t){var e=De();if(typeof t=="function"){var l=t;if(t=l(),ya){al(!0);try{l()}finally{al(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xl,lastRenderedState:t},e}function Qf(t,e,l,a){return t.baseState=l,Do(t,Ht,typeof a=="function"?a:xl)}function Pm(t,e,l,a,i){if(fu(t))throw Error(o(485));if(t=e.action,t!==null){var u={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){u.listeners.push(s)}};D.T!==null?l(!0):u.isTransition=!1,a(u),l=e.pending,l===null?(u.next=e.pending=u,Xf(e,u)):(u.next=l.next,e.pending=l.next=u)}}function Xf(t,e){var l=e.action,a=e.payload,i=t.state;if(e.isTransition){var u=D.T,s={};D.T=s;try{var f=l(i,a),m=D.S;m!==null&&m(s,f),Vf(t,e,f)}catch(w){Oo(t,e,w)}finally{D.T=u}}else try{u=l(i,a),Vf(t,e,u)}catch(w){Oo(t,e,w)}}function Vf(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Zf(t,e,a)},function(a){return Oo(t,e,a)}):Zf(t,e,l)}function Zf(t,e,l){e.status="fulfilled",e.value=l,Kf(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Xf(t,l)))}function Oo(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,Kf(e),e=e.next;while(e!==a)}t.action=null}function Kf(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Jf(t,e){return e}function Wf(t,e){if(kt){var l=Yt.formState;if(l!==null){t:{var a=Et;if(kt){if(Kt){e:{for(var i=Kt,u=nl;i.nodeType!==8;){if(!u){i=null;break e}if(i=Ie(i.nextSibling),i===null){i=null;break e}}u=i.data,i=u==="F!"||u==="F"?i:null}if(i){Kt=Ie(i.nextSibling),a=i.data==="F!";break t}}ma(a)}a=!1}a&&(e=l[0])}}return l=De(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jf,lastRenderedState:e},l.queue=a,l=md.bind(null,Et,a),a.dispatch=l,a=zo(!1),u=No.bind(null,Et,!1,a.queue),a=De(),i={state:e,dispatch:null,action:t,pending:null},a.queue=i,l=Pm.bind(null,Et,i,u,l),i.dispatch=l,a.memoizedState=t,[e,l,!1]}function Ff(t){var e=te();return If(e,Ht,t)}function If(t,e,l){if(e=Do(t,e,Jf)[0],t=ou(xl)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=li(e)}catch(s){throw s===Wn?lu:s}else a=e;e=te();var i=e.queue,u=i.dispatch;return l!==e.memoizedState&&(Et.flags|=2048,rn(9,cu(),tg.bind(null,i,l),null)),[a,u,t]}function tg(t,e){t.action=e}function Pf(t){var e=te(),l=Ht;if(l!==null)return If(e,l,t);te(),e=e.memoizedState,l=te();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function rn(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=Et.updateQueue,e===null&&(e=wo(),Et.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function cu(){return{destroy:void 0,resource:void 0}}function td(){return te().memoizedState}function su(t,e,l,a){var i=De();a=a===void 0?null:a,Et.flags|=t,i.memoizedState=rn(1|e,cu(),l,a)}function ai(t,e,l,a){var i=te();a=a===void 0?null:a;var u=i.memoizedState.inst;Ht!==null&&a!==null&&yo(a,Ht.memoizedState.deps)?i.memoizedState=rn(e,u,l,a):(Et.flags|=t,i.memoizedState=rn(1|e,u,l,a))}function ed(t,e){su(8390656,8,t,e)}function ld(t,e){ai(2048,8,t,e)}function ad(t,e){return ai(4,2,t,e)}function nd(t,e){return ai(4,4,t,e)}function id(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ud(t,e,l){l=l!=null?l.concat([t]):null,ai(4,4,id.bind(null,e,t),l)}function ko(){}function rd(t,e){var l=te();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&yo(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function od(t,e){var l=te();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&yo(e,a[1]))return a[0];if(a=t(),ya){al(!0);try{t()}finally{al(!1)}}return l.memoizedState=[a,e],a}function Co(t,e,l){return l===void 0||($l&1073741824)!==0?t.memoizedState=e:(t.memoizedState=l,t=fh(),Et.lanes|=t,Vl|=t,l)}function cd(t,e,l,a){return Oe(l,e)?l:an.current!==null?(t=Co(t,l,a),Oe(t,e)||(re=!0),t):($l&42)===0?(re=!0,t.memoizedState=l):(t=fh(),Et.lanes|=t,Vl|=t,e)}function sd(t,e,l,a,i){var u=B.p;B.p=u!==0&&8>u?u:8;var s=D.T,f={};D.T=f,No(t,!1,e,l);try{var m=i(),w=D.S;if(w!==null&&w(f,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var H=Wm(m,a);ni(t,e,H,Ne(t))}else ni(t,e,a,Ne(t))}catch(L){ni(t,e,{then:function(){},status:"rejected",reason:L},Ne())}finally{B.p=u,D.T=s}}function eg(){}function Mo(t,e,l,a){if(t.tag!==5)throw Error(o(476));var i=fd(t).queue;sd(t,i,e,Q,l===null?eg:function(){return dd(t),l(a)})}function fd(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xl,lastRenderedState:Q},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xl,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function dd(t){var e=fd(t).next.queue;ni(t,e,{},Ne())}function _o(){return ve(Si)}function hd(){return te().memoizedState}function pd(){return te().memoizedState}function lg(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=Ne();t=Hl(l);var a=Ul(e,t,l);a!==null&&(Be(a,e,l),In(a,e,l)),e={cache:oo()},t.payload=e;return}e=e.return}}function ag(t,e,l){var a=Ne();l={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},fu(t)?gd(e,l):(l=Ir(t,e,l,a),l!==null&&(Be(l,t,a),bd(l,e,a)))}function md(t,e,l){var a=Ne();ni(t,e,l,a)}function ni(t,e,l,a){var i={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(fu(t))gd(e,i);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var s=e.lastRenderedState,f=u(s,l);if(i.hasEagerState=!0,i.eagerState=f,Oe(f,s))return Ki(t,e,i,0),Yt===null&&Zi(),!1}catch{}finally{}if(l=Ir(t,e,i,a),l!==null)return Be(l,t,a),bd(l,e,a),!0}return!1}function No(t,e,l,a){if(a={lane:2,revertLane:dc(),action:a,hasEagerState:!1,eagerState:null,next:null},fu(t)){if(e)throw Error(o(479))}else e=Ir(t,l,a,2),e!==null&&Be(e,t,2)}function fu(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function gd(t,e){nn=iu=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function bd(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,ws(t,l)}}var du={readContext:ve,use:ru,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useLayoutEffect:Ft,useInsertionEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useSyncExternalStore:Ft,useId:Ft,useHostTransitionStatus:Ft,useFormState:Ft,useActionState:Ft,useOptimistic:Ft,useMemoCache:Ft,useCacheRefresh:Ft},vd={readContext:ve,use:ru,useCallback:function(t,e){return De().memoizedState=[t,e===void 0?null:e],t},useContext:ve,useEffect:ed,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,su(4194308,4,id.bind(null,e,t),l)},useLayoutEffect:function(t,e){return su(4194308,4,t,e)},useInsertionEffect:function(t,e){su(4,2,t,e)},useMemo:function(t,e){var l=De();e=e===void 0?null:e;var a=t();if(ya){al(!0);try{t()}finally{al(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=De();if(l!==void 0){var i=l(e);if(ya){al(!0);try{l(e)}finally{al(!1)}}}else i=e;return a.memoizedState=a.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=ag.bind(null,Et,t),[a.memoizedState,t]},useRef:function(t){var e=De();return t={current:t},e.memoizedState=t},useState:function(t){t=zo(t);var e=t.queue,l=md.bind(null,Et,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:ko,useDeferredValue:function(t,e){var l=De();return Co(l,t,e)},useTransition:function(){var t=zo(!1);return t=sd.bind(null,Et,t.queue,!0,!1),De().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=Et,i=De();if(kt){if(l===void 0)throw Error(o(407));l=l()}else{if(l=e(),Yt===null)throw Error(o(349));(zt&124)!==0||$f(a,e,l)}i.memoizedState=l;var u={value:l,getSnapshot:e};return i.queue=u,ed(Yf.bind(null,a,u,t),[t]),a.flags|=2048,rn(9,cu(),Lf.bind(null,a,u,l,e),null),l},useId:function(){var t=De(),e=Yt.identifierPrefix;if(kt){var l=bl,a=gl;l=(a&~(1<<32-Ae(a)-1)).toString(32)+l,e="«"+e+"R"+l,l=uu++,0<l&&(e+="H"+l.toString(32)),e+="»"}else l=Fm++,e="«"+e+"r"+l.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:_o,useFormState:Wf,useActionState:Wf,useOptimistic:function(t){var e=De();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=No.bind(null,Et,!0,l),l.dispatch=e,[t,e]},useMemoCache:To,useCacheRefresh:function(){return De().memoizedState=lg.bind(null,Et)}},yd={readContext:ve,use:ru,useCallback:rd,useContext:ve,useEffect:ld,useImperativeHandle:ud,useInsertionEffect:ad,useLayoutEffect:nd,useMemo:od,useReducer:ou,useRef:td,useState:function(){return ou(xl)},useDebugValue:ko,useDeferredValue:function(t,e){var l=te();return cd(l,Ht.memoizedState,t,e)},useTransition:function(){var t=ou(xl)[0],e=te().memoizedState;return[typeof t=="boolean"?t:li(t),e]},useSyncExternalStore:Uf,useId:hd,useHostTransitionStatus:_o,useFormState:Ff,useActionState:Ff,useOptimistic:function(t,e){var l=te();return Qf(l,Ht,t,e)},useMemoCache:To,useCacheRefresh:pd},ng={readContext:ve,use:ru,useCallback:rd,useContext:ve,useEffect:ld,useImperativeHandle:ud,useInsertionEffect:ad,useLayoutEffect:nd,useMemo:od,useReducer:Ro,useRef:td,useState:function(){return Ro(xl)},useDebugValue:ko,useDeferredValue:function(t,e){var l=te();return Ht===null?Co(l,t,e):cd(l,Ht.memoizedState,t,e)},useTransition:function(){var t=Ro(xl)[0],e=te().memoizedState;return[typeof t=="boolean"?t:li(t),e]},useSyncExternalStore:Uf,useId:hd,useHostTransitionStatus:_o,useFormState:Pf,useActionState:Pf,useOptimistic:function(t,e){var l=te();return Ht!==null?Qf(l,Ht,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:To,useCacheRefresh:pd},on=null,ii=0;function hu(t){var e=ii;return ii+=1,on===null&&(on=[]),kf(on,t,e)}function ui(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function pu(t,e){throw e.$$typeof===C?Error(o(525)):(t=Object.prototype.toString.call(e),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function xd(t){var e=t._init;return e(t._payload)}function Ad(t){function e(S,x){if(t){var E=S.deletions;E===null?(S.deletions=[x],S.flags|=16):E.push(x)}}function l(S,x){if(!t)return null;for(;x!==null;)e(S,x),x=x.sibling;return null}function a(S){for(var x=new Map;S!==null;)S.key!==null?x.set(S.key,S):x.set(S.index,S),S=S.sibling;return x}function i(S,x){return S=ml(S,x),S.index=0,S.sibling=null,S}function u(S,x,E){return S.index=E,t?(E=S.alternate,E!==null?(E=E.index,E<x?(S.flags|=67108866,x):E):(S.flags|=67108866,x)):(S.flags|=1048576,x)}function s(S){return t&&S.alternate===null&&(S.flags|=67108866),S}function f(S,x,E,$){return x===null||x.tag!==6?(x=to(E,S.mode,$),x.return=S,x):(x=i(x,E),x.return=S,x)}function m(S,x,E,$){var ot=E.type;return ot===W?H(S,x,E.props.children,$,E.key):x!==null&&(x.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===xt&&xd(ot)===x.type)?(x=i(x,E.props),ui(x,E),x.return=S,x):(x=Wi(E.type,E.key,E.props,null,S.mode,$),ui(x,E),x.return=S,x)}function w(S,x,E,$){return x===null||x.tag!==4||x.stateNode.containerInfo!==E.containerInfo||x.stateNode.implementation!==E.implementation?(x=eo(E,S.mode,$),x.return=S,x):(x=i(x,E.children||[]),x.return=S,x)}function H(S,x,E,$,ot){return x===null||x.tag!==7?(x=fa(E,S.mode,$,ot),x.return=S,x):(x=i(x,E),x.return=S,x)}function L(S,x,E){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=to(""+x,S.mode,E),x.return=S,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Y:return E=Wi(x.type,x.key,x.props,null,S.mode,E),ui(E,x),E.return=S,E;case tt:return x=eo(x,S.mode,E),x.return=S,x;case xt:var $=x._init;return x=$(x._payload),L(S,x,E)}if(Z(x)||bt(x))return x=fa(x,S.mode,E,null),x.return=S,x;if(typeof x.then=="function")return L(S,hu(x),E);if(x.$$typeof===V)return L(S,tu(S,x),E);pu(S,x)}return null}function z(S,x,E,$){var ot=x!==null?x.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return ot!==null?null:f(S,x,""+E,$);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Y:return E.key===ot?m(S,x,E,$):null;case tt:return E.key===ot?w(S,x,E,$):null;case xt:return ot=E._init,E=ot(E._payload),z(S,x,E,$)}if(Z(E)||bt(E))return ot!==null?null:H(S,x,E,$,null);if(typeof E.then=="function")return z(S,x,hu(E),$);if(E.$$typeof===V)return z(S,x,tu(S,E),$);pu(S,E)}return null}function O(S,x,E,$,ot){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return S=S.get(E)||null,f(x,S,""+$,ot);if(typeof $=="object"&&$!==null){switch($.$$typeof){case Y:return S=S.get($.key===null?E:$.key)||null,m(x,S,$,ot);case tt:return S=S.get($.key===null?E:$.key)||null,w(x,S,$,ot);case xt:var wt=$._init;return $=wt($._payload),O(S,x,E,$,ot)}if(Z($)||bt($))return S=S.get(E)||null,H(x,S,$,ot,null);if(typeof $.then=="function")return O(S,x,E,hu($),ot);if($.$$typeof===V)return O(S,x,E,tu(x,$),ot);pu(x,$)}return null}function gt(S,x,E,$){for(var ot=null,wt=null,st=x,pt=x=0,ce=null;st!==null&&pt<E.length;pt++){st.index>pt?(ce=st,st=null):ce=st.sibling;var Ot=z(S,st,E[pt],$);if(Ot===null){st===null&&(st=ce);break}t&&st&&Ot.alternate===null&&e(S,st),x=u(Ot,x,pt),wt===null?ot=Ot:wt.sibling=Ot,wt=Ot,st=ce}if(pt===E.length)return l(S,st),kt&&ha(S,pt),ot;if(st===null){for(;pt<E.length;pt++)st=L(S,E[pt],$),st!==null&&(x=u(st,x,pt),wt===null?ot=st:wt.sibling=st,wt=st);return kt&&ha(S,pt),ot}for(st=a(st);pt<E.length;pt++)ce=O(st,S,pt,E[pt],$),ce!==null&&(t&&ce.alternate!==null&&st.delete(ce.key===null?pt:ce.key),x=u(ce,x,pt),wt===null?ot=ce:wt.sibling=ce,wt=ce);return t&&st.forEach(function(ea){return e(S,ea)}),kt&&ha(S,pt),ot}function ht(S,x,E,$){if(E==null)throw Error(o(151));for(var ot=null,wt=null,st=x,pt=x=0,ce=null,Ot=E.next();st!==null&&!Ot.done;pt++,Ot=E.next()){st.index>pt?(ce=st,st=null):ce=st.sibling;var ea=z(S,st,Ot.value,$);if(ea===null){st===null&&(st=ce);break}t&&st&&ea.alternate===null&&e(S,st),x=u(ea,x,pt),wt===null?ot=ea:wt.sibling=ea,wt=ea,st=ce}if(Ot.done)return l(S,st),kt&&ha(S,pt),ot;if(st===null){for(;!Ot.done;pt++,Ot=E.next())Ot=L(S,Ot.value,$),Ot!==null&&(x=u(Ot,x,pt),wt===null?ot=Ot:wt.sibling=Ot,wt=Ot);return kt&&ha(S,pt),ot}for(st=a(st);!Ot.done;pt++,Ot=E.next())Ot=O(st,S,pt,Ot.value,$),Ot!==null&&(t&&Ot.alternate!==null&&st.delete(Ot.key===null?pt:Ot.key),x=u(Ot,x,pt),wt===null?ot=Ot:wt.sibling=Ot,wt=Ot);return t&&st.forEach(function(ib){return e(S,ib)}),kt&&ha(S,pt),ot}function $t(S,x,E,$){if(typeof E=="object"&&E!==null&&E.type===W&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Y:t:{for(var ot=E.key;x!==null;){if(x.key===ot){if(ot=E.type,ot===W){if(x.tag===7){l(S,x.sibling),$=i(x,E.props.children),$.return=S,S=$;break t}}else if(x.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===xt&&xd(ot)===x.type){l(S,x.sibling),$=i(x,E.props),ui($,E),$.return=S,S=$;break t}l(S,x);break}else e(S,x);x=x.sibling}E.type===W?($=fa(E.props.children,S.mode,$,E.key),$.return=S,S=$):($=Wi(E.type,E.key,E.props,null,S.mode,$),ui($,E),$.return=S,S=$)}return s(S);case tt:t:{for(ot=E.key;x!==null;){if(x.key===ot)if(x.tag===4&&x.stateNode.containerInfo===E.containerInfo&&x.stateNode.implementation===E.implementation){l(S,x.sibling),$=i(x,E.children||[]),$.return=S,S=$;break t}else{l(S,x);break}else e(S,x);x=x.sibling}$=eo(E,S.mode,$),$.return=S,S=$}return s(S);case xt:return ot=E._init,E=ot(E._payload),$t(S,x,E,$)}if(Z(E))return gt(S,x,E,$);if(bt(E)){if(ot=bt(E),typeof ot!="function")throw Error(o(150));return E=ot.call(E),ht(S,x,E,$)}if(typeof E.then=="function")return $t(S,x,hu(E),$);if(E.$$typeof===V)return $t(S,x,tu(S,E),$);pu(S,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,x!==null&&x.tag===6?(l(S,x.sibling),$=i(x,E),$.return=S,S=$):(l(S,x),$=to(E,S.mode,$),$.return=S,S=$),s(S)):l(S,x)}return function(S,x,E,$){try{ii=0;var ot=$t(S,x,E,$);return on=null,ot}catch(st){if(st===Wn||st===lu)throw st;var wt=ke(29,st,null,S.mode);return wt.lanes=$,wt.return=S,wt}finally{}}}var cn=Ad(!0),Sd=Ad(!1),Xe=j(null),il=null;function Ll(t){var e=t.alternate;N(ne,ne.current&1),N(Xe,t),il===null&&(e===null||an.current!==null||e.memoizedState!==null)&&(il=t)}function Ed(t){if(t.tag===22){if(N(ne,ne.current),N(Xe,t),il===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(il=t)}}else Yl()}function Yl(){N(ne,ne.current),N(Xe,Xe.current)}function Al(t){K(Xe),il===t&&(il=null),K(ne)}var ne=j(0);function mu(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||wc(l)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Bo(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:R({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var jo={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=Ne(),i=Hl(a);i.payload=e,l!=null&&(i.callback=l),e=Ul(t,i,a),e!==null&&(Be(e,t,a),In(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=Ne(),i=Hl(a);i.tag=1,i.payload=e,l!=null&&(i.callback=l),e=Ul(t,i,a),e!==null&&(Be(e,t,a),In(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=Ne(),a=Hl(l);a.tag=2,e!=null&&(a.callback=e),e=Ul(t,a,l),e!==null&&(Be(e,t,l),In(e,t,l))}};function wd(t,e,l,a,i,u,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,u,s):e.prototype&&e.prototype.isPureReactComponent?!Gn(l,a)||!Gn(i,u):!0}function Td(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&jo.enqueueReplaceState(e,e.state,null)}function xa(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=R({},l));for(var i in t)l[i]===void 0&&(l[i]=t[i])}return l}var gu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Dd(t){gu(t)}function Rd(t){console.error(t)}function zd(t){gu(t)}function bu(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Od(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Ho(t,e,l){return l=Hl(l),l.tag=3,l.payload={element:null},l.callback=function(){bu(t,e)},l}function kd(t){return t=Hl(t),t.tag=3,t}function Cd(t,e,l,a){var i=l.type.getDerivedStateFromError;if(typeof i=="function"){var u=a.value;t.payload=function(){return i(u)},t.callback=function(){Od(e,l,a)}}var s=l.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Od(e,l,a),typeof i!="function"&&(Zl===null?Zl=new Set([this]):Zl.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})})}function ig(t,e,l,a,i){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&Zn(e,l,i,!0),l=Xe.current,l!==null){switch(l.tag){case 13:return il===null?rc():l.alternate===null&&Jt===0&&(Jt=3),l.flags&=-257,l.flags|=65536,l.lanes=i,a===fo?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),cc(t,a,i)),!1;case 22:return l.flags|=65536,a===fo?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),cc(t,a,i)),!1}throw Error(o(435,l.tag))}return cc(t,a,i),rc(),!1}if(kt)return e=Xe.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,a!==no&&(t=Error(o(422),{cause:a}),Vn(Ye(t,l)))):(a!==no&&(e=Error(o(423),{cause:a}),Vn(Ye(e,l))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,a=Ye(a,l),i=Ho(t.stateNode,a,i),mo(t,i),Jt!==4&&(Jt=2)),!1;var u=Error(o(520),{cause:a});if(u=Ye(u,l),hi===null?hi=[u]:hi.push(u),Jt!==4&&(Jt=2),e===null)return!0;a=Ye(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=i&-i,l.lanes|=t,t=Ho(l.stateNode,a,t),mo(l,t),!1;case 1:if(e=l.type,u=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Zl===null||!Zl.has(u))))return l.flags|=65536,i&=-i,l.lanes|=i,i=kd(i),Cd(i,t,l,a),mo(l,i),!1}l=l.return}while(l!==null);return!1}var Md=Error(o(461)),re=!1;function de(t,e,l,a){e.child=t===null?Sd(e,null,l,a):cn(e,t.child,l,a)}function _d(t,e,l,a,i){l=l.render;var u=e.ref;if("ref"in a){var s={};for(var f in a)f!=="ref"&&(s[f]=a[f])}else s=a;return ba(e),a=xo(t,e,l,s,u,i),f=Ao(),t!==null&&!re?(So(t,e,i),Sl(t,e,i)):(kt&&f&&lo(e),e.flags|=1,de(t,e,a,i),e.child)}function Nd(t,e,l,a,i){if(t===null){var u=l.type;return typeof u=="function"&&!Pr(u)&&u.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=u,Bd(t,e,u,a,i)):(t=Wi(l.type,null,a,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!Xo(t,i)){var s=u.memoizedProps;if(l=l.compare,l=l!==null?l:Gn,l(s,a)&&t.ref===e.ref)return Sl(t,e,i)}return e.flags|=1,t=ml(u,a),t.ref=e.ref,t.return=e,e.child=t}function Bd(t,e,l,a,i){if(t!==null){var u=t.memoizedProps;if(Gn(u,a)&&t.ref===e.ref)if(re=!1,e.pendingProps=a=u,Xo(t,i))(t.flags&131072)!==0&&(re=!0);else return e.lanes=t.lanes,Sl(t,e,i)}return Uo(t,e,l,a,i)}function jd(t,e,l){var a=e.pendingProps,i=a.children,u=t!==null?t.memoizedState:null;if(a.mode==="hidden"){if((e.flags&128)!==0){if(a=u!==null?u.baseLanes|l:l,t!==null){for(i=e.child=t.child,u=0;i!==null;)u=u|i.lanes|i.childLanes,i=i.sibling;e.childLanes=u&~a}else e.childLanes=0,e.child=null;return Hd(t,e,a,l)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&eu(e,u!==null?u.cachePool:null),u!==null?Bf(e,u):bo(),Ed(e);else return e.lanes=e.childLanes=536870912,Hd(t,e,u!==null?u.baseLanes|l:l,l)}else u!==null?(eu(e,u.cachePool),Bf(e,u),Yl(),e.memoizedState=null):(t!==null&&eu(e,null),bo(),Yl());return de(t,e,i,l),e.child}function Hd(t,e,l,a){var i=so();return i=i===null?null:{parent:ae._currentValue,pool:i},e.memoizedState={baseLanes:l,cachePool:i},t!==null&&eu(e,null),bo(),Ed(e),t!==null&&Zn(t,e,a,!0),null}function vu(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(o(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function Uo(t,e,l,a,i){return ba(e),l=xo(t,e,l,a,void 0,i),a=Ao(),t!==null&&!re?(So(t,e,i),Sl(t,e,i)):(kt&&a&&lo(e),e.flags|=1,de(t,e,l,i),e.child)}function Ud(t,e,l,a,i,u){return ba(e),e.updateQueue=null,l=Hf(e,a,l,i),jf(t),a=Ao(),t!==null&&!re?(So(t,e,u),Sl(t,e,u)):(kt&&a&&lo(e),e.flags|=1,de(t,e,l,u),e.child)}function $d(t,e,l,a,i){if(ba(e),e.stateNode===null){var u=Ia,s=l.contextType;typeof s=="object"&&s!==null&&(u=ve(s)),u=new l(a,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=jo,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=a,u.state=e.memoizedState,u.refs={},ho(e),s=l.contextType,u.context=typeof s=="object"&&s!==null?ve(s):Ia,u.state=e.memoizedState,s=l.getDerivedStateFromProps,typeof s=="function"&&(Bo(e,l,s,a),u.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(s=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),s!==u.state&&jo.enqueueReplaceState(u,u.state,null),ti(e,a,u,i),Pn(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){u=e.stateNode;var f=e.memoizedProps,m=xa(l,f);u.props=m;var w=u.context,H=l.contextType;s=Ia,typeof H=="object"&&H!==null&&(s=ve(H));var L=l.getDerivedStateFromProps;H=typeof L=="function"||typeof u.getSnapshotBeforeUpdate=="function",f=e.pendingProps!==f,H||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f||w!==s)&&Td(e,u,a,s),jl=!1;var z=e.memoizedState;u.state=z,ti(e,a,u,i),Pn(),w=e.memoizedState,f||z!==w||jl?(typeof L=="function"&&(Bo(e,l,L,a),w=e.memoizedState),(m=jl||wd(e,l,m,a,z,w,s))?(H||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=w),u.props=a,u.state=w,u.context=s,a=m):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{u=e.stateNode,po(t,e),s=e.memoizedProps,H=xa(l,s),u.props=H,L=e.pendingProps,z=u.context,w=l.contextType,m=Ia,typeof w=="object"&&w!==null&&(m=ve(w)),f=l.getDerivedStateFromProps,(w=typeof f=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(s!==L||z!==m)&&Td(e,u,a,m),jl=!1,z=e.memoizedState,u.state=z,ti(e,a,u,i),Pn();var O=e.memoizedState;s!==L||z!==O||jl||t!==null&&t.dependencies!==null&&Pi(t.dependencies)?(typeof f=="function"&&(Bo(e,l,f,a),O=e.memoizedState),(H=jl||wd(e,l,H,a,z,O,m)||t!==null&&t.dependencies!==null&&Pi(t.dependencies))?(w||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,O,m),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,O,m)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||s===t.memoizedProps&&z===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&z===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=O),u.props=a,u.state=O,u.context=m,a=H):(typeof u.componentDidUpdate!="function"||s===t.memoizedProps&&z===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&z===t.memoizedState||(e.flags|=1024),a=!1)}return u=a,vu(t,e),a=(e.flags&128)!==0,u||a?(u=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&a?(e.child=cn(e,t.child,null,i),e.child=cn(e,null,l,i)):de(t,e,l,i),e.memoizedState=u.state,t=e.child):t=Sl(t,e,i),t}function Ld(t,e,l,a){return Xn(),e.flags|=256,de(t,e,l,a),e.child}var $o={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lo(t){return{baseLanes:t,cachePool:Rf()}}function Yo(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=Ve),t}function Yd(t,e,l){var a=e.pendingProps,i=!1,u=(e.flags&128)!==0,s;if((s=u)||(s=t!==null&&t.memoizedState===null?!1:(ne.current&2)!==0),s&&(i=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(kt){if(i?Ll(e):Yl(),kt){var f=Kt,m;if(m=f){t:{for(m=f,f=nl;m.nodeType!==8;){if(!f){f=null;break t}if(m=Ie(m.nextSibling),m===null){f=null;break t}}f=m}f!==null?(e.memoizedState={dehydrated:f,treeContext:da!==null?{id:gl,overflow:bl}:null,retryLane:536870912,hydrationErrors:null},m=ke(18,null,null,0),m.stateNode=f,m.return=e,e.child=m,Se=e,Kt=null,m=!0):m=!1}m||ma(e)}if(f=e.memoizedState,f!==null&&(f=f.dehydrated,f!==null))return wc(f)?e.lanes=32:e.lanes=536870912,null;Al(e)}return f=a.children,a=a.fallback,i?(Yl(),i=e.mode,f=yu({mode:"hidden",children:f},i),a=fa(a,i,l,null),f.return=e,a.return=e,f.sibling=a,e.child=f,i=e.child,i.memoizedState=Lo(l),i.childLanes=Yo(t,s,l),e.memoizedState=$o,a):(Ll(e),Go(e,f))}if(m=t.memoizedState,m!==null&&(f=m.dehydrated,f!==null)){if(u)e.flags&256?(Ll(e),e.flags&=-257,e=qo(t,e,l)):e.memoizedState!==null?(Yl(),e.child=t.child,e.flags|=128,e=null):(Yl(),i=a.fallback,f=e.mode,a=yu({mode:"visible",children:a.children},f),i=fa(i,f,l,null),i.flags|=2,a.return=e,i.return=e,a.sibling=i,e.child=a,cn(e,t.child,null,l),a=e.child,a.memoizedState=Lo(l),a.childLanes=Yo(t,s,l),e.memoizedState=$o,e=i);else if(Ll(e),wc(f)){if(s=f.nextSibling&&f.nextSibling.dataset,s)var w=s.dgst;s=w,a=Error(o(419)),a.stack="",a.digest=s,Vn({value:a,source:null,stack:null}),e=qo(t,e,l)}else if(re||Zn(t,e,l,!1),s=(l&t.childLanes)!==0,re||s){if(s=Yt,s!==null&&(a=l&-l,a=(a&42)!==0?1:wr(a),a=(a&(s.suspendedLanes|l))!==0?0:a,a!==0&&a!==m.retryLane))throw m.retryLane=a,Fa(t,a),Be(s,t,a),Md;f.data==="$?"||rc(),e=qo(t,e,l)}else f.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=m.treeContext,Kt=Ie(f.nextSibling),Se=e,kt=!0,pa=null,nl=!1,t!==null&&(qe[Qe++]=gl,qe[Qe++]=bl,qe[Qe++]=da,gl=t.id,bl=t.overflow,da=e),e=Go(e,a.children),e.flags|=4096);return e}return i?(Yl(),i=a.fallback,f=e.mode,m=t.child,w=m.sibling,a=ml(m,{mode:"hidden",children:a.children}),a.subtreeFlags=m.subtreeFlags&65011712,w!==null?i=ml(w,i):(i=fa(i,f,l,null),i.flags|=2),i.return=e,a.return=e,a.sibling=i,e.child=a,a=i,i=e.child,f=t.child.memoizedState,f===null?f=Lo(l):(m=f.cachePool,m!==null?(w=ae._currentValue,m=m.parent!==w?{parent:w,pool:w}:m):m=Rf(),f={baseLanes:f.baseLanes|l,cachePool:m}),i.memoizedState=f,i.childLanes=Yo(t,s,l),e.memoizedState=$o,a):(Ll(e),l=t.child,t=l.sibling,l=ml(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=l,e.memoizedState=null,l)}function Go(t,e){return e=yu({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function yu(t,e){return t=ke(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function qo(t,e,l){return cn(e,t.child,null,l),t=Go(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Gd(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),uo(t.return,e,l)}function Qo(t,e,l,a,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:i}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=i)}function qd(t,e,l){var a=e.pendingProps,i=a.revealOrder,u=a.tail;if(de(t,e,a.children,l),a=ne.current,(a&2)!==0)a=a&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gd(t,l,e);else if(t.tag===19)Gd(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(N(ne,a),i){case"forwards":for(l=e.child,i=null;l!==null;)t=l.alternate,t!==null&&mu(t)===null&&(i=l),l=l.sibling;l=i,l===null?(i=e.child,e.child=null):(i=l.sibling,l.sibling=null),Qo(e,!1,i,l,u);break;case"backwards":for(l=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&mu(t)===null){e.child=i;break}t=i.sibling,i.sibling=l,l=i,i=t}Qo(e,!0,l,null,u);break;case"together":Qo(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Sl(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),Vl|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(Zn(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(o(153));if(e.child!==null){for(t=e.child,l=ml(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=ml(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function Xo(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Pi(t)))}function ug(t,e,l){switch(e.tag){case 3:ft(e,e.stateNode.containerInfo),Bl(e,ae,t.memoizedState.cache),Xn();break;case 27:case 5:mt(e);break;case 4:ft(e,e.stateNode.containerInfo);break;case 10:Bl(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(Ll(e),e.flags|=128,null):(l&e.child.childLanes)!==0?Yd(t,e,l):(Ll(e),t=Sl(t,e,l),t!==null?t.sibling:null);Ll(e);break;case 19:var i=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(Zn(t,e,l,!1),a=(l&e.childLanes)!==0),i){if(a)return qd(t,e,l);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),N(ne,ne.current),a)break;return null;case 22:case 23:return e.lanes=0,jd(t,e,l);case 24:Bl(e,ae,t.memoizedState.cache)}return Sl(t,e,l)}function Qd(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)re=!0;else{if(!Xo(t,l)&&(e.flags&128)===0)return re=!1,ug(t,e,l);re=(t.flags&131072)!==0}else re=!1,kt&&(e.flags&1048576)!==0&&xf(e,Ii,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var a=e.elementType,i=a._init;if(a=i(a._payload),e.type=a,typeof a=="function")Pr(a)?(t=xa(a,t),e.tag=1,e=$d(null,e,a,t,l)):(e.tag=0,e=Uo(null,e,a,t,l));else{if(a!=null){if(i=a.$$typeof,i===at){e.tag=11,e=_d(null,e,a,t,l);break t}else if(i===F){e.tag=14,e=Nd(null,e,a,t,l);break t}}throw e=U(a)||a,Error(o(306,e,""))}}return e;case 0:return Uo(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,i=xa(a,e.pendingProps),$d(t,e,a,i,l);case 3:t:{if(ft(e,e.stateNode.containerInfo),t===null)throw Error(o(387));a=e.pendingProps;var u=e.memoizedState;i=u.element,po(t,e),ti(e,a,null,l);var s=e.memoizedState;if(a=s.cache,Bl(e,ae,a),a!==u.cache&&ro(e,[ae],l,!0),Pn(),a=s.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=Ld(t,e,a,l);break t}else if(a!==i){i=Ye(Error(o(424)),e),Vn(i),e=Ld(t,e,a,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Kt=Ie(t.firstChild),Se=e,kt=!0,pa=null,nl=!0,l=Sd(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Xn(),a===i){e=Sl(t,e,l);break t}de(t,e,a,l)}e=e.child}return e;case 26:return vu(t,e),t===null?(l=Kh(e.type,null,e.pendingProps,null))?e.memoizedState=l:kt||(l=e.type,t=e.pendingProps,a=_u(J.current).createElement(l),a[be]=e,a[we]=t,pe(a,l,t),ue(a),e.stateNode=a):e.memoizedState=Kh(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return mt(e),t===null&&kt&&(a=e.stateNode=Xh(e.type,e.pendingProps,J.current),Se=e,nl=!0,i=Kt,Wl(e.type)?(Tc=i,Kt=Ie(a.firstChild)):Kt=i),de(t,e,e.pendingProps.children,l),vu(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&kt&&((i=a=Kt)&&(a=Ng(a,e.type,e.pendingProps,nl),a!==null?(e.stateNode=a,Se=e,Kt=Ie(a.firstChild),nl=!1,i=!0):i=!1),i||ma(e)),mt(e),i=e.type,u=e.pendingProps,s=t!==null?t.memoizedProps:null,a=u.children,Ac(i,u)?a=null:s!==null&&Ac(i,s)&&(e.flags|=32),e.memoizedState!==null&&(i=xo(t,e,Im,null,null,l),Si._currentValue=i),vu(t,e),de(t,e,a,l),e.child;case 6:return t===null&&kt&&((t=l=Kt)&&(l=Bg(l,e.pendingProps,nl),l!==null?(e.stateNode=l,Se=e,Kt=null,t=!0):t=!1),t||ma(e)),null;case 13:return Yd(t,e,l);case 4:return ft(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=cn(e,null,a,l):de(t,e,a,l),e.child;case 11:return _d(t,e,e.type,e.pendingProps,l);case 7:return de(t,e,e.pendingProps,l),e.child;case 8:return de(t,e,e.pendingProps.children,l),e.child;case 12:return de(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,Bl(e,e.type,a.value),de(t,e,a.children,l),e.child;case 9:return i=e.type._context,a=e.pendingProps.children,ba(e),i=ve(i),a=a(i),e.flags|=1,de(t,e,a,l),e.child;case 14:return Nd(t,e,e.type,e.pendingProps,l);case 15:return Bd(t,e,e.type,e.pendingProps,l);case 19:return qd(t,e,l);case 31:return a=e.pendingProps,l=e.mode,a={mode:a.mode,children:a.children},t===null?(l=yu(a,l),l.ref=e.ref,e.child=l,l.return=e,e=l):(l=ml(t.child,a),l.ref=e.ref,e.child=l,l.return=e,e=l),e;case 22:return jd(t,e,l);case 24:return ba(e),a=ve(ae),t===null?(i=so(),i===null&&(i=Yt,u=oo(),i.pooledCache=u,u.refCount++,u!==null&&(i.pooledCacheLanes|=l),i=u),e.memoizedState={parent:a,cache:i},ho(e),Bl(e,ae,i)):((t.lanes&l)!==0&&(po(t,e),ti(e,null,null,l),Pn()),i=t.memoizedState,u=e.memoizedState,i.parent!==a?(i={parent:a,cache:a},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),Bl(e,ae,a)):(a=u.cache,Bl(e,ae,a),a!==i.cache&&ro(e,[ae],l,!0))),de(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function El(t){t.flags|=4}function Xd(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ph(e)){if(e=Xe.current,e!==null&&((zt&4194048)===zt?il!==null:(zt&62914560)!==zt&&(zt&536870912)===0||e!==il))throw Fn=fo,zf;t.flags|=8192}}function xu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Ss():536870912,t.lanes|=e,hn|=e)}function ri(t,e){if(!kt)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var i=t.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function rg(t,e,l){var a=e.pendingProps;switch(ao(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(e),null;case 1:return Zt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),yl(ae),G(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Qn(e)?El(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ef())),Zt(e),null;case 26:return l=e.memoizedState,t===null?(El(e),l!==null?(Zt(e),Xd(e,l)):(Zt(e),e.flags&=-16777217)):l?l!==t.memoizedState?(El(e),Zt(e),Xd(e,l)):(Zt(e),e.flags&=-16777217):(t.memoizedProps!==a&&El(e),Zt(e),e.flags&=-16777217),null;case 27:dt(e),l=J.current;var i=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==a&&El(e);else{if(!a){if(e.stateNode===null)throw Error(o(166));return Zt(e),null}t=q.current,Qn(e)?Af(e):(t=Xh(i,a,l),e.stateNode=t,El(e))}return Zt(e),null;case 5:if(dt(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&El(e);else{if(!a){if(e.stateNode===null)throw Error(o(166));return Zt(e),null}if(t=q.current,Qn(e))Af(e);else{switch(i=_u(J.current),t){case 1:t=i.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:t=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":t=i.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":t=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":t=i.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?i.createElement(l,{is:a.is}):i.createElement(l)}}t[be]=e,t[we]=a;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=t;t:switch(pe(t,l,a),l){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&El(e)}}return Zt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&El(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(o(166));if(t=J.current,Qn(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,i=Se,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}t[be]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Uh(t.nodeValue,l)),t||ma(e)}else t=_u(t).createTextNode(a),t[be]=e,e.stateNode=t}return Zt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=Qn(e),a!==null&&a.dehydrated!==null){if(t===null){if(!i)throw Error(o(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(o(317));i[be]=e}else Xn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Zt(e),i=!1}else i=Ef(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(Al(e),e):(Al(e),null)}if(Al(e),(e.flags&128)!==0)return e.lanes=l,e;if(l=a!==null,t=t!==null&&t.memoizedState!==null,l){a=e.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool);var u=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==i&&(a.flags|=2048)}return l!==t&&l&&(e.child.flags|=8192),xu(e,e.updateQueue),Zt(e),null;case 4:return G(),t===null&&gc(e.stateNode.containerInfo),Zt(e),null;case 10:return yl(e.type),Zt(e),null;case 19:if(K(ne),i=e.memoizedState,i===null)return Zt(e),null;if(a=(e.flags&128)!==0,u=i.rendering,u===null)if(a)ri(i,!1);else{if(Jt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=mu(t),u!==null){for(e.flags|=128,ri(i,!1),t=u.updateQueue,e.updateQueue=t,xu(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)yf(l,t),l=l.sibling;return N(ne,ne.current&1|2),e.child}t=t.sibling}i.tail!==null&&qt()>Eu&&(e.flags|=128,a=!0,ri(i,!1),e.lanes=4194304)}else{if(!a)if(t=mu(u),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,xu(e,t),ri(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!kt)return Zt(e),null}else 2*qt()-i.renderingStartTime>Eu&&l!==536870912&&(e.flags|=128,a=!0,ri(i,!1),e.lanes=4194304);i.isBackwards?(u.sibling=e.child,e.child=u):(t=i.last,t!==null?t.sibling=u:e.child=u,i.last=u)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=qt(),e.sibling=null,t=ne.current,N(ne,a?t&1|2:t&1),e):(Zt(e),null);case 22:case 23:return Al(e),vo(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(Zt(e),e.subtreeFlags&6&&(e.flags|=8192)):Zt(e),l=e.updateQueue,l!==null&&xu(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&K(va),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),yl(ae),Zt(e),null;case 25:return null;case 30:return null}throw Error(o(156,e.tag))}function og(t,e){switch(ao(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return yl(ae),G(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return dt(e),null;case 13:if(Al(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(o(340));Xn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return K(ne),null;case 4:return G(),null;case 10:return yl(e.type),null;case 22:case 23:return Al(e),vo(),t!==null&&K(va),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return yl(ae),null;case 25:return null;default:return null}}function Vd(t,e){switch(ao(e),e.tag){case 3:yl(ae),G();break;case 26:case 27:case 5:dt(e);break;case 4:G();break;case 13:Al(e);break;case 19:K(ne);break;case 10:yl(e.type);break;case 22:case 23:Al(e),vo(),t!==null&&K(va);break;case 24:yl(ae)}}function oi(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&t)===t){a=void 0;var u=l.create,s=l.inst;a=u(),s.destroy=a}l=l.next}while(l!==i)}}catch(f){Lt(e,e.return,f)}}function Gl(t,e,l){try{var a=e.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var u=i.next;a=u;do{if((a.tag&t)===t){var s=a.inst,f=s.destroy;if(f!==void 0){s.destroy=void 0,i=e;var m=l,w=f;try{w()}catch(H){Lt(i,m,H)}}}a=a.next}while(a!==u)}}catch(H){Lt(e,e.return,H)}}function Zd(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{Nf(e,l)}catch(a){Lt(t,t.return,a)}}}function Kd(t,e,l){l.props=xa(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){Lt(t,e,a)}}function ci(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(i){Lt(t,e,i)}}function ul(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(i){Lt(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(i){Lt(t,e,i)}else l.current=null}function Jd(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(i){Lt(t,t.return,i)}}function Vo(t,e,l){try{var a=t.stateNode;Og(a,t.type,l,e),a[we]=e}catch(i){Lt(t,t.return,i)}}function Wd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wl(t.type)||t.tag===4}function Zo(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Wd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ko(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=Mu));else if(a!==4&&(a===27&&Wl(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(Ko(t,e,l),t=t.sibling;t!==null;)Ko(t,e,l),t=t.sibling}function Au(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&Wl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(Au(t,e,l),t=t.sibling;t!==null;)Au(t,e,l),t=t.sibling}function Fd(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);pe(e,a,l),e[be]=t,e[we]=l}catch(u){Lt(t,t.return,u)}}var wl=!1,It=!1,Jo=!1,Id=typeof WeakSet=="function"?WeakSet:Set,oe=null;function cg(t,e){if(t=t.containerInfo,yc=$u,t=cf(t),Vr(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var i=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{l.nodeType,u.nodeType}catch{l=null;break t}var s=0,f=-1,m=-1,w=0,H=0,L=t,z=null;e:for(;;){for(var O;L!==l||i!==0&&L.nodeType!==3||(f=s+i),L!==u||a!==0&&L.nodeType!==3||(m=s+a),L.nodeType===3&&(s+=L.nodeValue.length),(O=L.firstChild)!==null;)z=L,L=O;for(;;){if(L===t)break e;if(z===l&&++w===i&&(f=s),z===u&&++H===a&&(m=s),(O=L.nextSibling)!==null)break;L=z,z=L.parentNode}L=O}l=f===-1||m===-1?null:{start:f,end:m}}else l=null}l=l||{start:0,end:0}}else l=null;for(xc={focusedElem:t,selectionRange:l},$u=!1,oe=e;oe!==null;)if(e=oe,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,oe=t;else for(;oe!==null;){switch(e=oe,u=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,l=e,i=u.memoizedProps,u=u.memoizedState,a=l.stateNode;try{var gt=xa(l.type,i,l.elementType===l.type);t=a.getSnapshotBeforeUpdate(gt,u),a.__reactInternalSnapshotBeforeUpdate=t}catch(ht){Lt(l,l.return,ht)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)Ec(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ec(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=e.sibling,t!==null){t.return=e.return,oe=t;break}oe=e.return}}function Pd(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:ql(t,l),a&4&&oi(5,l);break;case 1:if(ql(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(s){Lt(l,l.return,s)}else{var i=xa(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){Lt(l,l.return,s)}}a&64&&Zd(l),a&512&&ci(l,l.return);break;case 3:if(ql(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{Nf(t,e)}catch(s){Lt(l,l.return,s)}}break;case 27:e===null&&a&4&&Fd(l);case 26:case 5:ql(t,l),e===null&&a&4&&Jd(l),a&512&&ci(l,l.return);break;case 12:ql(t,l);break;case 13:ql(t,l),a&4&&lh(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=vg.bind(null,l),jg(t,l))));break;case 22:if(a=l.memoizedState!==null||wl,!a){e=e!==null&&e.memoizedState!==null||It,i=wl;var u=It;wl=a,(It=e)&&!u?Ql(t,l,(l.subtreeFlags&8772)!==0):ql(t,l),wl=i,It=u}break;case 30:break;default:ql(t,l)}}function th(t){var e=t.alternate;e!==null&&(t.alternate=null,th(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Rr(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Vt=null,Re=!1;function Tl(t,e,l){for(l=l.child;l!==null;)eh(t,e,l),l=l.sibling}function eh(t,e,l){if(xe&&typeof xe.onCommitFiberUnmount=="function")try{xe.onCommitFiberUnmount(Ml,l)}catch{}switch(l.tag){case 26:It||ul(l,e),Tl(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:It||ul(l,e);var a=Vt,i=Re;Wl(l.type)&&(Vt=l.stateNode,Re=!1),Tl(t,e,l),vi(l.stateNode),Vt=a,Re=i;break;case 5:It||ul(l,e);case 6:if(a=Vt,i=Re,Vt=null,Tl(t,e,l),Vt=a,Re=i,Vt!==null)if(Re)try{(Vt.nodeType===9?Vt.body:Vt.nodeName==="HTML"?Vt.ownerDocument.body:Vt).removeChild(l.stateNode)}catch(u){Lt(l,e,u)}else try{Vt.removeChild(l.stateNode)}catch(u){Lt(l,e,u)}break;case 18:Vt!==null&&(Re?(t=Vt,qh(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),Di(t)):qh(Vt,l.stateNode));break;case 4:a=Vt,i=Re,Vt=l.stateNode.containerInfo,Re=!0,Tl(t,e,l),Vt=a,Re=i;break;case 0:case 11:case 14:case 15:It||Gl(2,l,e),It||Gl(4,l,e),Tl(t,e,l);break;case 1:It||(ul(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Kd(l,e,a)),Tl(t,e,l);break;case 21:Tl(t,e,l);break;case 22:It=(a=It)||l.memoizedState!==null,Tl(t,e,l),It=a;break;default:Tl(t,e,l)}}function lh(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Di(t)}catch(l){Lt(e,e.return,l)}}function sg(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Id),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Id),e;default:throw Error(o(435,t.tag))}}function Wo(t,e){var l=sg(t);e.forEach(function(a){var i=yg.bind(null,t,a);l.has(a)||(l.add(a),a.then(i,i))})}function Ce(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var i=l[a],u=t,s=e,f=s;t:for(;f!==null;){switch(f.tag){case 27:if(Wl(f.type)){Vt=f.stateNode,Re=!1;break t}break;case 5:Vt=f.stateNode,Re=!1;break t;case 3:case 4:Vt=f.stateNode.containerInfo,Re=!0;break t}f=f.return}if(Vt===null)throw Error(o(160));eh(u,s,i),Vt=null,Re=!1,u=i.alternate,u!==null&&(u.return=null),i.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)ah(e,t),e=e.sibling}var Fe=null;function ah(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ce(e,t),Me(t),a&4&&(Gl(3,t,t.return),oi(3,t),Gl(5,t,t.return));break;case 1:Ce(e,t),Me(t),a&512&&(It||l===null||ul(l,l.return)),a&64&&wl&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var i=Fe;if(Ce(e,t),Me(t),a&512&&(It||l===null||ul(l,l.return)),a&4){var u=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,i=i.ownerDocument||i;e:switch(a){case"title":u=i.getElementsByTagName("title")[0],(!u||u[_n]||u[be]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=i.createElement(a),i.head.insertBefore(u,i.querySelector("head > title"))),pe(u,a,l),u[be]=t,ue(u),a=u;break t;case"link":var s=Fh("link","href",i).get(a+(l.href||""));if(s){for(var f=0;f<s.length;f++)if(u=s[f],u.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&u.getAttribute("rel")===(l.rel==null?null:l.rel)&&u.getAttribute("title")===(l.title==null?null:l.title)&&u.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){s.splice(f,1);break e}}u=i.createElement(a),pe(u,a,l),i.head.appendChild(u);break;case"meta":if(s=Fh("meta","content",i).get(a+(l.content||""))){for(f=0;f<s.length;f++)if(u=s[f],u.getAttribute("content")===(l.content==null?null:""+l.content)&&u.getAttribute("name")===(l.name==null?null:l.name)&&u.getAttribute("property")===(l.property==null?null:l.property)&&u.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&u.getAttribute("charset")===(l.charSet==null?null:l.charSet)){s.splice(f,1);break e}}u=i.createElement(a),pe(u,a,l),i.head.appendChild(u);break;default:throw Error(o(468,a))}u[be]=t,ue(u),a=u}t.stateNode=a}else Ih(i,t.type,t.stateNode);else t.stateNode=Wh(i,a,t.memoizedProps);else u!==a?(u===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):u.count--,a===null?Ih(i,t.type,t.stateNode):Wh(i,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Vo(t,t.memoizedProps,l.memoizedProps)}break;case 27:Ce(e,t),Me(t),a&512&&(It||l===null||ul(l,l.return)),l!==null&&a&4&&Vo(t,t.memoizedProps,l.memoizedProps);break;case 5:if(Ce(e,t),Me(t),a&512&&(It||l===null||ul(l,l.return)),t.flags&32){i=t.stateNode;try{Qa(i,"")}catch(O){Lt(t,t.return,O)}}a&4&&t.stateNode!=null&&(i=t.memoizedProps,Vo(t,i,l!==null?l.memoizedProps:i)),a&1024&&(Jo=!0);break;case 6:if(Ce(e,t),Me(t),a&4){if(t.stateNode===null)throw Error(o(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(O){Lt(t,t.return,O)}}break;case 3:if(ju=null,i=Fe,Fe=Nu(e.containerInfo),Ce(e,t),Fe=i,Me(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Di(e.containerInfo)}catch(O){Lt(t,t.return,O)}Jo&&(Jo=!1,nh(t));break;case 4:a=Fe,Fe=Nu(t.stateNode.containerInfo),Ce(e,t),Me(t),Fe=a;break;case 12:Ce(e,t),Me(t);break;case 13:Ce(e,t),Me(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(lc=qt()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Wo(t,a)));break;case 22:i=t.memoizedState!==null;var m=l!==null&&l.memoizedState!==null,w=wl,H=It;if(wl=w||i,It=H||m,Ce(e,t),It=H,wl=w,Me(t),a&8192)t:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(l===null||m||wl||It||Aa(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){m=l=e;try{if(u=m.stateNode,i)s=u.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{f=m.stateNode;var L=m.memoizedProps.style,z=L!=null&&L.hasOwnProperty("display")?L.display:null;f.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(O){Lt(m,m.return,O)}}}else if(e.tag===6){if(l===null){m=e;try{m.stateNode.nodeValue=i?"":m.memoizedProps}catch(O){Lt(m,m.return,O)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Wo(t,l))));break;case 19:Ce(e,t),Me(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Wo(t,a)));break;case 30:break;case 21:break;default:Ce(e,t),Me(t)}}function Me(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(Wd(a)){l=a;break}a=a.return}if(l==null)throw Error(o(160));switch(l.tag){case 27:var i=l.stateNode,u=Zo(t);Au(t,u,i);break;case 5:var s=l.stateNode;l.flags&32&&(Qa(s,""),l.flags&=-33);var f=Zo(t);Au(t,f,s);break;case 3:case 4:var m=l.stateNode.containerInfo,w=Zo(t);Ko(t,w,m);break;default:throw Error(o(161))}}catch(H){Lt(t,t.return,H)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function nh(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;nh(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function ql(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Pd(t,e.alternate,e),e=e.sibling}function Aa(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Gl(4,e,e.return),Aa(e);break;case 1:ul(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&Kd(e,e.return,l),Aa(e);break;case 27:vi(e.stateNode);case 26:case 5:ul(e,e.return),Aa(e);break;case 22:e.memoizedState===null&&Aa(e);break;case 30:Aa(e);break;default:Aa(e)}t=t.sibling}}function Ql(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,i=t,u=e,s=u.flags;switch(u.tag){case 0:case 11:case 15:Ql(i,u,l),oi(4,u);break;case 1:if(Ql(i,u,l),a=u,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(w){Lt(a,a.return,w)}if(a=u,i=a.updateQueue,i!==null){var f=a.stateNode;try{var m=i.shared.hiddenCallbacks;if(m!==null)for(i.shared.hiddenCallbacks=null,i=0;i<m.length;i++)_f(m[i],f)}catch(w){Lt(a,a.return,w)}}l&&s&64&&Zd(u),ci(u,u.return);break;case 27:Fd(u);case 26:case 5:Ql(i,u,l),l&&a===null&&s&4&&Jd(u),ci(u,u.return);break;case 12:Ql(i,u,l);break;case 13:Ql(i,u,l),l&&s&4&&lh(i,u);break;case 22:u.memoizedState===null&&Ql(i,u,l),ci(u,u.return);break;case 30:break;default:Ql(i,u,l)}e=e.sibling}}function Fo(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Kn(l))}function Io(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Kn(t))}function rl(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ih(t,e,l,a),e=e.sibling}function ih(t,e,l,a){var i=e.flags;switch(e.tag){case 0:case 11:case 15:rl(t,e,l,a),i&2048&&oi(9,e);break;case 1:rl(t,e,l,a);break;case 3:rl(t,e,l,a),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Kn(t)));break;case 12:if(i&2048){rl(t,e,l,a),t=e.stateNode;try{var u=e.memoizedProps,s=u.id,f=u.onPostCommit;typeof f=="function"&&f(s,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(m){Lt(e,e.return,m)}}else rl(t,e,l,a);break;case 13:rl(t,e,l,a);break;case 23:break;case 22:u=e.stateNode,s=e.alternate,e.memoizedState!==null?u._visibility&2?rl(t,e,l,a):si(t,e):u._visibility&2?rl(t,e,l,a):(u._visibility|=2,sn(t,e,l,a,(e.subtreeFlags&10256)!==0)),i&2048&&Fo(s,e);break;case 24:rl(t,e,l,a),i&2048&&Io(e.alternate,e);break;default:rl(t,e,l,a)}}function sn(t,e,l,a,i){for(i=i&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var u=t,s=e,f=l,m=a,w=s.flags;switch(s.tag){case 0:case 11:case 15:sn(u,s,f,m,i),oi(8,s);break;case 23:break;case 22:var H=s.stateNode;s.memoizedState!==null?H._visibility&2?sn(u,s,f,m,i):si(u,s):(H._visibility|=2,sn(u,s,f,m,i)),i&&w&2048&&Fo(s.alternate,s);break;case 24:sn(u,s,f,m,i),i&&w&2048&&Io(s.alternate,s);break;default:sn(u,s,f,m,i)}e=e.sibling}}function si(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,i=a.flags;switch(a.tag){case 22:si(l,a),i&2048&&Fo(a.alternate,a);break;case 24:si(l,a),i&2048&&Io(a.alternate,a);break;default:si(l,a)}e=e.sibling}}var fi=8192;function fn(t){if(t.subtreeFlags&fi)for(t=t.child;t!==null;)uh(t),t=t.sibling}function uh(t){switch(t.tag){case 26:fn(t),t.flags&fi&&t.memoizedState!==null&&Jg(Fe,t.memoizedState,t.memoizedProps);break;case 5:fn(t);break;case 3:case 4:var e=Fe;Fe=Nu(t.stateNode.containerInfo),fn(t),Fe=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=fi,fi=16777216,fn(t),fi=e):fn(t));break;default:fn(t)}}function rh(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function di(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];oe=a,ch(a,t)}rh(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)oh(t),t=t.sibling}function oh(t){switch(t.tag){case 0:case 11:case 15:di(t),t.flags&2048&&Gl(9,t,t.return);break;case 3:di(t);break;case 12:di(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Su(t)):di(t);break;default:di(t)}}function Su(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];oe=a,ch(a,t)}rh(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Gl(8,e,e.return),Su(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,Su(e));break;default:Su(e)}t=t.sibling}}function ch(t,e){for(;oe!==null;){var l=oe;switch(l.tag){case 0:case 11:case 15:Gl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Kn(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,oe=a;else t:for(l=t;oe!==null;){a=oe;var i=a.sibling,u=a.return;if(th(a),a===l){oe=null;break t}if(i!==null){i.return=u,oe=i;break t}oe=u}}}var fg={getCacheForType:function(t){var e=ve(ae),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l}},dg=typeof WeakMap=="function"?WeakMap:Map,Bt=0,Yt=null,Tt=null,zt=0,jt=0,_e=null,Xl=!1,dn=!1,Po=!1,Dl=0,Jt=0,Vl=0,Sa=0,tc=0,Ve=0,hn=0,hi=null,ze=null,ec=!1,lc=0,Eu=1/0,wu=null,Zl=null,he=0,Kl=null,pn=null,mn=0,ac=0,nc=null,sh=null,pi=0,ic=null;function Ne(){if((Bt&2)!==0&&zt!==0)return zt&-zt;if(D.T!==null){var t=en;return t!==0?t:dc()}return Ts()}function fh(){Ve===0&&(Ve=(zt&536870912)===0||kt?As():536870912);var t=Xe.current;return t!==null&&(t.flags|=32),Ve}function Be(t,e,l){(t===Yt&&(jt===2||jt===9)||t.cancelPendingCommit!==null)&&(gn(t,0),Jl(t,zt,Ve,!1)),Mn(t,l),((Bt&2)===0||t!==Yt)&&(t===Yt&&((Bt&2)===0&&(Sa|=l),Jt===4&&Jl(t,zt,Ve,!1)),ol(t))}function dh(t,e,l){if((Bt&6)!==0)throw Error(o(327));var a=!l&&(e&124)===0&&(e&t.expiredLanes)===0||ua(t,e),i=a?mg(t,e):oc(t,e,!0),u=a;do{if(i===0){dn&&!a&&Jl(t,e,0,!1);break}else{if(l=t.current.alternate,u&&!hg(l)){i=oc(t,e,!1),u=!1;continue}if(i===2){if(u=e,t.errorRecoveryDisabledLanes&u)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;t:{var f=t;i=hi;var m=f.current.memoizedState.isDehydrated;if(m&&(gn(f,s).flags|=256),s=oc(f,s,!1),s!==2){if(Po&&!m){f.errorRecoveryDisabledLanes|=u,Sa|=u,i=4;break t}u=ze,ze=i,u!==null&&(ze===null?ze=u:ze.push.apply(ze,u))}i=s}if(u=!1,i!==2)continue}}if(i===1){gn(t,0),Jl(t,e,0,!0);break}t:{switch(a=t,u=i,u){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e)break;case 6:Jl(a,e,Ve,!Xl);break t;case 2:ze=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(i=lc+300-qt(),10<i)){if(Jl(a,e,Ve,!Xl),ja(a,0,!0)!==0)break t;a.timeoutHandle=Yh(hh.bind(null,a,l,ze,wu,ec,e,Ve,Sa,hn,Xl,u,2,-0,0),i);break t}hh(a,l,ze,wu,ec,e,Ve,Sa,hn,Xl,u,0,-0,0)}}break}while(!0);ol(t)}function hh(t,e,l,a,i,u,s,f,m,w,H,L,z,O){if(t.timeoutHandle=-1,L=e.subtreeFlags,(L&8192||(L&16785408)===16785408)&&(Ai={stylesheets:null,count:0,unsuspend:Kg},uh(e),L=Wg(),L!==null)){t.cancelPendingCommit=L(xh.bind(null,t,e,u,l,a,i,s,f,m,H,1,z,O)),Jl(t,u,s,!w);return}xh(t,e,u,l,a,i,s,f,m)}function hg(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var i=l[a],u=i.getSnapshot;i=i.value;try{if(!Oe(u(),i))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Jl(t,e,l,a){e&=~tc,e&=~Sa,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var i=e;0<i;){var u=31-Ae(i),s=1<<u;a[u]=-1,i&=~s}l!==0&&Es(t,l,e)}function Tu(){return(Bt&6)===0?(mi(0),!1):!0}function uc(){if(Tt!==null){if(jt===0)var t=Tt.return;else t=Tt,vl=ga=null,Eo(t),on=null,ii=0,t=Tt;for(;t!==null;)Vd(t.alternate,t),t=t.return;Tt=null}}function gn(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,Cg(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),uc(),Yt=t,Tt=l=ml(t.current,null),zt=e,jt=0,_e=null,Xl=!1,dn=ua(t,e),Po=!1,hn=Ve=tc=Sa=Vl=Jt=0,ze=hi=null,ec=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var i=31-Ae(a),u=1<<i;e|=t[i],a&=~u}return Dl=e,Zi(),l}function ph(t,e){Et=null,D.H=du,e===Wn||e===lu?(e=Cf(),jt=3):e===zf?(e=Cf(),jt=4):jt=e===Md?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,_e=e,Tt===null&&(Jt=1,bu(t,Ye(e,t.current)))}function mh(){var t=D.H;return D.H=du,t===null?du:t}function gh(){var t=D.A;return D.A=fg,t}function rc(){Jt=4,Xl||(zt&4194048)!==zt&&Xe.current!==null||(dn=!0),(Vl&134217727)===0&&(Sa&134217727)===0||Yt===null||Jl(Yt,zt,Ve,!1)}function oc(t,e,l){var a=Bt;Bt|=2;var i=mh(),u=gh();(Yt!==t||zt!==e)&&(wu=null,gn(t,e)),e=!1;var s=Jt;t:do try{if(jt!==0&&Tt!==null){var f=Tt,m=_e;switch(jt){case 8:uc(),s=6;break t;case 3:case 2:case 9:case 6:Xe.current===null&&(e=!0);var w=jt;if(jt=0,_e=null,bn(t,f,m,w),l&&dn){s=0;break t}break;default:w=jt,jt=0,_e=null,bn(t,f,m,w)}}pg(),s=Jt;break}catch(H){ph(t,H)}while(!0);return e&&t.shellSuspendCounter++,vl=ga=null,Bt=a,D.H=i,D.A=u,Tt===null&&(Yt=null,zt=0,Zi()),s}function pg(){for(;Tt!==null;)bh(Tt)}function mg(t,e){var l=Bt;Bt|=2;var a=mh(),i=gh();Yt!==t||zt!==e?(wu=null,Eu=qt()+500,gn(t,e)):dn=ua(t,e);t:do try{if(jt!==0&&Tt!==null){e=Tt;var u=_e;e:switch(jt){case 1:jt=0,_e=null,bn(t,e,u,1);break;case 2:case 9:if(Of(u)){jt=0,_e=null,vh(e);break}e=function(){jt!==2&&jt!==9||Yt!==t||(jt=7),ol(t)},u.then(e,e);break t;case 3:jt=7;break t;case 4:jt=5;break t;case 7:Of(u)?(jt=0,_e=null,vh(e)):(jt=0,_e=null,bn(t,e,u,7));break;case 5:var s=null;switch(Tt.tag){case 26:s=Tt.memoizedState;case 5:case 27:var f=Tt;if(!s||Ph(s)){jt=0,_e=null;var m=f.sibling;if(m!==null)Tt=m;else{var w=f.return;w!==null?(Tt=w,Du(w)):Tt=null}break e}}jt=0,_e=null,bn(t,e,u,5);break;case 6:jt=0,_e=null,bn(t,e,u,6);break;case 8:uc(),Jt=6;break t;default:throw Error(o(462))}}gg();break}catch(H){ph(t,H)}while(!0);return vl=ga=null,D.H=a,D.A=i,Bt=l,Tt!==null?0:(Yt=null,zt=0,Zi(),Jt)}function gg(){for(;Tt!==null&&!Gt();)bh(Tt)}function bh(t){var e=Qd(t.alternate,t,Dl);t.memoizedProps=t.pendingProps,e===null?Du(t):Tt=e}function vh(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=Ud(l,e,e.pendingProps,e.type,void 0,zt);break;case 11:e=Ud(l,e,e.pendingProps,e.type.render,e.ref,zt);break;case 5:Eo(e);default:Vd(l,e),e=Tt=yf(e,Dl),e=Qd(l,e,Dl)}t.memoizedProps=t.pendingProps,e===null?Du(t):Tt=e}function bn(t,e,l,a){vl=ga=null,Eo(e),on=null,ii=0;var i=e.return;try{if(ig(t,i,e,l,zt)){Jt=1,bu(t,Ye(l,t.current)),Tt=null;return}}catch(u){if(i!==null)throw Tt=i,u;Jt=1,bu(t,Ye(l,t.current)),Tt=null;return}e.flags&32768?(kt||a===1?t=!0:dn||(zt&536870912)!==0?t=!1:(Xl=t=!0,(a===2||a===9||a===3||a===6)&&(a=Xe.current,a!==null&&a.tag===13&&(a.flags|=16384))),yh(e,t)):Du(e)}function Du(t){var e=t;do{if((e.flags&32768)!==0){yh(e,Xl);return}t=e.return;var l=rg(e.alternate,e,Dl);if(l!==null){Tt=l;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);Jt===0&&(Jt=5)}function yh(t,e){do{var l=og(t.alternate,t);if(l!==null){l.flags&=32767,Tt=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){Tt=t;return}Tt=t=l}while(t!==null);Jt=6,Tt=null}function xh(t,e,l,a,i,u,s,f,m){t.cancelPendingCommit=null;do Ru();while(he!==0);if((Bt&6)!==0)throw Error(o(327));if(e!==null){if(e===t.current)throw Error(o(177));if(u=e.lanes|e.childLanes,u|=Fr,Kp(t,l,u,s,f,m),t===Yt&&(Tt=Yt=null,zt=0),pn=e,Kl=t,mn=l,ac=u,nc=i,sh=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,xg(Ee,function(){return Th(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=D.T,D.T=null,i=B.p,B.p=2,s=Bt,Bt|=4;try{cg(t,e,l)}finally{Bt=s,B.p=i,D.T=a}}he=1,Ah(),Sh(),Eh()}}function Ah(){if(he===1){he=0;var t=Kl,e=pn,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=D.T,D.T=null;var a=B.p;B.p=2;var i=Bt;Bt|=4;try{ah(e,t);var u=xc,s=cf(t.containerInfo),f=u.focusedElem,m=u.selectionRange;if(s!==f&&f&&f.ownerDocument&&of(f.ownerDocument.documentElement,f)){if(m!==null&&Vr(f)){var w=m.start,H=m.end;if(H===void 0&&(H=w),"selectionStart"in f)f.selectionStart=w,f.selectionEnd=Math.min(H,f.value.length);else{var L=f.ownerDocument||document,z=L&&L.defaultView||window;if(z.getSelection){var O=z.getSelection(),gt=f.textContent.length,ht=Math.min(m.start,gt),$t=m.end===void 0?ht:Math.min(m.end,gt);!O.extend&&ht>$t&&(s=$t,$t=ht,ht=s);var S=rf(f,ht),x=rf(f,$t);if(S&&x&&(O.rangeCount!==1||O.anchorNode!==S.node||O.anchorOffset!==S.offset||O.focusNode!==x.node||O.focusOffset!==x.offset)){var E=L.createRange();E.setStart(S.node,S.offset),O.removeAllRanges(),ht>$t?(O.addRange(E),O.extend(x.node,x.offset)):(E.setEnd(x.node,x.offset),O.addRange(E))}}}}for(L=[],O=f;O=O.parentNode;)O.nodeType===1&&L.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<L.length;f++){var $=L[f];$.element.scrollLeft=$.left,$.element.scrollTop=$.top}}$u=!!yc,xc=yc=null}finally{Bt=i,B.p=a,D.T=l}}t.current=e,he=2}}function Sh(){if(he===2){he=0;var t=Kl,e=pn,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=D.T,D.T=null;var a=B.p;B.p=2;var i=Bt;Bt|=4;try{Pd(t,e.alternate,e)}finally{Bt=i,B.p=a,D.T=l}}he=3}}function Eh(){if(he===4||he===3){he=0,le();var t=Kl,e=pn,l=mn,a=sh;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?he=5:(he=0,pn=Kl=null,wh(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(Zl=null),Tr(l),e=e.stateNode,xe&&typeof xe.onCommitFiberRoot=="function")try{xe.onCommitFiberRoot(Ml,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=D.T,i=B.p,B.p=2,D.T=null;try{for(var u=t.onRecoverableError,s=0;s<a.length;s++){var f=a[s];u(f.value,{componentStack:f.stack})}}finally{D.T=e,B.p=i}}(mn&3)!==0&&Ru(),ol(t),i=t.pendingLanes,(l&4194090)!==0&&(i&42)!==0?t===ic?pi++:(pi=0,ic=t):pi=0,mi(0)}}function wh(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Kn(e)))}function Ru(t){return Ah(),Sh(),Eh(),Th()}function Th(){if(he!==5)return!1;var t=Kl,e=ac;ac=0;var l=Tr(mn),a=D.T,i=B.p;try{B.p=32>l?32:l,D.T=null,l=nc,nc=null;var u=Kl,s=mn;if(he=0,pn=Kl=null,mn=0,(Bt&6)!==0)throw Error(o(331));var f=Bt;if(Bt|=4,oh(u.current),ih(u,u.current,s,l),Bt=f,mi(0,!1),xe&&typeof xe.onPostCommitFiberRoot=="function")try{xe.onPostCommitFiberRoot(Ml,u)}catch{}return!0}finally{B.p=i,D.T=a,wh(t,e)}}function Dh(t,e,l){e=Ye(l,e),e=Ho(t.stateNode,e,2),t=Ul(t,e,2),t!==null&&(Mn(t,2),ol(t))}function Lt(t,e,l){if(t.tag===3)Dh(t,t,l);else for(;e!==null;){if(e.tag===3){Dh(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Zl===null||!Zl.has(a))){t=Ye(l,t),l=kd(2),a=Ul(e,l,2),a!==null&&(Cd(l,a,e,t),Mn(a,2),ol(a));break}}e=e.return}}function cc(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new dg;var i=new Set;a.set(e,i)}else i=a.get(e),i===void 0&&(i=new Set,a.set(e,i));i.has(l)||(Po=!0,i.add(l),t=bg.bind(null,t,e,l),e.then(t,t))}function bg(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,Yt===t&&(zt&l)===l&&(Jt===4||Jt===3&&(zt&62914560)===zt&&300>qt()-lc?(Bt&2)===0&&gn(t,0):tc|=l,hn===zt&&(hn=0)),ol(t)}function Rh(t,e){e===0&&(e=Ss()),t=Fa(t,e),t!==null&&(Mn(t,e),ol(t))}function vg(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),Rh(t,l)}function yg(t,e){var l=0;switch(t.tag){case 13:var a=t.stateNode,i=t.memoizedState;i!==null&&(l=i.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(o(314))}a!==null&&a.delete(e),Rh(t,l)}function xg(t,e){return Rt(t,e)}var zu=null,vn=null,sc=!1,Ou=!1,fc=!1,Ea=0;function ol(t){t!==vn&&t.next===null&&(vn===null?zu=vn=t:vn=vn.next=t),Ou=!0,sc||(sc=!0,Sg())}function mi(t,e){if(!fc&&Ou){fc=!0;do for(var l=!1,a=zu;a!==null;){if(t!==0){var i=a.pendingLanes;if(i===0)var u=0;else{var s=a.suspendedLanes,f=a.pingedLanes;u=(1<<31-Ae(42|t)+1)-1,u&=i&~(s&~f),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(l=!0,Ch(a,u))}else u=zt,u=ja(a,a===Yt?u:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(u&3)===0||ua(a,u)||(l=!0,Ch(a,u));a=a.next}while(l);fc=!1}}function Ag(){zh()}function zh(){Ou=sc=!1;var t=0;Ea!==0&&(kg()&&(t=Ea),Ea=0);for(var e=qt(),l=null,a=zu;a!==null;){var i=a.next,u=Oh(a,e);u===0?(a.next=null,l===null?zu=i:l.next=i,i===null&&(vn=l)):(l=a,(t!==0||(u&3)!==0)&&(Ou=!0)),a=i}mi(t)}function Oh(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,i=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var s=31-Ae(u),f=1<<s,m=i[s];m===-1?((f&l)===0||(f&a)!==0)&&(i[s]=Sr(f,e)):m<=e&&(t.expiredLanes|=f),u&=~f}if(e=Yt,l=zt,l=ja(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(jt===2||jt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Nt(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||ua(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&Nt(a),Tr(l)){case 2:case 8:l=He;break;case 32:l=Ee;break;case 268435456:l=Ue;break;default:l=Ee}return a=kh.bind(null,t),l=Rt(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&Nt(a),t.callbackPriority=2,t.callbackNode=null,2}function kh(t,e){if(he!==0&&he!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Ru()&&t.callbackNode!==l)return null;var a=zt;return a=ja(t,t===Yt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(dh(t,a,e),Oh(t,qt()),t.callbackNode!=null&&t.callbackNode===l?kh.bind(null,t):null)}function Ch(t,e){if(Ru())return null;dh(t,e,!0)}function Sg(){Mg(function(){(Bt&6)!==0?Rt(ie,Ag):zh()})}function dc(){return Ea===0&&(Ea=As()),Ea}function Mh(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Li(""+t)}function _h(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function Eg(t,e,l,a,i){if(e==="submit"&&l&&l.stateNode===i){var u=Mh((i[we]||null).action),s=a.submitter;s&&(e=(e=s[we]||null)?Mh(e.formAction):s.getAttribute("formAction"),e!==null&&(u=e,s=null));var f=new Qi("action","action",null,a,i);t.push({event:f,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Ea!==0){var m=s?_h(i,s):new FormData(i);Mo(l,{pending:!0,data:m,method:i.method,action:u},null,m)}}else typeof u=="function"&&(f.preventDefault(),m=s?_h(i,s):new FormData(i),Mo(l,{pending:!0,data:m,method:i.method,action:u},u,m))},currentTarget:i}]})}}for(var hc=0;hc<Wr.length;hc++){var pc=Wr[hc],wg=pc.toLowerCase(),Tg=pc[0].toUpperCase()+pc.slice(1);We(wg,"on"+Tg)}We(df,"onAnimationEnd"),We(hf,"onAnimationIteration"),We(pf,"onAnimationStart"),We("dblclick","onDoubleClick"),We("focusin","onFocus"),We("focusout","onBlur"),We(Gm,"onTransitionRun"),We(qm,"onTransitionStart"),We(Qm,"onTransitionCancel"),We(mf,"onTransitionEnd"),Ya("onMouseEnter",["mouseout","mouseover"]),Ya("onMouseLeave",["mouseout","mouseover"]),Ya("onPointerEnter",["pointerout","pointerover"]),Ya("onPointerLeave",["pointerout","pointerover"]),ra("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ra("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ra("onBeforeInput",["compositionend","keypress","textInput","paste"]),ra("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ra("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ra("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gi));function Nh(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],i=a.event;a=a.listeners;t:{var u=void 0;if(e)for(var s=a.length-1;0<=s;s--){var f=a[s],m=f.instance,w=f.currentTarget;if(f=f.listener,m!==u&&i.isPropagationStopped())break t;u=f,i.currentTarget=w;try{u(i)}catch(H){gu(H)}i.currentTarget=null,u=m}else for(s=0;s<a.length;s++){if(f=a[s],m=f.instance,w=f.currentTarget,f=f.listener,m!==u&&i.isPropagationStopped())break t;u=f,i.currentTarget=w;try{u(i)}catch(H){gu(H)}i.currentTarget=null,u=m}}}}function Dt(t,e){var l=e[Dr];l===void 0&&(l=e[Dr]=new Set);var a=t+"__bubble";l.has(a)||(Bh(e,t,2,!1),l.add(a))}function mc(t,e,l){var a=0;e&&(a|=4),Bh(l,t,a,e)}var ku="_reactListening"+Math.random().toString(36).slice(2);function gc(t){if(!t[ku]){t[ku]=!0,Rs.forEach(function(l){l!=="selectionchange"&&(Dg.has(l)||mc(l,!1,t),mc(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ku]||(e[ku]=!0,mc("selectionchange",!1,e))}}function Bh(t,e,l,a){switch(i0(e)){case 2:var i=Pg;break;case 8:i=tb;break;default:i=kc}l=i.bind(null,e,l,t),i=void 0,!Hr||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),a?i!==void 0?t.addEventListener(e,l,{capture:!0,passive:i}):t.addEventListener(e,l,!0):i!==void 0?t.addEventListener(e,l,{passive:i}):t.addEventListener(e,l,!1)}function bc(t,e,l,a,i){var u=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var f=a.stateNode.containerInfo;if(f===i)break;if(s===4)for(s=a.return;s!==null;){var m=s.tag;if((m===3||m===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;f!==null;){if(s=Ua(f),s===null)return;if(m=s.tag,m===5||m===6||m===26||m===27){a=u=s;continue t}f=f.parentNode}}a=a.return}Ys(function(){var w=u,H=Br(l),L=[];t:{var z=gf.get(t);if(z!==void 0){var O=Qi,gt=t;switch(t){case"keypress":if(Gi(l)===0)break t;case"keydown":case"keyup":O=xm;break;case"focusin":gt="focus",O=Yr;break;case"focusout":gt="blur",O=Yr;break;case"beforeblur":case"afterblur":O=Yr;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Qs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=om;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=Em;break;case df:case hf:case pf:O=fm;break;case mf:O=Tm;break;case"scroll":case"scrollend":O=um;break;case"wheel":O=Rm;break;case"copy":case"cut":case"paste":O=hm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=Vs;break;case"toggle":case"beforetoggle":O=Om}var ht=(e&4)!==0,$t=!ht&&(t==="scroll"||t==="scrollend"),S=ht?z!==null?z+"Capture":null:z;ht=[];for(var x=w,E;x!==null;){var $=x;if(E=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||E===null||S===null||($=Bn(x,S),$!=null&&ht.push(bi(x,$,E))),$t)break;x=x.return}0<ht.length&&(z=new O(z,gt,null,l,H),L.push({event:z,listeners:ht}))}}if((e&7)===0){t:{if(z=t==="mouseover"||t==="pointerover",O=t==="mouseout"||t==="pointerout",z&&l!==Nr&&(gt=l.relatedTarget||l.fromElement)&&(Ua(gt)||gt[Ha]))break t;if((O||z)&&(z=H.window===H?H:(z=H.ownerDocument)?z.defaultView||z.parentWindow:window,O?(gt=l.relatedTarget||l.toElement,O=w,gt=gt?Ua(gt):null,gt!==null&&($t=g(gt),ht=gt.tag,gt!==$t||ht!==5&&ht!==27&&ht!==6)&&(gt=null)):(O=null,gt=w),O!==gt)){if(ht=Qs,$="onMouseLeave",S="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(ht=Vs,$="onPointerLeave",S="onPointerEnter",x="pointer"),$t=O==null?z:Nn(O),E=gt==null?z:Nn(gt),z=new ht($,x+"leave",O,l,H),z.target=$t,z.relatedTarget=E,$=null,Ua(H)===w&&(ht=new ht(S,x+"enter",gt,l,H),ht.target=E,ht.relatedTarget=$t,$=ht),$t=$,O&&gt)e:{for(ht=O,S=gt,x=0,E=ht;E;E=yn(E))x++;for(E=0,$=S;$;$=yn($))E++;for(;0<x-E;)ht=yn(ht),x--;for(;0<E-x;)S=yn(S),E--;for(;x--;){if(ht===S||S!==null&&ht===S.alternate)break e;ht=yn(ht),S=yn(S)}ht=null}else ht=null;O!==null&&jh(L,z,O,ht,!1),gt!==null&&$t!==null&&jh(L,$t,gt,ht,!0)}}t:{if(z=w?Nn(w):window,O=z.nodeName&&z.nodeName.toLowerCase(),O==="select"||O==="input"&&z.type==="file")var ot=tf;else if(Is(z))if(ef)ot=$m;else{ot=Hm;var wt=jm}else O=z.nodeName,!O||O.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?w&&_r(w.elementType)&&(ot=tf):ot=Um;if(ot&&(ot=ot(t,w))){Ps(L,ot,l,H);break t}wt&&wt(t,z,w),t==="focusout"&&w&&z.type==="number"&&w.memoizedProps.value!=null&&Mr(z,"number",z.value)}switch(wt=w?Nn(w):window,t){case"focusin":(Is(wt)||wt.contentEditable==="true")&&(Ka=wt,Zr=w,qn=null);break;case"focusout":qn=Zr=Ka=null;break;case"mousedown":Kr=!0;break;case"contextmenu":case"mouseup":case"dragend":Kr=!1,sf(L,l,H);break;case"selectionchange":if(Ym)break;case"keydown":case"keyup":sf(L,l,H)}var st;if(qr)t:{switch(t){case"compositionstart":var pt="onCompositionStart";break t;case"compositionend":pt="onCompositionEnd";break t;case"compositionupdate":pt="onCompositionUpdate";break t}pt=void 0}else Za?Ws(t,l)&&(pt="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(pt="onCompositionStart");pt&&(Zs&&l.locale!=="ko"&&(Za||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&Za&&(st=Gs()):(Nl=H,Ur="value"in Nl?Nl.value:Nl.textContent,Za=!0)),wt=Cu(w,pt),0<wt.length&&(pt=new Xs(pt,t,null,l,H),L.push({event:pt,listeners:wt}),st?pt.data=st:(st=Fs(l),st!==null&&(pt.data=st)))),(st=Cm?Mm(t,l):_m(t,l))&&(pt=Cu(w,"onBeforeInput"),0<pt.length&&(wt=new Xs("onBeforeInput","beforeinput",null,l,H),L.push({event:wt,listeners:pt}),wt.data=st)),Eg(L,t,w,l,H)}Nh(L,e)})}function bi(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Cu(t,e){for(var l=e+"Capture",a=[];t!==null;){var i=t,u=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||u===null||(i=Bn(t,l),i!=null&&a.unshift(bi(t,i,u)),i=Bn(t,e),i!=null&&a.push(bi(t,i,u))),t.tag===3)return a;t=t.return}return[]}function yn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function jh(t,e,l,a,i){for(var u=e._reactName,s=[];l!==null&&l!==a;){var f=l,m=f.alternate,w=f.stateNode;if(f=f.tag,m!==null&&m===a)break;f!==5&&f!==26&&f!==27||w===null||(m=w,i?(w=Bn(l,u),w!=null&&s.unshift(bi(l,w,m))):i||(w=Bn(l,u),w!=null&&s.push(bi(l,w,m)))),l=l.return}s.length!==0&&t.push({event:e,listeners:s})}var Rg=/\r\n?/g,zg=/\u0000|\uFFFD/g;function Hh(t){return(typeof t=="string"?t:""+t).replace(Rg,`
`).replace(zg,"")}function Uh(t,e){return e=Hh(e),Hh(t)===e}function Mu(){}function Ut(t,e,l,a,i,u){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Qa(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Qa(t,""+a);break;case"className":Hi(t,"class",a);break;case"tabIndex":Hi(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Hi(t,l,a);break;case"style":$s(t,a,u);break;case"data":if(e!=="object"){Hi(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Li(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(l==="formAction"?(e!=="input"&&Ut(t,e,"name",i.name,i,null),Ut(t,e,"formEncType",i.formEncType,i,null),Ut(t,e,"formMethod",i.formMethod,i,null),Ut(t,e,"formTarget",i.formTarget,i,null)):(Ut(t,e,"encType",i.encType,i,null),Ut(t,e,"method",i.method,i,null),Ut(t,e,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Li(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=Mu);break;case"onScroll":a!=null&&Dt("scroll",t);break;case"onScrollEnd":a!=null&&Dt("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(o(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Li(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":Dt("beforetoggle",t),Dt("toggle",t),ji(t,"popover",a);break;case"xlinkActuate":hl(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":hl(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":hl(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":hl(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":hl(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":hl(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":hl(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":hl(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":hl(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":ji(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=nm.get(l)||l,ji(t,l,a))}}function vc(t,e,l,a,i,u){switch(l){case"style":$s(t,a,u);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(o(60));t.innerHTML=l}}break;case"children":typeof a=="string"?Qa(t,a):(typeof a=="number"||typeof a=="bigint")&&Qa(t,""+a);break;case"onScroll":a!=null&&Dt("scroll",t);break;case"onScrollEnd":a!=null&&Dt("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Mu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!zs.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(i=l.endsWith("Capture"),e=l.slice(2,i?l.length-7:void 0),u=t[we]||null,u=u!=null?u[l]:null,typeof u=="function"&&t.removeEventListener(e,u,i),typeof a=="function")){typeof u!="function"&&u!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,i);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):ji(t,l,a)}}}function pe(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Dt("error",t),Dt("load",t);var a=!1,i=!1,u;for(u in l)if(l.hasOwnProperty(u)){var s=l[u];if(s!=null)switch(u){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Ut(t,e,u,s,l,null)}}i&&Ut(t,e,"srcSet",l.srcSet,l,null),a&&Ut(t,e,"src",l.src,l,null);return;case"input":Dt("invalid",t);var f=u=s=i=null,m=null,w=null;for(a in l)if(l.hasOwnProperty(a)){var H=l[a];if(H!=null)switch(a){case"name":i=H;break;case"type":s=H;break;case"checked":m=H;break;case"defaultChecked":w=H;break;case"value":u=H;break;case"defaultValue":f=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(o(137,e));break;default:Ut(t,e,a,H,l,null)}}Bs(t,u,f,m,w,s,i,!1),Ui(t);return;case"select":Dt("invalid",t),a=s=u=null;for(i in l)if(l.hasOwnProperty(i)&&(f=l[i],f!=null))switch(i){case"value":u=f;break;case"defaultValue":s=f;break;case"multiple":a=f;default:Ut(t,e,i,f,l,null)}e=u,l=s,t.multiple=!!a,e!=null?qa(t,!!a,e,!1):l!=null&&qa(t,!!a,l,!0);return;case"textarea":Dt("invalid",t),u=i=a=null;for(s in l)if(l.hasOwnProperty(s)&&(f=l[s],f!=null))switch(s){case"value":a=f;break;case"defaultValue":i=f;break;case"children":u=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(o(91));break;default:Ut(t,e,s,f,l,null)}Hs(t,a,i,u),Ui(t);return;case"option":for(m in l)if(l.hasOwnProperty(m)&&(a=l[m],a!=null))switch(m){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Ut(t,e,m,a,l,null)}return;case"dialog":Dt("beforetoggle",t),Dt("toggle",t),Dt("cancel",t),Dt("close",t);break;case"iframe":case"object":Dt("load",t);break;case"video":case"audio":for(a=0;a<gi.length;a++)Dt(gi[a],t);break;case"image":Dt("error",t),Dt("load",t);break;case"details":Dt("toggle",t);break;case"embed":case"source":case"link":Dt("error",t),Dt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in l)if(l.hasOwnProperty(w)&&(a=l[w],a!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Ut(t,e,w,a,l,null)}return;default:if(_r(e)){for(H in l)l.hasOwnProperty(H)&&(a=l[H],a!==void 0&&vc(t,e,H,a,l,void 0));return}}for(f in l)l.hasOwnProperty(f)&&(a=l[f],a!=null&&Ut(t,e,f,a,l,null))}function Og(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,u=null,s=null,f=null,m=null,w=null,H=null;for(O in l){var L=l[O];if(l.hasOwnProperty(O)&&L!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":m=L;default:a.hasOwnProperty(O)||Ut(t,e,O,null,a,L)}}for(var z in a){var O=a[z];if(L=l[z],a.hasOwnProperty(z)&&(O!=null||L!=null))switch(z){case"type":u=O;break;case"name":i=O;break;case"checked":w=O;break;case"defaultChecked":H=O;break;case"value":s=O;break;case"defaultValue":f=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(o(137,e));break;default:O!==L&&Ut(t,e,z,O,a,L)}}Cr(t,s,f,m,w,H,u,i);return;case"select":O=s=f=z=null;for(u in l)if(m=l[u],l.hasOwnProperty(u)&&m!=null)switch(u){case"value":break;case"multiple":O=m;default:a.hasOwnProperty(u)||Ut(t,e,u,null,a,m)}for(i in a)if(u=a[i],m=l[i],a.hasOwnProperty(i)&&(u!=null||m!=null))switch(i){case"value":z=u;break;case"defaultValue":f=u;break;case"multiple":s=u;default:u!==m&&Ut(t,e,i,u,a,m)}e=f,l=s,a=O,z!=null?qa(t,!!l,z,!1):!!a!=!!l&&(e!=null?qa(t,!!l,e,!0):qa(t,!!l,l?[]:"",!1));return;case"textarea":O=z=null;for(f in l)if(i=l[f],l.hasOwnProperty(f)&&i!=null&&!a.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:Ut(t,e,f,null,a,i)}for(s in a)if(i=a[s],u=l[s],a.hasOwnProperty(s)&&(i!=null||u!=null))switch(s){case"value":z=i;break;case"defaultValue":O=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(o(91));break;default:i!==u&&Ut(t,e,s,i,a,u)}js(t,z,O);return;case"option":for(var gt in l)if(z=l[gt],l.hasOwnProperty(gt)&&z!=null&&!a.hasOwnProperty(gt))switch(gt){case"selected":t.selected=!1;break;default:Ut(t,e,gt,null,a,z)}for(m in a)if(z=a[m],O=l[m],a.hasOwnProperty(m)&&z!==O&&(z!=null||O!=null))switch(m){case"selected":t.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Ut(t,e,m,z,a,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ht in l)z=l[ht],l.hasOwnProperty(ht)&&z!=null&&!a.hasOwnProperty(ht)&&Ut(t,e,ht,null,a,z);for(w in a)if(z=a[w],O=l[w],a.hasOwnProperty(w)&&z!==O&&(z!=null||O!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(o(137,e));break;default:Ut(t,e,w,z,a,O)}return;default:if(_r(e)){for(var $t in l)z=l[$t],l.hasOwnProperty($t)&&z!==void 0&&!a.hasOwnProperty($t)&&vc(t,e,$t,void 0,a,z);for(H in a)z=a[H],O=l[H],!a.hasOwnProperty(H)||z===O||z===void 0&&O===void 0||vc(t,e,H,z,a,O);return}}for(var S in l)z=l[S],l.hasOwnProperty(S)&&z!=null&&!a.hasOwnProperty(S)&&Ut(t,e,S,null,a,z);for(L in a)z=a[L],O=l[L],!a.hasOwnProperty(L)||z===O||z==null&&O==null||Ut(t,e,L,z,a,O)}var yc=null,xc=null;function _u(t){return t.nodeType===9?t:t.ownerDocument}function $h(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Lh(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Ac(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Sc=null;function kg(){var t=window.event;return t&&t.type==="popstate"?t===Sc?!1:(Sc=t,!0):(Sc=null,!1)}var Yh=typeof setTimeout=="function"?setTimeout:void 0,Cg=typeof clearTimeout=="function"?clearTimeout:void 0,Gh=typeof Promise=="function"?Promise:void 0,Mg=typeof queueMicrotask=="function"?queueMicrotask:typeof Gh<"u"?function(t){return Gh.resolve(null).then(t).catch(_g)}:Yh;function _g(t){setTimeout(function(){throw t})}function Wl(t){return t==="head"}function qh(t,e){var l=e,a=0,i=0;do{var u=l.nextSibling;if(t.removeChild(l),u&&u.nodeType===8)if(l=u.data,l==="/$"){if(0<a&&8>a){l=a;var s=t.ownerDocument;if(l&1&&vi(s.documentElement),l&2&&vi(s.body),l&4)for(l=s.head,vi(l),s=l.firstChild;s;){var f=s.nextSibling,m=s.nodeName;s[_n]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&s.rel.toLowerCase()==="stylesheet"||l.removeChild(s),s=f}}if(i===0){t.removeChild(u),Di(e);return}i--}else l==="$"||l==="$?"||l==="$!"?i++:a=l.charCodeAt(0)-48;else a=0;l=u}while(l);Di(e)}function Ec(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Ec(l),Rr(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function Ng(t,e,l,a){for(;t.nodeType===1;){var i=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[_n])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Ie(t.nextSibling),t===null)break}return null}function Bg(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Ie(t.nextSibling),t===null))return null;return t}function wc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function jg(t,e){var l=t.ownerDocument;if(t.data!=="$?"||l.readyState==="complete")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Ie(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Tc=null;function Qh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"){if(e===0)return t;e--}else l==="/$"&&e++}t=t.previousSibling}return null}function Xh(t,e,l){switch(e=_u(l),t){case"html":if(t=e.documentElement,!t)throw Error(o(452));return t;case"head":if(t=e.head,!t)throw Error(o(453));return t;case"body":if(t=e.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function vi(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Rr(t)}var Ze=new Map,Vh=new Set;function Nu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Rl=B.d;B.d={f:Hg,r:Ug,D:$g,C:Lg,L:Yg,m:Gg,X:Qg,S:qg,M:Xg};function Hg(){var t=Rl.f(),e=Tu();return t||e}function Ug(t){var e=$a(t);e!==null&&e.tag===5&&e.type==="form"?dd(e):Rl.r(t)}var xn=typeof document>"u"?null:document;function Zh(t,e,l){var a=xn;if(a&&typeof e=="string"&&e){var i=Le(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof l=="string"&&(i+='[crossorigin="'+l+'"]'),Vh.has(i)||(Vh.add(i),t={rel:t,crossOrigin:l,href:e},a.querySelector(i)===null&&(e=a.createElement("link"),pe(e,"link",t),ue(e),a.head.appendChild(e)))}}function $g(t){Rl.D(t),Zh("dns-prefetch",t,null)}function Lg(t,e){Rl.C(t,e),Zh("preconnect",t,e)}function Yg(t,e,l){Rl.L(t,e,l);var a=xn;if(a&&t&&e){var i='link[rel="preload"][as="'+Le(e)+'"]';e==="image"&&l&&l.imageSrcSet?(i+='[imagesrcset="'+Le(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(i+='[imagesizes="'+Le(l.imageSizes)+'"]')):i+='[href="'+Le(t)+'"]';var u=i;switch(e){case"style":u=An(t);break;case"script":u=Sn(t)}Ze.has(u)||(t=R({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Ze.set(u,t),a.querySelector(i)!==null||e==="style"&&a.querySelector(yi(u))||e==="script"&&a.querySelector(xi(u))||(e=a.createElement("link"),pe(e,"link",t),ue(e),a.head.appendChild(e)))}}function Gg(t,e){Rl.m(t,e);var l=xn;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+Le(a)+'"][href="'+Le(t)+'"]',u=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Sn(t)}if(!Ze.has(u)&&(t=R({rel:"modulepreload",href:t},e),Ze.set(u,t),l.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(xi(u)))return}a=l.createElement("link"),pe(a,"link",t),ue(a),l.head.appendChild(a)}}}function qg(t,e,l){Rl.S(t,e,l);var a=xn;if(a&&t){var i=La(a).hoistableStyles,u=An(t);e=e||"default";var s=i.get(u);if(!s){var f={loading:0,preload:null};if(s=a.querySelector(yi(u)))f.loading=5;else{t=R({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Ze.get(u))&&Dc(t,l);var m=s=a.createElement("link");ue(m),pe(m,"link",t),m._p=new Promise(function(w,H){m.onload=w,m.onerror=H}),m.addEventListener("load",function(){f.loading|=1}),m.addEventListener("error",function(){f.loading|=2}),f.loading|=4,Bu(s,e,a)}s={type:"stylesheet",instance:s,count:1,state:f},i.set(u,s)}}}function Qg(t,e){Rl.X(t,e);var l=xn;if(l&&t){var a=La(l).hoistableScripts,i=Sn(t),u=a.get(i);u||(u=l.querySelector(xi(i)),u||(t=R({src:t,async:!0},e),(e=Ze.get(i))&&Rc(t,e),u=l.createElement("script"),ue(u),pe(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(i,u))}}function Xg(t,e){Rl.M(t,e);var l=xn;if(l&&t){var a=La(l).hoistableScripts,i=Sn(t),u=a.get(i);u||(u=l.querySelector(xi(i)),u||(t=R({src:t,async:!0,type:"module"},e),(e=Ze.get(i))&&Rc(t,e),u=l.createElement("script"),ue(u),pe(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(i,u))}}function Kh(t,e,l,a){var i=(i=J.current)?Nu(i):null;if(!i)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=An(l.href),l=La(i).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=An(l.href);var u=La(i).hoistableStyles,s=u.get(t);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,s),(u=i.querySelector(yi(t)))&&!u._p&&(s.instance=u,s.state.loading=5),Ze.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Ze.set(t,l),u||Vg(i,t,l,s.state))),e&&a===null)throw Error(o(528,""));return s}if(e&&a!==null)throw Error(o(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Sn(l),l=La(i).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function An(t){return'href="'+Le(t)+'"'}function yi(t){return'link[rel="stylesheet"]['+t+"]"}function Jh(t){return R({},t,{"data-precedence":t.precedence,precedence:null})}function Vg(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),pe(e,"link",l),ue(e),t.head.appendChild(e))}function Sn(t){return'[src="'+Le(t)+'"]'}function xi(t){return"script[async]"+t}function Wh(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+Le(l.href)+'"]');if(a)return e.instance=a,ue(a),a;var i=R({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),ue(a),pe(a,"style",i),Bu(a,l.precedence,t),e.instance=a;case"stylesheet":i=An(l.href);var u=t.querySelector(yi(i));if(u)return e.state.loading|=4,e.instance=u,ue(u),u;a=Jh(l),(i=Ze.get(i))&&Dc(a,i),u=(t.ownerDocument||t).createElement("link"),ue(u);var s=u;return s._p=new Promise(function(f,m){s.onload=f,s.onerror=m}),pe(u,"link",a),e.state.loading|=4,Bu(u,l.precedence,t),e.instance=u;case"script":return u=Sn(l.src),(i=t.querySelector(xi(u)))?(e.instance=i,ue(i),i):(a=l,(i=Ze.get(u))&&(a=R({},l),Rc(a,i)),t=t.ownerDocument||t,i=t.createElement("script"),ue(i),pe(i,"link",a),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Bu(a,l.precedence,t));return e.instance}function Bu(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,u=i,s=0;s<a.length;s++){var f=a[s];if(f.dataset.precedence===e)u=f;else if(u!==i)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function Dc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Rc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var ju=null;function Fh(t,e,l){if(ju===null){var a=new Map,i=ju=new Map;i.set(l,a)}else i=ju,a=i.get(l),a||(a=new Map,i.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),i=0;i<l.length;i++){var u=l[i];if(!(u[_n]||u[be]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var s=u.getAttribute(e)||"";s=t+s;var f=a.get(s);f?f.push(u):a.set(s,[u])}}return a}function Ih(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function Zg(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Ph(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Ai=null;function Kg(){}function Jg(t,e,l){if(Ai===null)throw Error(o(475));var a=Ai;if(e.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var i=An(l.href),u=t.querySelector(yi(i));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=Hu.bind(a),t.then(a,a)),e.state.loading|=4,e.instance=u,ue(u);return}u=t.ownerDocument||t,l=Jh(l),(i=Ze.get(i))&&Dc(l,i),u=u.createElement("link"),ue(u);var s=u;s._p=new Promise(function(f,m){s.onload=f,s.onerror=m}),pe(u,"link",l),e.instance=u}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(a.count++,e=Hu.bind(a),t.addEventListener("load",e),t.addEventListener("error",e))}}function Wg(){if(Ai===null)throw Error(o(475));var t=Ai;return t.stylesheets&&t.count===0&&zc(t,t.stylesheets),0<t.count?function(e){var l=setTimeout(function(){if(t.stylesheets&&zc(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(l)}}:null}function Hu(){if(this.count--,this.count===0){if(this.stylesheets)zc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Uu=null;function zc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Uu=new Map,e.forEach(Fg,t),Uu=null,Hu.call(t))}function Fg(t,e){if(!(e.state.loading&4)){var l=Uu.get(t);if(l)var a=l.get(null);else{l=new Map,Uu.set(t,l);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<i.length;u++){var s=i[u];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(l.set(s.dataset.precedence,s),a=s)}a&&l.set(null,a)}i=e.instance,s=i.getAttribute("data-precedence"),u=l.get(s)||a,u===a&&l.set(null,i),l.set(s,i),this.count++,a=Hu.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),u?u.parentNode.insertBefore(i,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var Si={$$typeof:V,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function Ig(t,e,l,a,i,u,s,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Er(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Er(0),this.hiddenUpdates=Er(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=u,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function t0(t,e,l,a,i,u,s,f,m,w,H,L){return t=new Ig(t,e,l,s,f,m,w,L),e=1,u===!0&&(e|=24),u=ke(3,null,null,e),t.current=u,u.stateNode=t,e=oo(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:a,isDehydrated:l,cache:e},ho(u),t}function e0(t){return t?(t=Ia,t):Ia}function l0(t,e,l,a,i,u){i=e0(i),a.context===null?a.context=i:a.pendingContext=i,a=Hl(e),a.payload={element:l},u=u===void 0?null:u,u!==null&&(a.callback=u),l=Ul(t,a,e),l!==null&&(Be(l,t,e),In(l,t,e))}function a0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function Oc(t,e){a0(t,e),(t=t.alternate)&&a0(t,e)}function n0(t){if(t.tag===13){var e=Fa(t,67108864);e!==null&&Be(e,t,67108864),Oc(t,67108864)}}var $u=!0;function Pg(t,e,l,a){var i=D.T;D.T=null;var u=B.p;try{B.p=2,kc(t,e,l,a)}finally{B.p=u,D.T=i}}function tb(t,e,l,a){var i=D.T;D.T=null;var u=B.p;try{B.p=8,kc(t,e,l,a)}finally{B.p=u,D.T=i}}function kc(t,e,l,a){if($u){var i=Cc(a);if(i===null)bc(t,e,a,Lu,l),u0(t,a);else if(lb(i,t,e,l,a))a.stopPropagation();else if(u0(t,a),e&4&&-1<eb.indexOf(t)){for(;i!==null;){var u=$a(i);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var s=dl(u.pendingLanes);if(s!==0){var f=u;for(f.pendingLanes|=2,f.entangledLanes|=2;s;){var m=1<<31-Ae(s);f.entanglements[1]|=m,s&=~m}ol(u),(Bt&6)===0&&(Eu=qt()+500,mi(0))}}break;case 13:f=Fa(u,2),f!==null&&Be(f,u,2),Tu(),Oc(u,2)}if(u=Cc(a),u===null&&bc(t,e,a,Lu,l),u===i)break;i=u}i!==null&&a.stopPropagation()}else bc(t,e,a,null,l)}}function Cc(t){return t=Br(t),Mc(t)}var Lu=null;function Mc(t){if(Lu=null,t=Ua(t),t!==null){var e=g(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=y(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Lu=t,null}function i0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ge()){case ie:return 2;case He:return 8;case Ee:case ll:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var _c=!1,Fl=null,Il=null,Pl=null,Ei=new Map,wi=new Map,ta=[],eb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function u0(t,e){switch(t){case"focusin":case"focusout":Fl=null;break;case"dragenter":case"dragleave":Il=null;break;case"mouseover":case"mouseout":Pl=null;break;case"pointerover":case"pointerout":Ei.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":wi.delete(e.pointerId)}}function Ti(t,e,l,a,i,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:u,targetContainers:[i]},e!==null&&(e=$a(e),e!==null&&n0(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function lb(t,e,l,a,i){switch(e){case"focusin":return Fl=Ti(Fl,t,e,l,a,i),!0;case"dragenter":return Il=Ti(Il,t,e,l,a,i),!0;case"mouseover":return Pl=Ti(Pl,t,e,l,a,i),!0;case"pointerover":var u=i.pointerId;return Ei.set(u,Ti(Ei.get(u)||null,t,e,l,a,i)),!0;case"gotpointercapture":return u=i.pointerId,wi.set(u,Ti(wi.get(u)||null,t,e,l,a,i)),!0}return!1}function r0(t){var e=Ua(t.target);if(e!==null){var l=g(e);if(l!==null){if(e=l.tag,e===13){if(e=y(l),e!==null){t.blockedOn=e,Jp(t.priority,function(){if(l.tag===13){var a=Ne();a=wr(a);var i=Fa(l,a);i!==null&&Be(i,l,a),Oc(l,a)}});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=Cc(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);Nr=a,l.target.dispatchEvent(a),Nr=null}else return e=$a(l),e!==null&&n0(e),t.blockedOn=l,!1;e.shift()}return!0}function o0(t,e,l){Yu(t)&&l.delete(e)}function ab(){_c=!1,Fl!==null&&Yu(Fl)&&(Fl=null),Il!==null&&Yu(Il)&&(Il=null),Pl!==null&&Yu(Pl)&&(Pl=null),Ei.forEach(o0),wi.forEach(o0)}function Gu(t,e){t.blockedOn===e&&(t.blockedOn=null,_c||(_c=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,ab)))}var qu=null;function c0(t){qu!==t&&(qu=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){qu===t&&(qu=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],i=t[e+2];if(typeof a!="function"){if(Mc(a||l)===null)continue;break}var u=$a(l);u!==null&&(t.splice(e,3),e-=3,Mo(u,{pending:!0,data:i,method:l.method,action:a},a,i))}}))}function Di(t){function e(m){return Gu(m,t)}Fl!==null&&Gu(Fl,t),Il!==null&&Gu(Il,t),Pl!==null&&Gu(Pl,t),Ei.forEach(e),wi.forEach(e);for(var l=0;l<ta.length;l++){var a=ta[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<ta.length&&(l=ta[0],l.blockedOn===null);)r0(l),l.blockedOn===null&&ta.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var i=l[a],u=l[a+1],s=i[we]||null;if(typeof u=="function")s||c0(l);else if(s){var f=null;if(u&&u.hasAttribute("formAction")){if(i=u,s=u[we]||null)f=s.formAction;else if(Mc(i)!==null)continue}else f=s.action;typeof f=="function"?l[a+1]=f:(l.splice(a,3),a-=3),c0(l)}}}function Nc(t){this._internalRoot=t}Qu.prototype.render=Nc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(o(409));var l=e.current,a=Ne();l0(l,a,t,e,null,null)},Qu.prototype.unmount=Nc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;l0(t.current,2,null,t,null,null),Tu(),e[Ha]=null}};function Qu(t){this._internalRoot=t}Qu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ts();t={blockedOn:null,target:t,priority:e};for(var l=0;l<ta.length&&e!==0&&e<ta[l].priority;l++);ta.splice(l,0,t),l===0&&r0(t)}};var s0=r.version;if(s0!=="19.1.0")throw Error(o(527,s0,"19.1.0"));B.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=A(e),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var nb={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xu.isDisabled&&Xu.supportsFiber)try{Ml=Xu.inject(nb),xe=Xu}catch{}}return zi.createRoot=function(t,e){if(!h(t))throw Error(o(299));var l=!1,a="",i=Dd,u=Rd,s=zd,f=null;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(f=e.unstable_transitionCallbacks)),e=t0(t,1,!1,null,null,l,a,i,u,s,f,null),t[Ha]=e.current,gc(t),new Nc(e)},zi.hydrateRoot=function(t,e,l){if(!h(t))throw Error(o(299));var a=!1,i="",u=Dd,s=Rd,f=zd,m=null,w=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(i=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(s=l.onCaughtError),l.onRecoverableError!==void 0&&(f=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(m=l.unstable_transitionCallbacks),l.formState!==void 0&&(w=l.formState)),e=t0(t,1,!0,e,l??null,a,i,u,s,f,m,w),e.context=e0(null),l=e.current,a=Ne(),a=wr(a),i=Hl(a),i.callback=null,Ul(l,i,a),l=a,e.current.lanes=l,Mn(e,l),ol(e),t[Ha]=e.current,gc(t),new Qu(e)},zi.version="19.1.0",zi}var x0;function hb(){if(x0)return Hc.exports;x0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),Hc.exports=db(),Hc.exports}var Z0=hb();const Ke=os(Z0);var fe=function(){return fe=Object.assign||function(r){for(var c,o=1,h=arguments.length;o<h;o++){c=arguments[o];for(var g in c)Object.prototype.hasOwnProperty.call(c,g)&&(r[g]=c[g])}return r},fe.apply(this,arguments)};function Ci(n,r,c){if(c||arguments.length===2)for(var o=0,h=r.length,g;o<h;o++)(g||!(o in r))&&(g||(g=Array.prototype.slice.call(r,0,o)),g[o]=r[o]);return n.concat(g||Array.prototype.slice.call(r))}var Qt="-ms-",ki="-moz-",Mt="-webkit-",K0="comm",fr="rule",ss="decl",pb="@import",J0="@keyframes",mb="@layer",W0=Math.abs,fs=String.fromCharCode,Jc=Object.assign;function gb(n,r){return se(n,0)^45?(((r<<2^se(n,0))<<2^se(n,1))<<2^se(n,2))<<2^se(n,3):0}function F0(n){return n.trim()}function Ol(n,r){return(n=r.exec(n))?n[0]:n}function St(n,r,c){return n.replace(r,c)}function Iu(n,r,c){return n.indexOf(r,c)}function se(n,r){return n.charCodeAt(r)|0}function Dn(n,r,c){return n.slice(r,c)}function cl(n){return n.length}function I0(n){return n.length}function Oi(n,r){return r.push(n),n}function bb(n,r){return n.map(r).join("")}function A0(n,r){return n.filter(function(c){return!Ol(c,r)})}var dr=1,Rn=1,P0=0,Je=0,ee=0,Cn="";function hr(n,r,c,o,h,g,y,T){return{value:n,root:r,parent:c,type:o,props:h,children:g,line:dr,column:Rn,length:y,return:"",siblings:T}}function la(n,r){return Jc(hr("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},r)}function En(n){for(;n.root;)n=la(n.root,{children:[n]});Oi(n,n.siblings)}function vb(){return ee}function yb(){return ee=Je>0?se(Cn,--Je):0,Rn--,ee===10&&(Rn=1,dr--),ee}function Pe(){return ee=Je<P0?se(Cn,Je++):0,Rn++,ee===10&&(Rn=1,dr++),ee}function za(){return se(Cn,Je)}function Pu(){return Je}function pr(n,r){return Dn(Cn,n,r)}function Wc(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function xb(n){return dr=Rn=1,P0=cl(Cn=n),Je=0,[]}function Ab(n){return Cn="",n}function Yc(n){return F0(pr(Je-1,Fc(n===91?n+2:n===40?n+1:n)))}function Sb(n){for(;(ee=za())&&ee<33;)Pe();return Wc(n)>2||Wc(ee)>3?"":" "}function Eb(n,r){for(;--r&&Pe()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return pr(n,Pu()+(r<6&&za()==32&&Pe()==32))}function Fc(n){for(;Pe();)switch(ee){case n:return Je;case 34:case 39:n!==34&&n!==39&&Fc(ee);break;case 40:n===41&&Fc(n);break;case 92:Pe();break}return Je}function wb(n,r){for(;Pe()&&n+ee!==57;)if(n+ee===84&&za()===47)break;return"/*"+pr(r,Je-1)+"*"+fs(n===47?n:Pe())}function Tb(n){for(;!Wc(za());)Pe();return pr(n,Je)}function Db(n){return Ab(tr("",null,null,null,[""],n=xb(n),0,[0],n))}function tr(n,r,c,o,h,g,y,T,A){for(var v=0,R=0,C=y,Y=0,tt=0,W=0,ut=1,I=1,P=1,lt=0,V="",at=h,M=g,et=o,F=V;I;)switch(W=lt,lt=Pe()){case 40:if(W!=108&&se(F,C-1)==58){Iu(F+=St(Yc(lt),"&","&\f"),"&\f",W0(v?T[v-1]:0))!=-1&&(P=-1);break}case 34:case 39:case 91:F+=Yc(lt);break;case 9:case 10:case 13:case 32:F+=Sb(W);break;case 92:F+=Eb(Pu()-1,7);continue;case 47:switch(za()){case 42:case 47:Oi(Rb(wb(Pe(),Pu()),r,c,A),A);break;default:F+="/"}break;case 123*ut:T[v++]=cl(F)*P;case 125*ut:case 59:case 0:switch(lt){case 0:case 125:I=0;case 59+R:P==-1&&(F=St(F,/\f/g,"")),tt>0&&cl(F)-C&&Oi(tt>32?E0(F+";",o,c,C-1,A):E0(St(F," ","")+";",o,c,C-2,A),A);break;case 59:F+=";";default:if(Oi(et=S0(F,r,c,v,R,h,T,V,at=[],M=[],C,g),g),lt===123)if(R===0)tr(F,r,et,et,at,g,C,T,M);else switch(Y===99&&se(F,3)===110?100:Y){case 100:case 108:case 109:case 115:tr(n,et,et,o&&Oi(S0(n,et,et,0,0,h,T,V,h,at=[],C,M),M),h,M,C,T,o?at:M);break;default:tr(F,et,et,et,[""],M,0,T,M)}}v=R=tt=0,ut=P=1,V=F="",C=y;break;case 58:C=1+cl(F),tt=W;default:if(ut<1){if(lt==123)--ut;else if(lt==125&&ut++==0&&yb()==125)continue}switch(F+=fs(lt),lt*ut){case 38:P=R>0?1:(F+="\f",-1);break;case 44:T[v++]=(cl(F)-1)*P,P=1;break;case 64:za()===45&&(F+=Yc(Pe())),Y=za(),R=C=cl(V=F+=Tb(Pu())),lt++;break;case 45:W===45&&cl(F)==2&&(ut=0)}}return g}function S0(n,r,c,o,h,g,y,T,A,v,R,C){for(var Y=h-1,tt=h===0?g:[""],W=I0(tt),ut=0,I=0,P=0;ut<o;++ut)for(var lt=0,V=Dn(n,Y+1,Y=W0(I=y[ut])),at=n;lt<W;++lt)(at=F0(I>0?tt[lt]+" "+V:St(V,/&\f/g,tt[lt])))&&(A[P++]=at);return hr(n,r,c,h===0?fr:T,A,v,R,C)}function Rb(n,r,c,o){return hr(n,r,c,K0,fs(vb()),Dn(n,2,-2),0,o)}function E0(n,r,c,o,h){return hr(n,r,c,ss,Dn(n,0,o),Dn(n,o+1,-1),o,h)}function tp(n,r,c){switch(gb(n,r)){case 5103:return Mt+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Mt+n+n;case 4789:return ki+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Mt+n+ki+n+Qt+n+n;case 5936:switch(se(n,r+11)){case 114:return Mt+n+Qt+St(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Mt+n+Qt+St(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Mt+n+Qt+St(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Mt+n+Qt+n+n;case 6165:return Mt+n+Qt+"flex-"+n+n;case 5187:return Mt+n+St(n,/(\w+).+(:[^]+)/,Mt+"box-$1$2"+Qt+"flex-$1$2")+n;case 5443:return Mt+n+Qt+"flex-item-"+St(n,/flex-|-self/g,"")+(Ol(n,/flex-|baseline/)?"":Qt+"grid-row-"+St(n,/flex-|-self/g,""))+n;case 4675:return Mt+n+Qt+"flex-line-pack"+St(n,/align-content|flex-|-self/g,"")+n;case 5548:return Mt+n+Qt+St(n,"shrink","negative")+n;case 5292:return Mt+n+Qt+St(n,"basis","preferred-size")+n;case 6060:return Mt+"box-"+St(n,"-grow","")+Mt+n+Qt+St(n,"grow","positive")+n;case 4554:return Mt+St(n,/([^-])(transform)/g,"$1"+Mt+"$2")+n;case 6187:return St(St(St(n,/(zoom-|grab)/,Mt+"$1"),/(image-set)/,Mt+"$1"),n,"")+n;case 5495:case 3959:return St(n,/(image-set\([^]*)/,Mt+"$1$`$1");case 4968:return St(St(n,/(.+:)(flex-)?(.*)/,Mt+"box-pack:$3"+Qt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Mt+n+n;case 4200:if(!Ol(n,/flex-|baseline/))return Qt+"grid-column-align"+Dn(n,r)+n;break;case 2592:case 3360:return Qt+St(n,"template-","")+n;case 4384:case 3616:return c&&c.some(function(o,h){return r=h,Ol(o.props,/grid-\w+-end/)})?~Iu(n+(c=c[r].value),"span",0)?n:Qt+St(n,"-start","")+n+Qt+"grid-row-span:"+(~Iu(c,"span",0)?Ol(c,/\d+/):+Ol(c,/\d+/)-+Ol(n,/\d+/))+";":Qt+St(n,"-start","")+n;case 4896:case 4128:return c&&c.some(function(o){return Ol(o.props,/grid-\w+-start/)})?n:Qt+St(St(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return St(n,/(.+)-inline(.+)/,Mt+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(cl(n)-1-r>6)switch(se(n,r+1)){case 109:if(se(n,r+4)!==45)break;case 102:return St(n,/(.+:)(.+)-([^]+)/,"$1"+Mt+"$2-$3$1"+ki+(se(n,r+3)==108?"$3":"$2-$3"))+n;case 115:return~Iu(n,"stretch",0)?tp(St(n,"stretch","fill-available"),r,c)+n:n}break;case 5152:case 5920:return St(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,h,g,y,T,A,v){return Qt+h+":"+g+v+(y?Qt+h+"-span:"+(T?A:+A-+g)+v:"")+n});case 4949:if(se(n,r+6)===121)return St(n,":",":"+Mt)+n;break;case 6444:switch(se(n,se(n,14)===45?18:11)){case 120:return St(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Mt+(se(n,14)===45?"inline-":"")+"box$3$1"+Mt+"$2$3$1"+Qt+"$2box$3")+n;case 100:return St(n,":",":"+Qt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return St(n,"scroll-","scroll-snap-")+n}return n}function ar(n,r){for(var c="",o=0;o<n.length;o++)c+=r(n[o],o,n,r)||"";return c}function zb(n,r,c,o){switch(n.type){case mb:if(n.children.length)break;case pb:case ss:return n.return=n.return||n.value;case K0:return"";case J0:return n.return=n.value+"{"+ar(n.children,o)+"}";case fr:if(!cl(n.value=n.props.join(",")))return""}return cl(c=ar(n.children,o))?n.return=n.value+"{"+c+"}":""}function Ob(n){var r=I0(n);return function(c,o,h,g){for(var y="",T=0;T<r;T++)y+=n[T](c,o,h,g)||"";return y}}function kb(n){return function(r){r.root||(r=r.return)&&n(r)}}function Cb(n,r,c,o){if(n.length>-1&&!n.return)switch(n.type){case ss:n.return=tp(n.value,n.length,c);return;case J0:return ar([la(n,{value:St(n.value,"@","@"+Mt)})],o);case fr:if(n.length)return bb(c=n.props,function(h){switch(Ol(h,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":En(la(n,{props:[St(h,/:(read-\w+)/,":"+ki+"$1")]})),En(la(n,{props:[h]})),Jc(n,{props:A0(c,o)});break;case"::placeholder":En(la(n,{props:[St(h,/:(plac\w+)/,":"+Mt+"input-$1")]})),En(la(n,{props:[St(h,/:(plac\w+)/,":"+ki+"$1")]})),En(la(n,{props:[St(h,/:(plac\w+)/,Qt+"input-$1")]})),En(la(n,{props:[h]})),Jc(n,{props:A0(c,o)});break}return""})}}var Mb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},je={},zn=typeof process<"u"&&je!==void 0&&(je.REACT_APP_SC_ATTR||je.SC_ATTR)||"data-styled",ep="active",lp="data-styled-version",mr="6.1.17",ds=`/*!sc*/
`,nr=typeof window<"u"&&"HTMLElement"in window,_b=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&je!==void 0&&je.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&je.REACT_APP_SC_DISABLE_SPEEDY!==""?je.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&je.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&je!==void 0&&je.SC_DISABLE_SPEEDY!==void 0&&je.SC_DISABLE_SPEEDY!==""&&je.SC_DISABLE_SPEEDY!=="false"&&je.SC_DISABLE_SPEEDY),Nb={},gr=Object.freeze([]),On=Object.freeze({});function ap(n,r,c){return c===void 0&&(c=On),n.theme!==c.theme&&n.theme||r||c.theme}var np=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Bb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,jb=/(^-|-$)/g;function w0(n){return n.replace(Bb,"-").replace(jb,"")}var Hb=/(a)(d)/gi,Vu=52,T0=function(n){return String.fromCharCode(n+(n>25?39:97))};function Ic(n){var r,c="";for(r=Math.abs(n);r>Vu;r=r/Vu|0)c=T0(r%Vu)+c;return(T0(r%Vu)+c).replace(Hb,"$1-$2")}var Gc,ip=5381,Tn=function(n,r){for(var c=r.length;c;)n=33*n^r.charCodeAt(--c);return n},up=function(n){return Tn(ip,n)};function rp(n){return Ic(up(n)>>>0)}function Ub(n){return n.displayName||n.name||"Component"}function qc(n){return typeof n=="string"&&!0}var op=typeof Symbol=="function"&&Symbol.for,cp=op?Symbol.for("react.memo"):60115,$b=op?Symbol.for("react.forward_ref"):60112,Lb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Yb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},sp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Gb=((Gc={})[$b]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Gc[cp]=sp,Gc);function D0(n){return("type"in(r=n)&&r.type.$$typeof)===cp?sp:"$$typeof"in n?Gb[n.$$typeof]:Lb;var r}var qb=Object.defineProperty,Qb=Object.getOwnPropertyNames,R0=Object.getOwnPropertySymbols,Xb=Object.getOwnPropertyDescriptor,Vb=Object.getPrototypeOf,z0=Object.prototype;function fp(n,r,c){if(typeof r!="string"){if(z0){var o=Vb(r);o&&o!==z0&&fp(n,o,c)}var h=Qb(r);R0&&(h=h.concat(R0(r)));for(var g=D0(n),y=D0(r),T=0;T<h.length;++T){var A=h[T];if(!(A in Yb||c&&c[A]||y&&A in y||g&&A in g)){var v=Xb(r,A);try{qb(n,A,v)}catch{}}}}return n}function Oa(n){return typeof n=="function"}function hs(n){return typeof n=="object"&&"styledComponentId"in n}function Da(n,r){return n&&r?"".concat(n," ").concat(r):n||r||""}function Pc(n,r){if(n.length===0)return"";for(var c=n[0],o=1;o<n.length;o++)c+=n[o];return c}function Mi(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function ts(n,r,c){if(c===void 0&&(c=!1),!c&&!Mi(n)&&!Array.isArray(n))return r;if(Array.isArray(r))for(var o=0;o<r.length;o++)n[o]=ts(n[o],r[o]);else if(Mi(r))for(var o in r)n[o]=ts(n[o],r[o]);return n}function ps(n,r){Object.defineProperty(n,"toString",{value:r})}function ka(n){for(var r=[],c=1;c<arguments.length;c++)r[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var Zb=function(){function n(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return n.prototype.indexOfGroup=function(r){for(var c=0,o=0;o<r;o++)c+=this.groupSizes[o];return c},n.prototype.insertRules=function(r,c){if(r>=this.groupSizes.length){for(var o=this.groupSizes,h=o.length,g=h;r>=g;)if((g<<=1)<0)throw ka(16,"".concat(r));this.groupSizes=new Uint32Array(g),this.groupSizes.set(o),this.length=g;for(var y=h;y<g;y++)this.groupSizes[y]=0}for(var T=this.indexOfGroup(r+1),A=(y=0,c.length);y<A;y++)this.tag.insertRule(T,c[y])&&(this.groupSizes[r]++,T++)},n.prototype.clearGroup=function(r){if(r<this.length){var c=this.groupSizes[r],o=this.indexOfGroup(r),h=o+c;this.groupSizes[r]=0;for(var g=o;g<h;g++)this.tag.deleteRule(o)}},n.prototype.getGroup=function(r){var c="";if(r>=this.length||this.groupSizes[r]===0)return c;for(var o=this.groupSizes[r],h=this.indexOfGroup(r),g=h+o,y=h;y<g;y++)c+="".concat(this.tag.getRule(y)).concat(ds);return c},n}(),er=new Map,ir=new Map,lr=1,Zu=function(n){if(er.has(n))return er.get(n);for(;ir.has(lr);)lr++;var r=lr++;return er.set(n,r),ir.set(r,n),r},Kb=function(n,r){lr=r+1,er.set(n,r),ir.set(r,n)},Jb="style[".concat(zn,"][").concat(lp,'="').concat(mr,'"]'),Wb=new RegExp("^".concat(zn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Fb=function(n,r,c){for(var o,h=c.split(","),g=0,y=h.length;g<y;g++)(o=h[g])&&n.registerName(r,o)},Ib=function(n,r){for(var c,o=((c=r.textContent)!==null&&c!==void 0?c:"").split(ds),h=[],g=0,y=o.length;g<y;g++){var T=o[g].trim();if(T){var A=T.match(Wb);if(A){var v=0|parseInt(A[1],10),R=A[2];v!==0&&(Kb(R,v),Fb(n,R,A[3]),n.getTag().insertRules(v,h)),h.length=0}else h.push(T)}}},O0=function(n){for(var r=document.querySelectorAll(Jb),c=0,o=r.length;c<o;c++){var h=r[c];h&&h.getAttribute(zn)!==ep&&(Ib(n,h),h.parentNode&&h.parentNode.removeChild(h))}};function Pb(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var dp=function(n){var r=document.head,c=n||r,o=document.createElement("style"),h=function(T){var A=Array.from(T.querySelectorAll("style[".concat(zn,"]")));return A[A.length-1]}(c),g=h!==void 0?h.nextSibling:null;o.setAttribute(zn,ep),o.setAttribute(lp,mr);var y=Pb();return y&&o.setAttribute("nonce",y),c.insertBefore(o,g),o},tv=function(){function n(r){this.element=dp(r),this.element.appendChild(document.createTextNode("")),this.sheet=function(c){if(c.sheet)return c.sheet;for(var o=document.styleSheets,h=0,g=o.length;h<g;h++){var y=o[h];if(y.ownerNode===c)return y}throw ka(17)}(this.element),this.length=0}return n.prototype.insertRule=function(r,c){try{return this.sheet.insertRule(c,r),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},n.prototype.getRule=function(r){var c=this.sheet.cssRules[r];return c&&c.cssText?c.cssText:""},n}(),ev=function(){function n(r){this.element=dp(r),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(r,c){if(r<=this.length&&r>=0){var o=document.createTextNode(c);return this.element.insertBefore(o,this.nodes[r]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},n.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},n}(),lv=function(){function n(r){this.rules=[],this.length=0}return n.prototype.insertRule=function(r,c){return r<=this.length&&(this.rules.splice(r,0,c),this.length++,!0)},n.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},n.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},n}(),k0=nr,av={isServer:!nr,useCSSOMInjection:!_b},ur=function(){function n(r,c,o){r===void 0&&(r=On),c===void 0&&(c={});var h=this;this.options=fe(fe({},av),r),this.gs=c,this.names=new Map(o),this.server=!!r.isServer,!this.server&&nr&&k0&&(k0=!1,O0(this)),ps(this,function(){return function(g){for(var y=g.getTag(),T=y.length,A="",v=function(C){var Y=function(P){return ir.get(P)}(C);if(Y===void 0)return"continue";var tt=g.names.get(Y),W=y.getGroup(C);if(tt===void 0||!tt.size||W.length===0)return"continue";var ut="".concat(zn,".g").concat(C,'[id="').concat(Y,'"]'),I="";tt!==void 0&&tt.forEach(function(P){P.length>0&&(I+="".concat(P,","))}),A+="".concat(W).concat(ut,'{content:"').concat(I,'"}').concat(ds)},R=0;R<T;R++)v(R);return A}(h)})}return n.registerId=function(r){return Zu(r)},n.prototype.rehydrate=function(){!this.server&&nr&&O0(this)},n.prototype.reconstructWithOptions=function(r,c){return c===void 0&&(c=!0),new n(fe(fe({},this.options),r),this.gs,c&&this.names||void 0)},n.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(r=function(c){var o=c.useCSSOMInjection,h=c.target;return c.isServer?new lv(h):o?new tv(h):new ev(h)}(this.options),new Zb(r)));var r},n.prototype.hasNameForId=function(r,c){return this.names.has(r)&&this.names.get(r).has(c)},n.prototype.registerName=function(r,c){if(Zu(r),this.names.has(r))this.names.get(r).add(c);else{var o=new Set;o.add(c),this.names.set(r,o)}},n.prototype.insertRules=function(r,c,o){this.registerName(r,c),this.getTag().insertRules(Zu(r),o)},n.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},n.prototype.clearRules=function(r){this.getTag().clearGroup(Zu(r)),this.clearNames(r)},n.prototype.clearTag=function(){this.tag=void 0},n}(),nv=/&/g,iv=/^\s*\/\/.*$/gm;function hp(n,r){return n.map(function(c){return c.type==="rule"&&(c.value="".concat(r," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(r," ")),c.props=c.props.map(function(o){return"".concat(r," ").concat(o)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=hp(c.children,r)),c})}function uv(n){var r,c,o,h=On,g=h.options,y=g===void 0?On:g,T=h.plugins,A=T===void 0?gr:T,v=function(Y,tt,W){return W.startsWith(c)&&W.endsWith(c)&&W.replaceAll(c,"").length>0?".".concat(r):Y},R=A.slice();R.push(function(Y){Y.type===fr&&Y.value.includes("&")&&(Y.props[0]=Y.props[0].replace(nv,c).replace(o,v))}),y.prefix&&R.push(Cb),R.push(zb);var C=function(Y,tt,W,ut){tt===void 0&&(tt=""),W===void 0&&(W=""),ut===void 0&&(ut="&"),r=ut,c=tt,o=new RegExp("\\".concat(c,"\\b"),"g");var I=Y.replace(iv,""),P=Db(W||tt?"".concat(W," ").concat(tt," { ").concat(I," }"):I);y.namespace&&(P=hp(P,y.namespace));var lt=[];return ar(P,Ob(R.concat(kb(function(V){return lt.push(V)})))),lt};return C.hash=A.length?A.reduce(function(Y,tt){return tt.name||ka(15),Tn(Y,tt.name)},ip).toString():"",C}var rv=new ur,es=uv(),pp=_.createContext({shouldForwardProp:void 0,styleSheet:rv,stylis:es});pp.Consumer;_.createContext(void 0);function ls(){return k.useContext(pp)}var ov=function(){function n(r,c){var o=this;this.inject=function(h,g){g===void 0&&(g=es);var y=o.name+g.hash;h.hasNameForId(o.id,y)||h.insertRules(o.id,y,g(o.rules,y,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=c,ps(this,function(){throw ka(12,String(o.name))})}return n.prototype.getName=function(r){return r===void 0&&(r=es),this.name+r.hash},n}(),cv=function(n){return n>="A"&&n<="Z"};function C0(n){for(var r="",c=0;c<n.length;c++){var o=n[c];if(c===1&&o==="-"&&n[0]==="-")return n;cv(o)?r+="-"+o.toLowerCase():r+=o}return r.startsWith("ms-")?"-"+r:r}var mp=function(n){return n==null||n===!1||n===""},gp=function(n){var r,c,o=[];for(var h in n){var g=n[h];n.hasOwnProperty(h)&&!mp(g)&&(Array.isArray(g)&&g.isCss||Oa(g)?o.push("".concat(C0(h),":"),g,";"):Mi(g)?o.push.apply(o,Ci(Ci(["".concat(h," {")],gp(g),!1),["}"],!1)):o.push("".concat(C0(h),": ").concat((r=h,(c=g)==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||r in Mb||r.startsWith("--")?String(c).trim():"".concat(c,"px")),";")))}return o};function aa(n,r,c,o){if(mp(n))return[];if(hs(n))return[".".concat(n.styledComponentId)];if(Oa(n)){if(!Oa(g=n)||g.prototype&&g.prototype.isReactComponent||!r)return[n];var h=n(r);return aa(h,r,c,o)}var g;return n instanceof ov?c?(n.inject(c,o),[n.getName(o)]):[n]:Mi(n)?gp(n):Array.isArray(n)?Array.prototype.concat.apply(gr,n.map(function(y){return aa(y,r,c,o)})):[n.toString()]}function bp(n){for(var r=0;r<n.length;r+=1){var c=n[r];if(Oa(c)&&!hs(c))return!1}return!0}var sv=up(mr),fv=function(){function n(r,c,o){this.rules=r,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&bp(r),this.componentId=c,this.baseHash=Tn(sv,c),this.baseStyle=o,ur.registerId(c)}return n.prototype.generateAndInjectStyles=function(r,c,o){var h=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,c,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))h=Da(h,this.staticRulesId);else{var g=Pc(aa(this.rules,r,c,o)),y=Ic(Tn(this.baseHash,g)>>>0);if(!c.hasNameForId(this.componentId,y)){var T=o(g,".".concat(y),void 0,this.componentId);c.insertRules(this.componentId,y,T)}h=Da(h,y),this.staticRulesId=y}else{for(var A=Tn(this.baseHash,o.hash),v="",R=0;R<this.rules.length;R++){var C=this.rules[R];if(typeof C=="string")v+=C;else if(C){var Y=Pc(aa(C,r,c,o));A=Tn(A,Y+R),v+=Y}}if(v){var tt=Ic(A>>>0);c.hasNameForId(this.componentId,tt)||c.insertRules(this.componentId,tt,o(v,".".concat(tt),void 0,this.componentId)),h=Da(h,tt)}}return h},n}(),_i=_.createContext(void 0);_i.Consumer;function dv(n){var r=_.useContext(_i),c=k.useMemo(function(){return function(o,h){if(!o)throw ka(14);if(Oa(o)){var g=o(h);return g}if(Array.isArray(o)||typeof o!="object")throw ka(8);return h?fe(fe({},h),o):o}(n.theme,r)},[n.theme,r]);return n.children?_.createElement(_i.Provider,{value:c},n.children):null}var Qc={};function hv(n,r,c){var o=hs(n),h=n,g=!qc(n),y=r.attrs,T=y===void 0?gr:y,A=r.componentId,v=A===void 0?function(at,M){var et=typeof at!="string"?"sc":w0(at);Qc[et]=(Qc[et]||0)+1;var F="".concat(et,"-").concat(rp(mr+et+Qc[et]));return M?"".concat(M,"-").concat(F):F}(r.displayName,r.parentComponentId):A,R=r.displayName,C=R===void 0?function(at){return qc(at)?"styled.".concat(at):"Styled(".concat(Ub(at),")")}(n):R,Y=r.displayName&&r.componentId?"".concat(w0(r.displayName),"-").concat(r.componentId):r.componentId||v,tt=o&&h.attrs?h.attrs.concat(T).filter(Boolean):T,W=r.shouldForwardProp;if(o&&h.shouldForwardProp){var ut=h.shouldForwardProp;if(r.shouldForwardProp){var I=r.shouldForwardProp;W=function(at,M){return ut(at,M)&&I(at,M)}}else W=ut}var P=new fv(c,Y,o?h.componentStyle:void 0);function lt(at,M){return function(et,F,xt){var At=et.attrs,Xt=et.componentStyle,Ct=et.defaultProps,bt=et.foldedComponentIds,d=et.styledComponentId,U=et.target,Z=_.useContext(_i),D=ls(),B=et.shouldForwardProp||D.shouldForwardProp,Q=ap(F,Z,Ct)||On,it=function(nt,J,ct){for(var ft,G=fe(fe({},J),{className:void 0,theme:ct}),mt=0;mt<nt.length;mt+=1){var dt=Oa(ft=nt[mt])?ft(G):ft;for(var vt in dt)G[vt]=vt==="className"?Da(G[vt],dt[vt]):vt==="style"?fe(fe({},G[vt]),dt[vt]):dt[vt]}return J.className&&(G.className=Da(G.className,J.className)),G}(At,F,Q),p=it.as||U,j={};for(var K in it)it[K]===void 0||K[0]==="$"||K==="as"||K==="theme"&&it.theme===Q||(K==="forwardedAs"?j.as=it.forwardedAs:B&&!B(K,p)||(j[K]=it[K]));var N=function(nt,J){var ct=ls(),ft=nt.generateAndInjectStyles(J,ct.styleSheet,ct.stylis);return ft}(Xt,it),q=Da(bt,d);return N&&(q+=" "+N),it.className&&(q+=" "+it.className),j[qc(p)&&!np.has(p)?"class":"className"]=q,xt&&(j.ref=xt),k.createElement(p,j)}(V,at,M)}lt.displayName=C;var V=_.forwardRef(lt);return V.attrs=tt,V.componentStyle=P,V.displayName=C,V.shouldForwardProp=W,V.foldedComponentIds=o?Da(h.foldedComponentIds,h.styledComponentId):"",V.styledComponentId=Y,V.target=o?h.target:n,Object.defineProperty(V,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(at){this._foldedDefaultProps=o?function(M){for(var et=[],F=1;F<arguments.length;F++)et[F-1]=arguments[F];for(var xt=0,At=et;xt<At.length;xt++)ts(M,At[xt],!0);return M}({},h.defaultProps,at):at}}),ps(V,function(){return".".concat(V.styledComponentId)}),g&&fp(V,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),V}function M0(n,r){for(var c=[n[0]],o=0,h=r.length;o<h;o+=1)c.push(r[o],n[o+1]);return c}var _0=function(n){return Object.assign(n,{isCss:!0})};function rt(n){for(var r=[],c=1;c<arguments.length;c++)r[c-1]=arguments[c];if(Oa(n)||Mi(n))return _0(aa(M0(gr,Ci([n],r,!0))));var o=n;return r.length===0&&o.length===1&&typeof o[0]=="string"?aa(o):_0(aa(M0(o,r)))}function as(n,r,c){if(c===void 0&&(c=On),!r)throw ka(1,r);var o=function(h){for(var g=[],y=1;y<arguments.length;y++)g[y-1]=arguments[y];return n(r,c,rt.apply(void 0,Ci([h],g,!1)))};return o.attrs=function(h){return as(n,r,fe(fe({},c),{attrs:Array.prototype.concat(c.attrs,h).filter(Boolean)}))},o.withConfig=function(h){return as(n,r,fe(fe({},c),h))},o}var vp=function(n){return as(hv,n)},X=vp;np.forEach(function(n){X[n]=vp(n)});var pv=function(){function n(r,c){this.rules=r,this.componentId=c,this.isStatic=bp(r),ur.registerId(this.componentId+1)}return n.prototype.createStyles=function(r,c,o,h){var g=h(Pc(aa(this.rules,c,o,h)),""),y=this.componentId+r;o.insertRules(y,y,g)},n.prototype.removeStyles=function(r,c){c.clearRules(this.componentId+r)},n.prototype.renderStyles=function(r,c,o,h){r>2&&ur.registerId(this.componentId+r),this.removeStyles(r,o),this.createStyles(r,c,o,h)},n}();function mv(n){for(var r=[],c=1;c<arguments.length;c++)r[c-1]=arguments[c];var o=rt.apply(void 0,Ci([n],r,!1)),h="sc-global-".concat(rp(JSON.stringify(o))),g=new pv(o,h),y=function(A){var v=ls(),R=_.useContext(_i),C=_.useRef(v.styleSheet.allocateGSInstance(h)).current;return v.styleSheet.server&&T(C,A,v.styleSheet,R,v.stylis),_.useLayoutEffect(function(){if(!v.styleSheet.server)return T(C,A,v.styleSheet,R,v.stylis),function(){return g.removeStyles(C,v.styleSheet)}},[C,A,v.styleSheet,R,v.stylis]),null};function T(A,v,R,C,Y){if(g.isStatic)g.renderStyles(A,Nb,R,Y);else{var tt=fe(fe({},v),{theme:ap(v,C,y.defaultProps)});g.renderStyles(A,tt,R,Y)}}return _.memo(y)}var gv=`
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

`;const ms="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",gs="inset 2px 2px 3px rgba(0,0,0,0.2)",tl=()=>rt`
  -webkit-text-fill-color: ${({theme:n})=>n.materialTextDisabled};
  color: ${({theme:n})=>n.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:n})=>n.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,el=({background:n="material",color:r="materialText"}={})=>rt`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:c})=>c[n]};
  color: ${({theme:c})=>c[r]};
`,Bi=({mainColor:n="black",secondaryColor:r="transparent",pixelSize:c=2})=>rt`
  background-image: ${[`linear-gradient(
      45deg,
      ${n} 25%,
      transparent 25%,
      transparent 75%,
      ${n} 75%
    )`,`linear-gradient(
      45deg,
      ${n} 25%,
      transparent 25%,
      transparent 75%,
      ${n} 75%
    )`].join(",")};
  background-color: ${r};
  background-size: ${`${c*2}px ${c*2}px`};
  background-position: 0 0, ${`${c}px ${c}px`};
`,Ca=()=>rt`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:n})=>n.materialText};
  background: ${({$disabled:n,theme:r})=>n?r.flatLight:r.canvas};
  border: 2px solid ${({theme:n})=>n.canvas};
  outline: 2px solid ${({theme:n})=>n.flatDark};
  outline-offset: -4px;
`,wn={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},bv=({theme:n,topLeftInner:r,bottomRightInner:c,hasShadow:o=!1,hasInsetShadow:h=!1})=>[o?ms:!1,h?gs:!1,r!==null?`inset 1px 1px 0px 1px ${n[r]}`:!1,c!==null?`inset -1px -1px 0 1px ${n[c]}`:!1].filter(Boolean).join(", "),Wt=({invert:n=!1,style:r="button"}={})=>{const c={topLeftOuter:n?"bottomRightOuter":"topLeftOuter",topLeftInner:n?"bottomRightInner":"topLeftInner",bottomRightInner:n?"topLeftInner":"bottomRightInner",bottomRightOuter:n?"topLeftOuter":"bottomRightOuter"};return rt`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:o})=>o[wn[r][c.topLeftOuter]]};
    border-top-color: ${({theme:o})=>o[wn[r][c.topLeftOuter]]};
    border-right-color: ${({theme:o})=>o[wn[r][c.bottomRightOuter]]};
    border-bottom-color: ${({theme:o})=>o[wn[r][c.bottomRightOuter]]};
    box-shadow: ${({theme:o,shadow:h})=>bv({theme:o,topLeftInner:wn[r][c.topLeftInner],bottomRightInner:wn[r][c.bottomRightInner],hasShadow:h})};
  `},kn=()=>rt`
  outline: 2px dotted ${({theme:n})=>n.materialText};
`,vv=n=>Buffer.from(n).toString("base64"),yv=typeof btoa<"u"?btoa:vv,Ku=(n,r=0)=>{const c=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${r} 13 13)">
      <polygon fill="${n}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${yv(c)})`},bs=(n="default")=>rt`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:r})=>Bi({mainColor:n==="flat"?r.flatLight:r.material,secondaryColor:n==="flat"?r.canvas:r.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${el()}
    ${n==="flat"?Ca():Wt({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:r})=>r.material};
  }
  ::-webkit-scrollbar-button {
    ${el()}
    ${n==="flat"?Ca():Wt({style:"window"})}
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
    ${n==="default"?Wt({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:r})=>Ku(r.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:r})=>Ku(r.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:r})=>Ku(r.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:r})=>Ku(r.materialText,0)};
  }
`,xv=X.a`
  color: ${({theme:n})=>n.anchor};
  font-size: inherit;
  text-decoration: ${({underline:n})=>n?"underline":"none"};
  &:visited {
    color: ${({theme:n})=>n.anchorVisited};
  }
`,Av=k.forwardRef(({children:n,underline:r=!0,...c},o)=>_.createElement(xv,{ref:o,underline:r,...c},n));Av.displayName="Anchor";const Sv=X.header`
  ${Wt()};
  ${el()};

  position: ${n=>{var r;return(r=n.position)!==null&&r!==void 0?r:n.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,yp=k.forwardRef(({children:n,fixed:r=!0,position:c="fixed",...o},h)=>_.createElement(Sv,{fixed:r,position:r!==!1?c:void 0,ref:h,...o},n));yp.displayName="AppBar";const Ma=()=>{};function Ra(n,r,c){return c!==null&&n>c?c:r!==null&&n<r?r:n}function Ev(n){if(Math.abs(n)<1){const c=n.toExponential().split("e-"),o=c[0].split(".")[1];return(o?o.length:0)+parseInt(c[1],10)}const r=n.toString().split(".")[1];return r?r.length:0}function N0(n,r,c){const o=Math.round((n-c)/r)*r+c;return Number(o.toFixed(Ev(r)))}function na(n){return typeof n=="number"?`${n}px`:n}const wv=X.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:n})=>`
    height: ${n};
    width: ${n};
    `}
  border-radius: ${({square:n})=>n?0:"50%"};
  overflow: hidden;
  ${({noBorder:n,theme:r})=>!n&&`
    border-top: 2px solid ${r.borderDark};
    border-left: 2px solid ${r.borderDark};
    border-bottom: 2px solid ${r.borderLightest};
    border-right: 2px solid ${r.borderLightest};
    background: ${r.material};
  `}
  ${({src:n})=>!n&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,Tv=X.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,Dv=k.forwardRef(({alt:n="",children:r,noBorder:c=!1,size:o=35,square:h=!1,src:g,...y},T)=>_.createElement(wv,{noBorder:c,ref:T,size:na(o),square:h,src:g,...y},g?_.createElement(Tv,{src:g,alt:n}):r));Dv.displayName="Avatar";const me={sm:"28px",md:"36px",lg:"44px"},Rv=rt`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:n="md"})=>me[n]};
  width: ${({fullWidth:n,size:r="md",square:c})=>n?"100%":c?me[r]:"auto"};
  padding: ${({square:n})=>n?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:n})=>!n&&"2px"};
  }
  padding-top: ${({active:n,disabled:r})=>n&&!r&&"2px"};
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
`,br=X.button`
  ${({active:n,disabled:r,primary:c,theme:o,variant:h})=>h==="flat"?rt`
          ${Ca()}
          ${c?`
          border: 2px solid ${o.checkmark};
            outline: 2px solid ${o.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${o.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!n&&!r&&kn}
            outline-offset: -4px;
          }
        `:h==="menu"||h==="thin"?rt`
          ${el()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!r&&!n&&Wt({style:"buttonThin"})}
          }
          &:active {
            ${!r&&Wt({style:"buttonThinPressed"})}
          }
          ${n&&Wt({style:"buttonThinPressed"})}
          ${r&&tl()}
        `:rt`
          ${el()};
          border: none;
          ${r&&tl()}
          ${n?Bi({mainColor:o.material,secondaryColor:o.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${c?rt`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${o.borderDarkest};
                `:rt`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${Wt(n?{style:h==="raised"?"window":"button",invert:!0}:{style:h==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!r&&Wt({style:h==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!n&&!r&&kn}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${n?"0":"1px"};
          }
        `}
  ${Rv}
`,Ni=k.forwardRef(({onClick:n,disabled:r=!1,children:c,type:o="button",fullWidth:h=!1,size:g="md",square:y=!1,active:T=!1,onTouchStart:A=Ma,primary:v=!1,variant:R="default",...C},Y)=>_.createElement(br,{active:T,disabled:r,$disabled:r,fullWidth:h,onClick:r?void 0:n,onTouchStart:A,primary:v,ref:Y,size:g,square:y,type:o,variant:R,...C},c));Ni.displayName="Button";function ia({defaultValue:n,onChange:r,onChangePropName:c="onChange",readOnly:o,value:h,valuePropName:g="value"}){const y=h!==void 0,[T,A]=k.useState(n),v=k.useCallback(R=>{y||A(R)},[y]);if(y&&typeof r!="function"&&!o){const R=`Warning: You provided a \`${g}\` prop to a component without an \`${c}\` handler.${g==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${c}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${c}\` function that updates \`${g}\`.`}`;console.warn(R)}return[y?h:T,v]}const ns=X.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${n=>me[n.size]};
  width: ${n=>n.square?me[n.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${n=>n.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${n=>me[n.size]};
  color: ${({theme:n})=>n.materialText};
  pointer-events: ${({$disabled:n})=>n?"none":"auto"};
  font-weight: ${({primary:n})=>n?"bold":"normal"};
  &:hover {
    ${({theme:n,$disabled:r})=>!r&&`
        color: ${n.materialTextInvert};
        background: ${n.hoverBackground};
      `}

    cursor: default;
  }
  ${n=>n.$disabled&&tl()}
`,Ta=k.forwardRef(({size:n="lg",disabled:r,square:c,children:o,onClick:h,primary:g,...y},T)=>_.createElement(ns,{$disabled:r,size:n,square:c,onClick:r?void 0:h,primary:g,role:"menuitem",ref:T,"aria-disabled":r,...y},o));Ta.displayName="MenuListItem";const xp=X.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${n=>n.fullWidth?"100%":"auto"};
  padding: 4px;
  ${Wt({style:"window"})}
  ${el()}
  ${n=>n.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;xp.displayName="MenuList";const sl=20,rr=X.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${sl}px;
  height: ${sl}px;
  opacity: 0;
  z-index: -1;
`,vs=X.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:n})=>n?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:n})=>n.materialText};
  ${n=>n.$disabled&&tl()}

  ${ns} & {
    margin: 0;
    height: 100%;
  }
  ${ns}:hover & {
    ${({$disabled:n,theme:r})=>!n&&rt`
        color: ${r.materialTextInvert};
      `};
  }
`,ys=X.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${rr}:focus ~ & {
    ${kn}
  }
  ${rr}:not(:disabled) ~ &:active {
    ${kn}
  }
`,fl=X.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({theme:n})=>n.borderDark};
  border-top-color: ${({theme:n})=>n.borderDark};
  border-right-color: ${({theme:n})=>n.borderLightest};
  border-bottom-color: ${({theme:n})=>n.borderLightest};
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
    border-left-color: ${({theme:n})=>n.borderDarkest};
    border-top-color: ${({theme:n})=>n.borderDarkest};
    border-right-color: ${({theme:n})=>n.borderLight};
    border-bottom-color: ${({theme:n})=>n.borderLight};

    pointer-events: none;
    ${n=>n.shadow&&`box-shadow:${gs};`}
  }
`,zv=X.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${bs()}
`,Ap=k.forwardRef(({children:n,shadow:r=!0,...c},o)=>_.createElement(fl,{ref:o,shadow:r,...c},_.createElement(zv,null,n)));Ap.displayName="ScrollView";const Sp=rt`
  width: ${sl}px;
  height: ${sl}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Ov=X(fl)`
  ${Sp}
  width: ${sl}px;
  height: ${sl}px;
  background: ${({$disabled:n,theme:r})=>n?r.material:r.canvas};
  &:before {
    box-shadow: none;
  }
`,kv=X.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:n,theme:r})=>n?r.flatLight:r.canvas};
  ${Sp}
  width: ${sl-4}px;
  height: ${sl-4}px;
  outline: none;
  border: 2px solid ${({theme:n})=>n.flatDark};
  background: ${({$disabled:n,theme:r})=>n?r.flatLight:r.canvas};
`,Cv=X.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
      ${({$disabled:n,theme:r})=>n?r.checkmarkDisabled:r.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${n=>n.$disabled?n.theme.checkmarkDisabled:n.theme.checkmark};
  }
`,Mv=X.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:n,theme:r})=>Bi({mainColor:n?r.checkmarkDisabled:r.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,_v={flat:kv,default:Ov},Nv=k.forwardRef(({checked:n,className:r="",defaultChecked:c=!1,disabled:o=!1,indeterminate:h=!1,label:g="",onChange:y=Ma,style:T={},value:A,variant:v="default",...R},C)=>{var Y;const[tt,W]=ia({defaultValue:c,onChange:y,readOnly:(Y=R.readOnly)!==null&&Y!==void 0?Y:o,value:n}),ut=k.useCallback(lt=>{const V=lt.target.checked;W(V),y(lt)},[y,W]),I=_v[v];let P=null;return h?P=Mv:tt&&(P=Cv),_.createElement(vs,{$disabled:o,className:r,style:T},_.createElement(rr,{disabled:o,onChange:o?void 0:ut,readOnly:o,type:"checkbox",value:A,checked:tt,"data-indeterminate":h,ref:C,...R}),_.createElement(I,{$disabled:o,role:"presentation"},P&&_.createElement(P,{$disabled:o,variant:v})),g&&_.createElement(ys,null,g))});Nv.displayName="Checkbox";const or=X.div`
  ${({orientation:n,theme:r,size:c="100%"})=>n==="vertical"?`
    height: ${na(c)};
    border-left: 2px solid ${r.borderDark};
    border-right: 2px solid ${r.borderLightest};
    margin: 0;
    `:`
    width: ${na(c)};
    border-bottom: 2px solid ${r.borderLightest};
    border-top: 2px solid ${r.borderDark};
    margin: 0;
    `}
`;or.displayName="Separator";const Bv=X(br)`
  padding-left: 8px;
`,jv=X(or)`
  height: 21px;
  position: relative;
  top: 0;
`,Ep=X.input`
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
`,Hv=X.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:n})=>n};

  ${({$disabled:n})=>n?rt`
          border: 2px solid ${({theme:r})=>r.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:r})=>r.materialTextDisabledShadow}
          );
        `:rt`
          border: 2px solid ${({theme:r})=>r.materialText};
        `}
  ${Ep}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${kn}
    outline-offset: -8px;
  }
`,Uv=X.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:n})=>n?rt`
          border-top: 6px solid ${({theme:r})=>r.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:r})=>r.materialTextDisabledShadow}
          );
        `:rt`
          border-top: 6px solid ${({theme:r})=>r.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({variant:n})=>n==="flat"?"6px":"8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`,$v=k.forwardRef(({value:n,defaultValue:r,onChange:c=Ma,disabled:o=!1,variant:h="default",...g},y)=>{var T;const[A,v]=ia({defaultValue:r,onChange:c,readOnly:(T=g.readOnly)!==null&&T!==void 0?T:o,value:n}),R=C=>{const Y=C.target.value;v(Y),c(C)};return _.createElement(Bv,{disabled:o,as:"div",variant:h,size:"md"},_.createElement(Ep,{onChange:R,readOnly:o,disabled:o,value:A??"#008080",type:"color",ref:y,...g}),_.createElement(Hv,{$disabled:o,color:A??"#008080",role:"presentation"}),h==="default"&&_.createElement(jv,{orientation:"vertical"}),_.createElement(Uv,{$disabled:o,variant:h}))});$v.displayName="ColorInput";const Lv=X.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:n})=>rt`
    width: ${11*n}px;
    height: ${21*n}px;
    margin: ${n}px;

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
      ${Bi({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:n})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${n}px;
      border-left: ${n}px solid var(--react95-digit-bg-color);
      border-right: ${n}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${n}px;
      border-left: ${n}px solid var(--react95-digit-primary-color);
      border-right: ${n}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${n}px;
      width: ${9*n}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${n}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${n*2}px);
      top: ${2*n}px;
      left: ${n}px;
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
      height: ${n}px;
      border-left: ${n}px solid var(--react95-digit-bg-color);
      border-right: ${n}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${n}px solid var(--react95-digit-primary-color);
      border-right: ${n}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${n}px;
      width: ${9*n}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${n}px;
    }
    span.center:after {
      bottom: ${n}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${n}px;
      border-top: ${n}px solid var(--react95-digit-bg-color);
      border-bottom: ${n}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*n}px;
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
      left: ${n}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${n*2}px);
      top: ${n}px;
      left: ${n*2}px;
    }
  `}
`,B0=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],Yv=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function Gv({digit:n=0,pixelSize:r=2,...c}){const o=Yv[Number(n)].map((h,g)=>h?`${B0[g]} active`:B0[g]);return _.createElement(Lv,{pixelSize:r,...c},o.map((h,g)=>_.createElement("span",{className:h,key:g})))}const qv=X.div`
  ${Wt({style:"status"})}
  display: inline-flex;
  background: #000000;
`,Qv={sm:1,md:2,lg:3,xl:4},Xv=k.forwardRef(({value:n=0,minLength:r=3,size:c="md",...o},h)=>{const g=k.useMemo(()=>n.toString().padStart(r,"0").split(""),[r,n]);return _.createElement(qv,{ref:h,...o},g.map((y,T)=>_.createElement(Gv,{digit:y,pixelSize:Qv[c],key:T})))});Xv.displayName="Counter";const wp=rt`
  display: flex;
  align-items: center;
  width: ${({fullWidth:n})=>n?"100%":"auto"};
  min-height: ${me.md};
`,Vv=X(fl).attrs({"data-testid":"variant-default"})`
  ${wp}
  background: ${({$disabled:n,theme:r})=>n?r.material:r.canvas};
`,Zv=X.div.attrs({"data-testid":"variant-flat"})`
  ${Ca()}
  ${wp}
  position: relative;
`,Tp=rt`
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
  color: ${({theme:n})=>n.canvasText};
  ${({disabled:n,variant:r})=>r!=="flat"&&n&&tl()}
`,Kv=X.input`
  ${Tp}
  padding: 0 8px;
`,Jv=X.textarea`
  ${Tp}
  padding: 8px;
  resize: none;
  ${({variant:n})=>bs(n)}
`,Dp=k.forwardRef(({className:n,disabled:r=!1,fullWidth:c,onChange:o=Ma,shadow:h=!0,style:g,variant:y="default",...T},A)=>{const v=y==="flat"?Zv:Vv,R=k.useMemo(()=>{var C;return T.multiline?_.createElement(Jv,{disabled:r,onChange:r?void 0:o,readOnly:r,ref:A,variant:y,...T}):_.createElement(Kv,{disabled:r,onChange:r?void 0:o,readOnly:r,ref:A,type:(C=T.type)!==null&&C!==void 0?C:"text",variant:y,...T})},[r,o,T,A,y]);return _.createElement(v,{className:n,fullWidth:c,$disabled:r,shadow:h,style:g},R)});Dp.displayName="TextInput";const Wv=X.div`
  display: inline-flex;
  align-items: center;
`,is=X(Ni)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:n})=>n==="flat"?rt`
          height: calc(50% - 1px);
        `:rt`
          height: 50%;
        `}
`,Fv=X.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:n})=>n==="flat"?rt`
          height: calc(${me.md} - 4px);
        `:rt`
          height: ${me.md};
          margin-left: 2px;
        `}
`,j0=X.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:n})=>n?rt`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:r})=>r.materialText};
        `:rt`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:r})=>r.materialText};
        `}
  ${is}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:n})=>n.materialTextDisabledShadow}
    );
    ${({invert:n})=>n?rt`
            border-bottom-color: ${({theme:r})=>r.materialTextDisabled};
          `:rt`
            border-top-color: ${({theme:r})=>r.materialTextDisabled};
          `}
  }
`,Rp=k.forwardRef(({className:n,defaultValue:r,disabled:c=!1,max:o,min:h,onChange:g,readOnly:y,step:T=1,style:A,value:v,variant:R="default",width:C,...Y},tt)=>{const[W,ut]=ia({defaultValue:r,onChange:g,readOnly:y,value:v}),I=k.useCallback(et=>{const F=parseFloat(et.target.value);ut(F)},[ut]),P=k.useCallback(et=>{const F=Ra(parseFloat(((W??0)+et).toFixed(2)),h??null,o??null);ut(F),g==null||g(F)},[o,h,g,ut,W]),lt=k.useCallback(()=>{W!==void 0&&(g==null||g(W))},[g,W]),V=k.useCallback(()=>{P(T)},[P,T]),at=k.useCallback(()=>{P(-T)},[P,T]),M=R==="flat"?"flat":"raised";return _.createElement(Wv,{className:n,style:{...A,width:C!==void 0?na(C):"auto"},...Y},_.createElement(Dp,{value:W,variant:R,onChange:I,disabled:c,type:"number",readOnly:y,ref:tt,fullWidth:!0,onBlur:lt}),_.createElement(Fv,{variant:R},_.createElement(is,{"data-testid":"increment",variant:M,disabled:c||y,onClick:V},_.createElement(j0,{invert:!0})),_.createElement(is,{"data-testid":"decrement",variant:M,disabled:c||y,onClick:at},_.createElement(j0,null))))});Rp.displayName="NumberInput";function Iv(){const n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let r="";for(let c=0;c<10;c+=1)r+=n[Math.floor(Math.random()*n.length)];return r}const zp=n=>k.useMemo(()=>Iv(),[n]),Op=rt`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,kp=rt`
  background: ${({theme:n})=>n.hoverBackground};
  color: ${({theme:n})=>n.canvasTextInvert};
`,xs=X.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,Pv=X.div`
  ${Op}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${xs}:focus & {
    ${kp}
    border: 2px dotted ${({theme:n})=>n.focusSecondary};
  }
`,Cp=rt`
  height: ${me.md};
  display: inline-block;
  color: ${({$disabled:n=!1,theme:r})=>n?tl():r.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:n})=>n?"default":"pointer"};
`,ty=X(fl)`
  ${Cp}
  background: ${({$disabled:n=!1,theme:r})=>n?r.material:r.canvas};
  &:focus {
    outline: 0;
  }
`,ey=X.div`
  ${Ca()}
  ${Cp}
  background: ${({$disabled:n=!1,theme:r})=>n?r.flatLight:r.canvas};
`,ly=X.select`
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
  ${Op}
  cursor: pointer;
  &:disabled {
    ${tl()};
    background: ${({theme:n})=>n.material};
    cursor: default;
  }
`,Mp=X(br).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:n="default"})=>n==="flat"?rt`
          height: 100%;
          margin-right: 0;
        `:rt`
          height: 100%;
        `}
  ${({native:n=!1,variant:r="default"})=>n&&(r==="flat"?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:n=!1,native:r=!1})=>n||r?"none":"auto"}
`,ay=X.span`
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
    ${({$disabled:n=!1,theme:r})=>n?r.materialTextDisabled:r.materialText};
  ${({$disabled:n=!1,theme:r})=>n&&`
    filter: drop-shadow(1px 1px 0px ${r.materialTextDisabledShadow});
    border-top-color: ${r.materialTextDisabled};
    `}
  ${Mp}:active & {
    margin-top: 2px;
  }
`,ny=X.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({theme:n})=>n.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${ms};
  ${({variant:n="default"})=>n==="flat"?rt`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:r})=>r.flatDark};
        `:rt`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:r})=>r.borderDarkest};
        `}
  ${({variant:n="default"})=>bs(n)}
`,iy=X.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${me.md} - 4px);
  line-height: calc(${me.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:n})=>n.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:n})=>n?kp:""}
  user-select: none;
`,uy=[],_p=({className:n,defaultValue:r,disabled:c,native:o,onChange:h,options:g=uy,readOnly:y,style:T,value:A,variant:v,width:R})=>{var C;const Y=k.useMemo(()=>g.filter(Boolean),[g]),[tt,W]=ia({defaultValue:r??((C=Y==null?void 0:Y[0])===null||C===void 0?void 0:C.value),onChange:h,readOnly:y,value:A}),ut=!(c||y),I=k.useMemo(()=>({className:n,style:{...T,width:R}}),[n,T,R]),P=k.useMemo(()=>_.createElement(Mp,{as:"div","data-testid":"select-button",$disabled:c,native:o,tabIndex:-1,variant:v==="flat"?"flat":"raised"},_.createElement(ay,{"data-testid":"select-icon",$disabled:c})),[c,o,v]),lt=k.useMemo(()=>v==="flat"?ey:ty,[v]);return k.useMemo(()=>({isEnabled:ut,options:Y,value:tt,setValue:W,wrapperProps:I,DropdownButton:P,Wrapper:lt}),[P,lt,ut,Y,W,tt,I])},ry={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},oy=1e3,cy=({onBlur:n,onChange:r,onClose:c,onFocus:o,onKeyDown:h,onMouseDown:g,onOpen:y,open:T,options:A,readOnly:v,value:R,selectRef:C,setValue:Y,wrapperRef:tt})=>{const W=k.useRef(null),ut=k.useRef([]),I=k.useRef(0),P=k.useRef(0),lt=k.useRef(),V=k.useRef("search"),at=k.useRef(""),M=k.useRef(),[et,F]=ia({defaultValue:!1,onChange:y,onChangePropName:"onOpen",readOnly:v,value:T,valuePropName:"open"}),xt=k.useMemo(()=>{const G=A.findIndex(mt=>mt.value===R);return I.current=Ra(G,0,null),A[G]},[A,R]),[At,Xt]=k.useState(A[0]),Ct=k.useCallback(G=>{const mt=W.current,dt=ut.current[G];if(!dt||!mt){lt.current=G;return}lt.current=void 0;const vt=mt.clientHeight,Rt=mt.scrollTop,Nt=mt.scrollTop+vt,Gt=dt.offsetTop,le=dt.offsetHeight,qt=dt.offsetTop+dt.offsetHeight;Gt<Rt&&mt.scrollTo(0,Gt),qt>Nt&&mt.scrollTo(0,Gt-vt+le),dt.focus({preventScroll:!0})},[W]),bt=k.useCallback((G,{scroll:mt}={})=>{var dt;const vt=A.length-1;let Rt;switch(G){case"first":{Rt=0;break}case"last":{Rt=vt;break}case"next":{Rt=Ra(P.current+1,0,vt);break}case"previous":{Rt=Ra(P.current-1,0,vt);break}case"selected":{Rt=Ra((dt=I.current)!==null&&dt!==void 0?dt:0,0,vt);break}default:Rt=G}P.current=Rt,Xt(A[Rt]),mt&&Ct(Rt)},[P,A,Ct]),d=k.useCallback(({fromEvent:G})=>{F(!0),bt("selected",{scroll:!0}),y==null||y({fromEvent:G})},[bt,y,F]),U=k.useCallback(()=>{V.current="search",at.current="",clearTimeout(M.current)},[]),Z=k.useCallback(({focusSelect:G,fromEvent:mt})=>{var dt;c==null||c({fromEvent:mt}),F(!1),Xt(A[0]),U(),lt.current=void 0,G&&((dt=C.current)===null||dt===void 0||dt.focus())},[U,c,A,C,F]),D=k.useCallback(({fromEvent:G})=>{et?Z({focusSelect:!1,fromEvent:G}):d({fromEvent:G})},[Z,d,et]),B=k.useCallback((G,{fromEvent:mt})=>{I.current!==G&&(I.current=G,Y(A[G].value),r==null||r(A[G],{fromEvent:mt}))},[r,A,Y]),Q=k.useCallback(({focusSelect:G,fromEvent:mt})=>{B(P.current,{fromEvent:mt}),Z({focusSelect:G,fromEvent:mt})},[Z,B]),it=k.useCallback((G,{fromEvent:mt,select:dt})=>{var vt;switch(V.current==="cycleFirstLetter"&&G!==at.current&&(V.current="search"),G===at.current?V.current="cycleFirstLetter":at.current+=G,V.current){case"search":{let Rt=A.findIndex(Nt=>{var Gt;return((Gt=Nt.label)===null||Gt===void 0?void 0:Gt.toLocaleUpperCase().indexOf(at.current))===0});Rt<0&&(Rt=A.findIndex(Nt=>{var Gt;return((Gt=Nt.label)===null||Gt===void 0?void 0:Gt.toLocaleUpperCase().indexOf(G))===0}),at.current=G),Rt>=0&&(dt?B(Rt,{fromEvent:mt}):bt(Rt,{scroll:!0}));break}case"cycleFirstLetter":{const Rt=dt?(vt=I.current)!==null&&vt!==void 0?vt:-1:P.current;let Nt=A.findIndex((Gt,le)=>{var qt;return le>Rt&&((qt=Gt.label)===null||qt===void 0?void 0:qt.toLocaleUpperCase().indexOf(G))===0});Nt<0&&(Nt=A.findIndex(Gt=>{var le;return((le=Gt.label)===null||le===void 0?void 0:le.toLocaleUpperCase().indexOf(G))===0})),Nt>=0&&(dt?B(Nt,{fromEvent:mt}):bt(Nt,{scroll:!0}));break}}clearTimeout(M.current),M.current=setTimeout(()=>{V.current==="search"&&(at.current="")},oy)},[bt,A,B]),p=k.useCallback(G=>{var mt;G.button===0&&(G.preventDefault(),(mt=C.current)===null||mt===void 0||mt.focus(),D({fromEvent:G}),g==null||g(G))},[g,C,D]),j=k.useCallback(G=>{Q({focusSelect:!0,fromEvent:G})},[Q]),K=k.useCallback(G=>{const{altKey:mt,code:dt,ctrlKey:vt,metaKey:Rt,shiftKey:Nt}=G,{ARROW_DOWN:Gt,ARROW_UP:le,END:qt,ENTER:ge,ESC:ie,HOME:He,SPACE:Ee,TAB:ll}=ry,Ue=mt||vt||Rt||Nt;if(!(dt===ll&&(mt||vt||Rt)||dt!==ll&&Ue))switch(dt){case Gt:{if(G.preventDefault(),!et){d({fromEvent:G});return}bt("next",{scroll:!0});break}case le:{if(G.preventDefault(),!et){d({fromEvent:G});return}bt("previous",{scroll:!0});break}case qt:{if(G.preventDefault(),!et){d({fromEvent:G});return}bt("last",{scroll:!0});break}case ge:{if(!et)return;G.preventDefault(),Q({focusSelect:!0,fromEvent:G});break}case ie:{if(!et)return;G.preventDefault(),Z({focusSelect:!0,fromEvent:G});break}case He:{if(G.preventDefault(),!et){d({fromEvent:G});return}bt("first",{scroll:!0});break}case Ee:{G.preventDefault(),et?Q({focusSelect:!0,fromEvent:G}):d({fromEvent:G});break}case ll:{if(!et)return;Nt||G.preventDefault(),Q({focusSelect:!Nt,fromEvent:G});break}default:!Ue&&dt.match(/^Key/)&&(G.preventDefault(),G.stopPropagation(),it(dt.replace(/^Key/,""),{select:!et,fromEvent:G}))}},[bt,Z,et,d,it,Q]),N=k.useCallback(G=>{K(G),h==null||h(G)},[K,h]),q=k.useCallback(G=>{bt(G)},[bt]),nt=k.useCallback(G=>{et||(U(),n==null||n(G))},[U,n,et]),J=k.useCallback(G=>{U(),o==null||o(G)},[U,o]),ct=k.useCallback(G=>{W.current=G,lt.current!==void 0&&Ct(lt.current)},[Ct]),ft=k.useCallback((G,mt)=>{ut.current[mt]=G,lt.current===mt&&Ct(lt.current)},[Ct]);return k.useEffect(()=>{if(!et)return()=>{};const G=mt=>{var dt;const vt=mt.target;!((dt=tt.current)===null||dt===void 0)&&dt.contains(vt)||(mt.preventDefault(),Z({focusSelect:!1,fromEvent:mt}))};return document.addEventListener("mousedown",G),()=>{document.removeEventListener("mousedown",G)}},[Z,et,tt]),k.useMemo(()=>({activeOption:At,handleActivateOptionIndex:q,handleBlur:nt,handleButtonKeyDown:N,handleDropdownKeyDown:K,handleFocus:J,handleMouseDown:p,handleOptionClick:j,handleSetDropdownRef:ct,handleSetOptionRef:ft,open:et,selectedOption:xt}),[At,q,nt,N,J,K,p,j,ct,ft,et,xt])},sy=k.forwardRef(({className:n,defaultValue:r,disabled:c,onChange:o,options:h,readOnly:g,style:y,value:T,variant:A,width:v,...R},C)=>{const{isEnabled:Y,options:tt,setValue:W,value:ut,DropdownButton:I,Wrapper:P}=_p({defaultValue:r,disabled:c,native:!0,onChange:o,options:h,readOnly:g,value:T,variant:A}),lt=k.useCallback(V=>{const at=tt.find(M=>M.value===V.target.value);at&&(W(at.value),o==null||o(at,{fromEvent:V}))},[o,tt,W]);return _.createElement(P,{className:n,style:{...y,width:v}},_.createElement(xs,null,_.createElement(ly,{...R,disabled:c,onChange:Y?lt:Ma,ref:C,value:ut},tt.map((V,at)=>{var M;return _.createElement("option",{key:`${V.value}-${at}`,value:V.value},(M=V.label)!==null&&M!==void 0?M:V.value)})),I))});sy.displayName="SelectNative";function fy({activateOptionIndex:n,active:r,index:c,onClick:o,option:h,selected:g,setRef:y}){const T=k.useCallback(()=>{n(c)},[n,c]),A=k.useCallback(R=>{y(R,c)},[c,y]),v=zp();return _.createElement(iy,{active:r,"aria-selected":g?"true":void 0,"data-value":h.value,id:v,onClick:o,onMouseEnter:T,ref:A,role:"option",tabIndex:0},h.label)}function dy({"aria-label":n,"aria-labelledby":r,className:c,defaultValue:o,disabled:h=!1,formatDisplay:g,inputProps:y,labelId:T,menuMaxHeight:A,name:v,onBlur:R,onChange:C,onClose:Y,onFocus:tt,onKeyDown:W,onMouseDown:ut,onOpen:I,open:P,options:lt,readOnly:V,shadow:at=!0,style:M,variant:et="default",value:F,width:xt="auto",...At},Xt){const{isEnabled:Ct,options:bt,setValue:d,value:U,wrapperProps:Z,DropdownButton:D,Wrapper:B}=_p({className:c,defaultValue:o,disabled:h,native:!1,onChange:C,options:lt,style:M,readOnly:V,value:F,variant:et,width:xt}),Q=k.useRef(null),it=k.useRef(null),p=k.useRef(null),{activeOption:j,handleActivateOptionIndex:K,handleBlur:N,handleButtonKeyDown:q,handleDropdownKeyDown:nt,handleFocus:J,handleMouseDown:ct,handleOptionClick:ft,handleSetDropdownRef:G,handleSetOptionRef:mt,open:dt,selectedOption:vt}=cy({onBlur:R,onChange:C,onClose:Y,onFocus:tt,onKeyDown:W,onMouseDown:ut,onOpen:I,open:P,options:bt,value:U,selectRef:it,setValue:d,wrapperRef:p});k.useImperativeHandle(Xt,()=>({focus:ge=>{var ie;(ie=it.current)===null||ie===void 0||ie.focus(ge)},node:Q.current,value:String(U)}),[U]);const Rt=k.useMemo(()=>vt?typeof g=="function"?g(vt):vt.label:"",[g,vt]),Nt=Ct?1:void 0,Gt=k.useMemo(()=>A?{overflow:"auto",maxHeight:A}:void 0,[A]),le=zp(),qt=k.useMemo(()=>bt.map((ge,ie)=>{const He=`${U}-${ie}`,Ee=ge===j,ll=ge===vt;return _.createElement(fy,{activateOptionIndex:K,active:Ee,index:ie,key:He,onClick:ft,option:ge,selected:ll,setRef:mt})}),[j,K,ft,mt,bt,vt,U]);return _.createElement(B,{...Z,$disabled:h,ref:p,shadow:at,style:{...M,width:xt}},_.createElement("input",{name:v,ref:Q,type:"hidden",value:String(U),...y}),_.createElement(xs,{"aria-disabled":h,"aria-expanded":dt,"aria-haspopup":"listbox","aria-label":n,"aria-labelledby":r??T,"aria-owns":Ct&&dt?le:void 0,onBlur:N,onFocus:J,onKeyDown:q,onMouseDown:Ct?ct:ut,ref:it,role:"button",tabIndex:Nt,...At},_.createElement(Pv,null,Rt),D),Ct&&dt&&_.createElement(ny,{id:le,onKeyDown:nt,ref:G,role:"listbox",style:Gt,tabIndex:0,variant:et},qt))}const Np=k.forwardRef(dy);Np.displayName="Select";const hy=X.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${n=>n.noPadding?"0":"4px"};
`,cr=k.forwardRef(function({children:r,noPadding:c=!1,...o},h){return _.createElement(hy,{noPadding:c,ref:h,...o},r)});cr.displayName="Toolbar";const py=X.div`
  padding: 16px;
`,Bp=k.forwardRef(function({children:r,...c},o){return _.createElement(py,{ref:o,...c},r)});Bp.displayName="WindowContent";const my=X.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:n})=>n.material};
  ${({active:n})=>n===!1?rt`
          background: ${({theme:r})=>r.headerNotActiveBackground};
          color: ${({theme:r})=>r.headerNotActiveText};
        `:rt`
          background: ${({theme:r})=>r.headerBackground};
          color: ${({theme:r})=>r.headerText};
        `}

  ${br} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,jp=k.forwardRef(function({active:r=!0,children:c,...o},h){return _.createElement(my,{active:r,ref:h,...o},c)});jp.displayName="WindowHeader";const gy=X.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Wt({style:"window"})}
  ${el()}
`,by=X.span`
  ${({theme:n})=>rt`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${n.borderLightest} 16.67%,
      ${n.material} 16.67%,
      ${n.material} 33.33%,
      ${n.borderDark} 33.33%,
      ${n.borderDark} 50%,
      ${n.borderLightest} 50%,
      ${n.borderLightest} 66.67%,
      ${n.material} 66.67%,
      ${n.material} 83.33%,
      ${n.borderDark} 83.33%,
      ${n.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,Hp=k.forwardRef(({children:n,resizable:r=!1,resizeRef:c,shadow:o=!0,...h},g)=>_.createElement(gy,{ref:g,shadow:o,...h},n,r&&_.createElement(by,{"data-testid":"resizeHandle",ref:c})));Hp.displayName="Window";const vy=X(Ap)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:n})=>n.canvas};
`,yy=X.div`
  display: flex;
  background: ${({theme:n})=>n.materialDark};
  color: #dfe0e3;
`,xy=X.div`
  display: flex;
  flex-wrap: wrap;
`,zl=X.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,Ay=X.span`
  cursor: pointer;

  background: ${({active:n,theme:r})=>n?r.hoverBackground:"transparent"};
  color: ${({active:n,theme:r})=>n?r.canvasTextInvert:r.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:n,active:r})=>r?"none":n.materialDark};
  }
`,Sy=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function Ey(n,r){return new Date(n,r+1,0).getDate()}function wy(n,r,c){return new Date(n,r,c).getDay()}function Ty(n){const r=new Date(Date.parse(n)),c=r.getUTCDate(),o=r.getUTCMonth(),h=r.getUTCFullYear();return{day:c,month:o,year:h}}const Dy=k.forwardRef(({className:n,date:r=new Date().toISOString(),onAccept:c,onCancel:o,shadow:h=!0},g)=>{const[y,T]=k.useState(()=>Ty(r)),{year:A,month:v,day:R}=y,C=k.useCallback(({value:I})=>{T(P=>({...P,month:I}))},[]),Y=k.useCallback(I=>{T(P=>({...P,year:I}))},[]),tt=k.useCallback(I=>{T(P=>({...P,day:I}))},[]),W=k.useCallback(()=>{const I=[y.year,y.month+1,y.day].map(P=>String(P).padStart(2,"0")).join("-");c==null||c(I)},[y.day,y.month,y.year,c]),ut=k.useMemo(()=>{const I=Array.from({length:42}),P=wy(A,v,1);let lt=R;const V=Ey(A,v);return lt=lt<V?lt:V,I.forEach((at,M)=>{if(M>=P&&M<V+P){const et=M-P+1;I[M]=_.createElement(zl,{key:M,onClick:()=>{tt(et)}},_.createElement(Ay,{active:et===lt},et))}else I[M]=_.createElement(zl,{key:M})}),I},[R,tt,v,A]);return _.createElement(Hp,{className:n,ref:g,shadow:h,style:{margin:20}},_.createElement(jp,null,_.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),_.createElement(Bp,null,_.createElement(cr,{noPadding:!0,style:{justifyContent:"space-between"}},_.createElement(Np,{options:Sy,value:v,onChange:C,width:128,menuMaxHeight:200}),_.createElement(Rp,{value:A,onChange:Y,width:100})),_.createElement(vy,null,_.createElement(yy,null,_.createElement(zl,null,"S"),_.createElement(zl,null,"M"),_.createElement(zl,null,"T"),_.createElement(zl,null,"W"),_.createElement(zl,null,"T"),_.createElement(zl,null,"F"),_.createElement(zl,null,"S")),_.createElement(xy,null,ut)),_.createElement(cr,{noPadding:!0,style:{justifyContent:"space-between"}},_.createElement(Ni,{fullWidth:!0,onClick:o,disabled:!o},"Cancel"),_.createElement(Ni,{fullWidth:!0,onClick:c?W:void 0,disabled:!c},"OK"))))});Dy.displayName="DatePicker";const Ry=n=>{switch(n){case"status":case"well":return rt`
        ${Wt({style:"status"})}
      `;case"window":case"outside":return rt`
        ${Wt({style:"window"})}
      `;case"field":return rt`
        ${Wt({style:"field"})}
      `;default:return rt`
        ${Wt()}
      `}},zy=X.div`
  position: relative;
  font-size: 1rem;
  ${({variant:n})=>Ry(n)}
  ${({variant:n})=>el(n==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,Up=k.forwardRef(({children:n,shadow:r=!1,variant:c="window",...o},h)=>_.createElement(zy,{ref:h,shadow:r,variant:c,...o},n));Up.displayName="Frame";const Oy=X.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:n,variant:r})=>r==="flat"?n.flatDark:n.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:n})=>n.materialText};
  ${({variant:n})=>n!=="flat"&&rt`
      box-shadow: -1px -1px 0 1px ${({theme:r})=>r.borderDark},
        inset -1px -1px 0 1px ${({theme:r})=>r.borderDark};
    `}
  ${n=>n.$disabled&&tl()}
`,ky=X.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:n,variant:r})=>r==="flat"?n.canvas:n.material};
`,Cy=k.forwardRef(({label:n,disabled:r=!1,variant:c="default",children:o,...h},g)=>_.createElement(Oy,{"aria-disabled":r,$disabled:r,variant:c,ref:g,...h},n&&_.createElement(ky,{variant:c},n),o));Cy.displayName="GroupBox";const $p=X.div`
  ${({theme:n,size:r="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${na(r)};
  width: 5px;
  border-top: 2px solid ${n.borderLightest};
  border-left: 2px solid ${n.borderLightest};
  border-bottom: 2px solid ${n.borderDark};
  border-right: 2px solid ${n.borderDark};
  background: ${n.material};
`}
`;$p.displayName="Handle";const My="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",_y=X.div`
  display: inline-block;
  height: ${({size:n})=>na(n)};
  width: ${({size:n})=>na(n)};
`,Ny=X.span`
  display: block;
  background: ${My};
  background-size: cover;
  width: 100%;
  height: 100%;
`,By=k.forwardRef(({size:n=30,...r},c)=>_.createElement(_y,{size:n,ref:c,...r},_.createElement(Ny,null)));By.displayName="Hourglass";const jy=X.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,Hy=X.div`
  position: relative;
`,Uy=X.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({theme:n})=>n.material};
  border-top: 4px solid ${({theme:n})=>n.borderLightest};
  border-left: 4px solid ${({theme:n})=>n.borderLightest};
  border-bottom: 4px solid ${({theme:n})=>n.borderDark};
  border-right: 4px solid ${({theme:n})=>n.borderDark};

  outline: 1px dotted ${({theme:n})=>n.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({theme:n})=>n.material};
  }
  box-shadow: 1px 1px 0 1px ${({theme:n})=>n.borderDarkest};

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
`,$y=X(fl).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,Ly=X.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({theme:n})=>n.material};
  border-left: 2px solid ${({theme:n})=>n.borderLightest};
  border-bottom: 2px solid ${({theme:n})=>n.borderDarkest};
  border-right: 2px solid ${({theme:n})=>n.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({theme:n})=>n.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({theme:n})=>n.material};
    border-left: 2px solid ${({theme:n})=>n.borderLightest};
    border-right: 2px solid ${({theme:n})=>n.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({theme:n})=>n.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({theme:n})=>n.material};
    border: 2px solid ${({theme:n})=>n.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({theme:n})=>n.borderLightest},
      1px 1px 0 1px ${({theme:n})=>n.borderDarkest};
  }
`,Yy=k.forwardRef(({backgroundStyles:n,children:r,...c},o)=>_.createElement(jy,{ref:o,...c},_.createElement(Hy,null,_.createElement(Uy,null,_.createElement($y,{style:n},r)),_.createElement(Ly,null))));Yy.displayName="Monitor";const Gy=X.div`
  display: inline-block;
  height: ${me.md};
  width: 100%;
`,qy=X(fl)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,Lp=rt`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,Qy=X.div`
  position: relative;
  top: 4px;
  ${Lp}
  background: ${({theme:n})=>n.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:n})=>n.materialText};
`,Xy=X.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${Lp}
  color: ${({theme:n})=>n.materialTextInvert};
  background: ${({theme:n})=>n.progress};
  clip-path: polygon(
    0 0,
    ${({value:n=0})=>n}% 0,
    ${({value:n=0})=>n}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,Vy=X.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,Yp=17,Zy=X.span`
  display: inline-block;
  width: ${Yp}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:n})=>n.progress};
  border-color: ${({theme:n})=>n.material};
  border-width: 0px 1px;
  border-style: solid;
`,Ky=k.forwardRef(({hideValue:n=!1,shadow:r=!0,value:c,variant:o="default",...h},g)=>{const y=n?null:`${c}%`,T=k.useRef(null),[A,v]=k.useState([]),R=k.useCallback(()=>{if(!T.current||c===void 0)return;const C=T.current.getBoundingClientRect().width,Y=Math.round(c/100*C/Yp);v(Array.from({length:Y}))},[c]);return k.useEffect(()=>(R(),window.addEventListener("resize",R),()=>window.removeEventListener("resize",R)),[R]),_.createElement(Gy,{"aria-valuenow":c!==void 0?Math.round(c):void 0,ref:g,role:"progressbar",variant:o,...h},_.createElement(qy,{variant:o,shadow:r},o==="default"?_.createElement(_.Fragment,null,_.createElement(Qy,{"data-testid":"defaultProgress1"},y),_.createElement(Xy,{"data-testid":"defaultProgress2",value:c},y)):_.createElement(Vy,{ref:T,"data-testid":"tileProgress"},A.map((C,Y)=>_.createElement(Zy,{key:Y})))))});Ky.displayName="ProgressBar";const Gp=rt`
  width: ${sl}px;
  height: ${sl}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Jy=X(fl)`
  ${Gp}
  background: ${({$disabled:n,theme:r})=>n?r.material:r.canvas};

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
`,Wy=X.div`
  ${Ca()}
  ${Gp}
  outline: none;
  background: ${({$disabled:n,theme:r})=>n?r.flatLight:r.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({theme:n})=>n.flatDark};
    border-radius: 50%;
  }
`,Fy=X.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${n=>n.$disabled?n.theme.checkmarkDisabled:n.theme.checkmark};
`,Iy={flat:Wy,default:Jy},Py=k.forwardRef(({checked:n,className:r="",disabled:c=!1,label:o="",onChange:h,style:g={},variant:y="default",...T},A)=>{const v=Iy[y];return _.createElement(vs,{$disabled:c,className:r,style:g},_.createElement(v,{$disabled:c,role:"presentation"},n&&_.createElement(Fy,{$disabled:c,variant:y})),_.createElement(rr,{disabled:c,onChange:c?void 0:h,readOnly:c,type:"radio",checked:n,ref:A,...T}),o&&_.createElement(ys,null,o))});Py.displayName="Radio";const t1=typeof window<"u"?k.useLayoutEffect:k.useEffect;function wa(n){const r=k.useRef(n);return t1(()=>{r.current=n}),k.useCallback((...c)=>(0,r.current)(...c),[])}function H0(n,r){typeof n=="function"?n(r):n&&(n.current=r)}function U0(n,r){return k.useMemo(()=>n==null&&r==null?null:c=>{H0(n,c),H0(r,c)},[n,r])}var e1=V0();let vr=!0,us=!1,$0;const l1={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function a1(n){if("type"in n){const{type:r,tagName:c}=n;if(c==="INPUT"&&l1[r]&&!n.readOnly||c==="TEXTAREA"&&!n.readOnly)return!0}return!!("isContentEditable"in n&&n.isContentEditable)}function n1(n){n.metaKey||n.altKey||n.ctrlKey||(vr=!0)}function Xc(){vr=!1}function i1(){this.visibilityState==="hidden"&&us&&(vr=!0)}function u1(n){n.addEventListener("keydown",n1,!0),n.addEventListener("mousedown",Xc,!0),n.addEventListener("pointerdown",Xc,!0),n.addEventListener("touchstart",Xc,!0),n.addEventListener("visibilitychange",i1,!0)}function r1(n){const{target:r}=n;try{return r.matches(":focus-visible")}catch{}return vr||a1(r)}function o1(){us=!0,window.clearTimeout($0),$0=window.setTimeout(()=>{us=!1},100)}function c1(){const n=k.useCallback(r=>{const c=e1.findDOMNode(r);c!=null&&u1(c.ownerDocument)},[]);return{isFocusVisible:r1,onBlurVisible:o1,ref:n}}function s1(n,r,c){return(c-r)*n+r}function Ju(n,r){if(r!==void 0&&"changedTouches"in n){for(let c=0;c<n.changedTouches.length;c+=1){const o=n.changedTouches[c];if(o.identifier===r)return{x:o.clientX,y:o.clientY}}return!1}return"clientX"in n?{x:n.clientX,y:n.clientY}:!1}function Wu(n){return n&&n.ownerDocument||document}function f1(n,r){var c;const{index:o}=(c=n.reduce((h,g,y)=>{const T=Math.abs(r-g);return h===null||T<h.distance||T===h.distance?{distance:T,index:y}:h},null))!==null&&c!==void 0?c:{};return o??-1}const d1=X.div`
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
    height: ${({hasMarks:n})=>n?"41px":"39px"};
    ${({isFocused:n,theme:r})=>n&&`
        outline: 2px dotted ${r.materialText};
        `}
  }

  ${({orientation:n,size:r})=>n==="vertical"?rt`
          height: ${r};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:c})=>c?"41px":"39px"};
          }
        `:rt`
          width: ${r};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:c})=>c?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:n})=>n?"none":"auto"};
`,qp=()=>rt`
  position: absolute;
  ${({orientation:n})=>n==="vertical"?rt`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:rt`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,h1=X(fl)`
  ${qp()}
`,p1=X(fl)`
  ${qp()}

  border-left-color: ${({theme:n})=>n.flatLight};
  border-top-color: ${({theme:n})=>n.flatLight};
  border-right-color: ${({theme:n})=>n.canvas};
  border-bottom-color: ${({theme:n})=>n.canvas};
  &:before {
    border-left-color: ${({theme:n})=>n.flatDark};
    border-top-color: ${({theme:n})=>n.flatDark};
    border-right-color: ${({theme:n})=>n.flatLight};
    border-bottom-color: ${({theme:n})=>n.flatLight};
  }
`,m1=X.span`
  position: relative;
  ${({orientation:n})=>n==="vertical"?rt`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:rt`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:n})=>n==="flat"?rt`
          ${Ca()}
          outline: 2px solid ${({theme:r})=>r.flatDark};
          background: ${({theme:r})=>r.flatLight};
        `:rt`
          ${el()}
          ${Wt()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:n,theme:r})=>n&&Bi({mainColor:r.material,secondaryColor:r.borderLightest})}
`,sr=6,g1=X.span`
  display: inline-block;
  position: absolute;

  ${({orientation:n})=>n==="vertical"?rt`
          right: ${-8}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${sr}px;
          border-bottom: 2px solid ${({theme:r})=>r.materialText};
        `:rt`
          bottom: ${-6}px;
          height: ${sr}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:r})=>r.materialText};
          border-right: 1px solid ${({theme:r})=>r.materialText};
        `}

  color:  ${({theme:n})=>n.materialText};
  ${({$disabled:n,theme:r})=>n&&rt`
      ${tl()}
      box-shadow: 1px 1px 0px ${r.materialTextDisabledShadow};
      border-color: ${r.materialTextDisabled};
    `}
`,b1=X.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:n})=>n==="vertical"?rt`
          transform: translate(${sr+2}px, ${sr+1}px);
        `:rt`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,v1=k.forwardRef(({defaultValue:n,disabled:r=!1,marks:c=!1,max:o=100,min:h=0,name:g,onChange:y,onChangeCommitted:T,onMouseDown:A,orientation:v="horizontal",size:R="100%",step:C=1,value:Y,variant:tt="default",...W},ut)=>{const I=tt==="flat"?p1:h1,P=v==="vertical",[lt=h,V]=ia({defaultValue:n,onChange:y??T,value:Y}),{isFocusVisible:at,onBlurVisible:M,ref:et}=c1(),[F,xt]=k.useState(!1),At=k.useRef(),Xt=k.useRef(null),Ct=U0(et,At),bt=U0(ut,Ct),d=wa(N=>{at(N)&&xt(!0)}),U=wa(()=>{F!==!1&&(xt(!1),M())}),Z=k.useRef(),D=k.useMemo(()=>c===!0&&Number.isFinite(C)?[...Array(Math.round((o-h)/C)+1)].map((N,q)=>({label:void 0,value:h+C*q})):Array.isArray(c)?c:[],[c,o,h,C]),B=wa(N=>{const q=(o-h)/10,nt=D.map(ft=>ft.value),J=nt.indexOf(lt);let ct=0;switch(N.key){case"Home":ct=h;break;case"End":ct=o;break;case"PageUp":C&&(ct=lt+q);break;case"PageDown":C&&(ct=lt-q);break;case"ArrowRight":case"ArrowUp":C?ct=lt+C:ct=nt[J+1]||nt[nt.length-1];break;case"ArrowLeft":case"ArrowDown":C?ct=lt-C:ct=nt[J-1]||nt[0];break;default:return}N.preventDefault(),C&&(ct=N0(ct,C,h)),ct=Ra(ct,h,o),V(ct),xt(!0),y==null||y(ct),T==null||T(ct)}),Q=k.useCallback(N=>{if(!At.current)return 0;const q=At.current.getBoundingClientRect();let nt;P?nt=(q.bottom-N.y)/q.height:nt=(N.x-q.left)/q.width;let J;if(J=s1(nt,h,o),C)J=N0(J,C,h);else{const ct=D.map(G=>G.value),ft=f1(ct,J);J=ct[ft]}return J=Ra(J,h,o),J},[D,o,h,C,P]),it=wa(N=>{var q;const nt=Ju(N,Z.current);if(!nt)return;const J=Q(nt);(q=Xt.current)===null||q===void 0||q.focus(),V(J),xt(!0),y==null||y(J)}),p=wa(N=>{const q=Ju(N,Z.current);if(!q)return;const nt=Q(q);T==null||T(nt),Z.current=void 0;const J=Wu(At.current);J.removeEventListener("mousemove",it),J.removeEventListener("mouseup",p),J.removeEventListener("touchmove",it),J.removeEventListener("touchend",p)}),j=wa(N=>{var q;A==null||A(N),N.preventDefault(),(q=Xt.current)===null||q===void 0||q.focus(),xt(!0);const nt=Ju(N,Z.current);if(nt){const ct=Q(nt);V(ct),y==null||y(ct)}const J=Wu(At.current);J.addEventListener("mousemove",it),J.addEventListener("mouseup",p)}),K=wa(N=>{var q;N.preventDefault();const nt=N.changedTouches[0];nt!=null&&(Z.current=nt.identifier),(q=Xt.current)===null||q===void 0||q.focus(),xt(!0);const J=Ju(N,Z.current);if(J){const ft=Q(J);V(ft),y==null||y(ft)}const ct=Wu(At.current);ct.addEventListener("touchmove",it),ct.addEventListener("touchend",p)});return k.useEffect(()=>{const{current:N}=At;N==null||N.addEventListener("touchstart",K);const q=Wu(N);return()=>{N==null||N.removeEventListener("touchstart",K),q.removeEventListener("mousemove",it),q.removeEventListener("mouseup",p),q.removeEventListener("touchmove",it),q.removeEventListener("touchend",p)}},[p,it,K]),_.createElement(d1,{$disabled:r,hasMarks:!!D.length,isFocused:F,onMouseDown:j,orientation:v,ref:bt,size:na(R),...W},_.createElement("input",{disabled:r,name:g,type:"hidden",value:lt??0}),D&&D.map(N=>_.createElement(g1,{$disabled:r,"data-testid":"tick",key:N.value/(o-h)*100,orientation:v,style:{[P?"bottom":"left"]:`${(N.value-h)/(o-h)*100}%`}},N.label&&_.createElement(b1,{"aria-hidden":!0,"data-testid":"mark",orientation:v},N.label))),_.createElement(I,{orientation:v,variant:tt}),_.createElement(m1,{$disabled:r,"aria-disabled":r?!0:void 0,"aria-orientation":v,"aria-valuemax":o,"aria-valuemin":h,"aria-valuenow":lt,onBlur:U,onFocus:d,onKeyDown:B,orientation:v,ref:Xt,role:"slider",style:{[P?"bottom":"left"]:`${(P?-100:0)+100*(lt-h)/(o-h)}%`},tabIndex:r?void 0:0,variant:tt}))});v1.displayName="Slider";const y1=X.tbody`
  background: ${({theme:n})=>n.canvas};
  display: table-row-group;
  box-shadow: ${gs};
  overflow-y: auto;
`,x1=k.forwardRef(function({children:r,...c},o){return _.createElement(y1,{ref:o,...c},r)});x1.displayName="TableBody";const A1=X.td`
  padding: 0 8px;
`,S1=k.forwardRef(function({children:r,...c},o){return _.createElement(A1,{ref:o,...c},r)});S1.displayName="TableDataCell";const E1=X.thead`
  display: table-header-group;
`,w1=k.forwardRef(function({children:r,...c},o){return _.createElement(E1,{ref:o,...c},r)});w1.displayName="TableHead";const T1=X.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({theme:n})=>n.material};
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
    ${Wt()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:n})=>!n&&rt`
      &:active {
        &:before {
          ${Wt({invert:!0,style:"window"})}
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

  color: ${({theme:n})=>n.materialText};
  ${({$disabled:n})=>n&&tl()}
  &:hover {
    color: ${({theme:n})=>n.materialText};
    ${({$disabled:n})=>n&&tl()}
  }
`,D1=k.forwardRef(function({disabled:r=!1,children:c,onClick:o,onTouchStart:h=Ma,sort:g,...y},T){const A=g==="asc"?"ascending":g==="desc"?"descending":void 0;return _.createElement(T1,{$disabled:r,"aria-disabled":r,"aria-sort":A,onClick:r?void 0:o,onTouchStart:r?void 0:h,ref:T,...y},_.createElement("div",null,c))});D1.displayName="TableHeadCell";const R1=X.tr`
  color: inherit;
  display: table-row;
  height: calc(${me.md} - 2px);
  line-height: calc(${me.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:n})=>n.canvasText};
  &:hover {
    background: ${({theme:n})=>n.hoverBackground};
    color: ${({theme:n})=>n.canvasTextInvert};
  }
`,z1=k.forwardRef(function({children:r,...c},o){return _.createElement(R1,{ref:o,...c},r)});z1.displayName="TableRow";const O1=X.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,k1=X(fl)`
  &:before {
    box-shadow: none;
  }
`,C1=k.forwardRef(({children:n,...r},c)=>_.createElement(k1,null,_.createElement(O1,{ref:c,...r},n)));C1.displayName="Table";const M1=X.button`
  ${el()}
  ${Wt()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${me.md};
  line-height: ${me.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({theme:n})=>n.materialText};
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
    ${kn}
    outline-offset: -6px;
  }
  ${n=>n.selected&&`
    z-index: 1;
    height: calc(${me.md} + 4px);
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
    background: ${({theme:n})=>n.material};
    bottom: -4px;
    left: 2px;
  }
`,_1=k.forwardRef(({value:n,onClick:r,selected:c=!1,children:o,...h},g)=>_.createElement(M1,{"aria-selected":c,selected:c,onClick:y=>r==null?void 0:r(n,y),ref:g,role:"tab",...h},o));_1.displayName="Tab";const N1=X.div`
  ${el()}
  ${Wt()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,B1=k.forwardRef(({children:n,...r},c)=>_.createElement(N1,{ref:c,...r},n));B1.displayName="TabBody";const j1=X.div`
  position: relative;
  ${({isMultiRow:n,theme:r})=>n&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${r.borderDark};
  }
  `}
`,H1=X.div.attrs(()=>({"data-testid":"tab-row"}))`
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
    border-right: 2px solid ${({theme:n})=>n.borderDarkest};
    border-left: 2px solid ${({theme:n})=>n.borderLightest};
  }
`;function U1(n,r){const c=[];for(let o=r;o>0;o-=1)c.push(n.splice(0,Math.ceil(n.length/o)));return c}const $1=k.forwardRef(({value:n,onChange:r=Ma,children:c,rows:o=1,...h},g)=>{const y=k.useMemo(()=>{var T;const A=(T=_.Children.map(c,C=>{if(!_.isValidElement(C))return null;const Y={selected:C.props.value===n,onClick:r};return _.cloneElement(C,Y)}))!==null&&T!==void 0?T:[],v=U1(A,o).map((C,Y)=>({key:Y,tabs:C})),R=v.findIndex(C=>C.tabs.some(Y=>Y.props.selected));return v.push(v.splice(R,1)[0]),v},[c,r,o,n]);return _.createElement(j1,{...h,isMultiRow:o>1,role:"tablist",ref:g},y.map(T=>_.createElement(H1,{key:T.key},T.tabs)))});$1.displayName="Tabs";const L1=["blur","focus"],Y1=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function L0(n){return"nativeEvent"in n&&L1.includes(n.type)}function Y0(n){return"nativeEvent"in n&&Y1.includes(n.type)}const G1={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},q1=X.span`
  position: absolute;

  z-index: 1;
  display: ${n=>n.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:n})=>n.borderDarkest};
  background: ${({theme:n})=>n.tooltip};
  box-shadow: ${ms};
  text-align: center;
  font-size: 1rem;
  ${n=>G1[n.position]}
`,Q1=X.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,X1=k.forwardRef(({className:n,children:r,disableFocusListener:c=!1,disableMouseListener:o=!1,enterDelay:h=1e3,leaveDelay:g=0,onBlur:y,onClose:T,onFocus:A,onMouseEnter:v,onMouseLeave:R,onOpen:C,style:Y,text:tt,position:W="top",...ut},I)=>{const[P,lt]=k.useState(!1),[V,at]=k.useState(),[M,et]=k.useState(),F=!c,xt=!o,At=Q=>{window.clearTimeout(V),window.clearTimeout(M);const it=window.setTimeout(()=>{lt(!0),C==null||C(Q)},h);at(it)},Xt=Q=>{Q.persist(),L0(Q)?A==null||A(Q):Y0(Q)&&(v==null||v(Q)),At(Q)},Ct=Q=>{window.clearTimeout(V),window.clearTimeout(M);const it=window.setTimeout(()=>{lt(!1),T==null||T(Q)},g);et(it)},bt=Q=>{Q.persist(),L0(Q)?y==null||y(Q):Y0(Q)&&(R==null||R(Q)),Ct(Q)},d=F?bt:void 0,U=F?Xt:void 0,Z=xt?Xt:void 0,D=xt?bt:void 0,B=F?0:void 0;return _.createElement(Q1,{"data-testid":"tooltip-wrapper",onBlur:d,onFocus:U,onMouseEnter:Z,onMouseLeave:D,tabIndex:B},_.createElement(q1,{className:n,"data-testid":"tooltip",position:W,ref:I,show:P,style:Y,...ut},tt),r)});X1.displayName="Tooltip";const rs=X(ys)`
  white-space: nowrap;
`,Qp=rt`
  :focus {
    outline: none;
  }

  ${({$disabled:n})=>n?"cursor: default;":rt`
          cursor: pointer;

          :focus {
            ${rs} {
              background: ${({theme:r})=>r.hoverBackground};
              color: ${({theme:r})=>r.materialTextInvert};
              outline: 2px dotted ${({theme:r})=>r.focusSecondary};
            }
          }
        `}
`,V1=X.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:n})=>n&&rt`
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
      border-top: 2px dashed ${({theme:n})=>n.borderDark};
      font-size: 12px;
    }
  }
`,Z1=X.li`
  position: relative;
  padding-left: ${({hasItems:n})=>n?"0":"13px"};

  ${({isRootLevel:n})=>n?rt`
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
        `:rt`
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
      border-left: 2px dashed ${({theme:n})=>n.borderDark};
    }
  }
`,K1=X.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,J1=X.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:n})=>n.materialText};
  user-select: none;
  padding-left: 18px;
  ${Qp};

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
`,G0=X(vs)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${Qp};
`,W1=X.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function q0(n,r){return n.includes(r)?n.filter(c=>c!==r):[...n,r]}function Q0(n){n.preventDefault()}function Xp({className:n,disabled:r,expanded:c,innerRef:o,level:h,select:g,selected:y,style:T,tree:A=[]}){const v=h===0,R=k.useCallback(C=>{var Y,tt;const W=!!(C.items&&C.items.length>0),ut=c.includes(C.id),I=(Y=r||C.disabled)!==null&&Y!==void 0?Y:!1,P=I?Q0:M=>g(M,C),lt=I?Q0:M=>g(M,C),V=y===C.id,at=_.createElement(W1,{"aria-hidden":!0},C.icon);return _.createElement(Z1,{key:C.label,isRootLevel:v,role:"treeitem","aria-expanded":ut,"aria-selected":V,hasItems:W},W?_.createElement(K1,{open:ut},_.createElement(J1,{onClick:P,$disabled:I},_.createElement(G0,{$disabled:I},at,_.createElement(rs,null,C.label))),ut&&_.createElement(Xp,{className:n,disabled:I,expanded:c,level:h+1,select:g,selected:y,style:T,tree:(tt=C.items)!==null&&tt!==void 0?tt:[]})):_.createElement(G0,{as:"button",$disabled:I,onClick:lt},at,_.createElement(rs,null,C.label)))},[n,r,c,v,h,g,y,T]);return _.createElement(V1,{className:v?n:void 0,style:v?T:void 0,ref:v?o:void 0,role:v?"tree":"group",isRootLevel:v},A.map(R))}function F1({className:n,defaultExpanded:r=[],defaultSelected:c,disabled:o=!1,expanded:h,onNodeSelect:g,onNodeToggle:y,selected:T,style:A,tree:v=[]},R){const[C,Y]=ia({defaultValue:r,onChange:y,onChangePropName:"onNodeToggle",value:h,valuePropName:"expanded"}),[tt,W]=ia({defaultValue:c,onChange:g,onChangePropName:"onNodeSelect",value:T,valuePropName:"selected"}),ut=k.useCallback((lt,V)=>{if(y){const at=q0(C,V);y(lt,at)}Y(at=>q0(at,V))},[C,y,Y]),I=k.useCallback((lt,V)=>{W(V),g&&g(lt,V)},[g,W]),P=k.useCallback((lt,V)=>{lt.preventDefault(),I(lt,V.id),V.items&&V.items.length&&ut(lt,V.id)},[I,ut]);return _.createElement(Xp,{className:n,disabled:o,expanded:C,level:0,innerRef:R,select:P,selected:tt,style:A,tree:v})}const I1=k.forwardRef(F1);I1.displayName="TreeView";const P1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAD/AP8A/6C9p5MAAAVLSURBVFjD7ZdbiFVlFMd/a+1znZvjXNJx8lLmkIbaSxkFEQXKZGT2YkQPUREW+RD03FMU9GaQQQm9FT1EkaVCISFRqOUlNQ1Myrk1XufMnNvMOftbPezLOXNmxkYhguiDfdjfPt/51n/9//+91nfg//EvD6mfFItFstms7v7ww7Xnh0c6fDCpWyQilnZOJ4sFm20z9TxLt7dTKk9K3cayuLPjyo7t209NTEy4tra22QGYWTRvfvHJrR/pT4c3dZmrFj2PcqWKYpiIpR58WDpWr8GcA5HgCsDhSiUb2LvHciMjKiqogDMSunLV/l0Hv3u6Awr5fJ7W1tYYQCK62blzJ+nm5rWH93zxRtuZUw/0Xx5JrRdSY2pc8sETqKowvrqPpVueAHOY71MdHsQvFrBsllRrO4N7Pyc/dolKmE1F4NBg6v5XH+1/79Z773st7enFegZiAENDQ0hLa3vq6JFHNl8bbRIVFEMBDRM1EZwozhz4Pp5zNL+/i9wP3zK09DYyr7/JqoxHNg0XfOGKQQnjnj8Hu04UipvPqvfL6nXr9t++dOnx8wMD0wEAGNAssCTt0eGMBb7jWhTcwgUh3YgggJTKuLEybmEe3zkSBosqsCABFRUGxRidhGJ+rCPx3YG3zuSu6ejAwPEZDNSDyCD0qGF+LaiGbnHOxWuds4AlA/MNcwHKrEAWwzkjoXBJhF4cU67CuakpJmeTIN7ULEjXrGZRi3HUDBt+f+WOPnL5AtVFPbSk0zVXO1CFhT6sVuMCwgCQEmgCxucCELGAhDcSBQ3uVSV8Yww8j+SzL9DpHF3qUapM4lykU3AJsAwQM46Fm+v1GFAk0NgkDq5SA2VVH6v6iDlAUNUg1YC+AFxUPFyYhNYknF55ZpMAi7MXYIlCd5i9c47Sns9IH/4hlCB0Z5i0b46m4cFaEK2xGOA1BLs+AEEQZxBS2Rp5zsKMfj0FZ05N88e0zLQhy/rnDhriz+YBC/kS8Ou8EG3SkNk0EMwxrwfydxIYoeHCUUYpexr8ThoWRlpb3TOtzdWg2fdRMYTQwA0IZjJgxO8zBu+K8oWXJOspZoYZeBpEjTaz2A9hazAwFRY4eNsvscJ8zAIFGgiYBUBY+ZwJJ53Q8uhmtmy4h0RIS8SOagL1PHzfDxoThqhizjGRz5G7No4W8/z41T66xq+GPauunM4FQCT4qGL8bMrdGx9jw3MvcCPj4uWL/HHhD/Lnz/PbgYNM5K4G4GXmWm18EMhqpDCeSvqs9+zv4s0Y3Z3d3NK9GKk6Hk9W6PGiYPWnizkAWHgEmRT42IRjpvMI2ciikEwk8EXZW00wKnVvZ0M+MwGEOnnAcoOFduMMRHE8fJZJhbRFR6t5eMAI+r6a0CcO9WReAWcHYXSLR5ODgoKLHH49BiKaphx8YnDSd/MM1xjdqJryTTXJ6FwFizlKMRgZjGcEVG5SAoOkObZ6ZRYDFw1kXhKYxZ2w06AiNyeBqJBMKl1iHHRwziWoJgDRaRBiAC0tLSRbmidPdt4y8CX+8ucLVzMtAmePHuLCgjbwHWaBHCIan4w07NWRUCJCJpNhaGSYgeNHmSqW+cZSDKeaqsnO1svZnt6ccgQzQ8JjHQD79u0jk05nToyM9p7dvWv3tmPfP7QMeEeTfCqCB8SnMYmP8UH3lLh5xiBMHEkHa6aMq05Ir1g5dOemjdvu6us7vePll8YiADED/f395HK58kNtbb+/cuDrXR8UCl+3m3ODqPX4KsH/gOkS1nfi2ZpjAigBHk7aenrGV/b2ni5OjI9FIGFmb/hHhjXUErlJX/03x19dE2bA1PxYJgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNS0wMS0yOVQxMTowMjowOSswMDowMEhEIm4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjUtMDEtMjlUMTE6MDI6MDkrMDA6MDA5GZrSAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI1LTAxLTI5VDExOjAyOjEwKzAwOjAwNz7+QAAAAABJRU5ErkJggg==",tx="/assets/power-8gjksgpq.png";var Vc,X0;function ex(){if(X0)return Vc;X0=1;var n={name:"vistaesqueMidnight",anchor:"rgb(64, 64, 192)",anchorVisited:"rgb(64, 64, 192)",borderDark:"rgb(21, 21, 21)",borderDarkest:"rgb(0, 0, 0)",borderLight:"rgb(32, 32, 32)",borderLightest:"rgb(128, 128, 128)",canvas:"rgb(0, 0, 0)",canvasText:"rgb(255, 255, 255)",canvasTextDisabled:"rgb(21, 21, 21)",canvasTextDisabledShadow:"rgb(128, 128, 128)",canvasTextInvert:"rgb(255, 255, 255)",checkmark:"rgb(255, 255, 255)",checkmarkDisabled:"rgb(32, 32, 32)",desktopBackground:"rgb(31, 60, 89)",flatDark:"rgb(21, 21, 21)",flatLight:"rgb(32, 32, 32)",focusSecondary:"rgb(128, 128, 128)",headerBackground:"linear-gradient(to right, rgb(81, 132, 188), rgb(100, 168, 60))",headerNotActiveBackground:"linear-gradient(to right, rgb(22, 46, 101), rgb(18, 91, 30))",headerNotActiveText:"rgb(192, 192, 192)",headerText:"rgb(255, 255, 255)",hoverBackground:"rgb(49, 106, 197)",material:"rgb(32, 32, 32)",materialDark:"rgb(22, 46, 101)",materialText:"rgb(255, 255, 255)",materialTextDisabled:"rgb(21, 21, 21)",materialTextDisabledShadow:"rgb(128, 128, 128)",materialTextInvert:"rgb(255, 255, 255)",progress:"rgb(49, 106, 197)",tooltip:"rgb(0, 0, 30)"};return Vc=n,Vc}var lx=ex();const ax=os(lx);(function(){var n,r=document.createElement("div");r.innerHTML="<div class=crt></div><div class=wb-header><div class=wb-control><span class=wb-min></span><span class=wb-max></span><span class=wb-full></span><span class=wb-close></span></div><div class=wb-drag><div class=wb-icon></div><div class=wb-title></div></div></div><div class=wb-body></div><div class=wb-n></div><div class=wb-s></div><div class=wb-w></div><div class=wb-e></div><div class=wb-nw></div><div class=wb-ne></div><div class=wb-se></div><div class=wb-sw></div></div>";function c(d,U,Z,D){d&&d.addEventListener(U,Z,D||!1)}function o(d,U){var Z=window,D=v;Z&&Z.removeEventListener(d,U,D||!1)}function h(d,U){d.stopPropagation(),U&&d.preventDefault()}function g(d,U,Z){Z=""+Z,d["_s_"+U]!==Z&&(d.style.setProperty(U,Z),d["_s_"+U]=Z)}var y=[],T=[],A={capture:!0,passive:!1},v={capture:!0,passive:!0},R,C=0,Y=10,tt,W,ut,I,P,lt;function V(d,U){if(!(this instanceof V))return new V(d);if(R||M(),d){if(U){var Z=d;d=U}if(typeof d=="string")Z=d;else{var D=d.id,B=d.index,Q=d.root,it=d.template;Z=Z||d.title;var p=d.icon,j=d.mount,K=d.html,N=d.url,q=d.width,nt=d.height,J=d.minwidth,ct=d.minheight,ft=d.maxwidth,G=d.maxheight,mt=d.autosize,dt=d.overflow,vt=d.min,Rt=d.max,Nt=d.hidden,Gt=d.modal,le=d.x||(Gt?"center":0),qt=d.y||(Gt?"center":0),ge=d.top,ie=d.left,He=d.bottom,Ee=d.right,ll=d.background,Ue=d.border,Cl=d.header,_a=d.class,Ml=d.oncreate,xe=d.onclose,al=d.onfocus,Ae=d.onblur,yr=d.onmove,xr=d.onresize,Ar=d.onfullscreen,Na=d.onmaximize,Ba=d.onminimize,dl=d.onrestore,ja=d.onhide,ua=d.onshow,Sr=d.onload}}this.g=(it||r).cloneNode(!0),this.g.id=this.id=D||"winbox-"+ ++C,this.g.className="winbox"+(_a?" "+(typeof _a=="string"?_a:_a.join(" ")):"")+(Gt?" modal":""),this.g.winbox=this,this.window=this.g,this.body=this.g.getElementsByClassName("wb-body")[0],this.h=Cl||35,T.push(this),ll&&this.setBackground(ll),Ue?g(this.body,"margin",Ue+(isNaN(Ue)?"":"px")):Ue=0,Cl&&(U=this.g.getElementsByClassName("wb-header")[0],g(U,"height",Cl+"px"),g(U,"line-height",Cl+"px"),g(this.body,"top",Cl+"px")),Z&&this.setTitle(Z),p&&this.setIcon(p),j?this.mount(j):K?this.body.innerHTML=K:N&&this.setUrl(N,Sr),ge=ge?at(ge,P):0,He=He?at(He,P):0,ie=ie?at(ie,I):0,Ee=Ee?at(Ee,I):0,Z=I-ie-Ee,p=P-ge-He,ft=ft?at(ft,Z):Z,G=G?at(G,p):p,J=J?at(J,ft):150,ct=ct?at(ct,G):this.h,mt?((Q||R).appendChild(this.body),q=Math.max(Math.min(this.body.clientWidth+2*Ue+1,ft),J),nt=Math.max(Math.min(this.body.clientHeight+this.h+Ue+1,G),ct),this.g.appendChild(this.body)):(q=q?at(q,ft):Math.max(ft/2,J)|0,nt=nt?at(nt,G):Math.max(G/2,ct)|0),le=le?at(le,Z,q):ie,qt=qt?at(qt,p,nt):ge,this.x=le,this.y=qt,this.width=q,this.height=nt,this.s=J,this.o=ct,this.m=ft,this.l=G,this.top=ge,this.right=Ee,this.bottom=He,this.left=ie,this.index=B,this.j=dt,this.focused=this.hidden=this.full=this.max=this.min=!1,this.onclose=xe,this.onfocus=al,this.onblur=Ae,this.onmove=yr,this.onresize=xr,this.onfullscreen=Ar,this.onmaximize=Na,this.onminimize=Ba,this.onrestore=dl,this.onhide=ja,this.onshow=ua,Nt?this.hide():this.focus(),(B||B===0)&&(this.index=B,g(this.g,"z-index",B),B>Y&&(Y=B)),Rt?this.maximize():vt?this.minimize():this.resize().move(),et(this),(Q||R).appendChild(this.g),Ml&&Ml.call(this,d)}V.new=function(d){return new V(d)},V.stack=function(){return T};function at(d,U,Z){return typeof d=="string"&&(d==="center"?d=(U-Z)/2+.5|0:d==="right"||d==="bottom"?d=U-Z:(Z=parseFloat(d),d=(""+Z!==d&&d.substring((""+Z).length))==="%"?U/100*Z+.5|0:Z)),d}function M(){R=document.body,R[W="requestFullscreen"]||R[W="msRequestFullscreen"]||R[W="webkitRequestFullscreen"]||R[W="mozRequestFullscreen"]||(W=""),ut=W&&W.replace("request","exit").replace("mozRequest","mozCancel").replace("Request","Exit"),c(window,"resize",function(){Xt(),xt()}),c(R,"mousedown",function(){lt=!1},!0),c(R,"mousedown",function(){if(!lt){var d=T.length;if(d)for(--d;0<=d;d--){var U=T[d];if(U.focused){U.blur();break}}}}),Xt()}function et(d){At(d,"drag"),At(d,"n"),At(d,"s"),At(d,"w"),At(d,"e"),At(d,"nw"),At(d,"ne"),At(d,"se"),At(d,"sw"),c(d.g.getElementsByClassName("wb-min")[0],"click",function(U){h(U),d.min?d.restore().focus():d.minimize()}),c(d.g.getElementsByClassName("wb-max")[0],"click",function(U){h(U),d.max?d.restore().focus():d.maximize().focus()}),W?c(d.g.getElementsByClassName("wb-full")[0],"click",function(U){h(U),d.fullscreen().focus()}):d.addClass("no-full"),c(d.g.getElementsByClassName("wb-close")[0],"click",function(U){h(U),d.close()||(d=null)}),c(d.g,"mousedown",function(){lt=!0},!0),c(d.body,"mousedown",function(){d.focus()},!0)}function F(d){y.splice(y.indexOf(d),1),xt(),d.removeClass("min"),d.min=!1,d.g.title=""}function xt(){for(var d=y.length,U={},Z={},D=0,B;D<d;D++)B=y[D],B=B.left+":"+B.top,Z[B]?Z[B]++:(U[B]=0,Z[B]=1);D=0;for(var Q,it;D<d;D++)B=y[D],Q=B.left+":"+B.top,it=Math.min((I-B.left-B.right)/Z[Q],250),B.resize(it+1|0,B.h,!0).move(B.left+U[Q]*it|0,P-B.bottom-B.h,!0),U[Q]++}function At(d,U){function Z(N){if(h(N,!0),d.focus(),U==="drag"){if(d.min){d.restore();return}if(!d.g.classList.contains("no-max")){var q=Date.now(),nt=q-K;if(K=q,300>nt){d.max?d.restore():d.maximize();return}}}d.min||(R.classList.add("wb-lock"),(it=N.touches)&&(it=it[0])?(N=it,c(window,"touchmove",D,v),c(window,"touchend",B,v)):(c(window,"mousemove",D,v),c(window,"mouseup",B,v)),p=N.pageX,j=N.pageY)}function D(N){h(N),it&&(N=N.touches[0]);var q=N.pageX;N=N.pageY;var nt=q-p,J=N-j,ct=d.width,ft=d.height,G=d.x,mt=d.y,dt;if(U==="drag"){if(d.g.classList.contains("no-move"))return;d.x+=nt,d.y+=J;var vt=dt=1}else{if(U==="e"||U==="se"||U==="ne"){d.width+=nt;var Rt=1}else(U==="w"||U==="sw"||U==="nw")&&(d.x+=nt,d.width-=nt,vt=Rt=1);if(U==="s"||U==="se"||U==="sw"){d.height+=J;var Nt=1}else(U==="n"||U==="ne"||U==="nw")&&(d.y+=J,d.height-=J,dt=Nt=1)}Rt&&(d.width=Math.max(Math.min(d.width,d.m,I-d.x-d.right),d.s),Rt=d.width!==ct),Nt&&(d.height=Math.max(Math.min(d.height,d.l,P-d.y-d.bottom),d.o),Nt=d.height!==ft),(Rt||Nt)&&d.resize(),vt&&(d.max&&(d.x=(q<I/3?d.left:q>I/3*2?I-d.width-d.right:I/2-d.width/2)+nt),d.x=Math.max(Math.min(d.x,d.j?I-30:I-d.width-d.right),d.j?30-d.width:d.left),vt=d.x!==G),dt&&(d.max&&(d.y=d.top+J),d.y=Math.max(Math.min(d.y,d.j?P-d.h:P-d.height-d.bottom),d.top),dt=d.y!==mt),(vt||dt)&&(d.max&&d.restore(),d.move()),(Rt||vt)&&(p=q),(Nt||dt)&&(j=N)}function B(N){h(N),R.classList.remove("wb-lock"),it?(o("touchmove",D),o("touchend",B)):(o("mousemove",D),o("mouseup",B))}var Q=d.g.getElementsByClassName("wb-"+U)[0];if(Q){var it,p,j,K=0;c(Q,"mousedown",Z,A),c(Q,"touchstart",Z,A)}}function Xt(){var d=document.documentElement;I=d.clientWidth,P=d.clientHeight}n=V.prototype,n.mount=function(d){return this.unmount(),d.i||(d.i=d.parentNode),this.body.textContent="",this.body.appendChild(d),this},n.unmount=function(d){var U=this.body.firstChild;if(U){var Z=d||U.i;Z&&Z.appendChild(U),U.i=d}return this},n.setTitle=function(d){var U=this.g.getElementsByClassName("wb-title")[0];d=this.title=d;var Z=U.firstChild;return Z?Z.nodeValue=d:U.textContent=d,this},n.setIcon=function(d){var U=this.g.getElementsByClassName("wb-icon")[0];return g(U,"background-image","url("+d+")"),g(U,"display","inline-block"),this},n.setBackground=function(d){return g(this.g,"background",d),this},n.setUrl=function(d,U){var Z=this.body.firstChild;return Z&&Z.tagName.toLowerCase()==="iframe"?Z.src=d:(this.body.innerHTML='<iframe src="'+d+'"></iframe>',U&&(this.body.firstChild.onload=U)),this},n.focus=function(d){if(d===!1)return this.blur();if(!this.focused){if(d=T.length,1<d)for(var U=1;U<=d;U++){var Z=T[d-U];if(Z.focused){Z.blur(),T.push(T.splice(T.indexOf(this),1)[0]);break}}g(this.g,"z-index",++Y),this.index=Y,this.addClass("focus"),this.focused=!0,this.onfocus&&this.onfocus()}return this},n.blur=function(d){return d===!1?this.focus():(this.focused&&(this.removeClass("focus"),this.focused=!1,this.onblur&&this.onblur()),this)},n.hide=function(d){if(d===!1)return this.show();if(!this.hidden)return this.onhide&&this.onhide(),this.hidden=!0,this.addClass("hide")},n.show=function(d){if(d===!1)return this.hide();if(this.hidden)return this.onshow&&this.onshow(),this.hidden=!1,this.removeClass("hide")},n.minimize=function(d){return d===!1?this.restore():(tt&&bt(),this.max&&(this.removeClass("max"),this.max=!1),this.min||(y.push(this),xt(),this.g.title=this.title,this.addClass("min"),this.min=!0,this.focused&&(this.blur(),Ct()),this.onminimize&&this.onminimize()),this)};function Ct(){var d=T.length;if(d)for(--d;0<=d;d--){var U=T[d];if(!U.min){U.focus();break}}}n.restore=function(){return tt&&bt(),this.min&&(F(this),this.resize().move(),this.onrestore&&this.onrestore()),this.max&&(this.max=!1,this.removeClass("max").resize().move(),this.onrestore&&this.onrestore()),this},n.maximize=function(d){return d===!1?this.restore():(tt&&bt(),this.min&&F(this),this.max||(this.addClass("max").resize(I-this.left-this.right,P-this.top-this.bottom,!0).move(this.left,this.top,!0),this.max=!0,this.onmaximize&&this.onmaximize()),this)},n.fullscreen=function(d){if(this.min&&(F(this),this.resize().move()),!tt||!bt())this.body[W](),tt=this,this.full=!0,this.onfullscreen&&this.onfullscreen();else if(d===!1)return this.restore();return this};function bt(){if(tt.full=!1,document.fullscreen||document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)return document[ut](),!0}n.close=function(d){if(this.onclose&&this.onclose(d))return!0;this.min&&F(this),T.splice(T.indexOf(this),1),this.unmount(),this.g.remove(),this.g.textContent="",this.g=this.body=this.g.winbox=null,this.focused&&Ct()},n.move=function(d,U,Z){return d||d===0?Z||(this.x=d?d=at(d,I-this.left-this.right,this.width):0,this.y=U?U=at(U,P-this.top-this.bottom,this.height):0):(d=this.x,U=this.y),g(this.g,"left",d+"px"),g(this.g,"top",U+"px"),this.onmove&&this.onmove(d,U),this},n.resize=function(d,U,Z){return d||d===0?Z||(this.width=d?d=at(d,this.m):0,this.height=U?U=at(U,this.l):0,d=Math.max(d,this.s),U=Math.max(U,this.o)):(d=this.width,U=this.height),g(this.g,"width",d+"px"),g(this.g,"height",U+"px"),this.onresize&&this.onresize(d,U),this},n.addControl=function(d){var U=d.class,Z=d.image,D=d.click;d=d.index;var B=document.createElement("span"),Q=this.g.getElementsByClassName("wb-control")[0],it=this;return U&&(B.className=U),Z&&g(B,"background-image","url("+Z+")"),D&&(B.onclick=function(p){D.call(this,p,it)}),Q.insertBefore(B,Q.childNodes[d||0]),this},n.removeControl=function(d){return(d=this.g.getElementsByClassName(d)[0])&&d.remove(),this},n.addClass=function(d){return this.g.classList.add(d),this},n.removeClass=function(d){return this.g.classList.remove(d),this},n.toggleClass=function(d){return this.g.classList.contains(d)?this.removeClass(d):this.addClass(d)},window.WinBox=V}).call(void 0);const kl=WinBox,nx="/assets/monitor-C_8fxmva.gif",ix=()=>{const[n,r]=k.useState(0),c=k.useRef(null);return k.useEffect(()=>{let o=setTimeout(()=>{let h=Date.now();c.current=setInterval(()=>{const g=Date.now()-h,y=Math.min(g/4400*100,100);r(y),y===100&&(clearInterval(c.current),setTimeout(()=>r(100),500))},30)},300);return()=>{clearTimeout(o),clearInterval(c.current)}},[]),b.jsx("div",{className:"loading",children:b.jsxs("div",{className:"loading_elements",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[b.jsx("img",{src:nx,className:"monitor",alt:"WELCOME"}),b.jsx("br",{}),b.jsx("div",{className:"loading-bar-container",style:{width:240,height:18,background:"#222",borderRadius:1,overflow:"hidden",marginTop:24,border:"6px solid #000",boxShadow:"0 0 0 2px white"},children:b.jsx("div",{className:"loading-bar",style:{display:"flex",margin:0,width:`${n}%`,height:"100%",background:`repeating-linear-gradient(
        90deg,
        #fff 0,
        #fff 20px,
        #000 20px,
        #000 32px
      )`,transition:"width 0.1s linear"}})})]})})},ux="/assets/desktop_about-Co_MY-zl.png",rx="/assets/desktop_contact-CzjDK447.png",ox="/assets/desktop_donate-C7gYtXkA.png",cx="/assets/desktop_gallery-C3I7AZfD.png",sx="/assets/desktop_videos-tDmEpgWc.png",fx="/assets/desktop-about-D25J7FBa.gif",dx="/assets/desktop-contact-rvSfnR-d.gif",hx="/assets/desktop-donate-C1hVHRV6.gif",px="/assets/desktop-gallery-53zs2VC7.gif",mx="/assets/desktop-videos-BeKUbL9V.gif",gx="/assets/steam-dEuQyfPr.png",bx="/assets/money-spin-BlzhA9B2.gif",vx="/assets/tornada-EBsXzK05.png",yx="/assets/notepad-mDHfH400.png",xx="/assets/info-BTKMA8dZ.png",Ax="/assets/youtube-Bp2k9DZd.png",Sx="/assets/xitter-DLEKJHi9.png",Ex="/assets/instagram-BF4FSZOC.png",wx="/assets/newgrounds-CgzA7QG0.png",_t={desktop_about:ux,desktop_contact:rx,desktop_donate:ox,desktop_gallery:cx,desktop_videos:sx,desktop_about_gif:fx,desktop_contact_gif:dx,desktop_gallery_gif:px,desktop_donate_gif:hx,desktop_videos_gif:mx,tornada:vx,notepad:yx,info:xx,youtube:Ax,xitter:Sx,instagram:Ex,newgrounds:wx,steam:gx,moneyspin:bx},Tx="/assets/BG-ChzDYuHz.gif",Dx="/assets/BG2-k5_s1kkf.gif",Rx="/assets/BG3-D7uVfbO6.gif",Zc={background1:Tx,background2:Dx,background3:Rx},zx="/assets/aboutem-CqfbQsSa.gif",Ox=()=>b.jsx(b.Fragment,{children:b.jsx("div",{style:{width:"100%",height:"100%",padding:0,margin:0},children:b.jsxs("div",{className:"about-me",style:{display:"flex",margin:"0px 10px"},children:[b.jsxs("div",{className:"about-me-border",style:{lineHeight:1},children:[b.jsxs("p",{children:[b.jsx("span",{className:"ECKS-NAME",style:{marginRight:8},children:"ECKS"}),b.jsxs("span",{className:"ECKS-BIO",children:["is a self-driven creative powerhouse which prospers through 86 degrees of ",b.jsx("span",{className:"bigdeal",children:"visuals"}),", ",b.jsx("span",{className:"bigdeal",children:"audio"}),", and ",b.jsx("span",{className:"bigdeal",children:"wisdom."})," Everything you see here is formed from a collection of flickering synapses and questionable judgment."]})]}),b.jsx("p",{children:b.jsxs("span",{className:"ECKS-BIO",children:["Some of my work can be seen at ",b.jsx("a",{href:"https://tornada/net",target:"_blank",children:b.jsx("span",{className:"bigdeal",children:"Tornada"})})," - an animation supergroup with an all-star lineup of me and my relatives."]})}),b.jsx("span",{className:"ECKS-BIO",children:"I spend my waking hours dabbling in:"}),b.jsxs("ul",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gridTemplateRows:"repeat(2, auto)",gap:"8px 24px",listStyleType:"disc",margin:"16px 0",paddingLeft:"16px",maxWidth:500,lineHeight:1,fontSize:11,textRendering:"optimizeLegibility"},children:[b.jsx("li",{children:"After Effects"}),b.jsx("li",{children:"Adobe Photoshop"}),b.jsx("li",{children:"Adobe Premiere"}),b.jsx("li",{children:"VEGAS Pro"}),b.jsx("li",{children:"Blender"}),b.jsx("li",{children:"OBS"}),b.jsx("li",{children:"FL Studio"}),b.jsx("li",{children:"Avidemux"}),b.jsx("li",{children:"Tux Paint"}),b.jsx("li",{children:"and a dream!"})]}),b.jsx("span",{className:"ECKS-BIO",children:b.jsxs("p",{children:["Anyone looking to get in touch (or just say hi) can hit me via the links below or on the ",b.jsx("span",{className:"bigdeal",children:"contact"})," page."]})})]}),b.jsx("img",{src:zx,style:{marginLeft:24,marginTop:16,width:128,height:128}})]})})}),kx="/assets/Featured-VHS-CZPbi8Ts.gif",Kc=[{description:"Four colorful boys and their dad.",featuring:"ColeDog",featuring_link:"https://www.instagram.com/coledawg2001/"}],Fu=[{id:0,title:"THE_COLOR_BROTHERS",alt_title:"THE COLOR BROTHERS",url:"https://iframe.mediadelivery.net/embed/393622/b01f3be6-5a68-445e-9a39-a4f59d2ec845?autoplay=true&loop=false&muted=false&preload=true&responsive=true",source:"https://www.youtube.com/watch?v=KAqmREHqTmg",date:"03/25",description:" Segment I did for Tornada’s “Four of a Kind.” We all met up to shoot this a year prior and many strings were pulled that week. In between many sativa binges were me directing, editing, being the nigga behind the camera, yknow allat, and it is some of the most fun I’ve ever had putting something together. Eventually I wanna get around to putting a few outtakes on here.",thumbnail:"./thumbnails/colorbros.jpg",isYouTube:!1},{id:2,title:"HOT_THEM_SUMMER!",alt_title:"HOT THEM SUMMER",url:"https://iframe.mediadelivery.net/embed/393622/2acc6b72-6566-40f0-abb7-b2716fbc272d?autoplay=true&loop=false&muted=false&preload=true&responsive=true",source:"",date:"11/22",description:"Lyric video I did for my homegirl Lambs",thumbnail:"./thumbnails/lambs.jpg",isYouTube:!1},{id:3,title:"KNOWLEDGE_GOD!",alt_title:'"KNOWLEDEGOD"',url:"https://iframe.mediadelivery.net/embed/393622/5d9bc1aa-9bc8-42f8-bce1-931d46f8ba8c?autoplay=true&loop=false&muted=false&preload=true&responsive=true",source:"https://www.youtube.com/watch?v=sziewA2jzEY",date:"11/22",description:"Another great video.",thumbnail:"./thumbnails/knowledgegod.jpg",isYouTube:!1},{id:4,title:"RIDETOSEVENELEVEN",alt_title:"RIDETOSEVENELEVEN",url:"https://www.youtube.com/embed/DKDvPdll1D4",date:"11/19",description:"Got really into Team Fortress 2 (and Atlanta trap) around this time and made a few videos like this. I consider this one to be rough around the edges now but it’s still my personal favorite in the lil series.",thumbnail:"./thumbnails/ride.jpg",isYouTube:!0},{id:5,title:"FED_UP! (IN VR)",alt_title:"FEDUP!INVR!",url:"https://www.youtube.com/embed/9m8US6X9gWs",date:"08/21",description:"Another great video.",thumbnail:"./thumbnails/stride.jpg",isYouTube:!0},{id:6,title:"CHOPPA_WEDNESDAY",alt_title:"CHOPPAWEDNESDAY",url:"https://www.youtube.com/embed/G6ik_SLRulQ",date:"10/20",description:"Got really into Team Fortress 2 (and Atlanta trap) around this time and made a few videos like this. I consider this one to be rough around the edges now but it’s still my personal favorite in the lil series.",thumbnail:"./thumbnails/choppa.jpg",isYouTube:!0},{id:8,title:"RIDETOSEVENELEVEN",alt_title:"RIDETOSEVENELEVEN",url:"https://www.youtube.com/embed/DKDvPdll1D4",date:"11/19",description:"Got really into Team Fortress 2 (and Atlanta trap) around this time and made a few videos like this. I consider this one to be rough around the edges now but it’s still my personal favorite in the lil series.",thumbnail:"./thumbnails/ride.jpg",isYouTube:!0}],Cx=b.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",style:{marginLeft:4,verticalAlign:"middle"},children:b.jsx("path",{fill:"#FF0000",d:"M21.8 8.001a2.75 2.75 0 0 0-1.94-1.94C18.19 6 12 6 12 6s-6.19 0-7.86.061a2.75 2.75 0 0 0-1.94 1.94A28.6 28.6 0 0 0 2 12a28.6 28.6 0 0 0 .2 3.999 2.75 2.75 0 0 0 1.94 1.94C5.81 18 12 18 12 18s6.19 0 7.86-.061a2.75 2.75 0 0 0 1.94-1.94A28.6 28.6 0 0 0 22 12a28.6 28.6 0 0 0-.2-3.999zM10 15V9l5 3-5 3z"})}),Mx=b.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",style:{marginLeft:4,verticalAlign:"middle"},children:b.jsx("path",{fill:"#888",d:"M10 17l5-5-5-5v10z"})}),_x=()=>window.innerWidth<768?"60%":"400px",Nx=()=>{const n=r=>{const c=document.createElement("div");new kl({title:`~/X/${r.title}`,icon:_t.desktop_videos,width:Math.min(500,window.innerWidth*.9)+"px",height:_x(),x:"center",y:"center",background:"#000",mount:c,setBackground:o=>console.log(`Background set to ${o}`),onClose:()=>{c.remove()}}),c.innerHTML=`
    <div>
    <div style="position:relative;padding-top:56.25%;"><iframe src="${r.url}" loading="lazy" style="border:0;position:absolute;top:0;height:100%;width:100%;"></iframe></div>
    </div>
    <div class="video-description" style="padding: 1em; border-top: 4px ridge #222; line-height: 1;background: #222; width:text-align: center;">
    <h2 style="color:white; margin: 0.5em 0;">${r.alt_title}</h2>
    Spawned ${r.date} - <a href="${r.source}" target="_blank" style="color:gray; text-decoration: none; font-size: 14px; margin-top: 8px;">Watch Original Here</a>
    <p style="color:white; padding-bottom: 0.5em; line-height: 1em">${r.description}</p>
    </div>
    `};return b.jsxs(b.Fragment,{children:[b.jsxs("div",{className:"videos-header",style:{color:"black",fontSize:24,margin:0,overflow:"hidden",display:"flex",marginTop:-8,marginBottom:16},children:[b.jsxs("div",{style:{fontFamily:"Pixeloid Sans",flexDirection:"column",display:"flex",borderBottom:"2px solid black",width:"40%",paddingRight:30},children:[b.jsx("p",{className:"videos-header-title",style:{fontFamily:"Pixeloid Sans Bold",fontSize:32,marginLeft:8},children:"VIDEOS"}),b.jsxs("p",{className:"videos-header-subtitle",style:{fontSize:14,width:"100%",lineHeight:1,marginTop:-8,marginLeft:12},children:["I made a few of these here and there.. and you can watch em on here or ",b.jsx("a",{href:"https://youtube.com/ecksposting",target:"_blank",children:"YouTube!"})]})]}),b.jsxs("div",{className:"videos-featured",style:{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",marginTop:1,padding:6,borderRadius:0,borderBottom:"2px solid black",maxWidth:480,cursor:"pointer",lineHeight:1},onClick:()=>n(Fu[0]),children:[b.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[b.jsx("img",{src:kx,alt:Fu[0].alt_title,style:{width:140,height:120,objectFit:"cover",marginRight:8}}),b.jsxs("span",{className:"featured-video-title",style:{backgroundColor:"red",color:"white",fontSize:24,lineHeight:1,fontWeight:"bold",display:"block",padding:"4px 12px",borderRadius:4},children:[b.jsx("span",{children:"Featured Video - "}),b.jsx("span",{children:Fu[0].alt_title})]})]}),b.jsxs("span",{style:{color:"white",fontSize:14,display:"block",marginTop:12,marginLeft:2,lineHeight:1},children:[Kc[0].description," Art done by ",b.jsxs("a",{href:Kc[0].featuring_link,target:"_blank",children:["@",Kc[0].featuring]})]})]})]}),b.jsx("div",{className:"videos-grid",style:{display:"flex",flexWrap:"wrap",width:"95%",textAlign:"center",gap:"12px"},children:Fu.filter(r=>r.id!==8).map(r=>b.jsxs("div",{className:"my-videos",style:{width:180,border:"2px ridge #222",borderRadius:1,height:"100%",margin:"auto",background:"white",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:"pointer",overflow:"hidden"},title:r.title,onClick:()=>n(r),children:[b.jsx("img",{src:r.thumbnail,alt:r.alt_title,loading:"lazy",style:{width:"90%",height:"90%",display:"block",border:"2px solid #222"}}),b.jsxs("span",{style:{color:"black",fontWeight:"bold",fontSize:10,textAlign:"center",margin:"auto",padding:"6px 4px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",height:"100%"},children:[r.alt_title,r.isYouTube?Cx:Mx]})]},r.id))}),b.jsx("span",{style:{textAlign:"center"},children:"..."})]})},Bx=[{src:"/gallery/2025-banner.jpg",alt:"BANNER",full:"/gallery/2025-banner.jpg"},{src:"/gallery/2025_crankdat.jpg",alt:"CRANKDAT",full:"/gallery/2025_crankdat.jpg"},{src:"/gallery/2025-uhuhuh.png",alt:"UHUHUH",full:"/gallery/2025-uhuhuh.png"},{src:"/gallery/2025-vinyl.png",alt:"VINYL",full:"/gallery/2025-vinyl.png"},{src:"/gallery/2025_bro-has-kickassia.png",alt:"BRO-HAS-KICKASSIA",full:"/gallery/2025_bro-has-kickassia.png"},{src:"/gallery/2024-HBO.png",alt:"HBO",full:"/gallery/2024-HBO.png"},{src:"/gallery/2024-firestar.png",alt:"FIRESTAR",full:"/gallery/2024-firestar.png"},{src:"/gallery/2024-threebeersdeep.jpg",alt:"THREEBEERSDEEP",full:"/gallery/2024-threebeersdeep.jpg"},{src:"/gallery/2024-sagsog.png",alt:"SAGSOG",full:"/gallery/2024-sagsog.png"},{src:"/gallery/2024-babygreen.jpg",alt:"BABYGREENONEARTH",full:"/gallery/2024-babygreen.jpg"},{src:"/gallery/2023-setup.png",alt:"SETUP",full:"/gallery/2023-setup.png"},{src:"/gallery/2022-waffle.png",alt:"WH",full:"/gallery/2022-waffle.png"}],jx=()=>{const n=r=>{const c=document.createElement("div");c.style.background="#000",c.style.display="flex",c.style.alignItems="center",c.style.justifyContent="center",c.style.height="100%";const o=new window.Image;o.src=r.full,o.alt=r.alt,o.style.width="100%",o.style.maxWidth="600px",o.style.height="auto",o.style.display="flex",o.style.margin="auto",o.onload=()=>{const h=Math.min(o.naturalWidth,window.innerWidth*.33),g=Math.min(o.naturalHeight,window.innerHeight*.33),y=Math.max(220,h),T=Math.max(120,g);c.innerHTML="",c.appendChild(o),new kl({title:`~/X/${r.alt}`,icon:_t.desktop_gallery,background:"#000",width:`${y}px`,height:`${T}px`,x:"center",y:"center",mount:c,setBackground:()=>{},onClose:()=>c.remove(),noResize:window.innerWidth<600,noMax:window.innerWidth<600,noMin:window.innerWidth<600,noFull:window.innerWidth<600})}};return b.jsxs(b.Fragment,{children:[b.jsxs("div",{className:"gallery-header",style:{color:"black",fontSize:24,margin:8},children:[b.jsx("p",{className:"gallery-header-title",style:{fontWeight:"bold"},children:"THE GALLERY"}),b.jsx("p",{className:"gallery-header-subtitle",style:{fontSize:16},children:"Double click an image to view it full-size."}),b.jsx("div",{className:"line"})]}),b.jsx("div",{className:"gallery-grid",style:{width:"98%",display:"flex",flexWrap:"wrap",gap:16,justifyContent:"center",marginBottom:16},children:Bx.map((r,c)=>b.jsx("div",{className:"gallery-image-frame",style:{aspectRatio:"auto",background:"#111",border:"2px ridge #222",margin:"auto",padding:4,display:"flex",objectFit:"cover",alignItems:"center",justifyContent:"center",maxWidth:200,maxHeight:200,cursor:"pointer"},onDoubleClick:()=>n(r),title:r.alt,children:b.jsx("img",{src:r.src,alt:r.alt,loading:"lazy",style:{background:"black",aspectRatio:"auto",maxWidth:"200px",maxHeight:"200px",width:"auto",height:"auto",display:"inline"}})},c))})]})},Hx=()=>b.jsxs("div",{style:{color:"black",fontSize:20,overflow:"hidden",marginLeft:12,marginRight:12,marginTop:12,paddingBottom:4,fontFamily:"Sans Nouveaux",textRendering:"optimizeLegibility"},children:[b.jsx("span",{style:{fontSize:14,marginTop:16,marginBottom:8},children:"Email:"}),b.jsx("a",{href:"mailto:spam@3cks.net",target:"_blank",children:b.jsx("div",{className:"email",style:{display:"flex",border:"2px solid #222",fontWeight:"bold",textAlign:"center",alignContent:"center",paddingTop:12,marginBottom:16,paddingBottom:16,marginTop:8,lineHeight:1},children:b.jsxs("span",{style:{margin:"0 auto"},children:[b.jsx("img",{src:_t.desktop_contact,style:{width:24,height:24,marginRight:4}})," - spam@3cks.net"]})})}),b.jsx("span",{style:{fontSize:14,marginTop:16},children:"Socials:"}),b.jsxs("div",{style:{marginBottom:32,alignContent:"center",textAlign:"center",display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gridTemplateRows:"repeat(2, auto)",listStyleType:"disc",margin:"8px auto",lineHeight:1,fontSize:14,border:"2px solid #222"},children:[b.jsx("span",{className:"icon",children:b.jsx("a",{href:"https://youtube.com/ecksposting",target:"_blank",children:b.jsx("img",{src:_t.youtube,alt:"YouTube",style:{width:48,height:48}})})}),b.jsx("span",{className:"icon",children:b.jsx("a",{href:"https://instagram.com/ecksposting",target:"_blank",children:b.jsx("img",{src:_t.instagram,alt:"YouTube",style:{width:48,height:48}})})}),b.jsx("span",{className:"icon",children:b.jsx("a",{href:"https://twitter.com/ecksposting",target:"_blank",children:b.jsx("img",{src:_t.xitter,alt:"YouTube",style:{width:48,height:48}})})}),b.jsx("span",{className:"icon",children:b.jsx("a",{href:"https://steamcommunity.com/ecksposting",target:"_blank",children:b.jsx("img",{src:_t.steam,alt:"YouTube",style:{width:48,height:48}})})}),b.jsx("span",{className:"icon",children:b.jsx("a",{href:"https://eckslol.newgrounds.com",target:"_blank",children:b.jsx("img",{src:_t.newgrounds,alt:"YouTube",style:{width:48,height:48}})})})]}),b.jsx("span",{className:"bottom-tag",style:{marginTop:32},children:"- preciate it boss -"})]}),Ux=()=>b.jsx(b.Fragment,{children:b.jsxs("div",{style:{color:"black",fontSize:24,overflow:"hidden",margin:12,paddingBottom:4,fontFamily:"Sans Nouveaux"},children:[b.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:16},children:[b.jsx("img",{src:_t.moneyspin,alt:"Donate",style:{width:96,height:128,objectFit:"contain",marginTop:8}}),b.jsxs("div",{style:{flex:1,lineHeight:1,fontSize:12,marginBottom:8},children:[b.jsx("span",{children:"Paypal:"}),b.jsx("a",{href:"https://paypal.me/ecksposting",target:"_blank",children:b.jsx("div",{className:"paypal-button",style:{display:"flex",border:"3px ridge #222",fontWeight:"bold",textAlign:"center",alignItems:"center",padding:8,marginBottom:8,marginTop:8,lineHeight:1,fontSize:12},children:b.jsx("span",{style:{margin:"0 auto"},children:"/ecksposting"})})}),b.jsx("span",{children:"Cashapp:"}),b.jsx("a",{href:"https://cash.app/$eckslol",target:"_blank",children:b.jsx("div",{className:"cashapp-button",style:{display:"flex",border:"3px ridge #222",fontWeight:"bold",textAlign:"center",alignItems:"center",padding:8,marginBottom:24,marginTop:8,lineHeight:1,fontSize:12},children:b.jsx("span",{style:{margin:"0 auto"},children:"$eckslol"})})})]})]}),b.jsx("span",{className:"bottom-tag",children:"- preciate it boss -"})]})}),$x=()=>b.jsx(b.Fragment,{children:b.jsxs("div",{className:"notepad",style:{fontSize:8,fontFamily:"Sans Nouveaux",overflow:"hidden",paddingLeft:16,paddingRight:16,textRendering:"optimizeLegibility",lineHeight:1.3},children:[b.jsxs("p",{children:[b.jsx("span",{className:"notepad-header",children:"ADMIN"}),b.jsx("br",{}),b.jsx("span",{children:"Like most of what you see on here, this website was designed and built by the homeboy who's running it. He couldn't do it however without the help of:"})]}),b.jsxs("p",{className:"links",style:{fontSize:8,lineHeight:1.5},children:[b.jsx("span",{className:"notepad-header",children:"CODE"}),b.jsxs("span",{children:[b.jsx("br",{}),b.jsx("a",{href:"https://nextapps-de.github.io/winbox/",target:"_blank",children:"Winbox.js"})," | Window manager",b.jsx("br",{}),b.jsx("a",{href:"https://github.com/react95-io/React95",target:"_blank",children:"React95"})," | UI component library",b.jsx("br",{}),b.jsx("a",{href:"https://jdan.github.io/98.css/",target:"_blank",children:"98.css"})," | CSS for additional UI",b.jsx("br",{}),b.jsx("a",{href:"https://animate.style/",target:"_blank",children:"animate.css"})," | CSS animations",b.jsx("br",{}),b.jsx("a",{href:"https://oudkee.neocities.org/tutorials/tutcrt",target:"_blank",children:"@oudkee"})," | CRT Effect"]})]}),b.jsx("span",{className:"notepad-header",children:"ART"}),b.jsx("br",{}),b.jsxs("span",{children:["Loading screen art by ",b.jsx("a",{href:"https://x.com/BappyKG",target:"_blank",children:"@BappyKG"})]}),b.jsxs("p",{children:[b.jsx("span",{className:"notepad-header",children:"SPECIAL THANKS"}),b.jsx("br",{}),b.jsx("span",{children:"YOU! (Yes, you!) for visiting this site."})]})]})}),Lx="/assets/ms_sans_serif-Du8rjN1q.woff2",Yx="/assets/ms_sans_serif_bold-D5dpRRHG.woff2";let Vp=[Zc.background1,Zc.background2,Zc.background3],Gx=Math.floor(Vp.length*Math.random()),Zp=Vp[Gx];console.log(Zp);mv`
  ${gv}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${Lx}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${Yx}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;const qx=()=>{const n=k.useRef(0),r=()=>{const M=Date.now();return M-n.current>=400?(n.current=M,!0):!1},[c,o]=k.useState(!0),[h,g]=k.useState(!1),[y,T]=k.useState(!1),A=k.useRef(null),v=k.useRef(null);k.useEffect(()=>{if(!y)return;function M(et){v.current&&!v.current.contains(et.target)&&A.current&&!A.current.contains(et.target)&&T(!1)}return document.addEventListener("mousedown",M),()=>{document.removeEventListener("mousedown",M)}},[y]);const[R,C]=k.useState(new Date);k.useEffect(()=>{const M=setInterval(()=>C(new Date),1e3);return()=>clearInterval(M)},[]);const Y=R.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"}),tt=R.toLocaleDateString([],{month:"2-digit",day:"2-digit",year:"numeric"}),W=M=>window.innerWidth<768?"center":{about:"10%",gallery:"50%",videos:"40%",contact:"30%",donate:"50%",credits:"50%"}[M];k.useEffect(()=>{window.location.pathname==="/donate"&&(I(),g(!1))},[]),k.useEffect(()=>{const M=setTimeout(()=>{o(!1),g(!0)},6e3);return()=>clearTimeout(M)},[]),k.useEffect(()=>{if(h){const M=document.createElement("div");new kl({title:"~X/WHATS_NEW/",icon:_t.info,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",width:"375px",height:"400px",x:"center",y:"center",url:"https://eckis-chronicle.neocities.org",setBackground:et=>console.log(`Background set to ${et}`),onClose:()=>{console.log("Window closed"),M.remove()}}),g(!1)}},[h]),k.useEffect(()=>{document.body.style.backgroundImage=`url(${Zp})`,document.body.style.backgroundSize="cover",document.body.style.backgroundRepeat="no-repeat",document.body.style.backgroundPosition="center"},[]);const ut=()=>{if(!r())return;const M=document.createElement("div");M.className="terminal-winbox-body",new kl({title:"~X/CREDITS.TXT/",icon:_t.notepad,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:"255px",maxWidth:"20%",height:"360px",maxHeight:"25%",x:W("credits"),y:"45%",mount:M,setBackground:F=>console.log(`Background set to ${F}`),onClose:()=>{console.log("Window closed"),Ke.createRoot(M).unmount(),M.remove()}}),Ke.createRoot(M).render(b.jsx($x,{}))},I=()=>{if(!r())return;const M=document.createElement("div");new kl({title:"~X/DONATE/",icon:_t.desktop_donate,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:Math.min(325,window.innerWidth*.8)+"px",maxWidth:"40%",height:Math.min(230,window.innerHeight*.7)+"px",maxHeight:"35%",x:W("donate"),y:"45%",mount:M,setBackground:F=>console.log(`Background set to ${F}`),onClose:()=>{console.log("Window closed"),Ke.createRoot(M).unmount(),M.remove()}}),Ke.createRoot(M).render(b.jsx(Ux,{}))},P=()=>{if(!r())return;const M=document.createElement("div");new kl({title:"~X/ABOUT/",className:"no-resize",icon:_t.desktop_about,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:Math.min(450,window.innerWidth*.8)+"px",maxWidth:"475px",height:Math.min(500,window.innerHeight*.7)+"px",maxHeight:"550px",x:W("about"),y:"10%",mount:M,setBackground:F=>console.log(`Background set to ${F}`),noResize:!0,onClose:()=>{console.log("Window closed"),Ke.createRoot(M).unmount(),M.remove()}}),Ke.createRoot(M).render(b.jsx(Ox,{}))},lt=()=>{if(!r())return;const M=document.createElement("div");new kl({title:"~X/VIDEOS/",icon:_t.desktop_videos,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:Math.min(650,window.innerWidth*.8)+"px",maxWidth:"800px",height:Math.min(475,window.innerHeight*.7)+"px",maxHeight:"550px",x:W("videos"),y:"8%",mount:M,setBackground:F=>console.log(`Background set to ${F}`),onClose:()=>{console.log("Window closed"),Ke.createRoot(M).unmount(),M.remove()}}),Ke.createRoot(M).render(b.jsx(Nx,{}))},V=()=>{if(!r())return;const M=document.createElement("div");new kl({title:"~X/HIT_MY_LINE/",icon:_t.desktop_contact,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:Math.min(325,window.innerWidth*.8)+"px",maxWidth:"600px",height:Math.min(280,window.innerHeight*.7)+"px",maxHeight:"400px",x:W("contact"),y:"30%",mount:M,setBackground:F=>console.log(`Background set to ${F}`),onClose:()=>{console.log("Window closed"),Ke.createRoot(M).unmount(),M.remove()}}),Ke.createRoot(M).render(b.jsx(Hx,{}))},at=()=>{if(!r())return;const M=document.createElement("div");new kl({title:"~X/GALLERY/",icon:_t.desktop_gallery,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:Math.min(490,window.innerWidth*.8)+"px",maxWidth:"800px",height:Math.min(580,window.innerHeight*.7)+"px",maxHeight:"650px",x:W("gallery"),y:"30%",mount:M,setBackground:F=>console.log(`Background set to ${F}`),onClose:()=>{console.log("Window closed"),Ke.createRoot(M).unmount(),M.remove()}}),Ke.createRoot(M).render(b.jsx(jx,{}))};return b.jsxs(b.Fragment,{children:[c&&b.jsx(ix,{}),b.jsx("div",{className:"App",children:b.jsxs("div",{id:"desktop",children:[b.jsx("label",{htmlFor:"about-me",className:"desktop-item",onClick:P,children:b.jsxs("a",{href:"#",onClick:M=>M.preventDefault(),children:[b.jsx("img",{src:_t.desktop_about_gif,className:"logo",alt:"ABOUT"}),b.jsx("div",{className:"desktop-text",children:"ABOUT"})]})}),b.jsx("div",{id:"about-me-content",style:{display:"none"}}),b.jsx("label",{htmlFor:"videos",className:"desktop-item",onClick:lt,children:b.jsxs("a",{href:"#",onClick:M=>M.preventDefault(),children:[b.jsx("img",{src:_t.desktop_videos_gif,className:"logo",alt:"VIDEOS"}),b.jsx("div",{className:"desktop-text",children:"VIDEOS"})]})}),b.jsx("div",{id:"videos-content",style:{display:"none"}}),b.jsx("label",{htmlFor:"gallery",className:"desktop-item",onClick:at,children:b.jsxs("a",{href:"#",onClick:M=>M.preventDefault(),children:[b.jsx("img",{src:_t.desktop_gallery_gif,className:"logo",alt:"GALLERY"}),b.jsx("div",{className:"desktop-text",children:"GALLERY"})]})}),b.jsx("div",{id:"gallery-content",style:{display:"none"}}),b.jsx("label",{htmlFor:"contact",className:"desktop-item",onClick:V,children:b.jsxs("a",{href:"#",onClick:M=>M.preventDefault(),children:[b.jsx("img",{src:_t.desktop_contact_gif,className:"logo",alt:"CONTACT"}),b.jsx("div",{className:"desktop-text",children:"CONTACT"})]})}),b.jsx("div",{id:"contact-content",style:{display:"none"}}),b.jsx("label",{htmlFor:"donate",className:"desktop-item",onClick:I,children:b.jsxs("a",{href:"#",onClick:M=>M.preventDefault(),children:[b.jsx("img",{src:_t.desktop_donate_gif,className:"logo",alt:"GALLERY"}),b.jsx("div",{className:"desktop-text",children:"DONATE"})]})}),b.jsx("div",{id:"donate-content",style:{display:"none"}})]})}),b.jsx("div",{className:"taskbar",children:b.jsx(dv,{theme:ax,children:b.jsx(yp,{fixed:!0,style:{top:"auto",bottom:0,position:"fixed",zIndex:1},children:b.jsxs(cr,{noPadding:!0,style:{justifyContent:"space-between"},children:[b.jsxs("div",{style:{position:"relative",display:"flex",width:"100%",alignItems:"center",padding:"0px"},children:[b.jsxs(Ni,{ref:A,onClick:()=>T(!y),active:y?!0:void 0,style:{fontWeight:"bold",marginRight:6,marginLeft:6},children:[b.jsx("img",{src:P1,alt:"react95 logo",style:{height:"20px",marginRight:4}}),"START"]}),b.jsx($p,{size:35,style:{marginRight:10}}),b.jsxs("div",{style:{position:"relative",display:"inline-block",marginRight:14},onClick:()=>window.open("https://youtube.com/ecksposting","_blank","noopener,noreferrer"),children:[b.jsx("img",{src:_t.youtube,alt:"YouTube",className:"taskbar-item",style:{height:"25px"}}),b.jsx("div",{className:"taskbar-tooltip",style:{display:"none",position:"absolute",bottom:"120%",left:"50%",transform:"translateX(-45%)",background:"#222",color:"#fff",padding:"6px 8px",border:"2px solid white",fontSize:14,whiteSpace:"nowrap",zIndex:100,boxShadow:"0 2px 8px #0006",pointerEvents:"none"},children:"YOUTUBE"})]}),b.jsxs("div",{style:{position:"relative",display:"inline-block",marginRight:14},onClick:()=>window.open("https://youtube.com/ecksposting","_blank","noopener,noreferrer"),children:[b.jsx("img",{src:_t.instagram,alt:"react95 logo",className:"taskbar-item",style:{height:"25px"}}),b.jsx("div",{className:"taskbar-tooltip",style:{display:"none",position:"absolute",bottom:"120%",left:"50%",transform:"translateX(-45%)",background:"#222",color:"#fff",padding:"6px 8px",border:"2px solid white",fontSize:14,whiteSpace:"nowrap",zIndex:100,boxShadow:"0 2px 8px #0006",pointerEvents:"none"},children:"INSTA"})]}),b.jsxs("div",{style:{position:"relative",display:"inline-block",marginRight:14},onClick:()=>window.open("https://youtube.com/ecksposting","_blank","noopener,noreferrer"),children:[b.jsx("img",{src:_t.xitter,alt:"react95 logo",className:"taskbar-item",style:{height:"25px"}}),b.jsx("div",{className:"taskbar-tooltip",style:{display:"none",position:"absolute",bottom:"120%",left:"50%",transform:"translateX(-45%)",background:"#222",color:"#fff",padding:"6px 8px",border:"2px solid white",fontSize:14,whiteSpace:"nowrap",zIndex:100,boxShadow:"0 2px 8px #0006",pointerEvents:"none"},children:"XITTER"})]}),b.jsxs("div",{style:{position:"relative",display:"inline-block",marginRight:14},onClick:()=>window.open("https://eckslol.newgrounds.com/","_blank","noopener,noreferrer"),children:[b.jsx("img",{src:_t.newgrounds,alt:"react95 logo",className:"taskbar-item",style:{height:"25px"}}),b.jsx("div",{className:"taskbar-tooltip",style:{display:"none",position:"absolute",bottom:"120%",left:"50%",transform:"translateX(-45%)",background:"#222",color:"#fff",padding:"6px 8px",border:"2px solid white",fontSize:14,whiteSpace:"nowrap",zIndex:100,boxShadow:"0 2px 8px #0006",pointerEvents:"none"},children:"NEWGROUNDS"})]}),y&&b.jsxs(xp,{ref:v,style:{position:"absolute",left:"0px",bottom:"100%"},onClick:()=>T(!1),children:[b.jsxs(Ta,{className:"taskbar-tab",onClick:lt,children:[b.jsx("span",{role:"img",children:b.jsx("img",{src:_t.desktop_videos,alt:"VIDEOS",style:{width:"20px",height:"20px",margin:"0 15px -4px 0"}})}),"VIDEOS"]}),b.jsxs(Ta,{className:"taskbar-tab",onClick:at,children:[b.jsx("span",{role:"img",children:b.jsx("img",{src:_t.desktop_gallery,alt:"GALLERY",style:{width:"20px",height:"20px",margin:"0 15px -4px 0"}})}),"PHOTOS"]}),b.jsxs(Ta,{className:"taskbar-tab",onClick:P,children:[b.jsx("span",{role:"img",children:b.jsx("img",{src:_t.desktop_about,alt:"GALLERY",style:{width:"20px",height:"20px",margin:"0 15px -4px 0"}})}),"ABOUT"]}),b.jsx(or,{}),b.jsxs(Ta,{className:"taskbar-tab",onClick:()=>window.open("https://tornada.net/","_blank","noopener,noreferrer"),children:[b.jsx("span",{role:"img",children:b.jsx("img",{src:_t.tornada,alt:"TORNADA",style:{width:"20px",height:"20px",margin:"0 15px -4px 0"}})}),"TORNADA"]}),b.jsx(or,{}),b.jsxs(Ta,{className:"taskbar-tab",onClick:ut,children:[b.jsx("span",{role:"img","aria-label":"📁",children:b.jsx("img",{src:_t.notepad,alt:"CREDITS",style:{width:"20px",height:"20px",margin:"0 10px -3px 0"}})}),"CREDITS"]}),b.jsxs(Ta,{disabled:!0,children:[b.jsx("span",{role:"img","aria-label":"🔙",children:b.jsx("img",{src:tx,style:{width:"20px",height:"20px",margin:"0 10px -3px 0"}})}),"SHUTDOWN"]})]})]}),b.jsxs(Up,{variant:"well",shadow:!0,style:{right:"auto",padding:"0.1rem",width:"140px",height:"40px",textAlign:"center",fontSize:"1rem",fontWeight:"bold",color:"#fff",backgroundColor:"#000",border:"black inset 2px",borderRadius:"0.1rem",marginTop:4,marginBottom:4,marginRight:6,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[b.jsx("div",{children:Y}),b.jsx("div",{style:{fontSize:"1em",marginTop:6},children:tt})]})]})})})})]})};Z0.createRoot(document.getElementById("root")).render(b.jsx(k.StrictMode,{children:b.jsx(qx,{})}));
