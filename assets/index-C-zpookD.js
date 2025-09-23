(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function u(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(c){if(c.ep)return;c.ep=!0;const d=u(c);fetch(c.href,d)}})();function Mc(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var ac={exports:{}},Hi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function iy(){if(Lp)return Hi;Lp=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function u(s,c,d){var p=null;if(d!==void 0&&(p=""+d),c.key!==void 0&&(p=""+c.key),"key"in c){d={};for(var y in c)y!=="key"&&(d[y]=c[y])}else d=c;return c=d.ref,{$$typeof:l,type:s,key:p,ref:c!==void 0?c:null,props:d}}return Hi.Fragment=r,Hi.jsx=u,Hi.jsxs=u,Hi}var Yp;function ry(){return Yp||(Yp=1,ac.exports=iy()),ac.exports}var S=ry(),lc={exports:{}},At={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function oy(){if(Gp)return At;Gp=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),p=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),E=Symbol.iterator;function O(A){return A===null||typeof A!="object"?null:(A=E&&A[E]||A["@@iterator"],typeof A=="function"?A:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,J={};function N(A,q,at){this.props=A,this.context=q,this.refs=J,this.updater=at||L}N.prototype.isReactComponent={},N.prototype.setState=function(A,q){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,q,"setState")},N.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function U(){}U.prototype=N.prototype;function j(A,q,at){this.props=A,this.context=q,this.refs=J,this.updater=at||L}var Y=j.prototype=new U;Y.constructor=j,$(Y,N.prototype),Y.isPureReactComponent=!0;var F=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},nt=Object.prototype.hasOwnProperty;function B(A,q,at,H,W,it){return at=it.ref,{$$typeof:l,type:A,key:q,ref:at!==void 0?at:null,props:it}}function ct(A,q){return B(A.type,q,void 0,void 0,void 0,A.props)}function rt(A){return typeof A=="object"&&A!==null&&A.$$typeof===l}function Ot(A){var q={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(at){return q[at]})}var Ct=/\/+/g;function vt(A,q){return typeof A=="object"&&A!==null&&A.key!=null?Ot(""+A.key):q.toString(36)}function g(){}function X(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(g,g):(A.status="pending",A.then(function(q){A.status==="pending"&&(A.status="fulfilled",A.value=q)},function(q){A.status==="pending"&&(A.status="rejected",A.reason=q)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function et(A,q,at,H,W){var it=typeof A;(it==="undefined"||it==="boolean")&&(A=null);var lt=!1;if(A===null)lt=!0;else switch(it){case"bigint":case"string":case"number":lt=!0;break;case"object":switch(A.$$typeof){case l:case r:lt=!0;break;case x:return lt=A._init,et(lt(A._payload),q,at,H,W)}}if(lt)return W=W(A),lt=H===""?"."+vt(A,0):H,F(W)?(at="",lt!=null&&(at=lt.replace(Ct,"$&/")+"/"),et(W,q,at,"",function(K){return K})):W!=null&&(rt(W)&&(W=ct(W,at+(W.key==null||A&&A.key===W.key?"":(""+W.key).replace(Ct,"$&/")+"/")+lt)),q.push(W)),1;lt=0;var ft=H===""?".":H+":";if(F(A))for(var ht=0;ht<A.length;ht++)H=A[ht],it=ft+vt(H,ht),lt+=et(H,q,at,it,W);else if(ht=O(A),typeof ht=="function")for(A=ht.call(A),ht=0;!(H=A.next()).done;)H=H.value,it=ft+vt(H,ht++),lt+=et(H,q,at,it,W);else if(it==="object"){if(typeof A.then=="function")return et(X(A),q,at,H,W);throw q=String(A),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return lt}function C(A,q,at){if(A==null)return A;var H=[],W=0;return et(A,H,"","",function(it){return q.call(at,it,W++)}),H}function G(A){if(A._status===-1){var q=A._result;q=q(),q.then(function(at){(A._status===0||A._status===-1)&&(A._status=1,A._result=at)},function(at){(A._status===0||A._status===-1)&&(A._status=2,A._result=at)}),A._status===-1&&(A._status=0,A._result=q)}if(A._status===1)return A._result.default;throw A._result}var P=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function ot(){}return At.Children={map:C,forEach:function(A,q,at){C(A,function(){q.apply(this,arguments)},at)},count:function(A){var q=0;return C(A,function(){q++}),q},toArray:function(A){return C(A,function(q){return q})||[]},only:function(A){if(!rt(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},At.Component=N,At.Fragment=u,At.Profiler=c,At.PureComponent=j,At.StrictMode=s,At.Suspense=b,At.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,At.__COMPILER_RUNTIME={__proto__:null,c:function(A){return I.H.useMemoCache(A)}},At.cache=function(A){return function(){return A.apply(null,arguments)}},At.cloneElement=function(A,q,at){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var H=$({},A.props),W=A.key,it=void 0;if(q!=null)for(lt in q.ref!==void 0&&(it=void 0),q.key!==void 0&&(W=""+q.key),q)!nt.call(q,lt)||lt==="key"||lt==="__self"||lt==="__source"||lt==="ref"&&q.ref===void 0||(H[lt]=q[lt]);var lt=arguments.length-2;if(lt===1)H.children=at;else if(1<lt){for(var ft=Array(lt),ht=0;ht<lt;ht++)ft[ht]=arguments[ht+2];H.children=ft}return B(A.type,W,void 0,void 0,it,H)},At.createContext=function(A){return A={$$typeof:p,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:d,_context:A},A},At.createElement=function(A,q,at){var H,W={},it=null;if(q!=null)for(H in q.key!==void 0&&(it=""+q.key),q)nt.call(q,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(W[H]=q[H]);var lt=arguments.length-2;if(lt===1)W.children=at;else if(1<lt){for(var ft=Array(lt),ht=0;ht<lt;ht++)ft[ht]=arguments[ht+2];W.children=ft}if(A&&A.defaultProps)for(H in lt=A.defaultProps,lt)W[H]===void 0&&(W[H]=lt[H]);return B(A,it,void 0,void 0,null,W)},At.createRef=function(){return{current:null}},At.forwardRef=function(A){return{$$typeof:y,render:A}},At.isValidElement=rt,At.lazy=function(A){return{$$typeof:x,_payload:{_status:-1,_result:A},_init:G}},At.memo=function(A,q){return{$$typeof:m,type:A,compare:q===void 0?null:q}},At.startTransition=function(A){var q=I.T,at={};I.T=at;try{var H=A(),W=I.S;W!==null&&W(at,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(ot,P)}catch(it){P(it)}finally{I.T=q}},At.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},At.use=function(A){return I.H.use(A)},At.useActionState=function(A,q,at){return I.H.useActionState(A,q,at)},At.useCallback=function(A,q){return I.H.useCallback(A,q)},At.useContext=function(A){return I.H.useContext(A)},At.useDebugValue=function(){},At.useDeferredValue=function(A,q){return I.H.useDeferredValue(A,q)},At.useEffect=function(A,q,at){var H=I.H;if(typeof at=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return H.useEffect(A,q)},At.useId=function(){return I.H.useId()},At.useImperativeHandle=function(A,q,at){return I.H.useImperativeHandle(A,q,at)},At.useInsertionEffect=function(A,q){return I.H.useInsertionEffect(A,q)},At.useLayoutEffect=function(A,q){return I.H.useLayoutEffect(A,q)},At.useMemo=function(A,q){return I.H.useMemo(A,q)},At.useOptimistic=function(A,q){return I.H.useOptimistic(A,q)},At.useReducer=function(A,q,at){return I.H.useReducer(A,q,at)},At.useRef=function(A){return I.H.useRef(A)},At.useState=function(A){return I.H.useState(A)},At.useSyncExternalStore=function(A,q,at){return I.H.useSyncExternalStore(A,q,at)},At.useTransition=function(){return I.H.useTransition()},At.version="19.1.0",At}var qp;function Nc(){return qp||(qp=1,lc.exports=oy()),lc.exports}var v=Nc();const _=Mc(v);var nc={exports:{}},Ui={},ic={exports:{}},rc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function uy(){return Qp||(Qp=1,function(l){function r(C,G){var P=C.length;C.push(G);t:for(;0<P;){var ot=P-1>>>1,A=C[ot];if(0<c(A,G))C[ot]=G,C[P]=A,P=ot;else break t}}function u(C){return C.length===0?null:C[0]}function s(C){if(C.length===0)return null;var G=C[0],P=C.pop();if(P!==G){C[0]=P;t:for(var ot=0,A=C.length,q=A>>>1;ot<q;){var at=2*(ot+1)-1,H=C[at],W=at+1,it=C[W];if(0>c(H,P))W<A&&0>c(it,H)?(C[ot]=it,C[W]=P,ot=W):(C[ot]=H,C[at]=P,ot=at);else if(W<A&&0>c(it,P))C[ot]=it,C[W]=P,ot=W;else break t}}return G}function c(C,G){var P=C.sortIndex-G.sortIndex;return P!==0?P:C.id-G.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;l.unstable_now=function(){return d.now()}}else{var p=Date,y=p.now();l.unstable_now=function(){return p.now()-y}}var b=[],m=[],x=1,E=null,O=3,L=!1,$=!1,J=!1,N=!1,U=typeof setTimeout=="function"?setTimeout:null,j=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function F(C){for(var G=u(m);G!==null;){if(G.callback===null)s(m);else if(G.startTime<=C)s(m),G.sortIndex=G.expirationTime,r(b,G);else break;G=u(m)}}function I(C){if(J=!1,F(C),!$)if(u(b)!==null)$=!0,nt||(nt=!0,vt());else{var G=u(m);G!==null&&et(I,G.startTime-C)}}var nt=!1,B=-1,ct=5,rt=-1;function Ot(){return N?!0:!(l.unstable_now()-rt<ct)}function Ct(){if(N=!1,nt){var C=l.unstable_now();rt=C;var G=!0;try{t:{$=!1,J&&(J=!1,j(B),B=-1),L=!0;var P=O;try{e:{for(F(C),E=u(b);E!==null&&!(E.expirationTime>C&&Ot());){var ot=E.callback;if(typeof ot=="function"){E.callback=null,O=E.priorityLevel;var A=ot(E.expirationTime<=C);if(C=l.unstable_now(),typeof A=="function"){E.callback=A,F(C),G=!0;break e}E===u(b)&&s(b),F(C)}else s(b);E=u(b)}if(E!==null)G=!0;else{var q=u(m);q!==null&&et(I,q.startTime-C),G=!1}}break t}finally{E=null,O=P,L=!1}G=void 0}}finally{G?vt():nt=!1}}}var vt;if(typeof Y=="function")vt=function(){Y(Ct)};else if(typeof MessageChannel<"u"){var g=new MessageChannel,X=g.port2;g.port1.onmessage=Ct,vt=function(){X.postMessage(null)}}else vt=function(){U(Ct,0)};function et(C,G){B=U(function(){C(l.unstable_now())},G)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(C){C.callback=null},l.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ct=0<C?Math.floor(1e3/C):5},l.unstable_getCurrentPriorityLevel=function(){return O},l.unstable_next=function(C){switch(O){case 1:case 2:case 3:var G=3;break;default:G=O}var P=O;O=G;try{return C()}finally{O=P}},l.unstable_requestPaint=function(){N=!0},l.unstable_runWithPriority=function(C,G){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var P=O;O=C;try{return G()}finally{O=P}},l.unstable_scheduleCallback=function(C,G,P){var ot=l.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?ot+P:ot):P=ot,C){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=P+A,C={id:x++,callback:G,priorityLevel:C,startTime:P,expirationTime:A,sortIndex:-1},P>ot?(C.sortIndex=P,r(m,C),u(b)===null&&C===u(m)&&(J?(j(B),B=-1):J=!0,et(I,P-ot))):(C.sortIndex=A,r(b,C),$||L||($=!0,nt||(nt=!0,vt()))),C},l.unstable_shouldYield=Ot,l.unstable_wrapCallback=function(C){var G=O;return function(){var P=O;O=G;try{return C.apply(this,arguments)}finally{O=P}}}}(rc)),rc}var Xp;function sy(){return Xp||(Xp=1,ic.exports=uy()),ic.exports}var oc={exports:{}},xe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp;function cy(){if(Vp)return xe;Vp=1;var l=Nc();function r(b){var m="https://react.dev/errors/"+b;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)m+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+b+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var s={d:{f:u,r:function(){throw Error(r(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(b,m,x){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:E==null?null:""+E,children:b,containerInfo:m,implementation:x}}var p=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(b,m){if(b==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return xe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,xe.createPortal=function(b,m){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(r(299));return d(b,m,null,x)},xe.flushSync=function(b){var m=p.T,x=s.p;try{if(p.T=null,s.p=2,b)return b()}finally{p.T=m,s.p=x,s.d.f()}},xe.preconnect=function(b,m){typeof b=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(b,m))},xe.prefetchDNS=function(b){typeof b=="string"&&s.d.D(b)},xe.preinit=function(b,m){if(typeof b=="string"&&m&&typeof m.as=="string"){var x=m.as,E=y(x,m.crossOrigin),O=typeof m.integrity=="string"?m.integrity:void 0,L=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;x==="style"?s.d.S(b,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:E,integrity:O,fetchPriority:L}):x==="script"&&s.d.X(b,{crossOrigin:E,integrity:O,fetchPriority:L,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},xe.preinitModule=function(b,m){if(typeof b=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var x=y(m.as,m.crossOrigin);s.d.M(b,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(b)},xe.preload=function(b,m){if(typeof b=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var x=m.as,E=y(x,m.crossOrigin);s.d.L(b,x,{crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},xe.preloadModule=function(b,m){if(typeof b=="string")if(m){var x=y(m.as,m.crossOrigin);s.d.m(b,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(b)},xe.requestFormReset=function(b){s.d.r(b)},xe.unstable_batchedUpdates=function(b,m){return b(m)},xe.useFormState=function(b,m,x){return p.H.useFormState(b,m,x)},xe.useFormStatus=function(){return p.H.useHostTransitionStatus()},xe.version="19.1.0",xe}var Zp;function km(){if(Zp)return oc.exports;Zp=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),oc.exports=cy(),oc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function fy(){if(Kp)return Ui;Kp=1;var l=sy(),r=Nc(),u=km();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function d(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function p(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function y(t){if(d(t)!==t)throw Error(s(188))}function b(t){var e=t.alternate;if(!e){if(e=d(t),e===null)throw Error(s(188));return e!==t?null:t}for(var a=t,n=e;;){var i=a.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===a)return y(i),t;if(o===n)return y(i),e;o=o.sibling}throw Error(s(188))}if(a.return!==n.return)a=i,n=o;else{for(var f=!1,h=i.child;h;){if(h===a){f=!0,a=i,n=o;break}if(h===n){f=!0,n=i,a=o;break}h=h.sibling}if(!f){for(h=o.child;h;){if(h===a){f=!0,a=o,n=i;break}if(h===n){f=!0,n=o,a=i;break}h=h.sibling}if(!f)throw Error(s(189))}}if(a.alternate!==n)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:e}function m(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=m(t),e!==null)return e;t=t.sibling}return null}var x=Object.assign,E=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),j=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),ct=Symbol.for("react.lazy"),rt=Symbol.for("react.activity"),Ot=Symbol.for("react.memo_cache_sentinel"),Ct=Symbol.iterator;function vt(t){return t===null||typeof t!="object"?null:(t=Ct&&t[Ct]||t["@@iterator"],typeof t=="function"?t:null)}var g=Symbol.for("react.client.reference");function X(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===g?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $:return"Fragment";case N:return"Profiler";case J:return"StrictMode";case I:return"Suspense";case nt:return"SuspenseList";case rt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case L:return"Portal";case Y:return(t.displayName||"Context")+".Provider";case j:return(t._context.displayName||"Context")+".Consumer";case F:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return e=t.displayName||null,e!==null?e:X(t.type)||"Memo";case ct:e=t._payload,t=t._init;try{return X(t(e))}catch{}}return null}var et=Array.isArray,C=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},ot=[],A=-1;function q(t){return{current:t}}function at(t){0>A||(t.current=ot[A],ot[A]=null,A--)}function H(t,e){A++,ot[A]=t.current,t.current=e}var W=q(null),it=q(null),lt=q(null),ft=q(null);function ht(t,e){switch(H(lt,e),H(it,t),H(W,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?pp(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=pp(e),t=mp(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}at(W),H(W,t)}function K(){at(W),at(it),at(lt)}function bt(t){t.memoizedState!==null&&H(ft,t);var e=W.current,a=mp(e,t.type);e!==a&&(H(it,t),H(W,a))}function pt(t){it.current===t&&(at(W),at(it)),ft.current===t&&(at(ft),Mi._currentValue=P)}var xt=Object.prototype.hasOwnProperty,kt=l.unstable_scheduleCallback,jt=l.unstable_cancelCallback,qt=l.unstable_shouldYield,ae=l.unstable_requestPaint,Qt=l.unstable_now,be=l.unstable_getCurrentPriorityLevel,re=l.unstable_ImmediatePriority,Ue=l.unstable_UserBlockingPriority,Ee=l.unstable_NormalPriority,na=l.unstable_LowPriority,$e=l.unstable_IdlePriority,Ha=l.log,Ll=l.unstable_setDisableYieldValue,Ua=null,Ae=null;function ia(t){if(typeof Ha=="function"&&Ll(t),Ae&&typeof Ae.setStrictMode=="function")try{Ae.setStrictMode(Ua,t)}catch{}}var we=Math.clz32?Math.clz32:qo,Yo=Math.log,Go=Math.LN2;function qo(t){return t>>>=0,t===0?32:31-(Yo(t)/Go|0)|0}var Yl=256,Gl=4194304;function ga(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ql(t,e,a){var n=t.pendingLanes;if(n===0)return 0;var i=0,o=t.suspendedLanes,f=t.pingedLanes;t=t.warmLanes;var h=n&134217727;return h!==0?(n=h&~o,n!==0?i=ga(n):(f&=h,f!==0?i=ga(f):a||(a=h&~t,a!==0&&(i=ga(a))))):(h=n&~o,h!==0?i=ga(h):f!==0?i=ga(f):a||(a=n&~t,a!==0&&(i=ga(a)))),i===0?0:e!==0&&e!==i&&(e&o)===0&&(o=i&-i,a=e&-e,o>=a||o===32&&(a&4194048)!==0)?e:i}function pl(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Qo(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jc(){var t=Yl;return Yl<<=1,(Yl&4194048)===0&&(Yl=256),t}function Fc(){var t=Gl;return Gl<<=1,(Gl&62914560)===0&&(Gl=4194304),t}function Xo(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Gn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Zg(t,e,a,n,i,o){var f=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var h=t.entanglements,w=t.expirationTimes,k=t.hiddenUpdates;for(a=f&~a;0<a;){var Q=31-we(a),Z=1<<Q;h[Q]=0,w[Q]=-1;var z=k[Q];if(z!==null)for(k[Q]=null,Q=0;Q<z.length;Q++){var M=z[Q];M!==null&&(M.lane&=-536870913)}a&=~Z}n!==0&&Ic(t,n,0),o!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=o&~(f&~e))}function Ic(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var n=31-we(e);t.entangledLanes|=e,t.entanglements[n]=t.entanglements[n]|1073741824|a&4194090}function Pc(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var n=31-we(a),i=1<<n;i&e|t[n]&e&&(t[n]|=e),a&=~i}}function Vo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Zo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function tf(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:_p(t.type))}function Kg(t,e){var a=G.p;try{return G.p=t,e()}finally{G.p=a}}var $a=Math.random().toString(36).slice(2),ye="__reactFiber$"+$a,Te="__reactProps$"+$a,Ql="__reactContainer$"+$a,Ko="__reactEvents$"+$a,Wg="__reactListeners$"+$a,Jg="__reactHandles$"+$a,ef="__reactResources$"+$a,qn="__reactMarker$"+$a;function Wo(t){delete t[ye],delete t[Te],delete t[Ko],delete t[Wg],delete t[Jg]}function Xl(t){var e=t[ye];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Ql]||a[ye]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=vp(t);t!==null;){if(a=t[ye])return a;t=vp(t)}return e}t=a,a=t.parentNode}return null}function Vl(t){if(t=t[ye]||t[Ql]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Qn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function Zl(t){var e=t[ef];return e||(e=t[ef]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function oe(t){t[qn]=!0}var af=new Set,lf={};function ml(t,e){Kl(t,e),Kl(t+"Capture",e)}function Kl(t,e){for(lf[t]=e,t=0;t<e.length;t++)af.add(e[t])}var Fg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nf={},rf={};function Ig(t){return xt.call(rf,t)?!0:xt.call(nf,t)?!1:Fg.test(t)?rf[t]=!0:(nf[t]=!0,!1)}function Fi(t,e,a){if(Ig(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function Ii(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function ba(t,e,a,n){if(n===null)t.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+n)}}var Jo,of;function Wl(t){if(Jo===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);Jo=e&&e[1]||"",of=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jo+t+of}var Fo=!1;function Io(t,e){if(!t||Fo)return"";Fo=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(M){var z=M}Reflect.construct(t,[],Z)}else{try{Z.call()}catch(M){z=M}t.call(Z.prototype)}}else{try{throw Error()}catch(M){z=M}(Z=t())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(M){if(M&&z&&typeof M.stack=="string")return[M.stack,z.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=n.DetermineComponentFrameRoot(),f=o[0],h=o[1];if(f&&h){var w=f.split(`
`),k=h.split(`
`);for(i=n=0;n<w.length&&!w[n].includes("DetermineComponentFrameRoot");)n++;for(;i<k.length&&!k[i].includes("DetermineComponentFrameRoot");)i++;if(n===w.length||i===k.length)for(n=w.length-1,i=k.length-1;1<=n&&0<=i&&w[n]!==k[i];)i--;for(;1<=n&&0<=i;n--,i--)if(w[n]!==k[i]){if(n!==1||i!==1)do if(n--,i--,0>i||w[n]!==k[i]){var Q=`
`+w[n].replace(" at new "," at ");return t.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",t.displayName)),Q}while(1<=n&&0<=i);break}}}finally{Fo=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Wl(a):""}function Pg(t){switch(t.tag){case 26:case 27:case 5:return Wl(t.type);case 16:return Wl("Lazy");case 13:return Wl("Suspense");case 19:return Wl("SuspenseList");case 0:case 15:return Io(t.type,!1);case 11:return Io(t.type.render,!1);case 1:return Io(t.type,!0);case 31:return Wl("Activity");default:return""}}function uf(t){try{var e="";do e+=Pg(t),t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Le(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function sf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function t0(t){var e=sf(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,o=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(f){n=""+f,o.call(this,f)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(f){n=""+f},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Pi(t){t._valueTracker||(t._valueTracker=t0(t))}function cf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),n="";return t&&(n=sf(t)?t.checked?"true":"false":t.value),t=n,t!==a?(e.setValue(t),!0):!1}function tr(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var e0=/[\n"\\]/g;function Ye(t){return t.replace(e0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Po(t,e,a,n,i,o,f,h){t.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.type=f:t.removeAttribute("type"),e!=null?f==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Le(e)):t.value!==""+Le(e)&&(t.value=""+Le(e)):f!=="submit"&&f!=="reset"||t.removeAttribute("value"),e!=null?tu(t,f,Le(e)):a!=null?tu(t,f,Le(a)):n!=null&&t.removeAttribute("value"),i==null&&o!=null&&(t.defaultChecked=!!o),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?t.name=""+Le(h):t.removeAttribute("name")}function ff(t,e,a,n,i,o,f,h){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.type=o),e!=null||a!=null){if(!(o!=="submit"&&o!=="reset"||e!=null))return;a=a!=null?""+Le(a):"",e=e!=null?""+Le(e):a,h||e===t.value||(t.value=e),t.defaultValue=e}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=h?t.checked:!!n,t.defaultChecked=!!n,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.name=f)}function tu(t,e,a){e==="number"&&tr(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Jl(t,e,a,n){if(t=t.options,e){e={};for(var i=0;i<a.length;i++)e["$"+a[i]]=!0;for(a=0;a<t.length;a++)i=e.hasOwnProperty("$"+t[a].value),t[a].selected!==i&&(t[a].selected=i),i&&n&&(t[a].defaultSelected=!0)}else{for(a=""+Le(a),e=null,i=0;i<t.length;i++){if(t[i].value===a){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function df(t,e,a){if(e!=null&&(e=""+Le(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Le(a):""}function hf(t,e,a,n){if(e==null){if(n!=null){if(a!=null)throw Error(s(92));if(et(n)){if(1<n.length)throw Error(s(93));n=n[0]}a=n}a==null&&(a=""),e=a}a=Le(e),t.defaultValue=a,n=t.textContent,n===a&&n!==""&&n!==null&&(t.value=n)}function Fl(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var a0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pf(t,e,a){var n=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":n?t.setProperty(e,a):typeof a!="number"||a===0||a0.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function mf(t,e,a){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="");for(var i in e)n=e[i],e.hasOwnProperty(i)&&a[i]!==n&&pf(t,i,n)}else for(var o in e)e.hasOwnProperty(o)&&pf(t,o,e[o])}function eu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var l0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),n0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function er(t){return n0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var au=null;function lu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Il=null,Pl=null;function gf(t){var e=Vl(t);if(e&&(t=e.stateNode)){var a=t[Te]||null;t:switch(t=e.stateNode,e.type){case"input":if(Po(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ye(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var n=a[e];if(n!==t&&n.form===t.form){var i=n[Te]||null;if(!i)throw Error(s(90));Po(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<a.length;e++)n=a[e],n.form===t.form&&cf(n)}break t;case"textarea":df(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Jl(t,!!a.multiple,e,!1)}}}var nu=!1;function bf(t,e,a){if(nu)return t(e,a);nu=!0;try{var n=t(e);return n}finally{if(nu=!1,(Il!==null||Pl!==null)&&(Lr(),Il&&(e=Il,t=Pl,Pl=Il=null,gf(e),t)))for(e=0;e<t.length;e++)gf(t[e])}}function Xn(t,e){var a=t.stateNode;if(a===null)return null;var n=a[Te]||null;if(n===null)return null;a=n[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,e,typeof a));return a}var ya=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),iu=!1;if(ya)try{var Vn={};Object.defineProperty(Vn,"passive",{get:function(){iu=!0}}),window.addEventListener("test",Vn,Vn),window.removeEventListener("test",Vn,Vn)}catch{iu=!1}var La=null,ru=null,ar=null;function yf(){if(ar)return ar;var t,e=ru,a=e.length,n,i="value"in La?La.value:La.textContent,o=i.length;for(t=0;t<a&&e[t]===i[t];t++);var f=a-t;for(n=1;n<=f&&e[a-n]===i[o-n];n++);return ar=i.slice(t,1<n?1-n:void 0)}function lr(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function nr(){return!0}function vf(){return!1}function Re(t){function e(a,n,i,o,f){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=f,this.currentTarget=null;for(var h in t)t.hasOwnProperty(h)&&(a=t[h],this[h]=a?a(o):o[h]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?nr:vf,this.isPropagationStopped=vf,this}return x(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nr)},persist:function(){},isPersistent:nr}),e}var gl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ir=Re(gl),Zn=x({},gl,{view:0,detail:0}),i0=Re(Zn),ou,uu,Kn,rr=x({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Kn&&(Kn&&t.type==="mousemove"?(ou=t.screenX-Kn.screenX,uu=t.screenY-Kn.screenY):uu=ou=0,Kn=t),ou)},movementY:function(t){return"movementY"in t?t.movementY:uu}}),xf=Re(rr),r0=x({},rr,{dataTransfer:0}),o0=Re(r0),u0=x({},Zn,{relatedTarget:0}),su=Re(u0),s0=x({},gl,{animationName:0,elapsedTime:0,pseudoElement:0}),c0=Re(s0),f0=x({},gl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),d0=Re(f0),h0=x({},gl,{data:0}),Af=Re(h0),p0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},m0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},g0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function b0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=g0[t])?!!e[t]:!1}function cu(){return b0}var y0=x({},Zn,{key:function(t){if(t.key){var e=p0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=lr(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?m0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cu,charCode:function(t){return t.type==="keypress"?lr(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?lr(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),v0=Re(y0),x0=x({},rr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wf=Re(x0),A0=x({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cu}),w0=Re(A0),S0=x({},gl,{propertyName:0,elapsedTime:0,pseudoElement:0}),E0=Re(S0),T0=x({},rr,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),R0=Re(T0),D0=x({},gl,{newState:0,oldState:0}),k0=Re(D0),C0=[9,13,27,32],fu=ya&&"CompositionEvent"in window,Wn=null;ya&&"documentMode"in document&&(Wn=document.documentMode);var O0=ya&&"TextEvent"in window&&!Wn,Sf=ya&&(!fu||Wn&&8<Wn&&11>=Wn),Ef=" ",Tf=!1;function Rf(t,e){switch(t){case"keyup":return C0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Df(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var tn=!1;function z0(t,e){switch(t){case"compositionend":return Df(e);case"keypress":return e.which!==32?null:(Tf=!0,Ef);case"textInput":return t=e.data,t===Ef&&Tf?null:t;default:return null}}function M0(t,e){if(tn)return t==="compositionend"||!fu&&Rf(t,e)?(t=yf(),ar=ru=La=null,tn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Sf&&e.locale!=="ko"?null:e.data;default:return null}}var N0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!N0[t.type]:e==="textarea"}function Cf(t,e,a,n){Il?Pl?Pl.push(n):Pl=[n]:Il=n,e=Vr(e,"onChange"),0<e.length&&(a=new ir("onChange","change",null,a,n),t.push({event:a,listeners:e}))}var Jn=null,Fn=null;function _0(t){sp(t,0)}function or(t){var e=Qn(t);if(cf(e))return t}function Of(t,e){if(t==="change")return e}var zf=!1;if(ya){var du;if(ya){var hu="oninput"in document;if(!hu){var Mf=document.createElement("div");Mf.setAttribute("oninput","return;"),hu=typeof Mf.oninput=="function"}du=hu}else du=!1;zf=du&&(!document.documentMode||9<document.documentMode)}function Nf(){Jn&&(Jn.detachEvent("onpropertychange",_f),Fn=Jn=null)}function _f(t){if(t.propertyName==="value"&&or(Fn)){var e=[];Cf(e,Fn,t,lu(t)),bf(_0,e)}}function j0(t,e,a){t==="focusin"?(Nf(),Jn=e,Fn=a,Jn.attachEvent("onpropertychange",_f)):t==="focusout"&&Nf()}function B0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return or(Fn)}function H0(t,e){if(t==="click")return or(e)}function U0(t,e){if(t==="input"||t==="change")return or(e)}function $0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Oe=typeof Object.is=="function"?Object.is:$0;function In(t,e){if(Oe(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),n=Object.keys(e);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!xt.call(e,i)||!Oe(t[i],e[i]))return!1}return!0}function jf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bf(t,e){var a=jf(t);t=0;for(var n;a;){if(a.nodeType===3){if(n=t+a.textContent.length,t<=e&&n>=e)return{node:a,offset:e-t};t=n}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=jf(a)}}function Hf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Uf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=tr(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=tr(t.document)}return e}function pu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var L0=ya&&"documentMode"in document&&11>=document.documentMode,en=null,mu=null,Pn=null,gu=!1;function $f(t,e,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gu||en==null||en!==tr(n)||(n=en,"selectionStart"in n&&pu(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Pn&&In(Pn,n)||(Pn=n,n=Vr(mu,"onSelect"),0<n.length&&(e=new ir("onSelect","select",null,e,a),t.push({event:e,listeners:n}),e.target=en)))}function bl(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var an={animationend:bl("Animation","AnimationEnd"),animationiteration:bl("Animation","AnimationIteration"),animationstart:bl("Animation","AnimationStart"),transitionrun:bl("Transition","TransitionRun"),transitionstart:bl("Transition","TransitionStart"),transitioncancel:bl("Transition","TransitionCancel"),transitionend:bl("Transition","TransitionEnd")},bu={},Lf={};ya&&(Lf=document.createElement("div").style,"AnimationEvent"in window||(delete an.animationend.animation,delete an.animationiteration.animation,delete an.animationstart.animation),"TransitionEvent"in window||delete an.transitionend.transition);function yl(t){if(bu[t])return bu[t];if(!an[t])return t;var e=an[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Lf)return bu[t]=e[a];return t}var Yf=yl("animationend"),Gf=yl("animationiteration"),qf=yl("animationstart"),Y0=yl("transitionrun"),G0=yl("transitionstart"),q0=yl("transitioncancel"),Qf=yl("transitionend"),Xf=new Map,yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yu.push("scrollEnd");function Fe(t,e){Xf.set(t,e),ml(e,[t])}var Vf=new WeakMap;function Ge(t,e){if(typeof t=="object"&&t!==null){var a=Vf.get(t);return a!==void 0?a:(e={value:t,source:e,stack:uf(e)},Vf.set(t,e),e)}return{value:t,source:e,stack:uf(e)}}var qe=[],ln=0,vu=0;function ur(){for(var t=ln,e=vu=ln=0;e<t;){var a=qe[e];qe[e++]=null;var n=qe[e];qe[e++]=null;var i=qe[e];qe[e++]=null;var o=qe[e];if(qe[e++]=null,n!==null&&i!==null){var f=n.pending;f===null?i.next=i:(i.next=f.next,f.next=i),n.pending=i}o!==0&&Zf(a,i,o)}}function sr(t,e,a,n){qe[ln++]=t,qe[ln++]=e,qe[ln++]=a,qe[ln++]=n,vu|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function xu(t,e,a,n){return sr(t,e,a,n),cr(t)}function nn(t,e){return sr(t,null,null,e),cr(t)}function Zf(t,e,a){t.lanes|=a;var n=t.alternate;n!==null&&(n.lanes|=a);for(var i=!1,o=t.return;o!==null;)o.childLanes|=a,n=o.alternate,n!==null&&(n.childLanes|=a),o.tag===22&&(t=o.stateNode,t===null||t._visibility&1||(i=!0)),t=o,o=o.return;return t.tag===3?(o=t.stateNode,i&&e!==null&&(i=31-we(a),t=o.hiddenUpdates,n=t[i],n===null?t[i]=[e]:n.push(e),e.lane=a|536870912),o):null}function cr(t){if(50<Ei)throw Ei=0,Rs=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var rn={};function Q0(t,e,a,n){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ze(t,e,a,n){return new Q0(t,e,a,n)}function Au(t){return t=t.prototype,!(!t||!t.isReactComponent)}function va(t,e){var a=t.alternate;return a===null?(a=ze(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Kf(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function fr(t,e,a,n,i,o){var f=0;if(n=t,typeof t=="function")Au(t)&&(f=1);else if(typeof t=="string")f=Vb(t,a,W.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case rt:return t=ze(31,a,e,i),t.elementType=rt,t.lanes=o,t;case $:return vl(a.children,i,o,e);case J:f=8,i|=24;break;case N:return t=ze(12,a,e,i|2),t.elementType=N,t.lanes=o,t;case I:return t=ze(13,a,e,i),t.elementType=I,t.lanes=o,t;case nt:return t=ze(19,a,e,i),t.elementType=nt,t.lanes=o,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:case Y:f=10;break t;case j:f=9;break t;case F:f=11;break t;case B:f=14;break t;case ct:f=16,n=null;break t}f=29,a=Error(s(130,t===null?"null":typeof t,"")),n=null}return e=ze(f,a,e,i),e.elementType=t,e.type=n,e.lanes=o,e}function vl(t,e,a,n){return t=ze(7,t,n,e),t.lanes=a,t}function wu(t,e,a){return t=ze(6,t,null,e),t.lanes=a,t}function Su(t,e,a){return e=ze(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var on=[],un=0,dr=null,hr=0,Qe=[],Xe=0,xl=null,xa=1,Aa="";function Al(t,e){on[un++]=hr,on[un++]=dr,dr=t,hr=e}function Wf(t,e,a){Qe[Xe++]=xa,Qe[Xe++]=Aa,Qe[Xe++]=xl,xl=t;var n=xa;t=Aa;var i=32-we(n)-1;n&=~(1<<i),a+=1;var o=32-we(e)+i;if(30<o){var f=i-i%5;o=(n&(1<<f)-1).toString(32),n>>=f,i-=f,xa=1<<32-we(e)+i|a<<i|n,Aa=o+t}else xa=1<<o|a<<i|n,Aa=t}function Eu(t){t.return!==null&&(Al(t,1),Wf(t,1,0))}function Tu(t){for(;t===dr;)dr=on[--un],on[un]=null,hr=on[--un],on[un]=null;for(;t===xl;)xl=Qe[--Xe],Qe[Xe]=null,Aa=Qe[--Xe],Qe[Xe]=null,xa=Qe[--Xe],Qe[Xe]=null}var Se=null,Kt=null,Nt=!1,wl=null,ra=!1,Ru=Error(s(519));function Sl(t){var e=Error(s(418,""));throw ai(Ge(e,t)),Ru}function Jf(t){var e=t.stateNode,a=t.type,n=t.memoizedProps;switch(e[ye]=t,e[Te]=n,a){case"dialog":Rt("cancel",e),Rt("close",e);break;case"iframe":case"object":case"embed":Rt("load",e);break;case"video":case"audio":for(a=0;a<Ri.length;a++)Rt(Ri[a],e);break;case"source":Rt("error",e);break;case"img":case"image":case"link":Rt("error",e),Rt("load",e);break;case"details":Rt("toggle",e);break;case"input":Rt("invalid",e),ff(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Pi(e);break;case"select":Rt("invalid",e);break;case"textarea":Rt("invalid",e),hf(e,n.value,n.defaultValue,n.children),Pi(e)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||n.suppressHydrationWarning===!0||hp(e.textContent,a)?(n.popover!=null&&(Rt("beforetoggle",e),Rt("toggle",e)),n.onScroll!=null&&Rt("scroll",e),n.onScrollEnd!=null&&Rt("scrollend",e),n.onClick!=null&&(e.onclick=Zr),e=!0):e=!1,e||Sl(t)}function Ff(t){for(Se=t.return;Se;)switch(Se.tag){case 5:case 13:ra=!1;return;case 27:case 3:ra=!0;return;default:Se=Se.return}}function ti(t){if(t!==Se)return!1;if(!Nt)return Ff(t),Nt=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Gs(t.type,t.memoizedProps)),a=!a),a&&Kt&&Sl(t),Ff(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(e===0){Kt=Pe(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;t=t.nextSibling}Kt=null}}else e===27?(e=Kt,al(t.type)?(t=Vs,Vs=null,Kt=t):Kt=e):Kt=Se?Pe(t.stateNode.nextSibling):null;return!0}function ei(){Kt=Se=null,Nt=!1}function If(){var t=wl;return t!==null&&(Ce===null?Ce=t:Ce.push.apply(Ce,t),wl=null),t}function ai(t){wl===null?wl=[t]:wl.push(t)}var Du=q(null),El=null,wa=null;function Ya(t,e,a){H(Du,e._currentValue),e._currentValue=a}function Sa(t){t._currentValue=Du.current,at(Du)}function ku(t,e,a){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===a)break;t=t.return}}function Cu(t,e,a,n){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var o=i.dependencies;if(o!==null){var f=i.child;o=o.firstContext;t:for(;o!==null;){var h=o;o=i;for(var w=0;w<e.length;w++)if(h.context===e[w]){o.lanes|=a,h=o.alternate,h!==null&&(h.lanes|=a),ku(o.return,a,t),n||(f=null);break t}o=h.next}}else if(i.tag===18){if(f=i.return,f===null)throw Error(s(341));f.lanes|=a,o=f.alternate,o!==null&&(o.lanes|=a),ku(f,a,t),f=null}else f=i.child;if(f!==null)f.return=i;else for(f=i;f!==null;){if(f===t){f=null;break}if(i=f.sibling,i!==null){i.return=f.return,f=i;break}f=f.return}i=f}}function li(t,e,a,n){t=null;for(var i=e,o=!1;i!==null;){if(!o){if((i.flags&524288)!==0)o=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var f=i.alternate;if(f===null)throw Error(s(387));if(f=f.memoizedProps,f!==null){var h=i.type;Oe(i.pendingProps.value,f.value)||(t!==null?t.push(h):t=[h])}}else if(i===ft.current){if(f=i.alternate,f===null)throw Error(s(387));f.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Mi):t=[Mi])}i=i.return}t!==null&&Cu(e,t,a,n),e.flags|=262144}function pr(t){for(t=t.firstContext;t!==null;){if(!Oe(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Tl(t){El=t,wa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ve(t){return Pf(El,t)}function mr(t,e){return El===null&&Tl(t),Pf(t,e)}function Pf(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},wa===null){if(t===null)throw Error(s(308));wa=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else wa=wa.next=e;return a}var X0=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,n){t.push(n)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},V0=l.unstable_scheduleCallback,Z0=l.unstable_NormalPriority,le={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ou(){return{controller:new X0,data:new Map,refCount:0}}function ni(t){t.refCount--,t.refCount===0&&V0(Z0,function(){t.controller.abort()})}var ii=null,zu=0,sn=0,cn=null;function K0(t,e){if(ii===null){var a=ii=[];zu=0,sn=Ns(),cn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return zu++,e.then(td,td),e}function td(){if(--zu===0&&ii!==null){cn!==null&&(cn.status="fulfilled");var t=ii;ii=null,sn=0,cn=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function W0(t,e){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return t.then(function(){n.status="fulfilled",n.value=e;for(var i=0;i<a.length;i++)(0,a[i])(e)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var ed=C.S;C.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&K0(t,e),ed!==null&&ed(t,e)};var Rl=q(null);function Mu(){var t=Rl.current;return t!==null?t:Gt.pooledCache}function gr(t,e){e===null?H(Rl,Rl.current):H(Rl,e.pool)}function ad(){var t=Mu();return t===null?null:{parent:le._currentValue,pool:t}}var ri=Error(s(460)),ld=Error(s(474)),br=Error(s(542)),Nu={then:function(){}};function nd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function yr(){}function id(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(yr,yr),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,od(t),t;default:if(typeof e.status=="string")e.then(yr,yr);else{if(t=Gt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(n){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=n}},function(n){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,od(t),t}throw oi=e,ri}}var oi=null;function rd(){if(oi===null)throw Error(s(459));var t=oi;return oi=null,t}function od(t){if(t===ri||t===br)throw Error(s(483))}var Ga=!1;function _u(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ju(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function qa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Qa(t,e,a){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,(Bt&2)!==0){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,e=cr(t),Zf(t,null,a),e}return sr(t,n,e,a),cr(t)}function ui(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,Pc(t,a)}}function Bu(t,e){var a=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,o=null;if(a=a.firstBaseUpdate,a!==null){do{var f={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};o===null?i=o=f:o=o.next=f,a=a.next}while(a!==null);o===null?i=o=e:o=o.next=e}else i=o=e;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Hu=!1;function si(){if(Hu){var t=cn;if(t!==null)throw t}}function ci(t,e,a,n){Hu=!1;var i=t.updateQueue;Ga=!1;var o=i.firstBaseUpdate,f=i.lastBaseUpdate,h=i.shared.pending;if(h!==null){i.shared.pending=null;var w=h,k=w.next;w.next=null,f===null?o=k:f.next=k,f=w;var Q=t.alternate;Q!==null&&(Q=Q.updateQueue,h=Q.lastBaseUpdate,h!==f&&(h===null?Q.firstBaseUpdate=k:h.next=k,Q.lastBaseUpdate=w))}if(o!==null){var Z=i.baseState;f=0,Q=k=w=null,h=o;do{var z=h.lane&-536870913,M=z!==h.lane;if(M?(zt&z)===z:(n&z)===z){z!==0&&z===sn&&(Hu=!0),Q!==null&&(Q=Q.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});t:{var yt=t,mt=h;z=e;var Lt=a;switch(mt.tag){case 1:if(yt=mt.payload,typeof yt=="function"){Z=yt.call(Lt,Z,z);break t}Z=yt;break t;case 3:yt.flags=yt.flags&-65537|128;case 0:if(yt=mt.payload,z=typeof yt=="function"?yt.call(Lt,Z,z):yt,z==null)break t;Z=x({},Z,z);break t;case 2:Ga=!0}}z=h.callback,z!==null&&(t.flags|=64,M&&(t.flags|=8192),M=i.callbacks,M===null?i.callbacks=[z]:M.push(z))}else M={lane:z,tag:h.tag,payload:h.payload,callback:h.callback,next:null},Q===null?(k=Q=M,w=Z):Q=Q.next=M,f|=z;if(h=h.next,h===null){if(h=i.shared.pending,h===null)break;M=h,h=M.next,M.next=null,i.lastBaseUpdate=M,i.shared.pending=null}}while(!0);Q===null&&(w=Z),i.baseState=w,i.firstBaseUpdate=k,i.lastBaseUpdate=Q,o===null&&(i.shared.lanes=0),Ia|=f,t.lanes=f,t.memoizedState=Z}}function ud(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function sd(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)ud(a[t],e)}var fn=q(null),vr=q(0);function cd(t,e){t=Oa,H(vr,t),H(fn,e),Oa=t|e.baseLanes}function Uu(){H(vr,Oa),H(fn,fn.current)}function $u(){Oa=vr.current,at(fn),at(vr)}var Xa=0,St=null,Ut=null,Pt=null,xr=!1,dn=!1,Dl=!1,Ar=0,fi=0,hn=null,J0=0;function Ft(){throw Error(s(321))}function Lu(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Oe(t[a],e[a]))return!1;return!0}function Yu(t,e,a,n,i,o){return Xa=o,St=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,C.H=t===null||t.memoizedState===null?Zd:Kd,Dl=!1,o=a(n,i),Dl=!1,dn&&(o=dd(e,a,n,i)),fd(t),o}function fd(t){C.H=Dr;var e=Ut!==null&&Ut.next!==null;if(Xa=0,Pt=Ut=St=null,xr=!1,fi=0,hn=null,e)throw Error(s(300));t===null||ue||(t=t.dependencies,t!==null&&pr(t)&&(ue=!0))}function dd(t,e,a,n){St=t;var i=0;do{if(dn&&(hn=null),fi=0,dn=!1,25<=i)throw Error(s(301));if(i+=1,Pt=Ut=null,t.updateQueue!=null){var o=t.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}C.H=lb,o=e(a,n)}while(dn);return o}function F0(){var t=C.H,e=t.useState()[0];return e=typeof e.then=="function"?di(e):e,t=t.useState()[0],(Ut!==null?Ut.memoizedState:null)!==t&&(St.flags|=1024),e}function Gu(){var t=Ar!==0;return Ar=0,t}function qu(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function Qu(t){if(xr){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}xr=!1}Xa=0,Pt=Ut=St=null,dn=!1,fi=Ar=0,hn=null}function De(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?St.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function te(){if(Ut===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=Ut.next;var e=Pt===null?St.memoizedState:Pt.next;if(e!==null)Pt=e,Ut=t;else{if(t===null)throw St.alternate===null?Error(s(467)):Error(s(310));Ut=t,t={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},Pt===null?St.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function Xu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function di(t){var e=fi;return fi+=1,hn===null&&(hn=[]),t=id(hn,t,e),e=St,(Pt===null?e.memoizedState:Pt.next)===null&&(e=e.alternate,C.H=e===null||e.memoizedState===null?Zd:Kd),t}function wr(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return di(t);if(t.$$typeof===Y)return ve(t)}throw Error(s(438,String(t)))}function Vu(t){var e=null,a=St.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var n=St.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=Xu(),St.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),n=0;n<t;n++)a[n]=Ot;return e.index++,a}function Ea(t,e){return typeof e=="function"?e(t):e}function Sr(t){var e=te();return Zu(e,Ut,t)}function Zu(t,e,a){var n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=a;var i=t.baseQueue,o=n.pending;if(o!==null){if(i!==null){var f=i.next;i.next=o.next,o.next=f}e.baseQueue=i=o,n.pending=null}if(o=t.baseState,i===null)t.memoizedState=o;else{e=i.next;var h=f=null,w=null,k=e,Q=!1;do{var Z=k.lane&-536870913;if(Z!==k.lane?(zt&Z)===Z:(Xa&Z)===Z){var z=k.revertLane;if(z===0)w!==null&&(w=w.next={lane:0,revertLane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),Z===sn&&(Q=!0);else if((Xa&z)===z){k=k.next,z===sn&&(Q=!0);continue}else Z={lane:0,revertLane:k.revertLane,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},w===null?(h=w=Z,f=o):w=w.next=Z,St.lanes|=z,Ia|=z;Z=k.action,Dl&&a(o,Z),o=k.hasEagerState?k.eagerState:a(o,Z)}else z={lane:Z,revertLane:k.revertLane,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},w===null?(h=w=z,f=o):w=w.next=z,St.lanes|=Z,Ia|=Z;k=k.next}while(k!==null&&k!==e);if(w===null?f=o:w.next=h,!Oe(o,t.memoizedState)&&(ue=!0,Q&&(a=cn,a!==null)))throw a;t.memoizedState=o,t.baseState=f,t.baseQueue=w,n.lastRenderedState=o}return i===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function Ku(t){var e=te(),a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var n=a.dispatch,i=a.pending,o=e.memoizedState;if(i!==null){a.pending=null;var f=i=i.next;do o=t(o,f.action),f=f.next;while(f!==i);Oe(o,e.memoizedState)||(ue=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),a.lastRenderedState=o}return[o,n]}function hd(t,e,a){var n=St,i=te(),o=Nt;if(o){if(a===void 0)throw Error(s(407));a=a()}else a=e();var f=!Oe((Ut||i).memoizedState,a);f&&(i.memoizedState=a,ue=!0),i=i.queue;var h=gd.bind(null,n,i,t);if(hi(2048,8,h,[t]),i.getSnapshot!==e||f||Pt!==null&&Pt.memoizedState.tag&1){if(n.flags|=2048,pn(9,Er(),md.bind(null,n,i,a,e),null),Gt===null)throw Error(s(349));o||(Xa&124)!==0||pd(n,e,a)}return a}function pd(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=St.updateQueue,e===null?(e=Xu(),St.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function md(t,e,a,n){e.value=a,e.getSnapshot=n,bd(e)&&yd(t)}function gd(t,e,a){return a(function(){bd(e)&&yd(t)})}function bd(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Oe(t,a)}catch{return!0}}function yd(t){var e=nn(t,2);e!==null&&Be(e,t,2)}function Wu(t){var e=De();if(typeof t=="function"){var a=t;if(t=a(),Dl){ia(!0);try{a()}finally{ia(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},e}function vd(t,e,a,n){return t.baseState=a,Zu(t,Ut,typeof n=="function"?n:Ea)}function I0(t,e,a,n,i){if(Rr(t))throw Error(s(485));if(t=e.action,t!==null){var o={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){o.listeners.push(f)}};C.T!==null?a(!0):o.isTransition=!1,n(o),a=e.pending,a===null?(o.next=e.pending=o,xd(e,o)):(o.next=a.next,e.pending=a.next=o)}}function xd(t,e){var a=e.action,n=e.payload,i=t.state;if(e.isTransition){var o=C.T,f={};C.T=f;try{var h=a(i,n),w=C.S;w!==null&&w(f,h),Ad(t,e,h)}catch(k){Ju(t,e,k)}finally{C.T=o}}else try{o=a(i,n),Ad(t,e,o)}catch(k){Ju(t,e,k)}}function Ad(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){wd(t,e,n)},function(n){return Ju(t,e,n)}):wd(t,e,a)}function wd(t,e,a){e.status="fulfilled",e.value=a,Sd(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,xd(t,a)))}function Ju(t,e,a){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=a,Sd(e),e=e.next;while(e!==n)}t.action=null}function Sd(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Ed(t,e){return e}function Td(t,e){if(Nt){var a=Gt.formState;if(a!==null){t:{var n=St;if(Nt){if(Kt){e:{for(var i=Kt,o=ra;i.nodeType!==8;){if(!o){i=null;break e}if(i=Pe(i.nextSibling),i===null){i=null;break e}}o=i.data,i=o==="F!"||o==="F"?i:null}if(i){Kt=Pe(i.nextSibling),n=i.data==="F!";break t}}Sl(n)}n=!1}n&&(e=a[0])}}return a=De(),a.memoizedState=a.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ed,lastRenderedState:e},a.queue=n,a=Qd.bind(null,St,n),n.dispatch=a,n=Wu(!1),o=es.bind(null,St,!1,n.queue),n=De(),i={state:e,dispatch:null,action:t,pending:null},n.queue=i,a=I0.bind(null,St,i,o,a),i.dispatch=a,n.memoizedState=t,[e,a,!1]}function Rd(t){var e=te();return Dd(e,Ut,t)}function Dd(t,e,a){if(e=Zu(t,e,Ed)[0],t=Sr(Ea)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=di(e)}catch(f){throw f===ri?br:f}else n=e;e=te();var i=e.queue,o=i.dispatch;return a!==e.memoizedState&&(St.flags|=2048,pn(9,Er(),P0.bind(null,i,a),null)),[n,o,t]}function P0(t,e){t.action=e}function kd(t){var e=te(),a=Ut;if(a!==null)return Dd(e,a,t);te(),e=e.memoizedState,a=te();var n=a.queue.dispatch;return a.memoizedState=t,[e,n,!1]}function pn(t,e,a,n){return t={tag:t,create:a,deps:n,inst:e,next:null},e=St.updateQueue,e===null&&(e=Xu(),St.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(n=a.next,a.next=t,t.next=n,e.lastEffect=t),t}function Er(){return{destroy:void 0,resource:void 0}}function Cd(){return te().memoizedState}function Tr(t,e,a,n){var i=De();n=n===void 0?null:n,St.flags|=t,i.memoizedState=pn(1|e,Er(),a,n)}function hi(t,e,a,n){var i=te();n=n===void 0?null:n;var o=i.memoizedState.inst;Ut!==null&&n!==null&&Lu(n,Ut.memoizedState.deps)?i.memoizedState=pn(e,o,a,n):(St.flags|=t,i.memoizedState=pn(1|e,o,a,n))}function Od(t,e){Tr(8390656,8,t,e)}function zd(t,e){hi(2048,8,t,e)}function Md(t,e){return hi(4,2,t,e)}function Nd(t,e){return hi(4,4,t,e)}function _d(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function jd(t,e,a){a=a!=null?a.concat([t]):null,hi(4,4,_d.bind(null,e,t),a)}function Fu(){}function Bd(t,e){var a=te();e=e===void 0?null:e;var n=a.memoizedState;return e!==null&&Lu(e,n[1])?n[0]:(a.memoizedState=[t,e],t)}function Hd(t,e){var a=te();e=e===void 0?null:e;var n=a.memoizedState;if(e!==null&&Lu(e,n[1]))return n[0];if(n=t(),Dl){ia(!0);try{t()}finally{ia(!1)}}return a.memoizedState=[n,e],n}function Iu(t,e,a){return a===void 0||(Xa&1073741824)!==0?t.memoizedState=e:(t.memoizedState=a,t=Lh(),St.lanes|=t,Ia|=t,a)}function Ud(t,e,a,n){return Oe(a,e)?a:fn.current!==null?(t=Iu(t,a,n),Oe(t,e)||(ue=!0),t):(Xa&42)===0?(ue=!0,t.memoizedState=a):(t=Lh(),St.lanes|=t,Ia|=t,e)}function $d(t,e,a,n,i){var o=G.p;G.p=o!==0&&8>o?o:8;var f=C.T,h={};C.T=h,es(t,!1,e,a);try{var w=i(),k=C.S;if(k!==null&&k(h,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var Q=W0(w,n);pi(t,e,Q,je(t))}else pi(t,e,n,je(t))}catch(Z){pi(t,e,{then:function(){},status:"rejected",reason:Z},je())}finally{G.p=o,C.T=f}}function tb(){}function Pu(t,e,a,n){if(t.tag!==5)throw Error(s(476));var i=Ld(t).queue;$d(t,i,e,P,a===null?tb:function(){return Yd(t),a(n)})}function Ld(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:P},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Yd(t){var e=Ld(t).next.queue;pi(t,e,{},je())}function ts(){return ve(Mi)}function Gd(){return te().memoizedState}function qd(){return te().memoizedState}function eb(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=je();t=qa(a);var n=Qa(e,t,a);n!==null&&(Be(n,e,a),ui(n,e,a)),e={cache:Ou()},t.payload=e;return}e=e.return}}function ab(t,e,a){var n=je();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Rr(t)?Xd(e,a):(a=xu(t,e,a,n),a!==null&&(Be(a,t,n),Vd(a,e,n)))}function Qd(t,e,a){var n=je();pi(t,e,a,n)}function pi(t,e,a,n){var i={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Rr(t))Xd(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var f=e.lastRenderedState,h=o(f,a);if(i.hasEagerState=!0,i.eagerState=h,Oe(h,f))return sr(t,e,i,0),Gt===null&&ur(),!1}catch{}finally{}if(a=xu(t,e,i,n),a!==null)return Be(a,t,n),Vd(a,e,n),!0}return!1}function es(t,e,a,n){if(n={lane:2,revertLane:Ns(),action:n,hasEagerState:!1,eagerState:null,next:null},Rr(t)){if(e)throw Error(s(479))}else e=xu(t,a,n,2),e!==null&&Be(e,t,2)}function Rr(t){var e=t.alternate;return t===St||e!==null&&e===St}function Xd(t,e){dn=xr=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Vd(t,e,a){if((a&4194048)!==0){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,Pc(t,a)}}var Dr={readContext:ve,use:wr,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useLayoutEffect:Ft,useInsertionEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useSyncExternalStore:Ft,useId:Ft,useHostTransitionStatus:Ft,useFormState:Ft,useActionState:Ft,useOptimistic:Ft,useMemoCache:Ft,useCacheRefresh:Ft},Zd={readContext:ve,use:wr,useCallback:function(t,e){return De().memoizedState=[t,e===void 0?null:e],t},useContext:ve,useEffect:Od,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Tr(4194308,4,_d.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Tr(4194308,4,t,e)},useInsertionEffect:function(t,e){Tr(4,2,t,e)},useMemo:function(t,e){var a=De();e=e===void 0?null:e;var n=t();if(Dl){ia(!0);try{t()}finally{ia(!1)}}return a.memoizedState=[n,e],n},useReducer:function(t,e,a){var n=De();if(a!==void 0){var i=a(e);if(Dl){ia(!0);try{a(e)}finally{ia(!1)}}}else i=e;return n.memoizedState=n.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},n.queue=t,t=t.dispatch=ab.bind(null,St,t),[n.memoizedState,t]},useRef:function(t){var e=De();return t={current:t},e.memoizedState=t},useState:function(t){t=Wu(t);var e=t.queue,a=Qd.bind(null,St,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:Fu,useDeferredValue:function(t,e){var a=De();return Iu(a,t,e)},useTransition:function(){var t=Wu(!1);return t=$d.bind(null,St,t.queue,!0,!1),De().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var n=St,i=De();if(Nt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=e(),Gt===null)throw Error(s(349));(zt&124)!==0||pd(n,e,a)}i.memoizedState=a;var o={value:a,getSnapshot:e};return i.queue=o,Od(gd.bind(null,n,o,t),[t]),n.flags|=2048,pn(9,Er(),md.bind(null,n,o,a,e),null),a},useId:function(){var t=De(),e=Gt.identifierPrefix;if(Nt){var a=Aa,n=xa;a=(n&~(1<<32-we(n)-1)).toString(32)+a,e="«"+e+"R"+a,a=Ar++,0<a&&(e+="H"+a.toString(32)),e+="»"}else a=J0++,e="«"+e+"r"+a.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:ts,useFormState:Td,useActionState:Td,useOptimistic:function(t){var e=De();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=es.bind(null,St,!0,a),a.dispatch=e,[t,e]},useMemoCache:Vu,useCacheRefresh:function(){return De().memoizedState=eb.bind(null,St)}},Kd={readContext:ve,use:wr,useCallback:Bd,useContext:ve,useEffect:zd,useImperativeHandle:jd,useInsertionEffect:Md,useLayoutEffect:Nd,useMemo:Hd,useReducer:Sr,useRef:Cd,useState:function(){return Sr(Ea)},useDebugValue:Fu,useDeferredValue:function(t,e){var a=te();return Ud(a,Ut.memoizedState,t,e)},useTransition:function(){var t=Sr(Ea)[0],e=te().memoizedState;return[typeof t=="boolean"?t:di(t),e]},useSyncExternalStore:hd,useId:Gd,useHostTransitionStatus:ts,useFormState:Rd,useActionState:Rd,useOptimistic:function(t,e){var a=te();return vd(a,Ut,t,e)},useMemoCache:Vu,useCacheRefresh:qd},lb={readContext:ve,use:wr,useCallback:Bd,useContext:ve,useEffect:zd,useImperativeHandle:jd,useInsertionEffect:Md,useLayoutEffect:Nd,useMemo:Hd,useReducer:Ku,useRef:Cd,useState:function(){return Ku(Ea)},useDebugValue:Fu,useDeferredValue:function(t,e){var a=te();return Ut===null?Iu(a,t,e):Ud(a,Ut.memoizedState,t,e)},useTransition:function(){var t=Ku(Ea)[0],e=te().memoizedState;return[typeof t=="boolean"?t:di(t),e]},useSyncExternalStore:hd,useId:Gd,useHostTransitionStatus:ts,useFormState:kd,useActionState:kd,useOptimistic:function(t,e){var a=te();return Ut!==null?vd(a,Ut,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Vu,useCacheRefresh:qd},mn=null,mi=0;function kr(t){var e=mi;return mi+=1,mn===null&&(mn=[]),id(mn,t,e)}function gi(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Cr(t,e){throw e.$$typeof===E?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Wd(t){var e=t._init;return e(t._payload)}function Jd(t){function e(R,T){if(t){var D=R.deletions;D===null?(R.deletions=[T],R.flags|=16):D.push(T)}}function a(R,T){if(!t)return null;for(;T!==null;)e(R,T),T=T.sibling;return null}function n(R){for(var T=new Map;R!==null;)R.key!==null?T.set(R.key,R):T.set(R.index,R),R=R.sibling;return T}function i(R,T){return R=va(R,T),R.index=0,R.sibling=null,R}function o(R,T,D){return R.index=D,t?(D=R.alternate,D!==null?(D=D.index,D<T?(R.flags|=67108866,T):D):(R.flags|=67108866,T)):(R.flags|=1048576,T)}function f(R){return t&&R.alternate===null&&(R.flags|=67108866),R}function h(R,T,D,V){return T===null||T.tag!==6?(T=wu(D,R.mode,V),T.return=R,T):(T=i(T,D),T.return=R,T)}function w(R,T,D,V){var st=D.type;return st===$?Q(R,T,D.props.children,V,D.key):T!==null&&(T.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===ct&&Wd(st)===T.type)?(T=i(T,D.props),gi(T,D),T.return=R,T):(T=fr(D.type,D.key,D.props,null,R.mode,V),gi(T,D),T.return=R,T)}function k(R,T,D,V){return T===null||T.tag!==4||T.stateNode.containerInfo!==D.containerInfo||T.stateNode.implementation!==D.implementation?(T=Su(D,R.mode,V),T.return=R,T):(T=i(T,D.children||[]),T.return=R,T)}function Q(R,T,D,V,st){return T===null||T.tag!==7?(T=vl(D,R.mode,V,st),T.return=R,T):(T=i(T,D),T.return=R,T)}function Z(R,T,D){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=wu(""+T,R.mode,D),T.return=R,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case O:return D=fr(T.type,T.key,T.props,null,R.mode,D),gi(D,T),D.return=R,D;case L:return T=Su(T,R.mode,D),T.return=R,T;case ct:var V=T._init;return T=V(T._payload),Z(R,T,D)}if(et(T)||vt(T))return T=vl(T,R.mode,D,null),T.return=R,T;if(typeof T.then=="function")return Z(R,kr(T),D);if(T.$$typeof===Y)return Z(R,mr(R,T),D);Cr(R,T)}return null}function z(R,T,D,V){var st=T!==null?T.key:null;if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return st!==null?null:h(R,T,""+D,V);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case O:return D.key===st?w(R,T,D,V):null;case L:return D.key===st?k(R,T,D,V):null;case ct:return st=D._init,D=st(D._payload),z(R,T,D,V)}if(et(D)||vt(D))return st!==null?null:Q(R,T,D,V,null);if(typeof D.then=="function")return z(R,T,kr(D),V);if(D.$$typeof===Y)return z(R,T,mr(R,D),V);Cr(R,D)}return null}function M(R,T,D,V,st){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return R=R.get(D)||null,h(T,R,""+V,st);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case O:return R=R.get(V.key===null?D:V.key)||null,w(T,R,V,st);case L:return R=R.get(V.key===null?D:V.key)||null,k(T,R,V,st);case ct:var Et=V._init;return V=Et(V._payload),M(R,T,D,V,st)}if(et(V)||vt(V))return R=R.get(D)||null,Q(T,R,V,st,null);if(typeof V.then=="function")return M(R,T,D,kr(V),st);if(V.$$typeof===Y)return M(R,T,D,mr(T,V),st);Cr(T,V)}return null}function yt(R,T,D,V){for(var st=null,Et=null,dt=T,gt=T=0,ce=null;dt!==null&&gt<D.length;gt++){dt.index>gt?(ce=dt,dt=null):ce=dt.sibling;var Mt=z(R,dt,D[gt],V);if(Mt===null){dt===null&&(dt=ce);break}t&&dt&&Mt.alternate===null&&e(R,dt),T=o(Mt,T,gt),Et===null?st=Mt:Et.sibling=Mt,Et=Mt,dt=ce}if(gt===D.length)return a(R,dt),Nt&&Al(R,gt),st;if(dt===null){for(;gt<D.length;gt++)dt=Z(R,D[gt],V),dt!==null&&(T=o(dt,T,gt),Et===null?st=dt:Et.sibling=dt,Et=dt);return Nt&&Al(R,gt),st}for(dt=n(dt);gt<D.length;gt++)ce=M(dt,R,gt,D[gt],V),ce!==null&&(t&&ce.alternate!==null&&dt.delete(ce.key===null?gt:ce.key),T=o(ce,T,gt),Et===null?st=ce:Et.sibling=ce,Et=ce);return t&&dt.forEach(function(ol){return e(R,ol)}),Nt&&Al(R,gt),st}function mt(R,T,D,V){if(D==null)throw Error(s(151));for(var st=null,Et=null,dt=T,gt=T=0,ce=null,Mt=D.next();dt!==null&&!Mt.done;gt++,Mt=D.next()){dt.index>gt?(ce=dt,dt=null):ce=dt.sibling;var ol=z(R,dt,Mt.value,V);if(ol===null){dt===null&&(dt=ce);break}t&&dt&&ol.alternate===null&&e(R,dt),T=o(ol,T,gt),Et===null?st=ol:Et.sibling=ol,Et=ol,dt=ce}if(Mt.done)return a(R,dt),Nt&&Al(R,gt),st;if(dt===null){for(;!Mt.done;gt++,Mt=D.next())Mt=Z(R,Mt.value,V),Mt!==null&&(T=o(Mt,T,gt),Et===null?st=Mt:Et.sibling=Mt,Et=Mt);return Nt&&Al(R,gt),st}for(dt=n(dt);!Mt.done;gt++,Mt=D.next())Mt=M(dt,R,gt,Mt.value,V),Mt!==null&&(t&&Mt.alternate!==null&&dt.delete(Mt.key===null?gt:Mt.key),T=o(Mt,T,gt),Et===null?st=Mt:Et.sibling=Mt,Et=Mt);return t&&dt.forEach(function(ny){return e(R,ny)}),Nt&&Al(R,gt),st}function Lt(R,T,D,V){if(typeof D=="object"&&D!==null&&D.type===$&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case O:t:{for(var st=D.key;T!==null;){if(T.key===st){if(st=D.type,st===$){if(T.tag===7){a(R,T.sibling),V=i(T,D.props.children),V.return=R,R=V;break t}}else if(T.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===ct&&Wd(st)===T.type){a(R,T.sibling),V=i(T,D.props),gi(V,D),V.return=R,R=V;break t}a(R,T);break}else e(R,T);T=T.sibling}D.type===$?(V=vl(D.props.children,R.mode,V,D.key),V.return=R,R=V):(V=fr(D.type,D.key,D.props,null,R.mode,V),gi(V,D),V.return=R,R=V)}return f(R);case L:t:{for(st=D.key;T!==null;){if(T.key===st)if(T.tag===4&&T.stateNode.containerInfo===D.containerInfo&&T.stateNode.implementation===D.implementation){a(R,T.sibling),V=i(T,D.children||[]),V.return=R,R=V;break t}else{a(R,T);break}else e(R,T);T=T.sibling}V=Su(D,R.mode,V),V.return=R,R=V}return f(R);case ct:return st=D._init,D=st(D._payload),Lt(R,T,D,V)}if(et(D))return yt(R,T,D,V);if(vt(D)){if(st=vt(D),typeof st!="function")throw Error(s(150));return D=st.call(D),mt(R,T,D,V)}if(typeof D.then=="function")return Lt(R,T,kr(D),V);if(D.$$typeof===Y)return Lt(R,T,mr(R,D),V);Cr(R,D)}return typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint"?(D=""+D,T!==null&&T.tag===6?(a(R,T.sibling),V=i(T,D),V.return=R,R=V):(a(R,T),V=wu(D,R.mode,V),V.return=R,R=V),f(R)):a(R,T)}return function(R,T,D,V){try{mi=0;var st=Lt(R,T,D,V);return mn=null,st}catch(dt){if(dt===ri||dt===br)throw dt;var Et=ze(29,dt,null,R.mode);return Et.lanes=V,Et.return=R,Et}finally{}}}var gn=Jd(!0),Fd=Jd(!1),Ve=q(null),oa=null;function Va(t){var e=t.alternate;H(ne,ne.current&1),H(Ve,t),oa===null&&(e===null||fn.current!==null||e.memoizedState!==null)&&(oa=t)}function Id(t){if(t.tag===22){if(H(ne,ne.current),H(Ve,t),oa===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(oa=t)}}else Za()}function Za(){H(ne,ne.current),H(Ve,Ve.current)}function Ta(t){at(Ve),oa===t&&(oa=null),at(ne)}var ne=q(0);function Or(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Xs(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function as(t,e,a,n){e=t.memoizedState,a=a(n,e),a=a==null?e:x({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ls={enqueueSetState:function(t,e,a){t=t._reactInternals;var n=je(),i=qa(n);i.payload=e,a!=null&&(i.callback=a),e=Qa(t,i,n),e!==null&&(Be(e,t,n),ui(e,t,n))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var n=je(),i=qa(n);i.tag=1,i.payload=e,a!=null&&(i.callback=a),e=Qa(t,i,n),e!==null&&(Be(e,t,n),ui(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=je(),n=qa(a);n.tag=2,e!=null&&(n.callback=e),e=Qa(t,n,a),e!==null&&(Be(e,t,a),ui(e,t,a))}};function Pd(t,e,a,n,i,o,f){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,o,f):e.prototype&&e.prototype.isPureReactComponent?!In(a,n)||!In(i,o):!0}function th(t,e,a,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,n),e.state!==t&&ls.enqueueReplaceState(e,e.state,null)}function kl(t,e){var a=e;if("ref"in e){a={};for(var n in e)n!=="ref"&&(a[n]=e[n])}if(t=t.defaultProps){a===e&&(a=x({},a));for(var i in t)a[i]===void 0&&(a[i]=t[i])}return a}var zr=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function eh(t){zr(t)}function ah(t){console.error(t)}function lh(t){zr(t)}function Mr(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function nh(t,e,a){try{var n=t.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function ns(t,e,a){return a=qa(a),a.tag=3,a.payload={element:null},a.callback=function(){Mr(t,e)},a}function ih(t){return t=qa(t),t.tag=3,t}function rh(t,e,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var o=n.value;t.payload=function(){return i(o)},t.callback=function(){nh(e,a,n)}}var f=a.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(t.callback=function(){nh(e,a,n),typeof i!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var h=n.stack;this.componentDidCatch(n.value,{componentStack:h!==null?h:""})})}function nb(t,e,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=a.alternate,e!==null&&li(e,a,i,!0),a=Ve.current,a!==null){switch(a.tag){case 13:return oa===null?ks():a.alternate===null&&Wt===0&&(Wt=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Nu?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([n]):e.add(n),Os(t,n,i)),!1;case 22:return a.flags|=65536,n===Nu?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([n]):a.add(n)),Os(t,n,i)),!1}throw Error(s(435,a.tag))}return Os(t,n,i),ks(),!1}if(Nt)return e=Ve.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,n!==Ru&&(t=Error(s(422),{cause:n}),ai(Ge(t,a)))):(n!==Ru&&(e=Error(s(423),{cause:n}),ai(Ge(e,a))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,n=Ge(n,a),i=ns(t.stateNode,n,i),Bu(t,i),Wt!==4&&(Wt=2)),!1;var o=Error(s(520),{cause:n});if(o=Ge(o,a),Si===null?Si=[o]:Si.push(o),Wt!==4&&(Wt=2),e===null)return!0;n=Ge(n,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=i&-i,a.lanes|=t,t=ns(a.stateNode,n,t),Bu(a,t),!1;case 1:if(e=a.type,o=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(Pa===null||!Pa.has(o))))return a.flags|=65536,i&=-i,a.lanes|=i,i=ih(i),rh(i,t,a,n),Bu(a,i),!1}a=a.return}while(a!==null);return!1}var oh=Error(s(461)),ue=!1;function he(t,e,a,n){e.child=t===null?Fd(e,null,a,n):gn(e,t.child,a,n)}function uh(t,e,a,n,i){a=a.render;var o=e.ref;if("ref"in n){var f={};for(var h in n)h!=="ref"&&(f[h]=n[h])}else f=n;return Tl(e),n=Yu(t,e,a,f,o,i),h=Gu(),t!==null&&!ue?(qu(t,e,i),Ra(t,e,i)):(Nt&&h&&Eu(e),e.flags|=1,he(t,e,n,i),e.child)}function sh(t,e,a,n,i){if(t===null){var o=a.type;return typeof o=="function"&&!Au(o)&&o.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=o,ch(t,e,o,n,i)):(t=fr(a.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!ds(t,i)){var f=o.memoizedProps;if(a=a.compare,a=a!==null?a:In,a(f,n)&&t.ref===e.ref)return Ra(t,e,i)}return e.flags|=1,t=va(o,n),t.ref=e.ref,t.return=e,e.child=t}function ch(t,e,a,n,i){if(t!==null){var o=t.memoizedProps;if(In(o,n)&&t.ref===e.ref)if(ue=!1,e.pendingProps=n=o,ds(t,i))(t.flags&131072)!==0&&(ue=!0);else return e.lanes=t.lanes,Ra(t,e,i)}return is(t,e,a,n,i)}function fh(t,e,a){var n=e.pendingProps,i=n.children,o=t!==null?t.memoizedState:null;if(n.mode==="hidden"){if((e.flags&128)!==0){if(n=o!==null?o.baseLanes|a:a,t!==null){for(i=e.child=t.child,o=0;i!==null;)o=o|i.lanes|i.childLanes,i=i.sibling;e.childLanes=o&~n}else e.childLanes=0,e.child=null;return dh(t,e,n,a)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&gr(e,o!==null?o.cachePool:null),o!==null?cd(e,o):Uu(),Id(e);else return e.lanes=e.childLanes=536870912,dh(t,e,o!==null?o.baseLanes|a:a,a)}else o!==null?(gr(e,o.cachePool),cd(e,o),Za(),e.memoizedState=null):(t!==null&&gr(e,null),Uu(),Za());return he(t,e,i,a),e.child}function dh(t,e,a,n){var i=Mu();return i=i===null?null:{parent:le._currentValue,pool:i},e.memoizedState={baseLanes:a,cachePool:i},t!==null&&gr(e,null),Uu(),Id(e),t!==null&&li(t,e,n,!0),null}function Nr(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function is(t,e,a,n,i){return Tl(e),a=Yu(t,e,a,n,void 0,i),n=Gu(),t!==null&&!ue?(qu(t,e,i),Ra(t,e,i)):(Nt&&n&&Eu(e),e.flags|=1,he(t,e,a,i),e.child)}function hh(t,e,a,n,i,o){return Tl(e),e.updateQueue=null,a=dd(e,n,a,i),fd(t),n=Gu(),t!==null&&!ue?(qu(t,e,o),Ra(t,e,o)):(Nt&&n&&Eu(e),e.flags|=1,he(t,e,a,o),e.child)}function ph(t,e,a,n,i){if(Tl(e),e.stateNode===null){var o=rn,f=a.contextType;typeof f=="object"&&f!==null&&(o=ve(f)),o=new a(n,o),e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=ls,e.stateNode=o,o._reactInternals=e,o=e.stateNode,o.props=n,o.state=e.memoizedState,o.refs={},_u(e),f=a.contextType,o.context=typeof f=="object"&&f!==null?ve(f):rn,o.state=e.memoizedState,f=a.getDerivedStateFromProps,typeof f=="function"&&(as(e,a,f,n),o.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(f=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),f!==o.state&&ls.enqueueReplaceState(o,o.state,null),ci(e,n,o,i),si(),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(t===null){o=e.stateNode;var h=e.memoizedProps,w=kl(a,h);o.props=w;var k=o.context,Q=a.contextType;f=rn,typeof Q=="object"&&Q!==null&&(f=ve(Q));var Z=a.getDerivedStateFromProps;Q=typeof Z=="function"||typeof o.getSnapshotBeforeUpdate=="function",h=e.pendingProps!==h,Q||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(h||k!==f)&&th(e,o,n,f),Ga=!1;var z=e.memoizedState;o.state=z,ci(e,n,o,i),si(),k=e.memoizedState,h||z!==k||Ga?(typeof Z=="function"&&(as(e,a,Z,n),k=e.memoizedState),(w=Ga||Pd(e,a,w,n,z,k,f))?(Q||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=k),o.props=n,o.state=k,o.context=f,n=w):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{o=e.stateNode,ju(t,e),f=e.memoizedProps,Q=kl(a,f),o.props=Q,Z=e.pendingProps,z=o.context,k=a.contextType,w=rn,typeof k=="object"&&k!==null&&(w=ve(k)),h=a.getDerivedStateFromProps,(k=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(f!==Z||z!==w)&&th(e,o,n,w),Ga=!1,z=e.memoizedState,o.state=z,ci(e,n,o,i),si();var M=e.memoizedState;f!==Z||z!==M||Ga||t!==null&&t.dependencies!==null&&pr(t.dependencies)?(typeof h=="function"&&(as(e,a,h,n),M=e.memoizedState),(Q=Ga||Pd(e,a,Q,n,z,M,w)||t!==null&&t.dependencies!==null&&pr(t.dependencies))?(k||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,M,w),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,M,w)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||f===t.memoizedProps&&z===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||f===t.memoizedProps&&z===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=M),o.props=n,o.state=M,o.context=w,n=Q):(typeof o.componentDidUpdate!="function"||f===t.memoizedProps&&z===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||f===t.memoizedProps&&z===t.memoizedState||(e.flags|=1024),n=!1)}return o=n,Nr(t,e),n=(e.flags&128)!==0,o||n?(o=e.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:o.render(),e.flags|=1,t!==null&&n?(e.child=gn(e,t.child,null,i),e.child=gn(e,null,a,i)):he(t,e,a,i),e.memoizedState=o.state,t=e.child):t=Ra(t,e,i),t}function mh(t,e,a,n){return ei(),e.flags|=256,he(t,e,a,n),e.child}var rs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function os(t){return{baseLanes:t,cachePool:ad()}}function us(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=Ze),t}function gh(t,e,a){var n=e.pendingProps,i=!1,o=(e.flags&128)!==0,f;if((f=o)||(f=t!==null&&t.memoizedState===null?!1:(ne.current&2)!==0),f&&(i=!0,e.flags&=-129),f=(e.flags&32)!==0,e.flags&=-33,t===null){if(Nt){if(i?Va(e):Za(),Nt){var h=Kt,w;if(w=h){t:{for(w=h,h=ra;w.nodeType!==8;){if(!h){h=null;break t}if(w=Pe(w.nextSibling),w===null){h=null;break t}}h=w}h!==null?(e.memoizedState={dehydrated:h,treeContext:xl!==null?{id:xa,overflow:Aa}:null,retryLane:536870912,hydrationErrors:null},w=ze(18,null,null,0),w.stateNode=h,w.return=e,e.child=w,Se=e,Kt=null,w=!0):w=!1}w||Sl(e)}if(h=e.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return Xs(h)?e.lanes=32:e.lanes=536870912,null;Ta(e)}return h=n.children,n=n.fallback,i?(Za(),i=e.mode,h=_r({mode:"hidden",children:h},i),n=vl(n,i,a,null),h.return=e,n.return=e,h.sibling=n,e.child=h,i=e.child,i.memoizedState=os(a),i.childLanes=us(t,f,a),e.memoizedState=rs,n):(Va(e),ss(e,h))}if(w=t.memoizedState,w!==null&&(h=w.dehydrated,h!==null)){if(o)e.flags&256?(Va(e),e.flags&=-257,e=cs(t,e,a)):e.memoizedState!==null?(Za(),e.child=t.child,e.flags|=128,e=null):(Za(),i=n.fallback,h=e.mode,n=_r({mode:"visible",children:n.children},h),i=vl(i,h,a,null),i.flags|=2,n.return=e,i.return=e,n.sibling=i,e.child=n,gn(e,t.child,null,a),n=e.child,n.memoizedState=os(a),n.childLanes=us(t,f,a),e.memoizedState=rs,e=i);else if(Va(e),Xs(h)){if(f=h.nextSibling&&h.nextSibling.dataset,f)var k=f.dgst;f=k,n=Error(s(419)),n.stack="",n.digest=f,ai({value:n,source:null,stack:null}),e=cs(t,e,a)}else if(ue||li(t,e,a,!1),f=(a&t.childLanes)!==0,ue||f){if(f=Gt,f!==null&&(n=a&-a,n=(n&42)!==0?1:Vo(n),n=(n&(f.suspendedLanes|a))!==0?0:n,n!==0&&n!==w.retryLane))throw w.retryLane=n,nn(t,n),Be(f,t,n),oh;h.data==="$?"||ks(),e=cs(t,e,a)}else h.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=w.treeContext,Kt=Pe(h.nextSibling),Se=e,Nt=!0,wl=null,ra=!1,t!==null&&(Qe[Xe++]=xa,Qe[Xe++]=Aa,Qe[Xe++]=xl,xa=t.id,Aa=t.overflow,xl=e),e=ss(e,n.children),e.flags|=4096);return e}return i?(Za(),i=n.fallback,h=e.mode,w=t.child,k=w.sibling,n=va(w,{mode:"hidden",children:n.children}),n.subtreeFlags=w.subtreeFlags&65011712,k!==null?i=va(k,i):(i=vl(i,h,a,null),i.flags|=2),i.return=e,n.return=e,n.sibling=i,e.child=n,n=i,i=e.child,h=t.child.memoizedState,h===null?h=os(a):(w=h.cachePool,w!==null?(k=le._currentValue,w=w.parent!==k?{parent:k,pool:k}:w):w=ad(),h={baseLanes:h.baseLanes|a,cachePool:w}),i.memoizedState=h,i.childLanes=us(t,f,a),e.memoizedState=rs,n):(Va(e),a=t.child,t=a.sibling,a=va(a,{mode:"visible",children:n.children}),a.return=e,a.sibling=null,t!==null&&(f=e.deletions,f===null?(e.deletions=[t],e.flags|=16):f.push(t)),e.child=a,e.memoizedState=null,a)}function ss(t,e){return e=_r({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function _r(t,e){return t=ze(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function cs(t,e,a){return gn(e,t.child,null,a),t=ss(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function bh(t,e,a){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),ku(t.return,e,a)}function fs(t,e,a,n,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=a,o.tailMode=i)}function yh(t,e,a){var n=e.pendingProps,i=n.revealOrder,o=n.tail;if(he(t,e,n.children,a),n=ne.current,(n&2)!==0)n=n&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bh(t,a,e);else if(t.tag===19)bh(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}switch(H(ne,n),i){case"forwards":for(a=e.child,i=null;a!==null;)t=a.alternate,t!==null&&Or(t)===null&&(i=a),a=a.sibling;a=i,a===null?(i=e.child,e.child=null):(i=a.sibling,a.sibling=null),fs(e,!1,i,a,o);break;case"backwards":for(a=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Or(t)===null){e.child=i;break}t=i.sibling,i.sibling=a,a=i,i=t}fs(e,!0,a,null,o);break;case"together":fs(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ra(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),Ia|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(li(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,a=va(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=va(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function ds(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&pr(t)))}function ib(t,e,a){switch(e.tag){case 3:ht(e,e.stateNode.containerInfo),Ya(e,le,t.memoizedState.cache),ei();break;case 27:case 5:bt(e);break;case 4:ht(e,e.stateNode.containerInfo);break;case 10:Ya(e,e.type,e.memoizedProps.value);break;case 13:var n=e.memoizedState;if(n!==null)return n.dehydrated!==null?(Va(e),e.flags|=128,null):(a&e.child.childLanes)!==0?gh(t,e,a):(Va(e),t=Ra(t,e,a),t!==null?t.sibling:null);Va(e);break;case 19:var i=(t.flags&128)!==0;if(n=(a&e.childLanes)!==0,n||(li(t,e,a,!1),n=(a&e.childLanes)!==0),i){if(n)return yh(t,e,a);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(ne,ne.current),n)break;return null;case 22:case 23:return e.lanes=0,fh(t,e,a);case 24:Ya(e,le,t.memoizedState.cache)}return Ra(t,e,a)}function vh(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)ue=!0;else{if(!ds(t,a)&&(e.flags&128)===0)return ue=!1,ib(t,e,a);ue=(t.flags&131072)!==0}else ue=!1,Nt&&(e.flags&1048576)!==0&&Wf(e,hr,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var n=e.elementType,i=n._init;if(n=i(n._payload),e.type=n,typeof n=="function")Au(n)?(t=kl(n,t),e.tag=1,e=ph(null,e,n,t,a)):(e.tag=0,e=is(null,e,n,t,a));else{if(n!=null){if(i=n.$$typeof,i===F){e.tag=11,e=uh(null,e,n,t,a);break t}else if(i===B){e.tag=14,e=sh(null,e,n,t,a);break t}}throw e=X(n)||n,Error(s(306,e,""))}}return e;case 0:return is(t,e,e.type,e.pendingProps,a);case 1:return n=e.type,i=kl(n,e.pendingProps),ph(t,e,n,i,a);case 3:t:{if(ht(e,e.stateNode.containerInfo),t===null)throw Error(s(387));n=e.pendingProps;var o=e.memoizedState;i=o.element,ju(t,e),ci(e,n,null,a);var f=e.memoizedState;if(n=f.cache,Ya(e,le,n),n!==o.cache&&Cu(e,[le],a,!0),si(),n=f.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:f.cache},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){e=mh(t,e,n,a);break t}else if(n!==i){i=Ge(Error(s(424)),e),ai(i),e=mh(t,e,n,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Kt=Pe(t.firstChild),Se=e,Nt=!0,wl=null,ra=!0,a=Fd(e,null,n,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ei(),n===i){e=Ra(t,e,a);break t}he(t,e,n,a)}e=e.child}return e;case 26:return Nr(t,e),t===null?(a=Sp(e.type,null,e.pendingProps,null))?e.memoizedState=a:Nt||(a=e.type,t=e.pendingProps,n=Kr(lt.current).createElement(a),n[ye]=e,n[Te]=t,me(n,a,t),oe(n),e.stateNode=n):e.memoizedState=Sp(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return bt(e),t===null&&Nt&&(n=e.stateNode=xp(e.type,e.pendingProps,lt.current),Se=e,ra=!0,i=Kt,al(e.type)?(Vs=i,Kt=Pe(n.firstChild)):Kt=i),he(t,e,e.pendingProps.children,a),Nr(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Nt&&((i=n=Kt)&&(n=Nb(n,e.type,e.pendingProps,ra),n!==null?(e.stateNode=n,Se=e,Kt=Pe(n.firstChild),ra=!1,i=!0):i=!1),i||Sl(e)),bt(e),i=e.type,o=e.pendingProps,f=t!==null?t.memoizedProps:null,n=o.children,Gs(i,o)?n=null:f!==null&&Gs(i,f)&&(e.flags|=32),e.memoizedState!==null&&(i=Yu(t,e,F0,null,null,a),Mi._currentValue=i),Nr(t,e),he(t,e,n,a),e.child;case 6:return t===null&&Nt&&((t=a=Kt)&&(a=_b(a,e.pendingProps,ra),a!==null?(e.stateNode=a,Se=e,Kt=null,t=!0):t=!1),t||Sl(e)),null;case 13:return gh(t,e,a);case 4:return ht(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=gn(e,null,n,a):he(t,e,n,a),e.child;case 11:return uh(t,e,e.type,e.pendingProps,a);case 7:return he(t,e,e.pendingProps,a),e.child;case 8:return he(t,e,e.pendingProps.children,a),e.child;case 12:return he(t,e,e.pendingProps.children,a),e.child;case 10:return n=e.pendingProps,Ya(e,e.type,n.value),he(t,e,n.children,a),e.child;case 9:return i=e.type._context,n=e.pendingProps.children,Tl(e),i=ve(i),n=n(i),e.flags|=1,he(t,e,n,a),e.child;case 14:return sh(t,e,e.type,e.pendingProps,a);case 15:return ch(t,e,e.type,e.pendingProps,a);case 19:return yh(t,e,a);case 31:return n=e.pendingProps,a=e.mode,n={mode:n.mode,children:n.children},t===null?(a=_r(n,a),a.ref=e.ref,e.child=a,a.return=e,e=a):(a=va(t.child,n),a.ref=e.ref,e.child=a,a.return=e,e=a),e;case 22:return fh(t,e,a);case 24:return Tl(e),n=ve(le),t===null?(i=Mu(),i===null&&(i=Gt,o=Ou(),i.pooledCache=o,o.refCount++,o!==null&&(i.pooledCacheLanes|=a),i=o),e.memoizedState={parent:n,cache:i},_u(e),Ya(e,le,i)):((t.lanes&a)!==0&&(ju(t,e),ci(e,null,null,a),si()),i=t.memoizedState,o=e.memoizedState,i.parent!==n?(i={parent:n,cache:n},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),Ya(e,le,n)):(n=o.cache,Ya(e,le,n),n!==i.cache&&Cu(e,[le],a,!0))),he(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function Da(t){t.flags|=4}function xh(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!kp(e)){if(e=Ve.current,e!==null&&((zt&4194048)===zt?oa!==null:(zt&62914560)!==zt&&(zt&536870912)===0||e!==oa))throw oi=Nu,ld;t.flags|=8192}}function jr(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Fc():536870912,t.lanes|=e,xn|=e)}function bi(t,e){if(!Nt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function Zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,n=0;if(e)for(var i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=a,e}function rb(t,e,a){var n=e.pendingProps;switch(Tu(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(e),null;case 1:return Zt(e),null;case 3:return a=e.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Sa(le),K(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ti(e)?Da(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,If())),Zt(e),null;case 26:return a=e.memoizedState,t===null?(Da(e),a!==null?(Zt(e),xh(e,a)):(Zt(e),e.flags&=-16777217)):a?a!==t.memoizedState?(Da(e),Zt(e),xh(e,a)):(Zt(e),e.flags&=-16777217):(t.memoizedProps!==n&&Da(e),Zt(e),e.flags&=-16777217),null;case 27:pt(e),a=lt.current;var i=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==n&&Da(e);else{if(!n){if(e.stateNode===null)throw Error(s(166));return Zt(e),null}t=W.current,ti(e)?Jf(e):(t=xp(i,n,a),e.stateNode=t,Da(e))}return Zt(e),null;case 5:if(pt(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&Da(e);else{if(!n){if(e.stateNode===null)throw Error(s(166));return Zt(e),null}if(t=W.current,ti(e))Jf(e);else{switch(i=Kr(lt.current),t){case 1:t=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=i.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?t.multiple=!0:n.size&&(t.size=n.size);break;default:t=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}t[ye]=e,t[Te]=n;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=t;t:switch(me(t,a,n),a){case"button":case"input":case"select":case"textarea":t=!!n.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Da(e)}}return Zt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==n&&Da(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(s(166));if(t=lt.current,ti(e)){if(t=e.stateNode,a=e.memoizedProps,n=null,i=Se,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}t[ye]=e,t=!!(t.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||hp(t.nodeValue,a)),t||Sl(e)}else t=Kr(t).createTextNode(n),t[ye]=e,e.stateNode=t}return Zt(e),null;case 13:if(n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=ti(e),n!==null&&n.dehydrated!==null){if(t===null){if(!i)throw Error(s(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));i[ye]=e}else ei(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Zt(e),i=!1}else i=If(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(Ta(e),e):(Ta(e),null)}if(Ta(e),(e.flags&128)!==0)return e.lanes=a,e;if(a=n!==null,t=t!==null&&t.memoizedState!==null,a){n=e.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool);var o=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==i&&(n.flags|=2048)}return a!==t&&a&&(e.child.flags|=8192),jr(e,e.updateQueue),Zt(e),null;case 4:return K(),t===null&&Hs(e.stateNode.containerInfo),Zt(e),null;case 10:return Sa(e.type),Zt(e),null;case 19:if(at(ne),i=e.memoizedState,i===null)return Zt(e),null;if(n=(e.flags&128)!==0,o=i.rendering,o===null)if(n)bi(i,!1);else{if(Wt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Or(t),o!==null){for(e.flags|=128,bi(i,!1),t=o.updateQueue,e.updateQueue=t,jr(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Kf(a,t),a=a.sibling;return H(ne,ne.current&1|2),e.child}t=t.sibling}i.tail!==null&&Qt()>Ur&&(e.flags|=128,n=!0,bi(i,!1),e.lanes=4194304)}else{if(!n)if(t=Or(o),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,jr(e,t),bi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Nt)return Zt(e),null}else 2*Qt()-i.renderingStartTime>Ur&&a!==536870912&&(e.flags|=128,n=!0,bi(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(t=i.last,t!==null?t.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Qt(),e.sibling=null,t=ne.current,H(ne,n?t&1|2:t&1),e):(Zt(e),null);case 22:case 23:return Ta(e),$u(),n=e.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?(a&536870912)!==0&&(e.flags&128)===0&&(Zt(e),e.subtreeFlags&6&&(e.flags|=8192)):Zt(e),a=e.updateQueue,a!==null&&jr(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==a&&(e.flags|=2048),t!==null&&at(Rl),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Sa(le),Zt(e),null;case 25:return null;case 30:return null}throw Error(s(156,e.tag))}function ob(t,e){switch(Tu(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Sa(le),K(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return pt(e),null;case 13:if(Ta(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));ei()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return at(ne),null;case 4:return K(),null;case 10:return Sa(e.type),null;case 22:case 23:return Ta(e),$u(),t!==null&&at(Rl),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Sa(le),null;case 25:return null;default:return null}}function Ah(t,e){switch(Tu(e),e.tag){case 3:Sa(le),K();break;case 26:case 27:case 5:pt(e);break;case 4:K();break;case 13:Ta(e);break;case 19:at(ne);break;case 10:Sa(e.type);break;case 22:case 23:Ta(e),$u(),t!==null&&at(Rl);break;case 24:Sa(le)}}function yi(t,e){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){n=void 0;var o=a.create,f=a.inst;n=o(),f.destroy=n}a=a.next}while(a!==i)}}catch(h){Yt(e,e.return,h)}}function Ka(t,e,a){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var o=i.next;n=o;do{if((n.tag&t)===t){var f=n.inst,h=f.destroy;if(h!==void 0){f.destroy=void 0,i=e;var w=a,k=h;try{k()}catch(Q){Yt(i,w,Q)}}}n=n.next}while(n!==o)}}catch(Q){Yt(e,e.return,Q)}}function wh(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{sd(e,a)}catch(n){Yt(t,t.return,n)}}}function Sh(t,e,a){a.props=kl(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(n){Yt(t,e,n)}}function vi(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;case 30:n=t.stateNode;break;default:n=t.stateNode}typeof a=="function"?t.refCleanup=a(n):a.current=n}}catch(i){Yt(t,e,i)}}function ua(t,e){var a=t.ref,n=t.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){Yt(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Yt(t,e,i)}else a.current=null}function Eh(t){var e=t.type,a=t.memoizedProps,n=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break t;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){Yt(t,t.return,i)}}function hs(t,e,a){try{var n=t.stateNode;kb(n,t.type,a,e),n[Te]=e}catch(i){Yt(t,t.return,i)}}function Th(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&al(t.type)||t.tag===4}function ps(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Th(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&al(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ms(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=Zr));else if(n!==4&&(n===27&&al(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(ms(t,e,a),t=t.sibling;t!==null;)ms(t,e,a),t=t.sibling}function Br(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(n!==4&&(n===27&&al(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Br(t,e,a),t=t.sibling;t!==null;)Br(t,e,a),t=t.sibling}function Rh(t){var e=t.stateNode,a=t.memoizedProps;try{for(var n=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);me(e,n,a),e[ye]=t,e[Te]=a}catch(o){Yt(t,t.return,o)}}var ka=!1,It=!1,gs=!1,Dh=typeof WeakSet=="function"?WeakSet:Set,se=null;function ub(t,e){if(t=t.containerInfo,Ls=to,t=Uf(t),pu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{a.nodeType,o.nodeType}catch{a=null;break t}var f=0,h=-1,w=-1,k=0,Q=0,Z=t,z=null;e:for(;;){for(var M;Z!==a||i!==0&&Z.nodeType!==3||(h=f+i),Z!==o||n!==0&&Z.nodeType!==3||(w=f+n),Z.nodeType===3&&(f+=Z.nodeValue.length),(M=Z.firstChild)!==null;)z=Z,Z=M;for(;;){if(Z===t)break e;if(z===a&&++k===i&&(h=f),z===o&&++Q===n&&(w=f),(M=Z.nextSibling)!==null)break;Z=z,z=Z.parentNode}Z=M}a=h===-1||w===-1?null:{start:h,end:w}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ys={focusedElem:t,selectionRange:a},to=!1,se=e;se!==null;)if(e=se,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,se=t;else for(;se!==null;){switch(e=se,o=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&o!==null){t=void 0,a=e,i=o.memoizedProps,o=o.memoizedState,n=a.stateNode;try{var yt=kl(a.type,i,a.elementType===a.type);t=n.getSnapshotBeforeUpdate(yt,o),n.__reactInternalSnapshotBeforeUpdate=t}catch(mt){Yt(a,a.return,mt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)Qs(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Qs(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=e.sibling,t!==null){t.return=e.return,se=t;break}se=e.return}}function kh(t,e,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Wa(t,a),n&4&&yi(5,a);break;case 1:if(Wa(t,a),n&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(f){Yt(a,a.return,f)}else{var i=kl(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(f){Yt(a,a.return,f)}}n&64&&wh(a),n&512&&vi(a,a.return);break;case 3:if(Wa(t,a),n&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{sd(t,e)}catch(f){Yt(a,a.return,f)}}break;case 27:e===null&&n&4&&Rh(a);case 26:case 5:Wa(t,a),e===null&&n&4&&Eh(a),n&512&&vi(a,a.return);break;case 12:Wa(t,a);break;case 13:Wa(t,a),n&4&&zh(t,a),n&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=bb.bind(null,a),jb(t,a))));break;case 22:if(n=a.memoizedState!==null||ka,!n){e=e!==null&&e.memoizedState!==null||It,i=ka;var o=It;ka=n,(It=e)&&!o?Ja(t,a,(a.subtreeFlags&8772)!==0):Wa(t,a),ka=i,It=o}break;case 30:break;default:Wa(t,a)}}function Ch(t){var e=t.alternate;e!==null&&(t.alternate=null,Ch(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Wo(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Vt=null,ke=!1;function Ca(t,e,a){for(a=a.child;a!==null;)Oh(t,e,a),a=a.sibling}function Oh(t,e,a){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(Ua,a)}catch{}switch(a.tag){case 26:It||ua(a,e),Ca(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:It||ua(a,e);var n=Vt,i=ke;al(a.type)&&(Vt=a.stateNode,ke=!1),Ca(t,e,a),ki(a.stateNode),Vt=n,ke=i;break;case 5:It||ua(a,e);case 6:if(n=Vt,i=ke,Vt=null,Ca(t,e,a),Vt=n,ke=i,Vt!==null)if(ke)try{(Vt.nodeType===9?Vt.body:Vt.nodeName==="HTML"?Vt.ownerDocument.body:Vt).removeChild(a.stateNode)}catch(o){Yt(a,e,o)}else try{Vt.removeChild(a.stateNode)}catch(o){Yt(a,e,o)}break;case 18:Vt!==null&&(ke?(t=Vt,yp(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Bi(t)):yp(Vt,a.stateNode));break;case 4:n=Vt,i=ke,Vt=a.stateNode.containerInfo,ke=!0,Ca(t,e,a),Vt=n,ke=i;break;case 0:case 11:case 14:case 15:It||Ka(2,a,e),It||Ka(4,a,e),Ca(t,e,a);break;case 1:It||(ua(a,e),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Sh(a,e,n)),Ca(t,e,a);break;case 21:Ca(t,e,a);break;case 22:It=(n=It)||a.memoizedState!==null,Ca(t,e,a),It=n;break;default:Ca(t,e,a)}}function zh(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Bi(t)}catch(a){Yt(e,e.return,a)}}function sb(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Dh),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Dh),e;default:throw Error(s(435,t.tag))}}function bs(t,e){var a=sb(t);e.forEach(function(n){var i=yb.bind(null,t,n);a.has(n)||(a.add(n),n.then(i,i))})}function Me(t,e){var a=e.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],o=t,f=e,h=f;t:for(;h!==null;){switch(h.tag){case 27:if(al(h.type)){Vt=h.stateNode,ke=!1;break t}break;case 5:Vt=h.stateNode,ke=!1;break t;case 3:case 4:Vt=h.stateNode.containerInfo,ke=!0;break t}h=h.return}if(Vt===null)throw Error(s(160));Oh(o,f,i),Vt=null,ke=!1,o=i.alternate,o!==null&&(o.return=null),i.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Mh(e,t),e=e.sibling}var Ie=null;function Mh(t,e){var a=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Me(e,t),Ne(t),n&4&&(Ka(3,t,t.return),yi(3,t),Ka(5,t,t.return));break;case 1:Me(e,t),Ne(t),n&512&&(It||a===null||ua(a,a.return)),n&64&&ka&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Ie;if(Me(e,t),Ne(t),n&512&&(It||a===null||ua(a,a.return)),n&4){var o=a!==null?a.memoizedState:null;if(n=t.memoizedState,a===null)if(n===null)if(t.stateNode===null){t:{n=t.type,a=t.memoizedProps,i=i.ownerDocument||i;e:switch(n){case"title":o=i.getElementsByTagName("title")[0],(!o||o[qn]||o[ye]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=i.createElement(n),i.head.insertBefore(o,i.querySelector("head > title"))),me(o,n,a),o[ye]=t,oe(o),n=o;break t;case"link":var f=Rp("link","href",i).get(n+(a.href||""));if(f){for(var h=0;h<f.length;h++)if(o=f[h],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(h,1);break e}}o=i.createElement(n),me(o,n,a),i.head.appendChild(o);break;case"meta":if(f=Rp("meta","content",i).get(n+(a.content||""))){for(h=0;h<f.length;h++)if(o=f[h],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(h,1);break e}}o=i.createElement(n),me(o,n,a),i.head.appendChild(o);break;default:throw Error(s(468,n))}o[ye]=t,oe(o),n=o}t.stateNode=n}else Dp(i,t.type,t.stateNode);else t.stateNode=Tp(i,n,t.memoizedProps);else o!==n?(o===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):o.count--,n===null?Dp(i,t.type,t.stateNode):Tp(i,n,t.memoizedProps)):n===null&&t.stateNode!==null&&hs(t,t.memoizedProps,a.memoizedProps)}break;case 27:Me(e,t),Ne(t),n&512&&(It||a===null||ua(a,a.return)),a!==null&&n&4&&hs(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Me(e,t),Ne(t),n&512&&(It||a===null||ua(a,a.return)),t.flags&32){i=t.stateNode;try{Fl(i,"")}catch(M){Yt(t,t.return,M)}}n&4&&t.stateNode!=null&&(i=t.memoizedProps,hs(t,i,a!==null?a.memoizedProps:i)),n&1024&&(gs=!0);break;case 6:if(Me(e,t),Ne(t),n&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n}catch(M){Yt(t,t.return,M)}}break;case 3:if(Fr=null,i=Ie,Ie=Wr(e.containerInfo),Me(e,t),Ie=i,Ne(t),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Bi(e.containerInfo)}catch(M){Yt(t,t.return,M)}gs&&(gs=!1,Nh(t));break;case 4:n=Ie,Ie=Wr(t.stateNode.containerInfo),Me(e,t),Ne(t),Ie=n;break;case 12:Me(e,t),Ne(t);break;case 13:Me(e,t),Ne(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ss=Qt()),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,bs(t,n)));break;case 22:i=t.memoizedState!==null;var w=a!==null&&a.memoizedState!==null,k=ka,Q=It;if(ka=k||i,It=Q||w,Me(e,t),It=Q,ka=k,Ne(t),n&8192)t:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(a===null||w||ka||It||Cl(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){w=a=e;try{if(o=w.stateNode,i)f=o.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{h=w.stateNode;var Z=w.memoizedProps.style,z=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;h.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(M){Yt(w,w.return,M)}}}else if(e.tag===6){if(a===null){w=e;try{w.stateNode.nodeValue=i?"":w.memoizedProps}catch(M){Yt(w,w.return,M)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}n&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,bs(t,a))));break;case 19:Me(e,t),Ne(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,bs(t,n)));break;case 30:break;case 21:break;default:Me(e,t),Ne(t)}}function Ne(t){var e=t.flags;if(e&2){try{for(var a,n=t.return;n!==null;){if(Th(n)){a=n;break}n=n.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var i=a.stateNode,o=ps(t);Br(t,o,i);break;case 5:var f=a.stateNode;a.flags&32&&(Fl(f,""),a.flags&=-33);var h=ps(t);Br(t,h,f);break;case 3:case 4:var w=a.stateNode.containerInfo,k=ps(t);ms(t,k,w);break;default:throw Error(s(161))}}catch(Q){Yt(t,t.return,Q)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Nh(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Nh(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Wa(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)kh(t,e.alternate,e),e=e.sibling}function Cl(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Ka(4,e,e.return),Cl(e);break;case 1:ua(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&Sh(e,e.return,a),Cl(e);break;case 27:ki(e.stateNode);case 26:case 5:ua(e,e.return),Cl(e);break;case 22:e.memoizedState===null&&Cl(e);break;case 30:Cl(e);break;default:Cl(e)}t=t.sibling}}function Ja(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var n=e.alternate,i=t,o=e,f=o.flags;switch(o.tag){case 0:case 11:case 15:Ja(i,o,a),yi(4,o);break;case 1:if(Ja(i,o,a),n=o,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(k){Yt(n,n.return,k)}if(n=o,i=n.updateQueue,i!==null){var h=n.stateNode;try{var w=i.shared.hiddenCallbacks;if(w!==null)for(i.shared.hiddenCallbacks=null,i=0;i<w.length;i++)ud(w[i],h)}catch(k){Yt(n,n.return,k)}}a&&f&64&&wh(o),vi(o,o.return);break;case 27:Rh(o);case 26:case 5:Ja(i,o,a),a&&n===null&&f&4&&Eh(o),vi(o,o.return);break;case 12:Ja(i,o,a);break;case 13:Ja(i,o,a),a&&f&4&&zh(i,o);break;case 22:o.memoizedState===null&&Ja(i,o,a),vi(o,o.return);break;case 30:break;default:Ja(i,o,a)}e=e.sibling}}function ys(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ni(a))}function vs(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ni(t))}function sa(t,e,a,n){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)_h(t,e,a,n),e=e.sibling}function _h(t,e,a,n){var i=e.flags;switch(e.tag){case 0:case 11:case 15:sa(t,e,a,n),i&2048&&yi(9,e);break;case 1:sa(t,e,a,n);break;case 3:sa(t,e,a,n),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ni(t)));break;case 12:if(i&2048){sa(t,e,a,n),t=e.stateNode;try{var o=e.memoizedProps,f=o.id,h=o.onPostCommit;typeof h=="function"&&h(f,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(w){Yt(e,e.return,w)}}else sa(t,e,a,n);break;case 13:sa(t,e,a,n);break;case 23:break;case 22:o=e.stateNode,f=e.alternate,e.memoizedState!==null?o._visibility&2?sa(t,e,a,n):xi(t,e):o._visibility&2?sa(t,e,a,n):(o._visibility|=2,bn(t,e,a,n,(e.subtreeFlags&10256)!==0)),i&2048&&ys(f,e);break;case 24:sa(t,e,a,n),i&2048&&vs(e.alternate,e);break;default:sa(t,e,a,n)}}function bn(t,e,a,n,i){for(i=i&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var o=t,f=e,h=a,w=n,k=f.flags;switch(f.tag){case 0:case 11:case 15:bn(o,f,h,w,i),yi(8,f);break;case 23:break;case 22:var Q=f.stateNode;f.memoizedState!==null?Q._visibility&2?bn(o,f,h,w,i):xi(o,f):(Q._visibility|=2,bn(o,f,h,w,i)),i&&k&2048&&ys(f.alternate,f);break;case 24:bn(o,f,h,w,i),i&&k&2048&&vs(f.alternate,f);break;default:bn(o,f,h,w,i)}e=e.sibling}}function xi(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,n=e,i=n.flags;switch(n.tag){case 22:xi(a,n),i&2048&&ys(n.alternate,n);break;case 24:xi(a,n),i&2048&&vs(n.alternate,n);break;default:xi(a,n)}e=e.sibling}}var Ai=8192;function yn(t){if(t.subtreeFlags&Ai)for(t=t.child;t!==null;)jh(t),t=t.sibling}function jh(t){switch(t.tag){case 26:yn(t),t.flags&Ai&&t.memoizedState!==null&&Kb(Ie,t.memoizedState,t.memoizedProps);break;case 5:yn(t);break;case 3:case 4:var e=Ie;Ie=Wr(t.stateNode.containerInfo),yn(t),Ie=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Ai,Ai=16777216,yn(t),Ai=e):yn(t));break;default:yn(t)}}function Bh(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function wi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];se=n,Uh(n,t)}Bh(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Hh(t),t=t.sibling}function Hh(t){switch(t.tag){case 0:case 11:case 15:wi(t),t.flags&2048&&Ka(9,t,t.return);break;case 3:wi(t);break;case 12:wi(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Hr(t)):wi(t);break;default:wi(t)}}function Hr(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];se=n,Uh(n,t)}Bh(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ka(8,e,e.return),Hr(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Hr(e));break;default:Hr(e)}t=t.sibling}}function Uh(t,e){for(;se!==null;){var a=se;switch(a.tag){case 0:case 11:case 15:Ka(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:ni(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,se=n;else t:for(a=t;se!==null;){n=se;var i=n.sibling,o=n.return;if(Ch(n),n===a){se=null;break t}if(i!==null){i.return=o,se=i;break t}se=o}}}var cb={getCacheForType:function(t){var e=ve(le),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a}},fb=typeof WeakMap=="function"?WeakMap:Map,Bt=0,Gt=null,Tt=null,zt=0,Ht=0,_e=null,Fa=!1,vn=!1,xs=!1,Oa=0,Wt=0,Ia=0,Ol=0,As=0,Ze=0,xn=0,Si=null,Ce=null,ws=!1,Ss=0,Ur=1/0,$r=null,Pa=null,pe=0,tl=null,An=null,wn=0,Es=0,Ts=null,$h=null,Ei=0,Rs=null;function je(){if((Bt&2)!==0&&zt!==0)return zt&-zt;if(C.T!==null){var t=sn;return t!==0?t:Ns()}return tf()}function Lh(){Ze===0&&(Ze=(zt&536870912)===0||Nt?Jc():536870912);var t=Ve.current;return t!==null&&(t.flags|=32),Ze}function Be(t,e,a){(t===Gt&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)&&(Sn(t,0),el(t,zt,Ze,!1)),Gn(t,a),((Bt&2)===0||t!==Gt)&&(t===Gt&&((Bt&2)===0&&(Ol|=a),Wt===4&&el(t,zt,Ze,!1)),ca(t))}function Yh(t,e,a){if((Bt&6)!==0)throw Error(s(327));var n=!a&&(e&124)===0&&(e&t.expiredLanes)===0||pl(t,e),i=n?pb(t,e):Cs(t,e,!0),o=n;do{if(i===0){vn&&!n&&el(t,e,0,!1);break}else{if(a=t.current.alternate,o&&!db(a)){i=Cs(t,e,!1),o=!1;continue}if(i===2){if(o=e,t.errorRecoveryDisabledLanes&o)var f=0;else f=t.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){e=f;t:{var h=t;i=Si;var w=h.current.memoizedState.isDehydrated;if(w&&(Sn(h,f).flags|=256),f=Cs(h,f,!1),f!==2){if(xs&&!w){h.errorRecoveryDisabledLanes|=o,Ol|=o,i=4;break t}o=Ce,Ce=i,o!==null&&(Ce===null?Ce=o:Ce.push.apply(Ce,o))}i=f}if(o=!1,i!==2)continue}}if(i===1){Sn(t,0),el(t,e,0,!0);break}t:{switch(n=t,o=i,o){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e)break;case 6:el(n,e,Ze,!Fa);break t;case 2:Ce=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(i=Ss+300-Qt(),10<i)){if(el(n,e,Ze,!Fa),ql(n,0,!0)!==0)break t;n.timeoutHandle=gp(Gh.bind(null,n,a,Ce,$r,ws,e,Ze,Ol,xn,Fa,o,2,-0,0),i);break t}Gh(n,a,Ce,$r,ws,e,Ze,Ol,xn,Fa,o,0,-0,0)}}break}while(!0);ca(t)}function Gh(t,e,a,n,i,o,f,h,w,k,Q,Z,z,M){if(t.timeoutHandle=-1,Z=e.subtreeFlags,(Z&8192||(Z&16785408)===16785408)&&(zi={stylesheets:null,count:0,unsuspend:Zb},jh(e),Z=Wb(),Z!==null)){t.cancelPendingCommit=Z(Wh.bind(null,t,e,o,a,n,i,f,h,w,Q,1,z,M)),el(t,o,f,!k);return}Wh(t,e,o,a,n,i,f,h,w)}function db(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],o=i.getSnapshot;i=i.value;try{if(!Oe(o(),i))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function el(t,e,a,n){e&=~As,e&=~Ol,t.suspendedLanes|=e,t.pingedLanes&=~e,n&&(t.warmLanes|=e),n=t.expirationTimes;for(var i=e;0<i;){var o=31-we(i),f=1<<o;n[o]=-1,i&=~f}a!==0&&Ic(t,a,e)}function Lr(){return(Bt&6)===0?(Ti(0),!1):!0}function Ds(){if(Tt!==null){if(Ht===0)var t=Tt.return;else t=Tt,wa=El=null,Qu(t),mn=null,mi=0,t=Tt;for(;t!==null;)Ah(t.alternate,t),t=t.return;Tt=null}}function Sn(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Ob(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ds(),Gt=t,Tt=a=va(t.current,null),zt=e,Ht=0,_e=null,Fa=!1,vn=pl(t,e),xs=!1,xn=Ze=As=Ol=Ia=Wt=0,Ce=Si=null,ws=!1,(e&8)!==0&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var i=31-we(n),o=1<<i;e|=t[i],n&=~o}return Oa=e,ur(),a}function qh(t,e){St=null,C.H=Dr,e===ri||e===br?(e=rd(),Ht=3):e===ld?(e=rd(),Ht=4):Ht=e===oh?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,_e=e,Tt===null&&(Wt=1,Mr(t,Ge(e,t.current)))}function Qh(){var t=C.H;return C.H=Dr,t===null?Dr:t}function Xh(){var t=C.A;return C.A=cb,t}function ks(){Wt=4,Fa||(zt&4194048)!==zt&&Ve.current!==null||(vn=!0),(Ia&134217727)===0&&(Ol&134217727)===0||Gt===null||el(Gt,zt,Ze,!1)}function Cs(t,e,a){var n=Bt;Bt|=2;var i=Qh(),o=Xh();(Gt!==t||zt!==e)&&($r=null,Sn(t,e)),e=!1;var f=Wt;t:do try{if(Ht!==0&&Tt!==null){var h=Tt,w=_e;switch(Ht){case 8:Ds(),f=6;break t;case 3:case 2:case 9:case 6:Ve.current===null&&(e=!0);var k=Ht;if(Ht=0,_e=null,En(t,h,w,k),a&&vn){f=0;break t}break;default:k=Ht,Ht=0,_e=null,En(t,h,w,k)}}hb(),f=Wt;break}catch(Q){qh(t,Q)}while(!0);return e&&t.shellSuspendCounter++,wa=El=null,Bt=n,C.H=i,C.A=o,Tt===null&&(Gt=null,zt=0,ur()),f}function hb(){for(;Tt!==null;)Vh(Tt)}function pb(t,e){var a=Bt;Bt|=2;var n=Qh(),i=Xh();Gt!==t||zt!==e?($r=null,Ur=Qt()+500,Sn(t,e)):vn=pl(t,e);t:do try{if(Ht!==0&&Tt!==null){e=Tt;var o=_e;e:switch(Ht){case 1:Ht=0,_e=null,En(t,e,o,1);break;case 2:case 9:if(nd(o)){Ht=0,_e=null,Zh(e);break}e=function(){Ht!==2&&Ht!==9||Gt!==t||(Ht=7),ca(t)},o.then(e,e);break t;case 3:Ht=7;break t;case 4:Ht=5;break t;case 7:nd(o)?(Ht=0,_e=null,Zh(e)):(Ht=0,_e=null,En(t,e,o,7));break;case 5:var f=null;switch(Tt.tag){case 26:f=Tt.memoizedState;case 5:case 27:var h=Tt;if(!f||kp(f)){Ht=0,_e=null;var w=h.sibling;if(w!==null)Tt=w;else{var k=h.return;k!==null?(Tt=k,Yr(k)):Tt=null}break e}}Ht=0,_e=null,En(t,e,o,5);break;case 6:Ht=0,_e=null,En(t,e,o,6);break;case 8:Ds(),Wt=6;break t;default:throw Error(s(462))}}mb();break}catch(Q){qh(t,Q)}while(!0);return wa=El=null,C.H=n,C.A=i,Bt=a,Tt!==null?0:(Gt=null,zt=0,ur(),Wt)}function mb(){for(;Tt!==null&&!qt();)Vh(Tt)}function Vh(t){var e=vh(t.alternate,t,Oa);t.memoizedProps=t.pendingProps,e===null?Yr(t):Tt=e}function Zh(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=hh(a,e,e.pendingProps,e.type,void 0,zt);break;case 11:e=hh(a,e,e.pendingProps,e.type.render,e.ref,zt);break;case 5:Qu(e);default:Ah(a,e),e=Tt=Kf(e,Oa),e=vh(a,e,Oa)}t.memoizedProps=t.pendingProps,e===null?Yr(t):Tt=e}function En(t,e,a,n){wa=El=null,Qu(e),mn=null,mi=0;var i=e.return;try{if(nb(t,i,e,a,zt)){Wt=1,Mr(t,Ge(a,t.current)),Tt=null;return}}catch(o){if(i!==null)throw Tt=i,o;Wt=1,Mr(t,Ge(a,t.current)),Tt=null;return}e.flags&32768?(Nt||n===1?t=!0:vn||(zt&536870912)!==0?t=!1:(Fa=t=!0,(n===2||n===9||n===3||n===6)&&(n=Ve.current,n!==null&&n.tag===13&&(n.flags|=16384))),Kh(e,t)):Yr(e)}function Yr(t){var e=t;do{if((e.flags&32768)!==0){Kh(e,Fa);return}t=e.return;var a=rb(e.alternate,e,Oa);if(a!==null){Tt=a;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);Wt===0&&(Wt=5)}function Kh(t,e){do{var a=ob(t.alternate,t);if(a!==null){a.flags&=32767,Tt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){Tt=t;return}Tt=t=a}while(t!==null);Wt=6,Tt=null}function Wh(t,e,a,n,i,o,f,h,w){t.cancelPendingCommit=null;do Gr();while(pe!==0);if((Bt&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));if(o=e.lanes|e.childLanes,o|=vu,Zg(t,a,o,f,h,w),t===Gt&&(Tt=Gt=null,zt=0),An=e,tl=t,wn=a,Es=o,Ts=i,$h=n,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,vb(Ee,function(){return tp(),null})):(t.callbackNode=null,t.callbackPriority=0),n=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||n){n=C.T,C.T=null,i=G.p,G.p=2,f=Bt,Bt|=4;try{ub(t,e,a)}finally{Bt=f,G.p=i,C.T=n}}pe=1,Jh(),Fh(),Ih()}}function Jh(){if(pe===1){pe=0;var t=tl,e=An,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=C.T,C.T=null;var n=G.p;G.p=2;var i=Bt;Bt|=4;try{Mh(e,t);var o=Ys,f=Uf(t.containerInfo),h=o.focusedElem,w=o.selectionRange;if(f!==h&&h&&h.ownerDocument&&Hf(h.ownerDocument.documentElement,h)){if(w!==null&&pu(h)){var k=w.start,Q=w.end;if(Q===void 0&&(Q=k),"selectionStart"in h)h.selectionStart=k,h.selectionEnd=Math.min(Q,h.value.length);else{var Z=h.ownerDocument||document,z=Z&&Z.defaultView||window;if(z.getSelection){var M=z.getSelection(),yt=h.textContent.length,mt=Math.min(w.start,yt),Lt=w.end===void 0?mt:Math.min(w.end,yt);!M.extend&&mt>Lt&&(f=Lt,Lt=mt,mt=f);var R=Bf(h,mt),T=Bf(h,Lt);if(R&&T&&(M.rangeCount!==1||M.anchorNode!==R.node||M.anchorOffset!==R.offset||M.focusNode!==T.node||M.focusOffset!==T.offset)){var D=Z.createRange();D.setStart(R.node,R.offset),M.removeAllRanges(),mt>Lt?(M.addRange(D),M.extend(T.node,T.offset)):(D.setEnd(T.node,T.offset),M.addRange(D))}}}}for(Z=[],M=h;M=M.parentNode;)M.nodeType===1&&Z.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<Z.length;h++){var V=Z[h];V.element.scrollLeft=V.left,V.element.scrollTop=V.top}}to=!!Ls,Ys=Ls=null}finally{Bt=i,G.p=n,C.T=a}}t.current=e,pe=2}}function Fh(){if(pe===2){pe=0;var t=tl,e=An,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=C.T,C.T=null;var n=G.p;G.p=2;var i=Bt;Bt|=4;try{kh(t,e.alternate,e)}finally{Bt=i,G.p=n,C.T=a}}pe=3}}function Ih(){if(pe===4||pe===3){pe=0,ae();var t=tl,e=An,a=wn,n=$h;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?pe=5:(pe=0,An=tl=null,Ph(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(Pa=null),Zo(a),e=e.stateNode,Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(Ua,e,void 0,(e.current.flags&128)===128)}catch{}if(n!==null){e=C.T,i=G.p,G.p=2,C.T=null;try{for(var o=t.onRecoverableError,f=0;f<n.length;f++){var h=n[f];o(h.value,{componentStack:h.stack})}}finally{C.T=e,G.p=i}}(wn&3)!==0&&Gr(),ca(t),i=t.pendingLanes,(a&4194090)!==0&&(i&42)!==0?t===Rs?Ei++:(Ei=0,Rs=t):Ei=0,Ti(0)}}function Ph(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,ni(e)))}function Gr(t){return Jh(),Fh(),Ih(),tp()}function tp(){if(pe!==5)return!1;var t=tl,e=Es;Es=0;var a=Zo(wn),n=C.T,i=G.p;try{G.p=32>a?32:a,C.T=null,a=Ts,Ts=null;var o=tl,f=wn;if(pe=0,An=tl=null,wn=0,(Bt&6)!==0)throw Error(s(331));var h=Bt;if(Bt|=4,Hh(o.current),_h(o,o.current,f,a),Bt=h,Ti(0,!1),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(Ua,o)}catch{}return!0}finally{G.p=i,C.T=n,Ph(t,e)}}function ep(t,e,a){e=Ge(a,e),e=ns(t.stateNode,e,2),t=Qa(t,e,2),t!==null&&(Gn(t,2),ca(t))}function Yt(t,e,a){if(t.tag===3)ep(t,t,a);else for(;e!==null;){if(e.tag===3){ep(e,t,a);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Pa===null||!Pa.has(n))){t=Ge(a,t),a=ih(2),n=Qa(e,a,2),n!==null&&(rh(a,n,e,t),Gn(n,2),ca(n));break}}e=e.return}}function Os(t,e,a){var n=t.pingCache;if(n===null){n=t.pingCache=new fb;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(a)||(xs=!0,i.add(a),t=gb.bind(null,t,e,a),e.then(t,t))}function gb(t,e,a){var n=t.pingCache;n!==null&&n.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Gt===t&&(zt&a)===a&&(Wt===4||Wt===3&&(zt&62914560)===zt&&300>Qt()-Ss?(Bt&2)===0&&Sn(t,0):As|=a,xn===zt&&(xn=0)),ca(t)}function ap(t,e){e===0&&(e=Fc()),t=nn(t,e),t!==null&&(Gn(t,e),ca(t))}function bb(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),ap(t,a)}function yb(t,e){var a=0;switch(t.tag){case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(s(314))}n!==null&&n.delete(e),ap(t,a)}function vb(t,e){return kt(t,e)}var qr=null,Tn=null,zs=!1,Qr=!1,Ms=!1,zl=0;function ca(t){t!==Tn&&t.next===null&&(Tn===null?qr=Tn=t:Tn=Tn.next=t),Qr=!0,zs||(zs=!0,Ab())}function Ti(t,e){if(!Ms&&Qr){Ms=!0;do for(var a=!1,n=qr;n!==null;){if(t!==0){var i=n.pendingLanes;if(i===0)var o=0;else{var f=n.suspendedLanes,h=n.pingedLanes;o=(1<<31-we(42|t)+1)-1,o&=i&~(f&~h),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(a=!0,rp(n,o))}else o=zt,o=ql(n,n===Gt?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(o&3)===0||pl(n,o)||(a=!0,rp(n,o));n=n.next}while(a);Ms=!1}}function xb(){lp()}function lp(){Qr=zs=!1;var t=0;zl!==0&&(Cb()&&(t=zl),zl=0);for(var e=Qt(),a=null,n=qr;n!==null;){var i=n.next,o=np(n,e);o===0?(n.next=null,a===null?qr=i:a.next=i,i===null&&(Tn=a)):(a=n,(t!==0||(o&3)!==0)&&(Qr=!0)),n=i}Ti(t)}function np(t,e){for(var a=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes&-62914561;0<o;){var f=31-we(o),h=1<<f,w=i[f];w===-1?((h&a)===0||(h&n)!==0)&&(i[f]=Qo(h,e)):w<=e&&(t.expiredLanes|=h),o&=~h}if(e=Gt,a=zt,a=ql(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n=t.callbackNode,a===0||t===e&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)return n!==null&&n!==null&&jt(n),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||pl(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(n!==null&&jt(n),Zo(a)){case 2:case 8:a=Ue;break;case 32:a=Ee;break;case 268435456:a=$e;break;default:a=Ee}return n=ip.bind(null,t),a=kt(a,n),t.callbackPriority=e,t.callbackNode=a,e}return n!==null&&n!==null&&jt(n),t.callbackPriority=2,t.callbackNode=null,2}function ip(t,e){if(pe!==0&&pe!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Gr()&&t.callbackNode!==a)return null;var n=zt;return n=ql(t,t===Gt?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n===0?null:(Yh(t,n,e),np(t,Qt()),t.callbackNode!=null&&t.callbackNode===a?ip.bind(null,t):null)}function rp(t,e){if(Gr())return null;Yh(t,e,!0)}function Ab(){zb(function(){(Bt&6)!==0?kt(re,xb):lp()})}function Ns(){return zl===0&&(zl=Jc()),zl}function op(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:er(""+t)}function up(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function wb(t,e,a,n,i){if(e==="submit"&&a&&a.stateNode===i){var o=op((i[Te]||null).action),f=n.submitter;f&&(e=(e=f[Te]||null)?op(e.formAction):f.getAttribute("formAction"),e!==null&&(o=e,f=null));var h=new ir("action","action",null,n,i);t.push({event:h,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(zl!==0){var w=f?up(i,f):new FormData(i);Pu(a,{pending:!0,data:w,method:i.method,action:o},null,w)}}else typeof o=="function"&&(h.preventDefault(),w=f?up(i,f):new FormData(i),Pu(a,{pending:!0,data:w,method:i.method,action:o},o,w))},currentTarget:i}]})}}for(var _s=0;_s<yu.length;_s++){var js=yu[_s],Sb=js.toLowerCase(),Eb=js[0].toUpperCase()+js.slice(1);Fe(Sb,"on"+Eb)}Fe(Yf,"onAnimationEnd"),Fe(Gf,"onAnimationIteration"),Fe(qf,"onAnimationStart"),Fe("dblclick","onDoubleClick"),Fe("focusin","onFocus"),Fe("focusout","onBlur"),Fe(Y0,"onTransitionRun"),Fe(G0,"onTransitionStart"),Fe(q0,"onTransitionCancel"),Fe(Qf,"onTransitionEnd"),Kl("onMouseEnter",["mouseout","mouseover"]),Kl("onMouseLeave",["mouseout","mouseover"]),Kl("onPointerEnter",["pointerout","pointerover"]),Kl("onPointerLeave",["pointerout","pointerover"]),ml("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ml("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ml("onBeforeInput",["compositionend","keypress","textInput","paste"]),ml("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ml("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ml("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ri));function sp(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var n=t[a],i=n.event;n=n.listeners;t:{var o=void 0;if(e)for(var f=n.length-1;0<=f;f--){var h=n[f],w=h.instance,k=h.currentTarget;if(h=h.listener,w!==o&&i.isPropagationStopped())break t;o=h,i.currentTarget=k;try{o(i)}catch(Q){zr(Q)}i.currentTarget=null,o=w}else for(f=0;f<n.length;f++){if(h=n[f],w=h.instance,k=h.currentTarget,h=h.listener,w!==o&&i.isPropagationStopped())break t;o=h,i.currentTarget=k;try{o(i)}catch(Q){zr(Q)}i.currentTarget=null,o=w}}}}function Rt(t,e){var a=e[Ko];a===void 0&&(a=e[Ko]=new Set);var n=t+"__bubble";a.has(n)||(cp(e,t,2,!1),a.add(n))}function Bs(t,e,a){var n=0;e&&(n|=4),cp(a,t,n,e)}var Xr="_reactListening"+Math.random().toString(36).slice(2);function Hs(t){if(!t[Xr]){t[Xr]=!0,af.forEach(function(a){a!=="selectionchange"&&(Tb.has(a)||Bs(a,!1,t),Bs(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xr]||(e[Xr]=!0,Bs("selectionchange",!1,e))}}function cp(t,e,a,n){switch(_p(e)){case 2:var i=Ib;break;case 8:i=Pb;break;default:i=Fs}a=i.bind(null,e,a,t),i=void 0,!iu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,a,{capture:!0,passive:i}):t.addEventListener(e,a,!0):i!==void 0?t.addEventListener(e,a,{passive:i}):t.addEventListener(e,a,!1)}function Us(t,e,a,n,i){var o=n;if((e&1)===0&&(e&2)===0&&n!==null)t:for(;;){if(n===null)return;var f=n.tag;if(f===3||f===4){var h=n.stateNode.containerInfo;if(h===i)break;if(f===4)for(f=n.return;f!==null;){var w=f.tag;if((w===3||w===4)&&f.stateNode.containerInfo===i)return;f=f.return}for(;h!==null;){if(f=Xl(h),f===null)return;if(w=f.tag,w===5||w===6||w===26||w===27){n=o=f;continue t}h=h.parentNode}}n=n.return}bf(function(){var k=o,Q=lu(a),Z=[];t:{var z=Xf.get(t);if(z!==void 0){var M=ir,yt=t;switch(t){case"keypress":if(lr(a)===0)break t;case"keydown":case"keyup":M=v0;break;case"focusin":yt="focus",M=su;break;case"focusout":yt="blur",M=su;break;case"beforeblur":case"afterblur":M=su;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=xf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=o0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=w0;break;case Yf:case Gf:case qf:M=c0;break;case Qf:M=E0;break;case"scroll":case"scrollend":M=i0;break;case"wheel":M=R0;break;case"copy":case"cut":case"paste":M=d0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=wf;break;case"toggle":case"beforetoggle":M=k0}var mt=(e&4)!==0,Lt=!mt&&(t==="scroll"||t==="scrollend"),R=mt?z!==null?z+"Capture":null:z;mt=[];for(var T=k,D;T!==null;){var V=T;if(D=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||D===null||R===null||(V=Xn(T,R),V!=null&&mt.push(Di(T,V,D))),Lt)break;T=T.return}0<mt.length&&(z=new M(z,yt,null,a,Q),Z.push({event:z,listeners:mt}))}}if((e&7)===0){t:{if(z=t==="mouseover"||t==="pointerover",M=t==="mouseout"||t==="pointerout",z&&a!==au&&(yt=a.relatedTarget||a.fromElement)&&(Xl(yt)||yt[Ql]))break t;if((M||z)&&(z=Q.window===Q?Q:(z=Q.ownerDocument)?z.defaultView||z.parentWindow:window,M?(yt=a.relatedTarget||a.toElement,M=k,yt=yt?Xl(yt):null,yt!==null&&(Lt=d(yt),mt=yt.tag,yt!==Lt||mt!==5&&mt!==27&&mt!==6)&&(yt=null)):(M=null,yt=k),M!==yt)){if(mt=xf,V="onMouseLeave",R="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(mt=wf,V="onPointerLeave",R="onPointerEnter",T="pointer"),Lt=M==null?z:Qn(M),D=yt==null?z:Qn(yt),z=new mt(V,T+"leave",M,a,Q),z.target=Lt,z.relatedTarget=D,V=null,Xl(Q)===k&&(mt=new mt(R,T+"enter",yt,a,Q),mt.target=D,mt.relatedTarget=Lt,V=mt),Lt=V,M&&yt)e:{for(mt=M,R=yt,T=0,D=mt;D;D=Rn(D))T++;for(D=0,V=R;V;V=Rn(V))D++;for(;0<T-D;)mt=Rn(mt),T--;for(;0<D-T;)R=Rn(R),D--;for(;T--;){if(mt===R||R!==null&&mt===R.alternate)break e;mt=Rn(mt),R=Rn(R)}mt=null}else mt=null;M!==null&&fp(Z,z,M,mt,!1),yt!==null&&Lt!==null&&fp(Z,Lt,yt,mt,!0)}}t:{if(z=k?Qn(k):window,M=z.nodeName&&z.nodeName.toLowerCase(),M==="select"||M==="input"&&z.type==="file")var st=Of;else if(kf(z))if(zf)st=U0;else{st=B0;var Et=j0}else M=z.nodeName,!M||M.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?k&&eu(k.elementType)&&(st=Of):st=H0;if(st&&(st=st(t,k))){Cf(Z,st,a,Q);break t}Et&&Et(t,z,k),t==="focusout"&&k&&z.type==="number"&&k.memoizedProps.value!=null&&tu(z,"number",z.value)}switch(Et=k?Qn(k):window,t){case"focusin":(kf(Et)||Et.contentEditable==="true")&&(en=Et,mu=k,Pn=null);break;case"focusout":Pn=mu=en=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,$f(Z,a,Q);break;case"selectionchange":if(L0)break;case"keydown":case"keyup":$f(Z,a,Q)}var dt;if(fu)t:{switch(t){case"compositionstart":var gt="onCompositionStart";break t;case"compositionend":gt="onCompositionEnd";break t;case"compositionupdate":gt="onCompositionUpdate";break t}gt=void 0}else tn?Rf(t,a)&&(gt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(gt="onCompositionStart");gt&&(Sf&&a.locale!=="ko"&&(tn||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&tn&&(dt=yf()):(La=Q,ru="value"in La?La.value:La.textContent,tn=!0)),Et=Vr(k,gt),0<Et.length&&(gt=new Af(gt,t,null,a,Q),Z.push({event:gt,listeners:Et}),dt?gt.data=dt:(dt=Df(a),dt!==null&&(gt.data=dt)))),(dt=O0?z0(t,a):M0(t,a))&&(gt=Vr(k,"onBeforeInput"),0<gt.length&&(Et=new Af("onBeforeInput","beforeinput",null,a,Q),Z.push({event:Et,listeners:gt}),Et.data=dt)),wb(Z,t,k,a,Q)}sp(Z,e)})}function Di(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Vr(t,e){for(var a=e+"Capture",n=[];t!==null;){var i=t,o=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||o===null||(i=Xn(t,a),i!=null&&n.unshift(Di(t,i,o)),i=Xn(t,e),i!=null&&n.push(Di(t,i,o))),t.tag===3)return n;t=t.return}return[]}function Rn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function fp(t,e,a,n,i){for(var o=e._reactName,f=[];a!==null&&a!==n;){var h=a,w=h.alternate,k=h.stateNode;if(h=h.tag,w!==null&&w===n)break;h!==5&&h!==26&&h!==27||k===null||(w=k,i?(k=Xn(a,o),k!=null&&f.unshift(Di(a,k,w))):i||(k=Xn(a,o),k!=null&&f.push(Di(a,k,w)))),a=a.return}f.length!==0&&t.push({event:e,listeners:f})}var Rb=/\r\n?/g,Db=/\u0000|\uFFFD/g;function dp(t){return(typeof t=="string"?t:""+t).replace(Rb,`
`).replace(Db,"")}function hp(t,e){return e=dp(e),dp(t)===e}function Zr(){}function $t(t,e,a,n,i,o){switch(a){case"children":typeof n=="string"?e==="body"||e==="textarea"&&n===""||Fl(t,n):(typeof n=="number"||typeof n=="bigint")&&e!=="body"&&Fl(t,""+n);break;case"className":Ii(t,"class",n);break;case"tabIndex":Ii(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Ii(t,a,n);break;case"style":mf(t,n,o);break;case"data":if(e!=="object"){Ii(t,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=er(""+n),t.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(a==="formAction"?(e!=="input"&&$t(t,e,"name",i.name,i,null),$t(t,e,"formEncType",i.formEncType,i,null),$t(t,e,"formMethod",i.formMethod,i,null),$t(t,e,"formTarget",i.formTarget,i,null)):($t(t,e,"encType",i.encType,i,null),$t(t,e,"method",i.method,i,null),$t(t,e,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=er(""+n),t.setAttribute(a,n);break;case"onClick":n!=null&&(t.onclick=Zr);break;case"onScroll":n!=null&&Rt("scroll",t);break;case"onScrollEnd":n!=null&&Rt("scrollend",t);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(s(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}a=er(""+n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""+n):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":n===!0?t.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,n):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(a,n):t.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(a):t.setAttribute(a,n);break;case"popover":Rt("beforetoggle",t),Rt("toggle",t),Fi(t,"popover",n);break;case"xlinkActuate":ba(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":ba(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":ba(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":ba(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":ba(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":ba(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":ba(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":ba(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":ba(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Fi(t,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=l0.get(a)||a,Fi(t,a,n))}}function $s(t,e,a,n,i,o){switch(a){case"style":mf(t,n,o);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(s(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof n=="string"?Fl(t,n):(typeof n=="number"||typeof n=="bigint")&&Fl(t,""+n);break;case"onScroll":n!=null&&Rt("scroll",t);break;case"onScrollEnd":n!=null&&Rt("scrollend",t);break;case"onClick":n!=null&&(t.onclick=Zr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lf.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),e=a.slice(2,i?a.length-7:void 0),o=t[Te]||null,o=o!=null?o[a]:null,typeof o=="function"&&t.removeEventListener(e,o,i),typeof n=="function")){typeof o!="function"&&o!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,n,i);break t}a in t?t[a]=n:n===!0?t.setAttribute(a,""):Fi(t,a,n)}}}function me(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Rt("error",t),Rt("load",t);var n=!1,i=!1,o;for(o in a)if(a.hasOwnProperty(o)){var f=a[o];if(f!=null)switch(o){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:$t(t,e,o,f,a,null)}}i&&$t(t,e,"srcSet",a.srcSet,a,null),n&&$t(t,e,"src",a.src,a,null);return;case"input":Rt("invalid",t);var h=o=f=i=null,w=null,k=null;for(n in a)if(a.hasOwnProperty(n)){var Q=a[n];if(Q!=null)switch(n){case"name":i=Q;break;case"type":f=Q;break;case"checked":w=Q;break;case"defaultChecked":k=Q;break;case"value":o=Q;break;case"defaultValue":h=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(s(137,e));break;default:$t(t,e,n,Q,a,null)}}ff(t,o,h,w,k,f,i,!1),Pi(t);return;case"select":Rt("invalid",t),n=f=o=null;for(i in a)if(a.hasOwnProperty(i)&&(h=a[i],h!=null))switch(i){case"value":o=h;break;case"defaultValue":f=h;break;case"multiple":n=h;default:$t(t,e,i,h,a,null)}e=o,a=f,t.multiple=!!n,e!=null?Jl(t,!!n,e,!1):a!=null&&Jl(t,!!n,a,!0);return;case"textarea":Rt("invalid",t),o=i=n=null;for(f in a)if(a.hasOwnProperty(f)&&(h=a[f],h!=null))switch(f){case"value":n=h;break;case"defaultValue":i=h;break;case"children":o=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:$t(t,e,f,h,a,null)}hf(t,n,i,o),Pi(t);return;case"option":for(w in a)if(a.hasOwnProperty(w)&&(n=a[w],n!=null))switch(w){case"selected":t.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:$t(t,e,w,n,a,null)}return;case"dialog":Rt("beforetoggle",t),Rt("toggle",t),Rt("cancel",t),Rt("close",t);break;case"iframe":case"object":Rt("load",t);break;case"video":case"audio":for(n=0;n<Ri.length;n++)Rt(Ri[n],t);break;case"image":Rt("error",t),Rt("load",t);break;case"details":Rt("toggle",t);break;case"embed":case"source":case"link":Rt("error",t),Rt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in a)if(a.hasOwnProperty(k)&&(n=a[k],n!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:$t(t,e,k,n,a,null)}return;default:if(eu(e)){for(Q in a)a.hasOwnProperty(Q)&&(n=a[Q],n!==void 0&&$s(t,e,Q,n,a,void 0));return}}for(h in a)a.hasOwnProperty(h)&&(n=a[h],n!=null&&$t(t,e,h,n,a,null))}function kb(t,e,a,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,o=null,f=null,h=null,w=null,k=null,Q=null;for(M in a){var Z=a[M];if(a.hasOwnProperty(M)&&Z!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":w=Z;default:n.hasOwnProperty(M)||$t(t,e,M,null,n,Z)}}for(var z in n){var M=n[z];if(Z=a[z],n.hasOwnProperty(z)&&(M!=null||Z!=null))switch(z){case"type":o=M;break;case"name":i=M;break;case"checked":k=M;break;case"defaultChecked":Q=M;break;case"value":f=M;break;case"defaultValue":h=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(s(137,e));break;default:M!==Z&&$t(t,e,z,M,n,Z)}}Po(t,f,h,w,k,Q,o,i);return;case"select":M=f=h=z=null;for(o in a)if(w=a[o],a.hasOwnProperty(o)&&w!=null)switch(o){case"value":break;case"multiple":M=w;default:n.hasOwnProperty(o)||$t(t,e,o,null,n,w)}for(i in n)if(o=n[i],w=a[i],n.hasOwnProperty(i)&&(o!=null||w!=null))switch(i){case"value":z=o;break;case"defaultValue":h=o;break;case"multiple":f=o;default:o!==w&&$t(t,e,i,o,n,w)}e=h,a=f,n=M,z!=null?Jl(t,!!a,z,!1):!!n!=!!a&&(e!=null?Jl(t,!!a,e,!0):Jl(t,!!a,a?[]:"",!1));return;case"textarea":M=z=null;for(h in a)if(i=a[h],a.hasOwnProperty(h)&&i!=null&&!n.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:$t(t,e,h,null,n,i)}for(f in n)if(i=n[f],o=a[f],n.hasOwnProperty(f)&&(i!=null||o!=null))switch(f){case"value":z=i;break;case"defaultValue":M=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(s(91));break;default:i!==o&&$t(t,e,f,i,n,o)}df(t,z,M);return;case"option":for(var yt in a)if(z=a[yt],a.hasOwnProperty(yt)&&z!=null&&!n.hasOwnProperty(yt))switch(yt){case"selected":t.selected=!1;break;default:$t(t,e,yt,null,n,z)}for(w in n)if(z=n[w],M=a[w],n.hasOwnProperty(w)&&z!==M&&(z!=null||M!=null))switch(w){case"selected":t.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:$t(t,e,w,z,n,M)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var mt in a)z=a[mt],a.hasOwnProperty(mt)&&z!=null&&!n.hasOwnProperty(mt)&&$t(t,e,mt,null,n,z);for(k in n)if(z=n[k],M=a[k],n.hasOwnProperty(k)&&z!==M&&(z!=null||M!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,e));break;default:$t(t,e,k,z,n,M)}return;default:if(eu(e)){for(var Lt in a)z=a[Lt],a.hasOwnProperty(Lt)&&z!==void 0&&!n.hasOwnProperty(Lt)&&$s(t,e,Lt,void 0,n,z);for(Q in n)z=n[Q],M=a[Q],!n.hasOwnProperty(Q)||z===M||z===void 0&&M===void 0||$s(t,e,Q,z,n,M);return}}for(var R in a)z=a[R],a.hasOwnProperty(R)&&z!=null&&!n.hasOwnProperty(R)&&$t(t,e,R,null,n,z);for(Z in n)z=n[Z],M=a[Z],!n.hasOwnProperty(Z)||z===M||z==null&&M==null||$t(t,e,Z,z,n,M)}var Ls=null,Ys=null;function Kr(t){return t.nodeType===9?t:t.ownerDocument}function pp(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function mp(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Gs(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qs=null;function Cb(){var t=window.event;return t&&t.type==="popstate"?t===qs?!1:(qs=t,!0):(qs=null,!1)}var gp=typeof setTimeout=="function"?setTimeout:void 0,Ob=typeof clearTimeout=="function"?clearTimeout:void 0,bp=typeof Promise=="function"?Promise:void 0,zb=typeof queueMicrotask=="function"?queueMicrotask:typeof bp<"u"?function(t){return bp.resolve(null).then(t).catch(Mb)}:gp;function Mb(t){setTimeout(function(){throw t})}function al(t){return t==="head"}function yp(t,e){var a=e,n=0,i=0;do{var o=a.nextSibling;if(t.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(0<n&&8>n){a=n;var f=t.ownerDocument;if(a&1&&ki(f.documentElement),a&2&&ki(f.body),a&4)for(a=f.head,ki(a),f=a.firstChild;f;){var h=f.nextSibling,w=f.nodeName;f[qn]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=h}}if(i===0){t.removeChild(o),Bi(e);return}i--}else a==="$"||a==="$?"||a==="$!"?i++:n=a.charCodeAt(0)-48;else n=0;a=o}while(a);Bi(e)}function Qs(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Qs(a),Wo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Nb(t,e,a,n){for(;t.nodeType===1;){var i=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[qn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(o=t.getAttribute("rel"),o==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(o!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(o=t.getAttribute("src"),(o!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&o&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var o=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===o)return t}else return t;if(t=Pe(t.nextSibling),t===null)break}return null}function _b(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Pe(t.nextSibling),t===null))return null;return t}function Xs(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function jb(t,e){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")e();else{var n=function(){e(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),t._reactRetry=n}}function Pe(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Vs=null;function vp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}function xp(t,e,a){switch(e=Kr(a),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function ki(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Wo(t)}var Ke=new Map,Ap=new Set;function Wr(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var za=G.d;G.d={f:Bb,r:Hb,D:Ub,C:$b,L:Lb,m:Yb,X:qb,S:Gb,M:Qb};function Bb(){var t=za.f(),e=Lr();return t||e}function Hb(t){var e=Vl(t);e!==null&&e.tag===5&&e.type==="form"?Yd(e):za.r(t)}var Dn=typeof document>"u"?null:document;function wp(t,e,a){var n=Dn;if(n&&typeof e=="string"&&e){var i=Ye(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Ap.has(i)||(Ap.add(i),t={rel:t,crossOrigin:a,href:e},n.querySelector(i)===null&&(e=n.createElement("link"),me(e,"link",t),oe(e),n.head.appendChild(e)))}}function Ub(t){za.D(t),wp("dns-prefetch",t,null)}function $b(t,e){za.C(t,e),wp("preconnect",t,e)}function Lb(t,e,a){za.L(t,e,a);var n=Dn;if(n&&t&&e){var i='link[rel="preload"][as="'+Ye(e)+'"]';e==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+Ye(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+Ye(a.imageSizes)+'"]')):i+='[href="'+Ye(t)+'"]';var o=i;switch(e){case"style":o=kn(t);break;case"script":o=Cn(t)}Ke.has(o)||(t=x({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Ke.set(o,t),n.querySelector(i)!==null||e==="style"&&n.querySelector(Ci(o))||e==="script"&&n.querySelector(Oi(o))||(e=n.createElement("link"),me(e,"link",t),oe(e),n.head.appendChild(e)))}}function Yb(t,e){za.m(t,e);var a=Dn;if(a&&t){var n=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+Ye(n)+'"][href="'+Ye(t)+'"]',o=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Cn(t)}if(!Ke.has(o)&&(t=x({rel:"modulepreload",href:t},e),Ke.set(o,t),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Oi(o)))return}n=a.createElement("link"),me(n,"link",t),oe(n),a.head.appendChild(n)}}}function Gb(t,e,a){za.S(t,e,a);var n=Dn;if(n&&t){var i=Zl(n).hoistableStyles,o=kn(t);e=e||"default";var f=i.get(o);if(!f){var h={loading:0,preload:null};if(f=n.querySelector(Ci(o)))h.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Ke.get(o))&&Zs(t,a);var w=f=n.createElement("link");oe(w),me(w,"link",t),w._p=new Promise(function(k,Q){w.onload=k,w.onerror=Q}),w.addEventListener("load",function(){h.loading|=1}),w.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Jr(f,e,n)}f={type:"stylesheet",instance:f,count:1,state:h},i.set(o,f)}}}function qb(t,e){za.X(t,e);var a=Dn;if(a&&t){var n=Zl(a).hoistableScripts,i=Cn(t),o=n.get(i);o||(o=a.querySelector(Oi(i)),o||(t=x({src:t,async:!0},e),(e=Ke.get(i))&&Ks(t,e),o=a.createElement("script"),oe(o),me(o,"link",t),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(i,o))}}function Qb(t,e){za.M(t,e);var a=Dn;if(a&&t){var n=Zl(a).hoistableScripts,i=Cn(t),o=n.get(i);o||(o=a.querySelector(Oi(i)),o||(t=x({src:t,async:!0,type:"module"},e),(e=Ke.get(i))&&Ks(t,e),o=a.createElement("script"),oe(o),me(o,"link",t),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(i,o))}}function Sp(t,e,a,n){var i=(i=lt.current)?Wr(i):null;if(!i)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=kn(a.href),a=Zl(i).hoistableStyles,n=a.get(e),n||(n={type:"style",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=kn(a.href);var o=Zl(i).hoistableStyles,f=o.get(t);if(f||(i=i.ownerDocument||i,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(t,f),(o=i.querySelector(Ci(t)))&&!o._p&&(f.instance=o,f.state.loading=5),Ke.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ke.set(t,a),o||Xb(i,t,a,f.state))),e&&n===null)throw Error(s(528,""));return f}if(e&&n!==null)throw Error(s(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Cn(a),a=Zl(i).hoistableScripts,n=a.get(e),n||(n={type:"script",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function kn(t){return'href="'+Ye(t)+'"'}function Ci(t){return'link[rel="stylesheet"]['+t+"]"}function Ep(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function Xb(t,e,a,n){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?n.loading=1:(e=t.createElement("link"),n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2}),me(e,"link",a),oe(e),t.head.appendChild(e))}function Cn(t){return'[src="'+Ye(t)+'"]'}function Oi(t){return"script[async]"+t}function Tp(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var n=t.querySelector('style[data-href~="'+Ye(a.href)+'"]');if(n)return e.instance=n,oe(n),n;var i=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),oe(n),me(n,"style",i),Jr(n,a.precedence,t),e.instance=n;case"stylesheet":i=kn(a.href);var o=t.querySelector(Ci(i));if(o)return e.state.loading|=4,e.instance=o,oe(o),o;n=Ep(a),(i=Ke.get(i))&&Zs(n,i),o=(t.ownerDocument||t).createElement("link"),oe(o);var f=o;return f._p=new Promise(function(h,w){f.onload=h,f.onerror=w}),me(o,"link",n),e.state.loading|=4,Jr(o,a.precedence,t),e.instance=o;case"script":return o=Cn(a.src),(i=t.querySelector(Oi(o)))?(e.instance=i,oe(i),i):(n=a,(i=Ke.get(o))&&(n=x({},a),Ks(n,i)),t=t.ownerDocument||t,i=t.createElement("script"),oe(i),me(i,"link",n),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(n=e.instance,e.state.loading|=4,Jr(n,a.precedence,t));return e.instance}function Jr(t,e,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,o=i,f=0;f<n.length;f++){var h=n[f];if(h.dataset.precedence===e)o=h;else if(o!==i)break}o?o.parentNode.insertBefore(t,o.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function Zs(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Ks(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Fr=null;function Rp(t,e,a){if(Fr===null){var n=new Map,i=Fr=new Map;i.set(a,n)}else i=Fr,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(t))return n;for(n.set(t,null),a=a.getElementsByTagName(t),i=0;i<a.length;i++){var o=a[i];if(!(o[qn]||o[ye]||t==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var f=o.getAttribute(e)||"";f=t+f;var h=n.get(f);h?h.push(o):n.set(f,[o])}}return n}function Dp(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function Vb(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function kp(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var zi=null;function Zb(){}function Kb(t,e,a){if(zi===null)throw Error(s(475));var n=zi;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var i=kn(a.href),o=t.querySelector(Ci(i));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(n.count++,n=Ir.bind(n),t.then(n,n)),e.state.loading|=4,e.instance=o,oe(o);return}o=t.ownerDocument||t,a=Ep(a),(i=Ke.get(i))&&Zs(a,i),o=o.createElement("link"),oe(o);var f=o;f._p=new Promise(function(h,w){f.onload=h,f.onerror=w}),me(o,"link",a),e.instance=o}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(n.count++,e=Ir.bind(n),t.addEventListener("load",e),t.addEventListener("error",e))}}function Wb(){if(zi===null)throw Error(s(475));var t=zi;return t.stylesheets&&t.count===0&&Ws(t,t.stylesheets),0<t.count?function(e){var a=setTimeout(function(){if(t.stylesheets&&Ws(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Ir(){if(this.count--,this.count===0){if(this.stylesheets)Ws(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Pr=null;function Ws(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Pr=new Map,e.forEach(Jb,t),Pr=null,Ir.call(t))}function Jb(t,e){if(!(e.state.loading&4)){var a=Pr.get(t);if(a)var n=a.get(null);else{a=new Map,Pr.set(t,a);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<i.length;o++){var f=i[o];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(a.set(f.dataset.precedence,f),n=f)}n&&a.set(null,n)}i=e.instance,f=i.getAttribute("data-precedence"),o=a.get(f)||n,o===n&&a.set(null,i),a.set(f,i),this.count++,n=Ir.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),o?o.parentNode.insertBefore(i,o.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var Mi={$$typeof:Y,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function Fb(t,e,a,n,i,o,f,h){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xo(0),this.hiddenUpdates=Xo(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=o,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function Cp(t,e,a,n,i,o,f,h,w,k,Q,Z){return t=new Fb(t,e,a,f,h,w,k,Z),e=1,o===!0&&(e|=24),o=ze(3,null,null,e),t.current=o,o.stateNode=t,e=Ou(),e.refCount++,t.pooledCache=e,e.refCount++,o.memoizedState={element:n,isDehydrated:a,cache:e},_u(o),t}function Op(t){return t?(t=rn,t):rn}function zp(t,e,a,n,i,o){i=Op(i),n.context===null?n.context=i:n.pendingContext=i,n=qa(e),n.payload={element:a},o=o===void 0?null:o,o!==null&&(n.callback=o),a=Qa(t,n,e),a!==null&&(Be(a,t,e),ui(a,t,e))}function Mp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function Js(t,e){Mp(t,e),(t=t.alternate)&&Mp(t,e)}function Np(t){if(t.tag===13){var e=nn(t,67108864);e!==null&&Be(e,t,67108864),Js(t,67108864)}}var to=!0;function Ib(t,e,a,n){var i=C.T;C.T=null;var o=G.p;try{G.p=2,Fs(t,e,a,n)}finally{G.p=o,C.T=i}}function Pb(t,e,a,n){var i=C.T;C.T=null;var o=G.p;try{G.p=8,Fs(t,e,a,n)}finally{G.p=o,C.T=i}}function Fs(t,e,a,n){if(to){var i=Is(n);if(i===null)Us(t,e,n,eo,a),jp(t,n);else if(ey(i,t,e,a,n))n.stopPropagation();else if(jp(t,n),e&4&&-1<ty.indexOf(t)){for(;i!==null;){var o=Vl(i);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var f=ga(o.pendingLanes);if(f!==0){var h=o;for(h.pendingLanes|=2,h.entangledLanes|=2;f;){var w=1<<31-we(f);h.entanglements[1]|=w,f&=~w}ca(o),(Bt&6)===0&&(Ur=Qt()+500,Ti(0))}}break;case 13:h=nn(o,2),h!==null&&Be(h,o,2),Lr(),Js(o,2)}if(o=Is(n),o===null&&Us(t,e,n,eo,a),o===i)break;i=o}i!==null&&n.stopPropagation()}else Us(t,e,n,null,a)}}function Is(t){return t=lu(t),Ps(t)}var eo=null;function Ps(t){if(eo=null,t=Xl(t),t!==null){var e=d(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=p(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return eo=t,null}function _p(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(be()){case re:return 2;case Ue:return 8;case Ee:case na:return 32;case $e:return 268435456;default:return 32}default:return 32}}var tc=!1,ll=null,nl=null,il=null,Ni=new Map,_i=new Map,rl=[],ty="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jp(t,e){switch(t){case"focusin":case"focusout":ll=null;break;case"dragenter":case"dragleave":nl=null;break;case"mouseover":case"mouseout":il=null;break;case"pointerover":case"pointerout":Ni.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_i.delete(e.pointerId)}}function ji(t,e,a,n,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:a,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Vl(e),e!==null&&Np(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ey(t,e,a,n,i){switch(e){case"focusin":return ll=ji(ll,t,e,a,n,i),!0;case"dragenter":return nl=ji(nl,t,e,a,n,i),!0;case"mouseover":return il=ji(il,t,e,a,n,i),!0;case"pointerover":var o=i.pointerId;return Ni.set(o,ji(Ni.get(o)||null,t,e,a,n,i)),!0;case"gotpointercapture":return o=i.pointerId,_i.set(o,ji(_i.get(o)||null,t,e,a,n,i)),!0}return!1}function Bp(t){var e=Xl(t.target);if(e!==null){var a=d(e);if(a!==null){if(e=a.tag,e===13){if(e=p(a),e!==null){t.blockedOn=e,Kg(t.priority,function(){if(a.tag===13){var n=je();n=Vo(n);var i=nn(a,n);i!==null&&Be(i,a,n),Js(a,n)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ao(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Is(t.nativeEvent);if(a===null){a=t.nativeEvent;var n=new a.constructor(a.type,a);au=n,a.target.dispatchEvent(n),au=null}else return e=Vl(a),e!==null&&Np(e),t.blockedOn=a,!1;e.shift()}return!0}function Hp(t,e,a){ao(t)&&a.delete(e)}function ay(){tc=!1,ll!==null&&ao(ll)&&(ll=null),nl!==null&&ao(nl)&&(nl=null),il!==null&&ao(il)&&(il=null),Ni.forEach(Hp),_i.forEach(Hp)}function lo(t,e){t.blockedOn===e&&(t.blockedOn=null,tc||(tc=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,ay)))}var no=null;function Up(t){no!==t&&(no=t,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){no===t&&(no=null);for(var e=0;e<t.length;e+=3){var a=t[e],n=t[e+1],i=t[e+2];if(typeof n!="function"){if(Ps(n||a)===null)continue;break}var o=Vl(a);o!==null&&(t.splice(e,3),e-=3,Pu(o,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function Bi(t){function e(w){return lo(w,t)}ll!==null&&lo(ll,t),nl!==null&&lo(nl,t),il!==null&&lo(il,t),Ni.forEach(e),_i.forEach(e);for(var a=0;a<rl.length;a++){var n=rl[a];n.blockedOn===t&&(n.blockedOn=null)}for(;0<rl.length&&(a=rl[0],a.blockedOn===null);)Bp(a),a.blockedOn===null&&rl.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],o=a[n+1],f=i[Te]||null;if(typeof o=="function")f||Up(a);else if(f){var h=null;if(o&&o.hasAttribute("formAction")){if(i=o,f=o[Te]||null)h=f.formAction;else if(Ps(i)!==null)continue}else h=f.action;typeof h=="function"?a[n+1]=h:(a.splice(n,3),n-=3),Up(a)}}}function ec(t){this._internalRoot=t}io.prototype.render=ec.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var a=e.current,n=je();zp(a,n,t,e,null,null)},io.prototype.unmount=ec.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;zp(t.current,2,null,t,null,null),Lr(),e[Ql]=null}};function io(t){this._internalRoot=t}io.prototype.unstable_scheduleHydration=function(t){if(t){var e=tf();t={blockedOn:null,target:t,priority:e};for(var a=0;a<rl.length&&e!==0&&e<rl[a].priority;a++);rl.splice(a,0,t),a===0&&Bp(t)}};var $p=r.version;if($p!=="19.1.0")throw Error(s(527,$p,"19.1.0"));G.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=b(e),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var ly={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ro.isDisabled&&ro.supportsFiber)try{Ua=ro.inject(ly),Ae=ro}catch{}}return Ui.createRoot=function(t,e){if(!c(t))throw Error(s(299));var a=!1,n="",i=eh,o=ah,f=lh,h=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(o=e.onCaughtError),e.onRecoverableError!==void 0&&(f=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(h=e.unstable_transitionCallbacks)),e=Cp(t,1,!1,null,null,a,n,i,o,f,h,null),t[Ql]=e.current,Hs(t),new ec(e)},Ui.hydrateRoot=function(t,e,a){if(!c(t))throw Error(s(299));var n=!1,i="",o=eh,f=ah,h=lh,w=null,k=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(f=a.onCaughtError),a.onRecoverableError!==void 0&&(h=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(w=a.unstable_transitionCallbacks),a.formState!==void 0&&(k=a.formState)),e=Cp(t,1,!0,e,a??null,n,i,o,f,h,w,k),e.context=Op(null),a=e.current,n=je(),n=Vo(n),i=qa(n),i.callback=null,Qa(a,i,n),a=n,e.current.lanes=a,Gn(e,a),ca(e),t[Ql]=e.current,Hs(t),new io(e)},Ui.version="19.1.0",Ui}var Wp;function dy(){if(Wp)return nc.exports;Wp=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),nc.exports=fy(),nc.exports}var Cm=dy();const We=Mc(Cm);/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Jp="popstate";function hy(l={}){function r(c,d){let{pathname:p="/",search:y="",hash:b=""}=$n(c.location.hash.substring(1));return!p.startsWith("/")&&!p.startsWith(".")&&(p="/"+p),gc("",{pathname:p,search:y,hash:b},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function u(c,d){let p=c.document.querySelector("base"),y="";if(p&&p.getAttribute("href")){let b=c.location.href,m=b.indexOf("#");y=m===-1?b:b.slice(0,m)}return y+"#"+(typeof d=="string"?d:qi(d))}function s(c,d){ea(c.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(d)})`)}return my(r,u,s,l)}function ie(l,r){if(l===!1||l===null||typeof l>"u")throw new Error(r)}function ea(l,r){if(!l){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function py(){return Math.random().toString(36).substring(2,10)}function Fp(l,r){return{usr:l.state,key:l.key,idx:r}}function gc(l,r,u=null,s){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof r=="string"?$n(r):r,state:u,key:r&&r.key||s||py()}}function qi({pathname:l="/",search:r="",hash:u=""}){return r&&r!=="?"&&(l+=r.charAt(0)==="?"?r:"?"+r),u&&u!=="#"&&(l+=u.charAt(0)==="#"?u:"#"+u),l}function $n(l){let r={};if(l){let u=l.indexOf("#");u>=0&&(r.hash=l.substring(u),l=l.substring(0,u));let s=l.indexOf("?");s>=0&&(r.search=l.substring(s),l=l.substring(0,s)),l&&(r.pathname=l)}return r}function my(l,r,u,s={}){let{window:c=document.defaultView,v5Compat:d=!1}=s,p=c.history,y="POP",b=null,m=x();m==null&&(m=0,p.replaceState({...p.state,idx:m},""));function x(){return(p.state||{idx:null}).idx}function E(){y="POP";let N=x(),U=N==null?null:N-m;m=N,b&&b({action:y,location:J.location,delta:U})}function O(N,U){y="PUSH";let j=gc(J.location,N,U);u&&u(j,N),m=x()+1;let Y=Fp(j,m),F=J.createHref(j);try{p.pushState(Y,"",F)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;c.location.assign(F)}d&&b&&b({action:y,location:J.location,delta:1})}function L(N,U){y="REPLACE";let j=gc(J.location,N,U);u&&u(j,N),m=x();let Y=Fp(j,m),F=J.createHref(j);p.replaceState(Y,"",F),d&&b&&b({action:y,location:J.location,delta:0})}function $(N){return gy(N)}let J={get action(){return y},get location(){return l(c,p)},listen(N){if(b)throw new Error("A history only accepts one active listener");return c.addEventListener(Jp,E),b=N,()=>{c.removeEventListener(Jp,E),b=null}},createHref(N){return r(c,N)},createURL:$,encodeLocation(N){let U=$(N);return{pathname:U.pathname,search:U.search,hash:U.hash}},push:O,replace:L,go(N){return p.go(N)}};return J}function gy(l,r=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),ie(u,"No window.location.(origin|href) available to create URL");let s=typeof l=="string"?l:qi(l);return s=s.replace(/ $/,"%20"),!r&&s.startsWith("//")&&(s=u+s),new URL(s,u)}function Om(l,r,u="/"){return by(l,r,u,!1)}function by(l,r,u,s){let c=typeof r=="string"?$n(r):r,d=ja(c.pathname||"/",u);if(d==null)return null;let p=zm(l);yy(p);let y=null;for(let b=0;y==null&&b<p.length;++b){let m=Cy(d);y=Dy(p[b],m,s)}return y}function zm(l,r=[],u=[],s="",c=!1){let d=(p,y,b=c,m)=>{let x={relativePath:m===void 0?p.path||"":m,caseSensitive:p.caseSensitive===!0,childrenIndex:y,route:p};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(s)&&b)return;ie(x.relativePath.startsWith(s),`Absolute route path "${x.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(s.length)}let E=_a([s,x.relativePath]),O=u.concat(x);p.children&&p.children.length>0&&(ie(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),zm(p.children,r,O,E,b)),!(p.path==null&&!p.index)&&r.push({path:E,score:Ty(E,p.index),routesMeta:O})};return l.forEach((p,y)=>{var b;if(p.path===""||!((b=p.path)!=null&&b.includes("?")))d(p,y);else for(let m of Mm(p.path))d(p,y,!0,m)}),r}function Mm(l){let r=l.split("/");if(r.length===0)return[];let[u,...s]=r,c=u.endsWith("?"),d=u.replace(/\?$/,"");if(s.length===0)return c?[d,""]:[d];let p=Mm(s.join("/")),y=[];return y.push(...p.map(b=>b===""?d:[d,b].join("/"))),c&&y.push(...p),y.map(b=>l.startsWith("/")&&b===""?"/":b)}function yy(l){l.sort((r,u)=>r.score!==u.score?u.score-r.score:Ry(r.routesMeta.map(s=>s.childrenIndex),u.routesMeta.map(s=>s.childrenIndex)))}var vy=/^:[\w-]+$/,xy=3,Ay=2,wy=1,Sy=10,Ey=-2,Ip=l=>l==="*";function Ty(l,r){let u=l.split("/"),s=u.length;return u.some(Ip)&&(s+=Ey),r&&(s+=Ay),u.filter(c=>!Ip(c)).reduce((c,d)=>c+(vy.test(d)?xy:d===""?wy:Sy),s)}function Ry(l,r){return l.length===r.length&&l.slice(0,-1).every((s,c)=>s===r[c])?l[l.length-1]-r[r.length-1]:0}function Dy(l,r,u=!1){let{routesMeta:s}=l,c={},d="/",p=[];for(let y=0;y<s.length;++y){let b=s[y],m=y===s.length-1,x=d==="/"?r:r.slice(d.length)||"/",E=Ao({path:b.relativePath,caseSensitive:b.caseSensitive,end:m},x),O=b.route;if(!E&&m&&u&&!s[s.length-1].route.index&&(E=Ao({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},x)),!E)return null;Object.assign(c,E.params),p.push({params:c,pathname:_a([d,E.pathname]),pathnameBase:Ny(_a([d,E.pathnameBase])),route:O}),E.pathnameBase!=="/"&&(d=_a([d,E.pathnameBase]))}return p}function Ao(l,r){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[u,s]=ky(l.path,l.caseSensitive,l.end),c=r.match(u);if(!c)return null;let d=c[0],p=d.replace(/(.)\/+$/,"$1"),y=c.slice(1);return{params:s.reduce((m,{paramName:x,isOptional:E},O)=>{if(x==="*"){let $=y[O]||"";p=d.slice(0,d.length-$.length).replace(/(.)\/+$/,"$1")}const L=y[O];return E&&!L?m[x]=void 0:m[x]=(L||"").replace(/%2F/g,"/"),m},{}),pathname:d,pathnameBase:p,pattern:l}}function ky(l,r=!1,u=!0){ea(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let s=[],c="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,y,b)=>(s.push({paramName:y,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(s.push({paramName:"*"}),c+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?c+="\\/*$":l!==""&&l!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,r?void 0:"i"),s]}function Cy(l){try{return l.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return ea(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),l}}function ja(l,r){if(r==="/")return l;if(!l.toLowerCase().startsWith(r.toLowerCase()))return null;let u=r.endsWith("/")?r.length-1:r.length,s=l.charAt(u);return s&&s!=="/"?null:l.slice(u)||"/"}function Oy(l,r="/"){let{pathname:u,search:s="",hash:c=""}=typeof l=="string"?$n(l):l;return{pathname:u?u.startsWith("/")?u:zy(u,r):r,search:_y(s),hash:jy(c)}}function zy(l,r){let u=r.replace(/\/+$/,"").split("/");return l.split("/").forEach(c=>{c===".."?u.length>1&&u.pop():c!=="."&&u.push(c)}),u.length>1?u.join("/"):"/"}function uc(l,r,u,s){return`Cannot include a '${l}' character in a manually specified \`to.${r}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function My(l){return l.filter((r,u)=>u===0||r.route.path&&r.route.path.length>0)}function Nm(l){let r=My(l);return r.map((u,s)=>s===r.length-1?u.pathname:u.pathnameBase)}function _m(l,r,u,s=!1){let c;typeof l=="string"?c=$n(l):(c={...l},ie(!c.pathname||!c.pathname.includes("?"),uc("?","pathname","search",c)),ie(!c.pathname||!c.pathname.includes("#"),uc("#","pathname","hash",c)),ie(!c.search||!c.search.includes("#"),uc("#","search","hash",c)));let d=l===""||c.pathname==="",p=d?"/":c.pathname,y;if(p==null)y=u;else{let E=r.length-1;if(!s&&p.startsWith("..")){let O=p.split("/");for(;O[0]==="..";)O.shift(),E-=1;c.pathname=O.join("/")}y=E>=0?r[E]:"/"}let b=Oy(c,y),m=p&&p!=="/"&&p.endsWith("/"),x=(d||p===".")&&u.endsWith("/");return!b.pathname.endsWith("/")&&(m||x)&&(b.pathname+="/"),b}var _a=l=>l.join("/").replace(/\/\/+/g,"/"),Ny=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),_y=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,jy=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function By(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}var jm=["POST","PUT","PATCH","DELETE"];new Set(jm);var Hy=["GET",...jm];new Set(Hy);var Ln=v.createContext(null);Ln.displayName="DataRouter";var Oo=v.createContext(null);Oo.displayName="DataRouterState";v.createContext(!1);var Bm=v.createContext({isTransitioning:!1});Bm.displayName="ViewTransition";var Uy=v.createContext(new Map);Uy.displayName="Fetchers";var $y=v.createContext(null);$y.displayName="Await";var pa=v.createContext(null);pa.displayName="Navigation";var zo=v.createContext(null);zo.displayName="Location";var Ba=v.createContext({outlet:null,matches:[],isDataRoute:!1});Ba.displayName="Route";var _c=v.createContext(null);_c.displayName="RouteError";function Ly(l,{relative:r}={}){ie(Ki(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:s}=v.useContext(pa),{hash:c,pathname:d,search:p}=Wi(l,{relative:r}),y=d;return u!=="/"&&(y=d==="/"?u:_a([u,d])),s.createHref({pathname:y,search:p,hash:c})}function Ki(){return v.useContext(zo)!=null}function hl(){return ie(Ki(),"useLocation() may be used only in the context of a <Router> component."),v.useContext(zo).location}var Hm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Um(l){v.useContext(pa).static||v.useLayoutEffect(l)}function Yy(){let{isDataRoute:l}=v.useContext(Ba);return l?tv():Gy()}function Gy(){ie(Ki(),"useNavigate() may be used only in the context of a <Router> component.");let l=v.useContext(Ln),{basename:r,navigator:u}=v.useContext(pa),{matches:s}=v.useContext(Ba),{pathname:c}=hl(),d=JSON.stringify(Nm(s)),p=v.useRef(!1);return Um(()=>{p.current=!0}),v.useCallback((b,m={})=>{if(ea(p.current,Hm),!p.current)return;if(typeof b=="number"){u.go(b);return}let x=_m(b,JSON.parse(d),c,m.relative==="path");l==null&&r!=="/"&&(x.pathname=x.pathname==="/"?r:_a([r,x.pathname])),(m.replace?u.replace:u.push)(x,m.state,m)},[r,u,d,c,l])}v.createContext(null);function Wi(l,{relative:r}={}){let{matches:u}=v.useContext(Ba),{pathname:s}=hl(),c=JSON.stringify(Nm(u));return v.useMemo(()=>_m(l,JSON.parse(c),s,r==="path"),[l,c,s,r])}function qy(l,r,u,s,c){ie(Ki(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=v.useContext(pa),{matches:p}=v.useContext(Ba),y=p[p.length-1],b=y?y.params:{},m=y?y.pathname:"/",x=y?y.pathnameBase:"/",E=y&&y.route;{let j=E&&E.path||"";$m(m,!E||j.endsWith("*")||j.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${j}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${j}"> to <Route path="${j==="/"?"*":`${j}/*`}">.`)}let O=hl(),L;L=O;let $=L.pathname||"/",J=$;if(x!=="/"){let j=x.replace(/^\//,"").split("/");J="/"+$.replace(/^\//,"").split("/").slice(j.length).join("/")}let N=Om(l,{pathname:J});return ea(E||N!=null,`No routes matched location "${L.pathname}${L.search}${L.hash}" `),ea(N==null||N[N.length-1].route.element!==void 0||N[N.length-1].route.Component!==void 0||N[N.length-1].route.lazy!==void 0,`Matched leaf route at location "${L.pathname}${L.search}${L.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),Ky(N&&N.map(j=>Object.assign({},j,{params:Object.assign({},b,j.params),pathname:_a([x,d.encodeLocation?d.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?x:_a([x,d.encodeLocation?d.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),p,u,s,c)}function Qy(){let l=Py(),r=By(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),u=l instanceof Error?l.stack:null,s="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:s},d={padding:"2px 4px",backgroundColor:s},p=null;return console.error("Error handled by React Router default ErrorBoundary:",l),p=v.createElement(v.Fragment,null,v.createElement("p",null,"💿 Hey developer 👋"),v.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",v.createElement("code",{style:d},"ErrorBoundary")," or"," ",v.createElement("code",{style:d},"errorElement")," prop on your route.")),v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},r),u?v.createElement("pre",{style:c},u):null,p)}var Xy=v.createElement(Qy,null),Vy=class extends v.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,r){return r.location!==l.location||r.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:r.error,location:r.location,revalidation:l.revalidation||r.revalidation}}componentDidCatch(l,r){this.props.unstable_onError?this.props.unstable_onError(l,r):console.error("React Router caught the following error during render",l)}render(){return this.state.error!==void 0?v.createElement(Ba.Provider,{value:this.props.routeContext},v.createElement(_c.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Zy({routeContext:l,match:r,children:u}){let s=v.useContext(Ln);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),v.createElement(Ba.Provider,{value:l},u)}function Ky(l,r=[],u=null,s=null,c=null){if(l==null){if(!u)return null;if(u.errors)l=u.matches;else if(r.length===0&&!u.initialized&&u.matches.length>0)l=u.matches;else return null}let d=l,p=u==null?void 0:u.errors;if(p!=null){let m=d.findIndex(x=>x.route.id&&(p==null?void 0:p[x.route.id])!==void 0);ie(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),d=d.slice(0,Math.min(d.length,m+1))}let y=!1,b=-1;if(u)for(let m=0;m<d.length;m++){let x=d[m];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(b=m),x.route.id){let{loaderData:E,errors:O}=u,L=x.route.loader&&!E.hasOwnProperty(x.route.id)&&(!O||O[x.route.id]===void 0);if(x.route.lazy||L){y=!0,b>=0?d=d.slice(0,b+1):d=[d[0]];break}}}return d.reduceRight((m,x,E)=>{let O,L=!1,$=null,J=null;u&&(O=p&&x.route.id?p[x.route.id]:void 0,$=x.route.errorElement||Xy,y&&(b<0&&E===0?($m("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),L=!0,J=null):b===E&&(L=!0,J=x.route.hydrateFallbackElement||null)));let N=r.concat(d.slice(0,E+1)),U=()=>{let j;return O?j=$:L?j=J:x.route.Component?j=v.createElement(x.route.Component,null):x.route.element?j=x.route.element:j=m,v.createElement(Zy,{match:x,routeContext:{outlet:m,matches:N,isDataRoute:u!=null},children:j})};return u&&(x.route.ErrorBoundary||x.route.errorElement||E===0)?v.createElement(Vy,{location:u.location,revalidation:u.revalidation,component:$,error:O,children:U(),routeContext:{outlet:null,matches:N,isDataRoute:!0},unstable_onError:s}):U()},null)}function jc(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wy(l){let r=v.useContext(Ln);return ie(r,jc(l)),r}function Jy(l){let r=v.useContext(Oo);return ie(r,jc(l)),r}function Fy(l){let r=v.useContext(Ba);return ie(r,jc(l)),r}function Bc(l){let r=Fy(l),u=r.matches[r.matches.length-1];return ie(u.route.id,`${l} can only be used on routes that contain a unique "id"`),u.route.id}function Iy(){return Bc("useRouteId")}function Py(){var s;let l=v.useContext(_c),r=Jy("useRouteError"),u=Bc("useRouteError");return l!==void 0?l:(s=r.errors)==null?void 0:s[u]}function tv(){let{router:l}=Wy("useNavigate"),r=Bc("useNavigate"),u=v.useRef(!1);return Um(()=>{u.current=!0}),v.useCallback(async(c,d={})=>{ea(u.current,Hm),u.current&&(typeof c=="number"?l.navigate(c):await l.navigate(c,{fromRouteId:r,...d}))},[l,r])}var Pp={};function $m(l,r,u){!r&&!Pp[l]&&(Pp[l]=!0,ea(!1,u))}v.memo(ev);function ev({routes:l,future:r,state:u,unstable_onError:s}){return qy(l,void 0,u,s,r)}function av({basename:l="/",children:r=null,location:u,navigationType:s="POP",navigator:c,static:d=!1}){ie(!Ki(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=l.replace(/^\/*/,"/"),y=v.useMemo(()=>({basename:p,navigator:c,static:d,future:{}}),[p,c,d]);typeof u=="string"&&(u=$n(u));let{pathname:b="/",search:m="",hash:x="",state:E=null,key:O="default"}=u,L=v.useMemo(()=>{let $=ja(b,p);return $==null?null:{location:{pathname:$,search:m,hash:x,state:E,key:O},navigationType:s}},[p,b,m,x,E,O,s]);return ea(L!=null,`<Router basename="${p}"> is not able to match the URL "${b}${m}${x}" because it does not start with the basename, so the <Router> won't render anything.`),L==null?null:v.createElement(pa.Provider,{value:y},v.createElement(zo.Provider,{children:r,value:L}))}var po="get",mo="application/x-www-form-urlencoded";function Mo(l){return l!=null&&typeof l.tagName=="string"}function lv(l){return Mo(l)&&l.tagName.toLowerCase()==="button"}function nv(l){return Mo(l)&&l.tagName.toLowerCase()==="form"}function iv(l){return Mo(l)&&l.tagName.toLowerCase()==="input"}function rv(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function ov(l,r){return l.button===0&&(!r||r==="_self")&&!rv(l)}var oo=null;function uv(){if(oo===null)try{new FormData(document.createElement("form"),0),oo=!1}catch{oo=!0}return oo}var sv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function sc(l){return l!=null&&!sv.has(l)?(ea(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${mo}"`),null):l}function cv(l,r){let u,s,c,d,p;if(nv(l)){let y=l.getAttribute("action");s=y?ja(y,r):null,u=l.getAttribute("method")||po,c=sc(l.getAttribute("enctype"))||mo,d=new FormData(l)}else if(lv(l)||iv(l)&&(l.type==="submit"||l.type==="image")){let y=l.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=l.getAttribute("formaction")||y.getAttribute("action");if(s=b?ja(b,r):null,u=l.getAttribute("formmethod")||y.getAttribute("method")||po,c=sc(l.getAttribute("formenctype"))||sc(y.getAttribute("enctype"))||mo,d=new FormData(y,l),!uv()){let{name:m,type:x,value:E}=l;if(x==="image"){let O=m?`${m}.`:"";d.append(`${O}x`,"0"),d.append(`${O}y`,"0")}else m&&d.append(m,E)}}else{if(Mo(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=po,s=null,c=mo,p=l}return d&&c==="text/plain"&&(p=d,d=void 0),{action:s,method:u.toLowerCase(),encType:c,formData:d,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Hc(l,r){if(l===!1||l===null||typeof l>"u")throw new Error(r)}function fv(l,r,u){let s=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return s.pathname==="/"?s.pathname=`_root.${u}`:r&&ja(s.pathname,r)==="/"?s.pathname=`${r.replace(/\/$/,"")}/_root.${u}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${u}`,s}async function dv(l,r){if(l.id in r)return r[l.id];try{let u=await import(l.module);return r[l.id]=u,u}catch(u){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function hv(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function pv(l,r,u){let s=await Promise.all(l.map(async c=>{let d=r.routes[c.route.id];if(d){let p=await dv(d,u);return p.links?p.links():[]}return[]}));return yv(s.flat(1).filter(hv).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function tm(l,r,u,s,c,d){let p=(b,m)=>u[m]?b.route.id!==u[m].route.id:!0,y=(b,m)=>{var x;return u[m].pathname!==b.pathname||((x=u[m].route.path)==null?void 0:x.endsWith("*"))&&u[m].params["*"]!==b.params["*"]};return d==="assets"?r.filter((b,m)=>p(b,m)||y(b,m)):d==="data"?r.filter((b,m)=>{var E;let x=s.routes[b.route.id];if(!x||!x.hasLoader)return!1;if(p(b,m)||y(b,m))return!0;if(b.route.shouldRevalidate){let O=b.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:((E=u[0])==null?void 0:E.params)||{},nextUrl:new URL(l,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof O=="boolean")return O}return!0}):[]}function mv(l,r,{includeHydrateFallback:u}={}){return gv(l.map(s=>{let c=r.routes[s.route.id];if(!c)return[];let d=[c.module];return c.clientActionModule&&(d=d.concat(c.clientActionModule)),c.clientLoaderModule&&(d=d.concat(c.clientLoaderModule)),u&&c.hydrateFallbackModule&&(d=d.concat(c.hydrateFallbackModule)),c.imports&&(d=d.concat(c.imports)),d}).flat(1))}function gv(l){return[...new Set(l)]}function bv(l){let r={},u=Object.keys(l).sort();for(let s of u)r[s]=l[s];return r}function yv(l,r){let u=new Set;return new Set(r),l.reduce((s,c)=>{let d=JSON.stringify(bv(c));return u.has(d)||(u.add(d),s.push({key:d,link:c})),s},[])}function Lm(){let l=v.useContext(Ln);return Hc(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function vv(){let l=v.useContext(Oo);return Hc(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var Uc=v.createContext(void 0);Uc.displayName="FrameworkContext";function Ym(){let l=v.useContext(Uc);return Hc(l,"You must render this element inside a <HydratedRouter> element"),l}function xv(l,r){let u=v.useContext(Uc),[s,c]=v.useState(!1),[d,p]=v.useState(!1),{onFocus:y,onBlur:b,onMouseEnter:m,onMouseLeave:x,onTouchStart:E}=r,O=v.useRef(null);v.useEffect(()=>{if(l==="render"&&p(!0),l==="viewport"){let J=U=>{U.forEach(j=>{p(j.isIntersecting)})},N=new IntersectionObserver(J,{threshold:.5});return O.current&&N.observe(O.current),()=>{N.disconnect()}}},[l]),v.useEffect(()=>{if(s){let J=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(J)}}},[s]);let L=()=>{c(!0)},$=()=>{c(!1),p(!1)};return u?l!=="intent"?[d,O,{}]:[d,O,{onFocus:$i(y,L),onBlur:$i(b,$),onMouseEnter:$i(m,L),onMouseLeave:$i(x,$),onTouchStart:$i(E,L)}]:[!1,O,{}]}function $i(l,r){return u=>{l&&l(u),u.defaultPrevented||r(u)}}function Av({page:l,...r}){let{router:u}=Lm(),s=v.useMemo(()=>Om(u.routes,l,u.basename),[u.routes,l,u.basename]);return s?v.createElement(Sv,{page:l,matches:s,...r}):null}function wv(l){let{manifest:r,routeModules:u}=Ym(),[s,c]=v.useState([]);return v.useEffect(()=>{let d=!1;return pv(l,r,u).then(p=>{d||c(p)}),()=>{d=!0}},[l,r,u]),s}function Sv({page:l,matches:r,...u}){let s=hl(),{manifest:c,routeModules:d}=Ym(),{basename:p}=Lm(),{loaderData:y,matches:b}=vv(),m=v.useMemo(()=>tm(l,r,b,c,s,"data"),[l,r,b,c,s]),x=v.useMemo(()=>tm(l,r,b,c,s,"assets"),[l,r,b,c,s]),E=v.useMemo(()=>{if(l===s.pathname+s.search+s.hash)return[];let $=new Set,J=!1;if(r.forEach(U=>{var Y;let j=c.routes[U.route.id];!j||!j.hasLoader||(!m.some(F=>F.route.id===U.route.id)&&U.route.id in y&&((Y=d[U.route.id])!=null&&Y.shouldRevalidate)||j.hasClientLoader?J=!0:$.add(U.route.id))}),$.size===0)return[];let N=fv(l,p,"data");return J&&$.size>0&&N.searchParams.set("_routes",r.filter(U=>$.has(U.route.id)).map(U=>U.route.id).join(",")),[N.pathname+N.search]},[p,y,s,c,m,r,l,d]),O=v.useMemo(()=>mv(x,c),[x,c]),L=wv(x);return v.createElement(v.Fragment,null,E.map($=>v.createElement("link",{key:$,rel:"prefetch",as:"fetch",href:$,...u})),O.map($=>v.createElement("link",{key:$,rel:"modulepreload",href:$,...u})),L.map(({key:$,link:J})=>v.createElement("link",{key:$,nonce:u.nonce,...J})))}function Ev(...l){return r=>{l.forEach(u=>{typeof u=="function"?u(r):u!=null&&(u.current=r)})}}var Gm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Gm&&(window.__reactRouterVersion="7.9.1")}catch{}function Tv({basename:l,children:r,window:u}){let s=v.useRef();s.current==null&&(s.current=hy({window:u,v5Compat:!0}));let c=s.current,[d,p]=v.useState({action:c.action,location:c.location}),y=v.useCallback(b=>{v.startTransition(()=>p(b))},[p]);return v.useLayoutEffect(()=>c.listen(y),[c,y]),v.createElement(av,{basename:l,children:r,location:d.location,navigationType:d.action,navigator:c})}var qm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qm=v.forwardRef(function({onClick:r,discover:u="render",prefetch:s="none",relative:c,reloadDocument:d,replace:p,state:y,target:b,to:m,preventScrollReset:x,viewTransition:E,...O},L){let{basename:$}=v.useContext(pa),J=typeof m=="string"&&qm.test(m),N,U=!1;if(typeof m=="string"&&J&&(N=m,Gm))try{let rt=new URL(window.location.href),Ot=m.startsWith("//")?new URL(rt.protocol+m):new URL(m),Ct=ja(Ot.pathname,$);Ot.origin===rt.origin&&Ct!=null?m=Ct+Ot.search+Ot.hash:U=!0}catch{ea(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let j=Ly(m,{relative:c}),[Y,F,I]=xv(s,O),nt=Cv(m,{replace:p,state:y,target:b,preventScrollReset:x,relative:c,viewTransition:E});function B(rt){r&&r(rt),rt.defaultPrevented||nt(rt)}let ct=v.createElement("a",{...O,...I,href:N||j,onClick:U||d?r:B,ref:Ev(L,F),target:b,"data-discover":!J&&u==="render"?"true":void 0});return Y&&!J?v.createElement(v.Fragment,null,ct,v.createElement(Av,{page:j})):ct});Qm.displayName="Link";var Rv=v.forwardRef(function({"aria-current":r="page",caseSensitive:u=!1,className:s="",end:c=!1,style:d,to:p,viewTransition:y,children:b,...m},x){let E=Wi(p,{relative:m.relative}),O=hl(),L=v.useContext(Oo),{navigator:$,basename:J}=v.useContext(pa),N=L!=null&&_v(E)&&y===!0,U=$.encodeLocation?$.encodeLocation(E).pathname:E.pathname,j=O.pathname,Y=L&&L.navigation&&L.navigation.location?L.navigation.location.pathname:null;u||(j=j.toLowerCase(),Y=Y?Y.toLowerCase():null,U=U.toLowerCase()),Y&&J&&(Y=ja(Y,J)||Y);const F=U!=="/"&&U.endsWith("/")?U.length-1:U.length;let I=j===U||!c&&j.startsWith(U)&&j.charAt(F)==="/",nt=Y!=null&&(Y===U||!c&&Y.startsWith(U)&&Y.charAt(U.length)==="/"),B={isActive:I,isPending:nt,isTransitioning:N},ct=I?r:void 0,rt;typeof s=="function"?rt=s(B):rt=[s,I?"active":null,nt?"pending":null,N?"transitioning":null].filter(Boolean).join(" ");let Ot=typeof d=="function"?d(B):d;return v.createElement(Qm,{...m,"aria-current":ct,className:rt,ref:x,style:Ot,to:p,viewTransition:y},typeof b=="function"?b(B):b)});Rv.displayName="NavLink";var Dv=v.forwardRef(({discover:l="render",fetcherKey:r,navigate:u,reloadDocument:s,replace:c,state:d,method:p=po,action:y,onSubmit:b,relative:m,preventScrollReset:x,viewTransition:E,...O},L)=>{let $=Mv(),J=Nv(y,{relative:m}),N=p.toLowerCase()==="get"?"get":"post",U=typeof y=="string"&&qm.test(y),j=Y=>{if(b&&b(Y),Y.defaultPrevented)return;Y.preventDefault();let F=Y.nativeEvent.submitter,I=(F==null?void 0:F.getAttribute("formmethod"))||p;$(F||Y.currentTarget,{fetcherKey:r,method:I,navigate:u,replace:c,state:d,relative:m,preventScrollReset:x,viewTransition:E})};return v.createElement("form",{ref:L,method:N,action:J,onSubmit:s?b:j,...O,"data-discover":!U&&l==="render"?"true":void 0})});Dv.displayName="Form";function kv(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Xm(l){let r=v.useContext(Ln);return ie(r,kv(l)),r}function Cv(l,{target:r,replace:u,state:s,preventScrollReset:c,relative:d,viewTransition:p}={}){let y=Yy(),b=hl(),m=Wi(l,{relative:d});return v.useCallback(x=>{if(ov(x,r)){x.preventDefault();let E=u!==void 0?u:qi(b)===qi(m);y(l,{replace:E,state:s,preventScrollReset:c,relative:d,viewTransition:p})}},[b,y,m,u,s,r,l,c,d,p])}var Ov=0,zv=()=>`__${String(++Ov)}__`;function Mv(){let{router:l}=Xm("useSubmit"),{basename:r}=v.useContext(pa),u=Iy();return v.useCallback(async(s,c={})=>{let{action:d,method:p,encType:y,formData:b,body:m}=cv(s,r);if(c.navigate===!1){let x=c.fetcherKey||zv();await l.fetch(x,u,c.action||d,{preventScrollReset:c.preventScrollReset,formData:b,body:m,formMethod:c.method||p,formEncType:c.encType||y,flushSync:c.flushSync})}else await l.navigate(c.action||d,{preventScrollReset:c.preventScrollReset,formData:b,body:m,formMethod:c.method||p,formEncType:c.encType||y,replace:c.replace,state:c.state,fromRouteId:u,flushSync:c.flushSync,viewTransition:c.viewTransition})},[l,r,u])}function Nv(l,{relative:r}={}){let{basename:u}=v.useContext(pa),s=v.useContext(Ba);ie(s,"useFormAction must be used inside a RouteContext");let[c]=s.matches.slice(-1),d={...Wi(l||".",{relative:r})},p=hl();if(l==null){d.search=p.search;let y=new URLSearchParams(d.search),b=y.getAll("index");if(b.some(x=>x==="")){y.delete("index"),b.filter(E=>E).forEach(E=>y.append("index",E));let x=y.toString();d.search=x?`?${x}`:""}}return(!l||l===".")&&c.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(d.pathname=d.pathname==="/"?u:_a([u,d.pathname])),qi(d)}function _v(l,{relative:r}={}){let u=v.useContext(Bm);ie(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Xm("useViewTransitionState"),c=Wi(l,{relative:r});if(!u.isTransitioning)return!1;let d=ja(u.currentLocation.pathname,s)||u.currentLocation.pathname,p=ja(u.nextLocation.pathname,s)||u.nextLocation.pathname;return Ao(c.pathname,p)!=null||Ao(c.pathname,d)!=null}var jv=km(),de=function(){return de=Object.assign||function(r){for(var u,s=1,c=arguments.length;s<c;s++){u=arguments[s];for(var d in u)Object.prototype.hasOwnProperty.call(u,d)&&(r[d]=u[d])}return r},de.apply(this,arguments)};function Qi(l,r,u){if(u||arguments.length===2)for(var s=0,c=r.length,d;s<c;s++)(d||!(s in r))&&(d||(d=Array.prototype.slice.call(r,0,s)),d[s]=r[s]);return l.concat(d||Array.prototype.slice.call(r))}var Xt="-ms-",Gi="-moz-",_t="-webkit-",Vm="comm",No="rule",$c="decl",Bv="@import",Zm="@keyframes",Hv="@layer",Km=Math.abs,Lc=String.fromCharCode,bc=Object.assign;function Uv(l,r){return fe(l,0)^45?(((r<<2^fe(l,0))<<2^fe(l,1))<<2^fe(l,2))<<2^fe(l,3):0}function Wm(l){return l.trim()}function Na(l,r){return(l=r.exec(l))?l[0]:l}function wt(l,r,u){return l.replace(r,u)}function go(l,r,u){return l.indexOf(r,u)}function fe(l,r){return l.charCodeAt(r)|0}function _n(l,r,u){return l.slice(r,u)}function da(l){return l.length}function Jm(l){return l.length}function Yi(l,r){return r.push(l),l}function $v(l,r){return l.map(r).join("")}function em(l,r){return l.filter(function(u){return!Na(u,r)})}var _o=1,jn=1,Fm=0,Je=0,ee=0,Yn="";function jo(l,r,u,s,c,d,p,y){return{value:l,root:r,parent:u,type:s,props:c,children:d,line:_o,column:jn,length:p,return:"",siblings:y}}function ul(l,r){return bc(jo("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},r)}function On(l){for(;l.root;)l=ul(l.root,{children:[l]});Yi(l,l.siblings)}function Lv(){return ee}function Yv(){return ee=Je>0?fe(Yn,--Je):0,jn--,ee===10&&(jn=1,_o--),ee}function ta(){return ee=Je<Fm?fe(Yn,Je++):0,jn++,ee===10&&(jn=1,_o++),ee}function jl(){return fe(Yn,Je)}function bo(){return Je}function Bo(l,r){return _n(Yn,l,r)}function yc(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Gv(l){return _o=jn=1,Fm=da(Yn=l),Je=0,[]}function qv(l){return Yn="",l}function cc(l){return Wm(Bo(Je-1,vc(l===91?l+2:l===40?l+1:l)))}function Qv(l){for(;(ee=jl())&&ee<33;)ta();return yc(l)>2||yc(ee)>3?"":" "}function Xv(l,r){for(;--r&&ta()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return Bo(l,bo()+(r<6&&jl()==32&&ta()==32))}function vc(l){for(;ta();)switch(ee){case l:return Je;case 34:case 39:l!==34&&l!==39&&vc(ee);break;case 40:l===41&&vc(l);break;case 92:ta();break}return Je}function Vv(l,r){for(;ta()&&l+ee!==57;)if(l+ee===84&&jl()===47)break;return"/*"+Bo(r,Je-1)+"*"+Lc(l===47?l:ta())}function Zv(l){for(;!yc(jl());)ta();return Bo(l,Je)}function Kv(l){return qv(yo("",null,null,null,[""],l=Gv(l),0,[0],l))}function yo(l,r,u,s,c,d,p,y,b){for(var m=0,x=0,E=p,O=0,L=0,$=0,J=1,N=1,U=1,j=0,Y="",F=c,I=d,nt=s,B=Y;N;)switch($=j,j=ta()){case 40:if($!=108&&fe(B,E-1)==58){go(B+=wt(cc(j),"&","&\f"),"&\f",Km(m?y[m-1]:0))!=-1&&(U=-1);break}case 34:case 39:case 91:B+=cc(j);break;case 9:case 10:case 13:case 32:B+=Qv($);break;case 92:B+=Xv(bo()-1,7);continue;case 47:switch(jl()){case 42:case 47:Yi(Wv(Vv(ta(),bo()),r,u,b),b);break;default:B+="/"}break;case 123*J:y[m++]=da(B)*U;case 125*J:case 59:case 0:switch(j){case 0:case 125:N=0;case 59+x:U==-1&&(B=wt(B,/\f/g,"")),L>0&&da(B)-E&&Yi(L>32?lm(B+";",s,u,E-1,b):lm(wt(B," ","")+";",s,u,E-2,b),b);break;case 59:B+=";";default:if(Yi(nt=am(B,r,u,m,x,c,y,Y,F=[],I=[],E,d),d),j===123)if(x===0)yo(B,r,nt,nt,F,d,E,y,I);else switch(O===99&&fe(B,3)===110?100:O){case 100:case 108:case 109:case 115:yo(l,nt,nt,s&&Yi(am(l,nt,nt,0,0,c,y,Y,c,F=[],E,I),I),c,I,E,y,s?F:I);break;default:yo(B,nt,nt,nt,[""],I,0,y,I)}}m=x=L=0,J=U=1,Y=B="",E=p;break;case 58:E=1+da(B),L=$;default:if(J<1){if(j==123)--J;else if(j==125&&J++==0&&Yv()==125)continue}switch(B+=Lc(j),j*J){case 38:U=x>0?1:(B+="\f",-1);break;case 44:y[m++]=(da(B)-1)*U,U=1;break;case 64:jl()===45&&(B+=cc(ta())),O=jl(),x=E=da(Y=B+=Zv(bo())),j++;break;case 45:$===45&&da(B)==2&&(J=0)}}return d}function am(l,r,u,s,c,d,p,y,b,m,x,E){for(var O=c-1,L=c===0?d:[""],$=Jm(L),J=0,N=0,U=0;J<s;++J)for(var j=0,Y=_n(l,O+1,O=Km(N=p[J])),F=l;j<$;++j)(F=Wm(N>0?L[j]+" "+Y:wt(Y,/&\f/g,L[j])))&&(b[U++]=F);return jo(l,r,u,c===0?No:y,b,m,x,E)}function Wv(l,r,u,s){return jo(l,r,u,Vm,Lc(Lv()),_n(l,2,-2),0,s)}function lm(l,r,u,s,c){return jo(l,r,u,$c,_n(l,0,s),_n(l,s+1,-1),s,c)}function Im(l,r,u){switch(Uv(l,r)){case 5103:return _t+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return _t+l+l;case 4789:return Gi+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return _t+l+Gi+l+Xt+l+l;case 5936:switch(fe(l,r+11)){case 114:return _t+l+Xt+wt(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return _t+l+Xt+wt(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return _t+l+Xt+wt(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return _t+l+Xt+l+l;case 6165:return _t+l+Xt+"flex-"+l+l;case 5187:return _t+l+wt(l,/(\w+).+(:[^]+)/,_t+"box-$1$2"+Xt+"flex-$1$2")+l;case 5443:return _t+l+Xt+"flex-item-"+wt(l,/flex-|-self/g,"")+(Na(l,/flex-|baseline/)?"":Xt+"grid-row-"+wt(l,/flex-|-self/g,""))+l;case 4675:return _t+l+Xt+"flex-line-pack"+wt(l,/align-content|flex-|-self/g,"")+l;case 5548:return _t+l+Xt+wt(l,"shrink","negative")+l;case 5292:return _t+l+Xt+wt(l,"basis","preferred-size")+l;case 6060:return _t+"box-"+wt(l,"-grow","")+_t+l+Xt+wt(l,"grow","positive")+l;case 4554:return _t+wt(l,/([^-])(transform)/g,"$1"+_t+"$2")+l;case 6187:return wt(wt(wt(l,/(zoom-|grab)/,_t+"$1"),/(image-set)/,_t+"$1"),l,"")+l;case 5495:case 3959:return wt(l,/(image-set\([^]*)/,_t+"$1$`$1");case 4968:return wt(wt(l,/(.+:)(flex-)?(.*)/,_t+"box-pack:$3"+Xt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+_t+l+l;case 4200:if(!Na(l,/flex-|baseline/))return Xt+"grid-column-align"+_n(l,r)+l;break;case 2592:case 3360:return Xt+wt(l,"template-","")+l;case 4384:case 3616:return u&&u.some(function(s,c){return r=c,Na(s.props,/grid-\w+-end/)})?~go(l+(u=u[r].value),"span",0)?l:Xt+wt(l,"-start","")+l+Xt+"grid-row-span:"+(~go(u,"span",0)?Na(u,/\d+/):+Na(u,/\d+/)-+Na(l,/\d+/))+";":Xt+wt(l,"-start","")+l;case 4896:case 4128:return u&&u.some(function(s){return Na(s.props,/grid-\w+-start/)})?l:Xt+wt(wt(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return wt(l,/(.+)-inline(.+)/,_t+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(da(l)-1-r>6)switch(fe(l,r+1)){case 109:if(fe(l,r+4)!==45)break;case 102:return wt(l,/(.+:)(.+)-([^]+)/,"$1"+_t+"$2-$3$1"+Gi+(fe(l,r+3)==108?"$3":"$2-$3"))+l;case 115:return~go(l,"stretch",0)?Im(wt(l,"stretch","fill-available"),r,u)+l:l}break;case 5152:case 5920:return wt(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,c,d,p,y,b,m){return Xt+c+":"+d+m+(p?Xt+c+"-span:"+(y?b:+b-+d)+m:"")+l});case 4949:if(fe(l,r+6)===121)return wt(l,":",":"+_t)+l;break;case 6444:switch(fe(l,fe(l,14)===45?18:11)){case 120:return wt(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+_t+(fe(l,14)===45?"inline-":"")+"box$3$1"+_t+"$2$3$1"+Xt+"$2box$3")+l;case 100:return wt(l,":",":"+Xt)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return wt(l,"scroll-","scroll-snap-")+l}return l}function wo(l,r){for(var u="",s=0;s<l.length;s++)u+=r(l[s],s,l,r)||"";return u}function Jv(l,r,u,s){switch(l.type){case Hv:if(l.children.length)break;case Bv:case $c:return l.return=l.return||l.value;case Vm:return"";case Zm:return l.return=l.value+"{"+wo(l.children,s)+"}";case No:if(!da(l.value=l.props.join(",")))return""}return da(u=wo(l.children,s))?l.return=l.value+"{"+u+"}":""}function Fv(l){var r=Jm(l);return function(u,s,c,d){for(var p="",y=0;y<r;y++)p+=l[y](u,s,c,d)||"";return p}}function Iv(l){return function(r){r.root||(r=r.return)&&l(r)}}function Pv(l,r,u,s){if(l.length>-1&&!l.return)switch(l.type){case $c:l.return=Im(l.value,l.length,u);return;case Zm:return wo([ul(l,{value:wt(l.value,"@","@"+_t)})],s);case No:if(l.length)return $v(u=l.props,function(c){switch(Na(c,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":On(ul(l,{props:[wt(c,/:(read-\w+)/,":"+Gi+"$1")]})),On(ul(l,{props:[c]})),bc(l,{props:em(u,s)});break;case"::placeholder":On(ul(l,{props:[wt(c,/:(plac\w+)/,":"+_t+"input-$1")]})),On(ul(l,{props:[wt(c,/:(plac\w+)/,":"+Gi+"$1")]})),On(ul(l,{props:[wt(c,/:(plac\w+)/,Xt+"input-$1")]})),On(ul(l,{props:[c]})),bc(l,{props:em(u,s)});break}return""})}}var t1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},He={},Bn=typeof process<"u"&&He!==void 0&&(He.REACT_APP_SC_ATTR||He.SC_ATTR)||"data-styled",Pm="active",tg="data-styled-version",Ho="6.1.17",Yc=`/*!sc*/
`,So=typeof window<"u"&&"HTMLElement"in window,e1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&He!==void 0&&He.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&He.REACT_APP_SC_DISABLE_SPEEDY!==""?He.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&He.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&He!==void 0&&He.SC_DISABLE_SPEEDY!==void 0&&He.SC_DISABLE_SPEEDY!==""&&He.SC_DISABLE_SPEEDY!=="false"&&He.SC_DISABLE_SPEEDY),a1={},Uo=Object.freeze([]),Hn=Object.freeze({});function eg(l,r,u){return u===void 0&&(u=Hn),l.theme!==u.theme&&l.theme||r||u.theme}var ag=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),l1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,n1=/(^-|-$)/g;function nm(l){return l.replace(l1,"-").replace(n1,"")}var i1=/(a)(d)/gi,uo=52,im=function(l){return String.fromCharCode(l+(l>25?39:97))};function xc(l){var r,u="";for(r=Math.abs(l);r>uo;r=r/uo|0)u=im(r%uo)+u;return(im(r%uo)+u).replace(i1,"$1-$2")}var fc,lg=5381,Nn=function(l,r){for(var u=r.length;u;)l=33*l^r.charCodeAt(--u);return l},ng=function(l){return Nn(lg,l)};function ig(l){return xc(ng(l)>>>0)}function r1(l){return l.displayName||l.name||"Component"}function dc(l){return typeof l=="string"&&!0}var rg=typeof Symbol=="function"&&Symbol.for,og=rg?Symbol.for("react.memo"):60115,o1=rg?Symbol.for("react.forward_ref"):60112,u1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ug={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c1=((fc={})[o1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},fc[og]=ug,fc);function rm(l){return("type"in(r=l)&&r.type.$$typeof)===og?ug:"$$typeof"in l?c1[l.$$typeof]:u1;var r}var f1=Object.defineProperty,d1=Object.getOwnPropertyNames,om=Object.getOwnPropertySymbols,h1=Object.getOwnPropertyDescriptor,p1=Object.getPrototypeOf,um=Object.prototype;function sg(l,r,u){if(typeof r!="string"){if(um){var s=p1(r);s&&s!==um&&sg(l,s,u)}var c=d1(r);om&&(c=c.concat(om(r)));for(var d=rm(l),p=rm(r),y=0;y<c.length;++y){var b=c[y];if(!(b in s1||u&&u[b]||p&&b in p||d&&b in d)){var m=h1(r,b);try{f1(l,b,m)}catch{}}}}return l}function Bl(l){return typeof l=="function"}function Gc(l){return typeof l=="object"&&"styledComponentId"in l}function Nl(l,r){return l&&r?"".concat(l," ").concat(r):l||r||""}function Ac(l,r){if(l.length===0)return"";for(var u=l[0],s=1;s<l.length;s++)u+=l[s];return u}function Xi(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function wc(l,r,u){if(u===void 0&&(u=!1),!u&&!Xi(l)&&!Array.isArray(l))return r;if(Array.isArray(r))for(var s=0;s<r.length;s++)l[s]=wc(l[s],r[s]);else if(Xi(r))for(var s in r)l[s]=wc(l[s],r[s]);return l}function qc(l,r){Object.defineProperty(l,"toString",{value:r})}function Hl(l){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var m1=function(){function l(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return l.prototype.indexOfGroup=function(r){for(var u=0,s=0;s<r;s++)u+=this.groupSizes[s];return u},l.prototype.insertRules=function(r,u){if(r>=this.groupSizes.length){for(var s=this.groupSizes,c=s.length,d=c;r>=d;)if((d<<=1)<0)throw Hl(16,"".concat(r));this.groupSizes=new Uint32Array(d),this.groupSizes.set(s),this.length=d;for(var p=c;p<d;p++)this.groupSizes[p]=0}for(var y=this.indexOfGroup(r+1),b=(p=0,u.length);p<b;p++)this.tag.insertRule(y,u[p])&&(this.groupSizes[r]++,y++)},l.prototype.clearGroup=function(r){if(r<this.length){var u=this.groupSizes[r],s=this.indexOfGroup(r),c=s+u;this.groupSizes[r]=0;for(var d=s;d<c;d++)this.tag.deleteRule(s)}},l.prototype.getGroup=function(r){var u="";if(r>=this.length||this.groupSizes[r]===0)return u;for(var s=this.groupSizes[r],c=this.indexOfGroup(r),d=c+s,p=c;p<d;p++)u+="".concat(this.tag.getRule(p)).concat(Yc);return u},l}(),vo=new Map,Eo=new Map,xo=1,so=function(l){if(vo.has(l))return vo.get(l);for(;Eo.has(xo);)xo++;var r=xo++;return vo.set(l,r),Eo.set(r,l),r},g1=function(l,r){xo=r+1,vo.set(l,r),Eo.set(r,l)},b1="style[".concat(Bn,"][").concat(tg,'="').concat(Ho,'"]'),y1=new RegExp("^".concat(Bn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),v1=function(l,r,u){for(var s,c=u.split(","),d=0,p=c.length;d<p;d++)(s=c[d])&&l.registerName(r,s)},x1=function(l,r){for(var u,s=((u=r.textContent)!==null&&u!==void 0?u:"").split(Yc),c=[],d=0,p=s.length;d<p;d++){var y=s[d].trim();if(y){var b=y.match(y1);if(b){var m=0|parseInt(b[1],10),x=b[2];m!==0&&(g1(x,m),v1(l,x,b[3]),l.getTag().insertRules(m,c)),c.length=0}else c.push(y)}}},sm=function(l){for(var r=document.querySelectorAll(b1),u=0,s=r.length;u<s;u++){var c=r[u];c&&c.getAttribute(Bn)!==Pm&&(x1(l,c),c.parentNode&&c.parentNode.removeChild(c))}};function A1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var cg=function(l){var r=document.head,u=l||r,s=document.createElement("style"),c=function(y){var b=Array.from(y.querySelectorAll("style[".concat(Bn,"]")));return b[b.length-1]}(u),d=c!==void 0?c.nextSibling:null;s.setAttribute(Bn,Pm),s.setAttribute(tg,Ho);var p=A1();return p&&s.setAttribute("nonce",p),u.insertBefore(s,d),s},w1=function(){function l(r){this.element=cg(r),this.element.appendChild(document.createTextNode("")),this.sheet=function(u){if(u.sheet)return u.sheet;for(var s=document.styleSheets,c=0,d=s.length;c<d;c++){var p=s[c];if(p.ownerNode===u)return p}throw Hl(17)}(this.element),this.length=0}return l.prototype.insertRule=function(r,u){try{return this.sheet.insertRule(u,r),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},l.prototype.getRule=function(r){var u=this.sheet.cssRules[r];return u&&u.cssText?u.cssText:""},l}(),S1=function(){function l(r){this.element=cg(r),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(r,u){if(r<=this.length&&r>=0){var s=document.createTextNode(u);return this.element.insertBefore(s,this.nodes[r]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},l.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},l}(),E1=function(){function l(r){this.rules=[],this.length=0}return l.prototype.insertRule=function(r,u){return r<=this.length&&(this.rules.splice(r,0,u),this.length++,!0)},l.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},l.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},l}(),cm=So,T1={isServer:!So,useCSSOMInjection:!e1},To=function(){function l(r,u,s){r===void 0&&(r=Hn),u===void 0&&(u={});var c=this;this.options=de(de({},T1),r),this.gs=u,this.names=new Map(s),this.server=!!r.isServer,!this.server&&So&&cm&&(cm=!1,sm(this)),qc(this,function(){return function(d){for(var p=d.getTag(),y=p.length,b="",m=function(E){var O=function(U){return Eo.get(U)}(E);if(O===void 0)return"continue";var L=d.names.get(O),$=p.getGroup(E);if(L===void 0||!L.size||$.length===0)return"continue";var J="".concat(Bn,".g").concat(E,'[id="').concat(O,'"]'),N="";L!==void 0&&L.forEach(function(U){U.length>0&&(N+="".concat(U,","))}),b+="".concat($).concat(J,'{content:"').concat(N,'"}').concat(Yc)},x=0;x<y;x++)m(x);return b}(c)})}return l.registerId=function(r){return so(r)},l.prototype.rehydrate=function(){!this.server&&So&&sm(this)},l.prototype.reconstructWithOptions=function(r,u){return u===void 0&&(u=!0),new l(de(de({},this.options),r),this.gs,u&&this.names||void 0)},l.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(r=function(u){var s=u.useCSSOMInjection,c=u.target;return u.isServer?new E1(c):s?new w1(c):new S1(c)}(this.options),new m1(r)));var r},l.prototype.hasNameForId=function(r,u){return this.names.has(r)&&this.names.get(r).has(u)},l.prototype.registerName=function(r,u){if(so(r),this.names.has(r))this.names.get(r).add(u);else{var s=new Set;s.add(u),this.names.set(r,s)}},l.prototype.insertRules=function(r,u,s){this.registerName(r,u),this.getTag().insertRules(so(r),s)},l.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},l.prototype.clearRules=function(r){this.getTag().clearGroup(so(r)),this.clearNames(r)},l.prototype.clearTag=function(){this.tag=void 0},l}(),R1=/&/g,D1=/^\s*\/\/.*$/gm;function fg(l,r){return l.map(function(u){return u.type==="rule"&&(u.value="".concat(r," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(r," ")),u.props=u.props.map(function(s){return"".concat(r," ").concat(s)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=fg(u.children,r)),u})}function k1(l){var r,u,s,c=Hn,d=c.options,p=d===void 0?Hn:d,y=c.plugins,b=y===void 0?Uo:y,m=function(O,L,$){return $.startsWith(u)&&$.endsWith(u)&&$.replaceAll(u,"").length>0?".".concat(r):O},x=b.slice();x.push(function(O){O.type===No&&O.value.includes("&")&&(O.props[0]=O.props[0].replace(R1,u).replace(s,m))}),p.prefix&&x.push(Pv),x.push(Jv);var E=function(O,L,$,J){L===void 0&&(L=""),$===void 0&&($=""),J===void 0&&(J="&"),r=J,u=L,s=new RegExp("\\".concat(u,"\\b"),"g");var N=O.replace(D1,""),U=Kv($||L?"".concat($," ").concat(L," { ").concat(N," }"):N);p.namespace&&(U=fg(U,p.namespace));var j=[];return wo(U,Fv(x.concat(Iv(function(Y){return j.push(Y)})))),j};return E.hash=b.length?b.reduce(function(O,L){return L.name||Hl(15),Nn(O,L.name)},lg).toString():"",E}var C1=new To,Sc=k1(),dg=_.createContext({shouldForwardProp:void 0,styleSheet:C1,stylis:Sc});dg.Consumer;_.createContext(void 0);function Ec(){return v.useContext(dg)}var O1=function(){function l(r,u){var s=this;this.inject=function(c,d){d===void 0&&(d=Sc);var p=s.name+d.hash;c.hasNameForId(s.id,p)||c.insertRules(s.id,p,d(s.rules,p,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=u,qc(this,function(){throw Hl(12,String(s.name))})}return l.prototype.getName=function(r){return r===void 0&&(r=Sc),this.name+r.hash},l}(),z1=function(l){return l>="A"&&l<="Z"};function fm(l){for(var r="",u=0;u<l.length;u++){var s=l[u];if(u===1&&s==="-"&&l[0]==="-")return l;z1(s)?r+="-"+s.toLowerCase():r+=s}return r.startsWith("ms-")?"-"+r:r}var hg=function(l){return l==null||l===!1||l===""},pg=function(l){var r,u,s=[];for(var c in l){var d=l[c];l.hasOwnProperty(c)&&!hg(d)&&(Array.isArray(d)&&d.isCss||Bl(d)?s.push("".concat(fm(c),":"),d,";"):Xi(d)?s.push.apply(s,Qi(Qi(["".concat(c," {")],pg(d),!1),["}"],!1)):s.push("".concat(fm(c),": ").concat((r=c,(u=d)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||r in t1||r.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return s};function cl(l,r,u,s){if(hg(l))return[];if(Gc(l))return[".".concat(l.styledComponentId)];if(Bl(l)){if(!Bl(d=l)||d.prototype&&d.prototype.isReactComponent||!r)return[l];var c=l(r);return cl(c,r,u,s)}var d;return l instanceof O1?u?(l.inject(u,s),[l.getName(s)]):[l]:Xi(l)?pg(l):Array.isArray(l)?Array.prototype.concat.apply(Uo,l.map(function(p){return cl(p,r,u,s)})):[l.toString()]}function mg(l){for(var r=0;r<l.length;r+=1){var u=l[r];if(Bl(u)&&!Gc(u))return!1}return!0}var M1=ng(Ho),N1=function(){function l(r,u,s){this.rules=r,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&mg(r),this.componentId=u,this.baseHash=Nn(M1,u),this.baseStyle=s,To.registerId(u)}return l.prototype.generateAndInjectStyles=function(r,u,s){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,u,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))c=Nl(c,this.staticRulesId);else{var d=Ac(cl(this.rules,r,u,s)),p=xc(Nn(this.baseHash,d)>>>0);if(!u.hasNameForId(this.componentId,p)){var y=s(d,".".concat(p),void 0,this.componentId);u.insertRules(this.componentId,p,y)}c=Nl(c,p),this.staticRulesId=p}else{for(var b=Nn(this.baseHash,s.hash),m="",x=0;x<this.rules.length;x++){var E=this.rules[x];if(typeof E=="string")m+=E;else if(E){var O=Ac(cl(E,r,u,s));b=Nn(b,O+x),m+=O}}if(m){var L=xc(b>>>0);u.hasNameForId(this.componentId,L)||u.insertRules(this.componentId,L,s(m,".".concat(L),void 0,this.componentId)),c=Nl(c,L)}}return c},l}(),Vi=_.createContext(void 0);Vi.Consumer;function _1(l){var r=_.useContext(Vi),u=v.useMemo(function(){return function(s,c){if(!s)throw Hl(14);if(Bl(s)){var d=s(c);return d}if(Array.isArray(s)||typeof s!="object")throw Hl(8);return c?de(de({},c),s):s}(l.theme,r)},[l.theme,r]);return l.children?_.createElement(Vi.Provider,{value:u},l.children):null}var hc={};function j1(l,r,u){var s=Gc(l),c=l,d=!dc(l),p=r.attrs,y=p===void 0?Uo:p,b=r.componentId,m=b===void 0?function(F,I){var nt=typeof F!="string"?"sc":nm(F);hc[nt]=(hc[nt]||0)+1;var B="".concat(nt,"-").concat(ig(Ho+nt+hc[nt]));return I?"".concat(I,"-").concat(B):B}(r.displayName,r.parentComponentId):b,x=r.displayName,E=x===void 0?function(F){return dc(F)?"styled.".concat(F):"Styled(".concat(r1(F),")")}(l):x,O=r.displayName&&r.componentId?"".concat(nm(r.displayName),"-").concat(r.componentId):r.componentId||m,L=s&&c.attrs?c.attrs.concat(y).filter(Boolean):y,$=r.shouldForwardProp;if(s&&c.shouldForwardProp){var J=c.shouldForwardProp;if(r.shouldForwardProp){var N=r.shouldForwardProp;$=function(F,I){return J(F,I)&&N(F,I)}}else $=J}var U=new N1(u,O,s?c.componentStyle:void 0);function j(F,I){return function(nt,B,ct){var rt=nt.attrs,Ot=nt.componentStyle,Ct=nt.defaultProps,vt=nt.foldedComponentIds,g=nt.styledComponentId,X=nt.target,et=_.useContext(Vi),C=Ec(),G=nt.shouldForwardProp||C.shouldForwardProp,P=eg(B,et,Ct)||Hn,ot=function(it,lt,ft){for(var ht,K=de(de({},lt),{className:void 0,theme:ft}),bt=0;bt<it.length;bt+=1){var pt=Bl(ht=it[bt])?ht(K):ht;for(var xt in pt)K[xt]=xt==="className"?Nl(K[xt],pt[xt]):xt==="style"?de(de({},K[xt]),pt[xt]):pt[xt]}return lt.className&&(K.className=Nl(K.className,lt.className)),K}(rt,B,P),A=ot.as||X,q={};for(var at in ot)ot[at]===void 0||at[0]==="$"||at==="as"||at==="theme"&&ot.theme===P||(at==="forwardedAs"?q.as=ot.forwardedAs:G&&!G(at,A)||(q[at]=ot[at]));var H=function(it,lt){var ft=Ec(),ht=it.generateAndInjectStyles(lt,ft.styleSheet,ft.stylis);return ht}(Ot,ot),W=Nl(vt,g);return H&&(W+=" "+H),ot.className&&(W+=" "+ot.className),q[dc(A)&&!ag.has(A)?"class":"className"]=W,ct&&(q.ref=ct),v.createElement(A,q)}(Y,F,I)}j.displayName=E;var Y=_.forwardRef(j);return Y.attrs=L,Y.componentStyle=U,Y.displayName=E,Y.shouldForwardProp=$,Y.foldedComponentIds=s?Nl(c.foldedComponentIds,c.styledComponentId):"",Y.styledComponentId=O,Y.target=s?c.target:l,Object.defineProperty(Y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(F){this._foldedDefaultProps=s?function(I){for(var nt=[],B=1;B<arguments.length;B++)nt[B-1]=arguments[B];for(var ct=0,rt=nt;ct<rt.length;ct++)wc(I,rt[ct],!0);return I}({},c.defaultProps,F):F}}),qc(Y,function(){return".".concat(Y.styledComponentId)}),d&&sg(Y,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Y}function dm(l,r){for(var u=[l[0]],s=0,c=r.length;s<c;s+=1)u.push(r[s],l[s+1]);return u}var hm=function(l){return Object.assign(l,{isCss:!0})};function ut(l){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];if(Bl(l)||Xi(l))return hm(cl(dm(Uo,Qi([l],r,!0))));var s=l;return r.length===0&&s.length===1&&typeof s[0]=="string"?cl(s):hm(cl(dm(s,r)))}function Tc(l,r,u){if(u===void 0&&(u=Hn),!r)throw Hl(1,r);var s=function(c){for(var d=[],p=1;p<arguments.length;p++)d[p-1]=arguments[p];return l(r,u,ut.apply(void 0,Qi([c],d,!1)))};return s.attrs=function(c){return Tc(l,r,de(de({},u),{attrs:Array.prototype.concat(u.attrs,c).filter(Boolean)}))},s.withConfig=function(c){return Tc(l,r,de(de({},u),c))},s}var gg=function(l){return Tc(j1,l)},tt=gg;ag.forEach(function(l){tt[l]=gg(l)});var B1=function(){function l(r,u){this.rules=r,this.componentId=u,this.isStatic=mg(r),To.registerId(this.componentId+1)}return l.prototype.createStyles=function(r,u,s,c){var d=c(Ac(cl(this.rules,u,s,c)),""),p=this.componentId+r;s.insertRules(p,p,d)},l.prototype.removeStyles=function(r,u){u.clearRules(this.componentId+r)},l.prototype.renderStyles=function(r,u,s,c){r>2&&To.registerId(this.componentId+r),this.removeStyles(r,s),this.createStyles(r,u,s,c)},l}();function H1(l){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];var s=ut.apply(void 0,Qi([l],r,!1)),c="sc-global-".concat(ig(JSON.stringify(s))),d=new B1(s,c),p=function(b){var m=Ec(),x=_.useContext(Vi),E=_.useRef(m.styleSheet.allocateGSInstance(c)).current;return m.styleSheet.server&&y(E,b,m.styleSheet,x,m.stylis),_.useLayoutEffect(function(){if(!m.styleSheet.server)return y(E,b,m.styleSheet,x,m.stylis),function(){return d.removeStyles(E,m.styleSheet)}},[E,b,m.styleSheet,x,m.stylis]),null};function y(b,m,x,E,O){if(d.isStatic)d.renderStyles(b,a1,x,O);else{var L=de(de({},m),{theme:eg(m,E,p.defaultProps)});d.renderStyles(b,L,x,O)}}return _.memo(p)}var U1=`
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

`;const Qc="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",Xc="inset 2px 2px 3px rgba(0,0,0,0.2)",aa=()=>ut`
  -webkit-text-fill-color: ${({theme:l})=>l.materialTextDisabled};
  color: ${({theme:l})=>l.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:l})=>l.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,la=({background:l="material",color:r="materialText"}={})=>ut`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:u})=>u[l]};
  color: ${({theme:u})=>u[r]};
`,Ji=({mainColor:l="black",secondaryColor:r="transparent",pixelSize:u=2})=>ut`
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
`,Ul=()=>ut`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:l})=>l.materialText};
  background: ${({$disabled:l,theme:r})=>l?r.flatLight:r.canvas};
  border: 2px solid ${({theme:l})=>l.canvas};
  outline: 2px solid ${({theme:l})=>l.flatDark};
  outline-offset: -4px;
`,zn={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},$1=({theme:l,topLeftInner:r,bottomRightInner:u,hasShadow:s=!1,hasInsetShadow:c=!1})=>[s?Qc:!1,c?Xc:!1,r!==null?`inset 1px 1px 0px 1px ${l[r]}`:!1,u!==null?`inset -1px -1px 0 1px ${l[u]}`:!1].filter(Boolean).join(", "),Jt=({invert:l=!1,style:r="button"}={})=>{const u={topLeftOuter:l?"bottomRightOuter":"topLeftOuter",topLeftInner:l?"bottomRightInner":"topLeftInner",bottomRightInner:l?"topLeftInner":"bottomRightInner",bottomRightOuter:l?"topLeftOuter":"bottomRightOuter"};return ut`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:s})=>s[zn[r][u.topLeftOuter]]};
    border-top-color: ${({theme:s})=>s[zn[r][u.topLeftOuter]]};
    border-right-color: ${({theme:s})=>s[zn[r][u.bottomRightOuter]]};
    border-bottom-color: ${({theme:s})=>s[zn[r][u.bottomRightOuter]]};
    box-shadow: ${({theme:s,shadow:c})=>$1({theme:s,topLeftInner:zn[r][u.topLeftInner],bottomRightInner:zn[r][u.bottomRightInner],hasShadow:c})};
  `},Un=()=>ut`
  outline: 2px dotted ${({theme:l})=>l.materialText};
`,L1=l=>Buffer.from(l).toString("base64"),Y1=typeof btoa<"u"?btoa:L1,co=(l,r=0)=>{const u=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${r} 13 13)">
      <polygon fill="${l}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${Y1(u)})`},Vc=(l="default")=>ut`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:r})=>Ji({mainColor:l==="flat"?r.flatLight:r.material,secondaryColor:l==="flat"?r.canvas:r.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${la()}
    ${l==="flat"?Ul():Jt({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:r})=>r.material};
  }
  ::-webkit-scrollbar-button {
    ${la()}
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
    background-image: ${({theme:r})=>co(r.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:r})=>co(r.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:r})=>co(r.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:r})=>co(r.materialText,0)};
  }
`,G1=tt.a`
  color: ${({theme:l})=>l.anchor};
  font-size: inherit;
  text-decoration: ${({underline:l})=>l?"underline":"none"};
  &:visited {
    color: ${({theme:l})=>l.anchorVisited};
  }
`,q1=v.forwardRef(({children:l,underline:r=!0,...u},s)=>_.createElement(G1,{ref:s,underline:r,...u},l));q1.displayName="Anchor";const Q1=tt.header`
  ${Jt()};
  ${la()};

  position: ${l=>{var r;return(r=l.position)!==null&&r!==void 0?r:l.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,bg=v.forwardRef(({children:l,fixed:r=!0,position:u="fixed",...s},c)=>_.createElement(Q1,{fixed:r,position:r!==!1?u:void 0,ref:c,...s},l));bg.displayName="AppBar";const $l=()=>{};function _l(l,r,u){return u!==null&&l>u?u:r!==null&&l<r?r:l}function X1(l){if(Math.abs(l)<1){const u=l.toExponential().split("e-"),s=u[0].split(".")[1];return(s?s.length:0)+parseInt(u[1],10)}const r=l.toString().split(".")[1];return r?r.length:0}function pm(l,r,u){const s=Math.round((l-u)/r)*r+u;return Number(s.toFixed(X1(r)))}function fl(l){return typeof l=="number"?`${l}px`:l}const V1=tt.div`
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
`,K1=v.forwardRef(({alt:l="",children:r,noBorder:u=!1,size:s=35,square:c=!1,src:d,...p},y)=>_.createElement(V1,{noBorder:u,ref:y,size:fl(s),square:c,src:d,...p},d?_.createElement(Z1,{src:d,alt:l}):r));K1.displayName="Avatar";const ge={sm:"28px",md:"36px",lg:"44px"},W1=ut`
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
`,$o=tt.button`
  ${({active:l,disabled:r,primary:u,theme:s,variant:c})=>c==="flat"?ut`
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
        `:c==="menu"||c==="thin"?ut`
          ${la()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!r&&!l&&Jt({style:"buttonThin"})}
          }
          &:active {
            ${!r&&Jt({style:"buttonThinPressed"})}
          }
          ${l&&Jt({style:"buttonThinPressed"})}
          ${r&&aa()}
        `:ut`
          ${la()};
          border: none;
          ${r&&aa()}
          ${l?Ji({mainColor:s.material,secondaryColor:s.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${u?ut`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${s.borderDarkest};
                `:ut`
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
`,Zi=v.forwardRef(({onClick:l,disabled:r=!1,children:u,type:s="button",fullWidth:c=!1,size:d="md",square:p=!1,active:y=!1,onTouchStart:b=$l,primary:m=!1,variant:x="default",...E},O)=>_.createElement($o,{active:y,disabled:r,$disabled:r,fullWidth:c,onClick:r?void 0:l,onTouchStart:b,primary:m,ref:O,size:d,square:p,type:s,variant:x,...E},u));Zi.displayName="Button";function dl({defaultValue:l,onChange:r,onChangePropName:u="onChange",readOnly:s,value:c,valuePropName:d="value"}){const p=c!==void 0,[y,b]=v.useState(l),m=v.useCallback(x=>{p||b(x)},[p]);if(p&&typeof r!="function"&&!s){const x=`Warning: You provided a \`${d}\` prop to a component without an \`${u}\` handler.${d==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${u}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${u}\` function that updates \`${d}\`.`}`;console.warn(x)}return[p?c:y,m]}const Rc=tt.li`
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
  ${l=>l.$disabled&&aa()}
`,sl=v.forwardRef(({size:l="lg",disabled:r,square:u,children:s,onClick:c,primary:d,...p},y)=>_.createElement(Rc,{$disabled:r,size:l,square:u,onClick:r?void 0:c,primary:d,role:"menuitem",ref:y,"aria-disabled":r,...p},s));sl.displayName="MenuListItem";const yg=tt.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${l=>l.fullWidth?"100%":"auto"};
  padding: 4px;
  ${Jt({style:"window"})}
  ${la()}
  ${l=>l.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;yg.displayName="MenuList";const ha=20,Ro=tt.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${ha}px;
  height: ${ha}px;
  opacity: 0;
  z-index: -1;
`,Zc=tt.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:l})=>l?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:l})=>l.materialText};
  ${l=>l.$disabled&&aa()}

  ${Rc} & {
    margin: 0;
    height: 100%;
  }
  ${Rc}:hover & {
    ${({$disabled:l,theme:r})=>!l&&ut`
        color: ${r.materialTextInvert};
      `};
  }
`,Kc=tt.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${Ro}:focus ~ & {
    ${Un}
  }
  ${Ro}:not(:disabled) ~ &:active {
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
    ${l=>l.shadow&&`box-shadow:${Xc};`}
  }
`,J1=tt.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${Vc()}
`,vg=v.forwardRef(({children:l,shadow:r=!0,...u},s)=>_.createElement(ma,{ref:s,shadow:r,...u},_.createElement(J1,null,l)));vg.displayName="ScrollView";const xg=ut`
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

    ${({$disabled:l,theme:r})=>Ji({mainColor:l?r.checkmarkDisabled:r.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,ex={flat:I1,default:F1},ax=v.forwardRef(({checked:l,className:r="",defaultChecked:u=!1,disabled:s=!1,indeterminate:c=!1,label:d="",onChange:p=$l,style:y={},value:b,variant:m="default",...x},E)=>{var O;const[L,$]=dl({defaultValue:u,onChange:p,readOnly:(O=x.readOnly)!==null&&O!==void 0?O:s,value:l}),J=v.useCallback(j=>{const Y=j.target.checked;$(Y),p(j)},[p,$]),N=ex[m];let U=null;return c?U=tx:L&&(U=P1),_.createElement(Zc,{$disabled:s,className:r,style:y},_.createElement(Ro,{disabled:s,onChange:s?void 0:J,readOnly:s,type:"checkbox",value:b,checked:L,"data-indeterminate":c,ref:E,...x}),_.createElement(N,{$disabled:s,role:"presentation"},U&&_.createElement(U,{$disabled:s,variant:m})),d&&_.createElement(Kc,null,d))});ax.displayName="Checkbox";const Do=tt.div`
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
`;Do.displayName="Separator";const lx=tt($o)`
  padding-left: 8px;
`,nx=tt(Do)`
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

  ${({$disabled:l})=>l?ut`
          border: 2px solid ${({theme:r})=>r.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:r})=>r.materialTextDisabledShadow}
          );
        `:ut`
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

  ${({$disabled:l})=>l?ut`
          border-top: 6px solid ${({theme:r})=>r.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:r})=>r.materialTextDisabledShadow}
          );
        `:ut`
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
`,ox=v.forwardRef(({value:l,defaultValue:r,onChange:u=$l,disabled:s=!1,variant:c="default",...d},p)=>{var y;const[b,m]=dl({defaultValue:r,onChange:u,readOnly:(y=d.readOnly)!==null&&y!==void 0?y:s,value:l}),x=E=>{const O=E.target.value;m(O),u(E)};return _.createElement(lx,{disabled:s,as:"div",variant:c,size:"md"},_.createElement(Ag,{onChange:x,readOnly:s,disabled:s,value:b??"#008080",type:"color",ref:p,...d}),_.createElement(ix,{$disabled:s,color:b??"#008080",role:"presentation"}),c==="default"&&_.createElement(nx,{orientation:"vertical"}),_.createElement(rx,{$disabled:s,variant:c}))});ox.displayName="ColorInput";const ux=tt.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:l})=>ut`
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
      ${Ji({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:l})}
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
`,mm=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],sx=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function cx({digit:l=0,pixelSize:r=2,...u}){const s=sx[Number(l)].map((c,d)=>c?`${mm[d]} active`:mm[d]);return _.createElement(ux,{pixelSize:r,...u},s.map((c,d)=>_.createElement("span",{className:c,key:d})))}const fx=tt.div`
  ${Jt({style:"status"})}
  display: inline-flex;
  background: #000000;
`,dx={sm:1,md:2,lg:3,xl:4},hx=v.forwardRef(({value:l=0,minLength:r=3,size:u="md",...s},c)=>{const d=v.useMemo(()=>l.toString().padStart(r,"0").split(""),[r,l]);return _.createElement(fx,{ref:c,...s},d.map((p,y)=>_.createElement(cx,{digit:p,pixelSize:dx[u],key:y})))});hx.displayName="Counter";const wg=ut`
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
`,Sg=ut`
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
  ${({disabled:l,variant:r})=>r!=="flat"&&l&&aa()}
`,gx=tt.input`
  ${Sg}
  padding: 0 8px;
`,bx=tt.textarea`
  ${Sg}
  padding: 8px;
  resize: none;
  ${({variant:l})=>Vc(l)}
`,Eg=v.forwardRef(({className:l,disabled:r=!1,fullWidth:u,onChange:s=$l,shadow:c=!0,style:d,variant:p="default",...y},b)=>{const m=p==="flat"?mx:px,x=v.useMemo(()=>{var E;return y.multiline?_.createElement(bx,{disabled:r,onChange:r?void 0:s,readOnly:r,ref:b,variant:p,...y}):_.createElement(gx,{disabled:r,onChange:r?void 0:s,readOnly:r,ref:b,type:(E=y.type)!==null&&E!==void 0?E:"text",variant:p,...y})},[r,s,y,b,p]);return _.createElement(m,{className:l,fullWidth:u,$disabled:r,shadow:c,style:d},x)});Eg.displayName="TextInput";const yx=tt.div`
  display: inline-flex;
  align-items: center;
`,Dc=tt(Zi)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:l})=>l==="flat"?ut`
          height: calc(50% - 1px);
        `:ut`
          height: 50%;
        `}
`,vx=tt.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:l})=>l==="flat"?ut`
          height: calc(${ge.md} - 4px);
        `:ut`
          height: ${ge.md};
          margin-left: 2px;
        `}
`,gm=tt.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:l})=>l?ut`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:r})=>r.materialText};
        `:ut`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:r})=>r.materialText};
        `}
  ${Dc}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:l})=>l.materialTextDisabledShadow}
    );
    ${({invert:l})=>l?ut`
            border-bottom-color: ${({theme:r})=>r.materialTextDisabled};
          `:ut`
            border-top-color: ${({theme:r})=>r.materialTextDisabled};
          `}
  }
`,Tg=v.forwardRef(({className:l,defaultValue:r,disabled:u=!1,max:s,min:c,onChange:d,readOnly:p,step:y=1,style:b,value:m,variant:x="default",width:E,...O},L)=>{const[$,J]=dl({defaultValue:r,onChange:d,readOnly:p,value:m}),N=v.useCallback(nt=>{const B=parseFloat(nt.target.value);J(B)},[J]),U=v.useCallback(nt=>{const B=_l(parseFloat((($??0)+nt).toFixed(2)),c??null,s??null);J(B),d==null||d(B)},[s,c,d,J,$]),j=v.useCallback(()=>{$!==void 0&&(d==null||d($))},[d,$]),Y=v.useCallback(()=>{U(y)},[U,y]),F=v.useCallback(()=>{U(-y)},[U,y]),I=x==="flat"?"flat":"raised";return _.createElement(yx,{className:l,style:{...b,width:E!==void 0?fl(E):"auto"},...O},_.createElement(Eg,{value:$,variant:x,onChange:N,disabled:u,type:"number",readOnly:p,ref:L,fullWidth:!0,onBlur:j}),_.createElement(vx,{variant:x},_.createElement(Dc,{"data-testid":"increment",variant:I,disabled:u||p,onClick:Y},_.createElement(gm,{invert:!0})),_.createElement(Dc,{"data-testid":"decrement",variant:I,disabled:u||p,onClick:F},_.createElement(gm,null))))});Tg.displayName="NumberInput";function xx(){const l="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let r="";for(let u=0;u<10;u+=1)r+=l[Math.floor(Math.random()*l.length)];return r}const Rg=l=>v.useMemo(()=>xx(),[l]),Dg=ut`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,kg=ut`
  background: ${({theme:l})=>l.hoverBackground};
  color: ${({theme:l})=>l.canvasTextInvert};
`,Wc=tt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,Ax=tt.div`
  ${Dg}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${Wc}:focus & {
    ${kg}
    border: 2px dotted ${({theme:l})=>l.focusSecondary};
  }
`,Cg=ut`
  height: ${ge.md};
  display: inline-block;
  color: ${({$disabled:l=!1,theme:r})=>l?aa():r.canvasText};
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
  ${Dg}
  cursor: pointer;
  &:disabled {
    ${aa()};
    background: ${({theme:l})=>l.material};
    cursor: default;
  }
`,Og=tt($o).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:l="default"})=>l==="flat"?ut`
          height: 100%;
          margin-right: 0;
        `:ut`
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
  box-shadow: ${Qc};
  ${({variant:l="default"})=>l==="flat"?ut`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:r})=>r.flatDark};
        `:ut`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:r})=>r.borderDarkest};
        `}
  ${({variant:l="default"})=>Vc(l)}
`,Dx=tt.li`
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
  ${({active:l})=>l?kg:""}
  user-select: none;
`,kx=[],zg=({className:l,defaultValue:r,disabled:u,native:s,onChange:c,options:d=kx,readOnly:p,style:y,value:b,variant:m,width:x})=>{var E;const O=v.useMemo(()=>d.filter(Boolean),[d]),[L,$]=dl({defaultValue:r??((E=O==null?void 0:O[0])===null||E===void 0?void 0:E.value),onChange:c,readOnly:p,value:b}),J=!(u||p),N=v.useMemo(()=>({className:l,style:{...y,width:x}}),[l,y,x]),U=v.useMemo(()=>_.createElement(Og,{as:"div","data-testid":"select-button",$disabled:u,native:s,tabIndex:-1,variant:m==="flat"?"flat":"raised"},_.createElement(Tx,{"data-testid":"select-icon",$disabled:u})),[u,s,m]),j=v.useMemo(()=>m==="flat"?Sx:wx,[m]);return v.useMemo(()=>({isEnabled:J,options:O,value:L,setValue:$,wrapperProps:N,DropdownButton:U,Wrapper:j}),[U,j,J,O,$,L,N])},Cx={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},Ox=1e3,zx=({onBlur:l,onChange:r,onClose:u,onFocus:s,onKeyDown:c,onMouseDown:d,onOpen:p,open:y,options:b,readOnly:m,value:x,selectRef:E,setValue:O,wrapperRef:L})=>{const $=v.useRef(null),J=v.useRef([]),N=v.useRef(0),U=v.useRef(0),j=v.useRef(),Y=v.useRef("search"),F=v.useRef(""),I=v.useRef(),[nt,B]=dl({defaultValue:!1,onChange:p,onChangePropName:"onOpen",readOnly:m,value:y,valuePropName:"open"}),ct=v.useMemo(()=>{const K=b.findIndex(bt=>bt.value===x);return N.current=_l(K,0,null),b[K]},[b,x]),[rt,Ot]=v.useState(b[0]),Ct=v.useCallback(K=>{const bt=$.current,pt=J.current[K];if(!pt||!bt){j.current=K;return}j.current=void 0;const xt=bt.clientHeight,kt=bt.scrollTop,jt=bt.scrollTop+xt,qt=pt.offsetTop,ae=pt.offsetHeight,Qt=pt.offsetTop+pt.offsetHeight;qt<kt&&bt.scrollTo(0,qt),Qt>jt&&bt.scrollTo(0,qt-xt+ae),pt.focus({preventScroll:!0})},[$]),vt=v.useCallback((K,{scroll:bt}={})=>{var pt;const xt=b.length-1;let kt;switch(K){case"first":{kt=0;break}case"last":{kt=xt;break}case"next":{kt=_l(U.current+1,0,xt);break}case"previous":{kt=_l(U.current-1,0,xt);break}case"selected":{kt=_l((pt=N.current)!==null&&pt!==void 0?pt:0,0,xt);break}default:kt=K}U.current=kt,Ot(b[kt]),bt&&Ct(kt)},[U,b,Ct]),g=v.useCallback(({fromEvent:K})=>{B(!0),vt("selected",{scroll:!0}),p==null||p({fromEvent:K})},[vt,p,B]),X=v.useCallback(()=>{Y.current="search",F.current="",clearTimeout(I.current)},[]),et=v.useCallback(({focusSelect:K,fromEvent:bt})=>{var pt;u==null||u({fromEvent:bt}),B(!1),Ot(b[0]),X(),j.current=void 0,K&&((pt=E.current)===null||pt===void 0||pt.focus())},[X,u,b,E,B]),C=v.useCallback(({fromEvent:K})=>{nt?et({focusSelect:!1,fromEvent:K}):g({fromEvent:K})},[et,g,nt]),G=v.useCallback((K,{fromEvent:bt})=>{N.current!==K&&(N.current=K,O(b[K].value),r==null||r(b[K],{fromEvent:bt}))},[r,b,O]),P=v.useCallback(({focusSelect:K,fromEvent:bt})=>{G(U.current,{fromEvent:bt}),et({focusSelect:K,fromEvent:bt})},[et,G]),ot=v.useCallback((K,{fromEvent:bt,select:pt})=>{var xt;switch(Y.current==="cycleFirstLetter"&&K!==F.current&&(Y.current="search"),K===F.current?Y.current="cycleFirstLetter":F.current+=K,Y.current){case"search":{let kt=b.findIndex(jt=>{var qt;return((qt=jt.label)===null||qt===void 0?void 0:qt.toLocaleUpperCase().indexOf(F.current))===0});kt<0&&(kt=b.findIndex(jt=>{var qt;return((qt=jt.label)===null||qt===void 0?void 0:qt.toLocaleUpperCase().indexOf(K))===0}),F.current=K),kt>=0&&(pt?G(kt,{fromEvent:bt}):vt(kt,{scroll:!0}));break}case"cycleFirstLetter":{const kt=pt?(xt=N.current)!==null&&xt!==void 0?xt:-1:U.current;let jt=b.findIndex((qt,ae)=>{var Qt;return ae>kt&&((Qt=qt.label)===null||Qt===void 0?void 0:Qt.toLocaleUpperCase().indexOf(K))===0});jt<0&&(jt=b.findIndex(qt=>{var ae;return((ae=qt.label)===null||ae===void 0?void 0:ae.toLocaleUpperCase().indexOf(K))===0})),jt>=0&&(pt?G(jt,{fromEvent:bt}):vt(jt,{scroll:!0}));break}}clearTimeout(I.current),I.current=setTimeout(()=>{Y.current==="search"&&(F.current="")},Ox)},[vt,b,G]),A=v.useCallback(K=>{var bt;K.button===0&&(K.preventDefault(),(bt=E.current)===null||bt===void 0||bt.focus(),C({fromEvent:K}),d==null||d(K))},[d,E,C]),q=v.useCallback(K=>{P({focusSelect:!0,fromEvent:K})},[P]),at=v.useCallback(K=>{const{altKey:bt,code:pt,ctrlKey:xt,metaKey:kt,shiftKey:jt}=K,{ARROW_DOWN:qt,ARROW_UP:ae,END:Qt,ENTER:be,ESC:re,HOME:Ue,SPACE:Ee,TAB:na}=Cx,$e=bt||xt||kt||jt;if(!(pt===na&&(bt||xt||kt)||pt!==na&&$e))switch(pt){case qt:{if(K.preventDefault(),!nt){g({fromEvent:K});return}vt("next",{scroll:!0});break}case ae:{if(K.preventDefault(),!nt){g({fromEvent:K});return}vt("previous",{scroll:!0});break}case Qt:{if(K.preventDefault(),!nt){g({fromEvent:K});return}vt("last",{scroll:!0});break}case be:{if(!nt)return;K.preventDefault(),P({focusSelect:!0,fromEvent:K});break}case re:{if(!nt)return;K.preventDefault(),et({focusSelect:!0,fromEvent:K});break}case Ue:{if(K.preventDefault(),!nt){g({fromEvent:K});return}vt("first",{scroll:!0});break}case Ee:{K.preventDefault(),nt?P({focusSelect:!0,fromEvent:K}):g({fromEvent:K});break}case na:{if(!nt)return;jt||K.preventDefault(),P({focusSelect:!jt,fromEvent:K});break}default:!$e&&pt.match(/^Key/)&&(K.preventDefault(),K.stopPropagation(),ot(pt.replace(/^Key/,""),{select:!nt,fromEvent:K}))}},[vt,et,nt,g,ot,P]),H=v.useCallback(K=>{at(K),c==null||c(K)},[at,c]),W=v.useCallback(K=>{vt(K)},[vt]),it=v.useCallback(K=>{nt||(X(),l==null||l(K))},[X,l,nt]),lt=v.useCallback(K=>{X(),s==null||s(K)},[X,s]),ft=v.useCallback(K=>{$.current=K,j.current!==void 0&&Ct(j.current)},[Ct]),ht=v.useCallback((K,bt)=>{J.current[bt]=K,j.current===bt&&Ct(j.current)},[Ct]);return v.useEffect(()=>{if(!nt)return()=>{};const K=bt=>{var pt;const xt=bt.target;!((pt=L.current)===null||pt===void 0)&&pt.contains(xt)||(bt.preventDefault(),et({focusSelect:!1,fromEvent:bt}))};return document.addEventListener("mousedown",K),()=>{document.removeEventListener("mousedown",K)}},[et,nt,L]),v.useMemo(()=>({activeOption:rt,handleActivateOptionIndex:W,handleBlur:it,handleButtonKeyDown:H,handleDropdownKeyDown:at,handleFocus:lt,handleMouseDown:A,handleOptionClick:q,handleSetDropdownRef:ft,handleSetOptionRef:ht,open:nt,selectedOption:ct}),[rt,W,it,H,lt,at,A,q,ft,ht,nt,ct])},Mx=v.forwardRef(({className:l,defaultValue:r,disabled:u,onChange:s,options:c,readOnly:d,style:p,value:y,variant:b,width:m,...x},E)=>{const{isEnabled:O,options:L,setValue:$,value:J,DropdownButton:N,Wrapper:U}=zg({defaultValue:r,disabled:u,native:!0,onChange:s,options:c,readOnly:d,value:y,variant:b}),j=v.useCallback(Y=>{const F=L.find(I=>I.value===Y.target.value);F&&($(F.value),s==null||s(F,{fromEvent:Y}))},[s,L,$]);return _.createElement(U,{className:l,style:{...p,width:m}},_.createElement(Wc,null,_.createElement(Ex,{...x,disabled:u,onChange:O?j:$l,ref:E,value:J},L.map((Y,F)=>{var I;return _.createElement("option",{key:`${Y.value}-${F}`,value:Y.value},(I=Y.label)!==null&&I!==void 0?I:Y.value)})),N))});Mx.displayName="SelectNative";function Nx({activateOptionIndex:l,active:r,index:u,onClick:s,option:c,selected:d,setRef:p}){const y=v.useCallback(()=>{l(u)},[l,u]),b=v.useCallback(x=>{p(x,u)},[u,p]),m=Rg();return _.createElement(Dx,{active:r,"aria-selected":d?"true":void 0,"data-value":c.value,id:m,onClick:s,onMouseEnter:y,ref:b,role:"option",tabIndex:0},c.label)}function _x({"aria-label":l,"aria-labelledby":r,className:u,defaultValue:s,disabled:c=!1,formatDisplay:d,inputProps:p,labelId:y,menuMaxHeight:b,name:m,onBlur:x,onChange:E,onClose:O,onFocus:L,onKeyDown:$,onMouseDown:J,onOpen:N,open:U,options:j,readOnly:Y,shadow:F=!0,style:I,variant:nt="default",value:B,width:ct="auto",...rt},Ot){const{isEnabled:Ct,options:vt,setValue:g,value:X,wrapperProps:et,DropdownButton:C,Wrapper:G}=zg({className:u,defaultValue:s,disabled:c,native:!1,onChange:E,options:j,style:I,readOnly:Y,value:B,variant:nt,width:ct}),P=v.useRef(null),ot=v.useRef(null),A=v.useRef(null),{activeOption:q,handleActivateOptionIndex:at,handleBlur:H,handleButtonKeyDown:W,handleDropdownKeyDown:it,handleFocus:lt,handleMouseDown:ft,handleOptionClick:ht,handleSetDropdownRef:K,handleSetOptionRef:bt,open:pt,selectedOption:xt}=zx({onBlur:x,onChange:E,onClose:O,onFocus:L,onKeyDown:$,onMouseDown:J,onOpen:N,open:U,options:vt,value:X,selectRef:ot,setValue:g,wrapperRef:A});v.useImperativeHandle(Ot,()=>({focus:be=>{var re;(re=ot.current)===null||re===void 0||re.focus(be)},node:P.current,value:String(X)}),[X]);const kt=v.useMemo(()=>xt?typeof d=="function"?d(xt):xt.label:"",[d,xt]),jt=Ct?1:void 0,qt=v.useMemo(()=>b?{overflow:"auto",maxHeight:b}:void 0,[b]),ae=Rg(),Qt=v.useMemo(()=>vt.map((be,re)=>{const Ue=`${X}-${re}`,Ee=be===q,na=be===xt;return _.createElement(Nx,{activateOptionIndex:at,active:Ee,index:re,key:Ue,onClick:ht,option:be,selected:na,setRef:bt})}),[q,at,ht,bt,vt,xt,X]);return _.createElement(G,{...et,$disabled:c,ref:A,shadow:F,style:{...I,width:ct}},_.createElement("input",{name:m,ref:P,type:"hidden",value:String(X),...p}),_.createElement(Wc,{"aria-disabled":c,"aria-expanded":pt,"aria-haspopup":"listbox","aria-label":l,"aria-labelledby":r??y,"aria-owns":Ct&&pt?ae:void 0,onBlur:H,onFocus:lt,onKeyDown:W,onMouseDown:Ct?ft:J,ref:ot,role:"button",tabIndex:jt,...rt},_.createElement(Ax,null,kt),C),Ct&&pt&&_.createElement(Rx,{id:ae,onKeyDown:it,ref:K,role:"listbox",style:qt,tabIndex:0,variant:nt},Qt))}const Mg=v.forwardRef(_x);Mg.displayName="Select";const jx=tt.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${l=>l.noPadding?"0":"4px"};
`,ko=v.forwardRef(function({children:r,noPadding:u=!1,...s},c){return _.createElement(jx,{noPadding:u,ref:c,...s},r)});ko.displayName="Toolbar";const Bx=tt.div`
  padding: 16px;
`,Ng=v.forwardRef(function({children:r,...u},s){return _.createElement(Bx,{ref:s,...u},r)});Ng.displayName="WindowContent";const Hx=tt.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:l})=>l.material};
  ${({active:l})=>l===!1?ut`
          background: ${({theme:r})=>r.headerNotActiveBackground};
          color: ${({theme:r})=>r.headerNotActiveText};
        `:ut`
          background: ${({theme:r})=>r.headerBackground};
          color: ${({theme:r})=>r.headerText};
        `}

  ${$o} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,_g=v.forwardRef(function({active:r=!0,children:u,...s},c){return _.createElement(Hx,{active:r,ref:c,...s},u)});_g.displayName="WindowHeader";const Ux=tt.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Jt({style:"window"})}
  ${la()}
`,$x=tt.span`
  ${({theme:l})=>ut`
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
`,jg=v.forwardRef(({children:l,resizable:r=!1,resizeRef:u,shadow:s=!0,...c},d)=>_.createElement(Ux,{ref:d,shadow:s,...c},l,r&&_.createElement($x,{"data-testid":"resizeHandle",ref:u})));jg.displayName="Window";const Lx=tt(vg)`
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
`,Ma=tt.div`
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
`,Qx=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function Xx(l,r){return new Date(l,r+1,0).getDate()}function Vx(l,r,u){return new Date(l,r,u).getDay()}function Zx(l){const r=new Date(Date.parse(l)),u=r.getUTCDate(),s=r.getUTCMonth(),c=r.getUTCFullYear();return{day:u,month:s,year:c}}const Kx=v.forwardRef(({className:l,date:r=new Date().toISOString(),onAccept:u,onCancel:s,shadow:c=!0},d)=>{const[p,y]=v.useState(()=>Zx(r)),{year:b,month:m,day:x}=p,E=v.useCallback(({value:N})=>{y(U=>({...U,month:N}))},[]),O=v.useCallback(N=>{y(U=>({...U,year:N}))},[]),L=v.useCallback(N=>{y(U=>({...U,day:N}))},[]),$=v.useCallback(()=>{const N=[p.year,p.month+1,p.day].map(U=>String(U).padStart(2,"0")).join("-");u==null||u(N)},[p.day,p.month,p.year,u]),J=v.useMemo(()=>{const N=Array.from({length:42}),U=Vx(b,m,1);let j=x;const Y=Xx(b,m);return j=j<Y?j:Y,N.forEach((F,I)=>{if(I>=U&&I<Y+U){const nt=I-U+1;N[I]=_.createElement(Ma,{key:I,onClick:()=>{L(nt)}},_.createElement(qx,{active:nt===j},nt))}else N[I]=_.createElement(Ma,{key:I})}),N},[x,L,m,b]);return _.createElement(jg,{className:l,ref:d,shadow:c,style:{margin:20}},_.createElement(_g,null,_.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),_.createElement(Ng,null,_.createElement(ko,{noPadding:!0,style:{justifyContent:"space-between"}},_.createElement(Mg,{options:Qx,value:m,onChange:E,width:128,menuMaxHeight:200}),_.createElement(Tg,{value:b,onChange:O,width:100})),_.createElement(Lx,null,_.createElement(Yx,null,_.createElement(Ma,null,"S"),_.createElement(Ma,null,"M"),_.createElement(Ma,null,"T"),_.createElement(Ma,null,"W"),_.createElement(Ma,null,"T"),_.createElement(Ma,null,"F"),_.createElement(Ma,null,"S")),_.createElement(Gx,null,J)),_.createElement(ko,{noPadding:!0,style:{justifyContent:"space-between"}},_.createElement(Zi,{fullWidth:!0,onClick:s,disabled:!s},"Cancel"),_.createElement(Zi,{fullWidth:!0,onClick:u?$:void 0,disabled:!u},"OK"))))});Kx.displayName="DatePicker";const Wx=l=>{switch(l){case"status":case"well":return ut`
        ${Jt({style:"status"})}
      `;case"window":case"outside":return ut`
        ${Jt({style:"window"})}
      `;case"field":return ut`
        ${Jt({style:"field"})}
      `;default:return ut`
        ${Jt()}
      `}},Jx=tt.div`
  position: relative;
  font-size: 1rem;
  ${({variant:l})=>Wx(l)}
  ${({variant:l})=>la(l==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,Bg=v.forwardRef(({children:l,shadow:r=!1,variant:u="window",...s},c)=>_.createElement(Jx,{ref:c,shadow:r,variant:u,...s},l));Bg.displayName="Frame";const Fx=tt.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:l,variant:r})=>r==="flat"?l.flatDark:l.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:l})=>l.materialText};
  ${({variant:l})=>l!=="flat"&&ut`
      box-shadow: -1px -1px 0 1px ${({theme:r})=>r.borderDark},
        inset -1px -1px 0 1px ${({theme:r})=>r.borderDark};
    `}
  ${l=>l.$disabled&&aa()}
`,Ix=tt.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:l,variant:r})=>r==="flat"?l.canvas:l.material};
`,Px=v.forwardRef(({label:l,disabled:r=!1,variant:u="default",children:s,...c},d)=>_.createElement(Fx,{"aria-disabled":r,$disabled:r,variant:u,ref:d,...c},l&&_.createElement(Ix,{variant:u},l),s));Px.displayName="GroupBox";const Hg=tt.div`
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
`,lA=v.forwardRef(({size:l=30,...r},u)=>_.createElement(eA,{size:l,ref:u,...r},_.createElement(aA,null)));lA.displayName="Hourglass";const nA=tt.div`
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
`,sA=v.forwardRef(({backgroundStyles:l,children:r,...u},s)=>_.createElement(nA,{ref:s,...u},_.createElement(iA,null,_.createElement(rA,null,_.createElement(oA,{style:l},r)),_.createElement(uA,null))));sA.displayName="Monitor";const cA=tt.div`
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
`,Ug=ut`
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
`,$g=17,mA=tt.span`
  display: inline-block;
  width: ${$g}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:l})=>l.progress};
  border-color: ${({theme:l})=>l.material};
  border-width: 0px 1px;
  border-style: solid;
`,gA=v.forwardRef(({hideValue:l=!1,shadow:r=!0,value:u,variant:s="default",...c},d)=>{const p=l?null:`${u}%`,y=v.useRef(null),[b,m]=v.useState([]),x=v.useCallback(()=>{if(!y.current||u===void 0)return;const E=y.current.getBoundingClientRect().width,O=Math.round(u/100*E/$g);m(Array.from({length:O}))},[u]);return v.useEffect(()=>(x(),window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)),[x]),_.createElement(cA,{"aria-valuenow":u!==void 0?Math.round(u):void 0,ref:d,role:"progressbar",variant:s,...c},_.createElement(fA,{variant:s,shadow:r},s==="default"?_.createElement(_.Fragment,null,_.createElement(dA,{"data-testid":"defaultProgress1"},p),_.createElement(hA,{"data-testid":"defaultProgress2",value:u},p)):_.createElement(pA,{ref:y,"data-testid":"tileProgress"},b.map((E,O)=>_.createElement(mA,{key:O})))))});gA.displayName="ProgressBar";const Lg=ut`
  width: ${ha}px;
  height: ${ha}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,bA=tt(ma)`
  ${Lg}
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
  ${Lg}
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
`,xA={flat:yA,default:bA},AA=v.forwardRef(({checked:l,className:r="",disabled:u=!1,label:s="",onChange:c,style:d={},variant:p="default",...y},b)=>{const m=xA[p];return _.createElement(Zc,{$disabled:u,className:r,style:d},_.createElement(m,{$disabled:u,role:"presentation"},l&&_.createElement(vA,{$disabled:u,variant:p})),_.createElement(Ro,{disabled:u,onChange:u?void 0:c,readOnly:u,type:"radio",checked:l,ref:b,...y}),s&&_.createElement(Kc,null,s))});AA.displayName="Radio";const wA=typeof window<"u"?v.useLayoutEffect:v.useEffect;function Ml(l){const r=v.useRef(l);return wA(()=>{r.current=l}),v.useCallback((...u)=>(0,r.current)(...u),[])}function bm(l,r){typeof l=="function"?l(r):l&&(l.current=r)}function ym(l,r){return v.useMemo(()=>l==null&&r==null?null:u=>{bm(l,u),bm(r,u)},[l,r])}let Lo=!0,kc=!1,vm;const SA={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function EA(l){if("type"in l){const{type:r,tagName:u}=l;if(u==="INPUT"&&SA[r]&&!l.readOnly||u==="TEXTAREA"&&!l.readOnly)return!0}return!!("isContentEditable"in l&&l.isContentEditable)}function TA(l){l.metaKey||l.altKey||l.ctrlKey||(Lo=!0)}function pc(){Lo=!1}function RA(){this.visibilityState==="hidden"&&kc&&(Lo=!0)}function DA(l){l.addEventListener("keydown",TA,!0),l.addEventListener("mousedown",pc,!0),l.addEventListener("pointerdown",pc,!0),l.addEventListener("touchstart",pc,!0),l.addEventListener("visibilitychange",RA,!0)}function kA(l){const{target:r}=l;try{return r.matches(":focus-visible")}catch{}return Lo||EA(r)}function CA(){kc=!0,window.clearTimeout(vm),vm=window.setTimeout(()=>{kc=!1},100)}function OA(){const l=v.useCallback(r=>{const u=jv.findDOMNode(r);u!=null&&DA(u.ownerDocument)},[]);return{isFocusVisible:kA,onBlurVisible:CA,ref:l}}function zA(l,r,u){return(u-r)*l+r}function fo(l,r){if(r!==void 0&&"changedTouches"in l){for(let u=0;u<l.changedTouches.length;u+=1){const s=l.changedTouches[u];if(s.identifier===r)return{x:s.clientX,y:s.clientY}}return!1}return"clientX"in l?{x:l.clientX,y:l.clientY}:!1}function ho(l){return l&&l.ownerDocument||document}function MA(l,r){var u;const{index:s}=(u=l.reduce((c,d,p)=>{const y=Math.abs(r-d);return c===null||y<c.distance||y===c.distance?{distance:y,index:p}:c},null))!==null&&u!==void 0?u:{};return s??-1}const NA=tt.div`
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

  ${({orientation:l,size:r})=>l==="vertical"?ut`
          height: ${r};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:u})=>u?"41px":"39px"};
          }
        `:ut`
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
`,Yg=()=>ut`
  position: absolute;
  ${({orientation:l})=>l==="vertical"?ut`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:ut`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,_A=tt(ma)`
  ${Yg()}
`,jA=tt(ma)`
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
  ${({orientation:l})=>l==="vertical"?ut`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:ut`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:l})=>l==="flat"?ut`
          ${Ul()}
          outline: 2px solid ${({theme:r})=>r.flatDark};
          background: ${({theme:r})=>r.flatLight};
        `:ut`
          ${la()}
          ${Jt()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:l,theme:r})=>l&&Ji({mainColor:r.material,secondaryColor:r.borderLightest})}
`,Co=6,HA=tt.span`
  display: inline-block;
  position: absolute;

  ${({orientation:l})=>l==="vertical"?ut`
          right: ${-8}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${Co}px;
          border-bottom: 2px solid ${({theme:r})=>r.materialText};
        `:ut`
          bottom: ${-6}px;
          height: ${Co}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:r})=>r.materialText};
          border-right: 1px solid ${({theme:r})=>r.materialText};
        `}

  color:  ${({theme:l})=>l.materialText};
  ${({$disabled:l,theme:r})=>l&&ut`
      ${aa()}
      box-shadow: 1px 1px 0px ${r.materialTextDisabledShadow};
      border-color: ${r.materialTextDisabled};
    `}
`,UA=tt.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:l})=>l==="vertical"?ut`
          transform: translate(${Co+2}px, ${Co+1}px);
        `:ut`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,$A=v.forwardRef(({defaultValue:l,disabled:r=!1,marks:u=!1,max:s=100,min:c=0,name:d,onChange:p,onChangeCommitted:y,onMouseDown:b,orientation:m="horizontal",size:x="100%",step:E=1,value:O,variant:L="default",...$},J)=>{const N=L==="flat"?jA:_A,U=m==="vertical",[j=c,Y]=dl({defaultValue:l,onChange:p??y,value:O}),{isFocusVisible:F,onBlurVisible:I,ref:nt}=OA(),[B,ct]=v.useState(!1),rt=v.useRef(),Ot=v.useRef(null),Ct=ym(nt,rt),vt=ym(J,Ct),g=Ml(H=>{F(H)&&ct(!0)}),X=Ml(()=>{B!==!1&&(ct(!1),I())}),et=v.useRef(),C=v.useMemo(()=>u===!0&&Number.isFinite(E)?[...Array(Math.round((s-c)/E)+1)].map((H,W)=>({label:void 0,value:c+E*W})):Array.isArray(u)?u:[],[u,s,c,E]),G=Ml(H=>{const W=(s-c)/10,it=C.map(ht=>ht.value),lt=it.indexOf(j);let ft=0;switch(H.key){case"Home":ft=c;break;case"End":ft=s;break;case"PageUp":E&&(ft=j+W);break;case"PageDown":E&&(ft=j-W);break;case"ArrowRight":case"ArrowUp":E?ft=j+E:ft=it[lt+1]||it[it.length-1];break;case"ArrowLeft":case"ArrowDown":E?ft=j-E:ft=it[lt-1]||it[0];break;default:return}H.preventDefault(),E&&(ft=pm(ft,E,c)),ft=_l(ft,c,s),Y(ft),ct(!0),p==null||p(ft),y==null||y(ft)}),P=v.useCallback(H=>{if(!rt.current)return 0;const W=rt.current.getBoundingClientRect();let it;U?it=(W.bottom-H.y)/W.height:it=(H.x-W.left)/W.width;let lt;if(lt=zA(it,c,s),E)lt=pm(lt,E,c);else{const ft=C.map(K=>K.value),ht=MA(ft,lt);lt=ft[ht]}return lt=_l(lt,c,s),lt},[C,s,c,E,U]),ot=Ml(H=>{var W;const it=fo(H,et.current);if(!it)return;const lt=P(it);(W=Ot.current)===null||W===void 0||W.focus(),Y(lt),ct(!0),p==null||p(lt)}),A=Ml(H=>{const W=fo(H,et.current);if(!W)return;const it=P(W);y==null||y(it),et.current=void 0;const lt=ho(rt.current);lt.removeEventListener("mousemove",ot),lt.removeEventListener("mouseup",A),lt.removeEventListener("touchmove",ot),lt.removeEventListener("touchend",A)}),q=Ml(H=>{var W;b==null||b(H),H.preventDefault(),(W=Ot.current)===null||W===void 0||W.focus(),ct(!0);const it=fo(H,et.current);if(it){const ft=P(it);Y(ft),p==null||p(ft)}const lt=ho(rt.current);lt.addEventListener("mousemove",ot),lt.addEventListener("mouseup",A)}),at=Ml(H=>{var W;H.preventDefault();const it=H.changedTouches[0];it!=null&&(et.current=it.identifier),(W=Ot.current)===null||W===void 0||W.focus(),ct(!0);const lt=fo(H,et.current);if(lt){const ht=P(lt);Y(ht),p==null||p(ht)}const ft=ho(rt.current);ft.addEventListener("touchmove",ot),ft.addEventListener("touchend",A)});return v.useEffect(()=>{const{current:H}=rt;H==null||H.addEventListener("touchstart",at);const W=ho(H);return()=>{H==null||H.removeEventListener("touchstart",at),W.removeEventListener("mousemove",ot),W.removeEventListener("mouseup",A),W.removeEventListener("touchmove",ot),W.removeEventListener("touchend",A)}},[A,ot,at]),_.createElement(NA,{$disabled:r,hasMarks:!!C.length,isFocused:B,onMouseDown:q,orientation:m,ref:vt,size:fl(x),...$},_.createElement("input",{disabled:r,name:d,type:"hidden",value:j??0}),C&&C.map(H=>_.createElement(HA,{$disabled:r,"data-testid":"tick",key:H.value/(s-c)*100,orientation:m,style:{[U?"bottom":"left"]:`${(H.value-c)/(s-c)*100}%`}},H.label&&_.createElement(UA,{"aria-hidden":!0,"data-testid":"mark",orientation:m},H.label))),_.createElement(N,{orientation:m,variant:L}),_.createElement(BA,{$disabled:r,"aria-disabled":r?!0:void 0,"aria-orientation":m,"aria-valuemax":s,"aria-valuemin":c,"aria-valuenow":j,onBlur:X,onFocus:g,onKeyDown:G,orientation:m,ref:Ot,role:"slider",style:{[U?"bottom":"left"]:`${(U?-100:0)+100*(j-c)/(s-c)}%`},tabIndex:r?void 0:0,variant:L}))});$A.displayName="Slider";const LA=tt.tbody`
  background: ${({theme:l})=>l.canvas};
  display: table-row-group;
  box-shadow: ${Xc};
  overflow-y: auto;
`,YA=v.forwardRef(function({children:r,...u},s){return _.createElement(LA,{ref:s,...u},r)});YA.displayName="TableBody";const GA=tt.td`
  padding: 0 8px;
`,qA=v.forwardRef(function({children:r,...u},s){return _.createElement(GA,{ref:s,...u},r)});qA.displayName="TableDataCell";const QA=tt.thead`
  display: table-header-group;
`,XA=v.forwardRef(function({children:r,...u},s){return _.createElement(QA,{ref:s,...u},r)});XA.displayName="TableHead";const VA=tt.th`
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
  ${({$disabled:l})=>!l&&ut`
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
  ${({$disabled:l})=>l&&aa()}
  &:hover {
    color: ${({theme:l})=>l.materialText};
    ${({$disabled:l})=>l&&aa()}
  }
`,ZA=v.forwardRef(function({disabled:r=!1,children:u,onClick:s,onTouchStart:c=$l,sort:d,...p},y){const b=d==="asc"?"ascending":d==="desc"?"descending":void 0;return _.createElement(VA,{$disabled:r,"aria-disabled":r,"aria-sort":b,onClick:r?void 0:s,onTouchStart:r?void 0:c,ref:y,...p},_.createElement("div",null,u))});ZA.displayName="TableHeadCell";const KA=tt.tr`
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
`,WA=v.forwardRef(function({children:r,...u},s){return _.createElement(KA,{ref:s,...u},r)});WA.displayName="TableRow";const JA=tt.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,FA=tt(ma)`
  &:before {
    box-shadow: none;
  }
`,IA=v.forwardRef(({children:l,...r},u)=>_.createElement(FA,null,_.createElement(JA,{ref:u,...r},l)));IA.displayName="Table";const PA=tt.button`
  ${la()}
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
`,tw=v.forwardRef(({value:l,onClick:r,selected:u=!1,children:s,...c},d)=>_.createElement(PA,{"aria-selected":u,selected:u,onClick:p=>r==null?void 0:r(l,p),ref:d,role:"tab",...c},s));tw.displayName="Tab";const ew=tt.div`
  ${la()}
  ${Jt()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,aw=v.forwardRef(({children:l,...r},u)=>_.createElement(ew,{ref:u,...r},l));aw.displayName="TabBody";const lw=tt.div`
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
`;function iw(l,r){const u=[];for(let s=r;s>0;s-=1)u.push(l.splice(0,Math.ceil(l.length/s)));return u}const rw=v.forwardRef(({value:l,onChange:r=$l,children:u,rows:s=1,...c},d)=>{const p=v.useMemo(()=>{var y;const b=(y=_.Children.map(u,E=>{if(!_.isValidElement(E))return null;const O={selected:E.props.value===l,onClick:r};return _.cloneElement(E,O)}))!==null&&y!==void 0?y:[],m=iw(b,s).map((E,O)=>({key:O,tabs:E})),x=m.findIndex(E=>E.tabs.some(O=>O.props.selected));return m.push(m.splice(x,1)[0]),m},[u,r,s,l]);return _.createElement(lw,{...c,isMultiRow:s>1,role:"tablist",ref:d},p.map(y=>_.createElement(nw,{key:y.key},y.tabs)))});rw.displayName="Tabs";const ow=["blur","focus"],uw=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function xm(l){return"nativeEvent"in l&&ow.includes(l.type)}function Am(l){return"nativeEvent"in l&&uw.includes(l.type)}const sw={top:`top: -4px;
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
  box-shadow: ${Qc};
  text-align: center;
  font-size: 1rem;
  ${l=>sw[l.position]}
`,fw=tt.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,dw=v.forwardRef(({className:l,children:r,disableFocusListener:u=!1,disableMouseListener:s=!1,enterDelay:c=1e3,leaveDelay:d=0,onBlur:p,onClose:y,onFocus:b,onMouseEnter:m,onMouseLeave:x,onOpen:E,style:O,text:L,position:$="top",...J},N)=>{const[U,j]=v.useState(!1),[Y,F]=v.useState(),[I,nt]=v.useState(),B=!u,ct=!s,rt=P=>{window.clearTimeout(Y),window.clearTimeout(I);const ot=window.setTimeout(()=>{j(!0),E==null||E(P)},c);F(ot)},Ot=P=>{P.persist(),xm(P)?b==null||b(P):Am(P)&&(m==null||m(P)),rt(P)},Ct=P=>{window.clearTimeout(Y),window.clearTimeout(I);const ot=window.setTimeout(()=>{j(!1),y==null||y(P)},d);nt(ot)},vt=P=>{P.persist(),xm(P)?p==null||p(P):Am(P)&&(x==null||x(P)),Ct(P)},g=B?vt:void 0,X=B?Ot:void 0,et=ct?Ot:void 0,C=ct?vt:void 0,G=B?0:void 0;return _.createElement(fw,{"data-testid":"tooltip-wrapper",onBlur:g,onFocus:X,onMouseEnter:et,onMouseLeave:C,tabIndex:G},_.createElement(cw,{className:l,"data-testid":"tooltip",position:$,ref:N,show:U,style:O,...J},L),r)});dw.displayName="Tooltip";const Cc=tt(Kc)`
  white-space: nowrap;
`,Gg=ut`
  :focus {
    outline: none;
  }

  ${({$disabled:l})=>l?"cursor: default;":ut`
          cursor: pointer;

          :focus {
            ${Cc} {
              background: ${({theme:r})=>r.hoverBackground};
              color: ${({theme:r})=>r.materialTextInvert};
              outline: 2px dotted ${({theme:r})=>r.focusSecondary};
            }
          }
        `}
`,hw=tt.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:l})=>l&&ut`
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

  ${({isRootLevel:l})=>l?ut`
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
        `:ut`
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
`,wm=tt(Zc)`
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
`;function Sm(l,r){return l.includes(r)?l.filter(u=>u!==r):[...l,r]}function Em(l){l.preventDefault()}function qg({className:l,disabled:r,expanded:u,innerRef:s,level:c,select:d,selected:p,style:y,tree:b=[]}){const m=c===0,x=v.useCallback(E=>{var O,L;const $=!!(E.items&&E.items.length>0),J=u.includes(E.id),N=(O=r||E.disabled)!==null&&O!==void 0?O:!1,U=N?Em:I=>d(I,E),j=N?Em:I=>d(I,E),Y=p===E.id,F=_.createElement(bw,{"aria-hidden":!0},E.icon);return _.createElement(pw,{key:E.label,isRootLevel:m,role:"treeitem","aria-expanded":J,"aria-selected":Y,hasItems:$},$?_.createElement(mw,{open:J},_.createElement(gw,{onClick:U,$disabled:N},_.createElement(wm,{$disabled:N},F,_.createElement(Cc,null,E.label))),J&&_.createElement(qg,{className:l,disabled:N,expanded:u,level:c+1,select:d,selected:p,style:y,tree:(L=E.items)!==null&&L!==void 0?L:[]})):_.createElement(wm,{as:"button",$disabled:N,onClick:j},F,_.createElement(Cc,null,E.label)))},[l,r,u,m,c,d,p,y]);return _.createElement(hw,{className:m?l:void 0,style:m?y:void 0,ref:m?s:void 0,role:m?"tree":"group",isRootLevel:m},b.map(x))}function yw({className:l,defaultExpanded:r=[],defaultSelected:u,disabled:s=!1,expanded:c,onNodeSelect:d,onNodeToggle:p,selected:y,style:b,tree:m=[]},x){const[E,O]=dl({defaultValue:r,onChange:p,onChangePropName:"onNodeToggle",value:c,valuePropName:"expanded"}),[L,$]=dl({defaultValue:u,onChange:d,onChangePropName:"onNodeSelect",value:y,valuePropName:"selected"}),J=v.useCallback((j,Y)=>{if(p){const F=Sm(E,Y);p(j,F)}O(F=>Sm(F,Y))},[E,p,O]),N=v.useCallback((j,Y)=>{$(Y),d&&d(j,Y)},[d,$]),U=v.useCallback((j,Y)=>{j.preventDefault(),N(j,Y.id),Y.items&&Y.items.length&&J(j,Y.id)},[N,J]);return _.createElement(qg,{className:l,disabled:s,expanded:E,level:0,innerRef:x,select:U,selected:L,style:b,tree:m})}const vw=v.forwardRef(yw);vw.displayName="TreeView";const xw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAD/AP8A/6C9p5MAAAVLSURBVFjD7ZdbiFVlFMd/a+1znZvjXNJx8lLmkIbaSxkFEQXKZGT2YkQPUREW+RD03FMU9GaQQQm9FT1EkaVCISFRqOUlNQ1Myrk1XufMnNvMOftbPezLOXNmxkYhguiDfdjfPt/51n/9//+91nfg//EvD6mfFItFstms7v7ww7Xnh0c6fDCpWyQilnZOJ4sFm20z9TxLt7dTKk9K3cayuLPjyo7t209NTEy4tra22QGYWTRvfvHJrR/pT4c3dZmrFj2PcqWKYpiIpR58WDpWr8GcA5HgCsDhSiUb2LvHciMjKiqogDMSunLV/l0Hv3u6Awr5fJ7W1tYYQCK62blzJ+nm5rWH93zxRtuZUw/0Xx5JrRdSY2pc8sETqKowvrqPpVueAHOY71MdHsQvFrBsllRrO4N7Pyc/dolKmE1F4NBg6v5XH+1/79Z773st7enFegZiAENDQ0hLa3vq6JFHNl8bbRIVFEMBDRM1EZwozhz4Pp5zNL+/i9wP3zK09DYyr7/JqoxHNg0XfOGKQQnjnj8Hu04UipvPqvfL6nXr9t++dOnx8wMD0wEAGNAssCTt0eGMBb7jWhTcwgUh3YgggJTKuLEybmEe3zkSBosqsCABFRUGxRidhGJ+rCPx3YG3zuSu6ejAwPEZDNSDyCD0qGF+LaiGbnHOxWuds4AlA/MNcwHKrEAWwzkjoXBJhF4cU67CuakpJmeTIN7ULEjXrGZRi3HUDBt+f+WOPnL5AtVFPbSk0zVXO1CFhT6sVuMCwgCQEmgCxucCELGAhDcSBQ3uVSV8Yww8j+SzL9DpHF3qUapM4lykU3AJsAwQM46Fm+v1GFAk0NgkDq5SA2VVH6v6iDlAUNUg1YC+AFxUPFyYhNYknF55ZpMAi7MXYIlCd5i9c47Sns9IH/4hlCB0Z5i0b46m4cFaEK2xGOA1BLs+AEEQZxBS2Rp5zsKMfj0FZ05N88e0zLQhy/rnDhriz+YBC/kS8Ou8EG3SkNk0EMwxrwfydxIYoeHCUUYpexr8ThoWRlpb3TOtzdWg2fdRMYTQwA0IZjJgxO8zBu+K8oWXJOspZoYZeBpEjTaz2A9hazAwFRY4eNsvscJ8zAIFGgiYBUBY+ZwJJ53Q8uhmtmy4h0RIS8SOagL1PHzfDxoThqhizjGRz5G7No4W8/z41T66xq+GPauunM4FQCT4qGL8bMrdGx9jw3MvcCPj4uWL/HHhD/Lnz/PbgYNM5K4G4GXmWm18EMhqpDCeSvqs9+zv4s0Y3Z3d3NK9GKk6Hk9W6PGiYPWnizkAWHgEmRT42IRjpvMI2ciikEwk8EXZW00wKnVvZ0M+MwGEOnnAcoOFduMMRHE8fJZJhbRFR6t5eMAI+r6a0CcO9WReAWcHYXSLR5ODgoKLHH49BiKaphx8YnDSd/MM1xjdqJryTTXJ6FwFizlKMRgZjGcEVG5SAoOkObZ6ZRYDFw1kXhKYxZ2w06AiNyeBqJBMKl1iHHRwziWoJgDRaRBiAC0tLSRbmidPdt4y8CX+8ucLVzMtAmePHuLCgjbwHWaBHCIan4w07NWRUCJCJpNhaGSYgeNHmSqW+cZSDKeaqsnO1svZnt6ccgQzQ8JjHQD79u0jk05nToyM9p7dvWv3tmPfP7QMeEeTfCqCB8SnMYmP8UH3lLh5xiBMHEkHa6aMq05Ir1g5dOemjdvu6us7vePll8YiADED/f395HK58kNtbb+/cuDrXR8UCl+3m3ODqPX4KsH/gOkS1nfi2ZpjAigBHk7aenrGV/b2ni5OjI9FIGFmb/hHhjXUErlJX/03x19dE2bA1PxYJgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNS0wMS0yOVQxMTowMjowOSswMDowMEhEIm4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjUtMDEtMjlUMTE6MDI6MDkrMDA6MDA5GZrSAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI1LTAxLTI5VDExOjAyOjEwKzAwOjAwNz7+QAAAAABJRU5ErkJggg==",Aw="/assets/power-Ch1zkzcl.png";var mc,Tm;function ww(){if(Tm)return mc;Tm=1;var l={name:"vistaesqueMidnight",anchor:"rgb(64, 64, 192)",anchorVisited:"rgb(64, 64, 192)",borderDark:"rgb(21, 21, 21)",borderDarkest:"rgb(0, 0, 0)",borderLight:"rgb(32, 32, 32)",borderLightest:"rgb(128, 128, 128)",canvas:"rgb(0, 0, 0)",canvasText:"rgb(255, 255, 255)",canvasTextDisabled:"rgb(21, 21, 21)",canvasTextDisabledShadow:"rgb(128, 128, 128)",canvasTextInvert:"rgb(255, 255, 255)",checkmark:"rgb(255, 255, 255)",checkmarkDisabled:"rgb(32, 32, 32)",desktopBackground:"rgb(31, 60, 89)",flatDark:"rgb(21, 21, 21)",flatLight:"rgb(32, 32, 32)",focusSecondary:"rgb(128, 128, 128)",headerBackground:"linear-gradient(to right, rgb(81, 132, 188), rgb(100, 168, 60))",headerNotActiveBackground:"linear-gradient(to right, rgb(22, 46, 101), rgb(18, 91, 30))",headerNotActiveText:"rgb(192, 192, 192)",headerText:"rgb(255, 255, 255)",hoverBackground:"rgb(49, 106, 197)",material:"rgb(32, 32, 32)",materialDark:"rgb(22, 46, 101)",materialText:"rgb(255, 255, 255)",materialTextDisabled:"rgb(21, 21, 21)",materialTextDisabledShadow:"rgb(128, 128, 128)",materialTextInvert:"rgb(255, 255, 255)",progress:"rgb(49, 106, 197)",tooltip:"rgb(0, 0, 30)"};return mc=l,mc}var Sw=ww();const Ew=Mc(Sw);(function(){var l,r=document.createElement("div");r.innerHTML="<div class=crt></div><div class=wb-header><div class=wb-control><span class=wb-min></span><span class=wb-max></span><span class=wb-full></span><span class=wb-close></span></div><div class=wb-drag><div class=wb-icon></div><div class=wb-title></div></div></div><div class=wb-body></div><div class=wb-n></div><div class=wb-s></div><div class=wb-w></div><div class=wb-e></div><div class=wb-nw></div><div class=wb-ne></div><div class=wb-se></div><div class=wb-sw></div></div>";function u(g,X,et,C){g&&g.addEventListener(X,et,C||!1)}function s(g,X){var et=window,C=m;et&&et.removeEventListener(g,X,C||!1)}function c(g,X){g.stopPropagation(),X&&g.preventDefault()}function d(g,X,et){et=""+et,g["_s_"+X]!==et&&(g.style.setProperty(X,et),g["_s_"+X]=et)}var p=[],y=[],b={capture:!0,passive:!1},m={capture:!0,passive:!0},x,E=0,O=10,L,$,J,N,U,j;function Y(g,X){if(!(this instanceof Y))return new Y(g);if(x||I(),g){if(X){var et=g;g=X}if(typeof g=="string")et=g;else{var C=g.id,G=g.index,P=g.root,ot=g.template;et=et||g.title;var A=g.icon,q=g.mount,at=g.html,H=g.url,W=g.width,it=g.height,lt=g.minwidth,ft=g.minheight,ht=g.maxwidth,K=g.maxheight,bt=g.autosize,pt=g.overflow,xt=g.min,kt=g.max,jt=g.hidden,qt=g.modal,ae=g.x||(qt?"center":0),Qt=g.y||(qt?"center":0),be=g.top,re=g.left,Ue=g.bottom,Ee=g.right,na=g.background,$e=g.border,Ha=g.header,Ll=g.class,Ua=g.oncreate,Ae=g.onclose,ia=g.onfocus,we=g.onblur,Yo=g.onmove,Go=g.onresize,qo=g.onfullscreen,Yl=g.onmaximize,Gl=g.onminimize,ga=g.onrestore,ql=g.onhide,pl=g.onshow,Qo=g.onload}}this.g=(ot||r).cloneNode(!0),this.g.id=this.id=C||"winbox-"+ ++E,this.g.className="winbox"+(Ll?" "+(typeof Ll=="string"?Ll:Ll.join(" ")):"")+(qt?" modal":""),this.g.winbox=this,this.window=this.g,this.body=this.g.getElementsByClassName("wb-body")[0],this.h=Ha||35,y.push(this),na&&this.setBackground(na),$e?d(this.body,"margin",$e+(isNaN($e)?"":"px")):$e=0,Ha&&(X=this.g.getElementsByClassName("wb-header")[0],d(X,"height",Ha+"px"),d(X,"line-height",Ha+"px"),d(this.body,"top",Ha+"px")),et&&this.setTitle(et),A&&this.setIcon(A),q?this.mount(q):at?this.body.innerHTML=at:H&&this.setUrl(H,Qo),be=be?F(be,U):0,Ue=Ue?F(Ue,U):0,re=re?F(re,N):0,Ee=Ee?F(Ee,N):0,et=N-re-Ee,A=U-be-Ue,ht=ht?F(ht,et):et,K=K?F(K,A):A,lt=lt?F(lt,ht):150,ft=ft?F(ft,K):this.h,bt?((P||x).appendChild(this.body),W=Math.max(Math.min(this.body.clientWidth+2*$e+1,ht),lt),it=Math.max(Math.min(this.body.clientHeight+this.h+$e+1,K),ft),this.g.appendChild(this.body)):(W=W?F(W,ht):Math.max(ht/2,lt)|0,it=it?F(it,K):Math.max(K/2,ft)|0),ae=ae?F(ae,et,W):re,Qt=Qt?F(Qt,A,it):be,this.x=ae,this.y=Qt,this.width=W,this.height=it,this.s=lt,this.o=ft,this.m=ht,this.l=K,this.top=be,this.right=Ee,this.bottom=Ue,this.left=re,this.index=G,this.j=pt,this.focused=this.hidden=this.full=this.max=this.min=!1,this.onclose=Ae,this.onfocus=ia,this.onblur=we,this.onmove=Yo,this.onresize=Go,this.onfullscreen=qo,this.onmaximize=Yl,this.onminimize=Gl,this.onrestore=ga,this.onhide=ql,this.onshow=pl,jt?this.hide():this.focus(),(G||G===0)&&(this.index=G,d(this.g,"z-index",G),G>O&&(O=G)),kt?this.maximize():xt?this.minimize():this.resize().move(),nt(this),(P||x).appendChild(this.g),Ua&&Ua.call(this,g)}Y.new=function(g){return new Y(g)},Y.stack=function(){return y};function F(g,X,et){return typeof g=="string"&&(g==="center"?g=(X-et)/2+.5|0:g==="right"||g==="bottom"?g=X-et:(et=parseFloat(g),g=(""+et!==g&&g.substring((""+et).length))==="%"?X/100*et+.5|0:et)),g}function I(){x=document.body,x[$="requestFullscreen"]||x[$="msRequestFullscreen"]||x[$="webkitRequestFullscreen"]||x[$="mozRequestFullscreen"]||($=""),J=$&&$.replace("request","exit").replace("mozRequest","mozCancel").replace("Request","Exit"),u(window,"resize",function(){Ot(),ct()}),u(x,"mousedown",function(){j=!1},!0),u(x,"mousedown",function(){if(!j){var g=y.length;if(g)for(--g;0<=g;g--){var X=y[g];if(X.focused){X.blur();break}}}}),Ot()}function nt(g){rt(g,"drag"),rt(g,"n"),rt(g,"s"),rt(g,"w"),rt(g,"e"),rt(g,"nw"),rt(g,"ne"),rt(g,"se"),rt(g,"sw"),u(g.g.getElementsByClassName("wb-min")[0],"click",function(X){c(X),g.min?g.restore().focus():g.minimize()}),u(g.g.getElementsByClassName("wb-max")[0],"click",function(X){c(X),g.max?g.restore().focus():g.maximize().focus()}),$?u(g.g.getElementsByClassName("wb-full")[0],"click",function(X){c(X),g.fullscreen().focus()}):g.addClass("no-full"),u(g.g.getElementsByClassName("wb-close")[0],"click",function(X){c(X),g.close()||(g=null)}),u(g.g,"mousedown",function(){j=!0},!0),u(g.body,"mousedown",function(){g.focus()},!0)}function B(g){p.splice(p.indexOf(g),1),ct(),g.removeClass("min"),g.min=!1,g.g.title=""}function ct(){for(var g=p.length,X={},et={},C=0,G;C<g;C++)G=p[C],G=G.left+":"+G.top,et[G]?et[G]++:(X[G]=0,et[G]=1);C=0;for(var P,ot;C<g;C++)G=p[C],P=G.left+":"+G.top,ot=Math.min((N-G.left-G.right)/et[P],250),G.resize(ot+1|0,G.h,!0).move(G.left+X[P]*ot|0,U-G.bottom-G.h,!0),X[P]++}function rt(g,X){function et(H){if(c(H,!0),g.focus(),X==="drag"){if(g.min){g.restore();return}if(!g.g.classList.contains("no-max")){var W=Date.now(),it=W-at;if(at=W,300>it){g.max?g.restore():g.maximize();return}}}g.min||(x.classList.add("wb-lock"),(ot=H.touches)&&(ot=ot[0])?(H=ot,u(window,"touchmove",C,m),u(window,"touchend",G,m)):(u(window,"mousemove",C,m),u(window,"mouseup",G,m)),A=H.pageX,q=H.pageY)}function C(H){c(H),ot&&(H=H.touches[0]);var W=H.pageX;H=H.pageY;var it=W-A,lt=H-q,ft=g.width,ht=g.height,K=g.x,bt=g.y,pt;if(X==="drag"){if(g.g.classList.contains("no-move"))return;g.x+=it,g.y+=lt;var xt=pt=1}else{if(X==="e"||X==="se"||X==="ne"){g.width+=it;var kt=1}else(X==="w"||X==="sw"||X==="nw")&&(g.x+=it,g.width-=it,xt=kt=1);if(X==="s"||X==="se"||X==="sw"){g.height+=lt;var jt=1}else(X==="n"||X==="ne"||X==="nw")&&(g.y+=lt,g.height-=lt,pt=jt=1)}kt&&(g.width=Math.max(Math.min(g.width,g.m,N-g.x-g.right),g.s),kt=g.width!==ft),jt&&(g.height=Math.max(Math.min(g.height,g.l,U-g.y-g.bottom),g.o),jt=g.height!==ht),(kt||jt)&&g.resize(),xt&&(g.max&&(g.x=(W<N/3?g.left:W>N/3*2?N-g.width-g.right:N/2-g.width/2)+it),g.x=Math.max(Math.min(g.x,g.j?N-30:N-g.width-g.right),g.j?30-g.width:g.left),xt=g.x!==K),pt&&(g.max&&(g.y=g.top+lt),g.y=Math.max(Math.min(g.y,g.j?U-g.h:U-g.height-g.bottom),g.top),pt=g.y!==bt),(xt||pt)&&(g.max&&g.restore(),g.move()),(kt||xt)&&(A=W),(jt||pt)&&(q=H)}function G(H){c(H),x.classList.remove("wb-lock"),ot?(s("touchmove",C),s("touchend",G)):(s("mousemove",C),s("mouseup",G))}var P=g.g.getElementsByClassName("wb-"+X)[0];if(P){var ot,A,q,at=0;u(P,"mousedown",et,b),u(P,"touchstart",et,b)}}function Ot(){var g=document.documentElement;N=g.clientWidth,U=g.clientHeight}l=Y.prototype,l.mount=function(g){return this.unmount(),g.i||(g.i=g.parentNode),this.body.textContent="",this.body.appendChild(g),this},l.unmount=function(g){var X=this.body.firstChild;if(X){var et=g||X.i;et&&et.appendChild(X),X.i=g}return this},l.setTitle=function(g){var X=this.g.getElementsByClassName("wb-title")[0];g=this.title=g;var et=X.firstChild;return et?et.nodeValue=g:X.textContent=g,this},l.setIcon=function(g){var X=this.g.getElementsByClassName("wb-icon")[0];return d(X,"background-image","url("+g+")"),d(X,"display","inline-block"),this},l.setBackground=function(g){return d(this.g,"background",g),this},l.setUrl=function(g,X){var et=this.body.firstChild;return et&&et.tagName.toLowerCase()==="iframe"?et.src=g:(this.body.innerHTML='<iframe src="'+g+'"></iframe>',X&&(this.body.firstChild.onload=X)),this},l.focus=function(g){if(g===!1)return this.blur();if(!this.focused){if(g=y.length,1<g)for(var X=1;X<=g;X++){var et=y[g-X];if(et.focused){et.blur(),y.push(y.splice(y.indexOf(this),1)[0]);break}}d(this.g,"z-index",++O),this.index=O,this.addClass("focus"),this.focused=!0,this.onfocus&&this.onfocus()}return this},l.blur=function(g){return g===!1?this.focus():(this.focused&&(this.removeClass("focus"),this.focused=!1,this.onblur&&this.onblur()),this)},l.hide=function(g){if(g===!1)return this.show();if(!this.hidden)return this.onhide&&this.onhide(),this.hidden=!0,this.addClass("hide")},l.show=function(g){if(g===!1)return this.hide();if(this.hidden)return this.onshow&&this.onshow(),this.hidden=!1,this.removeClass("hide")},l.minimize=function(g){return g===!1?this.restore():(L&&vt(),this.max&&(this.removeClass("max"),this.max=!1),this.min||(p.push(this),ct(),this.g.title=this.title,this.addClass("min"),this.min=!0,this.focused&&(this.blur(),Ct()),this.onminimize&&this.onminimize()),this)};function Ct(){var g=y.length;if(g)for(--g;0<=g;g--){var X=y[g];if(!X.min){X.focus();break}}}l.restore=function(){return L&&vt(),this.min&&(B(this),this.resize().move(),this.onrestore&&this.onrestore()),this.max&&(this.max=!1,this.removeClass("max").resize().move(),this.onrestore&&this.onrestore()),this},l.maximize=function(g){return g===!1?this.restore():(L&&vt(),this.min&&B(this),this.max||(this.addClass("max").resize(N-this.left-this.right,U-this.top-this.bottom,!0).move(this.left,this.top,!0),this.max=!0,this.onmaximize&&this.onmaximize()),this)},l.fullscreen=function(g){if(this.min&&(B(this),this.resize().move()),!L||!vt())this.body[$](),L=this,this.full=!0,this.onfullscreen&&this.onfullscreen();else if(g===!1)return this.restore();return this};function vt(){if(L.full=!1,document.fullscreen||document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)return document[J](),!0}l.close=function(g){if(this.onclose&&this.onclose(g))return!0;this.min&&B(this),y.splice(y.indexOf(this),1),this.unmount(),this.g.remove(),this.g.textContent="",this.g=this.body=this.g.winbox=null,this.focused&&Ct()},l.move=function(g,X,et){return g||g===0?et||(this.x=g?g=F(g,N-this.left-this.right,this.width):0,this.y=X?X=F(X,U-this.top-this.bottom,this.height):0):(g=this.x,X=this.y),d(this.g,"left",g+"px"),d(this.g,"top",X+"px"),this.onmove&&this.onmove(g,X),this},l.resize=function(g,X,et){return g||g===0?et||(this.width=g?g=F(g,this.m):0,this.height=X?X=F(X,this.l):0,g=Math.max(g,this.s),X=Math.max(X,this.o)):(g=this.width,X=this.height),d(this.g,"width",g+"px"),d(this.g,"height",X+"px"),this.onresize&&this.onresize(g,X),this},l.addControl=function(g){var X=g.class,et=g.image,C=g.click;g=g.index;var G=document.createElement("span"),P=this.g.getElementsByClassName("wb-control")[0],ot=this;return X&&(G.className=X),et&&d(G,"background-image","url("+et+")"),C&&(G.onclick=function(A){C.call(this,A,ot)}),P.insertBefore(G,P.childNodes[g||0]),this},l.removeControl=function(g){return(g=this.g.getElementsByClassName(g)[0])&&g.remove(),this},l.addClass=function(g){return this.g.classList.add(g),this},l.removeClass=function(g){return this.g.classList.remove(g),this},l.toggleClass=function(g){return this.g.classList.contains(g)?this.removeClass(g):this.addClass(g)},window.WinBox=Y}).call(void 0);const fa=WinBox,Tw="/assets/monitor-CmERaNKN.gif",Rw=()=>{const[l,r]=v.useState(0),u=v.useRef(null);return v.useEffect(()=>{let s=setTimeout(()=>{let c=Date.now();u.current=setInterval(()=>{const d=Date.now()-c,p=Math.min(d/4400*100,100);r(p),p===100&&(clearInterval(u.current),setTimeout(()=>r(100),500))},30)},300);return()=>{clearTimeout(s),clearInterval(u.current)}},[]),S.jsx("div",{className:"loading",children:S.jsxs("div",{className:"loading_elements",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[S.jsx("img",{src:Tw,className:"monitor",alt:"~X:/WEBSITE/ > BOOTING UP..."}),S.jsx("br",{}),S.jsx("div",{className:"loading-bar-container",style:{width:240,height:18,background:"#222",borderRadius:1,overflow:"hidden",marginTop:24,border:"6px solid #000",boxShadow:"0 0 0 2px white"},children:S.jsx("div",{className:"loading-bar",style:{display:"flex",margin:0,width:`${l}%`,height:"100%",background:`repeating-linear-gradient(
        90deg,
        #fff 0,
        #fff 20px,
        #000 20px,
        #000 32px
      )`,transition:"width 0.1s linear"}})})]})})},Dw="/assets/desktop_about-BSolwGv2.png",kw="/assets/desktop_contact-CzjDK447.png",Cw="/assets/desktop_donate-DvEemoyz.png",Ow="/assets/desktop_gallery-BrU31pCN.png",zw="/assets/desktop_videos-CZQy56j_.png",Mw="/assets/desktop-about-5UQNFmge.gif",Nw="/assets/desktop-contact-BZXH_09O.gif",_w="/assets/desktop-donate-DQ3hbULG.gif",jw="/assets/desktop-gallery-BBDxh9IK.gif",Bw="/assets/desktop-videos-sxat4MtT.gif",Hw="/assets/steam-dEuQyfPr.png",Uw="/assets/money-spin-BlzhA9B2.gif",$w="/assets/cashapp-Cjq2UZZq.png",Lw="/assets/paypal-Dx-0PIKQ.png",Yw="/assets/tornada-BnYzoTfG.png",Gw="/assets/notepad-BzPf8E6H.png",qw="/assets/info-BTKMA8dZ.png",Qw="/assets/blog-D4q87bQu.png",Xw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAAQMAAADOtka5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAADUExURQAm/0mmUXMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA2SURBVHja7cEBAQAAAIIg/69uSEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwbggAAAWN1UKQAAAAASUVORK5CYII=",Vw="/assets/youtube-Bp2k9DZd.png",Zw="/assets/xitter-DLEKJHi9.png",Kw="/assets/instagram-BF4FSZOC.png",Ww="/assets/newgrounds-CgzA7QG0.png",Jw="/assets/reddit-CRfYQcex.png",Fw="/assets/facebook-BO--MLYP.png",Dt={desktop_about:Dw,desktop_contact:kw,desktop_donate:Cw,desktop_gallery:Ow,desktop_videos:zw,desktop_about_gif:Mw,desktop_contact_gif:Nw,desktop_gallery_gif:jw,desktop_donate_gif:_w,desktop_videos_gif:Bw,tornada:Yw,notepad:Gw,info:qw,pager:Xw,blog:Qw,youtube:Vw,xitter:Zw,instagram:Kw,newgrounds:Ww,reddit:Jw,facebook:Fw,steam:Hw,cashapp:$w,paypal:Lw,moneyspin:Uw},Iw="/assets/BG-DNG1OH_1.gif",Pw="/assets/BG2-afUp6XXV.gif",t2="/assets/BG3-D3gry5fr.gif",e2="/assets/BG4-niHp1bdb.gif",a2="/assets/BG5-3b4TfM3X.gif",l2="/assets/BG6-B2XIkXXV.gif",Mn={background1:Iw,background2:Pw,background3:t2,background4:e2,background5:a2,background6:l2},n2="/assets/aboutem-COgL9iQm.gif",Rm=["jack of all trades, master at some","self-driven creative powerhouse","big boy with small dreams","just a guy tbh","nothing but a wizard","you're doing a great job!","set the scene. 86 degrees.","5'10, stand on my money now I'm 5'6"],Qg=Rm[Math.floor(Math.random()*Rm.length)];console.log("ECKS - ",Qg);const i2=()=>S.jsx(S.Fragment,{children:S.jsxs("div",{style:{width:"100%",height:"100%",padding:0,margin:0},children:[S.jsxs("div",{className:"about-me",children:[S.jsx("span",{className:"about-header",children:" SYSTEM > ABOUT"}),S.jsx("div",{className:"about-split"}),S.jsxs("div",{className:"about-content",children:[S.jsxs("span",{className:"about-tagline",style:{display:"flex",alignItems:"center"},children:[S.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[S.jsx("span",{className:"ECKS-NAME",children:"ECKS!"}),S.jsxs("span",{className:"about-quote",style:{marginTop:2},children:['"',Qg,'"']})]}),S.jsx("img",{src:n2,alt:"ECKS",className:"about-image",style:{right:0,marginLeft:60,maxWidth:172,alignSelf:"flex-start"}})]}),S.jsx("div",{className:"about-split"}),S.jsx("p",{className:"about-bio",style:{width:"95%"},children:"Nice to meet ya! I am a self-taught creative who finds retreat in curiously throwing things together in their free time. Over the last several years I have worked on various projects with my experiences in video editing, graphic design, VFX, and occasionally making music here and there."}),S.jsx("p",{className:"about-bio",style:{width:"95%"},children:"This site aims to be an archive of some of my best scraps, loosely stitched together in a way that can at least be presentable. Everything seen on here was formed from a collection of flickering synapses and contempt for predictability."}),S.jsxs("p",{className:"about-bio",style:{width:"95%"},children:["Some of my other work can be found at ",S.jsx("a",{href:"https://tornada.net",target:"_blank",children:S.jsx("span",{className:"bigdeal",children:"Tornada"})})," - an animation supergroup with an all-star lineup of me and my relatives."]}),S.jsx("p",{className:"about-bio",style:{width:"95%"},children:"At the end of the day, I simply just create the stuff that I wish to see and experience. To me that's the only compass that really makes sense."}),S.jsxs("p",{className:"about-bio",style:{width:"95%"},children:["Anyone hoping to get in touch (or just say hi) can reach me at ",S.jsx("a",{href:"mailto:spam@3cks.net",target:"_blank",rel:"noopener noreferrer",children:S.jsx("span",{className:"bigdeal",children:"spam@3cks.net"})})," or via the links listed on here. I'm open to work and/or whatever questions you may have."]})]})]}),S.jsx("span",{className:"bottom-tag",style:{marginTop:24,fontFamily:"Sans Nouveaux",fontSize:"8px"},children:"- 🅮 ECKS 2025 -"})]})}),r2="/assets/Featured-VHS-Bk_2dzNq.gif",Li=[{title:"THE COLOR BROTHERS",description:"Four colorful boys and their dad.",featuring:"ColeDawg",featuring_link:"https://www.instagram.com/coledawg2001/"}],Oc=[{id:0,title:"BAKLAFA",window_title:"BAKLAVA-IS-FUCKING-AWESOME",alt_title:"BAKLAVA is FUCKING AWESOME",url:"https://iframe.mediadelivery.net/embed/393622/72c5d760-6c3d-4f7f-b01f-4c0586212526?autoplay=true&loop=false&muted=false&preload=true&responsive=true",source:"https://3cks.net/#/watch/baklava-is-fucking-awesome",date:"06-2025",description:`Fresh hot two-pack of some commissions I did in June 2025... 
 First one is a promo video for @ciorecords’ BAKLAVA mixtape. Second one is for an artist named FuckingAwesome who wanted something more specific (quick and flashy with clips from Persona 3, L4D2, Panty n Stocking, and Dexter) and I was happy to oblige with both.`,thumbnail:"https://3cks.b-cdn.net/thumbnails/baklafa.jpg",isYouTube:!1},{id:1,title:"THE COLOR BROTHERS",window_title:"THE-COLOR-BROTHERS",alt_title:"COLOR BROTHERS",url:"https://iframe.mediadelivery.net/embed/393622/b01f3be6-5a68-445e-9a39-a4f59d2ec845?autoplay=true&loop=false&muted=false&preload=true&responsive=true",source:"https://www.youtube.com/watch?v=KAqmREHqTmg",date:"03-23-2025",description:" Segment I did for Tornada’s “Four of a Kind.” This one was a long time in the making. We had already been trading around this idea for years before being blessed with the time and energy to shoot it. Many strings were pulled in one week but it led to some of the most fun I’ve ever had putting something together. We got plenty of B-Roll (of us asking people in public for happy meals) that I wanna put up eventually.",thumbnail:"https://3cks.b-cdn.net/thumbnails/colorbros.jpg",isYouTube:!1},{id:2,title:"HOT THEM SUMMER!",window_title:"HOT-THEM-SUMMER",alt_title:"HOT THEM SUMMER!",url:"https://iframe.mediadelivery.net/embed/393622/2acc6b72-6566-40f0-abb7-b2716fbc272d?autoplay=true&loop=false&muted=false&preload=true&responsive=true",source:"https://3cks.net/#/watch/hot-them-summer",date:"11-24-2022",description:"Lyric video I did for my homegirl Lambs. Threw this together in about a day, just in time for the album she had just released back then. Peace to bluvelv who is on the song as well.",thumbnail:"https://3cks.b-cdn.net/thumbnails/lambs.jpg",isYouTube:!1},{id:3,title:"KNOWLEDGEGOD!",window_title:"KNOWLEDGE-GOD",alt_title:"KNOWLEDEGOD!",url:"https://iframe.mediadelivery.net/embed/393622/5d9bc1aa-9bc8-42f8-bce1-931d46f8ba8c?autoplay=true&loop=false&muted=false&preload=true&responsive=true",source:"https://www.youtube.com/watch?v=sziewA2jzEY",date:"12-31-2022",description:'Segment I did for Tornada’s "Two of a Kind." Was asked to do a music video and this is what I sent back. You can prolly tell it was my first time datamoshing.',thumbnail:"https://3cks.b-cdn.net/thumbnails/knowledgegod.jpg",isYouTube:!1},{id:4,title:"RIDETOSEVENELEVEN",window_title:"MC-RIDE-GOES-TO-THE-STORE",alt_title:"MC RIDE GOES TO THE STORE",url:"https://www.youtube.com/embed/DKDvPdll1D4",source:"https://youtu.be/DKDvPdll1D4",date:"11-24-2019",description:"A fan favorite? Not sure. Made this in 20 minutes on a Sunday and still get asked about it.",thumbnail:"https://3cks.b-cdn.net/thumbnails/ride.jpg",isYouTube:!0},{id:5,title:"FED UP! (IN VR)",window_title:"FED-UP-IN-VR",alt_title:"FEDUP!INVR!",url:"https://www.youtube.com/embed/9m8US6X9gWs",source:"https://www.youtube.com/watch?v=9m8US6X9gWs",date:"08-31-2021",description:"This was one of my first times making money off editing. Threw this one together for Joy Way, the team behind the game being played. They used this video for promo and I was explicitly told to avoid using copyrighted music, but thankfully artist Bazanji came through with a plate of dense, royalty-free raps. Not my usual preferences but at least the client was happy. Honestly besides this I could NOT tell you the last time I played a VR game.",thumbnail:"https://3cks.b-cdn.net/thumbnails/stride.jpg",isYouTube:!0},{id:6,title:"CHOPPA WEDNESDAY!",window_title:"CHOPPA-WEDNESDAY",alt_title:"CHOPPA WEDNESDAY",url:"https://www.youtube.com/embed/G6ik_SLRulQ",source:"https://www.youtube.com/watch?v=G6ik_SLRulQ",date:"10-07-2020",description:"Got really into Team Fortress 2 (and Atlanta trap) during this era and made a few videos like this. I think they all look rougher around the edges now but this one is still my favorite. Was planning to do make 2-3 more but my SFM stopped working lol",thumbnail:"https://3cks.b-cdn.net/thumbnails/choppa.jpg",isYouTube:!0},{id:7,title:"BALD! (TF2)",window_title:"BALD",alt_title:"BALD! (TF2)",url:"https://www.youtube.com/embed/K3XvXyNBrHA",source:"https://www.youtube.com/watch?v=K3XvXyNBrHA",date:"06-10-2020",description:"This one came to me in a dream. It would ultimately serve as the beginning of a short series that kept me occupied during a weird time in my life. Most of my days were being eaten up by stress that I would channel into learning Source Filmmaker in the only way I knew how: by making quick lil videos that were asking to get several effects thrown on in post. Wouldn’t say it’s anywhere near my best work nowadays but I got some fond memories and met some cool people through it. Shoutout to anyone who remembers when I would promote this on TF2 trading sites.",thumbnail:"https://3cks.b-cdn.net/thumbnails/bald.jpg",isYouTube:!0},{id:8,title:"SAGGY AND SOGGY",window_title:"SAGGY-AND-SOGGY",alt_title:"SAGGY AND SOGGY - SODIUM CONNECTIONS",url:"https://www.youtube.com/embed/RnXMoazSLo4",source:"https://www.youtube.com/watch?vRnXMoazSLo4",date:"05-15-2020",description:'This one’s pretty old but still means a lot to me. Originally wrote the first draft of the script for this in 2018 after a PlayStation party with a friend. We were discussing what a funny name for a kids cartoon would be and landed on "Saggy and Soggy." That name stuck with me and would come up the next time I was in my studio. I wanted to write something I wasn’t used to, which at the time, was a cartoon longer than 30 seconds. Looking at it now, my writing was debatably as goofy as it is now, but for different reasons. While I was tryna get this up on the site, I came across the first draft again and was surprised at what got cut out. Mostly just random lines like Saggy saying "God and his son, Curious George" along with even having cutaway gags in the mix at some point. At the perfect time, Tornada just so happened to form, and after a few months, fellow videomaster and partner-in-crime Pity Fowl offered to take over. He showed (and has continued to show) a lotta love to this project, honestly more than what I had originally. That’s what ultimately led to his extended involvement: he wrote the second half of the script and ended up animating most of it. From my end, I offered a music video segment which was my first time using After Effects if you could not already tell..',thumbnail:"https://3cks.b-cdn.net/thumbnails/sagsog.jpg",isYouTube:!0},{id:9,title:"RIDETOSEVENELEVEN",window_title:"RIDETOSEVENELEVEN",alt_title:"MC RIDE GOES TO THE STORE",url:"https://www.youtube.com/embed/DKDvPdll1D4",source:"https://youtu.be/DKDvPdll1D4",date:"11-24-2019",description:"A fan favorite? Not sure. Made this in 20 minutes on a Sunday and still get asked about it.",thumbnail:"https://3cks.b-cdn.net/thumbnails/ride.jpg",isYouTube:!0}];function zc(l){const r=document.createElement("div");new fa({title:`~/X/VIDEOS/${l.window_title}`,icon:Dt.desktop_videos,width:Math.min(500,window.innerWidth*.9)+"px",height:s2(),x:"center",y:"center",background:"#000",mount:r,setBackground:u=>console.log(`Background set to ${u}`),onClose:()=>{r.remove()}}),r.innerHTML=`
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
  `,setTimeout(()=>{const u=r.querySelector("#share-btn");u&&u.addEventListener("click",()=>{const s=`https://3cks.net/#/watch/${l.window_title.toLowerCase()}`;if(navigator.share)navigator.share({title:l.title,url:s});else{const c=document.createElement("div");new fa({title:"~X/SHARE/",icon:Dt.blog,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",width:"375px",height:"215px",x:"center",y:"center",mount:c,setBackground:d=>console.log(`Background set to ${d}`),onClose:()=>{console.log("Window closed"),c.remove()}}),c.innerHTML=`
            <div style="padding: 24px; text-align: center; background: linear-gradient(0deg,rgb(33, 33, 33) 0%, rgb(12, 12, 12) 86%); width:text-align: center;">
              <div style="display: flex; align-items: center; gap: 10px; margin: 4px 0 16px 0; justify-content: center;">
<div style="display: flex; align-items: flex-end; gap: 32px; margin: 4px 0 16px 0; justify-content: center;font-family:'Pixeloid Sans';">
<div class="share-icon" style="display: flex; flex-direction: column; align-items: center;">
  <a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(s)}" target="_blank" title="Share on Twitter" style="display:inline-block;">
    <img src="${Dt.xitter}" alt="Twitter/X" style="width:33px;height:33px;margin-bottom:8px;" />
  <span style="color:#fdfdfd; font-size:14px;">Xitter</span>
      </a>
</div>
<div class="share-icon" style="display: flex; flex-direction: column; align-items: center;">
  <a href="https://www.reddit.com/submit?url=${encodeURIComponent(s)}" target="_blank" title="Share on Facebook" style="display:inline-block;">
    <img src="${Dt.reddit}" alt="Reddit" style="width:33px;height:33px;margin-bottom:8px;" />

  <span style="color:#fdfdfd; font-size:14px;">Reddit</span>
      </a>
</div>
<div class="share-icon" style="display: flex; flex-direction: column; align-items: center;">
  <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(s)}" target="_blank" title="Share on Reddit" style="display:inline-block;">
    <img src="${Dt.facebook}" alt="Facebook" style="width:33px;height:33px;margin-bottom:8px;" />

  <span style="color:#fdfdfd; font-size:14px;">Facebook</span>
      </a>
</div>
<div class="share-icon" style="display: flex; flex-direction: column; align-items: center;">
    <a href="mailto:?subject=Check%20this%20video&body=${encodeURIComponent(s)}" title="Share via Email" style="display:inline-block;">
    <img src="${Dt.desktop_contact}" alt="Email" style="width:33px;height:33px;margin-bottom:8px;" />

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
          `,setTimeout(()=>{const d=c.querySelector("#copy-share-link");d&&d.addEventListener("click",()=>{navigator.clipboard.writeText(s),d.textContent="Copied!",setTimeout(()=>d.textContent="Copy",1200)})},0)}})},0)}const o2=S.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",style:{marginLeft:4,verticalAlign:"middle"},children:S.jsx("path",{fill:"#FF0000",d:"M21.8 8.001a2.75 2.75 0 0 0-1.94-1.94C18.19 6 12 6 12 6s-6.19 0-7.86.061a2.75 2.75 0 0 0-1.94 1.94A28.6 28.6 0 0 0 2 12a28.6 28.6 0 0 0 .2 3.999 2.75 2.75 0 0 0 1.94 1.94C5.81 18 12 18 12 18s6.19 0 7.86-.061a2.75 2.75 0 0 0 1.94-1.94A28.6 28.6 0 0 0 22 12a28.6 28.6 0 0 0-.2-3.999zM10 15V9l5 3-5 3z"})}),u2=S.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",style:{marginLeft:4,verticalAlign:"middle"},children:S.jsx("path",{fill:"#888",d:"M10 17l5-5-5-5v10z"})}),s2=()=>window.innerWidth<768?"60%":"400px",c2=()=>S.jsxs(S.Fragment,{children:[S.jsxs("div",{className:"videos-header",style:{color:"#FDFDFD",fontSize:24,margin:0,overflowX:"visible",overflowY:"hidden",display:"flex",marginTop:-8,whiteSpace:"nowrap",marginBottom:16},children:[S.jsxs("div",{style:{fontFamily:"Pixeloid Sans",flexDirection:"column",display:"flex",minWidth:128,borderBottom:"2px solid black",width:"40%",paddingRight:30},children:[S.jsx("p",{className:"videos-header-title",style:{width:"100px",fontFamily:"Pixeloid Sans Bold",fontSize:40,marginLeft:8},children:"VIDEOS"}),S.jsxs("p",{className:"videos-header-subtitle",style:{fontSize:14,width:"168px",lineHeight:1,marginTop:-8,marginLeft:12,marginRight:8,textWrap:"wrap"},children:["I made a few of these here and there.. and you can watch em on here or ",S.jsx("a",{href:"https://youtube.com/ecksposting",target:"_blank",children:"YouTube!"})]})]}),S.jsxs("div",{className:"videos-featured",style:{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",marginTop:1,padding:4,borderRadius:0,borderBottom:"2px solid black",maxWidth:480,cursor:"pointer",lineHeight:1},onClick:()=>zc(Oc[1]),children:[S.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[S.jsx("img",{src:r2,alt:Li[0].title,style:{width:120,height:140,objectFit:"contain",paddingRight:8,marginTop:4}}),S.jsxs("span",{className:"featured-video-title",style:{paddingLeft:4,paddingRight:16,color:"white",fontSize:26,lineHeight:1.25,fontWeight:"bold",display:"block",width:"280px",textWrap:"wrap"},children:[S.jsx("span",{children:"-  FEATURED "}),S.jsx("br",{}),S.jsx("span",{children:Li[0].title})]})]}),S.jsxs("span",{style:{color:"white",fontSize:14,display:"block",marginTop:12,marginLeft:2,lineHeight:1},children:[Li[0].description," Art done by ",S.jsxs("a",{href:Li[0].featuring_link,target:"_blank",children:["@",Li[0].featuring]})]})]})]}),S.jsx("div",{className:"videos-grid",style:{display:"flex",flexWrap:"wrap",width:"95%",textAlign:"center",gap:"12px"},children:Oc.filter(l=>l.id!==9).map(l=>S.jsxs("button",{className:"my-videos",style:{width:180,border:"2px ridge #222",borderRadius:1,height:"100%",margin:"auto",background:"white",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:"pointer",overflow:"hidden"},title:l.title,onClick:()=>zc(l),children:[S.jsx("img",{src:l.thumbnail,alt:l.alt_title,loading:"lazy",style:{width:"90%",height:"90%",display:"block",border:"2px solid #222"}}),S.jsxs("span",{style:{color:"black",fontWeight:"bold",fontSize:10,textAlign:"center",margin:"auto",padding:"6px 4px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",height:"100%"},children:[l.title,l.isYouTube?o2:u2]})]},l.id))}),S.jsx("span",{className:"bottom-tag",style:{marginTop:16,fontFamily:"Sans Nouveaux"},children:"- press play. trust the process. -"}),S.jsx("span",{style:{textAlign:"center"},children:"..."})]}),Dm=[{src:"/gallery/2025-search-thumb.jpg",alt:"INTERNET-SEARCH",year:"2025",full:"/gallery/2025-search.jpg",tags:["graphics"]},{src:"/gallery/2025-baklava-mockup-thumb.jpg",alt:"BAKLAVA-AD-MOCKUP",year:"2025",full:"/gallery/2025-baklava-mockup.jpg",tags:["graphics"]},{src:"/gallery/2025-baklava-blend.jpg",alt:"BAKLAVA.BLEND",year:"2025",full:"/gallery/2025-baklava-blend.jpg",tags:["graphics"]},{src:"/gallery/2025-nadathumb.jpg",alt:"TOM-Y-JERRY",year:"2025",full:"/gallery/2025-nada.gif",tags:["graphics"]},{src:"/gallery/2025-banner.jpg",alt:"BANNER",year:"2025",full:"/gallery/2025-banner.jpg",tags:["graphics"]},{src:"/gallery/2025-you-rule-thumb.jpg",alt:"YOU-RULE",year:"2025",full:"/gallery/2025-you-rule.jpg",tags:["photos"]},{src:"/gallery/2025_crankdat.jpg",alt:"CRANKDAT",year:"2025",full:"/gallery/2025_crankdat.jpg",tags:["music"]},{src:"/gallery/2025-uhuhuh.jpg",alt:"UHUHUH",year:"2025",full:"/gallery/2025-uhuhuh.jpg",tags:["photos"]},{src:"/gallery/2025-vinyl.jpg",alt:"VINYL",year:"2025",full:"/gallery/2025-vinyl.jpg",tags:["music"]},{src:"/gallery/2025_bro-has-kickassia.jpg",alt:"BRO-HAS-KICKASSIA",year:"2025",full:"/gallery/2025_bro-has-kickassia.jpg",tags:["music"]},{src:"/gallery/2024-tape-mockup.jpg",alt:"SCRAPPED-TAPE-MOCKUP",year:"2024",full:"/gallery/2024-tape-mockup.jpg",tags:["graphics"]},{src:"/gallery/2024-be.jpg",alt:"BE",year:"2024",full:"/gallery/2024-be.jpg",tags:["music"]},{src:"/gallery/2024-HBO.jpg",alt:"HBO",year:"2024",full:"/gallery/2024-HBO.jpg",tags:["music"]},{src:"/gallery/2024-firestar.jpg",alt:"FIRESTAR",year:"2024",full:"/gallery/2024-firestar.jpg",tags:["photos"]},{src:"/gallery/2024-threebeersdeep.jpg",alt:"THREEBEERSDEEP",year:"2024",full:"/gallery/2024-threebeersdeep.jpg",tags:["photos"]},{src:"/gallery/2024-sagsog.jpg",alt:"SAG-SOG",year:"2024",full:"/gallery/2024-sagsog.jpg",tags:["photos"]},{src:"/gallery/2024-babygreen.jpg",alt:"BABYGREENONEARTH",year:"2024",full:"/gallery/2024-babygreen.jpg",tags:["photos"]},{src:"/gallery/2023-mach-stoney.jpg",alt:"MACH-STONEY",year:"2023",full:"/gallery/2023-mach-stoney.jpg",tags:["graphics"]},{src:"/gallery/2023-orpheus-thumb.jpg",alt:"ORPHEUS",year:"2023",full:"/gallery/2023-orpheus.jpg",tags:["music"]},{src:"/gallery/2023-setup.jpg",alt:"SETUP",year:"2023",full:"/gallery/2023-setup.jpg",tags:["photos"]},{src:"/gallery/2022-waffle.jpg",alt:"WH",year:"2022",full:"/gallery/2022-waffle.jpg",tags:["photos"]},{src:"/gallery/2018-tux.jpg",alt:"TUX",year:"2018",full:"/gallery/2018-tux.jpg",tags:["photos"]}],f2=["all","graphics","photos","music"],d2=()=>{const[l,r]=v.useState("all"),u=c=>{const d=document.createElement("div");d.style.background="#000",d.style.display="flex",d.style.alignItems="center",d.style.justifyContent="center",d.style.height="100%";const p=new window.Image;p.src=c.full,p.alt=c.alt,p.style.width="100%",p.style.maxWidth="600px",p.style.height="auto",p.style.display="flex",p.style.margin="auto",p.onload=()=>{const y=Math.min(p.naturalWidth,window.innerWidth*.33),b=Math.min(p.naturalHeight,window.innerHeight*.33),m=Math.max(220,y),x=Math.max(120,b);d.innerHTML="",d.appendChild(p),new fa({title:`~/X/GALLERY/IMAGES/${c.year}/${c.alt}`,icon:Dt.desktop_gallery,background:"#000",width:`${m}px`,height:`${x}px`,x:"center",y:"center",mount:d,setBackground:()=>{},onClose:()=>d.remove(),noResize:window.innerWidth<600,noMax:window.innerWidth<600,noMin:window.innerWidth<600,noFull:window.innerWidth<600})}},s=l==="all"?Dm:Dm.filter(c=>c.tags&&c.tags.includes(l));return S.jsxs(S.Fragment,{children:[S.jsxs("div",{className:"gallery-header",style:{color:"black",fontSize:40,margin:4},children:[S.jsx("p",{className:"gallery-header-title",children:"THE GALLERY"}),S.jsx("p",{className:"gallery-header-subtitle",style:{fontSize:14,lineHeight:1},children:"Here's a lil archive of images I have made, photos of my media collection, various side-quests and more. Double click an image to view it in full size."}),S.jsx("div",{style:{display:"flex",gap:12,justifyContent:"center",marginBottom:12,marginTop:12},children:f2.map(c=>S.jsx("button",{className:"default",onClick:()=>r(c),style:{boxShadow:"0 2px 4px rgba(0,0,0,0.44)",fontFamily:"Pixeloid Sans",padding:"6px 16px",borderRadius:3,border:l===c?"4px ridge #222":"2px ridge #666565",background:l===c?"#222":"#f5f5f5",color:l===c?"#f5f5f5":"#222",fontWeight:l===c?"bold":"normal",cursor:"pointer",outline:"none"},children:c.toUpperCase()},c))}),S.jsx("div",{className:"line"})]}),S.jsxs("div",{className:"gallery-grid",style:{width:"98%",display:"flex",flexWrap:"wrap",gap:16,justifyContent:"center",marginBottom:16},children:[s.map((c,d)=>S.jsx("div",{className:"gallery-image-frame",style:{aspectRatio:"auto",background:"#111",border:"2px ridge #222",margin:"auto",padding:4,display:"flex",objectFit:"cover",alignItems:"center",justifyContent:"center",maxWidth:200,maxHeight:200,cursor:"pointer"},onDoubleClick:()=>u(c),title:c.alt,children:S.jsx("img",{src:c.src,alt:c.alt,loading:"lazy",style:{background:"black",aspectRatio:"auto",maxWidth:"200px",maxHeight:"200px",width:"auto",height:"auto",display:"inline"}})},d)),S.jsx("br",{}),S.jsx("span",{className:"gallery-bottom-tag",style:{fontFamily:"Sans Nouveaux",marginTop:18},children:"- one shot. cut. print. perfect. -"})]})]})},h2=()=>S.jsxs("div",{style:{color:"black",fontSize:20,overflow:"hidden",marginLeft:12,marginRight:12,marginTop:12,paddingBottom:4,fontFamily:"Sans Nouveaux",textRendering:"optimizeLegibility"},children:[S.jsx("span",{style:{fontSize:14,marginTop:16,marginBottom:8},children:"Email:"}),S.jsx("a",{href:"mailto:spam@3cks.net",target:"_blank",children:S.jsx("div",{className:"email",style:{display:"flex",border:"2px solid #222",fontWeight:"bold",textAlign:"center",alignContent:"center",paddingTop:12,marginBottom:16,paddingBottom:16,marginTop:8,lineHeight:1},children:S.jsxs("span",{style:{margin:"0 auto"},children:[S.jsx("img",{src:Dt.desktop_contact,style:{width:24,height:24,marginRight:4}})," - spam@3cks.net"]})})}),S.jsx("span",{style:{fontSize:14,marginTop:16},children:"Socials:"}),S.jsxs("div",{style:{marginBottom:32,alignContent:"center",textAlign:"center",display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gridTemplateRows:"repeat(2, auto)",listStyleType:"disc",margin:"8px auto",lineHeight:1,fontSize:14,border:"2px solid #222"},children:[S.jsx("span",{className:"icon",children:S.jsx("a",{href:"https://youtube.com/ecksposting",target:"_blank",children:S.jsx("img",{src:Dt.youtube,alt:"YouTube",style:{width:48,height:48}})})}),S.jsx("span",{className:"icon",children:S.jsx("a",{href:"https://instagram.com/ecksposting",target:"_blank",children:S.jsx("img",{src:Dt.instagram,alt:"Instagram",style:{width:48,height:48}})})}),S.jsx("span",{className:"icon",children:S.jsx("a",{href:"https://twitter.com/ecksposting",target:"_blank",children:S.jsx("img",{src:Dt.xitter,alt:"Xitter",style:{width:48,height:48}})})}),S.jsx("span",{className:"icon",children:S.jsx("a",{href:"https://steamcommunity.com/id/ecksposting",target:"_blank",children:S.jsx("img",{src:Dt.steam,alt:"Steam",style:{width:48,height:48}})})}),S.jsx("span",{className:"icon",children:S.jsx("a",{href:"https://eckslol.newgrounds.com",target:"_blank",children:S.jsx("img",{src:Dt.newgrounds,alt:"Newgrounds",style:{width:48,height:48}})})})]}),S.jsx("span",{className:"bottom-tag",style:{marginTop:32},children:"- your move. -"})]}),p2=()=>S.jsx(S.Fragment,{children:S.jsxs("div",{style:{color:"black",fontSize:24,overflow:"hidden",margin:12,paddingBottom:4,fontFamily:"Sans Nouveaux"},children:[S.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:16},children:[S.jsx("img",{src:Dt.moneyspin,alt:"Donate",style:{width:96,height:128,objectFit:"contain",marginTop:8}}),S.jsxs("div",{style:{flex:1,lineHeight:1,fontSize:12,marginBottom:8},children:[S.jsx("span",{children:"Paypal:"}),S.jsx("a",{href:"https://paypal.me/ecksposting",target:"_blank",children:S.jsx("div",{className:"paypal-button",style:{display:"flex",border:"3px ridge #222",fontWeight:"bold",textAlign:"center",alignItems:"center",padding:8,marginBottom:8,marginTop:8,lineHeight:1,fontSize:12},children:S.jsx("span",{style:{margin:"0 auto"},children:"/ecksposting"})})}),S.jsx("span",{children:"Cashapp:"}),S.jsx("a",{href:"https://cash.app/$eckslol",target:"_blank",children:S.jsx("div",{className:"cashapp-button",style:{display:"flex",border:"3px ridge #222",fontWeight:"bold",textAlign:"center",alignItems:"center",padding:8,marginBottom:24,marginTop:8,lineHeight:1,fontSize:12},children:S.jsx("span",{style:{margin:"0 auto"},children:"$eckslol"})})})]})]}),S.jsx("span",{className:"bottom-tag",children:"- preciate it boss. -"})]})}),m2=()=>S.jsx(S.Fragment,{children:S.jsxs("div",{className:"notepad",style:{fontSize:8,fontFamily:"Sans Nouveaux",overflow:"hidden",paddingLeft:16,paddingRight:16,textRendering:"optimizeLegibility",lineHeight:1.4},children:[S.jsxs("p",{children:[S.jsx("span",{className:"notepad-header",children:"ADMIN"}),S.jsx("br",{}),S.jsx("span",{children:"Like most of what you see on here, this website was designed and built by the homeboy who's running it! He couldn't do it, however, without the help of:"})]}),S.jsxs("p",{className:"links",style:{fontSize:8,lineHeight:1.5},children:[S.jsx("span",{className:"notepad-header",children:"CODE"}),S.jsxs("span",{children:[S.jsx("br",{}),"- ",S.jsx("a",{href:"https://nextapps-de.github.io/winbox/",target:"_blank",children:"Winbox.js"})," | Window manager",S.jsx("br",{}),"- ",S.jsx("a",{href:"https://github.com/react95-io/React95",target:"_blank",children:"React95"})," | UI component library",S.jsx("br",{}),"- ",S.jsx("a",{href:"https://jdan.github.io/98.css/",target:"_blank",children:"98.css"})," | CSS for additional UI",S.jsx("br",{}),"- ",S.jsx("a",{href:"https://animate.style/",target:"_blank",children:"animate.css"})," | CSS animations",S.jsx("br",{}),"- ",S.jsx("a",{href:"https://oudkee.neocities.org/tutorials/tutcrt",target:"_blank",children:"@oudkee"})," | CRT Effect"]})]}),S.jsx("span",{className:"notepad-header",children:"ART"}),S.jsx("br",{}),S.jsxs("span",{children:["- Loading screen art by ",S.jsx("a",{href:"https://x.com/luvbappy",target:"_blank",children:"@luvbappy"}),S.jsx("br",{}),'- "About Me" illustration by ',S.jsx("a",{href:"https://www.instagram.com/coledawg2001/",target:"_blank",children:"@ColeDawg"})]}),S.jsxs("p",{children:[S.jsx("span",{className:"notepad-header",children:"SPECIAL THANKS"}),S.jsx("br",{}),"- Friends of the site:",S.jsxs("span",{children:[S.jsx("br",{}),S.jsx("a",{href:"https://lucke.neocities.org",target:"_blank",children:"lucke.neocities.org"}),", ",S.jsx("a",{href:"https://4nx4e.lol",target:"_blank",children:"4nx4e.lol"})]}),S.jsx("br",{}),S.jsx("span",{children:"- YOU! (Yes, you!) for being here!"}),S.jsx("br",{})]})]})}),g2="/assets/ms_sans_serif-Du8rjN1q.woff2",b2="/assets/ms_sans_serif_bold-D5dpRRHG.woff2";let Xg=[Mn.background1,Mn.background2,Mn.background3,Mn.background4,Mn.background5,Mn.background6],y2=Math.floor(Xg.length*Math.random()),Vg=Xg[y2];console.log(Vg);H1`
  ${U1}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${g2}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${b2}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;const v2=()=>{const l=v.useRef(0),r=()=>{const B=Date.now();return B-l.current>=400?(l.current=B,!0):!1},[u,s]=v.useState(!0),[c,d]=v.useState(!1),[p,y]=v.useState(!1),b=v.useRef(null),m=v.useRef(null);v.useEffect(()=>{if(!p)return;function B(ct){m.current&&!m.current.contains(ct.target)&&b.current&&!b.current.contains(ct.target)&&y(!1)}return document.addEventListener("mousedown",B),()=>{document.removeEventListener("mousedown",B)}},[p]);const[x,E]=v.useState(new Date);v.useEffect(()=>{const B=setInterval(()=>E(new Date),1e3);return()=>clearInterval(B)},[]);const O=x.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"}),L=x.toLocaleDateString([],{month:"2-digit",day:"2-digit",year:"numeric"}),$=B=>window.innerWidth<768?"center":{about:"10%",gallery:"50%",videos:"25%",contact:"30%",donate:"50%",credits:"50%"}[B],N=hl().pathname;v.useEffect(()=>{s(!0),d(!1);const B=setTimeout(()=>{s(!1);const ct=N.match(/^\/watch\/([^/]+)$/i);if(ct){const rt=ct[1].toLowerCase(),Ot=Oc.find(Ct=>Ct.window_title.replace(/[^a-z0-9]/gi,"").toLowerCase()===rt.replace(/[^a-z0-9]/gi,""));if(Ot){zc(Ot);return}}switch(N){case"/donate":j();break;case"/videos":F();break;case"/gallery":nt();break;case"/blog":d(!0);break;default:d(!0);break}},6116);return()=>clearTimeout(B)},[N]),v.useEffect(()=>{if(c){const B=document.createElement("div");new fa({title:"~X/WHATS_NEW/",icon:Dt.info,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",width:"375px",height:"400px",x:"center",y:"center",url:"https://eckis-chronicle.neocities.org",setBackground:ct=>console.log(`Background set to ${ct}`),onClose:()=>{console.log("Window closed"),B.remove()}}),d(!1)}},[c]),v.useEffect(()=>{document.body.style.backgroundImage=`url(${Vg})`,document.body.style.backgroundSize="cover",document.body.style.backgroundRepeat="no-repeat",document.body.style.backgroundPosition="center"},[]);const U=()=>{if(!r())return;const B=document.createElement("div");B.className="terminal-winbox-body",new fa({title:"~X/CREDITS.TXT",icon:Dt.notepad,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:"255px",maxWidth:"20%",height:"360px",maxHeight:"25%",x:$("credits"),y:"45%",mount:B,setBackground:rt=>console.log(`Background set to ${rt}`),onClose:()=>{console.log("Window closed"),We.createRoot(B).unmount(),B.remove()}}),We.createRoot(B).render(S.jsx(m2,{}))},j=()=>{if(!r())return;const B=document.createElement("div");new fa({title:"~X/DONATE/",icon:Dt.desktop_donate,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:Math.min(325,window.innerWidth*.8)+"px",maxWidth:"40%",height:Math.min(230,window.innerHeight*.7)+"px",maxHeight:"35%",x:$("donate"),y:"45%",mount:B,setBackground:rt=>console.log(`Background set to ${rt}`),onClose:()=>{console.log("Window closed"),We.createRoot(B).unmount(),B.remove()}}),We.createRoot(B).render(S.jsx(p2,{}))},Y=()=>{if(!r())return;const B=document.createElement("div");new fa({title:"~X/ABOUT/",className:"no-resize",icon:Dt.desktop_about,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:Math.min(440,window.innerWidth*.8)+"px",maxWidth:"440px",height:Math.min(575,window.innerHeight*.7)+"px",maxHeight:"550px",x:$("about"),y:"10%",mount:B,setBackground:rt=>console.log(`Background set to ${rt}`),noResize:!0,onClose:()=>{console.log("Window closed"),We.createRoot(B).unmount(),B.remove()}}),We.createRoot(B).render(S.jsx(i2,{}))},F=()=>{if(!r())return;const B=document.createElement("div");new fa({title:"~X/VIDEOS/",icon:Dt.desktop_videos,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:Math.min(650,window.innerWidth*.8)+"px",maxWidth:"800px",height:Math.min(475,window.innerHeight*.7)+"px",maxHeight:"550px",x:$("videos"),y:"8%",mount:B,setBackground:rt=>console.log(`Background set to ${rt}`),onClose:()=>{console.log("Window closed"),We.createRoot(B).unmount(),B.remove()}}),We.createRoot(B).render(S.jsx(c2,{}))},I=()=>{if(!r())return;const B=document.createElement("div");new fa({title:"~X/HIT_MY_LINE/",icon:Dt.desktop_contact,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:Math.min(325,window.innerWidth*.8)+"px",maxWidth:"600px",height:Math.min(280,window.innerHeight*.7)+"px",maxHeight:"400px",x:$("contact"),y:"30%",mount:B,setBackground:rt=>console.log(`Background set to ${rt}`),onClose:()=>{console.log("Window closed"),We.createRoot(B).unmount(),B.remove()}}),We.createRoot(B).render(S.jsx(h2,{}))},nt=()=>{if(!r())return;const B=document.createElement("div");new fa({title:"~X/GALLERY/",icon:Dt.desktop_gallery,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:Math.min(490,window.innerWidth*.8)+"px",maxWidth:"800px",height:Math.min(580,window.innerHeight*.7)+"px",maxHeight:"650px",x:$("gallery"),y:"30%",mount:B,setBackground:rt=>console.log(`Background set to ${rt}`),onClose:()=>{console.log("Window closed"),We.createRoot(B).unmount(),B.remove()}}),We.createRoot(B).render(S.jsx(d2,{}))};return v.useEffect(()=>{Object.values(Dt).forEach(B=>{const ct=new window.Image;ct.src=B})},[]),S.jsxs(S.Fragment,{children:[u&&S.jsx(Rw,{}),S.jsx("div",{className:"App",children:S.jsxs("div",{id:"desktop",children:[S.jsx("label",{htmlFor:"about-me",className:"desktop-item",onClick:Y,children:S.jsxs("a",{href:"#",onClick:B=>B.preventDefault(),children:[S.jsx("img",{src:Dt.desktop_about_gif,className:"logo",alt:"ABOUT"}),S.jsx("div",{className:"desktop-text",children:"ABOUT"})]})}),S.jsx("div",{id:"about-me-content",style:{display:"none"}}),S.jsx("label",{htmlFor:"videos",className:"desktop-item",onClick:F,children:S.jsxs("a",{href:"#",onClick:B=>B.preventDefault(),children:[S.jsx("img",{src:Dt.desktop_videos_gif,className:"logo",alt:"VIDEOS"}),S.jsx("div",{className:"desktop-text",children:"VIDEOS"})]})}),S.jsx("div",{id:"videos-content",style:{display:"none"}}),S.jsx("label",{htmlFor:"gallery",className:"desktop-item",onClick:nt,children:S.jsxs("a",{href:"#",onClick:B=>B.preventDefault(),children:[S.jsx("img",{src:Dt.desktop_gallery_gif,className:"logo",alt:"GALLERY"}),S.jsx("div",{className:"desktop-text",children:"GALLERY"})]})}),S.jsx("div",{id:"gallery-content",style:{display:"none"}}),S.jsx("label",{htmlFor:"contact",className:"desktop-item",onClick:I,children:S.jsxs("a",{href:"#",onClick:B=>B.preventDefault(),children:[S.jsx("img",{src:Dt.desktop_contact_gif,className:"logo",alt:"CONTACT"}),S.jsx("div",{className:"desktop-text",children:"CONTACT"})]})}),S.jsx("div",{id:"contact-content",style:{display:"none"}}),S.jsx("label",{htmlFor:"donate",className:"desktop-item",onClick:j,children:S.jsxs("a",{href:"#",onClick:B=>B.preventDefault(),children:[S.jsx("img",{src:Dt.desktop_donate_gif,className:"logo",alt:"GALLERY"}),S.jsx("div",{className:"desktop-text",children:"DONATE"})]})}),S.jsx("div",{id:"donate-content",style:{display:"none"}})]})}),S.jsx("div",{className:"taskbar",children:S.jsx(_1,{theme:Ew,children:S.jsx(bg,{fixed:!0,style:{top:"auto",bottom:0,position:"fixed",zIndex:1},children:S.jsxs(ko,{noPadding:!0,style:{justifyContent:"space-between"},children:[S.jsxs("div",{style:{position:"relative",display:"flex",width:"100%",alignItems:"center",padding:"0px"},children:[S.jsxs(Zi,{ref:b,onClick:()=>y(!p),active:p?!0:void 0,style:{fontWeight:"bold",marginRight:6,marginLeft:6},children:[S.jsx("img",{src:xw,alt:"react95 logo",style:{height:"20px",marginRight:4}}),"START"]}),S.jsx(Hg,{size:35,style:{marginRight:10}}),S.jsxs("div",{style:{position:"relative",display:"inline-block",marginRight:14},onClick:()=>window.open("https://youtube.com/ecksposting","_blank","noopener,noreferrer"),children:[S.jsx("img",{src:Dt.youtube,alt:"YouTube",className:"taskbar-item",style:{height:"25px"}}),S.jsx("div",{className:"taskbar-tooltip",style:{display:"none",position:"absolute",bottom:"120%",left:"50%",transform:"translateX(-45%)",background:"#222",color:"#fff",padding:"6px 8px",border:"2px solid white",fontSize:14,whiteSpace:"nowrap",zIndex:100,boxShadow:"0 2px 8px #0006",pointerEvents:"none"},children:"YOUTUBE"})]}),S.jsxs("div",{style:{position:"relative",display:"inline-block",marginRight:14},onClick:()=>window.open("https://youtube.com/ecksposting","_blank","noopener,noreferrer"),children:[S.jsx("img",{src:Dt.instagram,alt:"react95 logo",className:"taskbar-item",style:{height:"25px"}}),S.jsx("div",{className:"taskbar-tooltip",style:{display:"none",position:"absolute",bottom:"120%",left:"50%",transform:"translateX(-45%)",background:"#222",color:"#fff",padding:"6px 8px",border:"2px solid white",fontSize:14,whiteSpace:"nowrap",zIndex:100,boxShadow:"0 2px 8px #0006",pointerEvents:"none"},children:"INSTA"})]}),S.jsxs("div",{style:{position:"relative",display:"inline-block",marginRight:14},onClick:()=>window.open("https://youtube.com/ecksposting","_blank","noopener,noreferrer"),children:[S.jsx("img",{src:Dt.xitter,alt:"react95 logo",className:"taskbar-item",style:{height:"25px"}}),S.jsx("div",{className:"taskbar-tooltip",style:{display:"none",position:"absolute",bottom:"120%",left:"50%",transform:"translateX(-45%)",background:"#222",color:"#fff",padding:"6px 8px",border:"2px solid white",fontSize:14,whiteSpace:"nowrap",zIndex:100,boxShadow:"0 2px 8px #0006",pointerEvents:"none"},children:"XITTER"})]}),S.jsxs("div",{style:{position:"relative",display:"inline-block",marginRight:14},onClick:()=>window.open("https://eckslol.newgrounds.com/","_blank","noopener,noreferrer"),children:[S.jsx("img",{src:Dt.newgrounds,alt:"react95 logo",className:"taskbar-item",style:{height:"25px"}}),S.jsx("div",{className:"taskbar-tooltip",style:{display:"none",position:"absolute",bottom:"120%",left:"50%",transform:"translateX(-45%)",background:"#222",color:"#fff",padding:"6px 8px",border:"2px solid white",fontSize:14,whiteSpace:"nowrap",zIndex:100,boxShadow:"0 2px 8px #0006",pointerEvents:"none"},children:"NEWGROUNDS"})]}),p&&S.jsxs(yg,{ref:m,style:{position:"absolute",left:"-3px",bottom:"80%"},onClick:()=>y(!1),children:[S.jsxs(sl,{className:"taskbar-tab",onClick:F,style:{cursor:"pointer",fontFamily:"Pixeloid Sans"},children:[S.jsx("span",{role:"img",children:S.jsx("img",{src:Dt.desktop_videos,alt:"VIDEOS",style:{width:"20px",height:"20px",margin:"0 15px -4px 0"}})}),"VIDEOS"]}),S.jsxs(sl,{className:"taskbar-tab",onClick:nt,style:{cursor:"pointer",fontFamily:"Pixeloid Sans"},children:[S.jsx("span",{role:"img",children:S.jsx("img",{src:Dt.desktop_gallery,alt:"GALLERY",style:{width:"20px",height:"20px",margin:"0 15px -4px 0"}})}),"GALLERY"]}),S.jsxs(sl,{className:"taskbar-tab",onClick:Y,style:{cursor:"pointer",fontFamily:"Pixeloid Sans"},children:[S.jsx("span",{role:"img",children:S.jsx("img",{src:Dt.desktop_about,alt:"GALLERY",style:{width:"20px",height:"20px",margin:"0 15px -4px 0"}})}),"ABOUT"]}),S.jsxs(sl,{className:"taskbar-tab",onClick:c?()=>{}:()=>d(!0),style:{cursor:"pointer",fontFamily:"Pixeloid Sans"},children:[S.jsx("span",{role:"img",children:S.jsx("img",{src:Dt.blog,alt:"GALLERY",style:{width:"20px",height:"20px",margin:"0 15px -4px 0"}})}),"BLOG"]}),S.jsx(Do,{}),S.jsxs(sl,{className:"taskbar-tab",onClick:()=>window.open("https://tornada.net/","_blank","noopener,noreferrer"),style:{cursor:"pointer",fontFamily:"Pixeloid Sans"},children:[S.jsx("span",{role:"img",children:S.jsx("img",{src:Dt.tornada,alt:"TORNADA",style:{width:"20px",height:"20px",margin:"0 15px -4px 0"}})}),"TORNADA"]}),S.jsx(Do,{}),S.jsxs(sl,{className:"taskbar-tab",onClick:U,style:{cursor:"pointer",fontFamily:"Pixeloid Sans"},children:[S.jsx("span",{role:"img",children:S.jsx("img",{src:Dt.notepad,alt:"CREDITS",style:{width:"20px",height:"20px",margin:"0 10px -3px 0"}})}),"CREDITS"]}),S.jsxs(sl,{disabled:!0,style:{fontFamily:"Pixeloid Sans"},children:[S.jsx("span",{role:"img",children:S.jsx("img",{src:Aw,style:{width:"20px",height:"20px",margin:"0 10px -3px 0"}})}),"SHUTDOWN"]})]})]}),S.jsxs(Bg,{variant:"well",shadow:!0,style:{right:"auto",padding:"0.1rem",width:"140px",height:"40px",textAlign:"center",fontSize:"1rem",fontWeight:"bold",color:"#fff",backgroundColor:"#000",border:"black inset 2px",borderRadius:"0.1rem",marginTop:4,marginBottom:4,marginRight:6,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[S.jsx("div",{style:{fontSize:"0.9em"},children:O}),S.jsx("div",{style:{fontSize:"0.9em",marginTop:6},children:L})]})]})})})})]})};Cm.createRoot(document.getElementById("root")).render(S.jsx(v.StrictMode,{children:S.jsx(Tv,{children:S.jsx(v2,{})})}));
