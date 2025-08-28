(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))r(h);new MutationObserver(h=>{for(const g of h)if(g.type==="childList")for(const v of g.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&r(v)}).observe(document,{childList:!0,subtree:!0});function c(h){const g={};return h.integrity&&(g.integrity=h.integrity),h.referrerPolicy&&(g.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?g.credentials="include":h.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function r(h){if(h.ep)return;h.ep=!0;const g=c(h);fetch(h.href,g)}})();function os(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Bc={exports:{}},Oi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sp;function ob(){if(sp)return Oi;sp=1;var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function c(r,h,g){var v=null;if(g!==void 0&&(v=""+g),h.key!==void 0&&(v=""+h.key),"key"in h){g={};for(var T in h)T!=="key"&&(g[T]=h[T])}else g=h;return h=g.ref,{$$typeof:n,type:r,key:v,ref:h!==void 0?h:null,props:g}}return Oi.Fragment=o,Oi.jsx=c,Oi.jsxs=c,Oi}var fp;function rb(){return fp||(fp=1,Bc.exports=ob()),Bc.exports}var b=rb(),Hc={exports:{}},vt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp;function cb(){if(dp)return vt;dp=1;var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),v=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),C=Symbol.iterator;function G(p){return p===null||typeof p!="object"?null:(p=C&&p[C]||p["@@iterator"],typeof p=="function"?p:null)}var et={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,ut={};function P(p,B,K){this.props=p,this.context=B,this.refs=ut,this.updater=K||et}P.prototype.isReactComponent={},P.prototype.setState=function(p,B){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,B,"setState")},P.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function tt(){}tt.prototype=P.prototype;function lt(p,B,K){this.props=p,this.context=B,this.refs=ut,this.updater=K||et}var V=lt.prototype=new tt;V.constructor=lt,W(V,P.prototype),V.isPureReactComponent=!0;var at=Array.isArray,M={H:null,A:null,T:null,S:null,V:null},I=Object.prototype.hasOwnProperty;function F(p,B,K,_,Q,nt){return K=nt.ref,{$$typeof:n,type:p,key:B,ref:K!==void 0?K:null,props:nt}}function xt(p,B){return F(p.type,B,void 0,void 0,void 0,p.props)}function At(p){return typeof p=="object"&&p!==null&&p.$$typeof===n}function Xt(p){var B={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(K){return B[K]})}var Ct=/\/+/g;function bt(p,B){return typeof p=="object"&&p!==null&&p.key!=null?Xt(""+p.key):B.toString(36)}function d(){}function U(p){switch(p.status){case"fulfilled":return p.value;case"rejected":throw p.reason;default:switch(typeof p.status=="string"?p.then(d,d):(p.status="pending",p.then(function(B){p.status==="pending"&&(p.status="fulfilled",p.value=B)},function(B){p.status==="pending"&&(p.status="rejected",p.reason=B)})),p.status){case"fulfilled":return p.value;case"rejected":throw p.reason}}throw p}function Z(p,B,K,_,Q){var nt=typeof p;(nt==="undefined"||nt==="boolean")&&(p=null);var J=!1;if(p===null)J=!0;else switch(nt){case"bigint":case"string":case"number":J=!0;break;case"object":switch(p.$$typeof){case n:case o:J=!0;break;case R:return J=p._init,Z(J(p._payload),B,K,_,Q)}}if(J)return Q=Q(p),J=_===""?"."+bt(p,0):_,at(Q)?(K="",J!=null&&(K=J.replace(Ct,"$&/")+"/"),Z(Q,B,K,"",function(Y){return Y})):Q!=null&&(At(Q)&&(Q=xt(Q,K+(Q.key==null||p&&p.key===Q.key?"":(""+Q.key).replace(Ct,"$&/")+"/")+J)),B.push(Q)),1;J=0;var ct=_===""?".":_+":";if(at(p))for(var ft=0;ft<p.length;ft++)_=p[ft],nt=ct+bt(_,ft),J+=Z(_,B,K,nt,Q);else if(ft=G(p),typeof ft=="function")for(p=ft.call(p),ft=0;!(_=p.next()).done;)_=_.value,nt=ct+bt(_,ft++),J+=Z(_,B,K,nt,Q);else if(nt==="object"){if(typeof p.then=="function")return Z(U(p),B,K,_,Q);throw B=String(p),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return J}function D(p,B,K){if(p==null)return p;var _=[],Q=0;return Z(p,_,"","",function(nt){return B.call(K,nt,Q++)}),_}function j(p){if(p._status===-1){var B=p._result;B=B(),B.then(function(K){(p._status===0||p._status===-1)&&(p._status=1,p._result=K)},function(K){(p._status===0||p._status===-1)&&(p._status=2,p._result=K)}),p._status===-1&&(p._status=0,p._result=B)}if(p._status===1)return p._result.default;throw p._result}var q=typeof reportError=="function"?reportError:function(p){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof p=="object"&&p!==null&&typeof p.message=="string"?String(p.message):String(p),error:p});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",p);return}console.error(p)};function it(){}return vt.Children={map:D,forEach:function(p,B,K){D(p,function(){B.apply(this,arguments)},K)},count:function(p){var B=0;return D(p,function(){B++}),B},toArray:function(p){return D(p,function(B){return B})||[]},only:function(p){if(!At(p))throw Error("React.Children.only expected to receive a single React element child.");return p}},vt.Component=P,vt.Fragment=c,vt.Profiler=h,vt.PureComponent=lt,vt.StrictMode=r,vt.Suspense=A,vt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=M,vt.__COMPILER_RUNTIME={__proto__:null,c:function(p){return M.H.useMemoCache(p)}},vt.cache=function(p){return function(){return p.apply(null,arguments)}},vt.cloneElement=function(p,B,K){if(p==null)throw Error("The argument must be a React element, but you passed "+p+".");var _=W({},p.props),Q=p.key,nt=void 0;if(B!=null)for(J in B.ref!==void 0&&(nt=void 0),B.key!==void 0&&(Q=""+B.key),B)!I.call(B,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&B.ref===void 0||(_[J]=B[J]);var J=arguments.length-2;if(J===1)_.children=K;else if(1<J){for(var ct=Array(J),ft=0;ft<J;ft++)ct[ft]=arguments[ft+2];_.children=ct}return F(p.type,Q,void 0,void 0,nt,_)},vt.createContext=function(p){return p={$$typeof:v,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null},p.Provider=p,p.Consumer={$$typeof:g,_context:p},p},vt.createElement=function(p,B,K){var _,Q={},nt=null;if(B!=null)for(_ in B.key!==void 0&&(nt=""+B.key),B)I.call(B,_)&&_!=="key"&&_!=="__self"&&_!=="__source"&&(Q[_]=B[_]);var J=arguments.length-2;if(J===1)Q.children=K;else if(1<J){for(var ct=Array(J),ft=0;ft<J;ft++)ct[ft]=arguments[ft+2];Q.children=ct}if(p&&p.defaultProps)for(_ in J=p.defaultProps,J)Q[_]===void 0&&(Q[_]=J[_]);return F(p,nt,void 0,void 0,null,Q)},vt.createRef=function(){return{current:null}},vt.forwardRef=function(p){return{$$typeof:T,render:p}},vt.isValidElement=At,vt.lazy=function(p){return{$$typeof:R,_payload:{_status:-1,_result:p},_init:j}},vt.memo=function(p,B){return{$$typeof:y,type:p,compare:B===void 0?null:B}},vt.startTransition=function(p){var B=M.T,K={};M.T=K;try{var _=p(),Q=M.S;Q!==null&&Q(K,_),typeof _=="object"&&_!==null&&typeof _.then=="function"&&_.then(it,q)}catch(nt){q(nt)}finally{M.T=B}},vt.unstable_useCacheRefresh=function(){return M.H.useCacheRefresh()},vt.use=function(p){return M.H.use(p)},vt.useActionState=function(p,B,K){return M.H.useActionState(p,B,K)},vt.useCallback=function(p,B){return M.H.useCallback(p,B)},vt.useContext=function(p){return M.H.useContext(p)},vt.useDebugValue=function(){},vt.useDeferredValue=function(p,B){return M.H.useDeferredValue(p,B)},vt.useEffect=function(p,B,K){var _=M.H;if(typeof K=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return _.useEffect(p,B)},vt.useId=function(){return M.H.useId()},vt.useImperativeHandle=function(p,B,K){return M.H.useImperativeHandle(p,B,K)},vt.useInsertionEffect=function(p,B){return M.H.useInsertionEffect(p,B)},vt.useLayoutEffect=function(p,B){return M.H.useLayoutEffect(p,B)},vt.useMemo=function(p,B){return M.H.useMemo(p,B)},vt.useOptimistic=function(p,B){return M.H.useOptimistic(p,B)},vt.useReducer=function(p,B,K){return M.H.useReducer(p,B,K)},vt.useRef=function(p){return M.H.useRef(p)},vt.useState=function(p){return M.H.useState(p)},vt.useSyncExternalStore=function(p,B,K){return M.H.useSyncExternalStore(p,B,K)},vt.useTransition=function(){return M.H.useTransition()},vt.version="19.1.0",vt}var hp;function rs(){return hp||(hp=1,Hc.exports=cb()),Hc.exports}var k=rs();const N=os(k);var Uc={exports:{}},zi={},$c={exports:{}},Lc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp;function sb(){return pp||(pp=1,function(n){function o(D,j){var q=D.length;D.push(j);t:for(;0<q;){var it=q-1>>>1,p=D[it];if(0<h(p,j))D[it]=j,D[q]=p,q=it;else break t}}function c(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var j=D[0],q=D.pop();if(q!==j){D[0]=q;t:for(var it=0,p=D.length,B=p>>>1;it<B;){var K=2*(it+1)-1,_=D[K],Q=K+1,nt=D[Q];if(0>h(_,q))Q<p&&0>h(nt,_)?(D[it]=nt,D[Q]=q,it=Q):(D[it]=_,D[K]=q,it=K);else if(Q<p&&0>h(nt,q))D[it]=nt,D[Q]=q,it=Q;else break t}}return j}function h(D,j){var q=D.sortIndex-j.sortIndex;return q!==0?q:D.id-j.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;n.unstable_now=function(){return g.now()}}else{var v=Date,T=v.now();n.unstable_now=function(){return v.now()-T}}var A=[],y=[],R=1,C=null,G=3,et=!1,W=!1,ut=!1,P=!1,tt=typeof setTimeout=="function"?setTimeout:null,lt=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function at(D){for(var j=c(y);j!==null;){if(j.callback===null)r(y);else if(j.startTime<=D)r(y),j.sortIndex=j.expirationTime,o(A,j);else break;j=c(y)}}function M(D){if(ut=!1,at(D),!W)if(c(A)!==null)W=!0,I||(I=!0,bt());else{var j=c(y);j!==null&&Z(M,j.startTime-D)}}var I=!1,F=-1,xt=5,At=-1;function Xt(){return P?!0:!(n.unstable_now()-At<xt)}function Ct(){if(P=!1,I){var D=n.unstable_now();At=D;var j=!0;try{t:{W=!1,ut&&(ut=!1,lt(F),F=-1),et=!0;var q=G;try{e:{for(at(D),C=c(A);C!==null&&!(C.expirationTime>D&&Xt());){var it=C.callback;if(typeof it=="function"){C.callback=null,G=C.priorityLevel;var p=it(C.expirationTime<=D);if(D=n.unstable_now(),typeof p=="function"){C.callback=p,at(D),j=!0;break e}C===c(A)&&r(A),at(D)}else r(A);C=c(A)}if(C!==null)j=!0;else{var B=c(y);B!==null&&Z(M,B.startTime-D),j=!1}}break t}finally{C=null,G=q,et=!1}j=void 0}}finally{j?bt():I=!1}}}var bt;if(typeof V=="function")bt=function(){V(Ct)};else if(typeof MessageChannel<"u"){var d=new MessageChannel,U=d.port2;d.port1.onmessage=Ct,bt=function(){U.postMessage(null)}}else bt=function(){tt(Ct,0)};function Z(D,j){F=tt(function(){D(n.unstable_now())},j)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):xt=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return G},n.unstable_next=function(D){switch(G){case 1:case 2:case 3:var j=3;break;default:j=G}var q=G;G=j;try{return D()}finally{G=q}},n.unstable_requestPaint=function(){P=!0},n.unstable_runWithPriority=function(D,j){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var q=G;G=D;try{return j()}finally{G=q}},n.unstable_scheduleCallback=function(D,j,q){var it=n.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?it+q:it):q=it,D){case 1:var p=-1;break;case 2:p=250;break;case 5:p=1073741823;break;case 4:p=1e4;break;default:p=5e3}return p=q+p,D={id:R++,callback:j,priorityLevel:D,startTime:q,expirationTime:p,sortIndex:-1},q>it?(D.sortIndex=q,o(y,D),c(A)===null&&D===c(y)&&(ut?(lt(F),F=-1):ut=!0,Z(M,q-it))):(D.sortIndex=p,o(A,D),W||et||(W=!0,I||(I=!0,bt()))),D},n.unstable_shouldYield=Xt,n.unstable_wrapCallback=function(D){var j=G;return function(){var q=G;G=j;try{return D.apply(this,arguments)}finally{G=q}}}}(Lc)),Lc}var mp;function fb(){return mp||(mp=1,$c.exports=sb()),$c.exports}var Gc={exports:{}},ve={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp;function db(){if(gp)return ve;gp=1;var n=rs();function o(A){var y="https://react.dev/errors/"+A;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)y+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+A+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var r={d:{f:c,r:function(){throw Error(o(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},h=Symbol.for("react.portal");function g(A,y,R){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:C==null?null:""+C,children:A,containerInfo:y,implementation:R}}var v=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function T(A,y){if(A==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return ve.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ve.createPortal=function(A,y){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(o(299));return g(A,y,null,R)},ve.flushSync=function(A){var y=v.T,R=r.p;try{if(v.T=null,r.p=2,A)return A()}finally{v.T=y,r.p=R,r.d.f()}},ve.preconnect=function(A,y){typeof A=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,r.d.C(A,y))},ve.prefetchDNS=function(A){typeof A=="string"&&r.d.D(A)},ve.preinit=function(A,y){if(typeof A=="string"&&y&&typeof y.as=="string"){var R=y.as,C=T(R,y.crossOrigin),G=typeof y.integrity=="string"?y.integrity:void 0,et=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;R==="style"?r.d.S(A,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:C,integrity:G,fetchPriority:et}):R==="script"&&r.d.X(A,{crossOrigin:C,integrity:G,fetchPriority:et,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},ve.preinitModule=function(A,y){if(typeof A=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var R=T(y.as,y.crossOrigin);r.d.M(A,{crossOrigin:R,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&r.d.M(A)},ve.preload=function(A,y){if(typeof A=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var R=y.as,C=T(R,y.crossOrigin);r.d.L(A,R,{crossOrigin:C,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},ve.preloadModule=function(A,y){if(typeof A=="string")if(y){var R=T(y.as,y.crossOrigin);r.d.m(A,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:R,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else r.d.m(A)},ve.requestFormReset=function(A){r.d.r(A)},ve.unstable_batchedUpdates=function(A,y){return A(y)},ve.useFormState=function(A,y,R){return v.H.useFormState(A,y,R)},ve.useFormStatus=function(){return v.H.useHostTransitionStatus()},ve.version="19.1.0",ve}var bp;function Zp(){if(bp)return Gc.exports;bp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(o){console.error(o)}}return n(),Gc.exports=db(),Gc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function hb(){if(yp)return zi;yp=1;var n=fb(),o=rs(),c=Zp();function r(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function g(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function v(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function T(t){if(g(t)!==t)throw Error(r(188))}function A(t){var e=t.alternate;if(!e){if(e=g(t),e===null)throw Error(r(188));return e!==t?null:t}for(var l=t,a=e;;){var i=l.return;if(i===null)break;var u=i.alternate;if(u===null){if(a=i.return,a!==null){l=a;continue}break}if(i.child===u.child){for(u=i.child;u;){if(u===l)return T(i),t;if(u===a)return T(i),e;u=u.sibling}throw Error(r(188))}if(l.return!==a.return)l=i,a=u;else{for(var s=!1,f=i.child;f;){if(f===l){s=!0,l=i,a=u;break}if(f===a){s=!0,a=i,l=u;break}f=f.sibling}if(!s){for(f=u.child;f;){if(f===l){s=!0,l=u,a=i;break}if(f===a){s=!0,a=u,l=i;break}f=f.sibling}if(!s)throw Error(r(189))}}if(l.alternate!==a)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?t:e}function y(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=y(t),e!==null)return e;t=t.sibling}return null}var R=Object.assign,C=Symbol.for("react.element"),G=Symbol.for("react.transitional.element"),et=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),ut=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),tt=Symbol.for("react.provider"),lt=Symbol.for("react.consumer"),V=Symbol.for("react.context"),at=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),At=Symbol.for("react.activity"),Xt=Symbol.for("react.memo_cache_sentinel"),Ct=Symbol.iterator;function bt(t){return t===null||typeof t!="object"?null:(t=Ct&&t[Ct]||t["@@iterator"],typeof t=="function"?t:null)}var d=Symbol.for("react.client.reference");function U(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===d?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case W:return"Fragment";case P:return"Profiler";case ut:return"StrictMode";case M:return"Suspense";case I:return"SuspenseList";case At:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case et:return"Portal";case V:return(t.displayName||"Context")+".Provider";case lt:return(t._context.displayName||"Context")+".Consumer";case at:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return e=t.displayName||null,e!==null?e:U(t.type)||"Memo";case xt:e=t._payload,t=t._init;try{return U(t(e))}catch{}}return null}var Z=Array.isArray,D=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},it=[],p=-1;function B(t){return{current:t}}function K(t){0>p||(t.current=it[p],it[p]=null,p--)}function _(t,e){p++,it[p]=t.current,t.current=e}var Q=B(null),nt=B(null),J=B(null),ct=B(null);function ft(t,e){switch(_(J,e),_(nt,t),_(Q,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Uh(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Uh(e),t=$h(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(Q),_(Q,t)}function Y(){K(Q),K(nt),K(J)}function mt(t){t.memoizedState!==null&&_(ct,t);var e=Q.current,l=$h(e,t.type);e!==l&&(_(nt,t),_(Q,l))}function dt(t){nt.current===t&&(K(Q),K(nt)),ct.current===t&&(K(ct),Ei._currentValue=q)}var yt=Object.prototype.hasOwnProperty,Rt=n.unstable_scheduleCallback,_t=n.unstable_cancelCallback,Yt=n.unstable_shouldYield,le=n.unstable_requestPaint,Qt=n.unstable_now,ge=n.unstable_getCurrentPriorityLevel,ie=n.unstable_ImmediatePriority,He=n.unstable_UserBlockingPriority,Ee=n.unstable_NormalPriority,ll=n.unstable_LowPriority,Ue=n.unstable_IdlePriority,Ml=n.log,Na=n.unstable_setDisableYieldValue,Cl=null,xe=null;function al(t){if(typeof Ml=="function"&&Na(t),xe&&typeof xe.setStrictMode=="function")try{xe.setStrictMode(Cl,t)}catch{}}var Ae=Math.clz32?Math.clz32:Eo,Ao=Math.log,So=Math.LN2;function Eo(t){return t>>>=0,t===0?32:31-(Ao(t)/So|0)|0}var _a=256,ja=4194304;function dl(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ba(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var i=0,u=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var f=a&134217727;return f!==0?(a=f&~u,a!==0?i=dl(a):(s&=f,s!==0?i=dl(s):l||(l=f&~t,l!==0&&(i=dl(l))))):(f=a&~u,f!==0?i=dl(f):s!==0?i=dl(s):l||(l=a&~t,l!==0&&(i=dl(l)))),i===0?0:e!==0&&e!==i&&(e&u)===0&&(u=i&-i,l=e&-e,u>=l||u===32&&(l&4194048)!==0)?e:i}function ua(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function wo(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xs(){var t=_a;return _a<<=1,(_a&4194048)===0&&(_a=256),t}function As(){var t=ja;return ja<<=1,(ja&62914560)===0&&(ja=4194304),t}function To(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function Nn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function J0(t,e,l,a,i,u){var s=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var f=t.entanglements,m=t.expirationTimes,w=t.hiddenUpdates;for(l=s&~l;0<l;){var H=31-Ae(l),L=1<<H;f[H]=0,m[H]=-1;var O=w[H];if(O!==null)for(w[H]=null,H=0;H<O.length;H++){var z=O[H];z!==null&&(z.lane&=-536870913)}l&=~L}a!==0&&Ss(t,a,0),u!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=u&~(s&~e))}function Ss(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-Ae(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&4194090}function Es(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-Ae(l),i=1<<a;i&e|t[a]&e&&(t[a]|=e),l&=~i}}function Do(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ro(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ws(){var t=j.p;return t!==0?t:(t=window.event,t===void 0?32:np(t.type))}function W0(t,e){var l=j.p;try{return j.p=t,e()}finally{j.p=l}}var Nl=Math.random().toString(36).slice(2),be="__reactFiber$"+Nl,we="__reactProps$"+Nl,Ha="__reactContainer$"+Nl,Oo="__reactEvents$"+Nl,F0="__reactListeners$"+Nl,I0="__reactHandles$"+Nl,Ts="__reactResources$"+Nl,_n="__reactMarker$"+Nl;function zo(t){delete t[be],delete t[we],delete t[Oo],delete t[F0],delete t[I0]}function Ua(t){var e=t[be];if(e)return e;for(var l=t.parentNode;l;){if(e=l[Ha]||l[be]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=Qh(t);t!==null;){if(l=t[be])return l;t=Qh(t)}return e}t=l,l=t.parentNode}return null}function $a(t){if(t=t[be]||t[Ha]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function jn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(r(33))}function La(t){var e=t[Ts];return e||(e=t[Ts]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ue(t){t[_n]=!0}var Ds=new Set,Rs={};function oa(t,e){Ga(t,e),Ga(t+"Capture",e)}function Ga(t,e){for(Rs[t]=e,t=0;t<e.length;t++)Ds.add(e[t])}var P0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Os={},zs={};function tm(t){return yt.call(zs,t)?!0:yt.call(Os,t)?!1:P0.test(t)?zs[t]=!0:(Os[t]=!0,!1)}function Ui(t,e,l){if(tm(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function $i(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function hl(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}var ko,ks;function Ya(t){if(ko===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);ko=e&&e[1]||"",ks=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ko+t+ks}var Mo=!1;function Co(t,e){if(!t||Mo)return"";Mo=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var L=function(){throw Error()};if(Object.defineProperty(L.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(L,[])}catch(z){var O=z}Reflect.construct(t,[],L)}else{try{L.call()}catch(z){O=z}t.call(L.prototype)}}else{try{throw Error()}catch(z){O=z}(L=t())&&typeof L.catch=="function"&&L.catch(function(){})}}catch(z){if(z&&O&&typeof z.stack=="string")return[z.stack,O.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),s=u[0],f=u[1];if(s&&f){var m=s.split(`
`),w=f.split(`
`);for(i=a=0;a<m.length&&!m[a].includes("DetermineComponentFrameRoot");)a++;for(;i<w.length&&!w[i].includes("DetermineComponentFrameRoot");)i++;if(a===m.length||i===w.length)for(a=m.length-1,i=w.length-1;1<=a&&0<=i&&m[a]!==w[i];)i--;for(;1<=a&&0<=i;a--,i--)if(m[a]!==w[i]){if(a!==1||i!==1)do if(a--,i--,0>i||m[a]!==w[i]){var H=`
`+m[a].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=a&&0<=i);break}}}finally{Mo=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?Ya(l):""}function em(t){switch(t.tag){case 26:case 27:case 5:return Ya(t.type);case 16:return Ya("Lazy");case 13:return Ya("Suspense");case 19:return Ya("SuspenseList");case 0:case 15:return Co(t.type,!1);case 11:return Co(t.type.render,!1);case 1:return Co(t.type,!0);case 31:return Ya("Activity");default:return""}}function Ms(t){try{var e="";do e+=em(t),t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function $e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Cs(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function lm(t){var e=Cs(t)?"checked":"value",l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),a=""+t[e];if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,u=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){a=""+s,u.call(this,s)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Li(t){t._valueTracker||(t._valueTracker=lm(t))}function Ns(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=Cs(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function Gi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var am=/[\n"\\]/g;function Le(t){return t.replace(am,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function No(t,e,l,a,i,u,s,f){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+$e(e)):t.value!==""+$e(e)&&(t.value=""+$e(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?_o(t,s,$e(e)):l!=null?_o(t,s,$e(l)):a!=null&&t.removeAttribute("value"),i==null&&u!=null&&(t.defaultChecked=!!u),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.name=""+$e(f):t.removeAttribute("name")}function _s(t,e,l,a,i,u,s,f){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||l!=null){if(!(u!=="submit"&&u!=="reset"||e!=null))return;l=l!=null?""+$e(l):"",e=e!=null?""+$e(e):l,f||e===t.value||(t.value=e),t.defaultValue=e}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=f?t.checked:!!a,t.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s)}function _o(t,e,l){e==="number"&&Gi(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function Qa(t,e,l,a){if(t=t.options,e){e={};for(var i=0;i<l.length;i++)e["$"+l[i]]=!0;for(l=0;l<t.length;l++)i=e.hasOwnProperty("$"+t[l].value),t[l].selected!==i&&(t[l].selected=i),i&&a&&(t[l].defaultSelected=!0)}else{for(l=""+$e(l),e=null,i=0;i<t.length;i++){if(t[i].value===l){t[i].selected=!0,a&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function js(t,e,l){if(e!=null&&(e=""+$e(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+$e(l):""}function Bs(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(r(92));if(Z(a)){if(1<a.length)throw Error(r(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=$e(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a)}function qa(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var nm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hs(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||nm.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function Us(t,e,l){if(e!=null&&typeof e!="object")throw Error(r(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var i in e)a=e[i],e.hasOwnProperty(i)&&l[i]!==a&&Hs(t,i,a)}else for(var u in e)e.hasOwnProperty(u)&&Hs(t,u,e[u])}function jo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var im=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),um=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yi(t){return um.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Bo=null;function Ho(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xa=null,Va=null;function $s(t){var e=$a(t);if(e&&(t=e.stateNode)){var l=t[we]||null;t:switch(t=e.stateNode,e.type){case"input":if(No(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Le(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var i=a[we]||null;if(!i)throw Error(r(90));No(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&Ns(a)}break t;case"textarea":js(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&Qa(t,!!l.multiple,e,!1)}}}var Uo=!1;function Ls(t,e,l){if(Uo)return t(e,l);Uo=!0;try{var a=t(e);return a}finally{if(Uo=!1,(Xa!==null||Va!==null)&&(Ru(),Xa&&(e=Xa,t=Va,Va=Xa=null,$s(e),t)))for(e=0;e<t.length;e++)$s(t[e])}}function Bn(t,e){var l=t.stateNode;if(l===null)return null;var a=l[we]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(r(231,e,typeof l));return l}var pl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$o=!1;if(pl)try{var Hn={};Object.defineProperty(Hn,"passive",{get:function(){$o=!0}}),window.addEventListener("test",Hn,Hn),window.removeEventListener("test",Hn,Hn)}catch{$o=!1}var _l=null,Lo=null,Qi=null;function Gs(){if(Qi)return Qi;var t,e=Lo,l=e.length,a,i="value"in _l?_l.value:_l.textContent,u=i.length;for(t=0;t<l&&e[t]===i[t];t++);var s=l-t;for(a=1;a<=s&&e[l-a]===i[u-a];a++);return Qi=i.slice(t,1<a?1-a:void 0)}function qi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xi(){return!0}function Ys(){return!1}function Te(t){function e(l,a,i,u,s){this._reactName=l,this._targetInst=i,this.type=a,this.nativeEvent=u,this.target=s,this.currentTarget=null;for(var f in t)t.hasOwnProperty(f)&&(l=t[f],this[f]=l?l(u):u[f]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Xi:Ys,this.isPropagationStopped=Ys,this}return R(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Xi)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Xi)},persist:function(){},isPersistent:Xi}),e}var ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vi=Te(ra),Un=R({},ra,{view:0,detail:0}),om=Te(Un),Go,Yo,$n,Zi=R({},Un,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qo,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$n&&($n&&t.type==="mousemove"?(Go=t.screenX-$n.screenX,Yo=t.screenY-$n.screenY):Yo=Go=0,$n=t),Go)},movementY:function(t){return"movementY"in t?t.movementY:Yo}}),Qs=Te(Zi),rm=R({},Zi,{dataTransfer:0}),cm=Te(rm),sm=R({},Un,{relatedTarget:0}),Qo=Te(sm),fm=R({},ra,{animationName:0,elapsedTime:0,pseudoElement:0}),dm=Te(fm),hm=R({},ra,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),pm=Te(hm),mm=R({},ra,{data:0}),qs=Te(mm),gm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ym={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vm(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ym[t])?!!e[t]:!1}function qo(){return vm}var xm=R({},Un,{key:function(t){if(t.key){var e=gm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qo,charCode:function(t){return t.type==="keypress"?qi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Am=Te(xm),Sm=R({},Zi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xs=Te(Sm),Em=R({},Un,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qo}),wm=Te(Em),Tm=R({},ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dm=Te(Tm),Rm=R({},Zi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Om=Te(Rm),zm=R({},ra,{newState:0,oldState:0}),km=Te(zm),Mm=[9,13,27,32],Xo=pl&&"CompositionEvent"in window,Ln=null;pl&&"documentMode"in document&&(Ln=document.documentMode);var Cm=pl&&"TextEvent"in window&&!Ln,Vs=pl&&(!Xo||Ln&&8<Ln&&11>=Ln),Zs=" ",Ks=!1;function Js(t,e){switch(t){case"keyup":return Mm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ws(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Za=!1;function Nm(t,e){switch(t){case"compositionend":return Ws(e);case"keypress":return e.which!==32?null:(Ks=!0,Zs);case"textInput":return t=e.data,t===Zs&&Ks?null:t;default:return null}}function _m(t,e){if(Za)return t==="compositionend"||!Xo&&Js(t,e)?(t=Gs(),Qi=Lo=_l=null,Za=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Vs&&e.locale!=="ko"?null:e.data;default:return null}}var jm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fs(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jm[t.type]:e==="textarea"}function Is(t,e,l,a){Xa?Va?Va.push(a):Va=[a]:Xa=a,e=Nu(e,"onChange"),0<e.length&&(l=new Vi("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var Gn=null,Yn=null;function Bm(t){Nh(t,0)}function Ki(t){var e=jn(t);if(Ns(e))return t}function Ps(t,e){if(t==="change")return e}var tf=!1;if(pl){var Vo;if(pl){var Zo="oninput"in document;if(!Zo){var ef=document.createElement("div");ef.setAttribute("oninput","return;"),Zo=typeof ef.oninput=="function"}Vo=Zo}else Vo=!1;tf=Vo&&(!document.documentMode||9<document.documentMode)}function lf(){Gn&&(Gn.detachEvent("onpropertychange",af),Yn=Gn=null)}function af(t){if(t.propertyName==="value"&&Ki(Yn)){var e=[];Is(e,Yn,t,Ho(t)),Ls(Bm,e)}}function Hm(t,e,l){t==="focusin"?(lf(),Gn=e,Yn=l,Gn.attachEvent("onpropertychange",af)):t==="focusout"&&lf()}function Um(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ki(Yn)}function $m(t,e){if(t==="click")return Ki(e)}function Lm(t,e){if(t==="input"||t==="change")return Ki(e)}function Gm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ze=typeof Object.is=="function"?Object.is:Gm;function Qn(t,e){if(ze(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var i=l[a];if(!yt.call(e,i)||!ze(t[i],e[i]))return!1}return!0}function nf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function uf(t,e){var l=nf(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=nf(l)}}function of(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?of(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function rf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Gi(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Gi(t.document)}return e}function Ko(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Ym=pl&&"documentMode"in document&&11>=document.documentMode,Ka=null,Jo=null,qn=null,Wo=!1;function cf(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Wo||Ka==null||Ka!==Gi(a)||(a=Ka,"selectionStart"in a&&Ko(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),qn&&Qn(qn,a)||(qn=a,a=Nu(Jo,"onSelect"),0<a.length&&(e=new Vi("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=Ka)))}function ca(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var Ja={animationend:ca("Animation","AnimationEnd"),animationiteration:ca("Animation","AnimationIteration"),animationstart:ca("Animation","AnimationStart"),transitionrun:ca("Transition","TransitionRun"),transitionstart:ca("Transition","TransitionStart"),transitioncancel:ca("Transition","TransitionCancel"),transitionend:ca("Transition","TransitionEnd")},Fo={},sf={};pl&&(sf=document.createElement("div").style,"AnimationEvent"in window||(delete Ja.animationend.animation,delete Ja.animationiteration.animation,delete Ja.animationstart.animation),"TransitionEvent"in window||delete Ja.transitionend.transition);function sa(t){if(Fo[t])return Fo[t];if(!Ja[t])return t;var e=Ja[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in sf)return Fo[t]=e[l];return t}var ff=sa("animationend"),df=sa("animationiteration"),hf=sa("animationstart"),Qm=sa("transitionrun"),qm=sa("transitionstart"),Xm=sa("transitioncancel"),pf=sa("transitionend"),mf=new Map,Io="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Io.push("scrollEnd");function We(t,e){mf.set(t,e),oa(e,[t])}var gf=new WeakMap;function Ge(t,e){if(typeof t=="object"&&t!==null){var l=gf.get(t);return l!==void 0?l:(e={value:t,source:e,stack:Ms(e)},gf.set(t,e),e)}return{value:t,source:e,stack:Ms(e)}}var Ye=[],Wa=0,Po=0;function Ji(){for(var t=Wa,e=Po=Wa=0;e<t;){var l=Ye[e];Ye[e++]=null;var a=Ye[e];Ye[e++]=null;var i=Ye[e];Ye[e++]=null;var u=Ye[e];if(Ye[e++]=null,a!==null&&i!==null){var s=a.pending;s===null?i.next=i:(i.next=s.next,s.next=i),a.pending=i}u!==0&&bf(l,i,u)}}function Wi(t,e,l,a){Ye[Wa++]=t,Ye[Wa++]=e,Ye[Wa++]=l,Ye[Wa++]=a,Po|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function tr(t,e,l,a){return Wi(t,e,l,a),Fi(t)}function Fa(t,e){return Wi(t,null,null,e),Fi(t)}function bf(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var i=!1,u=t.return;u!==null;)u.childLanes|=l,a=u.alternate,a!==null&&(a.childLanes|=l),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(i=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,i&&e!==null&&(i=31-Ae(l),t=u.hiddenUpdates,a=t[i],a===null?t[i]=[e]:a.push(e),e.lane=l|536870912),u):null}function Fi(t){if(50<mi)throw mi=0,uc=null,Error(r(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ia={};function Vm(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ke(t,e,l,a){return new Vm(t,e,l,a)}function er(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ml(t,e){var l=t.alternate;return l===null?(l=ke(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function yf(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ii(t,e,l,a,i,u){var s=0;if(a=t,typeof t=="function")er(t)&&(s=1);else if(typeof t=="string")s=Kg(t,l,Q.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case At:return t=ke(31,l,e,i),t.elementType=At,t.lanes=u,t;case W:return fa(l.children,i,u,e);case ut:s=8,i|=24;break;case P:return t=ke(12,l,e,i|2),t.elementType=P,t.lanes=u,t;case M:return t=ke(13,l,e,i),t.elementType=M,t.lanes=u,t;case I:return t=ke(19,l,e,i),t.elementType=I,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case tt:case V:s=10;break t;case lt:s=9;break t;case at:s=11;break t;case F:s=14;break t;case xt:s=16,a=null;break t}s=29,l=Error(r(130,t===null?"null":typeof t,"")),a=null}return e=ke(s,l,e,i),e.elementType=t,e.type=a,e.lanes=u,e}function fa(t,e,l,a){return t=ke(7,t,a,e),t.lanes=l,t}function lr(t,e,l){return t=ke(6,t,null,e),t.lanes=l,t}function ar(t,e,l){return e=ke(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Pa=[],tn=0,Pi=null,tu=0,Qe=[],qe=0,da=null,gl=1,bl="";function ha(t,e){Pa[tn++]=tu,Pa[tn++]=Pi,Pi=t,tu=e}function vf(t,e,l){Qe[qe++]=gl,Qe[qe++]=bl,Qe[qe++]=da,da=t;var a=gl;t=bl;var i=32-Ae(a)-1;a&=~(1<<i),l+=1;var u=32-Ae(e)+i;if(30<u){var s=i-i%5;u=(a&(1<<s)-1).toString(32),a>>=s,i-=s,gl=1<<32-Ae(e)+i|l<<i|a,bl=u+t}else gl=1<<u|l<<i|a,bl=t}function nr(t){t.return!==null&&(ha(t,1),vf(t,1,0))}function ir(t){for(;t===Pi;)Pi=Pa[--tn],Pa[tn]=null,tu=Pa[--tn],Pa[tn]=null;for(;t===da;)da=Qe[--qe],Qe[qe]=null,bl=Qe[--qe],Qe[qe]=null,gl=Qe[--qe],Qe[qe]=null}var Se=null,Kt=null,kt=!1,pa=null,nl=!1,ur=Error(r(519));function ma(t){var e=Error(r(418,""));throw Zn(Ge(e,t)),ur}function xf(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[be]=t,e[we]=a,l){case"dialog":Dt("cancel",e),Dt("close",e);break;case"iframe":case"object":case"embed":Dt("load",e);break;case"video":case"audio":for(l=0;l<bi.length;l++)Dt(bi[l],e);break;case"source":Dt("error",e);break;case"img":case"image":case"link":Dt("error",e),Dt("load",e);break;case"details":Dt("toggle",e);break;case"input":Dt("invalid",e),_s(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Li(e);break;case"select":Dt("invalid",e);break;case"textarea":Dt("invalid",e),Bs(e,a.value,a.defaultValue,a.children),Li(e)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||Hh(e.textContent,l)?(a.popover!=null&&(Dt("beforetoggle",e),Dt("toggle",e)),a.onScroll!=null&&Dt("scroll",e),a.onScrollEnd!=null&&Dt("scrollend",e),a.onClick!=null&&(e.onclick=_u),e=!0):e=!1,e||ma(t)}function Af(t){for(Se=t.return;Se;)switch(Se.tag){case 5:case 13:nl=!1;return;case 27:case 3:nl=!0;return;default:Se=Se.return}}function Xn(t){if(t!==Se)return!1;if(!kt)return Af(t),kt=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||Sc(t.type,t.memoizedProps)),l=!l),l&&Kt&&ma(t),Af(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(l=t.data,l==="/$"){if(e===0){Kt=Ie(t.nextSibling);break t}e--}else l!=="$"&&l!=="$!"&&l!=="$?"||e++;t=t.nextSibling}Kt=null}}else e===27?(e=Kt,Wl(t.type)?(t=Dc,Dc=null,Kt=t):Kt=e):Kt=Se?Ie(t.stateNode.nextSibling):null;return!0}function Vn(){Kt=Se=null,kt=!1}function Sf(){var t=pa;return t!==null&&(Oe===null?Oe=t:Oe.push.apply(Oe,t),pa=null),t}function Zn(t){pa===null?pa=[t]:pa.push(t)}var or=B(null),ga=null,yl=null;function jl(t,e,l){_(or,e._currentValue),e._currentValue=l}function vl(t){t._currentValue=or.current,K(or)}function rr(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function cr(t,e,l,a){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){var s=i.child;u=u.firstContext;t:for(;u!==null;){var f=u;u=i;for(var m=0;m<e.length;m++)if(f.context===e[m]){u.lanes|=l,f=u.alternate,f!==null&&(f.lanes|=l),rr(u.return,l,t),a||(s=null);break t}u=f.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(r(341));s.lanes|=l,u=s.alternate,u!==null&&(u.lanes|=l),rr(s,l,t),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function Kn(t,e,l,a){t=null;for(var i=e,u=!1;i!==null;){if(!u){if((i.flags&524288)!==0)u=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(r(387));if(s=s.memoizedProps,s!==null){var f=i.type;ze(i.pendingProps.value,s.value)||(t!==null?t.push(f):t=[f])}}else if(i===ct.current){if(s=i.alternate,s===null)throw Error(r(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Ei):t=[Ei])}i=i.return}t!==null&&cr(e,t,l,a),e.flags|=262144}function eu(t){for(t=t.firstContext;t!==null;){if(!ze(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ba(t){ga=t,yl=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ye(t){return Ef(ga,t)}function lu(t,e){return ga===null&&ba(t),Ef(t,e)}function Ef(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},yl===null){if(t===null)throw Error(r(308));yl=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else yl=yl.next=e;return l}var Zm=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},Km=n.unstable_scheduleCallback,Jm=n.unstable_NormalPriority,ae={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sr(){return{controller:new Zm,data:new Map,refCount:0}}function Jn(t){t.refCount--,t.refCount===0&&Km(Jm,function(){t.controller.abort()})}var Wn=null,fr=0,en=0,ln=null;function Wm(t,e){if(Wn===null){var l=Wn=[];fr=0,en=hc(),ln={status:"pending",value:void 0,then:function(a){l.push(a)}}}return fr++,e.then(wf,wf),e}function wf(){if(--fr===0&&Wn!==null){ln!==null&&(ln.status="fulfilled");var t=Wn;Wn=null,en=0,ln=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Fm(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(i){l.push(i)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var i=0;i<l.length;i++)(0,l[i])(e)},function(i){for(a.status="rejected",a.reason=i,i=0;i<l.length;i++)(0,l[i])(void 0)}),a}var Tf=D.S;D.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Wm(t,e),Tf!==null&&Tf(t,e)};var ya=B(null);function dr(){var t=ya.current;return t!==null?t:Gt.pooledCache}function au(t,e){e===null?_(ya,ya.current):_(ya,e.pool)}function Df(){var t=dr();return t===null?null:{parent:ae._currentValue,pool:t}}var Fn=Error(r(460)),Rf=Error(r(474)),nu=Error(r(542)),hr={then:function(){}};function Of(t){return t=t.status,t==="fulfilled"||t==="rejected"}function iu(){}function zf(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(iu,iu),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Mf(t),t;default:if(typeof e.status=="string")e.then(iu,iu);else{if(t=Gt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=a}},function(a){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Mf(t),t}throw In=e,Fn}}var In=null;function kf(){if(In===null)throw Error(r(459));var t=In;return In=null,t}function Mf(t){if(t===Fn||t===nu)throw Error(r(483))}var Bl=!1;function pr(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mr(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Hl(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ul(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(jt&2)!==0){var i=a.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),a.pending=e,e=Fi(t),bf(t,null,l),e}return Wi(t,a,e,l),Fi(t)}function Pn(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Es(t,l)}}function gr(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var i=null,u=null;if(l=l.firstBaseUpdate,l!==null){do{var s={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};u===null?i=u=s:u=u.next=s,l=l.next}while(l!==null);u===null?i=u=e:u=u.next=e}else i=u=e;l={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var br=!1;function ti(){if(br){var t=ln;if(t!==null)throw t}}function ei(t,e,l,a){br=!1;var i=t.updateQueue;Bl=!1;var u=i.firstBaseUpdate,s=i.lastBaseUpdate,f=i.shared.pending;if(f!==null){i.shared.pending=null;var m=f,w=m.next;m.next=null,s===null?u=w:s.next=w,s=m;var H=t.alternate;H!==null&&(H=H.updateQueue,f=H.lastBaseUpdate,f!==s&&(f===null?H.firstBaseUpdate=w:f.next=w,H.lastBaseUpdate=m))}if(u!==null){var L=i.baseState;s=0,H=w=m=null,f=u;do{var O=f.lane&-536870913,z=O!==f.lane;if(z?(Ot&O)===O:(a&O)===O){O!==0&&O===en&&(br=!0),H!==null&&(H=H.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});t:{var gt=t,ht=f;O=e;var $t=l;switch(ht.tag){case 1:if(gt=ht.payload,typeof gt=="function"){L=gt.call($t,L,O);break t}L=gt;break t;case 3:gt.flags=gt.flags&-65537|128;case 0:if(gt=ht.payload,O=typeof gt=="function"?gt.call($t,L,O):gt,O==null)break t;L=R({},L,O);break t;case 2:Bl=!0}}O=f.callback,O!==null&&(t.flags|=64,z&&(t.flags|=8192),z=i.callbacks,z===null?i.callbacks=[O]:z.push(O))}else z={lane:O,tag:f.tag,payload:f.payload,callback:f.callback,next:null},H===null?(w=H=z,m=L):H=H.next=z,s|=O;if(f=f.next,f===null){if(f=i.shared.pending,f===null)break;z=f,f=z.next,z.next=null,i.lastBaseUpdate=z,i.shared.pending=null}}while(!0);H===null&&(m=L),i.baseState=m,i.firstBaseUpdate=w,i.lastBaseUpdate=H,u===null&&(i.shared.lanes=0),Vl|=s,t.lanes=s,t.memoizedState=L}}function Cf(t,e){if(typeof t!="function")throw Error(r(191,t));t.call(e)}function Nf(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)Cf(l[t],e)}var an=B(null),uu=B(0);function _f(t,e){t=Dl,_(uu,t),_(an,e),Dl=t|e.baseLanes}function yr(){_(uu,Dl),_(an,an.current)}function vr(){Dl=uu.current,K(an),K(uu)}var $l=0,Et=null,Ht=null,Pt=null,ou=!1,nn=!1,va=!1,ru=0,li=0,un=null,Im=0;function Ft(){throw Error(r(321))}function xr(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!ze(t[l],e[l]))return!1;return!0}function Ar(t,e,l,a,i,u){return $l=u,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,D.H=t===null||t.memoizedState===null?bd:yd,va=!1,u=l(a,i),va=!1,nn&&(u=Bf(e,l,a,i)),jf(t),u}function jf(t){D.H=pu;var e=Ht!==null&&Ht.next!==null;if($l=0,Pt=Ht=Et=null,ou=!1,li=0,un=null,e)throw Error(r(300));t===null||oe||(t=t.dependencies,t!==null&&eu(t)&&(oe=!0))}function Bf(t,e,l,a){Et=t;var i=0;do{if(nn&&(un=null),li=0,nn=!1,25<=i)throw Error(r(301));if(i+=1,Pt=Ht=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}D.H=ig,u=e(l,a)}while(nn);return u}function Pm(){var t=D.H,e=t.useState()[0];return e=typeof e.then=="function"?ai(e):e,t=t.useState()[0],(Ht!==null?Ht.memoizedState:null)!==t&&(Et.flags|=1024),e}function Sr(){var t=ru!==0;return ru=0,t}function Er(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function wr(t){if(ou){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ou=!1}$l=0,Pt=Ht=Et=null,nn=!1,li=ru=0,un=null}function De(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?Et.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function te(){if(Ht===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var e=Pt===null?Et.memoizedState:Pt.next;if(e!==null)Pt=e,Ht=t;else{if(t===null)throw Et.alternate===null?Error(r(467)):Error(r(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},Pt===null?Et.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function Tr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ai(t){var e=li;return li+=1,un===null&&(un=[]),t=zf(un,t,e),e=Et,(Pt===null?e.memoizedState:Pt.next)===null&&(e=e.alternate,D.H=e===null||e.memoizedState===null?bd:yd),t}function cu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ai(t);if(t.$$typeof===V)return ye(t)}throw Error(r(438,String(t)))}function Dr(t){var e=null,l=Et.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=Et.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=Tr(),Et.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=Xt;return e.index++,l}function xl(t,e){return typeof e=="function"?e(t):e}function su(t){var e=te();return Rr(e,Ht,t)}function Rr(t,e,l){var a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=l;var i=t.baseQueue,u=a.pending;if(u!==null){if(i!==null){var s=i.next;i.next=u.next,u.next=s}e.baseQueue=i=u,a.pending=null}if(u=t.baseState,i===null)t.memoizedState=u;else{e=i.next;var f=s=null,m=null,w=e,H=!1;do{var L=w.lane&-536870913;if(L!==w.lane?(Ot&L)===L:($l&L)===L){var O=w.revertLane;if(O===0)m!==null&&(m=m.next={lane:0,revertLane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),L===en&&(H=!0);else if(($l&O)===O){w=w.next,O===en&&(H=!0);continue}else L={lane:0,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},m===null?(f=m=L,s=u):m=m.next=L,Et.lanes|=O,Vl|=O;L=w.action,va&&l(u,L),u=w.hasEagerState?w.eagerState:l(u,L)}else O={lane:L,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},m===null?(f=m=O,s=u):m=m.next=O,Et.lanes|=L,Vl|=L;w=w.next}while(w!==null&&w!==e);if(m===null?s=u:m.next=f,!ze(u,t.memoizedState)&&(oe=!0,H&&(l=ln,l!==null)))throw l;t.memoizedState=u,t.baseState=s,t.baseQueue=m,a.lastRenderedState=u}return i===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Or(t){var e=te(),l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=t;var a=l.dispatch,i=l.pending,u=e.memoizedState;if(i!==null){l.pending=null;var s=i=i.next;do u=t(u,s.action),s=s.next;while(s!==i);ze(u,e.memoizedState)||(oe=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),l.lastRenderedState=u}return[u,a]}function Hf(t,e,l){var a=Et,i=te(),u=kt;if(u){if(l===void 0)throw Error(r(407));l=l()}else l=e();var s=!ze((Ht||i).memoizedState,l);s&&(i.memoizedState=l,oe=!0),i=i.queue;var f=Lf.bind(null,a,i,t);if(ni(2048,8,f,[t]),i.getSnapshot!==e||s||Pt!==null&&Pt.memoizedState.tag&1){if(a.flags|=2048,on(9,fu(),$f.bind(null,a,i,l,e),null),Gt===null)throw Error(r(349));u||($l&124)!==0||Uf(a,e,l)}return l}function Uf(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=Et.updateQueue,e===null?(e=Tr(),Et.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function $f(t,e,l,a){e.value=l,e.getSnapshot=a,Gf(e)&&Yf(t)}function Lf(t,e,l){return l(function(){Gf(e)&&Yf(t)})}function Gf(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!ze(t,l)}catch{return!0}}function Yf(t){var e=Fa(t,2);e!==null&&je(e,t,2)}function zr(t){var e=De();if(typeof t=="function"){var l=t;if(t=l(),va){al(!0);try{l()}finally{al(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xl,lastRenderedState:t},e}function Qf(t,e,l,a){return t.baseState=l,Rr(t,Ht,typeof a=="function"?a:xl)}function tg(t,e,l,a,i){if(hu(t))throw Error(r(485));if(t=e.action,t!==null){var u={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){u.listeners.push(s)}};D.T!==null?l(!0):u.isTransition=!1,a(u),l=e.pending,l===null?(u.next=e.pending=u,qf(e,u)):(u.next=l.next,e.pending=l.next=u)}}function qf(t,e){var l=e.action,a=e.payload,i=t.state;if(e.isTransition){var u=D.T,s={};D.T=s;try{var f=l(i,a),m=D.S;m!==null&&m(s,f),Xf(t,e,f)}catch(w){kr(t,e,w)}finally{D.T=u}}else try{u=l(i,a),Xf(t,e,u)}catch(w){kr(t,e,w)}}function Xf(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Vf(t,e,a)},function(a){return kr(t,e,a)}):Vf(t,e,l)}function Vf(t,e,l){e.status="fulfilled",e.value=l,Zf(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,qf(t,l)))}function kr(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,Zf(e),e=e.next;while(e!==a)}t.action=null}function Zf(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Kf(t,e){return e}function Jf(t,e){if(kt){var l=Gt.formState;if(l!==null){t:{var a=Et;if(kt){if(Kt){e:{for(var i=Kt,u=nl;i.nodeType!==8;){if(!u){i=null;break e}if(i=Ie(i.nextSibling),i===null){i=null;break e}}u=i.data,i=u==="F!"||u==="F"?i:null}if(i){Kt=Ie(i.nextSibling),a=i.data==="F!";break t}}ma(a)}a=!1}a&&(e=l[0])}}return l=De(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kf,lastRenderedState:e},l.queue=a,l=pd.bind(null,Et,a),a.dispatch=l,a=zr(!1),u=jr.bind(null,Et,!1,a.queue),a=De(),i={state:e,dispatch:null,action:t,pending:null},a.queue=i,l=tg.bind(null,Et,i,u,l),i.dispatch=l,a.memoizedState=t,[e,l,!1]}function Wf(t){var e=te();return Ff(e,Ht,t)}function Ff(t,e,l){if(e=Rr(t,e,Kf)[0],t=su(xl)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=ai(e)}catch(s){throw s===Fn?nu:s}else a=e;e=te();var i=e.queue,u=i.dispatch;return l!==e.memoizedState&&(Et.flags|=2048,on(9,fu(),eg.bind(null,i,l),null)),[a,u,t]}function eg(t,e){t.action=e}function If(t){var e=te(),l=Ht;if(l!==null)return Ff(e,l,t);te(),e=e.memoizedState,l=te();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function on(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=Et.updateQueue,e===null&&(e=Tr(),Et.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function fu(){return{destroy:void 0,resource:void 0}}function Pf(){return te().memoizedState}function du(t,e,l,a){var i=De();a=a===void 0?null:a,Et.flags|=t,i.memoizedState=on(1|e,fu(),l,a)}function ni(t,e,l,a){var i=te();a=a===void 0?null:a;var u=i.memoizedState.inst;Ht!==null&&a!==null&&xr(a,Ht.memoizedState.deps)?i.memoizedState=on(e,u,l,a):(Et.flags|=t,i.memoizedState=on(1|e,u,l,a))}function td(t,e){du(8390656,8,t,e)}function ed(t,e){ni(2048,8,t,e)}function ld(t,e){return ni(4,2,t,e)}function ad(t,e){return ni(4,4,t,e)}function nd(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function id(t,e,l){l=l!=null?l.concat([t]):null,ni(4,4,nd.bind(null,e,t),l)}function Mr(){}function ud(t,e){var l=te();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&xr(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function od(t,e){var l=te();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&xr(e,a[1]))return a[0];if(a=t(),va){al(!0);try{t()}finally{al(!1)}}return l.memoizedState=[a,e],a}function Cr(t,e,l){return l===void 0||($l&1073741824)!==0?t.memoizedState=e:(t.memoizedState=l,t=sh(),Et.lanes|=t,Vl|=t,l)}function rd(t,e,l,a){return ze(l,e)?l:an.current!==null?(t=Cr(t,l,a),ze(t,e)||(oe=!0),t):($l&42)===0?(oe=!0,t.memoizedState=l):(t=sh(),Et.lanes|=t,Vl|=t,e)}function cd(t,e,l,a,i){var u=j.p;j.p=u!==0&&8>u?u:8;var s=D.T,f={};D.T=f,jr(t,!1,e,l);try{var m=i(),w=D.S;if(w!==null&&w(f,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var H=Fm(m,a);ii(t,e,H,_e(t))}else ii(t,e,a,_e(t))}catch(L){ii(t,e,{then:function(){},status:"rejected",reason:L},_e())}finally{j.p=u,D.T=s}}function lg(){}function Nr(t,e,l,a){if(t.tag!==5)throw Error(r(476));var i=sd(t).queue;cd(t,i,e,q,l===null?lg:function(){return fd(t),l(a)})}function sd(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xl,lastRenderedState:q},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xl,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function fd(t){var e=sd(t).next.queue;ii(t,e,{},_e())}function _r(){return ye(Ei)}function dd(){return te().memoizedState}function hd(){return te().memoizedState}function ag(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=_e();t=Hl(l);var a=Ul(e,t,l);a!==null&&(je(a,e,l),Pn(a,e,l)),e={cache:sr()},t.payload=e;return}e=e.return}}function ng(t,e,l){var a=_e();l={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},hu(t)?md(e,l):(l=tr(t,e,l,a),l!==null&&(je(l,t,a),gd(l,e,a)))}function pd(t,e,l){var a=_e();ii(t,e,l,a)}function ii(t,e,l,a){var i={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(hu(t))md(e,i);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var s=e.lastRenderedState,f=u(s,l);if(i.hasEagerState=!0,i.eagerState=f,ze(f,s))return Wi(t,e,i,0),Gt===null&&Ji(),!1}catch{}finally{}if(l=tr(t,e,i,a),l!==null)return je(l,t,a),gd(l,e,a),!0}return!1}function jr(t,e,l,a){if(a={lane:2,revertLane:hc(),action:a,hasEagerState:!1,eagerState:null,next:null},hu(t)){if(e)throw Error(r(479))}else e=tr(t,l,a,2),e!==null&&je(e,t,2)}function hu(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function md(t,e){nn=ou=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function gd(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Es(t,l)}}var pu={readContext:ye,use:cu,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useLayoutEffect:Ft,useInsertionEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useSyncExternalStore:Ft,useId:Ft,useHostTransitionStatus:Ft,useFormState:Ft,useActionState:Ft,useOptimistic:Ft,useMemoCache:Ft,useCacheRefresh:Ft},bd={readContext:ye,use:cu,useCallback:function(t,e){return De().memoizedState=[t,e===void 0?null:e],t},useContext:ye,useEffect:td,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,du(4194308,4,nd.bind(null,e,t),l)},useLayoutEffect:function(t,e){return du(4194308,4,t,e)},useInsertionEffect:function(t,e){du(4,2,t,e)},useMemo:function(t,e){var l=De();e=e===void 0?null:e;var a=t();if(va){al(!0);try{t()}finally{al(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=De();if(l!==void 0){var i=l(e);if(va){al(!0);try{l(e)}finally{al(!1)}}}else i=e;return a.memoizedState=a.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=ng.bind(null,Et,t),[a.memoizedState,t]},useRef:function(t){var e=De();return t={current:t},e.memoizedState=t},useState:function(t){t=zr(t);var e=t.queue,l=pd.bind(null,Et,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:Mr,useDeferredValue:function(t,e){var l=De();return Cr(l,t,e)},useTransition:function(){var t=zr(!1);return t=cd.bind(null,Et,t.queue,!0,!1),De().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=Et,i=De();if(kt){if(l===void 0)throw Error(r(407));l=l()}else{if(l=e(),Gt===null)throw Error(r(349));(Ot&124)!==0||Uf(a,e,l)}i.memoizedState=l;var u={value:l,getSnapshot:e};return i.queue=u,td(Lf.bind(null,a,u,t),[t]),a.flags|=2048,on(9,fu(),$f.bind(null,a,u,l,e),null),l},useId:function(){var t=De(),e=Gt.identifierPrefix;if(kt){var l=bl,a=gl;l=(a&~(1<<32-Ae(a)-1)).toString(32)+l,e="«"+e+"R"+l,l=ru++,0<l&&(e+="H"+l.toString(32)),e+="»"}else l=Im++,e="«"+e+"r"+l.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:_r,useFormState:Jf,useActionState:Jf,useOptimistic:function(t){var e=De();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=jr.bind(null,Et,!0,l),l.dispatch=e,[t,e]},useMemoCache:Dr,useCacheRefresh:function(){return De().memoizedState=ag.bind(null,Et)}},yd={readContext:ye,use:cu,useCallback:ud,useContext:ye,useEffect:ed,useImperativeHandle:id,useInsertionEffect:ld,useLayoutEffect:ad,useMemo:od,useReducer:su,useRef:Pf,useState:function(){return su(xl)},useDebugValue:Mr,useDeferredValue:function(t,e){var l=te();return rd(l,Ht.memoizedState,t,e)},useTransition:function(){var t=su(xl)[0],e=te().memoizedState;return[typeof t=="boolean"?t:ai(t),e]},useSyncExternalStore:Hf,useId:dd,useHostTransitionStatus:_r,useFormState:Wf,useActionState:Wf,useOptimistic:function(t,e){var l=te();return Qf(l,Ht,t,e)},useMemoCache:Dr,useCacheRefresh:hd},ig={readContext:ye,use:cu,useCallback:ud,useContext:ye,useEffect:ed,useImperativeHandle:id,useInsertionEffect:ld,useLayoutEffect:ad,useMemo:od,useReducer:Or,useRef:Pf,useState:function(){return Or(xl)},useDebugValue:Mr,useDeferredValue:function(t,e){var l=te();return Ht===null?Cr(l,t,e):rd(l,Ht.memoizedState,t,e)},useTransition:function(){var t=Or(xl)[0],e=te().memoizedState;return[typeof t=="boolean"?t:ai(t),e]},useSyncExternalStore:Hf,useId:dd,useHostTransitionStatus:_r,useFormState:If,useActionState:If,useOptimistic:function(t,e){var l=te();return Ht!==null?Qf(l,Ht,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:Dr,useCacheRefresh:hd},rn=null,ui=0;function mu(t){var e=ui;return ui+=1,rn===null&&(rn=[]),zf(rn,t,e)}function oi(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function gu(t,e){throw e.$$typeof===C?Error(r(525)):(t=Object.prototype.toString.call(e),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function vd(t){var e=t._init;return e(t._payload)}function xd(t){function e(S,x){if(t){var E=S.deletions;E===null?(S.deletions=[x],S.flags|=16):E.push(x)}}function l(S,x){if(!t)return null;for(;x!==null;)e(S,x),x=x.sibling;return null}function a(S){for(var x=new Map;S!==null;)S.key!==null?x.set(S.key,S):x.set(S.index,S),S=S.sibling;return x}function i(S,x){return S=ml(S,x),S.index=0,S.sibling=null,S}function u(S,x,E){return S.index=E,t?(E=S.alternate,E!==null?(E=E.index,E<x?(S.flags|=67108866,x):E):(S.flags|=67108866,x)):(S.flags|=1048576,x)}function s(S){return t&&S.alternate===null&&(S.flags|=67108866),S}function f(S,x,E,$){return x===null||x.tag!==6?(x=lr(E,S.mode,$),x.return=S,x):(x=i(x,E),x.return=S,x)}function m(S,x,E,$){var rt=E.type;return rt===W?H(S,x,E.props.children,$,E.key):x!==null&&(x.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===xt&&vd(rt)===x.type)?(x=i(x,E.props),oi(x,E),x.return=S,x):(x=Ii(E.type,E.key,E.props,null,S.mode,$),oi(x,E),x.return=S,x)}function w(S,x,E,$){return x===null||x.tag!==4||x.stateNode.containerInfo!==E.containerInfo||x.stateNode.implementation!==E.implementation?(x=ar(E,S.mode,$),x.return=S,x):(x=i(x,E.children||[]),x.return=S,x)}function H(S,x,E,$,rt){return x===null||x.tag!==7?(x=fa(E,S.mode,$,rt),x.return=S,x):(x=i(x,E),x.return=S,x)}function L(S,x,E){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=lr(""+x,S.mode,E),x.return=S,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case G:return E=Ii(x.type,x.key,x.props,null,S.mode,E),oi(E,x),E.return=S,E;case et:return x=ar(x,S.mode,E),x.return=S,x;case xt:var $=x._init;return x=$(x._payload),L(S,x,E)}if(Z(x)||bt(x))return x=fa(x,S.mode,E,null),x.return=S,x;if(typeof x.then=="function")return L(S,mu(x),E);if(x.$$typeof===V)return L(S,lu(S,x),E);gu(S,x)}return null}function O(S,x,E,$){var rt=x!==null?x.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return rt!==null?null:f(S,x,""+E,$);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case G:return E.key===rt?m(S,x,E,$):null;case et:return E.key===rt?w(S,x,E,$):null;case xt:return rt=E._init,E=rt(E._payload),O(S,x,E,$)}if(Z(E)||bt(E))return rt!==null?null:H(S,x,E,$,null);if(typeof E.then=="function")return O(S,x,mu(E),$);if(E.$$typeof===V)return O(S,x,lu(S,E),$);gu(S,E)}return null}function z(S,x,E,$,rt){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return S=S.get(E)||null,f(x,S,""+$,rt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case G:return S=S.get($.key===null?E:$.key)||null,m(x,S,$,rt);case et:return S=S.get($.key===null?E:$.key)||null,w(x,S,$,rt);case xt:var wt=$._init;return $=wt($._payload),z(S,x,E,$,rt)}if(Z($)||bt($))return S=S.get(E)||null,H(x,S,$,rt,null);if(typeof $.then=="function")return z(S,x,E,mu($),rt);if($.$$typeof===V)return z(S,x,E,lu(x,$),rt);gu(x,$)}return null}function gt(S,x,E,$){for(var rt=null,wt=null,st=x,pt=x=0,ce=null;st!==null&&pt<E.length;pt++){st.index>pt?(ce=st,st=null):ce=st.sibling;var zt=O(S,st,E[pt],$);if(zt===null){st===null&&(st=ce);break}t&&st&&zt.alternate===null&&e(S,st),x=u(zt,x,pt),wt===null?rt=zt:wt.sibling=zt,wt=zt,st=ce}if(pt===E.length)return l(S,st),kt&&ha(S,pt),rt;if(st===null){for(;pt<E.length;pt++)st=L(S,E[pt],$),st!==null&&(x=u(st,x,pt),wt===null?rt=st:wt.sibling=st,wt=st);return kt&&ha(S,pt),rt}for(st=a(st);pt<E.length;pt++)ce=z(st,S,pt,E[pt],$),ce!==null&&(t&&ce.alternate!==null&&st.delete(ce.key===null?pt:ce.key),x=u(ce,x,pt),wt===null?rt=ce:wt.sibling=ce,wt=ce);return t&&st.forEach(function(ea){return e(S,ea)}),kt&&ha(S,pt),rt}function ht(S,x,E,$){if(E==null)throw Error(r(151));for(var rt=null,wt=null,st=x,pt=x=0,ce=null,zt=E.next();st!==null&&!zt.done;pt++,zt=E.next()){st.index>pt?(ce=st,st=null):ce=st.sibling;var ea=O(S,st,zt.value,$);if(ea===null){st===null&&(st=ce);break}t&&st&&ea.alternate===null&&e(S,st),x=u(ea,x,pt),wt===null?rt=ea:wt.sibling=ea,wt=ea,st=ce}if(zt.done)return l(S,st),kt&&ha(S,pt),rt;if(st===null){for(;!zt.done;pt++,zt=E.next())zt=L(S,zt.value,$),zt!==null&&(x=u(zt,x,pt),wt===null?rt=zt:wt.sibling=zt,wt=zt);return kt&&ha(S,pt),rt}for(st=a(st);!zt.done;pt++,zt=E.next())zt=z(st,S,pt,zt.value,$),zt!==null&&(t&&zt.alternate!==null&&st.delete(zt.key===null?pt:zt.key),x=u(zt,x,pt),wt===null?rt=zt:wt.sibling=zt,wt=zt);return t&&st.forEach(function(ub){return e(S,ub)}),kt&&ha(S,pt),rt}function $t(S,x,E,$){if(typeof E=="object"&&E!==null&&E.type===W&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case G:t:{for(var rt=E.key;x!==null;){if(x.key===rt){if(rt=E.type,rt===W){if(x.tag===7){l(S,x.sibling),$=i(x,E.props.children),$.return=S,S=$;break t}}else if(x.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===xt&&vd(rt)===x.type){l(S,x.sibling),$=i(x,E.props),oi($,E),$.return=S,S=$;break t}l(S,x);break}else e(S,x);x=x.sibling}E.type===W?($=fa(E.props.children,S.mode,$,E.key),$.return=S,S=$):($=Ii(E.type,E.key,E.props,null,S.mode,$),oi($,E),$.return=S,S=$)}return s(S);case et:t:{for(rt=E.key;x!==null;){if(x.key===rt)if(x.tag===4&&x.stateNode.containerInfo===E.containerInfo&&x.stateNode.implementation===E.implementation){l(S,x.sibling),$=i(x,E.children||[]),$.return=S,S=$;break t}else{l(S,x);break}else e(S,x);x=x.sibling}$=ar(E,S.mode,$),$.return=S,S=$}return s(S);case xt:return rt=E._init,E=rt(E._payload),$t(S,x,E,$)}if(Z(E))return gt(S,x,E,$);if(bt(E)){if(rt=bt(E),typeof rt!="function")throw Error(r(150));return E=rt.call(E),ht(S,x,E,$)}if(typeof E.then=="function")return $t(S,x,mu(E),$);if(E.$$typeof===V)return $t(S,x,lu(S,E),$);gu(S,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,x!==null&&x.tag===6?(l(S,x.sibling),$=i(x,E),$.return=S,S=$):(l(S,x),$=lr(E,S.mode,$),$.return=S,S=$),s(S)):l(S,x)}return function(S,x,E,$){try{ui=0;var rt=$t(S,x,E,$);return rn=null,rt}catch(st){if(st===Fn||st===nu)throw st;var wt=ke(29,st,null,S.mode);return wt.lanes=$,wt.return=S,wt}finally{}}}var cn=xd(!0),Ad=xd(!1),Xe=B(null),il=null;function Ll(t){var e=t.alternate;_(ne,ne.current&1),_(Xe,t),il===null&&(e===null||an.current!==null||e.memoizedState!==null)&&(il=t)}function Sd(t){if(t.tag===22){if(_(ne,ne.current),_(Xe,t),il===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(il=t)}}else Gl()}function Gl(){_(ne,ne.current),_(Xe,Xe.current)}function Al(t){K(Xe),il===t&&(il=null),K(ne)}var ne=B(0);function bu(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||Tc(l)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Br(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:R({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var Hr={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=_e(),i=Hl(a);i.payload=e,l!=null&&(i.callback=l),e=Ul(t,i,a),e!==null&&(je(e,t,a),Pn(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=_e(),i=Hl(a);i.tag=1,i.payload=e,l!=null&&(i.callback=l),e=Ul(t,i,a),e!==null&&(je(e,t,a),Pn(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=_e(),a=Hl(l);a.tag=2,e!=null&&(a.callback=e),e=Ul(t,a,l),e!==null&&(je(e,t,l),Pn(e,t,l))}};function Ed(t,e,l,a,i,u,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,u,s):e.prototype&&e.prototype.isPureReactComponent?!Qn(l,a)||!Qn(i,u):!0}function wd(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&Hr.enqueueReplaceState(e,e.state,null)}function xa(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=R({},l));for(var i in t)l[i]===void 0&&(l[i]=t[i])}return l}var yu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Td(t){yu(t)}function Dd(t){console.error(t)}function Rd(t){yu(t)}function vu(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Od(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Ur(t,e,l){return l=Hl(l),l.tag=3,l.payload={element:null},l.callback=function(){vu(t,e)},l}function zd(t){return t=Hl(t),t.tag=3,t}function kd(t,e,l,a){var i=l.type.getDerivedStateFromError;if(typeof i=="function"){var u=a.value;t.payload=function(){return i(u)},t.callback=function(){Od(e,l,a)}}var s=l.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Od(e,l,a),typeof i!="function"&&(Zl===null?Zl=new Set([this]):Zl.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})})}function ug(t,e,l,a,i){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&Kn(e,l,i,!0),l=Xe.current,l!==null){switch(l.tag){case 13:return il===null?rc():l.alternate===null&&Jt===0&&(Jt=3),l.flags&=-257,l.flags|=65536,l.lanes=i,a===hr?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),sc(t,a,i)),!1;case 22:return l.flags|=65536,a===hr?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),sc(t,a,i)),!1}throw Error(r(435,l.tag))}return sc(t,a,i),rc(),!1}if(kt)return e=Xe.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,a!==ur&&(t=Error(r(422),{cause:a}),Zn(Ge(t,l)))):(a!==ur&&(e=Error(r(423),{cause:a}),Zn(Ge(e,l))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,a=Ge(a,l),i=Ur(t.stateNode,a,i),gr(t,i),Jt!==4&&(Jt=2)),!1;var u=Error(r(520),{cause:a});if(u=Ge(u,l),pi===null?pi=[u]:pi.push(u),Jt!==4&&(Jt=2),e===null)return!0;a=Ge(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=i&-i,l.lanes|=t,t=Ur(l.stateNode,a,t),gr(l,t),!1;case 1:if(e=l.type,u=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Zl===null||!Zl.has(u))))return l.flags|=65536,i&=-i,l.lanes|=i,i=zd(i),kd(i,t,l,a),gr(l,i),!1}l=l.return}while(l!==null);return!1}var Md=Error(r(461)),oe=!1;function de(t,e,l,a){e.child=t===null?Ad(e,null,l,a):cn(e,t.child,l,a)}function Cd(t,e,l,a,i){l=l.render;var u=e.ref;if("ref"in a){var s={};for(var f in a)f!=="ref"&&(s[f]=a[f])}else s=a;return ba(e),a=Ar(t,e,l,s,u,i),f=Sr(),t!==null&&!oe?(Er(t,e,i),Sl(t,e,i)):(kt&&f&&nr(e),e.flags|=1,de(t,e,a,i),e.child)}function Nd(t,e,l,a,i){if(t===null){var u=l.type;return typeof u=="function"&&!er(u)&&u.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=u,_d(t,e,u,a,i)):(t=Ii(l.type,null,a,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!Vr(t,i)){var s=u.memoizedProps;if(l=l.compare,l=l!==null?l:Qn,l(s,a)&&t.ref===e.ref)return Sl(t,e,i)}return e.flags|=1,t=ml(u,a),t.ref=e.ref,t.return=e,e.child=t}function _d(t,e,l,a,i){if(t!==null){var u=t.memoizedProps;if(Qn(u,a)&&t.ref===e.ref)if(oe=!1,e.pendingProps=a=u,Vr(t,i))(t.flags&131072)!==0&&(oe=!0);else return e.lanes=t.lanes,Sl(t,e,i)}return $r(t,e,l,a,i)}function jd(t,e,l){var a=e.pendingProps,i=a.children,u=t!==null?t.memoizedState:null;if(a.mode==="hidden"){if((e.flags&128)!==0){if(a=u!==null?u.baseLanes|l:l,t!==null){for(i=e.child=t.child,u=0;i!==null;)u=u|i.lanes|i.childLanes,i=i.sibling;e.childLanes=u&~a}else e.childLanes=0,e.child=null;return Bd(t,e,a,l)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&au(e,u!==null?u.cachePool:null),u!==null?_f(e,u):yr(),Sd(e);else return e.lanes=e.childLanes=536870912,Bd(t,e,u!==null?u.baseLanes|l:l,l)}else u!==null?(au(e,u.cachePool),_f(e,u),Gl(),e.memoizedState=null):(t!==null&&au(e,null),yr(),Gl());return de(t,e,i,l),e.child}function Bd(t,e,l,a){var i=dr();return i=i===null?null:{parent:ae._currentValue,pool:i},e.memoizedState={baseLanes:l,cachePool:i},t!==null&&au(e,null),yr(),Sd(e),t!==null&&Kn(t,e,a,!0),null}function xu(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(r(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function $r(t,e,l,a,i){return ba(e),l=Ar(t,e,l,a,void 0,i),a=Sr(),t!==null&&!oe?(Er(t,e,i),Sl(t,e,i)):(kt&&a&&nr(e),e.flags|=1,de(t,e,l,i),e.child)}function Hd(t,e,l,a,i,u){return ba(e),e.updateQueue=null,l=Bf(e,a,l,i),jf(t),a=Sr(),t!==null&&!oe?(Er(t,e,u),Sl(t,e,u)):(kt&&a&&nr(e),e.flags|=1,de(t,e,l,u),e.child)}function Ud(t,e,l,a,i){if(ba(e),e.stateNode===null){var u=Ia,s=l.contextType;typeof s=="object"&&s!==null&&(u=ye(s)),u=new l(a,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Hr,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=a,u.state=e.memoizedState,u.refs={},pr(e),s=l.contextType,u.context=typeof s=="object"&&s!==null?ye(s):Ia,u.state=e.memoizedState,s=l.getDerivedStateFromProps,typeof s=="function"&&(Br(e,l,s,a),u.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(s=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),s!==u.state&&Hr.enqueueReplaceState(u,u.state,null),ei(e,a,u,i),ti(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){u=e.stateNode;var f=e.memoizedProps,m=xa(l,f);u.props=m;var w=u.context,H=l.contextType;s=Ia,typeof H=="object"&&H!==null&&(s=ye(H));var L=l.getDerivedStateFromProps;H=typeof L=="function"||typeof u.getSnapshotBeforeUpdate=="function",f=e.pendingProps!==f,H||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f||w!==s)&&wd(e,u,a,s),Bl=!1;var O=e.memoizedState;u.state=O,ei(e,a,u,i),ti(),w=e.memoizedState,f||O!==w||Bl?(typeof L=="function"&&(Br(e,l,L,a),w=e.memoizedState),(m=Bl||Ed(e,l,m,a,O,w,s))?(H||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=w),u.props=a,u.state=w,u.context=s,a=m):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{u=e.stateNode,mr(t,e),s=e.memoizedProps,H=xa(l,s),u.props=H,L=e.pendingProps,O=u.context,w=l.contextType,m=Ia,typeof w=="object"&&w!==null&&(m=ye(w)),f=l.getDerivedStateFromProps,(w=typeof f=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(s!==L||O!==m)&&wd(e,u,a,m),Bl=!1,O=e.memoizedState,u.state=O,ei(e,a,u,i),ti();var z=e.memoizedState;s!==L||O!==z||Bl||t!==null&&t.dependencies!==null&&eu(t.dependencies)?(typeof f=="function"&&(Br(e,l,f,a),z=e.memoizedState),(H=Bl||Ed(e,l,H,a,O,z,m)||t!==null&&t.dependencies!==null&&eu(t.dependencies))?(w||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,z,m),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,z,m)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||s===t.memoizedProps&&O===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&O===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=z),u.props=a,u.state=z,u.context=m,a=H):(typeof u.componentDidUpdate!="function"||s===t.memoizedProps&&O===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&O===t.memoizedState||(e.flags|=1024),a=!1)}return u=a,xu(t,e),a=(e.flags&128)!==0,u||a?(u=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&a?(e.child=cn(e,t.child,null,i),e.child=cn(e,null,l,i)):de(t,e,l,i),e.memoizedState=u.state,t=e.child):t=Sl(t,e,i),t}function $d(t,e,l,a){return Vn(),e.flags|=256,de(t,e,l,a),e.child}var Lr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gr(t){return{baseLanes:t,cachePool:Df()}}function Yr(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=Ve),t}function Ld(t,e,l){var a=e.pendingProps,i=!1,u=(e.flags&128)!==0,s;if((s=u)||(s=t!==null&&t.memoizedState===null?!1:(ne.current&2)!==0),s&&(i=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(kt){if(i?Ll(e):Gl(),kt){var f=Kt,m;if(m=f){t:{for(m=f,f=nl;m.nodeType!==8;){if(!f){f=null;break t}if(m=Ie(m.nextSibling),m===null){f=null;break t}}f=m}f!==null?(e.memoizedState={dehydrated:f,treeContext:da!==null?{id:gl,overflow:bl}:null,retryLane:536870912,hydrationErrors:null},m=ke(18,null,null,0),m.stateNode=f,m.return=e,e.child=m,Se=e,Kt=null,m=!0):m=!1}m||ma(e)}if(f=e.memoizedState,f!==null&&(f=f.dehydrated,f!==null))return Tc(f)?e.lanes=32:e.lanes=536870912,null;Al(e)}return f=a.children,a=a.fallback,i?(Gl(),i=e.mode,f=Au({mode:"hidden",children:f},i),a=fa(a,i,l,null),f.return=e,a.return=e,f.sibling=a,e.child=f,i=e.child,i.memoizedState=Gr(l),i.childLanes=Yr(t,s,l),e.memoizedState=Lr,a):(Ll(e),Qr(e,f))}if(m=t.memoizedState,m!==null&&(f=m.dehydrated,f!==null)){if(u)e.flags&256?(Ll(e),e.flags&=-257,e=qr(t,e,l)):e.memoizedState!==null?(Gl(),e.child=t.child,e.flags|=128,e=null):(Gl(),i=a.fallback,f=e.mode,a=Au({mode:"visible",children:a.children},f),i=fa(i,f,l,null),i.flags|=2,a.return=e,i.return=e,a.sibling=i,e.child=a,cn(e,t.child,null,l),a=e.child,a.memoizedState=Gr(l),a.childLanes=Yr(t,s,l),e.memoizedState=Lr,e=i);else if(Ll(e),Tc(f)){if(s=f.nextSibling&&f.nextSibling.dataset,s)var w=s.dgst;s=w,a=Error(r(419)),a.stack="",a.digest=s,Zn({value:a,source:null,stack:null}),e=qr(t,e,l)}else if(oe||Kn(t,e,l,!1),s=(l&t.childLanes)!==0,oe||s){if(s=Gt,s!==null&&(a=l&-l,a=(a&42)!==0?1:Do(a),a=(a&(s.suspendedLanes|l))!==0?0:a,a!==0&&a!==m.retryLane))throw m.retryLane=a,Fa(t,a),je(s,t,a),Md;f.data==="$?"||rc(),e=qr(t,e,l)}else f.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=m.treeContext,Kt=Ie(f.nextSibling),Se=e,kt=!0,pa=null,nl=!1,t!==null&&(Qe[qe++]=gl,Qe[qe++]=bl,Qe[qe++]=da,gl=t.id,bl=t.overflow,da=e),e=Qr(e,a.children),e.flags|=4096);return e}return i?(Gl(),i=a.fallback,f=e.mode,m=t.child,w=m.sibling,a=ml(m,{mode:"hidden",children:a.children}),a.subtreeFlags=m.subtreeFlags&65011712,w!==null?i=ml(w,i):(i=fa(i,f,l,null),i.flags|=2),i.return=e,a.return=e,a.sibling=i,e.child=a,a=i,i=e.child,f=t.child.memoizedState,f===null?f=Gr(l):(m=f.cachePool,m!==null?(w=ae._currentValue,m=m.parent!==w?{parent:w,pool:w}:m):m=Df(),f={baseLanes:f.baseLanes|l,cachePool:m}),i.memoizedState=f,i.childLanes=Yr(t,s,l),e.memoizedState=Lr,a):(Ll(e),l=t.child,t=l.sibling,l=ml(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=l,e.memoizedState=null,l)}function Qr(t,e){return e=Au({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Au(t,e){return t=ke(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function qr(t,e,l){return cn(e,t.child,null,l),t=Qr(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Gd(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),rr(t.return,e,l)}function Xr(t,e,l,a,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:i}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=i)}function Yd(t,e,l){var a=e.pendingProps,i=a.revealOrder,u=a.tail;if(de(t,e,a.children,l),a=ne.current,(a&2)!==0)a=a&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gd(t,l,e);else if(t.tag===19)Gd(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(_(ne,a),i){case"forwards":for(l=e.child,i=null;l!==null;)t=l.alternate,t!==null&&bu(t)===null&&(i=l),l=l.sibling;l=i,l===null?(i=e.child,e.child=null):(i=l.sibling,l.sibling=null),Xr(e,!1,i,l,u);break;case"backwards":for(l=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&bu(t)===null){e.child=i;break}t=i.sibling,i.sibling=l,l=i,i=t}Xr(e,!0,l,null,u);break;case"together":Xr(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Sl(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),Vl|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(Kn(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(r(153));if(e.child!==null){for(t=e.child,l=ml(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=ml(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function Vr(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&eu(t)))}function og(t,e,l){switch(e.tag){case 3:ft(e,e.stateNode.containerInfo),jl(e,ae,t.memoizedState.cache),Vn();break;case 27:case 5:mt(e);break;case 4:ft(e,e.stateNode.containerInfo);break;case 10:jl(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(Ll(e),e.flags|=128,null):(l&e.child.childLanes)!==0?Ld(t,e,l):(Ll(e),t=Sl(t,e,l),t!==null?t.sibling:null);Ll(e);break;case 19:var i=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(Kn(t,e,l,!1),a=(l&e.childLanes)!==0),i){if(a)return Yd(t,e,l);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_(ne,ne.current),a)break;return null;case 22:case 23:return e.lanes=0,jd(t,e,l);case 24:jl(e,ae,t.memoizedState.cache)}return Sl(t,e,l)}function Qd(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)oe=!0;else{if(!Vr(t,l)&&(e.flags&128)===0)return oe=!1,og(t,e,l);oe=(t.flags&131072)!==0}else oe=!1,kt&&(e.flags&1048576)!==0&&vf(e,tu,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var a=e.elementType,i=a._init;if(a=i(a._payload),e.type=a,typeof a=="function")er(a)?(t=xa(a,t),e.tag=1,e=Ud(null,e,a,t,l)):(e.tag=0,e=$r(null,e,a,t,l));else{if(a!=null){if(i=a.$$typeof,i===at){e.tag=11,e=Cd(null,e,a,t,l);break t}else if(i===F){e.tag=14,e=Nd(null,e,a,t,l);break t}}throw e=U(a)||a,Error(r(306,e,""))}}return e;case 0:return $r(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,i=xa(a,e.pendingProps),Ud(t,e,a,i,l);case 3:t:{if(ft(e,e.stateNode.containerInfo),t===null)throw Error(r(387));a=e.pendingProps;var u=e.memoizedState;i=u.element,mr(t,e),ei(e,a,null,l);var s=e.memoizedState;if(a=s.cache,jl(e,ae,a),a!==u.cache&&cr(e,[ae],l,!0),ti(),a=s.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=$d(t,e,a,l);break t}else if(a!==i){i=Ge(Error(r(424)),e),Zn(i),e=$d(t,e,a,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Kt=Ie(t.firstChild),Se=e,kt=!0,pa=null,nl=!0,l=Ad(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Vn(),a===i){e=Sl(t,e,l);break t}de(t,e,a,l)}e=e.child}return e;case 26:return xu(t,e),t===null?(l=Zh(e.type,null,e.pendingProps,null))?e.memoizedState=l:kt||(l=e.type,t=e.pendingProps,a=ju(J.current).createElement(l),a[be]=e,a[we]=t,pe(a,l,t),ue(a),e.stateNode=a):e.memoizedState=Zh(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return mt(e),t===null&&kt&&(a=e.stateNode=qh(e.type,e.pendingProps,J.current),Se=e,nl=!0,i=Kt,Wl(e.type)?(Dc=i,Kt=Ie(a.firstChild)):Kt=i),de(t,e,e.pendingProps.children,l),xu(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&kt&&((i=a=Kt)&&(a=jg(a,e.type,e.pendingProps,nl),a!==null?(e.stateNode=a,Se=e,Kt=Ie(a.firstChild),nl=!1,i=!0):i=!1),i||ma(e)),mt(e),i=e.type,u=e.pendingProps,s=t!==null?t.memoizedProps:null,a=u.children,Sc(i,u)?a=null:s!==null&&Sc(i,s)&&(e.flags|=32),e.memoizedState!==null&&(i=Ar(t,e,Pm,null,null,l),Ei._currentValue=i),xu(t,e),de(t,e,a,l),e.child;case 6:return t===null&&kt&&((t=l=Kt)&&(l=Bg(l,e.pendingProps,nl),l!==null?(e.stateNode=l,Se=e,Kt=null,t=!0):t=!1),t||ma(e)),null;case 13:return Ld(t,e,l);case 4:return ft(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=cn(e,null,a,l):de(t,e,a,l),e.child;case 11:return Cd(t,e,e.type,e.pendingProps,l);case 7:return de(t,e,e.pendingProps,l),e.child;case 8:return de(t,e,e.pendingProps.children,l),e.child;case 12:return de(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,jl(e,e.type,a.value),de(t,e,a.children,l),e.child;case 9:return i=e.type._context,a=e.pendingProps.children,ba(e),i=ye(i),a=a(i),e.flags|=1,de(t,e,a,l),e.child;case 14:return Nd(t,e,e.type,e.pendingProps,l);case 15:return _d(t,e,e.type,e.pendingProps,l);case 19:return Yd(t,e,l);case 31:return a=e.pendingProps,l=e.mode,a={mode:a.mode,children:a.children},t===null?(l=Au(a,l),l.ref=e.ref,e.child=l,l.return=e,e=l):(l=ml(t.child,a),l.ref=e.ref,e.child=l,l.return=e,e=l),e;case 22:return jd(t,e,l);case 24:return ba(e),a=ye(ae),t===null?(i=dr(),i===null&&(i=Gt,u=sr(),i.pooledCache=u,u.refCount++,u!==null&&(i.pooledCacheLanes|=l),i=u),e.memoizedState={parent:a,cache:i},pr(e),jl(e,ae,i)):((t.lanes&l)!==0&&(mr(t,e),ei(e,null,null,l),ti()),i=t.memoizedState,u=e.memoizedState,i.parent!==a?(i={parent:a,cache:a},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),jl(e,ae,a)):(a=u.cache,jl(e,ae,a),a!==i.cache&&cr(e,[ae],l,!0))),de(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(r(156,e.tag))}function El(t){t.flags|=4}function qd(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ih(e)){if(e=Xe.current,e!==null&&((Ot&4194048)===Ot?il!==null:(Ot&62914560)!==Ot&&(Ot&536870912)===0||e!==il))throw In=hr,Rf;t.flags|=8192}}function Su(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?As():536870912,t.lanes|=e,hn|=e)}function ri(t,e){if(!kt)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var i=t.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function rg(t,e,l){var a=e.pendingProps;switch(ir(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(e),null;case 1:return Zt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),vl(ae),Y(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Xn(e)?El(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Sf())),Zt(e),null;case 26:return l=e.memoizedState,t===null?(El(e),l!==null?(Zt(e),qd(e,l)):(Zt(e),e.flags&=-16777217)):l?l!==t.memoizedState?(El(e),Zt(e),qd(e,l)):(Zt(e),e.flags&=-16777217):(t.memoizedProps!==a&&El(e),Zt(e),e.flags&=-16777217),null;case 27:dt(e),l=J.current;var i=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==a&&El(e);else{if(!a){if(e.stateNode===null)throw Error(r(166));return Zt(e),null}t=Q.current,Xn(e)?xf(e):(t=qh(i,a,l),e.stateNode=t,El(e))}return Zt(e),null;case 5:if(dt(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&El(e);else{if(!a){if(e.stateNode===null)throw Error(r(166));return Zt(e),null}if(t=Q.current,Xn(e))xf(e);else{switch(i=ju(J.current),t){case 1:t=i.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:t=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":t=i.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":t=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":t=i.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?i.createElement(l,{is:a.is}):i.createElement(l)}}t[be]=e,t[we]=a;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=t;t:switch(pe(t,l,a),l){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&El(e)}}return Zt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&El(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(r(166));if(t=J.current,Xn(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,i=Se,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}t[be]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Hh(t.nodeValue,l)),t||ma(e)}else t=ju(t).createTextNode(a),t[be]=e,e.stateNode=t}return Zt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=Xn(e),a!==null&&a.dehydrated!==null){if(t===null){if(!i)throw Error(r(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(r(317));i[be]=e}else Vn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Zt(e),i=!1}else i=Sf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(Al(e),e):(Al(e),null)}if(Al(e),(e.flags&128)!==0)return e.lanes=l,e;if(l=a!==null,t=t!==null&&t.memoizedState!==null,l){a=e.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool);var u=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==i&&(a.flags|=2048)}return l!==t&&l&&(e.child.flags|=8192),Su(e,e.updateQueue),Zt(e),null;case 4:return Y(),t===null&&bc(e.stateNode.containerInfo),Zt(e),null;case 10:return vl(e.type),Zt(e),null;case 19:if(K(ne),i=e.memoizedState,i===null)return Zt(e),null;if(a=(e.flags&128)!==0,u=i.rendering,u===null)if(a)ri(i,!1);else{if(Jt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=bu(t),u!==null){for(e.flags|=128,ri(i,!1),t=u.updateQueue,e.updateQueue=t,Su(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)yf(l,t),l=l.sibling;return _(ne,ne.current&1|2),e.child}t=t.sibling}i.tail!==null&&Qt()>Tu&&(e.flags|=128,a=!0,ri(i,!1),e.lanes=4194304)}else{if(!a)if(t=bu(u),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,Su(e,t),ri(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!kt)return Zt(e),null}else 2*Qt()-i.renderingStartTime>Tu&&l!==536870912&&(e.flags|=128,a=!0,ri(i,!1),e.lanes=4194304);i.isBackwards?(u.sibling=e.child,e.child=u):(t=i.last,t!==null?t.sibling=u:e.child=u,i.last=u)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Qt(),e.sibling=null,t=ne.current,_(ne,a?t&1|2:t&1),e):(Zt(e),null);case 22:case 23:return Al(e),vr(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(Zt(e),e.subtreeFlags&6&&(e.flags|=8192)):Zt(e),l=e.updateQueue,l!==null&&Su(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&K(ya),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),vl(ae),Zt(e),null;case 25:return null;case 30:return null}throw Error(r(156,e.tag))}function cg(t,e){switch(ir(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return vl(ae),Y(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return dt(e),null;case 13:if(Al(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(r(340));Vn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return K(ne),null;case 4:return Y(),null;case 10:return vl(e.type),null;case 22:case 23:return Al(e),vr(),t!==null&&K(ya),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return vl(ae),null;case 25:return null;default:return null}}function Xd(t,e){switch(ir(e),e.tag){case 3:vl(ae),Y();break;case 26:case 27:case 5:dt(e);break;case 4:Y();break;case 13:Al(e);break;case 19:K(ne);break;case 10:vl(e.type);break;case 22:case 23:Al(e),vr(),t!==null&&K(ya);break;case 24:vl(ae)}}function ci(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&t)===t){a=void 0;var u=l.create,s=l.inst;a=u(),s.destroy=a}l=l.next}while(l!==i)}}catch(f){Lt(e,e.return,f)}}function Yl(t,e,l){try{var a=e.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var u=i.next;a=u;do{if((a.tag&t)===t){var s=a.inst,f=s.destroy;if(f!==void 0){s.destroy=void 0,i=e;var m=l,w=f;try{w()}catch(H){Lt(i,m,H)}}}a=a.next}while(a!==u)}}catch(H){Lt(e,e.return,H)}}function Vd(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{Nf(e,l)}catch(a){Lt(t,t.return,a)}}}function Zd(t,e,l){l.props=xa(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){Lt(t,e,a)}}function si(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(i){Lt(t,e,i)}}function ul(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(i){Lt(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(i){Lt(t,e,i)}else l.current=null}function Kd(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(i){Lt(t,t.return,i)}}function Zr(t,e,l){try{var a=t.stateNode;kg(a,t.type,l,e),a[we]=e}catch(i){Lt(t,t.return,i)}}function Jd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wl(t.type)||t.tag===4}function Kr(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Jd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jr(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=_u));else if(a!==4&&(a===27&&Wl(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(Jr(t,e,l),t=t.sibling;t!==null;)Jr(t,e,l),t=t.sibling}function Eu(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&Wl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(Eu(t,e,l),t=t.sibling;t!==null;)Eu(t,e,l),t=t.sibling}function Wd(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);pe(e,a,l),e[be]=t,e[we]=l}catch(u){Lt(t,t.return,u)}}var wl=!1,It=!1,Wr=!1,Fd=typeof WeakSet=="function"?WeakSet:Set,re=null;function sg(t,e){if(t=t.containerInfo,xc=Gu,t=rf(t),Ko(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var i=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{l.nodeType,u.nodeType}catch{l=null;break t}var s=0,f=-1,m=-1,w=0,H=0,L=t,O=null;e:for(;;){for(var z;L!==l||i!==0&&L.nodeType!==3||(f=s+i),L!==u||a!==0&&L.nodeType!==3||(m=s+a),L.nodeType===3&&(s+=L.nodeValue.length),(z=L.firstChild)!==null;)O=L,L=z;for(;;){if(L===t)break e;if(O===l&&++w===i&&(f=s),O===u&&++H===a&&(m=s),(z=L.nextSibling)!==null)break;L=O,O=L.parentNode}L=z}l=f===-1||m===-1?null:{start:f,end:m}}else l=null}l=l||{start:0,end:0}}else l=null;for(Ac={focusedElem:t,selectionRange:l},Gu=!1,re=e;re!==null;)if(e=re,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,re=t;else for(;re!==null;){switch(e=re,u=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,l=e,i=u.memoizedProps,u=u.memoizedState,a=l.stateNode;try{var gt=xa(l.type,i,l.elementType===l.type);t=a.getSnapshotBeforeUpdate(gt,u),a.__reactInternalSnapshotBeforeUpdate=t}catch(ht){Lt(l,l.return,ht)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)wc(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":wc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=e.sibling,t!==null){t.return=e.return,re=t;break}re=e.return}}function Id(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Ql(t,l),a&4&&ci(5,l);break;case 1:if(Ql(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(s){Lt(l,l.return,s)}else{var i=xa(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){Lt(l,l.return,s)}}a&64&&Vd(l),a&512&&si(l,l.return);break;case 3:if(Ql(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{Nf(t,e)}catch(s){Lt(l,l.return,s)}}break;case 27:e===null&&a&4&&Wd(l);case 26:case 5:Ql(t,l),e===null&&a&4&&Kd(l),a&512&&si(l,l.return);break;case 12:Ql(t,l);break;case 13:Ql(t,l),a&4&&eh(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=vg.bind(null,l),Hg(t,l))));break;case 22:if(a=l.memoizedState!==null||wl,!a){e=e!==null&&e.memoizedState!==null||It,i=wl;var u=It;wl=a,(It=e)&&!u?ql(t,l,(l.subtreeFlags&8772)!==0):Ql(t,l),wl=i,It=u}break;case 30:break;default:Ql(t,l)}}function Pd(t){var e=t.alternate;e!==null&&(t.alternate=null,Pd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&zo(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Vt=null,Re=!1;function Tl(t,e,l){for(l=l.child;l!==null;)th(t,e,l),l=l.sibling}function th(t,e,l){if(xe&&typeof xe.onCommitFiberUnmount=="function")try{xe.onCommitFiberUnmount(Cl,l)}catch{}switch(l.tag){case 26:It||ul(l,e),Tl(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:It||ul(l,e);var a=Vt,i=Re;Wl(l.type)&&(Vt=l.stateNode,Re=!1),Tl(t,e,l),vi(l.stateNode),Vt=a,Re=i;break;case 5:It||ul(l,e);case 6:if(a=Vt,i=Re,Vt=null,Tl(t,e,l),Vt=a,Re=i,Vt!==null)if(Re)try{(Vt.nodeType===9?Vt.body:Vt.nodeName==="HTML"?Vt.ownerDocument.body:Vt).removeChild(l.stateNode)}catch(u){Lt(l,e,u)}else try{Vt.removeChild(l.stateNode)}catch(u){Lt(l,e,u)}break;case 18:Vt!==null&&(Re?(t=Vt,Yh(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),Ri(t)):Yh(Vt,l.stateNode));break;case 4:a=Vt,i=Re,Vt=l.stateNode.containerInfo,Re=!0,Tl(t,e,l),Vt=a,Re=i;break;case 0:case 11:case 14:case 15:It||Yl(2,l,e),It||Yl(4,l,e),Tl(t,e,l);break;case 1:It||(ul(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Zd(l,e,a)),Tl(t,e,l);break;case 21:Tl(t,e,l);break;case 22:It=(a=It)||l.memoizedState!==null,Tl(t,e,l),It=a;break;default:Tl(t,e,l)}}function eh(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ri(t)}catch(l){Lt(e,e.return,l)}}function fg(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Fd),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Fd),e;default:throw Error(r(435,t.tag))}}function Fr(t,e){var l=fg(t);e.forEach(function(a){var i=xg.bind(null,t,a);l.has(a)||(l.add(a),a.then(i,i))})}function Me(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var i=l[a],u=t,s=e,f=s;t:for(;f!==null;){switch(f.tag){case 27:if(Wl(f.type)){Vt=f.stateNode,Re=!1;break t}break;case 5:Vt=f.stateNode,Re=!1;break t;case 3:case 4:Vt=f.stateNode.containerInfo,Re=!0;break t}f=f.return}if(Vt===null)throw Error(r(160));th(u,s,i),Vt=null,Re=!1,u=i.alternate,u!==null&&(u.return=null),i.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)lh(e,t),e=e.sibling}var Fe=null;function lh(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Me(e,t),Ce(t),a&4&&(Yl(3,t,t.return),ci(3,t),Yl(5,t,t.return));break;case 1:Me(e,t),Ce(t),a&512&&(It||l===null||ul(l,l.return)),a&64&&wl&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var i=Fe;if(Me(e,t),Ce(t),a&512&&(It||l===null||ul(l,l.return)),a&4){var u=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,i=i.ownerDocument||i;e:switch(a){case"title":u=i.getElementsByTagName("title")[0],(!u||u[_n]||u[be]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=i.createElement(a),i.head.insertBefore(u,i.querySelector("head > title"))),pe(u,a,l),u[be]=t,ue(u),a=u;break t;case"link":var s=Wh("link","href",i).get(a+(l.href||""));if(s){for(var f=0;f<s.length;f++)if(u=s[f],u.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&u.getAttribute("rel")===(l.rel==null?null:l.rel)&&u.getAttribute("title")===(l.title==null?null:l.title)&&u.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){s.splice(f,1);break e}}u=i.createElement(a),pe(u,a,l),i.head.appendChild(u);break;case"meta":if(s=Wh("meta","content",i).get(a+(l.content||""))){for(f=0;f<s.length;f++)if(u=s[f],u.getAttribute("content")===(l.content==null?null:""+l.content)&&u.getAttribute("name")===(l.name==null?null:l.name)&&u.getAttribute("property")===(l.property==null?null:l.property)&&u.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&u.getAttribute("charset")===(l.charSet==null?null:l.charSet)){s.splice(f,1);break e}}u=i.createElement(a),pe(u,a,l),i.head.appendChild(u);break;default:throw Error(r(468,a))}u[be]=t,ue(u),a=u}t.stateNode=a}else Fh(i,t.type,t.stateNode);else t.stateNode=Jh(i,a,t.memoizedProps);else u!==a?(u===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):u.count--,a===null?Fh(i,t.type,t.stateNode):Jh(i,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Zr(t,t.memoizedProps,l.memoizedProps)}break;case 27:Me(e,t),Ce(t),a&512&&(It||l===null||ul(l,l.return)),l!==null&&a&4&&Zr(t,t.memoizedProps,l.memoizedProps);break;case 5:if(Me(e,t),Ce(t),a&512&&(It||l===null||ul(l,l.return)),t.flags&32){i=t.stateNode;try{qa(i,"")}catch(z){Lt(t,t.return,z)}}a&4&&t.stateNode!=null&&(i=t.memoizedProps,Zr(t,i,l!==null?l.memoizedProps:i)),a&1024&&(Wr=!0);break;case 6:if(Me(e,t),Ce(t),a&4){if(t.stateNode===null)throw Error(r(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(z){Lt(t,t.return,z)}}break;case 3:if(Uu=null,i=Fe,Fe=Bu(e.containerInfo),Me(e,t),Fe=i,Ce(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Ri(e.containerInfo)}catch(z){Lt(t,t.return,z)}Wr&&(Wr=!1,ah(t));break;case 4:a=Fe,Fe=Bu(t.stateNode.containerInfo),Me(e,t),Ce(t),Fe=a;break;case 12:Me(e,t),Ce(t);break;case 13:Me(e,t),Ce(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(ac=Qt()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Fr(t,a)));break;case 22:i=t.memoizedState!==null;var m=l!==null&&l.memoizedState!==null,w=wl,H=It;if(wl=w||i,It=H||m,Me(e,t),It=H,wl=w,Ce(t),a&8192)t:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(l===null||m||wl||It||Aa(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){m=l=e;try{if(u=m.stateNode,i)s=u.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{f=m.stateNode;var L=m.memoizedProps.style,O=L!=null&&L.hasOwnProperty("display")?L.display:null;f.style.display=O==null||typeof O=="boolean"?"":(""+O).trim()}}catch(z){Lt(m,m.return,z)}}}else if(e.tag===6){if(l===null){m=e;try{m.stateNode.nodeValue=i?"":m.memoizedProps}catch(z){Lt(m,m.return,z)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Fr(t,l))));break;case 19:Me(e,t),Ce(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Fr(t,a)));break;case 30:break;case 21:break;default:Me(e,t),Ce(t)}}function Ce(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(Jd(a)){l=a;break}a=a.return}if(l==null)throw Error(r(160));switch(l.tag){case 27:var i=l.stateNode,u=Kr(t);Eu(t,u,i);break;case 5:var s=l.stateNode;l.flags&32&&(qa(s,""),l.flags&=-33);var f=Kr(t);Eu(t,f,s);break;case 3:case 4:var m=l.stateNode.containerInfo,w=Kr(t);Jr(t,w,m);break;default:throw Error(r(161))}}catch(H){Lt(t,t.return,H)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ah(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;ah(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Ql(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Id(t,e.alternate,e),e=e.sibling}function Aa(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Yl(4,e,e.return),Aa(e);break;case 1:ul(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&Zd(e,e.return,l),Aa(e);break;case 27:vi(e.stateNode);case 26:case 5:ul(e,e.return),Aa(e);break;case 22:e.memoizedState===null&&Aa(e);break;case 30:Aa(e);break;default:Aa(e)}t=t.sibling}}function ql(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,i=t,u=e,s=u.flags;switch(u.tag){case 0:case 11:case 15:ql(i,u,l),ci(4,u);break;case 1:if(ql(i,u,l),a=u,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(w){Lt(a,a.return,w)}if(a=u,i=a.updateQueue,i!==null){var f=a.stateNode;try{var m=i.shared.hiddenCallbacks;if(m!==null)for(i.shared.hiddenCallbacks=null,i=0;i<m.length;i++)Cf(m[i],f)}catch(w){Lt(a,a.return,w)}}l&&s&64&&Vd(u),si(u,u.return);break;case 27:Wd(u);case 26:case 5:ql(i,u,l),l&&a===null&&s&4&&Kd(u),si(u,u.return);break;case 12:ql(i,u,l);break;case 13:ql(i,u,l),l&&s&4&&eh(i,u);break;case 22:u.memoizedState===null&&ql(i,u,l),si(u,u.return);break;case 30:break;default:ql(i,u,l)}e=e.sibling}}function Ir(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Jn(l))}function Pr(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Jn(t))}function ol(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)nh(t,e,l,a),e=e.sibling}function nh(t,e,l,a){var i=e.flags;switch(e.tag){case 0:case 11:case 15:ol(t,e,l,a),i&2048&&ci(9,e);break;case 1:ol(t,e,l,a);break;case 3:ol(t,e,l,a),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Jn(t)));break;case 12:if(i&2048){ol(t,e,l,a),t=e.stateNode;try{var u=e.memoizedProps,s=u.id,f=u.onPostCommit;typeof f=="function"&&f(s,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(m){Lt(e,e.return,m)}}else ol(t,e,l,a);break;case 13:ol(t,e,l,a);break;case 23:break;case 22:u=e.stateNode,s=e.alternate,e.memoizedState!==null?u._visibility&2?ol(t,e,l,a):fi(t,e):u._visibility&2?ol(t,e,l,a):(u._visibility|=2,sn(t,e,l,a,(e.subtreeFlags&10256)!==0)),i&2048&&Ir(s,e);break;case 24:ol(t,e,l,a),i&2048&&Pr(e.alternate,e);break;default:ol(t,e,l,a)}}function sn(t,e,l,a,i){for(i=i&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var u=t,s=e,f=l,m=a,w=s.flags;switch(s.tag){case 0:case 11:case 15:sn(u,s,f,m,i),ci(8,s);break;case 23:break;case 22:var H=s.stateNode;s.memoizedState!==null?H._visibility&2?sn(u,s,f,m,i):fi(u,s):(H._visibility|=2,sn(u,s,f,m,i)),i&&w&2048&&Ir(s.alternate,s);break;case 24:sn(u,s,f,m,i),i&&w&2048&&Pr(s.alternate,s);break;default:sn(u,s,f,m,i)}e=e.sibling}}function fi(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,i=a.flags;switch(a.tag){case 22:fi(l,a),i&2048&&Ir(a.alternate,a);break;case 24:fi(l,a),i&2048&&Pr(a.alternate,a);break;default:fi(l,a)}e=e.sibling}}var di=8192;function fn(t){if(t.subtreeFlags&di)for(t=t.child;t!==null;)ih(t),t=t.sibling}function ih(t){switch(t.tag){case 26:fn(t),t.flags&di&&t.memoizedState!==null&&Wg(Fe,t.memoizedState,t.memoizedProps);break;case 5:fn(t);break;case 3:case 4:var e=Fe;Fe=Bu(t.stateNode.containerInfo),fn(t),Fe=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=di,di=16777216,fn(t),di=e):fn(t));break;default:fn(t)}}function uh(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function hi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];re=a,rh(a,t)}uh(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)oh(t),t=t.sibling}function oh(t){switch(t.tag){case 0:case 11:case 15:hi(t),t.flags&2048&&Yl(9,t,t.return);break;case 3:hi(t);break;case 12:hi(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,wu(t)):hi(t);break;default:hi(t)}}function wu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];re=a,rh(a,t)}uh(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Yl(8,e,e.return),wu(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,wu(e));break;default:wu(e)}t=t.sibling}}function rh(t,e){for(;re!==null;){var l=re;switch(l.tag){case 0:case 11:case 15:Yl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Jn(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,re=a;else t:for(l=t;re!==null;){a=re;var i=a.sibling,u=a.return;if(Pd(a),a===l){re=null;break t}if(i!==null){i.return=u,re=i;break t}re=u}}}var dg={getCacheForType:function(t){var e=ye(ae),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l}},hg=typeof WeakMap=="function"?WeakMap:Map,jt=0,Gt=null,Tt=null,Ot=0,Bt=0,Ne=null,Xl=!1,dn=!1,tc=!1,Dl=0,Jt=0,Vl=0,Sa=0,ec=0,Ve=0,hn=0,pi=null,Oe=null,lc=!1,ac=0,Tu=1/0,Du=null,Zl=null,he=0,Kl=null,pn=null,mn=0,nc=0,ic=null,ch=null,mi=0,uc=null;function _e(){if((jt&2)!==0&&Ot!==0)return Ot&-Ot;if(D.T!==null){var t=en;return t!==0?t:hc()}return ws()}function sh(){Ve===0&&(Ve=(Ot&536870912)===0||kt?xs():536870912);var t=Xe.current;return t!==null&&(t.flags|=32),Ve}function je(t,e,l){(t===Gt&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)&&(gn(t,0),Jl(t,Ot,Ve,!1)),Nn(t,l),((jt&2)===0||t!==Gt)&&(t===Gt&&((jt&2)===0&&(Sa|=l),Jt===4&&Jl(t,Ot,Ve,!1)),rl(t))}function fh(t,e,l){if((jt&6)!==0)throw Error(r(327));var a=!l&&(e&124)===0&&(e&t.expiredLanes)===0||ua(t,e),i=a?gg(t,e):cc(t,e,!0),u=a;do{if(i===0){dn&&!a&&Jl(t,e,0,!1);break}else{if(l=t.current.alternate,u&&!pg(l)){i=cc(t,e,!1),u=!1;continue}if(i===2){if(u=e,t.errorRecoveryDisabledLanes&u)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;t:{var f=t;i=pi;var m=f.current.memoizedState.isDehydrated;if(m&&(gn(f,s).flags|=256),s=cc(f,s,!1),s!==2){if(tc&&!m){f.errorRecoveryDisabledLanes|=u,Sa|=u,i=4;break t}u=Oe,Oe=i,u!==null&&(Oe===null?Oe=u:Oe.push.apply(Oe,u))}i=s}if(u=!1,i!==2)continue}}if(i===1){gn(t,0),Jl(t,e,0,!0);break}t:{switch(a=t,u=i,u){case 0:case 1:throw Error(r(345));case 4:if((e&4194048)!==e)break;case 6:Jl(a,e,Ve,!Xl);break t;case 2:Oe=null;break;case 3:case 5:break;default:throw Error(r(329))}if((e&62914560)===e&&(i=ac+300-Qt(),10<i)){if(Jl(a,e,Ve,!Xl),Ba(a,0,!0)!==0)break t;a.timeoutHandle=Lh(dh.bind(null,a,l,Oe,Du,lc,e,Ve,Sa,hn,Xl,u,2,-0,0),i);break t}dh(a,l,Oe,Du,lc,e,Ve,Sa,hn,Xl,u,0,-0,0)}}break}while(!0);rl(t)}function dh(t,e,l,a,i,u,s,f,m,w,H,L,O,z){if(t.timeoutHandle=-1,L=e.subtreeFlags,(L&8192||(L&16785408)===16785408)&&(Si={stylesheets:null,count:0,unsuspend:Jg},ih(e),L=Fg(),L!==null)){t.cancelPendingCommit=L(vh.bind(null,t,e,u,l,a,i,s,f,m,H,1,O,z)),Jl(t,u,s,!w);return}vh(t,e,u,l,a,i,s,f,m)}function pg(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var i=l[a],u=i.getSnapshot;i=i.value;try{if(!ze(u(),i))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Jl(t,e,l,a){e&=~ec,e&=~Sa,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var i=e;0<i;){var u=31-Ae(i),s=1<<u;a[u]=-1,i&=~s}l!==0&&Ss(t,l,e)}function Ru(){return(jt&6)===0?(gi(0),!1):!0}function oc(){if(Tt!==null){if(Bt===0)var t=Tt.return;else t=Tt,yl=ga=null,wr(t),rn=null,ui=0,t=Tt;for(;t!==null;)Xd(t.alternate,t),t=t.return;Tt=null}}function gn(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,Cg(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),oc(),Gt=t,Tt=l=ml(t.current,null),Ot=e,Bt=0,Ne=null,Xl=!1,dn=ua(t,e),tc=!1,hn=Ve=ec=Sa=Vl=Jt=0,Oe=pi=null,lc=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var i=31-Ae(a),u=1<<i;e|=t[i],a&=~u}return Dl=e,Ji(),l}function hh(t,e){Et=null,D.H=pu,e===Fn||e===nu?(e=kf(),Bt=3):e===Rf?(e=kf(),Bt=4):Bt=e===Md?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ne=e,Tt===null&&(Jt=1,vu(t,Ge(e,t.current)))}function ph(){var t=D.H;return D.H=pu,t===null?pu:t}function mh(){var t=D.A;return D.A=dg,t}function rc(){Jt=4,Xl||(Ot&4194048)!==Ot&&Xe.current!==null||(dn=!0),(Vl&134217727)===0&&(Sa&134217727)===0||Gt===null||Jl(Gt,Ot,Ve,!1)}function cc(t,e,l){var a=jt;jt|=2;var i=ph(),u=mh();(Gt!==t||Ot!==e)&&(Du=null,gn(t,e)),e=!1;var s=Jt;t:do try{if(Bt!==0&&Tt!==null){var f=Tt,m=Ne;switch(Bt){case 8:oc(),s=6;break t;case 3:case 2:case 9:case 6:Xe.current===null&&(e=!0);var w=Bt;if(Bt=0,Ne=null,bn(t,f,m,w),l&&dn){s=0;break t}break;default:w=Bt,Bt=0,Ne=null,bn(t,f,m,w)}}mg(),s=Jt;break}catch(H){hh(t,H)}while(!0);return e&&t.shellSuspendCounter++,yl=ga=null,jt=a,D.H=i,D.A=u,Tt===null&&(Gt=null,Ot=0,Ji()),s}function mg(){for(;Tt!==null;)gh(Tt)}function gg(t,e){var l=jt;jt|=2;var a=ph(),i=mh();Gt!==t||Ot!==e?(Du=null,Tu=Qt()+500,gn(t,e)):dn=ua(t,e);t:do try{if(Bt!==0&&Tt!==null){e=Tt;var u=Ne;e:switch(Bt){case 1:Bt=0,Ne=null,bn(t,e,u,1);break;case 2:case 9:if(Of(u)){Bt=0,Ne=null,bh(e);break}e=function(){Bt!==2&&Bt!==9||Gt!==t||(Bt=7),rl(t)},u.then(e,e);break t;case 3:Bt=7;break t;case 4:Bt=5;break t;case 7:Of(u)?(Bt=0,Ne=null,bh(e)):(Bt=0,Ne=null,bn(t,e,u,7));break;case 5:var s=null;switch(Tt.tag){case 26:s=Tt.memoizedState;case 5:case 27:var f=Tt;if(!s||Ih(s)){Bt=0,Ne=null;var m=f.sibling;if(m!==null)Tt=m;else{var w=f.return;w!==null?(Tt=w,Ou(w)):Tt=null}break e}}Bt=0,Ne=null,bn(t,e,u,5);break;case 6:Bt=0,Ne=null,bn(t,e,u,6);break;case 8:oc(),Jt=6;break t;default:throw Error(r(462))}}bg();break}catch(H){hh(t,H)}while(!0);return yl=ga=null,D.H=a,D.A=i,jt=l,Tt!==null?0:(Gt=null,Ot=0,Ji(),Jt)}function bg(){for(;Tt!==null&&!Yt();)gh(Tt)}function gh(t){var e=Qd(t.alternate,t,Dl);t.memoizedProps=t.pendingProps,e===null?Ou(t):Tt=e}function bh(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=Hd(l,e,e.pendingProps,e.type,void 0,Ot);break;case 11:e=Hd(l,e,e.pendingProps,e.type.render,e.ref,Ot);break;case 5:wr(e);default:Xd(l,e),e=Tt=yf(e,Dl),e=Qd(l,e,Dl)}t.memoizedProps=t.pendingProps,e===null?Ou(t):Tt=e}function bn(t,e,l,a){yl=ga=null,wr(e),rn=null,ui=0;var i=e.return;try{if(ug(t,i,e,l,Ot)){Jt=1,vu(t,Ge(l,t.current)),Tt=null;return}}catch(u){if(i!==null)throw Tt=i,u;Jt=1,vu(t,Ge(l,t.current)),Tt=null;return}e.flags&32768?(kt||a===1?t=!0:dn||(Ot&536870912)!==0?t=!1:(Xl=t=!0,(a===2||a===9||a===3||a===6)&&(a=Xe.current,a!==null&&a.tag===13&&(a.flags|=16384))),yh(e,t)):Ou(e)}function Ou(t){var e=t;do{if((e.flags&32768)!==0){yh(e,Xl);return}t=e.return;var l=rg(e.alternate,e,Dl);if(l!==null){Tt=l;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);Jt===0&&(Jt=5)}function yh(t,e){do{var l=cg(t.alternate,t);if(l!==null){l.flags&=32767,Tt=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){Tt=t;return}Tt=t=l}while(t!==null);Jt=6,Tt=null}function vh(t,e,l,a,i,u,s,f,m){t.cancelPendingCommit=null;do zu();while(he!==0);if((jt&6)!==0)throw Error(r(327));if(e!==null){if(e===t.current)throw Error(r(177));if(u=e.lanes|e.childLanes,u|=Po,J0(t,l,u,s,f,m),t===Gt&&(Tt=Gt=null,Ot=0),pn=e,Kl=t,mn=l,nc=u,ic=i,ch=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Ag(Ee,function(){return wh(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=D.T,D.T=null,i=j.p,j.p=2,s=jt,jt|=4;try{sg(t,e,l)}finally{jt=s,j.p=i,D.T=a}}he=1,xh(),Ah(),Sh()}}function xh(){if(he===1){he=0;var t=Kl,e=pn,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=D.T,D.T=null;var a=j.p;j.p=2;var i=jt;jt|=4;try{lh(e,t);var u=Ac,s=rf(t.containerInfo),f=u.focusedElem,m=u.selectionRange;if(s!==f&&f&&f.ownerDocument&&of(f.ownerDocument.documentElement,f)){if(m!==null&&Ko(f)){var w=m.start,H=m.end;if(H===void 0&&(H=w),"selectionStart"in f)f.selectionStart=w,f.selectionEnd=Math.min(H,f.value.length);else{var L=f.ownerDocument||document,O=L&&L.defaultView||window;if(O.getSelection){var z=O.getSelection(),gt=f.textContent.length,ht=Math.min(m.start,gt),$t=m.end===void 0?ht:Math.min(m.end,gt);!z.extend&&ht>$t&&(s=$t,$t=ht,ht=s);var S=uf(f,ht),x=uf(f,$t);if(S&&x&&(z.rangeCount!==1||z.anchorNode!==S.node||z.anchorOffset!==S.offset||z.focusNode!==x.node||z.focusOffset!==x.offset)){var E=L.createRange();E.setStart(S.node,S.offset),z.removeAllRanges(),ht>$t?(z.addRange(E),z.extend(x.node,x.offset)):(E.setEnd(x.node,x.offset),z.addRange(E))}}}}for(L=[],z=f;z=z.parentNode;)z.nodeType===1&&L.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<L.length;f++){var $=L[f];$.element.scrollLeft=$.left,$.element.scrollTop=$.top}}Gu=!!xc,Ac=xc=null}finally{jt=i,j.p=a,D.T=l}}t.current=e,he=2}}function Ah(){if(he===2){he=0;var t=Kl,e=pn,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=D.T,D.T=null;var a=j.p;j.p=2;var i=jt;jt|=4;try{Id(t,e.alternate,e)}finally{jt=i,j.p=a,D.T=l}}he=3}}function Sh(){if(he===4||he===3){he=0,le();var t=Kl,e=pn,l=mn,a=ch;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?he=5:(he=0,pn=Kl=null,Eh(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(Zl=null),Ro(l),e=e.stateNode,xe&&typeof xe.onCommitFiberRoot=="function")try{xe.onCommitFiberRoot(Cl,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=D.T,i=j.p,j.p=2,D.T=null;try{for(var u=t.onRecoverableError,s=0;s<a.length;s++){var f=a[s];u(f.value,{componentStack:f.stack})}}finally{D.T=e,j.p=i}}(mn&3)!==0&&zu(),rl(t),i=t.pendingLanes,(l&4194090)!==0&&(i&42)!==0?t===uc?mi++:(mi=0,uc=t):mi=0,gi(0)}}function Eh(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Jn(e)))}function zu(t){return xh(),Ah(),Sh(),wh()}function wh(){if(he!==5)return!1;var t=Kl,e=nc;nc=0;var l=Ro(mn),a=D.T,i=j.p;try{j.p=32>l?32:l,D.T=null,l=ic,ic=null;var u=Kl,s=mn;if(he=0,pn=Kl=null,mn=0,(jt&6)!==0)throw Error(r(331));var f=jt;if(jt|=4,oh(u.current),nh(u,u.current,s,l),jt=f,gi(0,!1),xe&&typeof xe.onPostCommitFiberRoot=="function")try{xe.onPostCommitFiberRoot(Cl,u)}catch{}return!0}finally{j.p=i,D.T=a,Eh(t,e)}}function Th(t,e,l){e=Ge(l,e),e=Ur(t.stateNode,e,2),t=Ul(t,e,2),t!==null&&(Nn(t,2),rl(t))}function Lt(t,e,l){if(t.tag===3)Th(t,t,l);else for(;e!==null;){if(e.tag===3){Th(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Zl===null||!Zl.has(a))){t=Ge(l,t),l=zd(2),a=Ul(e,l,2),a!==null&&(kd(l,a,e,t),Nn(a,2),rl(a));break}}e=e.return}}function sc(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new hg;var i=new Set;a.set(e,i)}else i=a.get(e),i===void 0&&(i=new Set,a.set(e,i));i.has(l)||(tc=!0,i.add(l),t=yg.bind(null,t,e,l),e.then(t,t))}function yg(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,Gt===t&&(Ot&l)===l&&(Jt===4||Jt===3&&(Ot&62914560)===Ot&&300>Qt()-ac?(jt&2)===0&&gn(t,0):ec|=l,hn===Ot&&(hn=0)),rl(t)}function Dh(t,e){e===0&&(e=As()),t=Fa(t,e),t!==null&&(Nn(t,e),rl(t))}function vg(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),Dh(t,l)}function xg(t,e){var l=0;switch(t.tag){case 13:var a=t.stateNode,i=t.memoizedState;i!==null&&(l=i.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(r(314))}a!==null&&a.delete(e),Dh(t,l)}function Ag(t,e){return Rt(t,e)}var ku=null,yn=null,fc=!1,Mu=!1,dc=!1,Ea=0;function rl(t){t!==yn&&t.next===null&&(yn===null?ku=yn=t:yn=yn.next=t),Mu=!0,fc||(fc=!0,Eg())}function gi(t,e){if(!dc&&Mu){dc=!0;do for(var l=!1,a=ku;a!==null;){if(t!==0){var i=a.pendingLanes;if(i===0)var u=0;else{var s=a.suspendedLanes,f=a.pingedLanes;u=(1<<31-Ae(42|t)+1)-1,u&=i&~(s&~f),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(l=!0,kh(a,u))}else u=Ot,u=Ba(a,a===Gt?u:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(u&3)===0||ua(a,u)||(l=!0,kh(a,u));a=a.next}while(l);dc=!1}}function Sg(){Rh()}function Rh(){Mu=fc=!1;var t=0;Ea!==0&&(Mg()&&(t=Ea),Ea=0);for(var e=Qt(),l=null,a=ku;a!==null;){var i=a.next,u=Oh(a,e);u===0?(a.next=null,l===null?ku=i:l.next=i,i===null&&(yn=l)):(l=a,(t!==0||(u&3)!==0)&&(Mu=!0)),a=i}gi(t)}function Oh(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,i=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var s=31-Ae(u),f=1<<s,m=i[s];m===-1?((f&l)===0||(f&a)!==0)&&(i[s]=wo(f,e)):m<=e&&(t.expiredLanes|=f),u&=~f}if(e=Gt,l=Ot,l=Ba(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&_t(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||ua(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&_t(a),Ro(l)){case 2:case 8:l=He;break;case 32:l=Ee;break;case 268435456:l=Ue;break;default:l=Ee}return a=zh.bind(null,t),l=Rt(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&_t(a),t.callbackPriority=2,t.callbackNode=null,2}function zh(t,e){if(he!==0&&he!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(zu()&&t.callbackNode!==l)return null;var a=Ot;return a=Ba(t,t===Gt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(fh(t,a,e),Oh(t,Qt()),t.callbackNode!=null&&t.callbackNode===l?zh.bind(null,t):null)}function kh(t,e){if(zu())return null;fh(t,e,!0)}function Eg(){Ng(function(){(jt&6)!==0?Rt(ie,Sg):Rh()})}function hc(){return Ea===0&&(Ea=xs()),Ea}function Mh(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Yi(""+t)}function Ch(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function wg(t,e,l,a,i){if(e==="submit"&&l&&l.stateNode===i){var u=Mh((i[we]||null).action),s=a.submitter;s&&(e=(e=s[we]||null)?Mh(e.formAction):s.getAttribute("formAction"),e!==null&&(u=e,s=null));var f=new Vi("action","action",null,a,i);t.push({event:f,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Ea!==0){var m=s?Ch(i,s):new FormData(i);Nr(l,{pending:!0,data:m,method:i.method,action:u},null,m)}}else typeof u=="function"&&(f.preventDefault(),m=s?Ch(i,s):new FormData(i),Nr(l,{pending:!0,data:m,method:i.method,action:u},u,m))},currentTarget:i}]})}}for(var pc=0;pc<Io.length;pc++){var mc=Io[pc],Tg=mc.toLowerCase(),Dg=mc[0].toUpperCase()+mc.slice(1);We(Tg,"on"+Dg)}We(ff,"onAnimationEnd"),We(df,"onAnimationIteration"),We(hf,"onAnimationStart"),We("dblclick","onDoubleClick"),We("focusin","onFocus"),We("focusout","onBlur"),We(Qm,"onTransitionRun"),We(qm,"onTransitionStart"),We(Xm,"onTransitionCancel"),We(pf,"onTransitionEnd"),Ga("onMouseEnter",["mouseout","mouseover"]),Ga("onMouseLeave",["mouseout","mouseover"]),Ga("onPointerEnter",["pointerout","pointerover"]),Ga("onPointerLeave",["pointerout","pointerover"]),oa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),oa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),oa("onBeforeInput",["compositionend","keypress","textInput","paste"]),oa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),oa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),oa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bi));function Nh(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],i=a.event;a=a.listeners;t:{var u=void 0;if(e)for(var s=a.length-1;0<=s;s--){var f=a[s],m=f.instance,w=f.currentTarget;if(f=f.listener,m!==u&&i.isPropagationStopped())break t;u=f,i.currentTarget=w;try{u(i)}catch(H){yu(H)}i.currentTarget=null,u=m}else for(s=0;s<a.length;s++){if(f=a[s],m=f.instance,w=f.currentTarget,f=f.listener,m!==u&&i.isPropagationStopped())break t;u=f,i.currentTarget=w;try{u(i)}catch(H){yu(H)}i.currentTarget=null,u=m}}}}function Dt(t,e){var l=e[Oo];l===void 0&&(l=e[Oo]=new Set);var a=t+"__bubble";l.has(a)||(_h(e,t,2,!1),l.add(a))}function gc(t,e,l){var a=0;e&&(a|=4),_h(l,t,a,e)}var Cu="_reactListening"+Math.random().toString(36).slice(2);function bc(t){if(!t[Cu]){t[Cu]=!0,Ds.forEach(function(l){l!=="selectionchange"&&(Rg.has(l)||gc(l,!1,t),gc(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Cu]||(e[Cu]=!0,gc("selectionchange",!1,e))}}function _h(t,e,l,a){switch(np(e)){case 2:var i=tb;break;case 8:i=eb;break;default:i=Mc}l=i.bind(null,e,l,t),i=void 0,!$o||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),a?i!==void 0?t.addEventListener(e,l,{capture:!0,passive:i}):t.addEventListener(e,l,!0):i!==void 0?t.addEventListener(e,l,{passive:i}):t.addEventListener(e,l,!1)}function yc(t,e,l,a,i){var u=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var f=a.stateNode.containerInfo;if(f===i)break;if(s===4)for(s=a.return;s!==null;){var m=s.tag;if((m===3||m===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;f!==null;){if(s=Ua(f),s===null)return;if(m=s.tag,m===5||m===6||m===26||m===27){a=u=s;continue t}f=f.parentNode}}a=a.return}Ls(function(){var w=u,H=Ho(l),L=[];t:{var O=mf.get(t);if(O!==void 0){var z=Vi,gt=t;switch(t){case"keypress":if(qi(l)===0)break t;case"keydown":case"keyup":z=Am;break;case"focusin":gt="focus",z=Qo;break;case"focusout":gt="blur",z=Qo;break;case"beforeblur":case"afterblur":z=Qo;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=Qs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=cm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=wm;break;case ff:case df:case hf:z=dm;break;case pf:z=Dm;break;case"scroll":case"scrollend":z=om;break;case"wheel":z=Om;break;case"copy":case"cut":case"paste":z=pm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=Xs;break;case"toggle":case"beforetoggle":z=km}var ht=(e&4)!==0,$t=!ht&&(t==="scroll"||t==="scrollend"),S=ht?O!==null?O+"Capture":null:O;ht=[];for(var x=w,E;x!==null;){var $=x;if(E=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||E===null||S===null||($=Bn(x,S),$!=null&&ht.push(yi(x,$,E))),$t)break;x=x.return}0<ht.length&&(O=new z(O,gt,null,l,H),L.push({event:O,listeners:ht}))}}if((e&7)===0){t:{if(O=t==="mouseover"||t==="pointerover",z=t==="mouseout"||t==="pointerout",O&&l!==Bo&&(gt=l.relatedTarget||l.fromElement)&&(Ua(gt)||gt[Ha]))break t;if((z||O)&&(O=H.window===H?H:(O=H.ownerDocument)?O.defaultView||O.parentWindow:window,z?(gt=l.relatedTarget||l.toElement,z=w,gt=gt?Ua(gt):null,gt!==null&&($t=g(gt),ht=gt.tag,gt!==$t||ht!==5&&ht!==27&&ht!==6)&&(gt=null)):(z=null,gt=w),z!==gt)){if(ht=Qs,$="onMouseLeave",S="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(ht=Xs,$="onPointerLeave",S="onPointerEnter",x="pointer"),$t=z==null?O:jn(z),E=gt==null?O:jn(gt),O=new ht($,x+"leave",z,l,H),O.target=$t,O.relatedTarget=E,$=null,Ua(H)===w&&(ht=new ht(S,x+"enter",gt,l,H),ht.target=E,ht.relatedTarget=$t,$=ht),$t=$,z&&gt)e:{for(ht=z,S=gt,x=0,E=ht;E;E=vn(E))x++;for(E=0,$=S;$;$=vn($))E++;for(;0<x-E;)ht=vn(ht),x--;for(;0<E-x;)S=vn(S),E--;for(;x--;){if(ht===S||S!==null&&ht===S.alternate)break e;ht=vn(ht),S=vn(S)}ht=null}else ht=null;z!==null&&jh(L,O,z,ht,!1),gt!==null&&$t!==null&&jh(L,$t,gt,ht,!0)}}t:{if(O=w?jn(w):window,z=O.nodeName&&O.nodeName.toLowerCase(),z==="select"||z==="input"&&O.type==="file")var rt=Ps;else if(Fs(O))if(tf)rt=Lm;else{rt=Um;var wt=Hm}else z=O.nodeName,!z||z.toLowerCase()!=="input"||O.type!=="checkbox"&&O.type!=="radio"?w&&jo(w.elementType)&&(rt=Ps):rt=$m;if(rt&&(rt=rt(t,w))){Is(L,rt,l,H);break t}wt&&wt(t,O,w),t==="focusout"&&w&&O.type==="number"&&w.memoizedProps.value!=null&&_o(O,"number",O.value)}switch(wt=w?jn(w):window,t){case"focusin":(Fs(wt)||wt.contentEditable==="true")&&(Ka=wt,Jo=w,qn=null);break;case"focusout":qn=Jo=Ka=null;break;case"mousedown":Wo=!0;break;case"contextmenu":case"mouseup":case"dragend":Wo=!1,cf(L,l,H);break;case"selectionchange":if(Ym)break;case"keydown":case"keyup":cf(L,l,H)}var st;if(Xo)t:{switch(t){case"compositionstart":var pt="onCompositionStart";break t;case"compositionend":pt="onCompositionEnd";break t;case"compositionupdate":pt="onCompositionUpdate";break t}pt=void 0}else Za?Js(t,l)&&(pt="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(pt="onCompositionStart");pt&&(Vs&&l.locale!=="ko"&&(Za||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&Za&&(st=Gs()):(_l=H,Lo="value"in _l?_l.value:_l.textContent,Za=!0)),wt=Nu(w,pt),0<wt.length&&(pt=new qs(pt,t,null,l,H),L.push({event:pt,listeners:wt}),st?pt.data=st:(st=Ws(l),st!==null&&(pt.data=st)))),(st=Cm?Nm(t,l):_m(t,l))&&(pt=Nu(w,"onBeforeInput"),0<pt.length&&(wt=new qs("onBeforeInput","beforeinput",null,l,H),L.push({event:wt,listeners:pt}),wt.data=st)),wg(L,t,w,l,H)}Nh(L,e)})}function yi(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Nu(t,e){for(var l=e+"Capture",a=[];t!==null;){var i=t,u=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||u===null||(i=Bn(t,l),i!=null&&a.unshift(yi(t,i,u)),i=Bn(t,e),i!=null&&a.push(yi(t,i,u))),t.tag===3)return a;t=t.return}return[]}function vn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function jh(t,e,l,a,i){for(var u=e._reactName,s=[];l!==null&&l!==a;){var f=l,m=f.alternate,w=f.stateNode;if(f=f.tag,m!==null&&m===a)break;f!==5&&f!==26&&f!==27||w===null||(m=w,i?(w=Bn(l,u),w!=null&&s.unshift(yi(l,w,m))):i||(w=Bn(l,u),w!=null&&s.push(yi(l,w,m)))),l=l.return}s.length!==0&&t.push({event:e,listeners:s})}var Og=/\r\n?/g,zg=/\u0000|\uFFFD/g;function Bh(t){return(typeof t=="string"?t:""+t).replace(Og,`
`).replace(zg,"")}function Hh(t,e){return e=Bh(e),Bh(t)===e}function _u(){}function Ut(t,e,l,a,i,u){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||qa(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&qa(t,""+a);break;case"className":$i(t,"class",a);break;case"tabIndex":$i(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":$i(t,l,a);break;case"style":Us(t,a,u);break;case"data":if(e!=="object"){$i(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Yi(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(l==="formAction"?(e!=="input"&&Ut(t,e,"name",i.name,i,null),Ut(t,e,"formEncType",i.formEncType,i,null),Ut(t,e,"formMethod",i.formMethod,i,null),Ut(t,e,"formTarget",i.formTarget,i,null)):(Ut(t,e,"encType",i.encType,i,null),Ut(t,e,"method",i.method,i,null),Ut(t,e,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Yi(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=_u);break;case"onScroll":a!=null&&Dt("scroll",t);break;case"onScrollEnd":a!=null&&Dt("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(r(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Yi(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":Dt("beforetoggle",t),Dt("toggle",t),Ui(t,"popover",a);break;case"xlinkActuate":hl(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":hl(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":hl(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":hl(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":hl(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":hl(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":hl(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":hl(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":hl(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ui(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=im.get(l)||l,Ui(t,l,a))}}function vc(t,e,l,a,i,u){switch(l){case"style":Us(t,a,u);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(r(60));t.innerHTML=l}}break;case"children":typeof a=="string"?qa(t,a):(typeof a=="number"||typeof a=="bigint")&&qa(t,""+a);break;case"onScroll":a!=null&&Dt("scroll",t);break;case"onScrollEnd":a!=null&&Dt("scrollend",t);break;case"onClick":a!=null&&(t.onclick=_u);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Rs.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(i=l.endsWith("Capture"),e=l.slice(2,i?l.length-7:void 0),u=t[we]||null,u=u!=null?u[l]:null,typeof u=="function"&&t.removeEventListener(e,u,i),typeof a=="function")){typeof u!="function"&&u!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,i);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):Ui(t,l,a)}}}function pe(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Dt("error",t),Dt("load",t);var a=!1,i=!1,u;for(u in l)if(l.hasOwnProperty(u)){var s=l[u];if(s!=null)switch(u){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:Ut(t,e,u,s,l,null)}}i&&Ut(t,e,"srcSet",l.srcSet,l,null),a&&Ut(t,e,"src",l.src,l,null);return;case"input":Dt("invalid",t);var f=u=s=i=null,m=null,w=null;for(a in l)if(l.hasOwnProperty(a)){var H=l[a];if(H!=null)switch(a){case"name":i=H;break;case"type":s=H;break;case"checked":m=H;break;case"defaultChecked":w=H;break;case"value":u=H;break;case"defaultValue":f=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(r(137,e));break;default:Ut(t,e,a,H,l,null)}}_s(t,u,f,m,w,s,i,!1),Li(t);return;case"select":Dt("invalid",t),a=s=u=null;for(i in l)if(l.hasOwnProperty(i)&&(f=l[i],f!=null))switch(i){case"value":u=f;break;case"defaultValue":s=f;break;case"multiple":a=f;default:Ut(t,e,i,f,l,null)}e=u,l=s,t.multiple=!!a,e!=null?Qa(t,!!a,e,!1):l!=null&&Qa(t,!!a,l,!0);return;case"textarea":Dt("invalid",t),u=i=a=null;for(s in l)if(l.hasOwnProperty(s)&&(f=l[s],f!=null))switch(s){case"value":a=f;break;case"defaultValue":i=f;break;case"children":u=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:Ut(t,e,s,f,l,null)}Bs(t,a,i,u),Li(t);return;case"option":for(m in l)if(l.hasOwnProperty(m)&&(a=l[m],a!=null))switch(m){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Ut(t,e,m,a,l,null)}return;case"dialog":Dt("beforetoggle",t),Dt("toggle",t),Dt("cancel",t),Dt("close",t);break;case"iframe":case"object":Dt("load",t);break;case"video":case"audio":for(a=0;a<bi.length;a++)Dt(bi[a],t);break;case"image":Dt("error",t),Dt("load",t);break;case"details":Dt("toggle",t);break;case"embed":case"source":case"link":Dt("error",t),Dt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in l)if(l.hasOwnProperty(w)&&(a=l[w],a!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:Ut(t,e,w,a,l,null)}return;default:if(jo(e)){for(H in l)l.hasOwnProperty(H)&&(a=l[H],a!==void 0&&vc(t,e,H,a,l,void 0));return}}for(f in l)l.hasOwnProperty(f)&&(a=l[f],a!=null&&Ut(t,e,f,a,l,null))}function kg(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,u=null,s=null,f=null,m=null,w=null,H=null;for(z in l){var L=l[z];if(l.hasOwnProperty(z)&&L!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":m=L;default:a.hasOwnProperty(z)||Ut(t,e,z,null,a,L)}}for(var O in a){var z=a[O];if(L=l[O],a.hasOwnProperty(O)&&(z!=null||L!=null))switch(O){case"type":u=z;break;case"name":i=z;break;case"checked":w=z;break;case"defaultChecked":H=z;break;case"value":s=z;break;case"defaultValue":f=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(r(137,e));break;default:z!==L&&Ut(t,e,O,z,a,L)}}No(t,s,f,m,w,H,u,i);return;case"select":z=s=f=O=null;for(u in l)if(m=l[u],l.hasOwnProperty(u)&&m!=null)switch(u){case"value":break;case"multiple":z=m;default:a.hasOwnProperty(u)||Ut(t,e,u,null,a,m)}for(i in a)if(u=a[i],m=l[i],a.hasOwnProperty(i)&&(u!=null||m!=null))switch(i){case"value":O=u;break;case"defaultValue":f=u;break;case"multiple":s=u;default:u!==m&&Ut(t,e,i,u,a,m)}e=f,l=s,a=z,O!=null?Qa(t,!!l,O,!1):!!a!=!!l&&(e!=null?Qa(t,!!l,e,!0):Qa(t,!!l,l?[]:"",!1));return;case"textarea":z=O=null;for(f in l)if(i=l[f],l.hasOwnProperty(f)&&i!=null&&!a.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:Ut(t,e,f,null,a,i)}for(s in a)if(i=a[s],u=l[s],a.hasOwnProperty(s)&&(i!=null||u!=null))switch(s){case"value":O=i;break;case"defaultValue":z=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(r(91));break;default:i!==u&&Ut(t,e,s,i,a,u)}js(t,O,z);return;case"option":for(var gt in l)if(O=l[gt],l.hasOwnProperty(gt)&&O!=null&&!a.hasOwnProperty(gt))switch(gt){case"selected":t.selected=!1;break;default:Ut(t,e,gt,null,a,O)}for(m in a)if(O=a[m],z=l[m],a.hasOwnProperty(m)&&O!==z&&(O!=null||z!=null))switch(m){case"selected":t.selected=O&&typeof O!="function"&&typeof O!="symbol";break;default:Ut(t,e,m,O,a,z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ht in l)O=l[ht],l.hasOwnProperty(ht)&&O!=null&&!a.hasOwnProperty(ht)&&Ut(t,e,ht,null,a,O);for(w in a)if(O=a[w],z=l[w],a.hasOwnProperty(w)&&O!==z&&(O!=null||z!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(137,e));break;default:Ut(t,e,w,O,a,z)}return;default:if(jo(e)){for(var $t in l)O=l[$t],l.hasOwnProperty($t)&&O!==void 0&&!a.hasOwnProperty($t)&&vc(t,e,$t,void 0,a,O);for(H in a)O=a[H],z=l[H],!a.hasOwnProperty(H)||O===z||O===void 0&&z===void 0||vc(t,e,H,O,a,z);return}}for(var S in l)O=l[S],l.hasOwnProperty(S)&&O!=null&&!a.hasOwnProperty(S)&&Ut(t,e,S,null,a,O);for(L in a)O=a[L],z=l[L],!a.hasOwnProperty(L)||O===z||O==null&&z==null||Ut(t,e,L,O,a,z)}var xc=null,Ac=null;function ju(t){return t.nodeType===9?t:t.ownerDocument}function Uh(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $h(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Sc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ec=null;function Mg(){var t=window.event;return t&&t.type==="popstate"?t===Ec?!1:(Ec=t,!0):(Ec=null,!1)}var Lh=typeof setTimeout=="function"?setTimeout:void 0,Cg=typeof clearTimeout=="function"?clearTimeout:void 0,Gh=typeof Promise=="function"?Promise:void 0,Ng=typeof queueMicrotask=="function"?queueMicrotask:typeof Gh<"u"?function(t){return Gh.resolve(null).then(t).catch(_g)}:Lh;function _g(t){setTimeout(function(){throw t})}function Wl(t){return t==="head"}function Yh(t,e){var l=e,a=0,i=0;do{var u=l.nextSibling;if(t.removeChild(l),u&&u.nodeType===8)if(l=u.data,l==="/$"){if(0<a&&8>a){l=a;var s=t.ownerDocument;if(l&1&&vi(s.documentElement),l&2&&vi(s.body),l&4)for(l=s.head,vi(l),s=l.firstChild;s;){var f=s.nextSibling,m=s.nodeName;s[_n]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&s.rel.toLowerCase()==="stylesheet"||l.removeChild(s),s=f}}if(i===0){t.removeChild(u),Ri(e);return}i--}else l==="$"||l==="$?"||l==="$!"?i++:a=l.charCodeAt(0)-48;else a=0;l=u}while(l);Ri(e)}function wc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":wc(l),zo(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function jg(t,e,l,a){for(;t.nodeType===1;){var i=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[_n])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Ie(t.nextSibling),t===null)break}return null}function Bg(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Ie(t.nextSibling),t===null))return null;return t}function Tc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Hg(t,e){var l=t.ownerDocument;if(t.data!=="$?"||l.readyState==="complete")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Ie(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Dc=null;function Qh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"){if(e===0)return t;e--}else l==="/$"&&e++}t=t.previousSibling}return null}function qh(t,e,l){switch(e=ju(l),t){case"html":if(t=e.documentElement,!t)throw Error(r(452));return t;case"head":if(t=e.head,!t)throw Error(r(453));return t;case"body":if(t=e.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function vi(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);zo(t)}var Ze=new Map,Xh=new Set;function Bu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Rl=j.d;j.d={f:Ug,r:$g,D:Lg,C:Gg,L:Yg,m:Qg,X:Xg,S:qg,M:Vg};function Ug(){var t=Rl.f(),e=Ru();return t||e}function $g(t){var e=$a(t);e!==null&&e.tag===5&&e.type==="form"?fd(e):Rl.r(t)}var xn=typeof document>"u"?null:document;function Vh(t,e,l){var a=xn;if(a&&typeof e=="string"&&e){var i=Le(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof l=="string"&&(i+='[crossorigin="'+l+'"]'),Xh.has(i)||(Xh.add(i),t={rel:t,crossOrigin:l,href:e},a.querySelector(i)===null&&(e=a.createElement("link"),pe(e,"link",t),ue(e),a.head.appendChild(e)))}}function Lg(t){Rl.D(t),Vh("dns-prefetch",t,null)}function Gg(t,e){Rl.C(t,e),Vh("preconnect",t,e)}function Yg(t,e,l){Rl.L(t,e,l);var a=xn;if(a&&t&&e){var i='link[rel="preload"][as="'+Le(e)+'"]';e==="image"&&l&&l.imageSrcSet?(i+='[imagesrcset="'+Le(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(i+='[imagesizes="'+Le(l.imageSizes)+'"]')):i+='[href="'+Le(t)+'"]';var u=i;switch(e){case"style":u=An(t);break;case"script":u=Sn(t)}Ze.has(u)||(t=R({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Ze.set(u,t),a.querySelector(i)!==null||e==="style"&&a.querySelector(xi(u))||e==="script"&&a.querySelector(Ai(u))||(e=a.createElement("link"),pe(e,"link",t),ue(e),a.head.appendChild(e)))}}function Qg(t,e){Rl.m(t,e);var l=xn;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+Le(a)+'"][href="'+Le(t)+'"]',u=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Sn(t)}if(!Ze.has(u)&&(t=R({rel:"modulepreload",href:t},e),Ze.set(u,t),l.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Ai(u)))return}a=l.createElement("link"),pe(a,"link",t),ue(a),l.head.appendChild(a)}}}function qg(t,e,l){Rl.S(t,e,l);var a=xn;if(a&&t){var i=La(a).hoistableStyles,u=An(t);e=e||"default";var s=i.get(u);if(!s){var f={loading:0,preload:null};if(s=a.querySelector(xi(u)))f.loading=5;else{t=R({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Ze.get(u))&&Rc(t,l);var m=s=a.createElement("link");ue(m),pe(m,"link",t),m._p=new Promise(function(w,H){m.onload=w,m.onerror=H}),m.addEventListener("load",function(){f.loading|=1}),m.addEventListener("error",function(){f.loading|=2}),f.loading|=4,Hu(s,e,a)}s={type:"stylesheet",instance:s,count:1,state:f},i.set(u,s)}}}function Xg(t,e){Rl.X(t,e);var l=xn;if(l&&t){var a=La(l).hoistableScripts,i=Sn(t),u=a.get(i);u||(u=l.querySelector(Ai(i)),u||(t=R({src:t,async:!0},e),(e=Ze.get(i))&&Oc(t,e),u=l.createElement("script"),ue(u),pe(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(i,u))}}function Vg(t,e){Rl.M(t,e);var l=xn;if(l&&t){var a=La(l).hoistableScripts,i=Sn(t),u=a.get(i);u||(u=l.querySelector(Ai(i)),u||(t=R({src:t,async:!0,type:"module"},e),(e=Ze.get(i))&&Oc(t,e),u=l.createElement("script"),ue(u),pe(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(i,u))}}function Zh(t,e,l,a){var i=(i=J.current)?Bu(i):null;if(!i)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=An(l.href),l=La(i).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=An(l.href);var u=La(i).hoistableStyles,s=u.get(t);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,s),(u=i.querySelector(xi(t)))&&!u._p&&(s.instance=u,s.state.loading=5),Ze.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Ze.set(t,l),u||Zg(i,t,l,s.state))),e&&a===null)throw Error(r(528,""));return s}if(e&&a!==null)throw Error(r(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Sn(l),l=La(i).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function An(t){return'href="'+Le(t)+'"'}function xi(t){return'link[rel="stylesheet"]['+t+"]"}function Kh(t){return R({},t,{"data-precedence":t.precedence,precedence:null})}function Zg(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),pe(e,"link",l),ue(e),t.head.appendChild(e))}function Sn(t){return'[src="'+Le(t)+'"]'}function Ai(t){return"script[async]"+t}function Jh(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+Le(l.href)+'"]');if(a)return e.instance=a,ue(a),a;var i=R({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),ue(a),pe(a,"style",i),Hu(a,l.precedence,t),e.instance=a;case"stylesheet":i=An(l.href);var u=t.querySelector(xi(i));if(u)return e.state.loading|=4,e.instance=u,ue(u),u;a=Kh(l),(i=Ze.get(i))&&Rc(a,i),u=(t.ownerDocument||t).createElement("link"),ue(u);var s=u;return s._p=new Promise(function(f,m){s.onload=f,s.onerror=m}),pe(u,"link",a),e.state.loading|=4,Hu(u,l.precedence,t),e.instance=u;case"script":return u=Sn(l.src),(i=t.querySelector(Ai(u)))?(e.instance=i,ue(i),i):(a=l,(i=Ze.get(u))&&(a=R({},l),Oc(a,i)),t=t.ownerDocument||t,i=t.createElement("script"),ue(i),pe(i,"link",a),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(r(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Hu(a,l.precedence,t));return e.instance}function Hu(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,u=i,s=0;s<a.length;s++){var f=a[s];if(f.dataset.precedence===e)u=f;else if(u!==i)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function Rc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Oc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Uu=null;function Wh(t,e,l){if(Uu===null){var a=new Map,i=Uu=new Map;i.set(l,a)}else i=Uu,a=i.get(l),a||(a=new Map,i.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),i=0;i<l.length;i++){var u=l[i];if(!(u[_n]||u[be]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var s=u.getAttribute(e)||"";s=t+s;var f=a.get(s);f?f.push(u):a.set(s,[u])}}return a}function Fh(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function Kg(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Ih(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Si=null;function Jg(){}function Wg(t,e,l){if(Si===null)throw Error(r(475));var a=Si;if(e.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var i=An(l.href),u=t.querySelector(xi(i));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=$u.bind(a),t.then(a,a)),e.state.loading|=4,e.instance=u,ue(u);return}u=t.ownerDocument||t,l=Kh(l),(i=Ze.get(i))&&Rc(l,i),u=u.createElement("link"),ue(u);var s=u;s._p=new Promise(function(f,m){s.onload=f,s.onerror=m}),pe(u,"link",l),e.instance=u}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(a.count++,e=$u.bind(a),t.addEventListener("load",e),t.addEventListener("error",e))}}function Fg(){if(Si===null)throw Error(r(475));var t=Si;return t.stylesheets&&t.count===0&&zc(t,t.stylesheets),0<t.count?function(e){var l=setTimeout(function(){if(t.stylesheets&&zc(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(l)}}:null}function $u(){if(this.count--,this.count===0){if(this.stylesheets)zc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Lu=null;function zc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Lu=new Map,e.forEach(Ig,t),Lu=null,$u.call(t))}function Ig(t,e){if(!(e.state.loading&4)){var l=Lu.get(t);if(l)var a=l.get(null);else{l=new Map,Lu.set(t,l);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<i.length;u++){var s=i[u];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(l.set(s.dataset.precedence,s),a=s)}a&&l.set(null,a)}i=e.instance,s=i.getAttribute("data-precedence"),u=l.get(s)||a,u===a&&l.set(null,i),l.set(s,i),this.count++,a=$u.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),u?u.parentNode.insertBefore(i,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var Ei={$$typeof:V,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function Pg(t,e,l,a,i,u,s,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=To(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=To(0),this.hiddenUpdates=To(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=u,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function Ph(t,e,l,a,i,u,s,f,m,w,H,L){return t=new Pg(t,e,l,s,f,m,w,L),e=1,u===!0&&(e|=24),u=ke(3,null,null,e),t.current=u,u.stateNode=t,e=sr(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:a,isDehydrated:l,cache:e},pr(u),t}function tp(t){return t?(t=Ia,t):Ia}function ep(t,e,l,a,i,u){i=tp(i),a.context===null?a.context=i:a.pendingContext=i,a=Hl(e),a.payload={element:l},u=u===void 0?null:u,u!==null&&(a.callback=u),l=Ul(t,a,e),l!==null&&(je(l,t,e),Pn(l,t,e))}function lp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function kc(t,e){lp(t,e),(t=t.alternate)&&lp(t,e)}function ap(t){if(t.tag===13){var e=Fa(t,67108864);e!==null&&je(e,t,67108864),kc(t,67108864)}}var Gu=!0;function tb(t,e,l,a){var i=D.T;D.T=null;var u=j.p;try{j.p=2,Mc(t,e,l,a)}finally{j.p=u,D.T=i}}function eb(t,e,l,a){var i=D.T;D.T=null;var u=j.p;try{j.p=8,Mc(t,e,l,a)}finally{j.p=u,D.T=i}}function Mc(t,e,l,a){if(Gu){var i=Cc(a);if(i===null)yc(t,e,a,Yu,l),ip(t,a);else if(ab(i,t,e,l,a))a.stopPropagation();else if(ip(t,a),e&4&&-1<lb.indexOf(t)){for(;i!==null;){var u=$a(i);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var s=dl(u.pendingLanes);if(s!==0){var f=u;for(f.pendingLanes|=2,f.entangledLanes|=2;s;){var m=1<<31-Ae(s);f.entanglements[1]|=m,s&=~m}rl(u),(jt&6)===0&&(Tu=Qt()+500,gi(0))}}break;case 13:f=Fa(u,2),f!==null&&je(f,u,2),Ru(),kc(u,2)}if(u=Cc(a),u===null&&yc(t,e,a,Yu,l),u===i)break;i=u}i!==null&&a.stopPropagation()}else yc(t,e,a,null,l)}}function Cc(t){return t=Ho(t),Nc(t)}var Yu=null;function Nc(t){if(Yu=null,t=Ua(t),t!==null){var e=g(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=v(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Yu=t,null}function np(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ge()){case ie:return 2;case He:return 8;case Ee:case ll:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var _c=!1,Fl=null,Il=null,Pl=null,wi=new Map,Ti=new Map,ta=[],lb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ip(t,e){switch(t){case"focusin":case"focusout":Fl=null;break;case"dragenter":case"dragleave":Il=null;break;case"mouseover":case"mouseout":Pl=null;break;case"pointerover":case"pointerout":wi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ti.delete(e.pointerId)}}function Di(t,e,l,a,i,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:u,targetContainers:[i]},e!==null&&(e=$a(e),e!==null&&ap(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ab(t,e,l,a,i){switch(e){case"focusin":return Fl=Di(Fl,t,e,l,a,i),!0;case"dragenter":return Il=Di(Il,t,e,l,a,i),!0;case"mouseover":return Pl=Di(Pl,t,e,l,a,i),!0;case"pointerover":var u=i.pointerId;return wi.set(u,Di(wi.get(u)||null,t,e,l,a,i)),!0;case"gotpointercapture":return u=i.pointerId,Ti.set(u,Di(Ti.get(u)||null,t,e,l,a,i)),!0}return!1}function up(t){var e=Ua(t.target);if(e!==null){var l=g(e);if(l!==null){if(e=l.tag,e===13){if(e=v(l),e!==null){t.blockedOn=e,W0(t.priority,function(){if(l.tag===13){var a=_e();a=Do(a);var i=Fa(l,a);i!==null&&je(i,l,a),kc(l,a)}});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=Cc(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);Bo=a,l.target.dispatchEvent(a),Bo=null}else return e=$a(l),e!==null&&ap(e),t.blockedOn=l,!1;e.shift()}return!0}function op(t,e,l){Qu(t)&&l.delete(e)}function nb(){_c=!1,Fl!==null&&Qu(Fl)&&(Fl=null),Il!==null&&Qu(Il)&&(Il=null),Pl!==null&&Qu(Pl)&&(Pl=null),wi.forEach(op),Ti.forEach(op)}function qu(t,e){t.blockedOn===e&&(t.blockedOn=null,_c||(_c=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,nb)))}var Xu=null;function rp(t){Xu!==t&&(Xu=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Xu===t&&(Xu=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],i=t[e+2];if(typeof a!="function"){if(Nc(a||l)===null)continue;break}var u=$a(l);u!==null&&(t.splice(e,3),e-=3,Nr(u,{pending:!0,data:i,method:l.method,action:a},a,i))}}))}function Ri(t){function e(m){return qu(m,t)}Fl!==null&&qu(Fl,t),Il!==null&&qu(Il,t),Pl!==null&&qu(Pl,t),wi.forEach(e),Ti.forEach(e);for(var l=0;l<ta.length;l++){var a=ta[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<ta.length&&(l=ta[0],l.blockedOn===null);)up(l),l.blockedOn===null&&ta.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var i=l[a],u=l[a+1],s=i[we]||null;if(typeof u=="function")s||rp(l);else if(s){var f=null;if(u&&u.hasAttribute("formAction")){if(i=u,s=u[we]||null)f=s.formAction;else if(Nc(i)!==null)continue}else f=s.action;typeof f=="function"?l[a+1]=f:(l.splice(a,3),a-=3),rp(l)}}}function jc(t){this._internalRoot=t}Vu.prototype.render=jc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(r(409));var l=e.current,a=_e();ep(l,a,t,e,null,null)},Vu.prototype.unmount=jc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ep(t.current,2,null,t,null,null),Ru(),e[Ha]=null}};function Vu(t){this._internalRoot=t}Vu.prototype.unstable_scheduleHydration=function(t){if(t){var e=ws();t={blockedOn:null,target:t,priority:e};for(var l=0;l<ta.length&&e!==0&&e<ta[l].priority;l++);ta.splice(l,0,t),l===0&&up(t)}};var cp=o.version;if(cp!=="19.1.0")throw Error(r(527,cp,"19.1.0"));j.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=A(e),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var ib={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zu.isDisabled&&Zu.supportsFiber)try{Cl=Zu.inject(ib),xe=Zu}catch{}}return zi.createRoot=function(t,e){if(!h(t))throw Error(r(299));var l=!1,a="",i=Td,u=Dd,s=Rd,f=null;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(f=e.unstable_transitionCallbacks)),e=Ph(t,1,!1,null,null,l,a,i,u,s,f,null),t[Ha]=e.current,bc(t),new jc(e)},zi.hydrateRoot=function(t,e,l){if(!h(t))throw Error(r(299));var a=!1,i="",u=Td,s=Dd,f=Rd,m=null,w=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(i=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(s=l.onCaughtError),l.onRecoverableError!==void 0&&(f=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(m=l.unstable_transitionCallbacks),l.formState!==void 0&&(w=l.formState)),e=Ph(t,1,!0,e,l??null,a,i,u,s,f,m,w),e.context=tp(null),l=e.current,a=_e(),a=Do(a),i=Hl(a),i.callback=null,Ul(l,i,a),l=a,e.current.lanes=l,Nn(e,l),rl(e),t[Ha]=e.current,bc(t),new Vu(e)},zi.version="19.1.0",zi}var vp;function pb(){if(vp)return Uc.exports;vp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(o){console.error(o)}}return n(),Uc.exports=hb(),Uc.exports}var Kp=pb();const Ke=os(Kp);var fe=function(){return fe=Object.assign||function(o){for(var c,r=1,h=arguments.length;r<h;r++){c=arguments[r];for(var g in c)Object.prototype.hasOwnProperty.call(c,g)&&(o[g]=c[g])}return o},fe.apply(this,arguments)};function Ni(n,o,c){if(c||arguments.length===2)for(var r=0,h=o.length,g;r<h;r++)(g||!(r in o))&&(g||(g=Array.prototype.slice.call(o,0,r)),g[r]=o[r]);return n.concat(g||Array.prototype.slice.call(o))}var qt="-ms-",Ci="-moz-",Nt="-webkit-",Jp="comm",ho="rule",cs="decl",mb="@import",Wp="@keyframes",gb="@layer",Fp=Math.abs,ss=String.fromCharCode,Kc=Object.assign;function bb(n,o){return se(n,0)^45?(((o<<2^se(n,0))<<2^se(n,1))<<2^se(n,2))<<2^se(n,3):0}function Ip(n){return n.trim()}function zl(n,o){return(n=o.exec(n))?n[0]:n}function St(n,o,c){return n.replace(o,c)}function Pu(n,o,c){return n.indexOf(o,c)}function se(n,o){return n.charCodeAt(o)|0}function Rn(n,o,c){return n.slice(o,c)}function cl(n){return n.length}function Pp(n){return n.length}function Mi(n,o){return o.push(n),n}function yb(n,o){return n.map(o).join("")}function xp(n,o){return n.filter(function(c){return!zl(c,o)})}var po=1,On=1,t0=0,Je=0,ee=0,Cn="";function mo(n,o,c,r,h,g,v,T){return{value:n,root:o,parent:c,type:r,props:h,children:g,line:po,column:On,length:v,return:"",siblings:T}}function la(n,o){return Kc(mo("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},o)}function En(n){for(;n.root;)n=la(n.root,{children:[n]});Mi(n,n.siblings)}function vb(){return ee}function xb(){return ee=Je>0?se(Cn,--Je):0,On--,ee===10&&(On=1,po--),ee}function Pe(){return ee=Je<t0?se(Cn,Je++):0,On++,ee===10&&(On=1,po++),ee}function Oa(){return se(Cn,Je)}function to(){return Je}function go(n,o){return Rn(Cn,n,o)}function Jc(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ab(n){return po=On=1,t0=cl(Cn=n),Je=0,[]}function Sb(n){return Cn="",n}function Yc(n){return Ip(go(Je-1,Wc(n===91?n+2:n===40?n+1:n)))}function Eb(n){for(;(ee=Oa())&&ee<33;)Pe();return Jc(n)>2||Jc(ee)>3?"":" "}function wb(n,o){for(;--o&&Pe()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return go(n,to()+(o<6&&Oa()==32&&Pe()==32))}function Wc(n){for(;Pe();)switch(ee){case n:return Je;case 34:case 39:n!==34&&n!==39&&Wc(ee);break;case 40:n===41&&Wc(n);break;case 92:Pe();break}return Je}function Tb(n,o){for(;Pe()&&n+ee!==57;)if(n+ee===84&&Oa()===47)break;return"/*"+go(o,Je-1)+"*"+ss(n===47?n:Pe())}function Db(n){for(;!Jc(Oa());)Pe();return go(n,Je)}function Rb(n){return Sb(eo("",null,null,null,[""],n=Ab(n),0,[0],n))}function eo(n,o,c,r,h,g,v,T,A){for(var y=0,R=0,C=v,G=0,et=0,W=0,ut=1,P=1,tt=1,lt=0,V="",at=h,M=g,I=r,F=V;P;)switch(W=lt,lt=Pe()){case 40:if(W!=108&&se(F,C-1)==58){Pu(F+=St(Yc(lt),"&","&\f"),"&\f",Fp(y?T[y-1]:0))!=-1&&(tt=-1);break}case 34:case 39:case 91:F+=Yc(lt);break;case 9:case 10:case 13:case 32:F+=Eb(W);break;case 92:F+=wb(to()-1,7);continue;case 47:switch(Oa()){case 42:case 47:Mi(Ob(Tb(Pe(),to()),o,c,A),A);break;default:F+="/"}break;case 123*ut:T[y++]=cl(F)*tt;case 125*ut:case 59:case 0:switch(lt){case 0:case 125:P=0;case 59+R:tt==-1&&(F=St(F,/\f/g,"")),et>0&&cl(F)-C&&Mi(et>32?Sp(F+";",r,c,C-1,A):Sp(St(F," ","")+";",r,c,C-2,A),A);break;case 59:F+=";";default:if(Mi(I=Ap(F,o,c,y,R,h,T,V,at=[],M=[],C,g),g),lt===123)if(R===0)eo(F,o,I,I,at,g,C,T,M);else switch(G===99&&se(F,3)===110?100:G){case 100:case 108:case 109:case 115:eo(n,I,I,r&&Mi(Ap(n,I,I,0,0,h,T,V,h,at=[],C,M),M),h,M,C,T,r?at:M);break;default:eo(F,I,I,I,[""],M,0,T,M)}}y=R=et=0,ut=tt=1,V=F="",C=v;break;case 58:C=1+cl(F),et=W;default:if(ut<1){if(lt==123)--ut;else if(lt==125&&ut++==0&&xb()==125)continue}switch(F+=ss(lt),lt*ut){case 38:tt=R>0?1:(F+="\f",-1);break;case 44:T[y++]=(cl(F)-1)*tt,tt=1;break;case 64:Oa()===45&&(F+=Yc(Pe())),G=Oa(),R=C=cl(V=F+=Db(to())),lt++;break;case 45:W===45&&cl(F)==2&&(ut=0)}}return g}function Ap(n,o,c,r,h,g,v,T,A,y,R,C){for(var G=h-1,et=h===0?g:[""],W=Pp(et),ut=0,P=0,tt=0;ut<r;++ut)for(var lt=0,V=Rn(n,G+1,G=Fp(P=v[ut])),at=n;lt<W;++lt)(at=Ip(P>0?et[lt]+" "+V:St(V,/&\f/g,et[lt])))&&(A[tt++]=at);return mo(n,o,c,h===0?ho:T,A,y,R,C)}function Ob(n,o,c,r){return mo(n,o,c,Jp,ss(vb()),Rn(n,2,-2),0,r)}function Sp(n,o,c,r,h){return mo(n,o,c,cs,Rn(n,0,r),Rn(n,r+1,-1),r,h)}function e0(n,o,c){switch(bb(n,o)){case 5103:return Nt+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Nt+n+n;case 4789:return Ci+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Nt+n+Ci+n+qt+n+n;case 5936:switch(se(n,o+11)){case 114:return Nt+n+qt+St(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Nt+n+qt+St(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Nt+n+qt+St(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Nt+n+qt+n+n;case 6165:return Nt+n+qt+"flex-"+n+n;case 5187:return Nt+n+St(n,/(\w+).+(:[^]+)/,Nt+"box-$1$2"+qt+"flex-$1$2")+n;case 5443:return Nt+n+qt+"flex-item-"+St(n,/flex-|-self/g,"")+(zl(n,/flex-|baseline/)?"":qt+"grid-row-"+St(n,/flex-|-self/g,""))+n;case 4675:return Nt+n+qt+"flex-line-pack"+St(n,/align-content|flex-|-self/g,"")+n;case 5548:return Nt+n+qt+St(n,"shrink","negative")+n;case 5292:return Nt+n+qt+St(n,"basis","preferred-size")+n;case 6060:return Nt+"box-"+St(n,"-grow","")+Nt+n+qt+St(n,"grow","positive")+n;case 4554:return Nt+St(n,/([^-])(transform)/g,"$1"+Nt+"$2")+n;case 6187:return St(St(St(n,/(zoom-|grab)/,Nt+"$1"),/(image-set)/,Nt+"$1"),n,"")+n;case 5495:case 3959:return St(n,/(image-set\([^]*)/,Nt+"$1$`$1");case 4968:return St(St(n,/(.+:)(flex-)?(.*)/,Nt+"box-pack:$3"+qt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Nt+n+n;case 4200:if(!zl(n,/flex-|baseline/))return qt+"grid-column-align"+Rn(n,o)+n;break;case 2592:case 3360:return qt+St(n,"template-","")+n;case 4384:case 3616:return c&&c.some(function(r,h){return o=h,zl(r.props,/grid-\w+-end/)})?~Pu(n+(c=c[o].value),"span",0)?n:qt+St(n,"-start","")+n+qt+"grid-row-span:"+(~Pu(c,"span",0)?zl(c,/\d+/):+zl(c,/\d+/)-+zl(n,/\d+/))+";":qt+St(n,"-start","")+n;case 4896:case 4128:return c&&c.some(function(r){return zl(r.props,/grid-\w+-start/)})?n:qt+St(St(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return St(n,/(.+)-inline(.+)/,Nt+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(cl(n)-1-o>6)switch(se(n,o+1)){case 109:if(se(n,o+4)!==45)break;case 102:return St(n,/(.+:)(.+)-([^]+)/,"$1"+Nt+"$2-$3$1"+Ci+(se(n,o+3)==108?"$3":"$2-$3"))+n;case 115:return~Pu(n,"stretch",0)?e0(St(n,"stretch","fill-available"),o,c)+n:n}break;case 5152:case 5920:return St(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,h,g,v,T,A,y){return qt+h+":"+g+y+(v?qt+h+"-span:"+(T?A:+A-+g)+y:"")+n});case 4949:if(se(n,o+6)===121)return St(n,":",":"+Nt)+n;break;case 6444:switch(se(n,se(n,14)===45?18:11)){case 120:return St(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Nt+(se(n,14)===45?"inline-":"")+"box$3$1"+Nt+"$2$3$1"+qt+"$2box$3")+n;case 100:return St(n,":",":"+qt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return St(n,"scroll-","scroll-snap-")+n}return n}function no(n,o){for(var c="",r=0;r<n.length;r++)c+=o(n[r],r,n,o)||"";return c}function zb(n,o,c,r){switch(n.type){case gb:if(n.children.length)break;case mb:case cs:return n.return=n.return||n.value;case Jp:return"";case Wp:return n.return=n.value+"{"+no(n.children,r)+"}";case ho:if(!cl(n.value=n.props.join(",")))return""}return cl(c=no(n.children,r))?n.return=n.value+"{"+c+"}":""}function kb(n){var o=Pp(n);return function(c,r,h,g){for(var v="",T=0;T<o;T++)v+=n[T](c,r,h,g)||"";return v}}function Mb(n){return function(o){o.root||(o=o.return)&&n(o)}}function Cb(n,o,c,r){if(n.length>-1&&!n.return)switch(n.type){case cs:n.return=e0(n.value,n.length,c);return;case Wp:return no([la(n,{value:St(n.value,"@","@"+Nt)})],r);case ho:if(n.length)return yb(c=n.props,function(h){switch(zl(h,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":En(la(n,{props:[St(h,/:(read-\w+)/,":"+Ci+"$1")]})),En(la(n,{props:[h]})),Kc(n,{props:xp(c,r)});break;case"::placeholder":En(la(n,{props:[St(h,/:(plac\w+)/,":"+Nt+"input-$1")]})),En(la(n,{props:[St(h,/:(plac\w+)/,":"+Ci+"$1")]})),En(la(n,{props:[St(h,/:(plac\w+)/,qt+"input-$1")]})),En(la(n,{props:[h]})),Kc(n,{props:xp(c,r)});break}return""})}}var Nb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Be={},zn=typeof process<"u"&&Be!==void 0&&(Be.REACT_APP_SC_ATTR||Be.SC_ATTR)||"data-styled",l0="active",a0="data-styled-version",bo="6.1.17",fs=`/*!sc*/
`,io=typeof window<"u"&&"HTMLElement"in window,_b=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Be!==void 0&&Be.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Be.REACT_APP_SC_DISABLE_SPEEDY!==""?Be.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Be.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Be!==void 0&&Be.SC_DISABLE_SPEEDY!==void 0&&Be.SC_DISABLE_SPEEDY!==""&&Be.SC_DISABLE_SPEEDY!=="false"&&Be.SC_DISABLE_SPEEDY),jb={},yo=Object.freeze([]),kn=Object.freeze({});function n0(n,o,c){return c===void 0&&(c=kn),n.theme!==c.theme&&n.theme||o||c.theme}var i0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Bb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Hb=/(^-|-$)/g;function Ep(n){return n.replace(Bb,"-").replace(Hb,"")}var Ub=/(a)(d)/gi,Ku=52,wp=function(n){return String.fromCharCode(n+(n>25?39:97))};function Fc(n){var o,c="";for(o=Math.abs(n);o>Ku;o=o/Ku|0)c=wp(o%Ku)+c;return(wp(o%Ku)+c).replace(Ub,"$1-$2")}var Qc,u0=5381,Dn=function(n,o){for(var c=o.length;c;)n=33*n^o.charCodeAt(--c);return n},o0=function(n){return Dn(u0,n)};function r0(n){return Fc(o0(n)>>>0)}function $b(n){return n.displayName||n.name||"Component"}function qc(n){return typeof n=="string"&&!0}var c0=typeof Symbol=="function"&&Symbol.for,s0=c0?Symbol.for("react.memo"):60115,Lb=c0?Symbol.for("react.forward_ref"):60112,Gb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Yb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},f0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Qb=((Qc={})[Lb]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Qc[s0]=f0,Qc);function Tp(n){return("type"in(o=n)&&o.type.$$typeof)===s0?f0:"$$typeof"in n?Qb[n.$$typeof]:Gb;var o}var qb=Object.defineProperty,Xb=Object.getOwnPropertyNames,Dp=Object.getOwnPropertySymbols,Vb=Object.getOwnPropertyDescriptor,Zb=Object.getPrototypeOf,Rp=Object.prototype;function d0(n,o,c){if(typeof o!="string"){if(Rp){var r=Zb(o);r&&r!==Rp&&d0(n,r,c)}var h=Xb(o);Dp&&(h=h.concat(Dp(o)));for(var g=Tp(n),v=Tp(o),T=0;T<h.length;++T){var A=h[T];if(!(A in Yb||c&&c[A]||v&&A in v||g&&A in g)){var y=Vb(o,A);try{qb(n,A,y)}catch{}}}}return n}function za(n){return typeof n=="function"}function ds(n){return typeof n=="object"&&"styledComponentId"in n}function Da(n,o){return n&&o?"".concat(n," ").concat(o):n||o||""}function Ic(n,o){if(n.length===0)return"";for(var c=n[0],r=1;r<n.length;r++)c+=n[r];return c}function _i(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Pc(n,o,c){if(c===void 0&&(c=!1),!c&&!_i(n)&&!Array.isArray(n))return o;if(Array.isArray(o))for(var r=0;r<o.length;r++)n[r]=Pc(n[r],o[r]);else if(_i(o))for(var r in o)n[r]=Pc(n[r],o[r]);return n}function hs(n,o){Object.defineProperty(n,"toString",{value:o})}function ka(n){for(var o=[],c=1;c<arguments.length;c++)o[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var Kb=function(){function n(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return n.prototype.indexOfGroup=function(o){for(var c=0,r=0;r<o;r++)c+=this.groupSizes[r];return c},n.prototype.insertRules=function(o,c){if(o>=this.groupSizes.length){for(var r=this.groupSizes,h=r.length,g=h;o>=g;)if((g<<=1)<0)throw ka(16,"".concat(o));this.groupSizes=new Uint32Array(g),this.groupSizes.set(r),this.length=g;for(var v=h;v<g;v++)this.groupSizes[v]=0}for(var T=this.indexOfGroup(o+1),A=(v=0,c.length);v<A;v++)this.tag.insertRule(T,c[v])&&(this.groupSizes[o]++,T++)},n.prototype.clearGroup=function(o){if(o<this.length){var c=this.groupSizes[o],r=this.indexOfGroup(o),h=r+c;this.groupSizes[o]=0;for(var g=r;g<h;g++)this.tag.deleteRule(r)}},n.prototype.getGroup=function(o){var c="";if(o>=this.length||this.groupSizes[o]===0)return c;for(var r=this.groupSizes[o],h=this.indexOfGroup(o),g=h+r,v=h;v<g;v++)c+="".concat(this.tag.getRule(v)).concat(fs);return c},n}(),lo=new Map,uo=new Map,ao=1,Ju=function(n){if(lo.has(n))return lo.get(n);for(;uo.has(ao);)ao++;var o=ao++;return lo.set(n,o),uo.set(o,n),o},Jb=function(n,o){ao=o+1,lo.set(n,o),uo.set(o,n)},Wb="style[".concat(zn,"][").concat(a0,'="').concat(bo,'"]'),Fb=new RegExp("^".concat(zn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ib=function(n,o,c){for(var r,h=c.split(","),g=0,v=h.length;g<v;g++)(r=h[g])&&n.registerName(o,r)},Pb=function(n,o){for(var c,r=((c=o.textContent)!==null&&c!==void 0?c:"").split(fs),h=[],g=0,v=r.length;g<v;g++){var T=r[g].trim();if(T){var A=T.match(Fb);if(A){var y=0|parseInt(A[1],10),R=A[2];y!==0&&(Jb(R,y),Ib(n,R,A[3]),n.getTag().insertRules(y,h)),h.length=0}else h.push(T)}}},Op=function(n){for(var o=document.querySelectorAll(Wb),c=0,r=o.length;c<r;c++){var h=o[c];h&&h.getAttribute(zn)!==l0&&(Pb(n,h),h.parentNode&&h.parentNode.removeChild(h))}};function ty(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var h0=function(n){var o=document.head,c=n||o,r=document.createElement("style"),h=function(T){var A=Array.from(T.querySelectorAll("style[".concat(zn,"]")));return A[A.length-1]}(c),g=h!==void 0?h.nextSibling:null;r.setAttribute(zn,l0),r.setAttribute(a0,bo);var v=ty();return v&&r.setAttribute("nonce",v),c.insertBefore(r,g),r},ey=function(){function n(o){this.element=h0(o),this.element.appendChild(document.createTextNode("")),this.sheet=function(c){if(c.sheet)return c.sheet;for(var r=document.styleSheets,h=0,g=r.length;h<g;h++){var v=r[h];if(v.ownerNode===c)return v}throw ka(17)}(this.element),this.length=0}return n.prototype.insertRule=function(o,c){try{return this.sheet.insertRule(c,o),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},n.prototype.getRule=function(o){var c=this.sheet.cssRules[o];return c&&c.cssText?c.cssText:""},n}(),ly=function(){function n(o){this.element=h0(o),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(o,c){if(o<=this.length&&o>=0){var r=document.createTextNode(c);return this.element.insertBefore(r,this.nodes[o]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},n.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},n}(),ay=function(){function n(o){this.rules=[],this.length=0}return n.prototype.insertRule=function(o,c){return o<=this.length&&(this.rules.splice(o,0,c),this.length++,!0)},n.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},n.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},n}(),zp=io,ny={isServer:!io,useCSSOMInjection:!_b},oo=function(){function n(o,c,r){o===void 0&&(o=kn),c===void 0&&(c={});var h=this;this.options=fe(fe({},ny),o),this.gs=c,this.names=new Map(r),this.server=!!o.isServer,!this.server&&io&&zp&&(zp=!1,Op(this)),hs(this,function(){return function(g){for(var v=g.getTag(),T=v.length,A="",y=function(C){var G=function(tt){return uo.get(tt)}(C);if(G===void 0)return"continue";var et=g.names.get(G),W=v.getGroup(C);if(et===void 0||!et.size||W.length===0)return"continue";var ut="".concat(zn,".g").concat(C,'[id="').concat(G,'"]'),P="";et!==void 0&&et.forEach(function(tt){tt.length>0&&(P+="".concat(tt,","))}),A+="".concat(W).concat(ut,'{content:"').concat(P,'"}').concat(fs)},R=0;R<T;R++)y(R);return A}(h)})}return n.registerId=function(o){return Ju(o)},n.prototype.rehydrate=function(){!this.server&&io&&Op(this)},n.prototype.reconstructWithOptions=function(o,c){return c===void 0&&(c=!0),new n(fe(fe({},this.options),o),this.gs,c&&this.names||void 0)},n.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(o=function(c){var r=c.useCSSOMInjection,h=c.target;return c.isServer?new ay(h):r?new ey(h):new ly(h)}(this.options),new Kb(o)));var o},n.prototype.hasNameForId=function(o,c){return this.names.has(o)&&this.names.get(o).has(c)},n.prototype.registerName=function(o,c){if(Ju(o),this.names.has(o))this.names.get(o).add(c);else{var r=new Set;r.add(c),this.names.set(o,r)}},n.prototype.insertRules=function(o,c,r){this.registerName(o,c),this.getTag().insertRules(Ju(o),r)},n.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},n.prototype.clearRules=function(o){this.getTag().clearGroup(Ju(o)),this.clearNames(o)},n.prototype.clearTag=function(){this.tag=void 0},n}(),iy=/&/g,uy=/^\s*\/\/.*$/gm;function p0(n,o){return n.map(function(c){return c.type==="rule"&&(c.value="".concat(o," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(o," ")),c.props=c.props.map(function(r){return"".concat(o," ").concat(r)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=p0(c.children,o)),c})}function oy(n){var o,c,r,h=kn,g=h.options,v=g===void 0?kn:g,T=h.plugins,A=T===void 0?yo:T,y=function(G,et,W){return W.startsWith(c)&&W.endsWith(c)&&W.replaceAll(c,"").length>0?".".concat(o):G},R=A.slice();R.push(function(G){G.type===ho&&G.value.includes("&")&&(G.props[0]=G.props[0].replace(iy,c).replace(r,y))}),v.prefix&&R.push(Cb),R.push(zb);var C=function(G,et,W,ut){et===void 0&&(et=""),W===void 0&&(W=""),ut===void 0&&(ut="&"),o=ut,c=et,r=new RegExp("\\".concat(c,"\\b"),"g");var P=G.replace(uy,""),tt=Rb(W||et?"".concat(W," ").concat(et," { ").concat(P," }"):P);v.namespace&&(tt=p0(tt,v.namespace));var lt=[];return no(tt,kb(R.concat(Mb(function(V){return lt.push(V)})))),lt};return C.hash=A.length?A.reduce(function(G,et){return et.name||ka(15),Dn(G,et.name)},u0).toString():"",C}var ry=new oo,ts=oy(),m0=N.createContext({shouldForwardProp:void 0,styleSheet:ry,stylis:ts});m0.Consumer;N.createContext(void 0);function es(){return k.useContext(m0)}var cy=function(){function n(o,c){var r=this;this.inject=function(h,g){g===void 0&&(g=ts);var v=r.name+g.hash;h.hasNameForId(r.id,v)||h.insertRules(r.id,v,g(r.rules,v,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=c,hs(this,function(){throw ka(12,String(r.name))})}return n.prototype.getName=function(o){return o===void 0&&(o=ts),this.name+o.hash},n}(),sy=function(n){return n>="A"&&n<="Z"};function kp(n){for(var o="",c=0;c<n.length;c++){var r=n[c];if(c===1&&r==="-"&&n[0]==="-")return n;sy(r)?o+="-"+r.toLowerCase():o+=r}return o.startsWith("ms-")?"-"+o:o}var g0=function(n){return n==null||n===!1||n===""},b0=function(n){var o,c,r=[];for(var h in n){var g=n[h];n.hasOwnProperty(h)&&!g0(g)&&(Array.isArray(g)&&g.isCss||za(g)?r.push("".concat(kp(h),":"),g,";"):_i(g)?r.push.apply(r,Ni(Ni(["".concat(h," {")],b0(g),!1),["}"],!1)):r.push("".concat(kp(h),": ").concat((o=h,(c=g)==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||o in Nb||o.startsWith("--")?String(c).trim():"".concat(c,"px")),";")))}return r};function aa(n,o,c,r){if(g0(n))return[];if(ds(n))return[".".concat(n.styledComponentId)];if(za(n)){if(!za(g=n)||g.prototype&&g.prototype.isReactComponent||!o)return[n];var h=n(o);return aa(h,o,c,r)}var g;return n instanceof cy?c?(n.inject(c,r),[n.getName(r)]):[n]:_i(n)?b0(n):Array.isArray(n)?Array.prototype.concat.apply(yo,n.map(function(v){return aa(v,o,c,r)})):[n.toString()]}function y0(n){for(var o=0;o<n.length;o+=1){var c=n[o];if(za(c)&&!ds(c))return!1}return!0}var fy=o0(bo),dy=function(){function n(o,c,r){this.rules=o,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&y0(o),this.componentId=c,this.baseHash=Dn(fy,c),this.baseStyle=r,oo.registerId(c)}return n.prototype.generateAndInjectStyles=function(o,c,r){var h=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,c,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))h=Da(h,this.staticRulesId);else{var g=Ic(aa(this.rules,o,c,r)),v=Fc(Dn(this.baseHash,g)>>>0);if(!c.hasNameForId(this.componentId,v)){var T=r(g,".".concat(v),void 0,this.componentId);c.insertRules(this.componentId,v,T)}h=Da(h,v),this.staticRulesId=v}else{for(var A=Dn(this.baseHash,r.hash),y="",R=0;R<this.rules.length;R++){var C=this.rules[R];if(typeof C=="string")y+=C;else if(C){var G=Ic(aa(C,o,c,r));A=Dn(A,G+R),y+=G}}if(y){var et=Fc(A>>>0);c.hasNameForId(this.componentId,et)||c.insertRules(this.componentId,et,r(y,".".concat(et),void 0,this.componentId)),h=Da(h,et)}}return h},n}(),ji=N.createContext(void 0);ji.Consumer;function hy(n){var o=N.useContext(ji),c=k.useMemo(function(){return function(r,h){if(!r)throw ka(14);if(za(r)){var g=r(h);return g}if(Array.isArray(r)||typeof r!="object")throw ka(8);return h?fe(fe({},h),r):r}(n.theme,o)},[n.theme,o]);return n.children?N.createElement(ji.Provider,{value:c},n.children):null}var Xc={};function py(n,o,c){var r=ds(n),h=n,g=!qc(n),v=o.attrs,T=v===void 0?yo:v,A=o.componentId,y=A===void 0?function(at,M){var I=typeof at!="string"?"sc":Ep(at);Xc[I]=(Xc[I]||0)+1;var F="".concat(I,"-").concat(r0(bo+I+Xc[I]));return M?"".concat(M,"-").concat(F):F}(o.displayName,o.parentComponentId):A,R=o.displayName,C=R===void 0?function(at){return qc(at)?"styled.".concat(at):"Styled(".concat($b(at),")")}(n):R,G=o.displayName&&o.componentId?"".concat(Ep(o.displayName),"-").concat(o.componentId):o.componentId||y,et=r&&h.attrs?h.attrs.concat(T).filter(Boolean):T,W=o.shouldForwardProp;if(r&&h.shouldForwardProp){var ut=h.shouldForwardProp;if(o.shouldForwardProp){var P=o.shouldForwardProp;W=function(at,M){return ut(at,M)&&P(at,M)}}else W=ut}var tt=new dy(c,G,r?h.componentStyle:void 0);function lt(at,M){return function(I,F,xt){var At=I.attrs,Xt=I.componentStyle,Ct=I.defaultProps,bt=I.foldedComponentIds,d=I.styledComponentId,U=I.target,Z=N.useContext(ji),D=es(),j=I.shouldForwardProp||D.shouldForwardProp,q=n0(F,Z,Ct)||kn,it=function(nt,J,ct){for(var ft,Y=fe(fe({},J),{className:void 0,theme:ct}),mt=0;mt<nt.length;mt+=1){var dt=za(ft=nt[mt])?ft(Y):ft;for(var yt in dt)Y[yt]=yt==="className"?Da(Y[yt],dt[yt]):yt==="style"?fe(fe({},Y[yt]),dt[yt]):dt[yt]}return J.className&&(Y.className=Da(Y.className,J.className)),Y}(At,F,q),p=it.as||U,B={};for(var K in it)it[K]===void 0||K[0]==="$"||K==="as"||K==="theme"&&it.theme===q||(K==="forwardedAs"?B.as=it.forwardedAs:j&&!j(K,p)||(B[K]=it[K]));var _=function(nt,J){var ct=es(),ft=nt.generateAndInjectStyles(J,ct.styleSheet,ct.stylis);return ft}(Xt,it),Q=Da(bt,d);return _&&(Q+=" "+_),it.className&&(Q+=" "+it.className),B[qc(p)&&!i0.has(p)?"class":"className"]=Q,xt&&(B.ref=xt),k.createElement(p,B)}(V,at,M)}lt.displayName=C;var V=N.forwardRef(lt);return V.attrs=et,V.componentStyle=tt,V.displayName=C,V.shouldForwardProp=W,V.foldedComponentIds=r?Da(h.foldedComponentIds,h.styledComponentId):"",V.styledComponentId=G,V.target=r?h.target:n,Object.defineProperty(V,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(at){this._foldedDefaultProps=r?function(M){for(var I=[],F=1;F<arguments.length;F++)I[F-1]=arguments[F];for(var xt=0,At=I;xt<At.length;xt++)Pc(M,At[xt],!0);return M}({},h.defaultProps,at):at}}),hs(V,function(){return".".concat(V.styledComponentId)}),g&&d0(V,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),V}function Mp(n,o){for(var c=[n[0]],r=0,h=o.length;r<h;r+=1)c.push(o[r],n[r+1]);return c}var Cp=function(n){return Object.assign(n,{isCss:!0})};function ot(n){for(var o=[],c=1;c<arguments.length;c++)o[c-1]=arguments[c];if(za(n)||_i(n))return Cp(aa(Mp(yo,Ni([n],o,!0))));var r=n;return o.length===0&&r.length===1&&typeof r[0]=="string"?aa(r):Cp(aa(Mp(r,o)))}function ls(n,o,c){if(c===void 0&&(c=kn),!o)throw ka(1,o);var r=function(h){for(var g=[],v=1;v<arguments.length;v++)g[v-1]=arguments[v];return n(o,c,ot.apply(void 0,Ni([h],g,!1)))};return r.attrs=function(h){return ls(n,o,fe(fe({},c),{attrs:Array.prototype.concat(c.attrs,h).filter(Boolean)}))},r.withConfig=function(h){return ls(n,o,fe(fe({},c),h))},r}var v0=function(n){return ls(py,n)},X=v0;i0.forEach(function(n){X[n]=v0(n)});var my=function(){function n(o,c){this.rules=o,this.componentId=c,this.isStatic=y0(o),oo.registerId(this.componentId+1)}return n.prototype.createStyles=function(o,c,r,h){var g=h(Ic(aa(this.rules,c,r,h)),""),v=this.componentId+o;r.insertRules(v,v,g)},n.prototype.removeStyles=function(o,c){c.clearRules(this.componentId+o)},n.prototype.renderStyles=function(o,c,r,h){o>2&&oo.registerId(this.componentId+o),this.removeStyles(o,r),this.createStyles(o,c,r,h)},n}();function gy(n){for(var o=[],c=1;c<arguments.length;c++)o[c-1]=arguments[c];var r=ot.apply(void 0,Ni([n],o,!1)),h="sc-global-".concat(r0(JSON.stringify(r))),g=new my(r,h),v=function(A){var y=es(),R=N.useContext(ji),C=N.useRef(y.styleSheet.allocateGSInstance(h)).current;return y.styleSheet.server&&T(C,A,y.styleSheet,R,y.stylis),N.useLayoutEffect(function(){if(!y.styleSheet.server)return T(C,A,y.styleSheet,R,y.stylis),function(){return g.removeStyles(C,y.styleSheet)}},[C,A,y.styleSheet,R,y.stylis]),null};function T(A,y,R,C,G){if(g.isStatic)g.renderStyles(A,jb,R,G);else{var et=fe(fe({},y),{theme:n0(y,C,v.defaultProps)});g.renderStyles(A,et,R,G)}}return N.memo(v)}var by=`
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

`;const ps="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",ms="inset 2px 2px 3px rgba(0,0,0,0.2)",tl=()=>ot`
  -webkit-text-fill-color: ${({theme:n})=>n.materialTextDisabled};
  color: ${({theme:n})=>n.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:n})=>n.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,el=({background:n="material",color:o="materialText"}={})=>ot`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:c})=>c[n]};
  color: ${({theme:c})=>c[o]};
`,Hi=({mainColor:n="black",secondaryColor:o="transparent",pixelSize:c=2})=>ot`
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
  background-color: ${o};
  background-size: ${`${c*2}px ${c*2}px`};
  background-position: 0 0, ${`${c}px ${c}px`};
`,Ma=()=>ot`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:n})=>n.materialText};
  background: ${({$disabled:n,theme:o})=>n?o.flatLight:o.canvas};
  border: 2px solid ${({theme:n})=>n.canvas};
  outline: 2px solid ${({theme:n})=>n.flatDark};
  outline-offset: -4px;
`,wn={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},yy=({theme:n,topLeftInner:o,bottomRightInner:c,hasShadow:r=!1,hasInsetShadow:h=!1})=>[r?ps:!1,h?ms:!1,o!==null?`inset 1px 1px 0px 1px ${n[o]}`:!1,c!==null?`inset -1px -1px 0 1px ${n[c]}`:!1].filter(Boolean).join(", "),Wt=({invert:n=!1,style:o="button"}={})=>{const c={topLeftOuter:n?"bottomRightOuter":"topLeftOuter",topLeftInner:n?"bottomRightInner":"topLeftInner",bottomRightInner:n?"topLeftInner":"bottomRightInner",bottomRightOuter:n?"topLeftOuter":"bottomRightOuter"};return ot`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[wn[o][c.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[wn[o][c.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[wn[o][c.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[wn[o][c.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:h})=>yy({theme:r,topLeftInner:wn[o][c.topLeftInner],bottomRightInner:wn[o][c.bottomRightInner],hasShadow:h})};
  `},Mn=()=>ot`
  outline: 2px dotted ${({theme:n})=>n.materialText};
`,vy=n=>Buffer.from(n).toString("base64"),xy=typeof btoa<"u"?btoa:vy,Wu=(n,o=0)=>{const c=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${o} 13 13)">
      <polygon fill="${n}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${xy(c)})`},gs=(n="default")=>ot`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:o})=>Hi({mainColor:n==="flat"?o.flatLight:o.material,secondaryColor:n==="flat"?o.canvas:o.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${el()}
    ${n==="flat"?Ma():Wt({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:o})=>o.material};
  }
  ::-webkit-scrollbar-button {
    ${el()}
    ${n==="flat"?Ma():Wt({style:"window"})}
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
    background-image: ${({theme:o})=>Wu(o.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:o})=>Wu(o.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:o})=>Wu(o.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:o})=>Wu(o.materialText,0)};
  }
`,Ay=X.a`
  color: ${({theme:n})=>n.anchor};
  font-size: inherit;
  text-decoration: ${({underline:n})=>n?"underline":"none"};
  &:visited {
    color: ${({theme:n})=>n.anchorVisited};
  }
`,Sy=k.forwardRef(({children:n,underline:o=!0,...c},r)=>N.createElement(Ay,{ref:r,underline:o,...c},n));Sy.displayName="Anchor";const Ey=X.header`
  ${Wt()};
  ${el()};

  position: ${n=>{var o;return(o=n.position)!==null&&o!==void 0?o:n.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,x0=k.forwardRef(({children:n,fixed:o=!0,position:c="fixed",...r},h)=>N.createElement(Ey,{fixed:o,position:o!==!1?c:void 0,ref:h,...r},n));x0.displayName="AppBar";const Ca=()=>{};function Ra(n,o,c){return c!==null&&n>c?c:o!==null&&n<o?o:n}function wy(n){if(Math.abs(n)<1){const c=n.toExponential().split("e-"),r=c[0].split(".")[1];return(r?r.length:0)+parseInt(c[1],10)}const o=n.toString().split(".")[1];return o?o.length:0}function Np(n,o,c){const r=Math.round((n-c)/o)*o+c;return Number(r.toFixed(wy(o)))}function na(n){return typeof n=="number"?`${n}px`:n}const Ty=X.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:n})=>`
    height: ${n};
    width: ${n};
    `}
  border-radius: ${({square:n})=>n?0:"50%"};
  overflow: hidden;
  ${({noBorder:n,theme:o})=>!n&&`
    border-top: 2px solid ${o.borderDark};
    border-left: 2px solid ${o.borderDark};
    border-bottom: 2px solid ${o.borderLightest};
    border-right: 2px solid ${o.borderLightest};
    background: ${o.material};
  `}
  ${({src:n})=>!n&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,Dy=X.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,Ry=k.forwardRef(({alt:n="",children:o,noBorder:c=!1,size:r=35,square:h=!1,src:g,...v},T)=>N.createElement(Ty,{noBorder:c,ref:T,size:na(r),square:h,src:g,...v},g?N.createElement(Dy,{src:g,alt:n}):o));Ry.displayName="Avatar";const me={sm:"28px",md:"36px",lg:"44px"},Oy=ot`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:n="md"})=>me[n]};
  width: ${({fullWidth:n,size:o="md",square:c})=>n?"100%":c?me[o]:"auto"};
  padding: ${({square:n})=>n?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:n})=>!n&&"2px"};
  }
  padding-top: ${({active:n,disabled:o})=>n&&!o&&"2px"};
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
`,vo=X.button`
  ${({active:n,disabled:o,primary:c,theme:r,variant:h})=>h==="flat"?ot`
          ${Ma()}
          ${c?`
          border: 2px solid ${r.checkmark};
            outline: 2px solid ${r.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${r.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!n&&!o&&Mn}
            outline-offset: -4px;
          }
        `:h==="menu"||h==="thin"?ot`
          ${el()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!o&&!n&&Wt({style:"buttonThin"})}
          }
          &:active {
            ${!o&&Wt({style:"buttonThinPressed"})}
          }
          ${n&&Wt({style:"buttonThinPressed"})}
          ${o&&tl()}
        `:ot`
          ${el()};
          border: none;
          ${o&&tl()}
          ${n?Hi({mainColor:r.material,secondaryColor:r.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${c?ot`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${r.borderDarkest};
                `:ot`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${Wt(n?{style:h==="raised"?"window":"button",invert:!0}:{style:h==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!o&&Wt({style:h==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!n&&!o&&Mn}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${n?"0":"1px"};
          }
        `}
  ${Oy}
`,Bi=k.forwardRef(({onClick:n,disabled:o=!1,children:c,type:r="button",fullWidth:h=!1,size:g="md",square:v=!1,active:T=!1,onTouchStart:A=Ca,primary:y=!1,variant:R="default",...C},G)=>N.createElement(vo,{active:T,disabled:o,$disabled:o,fullWidth:h,onClick:o?void 0:n,onTouchStart:A,primary:y,ref:G,size:g,square:v,type:r,variant:R,...C},c));Bi.displayName="Button";function ia({defaultValue:n,onChange:o,onChangePropName:c="onChange",readOnly:r,value:h,valuePropName:g="value"}){const v=h!==void 0,[T,A]=k.useState(n),y=k.useCallback(R=>{v||A(R)},[v]);if(v&&typeof o!="function"&&!r){const R=`Warning: You provided a \`${g}\` prop to a component without an \`${c}\` handler.${g==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${c}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${c}\` function that updates \`${g}\`.`}`;console.warn(R)}return[v?h:T,y]}const as=X.li`
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
    ${({theme:n,$disabled:o})=>!o&&`
        color: ${n.materialTextInvert};
        background: ${n.hoverBackground};
      `}

    cursor: default;
  }
  ${n=>n.$disabled&&tl()}
`,Ta=k.forwardRef(({size:n="lg",disabled:o,square:c,children:r,onClick:h,primary:g,...v},T)=>N.createElement(as,{$disabled:o,size:n,square:c,onClick:o?void 0:h,primary:g,role:"menuitem",ref:T,"aria-disabled":o,...v},r));Ta.displayName="MenuListItem";const A0=X.ul.attrs(()=>({role:"menu"}))`
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
`;A0.displayName="MenuList";const sl=20,ro=X.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${sl}px;
  height: ${sl}px;
  opacity: 0;
  z-index: -1;
`,bs=X.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:n})=>n?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:n})=>n.materialText};
  ${n=>n.$disabled&&tl()}

  ${as} & {
    margin: 0;
    height: 100%;
  }
  ${as}:hover & {
    ${({$disabled:n,theme:o})=>!n&&ot`
        color: ${o.materialTextInvert};
      `};
  }
`,ys=X.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${ro}:focus ~ & {
    ${Mn}
  }
  ${ro}:not(:disabled) ~ &:active {
    ${Mn}
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
    ${n=>n.shadow&&`box-shadow:${ms};`}
  }
`,zy=X.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${gs()}
`,S0=k.forwardRef(({children:n,shadow:o=!0,...c},r)=>N.createElement(fl,{ref:r,shadow:o,...c},N.createElement(zy,null,n)));S0.displayName="ScrollView";const E0=ot`
  width: ${sl}px;
  height: ${sl}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,ky=X(fl)`
  ${E0}
  width: ${sl}px;
  height: ${sl}px;
  background: ${({$disabled:n,theme:o})=>n?o.material:o.canvas};
  &:before {
    box-shadow: none;
  }
`,My=X.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:n,theme:o})=>n?o.flatLight:o.canvas};
  ${E0}
  width: ${sl-4}px;
  height: ${sl-4}px;
  outline: none;
  border: 2px solid ${({theme:n})=>n.flatDark};
  background: ${({$disabled:n,theme:o})=>n?o.flatLight:o.canvas};
`,Cy=X.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
      ${({$disabled:n,theme:o})=>n?o.checkmarkDisabled:o.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${n=>n.$disabled?n.theme.checkmarkDisabled:n.theme.checkmark};
  }
`,Ny=X.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:n,theme:o})=>Hi({mainColor:n?o.checkmarkDisabled:o.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,_y={flat:My,default:ky},jy=k.forwardRef(({checked:n,className:o="",defaultChecked:c=!1,disabled:r=!1,indeterminate:h=!1,label:g="",onChange:v=Ca,style:T={},value:A,variant:y="default",...R},C)=>{var G;const[et,W]=ia({defaultValue:c,onChange:v,readOnly:(G=R.readOnly)!==null&&G!==void 0?G:r,value:n}),ut=k.useCallback(lt=>{const V=lt.target.checked;W(V),v(lt)},[v,W]),P=_y[y];let tt=null;return h?tt=Ny:et&&(tt=Cy),N.createElement(bs,{$disabled:r,className:o,style:T},N.createElement(ro,{disabled:r,onChange:r?void 0:ut,readOnly:r,type:"checkbox",value:A,checked:et,"data-indeterminate":h,ref:C,...R}),N.createElement(P,{$disabled:r,role:"presentation"},tt&&N.createElement(tt,{$disabled:r,variant:y})),g&&N.createElement(ys,null,g))});jy.displayName="Checkbox";const co=X.div`
  ${({orientation:n,theme:o,size:c="100%"})=>n==="vertical"?`
    height: ${na(c)};
    border-left: 2px solid ${o.borderDark};
    border-right: 2px solid ${o.borderLightest};
    margin: 0;
    `:`
    width: ${na(c)};
    border-bottom: 2px solid ${o.borderLightest};
    border-top: 2px solid ${o.borderDark};
    margin: 0;
    `}
`;co.displayName="Separator";const By=X(vo)`
  padding-left: 8px;
`,Hy=X(co)`
  height: 21px;
  position: relative;
  top: 0;
`,w0=X.input`
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
`,Uy=X.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:n})=>n};

  ${({$disabled:n})=>n?ot`
          border: 2px solid ${({theme:o})=>o.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:o})=>o.materialTextDisabledShadow}
          );
        `:ot`
          border: 2px solid ${({theme:o})=>o.materialText};
        `}
  ${w0}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Mn}
    outline-offset: -8px;
  }
`,$y=X.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:n})=>n?ot`
          border-top: 6px solid ${({theme:o})=>o.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:o})=>o.materialTextDisabledShadow}
          );
        `:ot`
          border-top: 6px solid ${({theme:o})=>o.materialText};
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
`,Ly=k.forwardRef(({value:n,defaultValue:o,onChange:c=Ca,disabled:r=!1,variant:h="default",...g},v)=>{var T;const[A,y]=ia({defaultValue:o,onChange:c,readOnly:(T=g.readOnly)!==null&&T!==void 0?T:r,value:n}),R=C=>{const G=C.target.value;y(G),c(C)};return N.createElement(By,{disabled:r,as:"div",variant:h,size:"md"},N.createElement(w0,{onChange:R,readOnly:r,disabled:r,value:A??"#008080",type:"color",ref:v,...g}),N.createElement(Uy,{$disabled:r,color:A??"#008080",role:"presentation"}),h==="default"&&N.createElement(Hy,{orientation:"vertical"}),N.createElement($y,{$disabled:r,variant:h}))});Ly.displayName="ColorInput";const Gy=X.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:n})=>ot`
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
      ${Hi({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:n})}
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
`,_p=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],Yy=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function Qy({digit:n=0,pixelSize:o=2,...c}){const r=Yy[Number(n)].map((h,g)=>h?`${_p[g]} active`:_p[g]);return N.createElement(Gy,{pixelSize:o,...c},r.map((h,g)=>N.createElement("span",{className:h,key:g})))}const qy=X.div`
  ${Wt({style:"status"})}
  display: inline-flex;
  background: #000000;
`,Xy={sm:1,md:2,lg:3,xl:4},Vy=k.forwardRef(({value:n=0,minLength:o=3,size:c="md",...r},h)=>{const g=k.useMemo(()=>n.toString().padStart(o,"0").split(""),[o,n]);return N.createElement(qy,{ref:h,...r},g.map((v,T)=>N.createElement(Qy,{digit:v,pixelSize:Xy[c],key:T})))});Vy.displayName="Counter";const T0=ot`
  display: flex;
  align-items: center;
  width: ${({fullWidth:n})=>n?"100%":"auto"};
  min-height: ${me.md};
`,Zy=X(fl).attrs({"data-testid":"variant-default"})`
  ${T0}
  background: ${({$disabled:n,theme:o})=>n?o.material:o.canvas};
`,Ky=X.div.attrs({"data-testid":"variant-flat"})`
  ${Ma()}
  ${T0}
  position: relative;
`,D0=ot`
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
  ${({disabled:n,variant:o})=>o!=="flat"&&n&&tl()}
`,Jy=X.input`
  ${D0}
  padding: 0 8px;
`,Wy=X.textarea`
  ${D0}
  padding: 8px;
  resize: none;
  ${({variant:n})=>gs(n)}
`,R0=k.forwardRef(({className:n,disabled:o=!1,fullWidth:c,onChange:r=Ca,shadow:h=!0,style:g,variant:v="default",...T},A)=>{const y=v==="flat"?Ky:Zy,R=k.useMemo(()=>{var C;return T.multiline?N.createElement(Wy,{disabled:o,onChange:o?void 0:r,readOnly:o,ref:A,variant:v,...T}):N.createElement(Jy,{disabled:o,onChange:o?void 0:r,readOnly:o,ref:A,type:(C=T.type)!==null&&C!==void 0?C:"text",variant:v,...T})},[o,r,T,A,v]);return N.createElement(y,{className:n,fullWidth:c,$disabled:o,shadow:h,style:g},R)});R0.displayName="TextInput";const Fy=X.div`
  display: inline-flex;
  align-items: center;
`,ns=X(Bi)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:n})=>n==="flat"?ot`
          height: calc(50% - 1px);
        `:ot`
          height: 50%;
        `}
`,Iy=X.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:n})=>n==="flat"?ot`
          height: calc(${me.md} - 4px);
        `:ot`
          height: ${me.md};
          margin-left: 2px;
        `}
`,jp=X.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:n})=>n?ot`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:o})=>o.materialText};
        `:ot`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:o})=>o.materialText};
        `}
  ${ns}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:n})=>n.materialTextDisabledShadow}
    );
    ${({invert:n})=>n?ot`
            border-bottom-color: ${({theme:o})=>o.materialTextDisabled};
          `:ot`
            border-top-color: ${({theme:o})=>o.materialTextDisabled};
          `}
  }
`,O0=k.forwardRef(({className:n,defaultValue:o,disabled:c=!1,max:r,min:h,onChange:g,readOnly:v,step:T=1,style:A,value:y,variant:R="default",width:C,...G},et)=>{const[W,ut]=ia({defaultValue:o,onChange:g,readOnly:v,value:y}),P=k.useCallback(I=>{const F=parseFloat(I.target.value);ut(F)},[ut]),tt=k.useCallback(I=>{const F=Ra(parseFloat(((W??0)+I).toFixed(2)),h??null,r??null);ut(F),g==null||g(F)},[r,h,g,ut,W]),lt=k.useCallback(()=>{W!==void 0&&(g==null||g(W))},[g,W]),V=k.useCallback(()=>{tt(T)},[tt,T]),at=k.useCallback(()=>{tt(-T)},[tt,T]),M=R==="flat"?"flat":"raised";return N.createElement(Fy,{className:n,style:{...A,width:C!==void 0?na(C):"auto"},...G},N.createElement(R0,{value:W,variant:R,onChange:P,disabled:c,type:"number",readOnly:v,ref:et,fullWidth:!0,onBlur:lt}),N.createElement(Iy,{variant:R},N.createElement(ns,{"data-testid":"increment",variant:M,disabled:c||v,onClick:V},N.createElement(jp,{invert:!0})),N.createElement(ns,{"data-testid":"decrement",variant:M,disabled:c||v,onClick:at},N.createElement(jp,null))))});O0.displayName="NumberInput";function Py(){const n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let o="";for(let c=0;c<10;c+=1)o+=n[Math.floor(Math.random()*n.length)];return o}const z0=n=>k.useMemo(()=>Py(),[n]),k0=ot`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,M0=ot`
  background: ${({theme:n})=>n.hoverBackground};
  color: ${({theme:n})=>n.canvasTextInvert};
`,vs=X.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,tv=X.div`
  ${k0}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${vs}:focus & {
    ${M0}
    border: 2px dotted ${({theme:n})=>n.focusSecondary};
  }
`,C0=ot`
  height: ${me.md};
  display: inline-block;
  color: ${({$disabled:n=!1,theme:o})=>n?tl():o.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:n})=>n?"default":"pointer"};
`,ev=X(fl)`
  ${C0}
  background: ${({$disabled:n=!1,theme:o})=>n?o.material:o.canvas};
  &:focus {
    outline: 0;
  }
`,lv=X.div`
  ${Ma()}
  ${C0}
  background: ${({$disabled:n=!1,theme:o})=>n?o.flatLight:o.canvas};
`,av=X.select`
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
  ${k0}
  cursor: pointer;
  &:disabled {
    ${tl()};
    background: ${({theme:n})=>n.material};
    cursor: default;
  }
`,N0=X(vo).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:n="default"})=>n==="flat"?ot`
          height: 100%;
          margin-right: 0;
        `:ot`
          height: 100%;
        `}
  ${({native:n=!1,variant:o="default"})=>n&&(o==="flat"?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:n=!1,native:o=!1})=>n||o?"none":"auto"}
`,nv=X.span`
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
    ${({$disabled:n=!1,theme:o})=>n?o.materialTextDisabled:o.materialText};
  ${({$disabled:n=!1,theme:o})=>n&&`
    filter: drop-shadow(1px 1px 0px ${o.materialTextDisabledShadow});
    border-top-color: ${o.materialTextDisabled};
    `}
  ${N0}:active & {
    margin-top: 2px;
  }
`,iv=X.ul`
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
  box-shadow: ${ps};
  ${({variant:n="default"})=>n==="flat"?ot`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:o})=>o.flatDark};
        `:ot`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:o})=>o.borderDarkest};
        `}
  ${({variant:n="default"})=>gs(n)}
`,uv=X.li`
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
  ${({active:n})=>n?M0:""}
  user-select: none;
`,ov=[],_0=({className:n,defaultValue:o,disabled:c,native:r,onChange:h,options:g=ov,readOnly:v,style:T,value:A,variant:y,width:R})=>{var C;const G=k.useMemo(()=>g.filter(Boolean),[g]),[et,W]=ia({defaultValue:o??((C=G==null?void 0:G[0])===null||C===void 0?void 0:C.value),onChange:h,readOnly:v,value:A}),ut=!(c||v),P=k.useMemo(()=>({className:n,style:{...T,width:R}}),[n,T,R]),tt=k.useMemo(()=>N.createElement(N0,{as:"div","data-testid":"select-button",$disabled:c,native:r,tabIndex:-1,variant:y==="flat"?"flat":"raised"},N.createElement(nv,{"data-testid":"select-icon",$disabled:c})),[c,r,y]),lt=k.useMemo(()=>y==="flat"?lv:ev,[y]);return k.useMemo(()=>({isEnabled:ut,options:G,value:et,setValue:W,wrapperProps:P,DropdownButton:tt,Wrapper:lt}),[tt,lt,ut,G,W,et,P])},rv={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},cv=1e3,sv=({onBlur:n,onChange:o,onClose:c,onFocus:r,onKeyDown:h,onMouseDown:g,onOpen:v,open:T,options:A,readOnly:y,value:R,selectRef:C,setValue:G,wrapperRef:et})=>{const W=k.useRef(null),ut=k.useRef([]),P=k.useRef(0),tt=k.useRef(0),lt=k.useRef(),V=k.useRef("search"),at=k.useRef(""),M=k.useRef(),[I,F]=ia({defaultValue:!1,onChange:v,onChangePropName:"onOpen",readOnly:y,value:T,valuePropName:"open"}),xt=k.useMemo(()=>{const Y=A.findIndex(mt=>mt.value===R);return P.current=Ra(Y,0,null),A[Y]},[A,R]),[At,Xt]=k.useState(A[0]),Ct=k.useCallback(Y=>{const mt=W.current,dt=ut.current[Y];if(!dt||!mt){lt.current=Y;return}lt.current=void 0;const yt=mt.clientHeight,Rt=mt.scrollTop,_t=mt.scrollTop+yt,Yt=dt.offsetTop,le=dt.offsetHeight,Qt=dt.offsetTop+dt.offsetHeight;Yt<Rt&&mt.scrollTo(0,Yt),Qt>_t&&mt.scrollTo(0,Yt-yt+le),dt.focus({preventScroll:!0})},[W]),bt=k.useCallback((Y,{scroll:mt}={})=>{var dt;const yt=A.length-1;let Rt;switch(Y){case"first":{Rt=0;break}case"last":{Rt=yt;break}case"next":{Rt=Ra(tt.current+1,0,yt);break}case"previous":{Rt=Ra(tt.current-1,0,yt);break}case"selected":{Rt=Ra((dt=P.current)!==null&&dt!==void 0?dt:0,0,yt);break}default:Rt=Y}tt.current=Rt,Xt(A[Rt]),mt&&Ct(Rt)},[tt,A,Ct]),d=k.useCallback(({fromEvent:Y})=>{F(!0),bt("selected",{scroll:!0}),v==null||v({fromEvent:Y})},[bt,v,F]),U=k.useCallback(()=>{V.current="search",at.current="",clearTimeout(M.current)},[]),Z=k.useCallback(({focusSelect:Y,fromEvent:mt})=>{var dt;c==null||c({fromEvent:mt}),F(!1),Xt(A[0]),U(),lt.current=void 0,Y&&((dt=C.current)===null||dt===void 0||dt.focus())},[U,c,A,C,F]),D=k.useCallback(({fromEvent:Y})=>{I?Z({focusSelect:!1,fromEvent:Y}):d({fromEvent:Y})},[Z,d,I]),j=k.useCallback((Y,{fromEvent:mt})=>{P.current!==Y&&(P.current=Y,G(A[Y].value),o==null||o(A[Y],{fromEvent:mt}))},[o,A,G]),q=k.useCallback(({focusSelect:Y,fromEvent:mt})=>{j(tt.current,{fromEvent:mt}),Z({focusSelect:Y,fromEvent:mt})},[Z,j]),it=k.useCallback((Y,{fromEvent:mt,select:dt})=>{var yt;switch(V.current==="cycleFirstLetter"&&Y!==at.current&&(V.current="search"),Y===at.current?V.current="cycleFirstLetter":at.current+=Y,V.current){case"search":{let Rt=A.findIndex(_t=>{var Yt;return((Yt=_t.label)===null||Yt===void 0?void 0:Yt.toLocaleUpperCase().indexOf(at.current))===0});Rt<0&&(Rt=A.findIndex(_t=>{var Yt;return((Yt=_t.label)===null||Yt===void 0?void 0:Yt.toLocaleUpperCase().indexOf(Y))===0}),at.current=Y),Rt>=0&&(dt?j(Rt,{fromEvent:mt}):bt(Rt,{scroll:!0}));break}case"cycleFirstLetter":{const Rt=dt?(yt=P.current)!==null&&yt!==void 0?yt:-1:tt.current;let _t=A.findIndex((Yt,le)=>{var Qt;return le>Rt&&((Qt=Yt.label)===null||Qt===void 0?void 0:Qt.toLocaleUpperCase().indexOf(Y))===0});_t<0&&(_t=A.findIndex(Yt=>{var le;return((le=Yt.label)===null||le===void 0?void 0:le.toLocaleUpperCase().indexOf(Y))===0})),_t>=0&&(dt?j(_t,{fromEvent:mt}):bt(_t,{scroll:!0}));break}}clearTimeout(M.current),M.current=setTimeout(()=>{V.current==="search"&&(at.current="")},cv)},[bt,A,j]),p=k.useCallback(Y=>{var mt;Y.button===0&&(Y.preventDefault(),(mt=C.current)===null||mt===void 0||mt.focus(),D({fromEvent:Y}),g==null||g(Y))},[g,C,D]),B=k.useCallback(Y=>{q({focusSelect:!0,fromEvent:Y})},[q]),K=k.useCallback(Y=>{const{altKey:mt,code:dt,ctrlKey:yt,metaKey:Rt,shiftKey:_t}=Y,{ARROW_DOWN:Yt,ARROW_UP:le,END:Qt,ENTER:ge,ESC:ie,HOME:He,SPACE:Ee,TAB:ll}=rv,Ue=mt||yt||Rt||_t;if(!(dt===ll&&(mt||yt||Rt)||dt!==ll&&Ue))switch(dt){case Yt:{if(Y.preventDefault(),!I){d({fromEvent:Y});return}bt("next",{scroll:!0});break}case le:{if(Y.preventDefault(),!I){d({fromEvent:Y});return}bt("previous",{scroll:!0});break}case Qt:{if(Y.preventDefault(),!I){d({fromEvent:Y});return}bt("last",{scroll:!0});break}case ge:{if(!I)return;Y.preventDefault(),q({focusSelect:!0,fromEvent:Y});break}case ie:{if(!I)return;Y.preventDefault(),Z({focusSelect:!0,fromEvent:Y});break}case He:{if(Y.preventDefault(),!I){d({fromEvent:Y});return}bt("first",{scroll:!0});break}case Ee:{Y.preventDefault(),I?q({focusSelect:!0,fromEvent:Y}):d({fromEvent:Y});break}case ll:{if(!I)return;_t||Y.preventDefault(),q({focusSelect:!_t,fromEvent:Y});break}default:!Ue&&dt.match(/^Key/)&&(Y.preventDefault(),Y.stopPropagation(),it(dt.replace(/^Key/,""),{select:!I,fromEvent:Y}))}},[bt,Z,I,d,it,q]),_=k.useCallback(Y=>{K(Y),h==null||h(Y)},[K,h]),Q=k.useCallback(Y=>{bt(Y)},[bt]),nt=k.useCallback(Y=>{I||(U(),n==null||n(Y))},[U,n,I]),J=k.useCallback(Y=>{U(),r==null||r(Y)},[U,r]),ct=k.useCallback(Y=>{W.current=Y,lt.current!==void 0&&Ct(lt.current)},[Ct]),ft=k.useCallback((Y,mt)=>{ut.current[mt]=Y,lt.current===mt&&Ct(lt.current)},[Ct]);return k.useEffect(()=>{if(!I)return()=>{};const Y=mt=>{var dt;const yt=mt.target;!((dt=et.current)===null||dt===void 0)&&dt.contains(yt)||(mt.preventDefault(),Z({focusSelect:!1,fromEvent:mt}))};return document.addEventListener("mousedown",Y),()=>{document.removeEventListener("mousedown",Y)}},[Z,I,et]),k.useMemo(()=>({activeOption:At,handleActivateOptionIndex:Q,handleBlur:nt,handleButtonKeyDown:_,handleDropdownKeyDown:K,handleFocus:J,handleMouseDown:p,handleOptionClick:B,handleSetDropdownRef:ct,handleSetOptionRef:ft,open:I,selectedOption:xt}),[At,Q,nt,_,J,K,p,B,ct,ft,I,xt])},fv=k.forwardRef(({className:n,defaultValue:o,disabled:c,onChange:r,options:h,readOnly:g,style:v,value:T,variant:A,width:y,...R},C)=>{const{isEnabled:G,options:et,setValue:W,value:ut,DropdownButton:P,Wrapper:tt}=_0({defaultValue:o,disabled:c,native:!0,onChange:r,options:h,readOnly:g,value:T,variant:A}),lt=k.useCallback(V=>{const at=et.find(M=>M.value===V.target.value);at&&(W(at.value),r==null||r(at,{fromEvent:V}))},[r,et,W]);return N.createElement(tt,{className:n,style:{...v,width:y}},N.createElement(vs,null,N.createElement(av,{...R,disabled:c,onChange:G?lt:Ca,ref:C,value:ut},et.map((V,at)=>{var M;return N.createElement("option",{key:`${V.value}-${at}`,value:V.value},(M=V.label)!==null&&M!==void 0?M:V.value)})),P))});fv.displayName="SelectNative";function dv({activateOptionIndex:n,active:o,index:c,onClick:r,option:h,selected:g,setRef:v}){const T=k.useCallback(()=>{n(c)},[n,c]),A=k.useCallback(R=>{v(R,c)},[c,v]),y=z0();return N.createElement(uv,{active:o,"aria-selected":g?"true":void 0,"data-value":h.value,id:y,onClick:r,onMouseEnter:T,ref:A,role:"option",tabIndex:0},h.label)}function hv({"aria-label":n,"aria-labelledby":o,className:c,defaultValue:r,disabled:h=!1,formatDisplay:g,inputProps:v,labelId:T,menuMaxHeight:A,name:y,onBlur:R,onChange:C,onClose:G,onFocus:et,onKeyDown:W,onMouseDown:ut,onOpen:P,open:tt,options:lt,readOnly:V,shadow:at=!0,style:M,variant:I="default",value:F,width:xt="auto",...At},Xt){const{isEnabled:Ct,options:bt,setValue:d,value:U,wrapperProps:Z,DropdownButton:D,Wrapper:j}=_0({className:c,defaultValue:r,disabled:h,native:!1,onChange:C,options:lt,style:M,readOnly:V,value:F,variant:I,width:xt}),q=k.useRef(null),it=k.useRef(null),p=k.useRef(null),{activeOption:B,handleActivateOptionIndex:K,handleBlur:_,handleButtonKeyDown:Q,handleDropdownKeyDown:nt,handleFocus:J,handleMouseDown:ct,handleOptionClick:ft,handleSetDropdownRef:Y,handleSetOptionRef:mt,open:dt,selectedOption:yt}=sv({onBlur:R,onChange:C,onClose:G,onFocus:et,onKeyDown:W,onMouseDown:ut,onOpen:P,open:tt,options:bt,value:U,selectRef:it,setValue:d,wrapperRef:p});k.useImperativeHandle(Xt,()=>({focus:ge=>{var ie;(ie=it.current)===null||ie===void 0||ie.focus(ge)},node:q.current,value:String(U)}),[U]);const Rt=k.useMemo(()=>yt?typeof g=="function"?g(yt):yt.label:"",[g,yt]),_t=Ct?1:void 0,Yt=k.useMemo(()=>A?{overflow:"auto",maxHeight:A}:void 0,[A]),le=z0(),Qt=k.useMemo(()=>bt.map((ge,ie)=>{const He=`${U}-${ie}`,Ee=ge===B,ll=ge===yt;return N.createElement(dv,{activateOptionIndex:K,active:Ee,index:ie,key:He,onClick:ft,option:ge,selected:ll,setRef:mt})}),[B,K,ft,mt,bt,yt,U]);return N.createElement(j,{...Z,$disabled:h,ref:p,shadow:at,style:{...M,width:xt}},N.createElement("input",{name:y,ref:q,type:"hidden",value:String(U),...v}),N.createElement(vs,{"aria-disabled":h,"aria-expanded":dt,"aria-haspopup":"listbox","aria-label":n,"aria-labelledby":o??T,"aria-owns":Ct&&dt?le:void 0,onBlur:_,onFocus:J,onKeyDown:Q,onMouseDown:Ct?ct:ut,ref:it,role:"button",tabIndex:_t,...At},N.createElement(tv,null,Rt),D),Ct&&dt&&N.createElement(iv,{id:le,onKeyDown:nt,ref:Y,role:"listbox",style:Yt,tabIndex:0,variant:I},Qt))}const j0=k.forwardRef(hv);j0.displayName="Select";const pv=X.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${n=>n.noPadding?"0":"4px"};
`,so=k.forwardRef(function({children:o,noPadding:c=!1,...r},h){return N.createElement(pv,{noPadding:c,ref:h,...r},o)});so.displayName="Toolbar";const mv=X.div`
  padding: 16px;
`,B0=k.forwardRef(function({children:o,...c},r){return N.createElement(mv,{ref:r,...c},o)});B0.displayName="WindowContent";const gv=X.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:n})=>n.material};
  ${({active:n})=>n===!1?ot`
          background: ${({theme:o})=>o.headerNotActiveBackground};
          color: ${({theme:o})=>o.headerNotActiveText};
        `:ot`
          background: ${({theme:o})=>o.headerBackground};
          color: ${({theme:o})=>o.headerText};
        `}

  ${vo} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,H0=k.forwardRef(function({active:o=!0,children:c,...r},h){return N.createElement(gv,{active:o,ref:h,...r},c)});H0.displayName="WindowHeader";const bv=X.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Wt({style:"window"})}
  ${el()}
`,yv=X.span`
  ${({theme:n})=>ot`
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
`,U0=k.forwardRef(({children:n,resizable:o=!1,resizeRef:c,shadow:r=!0,...h},g)=>N.createElement(bv,{ref:g,shadow:r,...h},n,o&&N.createElement(yv,{"data-testid":"resizeHandle",ref:c})));U0.displayName="Window";const vv=X(S0)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:n})=>n.canvas};
`,xv=X.div`
  display: flex;
  background: ${({theme:n})=>n.materialDark};
  color: #dfe0e3;
`,Av=X.div`
  display: flex;
  flex-wrap: wrap;
`,Ol=X.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,Sv=X.span`
  cursor: pointer;

  background: ${({active:n,theme:o})=>n?o.hoverBackground:"transparent"};
  color: ${({active:n,theme:o})=>n?o.canvasTextInvert:o.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:n,active:o})=>o?"none":n.materialDark};
  }
`,Ev=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function wv(n,o){return new Date(n,o+1,0).getDate()}function Tv(n,o,c){return new Date(n,o,c).getDay()}function Dv(n){const o=new Date(Date.parse(n)),c=o.getUTCDate(),r=o.getUTCMonth(),h=o.getUTCFullYear();return{day:c,month:r,year:h}}const Rv=k.forwardRef(({className:n,date:o=new Date().toISOString(),onAccept:c,onCancel:r,shadow:h=!0},g)=>{const[v,T]=k.useState(()=>Dv(o)),{year:A,month:y,day:R}=v,C=k.useCallback(({value:P})=>{T(tt=>({...tt,month:P}))},[]),G=k.useCallback(P=>{T(tt=>({...tt,year:P}))},[]),et=k.useCallback(P=>{T(tt=>({...tt,day:P}))},[]),W=k.useCallback(()=>{const P=[v.year,v.month+1,v.day].map(tt=>String(tt).padStart(2,"0")).join("-");c==null||c(P)},[v.day,v.month,v.year,c]),ut=k.useMemo(()=>{const P=Array.from({length:42}),tt=Tv(A,y,1);let lt=R;const V=wv(A,y);return lt=lt<V?lt:V,P.forEach((at,M)=>{if(M>=tt&&M<V+tt){const I=M-tt+1;P[M]=N.createElement(Ol,{key:M,onClick:()=>{et(I)}},N.createElement(Sv,{active:I===lt},I))}else P[M]=N.createElement(Ol,{key:M})}),P},[R,et,y,A]);return N.createElement(U0,{className:n,ref:g,shadow:h,style:{margin:20}},N.createElement(H0,null,N.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),N.createElement(B0,null,N.createElement(so,{noPadding:!0,style:{justifyContent:"space-between"}},N.createElement(j0,{options:Ev,value:y,onChange:C,width:128,menuMaxHeight:200}),N.createElement(O0,{value:A,onChange:G,width:100})),N.createElement(vv,null,N.createElement(xv,null,N.createElement(Ol,null,"S"),N.createElement(Ol,null,"M"),N.createElement(Ol,null,"T"),N.createElement(Ol,null,"W"),N.createElement(Ol,null,"T"),N.createElement(Ol,null,"F"),N.createElement(Ol,null,"S")),N.createElement(Av,null,ut)),N.createElement(so,{noPadding:!0,style:{justifyContent:"space-between"}},N.createElement(Bi,{fullWidth:!0,onClick:r,disabled:!r},"Cancel"),N.createElement(Bi,{fullWidth:!0,onClick:c?W:void 0,disabled:!c},"OK"))))});Rv.displayName="DatePicker";const Ov=n=>{switch(n){case"status":case"well":return ot`
        ${Wt({style:"status"})}
      `;case"window":case"outside":return ot`
        ${Wt({style:"window"})}
      `;case"field":return ot`
        ${Wt({style:"field"})}
      `;default:return ot`
        ${Wt()}
      `}},zv=X.div`
  position: relative;
  font-size: 1rem;
  ${({variant:n})=>Ov(n)}
  ${({variant:n})=>el(n==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,$0=k.forwardRef(({children:n,shadow:o=!1,variant:c="window",...r},h)=>N.createElement(zv,{ref:h,shadow:o,variant:c,...r},n));$0.displayName="Frame";const kv=X.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:n,variant:o})=>o==="flat"?n.flatDark:n.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:n})=>n.materialText};
  ${({variant:n})=>n!=="flat"&&ot`
      box-shadow: -1px -1px 0 1px ${({theme:o})=>o.borderDark},
        inset -1px -1px 0 1px ${({theme:o})=>o.borderDark};
    `}
  ${n=>n.$disabled&&tl()}
`,Mv=X.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:n,variant:o})=>o==="flat"?n.canvas:n.material};
`,Cv=k.forwardRef(({label:n,disabled:o=!1,variant:c="default",children:r,...h},g)=>N.createElement(kv,{"aria-disabled":o,$disabled:o,variant:c,ref:g,...h},n&&N.createElement(Mv,{variant:c},n),r));Cv.displayName="GroupBox";const L0=X.div`
  ${({theme:n,size:o="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${na(o)};
  width: 5px;
  border-top: 2px solid ${n.borderLightest};
  border-left: 2px solid ${n.borderLightest};
  border-bottom: 2px solid ${n.borderDark};
  border-right: 2px solid ${n.borderDark};
  background: ${n.material};
`}
`;L0.displayName="Handle";const Nv="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",_v=X.div`
  display: inline-block;
  height: ${({size:n})=>na(n)};
  width: ${({size:n})=>na(n)};
`,jv=X.span`
  display: block;
  background: ${Nv};
  background-size: cover;
  width: 100%;
  height: 100%;
`,Bv=k.forwardRef(({size:n=30,...o},c)=>N.createElement(_v,{size:n,ref:c,...o},N.createElement(jv,null)));Bv.displayName="Hourglass";const Hv=X.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,Uv=X.div`
  position: relative;
`,$v=X.div`
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
`,Lv=X(fl).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,Gv=X.div`
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
`,Yv=k.forwardRef(({backgroundStyles:n,children:o,...c},r)=>N.createElement(Hv,{ref:r,...c},N.createElement(Uv,null,N.createElement($v,null,N.createElement(Lv,{style:n},o)),N.createElement(Gv,null))));Yv.displayName="Monitor";const Qv=X.div`
  display: inline-block;
  height: ${me.md};
  width: 100%;
`,qv=X(fl)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,G0=ot`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,Xv=X.div`
  position: relative;
  top: 4px;
  ${G0}
  background: ${({theme:n})=>n.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:n})=>n.materialText};
`,Vv=X.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${G0}
  color: ${({theme:n})=>n.materialTextInvert};
  background: ${({theme:n})=>n.progress};
  clip-path: polygon(
    0 0,
    ${({value:n=0})=>n}% 0,
    ${({value:n=0})=>n}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,Zv=X.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,Y0=17,Kv=X.span`
  display: inline-block;
  width: ${Y0}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:n})=>n.progress};
  border-color: ${({theme:n})=>n.material};
  border-width: 0px 1px;
  border-style: solid;
`,Jv=k.forwardRef(({hideValue:n=!1,shadow:o=!0,value:c,variant:r="default",...h},g)=>{const v=n?null:`${c}%`,T=k.useRef(null),[A,y]=k.useState([]),R=k.useCallback(()=>{if(!T.current||c===void 0)return;const C=T.current.getBoundingClientRect().width,G=Math.round(c/100*C/Y0);y(Array.from({length:G}))},[c]);return k.useEffect(()=>(R(),window.addEventListener("resize",R),()=>window.removeEventListener("resize",R)),[R]),N.createElement(Qv,{"aria-valuenow":c!==void 0?Math.round(c):void 0,ref:g,role:"progressbar",variant:r,...h},N.createElement(qv,{variant:r,shadow:o},r==="default"?N.createElement(N.Fragment,null,N.createElement(Xv,{"data-testid":"defaultProgress1"},v),N.createElement(Vv,{"data-testid":"defaultProgress2",value:c},v)):N.createElement(Zv,{ref:T,"data-testid":"tileProgress"},A.map((C,G)=>N.createElement(Kv,{key:G})))))});Jv.displayName="ProgressBar";const Q0=ot`
  width: ${sl}px;
  height: ${sl}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Wv=X(fl)`
  ${Q0}
  background: ${({$disabled:n,theme:o})=>n?o.material:o.canvas};

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
`,Fv=X.div`
  ${Ma()}
  ${Q0}
  outline: none;
  background: ${({$disabled:n,theme:o})=>n?o.flatLight:o.canvas};
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
`,Iv=X.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,Pv={flat:Fv,default:Wv},t1=k.forwardRef(({checked:n,className:o="",disabled:c=!1,label:r="",onChange:h,style:g={},variant:v="default",...T},A)=>{const y=Pv[v];return N.createElement(bs,{$disabled:c,className:o,style:g},N.createElement(y,{$disabled:c,role:"presentation"},n&&N.createElement(Iv,{$disabled:c,variant:v})),N.createElement(ro,{disabled:c,onChange:c?void 0:h,readOnly:c,type:"radio",checked:n,ref:A,...T}),r&&N.createElement(ys,null,r))});t1.displayName="Radio";const e1=typeof window<"u"?k.useLayoutEffect:k.useEffect;function wa(n){const o=k.useRef(n);return e1(()=>{o.current=n}),k.useCallback((...c)=>(0,o.current)(...c),[])}function Bp(n,o){typeof n=="function"?n(o):n&&(n.current=o)}function Hp(n,o){return k.useMemo(()=>n==null&&o==null?null:c=>{Bp(n,c),Bp(o,c)},[n,o])}var l1=Zp();let xo=!0,is=!1,Up;const a1={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function n1(n){if("type"in n){const{type:o,tagName:c}=n;if(c==="INPUT"&&a1[o]&&!n.readOnly||c==="TEXTAREA"&&!n.readOnly)return!0}return!!("isContentEditable"in n&&n.isContentEditable)}function i1(n){n.metaKey||n.altKey||n.ctrlKey||(xo=!0)}function Vc(){xo=!1}function u1(){this.visibilityState==="hidden"&&is&&(xo=!0)}function o1(n){n.addEventListener("keydown",i1,!0),n.addEventListener("mousedown",Vc,!0),n.addEventListener("pointerdown",Vc,!0),n.addEventListener("touchstart",Vc,!0),n.addEventListener("visibilitychange",u1,!0)}function r1(n){const{target:o}=n;try{return o.matches(":focus-visible")}catch{}return xo||n1(o)}function c1(){is=!0,window.clearTimeout(Up),Up=window.setTimeout(()=>{is=!1},100)}function s1(){const n=k.useCallback(o=>{const c=l1.findDOMNode(o);c!=null&&o1(c.ownerDocument)},[]);return{isFocusVisible:r1,onBlurVisible:c1,ref:n}}function f1(n,o,c){return(c-o)*n+o}function Fu(n,o){if(o!==void 0&&"changedTouches"in n){for(let c=0;c<n.changedTouches.length;c+=1){const r=n.changedTouches[c];if(r.identifier===o)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in n?{x:n.clientX,y:n.clientY}:!1}function Iu(n){return n&&n.ownerDocument||document}function d1(n,o){var c;const{index:r}=(c=n.reduce((h,g,v)=>{const T=Math.abs(o-g);return h===null||T<h.distance||T===h.distance?{distance:T,index:v}:h},null))!==null&&c!==void 0?c:{};return r??-1}const h1=X.div`
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
    ${({isFocused:n,theme:o})=>n&&`
        outline: 2px dotted ${o.materialText};
        `}
  }

  ${({orientation:n,size:o})=>n==="vertical"?ot`
          height: ${o};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:c})=>c?"41px":"39px"};
          }
        `:ot`
          width: ${o};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:c})=>c?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:n})=>n?"none":"auto"};
`,q0=()=>ot`
  position: absolute;
  ${({orientation:n})=>n==="vertical"?ot`
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
`,p1=X(fl)`
  ${q0()}
`,m1=X(fl)`
  ${q0()}

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
`,g1=X.span`
  position: relative;
  ${({orientation:n})=>n==="vertical"?ot`
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
  ${({variant:n})=>n==="flat"?ot`
          ${Ma()}
          outline: 2px solid ${({theme:o})=>o.flatDark};
          background: ${({theme:o})=>o.flatLight};
        `:ot`
          ${el()}
          ${Wt()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:n,theme:o})=>n&&Hi({mainColor:o.material,secondaryColor:o.borderLightest})}
`,fo=6,b1=X.span`
  display: inline-block;
  position: absolute;

  ${({orientation:n})=>n==="vertical"?ot`
          right: ${-8}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${fo}px;
          border-bottom: 2px solid ${({theme:o})=>o.materialText};
        `:ot`
          bottom: ${-6}px;
          height: ${fo}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:o})=>o.materialText};
          border-right: 1px solid ${({theme:o})=>o.materialText};
        `}

  color:  ${({theme:n})=>n.materialText};
  ${({$disabled:n,theme:o})=>n&&ot`
      ${tl()}
      box-shadow: 1px 1px 0px ${o.materialTextDisabledShadow};
      border-color: ${o.materialTextDisabled};
    `}
`,y1=X.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:n})=>n==="vertical"?ot`
          transform: translate(${fo+2}px, ${fo+1}px);
        `:ot`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,v1=k.forwardRef(({defaultValue:n,disabled:o=!1,marks:c=!1,max:r=100,min:h=0,name:g,onChange:v,onChangeCommitted:T,onMouseDown:A,orientation:y="horizontal",size:R="100%",step:C=1,value:G,variant:et="default",...W},ut)=>{const P=et==="flat"?m1:p1,tt=y==="vertical",[lt=h,V]=ia({defaultValue:n,onChange:v??T,value:G}),{isFocusVisible:at,onBlurVisible:M,ref:I}=s1(),[F,xt]=k.useState(!1),At=k.useRef(),Xt=k.useRef(null),Ct=Hp(I,At),bt=Hp(ut,Ct),d=wa(_=>{at(_)&&xt(!0)}),U=wa(()=>{F!==!1&&(xt(!1),M())}),Z=k.useRef(),D=k.useMemo(()=>c===!0&&Number.isFinite(C)?[...Array(Math.round((r-h)/C)+1)].map((_,Q)=>({label:void 0,value:h+C*Q})):Array.isArray(c)?c:[],[c,r,h,C]),j=wa(_=>{const Q=(r-h)/10,nt=D.map(ft=>ft.value),J=nt.indexOf(lt);let ct=0;switch(_.key){case"Home":ct=h;break;case"End":ct=r;break;case"PageUp":C&&(ct=lt+Q);break;case"PageDown":C&&(ct=lt-Q);break;case"ArrowRight":case"ArrowUp":C?ct=lt+C:ct=nt[J+1]||nt[nt.length-1];break;case"ArrowLeft":case"ArrowDown":C?ct=lt-C:ct=nt[J-1]||nt[0];break;default:return}_.preventDefault(),C&&(ct=Np(ct,C,h)),ct=Ra(ct,h,r),V(ct),xt(!0),v==null||v(ct),T==null||T(ct)}),q=k.useCallback(_=>{if(!At.current)return 0;const Q=At.current.getBoundingClientRect();let nt;tt?nt=(Q.bottom-_.y)/Q.height:nt=(_.x-Q.left)/Q.width;let J;if(J=f1(nt,h,r),C)J=Np(J,C,h);else{const ct=D.map(Y=>Y.value),ft=d1(ct,J);J=ct[ft]}return J=Ra(J,h,r),J},[D,r,h,C,tt]),it=wa(_=>{var Q;const nt=Fu(_,Z.current);if(!nt)return;const J=q(nt);(Q=Xt.current)===null||Q===void 0||Q.focus(),V(J),xt(!0),v==null||v(J)}),p=wa(_=>{const Q=Fu(_,Z.current);if(!Q)return;const nt=q(Q);T==null||T(nt),Z.current=void 0;const J=Iu(At.current);J.removeEventListener("mousemove",it),J.removeEventListener("mouseup",p),J.removeEventListener("touchmove",it),J.removeEventListener("touchend",p)}),B=wa(_=>{var Q;A==null||A(_),_.preventDefault(),(Q=Xt.current)===null||Q===void 0||Q.focus(),xt(!0);const nt=Fu(_,Z.current);if(nt){const ct=q(nt);V(ct),v==null||v(ct)}const J=Iu(At.current);J.addEventListener("mousemove",it),J.addEventListener("mouseup",p)}),K=wa(_=>{var Q;_.preventDefault();const nt=_.changedTouches[0];nt!=null&&(Z.current=nt.identifier),(Q=Xt.current)===null||Q===void 0||Q.focus(),xt(!0);const J=Fu(_,Z.current);if(J){const ft=q(J);V(ft),v==null||v(ft)}const ct=Iu(At.current);ct.addEventListener("touchmove",it),ct.addEventListener("touchend",p)});return k.useEffect(()=>{const{current:_}=At;_==null||_.addEventListener("touchstart",K);const Q=Iu(_);return()=>{_==null||_.removeEventListener("touchstart",K),Q.removeEventListener("mousemove",it),Q.removeEventListener("mouseup",p),Q.removeEventListener("touchmove",it),Q.removeEventListener("touchend",p)}},[p,it,K]),N.createElement(h1,{$disabled:o,hasMarks:!!D.length,isFocused:F,onMouseDown:B,orientation:y,ref:bt,size:na(R),...W},N.createElement("input",{disabled:o,name:g,type:"hidden",value:lt??0}),D&&D.map(_=>N.createElement(b1,{$disabled:o,"data-testid":"tick",key:_.value/(r-h)*100,orientation:y,style:{[tt?"bottom":"left"]:`${(_.value-h)/(r-h)*100}%`}},_.label&&N.createElement(y1,{"aria-hidden":!0,"data-testid":"mark",orientation:y},_.label))),N.createElement(P,{orientation:y,variant:et}),N.createElement(g1,{$disabled:o,"aria-disabled":o?!0:void 0,"aria-orientation":y,"aria-valuemax":r,"aria-valuemin":h,"aria-valuenow":lt,onBlur:U,onFocus:d,onKeyDown:j,orientation:y,ref:Xt,role:"slider",style:{[tt?"bottom":"left"]:`${(tt?-100:0)+100*(lt-h)/(r-h)}%`},tabIndex:o?void 0:0,variant:et}))});v1.displayName="Slider";const x1=X.tbody`
  background: ${({theme:n})=>n.canvas};
  display: table-row-group;
  box-shadow: ${ms};
  overflow-y: auto;
`,A1=k.forwardRef(function({children:o,...c},r){return N.createElement(x1,{ref:r,...c},o)});A1.displayName="TableBody";const S1=X.td`
  padding: 0 8px;
`,E1=k.forwardRef(function({children:o,...c},r){return N.createElement(S1,{ref:r,...c},o)});E1.displayName="TableDataCell";const w1=X.thead`
  display: table-header-group;
`,T1=k.forwardRef(function({children:o,...c},r){return N.createElement(w1,{ref:r,...c},o)});T1.displayName="TableHead";const D1=X.th`
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
  ${({$disabled:n})=>!n&&ot`
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
`,R1=k.forwardRef(function({disabled:o=!1,children:c,onClick:r,onTouchStart:h=Ca,sort:g,...v},T){const A=g==="asc"?"ascending":g==="desc"?"descending":void 0;return N.createElement(D1,{$disabled:o,"aria-disabled":o,"aria-sort":A,onClick:o?void 0:r,onTouchStart:o?void 0:h,ref:T,...v},N.createElement("div",null,c))});R1.displayName="TableHeadCell";const O1=X.tr`
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
`,z1=k.forwardRef(function({children:o,...c},r){return N.createElement(O1,{ref:r,...c},o)});z1.displayName="TableRow";const k1=X.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,M1=X(fl)`
  &:before {
    box-shadow: none;
  }
`,C1=k.forwardRef(({children:n,...o},c)=>N.createElement(M1,null,N.createElement(k1,{ref:c,...o},n)));C1.displayName="Table";const N1=X.button`
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
    ${Mn}
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
`,_1=k.forwardRef(({value:n,onClick:o,selected:c=!1,children:r,...h},g)=>N.createElement(N1,{"aria-selected":c,selected:c,onClick:v=>o==null?void 0:o(n,v),ref:g,role:"tab",...h},r));_1.displayName="Tab";const j1=X.div`
  ${el()}
  ${Wt()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,B1=k.forwardRef(({children:n,...o},c)=>N.createElement(j1,{ref:c,...o},n));B1.displayName="TabBody";const H1=X.div`
  position: relative;
  ${({isMultiRow:n,theme:o})=>n&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${o.borderDark};
  }
  `}
`,U1=X.div.attrs(()=>({"data-testid":"tab-row"}))`
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
`;function $1(n,o){const c=[];for(let r=o;r>0;r-=1)c.push(n.splice(0,Math.ceil(n.length/r)));return c}const L1=k.forwardRef(({value:n,onChange:o=Ca,children:c,rows:r=1,...h},g)=>{const v=k.useMemo(()=>{var T;const A=(T=N.Children.map(c,C=>{if(!N.isValidElement(C))return null;const G={selected:C.props.value===n,onClick:o};return N.cloneElement(C,G)}))!==null&&T!==void 0?T:[],y=$1(A,r).map((C,G)=>({key:G,tabs:C})),R=y.findIndex(C=>C.tabs.some(G=>G.props.selected));return y.push(y.splice(R,1)[0]),y},[c,o,r,n]);return N.createElement(H1,{...h,isMultiRow:r>1,role:"tablist",ref:g},v.map(T=>N.createElement(U1,{key:T.key},T.tabs)))});L1.displayName="Tabs";const G1=["blur","focus"],Y1=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function $p(n){return"nativeEvent"in n&&G1.includes(n.type)}function Lp(n){return"nativeEvent"in n&&Y1.includes(n.type)}const Q1={top:`top: -4px;
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
  box-shadow: ${ps};
  text-align: center;
  font-size: 1rem;
  ${n=>Q1[n.position]}
`,X1=X.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,V1=k.forwardRef(({className:n,children:o,disableFocusListener:c=!1,disableMouseListener:r=!1,enterDelay:h=1e3,leaveDelay:g=0,onBlur:v,onClose:T,onFocus:A,onMouseEnter:y,onMouseLeave:R,onOpen:C,style:G,text:et,position:W="top",...ut},P)=>{const[tt,lt]=k.useState(!1),[V,at]=k.useState(),[M,I]=k.useState(),F=!c,xt=!r,At=q=>{window.clearTimeout(V),window.clearTimeout(M);const it=window.setTimeout(()=>{lt(!0),C==null||C(q)},h);at(it)},Xt=q=>{q.persist(),$p(q)?A==null||A(q):Lp(q)&&(y==null||y(q)),At(q)},Ct=q=>{window.clearTimeout(V),window.clearTimeout(M);const it=window.setTimeout(()=>{lt(!1),T==null||T(q)},g);I(it)},bt=q=>{q.persist(),$p(q)?v==null||v(q):Lp(q)&&(R==null||R(q)),Ct(q)},d=F?bt:void 0,U=F?Xt:void 0,Z=xt?Xt:void 0,D=xt?bt:void 0,j=F?0:void 0;return N.createElement(X1,{"data-testid":"tooltip-wrapper",onBlur:d,onFocus:U,onMouseEnter:Z,onMouseLeave:D,tabIndex:j},N.createElement(q1,{className:n,"data-testid":"tooltip",position:W,ref:P,show:tt,style:G,...ut},et),o)});V1.displayName="Tooltip";const us=X(ys)`
  white-space: nowrap;
`,X0=ot`
  :focus {
    outline: none;
  }

  ${({$disabled:n})=>n?"cursor: default;":ot`
          cursor: pointer;

          :focus {
            ${us} {
              background: ${({theme:o})=>o.hoverBackground};
              color: ${({theme:o})=>o.materialTextInvert};
              outline: 2px dotted ${({theme:o})=>o.focusSecondary};
            }
          }
        `}
`,Z1=X.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:n})=>n&&ot`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({theme:o})=>o.borderDark};
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
`,K1=X.li`
  position: relative;
  padding-left: ${({hasItems:n})=>n?"0":"13px"};

  ${({isRootLevel:n})=>n?ot`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({theme:o})=>o.material};
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
              background: ${({theme:o})=>o.material};
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
`,J1=X.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,W1=X.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:n})=>n.materialText};
  user-select: none;
  padding-left: 18px;
  ${X0};

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
`,Gp=X(bs)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${X0};
`,F1=X.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function Yp(n,o){return n.includes(o)?n.filter(c=>c!==o):[...n,o]}function Qp(n){n.preventDefault()}function V0({className:n,disabled:o,expanded:c,innerRef:r,level:h,select:g,selected:v,style:T,tree:A=[]}){const y=h===0,R=k.useCallback(C=>{var G,et;const W=!!(C.items&&C.items.length>0),ut=c.includes(C.id),P=(G=o||C.disabled)!==null&&G!==void 0?G:!1,tt=P?Qp:M=>g(M,C),lt=P?Qp:M=>g(M,C),V=v===C.id,at=N.createElement(F1,{"aria-hidden":!0},C.icon);return N.createElement(K1,{key:C.label,isRootLevel:y,role:"treeitem","aria-expanded":ut,"aria-selected":V,hasItems:W},W?N.createElement(J1,{open:ut},N.createElement(W1,{onClick:tt,$disabled:P},N.createElement(Gp,{$disabled:P},at,N.createElement(us,null,C.label))),ut&&N.createElement(V0,{className:n,disabled:P,expanded:c,level:h+1,select:g,selected:v,style:T,tree:(et=C.items)!==null&&et!==void 0?et:[]})):N.createElement(Gp,{as:"button",$disabled:P,onClick:lt},at,N.createElement(us,null,C.label)))},[n,o,c,y,h,g,v,T]);return N.createElement(Z1,{className:y?n:void 0,style:y?T:void 0,ref:y?r:void 0,role:y?"tree":"group",isRootLevel:y},A.map(R))}function I1({className:n,defaultExpanded:o=[],defaultSelected:c,disabled:r=!1,expanded:h,onNodeSelect:g,onNodeToggle:v,selected:T,style:A,tree:y=[]},R){const[C,G]=ia({defaultValue:o,onChange:v,onChangePropName:"onNodeToggle",value:h,valuePropName:"expanded"}),[et,W]=ia({defaultValue:c,onChange:g,onChangePropName:"onNodeSelect",value:T,valuePropName:"selected"}),ut=k.useCallback((lt,V)=>{if(v){const at=Yp(C,V);v(lt,at)}G(at=>Yp(at,V))},[C,v,G]),P=k.useCallback((lt,V)=>{W(V),g&&g(lt,V)},[g,W]),tt=k.useCallback((lt,V)=>{lt.preventDefault(),P(lt,V.id),V.items&&V.items.length&&ut(lt,V.id)},[P,ut]);return N.createElement(V0,{className:n,disabled:r,expanded:C,level:0,innerRef:R,select:tt,selected:et,style:A,tree:y})}const P1=k.forwardRef(I1);P1.displayName="TreeView";const tx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAD/AP8A/6C9p5MAAAVLSURBVFjD7ZdbiFVlFMd/a+1znZvjXNJx8lLmkIbaSxkFEQXKZGT2YkQPUREW+RD03FMU9GaQQQm9FT1EkaVCISFRqOUlNQ1Myrk1XufMnNvMOftbPezLOXNmxkYhguiDfdjfPt/51n/9//+91nfg//EvD6mfFItFstms7v7ww7Xnh0c6fDCpWyQilnZOJ4sFm20z9TxLt7dTKk9K3cayuLPjyo7t209NTEy4tra22QGYWTRvfvHJrR/pT4c3dZmrFj2PcqWKYpiIpR58WDpWr8GcA5HgCsDhSiUb2LvHciMjKiqogDMSunLV/l0Hv3u6Awr5fJ7W1tYYQCK62blzJ+nm5rWH93zxRtuZUw/0Xx5JrRdSY2pc8sETqKowvrqPpVueAHOY71MdHsQvFrBsllRrO4N7Pyc/dolKmE1F4NBg6v5XH+1/79Z773st7enFegZiAENDQ0hLa3vq6JFHNl8bbRIVFEMBDRM1EZwozhz4Pp5zNL+/i9wP3zK09DYyr7/JqoxHNg0XfOGKQQnjnj8Hu04UipvPqvfL6nXr9t++dOnx8wMD0wEAGNAssCTt0eGMBb7jWhTcwgUh3YgggJTKuLEybmEe3zkSBosqsCABFRUGxRidhGJ+rCPx3YG3zuSu6ejAwPEZDNSDyCD0qGF+LaiGbnHOxWuds4AlA/MNcwHKrEAWwzkjoXBJhF4cU67CuakpJmeTIN7ULEjXrGZRi3HUDBt+f+WOPnL5AtVFPbSk0zVXO1CFhT6sVuMCwgCQEmgCxucCELGAhDcSBQ3uVSV8Yww8j+SzL9DpHF3qUapM4lykU3AJsAwQM46Fm+v1GFAk0NgkDq5SA2VVH6v6iDlAUNUg1YC+AFxUPFyYhNYknF55ZpMAi7MXYIlCd5i9c47Sns9IH/4hlCB0Z5i0b46m4cFaEK2xGOA1BLs+AEEQZxBS2Rp5zsKMfj0FZ05N88e0zLQhy/rnDhriz+YBC/kS8Ou8EG3SkNk0EMwxrwfydxIYoeHCUUYpexr8ThoWRlpb3TOtzdWg2fdRMYTQwA0IZjJgxO8zBu+K8oWXJOspZoYZeBpEjTaz2A9hazAwFRY4eNsvscJ8zAIFGgiYBUBY+ZwJJ53Q8uhmtmy4h0RIS8SOagL1PHzfDxoThqhizjGRz5G7No4W8/z41T66xq+GPauunM4FQCT4qGL8bMrdGx9jw3MvcCPj4uWL/HHhD/Lnz/PbgYNM5K4G4GXmWm18EMhqpDCeSvqs9+zv4s0Y3Z3d3NK9GKk6Hk9W6PGiYPWnizkAWHgEmRT42IRjpvMI2ciikEwk8EXZW00wKnVvZ0M+MwGEOnnAcoOFduMMRHE8fJZJhbRFR6t5eMAI+r6a0CcO9WReAWcHYXSLR5ODgoKLHH49BiKaphx8YnDSd/MM1xjdqJryTTXJ6FwFizlKMRgZjGcEVG5SAoOkObZ6ZRYDFw1kXhKYxZ2w06AiNyeBqJBMKl1iHHRwziWoJgDRaRBiAC0tLSRbmidPdt4y8CX+8ucLVzMtAmePHuLCgjbwHWaBHCIan4w07NWRUCJCJpNhaGSYgeNHmSqW+cZSDKeaqsnO1svZnt6ccgQzQ8JjHQD79u0jk05nToyM9p7dvWv3tmPfP7QMeEeTfCqCB8SnMYmP8UH3lLh5xiBMHEkHa6aMq05Ir1g5dOemjdvu6us7vePll8YiADED/f395HK58kNtbb+/cuDrXR8UCl+3m3ODqPX4KsH/gOkS1nfi2ZpjAigBHk7aenrGV/b2ni5OjI9FIGFmb/hHhjXUErlJX/03x19dE2bA1PxYJgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNS0wMS0yOVQxMTowMjowOSswMDowMEhEIm4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjUtMDEtMjlUMTE6MDI6MDkrMDA6MDA5GZrSAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI1LTAxLTI5VDExOjAyOjEwKzAwOjAwNz7+QAAAAABJRU5ErkJggg==",ex="/assets/power-Ch1zkzcl.png";var Zc,qp;function lx(){if(qp)return Zc;qp=1;var n={name:"vistaesqueMidnight",anchor:"rgb(64, 64, 192)",anchorVisited:"rgb(64, 64, 192)",borderDark:"rgb(21, 21, 21)",borderDarkest:"rgb(0, 0, 0)",borderLight:"rgb(32, 32, 32)",borderLightest:"rgb(128, 128, 128)",canvas:"rgb(0, 0, 0)",canvasText:"rgb(255, 255, 255)",canvasTextDisabled:"rgb(21, 21, 21)",canvasTextDisabledShadow:"rgb(128, 128, 128)",canvasTextInvert:"rgb(255, 255, 255)",checkmark:"rgb(255, 255, 255)",checkmarkDisabled:"rgb(32, 32, 32)",desktopBackground:"rgb(31, 60, 89)",flatDark:"rgb(21, 21, 21)",flatLight:"rgb(32, 32, 32)",focusSecondary:"rgb(128, 128, 128)",headerBackground:"linear-gradient(to right, rgb(81, 132, 188), rgb(100, 168, 60))",headerNotActiveBackground:"linear-gradient(to right, rgb(22, 46, 101), rgb(18, 91, 30))",headerNotActiveText:"rgb(192, 192, 192)",headerText:"rgb(255, 255, 255)",hoverBackground:"rgb(49, 106, 197)",material:"rgb(32, 32, 32)",materialDark:"rgb(22, 46, 101)",materialText:"rgb(255, 255, 255)",materialTextDisabled:"rgb(21, 21, 21)",materialTextDisabledShadow:"rgb(128, 128, 128)",materialTextInvert:"rgb(255, 255, 255)",progress:"rgb(49, 106, 197)",tooltip:"rgb(0, 0, 30)"};return Zc=n,Zc}var ax=lx();const nx=os(ax);(function(){var n,o=document.createElement("div");o.innerHTML="<div class=crt></div><div class=wb-header><div class=wb-control><span class=wb-min></span><span class=wb-max></span><span class=wb-full></span><span class=wb-close></span></div><div class=wb-drag><div class=wb-icon></div><div class=wb-title></div></div></div><div class=wb-body></div><div class=wb-n></div><div class=wb-s></div><div class=wb-w></div><div class=wb-e></div><div class=wb-nw></div><div class=wb-ne></div><div class=wb-se></div><div class=wb-sw></div></div>";function c(d,U,Z,D){d&&d.addEventListener(U,Z,D||!1)}function r(d,U){var Z=window,D=y;Z&&Z.removeEventListener(d,U,D||!1)}function h(d,U){d.stopPropagation(),U&&d.preventDefault()}function g(d,U,Z){Z=""+Z,d["_s_"+U]!==Z&&(d.style.setProperty(U,Z),d["_s_"+U]=Z)}var v=[],T=[],A={capture:!0,passive:!1},y={capture:!0,passive:!0},R,C=0,G=10,et,W,ut,P,tt,lt;function V(d,U){if(!(this instanceof V))return new V(d);if(R||M(),d){if(U){var Z=d;d=U}if(typeof d=="string")Z=d;else{var D=d.id,j=d.index,q=d.root,it=d.template;Z=Z||d.title;var p=d.icon,B=d.mount,K=d.html,_=d.url,Q=d.width,nt=d.height,J=d.minwidth,ct=d.minheight,ft=d.maxwidth,Y=d.maxheight,mt=d.autosize,dt=d.overflow,yt=d.min,Rt=d.max,_t=d.hidden,Yt=d.modal,le=d.x||(Yt?"center":0),Qt=d.y||(Yt?"center":0),ge=d.top,ie=d.left,He=d.bottom,Ee=d.right,ll=d.background,Ue=d.border,Ml=d.header,Na=d.class,Cl=d.oncreate,xe=d.onclose,al=d.onfocus,Ae=d.onblur,Ao=d.onmove,So=d.onresize,Eo=d.onfullscreen,_a=d.onmaximize,ja=d.onminimize,dl=d.onrestore,Ba=d.onhide,ua=d.onshow,wo=d.onload}}this.g=(it||o).cloneNode(!0),this.g.id=this.id=D||"winbox-"+ ++C,this.g.className="winbox"+(Na?" "+(typeof Na=="string"?Na:Na.join(" ")):"")+(Yt?" modal":""),this.g.winbox=this,this.window=this.g,this.body=this.g.getElementsByClassName("wb-body")[0],this.h=Ml||35,T.push(this),ll&&this.setBackground(ll),Ue?g(this.body,"margin",Ue+(isNaN(Ue)?"":"px")):Ue=0,Ml&&(U=this.g.getElementsByClassName("wb-header")[0],g(U,"height",Ml+"px"),g(U,"line-height",Ml+"px"),g(this.body,"top",Ml+"px")),Z&&this.setTitle(Z),p&&this.setIcon(p),B?this.mount(B):K?this.body.innerHTML=K:_&&this.setUrl(_,wo),ge=ge?at(ge,tt):0,He=He?at(He,tt):0,ie=ie?at(ie,P):0,Ee=Ee?at(Ee,P):0,Z=P-ie-Ee,p=tt-ge-He,ft=ft?at(ft,Z):Z,Y=Y?at(Y,p):p,J=J?at(J,ft):150,ct=ct?at(ct,Y):this.h,mt?((q||R).appendChild(this.body),Q=Math.max(Math.min(this.body.clientWidth+2*Ue+1,ft),J),nt=Math.max(Math.min(this.body.clientHeight+this.h+Ue+1,Y),ct),this.g.appendChild(this.body)):(Q=Q?at(Q,ft):Math.max(ft/2,J)|0,nt=nt?at(nt,Y):Math.max(Y/2,ct)|0),le=le?at(le,Z,Q):ie,Qt=Qt?at(Qt,p,nt):ge,this.x=le,this.y=Qt,this.width=Q,this.height=nt,this.s=J,this.o=ct,this.m=ft,this.l=Y,this.top=ge,this.right=Ee,this.bottom=He,this.left=ie,this.index=j,this.j=dt,this.focused=this.hidden=this.full=this.max=this.min=!1,this.onclose=xe,this.onfocus=al,this.onblur=Ae,this.onmove=Ao,this.onresize=So,this.onfullscreen=Eo,this.onmaximize=_a,this.onminimize=ja,this.onrestore=dl,this.onhide=Ba,this.onshow=ua,_t?this.hide():this.focus(),(j||j===0)&&(this.index=j,g(this.g,"z-index",j),j>G&&(G=j)),Rt?this.maximize():yt?this.minimize():this.resize().move(),I(this),(q||R).appendChild(this.g),Cl&&Cl.call(this,d)}V.new=function(d){return new V(d)},V.stack=function(){return T};function at(d,U,Z){return typeof d=="string"&&(d==="center"?d=(U-Z)/2+.5|0:d==="right"||d==="bottom"?d=U-Z:(Z=parseFloat(d),d=(""+Z!==d&&d.substring((""+Z).length))==="%"?U/100*Z+.5|0:Z)),d}function M(){R=document.body,R[W="requestFullscreen"]||R[W="msRequestFullscreen"]||R[W="webkitRequestFullscreen"]||R[W="mozRequestFullscreen"]||(W=""),ut=W&&W.replace("request","exit").replace("mozRequest","mozCancel").replace("Request","Exit"),c(window,"resize",function(){Xt(),xt()}),c(R,"mousedown",function(){lt=!1},!0),c(R,"mousedown",function(){if(!lt){var d=T.length;if(d)for(--d;0<=d;d--){var U=T[d];if(U.focused){U.blur();break}}}}),Xt()}function I(d){At(d,"drag"),At(d,"n"),At(d,"s"),At(d,"w"),At(d,"e"),At(d,"nw"),At(d,"ne"),At(d,"se"),At(d,"sw"),c(d.g.getElementsByClassName("wb-min")[0],"click",function(U){h(U),d.min?d.restore().focus():d.minimize()}),c(d.g.getElementsByClassName("wb-max")[0],"click",function(U){h(U),d.max?d.restore().focus():d.maximize().focus()}),W?c(d.g.getElementsByClassName("wb-full")[0],"click",function(U){h(U),d.fullscreen().focus()}):d.addClass("no-full"),c(d.g.getElementsByClassName("wb-close")[0],"click",function(U){h(U),d.close()||(d=null)}),c(d.g,"mousedown",function(){lt=!0},!0),c(d.body,"mousedown",function(){d.focus()},!0)}function F(d){v.splice(v.indexOf(d),1),xt(),d.removeClass("min"),d.min=!1,d.g.title=""}function xt(){for(var d=v.length,U={},Z={},D=0,j;D<d;D++)j=v[D],j=j.left+":"+j.top,Z[j]?Z[j]++:(U[j]=0,Z[j]=1);D=0;for(var q,it;D<d;D++)j=v[D],q=j.left+":"+j.top,it=Math.min((P-j.left-j.right)/Z[q],250),j.resize(it+1|0,j.h,!0).move(j.left+U[q]*it|0,tt-j.bottom-j.h,!0),U[q]++}function At(d,U){function Z(_){if(h(_,!0),d.focus(),U==="drag"){if(d.min){d.restore();return}if(!d.g.classList.contains("no-max")){var Q=Date.now(),nt=Q-K;if(K=Q,300>nt){d.max?d.restore():d.maximize();return}}}d.min||(R.classList.add("wb-lock"),(it=_.touches)&&(it=it[0])?(_=it,c(window,"touchmove",D,y),c(window,"touchend",j,y)):(c(window,"mousemove",D,y),c(window,"mouseup",j,y)),p=_.pageX,B=_.pageY)}function D(_){h(_),it&&(_=_.touches[0]);var Q=_.pageX;_=_.pageY;var nt=Q-p,J=_-B,ct=d.width,ft=d.height,Y=d.x,mt=d.y,dt;if(U==="drag"){if(d.g.classList.contains("no-move"))return;d.x+=nt,d.y+=J;var yt=dt=1}else{if(U==="e"||U==="se"||U==="ne"){d.width+=nt;var Rt=1}else(U==="w"||U==="sw"||U==="nw")&&(d.x+=nt,d.width-=nt,yt=Rt=1);if(U==="s"||U==="se"||U==="sw"){d.height+=J;var _t=1}else(U==="n"||U==="ne"||U==="nw")&&(d.y+=J,d.height-=J,dt=_t=1)}Rt&&(d.width=Math.max(Math.min(d.width,d.m,P-d.x-d.right),d.s),Rt=d.width!==ct),_t&&(d.height=Math.max(Math.min(d.height,d.l,tt-d.y-d.bottom),d.o),_t=d.height!==ft),(Rt||_t)&&d.resize(),yt&&(d.max&&(d.x=(Q<P/3?d.left:Q>P/3*2?P-d.width-d.right:P/2-d.width/2)+nt),d.x=Math.max(Math.min(d.x,d.j?P-30:P-d.width-d.right),d.j?30-d.width:d.left),yt=d.x!==Y),dt&&(d.max&&(d.y=d.top+J),d.y=Math.max(Math.min(d.y,d.j?tt-d.h:tt-d.height-d.bottom),d.top),dt=d.y!==mt),(yt||dt)&&(d.max&&d.restore(),d.move()),(Rt||yt)&&(p=Q),(_t||dt)&&(B=_)}function j(_){h(_),R.classList.remove("wb-lock"),it?(r("touchmove",D),r("touchend",j)):(r("mousemove",D),r("mouseup",j))}var q=d.g.getElementsByClassName("wb-"+U)[0];if(q){var it,p,B,K=0;c(q,"mousedown",Z,A),c(q,"touchstart",Z,A)}}function Xt(){var d=document.documentElement;P=d.clientWidth,tt=d.clientHeight}n=V.prototype,n.mount=function(d){return this.unmount(),d.i||(d.i=d.parentNode),this.body.textContent="",this.body.appendChild(d),this},n.unmount=function(d){var U=this.body.firstChild;if(U){var Z=d||U.i;Z&&Z.appendChild(U),U.i=d}return this},n.setTitle=function(d){var U=this.g.getElementsByClassName("wb-title")[0];d=this.title=d;var Z=U.firstChild;return Z?Z.nodeValue=d:U.textContent=d,this},n.setIcon=function(d){var U=this.g.getElementsByClassName("wb-icon")[0];return g(U,"background-image","url("+d+")"),g(U,"display","inline-block"),this},n.setBackground=function(d){return g(this.g,"background",d),this},n.setUrl=function(d,U){var Z=this.body.firstChild;return Z&&Z.tagName.toLowerCase()==="iframe"?Z.src=d:(this.body.innerHTML='<iframe src="'+d+'"></iframe>',U&&(this.body.firstChild.onload=U)),this},n.focus=function(d){if(d===!1)return this.blur();if(!this.focused){if(d=T.length,1<d)for(var U=1;U<=d;U++){var Z=T[d-U];if(Z.focused){Z.blur(),T.push(T.splice(T.indexOf(this),1)[0]);break}}g(this.g,"z-index",++G),this.index=G,this.addClass("focus"),this.focused=!0,this.onfocus&&this.onfocus()}return this},n.blur=function(d){return d===!1?this.focus():(this.focused&&(this.removeClass("focus"),this.focused=!1,this.onblur&&this.onblur()),this)},n.hide=function(d){if(d===!1)return this.show();if(!this.hidden)return this.onhide&&this.onhide(),this.hidden=!0,this.addClass("hide")},n.show=function(d){if(d===!1)return this.hide();if(this.hidden)return this.onshow&&this.onshow(),this.hidden=!1,this.removeClass("hide")},n.minimize=function(d){return d===!1?this.restore():(et&&bt(),this.max&&(this.removeClass("max"),this.max=!1),this.min||(v.push(this),xt(),this.g.title=this.title,this.addClass("min"),this.min=!0,this.focused&&(this.blur(),Ct()),this.onminimize&&this.onminimize()),this)};function Ct(){var d=T.length;if(d)for(--d;0<=d;d--){var U=T[d];if(!U.min){U.focus();break}}}n.restore=function(){return et&&bt(),this.min&&(F(this),this.resize().move(),this.onrestore&&this.onrestore()),this.max&&(this.max=!1,this.removeClass("max").resize().move(),this.onrestore&&this.onrestore()),this},n.maximize=function(d){return d===!1?this.restore():(et&&bt(),this.min&&F(this),this.max||(this.addClass("max").resize(P-this.left-this.right,tt-this.top-this.bottom,!0).move(this.left,this.top,!0),this.max=!0,this.onmaximize&&this.onmaximize()),this)},n.fullscreen=function(d){if(this.min&&(F(this),this.resize().move()),!et||!bt())this.body[W](),et=this,this.full=!0,this.onfullscreen&&this.onfullscreen();else if(d===!1)return this.restore();return this};function bt(){if(et.full=!1,document.fullscreen||document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)return document[ut](),!0}n.close=function(d){if(this.onclose&&this.onclose(d))return!0;this.min&&F(this),T.splice(T.indexOf(this),1),this.unmount(),this.g.remove(),this.g.textContent="",this.g=this.body=this.g.winbox=null,this.focused&&Ct()},n.move=function(d,U,Z){return d||d===0?Z||(this.x=d?d=at(d,P-this.left-this.right,this.width):0,this.y=U?U=at(U,tt-this.top-this.bottom,this.height):0):(d=this.x,U=this.y),g(this.g,"left",d+"px"),g(this.g,"top",U+"px"),this.onmove&&this.onmove(d,U),this},n.resize=function(d,U,Z){return d||d===0?Z||(this.width=d?d=at(d,this.m):0,this.height=U?U=at(U,this.l):0,d=Math.max(d,this.s),U=Math.max(U,this.o)):(d=this.width,U=this.height),g(this.g,"width",d+"px"),g(this.g,"height",U+"px"),this.onresize&&this.onresize(d,U),this},n.addControl=function(d){var U=d.class,Z=d.image,D=d.click;d=d.index;var j=document.createElement("span"),q=this.g.getElementsByClassName("wb-control")[0],it=this;return U&&(j.className=U),Z&&g(j,"background-image","url("+Z+")"),D&&(j.onclick=function(p){D.call(this,p,it)}),q.insertBefore(j,q.childNodes[d||0]),this},n.removeControl=function(d){return(d=this.g.getElementsByClassName(d)[0])&&d.remove(),this},n.addClass=function(d){return this.g.classList.add(d),this},n.removeClass=function(d){return this.g.classList.remove(d),this},n.toggleClass=function(d){return this.g.classList.contains(d)?this.removeClass(d):this.addClass(d)},window.WinBox=V}).call(void 0);const kl=WinBox,ix="/assets/monitor-CmERaNKN.gif",ux=()=>{const[n,o]=k.useState(0),c=k.useRef(null);return k.useEffect(()=>{let r=setTimeout(()=>{let h=Date.now();c.current=setInterval(()=>{const g=Date.now()-h,v=Math.min(g/4400*100,100);o(v),v===100&&(clearInterval(c.current),setTimeout(()=>o(100),500))},30)},300);return()=>{clearTimeout(r),clearInterval(c.current)}},[]),b.jsx("div",{className:"loading",children:b.jsxs("div",{className:"loading_elements",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[b.jsx("img",{src:ix,className:"monitor",alt:"~X:/WEBSITE/ > BOOTING UP..."}),b.jsx("br",{}),b.jsx("div",{className:"loading-bar-container",style:{width:240,height:18,background:"#222",borderRadius:1,overflow:"hidden",marginTop:24,border:"6px solid #000",boxShadow:"0 0 0 2px white"},children:b.jsx("div",{className:"loading-bar",style:{display:"flex",margin:0,width:`${n}%`,height:"100%",background:`repeating-linear-gradient(
        90deg,
        #fff 0,
        #fff 20px,
        #000 20px,
        #000 32px
      )`,transition:"width 0.1s linear"}})})]})})},ox="/assets/desktop_about-BSolwGv2.png",rx="/assets/desktop_contact-CzjDK447.png",cx="/assets/desktop_donate-DvEemoyz.png",sx="/assets/desktop_gallery-BrU31pCN.png",fx="/assets/desktop_videos-CZQy56j_.png",dx="/assets/desktop-about-5UQNFmge.gif",hx="/assets/desktop-contact-BZXH_09O.gif",px="/assets/desktop-donate-DQ3hbULG.gif",mx="/assets/desktop-gallery-BBDxh9IK.gif",gx="/assets/desktop-videos-sxat4MtT.gif",bx="/assets/steam-dEuQyfPr.png",yx="/assets/money-spin-BlzhA9B2.gif",vx="/assets/cashapp-Cjq2UZZq.png",xx="/assets/paypal-Dx-0PIKQ.png",Ax="/assets/tornada-BnYzoTfG.png",Sx="/assets/notepad-mDHfH400.png",Ex="/assets/info-BTKMA8dZ.png",wx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAAQMAAADOtka5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAADUExURQAm/0mmUXMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA2SURBVHja7cEBAQAAAIIg/69uSEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwbggAAAWN1UKQAAAAASUVORK5CYII=",Tx="/assets/youtube-Bp2k9DZd.png",Dx="/assets/xitter-DLEKJHi9.png",Rx="/assets/instagram-BF4FSZOC.png",Ox="/assets/newgrounds-CgzA7QG0.png",Mt={desktop_about:ox,desktop_contact:rx,desktop_donate:cx,desktop_gallery:sx,desktop_videos:fx,desktop_about_gif:dx,desktop_contact_gif:hx,desktop_gallery_gif:mx,desktop_donate_gif:px,desktop_videos_gif:gx,tornada:Ax,notepad:Sx,info:Ex,pager:wx,youtube:Tx,xitter:Dx,instagram:Rx,newgrounds:Ox,steam:bx,cashapp:vx,paypal:xx,moneyspin:yx},zx="/assets/BG-DNG1OH_1.gif",kx="/assets/BG2-afUp6XXV.gif",Mx="/assets/BG3-D3gry5fr.gif",Cx="/assets/BG4-niHp1bdb.gif",Nx="/assets/BG5-3b4TfM3X.gif",_x="/assets/BG6-B2XIkXXV.gif",Tn={background1:zx,background2:kx,background3:Mx,background4:Cx,background5:Nx,background6:_x},jx="/assets/aboutem-COgL9iQm.gif",Xp=["jack of all trades, master at some","self-driven creative powerhouse","big boy with small dreams","just a guy tbh","you're doing a great job","set the scene. 86 degrees.","5'10 stand on my money now I'm 5'6"],Bx=Xp[Math.floor(Math.random()*Xp.length)],Hx=()=>b.jsx(b.Fragment,{children:b.jsxs("div",{style:{width:"100%",height:"100%",padding:0,margin:0},children:[b.jsxs("div",{className:"about-me",children:[b.jsx("span",{className:"about-header",children:" SYSTEM > ABOUT"}),b.jsx("div",{className:"about-split"}),b.jsxs("div",{className:"about-content",children:[b.jsxs("span",{className:"about-tagline",style:{display:"flex",alignItems:"center"},children:[b.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[b.jsx("span",{className:"ECKS-NAME",children:"ECKS!"}),b.jsxs("span",{className:"about-quote",style:{marginTop:2},children:['"',Bx,'"']})]}),b.jsx("img",{src:jx,alt:"ECKS",className:"about-image",style:{right:0,marginLeft:60,maxWidth:172,alignSelf:"flex-start"}})]}),b.jsx("div",{className:"about-split"}),b.jsx("p",{className:"about-bio",style:{width:"95%"},children:"Nice to meet ya! I am a self-taught creative who finds retreat in curiously throwing things together in their free time. Over the last several years I have worked on various projects with my experiences in video editing, graphic design, VFX, and occasionally making music here and there."}),b.jsx("p",{className:"about-bio",style:{width:"95%"},children:"This site aims to be an archive of some of my best scraps, loosely stitched together in a way that can at least be presentable. Everything seen on here was formed from a collection of flickering synapses and contempt for predictability."}),b.jsxs("p",{className:"about-bio",style:{width:"95%"},children:["Some of my other work can be found at ",b.jsx("a",{href:"https://tornada/net",target:"_blank",children:b.jsx("span",{className:"bigdeal",children:"Tornada"})})," - an animation supergroup with an all-star lineup of me and my relatives."]}),b.jsx("p",{className:"about-bio",style:{width:"95%"},children:"At the end of the day, I simply just create the stuff that I wish to see and experience. To me that's the only compass that really makes sense."}),b.jsxs("p",{className:"about-bio",style:{width:"95%"},children:["Anyone hoping to get in touch (or just say hi) can reach me at ",b.jsx("a",{href:"mailto:spam@3cks.net",target:"_blank",rel:"noopener noreferrer",children:b.jsx("span",{className:"bigdeal",children:"spam@3cks.net"})})," or via the links listed on here. I'm open to work and/or whatever questions you may have."]})]})]}),b.jsx("span",{className:"bottom-tag",style:{marginTop:24,fontFamily:"Sans Nouveaux",fontSize:"8px"},children:"- 🅮 ECKS 2025 -"})]})}),Ux="/assets/Featured-VHS-Bk_2dzNq.gif",ki=[{title:"THE COLOR BROTHERS",description:"Four colorful boys and their dad.",featuring:"ColeDawg",featuring_link:"https://www.instagram.com/coledawg2001/"}],Vp=[{id:0,title:"BAKLAFA",window_title:"BAKLAVA-IS-FUCKING-AWESOME",alt_title:"BAKLAVA is FUCKING AWESOME",url:"https://iframe.mediadelivery.net/embed/393622/23432bf3-b371-4a99-b45f-988a094e0d38?autoplay=true&loop=false&muted=false&preload=true&responsive=true",date:"06-2025",description:`Fresh hot two-pack of some commissions I did in June 2025... 
 First one is a promo video for @ciorecords’ BAKLAVA mixtape. Second one is for an artist named FuckingAwesome who wanted something more specific (quick and flashy with clips from Persona 3, L4D2, Panty n Stocking, and Dexter) and I was happy to oblige with both.`,thumbnail:"./thumbnails/baklafa.jpg",isYouTube:!1},{id:1,title:"THE COLOR BROTHERS",window_title:"THE-COLOR-BROTHERS",alt_title:"COLOR BROTHERS",url:"https://iframe.mediadelivery.net/embed/393622/b01f3be6-5a68-445e-9a39-a4f59d2ec845?autoplay=true&loop=false&muted=false&preload=true&responsive=true",source:"https://www.youtube.com/watch?v=KAqmREHqTmg",date:"03-23-2025",description:" Segment I did for Tornada’s “Four of a Kind.” This one was a long time in the making. We had already been trading around this idea for years before being blessed with the time and energy to shoot it. Many strings were pulled in one week but it led to some of the most fun I’ve ever had putting something together. We got plenty of B-Roll (of us asking people in public for happy meals) that I wanna put up eventually.",thumbnail:"./thumbnails/colorbros.jpg",isYouTube:!1},{id:2,title:"HOT THEM SUMMER!",window_title:"HOT-THEM-SUMMER",alt_title:"HOT THEM SUMMER!",url:"https://iframe.mediadelivery.net/embed/393622/2acc6b72-6566-40f0-abb7-b2716fbc272d?autoplay=true&loop=false&muted=false&preload=true&responsive=true",source:"",date:"11-24-2022",description:"Lyric video I did for my homegirl Lambs. Peace to bluvelv who is on the song as well.",thumbnail:"./thumbnails/lambs.jpg",isYouTube:!1},{id:3,title:"KNOWLEDGEGOD!",window_title:"KNOWLEDGE-GOD",alt_title:"KNOWLEDEGOD!",url:"https://iframe.mediadelivery.net/embed/393622/5d9bc1aa-9bc8-42f8-bce1-931d46f8ba8c?autoplay=true&loop=false&muted=false&preload=true&responsive=true",source:"https://www.youtube.com/watch?v=sziewA2jzEY",date:"12-31-2022",description:'Segment I did for Tornada’s "Two of a Kind." Was asked to do a music video and this is what I sent back. You can prolly tell it was my first time datamoshing.',thumbnail:"./thumbnails/knowledgegod.jpg",isYouTube:!1},{id:4,title:"RIDETOSEVENELEVEN",window_title:"MC-RIDE-GOES-TO-THE-STORE",alt_title:"MC RIDE GOES TO THE STORE",url:"https://www.youtube.com/embed/DKDvPdll1D4",date:"11-24-2019",description:"A fan favorite? Not sure. Made this in 20 minutes on a Sunday and still get asked about it.",thumbnail:"./thumbnails/ride.jpg",isYouTube:!0},{id:5,title:"FED UP! (IN VR)",window_title:"FED-UP-IN-VR",alt_title:"FEDUP!INVR!",url:"https://www.youtube.com/embed/9m8US6X9gWs",date:"08-31-2021",description:"This was one of my first times making money off editing. Threw this one together for Joy Way, the team behind the game being played. They used this video for promo and I was explicitly told to avoid using copyrighted music, but thankfully artist Bazanji came through with a plate of dense, royalty-free raps. Not my usual preferences but at least the client was happy. Honestly besides this I could NOT tell you the last time I played a VR game.",thumbnail:"./thumbnails/stride.jpg",isYouTube:!0},{id:6,title:"CHOPPA WEDNESDAY!",window_title:"CHOPPA-WEDNESDAY",alt_title:"CHOPPA WEDNESDAY",url:"https://www.youtube.com/embed/G6ik_SLRulQ",date:"10-07-2020",description:"Got really into Team Fortress 2 (and Atlanta trap) during this era and made a few videos like this. I think they all look rougher around the edges now but this one is still my favorite. Was planning to do make 2-3 more but my SFM stopped working lol",thumbnail:"./thumbnails/choppa.jpg",isYouTube:!0},{id:7,title:"SAGGY AND SOGGY",window_title:"SAGGY-AND-SOGGY-SODIUM-CONNECTIONS",alt_title:"SAGGY AND SOGGY - SODIUM CONNECTIONS",url:"https://www.youtube.com/embed/RnXMoazSLo4",date:"05-15-2020",description:'This ones pretty old but still means a lot to me. Originally wrote the first draft of the script for this in 2018 after a PlayStation party with a friend where we were discussing what a funny name for a cartoon would be and we decided on "Saggy and Soggy." I wanted to write something I wasnt used to writing before, an actual cartoon longer than 30 seconds. Looking at it now my writing was debatably as goofy as it is now but for different reasons. I had cutaway gags in this mix at some point. During a perfect time, Tornada just so happened to also form at this time and after a few months, fellow videomaster and partner-in-crime Pity Fowl offered to take over. He showed a lot more love to this project than I had originally and this is ultimately what led to his extended involvement. He finished the script and animated most of it while I offered a music video segment which was my first time using After Effects if you couldnt already tell along with lending some quick lines.',thumbnail:"./thumbnails/sagsog.jpg",isYouTube:!0},{id:8,title:"RIDETOSEVENELEVEN",window_title:"RIDETOSEVENELEVEN",alt_title:"MC RIDE GOES TO THE STORE",url:"https://www.youtube.com/embed/DKDvPdll1D4",date:"11-24-2019",description:"A fan favorite? Not sure. Made this in 20 minutes on a Sunday and still get asked about it.",thumbnail:"./thumbnails/ride.jpg",isYouTube:!0}],$x=b.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",style:{marginLeft:4,verticalAlign:"middle"},children:b.jsx("path",{fill:"#FF0000",d:"M21.8 8.001a2.75 2.75 0 0 0-1.94-1.94C18.19 6 12 6 12 6s-6.19 0-7.86.061a2.75 2.75 0 0 0-1.94 1.94A28.6 28.6 0 0 0 2 12a28.6 28.6 0 0 0 .2 3.999 2.75 2.75 0 0 0 1.94 1.94C5.81 18 12 18 12 18s6.19 0 7.86-.061a2.75 2.75 0 0 0 1.94-1.94A28.6 28.6 0 0 0 22 12a28.6 28.6 0 0 0-.2-3.999zM10 15V9l5 3-5 3z"})}),Lx=b.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",style:{marginLeft:4,verticalAlign:"middle"},children:b.jsx("path",{fill:"#888",d:"M10 17l5-5-5-5v10z"})}),Gx=()=>window.innerWidth<768?"60%":"400px",Yx=()=>{const n=o=>{const c=document.createElement("div");new kl({title:`~/X/${o.window_title}`,icon:Mt.desktop_videos,width:Math.min(500,window.innerWidth*.9)+"px",height:Gx(),x:"center",y:"center",background:"#000",mount:c,setBackground:r=>console.log(`Background set to ${r}`),onClose:()=>{c.remove()}}),c.innerHTML=`
    <div>
    <div style="position:relative; padding-top:56.25%; border-bottom: 3px solid #FDFDFD"><iframe src="${o.url}" loading="lazy" style="border:0;position:absolute;top:0;height:100%;width:100%;"></iframe></div>
    </div>
    <div class="video-description" style="padding: 1em; border-top: 4px ridge #222; line-height: 1; background: #141414; width:text-align: center;">
    <h2 style="color: #FDFDFD; margin: 0.3em 0;">${o.alt_title}</h2>
    ${o.date} - <a href="${o.source}" target="_blank" style="color: #505050; text-decoration: none; font-size: 14px; margin-top: 8px;">Watch Original Here</a>
    
    <p style="color: #FDFDFD; padding-bottom: 0.5em;>Description:</p>
    <p style="color: #FDFDFD; whiteSpace: 'pre-line'; padding-bottom: 0.5em; line-height: 1em; border: 2px solid #FDFDFD;">${o.description}</p>
    </div>
    `};return b.jsxs(b.Fragment,{children:[b.jsxs("div",{className:"videos-header",style:{color:"#FDFDFD",fontSize:24,margin:0,overflowX:"visible",overflowY:"hidden",display:"flex",marginTop:-8,whiteSpace:"nowrap",marginBottom:16},children:[b.jsxs("div",{style:{fontFamily:"Pixeloid Sans",flexDirection:"column",display:"flex",minWidth:128,borderBottom:"2px solid black",width:"40%",paddingRight:30},children:[b.jsx("p",{className:"videos-header-title",style:{width:"100px",fontFamily:"Pixeloid Sans Bold",fontSize:40,marginLeft:8},children:"VIDEOS"}),b.jsxs("p",{className:"videos-header-subtitle",style:{fontSize:14,width:"168px",lineHeight:1,marginTop:-8,marginLeft:12,marginRight:8,textWrap:"wrap"},children:["I made a few of these here and there.. and you can watch em on here or ",b.jsx("a",{href:"https://youtube.com/ecksposting",target:"_blank",children:"YouTube!"})]})]}),b.jsxs("div",{className:"videos-featured",style:{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",marginTop:1,padding:4,borderRadius:0,borderBottom:"2px solid black",maxWidth:480,cursor:"pointer",lineHeight:1},onClick:()=>n(Vp[1]),children:[b.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[b.jsx("img",{src:Ux,alt:ki[0].title,style:{width:120,height:140,objectFit:"contain",paddingRight:8,marginTop:4}}),b.jsxs("span",{className:"featured-video-title",style:{paddingLeft:4,paddingRight:16,color:"white",fontSize:26,lineHeight:1.25,fontWeight:"bold",display:"block",width:"280px",textWrap:"wrap"},children:[b.jsx("span",{children:"-  FEATURED "}),b.jsx("br",{}),b.jsx("span",{children:ki[0].title})]})]}),b.jsxs("span",{style:{color:"white",fontSize:14,display:"block",marginTop:12,marginLeft:2,lineHeight:1},children:[ki[0].description," Art done by ",b.jsxs("a",{href:ki[0].featuring_link,target:"_blank",children:["@",ki[0].featuring]})]})]})]}),b.jsx("div",{className:"videos-grid",style:{display:"flex",flexWrap:"wrap",width:"95%",textAlign:"center",gap:"12px"},children:Vp.filter(o=>o.id!==8).map(o=>b.jsxs("div",{className:"my-videos",style:{width:180,border:"2px ridge #222",borderRadius:1,height:"100%",margin:"auto",background:"white",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:"pointer",overflow:"hidden"},title:o.title,onClick:()=>n(o),children:[b.jsx("img",{src:o.thumbnail,alt:o.alt_title,loading:"lazy",style:{width:"90%",height:"90%",display:"block",border:"2px solid #222"}}),b.jsxs("span",{style:{color:"black",fontWeight:"bold",fontSize:10,textAlign:"center",margin:"auto",padding:"6px 4px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",height:"100%"},children:[o.title,o.isYouTube?$x:Lx]})]},o.id))}),b.jsx("span",{className:"bottom-tag",style:{marginTop:16,fontFamily:"Sans Nouveaux"},children:"- press play. trust the process. -"}),b.jsx("span",{style:{textAlign:"center"},children:"..."})]})},Qx=[{src:"/gallery/2025-baklava-mockup-thumb.jpg",alt:"BAKLAVA-AD-MOCKUP",year:"2025",full:"/gallery/2025-baklava-mockup.jpg"},{src:"/gallery/2025-baklava-blend.jpg",alt:"BAKLAVA.BLEND",year:"2025",full:"/gallery/2025-baklava-blend.jpg"},{src:"/gallery/2025-nadathumb.jpg",alt:"TOM-Y-JERRY",year:"2025",full:"/gallery/2025-nada.gif"},{src:"/gallery/2025-banner.jpg",alt:"BANNER",year:"2025",full:"/gallery/2025-banner.jpg"},{src:"/gallery/2025_crankdat.jpg",alt:"CRANKDAT",year:"2025",full:"/gallery/2025_crankdat.jpg"},{src:"/gallery/2025-uhuhuh.jpg",alt:"UHUHUH",year:"2025",full:"/gallery/2025-uhuhuh.jpg"},{src:"/gallery/2025-vinyl.jpg",alt:"VINYL",year:"2025",full:"/gallery/2025-vinyl.jpg"},{src:"/gallery/2025_bro-has-kickassia.jpg",alt:"BRO-HAS-KICKASSIA",year:"2025",full:"/gallery/2025_bro-has-kickassia.jpg"},{src:"/gallery/2024-HBO.jpg",alt:"HBO",year:"2024",full:"/gallery/2024-HBO.jpg"},{src:"/gallery/2024-firestar.jpg",alt:"FIRESTAR",year:"2024",full:"/gallery/2024-firestar.jpg"},{src:"/gallery/2024-threebeersdeep.jpg",alt:"THREEBEERSDEEP",year:"2024",full:"/gallery/2024-threebeersdeep.jpg"},{src:"/gallery/2024-sagsog.jpg",alt:"SAGSOG",year:"2024",full:"/gallery/2024-sagsog.jpg"},{src:"/gallery/2024-babygreen.jpg",alt:"BABYGREENONEARTH",year:"2024",full:"/gallery/2024-babygreen.jpg"},{src:"/gallery/2023-mach-stoney.jpg",alt:"MACH-STONEY",year:"2023",full:"/gallery/2023-mach-stoney.jpg"},{src:"/gallery/2023-setup.jpg",alt:"SETUP",year:"2023",full:"/gallery/2023-setup.jpg"},{src:"/gallery/2022-waffle.jpg",alt:"WH",year:"2022",full:"/gallery/2022-waffle.jpg"}],qx=()=>{const n=o=>{const c=document.createElement("div");c.style.background="#000",c.style.display="flex",c.style.alignItems="center",c.style.justifyContent="center",c.style.height="100%";const r=new window.Image;r.src=o.full,r.alt=o.alt,r.style.width="100%",r.style.maxWidth="600px",r.style.height="auto",r.style.display="flex",r.style.margin="auto",r.onload=()=>{const h=Math.min(r.naturalWidth,window.innerWidth*.33),g=Math.min(r.naturalHeight,window.innerHeight*.33),v=Math.max(220,h),T=Math.max(120,g);c.innerHTML="",c.appendChild(r),new kl({title:`~/X/GALLERY/IMAGES/${o.year}/${o.alt}`,icon:Mt.desktop_gallery,background:"#000",width:`${v}px`,height:`${T}px`,x:"center",y:"center",mount:c,setBackground:()=>{},onClose:()=>c.remove(),noResize:window.innerWidth<600,noMax:window.innerWidth<600,noMin:window.innerWidth<600,noFull:window.innerWidth<600})}};return b.jsxs(b.Fragment,{children:[b.jsxs("div",{className:"gallery-header",style:{color:"black",fontSize:40,margin:4},children:[b.jsx("p",{className:"gallery-header-title",children:"THE GALLERY"}),b.jsx("p",{className:"gallery-header-subtitle",style:{fontSize:14,lineHeight:1},children:"A lil archive of photos I have taken, graphics I have made, photos of my record collection, various side-quests and more. Double click an image to view it in full size."}),b.jsx("div",{className:"line"})]}),b.jsxs("div",{className:"gallery-grid",style:{width:"98%",display:"flex",flexWrap:"wrap",gap:16,justifyContent:"center",marginBottom:16},children:[Qx.map((o,c)=>b.jsx("div",{className:"gallery-image-frame",style:{aspectRatio:"auto",background:"#111",border:"2px ridge #222",margin:"auto",padding:4,display:"flex",objectFit:"cover",alignItems:"center",justifyContent:"center",maxWidth:200,maxHeight:200,cursor:"pointer"},onDoubleClick:()=>n(o),title:o.alt,children:b.jsx("img",{src:o.src,alt:o.alt,loading:"lazy",style:{background:"black",aspectRatio:"auto",maxWidth:"200px",maxHeight:"200px",width:"auto",height:"auto",display:"inline"}})},c)),b.jsx("br",{}),b.jsx("span",{className:"gallery-bottom-tag",style:{fontFamily:"Sans Nouveaux",marginTop:18},children:"- one shot. cut. print. perfect. -"})]})]})},Xx=()=>b.jsxs("div",{style:{color:"black",fontSize:20,overflow:"hidden",marginLeft:12,marginRight:12,marginTop:12,paddingBottom:4,fontFamily:"Sans Nouveaux",textRendering:"optimizeLegibility"},children:[b.jsx("span",{style:{fontSize:14,marginTop:16,marginBottom:8},children:"Email:"}),b.jsx("a",{href:"mailto:spam@3cks.net",target:"_blank",children:b.jsx("div",{className:"email",style:{display:"flex",border:"2px solid #222",fontWeight:"bold",textAlign:"center",alignContent:"center",paddingTop:12,marginBottom:16,paddingBottom:16,marginTop:8,lineHeight:1},children:b.jsxs("span",{style:{margin:"0 auto"},children:[b.jsx("img",{src:Mt.desktop_contact,style:{width:24,height:24,marginRight:4}})," - spam@3cks.net"]})})}),b.jsx("span",{style:{fontSize:14,marginTop:16},children:"Socials:"}),b.jsxs("div",{style:{marginBottom:32,alignContent:"center",textAlign:"center",display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gridTemplateRows:"repeat(2, auto)",listStyleType:"disc",margin:"8px auto",lineHeight:1,fontSize:14,border:"2px solid #222"},children:[b.jsx("span",{className:"icon",children:b.jsx("a",{href:"https://youtube.com/ecksposting",target:"_blank",children:b.jsx("img",{src:Mt.youtube,alt:"YouTube",style:{width:48,height:48}})})}),b.jsx("span",{className:"icon",children:b.jsx("a",{href:"https://instagram.com/ecksposting",target:"_blank",children:b.jsx("img",{src:Mt.instagram,alt:"Instagram",style:{width:48,height:48}})})}),b.jsx("span",{className:"icon",children:b.jsx("a",{href:"https://twitter.com/ecksposting",target:"_blank",children:b.jsx("img",{src:Mt.xitter,alt:"Xitter",style:{width:48,height:48}})})}),b.jsx("span",{className:"icon",children:b.jsx("a",{href:"https://steamcommunity.com/ecksposting",target:"_blank",children:b.jsx("img",{src:Mt.steam,alt:"Steam",style:{width:48,height:48}})})}),b.jsx("span",{className:"icon",children:b.jsx("a",{href:"https://eckslol.newgrounds.com",target:"_blank",children:b.jsx("img",{src:Mt.newgrounds,alt:"Newgrounds",style:{width:48,height:48}})})})]}),b.jsx("span",{className:"bottom-tag",style:{marginTop:32},children:"- your move. -"})]}),Vx=()=>b.jsx(b.Fragment,{children:b.jsxs("div",{style:{color:"black",fontSize:24,overflow:"hidden",margin:12,paddingBottom:4,fontFamily:"Sans Nouveaux"},children:[b.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:16},children:[b.jsx("img",{src:Mt.moneyspin,alt:"Donate",style:{width:96,height:128,objectFit:"contain",marginTop:8}}),b.jsxs("div",{style:{flex:1,lineHeight:1,fontSize:12,marginBottom:8},children:[b.jsx("span",{children:"Paypal:"}),b.jsx("a",{href:"https://paypal.me/ecksposting",target:"_blank",children:b.jsx("div",{className:"paypal-button",style:{display:"flex",border:"3px ridge #222",fontWeight:"bold",textAlign:"center",alignItems:"center",padding:8,marginBottom:8,marginTop:8,lineHeight:1,fontSize:12},children:b.jsx("span",{style:{margin:"0 auto"},children:"/ecksposting"})})}),b.jsx("span",{children:"Cashapp:"}),b.jsx("a",{href:"https://cash.app/$eckslol",target:"_blank",children:b.jsx("div",{className:"cashapp-button",style:{display:"flex",border:"3px ridge #222",fontWeight:"bold",textAlign:"center",alignItems:"center",padding:8,marginBottom:24,marginTop:8,lineHeight:1,fontSize:12},children:b.jsx("span",{style:{margin:"0 auto"},children:"$eckslol"})})})]})]}),b.jsx("span",{className:"bottom-tag",children:"- preciate it boss. -"})]})}),Zx=()=>b.jsx(b.Fragment,{children:b.jsxs("div",{className:"notepad",style:{fontSize:8,fontFamily:"Sans Nouveaux",overflow:"hidden",paddingLeft:16,paddingRight:16,textRendering:"optimizeLegibility",lineHeight:1.3},children:[b.jsxs("p",{children:[b.jsx("span",{className:"notepad-header",children:"ADMIN"}),b.jsx("br",{}),b.jsx("span",{children:"Like most of what you see on here, this website was designed and built by the homeboy who's running it. He couldn't do it however without the help of:"})]}),b.jsxs("p",{className:"links",style:{fontSize:8,lineHeight:1.5},children:[b.jsx("span",{className:"notepad-header",children:"CODE"}),b.jsxs("span",{children:[b.jsx("br",{}),b.jsx("a",{href:"https://nextapps-de.github.io/winbox/",target:"_blank",children:"Winbox.js"})," | Window manager",b.jsx("br",{}),b.jsx("a",{href:"https://github.com/react95-io/React95",target:"_blank",children:"React95"})," | UI component library",b.jsx("br",{}),b.jsx("a",{href:"https://jdan.github.io/98.css/",target:"_blank",children:"98.css"})," | CSS for additional UI",b.jsx("br",{}),b.jsx("a",{href:"https://animate.style/",target:"_blank",children:"animate.css"})," | CSS animations",b.jsx("br",{}),b.jsx("a",{href:"https://oudkee.neocities.org/tutorials/tutcrt",target:"_blank",children:"@oudkee"})," | CRT Effect"]})]}),b.jsx("span",{className:"notepad-header",children:"ART"}),b.jsx("br",{}),b.jsxs("span",{children:["Loading screen art by ",b.jsx("a",{href:"https://x.com/BappyKG",target:"_blank",children:"@BappyKG"}),b.jsx("br",{}),'"About Me" illustration by ',b.jsx("a",{href:"https://www.instagram.com/coledawg2001/",target:"_blank",children:"@ColeDawg"})]}),b.jsxs("p",{children:[b.jsx("span",{className:"notepad-header",children:"SPECIAL THANKS"}),b.jsx("br",{}),b.jsx("span",{children:"YOU! (Yes, you!) for visiting this site."})]})]})}),Kx="/assets/ms_sans_serif-Du8rjN1q.woff2",Jx="/assets/ms_sans_serif_bold-D5dpRRHG.woff2";let Z0=[Tn.background1,Tn.background2,Tn.background3,Tn.background4,Tn.background5,Tn.background6],Wx=Math.floor(Z0.length*Math.random()),K0=Z0[Wx];console.log(K0);gy`
  ${by}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${Kx}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${Jx}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;const Fx=()=>{const n=k.useRef(0),o=()=>{const M=Date.now();return M-n.current>=400?(n.current=M,!0):!1},[c,r]=k.useState(!0),[h,g]=k.useState(!1),[v,T]=k.useState(!1),A=k.useRef(null),y=k.useRef(null);k.useEffect(()=>{if(!v)return;function M(I){y.current&&!y.current.contains(I.target)&&A.current&&!A.current.contains(I.target)&&T(!1)}return document.addEventListener("mousedown",M),()=>{document.removeEventListener("mousedown",M)}},[v]);const[R,C]=k.useState(new Date);k.useEffect(()=>{const M=setInterval(()=>C(new Date),1e3);return()=>clearInterval(M)},[]);const G=R.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"}),et=R.toLocaleDateString([],{month:"2-digit",day:"2-digit",year:"numeric"}),W=M=>window.innerWidth<768?"center":{about:"10%",gallery:"50%",videos:"40%",contact:"30%",donate:"50%",credits:"50%"}[M];k.useEffect(()=>{window.location.pathname==="/donate"&&(P(),g(!1))},[]),k.useEffect(()=>{const M=setTimeout(()=>{r(!1),g(!0)},6e3);return()=>clearTimeout(M)},[]),k.useEffect(()=>{if(h){const M=document.createElement("div");new kl({title:"~X/WHATS_NEW/",icon:Mt.info,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",width:"375px",height:"400px",x:"center",y:"center",url:"https://eckis-chronicle.neocities.org",setBackground:I=>console.log(`Background set to ${I}`),onClose:()=>{console.log("Window closed"),M.remove()}}),g(!1)}},[h]),k.useEffect(()=>{document.body.style.backgroundImage=`url(${K0})`,document.body.style.backgroundSize="cover",document.body.style.backgroundRepeat="no-repeat",document.body.style.backgroundPosition="center"},[]);const ut=()=>{if(!o())return;const M=document.createElement("div");M.className="terminal-winbox-body",new kl({title:"~X/CREDITS.TXT",icon:Mt.notepad,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:"255px",maxWidth:"20%",height:"360px",maxHeight:"25%",x:W("credits"),y:"45%",mount:M,setBackground:F=>console.log(`Background set to ${F}`),onClose:()=>{console.log("Window closed"),Ke.createRoot(M).unmount(),M.remove()}}),Ke.createRoot(M).render(b.jsx(Zx,{}))},P=()=>{if(!o())return;const M=document.createElement("div");new kl({title:"~X/DONATE/",icon:Mt.desktop_donate,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:Math.min(325,window.innerWidth*.8)+"px",maxWidth:"40%",height:Math.min(230,window.innerHeight*.7)+"px",maxHeight:"35%",x:W("donate"),y:"45%",mount:M,setBackground:F=>console.log(`Background set to ${F}`),onClose:()=>{console.log("Window closed"),Ke.createRoot(M).unmount(),M.remove()}}),Ke.createRoot(M).render(b.jsx(Vx,{}))},tt=()=>{if(!o())return;const M=document.createElement("div");new kl({title:"~X/ABOUT/",className:"no-resize",icon:Mt.desktop_about,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:Math.min(440,window.innerWidth*.8)+"px",maxWidth:"440px",height:Math.min(575,window.innerHeight*.7)+"px",maxHeight:"550px",x:W("about"),y:"10%",mount:M,setBackground:F=>console.log(`Background set to ${F}`),noResize:!0,onClose:()=>{console.log("Window closed"),Ke.createRoot(M).unmount(),M.remove()}}),Ke.createRoot(M).render(b.jsx(Hx,{}))},lt=()=>{if(!o())return;const M=document.createElement("div");new kl({title:"~X/VIDEOS/",icon:Mt.desktop_videos,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:Math.min(650,window.innerWidth*.8)+"px",maxWidth:"800px",height:Math.min(475,window.innerHeight*.7)+"px",maxHeight:"550px",x:W("videos"),y:"8%",mount:M,setBackground:F=>console.log(`Background set to ${F}`),onClose:()=>{console.log("Window closed"),Ke.createRoot(M).unmount(),M.remove()}}),Ke.createRoot(M).render(b.jsx(Yx,{}))},V=()=>{if(!o())return;const M=document.createElement("div");new kl({title:"~X/HIT_MY_LINE/",icon:Mt.desktop_contact,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:Math.min(325,window.innerWidth*.8)+"px",maxWidth:"600px",height:Math.min(280,window.innerHeight*.7)+"px",maxHeight:"400px",x:W("contact"),y:"30%",mount:M,setBackground:F=>console.log(`Background set to ${F}`),onClose:()=>{console.log("Window closed"),Ke.createRoot(M).unmount(),M.remove()}}),Ke.createRoot(M).render(b.jsx(Xx,{}))},at=()=>{if(!o())return;const M=document.createElement("div");new kl({title:"~X/GALLERY/",icon:Mt.desktop_gallery,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:Math.min(490,window.innerWidth*.8)+"px",maxWidth:"800px",height:Math.min(580,window.innerHeight*.7)+"px",maxHeight:"650px",x:W("gallery"),y:"30%",mount:M,setBackground:F=>console.log(`Background set to ${F}`),onClose:()=>{console.log("Window closed"),Ke.createRoot(M).unmount(),M.remove()}}),Ke.createRoot(M).render(b.jsx(qx,{}))};return k.useEffect(()=>{Object.values(Mt).forEach(M=>{const I=new window.Image;I.src=M})},[]),b.jsxs(b.Fragment,{children:[c&&b.jsx(ux,{}),b.jsx("div",{className:"App",children:b.jsxs("div",{id:"desktop",children:[b.jsx("label",{htmlFor:"about-me",className:"desktop-item",onClick:tt,children:b.jsxs("a",{href:"#",onClick:M=>M.preventDefault(),children:[b.jsx("img",{src:Mt.desktop_about_gif,className:"logo",alt:"ABOUT"}),b.jsx("div",{className:"desktop-text",children:"ABOUT"})]})}),b.jsx("div",{id:"about-me-content",style:{display:"none"}}),b.jsx("label",{htmlFor:"videos",className:"desktop-item",onClick:lt,children:b.jsxs("a",{href:"#",onClick:M=>M.preventDefault(),children:[b.jsx("img",{src:Mt.desktop_videos_gif,className:"logo",alt:"VIDEOS"}),b.jsx("div",{className:"desktop-text",children:"VIDEOS"})]})}),b.jsx("div",{id:"videos-content",style:{display:"none"}}),b.jsx("label",{htmlFor:"gallery",className:"desktop-item",onClick:at,children:b.jsxs("a",{href:"#",onClick:M=>M.preventDefault(),children:[b.jsx("img",{src:Mt.desktop_gallery_gif,className:"logo",alt:"GALLERY"}),b.jsx("div",{className:"desktop-text",children:"GALLERY"})]})}),b.jsx("div",{id:"gallery-content",style:{display:"none"}}),b.jsx("label",{htmlFor:"contact",className:"desktop-item",onClick:V,children:b.jsxs("a",{href:"#",onClick:M=>M.preventDefault(),children:[b.jsx("img",{src:Mt.desktop_contact_gif,className:"logo",alt:"CONTACT"}),b.jsx("div",{className:"desktop-text",children:"CONTACT"})]})}),b.jsx("div",{id:"contact-content",style:{display:"none"}}),b.jsx("label",{htmlFor:"donate",className:"desktop-item",onClick:P,children:b.jsxs("a",{href:"#",onClick:M=>M.preventDefault(),children:[b.jsx("img",{src:Mt.desktop_donate_gif,className:"logo",alt:"GALLERY"}),b.jsx("div",{className:"desktop-text",children:"DONATE"})]})}),b.jsx("div",{id:"donate-content",style:{display:"none"}})]})}),b.jsx("div",{className:"taskbar",children:b.jsx(hy,{theme:nx,children:b.jsx(x0,{fixed:!0,style:{top:"auto",bottom:0,position:"fixed",zIndex:1},children:b.jsxs(so,{noPadding:!0,style:{justifyContent:"space-between"},children:[b.jsxs("div",{style:{position:"relative",display:"flex",width:"100%",alignItems:"center",padding:"0px"},children:[b.jsxs(Bi,{ref:A,onClick:()=>T(!v),active:v?!0:void 0,style:{fontWeight:"bold",marginRight:6,marginLeft:6},children:[b.jsx("img",{src:tx,alt:"react95 logo",style:{height:"20px",marginRight:4}}),"START"]}),b.jsx(L0,{size:35,style:{marginRight:10}}),b.jsxs("div",{style:{position:"relative",display:"inline-block",marginRight:14},onClick:()=>window.open("https://youtube.com/ecksposting","_blank","noopener,noreferrer"),children:[b.jsx("img",{src:Mt.youtube,alt:"YouTube",className:"taskbar-item",style:{height:"25px"}}),b.jsx("div",{className:"taskbar-tooltip",style:{display:"none",position:"absolute",bottom:"120%",left:"50%",transform:"translateX(-45%)",background:"#222",color:"#fff",padding:"6px 8px",border:"2px solid white",fontSize:14,whiteSpace:"nowrap",zIndex:100,boxShadow:"0 2px 8px #0006",pointerEvents:"none"},children:"YOUTUBE"})]}),b.jsxs("div",{style:{position:"relative",display:"inline-block",marginRight:14},onClick:()=>window.open("https://youtube.com/ecksposting","_blank","noopener,noreferrer"),children:[b.jsx("img",{src:Mt.instagram,alt:"react95 logo",className:"taskbar-item",style:{height:"25px"}}),b.jsx("div",{className:"taskbar-tooltip",style:{display:"none",position:"absolute",bottom:"120%",left:"50%",transform:"translateX(-45%)",background:"#222",color:"#fff",padding:"6px 8px",border:"2px solid white",fontSize:14,whiteSpace:"nowrap",zIndex:100,boxShadow:"0 2px 8px #0006",pointerEvents:"none"},children:"INSTA"})]}),b.jsxs("div",{style:{position:"relative",display:"inline-block",marginRight:14},onClick:()=>window.open("https://youtube.com/ecksposting","_blank","noopener,noreferrer"),children:[b.jsx("img",{src:Mt.xitter,alt:"react95 logo",className:"taskbar-item",style:{height:"25px"}}),b.jsx("div",{className:"taskbar-tooltip",style:{display:"none",position:"absolute",bottom:"120%",left:"50%",transform:"translateX(-45%)",background:"#222",color:"#fff",padding:"6px 8px",border:"2px solid white",fontSize:14,whiteSpace:"nowrap",zIndex:100,boxShadow:"0 2px 8px #0006",pointerEvents:"none"},children:"XITTER"})]}),b.jsxs("div",{style:{position:"relative",display:"inline-block",marginRight:14},onClick:()=>window.open("https://eckslol.newgrounds.com/","_blank","noopener,noreferrer"),children:[b.jsx("img",{src:Mt.newgrounds,alt:"react95 logo",className:"taskbar-item",style:{height:"25px"}}),b.jsx("div",{className:"taskbar-tooltip",style:{display:"none",position:"absolute",bottom:"120%",left:"50%",transform:"translateX(-45%)",background:"#222",color:"#fff",padding:"6px 8px",border:"2px solid white",fontSize:14,whiteSpace:"nowrap",zIndex:100,boxShadow:"0 2px 8px #0006",pointerEvents:"none"},children:"NEWGROUNDS"})]}),v&&b.jsxs(A0,{ref:y,style:{position:"absolute",left:"0px",bottom:"100%"},onClick:()=>T(!1),children:[b.jsxs(Ta,{className:"taskbar-tab",onClick:lt,children:[b.jsx("span",{role:"img",children:b.jsx("img",{src:Mt.desktop_videos,alt:"VIDEOS",style:{width:"20px",height:"20px",margin:"0 15px -4px 0"}})}),"VIDEOS"]}),b.jsxs(Ta,{className:"taskbar-tab",onClick:at,children:[b.jsx("span",{role:"img",children:b.jsx("img",{src:Mt.desktop_gallery,alt:"GALLERY",style:{width:"20px",height:"20px",margin:"0 15px -4px 0"}})}),"PHOTOS"]}),b.jsxs(Ta,{className:"taskbar-tab",onClick:tt,children:[b.jsx("span",{role:"img",children:b.jsx("img",{src:Mt.desktop_about,alt:"GALLERY",style:{width:"20px",height:"20px",margin:"0 15px -4px 0"}})}),"ABOUT"]}),b.jsx(co,{}),b.jsxs(Ta,{className:"taskbar-tab",onClick:()=>window.open("https://tornada.net/","_blank","noopener,noreferrer"),children:[b.jsx("span",{role:"img",children:b.jsx("img",{src:Mt.tornada,alt:"TORNADA",style:{width:"20px",height:"20px",margin:"0 15px -4px 0"}})}),"TORNADA"]}),b.jsx(co,{}),b.jsxs(Ta,{className:"taskbar-tab",onClick:ut,children:[b.jsx("span",{role:"img","aria-label":"📁",children:b.jsx("img",{src:Mt.notepad,alt:"CREDITS",style:{width:"20px",height:"20px",margin:"0 10px -3px 0"}})}),"CREDITS"]}),b.jsxs(Ta,{disabled:!0,children:[b.jsx("span",{role:"img","aria-label":"🔙",children:b.jsx("img",{src:ex,style:{width:"20px",height:"20px",margin:"0 10px -3px 0"}})}),"SHUTDOWN"]})]})]}),b.jsxs($0,{variant:"well",shadow:!0,style:{right:"auto",padding:"0.1rem",width:"140px",height:"40px",textAlign:"center",fontSize:"1rem",fontWeight:"bold",color:"#fff",backgroundColor:"#000",border:"black inset 2px",borderRadius:"0.1rem",marginTop:4,marginBottom:4,marginRight:6,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[b.jsx("div",{style:{fontSize:"0.9em"},children:G}),b.jsx("div",{style:{fontSize:"0.9em",marginTop:6},children:et})]})]})})})})]})};Kp.createRoot(document.getElementById("root")).render(b.jsx(k.StrictMode,{children:b.jsx(Fx,{})}));
