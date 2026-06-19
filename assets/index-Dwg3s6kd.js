(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var yd={exports:{}},Wo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t_;function mS(){if(t_)return Wo;t_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Wo.Fragment=e,Wo.jsx=i,Wo.jsxs=i,Wo}var n_;function gS(){return n_||(n_=1,yd.exports=mS()),yd.exports}var U=gS(),Sd={exports:{}},dt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_;function _S(){if(i_)return dt;i_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),g=Symbol.iterator;function E(V){return V===null||typeof V!="object"?null:(V=g&&V[g]||V["@@iterator"],typeof V=="function"?V:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,b={};function y(V,J,xe){this.props=V,this.context=J,this.refs=b,this.updater=xe||w}y.prototype.isReactComponent={},y.prototype.setState=function(V,J){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,J,"setState")},y.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function C(){}C.prototype=y.prototype;function B(V,J,xe){this.props=V,this.context=J,this.refs=b,this.updater=xe||w}var I=B.prototype=new C;I.constructor=B,P(I,y.prototype),I.isPureReactComponent=!0;var W=Array.isArray;function F(){}var k={H:null,A:null,T:null,S:null},_=Object.prototype.hasOwnProperty;function M(V,J,xe){var ve=xe.ref;return{$$typeof:r,type:V,key:J,ref:ve!==void 0?ve:null,props:xe}}function R(V,J){return M(V.type,J,V.props)}function T(V){return typeof V=="object"&&V!==null&&V.$$typeof===r}function D(V){var J={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(xe){return J[xe]})}var H=/\/+/g;function X(V,J){return typeof V=="object"&&V!==null&&V.key!=null?D(""+V.key):J.toString(36)}function j(V){switch(V.status){case"fulfilled":return V.value;case"rejected":throw V.reason;default:switch(typeof V.status=="string"?V.then(F,F):(V.status="pending",V.then(function(J){V.status==="pending"&&(V.status="fulfilled",V.value=J)},function(J){V.status==="pending"&&(V.status="rejected",V.reason=J)})),V.status){case"fulfilled":return V.value;case"rejected":throw V.reason}}throw V}function N(V,J,xe,ve,Te){var se=typeof V;(se==="undefined"||se==="boolean")&&(V=null);var Me=!1;if(V===null)Me=!0;else switch(se){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(V.$$typeof){case r:case e:Me=!0;break;case v:return Me=V._init,N(Me(V._payload),J,xe,ve,Te)}}if(Me)return Te=Te(V),Me=ve===""?"."+X(V,0):ve,W(Te)?(xe="",Me!=null&&(xe=Me.replace(H,"$&/")+"/"),N(Te,J,xe,"",function(rt){return rt})):Te!=null&&(T(Te)&&(Te=R(Te,xe+(Te.key==null||V&&V.key===Te.key?"":(""+Te.key).replace(H,"$&/")+"/")+Me)),J.push(Te)),1;Me=0;var Re=ve===""?".":ve+":";if(W(V))for(var ke=0;ke<V.length;ke++)ve=V[ke],se=Re+X(ve,ke),Me+=N(ve,J,xe,se,Te);else if(ke=E(V),typeof ke=="function")for(V=ke.call(V),ke=0;!(ve=V.next()).done;)ve=ve.value,se=Re+X(ve,ke++),Me+=N(ve,J,xe,se,Te);else if(se==="object"){if(typeof V.then=="function")return N(j(V),J,xe,ve,Te);throw J=String(V),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Me}function G(V,J,xe){if(V==null)return V;var ve=[],Te=0;return N(V,ve,"","",function(se){return J.call(xe,se,Te++)}),ve}function Y(V){if(V._status===-1){var J=V._result;J=J(),J.then(function(xe){(V._status===0||V._status===-1)&&(V._status=1,V._result=xe)},function(xe){(V._status===0||V._status===-1)&&(V._status=2,V._result=xe)}),V._status===-1&&(V._status=0,V._result=J)}if(V._status===1)return V._result.default;throw V._result}var ae=typeof reportError=="function"?reportError:function(V){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof V=="object"&&V!==null&&typeof V.message=="string"?String(V.message):String(V),error:V});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",V);return}console.error(V)},de={map:G,forEach:function(V,J,xe){G(V,function(){J.apply(this,arguments)},xe)},count:function(V){var J=0;return G(V,function(){J++}),J},toArray:function(V){return G(V,function(J){return J})||[]},only:function(V){if(!T(V))throw Error("React.Children.only expected to receive a single React element child.");return V}};return dt.Activity=S,dt.Children=de,dt.Component=y,dt.Fragment=i,dt.Profiler=l,dt.PureComponent=B,dt.StrictMode=s,dt.Suspense=m,dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,dt.__COMPILER_RUNTIME={__proto__:null,c:function(V){return k.H.useMemoCache(V)}},dt.cache=function(V){return function(){return V.apply(null,arguments)}},dt.cacheSignal=function(){return null},dt.cloneElement=function(V,J,xe){if(V==null)throw Error("The argument must be a React element, but you passed "+V+".");var ve=P({},V.props),Te=V.key;if(J!=null)for(se in J.key!==void 0&&(Te=""+J.key),J)!_.call(J,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&J.ref===void 0||(ve[se]=J[se]);var se=arguments.length-2;if(se===1)ve.children=xe;else if(1<se){for(var Me=Array(se),Re=0;Re<se;Re++)Me[Re]=arguments[Re+2];ve.children=Me}return M(V.type,Te,ve)},dt.createContext=function(V){return V={$$typeof:d,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null},V.Provider=V,V.Consumer={$$typeof:c,_context:V},V},dt.createElement=function(V,J,xe){var ve,Te={},se=null;if(J!=null)for(ve in J.key!==void 0&&(se=""+J.key),J)_.call(J,ve)&&ve!=="key"&&ve!=="__self"&&ve!=="__source"&&(Te[ve]=J[ve]);var Me=arguments.length-2;if(Me===1)Te.children=xe;else if(1<Me){for(var Re=Array(Me),ke=0;ke<Me;ke++)Re[ke]=arguments[ke+2];Te.children=Re}if(V&&V.defaultProps)for(ve in Me=V.defaultProps,Me)Te[ve]===void 0&&(Te[ve]=Me[ve]);return M(V,se,Te)},dt.createRef=function(){return{current:null}},dt.forwardRef=function(V){return{$$typeof:h,render:V}},dt.isValidElement=T,dt.lazy=function(V){return{$$typeof:v,_payload:{_status:-1,_result:V},_init:Y}},dt.memo=function(V,J){return{$$typeof:p,type:V,compare:J===void 0?null:J}},dt.startTransition=function(V){var J=k.T,xe={};k.T=xe;try{var ve=V(),Te=k.S;Te!==null&&Te(xe,ve),typeof ve=="object"&&ve!==null&&typeof ve.then=="function"&&ve.then(F,ae)}catch(se){ae(se)}finally{J!==null&&xe.types!==null&&(J.types=xe.types),k.T=J}},dt.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},dt.use=function(V){return k.H.use(V)},dt.useActionState=function(V,J,xe){return k.H.useActionState(V,J,xe)},dt.useCallback=function(V,J){return k.H.useCallback(V,J)},dt.useContext=function(V){return k.H.useContext(V)},dt.useDebugValue=function(){},dt.useDeferredValue=function(V,J){return k.H.useDeferredValue(V,J)},dt.useEffect=function(V,J){return k.H.useEffect(V,J)},dt.useEffectEvent=function(V){return k.H.useEffectEvent(V)},dt.useId=function(){return k.H.useId()},dt.useImperativeHandle=function(V,J,xe){return k.H.useImperativeHandle(V,J,xe)},dt.useInsertionEffect=function(V,J){return k.H.useInsertionEffect(V,J)},dt.useLayoutEffect=function(V,J){return k.H.useLayoutEffect(V,J)},dt.useMemo=function(V,J){return k.H.useMemo(V,J)},dt.useOptimistic=function(V,J){return k.H.useOptimistic(V,J)},dt.useReducer=function(V,J,xe){return k.H.useReducer(V,J,xe)},dt.useRef=function(V){return k.H.useRef(V)},dt.useState=function(V){return k.H.useState(V)},dt.useSyncExternalStore=function(V,J,xe){return k.H.useSyncExternalStore(V,J,xe)},dt.useTransition=function(){return k.H.useTransition()},dt.version="19.2.7",dt}var a_;function ep(){return a_||(a_=1,Sd.exports=_S()),Sd.exports}var nt=ep(),bd={exports:{}},qo={},Md={exports:{}},Ed={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s_;function xS(){return s_||(s_=1,(function(r){function e(N,G){var Y=N.length;N.push(G);e:for(;0<Y;){var ae=Y-1>>>1,de=N[ae];if(0<l(de,G))N[ae]=G,N[Y]=de,Y=ae;else break e}}function i(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var G=N[0],Y=N.pop();if(Y!==G){N[0]=Y;e:for(var ae=0,de=N.length,V=de>>>1;ae<V;){var J=2*(ae+1)-1,xe=N[J],ve=J+1,Te=N[ve];if(0>l(xe,Y))ve<de&&0>l(Te,xe)?(N[ae]=Te,N[ve]=Y,ae=ve):(N[ae]=xe,N[J]=Y,ae=J);else if(ve<de&&0>l(Te,Y))N[ae]=Te,N[ve]=Y,ae=ve;else break e}}return G}function l(N,G){var Y=N.sortIndex-G.sortIndex;return Y!==0?Y:N.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();r.unstable_now=function(){return d.now()-h}}var m=[],p=[],v=1,S=null,g=3,E=!1,w=!1,P=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function I(N){for(var G=i(p);G!==null;){if(G.callback===null)s(p);else if(G.startTime<=N)s(p),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(p)}}function W(N){if(P=!1,I(N),!w)if(i(m)!==null)w=!0,F||(F=!0,D());else{var G=i(p);G!==null&&j(W,G.startTime-N)}}var F=!1,k=-1,_=5,M=-1;function R(){return b?!0:!(r.unstable_now()-M<_)}function T(){if(b=!1,F){var N=r.unstable_now();M=N;var G=!0;try{e:{w=!1,P&&(P=!1,C(k),k=-1),E=!0;var Y=g;try{t:{for(I(N),S=i(m);S!==null&&!(S.expirationTime>N&&R());){var ae=S.callback;if(typeof ae=="function"){S.callback=null,g=S.priorityLevel;var de=ae(S.expirationTime<=N);if(N=r.unstable_now(),typeof de=="function"){S.callback=de,I(N),G=!0;break t}S===i(m)&&s(m),I(N)}else s(m);S=i(m)}if(S!==null)G=!0;else{var V=i(p);V!==null&&j(W,V.startTime-N),G=!1}}break e}finally{S=null,g=Y,E=!1}G=void 0}}finally{G?D():F=!1}}}var D;if(typeof B=="function")D=function(){B(T)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,X=H.port2;H.port1.onmessage=T,D=function(){X.postMessage(null)}}else D=function(){y(T,0)};function j(N,G){k=y(function(){N(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(N){N.callback=null},r.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<N?Math.floor(1e3/N):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(N){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var Y=g;g=G;try{return N()}finally{g=Y}},r.unstable_requestPaint=function(){b=!0},r.unstable_runWithPriority=function(N,G){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Y=g;g=N;try{return G()}finally{g=Y}},r.unstable_scheduleCallback=function(N,G,Y){var ae=r.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ae+Y:ae):Y=ae,N){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=Y+de,N={id:v++,callback:G,priorityLevel:N,startTime:Y,expirationTime:de,sortIndex:-1},Y>ae?(N.sortIndex=Y,e(p,N),i(m)===null&&N===i(p)&&(P?(C(k),k=-1):P=!0,j(W,Y-ae))):(N.sortIndex=de,e(m,N),w||E||(w=!0,F||(F=!0,D()))),N},r.unstable_shouldYield=R,r.unstable_wrapCallback=function(N){var G=g;return function(){var Y=g;g=G;try{return N.apply(this,arguments)}finally{g=Y}}}})(Ed)),Ed}var r_;function vS(){return r_||(r_=1,Md.exports=xS()),Md.exports}var Td={exports:{}},Gn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_;function yS(){if(o_)return Gn;o_=1;var r=ep();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:p,implementation:v}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Gn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Gn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,v)},Gn.flushSync=function(m){var p=d.T,v=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=v,s.d.f()}},Gn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Gn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Gn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,S=h(v,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:S,integrity:g,fetchPriority:E}):v==="script"&&s.d.X(m,{crossOrigin:S,integrity:g,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Gn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Gn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,S=h(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Gn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Gn.requestFormReset=function(m){s.d.r(m)},Gn.unstable_batchedUpdates=function(m,p){return m(p)},Gn.useFormState=function(m,p,v){return d.H.useFormState(m,p,v)},Gn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Gn.version="19.2.7",Gn}var l_;function SS(){if(l_)return Td.exports;l_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Td.exports=yS(),Td.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c_;function bS(){if(c_)return qo;c_=1;var r=vS(),e=ep(),i=SS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var x=!1,O=u.child;O;){if(O===a){x=!0,a=u,o=f;break}if(O===o){x=!0,o=u,a=f;break}O=O.sibling}if(!x){for(O=f.child;O;){if(O===a){x=!0,a=f,o=u;break}if(O===o){x=!0,o=f,a=u;break}O=O.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var S=Object.assign,g=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),B=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),M=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),T=Symbol.iterator;function D(t){return t===null||typeof t!="object"?null:(t=T&&t[T]||t["@@iterator"],typeof t=="function"?t:null)}var H=Symbol.for("react.client.reference");function X(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===H?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case P:return"Fragment";case y:return"Profiler";case b:return"StrictMode";case W:return"Suspense";case F:return"SuspenseList";case M:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case w:return"Portal";case B:return t.displayName||"Context";case C:return(t._context.displayName||"Context")+".Consumer";case I:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case k:return n=t.displayName||null,n!==null?n:X(t.type)||"Memo";case _:n=t._payload,t=t._init;try{return X(t(n))}catch{}}return null}var j=Array.isArray,N=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},ae=[],de=-1;function V(t){return{current:t}}function J(t){0>de||(t.current=ae[de],ae[de]=null,de--)}function xe(t,n){de++,ae[de]=t.current,t.current=n}var ve=V(null),Te=V(null),se=V(null),Me=V(null);function Re(t,n){switch(xe(se,n),xe(Te,t),xe(ve,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Eg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Eg(n),t=Tg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}J(ve),xe(ve,t)}function ke(){J(ve),J(Te),J(se)}function rt(t){t.memoizedState!==null&&xe(Me,t);var n=ve.current,a=Tg(n,t.type);n!==a&&(xe(Te,t),xe(ve,a))}function et(t){Te.current===t&&(J(ve),J(Te)),Me.current===t&&(J(Me),Vo._currentValue=Y)}var Bt,Ie;function $e(t){if(Bt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Bt=n&&n[1]||"",Ie=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Bt+t+Ie}var Ye=!1;function We(t,n){if(!t||Ye)return"";Ye=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var be=function(){throw Error()};if(Object.defineProperty(be.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(be,[])}catch(he){var fe=he}Reflect.construct(t,[],be)}else{try{be.call()}catch(he){fe=he}t.call(be.prototype)}}else{try{throw Error()}catch(he){fe=he}(be=t())&&typeof be.catch=="function"&&be.catch(function(){})}}catch(he){if(he&&fe&&typeof he.stack=="string")return[he.stack,fe.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),x=f[0],O=f[1];if(x&&O){var q=x.split(`
`),oe=O.split(`
`);for(u=o=0;o<q.length&&!q[o].includes("DetermineComponentFrameRoot");)o++;for(;u<oe.length&&!oe[u].includes("DetermineComponentFrameRoot");)u++;if(o===q.length||u===oe.length)for(o=q.length-1,u=oe.length-1;1<=o&&0<=u&&q[o]!==oe[u];)u--;for(;1<=o&&0<=u;o--,u--)if(q[o]!==oe[u]){if(o!==1||u!==1)do if(o--,u--,0>u||q[o]!==oe[u]){var ge=`
`+q[o].replace(" at new "," at ");return t.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",t.displayName)),ge}while(1<=o&&0<=u);break}}}finally{Ye=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?$e(a):""}function bt(t,n){switch(t.tag){case 26:case 27:case 5:return $e(t.type);case 16:return $e("Lazy");case 13:return t.child!==n&&n!==null?$e("Suspense Fallback"):$e("Suspense");case 19:return $e("SuspenseList");case 0:case 15:return We(t.type,!1);case 11:return We(t.type.render,!1);case 1:return We(t.type,!0);case 31:return $e("Activity");default:return""}}function yt(t){try{var n="",a=null;do n+=bt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var pn=Object.prototype.hasOwnProperty,Q=r.unstable_scheduleCallback,Jt=r.unstable_cancelCallback,mt=r.unstable_shouldYield,Ut=r.unstable_requestPaint,Ce=r.unstable_now,Gt=r.unstable_getCurrentPriorityLevel,z=r.unstable_ImmediatePriority,A=r.unstable_UserBlockingPriority,ie=r.unstable_NormalPriority,Se=r.unstable_LowPriority,we=r.unstable_IdlePriority,De=r.log,Pe=r.unstable_setDisableYieldValue,pe=null,me=null;function Fe(t){if(typeof De=="function"&&Pe(t),me&&typeof me.setStrictMode=="function")try{me.setStrictMode(pe,t)}catch{}}var ze=Math.clz32?Math.clz32:ut,Ue=Math.log,Le=Math.LN2;function ut(t){return t>>>=0,t===0?32:31-(Ue(t)/Le|0)|0}var ft=256,Mt=262144,Z=4194304;function Ne(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _e(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var O=o&134217727;return O!==0?(o=O&~f,o!==0?u=Ne(o):(x&=O,x!==0?u=Ne(x):a||(a=O&~t,a!==0&&(u=Ne(a))))):(O=o&~f,O!==0?u=Ne(O):x!==0?u=Ne(x):a||(a=o&~t,a!==0&&(u=Ne(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function He(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Oe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ae(){var t=Z;return Z<<=1,(Z&62914560)===0&&(Z=4194304),t}function Qe(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ct(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ln(t,n,a,o,u,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var O=t.entanglements,q=t.expirationTimes,oe=t.hiddenUpdates;for(a=x&~a;0<a;){var ge=31-ze(a),be=1<<ge;O[ge]=0,q[ge]=-1;var fe=oe[ge];if(fe!==null)for(oe[ge]=null,ge=0;ge<fe.length;ge++){var he=fe[ge];he!==null&&(he.lane&=-536870913)}a&=~be}o!==0&&Ft(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function Ft(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-ze(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function xi(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-ze(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function ai(t,n){var a=n&-n;return a=(a&42)!==0?1:xs(a),(a&(t.suspendedLanes|n))!==0?0:a}function xs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function $r(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function eo(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:Yg(t.type))}function to(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var zn=Math.random().toString(36).slice(2),mn="__reactFiber$"+zn,Ln="__reactProps$"+zn,na="__reactContainer$"+zn,Na="__reactEvents$"+zn,fl="__reactListeners$"+zn,Ys="__reactHandles$"+zn,no="__reactResources$"+zn,Da="__reactMarker$"+zn;function io(t){delete t[mn],delete t[Ln],delete t[Na],delete t[fl],delete t[Ys]}function La(t){var n=t[mn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[na]||a[mn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Lg(t);t!==null;){if(a=t[mn])return a;t=Lg(t)}return n}t=a,a=t.parentNode}return null}function Ua(t){if(t=t[mn]||t[na]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function vs(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Oa(t){var n=t[no];return n||(n=t[no]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function xn(t){t[Da]=!0}var dl=new Set,L={};function $(t,n){ue(t,n),ue(t+"Capture",n)}function ue(t,n){for(L[t]=n,t=0;t<n.length;t++)dl.add(n[t])}var le=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ce={},Ge={};function Xe(t){return pn.call(Ge,t)?!0:pn.call(ce,t)?!1:le.test(t)?Ge[t]=!0:(ce[t]=!0,!1)}function Be(t,n,a){if(Xe(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ze(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function qe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function at(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function tt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ot(t){if(!t._valueTracker){var n=gt(t)?"checked":"value";t._valueTracker=tt(t,n,""+t[n])}}function sn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=gt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function $t(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Vt=/[\n"\\]/g;function kt(t){return t.replace(Vt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function je(t,n,a,o,u,f,x,O){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+at(n)):t.value!==""+at(n)&&(t.value=""+at(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?Et(t,x,at(n)):a!=null?Et(t,x,at(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),O!=null&&typeof O!="function"&&typeof O!="symbol"&&typeof O!="boolean"?t.name=""+at(O):t.removeAttribute("name")}function Bn(t,n,a,o,u,f,x,O){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ot(t);return}a=a!=null?""+at(a):"",n=n!=null?""+at(n):a,O||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=O?t.checked:!!o,t.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),Ot(t)}function Et(t,n,a){n==="number"&&$t(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function En(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+at(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function si(t,n,a){if(n!=null&&(n=""+at(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+at(a):""}function Li(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(j(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=at(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Ot(t)}function ri(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var jt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||jt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ui(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&rn(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&rn(t,f,n[f])}function Ht(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ys(t){return Pa.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ia(){}var gu=null;function _u(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zs=null,Ks=null;function Mp(t){var n=Ua(t);if(n&&(t=n.stateNode)){var a=t[Ln]||null;e:switch(t=n.stateNode,n.type){case"input":if(je(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+kt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[Ln]||null;if(!u)throw Error(s(90));je(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&sn(o)}break e;case"textarea":si(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&En(t,!!a.multiple,n,!1)}}}var xu=!1;function Ep(t,n,a){if(xu)return t(n,a);xu=!0;try{var o=t(n);return o}finally{if(xu=!1,(Zs!==null||Ks!==null)&&($l(),Zs&&(n=Zs,t=Ks,Ks=Zs=null,Mp(n),t)))for(n=0;n<t.length;n++)Mp(t[n])}}function ao(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Ln]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vu=!1;if(aa)try{var so={};Object.defineProperty(so,"passive",{get:function(){vu=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{vu=!1}var Ia=null,yu=null,hl=null;function Tp(){if(hl)return hl;var t,n=yu,a=n.length,o,u="value"in Ia?Ia.value:Ia.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var x=a-t;for(o=1;o<=x&&n[a-o]===u[f-o];o++);return hl=u.slice(t,1<o?1-o:void 0)}function pl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ml(){return!0}function Ap(){return!1}function Zn(t){function n(a,o,u,f,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var O in t)t.hasOwnProperty(O)&&(a=t[O],this[O]=a?a(f):f[O]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ml:Ap,this.isPropagationStopped=Ap,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),n}var Ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gl=Zn(Ss),ro=S({},Ss,{view:0,detail:0}),hv=Zn(ro),Su,bu,oo,_l=S({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oo&&(oo&&t.type==="mousemove"?(Su=t.screenX-oo.screenX,bu=t.screenY-oo.screenY):bu=Su=0,oo=t),Su)},movementY:function(t){return"movementY"in t?t.movementY:bu}}),wp=Zn(_l),pv=S({},_l,{dataTransfer:0}),mv=Zn(pv),gv=S({},ro,{relatedTarget:0}),Mu=Zn(gv),_v=S({},Ss,{animationName:0,elapsedTime:0,pseudoElement:0}),xv=Zn(_v),vv=S({},Ss,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yv=Zn(vv),Sv=S({},Ss,{data:0}),Rp=Zn(Sv),bv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ev={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Ev[t])?!!n[t]:!1}function Eu(){return Tv}var Av=S({},ro,{key:function(t){if(t.key){var n=bv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Mv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eu,charCode:function(t){return t.type==="keypress"?pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wv=Zn(Av),Rv=S({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cp=Zn(Rv),Cv=S({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eu}),Nv=Zn(Cv),Dv=S({},Ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lv=Zn(Dv),Uv=S({},_l,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ov=Zn(Uv),Pv=S({},Ss,{newState:0,oldState:0}),Iv=Zn(Pv),Fv=[9,13,27,32],Tu=aa&&"CompositionEvent"in window,lo=null;aa&&"documentMode"in document&&(lo=document.documentMode);var zv=aa&&"TextEvent"in window&&!lo,Np=aa&&(!Tu||lo&&8<lo&&11>=lo),Dp=" ",Lp=!1;function Up(t,n){switch(t){case"keyup":return Fv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Op(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qs=!1;function Bv(t,n){switch(t){case"compositionend":return Op(n);case"keypress":return n.which!==32?null:(Lp=!0,Dp);case"textInput":return t=n.data,t===Dp&&Lp?null:t;default:return null}}function Gv(t,n){if(Qs)return t==="compositionend"||!Tu&&Up(t,n)?(t=Tp(),hl=yu=Ia=null,Qs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Np&&n.locale!=="ko"?null:n.data;default:return null}}var Hv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Hv[t.type]:n==="textarea"}function Ip(t,n,a,o){Zs?Ks?Ks.push(o):Ks=[o]:Zs=o,n=rc(n,"onChange"),0<n.length&&(a=new gl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var co=null,uo=null;function Vv(t){xg(t,0)}function xl(t){var n=vs(t);if(sn(n))return t}function Fp(t,n){if(t==="change")return n}var zp=!1;if(aa){var Au;if(aa){var wu="oninput"in document;if(!wu){var Bp=document.createElement("div");Bp.setAttribute("oninput","return;"),wu=typeof Bp.oninput=="function"}Au=wu}else Au=!1;zp=Au&&(!document.documentMode||9<document.documentMode)}function Gp(){co&&(co.detachEvent("onpropertychange",Hp),uo=co=null)}function Hp(t){if(t.propertyName==="value"&&xl(uo)){var n=[];Ip(n,uo,t,_u(t)),Ep(Vv,n)}}function kv(t,n,a){t==="focusin"?(Gp(),co=n,uo=a,co.attachEvent("onpropertychange",Hp)):t==="focusout"&&Gp()}function jv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xl(uo)}function Xv(t,n){if(t==="click")return xl(n)}function Wv(t,n){if(t==="input"||t==="change")return xl(n)}function qv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var oi=typeof Object.is=="function"?Object.is:qv;function fo(t,n){if(oi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!pn.call(n,u)||!oi(t[u],n[u]))return!1}return!0}function Vp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kp(t,n){var a=Vp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Vp(a)}}function jp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?jp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Xp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=$t(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=$t(t.document)}return n}function Ru(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Yv=aa&&"documentMode"in document&&11>=document.documentMode,Js=null,Cu=null,ho=null,Nu=!1;function Wp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Nu||Js==null||Js!==$t(o)||(o=Js,"selectionStart"in o&&Ru(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ho&&fo(ho,o)||(ho=o,o=rc(Cu,"onSelect"),0<o.length&&(n=new gl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Js)))}function bs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var $s={animationend:bs("Animation","AnimationEnd"),animationiteration:bs("Animation","AnimationIteration"),animationstart:bs("Animation","AnimationStart"),transitionrun:bs("Transition","TransitionRun"),transitionstart:bs("Transition","TransitionStart"),transitioncancel:bs("Transition","TransitionCancel"),transitionend:bs("Transition","TransitionEnd")},Du={},qp={};aa&&(qp=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function Ms(t){if(Du[t])return Du[t];if(!$s[t])return t;var n=$s[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in qp)return Du[t]=n[a];return t}var Yp=Ms("animationend"),Zp=Ms("animationiteration"),Kp=Ms("animationstart"),Zv=Ms("transitionrun"),Kv=Ms("transitionstart"),Qv=Ms("transitioncancel"),Qp=Ms("transitionend"),Jp=new Map,Lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lu.push("scrollEnd");function Oi(t,n){Jp.set(t,n),$(n,[t])}var vl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},vi=[],er=0,Uu=0;function yl(){for(var t=er,n=Uu=er=0;n<t;){var a=vi[n];vi[n++]=null;var o=vi[n];vi[n++]=null;var u=vi[n];vi[n++]=null;var f=vi[n];if(vi[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}f!==0&&$p(a,u,f)}}function Sl(t,n,a,o){vi[er++]=t,vi[er++]=n,vi[er++]=a,vi[er++]=o,Uu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Ou(t,n,a,o){return Sl(t,n,a,o),bl(t)}function Es(t,n){return Sl(t,null,null,n),bl(t)}function $p(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-ze(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function bl(t){if(50<Po)throw Po=0,jf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var tr={};function Jv(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(t,n,a,o){return new Jv(t,n,a,o)}function Pu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sa(t,n){var a=t.alternate;return a===null?(a=li(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function em(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Ml(t,n,a,o,u,f){var x=0;if(o=t,typeof t=="function")Pu(t)&&(x=1);else if(typeof t=="string")x=iS(t,a,ve.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case M:return t=li(31,a,n,u),t.elementType=M,t.lanes=f,t;case P:return Ts(a.children,u,f,n);case b:x=8,u|=24;break;case y:return t=li(12,a,n,u|2),t.elementType=y,t.lanes=f,t;case W:return t=li(13,a,n,u),t.elementType=W,t.lanes=f,t;case F:return t=li(19,a,n,u),t.elementType=F,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B:x=10;break e;case C:x=9;break e;case I:x=11;break e;case k:x=14;break e;case _:x=16,o=null;break e}x=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=li(x,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function Ts(t,n,a,o){return t=li(7,t,o,n),t.lanes=a,t}function Iu(t,n,a){return t=li(6,t,null,n),t.lanes=a,t}function tm(t){var n=li(18,null,null,0);return n.stateNode=t,n}function Fu(t,n,a){return n=li(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var nm=new WeakMap;function yi(t,n){if(typeof t=="object"&&t!==null){var a=nm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:yt(n)},nm.set(t,n),n)}return{value:t,source:n,stack:yt(n)}}var nr=[],ir=0,El=null,po=0,Si=[],bi=0,Fa=null,ki=1,ji="";function ra(t,n){nr[ir++]=po,nr[ir++]=El,El=t,po=n}function im(t,n,a){Si[bi++]=ki,Si[bi++]=ji,Si[bi++]=Fa,Fa=t;var o=ki;t=ji;var u=32-ze(o)-1;o&=~(1<<u),a+=1;var f=32-ze(n)+u;if(30<f){var x=u-u%5;f=(o&(1<<x)-1).toString(32),o>>=x,u-=x,ki=1<<32-ze(n)+u|a<<u|o,ji=f+t}else ki=1<<f|a<<u|o,ji=t}function zu(t){t.return!==null&&(ra(t,1),im(t,1,0))}function Bu(t){for(;t===El;)El=nr[--ir],nr[ir]=null,po=nr[--ir],nr[ir]=null;for(;t===Fa;)Fa=Si[--bi],Si[bi]=null,ji=Si[--bi],Si[bi]=null,ki=Si[--bi],Si[bi]=null}function am(t,n){Si[bi++]=ki,Si[bi++]=ji,Si[bi++]=Fa,ki=n.id,ji=n.overflow,Fa=t}var Un=null,nn=null,Nt=!1,za=null,Mi=!1,Gu=Error(s(519));function Ba(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw mo(yi(n,t)),Gu}function sm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[mn]=t,n[Ln]=o,a){case"dialog":At("cancel",n),At("close",n);break;case"iframe":case"object":case"embed":At("load",n);break;case"video":case"audio":for(a=0;a<Fo.length;a++)At(Fo[a],n);break;case"source":At("error",n);break;case"img":case"image":case"link":At("error",n),At("load",n);break;case"details":At("toggle",n);break;case"input":At("invalid",n),Bn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":At("invalid",n);break;case"textarea":At("invalid",n),Li(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||bg(n.textContent,a)?(o.popover!=null&&(At("beforetoggle",n),At("toggle",n)),o.onScroll!=null&&At("scroll",n),o.onScrollEnd!=null&&At("scrollend",n),o.onClick!=null&&(n.onclick=ia),n=!0):n=!1,n||Ba(t,!0)}function rm(t){for(Un=t.return;Un;)switch(Un.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Un=Un.return}}function ar(t){if(t!==Un)return!1;if(!Nt)return rm(t),Nt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||sd(t.type,t.memoizedProps)),a=!a),a&&nn&&Ba(t),rm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));nn=Dg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));nn=Dg(t)}else n===27?(n=nn,$a(t.type)?(t=ud,ud=null,nn=t):nn=n):nn=Un?Ti(t.stateNode.nextSibling):null;return!0}function As(){nn=Un=null,Nt=!1}function Hu(){var t=za;return t!==null&&($n===null?$n=t:$n.push.apply($n,t),za=null),t}function mo(t){za===null?za=[t]:za.push(t)}var Vu=V(null),ws=null,oa=null;function Ga(t,n,a){xe(Vu,n._currentValue),n._currentValue=a}function la(t){t._currentValue=Vu.current,J(Vu)}function ku(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function ju(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var x=u.child;f=f.firstContext;e:for(;f!==null;){var O=f;f=u;for(var q=0;q<n.length;q++)if(O.context===n[q]){f.lanes|=a,O=f.alternate,O!==null&&(O.lanes|=a),ku(f.return,a,t),o||(x=null);break e}f=O.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),ku(x,a,t),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===t){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function sr(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var O=u.type;oi(u.pendingProps.value,x.value)||(t!==null?t.push(O):t=[O])}}else if(u===Me.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Vo):t=[Vo])}u=u.return}t!==null&&ju(n,t,a,o),n.flags|=262144}function Tl(t){for(t=t.firstContext;t!==null;){if(!oi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Rs(t){ws=t,oa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function On(t){return om(ws,t)}function Al(t,n){return ws===null&&Rs(t),om(t,n)}function om(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},oa===null){if(t===null)throw Error(s(308));oa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else oa=oa.next=n;return a}var $v=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},ey=r.unstable_scheduleCallback,ty=r.unstable_NormalPriority,vn={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xu(){return{controller:new $v,data:new Map,refCount:0}}function go(t){t.refCount--,t.refCount===0&&ey(ty,function(){t.controller.abort()})}var _o=null,Wu=0,rr=0,or=null;function ny(t,n){if(_o===null){var a=_o=[];Wu=0,rr=Kf(),or={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Wu++,n.then(lm,lm),n}function lm(){if(--Wu===0&&_o!==null){or!==null&&(or.status="fulfilled");var t=_o;_o=null,rr=0,or=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function iy(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var cm=N.S;N.S=function(t,n){W0=Ce(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ny(t,n),cm!==null&&cm(t,n)};var Cs=V(null);function qu(){var t=Cs.current;return t!==null?t:en.pooledCache}function wl(t,n){n===null?xe(Cs,Cs.current):xe(Cs,n.pool)}function um(){var t=qu();return t===null?null:{parent:vn._currentValue,pool:t}}var lr=Error(s(460)),Yu=Error(s(474)),Rl=Error(s(542)),Cl={then:function(){}};function fm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function dm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ia,ia),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,pm(t),t;default:if(typeof n.status=="string")n.then(ia,ia);else{if(t=en,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,pm(t),t}throw Ds=n,lr}}function Ns(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ds=a,lr):a}}var Ds=null;function hm(){if(Ds===null)throw Error(s(459));var t=Ds;return Ds=null,t}function pm(t){if(t===lr||t===Rl)throw Error(s(483))}var cr=null,xo=0;function Nl(t){var n=xo;return xo+=1,cr===null&&(cr=[]),dm(cr,t,n)}function vo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Dl(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function mm(t){function n(ee,K){if(t){var re=ee.deletions;re===null?(ee.deletions=[K],ee.flags|=16):re.push(K)}}function a(ee,K){if(!t)return null;for(;K!==null;)n(ee,K),K=K.sibling;return null}function o(ee){for(var K=new Map;ee!==null;)ee.key!==null?K.set(ee.key,ee):K.set(ee.index,ee),ee=ee.sibling;return K}function u(ee,K){return ee=sa(ee,K),ee.index=0,ee.sibling=null,ee}function f(ee,K,re){return ee.index=re,t?(re=ee.alternate,re!==null?(re=re.index,re<K?(ee.flags|=67108866,K):re):(ee.flags|=67108866,K)):(ee.flags|=1048576,K)}function x(ee){return t&&ee.alternate===null&&(ee.flags|=67108866),ee}function O(ee,K,re,ye){return K===null||K.tag!==6?(K=Iu(re,ee.mode,ye),K.return=ee,K):(K=u(K,re),K.return=ee,K)}function q(ee,K,re,ye){var st=re.type;return st===P?ge(ee,K,re.props.children,ye,re.key):K!==null&&(K.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===_&&Ns(st)===K.type)?(K=u(K,re.props),vo(K,re),K.return=ee,K):(K=Ml(re.type,re.key,re.props,null,ee.mode,ye),vo(K,re),K.return=ee,K)}function oe(ee,K,re,ye){return K===null||K.tag!==4||K.stateNode.containerInfo!==re.containerInfo||K.stateNode.implementation!==re.implementation?(K=Fu(re,ee.mode,ye),K.return=ee,K):(K=u(K,re.children||[]),K.return=ee,K)}function ge(ee,K,re,ye,st){return K===null||K.tag!==7?(K=Ts(re,ee.mode,ye,st),K.return=ee,K):(K=u(K,re),K.return=ee,K)}function be(ee,K,re){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return K=Iu(""+K,ee.mode,re),K.return=ee,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case E:return re=Ml(K.type,K.key,K.props,null,ee.mode,re),vo(re,K),re.return=ee,re;case w:return K=Fu(K,ee.mode,re),K.return=ee,K;case _:return K=Ns(K),be(ee,K,re)}if(j(K)||D(K))return K=Ts(K,ee.mode,re,null),K.return=ee,K;if(typeof K.then=="function")return be(ee,Nl(K),re);if(K.$$typeof===B)return be(ee,Al(ee,K),re);Dl(ee,K)}return null}function fe(ee,K,re,ye){var st=K!==null?K.key:null;if(typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint")return st!==null?null:O(ee,K,""+re,ye);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case E:return re.key===st?q(ee,K,re,ye):null;case w:return re.key===st?oe(ee,K,re,ye):null;case _:return re=Ns(re),fe(ee,K,re,ye)}if(j(re)||D(re))return st!==null?null:ge(ee,K,re,ye,null);if(typeof re.then=="function")return fe(ee,K,Nl(re),ye);if(re.$$typeof===B)return fe(ee,K,Al(ee,re),ye);Dl(ee,re)}return null}function he(ee,K,re,ye,st){if(typeof ye=="string"&&ye!==""||typeof ye=="number"||typeof ye=="bigint")return ee=ee.get(re)||null,O(K,ee,""+ye,st);if(typeof ye=="object"&&ye!==null){switch(ye.$$typeof){case E:return ee=ee.get(ye.key===null?re:ye.key)||null,q(K,ee,ye,st);case w:return ee=ee.get(ye.key===null?re:ye.key)||null,oe(K,ee,ye,st);case _:return ye=Ns(ye),he(ee,K,re,ye,st)}if(j(ye)||D(ye))return ee=ee.get(re)||null,ge(K,ee,ye,st,null);if(typeof ye.then=="function")return he(ee,K,re,Nl(ye),st);if(ye.$$typeof===B)return he(ee,K,re,Al(K,ye),st);Dl(K,ye)}return null}function Ke(ee,K,re,ye){for(var st=null,Pt=null,Je=K,xt=K=0,Ct=null;Je!==null&&xt<re.length;xt++){Je.index>xt?(Ct=Je,Je=null):Ct=Je.sibling;var It=fe(ee,Je,re[xt],ye);if(It===null){Je===null&&(Je=Ct);break}t&&Je&&It.alternate===null&&n(ee,Je),K=f(It,K,xt),Pt===null?st=It:Pt.sibling=It,Pt=It,Je=Ct}if(xt===re.length)return a(ee,Je),Nt&&ra(ee,xt),st;if(Je===null){for(;xt<re.length;xt++)Je=be(ee,re[xt],ye),Je!==null&&(K=f(Je,K,xt),Pt===null?st=Je:Pt.sibling=Je,Pt=Je);return Nt&&ra(ee,xt),st}for(Je=o(Je);xt<re.length;xt++)Ct=he(Je,ee,xt,re[xt],ye),Ct!==null&&(t&&Ct.alternate!==null&&Je.delete(Ct.key===null?xt:Ct.key),K=f(Ct,K,xt),Pt===null?st=Ct:Pt.sibling=Ct,Pt=Ct);return t&&Je.forEach(function(as){return n(ee,as)}),Nt&&ra(ee,xt),st}function ot(ee,K,re,ye){if(re==null)throw Error(s(151));for(var st=null,Pt=null,Je=K,xt=K=0,Ct=null,It=re.next();Je!==null&&!It.done;xt++,It=re.next()){Je.index>xt?(Ct=Je,Je=null):Ct=Je.sibling;var as=fe(ee,Je,It.value,ye);if(as===null){Je===null&&(Je=Ct);break}t&&Je&&as.alternate===null&&n(ee,Je),K=f(as,K,xt),Pt===null?st=as:Pt.sibling=as,Pt=as,Je=Ct}if(It.done)return a(ee,Je),Nt&&ra(ee,xt),st;if(Je===null){for(;!It.done;xt++,It=re.next())It=be(ee,It.value,ye),It!==null&&(K=f(It,K,xt),Pt===null?st=It:Pt.sibling=It,Pt=It);return Nt&&ra(ee,xt),st}for(Je=o(Je);!It.done;xt++,It=re.next())It=he(Je,ee,xt,It.value,ye),It!==null&&(t&&It.alternate!==null&&Je.delete(It.key===null?xt:It.key),K=f(It,K,xt),Pt===null?st=It:Pt.sibling=It,Pt=It);return t&&Je.forEach(function(pS){return n(ee,pS)}),Nt&&ra(ee,xt),st}function Kt(ee,K,re,ye){if(typeof re=="object"&&re!==null&&re.type===P&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case E:e:{for(var st=re.key;K!==null;){if(K.key===st){if(st=re.type,st===P){if(K.tag===7){a(ee,K.sibling),ye=u(K,re.props.children),ye.return=ee,ee=ye;break e}}else if(K.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===_&&Ns(st)===K.type){a(ee,K.sibling),ye=u(K,re.props),vo(ye,re),ye.return=ee,ee=ye;break e}a(ee,K);break}else n(ee,K);K=K.sibling}re.type===P?(ye=Ts(re.props.children,ee.mode,ye,re.key),ye.return=ee,ee=ye):(ye=Ml(re.type,re.key,re.props,null,ee.mode,ye),vo(ye,re),ye.return=ee,ee=ye)}return x(ee);case w:e:{for(st=re.key;K!==null;){if(K.key===st)if(K.tag===4&&K.stateNode.containerInfo===re.containerInfo&&K.stateNode.implementation===re.implementation){a(ee,K.sibling),ye=u(K,re.children||[]),ye.return=ee,ee=ye;break e}else{a(ee,K);break}else n(ee,K);K=K.sibling}ye=Fu(re,ee.mode,ye),ye.return=ee,ee=ye}return x(ee);case _:return re=Ns(re),Kt(ee,K,re,ye)}if(j(re))return Ke(ee,K,re,ye);if(D(re)){if(st=D(re),typeof st!="function")throw Error(s(150));return re=st.call(re),ot(ee,K,re,ye)}if(typeof re.then=="function")return Kt(ee,K,Nl(re),ye);if(re.$$typeof===B)return Kt(ee,K,Al(ee,re),ye);Dl(ee,re)}return typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint"?(re=""+re,K!==null&&K.tag===6?(a(ee,K.sibling),ye=u(K,re),ye.return=ee,ee=ye):(a(ee,K),ye=Iu(re,ee.mode,ye),ye.return=ee,ee=ye),x(ee)):a(ee,K)}return function(ee,K,re,ye){try{xo=0;var st=Kt(ee,K,re,ye);return cr=null,st}catch(Je){if(Je===lr||Je===Rl)throw Je;var Pt=li(29,Je,null,ee.mode);return Pt.lanes=ye,Pt.return=ee,Pt}finally{}}}var Ls=mm(!0),gm=mm(!1),Ha=!1;function Zu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ku(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ka(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(zt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=bl(t),$p(t,null,a),n}return Sl(t,o,n,a),bl(t)}function yo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,xi(t,a)}}function Qu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Ju=!1;function So(){if(Ju){var t=or;if(t!==null)throw t}}function bo(t,n,a,o){Ju=!1;var u=t.updateQueue;Ha=!1;var f=u.firstBaseUpdate,x=u.lastBaseUpdate,O=u.shared.pending;if(O!==null){u.shared.pending=null;var q=O,oe=q.next;q.next=null,x===null?f=oe:x.next=oe,x=q;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,O=ge.lastBaseUpdate,O!==x&&(O===null?ge.firstBaseUpdate=oe:O.next=oe,ge.lastBaseUpdate=q))}if(f!==null){var be=u.baseState;x=0,ge=oe=q=null,O=f;do{var fe=O.lane&-536870913,he=fe!==O.lane;if(he?(Rt&fe)===fe:(o&fe)===fe){fe!==0&&fe===rr&&(Ju=!0),ge!==null&&(ge=ge.next={lane:0,tag:O.tag,payload:O.payload,callback:null,next:null});e:{var Ke=t,ot=O;fe=n;var Kt=a;switch(ot.tag){case 1:if(Ke=ot.payload,typeof Ke=="function"){be=Ke.call(Kt,be,fe);break e}be=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=ot.payload,fe=typeof Ke=="function"?Ke.call(Kt,be,fe):Ke,fe==null)break e;be=S({},be,fe);break e;case 2:Ha=!0}}fe=O.callback,fe!==null&&(t.flags|=64,he&&(t.flags|=8192),he=u.callbacks,he===null?u.callbacks=[fe]:he.push(fe))}else he={lane:fe,tag:O.tag,payload:O.payload,callback:O.callback,next:null},ge===null?(oe=ge=he,q=be):ge=ge.next=he,x|=fe;if(O=O.next,O===null){if(O=u.shared.pending,O===null)break;he=O,O=he.next,he.next=null,u.lastBaseUpdate=he,u.shared.pending=null}}while(!0);ge===null&&(q=be),u.baseState=q,u.firstBaseUpdate=oe,u.lastBaseUpdate=ge,f===null&&(u.shared.lanes=0),Ya|=x,t.lanes=x,t.memoizedState=be}}function _m(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function xm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)_m(a[t],n)}var ur=V(null),Ll=V(0);function vm(t,n){t=_a,xe(Ll,t),xe(ur,n),_a=t|n.baseLanes}function $u(){xe(Ll,_a),xe(ur,ur.current)}function ef(){_a=Ll.current,J(ur),J(Ll)}var ci=V(null),Ei=null;function ja(t){var n=t.alternate;xe(gn,gn.current&1),xe(ci,t),Ei===null&&(n===null||ur.current!==null||n.memoizedState!==null)&&(Ei=t)}function tf(t){xe(gn,gn.current),xe(ci,t),Ei===null&&(Ei=t)}function ym(t){t.tag===22?(xe(gn,gn.current),xe(ci,t),Ei===null&&(Ei=t)):Xa()}function Xa(){xe(gn,gn.current),xe(ci,ci.current)}function ui(t){J(ci),Ei===t&&(Ei=null),J(gn)}var gn=V(0);function Ul(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ld(a)||cd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ca=0,_t=null,Yt=null,yn=null,Ol=!1,fr=!1,Us=!1,Pl=0,Mo=0,dr=null,ay=0;function un(){throw Error(s(321))}function nf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!oi(t[a],n[a]))return!1;return!0}function af(t,n,a,o,u,f){return ca=f,_t=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=t===null||t.memoizedState===null?i0:vf,Us=!1,f=a(o,u),Us=!1,fr&&(f=bm(n,a,o,u)),Sm(t),f}function Sm(t){N.H=Ao;var n=Yt!==null&&Yt.next!==null;if(ca=0,yn=Yt=_t=null,Ol=!1,Mo=0,dr=null,n)throw Error(s(300));t===null||Sn||(t=t.dependencies,t!==null&&Tl(t)&&(Sn=!0))}function bm(t,n,a,o){_t=t;var u=0;do{if(fr&&(dr=null),Mo=0,fr=!1,25<=u)throw Error(s(301));if(u+=1,yn=Yt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=a0,f=n(a,o)}while(fr);return f}function sy(){var t=N.H,n=t.useState()[0];return n=typeof n.then=="function"?Eo(n):n,t=t.useState()[0],(Yt!==null?Yt.memoizedState:null)!==t&&(_t.flags|=1024),n}function sf(){var t=Pl!==0;return Pl=0,t}function rf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function of(t){if(Ol){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ol=!1}ca=0,yn=Yt=_t=null,fr=!1,Mo=Pl=0,dr=null}function jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?_t.memoizedState=yn=t:yn=yn.next=t,yn}function _n(){if(Yt===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var n=yn===null?_t.memoizedState:yn.next;if(n!==null)yn=n,Yt=t;else{if(t===null)throw _t.alternate===null?Error(s(467)):Error(s(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},yn===null?_t.memoizedState=yn=t:yn=yn.next=t}return yn}function Il(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Eo(t){var n=Mo;return Mo+=1,dr===null&&(dr=[]),t=dm(dr,t,n),n=_t,(yn===null?n.memoizedState:yn.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?i0:vf),t}function Fl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Eo(t);if(t.$$typeof===B)return On(t)}throw Error(s(438,String(t)))}function lf(t){var n=null,a=_t.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=_t.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Il(),_t.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=R;return n.index++,a}function ua(t,n){return typeof n=="function"?n(t):n}function zl(t){var n=_n();return cf(n,Yt,t)}function cf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var x=u.next;u.next=f.next,f.next=x}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var O=x=null,q=null,oe=n,ge=!1;do{var be=oe.lane&-536870913;if(be!==oe.lane?(Rt&be)===be:(ca&be)===be){var fe=oe.revertLane;if(fe===0)q!==null&&(q=q.next={lane:0,revertLane:0,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),be===rr&&(ge=!0);else if((ca&fe)===fe){oe=oe.next,fe===rr&&(ge=!0);continue}else be={lane:0,revertLane:oe.revertLane,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},q===null?(O=q=be,x=f):q=q.next=be,_t.lanes|=fe,Ya|=fe;be=oe.action,Us&&a(f,be),f=oe.hasEagerState?oe.eagerState:a(f,be)}else fe={lane:be,revertLane:oe.revertLane,gesture:oe.gesture,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},q===null?(O=q=fe,x=f):q=q.next=fe,_t.lanes|=be,Ya|=be;oe=oe.next}while(oe!==null&&oe!==n);if(q===null?x=f:q.next=O,!oi(f,t.memoizedState)&&(Sn=!0,ge&&(a=or,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=q,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function uf(t){var n=_n(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do f=t(f,x.action),x=x.next;while(x!==u);oi(f,n.memoizedState)||(Sn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Mm(t,n,a){var o=_t,u=_n(),f=Nt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!oi((Yt||u).memoizedState,a);if(x&&(u.memoizedState=a,Sn=!0),u=u.queue,hf(Am.bind(null,o,u,t),[t]),u.getSnapshot!==n||x||yn!==null&&yn.memoizedState.tag&1){if(o.flags|=2048,hr(9,{destroy:void 0},Tm.bind(null,o,u,a,n),null),en===null)throw Error(s(349));f||(ca&127)!==0||Em(o,n,a)}return a}function Em(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=_t.updateQueue,n===null?(n=Il(),_t.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Tm(t,n,a,o){n.value=a,n.getSnapshot=o,wm(n)&&Rm(t)}function Am(t,n,a){return a(function(){wm(n)&&Rm(t)})}function wm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!oi(t,a)}catch{return!0}}function Rm(t){var n=Es(t,2);n!==null&&ei(n,t,2)}function ff(t){var n=jn();if(typeof t=="function"){var a=t;if(t=a(),Us){Fe(!0);try{a()}finally{Fe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:t},n}function Cm(t,n,a,o){return t.baseState=a,cf(t,Yt,typeof o=="function"?o:ua)}function ry(t,n,a,o,u){if(Hl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};N.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Nm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Nm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=N.T,x={};N.T=x;try{var O=a(u,o),q=N.S;q!==null&&q(x,O),Dm(t,n,O)}catch(oe){df(t,n,oe)}finally{f!==null&&x.types!==null&&(f.types=x.types),N.T=f}}else try{f=a(u,o),Dm(t,n,f)}catch(oe){df(t,n,oe)}}function Dm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Lm(t,n,o)},function(o){return df(t,n,o)}):Lm(t,n,a)}function Lm(t,n,a){n.status="fulfilled",n.value=a,Um(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Nm(t,a)))}function df(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Um(n),n=n.next;while(n!==o)}t.action=null}function Um(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Om(t,n){return n}function Pm(t,n){if(Nt){var a=en.formState;if(a!==null){e:{var o=_t;if(Nt){if(nn){t:{for(var u=nn,f=Mi;u.nodeType!==8;){if(!f){u=null;break t}if(u=Ti(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){nn=Ti(u.nextSibling),o=u.data==="F!";break e}}Ba(o)}o=!1}o&&(n=a[0])}}return a=jn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Om,lastRenderedState:n},a.queue=o,a=e0.bind(null,_t,o),o.dispatch=a,o=ff(!1),f=xf.bind(null,_t,!1,o.queue),o=jn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=ry.bind(null,_t,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Im(t){var n=_n();return Fm(n,Yt,t)}function Fm(t,n,a){if(n=cf(t,n,Om)[0],t=zl(ua)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Eo(n)}catch(x){throw x===lr?Rl:x}else o=n;n=_n();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(_t.flags|=2048,hr(9,{destroy:void 0},oy.bind(null,u,a),null)),[o,f,t]}function oy(t,n){t.action=n}function zm(t){var n=_n(),a=Yt;if(a!==null)return Fm(n,a,t);_n(),n=n.memoizedState,a=_n();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function hr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=_t.updateQueue,n===null&&(n=Il(),_t.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Bm(){return _n().memoizedState}function Bl(t,n,a,o){var u=jn();_t.flags|=t,u.memoizedState=hr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Gl(t,n,a,o){var u=_n();o=o===void 0?null:o;var f=u.memoizedState.inst;Yt!==null&&o!==null&&nf(o,Yt.memoizedState.deps)?u.memoizedState=hr(n,f,a,o):(_t.flags|=t,u.memoizedState=hr(1|n,f,a,o))}function Gm(t,n){Bl(8390656,8,t,n)}function hf(t,n){Gl(2048,8,t,n)}function ly(t){_t.flags|=4;var n=_t.updateQueue;if(n===null)n=Il(),_t.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Hm(t){var n=_n().memoizedState;return ly({ref:n,nextImpl:t}),function(){if((zt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Vm(t,n){return Gl(4,2,t,n)}function km(t,n){return Gl(4,4,t,n)}function jm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Xm(t,n,a){a=a!=null?a.concat([t]):null,Gl(4,4,jm.bind(null,n,t),a)}function pf(){}function Wm(t,n){var a=_n();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&nf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function qm(t,n){var a=_n();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&nf(n,o[1]))return o[0];if(o=t(),Us){Fe(!0);try{t()}finally{Fe(!1)}}return a.memoizedState=[o,n],o}function mf(t,n,a){return a===void 0||(ca&1073741824)!==0&&(Rt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Y0(),_t.lanes|=t,Ya|=t,a)}function Ym(t,n,a,o){return oi(a,n)?a:ur.current!==null?(t=mf(t,a,o),oi(t,n)||(Sn=!0),t):(ca&42)===0||(ca&1073741824)!==0&&(Rt&261930)===0?(Sn=!0,t.memoizedState=a):(t=Y0(),_t.lanes|=t,Ya|=t,n)}function Zm(t,n,a,o,u){var f=G.p;G.p=f!==0&&8>f?f:8;var x=N.T,O={};N.T=O,xf(t,!1,n,a);try{var q=u(),oe=N.S;if(oe!==null&&oe(O,q),q!==null&&typeof q=="object"&&typeof q.then=="function"){var ge=iy(q,o);To(t,n,ge,hi(t))}else To(t,n,o,hi(t))}catch(be){To(t,n,{then:function(){},status:"rejected",reason:be},hi())}finally{G.p=f,x!==null&&O.types!==null&&(x.types=O.types),N.T=x}}function cy(){}function gf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=Km(t).queue;Zm(t,u,n,Y,a===null?cy:function(){return Qm(t),a(o)})}function Km(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Qm(t){var n=Km(t);n.next===null&&(n=t.alternate.memoizedState),To(t,n.next.queue,{},hi())}function _f(){return On(Vo)}function Jm(){return _n().memoizedState}function $m(){return _n().memoizedState}function uy(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=hi();t=Va(a);var o=ka(n,t,a);o!==null&&(ei(o,n,a),yo(o,n,a)),n={cache:Xu()},t.payload=n;return}n=n.return}}function fy(t,n,a){var o=hi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Hl(t)?t0(n,a):(a=Ou(t,n,a,o),a!==null&&(ei(a,t,o),n0(a,n,o)))}function e0(t,n,a){var o=hi();To(t,n,a,o)}function To(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Hl(t))t0(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,O=f(x,a);if(u.hasEagerState=!0,u.eagerState=O,oi(O,x))return Sl(t,n,u,0),en===null&&yl(),!1}catch{}finally{}if(a=Ou(t,n,u,o),a!==null)return ei(a,t,o),n0(a,n,o),!0}return!1}function xf(t,n,a,o){if(o={lane:2,revertLane:Kf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Hl(t)){if(n)throw Error(s(479))}else n=Ou(t,a,o,2),n!==null&&ei(n,t,2)}function Hl(t){var n=t.alternate;return t===_t||n!==null&&n===_t}function t0(t,n){fr=Ol=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function n0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,xi(t,a)}}var Ao={readContext:On,use:Fl,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useLayoutEffect:un,useInsertionEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useSyncExternalStore:un,useId:un,useHostTransitionStatus:un,useFormState:un,useActionState:un,useOptimistic:un,useMemoCache:un,useCacheRefresh:un};Ao.useEffectEvent=un;var i0={readContext:On,use:Fl,useCallback:function(t,n){return jn().memoizedState=[t,n===void 0?null:n],t},useContext:On,useEffect:Gm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Bl(4194308,4,jm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Bl(4194308,4,t,n)},useInsertionEffect:function(t,n){Bl(4,2,t,n)},useMemo:function(t,n){var a=jn();n=n===void 0?null:n;var o=t();if(Us){Fe(!0);try{t()}finally{Fe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=jn();if(a!==void 0){var u=a(n);if(Us){Fe(!0);try{a(n)}finally{Fe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=fy.bind(null,_t,t),[o.memoizedState,t]},useRef:function(t){var n=jn();return t={current:t},n.memoizedState=t},useState:function(t){t=ff(t);var n=t.queue,a=e0.bind(null,_t,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:pf,useDeferredValue:function(t,n){var a=jn();return mf(a,t,n)},useTransition:function(){var t=ff(!1);return t=Zm.bind(null,_t,t.queue,!0,!1),jn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=_t,u=jn();if(Nt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),en===null)throw Error(s(349));(Rt&127)!==0||Em(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Gm(Am.bind(null,o,f,t),[t]),o.flags|=2048,hr(9,{destroy:void 0},Tm.bind(null,o,f,a,n),null),a},useId:function(){var t=jn(),n=en.identifierPrefix;if(Nt){var a=ji,o=ki;a=(o&~(1<<32-ze(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Pl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=ay++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:_f,useFormState:Pm,useActionState:Pm,useOptimistic:function(t){var n=jn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=xf.bind(null,_t,!0,a),a.dispatch=n,[t,n]},useMemoCache:lf,useCacheRefresh:function(){return jn().memoizedState=uy.bind(null,_t)},useEffectEvent:function(t){var n=jn(),a={impl:t};return n.memoizedState=a,function(){if((zt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},vf={readContext:On,use:Fl,useCallback:Wm,useContext:On,useEffect:hf,useImperativeHandle:Xm,useInsertionEffect:Vm,useLayoutEffect:km,useMemo:qm,useReducer:zl,useRef:Bm,useState:function(){return zl(ua)},useDebugValue:pf,useDeferredValue:function(t,n){var a=_n();return Ym(a,Yt.memoizedState,t,n)},useTransition:function(){var t=zl(ua)[0],n=_n().memoizedState;return[typeof t=="boolean"?t:Eo(t),n]},useSyncExternalStore:Mm,useId:Jm,useHostTransitionStatus:_f,useFormState:Im,useActionState:Im,useOptimistic:function(t,n){var a=_n();return Cm(a,Yt,t,n)},useMemoCache:lf,useCacheRefresh:$m};vf.useEffectEvent=Hm;var a0={readContext:On,use:Fl,useCallback:Wm,useContext:On,useEffect:hf,useImperativeHandle:Xm,useInsertionEffect:Vm,useLayoutEffect:km,useMemo:qm,useReducer:uf,useRef:Bm,useState:function(){return uf(ua)},useDebugValue:pf,useDeferredValue:function(t,n){var a=_n();return Yt===null?mf(a,t,n):Ym(a,Yt.memoizedState,t,n)},useTransition:function(){var t=uf(ua)[0],n=_n().memoizedState;return[typeof t=="boolean"?t:Eo(t),n]},useSyncExternalStore:Mm,useId:Jm,useHostTransitionStatus:_f,useFormState:zm,useActionState:zm,useOptimistic:function(t,n){var a=_n();return Yt!==null?Cm(a,Yt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:lf,useCacheRefresh:$m};a0.useEffectEvent=Hm;function yf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:S({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Sf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=hi(),u=Va(o);u.payload=n,a!=null&&(u.callback=a),n=ka(t,u,o),n!==null&&(ei(n,t,o),yo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=hi(),u=Va(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ka(t,u,o),n!==null&&(ei(n,t,o),yo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=hi(),o=Va(a);o.tag=2,n!=null&&(o.callback=n),n=ka(t,o,a),n!==null&&(ei(n,t,a),yo(n,t,a))}};function s0(t,n,a,o,u,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,x):n.prototype&&n.prototype.isPureReactComponent?!fo(a,o)||!fo(u,f):!0}function r0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Sf.enqueueReplaceState(n,n.state,null)}function Os(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=S({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function o0(t){vl(t)}function l0(t){console.error(t)}function c0(t){vl(t)}function Vl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function u0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function bf(t,n,a){return a=Va(a),a.tag=3,a.payload={element:null},a.callback=function(){Vl(t,n)},a}function f0(t){return t=Va(t),t.tag=3,t}function d0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){u0(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){u0(n,a,o),typeof u!="function"&&(Za===null?Za=new Set([this]):Za.add(this));var O=o.stack;this.componentDidCatch(o.value,{componentStack:O!==null?O:""})})}function dy(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&sr(n,a,u,!0),a=ci.current,a!==null){switch(a.tag){case 31:case 13:return Ei===null?ec():a.alternate===null&&fn===0&&(fn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Cl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),qf(t,o,u)),!1;case 22:return a.flags|=65536,o===Cl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),qf(t,o,u)),!1}throw Error(s(435,a.tag))}return qf(t,o,u),ec(),!1}if(Nt)return n=ci.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Gu&&(t=Error(s(422),{cause:o}),mo(yi(t,a)))):(o!==Gu&&(n=Error(s(423),{cause:o}),mo(yi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=yi(o,a),u=bf(t.stateNode,o,u),Qu(t,u),fn!==4&&(fn=2)),!1;var f=Error(s(520),{cause:o});if(f=yi(f,a),Oo===null?Oo=[f]:Oo.push(f),fn!==4&&(fn=2),n===null)return!0;o=yi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=bf(a.stateNode,o,t),Qu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Za===null||!Za.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=f0(u),d0(u,t,a,o),Qu(a,u),!1}a=a.return}while(a!==null);return!1}var Mf=Error(s(461)),Sn=!1;function Pn(t,n,a,o){n.child=t===null?gm(n,null,a,o):Ls(n,t.child,a,o)}function h0(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var x={};for(var O in o)O!=="ref"&&(x[O]=o[O])}else x=o;return Rs(n),o=af(t,n,a,x,f,u),O=sf(),t!==null&&!Sn?(rf(t,n,u),fa(t,n,u)):(Nt&&O&&zu(n),n.flags|=1,Pn(t,n,o,u),n.child)}function p0(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!Pu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,m0(t,n,f,o,u)):(t=Ml(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Df(t,u)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:fo,a(x,o)&&t.ref===n.ref)return fa(t,n,u)}return n.flags|=1,t=sa(f,o),t.ref=n.ref,t.return=n,n.child=t}function m0(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(fo(f,o)&&t.ref===n.ref)if(Sn=!1,n.pendingProps=o=f,Df(t,u))(t.flags&131072)!==0&&(Sn=!0);else return n.lanes=t.lanes,fa(t,n,u)}return Ef(t,n,a,o,u)}function g0(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return _0(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&wl(n,f!==null?f.cachePool:null),f!==null?vm(n,f):$u(),ym(n);else return o=n.lanes=536870912,_0(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(wl(n,f.cachePool),vm(n,f),Xa(),n.memoizedState=null):(t!==null&&wl(n,null),$u(),Xa());return Pn(t,n,u,a),n.child}function wo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function _0(t,n,a,o,u){var f=qu();return f=f===null?null:{parent:vn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&wl(n,null),$u(),ym(n),t!==null&&sr(t,n,o,!0),n.childLanes=u,null}function kl(t,n){return n=Xl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function x0(t,n,a){return Ls(n,t.child,null,a),t=kl(n,n.pendingProps),t.flags|=2,ui(n),n.memoizedState=null,t}function hy(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Nt){if(o.mode==="hidden")return t=kl(n,o),n.lanes=536870912,wo(null,t);if(tf(n),(t=nn)?(t=Ng(t,Mi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Fa!==null?{id:ki,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},a=tm(t),a.return=n,n.child=a,Un=n,nn=null)):t=null,t===null)throw Ba(n);return n.lanes=536870912,null}return kl(n,o)}var f=t.memoizedState;if(f!==null){var x=f.dehydrated;if(tf(n),u)if(n.flags&256)n.flags&=-257,n=x0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(Sn||sr(t,n,a,!1),u=(a&t.childLanes)!==0,Sn||u){if(o=en,o!==null&&(x=ai(o,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,Es(t,x),ei(o,t,x),Mf;ec(),n=x0(t,n,a)}else t=f.treeContext,nn=Ti(x.nextSibling),Un=n,Nt=!0,za=null,Mi=!1,t!==null&&am(n,t),n=kl(n,o),n.flags|=4096;return n}return t=sa(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function jl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Ef(t,n,a,o,u){return Rs(n),a=af(t,n,a,o,void 0,u),o=sf(),t!==null&&!Sn?(rf(t,n,u),fa(t,n,u)):(Nt&&o&&zu(n),n.flags|=1,Pn(t,n,a,u),n.child)}function v0(t,n,a,o,u,f){return Rs(n),n.updateQueue=null,a=bm(n,o,a,u),Sm(t),o=sf(),t!==null&&!Sn?(rf(t,n,f),fa(t,n,f)):(Nt&&o&&zu(n),n.flags|=1,Pn(t,n,a,f),n.child)}function y0(t,n,a,o,u){if(Rs(n),n.stateNode===null){var f=tr,x=a.contextType;typeof x=="object"&&x!==null&&(f=On(x)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Sf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Zu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?On(x):tr,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(yf(n,a,x,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Sf.enqueueReplaceState(f,f.state,null),bo(n,o,f,u),So(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var O=n.memoizedProps,q=Os(a,O);f.props=q;var oe=f.context,ge=a.contextType;x=tr,typeof ge=="object"&&ge!==null&&(x=On(ge));var be=a.getDerivedStateFromProps;ge=typeof be=="function"||typeof f.getSnapshotBeforeUpdate=="function",O=n.pendingProps!==O,ge||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(O||oe!==x)&&r0(n,f,o,x),Ha=!1;var fe=n.memoizedState;f.state=fe,bo(n,o,f,u),So(),oe=n.memoizedState,O||fe!==oe||Ha?(typeof be=="function"&&(yf(n,a,be,o),oe=n.memoizedState),(q=Ha||s0(n,a,q,o,fe,oe,x))?(ge||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=oe),f.props=o,f.state=oe,f.context=x,o=q):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Ku(t,n),x=n.memoizedProps,ge=Os(a,x),f.props=ge,be=n.pendingProps,fe=f.context,oe=a.contextType,q=tr,typeof oe=="object"&&oe!==null&&(q=On(oe)),O=a.getDerivedStateFromProps,(oe=typeof O=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==be||fe!==q)&&r0(n,f,o,q),Ha=!1,fe=n.memoizedState,f.state=fe,bo(n,o,f,u),So();var he=n.memoizedState;x!==be||fe!==he||Ha||t!==null&&t.dependencies!==null&&Tl(t.dependencies)?(typeof O=="function"&&(yf(n,a,O,o),he=n.memoizedState),(ge=Ha||s0(n,a,ge,o,fe,he,q)||t!==null&&t.dependencies!==null&&Tl(t.dependencies))?(oe||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,he,q),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,he,q)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&fe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&fe===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=he),f.props=o,f.state=he,f.context=q,o=ge):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&fe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&fe===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,jl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Ls(n,t.child,null,u),n.child=Ls(n,null,a,u)):Pn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=fa(t,n,u),t}function S0(t,n,a,o){return As(),n.flags|=256,Pn(t,n,a,o),n.child}var Tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Af(t){return{baseLanes:t,cachePool:um()}}function wf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=di),t}function b0(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(gn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(Nt){if(u?ja(n):Xa(),(t=nn)?(t=Ng(t,Mi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Fa!==null?{id:ki,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},a=tm(t),a.return=n,n.child=a,Un=n,nn=null)):t=null,t===null)throw Ba(n);return cd(t)?n.lanes=32:n.lanes=536870912,null}var O=o.children;return o=o.fallback,u?(Xa(),u=n.mode,O=Xl({mode:"hidden",children:O},u),o=Ts(o,u,a,null),O.return=n,o.return=n,O.sibling=o,n.child=O,o=n.child,o.memoizedState=Af(a),o.childLanes=wf(t,x,a),n.memoizedState=Tf,wo(null,o)):(ja(n),Rf(n,O))}var q=t.memoizedState;if(q!==null&&(O=q.dehydrated,O!==null)){if(f)n.flags&256?(ja(n),n.flags&=-257,n=Cf(t,n,a)):n.memoizedState!==null?(Xa(),n.child=t.child,n.flags|=128,n=null):(Xa(),O=o.fallback,u=n.mode,o=Xl({mode:"visible",children:o.children},u),O=Ts(O,u,a,null),O.flags|=2,o.return=n,O.return=n,o.sibling=O,n.child=o,Ls(n,t.child,null,a),o=n.child,o.memoizedState=Af(a),o.childLanes=wf(t,x,a),n.memoizedState=Tf,n=wo(null,o));else if(ja(n),cd(O)){if(x=O.nextSibling&&O.nextSibling.dataset,x)var oe=x.dgst;x=oe,o=Error(s(419)),o.stack="",o.digest=x,mo({value:o,source:null,stack:null}),n=Cf(t,n,a)}else if(Sn||sr(t,n,a,!1),x=(a&t.childLanes)!==0,Sn||x){if(x=en,x!==null&&(o=ai(x,a),o!==0&&o!==q.retryLane))throw q.retryLane=o,Es(t,o),ei(x,t,o),Mf;ld(O)||ec(),n=Cf(t,n,a)}else ld(O)?(n.flags|=192,n.child=t.child,n=null):(t=q.treeContext,nn=Ti(O.nextSibling),Un=n,Nt=!0,za=null,Mi=!1,t!==null&&am(n,t),n=Rf(n,o.children),n.flags|=4096);return n}return u?(Xa(),O=o.fallback,u=n.mode,q=t.child,oe=q.sibling,o=sa(q,{mode:"hidden",children:o.children}),o.subtreeFlags=q.subtreeFlags&65011712,oe!==null?O=sa(oe,O):(O=Ts(O,u,a,null),O.flags|=2),O.return=n,o.return=n,o.sibling=O,n.child=o,wo(null,o),o=n.child,O=t.child.memoizedState,O===null?O=Af(a):(u=O.cachePool,u!==null?(q=vn._currentValue,u=u.parent!==q?{parent:q,pool:q}:u):u=um(),O={baseLanes:O.baseLanes|a,cachePool:u}),o.memoizedState=O,o.childLanes=wf(t,x,a),n.memoizedState=Tf,wo(t.child,o)):(ja(n),a=t.child,t=a.sibling,a=sa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function Rf(t,n){return n=Xl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Xl(t,n){return t=li(22,t,null,n),t.lanes=0,t}function Cf(t,n,a){return Ls(n,t.child,null,a),t=Rf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function M0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),ku(t.return,n,a)}function Nf(t,n,a,o,u,f){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=f)}function E0(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var x=gn.current,O=(x&2)!==0;if(O?(x=x&1|2,n.flags|=128):x&=1,xe(gn,x),Pn(t,n,o,a),o=Nt?po:0,!O&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&M0(t,a,n);else if(t.tag===19)M0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Ul(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Nf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ul(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Nf(n,!0,a,null,f,o);break;case"together":Nf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function fa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ya|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(sr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=sa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=sa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Df(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Tl(t)))}function py(t,n,a){switch(n.tag){case 3:Re(n,n.stateNode.containerInfo),Ga(n,vn,t.memoizedState.cache),As();break;case 27:case 5:rt(n);break;case 4:Re(n,n.stateNode.containerInfo);break;case 10:Ga(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,tf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ja(n),n.flags|=128,null):(a&n.child.childLanes)!==0?b0(t,n,a):(ja(n),t=fa(t,n,a),t!==null?t.sibling:null);ja(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(sr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return E0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xe(gn,gn.current),o)break;return null;case 22:return n.lanes=0,g0(t,n,a,n.pendingProps);case 24:Ga(n,vn,t.memoizedState.cache)}return fa(t,n,a)}function T0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)Sn=!0;else{if(!Df(t,a)&&(n.flags&128)===0)return Sn=!1,py(t,n,a);Sn=(t.flags&131072)!==0}else Sn=!1,Nt&&(n.flags&1048576)!==0&&im(n,po,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Ns(n.elementType),n.type=t,typeof t=="function")Pu(t)?(o=Os(t,o),n.tag=1,n=y0(null,n,t,o,a)):(n.tag=0,n=Ef(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===I){n.tag=11,n=h0(null,n,t,o,a);break e}else if(u===k){n.tag=14,n=p0(null,n,t,o,a);break e}}throw n=X(t)||t,Error(s(306,n,""))}}return n;case 0:return Ef(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Os(o,n.pendingProps),y0(t,n,o,u,a);case 3:e:{if(Re(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Ku(t,n),bo(n,o,null,a);var x=n.memoizedState;if(o=x.cache,Ga(n,vn,o),o!==f.cache&&ju(n,[vn],a,!0),So(),o=x.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=S0(t,n,o,a);break e}else if(o!==u){u=yi(Error(s(424)),n),mo(u),n=S0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(nn=Ti(t.firstChild),Un=n,Nt=!0,za=null,Mi=!0,a=gm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(As(),o===u){n=fa(t,n,a);break e}Pn(t,n,o,a)}n=n.child}return n;case 26:return jl(t,n),t===null?(a=Ig(n.type,null,n.pendingProps,null))?n.memoizedState=a:Nt||(a=n.type,t=n.pendingProps,o=oc(se.current).createElement(a),o[mn]=n,o[Ln]=t,In(o,a,t),xn(o),n.stateNode=o):n.memoizedState=Ig(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return rt(n),t===null&&Nt&&(o=n.stateNode=Ug(n.type,n.pendingProps,se.current),Un=n,Mi=!0,u=nn,$a(n.type)?(ud=u,nn=Ti(o.firstChild)):nn=u),Pn(t,n,n.pendingProps.children,a),jl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Nt&&((u=o=nn)&&(o=jy(o,n.type,n.pendingProps,Mi),o!==null?(n.stateNode=o,Un=n,nn=Ti(o.firstChild),Mi=!1,u=!0):u=!1),u||Ba(n)),rt(n),u=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,o=f.children,sd(u,f)?o=null:x!==null&&sd(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=af(t,n,sy,null,null,a),Vo._currentValue=u),jl(t,n),Pn(t,n,o,a),n.child;case 6:return t===null&&Nt&&((t=a=nn)&&(a=Xy(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,Un=n,nn=null,t=!0):t=!1),t||Ba(n)),null;case 13:return b0(t,n,a);case 4:return Re(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Ls(n,null,o,a):Pn(t,n,o,a),n.child;case 11:return h0(t,n,n.type,n.pendingProps,a);case 7:return Pn(t,n,n.pendingProps,a),n.child;case 8:return Pn(t,n,n.pendingProps.children,a),n.child;case 12:return Pn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ga(n,n.type,o.value),Pn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Rs(n),u=On(u),o=o(u),n.flags|=1,Pn(t,n,o,a),n.child;case 14:return p0(t,n,n.type,n.pendingProps,a);case 15:return m0(t,n,n.type,n.pendingProps,a);case 19:return E0(t,n,a);case 31:return hy(t,n,a);case 22:return g0(t,n,a,n.pendingProps);case 24:return Rs(n),o=On(vn),t===null?(u=qu(),u===null&&(u=en,f=Xu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Zu(n),Ga(n,vn,u)):((t.lanes&a)!==0&&(Ku(t,n),bo(n,null,null,a),So()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ga(n,vn,o)):(o=f.cache,Ga(n,vn,o),o!==u.cache&&ju(n,[vn],a,!0))),Pn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function da(t){t.flags|=4}function Lf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(J0())t.flags|=8192;else throw Ds=Cl,Yu}else t.flags&=-16777217}function A0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Hg(n))if(J0())t.flags|=8192;else throw Ds=Cl,Yu}function Wl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ae():536870912,t.lanes|=n,_r|=n)}function Ro(t,n){if(!Nt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function an(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function my(t,n,a){var o=n.pendingProps;switch(Bu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(n),null;case 1:return an(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),la(vn),ke(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ar(n)?da(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Hu())),an(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(da(n),f!==null?(an(n),A0(n,f)):(an(n),Lf(n,u,null,o,a))):f?f!==t.memoizedState?(da(n),an(n),A0(n,f)):(an(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&da(n),an(n),Lf(n,u,t,o,a)),null;case 27:if(et(n),a=se.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&da(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return an(n),null}t=ve.current,ar(n)?sm(n):(t=Ug(u,o,a),n.stateNode=t,da(n))}return an(n),null;case 5:if(et(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&da(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return an(n),null}if(f=ve.current,ar(n))sm(n);else{var x=oc(se.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}f[mn]=n,f[Ln]=o;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;e:switch(In(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&da(n)}}return an(n),Lf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&da(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=se.current,ar(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Un,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[mn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||bg(t.nodeValue,a)),t||Ba(n,!0)}else t=oc(t).createTextNode(o),t[mn]=n,n.stateNode=t}return an(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=ar(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[mn]=n}else As(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),t=!1}else a=Hu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ui(n),n):(ui(n),null);if((n.flags&128)!==0)throw Error(s(558))}return an(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=ar(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[mn]=n}else As(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),u=!1}else u=Hu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ui(n),n):(ui(n),null)}return ui(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Wl(n,n.updateQueue),an(n),null);case 4:return ke(),t===null&&ed(n.stateNode.containerInfo),an(n),null;case 10:return la(n.type),an(n),null;case 19:if(J(gn),o=n.memoizedState,o===null)return an(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)Ro(o,!1);else{if(fn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Ul(t),f!==null){for(n.flags|=128,Ro(o,!1),t=f.updateQueue,n.updateQueue=t,Wl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)em(a,t),a=a.sibling;return xe(gn,gn.current&1|2),Nt&&ra(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Ce()>Ql&&(n.flags|=128,u=!0,Ro(o,!1),n.lanes=4194304)}else{if(!u)if(t=Ul(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Wl(n,t),Ro(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Nt)return an(n),null}else 2*Ce()-o.renderingStartTime>Ql&&a!==536870912&&(n.flags|=128,u=!0,Ro(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ce(),t.sibling=null,a=gn.current,xe(gn,u?a&1|2:a&1),Nt&&ra(n,o.treeForkCount),t):(an(n),null);case 22:case 23:return ui(n),ef(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(an(n),n.subtreeFlags&6&&(n.flags|=8192)):an(n),a=n.updateQueue,a!==null&&Wl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&J(Cs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),la(vn),an(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function gy(t,n){switch(Bu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return la(vn),ke(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return et(n),null;case 31:if(n.memoizedState!==null){if(ui(n),n.alternate===null)throw Error(s(340));As()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ui(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));As()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return J(gn),null;case 4:return ke(),null;case 10:return la(n.type),null;case 22:case 23:return ui(n),ef(),t!==null&&J(Cs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return la(vn),null;case 25:return null;default:return null}}function w0(t,n){switch(Bu(n),n.tag){case 3:la(vn),ke();break;case 26:case 27:case 5:et(n);break;case 4:ke();break;case 31:n.memoizedState!==null&&ui(n);break;case 13:ui(n);break;case 19:J(gn);break;case 10:la(n.type);break;case 22:case 23:ui(n),ef(),t!==null&&J(Cs);break;case 24:la(vn)}}function Co(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,x=a.inst;o=f(),x.destroy=o}a=a.next}while(a!==u)}}catch(O){Wt(n,n.return,O)}}function Wa(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var x=o.inst,O=x.destroy;if(O!==void 0){x.destroy=void 0,u=n;var q=a,oe=O;try{oe()}catch(ge){Wt(u,q,ge)}}}o=o.next}while(o!==f)}}catch(ge){Wt(n,n.return,ge)}}function R0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{xm(n,a)}catch(o){Wt(t,t.return,o)}}}function C0(t,n,a){a.props=Os(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Wt(t,n,o)}}function No(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Wt(t,n,u)}}function Xi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Wt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Wt(t,n,u)}else a.current=null}function N0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Wt(t,t.return,u)}}function Uf(t,n,a){try{var o=t.stateNode;zy(o,t.type,a,n),o[Ln]=n}catch(u){Wt(t,t.return,u)}}function D0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&$a(t.type)||t.tag===4}function Of(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||D0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&$a(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ia));else if(o!==4&&(o===27&&$a(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Pf(t,n,a),t=t.sibling;t!==null;)Pf(t,n,a),t=t.sibling}function ql(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&$a(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(ql(t,n,a),t=t.sibling;t!==null;)ql(t,n,a),t=t.sibling}function L0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);In(n,o,a),n[mn]=t,n[Ln]=a}catch(f){Wt(t,t.return,f)}}var ha=!1,bn=!1,If=!1,U0=typeof WeakSet=="function"?WeakSet:Set,Cn=null;function _y(t,n){if(t=t.containerInfo,id=pc,t=Xp(t),Ru(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var x=0,O=-1,q=-1,oe=0,ge=0,be=t,fe=null;t:for(;;){for(var he;be!==a||u!==0&&be.nodeType!==3||(O=x+u),be!==f||o!==0&&be.nodeType!==3||(q=x+o),be.nodeType===3&&(x+=be.nodeValue.length),(he=be.firstChild)!==null;)fe=be,be=he;for(;;){if(be===t)break t;if(fe===a&&++oe===u&&(O=x),fe===f&&++ge===o&&(q=x),(he=be.nextSibling)!==null)break;be=fe,fe=be.parentNode}be=he}a=O===-1||q===-1?null:{start:O,end:q}}else a=null}a=a||{start:0,end:0}}else a=null;for(ad={focusedElem:t,selectionRange:a},pc=!1,Cn=n;Cn!==null;)if(n=Cn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Cn=t;else for(;Cn!==null;){switch(n=Cn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Ke=Os(a.type,u);t=o.getSnapshotBeforeUpdate(Ke,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(ot){Wt(a,a.return,ot)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)od(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":od(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Cn=t;break}Cn=n.return}}function O0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ma(t,a),o&4&&Co(5,a);break;case 1:if(ma(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){Wt(a,a.return,x)}else{var u=Os(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Wt(a,a.return,x)}}o&64&&R0(a),o&512&&No(a,a.return);break;case 3:if(ma(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{xm(t,n)}catch(x){Wt(a,a.return,x)}}break;case 27:n===null&&o&4&&L0(a);case 26:case 5:ma(t,a),n===null&&o&4&&N0(a),o&512&&No(a,a.return);break;case 12:ma(t,a);break;case 31:ma(t,a),o&4&&F0(t,a);break;case 13:ma(t,a),o&4&&z0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Ay.bind(null,a),Wy(t,a))));break;case 22:if(o=a.memoizedState!==null||ha,!o){n=n!==null&&n.memoizedState!==null||bn,u=ha;var f=bn;ha=o,(bn=n)&&!f?ga(t,a,(a.subtreeFlags&8772)!==0):ma(t,a),ha=u,bn=f}break;case 30:break;default:ma(t,a)}}function P0(t){var n=t.alternate;n!==null&&(t.alternate=null,P0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&io(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var on=null,Kn=!1;function pa(t,n,a){for(a=a.child;a!==null;)I0(t,n,a),a=a.sibling}function I0(t,n,a){if(me&&typeof me.onCommitFiberUnmount=="function")try{me.onCommitFiberUnmount(pe,a)}catch{}switch(a.tag){case 26:bn||Xi(a,n),pa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:bn||Xi(a,n);var o=on,u=Kn;$a(a.type)&&(on=a.stateNode,Kn=!1),pa(t,n,a),Bo(a.stateNode),on=o,Kn=u;break;case 5:bn||Xi(a,n);case 6:if(o=on,u=Kn,on=null,pa(t,n,a),on=o,Kn=u,on!==null)if(Kn)try{(on.nodeType===9?on.body:on.nodeName==="HTML"?on.ownerDocument.body:on).removeChild(a.stateNode)}catch(f){Wt(a,n,f)}else try{on.removeChild(a.stateNode)}catch(f){Wt(a,n,f)}break;case 18:on!==null&&(Kn?(t=on,Rg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Tr(t)):Rg(on,a.stateNode));break;case 4:o=on,u=Kn,on=a.stateNode.containerInfo,Kn=!0,pa(t,n,a),on=o,Kn=u;break;case 0:case 11:case 14:case 15:Wa(2,a,n),bn||Wa(4,a,n),pa(t,n,a);break;case 1:bn||(Xi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&C0(a,n,o)),pa(t,n,a);break;case 21:pa(t,n,a);break;case 22:bn=(o=bn)||a.memoizedState!==null,pa(t,n,a),bn=o;break;default:pa(t,n,a)}}function F0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Tr(t)}catch(a){Wt(n,n.return,a)}}}function z0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Tr(t)}catch(a){Wt(n,n.return,a)}}function xy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new U0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new U0),n;default:throw Error(s(435,t.tag))}}function Yl(t,n){var a=xy(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=wy.bind(null,t,o);o.then(u,u)}})}function Qn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,x=n,O=x;e:for(;O!==null;){switch(O.tag){case 27:if($a(O.type)){on=O.stateNode,Kn=!1;break e}break;case 5:on=O.stateNode,Kn=!1;break e;case 3:case 4:on=O.stateNode.containerInfo,Kn=!0;break e}O=O.return}if(on===null)throw Error(s(160));I0(f,x,u),on=null,Kn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)B0(n,t),n=n.sibling}var Pi=null;function B0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Qn(n,t),Jn(t),o&4&&(Wa(3,t,t.return),Co(3,t),Wa(5,t,t.return));break;case 1:Qn(n,t),Jn(t),o&512&&(bn||a===null||Xi(a,a.return)),o&64&&ha&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Pi;if(Qn(n,t),Jn(t),o&512&&(bn||a===null||Xi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Da]||f[mn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),In(f,o,a),f[mn]=t,xn(f),o=f;break e;case"link":var x=Bg("link","href",u).get(o+(a.href||""));if(x){for(var O=0;O<x.length;O++)if(f=x[O],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(O,1);break t}}f=u.createElement(o),In(f,o,a),u.head.appendChild(f);break;case"meta":if(x=Bg("meta","content",u).get(o+(a.content||""))){for(O=0;O<x.length;O++)if(f=x[O],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(O,1);break t}}f=u.createElement(o),In(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[mn]=t,xn(f),o=f}t.stateNode=o}else Gg(u,t.type,t.stateNode);else t.stateNode=zg(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Gg(u,t.type,t.stateNode):zg(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Uf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Qn(n,t),Jn(t),o&512&&(bn||a===null||Xi(a,a.return)),a!==null&&o&4&&Uf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Qn(n,t),Jn(t),o&512&&(bn||a===null||Xi(a,a.return)),t.flags&32){u=t.stateNode;try{ri(u,"")}catch(Ke){Wt(t,t.return,Ke)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Uf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(If=!0);break;case 6:if(Qn(n,t),Jn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Ke){Wt(t,t.return,Ke)}}break;case 3:if(uc=null,u=Pi,Pi=lc(n.containerInfo),Qn(n,t),Pi=u,Jn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Tr(n.containerInfo)}catch(Ke){Wt(t,t.return,Ke)}If&&(If=!1,G0(t));break;case 4:o=Pi,Pi=lc(t.stateNode.containerInfo),Qn(n,t),Jn(t),Pi=o;break;case 12:Qn(n,t),Jn(t);break;case 31:Qn(n,t),Jn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Yl(t,o)));break;case 13:Qn(n,t),Jn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Kl=Ce()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Yl(t,o)));break;case 22:u=t.memoizedState!==null;var q=a!==null&&a.memoizedState!==null,oe=ha,ge=bn;if(ha=oe||u,bn=ge||q,Qn(n,t),bn=ge,ha=oe,Jn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||q||ha||bn||Ps(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){q=a=n;try{if(f=q.stateNode,u)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{O=q.stateNode;var be=q.memoizedProps.style,fe=be!=null&&be.hasOwnProperty("display")?be.display:null;O.style.display=fe==null||typeof fe=="boolean"?"":(""+fe).trim()}}catch(Ke){Wt(q,q.return,Ke)}}}else if(n.tag===6){if(a===null){q=n;try{q.stateNode.nodeValue=u?"":q.memoizedProps}catch(Ke){Wt(q,q.return,Ke)}}}else if(n.tag===18){if(a===null){q=n;try{var he=q.stateNode;u?Cg(he,!0):Cg(q.stateNode,!1)}catch(Ke){Wt(q,q.return,Ke)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Yl(t,a))));break;case 19:Qn(n,t),Jn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Yl(t,o)));break;case 30:break;case 21:break;default:Qn(n,t),Jn(t)}}function Jn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(D0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Of(t);ql(t,f,u);break;case 5:var x=a.stateNode;a.flags&32&&(ri(x,""),a.flags&=-33);var O=Of(t);ql(t,O,x);break;case 3:case 4:var q=a.stateNode.containerInfo,oe=Of(t);Pf(t,oe,q);break;default:throw Error(s(161))}}catch(ge){Wt(t,t.return,ge)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function G0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;G0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ma(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)O0(t,n.alternate,n),n=n.sibling}function Ps(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Wa(4,n,n.return),Ps(n);break;case 1:Xi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&C0(n,n.return,a),Ps(n);break;case 27:Bo(n.stateNode);case 26:case 5:Xi(n,n.return),Ps(n);break;case 22:n.memoizedState===null&&Ps(n);break;case 30:Ps(n);break;default:Ps(n)}t=t.sibling}}function ga(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:ga(u,f,a),Co(4,f);break;case 1:if(ga(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(oe){Wt(o,o.return,oe)}if(o=f,u=o.updateQueue,u!==null){var O=o.stateNode;try{var q=u.shared.hiddenCallbacks;if(q!==null)for(u.shared.hiddenCallbacks=null,u=0;u<q.length;u++)_m(q[u],O)}catch(oe){Wt(o,o.return,oe)}}a&&x&64&&R0(f),No(f,f.return);break;case 27:L0(f);case 26:case 5:ga(u,f,a),a&&o===null&&x&4&&N0(f),No(f,f.return);break;case 12:ga(u,f,a);break;case 31:ga(u,f,a),a&&x&4&&F0(u,f);break;case 13:ga(u,f,a),a&&x&4&&z0(u,f);break;case 22:f.memoizedState===null&&ga(u,f,a),No(f,f.return);break;case 30:break;default:ga(u,f,a)}n=n.sibling}}function Ff(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&go(a))}function zf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&go(t))}function Ii(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)H0(t,n,a,o),n=n.sibling}function H0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ii(t,n,a,o),u&2048&&Co(9,n);break;case 1:Ii(t,n,a,o);break;case 3:Ii(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&go(t)));break;case 12:if(u&2048){Ii(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,O=f.onPostCommit;typeof O=="function"&&O(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(q){Wt(n,n.return,q)}}else Ii(t,n,a,o);break;case 31:Ii(t,n,a,o);break;case 13:Ii(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?Ii(t,n,a,o):Do(t,n):f._visibility&2?Ii(t,n,a,o):(f._visibility|=2,pr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Ff(x,n);break;case 24:Ii(t,n,a,o),u&2048&&zf(n.alternate,n);break;default:Ii(t,n,a,o)}}function pr(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,x=n,O=a,q=o,oe=x.flags;switch(x.tag){case 0:case 11:case 15:pr(f,x,O,q,u),Co(8,x);break;case 23:break;case 22:var ge=x.stateNode;x.memoizedState!==null?ge._visibility&2?pr(f,x,O,q,u):Do(f,x):(ge._visibility|=2,pr(f,x,O,q,u)),u&&oe&2048&&Ff(x.alternate,x);break;case 24:pr(f,x,O,q,u),u&&oe&2048&&zf(x.alternate,x);break;default:pr(f,x,O,q,u)}n=n.sibling}}function Do(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Do(a,o),u&2048&&Ff(o.alternate,o);break;case 24:Do(a,o),u&2048&&zf(o.alternate,o);break;default:Do(a,o)}n=n.sibling}}var Lo=8192;function mr(t,n,a){if(t.subtreeFlags&Lo)for(t=t.child;t!==null;)V0(t,n,a),t=t.sibling}function V0(t,n,a){switch(t.tag){case 26:mr(t,n,a),t.flags&Lo&&t.memoizedState!==null&&aS(a,Pi,t.memoizedState,t.memoizedProps);break;case 5:mr(t,n,a);break;case 3:case 4:var o=Pi;Pi=lc(t.stateNode.containerInfo),mr(t,n,a),Pi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Lo,Lo=16777216,mr(t,n,a),Lo=o):mr(t,n,a));break;default:mr(t,n,a)}}function k0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Uo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Cn=o,X0(o,t)}k0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)j0(t),t=t.sibling}function j0(t){switch(t.tag){case 0:case 11:case 15:Uo(t),t.flags&2048&&Wa(9,t,t.return);break;case 3:Uo(t);break;case 12:Uo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Zl(t)):Uo(t);break;default:Uo(t)}}function Zl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Cn=o,X0(o,t)}k0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Wa(8,n,n.return),Zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Zl(n));break;default:Zl(n)}t=t.sibling}}function X0(t,n){for(;Cn!==null;){var a=Cn;switch(a.tag){case 0:case 11:case 15:Wa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:go(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Cn=o;else e:for(a=t;Cn!==null;){o=Cn;var u=o.sibling,f=o.return;if(P0(o),o===a){Cn=null;break e}if(u!==null){u.return=f,Cn=u;break e}Cn=f}}}var vy={getCacheForType:function(t){var n=On(vn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return On(vn).controller.signal}},yy=typeof WeakMap=="function"?WeakMap:Map,zt=0,en=null,Tt=null,Rt=0,Xt=0,fi=null,qa=!1,gr=!1,Bf=!1,_a=0,fn=0,Ya=0,Is=0,Gf=0,di=0,_r=0,Oo=null,$n=null,Hf=!1,Kl=0,W0=0,Ql=1/0,Jl=null,Za=null,Tn=0,Ka=null,xr=null,xa=0,Vf=0,kf=null,q0=null,Po=0,jf=null;function hi(){return(zt&2)!==0&&Rt!==0?Rt&-Rt:N.T!==null?Kf():eo()}function Y0(){if(di===0)if((Rt&536870912)===0||Nt){var t=Mt;Mt<<=1,(Mt&3932160)===0&&(Mt=262144),di=t}else di=536870912;return t=ci.current,t!==null&&(t.flags|=32),di}function ei(t,n,a){(t===en&&(Xt===2||Xt===9)||t.cancelPendingCommit!==null)&&(vr(t,0),Qa(t,Rt,di,!1)),ct(t,a),((zt&2)===0||t!==en)&&(t===en&&((zt&2)===0&&(Is|=a),fn===4&&Qa(t,Rt,di,!1)),Wi(t))}function Z0(t,n,a){if((zt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||He(t,n),u=o?My(t,n):Wf(t,n,!0),f=o;do{if(u===0){gr&&!o&&Qa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Sy(a)){u=Wf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var O=t;u=Oo;var q=O.current.memoizedState.isDehydrated;if(q&&(vr(O,x).flags|=256),x=Wf(O,x,!1),x!==2){if(Bf&&!q){O.errorRecoveryDisabledLanes|=f,Is|=f,u=4;break e}f=$n,$n=u,f!==null&&($n===null?$n=f:$n.push.apply($n,f))}u=x}if(f=!1,u!==2)continue}}if(u===1){vr(t,0),Qa(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Qa(o,n,di,!qa);break e;case 2:$n=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Kl+300-Ce(),10<u)){if(Qa(o,n,di,!qa),_e(o,0,!0)!==0)break e;xa=n,o.timeoutHandle=Ag(K0.bind(null,o,a,$n,Jl,Hf,n,di,Is,_r,qa,f,"Throttled",-0,0),u);break e}K0(o,a,$n,Jl,Hf,n,di,Is,_r,qa,f,null,-0,0)}}break}while(!0);Wi(t)}function K0(t,n,a,o,u,f,x,O,q,oe,ge,be,fe,he){if(t.timeoutHandle=-1,be=n.subtreeFlags,be&8192||(be&16785408)===16785408){be={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ia},V0(n,f,be);var Ke=(f&62914560)===f?Kl-Ce():(f&4194048)===f?W0-Ce():0;if(Ke=sS(be,Ke),Ke!==null){xa=f,t.cancelPendingCommit=Ke(ag.bind(null,t,n,f,a,o,u,x,O,q,ge,be,null,fe,he)),Qa(t,f,x,!oe);return}}ag(t,n,f,a,o,u,x,O,q)}function Sy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!oi(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Qa(t,n,a,o){n&=~Gf,n&=~Is,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-ze(u),x=1<<f;o[f]=-1,u&=~x}a!==0&&Ft(t,a,n)}function $l(){return(zt&6)===0?(Io(0),!1):!0}function Xf(){if(Tt!==null){if(Xt===0)var t=Tt.return;else t=Tt,oa=ws=null,of(t),cr=null,xo=0,t=Tt;for(;t!==null;)w0(t.alternate,t),t=t.return;Tt=null}}function vr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Hy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),xa=0,Xf(),en=t,Tt=a=sa(t.current,null),Rt=n,Xt=0,fi=null,qa=!1,gr=He(t,n),Bf=!1,_r=di=Gf=Is=Ya=fn=0,$n=Oo=null,Hf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-ze(o),f=1<<u;n|=t[u],o&=~f}return _a=n,yl(),a}function Q0(t,n){_t=null,N.H=Ao,n===lr||n===Rl?(n=hm(),Xt=3):n===Yu?(n=hm(),Xt=4):Xt=n===Mf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,fi=n,Tt===null&&(fn=1,Vl(t,yi(n,t.current)))}function J0(){var t=ci.current;return t===null?!0:(Rt&4194048)===Rt?Ei===null:(Rt&62914560)===Rt||(Rt&536870912)!==0?t===Ei:!1}function $0(){var t=N.H;return N.H=Ao,t===null?Ao:t}function eg(){var t=N.A;return N.A=vy,t}function ec(){fn=4,qa||(Rt&4194048)!==Rt&&ci.current!==null||(gr=!0),(Ya&134217727)===0&&(Is&134217727)===0||en===null||Qa(en,Rt,di,!1)}function Wf(t,n,a){var o=zt;zt|=2;var u=$0(),f=eg();(en!==t||Rt!==n)&&(Jl=null,vr(t,n)),n=!1;var x=fn;e:do try{if(Xt!==0&&Tt!==null){var O=Tt,q=fi;switch(Xt){case 8:Xf(),x=6;break e;case 3:case 2:case 9:case 6:ci.current===null&&(n=!0);var oe=Xt;if(Xt=0,fi=null,yr(t,O,q,oe),a&&gr){x=0;break e}break;default:oe=Xt,Xt=0,fi=null,yr(t,O,q,oe)}}by(),x=fn;break}catch(ge){Q0(t,ge)}while(!0);return n&&t.shellSuspendCounter++,oa=ws=null,zt=o,N.H=u,N.A=f,Tt===null&&(en=null,Rt=0,yl()),x}function by(){for(;Tt!==null;)tg(Tt)}function My(t,n){var a=zt;zt|=2;var o=$0(),u=eg();en!==t||Rt!==n?(Jl=null,Ql=Ce()+500,vr(t,n)):gr=He(t,n);e:do try{if(Xt!==0&&Tt!==null){n=Tt;var f=fi;t:switch(Xt){case 1:Xt=0,fi=null,yr(t,n,f,1);break;case 2:case 9:if(fm(f)){Xt=0,fi=null,ng(n);break}n=function(){Xt!==2&&Xt!==9||en!==t||(Xt=7),Wi(t)},f.then(n,n);break e;case 3:Xt=7;break e;case 4:Xt=5;break e;case 7:fm(f)?(Xt=0,fi=null,ng(n)):(Xt=0,fi=null,yr(t,n,f,7));break;case 5:var x=null;switch(Tt.tag){case 26:x=Tt.memoizedState;case 5:case 27:var O=Tt;if(x?Hg(x):O.stateNode.complete){Xt=0,fi=null;var q=O.sibling;if(q!==null)Tt=q;else{var oe=O.return;oe!==null?(Tt=oe,tc(oe)):Tt=null}break t}}Xt=0,fi=null,yr(t,n,f,5);break;case 6:Xt=0,fi=null,yr(t,n,f,6);break;case 8:Xf(),fn=6;break e;default:throw Error(s(462))}}Ey();break}catch(ge){Q0(t,ge)}while(!0);return oa=ws=null,N.H=o,N.A=u,zt=a,Tt!==null?0:(en=null,Rt=0,yl(),fn)}function Ey(){for(;Tt!==null&&!mt();)tg(Tt)}function tg(t){var n=T0(t.alternate,t,_a);t.memoizedProps=t.pendingProps,n===null?tc(t):Tt=n}function ng(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=v0(a,n,n.pendingProps,n.type,void 0,Rt);break;case 11:n=v0(a,n,n.pendingProps,n.type.render,n.ref,Rt);break;case 5:of(n);default:w0(a,n),n=Tt=em(n,_a),n=T0(a,n,_a)}t.memoizedProps=t.pendingProps,n===null?tc(t):Tt=n}function yr(t,n,a,o){oa=ws=null,of(n),cr=null,xo=0;var u=n.return;try{if(dy(t,u,n,a,Rt)){fn=1,Vl(t,yi(a,t.current)),Tt=null;return}}catch(f){if(u!==null)throw Tt=u,f;fn=1,Vl(t,yi(a,t.current)),Tt=null;return}n.flags&32768?(Nt||o===1?t=!0:gr||(Rt&536870912)!==0?t=!1:(qa=t=!0,(o===2||o===9||o===3||o===6)&&(o=ci.current,o!==null&&o.tag===13&&(o.flags|=16384))),ig(n,t)):tc(n)}function tc(t){var n=t;do{if((n.flags&32768)!==0){ig(n,qa);return}t=n.return;var a=my(n.alternate,n,_a);if(a!==null){Tt=a;return}if(n=n.sibling,n!==null){Tt=n;return}Tt=n=t}while(n!==null);fn===0&&(fn=5)}function ig(t,n){do{var a=gy(t.alternate,t);if(a!==null){a.flags&=32767,Tt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Tt=t;return}Tt=t=a}while(t!==null);fn=6,Tt=null}function ag(t,n,a,o,u,f,x,O,q){t.cancelPendingCommit=null;do nc();while(Tn!==0);if((zt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Uu,ln(t,a,f,x,O,q),t===en&&(Tt=en=null,Rt=0),xr=n,Ka=t,xa=a,Vf=f,kf=u,q0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Ry(ie,function(){return cg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=N.T,N.T=null,u=G.p,G.p=2,x=zt,zt|=4;try{_y(t,n,a)}finally{zt=x,G.p=u,N.T=o}}Tn=1,sg(),rg(),og()}}function sg(){if(Tn===1){Tn=0;var t=Ka,n=xr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var o=G.p;G.p=2;var u=zt;zt|=4;try{B0(n,t);var f=ad,x=Xp(t.containerInfo),O=f.focusedElem,q=f.selectionRange;if(x!==O&&O&&O.ownerDocument&&jp(O.ownerDocument.documentElement,O)){if(q!==null&&Ru(O)){var oe=q.start,ge=q.end;if(ge===void 0&&(ge=oe),"selectionStart"in O)O.selectionStart=oe,O.selectionEnd=Math.min(ge,O.value.length);else{var be=O.ownerDocument||document,fe=be&&be.defaultView||window;if(fe.getSelection){var he=fe.getSelection(),Ke=O.textContent.length,ot=Math.min(q.start,Ke),Kt=q.end===void 0?ot:Math.min(q.end,Ke);!he.extend&&ot>Kt&&(x=Kt,Kt=ot,ot=x);var ee=kp(O,ot),K=kp(O,Kt);if(ee&&K&&(he.rangeCount!==1||he.anchorNode!==ee.node||he.anchorOffset!==ee.offset||he.focusNode!==K.node||he.focusOffset!==K.offset)){var re=be.createRange();re.setStart(ee.node,ee.offset),he.removeAllRanges(),ot>Kt?(he.addRange(re),he.extend(K.node,K.offset)):(re.setEnd(K.node,K.offset),he.addRange(re))}}}}for(be=[],he=O;he=he.parentNode;)he.nodeType===1&&be.push({element:he,left:he.scrollLeft,top:he.scrollTop});for(typeof O.focus=="function"&&O.focus(),O=0;O<be.length;O++){var ye=be[O];ye.element.scrollLeft=ye.left,ye.element.scrollTop=ye.top}}pc=!!id,ad=id=null}finally{zt=u,G.p=o,N.T=a}}t.current=n,Tn=2}}function rg(){if(Tn===2){Tn=0;var t=Ka,n=xr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var o=G.p;G.p=2;var u=zt;zt|=4;try{O0(t,n.alternate,n)}finally{zt=u,G.p=o,N.T=a}}Tn=3}}function og(){if(Tn===4||Tn===3){Tn=0,Ut();var t=Ka,n=xr,a=xa,o=q0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Tn=5:(Tn=0,xr=Ka=null,lg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Za=null),$r(a),n=n.stateNode,me&&typeof me.onCommitFiberRoot=="function")try{me.onCommitFiberRoot(pe,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=N.T,u=G.p,G.p=2,N.T=null;try{for(var f=t.onRecoverableError,x=0;x<o.length;x++){var O=o[x];f(O.value,{componentStack:O.stack})}}finally{N.T=n,G.p=u}}(xa&3)!==0&&nc(),Wi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===jf?Po++:(Po=0,jf=t):Po=0,Io(0)}}function lg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,go(n)))}function nc(){return sg(),rg(),og(),cg()}function cg(){if(Tn!==5)return!1;var t=Ka,n=Vf;Vf=0;var a=$r(xa),o=N.T,u=G.p;try{G.p=32>a?32:a,N.T=null,a=kf,kf=null;var f=Ka,x=xa;if(Tn=0,xr=Ka=null,xa=0,(zt&6)!==0)throw Error(s(331));var O=zt;if(zt|=4,j0(f.current),H0(f,f.current,x,a),zt=O,Io(0,!1),me&&typeof me.onPostCommitFiberRoot=="function")try{me.onPostCommitFiberRoot(pe,f)}catch{}return!0}finally{G.p=u,N.T=o,lg(t,n)}}function ug(t,n,a){n=yi(a,n),n=bf(t.stateNode,n,2),t=ka(t,n,2),t!==null&&(ct(t,2),Wi(t))}function Wt(t,n,a){if(t.tag===3)ug(t,t,a);else for(;n!==null;){if(n.tag===3){ug(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Za===null||!Za.has(o))){t=yi(a,t),a=f0(2),o=ka(n,a,2),o!==null&&(d0(a,o,n,t),ct(o,2),Wi(o));break}}n=n.return}}function qf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new yy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Bf=!0,u.add(a),t=Ty.bind(null,t,n,a),n.then(t,t))}function Ty(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,en===t&&(Rt&a)===a&&(fn===4||fn===3&&(Rt&62914560)===Rt&&300>Ce()-Kl?(zt&2)===0&&vr(t,0):Gf|=a,_r===Rt&&(_r=0)),Wi(t)}function fg(t,n){n===0&&(n=Ae()),t=Es(t,n),t!==null&&(ct(t,n),Wi(t))}function Ay(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),fg(t,a)}function wy(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),fg(t,a)}function Ry(t,n){return Q(t,n)}var ic=null,Sr=null,Yf=!1,ac=!1,Zf=!1,Ja=0;function Wi(t){t!==Sr&&t.next===null&&(Sr===null?ic=Sr=t:Sr=Sr.next=t),ac=!0,Yf||(Yf=!0,Ny())}function Io(t,n){if(!Zf&&ac){Zf=!0;do for(var a=!1,o=ic;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var x=o.suspendedLanes,O=o.pingedLanes;f=(1<<31-ze(42|t)+1)-1,f&=u&~(x&~O),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,mg(o,f))}else f=Rt,f=_e(o,o===en?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||He(o,f)||(a=!0,mg(o,f));o=o.next}while(a);Zf=!1}}function Cy(){dg()}function dg(){ac=Yf=!1;var t=0;Ja!==0&&Gy()&&(t=Ja);for(var n=Ce(),a=null,o=ic;o!==null;){var u=o.next,f=hg(o,n);f===0?(o.next=null,a===null?ic=u:a.next=u,u===null&&(Sr=a)):(a=o,(t!==0||(f&3)!==0)&&(ac=!0)),o=u}Tn!==0&&Tn!==5||Io(t),Ja!==0&&(Ja=0)}function hg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-ze(f),O=1<<x,q=u[x];q===-1?((O&a)===0||(O&o)!==0)&&(u[x]=Oe(O,n)):q<=n&&(t.expiredLanes|=O),f&=~O}if(n=en,a=Rt,a=_e(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Xt===2||Xt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Jt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||He(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Jt(o),$r(a)){case 2:case 8:a=A;break;case 32:a=ie;break;case 268435456:a=we;break;default:a=ie}return o=pg.bind(null,t),a=Q(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Jt(o),t.callbackPriority=2,t.callbackNode=null,2}function pg(t,n){if(Tn!==0&&Tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(nc()&&t.callbackNode!==a)return null;var o=Rt;return o=_e(t,t===en?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Z0(t,o,n),hg(t,Ce()),t.callbackNode!=null&&t.callbackNode===a?pg.bind(null,t):null)}function mg(t,n){if(nc())return null;Z0(t,n,!0)}function Ny(){Vy(function(){(zt&6)!==0?Q(z,Cy):dg()})}function Kf(){if(Ja===0){var t=rr;t===0&&(t=ft,ft<<=1,(ft&261888)===0&&(ft=256)),Ja=t}return Ja}function gg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ys(""+t)}function _g(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Dy(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=gg((u[Ln]||null).action),x=o.submitter;x&&(n=(n=x[Ln]||null)?gg(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var O=new gl("action","action",null,o,u);t.push({event:O,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ja!==0){var q=x?_g(u,x):new FormData(u);gf(a,{pending:!0,data:q,method:u.method,action:f},null,q)}}else typeof f=="function"&&(O.preventDefault(),q=x?_g(u,x):new FormData(u),gf(a,{pending:!0,data:q,method:u.method,action:f},f,q))},currentTarget:u}]})}}for(var Qf=0;Qf<Lu.length;Qf++){var Jf=Lu[Qf],Ly=Jf.toLowerCase(),Uy=Jf[0].toUpperCase()+Jf.slice(1);Oi(Ly,"on"+Uy)}Oi(Yp,"onAnimationEnd"),Oi(Zp,"onAnimationIteration"),Oi(Kp,"onAnimationStart"),Oi("dblclick","onDoubleClick"),Oi("focusin","onFocus"),Oi("focusout","onBlur"),Oi(Zv,"onTransitionRun"),Oi(Kv,"onTransitionStart"),Oi(Qv,"onTransitionCancel"),Oi(Qp,"onTransitionEnd"),ue("onMouseEnter",["mouseout","mouseover"]),ue("onMouseLeave",["mouseout","mouseover"]),ue("onPointerEnter",["pointerout","pointerover"]),ue("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Oy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fo));function xg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var x=o.length-1;0<=x;x--){var O=o[x],q=O.instance,oe=O.currentTarget;if(O=O.listener,q!==f&&u.isPropagationStopped())break e;f=O,u.currentTarget=oe;try{f(u)}catch(ge){vl(ge)}u.currentTarget=null,f=q}else for(x=0;x<o.length;x++){if(O=o[x],q=O.instance,oe=O.currentTarget,O=O.listener,q!==f&&u.isPropagationStopped())break e;f=O,u.currentTarget=oe;try{f(u)}catch(ge){vl(ge)}u.currentTarget=null,f=q}}}}function At(t,n){var a=n[Na];a===void 0&&(a=n[Na]=new Set);var o=t+"__bubble";a.has(o)||(vg(n,t,2,!1),a.add(o))}function $f(t,n,a){var o=0;n&&(o|=4),vg(a,t,o,n)}var sc="_reactListening"+Math.random().toString(36).slice(2);function ed(t){if(!t[sc]){t[sc]=!0,dl.forEach(function(a){a!=="selectionchange"&&(Oy.has(a)||$f(a,!1,t),$f(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[sc]||(n[sc]=!0,$f("selectionchange",!1,n))}}function vg(t,n,a,o){switch(Yg(n)){case 2:var u=lS;break;case 8:u=cS;break;default:u=md}a=u.bind(null,n,a,t),u=void 0,!vu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function td(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var O=o.stateNode.containerInfo;if(O===u)break;if(x===4)for(x=o.return;x!==null;){var q=x.tag;if((q===3||q===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;O!==null;){if(x=La(O),x===null)return;if(q=x.tag,q===5||q===6||q===26||q===27){o=f=x;continue e}O=O.parentNode}}o=o.return}Ep(function(){var oe=f,ge=_u(a),be=[];e:{var fe=Jp.get(t);if(fe!==void 0){var he=gl,Ke=t;switch(t){case"keypress":if(pl(a)===0)break e;case"keydown":case"keyup":he=wv;break;case"focusin":Ke="focus",he=Mu;break;case"focusout":Ke="blur",he=Mu;break;case"beforeblur":case"afterblur":he=Mu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":he=wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":he=mv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":he=Nv;break;case Yp:case Zp:case Kp:he=xv;break;case Qp:he=Lv;break;case"scroll":case"scrollend":he=hv;break;case"wheel":he=Ov;break;case"copy":case"cut":case"paste":he=yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":he=Cp;break;case"toggle":case"beforetoggle":he=Iv}var ot=(n&4)!==0,Kt=!ot&&(t==="scroll"||t==="scrollend"),ee=ot?fe!==null?fe+"Capture":null:fe;ot=[];for(var K=oe,re;K!==null;){var ye=K;if(re=ye.stateNode,ye=ye.tag,ye!==5&&ye!==26&&ye!==27||re===null||ee===null||(ye=ao(K,ee),ye!=null&&ot.push(zo(K,ye,re))),Kt)break;K=K.return}0<ot.length&&(fe=new he(fe,Ke,null,a,ge),be.push({event:fe,listeners:ot}))}}if((n&7)===0){e:{if(fe=t==="mouseover"||t==="pointerover",he=t==="mouseout"||t==="pointerout",fe&&a!==gu&&(Ke=a.relatedTarget||a.fromElement)&&(La(Ke)||Ke[na]))break e;if((he||fe)&&(fe=ge.window===ge?ge:(fe=ge.ownerDocument)?fe.defaultView||fe.parentWindow:window,he?(Ke=a.relatedTarget||a.toElement,he=oe,Ke=Ke?La(Ke):null,Ke!==null&&(Kt=c(Ke),ot=Ke.tag,Ke!==Kt||ot!==5&&ot!==27&&ot!==6)&&(Ke=null)):(he=null,Ke=oe),he!==Ke)){if(ot=wp,ye="onMouseLeave",ee="onMouseEnter",K="mouse",(t==="pointerout"||t==="pointerover")&&(ot=Cp,ye="onPointerLeave",ee="onPointerEnter",K="pointer"),Kt=he==null?fe:vs(he),re=Ke==null?fe:vs(Ke),fe=new ot(ye,K+"leave",he,a,ge),fe.target=Kt,fe.relatedTarget=re,ye=null,La(ge)===oe&&(ot=new ot(ee,K+"enter",Ke,a,ge),ot.target=re,ot.relatedTarget=Kt,ye=ot),Kt=ye,he&&Ke)t:{for(ot=Py,ee=he,K=Ke,re=0,ye=ee;ye;ye=ot(ye))re++;ye=0;for(var st=K;st;st=ot(st))ye++;for(;0<re-ye;)ee=ot(ee),re--;for(;0<ye-re;)K=ot(K),ye--;for(;re--;){if(ee===K||K!==null&&ee===K.alternate){ot=ee;break t}ee=ot(ee),K=ot(K)}ot=null}else ot=null;he!==null&&yg(be,fe,he,ot,!1),Ke!==null&&Kt!==null&&yg(be,Kt,Ke,ot,!0)}}e:{if(fe=oe?vs(oe):window,he=fe.nodeName&&fe.nodeName.toLowerCase(),he==="select"||he==="input"&&fe.type==="file")var Pt=Fp;else if(Pp(fe))if(zp)Pt=Wv;else{Pt=jv;var Je=kv}else he=fe.nodeName,!he||he.toLowerCase()!=="input"||fe.type!=="checkbox"&&fe.type!=="radio"?oe&&Ht(oe.elementType)&&(Pt=Fp):Pt=Xv;if(Pt&&(Pt=Pt(t,oe))){Ip(be,Pt,a,ge);break e}Je&&Je(t,fe,oe),t==="focusout"&&oe&&fe.type==="number"&&oe.memoizedProps.value!=null&&Et(fe,"number",fe.value)}switch(Je=oe?vs(oe):window,t){case"focusin":(Pp(Je)||Je.contentEditable==="true")&&(Js=Je,Cu=oe,ho=null);break;case"focusout":ho=Cu=Js=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,Wp(be,a,ge);break;case"selectionchange":if(Yv)break;case"keydown":case"keyup":Wp(be,a,ge)}var xt;if(Tu)e:{switch(t){case"compositionstart":var Ct="onCompositionStart";break e;case"compositionend":Ct="onCompositionEnd";break e;case"compositionupdate":Ct="onCompositionUpdate";break e}Ct=void 0}else Qs?Up(t,a)&&(Ct="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Ct="onCompositionStart");Ct&&(Np&&a.locale!=="ko"&&(Qs||Ct!=="onCompositionStart"?Ct==="onCompositionEnd"&&Qs&&(xt=Tp()):(Ia=ge,yu="value"in Ia?Ia.value:Ia.textContent,Qs=!0)),Je=rc(oe,Ct),0<Je.length&&(Ct=new Rp(Ct,t,null,a,ge),be.push({event:Ct,listeners:Je}),xt?Ct.data=xt:(xt=Op(a),xt!==null&&(Ct.data=xt)))),(xt=zv?Bv(t,a):Gv(t,a))&&(Ct=rc(oe,"onBeforeInput"),0<Ct.length&&(Je=new Rp("onBeforeInput","beforeinput",null,a,ge),be.push({event:Je,listeners:Ct}),Je.data=xt)),Dy(be,t,oe,a,ge)}xg(be,n)})}function zo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function rc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=ao(t,a),u!=null&&o.unshift(zo(t,u,f)),u=ao(t,n),u!=null&&o.push(zo(t,u,f))),t.tag===3)return o;t=t.return}return[]}function Py(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function yg(t,n,a,o,u){for(var f=n._reactName,x=[];a!==null&&a!==o;){var O=a,q=O.alternate,oe=O.stateNode;if(O=O.tag,q!==null&&q===o)break;O!==5&&O!==26&&O!==27||oe===null||(q=oe,u?(oe=ao(a,f),oe!=null&&x.unshift(zo(a,oe,q))):u||(oe=ao(a,f),oe!=null&&x.push(zo(a,oe,q)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var Iy=/\r\n?/g,Fy=/\u0000|\uFFFD/g;function Sg(t){return(typeof t=="string"?t:""+t).replace(Iy,`
`).replace(Fy,"")}function bg(t,n){return n=Sg(n),Sg(t)===n}function Zt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ri(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ri(t,""+o);break;case"className":Ze(t,"class",o);break;case"tabIndex":Ze(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ze(t,a,o);break;case"style":Ui(t,o,f);break;case"data":if(n!=="object"){Ze(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ys(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Zt(t,n,"name",u.name,u,null),Zt(t,n,"formEncType",u.formEncType,u,null),Zt(t,n,"formMethod",u.formMethod,u,null),Zt(t,n,"formTarget",u.formTarget,u,null)):(Zt(t,n,"encType",u.encType,u,null),Zt(t,n,"method",u.method,u,null),Zt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ys(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ia);break;case"onScroll":o!=null&&At("scroll",t);break;case"onScrollEnd":o!=null&&At("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=ys(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":At("beforetoggle",t),At("toggle",t),Be(t,"popover",o);break;case"xlinkActuate":qe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":qe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":qe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":qe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":qe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":qe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":qe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":qe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":qe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Be(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Vi.get(a)||a,Be(t,a,o))}}function nd(t,n,a,o,u,f){switch(a){case"style":Ui(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ri(t,o):(typeof o=="number"||typeof o=="bigint")&&ri(t,""+o);break;case"onScroll":o!=null&&At("scroll",t);break;case"onScrollEnd":o!=null&&At("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ia);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!L.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[Ln]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Be(t,a,o)}}}function In(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":At("error",t),At("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Zt(t,n,f,x,a,null)}}u&&Zt(t,n,"srcSet",a.srcSet,a,null),o&&Zt(t,n,"src",a.src,a,null);return;case"input":At("invalid",t);var O=f=x=u=null,q=null,oe=null;for(o in a)if(a.hasOwnProperty(o)){var ge=a[o];if(ge!=null)switch(o){case"name":u=ge;break;case"type":x=ge;break;case"checked":q=ge;break;case"defaultChecked":oe=ge;break;case"value":f=ge;break;case"defaultValue":O=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(s(137,n));break;default:Zt(t,n,o,ge,a,null)}}Bn(t,f,O,q,oe,x,u,!1);return;case"select":At("invalid",t),o=x=f=null;for(u in a)if(a.hasOwnProperty(u)&&(O=a[u],O!=null))switch(u){case"value":f=O;break;case"defaultValue":x=O;break;case"multiple":o=O;default:Zt(t,n,u,O,a,null)}n=f,a=x,t.multiple=!!o,n!=null?En(t,!!o,n,!1):a!=null&&En(t,!!o,a,!0);return;case"textarea":At("invalid",t),f=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(O=a[x],O!=null))switch(x){case"value":o=O;break;case"defaultValue":u=O;break;case"children":f=O;break;case"dangerouslySetInnerHTML":if(O!=null)throw Error(s(91));break;default:Zt(t,n,x,O,a,null)}Li(t,o,u,f);return;case"option":for(q in a)if(a.hasOwnProperty(q)&&(o=a[q],o!=null))switch(q){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Zt(t,n,q,o,a,null)}return;case"dialog":At("beforetoggle",t),At("toggle",t),At("cancel",t),At("close",t);break;case"iframe":case"object":At("load",t);break;case"video":case"audio":for(o=0;o<Fo.length;o++)At(Fo[o],t);break;case"image":At("error",t),At("load",t);break;case"details":At("toggle",t);break;case"embed":case"source":case"link":At("error",t),At("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(oe in a)if(a.hasOwnProperty(oe)&&(o=a[oe],o!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Zt(t,n,oe,o,a,null)}return;default:if(Ht(n)){for(ge in a)a.hasOwnProperty(ge)&&(o=a[ge],o!==void 0&&nd(t,n,ge,o,a,void 0));return}}for(O in a)a.hasOwnProperty(O)&&(o=a[O],o!=null&&Zt(t,n,O,o,a,null))}function zy(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,x=null,O=null,q=null,oe=null,ge=null;for(he in a){var be=a[he];if(a.hasOwnProperty(he)&&be!=null)switch(he){case"checked":break;case"value":break;case"defaultValue":q=be;default:o.hasOwnProperty(he)||Zt(t,n,he,null,o,be)}}for(var fe in o){var he=o[fe];if(be=a[fe],o.hasOwnProperty(fe)&&(he!=null||be!=null))switch(fe){case"type":f=he;break;case"name":u=he;break;case"checked":oe=he;break;case"defaultChecked":ge=he;break;case"value":x=he;break;case"defaultValue":O=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(s(137,n));break;default:he!==be&&Zt(t,n,fe,he,o,be)}}je(t,x,O,q,oe,ge,f,u);return;case"select":he=x=O=fe=null;for(f in a)if(q=a[f],a.hasOwnProperty(f)&&q!=null)switch(f){case"value":break;case"multiple":he=q;default:o.hasOwnProperty(f)||Zt(t,n,f,null,o,q)}for(u in o)if(f=o[u],q=a[u],o.hasOwnProperty(u)&&(f!=null||q!=null))switch(u){case"value":fe=f;break;case"defaultValue":O=f;break;case"multiple":x=f;default:f!==q&&Zt(t,n,u,f,o,q)}n=O,a=x,o=he,fe!=null?En(t,!!a,fe,!1):!!o!=!!a&&(n!=null?En(t,!!a,n,!0):En(t,!!a,a?[]:"",!1));return;case"textarea":he=fe=null;for(O in a)if(u=a[O],a.hasOwnProperty(O)&&u!=null&&!o.hasOwnProperty(O))switch(O){case"value":break;case"children":break;default:Zt(t,n,O,null,o,u)}for(x in o)if(u=o[x],f=a[x],o.hasOwnProperty(x)&&(u!=null||f!=null))switch(x){case"value":fe=u;break;case"defaultValue":he=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Zt(t,n,x,u,o,f)}si(t,fe,he);return;case"option":for(var Ke in a)if(fe=a[Ke],a.hasOwnProperty(Ke)&&fe!=null&&!o.hasOwnProperty(Ke))switch(Ke){case"selected":t.selected=!1;break;default:Zt(t,n,Ke,null,o,fe)}for(q in o)if(fe=o[q],he=a[q],o.hasOwnProperty(q)&&fe!==he&&(fe!=null||he!=null))switch(q){case"selected":t.selected=fe&&typeof fe!="function"&&typeof fe!="symbol";break;default:Zt(t,n,q,fe,o,he)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ot in a)fe=a[ot],a.hasOwnProperty(ot)&&fe!=null&&!o.hasOwnProperty(ot)&&Zt(t,n,ot,null,o,fe);for(oe in o)if(fe=o[oe],he=a[oe],o.hasOwnProperty(oe)&&fe!==he&&(fe!=null||he!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(s(137,n));break;default:Zt(t,n,oe,fe,o,he)}return;default:if(Ht(n)){for(var Kt in a)fe=a[Kt],a.hasOwnProperty(Kt)&&fe!==void 0&&!o.hasOwnProperty(Kt)&&nd(t,n,Kt,void 0,o,fe);for(ge in o)fe=o[ge],he=a[ge],!o.hasOwnProperty(ge)||fe===he||fe===void 0&&he===void 0||nd(t,n,ge,fe,o,he);return}}for(var ee in a)fe=a[ee],a.hasOwnProperty(ee)&&fe!=null&&!o.hasOwnProperty(ee)&&Zt(t,n,ee,null,o,fe);for(be in o)fe=o[be],he=a[be],!o.hasOwnProperty(be)||fe===he||fe==null&&he==null||Zt(t,n,be,fe,o,he)}function Mg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function By(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,x=u.initiatorType,O=u.duration;if(f&&O&&Mg(x)){for(x=0,O=u.responseEnd,o+=1;o<a.length;o++){var q=a[o],oe=q.startTime;if(oe>O)break;var ge=q.transferSize,be=q.initiatorType;ge&&Mg(be)&&(q=q.responseEnd,x+=ge*(q<O?1:(O-oe)/(q-oe)))}if(--o,n+=8*(f+x)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var id=null,ad=null;function oc(t){return t.nodeType===9?t:t.ownerDocument}function Eg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Tg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function sd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var rd=null;function Gy(){var t=window.event;return t&&t.type==="popstate"?t===rd?!1:(rd=t,!0):(rd=null,!1)}var Ag=typeof setTimeout=="function"?setTimeout:void 0,Hy=typeof clearTimeout=="function"?clearTimeout:void 0,wg=typeof Promise=="function"?Promise:void 0,Vy=typeof queueMicrotask=="function"?queueMicrotask:typeof wg<"u"?function(t){return wg.resolve(null).then(t).catch(ky)}:Ag;function ky(t){setTimeout(function(){throw t})}function $a(t){return t==="head"}function Rg(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Tr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Bo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Bo(a);for(var f=a.firstChild;f;){var x=f.nextSibling,O=f.nodeName;f[Da]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&Bo(t.ownerDocument.body);a=u}while(a);Tr(n)}function Cg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function od(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":od(a),io(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function jy(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Da])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Ti(t.nextSibling),t===null)break}return null}function Xy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ti(t.nextSibling),t===null))return null;return t}function Ng(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ti(t.nextSibling),t===null))return null;return t}function ld(t){return t.data==="$?"||t.data==="$~"}function cd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Wy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ti(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ud=null;function Dg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ti(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Lg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Ug(t,n,a){switch(n=oc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Bo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);io(t)}var Ai=new Map,Og=new Set;function lc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var va=G.d;G.d={f:qy,r:Yy,D:Zy,C:Ky,L:Qy,m:Jy,X:eS,S:$y,M:tS};function qy(){var t=va.f(),n=$l();return t||n}function Yy(t){var n=Ua(t);n!==null&&n.tag===5&&n.type==="form"?Qm(n):va.r(t)}var br=typeof document>"u"?null:document;function Pg(t,n,a){var o=br;if(o&&typeof n=="string"&&n){var u=kt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Og.has(u)||(Og.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),In(n,"link",t),xn(n),o.head.appendChild(n)))}}function Zy(t){va.D(t),Pg("dns-prefetch",t,null)}function Ky(t,n){va.C(t,n),Pg("preconnect",t,n)}function Qy(t,n,a){va.L(t,n,a);var o=br;if(o&&t&&n){var u='link[rel="preload"][as="'+kt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+kt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+kt(a.imageSizes)+'"]')):u+='[href="'+kt(t)+'"]';var f=u;switch(n){case"style":f=Mr(t);break;case"script":f=Er(t)}Ai.has(f)||(t=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ai.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Go(f))||n==="script"&&o.querySelector(Ho(f))||(n=o.createElement("link"),In(n,"link",t),xn(n),o.head.appendChild(n)))}}function Jy(t,n){va.m(t,n);var a=br;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+kt(o)+'"][href="'+kt(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Er(t)}if(!Ai.has(f)&&(t=S({rel:"modulepreload",href:t},n),Ai.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ho(f)))return}o=a.createElement("link"),In(o,"link",t),xn(o),a.head.appendChild(o)}}}function $y(t,n,a){va.S(t,n,a);var o=br;if(o&&t){var u=Oa(o).hoistableStyles,f=Mr(t);n=n||"default";var x=u.get(f);if(!x){var O={loading:0,preload:null};if(x=o.querySelector(Go(f)))O.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ai.get(f))&&fd(t,a);var q=x=o.createElement("link");xn(q),In(q,"link",t),q._p=new Promise(function(oe,ge){q.onload=oe,q.onerror=ge}),q.addEventListener("load",function(){O.loading|=1}),q.addEventListener("error",function(){O.loading|=2}),O.loading|=4,cc(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:O},u.set(f,x)}}}function eS(t,n){va.X(t,n);var a=br;if(a&&t){var o=Oa(a).hoistableScripts,u=Er(t),f=o.get(u);f||(f=a.querySelector(Ho(u)),f||(t=S({src:t,async:!0},n),(n=Ai.get(u))&&dd(t,n),f=a.createElement("script"),xn(f),In(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function tS(t,n){va.M(t,n);var a=br;if(a&&t){var o=Oa(a).hoistableScripts,u=Er(t),f=o.get(u);f||(f=a.querySelector(Ho(u)),f||(t=S({src:t,async:!0,type:"module"},n),(n=Ai.get(u))&&dd(t,n),f=a.createElement("script"),xn(f),In(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Ig(t,n,a,o){var u=(u=se.current)?lc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Mr(a.href),a=Oa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Mr(a.href);var f=Oa(u).hoistableStyles,x=f.get(t);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=u.querySelector(Go(t)))&&!f._p&&(x.instance=f,x.state.loading=5),Ai.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ai.set(t,a),f||nS(u,t,a,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Er(a),a=Oa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Mr(t){return'href="'+kt(t)+'"'}function Go(t){return'link[rel="stylesheet"]['+t+"]"}function Fg(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function nS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),In(n,"link",a),xn(n),t.head.appendChild(n))}function Er(t){return'[src="'+kt(t)+'"]'}function Ho(t){return"script[async]"+t}function zg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+kt(a.href)+'"]');if(o)return n.instance=o,xn(o),o;var u=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),xn(o),In(o,"style",u),cc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Mr(a.href);var f=t.querySelector(Go(u));if(f)return n.state.loading|=4,n.instance=f,xn(f),f;o=Fg(a),(u=Ai.get(u))&&fd(o,u),f=(t.ownerDocument||t).createElement("link"),xn(f);var x=f;return x._p=new Promise(function(O,q){x.onload=O,x.onerror=q}),In(f,"link",o),n.state.loading|=4,cc(f,a.precedence,t),n.instance=f;case"script":return f=Er(a.src),(u=t.querySelector(Ho(f)))?(n.instance=u,xn(u),u):(o=a,(u=Ai.get(f))&&(o=S({},a),dd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),xn(u),In(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,cc(o,a.precedence,t));return n.instance}function cc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,x=0;x<o.length;x++){var O=o[x];if(O.dataset.precedence===n)f=O;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function fd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function dd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var uc=null;function Bg(t,n,a){if(uc===null){var o=new Map,u=uc=new Map;u.set(a,o)}else u=uc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Da]||f[mn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var O=o.get(x);O?O.push(f):o.set(x,[f])}}return o}function Gg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function iS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Hg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function aS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Mr(o.href),f=n.querySelector(Go(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=fc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,xn(f);return}f=n.ownerDocument||n,o=Fg(o),(u=Ai.get(u))&&fd(o,u),f=f.createElement("link"),xn(f);var x=f;x._p=new Promise(function(O,q){x.onload=O,x.onerror=q}),In(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=fc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var hd=0;function sS(t,n){return t.stylesheets&&t.count===0&&hc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&hc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&hd===0&&(hd=62500*By());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&hc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>hd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function fc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)hc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var dc=null;function hc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,dc=new Map,n.forEach(rS,t),dc=null,fc.call(t))}function rS(t,n){if(!(n.state.loading&4)){var a=dc.get(t);if(a)var o=a.get(null);else{a=new Map,dc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var x=u[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),f=a.get(x)||o,f===o&&a.set(null,u),a.set(x,u),this.count++,o=fc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Vo={$$typeof:B,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function oS(t,n,a,o,u,f,x,O,q){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qe(0),this.hiddenUpdates=Qe(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=q,this.incompleteTransitions=new Map}function Vg(t,n,a,o,u,f,x,O,q,oe,ge,be){return t=new oS(t,n,a,x,q,oe,ge,be,O),n=1,f===!0&&(n|=24),f=li(3,null,null,n),t.current=f,f.stateNode=t,n=Xu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Zu(f),t}function kg(t){return t?(t=tr,t):tr}function jg(t,n,a,o,u,f){u=kg(u),o.context===null?o.context=u:o.pendingContext=u,o=Va(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=ka(t,o,n),a!==null&&(ei(a,t,n),yo(a,t,n))}function Xg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function pd(t,n){Xg(t,n),(t=t.alternate)&&Xg(t,n)}function Wg(t){if(t.tag===13||t.tag===31){var n=Es(t,67108864);n!==null&&ei(n,t,67108864),pd(t,67108864)}}function qg(t){if(t.tag===13||t.tag===31){var n=hi();n=xs(n);var a=Es(t,n);a!==null&&ei(a,t,n),pd(t,n)}}var pc=!0;function lS(t,n,a,o){var u=N.T;N.T=null;var f=G.p;try{G.p=2,md(t,n,a,o)}finally{G.p=f,N.T=u}}function cS(t,n,a,o){var u=N.T;N.T=null;var f=G.p;try{G.p=8,md(t,n,a,o)}finally{G.p=f,N.T=u}}function md(t,n,a,o){if(pc){var u=gd(o);if(u===null)td(t,n,o,mc,a),Zg(t,o);else if(fS(u,t,n,a,o))o.stopPropagation();else if(Zg(t,o),n&4&&-1<uS.indexOf(t)){for(;u!==null;){var f=Ua(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Ne(f.pendingLanes);if(x!==0){var O=f;for(O.pendingLanes|=2,O.entangledLanes|=2;x;){var q=1<<31-ze(x);O.entanglements[1]|=q,x&=~q}Wi(f),(zt&6)===0&&(Ql=Ce()+500,Io(0))}}break;case 31:case 13:O=Es(f,2),O!==null&&ei(O,f,2),$l(),pd(f,2)}if(f=gd(o),f===null&&td(t,n,o,mc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else td(t,n,o,null,a)}}function gd(t){return t=_u(t),_d(t)}var mc=null;function _d(t){if(mc=null,t=La(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return mc=t,null}function Yg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Gt()){case z:return 2;case A:return 8;case ie:case Se:return 32;case we:return 268435456;default:return 32}default:return 32}}var xd=!1,es=null,ts=null,ns=null,ko=new Map,jo=new Map,is=[],uS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zg(t,n){switch(t){case"focusin":case"focusout":es=null;break;case"dragenter":case"dragleave":ts=null;break;case"mouseover":case"mouseout":ns=null;break;case"pointerover":case"pointerout":ko.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(n.pointerId)}}function Xo(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ua(n),n!==null&&Wg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function fS(t,n,a,o,u){switch(n){case"focusin":return es=Xo(es,t,n,a,o,u),!0;case"dragenter":return ts=Xo(ts,t,n,a,o,u),!0;case"mouseover":return ns=Xo(ns,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return ko.set(f,Xo(ko.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,jo.set(f,Xo(jo.get(f)||null,t,n,a,o,u)),!0}return!1}function Kg(t){var n=La(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,to(t.priority,function(){qg(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,to(t.priority,function(){qg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=gd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);gu=o,a.target.dispatchEvent(o),gu=null}else return n=Ua(a),n!==null&&Wg(n),t.blockedOn=a,!1;n.shift()}return!0}function Qg(t,n,a){gc(t)&&a.delete(n)}function dS(){xd=!1,es!==null&&gc(es)&&(es=null),ts!==null&&gc(ts)&&(ts=null),ns!==null&&gc(ns)&&(ns=null),ko.forEach(Qg),jo.forEach(Qg)}function _c(t,n){t.blockedOn===n&&(t.blockedOn=null,xd||(xd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,dS)))}var xc=null;function Jg(t){xc!==t&&(xc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){xc===t&&(xc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(_d(o||a)===null)continue;break}var f=Ua(a);f!==null&&(t.splice(n,3),n-=3,gf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Tr(t){function n(q){return _c(q,t)}es!==null&&_c(es,t),ts!==null&&_c(ts,t),ns!==null&&_c(ns,t),ko.forEach(n),jo.forEach(n);for(var a=0;a<is.length;a++){var o=is[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<is.length&&(a=is[0],a.blockedOn===null);)Kg(a),a.blockedOn===null&&is.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],x=u[Ln]||null;if(typeof f=="function")x||Jg(a);else if(x){var O=null;if(f&&f.hasAttribute("formAction")){if(u=f,x=f[Ln]||null)O=x.formAction;else if(_d(u)!==null)continue}else O=x.action;typeof O=="function"?a[o+1]=O:(a.splice(o,3),o-=3),Jg(a)}}}function $g(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function vd(t){this._internalRoot=t}vc.prototype.render=vd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=hi();jg(a,o,t,n,null,null)},vc.prototype.unmount=vd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;jg(t.current,2,null,t,null,null),$l(),n[na]=null}};function vc(t){this._internalRoot=t}vc.prototype.unstable_scheduleHydration=function(t){if(t){var n=eo();t={blockedOn:null,target:t,priority:n};for(var a=0;a<is.length&&n!==0&&n<is[a].priority;a++);is.splice(a,0,t),a===0&&Kg(t)}};var e_=e.version;if(e_!=="19.2.7")throw Error(s(527,e_,"19.2.7"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var hS={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yc.isDisabled&&yc.supportsFiber)try{pe=yc.inject(hS),me=yc}catch{}}return qo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=o0,f=l0,x=c0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Vg(t,1,!1,null,null,a,o,null,u,f,x,$g),t[na]=n.current,ed(t),new vd(n)},qo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",f=o0,x=l0,O=c0,q=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(O=a.onRecoverableError),a.formState!==void 0&&(q=a.formState)),n=Vg(t,1,!0,n,a??null,o,u,q,f,x,O,$g),n.context=kg(null),a=n.current,o=hi(),o=xs(o),u=Va(o),u.callback=null,ka(a,u,o),a=o,n.current.lanes=a,ct(n,a),Wi(n),t[na]=n.current,ed(t),new vc(n)},qo.version="19.2.7",qo}var u_;function MS(){if(u_)return bd.exports;u_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),bd.exports=bS(),bd.exports}var ES=MS();const Hr=[{id:"residential-low",name:"Low-Rise House",category:"Structures",color:"#8d6e63",secondaryColor:"#e0f2f1",gridWidth:1,gridLength:1,height:1.2,description:"Cozy suburban housing with an angled gabled roof."},{id:"skyscraper-modern",name:"Modern Skyscraper",category:"Structures",color:"#263238",secondaryColor:"#00e5ff",gridWidth:1,gridLength:1,height:4.5,emissiveColor:"#00e5ff",description:"A towering office cylinder with panoramic glass grids."},{id:"cyberpunk-tower",name:"Cyberpunk Tower",category:"Structures",color:"#1a1a24",secondaryColor:"#ec407a",gridWidth:1,gridLength:1,height:5.5,emissiveColor:"#ec407a",description:"A neon-lit megalithic tower with antenna transmitters."},{id:"factory",name:"Industrial Factory",category:"Structures",color:"#757575",secondaryColor:"#d84315",gridWidth:2,gridLength:1,height:2,emissiveColor:"#ffb300",description:"A heavy industrial facility with smoke vents and boilers."},{id:"power-plant",name:"Nuclear Reactor",category:"Structures",color:"#cfd8dc",secondaryColor:"#ff1744",gridWidth:2,gridLength:2,height:3.2,emissiveColor:"#00ff66",description:"A dual cooling tower array for clean grid generation."},{id:"bridge",name:"Suspension Bridge",category:"Structures",color:"#b0bec5",secondaryColor:"#01579b",gridWidth:1,gridLength:3,height:2.5,emissiveColor:"#00ffd8",description:"An elevated spanning bridge system."},{id:"hospital",name:"Medical Center",category:"Structures",color:"#ffffff",secondaryColor:"#f44336",gridWidth:2,gridLength:2,height:2.8,emissiveColor:"#f44336",description:"A high-capacity civic medical facility."},{id:"police-station",name:"Police Precinct",category:"Structures",color:"#1a237e",secondaryColor:"#29b6f6",gridWidth:1,gridLength:1,height:2.2,emissiveColor:"#29b6f6",description:"A structured local law enforcement headquarters."},{id:"supermarket",name:"Mega Mall",category:"Structures",color:"#fbc02d",secondaryColor:"#4caf50",gridWidth:2,gridLength:2,height:1.6,description:"A wide-spread shopping center with canopy glass fronts."},{id:"wind-turbine",name:"Wind Turbine",category:"Structures",color:"#eceff1",secondaryColor:"#78909c",gridWidth:1,gridLength:1,height:4.8,description:"Clean energy generation with revolving rotor design."},{id:"road-2lane",name:"Asphalt 2-Lane Road",category:"Infrastructure",color:"#37474f",secondaryColor:"#ffeb3b",gridWidth:1,gridLength:1,height:.05,isFloorTile:!0,description:"Standard roadway tile with dual safety dividers."},{id:"road-crossing",name:"4-Way Intersection",category:"Infrastructure",color:"#263238",secondaryColor:"#ffffff",gridWidth:1,gridLength:1,height:.05,isFloorTile:!0,description:"A fully signalized traffic connection node."},{id:"road-t-junction",name:"T-Junction Connection",category:"Infrastructure",color:"#263238",secondaryColor:"#ffffff",gridWidth:1,gridLength:1,height:.05,isFloorTile:!0,description:"A split highway junction connector."},{id:"train-tracks",name:"High-Speed Railway",category:"Infrastructure",color:"#4e342e",secondaryColor:"#90a4ae",gridWidth:1,gridLength:1,height:.1,isFloorTile:!0,description:"Ballasted train tracks supporting regional rail systems."},{id:"streetlight",name:"Eco Streetlight",category:"Infrastructure",color:"#455a64",secondaryColor:"#ffe082",gridWidth:1,gridLength:1,height:2,emissiveColor:"#ffeb3b",description:"A curved solar-powered lamppost casting cones of warm light."},{id:"power-grid-pole",name:"High-Voltage Utility Pole",category:"Infrastructure",color:"#5d4037",secondaryColor:"#cfd8dc",gridWidth:1,gridLength:1,height:3.5,description:"High tension electricity tower linking generator feeds."},{id:"park-grid",name:"Public Botanical Park",category:"Decor",color:"#2e7d32",secondaryColor:"#81c784",gridWidth:2,gridLength:2,height:.05,isFloorTile:!0,description:"A grassy city block with cobblestone walking trails."},{id:"oak-trees",name:"Oak Tree Cluster",category:"Decor",color:"#388e3c",secondaryColor:"#5d4037",gridWidth:1,gridLength:1,height:1.8,description:"Dense grouping of mature, shade-providing deciduous trees."},{id:"water-fountain",name:"Municipal Fountain",category:"Decor",color:"#b0bec5",secondaryColor:"#29b6f6",gridWidth:1,gridLength:1,height:.6,emissiveColor:"#00e5ff",description:"A tiered marble fountain with programmable aqua emitters."},{id:"parking-lot",name:"Commercial Parking Lot",category:"Decor",color:"#455a64",secondaryColor:"#ffffff",gridWidth:1,gridLength:1,height:.05,isFloorTile:!0,description:"Asphalt parking layout with white lines and wheel stops."},{id:"billboard-neon",name:"Dynamic Advertising Board",category:"Decor",color:"#212121",secondaryColor:"#aa00ff",gridWidth:1,gridLength:1,height:3.2,emissiveColor:"#aa00ff",description:"An elevated commercial panel projecting vibrant media."},{id:"river-flow",name:"Crystalline Cyber River",category:"Infrastructure",color:"#0d47a1",secondaryColor:"#00ffd8",gridWidth:1,gridLength:1,height:.05,isFloorTile:!0,emissiveColor:"#00b0ff",description:"A beautifully illuminated flowing river segment. Emits a cool aquatic neon glow."},{id:"ai-data-center",name:"Quantum AI Data Center",category:"Structures",color:"#1a1d24",secondaryColor:"#39ff14",gridWidth:2,gridLength:2,height:2.8,emissiveColor:"#30ffd8",description:"A state-of-the-art supercomputing facility packed with blinking mainframe racks and liquid cooling channels."},{id:"grand-hotel",name:"Apex Hotel Resort",category:"Structures",color:"#34495e",secondaryColor:"#ec008b",gridWidth:2,gridLength:2,height:5.2,emissiveColor:"#ff007f",description:"A luxurious multi-story hotel tower with glass-bottom infinity pool and spire neon displays."},{id:"neon-park",name:"Bioluminescent Zen Park",category:"Decor",color:"#1b5e20",secondaryColor:"#39ff14",gridWidth:2,gridLength:2,height:.1,isFloorTile:!0,emissiveColor:"#39ff14",description:"A recreational reserve featuring engineered flora that glows with gorgeous bio-luminescence at night."},{id:"rainbow-tree",name:"Neon Tree Sentinel",category:"Decor",color:"#2e303d",secondaryColor:"#e040fb",gridWidth:1,gridLength:1,height:2.2,emissiveColor:"#e040fb",description:"A modified specimen with colorful artificial light-reactive leaves that shine beautifully in the dark."}],Vr=[{id:"wall-concrete",name:"Concrete Exterior Wall",category:"Walls",color:"#90a4ae",gridWidth:1,gridLength:1,height:2.4,description:"Load-bearing concrete perimeter wall block."},{id:"wall-drywall",name:"Interior dry partition",category:"Walls",color:"#eceff1",gridWidth:1,gridLength:1,height:2.4,description:"Lightweight interior partition separating living spaces."},{id:"wall-window",name:"Windowed Wall Panel",category:"Walls",color:"#cfd8dc",secondaryColor:"#80deea",gridWidth:1,gridLength:1,height:2.4,description:"Steel framework with built-in thermal-insulated glass pane."},{id:"wall-archway",name:"Architectural Archway",category:"Walls",color:"#e0e0e0",gridWidth:1,gridLength:1,height:2.4,description:"An open-concept bricked architectural gateway."},{id:"wall-sliding-door",name:"Glass Sliding Door",category:"Walls",color:"#37474f",secondaryColor:"#e0f7fa",gridWidth:1,gridLength:1,height:2.4,description:"An elegant sliding patio entrance."},{id:"floor-hardwood",name:"Oak Hardwood Flooring",category:"Flooring",color:"#a1887f",secondaryColor:"#8d6e63",gridWidth:1,gridLength:1,height:.05,isFloorTile:!0,description:"Warm, interlocking natural oak wooden planks."},{id:"floor-tile",name:"Ceramic Grid Tile",category:"Flooring",color:"#e0e0e0",secondaryColor:"#bdbdbd",gridWidth:1,gridLength:1,height:.05,isFloorTile:!0,description:"High-durability grout lines and non-slip tiles."},{id:"floor-rug",name:"Sultana Area Rug",category:"Flooring",color:"#c62828",secondaryColor:"#fbc02d",gridWidth:2,gridLength:2,height:.06,isFloorTile:!0,description:"Ornate, high-pile decorative floor tapestry."},{id:"fixture-spotlight",name:"Ceiling Spotlight",category:"Fixtures",color:"#212121",secondaryColor:"#ffeb3b",gridWidth:1,gridLength:1,height:2.4,emissiveColor:"#ffea00",description:"Overhead recessed spotlight aiming sharp light indicators downwards."},{id:"fixture-sconce",name:"Wall Sconce Fixture",category:"Fixtures",color:"#757575",secondaryColor:"#ffb300",gridWidth:1,gridLength:1,height:1.5,emissiveColor:"#ffb300",description:"A wall-mounted ambient light casting an upwards wash glow."},{id:"fixture-counter",name:"Marble Kitchen Console",category:"Fixtures",color:"#f5f5f5",secondaryColor:"#424242",gridWidth:2,gridLength:1,height:.9,description:"Multi-functional island console with high-end integrated sink."},{id:"fixture-refrigerator",name:"Smart Refrigerator",category:"Fixtures",color:"#b0bec5",secondaryColor:"#00e5ff",gridWidth:1,gridLength:1,height:2,emissiveColor:"#00e5ff",description:"Double-french door tall silver cooling appliance."},{id:"fixture-toilet",name:"Porcelain Toiletry Unit",category:"Fixtures",color:"#ffffff",gridWidth:1,gridLength:1,height:.8,description:"Vitreous china plumbing fixture."},{id:"fixture-bathtub",name:"Deep-Soak Bathtub",category:"Fixtures",color:"#ffffff",secondaryColor:"#80deea",gridWidth:2,gridLength:1,height:.7,description:"Free-standing luxury ergonomic soaking tub."},{id:"fixture-tv",name:"Home Entertainment Hub",category:"Fixtures",color:"#212121",secondaryColor:"#455a64",gridWidth:2,gridLength:1,height:1.2,emissiveColor:"#29b6f6",description:"A wide solid wooden console carrying a thin glowing display panel."},{id:"furniture-sofa",name:"L-Shape Sectional Sofa",category:"Furniture",color:"#3e2723",secondaryColor:"#5d4037",gridWidth:2,gridLength:2,height:.8,description:"Expansive padded leather lounge modules with corner brackets."},{id:"furniture-table",name:"Mid-Century Dining Table",category:"Furniture",color:"#8d6e63",gridWidth:2,gridLength:1,height:.75,description:"Warm walnut breakfast table."},{id:"furniture-chair",name:"Ergonomic Task Chair",category:"Furniture",color:"#1565c0",secondaryColor:"#37474f",gridWidth:1,gridLength:1,height:1,description:"High-backed swivel chair with lumbar contour pads."},{id:"furniture-bookshelf",name:"Hardwood Library Tower",category:"Furniture",color:"#5d4037",secondaryColor:"#90caf9",gridWidth:1,gridLength:1,height:2.1,description:"Vertical shelving filled with assorted books and ornaments."},{id:"furniture-monstera",name:"Potted Broadleaf Monstera",category:"Furniture",color:"#1b5e20",secondaryColor:"#8d6e63",gridWidth:1,gridLength:1,height:1.2,description:"A lush potted houseplant with iconic leaf shapes."},{id:"furniture-coffee-table",name:"Minimalist Coffee Table",category:"Furniture",color:"#d7ccc8",secondaryColor:"#795548",gridWidth:1,gridLength:1,height:.45,description:"Low-profile circular tabletop resting on wooden legs."},{id:"furniture-bed",name:"Deluxe King Bed Unit",category:"Furniture",color:"#cfd8dc",secondaryColor:"#0d47a1",gridWidth:2,gridLength:2,height:.9,description:"Sturdy padded frame with memory foam mattress and soft pillows."}];/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),AS=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase()),f_=r=>{const e=AS(r);return e.charAt(0).toUpperCase()+e.slice(1)},wx=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim(),wS=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var RS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=nt.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:d,...h},m)=>nt.createElement("svg",{ref:m,...RS,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:wx("lucide",l),...!c&&!wS(h)&&{"aria-hidden":"true"},...h},[...d.map(([p,v])=>nt.createElement(p,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=(r,e)=>{const i=nt.forwardRef(({className:s,...l},c)=>nt.createElement(CS,{ref:c,iconNode:e,className:wx(`lucide-${TS(f_(r))}`,`lucide-${r}`,s),...l}));return i.displayName=f_(r),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],DS=tn("building-2",NS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],US=tn("circle-check-big",LS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],PS=tn("circle-question-mark",OS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],FS=tn("clock",IS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Rx=tn("compass",zS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]],d_=tn("eraser",BS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],HS=tn("eye",GS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],kS=tn("grid-3x3",VS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],XS=tn("info",jS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]],h_=tn("keyboard",WS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Cx=tn("layers",qS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],ZS=tn("layout-grid",YS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],QS=tn("maximize-2",KS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],$S=tn("menu",JS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]],tb=tn("minimize-2",eb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],ib=tn("moon",nb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]],p_=tn("mouse-pointer",ab);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],rb=tn("panels-top-left",sb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],lb=tn("plus",ob);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],m_=tn("rotate-cw",cb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],qc=tn("save",ub);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],db=tn("search",fb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],tp=tn("sparkles",hb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],mb=tn("sun",pb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],_b=tn("undo-2",gb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Nx=tn("x",xb),vb=({onSelectMode:r,savedCityCount:e,savedFloorCount:i,onClearSaved:s})=>U.jsxs("div",{id:"landing-gateway-outer",className:"w-full min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between p-6 relative overflow-hidden",children:[U.jsx("div",{className:"absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-900/15 rounded-full blur-[120px] pointer-events-none"}),U.jsx("div",{className:"absolute bottom-[-10%] right-[-15%] w-[50%] h-[50%] bg-indigo-900/15 rounded-full blur-[120px] pointer-events-none"}),U.jsxs("header",{className:"max-w-7xl w-full mx-auto flex items-center justify-between py-2 border-b border-wrap border-slate-900 z-10",children:[U.jsxs("div",{className:"flex items-center gap-2",children:[U.jsx(Cx,{className:"w-5 h-5 text-blue-500 animate-pulse"}),U.jsx("span",{className:"font-mono text-sm font-black tracking-widest text-slate-100 uppercase",children:"ArshVault"})]}),U.jsx("div",{className:"text-[10px] font-mono font-semibold bg-blue-950/80 border border-blue-900 text-blue-400 px-3 py-1.5 rounded-full uppercase tracking-wider",children:"v2.5 Live Web Engine"})]}),U.jsxs("main",{className:"max-w-4xl w-full mx-auto my-auto py-12 flex flex-col gap-12 z-10 text-center",children:[U.jsxs("div",{className:"space-y-4",children:[U.jsxs("h1",{className:"text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight",children:["Welcome to ",U.jsx("span",{className:"bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent",children:"ArshVault"})," ",U.jsx("br",{}),U.jsx("span",{className:"text-2xl md:text-3xl font-medium text-slate-300",children:"3D Blueprint Sandbox Planner"})]}),U.jsx("p",{className:"text-sm md:text-base text-slate-400 max-w-xl mx-auto leading-relaxed",children:"Construct macro structures or micro interiors on an interactive 2D coordinate system. Visualize your design instantly in a real-time, light-reactive 3D viewport."})]}),U.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto w-full",children:[U.jsxs("div",{className:"group rounded-2xl bg-slate-900 border border-slate-800/80 p-6 flex flex-col justify-between gap-6 transition-all hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/[0.04]",children:[U.jsxs("div",{className:"space-y-3",children:[U.jsx("div",{className:"p-3 w-fit rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-105 transition-transform duration-300",children:U.jsx(DS,{className:"w-6 h-6"})}),U.jsx("h2",{className:"text-xl font-bold text-white group-hover:text-blue-400 transition-colors",children:"City Planning Mode"}),U.jsx("p",{className:"text-xs text-slate-400 leading-relaxed font-mono",children:"Design macro-scale industrial centers, residential blocks, train networks, bridges, and street lighting. Best of all, activate Cyberpunk Night to watch tower neon lights glow."})]}),U.jsxs("div",{className:"space-y-3 pt-3 border-t border-slate-800",children:[U.jsxs("div",{className:"flex items-center justify-between text-xs font-mono",children:[U.jsx("span",{className:"text-slate-500",children:"SAVED ELEMENTS:"}),e>0?U.jsxs("span",{className:"text-emerald-400 font-bold flex items-center gap-1",children:[U.jsx(qc,{className:"w-3.5 h-3.5"}),e," UNITS DETECTED"]}):U.jsx("span",{className:"text-slate-600",children:"EMPTY DRAFT"})]}),U.jsxs("div",{className:"flex gap-2 font-mono",children:[U.jsx("button",{onClick:()=>r("city",!1),className:"flex-1 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs text-center transition-colors cursor-pointer block",children:"START FRESH"}),e>0&&U.jsx("button",{onClick:()=>r("city",!0),className:"py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-750 text-emerald-400 font-bold text-xs border border-slate-700 transition-colors cursor-pointer",title:"Load recent draft from localStorage",children:"LOAD RECENT"}),e>0&&U.jsx("button",{onClick:()=>s("city"),className:"px-2.5 py-2.5 rounded-xl bg-slate-950 hover:bg-rose-950 text-slate-600 hover:text-rose-400 text-xs transition-colors cursor-pointer",title:"Delete saved draft",children:"×"})]})]})]}),U.jsxs("div",{className:"group rounded-2xl bg-slate-900 border border-slate-800/80 p-6 flex flex-col justify-between gap-6 transition-all hover:border-indigo-500 hover:shadow-2xl hover:shadow-indigo-500/[0.04]",children:[U.jsxs("div",{className:"space-y-3",children:[U.jsx("div",{className:"p-3 w-fit rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:scale-105 transition-transform duration-300",children:U.jsx(rb,{className:"w-6 h-6"})}),U.jsx("h2",{className:"text-xl font-bold text-white group-hover:text-indigo-400 transition-colors",children:"Floor Planning Mode"}),U.jsx("p",{className:"text-xs text-slate-400 leading-relaxed font-mono",children:"Draft micro interior floorplans. Segment walls, arches, glass-sliding panels, and arrange sectional sofas, kitchen counters, bookshelf towers, and Monstera plants."})]}),U.jsxs("div",{className:"space-y-3 pt-3 border-t border-slate-800",children:[U.jsxs("div",{className:"flex items-center justify-between text-xs font-mono",children:[U.jsx("span",{className:"text-slate-500",children:"SAVED ELEMENTS:"}),i>0?U.jsxs("span",{className:"text-indigo-400 font-bold flex items-center gap-1",children:[U.jsx(qc,{className:"w-3.5 h-3.5"}),i," TILES DETECTED"]}):U.jsx("span",{className:"text-slate-600",children:"EMPTY DRAFT"})]}),U.jsxs("div",{className:"flex gap-2 font-mono",children:[U.jsx("button",{onClick:()=>r("floor",!1),className:"flex-1 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs text-center transition-all cursor-pointer",children:"START FRESH"}),i>0&&U.jsx("button",{onClick:()=>r("floor",!0),className:"py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-750 text-indigo-400 font-bold text-xs border border-slate-700 transition-colors cursor-pointer",title:"Load recent draft from localStorage",children:"LOAD RECENT"}),i>0&&U.jsx("button",{onClick:()=>s("floor"),className:"px-2.5 py-2.5 rounded-xl bg-slate-950 hover:bg-rose-950 text-slate-600 hover:text-rose-400 text-xs transition-colors cursor-pointer",title:"Delete saved draft",children:"×"})]})]})]})]}),U.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 text-left p-4 rounded-xl bg-slate-950 border border-slate-900 max-w-3xl mx-auto w-full font-mono text-[10.5px]",children:[U.jsxs("div",{className:"flex items-center gap-2",children:[U.jsx(FS,{className:"w-4 h-4 text-blue-400"}),U.jsxs("div",{className:"flex flex-col",children:[U.jsx("span",{className:"text-white font-bold uppercase",children:"Dynamic Sky"}),U.jsx("span",{className:"text-slate-500",children:"Midnight emission"})]})]}),U.jsxs("div",{className:"flex items-center gap-2",children:[U.jsx(tp,{className:"w-4 h-4 text-indigo-400"}),U.jsxs("div",{className:"flex flex-col",children:[U.jsx("span",{className:"text-white font-bold uppercase",children:"Chaos Engine"}),U.jsx("span",{className:"text-slate-500",children:"Generative layouts"})]})]}),U.jsxs("div",{className:"flex items-center gap-2",children:[U.jsx(Rx,{className:"w-4 h-4 text-cyan-400"}),U.jsxs("div",{className:"flex flex-col",children:[U.jsx("span",{className:"text-white font-bold uppercase",children:"Multi-Story"}),U.jsx("span",{className:"text-slate-500",children:"Layers 0, 1, 2 support"})]})]}),U.jsxs("div",{className:"flex items-center gap-2",children:[U.jsx(qc,{className:"w-4 h-4 text-emerald-400"}),U.jsxs("div",{className:"flex flex-col",children:[U.jsx("span",{className:"text-white font-bold uppercase",children:"Auto-Secure"}),U.jsx("span",{className:"text-slate-500 font-mono",children:"Browser LocalSync"})]})]})]})]}),U.jsx("footer",{className:"text-center font-mono text-[10px] text-slate-600 uppercase py-2 tracking-widest z-10",children:"ArshVault sandbox • Google AI Studio build • sandbox isolated"})]}),yb=({mode:r,environment:e,selectedFloorLevel:i,onSelectFloorLevel:s,onRandomize:l,onSave:c,onBackToLanding:d,saveStatus:h,gridSize:m,onSetGridSize:p})=>{const[v,S]=nt.useState(!1);return U.jsxs("header",{className:"w-full bg-slate-900 border-b border-slate-800 text-slate-100 px-4 py-3 flex flex-wrap items-center justify-between gap-3 shadow-md z-25 relative",children:[U.jsxs("div",{className:"flex items-center gap-3",children:[U.jsxs("button",{onClick:d,className:"p-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white border border-slate-700/60 transition-colors flex items-center justify-center gap-1.5 cursor-pointer text-xs font-mono font-bold",title:"Return to mode selection",children:[U.jsx(_b,{className:"w-3.5 h-3.5"}),U.jsx("span",{children:"LEAVE GATEWAY"})]}),U.jsx("div",{className:"h-6 w-[1px] bg-slate-850"}),U.jsx("div",{className:"flex items-center gap-2",children:U.jsxs("div",{className:"py-1 px-3 rounded-lg bg-blue-950/80 text-blue-400 border border-blue-800/85 text-xs font-mono font-extrabold flex items-center gap-1.5",children:[U.jsx("div",{className:"w-2 h-2 rounded-full bg-blue-400 animate-pulse"}),U.jsx("span",{children:r==="city"?"CITY PLANNER SANDBOX":"INTERIOR ARCHITECT FLOORPLAN"})]})})]}),U.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[U.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2",children:[U.jsx(Cx,{className:"w-4 h-4 text-blue-400"}),U.jsx("span",{className:"text-xs font-bold font-mono text-slate-400",children:"LAYER LEVEL:"}),U.jsx("div",{className:"flex gap-1",children:[0,1,2].map(g=>{const E=i===g;return U.jsx("button",{onClick:()=>s(g),className:`px-3 py-1 text-[11px] font-mono font-bold rounded-lg transition-all ${E?"bg-blue-600 text-white shadow-inner scale-102 border border-blue-400":"bg-slate-850 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-transparent"}`,children:g===0?"0 (Ground)":`Lvl ${g}`},g)})})]}),U.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3",children:[U.jsx(ZS,{className:"w-4 h-4 text-emerald-400"}),U.jsx("span",{className:"text-xs font-bold font-mono text-slate-400",children:"GRID SIZE:"}),U.jsxs("div",{className:"flex items-center gap-2",children:[U.jsx("input",{type:"range",min:"15",max:"45",step:"5",value:m,onChange:g=>p(Number(g.target.value)),className:"w-20 accent-emerald-500 h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer"}),U.jsx("span",{className:"text-xs font-bold font-mono text-emerald-400 min-w-[28px] text-right bg-slate-900 border border-slate-800 px-1.5 py-0.5 rounded",children:m})]})]})]}),U.jsxs("div",{className:"flex items-center gap-2",children:[U.jsxs("button",{onClick:()=>S(!0),className:"p-2.5 rounded-xl bg-slate-850 hover:bg-slate-800 border border-slate-800 hover:text-slate-250 transition-all font-mono text-xs flex items-center gap-1.5 font-bold cursor-pointer",children:[U.jsx(h_,{className:"w-4 h-4 text-slate-400"}),U.jsx("span",{children:"SHORTCUTS"})]}),U.jsxs("button",{onClick:l,id:"btn-chaos",className:"p-2.5 rounded-xl bg-indigo-950/80 hover:bg-indigo-900 border border-indigo-900 text-indigo-300 font-mono text-xs flex items-center justify-center gap-1.5 font-bold transition-all hover:scale-103 active:scale-97 cursor-pointer",title:"Procedural Generative Chaos Spawning",children:[U.jsx(tp,{className:"w-4 h-4 text-indigo-400 animate-spin",style:{animationDuration:"3s"}}),U.jsx("span",{children:"CHAOS SPARK"})]}),U.jsx("button",{onClick:c,id:"btn-save-blueprint",className:`p-2.5 rounded-xl border font-mono text-xs flex items-center justify-center gap-1.5 font-bold transition-all hover:scale-103 active:scale-97 cursor-pointer ${h==="saved"?"bg-emerald-950/80 border-emerald-500 text-emerald-400":"bg-blue-600 hover:bg-blue-500 border-blue-400 text-white shadow-md"}`,children:h==="saved"?U.jsxs(U.Fragment,{children:[U.jsx(US,{className:"w-4 h-4 text-emerald-400 animate-bounce"}),U.jsx("span",{children:"SAVED!"})]}):U.jsxs(U.Fragment,{children:[U.jsx(qc,{className:"w-3.5 h-3.5 text-white"}),U.jsx("span",{children:"SAVE BLUEPRINT"})]})})]}),v&&U.jsx("div",{className:"fixed inset-0 bg-slate-950/75 flex items-center justify-center z-50 p-4 backdrop-blur-sm",children:U.jsxs("div",{className:"w-full max-w-md bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl p-6 relative overflow-hidden flex flex-col gap-4",children:[U.jsx("button",{onClick:()=>S(!1),className:"absolute top-4 right-4 text-slate-400 hover:text-white transition-colors cursor-pointer",children:U.jsx(Nx,{className:"w-5 h-5"})}),U.jsxs("div",{className:"flex items-center gap-2.5 border-b border-slate-800 pb-3",children:[U.jsx(h_,{className:"w-5 h-5 text-blue-400"}),U.jsx("h3",{className:"font-mono font-bold text-base text-slate-100",children:"Blueprint Shortcut Keys"})]}),U.jsxs("div",{className:"space-y-2.5 font-mono text-[11.5px] text-slate-300",children:[U.jsxs("div",{className:"flex justify-between items-center bg-slate-950/60 p-2 rounded border border-slate-850",children:[U.jsx("span",{children:"ROTATE PLACING PLACEMENT:"}),U.jsx("kbd",{className:"px-2 py-0.5 rounded bg-slate-800 text-amber-400 font-bold border border-slate-700",children:"R"})]}),U.jsxs("div",{className:"flex justify-between items-center bg-slate-950/60 p-2 rounded border border-slate-850",children:[U.jsx("span",{children:"INSPECT TOOL DIRECTIVE:"}),U.jsx("kbd",{className:"px-2 py-0.5 rounded bg-slate-800 text-blue-400 font-bold border border-slate-700",children:"1"})]}),U.jsxs("div",{className:"flex justify-between items-center bg-slate-950/60 p-2 rounded border border-slate-850",children:[U.jsx("span",{children:"PLACE GHOST POINTER:"}),U.jsx("kbd",{className:"px-2 py-0.5 rounded bg-slate-800 text-emerald-400 font-bold border border-slate-700",children:"2"})]}),U.jsxs("div",{className:"flex justify-between items-center bg-slate-950/60 p-2 rounded border border-slate-850",children:[U.jsx("span",{children:"ROTATE ROTATE CELL TOOL:"}),U.jsx("kbd",{className:"px-2 py-0.5 rounded bg-slate-800 text-amber-400 font-bold border border-slate-700",children:"3"})]}),U.jsxs("div",{className:"flex justify-between items-center bg-slate-950/60 p-2 rounded border border-slate-850",children:[U.jsx("span",{children:"ERASER DEMOLITION TOOL:"}),U.jsx("kbd",{className:"px-2 py-0.5 rounded bg-slate-800 text-rose-400 font-bold border border-slate-700",children:"4"})]}),U.jsxs("div",{className:"flex justify-between items-center bg-slate-950/60 p-2 rounded border border-slate-850",children:[U.jsx("span",{children:"SPARK CHAOS LAYOUT:"}),U.jsx("kbd",{className:"px-2 py-0.5 rounded bg-slate-800 text-indigo-400 font-bold border border-slate-700",children:"C"})]}),U.jsxs("div",{className:"flex justify-between items-center bg-slate-950/60 p-2 rounded border border-slate-850",children:[U.jsx("span",{children:"SAVE BLUEPRINT PAYLOAD:"}),U.jsx("kbd",{className:"px-2 py-0.5 rounded bg-slate-800 text-emerald-400 font-bold border border-slate-700",children:"S"})]}),U.jsxs("div",{className:"flex justify-between items-center bg-slate-950/60 p-2 rounded border border-slate-850",children:[U.jsx("span",{children:"DISMISS ELEMENT FOCUS:"}),U.jsx("kbd",{className:"px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-bold border border-slate-700",children:"ESC"})]}),U.jsxs("div",{className:"flex justify-between items-center bg-slate-950/60 p-2 rounded border border-slate-850",children:[U.jsx("span",{children:"CYCLE FLOOR VERTICAL:"}),U.jsx("kbd",{className:"px-2 py-0.5 rounded bg-slate-800 text-cyan-400 font-bold border border-slate-700",children:"F"})]})]}),U.jsx("p",{className:"text-[10px] text-slate-500 italic text-center font-mono pt-1",children:"Press any of these triggers anywhere on the planner viewport to accelerate."})]})})]})},g_=({mode:r,activeTool:e,onChangeActiveTool:i,selectedItemDef:s,onSelectItemDef:l,placedRotation:c,onRotatePlacedItem:d,selectedEntity:h,selectedEntityDef:m,onClearSelection:p,onRemoveEntity:v,onUpdateEntityStoreys:S,placingStoreys:g=10,onSetPlacingStoreys:E})=>{const[w,P]=nt.useState(""),[b,y]=nt.useState("All"),C=r==="city"?Hr:Vr,B=["All",...Array.from(new Set(C.map(F=>F.category)))],I=C.filter(F=>{const k=F.name.toLowerCase().includes(w.toLowerCase())||F.description.toLowerCase().includes(w.toLowerCase()),_=b==="All"||F.category===b;return k&&_}),W=F=>`${Math.round(F*180/Math.PI)%360}°`;return U.jsxs("div",{className:"w-full h-full flex flex-col bg-slate-900 border-r border-slate-800 text-slate-100 divide-y divide-slate-800/80",children:[U.jsxs("div",{className:"p-4 space-y-3",children:[U.jsx("h3",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 font-mono",children:"PRIMARY ACTION ACTIONS"}),U.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[U.jsxs("button",{onClick:()=>i("inspect"),id:"tool-inspect",className:`p-2.5 rounded-xl border flex flex-col items-center gap-1.5 transition-all text-xs font-medium font-mono ${e==="inspect"?"bg-blue-600 border-blue-400 text-white shadow-md scale-102":"bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800 hover:text-white"}`,children:[U.jsx(p_,{className:"w-4 h-4"}),U.jsx("span",{children:"INSPECT"})]}),U.jsxs("button",{onClick:()=>{i("place"),!s&&C.length>0&&l(C[0])},id:"tool-place",className:`p-2.5 rounded-xl border flex flex-col items-center gap-1.5 transition-all text-xs font-medium font-mono ${e==="place"?"bg-emerald-600 border-emerald-400 text-white shadow-md scale-102":"bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800 hover:text-white"}`,children:[U.jsx(lb,{className:"w-4 h-4"}),U.jsx("span",{children:"PLACE ITEM"})]}),U.jsxs("button",{onClick:()=>i("rotate"),id:"tool-rotate",className:`p-2.5 rounded-xl border flex flex-col items-center gap-1.5 transition-all text-xs font-medium font-mono ${e==="rotate"?"bg-amber-600 border-amber-400 text-white shadow-md scale-102":"bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800 hover:text-white"}`,children:[U.jsx(m_,{className:"w-4 h-4"}),U.jsx("span",{children:"ROTATE CELL"})]}),U.jsxs("button",{onClick:()=>i("eraser"),id:"tool-eraser",className:`p-2.5 rounded-xl border flex flex-col items-center gap-1.5 transition-all text-xs font-medium font-mono ${e==="eraser"?"bg-rose-600 border-rose-400 text-white shadow-md scale-102":"bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800 hover:text-white"}`,children:[U.jsx(d_,{className:"w-4 h-4"}),U.jsx("span",{children:"ERASER"})]})]})]}),e==="place"&&s&&U.jsxs("div",{className:"p-4 bg-slate-900/60 space-y-4",children:[U.jsxs("div",{className:"flex items-center justify-between",children:[U.jsx("span",{className:"text-xs font-mono font-medium text-slate-300",children:"PLACEMENT ROTATION"}),U.jsx("span",{className:"text-xs font-mono font-bold text-amber-400 px-2 py-0.5 rounded bg-slate-850 border border-slate-800/80",children:W(c)})]}),U.jsxs("button",{onClick:d,id:"btn-rotate-preplace",className:"w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 text-xs font-mono font-semibold text-slate-100 hover:text-white flex items-center justify-center gap-2 transition-all active:scale-98",children:[U.jsx(m_,{className:"w-3.5 h-3.5 text-amber-400"}),U.jsx("span",{children:"ROTATE SELECTED ITEM (R)"})]}),s.category==="Structures"&&U.jsxs("div",{className:"space-y-2 pt-3 border-t border-slate-800/60",children:[U.jsxs("div",{className:"flex items-center justify-between",children:[U.jsx("span",{className:"text-[10.5px] font-mono font-medium text-slate-300 uppercase tracking-wide",children:"BUILDING STOREYS (Height)"}),U.jsxs("span",{className:"text-xs font-mono font-extrabold text-cyan-400 px-2 py-0.5 rounded bg-slate-950 border border-slate-850",children:[g," F"]})]}),U.jsx("input",{type:"range",min:"0",max:"90",value:g,onChange:F=>E==null?void 0:E(parseInt(F.target.value,10)),className:"w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-500"}),U.jsxs("div",{className:"flex justify-between text-[9px] font-mono text-slate-500",children:[U.jsx("span",{children:"0 F (Flat footprint)"}),U.jsx("span",{children:"45 F"}),U.jsx("span",{children:"90 F (Skyline tower)"})]})]})]}),e==="place"?U.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden",children:[U.jsx("div",{className:"p-4 pb-2",children:U.jsxs("div",{className:"relative",children:[U.jsx(db,{className:"absolute left-3 top-2.5 w-4 h-4 text-slate-500"}),U.jsx("input",{type:"text",value:w,onChange:F=>P(F.target.value),placeholder:"Search blueprints...",className:"w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs placeholder-slate-500 text-slate-100 focus:outline-none focus:border-blue-500 transition-colors"})]})}),U.jsx("div",{className:"flex gap-1.5 px-4 overflow-x-auto py-2 scrollbar-none border-b border-slate-850",children:B.map(F=>U.jsx("button",{onClick:()=>y(F),className:`px-3 py-1 rounded-full text-[10px] font-mono font-bold whitespace-nowrap transition-colors uppercase tracking-wider ${b===F?"bg-blue-600 text-white":"bg-slate-800 text-slate-400 hover:bg-slate-750 hover:text-slate-200"}`,children:F},F))}),U.jsx("div",{className:"flex-1 overflow-y-auto p-4 space-y-2.5 custom-scrollbar",children:I.length>0?I.map(F=>{const k=(s==null?void 0:s.id)===F.id;return U.jsxs("button",{onClick:()=>l(F),className:`w-full text-left p-3 rounded-xl border flex items-start gap-3 transition-all ${k?"bg-blue-950/40 border-blue-500/80 ring-1 ring-blue-500/50 shadow-md":"bg-slate-850/60 border-slate-800 hover:bg-slate-800 hover:border-slate-700"}`,children:[U.jsxs("div",{className:"w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border border-white/10 shadow-inner relative overflow-hidden",style:{backgroundColor:F.color},children:[F.secondaryColor&&U.jsx("div",{className:"w-5 h-5 absolute bottom-0 right-0 rounded-tl-lg",style:{backgroundColor:F.secondaryColor}}),U.jsx(kS,{className:"w-4 h-4 text-white/40 mix-blend-overlay"})]}),U.jsxs("div",{className:"flex-1 min-w-0 space-y-1",children:[U.jsxs("div",{className:"flex items-center justify-between gap-1.5",children:[U.jsx("span",{className:"font-semibold text-xs text-slate-100 truncate",children:F.name}),U.jsxs("span",{className:"text-[10px] font-mono font-bold bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded shrink-0",children:[F.gridWidth,"x",F.gridLength]})]}),U.jsx("p",{className:"text-[10.5px] text-slate-400 line-clamp-2 leading-relaxed",children:F.description})]})]},F.id)}):U.jsxs("div",{className:"flex flex-col items-center justify-center py-10 text-center space-y-2",children:[U.jsx(PS,{className:"w-8 h-8 text-slate-600 animate-pulse"}),U.jsx("span",{className:"text-xs text-slate-500 font-mono",children:"No matching elements found"})]})})]}):U.jsxs("div",{className:"flex-1 flex flex-col justify-between overflow-hidden",children:[U.jsxs("div",{className:"p-4 space-y-4 overflow-y-auto",children:[U.jsxs("h3",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2",children:[U.jsx(XS,{className:"w-3.5 h-3.5 text-blue-400"}),U.jsx("span",{children:"Inspector Module"})]}),h?U.jsxs("div",{className:"space-y-4",children:[U.jsxs("div",{className:"p-3.5 rounded-xl border border-slate-800 bg-slate-850/60 flex items-center gap-3",children:[U.jsx("div",{className:"w-12 h-12 rounded-lg shrink-0 flex items-center justify-center border border-white/10",style:{backgroundColor:(m==null?void 0:m.color)||"#334155"},children:U.jsx("div",{className:"w-5 h-5 bg-white/20 rounded rotate-12"})}),U.jsxs("div",{className:"space-y-0.5",children:[U.jsx("h4",{className:"font-bold text-sm text-slate-100",children:(m==null?void 0:m.name)||"Placed Object"}),U.jsxs("span",{className:"text-[9.5px] font-mono font-bold bg-blue-650 text-blue-200 px-2 py-0.5 rounded uppercase",children:["ID: ",h.id.substring(0,8)]})]})]}),U.jsxs("div",{className:"space-y-2 font-mono text-[11px] bg-slate-950 p-3.5 rounded-xl border border-slate-850 leading-relaxed text-slate-300",children:[U.jsxs("div",{className:"flex justify-between border-b border-slate-900 pb-1.5",children:[U.jsx("span",{className:"text-slate-500",children:"CATEGORY:"}),U.jsx("span",{className:"font-bold text-slate-200",children:(m==null?void 0:m.category)||"General"})]}),U.jsxs("div",{className:"flex justify-between border-b border-slate-900 py-1.5",children:[U.jsx("span",{className:"text-slate-500",children:"DIMENSION FOOTPRINT:"}),U.jsxs("span",{className:"font-bold text-slate-200",children:[m==null?void 0:m.gridWidth," x ",m==null?void 0:m.gridLength," grid"]})]}),U.jsxs("div",{className:"flex justify-between border-b border-slate-900 py-1.5",children:[U.jsx("span",{className:"text-slate-500",children:"GRID LOCATION:"}),U.jsxs("span",{className:"font-bold text-emerald-400",children:["[",h.gridX,", ",h.gridZ,"]"]})]}),U.jsxs("div",{className:"flex justify-between border-b border-slate-900 py-1.5",children:[U.jsx("span",{className:"text-slate-500",children:"VERTICAL LAYER:"}),U.jsxs("span",{className:"font-bold text-cyan-400",children:["Floor level (Lvl ",h.floorLevel,")"]})]}),h.storeys!==void 0&&U.jsxs("div",{className:"flex justify-between border-b border-slate-900 py-1.5",children:[U.jsx("span",{className:"text-slate-500",children:"HEIGHT CAPACITY:"}),U.jsxs("span",{className:"font-bold text-cyan-400",children:[h.storeys," Storeys (F)"]})]}),U.jsxs("div",{className:"flex justify-between pt-1.5",children:[U.jsx("span",{className:"text-slate-500",children:"ORIENTATION:"}),U.jsx("span",{className:"font-bold text-yellow-400",children:W(h.rotation)})]})]}),(m==null?void 0:m.category)==="Structures"&&U.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-xl border border-slate-850 space-y-2.5",children:[U.jsxs("div",{className:"flex items-center justify-between",children:[U.jsx("span",{className:"text-[10.5px] font-mono font-medium text-slate-300 uppercase tracking-wide",children:"AMEND HEIGHT (0 - 90 F)"}),U.jsxs("span",{className:"text-xs font-mono font-extrabold text-cyan-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800",children:[h.storeys!==void 0?h.storeys:10," F"]})]}),U.jsx("input",{type:"range",min:"0",max:"90",value:h.storeys!==void 0?h.storeys:10,onChange:F=>{const k=parseInt(F.target.value,10);S==null||S(h.id,k)},className:"w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"}),U.jsxs("div",{className:"flex justify-between text-[9px] font-mono text-slate-500",children:[U.jsx("span",{children:"0 F (Pavement)"}),U.jsx("span",{children:"45 F"}),U.jsx("span",{children:"90 F (Apex peak)"})]})]}),U.jsxs("div",{className:"p-3 bg-slate-850/40 rounded-xl text-neutral-400 text-xs leading-relaxed border border-slate-800",children:[U.jsx("span",{className:"font-bold text-neutral-300 block mb-1",children:"Description:"}),(m==null?void 0:m.description)||"Placed decorative blueprint asset in focus."]}),U.jsxs("button",{onClick:()=>{v(h.id),p()},id:"btn-remove-selected-entity",className:"w-full py-2.5 px-4 rounded-xl bg-rose-950/40 border border-rose-900/50 hover:bg-rose-900 text-rose-200 font-mono font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer",children:[U.jsx(d_,{className:"w-4 h-4 text-rose-400"}),U.jsx("span",{children:"DEMOLISH ELEMENT"})]})]}):U.jsxs("div",{className:"p-8 text-center bg-slate-950 rounded-xl border border-slate-850 flex flex-col items-center gap-2.5",children:[U.jsx(p_,{className:"w-6 h-6 text-slate-600 animate-bounce"}),U.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed max-w-[200px]",children:["No item currently in focus. Switch to"," ",U.jsx("span",{className:"text-amber-400 font-bold",children:"INSPECT"})," tool and click a cell on the grid."]}),U.jsx("button",{onClick:()=>i("inspect"),className:"mt-1.5 px-3 py-1.5 bg-slate-850 hover:bg-slate-800 border border-slate-700 text-[10.5px] rounded-lg font-mono font-bold",children:"Toggle Inspect View"})]})]}),U.jsxs("div",{className:"p-4 bg-slate-950/45 text-slate-500 text-[10px] leading-relaxed select-none font-mono",children:["• Close selection, inspect other components, or press"," ",U.jsx("span",{className:"text-slate-300",children:"ESC"})," to dismiss."]})]})]})},__=({entities:r,mode:e,environment:i,selectedEntityId:s,onSelectEntity:l,selectedFloorLevel:c,activeTool:d,selectedItemDef:h,placedRotation:m,onAddEntity:p,onRemoveEntity:v,onUpdateEntityRotation:S,gridSize:g=30})=>{const E=nt.useRef(null),w=nt.useRef(null),[P,b]=nt.useState(null),[y,C]=nt.useState({size:450}),B=e==="city"?Hr:Vr;nt.useEffect(()=>{if(!E.current)return;const k=new ResizeObserver(_=>{if(!_||_.length===0)return;const M=_[0].contentRect,R=Math.max(Math.min(M.width,M.height)-12,280);C({size:R})});return k.observe(E.current),()=>k.disconnect()},[]),nt.useEffect(()=>{const k=w.current;if(!k)return;const _=k.getContext("2d");if(!_)return;const M=y.size,R=window.devicePixelRatio||1;k.width=M*R,k.height=M*R,k.style.width=`${M}px`,k.style.height=`${M}px`,_.scale(R,R);const T=24,D=M-T*2,H=D/g;i==="day"?(_.fillStyle="#ffffff",_.fillRect(0,0,M,M),_.fillStyle="#f0f4f8",_.fillRect(T,T,D,D)):(_.fillStyle="#060a14",_.fillRect(0,0,M,M),_.fillStyle="#0a101f",_.fillRect(T,T,D,D)),_.lineWidth=.5;const X=i==="night";_.strokeStyle=X?"#1e293b":"#cbd5e1";for(let N=0;N<=g;N++){const G=T+N*H;_.beginPath(),_.moveTo(G,T),_.lineTo(G,T+D),_.stroke(),_.beginPath(),_.moveTo(T,G),_.lineTo(T+D,G),_.stroke()}_.font='10px "JetBrains Mono", monospace',_.textAlign="center",_.textBaseline="middle",_.fillStyle=X?"#94a3b8":"#475569";const j=g<=15?2:5;for(let N=0;N<=g;N+=j){if(N>g)continue;const G=N===g?g-1:N,Y=T+N*H;_.fillText(G.toString(),Y,T-12),_.fillText(G.toString(),T-12,Y)}if(r.forEach(N=>{const G=B.find(se=>se.id===N.type);if(!G)return;const Y=N.floorLevel===c,ae=N.floorLevel<c;if(!Y&&!ae)return;_.save();const de=Y?1:.28;_.globalAlpha=de;const V=T+N.gridX*H,J=T+N.gridZ*H,xe=N.id===s,ve=G.gridWidth*H,Te=G.gridLength*H;if(_.translate(V+ve/2,J+Te/2),_.rotate(N.rotation),Y){_.fillStyle=G.color,_.fillRect(-ve/2+1,-Te/2+1,ve-2,Te-2),G.secondaryColor&&(_.fillStyle=G.secondaryColor,_.fillRect(-ve*.25,-Te*.25,ve*.5,Te*.5)),xe&&(_.strokeStyle="#0284c7",_.lineWidth=2.5,_.strokeRect(-ve/2+2,-Te/2+2,ve-4,Te-4),_.fillStyle="#0284c7",_.beginPath(),_.arc(0,0,4,0,Math.PI*2),_.fill()),_.fillStyle=X?"#ffffff":"#222222",_.beginPath(),_.moveTo(0,-Te/2+2),_.lineTo(-4,-Te/2+8),_.lineTo(4,-Te/2+8),_.closePath(),_.fill(),_.fillStyle=X?"rgba(255, 255, 255, 0.7)":"rgba(0, 0, 0, 0.8)",_.font='8px "Inter", sans-serif';const se=G.name.substring(0,7)+(N.storeys!==void 0?` (${N.storeys}F)`:".");_.fillText(se,0,Te/2-8)}else _.strokeStyle=X?"#475569":"#94a3b8",_.lineWidth=1,_.setLineDash([4,4]),_.strokeRect(-ve/2+2,-Te/2+2,ve-4,Te-4),_.fillStyle=X?"rgba(71,85,105,0.2)":"rgba(148,163,184,0.15)",_.fillRect(-ve/2+2,-Te/2+2,ve-4,Te-4);_.restore()}),d==="place"&&P&&h){const{x:N,z:G}=P;if(N>=0&&N<g&&G>=0&&G<g){const Y=h.gridWidth,ae=h.gridLength,de=N+Y<=g&&G+ae<=g;_.save(),_.globalAlpha=.52;const V=T+N*H,J=T+G*H;_.translate(V+Y*H/2,J+ae*H/2),_.rotate(m),de?(_.fillStyle=h.color,_.fillRect(-Y*H/2+1,-ae*H/2+1,Y*H-2,ae*H-2),_.strokeStyle="#10b981",_.lineWidth=2,_.strokeRect(-Y*H/2+2,-ae*H/2+2,Y*H-4,ae*H-4)):(_.fillStyle="#ef4444",_.fillRect(-Y*H/2+1,-ae*H/2+1,Y*H-2,ae*H-2)),_.restore()}}},[y,r,c,i,P,d,h,m,s,g]);const I=k=>{const _=w.current;if(!_)return;const M=_.getBoundingClientRect(),R=y.size,T=24,D=R-T*2,H=D/g,X=k.clientX-M.left,j=k.clientY-M.top;if(X<T||X>T+D||j<T||j>T+D){l(null);return}const N=Math.floor((X-T)/H),G=Math.floor((j-T)/H);if(N<0||N>=g||G<0||G>=g)return;const Y=r.find(ae=>{var de,V;return ae.floorLevel===c&&N>=ae.gridX&&N<ae.gridX+(((de=B.find(J=>J.id===ae.type))==null?void 0:de.gridWidth)||1)&&G>=ae.gridZ&&G<ae.gridZ+(((V=B.find(J=>J.id===ae.type))==null?void 0:V.gridLength)||1)});if(d==="place"){if(!h||!(N+h.gridWidth<=g&&G+h.gridLength<=g))return;Y&&v(Y.id),p({type:h.id,gridX:N,gridZ:G,floorLevel:c,rotation:m})}else if(d==="eraser")Y&&v(Y.id);else if(d==="rotate"){if(Y){const ae=(Y.rotation+Math.PI/2)%(Math.PI*2);S(Y.id,ae)}}else d==="inspect"&&l(Y?Y.id:null)},W=k=>{const _=w.current;if(!_)return;const M=_.getBoundingClientRect(),R=24,T=y.size-R*2,D=T/g,H=k.clientX-M.left,X=k.clientY-M.top;if(H<R||H>R+T||X<R||X>R+T){b(null);return}const j=Math.floor((H-R)/D),N=Math.floor((X-R)/D);b({x:j,z:N})},F=()=>{b(null)};return U.jsxs("div",{ref:E,id:"twod-canvas-container",className:"w-full h-full flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 p-2 relative select-none",children:[U.jsxs("div",{className:"absolute top-2 left-6 px-3 py-1.5 rounded-full bg-slate-900/85 text-white shadow-md z-10 text-[10px] font-mono flex items-center gap-2 border border-slate-700/50 backdrop-blur",children:[U.jsx(HS,{className:"w-3.5 h-3.5 text-blue-400"}),U.jsx("span",{children:"EDITING FLOOR LEVEL:"}),U.jsx("span",{className:"font-bold text-cyan-400",children:c})]}),U.jsx("div",{className:"flex-1 flex items-center justify-center w-full",children:U.jsx("canvas",{ref:w,onMouseMove:W,onMouseLeave:F,onClick:I,className:"border-2 border-slate-300 dark:border-slate-800 rounded-xl shadow-lg cursor-crosshair max-w-full max-h-full"})}),U.jsxs("div",{className:"mt-1 flex items-center gap-3 text-[10.5px] font-mono text-slate-500 dark:text-slate-400",children:[U.jsxs("div",{className:"flex items-center gap-1",children:[U.jsx("span",{className:"w-2.5 h-2.5 bg-emerald-400 border border-slate-300 rounded"}),U.jsx("span",{children:"Fitted preview"})]}),U.jsxs("div",{className:"flex items-center gap-1",children:[U.jsx("span",{className:"w-2.5 h-2.5 bg-red-400 border border-slate-300 rounded"}),U.jsx("span",{children:"Collision / Out of bounds"})]}),U.jsxs("div",{className:"flex items-center gap-1",children:[U.jsx("span",{className:"w-2.5 h-2.5 bg-slate-400 border border-dashed border-slate-500 rounded"}),U.jsx("span",{children:"Lower Floor Trace"})]})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const np="184",kr={ROTATE:0,DOLLY:1,PAN:2},Gr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Sb=0,x_=1,bb=2,Yc=1,Dx=2,nl=3,ps=0,ii=1,gi=2,Aa=0,jr=1,v_=2,y_=3,S_=4,Mb=5,Hs=100,Eb=101,Tb=102,Ab=103,wb=104,Rb=200,Cb=201,Nb=202,Db=203,oh=204,lh=205,Lb=206,Ub=207,Ob=208,Pb=209,Ib=210,Fb=211,zb=212,Bb=213,Gb=214,ch=0,uh=1,fh=2,Wr=3,dh=4,hh=5,ph=6,mh=7,Lx=0,Hb=1,Vb=2,Ji=0,Ux=1,Ox=2,Px=3,Ix=4,Fx=5,zx=6,Bx=7,Gx=300,Ws=301,qr=302,Ad=303,wd=304,fu=306,gh=1e3,Ta=1001,_h=1002,Fn=1003,kb=1004,Sc=1005,kn=1006,Rd=1007,js=1008,_i=1009,Hx=1010,Vx=1011,rl=1012,ip=1013,ea=1014,Ki=1015,Ra=1016,ap=1017,sp=1018,ol=1020,kx=35902,jx=35899,Xx=1021,Wx=1022,Hi=1023,Ca=1026,Xs=1027,qx=1028,rp=1029,qs=1030,op=1031,lp=1033,Zc=33776,Kc=33777,Qc=33778,Jc=33779,xh=35840,vh=35841,yh=35842,Sh=35843,bh=36196,Mh=37492,Eh=37496,Th=37488,Ah=37489,tu=37490,wh=37491,Rh=37808,Ch=37809,Nh=37810,Dh=37811,Lh=37812,Uh=37813,Oh=37814,Ph=37815,Ih=37816,Fh=37817,zh=37818,Bh=37819,Gh=37820,Hh=37821,Vh=36492,kh=36494,jh=36495,Xh=36283,Wh=36284,nu=36285,qh=36286,jb=3200,Yh=0,Xb=1,ds="",Ri="srgb",iu="srgb-linear",au="linear",qt="srgb",Ar=7680,b_=519,Wb=512,qb=513,Yb=514,cp=515,Zb=516,Kb=517,up=518,Qb=519,M_=35044,E_="300 es",Qi=2e3,ll=2001;function Jb(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function su(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function $b(){const r=su("canvas");return r.style.display="block",r}const T_={};function A_(...r){const e="THREE."+r.shift();console.log(e,...r)}function Yx(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function lt(...r){r=Yx(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function Lt(...r){r=Yx(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function Zh(...r){const e=r.join(" ");e in T_||(T_[e]=!0,lt(...r))}function eM(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const tM={[ch]:uh,[fh]:ph,[dh]:mh,[Wr]:hh,[uh]:ch,[ph]:fh,[mh]:dh,[hh]:Wr};class _s{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$c=Math.PI/180,Kh=180/Math.PI;function cl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Hn[r&255]+Hn[r>>8&255]+Hn[r>>16&255]+Hn[r>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[i&63|128]+Hn[i>>8&255]+"-"+Hn[i>>16&255]+Hn[i>>24&255]+Hn[s&255]+Hn[s>>8&255]+Hn[s>>16&255]+Hn[s>>24&255]).toLowerCase()}function wt(r,e,i){return Math.max(e,Math.min(i,r))}function nM(r,e){return(r%e+e)%e}function Cd(r,e,i){return(1-i)*r+i*e}function Yo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ti(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const iM={DEG2RAD:$c},xp=class xp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=wt(this.x,e.x,i.x),this.y=wt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=wt(this.x,e,i),this.y=wt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(wt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(wt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*l+e.x,this.y=c*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xp.prototype.isVector2=!0;let ht=xp;class ms{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,d,h){let m=s[l+0],p=s[l+1],v=s[l+2],S=s[l+3],g=c[d+0],E=c[d+1],w=c[d+2],P=c[d+3];if(S!==P||m!==g||p!==E||v!==w){let b=m*g+p*E+v*w+S*P;b<0&&(g=-g,E=-E,w=-w,P=-P,b=-b);let y=1-h;if(b<.9995){const C=Math.acos(b),B=Math.sin(C);y=Math.sin(y*C)/B,h=Math.sin(h*C)/B,m=m*y+g*h,p=p*y+E*h,v=v*y+w*h,S=S*y+P*h}else{m=m*y+g*h,p=p*y+E*h,v=v*y+w*h,S=S*y+P*h;const C=1/Math.sqrt(m*m+p*p+v*v+S*S);m*=C,p*=C,v*=C,S*=C}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=S}static multiplyQuaternionsFlat(e,i,s,l,c,d){const h=s[l],m=s[l+1],p=s[l+2],v=s[l+3],S=c[d],g=c[d+1],E=c[d+2],w=c[d+3];return e[i]=h*w+v*S+m*E-p*g,e[i+1]=m*w+v*g+p*S-h*E,e[i+2]=p*w+v*E+h*g-m*S,e[i+3]=v*w-h*S-m*g-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(s/2),v=h(l/2),S=h(c/2),g=m(s/2),E=m(l/2),w=m(c/2);switch(d){case"XYZ":this._x=g*v*S+p*E*w,this._y=p*E*S-g*v*w,this._z=p*v*w+g*E*S,this._w=p*v*S-g*E*w;break;case"YXZ":this._x=g*v*S+p*E*w,this._y=p*E*S-g*v*w,this._z=p*v*w-g*E*S,this._w=p*v*S+g*E*w;break;case"ZXY":this._x=g*v*S-p*E*w,this._y=p*E*S+g*v*w,this._z=p*v*w+g*E*S,this._w=p*v*S-g*E*w;break;case"ZYX":this._x=g*v*S-p*E*w,this._y=p*E*S+g*v*w,this._z=p*v*w-g*E*S,this._w=p*v*S+g*E*w;break;case"YZX":this._x=g*v*S+p*E*w,this._y=p*E*S+g*v*w,this._z=p*v*w-g*E*S,this._w=p*v*S-g*E*w;break;case"XZY":this._x=g*v*S-p*E*w,this._y=p*E*S-g*v*w,this._z=p*v*w+g*E*S,this._w=p*v*S+g*E*w;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],v=i[6],S=i[10],g=s+h+S;if(g>0){const E=.5/Math.sqrt(g+1);this._w=.25/E,this._x=(v-m)*E,this._y=(c-p)*E,this._z=(d-l)*E}else if(s>h&&s>S){const E=2*Math.sqrt(1+s-h-S);this._w=(v-m)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(c+p)/E}else if(h>S){const E=2*Math.sqrt(1+h-s-S);this._w=(c-p)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(m+v)/E}else{const E=2*Math.sqrt(1+S-s-h);this._w=(d-l)/E,this._x=(c+p)/E,this._y=(m+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,d=e._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+d*h+l*p-c*m,this._y=l*v+d*m+c*h-s*p,this._z=c*v+d*p+s*m-l*h,this._w=d*v-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,d=e._w,h=this.dot(e);h<0&&(s=-s,l=-l,c=-c,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const vp=class vp{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(w_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(w_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*s),v=2*(h*i-c*l),S=2*(c*s-d*i);return this.x=i+m*p+d*S-h*v,this.y=s+m*v+h*p-c*S,this.z=l+m*S+c*v-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=wt(this.x,e.x,i.x),this.y=wt(this.y,e.y,i.y),this.z=wt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=wt(this.x,e,i),this.y=wt(this.y,e,i),this.z=wt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(wt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-s*m,this.z=s*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Nd.copy(this).projectOnVector(e),this.sub(Nd)}reflect(e){return this.sub(Nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(wt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vp.prototype.isVector3=!0;let ne=vp;const Nd=new ne,w_=new ms,yp=class yp{constructor(e,i,s,l,c,d,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,h,m,p)}set(e,i,s,l,c,d,h,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=h,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=d,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],v=s[4],S=s[7],g=s[2],E=s[5],w=s[8],P=l[0],b=l[3],y=l[6],C=l[1],B=l[4],I=l[7],W=l[2],F=l[5],k=l[8];return c[0]=d*P+h*C+m*W,c[3]=d*b+h*B+m*F,c[6]=d*y+h*I+m*k,c[1]=p*P+v*C+S*W,c[4]=p*b+v*B+S*F,c[7]=p*y+v*I+S*k,c[2]=g*P+E*C+w*W,c[5]=g*b+E*B+w*F,c[8]=g*y+E*I+w*k,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8];return i*d*v-i*h*p-s*c*v+s*h*m+l*c*p-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8],S=v*d-h*p,g=h*m-v*c,E=p*c-d*m,w=i*S+s*g+l*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const P=1/w;return e[0]=S*P,e[1]=(l*p-v*s)*P,e[2]=(h*s-l*d)*P,e[3]=g*P,e[4]=(v*i-l*m)*P,e[5]=(l*c-h*i)*P,e[6]=E*P,e[7]=(s*m-p*i)*P,e[8]=(d*i-s*c)*P,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Dd.makeScale(e,i)),this}rotate(e){return this.premultiply(Dd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Dd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};yp.prototype.isMatrix3=!0;let pt=yp;const Dd=new pt,R_=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),C_=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aM(){const r={enabled:!0,workingColorSpace:iu,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===qt&&(l.r=wa(l.r),l.g=wa(l.g),l.b=wa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===qt&&(l.r=Xr(l.r),l.g=Xr(l.g),l.b=Xr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ds?au:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Zh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Zh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[iu]:{primaries:e,whitePoint:s,transfer:au,toXYZ:R_,fromXYZ:C_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ri},outputColorSpaceConfig:{drawingBufferColorSpace:Ri}},[Ri]:{primaries:e,whitePoint:s,transfer:qt,toXYZ:R_,fromXYZ:C_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ri}}}),r}const Dt=aM();function wa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Xr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let wr;class sM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{wr===void 0&&(wr=su("canvas")),wr.width=e.width,wr.height=e.height;const l=wr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=wr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=su("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=wa(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(wa(i[s]/255)*255):i[s]=wa(i[s]);return{data:i,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rM=0;class fp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=cl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(Ld(l[d].image)):c.push(Ld(l[d]))}else c=Ld(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Ld(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?sM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let oM=0;const Ud=new ne;class qn extends _s{constructor(e=qn.DEFAULT_IMAGE,i=qn.DEFAULT_MAPPING,s=Ta,l=Ta,c=kn,d=js,h=Hi,m=_i,p=qn.DEFAULT_ANISOTROPY,v=ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=cl(),this.name="",this.source=new fp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ud).x}get height(){return this.source.getSize(Ud).y}get depth(){return this.source.getSize(Ud).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){lt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){lt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gh:e.x=e.x-Math.floor(e.x);break;case Ta:e.x=e.x<0?0:1;break;case _h:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gh:e.y=e.y-Math.floor(e.y);break;case Ta:e.y=e.y<0?0:1;break;case _h:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=Gx;qn.DEFAULT_ANISOTROPY=1;const Sp=class Sp{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],v=m[4],S=m[8],g=m[1],E=m[5],w=m[9],P=m[2],b=m[6],y=m[10];if(Math.abs(v-g)<.01&&Math.abs(S-P)<.01&&Math.abs(w-b)<.01){if(Math.abs(v+g)<.1&&Math.abs(S+P)<.1&&Math.abs(w+b)<.1&&Math.abs(p+E+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const B=(p+1)/2,I=(E+1)/2,W=(y+1)/2,F=(v+g)/4,k=(S+P)/4,_=(w+b)/4;return B>I&&B>W?B<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(B),l=F/s,c=k/s):I>W?I<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(I),s=F/l,c=_/l):W<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(W),s=k/c,l=_/c),this.set(s,l,c,i),this}let C=Math.sqrt((b-w)*(b-w)+(S-P)*(S-P)+(g-v)*(g-v));return Math.abs(C)<.001&&(C=1),this.x=(b-w)/C,this.y=(S-P)/C,this.z=(g-v)/C,this.w=Math.acos((p+E+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=wt(this.x,e.x,i.x),this.y=wt(this.y,e.y,i.y),this.z=wt(this.z,e.z,i.z),this.w=wt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=wt(this.x,e,i),this.y=wt(this.y,e,i),this.z=wt(this.z,e,i),this.w=wt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(wt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Sp.prototype.isVector4=!0;let dn=Sp;class lM extends _s{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new dn(0,0,e,i),this.scissorTest=!1,this.viewport=new dn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new qn(l),d=s.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new fp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends lM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Zx extends qn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cM extends qn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uu=class uu{constructor(e,i,s,l,c,d,h,m,p,v,S,g,E,w,P,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,h,m,p,v,S,g,E,w,P,b)}set(e,i,s,l,c,d,h,m,p,v,S,g,E,w,P,b){const y=this.elements;return y[0]=e,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=d,y[9]=h,y[13]=m,y[2]=p,y[6]=v,y[10]=S,y[14]=g,y[3]=E,y[7]=w,y[11]=P,y[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new uu().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Rr.setFromMatrixColumn(e,0).length(),c=1/Rr.setFromMatrixColumn(e,1).length(),d=1/Rr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const g=d*v,E=d*S,w=h*v,P=h*S;i[0]=m*v,i[4]=-m*S,i[8]=p,i[1]=E+w*p,i[5]=g-P*p,i[9]=-h*m,i[2]=P-g*p,i[6]=w+E*p,i[10]=d*m}else if(e.order==="YXZ"){const g=m*v,E=m*S,w=p*v,P=p*S;i[0]=g+P*h,i[4]=w*h-E,i[8]=d*p,i[1]=d*S,i[5]=d*v,i[9]=-h,i[2]=E*h-w,i[6]=P+g*h,i[10]=d*m}else if(e.order==="ZXY"){const g=m*v,E=m*S,w=p*v,P=p*S;i[0]=g-P*h,i[4]=-d*S,i[8]=w+E*h,i[1]=E+w*h,i[5]=d*v,i[9]=P-g*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const g=d*v,E=d*S,w=h*v,P=h*S;i[0]=m*v,i[4]=w*p-E,i[8]=g*p+P,i[1]=m*S,i[5]=P*p+g,i[9]=E*p-w,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const g=d*m,E=d*p,w=h*m,P=h*p;i[0]=m*v,i[4]=P-g*S,i[8]=w*S+E,i[1]=S,i[5]=d*v,i[9]=-h*v,i[2]=-p*v,i[6]=E*S+w,i[10]=g-P*S}else if(e.order==="XZY"){const g=d*m,E=d*p,w=h*m,P=h*p;i[0]=m*v,i[4]=-S,i[8]=p*v,i[1]=g*S+P,i[5]=d*v,i[9]=E*S-w,i[2]=w*S-E,i[6]=h*v,i[10]=P*S+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uM,e,fM)}lookAt(e,i,s){const l=this.elements;return pi.subVectors(e,i),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),ss.crossVectors(s,pi),ss.lengthSq()===0&&(Math.abs(s.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),ss.crossVectors(s,pi)),ss.normalize(),bc.crossVectors(pi,ss),l[0]=ss.x,l[4]=bc.x,l[8]=pi.x,l[1]=ss.y,l[5]=bc.y,l[9]=pi.y,l[2]=ss.z,l[6]=bc.z,l[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],v=s[1],S=s[5],g=s[9],E=s[13],w=s[2],P=s[6],b=s[10],y=s[14],C=s[3],B=s[7],I=s[11],W=s[15],F=l[0],k=l[4],_=l[8],M=l[12],R=l[1],T=l[5],D=l[9],H=l[13],X=l[2],j=l[6],N=l[10],G=l[14],Y=l[3],ae=l[7],de=l[11],V=l[15];return c[0]=d*F+h*R+m*X+p*Y,c[4]=d*k+h*T+m*j+p*ae,c[8]=d*_+h*D+m*N+p*de,c[12]=d*M+h*H+m*G+p*V,c[1]=v*F+S*R+g*X+E*Y,c[5]=v*k+S*T+g*j+E*ae,c[9]=v*_+S*D+g*N+E*de,c[13]=v*M+S*H+g*G+E*V,c[2]=w*F+P*R+b*X+y*Y,c[6]=w*k+P*T+b*j+y*ae,c[10]=w*_+P*D+b*N+y*de,c[14]=w*M+P*H+b*G+y*V,c[3]=C*F+B*R+I*X+W*Y,c[7]=C*k+B*T+I*j+W*ae,c[11]=C*_+B*D+I*N+W*de,c[15]=C*M+B*H+I*G+W*V,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],d=e[1],h=e[5],m=e[9],p=e[13],v=e[2],S=e[6],g=e[10],E=e[14],w=e[3],P=e[7],b=e[11],y=e[15],C=m*E-p*g,B=h*E-p*S,I=h*g-m*S,W=d*E-p*v,F=d*g-m*v,k=d*S-h*v;return i*(P*C-b*B+y*I)-s*(w*C-b*W+y*F)+l*(w*B-P*W+y*k)-c*(w*I-P*F+b*k)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8],S=e[9],g=e[10],E=e[11],w=e[12],P=e[13],b=e[14],y=e[15],C=i*h-s*d,B=i*m-l*d,I=i*p-c*d,W=s*m-l*h,F=s*p-c*h,k=l*p-c*m,_=v*P-S*w,M=v*b-g*w,R=v*y-E*w,T=S*b-g*P,D=S*y-E*P,H=g*y-E*b,X=C*H-B*D+I*T+W*R-F*M+k*_;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/X;return e[0]=(h*H-m*D+p*T)*j,e[1]=(l*D-s*H-c*T)*j,e[2]=(P*k-b*F+y*W)*j,e[3]=(g*F-S*k-E*W)*j,e[4]=(m*R-d*H-p*M)*j,e[5]=(i*H-l*R+c*M)*j,e[6]=(b*I-w*k-y*B)*j,e[7]=(v*k-g*I+E*B)*j,e[8]=(d*D-h*R+p*_)*j,e[9]=(s*R-i*D-c*_)*j,e[10]=(w*F-P*I+y*C)*j,e[11]=(S*I-v*F-E*C)*j,e[12]=(h*M-d*T-m*_)*j,e[13]=(i*T-s*M+l*_)*j,e[14]=(P*B-w*W-b*C)*j,e[15]=(v*W-S*B+g*C)*j,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=e.x,h=e.y,m=e.z,p=c*d,v=c*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+s,v*m-l*d,0,p*m-l*h,v*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,d){return this.set(1,s,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,v=d+d,S=h+h,g=c*p,E=c*v,w=c*S,P=d*v,b=d*S,y=h*S,C=m*p,B=m*v,I=m*S,W=s.x,F=s.y,k=s.z;return l[0]=(1-(P+y))*W,l[1]=(E+I)*W,l[2]=(w-B)*W,l[3]=0,l[4]=(E-I)*F,l[5]=(1-(g+y))*F,l[6]=(b+C)*F,l[7]=0,l[8]=(w+B)*k,l[9]=(b-C)*k,l[10]=(1-(g+P))*k,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let d=Rr.set(l[0],l[1],l[2]).length();const h=Rr.set(l[4],l[5],l[6]).length(),m=Rr.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Fi.copy(this);const p=1/d,v=1/h,S=1/m;return Fi.elements[0]*=p,Fi.elements[1]*=p,Fi.elements[2]*=p,Fi.elements[4]*=v,Fi.elements[5]*=v,Fi.elements[6]*=v,Fi.elements[8]*=S,Fi.elements[9]*=S,Fi.elements[10]*=S,i.setFromRotationMatrix(Fi),s.x=d,s.y=h,s.z=m,this}makePerspective(e,i,s,l,c,d,h=Qi,m=!1){const p=this.elements,v=2*c/(i-e),S=2*c/(s-l),g=(i+e)/(i-e),E=(s+l)/(s-l);let w,P;if(m)w=c/(d-c),P=d*c/(d-c);else if(h===Qi)w=-(d+c)/(d-c),P=-2*d*c/(d-c);else if(h===ll)w=-d/(d-c),P=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=S,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=w,p[14]=P,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,d,h=Qi,m=!1){const p=this.elements,v=2/(i-e),S=2/(s-l),g=-(i+e)/(i-e),E=-(s+l)/(s-l);let w,P;if(m)w=1/(d-c),P=d/(d-c);else if(h===Qi)w=-2/(d-c),P=-(d+c)/(d-c);else if(h===ll)w=-1/(d-c),P=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=S,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=w,p[14]=P,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};uu.prototype.isMatrix4=!0;let cn=uu;const Rr=new ne,Fi=new cn,uM=new ne(0,0,0),fM=new ne(1,1,1),ss=new ne,bc=new ne,pi=new ne,N_=new cn,D_=new ms;class gs{constructor(e=0,i=0,s=0,l=gs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],v=l[9],S=l[2],g=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(wt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,E),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-wt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(wt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,E),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return N_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(N_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return D_.setFromEuler(this),this.setFromQuaternion(D_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gs.DEFAULT_ORDER="XYZ";class dp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dM=0;const L_=new ne,Cr=new ms,ya=new cn,Mc=new ne,Zo=new ne,hM=new ne,pM=new ms,U_=new ne(1,0,0),O_=new ne(0,1,0),P_=new ne(0,0,1),I_={type:"added"},mM={type:"removed"},Nr={type:"childadded",child:null},Od={type:"childremoved",child:null};class Dn extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=cl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new ne,i=new gs,s=new ms,l=new ne(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new cn},normalMatrix:{value:new pt}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Cr.setFromAxisAngle(e,i),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(e,i){return Cr.setFromAxisAngle(e,i),this.quaternion.premultiply(Cr),this}rotateX(e){return this.rotateOnAxis(U_,e)}rotateY(e){return this.rotateOnAxis(O_,e)}rotateZ(e){return this.rotateOnAxis(P_,e)}translateOnAxis(e,i){return L_.copy(e).applyQuaternion(this.quaternion),this.position.add(L_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(U_,e)}translateY(e){return this.translateOnAxis(O_,e)}translateZ(e){return this.translateOnAxis(P_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ya.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Mc.copy(e):Mc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ya.lookAt(Zo,Mc,this.up):ya.lookAt(Mc,Zo,this.up),this.quaternion.setFromRotationMatrix(ya),l&&(ya.extractRotation(l.matrixWorld),Cr.setFromRotationMatrix(ya),this.quaternion.premultiply(Cr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(I_),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(mM),Od.child=e,this.dispatchEvent(Od),Od.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ya.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ya.multiply(e.parent.matrixWorld)),e.applyMatrix4(ya),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(I_),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,e,hM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,pM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const S=m[p];c(e.shapes,S)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),v=d(e.images),S=d(e.shapes),g=d(e.skeletons),E=d(e.animations),w=d(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),S.length>0&&(s.shapes=S),g.length>0&&(s.skeletons=g),E.length>0&&(s.animations=E),w.length>0&&(s.nodes=w)}return s.object=l,s;function d(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Dn.DEFAULT_UP=new ne(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ci extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gM={type:"move"};class Pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const P of e.hand.values()){const b=i.getJointPose(P,s),y=this._getHandJoint(p,P);b!==null&&(y.matrix.fromArray(b.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=b.radius),y.visible=b!==null}const v=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],g=v.position.distanceTo(S.position),E=.02,w=.005;p.inputState.pinching&&g>E+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=E-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(gM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Ci;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const Kx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function Id(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class it{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Dt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Dt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Dt.workingColorSpace){if(e=nM(e,1),i=wt(i,0,1),s=wt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Id(d,c,e+1/3),this.g=Id(d,c,e),this.b=Id(d,c,e-1/3)}return Dt.colorSpaceToWorking(this,l),this}setStyle(e,i=Ri){function s(c){c!==void 0&&parseFloat(c)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:lt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ri){const s=Kx[e.toLowerCase()];return s!==void 0?this.setHex(s,i):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wa(e.r),this.g=wa(e.g),this.b=wa(e.b),this}copyLinearToSRGB(e){return this.r=Xr(e.r),this.g=Xr(e.g),this.b=Xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ri){return Dt.workingToColorSpace(Vn.copy(this),e),Math.round(wt(Vn.r*255,0,255))*65536+Math.round(wt(Vn.g*255,0,255))*256+Math.round(wt(Vn.b*255,0,255))}getHexString(e=Ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Dt.workingColorSpace){Dt.workingToColorSpace(Vn.copy(this),i);const s=Vn.r,l=Vn.g,c=Vn.b,d=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const v=(h+d)/2;if(h===d)m=0,p=0;else{const S=d-h;switch(p=v<=.5?S/(d+h):S/(2-d-h),d){case s:m=(l-c)/S+(l<c?6:0);break;case l:m=(c-s)/S+2;break;case c:m=(s-l)/S+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Dt.workingColorSpace){return Dt.workingToColorSpace(Vn.copy(this),i),e.r=Vn.r,e.g=Vn.g,e.b=Vn.b,e}getStyle(e=Ri){Dt.workingToColorSpace(Vn.copy(this),e);const i=Vn.r,s=Vn.g,l=Vn.b;return e!==Ri?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(rs),this.setHSL(rs.h+e,rs.s+i,rs.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(rs),e.getHSL(Ec);const s=Cd(rs.h,Ec.h,i),l=Cd(rs.s,Ec.s,i),c=Cd(rs.l,Ec.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new it;it.NAMES=Kx;class al{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new it(e),this.density=i}clone(){return new al(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class _M extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gs,this.environmentIntensity=1,this.environmentRotation=new gs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const zi=new ne,Sa=new ne,Fd=new ne,ba=new ne,Dr=new ne,Lr=new ne,F_=new ne,zd=new ne,Bd=new ne,Gd=new ne,Hd=new dn,Vd=new dn,kd=new dn;class Gi{constructor(e=new ne,i=new ne,s=new ne){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),zi.subVectors(e,i),l.cross(zi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){zi.subVectors(l,i),Sa.subVectors(s,i),Fd.subVectors(e,i);const d=zi.dot(zi),h=zi.dot(Sa),m=zi.dot(Fd),p=Sa.dot(Sa),v=Sa.dot(Fd),S=d*p-h*h;if(S===0)return c.set(0,0,0),null;const g=1/S,E=(p*m-h*v)*g,w=(d*v-h*m)*g;return c.set(1-E-w,w,E)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ba)===null?!1:ba.x>=0&&ba.y>=0&&ba.x+ba.y<=1}static getInterpolation(e,i,s,l,c,d,h,m){return this.getBarycoord(e,i,s,l,ba)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ba.x),m.addScaledVector(d,ba.y),m.addScaledVector(h,ba.z),m)}static getInterpolatedAttribute(e,i,s,l,c,d){return Hd.setScalar(0),Vd.setScalar(0),kd.setScalar(0),Hd.fromBufferAttribute(e,i),Vd.fromBufferAttribute(e,s),kd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Hd,c.x),d.addScaledVector(Vd,c.y),d.addScaledVector(kd,c.z),d}static isFrontFacing(e,i,s,l){return zi.subVectors(s,i),Sa.subVectors(e,i),zi.cross(Sa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zi.subVectors(this.c,this.b),Sa.subVectors(this.a,this.b),zi.cross(Sa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Gi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Gi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let d,h;Dr.subVectors(l,s),Lr.subVectors(c,s),zd.subVectors(e,s);const m=Dr.dot(zd),p=Lr.dot(zd);if(m<=0&&p<=0)return i.copy(s);Bd.subVectors(e,l);const v=Dr.dot(Bd),S=Lr.dot(Bd);if(v>=0&&S<=v)return i.copy(l);const g=m*S-v*p;if(g<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(s).addScaledVector(Dr,d);Gd.subVectors(e,c);const E=Dr.dot(Gd),w=Lr.dot(Gd);if(w>=0&&E<=w)return i.copy(c);const P=E*p-m*w;if(P<=0&&p>=0&&w<=0)return h=p/(p-w),i.copy(s).addScaledVector(Lr,h);const b=v*w-E*S;if(b<=0&&S-v>=0&&E-w>=0)return F_.subVectors(c,l),h=(S-v)/(S-v+(E-w)),i.copy(l).addScaledVector(F_,h);const y=1/(b+P+g);return d=P*y,h=g*y,i.copy(s).addScaledVector(Dr,d).addScaledVector(Lr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Kr{constructor(e=new ne(1/0,1/0,1/0),i=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Bi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Bi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Bi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Bi):Bi.fromBufferAttribute(c,d),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Tc.copy(s.boundingBox)),Tc.applyMatrix4(e.matrixWorld),this.union(Tc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ko),Ac.subVectors(this.max,Ko),Ur.subVectors(e.a,Ko),Or.subVectors(e.b,Ko),Pr.subVectors(e.c,Ko),os.subVectors(Or,Ur),ls.subVectors(Pr,Or),Fs.subVectors(Ur,Pr);let i=[0,-os.z,os.y,0,-ls.z,ls.y,0,-Fs.z,Fs.y,os.z,0,-os.x,ls.z,0,-ls.x,Fs.z,0,-Fs.x,-os.y,os.x,0,-ls.y,ls.x,0,-Fs.y,Fs.x,0];return!jd(i,Ur,Or,Pr,Ac)||(i=[1,0,0,0,1,0,0,0,1],!jd(i,Ur,Or,Pr,Ac))?!1:(wc.crossVectors(os,ls),i=[wc.x,wc.y,wc.z],jd(i,Ur,Or,Pr,Ac))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ma),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ma=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],Bi=new ne,Tc=new Kr,Ur=new ne,Or=new ne,Pr=new ne,os=new ne,ls=new ne,Fs=new ne,Ko=new ne,Ac=new ne,wc=new ne,zs=new ne;function jd(r,e,i,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){zs.fromArray(r,c);const h=l.x*Math.abs(zs.x)+l.y*Math.abs(zs.y)+l.z*Math.abs(zs.z),m=e.dot(zs),p=i.dot(zs),v=s.dot(zs);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const Mn=new ne,Rc=new ht;let xM=0;class Di extends _s{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=M_,this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Rc.fromBufferAttribute(this,i),Rc.applyMatrix3(e),this.setXY(i,Rc.x,Rc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.applyMatrix3(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.applyMatrix4(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.applyNormalMatrix(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.transformDirection(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Yo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=ti(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Yo(i,this.array)),i}setX(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Yo(i,this.array)),i}setY(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Yo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Yo(i,this.array)),i}setW(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=ti(i,this.array),s=ti(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=ti(i,this.array),s=ti(s,this.array),l=ti(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=ti(i,this.array),s=ti(s,this.array),l=ti(l,this.array),c=ti(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==M_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Qx extends Di{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Jx extends Di{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class hn extends Di{constructor(e,i,s){super(new Float32Array(e),i,s)}}const vM=new Kr,Qo=new ne,Xd=new ne;class du{constructor(e=new ne,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):vM.setFromPoints(e).getCenter(s);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qo.subVectors(e,this.center);const i=Qo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Qo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qo.copy(e.center).add(Xd)),this.expandByPoint(Qo.copy(e.center).sub(Xd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let yM=0;const wi=new cn,Wd=new Dn,Ir=new ne,mi=new Kr,Jo=new Kr,Nn=new ne;class Yn extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=cl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jb(e)?Jx:Qx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new pt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wi.makeRotationFromQuaternion(e),this.applyMatrix4(wi),this}rotateX(e){return wi.makeRotationX(e),this.applyMatrix4(wi),this}rotateY(e){return wi.makeRotationY(e),this.applyMatrix4(wi),this}rotateZ(e){return wi.makeRotationZ(e),this.applyMatrix4(wi),this}translate(e,i,s){return wi.makeTranslation(e,i,s),this.applyMatrix4(wi),this}scale(e,i,s){return wi.makeScale(e,i,s),this.applyMatrix4(wi),this}lookAt(e){return Wd.lookAt(e),Wd.updateMatrix(),this.applyMatrix4(Wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new hn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kr);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];mi.setFromBufferAttribute(c),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new du);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const s=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Jo.setFromBufferAttribute(h),this.morphTargetsRelative?(Nn.addVectors(mi.min,Jo.min),mi.expandByPoint(Nn),Nn.addVectors(mi.max,Jo.max),mi.expandByPoint(Nn)):(mi.expandByPoint(Jo.min),mi.expandByPoint(Jo.max))}mi.getCenter(s);let l=0;for(let c=0,d=e.count;c<d;c++)Nn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Nn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)Nn.fromBufferAttribute(h,p),m&&(Ir.fromBufferAttribute(e,p),Nn.add(Ir)),l=Math.max(l,s.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let _=0;_<s.count;_++)h[_]=new ne,m[_]=new ne;const p=new ne,v=new ne,S=new ne,g=new ht,E=new ht,w=new ht,P=new ne,b=new ne;function y(_,M,R){p.fromBufferAttribute(s,_),v.fromBufferAttribute(s,M),S.fromBufferAttribute(s,R),g.fromBufferAttribute(c,_),E.fromBufferAttribute(c,M),w.fromBufferAttribute(c,R),v.sub(p),S.sub(p),E.sub(g),w.sub(g);const T=1/(E.x*w.y-w.x*E.y);isFinite(T)&&(P.copy(v).multiplyScalar(w.y).addScaledVector(S,-E.y).multiplyScalar(T),b.copy(S).multiplyScalar(E.x).addScaledVector(v,-w.x).multiplyScalar(T),h[_].add(P),h[M].add(P),h[R].add(P),m[_].add(b),m[M].add(b),m[R].add(b))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let _=0,M=C.length;_<M;++_){const R=C[_],T=R.start,D=R.count;for(let H=T,X=T+D;H<X;H+=3)y(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const B=new ne,I=new ne,W=new ne,F=new ne;function k(_){W.fromBufferAttribute(l,_),F.copy(W);const M=h[_];B.copy(M),B.sub(W.multiplyScalar(W.dot(M))).normalize(),I.crossVectors(F,M);const T=I.dot(m[_])<0?-1:1;d.setXYZW(_,B.x,B.y,B.z,T)}for(let _=0,M=C.length;_<M;++_){const R=C[_],T=R.start,D=R.count;for(let H=T,X=T+D;H<X;H+=3)k(e.getX(H+0)),k(e.getX(H+1)),k(e.getX(H+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Di(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,E=s.count;g<E;g++)s.setXYZ(g,0,0,0);const l=new ne,c=new ne,d=new ne,h=new ne,m=new ne,p=new ne,v=new ne,S=new ne;if(e)for(let g=0,E=e.count;g<E;g+=3){const w=e.getX(g+0),P=e.getX(g+1),b=e.getX(g+2);l.fromBufferAttribute(i,w),c.fromBufferAttribute(i,P),d.fromBufferAttribute(i,b),v.subVectors(d,c),S.subVectors(l,c),v.cross(S),h.fromBufferAttribute(s,w),m.fromBufferAttribute(s,P),p.fromBufferAttribute(s,b),h.add(v),m.add(v),p.add(v),s.setXYZ(w,h.x,h.y,h.z),s.setXYZ(P,m.x,m.y,m.z),s.setXYZ(b,p.x,p.y,p.z)}else for(let g=0,E=i.count;g<E;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),v.subVectors(d,c),S.subVectors(l,c),v.cross(S),s.setXYZ(g+0,v.x,v.y,v.z),s.setXYZ(g+1,v.x,v.y,v.z),s.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Nn.fromBufferAttribute(e,i),Nn.normalize(),e.setXYZ(i,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function e(h,m){const p=h.array,v=h.itemSize,S=h.normalized,g=new p.constructor(m.length*v);let E=0,w=0;for(let P=0,b=m.length;P<b;P++){h.isInterleavedBufferAttribute?E=m[P]*h.data.stride+h.offset:E=m[P]*v;for(let y=0;y<v;y++)g[w++]=p[E++]}return new Di(g,v,S)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Yn,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let v=0,S=p.length;v<S;v++){const g=p[v],E=e(g,s);m.push(E)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let S=0,g=p.length;S<g;S++){const E=p[S];v.push(E.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=e.morphAttributes;for(const p in c){const v=[],S=c[p];for(let g=0,E=S.length;g<E;g++)v.push(S[g].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,v=d.length;p<v;p++){const S=d[p];this.addGroup(S.start,S.count,S.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let SM=0;class Qr extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=cl(),this.name="",this.type="Material",this.blending=jr,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oh,this.blendDst=lh,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=b_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){lt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){lt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==jr&&(s.blending=this.blending),this.side!==ps&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==oh&&(s.blendSrc=this.blendSrc),this.blendDst!==lh&&(s.blendDst=this.blendDst),this.blendEquation!==Hs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Wr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==b_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ea=new ne,qd=new ne,Cc=new ne,cs=new ne,Yd=new ne,Nc=new ne,Zd=new ne;class hu{constructor(e=new ne,i=new ne(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ea)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ea.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ea.copy(this.origin).addScaledVector(this.direction,i),Ea.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){qd.copy(e).add(i).multiplyScalar(.5),Cc.copy(i).sub(e).normalize(),cs.copy(this.origin).sub(qd);const c=e.distanceTo(i)*.5,d=-this.direction.dot(Cc),h=cs.dot(this.direction),m=-cs.dot(Cc),p=cs.lengthSq(),v=Math.abs(1-d*d);let S,g,E,w;if(v>0)if(S=d*m-h,g=d*h-m,w=c*v,S>=0)if(g>=-w)if(g<=w){const P=1/v;S*=P,g*=P,E=S*(S+d*g+2*h)+g*(d*S+g+2*m)+p}else g=c,S=Math.max(0,-(d*g+h)),E=-S*S+g*(g+2*m)+p;else g=-c,S=Math.max(0,-(d*g+h)),E=-S*S+g*(g+2*m)+p;else g<=-w?(S=Math.max(0,-(-d*c+h)),g=S>0?-c:Math.min(Math.max(-c,-m),c),E=-S*S+g*(g+2*m)+p):g<=w?(S=0,g=Math.min(Math.max(-c,-m),c),E=g*(g+2*m)+p):(S=Math.max(0,-(d*c+h)),g=S>0?c:Math.min(Math.max(-c,-m),c),E=-S*S+g*(g+2*m)+p);else g=d>0?-c:c,S=Math.max(0,-(d*g+h)),E=-S*S+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(qd).addScaledVector(Cc,g),E}intersectSphere(e,i){Ea.subVectors(e.center,this.origin);const s=Ea.dot(this.direction),l=Ea.dot(Ea)-s*s,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,d,h,m;const p=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,g=this.origin;return p>=0?(s=(e.min.x-g.x)*p,l=(e.max.x-g.x)*p):(s=(e.max.x-g.x)*p,l=(e.min.x-g.x)*p),v>=0?(c=(e.min.y-g.y)*v,d=(e.max.y-g.y)*v):(c=(e.max.y-g.y)*v,d=(e.min.y-g.y)*v),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),S>=0?(h=(e.min.z-g.z)*S,m=(e.max.z-g.z)*S):(h=(e.max.z-g.z)*S,m=(e.min.z-g.z)*S),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ea)!==null}intersectTriangle(e,i,s,l,c){Yd.subVectors(i,e),Nc.subVectors(s,e),Zd.crossVectors(Yd,Nc);let d=this.direction.dot(Zd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;cs.subVectors(this.origin,e);const m=h*this.direction.dot(Nc.crossVectors(cs,Nc));if(m<0)return null;const p=h*this.direction.dot(Yd.cross(cs));if(p<0||m+p>d)return null;const v=-h*cs.dot(Zd);return v<0?null:this.at(v/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ru extends Qr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gs,this.combine=Lx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const z_=new cn,Bs=new hu,Dc=new du,B_=new ne,Lc=new ne,Uc=new ne,Oc=new ne,Kd=new ne,Pc=new ne,G_=new ne,Ic=new ne;class te extends Dn{constructor(e=new Yn,i=new ru){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Pc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=h[m],S=c[m];v!==0&&(Kd.fromBufferAttribute(S,e),d?Pc.addScaledVector(Kd,v):Pc.addScaledVector(Kd.sub(i),v))}i.add(Pc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Dc.copy(s.boundingSphere),Dc.applyMatrix4(c),Bs.copy(e.ray).recast(e.near),!(Dc.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(Dc,B_)===null||Bs.origin.distanceToSquared(B_)>(e.far-e.near)**2))&&(z_.copy(c).invert(),Bs.copy(e.ray).applyMatrix4(z_),!(s.boundingBox!==null&&Bs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Bs)))}_computeIntersections(e,i,s){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,S=c.attributes.normal,g=c.groups,E=c.drawRange;if(h!==null)if(Array.isArray(d))for(let w=0,P=g.length;w<P;w++){const b=g[w],y=d[b.materialIndex],C=Math.max(b.start,E.start),B=Math.min(h.count,Math.min(b.start+b.count,E.start+E.count));for(let I=C,W=B;I<W;I+=3){const F=h.getX(I),k=h.getX(I+1),_=h.getX(I+2);l=Fc(this,y,e,s,p,v,S,F,k,_),l&&(l.faceIndex=Math.floor(I/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const w=Math.max(0,E.start),P=Math.min(h.count,E.start+E.count);for(let b=w,y=P;b<y;b+=3){const C=h.getX(b),B=h.getX(b+1),I=h.getX(b+2);l=Fc(this,d,e,s,p,v,S,C,B,I),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let w=0,P=g.length;w<P;w++){const b=g[w],y=d[b.materialIndex],C=Math.max(b.start,E.start),B=Math.min(m.count,Math.min(b.start+b.count,E.start+E.count));for(let I=C,W=B;I<W;I+=3){const F=I,k=I+1,_=I+2;l=Fc(this,y,e,s,p,v,S,F,k,_),l&&(l.faceIndex=Math.floor(I/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const w=Math.max(0,E.start),P=Math.min(m.count,E.start+E.count);for(let b=w,y=P;b<y;b+=3){const C=b,B=b+1,I=b+2;l=Fc(this,d,e,s,p,v,S,C,B,I),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function bM(r,e,i,s,l,c,d,h){let m;if(e.side===ii?m=s.intersectTriangle(d,c,l,!0,h):m=s.intersectTriangle(l,c,d,e.side===ps,h),m===null)return null;Ic.copy(h),Ic.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Ic);return p<i.near||p>i.far?null:{distance:p,point:Ic.clone(),object:r}}function Fc(r,e,i,s,l,c,d,h,m,p){r.getVertexPosition(h,Lc),r.getVertexPosition(m,Uc),r.getVertexPosition(p,Oc);const v=bM(r,e,i,s,Lc,Uc,Oc,G_);if(v){const S=new ne;Gi.getBarycoord(G_,Lc,Uc,Oc,S),l&&(v.uv=Gi.getInterpolatedAttribute(l,h,m,p,S,new ht)),c&&(v.uv1=Gi.getInterpolatedAttribute(c,h,m,p,S,new ht)),d&&(v.normal=Gi.getInterpolatedAttribute(d,h,m,p,S,new ne),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new ne,materialIndex:0};Gi.getNormal(Lc,Uc,Oc,g.normal),v.face=g,v.barycoord=S}return v}class MM extends qn{constructor(e=null,i=1,s=1,l,c,d,h,m,p=Fn,v=Fn,S,g){super(null,d,h,m,p,v,l,c,S,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qd=new ne,EM=new ne,TM=new pt;class fs{constructor(e=new ne(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Qd.subVectors(s,i).cross(EM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(Qd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||TM.getNormalMatrix(e),l=this.coplanarPoint(Qd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gs=new du,AM=new ht(.5,.5),zc=new ne;class hp{constructor(e=new fs,i=new fs,s=new fs,l=new fs,c=new fs,d=new fs){this.planes=[e,i,s,l,c,d]}set(e,i,s,l,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Qi,s=!1){const l=this.planes,c=e.elements,d=c[0],h=c[1],m=c[2],p=c[3],v=c[4],S=c[5],g=c[6],E=c[7],w=c[8],P=c[9],b=c[10],y=c[11],C=c[12],B=c[13],I=c[14],W=c[15];if(l[0].setComponents(p-d,E-v,y-w,W-C).normalize(),l[1].setComponents(p+d,E+v,y+w,W+C).normalize(),l[2].setComponents(p+h,E+S,y+P,W+B).normalize(),l[3].setComponents(p-h,E-S,y-P,W-B).normalize(),s)l[4].setComponents(m,g,b,I).normalize(),l[5].setComponents(p-m,E-g,y-b,W-I).normalize();else if(l[4].setComponents(p-m,E-g,y-b,W-I).normalize(),i===Qi)l[5].setComponents(p+m,E+g,y+b,W+I).normalize();else if(i===ll)l[5].setComponents(m,g,b,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Gs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gs)}intersectsSprite(e){Gs.center.set(0,0,0);const i=AM.distanceTo(e.center);return Gs.radius=.7071067811865476+i,Gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(zc.x=l.normal.x>0?e.max.x:e.min.x,zc.y=l.normal.y>0?e.max.y:e.min.y,zc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(zc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pp extends Qr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ou=new ne,lu=new ne,H_=new cn,$o=new hu,Bc=new du,Jd=new ne,V_=new ne;class wM extends Dn{constructor(e=new Yn,i=new pp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)ou.fromBufferAttribute(i,l-1),lu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=ou.distanceTo(lu);e.setAttribute("lineDistance",new hn(s,1))}else lt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Bc.copy(s.boundingSphere),Bc.applyMatrix4(l),Bc.radius+=c,e.ray.intersectsSphere(Bc)===!1)return;H_.copy(l).invert(),$o.copy(e.ray).applyMatrix4(H_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,v=s.index,g=s.attributes.position;if(v!==null){const E=Math.max(0,d.start),w=Math.min(v.count,d.start+d.count);for(let P=E,b=w-1;P<b;P+=p){const y=v.getX(P),C=v.getX(P+1),B=Gc(this,e,$o,m,y,C,P);B&&i.push(B)}if(this.isLineLoop){const P=v.getX(w-1),b=v.getX(E),y=Gc(this,e,$o,m,P,b,w-1);y&&i.push(y)}}else{const E=Math.max(0,d.start),w=Math.min(g.count,d.start+d.count);for(let P=E,b=w-1;P<b;P+=p){const y=Gc(this,e,$o,m,P,P+1,P);y&&i.push(y)}if(this.isLineLoop){const P=Gc(this,e,$o,m,w-1,E,w-1);P&&i.push(P)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Gc(r,e,i,s,l,c,d){const h=r.geometry.attributes.position;if(ou.fromBufferAttribute(h,l),lu.fromBufferAttribute(h,c),i.distanceSqToSegment(ou,lu,Jd,V_)>s)return;Jd.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(Jd);if(!(p<e.near||p>e.far))return{distance:p,point:V_.clone().applyMatrix4(r.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:r}}const k_=new ne,j_=new ne;class $x extends wM{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)k_.fromBufferAttribute(i,l),j_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+k_.distanceTo(j_);e.setAttribute("lineDistance",new hn(s,1))}else lt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ev extends qn{constructor(e=[],i=Ws,s,l,c,d,h,m,p,v){super(e,i,s,l,c,d,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yr extends qn{constructor(e,i,s=ea,l,c,d,h=Fn,m=Fn,p,v=Ca,S=1){if(v!==Ca&&v!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:S};super(g,l,c,d,h,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class RM extends Yr{constructor(e,i=ea,s=Ws,l,c,d=Fn,h=Fn,m,p=Ca){const v={width:e,height:e,depth:1},S=[v,v,v,v,v,v];super(e,e,i,s,l,c,d,h,m,p),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class tv extends qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ee extends Yn{constructor(e=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],v=[],S=[];let g=0,E=0;w("z","y","x",-1,-1,s,i,e,d,c,0),w("z","y","x",1,-1,s,i,-e,d,c,1),w("x","z","y",1,1,e,s,i,l,d,2),w("x","z","y",1,-1,e,s,-i,l,d,3),w("x","y","z",1,-1,e,i,s,l,c,4),w("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new hn(p,3)),this.setAttribute("normal",new hn(v,3)),this.setAttribute("uv",new hn(S,2));function w(P,b,y,C,B,I,W,F,k,_,M){const R=I/k,T=W/_,D=I/2,H=W/2,X=F/2,j=k+1,N=_+1;let G=0,Y=0;const ae=new ne;for(let de=0;de<N;de++){const V=de*T-H;for(let J=0;J<j;J++){const xe=J*R-D;ae[P]=xe*C,ae[b]=V*B,ae[y]=X,p.push(ae.x,ae.y,ae.z),ae[P]=0,ae[b]=0,ae[y]=F>0?1:-1,v.push(ae.x,ae.y,ae.z),S.push(J/k),S.push(1-de/_),G+=1}}for(let de=0;de<_;de++)for(let V=0;V<k;V++){const J=g+V+j*de,xe=g+V+j*(de+1),ve=g+(V+1)+j*(de+1),Te=g+(V+1)+j*de;m.push(J,xe,Te),m.push(xe,ve,Te),Y+=6}h.addGroup(E,Y,M),E+=Y,g+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ee(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class St extends Yn{constructor(e=1,i=1,s=1,l=32,c=1,d=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:d,thetaStart:h,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const v=[],S=[],g=[],E=[];let w=0;const P=[],b=s/2;let y=0;C(),d===!1&&(e>0&&B(!0),i>0&&B(!1)),this.setIndex(v),this.setAttribute("position",new hn(S,3)),this.setAttribute("normal",new hn(g,3)),this.setAttribute("uv",new hn(E,2));function C(){const I=new ne,W=new ne;let F=0;const k=(i-e)/s;for(let _=0;_<=c;_++){const M=[],R=_/c,T=R*(i-e)+e;for(let D=0;D<=l;D++){const H=D/l,X=H*m+h,j=Math.sin(X),N=Math.cos(X);W.x=T*j,W.y=-R*s+b,W.z=T*N,S.push(W.x,W.y,W.z),I.set(j,k,N).normalize(),g.push(I.x,I.y,I.z),E.push(H,1-R),M.push(w++)}P.push(M)}for(let _=0;_<l;_++)for(let M=0;M<c;M++){const R=P[M][_],T=P[M+1][_],D=P[M+1][_+1],H=P[M][_+1];(e>0||M!==0)&&(v.push(R,T,H),F+=3),(i>0||M!==c-1)&&(v.push(T,D,H),F+=3)}p.addGroup(y,F,0),y+=F}function B(I){const W=w,F=new ht,k=new ne;let _=0;const M=I===!0?e:i,R=I===!0?1:-1;for(let D=1;D<=l;D++)S.push(0,b*R,0),g.push(0,R,0),E.push(.5,.5),w++;const T=w;for(let D=0;D<=l;D++){const X=D/l*m+h,j=Math.cos(X),N=Math.sin(X);k.x=M*N,k.y=b*R,k.z=M*j,S.push(k.x,k.y,k.z),g.push(0,R,0),F.x=j*.5+.5,F.y=N*.5*R+.5,E.push(F.x,F.y),w++}for(let D=0;D<l;D++){const H=W+D,X=T+D;I===!0?v.push(X,X+1,H):v.push(X+1,X,H),_+=3}p.addGroup(y,_,I===!0?1:2),y+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new St(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class cu extends St{constructor(e=1,i=1,s=32,l=1,c=!1,d=0,h=Math.PI*2){super(0,e,i,s,l,c,d,h),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:d,thetaLength:h}}static fromJSON(e){return new cu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ul extends Yn{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,v=m+1,S=e/h,g=i/m,E=[],w=[],P=[],b=[];for(let y=0;y<v;y++){const C=y*g-d;for(let B=0;B<p;B++){const I=B*S-c;w.push(I,-C,0),P.push(0,0,1),b.push(B/h),b.push(1-y/m)}}for(let y=0;y<m;y++)for(let C=0;C<h;C++){const B=C+p*y,I=C+p*(y+1),W=C+1+p*(y+1),F=C+1+p*y;E.push(B,I,F),E.push(I,W,F)}this.setIndex(E),this.setAttribute("position",new hn(w,3)),this.setAttribute("normal",new hn(P,3)),this.setAttribute("uv",new hn(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ul(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wn extends Yn{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(d+h,Math.PI);let p=0;const v=[],S=new ne,g=new ne,E=[],w=[],P=[],b=[];for(let y=0;y<=s;y++){const C=[],B=y/s;let I=0;y===0&&d===0?I=.5/i:y===s&&m===Math.PI&&(I=-.5/i);for(let W=0;W<=i;W++){const F=W/i;S.x=-e*Math.cos(l+F*c)*Math.sin(d+B*h),S.y=e*Math.cos(d+B*h),S.z=e*Math.sin(l+F*c)*Math.sin(d+B*h),w.push(S.x,S.y,S.z),g.copy(S).normalize(),P.push(g.x,g.y,g.z),b.push(F+I,1-B),C.push(p++)}v.push(C)}for(let y=0;y<s;y++)for(let C=0;C<i;C++){const B=v[y][C+1],I=v[y][C],W=v[y+1][C],F=v[y+1][C+1];(y!==0||d>0)&&E.push(B,I,F),(y!==s-1||m<Math.PI)&&E.push(I,W,F)}this.setIndex(E),this.setAttribute("position",new hn(w,3)),this.setAttribute("normal",new hn(P,3)),this.setAttribute("uv",new hn(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Vs extends Yn{constructor(e=1,i=.4,s=12,l=48,c=Math.PI*2,d=0,h=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:d,thetaLength:h},s=Math.floor(s),l=Math.floor(l);const m=[],p=[],v=[],S=[],g=new ne,E=new ne,w=new ne;for(let P=0;P<=s;P++){const b=d+P/s*h;for(let y=0;y<=l;y++){const C=y/l*c;E.x=(e+i*Math.cos(b))*Math.cos(C),E.y=(e+i*Math.cos(b))*Math.sin(C),E.z=i*Math.sin(b),p.push(E.x,E.y,E.z),g.x=e*Math.cos(C),g.y=e*Math.sin(C),w.subVectors(E,g).normalize(),v.push(w.x,w.y,w.z),S.push(y/l),S.push(P/s)}}for(let P=1;P<=s;P++)for(let b=1;b<=l;b++){const y=(l+1)*P+b-1,C=(l+1)*(P-1)+b-1,B=(l+1)*(P-1)+b,I=(l+1)*P+b;m.push(y,C,I),m.push(C,B,I)}this.setIndex(m),this.setAttribute("position",new hn(p,3)),this.setAttribute("normal",new hn(v,3)),this.setAttribute("uv",new hn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Zr(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(X_(l))l.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(X_(l[0])){const c=[];for(let d=0,h=l.length;d<h;d++)c[d]=l[d].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Xn(r){const e={};for(let i=0;i<r.length;i++){const s=Zr(r[i]);for(const l in s)e[l]=s[l]}return e}function X_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function CM(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function nv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const NM={clone:Zr,merge:Xn};var DM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ta extends Qr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DM,this.fragmentShader=LM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zr(e.uniforms),this.uniformsGroups=CM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class UM extends ta{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sl extends Qr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yh,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class OM extends Qr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class PM extends Qr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class mp extends Dn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class IM extends mp{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new it(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}toJSON(e){const i=super.toJSON(e);return i.object.groundColor=this.groundColor.getHex(),i}}const $d=new cn,W_=new ne,q_=new ne;class FM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=_i,this.map=null,this.mapPass=null,this.matrix=new cn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hp,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;W_.setFromMatrixPosition(e.matrixWorld),i.position.copy(W_),q_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(q_),i.updateMatrixWorld(),$d.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix($d,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===ll||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply($d)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Hc=new ne,Vc=new ms,qi=new ne;class iv extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=Qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hc,Vc,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hc,Vc,qi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Hc,Vc,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hc,Vc,qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const us=new ne,Y_=new ht,Z_=new ht;class Ni extends iv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Kh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($c*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kh*2*Math.atan(Math.tan($c*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,i){return this.getViewBounds(e,Y_,Z_),i.subVectors(Z_,Y_)}setViewOffset(e,i,s,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan($c*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class gp extends iv{constructor(e=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,d=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class zM extends FM{constructor(){super(new gp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class BM extends mp{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new zM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class GM extends mp{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Fr=-90,zr=1;class HM extends Dn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ni(Fr,zr,e,i);l.layers=this.layers,this.add(l);const c=new Ni(Fr,zr,e,i);c.layers=this.layers,this.add(c);const d=new Ni(Fr,zr,e,i);d.layers=this.layers,this.add(d);const h=new Ni(Fr,zr,e,i);h.layers=this.layers,this.add(h);const m=new Ni(Fr,zr,e,i);m.layers=this.layers,this.add(m);const p=new Ni(Fr,zr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(e===Qi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===ll)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,v]=this.children,S=e.getRenderTarget(),g=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const P=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let b=!1;e.isWebGLRenderer===!0?b=e.state.buffers.depth.getReversed():b=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,3,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),s.texture.generateMipmaps=P,e.setRenderTarget(s,5,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(S,g,E),e.xr.enabled=w,s.texture.needsPMREMUpdate=!0}}class VM extends Ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const K_=new cn;class kM{constructor(e,i,s=0,l=1/0){this.ray=new hu(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new dp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Lt("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return K_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(K_),this}intersectObject(e,i=!0,s=[]){return Qh(e,this,s,i),s.sort(Q_),s}intersectObjects(e,i=!0,s=[]){for(let l=0,c=e.length;l<c;l++)Qh(e[l],this,s,i);return s.sort(Q_),s}}function Q_(r,e){return r.distance-e.distance}function Qh(r,e,i,s){let l=!0;if(r.layers.test(e.layers)&&r.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let d=0,h=c.length;d<h;d++)Qh(c[d],e,i,!0)}}class jM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,lt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}class J_{constructor(e=1,i=0,s=0){this.radius=e,this.phi=i,this.theta=s}set(e,i,s){return this.radius=e,this.phi=i,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=wt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,s){return this.radius=Math.sqrt(e*e+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(wt(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const bp=class bp{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};bp.prototype.isMatrix2=!0;let $_=bp;class XM extends $x{constructor(e=10,i=10,s=4473924,l=8947848){s=new it(s),l=new it(l);const c=i/2,d=e/i,h=e/2,m=[],p=[];for(let g=0,E=0,w=-h;g<=i;g++,w+=d){m.push(-h,0,w,h,0,w),m.push(w,0,-h,w,0,h);const P=g===c?s:l;P.toArray(p,E),E+=3,P.toArray(p,E),E+=3,P.toArray(p,E),E+=3,P.toArray(p,E),E+=3}const v=new Yn;v.setAttribute("position",new hn(m,3)),v.setAttribute("color",new hn(p,3));const S=new pp({vertexColors:!0,toneMapped:!1});super(v,S),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const kc=new Kr;class WM extends $x{constructor(e,i=16776960){const s=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),l=new Float32Array(24),c=new Yn;c.setIndex(new Di(s,1)),c.setAttribute("position",new Di(l,3)),super(c,new pp({color:i,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&kc.setFromObject(this.object),kc.isEmpty())return;const e=kc.min,i=kc.max,s=this.geometry.attributes.position,l=s.array;l[0]=i.x,l[1]=i.y,l[2]=i.z,l[3]=e.x,l[4]=i.y,l[5]=i.z,l[6]=e.x,l[7]=e.y,l[8]=i.z,l[9]=i.x,l[10]=e.y,l[11]=i.z,l[12]=i.x,l[13]=i.y,l[14]=e.z,l[15]=e.x,l[16]=i.y,l[17]=e.z,l[18]=e.x,l[19]=e.y,l[20]=e.z,l[21]=i.x,l[22]=e.y,l[23]=e.z,s.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,i){return super.copy(e,i),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class qM extends _s{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){lt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function ex(r,e,i,s){const l=YM(s);switch(i){case Xx:return r*e;case qx:return r*e/l.components*l.byteLength;case rp:return r*e/l.components*l.byteLength;case qs:return r*e*2/l.components*l.byteLength;case op:return r*e*2/l.components*l.byteLength;case Wx:return r*e*3/l.components*l.byteLength;case Hi:return r*e*4/l.components*l.byteLength;case lp:return r*e*4/l.components*l.byteLength;case Zc:case Kc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Qc:case Jc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case vh:case Sh:return Math.max(r,16)*Math.max(e,8)/4;case xh:case yh:return Math.max(r,8)*Math.max(e,8)/2;case bh:case Mh:case Th:case Ah:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Eh:case tu:case wh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Nh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Uh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case zh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Bh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Gh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Hh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Vh:case kh:case jh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Xh:case Wh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case nu:case qh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function YM(r){switch(r){case _i:case Hx:return{byteLength:1,components:1};case rl:case Vx:case Ra:return{byteLength:2,components:1};case ap:case sp:return{byteLength:2,components:4};case ea:case ip:case Ki:return{byteLength:4,components:1};case kx:case jx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:np}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=np);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function av(){let r=null,e=!1,i=null,s=null;function l(c,d){i(c,d),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function ZM(r){const e=new WeakMap;function i(h,m){const p=h.array,v=h.usage,S=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,v),h.onUploadCallback();let E;if(p instanceof Float32Array)E=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?E=r.HALF_FLOAT:E=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=r.SHORT;else if(p instanceof Uint32Array)E=r.UNSIGNED_INT;else if(p instanceof Int32Array)E=r.INT;else if(p instanceof Int8Array)E=r.BYTE;else if(p instanceof Uint8Array)E=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:S}}function s(h,m,p){const v=m.array,S=m.updateRanges;if(r.bindBuffer(p,h),S.length===0)r.bufferSubData(p,0,v);else{S.sort((E,w)=>E.start-w.start);let g=0;for(let E=1;E<S.length;E++){const w=S[g],P=S[E];P.start<=w.start+w.count+1?w.count=Math.max(w.count,P.start+P.count-w.start):(++g,S[g]=P)}S.length=g+1;for(let E=0,w=S.length;E<w;E++){const P=S[E];r.bufferSubData(p,P.start*v.BYTES_PER_ELEMENT,v,P.start,P.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(r.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var KM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,JM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$M=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,t1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,n1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,i1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,s1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,r1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,o1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,l1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,c1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,u1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,m1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,g1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,x1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,v1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,y1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,S1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,b1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,E1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,T1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,A1="gl_FragColor = linearToOutputTexel( gl_FragColor );",w1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,R1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,C1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,N1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,D1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,L1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,U1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,O1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,P1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,I1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,z1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,B1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,H1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,V1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,k1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,j1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,X1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,q1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Y1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Z1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,K1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Q1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,J1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ME=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,EE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,AE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,UE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,OE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,PE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,IE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,GE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,XE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,WE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ZE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const KE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$E=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,aT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,rT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_T=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ST=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ET=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,TT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vt={alphahash_fragment:KM,alphahash_pars_fragment:QM,alphamap_fragment:JM,alphamap_pars_fragment:$M,alphatest_fragment:e1,alphatest_pars_fragment:t1,aomap_fragment:n1,aomap_pars_fragment:i1,batching_pars_vertex:a1,batching_vertex:s1,begin_vertex:r1,beginnormal_vertex:o1,bsdfs:l1,iridescence_fragment:c1,bumpmap_pars_fragment:u1,clipping_planes_fragment:f1,clipping_planes_pars_fragment:d1,clipping_planes_pars_vertex:h1,clipping_planes_vertex:p1,color_fragment:m1,color_pars_fragment:g1,color_pars_vertex:_1,color_vertex:x1,common:v1,cube_uv_reflection_fragment:y1,defaultnormal_vertex:S1,displacementmap_pars_vertex:b1,displacementmap_vertex:M1,emissivemap_fragment:E1,emissivemap_pars_fragment:T1,colorspace_fragment:A1,colorspace_pars_fragment:w1,envmap_fragment:R1,envmap_common_pars_fragment:C1,envmap_pars_fragment:N1,envmap_pars_vertex:D1,envmap_physical_pars_fragment:V1,envmap_vertex:L1,fog_vertex:U1,fog_pars_vertex:O1,fog_fragment:P1,fog_pars_fragment:I1,gradientmap_pars_fragment:F1,lightmap_pars_fragment:z1,lights_lambert_fragment:B1,lights_lambert_pars_fragment:G1,lights_pars_begin:H1,lights_toon_fragment:k1,lights_toon_pars_fragment:j1,lights_phong_fragment:X1,lights_phong_pars_fragment:W1,lights_physical_fragment:q1,lights_physical_pars_fragment:Y1,lights_fragment_begin:Z1,lights_fragment_maps:K1,lights_fragment_end:Q1,lightprobes_pars_fragment:J1,logdepthbuf_fragment:$1,logdepthbuf_pars_fragment:eE,logdepthbuf_pars_vertex:tE,logdepthbuf_vertex:nE,map_fragment:iE,map_pars_fragment:aE,map_particle_fragment:sE,map_particle_pars_fragment:rE,metalnessmap_fragment:oE,metalnessmap_pars_fragment:lE,morphinstance_vertex:cE,morphcolor_vertex:uE,morphnormal_vertex:fE,morphtarget_pars_vertex:dE,morphtarget_vertex:hE,normal_fragment_begin:pE,normal_fragment_maps:mE,normal_pars_fragment:gE,normal_pars_vertex:_E,normal_vertex:xE,normalmap_pars_fragment:vE,clearcoat_normal_fragment_begin:yE,clearcoat_normal_fragment_maps:SE,clearcoat_pars_fragment:bE,iridescence_pars_fragment:ME,opaque_fragment:EE,packing:TE,premultiplied_alpha_fragment:AE,project_vertex:wE,dithering_fragment:RE,dithering_pars_fragment:CE,roughnessmap_fragment:NE,roughnessmap_pars_fragment:DE,shadowmap_pars_fragment:LE,shadowmap_pars_vertex:UE,shadowmap_vertex:OE,shadowmask_pars_fragment:PE,skinbase_vertex:IE,skinning_pars_vertex:FE,skinning_vertex:zE,skinnormal_vertex:BE,specularmap_fragment:GE,specularmap_pars_fragment:HE,tonemapping_fragment:VE,tonemapping_pars_fragment:kE,transmission_fragment:jE,transmission_pars_fragment:XE,uv_pars_fragment:WE,uv_pars_vertex:qE,uv_vertex:YE,worldpos_vertex:ZE,background_vert:KE,background_frag:QE,backgroundCube_vert:JE,backgroundCube_frag:$E,cube_vert:eT,cube_frag:tT,depth_vert:nT,depth_frag:iT,distance_vert:aT,distance_frag:sT,equirect_vert:rT,equirect_frag:oT,linedashed_vert:lT,linedashed_frag:cT,meshbasic_vert:uT,meshbasic_frag:fT,meshlambert_vert:dT,meshlambert_frag:hT,meshmatcap_vert:pT,meshmatcap_frag:mT,meshnormal_vert:gT,meshnormal_frag:_T,meshphong_vert:xT,meshphong_frag:vT,meshphysical_vert:yT,meshphysical_frag:ST,meshtoon_vert:bT,meshtoon_frag:MT,points_vert:ET,points_frag:TT,shadow_vert:AT,shadow_frag:wT,sprite_vert:RT,sprite_frag:CT},Ve={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ne},probesMax:{value:new ne},probesResolution:{value:new ne}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Zi={basic:{uniforms:Xn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Xn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Xn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Xn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Xn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new it(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Xn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Xn([Ve.points,Ve.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Xn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Xn([Ve.common,Ve.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Xn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Xn([Ve.sprite,Ve.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distance:{uniforms:Xn([Ve.common,Ve.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distance_vert,fragmentShader:vt.distance_frag},shadow:{uniforms:Xn([Ve.lights,Ve.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Zi.physical={uniforms:Xn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const jc={r:0,b:0,g:0},NT=new cn,sv=new pt;sv.set(-1,0,0,0,1,0,0,0,1);function DT(r,e,i,s,l,c){const d=new it(0);let h=l===!0?0:1,m,p,v=null,S=0,g=null;function E(C){let B=C.isScene===!0?C.background:null;if(B&&B.isTexture){const I=C.backgroundBlurriness>0;B=e.get(B,I)}return B}function w(C){let B=!1;const I=E(C);I===null?b(d,h):I&&I.isColor&&(b(I,1),B=!0);const W=r.xr.getEnvironmentBlendMode();W==="additive"?i.buffers.color.setClear(0,0,0,1,c):W==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||B)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function P(C,B){const I=E(B);I&&(I.isCubeTexture||I.mapping===fu)?(p===void 0&&(p=new te(new Ee(1,1,1),new ta({name:"BackgroundCubeMaterial",uniforms:Zr(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(W,F,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=I,p.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(NT.makeRotationFromEuler(B.backgroundRotation)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(sv),p.material.toneMapped=Dt.getTransfer(I.colorSpace)!==qt,(v!==I||S!==I.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,v=I,S=I.version,g=r.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):I&&I.isTexture&&(m===void 0&&(m=new te(new ul(2,2),new ta({name:"BackgroundMaterial",uniforms:Zr(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=I,m.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,m.material.toneMapped=Dt.getTransfer(I.colorSpace)!==qt,I.matrixAutoUpdate===!0&&I.updateMatrix(),m.material.uniforms.uvTransform.value.copy(I.matrix),(v!==I||S!==I.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,v=I,S=I.version,g=r.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function b(C,B){C.getRGB(jc,nv(r)),i.buffers.color.setClear(jc.r,jc.g,jc.b,B,c)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(C,B=1){d.set(C),h=B,b(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(C){h=C,b(d,h)},render:w,addToRenderList:P,dispose:y}}function LT(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,d=!1;function h(T,D,H,X,j){let N=!1;const G=S(T,X,H,D);c!==G&&(c=G,p(c.object)),N=E(T,X,H,j),N&&w(T,X,H,j),j!==null&&e.update(j,r.ELEMENT_ARRAY_BUFFER),(N||d)&&(d=!1,I(T,D,H,X),j!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function m(){return r.createVertexArray()}function p(T){return r.bindVertexArray(T)}function v(T){return r.deleteVertexArray(T)}function S(T,D,H,X){const j=X.wireframe===!0;let N=s[D.id];N===void 0&&(N={},s[D.id]=N);const G=T.isInstancedMesh===!0?T.id:0;let Y=N[G];Y===void 0&&(Y={},N[G]=Y);let ae=Y[H.id];ae===void 0&&(ae={},Y[H.id]=ae);let de=ae[j];return de===void 0&&(de=g(m()),ae[j]=de),de}function g(T){const D=[],H=[],X=[];for(let j=0;j<i;j++)D[j]=0,H[j]=0,X[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:X,object:T,attributes:{},index:null}}function E(T,D,H,X){const j=c.attributes,N=D.attributes;let G=0;const Y=H.getAttributes();for(const ae in Y)if(Y[ae].location>=0){const V=j[ae];let J=N[ae];if(J===void 0&&(ae==="instanceMatrix"&&T.instanceMatrix&&(J=T.instanceMatrix),ae==="instanceColor"&&T.instanceColor&&(J=T.instanceColor)),V===void 0||V.attribute!==J||J&&V.data!==J.data)return!0;G++}return c.attributesNum!==G||c.index!==X}function w(T,D,H,X){const j={},N=D.attributes;let G=0;const Y=H.getAttributes();for(const ae in Y)if(Y[ae].location>=0){let V=N[ae];V===void 0&&(ae==="instanceMatrix"&&T.instanceMatrix&&(V=T.instanceMatrix),ae==="instanceColor"&&T.instanceColor&&(V=T.instanceColor));const J={};J.attribute=V,V&&V.data&&(J.data=V.data),j[ae]=J,G++}c.attributes=j,c.attributesNum=G,c.index=X}function P(){const T=c.newAttributes;for(let D=0,H=T.length;D<H;D++)T[D]=0}function b(T){y(T,0)}function y(T,D){const H=c.newAttributes,X=c.enabledAttributes,j=c.attributeDivisors;H[T]=1,X[T]===0&&(r.enableVertexAttribArray(T),X[T]=1),j[T]!==D&&(r.vertexAttribDivisor(T,D),j[T]=D)}function C(){const T=c.newAttributes,D=c.enabledAttributes;for(let H=0,X=D.length;H<X;H++)D[H]!==T[H]&&(r.disableVertexAttribArray(H),D[H]=0)}function B(T,D,H,X,j,N,G){G===!0?r.vertexAttribIPointer(T,D,H,j,N):r.vertexAttribPointer(T,D,H,X,j,N)}function I(T,D,H,X){P();const j=X.attributes,N=H.getAttributes(),G=D.defaultAttributeValues;for(const Y in N){const ae=N[Y];if(ae.location>=0){let de=j[Y];if(de===void 0&&(Y==="instanceMatrix"&&T.instanceMatrix&&(de=T.instanceMatrix),Y==="instanceColor"&&T.instanceColor&&(de=T.instanceColor)),de!==void 0){const V=de.normalized,J=de.itemSize,xe=e.get(de);if(xe===void 0)continue;const ve=xe.buffer,Te=xe.type,se=xe.bytesPerElement,Me=Te===r.INT||Te===r.UNSIGNED_INT||de.gpuType===ip;if(de.isInterleavedBufferAttribute){const Re=de.data,ke=Re.stride,rt=de.offset;if(Re.isInstancedInterleavedBuffer){for(let et=0;et<ae.locationSize;et++)y(ae.location+et,Re.meshPerAttribute);T.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let et=0;et<ae.locationSize;et++)b(ae.location+et);r.bindBuffer(r.ARRAY_BUFFER,ve);for(let et=0;et<ae.locationSize;et++)B(ae.location+et,J/ae.locationSize,Te,V,ke*se,(rt+J/ae.locationSize*et)*se,Me)}else{if(de.isInstancedBufferAttribute){for(let Re=0;Re<ae.locationSize;Re++)y(ae.location+Re,de.meshPerAttribute);T.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Re=0;Re<ae.locationSize;Re++)b(ae.location+Re);r.bindBuffer(r.ARRAY_BUFFER,ve);for(let Re=0;Re<ae.locationSize;Re++)B(ae.location+Re,J/ae.locationSize,Te,V,J*se,J/ae.locationSize*Re*se,Me)}}else if(G!==void 0){const V=G[Y];if(V!==void 0)switch(V.length){case 2:r.vertexAttrib2fv(ae.location,V);break;case 3:r.vertexAttrib3fv(ae.location,V);break;case 4:r.vertexAttrib4fv(ae.location,V);break;default:r.vertexAttrib1fv(ae.location,V)}}}}C()}function W(){M();for(const T in s){const D=s[T];for(const H in D){const X=D[H];for(const j in X){const N=X[j];for(const G in N)v(N[G].object),delete N[G];delete X[j]}}delete s[T]}}function F(T){if(s[T.id]===void 0)return;const D=s[T.id];for(const H in D){const X=D[H];for(const j in X){const N=X[j];for(const G in N)v(N[G].object),delete N[G];delete X[j]}}delete s[T.id]}function k(T){for(const D in s){const H=s[D];for(const X in H){const j=H[X];if(j[T.id]===void 0)continue;const N=j[T.id];for(const G in N)v(N[G].object),delete N[G];delete j[T.id]}}}function _(T){for(const D in s){const H=s[D],X=T.isInstancedMesh===!0?T.id:0,j=H[X];if(j!==void 0){for(const N in j){const G=j[N];for(const Y in G)v(G[Y].object),delete G[Y];delete j[N]}delete H[X],Object.keys(H).length===0&&delete s[D]}}}function M(){R(),d=!0,c!==l&&(c=l,p(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:M,resetDefaultState:R,dispose:W,releaseStatesOfGeometry:F,releaseStatesOfObject:_,releaseStatesOfProgram:k,initAttributes:P,enableAttribute:b,disableUnusedAttributes:C}}function UT(r,e,i){let s;function l(m){s=m}function c(m,p){r.drawArrays(s,m,p),i.update(p,s,1)}function d(m,p,v){v!==0&&(r.drawArraysInstanced(s,m,p,v),i.update(p,s,v))}function h(m,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,v);let g=0;for(let E=0;E<v;E++)g+=p[E];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function OT(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(k){return!(k!==Hi&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(k){const _=k===Ra&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==_i&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Ki&&!_)}function m(k){if(k==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(lt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const S=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=r.getParameter(r.MAX_TEXTURE_SIZE),b=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),B=r.getParameter(r.MAX_VARYING_VECTORS),I=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),W=r.getParameter(r.MAX_SAMPLES),F=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:E,maxVertexTextures:w,maxTextureSize:P,maxCubemapSize:b,maxAttributes:y,maxVertexUniforms:C,maxVaryings:B,maxFragmentUniforms:I,maxSamples:W,samples:F}}function PT(r){const e=this;let i=null,s=0,l=!1,c=!1;const d=new fs,h=new pt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const E=S.length!==0||g||s!==0||l;return l=g,s=S.length,E},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,g){i=v(S,g,0)},this.setState=function(S,g,E){const w=S.clippingPlanes,P=S.clipIntersection,b=S.clipShadows,y=r.get(S);if(!l||w===null||w.length===0||c&&!b)c?v(null):p();else{const C=c?0:s,B=C*4;let I=y.clippingState||null;m.value=I,I=v(w,g,B,E);for(let W=0;W!==B;++W)I[W]=i[W];y.clippingState=I,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=C}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(S,g,E,w){const P=S!==null?S.length:0;let b=null;if(P!==0){if(b=m.value,w!==!0||b===null){const y=E+P*4,C=g.matrixWorldInverse;h.getNormalMatrix(C),(b===null||b.length<y)&&(b=new Float32Array(y));for(let B=0,I=E;B!==P;++B,I+=4)d.copy(S[B]).applyMatrix4(C,h),d.normal.toArray(b,I),b[I+3]=d.constant}m.value=b,m.needsUpdate=!0}return e.numPlanes=P,e.numIntersection=0,b}}const hs=4,tx=[.125,.215,.35,.446,.526,.582],ks=20,IT=256,el=new gp,nx=new it;let eh=null,th=0,nh=0,ih=!1;const FT=new ne;class ix{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:d=256,position:h=FT}=c;eh=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(eh,th,nh),this._renderer.xr.enabled=ih,e.scissorTest=!1,Br(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ws||e.mapping===qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),eh=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Ra,format:Hi,colorSpace:iu,depthBuffer:!1},l=ax(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ax(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zT(c)),this._blurMaterial=GT(c,e,i),this._ggxMaterial=BT(c,e,i)}return l}_compileMaterial(e){const i=new te(new Yn,e);this._renderer.compile(i,el)}_sceneToCubeUV(e,i,s,l,c){const m=new Ni(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,E=S.toneMapping;S.getClearColor(nx),S.toneMapping=Ji,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(l),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new te(new Ee,new ru({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1})));const P=this._backgroundBox,b=P.material;let y=!1;const C=e.background;C?C.isColor&&(b.color.copy(C),e.background=null,y=!0):(b.color.copy(nx),y=!0);for(let B=0;B<6;B++){const I=B%3;I===0?(m.up.set(0,p[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[B],c.y,c.z)):I===1?(m.up.set(0,0,p[B]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[B],c.z)):(m.up.set(0,p[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[B]));const W=this._cubeSize;Br(l,I*W,B>2?W:0,W,W),S.setRenderTarget(l),y&&S.render(P,m),S.render(e,m)}S.toneMapping=E,S.autoClear=g,e.background=C}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Ws||e.mapping===qr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=rx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sx());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Br(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,el)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),S=Math.sqrt(p*p-v*v),g=0+p*1.25,E=S*g,{_lodMax:w}=this,P=this._sizeLods[s],b=3*P*(s>w-hs?s-w+hs:0),y=4*(this._cubeSize-P);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=w-i,Br(c,b,y,3*P,2*P),l.setRenderTarget(c),l.render(h,el),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=w-s,Br(e,b,y,3*P,2*P),l.setRenderTarget(e),l.render(h,el)}_blur(e,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",c),this._halfBlur(d,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Lt("blur direction must be either latitudinal or longitudinal!");const v=3,S=this._lodMeshes[l];S.material=p;const g=p.uniforms,E=this._sizeLods[s]-1,w=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*ks-1),P=c/w,b=isFinite(c)?1+Math.floor(v*P):ks;b>ks&&lt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${ks}`);const y=[];let C=0;for(let k=0;k<ks;++k){const _=k/P,M=Math.exp(-_*_/2);y.push(M),k===0?C+=M:k<b&&(C+=2*M)}for(let k=0;k<y.length;k++)y[k]=y[k]/C;g.envMap.value=e.texture,g.samples.value=b,g.weights.value=y,g.latitudinal.value=d==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:B}=this;g.dTheta.value=w,g.mipInt.value=B-s;const I=this._sizeLods[l],W=3*I*(l>B-hs?l-B+hs:0),F=4*(this._cubeSize-I);Br(i,W,F,3*I,2*I),m.setRenderTarget(i),m.render(S,el)}}function zT(r){const e=[],i=[],s=[];let l=r;const c=r-hs+1+tx.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);e.push(h);let m=1/h;d>r-hs?m=tx[d-r+hs-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),v=-p,S=1+p,g=[v,v,S,v,S,S,v,v,S,S,v,S],E=6,w=6,P=3,b=2,y=1,C=new Float32Array(P*w*E),B=new Float32Array(b*w*E),I=new Float32Array(y*w*E);for(let F=0;F<E;F++){const k=F%3*2/3-1,_=F>2?0:-1,M=[k,_,0,k+2/3,_,0,k+2/3,_+1,0,k,_,0,k+2/3,_+1,0,k,_+1,0];C.set(M,P*w*F),B.set(g,b*w*F);const R=[F,F,F,F,F,F];I.set(R,y*w*F)}const W=new Yn;W.setAttribute("position",new Di(C,P)),W.setAttribute("uv",new Di(B,b)),W.setAttribute("faceIndex",new Di(I,y)),s.push(new te(W,null)),l>hs&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function ax(r,e,i){const s=new $i(r,e,i);return s.texture.mapping=fu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Br(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function BT(r,e,i){return new ta({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:IT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function GT(r,e,i){const s=new Float32Array(ks),l=new ne(0,1,0);return new ta({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function sx(){return new ta({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function rx(){return new ta({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function pu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class rv extends $i{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new ev(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ee(5,5,5),c=new ta({name:"CubemapFromEquirect",uniforms:Zr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ii,blending:Aa});c.uniforms.tEquirect.value=i;const d=new te(l,c),h=i.minFilter;return i.minFilter===js&&(i.minFilter=kn),new HM(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(c)}}function HT(r){let e=new WeakMap,i=new WeakMap,s=null;function l(g,E=!1){return g==null?null:E?d(g):c(g)}function c(g){if(g&&g.isTexture){const E=g.mapping;if(E===Ad||E===wd)if(e.has(g)){const w=e.get(g).texture;return h(w,g.mapping)}else{const w=g.image;if(w&&w.height>0){const P=new rv(w.height);return P.fromEquirectangularTexture(r,g),e.set(g,P),g.addEventListener("dispose",p),h(P.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const E=g.mapping,w=E===Ad||E===wd,P=E===Ws||E===qr;if(w||P){let b=i.get(g);const y=b!==void 0?b.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return s===null&&(s=new ix(r)),b=w?s.fromEquirectangular(g,b):s.fromCubemap(g,b),b.texture.pmremVersion=g.pmremVersion,i.set(g,b),b.texture;if(b!==void 0)return b.texture;{const C=g.image;return w&&C&&C.height>0||P&&C&&m(C)?(s===null&&(s=new ix(r)),b=w?s.fromEquirectangular(g):s.fromCubemap(g),b.texture.pmremVersion=g.pmremVersion,i.set(g,b),g.addEventListener("dispose",v),b.texture):null}}}return g}function h(g,E){return E===Ad?g.mapping=Ws:E===wd&&(g.mapping=qr),g}function m(g){let E=0;const w=6;for(let P=0;P<w;P++)g[P]!==void 0&&E++;return E===w}function p(g){const E=g.target;E.removeEventListener("dispose",p);const w=e.get(E);w!==void 0&&(e.delete(E),w.dispose())}function v(g){const E=g.target;E.removeEventListener("dispose",v);const w=i.get(E);w!==void 0&&(i.delete(E),w.dispose())}function S(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:S}}function VT(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Zh("WebGLRenderer: "+s+" extension not supported."),l}}}function kT(r,e,i,s){const l={},c=new WeakMap;function d(S){const g=S.target;g.index!==null&&e.remove(g.index);for(const w in g.attributes)e.remove(g.attributes[w]);g.removeEventListener("dispose",d),delete l[g.id];const E=c.get(g);E&&(e.remove(E),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(S,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(S){const g=S.attributes;for(const E in g)e.update(g[E],r.ARRAY_BUFFER)}function p(S){const g=[],E=S.index,w=S.attributes.position;let P=0;if(w===void 0)return;if(E!==null){const C=E.array;P=E.version;for(let B=0,I=C.length;B<I;B+=3){const W=C[B+0],F=C[B+1],k=C[B+2];g.push(W,F,F,k,k,W)}}else{const C=w.array;P=w.version;for(let B=0,I=C.length/3-1;B<I;B+=3){const W=B+0,F=B+1,k=B+2;g.push(W,F,F,k,k,W)}}const b=new(w.count>=65535?Jx:Qx)(g,1);b.version=P;const y=c.get(S);y&&e.remove(y),c.set(S,b)}function v(S){const g=c.get(S);if(g){const E=S.index;E!==null&&g.version<E.version&&p(S)}else p(S);return c.get(S)}return{get:h,update:m,getWireframeAttribute:v}}function jT(r,e,i){let s;function l(S){s=S}let c,d;function h(S){c=S.type,d=S.bytesPerElement}function m(S,g){r.drawElements(s,g,c,S*d),i.update(g,s,1)}function p(S,g,E){E!==0&&(r.drawElementsInstanced(s,g,c,S*d,E),i.update(g,s,E))}function v(S,g,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,S,0,E);let P=0;for(let b=0;b<E;b++)P+=g[b];i.update(P,s,1)}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v}function XT(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:Lt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function WT(r,e,i){const s=new WeakMap,l=new dn;function c(d,h,m){const p=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,S=v!==void 0?v.length:0;let g=s.get(h);if(g===void 0||g.count!==S){let R=function(){_.dispose(),s.delete(h),h.removeEventListener("dispose",R)};var E=R;g!==void 0&&g.texture.dispose();const w=h.morphAttributes.position!==void 0,P=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],B=h.morphAttributes.color||[];let I=0;w===!0&&(I=1),P===!0&&(I=2),b===!0&&(I=3);let W=h.attributes.position.count*I,F=1;W>e.maxTextureSize&&(F=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const k=new Float32Array(W*F*4*S),_=new Zx(k,W,F,S);_.type=Ki,_.needsUpdate=!0;const M=I*4;for(let T=0;T<S;T++){const D=y[T],H=C[T],X=B[T],j=W*F*4*T;for(let N=0;N<D.count;N++){const G=N*M;w===!0&&(l.fromBufferAttribute(D,N),k[j+G+0]=l.x,k[j+G+1]=l.y,k[j+G+2]=l.z,k[j+G+3]=0),P===!0&&(l.fromBufferAttribute(H,N),k[j+G+4]=l.x,k[j+G+5]=l.y,k[j+G+6]=l.z,k[j+G+7]=0),b===!0&&(l.fromBufferAttribute(X,N),k[j+G+8]=l.x,k[j+G+9]=l.y,k[j+G+10]=l.z,k[j+G+11]=X.itemSize===4?l.w:1)}}g={count:S,texture:_,size:new ht(W,F)},s.set(h,g),h.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let w=0;for(let b=0;b<p.length;b++)w+=p[b];const P=h.morphTargetsRelative?1:1-w;m.getUniforms().setValue(r,"morphTargetBaseInfluence",P),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function qT(r,e,i,s,l){let c=new WeakMap;function d(p){const v=l.render.frame,S=p.geometry,g=e.get(p,S);if(c.get(g)!==v&&(e.update(g),c.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==v&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,v))),p.isSkinnedMesh){const E=p.skeleton;c.get(E)!==v&&(E.update(),c.set(E,v))}return g}function h(){c=new WeakMap}function m(p){const v=p.target;v.removeEventListener("dispose",m),s.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:d,dispose:h}}const YT={[Ux]:"LINEAR_TONE_MAPPING",[Ox]:"REINHARD_TONE_MAPPING",[Px]:"CINEON_TONE_MAPPING",[Ix]:"ACES_FILMIC_TONE_MAPPING",[zx]:"AGX_TONE_MAPPING",[Bx]:"NEUTRAL_TONE_MAPPING",[Fx]:"CUSTOM_TONE_MAPPING"};function ZT(r,e,i,s,l){const c=new $i(e,i,{type:r,depthBuffer:s,stencilBuffer:l,depthTexture:s?new Yr(e,i):void 0}),d=new $i(e,i,{type:Ra,depthBuffer:!1,stencilBuffer:!1}),h=new Yn;h.setAttribute("position",new hn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new hn([0,2,0,0,2,0],2));const m=new UM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new te(h,m),v=new gp(-1,1,1,-1,0,1);let S=null,g=null,E=!1,w,P=null,b=[],y=!1;this.setSize=function(C,B){c.setSize(C,B),d.setSize(C,B);for(let I=0;I<b.length;I++){const W=b[I];W.setSize&&W.setSize(C,B)}},this.setEffects=function(C){b=C,y=b.length>0&&b[0].isRenderPass===!0;const B=c.width,I=c.height;for(let W=0;W<b.length;W++){const F=b[W];F.setSize&&F.setSize(B,I)}},this.begin=function(C,B){if(E||C.toneMapping===Ji&&b.length===0)return!1;if(P=B,B!==null){const I=B.width,W=B.height;(c.width!==I||c.height!==W)&&this.setSize(I,W)}return y===!1&&C.setRenderTarget(c),w=C.toneMapping,C.toneMapping=Ji,!0},this.hasRenderPass=function(){return y},this.end=function(C,B){C.toneMapping=w,E=!0;let I=c,W=d;for(let F=0;F<b.length;F++){const k=b[F];if(k.enabled!==!1&&(k.render(C,W,I,B),k.needsSwap!==!1)){const _=I;I=W,W=_}}if(S!==C.outputColorSpace||g!==C.toneMapping){S=C.outputColorSpace,g=C.toneMapping,m.defines={},Dt.getTransfer(S)===qt&&(m.defines.SRGB_TRANSFER="");const F=YT[g];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=I.texture,C.setRenderTarget(P),C.render(p,v),P=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),d.dispose(),h.dispose(),m.dispose()}}const ov=new qn,Jh=new Yr(1,1),lv=new Zx,cv=new cM,uv=new ev,ox=[],lx=[],cx=new Float32Array(16),ux=new Float32Array(9),fx=new Float32Array(4);function Jr(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=ox[l];if(c===void 0&&(c=new Float32Array(l),ox[l]=c),e!==0){s.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=i,r[d].toArray(c,h)}return c}function wn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function Rn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function mu(r,e){let i=lx[e];i===void 0&&(i=new Int32Array(e),lx[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function KT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function QT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(wn(i,e))return;r.uniform2fv(this.addr,e),Rn(i,e)}}function JT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(wn(i,e))return;r.uniform3fv(this.addr,e),Rn(i,e)}}function $T(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(wn(i,e))return;r.uniform4fv(this.addr,e),Rn(i,e)}}function eA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(wn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),Rn(i,e)}else{if(wn(i,s))return;fx.set(s),r.uniformMatrix2fv(this.addr,!1,fx),Rn(i,s)}}function tA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(wn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),Rn(i,e)}else{if(wn(i,s))return;ux.set(s),r.uniformMatrix3fv(this.addr,!1,ux),Rn(i,s)}}function nA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(wn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),Rn(i,e)}else{if(wn(i,s))return;cx.set(s),r.uniformMatrix4fv(this.addr,!1,cx),Rn(i,s)}}function iA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function aA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(wn(i,e))return;r.uniform2iv(this.addr,e),Rn(i,e)}}function sA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(wn(i,e))return;r.uniform3iv(this.addr,e),Rn(i,e)}}function rA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(wn(i,e))return;r.uniform4iv(this.addr,e),Rn(i,e)}}function oA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function lA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(wn(i,e))return;r.uniform2uiv(this.addr,e),Rn(i,e)}}function cA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(wn(i,e))return;r.uniform3uiv(this.addr,e),Rn(i,e)}}function uA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(wn(i,e))return;r.uniform4uiv(this.addr,e),Rn(i,e)}}function fA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Jh.compareFunction=i.isReversedDepthBuffer()?up:cp,c=Jh):c=ov,i.setTexture2D(e||c,l)}function dA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||cv,l)}function hA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||uv,l)}function pA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||lv,l)}function mA(r){switch(r){case 5126:return KT;case 35664:return QT;case 35665:return JT;case 35666:return $T;case 35674:return eA;case 35675:return tA;case 35676:return nA;case 5124:case 35670:return iA;case 35667:case 35671:return aA;case 35668:case 35672:return sA;case 35669:case 35673:return rA;case 5125:return oA;case 36294:return lA;case 36295:return cA;case 36296:return uA;case 35678:case 36198:case 36298:case 36306:case 35682:return fA;case 35679:case 36299:case 36307:return dA;case 35680:case 36300:case 36308:case 36293:return hA;case 36289:case 36303:case 36311:case 36292:return pA}}function gA(r,e){r.uniform1fv(this.addr,e)}function _A(r,e){const i=Jr(e,this.size,2);r.uniform2fv(this.addr,i)}function xA(r,e){const i=Jr(e,this.size,3);r.uniform3fv(this.addr,i)}function vA(r,e){const i=Jr(e,this.size,4);r.uniform4fv(this.addr,i)}function yA(r,e){const i=Jr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function SA(r,e){const i=Jr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function bA(r,e){const i=Jr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function MA(r,e){r.uniform1iv(this.addr,e)}function EA(r,e){r.uniform2iv(this.addr,e)}function TA(r,e){r.uniform3iv(this.addr,e)}function AA(r,e){r.uniform4iv(this.addr,e)}function wA(r,e){r.uniform1uiv(this.addr,e)}function RA(r,e){r.uniform2uiv(this.addr,e)}function CA(r,e){r.uniform3uiv(this.addr,e)}function NA(r,e){r.uniform4uiv(this.addr,e)}function DA(r,e,i){const s=this.cache,l=e.length,c=mu(i,l);wn(s,c)||(r.uniform1iv(this.addr,c),Rn(s,c));let d;this.type===r.SAMPLER_2D_SHADOW?d=Jh:d=ov;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||d,c[h])}function LA(r,e,i){const s=this.cache,l=e.length,c=mu(i,l);wn(s,c)||(r.uniform1iv(this.addr,c),Rn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||cv,c[d])}function UA(r,e,i){const s=this.cache,l=e.length,c=mu(i,l);wn(s,c)||(r.uniform1iv(this.addr,c),Rn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||uv,c[d])}function OA(r,e,i){const s=this.cache,l=e.length,c=mu(i,l);wn(s,c)||(r.uniform1iv(this.addr,c),Rn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||lv,c[d])}function PA(r){switch(r){case 5126:return gA;case 35664:return _A;case 35665:return xA;case 35666:return vA;case 35674:return yA;case 35675:return SA;case 35676:return bA;case 5124:case 35670:return MA;case 35667:case 35671:return EA;case 35668:case 35672:return TA;case 35669:case 35673:return AA;case 5125:return wA;case 36294:return RA;case 36295:return CA;case 36296:return NA;case 35678:case 36198:case 36298:case 36306:case 35682:return DA;case 35679:case 36299:case 36307:return LA;case 35680:case 36300:case 36308:case 36293:return UA;case 36289:case 36303:case 36311:case 36292:return OA}}class IA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=mA(i.type)}}class FA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=PA(i.type)}}class zA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(e,i[h.id],s)}}}const ah=/(\w+)(\])?(\[|\.)?/g;function dx(r,e){r.seq.push(e),r.map[e.id]=e}function BA(r,e,i){const s=r.name,l=s.length;for(ah.lastIndex=0;;){const c=ah.exec(s),d=ah.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){dx(i,p===void 0?new IA(h,r,e):new FA(h,r,e));break}else{let S=i.map[h];S===void 0&&(S=new zA(h),dx(i,S)),i=S}}}class eu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=e.getActiveUniform(i,d),m=e.getUniformLocation(i,h.name);BA(h,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function hx(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const GA=37297;let HA=0;function VA(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const px=new pt;function kA(r){Dt._getMatrix(px,Dt.workingColorSpace,r);const e=`mat3( ${px.elements.map(i=>i.toFixed(4))} )`;switch(Dt.getTransfer(r)){case au:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function mx(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+VA(r.getShaderSource(e),h)}else return c}function jA(r,e){const i=kA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const XA={[Ux]:"Linear",[Ox]:"Reinhard",[Px]:"Cineon",[Ix]:"ACESFilmic",[zx]:"AgX",[Bx]:"Neutral",[Fx]:"Custom"};function WA(r,e){const i=XA[e];return i===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Xc=new ne;function qA(){Dt.getLuminanceCoefficients(Xc);const r=Xc.x.toFixed(4),e=Xc.y.toFixed(4),i=Xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(il).join(`
`)}function ZA(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function KA(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),d=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:r.getAttribLocation(e,d),locationSize:h}}return i}function il(r){return r!==""}function gx(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _x(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QA=/^[ \t]*#include +<([\w\d./]+)>/gm;function $h(r){return r.replace(QA,$A)}const JA=new Map;function $A(r,e){let i=vt[e];if(i===void 0){const s=JA.get(e);if(s!==void 0)i=vt[s],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return $h(i)}const e2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xx(r){return r.replace(e2,t2)}function t2(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function vx(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const n2={[Yc]:"SHADOWMAP_TYPE_PCF",[nl]:"SHADOWMAP_TYPE_VSM"};function i2(r){return n2[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const a2={[Ws]:"ENVMAP_TYPE_CUBE",[qr]:"ENVMAP_TYPE_CUBE",[fu]:"ENVMAP_TYPE_CUBE_UV"};function s2(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":a2[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const r2={[qr]:"ENVMAP_MODE_REFRACTION"};function o2(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":r2[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const l2={[Lx]:"ENVMAP_BLENDING_MULTIPLY",[Hb]:"ENVMAP_BLENDING_MIX",[Vb]:"ENVMAP_BLENDING_ADD"};function c2(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":l2[r.combine]||"ENVMAP_BLENDING_NONE"}function u2(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function f2(r,e,i,s){const l=r.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=i2(i),p=s2(i),v=o2(i),S=c2(i),g=u2(i),E=YA(i),w=ZA(c),P=l.createProgram();let b,y,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w].filter(il).join(`
`),b.length>0&&(b+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w].filter(il).join(`
`),y.length>0&&(y+=`
`)):(b=[vx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(il).join(`
`),y=[vx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ji?"#define TONE_MAPPING":"",i.toneMapping!==Ji?vt.tonemapping_pars_fragment:"",i.toneMapping!==Ji?WA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,jA("linearToOutputTexel",i.outputColorSpace),qA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(il).join(`
`)),d=$h(d),d=gx(d,i),d=_x(d,i),h=$h(h),h=gx(h,i),h=_x(h,i),d=xx(d),h=xx(h),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,b=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,y=["#define varying in",i.glslVersion===E_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===E_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const B=C+b+d,I=C+y+h,W=hx(l,l.VERTEX_SHADER,B),F=hx(l,l.FRAGMENT_SHADER,I);l.attachShader(P,W),l.attachShader(P,F),i.index0AttributeName!==void 0?l.bindAttribLocation(P,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(P,0,"position"),l.linkProgram(P);function k(T){if(r.debug.checkShaderErrors){const D=l.getProgramInfoLog(P)||"",H=l.getShaderInfoLog(W)||"",X=l.getShaderInfoLog(F)||"",j=D.trim(),N=H.trim(),G=X.trim();let Y=!0,ae=!0;if(l.getProgramParameter(P,l.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,P,W,F);else{const de=mx(l,W,"vertex"),V=mx(l,F,"fragment");Lt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(P,l.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+j+`
`+de+`
`+V)}else j!==""?lt("WebGLProgram: Program Info Log:",j):(N===""||G==="")&&(ae=!1);ae&&(T.diagnostics={runnable:Y,programLog:j,vertexShader:{log:N,prefix:b},fragmentShader:{log:G,prefix:y}})}l.deleteShader(W),l.deleteShader(F),_=new eu(l,P),M=KA(l,P)}let _;this.getUniforms=function(){return _===void 0&&k(this),_};let M;this.getAttributes=function(){return M===void 0&&k(this),M};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(P,GA)),R},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(P),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=HA++,this.cacheKey=e,this.usedTimes=1,this.program=P,this.vertexShader=W,this.fragmentShader=F,this}let d2=0;class h2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new p2(e),i.set(e,s)),s}}class p2{constructor(e){this.id=d2++,this.code=e,this.usedTimes=0}}function m2(r){return r===qs||r===tu||r===nu}function g2(r,e,i,s,l,c){const d=new dp,h=new h2,m=new Set,p=[],v=new Map,S=s.logarithmicDepthBuffer;let g=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(_){return m.add(_),_===0?"uv":`uv${_}`}function P(_,M,R,T,D,H){const X=T.fog,j=D.geometry,N=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?T.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Y=e.get(_.envMap||N,G),ae=Y&&Y.mapping===fu?Y.image.height:null,de=E[_.type];_.precision!==null&&(g=s.getMaxPrecision(_.precision),g!==_.precision&&lt("WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const V=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,J=V!==void 0?V.length:0;let xe=0;j.morphAttributes.position!==void 0&&(xe=1),j.morphAttributes.normal!==void 0&&(xe=2),j.morphAttributes.color!==void 0&&(xe=3);let ve,Te,se,Me;if(de){const ct=Zi[de];ve=ct.vertexShader,Te=ct.fragmentShader}else ve=_.vertexShader,Te=_.fragmentShader,h.update(_),se=h.getVertexShaderID(_),Me=h.getFragmentShaderID(_);const Re=r.getRenderTarget(),ke=r.state.buffers.depth.getReversed(),rt=D.isInstancedMesh===!0,et=D.isBatchedMesh===!0,Bt=!!_.map,Ie=!!_.matcap,$e=!!Y,Ye=!!_.aoMap,We=!!_.lightMap,bt=!!_.bumpMap,yt=!!_.normalMap,pn=!!_.displacementMap,Q=!!_.emissiveMap,Jt=!!_.metalnessMap,mt=!!_.roughnessMap,Ut=_.anisotropy>0,Ce=_.clearcoat>0,Gt=_.dispersion>0,z=_.iridescence>0,A=_.sheen>0,ie=_.transmission>0,Se=Ut&&!!_.anisotropyMap,we=Ce&&!!_.clearcoatMap,De=Ce&&!!_.clearcoatNormalMap,Pe=Ce&&!!_.clearcoatRoughnessMap,pe=z&&!!_.iridescenceMap,me=z&&!!_.iridescenceThicknessMap,Fe=A&&!!_.sheenColorMap,ze=A&&!!_.sheenRoughnessMap,Ue=!!_.specularMap,Le=!!_.specularColorMap,ut=!!_.specularIntensityMap,ft=ie&&!!_.transmissionMap,Mt=ie&&!!_.thicknessMap,Z=!!_.gradientMap,Ne=!!_.alphaMap,_e=_.alphaTest>0,He=!!_.alphaHash,Oe=!!_.extensions;let Ae=Ji;_.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(Ae=r.toneMapping);const Qe={shaderID:de,shaderType:_.type,shaderName:_.name,vertexShader:ve,fragmentShader:Te,defines:_.defines,customVertexShaderID:se,customFragmentShaderID:Me,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:et,batchingColor:et&&D._colorsTexture!==null,instancing:rt,instancingColor:rt&&D.instanceColor!==null,instancingMorph:rt&&D.morphTexture!==null,outputColorSpace:Re===null?r.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Dt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Bt,matcap:Ie,envMap:$e,envMapMode:$e&&Y.mapping,envMapCubeUVHeight:ae,aoMap:Ye,lightMap:We,bumpMap:bt,normalMap:yt,displacementMap:pn,emissiveMap:Q,normalMapObjectSpace:yt&&_.normalMapType===Xb,normalMapTangentSpace:yt&&_.normalMapType===Yh,packedNormalMap:yt&&_.normalMapType===Yh&&m2(_.normalMap.format),metalnessMap:Jt,roughnessMap:mt,anisotropy:Ut,anisotropyMap:Se,clearcoat:Ce,clearcoatMap:we,clearcoatNormalMap:De,clearcoatRoughnessMap:Pe,dispersion:Gt,iridescence:z,iridescenceMap:pe,iridescenceThicknessMap:me,sheen:A,sheenColorMap:Fe,sheenRoughnessMap:ze,specularMap:Ue,specularColorMap:Le,specularIntensityMap:ut,transmission:ie,transmissionMap:ft,thicknessMap:Mt,gradientMap:Z,opaque:_.transparent===!1&&_.blending===jr&&_.alphaToCoverage===!1,alphaMap:Ne,alphaTest:_e,alphaHash:He,combine:_.combine,mapUv:Bt&&w(_.map.channel),aoMapUv:Ye&&w(_.aoMap.channel),lightMapUv:We&&w(_.lightMap.channel),bumpMapUv:bt&&w(_.bumpMap.channel),normalMapUv:yt&&w(_.normalMap.channel),displacementMapUv:pn&&w(_.displacementMap.channel),emissiveMapUv:Q&&w(_.emissiveMap.channel),metalnessMapUv:Jt&&w(_.metalnessMap.channel),roughnessMapUv:mt&&w(_.roughnessMap.channel),anisotropyMapUv:Se&&w(_.anisotropyMap.channel),clearcoatMapUv:we&&w(_.clearcoatMap.channel),clearcoatNormalMapUv:De&&w(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&w(_.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&w(_.iridescenceMap.channel),iridescenceThicknessMapUv:me&&w(_.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&w(_.sheenColorMap.channel),sheenRoughnessMapUv:ze&&w(_.sheenRoughnessMap.channel),specularMapUv:Ue&&w(_.specularMap.channel),specularColorMapUv:Le&&w(_.specularColorMap.channel),specularIntensityMapUv:ut&&w(_.specularIntensityMap.channel),transmissionMapUv:ft&&w(_.transmissionMap.channel),thicknessMapUv:Mt&&w(_.thicknessMap.channel),alphaMapUv:Ne&&w(_.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(yt||Ut),vertexNormals:!!j.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!j.attributes.uv&&(Bt||Ne),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||j.attributes.normal===void 0&&yt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:ke,skinning:D.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:xe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Bt&&_.map.isVideoTexture===!0&&Dt.getTransfer(_.map.colorSpace)===qt,decodeVideoTextureEmissive:Q&&_.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(_.emissiveMap.colorSpace)===qt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===gi,flipSided:_.side===ii,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Oe&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&_.extensions.multiDraw===!0||et)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Qe.vertexUv1s=m.has(1),Qe.vertexUv2s=m.has(2),Qe.vertexUv3s=m.has(3),m.clear(),Qe}function b(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const R in _.defines)M.push(R),M.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(y(M,_),C(M,_),M.push(r.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function y(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function C(_,M){d.disableAll(),M.instancing&&d.enable(0),M.instancingColor&&d.enable(1),M.instancingMorph&&d.enable(2),M.matcap&&d.enable(3),M.envMap&&d.enable(4),M.normalMapObjectSpace&&d.enable(5),M.normalMapTangentSpace&&d.enable(6),M.clearcoat&&d.enable(7),M.iridescence&&d.enable(8),M.alphaTest&&d.enable(9),M.vertexColors&&d.enable(10),M.vertexAlphas&&d.enable(11),M.vertexUv1s&&d.enable(12),M.vertexUv2s&&d.enable(13),M.vertexUv3s&&d.enable(14),M.vertexTangents&&d.enable(15),M.anisotropy&&d.enable(16),M.alphaHash&&d.enable(17),M.batching&&d.enable(18),M.dispersion&&d.enable(19),M.batchingColor&&d.enable(20),M.gradientMap&&d.enable(21),M.packedNormalMap&&d.enable(22),M.vertexNormals&&d.enable(23),_.push(d.mask),d.disableAll(),M.fog&&d.enable(0),M.useFog&&d.enable(1),M.flatShading&&d.enable(2),M.logarithmicDepthBuffer&&d.enable(3),M.reversedDepthBuffer&&d.enable(4),M.skinning&&d.enable(5),M.morphTargets&&d.enable(6),M.morphNormals&&d.enable(7),M.morphColors&&d.enable(8),M.premultipliedAlpha&&d.enable(9),M.shadowMapEnabled&&d.enable(10),M.doubleSided&&d.enable(11),M.flipSided&&d.enable(12),M.useDepthPacking&&d.enable(13),M.dithering&&d.enable(14),M.transmission&&d.enable(15),M.sheen&&d.enable(16),M.opaque&&d.enable(17),M.pointsUvs&&d.enable(18),M.decodeVideoTexture&&d.enable(19),M.decodeVideoTextureEmissive&&d.enable(20),M.alphaToCoverage&&d.enable(21),M.numLightProbeGrids>0&&d.enable(22),_.push(d.mask)}function B(_){const M=E[_.type];let R;if(M){const T=Zi[M];R=NM.clone(T.uniforms)}else R=_.uniforms;return R}function I(_,M){let R=v.get(M);return R!==void 0?++R.usedTimes:(R=new f2(r,M,_,l),p.push(R),v.set(M,R)),R}function W(_){if(--_.usedTimes===0){const M=p.indexOf(_);p[M]=p[p.length-1],p.pop(),v.delete(_.cacheKey),_.destroy()}}function F(_){h.remove(_)}function k(){h.dispose()}return{getParameters:P,getProgramCacheKey:b,getUniforms:B,acquireProgram:I,releaseProgram:W,releaseShaderCache:F,programs:p,dispose:k}}function _2(){let r=new WeakMap;function e(d){return r.has(d)}function i(d){let h=r.get(d);return h===void 0&&(h={},r.set(d,h)),h}function s(d){r.delete(d)}function l(d,h,m){r.get(d)[h]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function x2(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function yx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Sx(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function d(g){let E=0;return g.isInstancedMesh&&(E+=2),g.isSkinnedMesh&&(E+=1),E}function h(g,E,w,P,b,y){let C=r[e];return C===void 0?(C={id:g.id,object:g,geometry:E,material:w,materialVariant:d(g),groupOrder:P,renderOrder:g.renderOrder,z:b,group:y},r[e]=C):(C.id=g.id,C.object=g,C.geometry=E,C.material=w,C.materialVariant=d(g),C.groupOrder=P,C.renderOrder=g.renderOrder,C.z=b,C.group=y),e++,C}function m(g,E,w,P,b,y){const C=h(g,E,w,P,b,y);w.transmission>0?s.push(C):w.transparent===!0?l.push(C):i.push(C)}function p(g,E,w,P,b,y){const C=h(g,E,w,P,b,y);w.transmission>0?s.unshift(C):w.transparent===!0?l.unshift(C):i.unshift(C)}function v(g,E){i.length>1&&i.sort(g||x2),s.length>1&&s.sort(E||yx),l.length>1&&l.sort(E||yx)}function S(){for(let g=e,E=r.length;g<E;g++){const w=r[g];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:S,sort:v}}function v2(){let r=new WeakMap;function e(s,l){const c=r.get(s);let d;return c===void 0?(d=new Sx,r.set(s,[d])):l>=c.length?(d=new Sx,c.push(d)):d=c[l],d}function i(){r=new WeakMap}return{get:e,dispose:i}}function y2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ne,color:new it};break;case"SpotLight":i={position:new ne,direction:new ne,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ne,color:new it,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ne,skyColor:new it,groundColor:new it};break;case"RectAreaLight":i={color:new it,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return r[e.id]=i,i}}}function S2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let b2=0;function M2(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function E2(r){const e=new y2,i=S2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ne);const l=new ne,c=new cn,d=new cn;function h(p){let v=0,S=0,g=0;for(let M=0;M<9;M++)s.probe[M].set(0,0,0);let E=0,w=0,P=0,b=0,y=0,C=0,B=0,I=0,W=0,F=0,k=0;p.sort(M2);for(let M=0,R=p.length;M<R;M++){const T=p[M],D=T.color,H=T.intensity,X=T.distance;let j=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===qs?j=T.shadow.map.texture:j=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)v+=D.r*H,S+=D.g*H,g+=D.b*H;else if(T.isLightProbe){for(let N=0;N<9;N++)s.probe[N].addScaledVector(T.sh.coefficients[N],H);k++}else if(T.isDirectionalLight){const N=e.get(T);if(N.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const G=T.shadow,Y=i.get(T);Y.shadowIntensity=G.intensity,Y.shadowBias=G.bias,Y.shadowNormalBias=G.normalBias,Y.shadowRadius=G.radius,Y.shadowMapSize=G.mapSize,s.directionalShadow[E]=Y,s.directionalShadowMap[E]=j,s.directionalShadowMatrix[E]=T.shadow.matrix,C++}s.directional[E]=N,E++}else if(T.isSpotLight){const N=e.get(T);N.position.setFromMatrixPosition(T.matrixWorld),N.color.copy(D).multiplyScalar(H),N.distance=X,N.coneCos=Math.cos(T.angle),N.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),N.decay=T.decay,s.spot[P]=N;const G=T.shadow;if(T.map&&(s.spotLightMap[W]=T.map,W++,G.updateMatrices(T),T.castShadow&&F++),s.spotLightMatrix[P]=G.matrix,T.castShadow){const Y=i.get(T);Y.shadowIntensity=G.intensity,Y.shadowBias=G.bias,Y.shadowNormalBias=G.normalBias,Y.shadowRadius=G.radius,Y.shadowMapSize=G.mapSize,s.spotShadow[P]=Y,s.spotShadowMap[P]=j,I++}P++}else if(T.isRectAreaLight){const N=e.get(T);N.color.copy(D).multiplyScalar(H),N.halfWidth.set(T.width*.5,0,0),N.halfHeight.set(0,T.height*.5,0),s.rectArea[b]=N,b++}else if(T.isPointLight){const N=e.get(T);if(N.color.copy(T.color).multiplyScalar(T.intensity),N.distance=T.distance,N.decay=T.decay,T.castShadow){const G=T.shadow,Y=i.get(T);Y.shadowIntensity=G.intensity,Y.shadowBias=G.bias,Y.shadowNormalBias=G.normalBias,Y.shadowRadius=G.radius,Y.shadowMapSize=G.mapSize,Y.shadowCameraNear=G.camera.near,Y.shadowCameraFar=G.camera.far,s.pointShadow[w]=Y,s.pointShadowMap[w]=j,s.pointShadowMatrix[w]=T.shadow.matrix,B++}s.point[w]=N,w++}else if(T.isHemisphereLight){const N=e.get(T);N.skyColor.copy(T.color).multiplyScalar(H),N.groundColor.copy(T.groundColor).multiplyScalar(H),s.hemi[y]=N,y++}}b>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ve.LTC_FLOAT_1,s.rectAreaLTC2=Ve.LTC_FLOAT_2):(s.rectAreaLTC1=Ve.LTC_HALF_1,s.rectAreaLTC2=Ve.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=S,s.ambient[2]=g;const _=s.hash;(_.directionalLength!==E||_.pointLength!==w||_.spotLength!==P||_.rectAreaLength!==b||_.hemiLength!==y||_.numDirectionalShadows!==C||_.numPointShadows!==B||_.numSpotShadows!==I||_.numSpotMaps!==W||_.numLightProbes!==k)&&(s.directional.length=E,s.spot.length=P,s.rectArea.length=b,s.point.length=w,s.hemi.length=y,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=B,s.pointShadowMap.length=B,s.spotShadow.length=I,s.spotShadowMap.length=I,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=B,s.spotLightMatrix.length=I+W-F,s.spotLightMap.length=W,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=k,_.directionalLength=E,_.pointLength=w,_.spotLength=P,_.rectAreaLength=b,_.hemiLength=y,_.numDirectionalShadows=C,_.numPointShadows=B,_.numSpotShadows=I,_.numSpotMaps=W,_.numLightProbes=k,s.version=b2++)}function m(p,v){let S=0,g=0,E=0,w=0,P=0;const b=v.matrixWorldInverse;for(let y=0,C=p.length;y<C;y++){const B=p[y];if(B.isDirectionalLight){const I=s.directional[S];I.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),I.direction.sub(l),I.direction.transformDirection(b),S++}else if(B.isSpotLight){const I=s.spot[E];I.position.setFromMatrixPosition(B.matrixWorld),I.position.applyMatrix4(b),I.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),I.direction.sub(l),I.direction.transformDirection(b),E++}else if(B.isRectAreaLight){const I=s.rectArea[w];I.position.setFromMatrixPosition(B.matrixWorld),I.position.applyMatrix4(b),d.identity(),c.copy(B.matrixWorld),c.premultiply(b),d.extractRotation(c),I.halfWidth.set(B.width*.5,0,0),I.halfHeight.set(0,B.height*.5,0),I.halfWidth.applyMatrix4(d),I.halfHeight.applyMatrix4(d),w++}else if(B.isPointLight){const I=s.point[g];I.position.setFromMatrixPosition(B.matrixWorld),I.position.applyMatrix4(b),g++}else if(B.isHemisphereLight){const I=s.hemi[P];I.direction.setFromMatrixPosition(B.matrixWorld),I.direction.transformDirection(b),P++}}}return{setup:h,setupView:m,state:s}}function bx(r){const e=new E2(r),i=[],s=[],l=[];function c(g){S.camera=g,i.length=0,s.length=0,l.length=0}function d(g){i.push(g)}function h(g){s.push(g)}function m(g){l.push(g)}function p(){e.setup(i)}function v(g){e.setupView(i,g)}const S={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:S,setupLights:p,setupLightsView:v,pushLight:d,pushShadow:h,pushLightProbeGrid:m}}function T2(r){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let h;return d===void 0?(h=new bx(r),e.set(l,[h])):c>=d.length?(h=new bx(r),d.push(h)):h=d[c],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const A2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,R2=[new ne(1,0,0),new ne(-1,0,0),new ne(0,1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1)],C2=[new ne(0,-1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1),new ne(0,-1,0),new ne(0,-1,0)],Mx=new cn,tl=new ne,sh=new ne;function N2(r,e,i){let s=new hp;const l=new ht,c=new ht,d=new dn,h=new OM,m=new PM,p={},v=i.maxTextureSize,S={[ps]:ii,[ii]:ps,[gi]:gi},g=new ta({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:A2,fragmentShader:w2}),E=g.clone();E.defines.HORIZONTAL_PASS=1;const w=new Yn;w.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const P=new te(w,g),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yc;let y=this.type;this.render=function(F,k,_){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||F.length===0)return;this.type===Dx&&(lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Yc);const M=r.getRenderTarget(),R=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),D=r.state;D.setBlending(Aa),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const H=y!==this.type;H&&k.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(j=>j.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,j=F.length;X<j;X++){const N=F[X],G=N.shadow;if(G===void 0){lt("WebGLShadowMap:",N,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const Y=G.getFrameExtents();l.multiply(Y),c.copy(G.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/Y.x),l.x=c.x*Y.x,G.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/Y.y),l.y=c.y*Y.y,G.mapSize.y=c.y));const ae=r.state.buffers.depth.getReversed();if(G.camera._reversedDepth=ae,G.map===null||H===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===nl){if(N.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new $i(l.x,l.y,{format:qs,type:Ra,minFilter:kn,magFilter:kn,generateMipmaps:!1}),G.map.texture.name=N.name+".shadowMap",G.map.depthTexture=new Yr(l.x,l.y,Ki),G.map.depthTexture.name=N.name+".shadowMapDepth",G.map.depthTexture.format=Ca,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Fn,G.map.depthTexture.magFilter=Fn}else N.isPointLight?(G.map=new rv(l.x),G.map.depthTexture=new RM(l.x,ea)):(G.map=new $i(l.x,l.y),G.map.depthTexture=new Yr(l.x,l.y,ea)),G.map.depthTexture.name=N.name+".shadowMap",G.map.depthTexture.format=Ca,this.type===Yc?(G.map.depthTexture.compareFunction=ae?up:cp,G.map.depthTexture.minFilter=kn,G.map.depthTexture.magFilter=kn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Fn,G.map.depthTexture.magFilter=Fn);G.camera.updateProjectionMatrix()}const de=G.map.isWebGLCubeRenderTarget?6:1;for(let V=0;V<de;V++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,V),r.clear();else{V===0&&(r.setRenderTarget(G.map),r.clear());const J=G.getViewport(V);d.set(c.x*J.x,c.y*J.y,c.x*J.z,c.y*J.w),D.viewport(d)}if(N.isPointLight){const J=G.camera,xe=G.matrix,ve=N.distance||J.far;ve!==J.far&&(J.far=ve,J.updateProjectionMatrix()),tl.setFromMatrixPosition(N.matrixWorld),J.position.copy(tl),sh.copy(J.position),sh.add(R2[V]),J.up.copy(C2[V]),J.lookAt(sh),J.updateMatrixWorld(),xe.makeTranslation(-tl.x,-tl.y,-tl.z),Mx.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Mx,J.coordinateSystem,J.reversedDepth)}else G.updateMatrices(N);s=G.getFrustum(),I(k,_,G.camera,N,this.type)}G.isPointLightShadow!==!0&&this.type===nl&&C(G,_),G.needsUpdate=!1}y=this.type,b.needsUpdate=!1,r.setRenderTarget(M,R,T)};function C(F,k){const _=e.update(P);g.defines.VSM_SAMPLES!==F.blurSamples&&(g.defines.VSM_SAMPLES=F.blurSamples,E.defines.VSM_SAMPLES=F.blurSamples,g.needsUpdate=!0,E.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new $i(l.x,l.y,{format:qs,type:Ra})),g.uniforms.shadow_pass.value=F.map.depthTexture,g.uniforms.resolution.value=F.mapSize,g.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(k,null,_,g,P,null),E.uniforms.shadow_pass.value=F.mapPass.texture,E.uniforms.resolution.value=F.mapSize,E.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(k,null,_,E,P,null)}function B(F,k,_,M){let R=null;const T=_.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(T!==void 0)R=T;else if(R=_.isPointLight===!0?m:h,r.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const D=R.uuid,H=k.uuid;let X=p[D];X===void 0&&(X={},p[D]=X);let j=X[H];j===void 0&&(j=R.clone(),X[H]=j,k.addEventListener("dispose",W)),R=j}if(R.visible=k.visible,R.wireframe=k.wireframe,M===nl?R.side=k.shadowSide!==null?k.shadowSide:k.side:R.side=k.shadowSide!==null?k.shadowSide:S[k.side],R.alphaMap=k.alphaMap,R.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,R.map=k.map,R.clipShadows=k.clipShadows,R.clippingPlanes=k.clippingPlanes,R.clipIntersection=k.clipIntersection,R.displacementMap=k.displacementMap,R.displacementScale=k.displacementScale,R.displacementBias=k.displacementBias,R.wireframeLinewidth=k.wireframeLinewidth,R.linewidth=k.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const D=r.properties.get(R);D.light=_}return R}function I(F,k,_,M,R){if(F.visible===!1)return;if(F.layers.test(k.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===nl)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,F.matrixWorld);const H=e.update(F),X=F.material;if(Array.isArray(X)){const j=H.groups;for(let N=0,G=j.length;N<G;N++){const Y=j[N],ae=X[Y.materialIndex];if(ae&&ae.visible){const de=B(F,ae,M,R);F.onBeforeShadow(r,F,k,_,H,de,Y),r.renderBufferDirect(_,null,H,de,F,Y),F.onAfterShadow(r,F,k,_,H,de,Y)}}}else if(X.visible){const j=B(F,X,M,R);F.onBeforeShadow(r,F,k,_,H,j,null),r.renderBufferDirect(_,null,H,j,F,null),F.onAfterShadow(r,F,k,_,H,j,null)}}const D=F.children;for(let H=0,X=D.length;H<X;H++)I(D[H],k,_,M,R)}function W(F){F.target.removeEventListener("dispose",W);for(const _ in p){const M=p[_],R=F.target.uuid;R in M&&(M[R].dispose(),delete M[R])}}}function D2(r,e){function i(){let Z=!1;const Ne=new dn;let _e=null;const He=new dn(0,0,0,0);return{setMask:function(Oe){_e!==Oe&&!Z&&(r.colorMask(Oe,Oe,Oe,Oe),_e=Oe)},setLocked:function(Oe){Z=Oe},setClear:function(Oe,Ae,Qe,ct,ln){ln===!0&&(Oe*=ct,Ae*=ct,Qe*=ct),Ne.set(Oe,Ae,Qe,ct),He.equals(Ne)===!1&&(r.clearColor(Oe,Ae,Qe,ct),He.copy(Ne))},reset:function(){Z=!1,_e=null,He.set(-1,0,0,0)}}}function s(){let Z=!1,Ne=!1,_e=null,He=null,Oe=null;return{setReversed:function(Ae){if(Ne!==Ae){const Qe=e.get("EXT_clip_control");Ae?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),Ne=Ae;const ct=Oe;Oe=null,this.setClear(ct)}},getReversed:function(){return Ne},setTest:function(Ae){Ae?Re(r.DEPTH_TEST):ke(r.DEPTH_TEST)},setMask:function(Ae){_e!==Ae&&!Z&&(r.depthMask(Ae),_e=Ae)},setFunc:function(Ae){if(Ne&&(Ae=tM[Ae]),He!==Ae){switch(Ae){case ch:r.depthFunc(r.NEVER);break;case uh:r.depthFunc(r.ALWAYS);break;case fh:r.depthFunc(r.LESS);break;case Wr:r.depthFunc(r.LEQUAL);break;case dh:r.depthFunc(r.EQUAL);break;case hh:r.depthFunc(r.GEQUAL);break;case ph:r.depthFunc(r.GREATER);break;case mh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}He=Ae}},setLocked:function(Ae){Z=Ae},setClear:function(Ae){Oe!==Ae&&(Oe=Ae,Ne&&(Ae=1-Ae),r.clearDepth(Ae))},reset:function(){Z=!1,_e=null,He=null,Oe=null,Ne=!1}}}function l(){let Z=!1,Ne=null,_e=null,He=null,Oe=null,Ae=null,Qe=null,ct=null,ln=null;return{setTest:function(Ft){Z||(Ft?Re(r.STENCIL_TEST):ke(r.STENCIL_TEST))},setMask:function(Ft){Ne!==Ft&&!Z&&(r.stencilMask(Ft),Ne=Ft)},setFunc:function(Ft,xi,ai){(_e!==Ft||He!==xi||Oe!==ai)&&(r.stencilFunc(Ft,xi,ai),_e=Ft,He=xi,Oe=ai)},setOp:function(Ft,xi,ai){(Ae!==Ft||Qe!==xi||ct!==ai)&&(r.stencilOp(Ft,xi,ai),Ae=Ft,Qe=xi,ct=ai)},setLocked:function(Ft){Z=Ft},setClear:function(Ft){ln!==Ft&&(r.clearStencil(Ft),ln=Ft)},reset:function(){Z=!1,Ne=null,_e=null,He=null,Oe=null,Ae=null,Qe=null,ct=null,ln=null}}}const c=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let v={},S={},g={},E=new WeakMap,w=[],P=null,b=!1,y=null,C=null,B=null,I=null,W=null,F=null,k=null,_=new it(0,0,0),M=0,R=!1,T=null,D=null,H=null,X=null,j=null;const N=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Y=0;const ae=r.getParameter(r.VERSION);ae.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ae)[1]),G=Y>=1):ae.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),G=Y>=2);let de=null,V={};const J=r.getParameter(r.SCISSOR_BOX),xe=r.getParameter(r.VIEWPORT),ve=new dn().fromArray(J),Te=new dn().fromArray(xe);function se(Z,Ne,_e,He){const Oe=new Uint8Array(4),Ae=r.createTexture();r.bindTexture(Z,Ae),r.texParameteri(Z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Qe=0;Qe<_e;Qe++)Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?r.texImage3D(Ne,0,r.RGBA,1,1,He,0,r.RGBA,r.UNSIGNED_BYTE,Oe):r.texImage2D(Ne+Qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Oe);return Ae}const Me={};Me[r.TEXTURE_2D]=se(r.TEXTURE_2D,r.TEXTURE_2D,1),Me[r.TEXTURE_CUBE_MAP]=se(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[r.TEXTURE_2D_ARRAY]=se(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Me[r.TEXTURE_3D]=se(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),Re(r.DEPTH_TEST),d.setFunc(Wr),bt(!1),yt(x_),Re(r.CULL_FACE),Ye(Aa);function Re(Z){v[Z]!==!0&&(r.enable(Z),v[Z]=!0)}function ke(Z){v[Z]!==!1&&(r.disable(Z),v[Z]=!1)}function rt(Z,Ne){return g[Z]!==Ne?(r.bindFramebuffer(Z,Ne),g[Z]=Ne,Z===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Ne),Z===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Ne),!0):!1}function et(Z,Ne){let _e=w,He=!1;if(Z){_e=E.get(Ne),_e===void 0&&(_e=[],E.set(Ne,_e));const Oe=Z.textures;if(_e.length!==Oe.length||_e[0]!==r.COLOR_ATTACHMENT0){for(let Ae=0,Qe=Oe.length;Ae<Qe;Ae++)_e[Ae]=r.COLOR_ATTACHMENT0+Ae;_e.length=Oe.length,He=!0}}else _e[0]!==r.BACK&&(_e[0]=r.BACK,He=!0);He&&r.drawBuffers(_e)}function Bt(Z){return P!==Z?(r.useProgram(Z),P=Z,!0):!1}const Ie={[Hs]:r.FUNC_ADD,[Eb]:r.FUNC_SUBTRACT,[Tb]:r.FUNC_REVERSE_SUBTRACT};Ie[Ab]=r.MIN,Ie[wb]=r.MAX;const $e={[Rb]:r.ZERO,[Cb]:r.ONE,[Nb]:r.SRC_COLOR,[oh]:r.SRC_ALPHA,[Ib]:r.SRC_ALPHA_SATURATE,[Ob]:r.DST_COLOR,[Lb]:r.DST_ALPHA,[Db]:r.ONE_MINUS_SRC_COLOR,[lh]:r.ONE_MINUS_SRC_ALPHA,[Pb]:r.ONE_MINUS_DST_COLOR,[Ub]:r.ONE_MINUS_DST_ALPHA,[Fb]:r.CONSTANT_COLOR,[zb]:r.ONE_MINUS_CONSTANT_COLOR,[Bb]:r.CONSTANT_ALPHA,[Gb]:r.ONE_MINUS_CONSTANT_ALPHA};function Ye(Z,Ne,_e,He,Oe,Ae,Qe,ct,ln,Ft){if(Z===Aa){b===!0&&(ke(r.BLEND),b=!1);return}if(b===!1&&(Re(r.BLEND),b=!0),Z!==Mb){if(Z!==y||Ft!==R){if((C!==Hs||W!==Hs)&&(r.blendEquation(r.FUNC_ADD),C=Hs,W=Hs),Ft)switch(Z){case jr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case v_:r.blendFunc(r.ONE,r.ONE);break;case y_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case S_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Lt("WebGLState: Invalid blending: ",Z);break}else switch(Z){case jr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case v_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case y_:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case S_:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",Z);break}B=null,I=null,F=null,k=null,_.set(0,0,0),M=0,y=Z,R=Ft}return}Oe=Oe||Ne,Ae=Ae||_e,Qe=Qe||He,(Ne!==C||Oe!==W)&&(r.blendEquationSeparate(Ie[Ne],Ie[Oe]),C=Ne,W=Oe),(_e!==B||He!==I||Ae!==F||Qe!==k)&&(r.blendFuncSeparate($e[_e],$e[He],$e[Ae],$e[Qe]),B=_e,I=He,F=Ae,k=Qe),(ct.equals(_)===!1||ln!==M)&&(r.blendColor(ct.r,ct.g,ct.b,ln),_.copy(ct),M=ln),y=Z,R=!1}function We(Z,Ne){Z.side===gi?ke(r.CULL_FACE):Re(r.CULL_FACE);let _e=Z.side===ii;Ne&&(_e=!_e),bt(_e),Z.blending===jr&&Z.transparent===!1?Ye(Aa):Ye(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),d.setFunc(Z.depthFunc),d.setTest(Z.depthTest),d.setMask(Z.depthWrite),c.setMask(Z.colorWrite);const He=Z.stencilWrite;h.setTest(He),He&&(h.setMask(Z.stencilWriteMask),h.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),h.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),Q(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?Re(r.SAMPLE_ALPHA_TO_COVERAGE):ke(r.SAMPLE_ALPHA_TO_COVERAGE)}function bt(Z){T!==Z&&(Z?r.frontFace(r.CW):r.frontFace(r.CCW),T=Z)}function yt(Z){Z!==Sb?(Re(r.CULL_FACE),Z!==D&&(Z===x_?r.cullFace(r.BACK):Z===bb?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ke(r.CULL_FACE),D=Z}function pn(Z){Z!==H&&(G&&r.lineWidth(Z),H=Z)}function Q(Z,Ne,_e){Z?(Re(r.POLYGON_OFFSET_FILL),(X!==Ne||j!==_e)&&(X=Ne,j=_e,d.getReversed()&&(Ne=-Ne),r.polygonOffset(Ne,_e))):ke(r.POLYGON_OFFSET_FILL)}function Jt(Z){Z?Re(r.SCISSOR_TEST):ke(r.SCISSOR_TEST)}function mt(Z){Z===void 0&&(Z=r.TEXTURE0+N-1),de!==Z&&(r.activeTexture(Z),de=Z)}function Ut(Z,Ne,_e){_e===void 0&&(de===null?_e=r.TEXTURE0+N-1:_e=de);let He=V[_e];He===void 0&&(He={type:void 0,texture:void 0},V[_e]=He),(He.type!==Z||He.texture!==Ne)&&(de!==_e&&(r.activeTexture(_e),de=_e),r.bindTexture(Z,Ne||Me[Z]),He.type=Z,He.texture=Ne)}function Ce(){const Z=V[de];Z!==void 0&&Z.type!==void 0&&(r.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function Gt(){try{r.compressedTexImage2D(...arguments)}catch(Z){Lt("WebGLState:",Z)}}function z(){try{r.compressedTexImage3D(...arguments)}catch(Z){Lt("WebGLState:",Z)}}function A(){try{r.texSubImage2D(...arguments)}catch(Z){Lt("WebGLState:",Z)}}function ie(){try{r.texSubImage3D(...arguments)}catch(Z){Lt("WebGLState:",Z)}}function Se(){try{r.compressedTexSubImage2D(...arguments)}catch(Z){Lt("WebGLState:",Z)}}function we(){try{r.compressedTexSubImage3D(...arguments)}catch(Z){Lt("WebGLState:",Z)}}function De(){try{r.texStorage2D(...arguments)}catch(Z){Lt("WebGLState:",Z)}}function Pe(){try{r.texStorage3D(...arguments)}catch(Z){Lt("WebGLState:",Z)}}function pe(){try{r.texImage2D(...arguments)}catch(Z){Lt("WebGLState:",Z)}}function me(){try{r.texImage3D(...arguments)}catch(Z){Lt("WebGLState:",Z)}}function Fe(Z){return S[Z]!==void 0?S[Z]:r.getParameter(Z)}function ze(Z,Ne){S[Z]!==Ne&&(r.pixelStorei(Z,Ne),S[Z]=Ne)}function Ue(Z){ve.equals(Z)===!1&&(r.scissor(Z.x,Z.y,Z.z,Z.w),ve.copy(Z))}function Le(Z){Te.equals(Z)===!1&&(r.viewport(Z.x,Z.y,Z.z,Z.w),Te.copy(Z))}function ut(Z,Ne){let _e=p.get(Ne);_e===void 0&&(_e=new WeakMap,p.set(Ne,_e));let He=_e.get(Z);He===void 0&&(He=r.getUniformBlockIndex(Ne,Z.name),_e.set(Z,He))}function ft(Z,Ne){const He=p.get(Ne).get(Z);m.get(Ne)!==He&&(r.uniformBlockBinding(Ne,He,Z.__bindingPointIndex),m.set(Ne,He))}function Mt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),v={},S={},de=null,V={},g={},E=new WeakMap,w=[],P=null,b=!1,y=null,C=null,B=null,I=null,W=null,F=null,k=null,_=new it(0,0,0),M=0,R=!1,T=null,D=null,H=null,X=null,j=null,ve.set(0,0,r.canvas.width,r.canvas.height),Te.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:Re,disable:ke,bindFramebuffer:rt,drawBuffers:et,useProgram:Bt,setBlending:Ye,setMaterial:We,setFlipSided:bt,setCullFace:yt,setLineWidth:pn,setPolygonOffset:Q,setScissorTest:Jt,activeTexture:mt,bindTexture:Ut,unbindTexture:Ce,compressedTexImage2D:Gt,compressedTexImage3D:z,texImage2D:pe,texImage3D:me,pixelStorei:ze,getParameter:Fe,updateUBOMapping:ut,uniformBlockBinding:ft,texStorage2D:De,texStorage3D:Pe,texSubImage2D:A,texSubImage3D:ie,compressedTexSubImage2D:Se,compressedTexSubImage3D:we,scissor:Ue,viewport:Le,reset:Mt}}function L2(r,e,i,s,l,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ht,v=new WeakMap,S=new Set;let g;const E=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(z,A){return w?new OffscreenCanvas(z,A):su("canvas")}function b(z,A,ie){let Se=1;const we=Gt(z);if((we.width>ie||we.height>ie)&&(Se=ie/Math.max(we.width,we.height)),Se<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const De=Math.floor(Se*we.width),Pe=Math.floor(Se*we.height);g===void 0&&(g=P(De,Pe));const pe=A?P(De,Pe):g;return pe.width=De,pe.height=Pe,pe.getContext("2d").drawImage(z,0,0,De,Pe),lt("WebGLRenderer: Texture has been resized from ("+we.width+"x"+we.height+") to ("+De+"x"+Pe+")."),pe}else return"data"in z&&lt("WebGLRenderer: Image in DataTexture is too big ("+we.width+"x"+we.height+")."),z;return z}function y(z){return z.generateMipmaps}function C(z){r.generateMipmap(z)}function B(z){return z.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?r.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function I(z,A,ie,Se,we,De=!1){if(z!==null){if(r[z]!==void 0)return r[z];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Pe;Se&&(Pe=e.get("EXT_texture_norm16"),Pe||lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=A;if(A===r.RED&&(ie===r.FLOAT&&(pe=r.R32F),ie===r.HALF_FLOAT&&(pe=r.R16F),ie===r.UNSIGNED_BYTE&&(pe=r.R8),ie===r.UNSIGNED_SHORT&&Pe&&(pe=Pe.R16_EXT),ie===r.SHORT&&Pe&&(pe=Pe.R16_SNORM_EXT)),A===r.RED_INTEGER&&(ie===r.UNSIGNED_BYTE&&(pe=r.R8UI),ie===r.UNSIGNED_SHORT&&(pe=r.R16UI),ie===r.UNSIGNED_INT&&(pe=r.R32UI),ie===r.BYTE&&(pe=r.R8I),ie===r.SHORT&&(pe=r.R16I),ie===r.INT&&(pe=r.R32I)),A===r.RG&&(ie===r.FLOAT&&(pe=r.RG32F),ie===r.HALF_FLOAT&&(pe=r.RG16F),ie===r.UNSIGNED_BYTE&&(pe=r.RG8),ie===r.UNSIGNED_SHORT&&Pe&&(pe=Pe.RG16_EXT),ie===r.SHORT&&Pe&&(pe=Pe.RG16_SNORM_EXT)),A===r.RG_INTEGER&&(ie===r.UNSIGNED_BYTE&&(pe=r.RG8UI),ie===r.UNSIGNED_SHORT&&(pe=r.RG16UI),ie===r.UNSIGNED_INT&&(pe=r.RG32UI),ie===r.BYTE&&(pe=r.RG8I),ie===r.SHORT&&(pe=r.RG16I),ie===r.INT&&(pe=r.RG32I)),A===r.RGB_INTEGER&&(ie===r.UNSIGNED_BYTE&&(pe=r.RGB8UI),ie===r.UNSIGNED_SHORT&&(pe=r.RGB16UI),ie===r.UNSIGNED_INT&&(pe=r.RGB32UI),ie===r.BYTE&&(pe=r.RGB8I),ie===r.SHORT&&(pe=r.RGB16I),ie===r.INT&&(pe=r.RGB32I)),A===r.RGBA_INTEGER&&(ie===r.UNSIGNED_BYTE&&(pe=r.RGBA8UI),ie===r.UNSIGNED_SHORT&&(pe=r.RGBA16UI),ie===r.UNSIGNED_INT&&(pe=r.RGBA32UI),ie===r.BYTE&&(pe=r.RGBA8I),ie===r.SHORT&&(pe=r.RGBA16I),ie===r.INT&&(pe=r.RGBA32I)),A===r.RGB&&(ie===r.UNSIGNED_SHORT&&Pe&&(pe=Pe.RGB16_EXT),ie===r.SHORT&&Pe&&(pe=Pe.RGB16_SNORM_EXT),ie===r.UNSIGNED_INT_5_9_9_9_REV&&(pe=r.RGB9_E5),ie===r.UNSIGNED_INT_10F_11F_11F_REV&&(pe=r.R11F_G11F_B10F)),A===r.RGBA){const me=De?au:Dt.getTransfer(we);ie===r.FLOAT&&(pe=r.RGBA32F),ie===r.HALF_FLOAT&&(pe=r.RGBA16F),ie===r.UNSIGNED_BYTE&&(pe=me===qt?r.SRGB8_ALPHA8:r.RGBA8),ie===r.UNSIGNED_SHORT&&Pe&&(pe=Pe.RGBA16_EXT),ie===r.SHORT&&Pe&&(pe=Pe.RGBA16_SNORM_EXT),ie===r.UNSIGNED_SHORT_4_4_4_4&&(pe=r.RGBA4),ie===r.UNSIGNED_SHORT_5_5_5_1&&(pe=r.RGB5_A1)}return(pe===r.R16F||pe===r.R32F||pe===r.RG16F||pe===r.RG32F||pe===r.RGBA16F||pe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function W(z,A){let ie;return z?A===null||A===ea||A===ol?ie=r.DEPTH24_STENCIL8:A===Ki?ie=r.DEPTH32F_STENCIL8:A===rl&&(ie=r.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ea||A===ol?ie=r.DEPTH_COMPONENT24:A===Ki?ie=r.DEPTH_COMPONENT32F:A===rl&&(ie=r.DEPTH_COMPONENT16),ie}function F(z,A){return y(z)===!0||z.isFramebufferTexture&&z.minFilter!==Fn&&z.minFilter!==kn?Math.log2(Math.max(A.width,A.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?A.mipmaps.length:1}function k(z){const A=z.target;A.removeEventListener("dispose",k),M(A),A.isVideoTexture&&v.delete(A),A.isHTMLTexture&&S.delete(A)}function _(z){const A=z.target;A.removeEventListener("dispose",_),T(A)}function M(z){const A=s.get(z);if(A.__webglInit===void 0)return;const ie=z.source,Se=E.get(ie);if(Se){const we=Se[A.__cacheKey];we.usedTimes--,we.usedTimes===0&&R(z),Object.keys(Se).length===0&&E.delete(ie)}s.remove(z)}function R(z){const A=s.get(z);r.deleteTexture(A.__webglTexture);const ie=z.source,Se=E.get(ie);delete Se[A.__cacheKey],d.memory.textures--}function T(z){const A=s.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),s.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++){if(Array.isArray(A.__webglFramebuffer[Se]))for(let we=0;we<A.__webglFramebuffer[Se].length;we++)r.deleteFramebuffer(A.__webglFramebuffer[Se][we]);else r.deleteFramebuffer(A.__webglFramebuffer[Se]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[Se])}else{if(Array.isArray(A.__webglFramebuffer))for(let Se=0;Se<A.__webglFramebuffer.length;Se++)r.deleteFramebuffer(A.__webglFramebuffer[Se]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Se=0;Se<A.__webglColorRenderbuffer.length;Se++)A.__webglColorRenderbuffer[Se]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[Se]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ie=z.textures;for(let Se=0,we=ie.length;Se<we;Se++){const De=s.get(ie[Se]);De.__webglTexture&&(r.deleteTexture(De.__webglTexture),d.memory.textures--),s.remove(ie[Se])}s.remove(z)}let D=0;function H(){D=0}function X(){return D}function j(z){D=z}function N(){const z=D;return z>=l.maxTextures&&lt("WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+l.maxTextures),D+=1,z}function G(z){const A=[];return A.push(z.wrapS),A.push(z.wrapT),A.push(z.wrapR||0),A.push(z.magFilter),A.push(z.minFilter),A.push(z.anisotropy),A.push(z.internalFormat),A.push(z.format),A.push(z.type),A.push(z.generateMipmaps),A.push(z.premultiplyAlpha),A.push(z.flipY),A.push(z.unpackAlignment),A.push(z.colorSpace),A.join()}function Y(z,A){const ie=s.get(z);if(z.isVideoTexture&&Ut(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&ie.__version!==z.version){const Se=z.image;if(Se===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{ke(ie,z,A);return}}else z.isExternalTexture&&(ie.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,ie.__webglTexture,r.TEXTURE0+A)}function ae(z,A){const ie=s.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ie.__version!==z.version){ke(ie,z,A);return}else z.isExternalTexture&&(ie.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,ie.__webglTexture,r.TEXTURE0+A)}function de(z,A){const ie=s.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ie.__version!==z.version){ke(ie,z,A);return}i.bindTexture(r.TEXTURE_3D,ie.__webglTexture,r.TEXTURE0+A)}function V(z,A){const ie=s.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&ie.__version!==z.version){rt(ie,z,A);return}i.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture,r.TEXTURE0+A)}const J={[gh]:r.REPEAT,[Ta]:r.CLAMP_TO_EDGE,[_h]:r.MIRRORED_REPEAT},xe={[Fn]:r.NEAREST,[kb]:r.NEAREST_MIPMAP_NEAREST,[Sc]:r.NEAREST_MIPMAP_LINEAR,[kn]:r.LINEAR,[Rd]:r.LINEAR_MIPMAP_NEAREST,[js]:r.LINEAR_MIPMAP_LINEAR},ve={[Wb]:r.NEVER,[Qb]:r.ALWAYS,[qb]:r.LESS,[cp]:r.LEQUAL,[Yb]:r.EQUAL,[up]:r.GEQUAL,[Zb]:r.GREATER,[Kb]:r.NOTEQUAL};function Te(z,A){if(A.type===Ki&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===kn||A.magFilter===Rd||A.magFilter===Sc||A.magFilter===js||A.minFilter===kn||A.minFilter===Rd||A.minFilter===Sc||A.minFilter===js)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(z,r.TEXTURE_WRAP_S,J[A.wrapS]),r.texParameteri(z,r.TEXTURE_WRAP_T,J[A.wrapT]),(z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY)&&r.texParameteri(z,r.TEXTURE_WRAP_R,J[A.wrapR]),r.texParameteri(z,r.TEXTURE_MAG_FILTER,xe[A.magFilter]),r.texParameteri(z,r.TEXTURE_MIN_FILTER,xe[A.minFilter]),A.compareFunction&&(r.texParameteri(z,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(z,r.TEXTURE_COMPARE_FUNC,ve[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Fn||A.minFilter!==Sc&&A.minFilter!==js||A.type===Ki&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");r.texParameterf(z,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function se(z,A){let ie=!1;z.__webglInit===void 0&&(z.__webglInit=!0,A.addEventListener("dispose",k));const Se=A.source;let we=E.get(Se);we===void 0&&(we={},E.set(Se,we));const De=G(A);if(De!==z.__cacheKey){we[De]===void 0&&(we[De]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,ie=!0),we[De].usedTimes++;const Pe=we[z.__cacheKey];Pe!==void 0&&(we[z.__cacheKey].usedTimes--,Pe.usedTimes===0&&R(A)),z.__cacheKey=De,z.__webglTexture=we[De].texture}return ie}function Me(z,A,ie){return Math.floor(Math.floor(z/ie)/A)}function Re(z,A,ie,Se){const De=z.updateRanges;if(De.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,A.width,A.height,ie,Se,A.data);else{De.sort((ze,Ue)=>ze.start-Ue.start);let Pe=0;for(let ze=1;ze<De.length;ze++){const Ue=De[Pe],Le=De[ze],ut=Ue.start+Ue.count,ft=Me(Le.start,A.width,4),Mt=Me(Ue.start,A.width,4);Le.start<=ut+1&&ft===Mt&&Me(Le.start+Le.count-1,A.width,4)===ft?Ue.count=Math.max(Ue.count,Le.start+Le.count-Ue.start):(++Pe,De[Pe]=Le)}De.length=Pe+1;const pe=i.getParameter(r.UNPACK_ROW_LENGTH),me=i.getParameter(r.UNPACK_SKIP_PIXELS),Fe=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,A.width);for(let ze=0,Ue=De.length;ze<Ue;ze++){const Le=De[ze],ut=Math.floor(Le.start/4),ft=Math.ceil(Le.count/4),Mt=ut%A.width,Z=Math.floor(ut/A.width),Ne=ft,_e=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,Mt),i.pixelStorei(r.UNPACK_SKIP_ROWS,Z),i.texSubImage2D(r.TEXTURE_2D,0,Mt,Z,Ne,_e,ie,Se,A.data)}z.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,pe),i.pixelStorei(r.UNPACK_SKIP_PIXELS,me),i.pixelStorei(r.UNPACK_SKIP_ROWS,Fe)}}function ke(z,A,ie){let Se=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Se=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Se=r.TEXTURE_3D);const we=se(z,A),De=A.source;i.bindTexture(Se,z.__webglTexture,r.TEXTURE0+ie);const Pe=s.get(De);if(De.version!==Pe.__version||we===!0){if(i.activeTexture(r.TEXTURE0+ie),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const _e=Dt.getPrimaries(Dt.workingColorSpace),He=A.colorSpace===ds?null:Dt.getPrimaries(A.colorSpace),Oe=A.colorSpace===ds||_e===He?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}i.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment);let me=b(A.image,!1,l.maxTextureSize);me=Ce(A,me);const Fe=c.convert(A.format,A.colorSpace),ze=c.convert(A.type);let Ue=I(A.internalFormat,Fe,ze,A.normalized,A.colorSpace,A.isVideoTexture);Te(Se,A);let Le;const ut=A.mipmaps,ft=A.isVideoTexture!==!0,Mt=Pe.__version===void 0||we===!0,Z=De.dataReady,Ne=F(A,me);if(A.isDepthTexture)Ue=W(A.format===Xs,A.type),Mt&&(ft?i.texStorage2D(r.TEXTURE_2D,1,Ue,me.width,me.height):i.texImage2D(r.TEXTURE_2D,0,Ue,me.width,me.height,0,Fe,ze,null));else if(A.isDataTexture)if(ut.length>0){ft&&Mt&&i.texStorage2D(r.TEXTURE_2D,Ne,Ue,ut[0].width,ut[0].height);for(let _e=0,He=ut.length;_e<He;_e++)Le=ut[_e],ft?Z&&i.texSubImage2D(r.TEXTURE_2D,_e,0,0,Le.width,Le.height,Fe,ze,Le.data):i.texImage2D(r.TEXTURE_2D,_e,Ue,Le.width,Le.height,0,Fe,ze,Le.data);A.generateMipmaps=!1}else ft?(Mt&&i.texStorage2D(r.TEXTURE_2D,Ne,Ue,me.width,me.height),Z&&Re(A,me,Fe,ze)):i.texImage2D(r.TEXTURE_2D,0,Ue,me.width,me.height,0,Fe,ze,me.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ft&&Mt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ne,Ue,ut[0].width,ut[0].height,me.depth);for(let _e=0,He=ut.length;_e<He;_e++)if(Le=ut[_e],A.format!==Hi)if(Fe!==null)if(ft){if(Z)if(A.layerUpdates.size>0){const Oe=ex(Le.width,Le.height,A.format,A.type);for(const Ae of A.layerUpdates){const Qe=Le.data.subarray(Ae*Oe/Le.data.BYTES_PER_ELEMENT,(Ae+1)*Oe/Le.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,Ae,Le.width,Le.height,1,Fe,Qe)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,0,Le.width,Le.height,me.depth,Fe,Le.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,_e,Ue,Le.width,Le.height,me.depth,0,Le.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?Z&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,0,Le.width,Le.height,me.depth,Fe,ze,Le.data):i.texImage3D(r.TEXTURE_2D_ARRAY,_e,Ue,Le.width,Le.height,me.depth,0,Fe,ze,Le.data)}else{ft&&Mt&&i.texStorage2D(r.TEXTURE_2D,Ne,Ue,ut[0].width,ut[0].height);for(let _e=0,He=ut.length;_e<He;_e++)Le=ut[_e],A.format!==Hi?Fe!==null?ft?Z&&i.compressedTexSubImage2D(r.TEXTURE_2D,_e,0,0,Le.width,Le.height,Fe,Le.data):i.compressedTexImage2D(r.TEXTURE_2D,_e,Ue,Le.width,Le.height,0,Le.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?Z&&i.texSubImage2D(r.TEXTURE_2D,_e,0,0,Le.width,Le.height,Fe,ze,Le.data):i.texImage2D(r.TEXTURE_2D,_e,Ue,Le.width,Le.height,0,Fe,ze,Le.data)}else if(A.isDataArrayTexture)if(ft){if(Mt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ne,Ue,me.width,me.height,me.depth),Z)if(A.layerUpdates.size>0){const _e=ex(me.width,me.height,A.format,A.type);for(const He of A.layerUpdates){const Oe=me.data.subarray(He*_e/me.data.BYTES_PER_ELEMENT,(He+1)*_e/me.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,He,me.width,me.height,1,Fe,ze,Oe)}A.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Fe,ze,me.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ue,me.width,me.height,me.depth,0,Fe,ze,me.data);else if(A.isData3DTexture)ft?(Mt&&i.texStorage3D(r.TEXTURE_3D,Ne,Ue,me.width,me.height,me.depth),Z&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Fe,ze,me.data)):i.texImage3D(r.TEXTURE_3D,0,Ue,me.width,me.height,me.depth,0,Fe,ze,me.data);else if(A.isFramebufferTexture){if(Mt)if(ft)i.texStorage2D(r.TEXTURE_2D,Ne,Ue,me.width,me.height);else{let _e=me.width,He=me.height;for(let Oe=0;Oe<Ne;Oe++)i.texImage2D(r.TEXTURE_2D,Oe,Ue,_e,He,0,Fe,ze,null),_e>>=1,He>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in r){const _e=r.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),me.parentNode!==_e){_e.appendChild(me),S.add(A),_e.onpaint=ct=>{const ln=ct.changedElements;for(const Ft of S)ln.includes(Ft.image)&&(Ft.needsUpdate=!0)},_e.requestPaint();return}const He=0,Oe=r.RGBA,Ae=r.RGBA,Qe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,He,Oe,Ae,Qe,me),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ut.length>0){if(ft&&Mt){const _e=Gt(ut[0]);i.texStorage2D(r.TEXTURE_2D,Ne,Ue,_e.width,_e.height)}for(let _e=0,He=ut.length;_e<He;_e++)Le=ut[_e],ft?Z&&i.texSubImage2D(r.TEXTURE_2D,_e,0,0,Fe,ze,Le):i.texImage2D(r.TEXTURE_2D,_e,Ue,Fe,ze,Le);A.generateMipmaps=!1}else if(ft){if(Mt){const _e=Gt(me);i.texStorage2D(r.TEXTURE_2D,Ne,Ue,_e.width,_e.height)}Z&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Fe,ze,me)}else i.texImage2D(r.TEXTURE_2D,0,Ue,Fe,ze,me);y(A)&&C(Se),Pe.__version=De.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function rt(z,A,ie){if(A.image.length!==6)return;const Se=se(z,A),we=A.source;i.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+ie);const De=s.get(we);if(we.version!==De.__version||Se===!0){i.activeTexture(r.TEXTURE0+ie);const Pe=Dt.getPrimaries(Dt.workingColorSpace),pe=A.colorSpace===ds?null:Dt.getPrimaries(A.colorSpace),me=A.colorSpace===ds||Pe===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Fe=A.isCompressedTexture||A.image[0].isCompressedTexture,ze=A.image[0]&&A.image[0].isDataTexture,Ue=[];for(let Ae=0;Ae<6;Ae++)!Fe&&!ze?Ue[Ae]=b(A.image[Ae],!0,l.maxCubemapSize):Ue[Ae]=ze?A.image[Ae].image:A.image[Ae],Ue[Ae]=Ce(A,Ue[Ae]);const Le=Ue[0],ut=c.convert(A.format,A.colorSpace),ft=c.convert(A.type),Mt=I(A.internalFormat,ut,ft,A.normalized,A.colorSpace),Z=A.isVideoTexture!==!0,Ne=De.__version===void 0||Se===!0,_e=we.dataReady;let He=F(A,Le);Te(r.TEXTURE_CUBE_MAP,A);let Oe;if(Fe){Z&&Ne&&i.texStorage2D(r.TEXTURE_CUBE_MAP,He,Mt,Le.width,Le.height);for(let Ae=0;Ae<6;Ae++){Oe=Ue[Ae].mipmaps;for(let Qe=0;Qe<Oe.length;Qe++){const ct=Oe[Qe];A.format!==Hi?ut!==null?Z?_e&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe,0,0,ct.width,ct.height,ut,ct.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe,Mt,ct.width,ct.height,0,ct.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?_e&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe,0,0,ct.width,ct.height,ut,ft,ct.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe,Mt,ct.width,ct.height,0,ut,ft,ct.data)}}}else{if(Oe=A.mipmaps,Z&&Ne){Oe.length>0&&He++;const Ae=Gt(Ue[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,He,Mt,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(ze){Z?_e&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Ue[Ae].width,Ue[Ae].height,ut,ft,Ue[Ae].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Mt,Ue[Ae].width,Ue[Ae].height,0,ut,ft,Ue[Ae].data);for(let Qe=0;Qe<Oe.length;Qe++){const ln=Oe[Qe].image[Ae].image;Z?_e&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe+1,0,0,ln.width,ln.height,ut,ft,ln.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe+1,Mt,ln.width,ln.height,0,ut,ft,ln.data)}}else{Z?_e&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,ut,ft,Ue[Ae]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Mt,ut,ft,Ue[Ae]);for(let Qe=0;Qe<Oe.length;Qe++){const ct=Oe[Qe];Z?_e&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe+1,0,0,ut,ft,ct.image[Ae]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe+1,Mt,ut,ft,ct.image[Ae])}}}y(A)&&C(r.TEXTURE_CUBE_MAP),De.__version=we.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function et(z,A,ie,Se,we,De){const Pe=c.convert(ie.format,ie.colorSpace),pe=c.convert(ie.type),me=I(ie.internalFormat,Pe,pe,ie.normalized,ie.colorSpace),Fe=s.get(A),ze=s.get(ie);if(ze.__renderTarget=A,!Fe.__hasExternalTextures){const Ue=Math.max(1,A.width>>De),Le=Math.max(1,A.height>>De);we===r.TEXTURE_3D||we===r.TEXTURE_2D_ARRAY?i.texImage3D(we,De,me,Ue,Le,A.depth,0,Pe,pe,null):i.texImage2D(we,De,me,Ue,Le,0,Pe,pe,null)}i.bindFramebuffer(r.FRAMEBUFFER,z),mt(A)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Se,we,ze.__webglTexture,0,Jt(A)):(we===r.TEXTURE_2D||we>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&we<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Se,we,ze.__webglTexture,De),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Bt(z,A,ie){if(r.bindRenderbuffer(r.RENDERBUFFER,z),A.depthBuffer){const Se=A.depthTexture,we=Se&&Se.isDepthTexture?Se.type:null,De=W(A.stencilBuffer,we),Pe=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;mt(A)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Jt(A),De,A.width,A.height):ie?r.renderbufferStorageMultisample(r.RENDERBUFFER,Jt(A),De,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,De,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Pe,r.RENDERBUFFER,z)}else{const Se=A.textures;for(let we=0;we<Se.length;we++){const De=Se[we],Pe=c.convert(De.format,De.colorSpace),pe=c.convert(De.type),me=I(De.internalFormat,Pe,pe,De.normalized,De.colorSpace);mt(A)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Jt(A),me,A.width,A.height):ie?r.renderbufferStorageMultisample(r.RENDERBUFFER,Jt(A),me,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,me,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ie(z,A,ie){const Se=A.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,z),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const we=s.get(A.depthTexture);if(we.__renderTarget=A,(!we.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),Se){if(we.__webglInit===void 0&&(we.__webglInit=!0,A.depthTexture.addEventListener("dispose",k)),we.__webglTexture===void 0){we.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,we.__webglTexture),Te(r.TEXTURE_CUBE_MAP,A.depthTexture);const Fe=c.convert(A.depthTexture.format),ze=c.convert(A.depthTexture.type);let Ue;A.depthTexture.format===Ca?Ue=r.DEPTH_COMPONENT24:A.depthTexture.format===Xs&&(Ue=r.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Ue,A.width,A.height,0,Fe,ze,null)}}else Y(A.depthTexture,0);const De=we.__webglTexture,Pe=Jt(A),pe=Se?r.TEXTURE_CUBE_MAP_POSITIVE_X+ie:r.TEXTURE_2D,me=A.depthTexture.format===Xs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(A.depthTexture.format===Ca)mt(A)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,pe,De,0,Pe):r.framebufferTexture2D(r.FRAMEBUFFER,me,pe,De,0);else if(A.depthTexture.format===Xs)mt(A)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,pe,De,0,Pe):r.framebufferTexture2D(r.FRAMEBUFFER,me,pe,De,0);else throw new Error("Unknown depthTexture format")}function $e(z){const A=s.get(z),ie=z.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==z.depthTexture){const Se=z.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Se){const we=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Se.removeEventListener("dispose",we)};Se.addEventListener("dispose",we),A.__depthDisposeCallback=we}A.__boundDepthTexture=Se}if(z.depthTexture&&!A.__autoAllocateDepthBuffer)if(ie)for(let Se=0;Se<6;Se++)Ie(A.__webglFramebuffer[Se],z,Se);else{const Se=z.texture.mipmaps;Se&&Se.length>0?Ie(A.__webglFramebuffer[0],z,0):Ie(A.__webglFramebuffer,z,0)}else if(ie){A.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)if(i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[Se]),A.__webglDepthbuffer[Se]===void 0)A.__webglDepthbuffer[Se]=r.createRenderbuffer(),Bt(A.__webglDepthbuffer[Se],z,!1);else{const we=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,De=A.__webglDepthbuffer[Se];r.bindRenderbuffer(r.RENDERBUFFER,De),r.framebufferRenderbuffer(r.FRAMEBUFFER,we,r.RENDERBUFFER,De)}}else{const Se=z.texture.mipmaps;if(Se&&Se.length>0?i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),Bt(A.__webglDepthbuffer,z,!1);else{const we=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,De=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,De),r.framebufferRenderbuffer(r.FRAMEBUFFER,we,r.RENDERBUFFER,De)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ye(z,A,ie){const Se=s.get(z);A!==void 0&&et(Se.__webglFramebuffer,z,z.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ie!==void 0&&$e(z)}function We(z){const A=z.texture,ie=s.get(z),Se=s.get(A);z.addEventListener("dispose",_);const we=z.textures,De=z.isWebGLCubeRenderTarget===!0,Pe=we.length>1;if(Pe||(Se.__webglTexture===void 0&&(Se.__webglTexture=r.createTexture()),Se.__version=A.version,d.memory.textures++),De){ie.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(A.mipmaps&&A.mipmaps.length>0){ie.__webglFramebuffer[pe]=[];for(let me=0;me<A.mipmaps.length;me++)ie.__webglFramebuffer[pe][me]=r.createFramebuffer()}else ie.__webglFramebuffer[pe]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){ie.__webglFramebuffer=[];for(let pe=0;pe<A.mipmaps.length;pe++)ie.__webglFramebuffer[pe]=r.createFramebuffer()}else ie.__webglFramebuffer=r.createFramebuffer();if(Pe)for(let pe=0,me=we.length;pe<me;pe++){const Fe=s.get(we[pe]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=r.createTexture(),d.memory.textures++)}if(z.samples>0&&mt(z)===!1){ie.__webglMultisampledFramebuffer=r.createFramebuffer(),ie.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let pe=0;pe<we.length;pe++){const me=we[pe];ie.__webglColorRenderbuffer[pe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ie.__webglColorRenderbuffer[pe]);const Fe=c.convert(me.format,me.colorSpace),ze=c.convert(me.type),Ue=I(me.internalFormat,Fe,ze,me.normalized,me.colorSpace,z.isXRRenderTarget===!0),Le=Jt(z);r.renderbufferStorageMultisample(r.RENDERBUFFER,Le,Ue,z.width,z.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,ie.__webglColorRenderbuffer[pe])}r.bindRenderbuffer(r.RENDERBUFFER,null),z.depthBuffer&&(ie.__webglDepthRenderbuffer=r.createRenderbuffer(),Bt(ie.__webglDepthRenderbuffer,z,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(De){i.bindTexture(r.TEXTURE_CUBE_MAP,Se.__webglTexture),Te(r.TEXTURE_CUBE_MAP,A);for(let pe=0;pe<6;pe++)if(A.mipmaps&&A.mipmaps.length>0)for(let me=0;me<A.mipmaps.length;me++)et(ie.__webglFramebuffer[pe][me],z,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,me);else et(ie.__webglFramebuffer[pe],z,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);y(A)&&C(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pe){for(let pe=0,me=we.length;pe<me;pe++){const Fe=we[pe],ze=s.get(Fe);let Ue=r.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Ue=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ue,ze.__webglTexture),Te(Ue,Fe),et(ie.__webglFramebuffer,z,Fe,r.COLOR_ATTACHMENT0+pe,Ue,0),y(Fe)&&C(Ue)}i.unbindTexture()}else{let pe=r.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(pe=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(pe,Se.__webglTexture),Te(pe,A),A.mipmaps&&A.mipmaps.length>0)for(let me=0;me<A.mipmaps.length;me++)et(ie.__webglFramebuffer[me],z,A,r.COLOR_ATTACHMENT0,pe,me);else et(ie.__webglFramebuffer,z,A,r.COLOR_ATTACHMENT0,pe,0);y(A)&&C(pe),i.unbindTexture()}z.depthBuffer&&$e(z)}function bt(z){const A=z.textures;for(let ie=0,Se=A.length;ie<Se;ie++){const we=A[ie];if(y(we)){const De=B(z),Pe=s.get(we).__webglTexture;i.bindTexture(De,Pe),C(De),i.unbindTexture()}}}const yt=[],pn=[];function Q(z){if(z.samples>0){if(mt(z)===!1){const A=z.textures,ie=z.width,Se=z.height;let we=r.COLOR_BUFFER_BIT;const De=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pe=s.get(z),pe=A.length>1;if(pe)for(let Fe=0;Fe<A.length;Fe++)i.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const me=z.texture.mipmaps;me&&me.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Fe=0;Fe<A.length;Fe++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(we|=r.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(we|=r.STENCIL_BUFFER_BIT)),pe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[Fe]);const ze=s.get(A[Fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ze,0)}r.blitFramebuffer(0,0,ie,Se,0,0,ie,Se,we,r.NEAREST),m===!0&&(yt.length=0,pn.length=0,yt.push(r.COLOR_ATTACHMENT0+Fe),z.depthBuffer&&z.resolveDepthBuffer===!1&&(yt.push(De),pn.push(De),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,pn)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,yt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),pe)for(let Fe=0;Fe<A.length;Fe++){i.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[Fe]);const ze=s.get(A[Fe]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,ze,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&m){const A=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function Jt(z){return Math.min(l.maxSamples,z.samples)}function mt(z){const A=s.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ut(z){const A=d.render.frame;v.get(z)!==A&&(v.set(z,A),z.update())}function Ce(z,A){const ie=z.colorSpace,Se=z.format,we=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||ie!==iu&&ie!==ds&&(Dt.getTransfer(ie)===qt?(Se!==Hi||we!==_i)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",ie)),A}function Gt(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(p.width=z.naturalWidth||z.width,p.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(p.width=z.displayWidth,p.height=z.displayHeight):(p.width=z.width,p.height=z.height),p}this.allocateTextureUnit=N,this.resetTextureUnits=H,this.getTextureUnits=X,this.setTextureUnits=j,this.setTexture2D=Y,this.setTexture2DArray=ae,this.setTexture3D=de,this.setTextureCube=V,this.rebindTextures=Ye,this.setupRenderTarget=We,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=et,this.useMultisampledRTT=mt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function U2(r,e){function i(s,l=ds){let c;const d=Dt.getTransfer(l);if(s===_i)return r.UNSIGNED_BYTE;if(s===ap)return r.UNSIGNED_SHORT_4_4_4_4;if(s===sp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===kx)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===jx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Hx)return r.BYTE;if(s===Vx)return r.SHORT;if(s===rl)return r.UNSIGNED_SHORT;if(s===ip)return r.INT;if(s===ea)return r.UNSIGNED_INT;if(s===Ki)return r.FLOAT;if(s===Ra)return r.HALF_FLOAT;if(s===Xx)return r.ALPHA;if(s===Wx)return r.RGB;if(s===Hi)return r.RGBA;if(s===Ca)return r.DEPTH_COMPONENT;if(s===Xs)return r.DEPTH_STENCIL;if(s===qx)return r.RED;if(s===rp)return r.RED_INTEGER;if(s===qs)return r.RG;if(s===op)return r.RG_INTEGER;if(s===lp)return r.RGBA_INTEGER;if(s===Zc||s===Kc||s===Qc||s===Jc)if(d===qt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Zc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Zc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Qc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Jc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===xh||s===vh||s===yh||s===Sh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===xh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===vh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===yh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Sh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===bh||s===Mh||s===Eh||s===Th||s===Ah||s===tu||s===wh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===bh||s===Mh)return d===qt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Eh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Th)return c.COMPRESSED_R11_EAC;if(s===Ah)return c.COMPRESSED_SIGNED_R11_EAC;if(s===tu)return c.COMPRESSED_RG11_EAC;if(s===wh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Rh||s===Ch||s===Nh||s===Dh||s===Lh||s===Uh||s===Oh||s===Ph||s===Ih||s===Fh||s===zh||s===Bh||s===Gh||s===Hh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Rh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ch)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Nh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Dh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Lh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Uh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Oh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ph)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ih)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Fh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===zh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Bh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Gh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Hh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Vh||s===kh||s===jh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Vh)return d===qt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===kh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===jh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Xh||s===Wh||s===nu||s===qh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Xh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Wh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===nu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===qh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ol?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const O2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class I2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new tv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ta({vertexShader:O2,fragmentShader:P2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new te(new ul(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class F2 extends _s{constructor(e,i){super();const s=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,v=null,S=null,g=null,E=null,w=null;const P=typeof XRWebGLBinding<"u",b=new I2,y={},C=i.getContextAttributes();let B=null,I=null;const W=[],F=[],k=new ht;let _=null;const M=new Ni;M.viewport=new dn;const R=new Ni;R.viewport=new dn;const T=[M,R],D=new VM;let H=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let Me=W[se];return Me===void 0&&(Me=new Pd,W[se]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(se){let Me=W[se];return Me===void 0&&(Me=new Pd,W[se]=Me),Me.getGripSpace()},this.getHand=function(se){let Me=W[se];return Me===void 0&&(Me=new Pd,W[se]=Me),Me.getHandSpace()};function j(se){const Me=F.indexOf(se.inputSource);if(Me===-1)return;const Re=W[Me];Re!==void 0&&(Re.update(se.inputSource,se.frame,p||d),Re.dispatchEvent({type:se.type,data:se.inputSource}))}function N(){l.removeEventListener("select",j),l.removeEventListener("selectstart",j),l.removeEventListener("selectend",j),l.removeEventListener("squeeze",j),l.removeEventListener("squeezestart",j),l.removeEventListener("squeezeend",j),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",G);for(let se=0;se<W.length;se++){const Me=F[se];Me!==null&&(F[se]=null,W[se].disconnect(Me))}H=null,X=null,b.reset();for(const se in y)delete y[se];e.setRenderTarget(B),E=null,g=null,S=null,l=null,I=null,Te.stop(),s.isPresenting=!1,e.setPixelRatio(_),e.setSize(k.width,k.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){c=se,s.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){h=se,s.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(se){p=se},this.getBaseLayer=function(){return g!==null?g:E},this.getBinding=function(){return S===null&&P&&(S=new XRWebGLBinding(l,i)),S},this.getFrame=function(){return w},this.getSession=function(){return l},this.setSession=async function(se){if(l=se,l!==null){if(B=e.getRenderTarget(),l.addEventListener("select",j),l.addEventListener("selectstart",j),l.addEventListener("selectend",j),l.addEventListener("squeeze",j),l.addEventListener("squeezestart",j),l.addEventListener("squeezeend",j),l.addEventListener("end",N),l.addEventListener("inputsourceschange",G),C.xrCompatible!==!0&&await i.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(k),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,ke=null,rt=null;C.depth&&(rt=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Re=C.stencil?Xs:Ca,ke=C.stencil?ol:ea);const et={colorFormat:i.RGBA8,depthFormat:rt,scaleFactor:c};S=this.getBinding(),g=S.createProjectionLayer(et),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),I=new $i(g.textureWidth,g.textureHeight,{format:Hi,type:_i,depthTexture:new Yr(g.textureWidth,g.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Re={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,Re),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),I=new $i(E.framebufferWidth,E.framebufferHeight,{format:Hi,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Te.setContext(l),Te.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function G(se){for(let Me=0;Me<se.removed.length;Me++){const Re=se.removed[Me],ke=F.indexOf(Re);ke>=0&&(F[ke]=null,W[ke].disconnect(Re))}for(let Me=0;Me<se.added.length;Me++){const Re=se.added[Me];let ke=F.indexOf(Re);if(ke===-1){for(let et=0;et<W.length;et++)if(et>=F.length){F.push(Re),ke=et;break}else if(F[et]===null){F[et]=Re,ke=et;break}if(ke===-1)break}const rt=W[ke];rt&&rt.connect(Re)}}const Y=new ne,ae=new ne;function de(se,Me,Re){Y.setFromMatrixPosition(Me.matrixWorld),ae.setFromMatrixPosition(Re.matrixWorld);const ke=Y.distanceTo(ae),rt=Me.projectionMatrix.elements,et=Re.projectionMatrix.elements,Bt=rt[14]/(rt[10]-1),Ie=rt[14]/(rt[10]+1),$e=(rt[9]+1)/rt[5],Ye=(rt[9]-1)/rt[5],We=(rt[8]-1)/rt[0],bt=(et[8]+1)/et[0],yt=Bt*We,pn=Bt*bt,Q=ke/(-We+bt),Jt=Q*-We;if(Me.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Jt),se.translateZ(Q),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),rt[10]===-1)se.projectionMatrix.copy(Me.projectionMatrix),se.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const mt=Bt+Q,Ut=Ie+Q,Ce=yt-Jt,Gt=pn+(ke-Jt),z=$e*Ie/Ut*mt,A=Ye*Ie/Ut*mt;se.projectionMatrix.makePerspective(Ce,Gt,z,A,mt,Ut),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function V(se,Me){Me===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(Me.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(l===null)return;let Me=se.near,Re=se.far;b.texture!==null&&(b.depthNear>0&&(Me=b.depthNear),b.depthFar>0&&(Re=b.depthFar)),D.near=R.near=M.near=Me,D.far=R.far=M.far=Re,(H!==D.near||X!==D.far)&&(l.updateRenderState({depthNear:D.near,depthFar:D.far}),H=D.near,X=D.far),D.layers.mask=se.layers.mask|6,M.layers.mask=D.layers.mask&-5,R.layers.mask=D.layers.mask&-3;const ke=se.parent,rt=D.cameras;V(D,ke);for(let et=0;et<rt.length;et++)V(rt[et],ke);rt.length===2?de(D,M,R):D.projectionMatrix.copy(M.projectionMatrix),J(se,D,ke)};function J(se,Me,Re){Re===null?se.matrix.copy(Me.matrixWorld):(se.matrix.copy(Re.matrixWorld),se.matrix.invert(),se.matrix.multiply(Me.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(Me.projectionMatrix),se.projectionMatrixInverse.copy(Me.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Kh*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(g===null&&E===null))return m},this.setFoveation=function(se){m=se,g!==null&&(g.fixedFoveation=se),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=se)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(D)},this.getCameraTexture=function(se){return y[se]};let xe=null;function ve(se,Me){if(v=Me.getViewerPose(p||d),w=Me,v!==null){const Re=v.views;E!==null&&(e.setRenderTargetFramebuffer(I,E.framebuffer),e.setRenderTarget(I));let ke=!1;Re.length!==D.cameras.length&&(D.cameras.length=0,ke=!0);for(let Ie=0;Ie<Re.length;Ie++){const $e=Re[Ie];let Ye=null;if(E!==null)Ye=E.getViewport($e);else{const bt=S.getViewSubImage(g,$e);Ye=bt.viewport,Ie===0&&(e.setRenderTargetTextures(I,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(I))}let We=T[Ie];We===void 0&&(We=new Ni,We.layers.enable(Ie),We.viewport=new dn,T[Ie]=We),We.matrix.fromArray($e.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray($e.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Ie===0&&(D.matrix.copy(We.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),ke===!0&&D.cameras.push(We)}const rt=l.enabledFeatures;if(rt&&rt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&P){S=s.getBinding();const Ie=S.getDepthInformation(Re[0]);Ie&&Ie.isValid&&Ie.texture&&b.init(Ie,l.renderState)}if(rt&&rt.includes("camera-access")&&P){e.state.unbindTexture(),S=s.getBinding();for(let Ie=0;Ie<Re.length;Ie++){const $e=Re[Ie].camera;if($e){let Ye=y[$e];Ye||(Ye=new tv,y[$e]=Ye);const We=S.getCameraImage($e);Ye.sourceTexture=We}}}}for(let Re=0;Re<W.length;Re++){const ke=F[Re],rt=W[Re];ke!==null&&rt!==void 0&&rt.update(ke,Me,p||d)}xe&&xe(se,Me),Me.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Me}),w=null}const Te=new av;Te.setAnimationLoop(ve),this.setAnimationLoop=function(se){xe=se},this.dispose=function(){}}}const z2=new cn,fv=new pt;fv.set(-1,0,0,0,1,0,0,0,1);function B2(r,e){function i(b,y){b.matrixAutoUpdate===!0&&b.updateMatrix(),y.value.copy(b.matrix)}function s(b,y){y.color.getRGB(b.fogColor.value,nv(r)),y.isFog?(b.fogNear.value=y.near,b.fogFar.value=y.far):y.isFogExp2&&(b.fogDensity.value=y.density)}function l(b,y,C,B,I){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(b,y):y.isMeshLambertMaterial?(c(b,y),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(b,y),S(b,y)):y.isMeshPhongMaterial?(c(b,y),v(b,y),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(b,y),g(b,y),y.isMeshPhysicalMaterial&&E(b,y,I)):y.isMeshMatcapMaterial?(c(b,y),w(b,y)):y.isMeshDepthMaterial?c(b,y):y.isMeshDistanceMaterial?(c(b,y),P(b,y)):y.isMeshNormalMaterial?c(b,y):y.isLineBasicMaterial?(d(b,y),y.isLineDashedMaterial&&h(b,y)):y.isPointsMaterial?m(b,y,C,B):y.isSpriteMaterial?p(b,y):y.isShadowMaterial?(b.color.value.copy(y.color),b.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(b,y){b.opacity.value=y.opacity,y.color&&b.diffuse.value.copy(y.color),y.emissive&&b.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(b.map.value=y.map,i(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.bumpMap&&(b.bumpMap.value=y.bumpMap,i(y.bumpMap,b.bumpMapTransform),b.bumpScale.value=y.bumpScale,y.side===ii&&(b.bumpScale.value*=-1)),y.normalMap&&(b.normalMap.value=y.normalMap,i(y.normalMap,b.normalMapTransform),b.normalScale.value.copy(y.normalScale),y.side===ii&&b.normalScale.value.negate()),y.displacementMap&&(b.displacementMap.value=y.displacementMap,i(y.displacementMap,b.displacementMapTransform),b.displacementScale.value=y.displacementScale,b.displacementBias.value=y.displacementBias),y.emissiveMap&&(b.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,b.emissiveMapTransform)),y.specularMap&&(b.specularMap.value=y.specularMap,i(y.specularMap,b.specularMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest);const C=e.get(y),B=C.envMap,I=C.envMapRotation;B&&(b.envMap.value=B,b.envMapRotation.value.setFromMatrix4(z2.makeRotationFromEuler(I)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&b.envMapRotation.value.premultiply(fv),b.reflectivity.value=y.reflectivity,b.ior.value=y.ior,b.refractionRatio.value=y.refractionRatio),y.lightMap&&(b.lightMap.value=y.lightMap,b.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,b.lightMapTransform)),y.aoMap&&(b.aoMap.value=y.aoMap,b.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,b.aoMapTransform))}function d(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,y.map&&(b.map.value=y.map,i(y.map,b.mapTransform))}function h(b,y){b.dashSize.value=y.dashSize,b.totalSize.value=y.dashSize+y.gapSize,b.scale.value=y.scale}function m(b,y,C,B){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.size.value=y.size*C,b.scale.value=B*.5,y.map&&(b.map.value=y.map,i(y.map,b.uvTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function p(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.rotation.value=y.rotation,y.map&&(b.map.value=y.map,i(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function v(b,y){b.specular.value.copy(y.specular),b.shininess.value=Math.max(y.shininess,1e-4)}function S(b,y){y.gradientMap&&(b.gradientMap.value=y.gradientMap)}function g(b,y){b.metalness.value=y.metalness,y.metalnessMap&&(b.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,b.metalnessMapTransform)),b.roughness.value=y.roughness,y.roughnessMap&&(b.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,b.roughnessMapTransform)),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)}function E(b,y,C){b.ior.value=y.ior,y.sheen>0&&(b.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),b.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(b.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,b.sheenColorMapTransform)),y.sheenRoughnessMap&&(b.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,b.sheenRoughnessMapTransform))),y.clearcoat>0&&(b.clearcoat.value=y.clearcoat,b.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(b.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,b.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(b.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ii&&b.clearcoatNormalScale.value.negate())),y.dispersion>0&&(b.dispersion.value=y.dispersion),y.iridescence>0&&(b.iridescence.value=y.iridescence,b.iridescenceIOR.value=y.iridescenceIOR,b.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(b.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,b.iridescenceMapTransform)),y.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),y.transmission>0&&(b.transmission.value=y.transmission,b.transmissionSamplerMap.value=C.texture,b.transmissionSamplerSize.value.set(C.width,C.height),y.transmissionMap&&(b.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,b.transmissionMapTransform)),b.thickness.value=y.thickness,y.thicknessMap&&(b.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=y.attenuationDistance,b.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(b.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(b.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=y.specularIntensity,b.specularColor.value.copy(y.specularColor),y.specularColorMap&&(b.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,b.specularColorMapTransform)),y.specularIntensityMap&&(b.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,b.specularIntensityMapTransform))}function w(b,y){y.matcap&&(b.matcap.value=y.matcap)}function P(b,y){const C=e.get(y).light;b.referencePosition.value.setFromMatrixPosition(C.matrixWorld),b.nearDistance.value=C.shadow.camera.near,b.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function G2(r,e,i,s){let l={},c={},d=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,B){const I=B.program;s.uniformBlockBinding(C,I)}function p(C,B){let I=l[C.id];I===void 0&&(w(C),I=v(C),l[C.id]=I,C.addEventListener("dispose",b));const W=B.program;s.updateUBOMapping(C,W);const F=e.render.frame;c[C.id]!==F&&(g(C),c[C.id]=F)}function v(C){const B=S();C.__bindingPointIndex=B;const I=r.createBuffer(),W=C.__size,F=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,I),r.bufferData(r.UNIFORM_BUFFER,W,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,B,I),I}function S(){for(let C=0;C<h;C++)if(d.indexOf(C)===-1)return d.push(C),C;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const B=l[C.id],I=C.uniforms,W=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,B);for(let F=0,k=I.length;F<k;F++){const _=Array.isArray(I[F])?I[F]:[I[F]];for(let M=0,R=_.length;M<R;M++){const T=_[M];if(E(T,F,M,W)===!0){const D=T.__offset,H=Array.isArray(T.value)?T.value:[T.value];let X=0;for(let j=0;j<H.length;j++){const N=H[j],G=P(N);typeof N=="number"||typeof N=="boolean"?(T.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,D+X,T.__data)):N.isMatrix3?(T.__data[0]=N.elements[0],T.__data[1]=N.elements[1],T.__data[2]=N.elements[2],T.__data[3]=0,T.__data[4]=N.elements[3],T.__data[5]=N.elements[4],T.__data[6]=N.elements[5],T.__data[7]=0,T.__data[8]=N.elements[6],T.__data[9]=N.elements[7],T.__data[10]=N.elements[8],T.__data[11]=0):ArrayBuffer.isView(N)?T.__data.set(new N.constructor(N.buffer,N.byteOffset,T.__data.length)):(N.toArray(T.__data,X),X+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,T.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function E(C,B,I,W){const F=C.value,k=B+"_"+I;if(W[k]===void 0)return typeof F=="number"||typeof F=="boolean"?W[k]=F:ArrayBuffer.isView(F)?W[k]=F.slice():W[k]=F.clone(),!0;{const _=W[k];if(typeof F=="number"||typeof F=="boolean"){if(_!==F)return W[k]=F,!0}else{if(ArrayBuffer.isView(F))return!0;if(_.equals(F)===!1)return _.copy(F),!0}}return!1}function w(C){const B=C.uniforms;let I=0;const W=16;for(let k=0,_=B.length;k<_;k++){const M=Array.isArray(B[k])?B[k]:[B[k]];for(let R=0,T=M.length;R<T;R++){const D=M[R],H=Array.isArray(D.value)?D.value:[D.value];for(let X=0,j=H.length;X<j;X++){const N=H[X],G=P(N),Y=I%W,ae=Y%G.boundary,de=Y+ae;I+=ae,de!==0&&W-de<G.storage&&(I+=W-de),D.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=I,I+=G.storage}}}const F=I%W;return F>0&&(I+=W-F),C.__size=I,C.__cache={},this}function P(C){const B={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(B.boundary=4,B.storage=4):C.isVector2?(B.boundary=8,B.storage=8):C.isVector3||C.isColor?(B.boundary=16,B.storage=12):C.isVector4?(B.boundary=16,B.storage=16):C.isMatrix3?(B.boundary=48,B.storage=48):C.isMatrix4?(B.boundary=64,B.storage=64):C.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(B.boundary=16,B.storage=C.byteLength):lt("WebGLRenderer: Unsupported uniform value type.",C),B}function b(C){const B=C.target;B.removeEventListener("dispose",b);const I=d.indexOf(B.__bindingPointIndex);d.splice(I,1),r.deleteBuffer(l[B.id]),delete l[B.id],delete c[B.id]}function y(){for(const C in l)r.deleteBuffer(l[C]);d=[],l={},c={}}return{bind:m,update:p,dispose:y}}const H2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yi=null;function V2(){return Yi===null&&(Yi=new MM(H2,16,16,qs,Ra),Yi.name="DFG_LUT",Yi.minFilter=kn,Yi.magFilter=kn,Yi.wrapS=Ta,Yi.wrapT=Ta,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}class k2{constructor(e={}){const{canvas:i=$b(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:E=_i}=e;this.isWebGLRenderer=!0;let w;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=s.getContextAttributes().alpha}else w=d;const P=E,b=new Set([lp,op,rp]),y=new Set([_i,ea,rl,ol,ap,sp]),C=new Uint32Array(4),B=new Int32Array(4),I=new ne;let W=null,F=null;const k=[],_=[];let M=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let T=!1,D=null;this._outputColorSpace=Ri;let H=0,X=0,j=null,N=-1,G=null;const Y=new dn,ae=new dn;let de=null;const V=new it(0);let J=0,xe=i.width,ve=i.height,Te=1,se=null,Me=null;const Re=new dn(0,0,xe,ve),ke=new dn(0,0,xe,ve);let rt=!1;const et=new hp;let Bt=!1,Ie=!1;const $e=new cn,Ye=new ne,We=new dn,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function pn(){return j===null?Te:1}let Q=s;function Jt(L,$){return i.getContext(L,$)}try{const L={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${np}`),i.addEventListener("webglcontextlost",Ae,!1),i.addEventListener("webglcontextrestored",Qe,!1),i.addEventListener("webglcontextcreationerror",ct,!1),Q===null){const $="webgl2";if(Q=Jt($,L),Q===null)throw Jt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw Lt("WebGLRenderer: "+L.message),L}let mt,Ut,Ce,Gt,z,A,ie,Se,we,De,Pe,pe,me,Fe,ze,Ue,Le,ut,ft,Mt,Z,Ne,_e;function He(){mt=new VT(Q),mt.init(),Z=new U2(Q,mt),Ut=new OT(Q,mt,e,Z),Ce=new D2(Q,mt),Ut.reversedDepthBuffer&&g&&Ce.buffers.depth.setReversed(!0),Gt=new XT(Q),z=new _2,A=new L2(Q,mt,Ce,z,Ut,Z,Gt),ie=new HT(R),Se=new ZM(Q),Ne=new LT(Q,Se),we=new kT(Q,Se,Gt,Ne),De=new qT(Q,we,Se,Ne,Gt),ut=new WT(Q,Ut,A),ze=new PT(z),Pe=new g2(R,ie,mt,Ut,Ne,ze),pe=new B2(R,z),me=new v2,Fe=new T2(mt),Le=new DT(R,ie,Ce,De,w,m),Ue=new N2(R,De,Ut),_e=new G2(Q,Gt,Ut,Ce),ft=new UT(Q,mt,Gt),Mt=new jT(Q,mt,Gt),Gt.programs=Pe.programs,R.capabilities=Ut,R.extensions=mt,R.properties=z,R.renderLists=me,R.shadowMap=Ue,R.state=Ce,R.info=Gt}He(),P!==_i&&(M=new ZT(P,i.width,i.height,l,c));const Oe=new F2(R,Q);this.xr=Oe,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const L=mt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=mt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return Te},this.setPixelRatio=function(L){L!==void 0&&(Te=L,this.setSize(xe,ve,!1))},this.getSize=function(L){return L.set(xe,ve)},this.setSize=function(L,$,ue=!0){if(Oe.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=L,ve=$,i.width=Math.floor(L*Te),i.height=Math.floor($*Te),ue===!0&&(i.style.width=L+"px",i.style.height=$+"px"),M!==null&&M.setSize(i.width,i.height),this.setViewport(0,0,L,$)},this.getDrawingBufferSize=function(L){return L.set(xe*Te,ve*Te).floor()},this.setDrawingBufferSize=function(L,$,ue){xe=L,ve=$,Te=ue,i.width=Math.floor(L*ue),i.height=Math.floor($*ue),this.setViewport(0,0,L,$)},this.setEffects=function(L){if(P===_i){Lt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let $=0;$<L.length;$++)if(L[$].isOutputPass===!0){lt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(Y)},this.getViewport=function(L){return L.copy(Re)},this.setViewport=function(L,$,ue,le){L.isVector4?Re.set(L.x,L.y,L.z,L.w):Re.set(L,$,ue,le),Ce.viewport(Y.copy(Re).multiplyScalar(Te).round())},this.getScissor=function(L){return L.copy(ke)},this.setScissor=function(L,$,ue,le){L.isVector4?ke.set(L.x,L.y,L.z,L.w):ke.set(L,$,ue,le),Ce.scissor(ae.copy(ke).multiplyScalar(Te).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(L){Ce.setScissorTest(rt=L)},this.setOpaqueSort=function(L){se=L},this.setTransparentSort=function(L){Me=L},this.getClearColor=function(L){return L.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(L=!0,$=!0,ue=!0){let le=0;if(L){let ce=!1;if(j!==null){const Ge=j.texture.format;ce=b.has(Ge)}if(ce){const Ge=j.texture.type,Xe=y.has(Ge),Be=Le.getClearColor(),Ze=Le.getClearAlpha(),qe=Be.r,at=Be.g,gt=Be.b;Xe?(C[0]=qe,C[1]=at,C[2]=gt,C[3]=Ze,Q.clearBufferuiv(Q.COLOR,0,C)):(B[0]=qe,B[1]=at,B[2]=gt,B[3]=Ze,Q.clearBufferiv(Q.COLOR,0,B))}else le|=Q.COLOR_BUFFER_BIT}$&&(le|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(le|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&Q.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),D=L},this.dispose=function(){i.removeEventListener("webglcontextlost",Ae,!1),i.removeEventListener("webglcontextrestored",Qe,!1),i.removeEventListener("webglcontextcreationerror",ct,!1),Le.dispose(),me.dispose(),Fe.dispose(),z.dispose(),ie.dispose(),De.dispose(),Ne.dispose(),_e.dispose(),Pe.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",eo),Oe.removeEventListener("sessionend",to),zn.stop()};function Ae(L){L.preventDefault(),A_("WebGLRenderer: Context Lost."),T=!0}function Qe(){A_("WebGLRenderer: Context Restored."),T=!1;const L=Gt.autoReset,$=Ue.enabled,ue=Ue.autoUpdate,le=Ue.needsUpdate,ce=Ue.type;He(),Gt.autoReset=L,Ue.enabled=$,Ue.autoUpdate=ue,Ue.needsUpdate=le,Ue.type=ce}function ct(L){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function ln(L){const $=L.target;$.removeEventListener("dispose",ln),Ft($)}function Ft(L){xi(L),z.remove(L)}function xi(L){const $=z.get(L).programs;$!==void 0&&($.forEach(function(ue){Pe.releaseProgram(ue)}),L.isShaderMaterial&&Pe.releaseShaderCache(L))}this.renderBufferDirect=function(L,$,ue,le,ce,Ge){$===null&&($=bt);const Xe=ce.isMesh&&ce.matrixWorld.determinant()<0,Be=La(L,$,ue,le,ce);Ce.setMaterial(le,Xe);let Ze=ue.index,qe=1;if(le.wireframe===!0){if(Ze=we.getWireframeAttribute(ue),Ze===void 0)return;qe=2}const at=ue.drawRange,gt=ue.attributes.position;let tt=at.start*qe,Ot=(at.start+at.count)*qe;Ge!==null&&(tt=Math.max(tt,Ge.start*qe),Ot=Math.min(Ot,(Ge.start+Ge.count)*qe)),Ze!==null?(tt=Math.max(tt,0),Ot=Math.min(Ot,Ze.count)):gt!=null&&(tt=Math.max(tt,0),Ot=Math.min(Ot,gt.count));const sn=Ot-tt;if(sn<0||sn===1/0)return;Ne.setup(ce,le,Be,ue,Ze);let $t,Vt=ft;if(Ze!==null&&($t=Se.get(Ze),Vt=Mt,Vt.setIndex($t)),ce.isMesh)le.wireframe===!0?(Ce.setLineWidth(le.wireframeLinewidth*pn()),Vt.setMode(Q.LINES)):Vt.setMode(Q.TRIANGLES);else if(ce.isLine){let kt=le.linewidth;kt===void 0&&(kt=1),Ce.setLineWidth(kt*pn()),ce.isLineSegments?Vt.setMode(Q.LINES):ce.isLineLoop?Vt.setMode(Q.LINE_LOOP):Vt.setMode(Q.LINE_STRIP)}else ce.isPoints?Vt.setMode(Q.POINTS):ce.isSprite&&Vt.setMode(Q.TRIANGLES);if(ce.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))Vt.renderMultiDraw(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount);else{const kt=ce._multiDrawStarts,je=ce._multiDrawCounts,Bn=ce._multiDrawCount,Et=Ze?Se.get(Ze).bytesPerElement:1,En=z.get(le).currentProgram.getUniforms();for(let si=0;si<Bn;si++)En.setValue(Q,"_gl_DrawID",si),Vt.render(kt[si]/Et,je[si])}else if(ce.isInstancedMesh)Vt.renderInstances(tt,sn,ce.count);else if(ue.isInstancedBufferGeometry){const kt=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,je=Math.min(ue.instanceCount,kt);Vt.renderInstances(tt,sn,je)}else Vt.render(tt,sn)};function ai(L,$,ue){L.transparent===!0&&L.side===gi&&L.forceSinglePass===!1?(L.side=ii,L.needsUpdate=!0,Ys(L,$,ue),L.side=ps,L.needsUpdate=!0,Ys(L,$,ue),L.side=gi):Ys(L,$,ue)}this.compile=function(L,$,ue=null){ue===null&&(ue=L),F=Fe.get(ue),F.init($),_.push(F),ue.traverseVisible(function(ce){ce.isLight&&ce.layers.test($.layers)&&(F.pushLight(ce),ce.castShadow&&F.pushShadow(ce))}),L!==ue&&L.traverseVisible(function(ce){ce.isLight&&ce.layers.test($.layers)&&(F.pushLight(ce),ce.castShadow&&F.pushShadow(ce))}),F.setupLights();const le=new Set;return L.traverse(function(ce){if(!(ce.isMesh||ce.isPoints||ce.isLine||ce.isSprite))return;const Ge=ce.material;if(Ge)if(Array.isArray(Ge))for(let Xe=0;Xe<Ge.length;Xe++){const Be=Ge[Xe];ai(Be,ue,ce),le.add(Be)}else ai(Ge,ue,ce),le.add(Ge)}),F=_.pop(),le},this.compileAsync=function(L,$,ue=null){const le=this.compile(L,$,ue);return new Promise(ce=>{function Ge(){if(le.forEach(function(Xe){z.get(Xe).currentProgram.isReady()&&le.delete(Xe)}),le.size===0){ce(L);return}setTimeout(Ge,10)}mt.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let xs=null;function $r(L){xs&&xs(L)}function eo(){zn.stop()}function to(){zn.start()}const zn=new av;zn.setAnimationLoop($r),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(L){xs=L,Oe.setAnimationLoop(L),L===null?zn.stop():zn.start()},Oe.addEventListener("sessionstart",eo),Oe.addEventListener("sessionend",to),this.render=function(L,$){if($!==void 0&&$.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;D!==null&&D.renderStart(L,$);const ue=Oe.enabled===!0&&Oe.isPresenting===!0,le=M!==null&&(j===null||ue)&&M.begin(R,j);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera($),$=Oe.getCamera()),L.isScene===!0&&L.onBeforeRender(R,L,$,j),F=Fe.get(L,_.length),F.init($),F.state.textureUnits=A.getTextureUnits(),_.push(F),$e.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),et.setFromProjectionMatrix($e,Qi,$.reversedDepth),Ie=this.localClippingEnabled,Bt=ze.init(this.clippingPlanes,Ie),W=me.get(L,k.length),W.init(),k.push(W),Oe.enabled===!0&&Oe.isPresenting===!0){const Xe=R.xr.getDepthSensingMesh();Xe!==null&&mn(Xe,$,-1/0,R.sortObjects)}mn(L,$,0,R.sortObjects),W.finish(),R.sortObjects===!0&&W.sort(se,Me),yt=Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1,yt&&Le.addToRenderList(W,L),this.info.render.frame++,Bt===!0&&ze.beginShadows();const ce=F.state.shadowsArray;if(Ue.render(ce,L,$),Bt===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),(le&&M.hasRenderPass())===!1){const Xe=W.opaque,Be=W.transmissive;if(F.setupLights(),$.isArrayCamera){const Ze=$.cameras;if(Be.length>0)for(let qe=0,at=Ze.length;qe<at;qe++){const gt=Ze[qe];na(Xe,Be,L,gt)}yt&&Le.render(L);for(let qe=0,at=Ze.length;qe<at;qe++){const gt=Ze[qe];Ln(W,L,gt,gt.viewport)}}else Be.length>0&&na(Xe,Be,L,$),yt&&Le.render(L),Ln(W,L,$)}j!==null&&X===0&&(A.updateMultisampleRenderTarget(j),A.updateRenderTargetMipmap(j)),le&&M.end(R),L.isScene===!0&&L.onAfterRender(R,L,$),Ne.resetDefaultState(),N=-1,G=null,_.pop(),_.length>0?(F=_[_.length-1],A.setTextureUnits(F.state.textureUnits),Bt===!0&&ze.setGlobalState(R.clippingPlanes,F.state.camera)):F=null,k.pop(),k.length>0?W=k[k.length-1]:W=null,D!==null&&D.renderEnd()};function mn(L,$,ue,le){if(L.visible===!1)return;if(L.layers.test($.layers)){if(L.isGroup)ue=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update($);else if(L.isLightProbeGrid)F.pushLightProbeGrid(L);else if(L.isLight)F.pushLight(L),L.castShadow&&F.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||et.intersectsSprite(L)){le&&We.setFromMatrixPosition(L.matrixWorld).applyMatrix4($e);const Xe=De.update(L),Be=L.material;Be.visible&&W.push(L,Xe,Be,ue,We.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||et.intersectsObject(L))){const Xe=De.update(L),Be=L.material;if(le&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),We.copy(L.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),We.copy(Xe.boundingSphere.center)),We.applyMatrix4(L.matrixWorld).applyMatrix4($e)),Array.isArray(Be)){const Ze=Xe.groups;for(let qe=0,at=Ze.length;qe<at;qe++){const gt=Ze[qe],tt=Be[gt.materialIndex];tt&&tt.visible&&W.push(L,Xe,tt,ue,We.z,gt)}}else Be.visible&&W.push(L,Xe,Be,ue,We.z,null)}}const Ge=L.children;for(let Xe=0,Be=Ge.length;Xe<Be;Xe++)mn(Ge[Xe],$,ue,le)}function Ln(L,$,ue,le){const{opaque:ce,transmissive:Ge,transparent:Xe}=L;F.setupLightsView(ue),Bt===!0&&ze.setGlobalState(R.clippingPlanes,ue),le&&Ce.viewport(Y.copy(le)),ce.length>0&&Na(ce,$,ue),Ge.length>0&&Na(Ge,$,ue),Xe.length>0&&Na(Xe,$,ue),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function na(L,$,ue,le){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[le.id]===void 0){const tt=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[le.id]=new $i(1,1,{generateMipmaps:!0,type:tt?Ra:_i,minFilter:js,samples:Math.max(4,Ut.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace})}const Ge=F.state.transmissionRenderTarget[le.id],Xe=le.viewport||Y;Ge.setSize(Xe.z*R.transmissionResolutionScale,Xe.w*R.transmissionResolutionScale);const Be=R.getRenderTarget(),Ze=R.getActiveCubeFace(),qe=R.getActiveMipmapLevel();R.setRenderTarget(Ge),R.getClearColor(V),J=R.getClearAlpha(),J<1&&R.setClearColor(16777215,.5),R.clear(),yt&&Le.render(ue);const at=R.toneMapping;R.toneMapping=Ji;const gt=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),F.setupLightsView(le),Bt===!0&&ze.setGlobalState(R.clippingPlanes,le),Na(L,ue,le),A.updateMultisampleRenderTarget(Ge),A.updateRenderTargetMipmap(Ge),mt.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Ot=0,sn=$.length;Ot<sn;Ot++){const $t=$[Ot],{object:Vt,geometry:kt,material:je,group:Bn}=$t;if(je.side===gi&&Vt.layers.test(le.layers)){const Et=je.side;je.side=ii,je.needsUpdate=!0,fl(Vt,ue,le,kt,je,Bn),je.side=Et,je.needsUpdate=!0,tt=!0}}tt===!0&&(A.updateMultisampleRenderTarget(Ge),A.updateRenderTargetMipmap(Ge))}R.setRenderTarget(Be,Ze,qe),R.setClearColor(V,J),gt!==void 0&&(le.viewport=gt),R.toneMapping=at}function Na(L,$,ue){const le=$.isScene===!0?$.overrideMaterial:null;for(let ce=0,Ge=L.length;ce<Ge;ce++){const Xe=L[ce],{object:Be,geometry:Ze,group:qe}=Xe;let at=Xe.material;at.allowOverride===!0&&le!==null&&(at=le),Be.layers.test(ue.layers)&&fl(Be,$,ue,Ze,at,qe)}}function fl(L,$,ue,le,ce,Ge){L.onBeforeRender(R,$,ue,le,ce,Ge),L.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ce.onBeforeRender(R,$,ue,le,L,Ge),ce.transparent===!0&&ce.side===gi&&ce.forceSinglePass===!1?(ce.side=ii,ce.needsUpdate=!0,R.renderBufferDirect(ue,$,le,ce,L,Ge),ce.side=ps,ce.needsUpdate=!0,R.renderBufferDirect(ue,$,le,ce,L,Ge),ce.side=gi):R.renderBufferDirect(ue,$,le,ce,L,Ge),L.onAfterRender(R,$,ue,le,ce,Ge)}function Ys(L,$,ue){$.isScene!==!0&&($=bt);const le=z.get(L),ce=F.state.lights,Ge=F.state.shadowsArray,Xe=ce.state.version,Be=Pe.getParameters(L,ce.state,Ge,$,ue,F.state.lightProbeGridArray),Ze=Pe.getProgramCacheKey(Be);let qe=le.programs;le.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?$.environment:null,le.fog=$.fog;const at=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;le.envMap=ie.get(L.envMap||le.environment,at),le.envMapRotation=le.environment!==null&&L.envMap===null?$.environmentRotation:L.envMapRotation,qe===void 0&&(L.addEventListener("dispose",ln),qe=new Map,le.programs=qe);let gt=qe.get(Ze);if(gt!==void 0){if(le.currentProgram===gt&&le.lightsStateVersion===Xe)return Da(L,Be),gt}else Be.uniforms=Pe.getUniforms(L),D!==null&&L.isNodeMaterial&&D.build(L,ue,Be),L.onBeforeCompile(Be,R),gt=Pe.acquireProgram(Be,Ze),qe.set(Ze,gt),le.uniforms=Be.uniforms;const tt=le.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(tt.clippingPlanes=ze.uniform),Da(L,Be),le.needsLights=vs(L),le.lightsStateVersion=Xe,le.needsLights&&(tt.ambientLightColor.value=ce.state.ambient,tt.lightProbe.value=ce.state.probe,tt.directionalLights.value=ce.state.directional,tt.directionalLightShadows.value=ce.state.directionalShadow,tt.spotLights.value=ce.state.spot,tt.spotLightShadows.value=ce.state.spotShadow,tt.rectAreaLights.value=ce.state.rectArea,tt.ltc_1.value=ce.state.rectAreaLTC1,tt.ltc_2.value=ce.state.rectAreaLTC2,tt.pointLights.value=ce.state.point,tt.pointLightShadows.value=ce.state.pointShadow,tt.hemisphereLights.value=ce.state.hemi,tt.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,tt.spotLightMatrix.value=ce.state.spotLightMatrix,tt.spotLightMap.value=ce.state.spotLightMap,tt.pointShadowMatrix.value=ce.state.pointShadowMatrix),le.lightProbeGrid=F.state.lightProbeGridArray.length>0,le.currentProgram=gt,le.uniformsList=null,gt}function no(L){if(L.uniformsList===null){const $=L.currentProgram.getUniforms();L.uniformsList=eu.seqWithValue($.seq,L.uniforms)}return L.uniformsList}function Da(L,$){const ue=z.get(L);ue.outputColorSpace=$.outputColorSpace,ue.batching=$.batching,ue.batchingColor=$.batchingColor,ue.instancing=$.instancing,ue.instancingColor=$.instancingColor,ue.instancingMorph=$.instancingMorph,ue.skinning=$.skinning,ue.morphTargets=$.morphTargets,ue.morphNormals=$.morphNormals,ue.morphColors=$.morphColors,ue.morphTargetsCount=$.morphTargetsCount,ue.numClippingPlanes=$.numClippingPlanes,ue.numIntersection=$.numClipIntersection,ue.vertexAlphas=$.vertexAlphas,ue.vertexTangents=$.vertexTangents,ue.toneMapping=$.toneMapping}function io(L,$){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;I.setFromMatrixPosition($.matrixWorld);for(let ue=0,le=L.length;ue<le;ue++){const ce=L[ue];if(ce.texture!==null&&ce.boundingBox.containsPoint(I))return ce}return null}function La(L,$,ue,le,ce){$.isScene!==!0&&($=bt),A.resetTextureUnits();const Ge=$.fog,Xe=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?$.environment:null,Be=j===null?R.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Dt.workingColorSpace,Ze=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,qe=ie.get(le.envMap||Xe,Ze),at=le.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,gt=!!ue.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),tt=!!ue.morphAttributes.position,Ot=!!ue.morphAttributes.normal,sn=!!ue.morphAttributes.color;let $t=Ji;le.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&($t=R.toneMapping);const Vt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,kt=Vt!==void 0?Vt.length:0,je=z.get(le),Bn=F.state.lights;if(Bt===!0&&(Ie===!0||L!==G)){const Ht=L===G&&le.id===N;ze.setState(le,L,Ht)}let Et=!1;le.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Bn.state.version||je.outputColorSpace!==Be||ce.isBatchedMesh&&je.batching===!1||!ce.isBatchedMesh&&je.batching===!0||ce.isBatchedMesh&&je.batchingColor===!0&&ce.colorTexture===null||ce.isBatchedMesh&&je.batchingColor===!1&&ce.colorTexture!==null||ce.isInstancedMesh&&je.instancing===!1||!ce.isInstancedMesh&&je.instancing===!0||ce.isSkinnedMesh&&je.skinning===!1||!ce.isSkinnedMesh&&je.skinning===!0||ce.isInstancedMesh&&je.instancingColor===!0&&ce.instanceColor===null||ce.isInstancedMesh&&je.instancingColor===!1&&ce.instanceColor!==null||ce.isInstancedMesh&&je.instancingMorph===!0&&ce.morphTexture===null||ce.isInstancedMesh&&je.instancingMorph===!1&&ce.morphTexture!==null||je.envMap!==qe||le.fog===!0&&je.fog!==Ge||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==ze.numPlanes||je.numIntersection!==ze.numIntersection)||je.vertexAlphas!==at||je.vertexTangents!==gt||je.morphTargets!==tt||je.morphNormals!==Ot||je.morphColors!==sn||je.toneMapping!==$t||je.morphTargetsCount!==kt||!!je.lightProbeGrid!=F.state.lightProbeGridArray.length>0)&&(Et=!0):(Et=!0,je.__version=le.version);let En=je.currentProgram;Et===!0&&(En=Ys(le,$,ce),D&&le.isNodeMaterial&&D.onUpdateProgram(le,En,je));let si=!1,Li=!1,ri=!1;const jt=En.getUniforms(),rn=je.uniforms;if(Ce.useProgram(En.program)&&(si=!0,Li=!0,ri=!0),le.id!==N&&(N=le.id,Li=!0),je.needsLights){const Ht=io(F.state.lightProbeGridArray,ce);je.lightProbeGrid!==Ht&&(je.lightProbeGrid=Ht,Li=!0)}if(si||G!==L){Ce.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),jt.setValue(Q,"projectionMatrix",L.projectionMatrix),jt.setValue(Q,"viewMatrix",L.matrixWorldInverse);const Vi=jt.map.cameraPosition;Vi!==void 0&&Vi.setValue(Q,Ye.setFromMatrixPosition(L.matrixWorld)),Ut.logarithmicDepthBuffer&&jt.setValue(Q,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&jt.setValue(Q,"isOrthographic",L.isOrthographicCamera===!0),G!==L&&(G=L,Li=!0,ri=!0)}if(je.needsLights&&(Bn.state.directionalShadowMap.length>0&&jt.setValue(Q,"directionalShadowMap",Bn.state.directionalShadowMap,A),Bn.state.spotShadowMap.length>0&&jt.setValue(Q,"spotShadowMap",Bn.state.spotShadowMap,A),Bn.state.pointShadowMap.length>0&&jt.setValue(Q,"pointShadowMap",Bn.state.pointShadowMap,A)),ce.isSkinnedMesh){jt.setOptional(Q,ce,"bindMatrix"),jt.setOptional(Q,ce,"bindMatrixInverse");const Ht=ce.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),jt.setValue(Q,"boneTexture",Ht.boneTexture,A))}ce.isBatchedMesh&&(jt.setOptional(Q,ce,"batchingTexture"),jt.setValue(Q,"batchingTexture",ce._matricesTexture,A),jt.setOptional(Q,ce,"batchingIdTexture"),jt.setValue(Q,"batchingIdTexture",ce._indirectTexture,A),jt.setOptional(Q,ce,"batchingColorTexture"),ce._colorsTexture!==null&&jt.setValue(Q,"batchingColorTexture",ce._colorsTexture,A));const Ui=ue.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&ut.update(ce,ue,En),(Li||je.receiveShadow!==ce.receiveShadow)&&(je.receiveShadow=ce.receiveShadow,jt.setValue(Q,"receiveShadow",ce.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&$.environment!==null&&(rn.envMapIntensity.value=$.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=V2()),Li){if(jt.setValue(Q,"toneMappingExposure",R.toneMappingExposure),je.needsLights&&Ua(rn,ri),Ge&&le.fog===!0&&pe.refreshFogUniforms(rn,Ge),pe.refreshMaterialUniforms(rn,le,Te,ve,F.state.transmissionRenderTarget[L.id]),je.needsLights&&je.lightProbeGrid){const Ht=je.lightProbeGrid;rn.probesSH.value=Ht.texture,rn.probesMin.value.copy(Ht.boundingBox.min),rn.probesMax.value.copy(Ht.boundingBox.max),rn.probesResolution.value.copy(Ht.resolution)}eu.upload(Q,no(je),rn,A)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(eu.upload(Q,no(je),rn,A),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&jt.setValue(Q,"center",ce.center),jt.setValue(Q,"modelViewMatrix",ce.modelViewMatrix),jt.setValue(Q,"normalMatrix",ce.normalMatrix),jt.setValue(Q,"modelMatrix",ce.matrixWorld),le.uniformsGroups!==void 0){const Ht=le.uniformsGroups;for(let Vi=0,Pa=Ht.length;Vi<Pa;Vi++){const ys=Ht[Vi];_e.update(ys,En),_e.bind(ys,En)}}return En}function Ua(L,$){L.ambientLightColor.needsUpdate=$,L.lightProbe.needsUpdate=$,L.directionalLights.needsUpdate=$,L.directionalLightShadows.needsUpdate=$,L.pointLights.needsUpdate=$,L.pointLightShadows.needsUpdate=$,L.spotLights.needsUpdate=$,L.spotLightShadows.needsUpdate=$,L.rectAreaLights.needsUpdate=$,L.hemisphereLights.needsUpdate=$}function vs(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(L,$,ue){const le=z.get(L);le.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),z.get(L.texture).__webglTexture=$,z.get(L.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:ue,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,$){const ue=z.get(L);ue.__webglFramebuffer=$,ue.__useDefaultFramebuffer=$===void 0};const Oa=Q.createFramebuffer();this.setRenderTarget=function(L,$=0,ue=0){j=L,H=$,X=ue;let le=null,ce=!1,Ge=!1;if(L){const Be=z.get(L);if(Be.__useDefaultFramebuffer!==void 0){Ce.bindFramebuffer(Q.FRAMEBUFFER,Be.__webglFramebuffer),Y.copy(L.viewport),ae.copy(L.scissor),de=L.scissorTest,Ce.viewport(Y),Ce.scissor(ae),Ce.setScissorTest(de),N=-1;return}else if(Be.__webglFramebuffer===void 0)A.setupRenderTarget(L);else if(Be.__hasExternalTextures)A.rebindTextures(L,z.get(L.texture).__webglTexture,z.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const at=L.depthTexture;if(Be.__boundDepthTexture!==at){if(at!==null&&z.has(at)&&(L.width!==at.image.width||L.height!==at.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(L)}}const Ze=L.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Ge=!0);const qe=z.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(qe[$])?le=qe[$][ue]:le=qe[$],ce=!0):L.samples>0&&A.useMultisampledRTT(L)===!1?le=z.get(L).__webglMultisampledFramebuffer:Array.isArray(qe)?le=qe[ue]:le=qe,Y.copy(L.viewport),ae.copy(L.scissor),de=L.scissorTest}else Y.copy(Re).multiplyScalar(Te).floor(),ae.copy(ke).multiplyScalar(Te).floor(),de=rt;if(ue!==0&&(le=Oa),Ce.bindFramebuffer(Q.FRAMEBUFFER,le)&&Ce.drawBuffers(L,le),Ce.viewport(Y),Ce.scissor(ae),Ce.setScissorTest(de),ce){const Be=z.get(L.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+$,Be.__webglTexture,ue)}else if(Ge){const Be=$;for(let Ze=0;Ze<L.textures.length;Ze++){const qe=z.get(L.textures[Ze]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+Ze,qe.__webglTexture,ue,Be)}}else if(L!==null&&ue!==0){const Be=z.get(L.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Be.__webglTexture,ue)}N=-1},this.readRenderTargetPixels=function(L,$,ue,le,ce,Ge,Xe,Be=0){if(!(L&&L.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=z.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ze=Ze[Xe]),Ze){Ce.bindFramebuffer(Q.FRAMEBUFFER,Ze);try{const qe=L.textures[Be],at=qe.format,gt=qe.type;if(L.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Be),!Ut.textureFormatReadable(at)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(gt)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=L.width-le&&ue>=0&&ue<=L.height-ce&&Q.readPixels($,ue,le,ce,Z.convert(at),Z.convert(gt),Ge)}finally{const qe=j!==null?z.get(j).__webglFramebuffer:null;Ce.bindFramebuffer(Q.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(L,$,ue,le,ce,Ge,Xe,Be=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=z.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ze=Ze[Xe]),Ze)if($>=0&&$<=L.width-le&&ue>=0&&ue<=L.height-ce){Ce.bindFramebuffer(Q.FRAMEBUFFER,Ze);const qe=L.textures[Be],at=qe.format,gt=qe.type;if(L.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Be),!Ut.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,tt),Q.bufferData(Q.PIXEL_PACK_BUFFER,Ge.byteLength,Q.STREAM_READ),Q.readPixels($,ue,le,ce,Z.convert(at),Z.convert(gt),0);const Ot=j!==null?z.get(j).__webglFramebuffer:null;Ce.bindFramebuffer(Q.FRAMEBUFFER,Ot);const sn=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await eM(Q,sn,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,tt),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,Ge),Q.deleteBuffer(tt),Q.deleteSync(sn),Ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,$=null,ue=0){const le=Math.pow(2,-ue),ce=Math.floor(L.image.width*le),Ge=Math.floor(L.image.height*le),Xe=$!==null?$.x:0,Be=$!==null?$.y:0;A.setTexture2D(L,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,ue,0,0,Xe,Be,ce,Ge),Ce.unbindTexture()};const xn=Q.createFramebuffer(),dl=Q.createFramebuffer();this.copyTextureToTexture=function(L,$,ue=null,le=null,ce=0,Ge=0){let Xe,Be,Ze,qe,at,gt,tt,Ot,sn;const $t=L.isCompressedTexture?L.mipmaps[Ge]:L.image;if(ue!==null)Xe=ue.max.x-ue.min.x,Be=ue.max.y-ue.min.y,Ze=ue.isBox3?ue.max.z-ue.min.z:1,qe=ue.min.x,at=ue.min.y,gt=ue.isBox3?ue.min.z:0;else{const rn=Math.pow(2,-ce);Xe=Math.floor($t.width*rn),Be=Math.floor($t.height*rn),L.isDataArrayTexture?Ze=$t.depth:L.isData3DTexture?Ze=Math.floor($t.depth*rn):Ze=1,qe=0,at=0,gt=0}le!==null?(tt=le.x,Ot=le.y,sn=le.z):(tt=0,Ot=0,sn=0);const Vt=Z.convert($.format),kt=Z.convert($.type);let je;$.isData3DTexture?(A.setTexture3D($,0),je=Q.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(A.setTexture2DArray($,0),je=Q.TEXTURE_2D_ARRAY):(A.setTexture2D($,0),je=Q.TEXTURE_2D),Ce.activeTexture(Q.TEXTURE0),Ce.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,$.flipY),Ce.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),Ce.pixelStorei(Q.UNPACK_ALIGNMENT,$.unpackAlignment);const Bn=Ce.getParameter(Q.UNPACK_ROW_LENGTH),Et=Ce.getParameter(Q.UNPACK_IMAGE_HEIGHT),En=Ce.getParameter(Q.UNPACK_SKIP_PIXELS),si=Ce.getParameter(Q.UNPACK_SKIP_ROWS),Li=Ce.getParameter(Q.UNPACK_SKIP_IMAGES);Ce.pixelStorei(Q.UNPACK_ROW_LENGTH,$t.width),Ce.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,$t.height),Ce.pixelStorei(Q.UNPACK_SKIP_PIXELS,qe),Ce.pixelStorei(Q.UNPACK_SKIP_ROWS,at),Ce.pixelStorei(Q.UNPACK_SKIP_IMAGES,gt);const ri=L.isDataArrayTexture||L.isData3DTexture,jt=$.isDataArrayTexture||$.isData3DTexture;if(L.isDepthTexture){const rn=z.get(L),Ui=z.get($),Ht=z.get(rn.__renderTarget),Vi=z.get(Ui.__renderTarget);Ce.bindFramebuffer(Q.READ_FRAMEBUFFER,Ht.__webglFramebuffer),Ce.bindFramebuffer(Q.DRAW_FRAMEBUFFER,Vi.__webglFramebuffer);for(let Pa=0;Pa<Ze;Pa++)ri&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,z.get(L).__webglTexture,ce,gt+Pa),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,z.get($).__webglTexture,Ge,sn+Pa)),Q.blitFramebuffer(qe,at,Xe,Be,tt,Ot,Xe,Be,Q.DEPTH_BUFFER_BIT,Q.NEAREST);Ce.bindFramebuffer(Q.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(ce!==0||L.isRenderTargetTexture||z.has(L)){const rn=z.get(L),Ui=z.get($);Ce.bindFramebuffer(Q.READ_FRAMEBUFFER,xn),Ce.bindFramebuffer(Q.DRAW_FRAMEBUFFER,dl);for(let Ht=0;Ht<Ze;Ht++)ri?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,rn.__webglTexture,ce,gt+Ht):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,rn.__webglTexture,ce),jt?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Ui.__webglTexture,Ge,sn+Ht):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Ui.__webglTexture,Ge),ce!==0?Q.blitFramebuffer(qe,at,Xe,Be,tt,Ot,Xe,Be,Q.COLOR_BUFFER_BIT,Q.NEAREST):jt?Q.copyTexSubImage3D(je,Ge,tt,Ot,sn+Ht,qe,at,Xe,Be):Q.copyTexSubImage2D(je,Ge,tt,Ot,qe,at,Xe,Be);Ce.bindFramebuffer(Q.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else jt?L.isDataTexture||L.isData3DTexture?Q.texSubImage3D(je,Ge,tt,Ot,sn,Xe,Be,Ze,Vt,kt,$t.data):$.isCompressedArrayTexture?Q.compressedTexSubImage3D(je,Ge,tt,Ot,sn,Xe,Be,Ze,Vt,$t.data):Q.texSubImage3D(je,Ge,tt,Ot,sn,Xe,Be,Ze,Vt,kt,$t):L.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,Ge,tt,Ot,Xe,Be,Vt,kt,$t.data):L.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,Ge,tt,Ot,$t.width,$t.height,Vt,$t.data):Q.texSubImage2D(Q.TEXTURE_2D,Ge,tt,Ot,Xe,Be,Vt,kt,$t);Ce.pixelStorei(Q.UNPACK_ROW_LENGTH,Bn),Ce.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Et),Ce.pixelStorei(Q.UNPACK_SKIP_PIXELS,En),Ce.pixelStorei(Q.UNPACK_SKIP_ROWS,si),Ce.pixelStorei(Q.UNPACK_SKIP_IMAGES,Li),Ge===0&&$.generateMipmaps&&Q.generateMipmap(je),Ce.unbindTexture()},this.initRenderTarget=function(L){z.get(L).__webglFramebuffer===void 0&&A.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?A.setTextureCube(L,0):L.isData3DTexture?A.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?A.setTexture2DArray(L,0):A.setTexture2D(L,0),Ce.unbindTexture()},this.resetState=function(){H=0,X=0,j=null,Ce.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Dt._getUnpackColorSpace()}}const Ex={type:"change"},_p={type:"start"},dv={type:"end"},Wc=new hu,Tx=new fs,j2=Math.cos(70*iM.DEG2RAD),An=new ne,ni=2*Math.PI,Qt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},rh=1e-6;class X2 extends qM{constructor(e,i=null){super(e,i),this.state=Qt.NONE,this.target=new ne,this.cursor=new ne,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:kr.ROTATE,MIDDLE:kr.DOLLY,RIGHT:kr.PAN},this.touches={ONE:Gr.ROTATE,TWO:Gr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new ne,this._lastQuaternion=new ms,this._lastTargetPosition=new ne,this._quat=new ms().setFromUnitVectors(e.up,new ne(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new J_,this._sphericalDelta=new J_,this._scale=1,this._panOffset=new ne,this._rotateStart=new ht,this._rotateEnd=new ht,this._rotateDelta=new ht,this._panStart=new ht,this._panEnd=new ht,this._panDelta=new ht,this._dollyStart=new ht,this._dollyEnd=new ht,this._dollyDelta=new ht,this._dollyDirection=new ne,this._mouse=new ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=q2.bind(this),this._onPointerDown=W2.bind(this),this._onPointerUp=Y2.bind(this),this._onContextMenu=tw.bind(this),this._onMouseWheel=Q2.bind(this),this._onKeyDown=J2.bind(this),this._onTouchStart=$2.bind(this),this._onTouchMove=ew.bind(this),this._onMouseDown=Z2.bind(this),this._onMouseMove=K2.bind(this),this._interceptControlDown=nw.bind(this),this._interceptControlUp=iw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ex),this.update(),this.state=Qt.NONE}pan(e,i){this._pan(e,i),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const i=this.object.position;An.copy(i).sub(this.target),An.applyQuaternion(this._quat),this._spherical.setFromVector3(An),this.autoRotate&&this.state===Qt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=ni:s>Math.PI&&(s-=ni),l<-Math.PI?l+=ni:l>Math.PI&&(l-=ni),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const d=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=d!=this._spherical.radius}if(An.setFromSpherical(this._spherical),An.applyQuaternion(this._quatInverse),i.copy(this.target).add(An),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let d=null;if(this.object.isPerspectiveCamera){const h=An.length();d=this._clampDistance(h*this._scale);const m=h-d;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const h=new ne(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new ne(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),d=An.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;d!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(d).add(this.object.position):(Wc.origin.copy(this.object.position),Wc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wc.direction))<j2?this.object.lookAt(this.target):(Tx.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wc.intersectPlane(Tx,this.target))))}else if(this.object.isOrthographicCamera){const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),d!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>rh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>rh||this._lastTargetPosition.distanceToSquared(this.target)>rh?(this.dispatchEvent(Ex),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ni/60*this.autoRotateSpeed*e:ni/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){An.setFromMatrixColumn(i,0),An.multiplyScalar(-e),this._panOffset.add(An)}_panUp(e,i){this.screenSpacePanning===!0?An.setFromMatrixColumn(i,1):(An.setFromMatrixColumn(i,0),An.crossVectors(this.object.up,An)),An.multiplyScalar(e),this._panOffset.add(An)}_pan(e,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;An.copy(l).sub(this.target);let c=An.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=e-s.left,c=i-s.top,d=s.width,h=s.height;this._mouse.x=l/d*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ni*this._rotateDelta.x/i.clientHeight),this._rotateUp(ni*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),l=.5*(e.pageX+s.x),c=.5*(e.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ni*this._rotateDelta.x/i.clientHeight),this._rotateUp(ni*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const d=(e.pageX+i.x)*.5,h=(e.pageY+i.y)*.5;this._updateZoomParameters(d,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new ht,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function W2(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function q2(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function Y2(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(dv),this.state=Qt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function Z2(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case kr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Qt.DOLLY;break;case kr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Qt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Qt.ROTATE}break;case kr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Qt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Qt.PAN}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(_p)}function K2(r){switch(this.state){case Qt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Qt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Qt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function Q2(r){this.enabled===!1||this.enableZoom===!1||this.state!==Qt.NONE||(r.preventDefault(),this.dispatchEvent(_p),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(dv))}function J2(r){this.enabled!==!1&&this._handleKeyDown(r)}function $2(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Gr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Qt.TOUCH_ROTATE;break;case Gr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Qt.TOUCH_PAN;break;default:this.state=Qt.NONE}break;case 2:switch(this.touches.TWO){case Gr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Qt.TOUCH_DOLLY_PAN;break;case Gr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Qt.TOUCH_DOLLY_ROTATE;break;default:this.state=Qt.NONE}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(_p)}function ew(r){switch(this._trackPointer(r),this.state){case Qt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Qt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Qt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Qt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Qt.NONE}}function tw(r){this.enabled!==!1&&r.preventDefault()}function nw(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function iw(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function aw(r,e,i,s){const l=new Ci;l.name=`entity-${r.id}`;const c=new it(e.color),d=e.secondaryColor?new it(e.secondaryColor):c.clone().multiplyScalar(.7),h=e.category==="Structures",m=10,p=r.storeys!==void 0?r.storeys:h?10:void 0,v=p!==void 0?p===0?.15:p/m*e.height:e.height;let S=!1,g=new it(0),E=0;e.emissiveColor&&(i||s)&&(S=!0,g=new it(e.emissiveColor),E=i?4.5:1.2);const w=(M,R=.5,T=.1,D=!1,H=1)=>new sl({color:M,roughness:R,metalness:T,transparent:D,opacity:H,shadowSide:gi}),P=!i&&!s,C=w(c,h&&P?.22:.4,h&&P?.42:.15),B=new sl({color:S?g:d,emissive:S?g:new it(0),emissiveIntensity:E,roughness:.2,metalness:.1}),I=w(d,P?.3:.6,P?.3:.05),W=w(new it(2236962),.7,.4),F=w(new it(9479342),.25,.85),k=new sl({color:P?new it(1668818):new it(8445674),roughness:.04,metalness:P?.95:.85,transparent:!0,opacity:P?.72:.45,shadowSide:gi}),_=.95;switch(e.id){case"residential-low":{const M=new Ee(_,.6,_),R=new te(M,C);R.position.y=.3,R.castShadow=!0,R.receiveShadow=!0,l.add(R);const T=new cu(.72,.6,4),D=new te(T,I);D.rotation.y=Math.PI/4,D.position.y=.9,D.castShadow=!0,l.add(D);const H=new Ee(.12,.4,.12),X=new te(H,W);X.position.set(.2,.8,.2),l.add(X);const j=new Ee(.2,.4,.05),N=new te(j,I);N.position.set(0,.2,.48),l.add(N);for(const G of[-.25,.25]){const Y=new Ee(.15,.15,.05);i?(Y.translate(G,.45,.48),l.add(new te(Y,B))):(Y.translate(G,.45,.48),l.add(new te(Y,k)))}break}case"skyscraper-modern":{const M=new Ee(_,v-.5,_),R=new te(M,C);R.position.y=(v-.5)/2,R.castShadow=!0,R.receiveShadow=!0,l.add(R);const T=new Ee(_*.8,.3,_*.8),D=new te(T,I);D.position.y=v-.35,D.castShadow=!0,l.add(D);const H=new St(.02,.02,.6),X=new te(H,F);X.position.set(0,v+.1,0),l.add(X);const j=new Wn(.06,8,8),N=new te(j,B);N.position.set(0,v+.4,0),l.add(N);const G=w(new it(13751771),.1,.9),Y=new Ee(.04,v-.5,.04),ae=[-_/2,_/2];ae.forEach(V=>{ae.forEach(J=>{const xe=new te(Y,G);xe.position.set(V,(v-.5)/2,J),xe.castShadow=!0,l.add(xe)})});const de=Math.floor(v/.4);for(let V=1;V<de;V++){const J=V*.4,xe=new Ee(_*1.015,.08,_*1.015),ve=new te(xe,i?B:k);ve.position.y=J,ve.castShadow=!0,l.add(ve)}break}case"cyberpunk-tower":{const M=v/5.5,R=new St(.48,.5,2*M,6),T=new te(R,C);T.position.y=1*M,T.castShadow=!0,T.receiveShadow=!0,l.add(T);const D=new St(.35,.42,2*M,6),H=new te(D,I);H.position.y=3*M,H.castShadow=!0,l.add(H);const X=new Ee(.8,.8*M,.8),j=new te(X,W);j.position.y=4.4*M,j.castShadow=!0,l.add(j);const N=new Vs(.52,.08,12,24),G=new te(N,k);G.rotation.x=Math.PI/2,G.position.y=3.6*M,l.add(G);const Y=new te(new St(.015,.015,1.2*M),F);Y.position.set(-.2,5.2*M,0),Y.rotation.z=-.15;const ae=new te(new St(.015,.015,.8*M),F);ae.position.set(.2,5*M,0),ae.rotation.z=.15,l.add(Y),l.add(ae);const de=new St(.02,.02,4*M),V=new te(de,F);V.position.set(-.55,2*M,0),V.rotation.z=.1;const J=V.clone();J.position.x=.55,J.rotation.z=-.1,l.add(V),l.add(J);const xe=new Ee(.1,v-1.2*M,1.04),ve=new te(xe,B);ve.position.y=(v-1.2*M)/2+.3*M,l.add(ve);break}case"factory":{const M=v/2,R=new Ee(1.9,1.2*M,_),T=new te(R,C);T.position.set(.48,.6*M,0),T.castShadow=!0,T.receiveShadow=!0,l.add(T);const D=new te(new Ee(.9,.2,_*1.02),I);D.position.set(0,1.25*M,0),D.rotation.z=.18;const H=new te(new Ee(.9,.2,_*1.02),I);H.position.set(.96,1.25*M,0),H.rotation.z=-.18,l.add(D),l.add(H);const X=new St(.12,.12,1.6*M,8),j=new te(X,F);j.position.set(.4,1.4*M,-.2),j.castShadow=!0,l.add(j);const N=w(new it(11583173),.4,.85),G=new Ee(.5,.5*M,.02),Y=new te(G,N);Y.position.set(0,.25*M,_/2+.015),Y.castShadow=!0,l.add(Y);const ae=new Vs(.18,.04,8,16),de=new te(ae,F);if(de.position.set(.8,.6*M,_/2+.015),l.add(de),i||s){const V=new te(new Wn(.18,8,8),B);V.position.set(.4,2.2*M,-.2),l.add(V)}break}case"power-plant":{const M=v/3.2;[{x:0,z:0},{x:.9,z:.9}].forEach(T=>{const D=new Ci;D.position.set(T.x,0,T.z);const H=new St(.35,.48,1.2*M,12),X=new te(H,C);X.position.y=.6*M,X.castShadow=!0,X.receiveShadow=!0,D.add(X);const j=new St(.4,.35,1.2*M,12),N=new te(j,C);N.position.y=1.8*M,N.castShadow=!0,D.add(N);const G=new Vs(.4,.05,8,16),Y=new te(G,B);Y.rotation.x=Math.PI/2,Y.position.y=2.4*M,D.add(Y),l.add(D)});break}case"bridge":{const M=v/2.5,R=new Ee(.8,.12,2.9),T=new te(R,C);T.position.set(0,.6*M,.9),T.castShadow=!0,T.receiveShadow=!0,l.add(T);const D=new Ee(.12,1.8*M,.12),H=new te(D,F);H.position.set(-.35,1.2*M,.9),H.castShadow=!0;const X=H.clone();X.position.x=.35,l.add(H),l.add(X);const j=new Ee(.03,1.5*M,.03),N=new te(j,F);N.position.set(-.35,1.1*M,0),N.rotation.x=.6,l.add(N);const G=N.clone();if(G.position.set(-.35,1.1*M,1.8),G.rotation.x=-.6,l.add(G),i){const Y=new te(new Ee(.03,.04,2.9),B);Y.position.set(-.38,.68*M,.9),l.add(Y);const ae=new te(new Ee(.03,.04,2.9),B);ae.position.set(.38,.68*M,.9),l.add(ae);const de=new St(.02,.02,1.6,6),V=new te(de,B);V.position.set(-.35,1.3*M,.9),V.rotation.z=Math.PI/2,l.add(V);const J=V.clone();J.position.x=.35,l.add(J)}break}case"hospital":{const M=v/2.8,R=new Ee(1.8,1.8*M,1.8),T=new te(R,C);T.position.set(.48,.9*M,.48),T.castShadow=!0,T.receiveShadow=!0,l.add(T);const D=new te(new Ee(.15,.6*M,.06),I);D.position.set(.48,1*M,1.39);const H=new te(new Ee(.6,.15*M,.06),I);if(H.position.set(.48,1*M,1.39),l.add(D),l.add(H),i){const X=new te(new Wn(.12,8,8),B);X.position.set(.48,1.95*M,.48),l.add(X)}break}case"police-station":{const M=v/2.2,R=new Ee(_,1.8*M,_),T=new te(R,C);T.position.y=.9*M,T.castShadow=!0,T.receiveShadow=!0,l.add(T);const D=new Ee(.4,.8*M,.6),H=new te(D,I);H.position.set(.35,.4*M,.35),l.add(H);const X=new te(new Wn(.08,8,8),B);X.position.set(-.2,1.85*M,.2),l.add(X);const j=sw(i);j.position.set(.2,1.85*M,.2),l.add(j);break}case"supermarket":{const M=v/1.6,R=new Ee(1.8,1.1*M,1.8),T=new te(R,C);T.position.set(.48,.55*M,.48),T.castShadow=!0,T.receiveShadow=!0,l.add(T);const D=new Ee(1.9,.15*M,.4),H=new te(D,I);H.position.set(.48,.8*M,.9),l.add(H);const X=new te(new Ee(.6,.6*M,.05),k);X.position.set(.48,.3*M,.89),l.add(X);break}case"wind-turbine":{const M=new St(.06,.1,v-1.2,8),R=new te(M,C);R.position.y=(v-1.2)/2,R.castShadow=!0,l.add(R);const T=new Wn(.12,12,12),D=new te(T,I);D.position.set(0,v-1.2,.1),l.add(D);const H=1.1;for(let X=0;X<3;X++){const j=new Ee(.08,H,.01),N=new te(j,C);N.position.y=H/2;const G=new Ci;G.position.set(0,v-1.2,.14),G.rotation.z=X*Math.PI*2/3,G.add(N),l.add(G)}break}case"road-2lane":{const M=new te(new Ee(_,.05,_),C);M.receiveShadow=!0,l.add(M);const R=new Ee(.03,.008,.95),T=new te(R,I);T.position.set(-.04,.03,0);const D=new te(R,I);D.position.set(.04,.03,0),l.add(T),l.add(D);break}case"road-crossing":{const M=new te(new Ee(_,.05,_),C);M.receiveShadow=!0,l.add(M);const R=(T,D,H)=>{const X=new te(new Ee(H?.32:.08,.008,H?.08:.32),I);X.position.set(T,.03,D),l.add(X)};R(-.3,0,!1),R(.3,0,!1),R(0,-.3,!0),R(0,.3,!0);break}case"road-t-junction":{const M=new te(new Ee(_,.05,_),C);M.receiveShadow=!0,l.add(M);const R=new te(new Ee(.03,.008,.95),I);R.position.set(0,.03,0),l.add(R);const T=new te(new Ee(.45,.008,.03),I);T.position.set(.22,.03,0),l.add(T);break}case"train-tracks":{const M=new te(new Ee(_,.05,_),C);M.receiveShadow=!0,l.add(M);for(let H=-.4;H<=.4;H+=.2){const X=new te(new Ee(.72,.03,.04),C);X.position.set(0,.045,H),l.add(X)}const R=new Ee(.02,.04,1),T=new te(R,I);T.position.set(-.25,.07,0);const D=new te(R,I);D.position.set(.25,.07,0),l.add(T),l.add(D);break}case"streetlight":{const M=new te(new St(.04,.04,1.9,6),C);M.position.y=.95,M.castShadow=!0,l.add(M);const R=new te(new Ee(.3,.08,.12),C);R.position.set(.12,1.9,0),l.add(R);const T=new te(new Wn(.1,8,8),B);if(T.position.set(.22,1.84,0),l.add(T),i||s){const D=new cu(.6,1.6,12,1,!0);D.translate(0,-.8,0);const H=new ru({color:16771584,transparent:!0,opacity:i?.22:.08,side:gi}),X=new te(D,H);X.position.set(.22,1.84,0),l.add(X)}break}case"power-grid-pole":{const M=new te(new St(.03,.05,3.2,6),C);M.position.y=1.6,l.add(M);const R=new te(new Ee(1.2,.06,.06),C);R.position.set(0,3,0),l.add(R);for(const T of[-.5,0,.5]){const D=new te(new Wn(.06,6,6),I);D.position.set(T,3.06,0),l.add(D)}break}case"park-grid":{const M=new te(new Ee(1.9,.05,1.9),C);M.position.set(.48,0,.48),M.receiveShadow=!0,l.add(M);const R=new St(.6,.6,.01,16),T=new te(R,I);T.position.set(.48,.03,.48),l.add(T);const D=new te(new Ee(.4,.15,.15),I);D.position.set(.48,.1,.1),l.add(D);break}case"oak-trees":{[{px:0,pz:.15,scale:1},{px:-.22,pz:-.15,scale:.8},{px:.22,pz:-.15,scale:.9}].forEach(R=>{const T=new Ci;T.position.set(R.px,0,R.pz);const D=new St(.05*R.scale,.08*R.scale,.7*R.scale,6),H=new te(D,I);H.position.y=.35*R.scale,H.castShadow=!0,T.add(H);const X=new Wn(.45*R.scale,10,10),j=new te(X,C);j.position.y=.9*R.scale,j.castShadow=!0,T.add(j),l.add(T)});break}case"water-fountain":{const M=new St(.48,.48,.25,16),R=new te(M,C);R.position.y=.125,R.castShadow=!0,l.add(R);const T=new St(.42,.42,.05,16),D=new te(T,i||s?B:I);D.position.set(0,.22,0),l.add(D);const H=new te(new St(.04,.06,.4,8),W);H.position.y=.25,l.add(H);break}case"parking-lot":{const M=new te(new Ee(_,.05,_),C);M.receiveShadow=!0,l.add(M);for(const R of[-.3,0,.3]){const T=new Ee(.4,.01,.03),D=new te(T,I);D.position.set(-.25,.03,R);const H=new te(T,I);H.position.set(.25,.03,R),l.add(D),l.add(H)}break}case"billboard-neon":{const M=new te(new St(.04,.04,2,6),I);M.position.y=1,l.add(M);const R=new Ee(.9,.5,.12),T=new te(R,C);T.position.set(0,2.2,0),l.add(T);const D=new Ee(.8,.4,.04),H=new te(D,B);H.position.set(0,2.2,.06),l.add(H);break}case"wall-concrete":case"wall-drywall":{const M=new Ee(_,e.height,.14),R=new te(M,C);R.position.y=e.height/2,R.castShadow=!0,R.receiveShadow=!0,l.add(R);break}case"wall-window":{const R=new te(new Ee(.18,e.height,.14),C);R.position.set(-_/2+.18/2,e.height/2,0),R.castShadow=!0;const T=R.clone();T.position.x=_/2-.18/2,l.add(R),l.add(T);const D=new Ee(_,.4,.14),H=new te(D,C);H.position.set(0,e.height-.2,0),H.castShadow=!0,l.add(H);const X=e.height-.4,j=new Ee(_-.18*2,X,.04),N=new te(j,k);N.position.set(0,X/2,0),l.add(N);break}case"wall-archway":{const R=new te(new Ee(.24,e.height-.5,.16),C);R.castShadow=!0,R.position.set(-_/2+.24/2,(e.height-.5)/2,0);const T=R.clone();T.position.x=_/2-.24/2,l.add(R),l.add(T);const D=new te(new Ee(_,.5,.16),C);D.position.set(0,e.height-.25,0),D.castShadow=!0,l.add(D);break}case"wall-sliding-door":{const M=new te(new Ee(.12,e.height,.16),C);M.position.set(-_/2+.06,e.height/2,0);const R=M.clone();R.position.x=_/2-.06,l.add(M),l.add(R);const T=new te(new Ee(_,.08,.16),W);T.position.set(0,.04,0);const D=T.clone();D.position.y=e.height-.04,l.add(T),l.add(D);const H=e.height-.16,X=new te(new Ee(.68,H,.04),k);X.position.set(.1,H/2+.08,-.02),l.add(X);break}case"floor-hardwood":{const M=new Ee(_,.05,_),R=new te(M,C);R.receiveShadow=!0,l.add(R);for(let T=-.3;T<=.3;T+=.3){const D=new te(new Ee(.015,.008,.95),I);D.position.set(T,.026,0),l.add(D)}break}case"floor-tile":{const M=new te(new Ee(_,.05,_),C);M.receiveShadow=!0,l.add(M);const R=new te(new Ee(_,.008,.018),I);R.position.set(0,.026,0),l.add(R);const T=new te(new Ee(.018,.008,_),I);T.position.set(0,.026,0),l.add(T);break}case"floor-rug":{const M=new te(new Ee(1.7,.04,1.7),C);M.position.set(.35,0,.35),M.receiveShadow=!0,l.add(M);const R=new Ee(1.6,.008,.1),T=new te(R,I);T.position.set(.35,.021,.1);const D=new te(R,I);D.position.set(.35,.021,.6),l.add(T),l.add(D);break}case"fixture-spotlight":{const M=new te(new St(.12,.12,.15,8),W);M.position.y=e.height-.075,l.add(M);const R=new te(new Wn(.08,8,8),B);if(R.position.y=e.height-.18,l.add(R),i||s){const T=new St(.08,.8,2,12,1,!0);T.translate(0,-1,0);const D=new ru({color:16771584,transparent:!0,opacity:i?.25:.09,side:gi}),H=new te(T,D);H.position.y=e.height-.18,l.add(H)}break}case"fixture-sconce":{const M=new te(new Ee(.05,.2,.1),W);M.position.set(-_/2+.025,1.5,0),l.add(M);const R=new te(new St(.04,.04,.12,6),F);R.position.set(-_/2+.07,1.5,0),l.add(R);const T=new te(new Wn(.06,8,8),B);T.position.set(-_/2+.07,1.58,0),l.add(T);break}case"fixture-counter":{const M=new Ee(1.85,.88,.44),R=new te(M,C);R.position.set(.48,.44,0),R.castShadow=!0,R.receiveShadow=!0,l.add(R);const T=new te(new St(.015,.015,.2,6),F);T.position.set(.48,.98,.1),l.add(T);const D=new te(new Ee(.48,.01,.32),W);D.position.set(.48,.885,-.05),l.add(D);break}case"fixture-refrigerator":{const M=new Ee(_-.1,1.95,_-.1),R=new te(M,C);R.position.y=1,R.castShadow=!0,l.add(R);const T=new te(new Ee(.04,.4,.04),F);T.position.set(.12,1.2,_/2-.04),l.add(T);const D=new te(new Ee(.15,.25,.02),B);D.position.set(-.15,1.4,_/2-.04),l.add(D);break}case"fixture-toilet":{const M=new te(new Ee(.45,.55,.22),C);M.position.set(0,.525,-.28),M.castShadow=!0,l.add(M);const R=new te(new St(.18,.14,.4,12),C);R.position.set(0,.2,.06),R.scale.set(1.1,1,1.35),R.castShadow=!0,l.add(R);break}case"fixture-bathtub":{const M=new te(new Ee(1.7,.65,.8),C);M.position.set(.35,.325,0),M.castShadow=!0,l.add(M);const R=new te(new Ee(1.58,.01,.68),I);R.position.set(.35,.55,0),l.add(R);break}case"fixture-tv":{const M=new te(new Ee(1.75,.35,.35),C);M.position.set(.35,.175,0),M.castShadow=!0,l.add(M);const R=new te(new Ee(1.4,.75,.04),W);R.position.set(.35,.75,0),R.castShadow=!0,l.add(R);const T=new te(new Ee(1.36,.71,.01),B);T.position.set(.35,.75,.022),l.add(T);break}case"furniture-sofa":{const M=new te(new Ee(1.8,.25,.78),C);M.position.set(.48,.125,0),M.castShadow=!0,l.add(M);const R=new te(new Ee(.78,.25,1),C);R.position.set(-.03,.125,.89),R.castShadow=!0,l.add(R);const T=new te(new Ee(1.8,.6,.18),I);T.position.set(.48,.45,-.3),T.castShadow=!0,l.add(T);const D=new te(new Ee(.18,.6,1),I);D.position.set(-.33,.45,.89),D.castShadow=!0,l.add(D);break}case"furniture-table":{const M=new Ee(1.7,.05,.85),R=new te(M,C);R.position.set(.35,.725,0),R.castShadow=!0,l.add(R);const T=[-.42,1.12],D=[-.34,.34];T.forEach(H=>{D.forEach(X=>{const j=new te(new St(.025,.025,.7,6),I);j.position.set(H,.35,X),j.castShadow=!0,l.add(j)})});break}case"furniture-chair":{const M=new te(new St(.24,.24,.04,5),W);M.position.y=.06,l.add(M);const R=new te(new St(.018,.018,.4,6),F);R.position.y=.24,l.add(R);const T=new te(new Ee(.44,.08,.44),C);T.position.y=.46,T.castShadow=!0,l.add(T);const D=new te(new Ee(.42,.55,.06),I);D.position.set(0,.75,-.19),D.castShadow=!0,l.add(D);break}case"furniture-bookshelf":{const M=new Ee(.85,2.05,.38),R=new te(M,C);R.position.y=1.025,R.castShadow=!0,l.add(R);for(let T=.3;T<1.9;T+=.45){const D=new te(new Ee(.48,.22,.22),I);D.position.set(.12,T,.08),l.add(D)}break}case"furniture-monstera":{const M=new te(new St(.22,.16,.32,10),I);M.position.y=.16,M.castShadow=!0,l.add(M);const R=new te(new St(.2,.2,.03,10),W);R.position.y=.305,l.add(R),[0,1.2,2.4,3.6,4.8].forEach(D=>{const H=new Ci;H.position.set(0,.31,0),H.rotation.y=D;const X=new te(new St(.015,.015,.6),I);X.position.set(.12,.24,0),X.rotation.z=-.4,H.add(X);const j=new te(new Ee(.3,.01,.25),C);j.position.set(.35,.48,0),j.rotation.z=-.2,H.add(j),l.add(H)});break}case"furniture-coffee-table":{const M=new te(new St(.44,.44,.05,16),C);M.position.y=.425,M.castShadow=!0,l.add(M);for(let R=0;R<3;R++){const T=new Ci;T.rotation.y=R*Math.PI*2/3;const D=new te(new St(.018,.018,.42,6),I);D.position.set(.22,.21,0),D.rotation.z=-.2,D.castShadow=!0,T.add(D),l.add(T)}break}case"river-flow":{const M=new Ee(_,.04,_),R=new te(M,W);R.receiveShadow=!0,l.add(R);const T=_*.78,D=new Ee(T,.045,_),H=new te(D,B);H.receiveShadow=!0,H.position.y=.01,l.add(H);const X=new te(new Ee(.04,.05,_),C);X.position.set(-_/2+.02,.015,0);const j=new te(new Ee(.04,.05,_),C);j.position.set(_/2-.02,.015,0),l.add(X),l.add(j);break}case"ai-data-center":{const M=new Ee(1.82,1.4,1.82),R=new te(M,C);R.position.set(.48,.7,.48),R.castShadow=!0,R.receiveShadow=!0,l.add(R);const T=new Ee(1.84,.06,.4);for(let N=.2;N<=1.2;N+=.25){const G=new te(T,B);G.position.set(.48,N,1.15),G.scale.set(.85,1,.05);const Y=new te(T,B);Y.position.set(.48,N,-.19),Y.scale.set(.85,1,.05),l.add(G),l.add(Y)}const D=new St(.5,.5,.15,12),H=new te(D,W);H.position.set(.48,1.45,.48),l.add(H);const X=new Wn(.12,8,8),j=new te(X,B);j.position.set(.48,1.48,.48),l.add(j);break}case"grand-hotel":{const M=new Ee(1.82,1.8,1.82),R=new te(M,C);R.position.set(.48,.9,.48),R.castShadow=!0,R.receiveShadow=!0,l.add(R);const T=new Ee(1.3,3.4,1.3),D=new te(T,I);D.position.set(.48,3,.48),D.castShadow=!0,l.add(D);const H=new Ee(.85,.25,.65),X=new te(H,W);X.position.set(.48,2.1,1.2),X.castShadow=!0,l.add(X);const j=new Ee(.78,.2,.58),N=new te(j,B);N.position.set(.48,2.16,1.2),l.add(N);const G=new St(.02,.02,1.2,6),Y=new te(G,F);Y.position.set(.48,5.2,.48),l.add(Y);const ae=new Wn(.1,8,8),de=new te(ae,B);de.position.set(.48,5.8,.48),l.add(de);break}case"neon-park":{const M=new Ee(1.85,.06,1.85),R=new te(M,C);R.receiveShadow=!0,R.position.set(.48,0,.48),l.add(R);const T=new Vs(.48,.08,6,16),D=new te(T,B);D.rotation.x=Math.PI/2,D.position.set(.48,.04,.48),l.add(D);const H=new Ee(.24,.08,1.4),X=new te(H,I);X.position.set(.48,.05,.48),l.add(X);const j=new Vs(.68,.03,6,16,Math.PI),N=new te(j,B);N.position.set(.48,.01,.48),N.rotation.y=Math.PI/4,l.add(N);break}case"rainbow-tree":{const M=new St(.05,.08,.8,8),R=new te(M,W);R.position.y=.4,R.castShadow=!0,l.add(R);const T=new Ee(.65,.18,.65),D=new te(T,B);D.position.y=.9,D.castShadow=!0,l.add(D);const H=new Ee(.45,.45,.45),X=new te(H,B);X.position.y=1.35,X.castShadow=!0,l.add(X);break}case"furniture-bed":{const M=new te(new Ee(1.84,.25,1.84),C);M.position.set(.48,.125,.48),M.castShadow=!0,M.receiveShadow=!0,l.add(M);const R=new te(new Ee(1.72,.44,1.72),w(new it(16119285),.8,0));R.position.set(.48,.44,.48),R.castShadow=!0,l.add(R);const T=new te(new Ee(1.74,.2,1.1),I);T.position.set(.48,.55,.78),T.castShadow=!0,l.add(T);for(const D of[.15,.81]){const H=new te(new Ee(.45,.08,.32),w(new it(16777215),.9,0));H.position.set(D,.68,.1),l.add(H)}break}default:{const M=new Ee(_,e.height,_),R=new te(M,C);R.position.y=e.height/2,R.castShadow=!0,R.receiveShadow=!0,l.add(R)}}return l.rotation.y=r.rotation,l.traverse(M=>{M instanceof te&&(M.castShadow=!0,M.receiveShadow=!0)}),l}function sw(r,e){let i=!1,s=0,l=new it(662558);r&&(i=!0,s=2.5,l=new it(870305));const c=new sl({color:r?new it(3076991):new it(16716321),emissive:i?l:new it(0),emissiveIntensity:s,roughness:.2,metalness:.1});return new te(new Wn(.08,8,8),c)}const Ax=({entities:r,mode:e,environment:i,selectedEntityId:s,selectedFloorLevel:l,onSelectEntity:c,gridSize:d=30})=>{const h=nt.useRef(null),m=nt.useRef(null),[p,v]=nt.useState(!1),S=nt.useRef(null),g=nt.useRef(null),E=nt.useRef(null),w=nt.useRef(null),P=nt.useRef(null),b=nt.useRef(null),y=nt.useRef(null),C=nt.useRef(null),B=nt.useRef(null),I=nt.useRef(null),W=nt.useRef(null),[F,k]=nt.useState({width:400,height:400}),_=()=>{g.current&&w.current&&(e==="city"?g.current.position.set(d*.9,d*1.1,d*1.1):g.current.position.set(d*.5,d*.8,d*.8),w.current.target.set(d/2,0,d/2),w.current.update())};nt.useEffect(()=>{if(!h.current)return;const T=new ResizeObserver(D=>{if(!D||D.length===0)return;const{width:H,height:X}=D[0].contentRect;k({width:Math.max(H,100),height:Math.max(X,100)})});return T.observe(h.current),()=>T.disconnect()},[p]),nt.useEffect(()=>{g.current&&E.current&&(g.current.aspect=F.width/F.height,g.current.updateProjectionMatrix(),E.current.setSize(F.width,F.height))},[F]),nt.useEffect(()=>{if(!m.current)return;const T=new _M;S.current=T;const D=new Ni(45,m.current.clientWidth/m.current.clientHeight,.1,1e3);D.position.set(22,24,28),g.current=D;const H=new k2({canvas:m.current,antialias:!0,alpha:!1});H.shadowMap.enabled=!0,H.shadowMap.type=Dx,H.setPixelRatio(Math.min(window.devicePixelRatio,2)),E.current=H;const X=new X2(D,H.domElement);X.enableDamping=!0,X.dampingFactor=.08,X.maxPolarAngle=Math.PI/2-.02,X.minDistance=3,X.maxDistance=150,X.target.set(15,0,15),w.current=X;const j=new GM(16777215,.5);T.add(j),y.current=j;const N=new BM(16777215,1.2);N.position.set(25,40,20),N.castShadow=!0,N.shadow.mapSize.width=1548,N.shadow.mapSize.height=1548,N.shadow.camera.near=.5,N.shadow.camera.far=150;const G=32;N.shadow.camera.left=-G,N.shadow.camera.right=G,N.shadow.camera.top=G,N.shadow.camera.bottom=-G,N.shadow.bias=-5e-4,T.add(N),P.current=N;const Y=new IM(16777215,4473924,.4);Y.position.set(0,50,0),T.add(Y),b.current=Y;const ae=new Ci;T.add(ae),C.current=ae;const de=new WM(new te,2733814);de.visible=!1,T.add(de),W.current=de;let V;const J=new jM,xe=()=>{V=requestAnimationFrame(xe),w.current&&w.current.update(),J.getElapsedTime(),ae.children.forEach(ve=>{if(ve.name.includes("entity-")){const Te=ve.children.find(se=>se.name==="turbine-blades");Te&&(Te.rotation.z+=.015),ve.children.forEach(se=>{se instanceof Ci&&se.children.forEach(Me=>{Me.position.y>3.5&&Me.children.length===1&&(Me.rotation.z+=.02)})})}}),E.current&&S.current&&g.current&&E.current.render(S.current,g.current)};return xe(),_(),()=>{cancelAnimationFrame(V),T.clear(),H.dispose()}},[]),nt.useEffect(()=>{const T=S.current;if(!T)return;B.current&&T.remove(B.current);const D=new XM(d,d,5195493,3223169),H=l*2.4;D.position.set(d/2,H,d/2),T.add(D),B.current=D,I.current&&T.remove(I.current);const X=new ul(d*2.8,d*2.8),j=new sl({color:i==="day"?16777215:461588,roughness:.9,metalness:.08}),N=new te(X,j);N.rotation.x=-Math.PI/2,N.position.set(d/2,-.01,d/2),N.receiveShadow=!0,T.add(N),I.current=N,P.current&&P.current.target.position.set(d/2,0,d/2),w.current&&w.current.target.set(d/2,0,d/2)},[d,l,i]),nt.useEffect(()=>{const T=S.current,D=P.current,H=b.current,X=y.current;if(!T||!D||!H||!X)return;const j=T.getObjectByName("skydome");j&&T.remove(j),i==="day"?(T.background=new it(14743546),T.fog=new al(14743546,.012),X.color.setHex(11725810),X.intensity=.55,D.color.setHex(16777215),D.intensity=1.35,D.position.set(35,45,20),D.visible=!0,H.color.setHex(9489145),H.groundColor.setHex(14142664),H.intensity=.45):i==="sunset"?(T.background=new it(16774112),T.fog=new al(16769202,.015),X.color.setHex(16764032),X.intensity=.45,D.color.setHex(16740419),D.intensity=1.6,D.position.set(40,15,12),D.visible=!0,H.color.setHex(11225020),H.groundColor.setHex(6111287),H.intensity=.45):(T.background=new it(659229),T.fog=new al(790559,.022),X.color.setHex(4149685),X.intensity=.18,D.color.setHex(6056896),D.intensity=.22,D.position.set(15,32,25),D.visible=!0,H.color.setHex(166097),H.groundColor.setHex(1713022),H.intensity=.25)},[i]),nt.useEffect(()=>{if(B.current){const T=l*2.4;B.current.position.y=T}},[l]),nt.useEffect(()=>{const T=C.current;if(!T)return;for(;T.children.length>0;)T.remove(T.children[0]);const D=i==="night",H=i==="sunset";r.forEach(X=>{const N=(e==="city"?Hr:Vr).find(G=>G.id===X.type);if(N){const G=aw(X,N,D,H),Y=X.floorLevel*2.4;G.position.set(X.gridX+.5,Y,X.gridZ+.5),G.userData={entityId:X.id},T.add(G)}}),M()},[r,e,i]),nt.useEffect(()=>{M()},[s,r]);const M=()=>{const T=W.current,D=C.current;if(!T||!D)return;if(!s){T.visible=!1;return}const H=D.children.find(X=>X.userData&&X.userData.entityId===s);H?(T.setFromObject(H),T.visible=!0):T.visible=!1},R=T=>{const D=m.current,H=g.current,X=C.current;if(!D||!H||!X)return;const j=D.getBoundingClientRect(),N=(T.clientX-j.left)/j.width*2-1,G=-((T.clientY-j.top)/j.height)*2+1,Y=new kM;Y.setFromCamera(new ht(N,G),H);const ae=Y.intersectObjects(X.children,!0);if(ae.length>0){let de=ae[0].object;for(;de.parent&&de.parent!==X;)de=de.parent;if(de.userData&&de.userData.entityId){c(de.userData.entityId);return}}c(null)};return U.jsxs("div",{ref:h,id:"three-viewport-container",className:p?"fixed inset-0 z-[9999] w-screen h-screen bg-slate-950 overflow-hidden":"relative w-full h-full bg-slate-950 overflow-hidden",children:[U.jsx("canvas",{ref:m,id:"three-viewport-canvas",className:"w-full h-full cursor-grab active:cursor-grabbing block",onClick:R}),U.jsxs("div",{className:"absolute top-4 right-4 flex items-center gap-2 z-10",children:[U.jsx("button",{onClick:()=>v(!p),id:"btn-toggle-fullscreen-3d",className:"p-2.5 rounded-xl bg-white/90 dark:bg-slate-900/90 hover:bg-white text-slate-800 dark:text-slate-100 shadow-md backdrop-blur-sm transition-all hover:scale-105 active:scale-95 border border-slate-200/50 dark:border-slate-800/50 flex items-center justify-center gap-1.5 text-xs font-mono",title:p?"Exit Fullscreen":"Enlarge to Fullscreen",children:p?U.jsxs(U.Fragment,{children:[U.jsx(tb,{className:"w-4 h-4 text-rose-500 animate-pulse"}),U.jsx("span",{children:"MINIMIZE VIEW"})]}):U.jsxs(U.Fragment,{children:[U.jsx(QS,{className:"w-4 h-4 text-emerald-500"}),U.jsx("span",{children:"ENLARGE 3D"})]})}),U.jsxs("button",{onClick:_,id:"btn-reset-view-3d",className:"p-2.5 rounded-xl bg-white/90 dark:bg-slate-900/90 hover:bg-white text-slate-800 dark:text-slate-100 shadow-md backdrop-blur-sm transition-all hover:scale-105 active:scale-95 border border-slate-200/50 dark:border-slate-800/50 flex items-center justify-center gap-1.5 text-xs font-mono",title:"Reset View (R)",children:[U.jsx(Rx,{className:"w-4 h-4 text-blue-500"}),U.jsx("span",{children:"RESET CAM"})]})]}),U.jsxs("div",{className:"absolute bottom-4 left-4 p-3 rounded-xl bg-slate-900/85 text-white/90 backdrop-blur-md shadow-lg text-[10px] font-mono border border-slate-800/80 max-w-[240px] pointer-events-none space-y-1.5",children:[U.jsxs("div",{className:"flex items-center gap-1.5 font-bold uppercase tracking-wider text-blue-400",children:[U.jsx("div",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-ping"}),U.jsx("span",{children:"3D Viewport Controls"})]}),U.jsxs("p",{className:"text-slate-300",children:["• drag mouse to ",U.jsx("span",{className:"text-white font-medium",children:"Orbit"})]}),U.jsxs("p",{className:"text-slate-300",children:["• scroll wheel to ",U.jsx("span",{className:"text-white font-medium",children:"Zoom"})]}),U.jsxs("p",{className:"text-slate-300",children:["• right-click drag to ",U.jsx("span",{className:"text-white font-medium",children:"Pan"})]}),U.jsxs("p",{className:"text-slate-300",children:["• click model to ",U.jsx("span",{className:"text-white font-medium",children:"Select"})]}),s&&U.jsxs("div",{className:"pt-1.5 mt-1 border-t border-slate-800 text-cyan-400 flex items-center gap-1",children:[U.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400"}),U.jsx("span",{children:"ELEMENT SELECTED"})]})]})]})},rw=({activePreset:r,onSetPreset:e})=>{const i=[{id:"day",name:"Midday Sunlight",icon:mb,description:"High overhead light casts razor-sharp shadows with pastel blue scatter.",colorClass:"text-amber-500 bg-amber-500/10 border-amber-500/20",activeClass:"bg-amber-600 text-white border-amber-400 shadow-amber-500/10"},{id:"night",name:"Cyberpunk Night",icon:ib,description:"Low midnight skylight triggers building window grids and lamppost neon emissions.",colorClass:"text-blue-400 bg-blue-400/10 border-blue-400/20",activeClass:"bg-blue-600 text-white border-blue-400 shadow-blue-500/10"}];return U.jsxs("div",{className:"p-4 bg-slate-900 border-b border-slate-800 text-slate-100 flex flex-col gap-3 font-mono",children:[U.jsxs("div",{className:"flex items-center justify-between",children:[U.jsxs("h4",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2",children:[U.jsx(tp,{className:"w-3.5 h-3.5 text-blue-400"}),U.jsx("span",{children:"Atmosphere Engine"})]}),U.jsx("span",{className:"text-[10px] bg-slate-800 text-slate-300 font-bold px-2 py-0.5 rounded border border-slate-700 uppercase",children:"Dynamic Lighting"})]}),U.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2.5",children:i.map(s=>{const l=s.icon,c=r===s.id;return U.jsxs("button",{onClick:()=>e(s.id),className:`p-3 rounded-xl border text-left transition-all ${c?s.activeClass+" scale-102 ring-1 ring-white/10 shadow-lg":"bg-slate-950 border-slate-850 text-slate-400 hover:bg-slate-850 hover:text-slate-200"}`,children:[U.jsxs("div",{className:"flex items-center gap-2",children:[U.jsx("div",{className:`p-1.5 rounded-lg border ${c?"bg-white/10 border-white/20 text-white":s.colorClass}`,children:U.jsx(l,{className:"w-4 h-4 shrink-0"})}),U.jsxs("div",{className:"flex flex-col min-w-0",children:[U.jsx("span",{className:`text-[11px] font-bold ${c?"text-white":"text-slate-300"}`,children:s.name}),U.jsxs("span",{className:"text-[8.5px] text-slate-500 truncate max-w-[150px]",children:[s.id.toUpperCase()," PRESET"]})]})]}),U.jsx("p",{className:`mt-1.5 text-[10px] leading-relaxed transition-colors ${c?"text-white/80":"text-slate-500"}`,children:s.description})]},s.id)})})]})};function ow(){const[r,e]=nt.useState("landing"),[i,s]=nt.useState("city"),[l,c]=nt.useState([]),[d,h]=nt.useState(0),[m,p]=nt.useState("day"),[v,S]=nt.useState(30),[g,E]=nt.useState("place"),[w,P]=nt.useState(null),[b,y]=nt.useState(0),[C,B]=nt.useState(10),[I,W]=nt.useState(null),[F,k]=nt.useState("idle"),[_,M]=nt.useState(0),[R,T]=nt.useState(0),[D,H]=nt.useState(null),[X,j]=nt.useState(!1),[N,G]=nt.useState("2d"),Y=i==="city"?Hr:Vr;nt.useEffect(()=>{ae()},[]);const ae=()=>{try{const Ie=localStorage.getItem("gridcraft_blueprint_city"),$e=localStorage.getItem("gridcraft_blueprint_floor");if(Ie){const Ye=JSON.parse(Ie);M(Array.isArray(Ye)?Ye.length:0)}else M(0);if($e){const Ye=JSON.parse($e);T(Array.isArray(Ye)?Ye.length:0)}else T(0)}catch(Ie){console.error("Failed reading template blueprint caches",Ie)}},de=(Ie,$e="info")=>{H({message:Ie,type:$e});const Ye=setTimeout(()=>{H(null)},3500);return()=>clearTimeout(Ye)};nt.useEffect(()=>{if(r!=="workspace")return;const Ie=$e=>{var We,bt;if(((We=document.activeElement)==null?void 0:We.tagName)==="INPUT"||((bt=document.activeElement)==null?void 0:bt.tagName)==="TEXTAREA")return;const Ye=$e.key.toLowerCase();Ye==="r"?(y(yt=>(yt+Math.PI/2)%(Math.PI*2)),de("Placement rotation dialed clockwise.")):Ye==="1"?(E("inspect"),de("Pointer inspection mode active.")):Ye==="2"?(E("place"),de("Construction item placement active.")):Ye==="3"?(E("rotate"),de("Rotate cells tool active.")):Ye==="4"?(E("eraser"),de("Eraser/Demolish tool active.")):Ye==="c"?Re():Ye==="s"?($e.preventDefault(),ke()):Ye==="escape"?(W(null),de("Focus selection dismissed.")):Ye==="f"&&(h(yt=>(yt+1)%3),de("Swapped to Vertical level layer."))};return window.addEventListener("keydown",Ie),()=>window.removeEventListener("keydown",Ie)},[r,i,l,b]);const V=(Ie,$e)=>{if(s(Ie),e("workspace"),h(0),p("day"),y(0),W(null),E("place"),P((Ie==="city"?Hr:Vr)[0]||null),$e)try{const We=localStorage.getItem(`gridcraft_blueprint_${Ie}`);if(We){const bt=JSON.parse(We);if(Array.isArray(bt)){c(bt),de(`Loaded ${bt.length} elements from recent blueprint backup.`,"success");return}}}catch(We){console.error("Failed restoring localStorage blueprints",We)}c([]),de("Starting fresh blueprint sandbox canvas.")},J=Ie=>{localStorage.removeItem(`gridcraft_blueprint_${Ie}`),ae(),de("Sandbox localStorage blueprint successfully purged.")},xe=Ie=>{const $e=`entity-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,Ye=Y.find(bt=>bt.id===Ie.type),We={id:$e,...Ie,storeys:(Ye==null?void 0:Ye.category)==="Structures"?Ie.storeys!==void 0?Ie.storeys:C:void 0};c(bt=>[...bt,We]),de(`Placed ${Ye==null?void 0:Ye.name} on grid.`,"success")},ve=Ie=>{const $e=l.find(We=>We.id===Ie),Ye=Y.find(We=>We.id===($e==null?void 0:$e.type));c(We=>We.filter(bt=>bt.id!==Ie)),I===Ie&&W(null),de(`Demolished ${(Ye==null?void 0:Ye.name)||"placed unit"} from blueprints.`)},Te=(Ie,$e)=>{c(Ye=>Ye.map(We=>We.id===Ie?{...We,rotation:$e}:We)),de("Rotated placed cell components.")},se=(Ie,$e)=>{c(Ye=>Ye.map(We=>We.id===Ie?{...We,storeys:$e}:We))},Me=()=>{y(Ie=>(Ie+Math.PI/2)%(Math.PI*2))},Re=()=>{const Ie=i==="city"?Hr:Vr,$e=[],Ye=new Set,We=Math.floor(Math.random()*7)+12;for(let bt=0;bt<We;bt++){const yt=Ie[Math.floor(Math.random()*Ie.length)],pn=Math.floor(Math.random()*3);for(let Q=0;Q<60;Q++){const Jt=Math.floor(Math.random()*(v-yt.gridWidth+1)),mt=Math.floor(Math.random()*(v-yt.gridLength+1));let Ut=!1;for(let Ce=0;Ce<yt.gridWidth;Ce++){for(let Gt=0;Gt<yt.gridLength;Gt++)if(Ye.has(`${pn}-${Jt+Ce}-${mt+Gt}`)){Ut=!0;break}if(Ut)break}if(!Ut){for(let z=0;z<yt.gridWidth;z++)for(let A=0;A<yt.gridLength;A++)Ye.add(`${pn}-${Jt+z}-${mt+A}`);const Ce=[0,Math.PI/2,Math.PI,Math.PI*1.5],Gt=Ce[Math.floor(Math.random()*Ce.length)];$e.push({id:`rand-${Date.now()}-${Math.random().toString(36).substr(2,5)}`,type:yt.id,gridX:Jt,gridZ:mt,floorLevel:pn,rotation:Gt});break}}}c($e),W(null),de(`Chaos Spawner instanced ${$e.length} procedural elements.`,"success")},ke=()=>{try{localStorage.setItem(`gridcraft_blueprint_${i}`,JSON.stringify(l)),k("saved"),de("Blueprint saved successfully to local browser.","success"),setTimeout(()=>{k("idle")},2e3),ae()}catch(Ie){console.error("Failed writing blueprint state",Ie),de("Failed to write local database configurations.","info")}},rt=()=>{e("landing"),ae()},et=I&&l.find(Ie=>Ie.id===I)||null,Bt=et&&Y.find(Ie=>Ie.id===et.type)||null;return r==="landing"?U.jsx(vb,{onSelectMode:V,savedCityCount:_,savedFloorCount:R,onClearSaved:J}):U.jsxs("div",{className:"w-full min-h-screen bg-slate-950 flex flex-col overflow-hidden text-slate-100 font-sans antialiased",children:[U.jsx(yb,{mode:i,environment:m,selectedFloorLevel:d,onSelectFloorLevel:h,onRandomize:Re,onSave:ke,onBackToLanding:rt,saveStatus:F,gridSize:v,onSetGridSize:S}),U.jsxs("div",{className:"flex-1 flex overflow-hidden relative",children:[U.jsx("aside",{className:"hidden lg:block w-[340px] shrink-0 border-r border-slate-850 h-full overflow-hidden",children:U.jsx(g_,{mode:i,activeTool:g,onChangeActiveTool:E,selectedItemDef:w,onSelectItemDef:P,placedRotation:b,onRotatePlacedItem:Me,selectedEntity:et,selectedEntityDef:Bt,onClearSelection:()=>W(null),onRemoveEntity:ve,onUpdateEntityStoreys:se,placingStoreys:C,onSetPlacingStoreys:B})}),X&&U.jsxs("div",{className:"lg:hidden fixed inset-0 bg-slate-950/80 z-40 flex backdrop-blur-sm",children:[U.jsxs("div",{className:"w-[300px] h-full bg-slate-900 border-r border-slate-800 animate-slide-in relative flex flex-col",children:[U.jsx("button",{onClick:()=>j(!1),className:"absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-50 p-1 bg-slate-950/40 rounded-xl",children:U.jsx(Nx,{className:"w-5 h-5"})}),U.jsx("div",{className:"flex-1 overflow-hidden pt-10",children:U.jsx(g_,{mode:i,activeTool:g,onChangeActiveTool:E,selectedItemDef:w,onSelectItemDef:Ie=>{P(Ie),j(!1)},placedRotation:b,onRotatePlacedItem:Me,selectedEntity:et,selectedEntityDef:Bt,onClearSelection:()=>W(null),onRemoveEntity:ve,onUpdateEntityStoreys:se,placingStoreys:C,onSetPlacingStoreys:B})})]}),U.jsx("div",{className:"flex-1",onClick:()=>j(!1)})]}),U.jsxs("main",{className:"flex-1 flex flex-col overflow-hidden bg-slate-900",children:[U.jsx(rw,{activePreset:m,onSetPreset:p}),U.jsxs("div",{className:"flex-1 hidden md:grid grid-cols-2 overflow-hidden bg-slate-900",children:[U.jsxs("div",{className:"h-full border-r border-slate-850 overflow-hidden flex flex-col relative select-none",children:[U.jsxs("div",{className:"p-3 bg-slate-950/60 text-slate-400 font-mono text-[10.5px] uppercase border-b border-slate-850 flex items-center justify-between",children:[U.jsx("span",{children:"2D Interactive Plan view"}),U.jsx("span",{className:"text-cyan-400 font-bold",children:"GRID SNAPPING ACTIVE"})]}),U.jsx("div",{className:"flex-1 overflow-hidden",children:U.jsx(__,{entities:l,mode:i,environment:m,selectedEntityId:I,onSelectEntity:W,selectedFloorLevel:d,activeTool:g,selectedItemDef:w,placedRotation:b,onAddEntity:xe,onRemoveEntity:ve,onUpdateEntityRotation:Te,gridSize:v})})]}),U.jsxs("div",{className:"h-full overflow-hidden flex flex-col relative select-none",children:[U.jsxs("div",{className:"p-3 bg-slate-950/60 text-slate-400 font-mono text-[10.5px] uppercase border-b border-slate-850 flex items-center justify-between",children:[U.jsx("span",{children:"Real-time high-fidelity 3D render"}),U.jsx("span",{className:"text-indigo-400 font-bold",children:"WEBGL ENABLED"})]}),U.jsx("div",{className:"flex-1 overflow-hidden",children:U.jsx(Ax,{entities:l,mode:i,environment:m,selectedEntityId:I,selectedFloorLevel:d,onSelectEntity:W,gridSize:v})})]})]}),U.jsxs("div",{className:"flex-1 md:hidden flex flex-col overflow-hidden relative",children:[U.jsxs("div",{className:"flex bg-slate-950 border-b border-slate-850 py-1 px-2 gap-1 justify-around",children:[U.jsx("button",{onClick:()=>G("2d"),className:`flex-1 py-2 font-mono text-xs font-bold text-center rounded-lg transition-colors ${N==="2d"?"bg-blue-600 text-white":"text-slate-400 hover:bg-slate-900"}`,children:"2D COMPENSATOR"}),U.jsx("button",{onClick:()=>G("3d"),className:`flex-1 py-2 font-mono text-xs font-bold text-center rounded-lg transition-colors ${N==="3d"?"bg-indigo-600 text-white":"text-slate-400 hover:bg-slate-900"}`,children:"3D RENDER CELL"})]}),U.jsx("div",{className:"flex-1 overflow-hidden relative",children:N==="2d"?U.jsx(__,{entities:l,mode:i,environment:m,selectedEntityId:I,onSelectEntity:W,selectedFloorLevel:d,activeTool:g,selectedItemDef:w,placedRotation:b,onAddEntity:xe,onRemoveEntity:ve,onUpdateEntityRotation:Te,gridSize:v}):U.jsx(Ax,{entities:l,mode:i,environment:m,selectedEntityId:I,selectedFloorLevel:d,onSelectEntity:W,gridSize:v})})]})]})]}),U.jsx("button",{onClick:()=>j(!0),className:"lg:hidden fixed bottom-6 right-6 p-4 rounded-full bg-blue-600 text-white shadow-2xl shadow-blue-500/50 hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all z-30 border border-blue-400 flex items-center justify-center cursor-pointer",title:"Open Tool Drawer",children:U.jsx($S,{className:"w-5 h-5 text-white"})}),D&&U.jsxs("div",{className:"fixed bottom-6 left-1/2 -translate-x-1/2 px-4 py-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-100 flex items-center gap-2 shadow-2xl z-50 backdrop-blur-md anim-fade-in text-xs font-mono",children:[U.jsx("div",{className:`w-2 h-2 rounded-full ${D.type==="success"?"bg-emerald-400 animate-ping":"bg-blue-400"}`}),U.jsx("span",{className:"font-semibold text-slate-200",children:D.message})]})]})}ES.createRoot(document.getElementById("root")).render(U.jsx(nt.StrictMode,{children:U.jsx(ow,{})}));
