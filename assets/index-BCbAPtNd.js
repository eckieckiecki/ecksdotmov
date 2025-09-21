(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))r(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const v of p.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&r(v)}).observe(document,{childList:!0,subtree:!0});function c(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function r(d){if(d.ep)return;d.ep=!0;const p=c(d);fetch(d.href,p)}})();function cs(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Bc={exports:{}},ki={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp;function sb(){if(dp)return ki;dp=1;var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function c(r,d,p){var v=null;if(p!==void 0&&(v=""+p),d.key!==void 0&&(v=""+d.key),"key"in d){p={};for(var T in d)T!=="key"&&(p[T]=d[T])}else p=d;return d=p.ref,{$$typeof:n,type:r,key:v,ref:d!==void 0?d:null,props:p}}return ki.Fragment=o,ki.jsx=c,ki.jsxs=c,ki}var hp;function fb(){return hp||(hp=1,Bc.exports=sb()),Bc.exports}var b=fb(),Hc={exports:{}},At={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp;function db(){if(pp)return At;pp=1;var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),v=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),M=Symbol.iterator;function G(g){return g===null||typeof g!="object"?null:(g=M&&g[M]||g["@@iterator"],typeof g=="function"?g:null)}var et={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,ut={};function P(g,B,W){this.props=g,this.context=B,this.refs=ut,this.updater=W||et}P.prototype.isReactComponent={},P.prototype.setState=function(g,B){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,B,"setState")},P.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function tt(){}tt.prototype=P.prototype;function lt(g,B,W){this.props=g,this.context=B,this.refs=ut,this.updater=W||et}var V=lt.prototype=new tt;V.constructor=lt,I(V,P.prototype),V.isPureReactComponent=!0;var at=Array.isArray,C={H:null,A:null,T:null,S:null,V:null},J=Object.prototype.hasOwnProperty;function Z(g,B,W,_,Q,nt){return W=nt.ref,{$$typeof:n,type:g,key:B,ref:W!==void 0?W:null,props:nt}}function xt(g,B){return Z(g.type,B,void 0,void 0,void 0,g.props)}function vt(g){return typeof g=="object"&&g!==null&&g.$$typeof===n}function Gt(g){var B={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(W){return B[W]})}var Mt=/\/+/g;function bt(g,B){return typeof g=="object"&&g!==null&&g.key!=null?Gt(""+g.key):B.toString(36)}function h(){}function U(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(h,h):(g.status="pending",g.then(function(B){g.status==="pending"&&(g.status="fulfilled",g.value=B)},function(B){g.status==="pending"&&(g.status="rejected",g.reason=B)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function K(g,B,W,_,Q){var nt=typeof g;(nt==="undefined"||nt==="boolean")&&(g=null);var F=!1;if(g===null)F=!0;else switch(nt){case"bigint":case"string":case"number":F=!0;break;case"object":switch(g.$$typeof){case n:case o:F=!0;break;case R:return F=g._init,K(F(g._payload),B,W,_,Q)}}if(F)return Q=Q(g),F=_===""?"."+bt(g,0):_,at(Q)?(W="",F!=null&&(W=F.replace(Mt,"$&/")+"/"),K(Q,B,W,"",function(Y){return Y})):Q!=null&&(vt(Q)&&(Q=xt(Q,W+(Q.key==null||g&&g.key===Q.key?"":(""+Q.key).replace(Mt,"$&/")+"/")+F)),B.push(Q)),1;F=0;var ct=_===""?".":_+":";if(at(g))for(var ft=0;ft<g.length;ft++)_=g[ft],nt=ct+bt(_,ft),F+=K(_,B,W,nt,Q);else if(ft=G(g),typeof ft=="function")for(g=ft.call(g),ft=0;!(_=g.next()).done;)_=_.value,nt=ct+bt(_,ft++),F+=K(_,B,W,nt,Q);else if(nt==="object"){if(typeof g.then=="function")return K(U(g),B,W,_,Q);throw B=String(g),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return F}function D(g,B,W){if(g==null)return g;var _=[],Q=0;return K(g,_,"","",function(nt){return B.call(W,nt,Q++)}),_}function j(g){if(g._status===-1){var B=g._result;B=B(),B.then(function(W){(g._status===0||g._status===-1)&&(g._status=1,g._result=W)},function(W){(g._status===0||g._status===-1)&&(g._status=2,g._result=W)}),g._status===-1&&(g._status=0,g._result=B)}if(g._status===1)return g._result.default;throw g._result}var q=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)};function it(){}return At.Children={map:D,forEach:function(g,B,W){D(g,function(){B.apply(this,arguments)},W)},count:function(g){var B=0;return D(g,function(){B++}),B},toArray:function(g){return D(g,function(B){return B})||[]},only:function(g){if(!vt(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},At.Component=P,At.Fragment=c,At.Profiler=d,At.PureComponent=lt,At.StrictMode=r,At.Suspense=A,At.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,At.__COMPILER_RUNTIME={__proto__:null,c:function(g){return C.H.useMemoCache(g)}},At.cache=function(g){return function(){return g.apply(null,arguments)}},At.cloneElement=function(g,B,W){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var _=I({},g.props),Q=g.key,nt=void 0;if(B!=null)for(F in B.ref!==void 0&&(nt=void 0),B.key!==void 0&&(Q=""+B.key),B)!J.call(B,F)||F==="key"||F==="__self"||F==="__source"||F==="ref"&&B.ref===void 0||(_[F]=B[F]);var F=arguments.length-2;if(F===1)_.children=W;else if(1<F){for(var ct=Array(F),ft=0;ft<F;ft++)ct[ft]=arguments[ft+2];_.children=ct}return Z(g.type,Q,void 0,void 0,nt,_)},At.createContext=function(g){return g={$$typeof:v,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:p,_context:g},g},At.createElement=function(g,B,W){var _,Q={},nt=null;if(B!=null)for(_ in B.key!==void 0&&(nt=""+B.key),B)J.call(B,_)&&_!=="key"&&_!=="__self"&&_!=="__source"&&(Q[_]=B[_]);var F=arguments.length-2;if(F===1)Q.children=W;else if(1<F){for(var ct=Array(F),ft=0;ft<F;ft++)ct[ft]=arguments[ft+2];Q.children=ct}if(g&&g.defaultProps)for(_ in F=g.defaultProps,F)Q[_]===void 0&&(Q[_]=F[_]);return Z(g,nt,void 0,void 0,null,Q)},At.createRef=function(){return{current:null}},At.forwardRef=function(g){return{$$typeof:T,render:g}},At.isValidElement=vt,At.lazy=function(g){return{$$typeof:R,_payload:{_status:-1,_result:g},_init:j}},At.memo=function(g,B){return{$$typeof:y,type:g,compare:B===void 0?null:B}},At.startTransition=function(g){var B=C.T,W={};C.T=W;try{var _=g(),Q=C.S;Q!==null&&Q(W,_),typeof _=="object"&&_!==null&&typeof _.then=="function"&&_.then(it,q)}catch(nt){q(nt)}finally{C.T=B}},At.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},At.use=function(g){return C.H.use(g)},At.useActionState=function(g,B,W){return C.H.useActionState(g,B,W)},At.useCallback=function(g,B){return C.H.useCallback(g,B)},At.useContext=function(g){return C.H.useContext(g)},At.useDebugValue=function(){},At.useDeferredValue=function(g,B){return C.H.useDeferredValue(g,B)},At.useEffect=function(g,B,W){var _=C.H;if(typeof W=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return _.useEffect(g,B)},At.useId=function(){return C.H.useId()},At.useImperativeHandle=function(g,B,W){return C.H.useImperativeHandle(g,B,W)},At.useInsertionEffect=function(g,B){return C.H.useInsertionEffect(g,B)},At.useLayoutEffect=function(g,B){return C.H.useLayoutEffect(g,B)},At.useMemo=function(g,B){return C.H.useMemo(g,B)},At.useOptimistic=function(g,B){return C.H.useOptimistic(g,B)},At.useReducer=function(g,B,W){return C.H.useReducer(g,B,W)},At.useRef=function(g){return C.H.useRef(g)},At.useState=function(g){return C.H.useState(g)},At.useSyncExternalStore=function(g,B,W){return C.H.useSyncExternalStore(g,B,W)},At.useTransition=function(){return C.H.useTransition()},At.version="19.1.0",At}var gp;function ss(){return gp||(gp=1,Hc.exports=db()),Hc.exports}var z=ss();const N=cs(z);var Uc={exports:{}},Oi={},$c={exports:{}},Lc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function hb(){return mp||(mp=1,function(n){function o(D,j){var q=D.length;D.push(j);t:for(;0<q;){var it=q-1>>>1,g=D[it];if(0<d(g,j))D[it]=j,D[q]=g,q=it;else break t}}function c(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var j=D[0],q=D.pop();if(q!==j){D[0]=q;t:for(var it=0,g=D.length,B=g>>>1;it<B;){var W=2*(it+1)-1,_=D[W],Q=W+1,nt=D[Q];if(0>d(_,q))Q<g&&0>d(nt,_)?(D[it]=nt,D[Q]=q,it=Q):(D[it]=_,D[W]=q,it=W);else if(Q<g&&0>d(nt,q))D[it]=nt,D[Q]=q,it=Q;else break t}}return j}function d(D,j){var q=D.sortIndex-j.sortIndex;return q!==0?q:D.id-j.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;n.unstable_now=function(){return p.now()}}else{var v=Date,T=v.now();n.unstable_now=function(){return v.now()-T}}var A=[],y=[],R=1,M=null,G=3,et=!1,I=!1,ut=!1,P=!1,tt=typeof setTimeout=="function"?setTimeout:null,lt=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function at(D){for(var j=c(y);j!==null;){if(j.callback===null)r(y);else if(j.startTime<=D)r(y),j.sortIndex=j.expirationTime,o(A,j);else break;j=c(y)}}function C(D){if(ut=!1,at(D),!I)if(c(A)!==null)I=!0,J||(J=!0,bt());else{var j=c(y);j!==null&&K(C,j.startTime-D)}}var J=!1,Z=-1,xt=5,vt=-1;function Gt(){return P?!0:!(n.unstable_now()-vt<xt)}function Mt(){if(P=!1,J){var D=n.unstable_now();vt=D;var j=!0;try{t:{I=!1,ut&&(ut=!1,lt(Z),Z=-1),et=!0;var q=G;try{e:{for(at(D),M=c(A);M!==null&&!(M.expirationTime>D&&Gt());){var it=M.callback;if(typeof it=="function"){M.callback=null,G=M.priorityLevel;var g=it(M.expirationTime<=D);if(D=n.unstable_now(),typeof g=="function"){M.callback=g,at(D),j=!0;break e}M===c(A)&&r(A),at(D)}else r(A);M=c(A)}if(M!==null)j=!0;else{var B=c(y);B!==null&&K(C,B.startTime-D),j=!1}}break t}finally{M=null,G=q,et=!1}j=void 0}}finally{j?bt():J=!1}}}var bt;if(typeof V=="function")bt=function(){V(Mt)};else if(typeof MessageChannel<"u"){var h=new MessageChannel,U=h.port2;h.port1.onmessage=Mt,bt=function(){U.postMessage(null)}}else bt=function(){tt(Mt,0)};function K(D,j){Z=tt(function(){D(n.unstable_now())},j)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):xt=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return G},n.unstable_next=function(D){switch(G){case 1:case 2:case 3:var j=3;break;default:j=G}var q=G;G=j;try{return D()}finally{G=q}},n.unstable_requestPaint=function(){P=!0},n.unstable_runWithPriority=function(D,j){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var q=G;G=D;try{return j()}finally{G=q}},n.unstable_scheduleCallback=function(D,j,q){var it=n.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?it+q:it):q=it,D){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=q+g,D={id:R++,callback:j,priorityLevel:D,startTime:q,expirationTime:g,sortIndex:-1},q>it?(D.sortIndex=q,o(y,D),c(A)===null&&D===c(y)&&(ut?(lt(Z),Z=-1):ut=!0,K(C,q-it))):(D.sortIndex=g,o(A,D),I||et||(I=!0,J||(J=!0,bt()))),D},n.unstable_shouldYield=Gt,n.unstable_wrapCallback=function(D){var j=G;return function(){var q=G;G=j;try{return D.apply(this,arguments)}finally{G=q}}}}(Lc)),Lc}var bp;function pb(){return bp||(bp=1,$c.exports=hb()),$c.exports}var Gc={exports:{}},ve={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function gb(){if(yp)return ve;yp=1;var n=ss();function o(A){var y="https://react.dev/errors/"+A;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)y+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+A+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var r={d:{f:c,r:function(){throw Error(o(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},d=Symbol.for("react.portal");function p(A,y,R){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:M==null?null:""+M,children:A,containerInfo:y,implementation:R}}var v=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function T(A,y){if(A==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return ve.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ve.createPortal=function(A,y){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(o(299));return p(A,y,null,R)},ve.flushSync=function(A){var y=v.T,R=r.p;try{if(v.T=null,r.p=2,A)return A()}finally{v.T=y,r.p=R,r.d.f()}},ve.preconnect=function(A,y){typeof A=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,r.d.C(A,y))},ve.prefetchDNS=function(A){typeof A=="string"&&r.d.D(A)},ve.preinit=function(A,y){if(typeof A=="string"&&y&&typeof y.as=="string"){var R=y.as,M=T(R,y.crossOrigin),G=typeof y.integrity=="string"?y.integrity:void 0,et=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;R==="style"?r.d.S(A,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:M,integrity:G,fetchPriority:et}):R==="script"&&r.d.X(A,{crossOrigin:M,integrity:G,fetchPriority:et,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},ve.preinitModule=function(A,y){if(typeof A=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var R=T(y.as,y.crossOrigin);r.d.M(A,{crossOrigin:R,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&r.d.M(A)},ve.preload=function(A,y){if(typeof A=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var R=y.as,M=T(R,y.crossOrigin);r.d.L(A,R,{crossOrigin:M,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},ve.preloadModule=function(A,y){if(typeof A=="string")if(y){var R=T(y.as,y.crossOrigin);r.d.m(A,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:R,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else r.d.m(A)},ve.requestFormReset=function(A){r.d.r(A)},ve.unstable_batchedUpdates=function(A,y){return A(y)},ve.useFormState=function(A,y,R){return v.H.useFormState(A,y,R)},ve.useFormStatus=function(){return v.H.useHostTransitionStatus()},ve.version="19.1.0",ve}var vp;function Jp(){if(vp)return Gc.exports;vp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(o){console.error(o)}}return n(),Gc.exports=gb(),Gc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function mb(){if(xp)return Oi;xp=1;var n=pb(),o=ss(),c=Jp();function r(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function p(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function v(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function T(t){if(p(t)!==t)throw Error(r(188))}function A(t){var e=t.alternate;if(!e){if(e=p(t),e===null)throw Error(r(188));return e!==t?null:t}for(var l=t,a=e;;){var i=l.return;if(i===null)break;var u=i.alternate;if(u===null){if(a=i.return,a!==null){l=a;continue}break}if(i.child===u.child){for(u=i.child;u;){if(u===l)return T(i),t;if(u===a)return T(i),e;u=u.sibling}throw Error(r(188))}if(l.return!==a.return)l=i,a=u;else{for(var s=!1,f=i.child;f;){if(f===l){s=!0,l=i,a=u;break}if(f===a){s=!0,a=i,l=u;break}f=f.sibling}if(!s){for(f=u.child;f;){if(f===l){s=!0,l=u,a=i;break}if(f===a){s=!0,a=u,l=i;break}f=f.sibling}if(!s)throw Error(r(189))}}if(l.alternate!==a)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?t:e}function y(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=y(t),e!==null)return e;t=t.sibling}return null}var R=Object.assign,M=Symbol.for("react.element"),G=Symbol.for("react.transitional.element"),et=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),ut=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),tt=Symbol.for("react.provider"),lt=Symbol.for("react.consumer"),V=Symbol.for("react.context"),at=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),vt=Symbol.for("react.activity"),Gt=Symbol.for("react.memo_cache_sentinel"),Mt=Symbol.iterator;function bt(t){return t===null||typeof t!="object"?null:(t=Mt&&t[Mt]||t["@@iterator"],typeof t=="function"?t:null)}var h=Symbol.for("react.client.reference");function U(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===h?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case P:return"Profiler";case ut:return"StrictMode";case C:return"Suspense";case J:return"SuspenseList";case vt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case et:return"Portal";case V:return(t.displayName||"Context")+".Provider";case lt:return(t._context.displayName||"Context")+".Consumer";case at:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Z:return e=t.displayName||null,e!==null?e:U(t.type)||"Memo";case xt:e=t._payload,t=t._init;try{return U(t(e))}catch{}}return null}var K=Array.isArray,D=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},it=[],g=-1;function B(t){return{current:t}}function W(t){0>g||(t.current=it[g],it[g]=null,g--)}function _(t,e){g++,it[g]=t.current,t.current=e}var Q=B(null),nt=B(null),F=B(null),ct=B(null);function ft(t,e){switch(_(F,e),_(nt,t),_(Q,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Lh(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Lh(e),t=Gh(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}W(Q),_(Q,t)}function Y(){W(Q),W(nt),W(F)}function gt(t){t.memoizedState!==null&&_(ct,t);var e=Q.current,l=Gh(e,t.type);e!==l&&(_(nt,t),_(Q,l))}function dt(t){nt.current===t&&(W(Q),W(nt)),ct.current===t&&(W(ct),wi._currentValue=q)}var yt=Object.prototype.hasOwnProperty,kt=n.unstable_scheduleCallback,_t=n.unstable_cancelCallback,Qt=n.unstable_shouldYield,le=n.unstable_requestPaint,qt=n.unstable_now,me=n.unstable_getCurrentPriorityLevel,ie=n.unstable_ImmediatePriority,He=n.unstable_UserBlockingPriority,we=n.unstable_NormalPriority,ll=n.unstable_LowPriority,Ue=n.unstable_IdlePriority,Cl=n.log,Na=n.unstable_setDisableYieldValue,Ml=null,xe=null;function al(t){if(typeof Cl=="function"&&Na(t),xe&&typeof xe.setStrictMode=="function")try{xe.setStrictMode(Ml,t)}catch{}}var Ae=Math.clz32?Math.clz32:wo,Ao=Math.log,So=Math.LN2;function wo(t){return t>>>=0,t===0?32:31-(Ao(t)/So|0)|0}var _a=256,ja=4194304;function hl(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ba(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var i=0,u=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var f=a&134217727;return f!==0?(a=f&~u,a!==0?i=hl(a):(s&=f,s!==0?i=hl(s):l||(l=f&~t,l!==0&&(i=hl(l))))):(f=a&~u,f!==0?i=hl(f):s!==0?i=hl(s):l||(l=a&~t,l!==0&&(i=hl(l)))),i===0?0:e!==0&&e!==i&&(e&u)===0&&(u=i&-i,l=e&-e,u>=l||u===32&&(l&4194048)!==0)?e:i}function oa(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Eo(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ss(){var t=_a;return _a<<=1,(_a&4194048)===0&&(_a=256),t}function ws(){var t=ja;return ja<<=1,(ja&62914560)===0&&(ja=4194304),t}function To(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function Nn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function I0(t,e,l,a,i,u){var s=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var f=t.entanglements,m=t.expirationTimes,E=t.hiddenUpdates;for(l=s&~l;0<l;){var H=31-Ae(l),L=1<<H;f[H]=0,m[H]=-1;var k=E[H];if(k!==null)for(E[H]=null,H=0;H<k.length;H++){var O=k[H];O!==null&&(O.lane&=-536870913)}l&=~L}a!==0&&Es(t,a,0),u!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=u&~(s&~e))}function Es(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-Ae(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&4194090}function Ts(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-Ae(l),i=1<<a;i&e|t[a]&e&&(t[a]|=e),l&=~i}}function Do(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ro(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ds(){var t=j.p;return t!==0?t:(t=window.event,t===void 0?32:up(t.type))}function P0(t,e){var l=j.p;try{return j.p=t,e()}finally{j.p=l}}var Nl=Math.random().toString(36).slice(2),be="__reactFiber$"+Nl,Ee="__reactProps$"+Nl,Ha="__reactContainer$"+Nl,ko="__reactEvents$"+Nl,tg="__reactListeners$"+Nl,eg="__reactHandles$"+Nl,Rs="__reactResources$"+Nl,_n="__reactMarker$"+Nl;function Oo(t){delete t[be],delete t[Ee],delete t[ko],delete t[tg],delete t[eg]}function Ua(t){var e=t[be];if(e)return e;for(var l=t.parentNode;l;){if(e=l[Ha]||l[be]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=Xh(t);t!==null;){if(l=t[be])return l;t=Xh(t)}return e}t=l,l=t.parentNode}return null}function $a(t){if(t=t[be]||t[Ha]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function jn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(r(33))}function La(t){var e=t[Rs];return e||(e=t[Rs]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ue(t){t[_n]=!0}var ks=new Set,Os={};function ra(t,e){Ga(t,e),Ga(t+"Capture",e)}function Ga(t,e){for(Os[t]=e,t=0;t<e.length;t++)ks.add(e[t])}var lg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),zs={},Cs={};function ag(t){return yt.call(Cs,t)?!0:yt.call(zs,t)?!1:lg.test(t)?Cs[t]=!0:(zs[t]=!0,!1)}function Ui(t,e,l){if(ag(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function $i(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function pl(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}var zo,Ms;function Ya(t){if(zo===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);zo=e&&e[1]||"",Ms=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zo+t+Ms}var Co=!1;function Mo(t,e){if(!t||Co)return"";Co=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var L=function(){throw Error()};if(Object.defineProperty(L.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(L,[])}catch(O){var k=O}Reflect.construct(t,[],L)}else{try{L.call()}catch(O){k=O}t.call(L.prototype)}}else{try{throw Error()}catch(O){k=O}(L=t())&&typeof L.catch=="function"&&L.catch(function(){})}}catch(O){if(O&&k&&typeof O.stack=="string")return[O.stack,k.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),s=u[0],f=u[1];if(s&&f){var m=s.split(`
`),E=f.split(`
`);for(i=a=0;a<m.length&&!m[a].includes("DetermineComponentFrameRoot");)a++;for(;i<E.length&&!E[i].includes("DetermineComponentFrameRoot");)i++;if(a===m.length||i===E.length)for(a=m.length-1,i=E.length-1;1<=a&&0<=i&&m[a]!==E[i];)i--;for(;1<=a&&0<=i;a--,i--)if(m[a]!==E[i]){if(a!==1||i!==1)do if(a--,i--,0>i||m[a]!==E[i]){var H=`
`+m[a].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=a&&0<=i);break}}}finally{Co=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?Ya(l):""}function ng(t){switch(t.tag){case 26:case 27:case 5:return Ya(t.type);case 16:return Ya("Lazy");case 13:return Ya("Suspense");case 19:return Ya("SuspenseList");case 0:case 15:return Mo(t.type,!1);case 11:return Mo(t.type.render,!1);case 1:return Mo(t.type,!0);case 31:return Ya("Activity");default:return""}}function Ns(t){try{var e="";do e+=ng(t),t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function $e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _s(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ig(t){var e=_s(t)?"checked":"value",l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),a=""+t[e];if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,u=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){a=""+s,u.call(this,s)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Li(t){t._valueTracker||(t._valueTracker=ig(t))}function js(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=_s(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function Gi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ug=/[\n"\\]/g;function Le(t){return t.replace(ug,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function No(t,e,l,a,i,u,s,f){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+$e(e)):t.value!==""+$e(e)&&(t.value=""+$e(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?_o(t,s,$e(e)):l!=null?_o(t,s,$e(l)):a!=null&&t.removeAttribute("value"),i==null&&u!=null&&(t.defaultChecked=!!u),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.name=""+$e(f):t.removeAttribute("name")}function Bs(t,e,l,a,i,u,s,f){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||l!=null){if(!(u!=="submit"&&u!=="reset"||e!=null))return;l=l!=null?""+$e(l):"",e=e!=null?""+$e(e):l,f||e===t.value||(t.value=e),t.defaultValue=e}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=f?t.checked:!!a,t.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s)}function _o(t,e,l){e==="number"&&Gi(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function Qa(t,e,l,a){if(t=t.options,e){e={};for(var i=0;i<l.length;i++)e["$"+l[i]]=!0;for(l=0;l<t.length;l++)i=e.hasOwnProperty("$"+t[l].value),t[l].selected!==i&&(t[l].selected=i),i&&a&&(t[l].defaultSelected=!0)}else{for(l=""+$e(l),e=null,i=0;i<t.length;i++){if(t[i].value===l){t[i].selected=!0,a&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Hs(t,e,l){if(e!=null&&(e=""+$e(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+$e(l):""}function Us(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(r(92));if(K(a)){if(1<a.length)throw Error(r(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=$e(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a)}function qa(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var og=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $s(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||og.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function Ls(t,e,l){if(e!=null&&typeof e!="object")throw Error(r(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var i in e)a=e[i],e.hasOwnProperty(i)&&l[i]!==a&&$s(t,i,a)}else for(var u in e)e.hasOwnProperty(u)&&$s(t,u,e[u])}function jo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),cg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yi(t){return cg.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Bo=null;function Ho(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xa=null,Va=null;function Gs(t){var e=$a(t);if(e&&(t=e.stateNode)){var l=t[Ee]||null;t:switch(t=e.stateNode,e.type){case"input":if(No(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Le(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var i=a[Ee]||null;if(!i)throw Error(r(90));No(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&js(a)}break t;case"textarea":Hs(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&Qa(t,!!l.multiple,e,!1)}}}var Uo=!1;function Ys(t,e,l){if(Uo)return t(e,l);Uo=!0;try{var a=t(e);return a}finally{if(Uo=!1,(Xa!==null||Va!==null)&&(Ru(),Xa&&(e=Xa,t=Va,Va=Xa=null,Gs(e),t)))for(e=0;e<t.length;e++)Gs(t[e])}}function Bn(t,e){var l=t.stateNode;if(l===null)return null;var a=l[Ee]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(r(231,e,typeof l));return l}var gl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$o=!1;if(gl)try{var Hn={};Object.defineProperty(Hn,"passive",{get:function(){$o=!0}}),window.addEventListener("test",Hn,Hn),window.removeEventListener("test",Hn,Hn)}catch{$o=!1}var _l=null,Lo=null,Qi=null;function Qs(){if(Qi)return Qi;var t,e=Lo,l=e.length,a,i="value"in _l?_l.value:_l.textContent,u=i.length;for(t=0;t<l&&e[t]===i[t];t++);var s=l-t;for(a=1;a<=s&&e[l-a]===i[u-a];a++);return Qi=i.slice(t,1<a?1-a:void 0)}function qi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xi(){return!0}function qs(){return!1}function Te(t){function e(l,a,i,u,s){this._reactName=l,this._targetInst=i,this.type=a,this.nativeEvent=u,this.target=s,this.currentTarget=null;for(var f in t)t.hasOwnProperty(f)&&(l=t[f],this[f]=l?l(u):u[f]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Xi:qs,this.isPropagationStopped=qs,this}return R(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Xi)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Xi)},persist:function(){},isPersistent:Xi}),e}var ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vi=Te(ca),Un=R({},ca,{view:0,detail:0}),sg=Te(Un),Go,Yo,$n,Zi=R({},Un,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qo,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$n&&($n&&t.type==="mousemove"?(Go=t.screenX-$n.screenX,Yo=t.screenY-$n.screenY):Yo=Go=0,$n=t),Go)},movementY:function(t){return"movementY"in t?t.movementY:Yo}}),Xs=Te(Zi),fg=R({},Zi,{dataTransfer:0}),dg=Te(fg),hg=R({},Un,{relatedTarget:0}),Qo=Te(hg),pg=R({},ca,{animationName:0,elapsedTime:0,pseudoElement:0}),gg=Te(pg),mg=R({},ca,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bg=Te(mg),yg=R({},ca,{data:0}),Vs=Te(yg),vg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ag={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sg(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ag[t])?!!e[t]:!1}function qo(){return Sg}var wg=R({},Un,{key:function(t){if(t.key){var e=vg[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qo,charCode:function(t){return t.type==="keypress"?qi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Eg=Te(wg),Tg=R({},Zi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zs=Te(Tg),Dg=R({},Un,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qo}),Rg=Te(Dg),kg=R({},ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),Og=Te(kg),zg=R({},Zi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Cg=Te(zg),Mg=R({},ca,{newState:0,oldState:0}),Ng=Te(Mg),_g=[9,13,27,32],Xo=gl&&"CompositionEvent"in window,Ln=null;gl&&"documentMode"in document&&(Ln=document.documentMode);var jg=gl&&"TextEvent"in window&&!Ln,Ks=gl&&(!Xo||Ln&&8<Ln&&11>=Ln),Js=" ",Ws=!1;function Fs(t,e){switch(t){case"keyup":return _g.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Is(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Za=!1;function Bg(t,e){switch(t){case"compositionend":return Is(e);case"keypress":return e.which!==32?null:(Ws=!0,Js);case"textInput":return t=e.data,t===Js&&Ws?null:t;default:return null}}function Hg(t,e){if(Za)return t==="compositionend"||!Xo&&Fs(t,e)?(t=Qs(),Qi=Lo=_l=null,Za=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ks&&e.locale!=="ko"?null:e.data;default:return null}}var Ug={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ps(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ug[t.type]:e==="textarea"}function tf(t,e,l,a){Xa?Va?Va.push(a):Va=[a]:Xa=a,e=Nu(e,"onChange"),0<e.length&&(l=new Vi("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var Gn=null,Yn=null;function $g(t){jh(t,0)}function Ki(t){var e=jn(t);if(js(e))return t}function ef(t,e){if(t==="change")return e}var lf=!1;if(gl){var Vo;if(gl){var Zo="oninput"in document;if(!Zo){var af=document.createElement("div");af.setAttribute("oninput","return;"),Zo=typeof af.oninput=="function"}Vo=Zo}else Vo=!1;lf=Vo&&(!document.documentMode||9<document.documentMode)}function nf(){Gn&&(Gn.detachEvent("onpropertychange",uf),Yn=Gn=null)}function uf(t){if(t.propertyName==="value"&&Ki(Yn)){var e=[];tf(e,Yn,t,Ho(t)),Ys($g,e)}}function Lg(t,e,l){t==="focusin"?(nf(),Gn=e,Yn=l,Gn.attachEvent("onpropertychange",uf)):t==="focusout"&&nf()}function Gg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ki(Yn)}function Yg(t,e){if(t==="click")return Ki(e)}function Qg(t,e){if(t==="input"||t==="change")return Ki(e)}function qg(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Oe=typeof Object.is=="function"?Object.is:qg;function Qn(t,e){if(Oe(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var i=l[a];if(!yt.call(e,i)||!Oe(t[i],e[i]))return!1}return!0}function of(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rf(t,e){var l=of(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=of(l)}}function cf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?cf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function sf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Gi(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Gi(t.document)}return e}function Ko(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Xg=gl&&"documentMode"in document&&11>=document.documentMode,Ka=null,Jo=null,qn=null,Wo=!1;function ff(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Wo||Ka==null||Ka!==Gi(a)||(a=Ka,"selectionStart"in a&&Ko(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),qn&&Qn(qn,a)||(qn=a,a=Nu(Jo,"onSelect"),0<a.length&&(e=new Vi("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=Ka)))}function sa(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var Ja={animationend:sa("Animation","AnimationEnd"),animationiteration:sa("Animation","AnimationIteration"),animationstart:sa("Animation","AnimationStart"),transitionrun:sa("Transition","TransitionRun"),transitionstart:sa("Transition","TransitionStart"),transitioncancel:sa("Transition","TransitionCancel"),transitionend:sa("Transition","TransitionEnd")},Fo={},df={};gl&&(df=document.createElement("div").style,"AnimationEvent"in window||(delete Ja.animationend.animation,delete Ja.animationiteration.animation,delete Ja.animationstart.animation),"TransitionEvent"in window||delete Ja.transitionend.transition);function fa(t){if(Fo[t])return Fo[t];if(!Ja[t])return t;var e=Ja[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in df)return Fo[t]=e[l];return t}var hf=fa("animationend"),pf=fa("animationiteration"),gf=fa("animationstart"),Vg=fa("transitionrun"),Zg=fa("transitionstart"),Kg=fa("transitioncancel"),mf=fa("transitionend"),bf=new Map,Io="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Io.push("scrollEnd");function We(t,e){bf.set(t,e),ra(e,[t])}var yf=new WeakMap;function Ge(t,e){if(typeof t=="object"&&t!==null){var l=yf.get(t);return l!==void 0?l:(e={value:t,source:e,stack:Ns(e)},yf.set(t,e),e)}return{value:t,source:e,stack:Ns(e)}}var Ye=[],Wa=0,Po=0;function Ji(){for(var t=Wa,e=Po=Wa=0;e<t;){var l=Ye[e];Ye[e++]=null;var a=Ye[e];Ye[e++]=null;var i=Ye[e];Ye[e++]=null;var u=Ye[e];if(Ye[e++]=null,a!==null&&i!==null){var s=a.pending;s===null?i.next=i:(i.next=s.next,s.next=i),a.pending=i}u!==0&&vf(l,i,u)}}function Wi(t,e,l,a){Ye[Wa++]=t,Ye[Wa++]=e,Ye[Wa++]=l,Ye[Wa++]=a,Po|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function tr(t,e,l,a){return Wi(t,e,l,a),Fi(t)}function Fa(t,e){return Wi(t,null,null,e),Fi(t)}function vf(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var i=!1,u=t.return;u!==null;)u.childLanes|=l,a=u.alternate,a!==null&&(a.childLanes|=l),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(i=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,i&&e!==null&&(i=31-Ae(l),t=u.hiddenUpdates,a=t[i],a===null?t[i]=[e]:a.push(e),e.lane=l|536870912),u):null}function Fi(t){if(50<gi)throw gi=0,uc=null,Error(r(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ia={};function Jg(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ze(t,e,l,a){return new Jg(t,e,l,a)}function er(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ml(t,e){var l=t.alternate;return l===null?(l=ze(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function xf(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ii(t,e,l,a,i,u){var s=0;if(a=t,typeof t=="function")er(t)&&(s=1);else if(typeof t=="string")s=Fm(t,l,Q.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case vt:return t=ze(31,l,e,i),t.elementType=vt,t.lanes=u,t;case I:return da(l.children,i,u,e);case ut:s=8,i|=24;break;case P:return t=ze(12,l,e,i|2),t.elementType=P,t.lanes=u,t;case C:return t=ze(13,l,e,i),t.elementType=C,t.lanes=u,t;case J:return t=ze(19,l,e,i),t.elementType=J,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case tt:case V:s=10;break t;case lt:s=9;break t;case at:s=11;break t;case Z:s=14;break t;case xt:s=16,a=null;break t}s=29,l=Error(r(130,t===null?"null":typeof t,"")),a=null}return e=ze(s,l,e,i),e.elementType=t,e.type=a,e.lanes=u,e}function da(t,e,l,a){return t=ze(7,t,a,e),t.lanes=l,t}function lr(t,e,l){return t=ze(6,t,null,e),t.lanes=l,t}function ar(t,e,l){return e=ze(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Pa=[],tn=0,Pi=null,tu=0,Qe=[],qe=0,ha=null,bl=1,yl="";function pa(t,e){Pa[tn++]=tu,Pa[tn++]=Pi,Pi=t,tu=e}function Af(t,e,l){Qe[qe++]=bl,Qe[qe++]=yl,Qe[qe++]=ha,ha=t;var a=bl;t=yl;var i=32-Ae(a)-1;a&=~(1<<i),l+=1;var u=32-Ae(e)+i;if(30<u){var s=i-i%5;u=(a&(1<<s)-1).toString(32),a>>=s,i-=s,bl=1<<32-Ae(e)+i|l<<i|a,yl=u+t}else bl=1<<u|l<<i|a,yl=t}function nr(t){t.return!==null&&(pa(t,1),Af(t,1,0))}function ir(t){for(;t===Pi;)Pi=Pa[--tn],Pa[tn]=null,tu=Pa[--tn],Pa[tn]=null;for(;t===ha;)ha=Qe[--qe],Qe[qe]=null,yl=Qe[--qe],Qe[qe]=null,bl=Qe[--qe],Qe[qe]=null}var Se=null,Kt=null,Ct=!1,ga=null,nl=!1,ur=Error(r(519));function ma(t){var e=Error(r(418,""));throw Zn(Ge(e,t)),ur}function Sf(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[be]=t,e[Ee]=a,l){case"dialog":Dt("cancel",e),Dt("close",e);break;case"iframe":case"object":case"embed":Dt("load",e);break;case"video":case"audio":for(l=0;l<bi.length;l++)Dt(bi[l],e);break;case"source":Dt("error",e);break;case"img":case"image":case"link":Dt("error",e),Dt("load",e);break;case"details":Dt("toggle",e);break;case"input":Dt("invalid",e),Bs(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Li(e);break;case"select":Dt("invalid",e);break;case"textarea":Dt("invalid",e),Us(e,a.value,a.defaultValue,a.children),Li(e)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||$h(e.textContent,l)?(a.popover!=null&&(Dt("beforetoggle",e),Dt("toggle",e)),a.onScroll!=null&&Dt("scroll",e),a.onScrollEnd!=null&&Dt("scrollend",e),a.onClick!=null&&(e.onclick=_u),e=!0):e=!1,e||ma(t)}function wf(t){for(Se=t.return;Se;)switch(Se.tag){case 5:case 13:nl=!1;return;case 27:case 3:nl=!0;return;default:Se=Se.return}}function Xn(t){if(t!==Se)return!1;if(!Ct)return wf(t),Ct=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||Sc(t.type,t.memoizedProps)),l=!l),l&&Kt&&ma(t),wf(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(l=t.data,l==="/$"){if(e===0){Kt=Ie(t.nextSibling);break t}e--}else l!=="$"&&l!=="$!"&&l!=="$?"||e++;t=t.nextSibling}Kt=null}}else e===27?(e=Kt,Wl(t.type)?(t=Dc,Dc=null,Kt=t):Kt=e):Kt=Se?Ie(t.stateNode.nextSibling):null;return!0}function Vn(){Kt=Se=null,Ct=!1}function Ef(){var t=ga;return t!==null&&(ke===null?ke=t:ke.push.apply(ke,t),ga=null),t}function Zn(t){ga===null?ga=[t]:ga.push(t)}var or=B(null),ba=null,vl=null;function jl(t,e,l){_(or,e._currentValue),e._currentValue=l}function xl(t){t._currentValue=or.current,W(or)}function rr(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function cr(t,e,l,a){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){var s=i.child;u=u.firstContext;t:for(;u!==null;){var f=u;u=i;for(var m=0;m<e.length;m++)if(f.context===e[m]){u.lanes|=l,f=u.alternate,f!==null&&(f.lanes|=l),rr(u.return,l,t),a||(s=null);break t}u=f.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(r(341));s.lanes|=l,u=s.alternate,u!==null&&(u.lanes|=l),rr(s,l,t),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function Kn(t,e,l,a){t=null;for(var i=e,u=!1;i!==null;){if(!u){if((i.flags&524288)!==0)u=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(r(387));if(s=s.memoizedProps,s!==null){var f=i.type;Oe(i.pendingProps.value,s.value)||(t!==null?t.push(f):t=[f])}}else if(i===ct.current){if(s=i.alternate,s===null)throw Error(r(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(wi):t=[wi])}i=i.return}t!==null&&cr(e,t,l,a),e.flags|=262144}function eu(t){for(t=t.firstContext;t!==null;){if(!Oe(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ya(t){ba=t,vl=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ye(t){return Tf(ba,t)}function lu(t,e){return ba===null&&ya(t),Tf(t,e)}function Tf(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},vl===null){if(t===null)throw Error(r(308));vl=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else vl=vl.next=e;return l}var Wg=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},Fg=n.unstable_scheduleCallback,Ig=n.unstable_NormalPriority,ae={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sr(){return{controller:new Wg,data:new Map,refCount:0}}function Jn(t){t.refCount--,t.refCount===0&&Fg(Ig,function(){t.controller.abort()})}var Wn=null,fr=0,en=0,ln=null;function Pg(t,e){if(Wn===null){var l=Wn=[];fr=0,en=hc(),ln={status:"pending",value:void 0,then:function(a){l.push(a)}}}return fr++,e.then(Df,Df),e}function Df(){if(--fr===0&&Wn!==null){ln!==null&&(ln.status="fulfilled");var t=Wn;Wn=null,en=0,ln=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function tm(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(i){l.push(i)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var i=0;i<l.length;i++)(0,l[i])(e)},function(i){for(a.status="rejected",a.reason=i,i=0;i<l.length;i++)(0,l[i])(void 0)}),a}var Rf=D.S;D.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Pg(t,e),Rf!==null&&Rf(t,e)};var va=B(null);function dr(){var t=va.current;return t!==null?t:Yt.pooledCache}function au(t,e){e===null?_(va,va.current):_(va,e.pool)}function kf(){var t=dr();return t===null?null:{parent:ae._currentValue,pool:t}}var Fn=Error(r(460)),Of=Error(r(474)),nu=Error(r(542)),hr={then:function(){}};function zf(t){return t=t.status,t==="fulfilled"||t==="rejected"}function iu(){}function Cf(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(iu,iu),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Nf(t),t;default:if(typeof e.status=="string")e.then(iu,iu);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=a}},function(a){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Nf(t),t}throw In=e,Fn}}var In=null;function Mf(){if(In===null)throw Error(r(459));var t=In;return In=null,t}function Nf(t){if(t===Fn||t===nu)throw Error(r(483))}var Bl=!1;function pr(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gr(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Hl(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ul(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(jt&2)!==0){var i=a.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),a.pending=e,e=Fi(t),vf(t,null,l),e}return Wi(t,a,e,l),Fi(t)}function Pn(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Ts(t,l)}}function mr(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var i=null,u=null;if(l=l.firstBaseUpdate,l!==null){do{var s={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};u===null?i=u=s:u=u.next=s,l=l.next}while(l!==null);u===null?i=u=e:u=u.next=e}else i=u=e;l={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var br=!1;function ti(){if(br){var t=ln;if(t!==null)throw t}}function ei(t,e,l,a){br=!1;var i=t.updateQueue;Bl=!1;var u=i.firstBaseUpdate,s=i.lastBaseUpdate,f=i.shared.pending;if(f!==null){i.shared.pending=null;var m=f,E=m.next;m.next=null,s===null?u=E:s.next=E,s=m;var H=t.alternate;H!==null&&(H=H.updateQueue,f=H.lastBaseUpdate,f!==s&&(f===null?H.firstBaseUpdate=E:f.next=E,H.lastBaseUpdate=m))}if(u!==null){var L=i.baseState;s=0,H=E=m=null,f=u;do{var k=f.lane&-536870913,O=k!==f.lane;if(O?(Ot&k)===k:(a&k)===k){k!==0&&k===en&&(br=!0),H!==null&&(H=H.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});t:{var mt=t,ht=f;k=e;var $t=l;switch(ht.tag){case 1:if(mt=ht.payload,typeof mt=="function"){L=mt.call($t,L,k);break t}L=mt;break t;case 3:mt.flags=mt.flags&-65537|128;case 0:if(mt=ht.payload,k=typeof mt=="function"?mt.call($t,L,k):mt,k==null)break t;L=R({},L,k);break t;case 2:Bl=!0}}k=f.callback,k!==null&&(t.flags|=64,O&&(t.flags|=8192),O=i.callbacks,O===null?i.callbacks=[k]:O.push(k))}else O={lane:k,tag:f.tag,payload:f.payload,callback:f.callback,next:null},H===null?(E=H=O,m=L):H=H.next=O,s|=k;if(f=f.next,f===null){if(f=i.shared.pending,f===null)break;O=f,f=O.next,O.next=null,i.lastBaseUpdate=O,i.shared.pending=null}}while(!0);H===null&&(m=L),i.baseState=m,i.firstBaseUpdate=E,i.lastBaseUpdate=H,u===null&&(i.shared.lanes=0),Vl|=s,t.lanes=s,t.memoizedState=L}}function _f(t,e){if(typeof t!="function")throw Error(r(191,t));t.call(e)}function jf(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)_f(l[t],e)}var an=B(null),uu=B(0);function Bf(t,e){t=Rl,_(uu,t),_(an,e),Rl=t|e.baseLanes}function yr(){_(uu,Rl),_(an,an.current)}function vr(){Rl=uu.current,W(an),W(uu)}var $l=0,wt=null,Ht=null,Pt=null,ou=!1,nn=!1,xa=!1,ru=0,li=0,un=null,em=0;function Ft(){throw Error(r(321))}function xr(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!Oe(t[l],e[l]))return!1;return!0}function Ar(t,e,l,a,i,u){return $l=u,wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,D.H=t===null||t.memoizedState===null?vd:xd,xa=!1,u=l(a,i),xa=!1,nn&&(u=Uf(e,l,a,i)),Hf(t),u}function Hf(t){D.H=pu;var e=Ht!==null&&Ht.next!==null;if($l=0,Pt=Ht=wt=null,ou=!1,li=0,un=null,e)throw Error(r(300));t===null||oe||(t=t.dependencies,t!==null&&eu(t)&&(oe=!0))}function Uf(t,e,l,a){wt=t;var i=0;do{if(nn&&(un=null),li=0,nn=!1,25<=i)throw Error(r(301));if(i+=1,Pt=Ht=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}D.H=rm,u=e(l,a)}while(nn);return u}function lm(){var t=D.H,e=t.useState()[0];return e=typeof e.then=="function"?ai(e):e,t=t.useState()[0],(Ht!==null?Ht.memoizedState:null)!==t&&(wt.flags|=1024),e}function Sr(){var t=ru!==0;return ru=0,t}function wr(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function Er(t){if(ou){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ou=!1}$l=0,Pt=Ht=wt=null,nn=!1,li=ru=0,un=null}function De(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?wt.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function te(){if(Ht===null){var t=wt.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var e=Pt===null?wt.memoizedState:Pt.next;if(e!==null)Pt=e,Ht=t;else{if(t===null)throw wt.alternate===null?Error(r(467)):Error(r(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},Pt===null?wt.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function Tr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ai(t){var e=li;return li+=1,un===null&&(un=[]),t=Cf(un,t,e),e=wt,(Pt===null?e.memoizedState:Pt.next)===null&&(e=e.alternate,D.H=e===null||e.memoizedState===null?vd:xd),t}function cu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ai(t);if(t.$$typeof===V)return ye(t)}throw Error(r(438,String(t)))}function Dr(t){var e=null,l=wt.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=wt.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=Tr(),wt.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=Gt;return e.index++,l}function Al(t,e){return typeof e=="function"?e(t):e}function su(t){var e=te();return Rr(e,Ht,t)}function Rr(t,e,l){var a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=l;var i=t.baseQueue,u=a.pending;if(u!==null){if(i!==null){var s=i.next;i.next=u.next,u.next=s}e.baseQueue=i=u,a.pending=null}if(u=t.baseState,i===null)t.memoizedState=u;else{e=i.next;var f=s=null,m=null,E=e,H=!1;do{var L=E.lane&-536870913;if(L!==E.lane?(Ot&L)===L:($l&L)===L){var k=E.revertLane;if(k===0)m!==null&&(m=m.next={lane:0,revertLane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),L===en&&(H=!0);else if(($l&k)===k){E=E.next,k===en&&(H=!0);continue}else L={lane:0,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},m===null?(f=m=L,s=u):m=m.next=L,wt.lanes|=k,Vl|=k;L=E.action,xa&&l(u,L),u=E.hasEagerState?E.eagerState:l(u,L)}else k={lane:L,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},m===null?(f=m=k,s=u):m=m.next=k,wt.lanes|=L,Vl|=L;E=E.next}while(E!==null&&E!==e);if(m===null?s=u:m.next=f,!Oe(u,t.memoizedState)&&(oe=!0,H&&(l=ln,l!==null)))throw l;t.memoizedState=u,t.baseState=s,t.baseQueue=m,a.lastRenderedState=u}return i===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function kr(t){var e=te(),l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=t;var a=l.dispatch,i=l.pending,u=e.memoizedState;if(i!==null){l.pending=null;var s=i=i.next;do u=t(u,s.action),s=s.next;while(s!==i);Oe(u,e.memoizedState)||(oe=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),l.lastRenderedState=u}return[u,a]}function $f(t,e,l){var a=wt,i=te(),u=Ct;if(u){if(l===void 0)throw Error(r(407));l=l()}else l=e();var s=!Oe((Ht||i).memoizedState,l);s&&(i.memoizedState=l,oe=!0),i=i.queue;var f=Yf.bind(null,a,i,t);if(ni(2048,8,f,[t]),i.getSnapshot!==e||s||Pt!==null&&Pt.memoizedState.tag&1){if(a.flags|=2048,on(9,fu(),Gf.bind(null,a,i,l,e),null),Yt===null)throw Error(r(349));u||($l&124)!==0||Lf(a,e,l)}return l}function Lf(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=wt.updateQueue,e===null?(e=Tr(),wt.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function Gf(t,e,l,a){e.value=l,e.getSnapshot=a,Qf(e)&&qf(t)}function Yf(t,e,l){return l(function(){Qf(e)&&qf(t)})}function Qf(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!Oe(t,l)}catch{return!0}}function qf(t){var e=Fa(t,2);e!==null&&je(e,t,2)}function Or(t){var e=De();if(typeof t=="function"){var l=t;if(t=l(),xa){al(!0);try{l()}finally{al(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Al,lastRenderedState:t},e}function Xf(t,e,l,a){return t.baseState=l,Rr(t,Ht,typeof a=="function"?a:Al)}function am(t,e,l,a,i){if(hu(t))throw Error(r(485));if(t=e.action,t!==null){var u={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){u.listeners.push(s)}};D.T!==null?l(!0):u.isTransition=!1,a(u),l=e.pending,l===null?(u.next=e.pending=u,Vf(e,u)):(u.next=l.next,e.pending=l.next=u)}}function Vf(t,e){var l=e.action,a=e.payload,i=t.state;if(e.isTransition){var u=D.T,s={};D.T=s;try{var f=l(i,a),m=D.S;m!==null&&m(s,f),Zf(t,e,f)}catch(E){zr(t,e,E)}finally{D.T=u}}else try{u=l(i,a),Zf(t,e,u)}catch(E){zr(t,e,E)}}function Zf(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Kf(t,e,a)},function(a){return zr(t,e,a)}):Kf(t,e,l)}function Kf(t,e,l){e.status="fulfilled",e.value=l,Jf(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Vf(t,l)))}function zr(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,Jf(e),e=e.next;while(e!==a)}t.action=null}function Jf(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Wf(t,e){return e}function Ff(t,e){if(Ct){var l=Yt.formState;if(l!==null){t:{var a=wt;if(Ct){if(Kt){e:{for(var i=Kt,u=nl;i.nodeType!==8;){if(!u){i=null;break e}if(i=Ie(i.nextSibling),i===null){i=null;break e}}u=i.data,i=u==="F!"||u==="F"?i:null}if(i){Kt=Ie(i.nextSibling),a=i.data==="F!";break t}}ma(a)}a=!1}a&&(e=l[0])}}return l=De(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wf,lastRenderedState:e},l.queue=a,l=md.bind(null,wt,a),a.dispatch=l,a=Or(!1),u=jr.bind(null,wt,!1,a.queue),a=De(),i={state:e,dispatch:null,action:t,pending:null},a.queue=i,l=am.bind(null,wt,i,u,l),i.dispatch=l,a.memoizedState=t,[e,l,!1]}function If(t){var e=te();return Pf(e,Ht,t)}function Pf(t,e,l){if(e=Rr(t,e,Wf)[0],t=su(Al)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=ai(e)}catch(s){throw s===Fn?nu:s}else a=e;e=te();var i=e.queue,u=i.dispatch;return l!==e.memoizedState&&(wt.flags|=2048,on(9,fu(),nm.bind(null,i,l),null)),[a,u,t]}function nm(t,e){t.action=e}function td(t){var e=te(),l=Ht;if(l!==null)return Pf(e,l,t);te(),e=e.memoizedState,l=te();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function on(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=wt.updateQueue,e===null&&(e=Tr(),wt.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function fu(){return{destroy:void 0,resource:void 0}}function ed(){return te().memoizedState}function du(t,e,l,a){var i=De();a=a===void 0?null:a,wt.flags|=t,i.memoizedState=on(1|e,fu(),l,a)}function ni(t,e,l,a){var i=te();a=a===void 0?null:a;var u=i.memoizedState.inst;Ht!==null&&a!==null&&xr(a,Ht.memoizedState.deps)?i.memoizedState=on(e,u,l,a):(wt.flags|=t,i.memoizedState=on(1|e,u,l,a))}function ld(t,e){du(8390656,8,t,e)}function ad(t,e){ni(2048,8,t,e)}function nd(t,e){return ni(4,2,t,e)}function id(t,e){return ni(4,4,t,e)}function ud(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function od(t,e,l){l=l!=null?l.concat([t]):null,ni(4,4,ud.bind(null,e,t),l)}function Cr(){}function rd(t,e){var l=te();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&xr(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function cd(t,e){var l=te();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&xr(e,a[1]))return a[0];if(a=t(),xa){al(!0);try{t()}finally{al(!1)}}return l.memoizedState=[a,e],a}function Mr(t,e,l){return l===void 0||($l&1073741824)!==0?t.memoizedState=e:(t.memoizedState=l,t=dh(),wt.lanes|=t,Vl|=t,l)}function sd(t,e,l,a){return Oe(l,e)?l:an.current!==null?(t=Mr(t,l,a),Oe(t,e)||(oe=!0),t):($l&42)===0?(oe=!0,t.memoizedState=l):(t=dh(),wt.lanes|=t,Vl|=t,e)}function fd(t,e,l,a,i){var u=j.p;j.p=u!==0&&8>u?u:8;var s=D.T,f={};D.T=f,jr(t,!1,e,l);try{var m=i(),E=D.S;if(E!==null&&E(f,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var H=tm(m,a);ii(t,e,H,_e(t))}else ii(t,e,a,_e(t))}catch(L){ii(t,e,{then:function(){},status:"rejected",reason:L},_e())}finally{j.p=u,D.T=s}}function im(){}function Nr(t,e,l,a){if(t.tag!==5)throw Error(r(476));var i=dd(t).queue;fd(t,i,e,q,l===null?im:function(){return hd(t),l(a)})}function dd(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Al,lastRenderedState:q},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Al,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function hd(t){var e=dd(t).next.queue;ii(t,e,{},_e())}function _r(){return ye(wi)}function pd(){return te().memoizedState}function gd(){return te().memoizedState}function um(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=_e();t=Hl(l);var a=Ul(e,t,l);a!==null&&(je(a,e,l),Pn(a,e,l)),e={cache:sr()},t.payload=e;return}e=e.return}}function om(t,e,l){var a=_e();l={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},hu(t)?bd(e,l):(l=tr(t,e,l,a),l!==null&&(je(l,t,a),yd(l,e,a)))}function md(t,e,l){var a=_e();ii(t,e,l,a)}function ii(t,e,l,a){var i={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(hu(t))bd(e,i);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var s=e.lastRenderedState,f=u(s,l);if(i.hasEagerState=!0,i.eagerState=f,Oe(f,s))return Wi(t,e,i,0),Yt===null&&Ji(),!1}catch{}finally{}if(l=tr(t,e,i,a),l!==null)return je(l,t,a),yd(l,e,a),!0}return!1}function jr(t,e,l,a){if(a={lane:2,revertLane:hc(),action:a,hasEagerState:!1,eagerState:null,next:null},hu(t)){if(e)throw Error(r(479))}else e=tr(t,l,a,2),e!==null&&je(e,t,2)}function hu(t){var e=t.alternate;return t===wt||e!==null&&e===wt}function bd(t,e){nn=ou=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function yd(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Ts(t,l)}}var pu={readContext:ye,use:cu,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useLayoutEffect:Ft,useInsertionEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useSyncExternalStore:Ft,useId:Ft,useHostTransitionStatus:Ft,useFormState:Ft,useActionState:Ft,useOptimistic:Ft,useMemoCache:Ft,useCacheRefresh:Ft},vd={readContext:ye,use:cu,useCallback:function(t,e){return De().memoizedState=[t,e===void 0?null:e],t},useContext:ye,useEffect:ld,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,du(4194308,4,ud.bind(null,e,t),l)},useLayoutEffect:function(t,e){return du(4194308,4,t,e)},useInsertionEffect:function(t,e){du(4,2,t,e)},useMemo:function(t,e){var l=De();e=e===void 0?null:e;var a=t();if(xa){al(!0);try{t()}finally{al(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=De();if(l!==void 0){var i=l(e);if(xa){al(!0);try{l(e)}finally{al(!1)}}}else i=e;return a.memoizedState=a.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=om.bind(null,wt,t),[a.memoizedState,t]},useRef:function(t){var e=De();return t={current:t},e.memoizedState=t},useState:function(t){t=Or(t);var e=t.queue,l=md.bind(null,wt,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:Cr,useDeferredValue:function(t,e){var l=De();return Mr(l,t,e)},useTransition:function(){var t=Or(!1);return t=fd.bind(null,wt,t.queue,!0,!1),De().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=wt,i=De();if(Ct){if(l===void 0)throw Error(r(407));l=l()}else{if(l=e(),Yt===null)throw Error(r(349));(Ot&124)!==0||Lf(a,e,l)}i.memoizedState=l;var u={value:l,getSnapshot:e};return i.queue=u,ld(Yf.bind(null,a,u,t),[t]),a.flags|=2048,on(9,fu(),Gf.bind(null,a,u,l,e),null),l},useId:function(){var t=De(),e=Yt.identifierPrefix;if(Ct){var l=yl,a=bl;l=(a&~(1<<32-Ae(a)-1)).toString(32)+l,e="«"+e+"R"+l,l=ru++,0<l&&(e+="H"+l.toString(32)),e+="»"}else l=em++,e="«"+e+"r"+l.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:_r,useFormState:Ff,useActionState:Ff,useOptimistic:function(t){var e=De();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=jr.bind(null,wt,!0,l),l.dispatch=e,[t,e]},useMemoCache:Dr,useCacheRefresh:function(){return De().memoizedState=um.bind(null,wt)}},xd={readContext:ye,use:cu,useCallback:rd,useContext:ye,useEffect:ad,useImperativeHandle:od,useInsertionEffect:nd,useLayoutEffect:id,useMemo:cd,useReducer:su,useRef:ed,useState:function(){return su(Al)},useDebugValue:Cr,useDeferredValue:function(t,e){var l=te();return sd(l,Ht.memoizedState,t,e)},useTransition:function(){var t=su(Al)[0],e=te().memoizedState;return[typeof t=="boolean"?t:ai(t),e]},useSyncExternalStore:$f,useId:pd,useHostTransitionStatus:_r,useFormState:If,useActionState:If,useOptimistic:function(t,e){var l=te();return Xf(l,Ht,t,e)},useMemoCache:Dr,useCacheRefresh:gd},rm={readContext:ye,use:cu,useCallback:rd,useContext:ye,useEffect:ad,useImperativeHandle:od,useInsertionEffect:nd,useLayoutEffect:id,useMemo:cd,useReducer:kr,useRef:ed,useState:function(){return kr(Al)},useDebugValue:Cr,useDeferredValue:function(t,e){var l=te();return Ht===null?Mr(l,t,e):sd(l,Ht.memoizedState,t,e)},useTransition:function(){var t=kr(Al)[0],e=te().memoizedState;return[typeof t=="boolean"?t:ai(t),e]},useSyncExternalStore:$f,useId:pd,useHostTransitionStatus:_r,useFormState:td,useActionState:td,useOptimistic:function(t,e){var l=te();return Ht!==null?Xf(l,Ht,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:Dr,useCacheRefresh:gd},rn=null,ui=0;function gu(t){var e=ui;return ui+=1,rn===null&&(rn=[]),Cf(rn,t,e)}function oi(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function mu(t,e){throw e.$$typeof===M?Error(r(525)):(t=Object.prototype.toString.call(e),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Ad(t){var e=t._init;return e(t._payload)}function Sd(t){function e(S,x){if(t){var w=S.deletions;w===null?(S.deletions=[x],S.flags|=16):w.push(x)}}function l(S,x){if(!t)return null;for(;x!==null;)e(S,x),x=x.sibling;return null}function a(S){for(var x=new Map;S!==null;)S.key!==null?x.set(S.key,S):x.set(S.index,S),S=S.sibling;return x}function i(S,x){return S=ml(S,x),S.index=0,S.sibling=null,S}function u(S,x,w){return S.index=w,t?(w=S.alternate,w!==null?(w=w.index,w<x?(S.flags|=67108866,x):w):(S.flags|=67108866,x)):(S.flags|=1048576,x)}function s(S){return t&&S.alternate===null&&(S.flags|=67108866),S}function f(S,x,w,$){return x===null||x.tag!==6?(x=lr(w,S.mode,$),x.return=S,x):(x=i(x,w),x.return=S,x)}function m(S,x,w,$){var rt=w.type;return rt===I?H(S,x,w.props.children,$,w.key):x!==null&&(x.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===xt&&Ad(rt)===x.type)?(x=i(x,w.props),oi(x,w),x.return=S,x):(x=Ii(w.type,w.key,w.props,null,S.mode,$),oi(x,w),x.return=S,x)}function E(S,x,w,$){return x===null||x.tag!==4||x.stateNode.containerInfo!==w.containerInfo||x.stateNode.implementation!==w.implementation?(x=ar(w,S.mode,$),x.return=S,x):(x=i(x,w.children||[]),x.return=S,x)}function H(S,x,w,$,rt){return x===null||x.tag!==7?(x=da(w,S.mode,$,rt),x.return=S,x):(x=i(x,w),x.return=S,x)}function L(S,x,w){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=lr(""+x,S.mode,w),x.return=S,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case G:return w=Ii(x.type,x.key,x.props,null,S.mode,w),oi(w,x),w.return=S,w;case et:return x=ar(x,S.mode,w),x.return=S,x;case xt:var $=x._init;return x=$(x._payload),L(S,x,w)}if(K(x)||bt(x))return x=da(x,S.mode,w,null),x.return=S,x;if(typeof x.then=="function")return L(S,gu(x),w);if(x.$$typeof===V)return L(S,lu(S,x),w);mu(S,x)}return null}function k(S,x,w,$){var rt=x!==null?x.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return rt!==null?null:f(S,x,""+w,$);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case G:return w.key===rt?m(S,x,w,$):null;case et:return w.key===rt?E(S,x,w,$):null;case xt:return rt=w._init,w=rt(w._payload),k(S,x,w,$)}if(K(w)||bt(w))return rt!==null?null:H(S,x,w,$,null);if(typeof w.then=="function")return k(S,x,gu(w),$);if(w.$$typeof===V)return k(S,x,lu(S,w),$);mu(S,w)}return null}function O(S,x,w,$,rt){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return S=S.get(w)||null,f(x,S,""+$,rt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case G:return S=S.get($.key===null?w:$.key)||null,m(x,S,$,rt);case et:return S=S.get($.key===null?w:$.key)||null,E(x,S,$,rt);case xt:var Et=$._init;return $=Et($._payload),O(S,x,w,$,rt)}if(K($)||bt($))return S=S.get(w)||null,H(x,S,$,rt,null);if(typeof $.then=="function")return O(S,x,w,gu($),rt);if($.$$typeof===V)return O(S,x,w,lu(x,$),rt);mu(x,$)}return null}function mt(S,x,w,$){for(var rt=null,Et=null,st=x,pt=x=0,ce=null;st!==null&&pt<w.length;pt++){st.index>pt?(ce=st,st=null):ce=st.sibling;var zt=k(S,st,w[pt],$);if(zt===null){st===null&&(st=ce);break}t&&st&&zt.alternate===null&&e(S,st),x=u(zt,x,pt),Et===null?rt=zt:Et.sibling=zt,Et=zt,st=ce}if(pt===w.length)return l(S,st),Ct&&pa(S,pt),rt;if(st===null){for(;pt<w.length;pt++)st=L(S,w[pt],$),st!==null&&(x=u(st,x,pt),Et===null?rt=st:Et.sibling=st,Et=st);return Ct&&pa(S,pt),rt}for(st=a(st);pt<w.length;pt++)ce=O(st,S,pt,w[pt],$),ce!==null&&(t&&ce.alternate!==null&&st.delete(ce.key===null?pt:ce.key),x=u(ce,x,pt),Et===null?rt=ce:Et.sibling=ce,Et=ce);return t&&st.forEach(function(ea){return e(S,ea)}),Ct&&pa(S,pt),rt}function ht(S,x,w,$){if(w==null)throw Error(r(151));for(var rt=null,Et=null,st=x,pt=x=0,ce=null,zt=w.next();st!==null&&!zt.done;pt++,zt=w.next()){st.index>pt?(ce=st,st=null):ce=st.sibling;var ea=k(S,st,zt.value,$);if(ea===null){st===null&&(st=ce);break}t&&st&&ea.alternate===null&&e(S,st),x=u(ea,x,pt),Et===null?rt=ea:Et.sibling=ea,Et=ea,st=ce}if(zt.done)return l(S,st),Ct&&pa(S,pt),rt;if(st===null){for(;!zt.done;pt++,zt=w.next())zt=L(S,zt.value,$),zt!==null&&(x=u(zt,x,pt),Et===null?rt=zt:Et.sibling=zt,Et=zt);return Ct&&pa(S,pt),rt}for(st=a(st);!zt.done;pt++,zt=w.next())zt=O(st,S,pt,zt.value,$),zt!==null&&(t&&zt.alternate!==null&&st.delete(zt.key===null?pt:zt.key),x=u(zt,x,pt),Et===null?rt=zt:Et.sibling=zt,Et=zt);return t&&st.forEach(function(cb){return e(S,cb)}),Ct&&pa(S,pt),rt}function $t(S,x,w,$){if(typeof w=="object"&&w!==null&&w.type===I&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case G:t:{for(var rt=w.key;x!==null;){if(x.key===rt){if(rt=w.type,rt===I){if(x.tag===7){l(S,x.sibling),$=i(x,w.props.children),$.return=S,S=$;break t}}else if(x.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===xt&&Ad(rt)===x.type){l(S,x.sibling),$=i(x,w.props),oi($,w),$.return=S,S=$;break t}l(S,x);break}else e(S,x);x=x.sibling}w.type===I?($=da(w.props.children,S.mode,$,w.key),$.return=S,S=$):($=Ii(w.type,w.key,w.props,null,S.mode,$),oi($,w),$.return=S,S=$)}return s(S);case et:t:{for(rt=w.key;x!==null;){if(x.key===rt)if(x.tag===4&&x.stateNode.containerInfo===w.containerInfo&&x.stateNode.implementation===w.implementation){l(S,x.sibling),$=i(x,w.children||[]),$.return=S,S=$;break t}else{l(S,x);break}else e(S,x);x=x.sibling}$=ar(w,S.mode,$),$.return=S,S=$}return s(S);case xt:return rt=w._init,w=rt(w._payload),$t(S,x,w,$)}if(K(w))return mt(S,x,w,$);if(bt(w)){if(rt=bt(w),typeof rt!="function")throw Error(r(150));return w=rt.call(w),ht(S,x,w,$)}if(typeof w.then=="function")return $t(S,x,gu(w),$);if(w.$$typeof===V)return $t(S,x,lu(S,w),$);mu(S,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,x!==null&&x.tag===6?(l(S,x.sibling),$=i(x,w),$.return=S,S=$):(l(S,x),$=lr(w,S.mode,$),$.return=S,S=$),s(S)):l(S,x)}return function(S,x,w,$){try{ui=0;var rt=$t(S,x,w,$);return rn=null,rt}catch(st){if(st===Fn||st===nu)throw st;var Et=ze(29,st,null,S.mode);return Et.lanes=$,Et.return=S,Et}finally{}}}var cn=Sd(!0),wd=Sd(!1),Xe=B(null),il=null;function Ll(t){var e=t.alternate;_(ne,ne.current&1),_(Xe,t),il===null&&(e===null||an.current!==null||e.memoizedState!==null)&&(il=t)}function Ed(t){if(t.tag===22){if(_(ne,ne.current),_(Xe,t),il===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(il=t)}}else Gl()}function Gl(){_(ne,ne.current),_(Xe,Xe.current)}function Sl(t){W(Xe),il===t&&(il=null),W(ne)}var ne=B(0);function bu(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||Tc(l)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Br(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:R({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var Hr={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=_e(),i=Hl(a);i.payload=e,l!=null&&(i.callback=l),e=Ul(t,i,a),e!==null&&(je(e,t,a),Pn(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=_e(),i=Hl(a);i.tag=1,i.payload=e,l!=null&&(i.callback=l),e=Ul(t,i,a),e!==null&&(je(e,t,a),Pn(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=_e(),a=Hl(l);a.tag=2,e!=null&&(a.callback=e),e=Ul(t,a,l),e!==null&&(je(e,t,l),Pn(e,t,l))}};function Td(t,e,l,a,i,u,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,u,s):e.prototype&&e.prototype.isPureReactComponent?!Qn(l,a)||!Qn(i,u):!0}function Dd(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&Hr.enqueueReplaceState(e,e.state,null)}function Aa(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=R({},l));for(var i in t)l[i]===void 0&&(l[i]=t[i])}return l}var yu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Rd(t){yu(t)}function kd(t){console.error(t)}function Od(t){yu(t)}function vu(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function zd(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Ur(t,e,l){return l=Hl(l),l.tag=3,l.payload={element:null},l.callback=function(){vu(t,e)},l}function Cd(t){return t=Hl(t),t.tag=3,t}function Md(t,e,l,a){var i=l.type.getDerivedStateFromError;if(typeof i=="function"){var u=a.value;t.payload=function(){return i(u)},t.callback=function(){zd(e,l,a)}}var s=l.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){zd(e,l,a),typeof i!="function"&&(Zl===null?Zl=new Set([this]):Zl.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})})}function cm(t,e,l,a,i){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&Kn(e,l,i,!0),l=Xe.current,l!==null){switch(l.tag){case 13:return il===null?rc():l.alternate===null&&Jt===0&&(Jt=3),l.flags&=-257,l.flags|=65536,l.lanes=i,a===hr?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),sc(t,a,i)),!1;case 22:return l.flags|=65536,a===hr?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),sc(t,a,i)),!1}throw Error(r(435,l.tag))}return sc(t,a,i),rc(),!1}if(Ct)return e=Xe.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,a!==ur&&(t=Error(r(422),{cause:a}),Zn(Ge(t,l)))):(a!==ur&&(e=Error(r(423),{cause:a}),Zn(Ge(e,l))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,a=Ge(a,l),i=Ur(t.stateNode,a,i),mr(t,i),Jt!==4&&(Jt=2)),!1;var u=Error(r(520),{cause:a});if(u=Ge(u,l),pi===null?pi=[u]:pi.push(u),Jt!==4&&(Jt=2),e===null)return!0;a=Ge(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=i&-i,l.lanes|=t,t=Ur(l.stateNode,a,t),mr(l,t),!1;case 1:if(e=l.type,u=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Zl===null||!Zl.has(u))))return l.flags|=65536,i&=-i,l.lanes|=i,i=Cd(i),Md(i,t,l,a),mr(l,i),!1}l=l.return}while(l!==null);return!1}var Nd=Error(r(461)),oe=!1;function de(t,e,l,a){e.child=t===null?wd(e,null,l,a):cn(e,t.child,l,a)}function _d(t,e,l,a,i){l=l.render;var u=e.ref;if("ref"in a){var s={};for(var f in a)f!=="ref"&&(s[f]=a[f])}else s=a;return ya(e),a=Ar(t,e,l,s,u,i),f=Sr(),t!==null&&!oe?(wr(t,e,i),wl(t,e,i)):(Ct&&f&&nr(e),e.flags|=1,de(t,e,a,i),e.child)}function jd(t,e,l,a,i){if(t===null){var u=l.type;return typeof u=="function"&&!er(u)&&u.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=u,Bd(t,e,u,a,i)):(t=Ii(l.type,null,a,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!Vr(t,i)){var s=u.memoizedProps;if(l=l.compare,l=l!==null?l:Qn,l(s,a)&&t.ref===e.ref)return wl(t,e,i)}return e.flags|=1,t=ml(u,a),t.ref=e.ref,t.return=e,e.child=t}function Bd(t,e,l,a,i){if(t!==null){var u=t.memoizedProps;if(Qn(u,a)&&t.ref===e.ref)if(oe=!1,e.pendingProps=a=u,Vr(t,i))(t.flags&131072)!==0&&(oe=!0);else return e.lanes=t.lanes,wl(t,e,i)}return $r(t,e,l,a,i)}function Hd(t,e,l){var a=e.pendingProps,i=a.children,u=t!==null?t.memoizedState:null;if(a.mode==="hidden"){if((e.flags&128)!==0){if(a=u!==null?u.baseLanes|l:l,t!==null){for(i=e.child=t.child,u=0;i!==null;)u=u|i.lanes|i.childLanes,i=i.sibling;e.childLanes=u&~a}else e.childLanes=0,e.child=null;return Ud(t,e,a,l)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&au(e,u!==null?u.cachePool:null),u!==null?Bf(e,u):yr(),Ed(e);else return e.lanes=e.childLanes=536870912,Ud(t,e,u!==null?u.baseLanes|l:l,l)}else u!==null?(au(e,u.cachePool),Bf(e,u),Gl(),e.memoizedState=null):(t!==null&&au(e,null),yr(),Gl());return de(t,e,i,l),e.child}function Ud(t,e,l,a){var i=dr();return i=i===null?null:{parent:ae._currentValue,pool:i},e.memoizedState={baseLanes:l,cachePool:i},t!==null&&au(e,null),yr(),Ed(e),t!==null&&Kn(t,e,a,!0),null}function xu(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(r(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function $r(t,e,l,a,i){return ya(e),l=Ar(t,e,l,a,void 0,i),a=Sr(),t!==null&&!oe?(wr(t,e,i),wl(t,e,i)):(Ct&&a&&nr(e),e.flags|=1,de(t,e,l,i),e.child)}function $d(t,e,l,a,i,u){return ya(e),e.updateQueue=null,l=Uf(e,a,l,i),Hf(t),a=Sr(),t!==null&&!oe?(wr(t,e,u),wl(t,e,u)):(Ct&&a&&nr(e),e.flags|=1,de(t,e,l,u),e.child)}function Ld(t,e,l,a,i){if(ya(e),e.stateNode===null){var u=Ia,s=l.contextType;typeof s=="object"&&s!==null&&(u=ye(s)),u=new l(a,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Hr,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=a,u.state=e.memoizedState,u.refs={},pr(e),s=l.contextType,u.context=typeof s=="object"&&s!==null?ye(s):Ia,u.state=e.memoizedState,s=l.getDerivedStateFromProps,typeof s=="function"&&(Br(e,l,s,a),u.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(s=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),s!==u.state&&Hr.enqueueReplaceState(u,u.state,null),ei(e,a,u,i),ti(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){u=e.stateNode;var f=e.memoizedProps,m=Aa(l,f);u.props=m;var E=u.context,H=l.contextType;s=Ia,typeof H=="object"&&H!==null&&(s=ye(H));var L=l.getDerivedStateFromProps;H=typeof L=="function"||typeof u.getSnapshotBeforeUpdate=="function",f=e.pendingProps!==f,H||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f||E!==s)&&Dd(e,u,a,s),Bl=!1;var k=e.memoizedState;u.state=k,ei(e,a,u,i),ti(),E=e.memoizedState,f||k!==E||Bl?(typeof L=="function"&&(Br(e,l,L,a),E=e.memoizedState),(m=Bl||Td(e,l,m,a,k,E,s))?(H||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=E),u.props=a,u.state=E,u.context=s,a=m):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{u=e.stateNode,gr(t,e),s=e.memoizedProps,H=Aa(l,s),u.props=H,L=e.pendingProps,k=u.context,E=l.contextType,m=Ia,typeof E=="object"&&E!==null&&(m=ye(E)),f=l.getDerivedStateFromProps,(E=typeof f=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(s!==L||k!==m)&&Dd(e,u,a,m),Bl=!1,k=e.memoizedState,u.state=k,ei(e,a,u,i),ti();var O=e.memoizedState;s!==L||k!==O||Bl||t!==null&&t.dependencies!==null&&eu(t.dependencies)?(typeof f=="function"&&(Br(e,l,f,a),O=e.memoizedState),(H=Bl||Td(e,l,H,a,k,O,m)||t!==null&&t.dependencies!==null&&eu(t.dependencies))?(E||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,O,m),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,O,m)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||s===t.memoizedProps&&k===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&k===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=O),u.props=a,u.state=O,u.context=m,a=H):(typeof u.componentDidUpdate!="function"||s===t.memoizedProps&&k===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&k===t.memoizedState||(e.flags|=1024),a=!1)}return u=a,xu(t,e),a=(e.flags&128)!==0,u||a?(u=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&a?(e.child=cn(e,t.child,null,i),e.child=cn(e,null,l,i)):de(t,e,l,i),e.memoizedState=u.state,t=e.child):t=wl(t,e,i),t}function Gd(t,e,l,a){return Vn(),e.flags|=256,de(t,e,l,a),e.child}var Lr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gr(t){return{baseLanes:t,cachePool:kf()}}function Yr(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=Ve),t}function Yd(t,e,l){var a=e.pendingProps,i=!1,u=(e.flags&128)!==0,s;if((s=u)||(s=t!==null&&t.memoizedState===null?!1:(ne.current&2)!==0),s&&(i=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(Ct){if(i?Ll(e):Gl(),Ct){var f=Kt,m;if(m=f){t:{for(m=f,f=nl;m.nodeType!==8;){if(!f){f=null;break t}if(m=Ie(m.nextSibling),m===null){f=null;break t}}f=m}f!==null?(e.memoizedState={dehydrated:f,treeContext:ha!==null?{id:bl,overflow:yl}:null,retryLane:536870912,hydrationErrors:null},m=ze(18,null,null,0),m.stateNode=f,m.return=e,e.child=m,Se=e,Kt=null,m=!0):m=!1}m||ma(e)}if(f=e.memoizedState,f!==null&&(f=f.dehydrated,f!==null))return Tc(f)?e.lanes=32:e.lanes=536870912,null;Sl(e)}return f=a.children,a=a.fallback,i?(Gl(),i=e.mode,f=Au({mode:"hidden",children:f},i),a=da(a,i,l,null),f.return=e,a.return=e,f.sibling=a,e.child=f,i=e.child,i.memoizedState=Gr(l),i.childLanes=Yr(t,s,l),e.memoizedState=Lr,a):(Ll(e),Qr(e,f))}if(m=t.memoizedState,m!==null&&(f=m.dehydrated,f!==null)){if(u)e.flags&256?(Ll(e),e.flags&=-257,e=qr(t,e,l)):e.memoizedState!==null?(Gl(),e.child=t.child,e.flags|=128,e=null):(Gl(),i=a.fallback,f=e.mode,a=Au({mode:"visible",children:a.children},f),i=da(i,f,l,null),i.flags|=2,a.return=e,i.return=e,a.sibling=i,e.child=a,cn(e,t.child,null,l),a=e.child,a.memoizedState=Gr(l),a.childLanes=Yr(t,s,l),e.memoizedState=Lr,e=i);else if(Ll(e),Tc(f)){if(s=f.nextSibling&&f.nextSibling.dataset,s)var E=s.dgst;s=E,a=Error(r(419)),a.stack="",a.digest=s,Zn({value:a,source:null,stack:null}),e=qr(t,e,l)}else if(oe||Kn(t,e,l,!1),s=(l&t.childLanes)!==0,oe||s){if(s=Yt,s!==null&&(a=l&-l,a=(a&42)!==0?1:Do(a),a=(a&(s.suspendedLanes|l))!==0?0:a,a!==0&&a!==m.retryLane))throw m.retryLane=a,Fa(t,a),je(s,t,a),Nd;f.data==="$?"||rc(),e=qr(t,e,l)}else f.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=m.treeContext,Kt=Ie(f.nextSibling),Se=e,Ct=!0,ga=null,nl=!1,t!==null&&(Qe[qe++]=bl,Qe[qe++]=yl,Qe[qe++]=ha,bl=t.id,yl=t.overflow,ha=e),e=Qr(e,a.children),e.flags|=4096);return e}return i?(Gl(),i=a.fallback,f=e.mode,m=t.child,E=m.sibling,a=ml(m,{mode:"hidden",children:a.children}),a.subtreeFlags=m.subtreeFlags&65011712,E!==null?i=ml(E,i):(i=da(i,f,l,null),i.flags|=2),i.return=e,a.return=e,a.sibling=i,e.child=a,a=i,i=e.child,f=t.child.memoizedState,f===null?f=Gr(l):(m=f.cachePool,m!==null?(E=ae._currentValue,m=m.parent!==E?{parent:E,pool:E}:m):m=kf(),f={baseLanes:f.baseLanes|l,cachePool:m}),i.memoizedState=f,i.childLanes=Yr(t,s,l),e.memoizedState=Lr,a):(Ll(e),l=t.child,t=l.sibling,l=ml(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=l,e.memoizedState=null,l)}function Qr(t,e){return e=Au({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Au(t,e){return t=ze(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function qr(t,e,l){return cn(e,t.child,null,l),t=Qr(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Qd(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),rr(t.return,e,l)}function Xr(t,e,l,a,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:i}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=i)}function qd(t,e,l){var a=e.pendingProps,i=a.revealOrder,u=a.tail;if(de(t,e,a.children,l),a=ne.current,(a&2)!==0)a=a&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qd(t,l,e);else if(t.tag===19)Qd(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(_(ne,a),i){case"forwards":for(l=e.child,i=null;l!==null;)t=l.alternate,t!==null&&bu(t)===null&&(i=l),l=l.sibling;l=i,l===null?(i=e.child,e.child=null):(i=l.sibling,l.sibling=null),Xr(e,!1,i,l,u);break;case"backwards":for(l=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&bu(t)===null){e.child=i;break}t=i.sibling,i.sibling=l,l=i,i=t}Xr(e,!0,l,null,u);break;case"together":Xr(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function wl(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),Vl|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(Kn(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(r(153));if(e.child!==null){for(t=e.child,l=ml(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=ml(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function Vr(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&eu(t)))}function sm(t,e,l){switch(e.tag){case 3:ft(e,e.stateNode.containerInfo),jl(e,ae,t.memoizedState.cache),Vn();break;case 27:case 5:gt(e);break;case 4:ft(e,e.stateNode.containerInfo);break;case 10:jl(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(Ll(e),e.flags|=128,null):(l&e.child.childLanes)!==0?Yd(t,e,l):(Ll(e),t=wl(t,e,l),t!==null?t.sibling:null);Ll(e);break;case 19:var i=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(Kn(t,e,l,!1),a=(l&e.childLanes)!==0),i){if(a)return qd(t,e,l);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_(ne,ne.current),a)break;return null;case 22:case 23:return e.lanes=0,Hd(t,e,l);case 24:jl(e,ae,t.memoizedState.cache)}return wl(t,e,l)}function Xd(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)oe=!0;else{if(!Vr(t,l)&&(e.flags&128)===0)return oe=!1,sm(t,e,l);oe=(t.flags&131072)!==0}else oe=!1,Ct&&(e.flags&1048576)!==0&&Af(e,tu,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var a=e.elementType,i=a._init;if(a=i(a._payload),e.type=a,typeof a=="function")er(a)?(t=Aa(a,t),e.tag=1,e=Ld(null,e,a,t,l)):(e.tag=0,e=$r(null,e,a,t,l));else{if(a!=null){if(i=a.$$typeof,i===at){e.tag=11,e=_d(null,e,a,t,l);break t}else if(i===Z){e.tag=14,e=jd(null,e,a,t,l);break t}}throw e=U(a)||a,Error(r(306,e,""))}}return e;case 0:return $r(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,i=Aa(a,e.pendingProps),Ld(t,e,a,i,l);case 3:t:{if(ft(e,e.stateNode.containerInfo),t===null)throw Error(r(387));a=e.pendingProps;var u=e.memoizedState;i=u.element,gr(t,e),ei(e,a,null,l);var s=e.memoizedState;if(a=s.cache,jl(e,ae,a),a!==u.cache&&cr(e,[ae],l,!0),ti(),a=s.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=Gd(t,e,a,l);break t}else if(a!==i){i=Ge(Error(r(424)),e),Zn(i),e=Gd(t,e,a,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Kt=Ie(t.firstChild),Se=e,Ct=!0,ga=null,nl=!0,l=wd(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Vn(),a===i){e=wl(t,e,l);break t}de(t,e,a,l)}e=e.child}return e;case 26:return xu(t,e),t===null?(l=Jh(e.type,null,e.pendingProps,null))?e.memoizedState=l:Ct||(l=e.type,t=e.pendingProps,a=ju(F.current).createElement(l),a[be]=e,a[Ee]=t,pe(a,l,t),ue(a),e.stateNode=a):e.memoizedState=Jh(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return gt(e),t===null&&Ct&&(a=e.stateNode=Vh(e.type,e.pendingProps,F.current),Se=e,nl=!0,i=Kt,Wl(e.type)?(Dc=i,Kt=Ie(a.firstChild)):Kt=i),de(t,e,e.pendingProps.children,l),xu(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Ct&&((i=a=Kt)&&(a=Um(a,e.type,e.pendingProps,nl),a!==null?(e.stateNode=a,Se=e,Kt=Ie(a.firstChild),nl=!1,i=!0):i=!1),i||ma(e)),gt(e),i=e.type,u=e.pendingProps,s=t!==null?t.memoizedProps:null,a=u.children,Sc(i,u)?a=null:s!==null&&Sc(i,s)&&(e.flags|=32),e.memoizedState!==null&&(i=Ar(t,e,lm,null,null,l),wi._currentValue=i),xu(t,e),de(t,e,a,l),e.child;case 6:return t===null&&Ct&&((t=l=Kt)&&(l=$m(l,e.pendingProps,nl),l!==null?(e.stateNode=l,Se=e,Kt=null,t=!0):t=!1),t||ma(e)),null;case 13:return Yd(t,e,l);case 4:return ft(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=cn(e,null,a,l):de(t,e,a,l),e.child;case 11:return _d(t,e,e.type,e.pendingProps,l);case 7:return de(t,e,e.pendingProps,l),e.child;case 8:return de(t,e,e.pendingProps.children,l),e.child;case 12:return de(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,jl(e,e.type,a.value),de(t,e,a.children,l),e.child;case 9:return i=e.type._context,a=e.pendingProps.children,ya(e),i=ye(i),a=a(i),e.flags|=1,de(t,e,a,l),e.child;case 14:return jd(t,e,e.type,e.pendingProps,l);case 15:return Bd(t,e,e.type,e.pendingProps,l);case 19:return qd(t,e,l);case 31:return a=e.pendingProps,l=e.mode,a={mode:a.mode,children:a.children},t===null?(l=Au(a,l),l.ref=e.ref,e.child=l,l.return=e,e=l):(l=ml(t.child,a),l.ref=e.ref,e.child=l,l.return=e,e=l),e;case 22:return Hd(t,e,l);case 24:return ya(e),a=ye(ae),t===null?(i=dr(),i===null&&(i=Yt,u=sr(),i.pooledCache=u,u.refCount++,u!==null&&(i.pooledCacheLanes|=l),i=u),e.memoizedState={parent:a,cache:i},pr(e),jl(e,ae,i)):((t.lanes&l)!==0&&(gr(t,e),ei(e,null,null,l),ti()),i=t.memoizedState,u=e.memoizedState,i.parent!==a?(i={parent:a,cache:a},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),jl(e,ae,a)):(a=u.cache,jl(e,ae,a),a!==i.cache&&cr(e,[ae],l,!0))),de(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(r(156,e.tag))}function El(t){t.flags|=4}function Vd(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!tp(e)){if(e=Xe.current,e!==null&&((Ot&4194048)===Ot?il!==null:(Ot&62914560)!==Ot&&(Ot&536870912)===0||e!==il))throw In=hr,Of;t.flags|=8192}}function Su(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?ws():536870912,t.lanes|=e,hn|=e)}function ri(t,e){if(!Ct)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var i=t.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function fm(t,e,l){var a=e.pendingProps;switch(ir(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(e),null;case 1:return Zt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),xl(ae),Y(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Xn(e)?El(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ef())),Zt(e),null;case 26:return l=e.memoizedState,t===null?(El(e),l!==null?(Zt(e),Vd(e,l)):(Zt(e),e.flags&=-16777217)):l?l!==t.memoizedState?(El(e),Zt(e),Vd(e,l)):(Zt(e),e.flags&=-16777217):(t.memoizedProps!==a&&El(e),Zt(e),e.flags&=-16777217),null;case 27:dt(e),l=F.current;var i=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==a&&El(e);else{if(!a){if(e.stateNode===null)throw Error(r(166));return Zt(e),null}t=Q.current,Xn(e)?Sf(e):(t=Vh(i,a,l),e.stateNode=t,El(e))}return Zt(e),null;case 5:if(dt(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&El(e);else{if(!a){if(e.stateNode===null)throw Error(r(166));return Zt(e),null}if(t=Q.current,Xn(e))Sf(e);else{switch(i=ju(F.current),t){case 1:t=i.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:t=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":t=i.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":t=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":t=i.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?i.createElement(l,{is:a.is}):i.createElement(l)}}t[be]=e,t[Ee]=a;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=t;t:switch(pe(t,l,a),l){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&El(e)}}return Zt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&El(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(r(166));if(t=F.current,Xn(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,i=Se,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}t[be]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||$h(t.nodeValue,l)),t||ma(e)}else t=ju(t).createTextNode(a),t[be]=e,e.stateNode=t}return Zt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=Xn(e),a!==null&&a.dehydrated!==null){if(t===null){if(!i)throw Error(r(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(r(317));i[be]=e}else Vn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Zt(e),i=!1}else i=Ef(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(Sl(e),e):(Sl(e),null)}if(Sl(e),(e.flags&128)!==0)return e.lanes=l,e;if(l=a!==null,t=t!==null&&t.memoizedState!==null,l){a=e.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool);var u=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==i&&(a.flags|=2048)}return l!==t&&l&&(e.child.flags|=8192),Su(e,e.updateQueue),Zt(e),null;case 4:return Y(),t===null&&bc(e.stateNode.containerInfo),Zt(e),null;case 10:return xl(e.type),Zt(e),null;case 19:if(W(ne),i=e.memoizedState,i===null)return Zt(e),null;if(a=(e.flags&128)!==0,u=i.rendering,u===null)if(a)ri(i,!1);else{if(Jt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=bu(t),u!==null){for(e.flags|=128,ri(i,!1),t=u.updateQueue,e.updateQueue=t,Su(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)xf(l,t),l=l.sibling;return _(ne,ne.current&1|2),e.child}t=t.sibling}i.tail!==null&&qt()>Tu&&(e.flags|=128,a=!0,ri(i,!1),e.lanes=4194304)}else{if(!a)if(t=bu(u),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,Su(e,t),ri(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!Ct)return Zt(e),null}else 2*qt()-i.renderingStartTime>Tu&&l!==536870912&&(e.flags|=128,a=!0,ri(i,!1),e.lanes=4194304);i.isBackwards?(u.sibling=e.child,e.child=u):(t=i.last,t!==null?t.sibling=u:e.child=u,i.last=u)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=qt(),e.sibling=null,t=ne.current,_(ne,a?t&1|2:t&1),e):(Zt(e),null);case 22:case 23:return Sl(e),vr(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(Zt(e),e.subtreeFlags&6&&(e.flags|=8192)):Zt(e),l=e.updateQueue,l!==null&&Su(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&W(va),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),xl(ae),Zt(e),null;case 25:return null;case 30:return null}throw Error(r(156,e.tag))}function dm(t,e){switch(ir(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xl(ae),Y(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return dt(e),null;case 13:if(Sl(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(r(340));Vn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return W(ne),null;case 4:return Y(),null;case 10:return xl(e.type),null;case 22:case 23:return Sl(e),vr(),t!==null&&W(va),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return xl(ae),null;case 25:return null;default:return null}}function Zd(t,e){switch(ir(e),e.tag){case 3:xl(ae),Y();break;case 26:case 27:case 5:dt(e);break;case 4:Y();break;case 13:Sl(e);break;case 19:W(ne);break;case 10:xl(e.type);break;case 22:case 23:Sl(e),vr(),t!==null&&W(va);break;case 24:xl(ae)}}function ci(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&t)===t){a=void 0;var u=l.create,s=l.inst;a=u(),s.destroy=a}l=l.next}while(l!==i)}}catch(f){Lt(e,e.return,f)}}function Yl(t,e,l){try{var a=e.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var u=i.next;a=u;do{if((a.tag&t)===t){var s=a.inst,f=s.destroy;if(f!==void 0){s.destroy=void 0,i=e;var m=l,E=f;try{E()}catch(H){Lt(i,m,H)}}}a=a.next}while(a!==u)}}catch(H){Lt(e,e.return,H)}}function Kd(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{jf(e,l)}catch(a){Lt(t,t.return,a)}}}function Jd(t,e,l){l.props=Aa(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){Lt(t,e,a)}}function si(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(i){Lt(t,e,i)}}function ul(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(i){Lt(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(i){Lt(t,e,i)}else l.current=null}function Wd(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(i){Lt(t,t.return,i)}}function Zr(t,e,l){try{var a=t.stateNode;Nm(a,t.type,l,e),a[Ee]=e}catch(i){Lt(t,t.return,i)}}function Fd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wl(t.type)||t.tag===4}function Kr(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Fd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jr(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=_u));else if(a!==4&&(a===27&&Wl(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(Jr(t,e,l),t=t.sibling;t!==null;)Jr(t,e,l),t=t.sibling}function wu(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&Wl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(wu(t,e,l),t=t.sibling;t!==null;)wu(t,e,l),t=t.sibling}function Id(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);pe(e,a,l),e[be]=t,e[Ee]=l}catch(u){Lt(t,t.return,u)}}var Tl=!1,It=!1,Wr=!1,Pd=typeof WeakSet=="function"?WeakSet:Set,re=null;function hm(t,e){if(t=t.containerInfo,xc=Gu,t=sf(t),Ko(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var i=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{l.nodeType,u.nodeType}catch{l=null;break t}var s=0,f=-1,m=-1,E=0,H=0,L=t,k=null;e:for(;;){for(var O;L!==l||i!==0&&L.nodeType!==3||(f=s+i),L!==u||a!==0&&L.nodeType!==3||(m=s+a),L.nodeType===3&&(s+=L.nodeValue.length),(O=L.firstChild)!==null;)k=L,L=O;for(;;){if(L===t)break e;if(k===l&&++E===i&&(f=s),k===u&&++H===a&&(m=s),(O=L.nextSibling)!==null)break;L=k,k=L.parentNode}L=O}l=f===-1||m===-1?null:{start:f,end:m}}else l=null}l=l||{start:0,end:0}}else l=null;for(Ac={focusedElem:t,selectionRange:l},Gu=!1,re=e;re!==null;)if(e=re,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,re=t;else for(;re!==null;){switch(e=re,u=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,l=e,i=u.memoizedProps,u=u.memoizedState,a=l.stateNode;try{var mt=Aa(l.type,i,l.elementType===l.type);t=a.getSnapshotBeforeUpdate(mt,u),a.__reactInternalSnapshotBeforeUpdate=t}catch(ht){Lt(l,l.return,ht)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)Ec(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ec(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=e.sibling,t!==null){t.return=e.return,re=t;break}re=e.return}}function th(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Ql(t,l),a&4&&ci(5,l);break;case 1:if(Ql(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(s){Lt(l,l.return,s)}else{var i=Aa(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){Lt(l,l.return,s)}}a&64&&Kd(l),a&512&&si(l,l.return);break;case 3:if(Ql(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{jf(t,e)}catch(s){Lt(l,l.return,s)}}break;case 27:e===null&&a&4&&Id(l);case 26:case 5:Ql(t,l),e===null&&a&4&&Wd(l),a&512&&si(l,l.return);break;case 12:Ql(t,l);break;case 13:Ql(t,l),a&4&&ah(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=Sm.bind(null,l),Lm(t,l))));break;case 22:if(a=l.memoizedState!==null||Tl,!a){e=e!==null&&e.memoizedState!==null||It,i=Tl;var u=It;Tl=a,(It=e)&&!u?ql(t,l,(l.subtreeFlags&8772)!==0):Ql(t,l),Tl=i,It=u}break;case 30:break;default:Ql(t,l)}}function eh(t){var e=t.alternate;e!==null&&(t.alternate=null,eh(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Oo(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Vt=null,Re=!1;function Dl(t,e,l){for(l=l.child;l!==null;)lh(t,e,l),l=l.sibling}function lh(t,e,l){if(xe&&typeof xe.onCommitFiberUnmount=="function")try{xe.onCommitFiberUnmount(Ml,l)}catch{}switch(l.tag){case 26:It||ul(l,e),Dl(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:It||ul(l,e);var a=Vt,i=Re;Wl(l.type)&&(Vt=l.stateNode,Re=!1),Dl(t,e,l),vi(l.stateNode),Vt=a,Re=i;break;case 5:It||ul(l,e);case 6:if(a=Vt,i=Re,Vt=null,Dl(t,e,l),Vt=a,Re=i,Vt!==null)if(Re)try{(Vt.nodeType===9?Vt.body:Vt.nodeName==="HTML"?Vt.ownerDocument.body:Vt).removeChild(l.stateNode)}catch(u){Lt(l,e,u)}else try{Vt.removeChild(l.stateNode)}catch(u){Lt(l,e,u)}break;case 18:Vt!==null&&(Re?(t=Vt,qh(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),Ri(t)):qh(Vt,l.stateNode));break;case 4:a=Vt,i=Re,Vt=l.stateNode.containerInfo,Re=!0,Dl(t,e,l),Vt=a,Re=i;break;case 0:case 11:case 14:case 15:It||Yl(2,l,e),It||Yl(4,l,e),Dl(t,e,l);break;case 1:It||(ul(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Jd(l,e,a)),Dl(t,e,l);break;case 21:Dl(t,e,l);break;case 22:It=(a=It)||l.memoizedState!==null,Dl(t,e,l),It=a;break;default:Dl(t,e,l)}}function ah(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ri(t)}catch(l){Lt(e,e.return,l)}}function pm(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Pd),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Pd),e;default:throw Error(r(435,t.tag))}}function Fr(t,e){var l=pm(t);e.forEach(function(a){var i=wm.bind(null,t,a);l.has(a)||(l.add(a),a.then(i,i))})}function Ce(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var i=l[a],u=t,s=e,f=s;t:for(;f!==null;){switch(f.tag){case 27:if(Wl(f.type)){Vt=f.stateNode,Re=!1;break t}break;case 5:Vt=f.stateNode,Re=!1;break t;case 3:case 4:Vt=f.stateNode.containerInfo,Re=!0;break t}f=f.return}if(Vt===null)throw Error(r(160));lh(u,s,i),Vt=null,Re=!1,u=i.alternate,u!==null&&(u.return=null),i.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)nh(e,t),e=e.sibling}var Fe=null;function nh(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ce(e,t),Me(t),a&4&&(Yl(3,t,t.return),ci(3,t),Yl(5,t,t.return));break;case 1:Ce(e,t),Me(t),a&512&&(It||l===null||ul(l,l.return)),a&64&&Tl&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var i=Fe;if(Ce(e,t),Me(t),a&512&&(It||l===null||ul(l,l.return)),a&4){var u=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,i=i.ownerDocument||i;e:switch(a){case"title":u=i.getElementsByTagName("title")[0],(!u||u[_n]||u[be]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=i.createElement(a),i.head.insertBefore(u,i.querySelector("head > title"))),pe(u,a,l),u[be]=t,ue(u),a=u;break t;case"link":var s=Ih("link","href",i).get(a+(l.href||""));if(s){for(var f=0;f<s.length;f++)if(u=s[f],u.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&u.getAttribute("rel")===(l.rel==null?null:l.rel)&&u.getAttribute("title")===(l.title==null?null:l.title)&&u.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){s.splice(f,1);break e}}u=i.createElement(a),pe(u,a,l),i.head.appendChild(u);break;case"meta":if(s=Ih("meta","content",i).get(a+(l.content||""))){for(f=0;f<s.length;f++)if(u=s[f],u.getAttribute("content")===(l.content==null?null:""+l.content)&&u.getAttribute("name")===(l.name==null?null:l.name)&&u.getAttribute("property")===(l.property==null?null:l.property)&&u.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&u.getAttribute("charset")===(l.charSet==null?null:l.charSet)){s.splice(f,1);break e}}u=i.createElement(a),pe(u,a,l),i.head.appendChild(u);break;default:throw Error(r(468,a))}u[be]=t,ue(u),a=u}t.stateNode=a}else Ph(i,t.type,t.stateNode);else t.stateNode=Fh(i,a,t.memoizedProps);else u!==a?(u===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):u.count--,a===null?Ph(i,t.type,t.stateNode):Fh(i,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Zr(t,t.memoizedProps,l.memoizedProps)}break;case 27:Ce(e,t),Me(t),a&512&&(It||l===null||ul(l,l.return)),l!==null&&a&4&&Zr(t,t.memoizedProps,l.memoizedProps);break;case 5:if(Ce(e,t),Me(t),a&512&&(It||l===null||ul(l,l.return)),t.flags&32){i=t.stateNode;try{qa(i,"")}catch(O){Lt(t,t.return,O)}}a&4&&t.stateNode!=null&&(i=t.memoizedProps,Zr(t,i,l!==null?l.memoizedProps:i)),a&1024&&(Wr=!0);break;case 6:if(Ce(e,t),Me(t),a&4){if(t.stateNode===null)throw Error(r(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(O){Lt(t,t.return,O)}}break;case 3:if(Uu=null,i=Fe,Fe=Bu(e.containerInfo),Ce(e,t),Fe=i,Me(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Ri(e.containerInfo)}catch(O){Lt(t,t.return,O)}Wr&&(Wr=!1,ih(t));break;case 4:a=Fe,Fe=Bu(t.stateNode.containerInfo),Ce(e,t),Me(t),Fe=a;break;case 12:Ce(e,t),Me(t);break;case 13:Ce(e,t),Me(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(ac=qt()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Fr(t,a)));break;case 22:i=t.memoizedState!==null;var m=l!==null&&l.memoizedState!==null,E=Tl,H=It;if(Tl=E||i,It=H||m,Ce(e,t),It=H,Tl=E,Me(t),a&8192)t:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(l===null||m||Tl||It||Sa(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){m=l=e;try{if(u=m.stateNode,i)s=u.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{f=m.stateNode;var L=m.memoizedProps.style,k=L!=null&&L.hasOwnProperty("display")?L.display:null;f.style.display=k==null||typeof k=="boolean"?"":(""+k).trim()}}catch(O){Lt(m,m.return,O)}}}else if(e.tag===6){if(l===null){m=e;try{m.stateNode.nodeValue=i?"":m.memoizedProps}catch(O){Lt(m,m.return,O)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Fr(t,l))));break;case 19:Ce(e,t),Me(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Fr(t,a)));break;case 30:break;case 21:break;default:Ce(e,t),Me(t)}}function Me(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(Fd(a)){l=a;break}a=a.return}if(l==null)throw Error(r(160));switch(l.tag){case 27:var i=l.stateNode,u=Kr(t);wu(t,u,i);break;case 5:var s=l.stateNode;l.flags&32&&(qa(s,""),l.flags&=-33);var f=Kr(t);wu(t,f,s);break;case 3:case 4:var m=l.stateNode.containerInfo,E=Kr(t);Jr(t,E,m);break;default:throw Error(r(161))}}catch(H){Lt(t,t.return,H)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ih(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;ih(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Ql(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)th(t,e.alternate,e),e=e.sibling}function Sa(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Yl(4,e,e.return),Sa(e);break;case 1:ul(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&Jd(e,e.return,l),Sa(e);break;case 27:vi(e.stateNode);case 26:case 5:ul(e,e.return),Sa(e);break;case 22:e.memoizedState===null&&Sa(e);break;case 30:Sa(e);break;default:Sa(e)}t=t.sibling}}function ql(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,i=t,u=e,s=u.flags;switch(u.tag){case 0:case 11:case 15:ql(i,u,l),ci(4,u);break;case 1:if(ql(i,u,l),a=u,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(E){Lt(a,a.return,E)}if(a=u,i=a.updateQueue,i!==null){var f=a.stateNode;try{var m=i.shared.hiddenCallbacks;if(m!==null)for(i.shared.hiddenCallbacks=null,i=0;i<m.length;i++)_f(m[i],f)}catch(E){Lt(a,a.return,E)}}l&&s&64&&Kd(u),si(u,u.return);break;case 27:Id(u);case 26:case 5:ql(i,u,l),l&&a===null&&s&4&&Wd(u),si(u,u.return);break;case 12:ql(i,u,l);break;case 13:ql(i,u,l),l&&s&4&&ah(i,u);break;case 22:u.memoizedState===null&&ql(i,u,l),si(u,u.return);break;case 30:break;default:ql(i,u,l)}e=e.sibling}}function Ir(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Jn(l))}function Pr(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Jn(t))}function ol(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)uh(t,e,l,a),e=e.sibling}function uh(t,e,l,a){var i=e.flags;switch(e.tag){case 0:case 11:case 15:ol(t,e,l,a),i&2048&&ci(9,e);break;case 1:ol(t,e,l,a);break;case 3:ol(t,e,l,a),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Jn(t)));break;case 12:if(i&2048){ol(t,e,l,a),t=e.stateNode;try{var u=e.memoizedProps,s=u.id,f=u.onPostCommit;typeof f=="function"&&f(s,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(m){Lt(e,e.return,m)}}else ol(t,e,l,a);break;case 13:ol(t,e,l,a);break;case 23:break;case 22:u=e.stateNode,s=e.alternate,e.memoizedState!==null?u._visibility&2?ol(t,e,l,a):fi(t,e):u._visibility&2?ol(t,e,l,a):(u._visibility|=2,sn(t,e,l,a,(e.subtreeFlags&10256)!==0)),i&2048&&Ir(s,e);break;case 24:ol(t,e,l,a),i&2048&&Pr(e.alternate,e);break;default:ol(t,e,l,a)}}function sn(t,e,l,a,i){for(i=i&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var u=t,s=e,f=l,m=a,E=s.flags;switch(s.tag){case 0:case 11:case 15:sn(u,s,f,m,i),ci(8,s);break;case 23:break;case 22:var H=s.stateNode;s.memoizedState!==null?H._visibility&2?sn(u,s,f,m,i):fi(u,s):(H._visibility|=2,sn(u,s,f,m,i)),i&&E&2048&&Ir(s.alternate,s);break;case 24:sn(u,s,f,m,i),i&&E&2048&&Pr(s.alternate,s);break;default:sn(u,s,f,m,i)}e=e.sibling}}function fi(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,i=a.flags;switch(a.tag){case 22:fi(l,a),i&2048&&Ir(a.alternate,a);break;case 24:fi(l,a),i&2048&&Pr(a.alternate,a);break;default:fi(l,a)}e=e.sibling}}var di=8192;function fn(t){if(t.subtreeFlags&di)for(t=t.child;t!==null;)oh(t),t=t.sibling}function oh(t){switch(t.tag){case 26:fn(t),t.flags&di&&t.memoizedState!==null&&Pm(Fe,t.memoizedState,t.memoizedProps);break;case 5:fn(t);break;case 3:case 4:var e=Fe;Fe=Bu(t.stateNode.containerInfo),fn(t),Fe=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=di,di=16777216,fn(t),di=e):fn(t));break;default:fn(t)}}function rh(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function hi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];re=a,sh(a,t)}rh(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ch(t),t=t.sibling}function ch(t){switch(t.tag){case 0:case 11:case 15:hi(t),t.flags&2048&&Yl(9,t,t.return);break;case 3:hi(t);break;case 12:hi(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Eu(t)):hi(t);break;default:hi(t)}}function Eu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];re=a,sh(a,t)}rh(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Yl(8,e,e.return),Eu(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,Eu(e));break;default:Eu(e)}t=t.sibling}}function sh(t,e){for(;re!==null;){var l=re;switch(l.tag){case 0:case 11:case 15:Yl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Jn(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,re=a;else t:for(l=t;re!==null;){a=re;var i=a.sibling,u=a.return;if(eh(a),a===l){re=null;break t}if(i!==null){i.return=u,re=i;break t}re=u}}}var gm={getCacheForType:function(t){var e=ye(ae),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l}},mm=typeof WeakMap=="function"?WeakMap:Map,jt=0,Yt=null,Tt=null,Ot=0,Bt=0,Ne=null,Xl=!1,dn=!1,tc=!1,Rl=0,Jt=0,Vl=0,wa=0,ec=0,Ve=0,hn=0,pi=null,ke=null,lc=!1,ac=0,Tu=1/0,Du=null,Zl=null,he=0,Kl=null,pn=null,gn=0,nc=0,ic=null,fh=null,gi=0,uc=null;function _e(){if((jt&2)!==0&&Ot!==0)return Ot&-Ot;if(D.T!==null){var t=en;return t!==0?t:hc()}return Ds()}function dh(){Ve===0&&(Ve=(Ot&536870912)===0||Ct?Ss():536870912);var t=Xe.current;return t!==null&&(t.flags|=32),Ve}function je(t,e,l){(t===Yt&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)&&(mn(t,0),Jl(t,Ot,Ve,!1)),Nn(t,l),((jt&2)===0||t!==Yt)&&(t===Yt&&((jt&2)===0&&(wa|=l),Jt===4&&Jl(t,Ot,Ve,!1)),rl(t))}function hh(t,e,l){if((jt&6)!==0)throw Error(r(327));var a=!l&&(e&124)===0&&(e&t.expiredLanes)===0||oa(t,e),i=a?vm(t,e):cc(t,e,!0),u=a;do{if(i===0){dn&&!a&&Jl(t,e,0,!1);break}else{if(l=t.current.alternate,u&&!bm(l)){i=cc(t,e,!1),u=!1;continue}if(i===2){if(u=e,t.errorRecoveryDisabledLanes&u)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;t:{var f=t;i=pi;var m=f.current.memoizedState.isDehydrated;if(m&&(mn(f,s).flags|=256),s=cc(f,s,!1),s!==2){if(tc&&!m){f.errorRecoveryDisabledLanes|=u,wa|=u,i=4;break t}u=ke,ke=i,u!==null&&(ke===null?ke=u:ke.push.apply(ke,u))}i=s}if(u=!1,i!==2)continue}}if(i===1){mn(t,0),Jl(t,e,0,!0);break}t:{switch(a=t,u=i,u){case 0:case 1:throw Error(r(345));case 4:if((e&4194048)!==e)break;case 6:Jl(a,e,Ve,!Xl);break t;case 2:ke=null;break;case 3:case 5:break;default:throw Error(r(329))}if((e&62914560)===e&&(i=ac+300-qt(),10<i)){if(Jl(a,e,Ve,!Xl),Ba(a,0,!0)!==0)break t;a.timeoutHandle=Yh(ph.bind(null,a,l,ke,Du,lc,e,Ve,wa,hn,Xl,u,2,-0,0),i);break t}ph(a,l,ke,Du,lc,e,Ve,wa,hn,Xl,u,0,-0,0)}}break}while(!0);rl(t)}function ph(t,e,l,a,i,u,s,f,m,E,H,L,k,O){if(t.timeoutHandle=-1,L=e.subtreeFlags,(L&8192||(L&16785408)===16785408)&&(Si={stylesheets:null,count:0,unsuspend:Im},oh(e),L=tb(),L!==null)){t.cancelPendingCommit=L(Ah.bind(null,t,e,u,l,a,i,s,f,m,H,1,k,O)),Jl(t,u,s,!E);return}Ah(t,e,u,l,a,i,s,f,m)}function bm(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var i=l[a],u=i.getSnapshot;i=i.value;try{if(!Oe(u(),i))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Jl(t,e,l,a){e&=~ec,e&=~wa,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var i=e;0<i;){var u=31-Ae(i),s=1<<u;a[u]=-1,i&=~s}l!==0&&Es(t,l,e)}function Ru(){return(jt&6)===0?(mi(0),!1):!0}function oc(){if(Tt!==null){if(Bt===0)var t=Tt.return;else t=Tt,vl=ba=null,Er(t),rn=null,ui=0,t=Tt;for(;t!==null;)Zd(t.alternate,t),t=t.return;Tt=null}}function mn(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,jm(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),oc(),Yt=t,Tt=l=ml(t.current,null),Ot=e,Bt=0,Ne=null,Xl=!1,dn=oa(t,e),tc=!1,hn=Ve=ec=wa=Vl=Jt=0,ke=pi=null,lc=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var i=31-Ae(a),u=1<<i;e|=t[i],a&=~u}return Rl=e,Ji(),l}function gh(t,e){wt=null,D.H=pu,e===Fn||e===nu?(e=Mf(),Bt=3):e===Of?(e=Mf(),Bt=4):Bt=e===Nd?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ne=e,Tt===null&&(Jt=1,vu(t,Ge(e,t.current)))}function mh(){var t=D.H;return D.H=pu,t===null?pu:t}function bh(){var t=D.A;return D.A=gm,t}function rc(){Jt=4,Xl||(Ot&4194048)!==Ot&&Xe.current!==null||(dn=!0),(Vl&134217727)===0&&(wa&134217727)===0||Yt===null||Jl(Yt,Ot,Ve,!1)}function cc(t,e,l){var a=jt;jt|=2;var i=mh(),u=bh();(Yt!==t||Ot!==e)&&(Du=null,mn(t,e)),e=!1;var s=Jt;t:do try{if(Bt!==0&&Tt!==null){var f=Tt,m=Ne;switch(Bt){case 8:oc(),s=6;break t;case 3:case 2:case 9:case 6:Xe.current===null&&(e=!0);var E=Bt;if(Bt=0,Ne=null,bn(t,f,m,E),l&&dn){s=0;break t}break;default:E=Bt,Bt=0,Ne=null,bn(t,f,m,E)}}ym(),s=Jt;break}catch(H){gh(t,H)}while(!0);return e&&t.shellSuspendCounter++,vl=ba=null,jt=a,D.H=i,D.A=u,Tt===null&&(Yt=null,Ot=0,Ji()),s}function ym(){for(;Tt!==null;)yh(Tt)}function vm(t,e){var l=jt;jt|=2;var a=mh(),i=bh();Yt!==t||Ot!==e?(Du=null,Tu=qt()+500,mn(t,e)):dn=oa(t,e);t:do try{if(Bt!==0&&Tt!==null){e=Tt;var u=Ne;e:switch(Bt){case 1:Bt=0,Ne=null,bn(t,e,u,1);break;case 2:case 9:if(zf(u)){Bt=0,Ne=null,vh(e);break}e=function(){Bt!==2&&Bt!==9||Yt!==t||(Bt=7),rl(t)},u.then(e,e);break t;case 3:Bt=7;break t;case 4:Bt=5;break t;case 7:zf(u)?(Bt=0,Ne=null,vh(e)):(Bt=0,Ne=null,bn(t,e,u,7));break;case 5:var s=null;switch(Tt.tag){case 26:s=Tt.memoizedState;case 5:case 27:var f=Tt;if(!s||tp(s)){Bt=0,Ne=null;var m=f.sibling;if(m!==null)Tt=m;else{var E=f.return;E!==null?(Tt=E,ku(E)):Tt=null}break e}}Bt=0,Ne=null,bn(t,e,u,5);break;case 6:Bt=0,Ne=null,bn(t,e,u,6);break;case 8:oc(),Jt=6;break t;default:throw Error(r(462))}}xm();break}catch(H){gh(t,H)}while(!0);return vl=ba=null,D.H=a,D.A=i,jt=l,Tt!==null?0:(Yt=null,Ot=0,Ji(),Jt)}function xm(){for(;Tt!==null&&!Qt();)yh(Tt)}function yh(t){var e=Xd(t.alternate,t,Rl);t.memoizedProps=t.pendingProps,e===null?ku(t):Tt=e}function vh(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=$d(l,e,e.pendingProps,e.type,void 0,Ot);break;case 11:e=$d(l,e,e.pendingProps,e.type.render,e.ref,Ot);break;case 5:Er(e);default:Zd(l,e),e=Tt=xf(e,Rl),e=Xd(l,e,Rl)}t.memoizedProps=t.pendingProps,e===null?ku(t):Tt=e}function bn(t,e,l,a){vl=ba=null,Er(e),rn=null,ui=0;var i=e.return;try{if(cm(t,i,e,l,Ot)){Jt=1,vu(t,Ge(l,t.current)),Tt=null;return}}catch(u){if(i!==null)throw Tt=i,u;Jt=1,vu(t,Ge(l,t.current)),Tt=null;return}e.flags&32768?(Ct||a===1?t=!0:dn||(Ot&536870912)!==0?t=!1:(Xl=t=!0,(a===2||a===9||a===3||a===6)&&(a=Xe.current,a!==null&&a.tag===13&&(a.flags|=16384))),xh(e,t)):ku(e)}function ku(t){var e=t;do{if((e.flags&32768)!==0){xh(e,Xl);return}t=e.return;var l=fm(e.alternate,e,Rl);if(l!==null){Tt=l;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);Jt===0&&(Jt=5)}function xh(t,e){do{var l=dm(t.alternate,t);if(l!==null){l.flags&=32767,Tt=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){Tt=t;return}Tt=t=l}while(t!==null);Jt=6,Tt=null}function Ah(t,e,l,a,i,u,s,f,m){t.cancelPendingCommit=null;do Ou();while(he!==0);if((jt&6)!==0)throw Error(r(327));if(e!==null){if(e===t.current)throw Error(r(177));if(u=e.lanes|e.childLanes,u|=Po,I0(t,l,u,s,f,m),t===Yt&&(Tt=Yt=null,Ot=0),pn=e,Kl=t,gn=l,nc=u,ic=i,fh=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Em(we,function(){return Dh(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=D.T,D.T=null,i=j.p,j.p=2,s=jt,jt|=4;try{hm(t,e,l)}finally{jt=s,j.p=i,D.T=a}}he=1,Sh(),wh(),Eh()}}function Sh(){if(he===1){he=0;var t=Kl,e=pn,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=D.T,D.T=null;var a=j.p;j.p=2;var i=jt;jt|=4;try{nh(e,t);var u=Ac,s=sf(t.containerInfo),f=u.focusedElem,m=u.selectionRange;if(s!==f&&f&&f.ownerDocument&&cf(f.ownerDocument.documentElement,f)){if(m!==null&&Ko(f)){var E=m.start,H=m.end;if(H===void 0&&(H=E),"selectionStart"in f)f.selectionStart=E,f.selectionEnd=Math.min(H,f.value.length);else{var L=f.ownerDocument||document,k=L&&L.defaultView||window;if(k.getSelection){var O=k.getSelection(),mt=f.textContent.length,ht=Math.min(m.start,mt),$t=m.end===void 0?ht:Math.min(m.end,mt);!O.extend&&ht>$t&&(s=$t,$t=ht,ht=s);var S=rf(f,ht),x=rf(f,$t);if(S&&x&&(O.rangeCount!==1||O.anchorNode!==S.node||O.anchorOffset!==S.offset||O.focusNode!==x.node||O.focusOffset!==x.offset)){var w=L.createRange();w.setStart(S.node,S.offset),O.removeAllRanges(),ht>$t?(O.addRange(w),O.extend(x.node,x.offset)):(w.setEnd(x.node,x.offset),O.addRange(w))}}}}for(L=[],O=f;O=O.parentNode;)O.nodeType===1&&L.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<L.length;f++){var $=L[f];$.element.scrollLeft=$.left,$.element.scrollTop=$.top}}Gu=!!xc,Ac=xc=null}finally{jt=i,j.p=a,D.T=l}}t.current=e,he=2}}function wh(){if(he===2){he=0;var t=Kl,e=pn,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=D.T,D.T=null;var a=j.p;j.p=2;var i=jt;jt|=4;try{th(t,e.alternate,e)}finally{jt=i,j.p=a,D.T=l}}he=3}}function Eh(){if(he===4||he===3){he=0,le();var t=Kl,e=pn,l=gn,a=fh;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?he=5:(he=0,pn=Kl=null,Th(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(Zl=null),Ro(l),e=e.stateNode,xe&&typeof xe.onCommitFiberRoot=="function")try{xe.onCommitFiberRoot(Ml,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=D.T,i=j.p,j.p=2,D.T=null;try{for(var u=t.onRecoverableError,s=0;s<a.length;s++){var f=a[s];u(f.value,{componentStack:f.stack})}}finally{D.T=e,j.p=i}}(gn&3)!==0&&Ou(),rl(t),i=t.pendingLanes,(l&4194090)!==0&&(i&42)!==0?t===uc?gi++:(gi=0,uc=t):gi=0,mi(0)}}function Th(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Jn(e)))}function Ou(t){return Sh(),wh(),Eh(),Dh()}function Dh(){if(he!==5)return!1;var t=Kl,e=nc;nc=0;var l=Ro(gn),a=D.T,i=j.p;try{j.p=32>l?32:l,D.T=null,l=ic,ic=null;var u=Kl,s=gn;if(he=0,pn=Kl=null,gn=0,(jt&6)!==0)throw Error(r(331));var f=jt;if(jt|=4,ch(u.current),uh(u,u.current,s,l),jt=f,mi(0,!1),xe&&typeof xe.onPostCommitFiberRoot=="function")try{xe.onPostCommitFiberRoot(Ml,u)}catch{}return!0}finally{j.p=i,D.T=a,Th(t,e)}}function Rh(t,e,l){e=Ge(l,e),e=Ur(t.stateNode,e,2),t=Ul(t,e,2),t!==null&&(Nn(t,2),rl(t))}function Lt(t,e,l){if(t.tag===3)Rh(t,t,l);else for(;e!==null;){if(e.tag===3){Rh(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Zl===null||!Zl.has(a))){t=Ge(l,t),l=Cd(2),a=Ul(e,l,2),a!==null&&(Md(l,a,e,t),Nn(a,2),rl(a));break}}e=e.return}}function sc(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new mm;var i=new Set;a.set(e,i)}else i=a.get(e),i===void 0&&(i=new Set,a.set(e,i));i.has(l)||(tc=!0,i.add(l),t=Am.bind(null,t,e,l),e.then(t,t))}function Am(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,Yt===t&&(Ot&l)===l&&(Jt===4||Jt===3&&(Ot&62914560)===Ot&&300>qt()-ac?(jt&2)===0&&mn(t,0):ec|=l,hn===Ot&&(hn=0)),rl(t)}function kh(t,e){e===0&&(e=ws()),t=Fa(t,e),t!==null&&(Nn(t,e),rl(t))}function Sm(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),kh(t,l)}function wm(t,e){var l=0;switch(t.tag){case 13:var a=t.stateNode,i=t.memoizedState;i!==null&&(l=i.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(r(314))}a!==null&&a.delete(e),kh(t,l)}function Em(t,e){return kt(t,e)}var zu=null,yn=null,fc=!1,Cu=!1,dc=!1,Ea=0;function rl(t){t!==yn&&t.next===null&&(yn===null?zu=yn=t:yn=yn.next=t),Cu=!0,fc||(fc=!0,Dm())}function mi(t,e){if(!dc&&Cu){dc=!0;do for(var l=!1,a=zu;a!==null;){if(t!==0){var i=a.pendingLanes;if(i===0)var u=0;else{var s=a.suspendedLanes,f=a.pingedLanes;u=(1<<31-Ae(42|t)+1)-1,u&=i&~(s&~f),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(l=!0,Mh(a,u))}else u=Ot,u=Ba(a,a===Yt?u:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(u&3)===0||oa(a,u)||(l=!0,Mh(a,u));a=a.next}while(l);dc=!1}}function Tm(){Oh()}function Oh(){Cu=fc=!1;var t=0;Ea!==0&&(_m()&&(t=Ea),Ea=0);for(var e=qt(),l=null,a=zu;a!==null;){var i=a.next,u=zh(a,e);u===0?(a.next=null,l===null?zu=i:l.next=i,i===null&&(yn=l)):(l=a,(t!==0||(u&3)!==0)&&(Cu=!0)),a=i}mi(t)}function zh(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,i=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var s=31-Ae(u),f=1<<s,m=i[s];m===-1?((f&l)===0||(f&a)!==0)&&(i[s]=Eo(f,e)):m<=e&&(t.expiredLanes|=f),u&=~f}if(e=Yt,l=Ot,l=Ba(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&_t(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||oa(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&_t(a),Ro(l)){case 2:case 8:l=He;break;case 32:l=we;break;case 268435456:l=Ue;break;default:l=we}return a=Ch.bind(null,t),l=kt(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&_t(a),t.callbackPriority=2,t.callbackNode=null,2}function Ch(t,e){if(he!==0&&he!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Ou()&&t.callbackNode!==l)return null;var a=Ot;return a=Ba(t,t===Yt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(hh(t,a,e),zh(t,qt()),t.callbackNode!=null&&t.callbackNode===l?Ch.bind(null,t):null)}function Mh(t,e){if(Ou())return null;hh(t,e,!0)}function Dm(){Bm(function(){(jt&6)!==0?kt(ie,Tm):Oh()})}function hc(){return Ea===0&&(Ea=Ss()),Ea}function Nh(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Yi(""+t)}function _h(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function Rm(t,e,l,a,i){if(e==="submit"&&l&&l.stateNode===i){var u=Nh((i[Ee]||null).action),s=a.submitter;s&&(e=(e=s[Ee]||null)?Nh(e.formAction):s.getAttribute("formAction"),e!==null&&(u=e,s=null));var f=new Vi("action","action",null,a,i);t.push({event:f,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Ea!==0){var m=s?_h(i,s):new FormData(i);Nr(l,{pending:!0,data:m,method:i.method,action:u},null,m)}}else typeof u=="function"&&(f.preventDefault(),m=s?_h(i,s):new FormData(i),Nr(l,{pending:!0,data:m,method:i.method,action:u},u,m))},currentTarget:i}]})}}for(var pc=0;pc<Io.length;pc++){var gc=Io[pc],km=gc.toLowerCase(),Om=gc[0].toUpperCase()+gc.slice(1);We(km,"on"+Om)}We(hf,"onAnimationEnd"),We(pf,"onAnimationIteration"),We(gf,"onAnimationStart"),We("dblclick","onDoubleClick"),We("focusin","onFocus"),We("focusout","onBlur"),We(Vg,"onTransitionRun"),We(Zg,"onTransitionStart"),We(Kg,"onTransitionCancel"),We(mf,"onTransitionEnd"),Ga("onMouseEnter",["mouseout","mouseover"]),Ga("onMouseLeave",["mouseout","mouseover"]),Ga("onPointerEnter",["pointerout","pointerover"]),Ga("onPointerLeave",["pointerout","pointerover"]),ra("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ra("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ra("onBeforeInput",["compositionend","keypress","textInput","paste"]),ra("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ra("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ra("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bi));function jh(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],i=a.event;a=a.listeners;t:{var u=void 0;if(e)for(var s=a.length-1;0<=s;s--){var f=a[s],m=f.instance,E=f.currentTarget;if(f=f.listener,m!==u&&i.isPropagationStopped())break t;u=f,i.currentTarget=E;try{u(i)}catch(H){yu(H)}i.currentTarget=null,u=m}else for(s=0;s<a.length;s++){if(f=a[s],m=f.instance,E=f.currentTarget,f=f.listener,m!==u&&i.isPropagationStopped())break t;u=f,i.currentTarget=E;try{u(i)}catch(H){yu(H)}i.currentTarget=null,u=m}}}}function Dt(t,e){var l=e[ko];l===void 0&&(l=e[ko]=new Set);var a=t+"__bubble";l.has(a)||(Bh(e,t,2,!1),l.add(a))}function mc(t,e,l){var a=0;e&&(a|=4),Bh(l,t,a,e)}var Mu="_reactListening"+Math.random().toString(36).slice(2);function bc(t){if(!t[Mu]){t[Mu]=!0,ks.forEach(function(l){l!=="selectionchange"&&(zm.has(l)||mc(l,!1,t),mc(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Mu]||(e[Mu]=!0,mc("selectionchange",!1,e))}}function Bh(t,e,l,a){switch(up(e)){case 2:var i=ab;break;case 8:i=nb;break;default:i=Cc}l=i.bind(null,e,l,t),i=void 0,!$o||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),a?i!==void 0?t.addEventListener(e,l,{capture:!0,passive:i}):t.addEventListener(e,l,!0):i!==void 0?t.addEventListener(e,l,{passive:i}):t.addEventListener(e,l,!1)}function yc(t,e,l,a,i){var u=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var f=a.stateNode.containerInfo;if(f===i)break;if(s===4)for(s=a.return;s!==null;){var m=s.tag;if((m===3||m===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;f!==null;){if(s=Ua(f),s===null)return;if(m=s.tag,m===5||m===6||m===26||m===27){a=u=s;continue t}f=f.parentNode}}a=a.return}Ys(function(){var E=u,H=Ho(l),L=[];t:{var k=bf.get(t);if(k!==void 0){var O=Vi,mt=t;switch(t){case"keypress":if(qi(l)===0)break t;case"keydown":case"keyup":O=Eg;break;case"focusin":mt="focus",O=Qo;break;case"focusout":mt="blur",O=Qo;break;case"beforeblur":case"afterblur":O=Qo;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Xs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=dg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=Rg;break;case hf:case pf:case gf:O=gg;break;case mf:O=Og;break;case"scroll":case"scrollend":O=sg;break;case"wheel":O=Cg;break;case"copy":case"cut":case"paste":O=bg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=Zs;break;case"toggle":case"beforetoggle":O=Ng}var ht=(e&4)!==0,$t=!ht&&(t==="scroll"||t==="scrollend"),S=ht?k!==null?k+"Capture":null:k;ht=[];for(var x=E,w;x!==null;){var $=x;if(w=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||w===null||S===null||($=Bn(x,S),$!=null&&ht.push(yi(x,$,w))),$t)break;x=x.return}0<ht.length&&(k=new O(k,mt,null,l,H),L.push({event:k,listeners:ht}))}}if((e&7)===0){t:{if(k=t==="mouseover"||t==="pointerover",O=t==="mouseout"||t==="pointerout",k&&l!==Bo&&(mt=l.relatedTarget||l.fromElement)&&(Ua(mt)||mt[Ha]))break t;if((O||k)&&(k=H.window===H?H:(k=H.ownerDocument)?k.defaultView||k.parentWindow:window,O?(mt=l.relatedTarget||l.toElement,O=E,mt=mt?Ua(mt):null,mt!==null&&($t=p(mt),ht=mt.tag,mt!==$t||ht!==5&&ht!==27&&ht!==6)&&(mt=null)):(O=null,mt=E),O!==mt)){if(ht=Xs,$="onMouseLeave",S="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(ht=Zs,$="onPointerLeave",S="onPointerEnter",x="pointer"),$t=O==null?k:jn(O),w=mt==null?k:jn(mt),k=new ht($,x+"leave",O,l,H),k.target=$t,k.relatedTarget=w,$=null,Ua(H)===E&&(ht=new ht(S,x+"enter",mt,l,H),ht.target=w,ht.relatedTarget=$t,$=ht),$t=$,O&&mt)e:{for(ht=O,S=mt,x=0,w=ht;w;w=vn(w))x++;for(w=0,$=S;$;$=vn($))w++;for(;0<x-w;)ht=vn(ht),x--;for(;0<w-x;)S=vn(S),w--;for(;x--;){if(ht===S||S!==null&&ht===S.alternate)break e;ht=vn(ht),S=vn(S)}ht=null}else ht=null;O!==null&&Hh(L,k,O,ht,!1),mt!==null&&$t!==null&&Hh(L,$t,mt,ht,!0)}}t:{if(k=E?jn(E):window,O=k.nodeName&&k.nodeName.toLowerCase(),O==="select"||O==="input"&&k.type==="file")var rt=ef;else if(Ps(k))if(lf)rt=Qg;else{rt=Gg;var Et=Lg}else O=k.nodeName,!O||O.toLowerCase()!=="input"||k.type!=="checkbox"&&k.type!=="radio"?E&&jo(E.elementType)&&(rt=ef):rt=Yg;if(rt&&(rt=rt(t,E))){tf(L,rt,l,H);break t}Et&&Et(t,k,E),t==="focusout"&&E&&k.type==="number"&&E.memoizedProps.value!=null&&_o(k,"number",k.value)}switch(Et=E?jn(E):window,t){case"focusin":(Ps(Et)||Et.contentEditable==="true")&&(Ka=Et,Jo=E,qn=null);break;case"focusout":qn=Jo=Ka=null;break;case"mousedown":Wo=!0;break;case"contextmenu":case"mouseup":case"dragend":Wo=!1,ff(L,l,H);break;case"selectionchange":if(Xg)break;case"keydown":case"keyup":ff(L,l,H)}var st;if(Xo)t:{switch(t){case"compositionstart":var pt="onCompositionStart";break t;case"compositionend":pt="onCompositionEnd";break t;case"compositionupdate":pt="onCompositionUpdate";break t}pt=void 0}else Za?Fs(t,l)&&(pt="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(pt="onCompositionStart");pt&&(Ks&&l.locale!=="ko"&&(Za||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&Za&&(st=Qs()):(_l=H,Lo="value"in _l?_l.value:_l.textContent,Za=!0)),Et=Nu(E,pt),0<Et.length&&(pt=new Vs(pt,t,null,l,H),L.push({event:pt,listeners:Et}),st?pt.data=st:(st=Is(l),st!==null&&(pt.data=st)))),(st=jg?Bg(t,l):Hg(t,l))&&(pt=Nu(E,"onBeforeInput"),0<pt.length&&(Et=new Vs("onBeforeInput","beforeinput",null,l,H),L.push({event:Et,listeners:pt}),Et.data=st)),Rm(L,t,E,l,H)}jh(L,e)})}function yi(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Nu(t,e){for(var l=e+"Capture",a=[];t!==null;){var i=t,u=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||u===null||(i=Bn(t,l),i!=null&&a.unshift(yi(t,i,u)),i=Bn(t,e),i!=null&&a.push(yi(t,i,u))),t.tag===3)return a;t=t.return}return[]}function vn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Hh(t,e,l,a,i){for(var u=e._reactName,s=[];l!==null&&l!==a;){var f=l,m=f.alternate,E=f.stateNode;if(f=f.tag,m!==null&&m===a)break;f!==5&&f!==26&&f!==27||E===null||(m=E,i?(E=Bn(l,u),E!=null&&s.unshift(yi(l,E,m))):i||(E=Bn(l,u),E!=null&&s.push(yi(l,E,m)))),l=l.return}s.length!==0&&t.push({event:e,listeners:s})}var Cm=/\r\n?/g,Mm=/\u0000|\uFFFD/g;function Uh(t){return(typeof t=="string"?t:""+t).replace(Cm,`
`).replace(Mm,"")}function $h(t,e){return e=Uh(e),Uh(t)===e}function _u(){}function Ut(t,e,l,a,i,u){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||qa(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&qa(t,""+a);break;case"className":$i(t,"class",a);break;case"tabIndex":$i(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":$i(t,l,a);break;case"style":Ls(t,a,u);break;case"data":if(e!=="object"){$i(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Yi(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(l==="formAction"?(e!=="input"&&Ut(t,e,"name",i.name,i,null),Ut(t,e,"formEncType",i.formEncType,i,null),Ut(t,e,"formMethod",i.formMethod,i,null),Ut(t,e,"formTarget",i.formTarget,i,null)):(Ut(t,e,"encType",i.encType,i,null),Ut(t,e,"method",i.method,i,null),Ut(t,e,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Yi(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=_u);break;case"onScroll":a!=null&&Dt("scroll",t);break;case"onScrollEnd":a!=null&&Dt("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(r(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Yi(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":Dt("beforetoggle",t),Dt("toggle",t),Ui(t,"popover",a);break;case"xlinkActuate":pl(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":pl(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":pl(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":pl(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":pl(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":pl(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":pl(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":pl(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":pl(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ui(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=rg.get(l)||l,Ui(t,l,a))}}function vc(t,e,l,a,i,u){switch(l){case"style":Ls(t,a,u);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(r(60));t.innerHTML=l}}break;case"children":typeof a=="string"?qa(t,a):(typeof a=="number"||typeof a=="bigint")&&qa(t,""+a);break;case"onScroll":a!=null&&Dt("scroll",t);break;case"onScrollEnd":a!=null&&Dt("scrollend",t);break;case"onClick":a!=null&&(t.onclick=_u);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Os.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(i=l.endsWith("Capture"),e=l.slice(2,i?l.length-7:void 0),u=t[Ee]||null,u=u!=null?u[l]:null,typeof u=="function"&&t.removeEventListener(e,u,i),typeof a=="function")){typeof u!="function"&&u!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,i);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):Ui(t,l,a)}}}function pe(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Dt("error",t),Dt("load",t);var a=!1,i=!1,u;for(u in l)if(l.hasOwnProperty(u)){var s=l[u];if(s!=null)switch(u){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:Ut(t,e,u,s,l,null)}}i&&Ut(t,e,"srcSet",l.srcSet,l,null),a&&Ut(t,e,"src",l.src,l,null);return;case"input":Dt("invalid",t);var f=u=s=i=null,m=null,E=null;for(a in l)if(l.hasOwnProperty(a)){var H=l[a];if(H!=null)switch(a){case"name":i=H;break;case"type":s=H;break;case"checked":m=H;break;case"defaultChecked":E=H;break;case"value":u=H;break;case"defaultValue":f=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(r(137,e));break;default:Ut(t,e,a,H,l,null)}}Bs(t,u,f,m,E,s,i,!1),Li(t);return;case"select":Dt("invalid",t),a=s=u=null;for(i in l)if(l.hasOwnProperty(i)&&(f=l[i],f!=null))switch(i){case"value":u=f;break;case"defaultValue":s=f;break;case"multiple":a=f;default:Ut(t,e,i,f,l,null)}e=u,l=s,t.multiple=!!a,e!=null?Qa(t,!!a,e,!1):l!=null&&Qa(t,!!a,l,!0);return;case"textarea":Dt("invalid",t),u=i=a=null;for(s in l)if(l.hasOwnProperty(s)&&(f=l[s],f!=null))switch(s){case"value":a=f;break;case"defaultValue":i=f;break;case"children":u=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:Ut(t,e,s,f,l,null)}Us(t,a,i,u),Li(t);return;case"option":for(m in l)if(l.hasOwnProperty(m)&&(a=l[m],a!=null))switch(m){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Ut(t,e,m,a,l,null)}return;case"dialog":Dt("beforetoggle",t),Dt("toggle",t),Dt("cancel",t),Dt("close",t);break;case"iframe":case"object":Dt("load",t);break;case"video":case"audio":for(a=0;a<bi.length;a++)Dt(bi[a],t);break;case"image":Dt("error",t),Dt("load",t);break;case"details":Dt("toggle",t);break;case"embed":case"source":case"link":Dt("error",t),Dt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in l)if(l.hasOwnProperty(E)&&(a=l[E],a!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:Ut(t,e,E,a,l,null)}return;default:if(jo(e)){for(H in l)l.hasOwnProperty(H)&&(a=l[H],a!==void 0&&vc(t,e,H,a,l,void 0));return}}for(f in l)l.hasOwnProperty(f)&&(a=l[f],a!=null&&Ut(t,e,f,a,l,null))}function Nm(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,u=null,s=null,f=null,m=null,E=null,H=null;for(O in l){var L=l[O];if(l.hasOwnProperty(O)&&L!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":m=L;default:a.hasOwnProperty(O)||Ut(t,e,O,null,a,L)}}for(var k in a){var O=a[k];if(L=l[k],a.hasOwnProperty(k)&&(O!=null||L!=null))switch(k){case"type":u=O;break;case"name":i=O;break;case"checked":E=O;break;case"defaultChecked":H=O;break;case"value":s=O;break;case"defaultValue":f=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(137,e));break;default:O!==L&&Ut(t,e,k,O,a,L)}}No(t,s,f,m,E,H,u,i);return;case"select":O=s=f=k=null;for(u in l)if(m=l[u],l.hasOwnProperty(u)&&m!=null)switch(u){case"value":break;case"multiple":O=m;default:a.hasOwnProperty(u)||Ut(t,e,u,null,a,m)}for(i in a)if(u=a[i],m=l[i],a.hasOwnProperty(i)&&(u!=null||m!=null))switch(i){case"value":k=u;break;case"defaultValue":f=u;break;case"multiple":s=u;default:u!==m&&Ut(t,e,i,u,a,m)}e=f,l=s,a=O,k!=null?Qa(t,!!l,k,!1):!!a!=!!l&&(e!=null?Qa(t,!!l,e,!0):Qa(t,!!l,l?[]:"",!1));return;case"textarea":O=k=null;for(f in l)if(i=l[f],l.hasOwnProperty(f)&&i!=null&&!a.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:Ut(t,e,f,null,a,i)}for(s in a)if(i=a[s],u=l[s],a.hasOwnProperty(s)&&(i!=null||u!=null))switch(s){case"value":k=i;break;case"defaultValue":O=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(r(91));break;default:i!==u&&Ut(t,e,s,i,a,u)}Hs(t,k,O);return;case"option":for(var mt in l)if(k=l[mt],l.hasOwnProperty(mt)&&k!=null&&!a.hasOwnProperty(mt))switch(mt){case"selected":t.selected=!1;break;default:Ut(t,e,mt,null,a,k)}for(m in a)if(k=a[m],O=l[m],a.hasOwnProperty(m)&&k!==O&&(k!=null||O!=null))switch(m){case"selected":t.selected=k&&typeof k!="function"&&typeof k!="symbol";break;default:Ut(t,e,m,k,a,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ht in l)k=l[ht],l.hasOwnProperty(ht)&&k!=null&&!a.hasOwnProperty(ht)&&Ut(t,e,ht,null,a,k);for(E in a)if(k=a[E],O=l[E],a.hasOwnProperty(E)&&k!==O&&(k!=null||O!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(r(137,e));break;default:Ut(t,e,E,k,a,O)}return;default:if(jo(e)){for(var $t in l)k=l[$t],l.hasOwnProperty($t)&&k!==void 0&&!a.hasOwnProperty($t)&&vc(t,e,$t,void 0,a,k);for(H in a)k=a[H],O=l[H],!a.hasOwnProperty(H)||k===O||k===void 0&&O===void 0||vc(t,e,H,k,a,O);return}}for(var S in l)k=l[S],l.hasOwnProperty(S)&&k!=null&&!a.hasOwnProperty(S)&&Ut(t,e,S,null,a,k);for(L in a)k=a[L],O=l[L],!a.hasOwnProperty(L)||k===O||k==null&&O==null||Ut(t,e,L,k,a,O)}var xc=null,Ac=null;function ju(t){return t.nodeType===9?t:t.ownerDocument}function Lh(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gh(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Sc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wc=null;function _m(){var t=window.event;return t&&t.type==="popstate"?t===wc?!1:(wc=t,!0):(wc=null,!1)}var Yh=typeof setTimeout=="function"?setTimeout:void 0,jm=typeof clearTimeout=="function"?clearTimeout:void 0,Qh=typeof Promise=="function"?Promise:void 0,Bm=typeof queueMicrotask=="function"?queueMicrotask:typeof Qh<"u"?function(t){return Qh.resolve(null).then(t).catch(Hm)}:Yh;function Hm(t){setTimeout(function(){throw t})}function Wl(t){return t==="head"}function qh(t,e){var l=e,a=0,i=0;do{var u=l.nextSibling;if(t.removeChild(l),u&&u.nodeType===8)if(l=u.data,l==="/$"){if(0<a&&8>a){l=a;var s=t.ownerDocument;if(l&1&&vi(s.documentElement),l&2&&vi(s.body),l&4)for(l=s.head,vi(l),s=l.firstChild;s;){var f=s.nextSibling,m=s.nodeName;s[_n]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&s.rel.toLowerCase()==="stylesheet"||l.removeChild(s),s=f}}if(i===0){t.removeChild(u),Ri(e);return}i--}else l==="$"||l==="$?"||l==="$!"?i++:a=l.charCodeAt(0)-48;else a=0;l=u}while(l);Ri(e)}function Ec(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Ec(l),Oo(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function Um(t,e,l,a){for(;t.nodeType===1;){var i=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[_n])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Ie(t.nextSibling),t===null)break}return null}function $m(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Ie(t.nextSibling),t===null))return null;return t}function Tc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Lm(t,e){var l=t.ownerDocument;if(t.data!=="$?"||l.readyState==="complete")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Ie(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Dc=null;function Xh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"){if(e===0)return t;e--}else l==="/$"&&e++}t=t.previousSibling}return null}function Vh(t,e,l){switch(e=ju(l),t){case"html":if(t=e.documentElement,!t)throw Error(r(452));return t;case"head":if(t=e.head,!t)throw Error(r(453));return t;case"body":if(t=e.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function vi(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Oo(t)}var Ze=new Map,Zh=new Set;function Bu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var kl=j.d;j.d={f:Gm,r:Ym,D:Qm,C:qm,L:Xm,m:Vm,X:Km,S:Zm,M:Jm};function Gm(){var t=kl.f(),e=Ru();return t||e}function Ym(t){var e=$a(t);e!==null&&e.tag===5&&e.type==="form"?hd(e):kl.r(t)}var xn=typeof document>"u"?null:document;function Kh(t,e,l){var a=xn;if(a&&typeof e=="string"&&e){var i=Le(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof l=="string"&&(i+='[crossorigin="'+l+'"]'),Zh.has(i)||(Zh.add(i),t={rel:t,crossOrigin:l,href:e},a.querySelector(i)===null&&(e=a.createElement("link"),pe(e,"link",t),ue(e),a.head.appendChild(e)))}}function Qm(t){kl.D(t),Kh("dns-prefetch",t,null)}function qm(t,e){kl.C(t,e),Kh("preconnect",t,e)}function Xm(t,e,l){kl.L(t,e,l);var a=xn;if(a&&t&&e){var i='link[rel="preload"][as="'+Le(e)+'"]';e==="image"&&l&&l.imageSrcSet?(i+='[imagesrcset="'+Le(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(i+='[imagesizes="'+Le(l.imageSizes)+'"]')):i+='[href="'+Le(t)+'"]';var u=i;switch(e){case"style":u=An(t);break;case"script":u=Sn(t)}Ze.has(u)||(t=R({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Ze.set(u,t),a.querySelector(i)!==null||e==="style"&&a.querySelector(xi(u))||e==="script"&&a.querySelector(Ai(u))||(e=a.createElement("link"),pe(e,"link",t),ue(e),a.head.appendChild(e)))}}function Vm(t,e){kl.m(t,e);var l=xn;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+Le(a)+'"][href="'+Le(t)+'"]',u=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Sn(t)}if(!Ze.has(u)&&(t=R({rel:"modulepreload",href:t},e),Ze.set(u,t),l.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Ai(u)))return}a=l.createElement("link"),pe(a,"link",t),ue(a),l.head.appendChild(a)}}}function Zm(t,e,l){kl.S(t,e,l);var a=xn;if(a&&t){var i=La(a).hoistableStyles,u=An(t);e=e||"default";var s=i.get(u);if(!s){var f={loading:0,preload:null};if(s=a.querySelector(xi(u)))f.loading=5;else{t=R({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Ze.get(u))&&Rc(t,l);var m=s=a.createElement("link");ue(m),pe(m,"link",t),m._p=new Promise(function(E,H){m.onload=E,m.onerror=H}),m.addEventListener("load",function(){f.loading|=1}),m.addEventListener("error",function(){f.loading|=2}),f.loading|=4,Hu(s,e,a)}s={type:"stylesheet",instance:s,count:1,state:f},i.set(u,s)}}}function Km(t,e){kl.X(t,e);var l=xn;if(l&&t){var a=La(l).hoistableScripts,i=Sn(t),u=a.get(i);u||(u=l.querySelector(Ai(i)),u||(t=R({src:t,async:!0},e),(e=Ze.get(i))&&kc(t,e),u=l.createElement("script"),ue(u),pe(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(i,u))}}function Jm(t,e){kl.M(t,e);var l=xn;if(l&&t){var a=La(l).hoistableScripts,i=Sn(t),u=a.get(i);u||(u=l.querySelector(Ai(i)),u||(t=R({src:t,async:!0,type:"module"},e),(e=Ze.get(i))&&kc(t,e),u=l.createElement("script"),ue(u),pe(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(i,u))}}function Jh(t,e,l,a){var i=(i=F.current)?Bu(i):null;if(!i)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=An(l.href),l=La(i).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=An(l.href);var u=La(i).hoistableStyles,s=u.get(t);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,s),(u=i.querySelector(xi(t)))&&!u._p&&(s.instance=u,s.state.loading=5),Ze.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Ze.set(t,l),u||Wm(i,t,l,s.state))),e&&a===null)throw Error(r(528,""));return s}if(e&&a!==null)throw Error(r(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Sn(l),l=La(i).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function An(t){return'href="'+Le(t)+'"'}function xi(t){return'link[rel="stylesheet"]['+t+"]"}function Wh(t){return R({},t,{"data-precedence":t.precedence,precedence:null})}function Wm(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),pe(e,"link",l),ue(e),t.head.appendChild(e))}function Sn(t){return'[src="'+Le(t)+'"]'}function Ai(t){return"script[async]"+t}function Fh(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+Le(l.href)+'"]');if(a)return e.instance=a,ue(a),a;var i=R({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),ue(a),pe(a,"style",i),Hu(a,l.precedence,t),e.instance=a;case"stylesheet":i=An(l.href);var u=t.querySelector(xi(i));if(u)return e.state.loading|=4,e.instance=u,ue(u),u;a=Wh(l),(i=Ze.get(i))&&Rc(a,i),u=(t.ownerDocument||t).createElement("link"),ue(u);var s=u;return s._p=new Promise(function(f,m){s.onload=f,s.onerror=m}),pe(u,"link",a),e.state.loading|=4,Hu(u,l.precedence,t),e.instance=u;case"script":return u=Sn(l.src),(i=t.querySelector(Ai(u)))?(e.instance=i,ue(i),i):(a=l,(i=Ze.get(u))&&(a=R({},l),kc(a,i)),t=t.ownerDocument||t,i=t.createElement("script"),ue(i),pe(i,"link",a),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(r(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Hu(a,l.precedence,t));return e.instance}function Hu(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,u=i,s=0;s<a.length;s++){var f=a[s];if(f.dataset.precedence===e)u=f;else if(u!==i)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function Rc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function kc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Uu=null;function Ih(t,e,l){if(Uu===null){var a=new Map,i=Uu=new Map;i.set(l,a)}else i=Uu,a=i.get(l),a||(a=new Map,i.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),i=0;i<l.length;i++){var u=l[i];if(!(u[_n]||u[be]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var s=u.getAttribute(e)||"";s=t+s;var f=a.get(s);f?f.push(u):a.set(s,[u])}}return a}function Ph(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function Fm(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function tp(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Si=null;function Im(){}function Pm(t,e,l){if(Si===null)throw Error(r(475));var a=Si;if(e.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var i=An(l.href),u=t.querySelector(xi(i));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=$u.bind(a),t.then(a,a)),e.state.loading|=4,e.instance=u,ue(u);return}u=t.ownerDocument||t,l=Wh(l),(i=Ze.get(i))&&Rc(l,i),u=u.createElement("link"),ue(u);var s=u;s._p=new Promise(function(f,m){s.onload=f,s.onerror=m}),pe(u,"link",l),e.instance=u}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(a.count++,e=$u.bind(a),t.addEventListener("load",e),t.addEventListener("error",e))}}function tb(){if(Si===null)throw Error(r(475));var t=Si;return t.stylesheets&&t.count===0&&Oc(t,t.stylesheets),0<t.count?function(e){var l=setTimeout(function(){if(t.stylesheets&&Oc(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(l)}}:null}function $u(){if(this.count--,this.count===0){if(this.stylesheets)Oc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Lu=null;function Oc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Lu=new Map,e.forEach(eb,t),Lu=null,$u.call(t))}function eb(t,e){if(!(e.state.loading&4)){var l=Lu.get(t);if(l)var a=l.get(null);else{l=new Map,Lu.set(t,l);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<i.length;u++){var s=i[u];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(l.set(s.dataset.precedence,s),a=s)}a&&l.set(null,a)}i=e.instance,s=i.getAttribute("data-precedence"),u=l.get(s)||a,u===a&&l.set(null,i),l.set(s,i),this.count++,a=$u.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),u?u.parentNode.insertBefore(i,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var wi={$$typeof:V,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function lb(t,e,l,a,i,u,s,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=To(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=To(0),this.hiddenUpdates=To(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=u,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function ep(t,e,l,a,i,u,s,f,m,E,H,L){return t=new lb(t,e,l,s,f,m,E,L),e=1,u===!0&&(e|=24),u=ze(3,null,null,e),t.current=u,u.stateNode=t,e=sr(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:a,isDehydrated:l,cache:e},pr(u),t}function lp(t){return t?(t=Ia,t):Ia}function ap(t,e,l,a,i,u){i=lp(i),a.context===null?a.context=i:a.pendingContext=i,a=Hl(e),a.payload={element:l},u=u===void 0?null:u,u!==null&&(a.callback=u),l=Ul(t,a,e),l!==null&&(je(l,t,e),Pn(l,t,e))}function np(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function zc(t,e){np(t,e),(t=t.alternate)&&np(t,e)}function ip(t){if(t.tag===13){var e=Fa(t,67108864);e!==null&&je(e,t,67108864),zc(t,67108864)}}var Gu=!0;function ab(t,e,l,a){var i=D.T;D.T=null;var u=j.p;try{j.p=2,Cc(t,e,l,a)}finally{j.p=u,D.T=i}}function nb(t,e,l,a){var i=D.T;D.T=null;var u=j.p;try{j.p=8,Cc(t,e,l,a)}finally{j.p=u,D.T=i}}function Cc(t,e,l,a){if(Gu){var i=Mc(a);if(i===null)yc(t,e,a,Yu,l),op(t,a);else if(ub(i,t,e,l,a))a.stopPropagation();else if(op(t,a),e&4&&-1<ib.indexOf(t)){for(;i!==null;){var u=$a(i);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var s=hl(u.pendingLanes);if(s!==0){var f=u;for(f.pendingLanes|=2,f.entangledLanes|=2;s;){var m=1<<31-Ae(s);f.entanglements[1]|=m,s&=~m}rl(u),(jt&6)===0&&(Tu=qt()+500,mi(0))}}break;case 13:f=Fa(u,2),f!==null&&je(f,u,2),Ru(),zc(u,2)}if(u=Mc(a),u===null&&yc(t,e,a,Yu,l),u===i)break;i=u}i!==null&&a.stopPropagation()}else yc(t,e,a,null,l)}}function Mc(t){return t=Ho(t),Nc(t)}var Yu=null;function Nc(t){if(Yu=null,t=Ua(t),t!==null){var e=p(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=v(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Yu=t,null}function up(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(me()){case ie:return 2;case He:return 8;case we:case ll:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var _c=!1,Fl=null,Il=null,Pl=null,Ei=new Map,Ti=new Map,ta=[],ib="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function op(t,e){switch(t){case"focusin":case"focusout":Fl=null;break;case"dragenter":case"dragleave":Il=null;break;case"mouseover":case"mouseout":Pl=null;break;case"pointerover":case"pointerout":Ei.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ti.delete(e.pointerId)}}function Di(t,e,l,a,i,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:u,targetContainers:[i]},e!==null&&(e=$a(e),e!==null&&ip(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ub(t,e,l,a,i){switch(e){case"focusin":return Fl=Di(Fl,t,e,l,a,i),!0;case"dragenter":return Il=Di(Il,t,e,l,a,i),!0;case"mouseover":return Pl=Di(Pl,t,e,l,a,i),!0;case"pointerover":var u=i.pointerId;return Ei.set(u,Di(Ei.get(u)||null,t,e,l,a,i)),!0;case"gotpointercapture":return u=i.pointerId,Ti.set(u,Di(Ti.get(u)||null,t,e,l,a,i)),!0}return!1}function rp(t){var e=Ua(t.target);if(e!==null){var l=p(e);if(l!==null){if(e=l.tag,e===13){if(e=v(l),e!==null){t.blockedOn=e,P0(t.priority,function(){if(l.tag===13){var a=_e();a=Do(a);var i=Fa(l,a);i!==null&&je(i,l,a),zc(l,a)}});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=Mc(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);Bo=a,l.target.dispatchEvent(a),Bo=null}else return e=$a(l),e!==null&&ip(e),t.blockedOn=l,!1;e.shift()}return!0}function cp(t,e,l){Qu(t)&&l.delete(e)}function ob(){_c=!1,Fl!==null&&Qu(Fl)&&(Fl=null),Il!==null&&Qu(Il)&&(Il=null),Pl!==null&&Qu(Pl)&&(Pl=null),Ei.forEach(cp),Ti.forEach(cp)}function qu(t,e){t.blockedOn===e&&(t.blockedOn=null,_c||(_c=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,ob)))}var Xu=null;function sp(t){Xu!==t&&(Xu=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Xu===t&&(Xu=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],i=t[e+2];if(typeof a!="function"){if(Nc(a||l)===null)continue;break}var u=$a(l);u!==null&&(t.splice(e,3),e-=3,Nr(u,{pending:!0,data:i,method:l.method,action:a},a,i))}}))}function Ri(t){function e(m){return qu(m,t)}Fl!==null&&qu(Fl,t),Il!==null&&qu(Il,t),Pl!==null&&qu(Pl,t),Ei.forEach(e),Ti.forEach(e);for(var l=0;l<ta.length;l++){var a=ta[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<ta.length&&(l=ta[0],l.blockedOn===null);)rp(l),l.blockedOn===null&&ta.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var i=l[a],u=l[a+1],s=i[Ee]||null;if(typeof u=="function")s||sp(l);else if(s){var f=null;if(u&&u.hasAttribute("formAction")){if(i=u,s=u[Ee]||null)f=s.formAction;else if(Nc(i)!==null)continue}else f=s.action;typeof f=="function"?l[a+1]=f:(l.splice(a,3),a-=3),sp(l)}}}function jc(t){this._internalRoot=t}Vu.prototype.render=jc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(r(409));var l=e.current,a=_e();ap(l,a,t,e,null,null)},Vu.prototype.unmount=jc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ap(t.current,2,null,t,null,null),Ru(),e[Ha]=null}};function Vu(t){this._internalRoot=t}Vu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ds();t={blockedOn:null,target:t,priority:e};for(var l=0;l<ta.length&&e!==0&&e<ta[l].priority;l++);ta.splice(l,0,t),l===0&&rp(t)}};var fp=o.version;if(fp!=="19.1.0")throw Error(r(527,fp,"19.1.0"));j.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=A(e),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var rb={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zu.isDisabled&&Zu.supportsFiber)try{Ml=Zu.inject(rb),xe=Zu}catch{}}return Oi.createRoot=function(t,e){if(!d(t))throw Error(r(299));var l=!1,a="",i=Rd,u=kd,s=Od,f=null;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(f=e.unstable_transitionCallbacks)),e=ep(t,1,!1,null,null,l,a,i,u,s,f,null),t[Ha]=e.current,bc(t),new jc(e)},Oi.hydrateRoot=function(t,e,l){if(!d(t))throw Error(r(299));var a=!1,i="",u=Rd,s=kd,f=Od,m=null,E=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(i=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(s=l.onCaughtError),l.onRecoverableError!==void 0&&(f=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(m=l.unstable_transitionCallbacks),l.formState!==void 0&&(E=l.formState)),e=ep(t,1,!0,e,l??null,a,i,u,s,f,m,E),e.context=lp(null),l=e.current,a=_e(),a=Do(a),i=Hl(a),i.callback=null,Ul(l,i,a),l=a,e.current.lanes=l,Nn(e,l),rl(e),t[Ha]=e.current,bc(t),new Vu(e)},Oi.version="19.1.0",Oi}var Ap;function bb(){if(Ap)return Uc.exports;Ap=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(o){console.error(o)}}return n(),Uc.exports=mb(),Uc.exports}var Wp=bb();const Ke=cs(Wp);var fe=function(){return fe=Object.assign||function(o){for(var c,r=1,d=arguments.length;r<d;r++){c=arguments[r];for(var p in c)Object.prototype.hasOwnProperty.call(c,p)&&(o[p]=c[p])}return o},fe.apply(this,arguments)};function Ni(n,o,c){if(c||arguments.length===2)for(var r=0,d=o.length,p;r<d;r++)(p||!(r in o))&&(p||(p=Array.prototype.slice.call(o,0,r)),p[r]=o[r]);return n.concat(p||Array.prototype.slice.call(o))}var Xt="-ms-",Mi="-moz-",Nt="-webkit-",Fp="comm",ho="rule",fs="decl",yb="@import",Ip="@keyframes",vb="@layer",Pp=Math.abs,ds=String.fromCharCode,Kc=Object.assign;function xb(n,o){return se(n,0)^45?(((o<<2^se(n,0))<<2^se(n,1))<<2^se(n,2))<<2^se(n,3):0}function t0(n){return n.trim()}function zl(n,o){return(n=o.exec(n))?n[0]:n}function St(n,o,c){return n.replace(o,c)}function Pu(n,o,c){return n.indexOf(o,c)}function se(n,o){return n.charCodeAt(o)|0}function Rn(n,o,c){return n.slice(o,c)}function sl(n){return n.length}function e0(n){return n.length}function Ci(n,o){return o.push(n),n}function Ab(n,o){return n.map(o).join("")}function Sp(n,o){return n.filter(function(c){return!zl(c,o)})}var po=1,kn=1,l0=0,Je=0,ee=0,Mn="";function go(n,o,c,r,d,p,v,T){return{value:n,root:o,parent:c,type:r,props:d,children:p,line:po,column:kn,length:v,return:"",siblings:T}}function la(n,o){return Kc(go("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},o)}function wn(n){for(;n.root;)n=la(n.root,{children:[n]});Ci(n,n.siblings)}function Sb(){return ee}function wb(){return ee=Je>0?se(Mn,--Je):0,kn--,ee===10&&(kn=1,po--),ee}function Pe(){return ee=Je<l0?se(Mn,Je++):0,kn++,ee===10&&(kn=1,po++),ee}function ka(){return se(Mn,Je)}function to(){return Je}function mo(n,o){return Rn(Mn,n,o)}function Jc(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Eb(n){return po=kn=1,l0=sl(Mn=n),Je=0,[]}function Tb(n){return Mn="",n}function Yc(n){return t0(mo(Je-1,Wc(n===91?n+2:n===40?n+1:n)))}function Db(n){for(;(ee=ka())&&ee<33;)Pe();return Jc(n)>2||Jc(ee)>3?"":" "}function Rb(n,o){for(;--o&&Pe()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return mo(n,to()+(o<6&&ka()==32&&Pe()==32))}function Wc(n){for(;Pe();)switch(ee){case n:return Je;case 34:case 39:n!==34&&n!==39&&Wc(ee);break;case 40:n===41&&Wc(n);break;case 92:Pe();break}return Je}function kb(n,o){for(;Pe()&&n+ee!==57;)if(n+ee===84&&ka()===47)break;return"/*"+mo(o,Je-1)+"*"+ds(n===47?n:Pe())}function Ob(n){for(;!Jc(ka());)Pe();return mo(n,Je)}function zb(n){return Tb(eo("",null,null,null,[""],n=Eb(n),0,[0],n))}function eo(n,o,c,r,d,p,v,T,A){for(var y=0,R=0,M=v,G=0,et=0,I=0,ut=1,P=1,tt=1,lt=0,V="",at=d,C=p,J=r,Z=V;P;)switch(I=lt,lt=Pe()){case 40:if(I!=108&&se(Z,M-1)==58){Pu(Z+=St(Yc(lt),"&","&\f"),"&\f",Pp(y?T[y-1]:0))!=-1&&(tt=-1);break}case 34:case 39:case 91:Z+=Yc(lt);break;case 9:case 10:case 13:case 32:Z+=Db(I);break;case 92:Z+=Rb(to()-1,7);continue;case 47:switch(ka()){case 42:case 47:Ci(Cb(kb(Pe(),to()),o,c,A),A);break;default:Z+="/"}break;case 123*ut:T[y++]=sl(Z)*tt;case 125*ut:case 59:case 0:switch(lt){case 0:case 125:P=0;case 59+R:tt==-1&&(Z=St(Z,/\f/g,"")),et>0&&sl(Z)-M&&Ci(et>32?Ep(Z+";",r,c,M-1,A):Ep(St(Z," ","")+";",r,c,M-2,A),A);break;case 59:Z+=";";default:if(Ci(J=wp(Z,o,c,y,R,d,T,V,at=[],C=[],M,p),p),lt===123)if(R===0)eo(Z,o,J,J,at,p,M,T,C);else switch(G===99&&se(Z,3)===110?100:G){case 100:case 108:case 109:case 115:eo(n,J,J,r&&Ci(wp(n,J,J,0,0,d,T,V,d,at=[],M,C),C),d,C,M,T,r?at:C);break;default:eo(Z,J,J,J,[""],C,0,T,C)}}y=R=et=0,ut=tt=1,V=Z="",M=v;break;case 58:M=1+sl(Z),et=I;default:if(ut<1){if(lt==123)--ut;else if(lt==125&&ut++==0&&wb()==125)continue}switch(Z+=ds(lt),lt*ut){case 38:tt=R>0?1:(Z+="\f",-1);break;case 44:T[y++]=(sl(Z)-1)*tt,tt=1;break;case 64:ka()===45&&(Z+=Yc(Pe())),G=ka(),R=M=sl(V=Z+=Ob(to())),lt++;break;case 45:I===45&&sl(Z)==2&&(ut=0)}}return p}function wp(n,o,c,r,d,p,v,T,A,y,R,M){for(var G=d-1,et=d===0?p:[""],I=e0(et),ut=0,P=0,tt=0;ut<r;++ut)for(var lt=0,V=Rn(n,G+1,G=Pp(P=v[ut])),at=n;lt<I;++lt)(at=t0(P>0?et[lt]+" "+V:St(V,/&\f/g,et[lt])))&&(A[tt++]=at);return go(n,o,c,d===0?ho:T,A,y,R,M)}function Cb(n,o,c,r){return go(n,o,c,Fp,ds(Sb()),Rn(n,2,-2),0,r)}function Ep(n,o,c,r,d){return go(n,o,c,fs,Rn(n,0,r),Rn(n,r+1,-1),r,d)}function a0(n,o,c){switch(xb(n,o)){case 5103:return Nt+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Nt+n+n;case 4789:return Mi+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Nt+n+Mi+n+Xt+n+n;case 5936:switch(se(n,o+11)){case 114:return Nt+n+Xt+St(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Nt+n+Xt+St(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Nt+n+Xt+St(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Nt+n+Xt+n+n;case 6165:return Nt+n+Xt+"flex-"+n+n;case 5187:return Nt+n+St(n,/(\w+).+(:[^]+)/,Nt+"box-$1$2"+Xt+"flex-$1$2")+n;case 5443:return Nt+n+Xt+"flex-item-"+St(n,/flex-|-self/g,"")+(zl(n,/flex-|baseline/)?"":Xt+"grid-row-"+St(n,/flex-|-self/g,""))+n;case 4675:return Nt+n+Xt+"flex-line-pack"+St(n,/align-content|flex-|-self/g,"")+n;case 5548:return Nt+n+Xt+St(n,"shrink","negative")+n;case 5292:return Nt+n+Xt+St(n,"basis","preferred-size")+n;case 6060:return Nt+"box-"+St(n,"-grow","")+Nt+n+Xt+St(n,"grow","positive")+n;case 4554:return Nt+St(n,/([^-])(transform)/g,"$1"+Nt+"$2")+n;case 6187:return St(St(St(n,/(zoom-|grab)/,Nt+"$1"),/(image-set)/,Nt+"$1"),n,"")+n;case 5495:case 3959:return St(n,/(image-set\([^]*)/,Nt+"$1$`$1");case 4968:return St(St(n,/(.+:)(flex-)?(.*)/,Nt+"box-pack:$3"+Xt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Nt+n+n;case 4200:if(!zl(n,/flex-|baseline/))return Xt+"grid-column-align"+Rn(n,o)+n;break;case 2592:case 3360:return Xt+St(n,"template-","")+n;case 4384:case 3616:return c&&c.some(function(r,d){return o=d,zl(r.props,/grid-\w+-end/)})?~Pu(n+(c=c[o].value),"span",0)?n:Xt+St(n,"-start","")+n+Xt+"grid-row-span:"+(~Pu(c,"span",0)?zl(c,/\d+/):+zl(c,/\d+/)-+zl(n,/\d+/))+";":Xt+St(n,"-start","")+n;case 4896:case 4128:return c&&c.some(function(r){return zl(r.props,/grid-\w+-start/)})?n:Xt+St(St(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return St(n,/(.+)-inline(.+)/,Nt+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(sl(n)-1-o>6)switch(se(n,o+1)){case 109:if(se(n,o+4)!==45)break;case 102:return St(n,/(.+:)(.+)-([^]+)/,"$1"+Nt+"$2-$3$1"+Mi+(se(n,o+3)==108?"$3":"$2-$3"))+n;case 115:return~Pu(n,"stretch",0)?a0(St(n,"stretch","fill-available"),o,c)+n:n}break;case 5152:case 5920:return St(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,d,p,v,T,A,y){return Xt+d+":"+p+y+(v?Xt+d+"-span:"+(T?A:+A-+p)+y:"")+n});case 4949:if(se(n,o+6)===121)return St(n,":",":"+Nt)+n;break;case 6444:switch(se(n,se(n,14)===45?18:11)){case 120:return St(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Nt+(se(n,14)===45?"inline-":"")+"box$3$1"+Nt+"$2$3$1"+Xt+"$2box$3")+n;case 100:return St(n,":",":"+Xt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return St(n,"scroll-","scroll-snap-")+n}return n}function no(n,o){for(var c="",r=0;r<n.length;r++)c+=o(n[r],r,n,o)||"";return c}function Mb(n,o,c,r){switch(n.type){case vb:if(n.children.length)break;case yb:case fs:return n.return=n.return||n.value;case Fp:return"";case Ip:return n.return=n.value+"{"+no(n.children,r)+"}";case ho:if(!sl(n.value=n.props.join(",")))return""}return sl(c=no(n.children,r))?n.return=n.value+"{"+c+"}":""}function Nb(n){var o=e0(n);return function(c,r,d,p){for(var v="",T=0;T<o;T++)v+=n[T](c,r,d,p)||"";return v}}function _b(n){return function(o){o.root||(o=o.return)&&n(o)}}function jb(n,o,c,r){if(n.length>-1&&!n.return)switch(n.type){case fs:n.return=a0(n.value,n.length,c);return;case Ip:return no([la(n,{value:St(n.value,"@","@"+Nt)})],r);case ho:if(n.length)return Ab(c=n.props,function(d){switch(zl(d,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":wn(la(n,{props:[St(d,/:(read-\w+)/,":"+Mi+"$1")]})),wn(la(n,{props:[d]})),Kc(n,{props:Sp(c,r)});break;case"::placeholder":wn(la(n,{props:[St(d,/:(plac\w+)/,":"+Nt+"input-$1")]})),wn(la(n,{props:[St(d,/:(plac\w+)/,":"+Mi+"$1")]})),wn(la(n,{props:[St(d,/:(plac\w+)/,Xt+"input-$1")]})),wn(la(n,{props:[d]})),Kc(n,{props:Sp(c,r)});break}return""})}}var Bb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Be={},On=typeof process<"u"&&Be!==void 0&&(Be.REACT_APP_SC_ATTR||Be.SC_ATTR)||"data-styled",n0="active",i0="data-styled-version",bo="6.1.17",hs=`/*!sc*/
`,io=typeof window<"u"&&"HTMLElement"in window,Hb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Be!==void 0&&Be.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Be.REACT_APP_SC_DISABLE_SPEEDY!==""?Be.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Be.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Be!==void 0&&Be.SC_DISABLE_SPEEDY!==void 0&&Be.SC_DISABLE_SPEEDY!==""&&Be.SC_DISABLE_SPEEDY!=="false"&&Be.SC_DISABLE_SPEEDY),Ub={},yo=Object.freeze([]),zn=Object.freeze({});function u0(n,o,c){return c===void 0&&(c=zn),n.theme!==c.theme&&n.theme||o||c.theme}var o0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),$b=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Lb=/(^-|-$)/g;function Tp(n){return n.replace($b,"-").replace(Lb,"")}var Gb=/(a)(d)/gi,Ku=52,Dp=function(n){return String.fromCharCode(n+(n>25?39:97))};function Fc(n){var o,c="";for(o=Math.abs(n);o>Ku;o=o/Ku|0)c=Dp(o%Ku)+c;return(Dp(o%Ku)+c).replace(Gb,"$1-$2")}var Qc,r0=5381,Dn=function(n,o){for(var c=o.length;c;)n=33*n^o.charCodeAt(--c);return n},c0=function(n){return Dn(r0,n)};function s0(n){return Fc(c0(n)>>>0)}function Yb(n){return n.displayName||n.name||"Component"}function qc(n){return typeof n=="string"&&!0}var f0=typeof Symbol=="function"&&Symbol.for,d0=f0?Symbol.for("react.memo"):60115,Qb=f0?Symbol.for("react.forward_ref"):60112,qb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Xb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},h0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Vb=((Qc={})[Qb]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Qc[d0]=h0,Qc);function Rp(n){return("type"in(o=n)&&o.type.$$typeof)===d0?h0:"$$typeof"in n?Vb[n.$$typeof]:qb;var o}var Zb=Object.defineProperty,Kb=Object.getOwnPropertyNames,kp=Object.getOwnPropertySymbols,Jb=Object.getOwnPropertyDescriptor,Wb=Object.getPrototypeOf,Op=Object.prototype;function p0(n,o,c){if(typeof o!="string"){if(Op){var r=Wb(o);r&&r!==Op&&p0(n,r,c)}var d=Kb(o);kp&&(d=d.concat(kp(o)));for(var p=Rp(n),v=Rp(o),T=0;T<d.length;++T){var A=d[T];if(!(A in Xb||c&&c[A]||v&&A in v||p&&A in p)){var y=Jb(o,A);try{Zb(n,A,y)}catch{}}}}return n}function Oa(n){return typeof n=="function"}function ps(n){return typeof n=="object"&&"styledComponentId"in n}function Da(n,o){return n&&o?"".concat(n," ").concat(o):n||o||""}function Ic(n,o){if(n.length===0)return"";for(var c=n[0],r=1;r<n.length;r++)c+=n[r];return c}function _i(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Pc(n,o,c){if(c===void 0&&(c=!1),!c&&!_i(n)&&!Array.isArray(n))return o;if(Array.isArray(o))for(var r=0;r<o.length;r++)n[r]=Pc(n[r],o[r]);else if(_i(o))for(var r in o)n[r]=Pc(n[r],o[r]);return n}function gs(n,o){Object.defineProperty(n,"toString",{value:o})}function za(n){for(var o=[],c=1;c<arguments.length;c++)o[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var Fb=function(){function n(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return n.prototype.indexOfGroup=function(o){for(var c=0,r=0;r<o;r++)c+=this.groupSizes[r];return c},n.prototype.insertRules=function(o,c){if(o>=this.groupSizes.length){for(var r=this.groupSizes,d=r.length,p=d;o>=p;)if((p<<=1)<0)throw za(16,"".concat(o));this.groupSizes=new Uint32Array(p),this.groupSizes.set(r),this.length=p;for(var v=d;v<p;v++)this.groupSizes[v]=0}for(var T=this.indexOfGroup(o+1),A=(v=0,c.length);v<A;v++)this.tag.insertRule(T,c[v])&&(this.groupSizes[o]++,T++)},n.prototype.clearGroup=function(o){if(o<this.length){var c=this.groupSizes[o],r=this.indexOfGroup(o),d=r+c;this.groupSizes[o]=0;for(var p=r;p<d;p++)this.tag.deleteRule(r)}},n.prototype.getGroup=function(o){var c="";if(o>=this.length||this.groupSizes[o]===0)return c;for(var r=this.groupSizes[o],d=this.indexOfGroup(o),p=d+r,v=d;v<p;v++)c+="".concat(this.tag.getRule(v)).concat(hs);return c},n}(),lo=new Map,uo=new Map,ao=1,Ju=function(n){if(lo.has(n))return lo.get(n);for(;uo.has(ao);)ao++;var o=ao++;return lo.set(n,o),uo.set(o,n),o},Ib=function(n,o){ao=o+1,lo.set(n,o),uo.set(o,n)},Pb="style[".concat(On,"][").concat(i0,'="').concat(bo,'"]'),ty=new RegExp("^".concat(On,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ey=function(n,o,c){for(var r,d=c.split(","),p=0,v=d.length;p<v;p++)(r=d[p])&&n.registerName(o,r)},ly=function(n,o){for(var c,r=((c=o.textContent)!==null&&c!==void 0?c:"").split(hs),d=[],p=0,v=r.length;p<v;p++){var T=r[p].trim();if(T){var A=T.match(ty);if(A){var y=0|parseInt(A[1],10),R=A[2];y!==0&&(Ib(R,y),ey(n,R,A[3]),n.getTag().insertRules(y,d)),d.length=0}else d.push(T)}}},zp=function(n){for(var o=document.querySelectorAll(Pb),c=0,r=o.length;c<r;c++){var d=o[c];d&&d.getAttribute(On)!==n0&&(ly(n,d),d.parentNode&&d.parentNode.removeChild(d))}};function ay(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var g0=function(n){var o=document.head,c=n||o,r=document.createElement("style"),d=function(T){var A=Array.from(T.querySelectorAll("style[".concat(On,"]")));return A[A.length-1]}(c),p=d!==void 0?d.nextSibling:null;r.setAttribute(On,n0),r.setAttribute(i0,bo);var v=ay();return v&&r.setAttribute("nonce",v),c.insertBefore(r,p),r},ny=function(){function n(o){this.element=g0(o),this.element.appendChild(document.createTextNode("")),this.sheet=function(c){if(c.sheet)return c.sheet;for(var r=document.styleSheets,d=0,p=r.length;d<p;d++){var v=r[d];if(v.ownerNode===c)return v}throw za(17)}(this.element),this.length=0}return n.prototype.insertRule=function(o,c){try{return this.sheet.insertRule(c,o),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},n.prototype.getRule=function(o){var c=this.sheet.cssRules[o];return c&&c.cssText?c.cssText:""},n}(),iy=function(){function n(o){this.element=g0(o),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(o,c){if(o<=this.length&&o>=0){var r=document.createTextNode(c);return this.element.insertBefore(r,this.nodes[o]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},n.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},n}(),uy=function(){function n(o){this.rules=[],this.length=0}return n.prototype.insertRule=function(o,c){return o<=this.length&&(this.rules.splice(o,0,c),this.length++,!0)},n.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},n.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},n}(),Cp=io,oy={isServer:!io,useCSSOMInjection:!Hb},oo=function(){function n(o,c,r){o===void 0&&(o=zn),c===void 0&&(c={});var d=this;this.options=fe(fe({},oy),o),this.gs=c,this.names=new Map(r),this.server=!!o.isServer,!this.server&&io&&Cp&&(Cp=!1,zp(this)),gs(this,function(){return function(p){for(var v=p.getTag(),T=v.length,A="",y=function(M){var G=function(tt){return uo.get(tt)}(M);if(G===void 0)return"continue";var et=p.names.get(G),I=v.getGroup(M);if(et===void 0||!et.size||I.length===0)return"continue";var ut="".concat(On,".g").concat(M,'[id="').concat(G,'"]'),P="";et!==void 0&&et.forEach(function(tt){tt.length>0&&(P+="".concat(tt,","))}),A+="".concat(I).concat(ut,'{content:"').concat(P,'"}').concat(hs)},R=0;R<T;R++)y(R);return A}(d)})}return n.registerId=function(o){return Ju(o)},n.prototype.rehydrate=function(){!this.server&&io&&zp(this)},n.prototype.reconstructWithOptions=function(o,c){return c===void 0&&(c=!0),new n(fe(fe({},this.options),o),this.gs,c&&this.names||void 0)},n.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(o=function(c){var r=c.useCSSOMInjection,d=c.target;return c.isServer?new uy(d):r?new ny(d):new iy(d)}(this.options),new Fb(o)));var o},n.prototype.hasNameForId=function(o,c){return this.names.has(o)&&this.names.get(o).has(c)},n.prototype.registerName=function(o,c){if(Ju(o),this.names.has(o))this.names.get(o).add(c);else{var r=new Set;r.add(c),this.names.set(o,r)}},n.prototype.insertRules=function(o,c,r){this.registerName(o,c),this.getTag().insertRules(Ju(o),r)},n.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},n.prototype.clearRules=function(o){this.getTag().clearGroup(Ju(o)),this.clearNames(o)},n.prototype.clearTag=function(){this.tag=void 0},n}(),ry=/&/g,cy=/^\s*\/\/.*$/gm;function m0(n,o){return n.map(function(c){return c.type==="rule"&&(c.value="".concat(o," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(o," ")),c.props=c.props.map(function(r){return"".concat(o," ").concat(r)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=m0(c.children,o)),c})}function sy(n){var o,c,r,d=zn,p=d.options,v=p===void 0?zn:p,T=d.plugins,A=T===void 0?yo:T,y=function(G,et,I){return I.startsWith(c)&&I.endsWith(c)&&I.replaceAll(c,"").length>0?".".concat(o):G},R=A.slice();R.push(function(G){G.type===ho&&G.value.includes("&")&&(G.props[0]=G.props[0].replace(ry,c).replace(r,y))}),v.prefix&&R.push(jb),R.push(Mb);var M=function(G,et,I,ut){et===void 0&&(et=""),I===void 0&&(I=""),ut===void 0&&(ut="&"),o=ut,c=et,r=new RegExp("\\".concat(c,"\\b"),"g");var P=G.replace(cy,""),tt=zb(I||et?"".concat(I," ").concat(et," { ").concat(P," }"):P);v.namespace&&(tt=m0(tt,v.namespace));var lt=[];return no(tt,Nb(R.concat(_b(function(V){return lt.push(V)})))),lt};return M.hash=A.length?A.reduce(function(G,et){return et.name||za(15),Dn(G,et.name)},r0).toString():"",M}var fy=new oo,ts=sy(),b0=N.createContext({shouldForwardProp:void 0,styleSheet:fy,stylis:ts});b0.Consumer;N.createContext(void 0);function es(){return z.useContext(b0)}var dy=function(){function n(o,c){var r=this;this.inject=function(d,p){p===void 0&&(p=ts);var v=r.name+p.hash;d.hasNameForId(r.id,v)||d.insertRules(r.id,v,p(r.rules,v,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=c,gs(this,function(){throw za(12,String(r.name))})}return n.prototype.getName=function(o){return o===void 0&&(o=ts),this.name+o.hash},n}(),hy=function(n){return n>="A"&&n<="Z"};function Mp(n){for(var o="",c=0;c<n.length;c++){var r=n[c];if(c===1&&r==="-"&&n[0]==="-")return n;hy(r)?o+="-"+r.toLowerCase():o+=r}return o.startsWith("ms-")?"-"+o:o}var y0=function(n){return n==null||n===!1||n===""},v0=function(n){var o,c,r=[];for(var d in n){var p=n[d];n.hasOwnProperty(d)&&!y0(p)&&(Array.isArray(p)&&p.isCss||Oa(p)?r.push("".concat(Mp(d),":"),p,";"):_i(p)?r.push.apply(r,Ni(Ni(["".concat(d," {")],v0(p),!1),["}"],!1)):r.push("".concat(Mp(d),": ").concat((o=d,(c=p)==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||o in Bb||o.startsWith("--")?String(c).trim():"".concat(c,"px")),";")))}return r};function na(n,o,c,r){if(y0(n))return[];if(ps(n))return[".".concat(n.styledComponentId)];if(Oa(n)){if(!Oa(p=n)||p.prototype&&p.prototype.isReactComponent||!o)return[n];var d=n(o);return na(d,o,c,r)}var p;return n instanceof dy?c?(n.inject(c,r),[n.getName(r)]):[n]:_i(n)?v0(n):Array.isArray(n)?Array.prototype.concat.apply(yo,n.map(function(v){return na(v,o,c,r)})):[n.toString()]}function x0(n){for(var o=0;o<n.length;o+=1){var c=n[o];if(Oa(c)&&!ps(c))return!1}return!0}var py=c0(bo),gy=function(){function n(o,c,r){this.rules=o,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&x0(o),this.componentId=c,this.baseHash=Dn(py,c),this.baseStyle=r,oo.registerId(c)}return n.prototype.generateAndInjectStyles=function(o,c,r){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,c,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))d=Da(d,this.staticRulesId);else{var p=Ic(na(this.rules,o,c,r)),v=Fc(Dn(this.baseHash,p)>>>0);if(!c.hasNameForId(this.componentId,v)){var T=r(p,".".concat(v),void 0,this.componentId);c.insertRules(this.componentId,v,T)}d=Da(d,v),this.staticRulesId=v}else{for(var A=Dn(this.baseHash,r.hash),y="",R=0;R<this.rules.length;R++){var M=this.rules[R];if(typeof M=="string")y+=M;else if(M){var G=Ic(na(M,o,c,r));A=Dn(A,G+R),y+=G}}if(y){var et=Fc(A>>>0);c.hasNameForId(this.componentId,et)||c.insertRules(this.componentId,et,r(y,".".concat(et),void 0,this.componentId)),d=Da(d,et)}}return d},n}(),ji=N.createContext(void 0);ji.Consumer;function my(n){var o=N.useContext(ji),c=z.useMemo(function(){return function(r,d){if(!r)throw za(14);if(Oa(r)){var p=r(d);return p}if(Array.isArray(r)||typeof r!="object")throw za(8);return d?fe(fe({},d),r):r}(n.theme,o)},[n.theme,o]);return n.children?N.createElement(ji.Provider,{value:c},n.children):null}var Xc={};function by(n,o,c){var r=ps(n),d=n,p=!qc(n),v=o.attrs,T=v===void 0?yo:v,A=o.componentId,y=A===void 0?function(at,C){var J=typeof at!="string"?"sc":Tp(at);Xc[J]=(Xc[J]||0)+1;var Z="".concat(J,"-").concat(s0(bo+J+Xc[J]));return C?"".concat(C,"-").concat(Z):Z}(o.displayName,o.parentComponentId):A,R=o.displayName,M=R===void 0?function(at){return qc(at)?"styled.".concat(at):"Styled(".concat(Yb(at),")")}(n):R,G=o.displayName&&o.componentId?"".concat(Tp(o.displayName),"-").concat(o.componentId):o.componentId||y,et=r&&d.attrs?d.attrs.concat(T).filter(Boolean):T,I=o.shouldForwardProp;if(r&&d.shouldForwardProp){var ut=d.shouldForwardProp;if(o.shouldForwardProp){var P=o.shouldForwardProp;I=function(at,C){return ut(at,C)&&P(at,C)}}else I=ut}var tt=new gy(c,G,r?d.componentStyle:void 0);function lt(at,C){return function(J,Z,xt){var vt=J.attrs,Gt=J.componentStyle,Mt=J.defaultProps,bt=J.foldedComponentIds,h=J.styledComponentId,U=J.target,K=N.useContext(ji),D=es(),j=J.shouldForwardProp||D.shouldForwardProp,q=u0(Z,K,Mt)||zn,it=function(nt,F,ct){for(var ft,Y=fe(fe({},F),{className:void 0,theme:ct}),gt=0;gt<nt.length;gt+=1){var dt=Oa(ft=nt[gt])?ft(Y):ft;for(var yt in dt)Y[yt]=yt==="className"?Da(Y[yt],dt[yt]):yt==="style"?fe(fe({},Y[yt]),dt[yt]):dt[yt]}return F.className&&(Y.className=Da(Y.className,F.className)),Y}(vt,Z,q),g=it.as||U,B={};for(var W in it)it[W]===void 0||W[0]==="$"||W==="as"||W==="theme"&&it.theme===q||(W==="forwardedAs"?B.as=it.forwardedAs:j&&!j(W,g)||(B[W]=it[W]));var _=function(nt,F){var ct=es(),ft=nt.generateAndInjectStyles(F,ct.styleSheet,ct.stylis);return ft}(Gt,it),Q=Da(bt,h);return _&&(Q+=" "+_),it.className&&(Q+=" "+it.className),B[qc(g)&&!o0.has(g)?"class":"className"]=Q,xt&&(B.ref=xt),z.createElement(g,B)}(V,at,C)}lt.displayName=M;var V=N.forwardRef(lt);return V.attrs=et,V.componentStyle=tt,V.displayName=M,V.shouldForwardProp=I,V.foldedComponentIds=r?Da(d.foldedComponentIds,d.styledComponentId):"",V.styledComponentId=G,V.target=r?d.target:n,Object.defineProperty(V,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(at){this._foldedDefaultProps=r?function(C){for(var J=[],Z=1;Z<arguments.length;Z++)J[Z-1]=arguments[Z];for(var xt=0,vt=J;xt<vt.length;xt++)Pc(C,vt[xt],!0);return C}({},d.defaultProps,at):at}}),gs(V,function(){return".".concat(V.styledComponentId)}),p&&p0(V,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),V}function Np(n,o){for(var c=[n[0]],r=0,d=o.length;r<d;r+=1)c.push(o[r],n[r+1]);return c}var _p=function(n){return Object.assign(n,{isCss:!0})};function ot(n){for(var o=[],c=1;c<arguments.length;c++)o[c-1]=arguments[c];if(Oa(n)||_i(n))return _p(na(Np(yo,Ni([n],o,!0))));var r=n;return o.length===0&&r.length===1&&typeof r[0]=="string"?na(r):_p(na(Np(r,o)))}function ls(n,o,c){if(c===void 0&&(c=zn),!o)throw za(1,o);var r=function(d){for(var p=[],v=1;v<arguments.length;v++)p[v-1]=arguments[v];return n(o,c,ot.apply(void 0,Ni([d],p,!1)))};return r.attrs=function(d){return ls(n,o,fe(fe({},c),{attrs:Array.prototype.concat(c.attrs,d).filter(Boolean)}))},r.withConfig=function(d){return ls(n,o,fe(fe({},c),d))},r}var A0=function(n){return ls(by,n)},X=A0;o0.forEach(function(n){X[n]=A0(n)});var yy=function(){function n(o,c){this.rules=o,this.componentId=c,this.isStatic=x0(o),oo.registerId(this.componentId+1)}return n.prototype.createStyles=function(o,c,r,d){var p=d(Ic(na(this.rules,c,r,d)),""),v=this.componentId+o;r.insertRules(v,v,p)},n.prototype.removeStyles=function(o,c){c.clearRules(this.componentId+o)},n.prototype.renderStyles=function(o,c,r,d){o>2&&oo.registerId(this.componentId+o),this.removeStyles(o,r),this.createStyles(o,c,r,d)},n}();function vy(n){for(var o=[],c=1;c<arguments.length;c++)o[c-1]=arguments[c];var r=ot.apply(void 0,Ni([n],o,!1)),d="sc-global-".concat(s0(JSON.stringify(r))),p=new yy(r,d),v=function(A){var y=es(),R=N.useContext(ji),M=N.useRef(y.styleSheet.allocateGSInstance(d)).current;return y.styleSheet.server&&T(M,A,y.styleSheet,R,y.stylis),N.useLayoutEffect(function(){if(!y.styleSheet.server)return T(M,A,y.styleSheet,R,y.stylis),function(){return p.removeStyles(M,y.styleSheet)}},[M,A,y.styleSheet,R,y.stylis]),null};function T(A,y,R,M,G){if(p.isStatic)p.renderStyles(A,Ub,R,G);else{var et=fe(fe({},y),{theme:u0(y,M,v.defaultProps)});p.renderStyles(A,et,R,G)}}return N.memo(v)}var xy=`
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

`;const ms="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",bs="inset 2px 2px 3px rgba(0,0,0,0.2)",tl=()=>ot`
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
`,Ca=()=>ot`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:n})=>n.materialText};
  background: ${({$disabled:n,theme:o})=>n?o.flatLight:o.canvas};
  border: 2px solid ${({theme:n})=>n.canvas};
  outline: 2px solid ${({theme:n})=>n.flatDark};
  outline-offset: -4px;
`,En={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},Ay=({theme:n,topLeftInner:o,bottomRightInner:c,hasShadow:r=!1,hasInsetShadow:d=!1})=>[r?ms:!1,d?bs:!1,o!==null?`inset 1px 1px 0px 1px ${n[o]}`:!1,c!==null?`inset -1px -1px 0 1px ${n[c]}`:!1].filter(Boolean).join(", "),Wt=({invert:n=!1,style:o="button"}={})=>{const c={topLeftOuter:n?"bottomRightOuter":"topLeftOuter",topLeftInner:n?"bottomRightInner":"topLeftInner",bottomRightInner:n?"topLeftInner":"bottomRightInner",bottomRightOuter:n?"topLeftOuter":"bottomRightOuter"};return ot`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[En[o][c.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[En[o][c.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[En[o][c.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[En[o][c.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:d})=>Ay({theme:r,topLeftInner:En[o][c.topLeftInner],bottomRightInner:En[o][c.bottomRightInner],hasShadow:d})};
  `},Cn=()=>ot`
  outline: 2px dotted ${({theme:n})=>n.materialText};
`,Sy=n=>Buffer.from(n).toString("base64"),wy=typeof btoa<"u"?btoa:Sy,Wu=(n,o=0)=>{const c=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${o} 13 13)">
      <polygon fill="${n}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${wy(c)})`},ys=(n="default")=>ot`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:o})=>Hi({mainColor:n==="flat"?o.flatLight:o.material,secondaryColor:n==="flat"?o.canvas:o.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${el()}
    ${n==="flat"?Ca():Wt({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:o})=>o.material};
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
`,Ey=X.a`
  color: ${({theme:n})=>n.anchor};
  font-size: inherit;
  text-decoration: ${({underline:n})=>n?"underline":"none"};
  &:visited {
    color: ${({theme:n})=>n.anchorVisited};
  }
`,Ty=z.forwardRef(({children:n,underline:o=!0,...c},r)=>N.createElement(Ey,{ref:r,underline:o,...c},n));Ty.displayName="Anchor";const Dy=X.header`
  ${Wt()};
  ${el()};

  position: ${n=>{var o;return(o=n.position)!==null&&o!==void 0?o:n.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,S0=z.forwardRef(({children:n,fixed:o=!0,position:c="fixed",...r},d)=>N.createElement(Dy,{fixed:o,position:o!==!1?c:void 0,ref:d,...r},n));S0.displayName="AppBar";const Ma=()=>{};function Ra(n,o,c){return c!==null&&n>c?c:o!==null&&n<o?o:n}function Ry(n){if(Math.abs(n)<1){const c=n.toExponential().split("e-"),r=c[0].split(".")[1];return(r?r.length:0)+parseInt(c[1],10)}const o=n.toString().split(".")[1];return o?o.length:0}function jp(n,o,c){const r=Math.round((n-c)/o)*o+c;return Number(r.toFixed(Ry(o)))}function ia(n){return typeof n=="number"?`${n}px`:n}const ky=X.div`
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
`,Oy=X.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,zy=z.forwardRef(({alt:n="",children:o,noBorder:c=!1,size:r=35,square:d=!1,src:p,...v},T)=>N.createElement(ky,{noBorder:c,ref:T,size:ia(r),square:d,src:p,...v},p?N.createElement(Oy,{src:p,alt:n}):o));zy.displayName="Avatar";const ge={sm:"28px",md:"36px",lg:"44px"},Cy=ot`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:n="md"})=>ge[n]};
  width: ${({fullWidth:n,size:o="md",square:c})=>n?"100%":c?ge[o]:"auto"};
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
  ${({active:n,disabled:o,primary:c,theme:r,variant:d})=>d==="flat"?ot`
          ${Ca()}
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
            ${!n&&!o&&Cn}
            outline-offset: -4px;
          }
        `:d==="menu"||d==="thin"?ot`
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

            ${Wt(n?{style:d==="raised"?"window":"button",invert:!0}:{style:d==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!o&&Wt({style:d==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!n&&!o&&Cn}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${n?"0":"1px"};
          }
        `}
  ${Cy}
`,Bi=z.forwardRef(({onClick:n,disabled:o=!1,children:c,type:r="button",fullWidth:d=!1,size:p="md",square:v=!1,active:T=!1,onTouchStart:A=Ma,primary:y=!1,variant:R="default",...M},G)=>N.createElement(vo,{active:T,disabled:o,$disabled:o,fullWidth:d,onClick:o?void 0:n,onTouchStart:A,primary:y,ref:G,size:p,square:v,type:r,variant:R,...M},c));Bi.displayName="Button";function ua({defaultValue:n,onChange:o,onChangePropName:c="onChange",readOnly:r,value:d,valuePropName:p="value"}){const v=d!==void 0,[T,A]=z.useState(n),y=z.useCallback(R=>{v||A(R)},[v]);if(v&&typeof o!="function"&&!r){const R=`Warning: You provided a \`${p}\` prop to a component without an \`${c}\` handler.${p==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${c}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${c}\` function that updates \`${p}\`.`}`;console.warn(R)}return[v?d:T,y]}const as=X.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${n=>ge[n.size]};
  width: ${n=>n.square?ge[n.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${n=>n.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${n=>ge[n.size]};
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
`,aa=z.forwardRef(({size:n="lg",disabled:o,square:c,children:r,onClick:d,primary:p,...v},T)=>N.createElement(as,{$disabled:o,size:n,square:c,onClick:o?void 0:d,primary:p,role:"menuitem",ref:T,"aria-disabled":o,...v},r));aa.displayName="MenuListItem";const w0=X.ul.attrs(()=>({role:"menu"}))`
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
`;w0.displayName="MenuList";const fl=20,ro=X.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${fl}px;
  height: ${fl}px;
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

  ${as} & {
    margin: 0;
    height: 100%;
  }
  ${as}:hover & {
    ${({$disabled:n,theme:o})=>!n&&ot`
        color: ${o.materialTextInvert};
      `};
  }
`,xs=X.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${ro}:focus ~ & {
    ${Cn}
  }
  ${ro}:not(:disabled) ~ &:active {
    ${Cn}
  }
`,dl=X.div`
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
    ${n=>n.shadow&&`box-shadow:${bs};`}
  }
`,My=X.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${ys()}
`,E0=z.forwardRef(({children:n,shadow:o=!0,...c},r)=>N.createElement(dl,{ref:r,shadow:o,...c},N.createElement(My,null,n)));E0.displayName="ScrollView";const T0=ot`
  width: ${fl}px;
  height: ${fl}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Ny=X(dl)`
  ${T0}
  width: ${fl}px;
  height: ${fl}px;
  background: ${({$disabled:n,theme:o})=>n?o.material:o.canvas};
  &:before {
    box-shadow: none;
  }
`,_y=X.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:n,theme:o})=>n?o.flatLight:o.canvas};
  ${T0}
  width: ${fl-4}px;
  height: ${fl-4}px;
  outline: none;
  border: 2px solid ${({theme:n})=>n.flatDark};
  background: ${({$disabled:n,theme:o})=>n?o.flatLight:o.canvas};
`,jy=X.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,By=X.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
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
`,Hy={flat:_y,default:Ny},Uy=z.forwardRef(({checked:n,className:o="",defaultChecked:c=!1,disabled:r=!1,indeterminate:d=!1,label:p="",onChange:v=Ma,style:T={},value:A,variant:y="default",...R},M)=>{var G;const[et,I]=ua({defaultValue:c,onChange:v,readOnly:(G=R.readOnly)!==null&&G!==void 0?G:r,value:n}),ut=z.useCallback(lt=>{const V=lt.target.checked;I(V),v(lt)},[v,I]),P=Hy[y];let tt=null;return d?tt=By:et&&(tt=jy),N.createElement(vs,{$disabled:r,className:o,style:T},N.createElement(ro,{disabled:r,onChange:r?void 0:ut,readOnly:r,type:"checkbox",value:A,checked:et,"data-indeterminate":d,ref:M,...R}),N.createElement(P,{$disabled:r,role:"presentation"},tt&&N.createElement(tt,{$disabled:r,variant:y})),p&&N.createElement(xs,null,p))});Uy.displayName="Checkbox";const co=X.div`
  ${({orientation:n,theme:o,size:c="100%"})=>n==="vertical"?`
    height: ${ia(c)};
    border-left: 2px solid ${o.borderDark};
    border-right: 2px solid ${o.borderLightest};
    margin: 0;
    `:`
    width: ${ia(c)};
    border-bottom: 2px solid ${o.borderLightest};
    border-top: 2px solid ${o.borderDark};
    margin: 0;
    `}
`;co.displayName="Separator";const $y=X(vo)`
  padding-left: 8px;
`,Ly=X(co)`
  height: 21px;
  position: relative;
  top: 0;
`,D0=X.input`
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
`,Gy=X.div`
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
  ${D0}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Cn}
    outline-offset: -8px;
  }
`,Yy=X.span`
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
`,Qy=z.forwardRef(({value:n,defaultValue:o,onChange:c=Ma,disabled:r=!1,variant:d="default",...p},v)=>{var T;const[A,y]=ua({defaultValue:o,onChange:c,readOnly:(T=p.readOnly)!==null&&T!==void 0?T:r,value:n}),R=M=>{const G=M.target.value;y(G),c(M)};return N.createElement($y,{disabled:r,as:"div",variant:d,size:"md"},N.createElement(D0,{onChange:R,readOnly:r,disabled:r,value:A??"#008080",type:"color",ref:v,...p}),N.createElement(Gy,{$disabled:r,color:A??"#008080",role:"presentation"}),d==="default"&&N.createElement(Ly,{orientation:"vertical"}),N.createElement(Yy,{$disabled:r,variant:d}))});Qy.displayName="ColorInput";const qy=X.div`
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
`,Bp=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],Xy=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function Vy({digit:n=0,pixelSize:o=2,...c}){const r=Xy[Number(n)].map((d,p)=>d?`${Bp[p]} active`:Bp[p]);return N.createElement(qy,{pixelSize:o,...c},r.map((d,p)=>N.createElement("span",{className:d,key:p})))}const Zy=X.div`
  ${Wt({style:"status"})}
  display: inline-flex;
  background: #000000;
`,Ky={sm:1,md:2,lg:3,xl:4},Jy=z.forwardRef(({value:n=0,minLength:o=3,size:c="md",...r},d)=>{const p=z.useMemo(()=>n.toString().padStart(o,"0").split(""),[o,n]);return N.createElement(Zy,{ref:d,...r},p.map((v,T)=>N.createElement(Vy,{digit:v,pixelSize:Ky[c],key:T})))});Jy.displayName="Counter";const R0=ot`
  display: flex;
  align-items: center;
  width: ${({fullWidth:n})=>n?"100%":"auto"};
  min-height: ${ge.md};
`,Wy=X(dl).attrs({"data-testid":"variant-default"})`
  ${R0}
  background: ${({$disabled:n,theme:o})=>n?o.material:o.canvas};
`,Fy=X.div.attrs({"data-testid":"variant-flat"})`
  ${Ca()}
  ${R0}
  position: relative;
`,k0=ot`
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
`,Iy=X.input`
  ${k0}
  padding: 0 8px;
`,Py=X.textarea`
  ${k0}
  padding: 8px;
  resize: none;
  ${({variant:n})=>ys(n)}
`,O0=z.forwardRef(({className:n,disabled:o=!1,fullWidth:c,onChange:r=Ma,shadow:d=!0,style:p,variant:v="default",...T},A)=>{const y=v==="flat"?Fy:Wy,R=z.useMemo(()=>{var M;return T.multiline?N.createElement(Py,{disabled:o,onChange:o?void 0:r,readOnly:o,ref:A,variant:v,...T}):N.createElement(Iy,{disabled:o,onChange:o?void 0:r,readOnly:o,ref:A,type:(M=T.type)!==null&&M!==void 0?M:"text",variant:v,...T})},[o,r,T,A,v]);return N.createElement(y,{className:n,fullWidth:c,$disabled:o,shadow:d,style:p},R)});O0.displayName="TextInput";const tv=X.div`
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
`,ev=X.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:n})=>n==="flat"?ot`
          height: calc(${ge.md} - 4px);
        `:ot`
          height: ${ge.md};
          margin-left: 2px;
        `}
`,Hp=X.span`
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
`,z0=z.forwardRef(({className:n,defaultValue:o,disabled:c=!1,max:r,min:d,onChange:p,readOnly:v,step:T=1,style:A,value:y,variant:R="default",width:M,...G},et)=>{const[I,ut]=ua({defaultValue:o,onChange:p,readOnly:v,value:y}),P=z.useCallback(J=>{const Z=parseFloat(J.target.value);ut(Z)},[ut]),tt=z.useCallback(J=>{const Z=Ra(parseFloat(((I??0)+J).toFixed(2)),d??null,r??null);ut(Z),p==null||p(Z)},[r,d,p,ut,I]),lt=z.useCallback(()=>{I!==void 0&&(p==null||p(I))},[p,I]),V=z.useCallback(()=>{tt(T)},[tt,T]),at=z.useCallback(()=>{tt(-T)},[tt,T]),C=R==="flat"?"flat":"raised";return N.createElement(tv,{className:n,style:{...A,width:M!==void 0?ia(M):"auto"},...G},N.createElement(O0,{value:I,variant:R,onChange:P,disabled:c,type:"number",readOnly:v,ref:et,fullWidth:!0,onBlur:lt}),N.createElement(ev,{variant:R},N.createElement(ns,{"data-testid":"increment",variant:C,disabled:c||v,onClick:V},N.createElement(Hp,{invert:!0})),N.createElement(ns,{"data-testid":"decrement",variant:C,disabled:c||v,onClick:at},N.createElement(Hp,null))))});z0.displayName="NumberInput";function lv(){const n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let o="";for(let c=0;c<10;c+=1)o+=n[Math.floor(Math.random()*n.length)];return o}const C0=n=>z.useMemo(()=>lv(),[n]),M0=ot`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,N0=ot`
  background: ${({theme:n})=>n.hoverBackground};
  color: ${({theme:n})=>n.canvasTextInvert};
`,As=X.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,av=X.div`
  ${M0}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${As}:focus & {
    ${N0}
    border: 2px dotted ${({theme:n})=>n.focusSecondary};
  }
`,_0=ot`
  height: ${ge.md};
  display: inline-block;
  color: ${({$disabled:n=!1,theme:o})=>n?tl():o.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:n})=>n?"default":"pointer"};
`,nv=X(dl)`
  ${_0}
  background: ${({$disabled:n=!1,theme:o})=>n?o.material:o.canvas};
  &:focus {
    outline: 0;
  }
`,iv=X.div`
  ${Ca()}
  ${_0}
  background: ${({$disabled:n=!1,theme:o})=>n?o.flatLight:o.canvas};
`,uv=X.select`
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
  ${M0}
  cursor: pointer;
  &:disabled {
    ${tl()};
    background: ${({theme:n})=>n.material};
    cursor: default;
  }
`,j0=X(vo).attrs(()=>({"aria-hidden":"true"}))`
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
`,ov=X.span`
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
  ${j0}:active & {
    margin-top: 2px;
  }
`,rv=X.ul`
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
  ${({variant:n="default"})=>n==="flat"?ot`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:o})=>o.flatDark};
        `:ot`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:o})=>o.borderDarkest};
        `}
  ${({variant:n="default"})=>ys(n)}
`,cv=X.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${ge.md} - 4px);
  line-height: calc(${ge.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:n})=>n.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:n})=>n?N0:""}
  user-select: none;
`,sv=[],B0=({className:n,defaultValue:o,disabled:c,native:r,onChange:d,options:p=sv,readOnly:v,style:T,value:A,variant:y,width:R})=>{var M;const G=z.useMemo(()=>p.filter(Boolean),[p]),[et,I]=ua({defaultValue:o??((M=G==null?void 0:G[0])===null||M===void 0?void 0:M.value),onChange:d,readOnly:v,value:A}),ut=!(c||v),P=z.useMemo(()=>({className:n,style:{...T,width:R}}),[n,T,R]),tt=z.useMemo(()=>N.createElement(j0,{as:"div","data-testid":"select-button",$disabled:c,native:r,tabIndex:-1,variant:y==="flat"?"flat":"raised"},N.createElement(ov,{"data-testid":"select-icon",$disabled:c})),[c,r,y]),lt=z.useMemo(()=>y==="flat"?iv:nv,[y]);return z.useMemo(()=>({isEnabled:ut,options:G,value:et,setValue:I,wrapperProps:P,DropdownButton:tt,Wrapper:lt}),[tt,lt,ut,G,I,et,P])},fv={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},dv=1e3,hv=({onBlur:n,onChange:o,onClose:c,onFocus:r,onKeyDown:d,onMouseDown:p,onOpen:v,open:T,options:A,readOnly:y,value:R,selectRef:M,setValue:G,wrapperRef:et})=>{const I=z.useRef(null),ut=z.useRef([]),P=z.useRef(0),tt=z.useRef(0),lt=z.useRef(),V=z.useRef("search"),at=z.useRef(""),C=z.useRef(),[J,Z]=ua({defaultValue:!1,onChange:v,onChangePropName:"onOpen",readOnly:y,value:T,valuePropName:"open"}),xt=z.useMemo(()=>{const Y=A.findIndex(gt=>gt.value===R);return P.current=Ra(Y,0,null),A[Y]},[A,R]),[vt,Gt]=z.useState(A[0]),Mt=z.useCallback(Y=>{const gt=I.current,dt=ut.current[Y];if(!dt||!gt){lt.current=Y;return}lt.current=void 0;const yt=gt.clientHeight,kt=gt.scrollTop,_t=gt.scrollTop+yt,Qt=dt.offsetTop,le=dt.offsetHeight,qt=dt.offsetTop+dt.offsetHeight;Qt<kt&&gt.scrollTo(0,Qt),qt>_t&&gt.scrollTo(0,Qt-yt+le),dt.focus({preventScroll:!0})},[I]),bt=z.useCallback((Y,{scroll:gt}={})=>{var dt;const yt=A.length-1;let kt;switch(Y){case"first":{kt=0;break}case"last":{kt=yt;break}case"next":{kt=Ra(tt.current+1,0,yt);break}case"previous":{kt=Ra(tt.current-1,0,yt);break}case"selected":{kt=Ra((dt=P.current)!==null&&dt!==void 0?dt:0,0,yt);break}default:kt=Y}tt.current=kt,Gt(A[kt]),gt&&Mt(kt)},[tt,A,Mt]),h=z.useCallback(({fromEvent:Y})=>{Z(!0),bt("selected",{scroll:!0}),v==null||v({fromEvent:Y})},[bt,v,Z]),U=z.useCallback(()=>{V.current="search",at.current="",clearTimeout(C.current)},[]),K=z.useCallback(({focusSelect:Y,fromEvent:gt})=>{var dt;c==null||c({fromEvent:gt}),Z(!1),Gt(A[0]),U(),lt.current=void 0,Y&&((dt=M.current)===null||dt===void 0||dt.focus())},[U,c,A,M,Z]),D=z.useCallback(({fromEvent:Y})=>{J?K({focusSelect:!1,fromEvent:Y}):h({fromEvent:Y})},[K,h,J]),j=z.useCallback((Y,{fromEvent:gt})=>{P.current!==Y&&(P.current=Y,G(A[Y].value),o==null||o(A[Y],{fromEvent:gt}))},[o,A,G]),q=z.useCallback(({focusSelect:Y,fromEvent:gt})=>{j(tt.current,{fromEvent:gt}),K({focusSelect:Y,fromEvent:gt})},[K,j]),it=z.useCallback((Y,{fromEvent:gt,select:dt})=>{var yt;switch(V.current==="cycleFirstLetter"&&Y!==at.current&&(V.current="search"),Y===at.current?V.current="cycleFirstLetter":at.current+=Y,V.current){case"search":{let kt=A.findIndex(_t=>{var Qt;return((Qt=_t.label)===null||Qt===void 0?void 0:Qt.toLocaleUpperCase().indexOf(at.current))===0});kt<0&&(kt=A.findIndex(_t=>{var Qt;return((Qt=_t.label)===null||Qt===void 0?void 0:Qt.toLocaleUpperCase().indexOf(Y))===0}),at.current=Y),kt>=0&&(dt?j(kt,{fromEvent:gt}):bt(kt,{scroll:!0}));break}case"cycleFirstLetter":{const kt=dt?(yt=P.current)!==null&&yt!==void 0?yt:-1:tt.current;let _t=A.findIndex((Qt,le)=>{var qt;return le>kt&&((qt=Qt.label)===null||qt===void 0?void 0:qt.toLocaleUpperCase().indexOf(Y))===0});_t<0&&(_t=A.findIndex(Qt=>{var le;return((le=Qt.label)===null||le===void 0?void 0:le.toLocaleUpperCase().indexOf(Y))===0})),_t>=0&&(dt?j(_t,{fromEvent:gt}):bt(_t,{scroll:!0}));break}}clearTimeout(C.current),C.current=setTimeout(()=>{V.current==="search"&&(at.current="")},dv)},[bt,A,j]),g=z.useCallback(Y=>{var gt;Y.button===0&&(Y.preventDefault(),(gt=M.current)===null||gt===void 0||gt.focus(),D({fromEvent:Y}),p==null||p(Y))},[p,M,D]),B=z.useCallback(Y=>{q({focusSelect:!0,fromEvent:Y})},[q]),W=z.useCallback(Y=>{const{altKey:gt,code:dt,ctrlKey:yt,metaKey:kt,shiftKey:_t}=Y,{ARROW_DOWN:Qt,ARROW_UP:le,END:qt,ENTER:me,ESC:ie,HOME:He,SPACE:we,TAB:ll}=fv,Ue=gt||yt||kt||_t;if(!(dt===ll&&(gt||yt||kt)||dt!==ll&&Ue))switch(dt){case Qt:{if(Y.preventDefault(),!J){h({fromEvent:Y});return}bt("next",{scroll:!0});break}case le:{if(Y.preventDefault(),!J){h({fromEvent:Y});return}bt("previous",{scroll:!0});break}case qt:{if(Y.preventDefault(),!J){h({fromEvent:Y});return}bt("last",{scroll:!0});break}case me:{if(!J)return;Y.preventDefault(),q({focusSelect:!0,fromEvent:Y});break}case ie:{if(!J)return;Y.preventDefault(),K({focusSelect:!0,fromEvent:Y});break}case He:{if(Y.preventDefault(),!J){h({fromEvent:Y});return}bt("first",{scroll:!0});break}case we:{Y.preventDefault(),J?q({focusSelect:!0,fromEvent:Y}):h({fromEvent:Y});break}case ll:{if(!J)return;_t||Y.preventDefault(),q({focusSelect:!_t,fromEvent:Y});break}default:!Ue&&dt.match(/^Key/)&&(Y.preventDefault(),Y.stopPropagation(),it(dt.replace(/^Key/,""),{select:!J,fromEvent:Y}))}},[bt,K,J,h,it,q]),_=z.useCallback(Y=>{W(Y),d==null||d(Y)},[W,d]),Q=z.useCallback(Y=>{bt(Y)},[bt]),nt=z.useCallback(Y=>{J||(U(),n==null||n(Y))},[U,n,J]),F=z.useCallback(Y=>{U(),r==null||r(Y)},[U,r]),ct=z.useCallback(Y=>{I.current=Y,lt.current!==void 0&&Mt(lt.current)},[Mt]),ft=z.useCallback((Y,gt)=>{ut.current[gt]=Y,lt.current===gt&&Mt(lt.current)},[Mt]);return z.useEffect(()=>{if(!J)return()=>{};const Y=gt=>{var dt;const yt=gt.target;!((dt=et.current)===null||dt===void 0)&&dt.contains(yt)||(gt.preventDefault(),K({focusSelect:!1,fromEvent:gt}))};return document.addEventListener("mousedown",Y),()=>{document.removeEventListener("mousedown",Y)}},[K,J,et]),z.useMemo(()=>({activeOption:vt,handleActivateOptionIndex:Q,handleBlur:nt,handleButtonKeyDown:_,handleDropdownKeyDown:W,handleFocus:F,handleMouseDown:g,handleOptionClick:B,handleSetDropdownRef:ct,handleSetOptionRef:ft,open:J,selectedOption:xt}),[vt,Q,nt,_,F,W,g,B,ct,ft,J,xt])},pv=z.forwardRef(({className:n,defaultValue:o,disabled:c,onChange:r,options:d,readOnly:p,style:v,value:T,variant:A,width:y,...R},M)=>{const{isEnabled:G,options:et,setValue:I,value:ut,DropdownButton:P,Wrapper:tt}=B0({defaultValue:o,disabled:c,native:!0,onChange:r,options:d,readOnly:p,value:T,variant:A}),lt=z.useCallback(V=>{const at=et.find(C=>C.value===V.target.value);at&&(I(at.value),r==null||r(at,{fromEvent:V}))},[r,et,I]);return N.createElement(tt,{className:n,style:{...v,width:y}},N.createElement(As,null,N.createElement(uv,{...R,disabled:c,onChange:G?lt:Ma,ref:M,value:ut},et.map((V,at)=>{var C;return N.createElement("option",{key:`${V.value}-${at}`,value:V.value},(C=V.label)!==null&&C!==void 0?C:V.value)})),P))});pv.displayName="SelectNative";function gv({activateOptionIndex:n,active:o,index:c,onClick:r,option:d,selected:p,setRef:v}){const T=z.useCallback(()=>{n(c)},[n,c]),A=z.useCallback(R=>{v(R,c)},[c,v]),y=C0();return N.createElement(cv,{active:o,"aria-selected":p?"true":void 0,"data-value":d.value,id:y,onClick:r,onMouseEnter:T,ref:A,role:"option",tabIndex:0},d.label)}function mv({"aria-label":n,"aria-labelledby":o,className:c,defaultValue:r,disabled:d=!1,formatDisplay:p,inputProps:v,labelId:T,menuMaxHeight:A,name:y,onBlur:R,onChange:M,onClose:G,onFocus:et,onKeyDown:I,onMouseDown:ut,onOpen:P,open:tt,options:lt,readOnly:V,shadow:at=!0,style:C,variant:J="default",value:Z,width:xt="auto",...vt},Gt){const{isEnabled:Mt,options:bt,setValue:h,value:U,wrapperProps:K,DropdownButton:D,Wrapper:j}=B0({className:c,defaultValue:r,disabled:d,native:!1,onChange:M,options:lt,style:C,readOnly:V,value:Z,variant:J,width:xt}),q=z.useRef(null),it=z.useRef(null),g=z.useRef(null),{activeOption:B,handleActivateOptionIndex:W,handleBlur:_,handleButtonKeyDown:Q,handleDropdownKeyDown:nt,handleFocus:F,handleMouseDown:ct,handleOptionClick:ft,handleSetDropdownRef:Y,handleSetOptionRef:gt,open:dt,selectedOption:yt}=hv({onBlur:R,onChange:M,onClose:G,onFocus:et,onKeyDown:I,onMouseDown:ut,onOpen:P,open:tt,options:bt,value:U,selectRef:it,setValue:h,wrapperRef:g});z.useImperativeHandle(Gt,()=>({focus:me=>{var ie;(ie=it.current)===null||ie===void 0||ie.focus(me)},node:q.current,value:String(U)}),[U]);const kt=z.useMemo(()=>yt?typeof p=="function"?p(yt):yt.label:"",[p,yt]),_t=Mt?1:void 0,Qt=z.useMemo(()=>A?{overflow:"auto",maxHeight:A}:void 0,[A]),le=C0(),qt=z.useMemo(()=>bt.map((me,ie)=>{const He=`${U}-${ie}`,we=me===B,ll=me===yt;return N.createElement(gv,{activateOptionIndex:W,active:we,index:ie,key:He,onClick:ft,option:me,selected:ll,setRef:gt})}),[B,W,ft,gt,bt,yt,U]);return N.createElement(j,{...K,$disabled:d,ref:g,shadow:at,style:{...C,width:xt}},N.createElement("input",{name:y,ref:q,type:"hidden",value:String(U),...v}),N.createElement(As,{"aria-disabled":d,"aria-expanded":dt,"aria-haspopup":"listbox","aria-label":n,"aria-labelledby":o??T,"aria-owns":Mt&&dt?le:void 0,onBlur:_,onFocus:F,onKeyDown:Q,onMouseDown:Mt?ct:ut,ref:it,role:"button",tabIndex:_t,...vt},N.createElement(av,null,kt),D),Mt&&dt&&N.createElement(rv,{id:le,onKeyDown:nt,ref:Y,role:"listbox",style:Qt,tabIndex:0,variant:J},qt))}const H0=z.forwardRef(mv);H0.displayName="Select";const bv=X.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${n=>n.noPadding?"0":"4px"};
`,so=z.forwardRef(function({children:o,noPadding:c=!1,...r},d){return N.createElement(bv,{noPadding:c,ref:d,...r},o)});so.displayName="Toolbar";const yv=X.div`
  padding: 16px;
`,U0=z.forwardRef(function({children:o,...c},r){return N.createElement(yv,{ref:r,...c},o)});U0.displayName="WindowContent";const vv=X.div`
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
`,$0=z.forwardRef(function({active:o=!0,children:c,...r},d){return N.createElement(vv,{active:o,ref:d,...r},c)});$0.displayName="WindowHeader";const xv=X.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Wt({style:"window"})}
  ${el()}
`,Av=X.span`
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
`,L0=z.forwardRef(({children:n,resizable:o=!1,resizeRef:c,shadow:r=!0,...d},p)=>N.createElement(xv,{ref:p,shadow:r,...d},n,o&&N.createElement(Av,{"data-testid":"resizeHandle",ref:c})));L0.displayName="Window";const Sv=X(E0)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:n})=>n.canvas};
`,wv=X.div`
  display: flex;
  background: ${({theme:n})=>n.materialDark};
  color: #dfe0e3;
`,Ev=X.div`
  display: flex;
  flex-wrap: wrap;
`,Ol=X.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,Tv=X.span`
  cursor: pointer;

  background: ${({active:n,theme:o})=>n?o.hoverBackground:"transparent"};
  color: ${({active:n,theme:o})=>n?o.canvasTextInvert:o.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:n,active:o})=>o?"none":n.materialDark};
  }
`,Dv=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function Rv(n,o){return new Date(n,o+1,0).getDate()}function kv(n,o,c){return new Date(n,o,c).getDay()}function Ov(n){const o=new Date(Date.parse(n)),c=o.getUTCDate(),r=o.getUTCMonth(),d=o.getUTCFullYear();return{day:c,month:r,year:d}}const zv=z.forwardRef(({className:n,date:o=new Date().toISOString(),onAccept:c,onCancel:r,shadow:d=!0},p)=>{const[v,T]=z.useState(()=>Ov(o)),{year:A,month:y,day:R}=v,M=z.useCallback(({value:P})=>{T(tt=>({...tt,month:P}))},[]),G=z.useCallback(P=>{T(tt=>({...tt,year:P}))},[]),et=z.useCallback(P=>{T(tt=>({...tt,day:P}))},[]),I=z.useCallback(()=>{const P=[v.year,v.month+1,v.day].map(tt=>String(tt).padStart(2,"0")).join("-");c==null||c(P)},[v.day,v.month,v.year,c]),ut=z.useMemo(()=>{const P=Array.from({length:42}),tt=kv(A,y,1);let lt=R;const V=Rv(A,y);return lt=lt<V?lt:V,P.forEach((at,C)=>{if(C>=tt&&C<V+tt){const J=C-tt+1;P[C]=N.createElement(Ol,{key:C,onClick:()=>{et(J)}},N.createElement(Tv,{active:J===lt},J))}else P[C]=N.createElement(Ol,{key:C})}),P},[R,et,y,A]);return N.createElement(L0,{className:n,ref:p,shadow:d,style:{margin:20}},N.createElement($0,null,N.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),N.createElement(U0,null,N.createElement(so,{noPadding:!0,style:{justifyContent:"space-between"}},N.createElement(H0,{options:Dv,value:y,onChange:M,width:128,menuMaxHeight:200}),N.createElement(z0,{value:A,onChange:G,width:100})),N.createElement(Sv,null,N.createElement(wv,null,N.createElement(Ol,null,"S"),N.createElement(Ol,null,"M"),N.createElement(Ol,null,"T"),N.createElement(Ol,null,"W"),N.createElement(Ol,null,"T"),N.createElement(Ol,null,"F"),N.createElement(Ol,null,"S")),N.createElement(Ev,null,ut)),N.createElement(so,{noPadding:!0,style:{justifyContent:"space-between"}},N.createElement(Bi,{fullWidth:!0,onClick:r,disabled:!r},"Cancel"),N.createElement(Bi,{fullWidth:!0,onClick:c?I:void 0,disabled:!c},"OK"))))});zv.displayName="DatePicker";const Cv=n=>{switch(n){case"status":case"well":return ot`
        ${Wt({style:"status"})}
      `;case"window":case"outside":return ot`
        ${Wt({style:"window"})}
      `;case"field":return ot`
        ${Wt({style:"field"})}
      `;default:return ot`
        ${Wt()}
      `}},Mv=X.div`
  position: relative;
  font-size: 1rem;
  ${({variant:n})=>Cv(n)}
  ${({variant:n})=>el(n==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,G0=z.forwardRef(({children:n,shadow:o=!1,variant:c="window",...r},d)=>N.createElement(Mv,{ref:d,shadow:o,variant:c,...r},n));G0.displayName="Frame";const Nv=X.fieldset`
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
`,_v=X.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:n,variant:o})=>o==="flat"?n.canvas:n.material};
`,jv=z.forwardRef(({label:n,disabled:o=!1,variant:c="default",children:r,...d},p)=>N.createElement(Nv,{"aria-disabled":o,$disabled:o,variant:c,ref:p,...d},n&&N.createElement(_v,{variant:c},n),r));jv.displayName="GroupBox";const Y0=X.div`
  ${({theme:n,size:o="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${ia(o)};
  width: 5px;
  border-top: 2px solid ${n.borderLightest};
  border-left: 2px solid ${n.borderLightest};
  border-bottom: 2px solid ${n.borderDark};
  border-right: 2px solid ${n.borderDark};
  background: ${n.material};
`}
`;Y0.displayName="Handle";const Bv="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",Hv=X.div`
  display: inline-block;
  height: ${({size:n})=>ia(n)};
  width: ${({size:n})=>ia(n)};
`,Uv=X.span`
  display: block;
  background: ${Bv};
  background-size: cover;
  width: 100%;
  height: 100%;
`,$v=z.forwardRef(({size:n=30,...o},c)=>N.createElement(Hv,{size:n,ref:c,...o},N.createElement(Uv,null)));$v.displayName="Hourglass";const Lv=X.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,Gv=X.div`
  position: relative;
`,Yv=X.div`
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
`,Qv=X(dl).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,qv=X.div`
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
`,Xv=z.forwardRef(({backgroundStyles:n,children:o,...c},r)=>N.createElement(Lv,{ref:r,...c},N.createElement(Gv,null,N.createElement(Yv,null,N.createElement(Qv,{style:n},o)),N.createElement(qv,null))));Xv.displayName="Monitor";const Vv=X.div`
  display: inline-block;
  height: ${ge.md};
  width: 100%;
`,Zv=X(dl)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,Q0=ot`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,Kv=X.div`
  position: relative;
  top: 4px;
  ${Q0}
  background: ${({theme:n})=>n.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:n})=>n.materialText};
`,Jv=X.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${Q0}
  color: ${({theme:n})=>n.materialTextInvert};
  background: ${({theme:n})=>n.progress};
  clip-path: polygon(
    0 0,
    ${({value:n=0})=>n}% 0,
    ${({value:n=0})=>n}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,Wv=X.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,q0=17,Fv=X.span`
  display: inline-block;
  width: ${q0}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:n})=>n.progress};
  border-color: ${({theme:n})=>n.material};
  border-width: 0px 1px;
  border-style: solid;
`,Iv=z.forwardRef(({hideValue:n=!1,shadow:o=!0,value:c,variant:r="default",...d},p)=>{const v=n?null:`${c}%`,T=z.useRef(null),[A,y]=z.useState([]),R=z.useCallback(()=>{if(!T.current||c===void 0)return;const M=T.current.getBoundingClientRect().width,G=Math.round(c/100*M/q0);y(Array.from({length:G}))},[c]);return z.useEffect(()=>(R(),window.addEventListener("resize",R),()=>window.removeEventListener("resize",R)),[R]),N.createElement(Vv,{"aria-valuenow":c!==void 0?Math.round(c):void 0,ref:p,role:"progressbar",variant:r,...d},N.createElement(Zv,{variant:r,shadow:o},r==="default"?N.createElement(N.Fragment,null,N.createElement(Kv,{"data-testid":"defaultProgress1"},v),N.createElement(Jv,{"data-testid":"defaultProgress2",value:c},v)):N.createElement(Wv,{ref:T,"data-testid":"tileProgress"},A.map((M,G)=>N.createElement(Fv,{key:G})))))});Iv.displayName="ProgressBar";const X0=ot`
  width: ${fl}px;
  height: ${fl}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Pv=X(dl)`
  ${X0}
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
`,t1=X.div`
  ${Ca()}
  ${X0}
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
`,e1=X.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,l1={flat:t1,default:Pv},a1=z.forwardRef(({checked:n,className:o="",disabled:c=!1,label:r="",onChange:d,style:p={},variant:v="default",...T},A)=>{const y=l1[v];return N.createElement(vs,{$disabled:c,className:o,style:p},N.createElement(y,{$disabled:c,role:"presentation"},n&&N.createElement(e1,{$disabled:c,variant:v})),N.createElement(ro,{disabled:c,onChange:c?void 0:d,readOnly:c,type:"radio",checked:n,ref:A,...T}),r&&N.createElement(xs,null,r))});a1.displayName="Radio";const n1=typeof window<"u"?z.useLayoutEffect:z.useEffect;function Ta(n){const o=z.useRef(n);return n1(()=>{o.current=n}),z.useCallback((...c)=>(0,o.current)(...c),[])}function Up(n,o){typeof n=="function"?n(o):n&&(n.current=o)}function $p(n,o){return z.useMemo(()=>n==null&&o==null?null:c=>{Up(n,c),Up(o,c)},[n,o])}var i1=Jp();let xo=!0,is=!1,Lp;const u1={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function o1(n){if("type"in n){const{type:o,tagName:c}=n;if(c==="INPUT"&&u1[o]&&!n.readOnly||c==="TEXTAREA"&&!n.readOnly)return!0}return!!("isContentEditable"in n&&n.isContentEditable)}function r1(n){n.metaKey||n.altKey||n.ctrlKey||(xo=!0)}function Vc(){xo=!1}function c1(){this.visibilityState==="hidden"&&is&&(xo=!0)}function s1(n){n.addEventListener("keydown",r1,!0),n.addEventListener("mousedown",Vc,!0),n.addEventListener("pointerdown",Vc,!0),n.addEventListener("touchstart",Vc,!0),n.addEventListener("visibilitychange",c1,!0)}function f1(n){const{target:o}=n;try{return o.matches(":focus-visible")}catch{}return xo||o1(o)}function d1(){is=!0,window.clearTimeout(Lp),Lp=window.setTimeout(()=>{is=!1},100)}function h1(){const n=z.useCallback(o=>{const c=i1.findDOMNode(o);c!=null&&s1(c.ownerDocument)},[]);return{isFocusVisible:f1,onBlurVisible:d1,ref:n}}function p1(n,o,c){return(c-o)*n+o}function Fu(n,o){if(o!==void 0&&"changedTouches"in n){for(let c=0;c<n.changedTouches.length;c+=1){const r=n.changedTouches[c];if(r.identifier===o)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in n?{x:n.clientX,y:n.clientY}:!1}function Iu(n){return n&&n.ownerDocument||document}function g1(n,o){var c;const{index:r}=(c=n.reduce((d,p,v)=>{const T=Math.abs(o-p);return d===null||T<d.distance||T===d.distance?{distance:T,index:v}:d},null))!==null&&c!==void 0?c:{};return r??-1}const m1=X.div`
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
`,V0=()=>ot`
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
`,b1=X(dl)`
  ${V0()}
`,y1=X(dl)`
  ${V0()}

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
`,v1=X.span`
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
          ${Ca()}
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
`,fo=6,x1=X.span`
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
`,A1=X.div`
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
`,S1=z.forwardRef(({defaultValue:n,disabled:o=!1,marks:c=!1,max:r=100,min:d=0,name:p,onChange:v,onChangeCommitted:T,onMouseDown:A,orientation:y="horizontal",size:R="100%",step:M=1,value:G,variant:et="default",...I},ut)=>{const P=et==="flat"?y1:b1,tt=y==="vertical",[lt=d,V]=ua({defaultValue:n,onChange:v??T,value:G}),{isFocusVisible:at,onBlurVisible:C,ref:J}=h1(),[Z,xt]=z.useState(!1),vt=z.useRef(),Gt=z.useRef(null),Mt=$p(J,vt),bt=$p(ut,Mt),h=Ta(_=>{at(_)&&xt(!0)}),U=Ta(()=>{Z!==!1&&(xt(!1),C())}),K=z.useRef(),D=z.useMemo(()=>c===!0&&Number.isFinite(M)?[...Array(Math.round((r-d)/M)+1)].map((_,Q)=>({label:void 0,value:d+M*Q})):Array.isArray(c)?c:[],[c,r,d,M]),j=Ta(_=>{const Q=(r-d)/10,nt=D.map(ft=>ft.value),F=nt.indexOf(lt);let ct=0;switch(_.key){case"Home":ct=d;break;case"End":ct=r;break;case"PageUp":M&&(ct=lt+Q);break;case"PageDown":M&&(ct=lt-Q);break;case"ArrowRight":case"ArrowUp":M?ct=lt+M:ct=nt[F+1]||nt[nt.length-1];break;case"ArrowLeft":case"ArrowDown":M?ct=lt-M:ct=nt[F-1]||nt[0];break;default:return}_.preventDefault(),M&&(ct=jp(ct,M,d)),ct=Ra(ct,d,r),V(ct),xt(!0),v==null||v(ct),T==null||T(ct)}),q=z.useCallback(_=>{if(!vt.current)return 0;const Q=vt.current.getBoundingClientRect();let nt;tt?nt=(Q.bottom-_.y)/Q.height:nt=(_.x-Q.left)/Q.width;let F;if(F=p1(nt,d,r),M)F=jp(F,M,d);else{const ct=D.map(Y=>Y.value),ft=g1(ct,F);F=ct[ft]}return F=Ra(F,d,r),F},[D,r,d,M,tt]),it=Ta(_=>{var Q;const nt=Fu(_,K.current);if(!nt)return;const F=q(nt);(Q=Gt.current)===null||Q===void 0||Q.focus(),V(F),xt(!0),v==null||v(F)}),g=Ta(_=>{const Q=Fu(_,K.current);if(!Q)return;const nt=q(Q);T==null||T(nt),K.current=void 0;const F=Iu(vt.current);F.removeEventListener("mousemove",it),F.removeEventListener("mouseup",g),F.removeEventListener("touchmove",it),F.removeEventListener("touchend",g)}),B=Ta(_=>{var Q;A==null||A(_),_.preventDefault(),(Q=Gt.current)===null||Q===void 0||Q.focus(),xt(!0);const nt=Fu(_,K.current);if(nt){const ct=q(nt);V(ct),v==null||v(ct)}const F=Iu(vt.current);F.addEventListener("mousemove",it),F.addEventListener("mouseup",g)}),W=Ta(_=>{var Q;_.preventDefault();const nt=_.changedTouches[0];nt!=null&&(K.current=nt.identifier),(Q=Gt.current)===null||Q===void 0||Q.focus(),xt(!0);const F=Fu(_,K.current);if(F){const ft=q(F);V(ft),v==null||v(ft)}const ct=Iu(vt.current);ct.addEventListener("touchmove",it),ct.addEventListener("touchend",g)});return z.useEffect(()=>{const{current:_}=vt;_==null||_.addEventListener("touchstart",W);const Q=Iu(_);return()=>{_==null||_.removeEventListener("touchstart",W),Q.removeEventListener("mousemove",it),Q.removeEventListener("mouseup",g),Q.removeEventListener("touchmove",it),Q.removeEventListener("touchend",g)}},[g,it,W]),N.createElement(m1,{$disabled:o,hasMarks:!!D.length,isFocused:Z,onMouseDown:B,orientation:y,ref:bt,size:ia(R),...I},N.createElement("input",{disabled:o,name:p,type:"hidden",value:lt??0}),D&&D.map(_=>N.createElement(x1,{$disabled:o,"data-testid":"tick",key:_.value/(r-d)*100,orientation:y,style:{[tt?"bottom":"left"]:`${(_.value-d)/(r-d)*100}%`}},_.label&&N.createElement(A1,{"aria-hidden":!0,"data-testid":"mark",orientation:y},_.label))),N.createElement(P,{orientation:y,variant:et}),N.createElement(v1,{$disabled:o,"aria-disabled":o?!0:void 0,"aria-orientation":y,"aria-valuemax":r,"aria-valuemin":d,"aria-valuenow":lt,onBlur:U,onFocus:h,onKeyDown:j,orientation:y,ref:Gt,role:"slider",style:{[tt?"bottom":"left"]:`${(tt?-100:0)+100*(lt-d)/(r-d)}%`},tabIndex:o?void 0:0,variant:et}))});S1.displayName="Slider";const w1=X.tbody`
  background: ${({theme:n})=>n.canvas};
  display: table-row-group;
  box-shadow: ${bs};
  overflow-y: auto;
`,E1=z.forwardRef(function({children:o,...c},r){return N.createElement(w1,{ref:r,...c},o)});E1.displayName="TableBody";const T1=X.td`
  padding: 0 8px;
`,D1=z.forwardRef(function({children:o,...c},r){return N.createElement(T1,{ref:r,...c},o)});D1.displayName="TableDataCell";const R1=X.thead`
  display: table-header-group;
`,k1=z.forwardRef(function({children:o,...c},r){return N.createElement(R1,{ref:r,...c},o)});k1.displayName="TableHead";const O1=X.th`
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
`,z1=z.forwardRef(function({disabled:o=!1,children:c,onClick:r,onTouchStart:d=Ma,sort:p,...v},T){const A=p==="asc"?"ascending":p==="desc"?"descending":void 0;return N.createElement(O1,{$disabled:o,"aria-disabled":o,"aria-sort":A,onClick:o?void 0:r,onTouchStart:o?void 0:d,ref:T,...v},N.createElement("div",null,c))});z1.displayName="TableHeadCell";const C1=X.tr`
  color: inherit;
  display: table-row;
  height: calc(${ge.md} - 2px);
  line-height: calc(${ge.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:n})=>n.canvasText};
  &:hover {
    background: ${({theme:n})=>n.hoverBackground};
    color: ${({theme:n})=>n.canvasTextInvert};
  }
`,M1=z.forwardRef(function({children:o,...c},r){return N.createElement(C1,{ref:r,...c},o)});M1.displayName="TableRow";const N1=X.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,_1=X(dl)`
  &:before {
    box-shadow: none;
  }
`,j1=z.forwardRef(({children:n,...o},c)=>N.createElement(_1,null,N.createElement(N1,{ref:c,...o},n)));j1.displayName="Table";const B1=X.button`
  ${el()}
  ${Wt()}
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
    ${Cn}
    outline-offset: -6px;
  }
  ${n=>n.selected&&`
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
    background: ${({theme:n})=>n.material};
    bottom: -4px;
    left: 2px;
  }
`,H1=z.forwardRef(({value:n,onClick:o,selected:c=!1,children:r,...d},p)=>N.createElement(B1,{"aria-selected":c,selected:c,onClick:v=>o==null?void 0:o(n,v),ref:p,role:"tab",...d},r));H1.displayName="Tab";const U1=X.div`
  ${el()}
  ${Wt()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,$1=z.forwardRef(({children:n,...o},c)=>N.createElement(U1,{ref:c,...o},n));$1.displayName="TabBody";const L1=X.div`
  position: relative;
  ${({isMultiRow:n,theme:o})=>n&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${o.borderDark};
  }
  `}
`,G1=X.div.attrs(()=>({"data-testid":"tab-row"}))`
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
`;function Y1(n,o){const c=[];for(let r=o;r>0;r-=1)c.push(n.splice(0,Math.ceil(n.length/r)));return c}const Q1=z.forwardRef(({value:n,onChange:o=Ma,children:c,rows:r=1,...d},p)=>{const v=z.useMemo(()=>{var T;const A=(T=N.Children.map(c,M=>{if(!N.isValidElement(M))return null;const G={selected:M.props.value===n,onClick:o};return N.cloneElement(M,G)}))!==null&&T!==void 0?T:[],y=Y1(A,r).map((M,G)=>({key:G,tabs:M})),R=y.findIndex(M=>M.tabs.some(G=>G.props.selected));return y.push(y.splice(R,1)[0]),y},[c,o,r,n]);return N.createElement(L1,{...d,isMultiRow:r>1,role:"tablist",ref:p},v.map(T=>N.createElement(G1,{key:T.key},T.tabs)))});Q1.displayName="Tabs";const q1=["blur","focus"],X1=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function Gp(n){return"nativeEvent"in n&&q1.includes(n.type)}function Yp(n){return"nativeEvent"in n&&X1.includes(n.type)}const V1={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},Z1=X.span`
  position: absolute;

  z-index: 1;
  display: ${n=>n.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:n})=>n.borderDarkest};
  background: ${({theme:n})=>n.tooltip};
  box-shadow: ${ms};
  text-align: center;
  font-size: 1rem;
  ${n=>V1[n.position]}
`,K1=X.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,J1=z.forwardRef(({className:n,children:o,disableFocusListener:c=!1,disableMouseListener:r=!1,enterDelay:d=1e3,leaveDelay:p=0,onBlur:v,onClose:T,onFocus:A,onMouseEnter:y,onMouseLeave:R,onOpen:M,style:G,text:et,position:I="top",...ut},P)=>{const[tt,lt]=z.useState(!1),[V,at]=z.useState(),[C,J]=z.useState(),Z=!c,xt=!r,vt=q=>{window.clearTimeout(V),window.clearTimeout(C);const it=window.setTimeout(()=>{lt(!0),M==null||M(q)},d);at(it)},Gt=q=>{q.persist(),Gp(q)?A==null||A(q):Yp(q)&&(y==null||y(q)),vt(q)},Mt=q=>{window.clearTimeout(V),window.clearTimeout(C);const it=window.setTimeout(()=>{lt(!1),T==null||T(q)},p);J(it)},bt=q=>{q.persist(),Gp(q)?v==null||v(q):Yp(q)&&(R==null||R(q)),Mt(q)},h=Z?bt:void 0,U=Z?Gt:void 0,K=xt?Gt:void 0,D=xt?bt:void 0,j=Z?0:void 0;return N.createElement(K1,{"data-testid":"tooltip-wrapper",onBlur:h,onFocus:U,onMouseEnter:K,onMouseLeave:D,tabIndex:j},N.createElement(Z1,{className:n,"data-testid":"tooltip",position:I,ref:P,show:tt,style:G,...ut},et),o)});J1.displayName="Tooltip";const us=X(xs)`
  white-space: nowrap;
`,Z0=ot`
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
`,W1=X.ul`
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
`,F1=X.li`
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
`,I1=X.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,P1=X.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:n})=>n.materialText};
  user-select: none;
  padding-left: 18px;
  ${Z0};

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
`,Qp=X(vs)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${Z0};
`,tx=X.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function qp(n,o){return n.includes(o)?n.filter(c=>c!==o):[...n,o]}function Xp(n){n.preventDefault()}function K0({className:n,disabled:o,expanded:c,innerRef:r,level:d,select:p,selected:v,style:T,tree:A=[]}){const y=d===0,R=z.useCallback(M=>{var G,et;const I=!!(M.items&&M.items.length>0),ut=c.includes(M.id),P=(G=o||M.disabled)!==null&&G!==void 0?G:!1,tt=P?Xp:C=>p(C,M),lt=P?Xp:C=>p(C,M),V=v===M.id,at=N.createElement(tx,{"aria-hidden":!0},M.icon);return N.createElement(F1,{key:M.label,isRootLevel:y,role:"treeitem","aria-expanded":ut,"aria-selected":V,hasItems:I},I?N.createElement(I1,{open:ut},N.createElement(P1,{onClick:tt,$disabled:P},N.createElement(Qp,{$disabled:P},at,N.createElement(us,null,M.label))),ut&&N.createElement(K0,{className:n,disabled:P,expanded:c,level:d+1,select:p,selected:v,style:T,tree:(et=M.items)!==null&&et!==void 0?et:[]})):N.createElement(Qp,{as:"button",$disabled:P,onClick:lt},at,N.createElement(us,null,M.label)))},[n,o,c,y,d,p,v,T]);return N.createElement(W1,{className:y?n:void 0,style:y?T:void 0,ref:y?r:void 0,role:y?"tree":"group",isRootLevel:y},A.map(R))}function ex({className:n,defaultExpanded:o=[],defaultSelected:c,disabled:r=!1,expanded:d,onNodeSelect:p,onNodeToggle:v,selected:T,style:A,tree:y=[]},R){const[M,G]=ua({defaultValue:o,onChange:v,onChangePropName:"onNodeToggle",value:d,valuePropName:"expanded"}),[et,I]=ua({defaultValue:c,onChange:p,onChangePropName:"onNodeSelect",value:T,valuePropName:"selected"}),ut=z.useCallback((lt,V)=>{if(v){const at=qp(M,V);v(lt,at)}G(at=>qp(at,V))},[M,v,G]),P=z.useCallback((lt,V)=>{I(V),p&&p(lt,V)},[p,I]),tt=z.useCallback((lt,V)=>{lt.preventDefault(),P(lt,V.id),V.items&&V.items.length&&ut(lt,V.id)},[P,ut]);return N.createElement(K0,{className:n,disabled:r,expanded:M,level:0,innerRef:R,select:tt,selected:et,style:A,tree:y})}const lx=z.forwardRef(ex);lx.displayName="TreeView";const ax="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAD/AP8A/6C9p5MAAAVLSURBVFjD7ZdbiFVlFMd/a+1znZvjXNJx8lLmkIbaSxkFEQXKZGT2YkQPUREW+RD03FMU9GaQQQm9FT1EkaVCISFRqOUlNQ1Myrk1XufMnNvMOftbPezLOXNmxkYhguiDfdjfPt/51n/9//+91nfg//EvD6mfFItFstms7v7ww7Xnh0c6fDCpWyQilnZOJ4sFm20z9TxLt7dTKk9K3cayuLPjyo7t209NTEy4tra22QGYWTRvfvHJrR/pT4c3dZmrFj2PcqWKYpiIpR58WDpWr8GcA5HgCsDhSiUb2LvHciMjKiqogDMSunLV/l0Hv3u6Awr5fJ7W1tYYQCK62blzJ+nm5rWH93zxRtuZUw/0Xx5JrRdSY2pc8sETqKowvrqPpVueAHOY71MdHsQvFrBsllRrO4N7Pyc/dolKmE1F4NBg6v5XH+1/79Z773st7enFegZiAENDQ0hLa3vq6JFHNl8bbRIVFEMBDRM1EZwozhz4Pp5zNL+/i9wP3zK09DYyr7/JqoxHNg0XfOGKQQnjnj8Hu04UipvPqvfL6nXr9t++dOnx8wMD0wEAGNAssCTt0eGMBb7jWhTcwgUh3YgggJTKuLEybmEe3zkSBosqsCABFRUGxRidhGJ+rCPx3YG3zuSu6ejAwPEZDNSDyCD0qGF+LaiGbnHOxWuds4AlA/MNcwHKrEAWwzkjoXBJhF4cU67CuakpJmeTIN7ULEjXrGZRi3HUDBt+f+WOPnL5AtVFPbSk0zVXO1CFhT6sVuMCwgCQEmgCxucCELGAhDcSBQ3uVSV8Yww8j+SzL9DpHF3qUapM4lykU3AJsAwQM46Fm+v1GFAk0NgkDq5SA2VVH6v6iDlAUNUg1YC+AFxUPFyYhNYknF55ZpMAi7MXYIlCd5i9c47Sns9IH/4hlCB0Z5i0b46m4cFaEK2xGOA1BLs+AEEQZxBS2Rp5zsKMfj0FZ05N88e0zLQhy/rnDhriz+YBC/kS8Ou8EG3SkNk0EMwxrwfydxIYoeHCUUYpexr8ThoWRlpb3TOtzdWg2fdRMYTQwA0IZjJgxO8zBu+K8oWXJOspZoYZeBpEjTaz2A9hazAwFRY4eNsvscJ8zAIFGgiYBUBY+ZwJJ53Q8uhmtmy4h0RIS8SOagL1PHzfDxoThqhizjGRz5G7No4W8/z41T66xq+GPauunM4FQCT4qGL8bMrdGx9jw3MvcCPj4uWL/HHhD/Lnz/PbgYNM5K4G4GXmWm18EMhqpDCeSvqs9+zv4s0Y3Z3d3NK9GKk6Hk9W6PGiYPWnizkAWHgEmRT42IRjpvMI2ciikEwk8EXZW00wKnVvZ0M+MwGEOnnAcoOFduMMRHE8fJZJhbRFR6t5eMAI+r6a0CcO9WReAWcHYXSLR5ODgoKLHH49BiKaphx8YnDSd/MM1xjdqJryTTXJ6FwFizlKMRgZjGcEVG5SAoOkObZ6ZRYDFw1kXhKYxZ2w06AiNyeBqJBMKl1iHHRwziWoJgDRaRBiAC0tLSRbmidPdt4y8CX+8ucLVzMtAmePHuLCgjbwHWaBHCIan4w07NWRUCJCJpNhaGSYgeNHmSqW+cZSDKeaqsnO1svZnt6ccgQzQ8JjHQD79u0jk05nToyM9p7dvWv3tmPfP7QMeEeTfCqCB8SnMYmP8UH3lLh5xiBMHEkHa6aMq05Ir1g5dOemjdvu6us7vePll8YiADED/f395HK58kNtbb+/cuDrXR8UCl+3m3ODqPX4KsH/gOkS1nfi2ZpjAigBHk7aenrGV/b2ni5OjI9FIGFmb/hHhjXUErlJX/03x19dE2bA1PxYJgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNS0wMS0yOVQxMTowMjowOSswMDowMEhEIm4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjUtMDEtMjlUMTE6MDI6MDkrMDA6MDA5GZrSAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI1LTAxLTI5VDExOjAyOjEwKzAwOjAwNz7+QAAAAABJRU5ErkJggg==",nx="/assets/power-Ch1zkzcl.png";var Zc,Vp;function ix(){if(Vp)return Zc;Vp=1;var n={name:"vistaesqueMidnight",anchor:"rgb(64, 64, 192)",anchorVisited:"rgb(64, 64, 192)",borderDark:"rgb(21, 21, 21)",borderDarkest:"rgb(0, 0, 0)",borderLight:"rgb(32, 32, 32)",borderLightest:"rgb(128, 128, 128)",canvas:"rgb(0, 0, 0)",canvasText:"rgb(255, 255, 255)",canvasTextDisabled:"rgb(21, 21, 21)",canvasTextDisabledShadow:"rgb(128, 128, 128)",canvasTextInvert:"rgb(255, 255, 255)",checkmark:"rgb(255, 255, 255)",checkmarkDisabled:"rgb(32, 32, 32)",desktopBackground:"rgb(31, 60, 89)",flatDark:"rgb(21, 21, 21)",flatLight:"rgb(32, 32, 32)",focusSecondary:"rgb(128, 128, 128)",headerBackground:"linear-gradient(to right, rgb(81, 132, 188), rgb(100, 168, 60))",headerNotActiveBackground:"linear-gradient(to right, rgb(22, 46, 101), rgb(18, 91, 30))",headerNotActiveText:"rgb(192, 192, 192)",headerText:"rgb(255, 255, 255)",hoverBackground:"rgb(49, 106, 197)",material:"rgb(32, 32, 32)",materialDark:"rgb(22, 46, 101)",materialText:"rgb(255, 255, 255)",materialTextDisabled:"rgb(21, 21, 21)",materialTextDisabledShadow:"rgb(128, 128, 128)",materialTextInvert:"rgb(255, 255, 255)",progress:"rgb(49, 106, 197)",tooltip:"rgb(0, 0, 30)"};return Zc=n,Zc}var ux=ix();const ox=cs(ux);(function(){var n,o=document.createElement("div");o.innerHTML="<div class=crt></div><div class=wb-header><div class=wb-control><span class=wb-min></span><span class=wb-max></span><span class=wb-full></span><span class=wb-close></span></div><div class=wb-drag><div class=wb-icon></div><div class=wb-title></div></div></div><div class=wb-body></div><div class=wb-n></div><div class=wb-s></div><div class=wb-w></div><div class=wb-e></div><div class=wb-nw></div><div class=wb-ne></div><div class=wb-se></div><div class=wb-sw></div></div>";function c(h,U,K,D){h&&h.addEventListener(U,K,D||!1)}function r(h,U){var K=window,D=y;K&&K.removeEventListener(h,U,D||!1)}function d(h,U){h.stopPropagation(),U&&h.preventDefault()}function p(h,U,K){K=""+K,h["_s_"+U]!==K&&(h.style.setProperty(U,K),h["_s_"+U]=K)}var v=[],T=[],A={capture:!0,passive:!1},y={capture:!0,passive:!0},R,M=0,G=10,et,I,ut,P,tt,lt;function V(h,U){if(!(this instanceof V))return new V(h);if(R||C(),h){if(U){var K=h;h=U}if(typeof h=="string")K=h;else{var D=h.id,j=h.index,q=h.root,it=h.template;K=K||h.title;var g=h.icon,B=h.mount,W=h.html,_=h.url,Q=h.width,nt=h.height,F=h.minwidth,ct=h.minheight,ft=h.maxwidth,Y=h.maxheight,gt=h.autosize,dt=h.overflow,yt=h.min,kt=h.max,_t=h.hidden,Qt=h.modal,le=h.x||(Qt?"center":0),qt=h.y||(Qt?"center":0),me=h.top,ie=h.left,He=h.bottom,we=h.right,ll=h.background,Ue=h.border,Cl=h.header,Na=h.class,Ml=h.oncreate,xe=h.onclose,al=h.onfocus,Ae=h.onblur,Ao=h.onmove,So=h.onresize,wo=h.onfullscreen,_a=h.onmaximize,ja=h.onminimize,hl=h.onrestore,Ba=h.onhide,oa=h.onshow,Eo=h.onload}}this.g=(it||o).cloneNode(!0),this.g.id=this.id=D||"winbox-"+ ++M,this.g.className="winbox"+(Na?" "+(typeof Na=="string"?Na:Na.join(" ")):"")+(Qt?" modal":""),this.g.winbox=this,this.window=this.g,this.body=this.g.getElementsByClassName("wb-body")[0],this.h=Cl||35,T.push(this),ll&&this.setBackground(ll),Ue?p(this.body,"margin",Ue+(isNaN(Ue)?"":"px")):Ue=0,Cl&&(U=this.g.getElementsByClassName("wb-header")[0],p(U,"height",Cl+"px"),p(U,"line-height",Cl+"px"),p(this.body,"top",Cl+"px")),K&&this.setTitle(K),g&&this.setIcon(g),B?this.mount(B):W?this.body.innerHTML=W:_&&this.setUrl(_,Eo),me=me?at(me,tt):0,He=He?at(He,tt):0,ie=ie?at(ie,P):0,we=we?at(we,P):0,K=P-ie-we,g=tt-me-He,ft=ft?at(ft,K):K,Y=Y?at(Y,g):g,F=F?at(F,ft):150,ct=ct?at(ct,Y):this.h,gt?((q||R).appendChild(this.body),Q=Math.max(Math.min(this.body.clientWidth+2*Ue+1,ft),F),nt=Math.max(Math.min(this.body.clientHeight+this.h+Ue+1,Y),ct),this.g.appendChild(this.body)):(Q=Q?at(Q,ft):Math.max(ft/2,F)|0,nt=nt?at(nt,Y):Math.max(Y/2,ct)|0),le=le?at(le,K,Q):ie,qt=qt?at(qt,g,nt):me,this.x=le,this.y=qt,this.width=Q,this.height=nt,this.s=F,this.o=ct,this.m=ft,this.l=Y,this.top=me,this.right=we,this.bottom=He,this.left=ie,this.index=j,this.j=dt,this.focused=this.hidden=this.full=this.max=this.min=!1,this.onclose=xe,this.onfocus=al,this.onblur=Ae,this.onmove=Ao,this.onresize=So,this.onfullscreen=wo,this.onmaximize=_a,this.onminimize=ja,this.onrestore=hl,this.onhide=Ba,this.onshow=oa,_t?this.hide():this.focus(),(j||j===0)&&(this.index=j,p(this.g,"z-index",j),j>G&&(G=j)),kt?this.maximize():yt?this.minimize():this.resize().move(),J(this),(q||R).appendChild(this.g),Ml&&Ml.call(this,h)}V.new=function(h){return new V(h)},V.stack=function(){return T};function at(h,U,K){return typeof h=="string"&&(h==="center"?h=(U-K)/2+.5|0:h==="right"||h==="bottom"?h=U-K:(K=parseFloat(h),h=(""+K!==h&&h.substring((""+K).length))==="%"?U/100*K+.5|0:K)),h}function C(){R=document.body,R[I="requestFullscreen"]||R[I="msRequestFullscreen"]||R[I="webkitRequestFullscreen"]||R[I="mozRequestFullscreen"]||(I=""),ut=I&&I.replace("request","exit").replace("mozRequest","mozCancel").replace("Request","Exit"),c(window,"resize",function(){Gt(),xt()}),c(R,"mousedown",function(){lt=!1},!0),c(R,"mousedown",function(){if(!lt){var h=T.length;if(h)for(--h;0<=h;h--){var U=T[h];if(U.focused){U.blur();break}}}}),Gt()}function J(h){vt(h,"drag"),vt(h,"n"),vt(h,"s"),vt(h,"w"),vt(h,"e"),vt(h,"nw"),vt(h,"ne"),vt(h,"se"),vt(h,"sw"),c(h.g.getElementsByClassName("wb-min")[0],"click",function(U){d(U),h.min?h.restore().focus():h.minimize()}),c(h.g.getElementsByClassName("wb-max")[0],"click",function(U){d(U),h.max?h.restore().focus():h.maximize().focus()}),I?c(h.g.getElementsByClassName("wb-full")[0],"click",function(U){d(U),h.fullscreen().focus()}):h.addClass("no-full"),c(h.g.getElementsByClassName("wb-close")[0],"click",function(U){d(U),h.close()||(h=null)}),c(h.g,"mousedown",function(){lt=!0},!0),c(h.body,"mousedown",function(){h.focus()},!0)}function Z(h){v.splice(v.indexOf(h),1),xt(),h.removeClass("min"),h.min=!1,h.g.title=""}function xt(){for(var h=v.length,U={},K={},D=0,j;D<h;D++)j=v[D],j=j.left+":"+j.top,K[j]?K[j]++:(U[j]=0,K[j]=1);D=0;for(var q,it;D<h;D++)j=v[D],q=j.left+":"+j.top,it=Math.min((P-j.left-j.right)/K[q],250),j.resize(it+1|0,j.h,!0).move(j.left+U[q]*it|0,tt-j.bottom-j.h,!0),U[q]++}function vt(h,U){function K(_){if(d(_,!0),h.focus(),U==="drag"){if(h.min){h.restore();return}if(!h.g.classList.contains("no-max")){var Q=Date.now(),nt=Q-W;if(W=Q,300>nt){h.max?h.restore():h.maximize();return}}}h.min||(R.classList.add("wb-lock"),(it=_.touches)&&(it=it[0])?(_=it,c(window,"touchmove",D,y),c(window,"touchend",j,y)):(c(window,"mousemove",D,y),c(window,"mouseup",j,y)),g=_.pageX,B=_.pageY)}function D(_){d(_),it&&(_=_.touches[0]);var Q=_.pageX;_=_.pageY;var nt=Q-g,F=_-B,ct=h.width,ft=h.height,Y=h.x,gt=h.y,dt;if(U==="drag"){if(h.g.classList.contains("no-move"))return;h.x+=nt,h.y+=F;var yt=dt=1}else{if(U==="e"||U==="se"||U==="ne"){h.width+=nt;var kt=1}else(U==="w"||U==="sw"||U==="nw")&&(h.x+=nt,h.width-=nt,yt=kt=1);if(U==="s"||U==="se"||U==="sw"){h.height+=F;var _t=1}else(U==="n"||U==="ne"||U==="nw")&&(h.y+=F,h.height-=F,dt=_t=1)}kt&&(h.width=Math.max(Math.min(h.width,h.m,P-h.x-h.right),h.s),kt=h.width!==ct),_t&&(h.height=Math.max(Math.min(h.height,h.l,tt-h.y-h.bottom),h.o),_t=h.height!==ft),(kt||_t)&&h.resize(),yt&&(h.max&&(h.x=(Q<P/3?h.left:Q>P/3*2?P-h.width-h.right:P/2-h.width/2)+nt),h.x=Math.max(Math.min(h.x,h.j?P-30:P-h.width-h.right),h.j?30-h.width:h.left),yt=h.x!==Y),dt&&(h.max&&(h.y=h.top+F),h.y=Math.max(Math.min(h.y,h.j?tt-h.h:tt-h.height-h.bottom),h.top),dt=h.y!==gt),(yt||dt)&&(h.max&&h.restore(),h.move()),(kt||yt)&&(g=Q),(_t||dt)&&(B=_)}function j(_){d(_),R.classList.remove("wb-lock"),it?(r("touchmove",D),r("touchend",j)):(r("mousemove",D),r("mouseup",j))}var q=h.g.getElementsByClassName("wb-"+U)[0];if(q){var it,g,B,W=0;c(q,"mousedown",K,A),c(q,"touchstart",K,A)}}function Gt(){var h=document.documentElement;P=h.clientWidth,tt=h.clientHeight}n=V.prototype,n.mount=function(h){return this.unmount(),h.i||(h.i=h.parentNode),this.body.textContent="",this.body.appendChild(h),this},n.unmount=function(h){var U=this.body.firstChild;if(U){var K=h||U.i;K&&K.appendChild(U),U.i=h}return this},n.setTitle=function(h){var U=this.g.getElementsByClassName("wb-title")[0];h=this.title=h;var K=U.firstChild;return K?K.nodeValue=h:U.textContent=h,this},n.setIcon=function(h){var U=this.g.getElementsByClassName("wb-icon")[0];return p(U,"background-image","url("+h+")"),p(U,"display","inline-block"),this},n.setBackground=function(h){return p(this.g,"background",h),this},n.setUrl=function(h,U){var K=this.body.firstChild;return K&&K.tagName.toLowerCase()==="iframe"?K.src=h:(this.body.innerHTML='<iframe src="'+h+'"></iframe>',U&&(this.body.firstChild.onload=U)),this},n.focus=function(h){if(h===!1)return this.blur();if(!this.focused){if(h=T.length,1<h)for(var U=1;U<=h;U++){var K=T[h-U];if(K.focused){K.blur(),T.push(T.splice(T.indexOf(this),1)[0]);break}}p(this.g,"z-index",++G),this.index=G,this.addClass("focus"),this.focused=!0,this.onfocus&&this.onfocus()}return this},n.blur=function(h){return h===!1?this.focus():(this.focused&&(this.removeClass("focus"),this.focused=!1,this.onblur&&this.onblur()),this)},n.hide=function(h){if(h===!1)return this.show();if(!this.hidden)return this.onhide&&this.onhide(),this.hidden=!0,this.addClass("hide")},n.show=function(h){if(h===!1)return this.hide();if(this.hidden)return this.onshow&&this.onshow(),this.hidden=!1,this.removeClass("hide")},n.minimize=function(h){return h===!1?this.restore():(et&&bt(),this.max&&(this.removeClass("max"),this.max=!1),this.min||(v.push(this),xt(),this.g.title=this.title,this.addClass("min"),this.min=!0,this.focused&&(this.blur(),Mt()),this.onminimize&&this.onminimize()),this)};function Mt(){var h=T.length;if(h)for(--h;0<=h;h--){var U=T[h];if(!U.min){U.focus();break}}}n.restore=function(){return et&&bt(),this.min&&(Z(this),this.resize().move(),this.onrestore&&this.onrestore()),this.max&&(this.max=!1,this.removeClass("max").resize().move(),this.onrestore&&this.onrestore()),this},n.maximize=function(h){return h===!1?this.restore():(et&&bt(),this.min&&Z(this),this.max||(this.addClass("max").resize(P-this.left-this.right,tt-this.top-this.bottom,!0).move(this.left,this.top,!0),this.max=!0,this.onmaximize&&this.onmaximize()),this)},n.fullscreen=function(h){if(this.min&&(Z(this),this.resize().move()),!et||!bt())this.body[I](),et=this,this.full=!0,this.onfullscreen&&this.onfullscreen();else if(h===!1)return this.restore();return this};function bt(){if(et.full=!1,document.fullscreen||document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)return document[ut](),!0}n.close=function(h){if(this.onclose&&this.onclose(h))return!0;this.min&&Z(this),T.splice(T.indexOf(this),1),this.unmount(),this.g.remove(),this.g.textContent="",this.g=this.body=this.g.winbox=null,this.focused&&Mt()},n.move=function(h,U,K){return h||h===0?K||(this.x=h?h=at(h,P-this.left-this.right,this.width):0,this.y=U?U=at(U,tt-this.top-this.bottom,this.height):0):(h=this.x,U=this.y),p(this.g,"left",h+"px"),p(this.g,"top",U+"px"),this.onmove&&this.onmove(h,U),this},n.resize=function(h,U,K){return h||h===0?K||(this.width=h?h=at(h,this.m):0,this.height=U?U=at(U,this.l):0,h=Math.max(h,this.s),U=Math.max(U,this.o)):(h=this.width,U=this.height),p(this.g,"width",h+"px"),p(this.g,"height",U+"px"),this.onresize&&this.onresize(h,U),this},n.addControl=function(h){var U=h.class,K=h.image,D=h.click;h=h.index;var j=document.createElement("span"),q=this.g.getElementsByClassName("wb-control")[0],it=this;return U&&(j.className=U),K&&p(j,"background-image","url("+K+")"),D&&(j.onclick=function(g){D.call(this,g,it)}),q.insertBefore(j,q.childNodes[h||0]),this},n.removeControl=function(h){return(h=this.g.getElementsByClassName(h)[0])&&h.remove(),this},n.addClass=function(h){return this.g.classList.add(h),this},n.removeClass=function(h){return this.g.classList.remove(h),this},n.toggleClass=function(h){return this.g.classList.contains(h)?this.removeClass(h):this.addClass(h)},window.WinBox=V}).call(void 0);const cl=WinBox,rx="/assets/monitor-CmERaNKN.gif",cx=()=>{const[n,o]=z.useState(0),c=z.useRef(null);return z.useEffect(()=>{let r=setTimeout(()=>{let d=Date.now();c.current=setInterval(()=>{const p=Date.now()-d,v=Math.min(p/4400*100,100);o(v),v===100&&(clearInterval(c.current),setTimeout(()=>o(100),500))},30)},300);return()=>{clearTimeout(r),clearInterval(c.current)}},[]),b.jsx("div",{className:"loading",children:b.jsxs("div",{className:"loading_elements",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[b.jsx("img",{src:rx,className:"monitor",alt:"~X:/WEBSITE/ > BOOTING UP..."}),b.jsx("br",{}),b.jsx("div",{className:"loading-bar-container",style:{width:240,height:18,background:"#222",borderRadius:1,overflow:"hidden",marginTop:24,border:"6px solid #000",boxShadow:"0 0 0 2px white"},children:b.jsx("div",{className:"loading-bar",style:{display:"flex",margin:0,width:`${n}%`,height:"100%",background:`repeating-linear-gradient(
        90deg,
        #fff 0,
        #fff 20px,
        #000 20px,
        #000 32px
      )`,transition:"width 0.1s linear"}})})]})})},sx="/assets/desktop_about-BSolwGv2.png",fx="/assets/desktop_contact-CzjDK447.png",dx="/assets/desktop_donate-DvEemoyz.png",hx="/assets/desktop_gallery-BrU31pCN.png",px="/assets/desktop_videos-CZQy56j_.png",gx="/assets/desktop-about-5UQNFmge.gif",mx="/assets/desktop-contact-BZXH_09O.gif",bx="/assets/desktop-donate-DQ3hbULG.gif",yx="/assets/desktop-gallery-BBDxh9IK.gif",vx="/assets/desktop-videos-sxat4MtT.gif",xx="/assets/steam-dEuQyfPr.png",Ax="/assets/money-spin-BlzhA9B2.gif",Sx="/assets/cashapp-Cjq2UZZq.png",wx="/assets/paypal-Dx-0PIKQ.png",Ex="/assets/tornada-BnYzoTfG.png",Tx="/assets/notepad-BzPf8E6H.png",Dx="/assets/info-BTKMA8dZ.png",Rx="/assets/blog-D4q87bQu.png",kx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAAQMAAADOtka5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAADUExURQAm/0mmUXMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA2SURBVHja7cEBAQAAAIIg/69uSEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwbggAAAWN1UKQAAAAASUVORK5CYII=",Ox="/assets/youtube-Bp2k9DZd.png",zx="/assets/xitter-DLEKJHi9.png",Cx="/assets/instagram-BF4FSZOC.png",Mx="/assets/newgrounds-CgzA7QG0.png",Nx="/assets/reddit-CRfYQcex.png",_x="/assets/facebook-BO--MLYP.png",Rt={desktop_about:sx,desktop_contact:fx,desktop_donate:dx,desktop_gallery:hx,desktop_videos:px,desktop_about_gif:gx,desktop_contact_gif:mx,desktop_gallery_gif:yx,desktop_donate_gif:bx,desktop_videos_gif:vx,tornada:Ex,notepad:Tx,info:Dx,pager:kx,blog:Rx,youtube:Ox,xitter:zx,instagram:Cx,newgrounds:Mx,reddit:Nx,facebook:_x,steam:xx,cashapp:Sx,paypal:wx,moneyspin:Ax},jx="/assets/BG-DNG1OH_1.gif",Bx="/assets/BG2-afUp6XXV.gif",Hx="/assets/BG3-D3gry5fr.gif",Ux="/assets/BG4-niHp1bdb.gif",$x="/assets/BG5-3b4TfM3X.gif",Lx="/assets/BG6-B2XIkXXV.gif",Tn={background1:jx,background2:Bx,background3:Hx,background4:Ux,background5:$x,background6:Lx},Gx="/assets/aboutem-COgL9iQm.gif",Zp=["jack of all trades, master at some","self-driven creative powerhouse","big boy with small dreams","just a guy tbh","nothing but a wizard","you're doing a great job!","set the scene. 86 degrees.","5'10, stand on my money now I'm 5'6"],J0=Zp[Math.floor(Math.random()*Zp.length)];console.log("ECKS - ",J0);const Yx=()=>b.jsx(b.Fragment,{children:b.jsxs("div",{style:{width:"100%",height:"100%",padding:0,margin:0},children:[b.jsxs("div",{className:"about-me",children:[b.jsx("span",{className:"about-header",children:" SYSTEM > ABOUT"}),b.jsx("div",{className:"about-split"}),b.jsxs("div",{className:"about-content",children:[b.jsxs("span",{className:"about-tagline",style:{display:"flex",alignItems:"center"},children:[b.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[b.jsx("span",{className:"ECKS-NAME",children:"ECKS!"}),b.jsxs("span",{className:"about-quote",style:{marginTop:2},children:['"',J0,'"']})]}),b.jsx("img",{src:Gx,alt:"ECKS",className:"about-image",style:{right:0,marginLeft:60,maxWidth:172,alignSelf:"flex-start"}})]}),b.jsx("div",{className:"about-split"}),b.jsx("p",{className:"about-bio",style:{width:"95%"},children:"Nice to meet ya! I am a self-taught creative who finds retreat in curiously throwing things together in their free time. Over the last several years I have worked on various projects with my experiences in video editing, graphic design, VFX, and occasionally making music here and there."}),b.jsx("p",{className:"about-bio",style:{width:"95%"},children:"This site aims to be an archive of some of my best scraps, loosely stitched together in a way that can at least be presentable. Everything seen on here was formed from a collection of flickering synapses and contempt for predictability."}),b.jsxs("p",{className:"about-bio",style:{width:"95%"},children:["Some of my other work can be found at ",b.jsx("a",{href:"https://tornada.net",target:"_blank",children:b.jsx("span",{className:"bigdeal",children:"Tornada"})})," - an animation supergroup with an all-star lineup of me and my relatives."]}),b.jsx("p",{className:"about-bio",style:{width:"95%"},children:"At the end of the day, I simply just create the stuff that I wish to see and experience. To me that's the only compass that really makes sense."}),b.jsxs("p",{className:"about-bio",style:{width:"95%"},children:["Anyone hoping to get in touch (or just say hi) can reach me at ",b.jsx("a",{href:"mailto:spam@3cks.net",target:"_blank",rel:"noopener noreferrer",children:b.jsx("span",{className:"bigdeal",children:"spam@3cks.net"})})," or via the links listed on here. I'm open to work and/or whatever questions you may have."]})]})]}),b.jsx("span",{className:"bottom-tag",style:{marginTop:24,fontFamily:"Sans Nouveaux",fontSize:"8px"},children:"- 🅮 ECKS 2025 -"})]})}),Qx="/assets/Featured-VHS-Bk_2dzNq.gif",zi=[{title:"THE COLOR BROTHERS",description:"Four colorful boys and their dad.",featuring:"ColeDawg",featuring_link:"https://www.instagram.com/coledawg2001/"}],os=[{id:0,title:"BAKLAFA",window_title:"BAKLAVA-IS-FUCKING-AWESOME",alt_title:"BAKLAVA is FUCKING AWESOME",url:"https://iframe.mediadelivery.net/embed/393622/72c5d760-6c3d-4f7f-b01f-4c0586212526?autoplay=true&loop=false&muted=false&preload=true&responsive=true",source:"https://3cks.net/watch/baklava-is-fucking-awesome",date:"06-2025",description:`Fresh hot two-pack of some commissions I did in June 2025... 
 First one is a promo video for @ciorecords’ BAKLAVA mixtape. Second one is for an artist named FuckingAwesome who wanted something more specific (quick and flashy with clips from Persona 3, L4D2, Panty n Stocking, and Dexter) and I was happy to oblige with both.`,thumbnail:"https://3cks.b-cdn.net/thumbnails/baklafa.jpg",isYouTube:!1},{id:1,title:"THE COLOR BROTHERS",window_title:"THE-COLOR-BROTHERS",alt_title:"COLOR BROTHERS",url:"https://iframe.mediadelivery.net/embed/393622/b01f3be6-5a68-445e-9a39-a4f59d2ec845?autoplay=true&loop=false&muted=false&preload=true&responsive=true",source:"https://www.youtube.com/watch?v=KAqmREHqTmg",date:"03-23-2025",description:" Segment I did for Tornada’s “Four of a Kind.” This one was a long time in the making. We had already been trading around this idea for years before being blessed with the time and energy to shoot it. Many strings were pulled in one week but it led to some of the most fun I’ve ever had putting something together. We got plenty of B-Roll (of us asking people in public for happy meals) that I wanna put up eventually.",thumbnail:"https://3cks.b-cdn.net/thumbnails/colorbros.jpg",isYouTube:!1},{id:2,title:"HOT THEM SUMMER!",window_title:"HOT-THEM-SUMMER",alt_title:"HOT THEM SUMMER!",url:"https://iframe.mediadelivery.net/embed/393622/2acc6b72-6566-40f0-abb7-b2716fbc272d?autoplay=true&loop=false&muted=false&preload=true&responsive=true",source:"https://3cks.net/watch/hot-them-summer",date:"11-24-2022",description:"Lyric video I did for my homegirl Lambs. Threw this together in about a day, just in time for the album she had just released back then. Peace to bluvelv who is on the song as well.",thumbnail:"https://3cks.b-cdn.net/thumbnails/lambs.jpg",isYouTube:!1},{id:3,title:"KNOWLEDGEGOD!",window_title:"KNOWLEDGE-GOD",alt_title:"KNOWLEDEGOD!",url:"https://iframe.mediadelivery.net/embed/393622/5d9bc1aa-9bc8-42f8-bce1-931d46f8ba8c?autoplay=true&loop=false&muted=false&preload=true&responsive=true",source:"https://www.youtube.com/watch?v=sziewA2jzEY",date:"12-31-2022",description:'Segment I did for Tornada’s "Two of a Kind." Was asked to do a music video and this is what I sent back. You can prolly tell it was my first time datamoshing.',thumbnail:"https://3cks.b-cdn.net/thumbnails/knowledgegod.jpg",isYouTube:!1},{id:4,title:"RIDETOSEVENELEVEN",window_title:"MC-RIDE-GOES-TO-THE-STORE",alt_title:"MC RIDE GOES TO THE STORE",url:"https://www.youtube.com/embed/DKDvPdll1D4",source:"https://youtu.be/DKDvPdll1D4",date:"11-24-2019",description:"A fan favorite? Not sure. Made this in 20 minutes on a Sunday and still get asked about it.",thumbnail:"https://3cks.b-cdn.net/thumbnails/ride.jpg",isYouTube:!0},{id:5,title:"FED UP! (IN VR)",window_title:"FED-UP-IN-VR",alt_title:"FEDUP!INVR!",url:"https://www.youtube.com/embed/9m8US6X9gWs",source:"https://www.youtube.com/watch?v=9m8US6X9gWs",date:"08-31-2021",description:"This was one of my first times making money off editing. Threw this one together for Joy Way, the team behind the game being played. They used this video for promo and I was explicitly told to avoid using copyrighted music, but thankfully artist Bazanji came through with a plate of dense, royalty-free raps. Not my usual preferences but at least the client was happy. Honestly besides this I could NOT tell you the last time I played a VR game.",thumbnail:"https://3cks.b-cdn.net/thumbnails/stride.jpg",isYouTube:!0},{id:6,title:"CHOPPA WEDNESDAY!",window_title:"CHOPPA-WEDNESDAY",alt_title:"CHOPPA WEDNESDAY",url:"https://www.youtube.com/embed/G6ik_SLRulQ",source:"https://www.youtube.com/watch?v=G6ik_SLRulQ",date:"10-07-2020",description:"Got really into Team Fortress 2 (and Atlanta trap) during this era and made a few videos like this. I think they all look rougher around the edges now but this one is still my favorite. Was planning to do make 2-3 more but my SFM stopped working lol",thumbnail:"https://3cks.b-cdn.net/thumbnails/choppa.jpg",isYouTube:!0},{id:7,title:"BALD! (TF2)",window_title:"BALD",alt_title:"BALD! (TF2)",url:"https://www.youtube.com/embed/K3XvXyNBrHA",source:"https://www.youtube.com/watch?v=K3XvXyNBrHA",date:"06-10-2020",description:"This one came to me in a dream. It would ultimately serve as the beginning of a short series that kept me occupied during a weird time in my life. Most of my days were being eaten up by stress that I would channel into learning Source Filmmaker in the only way I knew how: by making quick lil videos that were asking to get several effects thrown on in post. Wouldn’t say it’s anywhere near my best work nowadays but I got some fond memories and met some cool people through it. Shoutout to anyone who remembers when I would promote this on TF2 trading sites.",thumbnail:"https://3cks.b-cdn.net/thumbnails/bald.jpg",isYouTube:!0},{id:8,title:"SAGGY AND SOGGY",window_title:"SAGGY-AND-SOGGY",alt_title:"SAGGY AND SOGGY - SODIUM CONNECTIONS",url:"https://www.youtube.com/embed/RnXMoazSLo4",source:"https://www.youtube.com/watch?vRnXMoazSLo4",date:"05-15-2020",description:'This one’s pretty old but still means a lot to me. Originally wrote the first draft of the script for this in 2018 after a PlayStation party with a friend. We were discussing what a funny name for a kids cartoon would be and landed on "Saggy and Soggy." That name stuck with me and would come up the next time I was in my studio. I wanted to write something I wasn’t used to, which at the time, was a cartoon longer than 30 seconds. Looking at it now, my writing was debatably as goofy as it is now, but for different reasons. While I was tryna get this up on the site, I came across the first draft again and was surprised at what got cut out. Mostly just random lines like Saggy saying "God and his son, Curious George" along with even having cutaway gags in the mix at some point. At the perfect time, Tornada just so happened to form, and after a few months, fellow videomaster and partner-in-crime Pity Fowl offered to take over. He showed (and has continued to show) a lotta love to this project, honestly more than what I had originally. That’s what ultimately led to his extended involvement: he wrote the second half of the script and ended up animating most of it. From my end, I offered a music video segment which was my first time using After Effects if you could not already tell..',thumbnail:"https://3cks.b-cdn.net/thumbnails/sagsog.jpg",isYouTube:!0},{id:9,title:"RIDETOSEVENELEVEN",window_title:"RIDETOSEVENELEVEN",alt_title:"MC RIDE GOES TO THE STORE",url:"https://www.youtube.com/embed/DKDvPdll1D4",source:"https://youtu.be/DKDvPdll1D4",date:"11-24-2019",description:"A fan favorite? Not sure. Made this in 20 minutes on a Sunday and still get asked about it.",thumbnail:"https://3cks.b-cdn.net/thumbnails/ride.jpg",isYouTube:!0}];function rs(n){const o=document.createElement("div");new cl({title:`~/X/VIDEOS/${n.window_title}`,icon:Rt.desktop_videos,width:Math.min(500,window.innerWidth*.9)+"px",height:Vx(),x:"center",y:"center",background:"#000",mount:o,setBackground:c=>console.log(`Background set to ${c}`),onClose:()=>{o.remove()}}),o.innerHTML=`
  <div>
  <div style="position:relative; padding-top:56.25%; border-bottom: 2px solid #FDFDFD"><iframe src="${n.url}" loading="lazy" style="border:0;position:absolute;top:0;height:100%;width:100%;"></iframe></div>
  </div>
  <div class="video-description" style="padding: 1em; border-top: 4px ridge #222; line-height: 1; background: linear-gradient(0deg,rgb(62, 62, 62) 0%, rgb(16, 16, 16) 86%); width:text-align: center;">
  <h2 style="color: #FDFDFD; margin: 0.3em 0;">${n.alt_title}</h2>
  ${n.date} - <a href="${n.source}" target="_blank" style="color:rgb(255, 0, 0); text-decoration: none; font-size: 14px; margin-top: 10px;">Watch Original Here</a>
  <button id="share-btn" class="share-btn" style="margin-left:10px;background:#222;color:#fff;border:'2px rigid #222';padding:2px 10px;border-radius:4px;cursor:pointer;font-size:13px;">Share</button>
  <p style="color: #FDFDFD; margin-top: 24px; white-space: pre-wrap; font-size: 16px; font-weight: bold;">Description / Notes:</p>
  <div class="description-border" style="font-size: 10pt;padding: 6px; line-height: 1.25em; background-color:rgba(0, 0, 0, 0.4); border: 2px solid #FDFDFD;">
  ${n.description}
  </div>
  </div>
  `,setTimeout(()=>{const c=o.querySelector("#share-btn");c&&c.addEventListener("click",()=>{const r=`https://3cks.net/watch/${n.window_title.toLowerCase()}`;if(navigator.share)navigator.share({title:n.title,url:r});else{const d=document.createElement("div");new cl({title:"~X/SHARE/",icon:Rt.blog,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",width:"375px",height:"215px",x:"center",y:"center",mount:d,setBackground:p=>console.log(`Background set to ${p}`),onClose:()=>{console.log("Window closed"),d.remove()}}),d.innerHTML=`
            <div style="padding: 24px; text-align: center; background: linear-gradient(0deg,rgb(33, 33, 33) 0%, rgb(12, 12, 12) 86%); width:text-align: center;">
              <div style="display: flex; align-items: center; gap: 10px; margin: 4px 0 16px 0; justify-content: center;">
<div style="display: flex; align-items: flex-end; gap: 32px; margin: 4px 0 16px 0; justify-content: center;font-family:'Pixeloid Sans';">
<div class="share-icon" style="display: flex; flex-direction: column; align-items: center;">
  <a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(r)}" target="_blank" title="Share on Twitter" style="display:inline-block;">
    <img src="${Rt.xitter}" alt="Twitter/X" style="width:33px;height:33px;margin-bottom:8px;" />
  <span style="color:#fdfdfd; font-size:14px;">Xitter</span>
      </a>
</div>
<div class="share-icon" style="display: flex; flex-direction: column; align-items: center;">
  <a href="https://www.reddit.com/submit?url=${encodeURIComponent(r)}" target="_blank" title="Share on Facebook" style="display:inline-block;">
    <img src="${Rt.reddit}" alt="Reddit" style="width:33px;height:33px;margin-bottom:8px;" />

  <span style="color:#fdfdfd; font-size:14px;">Reddit</span>
      </a>
</div>
<div class="share-icon" style="display: flex; flex-direction: column; align-items: center;">
  <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(r)}" target="_blank" title="Share on Reddit" style="display:inline-block;">
    <img src="${Rt.facebook}" alt="Facebook" style="width:33px;height:33px;margin-bottom:8px;" />

  <span style="color:#fdfdfd; font-size:14px;">Facebook</span>
      </a>
</div>
<div class="share-icon" style="display: flex; flex-direction: column; align-items: center;">
    <a href="mailto:?subject=Check%20this%20video&body=${encodeURIComponent(r)}" title="Share via Email" style="display:inline-block;">
    <img src="${Rt.desktop_contact}" alt="Email" style="width:33px;height:33px;margin-bottom:8px;" />

  <span style="color:#fdfdfd; font-size:14px;">Email</span>
      </a>
</div>
</div>
</div>

<div style="display: flex; align-items: center; justify-content: center; gap: 2px; margin-bottom: 16px;">
<input type="text" value="${r}" readonly style="width: 70%; background:#fdfdfd;color:#222; padding: 8px; font-size: 12px;font-family:'Pixeloid Sans';"/>
                <button id="copy-share-link" class="share-btn" style="background:#fdfdfd;color:#0d0d0d;border:'2px rigid #0d0d0d';padding:6px 18px;cursor:pointer;font-size:15px;font-family:'Pixeloid Sans';">Copy</button>
              </div>
              <br/>
              <span style="font-size:9px;color:#fdfdfd;font-family:'Sans Nouveaux'">- spread the luh -</span>
            </div>
            </div>
          `,setTimeout(()=>{const p=d.querySelector("#copy-share-link");p&&p.addEventListener("click",()=>{navigator.clipboard.writeText(r),p.textContent="Copied!",setTimeout(()=>p.textContent="Copy",1200)})},0)}})},0)}const qx=b.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",style:{marginLeft:4,verticalAlign:"middle"},children:b.jsx("path",{fill:"#FF0000",d:"M21.8 8.001a2.75 2.75 0 0 0-1.94-1.94C18.19 6 12 6 12 6s-6.19 0-7.86.061a2.75 2.75 0 0 0-1.94 1.94A28.6 28.6 0 0 0 2 12a28.6 28.6 0 0 0 .2 3.999 2.75 2.75 0 0 0 1.94 1.94C5.81 18 12 18 12 18s6.19 0 7.86-.061a2.75 2.75 0 0 0 1.94-1.94A28.6 28.6 0 0 0 22 12a28.6 28.6 0 0 0-.2-3.999zM10 15V9l5 3-5 3z"})}),Xx=b.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",style:{marginLeft:4,verticalAlign:"middle"},children:b.jsx("path",{fill:"#888",d:"M10 17l5-5-5-5v10z"})}),Vx=()=>window.innerWidth<768?"60%":"400px",Zx=()=>b.jsxs(b.Fragment,{children:[b.jsxs("div",{className:"videos-header",style:{color:"#FDFDFD",fontSize:24,margin:0,overflowX:"visible",overflowY:"hidden",display:"flex",marginTop:-8,whiteSpace:"nowrap",marginBottom:16},children:[b.jsxs("div",{style:{fontFamily:"Pixeloid Sans",flexDirection:"column",display:"flex",minWidth:128,borderBottom:"2px solid black",width:"40%",paddingRight:30},children:[b.jsx("p",{className:"videos-header-title",style:{width:"100px",fontFamily:"Pixeloid Sans Bold",fontSize:40,marginLeft:8},children:"VIDEOS"}),b.jsxs("p",{className:"videos-header-subtitle",style:{fontSize:14,width:"168px",lineHeight:1,marginTop:-8,marginLeft:12,marginRight:8,textWrap:"wrap"},children:["I made a few of these here and there.. and you can watch em on here or ",b.jsx("a",{href:"https://youtube.com/ecksposting",target:"_blank",children:"YouTube!"})]})]}),b.jsxs("div",{className:"videos-featured",style:{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",marginTop:1,padding:4,borderRadius:0,borderBottom:"2px solid black",maxWidth:480,cursor:"pointer",lineHeight:1},onClick:()=>rs(os[1]),children:[b.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[b.jsx("img",{src:Qx,alt:zi[0].title,style:{width:120,height:140,objectFit:"contain",paddingRight:8,marginTop:4}}),b.jsxs("span",{className:"featured-video-title",style:{paddingLeft:4,paddingRight:16,color:"white",fontSize:26,lineHeight:1.25,fontWeight:"bold",display:"block",width:"280px",textWrap:"wrap"},children:[b.jsx("span",{children:"-  FEATURED "}),b.jsx("br",{}),b.jsx("span",{children:zi[0].title})]})]}),b.jsxs("span",{style:{color:"white",fontSize:14,display:"block",marginTop:12,marginLeft:2,lineHeight:1},children:[zi[0].description," Art done by ",b.jsxs("a",{href:zi[0].featuring_link,target:"_blank",children:["@",zi[0].featuring]})]})]})]}),b.jsx("div",{className:"videos-grid",style:{display:"flex",flexWrap:"wrap",width:"95%",textAlign:"center",gap:"12px"},children:os.filter(n=>n.id!==9).map(n=>b.jsxs("button",{className:"my-videos",style:{width:180,border:"2px ridge #222",borderRadius:1,height:"100%",margin:"auto",background:"white",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:"pointer",overflow:"hidden"},title:n.title,onClick:()=>rs(n),children:[b.jsx("img",{src:n.thumbnail,alt:n.alt_title,loading:"lazy",style:{width:"90%",height:"90%",display:"block",border:"2px solid #222"}}),b.jsxs("span",{style:{color:"black",fontWeight:"bold",fontSize:10,textAlign:"center",margin:"auto",padding:"6px 4px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",height:"100%"},children:[n.title,n.isYouTube?qx:Xx]})]},n.id))}),b.jsx("span",{className:"bottom-tag",style:{marginTop:16,fontFamily:"Sans Nouveaux"},children:"- press play. trust the process. -"}),b.jsx("span",{style:{textAlign:"center"},children:"..."})]}),Kp=[{src:"/gallery/2025-search-thumb.jpg",alt:"INTERNET-SEARCH",year:"2025",full:"/gallery/2025-search.jpg",tags:["graphics"]},{src:"/gallery/2025-baklava-mockup-thumb.jpg",alt:"BAKLAVA-AD-MOCKUP",year:"2025",full:"/gallery/2025-baklava-mockup.jpg",tags:["graphics"]},{src:"/gallery/2025-baklava-blend.jpg",alt:"BAKLAVA.BLEND",year:"2025",full:"/gallery/2025-baklava-blend.jpg",tags:["graphics"]},{src:"/gallery/2025-nadathumb.jpg",alt:"TOM-Y-JERRY",year:"2025",full:"/gallery/2025-nada.gif",tags:["graphics"]},{src:"/gallery/2025-banner.jpg",alt:"BANNER",year:"2025",full:"/gallery/2025-banner.jpg",tags:["graphics"]},{src:"/gallery/2025-you-rule-thumb.jpg",alt:"YOU-RULE",year:"2025",full:"/gallery/2025-you-rule.jpg",tags:["photos"]},{src:"/gallery/2025_crankdat.jpg",alt:"CRANKDAT",year:"2025",full:"/gallery/2025_crankdat.jpg",tags:["music"]},{src:"/gallery/2025-uhuhuh.jpg",alt:"UHUHUH",year:"2025",full:"/gallery/2025-uhuhuh.jpg",tags:["photos"]},{src:"/gallery/2025-vinyl.jpg",alt:"VINYL",year:"2025",full:"/gallery/2025-vinyl.jpg",tags:["music"]},{src:"/gallery/2025_bro-has-kickassia.jpg",alt:"BRO-HAS-KICKASSIA",year:"2025",full:"/gallery/2025_bro-has-kickassia.jpg",tags:["music"]},{src:"/gallery/2024-tape-mockup.jpg",alt:"SCRAPPED-TAPE-MOCKUP",year:"2024",full:"/gallery/2024-tape-mockup.jpg",tags:["graphics"]},{src:"/gallery/2024-be.jpg",alt:"BE",year:"2024",full:"/gallery/2024-be.jpg",tags:["music"]},{src:"/gallery/2024-HBO.jpg",alt:"HBO",year:"2024",full:"/gallery/2024-HBO.jpg",tags:["music"]},{src:"/gallery/2024-firestar.jpg",alt:"FIRESTAR",year:"2024",full:"/gallery/2024-firestar.jpg",tags:["photos"]},{src:"/gallery/2024-threebeersdeep.jpg",alt:"THREEBEERSDEEP",year:"2024",full:"/gallery/2024-threebeersdeep.jpg",tags:["photos"]},{src:"/gallery/2024-sagsog.jpg",alt:"SAG-SOG",year:"2024",full:"/gallery/2024-sagsog.jpg",tags:["photos"]},{src:"/gallery/2024-babygreen.jpg",alt:"BABYGREENONEARTH",year:"2024",full:"/gallery/2024-babygreen.jpg",tags:["photos"]},{src:"/gallery/2023-mach-stoney.jpg",alt:"MACH-STONEY",year:"2023",full:"/gallery/2023-mach-stoney.jpg",tags:["graphics"]},{src:"/gallery/2023-orpheus-thumb.jpg",alt:"ORPHEUS",year:"2023",full:"/gallery/2023-orpheus.jpg",tags:["music"]},{src:"/gallery/2023-setup.jpg",alt:"SETUP",year:"2023",full:"/gallery/2023-setup.jpg",tags:["photos"]},{src:"/gallery/2022-waffle.jpg",alt:"WH",year:"2022",full:"/gallery/2022-waffle.jpg",tags:["photos"]},{src:"/gallery/2018-tux.jpg",alt:"TUX",year:"2018",full:"/gallery/2018-tux.jpg",tags:["photos"]}],Kx=["all","graphics","photos","music"],Jx=()=>{const[n,o]=z.useState("all"),c=d=>{const p=document.createElement("div");p.style.background="#000",p.style.display="flex",p.style.alignItems="center",p.style.justifyContent="center",p.style.height="100%";const v=new window.Image;v.src=d.full,v.alt=d.alt,v.style.width="100%",v.style.maxWidth="600px",v.style.height="auto",v.style.display="flex",v.style.margin="auto",v.onload=()=>{const T=Math.min(v.naturalWidth,window.innerWidth*.33),A=Math.min(v.naturalHeight,window.innerHeight*.33),y=Math.max(220,T),R=Math.max(120,A);p.innerHTML="",p.appendChild(v),new cl({title:`~/X/GALLERY/IMAGES/${d.year}/${d.alt}`,icon:Rt.desktop_gallery,background:"#000",width:`${y}px`,height:`${R}px`,x:"center",y:"center",mount:p,setBackground:()=>{},onClose:()=>p.remove(),noResize:window.innerWidth<600,noMax:window.innerWidth<600,noMin:window.innerWidth<600,noFull:window.innerWidth<600})}},r=n==="all"?Kp:Kp.filter(d=>d.tags&&d.tags.includes(n));return b.jsxs(b.Fragment,{children:[b.jsxs("div",{className:"gallery-header",style:{color:"black",fontSize:40,margin:4},children:[b.jsx("p",{className:"gallery-header-title",children:"THE GALLERY"}),b.jsx("p",{className:"gallery-header-subtitle",style:{fontSize:14,lineHeight:1},children:"Here's a lil archive of images I have made, photos of my media collection, various side-quests and more. Double click an image to view it in full size."}),b.jsx("div",{style:{display:"flex",gap:12,justifyContent:"center",marginBottom:12,marginTop:12},children:Kx.map(d=>b.jsx("button",{className:"default",onClick:()=>o(d),style:{boxShadow:"0 2px 4px rgba(0,0,0,0.44)",fontFamily:"Pixeloid Sans",padding:"6px 16px",borderRadius:3,border:n===d?"4px ridge #222":"2px ridge #666565",background:n===d?"#222":"#f5f5f5",color:n===d?"#f5f5f5":"#222",fontWeight:n===d?"bold":"normal",cursor:"pointer",outline:"none"},children:d.toUpperCase()},d))}),b.jsx("div",{className:"line"})]}),b.jsxs("div",{className:"gallery-grid",style:{width:"98%",display:"flex",flexWrap:"wrap",gap:16,justifyContent:"center",marginBottom:16},children:[r.map((d,p)=>b.jsx("div",{className:"gallery-image-frame",style:{aspectRatio:"auto",background:"#111",border:"2px ridge #222",margin:"auto",padding:4,display:"flex",objectFit:"cover",alignItems:"center",justifyContent:"center",maxWidth:200,maxHeight:200,cursor:"pointer"},onDoubleClick:()=>c(d),title:d.alt,children:b.jsx("img",{src:d.src,alt:d.alt,loading:"lazy",style:{background:"black",aspectRatio:"auto",maxWidth:"200px",maxHeight:"200px",width:"auto",height:"auto",display:"inline"}})},p)),b.jsx("br",{}),b.jsx("span",{className:"gallery-bottom-tag",style:{fontFamily:"Sans Nouveaux",marginTop:18},children:"- one shot. cut. print. perfect. -"})]})]})},Wx=()=>b.jsxs("div",{style:{color:"black",fontSize:20,overflow:"hidden",marginLeft:12,marginRight:12,marginTop:12,paddingBottom:4,fontFamily:"Sans Nouveaux",textRendering:"optimizeLegibility"},children:[b.jsx("span",{style:{fontSize:14,marginTop:16,marginBottom:8},children:"Email:"}),b.jsx("a",{href:"mailto:spam@3cks.net",target:"_blank",children:b.jsx("div",{className:"email",style:{display:"flex",border:"2px solid #222",fontWeight:"bold",textAlign:"center",alignContent:"center",paddingTop:12,marginBottom:16,paddingBottom:16,marginTop:8,lineHeight:1},children:b.jsxs("span",{style:{margin:"0 auto"},children:[b.jsx("img",{src:Rt.desktop_contact,style:{width:24,height:24,marginRight:4}})," - spam@3cks.net"]})})}),b.jsx("span",{style:{fontSize:14,marginTop:16},children:"Socials:"}),b.jsxs("div",{style:{marginBottom:32,alignContent:"center",textAlign:"center",display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gridTemplateRows:"repeat(2, auto)",listStyleType:"disc",margin:"8px auto",lineHeight:1,fontSize:14,border:"2px solid #222"},children:[b.jsx("span",{className:"icon",children:b.jsx("a",{href:"https://youtube.com/ecksposting",target:"_blank",children:b.jsx("img",{src:Rt.youtube,alt:"YouTube",style:{width:48,height:48}})})}),b.jsx("span",{className:"icon",children:b.jsx("a",{href:"https://instagram.com/ecksposting",target:"_blank",children:b.jsx("img",{src:Rt.instagram,alt:"Instagram",style:{width:48,height:48}})})}),b.jsx("span",{className:"icon",children:b.jsx("a",{href:"https://twitter.com/ecksposting",target:"_blank",children:b.jsx("img",{src:Rt.xitter,alt:"Xitter",style:{width:48,height:48}})})}),b.jsx("span",{className:"icon",children:b.jsx("a",{href:"https://steamcommunity.com/id/ecksposting",target:"_blank",children:b.jsx("img",{src:Rt.steam,alt:"Steam",style:{width:48,height:48}})})}),b.jsx("span",{className:"icon",children:b.jsx("a",{href:"https://eckslol.newgrounds.com",target:"_blank",children:b.jsx("img",{src:Rt.newgrounds,alt:"Newgrounds",style:{width:48,height:48}})})})]}),b.jsx("span",{className:"bottom-tag",style:{marginTop:32},children:"- your move. -"})]}),Fx=()=>b.jsx(b.Fragment,{children:b.jsxs("div",{style:{color:"black",fontSize:24,overflow:"hidden",margin:12,paddingBottom:4,fontFamily:"Sans Nouveaux"},children:[b.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:16},children:[b.jsx("img",{src:Rt.moneyspin,alt:"Donate",style:{width:96,height:128,objectFit:"contain",marginTop:8}}),b.jsxs("div",{style:{flex:1,lineHeight:1,fontSize:12,marginBottom:8},children:[b.jsx("span",{children:"Paypal:"}),b.jsx("a",{href:"https://paypal.me/ecksposting",target:"_blank",children:b.jsx("div",{className:"paypal-button",style:{display:"flex",border:"3px ridge #222",fontWeight:"bold",textAlign:"center",alignItems:"center",padding:8,marginBottom:8,marginTop:8,lineHeight:1,fontSize:12},children:b.jsx("span",{style:{margin:"0 auto"},children:"/ecksposting"})})}),b.jsx("span",{children:"Cashapp:"}),b.jsx("a",{href:"https://cash.app/$eckslol",target:"_blank",children:b.jsx("div",{className:"cashapp-button",style:{display:"flex",border:"3px ridge #222",fontWeight:"bold",textAlign:"center",alignItems:"center",padding:8,marginBottom:24,marginTop:8,lineHeight:1,fontSize:12},children:b.jsx("span",{style:{margin:"0 auto"},children:"$eckslol"})})})]})]}),b.jsx("span",{className:"bottom-tag",children:"- preciate it boss. -"})]})}),Ix=()=>b.jsx(b.Fragment,{children:b.jsxs("div",{className:"notepad",style:{fontSize:8,fontFamily:"Sans Nouveaux",overflow:"hidden",paddingLeft:16,paddingRight:16,textRendering:"optimizeLegibility",lineHeight:1.4},children:[b.jsxs("p",{children:[b.jsx("span",{className:"notepad-header",children:"ADMIN"}),b.jsx("br",{}),b.jsx("span",{children:"Like most of what you see on here, this website was designed and built by the homeboy who's running it! He couldn't do it, however, without the help of:"})]}),b.jsxs("p",{className:"links",style:{fontSize:8,lineHeight:1.5},children:[b.jsx("span",{className:"notepad-header",children:"CODE"}),b.jsxs("span",{children:[b.jsx("br",{}),"- ",b.jsx("a",{href:"https://nextapps-de.github.io/winbox/",target:"_blank",children:"Winbox.js"})," | Window manager",b.jsx("br",{}),"- ",b.jsx("a",{href:"https://github.com/react95-io/React95",target:"_blank",children:"React95"})," | UI component library",b.jsx("br",{}),"- ",b.jsx("a",{href:"https://jdan.github.io/98.css/",target:"_blank",children:"98.css"})," | CSS for additional UI",b.jsx("br",{}),"- ",b.jsx("a",{href:"https://animate.style/",target:"_blank",children:"animate.css"})," | CSS animations",b.jsx("br",{}),"- ",b.jsx("a",{href:"https://oudkee.neocities.org/tutorials/tutcrt",target:"_blank",children:"@oudkee"})," | CRT Effect"]})]}),b.jsx("span",{className:"notepad-header",children:"ART"}),b.jsx("br",{}),b.jsxs("span",{children:["- Loading screen art by ",b.jsx("a",{href:"https://x.com/luvbappy",target:"_blank",children:"@luvbappy"}),b.jsx("br",{}),'- "About Me" illustration by ',b.jsx("a",{href:"https://www.instagram.com/coledawg2001/",target:"_blank",children:"@ColeDawg"})]}),b.jsxs("p",{children:[b.jsx("span",{className:"notepad-header",children:"SPECIAL THANKS"}),b.jsx("br",{}),"- Friends of the site:",b.jsxs("span",{children:[b.jsx("br",{}),b.jsx("a",{href:"https://lucke.neocities.org",target:"_blank",children:"lucke.neocities.org"}),", ",b.jsx("a",{href:"https://4nx4e.lol",target:"_blank",children:"4nx4e.lol"})]}),b.jsx("br",{}),b.jsx("span",{children:"- YOU! (Yes, you!) for being here!"}),b.jsx("br",{})]})]})}),Px="/assets/ms_sans_serif-Du8rjN1q.woff2",tA="/assets/ms_sans_serif_bold-D5dpRRHG.woff2";let W0=[Tn.background1,Tn.background2,Tn.background3,Tn.background4,Tn.background5,Tn.background6],eA=Math.floor(W0.length*Math.random()),F0=W0[eA];console.log(F0);vy`
  ${xy}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${Px}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${tA}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;const lA=()=>{const n=z.useRef(0),o=()=>{const C=Date.now();return C-n.current>=400?(n.current=C,!0):!1},[c,r]=z.useState(!0),[d,p]=z.useState(!1),[v,T]=z.useState(!1),A=z.useRef(null),y=z.useRef(null);z.useEffect(()=>{if(!v)return;function C(J){y.current&&!y.current.contains(J.target)&&A.current&&!A.current.contains(J.target)&&T(!1)}return document.addEventListener("mousedown",C),()=>{document.removeEventListener("mousedown",C)}},[v]);const[R,M]=z.useState(new Date);z.useEffect(()=>{const C=setInterval(()=>M(new Date),1e3);return()=>clearInterval(C)},[]);const G=R.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"}),et=R.toLocaleDateString([],{month:"2-digit",day:"2-digit",year:"numeric"}),I=C=>window.innerWidth<768?"center":{about:"10%",gallery:"50%",videos:"25%",contact:"30%",donate:"50%",credits:"50%"}[C];z.useEffect(()=>{r(!0),p(!1);const C=setTimeout(()=>{r(!1);const J=window.location.pathname,Z=J.match(/^\/watch\/([^/]+)$/i);if(Z){const xt=Z[1].toLowerCase(),vt=os.find(Gt=>Gt.window_title.replace(/[^a-z0-9]/gi,"").toLowerCase()===xt.replace(/[^a-z0-9]/gi,""));if(vt){rs(vt);return}}switch(J){case"/donate":P();break;case"/videos":lt();break;case"/gallery":at();break;case"/blog":p(!0);break;default:p(!0);break}},6116);return()=>clearTimeout(C)},[]),z.useEffect(()=>{if(d){const C=document.createElement("div");new cl({title:"~X/WHATS_NEW/",icon:Rt.info,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",width:"375px",height:"400px",x:"center",y:"center",url:"https://eckis-chronicle.neocities.org",setBackground:J=>console.log(`Background set to ${J}`),onClose:()=>{console.log("Window closed"),C.remove()}}),p(!1)}},[d]),z.useEffect(()=>{document.body.style.backgroundImage=`url(${F0})`,document.body.style.backgroundSize="cover",document.body.style.backgroundRepeat="no-repeat",document.body.style.backgroundPosition="center"},[]);const ut=()=>{if(!o())return;const C=document.createElement("div");C.className="terminal-winbox-body",new cl({title:"~X/CREDITS.TXT",icon:Rt.notepad,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:"255px",maxWidth:"20%",height:"360px",maxHeight:"25%",x:I("credits"),y:"45%",mount:C,setBackground:Z=>console.log(`Background set to ${Z}`),onClose:()=>{console.log("Window closed"),Ke.createRoot(C).unmount(),C.remove()}}),Ke.createRoot(C).render(b.jsx(Ix,{}))},P=()=>{if(!o())return;const C=document.createElement("div");new cl({title:"~X/DONATE/",icon:Rt.desktop_donate,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:Math.min(325,window.innerWidth*.8)+"px",maxWidth:"40%",height:Math.min(230,window.innerHeight*.7)+"px",maxHeight:"35%",x:I("donate"),y:"45%",mount:C,setBackground:Z=>console.log(`Background set to ${Z}`),onClose:()=>{console.log("Window closed"),Ke.createRoot(C).unmount(),C.remove()}}),Ke.createRoot(C).render(b.jsx(Fx,{}))},tt=()=>{if(!o())return;const C=document.createElement("div");new cl({title:"~X/ABOUT/",className:"no-resize",icon:Rt.desktop_about,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:Math.min(440,window.innerWidth*.8)+"px",maxWidth:"440px",height:Math.min(575,window.innerHeight*.7)+"px",maxHeight:"550px",x:I("about"),y:"10%",mount:C,setBackground:Z=>console.log(`Background set to ${Z}`),noResize:!0,onClose:()=>{console.log("Window closed"),Ke.createRoot(C).unmount(),C.remove()}}),Ke.createRoot(C).render(b.jsx(Yx,{}))},lt=()=>{if(!o())return;const C=document.createElement("div");new cl({title:"~X/VIDEOS/",icon:Rt.desktop_videos,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:Math.min(650,window.innerWidth*.8)+"px",maxWidth:"800px",height:Math.min(475,window.innerHeight*.7)+"px",maxHeight:"550px",x:I("videos"),y:"8%",mount:C,setBackground:Z=>console.log(`Background set to ${Z}`),onClose:()=>{console.log("Window closed"),Ke.createRoot(C).unmount(),C.remove()}}),Ke.createRoot(C).render(b.jsx(Zx,{}))},V=()=>{if(!o())return;const C=document.createElement("div");new cl({title:"~X/HIT_MY_LINE/",icon:Rt.desktop_contact,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:Math.min(325,window.innerWidth*.8)+"px",maxWidth:"600px",height:Math.min(280,window.innerHeight*.7)+"px",maxHeight:"400px",x:I("contact"),y:"30%",mount:C,setBackground:Z=>console.log(`Background set to ${Z}`),onClose:()=>{console.log("Window closed"),Ke.createRoot(C).unmount(),C.remove()}}),Ke.createRoot(C).render(b.jsx(Wx,{}))},at=()=>{if(!o())return;const C=document.createElement("div");new cl({title:"~X/GALLERY/",icon:Rt.desktop_gallery,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:Math.min(490,window.innerWidth*.8)+"px",maxWidth:"800px",height:Math.min(580,window.innerHeight*.7)+"px",maxHeight:"650px",x:I("gallery"),y:"30%",mount:C,setBackground:Z=>console.log(`Background set to ${Z}`),onClose:()=>{console.log("Window closed"),Ke.createRoot(C).unmount(),C.remove()}}),Ke.createRoot(C).render(b.jsx(Jx,{}))};return z.useEffect(()=>{Object.values(Rt).forEach(C=>{const J=new window.Image;J.src=C})},[]),b.jsxs(b.Fragment,{children:[c&&b.jsx(cx,{}),b.jsx("div",{className:"App",children:b.jsxs("div",{id:"desktop",children:[b.jsx("label",{htmlFor:"about-me",className:"desktop-item",onClick:tt,children:b.jsxs("a",{href:"#",onClick:C=>C.preventDefault(),children:[b.jsx("img",{src:Rt.desktop_about_gif,className:"logo",alt:"ABOUT"}),b.jsx("div",{className:"desktop-text",children:"ABOUT"})]})}),b.jsx("div",{id:"about-me-content",style:{display:"none"}}),b.jsx("label",{htmlFor:"videos",className:"desktop-item",onClick:lt,children:b.jsxs("a",{href:"#",onClick:C=>C.preventDefault(),children:[b.jsx("img",{src:Rt.desktop_videos_gif,className:"logo",alt:"VIDEOS"}),b.jsx("div",{className:"desktop-text",children:"VIDEOS"})]})}),b.jsx("div",{id:"videos-content",style:{display:"none"}}),b.jsx("label",{htmlFor:"gallery",className:"desktop-item",onClick:at,children:b.jsxs("a",{href:"#",onClick:C=>C.preventDefault(),children:[b.jsx("img",{src:Rt.desktop_gallery_gif,className:"logo",alt:"GALLERY"}),b.jsx("div",{className:"desktop-text",children:"GALLERY"})]})}),b.jsx("div",{id:"gallery-content",style:{display:"none"}}),b.jsx("label",{htmlFor:"contact",className:"desktop-item",onClick:V,children:b.jsxs("a",{href:"#",onClick:C=>C.preventDefault(),children:[b.jsx("img",{src:Rt.desktop_contact_gif,className:"logo",alt:"CONTACT"}),b.jsx("div",{className:"desktop-text",children:"CONTACT"})]})}),b.jsx("div",{id:"contact-content",style:{display:"none"}}),b.jsx("label",{htmlFor:"donate",className:"desktop-item",onClick:P,children:b.jsxs("a",{href:"#",onClick:C=>C.preventDefault(),children:[b.jsx("img",{src:Rt.desktop_donate_gif,className:"logo",alt:"GALLERY"}),b.jsx("div",{className:"desktop-text",children:"DONATE"})]})}),b.jsx("div",{id:"donate-content",style:{display:"none"}})]})}),b.jsx("div",{className:"taskbar",children:b.jsx(my,{theme:ox,children:b.jsx(S0,{fixed:!0,style:{top:"auto",bottom:0,position:"fixed",zIndex:1},children:b.jsxs(so,{noPadding:!0,style:{justifyContent:"space-between"},children:[b.jsxs("div",{style:{position:"relative",display:"flex",width:"100%",alignItems:"center",padding:"0px"},children:[b.jsxs(Bi,{ref:A,onClick:()=>T(!v),active:v?!0:void 0,style:{fontWeight:"bold",marginRight:6,marginLeft:6},children:[b.jsx("img",{src:ax,alt:"react95 logo",style:{height:"20px",marginRight:4}}),"START"]}),b.jsx(Y0,{size:35,style:{marginRight:10}}),b.jsxs("div",{style:{position:"relative",display:"inline-block",marginRight:14},onClick:()=>window.open("https://youtube.com/ecksposting","_blank","noopener,noreferrer"),children:[b.jsx("img",{src:Rt.youtube,alt:"YouTube",className:"taskbar-item",style:{height:"25px"}}),b.jsx("div",{className:"taskbar-tooltip",style:{display:"none",position:"absolute",bottom:"120%",left:"50%",transform:"translateX(-45%)",background:"#222",color:"#fff",padding:"6px 8px",border:"2px solid white",fontSize:14,whiteSpace:"nowrap",zIndex:100,boxShadow:"0 2px 8px #0006",pointerEvents:"none"},children:"YOUTUBE"})]}),b.jsxs("div",{style:{position:"relative",display:"inline-block",marginRight:14},onClick:()=>window.open("https://youtube.com/ecksposting","_blank","noopener,noreferrer"),children:[b.jsx("img",{src:Rt.instagram,alt:"react95 logo",className:"taskbar-item",style:{height:"25px"}}),b.jsx("div",{className:"taskbar-tooltip",style:{display:"none",position:"absolute",bottom:"120%",left:"50%",transform:"translateX(-45%)",background:"#222",color:"#fff",padding:"6px 8px",border:"2px solid white",fontSize:14,whiteSpace:"nowrap",zIndex:100,boxShadow:"0 2px 8px #0006",pointerEvents:"none"},children:"INSTA"})]}),b.jsxs("div",{style:{position:"relative",display:"inline-block",marginRight:14},onClick:()=>window.open("https://youtube.com/ecksposting","_blank","noopener,noreferrer"),children:[b.jsx("img",{src:Rt.xitter,alt:"react95 logo",className:"taskbar-item",style:{height:"25px"}}),b.jsx("div",{className:"taskbar-tooltip",style:{display:"none",position:"absolute",bottom:"120%",left:"50%",transform:"translateX(-45%)",background:"#222",color:"#fff",padding:"6px 8px",border:"2px solid white",fontSize:14,whiteSpace:"nowrap",zIndex:100,boxShadow:"0 2px 8px #0006",pointerEvents:"none"},children:"XITTER"})]}),b.jsxs("div",{style:{position:"relative",display:"inline-block",marginRight:14},onClick:()=>window.open("https://eckslol.newgrounds.com/","_blank","noopener,noreferrer"),children:[b.jsx("img",{src:Rt.newgrounds,alt:"react95 logo",className:"taskbar-item",style:{height:"25px"}}),b.jsx("div",{className:"taskbar-tooltip",style:{display:"none",position:"absolute",bottom:"120%",left:"50%",transform:"translateX(-45%)",background:"#222",color:"#fff",padding:"6px 8px",border:"2px solid white",fontSize:14,whiteSpace:"nowrap",zIndex:100,boxShadow:"0 2px 8px #0006",pointerEvents:"none"},children:"NEWGROUNDS"})]}),v&&b.jsxs(w0,{ref:y,style:{position:"absolute",left:"-3px",bottom:"80%"},onClick:()=>T(!1),children:[b.jsxs(aa,{className:"taskbar-tab",onClick:lt,style:{cursor:"pointer",fontFamily:"Pixeloid Sans"},children:[b.jsx("span",{role:"img",children:b.jsx("img",{src:Rt.desktop_videos,alt:"VIDEOS",style:{width:"20px",height:"20px",margin:"0 15px -4px 0"}})}),"VIDEOS"]}),b.jsxs(aa,{className:"taskbar-tab",onClick:at,style:{cursor:"pointer",fontFamily:"Pixeloid Sans"},children:[b.jsx("span",{role:"img",children:b.jsx("img",{src:Rt.desktop_gallery,alt:"GALLERY",style:{width:"20px",height:"20px",margin:"0 15px -4px 0"}})}),"GALLERY"]}),b.jsxs(aa,{className:"taskbar-tab",onClick:tt,style:{cursor:"pointer",fontFamily:"Pixeloid Sans"},children:[b.jsx("span",{role:"img",children:b.jsx("img",{src:Rt.desktop_about,alt:"GALLERY",style:{width:"20px",height:"20px",margin:"0 15px -4px 0"}})}),"ABOUT"]}),b.jsxs(aa,{className:"taskbar-tab",onClick:d?()=>{}:()=>p(!0),style:{cursor:"pointer",fontFamily:"Pixeloid Sans"},children:[b.jsx("span",{role:"img",children:b.jsx("img",{src:Rt.blog,alt:"GALLERY",style:{width:"20px",height:"20px",margin:"0 15px -4px 0"}})}),"BLOG"]}),b.jsx(co,{}),b.jsxs(aa,{className:"taskbar-tab",onClick:()=>window.open("https://tornada.net/","_blank","noopener,noreferrer"),style:{cursor:"pointer",fontFamily:"Pixeloid Sans"},children:[b.jsx("span",{role:"img",children:b.jsx("img",{src:Rt.tornada,alt:"TORNADA",style:{width:"20px",height:"20px",margin:"0 15px -4px 0"}})}),"TORNADA"]}),b.jsx(co,{}),b.jsxs(aa,{className:"taskbar-tab",onClick:ut,style:{cursor:"pointer",fontFamily:"Pixeloid Sans"},children:[b.jsx("span",{role:"img",children:b.jsx("img",{src:Rt.notepad,alt:"CREDITS",style:{width:"20px",height:"20px",margin:"0 10px -3px 0"}})}),"CREDITS"]}),b.jsxs(aa,{disabled:!0,style:{fontFamily:"Pixeloid Sans"},children:[b.jsx("span",{role:"img",children:b.jsx("img",{src:nx,style:{width:"20px",height:"20px",margin:"0 10px -3px 0"}})}),"SHUTDOWN"]})]})]}),b.jsxs(G0,{variant:"well",shadow:!0,style:{right:"auto",padding:"0.1rem",width:"140px",height:"40px",textAlign:"center",fontSize:"1rem",fontWeight:"bold",color:"#fff",backgroundColor:"#000",border:"black inset 2px",borderRadius:"0.1rem",marginTop:4,marginBottom:4,marginRight:6,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[b.jsx("div",{style:{fontSize:"0.9em"},children:G}),b.jsx("div",{style:{fontSize:"0.9em",marginTop:6},children:et})]})]})})})})]})};Wp.createRoot(document.getElementById("root")).render(b.jsx(z.StrictMode,{children:b.jsx(lA,{})}));
