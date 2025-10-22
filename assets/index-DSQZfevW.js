(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function u(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(c){if(c.ep)return;c.ep=!0;const d=u(c);fetch(c.href,d)}})();function zc(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var ac={exports:{}},Ui={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function iy(){if(Lp)return Ui;Lp=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function u(s,c,d){var p=null;if(d!==void 0&&(p=""+d),c.key!==void 0&&(p=""+c.key),"key"in c){d={};for(var y in c)y!=="key"&&(d[y]=c[y])}else d=c;return c=d.ref,{$$typeof:l,type:s,key:p,ref:c!==void 0?c:null,props:d}}return Ui.Fragment=r,Ui.jsx=u,Ui.jsxs=u,Ui}var Gp;function ry(){return Gp||(Gp=1,ac.exports=iy()),ac.exports}var A=ry(),lc={exports:{}},At={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function oy(){if(Yp)return At;Yp=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),p=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),E=Symbol.iterator;function O(w){return w===null||typeof w!="object"?null:(w=E&&w[E]||w["@@iterator"],typeof w=="function"?w:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,J={};function B(w,q,at){this.props=w,this.context=q,this.refs=J,this.updater=at||$}B.prototype.isReactComponent={},B.prototype.setState=function(w,q){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,q,"setState")},B.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function H(){}H.prototype=B.prototype;function N(w,q,at){this.props=w,this.context=q,this.refs=J,this.updater=at||$}var G=N.prototype=new H;G.constructor=N,L(G,B.prototype),G.isPureReactComponent=!0;var F=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},nt=Object.prototype.hasOwnProperty;function it(w,q,at,U,W,rt){return at=rt.ref,{$$typeof:l,type:w,key:q,ref:at!==void 0?at:null,props:rt}}function bt(w,q){return it(w.type,q,void 0,void 0,void 0,w.props)}function dt(w){return typeof w=="object"&&w!==null&&w.$$typeof===l}function Ct(w){var q={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(at){return q[at]})}var Ot=/\/+/g;function V(w,q){return typeof w=="object"&&w!==null&&w.key!=null?Ct(""+w.key):q.toString(36)}function m(){}function j(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(m,m):(w.status="pending",w.then(function(q){w.status==="pending"&&(w.status="fulfilled",w.value=q)},function(q){w.status==="pending"&&(w.status="rejected",w.reason=q)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function tt(w,q,at,U,W){var rt=typeof w;(rt==="undefined"||rt==="boolean")&&(w=null);var lt=!1;if(w===null)lt=!0;else switch(rt){case"bigint":case"string":case"number":lt=!0;break;case"object":switch(w.$$typeof){case l:case r:lt=!0;break;case x:return lt=w._init,tt(lt(w._payload),q,at,U,W)}}if(lt)return W=W(w),lt=U===""?"."+V(w,0):U,F(W)?(at="",lt!=null&&(at=lt.replace(Ot,"$&/")+"/"),tt(W,q,at,"",function(K){return K})):W!=null&&(dt(W)&&(W=bt(W,at+(W.key==null||w&&w.key===W.key?"":(""+W.key).replace(Ot,"$&/")+"/")+lt)),q.push(W)),1;lt=0;var ct=U===""?".":U+":";if(F(w))for(var ht=0;ht<w.length;ht++)U=w[ht],rt=ct+V(U,ht),lt+=tt(U,q,at,rt,W);else if(ht=O(w),typeof ht=="function")for(w=ht.call(w),ht=0;!(U=w.next()).done;)U=U.value,rt=ct+V(U,ht++),lt+=tt(U,q,at,rt,W);else if(rt==="object"){if(typeof w.then=="function")return tt(j(w),q,at,U,W);throw q=String(w),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return lt}function k(w,q,at){if(w==null)return w;var U=[],W=0;return tt(w,U,"","",function(rt){return q.call(at,rt,W++)}),U}function Y(w){if(w._status===-1){var q=w._result;q=q(),q.then(function(at){(w._status===0||w._status===-1)&&(w._status=1,w._result=at)},function(at){(w._status===0||w._status===-1)&&(w._status=2,w._result=at)}),w._status===-1&&(w._status=0,w._result=q)}if(w._status===1)return w._result.default;throw w._result}var P=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function ot(){}return At.Children={map:k,forEach:function(w,q,at){k(w,function(){q.apply(this,arguments)},at)},count:function(w){var q=0;return k(w,function(){q++}),q},toArray:function(w){return k(w,function(q){return q})||[]},only:function(w){if(!dt(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},At.Component=B,At.Fragment=u,At.Profiler=c,At.PureComponent=N,At.StrictMode=s,At.Suspense=b,At.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,At.__COMPILER_RUNTIME={__proto__:null,c:function(w){return I.H.useMemoCache(w)}},At.cache=function(w){return function(){return w.apply(null,arguments)}},At.cloneElement=function(w,q,at){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var U=L({},w.props),W=w.key,rt=void 0;if(q!=null)for(lt in q.ref!==void 0&&(rt=void 0),q.key!==void 0&&(W=""+q.key),q)!nt.call(q,lt)||lt==="key"||lt==="__self"||lt==="__source"||lt==="ref"&&q.ref===void 0||(U[lt]=q[lt]);var lt=arguments.length-2;if(lt===1)U.children=at;else if(1<lt){for(var ct=Array(lt),ht=0;ht<lt;ht++)ct[ht]=arguments[ht+2];U.children=ct}return it(w.type,W,void 0,void 0,rt,U)},At.createContext=function(w){return w={$$typeof:p,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:d,_context:w},w},At.createElement=function(w,q,at){var U,W={},rt=null;if(q!=null)for(U in q.key!==void 0&&(rt=""+q.key),q)nt.call(q,U)&&U!=="key"&&U!=="__self"&&U!=="__source"&&(W[U]=q[U]);var lt=arguments.length-2;if(lt===1)W.children=at;else if(1<lt){for(var ct=Array(lt),ht=0;ht<lt;ht++)ct[ht]=arguments[ht+2];W.children=ct}if(w&&w.defaultProps)for(U in lt=w.defaultProps,lt)W[U]===void 0&&(W[U]=lt[U]);return it(w,rt,void 0,void 0,null,W)},At.createRef=function(){return{current:null}},At.forwardRef=function(w){return{$$typeof:y,render:w}},At.isValidElement=dt,At.lazy=function(w){return{$$typeof:x,_payload:{_status:-1,_result:w},_init:Y}},At.memo=function(w,q){return{$$typeof:g,type:w,compare:q===void 0?null:q}},At.startTransition=function(w){var q=I.T,at={};I.T=at;try{var U=w(),W=I.S;W!==null&&W(at,U),typeof U=="object"&&U!==null&&typeof U.then=="function"&&U.then(ot,P)}catch(rt){P(rt)}finally{I.T=q}},At.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},At.use=function(w){return I.H.use(w)},At.useActionState=function(w,q,at){return I.H.useActionState(w,q,at)},At.useCallback=function(w,q){return I.H.useCallback(w,q)},At.useContext=function(w){return I.H.useContext(w)},At.useDebugValue=function(){},At.useDeferredValue=function(w,q){return I.H.useDeferredValue(w,q)},At.useEffect=function(w,q,at){var U=I.H;if(typeof at=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return U.useEffect(w,q)},At.useId=function(){return I.H.useId()},At.useImperativeHandle=function(w,q,at){return I.H.useImperativeHandle(w,q,at)},At.useInsertionEffect=function(w,q){return I.H.useInsertionEffect(w,q)},At.useLayoutEffect=function(w,q){return I.H.useLayoutEffect(w,q)},At.useMemo=function(w,q){return I.H.useMemo(w,q)},At.useOptimistic=function(w,q){return I.H.useOptimistic(w,q)},At.useReducer=function(w,q,at){return I.H.useReducer(w,q,at)},At.useRef=function(w){return I.H.useRef(w)},At.useState=function(w){return I.H.useState(w)},At.useSyncExternalStore=function(w,q,at){return I.H.useSyncExternalStore(w,q,at)},At.useTransition=function(){return I.H.useTransition()},At.version="19.1.0",At}var qp;function Nc(){return qp||(qp=1,lc.exports=oy()),lc.exports}var v=Nc();const _=zc(v);var nc={exports:{}},$i={},ic={exports:{}},rc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function uy(){return Qp||(Qp=1,function(l){function r(k,Y){var P=k.length;k.push(Y);t:for(;0<P;){var ot=P-1>>>1,w=k[ot];if(0<c(w,Y))k[ot]=Y,k[P]=w,P=ot;else break t}}function u(k){return k.length===0?null:k[0]}function s(k){if(k.length===0)return null;var Y=k[0],P=k.pop();if(P!==Y){k[0]=P;t:for(var ot=0,w=k.length,q=w>>>1;ot<q;){var at=2*(ot+1)-1,U=k[at],W=at+1,rt=k[W];if(0>c(U,P))W<w&&0>c(rt,U)?(k[ot]=rt,k[W]=P,ot=W):(k[ot]=U,k[at]=P,ot=at);else if(W<w&&0>c(rt,P))k[ot]=rt,k[W]=P,ot=W;else break t}}return Y}function c(k,Y){var P=k.sortIndex-Y.sortIndex;return P!==0?P:k.id-Y.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;l.unstable_now=function(){return d.now()}}else{var p=Date,y=p.now();l.unstable_now=function(){return p.now()-y}}var b=[],g=[],x=1,E=null,O=3,$=!1,L=!1,J=!1,B=!1,H=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function F(k){for(var Y=u(g);Y!==null;){if(Y.callback===null)s(g);else if(Y.startTime<=k)s(g),Y.sortIndex=Y.expirationTime,r(b,Y);else break;Y=u(g)}}function I(k){if(J=!1,F(k),!L)if(u(b)!==null)L=!0,nt||(nt=!0,V());else{var Y=u(g);Y!==null&&tt(I,Y.startTime-k)}}var nt=!1,it=-1,bt=5,dt=-1;function Ct(){return B?!0:!(l.unstable_now()-dt<bt)}function Ot(){if(B=!1,nt){var k=l.unstable_now();dt=k;var Y=!0;try{t:{L=!1,J&&(J=!1,N(it),it=-1),$=!0;var P=O;try{e:{for(F(k),E=u(b);E!==null&&!(E.expirationTime>k&&Ct());){var ot=E.callback;if(typeof ot=="function"){E.callback=null,O=E.priorityLevel;var w=ot(E.expirationTime<=k);if(k=l.unstable_now(),typeof w=="function"){E.callback=w,F(k),Y=!0;break e}E===u(b)&&s(b),F(k)}else s(b);E=u(b)}if(E!==null)Y=!0;else{var q=u(g);q!==null&&tt(I,q.startTime-k),Y=!1}}break t}finally{E=null,O=P,$=!1}Y=void 0}}finally{Y?V():nt=!1}}}var V;if(typeof G=="function")V=function(){G(Ot)};else if(typeof MessageChannel<"u"){var m=new MessageChannel,j=m.port2;m.port1.onmessage=Ot,V=function(){j.postMessage(null)}}else V=function(){H(Ot,0)};function tt(k,Y){it=H(function(){k(l.unstable_now())},Y)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(k){k.callback=null},l.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):bt=0<k?Math.floor(1e3/k):5},l.unstable_getCurrentPriorityLevel=function(){return O},l.unstable_next=function(k){switch(O){case 1:case 2:case 3:var Y=3;break;default:Y=O}var P=O;O=Y;try{return k()}finally{O=P}},l.unstable_requestPaint=function(){B=!0},l.unstable_runWithPriority=function(k,Y){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var P=O;O=k;try{return Y()}finally{O=P}},l.unstable_scheduleCallback=function(k,Y,P){var ot=l.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?ot+P:ot):P=ot,k){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=P+w,k={id:x++,callback:Y,priorityLevel:k,startTime:P,expirationTime:w,sortIndex:-1},P>ot?(k.sortIndex=P,r(g,k),u(b)===null&&k===u(g)&&(J?(N(it),it=-1):J=!0,tt(I,P-ot))):(k.sortIndex=w,r(b,k),L||$||(L=!0,nt||(nt=!0,V()))),k},l.unstable_shouldYield=Ct,l.unstable_wrapCallback=function(k){var Y=O;return function(){var P=O;O=Y;try{return k.apply(this,arguments)}finally{O=P}}}}(rc)),rc}var Xp;function sy(){return Xp||(Xp=1,ic.exports=uy()),ic.exports}var oc={exports:{}},xe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp;function cy(){if(Vp)return xe;Vp=1;var l=Nc();function r(b){var g="https://react.dev/errors/"+b;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)g+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+b+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var s={d:{f:u,r:function(){throw Error(r(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(b,g,x){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:E==null?null:""+E,children:b,containerInfo:g,implementation:x}}var p=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(b,g){if(b==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return xe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,xe.createPortal=function(b,g){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(r(299));return d(b,g,null,x)},xe.flushSync=function(b){var g=p.T,x=s.p;try{if(p.T=null,s.p=2,b)return b()}finally{p.T=g,s.p=x,s.d.f()}},xe.preconnect=function(b,g){typeof b=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(b,g))},xe.prefetchDNS=function(b){typeof b=="string"&&s.d.D(b)},xe.preinit=function(b,g){if(typeof b=="string"&&g&&typeof g.as=="string"){var x=g.as,E=y(x,g.crossOrigin),O=typeof g.integrity=="string"?g.integrity:void 0,$=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;x==="style"?s.d.S(b,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:E,integrity:O,fetchPriority:$}):x==="script"&&s.d.X(b,{crossOrigin:E,integrity:O,fetchPriority:$,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},xe.preinitModule=function(b,g){if(typeof b=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var x=y(g.as,g.crossOrigin);s.d.M(b,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(b)},xe.preload=function(b,g){if(typeof b=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var x=g.as,E=y(x,g.crossOrigin);s.d.L(b,x,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},xe.preloadModule=function(b,g){if(typeof b=="string")if(g){var x=y(g.as,g.crossOrigin);s.d.m(b,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(b)},xe.requestFormReset=function(b){s.d.r(b)},xe.unstable_batchedUpdates=function(b,g){return b(g)},xe.useFormState=function(b,g,x){return p.H.useFormState(b,g,x)},xe.useFormStatus=function(){return p.H.useHostTransitionStatus()},xe.version="19.1.0",xe}var Zp;function km(){if(Zp)return oc.exports;Zp=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),oc.exports=cy(),oc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function fy(){if(Kp)return $i;Kp=1;var l=sy(),r=Nc(),u=km();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function d(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function p(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function y(t){if(d(t)!==t)throw Error(s(188))}function b(t){var e=t.alternate;if(!e){if(e=d(t),e===null)throw Error(s(188));return e!==t?null:t}for(var a=t,n=e;;){var i=a.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===a)return y(i),t;if(o===n)return y(i),e;o=o.sibling}throw Error(s(188))}if(a.return!==n.return)a=i,n=o;else{for(var f=!1,h=i.child;h;){if(h===a){f=!0,a=i,n=o;break}if(h===n){f=!0,n=i,a=o;break}h=h.sibling}if(!f){for(h=o.child;h;){if(h===a){f=!0,a=o,n=i;break}if(h===n){f=!0,n=o,a=i;break}h=h.sibling}if(!f)throw Error(s(189))}}if(a.alternate!==n)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:e}function g(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=g(t),e!==null)return e;t=t.sibling}return null}var x=Object.assign,E=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),$=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),G=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),it=Symbol.for("react.memo"),bt=Symbol.for("react.lazy"),dt=Symbol.for("react.activity"),Ct=Symbol.for("react.memo_cache_sentinel"),Ot=Symbol.iterator;function V(t){return t===null||typeof t!="object"?null:(t=Ot&&t[Ot]||t["@@iterator"],typeof t=="function"?t:null)}var m=Symbol.for("react.client.reference");function j(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===m?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case L:return"Fragment";case B:return"Profiler";case J:return"StrictMode";case I:return"Suspense";case nt:return"SuspenseList";case dt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case $:return"Portal";case G:return(t.displayName||"Context")+".Provider";case N:return(t._context.displayName||"Context")+".Consumer";case F:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case it:return e=t.displayName||null,e!==null?e:j(t.type)||"Memo";case bt:e=t._payload,t=t._init;try{return j(t(e))}catch{}}return null}var tt=Array.isArray,k=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},ot=[],w=-1;function q(t){return{current:t}}function at(t){0>w||(t.current=ot[w],ot[w]=null,w--)}function U(t,e){w++,ot[w]=t.current,t.current=e}var W=q(null),rt=q(null),lt=q(null),ct=q(null);function ht(t,e){switch(U(lt,e),U(rt,t),U(W,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?pp(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=pp(e),t=mp(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}at(W),U(W,t)}function K(){at(W),at(rt),at(lt)}function yt(t){t.memoizedState!==null&&U(ct,t);var e=W.current,a=mp(e,t.type);e!==a&&(U(rt,t),U(W,a))}function pt(t){rt.current===t&&(at(W),at(rt)),ct.current===t&&(at(ct),Ni._currentValue=P)}var xt=Object.prototype.hasOwnProperty,kt=l.unstable_scheduleCallback,_t=l.unstable_cancelCallback,qt=l.unstable_shouldYield,ae=l.unstable_requestPaint,Qt=l.unstable_now,be=l.unstable_getCurrentPriorityLevel,re=l.unstable_ImmediatePriority,$e=l.unstable_UserBlockingPriority,Ee=l.unstable_NormalPriority,ia=l.unstable_LowPriority,Le=l.unstable_IdlePriority,Ha=l.log,Ll=l.unstable_setDisableYieldValue,Ua=null,Ae=null;function ra(t){if(typeof Ha=="function"&&Ll(t),Ae&&typeof Ae.setStrictMode=="function")try{Ae.setStrictMode(Ua,t)}catch{}}var we=Math.clz32?Math.clz32:qo,Go=Math.log,Yo=Math.LN2;function qo(t){return t>>>=0,t===0?32:31-(Go(t)/Yo|0)|0}var Gl=256,Yl=4194304;function ga(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ql(t,e,a){var n=t.pendingLanes;if(n===0)return 0;var i=0,o=t.suspendedLanes,f=t.pingedLanes;t=t.warmLanes;var h=n&134217727;return h!==0?(n=h&~o,n!==0?i=ga(n):(f&=h,f!==0?i=ga(f):a||(a=h&~t,a!==0&&(i=ga(a))))):(h=n&~o,h!==0?i=ga(h):f!==0?i=ga(f):a||(a=n&~t,a!==0&&(i=ga(a)))),i===0?0:e!==0&&e!==i&&(e&o)===0&&(o=i&-i,a=e&-e,o>=a||o===32&&(a&4194048)!==0)?e:i}function pl(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Qo(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jc(){var t=Gl;return Gl<<=1,(Gl&4194048)===0&&(Gl=256),t}function Fc(){var t=Yl;return Yl<<=1,(Yl&62914560)===0&&(Yl=4194304),t}function Xo(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function qn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Zg(t,e,a,n,i,o){var f=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var h=t.entanglements,S=t.expirationTimes,C=t.hiddenUpdates;for(a=f&~a;0<a;){var Q=31-we(a),Z=1<<Q;h[Q]=0,S[Q]=-1;var M=C[Q];if(M!==null)for(C[Q]=null,Q=0;Q<M.length;Q++){var z=M[Q];z!==null&&(z.lane&=-536870913)}a&=~Z}n!==0&&Ic(t,n,0),o!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=o&~(f&~e))}function Ic(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var n=31-we(e);t.entangledLanes|=e,t.entanglements[n]=t.entanglements[n]|1073741824|a&4194090}function Pc(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var n=31-we(a),i=1<<n;i&e|t[n]&e&&(t[n]|=e),a&=~i}}function Vo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Zo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function tf(){var t=Y.p;return t!==0?t:(t=window.event,t===void 0?32:jp(t.type))}function Kg(t,e){var a=Y.p;try{return Y.p=t,e()}finally{Y.p=a}}var $a=Math.random().toString(36).slice(2),ye="__reactFiber$"+$a,Te="__reactProps$"+$a,Ql="__reactContainer$"+$a,Ko="__reactEvents$"+$a,Wg="__reactListeners$"+$a,Jg="__reactHandles$"+$a,ef="__reactResources$"+$a,Qn="__reactMarker$"+$a;function Wo(t){delete t[ye],delete t[Te],delete t[Ko],delete t[Wg],delete t[Jg]}function Xl(t){var e=t[ye];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Ql]||a[ye]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=vp(t);t!==null;){if(a=t[ye])return a;t=vp(t)}return e}t=a,a=t.parentNode}return null}function Vl(t){if(t=t[ye]||t[Ql]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Xn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function Zl(t){var e=t[ef];return e||(e=t[ef]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function oe(t){t[Qn]=!0}var af=new Set,lf={};function ml(t,e){Kl(t,e),Kl(t+"Capture",e)}function Kl(t,e){for(lf[t]=e,t=0;t<e.length;t++)af.add(e[t])}var Fg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nf={},rf={};function Ig(t){return xt.call(rf,t)?!0:xt.call(nf,t)?!1:Fg.test(t)?rf[t]=!0:(nf[t]=!0,!1)}function Fi(t,e,a){if(Ig(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function Ii(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function ba(t,e,a,n){if(n===null)t.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+n)}}var Jo,of;function Wl(t){if(Jo===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);Jo=e&&e[1]||"",of=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jo+t+of}var Fo=!1;function Io(t,e){if(!t||Fo)return"";Fo=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(z){var M=z}Reflect.construct(t,[],Z)}else{try{Z.call()}catch(z){M=z}t.call(Z.prototype)}}else{try{throw Error()}catch(z){M=z}(Z=t())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(z){if(z&&M&&typeof z.stack=="string")return[z.stack,M.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=n.DetermineComponentFrameRoot(),f=o[0],h=o[1];if(f&&h){var S=f.split(`
`),C=h.split(`
`);for(i=n=0;n<S.length&&!S[n].includes("DetermineComponentFrameRoot");)n++;for(;i<C.length&&!C[i].includes("DetermineComponentFrameRoot");)i++;if(n===S.length||i===C.length)for(n=S.length-1,i=C.length-1;1<=n&&0<=i&&S[n]!==C[i];)i--;for(;1<=n&&0<=i;n--,i--)if(S[n]!==C[i]){if(n!==1||i!==1)do if(n--,i--,0>i||S[n]!==C[i]){var Q=`
`+S[n].replace(" at new "," at ");return t.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",t.displayName)),Q}while(1<=n&&0<=i);break}}}finally{Fo=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Wl(a):""}function Pg(t){switch(t.tag){case 26:case 27:case 5:return Wl(t.type);case 16:return Wl("Lazy");case 13:return Wl("Suspense");case 19:return Wl("SuspenseList");case 0:case 15:return Io(t.type,!1);case 11:return Io(t.type.render,!1);case 1:return Io(t.type,!0);case 31:return Wl("Activity");default:return""}}function uf(t){try{var e="";do e+=Pg(t),t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Ge(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function sf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function t0(t){var e=sf(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,o=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(f){n=""+f,o.call(this,f)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(f){n=""+f},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Pi(t){t._valueTracker||(t._valueTracker=t0(t))}function cf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),n="";return t&&(n=sf(t)?t.checked?"true":"false":t.value),t=n,t!==a?(e.setValue(t),!0):!1}function tr(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var e0=/[\n"\\]/g;function Ye(t){return t.replace(e0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Po(t,e,a,n,i,o,f,h){t.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.type=f:t.removeAttribute("type"),e!=null?f==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ge(e)):t.value!==""+Ge(e)&&(t.value=""+Ge(e)):f!=="submit"&&f!=="reset"||t.removeAttribute("value"),e!=null?tu(t,f,Ge(e)):a!=null?tu(t,f,Ge(a)):n!=null&&t.removeAttribute("value"),i==null&&o!=null&&(t.defaultChecked=!!o),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?t.name=""+Ge(h):t.removeAttribute("name")}function ff(t,e,a,n,i,o,f,h){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.type=o),e!=null||a!=null){if(!(o!=="submit"&&o!=="reset"||e!=null))return;a=a!=null?""+Ge(a):"",e=e!=null?""+Ge(e):a,h||e===t.value||(t.value=e),t.defaultValue=e}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=h?t.checked:!!n,t.defaultChecked=!!n,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.name=f)}function tu(t,e,a){e==="number"&&tr(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Jl(t,e,a,n){if(t=t.options,e){e={};for(var i=0;i<a.length;i++)e["$"+a[i]]=!0;for(a=0;a<t.length;a++)i=e.hasOwnProperty("$"+t[a].value),t[a].selected!==i&&(t[a].selected=i),i&&n&&(t[a].defaultSelected=!0)}else{for(a=""+Ge(a),e=null,i=0;i<t.length;i++){if(t[i].value===a){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function df(t,e,a){if(e!=null&&(e=""+Ge(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Ge(a):""}function hf(t,e,a,n){if(e==null){if(n!=null){if(a!=null)throw Error(s(92));if(tt(n)){if(1<n.length)throw Error(s(93));n=n[0]}a=n}a==null&&(a=""),e=a}a=Ge(e),t.defaultValue=a,n=t.textContent,n===a&&n!==""&&n!==null&&(t.value=n)}function Fl(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var a0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pf(t,e,a){var n=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":n?t.setProperty(e,a):typeof a!="number"||a===0||a0.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function mf(t,e,a){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="");for(var i in e)n=e[i],e.hasOwnProperty(i)&&a[i]!==n&&pf(t,i,n)}else for(var o in e)e.hasOwnProperty(o)&&pf(t,o,e[o])}function eu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var l0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),n0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function er(t){return n0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var au=null;function lu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Il=null,Pl=null;function gf(t){var e=Vl(t);if(e&&(t=e.stateNode)){var a=t[Te]||null;t:switch(t=e.stateNode,e.type){case"input":if(Po(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ye(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var n=a[e];if(n!==t&&n.form===t.form){var i=n[Te]||null;if(!i)throw Error(s(90));Po(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<a.length;e++)n=a[e],n.form===t.form&&cf(n)}break t;case"textarea":df(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Jl(t,!!a.multiple,e,!1)}}}var nu=!1;function bf(t,e,a){if(nu)return t(e,a);nu=!0;try{var n=t(e);return n}finally{if(nu=!1,(Il!==null||Pl!==null)&&(Lr(),Il&&(e=Il,t=Pl,Pl=Il=null,gf(e),t)))for(e=0;e<t.length;e++)gf(t[e])}}function Vn(t,e){var a=t.stateNode;if(a===null)return null;var n=a[Te]||null;if(n===null)return null;a=n[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,e,typeof a));return a}var ya=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),iu=!1;if(ya)try{var Zn={};Object.defineProperty(Zn,"passive",{get:function(){iu=!0}}),window.addEventListener("test",Zn,Zn),window.removeEventListener("test",Zn,Zn)}catch{iu=!1}var La=null,ru=null,ar=null;function yf(){if(ar)return ar;var t,e=ru,a=e.length,n,i="value"in La?La.value:La.textContent,o=i.length;for(t=0;t<a&&e[t]===i[t];t++);var f=a-t;for(n=1;n<=f&&e[a-n]===i[o-n];n++);return ar=i.slice(t,1<n?1-n:void 0)}function lr(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function nr(){return!0}function vf(){return!1}function Re(t){function e(a,n,i,o,f){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=f,this.currentTarget=null;for(var h in t)t.hasOwnProperty(h)&&(a=t[h],this[h]=a?a(o):o[h]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?nr:vf,this.isPropagationStopped=vf,this}return x(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nr)},persist:function(){},isPersistent:nr}),e}var gl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ir=Re(gl),Kn=x({},gl,{view:0,detail:0}),i0=Re(Kn),ou,uu,Wn,rr=x({},Kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Wn&&(Wn&&t.type==="mousemove"?(ou=t.screenX-Wn.screenX,uu=t.screenY-Wn.screenY):uu=ou=0,Wn=t),ou)},movementY:function(t){return"movementY"in t?t.movementY:uu}}),xf=Re(rr),r0=x({},rr,{dataTransfer:0}),o0=Re(r0),u0=x({},Kn,{relatedTarget:0}),su=Re(u0),s0=x({},gl,{animationName:0,elapsedTime:0,pseudoElement:0}),c0=Re(s0),f0=x({},gl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),d0=Re(f0),h0=x({},gl,{data:0}),Af=Re(h0),p0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},m0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},g0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function b0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=g0[t])?!!e[t]:!1}function cu(){return b0}var y0=x({},Kn,{key:function(t){if(t.key){var e=p0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=lr(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?m0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cu,charCode:function(t){return t.type==="keypress"?lr(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?lr(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),v0=Re(y0),x0=x({},rr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wf=Re(x0),A0=x({},Kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cu}),w0=Re(A0),S0=x({},gl,{propertyName:0,elapsedTime:0,pseudoElement:0}),E0=Re(S0),T0=x({},rr,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),R0=Re(T0),D0=x({},gl,{newState:0,oldState:0}),k0=Re(D0),C0=[9,13,27,32],fu=ya&&"CompositionEvent"in window,Jn=null;ya&&"documentMode"in document&&(Jn=document.documentMode);var O0=ya&&"TextEvent"in window&&!Jn,Sf=ya&&(!fu||Jn&&8<Jn&&11>=Jn),Ef=" ",Tf=!1;function Rf(t,e){switch(t){case"keyup":return C0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Df(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var tn=!1;function M0(t,e){switch(t){case"compositionend":return Df(e);case"keypress":return e.which!==32?null:(Tf=!0,Ef);case"textInput":return t=e.data,t===Ef&&Tf?null:t;default:return null}}function z0(t,e){if(tn)return t==="compositionend"||!fu&&Rf(t,e)?(t=yf(),ar=ru=La=null,tn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Sf&&e.locale!=="ko"?null:e.data;default:return null}}var N0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!N0[t.type]:e==="textarea"}function Cf(t,e,a,n){Il?Pl?Pl.push(n):Pl=[n]:Il=n,e=Vr(e,"onChange"),0<e.length&&(a=new ir("onChange","change",null,a,n),t.push({event:a,listeners:e}))}var Fn=null,In=null;function j0(t){sp(t,0)}function or(t){var e=Xn(t);if(cf(e))return t}function Of(t,e){if(t==="change")return e}var Mf=!1;if(ya){var du;if(ya){var hu="oninput"in document;if(!hu){var zf=document.createElement("div");zf.setAttribute("oninput","return;"),hu=typeof zf.oninput=="function"}du=hu}else du=!1;Mf=du&&(!document.documentMode||9<document.documentMode)}function Nf(){Fn&&(Fn.detachEvent("onpropertychange",jf),In=Fn=null)}function jf(t){if(t.propertyName==="value"&&or(In)){var e=[];Cf(e,In,t,lu(t)),bf(j0,e)}}function _0(t,e,a){t==="focusin"?(Nf(),Fn=e,In=a,Fn.attachEvent("onpropertychange",jf)):t==="focusout"&&Nf()}function B0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return or(In)}function H0(t,e){if(t==="click")return or(e)}function U0(t,e){if(t==="input"||t==="change")return or(e)}function $0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Me=typeof Object.is=="function"?Object.is:$0;function Pn(t,e){if(Me(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),n=Object.keys(e);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!xt.call(e,i)||!Me(t[i],e[i]))return!1}return!0}function _f(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bf(t,e){var a=_f(t);t=0;for(var n;a;){if(a.nodeType===3){if(n=t+a.textContent.length,t<=e&&n>=e)return{node:a,offset:e-t};t=n}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=_f(a)}}function Hf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Uf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=tr(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=tr(t.document)}return e}function pu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var L0=ya&&"documentMode"in document&&11>=document.documentMode,en=null,mu=null,ti=null,gu=!1;function $f(t,e,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gu||en==null||en!==tr(n)||(n=en,"selectionStart"in n&&pu(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ti&&Pn(ti,n)||(ti=n,n=Vr(mu,"onSelect"),0<n.length&&(e=new ir("onSelect","select",null,e,a),t.push({event:e,listeners:n}),e.target=en)))}function bl(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var an={animationend:bl("Animation","AnimationEnd"),animationiteration:bl("Animation","AnimationIteration"),animationstart:bl("Animation","AnimationStart"),transitionrun:bl("Transition","TransitionRun"),transitionstart:bl("Transition","TransitionStart"),transitioncancel:bl("Transition","TransitionCancel"),transitionend:bl("Transition","TransitionEnd")},bu={},Lf={};ya&&(Lf=document.createElement("div").style,"AnimationEvent"in window||(delete an.animationend.animation,delete an.animationiteration.animation,delete an.animationstart.animation),"TransitionEvent"in window||delete an.transitionend.transition);function yl(t){if(bu[t])return bu[t];if(!an[t])return t;var e=an[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Lf)return bu[t]=e[a];return t}var Gf=yl("animationend"),Yf=yl("animationiteration"),qf=yl("animationstart"),G0=yl("transitionrun"),Y0=yl("transitionstart"),q0=yl("transitioncancel"),Qf=yl("transitionend"),Xf=new Map,yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yu.push("scrollEnd");function Fe(t,e){Xf.set(t,e),ml(e,[t])}var Vf=new WeakMap;function qe(t,e){if(typeof t=="object"&&t!==null){var a=Vf.get(t);return a!==void 0?a:(e={value:t,source:e,stack:uf(e)},Vf.set(t,e),e)}return{value:t,source:e,stack:uf(e)}}var Qe=[],ln=0,vu=0;function ur(){for(var t=ln,e=vu=ln=0;e<t;){var a=Qe[e];Qe[e++]=null;var n=Qe[e];Qe[e++]=null;var i=Qe[e];Qe[e++]=null;var o=Qe[e];if(Qe[e++]=null,n!==null&&i!==null){var f=n.pending;f===null?i.next=i:(i.next=f.next,f.next=i),n.pending=i}o!==0&&Zf(a,i,o)}}function sr(t,e,a,n){Qe[ln++]=t,Qe[ln++]=e,Qe[ln++]=a,Qe[ln++]=n,vu|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function xu(t,e,a,n){return sr(t,e,a,n),cr(t)}function nn(t,e){return sr(t,null,null,e),cr(t)}function Zf(t,e,a){t.lanes|=a;var n=t.alternate;n!==null&&(n.lanes|=a);for(var i=!1,o=t.return;o!==null;)o.childLanes|=a,n=o.alternate,n!==null&&(n.childLanes|=a),o.tag===22&&(t=o.stateNode,t===null||t._visibility&1||(i=!0)),t=o,o=o.return;return t.tag===3?(o=t.stateNode,i&&e!==null&&(i=31-we(a),t=o.hiddenUpdates,n=t[i],n===null?t[i]=[e]:n.push(e),e.lane=a|536870912),o):null}function cr(t){if(50<Ti)throw Ti=0,Rs=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var rn={};function Q0(t,e,a,n){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ze(t,e,a,n){return new Q0(t,e,a,n)}function Au(t){return t=t.prototype,!(!t||!t.isReactComponent)}function va(t,e){var a=t.alternate;return a===null?(a=ze(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Kf(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function fr(t,e,a,n,i,o){var f=0;if(n=t,typeof t=="function")Au(t)&&(f=1);else if(typeof t=="string")f=Vb(t,a,W.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case dt:return t=ze(31,a,e,i),t.elementType=dt,t.lanes=o,t;case L:return vl(a.children,i,o,e);case J:f=8,i|=24;break;case B:return t=ze(12,a,e,i|2),t.elementType=B,t.lanes=o,t;case I:return t=ze(13,a,e,i),t.elementType=I,t.lanes=o,t;case nt:return t=ze(19,a,e,i),t.elementType=nt,t.lanes=o,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case H:case G:f=10;break t;case N:f=9;break t;case F:f=11;break t;case it:f=14;break t;case bt:f=16,n=null;break t}f=29,a=Error(s(130,t===null?"null":typeof t,"")),n=null}return e=ze(f,a,e,i),e.elementType=t,e.type=n,e.lanes=o,e}function vl(t,e,a,n){return t=ze(7,t,n,e),t.lanes=a,t}function wu(t,e,a){return t=ze(6,t,null,e),t.lanes=a,t}function Su(t,e,a){return e=ze(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var on=[],un=0,dr=null,hr=0,Xe=[],Ve=0,xl=null,xa=1,Aa="";function Al(t,e){on[un++]=hr,on[un++]=dr,dr=t,hr=e}function Wf(t,e,a){Xe[Ve++]=xa,Xe[Ve++]=Aa,Xe[Ve++]=xl,xl=t;var n=xa;t=Aa;var i=32-we(n)-1;n&=~(1<<i),a+=1;var o=32-we(e)+i;if(30<o){var f=i-i%5;o=(n&(1<<f)-1).toString(32),n>>=f,i-=f,xa=1<<32-we(e)+i|a<<i|n,Aa=o+t}else xa=1<<o|a<<i|n,Aa=t}function Eu(t){t.return!==null&&(Al(t,1),Wf(t,1,0))}function Tu(t){for(;t===dr;)dr=on[--un],on[un]=null,hr=on[--un],on[un]=null;for(;t===xl;)xl=Xe[--Ve],Xe[Ve]=null,Aa=Xe[--Ve],Xe[Ve]=null,xa=Xe[--Ve],Xe[Ve]=null}var Se=null,Kt=null,Nt=!1,wl=null,oa=!1,Ru=Error(s(519));function Sl(t){var e=Error(s(418,""));throw li(qe(e,t)),Ru}function Jf(t){var e=t.stateNode,a=t.type,n=t.memoizedProps;switch(e[ye]=t,e[Te]=n,a){case"dialog":Dt("cancel",e),Dt("close",e);break;case"iframe":case"object":case"embed":Dt("load",e);break;case"video":case"audio":for(a=0;a<Di.length;a++)Dt(Di[a],e);break;case"source":Dt("error",e);break;case"img":case"image":case"link":Dt("error",e),Dt("load",e);break;case"details":Dt("toggle",e);break;case"input":Dt("invalid",e),ff(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Pi(e);break;case"select":Dt("invalid",e);break;case"textarea":Dt("invalid",e),hf(e,n.value,n.defaultValue,n.children),Pi(e)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||n.suppressHydrationWarning===!0||hp(e.textContent,a)?(n.popover!=null&&(Dt("beforetoggle",e),Dt("toggle",e)),n.onScroll!=null&&Dt("scroll",e),n.onScrollEnd!=null&&Dt("scrollend",e),n.onClick!=null&&(e.onclick=Zr),e=!0):e=!1,e||Sl(t)}function Ff(t){for(Se=t.return;Se;)switch(Se.tag){case 5:case 13:oa=!1;return;case 27:case 3:oa=!0;return;default:Se=Se.return}}function ei(t){if(t!==Se)return!1;if(!Nt)return Ff(t),Nt=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Ys(t.type,t.memoizedProps)),a=!a),a&&Kt&&Sl(t),Ff(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(e===0){Kt=Pe(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;t=t.nextSibling}Kt=null}}else e===27?(e=Kt,al(t.type)?(t=Vs,Vs=null,Kt=t):Kt=e):Kt=Se?Pe(t.stateNode.nextSibling):null;return!0}function ai(){Kt=Se=null,Nt=!1}function If(){var t=wl;return t!==null&&(Ce===null?Ce=t:Ce.push.apply(Ce,t),wl=null),t}function li(t){wl===null?wl=[t]:wl.push(t)}var Du=q(null),El=null,wa=null;function Ga(t,e,a){U(Du,e._currentValue),e._currentValue=a}function Sa(t){t._currentValue=Du.current,at(Du)}function ku(t,e,a){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===a)break;t=t.return}}function Cu(t,e,a,n){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var o=i.dependencies;if(o!==null){var f=i.child;o=o.firstContext;t:for(;o!==null;){var h=o;o=i;for(var S=0;S<e.length;S++)if(h.context===e[S]){o.lanes|=a,h=o.alternate,h!==null&&(h.lanes|=a),ku(o.return,a,t),n||(f=null);break t}o=h.next}}else if(i.tag===18){if(f=i.return,f===null)throw Error(s(341));f.lanes|=a,o=f.alternate,o!==null&&(o.lanes|=a),ku(f,a,t),f=null}else f=i.child;if(f!==null)f.return=i;else for(f=i;f!==null;){if(f===t){f=null;break}if(i=f.sibling,i!==null){i.return=f.return,f=i;break}f=f.return}i=f}}function ni(t,e,a,n){t=null;for(var i=e,o=!1;i!==null;){if(!o){if((i.flags&524288)!==0)o=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var f=i.alternate;if(f===null)throw Error(s(387));if(f=f.memoizedProps,f!==null){var h=i.type;Me(i.pendingProps.value,f.value)||(t!==null?t.push(h):t=[h])}}else if(i===ct.current){if(f=i.alternate,f===null)throw Error(s(387));f.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Ni):t=[Ni])}i=i.return}t!==null&&Cu(e,t,a,n),e.flags|=262144}function pr(t){for(t=t.firstContext;t!==null;){if(!Me(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Tl(t){El=t,wa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ve(t){return Pf(El,t)}function mr(t,e){return El===null&&Tl(t),Pf(t,e)}function Pf(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},wa===null){if(t===null)throw Error(s(308));wa=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else wa=wa.next=e;return a}var X0=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,n){t.push(n)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},V0=l.unstable_scheduleCallback,Z0=l.unstable_NormalPriority,le={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ou(){return{controller:new X0,data:new Map,refCount:0}}function ii(t){t.refCount--,t.refCount===0&&V0(Z0,function(){t.controller.abort()})}var ri=null,Mu=0,sn=0,cn=null;function K0(t,e){if(ri===null){var a=ri=[];Mu=0,sn=Ns(),cn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Mu++,e.then(td,td),e}function td(){if(--Mu===0&&ri!==null){cn!==null&&(cn.status="fulfilled");var t=ri;ri=null,sn=0,cn=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function W0(t,e){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return t.then(function(){n.status="fulfilled",n.value=e;for(var i=0;i<a.length;i++)(0,a[i])(e)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var ed=k.S;k.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&K0(t,e),ed!==null&&ed(t,e)};var Rl=q(null);function zu(){var t=Rl.current;return t!==null?t:Yt.pooledCache}function gr(t,e){e===null?U(Rl,Rl.current):U(Rl,e.pool)}function ad(){var t=zu();return t===null?null:{parent:le._currentValue,pool:t}}var oi=Error(s(460)),ld=Error(s(474)),br=Error(s(542)),Nu={then:function(){}};function nd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function yr(){}function id(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(yr,yr),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,od(t),t;default:if(typeof e.status=="string")e.then(yr,yr);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(n){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=n}},function(n){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,od(t),t}throw ui=e,oi}}var ui=null;function rd(){if(ui===null)throw Error(s(459));var t=ui;return ui=null,t}function od(t){if(t===oi||t===br)throw Error(s(483))}var Ya=!1;function ju(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _u(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function qa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Qa(t,e,a){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,(Bt&2)!==0){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,e=cr(t),Zf(t,null,a),e}return sr(t,n,e,a),cr(t)}function si(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,Pc(t,a)}}function Bu(t,e){var a=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,o=null;if(a=a.firstBaseUpdate,a!==null){do{var f={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};o===null?i=o=f:o=o.next=f,a=a.next}while(a!==null);o===null?i=o=e:o=o.next=e}else i=o=e;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Hu=!1;function ci(){if(Hu){var t=cn;if(t!==null)throw t}}function fi(t,e,a,n){Hu=!1;var i=t.updateQueue;Ya=!1;var o=i.firstBaseUpdate,f=i.lastBaseUpdate,h=i.shared.pending;if(h!==null){i.shared.pending=null;var S=h,C=S.next;S.next=null,f===null?o=C:f.next=C,f=S;var Q=t.alternate;Q!==null&&(Q=Q.updateQueue,h=Q.lastBaseUpdate,h!==f&&(h===null?Q.firstBaseUpdate=C:h.next=C,Q.lastBaseUpdate=S))}if(o!==null){var Z=i.baseState;f=0,Q=C=S=null,h=o;do{var M=h.lane&-536870913,z=M!==h.lane;if(z?(Mt&M)===M:(n&M)===M){M!==0&&M===sn&&(Hu=!0),Q!==null&&(Q=Q.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});t:{var vt=t,mt=h;M=e;var Lt=a;switch(mt.tag){case 1:if(vt=mt.payload,typeof vt=="function"){Z=vt.call(Lt,Z,M);break t}Z=vt;break t;case 3:vt.flags=vt.flags&-65537|128;case 0:if(vt=mt.payload,M=typeof vt=="function"?vt.call(Lt,Z,M):vt,M==null)break t;Z=x({},Z,M);break t;case 2:Ya=!0}}M=h.callback,M!==null&&(t.flags|=64,z&&(t.flags|=8192),z=i.callbacks,z===null?i.callbacks=[M]:z.push(M))}else z={lane:M,tag:h.tag,payload:h.payload,callback:h.callback,next:null},Q===null?(C=Q=z,S=Z):Q=Q.next=z,f|=M;if(h=h.next,h===null){if(h=i.shared.pending,h===null)break;z=h,h=z.next,z.next=null,i.lastBaseUpdate=z,i.shared.pending=null}}while(!0);Q===null&&(S=Z),i.baseState=S,i.firstBaseUpdate=C,i.lastBaseUpdate=Q,o===null&&(i.shared.lanes=0),Ia|=f,t.lanes=f,t.memoizedState=Z}}function ud(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function sd(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)ud(a[t],e)}var fn=q(null),vr=q(0);function cd(t,e){t=Oa,U(vr,t),U(fn,e),Oa=t|e.baseLanes}function Uu(){U(vr,Oa),U(fn,fn.current)}function $u(){Oa=vr.current,at(fn),at(vr)}var Xa=0,St=null,Ut=null,Pt=null,xr=!1,dn=!1,Dl=!1,Ar=0,di=0,hn=null,J0=0;function Ft(){throw Error(s(321))}function Lu(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Me(t[a],e[a]))return!1;return!0}function Gu(t,e,a,n,i,o){return Xa=o,St=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,k.H=t===null||t.memoizedState===null?Zd:Kd,Dl=!1,o=a(n,i),Dl=!1,dn&&(o=dd(e,a,n,i)),fd(t),o}function fd(t){k.H=Dr;var e=Ut!==null&&Ut.next!==null;if(Xa=0,Pt=Ut=St=null,xr=!1,di=0,hn=null,e)throw Error(s(300));t===null||ue||(t=t.dependencies,t!==null&&pr(t)&&(ue=!0))}function dd(t,e,a,n){St=t;var i=0;do{if(dn&&(hn=null),di=0,dn=!1,25<=i)throw Error(s(301));if(i+=1,Pt=Ut=null,t.updateQueue!=null){var o=t.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}k.H=lb,o=e(a,n)}while(dn);return o}function F0(){var t=k.H,e=t.useState()[0];return e=typeof e.then=="function"?hi(e):e,t=t.useState()[0],(Ut!==null?Ut.memoizedState:null)!==t&&(St.flags|=1024),e}function Yu(){var t=Ar!==0;return Ar=0,t}function qu(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function Qu(t){if(xr){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}xr=!1}Xa=0,Pt=Ut=St=null,dn=!1,di=Ar=0,hn=null}function De(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?St.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function te(){if(Ut===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=Ut.next;var e=Pt===null?St.memoizedState:Pt.next;if(e!==null)Pt=e,Ut=t;else{if(t===null)throw St.alternate===null?Error(s(467)):Error(s(310));Ut=t,t={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},Pt===null?St.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function Xu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hi(t){var e=di;return di+=1,hn===null&&(hn=[]),t=id(hn,t,e),e=St,(Pt===null?e.memoizedState:Pt.next)===null&&(e=e.alternate,k.H=e===null||e.memoizedState===null?Zd:Kd),t}function wr(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return hi(t);if(t.$$typeof===G)return ve(t)}throw Error(s(438,String(t)))}function Vu(t){var e=null,a=St.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var n=St.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=Xu(),St.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),n=0;n<t;n++)a[n]=Ct;return e.index++,a}function Ea(t,e){return typeof e=="function"?e(t):e}function Sr(t){var e=te();return Zu(e,Ut,t)}function Zu(t,e,a){var n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=a;var i=t.baseQueue,o=n.pending;if(o!==null){if(i!==null){var f=i.next;i.next=o.next,o.next=f}e.baseQueue=i=o,n.pending=null}if(o=t.baseState,i===null)t.memoizedState=o;else{e=i.next;var h=f=null,S=null,C=e,Q=!1;do{var Z=C.lane&-536870913;if(Z!==C.lane?(Mt&Z)===Z:(Xa&Z)===Z){var M=C.revertLane;if(M===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),Z===sn&&(Q=!0);else if((Xa&M)===M){C=C.next,M===sn&&(Q=!0);continue}else Z={lane:0,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},S===null?(h=S=Z,f=o):S=S.next=Z,St.lanes|=M,Ia|=M;Z=C.action,Dl&&a(o,Z),o=C.hasEagerState?C.eagerState:a(o,Z)}else M={lane:Z,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},S===null?(h=S=M,f=o):S=S.next=M,St.lanes|=Z,Ia|=Z;C=C.next}while(C!==null&&C!==e);if(S===null?f=o:S.next=h,!Me(o,t.memoizedState)&&(ue=!0,Q&&(a=cn,a!==null)))throw a;t.memoizedState=o,t.baseState=f,t.baseQueue=S,n.lastRenderedState=o}return i===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function Ku(t){var e=te(),a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var n=a.dispatch,i=a.pending,o=e.memoizedState;if(i!==null){a.pending=null;var f=i=i.next;do o=t(o,f.action),f=f.next;while(f!==i);Me(o,e.memoizedState)||(ue=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),a.lastRenderedState=o}return[o,n]}function hd(t,e,a){var n=St,i=te(),o=Nt;if(o){if(a===void 0)throw Error(s(407));a=a()}else a=e();var f=!Me((Ut||i).memoizedState,a);f&&(i.memoizedState=a,ue=!0),i=i.queue;var h=gd.bind(null,n,i,t);if(pi(2048,8,h,[t]),i.getSnapshot!==e||f||Pt!==null&&Pt.memoizedState.tag&1){if(n.flags|=2048,pn(9,Er(),md.bind(null,n,i,a,e),null),Yt===null)throw Error(s(349));o||(Xa&124)!==0||pd(n,e,a)}return a}function pd(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=St.updateQueue,e===null?(e=Xu(),St.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function md(t,e,a,n){e.value=a,e.getSnapshot=n,bd(e)&&yd(t)}function gd(t,e,a){return a(function(){bd(e)&&yd(t)})}function bd(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Me(t,a)}catch{return!0}}function yd(t){var e=nn(t,2);e!==null&&He(e,t,2)}function Wu(t){var e=De();if(typeof t=="function"){var a=t;if(t=a(),Dl){ra(!0);try{a()}finally{ra(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},e}function vd(t,e,a,n){return t.baseState=a,Zu(t,Ut,typeof n=="function"?n:Ea)}function I0(t,e,a,n,i){if(Rr(t))throw Error(s(485));if(t=e.action,t!==null){var o={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){o.listeners.push(f)}};k.T!==null?a(!0):o.isTransition=!1,n(o),a=e.pending,a===null?(o.next=e.pending=o,xd(e,o)):(o.next=a.next,e.pending=a.next=o)}}function xd(t,e){var a=e.action,n=e.payload,i=t.state;if(e.isTransition){var o=k.T,f={};k.T=f;try{var h=a(i,n),S=k.S;S!==null&&S(f,h),Ad(t,e,h)}catch(C){Ju(t,e,C)}finally{k.T=o}}else try{o=a(i,n),Ad(t,e,o)}catch(C){Ju(t,e,C)}}function Ad(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){wd(t,e,n)},function(n){return Ju(t,e,n)}):wd(t,e,a)}function wd(t,e,a){e.status="fulfilled",e.value=a,Sd(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,xd(t,a)))}function Ju(t,e,a){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=a,Sd(e),e=e.next;while(e!==n)}t.action=null}function Sd(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Ed(t,e){return e}function Td(t,e){if(Nt){var a=Yt.formState;if(a!==null){t:{var n=St;if(Nt){if(Kt){e:{for(var i=Kt,o=oa;i.nodeType!==8;){if(!o){i=null;break e}if(i=Pe(i.nextSibling),i===null){i=null;break e}}o=i.data,i=o==="F!"||o==="F"?i:null}if(i){Kt=Pe(i.nextSibling),n=i.data==="F!";break t}}Sl(n)}n=!1}n&&(e=a[0])}}return a=De(),a.memoizedState=a.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ed,lastRenderedState:e},a.queue=n,a=Qd.bind(null,St,n),n.dispatch=a,n=Wu(!1),o=es.bind(null,St,!1,n.queue),n=De(),i={state:e,dispatch:null,action:t,pending:null},n.queue=i,a=I0.bind(null,St,i,o,a),i.dispatch=a,n.memoizedState=t,[e,a,!1]}function Rd(t){var e=te();return Dd(e,Ut,t)}function Dd(t,e,a){if(e=Zu(t,e,Ed)[0],t=Sr(Ea)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=hi(e)}catch(f){throw f===oi?br:f}else n=e;e=te();var i=e.queue,o=i.dispatch;return a!==e.memoizedState&&(St.flags|=2048,pn(9,Er(),P0.bind(null,i,a),null)),[n,o,t]}function P0(t,e){t.action=e}function kd(t){var e=te(),a=Ut;if(a!==null)return Dd(e,a,t);te(),e=e.memoizedState,a=te();var n=a.queue.dispatch;return a.memoizedState=t,[e,n,!1]}function pn(t,e,a,n){return t={tag:t,create:a,deps:n,inst:e,next:null},e=St.updateQueue,e===null&&(e=Xu(),St.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(n=a.next,a.next=t,t.next=n,e.lastEffect=t),t}function Er(){return{destroy:void 0,resource:void 0}}function Cd(){return te().memoizedState}function Tr(t,e,a,n){var i=De();n=n===void 0?null:n,St.flags|=t,i.memoizedState=pn(1|e,Er(),a,n)}function pi(t,e,a,n){var i=te();n=n===void 0?null:n;var o=i.memoizedState.inst;Ut!==null&&n!==null&&Lu(n,Ut.memoizedState.deps)?i.memoizedState=pn(e,o,a,n):(St.flags|=t,i.memoizedState=pn(1|e,o,a,n))}function Od(t,e){Tr(8390656,8,t,e)}function Md(t,e){pi(2048,8,t,e)}function zd(t,e){return pi(4,2,t,e)}function Nd(t,e){return pi(4,4,t,e)}function jd(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function _d(t,e,a){a=a!=null?a.concat([t]):null,pi(4,4,jd.bind(null,e,t),a)}function Fu(){}function Bd(t,e){var a=te();e=e===void 0?null:e;var n=a.memoizedState;return e!==null&&Lu(e,n[1])?n[0]:(a.memoizedState=[t,e],t)}function Hd(t,e){var a=te();e=e===void 0?null:e;var n=a.memoizedState;if(e!==null&&Lu(e,n[1]))return n[0];if(n=t(),Dl){ra(!0);try{t()}finally{ra(!1)}}return a.memoizedState=[n,e],n}function Iu(t,e,a){return a===void 0||(Xa&1073741824)!==0?t.memoizedState=e:(t.memoizedState=a,t=Lh(),St.lanes|=t,Ia|=t,a)}function Ud(t,e,a,n){return Me(a,e)?a:fn.current!==null?(t=Iu(t,a,n),Me(t,e)||(ue=!0),t):(Xa&42)===0?(ue=!0,t.memoizedState=a):(t=Lh(),St.lanes|=t,Ia|=t,e)}function $d(t,e,a,n,i){var o=Y.p;Y.p=o!==0&&8>o?o:8;var f=k.T,h={};k.T=h,es(t,!1,e,a);try{var S=i(),C=k.S;if(C!==null&&C(h,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var Q=W0(S,n);mi(t,e,Q,Be(t))}else mi(t,e,n,Be(t))}catch(Z){mi(t,e,{then:function(){},status:"rejected",reason:Z},Be())}finally{Y.p=o,k.T=f}}function tb(){}function Pu(t,e,a,n){if(t.tag!==5)throw Error(s(476));var i=Ld(t).queue;$d(t,i,e,P,a===null?tb:function(){return Gd(t),a(n)})}function Ld(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:P},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Gd(t){var e=Ld(t).next.queue;mi(t,e,{},Be())}function ts(){return ve(Ni)}function Yd(){return te().memoizedState}function qd(){return te().memoizedState}function eb(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Be();t=qa(a);var n=Qa(e,t,a);n!==null&&(He(n,e,a),si(n,e,a)),e={cache:Ou()},t.payload=e;return}e=e.return}}function ab(t,e,a){var n=Be();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Rr(t)?Xd(e,a):(a=xu(t,e,a,n),a!==null&&(He(a,t,n),Vd(a,e,n)))}function Qd(t,e,a){var n=Be();mi(t,e,a,n)}function mi(t,e,a,n){var i={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Rr(t))Xd(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var f=e.lastRenderedState,h=o(f,a);if(i.hasEagerState=!0,i.eagerState=h,Me(h,f))return sr(t,e,i,0),Yt===null&&ur(),!1}catch{}finally{}if(a=xu(t,e,i,n),a!==null)return He(a,t,n),Vd(a,e,n),!0}return!1}function es(t,e,a,n){if(n={lane:2,revertLane:Ns(),action:n,hasEagerState:!1,eagerState:null,next:null},Rr(t)){if(e)throw Error(s(479))}else e=xu(t,a,n,2),e!==null&&He(e,t,2)}function Rr(t){var e=t.alternate;return t===St||e!==null&&e===St}function Xd(t,e){dn=xr=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Vd(t,e,a){if((a&4194048)!==0){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,Pc(t,a)}}var Dr={readContext:ve,use:wr,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useLayoutEffect:Ft,useInsertionEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useSyncExternalStore:Ft,useId:Ft,useHostTransitionStatus:Ft,useFormState:Ft,useActionState:Ft,useOptimistic:Ft,useMemoCache:Ft,useCacheRefresh:Ft},Zd={readContext:ve,use:wr,useCallback:function(t,e){return De().memoizedState=[t,e===void 0?null:e],t},useContext:ve,useEffect:Od,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Tr(4194308,4,jd.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Tr(4194308,4,t,e)},useInsertionEffect:function(t,e){Tr(4,2,t,e)},useMemo:function(t,e){var a=De();e=e===void 0?null:e;var n=t();if(Dl){ra(!0);try{t()}finally{ra(!1)}}return a.memoizedState=[n,e],n},useReducer:function(t,e,a){var n=De();if(a!==void 0){var i=a(e);if(Dl){ra(!0);try{a(e)}finally{ra(!1)}}}else i=e;return n.memoizedState=n.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},n.queue=t,t=t.dispatch=ab.bind(null,St,t),[n.memoizedState,t]},useRef:function(t){var e=De();return t={current:t},e.memoizedState=t},useState:function(t){t=Wu(t);var e=t.queue,a=Qd.bind(null,St,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:Fu,useDeferredValue:function(t,e){var a=De();return Iu(a,t,e)},useTransition:function(){var t=Wu(!1);return t=$d.bind(null,St,t.queue,!0,!1),De().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var n=St,i=De();if(Nt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=e(),Yt===null)throw Error(s(349));(Mt&124)!==0||pd(n,e,a)}i.memoizedState=a;var o={value:a,getSnapshot:e};return i.queue=o,Od(gd.bind(null,n,o,t),[t]),n.flags|=2048,pn(9,Er(),md.bind(null,n,o,a,e),null),a},useId:function(){var t=De(),e=Yt.identifierPrefix;if(Nt){var a=Aa,n=xa;a=(n&~(1<<32-we(n)-1)).toString(32)+a,e="«"+e+"R"+a,a=Ar++,0<a&&(e+="H"+a.toString(32)),e+="»"}else a=J0++,e="«"+e+"r"+a.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:ts,useFormState:Td,useActionState:Td,useOptimistic:function(t){var e=De();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=es.bind(null,St,!0,a),a.dispatch=e,[t,e]},useMemoCache:Vu,useCacheRefresh:function(){return De().memoizedState=eb.bind(null,St)}},Kd={readContext:ve,use:wr,useCallback:Bd,useContext:ve,useEffect:Md,useImperativeHandle:_d,useInsertionEffect:zd,useLayoutEffect:Nd,useMemo:Hd,useReducer:Sr,useRef:Cd,useState:function(){return Sr(Ea)},useDebugValue:Fu,useDeferredValue:function(t,e){var a=te();return Ud(a,Ut.memoizedState,t,e)},useTransition:function(){var t=Sr(Ea)[0],e=te().memoizedState;return[typeof t=="boolean"?t:hi(t),e]},useSyncExternalStore:hd,useId:Yd,useHostTransitionStatus:ts,useFormState:Rd,useActionState:Rd,useOptimistic:function(t,e){var a=te();return vd(a,Ut,t,e)},useMemoCache:Vu,useCacheRefresh:qd},lb={readContext:ve,use:wr,useCallback:Bd,useContext:ve,useEffect:Md,useImperativeHandle:_d,useInsertionEffect:zd,useLayoutEffect:Nd,useMemo:Hd,useReducer:Ku,useRef:Cd,useState:function(){return Ku(Ea)},useDebugValue:Fu,useDeferredValue:function(t,e){var a=te();return Ut===null?Iu(a,t,e):Ud(a,Ut.memoizedState,t,e)},useTransition:function(){var t=Ku(Ea)[0],e=te().memoizedState;return[typeof t=="boolean"?t:hi(t),e]},useSyncExternalStore:hd,useId:Yd,useHostTransitionStatus:ts,useFormState:kd,useActionState:kd,useOptimistic:function(t,e){var a=te();return Ut!==null?vd(a,Ut,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Vu,useCacheRefresh:qd},mn=null,gi=0;function kr(t){var e=gi;return gi+=1,mn===null&&(mn=[]),id(mn,t,e)}function bi(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Cr(t,e){throw e.$$typeof===E?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Wd(t){var e=t._init;return e(t._payload)}function Jd(t){function e(R,T){if(t){var D=R.deletions;D===null?(R.deletions=[T],R.flags|=16):D.push(T)}}function a(R,T){if(!t)return null;for(;T!==null;)e(R,T),T=T.sibling;return null}function n(R){for(var T=new Map;R!==null;)R.key!==null?T.set(R.key,R):T.set(R.index,R),R=R.sibling;return T}function i(R,T){return R=va(R,T),R.index=0,R.sibling=null,R}function o(R,T,D){return R.index=D,t?(D=R.alternate,D!==null?(D=D.index,D<T?(R.flags|=67108866,T):D):(R.flags|=67108866,T)):(R.flags|=1048576,T)}function f(R){return t&&R.alternate===null&&(R.flags|=67108866),R}function h(R,T,D,X){return T===null||T.tag!==6?(T=wu(D,R.mode,X),T.return=R,T):(T=i(T,D),T.return=R,T)}function S(R,T,D,X){var st=D.type;return st===L?Q(R,T,D.props.children,X,D.key):T!==null&&(T.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===bt&&Wd(st)===T.type)?(T=i(T,D.props),bi(T,D),T.return=R,T):(T=fr(D.type,D.key,D.props,null,R.mode,X),bi(T,D),T.return=R,T)}function C(R,T,D,X){return T===null||T.tag!==4||T.stateNode.containerInfo!==D.containerInfo||T.stateNode.implementation!==D.implementation?(T=Su(D,R.mode,X),T.return=R,T):(T=i(T,D.children||[]),T.return=R,T)}function Q(R,T,D,X,st){return T===null||T.tag!==7?(T=vl(D,R.mode,X,st),T.return=R,T):(T=i(T,D),T.return=R,T)}function Z(R,T,D){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=wu(""+T,R.mode,D),T.return=R,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case O:return D=fr(T.type,T.key,T.props,null,R.mode,D),bi(D,T),D.return=R,D;case $:return T=Su(T,R.mode,D),T.return=R,T;case bt:var X=T._init;return T=X(T._payload),Z(R,T,D)}if(tt(T)||V(T))return T=vl(T,R.mode,D,null),T.return=R,T;if(typeof T.then=="function")return Z(R,kr(T),D);if(T.$$typeof===G)return Z(R,mr(R,T),D);Cr(R,T)}return null}function M(R,T,D,X){var st=T!==null?T.key:null;if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return st!==null?null:h(R,T,""+D,X);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case O:return D.key===st?S(R,T,D,X):null;case $:return D.key===st?C(R,T,D,X):null;case bt:return st=D._init,D=st(D._payload),M(R,T,D,X)}if(tt(D)||V(D))return st!==null?null:Q(R,T,D,X,null);if(typeof D.then=="function")return M(R,T,kr(D),X);if(D.$$typeof===G)return M(R,T,mr(R,D),X);Cr(R,D)}return null}function z(R,T,D,X,st){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return R=R.get(D)||null,h(T,R,""+X,st);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case O:return R=R.get(X.key===null?D:X.key)||null,S(T,R,X,st);case $:return R=R.get(X.key===null?D:X.key)||null,C(T,R,X,st);case bt:var Et=X._init;return X=Et(X._payload),z(R,T,D,X,st)}if(tt(X)||V(X))return R=R.get(D)||null,Q(T,R,X,st,null);if(typeof X.then=="function")return z(R,T,D,kr(X),st);if(X.$$typeof===G)return z(R,T,D,mr(T,X),st);Cr(T,X)}return null}function vt(R,T,D,X){for(var st=null,Et=null,ft=T,gt=T=0,ce=null;ft!==null&&gt<D.length;gt++){ft.index>gt?(ce=ft,ft=null):ce=ft.sibling;var zt=M(R,ft,D[gt],X);if(zt===null){ft===null&&(ft=ce);break}t&&ft&&zt.alternate===null&&e(R,ft),T=o(zt,T,gt),Et===null?st=zt:Et.sibling=zt,Et=zt,ft=ce}if(gt===D.length)return a(R,ft),Nt&&Al(R,gt),st;if(ft===null){for(;gt<D.length;gt++)ft=Z(R,D[gt],X),ft!==null&&(T=o(ft,T,gt),Et===null?st=ft:Et.sibling=ft,Et=ft);return Nt&&Al(R,gt),st}for(ft=n(ft);gt<D.length;gt++)ce=z(ft,R,gt,D[gt],X),ce!==null&&(t&&ce.alternate!==null&&ft.delete(ce.key===null?gt:ce.key),T=o(ce,T,gt),Et===null?st=ce:Et.sibling=ce,Et=ce);return t&&ft.forEach(function(ol){return e(R,ol)}),Nt&&Al(R,gt),st}function mt(R,T,D,X){if(D==null)throw Error(s(151));for(var st=null,Et=null,ft=T,gt=T=0,ce=null,zt=D.next();ft!==null&&!zt.done;gt++,zt=D.next()){ft.index>gt?(ce=ft,ft=null):ce=ft.sibling;var ol=M(R,ft,zt.value,X);if(ol===null){ft===null&&(ft=ce);break}t&&ft&&ol.alternate===null&&e(R,ft),T=o(ol,T,gt),Et===null?st=ol:Et.sibling=ol,Et=ol,ft=ce}if(zt.done)return a(R,ft),Nt&&Al(R,gt),st;if(ft===null){for(;!zt.done;gt++,zt=D.next())zt=Z(R,zt.value,X),zt!==null&&(T=o(zt,T,gt),Et===null?st=zt:Et.sibling=zt,Et=zt);return Nt&&Al(R,gt),st}for(ft=n(ft);!zt.done;gt++,zt=D.next())zt=z(ft,R,gt,zt.value,X),zt!==null&&(t&&zt.alternate!==null&&ft.delete(zt.key===null?gt:zt.key),T=o(zt,T,gt),Et===null?st=zt:Et.sibling=zt,Et=zt);return t&&ft.forEach(function(ny){return e(R,ny)}),Nt&&Al(R,gt),st}function Lt(R,T,D,X){if(typeof D=="object"&&D!==null&&D.type===L&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case O:t:{for(var st=D.key;T!==null;){if(T.key===st){if(st=D.type,st===L){if(T.tag===7){a(R,T.sibling),X=i(T,D.props.children),X.return=R,R=X;break t}}else if(T.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===bt&&Wd(st)===T.type){a(R,T.sibling),X=i(T,D.props),bi(X,D),X.return=R,R=X;break t}a(R,T);break}else e(R,T);T=T.sibling}D.type===L?(X=vl(D.props.children,R.mode,X,D.key),X.return=R,R=X):(X=fr(D.type,D.key,D.props,null,R.mode,X),bi(X,D),X.return=R,R=X)}return f(R);case $:t:{for(st=D.key;T!==null;){if(T.key===st)if(T.tag===4&&T.stateNode.containerInfo===D.containerInfo&&T.stateNode.implementation===D.implementation){a(R,T.sibling),X=i(T,D.children||[]),X.return=R,R=X;break t}else{a(R,T);break}else e(R,T);T=T.sibling}X=Su(D,R.mode,X),X.return=R,R=X}return f(R);case bt:return st=D._init,D=st(D._payload),Lt(R,T,D,X)}if(tt(D))return vt(R,T,D,X);if(V(D)){if(st=V(D),typeof st!="function")throw Error(s(150));return D=st.call(D),mt(R,T,D,X)}if(typeof D.then=="function")return Lt(R,T,kr(D),X);if(D.$$typeof===G)return Lt(R,T,mr(R,D),X);Cr(R,D)}return typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint"?(D=""+D,T!==null&&T.tag===6?(a(R,T.sibling),X=i(T,D),X.return=R,R=X):(a(R,T),X=wu(D,R.mode,X),X.return=R,R=X),f(R)):a(R,T)}return function(R,T,D,X){try{gi=0;var st=Lt(R,T,D,X);return mn=null,st}catch(ft){if(ft===oi||ft===br)throw ft;var Et=ze(29,ft,null,R.mode);return Et.lanes=X,Et.return=R,Et}finally{}}}var gn=Jd(!0),Fd=Jd(!1),Ze=q(null),ua=null;function Va(t){var e=t.alternate;U(ne,ne.current&1),U(Ze,t),ua===null&&(e===null||fn.current!==null||e.memoizedState!==null)&&(ua=t)}function Id(t){if(t.tag===22){if(U(ne,ne.current),U(Ze,t),ua===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(ua=t)}}else Za()}function Za(){U(ne,ne.current),U(Ze,Ze.current)}function Ta(t){at(Ze),ua===t&&(ua=null),at(ne)}var ne=q(0);function Or(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Xs(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function as(t,e,a,n){e=t.memoizedState,a=a(n,e),a=a==null?e:x({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ls={enqueueSetState:function(t,e,a){t=t._reactInternals;var n=Be(),i=qa(n);i.payload=e,a!=null&&(i.callback=a),e=Qa(t,i,n),e!==null&&(He(e,t,n),si(e,t,n))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var n=Be(),i=qa(n);i.tag=1,i.payload=e,a!=null&&(i.callback=a),e=Qa(t,i,n),e!==null&&(He(e,t,n),si(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Be(),n=qa(a);n.tag=2,e!=null&&(n.callback=e),e=Qa(t,n,a),e!==null&&(He(e,t,a),si(e,t,a))}};function Pd(t,e,a,n,i,o,f){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,o,f):e.prototype&&e.prototype.isPureReactComponent?!Pn(a,n)||!Pn(i,o):!0}function th(t,e,a,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,n),e.state!==t&&ls.enqueueReplaceState(e,e.state,null)}function kl(t,e){var a=e;if("ref"in e){a={};for(var n in e)n!=="ref"&&(a[n]=e[n])}if(t=t.defaultProps){a===e&&(a=x({},a));for(var i in t)a[i]===void 0&&(a[i]=t[i])}return a}var Mr=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function eh(t){Mr(t)}function ah(t){console.error(t)}function lh(t){Mr(t)}function zr(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function nh(t,e,a){try{var n=t.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function ns(t,e,a){return a=qa(a),a.tag=3,a.payload={element:null},a.callback=function(){zr(t,e)},a}function ih(t){return t=qa(t),t.tag=3,t}function rh(t,e,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var o=n.value;t.payload=function(){return i(o)},t.callback=function(){nh(e,a,n)}}var f=a.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(t.callback=function(){nh(e,a,n),typeof i!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var h=n.stack;this.componentDidCatch(n.value,{componentStack:h!==null?h:""})})}function nb(t,e,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=a.alternate,e!==null&&ni(e,a,i,!0),a=Ze.current,a!==null){switch(a.tag){case 13:return ua===null?ks():a.alternate===null&&Wt===0&&(Wt=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Nu?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([n]):e.add(n),Os(t,n,i)),!1;case 22:return a.flags|=65536,n===Nu?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([n]):a.add(n)),Os(t,n,i)),!1}throw Error(s(435,a.tag))}return Os(t,n,i),ks(),!1}if(Nt)return e=Ze.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,n!==Ru&&(t=Error(s(422),{cause:n}),li(qe(t,a)))):(n!==Ru&&(e=Error(s(423),{cause:n}),li(qe(e,a))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,n=qe(n,a),i=ns(t.stateNode,n,i),Bu(t,i),Wt!==4&&(Wt=2)),!1;var o=Error(s(520),{cause:n});if(o=qe(o,a),Ei===null?Ei=[o]:Ei.push(o),Wt!==4&&(Wt=2),e===null)return!0;n=qe(n,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=i&-i,a.lanes|=t,t=ns(a.stateNode,n,t),Bu(a,t),!1;case 1:if(e=a.type,o=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(Pa===null||!Pa.has(o))))return a.flags|=65536,i&=-i,a.lanes|=i,i=ih(i),rh(i,t,a,n),Bu(a,i),!1}a=a.return}while(a!==null);return!1}var oh=Error(s(461)),ue=!1;function he(t,e,a,n){e.child=t===null?Fd(e,null,a,n):gn(e,t.child,a,n)}function uh(t,e,a,n,i){a=a.render;var o=e.ref;if("ref"in n){var f={};for(var h in n)h!=="ref"&&(f[h]=n[h])}else f=n;return Tl(e),n=Gu(t,e,a,f,o,i),h=Yu(),t!==null&&!ue?(qu(t,e,i),Ra(t,e,i)):(Nt&&h&&Eu(e),e.flags|=1,he(t,e,n,i),e.child)}function sh(t,e,a,n,i){if(t===null){var o=a.type;return typeof o=="function"&&!Au(o)&&o.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=o,ch(t,e,o,n,i)):(t=fr(a.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!ds(t,i)){var f=o.memoizedProps;if(a=a.compare,a=a!==null?a:Pn,a(f,n)&&t.ref===e.ref)return Ra(t,e,i)}return e.flags|=1,t=va(o,n),t.ref=e.ref,t.return=e,e.child=t}function ch(t,e,a,n,i){if(t!==null){var o=t.memoizedProps;if(Pn(o,n)&&t.ref===e.ref)if(ue=!1,e.pendingProps=n=o,ds(t,i))(t.flags&131072)!==0&&(ue=!0);else return e.lanes=t.lanes,Ra(t,e,i)}return is(t,e,a,n,i)}function fh(t,e,a){var n=e.pendingProps,i=n.children,o=t!==null?t.memoizedState:null;if(n.mode==="hidden"){if((e.flags&128)!==0){if(n=o!==null?o.baseLanes|a:a,t!==null){for(i=e.child=t.child,o=0;i!==null;)o=o|i.lanes|i.childLanes,i=i.sibling;e.childLanes=o&~n}else e.childLanes=0,e.child=null;return dh(t,e,n,a)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&gr(e,o!==null?o.cachePool:null),o!==null?cd(e,o):Uu(),Id(e);else return e.lanes=e.childLanes=536870912,dh(t,e,o!==null?o.baseLanes|a:a,a)}else o!==null?(gr(e,o.cachePool),cd(e,o),Za(),e.memoizedState=null):(t!==null&&gr(e,null),Uu(),Za());return he(t,e,i,a),e.child}function dh(t,e,a,n){var i=zu();return i=i===null?null:{parent:le._currentValue,pool:i},e.memoizedState={baseLanes:a,cachePool:i},t!==null&&gr(e,null),Uu(),Id(e),t!==null&&ni(t,e,n,!0),null}function Nr(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function is(t,e,a,n,i){return Tl(e),a=Gu(t,e,a,n,void 0,i),n=Yu(),t!==null&&!ue?(qu(t,e,i),Ra(t,e,i)):(Nt&&n&&Eu(e),e.flags|=1,he(t,e,a,i),e.child)}function hh(t,e,a,n,i,o){return Tl(e),e.updateQueue=null,a=dd(e,n,a,i),fd(t),n=Yu(),t!==null&&!ue?(qu(t,e,o),Ra(t,e,o)):(Nt&&n&&Eu(e),e.flags|=1,he(t,e,a,o),e.child)}function ph(t,e,a,n,i){if(Tl(e),e.stateNode===null){var o=rn,f=a.contextType;typeof f=="object"&&f!==null&&(o=ve(f)),o=new a(n,o),e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=ls,e.stateNode=o,o._reactInternals=e,o=e.stateNode,o.props=n,o.state=e.memoizedState,o.refs={},ju(e),f=a.contextType,o.context=typeof f=="object"&&f!==null?ve(f):rn,o.state=e.memoizedState,f=a.getDerivedStateFromProps,typeof f=="function"&&(as(e,a,f,n),o.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(f=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),f!==o.state&&ls.enqueueReplaceState(o,o.state,null),fi(e,n,o,i),ci(),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(t===null){o=e.stateNode;var h=e.memoizedProps,S=kl(a,h);o.props=S;var C=o.context,Q=a.contextType;f=rn,typeof Q=="object"&&Q!==null&&(f=ve(Q));var Z=a.getDerivedStateFromProps;Q=typeof Z=="function"||typeof o.getSnapshotBeforeUpdate=="function",h=e.pendingProps!==h,Q||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(h||C!==f)&&th(e,o,n,f),Ya=!1;var M=e.memoizedState;o.state=M,fi(e,n,o,i),ci(),C=e.memoizedState,h||M!==C||Ya?(typeof Z=="function"&&(as(e,a,Z,n),C=e.memoizedState),(S=Ya||Pd(e,a,S,n,M,C,f))?(Q||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=C),o.props=n,o.state=C,o.context=f,n=S):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{o=e.stateNode,_u(t,e),f=e.memoizedProps,Q=kl(a,f),o.props=Q,Z=e.pendingProps,M=o.context,C=a.contextType,S=rn,typeof C=="object"&&C!==null&&(S=ve(C)),h=a.getDerivedStateFromProps,(C=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(f!==Z||M!==S)&&th(e,o,n,S),Ya=!1,M=e.memoizedState,o.state=M,fi(e,n,o,i),ci();var z=e.memoizedState;f!==Z||M!==z||Ya||t!==null&&t.dependencies!==null&&pr(t.dependencies)?(typeof h=="function"&&(as(e,a,h,n),z=e.memoizedState),(Q=Ya||Pd(e,a,Q,n,M,z,S)||t!==null&&t.dependencies!==null&&pr(t.dependencies))?(C||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,z,S),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,z,S)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||f===t.memoizedProps&&M===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||f===t.memoizedProps&&M===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=z),o.props=n,o.state=z,o.context=S,n=Q):(typeof o.componentDidUpdate!="function"||f===t.memoizedProps&&M===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||f===t.memoizedProps&&M===t.memoizedState||(e.flags|=1024),n=!1)}return o=n,Nr(t,e),n=(e.flags&128)!==0,o||n?(o=e.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:o.render(),e.flags|=1,t!==null&&n?(e.child=gn(e,t.child,null,i),e.child=gn(e,null,a,i)):he(t,e,a,i),e.memoizedState=o.state,t=e.child):t=Ra(t,e,i),t}function mh(t,e,a,n){return ai(),e.flags|=256,he(t,e,a,n),e.child}var rs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function os(t){return{baseLanes:t,cachePool:ad()}}function us(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=Ke),t}function gh(t,e,a){var n=e.pendingProps,i=!1,o=(e.flags&128)!==0,f;if((f=o)||(f=t!==null&&t.memoizedState===null?!1:(ne.current&2)!==0),f&&(i=!0,e.flags&=-129),f=(e.flags&32)!==0,e.flags&=-33,t===null){if(Nt){if(i?Va(e):Za(),Nt){var h=Kt,S;if(S=h){t:{for(S=h,h=oa;S.nodeType!==8;){if(!h){h=null;break t}if(S=Pe(S.nextSibling),S===null){h=null;break t}}h=S}h!==null?(e.memoizedState={dehydrated:h,treeContext:xl!==null?{id:xa,overflow:Aa}:null,retryLane:536870912,hydrationErrors:null},S=ze(18,null,null,0),S.stateNode=h,S.return=e,e.child=S,Se=e,Kt=null,S=!0):S=!1}S||Sl(e)}if(h=e.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return Xs(h)?e.lanes=32:e.lanes=536870912,null;Ta(e)}return h=n.children,n=n.fallback,i?(Za(),i=e.mode,h=jr({mode:"hidden",children:h},i),n=vl(n,i,a,null),h.return=e,n.return=e,h.sibling=n,e.child=h,i=e.child,i.memoizedState=os(a),i.childLanes=us(t,f,a),e.memoizedState=rs,n):(Va(e),ss(e,h))}if(S=t.memoizedState,S!==null&&(h=S.dehydrated,h!==null)){if(o)e.flags&256?(Va(e),e.flags&=-257,e=cs(t,e,a)):e.memoizedState!==null?(Za(),e.child=t.child,e.flags|=128,e=null):(Za(),i=n.fallback,h=e.mode,n=jr({mode:"visible",children:n.children},h),i=vl(i,h,a,null),i.flags|=2,n.return=e,i.return=e,n.sibling=i,e.child=n,gn(e,t.child,null,a),n=e.child,n.memoizedState=os(a),n.childLanes=us(t,f,a),e.memoizedState=rs,e=i);else if(Va(e),Xs(h)){if(f=h.nextSibling&&h.nextSibling.dataset,f)var C=f.dgst;f=C,n=Error(s(419)),n.stack="",n.digest=f,li({value:n,source:null,stack:null}),e=cs(t,e,a)}else if(ue||ni(t,e,a,!1),f=(a&t.childLanes)!==0,ue||f){if(f=Yt,f!==null&&(n=a&-a,n=(n&42)!==0?1:Vo(n),n=(n&(f.suspendedLanes|a))!==0?0:n,n!==0&&n!==S.retryLane))throw S.retryLane=n,nn(t,n),He(f,t,n),oh;h.data==="$?"||ks(),e=cs(t,e,a)}else h.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=S.treeContext,Kt=Pe(h.nextSibling),Se=e,Nt=!0,wl=null,oa=!1,t!==null&&(Xe[Ve++]=xa,Xe[Ve++]=Aa,Xe[Ve++]=xl,xa=t.id,Aa=t.overflow,xl=e),e=ss(e,n.children),e.flags|=4096);return e}return i?(Za(),i=n.fallback,h=e.mode,S=t.child,C=S.sibling,n=va(S,{mode:"hidden",children:n.children}),n.subtreeFlags=S.subtreeFlags&65011712,C!==null?i=va(C,i):(i=vl(i,h,a,null),i.flags|=2),i.return=e,n.return=e,n.sibling=i,e.child=n,n=i,i=e.child,h=t.child.memoizedState,h===null?h=os(a):(S=h.cachePool,S!==null?(C=le._currentValue,S=S.parent!==C?{parent:C,pool:C}:S):S=ad(),h={baseLanes:h.baseLanes|a,cachePool:S}),i.memoizedState=h,i.childLanes=us(t,f,a),e.memoizedState=rs,n):(Va(e),a=t.child,t=a.sibling,a=va(a,{mode:"visible",children:n.children}),a.return=e,a.sibling=null,t!==null&&(f=e.deletions,f===null?(e.deletions=[t],e.flags|=16):f.push(t)),e.child=a,e.memoizedState=null,a)}function ss(t,e){return e=jr({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function jr(t,e){return t=ze(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function cs(t,e,a){return gn(e,t.child,null,a),t=ss(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function bh(t,e,a){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),ku(t.return,e,a)}function fs(t,e,a,n,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=a,o.tailMode=i)}function yh(t,e,a){var n=e.pendingProps,i=n.revealOrder,o=n.tail;if(he(t,e,n.children,a),n=ne.current,(n&2)!==0)n=n&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bh(t,a,e);else if(t.tag===19)bh(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}switch(U(ne,n),i){case"forwards":for(a=e.child,i=null;a!==null;)t=a.alternate,t!==null&&Or(t)===null&&(i=a),a=a.sibling;a=i,a===null?(i=e.child,e.child=null):(i=a.sibling,a.sibling=null),fs(e,!1,i,a,o);break;case"backwards":for(a=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Or(t)===null){e.child=i;break}t=i.sibling,i.sibling=a,a=i,i=t}fs(e,!0,a,null,o);break;case"together":fs(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ra(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),Ia|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(ni(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,a=va(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=va(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function ds(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&pr(t)))}function ib(t,e,a){switch(e.tag){case 3:ht(e,e.stateNode.containerInfo),Ga(e,le,t.memoizedState.cache),ai();break;case 27:case 5:yt(e);break;case 4:ht(e,e.stateNode.containerInfo);break;case 10:Ga(e,e.type,e.memoizedProps.value);break;case 13:var n=e.memoizedState;if(n!==null)return n.dehydrated!==null?(Va(e),e.flags|=128,null):(a&e.child.childLanes)!==0?gh(t,e,a):(Va(e),t=Ra(t,e,a),t!==null?t.sibling:null);Va(e);break;case 19:var i=(t.flags&128)!==0;if(n=(a&e.childLanes)!==0,n||(ni(t,e,a,!1),n=(a&e.childLanes)!==0),i){if(n)return yh(t,e,a);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(ne,ne.current),n)break;return null;case 22:case 23:return e.lanes=0,fh(t,e,a);case 24:Ga(e,le,t.memoizedState.cache)}return Ra(t,e,a)}function vh(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)ue=!0;else{if(!ds(t,a)&&(e.flags&128)===0)return ue=!1,ib(t,e,a);ue=(t.flags&131072)!==0}else ue=!1,Nt&&(e.flags&1048576)!==0&&Wf(e,hr,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var n=e.elementType,i=n._init;if(n=i(n._payload),e.type=n,typeof n=="function")Au(n)?(t=kl(n,t),e.tag=1,e=ph(null,e,n,t,a)):(e.tag=0,e=is(null,e,n,t,a));else{if(n!=null){if(i=n.$$typeof,i===F){e.tag=11,e=uh(null,e,n,t,a);break t}else if(i===it){e.tag=14,e=sh(null,e,n,t,a);break t}}throw e=j(n)||n,Error(s(306,e,""))}}return e;case 0:return is(t,e,e.type,e.pendingProps,a);case 1:return n=e.type,i=kl(n,e.pendingProps),ph(t,e,n,i,a);case 3:t:{if(ht(e,e.stateNode.containerInfo),t===null)throw Error(s(387));n=e.pendingProps;var o=e.memoizedState;i=o.element,_u(t,e),fi(e,n,null,a);var f=e.memoizedState;if(n=f.cache,Ga(e,le,n),n!==o.cache&&Cu(e,[le],a,!0),ci(),n=f.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:f.cache},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){e=mh(t,e,n,a);break t}else if(n!==i){i=qe(Error(s(424)),e),li(i),e=mh(t,e,n,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Kt=Pe(t.firstChild),Se=e,Nt=!0,wl=null,oa=!0,a=Fd(e,null,n,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ai(),n===i){e=Ra(t,e,a);break t}he(t,e,n,a)}e=e.child}return e;case 26:return Nr(t,e),t===null?(a=Sp(e.type,null,e.pendingProps,null))?e.memoizedState=a:Nt||(a=e.type,t=e.pendingProps,n=Kr(lt.current).createElement(a),n[ye]=e,n[Te]=t,me(n,a,t),oe(n),e.stateNode=n):e.memoizedState=Sp(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return yt(e),t===null&&Nt&&(n=e.stateNode=xp(e.type,e.pendingProps,lt.current),Se=e,oa=!0,i=Kt,al(e.type)?(Vs=i,Kt=Pe(n.firstChild)):Kt=i),he(t,e,e.pendingProps.children,a),Nr(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Nt&&((i=n=Kt)&&(n=Nb(n,e.type,e.pendingProps,oa),n!==null?(e.stateNode=n,Se=e,Kt=Pe(n.firstChild),oa=!1,i=!0):i=!1),i||Sl(e)),yt(e),i=e.type,o=e.pendingProps,f=t!==null?t.memoizedProps:null,n=o.children,Ys(i,o)?n=null:f!==null&&Ys(i,f)&&(e.flags|=32),e.memoizedState!==null&&(i=Gu(t,e,F0,null,null,a),Ni._currentValue=i),Nr(t,e),he(t,e,n,a),e.child;case 6:return t===null&&Nt&&((t=a=Kt)&&(a=jb(a,e.pendingProps,oa),a!==null?(e.stateNode=a,Se=e,Kt=null,t=!0):t=!1),t||Sl(e)),null;case 13:return gh(t,e,a);case 4:return ht(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=gn(e,null,n,a):he(t,e,n,a),e.child;case 11:return uh(t,e,e.type,e.pendingProps,a);case 7:return he(t,e,e.pendingProps,a),e.child;case 8:return he(t,e,e.pendingProps.children,a),e.child;case 12:return he(t,e,e.pendingProps.children,a),e.child;case 10:return n=e.pendingProps,Ga(e,e.type,n.value),he(t,e,n.children,a),e.child;case 9:return i=e.type._context,n=e.pendingProps.children,Tl(e),i=ve(i),n=n(i),e.flags|=1,he(t,e,n,a),e.child;case 14:return sh(t,e,e.type,e.pendingProps,a);case 15:return ch(t,e,e.type,e.pendingProps,a);case 19:return yh(t,e,a);case 31:return n=e.pendingProps,a=e.mode,n={mode:n.mode,children:n.children},t===null?(a=jr(n,a),a.ref=e.ref,e.child=a,a.return=e,e=a):(a=va(t.child,n),a.ref=e.ref,e.child=a,a.return=e,e=a),e;case 22:return fh(t,e,a);case 24:return Tl(e),n=ve(le),t===null?(i=zu(),i===null&&(i=Yt,o=Ou(),i.pooledCache=o,o.refCount++,o!==null&&(i.pooledCacheLanes|=a),i=o),e.memoizedState={parent:n,cache:i},ju(e),Ga(e,le,i)):((t.lanes&a)!==0&&(_u(t,e),fi(e,null,null,a),ci()),i=t.memoizedState,o=e.memoizedState,i.parent!==n?(i={parent:n,cache:n},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),Ga(e,le,n)):(n=o.cache,Ga(e,le,n),n!==i.cache&&Cu(e,[le],a,!0))),he(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function Da(t){t.flags|=4}function xh(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!kp(e)){if(e=Ze.current,e!==null&&((Mt&4194048)===Mt?ua!==null:(Mt&62914560)!==Mt&&(Mt&536870912)===0||e!==ua))throw ui=Nu,ld;t.flags|=8192}}function _r(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Fc():536870912,t.lanes|=e,xn|=e)}function yi(t,e){if(!Nt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function Zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,n=0;if(e)for(var i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=a,e}function rb(t,e,a){var n=e.pendingProps;switch(Tu(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(e),null;case 1:return Zt(e),null;case 3:return a=e.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Sa(le),K(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ei(e)?Da(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,If())),Zt(e),null;case 26:return a=e.memoizedState,t===null?(Da(e),a!==null?(Zt(e),xh(e,a)):(Zt(e),e.flags&=-16777217)):a?a!==t.memoizedState?(Da(e),Zt(e),xh(e,a)):(Zt(e),e.flags&=-16777217):(t.memoizedProps!==n&&Da(e),Zt(e),e.flags&=-16777217),null;case 27:pt(e),a=lt.current;var i=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==n&&Da(e);else{if(!n){if(e.stateNode===null)throw Error(s(166));return Zt(e),null}t=W.current,ei(e)?Jf(e):(t=xp(i,n,a),e.stateNode=t,Da(e))}return Zt(e),null;case 5:if(pt(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&Da(e);else{if(!n){if(e.stateNode===null)throw Error(s(166));return Zt(e),null}if(t=W.current,ei(e))Jf(e);else{switch(i=Kr(lt.current),t){case 1:t=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=i.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?t.multiple=!0:n.size&&(t.size=n.size);break;default:t=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}t[ye]=e,t[Te]=n;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=t;t:switch(me(t,a,n),a){case"button":case"input":case"select":case"textarea":t=!!n.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Da(e)}}return Zt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==n&&Da(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(s(166));if(t=lt.current,ei(e)){if(t=e.stateNode,a=e.memoizedProps,n=null,i=Se,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}t[ye]=e,t=!!(t.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||hp(t.nodeValue,a)),t||Sl(e)}else t=Kr(t).createTextNode(n),t[ye]=e,e.stateNode=t}return Zt(e),null;case 13:if(n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=ei(e),n!==null&&n.dehydrated!==null){if(t===null){if(!i)throw Error(s(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));i[ye]=e}else ai(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Zt(e),i=!1}else i=If(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(Ta(e),e):(Ta(e),null)}if(Ta(e),(e.flags&128)!==0)return e.lanes=a,e;if(a=n!==null,t=t!==null&&t.memoizedState!==null,a){n=e.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool);var o=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==i&&(n.flags|=2048)}return a!==t&&a&&(e.child.flags|=8192),_r(e,e.updateQueue),Zt(e),null;case 4:return K(),t===null&&Hs(e.stateNode.containerInfo),Zt(e),null;case 10:return Sa(e.type),Zt(e),null;case 19:if(at(ne),i=e.memoizedState,i===null)return Zt(e),null;if(n=(e.flags&128)!==0,o=i.rendering,o===null)if(n)yi(i,!1);else{if(Wt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Or(t),o!==null){for(e.flags|=128,yi(i,!1),t=o.updateQueue,e.updateQueue=t,_r(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Kf(a,t),a=a.sibling;return U(ne,ne.current&1|2),e.child}t=t.sibling}i.tail!==null&&Qt()>Ur&&(e.flags|=128,n=!0,yi(i,!1),e.lanes=4194304)}else{if(!n)if(t=Or(o),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,_r(e,t),yi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Nt)return Zt(e),null}else 2*Qt()-i.renderingStartTime>Ur&&a!==536870912&&(e.flags|=128,n=!0,yi(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(t=i.last,t!==null?t.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Qt(),e.sibling=null,t=ne.current,U(ne,n?t&1|2:t&1),e):(Zt(e),null);case 22:case 23:return Ta(e),$u(),n=e.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?(a&536870912)!==0&&(e.flags&128)===0&&(Zt(e),e.subtreeFlags&6&&(e.flags|=8192)):Zt(e),a=e.updateQueue,a!==null&&_r(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==a&&(e.flags|=2048),t!==null&&at(Rl),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Sa(le),Zt(e),null;case 25:return null;case 30:return null}throw Error(s(156,e.tag))}function ob(t,e){switch(Tu(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Sa(le),K(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return pt(e),null;case 13:if(Ta(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));ai()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return at(ne),null;case 4:return K(),null;case 10:return Sa(e.type),null;case 22:case 23:return Ta(e),$u(),t!==null&&at(Rl),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Sa(le),null;case 25:return null;default:return null}}function Ah(t,e){switch(Tu(e),e.tag){case 3:Sa(le),K();break;case 26:case 27:case 5:pt(e);break;case 4:K();break;case 13:Ta(e);break;case 19:at(ne);break;case 10:Sa(e.type);break;case 22:case 23:Ta(e),$u(),t!==null&&at(Rl);break;case 24:Sa(le)}}function vi(t,e){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){n=void 0;var o=a.create,f=a.inst;n=o(),f.destroy=n}a=a.next}while(a!==i)}}catch(h){Gt(e,e.return,h)}}function Ka(t,e,a){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var o=i.next;n=o;do{if((n.tag&t)===t){var f=n.inst,h=f.destroy;if(h!==void 0){f.destroy=void 0,i=e;var S=a,C=h;try{C()}catch(Q){Gt(i,S,Q)}}}n=n.next}while(n!==o)}}catch(Q){Gt(e,e.return,Q)}}function wh(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{sd(e,a)}catch(n){Gt(t,t.return,n)}}}function Sh(t,e,a){a.props=kl(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(n){Gt(t,e,n)}}function xi(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;case 30:n=t.stateNode;break;default:n=t.stateNode}typeof a=="function"?t.refCleanup=a(n):a.current=n}}catch(i){Gt(t,e,i)}}function sa(t,e){var a=t.ref,n=t.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){Gt(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Gt(t,e,i)}else a.current=null}function Eh(t){var e=t.type,a=t.memoizedProps,n=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break t;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){Gt(t,t.return,i)}}function hs(t,e,a){try{var n=t.stateNode;kb(n,t.type,a,e),n[Te]=e}catch(i){Gt(t,t.return,i)}}function Th(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&al(t.type)||t.tag===4}function ps(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Th(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&al(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ms(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=Zr));else if(n!==4&&(n===27&&al(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(ms(t,e,a),t=t.sibling;t!==null;)ms(t,e,a),t=t.sibling}function Br(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(n!==4&&(n===27&&al(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Br(t,e,a),t=t.sibling;t!==null;)Br(t,e,a),t=t.sibling}function Rh(t){var e=t.stateNode,a=t.memoizedProps;try{for(var n=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);me(e,n,a),e[ye]=t,e[Te]=a}catch(o){Gt(t,t.return,o)}}var ka=!1,It=!1,gs=!1,Dh=typeof WeakSet=="function"?WeakSet:Set,se=null;function ub(t,e){if(t=t.containerInfo,Ls=to,t=Uf(t),pu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{a.nodeType,o.nodeType}catch{a=null;break t}var f=0,h=-1,S=-1,C=0,Q=0,Z=t,M=null;e:for(;;){for(var z;Z!==a||i!==0&&Z.nodeType!==3||(h=f+i),Z!==o||n!==0&&Z.nodeType!==3||(S=f+n),Z.nodeType===3&&(f+=Z.nodeValue.length),(z=Z.firstChild)!==null;)M=Z,Z=z;for(;;){if(Z===t)break e;if(M===a&&++C===i&&(h=f),M===o&&++Q===n&&(S=f),(z=Z.nextSibling)!==null)break;Z=M,M=Z.parentNode}Z=z}a=h===-1||S===-1?null:{start:h,end:S}}else a=null}a=a||{start:0,end:0}}else a=null;for(Gs={focusedElem:t,selectionRange:a},to=!1,se=e;se!==null;)if(e=se,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,se=t;else for(;se!==null;){switch(e=se,o=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&o!==null){t=void 0,a=e,i=o.memoizedProps,o=o.memoizedState,n=a.stateNode;try{var vt=kl(a.type,i,a.elementType===a.type);t=n.getSnapshotBeforeUpdate(vt,o),n.__reactInternalSnapshotBeforeUpdate=t}catch(mt){Gt(a,a.return,mt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)Qs(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Qs(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=e.sibling,t!==null){t.return=e.return,se=t;break}se=e.return}}function kh(t,e,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Wa(t,a),n&4&&vi(5,a);break;case 1:if(Wa(t,a),n&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(f){Gt(a,a.return,f)}else{var i=kl(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(f){Gt(a,a.return,f)}}n&64&&wh(a),n&512&&xi(a,a.return);break;case 3:if(Wa(t,a),n&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{sd(t,e)}catch(f){Gt(a,a.return,f)}}break;case 27:e===null&&n&4&&Rh(a);case 26:case 5:Wa(t,a),e===null&&n&4&&Eh(a),n&512&&xi(a,a.return);break;case 12:Wa(t,a);break;case 13:Wa(t,a),n&4&&Mh(t,a),n&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=bb.bind(null,a),_b(t,a))));break;case 22:if(n=a.memoizedState!==null||ka,!n){e=e!==null&&e.memoizedState!==null||It,i=ka;var o=It;ka=n,(It=e)&&!o?Ja(t,a,(a.subtreeFlags&8772)!==0):Wa(t,a),ka=i,It=o}break;case 30:break;default:Wa(t,a)}}function Ch(t){var e=t.alternate;e!==null&&(t.alternate=null,Ch(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Wo(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Vt=null,ke=!1;function Ca(t,e,a){for(a=a.child;a!==null;)Oh(t,e,a),a=a.sibling}function Oh(t,e,a){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(Ua,a)}catch{}switch(a.tag){case 26:It||sa(a,e),Ca(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:It||sa(a,e);var n=Vt,i=ke;al(a.type)&&(Vt=a.stateNode,ke=!1),Ca(t,e,a),Ci(a.stateNode),Vt=n,ke=i;break;case 5:It||sa(a,e);case 6:if(n=Vt,i=ke,Vt=null,Ca(t,e,a),Vt=n,ke=i,Vt!==null)if(ke)try{(Vt.nodeType===9?Vt.body:Vt.nodeName==="HTML"?Vt.ownerDocument.body:Vt).removeChild(a.stateNode)}catch(o){Gt(a,e,o)}else try{Vt.removeChild(a.stateNode)}catch(o){Gt(a,e,o)}break;case 18:Vt!==null&&(ke?(t=Vt,yp(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Hi(t)):yp(Vt,a.stateNode));break;case 4:n=Vt,i=ke,Vt=a.stateNode.containerInfo,ke=!0,Ca(t,e,a),Vt=n,ke=i;break;case 0:case 11:case 14:case 15:It||Ka(2,a,e),It||Ka(4,a,e),Ca(t,e,a);break;case 1:It||(sa(a,e),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Sh(a,e,n)),Ca(t,e,a);break;case 21:Ca(t,e,a);break;case 22:It=(n=It)||a.memoizedState!==null,Ca(t,e,a),It=n;break;default:Ca(t,e,a)}}function Mh(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Hi(t)}catch(a){Gt(e,e.return,a)}}function sb(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Dh),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Dh),e;default:throw Error(s(435,t.tag))}}function bs(t,e){var a=sb(t);e.forEach(function(n){var i=yb.bind(null,t,n);a.has(n)||(a.add(n),n.then(i,i))})}function Ne(t,e){var a=e.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],o=t,f=e,h=f;t:for(;h!==null;){switch(h.tag){case 27:if(al(h.type)){Vt=h.stateNode,ke=!1;break t}break;case 5:Vt=h.stateNode,ke=!1;break t;case 3:case 4:Vt=h.stateNode.containerInfo,ke=!0;break t}h=h.return}if(Vt===null)throw Error(s(160));Oh(o,f,i),Vt=null,ke=!1,o=i.alternate,o!==null&&(o.return=null),i.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)zh(e,t),e=e.sibling}var Ie=null;function zh(t,e){var a=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ne(e,t),je(t),n&4&&(Ka(3,t,t.return),vi(3,t),Ka(5,t,t.return));break;case 1:Ne(e,t),je(t),n&512&&(It||a===null||sa(a,a.return)),n&64&&ka&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Ie;if(Ne(e,t),je(t),n&512&&(It||a===null||sa(a,a.return)),n&4){var o=a!==null?a.memoizedState:null;if(n=t.memoizedState,a===null)if(n===null)if(t.stateNode===null){t:{n=t.type,a=t.memoizedProps,i=i.ownerDocument||i;e:switch(n){case"title":o=i.getElementsByTagName("title")[0],(!o||o[Qn]||o[ye]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=i.createElement(n),i.head.insertBefore(o,i.querySelector("head > title"))),me(o,n,a),o[ye]=t,oe(o),n=o;break t;case"link":var f=Rp("link","href",i).get(n+(a.href||""));if(f){for(var h=0;h<f.length;h++)if(o=f[h],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(h,1);break e}}o=i.createElement(n),me(o,n,a),i.head.appendChild(o);break;case"meta":if(f=Rp("meta","content",i).get(n+(a.content||""))){for(h=0;h<f.length;h++)if(o=f[h],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(h,1);break e}}o=i.createElement(n),me(o,n,a),i.head.appendChild(o);break;default:throw Error(s(468,n))}o[ye]=t,oe(o),n=o}t.stateNode=n}else Dp(i,t.type,t.stateNode);else t.stateNode=Tp(i,n,t.memoizedProps);else o!==n?(o===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):o.count--,n===null?Dp(i,t.type,t.stateNode):Tp(i,n,t.memoizedProps)):n===null&&t.stateNode!==null&&hs(t,t.memoizedProps,a.memoizedProps)}break;case 27:Ne(e,t),je(t),n&512&&(It||a===null||sa(a,a.return)),a!==null&&n&4&&hs(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Ne(e,t),je(t),n&512&&(It||a===null||sa(a,a.return)),t.flags&32){i=t.stateNode;try{Fl(i,"")}catch(z){Gt(t,t.return,z)}}n&4&&t.stateNode!=null&&(i=t.memoizedProps,hs(t,i,a!==null?a.memoizedProps:i)),n&1024&&(gs=!0);break;case 6:if(Ne(e,t),je(t),n&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n}catch(z){Gt(t,t.return,z)}}break;case 3:if(Fr=null,i=Ie,Ie=Wr(e.containerInfo),Ne(e,t),Ie=i,je(t),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Hi(e.containerInfo)}catch(z){Gt(t,t.return,z)}gs&&(gs=!1,Nh(t));break;case 4:n=Ie,Ie=Wr(t.stateNode.containerInfo),Ne(e,t),je(t),Ie=n;break;case 12:Ne(e,t),je(t);break;case 13:Ne(e,t),je(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ss=Qt()),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,bs(t,n)));break;case 22:i=t.memoizedState!==null;var S=a!==null&&a.memoizedState!==null,C=ka,Q=It;if(ka=C||i,It=Q||S,Ne(e,t),It=Q,ka=C,je(t),n&8192)t:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(a===null||S||ka||It||Cl(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){S=a=e;try{if(o=S.stateNode,i)f=o.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{h=S.stateNode;var Z=S.memoizedProps.style,M=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;h.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(z){Gt(S,S.return,z)}}}else if(e.tag===6){if(a===null){S=e;try{S.stateNode.nodeValue=i?"":S.memoizedProps}catch(z){Gt(S,S.return,z)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}n&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,bs(t,a))));break;case 19:Ne(e,t),je(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,bs(t,n)));break;case 30:break;case 21:break;default:Ne(e,t),je(t)}}function je(t){var e=t.flags;if(e&2){try{for(var a,n=t.return;n!==null;){if(Th(n)){a=n;break}n=n.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var i=a.stateNode,o=ps(t);Br(t,o,i);break;case 5:var f=a.stateNode;a.flags&32&&(Fl(f,""),a.flags&=-33);var h=ps(t);Br(t,h,f);break;case 3:case 4:var S=a.stateNode.containerInfo,C=ps(t);ms(t,C,S);break;default:throw Error(s(161))}}catch(Q){Gt(t,t.return,Q)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Nh(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Nh(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Wa(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)kh(t,e.alternate,e),e=e.sibling}function Cl(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Ka(4,e,e.return),Cl(e);break;case 1:sa(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&Sh(e,e.return,a),Cl(e);break;case 27:Ci(e.stateNode);case 26:case 5:sa(e,e.return),Cl(e);break;case 22:e.memoizedState===null&&Cl(e);break;case 30:Cl(e);break;default:Cl(e)}t=t.sibling}}function Ja(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var n=e.alternate,i=t,o=e,f=o.flags;switch(o.tag){case 0:case 11:case 15:Ja(i,o,a),vi(4,o);break;case 1:if(Ja(i,o,a),n=o,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(C){Gt(n,n.return,C)}if(n=o,i=n.updateQueue,i!==null){var h=n.stateNode;try{var S=i.shared.hiddenCallbacks;if(S!==null)for(i.shared.hiddenCallbacks=null,i=0;i<S.length;i++)ud(S[i],h)}catch(C){Gt(n,n.return,C)}}a&&f&64&&wh(o),xi(o,o.return);break;case 27:Rh(o);case 26:case 5:Ja(i,o,a),a&&n===null&&f&4&&Eh(o),xi(o,o.return);break;case 12:Ja(i,o,a);break;case 13:Ja(i,o,a),a&&f&4&&Mh(i,o);break;case 22:o.memoizedState===null&&Ja(i,o,a),xi(o,o.return);break;case 30:break;default:Ja(i,o,a)}e=e.sibling}}function ys(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ii(a))}function vs(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ii(t))}function ca(t,e,a,n){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jh(t,e,a,n),e=e.sibling}function jh(t,e,a,n){var i=e.flags;switch(e.tag){case 0:case 11:case 15:ca(t,e,a,n),i&2048&&vi(9,e);break;case 1:ca(t,e,a,n);break;case 3:ca(t,e,a,n),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ii(t)));break;case 12:if(i&2048){ca(t,e,a,n),t=e.stateNode;try{var o=e.memoizedProps,f=o.id,h=o.onPostCommit;typeof h=="function"&&h(f,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(S){Gt(e,e.return,S)}}else ca(t,e,a,n);break;case 13:ca(t,e,a,n);break;case 23:break;case 22:o=e.stateNode,f=e.alternate,e.memoizedState!==null?o._visibility&2?ca(t,e,a,n):Ai(t,e):o._visibility&2?ca(t,e,a,n):(o._visibility|=2,bn(t,e,a,n,(e.subtreeFlags&10256)!==0)),i&2048&&ys(f,e);break;case 24:ca(t,e,a,n),i&2048&&vs(e.alternate,e);break;default:ca(t,e,a,n)}}function bn(t,e,a,n,i){for(i=i&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var o=t,f=e,h=a,S=n,C=f.flags;switch(f.tag){case 0:case 11:case 15:bn(o,f,h,S,i),vi(8,f);break;case 23:break;case 22:var Q=f.stateNode;f.memoizedState!==null?Q._visibility&2?bn(o,f,h,S,i):Ai(o,f):(Q._visibility|=2,bn(o,f,h,S,i)),i&&C&2048&&ys(f.alternate,f);break;case 24:bn(o,f,h,S,i),i&&C&2048&&vs(f.alternate,f);break;default:bn(o,f,h,S,i)}e=e.sibling}}function Ai(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,n=e,i=n.flags;switch(n.tag){case 22:Ai(a,n),i&2048&&ys(n.alternate,n);break;case 24:Ai(a,n),i&2048&&vs(n.alternate,n);break;default:Ai(a,n)}e=e.sibling}}var wi=8192;function yn(t){if(t.subtreeFlags&wi)for(t=t.child;t!==null;)_h(t),t=t.sibling}function _h(t){switch(t.tag){case 26:yn(t),t.flags&wi&&t.memoizedState!==null&&Kb(Ie,t.memoizedState,t.memoizedProps);break;case 5:yn(t);break;case 3:case 4:var e=Ie;Ie=Wr(t.stateNode.containerInfo),yn(t),Ie=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=wi,wi=16777216,yn(t),wi=e):yn(t));break;default:yn(t)}}function Bh(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Si(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];se=n,Uh(n,t)}Bh(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Hh(t),t=t.sibling}function Hh(t){switch(t.tag){case 0:case 11:case 15:Si(t),t.flags&2048&&Ka(9,t,t.return);break;case 3:Si(t);break;case 12:Si(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Hr(t)):Si(t);break;default:Si(t)}}function Hr(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];se=n,Uh(n,t)}Bh(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ka(8,e,e.return),Hr(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Hr(e));break;default:Hr(e)}t=t.sibling}}function Uh(t,e){for(;se!==null;){var a=se;switch(a.tag){case 0:case 11:case 15:Ka(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:ii(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,se=n;else t:for(a=t;se!==null;){n=se;var i=n.sibling,o=n.return;if(Ch(n),n===a){se=null;break t}if(i!==null){i.return=o,se=i;break t}se=o}}}var cb={getCacheForType:function(t){var e=ve(le),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a}},fb=typeof WeakMap=="function"?WeakMap:Map,Bt=0,Yt=null,Rt=null,Mt=0,Ht=0,_e=null,Fa=!1,vn=!1,xs=!1,Oa=0,Wt=0,Ia=0,Ol=0,As=0,Ke=0,xn=0,Ei=null,Ce=null,ws=!1,Ss=0,Ur=1/0,$r=null,Pa=null,pe=0,tl=null,An=null,wn=0,Es=0,Ts=null,$h=null,Ti=0,Rs=null;function Be(){if((Bt&2)!==0&&Mt!==0)return Mt&-Mt;if(k.T!==null){var t=sn;return t!==0?t:Ns()}return tf()}function Lh(){Ke===0&&(Ke=(Mt&536870912)===0||Nt?Jc():536870912);var t=Ze.current;return t!==null&&(t.flags|=32),Ke}function He(t,e,a){(t===Yt&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)&&(Sn(t,0),el(t,Mt,Ke,!1)),qn(t,a),((Bt&2)===0||t!==Yt)&&(t===Yt&&((Bt&2)===0&&(Ol|=a),Wt===4&&el(t,Mt,Ke,!1)),fa(t))}function Gh(t,e,a){if((Bt&6)!==0)throw Error(s(327));var n=!a&&(e&124)===0&&(e&t.expiredLanes)===0||pl(t,e),i=n?pb(t,e):Cs(t,e,!0),o=n;do{if(i===0){vn&&!n&&el(t,e,0,!1);break}else{if(a=t.current.alternate,o&&!db(a)){i=Cs(t,e,!1),o=!1;continue}if(i===2){if(o=e,t.errorRecoveryDisabledLanes&o)var f=0;else f=t.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){e=f;t:{var h=t;i=Ei;var S=h.current.memoizedState.isDehydrated;if(S&&(Sn(h,f).flags|=256),f=Cs(h,f,!1),f!==2){if(xs&&!S){h.errorRecoveryDisabledLanes|=o,Ol|=o,i=4;break t}o=Ce,Ce=i,o!==null&&(Ce===null?Ce=o:Ce.push.apply(Ce,o))}i=f}if(o=!1,i!==2)continue}}if(i===1){Sn(t,0),el(t,e,0,!0);break}t:{switch(n=t,o=i,o){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e)break;case 6:el(n,e,Ke,!Fa);break t;case 2:Ce=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(i=Ss+300-Qt(),10<i)){if(el(n,e,Ke,!Fa),ql(n,0,!0)!==0)break t;n.timeoutHandle=gp(Yh.bind(null,n,a,Ce,$r,ws,e,Ke,Ol,xn,Fa,o,2,-0,0),i);break t}Yh(n,a,Ce,$r,ws,e,Ke,Ol,xn,Fa,o,0,-0,0)}}break}while(!0);fa(t)}function Yh(t,e,a,n,i,o,f,h,S,C,Q,Z,M,z){if(t.timeoutHandle=-1,Z=e.subtreeFlags,(Z&8192||(Z&16785408)===16785408)&&(zi={stylesheets:null,count:0,unsuspend:Zb},_h(e),Z=Wb(),Z!==null)){t.cancelPendingCommit=Z(Wh.bind(null,t,e,o,a,n,i,f,h,S,Q,1,M,z)),el(t,o,f,!C);return}Wh(t,e,o,a,n,i,f,h,S)}function db(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],o=i.getSnapshot;i=i.value;try{if(!Me(o(),i))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function el(t,e,a,n){e&=~As,e&=~Ol,t.suspendedLanes|=e,t.pingedLanes&=~e,n&&(t.warmLanes|=e),n=t.expirationTimes;for(var i=e;0<i;){var o=31-we(i),f=1<<o;n[o]=-1,i&=~f}a!==0&&Ic(t,a,e)}function Lr(){return(Bt&6)===0?(Ri(0),!1):!0}function Ds(){if(Rt!==null){if(Ht===0)var t=Rt.return;else t=Rt,wa=El=null,Qu(t),mn=null,gi=0,t=Rt;for(;t!==null;)Ah(t.alternate,t),t=t.return;Rt=null}}function Sn(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Ob(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ds(),Yt=t,Rt=a=va(t.current,null),Mt=e,Ht=0,_e=null,Fa=!1,vn=pl(t,e),xs=!1,xn=Ke=As=Ol=Ia=Wt=0,Ce=Ei=null,ws=!1,(e&8)!==0&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var i=31-we(n),o=1<<i;e|=t[i],n&=~o}return Oa=e,ur(),a}function qh(t,e){St=null,k.H=Dr,e===oi||e===br?(e=rd(),Ht=3):e===ld?(e=rd(),Ht=4):Ht=e===oh?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,_e=e,Rt===null&&(Wt=1,zr(t,qe(e,t.current)))}function Qh(){var t=k.H;return k.H=Dr,t===null?Dr:t}function Xh(){var t=k.A;return k.A=cb,t}function ks(){Wt=4,Fa||(Mt&4194048)!==Mt&&Ze.current!==null||(vn=!0),(Ia&134217727)===0&&(Ol&134217727)===0||Yt===null||el(Yt,Mt,Ke,!1)}function Cs(t,e,a){var n=Bt;Bt|=2;var i=Qh(),o=Xh();(Yt!==t||Mt!==e)&&($r=null,Sn(t,e)),e=!1;var f=Wt;t:do try{if(Ht!==0&&Rt!==null){var h=Rt,S=_e;switch(Ht){case 8:Ds(),f=6;break t;case 3:case 2:case 9:case 6:Ze.current===null&&(e=!0);var C=Ht;if(Ht=0,_e=null,En(t,h,S,C),a&&vn){f=0;break t}break;default:C=Ht,Ht=0,_e=null,En(t,h,S,C)}}hb(),f=Wt;break}catch(Q){qh(t,Q)}while(!0);return e&&t.shellSuspendCounter++,wa=El=null,Bt=n,k.H=i,k.A=o,Rt===null&&(Yt=null,Mt=0,ur()),f}function hb(){for(;Rt!==null;)Vh(Rt)}function pb(t,e){var a=Bt;Bt|=2;var n=Qh(),i=Xh();Yt!==t||Mt!==e?($r=null,Ur=Qt()+500,Sn(t,e)):vn=pl(t,e);t:do try{if(Ht!==0&&Rt!==null){e=Rt;var o=_e;e:switch(Ht){case 1:Ht=0,_e=null,En(t,e,o,1);break;case 2:case 9:if(nd(o)){Ht=0,_e=null,Zh(e);break}e=function(){Ht!==2&&Ht!==9||Yt!==t||(Ht=7),fa(t)},o.then(e,e);break t;case 3:Ht=7;break t;case 4:Ht=5;break t;case 7:nd(o)?(Ht=0,_e=null,Zh(e)):(Ht=0,_e=null,En(t,e,o,7));break;case 5:var f=null;switch(Rt.tag){case 26:f=Rt.memoizedState;case 5:case 27:var h=Rt;if(!f||kp(f)){Ht=0,_e=null;var S=h.sibling;if(S!==null)Rt=S;else{var C=h.return;C!==null?(Rt=C,Gr(C)):Rt=null}break e}}Ht=0,_e=null,En(t,e,o,5);break;case 6:Ht=0,_e=null,En(t,e,o,6);break;case 8:Ds(),Wt=6;break t;default:throw Error(s(462))}}mb();break}catch(Q){qh(t,Q)}while(!0);return wa=El=null,k.H=n,k.A=i,Bt=a,Rt!==null?0:(Yt=null,Mt=0,ur(),Wt)}function mb(){for(;Rt!==null&&!qt();)Vh(Rt)}function Vh(t){var e=vh(t.alternate,t,Oa);t.memoizedProps=t.pendingProps,e===null?Gr(t):Rt=e}function Zh(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=hh(a,e,e.pendingProps,e.type,void 0,Mt);break;case 11:e=hh(a,e,e.pendingProps,e.type.render,e.ref,Mt);break;case 5:Qu(e);default:Ah(a,e),e=Rt=Kf(e,Oa),e=vh(a,e,Oa)}t.memoizedProps=t.pendingProps,e===null?Gr(t):Rt=e}function En(t,e,a,n){wa=El=null,Qu(e),mn=null,gi=0;var i=e.return;try{if(nb(t,i,e,a,Mt)){Wt=1,zr(t,qe(a,t.current)),Rt=null;return}}catch(o){if(i!==null)throw Rt=i,o;Wt=1,zr(t,qe(a,t.current)),Rt=null;return}e.flags&32768?(Nt||n===1?t=!0:vn||(Mt&536870912)!==0?t=!1:(Fa=t=!0,(n===2||n===9||n===3||n===6)&&(n=Ze.current,n!==null&&n.tag===13&&(n.flags|=16384))),Kh(e,t)):Gr(e)}function Gr(t){var e=t;do{if((e.flags&32768)!==0){Kh(e,Fa);return}t=e.return;var a=rb(e.alternate,e,Oa);if(a!==null){Rt=a;return}if(e=e.sibling,e!==null){Rt=e;return}Rt=e=t}while(e!==null);Wt===0&&(Wt=5)}function Kh(t,e){do{var a=ob(t.alternate,t);if(a!==null){a.flags&=32767,Rt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){Rt=t;return}Rt=t=a}while(t!==null);Wt=6,Rt=null}function Wh(t,e,a,n,i,o,f,h,S){t.cancelPendingCommit=null;do Yr();while(pe!==0);if((Bt&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));if(o=e.lanes|e.childLanes,o|=vu,Zg(t,a,o,f,h,S),t===Yt&&(Rt=Yt=null,Mt=0),An=e,tl=t,wn=a,Es=o,Ts=i,$h=n,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,vb(Ee,function(){return tp(),null})):(t.callbackNode=null,t.callbackPriority=0),n=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||n){n=k.T,k.T=null,i=Y.p,Y.p=2,f=Bt,Bt|=4;try{ub(t,e,a)}finally{Bt=f,Y.p=i,k.T=n}}pe=1,Jh(),Fh(),Ih()}}function Jh(){if(pe===1){pe=0;var t=tl,e=An,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=k.T,k.T=null;var n=Y.p;Y.p=2;var i=Bt;Bt|=4;try{zh(e,t);var o=Gs,f=Uf(t.containerInfo),h=o.focusedElem,S=o.selectionRange;if(f!==h&&h&&h.ownerDocument&&Hf(h.ownerDocument.documentElement,h)){if(S!==null&&pu(h)){var C=S.start,Q=S.end;if(Q===void 0&&(Q=C),"selectionStart"in h)h.selectionStart=C,h.selectionEnd=Math.min(Q,h.value.length);else{var Z=h.ownerDocument||document,M=Z&&Z.defaultView||window;if(M.getSelection){var z=M.getSelection(),vt=h.textContent.length,mt=Math.min(S.start,vt),Lt=S.end===void 0?mt:Math.min(S.end,vt);!z.extend&&mt>Lt&&(f=Lt,Lt=mt,mt=f);var R=Bf(h,mt),T=Bf(h,Lt);if(R&&T&&(z.rangeCount!==1||z.anchorNode!==R.node||z.anchorOffset!==R.offset||z.focusNode!==T.node||z.focusOffset!==T.offset)){var D=Z.createRange();D.setStart(R.node,R.offset),z.removeAllRanges(),mt>Lt?(z.addRange(D),z.extend(T.node,T.offset)):(D.setEnd(T.node,T.offset),z.addRange(D))}}}}for(Z=[],z=h;z=z.parentNode;)z.nodeType===1&&Z.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<Z.length;h++){var X=Z[h];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}to=!!Ls,Gs=Ls=null}finally{Bt=i,Y.p=n,k.T=a}}t.current=e,pe=2}}function Fh(){if(pe===2){pe=0;var t=tl,e=An,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=k.T,k.T=null;var n=Y.p;Y.p=2;var i=Bt;Bt|=4;try{kh(t,e.alternate,e)}finally{Bt=i,Y.p=n,k.T=a}}pe=3}}function Ih(){if(pe===4||pe===3){pe=0,ae();var t=tl,e=An,a=wn,n=$h;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?pe=5:(pe=0,An=tl=null,Ph(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(Pa=null),Zo(a),e=e.stateNode,Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(Ua,e,void 0,(e.current.flags&128)===128)}catch{}if(n!==null){e=k.T,i=Y.p,Y.p=2,k.T=null;try{for(var o=t.onRecoverableError,f=0;f<n.length;f++){var h=n[f];o(h.value,{componentStack:h.stack})}}finally{k.T=e,Y.p=i}}(wn&3)!==0&&Yr(),fa(t),i=t.pendingLanes,(a&4194090)!==0&&(i&42)!==0?t===Rs?Ti++:(Ti=0,Rs=t):Ti=0,Ri(0)}}function Ph(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,ii(e)))}function Yr(t){return Jh(),Fh(),Ih(),tp()}function tp(){if(pe!==5)return!1;var t=tl,e=Es;Es=0;var a=Zo(wn),n=k.T,i=Y.p;try{Y.p=32>a?32:a,k.T=null,a=Ts,Ts=null;var o=tl,f=wn;if(pe=0,An=tl=null,wn=0,(Bt&6)!==0)throw Error(s(331));var h=Bt;if(Bt|=4,Hh(o.current),jh(o,o.current,f,a),Bt=h,Ri(0,!1),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(Ua,o)}catch{}return!0}finally{Y.p=i,k.T=n,Ph(t,e)}}function ep(t,e,a){e=qe(a,e),e=ns(t.stateNode,e,2),t=Qa(t,e,2),t!==null&&(qn(t,2),fa(t))}function Gt(t,e,a){if(t.tag===3)ep(t,t,a);else for(;e!==null;){if(e.tag===3){ep(e,t,a);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Pa===null||!Pa.has(n))){t=qe(a,t),a=ih(2),n=Qa(e,a,2),n!==null&&(rh(a,n,e,t),qn(n,2),fa(n));break}}e=e.return}}function Os(t,e,a){var n=t.pingCache;if(n===null){n=t.pingCache=new fb;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(a)||(xs=!0,i.add(a),t=gb.bind(null,t,e,a),e.then(t,t))}function gb(t,e,a){var n=t.pingCache;n!==null&&n.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Yt===t&&(Mt&a)===a&&(Wt===4||Wt===3&&(Mt&62914560)===Mt&&300>Qt()-Ss?(Bt&2)===0&&Sn(t,0):As|=a,xn===Mt&&(xn=0)),fa(t)}function ap(t,e){e===0&&(e=Fc()),t=nn(t,e),t!==null&&(qn(t,e),fa(t))}function bb(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),ap(t,a)}function yb(t,e){var a=0;switch(t.tag){case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(s(314))}n!==null&&n.delete(e),ap(t,a)}function vb(t,e){return kt(t,e)}var qr=null,Tn=null,Ms=!1,Qr=!1,zs=!1,Ml=0;function fa(t){t!==Tn&&t.next===null&&(Tn===null?qr=Tn=t:Tn=Tn.next=t),Qr=!0,Ms||(Ms=!0,Ab())}function Ri(t,e){if(!zs&&Qr){zs=!0;do for(var a=!1,n=qr;n!==null;){if(t!==0){var i=n.pendingLanes;if(i===0)var o=0;else{var f=n.suspendedLanes,h=n.pingedLanes;o=(1<<31-we(42|t)+1)-1,o&=i&~(f&~h),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(a=!0,rp(n,o))}else o=Mt,o=ql(n,n===Yt?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(o&3)===0||pl(n,o)||(a=!0,rp(n,o));n=n.next}while(a);zs=!1}}function xb(){lp()}function lp(){Qr=Ms=!1;var t=0;Ml!==0&&(Cb()&&(t=Ml),Ml=0);for(var e=Qt(),a=null,n=qr;n!==null;){var i=n.next,o=np(n,e);o===0?(n.next=null,a===null?qr=i:a.next=i,i===null&&(Tn=a)):(a=n,(t!==0||(o&3)!==0)&&(Qr=!0)),n=i}Ri(t)}function np(t,e){for(var a=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes&-62914561;0<o;){var f=31-we(o),h=1<<f,S=i[f];S===-1?((h&a)===0||(h&n)!==0)&&(i[f]=Qo(h,e)):S<=e&&(t.expiredLanes|=h),o&=~h}if(e=Yt,a=Mt,a=ql(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n=t.callbackNode,a===0||t===e&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)return n!==null&&n!==null&&_t(n),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||pl(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(n!==null&&_t(n),Zo(a)){case 2:case 8:a=$e;break;case 32:a=Ee;break;case 268435456:a=Le;break;default:a=Ee}return n=ip.bind(null,t),a=kt(a,n),t.callbackPriority=e,t.callbackNode=a,e}return n!==null&&n!==null&&_t(n),t.callbackPriority=2,t.callbackNode=null,2}function ip(t,e){if(pe!==0&&pe!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Yr()&&t.callbackNode!==a)return null;var n=Mt;return n=ql(t,t===Yt?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n===0?null:(Gh(t,n,e),np(t,Qt()),t.callbackNode!=null&&t.callbackNode===a?ip.bind(null,t):null)}function rp(t,e){if(Yr())return null;Gh(t,e,!0)}function Ab(){Mb(function(){(Bt&6)!==0?kt(re,xb):lp()})}function Ns(){return Ml===0&&(Ml=Jc()),Ml}function op(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:er(""+t)}function up(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function wb(t,e,a,n,i){if(e==="submit"&&a&&a.stateNode===i){var o=op((i[Te]||null).action),f=n.submitter;f&&(e=(e=f[Te]||null)?op(e.formAction):f.getAttribute("formAction"),e!==null&&(o=e,f=null));var h=new ir("action","action",null,n,i);t.push({event:h,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Ml!==0){var S=f?up(i,f):new FormData(i);Pu(a,{pending:!0,data:S,method:i.method,action:o},null,S)}}else typeof o=="function"&&(h.preventDefault(),S=f?up(i,f):new FormData(i),Pu(a,{pending:!0,data:S,method:i.method,action:o},o,S))},currentTarget:i}]})}}for(var js=0;js<yu.length;js++){var _s=yu[js],Sb=_s.toLowerCase(),Eb=_s[0].toUpperCase()+_s.slice(1);Fe(Sb,"on"+Eb)}Fe(Gf,"onAnimationEnd"),Fe(Yf,"onAnimationIteration"),Fe(qf,"onAnimationStart"),Fe("dblclick","onDoubleClick"),Fe("focusin","onFocus"),Fe("focusout","onBlur"),Fe(G0,"onTransitionRun"),Fe(Y0,"onTransitionStart"),Fe(q0,"onTransitionCancel"),Fe(Qf,"onTransitionEnd"),Kl("onMouseEnter",["mouseout","mouseover"]),Kl("onMouseLeave",["mouseout","mouseover"]),Kl("onPointerEnter",["pointerout","pointerover"]),Kl("onPointerLeave",["pointerout","pointerover"]),ml("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ml("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ml("onBeforeInput",["compositionend","keypress","textInput","paste"]),ml("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ml("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ml("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Di));function sp(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var n=t[a],i=n.event;n=n.listeners;t:{var o=void 0;if(e)for(var f=n.length-1;0<=f;f--){var h=n[f],S=h.instance,C=h.currentTarget;if(h=h.listener,S!==o&&i.isPropagationStopped())break t;o=h,i.currentTarget=C;try{o(i)}catch(Q){Mr(Q)}i.currentTarget=null,o=S}else for(f=0;f<n.length;f++){if(h=n[f],S=h.instance,C=h.currentTarget,h=h.listener,S!==o&&i.isPropagationStopped())break t;o=h,i.currentTarget=C;try{o(i)}catch(Q){Mr(Q)}i.currentTarget=null,o=S}}}}function Dt(t,e){var a=e[Ko];a===void 0&&(a=e[Ko]=new Set);var n=t+"__bubble";a.has(n)||(cp(e,t,2,!1),a.add(n))}function Bs(t,e,a){var n=0;e&&(n|=4),cp(a,t,n,e)}var Xr="_reactListening"+Math.random().toString(36).slice(2);function Hs(t){if(!t[Xr]){t[Xr]=!0,af.forEach(function(a){a!=="selectionchange"&&(Tb.has(a)||Bs(a,!1,t),Bs(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xr]||(e[Xr]=!0,Bs("selectionchange",!1,e))}}function cp(t,e,a,n){switch(jp(e)){case 2:var i=Ib;break;case 8:i=Pb;break;default:i=Fs}a=i.bind(null,e,a,t),i=void 0,!iu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,a,{capture:!0,passive:i}):t.addEventListener(e,a,!0):i!==void 0?t.addEventListener(e,a,{passive:i}):t.addEventListener(e,a,!1)}function Us(t,e,a,n,i){var o=n;if((e&1)===0&&(e&2)===0&&n!==null)t:for(;;){if(n===null)return;var f=n.tag;if(f===3||f===4){var h=n.stateNode.containerInfo;if(h===i)break;if(f===4)for(f=n.return;f!==null;){var S=f.tag;if((S===3||S===4)&&f.stateNode.containerInfo===i)return;f=f.return}for(;h!==null;){if(f=Xl(h),f===null)return;if(S=f.tag,S===5||S===6||S===26||S===27){n=o=f;continue t}h=h.parentNode}}n=n.return}bf(function(){var C=o,Q=lu(a),Z=[];t:{var M=Xf.get(t);if(M!==void 0){var z=ir,vt=t;switch(t){case"keypress":if(lr(a)===0)break t;case"keydown":case"keyup":z=v0;break;case"focusin":vt="focus",z=su;break;case"focusout":vt="blur",z=su;break;case"beforeblur":case"afterblur":z=su;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=xf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=o0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=w0;break;case Gf:case Yf:case qf:z=c0;break;case Qf:z=E0;break;case"scroll":case"scrollend":z=i0;break;case"wheel":z=R0;break;case"copy":case"cut":case"paste":z=d0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=wf;break;case"toggle":case"beforetoggle":z=k0}var mt=(e&4)!==0,Lt=!mt&&(t==="scroll"||t==="scrollend"),R=mt?M!==null?M+"Capture":null:M;mt=[];for(var T=C,D;T!==null;){var X=T;if(D=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||D===null||R===null||(X=Vn(T,R),X!=null&&mt.push(ki(T,X,D))),Lt)break;T=T.return}0<mt.length&&(M=new z(M,vt,null,a,Q),Z.push({event:M,listeners:mt}))}}if((e&7)===0){t:{if(M=t==="mouseover"||t==="pointerover",z=t==="mouseout"||t==="pointerout",M&&a!==au&&(vt=a.relatedTarget||a.fromElement)&&(Xl(vt)||vt[Ql]))break t;if((z||M)&&(M=Q.window===Q?Q:(M=Q.ownerDocument)?M.defaultView||M.parentWindow:window,z?(vt=a.relatedTarget||a.toElement,z=C,vt=vt?Xl(vt):null,vt!==null&&(Lt=d(vt),mt=vt.tag,vt!==Lt||mt!==5&&mt!==27&&mt!==6)&&(vt=null)):(z=null,vt=C),z!==vt)){if(mt=xf,X="onMouseLeave",R="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(mt=wf,X="onPointerLeave",R="onPointerEnter",T="pointer"),Lt=z==null?M:Xn(z),D=vt==null?M:Xn(vt),M=new mt(X,T+"leave",z,a,Q),M.target=Lt,M.relatedTarget=D,X=null,Xl(Q)===C&&(mt=new mt(R,T+"enter",vt,a,Q),mt.target=D,mt.relatedTarget=Lt,X=mt),Lt=X,z&&vt)e:{for(mt=z,R=vt,T=0,D=mt;D;D=Rn(D))T++;for(D=0,X=R;X;X=Rn(X))D++;for(;0<T-D;)mt=Rn(mt),T--;for(;0<D-T;)R=Rn(R),D--;for(;T--;){if(mt===R||R!==null&&mt===R.alternate)break e;mt=Rn(mt),R=Rn(R)}mt=null}else mt=null;z!==null&&fp(Z,M,z,mt,!1),vt!==null&&Lt!==null&&fp(Z,Lt,vt,mt,!0)}}t:{if(M=C?Xn(C):window,z=M.nodeName&&M.nodeName.toLowerCase(),z==="select"||z==="input"&&M.type==="file")var st=Of;else if(kf(M))if(Mf)st=U0;else{st=B0;var Et=_0}else z=M.nodeName,!z||z.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?C&&eu(C.elementType)&&(st=Of):st=H0;if(st&&(st=st(t,C))){Cf(Z,st,a,Q);break t}Et&&Et(t,M,C),t==="focusout"&&C&&M.type==="number"&&C.memoizedProps.value!=null&&tu(M,"number",M.value)}switch(Et=C?Xn(C):window,t){case"focusin":(kf(Et)||Et.contentEditable==="true")&&(en=Et,mu=C,ti=null);break;case"focusout":ti=mu=en=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,$f(Z,a,Q);break;case"selectionchange":if(L0)break;case"keydown":case"keyup":$f(Z,a,Q)}var ft;if(fu)t:{switch(t){case"compositionstart":var gt="onCompositionStart";break t;case"compositionend":gt="onCompositionEnd";break t;case"compositionupdate":gt="onCompositionUpdate";break t}gt=void 0}else tn?Rf(t,a)&&(gt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(gt="onCompositionStart");gt&&(Sf&&a.locale!=="ko"&&(tn||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&tn&&(ft=yf()):(La=Q,ru="value"in La?La.value:La.textContent,tn=!0)),Et=Vr(C,gt),0<Et.length&&(gt=new Af(gt,t,null,a,Q),Z.push({event:gt,listeners:Et}),ft?gt.data=ft:(ft=Df(a),ft!==null&&(gt.data=ft)))),(ft=O0?M0(t,a):z0(t,a))&&(gt=Vr(C,"onBeforeInput"),0<gt.length&&(Et=new Af("onBeforeInput","beforeinput",null,a,Q),Z.push({event:Et,listeners:gt}),Et.data=ft)),wb(Z,t,C,a,Q)}sp(Z,e)})}function ki(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Vr(t,e){for(var a=e+"Capture",n=[];t!==null;){var i=t,o=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||o===null||(i=Vn(t,a),i!=null&&n.unshift(ki(t,i,o)),i=Vn(t,e),i!=null&&n.push(ki(t,i,o))),t.tag===3)return n;t=t.return}return[]}function Rn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function fp(t,e,a,n,i){for(var o=e._reactName,f=[];a!==null&&a!==n;){var h=a,S=h.alternate,C=h.stateNode;if(h=h.tag,S!==null&&S===n)break;h!==5&&h!==26&&h!==27||C===null||(S=C,i?(C=Vn(a,o),C!=null&&f.unshift(ki(a,C,S))):i||(C=Vn(a,o),C!=null&&f.push(ki(a,C,S)))),a=a.return}f.length!==0&&t.push({event:e,listeners:f})}var Rb=/\r\n?/g,Db=/\u0000|\uFFFD/g;function dp(t){return(typeof t=="string"?t:""+t).replace(Rb,`
`).replace(Db,"")}function hp(t,e){return e=dp(e),dp(t)===e}function Zr(){}function $t(t,e,a,n,i,o){switch(a){case"children":typeof n=="string"?e==="body"||e==="textarea"&&n===""||Fl(t,n):(typeof n=="number"||typeof n=="bigint")&&e!=="body"&&Fl(t,""+n);break;case"className":Ii(t,"class",n);break;case"tabIndex":Ii(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Ii(t,a,n);break;case"style":mf(t,n,o);break;case"data":if(e!=="object"){Ii(t,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=er(""+n),t.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(a==="formAction"?(e!=="input"&&$t(t,e,"name",i.name,i,null),$t(t,e,"formEncType",i.formEncType,i,null),$t(t,e,"formMethod",i.formMethod,i,null),$t(t,e,"formTarget",i.formTarget,i,null)):($t(t,e,"encType",i.encType,i,null),$t(t,e,"method",i.method,i,null),$t(t,e,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=er(""+n),t.setAttribute(a,n);break;case"onClick":n!=null&&(t.onclick=Zr);break;case"onScroll":n!=null&&Dt("scroll",t);break;case"onScrollEnd":n!=null&&Dt("scrollend",t);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(s(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}a=er(""+n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""+n):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":n===!0?t.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,n):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(a,n):t.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(a):t.setAttribute(a,n);break;case"popover":Dt("beforetoggle",t),Dt("toggle",t),Fi(t,"popover",n);break;case"xlinkActuate":ba(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":ba(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":ba(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":ba(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":ba(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":ba(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":ba(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":ba(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":ba(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Fi(t,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=l0.get(a)||a,Fi(t,a,n))}}function $s(t,e,a,n,i,o){switch(a){case"style":mf(t,n,o);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(s(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof n=="string"?Fl(t,n):(typeof n=="number"||typeof n=="bigint")&&Fl(t,""+n);break;case"onScroll":n!=null&&Dt("scroll",t);break;case"onScrollEnd":n!=null&&Dt("scrollend",t);break;case"onClick":n!=null&&(t.onclick=Zr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lf.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),e=a.slice(2,i?a.length-7:void 0),o=t[Te]||null,o=o!=null?o[a]:null,typeof o=="function"&&t.removeEventListener(e,o,i),typeof n=="function")){typeof o!="function"&&o!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,n,i);break t}a in t?t[a]=n:n===!0?t.setAttribute(a,""):Fi(t,a,n)}}}function me(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Dt("error",t),Dt("load",t);var n=!1,i=!1,o;for(o in a)if(a.hasOwnProperty(o)){var f=a[o];if(f!=null)switch(o){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:$t(t,e,o,f,a,null)}}i&&$t(t,e,"srcSet",a.srcSet,a,null),n&&$t(t,e,"src",a.src,a,null);return;case"input":Dt("invalid",t);var h=o=f=i=null,S=null,C=null;for(n in a)if(a.hasOwnProperty(n)){var Q=a[n];if(Q!=null)switch(n){case"name":i=Q;break;case"type":f=Q;break;case"checked":S=Q;break;case"defaultChecked":C=Q;break;case"value":o=Q;break;case"defaultValue":h=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(s(137,e));break;default:$t(t,e,n,Q,a,null)}}ff(t,o,h,S,C,f,i,!1),Pi(t);return;case"select":Dt("invalid",t),n=f=o=null;for(i in a)if(a.hasOwnProperty(i)&&(h=a[i],h!=null))switch(i){case"value":o=h;break;case"defaultValue":f=h;break;case"multiple":n=h;default:$t(t,e,i,h,a,null)}e=o,a=f,t.multiple=!!n,e!=null?Jl(t,!!n,e,!1):a!=null&&Jl(t,!!n,a,!0);return;case"textarea":Dt("invalid",t),o=i=n=null;for(f in a)if(a.hasOwnProperty(f)&&(h=a[f],h!=null))switch(f){case"value":n=h;break;case"defaultValue":i=h;break;case"children":o=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:$t(t,e,f,h,a,null)}hf(t,n,i,o),Pi(t);return;case"option":for(S in a)if(a.hasOwnProperty(S)&&(n=a[S],n!=null))switch(S){case"selected":t.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:$t(t,e,S,n,a,null)}return;case"dialog":Dt("beforetoggle",t),Dt("toggle",t),Dt("cancel",t),Dt("close",t);break;case"iframe":case"object":Dt("load",t);break;case"video":case"audio":for(n=0;n<Di.length;n++)Dt(Di[n],t);break;case"image":Dt("error",t),Dt("load",t);break;case"details":Dt("toggle",t);break;case"embed":case"source":case"link":Dt("error",t),Dt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in a)if(a.hasOwnProperty(C)&&(n=a[C],n!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:$t(t,e,C,n,a,null)}return;default:if(eu(e)){for(Q in a)a.hasOwnProperty(Q)&&(n=a[Q],n!==void 0&&$s(t,e,Q,n,a,void 0));return}}for(h in a)a.hasOwnProperty(h)&&(n=a[h],n!=null&&$t(t,e,h,n,a,null))}function kb(t,e,a,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,o=null,f=null,h=null,S=null,C=null,Q=null;for(z in a){var Z=a[z];if(a.hasOwnProperty(z)&&Z!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":S=Z;default:n.hasOwnProperty(z)||$t(t,e,z,null,n,Z)}}for(var M in n){var z=n[M];if(Z=a[M],n.hasOwnProperty(M)&&(z!=null||Z!=null))switch(M){case"type":o=z;break;case"name":i=z;break;case"checked":C=z;break;case"defaultChecked":Q=z;break;case"value":f=z;break;case"defaultValue":h=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,e));break;default:z!==Z&&$t(t,e,M,z,n,Z)}}Po(t,f,h,S,C,Q,o,i);return;case"select":z=f=h=M=null;for(o in a)if(S=a[o],a.hasOwnProperty(o)&&S!=null)switch(o){case"value":break;case"multiple":z=S;default:n.hasOwnProperty(o)||$t(t,e,o,null,n,S)}for(i in n)if(o=n[i],S=a[i],n.hasOwnProperty(i)&&(o!=null||S!=null))switch(i){case"value":M=o;break;case"defaultValue":h=o;break;case"multiple":f=o;default:o!==S&&$t(t,e,i,o,n,S)}e=h,a=f,n=z,M!=null?Jl(t,!!a,M,!1):!!n!=!!a&&(e!=null?Jl(t,!!a,e,!0):Jl(t,!!a,a?[]:"",!1));return;case"textarea":z=M=null;for(h in a)if(i=a[h],a.hasOwnProperty(h)&&i!=null&&!n.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:$t(t,e,h,null,n,i)}for(f in n)if(i=n[f],o=a[f],n.hasOwnProperty(f)&&(i!=null||o!=null))switch(f){case"value":M=i;break;case"defaultValue":z=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(s(91));break;default:i!==o&&$t(t,e,f,i,n,o)}df(t,M,z);return;case"option":for(var vt in a)if(M=a[vt],a.hasOwnProperty(vt)&&M!=null&&!n.hasOwnProperty(vt))switch(vt){case"selected":t.selected=!1;break;default:$t(t,e,vt,null,n,M)}for(S in n)if(M=n[S],z=a[S],n.hasOwnProperty(S)&&M!==z&&(M!=null||z!=null))switch(S){case"selected":t.selected=M&&typeof M!="function"&&typeof M!="symbol";break;default:$t(t,e,S,M,n,z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var mt in a)M=a[mt],a.hasOwnProperty(mt)&&M!=null&&!n.hasOwnProperty(mt)&&$t(t,e,mt,null,n,M);for(C in n)if(M=n[C],z=a[C],n.hasOwnProperty(C)&&M!==z&&(M!=null||z!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(s(137,e));break;default:$t(t,e,C,M,n,z)}return;default:if(eu(e)){for(var Lt in a)M=a[Lt],a.hasOwnProperty(Lt)&&M!==void 0&&!n.hasOwnProperty(Lt)&&$s(t,e,Lt,void 0,n,M);for(Q in n)M=n[Q],z=a[Q],!n.hasOwnProperty(Q)||M===z||M===void 0&&z===void 0||$s(t,e,Q,M,n,z);return}}for(var R in a)M=a[R],a.hasOwnProperty(R)&&M!=null&&!n.hasOwnProperty(R)&&$t(t,e,R,null,n,M);for(Z in n)M=n[Z],z=a[Z],!n.hasOwnProperty(Z)||M===z||M==null&&z==null||$t(t,e,Z,M,n,z)}var Ls=null,Gs=null;function Kr(t){return t.nodeType===9?t:t.ownerDocument}function pp(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function mp(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Ys(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qs=null;function Cb(){var t=window.event;return t&&t.type==="popstate"?t===qs?!1:(qs=t,!0):(qs=null,!1)}var gp=typeof setTimeout=="function"?setTimeout:void 0,Ob=typeof clearTimeout=="function"?clearTimeout:void 0,bp=typeof Promise=="function"?Promise:void 0,Mb=typeof queueMicrotask=="function"?queueMicrotask:typeof bp<"u"?function(t){return bp.resolve(null).then(t).catch(zb)}:gp;function zb(t){setTimeout(function(){throw t})}function al(t){return t==="head"}function yp(t,e){var a=e,n=0,i=0;do{var o=a.nextSibling;if(t.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(0<n&&8>n){a=n;var f=t.ownerDocument;if(a&1&&Ci(f.documentElement),a&2&&Ci(f.body),a&4)for(a=f.head,Ci(a),f=a.firstChild;f;){var h=f.nextSibling,S=f.nodeName;f[Qn]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=h}}if(i===0){t.removeChild(o),Hi(e);return}i--}else a==="$"||a==="$?"||a==="$!"?i++:n=a.charCodeAt(0)-48;else n=0;a=o}while(a);Hi(e)}function Qs(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Qs(a),Wo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Nb(t,e,a,n){for(;t.nodeType===1;){var i=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[Qn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(o=t.getAttribute("rel"),o==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(o!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(o=t.getAttribute("src"),(o!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&o&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var o=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===o)return t}else return t;if(t=Pe(t.nextSibling),t===null)break}return null}function jb(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Pe(t.nextSibling),t===null))return null;return t}function Xs(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function _b(t,e){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")e();else{var n=function(){e(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),t._reactRetry=n}}function Pe(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Vs=null;function vp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}function xp(t,e,a){switch(e=Kr(a),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Ci(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Wo(t)}var We=new Map,Ap=new Set;function Wr(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ma=Y.d;Y.d={f:Bb,r:Hb,D:Ub,C:$b,L:Lb,m:Gb,X:qb,S:Yb,M:Qb};function Bb(){var t=Ma.f(),e=Lr();return t||e}function Hb(t){var e=Vl(t);e!==null&&e.tag===5&&e.type==="form"?Gd(e):Ma.r(t)}var Dn=typeof document>"u"?null:document;function wp(t,e,a){var n=Dn;if(n&&typeof e=="string"&&e){var i=Ye(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Ap.has(i)||(Ap.add(i),t={rel:t,crossOrigin:a,href:e},n.querySelector(i)===null&&(e=n.createElement("link"),me(e,"link",t),oe(e),n.head.appendChild(e)))}}function Ub(t){Ma.D(t),wp("dns-prefetch",t,null)}function $b(t,e){Ma.C(t,e),wp("preconnect",t,e)}function Lb(t,e,a){Ma.L(t,e,a);var n=Dn;if(n&&t&&e){var i='link[rel="preload"][as="'+Ye(e)+'"]';e==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+Ye(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+Ye(a.imageSizes)+'"]')):i+='[href="'+Ye(t)+'"]';var o=i;switch(e){case"style":o=kn(t);break;case"script":o=Cn(t)}We.has(o)||(t=x({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),We.set(o,t),n.querySelector(i)!==null||e==="style"&&n.querySelector(Oi(o))||e==="script"&&n.querySelector(Mi(o))||(e=n.createElement("link"),me(e,"link",t),oe(e),n.head.appendChild(e)))}}function Gb(t,e){Ma.m(t,e);var a=Dn;if(a&&t){var n=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+Ye(n)+'"][href="'+Ye(t)+'"]',o=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Cn(t)}if(!We.has(o)&&(t=x({rel:"modulepreload",href:t},e),We.set(o,t),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Mi(o)))return}n=a.createElement("link"),me(n,"link",t),oe(n),a.head.appendChild(n)}}}function Yb(t,e,a){Ma.S(t,e,a);var n=Dn;if(n&&t){var i=Zl(n).hoistableStyles,o=kn(t);e=e||"default";var f=i.get(o);if(!f){var h={loading:0,preload:null};if(f=n.querySelector(Oi(o)))h.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":e},a),(a=We.get(o))&&Zs(t,a);var S=f=n.createElement("link");oe(S),me(S,"link",t),S._p=new Promise(function(C,Q){S.onload=C,S.onerror=Q}),S.addEventListener("load",function(){h.loading|=1}),S.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Jr(f,e,n)}f={type:"stylesheet",instance:f,count:1,state:h},i.set(o,f)}}}function qb(t,e){Ma.X(t,e);var a=Dn;if(a&&t){var n=Zl(a).hoistableScripts,i=Cn(t),o=n.get(i);o||(o=a.querySelector(Mi(i)),o||(t=x({src:t,async:!0},e),(e=We.get(i))&&Ks(t,e),o=a.createElement("script"),oe(o),me(o,"link",t),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(i,o))}}function Qb(t,e){Ma.M(t,e);var a=Dn;if(a&&t){var n=Zl(a).hoistableScripts,i=Cn(t),o=n.get(i);o||(o=a.querySelector(Mi(i)),o||(t=x({src:t,async:!0,type:"module"},e),(e=We.get(i))&&Ks(t,e),o=a.createElement("script"),oe(o),me(o,"link",t),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(i,o))}}function Sp(t,e,a,n){var i=(i=lt.current)?Wr(i):null;if(!i)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=kn(a.href),a=Zl(i).hoistableStyles,n=a.get(e),n||(n={type:"style",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=kn(a.href);var o=Zl(i).hoistableStyles,f=o.get(t);if(f||(i=i.ownerDocument||i,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(t,f),(o=i.querySelector(Oi(t)))&&!o._p&&(f.instance=o,f.state.loading=5),We.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},We.set(t,a),o||Xb(i,t,a,f.state))),e&&n===null)throw Error(s(528,""));return f}if(e&&n!==null)throw Error(s(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Cn(a),a=Zl(i).hoistableScripts,n=a.get(e),n||(n={type:"script",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function kn(t){return'href="'+Ye(t)+'"'}function Oi(t){return'link[rel="stylesheet"]['+t+"]"}function Ep(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function Xb(t,e,a,n){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?n.loading=1:(e=t.createElement("link"),n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2}),me(e,"link",a),oe(e),t.head.appendChild(e))}function Cn(t){return'[src="'+Ye(t)+'"]'}function Mi(t){return"script[async]"+t}function Tp(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var n=t.querySelector('style[data-href~="'+Ye(a.href)+'"]');if(n)return e.instance=n,oe(n),n;var i=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),oe(n),me(n,"style",i),Jr(n,a.precedence,t),e.instance=n;case"stylesheet":i=kn(a.href);var o=t.querySelector(Oi(i));if(o)return e.state.loading|=4,e.instance=o,oe(o),o;n=Ep(a),(i=We.get(i))&&Zs(n,i),o=(t.ownerDocument||t).createElement("link"),oe(o);var f=o;return f._p=new Promise(function(h,S){f.onload=h,f.onerror=S}),me(o,"link",n),e.state.loading|=4,Jr(o,a.precedence,t),e.instance=o;case"script":return o=Cn(a.src),(i=t.querySelector(Mi(o)))?(e.instance=i,oe(i),i):(n=a,(i=We.get(o))&&(n=x({},a),Ks(n,i)),t=t.ownerDocument||t,i=t.createElement("script"),oe(i),me(i,"link",n),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(n=e.instance,e.state.loading|=4,Jr(n,a.precedence,t));return e.instance}function Jr(t,e,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,o=i,f=0;f<n.length;f++){var h=n[f];if(h.dataset.precedence===e)o=h;else if(o!==i)break}o?o.parentNode.insertBefore(t,o.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function Zs(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Ks(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Fr=null;function Rp(t,e,a){if(Fr===null){var n=new Map,i=Fr=new Map;i.set(a,n)}else i=Fr,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(t))return n;for(n.set(t,null),a=a.getElementsByTagName(t),i=0;i<a.length;i++){var o=a[i];if(!(o[Qn]||o[ye]||t==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var f=o.getAttribute(e)||"";f=t+f;var h=n.get(f);h?h.push(o):n.set(f,[o])}}return n}function Dp(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function Vb(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function kp(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var zi=null;function Zb(){}function Kb(t,e,a){if(zi===null)throw Error(s(475));var n=zi;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var i=kn(a.href),o=t.querySelector(Oi(i));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(n.count++,n=Ir.bind(n),t.then(n,n)),e.state.loading|=4,e.instance=o,oe(o);return}o=t.ownerDocument||t,a=Ep(a),(i=We.get(i))&&Zs(a,i),o=o.createElement("link"),oe(o);var f=o;f._p=new Promise(function(h,S){f.onload=h,f.onerror=S}),me(o,"link",a),e.instance=o}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(n.count++,e=Ir.bind(n),t.addEventListener("load",e),t.addEventListener("error",e))}}function Wb(){if(zi===null)throw Error(s(475));var t=zi;return t.stylesheets&&t.count===0&&Ws(t,t.stylesheets),0<t.count?function(e){var a=setTimeout(function(){if(t.stylesheets&&Ws(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Ir(){if(this.count--,this.count===0){if(this.stylesheets)Ws(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Pr=null;function Ws(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Pr=new Map,e.forEach(Jb,t),Pr=null,Ir.call(t))}function Jb(t,e){if(!(e.state.loading&4)){var a=Pr.get(t);if(a)var n=a.get(null);else{a=new Map,Pr.set(t,a);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<i.length;o++){var f=i[o];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(a.set(f.dataset.precedence,f),n=f)}n&&a.set(null,n)}i=e.instance,f=i.getAttribute("data-precedence"),o=a.get(f)||n,o===n&&a.set(null,i),a.set(f,i),this.count++,n=Ir.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),o?o.parentNode.insertBefore(i,o.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var Ni={$$typeof:G,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function Fb(t,e,a,n,i,o,f,h){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xo(0),this.hiddenUpdates=Xo(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=o,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function Cp(t,e,a,n,i,o,f,h,S,C,Q,Z){return t=new Fb(t,e,a,f,h,S,C,Z),e=1,o===!0&&(e|=24),o=ze(3,null,null,e),t.current=o,o.stateNode=t,e=Ou(),e.refCount++,t.pooledCache=e,e.refCount++,o.memoizedState={element:n,isDehydrated:a,cache:e},ju(o),t}function Op(t){return t?(t=rn,t):rn}function Mp(t,e,a,n,i,o){i=Op(i),n.context===null?n.context=i:n.pendingContext=i,n=qa(e),n.payload={element:a},o=o===void 0?null:o,o!==null&&(n.callback=o),a=Qa(t,n,e),a!==null&&(He(a,t,e),si(a,t,e))}function zp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function Js(t,e){zp(t,e),(t=t.alternate)&&zp(t,e)}function Np(t){if(t.tag===13){var e=nn(t,67108864);e!==null&&He(e,t,67108864),Js(t,67108864)}}var to=!0;function Ib(t,e,a,n){var i=k.T;k.T=null;var o=Y.p;try{Y.p=2,Fs(t,e,a,n)}finally{Y.p=o,k.T=i}}function Pb(t,e,a,n){var i=k.T;k.T=null;var o=Y.p;try{Y.p=8,Fs(t,e,a,n)}finally{Y.p=o,k.T=i}}function Fs(t,e,a,n){if(to){var i=Is(n);if(i===null)Us(t,e,n,eo,a),_p(t,n);else if(ey(i,t,e,a,n))n.stopPropagation();else if(_p(t,n),e&4&&-1<ty.indexOf(t)){for(;i!==null;){var o=Vl(i);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var f=ga(o.pendingLanes);if(f!==0){var h=o;for(h.pendingLanes|=2,h.entangledLanes|=2;f;){var S=1<<31-we(f);h.entanglements[1]|=S,f&=~S}fa(o),(Bt&6)===0&&(Ur=Qt()+500,Ri(0))}}break;case 13:h=nn(o,2),h!==null&&He(h,o,2),Lr(),Js(o,2)}if(o=Is(n),o===null&&Us(t,e,n,eo,a),o===i)break;i=o}i!==null&&n.stopPropagation()}else Us(t,e,n,null,a)}}function Is(t){return t=lu(t),Ps(t)}var eo=null;function Ps(t){if(eo=null,t=Xl(t),t!==null){var e=d(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=p(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return eo=t,null}function jp(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(be()){case re:return 2;case $e:return 8;case Ee:case ia:return 32;case Le:return 268435456;default:return 32}default:return 32}}var tc=!1,ll=null,nl=null,il=null,ji=new Map,_i=new Map,rl=[],ty="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _p(t,e){switch(t){case"focusin":case"focusout":ll=null;break;case"dragenter":case"dragleave":nl=null;break;case"mouseover":case"mouseout":il=null;break;case"pointerover":case"pointerout":ji.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_i.delete(e.pointerId)}}function Bi(t,e,a,n,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:a,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Vl(e),e!==null&&Np(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ey(t,e,a,n,i){switch(e){case"focusin":return ll=Bi(ll,t,e,a,n,i),!0;case"dragenter":return nl=Bi(nl,t,e,a,n,i),!0;case"mouseover":return il=Bi(il,t,e,a,n,i),!0;case"pointerover":var o=i.pointerId;return ji.set(o,Bi(ji.get(o)||null,t,e,a,n,i)),!0;case"gotpointercapture":return o=i.pointerId,_i.set(o,Bi(_i.get(o)||null,t,e,a,n,i)),!0}return!1}function Bp(t){var e=Xl(t.target);if(e!==null){var a=d(e);if(a!==null){if(e=a.tag,e===13){if(e=p(a),e!==null){t.blockedOn=e,Kg(t.priority,function(){if(a.tag===13){var n=Be();n=Vo(n);var i=nn(a,n);i!==null&&He(i,a,n),Js(a,n)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ao(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Is(t.nativeEvent);if(a===null){a=t.nativeEvent;var n=new a.constructor(a.type,a);au=n,a.target.dispatchEvent(n),au=null}else return e=Vl(a),e!==null&&Np(e),t.blockedOn=a,!1;e.shift()}return!0}function Hp(t,e,a){ao(t)&&a.delete(e)}function ay(){tc=!1,ll!==null&&ao(ll)&&(ll=null),nl!==null&&ao(nl)&&(nl=null),il!==null&&ao(il)&&(il=null),ji.forEach(Hp),_i.forEach(Hp)}function lo(t,e){t.blockedOn===e&&(t.blockedOn=null,tc||(tc=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,ay)))}var no=null;function Up(t){no!==t&&(no=t,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){no===t&&(no=null);for(var e=0;e<t.length;e+=3){var a=t[e],n=t[e+1],i=t[e+2];if(typeof n!="function"){if(Ps(n||a)===null)continue;break}var o=Vl(a);o!==null&&(t.splice(e,3),e-=3,Pu(o,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function Hi(t){function e(S){return lo(S,t)}ll!==null&&lo(ll,t),nl!==null&&lo(nl,t),il!==null&&lo(il,t),ji.forEach(e),_i.forEach(e);for(var a=0;a<rl.length;a++){var n=rl[a];n.blockedOn===t&&(n.blockedOn=null)}for(;0<rl.length&&(a=rl[0],a.blockedOn===null);)Bp(a),a.blockedOn===null&&rl.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],o=a[n+1],f=i[Te]||null;if(typeof o=="function")f||Up(a);else if(f){var h=null;if(o&&o.hasAttribute("formAction")){if(i=o,f=o[Te]||null)h=f.formAction;else if(Ps(i)!==null)continue}else h=f.action;typeof h=="function"?a[n+1]=h:(a.splice(n,3),n-=3),Up(a)}}}function ec(t){this._internalRoot=t}io.prototype.render=ec.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var a=e.current,n=Be();Mp(a,n,t,e,null,null)},io.prototype.unmount=ec.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Mp(t.current,2,null,t,null,null),Lr(),e[Ql]=null}};function io(t){this._internalRoot=t}io.prototype.unstable_scheduleHydration=function(t){if(t){var e=tf();t={blockedOn:null,target:t,priority:e};for(var a=0;a<rl.length&&e!==0&&e<rl[a].priority;a++);rl.splice(a,0,t),a===0&&Bp(t)}};var $p=r.version;if($p!=="19.1.0")throw Error(s(527,$p,"19.1.0"));Y.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=b(e),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var ly={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:k,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ro.isDisabled&&ro.supportsFiber)try{Ua=ro.inject(ly),Ae=ro}catch{}}return $i.createRoot=function(t,e){if(!c(t))throw Error(s(299));var a=!1,n="",i=eh,o=ah,f=lh,h=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(o=e.onCaughtError),e.onRecoverableError!==void 0&&(f=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(h=e.unstable_transitionCallbacks)),e=Cp(t,1,!1,null,null,a,n,i,o,f,h,null),t[Ql]=e.current,Hs(t),new ec(e)},$i.hydrateRoot=function(t,e,a){if(!c(t))throw Error(s(299));var n=!1,i="",o=eh,f=ah,h=lh,S=null,C=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(f=a.onCaughtError),a.onRecoverableError!==void 0&&(h=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(S=a.unstable_transitionCallbacks),a.formState!==void 0&&(C=a.formState)),e=Cp(t,1,!0,e,a??null,n,i,o,f,h,S,C),e.context=Op(null),a=e.current,n=Be(),n=Vo(n),i=qa(n),i.callback=null,Qa(a,i,n),a=n,e.current.lanes=a,qn(e,a),fa(e),t[Ql]=e.current,Hs(t),new io(e)},$i.version="19.1.0",$i}var Wp;function dy(){if(Wp)return nc.exports;Wp=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),nc.exports=fy(),nc.exports}var Cm=dy();const Oe=zc(Cm);/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Jp="popstate";function hy(l={}){function r(c,d){let{pathname:p="/",search:y="",hash:b=""}=Ln(c.location.hash.substring(1));return!p.startsWith("/")&&!p.startsWith(".")&&(p="/"+p),gc("",{pathname:p,search:y,hash:b},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function u(c,d){let p=c.document.querySelector("base"),y="";if(p&&p.getAttribute("href")){let b=c.location.href,g=b.indexOf("#");y=g===-1?b:b.slice(0,g)}return y+"#"+(typeof d=="string"?d:Qi(d))}function s(c,d){aa(c.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(d)})`)}return my(r,u,s,l)}function ie(l,r){if(l===!1||l===null||typeof l>"u")throw new Error(r)}function aa(l,r){if(!l){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function py(){return Math.random().toString(36).substring(2,10)}function Fp(l,r){return{usr:l.state,key:l.key,idx:r}}function gc(l,r,u=null,s){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof r=="string"?Ln(r):r,state:u,key:r&&r.key||s||py()}}function Qi({pathname:l="/",search:r="",hash:u=""}){return r&&r!=="?"&&(l+=r.charAt(0)==="?"?r:"?"+r),u&&u!=="#"&&(l+=u.charAt(0)==="#"?u:"#"+u),l}function Ln(l){let r={};if(l){let u=l.indexOf("#");u>=0&&(r.hash=l.substring(u),l=l.substring(0,u));let s=l.indexOf("?");s>=0&&(r.search=l.substring(s),l=l.substring(0,s)),l&&(r.pathname=l)}return r}function my(l,r,u,s={}){let{window:c=document.defaultView,v5Compat:d=!1}=s,p=c.history,y="POP",b=null,g=x();g==null&&(g=0,p.replaceState({...p.state,idx:g},""));function x(){return(p.state||{idx:null}).idx}function E(){y="POP";let B=x(),H=B==null?null:B-g;g=B,b&&b({action:y,location:J.location,delta:H})}function O(B,H){y="PUSH";let N=gc(J.location,B,H);u&&u(N,B),g=x()+1;let G=Fp(N,g),F=J.createHref(N);try{p.pushState(G,"",F)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;c.location.assign(F)}d&&b&&b({action:y,location:J.location,delta:1})}function $(B,H){y="REPLACE";let N=gc(J.location,B,H);u&&u(N,B),g=x();let G=Fp(N,g),F=J.createHref(N);p.replaceState(G,"",F),d&&b&&b({action:y,location:J.location,delta:0})}function L(B){return gy(B)}let J={get action(){return y},get location(){return l(c,p)},listen(B){if(b)throw new Error("A history only accepts one active listener");return c.addEventListener(Jp,E),b=B,()=>{c.removeEventListener(Jp,E),b=null}},createHref(B){return r(c,B)},createURL:L,encodeLocation(B){let H=L(B);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:O,replace:$,go(B){return p.go(B)}};return J}function gy(l,r=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),ie(u,"No window.location.(origin|href) available to create URL");let s=typeof l=="string"?l:Qi(l);return s=s.replace(/ $/,"%20"),!r&&s.startsWith("//")&&(s=u+s),new URL(s,u)}function Om(l,r,u="/"){return by(l,r,u,!1)}function by(l,r,u,s){let c=typeof r=="string"?Ln(r):r,d=_a(c.pathname||"/",u);if(d==null)return null;let p=Mm(l);yy(p);let y=null;for(let b=0;y==null&&b<p.length;++b){let g=Cy(d);y=Dy(p[b],g,s)}return y}function Mm(l,r=[],u=[],s="",c=!1){let d=(p,y,b=c,g)=>{let x={relativePath:g===void 0?p.path||"":g,caseSensitive:p.caseSensitive===!0,childrenIndex:y,route:p};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(s)&&b)return;ie(x.relativePath.startsWith(s),`Absolute route path "${x.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(s.length)}let E=ja([s,x.relativePath]),O=u.concat(x);p.children&&p.children.length>0&&(ie(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),Mm(p.children,r,O,E,b)),!(p.path==null&&!p.index)&&r.push({path:E,score:Ty(E,p.index),routesMeta:O})};return l.forEach((p,y)=>{var b;if(p.path===""||!((b=p.path)!=null&&b.includes("?")))d(p,y);else for(let g of zm(p.path))d(p,y,!0,g)}),r}function zm(l){let r=l.split("/");if(r.length===0)return[];let[u,...s]=r,c=u.endsWith("?"),d=u.replace(/\?$/,"");if(s.length===0)return c?[d,""]:[d];let p=zm(s.join("/")),y=[];return y.push(...p.map(b=>b===""?d:[d,b].join("/"))),c&&y.push(...p),y.map(b=>l.startsWith("/")&&b===""?"/":b)}function yy(l){l.sort((r,u)=>r.score!==u.score?u.score-r.score:Ry(r.routesMeta.map(s=>s.childrenIndex),u.routesMeta.map(s=>s.childrenIndex)))}var vy=/^:[\w-]+$/,xy=3,Ay=2,wy=1,Sy=10,Ey=-2,Ip=l=>l==="*";function Ty(l,r){let u=l.split("/"),s=u.length;return u.some(Ip)&&(s+=Ey),r&&(s+=Ay),u.filter(c=>!Ip(c)).reduce((c,d)=>c+(vy.test(d)?xy:d===""?wy:Sy),s)}function Ry(l,r){return l.length===r.length&&l.slice(0,-1).every((s,c)=>s===r[c])?l[l.length-1]-r[r.length-1]:0}function Dy(l,r,u=!1){let{routesMeta:s}=l,c={},d="/",p=[];for(let y=0;y<s.length;++y){let b=s[y],g=y===s.length-1,x=d==="/"?r:r.slice(d.length)||"/",E=Ao({path:b.relativePath,caseSensitive:b.caseSensitive,end:g},x),O=b.route;if(!E&&g&&u&&!s[s.length-1].route.index&&(E=Ao({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},x)),!E)return null;Object.assign(c,E.params),p.push({params:c,pathname:ja([d,E.pathname]),pathnameBase:Ny(ja([d,E.pathnameBase])),route:O}),E.pathnameBase!=="/"&&(d=ja([d,E.pathnameBase]))}return p}function Ao(l,r){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[u,s]=ky(l.path,l.caseSensitive,l.end),c=r.match(u);if(!c)return null;let d=c[0],p=d.replace(/(.)\/+$/,"$1"),y=c.slice(1);return{params:s.reduce((g,{paramName:x,isOptional:E},O)=>{if(x==="*"){let L=y[O]||"";p=d.slice(0,d.length-L.length).replace(/(.)\/+$/,"$1")}const $=y[O];return E&&!$?g[x]=void 0:g[x]=($||"").replace(/%2F/g,"/"),g},{}),pathname:d,pathnameBase:p,pattern:l}}function ky(l,r=!1,u=!0){aa(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let s=[],c="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,y,b)=>(s.push({paramName:y,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(s.push({paramName:"*"}),c+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?c+="\\/*$":l!==""&&l!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,r?void 0:"i"),s]}function Cy(l){try{return l.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return aa(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),l}}function _a(l,r){if(r==="/")return l;if(!l.toLowerCase().startsWith(r.toLowerCase()))return null;let u=r.endsWith("/")?r.length-1:r.length,s=l.charAt(u);return s&&s!=="/"?null:l.slice(u)||"/"}function Oy(l,r="/"){let{pathname:u,search:s="",hash:c=""}=typeof l=="string"?Ln(l):l;return{pathname:u?u.startsWith("/")?u:My(u,r):r,search:jy(s),hash:_y(c)}}function My(l,r){let u=r.replace(/\/+$/,"").split("/");return l.split("/").forEach(c=>{c===".."?u.length>1&&u.pop():c!=="."&&u.push(c)}),u.length>1?u.join("/"):"/"}function uc(l,r,u,s){return`Cannot include a '${l}' character in a manually specified \`to.${r}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function zy(l){return l.filter((r,u)=>u===0||r.route.path&&r.route.path.length>0)}function Nm(l){let r=zy(l);return r.map((u,s)=>s===r.length-1?u.pathname:u.pathnameBase)}function jm(l,r,u,s=!1){let c;typeof l=="string"?c=Ln(l):(c={...l},ie(!c.pathname||!c.pathname.includes("?"),uc("?","pathname","search",c)),ie(!c.pathname||!c.pathname.includes("#"),uc("#","pathname","hash",c)),ie(!c.search||!c.search.includes("#"),uc("#","search","hash",c)));let d=l===""||c.pathname==="",p=d?"/":c.pathname,y;if(p==null)y=u;else{let E=r.length-1;if(!s&&p.startsWith("..")){let O=p.split("/");for(;O[0]==="..";)O.shift(),E-=1;c.pathname=O.join("/")}y=E>=0?r[E]:"/"}let b=Oy(c,y),g=p&&p!=="/"&&p.endsWith("/"),x=(d||p===".")&&u.endsWith("/");return!b.pathname.endsWith("/")&&(g||x)&&(b.pathname+="/"),b}var ja=l=>l.join("/").replace(/\/\/+/g,"/"),Ny=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),jy=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,_y=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function By(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}var _m=["POST","PUT","PATCH","DELETE"];new Set(_m);var Hy=["GET",..._m];new Set(Hy);var Gn=v.createContext(null);Gn.displayName="DataRouter";var Oo=v.createContext(null);Oo.displayName="DataRouterState";v.createContext(!1);var Bm=v.createContext({isTransitioning:!1});Bm.displayName="ViewTransition";var Uy=v.createContext(new Map);Uy.displayName="Fetchers";var $y=v.createContext(null);$y.displayName="Await";var pa=v.createContext(null);pa.displayName="Navigation";var Mo=v.createContext(null);Mo.displayName="Location";var Ba=v.createContext({outlet:null,matches:[],isDataRoute:!1});Ba.displayName="Route";var jc=v.createContext(null);jc.displayName="RouteError";function Ly(l,{relative:r}={}){ie(Ki(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:s}=v.useContext(pa),{hash:c,pathname:d,search:p}=Wi(l,{relative:r}),y=d;return u!=="/"&&(y=d==="/"?u:ja([u,d])),s.createHref({pathname:y,search:p,hash:c})}function Ki(){return v.useContext(Mo)!=null}function hl(){return ie(Ki(),"useLocation() may be used only in the context of a <Router> component."),v.useContext(Mo).location}var Hm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Um(l){v.useContext(pa).static||v.useLayoutEffect(l)}function Gy(){let{isDataRoute:l}=v.useContext(Ba);return l?tv():Yy()}function Yy(){ie(Ki(),"useNavigate() may be used only in the context of a <Router> component.");let l=v.useContext(Gn),{basename:r,navigator:u}=v.useContext(pa),{matches:s}=v.useContext(Ba),{pathname:c}=hl(),d=JSON.stringify(Nm(s)),p=v.useRef(!1);return Um(()=>{p.current=!0}),v.useCallback((b,g={})=>{if(aa(p.current,Hm),!p.current)return;if(typeof b=="number"){u.go(b);return}let x=jm(b,JSON.parse(d),c,g.relative==="path");l==null&&r!=="/"&&(x.pathname=x.pathname==="/"?r:ja([r,x.pathname])),(g.replace?u.replace:u.push)(x,g.state,g)},[r,u,d,c,l])}v.createContext(null);function Wi(l,{relative:r}={}){let{matches:u}=v.useContext(Ba),{pathname:s}=hl(),c=JSON.stringify(Nm(u));return v.useMemo(()=>jm(l,JSON.parse(c),s,r==="path"),[l,c,s,r])}function qy(l,r,u,s,c){ie(Ki(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=v.useContext(pa),{matches:p}=v.useContext(Ba),y=p[p.length-1],b=y?y.params:{},g=y?y.pathname:"/",x=y?y.pathnameBase:"/",E=y&&y.route;{let N=E&&E.path||"";$m(g,!E||N.endsWith("*")||N.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${N}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${N}"> to <Route path="${N==="/"?"*":`${N}/*`}">.`)}let O=hl(),$;$=O;let L=$.pathname||"/",J=L;if(x!=="/"){let N=x.replace(/^\//,"").split("/");J="/"+L.replace(/^\//,"").split("/").slice(N.length).join("/")}let B=Om(l,{pathname:J});return aa(E||B!=null,`No routes matched location "${$.pathname}${$.search}${$.hash}" `),aa(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${$.pathname}${$.search}${$.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),Ky(B&&B.map(N=>Object.assign({},N,{params:Object.assign({},b,N.params),pathname:ja([x,d.encodeLocation?d.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?x:ja([x,d.encodeLocation?d.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),p,u,s,c)}function Qy(){let l=Py(),r=By(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),u=l instanceof Error?l.stack:null,s="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:s},d={padding:"2px 4px",backgroundColor:s},p=null;return console.error("Error handled by React Router default ErrorBoundary:",l),p=v.createElement(v.Fragment,null,v.createElement("p",null,"💿 Hey developer 👋"),v.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",v.createElement("code",{style:d},"ErrorBoundary")," or"," ",v.createElement("code",{style:d},"errorElement")," prop on your route.")),v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},r),u?v.createElement("pre",{style:c},u):null,p)}var Xy=v.createElement(Qy,null),Vy=class extends v.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,r){return r.location!==l.location||r.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:r.error,location:r.location,revalidation:l.revalidation||r.revalidation}}componentDidCatch(l,r){this.props.unstable_onError?this.props.unstable_onError(l,r):console.error("React Router caught the following error during render",l)}render(){return this.state.error!==void 0?v.createElement(Ba.Provider,{value:this.props.routeContext},v.createElement(jc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Zy({routeContext:l,match:r,children:u}){let s=v.useContext(Gn);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),v.createElement(Ba.Provider,{value:l},u)}function Ky(l,r=[],u=null,s=null,c=null){if(l==null){if(!u)return null;if(u.errors)l=u.matches;else if(r.length===0&&!u.initialized&&u.matches.length>0)l=u.matches;else return null}let d=l,p=u==null?void 0:u.errors;if(p!=null){let g=d.findIndex(x=>x.route.id&&(p==null?void 0:p[x.route.id])!==void 0);ie(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),d=d.slice(0,Math.min(d.length,g+1))}let y=!1,b=-1;if(u)for(let g=0;g<d.length;g++){let x=d[g];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(b=g),x.route.id){let{loaderData:E,errors:O}=u,$=x.route.loader&&!E.hasOwnProperty(x.route.id)&&(!O||O[x.route.id]===void 0);if(x.route.lazy||$){y=!0,b>=0?d=d.slice(0,b+1):d=[d[0]];break}}}return d.reduceRight((g,x,E)=>{let O,$=!1,L=null,J=null;u&&(O=p&&x.route.id?p[x.route.id]:void 0,L=x.route.errorElement||Xy,y&&(b<0&&E===0?($m("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),$=!0,J=null):b===E&&($=!0,J=x.route.hydrateFallbackElement||null)));let B=r.concat(d.slice(0,E+1)),H=()=>{let N;return O?N=L:$?N=J:x.route.Component?N=v.createElement(x.route.Component,null):x.route.element?N=x.route.element:N=g,v.createElement(Zy,{match:x,routeContext:{outlet:g,matches:B,isDataRoute:u!=null},children:N})};return u&&(x.route.ErrorBoundary||x.route.errorElement||E===0)?v.createElement(Vy,{location:u.location,revalidation:u.revalidation,component:L,error:O,children:H(),routeContext:{outlet:null,matches:B,isDataRoute:!0},unstable_onError:s}):H()},null)}function _c(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wy(l){let r=v.useContext(Gn);return ie(r,_c(l)),r}function Jy(l){let r=v.useContext(Oo);return ie(r,_c(l)),r}function Fy(l){let r=v.useContext(Ba);return ie(r,_c(l)),r}function Bc(l){let r=Fy(l),u=r.matches[r.matches.length-1];return ie(u.route.id,`${l} can only be used on routes that contain a unique "id"`),u.route.id}function Iy(){return Bc("useRouteId")}function Py(){var s;let l=v.useContext(jc),r=Jy("useRouteError"),u=Bc("useRouteError");return l!==void 0?l:(s=r.errors)==null?void 0:s[u]}function tv(){let{router:l}=Wy("useNavigate"),r=Bc("useNavigate"),u=v.useRef(!1);return Um(()=>{u.current=!0}),v.useCallback(async(c,d={})=>{aa(u.current,Hm),u.current&&(typeof c=="number"?l.navigate(c):await l.navigate(c,{fromRouteId:r,...d}))},[l,r])}var Pp={};function $m(l,r,u){!r&&!Pp[l]&&(Pp[l]=!0,aa(!1,u))}v.memo(ev);function ev({routes:l,future:r,state:u,unstable_onError:s}){return qy(l,void 0,u,s,r)}function av({basename:l="/",children:r=null,location:u,navigationType:s="POP",navigator:c,static:d=!1}){ie(!Ki(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=l.replace(/^\/*/,"/"),y=v.useMemo(()=>({basename:p,navigator:c,static:d,future:{}}),[p,c,d]);typeof u=="string"&&(u=Ln(u));let{pathname:b="/",search:g="",hash:x="",state:E=null,key:O="default"}=u,$=v.useMemo(()=>{let L=_a(b,p);return L==null?null:{location:{pathname:L,search:g,hash:x,state:E,key:O},navigationType:s}},[p,b,g,x,E,O,s]);return aa($!=null,`<Router basename="${p}"> is not able to match the URL "${b}${g}${x}" because it does not start with the basename, so the <Router> won't render anything.`),$==null?null:v.createElement(pa.Provider,{value:y},v.createElement(Mo.Provider,{children:r,value:$}))}var po="get",mo="application/x-www-form-urlencoded";function zo(l){return l!=null&&typeof l.tagName=="string"}function lv(l){return zo(l)&&l.tagName.toLowerCase()==="button"}function nv(l){return zo(l)&&l.tagName.toLowerCase()==="form"}function iv(l){return zo(l)&&l.tagName.toLowerCase()==="input"}function rv(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function ov(l,r){return l.button===0&&(!r||r==="_self")&&!rv(l)}var oo=null;function uv(){if(oo===null)try{new FormData(document.createElement("form"),0),oo=!1}catch{oo=!0}return oo}var sv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function sc(l){return l!=null&&!sv.has(l)?(aa(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${mo}"`),null):l}function cv(l,r){let u,s,c,d,p;if(nv(l)){let y=l.getAttribute("action");s=y?_a(y,r):null,u=l.getAttribute("method")||po,c=sc(l.getAttribute("enctype"))||mo,d=new FormData(l)}else if(lv(l)||iv(l)&&(l.type==="submit"||l.type==="image")){let y=l.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=l.getAttribute("formaction")||y.getAttribute("action");if(s=b?_a(b,r):null,u=l.getAttribute("formmethod")||y.getAttribute("method")||po,c=sc(l.getAttribute("formenctype"))||sc(y.getAttribute("enctype"))||mo,d=new FormData(y,l),!uv()){let{name:g,type:x,value:E}=l;if(x==="image"){let O=g?`${g}.`:"";d.append(`${O}x`,"0"),d.append(`${O}y`,"0")}else g&&d.append(g,E)}}else{if(zo(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=po,s=null,c=mo,p=l}return d&&c==="text/plain"&&(p=d,d=void 0),{action:s,method:u.toLowerCase(),encType:c,formData:d,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Hc(l,r){if(l===!1||l===null||typeof l>"u")throw new Error(r)}function fv(l,r,u){let s=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return s.pathname==="/"?s.pathname=`_root.${u}`:r&&_a(s.pathname,r)==="/"?s.pathname=`${r.replace(/\/$/,"")}/_root.${u}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${u}`,s}async function dv(l,r){if(l.id in r)return r[l.id];try{let u=await import(l.module);return r[l.id]=u,u}catch(u){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function hv(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function pv(l,r,u){let s=await Promise.all(l.map(async c=>{let d=r.routes[c.route.id];if(d){let p=await dv(d,u);return p.links?p.links():[]}return[]}));return yv(s.flat(1).filter(hv).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function tm(l,r,u,s,c,d){let p=(b,g)=>u[g]?b.route.id!==u[g].route.id:!0,y=(b,g)=>{var x;return u[g].pathname!==b.pathname||((x=u[g].route.path)==null?void 0:x.endsWith("*"))&&u[g].params["*"]!==b.params["*"]};return d==="assets"?r.filter((b,g)=>p(b,g)||y(b,g)):d==="data"?r.filter((b,g)=>{var E;let x=s.routes[b.route.id];if(!x||!x.hasLoader)return!1;if(p(b,g)||y(b,g))return!0;if(b.route.shouldRevalidate){let O=b.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:((E=u[0])==null?void 0:E.params)||{},nextUrl:new URL(l,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof O=="boolean")return O}return!0}):[]}function mv(l,r,{includeHydrateFallback:u}={}){return gv(l.map(s=>{let c=r.routes[s.route.id];if(!c)return[];let d=[c.module];return c.clientActionModule&&(d=d.concat(c.clientActionModule)),c.clientLoaderModule&&(d=d.concat(c.clientLoaderModule)),u&&c.hydrateFallbackModule&&(d=d.concat(c.hydrateFallbackModule)),c.imports&&(d=d.concat(c.imports)),d}).flat(1))}function gv(l){return[...new Set(l)]}function bv(l){let r={},u=Object.keys(l).sort();for(let s of u)r[s]=l[s];return r}function yv(l,r){let u=new Set;return new Set(r),l.reduce((s,c)=>{let d=JSON.stringify(bv(c));return u.has(d)||(u.add(d),s.push({key:d,link:c})),s},[])}function Lm(){let l=v.useContext(Gn);return Hc(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function vv(){let l=v.useContext(Oo);return Hc(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var Uc=v.createContext(void 0);Uc.displayName="FrameworkContext";function Gm(){let l=v.useContext(Uc);return Hc(l,"You must render this element inside a <HydratedRouter> element"),l}function xv(l,r){let u=v.useContext(Uc),[s,c]=v.useState(!1),[d,p]=v.useState(!1),{onFocus:y,onBlur:b,onMouseEnter:g,onMouseLeave:x,onTouchStart:E}=r,O=v.useRef(null);v.useEffect(()=>{if(l==="render"&&p(!0),l==="viewport"){let J=H=>{H.forEach(N=>{p(N.isIntersecting)})},B=new IntersectionObserver(J,{threshold:.5});return O.current&&B.observe(O.current),()=>{B.disconnect()}}},[l]),v.useEffect(()=>{if(s){let J=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(J)}}},[s]);let $=()=>{c(!0)},L=()=>{c(!1),p(!1)};return u?l!=="intent"?[d,O,{}]:[d,O,{onFocus:Li(y,$),onBlur:Li(b,L),onMouseEnter:Li(g,$),onMouseLeave:Li(x,L),onTouchStart:Li(E,$)}]:[!1,O,{}]}function Li(l,r){return u=>{l&&l(u),u.defaultPrevented||r(u)}}function Av({page:l,...r}){let{router:u}=Lm(),s=v.useMemo(()=>Om(u.routes,l,u.basename),[u.routes,l,u.basename]);return s?v.createElement(Sv,{page:l,matches:s,...r}):null}function wv(l){let{manifest:r,routeModules:u}=Gm(),[s,c]=v.useState([]);return v.useEffect(()=>{let d=!1;return pv(l,r,u).then(p=>{d||c(p)}),()=>{d=!0}},[l,r,u]),s}function Sv({page:l,matches:r,...u}){let s=hl(),{manifest:c,routeModules:d}=Gm(),{basename:p}=Lm(),{loaderData:y,matches:b}=vv(),g=v.useMemo(()=>tm(l,r,b,c,s,"data"),[l,r,b,c,s]),x=v.useMemo(()=>tm(l,r,b,c,s,"assets"),[l,r,b,c,s]),E=v.useMemo(()=>{if(l===s.pathname+s.search+s.hash)return[];let L=new Set,J=!1;if(r.forEach(H=>{var G;let N=c.routes[H.route.id];!N||!N.hasLoader||(!g.some(F=>F.route.id===H.route.id)&&H.route.id in y&&((G=d[H.route.id])!=null&&G.shouldRevalidate)||N.hasClientLoader?J=!0:L.add(H.route.id))}),L.size===0)return[];let B=fv(l,p,"data");return J&&L.size>0&&B.searchParams.set("_routes",r.filter(H=>L.has(H.route.id)).map(H=>H.route.id).join(",")),[B.pathname+B.search]},[p,y,s,c,g,r,l,d]),O=v.useMemo(()=>mv(x,c),[x,c]),$=wv(x);return v.createElement(v.Fragment,null,E.map(L=>v.createElement("link",{key:L,rel:"prefetch",as:"fetch",href:L,...u})),O.map(L=>v.createElement("link",{key:L,rel:"modulepreload",href:L,...u})),$.map(({key:L,link:J})=>v.createElement("link",{key:L,nonce:u.nonce,...J})))}function Ev(...l){return r=>{l.forEach(u=>{typeof u=="function"?u(r):u!=null&&(u.current=r)})}}var Ym=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ym&&(window.__reactRouterVersion="7.9.1")}catch{}function Tv({basename:l,children:r,window:u}){let s=v.useRef();s.current==null&&(s.current=hy({window:u,v5Compat:!0}));let c=s.current,[d,p]=v.useState({action:c.action,location:c.location}),y=v.useCallback(b=>{v.startTransition(()=>p(b))},[p]);return v.useLayoutEffect(()=>c.listen(y),[c,y]),v.createElement(av,{basename:l,children:r,location:d.location,navigationType:d.action,navigator:c})}var qm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qm=v.forwardRef(function({onClick:r,discover:u="render",prefetch:s="none",relative:c,reloadDocument:d,replace:p,state:y,target:b,to:g,preventScrollReset:x,viewTransition:E,...O},$){let{basename:L}=v.useContext(pa),J=typeof g=="string"&&qm.test(g),B,H=!1;if(typeof g=="string"&&J&&(B=g,Ym))try{let dt=new URL(window.location.href),Ct=g.startsWith("//")?new URL(dt.protocol+g):new URL(g),Ot=_a(Ct.pathname,L);Ct.origin===dt.origin&&Ot!=null?g=Ot+Ct.search+Ct.hash:H=!0}catch{aa(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let N=Ly(g,{relative:c}),[G,F,I]=xv(s,O),nt=Cv(g,{replace:p,state:y,target:b,preventScrollReset:x,relative:c,viewTransition:E});function it(dt){r&&r(dt),dt.defaultPrevented||nt(dt)}let bt=v.createElement("a",{...O,...I,href:B||N,onClick:H||d?r:it,ref:Ev($,F),target:b,"data-discover":!J&&u==="render"?"true":void 0});return G&&!J?v.createElement(v.Fragment,null,bt,v.createElement(Av,{page:N})):bt});Qm.displayName="Link";var Rv=v.forwardRef(function({"aria-current":r="page",caseSensitive:u=!1,className:s="",end:c=!1,style:d,to:p,viewTransition:y,children:b,...g},x){let E=Wi(p,{relative:g.relative}),O=hl(),$=v.useContext(Oo),{navigator:L,basename:J}=v.useContext(pa),B=$!=null&&jv(E)&&y===!0,H=L.encodeLocation?L.encodeLocation(E).pathname:E.pathname,N=O.pathname,G=$&&$.navigation&&$.navigation.location?$.navigation.location.pathname:null;u||(N=N.toLowerCase(),G=G?G.toLowerCase():null,H=H.toLowerCase()),G&&J&&(G=_a(G,J)||G);const F=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let I=N===H||!c&&N.startsWith(H)&&N.charAt(F)==="/",nt=G!=null&&(G===H||!c&&G.startsWith(H)&&G.charAt(H.length)==="/"),it={isActive:I,isPending:nt,isTransitioning:B},bt=I?r:void 0,dt;typeof s=="function"?dt=s(it):dt=[s,I?"active":null,nt?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let Ct=typeof d=="function"?d(it):d;return v.createElement(Qm,{...g,"aria-current":bt,className:dt,ref:x,style:Ct,to:p,viewTransition:y},typeof b=="function"?b(it):b)});Rv.displayName="NavLink";var Dv=v.forwardRef(({discover:l="render",fetcherKey:r,navigate:u,reloadDocument:s,replace:c,state:d,method:p=po,action:y,onSubmit:b,relative:g,preventScrollReset:x,viewTransition:E,...O},$)=>{let L=zv(),J=Nv(y,{relative:g}),B=p.toLowerCase()==="get"?"get":"post",H=typeof y=="string"&&qm.test(y),N=G=>{if(b&&b(G),G.defaultPrevented)return;G.preventDefault();let F=G.nativeEvent.submitter,I=(F==null?void 0:F.getAttribute("formmethod"))||p;L(F||G.currentTarget,{fetcherKey:r,method:I,navigate:u,replace:c,state:d,relative:g,preventScrollReset:x,viewTransition:E})};return v.createElement("form",{ref:$,method:B,action:J,onSubmit:s?b:N,...O,"data-discover":!H&&l==="render"?"true":void 0})});Dv.displayName="Form";function kv(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Xm(l){let r=v.useContext(Gn);return ie(r,kv(l)),r}function Cv(l,{target:r,replace:u,state:s,preventScrollReset:c,relative:d,viewTransition:p}={}){let y=Gy(),b=hl(),g=Wi(l,{relative:d});return v.useCallback(x=>{if(ov(x,r)){x.preventDefault();let E=u!==void 0?u:Qi(b)===Qi(g);y(l,{replace:E,state:s,preventScrollReset:c,relative:d,viewTransition:p})}},[b,y,g,u,s,r,l,c,d,p])}var Ov=0,Mv=()=>`__${String(++Ov)}__`;function zv(){let{router:l}=Xm("useSubmit"),{basename:r}=v.useContext(pa),u=Iy();return v.useCallback(async(s,c={})=>{let{action:d,method:p,encType:y,formData:b,body:g}=cv(s,r);if(c.navigate===!1){let x=c.fetcherKey||Mv();await l.fetch(x,u,c.action||d,{preventScrollReset:c.preventScrollReset,formData:b,body:g,formMethod:c.method||p,formEncType:c.encType||y,flushSync:c.flushSync})}else await l.navigate(c.action||d,{preventScrollReset:c.preventScrollReset,formData:b,body:g,formMethod:c.method||p,formEncType:c.encType||y,replace:c.replace,state:c.state,fromRouteId:u,flushSync:c.flushSync,viewTransition:c.viewTransition})},[l,r,u])}function Nv(l,{relative:r}={}){let{basename:u}=v.useContext(pa),s=v.useContext(Ba);ie(s,"useFormAction must be used inside a RouteContext");let[c]=s.matches.slice(-1),d={...Wi(l||".",{relative:r})},p=hl();if(l==null){d.search=p.search;let y=new URLSearchParams(d.search),b=y.getAll("index");if(b.some(x=>x==="")){y.delete("index"),b.filter(E=>E).forEach(E=>y.append("index",E));let x=y.toString();d.search=x?`?${x}`:""}}return(!l||l===".")&&c.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(d.pathname=d.pathname==="/"?u:ja([u,d.pathname])),Qi(d)}function jv(l,{relative:r}={}){let u=v.useContext(Bm);ie(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Xm("useViewTransitionState"),c=Wi(l,{relative:r});if(!u.isTransitioning)return!1;let d=_a(u.currentLocation.pathname,s)||u.currentLocation.pathname,p=_a(u.nextLocation.pathname,s)||u.nextLocation.pathname;return Ao(c.pathname,p)!=null||Ao(c.pathname,d)!=null}var _v=km(),de=function(){return de=Object.assign||function(r){for(var u,s=1,c=arguments.length;s<c;s++){u=arguments[s];for(var d in u)Object.prototype.hasOwnProperty.call(u,d)&&(r[d]=u[d])}return r},de.apply(this,arguments)};function Xi(l,r,u){if(u||arguments.length===2)for(var s=0,c=r.length,d;s<c;s++)(d||!(s in r))&&(d||(d=Array.prototype.slice.call(r,0,s)),d[s]=r[s]);return l.concat(d||Array.prototype.slice.call(r))}var Xt="-ms-",qi="-moz-",jt="-webkit-",Vm="comm",No="rule",$c="decl",Bv="@import",Zm="@keyframes",Hv="@layer",Km=Math.abs,Lc=String.fromCharCode,bc=Object.assign;function Uv(l,r){return fe(l,0)^45?(((r<<2^fe(l,0))<<2^fe(l,1))<<2^fe(l,2))<<2^fe(l,3):0}function Wm(l){return l.trim()}function Na(l,r){return(l=r.exec(l))?l[0]:l}function wt(l,r,u){return l.replace(r,u)}function go(l,r,u){return l.indexOf(r,u)}function fe(l,r){return l.charCodeAt(r)|0}function jn(l,r,u){return l.slice(r,u)}function da(l){return l.length}function Jm(l){return l.length}function Yi(l,r){return r.push(l),l}function $v(l,r){return l.map(r).join("")}function em(l,r){return l.filter(function(u){return!Na(u,r)})}var jo=1,_n=1,Fm=0,Je=0,ee=0,Yn="";function _o(l,r,u,s,c,d,p,y){return{value:l,root:r,parent:u,type:s,props:c,children:d,line:jo,column:_n,length:p,return:"",siblings:y}}function ul(l,r){return bc(_o("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},r)}function On(l){for(;l.root;)l=ul(l.root,{children:[l]});Yi(l,l.siblings)}function Lv(){return ee}function Gv(){return ee=Je>0?fe(Yn,--Je):0,_n--,ee===10&&(_n=1,jo--),ee}function ea(){return ee=Je<Fm?fe(Yn,Je++):0,_n++,ee===10&&(_n=1,jo++),ee}function _l(){return fe(Yn,Je)}function bo(){return Je}function Bo(l,r){return jn(Yn,l,r)}function yc(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Yv(l){return jo=_n=1,Fm=da(Yn=l),Je=0,[]}function qv(l){return Yn="",l}function cc(l){return Wm(Bo(Je-1,vc(l===91?l+2:l===40?l+1:l)))}function Qv(l){for(;(ee=_l())&&ee<33;)ea();return yc(l)>2||yc(ee)>3?"":" "}function Xv(l,r){for(;--r&&ea()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return Bo(l,bo()+(r<6&&_l()==32&&ea()==32))}function vc(l){for(;ea();)switch(ee){case l:return Je;case 34:case 39:l!==34&&l!==39&&vc(ee);break;case 40:l===41&&vc(l);break;case 92:ea();break}return Je}function Vv(l,r){for(;ea()&&l+ee!==57;)if(l+ee===84&&_l()===47)break;return"/*"+Bo(r,Je-1)+"*"+Lc(l===47?l:ea())}function Zv(l){for(;!yc(_l());)ea();return Bo(l,Je)}function Kv(l){return qv(yo("",null,null,null,[""],l=Yv(l),0,[0],l))}function yo(l,r,u,s,c,d,p,y,b){for(var g=0,x=0,E=p,O=0,$=0,L=0,J=1,B=1,H=1,N=0,G="",F=c,I=d,nt=s,it=G;B;)switch(L=N,N=ea()){case 40:if(L!=108&&fe(it,E-1)==58){go(it+=wt(cc(N),"&","&\f"),"&\f",Km(g?y[g-1]:0))!=-1&&(H=-1);break}case 34:case 39:case 91:it+=cc(N);break;case 9:case 10:case 13:case 32:it+=Qv(L);break;case 92:it+=Xv(bo()-1,7);continue;case 47:switch(_l()){case 42:case 47:Yi(Wv(Vv(ea(),bo()),r,u,b),b);break;default:it+="/"}break;case 123*J:y[g++]=da(it)*H;case 125*J:case 59:case 0:switch(N){case 0:case 125:B=0;case 59+x:H==-1&&(it=wt(it,/\f/g,"")),$>0&&da(it)-E&&Yi($>32?lm(it+";",s,u,E-1,b):lm(wt(it," ","")+";",s,u,E-2,b),b);break;case 59:it+=";";default:if(Yi(nt=am(it,r,u,g,x,c,y,G,F=[],I=[],E,d),d),N===123)if(x===0)yo(it,r,nt,nt,F,d,E,y,I);else switch(O===99&&fe(it,3)===110?100:O){case 100:case 108:case 109:case 115:yo(l,nt,nt,s&&Yi(am(l,nt,nt,0,0,c,y,G,c,F=[],E,I),I),c,I,E,y,s?F:I);break;default:yo(it,nt,nt,nt,[""],I,0,y,I)}}g=x=$=0,J=H=1,G=it="",E=p;break;case 58:E=1+da(it),$=L;default:if(J<1){if(N==123)--J;else if(N==125&&J++==0&&Gv()==125)continue}switch(it+=Lc(N),N*J){case 38:H=x>0?1:(it+="\f",-1);break;case 44:y[g++]=(da(it)-1)*H,H=1;break;case 64:_l()===45&&(it+=cc(ea())),O=_l(),x=E=da(G=it+=Zv(bo())),N++;break;case 45:L===45&&da(it)==2&&(J=0)}}return d}function am(l,r,u,s,c,d,p,y,b,g,x,E){for(var O=c-1,$=c===0?d:[""],L=Jm($),J=0,B=0,H=0;J<s;++J)for(var N=0,G=jn(l,O+1,O=Km(B=p[J])),F=l;N<L;++N)(F=Wm(B>0?$[N]+" "+G:wt(G,/&\f/g,$[N])))&&(b[H++]=F);return _o(l,r,u,c===0?No:y,b,g,x,E)}function Wv(l,r,u,s){return _o(l,r,u,Vm,Lc(Lv()),jn(l,2,-2),0,s)}function lm(l,r,u,s,c){return _o(l,r,u,$c,jn(l,0,s),jn(l,s+1,-1),s,c)}function Im(l,r,u){switch(Uv(l,r)){case 5103:return jt+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return jt+l+l;case 4789:return qi+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return jt+l+qi+l+Xt+l+l;case 5936:switch(fe(l,r+11)){case 114:return jt+l+Xt+wt(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return jt+l+Xt+wt(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return jt+l+Xt+wt(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return jt+l+Xt+l+l;case 6165:return jt+l+Xt+"flex-"+l+l;case 5187:return jt+l+wt(l,/(\w+).+(:[^]+)/,jt+"box-$1$2"+Xt+"flex-$1$2")+l;case 5443:return jt+l+Xt+"flex-item-"+wt(l,/flex-|-self/g,"")+(Na(l,/flex-|baseline/)?"":Xt+"grid-row-"+wt(l,/flex-|-self/g,""))+l;case 4675:return jt+l+Xt+"flex-line-pack"+wt(l,/align-content|flex-|-self/g,"")+l;case 5548:return jt+l+Xt+wt(l,"shrink","negative")+l;case 5292:return jt+l+Xt+wt(l,"basis","preferred-size")+l;case 6060:return jt+"box-"+wt(l,"-grow","")+jt+l+Xt+wt(l,"grow","positive")+l;case 4554:return jt+wt(l,/([^-])(transform)/g,"$1"+jt+"$2")+l;case 6187:return wt(wt(wt(l,/(zoom-|grab)/,jt+"$1"),/(image-set)/,jt+"$1"),l,"")+l;case 5495:case 3959:return wt(l,/(image-set\([^]*)/,jt+"$1$`$1");case 4968:return wt(wt(l,/(.+:)(flex-)?(.*)/,jt+"box-pack:$3"+Xt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+jt+l+l;case 4200:if(!Na(l,/flex-|baseline/))return Xt+"grid-column-align"+jn(l,r)+l;break;case 2592:case 3360:return Xt+wt(l,"template-","")+l;case 4384:case 3616:return u&&u.some(function(s,c){return r=c,Na(s.props,/grid-\w+-end/)})?~go(l+(u=u[r].value),"span",0)?l:Xt+wt(l,"-start","")+l+Xt+"grid-row-span:"+(~go(u,"span",0)?Na(u,/\d+/):+Na(u,/\d+/)-+Na(l,/\d+/))+";":Xt+wt(l,"-start","")+l;case 4896:case 4128:return u&&u.some(function(s){return Na(s.props,/grid-\w+-start/)})?l:Xt+wt(wt(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return wt(l,/(.+)-inline(.+)/,jt+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(da(l)-1-r>6)switch(fe(l,r+1)){case 109:if(fe(l,r+4)!==45)break;case 102:return wt(l,/(.+:)(.+)-([^]+)/,"$1"+jt+"$2-$3$1"+qi+(fe(l,r+3)==108?"$3":"$2-$3"))+l;case 115:return~go(l,"stretch",0)?Im(wt(l,"stretch","fill-available"),r,u)+l:l}break;case 5152:case 5920:return wt(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,c,d,p,y,b,g){return Xt+c+":"+d+g+(p?Xt+c+"-span:"+(y?b:+b-+d)+g:"")+l});case 4949:if(fe(l,r+6)===121)return wt(l,":",":"+jt)+l;break;case 6444:switch(fe(l,fe(l,14)===45?18:11)){case 120:return wt(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+jt+(fe(l,14)===45?"inline-":"")+"box$3$1"+jt+"$2$3$1"+Xt+"$2box$3")+l;case 100:return wt(l,":",":"+Xt)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return wt(l,"scroll-","scroll-snap-")+l}return l}function wo(l,r){for(var u="",s=0;s<l.length;s++)u+=r(l[s],s,l,r)||"";return u}function Jv(l,r,u,s){switch(l.type){case Hv:if(l.children.length)break;case Bv:case $c:return l.return=l.return||l.value;case Vm:return"";case Zm:return l.return=l.value+"{"+wo(l.children,s)+"}";case No:if(!da(l.value=l.props.join(",")))return""}return da(u=wo(l.children,s))?l.return=l.value+"{"+u+"}":""}function Fv(l){var r=Jm(l);return function(u,s,c,d){for(var p="",y=0;y<r;y++)p+=l[y](u,s,c,d)||"";return p}}function Iv(l){return function(r){r.root||(r=r.return)&&l(r)}}function Pv(l,r,u,s){if(l.length>-1&&!l.return)switch(l.type){case $c:l.return=Im(l.value,l.length,u);return;case Zm:return wo([ul(l,{value:wt(l.value,"@","@"+jt)})],s);case No:if(l.length)return $v(u=l.props,function(c){switch(Na(c,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":On(ul(l,{props:[wt(c,/:(read-\w+)/,":"+qi+"$1")]})),On(ul(l,{props:[c]})),bc(l,{props:em(u,s)});break;case"::placeholder":On(ul(l,{props:[wt(c,/:(plac\w+)/,":"+jt+"input-$1")]})),On(ul(l,{props:[wt(c,/:(plac\w+)/,":"+qi+"$1")]})),On(ul(l,{props:[wt(c,/:(plac\w+)/,Xt+"input-$1")]})),On(ul(l,{props:[c]})),bc(l,{props:em(u,s)});break}return""})}}var t1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ue={},Bn=typeof process<"u"&&Ue!==void 0&&(Ue.REACT_APP_SC_ATTR||Ue.SC_ATTR)||"data-styled",Pm="active",tg="data-styled-version",Ho="6.1.17",Gc=`/*!sc*/
`,So=typeof window<"u"&&"HTMLElement"in window,e1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ue!==void 0&&Ue.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ue.REACT_APP_SC_DISABLE_SPEEDY!==""?Ue.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ue.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ue!==void 0&&Ue.SC_DISABLE_SPEEDY!==void 0&&Ue.SC_DISABLE_SPEEDY!==""&&Ue.SC_DISABLE_SPEEDY!=="false"&&Ue.SC_DISABLE_SPEEDY),a1={},Uo=Object.freeze([]),Hn=Object.freeze({});function eg(l,r,u){return u===void 0&&(u=Hn),l.theme!==u.theme&&l.theme||r||u.theme}var ag=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),l1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,n1=/(^-|-$)/g;function nm(l){return l.replace(l1,"-").replace(n1,"")}var i1=/(a)(d)/gi,uo=52,im=function(l){return String.fromCharCode(l+(l>25?39:97))};function xc(l){var r,u="";for(r=Math.abs(l);r>uo;r=r/uo|0)u=im(r%uo)+u;return(im(r%uo)+u).replace(i1,"$1-$2")}var fc,lg=5381,Nn=function(l,r){for(var u=r.length;u;)l=33*l^r.charCodeAt(--u);return l},ng=function(l){return Nn(lg,l)};function ig(l){return xc(ng(l)>>>0)}function r1(l){return l.displayName||l.name||"Component"}function dc(l){return typeof l=="string"&&!0}var rg=typeof Symbol=="function"&&Symbol.for,og=rg?Symbol.for("react.memo"):60115,o1=rg?Symbol.for("react.forward_ref"):60112,u1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ug={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c1=((fc={})[o1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},fc[og]=ug,fc);function rm(l){return("type"in(r=l)&&r.type.$$typeof)===og?ug:"$$typeof"in l?c1[l.$$typeof]:u1;var r}var f1=Object.defineProperty,d1=Object.getOwnPropertyNames,om=Object.getOwnPropertySymbols,h1=Object.getOwnPropertyDescriptor,p1=Object.getPrototypeOf,um=Object.prototype;function sg(l,r,u){if(typeof r!="string"){if(um){var s=p1(r);s&&s!==um&&sg(l,s,u)}var c=d1(r);om&&(c=c.concat(om(r)));for(var d=rm(l),p=rm(r),y=0;y<c.length;++y){var b=c[y];if(!(b in s1||u&&u[b]||p&&b in p||d&&b in d)){var g=h1(r,b);try{f1(l,b,g)}catch{}}}}return l}function Bl(l){return typeof l=="function"}function Yc(l){return typeof l=="object"&&"styledComponentId"in l}function Nl(l,r){return l&&r?"".concat(l," ").concat(r):l||r||""}function Ac(l,r){if(l.length===0)return"";for(var u=l[0],s=1;s<l.length;s++)u+=l[s];return u}function Vi(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function wc(l,r,u){if(u===void 0&&(u=!1),!u&&!Vi(l)&&!Array.isArray(l))return r;if(Array.isArray(r))for(var s=0;s<r.length;s++)l[s]=wc(l[s],r[s]);else if(Vi(r))for(var s in r)l[s]=wc(l[s],r[s]);return l}function qc(l,r){Object.defineProperty(l,"toString",{value:r})}function Hl(l){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var m1=function(){function l(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return l.prototype.indexOfGroup=function(r){for(var u=0,s=0;s<r;s++)u+=this.groupSizes[s];return u},l.prototype.insertRules=function(r,u){if(r>=this.groupSizes.length){for(var s=this.groupSizes,c=s.length,d=c;r>=d;)if((d<<=1)<0)throw Hl(16,"".concat(r));this.groupSizes=new Uint32Array(d),this.groupSizes.set(s),this.length=d;for(var p=c;p<d;p++)this.groupSizes[p]=0}for(var y=this.indexOfGroup(r+1),b=(p=0,u.length);p<b;p++)this.tag.insertRule(y,u[p])&&(this.groupSizes[r]++,y++)},l.prototype.clearGroup=function(r){if(r<this.length){var u=this.groupSizes[r],s=this.indexOfGroup(r),c=s+u;this.groupSizes[r]=0;for(var d=s;d<c;d++)this.tag.deleteRule(s)}},l.prototype.getGroup=function(r){var u="";if(r>=this.length||this.groupSizes[r]===0)return u;for(var s=this.groupSizes[r],c=this.indexOfGroup(r),d=c+s,p=c;p<d;p++)u+="".concat(this.tag.getRule(p)).concat(Gc);return u},l}(),vo=new Map,Eo=new Map,xo=1,so=function(l){if(vo.has(l))return vo.get(l);for(;Eo.has(xo);)xo++;var r=xo++;return vo.set(l,r),Eo.set(r,l),r},g1=function(l,r){xo=r+1,vo.set(l,r),Eo.set(r,l)},b1="style[".concat(Bn,"][").concat(tg,'="').concat(Ho,'"]'),y1=new RegExp("^".concat(Bn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),v1=function(l,r,u){for(var s,c=u.split(","),d=0,p=c.length;d<p;d++)(s=c[d])&&l.registerName(r,s)},x1=function(l,r){for(var u,s=((u=r.textContent)!==null&&u!==void 0?u:"").split(Gc),c=[],d=0,p=s.length;d<p;d++){var y=s[d].trim();if(y){var b=y.match(y1);if(b){var g=0|parseInt(b[1],10),x=b[2];g!==0&&(g1(x,g),v1(l,x,b[3]),l.getTag().insertRules(g,c)),c.length=0}else c.push(y)}}},sm=function(l){for(var r=document.querySelectorAll(b1),u=0,s=r.length;u<s;u++){var c=r[u];c&&c.getAttribute(Bn)!==Pm&&(x1(l,c),c.parentNode&&c.parentNode.removeChild(c))}};function A1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var cg=function(l){var r=document.head,u=l||r,s=document.createElement("style"),c=function(y){var b=Array.from(y.querySelectorAll("style[".concat(Bn,"]")));return b[b.length-1]}(u),d=c!==void 0?c.nextSibling:null;s.setAttribute(Bn,Pm),s.setAttribute(tg,Ho);var p=A1();return p&&s.setAttribute("nonce",p),u.insertBefore(s,d),s},w1=function(){function l(r){this.element=cg(r),this.element.appendChild(document.createTextNode("")),this.sheet=function(u){if(u.sheet)return u.sheet;for(var s=document.styleSheets,c=0,d=s.length;c<d;c++){var p=s[c];if(p.ownerNode===u)return p}throw Hl(17)}(this.element),this.length=0}return l.prototype.insertRule=function(r,u){try{return this.sheet.insertRule(u,r),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},l.prototype.getRule=function(r){var u=this.sheet.cssRules[r];return u&&u.cssText?u.cssText:""},l}(),S1=function(){function l(r){this.element=cg(r),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(r,u){if(r<=this.length&&r>=0){var s=document.createTextNode(u);return this.element.insertBefore(s,this.nodes[r]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},l.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},l}(),E1=function(){function l(r){this.rules=[],this.length=0}return l.prototype.insertRule=function(r,u){return r<=this.length&&(this.rules.splice(r,0,u),this.length++,!0)},l.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},l.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},l}(),cm=So,T1={isServer:!So,useCSSOMInjection:!e1},To=function(){function l(r,u,s){r===void 0&&(r=Hn),u===void 0&&(u={});var c=this;this.options=de(de({},T1),r),this.gs=u,this.names=new Map(s),this.server=!!r.isServer,!this.server&&So&&cm&&(cm=!1,sm(this)),qc(this,function(){return function(d){for(var p=d.getTag(),y=p.length,b="",g=function(E){var O=function(H){return Eo.get(H)}(E);if(O===void 0)return"continue";var $=d.names.get(O),L=p.getGroup(E);if($===void 0||!$.size||L.length===0)return"continue";var J="".concat(Bn,".g").concat(E,'[id="').concat(O,'"]'),B="";$!==void 0&&$.forEach(function(H){H.length>0&&(B+="".concat(H,","))}),b+="".concat(L).concat(J,'{content:"').concat(B,'"}').concat(Gc)},x=0;x<y;x++)g(x);return b}(c)})}return l.registerId=function(r){return so(r)},l.prototype.rehydrate=function(){!this.server&&So&&sm(this)},l.prototype.reconstructWithOptions=function(r,u){return u===void 0&&(u=!0),new l(de(de({},this.options),r),this.gs,u&&this.names||void 0)},l.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(r=function(u){var s=u.useCSSOMInjection,c=u.target;return u.isServer?new E1(c):s?new w1(c):new S1(c)}(this.options),new m1(r)));var r},l.prototype.hasNameForId=function(r,u){return this.names.has(r)&&this.names.get(r).has(u)},l.prototype.registerName=function(r,u){if(so(r),this.names.has(r))this.names.get(r).add(u);else{var s=new Set;s.add(u),this.names.set(r,s)}},l.prototype.insertRules=function(r,u,s){this.registerName(r,u),this.getTag().insertRules(so(r),s)},l.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},l.prototype.clearRules=function(r){this.getTag().clearGroup(so(r)),this.clearNames(r)},l.prototype.clearTag=function(){this.tag=void 0},l}(),R1=/&/g,D1=/^\s*\/\/.*$/gm;function fg(l,r){return l.map(function(u){return u.type==="rule"&&(u.value="".concat(r," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(r," ")),u.props=u.props.map(function(s){return"".concat(r," ").concat(s)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=fg(u.children,r)),u})}function k1(l){var r,u,s,c=Hn,d=c.options,p=d===void 0?Hn:d,y=c.plugins,b=y===void 0?Uo:y,g=function(O,$,L){return L.startsWith(u)&&L.endsWith(u)&&L.replaceAll(u,"").length>0?".".concat(r):O},x=b.slice();x.push(function(O){O.type===No&&O.value.includes("&")&&(O.props[0]=O.props[0].replace(R1,u).replace(s,g))}),p.prefix&&x.push(Pv),x.push(Jv);var E=function(O,$,L,J){$===void 0&&($=""),L===void 0&&(L=""),J===void 0&&(J="&"),r=J,u=$,s=new RegExp("\\".concat(u,"\\b"),"g");var B=O.replace(D1,""),H=Kv(L||$?"".concat(L," ").concat($," { ").concat(B," }"):B);p.namespace&&(H=fg(H,p.namespace));var N=[];return wo(H,Fv(x.concat(Iv(function(G){return N.push(G)})))),N};return E.hash=b.length?b.reduce(function(O,$){return $.name||Hl(15),Nn(O,$.name)},lg).toString():"",E}var C1=new To,Sc=k1(),dg=_.createContext({shouldForwardProp:void 0,styleSheet:C1,stylis:Sc});dg.Consumer;_.createContext(void 0);function Ec(){return v.useContext(dg)}var O1=function(){function l(r,u){var s=this;this.inject=function(c,d){d===void 0&&(d=Sc);var p=s.name+d.hash;c.hasNameForId(s.id,p)||c.insertRules(s.id,p,d(s.rules,p,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=u,qc(this,function(){throw Hl(12,String(s.name))})}return l.prototype.getName=function(r){return r===void 0&&(r=Sc),this.name+r.hash},l}(),M1=function(l){return l>="A"&&l<="Z"};function fm(l){for(var r="",u=0;u<l.length;u++){var s=l[u];if(u===1&&s==="-"&&l[0]==="-")return l;M1(s)?r+="-"+s.toLowerCase():r+=s}return r.startsWith("ms-")?"-"+r:r}var hg=function(l){return l==null||l===!1||l===""},pg=function(l){var r,u,s=[];for(var c in l){var d=l[c];l.hasOwnProperty(c)&&!hg(d)&&(Array.isArray(d)&&d.isCss||Bl(d)?s.push("".concat(fm(c),":"),d,";"):Vi(d)?s.push.apply(s,Xi(Xi(["".concat(c," {")],pg(d),!1),["}"],!1)):s.push("".concat(fm(c),": ").concat((r=c,(u=d)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||r in t1||r.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return s};function cl(l,r,u,s){if(hg(l))return[];if(Yc(l))return[".".concat(l.styledComponentId)];if(Bl(l)){if(!Bl(d=l)||d.prototype&&d.prototype.isReactComponent||!r)return[l];var c=l(r);return cl(c,r,u,s)}var d;return l instanceof O1?u?(l.inject(u,s),[l.getName(s)]):[l]:Vi(l)?pg(l):Array.isArray(l)?Array.prototype.concat.apply(Uo,l.map(function(p){return cl(p,r,u,s)})):[l.toString()]}function mg(l){for(var r=0;r<l.length;r+=1){var u=l[r];if(Bl(u)&&!Yc(u))return!1}return!0}var z1=ng(Ho),N1=function(){function l(r,u,s){this.rules=r,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&mg(r),this.componentId=u,this.baseHash=Nn(z1,u),this.baseStyle=s,To.registerId(u)}return l.prototype.generateAndInjectStyles=function(r,u,s){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,u,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))c=Nl(c,this.staticRulesId);else{var d=Ac(cl(this.rules,r,u,s)),p=xc(Nn(this.baseHash,d)>>>0);if(!u.hasNameForId(this.componentId,p)){var y=s(d,".".concat(p),void 0,this.componentId);u.insertRules(this.componentId,p,y)}c=Nl(c,p),this.staticRulesId=p}else{for(var b=Nn(this.baseHash,s.hash),g="",x=0;x<this.rules.length;x++){var E=this.rules[x];if(typeof E=="string")g+=E;else if(E){var O=Ac(cl(E,r,u,s));b=Nn(b,O+x),g+=O}}if(g){var $=xc(b>>>0);u.hasNameForId(this.componentId,$)||u.insertRules(this.componentId,$,s(g,".".concat($),void 0,this.componentId)),c=Nl(c,$)}}return c},l}(),Zi=_.createContext(void 0);Zi.Consumer;function j1(l){var r=_.useContext(Zi),u=v.useMemo(function(){return function(s,c){if(!s)throw Hl(14);if(Bl(s)){var d=s(c);return d}if(Array.isArray(s)||typeof s!="object")throw Hl(8);return c?de(de({},c),s):s}(l.theme,r)},[l.theme,r]);return l.children?_.createElement(Zi.Provider,{value:u},l.children):null}var hc={};function _1(l,r,u){var s=Yc(l),c=l,d=!dc(l),p=r.attrs,y=p===void 0?Uo:p,b=r.componentId,g=b===void 0?function(F,I){var nt=typeof F!="string"?"sc":nm(F);hc[nt]=(hc[nt]||0)+1;var it="".concat(nt,"-").concat(ig(Ho+nt+hc[nt]));return I?"".concat(I,"-").concat(it):it}(r.displayName,r.parentComponentId):b,x=r.displayName,E=x===void 0?function(F){return dc(F)?"styled.".concat(F):"Styled(".concat(r1(F),")")}(l):x,O=r.displayName&&r.componentId?"".concat(nm(r.displayName),"-").concat(r.componentId):r.componentId||g,$=s&&c.attrs?c.attrs.concat(y).filter(Boolean):y,L=r.shouldForwardProp;if(s&&c.shouldForwardProp){var J=c.shouldForwardProp;if(r.shouldForwardProp){var B=r.shouldForwardProp;L=function(F,I){return J(F,I)&&B(F,I)}}else L=J}var H=new N1(u,O,s?c.componentStyle:void 0);function N(F,I){return function(nt,it,bt){var dt=nt.attrs,Ct=nt.componentStyle,Ot=nt.defaultProps,V=nt.foldedComponentIds,m=nt.styledComponentId,j=nt.target,tt=_.useContext(Zi),k=Ec(),Y=nt.shouldForwardProp||k.shouldForwardProp,P=eg(it,tt,Ot)||Hn,ot=function(rt,lt,ct){for(var ht,K=de(de({},lt),{className:void 0,theme:ct}),yt=0;yt<rt.length;yt+=1){var pt=Bl(ht=rt[yt])?ht(K):ht;for(var xt in pt)K[xt]=xt==="className"?Nl(K[xt],pt[xt]):xt==="style"?de(de({},K[xt]),pt[xt]):pt[xt]}return lt.className&&(K.className=Nl(K.className,lt.className)),K}(dt,it,P),w=ot.as||j,q={};for(var at in ot)ot[at]===void 0||at[0]==="$"||at==="as"||at==="theme"&&ot.theme===P||(at==="forwardedAs"?q.as=ot.forwardedAs:Y&&!Y(at,w)||(q[at]=ot[at]));var U=function(rt,lt){var ct=Ec(),ht=rt.generateAndInjectStyles(lt,ct.styleSheet,ct.stylis);return ht}(Ct,ot),W=Nl(V,m);return U&&(W+=" "+U),ot.className&&(W+=" "+ot.className),q[dc(w)&&!ag.has(w)?"class":"className"]=W,bt&&(q.ref=bt),v.createElement(w,q)}(G,F,I)}N.displayName=E;var G=_.forwardRef(N);return G.attrs=$,G.componentStyle=H,G.displayName=E,G.shouldForwardProp=L,G.foldedComponentIds=s?Nl(c.foldedComponentIds,c.styledComponentId):"",G.styledComponentId=O,G.target=s?c.target:l,Object.defineProperty(G,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(F){this._foldedDefaultProps=s?function(I){for(var nt=[],it=1;it<arguments.length;it++)nt[it-1]=arguments[it];for(var bt=0,dt=nt;bt<dt.length;bt++)wc(I,dt[bt],!0);return I}({},c.defaultProps,F):F}}),qc(G,function(){return".".concat(G.styledComponentId)}),d&&sg(G,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),G}function dm(l,r){for(var u=[l[0]],s=0,c=r.length;s<c;s+=1)u.push(r[s],l[s+1]);return u}var hm=function(l){return Object.assign(l,{isCss:!0})};function ut(l){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];if(Bl(l)||Vi(l))return hm(cl(dm(Uo,Xi([l],r,!0))));var s=l;return r.length===0&&s.length===1&&typeof s[0]=="string"?cl(s):hm(cl(dm(s,r)))}function Tc(l,r,u){if(u===void 0&&(u=Hn),!r)throw Hl(1,r);var s=function(c){for(var d=[],p=1;p<arguments.length;p++)d[p-1]=arguments[p];return l(r,u,ut.apply(void 0,Xi([c],d,!1)))};return s.attrs=function(c){return Tc(l,r,de(de({},u),{attrs:Array.prototype.concat(u.attrs,c).filter(Boolean)}))},s.withConfig=function(c){return Tc(l,r,de(de({},u),c))},s}var gg=function(l){return Tc(_1,l)},et=gg;ag.forEach(function(l){et[l]=gg(l)});var B1=function(){function l(r,u){this.rules=r,this.componentId=u,this.isStatic=mg(r),To.registerId(this.componentId+1)}return l.prototype.createStyles=function(r,u,s,c){var d=c(Ac(cl(this.rules,u,s,c)),""),p=this.componentId+r;s.insertRules(p,p,d)},l.prototype.removeStyles=function(r,u){u.clearRules(this.componentId+r)},l.prototype.renderStyles=function(r,u,s,c){r>2&&To.registerId(this.componentId+r),this.removeStyles(r,s),this.createStyles(r,u,s,c)},l}();function H1(l){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];var s=ut.apply(void 0,Xi([l],r,!1)),c="sc-global-".concat(ig(JSON.stringify(s))),d=new B1(s,c),p=function(b){var g=Ec(),x=_.useContext(Zi),E=_.useRef(g.styleSheet.allocateGSInstance(c)).current;return g.styleSheet.server&&y(E,b,g.styleSheet,x,g.stylis),_.useLayoutEffect(function(){if(!g.styleSheet.server)return y(E,b,g.styleSheet,x,g.stylis),function(){return d.removeStyles(E,g.styleSheet)}},[E,b,g.styleSheet,x,g.stylis]),null};function y(b,g,x,E,O){if(d.isStatic)d.renderStyles(b,a1,x,O);else{var $=de(de({},g),{theme:eg(g,E,p.defaultProps)});d.renderStyles(b,$,x,O)}}return _.memo(p)}var U1=`
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

`;const Qc="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",Xc="inset 2px 2px 3px rgba(0,0,0,0.2)",la=()=>ut`
  -webkit-text-fill-color: ${({theme:l})=>l.materialTextDisabled};
  color: ${({theme:l})=>l.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:l})=>l.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,na=({background:l="material",color:r="materialText"}={})=>ut`
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
`,Mn={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},$1=({theme:l,topLeftInner:r,bottomRightInner:u,hasShadow:s=!1,hasInsetShadow:c=!1})=>[s?Qc:!1,c?Xc:!1,r!==null?`inset 1px 1px 0px 1px ${l[r]}`:!1,u!==null?`inset -1px -1px 0 1px ${l[u]}`:!1].filter(Boolean).join(", "),Jt=({invert:l=!1,style:r="button"}={})=>{const u={topLeftOuter:l?"bottomRightOuter":"topLeftOuter",topLeftInner:l?"bottomRightInner":"topLeftInner",bottomRightInner:l?"topLeftInner":"bottomRightInner",bottomRightOuter:l?"topLeftOuter":"bottomRightOuter"};return ut`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:s})=>s[Mn[r][u.topLeftOuter]]};
    border-top-color: ${({theme:s})=>s[Mn[r][u.topLeftOuter]]};
    border-right-color: ${({theme:s})=>s[Mn[r][u.bottomRightOuter]]};
    border-bottom-color: ${({theme:s})=>s[Mn[r][u.bottomRightOuter]]};
    box-shadow: ${({theme:s,shadow:c})=>$1({theme:s,topLeftInner:Mn[r][u.topLeftInner],bottomRightInner:Mn[r][u.bottomRightInner],hasShadow:c})};
  `},Un=()=>ut`
  outline: 2px dotted ${({theme:l})=>l.materialText};
`,L1=l=>Buffer.from(l).toString("base64"),G1=typeof btoa<"u"?btoa:L1,co=(l,r=0)=>{const u=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${r} 13 13)">
      <polygon fill="${l}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${G1(u)})`},Vc=(l="default")=>ut`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:r})=>Ji({mainColor:l==="flat"?r.flatLight:r.material,secondaryColor:l==="flat"?r.canvas:r.borderLightest})}
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
`,Y1=et.a`
  color: ${({theme:l})=>l.anchor};
  font-size: inherit;
  text-decoration: ${({underline:l})=>l?"underline":"none"};
  &:visited {
    color: ${({theme:l})=>l.anchorVisited};
  }
`,q1=v.forwardRef(({children:l,underline:r=!0,...u},s)=>_.createElement(Y1,{ref:s,underline:r,...u},l));q1.displayName="Anchor";const Q1=et.header`
  ${Jt()};
  ${na()};

  position: ${l=>{var r;return(r=l.position)!==null&&r!==void 0?r:l.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,bg=v.forwardRef(({children:l,fixed:r=!0,position:u="fixed",...s},c)=>_.createElement(Q1,{fixed:r,position:r!==!1?u:void 0,ref:c,...s},l));bg.displayName="AppBar";const $l=()=>{};function jl(l,r,u){return u!==null&&l>u?u:r!==null&&l<r?r:l}function X1(l){if(Math.abs(l)<1){const u=l.toExponential().split("e-"),s=u[0].split(".")[1];return(s?s.length:0)+parseInt(u[1],10)}const r=l.toString().split(".")[1];return r?r.length:0}function pm(l,r,u){const s=Math.round((l-u)/r)*r+u;return Number(s.toFixed(X1(r)))}function fl(l){return typeof l=="number"?`${l}px`:l}const V1=et.div`
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
`,Z1=et.img`
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
`,$o=et.button`
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
        `:ut`
          ${na()};
          border: none;
          ${r&&la()}
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
`,$n=v.forwardRef(({onClick:l,disabled:r=!1,children:u,type:s="button",fullWidth:c=!1,size:d="md",square:p=!1,active:y=!1,onTouchStart:b=$l,primary:g=!1,variant:x="default",...E},O)=>_.createElement($o,{active:y,disabled:r,$disabled:r,fullWidth:c,onClick:r?void 0:l,onTouchStart:b,primary:g,ref:O,size:d,square:p,type:s,variant:x,...E},u));$n.displayName="Button";function dl({defaultValue:l,onChange:r,onChangePropName:u="onChange",readOnly:s,value:c,valuePropName:d="value"}){const p=c!==void 0,[y,b]=v.useState(l),g=v.useCallback(x=>{p||b(x)},[p]);if(p&&typeof r!="function"&&!s){const x=`Warning: You provided a \`${d}\` prop to a component without an \`${u}\` handler.${d==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${u}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${u}\` function that updates \`${d}\`.`}`;console.warn(x)}return[p?c:y,g]}const Rc=et.li`
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
`,sl=v.forwardRef(({size:l="lg",disabled:r,square:u,children:s,onClick:c,primary:d,...p},y)=>_.createElement(Rc,{$disabled:r,size:l,square:u,onClick:r?void 0:c,primary:d,role:"menuitem",ref:y,"aria-disabled":r,...p},s));sl.displayName="MenuListItem";const yg=et.ul.attrs(()=>({role:"menu"}))`
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
`;yg.displayName="MenuList";const ha=20,Ro=et.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${ha}px;
  height: ${ha}px;
  opacity: 0;
  z-index: -1;
`,Zc=et.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:l})=>l?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:l})=>l.materialText};
  ${l=>l.$disabled&&la()}

  ${Rc} & {
    margin: 0;
    height: 100%;
  }
  ${Rc}:hover & {
    ${({$disabled:l,theme:r})=>!l&&ut`
        color: ${r.materialTextInvert};
      `};
  }
`,Kc=et.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${Ro}:focus ~ & {
    ${Un}
  }
  ${Ro}:not(:disabled) ~ &:active {
    ${Un}
  }
`,ma=et.div`
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
`,J1=et.div`
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
`,F1=et(ma)`
  ${xg}
  width: ${ha}px;
  height: ${ha}px;
  background: ${({$disabled:l,theme:r})=>l?r.material:r.canvas};
  &:before {
    box-shadow: none;
  }
`,I1=et.div`
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
`,P1=et.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,tx=et.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
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
`,ex={flat:I1,default:F1},ax=v.forwardRef(({checked:l,className:r="",defaultChecked:u=!1,disabled:s=!1,indeterminate:c=!1,label:d="",onChange:p=$l,style:y={},value:b,variant:g="default",...x},E)=>{var O;const[$,L]=dl({defaultValue:u,onChange:p,readOnly:(O=x.readOnly)!==null&&O!==void 0?O:s,value:l}),J=v.useCallback(N=>{const G=N.target.checked;L(G),p(N)},[p,L]),B=ex[g];let H=null;return c?H=tx:$&&(H=P1),_.createElement(Zc,{$disabled:s,className:r,style:y},_.createElement(Ro,{disabled:s,onChange:s?void 0:J,readOnly:s,type:"checkbox",value:b,checked:$,"data-indeterminate":c,ref:E,...x}),_.createElement(B,{$disabled:s,role:"presentation"},H&&_.createElement(H,{$disabled:s,variant:g})),d&&_.createElement(Kc,null,d))});ax.displayName="Checkbox";const Do=et.div`
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
`;Do.displayName="Separator";const lx=et($o)`
  padding-left: 8px;
`,nx=et(Do)`
  height: 21px;
  position: relative;
  top: 0;
`,Ag=et.input`
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
`,ix=et.div`
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
`,rx=et.span`
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
`,ox=v.forwardRef(({value:l,defaultValue:r,onChange:u=$l,disabled:s=!1,variant:c="default",...d},p)=>{var y;const[b,g]=dl({defaultValue:r,onChange:u,readOnly:(y=d.readOnly)!==null&&y!==void 0?y:s,value:l}),x=E=>{const O=E.target.value;g(O),u(E)};return _.createElement(lx,{disabled:s,as:"div",variant:c,size:"md"},_.createElement(Ag,{onChange:x,readOnly:s,disabled:s,value:b??"#008080",type:"color",ref:p,...d}),_.createElement(ix,{$disabled:s,color:b??"#008080",role:"presentation"}),c==="default"&&_.createElement(nx,{orientation:"vertical"}),_.createElement(rx,{$disabled:s,variant:c}))});ox.displayName="ColorInput";const ux=et.div`
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
`,mm=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],sx=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function cx({digit:l=0,pixelSize:r=2,...u}){const s=sx[Number(l)].map((c,d)=>c?`${mm[d]} active`:mm[d]);return _.createElement(ux,{pixelSize:r,...u},s.map((c,d)=>_.createElement("span",{className:c,key:d})))}const fx=et.div`
  ${Jt({style:"status"})}
  display: inline-flex;
  background: #000000;
`,dx={sm:1,md:2,lg:3,xl:4},hx=v.forwardRef(({value:l=0,minLength:r=3,size:u="md",...s},c)=>{const d=v.useMemo(()=>l.toString().padStart(r,"0").split(""),[r,l]);return _.createElement(fx,{ref:c,...s},d.map((p,y)=>_.createElement(cx,{digit:p,pixelSize:dx[u],key:y})))});hx.displayName="Counter";const wg=ut`
  display: flex;
  align-items: center;
  width: ${({fullWidth:l})=>l?"100%":"auto"};
  min-height: ${ge.md};
`,px=et(ma).attrs({"data-testid":"variant-default"})`
  ${wg}
  background: ${({$disabled:l,theme:r})=>l?r.material:r.canvas};
`,mx=et.div.attrs({"data-testid":"variant-flat"})`
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
  ${({disabled:l,variant:r})=>r!=="flat"&&l&&la()}
`,gx=et.input`
  ${Sg}
  padding: 0 8px;
`,bx=et.textarea`
  ${Sg}
  padding: 8px;
  resize: none;
  ${({variant:l})=>Vc(l)}
`,Eg=v.forwardRef(({className:l,disabled:r=!1,fullWidth:u,onChange:s=$l,shadow:c=!0,style:d,variant:p="default",...y},b)=>{const g=p==="flat"?mx:px,x=v.useMemo(()=>{var E;return y.multiline?_.createElement(bx,{disabled:r,onChange:r?void 0:s,readOnly:r,ref:b,variant:p,...y}):_.createElement(gx,{disabled:r,onChange:r?void 0:s,readOnly:r,ref:b,type:(E=y.type)!==null&&E!==void 0?E:"text",variant:p,...y})},[r,s,y,b,p]);return _.createElement(g,{className:l,fullWidth:u,$disabled:r,shadow:c,style:d},x)});Eg.displayName="TextInput";const yx=et.div`
  display: inline-flex;
  align-items: center;
`,Dc=et($n)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:l})=>l==="flat"?ut`
          height: calc(50% - 1px);
        `:ut`
          height: 50%;
        `}
`,vx=et.div`
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
`,gm=et.span`
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
`,Tg=v.forwardRef(({className:l,defaultValue:r,disabled:u=!1,max:s,min:c,onChange:d,readOnly:p,step:y=1,style:b,value:g,variant:x="default",width:E,...O},$)=>{const[L,J]=dl({defaultValue:r,onChange:d,readOnly:p,value:g}),B=v.useCallback(nt=>{const it=parseFloat(nt.target.value);J(it)},[J]),H=v.useCallback(nt=>{const it=jl(parseFloat(((L??0)+nt).toFixed(2)),c??null,s??null);J(it),d==null||d(it)},[s,c,d,J,L]),N=v.useCallback(()=>{L!==void 0&&(d==null||d(L))},[d,L]),G=v.useCallback(()=>{H(y)},[H,y]),F=v.useCallback(()=>{H(-y)},[H,y]),I=x==="flat"?"flat":"raised";return _.createElement(yx,{className:l,style:{...b,width:E!==void 0?fl(E):"auto"},...O},_.createElement(Eg,{value:L,variant:x,onChange:B,disabled:u,type:"number",readOnly:p,ref:$,fullWidth:!0,onBlur:N}),_.createElement(vx,{variant:x},_.createElement(Dc,{"data-testid":"increment",variant:I,disabled:u||p,onClick:G},_.createElement(gm,{invert:!0})),_.createElement(Dc,{"data-testid":"decrement",variant:I,disabled:u||p,onClick:F},_.createElement(gm,null))))});Tg.displayName="NumberInput";function xx(){const l="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let r="";for(let u=0;u<10;u+=1)r+=l[Math.floor(Math.random()*l.length)];return r}const Rg=l=>v.useMemo(()=>xx(),[l]),Dg=ut`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,kg=ut`
  background: ${({theme:l})=>l.hoverBackground};
  color: ${({theme:l})=>l.canvasTextInvert};
`,Wc=et.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,Ax=et.div`
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
  color: ${({$disabled:l=!1,theme:r})=>l?la():r.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:l})=>l?"default":"pointer"};
`,wx=et(ma)`
  ${Cg}
  background: ${({$disabled:l=!1,theme:r})=>l?r.material:r.canvas};
  &:focus {
    outline: 0;
  }
`,Sx=et.div`
  ${Ul()}
  ${Cg}
  background: ${({$disabled:l=!1,theme:r})=>l?r.flatLight:r.canvas};
`,Ex=et.select`
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
    ${la()};
    background: ${({theme:l})=>l.material};
    cursor: default;
  }
`,Og=et($o).attrs(()=>({"aria-hidden":"true"}))`
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
`,Tx=et.span`
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
`,Rx=et.ul`
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
`,Dx=et.li`
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
`,kx=[],Mg=({className:l,defaultValue:r,disabled:u,native:s,onChange:c,options:d=kx,readOnly:p,style:y,value:b,variant:g,width:x})=>{var E;const O=v.useMemo(()=>d.filter(Boolean),[d]),[$,L]=dl({defaultValue:r??((E=O==null?void 0:O[0])===null||E===void 0?void 0:E.value),onChange:c,readOnly:p,value:b}),J=!(u||p),B=v.useMemo(()=>({className:l,style:{...y,width:x}}),[l,y,x]),H=v.useMemo(()=>_.createElement(Og,{as:"div","data-testid":"select-button",$disabled:u,native:s,tabIndex:-1,variant:g==="flat"?"flat":"raised"},_.createElement(Tx,{"data-testid":"select-icon",$disabled:u})),[u,s,g]),N=v.useMemo(()=>g==="flat"?Sx:wx,[g]);return v.useMemo(()=>({isEnabled:J,options:O,value:$,setValue:L,wrapperProps:B,DropdownButton:H,Wrapper:N}),[H,N,J,O,L,$,B])},Cx={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},Ox=1e3,Mx=({onBlur:l,onChange:r,onClose:u,onFocus:s,onKeyDown:c,onMouseDown:d,onOpen:p,open:y,options:b,readOnly:g,value:x,selectRef:E,setValue:O,wrapperRef:$})=>{const L=v.useRef(null),J=v.useRef([]),B=v.useRef(0),H=v.useRef(0),N=v.useRef(),G=v.useRef("search"),F=v.useRef(""),I=v.useRef(),[nt,it]=dl({defaultValue:!1,onChange:p,onChangePropName:"onOpen",readOnly:g,value:y,valuePropName:"open"}),bt=v.useMemo(()=>{const K=b.findIndex(yt=>yt.value===x);return B.current=jl(K,0,null),b[K]},[b,x]),[dt,Ct]=v.useState(b[0]),Ot=v.useCallback(K=>{const yt=L.current,pt=J.current[K];if(!pt||!yt){N.current=K;return}N.current=void 0;const xt=yt.clientHeight,kt=yt.scrollTop,_t=yt.scrollTop+xt,qt=pt.offsetTop,ae=pt.offsetHeight,Qt=pt.offsetTop+pt.offsetHeight;qt<kt&&yt.scrollTo(0,qt),Qt>_t&&yt.scrollTo(0,qt-xt+ae),pt.focus({preventScroll:!0})},[L]),V=v.useCallback((K,{scroll:yt}={})=>{var pt;const xt=b.length-1;let kt;switch(K){case"first":{kt=0;break}case"last":{kt=xt;break}case"next":{kt=jl(H.current+1,0,xt);break}case"previous":{kt=jl(H.current-1,0,xt);break}case"selected":{kt=jl((pt=B.current)!==null&&pt!==void 0?pt:0,0,xt);break}default:kt=K}H.current=kt,Ct(b[kt]),yt&&Ot(kt)},[H,b,Ot]),m=v.useCallback(({fromEvent:K})=>{it(!0),V("selected",{scroll:!0}),p==null||p({fromEvent:K})},[V,p,it]),j=v.useCallback(()=>{G.current="search",F.current="",clearTimeout(I.current)},[]),tt=v.useCallback(({focusSelect:K,fromEvent:yt})=>{var pt;u==null||u({fromEvent:yt}),it(!1),Ct(b[0]),j(),N.current=void 0,K&&((pt=E.current)===null||pt===void 0||pt.focus())},[j,u,b,E,it]),k=v.useCallback(({fromEvent:K})=>{nt?tt({focusSelect:!1,fromEvent:K}):m({fromEvent:K})},[tt,m,nt]),Y=v.useCallback((K,{fromEvent:yt})=>{B.current!==K&&(B.current=K,O(b[K].value),r==null||r(b[K],{fromEvent:yt}))},[r,b,O]),P=v.useCallback(({focusSelect:K,fromEvent:yt})=>{Y(H.current,{fromEvent:yt}),tt({focusSelect:K,fromEvent:yt})},[tt,Y]),ot=v.useCallback((K,{fromEvent:yt,select:pt})=>{var xt;switch(G.current==="cycleFirstLetter"&&K!==F.current&&(G.current="search"),K===F.current?G.current="cycleFirstLetter":F.current+=K,G.current){case"search":{let kt=b.findIndex(_t=>{var qt;return((qt=_t.label)===null||qt===void 0?void 0:qt.toLocaleUpperCase().indexOf(F.current))===0});kt<0&&(kt=b.findIndex(_t=>{var qt;return((qt=_t.label)===null||qt===void 0?void 0:qt.toLocaleUpperCase().indexOf(K))===0}),F.current=K),kt>=0&&(pt?Y(kt,{fromEvent:yt}):V(kt,{scroll:!0}));break}case"cycleFirstLetter":{const kt=pt?(xt=B.current)!==null&&xt!==void 0?xt:-1:H.current;let _t=b.findIndex((qt,ae)=>{var Qt;return ae>kt&&((Qt=qt.label)===null||Qt===void 0?void 0:Qt.toLocaleUpperCase().indexOf(K))===0});_t<0&&(_t=b.findIndex(qt=>{var ae;return((ae=qt.label)===null||ae===void 0?void 0:ae.toLocaleUpperCase().indexOf(K))===0})),_t>=0&&(pt?Y(_t,{fromEvent:yt}):V(_t,{scroll:!0}));break}}clearTimeout(I.current),I.current=setTimeout(()=>{G.current==="search"&&(F.current="")},Ox)},[V,b,Y]),w=v.useCallback(K=>{var yt;K.button===0&&(K.preventDefault(),(yt=E.current)===null||yt===void 0||yt.focus(),k({fromEvent:K}),d==null||d(K))},[d,E,k]),q=v.useCallback(K=>{P({focusSelect:!0,fromEvent:K})},[P]),at=v.useCallback(K=>{const{altKey:yt,code:pt,ctrlKey:xt,metaKey:kt,shiftKey:_t}=K,{ARROW_DOWN:qt,ARROW_UP:ae,END:Qt,ENTER:be,ESC:re,HOME:$e,SPACE:Ee,TAB:ia}=Cx,Le=yt||xt||kt||_t;if(!(pt===ia&&(yt||xt||kt)||pt!==ia&&Le))switch(pt){case qt:{if(K.preventDefault(),!nt){m({fromEvent:K});return}V("next",{scroll:!0});break}case ae:{if(K.preventDefault(),!nt){m({fromEvent:K});return}V("previous",{scroll:!0});break}case Qt:{if(K.preventDefault(),!nt){m({fromEvent:K});return}V("last",{scroll:!0});break}case be:{if(!nt)return;K.preventDefault(),P({focusSelect:!0,fromEvent:K});break}case re:{if(!nt)return;K.preventDefault(),tt({focusSelect:!0,fromEvent:K});break}case $e:{if(K.preventDefault(),!nt){m({fromEvent:K});return}V("first",{scroll:!0});break}case Ee:{K.preventDefault(),nt?P({focusSelect:!0,fromEvent:K}):m({fromEvent:K});break}case ia:{if(!nt)return;_t||K.preventDefault(),P({focusSelect:!_t,fromEvent:K});break}default:!Le&&pt.match(/^Key/)&&(K.preventDefault(),K.stopPropagation(),ot(pt.replace(/^Key/,""),{select:!nt,fromEvent:K}))}},[V,tt,nt,m,ot,P]),U=v.useCallback(K=>{at(K),c==null||c(K)},[at,c]),W=v.useCallback(K=>{V(K)},[V]),rt=v.useCallback(K=>{nt||(j(),l==null||l(K))},[j,l,nt]),lt=v.useCallback(K=>{j(),s==null||s(K)},[j,s]),ct=v.useCallback(K=>{L.current=K,N.current!==void 0&&Ot(N.current)},[Ot]),ht=v.useCallback((K,yt)=>{J.current[yt]=K,N.current===yt&&Ot(N.current)},[Ot]);return v.useEffect(()=>{if(!nt)return()=>{};const K=yt=>{var pt;const xt=yt.target;!((pt=$.current)===null||pt===void 0)&&pt.contains(xt)||(yt.preventDefault(),tt({focusSelect:!1,fromEvent:yt}))};return document.addEventListener("mousedown",K),()=>{document.removeEventListener("mousedown",K)}},[tt,nt,$]),v.useMemo(()=>({activeOption:dt,handleActivateOptionIndex:W,handleBlur:rt,handleButtonKeyDown:U,handleDropdownKeyDown:at,handleFocus:lt,handleMouseDown:w,handleOptionClick:q,handleSetDropdownRef:ct,handleSetOptionRef:ht,open:nt,selectedOption:bt}),[dt,W,rt,U,lt,at,w,q,ct,ht,nt,bt])},zx=v.forwardRef(({className:l,defaultValue:r,disabled:u,onChange:s,options:c,readOnly:d,style:p,value:y,variant:b,width:g,...x},E)=>{const{isEnabled:O,options:$,setValue:L,value:J,DropdownButton:B,Wrapper:H}=Mg({defaultValue:r,disabled:u,native:!0,onChange:s,options:c,readOnly:d,value:y,variant:b}),N=v.useCallback(G=>{const F=$.find(I=>I.value===G.target.value);F&&(L(F.value),s==null||s(F,{fromEvent:G}))},[s,$,L]);return _.createElement(H,{className:l,style:{...p,width:g}},_.createElement(Wc,null,_.createElement(Ex,{...x,disabled:u,onChange:O?N:$l,ref:E,value:J},$.map((G,F)=>{var I;return _.createElement("option",{key:`${G.value}-${F}`,value:G.value},(I=G.label)!==null&&I!==void 0?I:G.value)})),B))});zx.displayName="SelectNative";function Nx({activateOptionIndex:l,active:r,index:u,onClick:s,option:c,selected:d,setRef:p}){const y=v.useCallback(()=>{l(u)},[l,u]),b=v.useCallback(x=>{p(x,u)},[u,p]),g=Rg();return _.createElement(Dx,{active:r,"aria-selected":d?"true":void 0,"data-value":c.value,id:g,onClick:s,onMouseEnter:y,ref:b,role:"option",tabIndex:0},c.label)}function jx({"aria-label":l,"aria-labelledby":r,className:u,defaultValue:s,disabled:c=!1,formatDisplay:d,inputProps:p,labelId:y,menuMaxHeight:b,name:g,onBlur:x,onChange:E,onClose:O,onFocus:$,onKeyDown:L,onMouseDown:J,onOpen:B,open:H,options:N,readOnly:G,shadow:F=!0,style:I,variant:nt="default",value:it,width:bt="auto",...dt},Ct){const{isEnabled:Ot,options:V,setValue:m,value:j,wrapperProps:tt,DropdownButton:k,Wrapper:Y}=Mg({className:u,defaultValue:s,disabled:c,native:!1,onChange:E,options:N,style:I,readOnly:G,value:it,variant:nt,width:bt}),P=v.useRef(null),ot=v.useRef(null),w=v.useRef(null),{activeOption:q,handleActivateOptionIndex:at,handleBlur:U,handleButtonKeyDown:W,handleDropdownKeyDown:rt,handleFocus:lt,handleMouseDown:ct,handleOptionClick:ht,handleSetDropdownRef:K,handleSetOptionRef:yt,open:pt,selectedOption:xt}=Mx({onBlur:x,onChange:E,onClose:O,onFocus:$,onKeyDown:L,onMouseDown:J,onOpen:B,open:H,options:V,value:j,selectRef:ot,setValue:m,wrapperRef:w});v.useImperativeHandle(Ct,()=>({focus:be=>{var re;(re=ot.current)===null||re===void 0||re.focus(be)},node:P.current,value:String(j)}),[j]);const kt=v.useMemo(()=>xt?typeof d=="function"?d(xt):xt.label:"",[d,xt]),_t=Ot?1:void 0,qt=v.useMemo(()=>b?{overflow:"auto",maxHeight:b}:void 0,[b]),ae=Rg(),Qt=v.useMemo(()=>V.map((be,re)=>{const $e=`${j}-${re}`,Ee=be===q,ia=be===xt;return _.createElement(Nx,{activateOptionIndex:at,active:Ee,index:re,key:$e,onClick:ht,option:be,selected:ia,setRef:yt})}),[q,at,ht,yt,V,xt,j]);return _.createElement(Y,{...tt,$disabled:c,ref:w,shadow:F,style:{...I,width:bt}},_.createElement("input",{name:g,ref:P,type:"hidden",value:String(j),...p}),_.createElement(Wc,{"aria-disabled":c,"aria-expanded":pt,"aria-haspopup":"listbox","aria-label":l,"aria-labelledby":r??y,"aria-owns":Ot&&pt?ae:void 0,onBlur:U,onFocus:lt,onKeyDown:W,onMouseDown:Ot?ct:J,ref:ot,role:"button",tabIndex:_t,...dt},_.createElement(Ax,null,kt),k),Ot&&pt&&_.createElement(Rx,{id:ae,onKeyDown:rt,ref:K,role:"listbox",style:qt,tabIndex:0,variant:nt},Qt))}const zg=v.forwardRef(jx);zg.displayName="Select";const _x=et.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${l=>l.noPadding?"0":"4px"};
`,ko=v.forwardRef(function({children:r,noPadding:u=!1,...s},c){return _.createElement(_x,{noPadding:u,ref:c,...s},r)});ko.displayName="Toolbar";const Bx=et.div`
  padding: 16px;
`,Ng=v.forwardRef(function({children:r,...u},s){return _.createElement(Bx,{ref:s,...u},r)});Ng.displayName="WindowContent";const Hx=et.div`
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
`,jg=v.forwardRef(function({active:r=!0,children:u,...s},c){return _.createElement(Hx,{active:r,ref:c,...s},u)});jg.displayName="WindowHeader";const Ux=et.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Jt({style:"window"})}
  ${na()}
`,$x=et.span`
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
`,_g=v.forwardRef(({children:l,resizable:r=!1,resizeRef:u,shadow:s=!0,...c},d)=>_.createElement(Ux,{ref:d,shadow:s,...c},l,r&&_.createElement($x,{"data-testid":"resizeHandle",ref:u})));_g.displayName="Window";const Lx=et(vg)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:l})=>l.canvas};
`,Gx=et.div`
  display: flex;
  background: ${({theme:l})=>l.materialDark};
  color: #dfe0e3;
`,Yx=et.div`
  display: flex;
  flex-wrap: wrap;
`,za=et.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,qx=et.span`
  cursor: pointer;

  background: ${({active:l,theme:r})=>l?r.hoverBackground:"transparent"};
  color: ${({active:l,theme:r})=>l?r.canvasTextInvert:r.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:l,active:r})=>r?"none":l.materialDark};
  }
`,Qx=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function Xx(l,r){return new Date(l,r+1,0).getDate()}function Vx(l,r,u){return new Date(l,r,u).getDay()}function Zx(l){const r=new Date(Date.parse(l)),u=r.getUTCDate(),s=r.getUTCMonth(),c=r.getUTCFullYear();return{day:u,month:s,year:c}}const Kx=v.forwardRef(({className:l,date:r=new Date().toISOString(),onAccept:u,onCancel:s,shadow:c=!0},d)=>{const[p,y]=v.useState(()=>Zx(r)),{year:b,month:g,day:x}=p,E=v.useCallback(({value:B})=>{y(H=>({...H,month:B}))},[]),O=v.useCallback(B=>{y(H=>({...H,year:B}))},[]),$=v.useCallback(B=>{y(H=>({...H,day:B}))},[]),L=v.useCallback(()=>{const B=[p.year,p.month+1,p.day].map(H=>String(H).padStart(2,"0")).join("-");u==null||u(B)},[p.day,p.month,p.year,u]),J=v.useMemo(()=>{const B=Array.from({length:42}),H=Vx(b,g,1);let N=x;const G=Xx(b,g);return N=N<G?N:G,B.forEach((F,I)=>{if(I>=H&&I<G+H){const nt=I-H+1;B[I]=_.createElement(za,{key:I,onClick:()=>{$(nt)}},_.createElement(qx,{active:nt===N},nt))}else B[I]=_.createElement(za,{key:I})}),B},[x,$,g,b]);return _.createElement(_g,{className:l,ref:d,shadow:c,style:{margin:20}},_.createElement(jg,null,_.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),_.createElement(Ng,null,_.createElement(ko,{noPadding:!0,style:{justifyContent:"space-between"}},_.createElement(zg,{options:Qx,value:g,onChange:E,width:128,menuMaxHeight:200}),_.createElement(Tg,{value:b,onChange:O,width:100})),_.createElement(Lx,null,_.createElement(Gx,null,_.createElement(za,null,"S"),_.createElement(za,null,"M"),_.createElement(za,null,"T"),_.createElement(za,null,"W"),_.createElement(za,null,"T"),_.createElement(za,null,"F"),_.createElement(za,null,"S")),_.createElement(Yx,null,J)),_.createElement(ko,{noPadding:!0,style:{justifyContent:"space-between"}},_.createElement($n,{fullWidth:!0,onClick:s,disabled:!s},"Cancel"),_.createElement($n,{fullWidth:!0,onClick:u?L:void 0,disabled:!u},"OK"))))});Kx.displayName="DatePicker";const Wx=l=>{switch(l){case"status":case"well":return ut`
        ${Jt({style:"status"})}
      `;case"window":case"outside":return ut`
        ${Jt({style:"window"})}
      `;case"field":return ut`
        ${Jt({style:"field"})}
      `;default:return ut`
        ${Jt()}
      `}},Jx=et.div`
  position: relative;
  font-size: 1rem;
  ${({variant:l})=>Wx(l)}
  ${({variant:l})=>na(l==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,Bg=v.forwardRef(({children:l,shadow:r=!1,variant:u="window",...s},c)=>_.createElement(Jx,{ref:c,shadow:r,variant:u,...s},l));Bg.displayName="Frame";const Fx=et.fieldset`
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
  ${l=>l.$disabled&&la()}
`,Ix=et.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:l,variant:r})=>r==="flat"?l.canvas:l.material};
`,Px=v.forwardRef(({label:l,disabled:r=!1,variant:u="default",children:s,...c},d)=>_.createElement(Fx,{"aria-disabled":r,$disabled:r,variant:u,ref:d,...c},l&&_.createElement(Ix,{variant:u},l),s));Px.displayName="GroupBox";const Hg=et.div`
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
`;Hg.displayName="Handle";const tA="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",eA=et.div`
  display: inline-block;
  height: ${({size:l})=>fl(l)};
  width: ${({size:l})=>fl(l)};
`,aA=et.span`
  display: block;
  background: ${tA};
  background-size: cover;
  width: 100%;
  height: 100%;
`,lA=v.forwardRef(({size:l=30,...r},u)=>_.createElement(eA,{size:l,ref:u,...r},_.createElement(aA,null)));lA.displayName="Hourglass";const nA=et.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,iA=et.div`
  position: relative;
`,rA=et.div`
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
`,oA=et(ma).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,uA=et.div`
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
`,sA=v.forwardRef(({backgroundStyles:l,children:r,...u},s)=>_.createElement(nA,{ref:s,...u},_.createElement(iA,null,_.createElement(rA,null,_.createElement(oA,{style:l},r)),_.createElement(uA,null))));sA.displayName="Monitor";const cA=et.div`
  display: inline-block;
  height: ${ge.md};
  width: 100%;
`,fA=et(ma)`
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
`,dA=et.div`
  position: relative;
  top: 4px;
  ${Ug}
  background: ${({theme:l})=>l.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:l})=>l.materialText};
`,hA=et.div`
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
`,pA=et.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,$g=17,mA=et.span`
  display: inline-block;
  width: ${$g}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:l})=>l.progress};
  border-color: ${({theme:l})=>l.material};
  border-width: 0px 1px;
  border-style: solid;
`,gA=v.forwardRef(({hideValue:l=!1,shadow:r=!0,value:u,variant:s="default",...c},d)=>{const p=l?null:`${u}%`,y=v.useRef(null),[b,g]=v.useState([]),x=v.useCallback(()=>{if(!y.current||u===void 0)return;const E=y.current.getBoundingClientRect().width,O=Math.round(u/100*E/$g);g(Array.from({length:O}))},[u]);return v.useEffect(()=>(x(),window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)),[x]),_.createElement(cA,{"aria-valuenow":u!==void 0?Math.round(u):void 0,ref:d,role:"progressbar",variant:s,...c},_.createElement(fA,{variant:s,shadow:r},s==="default"?_.createElement(_.Fragment,null,_.createElement(dA,{"data-testid":"defaultProgress1"},p),_.createElement(hA,{"data-testid":"defaultProgress2",value:u},p)):_.createElement(pA,{ref:y,"data-testid":"tileProgress"},b.map((E,O)=>_.createElement(mA,{key:O})))))});gA.displayName="ProgressBar";const Lg=ut`
  width: ${ha}px;
  height: ${ha}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,bA=et(ma)`
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
`,yA=et.div`
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
`,vA=et.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,xA={flat:yA,default:bA},AA=v.forwardRef(({checked:l,className:r="",disabled:u=!1,label:s="",onChange:c,style:d={},variant:p="default",...y},b)=>{const g=xA[p];return _.createElement(Zc,{$disabled:u,className:r,style:d},_.createElement(g,{$disabled:u,role:"presentation"},l&&_.createElement(vA,{$disabled:u,variant:p})),_.createElement(Ro,{disabled:u,onChange:u?void 0:c,readOnly:u,type:"radio",checked:l,ref:b,...y}),s&&_.createElement(Kc,null,s))});AA.displayName="Radio";const wA=typeof window<"u"?v.useLayoutEffect:v.useEffect;function zl(l){const r=v.useRef(l);return wA(()=>{r.current=l}),v.useCallback((...u)=>(0,r.current)(...u),[])}function bm(l,r){typeof l=="function"?l(r):l&&(l.current=r)}function ym(l,r){return v.useMemo(()=>l==null&&r==null?null:u=>{bm(l,u),bm(r,u)},[l,r])}let Lo=!0,kc=!1,vm;const SA={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function EA(l){if("type"in l){const{type:r,tagName:u}=l;if(u==="INPUT"&&SA[r]&&!l.readOnly||u==="TEXTAREA"&&!l.readOnly)return!0}return!!("isContentEditable"in l&&l.isContentEditable)}function TA(l){l.metaKey||l.altKey||l.ctrlKey||(Lo=!0)}function pc(){Lo=!1}function RA(){this.visibilityState==="hidden"&&kc&&(Lo=!0)}function DA(l){l.addEventListener("keydown",TA,!0),l.addEventListener("mousedown",pc,!0),l.addEventListener("pointerdown",pc,!0),l.addEventListener("touchstart",pc,!0),l.addEventListener("visibilitychange",RA,!0)}function kA(l){const{target:r}=l;try{return r.matches(":focus-visible")}catch{}return Lo||EA(r)}function CA(){kc=!0,window.clearTimeout(vm),vm=window.setTimeout(()=>{kc=!1},100)}function OA(){const l=v.useCallback(r=>{const u=_v.findDOMNode(r);u!=null&&DA(u.ownerDocument)},[]);return{isFocusVisible:kA,onBlurVisible:CA,ref:l}}function MA(l,r,u){return(u-r)*l+r}function fo(l,r){if(r!==void 0&&"changedTouches"in l){for(let u=0;u<l.changedTouches.length;u+=1){const s=l.changedTouches[u];if(s.identifier===r)return{x:s.clientX,y:s.clientY}}return!1}return"clientX"in l?{x:l.clientX,y:l.clientY}:!1}function ho(l){return l&&l.ownerDocument||document}function zA(l,r){var u;const{index:s}=(u=l.reduce((c,d,p)=>{const y=Math.abs(r-d);return c===null||y<c.distance||y===c.distance?{distance:y,index:p}:c},null))!==null&&u!==void 0?u:{};return s??-1}const NA=et.div`
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
`,Gg=()=>ut`
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
`,jA=et(ma)`
  ${Gg()}
`,_A=et(ma)`
  ${Gg()}

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
`,BA=et.span`
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
          ${na()}
          ${Jt()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:l,theme:r})=>l&&Ji({mainColor:r.material,secondaryColor:r.borderLightest})}
`,Co=6,HA=et.span`
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
      ${la()}
      box-shadow: 1px 1px 0px ${r.materialTextDisabledShadow};
      border-color: ${r.materialTextDisabled};
    `}
`,UA=et.div`
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
`,$A=v.forwardRef(({defaultValue:l,disabled:r=!1,marks:u=!1,max:s=100,min:c=0,name:d,onChange:p,onChangeCommitted:y,onMouseDown:b,orientation:g="horizontal",size:x="100%",step:E=1,value:O,variant:$="default",...L},J)=>{const B=$==="flat"?_A:jA,H=g==="vertical",[N=c,G]=dl({defaultValue:l,onChange:p??y,value:O}),{isFocusVisible:F,onBlurVisible:I,ref:nt}=OA(),[it,bt]=v.useState(!1),dt=v.useRef(),Ct=v.useRef(null),Ot=ym(nt,dt),V=ym(J,Ot),m=zl(U=>{F(U)&&bt(!0)}),j=zl(()=>{it!==!1&&(bt(!1),I())}),tt=v.useRef(),k=v.useMemo(()=>u===!0&&Number.isFinite(E)?[...Array(Math.round((s-c)/E)+1)].map((U,W)=>({label:void 0,value:c+E*W})):Array.isArray(u)?u:[],[u,s,c,E]),Y=zl(U=>{const W=(s-c)/10,rt=k.map(ht=>ht.value),lt=rt.indexOf(N);let ct=0;switch(U.key){case"Home":ct=c;break;case"End":ct=s;break;case"PageUp":E&&(ct=N+W);break;case"PageDown":E&&(ct=N-W);break;case"ArrowRight":case"ArrowUp":E?ct=N+E:ct=rt[lt+1]||rt[rt.length-1];break;case"ArrowLeft":case"ArrowDown":E?ct=N-E:ct=rt[lt-1]||rt[0];break;default:return}U.preventDefault(),E&&(ct=pm(ct,E,c)),ct=jl(ct,c,s),G(ct),bt(!0),p==null||p(ct),y==null||y(ct)}),P=v.useCallback(U=>{if(!dt.current)return 0;const W=dt.current.getBoundingClientRect();let rt;H?rt=(W.bottom-U.y)/W.height:rt=(U.x-W.left)/W.width;let lt;if(lt=MA(rt,c,s),E)lt=pm(lt,E,c);else{const ct=k.map(K=>K.value),ht=zA(ct,lt);lt=ct[ht]}return lt=jl(lt,c,s),lt},[k,s,c,E,H]),ot=zl(U=>{var W;const rt=fo(U,tt.current);if(!rt)return;const lt=P(rt);(W=Ct.current)===null||W===void 0||W.focus(),G(lt),bt(!0),p==null||p(lt)}),w=zl(U=>{const W=fo(U,tt.current);if(!W)return;const rt=P(W);y==null||y(rt),tt.current=void 0;const lt=ho(dt.current);lt.removeEventListener("mousemove",ot),lt.removeEventListener("mouseup",w),lt.removeEventListener("touchmove",ot),lt.removeEventListener("touchend",w)}),q=zl(U=>{var W;b==null||b(U),U.preventDefault(),(W=Ct.current)===null||W===void 0||W.focus(),bt(!0);const rt=fo(U,tt.current);if(rt){const ct=P(rt);G(ct),p==null||p(ct)}const lt=ho(dt.current);lt.addEventListener("mousemove",ot),lt.addEventListener("mouseup",w)}),at=zl(U=>{var W;U.preventDefault();const rt=U.changedTouches[0];rt!=null&&(tt.current=rt.identifier),(W=Ct.current)===null||W===void 0||W.focus(),bt(!0);const lt=fo(U,tt.current);if(lt){const ht=P(lt);G(ht),p==null||p(ht)}const ct=ho(dt.current);ct.addEventListener("touchmove",ot),ct.addEventListener("touchend",w)});return v.useEffect(()=>{const{current:U}=dt;U==null||U.addEventListener("touchstart",at);const W=ho(U);return()=>{U==null||U.removeEventListener("touchstart",at),W.removeEventListener("mousemove",ot),W.removeEventListener("mouseup",w),W.removeEventListener("touchmove",ot),W.removeEventListener("touchend",w)}},[w,ot,at]),_.createElement(NA,{$disabled:r,hasMarks:!!k.length,isFocused:it,onMouseDown:q,orientation:g,ref:V,size:fl(x),...L},_.createElement("input",{disabled:r,name:d,type:"hidden",value:N??0}),k&&k.map(U=>_.createElement(HA,{$disabled:r,"data-testid":"tick",key:U.value/(s-c)*100,orientation:g,style:{[H?"bottom":"left"]:`${(U.value-c)/(s-c)*100}%`}},U.label&&_.createElement(UA,{"aria-hidden":!0,"data-testid":"mark",orientation:g},U.label))),_.createElement(B,{orientation:g,variant:$}),_.createElement(BA,{$disabled:r,"aria-disabled":r?!0:void 0,"aria-orientation":g,"aria-valuemax":s,"aria-valuemin":c,"aria-valuenow":N,onBlur:j,onFocus:m,onKeyDown:Y,orientation:g,ref:Ct,role:"slider",style:{[H?"bottom":"left"]:`${(H?-100:0)+100*(N-c)/(s-c)}%`},tabIndex:r?void 0:0,variant:$}))});$A.displayName="Slider";const LA=et.tbody`
  background: ${({theme:l})=>l.canvas};
  display: table-row-group;
  box-shadow: ${Xc};
  overflow-y: auto;
`,GA=v.forwardRef(function({children:r,...u},s){return _.createElement(LA,{ref:s,...u},r)});GA.displayName="TableBody";const YA=et.td`
  padding: 0 8px;
`,qA=v.forwardRef(function({children:r,...u},s){return _.createElement(YA,{ref:s,...u},r)});qA.displayName="TableDataCell";const QA=et.thead`
  display: table-header-group;
`,XA=v.forwardRef(function({children:r,...u},s){return _.createElement(QA,{ref:s,...u},r)});XA.displayName="TableHead";const VA=et.th`
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
  ${({$disabled:l})=>l&&la()}
  &:hover {
    color: ${({theme:l})=>l.materialText};
    ${({$disabled:l})=>l&&la()}
  }
`,ZA=v.forwardRef(function({disabled:r=!1,children:u,onClick:s,onTouchStart:c=$l,sort:d,...p},y){const b=d==="asc"?"ascending":d==="desc"?"descending":void 0;return _.createElement(VA,{$disabled:r,"aria-disabled":r,"aria-sort":b,onClick:r?void 0:s,onTouchStart:r?void 0:c,ref:y,...p},_.createElement("div",null,u))});ZA.displayName="TableHeadCell";const KA=et.tr`
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
`,WA=v.forwardRef(function({children:r,...u},s){return _.createElement(KA,{ref:s,...u},r)});WA.displayName="TableRow";const JA=et.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,FA=et(ma)`
  &:before {
    box-shadow: none;
  }
`,IA=v.forwardRef(({children:l,...r},u)=>_.createElement(FA,null,_.createElement(JA,{ref:u,...r},l)));IA.displayName="Table";const PA=et.button`
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
`,t2=v.forwardRef(({value:l,onClick:r,selected:u=!1,children:s,...c},d)=>_.createElement(PA,{"aria-selected":u,selected:u,onClick:p=>r==null?void 0:r(l,p),ref:d,role:"tab",...c},s));t2.displayName="Tab";const e2=et.div`
  ${na()}
  ${Jt()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,a2=v.forwardRef(({children:l,...r},u)=>_.createElement(e2,{ref:u,...r},l));a2.displayName="TabBody";const l2=et.div`
  position: relative;
  ${({isMultiRow:l,theme:r})=>l&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${r.borderDark};
  }
  `}
`,n2=et.div.attrs(()=>({"data-testid":"tab-row"}))`
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
`;function i2(l,r){const u=[];for(let s=r;s>0;s-=1)u.push(l.splice(0,Math.ceil(l.length/s)));return u}const r2=v.forwardRef(({value:l,onChange:r=$l,children:u,rows:s=1,...c},d)=>{const p=v.useMemo(()=>{var y;const b=(y=_.Children.map(u,E=>{if(!_.isValidElement(E))return null;const O={selected:E.props.value===l,onClick:r};return _.cloneElement(E,O)}))!==null&&y!==void 0?y:[],g=i2(b,s).map((E,O)=>({key:O,tabs:E})),x=g.findIndex(E=>E.tabs.some(O=>O.props.selected));return g.push(g.splice(x,1)[0]),g},[u,r,s,l]);return _.createElement(l2,{...c,isMultiRow:s>1,role:"tablist",ref:d},p.map(y=>_.createElement(n2,{key:y.key},y.tabs)))});r2.displayName="Tabs";const o2=["blur","focus"],u2=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function xm(l){return"nativeEvent"in l&&o2.includes(l.type)}function Am(l){return"nativeEvent"in l&&u2.includes(l.type)}const s2={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},c2=et.span`
  position: absolute;

  z-index: 1;
  display: ${l=>l.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:l})=>l.borderDarkest};
  background: ${({theme:l})=>l.tooltip};
  box-shadow: ${Qc};
  text-align: center;
  font-size: 1rem;
  ${l=>s2[l.position]}
`,f2=et.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,d2=v.forwardRef(({className:l,children:r,disableFocusListener:u=!1,disableMouseListener:s=!1,enterDelay:c=1e3,leaveDelay:d=0,onBlur:p,onClose:y,onFocus:b,onMouseEnter:g,onMouseLeave:x,onOpen:E,style:O,text:$,position:L="top",...J},B)=>{const[H,N]=v.useState(!1),[G,F]=v.useState(),[I,nt]=v.useState(),it=!u,bt=!s,dt=P=>{window.clearTimeout(G),window.clearTimeout(I);const ot=window.setTimeout(()=>{N(!0),E==null||E(P)},c);F(ot)},Ct=P=>{P.persist(),xm(P)?b==null||b(P):Am(P)&&(g==null||g(P)),dt(P)},Ot=P=>{window.clearTimeout(G),window.clearTimeout(I);const ot=window.setTimeout(()=>{N(!1),y==null||y(P)},d);nt(ot)},V=P=>{P.persist(),xm(P)?p==null||p(P):Am(P)&&(x==null||x(P)),Ot(P)},m=it?V:void 0,j=it?Ct:void 0,tt=bt?Ct:void 0,k=bt?V:void 0,Y=it?0:void 0;return _.createElement(f2,{"data-testid":"tooltip-wrapper",onBlur:m,onFocus:j,onMouseEnter:tt,onMouseLeave:k,tabIndex:Y},_.createElement(c2,{className:l,"data-testid":"tooltip",position:L,ref:B,show:H,style:O,...J},$),r)});d2.displayName="Tooltip";const Cc=et(Kc)`
  white-space: nowrap;
`,Yg=ut`
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
`,h2=et.ul`
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
`,p2=et.li`
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
`,m2=et.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,g2=et.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:l})=>l.materialText};
  user-select: none;
  padding-left: 18px;
  ${Yg};

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
`,wm=et(Zc)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${Yg};
`,b2=et.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function Sm(l,r){return l.includes(r)?l.filter(u=>u!==r):[...l,r]}function Em(l){l.preventDefault()}function qg({className:l,disabled:r,expanded:u,innerRef:s,level:c,select:d,selected:p,style:y,tree:b=[]}){const g=c===0,x=v.useCallback(E=>{var O,$;const L=!!(E.items&&E.items.length>0),J=u.includes(E.id),B=(O=r||E.disabled)!==null&&O!==void 0?O:!1,H=B?Em:I=>d(I,E),N=B?Em:I=>d(I,E),G=p===E.id,F=_.createElement(b2,{"aria-hidden":!0},E.icon);return _.createElement(p2,{key:E.label,isRootLevel:g,role:"treeitem","aria-expanded":J,"aria-selected":G,hasItems:L},L?_.createElement(m2,{open:J},_.createElement(g2,{onClick:H,$disabled:B},_.createElement(wm,{$disabled:B},F,_.createElement(Cc,null,E.label))),J&&_.createElement(qg,{className:l,disabled:B,expanded:u,level:c+1,select:d,selected:p,style:y,tree:($=E.items)!==null&&$!==void 0?$:[]})):_.createElement(wm,{as:"button",$disabled:B,onClick:N},F,_.createElement(Cc,null,E.label)))},[l,r,u,g,c,d,p,y]);return _.createElement(h2,{className:g?l:void 0,style:g?y:void 0,ref:g?s:void 0,role:g?"tree":"group",isRootLevel:g},b.map(x))}function y2({className:l,defaultExpanded:r=[],defaultSelected:u,disabled:s=!1,expanded:c,onNodeSelect:d,onNodeToggle:p,selected:y,style:b,tree:g=[]},x){const[E,O]=dl({defaultValue:r,onChange:p,onChangePropName:"onNodeToggle",value:c,valuePropName:"expanded"}),[$,L]=dl({defaultValue:u,onChange:d,onChangePropName:"onNodeSelect",value:y,valuePropName:"selected"}),J=v.useCallback((N,G)=>{if(p){const F=Sm(E,G);p(N,F)}O(F=>Sm(F,G))},[E,p,O]),B=v.useCallback((N,G)=>{L(G),d&&d(N,G)},[d,L]),H=v.useCallback((N,G)=>{N.preventDefault(),B(N,G.id),G.items&&G.items.length&&J(N,G.id)},[B,J]);return _.createElement(qg,{className:l,disabled:s,expanded:E,level:0,innerRef:x,select:H,selected:$,style:b,tree:g})}const v2=v.forwardRef(y2);v2.displayName="TreeView";const x2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAD/AP8A/6C9p5MAAAVLSURBVFjD7ZdbiFVlFMd/a+1znZvjXNJx8lLmkIbaSxkFEQXKZGT2YkQPUREW+RD03FMU9GaQQQm9FT1EkaVCISFRqOUlNQ1Myrk1XufMnNvMOftbPezLOXNmxkYhguiDfdjfPt/51n/9//+91nfg//EvD6mfFItFstms7v7ww7Xnh0c6fDCpWyQilnZOJ4sFm20z9TxLt7dTKk9K3cayuLPjyo7t209NTEy4tra22QGYWTRvfvHJrR/pT4c3dZmrFj2PcqWKYpiIpR58WDpWr8GcA5HgCsDhSiUb2LvHciMjKiqogDMSunLV/l0Hv3u6Awr5fJ7W1tYYQCK62blzJ+nm5rWH93zxRtuZUw/0Xx5JrRdSY2pc8sETqKowvrqPpVueAHOY71MdHsQvFrBsllRrO4N7Pyc/dolKmE1F4NBg6v5XH+1/79Z773st7enFegZiAENDQ0hLa3vq6JFHNl8bbRIVFEMBDRM1EZwozhz4Pp5zNL+/i9wP3zK09DYyr7/JqoxHNg0XfOGKQQnjnj8Hu04UipvPqvfL6nXr9t++dOnx8wMD0wEAGNAssCTt0eGMBb7jWhTcwgUh3YgggJTKuLEybmEe3zkSBosqsCABFRUGxRidhGJ+rCPx3YG3zuSu6ejAwPEZDNSDyCD0qGF+LaiGbnHOxWuds4AlA/MNcwHKrEAWwzkjoXBJhF4cU67CuakpJmeTIN7ULEjXrGZRi3HUDBt+f+WOPnL5AtVFPbSk0zVXO1CFhT6sVuMCwgCQEmgCxucCELGAhDcSBQ3uVSV8Yww8j+SzL9DpHF3qUapM4lykU3AJsAwQM46Fm+v1GFAk0NgkDq5SA2VVH6v6iDlAUNUg1YC+AFxUPFyYhNYknF55ZpMAi7MXYIlCd5i9c47Sns9IH/4hlCB0Z5i0b46m4cFaEK2xGOA1BLs+AEEQZxBS2Rp5zsKMfj0FZ05N88e0zLQhy/rnDhriz+YBC/kS8Ou8EG3SkNk0EMwxrwfydxIYoeHCUUYpexr8ThoWRlpb3TOtzdWg2fdRMYTQwA0IZjJgxO8zBu+K8oWXJOspZoYZeBpEjTaz2A9hazAwFRY4eNsvscJ8zAIFGgiYBUBY+ZwJJ53Q8uhmtmy4h0RIS8SOagL1PHzfDxoThqhizjGRz5G7No4W8/z41T66xq+GPauunM4FQCT4qGL8bMrdGx9jw3MvcCPj4uWL/HHhD/Lnz/PbgYNM5K4G4GXmWm18EMhqpDCeSvqs9+zv4s0Y3Z3d3NK9GKk6Hk9W6PGiYPWnizkAWHgEmRT42IRjpvMI2ciikEwk8EXZW00wKnVvZ0M+MwGEOnnAcoOFduMMRHE8fJZJhbRFR6t5eMAI+r6a0CcO9WReAWcHYXSLR5ODgoKLHH49BiKaphx8YnDSd/MM1xjdqJryTTXJ6FwFizlKMRgZjGcEVG5SAoOkObZ6ZRYDFw1kXhKYxZ2w06AiNyeBqJBMKl1iHHRwziWoJgDRaRBiAC0tLSRbmidPdt4y8CX+8ucLVzMtAmePHuLCgjbwHWaBHCIan4w07NWRUCJCJpNhaGSYgeNHmSqW+cZSDKeaqsnO1svZnt6ccgQzQ8JjHQD79u0jk05nToyM9p7dvWv3tmPfP7QMeEeTfCqCB8SnMYmP8UH3lLh5xiBMHEkHa6aMq05Ir1g5dOemjdvu6us7vePll8YiADED/f395HK58kNtbb+/cuDrXR8UCl+3m3ODqPX4KsH/gOkS1nfi2ZpjAigBHk7aenrGV/b2ni5OjI9FIGFmb/hHhjXUErlJX/03x19dE2bA1PxYJgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNS0wMS0yOVQxMTowMjowOSswMDowMEhEIm4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjUtMDEtMjlUMTE6MDI6MDkrMDA6MDA5GZrSAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI1LTAxLTI5VDExOjAyOjEwKzAwOjAwNz7+QAAAAABJRU5ErkJggg==",A2="/assets/power-Ch1zkzcl.png";var mc,Tm;function w2(){if(Tm)return mc;Tm=1;var l={name:"vistaesqueMidnight",anchor:"rgb(64, 64, 192)",anchorVisited:"rgb(64, 64, 192)",borderDark:"rgb(21, 21, 21)",borderDarkest:"rgb(0, 0, 0)",borderLight:"rgb(32, 32, 32)",borderLightest:"rgb(128, 128, 128)",canvas:"rgb(0, 0, 0)",canvasText:"rgb(255, 255, 255)",canvasTextDisabled:"rgb(21, 21, 21)",canvasTextDisabledShadow:"rgb(128, 128, 128)",canvasTextInvert:"rgb(255, 255, 255)",checkmark:"rgb(255, 255, 255)",checkmarkDisabled:"rgb(32, 32, 32)",desktopBackground:"rgb(31, 60, 89)",flatDark:"rgb(21, 21, 21)",flatLight:"rgb(32, 32, 32)",focusSecondary:"rgb(128, 128, 128)",headerBackground:"linear-gradient(to right, rgb(81, 132, 188), rgb(100, 168, 60))",headerNotActiveBackground:"linear-gradient(to right, rgb(22, 46, 101), rgb(18, 91, 30))",headerNotActiveText:"rgb(192, 192, 192)",headerText:"rgb(255, 255, 255)",hoverBackground:"rgb(49, 106, 197)",material:"rgb(32, 32, 32)",materialDark:"rgb(22, 46, 101)",materialText:"rgb(255, 255, 255)",materialTextDisabled:"rgb(21, 21, 21)",materialTextDisabledShadow:"rgb(128, 128, 128)",materialTextInvert:"rgb(255, 255, 255)",progress:"rgb(49, 106, 197)",tooltip:"rgb(0, 0, 30)"};return mc=l,mc}var S2=w2();const E2=zc(S2);(function(){var l,r=document.createElement("div");r.innerHTML="<div class=crt></div><div class=wb-header><div class=wb-control><span class=wb-min></span><span class=wb-max></span><span class=wb-full></span><span class=wb-close></span></div><div class=wb-drag><div class=wb-icon></div><div class=wb-title></div></div></div><div class=wb-body></div><div class=wb-n></div><div class=wb-s></div><div class=wb-w></div><div class=wb-e></div><div class=wb-nw></div><div class=wb-ne></div><div class=wb-se></div><div class=wb-sw></div></div>";function u(m,j,tt,k){m&&m.addEventListener(j,tt,k||!1)}function s(m,j){var tt=window,k=g;tt&&tt.removeEventListener(m,j,k||!1)}function c(m,j){m.stopPropagation(),j&&m.preventDefault()}function d(m,j,tt){tt=""+tt,m["_s_"+j]!==tt&&(m.style.setProperty(j,tt),m["_s_"+j]=tt)}var p=[],y=[],b={capture:!0,passive:!1},g={capture:!0,passive:!0},x,E=0,O=10,$,L,J,B,H,N;function G(m,j){if(!(this instanceof G))return new G(m);if(x||I(),m){if(j){var tt=m;m=j}if(typeof m=="string")tt=m;else{var k=m.id,Y=m.index,P=m.root,ot=m.template;tt=tt||m.title;var w=m.icon,q=m.mount,at=m.html,U=m.url,W=m.width,rt=m.height,lt=m.minwidth,ct=m.minheight,ht=m.maxwidth,K=m.maxheight,yt=m.autosize,pt=m.overflow,xt=m.min,kt=m.max,_t=m.hidden,qt=m.modal,ae=m.x||(qt?"center":0),Qt=m.y||(qt?"center":0),be=m.top,re=m.left,$e=m.bottom,Ee=m.right,ia=m.background,Le=m.border,Ha=m.header,Ll=m.class,Ua=m.oncreate,Ae=m.onclose,ra=m.onfocus,we=m.onblur,Go=m.onmove,Yo=m.onresize,qo=m.onfullscreen,Gl=m.onmaximize,Yl=m.onminimize,ga=m.onrestore,ql=m.onhide,pl=m.onshow,Qo=m.onload}}this.g=(ot||r).cloneNode(!0),this.g.id=this.id=k||"winbox-"+ ++E,this.g.className="winbox"+(Ll?" "+(typeof Ll=="string"?Ll:Ll.join(" ")):"")+(qt?" modal":""),this.g.winbox=this,this.window=this.g,this.body=this.g.getElementsByClassName("wb-body")[0],this.h=Ha||35,y.push(this),ia&&this.setBackground(ia),Le?d(this.body,"margin",Le+(isNaN(Le)?"":"px")):Le=0,Ha&&(j=this.g.getElementsByClassName("wb-header")[0],d(j,"height",Ha+"px"),d(j,"line-height",Ha+"px"),d(this.body,"top",Ha+"px")),tt&&this.setTitle(tt),w&&this.setIcon(w),q?this.mount(q):at?this.body.innerHTML=at:U&&this.setUrl(U,Qo),be=be?F(be,H):0,$e=$e?F($e,H):0,re=re?F(re,B):0,Ee=Ee?F(Ee,B):0,tt=B-re-Ee,w=H-be-$e,ht=ht?F(ht,tt):tt,K=K?F(K,w):w,lt=lt?F(lt,ht):150,ct=ct?F(ct,K):this.h,yt?((P||x).appendChild(this.body),W=Math.max(Math.min(this.body.clientWidth+2*Le+1,ht),lt),rt=Math.max(Math.min(this.body.clientHeight+this.h+Le+1,K),ct),this.g.appendChild(this.body)):(W=W?F(W,ht):Math.max(ht/2,lt)|0,rt=rt?F(rt,K):Math.max(K/2,ct)|0),ae=ae?F(ae,tt,W):re,Qt=Qt?F(Qt,w,rt):be,this.x=ae,this.y=Qt,this.width=W,this.height=rt,this.s=lt,this.o=ct,this.m=ht,this.l=K,this.top=be,this.right=Ee,this.bottom=$e,this.left=re,this.index=Y,this.j=pt,this.focused=this.hidden=this.full=this.max=this.min=!1,this.onclose=Ae,this.onfocus=ra,this.onblur=we,this.onmove=Go,this.onresize=Yo,this.onfullscreen=qo,this.onmaximize=Gl,this.onminimize=Yl,this.onrestore=ga,this.onhide=ql,this.onshow=pl,_t?this.hide():this.focus(),(Y||Y===0)&&(this.index=Y,d(this.g,"z-index",Y),Y>O&&(O=Y)),kt?this.maximize():xt?this.minimize():this.resize().move(),nt(this),(P||x).appendChild(this.g),Ua&&Ua.call(this,m)}G.new=function(m){return new G(m)},G.stack=function(){return y};function F(m,j,tt){return typeof m=="string"&&(m==="center"?m=(j-tt)/2+.5|0:m==="right"||m==="bottom"?m=j-tt:(tt=parseFloat(m),m=(""+tt!==m&&m.substring((""+tt).length))==="%"?j/100*tt+.5|0:tt)),m}function I(){x=document.body,x[L="requestFullscreen"]||x[L="msRequestFullscreen"]||x[L="webkitRequestFullscreen"]||x[L="mozRequestFullscreen"]||(L=""),J=L&&L.replace("request","exit").replace("mozRequest","mozCancel").replace("Request","Exit"),u(window,"resize",function(){Ct(),bt()}),u(x,"mousedown",function(){N=!1},!0),u(x,"mousedown",function(){if(!N){var m=y.length;if(m)for(--m;0<=m;m--){var j=y[m];if(j.focused){j.blur();break}}}}),Ct()}function nt(m){dt(m,"drag"),dt(m,"n"),dt(m,"s"),dt(m,"w"),dt(m,"e"),dt(m,"nw"),dt(m,"ne"),dt(m,"se"),dt(m,"sw"),u(m.g.getElementsByClassName("wb-min")[0],"click",function(j){c(j),m.min?m.restore().focus():m.minimize()}),u(m.g.getElementsByClassName("wb-max")[0],"click",function(j){c(j),m.max?m.restore().focus():m.maximize().focus()}),L?u(m.g.getElementsByClassName("wb-full")[0],"click",function(j){c(j),m.fullscreen().focus()}):m.addClass("no-full"),u(m.g.getElementsByClassName("wb-close")[0],"click",function(j){c(j),m.close()||(m=null)}),u(m.g,"mousedown",function(){N=!0},!0),u(m.body,"mousedown",function(){m.focus()},!0)}function it(m){p.splice(p.indexOf(m),1),bt(),m.removeClass("min"),m.min=!1,m.g.title=""}function bt(){for(var m=p.length,j={},tt={},k=0,Y;k<m;k++)Y=p[k],Y=Y.left+":"+Y.top,tt[Y]?tt[Y]++:(j[Y]=0,tt[Y]=1);k=0;for(var P,ot;k<m;k++)Y=p[k],P=Y.left+":"+Y.top,ot=Math.min((B-Y.left-Y.right)/tt[P],250),Y.resize(ot+1|0,Y.h,!0).move(Y.left+j[P]*ot|0,H-Y.bottom-Y.h,!0),j[P]++}function dt(m,j){function tt(U){if(c(U,!0),m.focus(),j==="drag"){if(m.min){m.restore();return}if(!m.g.classList.contains("no-max")){var W=Date.now(),rt=W-at;if(at=W,300>rt){m.max?m.restore():m.maximize();return}}}m.min||(x.classList.add("wb-lock"),(ot=U.touches)&&(ot=ot[0])?(U=ot,u(window,"touchmove",k,g),u(window,"touchend",Y,g)):(u(window,"mousemove",k,g),u(window,"mouseup",Y,g)),w=U.pageX,q=U.pageY)}function k(U){c(U),ot&&(U=U.touches[0]);var W=U.pageX;U=U.pageY;var rt=W-w,lt=U-q,ct=m.width,ht=m.height,K=m.x,yt=m.y,pt;if(j==="drag"){if(m.g.classList.contains("no-move"))return;m.x+=rt,m.y+=lt;var xt=pt=1}else{if(j==="e"||j==="se"||j==="ne"){m.width+=rt;var kt=1}else(j==="w"||j==="sw"||j==="nw")&&(m.x+=rt,m.width-=rt,xt=kt=1);if(j==="s"||j==="se"||j==="sw"){m.height+=lt;var _t=1}else(j==="n"||j==="ne"||j==="nw")&&(m.y+=lt,m.height-=lt,pt=_t=1)}kt&&(m.width=Math.max(Math.min(m.width,m.m,B-m.x-m.right),m.s),kt=m.width!==ct),_t&&(m.height=Math.max(Math.min(m.height,m.l,H-m.y-m.bottom),m.o),_t=m.height!==ht),(kt||_t)&&m.resize(),xt&&(m.max&&(m.x=(W<B/3?m.left:W>B/3*2?B-m.width-m.right:B/2-m.width/2)+rt),m.x=Math.max(Math.min(m.x,m.j?B-30:B-m.width-m.right),m.j?30-m.width:m.left),xt=m.x!==K),pt&&(m.max&&(m.y=m.top+lt),m.y=Math.max(Math.min(m.y,m.j?H-m.h:H-m.height-m.bottom),m.top),pt=m.y!==yt),(xt||pt)&&(m.max&&m.restore(),m.move()),(kt||xt)&&(w=W),(_t||pt)&&(q=U)}function Y(U){c(U),x.classList.remove("wb-lock"),ot?(s("touchmove",k),s("touchend",Y)):(s("mousemove",k),s("mouseup",Y))}var P=m.g.getElementsByClassName("wb-"+j)[0];if(P){var ot,w,q,at=0;u(P,"mousedown",tt,b),u(P,"touchstart",tt,b)}}function Ct(){var m=document.documentElement;B=m.clientWidth,H=m.clientHeight}l=G.prototype,l.mount=function(m){return this.unmount(),m.i||(m.i=m.parentNode),this.body.textContent="",this.body.appendChild(m),this},l.unmount=function(m){var j=this.body.firstChild;if(j){var tt=m||j.i;tt&&tt.appendChild(j),j.i=m}return this},l.setTitle=function(m){var j=this.g.getElementsByClassName("wb-title")[0];m=this.title=m;var tt=j.firstChild;return tt?tt.nodeValue=m:j.textContent=m,this},l.setIcon=function(m){var j=this.g.getElementsByClassName("wb-icon")[0];return d(j,"background-image","url("+m+")"),d(j,"display","inline-block"),this},l.setBackground=function(m){return d(this.g,"background",m),this},l.setUrl=function(m,j){var tt=this.body.firstChild;return tt&&tt.tagName.toLowerCase()==="iframe"?tt.src=m:(this.body.innerHTML='<iframe src="'+m+'"></iframe>',j&&(this.body.firstChild.onload=j)),this},l.focus=function(m){if(m===!1)return this.blur();if(!this.focused){if(m=y.length,1<m)for(var j=1;j<=m;j++){var tt=y[m-j];if(tt.focused){tt.blur(),y.push(y.splice(y.indexOf(this),1)[0]);break}}d(this.g,"z-index",++O),this.index=O,this.addClass("focus"),this.focused=!0,this.onfocus&&this.onfocus()}return this},l.blur=function(m){return m===!1?this.focus():(this.focused&&(this.removeClass("focus"),this.focused=!1,this.onblur&&this.onblur()),this)},l.hide=function(m){if(m===!1)return this.show();if(!this.hidden)return this.onhide&&this.onhide(),this.hidden=!0,this.addClass("hide")},l.show=function(m){if(m===!1)return this.hide();if(this.hidden)return this.onshow&&this.onshow(),this.hidden=!1,this.removeClass("hide")},l.minimize=function(m){return m===!1?this.restore():($&&V(),this.max&&(this.removeClass("max"),this.max=!1),this.min||(p.push(this),bt(),this.g.title=this.title,this.addClass("min"),this.min=!0,this.focused&&(this.blur(),Ot()),this.onminimize&&this.onminimize()),this)};function Ot(){var m=y.length;if(m)for(--m;0<=m;m--){var j=y[m];if(!j.min){j.focus();break}}}l.restore=function(){return $&&V(),this.min&&(it(this),this.resize().move(),this.onrestore&&this.onrestore()),this.max&&(this.max=!1,this.removeClass("max").resize().move(),this.onrestore&&this.onrestore()),this},l.maximize=function(m){return m===!1?this.restore():($&&V(),this.min&&it(this),this.max||(this.addClass("max").resize(B-this.left-this.right,H-this.top-this.bottom,!0).move(this.left,this.top,!0),this.max=!0,this.onmaximize&&this.onmaximize()),this)},l.fullscreen=function(m){if(this.min&&(it(this),this.resize().move()),!$||!V())this.body[L](),$=this,this.full=!0,this.onfullscreen&&this.onfullscreen();else if(m===!1)return this.restore();return this};function V(){if($.full=!1,document.fullscreen||document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)return document[J](),!0}l.close=function(m){if(this.onclose&&this.onclose(m))return!0;this.min&&it(this),y.splice(y.indexOf(this),1),this.unmount(),this.g.remove(),this.g.textContent="",this.g=this.body=this.g.winbox=null,this.focused&&Ot()},l.move=function(m,j,tt){return m||m===0?tt||(this.x=m?m=F(m,B-this.left-this.right,this.width):0,this.y=j?j=F(j,H-this.top-this.bottom,this.height):0):(m=this.x,j=this.y),d(this.g,"left",m+"px"),d(this.g,"top",j+"px"),this.onmove&&this.onmove(m,j),this},l.resize=function(m,j,tt){return m||m===0?tt||(this.width=m?m=F(m,this.m):0,this.height=j?j=F(j,this.l):0,m=Math.max(m,this.s),j=Math.max(j,this.o)):(m=this.width,j=this.height),d(this.g,"width",m+"px"),d(this.g,"height",j+"px"),this.onresize&&this.onresize(m,j),this},l.addControl=function(m){var j=m.class,tt=m.image,k=m.click;m=m.index;var Y=document.createElement("span"),P=this.g.getElementsByClassName("wb-control")[0],ot=this;return j&&(Y.className=j),tt&&d(Y,"background-image","url("+tt+")"),k&&(Y.onclick=function(w){k.call(this,w,ot)}),P.insertBefore(Y,P.childNodes[m||0]),this},l.removeControl=function(m){return(m=this.g.getElementsByClassName(m)[0])&&m.remove(),this},l.addClass=function(m){return this.g.classList.add(m),this},l.removeClass=function(m){return this.g.classList.remove(m),this},l.toggleClass=function(m){return this.g.classList.contains(m)?this.removeClass(m):this.addClass(m)},window.WinBox=G}).call(void 0);const ta=WinBox,T2="/assets/monitor-CmERaNKN.gif",R2=()=>{const[l,r]=v.useState(0),u=v.useRef(null);return v.useEffect(()=>{let s=setTimeout(()=>{let c=Date.now();u.current=setInterval(()=>{const d=Date.now()-c,p=Math.min(d/4400*100,100);r(p),p===100&&(clearInterval(u.current),setTimeout(()=>r(100),500))},30)},300);return()=>{clearTimeout(s),clearInterval(u.current)}},[]),A.jsx("div",{className:"loading",children:A.jsxs("div",{className:"loading_elements",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[A.jsx("img",{src:T2,className:"monitor",alt:"~X:/WEBSITE/ > BOOTING UP..."}),A.jsx("br",{}),A.jsx("div",{className:"loading-bar-container",style:{width:240,height:18,background:"#222",borderRadius:1,overflow:"hidden",marginTop:24,border:"6px solid #000",boxShadow:"0 0 0 2px white"},children:A.jsx("div",{className:"loading-bar",style:{display:"flex",margin:0,width:`${l}%`,height:"100%",background:`repeating-linear-gradient(
        90deg,
        #fff 0,
        #fff 20px,
        #000 20px,
        #000 32px
      )`,transition:"width 0.1s linear"}})})]})})},D2="/assets/desktop_about-BSolwGv2.png",k2="/assets/desktop_contact-CzjDK447.png",C2="/assets/desktop_donate-DvEemoyz.png",O2="/assets/desktop_gallery-BrU31pCN.png",M2="/assets/desktop_videos-CZQy56j_.png",z2="/assets/desktop-about-5UQNFmge.gif",N2="/assets/desktop-contact-BZXH_09O.gif",j2="/assets/desktop-donate-DQ3hbULG.gif",_2="/assets/desktop-gallery-BBDxh9IK.gif",B2="/assets/desktop-videos-sxat4MtT.gif",H2="/assets/steam-dEuQyfPr.png",U2="/assets/money-spin-BlzhA9B2.gif",$2="/assets/cashapp-Cjq2UZZq.png",L2="/assets/paypal-Dx-0PIKQ.png",G2="/assets/tornada-BnYzoTfG.png",Y2="/assets/notepad-BzPf8E6H.png",q2="/assets/info-BTKMA8dZ.png",Q2="/assets/blog-D4q87bQu.png",X2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAAQMAAADOtka5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAADUExURQAm/0mmUXMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA2SURBVHja7cEBAQAAAIIg/69uSEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwbggAAAWN1UKQAAAAASUVORK5CYII=",V2="/assets/youtube-Bp2k9DZd.png",Z2="/assets/xitter-DLEKJHi9.png",K2="/assets/instagram-BF4FSZOC.png",W2="/assets/newgrounds-CgzA7QG0.png",J2="/assets/reddit-CRfYQcex.png",F2="/assets/facebook-BO--MLYP.png",Tt={desktop_about:D2,desktop_contact:k2,desktop_donate:C2,desktop_gallery:O2,desktop_videos:M2,desktop_about_gif:z2,desktop_contact_gif:N2,desktop_gallery_gif:_2,desktop_donate_gif:j2,desktop_videos_gif:B2,tornada:G2,notepad:Y2,info:q2,pager:X2,blog:Q2,youtube:V2,xitter:Z2,instagram:K2,newgrounds:W2,reddit:J2,facebook:F2,steam:H2,cashapp:$2,paypal:L2,moneyspin:U2},I2="/assets/BG-DNG1OH_1.gif",P2="/assets/BG2-afUp6XXV.gif",tw="/assets/BG3-D3gry5fr.gif",ew="/assets/BG4-niHp1bdb.gif",aw="/assets/BG5-3b4TfM3X.gif",lw="/assets/BG6-B2XIkXXV.gif",zn={background1:I2,background2:P2,background3:tw,background4:ew,background5:aw,background6:lw},nw="/assets/aboutem-COgL9iQm.gif",Rm=["jack of all trades, master at some","self-driven creative powerhouse","big boy with small dreams","just some guy tbh","nothing but a wizard","you're doing a great job!","set the scene. 86 degrees.","5'10, stand on my money, now I'm 5'6","long live the new flesh!","make that tv explode. bjork style.","antisocial experiment"],Qg=Rm[Math.floor(Math.random()*Rm.length)];console.log("ECKS - ",Qg);const iw=()=>A.jsx(A.Fragment,{children:A.jsxs("div",{style:{width:"auto",height:"100%",padding:0,margin:0},children:[A.jsxs("div",{className:"about-me",style:{overflowX:"hidden"},children:[A.jsx("span",{className:"about-header",children:" SYSTEM > ABOUT"}),A.jsx("div",{className:"about-split"}),A.jsxs("div",{className:"about-content",children:[A.jsxs("span",{className:"about-tagline",style:{display:"flex",alignItems:"center"},children:[A.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[A.jsx("span",{className:"ECKS-NAME",children:"ECKS!"}),A.jsxs("span",{className:"about-quote",style:{marginTop:2},children:['"',Qg,'"']})]}),A.jsx("img",{src:nw,alt:"ECKS",className:"about-image",style:{right:0,marginLeft:50,maxWidth:172,alignSelf:"flex-start"}})]}),A.jsx("div",{className:"about-split"}),A.jsx("p",{className:"about-bio",style:{width:"95%"},children:"Nice to meet ya! I am a self-taught creative who finds retreat in curiously throwing things together in their free time. Over the last several years I have worked on various projects with my experiences in video editing, graphic design, VFX, and occasionally making music here and there."}),A.jsx("p",{className:"about-bio",style:{width:"95%"},children:"This site aims to be an archive of some of my best scraps, loosely stitched together in a way that can at least be presentable. Everything seen on here was formed from a collection of flickering synapses and contempt for predictability."}),A.jsxs("p",{className:"about-bio",style:{width:"98%"},children:["Some of my other work can be found at ",A.jsx("a",{href:"https://tornada.net",target:"_blank",children:A.jsx("span",{className:"bigdeal",children:"Tornada"})})," - an animation supergroup with an all-star lineup of me and my relatives."]}),A.jsx("p",{className:"about-bio",style:{width:"95%"},children:"At the end of the day, I simply just create the stuff that I wish to see and experience. To me that's the only compass that really makes sense."}),A.jsxs("p",{className:"about-bio",style:{width:"95%"},children:["Anyone hoping to get in touch (or just say hi) can reach me at ",A.jsx("a",{href:"mailto:spam@3cks.net",target:"_blank",rel:"noopener noreferrer",children:A.jsx("span",{className:"bigdeal",children:"spam@3cks.net"})})," or via the links listed on here. I'm open to work and/or whatever questions you may have."]})]})]}),A.jsx("span",{className:"bottom-tag",style:{marginTop:24,fontFamily:"Sans Nouveaux",fontSize:"8px"},children:"- 🅮 ECKS 2025 -"})]})}),rw="/assets/Featured-VHS-Bk_2dzNq.gif",Gi=[{title:"THE COLOR BROTHERS",description:"Four colorful boys and their dad.",featuring:"ColeDawg",featuring_link:"https://www.instagram.com/coledawg2001/"}],Oc=[{id:0,title:"BAKLAFA",window_title:"BAKLAVA-IS-FUCKING-AWESOME",alt_title:"BAKLAVA is FUCKING AWESOME",url:"https://iframe.mediadelivery.net/embed/516695/2a455ed0-a3b0-4171-9221-99c465d21d84?autoplay=true&loop=false&muted=false&preload=true&responsive=true",source:"https://3cks.net/#/watch/baklava-is-fucking-awesome",date:"06-2025",description:`Fresh hot two-pack of some commissions I did in June 2025... 
 First one is a promo video for @ciorecords’ BAKLAVA mixtape. Second one is for an artist named FuckingAwesome who wanted something more specific (quick and flashy with clips from Persona 3, L4D2, Panty n Stocking, and Dexter) and I was happy to oblige with both.`,thumbnail:"https://3cks.b-cdn.net/thumbnails/baklafa.jpg",isYouTube:!1},{id:1,title:"THE COLOR BROTHERS",window_title:"THE-COLOR-BROTHERS",alt_title:"COLOR BROTHERS",url:"https://iframe.mediadelivery.net/embed/516695/515277d2-1b3a-4169-b8f0-fc1fea52746b?autoplay=true&loop=false&muted=false&preload=true&responsive=true",source:"https://www.youtube.com/watch?v=KAqmREHqTmg",date:"03-23-2025",description:" Segment I did for Tornada’s “Four of a Kind.” This one was a long time in the making. We had already been trading around this idea for years before being blessed with the time and energy to shoot it. Many strings were pulled in one week but it led to some of the most fun I’ve ever had putting something together. We got plenty of B-Roll (of us asking people in public for happy meals) that I wanna put up eventually.",thumbnail:"https://3cks.b-cdn.net/thumbnails/colorbros.jpg",isYouTube:!1},{id:3,title:"HOT THEM SUMMER!",window_title:"HOT-THEM-SUMMER",alt_title:"HOT THEM SUMMER!",url:"https://iframe.mediadelivery.net/embed/516695/03c5e997-f922-42a8-8762-ccd12fab1d05?autoplay=true&loop=false&muted=false&preload=true&responsive=true",source:"https://3cks.net/#/watch/hot-them-summer",date:"11-24-2022",description:"Lyric video I did for my homegirl Lambs. Threw this together in about a day, just in time for the album she had just released back then. Peace to bluvelv who is on the song as well.",thumbnail:"https://3cks.b-cdn.net/thumbnails/lambs.jpg",isYouTube:!1},{id:4,title:"KNOWLEDGEGOD!",window_title:"KNOWLEDGE-GOD",alt_title:"KNOWLEDEGOD!",url:"https://iframe.mediadelivery.net/embed/516695/53a7705a-b207-4c1a-ac95-84cb68ca4cc6?autoplay=true&loop=false&muted=false&preload=true&responsive=true",source:"https://www.youtube.com/watch?v=sziewA2jzEY",date:"12-31-2022",description:'Segment I did for Tornada’s "Two of a Kind." Was asked to do a music video and this is what I sent back. You can prolly tell it was my first time datamoshing.',thumbnail:"https://3cks.b-cdn.net/thumbnails/knowledgegod.jpg",isYouTube:!1},{id:5,title:"RIDETOSEVENELEVEN",window_title:"MC-RIDE-GOES-TO-THE-STORE",alt_title:"MC RIDE GOES TO THE STORE",url:"https://www.youtube.com/embed/DKDvPdll1D4",source:"https://youtu.be/DKDvPdll1D4",date:"11-24-2019",description:"A fan favorite? Not sure. Made this in 20 minutes on a Sunday and still get asked about it.",thumbnail:"https://3cks.b-cdn.net/thumbnails/ride.jpg",isYouTube:!0},{id:6,title:"FED UP! (IN VR)",window_title:"FED-UP-IN-VR",alt_title:"FEDUP!INVR!",url:"https://www.youtube.com/embed/9m8US6X9gWs",source:"https://www.youtube.com/watch?v=9m8US6X9gWs",date:"08-31-2021",description:"This was one of my first times making money off editing. Threw this one together for Joy Way, the team behind the game being played. They used this video for promo and I was explicitly told to avoid using copyrighted music, but thankfully artist Bazanji came through with a plate of dense, royalty-free raps. Not my usual preferences but at least the client was happy. Honestly besides this I could NOT tell you the last time I played a VR game.",thumbnail:"https://3cks.b-cdn.net/thumbnails/stride.jpg",isYouTube:!0},{id:7,title:"CHOPPA WEDNESDAY!",window_title:"CHOPPA-WEDNESDAY",alt_title:"CHOPPA WEDNESDAY",url:"https://www.youtube.com/embed/G6ik_SLRulQ",source:"https://www.youtube.com/watch?v=G6ik_SLRulQ",date:"10-07-2020",description:"Got really into Team Fortress 2 (and Atlanta trap) during this era and made a few videos like this. I think they all look rougher around the edges now but this one is still my favorite. Was planning to do make 2-3 more but my SFM stopped working lol",thumbnail:"https://3cks.b-cdn.net/thumbnails/choppa.jpg",isYouTube:!0},{id:8,title:"BALD! (TF2)",window_title:"BALD",alt_title:"BALD! (TF2)",url:"https://www.youtube.com/embed/K3XvXyNBrHA",source:"https://www.youtube.com/watch?v=K3XvXyNBrHA",date:"06-10-2020",description:"This one came to me in a dream. It would ultimately serve as the beginning of a short series that kept me occupied during a weird time in my life. Most of my days were being eaten up by stress that I would channel into learning Source Filmmaker in the only way I knew how: by making quick lil videos that were asking to get several effects thrown on in post. Wouldn’t say it’s anywhere near my best work nowadays but I got some fond memories and met some cool people through it. Shoutout to anyone who remembers when I would promote this on TF2 trading sites.",thumbnail:"https://3cks.b-cdn.net/thumbnails/bald.jpg",isYouTube:!0},{id:9,title:"SAGGY AND SOGGY",window_title:"SAGGY-AND-SOGGY",alt_title:"SAGGY AND SOGGY - SODIUM CONNECTIONS",url:"https://www.youtube.com/embed/RnXMoazSLo4",source:"https://www.youtube.com/watch?vRnXMoazSLo4",date:"05-15-2020",description:'This one’s pretty old but still means a lot to me. Originally wrote the first draft of the script for this in 2018 after a PlayStation party with a friend. We were discussing what a funny name for a kids cartoon would be and landed on "Saggy and Soggy." That name stuck with me and would come up the next time I was in my studio. I wanted to write something I wasn’t used to, which at the time, was a cartoon longer than 30 seconds. Looking at it now, my writing was debatably as goofy as it is now, but for different reasons. While I was tryna get this up on the site, I came across the first draft again and was surprised at what got cut out. Mostly just random lines like Saggy saying "God and his son, Curious George" along with even having cutaway gags in the mix at some point. At the perfect time, Tornada just so happened to form, and after a few months, fellow videomaster and partner-in-crime Pity Fowl offered to take over. He showed (and has continued to show) a lotta love to this project, honestly more than what I had originally. That’s what ultimately led to his extended involvement: he wrote the second half of the script and ended up animating most of it. From my end, I offered a music video segment which was my first time using After Effects if you could not already tell..',thumbnail:"https://3cks.b-cdn.net/thumbnails/sagsog.jpg",isYouTube:!0},{id:10,title:"RIDETOSEVENELEVEN",window_title:"RIDETOSEVENELEVEN",alt_title:"MC RIDE GOES TO THE STORE",url:"https://www.youtube.com/embed/DKDvPdll1D4",source:"https://youtu.be/DKDvPdll1D4",date:"11-24-2019",description:"A fan favorite? Not sure. Made this in 20 minutes on a Sunday and still get asked about it.",thumbnail:"https://3cks.b-cdn.net/thumbnails/ride.jpg",isYouTube:!0}];function Mc(l){const r=document.createElement("div");new ta({title:`~/X/VIDEOS/${l.window_title}`,icon:Tt.desktop_videos,width:Math.min(500,window.innerWidth*.9)+"px",height:sw(),x:"center",y:"center",background:"#000",mount:r,setBackground:u=>console.log(`Background set to ${u}`),onClose:()=>{r.remove()}}),r.innerHTML=`
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
  `,setTimeout(()=>{const u=r.querySelector("#share-btn");u&&u.addEventListener("click",()=>{const s=`https://3cks.net/#/watch/${l.window_title.toLowerCase()}`;if(navigator.share)navigator.share({title:l.title,url:s});else{const c=document.createElement("div");new ta({title:"~X/SHARE/",icon:Tt.blog,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",width:"375px",height:"215px",x:"center",y:"center",mount:c,setBackground:d=>console.log(`Background set to ${d}`),onClose:()=>{console.log("Window closed"),c.remove()}}),c.innerHTML=`
            <div style="padding: 24px; text-align: center; background: linear-gradient(0deg,rgb(33, 33, 33) 0%, rgb(12, 12, 12) 86%); width:text-align: center;">
              <div style="display: flex; align-items: center; gap: 10px; margin: 4px 0 16px 0; justify-content: center;">
<div style="display: flex; align-items: flex-end; gap: 32px; margin: 4px 0 16px 0; justify-content: center;font-family:'Pixeloid Sans';">
<div class="share-icon" style="display: flex; flex-direction: column; align-items: center;">
  <a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(s)}" target="_blank" title="Share on Twitter" style="display:inline-block;">
    <img src="${Tt.xitter}" alt="Twitter/X" style="width:33px;height:33px;margin-bottom:8px;" />
  <span style="color:#fdfdfd; font-size:14px;">Xitter</span>
      </a>
</div>
<div class="share-icon" style="display: flex; flex-direction: column; align-items: center;">
  <a href="https://www.reddit.com/submit?url=${encodeURIComponent(s)}" target="_blank" title="Share on Facebook" style="display:inline-block;">
    <img src="${Tt.reddit}" alt="Reddit" style="width:33px;height:33px;margin-bottom:8px;" />

  <span style="color:#fdfdfd; font-size:14px;">Reddit</span>
      </a>
</div>
<div class="share-icon" style="display: flex; flex-direction: column; align-items: center;">
  <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(s)}" target="_blank" title="Share on Reddit" style="display:inline-block;">
    <img src="${Tt.facebook}" alt="Facebook" style="width:33px;height:33px;margin-bottom:8px;" />

  <span style="color:#fdfdfd; font-size:14px;">Facebook</span>
      </a>
</div>
<div class="share-icon" style="display: flex; flex-direction: column; align-items: center;">
    <a href="mailto:?subject=Check%20this%20video&body=${encodeURIComponent(s)}" title="Share via Email" style="display:inline-block;">
    <img src="${Tt.desktop_contact}" alt="Email" style="width:33px;height:33px;margin-bottom:8px;" />

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
          `,setTimeout(()=>{const d=c.querySelector("#copy-share-link");d&&d.addEventListener("click",()=>{navigator.clipboard.writeText(s),d.textContent="Copied!",setTimeout(()=>d.textContent="Copy",1200)})},0)}})},0)}const ow=A.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",style:{marginLeft:4,verticalAlign:"middle"},children:A.jsx("path",{fill:"#FF0000",d:"M21.8 8.001a2.75 2.75 0 0 0-1.94-1.94C18.19 6 12 6 12 6s-6.19 0-7.86.061a2.75 2.75 0 0 0-1.94 1.94A28.6 28.6 0 0 0 2 12a28.6 28.6 0 0 0 .2 3.999 2.75 2.75 0 0 0 1.94 1.94C5.81 18 12 18 12 18s6.19 0 7.86-.061a2.75 2.75 0 0 0 1.94-1.94A28.6 28.6 0 0 0 22 12a28.6 28.6 0 0 0-.2-3.999zM10 15V9l5 3-5 3z"})}),uw=A.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",style:{marginLeft:4,verticalAlign:"middle"},children:A.jsx("path",{fill:"#888",d:"M10 17l5-5-5-5v10z"})}),sw=()=>window.innerWidth<768?"60%":"400px",cw=()=>A.jsxs(A.Fragment,{children:[A.jsxs("div",{className:"videos-header",style:{color:"#FDFDFD",fontSize:24,margin:0,overflowX:"visible",overflowY:"hidden",display:"flex",marginTop:-8,whiteSpace:"nowrap",marginBottom:16},children:[A.jsxs("div",{style:{fontFamily:"Pixeloid Sans",flexDirection:"column",display:"flex",minWidth:128,borderBottom:"2px solid black",width:"40%",paddingRight:30},children:[A.jsx("p",{className:"videos-header-title",style:{width:"100px",fontFamily:"Pixeloid Sans Bold",fontSize:40,marginLeft:8},children:"VIDEOS"}),A.jsxs("p",{className:"videos-header-subtitle",style:{fontSize:14,width:"168px",lineHeight:1,marginTop:-8,marginLeft:12,marginRight:8,textWrap:"wrap"},children:["I made a few of these here and there.. and you can watch em on here or ",A.jsx("a",{href:"https://youtube.com/ecksposting",target:"_blank",children:"YouTube!"})]})]}),A.jsxs("div",{className:"videos-featured",style:{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",marginTop:1,padding:4,borderRadius:0,borderBottom:"2px solid black",maxWidth:480,cursor:"pointer",lineHeight:1},onClick:()=>Mc(Oc[1]),children:[A.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[A.jsx("img",{src:rw,alt:Gi[0].title,style:{width:120,height:140,objectFit:"contain",paddingRight:8,marginTop:4}}),A.jsxs("span",{className:"featured-video-title",style:{paddingLeft:4,paddingRight:16,color:"white",fontSize:26,lineHeight:1.25,fontWeight:"bold",display:"block",width:"280px",textWrap:"wrap"},children:[A.jsx("span",{children:"-  FEATURED "}),A.jsx("br",{}),A.jsx("span",{children:Gi[0].title})]})]}),A.jsxs("span",{style:{color:"white",fontSize:14,display:"block",marginTop:12,marginLeft:2,lineHeight:1},children:[Gi[0].description," Art done by ",A.jsxs("a",{href:Gi[0].featuring_link,target:"_blank",children:["@",Gi[0].featuring]})]})]})]}),A.jsx("div",{className:"videos-grid",style:{display:"flex",flexWrap:"wrap",width:"95%",textAlign:"center",gap:"12px",backgroundColor:"#FDFDFD"},children:Oc.filter(l=>l.id!==10).map(l=>A.jsxs("button",{className:"my-videos",style:{width:180,border:"2px ridge #222",borderRadius:1,height:"100%",margin:"auto",background:"#FDFDFD",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:"pointer",overflow:"hidden"},title:l.title,onClick:()=>Mc(l),children:[A.jsx("img",{src:l.thumbnail,alt:l.alt_title,loading:"lazy",style:{width:"90%",height:"90%",display:"block",border:"2px solid #222"}}),A.jsxs("span",{style:{color:"black",fontWeight:"bold",fontSize:10,textAlign:"center",margin:"auto",padding:"6px 4px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",height:"100%"},children:[l.title,l.isYouTube?ow:uw]})]},l.id))}),A.jsx("span",{className:"bottom-tag",style:{marginTop:16,fontFamily:"Sans Nouveaux"},children:"- press play. trust the process. -"}),A.jsx("span",{style:{textAlign:"center"},children:"..."})]}),fw=[{src:"/gallery/website-collage.png",alt:"untitled02",year:"2025",full:"/gallery/website-collage.png",tags:["graphics"]},{src:"/gallery/website-collage.png",alt:"untitled01",year:"2025",full:"/gallery/website-collage.png",tags:["graphics"]},{src:"/gallery/2025-search-thumb.jpg",alt:"INTERNET-SEARCH",year:"2025",full:"/gallery/2025-search.jpg",tags:["graphics"]},{src:"/gallery/2025-baklava-mockup-thumb.jpg",alt:"BAKLAVA-AD-MOCKUP",year:"2025",full:"/gallery/2025-baklava-mockup.jpg",tags:["graphics"]},{src:"/gallery/2025-baklava-blend.jpg",alt:"BAKLAVA.BLEND",year:"2025",full:"/gallery/2025-baklava-blend.jpg",tags:["graphics"]},{src:"/gallery/2025-nadathumb.jpg",alt:"TOM-Y-JERRY",year:"2025",full:"/gallery/2025-nada.gif",tags:["graphics"]},{src:"/gallery/2025-banner.jpg",alt:"BANNER",year:"2025",full:"/gallery/2025-banner.jpg",tags:["graphics"]},{src:"/gallery/2025-you-rule-thumb.jpg",alt:"YOU-RULE",year:"2025",full:"/gallery/2025-you-rule.jpg",tags:["photos"]},{src:"/gallery/2025_crankdat.jpg",alt:"CRANKDAT",year:"2025",full:"/gallery/2025_crankdat.jpg",tags:["music"]},{src:"/gallery/2025-uhuhuh.jpg",alt:"UHUHUH",year:"2025",full:"/gallery/2025-uhuhuh.jpg",tags:["photos"]},{src:"/gallery/2025-vinyl.jpg",alt:"VINYL",year:"2025",full:"/gallery/2025-vinyl.jpg",tags:["music"]},{src:"/gallery/2025_bro-has-kickassia.jpg",alt:"BRO-HAS-KICKASSIA",year:"2025",full:"/gallery/2025_bro-has-kickassia.jpg",tags:["music"]},{src:"/gallery/2024-tape-mockup.jpg",alt:"SCRAPPED-TAPE-MOCKUP",year:"2024",full:"/gallery/2024-tape-mockup.jpg",tags:["graphics"]},{src:"/gallery/2024-be.jpg",alt:"BE",year:"2024",full:"/gallery/2024-be.jpg",tags:["music"]},{src:"/gallery/2024-HBO.jpg",alt:"HBO",year:"2024",full:"/gallery/2024-HBO.jpg",tags:["music"]},{src:"/gallery/2024-firestar.jpg",alt:"FIRESTAR",year:"2024",full:"/gallery/2024-firestar.jpg",tags:["photos"]},{src:"/gallery/2024-threebeersdeep.jpg",alt:"THREEBEERSDEEP",year:"2024",full:"/gallery/2024-threebeersdeep.jpg",tags:["photos"]},{src:"/gallery/2024-sagsog.jpg",alt:"SAG-SOG",year:"2024",full:"/gallery/2024-sagsog.jpg",tags:["photos"]},{src:"/gallery/2024-babygreen.jpg",alt:"BABYGREENONEARTH",year:"2024",full:"/gallery/2024-babygreen.jpg",tags:["photos"]},{src:"/gallery/2023-mach-stoney.jpg",alt:"MACH-STONEY",year:"2023",full:"/gallery/2023-mach-stoney.jpg",tags:["graphics"]},{src:"/gallery/2023-orpheus-thumb.jpg",alt:"ORPHEUS",year:"2023",full:"/gallery/2023-orpheus.jpg",tags:["music"]},{src:"/gallery/2023-setup.jpg",alt:"SETUP",year:"2023",full:"/gallery/2023-setup.jpg",tags:["photos"]},{src:"/gallery/2022-waffle.jpg",alt:"WH",year:"2022",full:"/gallery/2022-waffle.jpg",tags:["photos"]},{src:"/gallery/2020-fight-songs-thumb.jpg",alt:"FIGHT-SONGS",year:"2020",full:"/gallery/2020-fight-songs.jpg",tags:["music"]},{src:"/gallery/2020-floppa-thumb.jpg",alt:"BIG-FLOPPA",year:"2020",full:"/gallery/2020-floppa.jpg",tags:["photos"]},{src:"/gallery/2018-tux.jpg",alt:"TUX",year:"2018",full:"/gallery/2018-tux.jpg",tags:["photos"]}],Dm=["graphics","photos","music"],dw=()=>{const[l,r]=v.useState([...Dm]),u=d=>{r(p=>p.includes(d)?p.filter(y=>y!==d):[...p,d])},s=d=>{const p=document.createElement("div");p.style.background="#000",p.style.display="flex",p.style.alignItems="center",p.style.justifyContent="center",p.style.height="100%";const y=new window.Image;y.src=d.full,y.alt=d.alt,y.style.width="100%",y.style.maxWidth="600px",y.style.height="auto",y.style.display="flex",y.style.margin="auto",y.onload=()=>{const b=Math.min(y.naturalWidth,window.innerWidth*.33),g=Math.min(y.naturalHeight,window.innerHeight*.33),x=Math.max(220,b),E=Math.max(120,g);p.innerHTML="",p.appendChild(y),new ta({title:`~/X/GALLERY/IMAGES/${d.year}/${d.alt}`,icon:Tt.desktop_gallery,background:"#000",width:`${x}px`,height:`${E}px`,x:"center",y:"center",mount:p,setBackground:()=>{},onClose:()=>p.remove(),noResize:window.innerWidth<600,noMax:window.innerWidth<600,noMin:window.innerWidth<600,noFull:window.innerWidth<600})}},c=l.length===0?[]:fw.filter(d=>d.tags&&d.tags.some(p=>l.includes(p)));return A.jsxs(A.Fragment,{children:[A.jsxs("div",{className:"gallery-header",style:{color:"black",fontSize:40,margin:4},children:[A.jsx("p",{className:"gallery-header-title",children:"THE GALLERY"}),A.jsx("p",{className:"gallery-header-subtitle",style:{fontSize:14,lineHeight:1},children:"Here's a lil archive of images I have made, photos of my media collection, various side-quests and more. Double click an image to view it in full size."}),A.jsx("div",{style:{display:"flex",gap:18,justifyContent:"center",marginBottom:12,marginTop:12},children:Dm.map(d=>A.jsxs("label",{style:{display:"flex",alignItems:"center",cursor:"pointer",fontFamily:"Pixeloid Sans",fontSize:16},children:[A.jsx("input",{type:"checkbox",checked:l.includes(d),onChange:()=>u(d),style:{accentColor:"#222",width:18,height:18,marginRight:8,borderRadius:4,border:"2px solid #222",boxShadow:"0 2px 4px rgba(0,0,0,0.44)",cursor:"pointer"}}),A.jsx("span",{style:{color:l.includes(d)?"#222":"#888",fontWeight:l.includes(d)?"bold":"normal"},children:d.toUpperCase()})]},d))}),A.jsx("div",{className:"line"})]}),A.jsxs("div",{className:"gallery-grid",style:{width:"98%",display:"flex",flexWrap:"wrap",gap:16,justifyContent:"center",marginBottom:16},children:[c.map((d,p)=>A.jsx("div",{className:"gallery-image-frame",style:{aspectRatio:"auto",background:"#111",border:"2px ridge #222",margin:"auto",padding:4,display:"flex",objectFit:"cover",alignItems:"center",justifyContent:"center",maxWidth:200,maxHeight:200,cursor:"pointer"},onDoubleClick:()=>s(d),onTouchEnd:()=>s(d),title:d.alt,children:A.jsx("img",{src:d.src,alt:d.alt,loading:"lazy",style:{background:"black",aspectRatio:"auto",maxWidth:"200px",maxHeight:"200px",width:"auto",height:"auto",display:"inline"}})},p)),A.jsx("br",{}),A.jsx("span",{className:"gallery-bottom-tag",style:{fontFamily:"Sans Nouveaux",marginTop:18},children:"- one shot. cut. print. perfect. -"})]})]})},hw=[{title:"track1.mp3",artist:"Artist A",src:"/music/track1.mp3",cover:"/covers/track1.jpg"},{title:"track2.mp3",artist:"Artist B",src:"/music/track2.mp3",cover:"/covers/track2.jpg"}],pw=()=>A.jsxs("div",{style:{background:"linear-gradient(135deg, #181818 0%, #232323 100%)",minHeight:"100vh",color:"#fdfdfd",fontFamily:"Sans Nouveaux, Arial, sans-serif",padding:"32px",boxSizing:"border-box"},children:[A.jsx("h1",{style:{fontSize:32,marginBottom:24,fontWeight:"bold",letterSpacing:2},children:"Music"}),A.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"32px"},children:hw.map((l,r)=>A.jsxs("div",{style:{background:"#222",borderRadius:12,boxShadow:"0 2px 16px rgba(0,0,0,0.6)",padding:20,display:"flex",flexDirection:"column",alignItems:"center",transition:"box-shadow 0.2s"},children:[A.jsx("img",{src:l.cover,alt:l.title,style:{width:120,height:120,objectFit:"cover",borderRadius:8,marginBottom:16,boxShadow:"0 0 8px #000"}}),A.jsx("div",{style:{fontSize:18,fontWeight:"bold",marginBottom:4},children:l.title}),A.jsx("div",{style:{fontSize:14,color:"#aaa",marginBottom:12},children:l.artist}),A.jsxs("audio",{controls:!0,style:{width:"100%"},children:[A.jsx("source",{src:l.src,type:"audio/mp3"}),"Your browser does not support the audio element."]})]},r))})]}),mw=()=>A.jsxs("div",{style:{color:"black",fontSize:20,overflow:"hidden",marginLeft:12,marginRight:12,marginTop:12,paddingBottom:4,fontFamily:"Sans Nouveaux",textRendering:"optimizeLegibility"},children:[A.jsx("span",{style:{fontSize:14,marginTop:16,marginBottom:8},children:"Email:"}),A.jsx("a",{href:"mailto:spam@3cks.net",target:"_blank",children:A.jsx("div",{className:"email",style:{display:"flex",border:"2px solid #222",fontWeight:"bold",textAlign:"center",alignContent:"center",paddingTop:12,marginBottom:16,paddingBottom:16,marginTop:8,lineHeight:1},children:A.jsxs("span",{style:{margin:"0 auto"},children:[A.jsx("img",{src:Tt.desktop_contact,style:{width:24,height:24,marginRight:4}})," - spam@3cks.net"]})})}),A.jsx("span",{style:{fontSize:14,marginTop:16},children:"Socials:"}),A.jsxs("div",{style:{marginBottom:32,alignContent:"center",textAlign:"center",display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gridTemplateRows:"repeat(2, auto)",listStyleType:"disc",margin:"8px auto",lineHeight:1,fontSize:14,border:"2px solid #222"},children:[A.jsx("span",{className:"icon",children:A.jsx("a",{href:"https://youtube.com/ecksposting",target:"_blank",children:A.jsx("img",{src:Tt.youtube,alt:"YouTube",style:{width:48,height:48}})})}),A.jsx("span",{className:"icon",children:A.jsx("a",{href:"https://instagram.com/ecksposting",target:"_blank",children:A.jsx("img",{src:Tt.instagram,alt:"Instagram",style:{width:48,height:48}})})}),A.jsx("span",{className:"icon",children:A.jsx("a",{href:"https://twitter.com/ecksposting",target:"_blank",children:A.jsx("img",{src:Tt.xitter,alt:"Xitter",style:{width:48,height:48}})})}),A.jsx("span",{className:"icon",children:A.jsx("a",{href:"https://steamcommunity.com/id/ecksposting",target:"_blank",children:A.jsx("img",{src:Tt.steam,alt:"Steam",style:{width:48,height:48}})})}),A.jsx("span",{className:"icon",children:A.jsx("a",{href:"https://eckslol.newgrounds.com",target:"_blank",children:A.jsx("img",{src:Tt.newgrounds,alt:"Newgrounds",style:{width:48,height:48}})})})]}),A.jsx("span",{className:"bottom-tag",style:{marginTop:32},children:"- your move. -"})]}),gw=()=>A.jsx(A.Fragment,{children:A.jsxs("div",{style:{color:"black",fontSize:24,overflow:"hidden",margin:12,paddingBottom:4,fontFamily:"Sans Nouveaux"},children:[A.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:16},children:[A.jsx("img",{src:Tt.moneyspin,alt:"Donate",style:{width:96,height:128,objectFit:"contain",marginTop:8}}),A.jsxs("div",{style:{flex:1,lineHeight:1,fontSize:12,marginBottom:8},children:[A.jsx("span",{children:"Paypal:"}),A.jsx("a",{href:"https://paypal.me/ecksposting",target:"_blank",children:A.jsx("div",{className:"paypal-button",style:{display:"flex",border:"3px ridge #222",fontWeight:"bold",textAlign:"center",alignItems:"center",padding:8,marginBottom:8,marginTop:8,lineHeight:1,fontSize:12},children:A.jsx("span",{style:{margin:"0 auto"},children:"/ecksposting"})})}),A.jsx("span",{children:"Cashapp:"}),A.jsx("a",{href:"https://cash.app/$eckslol",target:"_blank",children:A.jsx("div",{className:"cashapp-button",style:{display:"flex",border:"3px ridge #222",fontWeight:"bold",textAlign:"center",alignItems:"center",padding:8,marginBottom:24,marginTop:8,lineHeight:1,fontSize:12},children:A.jsx("span",{style:{margin:"0 auto"},children:"$eckslol"})})})]})]}),A.jsx("span",{className:"bottom-tag",children:"- preciate it boss. -"})]})}),bw=()=>A.jsx(A.Fragment,{children:A.jsxs("div",{className:"notepad",style:{fontSize:8,fontFamily:"Sans Nouveaux",overflow:"hidden",paddingLeft:16,paddingRight:16,textRendering:"optimizeLegibility",lineHeight:1.4},children:[A.jsxs("p",{children:[A.jsx("span",{className:"notepad-header",children:"ADMIN"}),A.jsx("br",{}),A.jsx("span",{children:"Like most of what you see on here, this website was designed and built by the homeboy who's running it! He couldn't do it, however, without the help of:"})]}),A.jsxs("p",{className:"links",style:{fontSize:8,lineHeight:1.5},children:[A.jsx("span",{className:"notepad-header",children:"CODE"}),A.jsxs("span",{children:[A.jsx("br",{}),"- ",A.jsx("a",{href:"https://nextapps-de.github.io/winbox/",target:"_blank",children:"Winbox.js"})," | Window manager",A.jsx("br",{}),"- ",A.jsx("a",{href:"https://github.com/react95-io/React95",target:"_blank",children:"React95"})," | UI component library",A.jsx("br",{}),"- ",A.jsx("a",{href:"https://jdan.github.io/98.css/",target:"_blank",children:"98.css"})," | CSS for additional UI",A.jsx("br",{}),"- ",A.jsx("a",{href:"https://animate.style/",target:"_blank",children:"animate.css"})," | CSS animations",A.jsx("br",{}),"- ",A.jsx("a",{href:"https://oudkee.neocities.org/tutorials/tutcrt",target:"_blank",children:"@oudkee"})," | CRT Effect"]})]}),A.jsx("span",{className:"notepad-header",children:"ART"}),A.jsx("br",{}),A.jsxs("span",{children:["- Loading screen art by ",A.jsx("a",{href:"https://x.com/luvbappy",target:"_blank",children:"@luvbappy"}),A.jsx("br",{}),'- "About Me" illustration by ',A.jsx("a",{href:"https://www.instagram.com/coledawg2001/",target:"_blank",children:"@ColeDawg"})]}),A.jsxs("p",{children:[A.jsx("span",{className:"notepad-header",children:"SPECIAL THANKS"}),A.jsx("br",{}),"- Friends of the site:",A.jsxs("span",{children:[A.jsx("br",{}),A.jsx("a",{href:"https://lucke.neocities.org",target:"_blank",children:"lucke.neocities.org"}),", ",A.jsx("a",{href:"https://4nx4e.lol",target:"_blank",children:"4nx4e.lol"})]}),A.jsx("br",{}),A.jsx("span",{children:"- YOU! (Yes, you!) for being here!"}),A.jsx("br",{})]})]})}),yw="/assets/ms_sans_serif-Du8rjN1q.woff2",vw="/assets/ms_sans_serif_bold-D5dpRRHG.woff2";let Xg=[zn.background1,zn.background2,zn.background3,zn.background4,zn.background5,zn.background6],xw=Math.floor(Xg.length*Math.random()),Vg=Xg[xw];console.log(Vg);H1`
  ${U1}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${yw}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${vw}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;const Aw=()=>{const[l,r]=v.useState(!0),u=()=>{r(V=>{const m=!V;return m?document.body.classList.add("crt"):document.body.classList.remove("crt"),m})},s=v.useRef(0),c=()=>{const V=Date.now();return V-s.current>=400?(s.current=V,!0):!1},[d,p]=v.useState(!0),[y,b]=v.useState(!1),[g,x]=v.useState(!1),E=v.useRef(null),O=v.useRef(null);v.useEffect(()=>{if(!g)return;function V(m){O.current&&!O.current.contains(m.target)&&E.current&&!E.current.contains(m.target)&&x(!1)}return document.addEventListener("mousedown",V),()=>{document.removeEventListener("mousedown",V)}},[g]);const[$,L]=v.useState(new Date);v.useEffect(()=>{const V=setInterval(()=>L(new Date),1e3);return()=>clearInterval(V)},[]);const J=$.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"}),B=$.toLocaleDateString([],{month:"2-digit",day:"2-digit",year:"numeric"}),H=V=>window.innerWidth<768?"center":{about:"10%",gallery:"50%",videos:"25%",contact:"30%",donate:"50%",credits:"50%"}[V],N=(V,m="[3cks.net]")=>{document.title=V,setTimeout(()=>{document.title=m},11111)},F=hl().pathname;v.useEffect(()=>{p(!0),b(!1),document.body.classList.add("crt");const V=setTimeout(()=>{p(!1);const m=F.match(/^\/watch\/([^/]+)$/i);if(m){const j=m[1].toLowerCase(),tt=Oc.find(k=>k.window_title.replace(/[^a-z0-9]/gi,"").toLowerCase()===j.replace(/[^a-z0-9]/gi,""));if(tt){Mc(tt);return}}switch(F){case"/donate":nt();break;case"/videos":bt();break;case"/gallery":Ct();break;case"/music":Ot();break;case"/blog":b(!0);break;default:b(!0);break}},6116);return()=>clearTimeout(V)},[F]),v.useEffect(()=>{if(y){const V=document.createElement("div");new ta({title:"~X/WHATS_NEW/",icon:Tt.info,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",width:"375px",height:"400px",x:"center",y:"center",url:"https://google.com",setBackground:m=>console.log(`Background set to ${m}`),onClose:()=>{console.log("Window closed"),V.remove()}}),b(!1)}},[y]),v.useEffect(()=>{document.body.style.backgroundImage=`url(${Vg})`,document.body.style.backgroundSize="cover",document.body.style.backgroundRepeat="no-repeat",document.body.style.backgroundPosition="center"},[]);const I=()=>{if(!c())return;N("[3cks.net] - CREDITS!");const V=document.createElement("div");V.className="terminal-winbox-body",new ta({title:"~X/CREDITS.TXT",icon:Tt.notepad,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:"255px",maxWidth:"20%",height:"360px",maxHeight:"25%",x:H("credits"),y:"45%",mount:V,setBackground:j=>console.log(`Background set to ${j}`),onClose:()=>{console.log("Window closed"),document.title="[3cks.net]",Oe.createRoot(V).unmount(),V.remove()}}),Oe.createRoot(V).render(A.jsx(bw,{}))},nt=()=>{if(!c())return;N("[3cks.net] - DONATE!");const V=document.createElement("div");new ta({title:"~X/DONATE/",icon:Tt.desktop_donate,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:Math.min(325,window.innerWidth*.8)+"px",maxWidth:"40%",height:Math.min(230,window.innerHeight*.7)+"px",maxHeight:"35%",x:H("donate"),y:"45%",mount:V,setBackground:j=>console.log(`Background set to ${j}`),onClose:()=>{console.log("Window closed"),document.title="[3cks.net]",Oe.createRoot(V).unmount(),V.remove()}}),Oe.createRoot(V).render(A.jsx(gw,{}))},it=()=>{if(!c())return;N("[3cks.net] - ABOUT!");const V=document.createElement("div");new ta({title:"~X/ABOUT/",className:"no-resize",icon:Tt.desktop_about,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:Math.min(440,window.innerWidth*.8)+"px",maxWidth:"440px",height:Math.min(575,window.innerHeight*.7)+"px",maxHeight:"550px",x:H("about"),y:"10%",mount:V,setBackground:j=>console.log(`Background set to ${j}`),noResize:!0,onClose:()=>{console.log("Window closed"),document.title="[3cks.net]",Oe.createRoot(V).unmount(),V.remove()}}),Oe.createRoot(V).render(A.jsx(iw,{}))},bt=()=>{if(!c())return;N("[3cks.net] - VIDEOS!");const V=document.createElement("div");l&&V.classList.add("crt"),new ta({title:"~X/VIDEOS/",icon:Tt.desktop_videos,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:Math.min(650,window.innerWidth*.8)+"px",maxWidth:"800px",height:Math.min(475,window.innerHeight*.7)+"px",maxHeight:"550px",x:H("videos"),y:"8%",mount:V,setBackground:j=>console.log(`Background set to ${j}`),onClose:()=>{console.log("Window closed"),document.title="[3cks.net]",Oe.createRoot(V).unmount(),V.remove()}}),Oe.createRoot(V).render(A.jsx(cw,{}))},dt=()=>{if(!c())return;N("[3cks.net] - CONTACT!");const V=document.createElement("div");new ta({title:"~X/HIT_MY_LINE/",icon:Tt.desktop_contact,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:Math.min(325,window.innerWidth*.8)+"px",maxWidth:"600px",height:Math.min(280,window.innerHeight*.7)+"px",maxHeight:"400px",x:H("contact"),y:"30%",mount:V,setBackground:j=>console.log(`Background set to ${j}`),onClose:()=>{console.log("Window closed"),document.title="[3cks.net]",Oe.createRoot(V).unmount(),V.remove()}}),Oe.createRoot(V).render(A.jsx(mw,{}))},Ct=()=>{if(!c())return;N("[3cks.net] - GALLERY!");const V=document.createElement("div");new ta({title:"~X/GALLERY/",icon:Tt.desktop_gallery,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:Math.min(490,window.innerWidth*.8)+"px",maxWidth:"800px",height:Math.min(580,window.innerHeight*.7)+"px",maxHeight:"650px",x:H("gallery"),y:"30%",mount:V,setBackground:j=>console.log(`Background set to ${j}`),onClose:()=>{console.log("Window closed"),document.title="[3cks.net]",Oe.createRoot(V).unmount(),V.remove()}}),Oe.createRoot(V).render(A.jsx(dw,{}))},Ot=()=>{if(!c())return;N("[3cks.net] - MUSIC!");const V=document.createElement("div");new ta({title:"~X/MUSIC/",icon:Tt.desktop_gallery,background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgb(40, 40, 40) 100%)",border:"0.3em",width:Math.min(650,window.innerWidth*.8)+"px",maxWidth:"675px",height:Math.min(375,window.innerHeight*.7)+"px",maxHeight:"400px",x:H("gallery"),y:"30%",mount:V,setBackground:j=>console.log(`Background set to ${j}`),onClose:()=>{console.log("Window closed"),document.title="[3cks.net]",Oe.createRoot(V).unmount(),V.remove()}}),Oe.createRoot(V).render(A.jsx(pw,{}))};return v.useEffect(()=>{Object.values(Tt).forEach(V=>{const m=new window.Image;m.src=V})},[]),A.jsxs(A.Fragment,{children:[d&&A.jsx(R2,{}),A.jsxs("div",{className:"App",children:[A.jsx("div",{className:"crt",style:{opacity:l?1:0,pointerEvents:"none",transition:"opacity 0.3 ease"}}),A.jsxs("div",{id:"desktop",children:[A.jsx("label",{htmlFor:"about-me",className:"desktop-item",onClick:it,children:A.jsxs("a",{href:"#/about/",onClick:V=>V.preventDefault(),children:[A.jsx("img",{src:Tt.desktop_about_gif,className:"logo",alt:"ABOUT"}),A.jsx("div",{className:"desktop-text",children:"ABOUT"})]})}),A.jsx("div",{id:"about-me-content",style:{display:"none"}}),A.jsx("label",{htmlFor:"videos",className:"desktop-item",onClick:bt,children:A.jsxs("a",{href:"#/videos/",onClick:V=>V.preventDefault(),children:[A.jsx("img",{src:Tt.desktop_videos_gif,className:"logo",alt:"VIDEOS"}),A.jsx("div",{className:"desktop-text",children:"VIDEOS"})]})}),A.jsx("div",{id:"videos-content",style:{display:"none"}}),A.jsx("label",{htmlFor:"gallery",className:"desktop-item",onClick:Ct,children:A.jsxs("a",{href:"#/gallery/",onClick:V=>V.preventDefault(),children:[A.jsx("img",{src:Tt.desktop_gallery_gif,className:"logo",alt:"GALLERY"}),A.jsx("div",{className:"desktop-text",children:"GALLERY"})]})}),A.jsx("div",{id:"gallery-content",style:{display:"none"}}),A.jsx("label",{htmlFor:"contact",className:"desktop-item",onClick:dt,children:A.jsxs("a",{href:"#/contact/",onClick:V=>V.preventDefault(),children:[A.jsx("img",{src:Tt.desktop_contact_gif,className:"logo",alt:"CONTACT"}),A.jsx("div",{className:"desktop-text",children:"CONTACT"})]})}),A.jsx("div",{id:"contact-content",style:{display:"none"}}),A.jsx("label",{htmlFor:"donate",className:"desktop-item",onClick:nt,children:A.jsxs("a",{href:"#/donate/",onClick:V=>V.preventDefault(),children:[A.jsx("img",{src:Tt.desktop_donate_gif,className:"logo",alt:"GALLERY"}),A.jsx("div",{className:"desktop-text",children:"DONATE"})]})}),A.jsx("div",{id:"donate-content",style:{display:"none"}})]})]}),A.jsx("div",{className:"taskbar",children:A.jsx(j1,{theme:E2,children:A.jsx(bg,{fixed:!0,style:{top:"auto",bottom:0,position:"fixed",zIndex:1},children:A.jsxs(ko,{noPadding:!0,style:{justifyContent:"space-between"},children:[A.jsxs("div",{style:{position:"relative",display:"flex",width:"100%",alignItems:"center",padding:"0px"},children:[A.jsxs($n,{ref:E,onClick:()=>x(!g),active:g?!0:void 0,style:{fontWeight:"bold",marginRight:6,marginLeft:6},children:[A.jsx("img",{src:x2,alt:"react95 logo",style:{height:"20px",marginRight:4}}),"START"]}),A.jsx(Hg,{size:35,style:{marginRight:10}}),A.jsxs("div",{style:{position:"relative",display:"inline-block",marginRight:14},onClick:()=>window.open("https://youtube.com/ecksposting","_blank","noopener,noreferrer"),children:[A.jsx("img",{src:Tt.youtube,alt:"YouTube",className:"taskbar-item",style:{height:"25px"}}),A.jsx("div",{className:"taskbar-tooltip",style:{display:"none",position:"absolute",bottom:"120%",left:"50%",transform:"translateX(-45%)",background:"#222",color:"#fff",padding:"6px 8px",border:"2px solid white",fontSize:14,whiteSpace:"nowrap",zIndex:100,boxShadow:"0 2px 8px #0006",pointerEvents:"none"},children:"YOUTUBE"})]}),A.jsxs("div",{style:{position:"relative",display:"inline-block",marginRight:14},onClick:()=>window.open("https://youtube.com/ecksposting","_blank","noopener,noreferrer"),children:[A.jsx("img",{src:Tt.instagram,alt:"react95 logo",className:"taskbar-item",style:{height:"25px"}}),A.jsx("div",{className:"taskbar-tooltip",style:{display:"none",position:"absolute",bottom:"120%",left:"50%",transform:"translateX(-45%)",background:"#222",color:"#fff",padding:"6px 8px",border:"2px solid white",fontSize:14,whiteSpace:"nowrap",zIndex:100,boxShadow:"0 2px 8px #0006",pointerEvents:"none"},children:"INSTA"})]}),A.jsxs("div",{style:{position:"relative",display:"inline-block",marginRight:14},onClick:()=>window.open("https://youtube.com/ecksposting","_blank","noopener,noreferrer"),children:[A.jsx("img",{src:Tt.xitter,alt:"react95 logo",className:"taskbar-item",style:{height:"25px"}}),A.jsx("div",{className:"taskbar-tooltip",style:{display:"none",position:"absolute",bottom:"120%",left:"50%",transform:"translateX(-45%)",background:"#222",color:"#fff",padding:"6px 8px",border:"2px solid white",fontSize:14,whiteSpace:"nowrap",zIndex:100,boxShadow:"0 2px 8px #0006",pointerEvents:"none"},children:"XITTER"})]}),A.jsxs("div",{style:{position:"relative",display:"inline-block",marginRight:14},onClick:()=>window.open("https://eckslol.newgrounds.com/","_blank","noopener,noreferrer"),children:[A.jsx("img",{src:Tt.newgrounds,alt:"react95 logo",className:"taskbar-item",style:{height:"25px"}}),A.jsx("div",{className:"taskbar-tooltip",style:{display:"none",position:"absolute",bottom:"120%",left:"50%",transform:"translateX(-45%)",background:"#222",color:"#fff",padding:"6px 8px",border:"2px solid white",fontSize:14,whiteSpace:"nowrap",zIndex:100,boxShadow:"0 2px 8px #0006",pointerEvents:"none"},children:"NEWGROUNDS"})]}),g&&A.jsxs(yg,{ref:O,style:{position:"absolute",left:"-3px",bottom:"80%"},onClick:()=>x(!1),children:[A.jsxs(sl,{className:"taskbar-tab",onClick:bt,style:{cursor:"pointer",fontFamily:"Pixeloid Sans"},children:[A.jsx("span",{role:"img",children:A.jsx("img",{src:Tt.desktop_videos,alt:"VIDEOS",style:{width:"20px",height:"20px",margin:"0 15px -4px 0"}})}),"VIDEOS"]}),A.jsxs(sl,{className:"taskbar-tab",onClick:Ct,style:{cursor:"pointer",fontFamily:"Pixeloid Sans"},children:[A.jsx("span",{role:"img",children:A.jsx("img",{src:Tt.desktop_gallery,alt:"GALLERY",style:{width:"20px",height:"20px",margin:"0 15px -4px 0"}})}),"GALLERY"]}),A.jsxs(sl,{className:"taskbar-tab",onClick:it,style:{cursor:"pointer",fontFamily:"Pixeloid Sans"},children:[A.jsx("span",{role:"img",children:A.jsx("img",{src:Tt.desktop_about,alt:"GALLERY",style:{width:"20px",height:"20px",margin:"0 15px -4px 0"}})}),"ABOUT"]}),A.jsxs(sl,{className:"taskbar-tab",onClick:y?()=>{}:()=>b(!0),style:{cursor:"pointer",fontFamily:"Pixeloid Sans"},children:[A.jsx("span",{role:"img",children:A.jsx("img",{src:Tt.blog,alt:"GALLERY",style:{width:"20px",height:"20px",margin:"0 15px -4px 0"}})}),"BLOG"]}),A.jsx(Do,{}),A.jsxs(sl,{className:"taskbar-tab",onClick:()=>window.open("https://tornada.net/","_blank","noopener,noreferrer"),style:{cursor:"pointer",fontFamily:"Pixeloid Sans"},children:[A.jsx("span",{role:"img",children:A.jsx("img",{src:Tt.tornada,alt:"TORNADA",style:{width:"20px",height:"20px",margin:"0 15px -4px 0"}})}),"TORNADA"]}),A.jsx(Do,{}),A.jsxs(sl,{className:"taskbar-tab",onClick:I,style:{cursor:"pointer",fontFamily:"Pixeloid Sans"},children:[A.jsx("span",{role:"img",children:A.jsx("img",{src:Tt.notepad,alt:"CREDITS",style:{width:"20px",height:"20px",margin:"0 10px -3px 0"}})}),"CREDITS"]}),A.jsxs(sl,{disabled:!0,style:{fontFamily:"Pixeloid Sans"},children:[A.jsx("span",{role:"img",children:A.jsx("img",{src:A2,style:{width:"20px",height:"20px",margin:"0 10px -3px 0"}})}),"SHUTDOWN"]})]})]}),A.jsx($n,{style:{marginRight:8,fontWeight:"bold",background:l?"#222":"#444",color:"#fff"},onClick:u,children:l?"CRT":"LCD"}),A.jsxs(Bg,{variant:"well",shadow:!0,style:{right:"auto",padding:"0.1rem",width:"140px",height:"40px",textAlign:"center",fontSize:"1rem",fontWeight:"bold",color:"#fff",backgroundColor:"#000",border:"black inset 2px",borderRadius:"0.1rem",marginTop:4,marginBottom:4,marginRight:6,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[A.jsx("div",{style:{fontSize:"0.9em"},children:J}),A.jsx("div",{style:{fontSize:"0.9em",marginTop:6},children:B})]})]})})})})]})};Cm.createRoot(document.getElementById("root")).render(A.jsx(v.StrictMode,{children:A.jsx(Tv,{children:A.jsx(Aw,{})})}));
