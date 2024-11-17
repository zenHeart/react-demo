var jm=Object.defineProperty;var Em=(e,n,t)=>n in e?jm(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var V=(e,n,t)=>Em(e,typeof n!="symbol"?n+"":n,t);function Rm(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Tm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function as(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ec={exports:{}},ll={},nc={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zr=Symbol.for("react.element"),Am=Symbol.for("react.portal"),Nm=Symbol.for("react.fragment"),Pm=Symbol.for("react.strict_mode"),Lm=Symbol.for("react.profiler"),Dm=Symbol.for("react.provider"),Om=Symbol.for("react.context"),Im=Symbol.for("react.forward_ref"),Mm=Symbol.for("react.suspense"),Fm=Symbol.for("react.memo"),bm=Symbol.for("react.lazy"),xu=Symbol.iterator;function zm(e){return e===null||typeof e!="object"?null:(e=xu&&e[xu]||e["@@iterator"],typeof e=="function"?e:null)}var tc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rc=Object.assign,oc={};function Ht(e,n,t){this.props=e,this.context=n,this.refs=oc,this.updater=t||tc}Ht.prototype.isReactComponent={};Ht.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Ht.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function lc(){}lc.prototype=Ht.prototype;function cs(e,n,t){this.props=e,this.context=n,this.refs=oc,this.updater=t||tc}var ds=cs.prototype=new lc;ds.constructor=cs;rc(ds,Ht.prototype);ds.isPureReactComponent=!0;var yu=Array.isArray,ic=Object.prototype.hasOwnProperty,fs={current:null},sc={key:!0,ref:!0,__self:!0,__source:!0};function uc(e,n,t){var r,o={},l=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(l=""+n.key),n)ic.call(n,r)&&!sc.hasOwnProperty(r)&&(o[r]=n[r]);var s=arguments.length-2;if(s===1)o.children=t;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:zr,type:e,key:l,ref:i,props:o,_owner:fs.current}}function $m(e,n){return{$$typeof:zr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ps(e){return typeof e=="object"&&e!==null&&e.$$typeof===zr}function Um(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Cu=/\/+/g;function Rl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Um(""+e.key):n.toString(36)}function fo(e,n,t,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case zr:case Am:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Rl(i,0):r,yu(o)?(t="",e!=null&&(t=e.replace(Cu,"$&/")+"/"),fo(o,n,t,"",function(c){return c})):o!=null&&(ps(o)&&(o=$m(o,t+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Cu,"$&/")+"/")+e)),n.push(o)),1;if(i=0,r=r===""?".":r+":",yu(e))for(var s=0;s<e.length;s++){l=e[s];var a=r+Rl(l,s);i+=fo(l,n,t,a,o)}else if(a=zm(e),typeof a=="function")for(e=a.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+Rl(l,s++),i+=fo(l,n,t,a,o);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function Kr(e,n,t){if(e==null)return e;var r=[],o=0;return fo(e,r,"","",function(l){return n.call(t,l,o++)}),r}function Bm(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},po={transition:null},Hm={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:po,ReactCurrentOwner:fs};function ac(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:Kr,forEach:function(e,n,t){Kr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Kr(e,function(){n++}),n},toArray:function(e){return Kr(e,function(n){return n})||[]},only:function(e){if(!ps(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=Ht;F.Fragment=Nm;F.Profiler=Lm;F.PureComponent=cs;F.StrictMode=Pm;F.Suspense=Mm;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hm;F.act=ac;F.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=rc({},e.props),o=e.key,l=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,i=fs.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in n)ic.call(n,a)&&!sc.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&s!==void 0?s[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:zr,type:e.type,key:o,ref:l,props:r,_owner:i}};F.createContext=function(e){return e={$$typeof:Om,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Dm,_context:e},e.Consumer=e};F.createElement=uc;F.createFactory=function(e){var n=uc.bind(null,e);return n.type=e,n};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Im,render:e}};F.isValidElement=ps;F.lazy=function(e){return{$$typeof:bm,_payload:{_status:-1,_result:e},_init:Bm}};F.memo=function(e,n){return{$$typeof:Fm,type:e,compare:n===void 0?null:n}};F.startTransition=function(e){var n=po.transition;po.transition={};try{e()}finally{po.transition=n}};F.unstable_act=ac;F.useCallback=function(e,n){return Ce.current.useCallback(e,n)};F.useContext=function(e){return Ce.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};F.useEffect=function(e,n){return Ce.current.useEffect(e,n)};F.useId=function(){return Ce.current.useId()};F.useImperativeHandle=function(e,n,t){return Ce.current.useImperativeHandle(e,n,t)};F.useInsertionEffect=function(e,n){return Ce.current.useInsertionEffect(e,n)};F.useLayoutEffect=function(e,n){return Ce.current.useLayoutEffect(e,n)};F.useMemo=function(e,n){return Ce.current.useMemo(e,n)};F.useReducer=function(e,n,t){return Ce.current.useReducer(e,n,t)};F.useRef=function(e){return Ce.current.useRef(e)};F.useState=function(e){return Ce.current.useState(e)};F.useSyncExternalStore=function(e,n,t){return Ce.current.useSyncExternalStore(e,n,t)};F.useTransition=function(){return Ce.current.useTransition()};F.version="18.3.1";nc.exports=F;var w=nc.exports;const O=as(w),Wm=Rm({__proto__:null,default:O},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm=w,Ym=Symbol.for("react.element"),Km=Symbol.for("react.fragment"),Qm=Object.prototype.hasOwnProperty,Gm=Vm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xm={key:!0,ref:!0,__self:!0,__source:!0};function cc(e,n,t){var r,o={},l=null,i=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)Qm.call(n,r)&&!Xm.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:Ym,type:e,key:l,ref:i,props:o,_owner:Gm.current}}ll.Fragment=Km;ll.jsx=cc;ll.jsxs=cc;ec.exports=ll;var u=ec.exports,dc={exports:{}},De={},fc={exports:{}},pc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(N,I){var M=N.length;N.push(I);e:for(;0<M;){var Z=M-1>>>1,le=N[Z];if(0<o(le,I))N[Z]=I,N[M]=le,M=Z;else break e}}function t(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var I=N[0],M=N.pop();if(M!==I){N[0]=M;e:for(var Z=0,le=N.length,Vr=le>>>1;Z<Vr;){var Vn=2*(Z+1)-1,El=N[Vn],Yn=Vn+1,Yr=N[Yn];if(0>o(El,M))Yn<le&&0>o(Yr,El)?(N[Z]=Yr,N[Yn]=M,Z=Yn):(N[Z]=El,N[Vn]=M,Z=Vn);else if(Yn<le&&0>o(Yr,M))N[Z]=Yr,N[Yn]=M,Z=Yn;else break e}}return I}function o(N,I){var M=N.sortIndex-I.sortIndex;return M!==0?M:N.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],c=[],p=1,d=null,h=3,x=!1,C=!1,S=!1,j=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(N){for(var I=t(c);I!==null;){if(I.callback===null)r(c);else if(I.startTime<=N)r(c),I.sortIndex=I.expirationTime,n(a,I);else break;I=t(c)}}function k(N){if(S=!1,g(N),!C)if(t(a)!==null)C=!0,Te(A);else{var I=t(c);I!==null&&Ue(k,I.startTime-N)}}function A(N,I){C=!1,S&&(S=!1,m(y),y=-1),x=!0;var M=h;try{for(g(I),d=t(a);d!==null&&(!(d.expirationTime>I)||N&&!L());){var Z=d.callback;if(typeof Z=="function"){d.callback=null,h=d.priorityLevel;var le=Z(d.expirationTime<=I);I=e.unstable_now(),typeof le=="function"?d.callback=le:d===t(a)&&r(a),g(I)}else r(a);d=t(a)}if(d!==null)var Vr=!0;else{var Vn=t(c);Vn!==null&&Ue(k,Vn.startTime-I),Vr=!1}return Vr}finally{d=null,h=M,x=!1}}var T=!1,v=null,y=-1,_=5,E=-1;function L(){return!(e.unstable_now()-E<_)}function b(){if(v!==null){var N=e.unstable_now();E=N;var I=!0;try{I=v(!0,N)}finally{I?$():(T=!1,v=null)}}else T=!1}var $;if(typeof f=="function")$=function(){f(b)};else if(typeof MessageChannel<"u"){var Je=new MessageChannel,vn=Je.port2;Je.port1.onmessage=b,$=function(){vn.postMessage(null)}}else $=function(){j(b,0)};function Te(N){v=N,T||(T=!0,$())}function Ue(N,I){y=j(function(){N(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){C||x||(C=!0,Te(A))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var I=3;break;default:I=h}var M=h;h=I;try{return N()}finally{h=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,I){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var M=h;h=N;try{return I()}finally{h=M}},e.unstable_scheduleCallback=function(N,I,M){var Z=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?Z+M:Z):M=Z,N){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=M+le,N={id:p++,callback:I,priorityLevel:N,startTime:M,expirationTime:le,sortIndex:-1},M>Z?(N.sortIndex=M,n(c,N),t(a)===null&&N===t(c)&&(S?(m(y),y=-1):S=!0,Ue(k,M-Z))):(N.sortIndex=le,n(a,N),C||x||(C=!0,Te(A))),N},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(N){var I=h;return function(){var M=h;h=I;try{return N.apply(this,arguments)}finally{h=M}}}})(pc);fc.exports=pc;var Jm=fc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zm=w,Le=Jm;function R(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hc=new Set,gr={};function st(e,n){Ot(e,n),Ot(e+"Capture",n)}function Ot(e,n){for(gr[e]=n,e=0;e<n.length;e++)hc.add(n[e])}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ii=Object.prototype.hasOwnProperty,qm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Su={},ku={};function e0(e){return ii.call(ku,e)?!0:ii.call(Su,e)?!1:qm.test(e)?ku[e]=!0:(Su[e]=!0,!1)}function n0(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function t0(e,n,t,r){if(n===null||typeof n>"u"||n0(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Se(e,n,t,r,o,l,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=i}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new Se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];de[n]=new Se(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new Se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new Se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new Se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new Se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new Se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new Se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new Se(e,5,!1,e.toLowerCase(),null,!1,!1)});var hs=/[\-:]([a-z])/g;function ms(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(hs,ms);de[n]=new Se(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(hs,ms);de[n]=new Se(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(hs,ms);de[n]=new Se(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new Se(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new Se(e,1,!1,e.toLowerCase(),null,!0,!0)});function gs(e,n,t,r){var o=de.hasOwnProperty(n)?de[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(t0(n,t,o,r)&&(t=null),r||o===null?e0(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var mn=Zm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qr=Symbol.for("react.element"),pt=Symbol.for("react.portal"),ht=Symbol.for("react.fragment"),vs=Symbol.for("react.strict_mode"),si=Symbol.for("react.profiler"),mc=Symbol.for("react.provider"),gc=Symbol.for("react.context"),xs=Symbol.for("react.forward_ref"),ui=Symbol.for("react.suspense"),ai=Symbol.for("react.suspense_list"),ys=Symbol.for("react.memo"),yn=Symbol.for("react.lazy"),vc=Symbol.for("react.offscreen"),wu=Symbol.iterator;function Kt(e){return e===null||typeof e!="object"?null:(e=wu&&e[wu]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Tl;function nr(e){if(Tl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Tl=n&&n[1]||""}return`
`+Tl+e}var Al=!1;function Nl(e,n){if(!e||Al)return"";Al=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,s=l.length-1;1<=i&&0<=s&&o[i]!==l[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==l[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==l[s]){var a=`
`+o[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{Al=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?nr(e):""}function r0(e){switch(e.tag){case 5:return nr(e.type);case 16:return nr("Lazy");case 13:return nr("Suspense");case 19:return nr("SuspenseList");case 0:case 2:case 15:return e=Nl(e.type,!1),e;case 11:return e=Nl(e.type.render,!1),e;case 1:return e=Nl(e.type,!0),e;default:return""}}function ci(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ht:return"Fragment";case pt:return"Portal";case si:return"Profiler";case vs:return"StrictMode";case ui:return"Suspense";case ai:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case gc:return(e.displayName||"Context")+".Consumer";case mc:return(e._context.displayName||"Context")+".Provider";case xs:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ys:return n=e.displayName||null,n!==null?n:ci(e.type)||"Memo";case yn:n=e._payload,e=e._init;try{return ci(e(n))}catch{}}return null}function o0(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ci(n);case 8:return n===vs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Fn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function l0(e){var n=xc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Gr(e){e._valueTracker||(e._valueTracker=l0(e))}function yc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=xc(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function _o(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function di(e,n){var t=n.checked;return X({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function _u(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Fn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Cc(e,n){n=n.checked,n!=null&&gs(e,"checked",n,!1)}function fi(e,n){Cc(e,n);var t=Fn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?pi(e,n.type,t):n.hasOwnProperty("defaultValue")&&pi(e,n.type,Fn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ju(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function pi(e,n,t){(n!=="number"||_o(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var tr=Array.isArray;function Tt(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Fn(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function hi(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(R(91));return X({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Eu(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(R(92));if(tr(t)){if(1<t.length)throw Error(R(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Fn(t)}}function Sc(e,n){var t=Fn(n.value),r=Fn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ru(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function kc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mi(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?kc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xr,wc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Xr=Xr||document.createElement("div"),Xr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function vr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},i0=["Webkit","ms","Moz","O"];Object.keys(sr).forEach(function(e){i0.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),sr[n]=sr[e]})});function _c(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||sr.hasOwnProperty(e)&&sr[e]?(""+n).trim():n+"px"}function jc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=_c(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var s0=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gi(e,n){if(n){if(s0[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(R(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(R(61))}if(n.style!=null&&typeof n.style!="object")throw Error(R(62))}}function vi(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xi=null;function Cs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yi=null,At=null,Nt=null;function Tu(e){if(e=Br(e)){if(typeof yi!="function")throw Error(R(280));var n=e.stateNode;n&&(n=cl(n),yi(e.stateNode,e.type,n))}}function Ec(e){At?Nt?Nt.push(e):Nt=[e]:At=e}function Rc(){if(At){var e=At,n=Nt;if(Nt=At=null,Tu(e),n)for(e=0;e<n.length;e++)Tu(n[e])}}function Tc(e,n){return e(n)}function Ac(){}var Pl=!1;function Nc(e,n,t){if(Pl)return e(n,t);Pl=!0;try{return Tc(e,n,t)}finally{Pl=!1,(At!==null||Nt!==null)&&(Ac(),Rc())}}function xr(e,n){var t=e.stateNode;if(t===null)return null;var r=cl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(R(231,n,typeof t));return t}var Ci=!1;if(cn)try{var Qt={};Object.defineProperty(Qt,"passive",{get:function(){Ci=!0}}),window.addEventListener("test",Qt,Qt),window.removeEventListener("test",Qt,Qt)}catch{Ci=!1}function u0(e,n,t,r,o,l,i,s,a){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(p){this.onError(p)}}var ur=!1,jo=null,Eo=!1,Si=null,a0={onError:function(e){ur=!0,jo=e}};function c0(e,n,t,r,o,l,i,s,a){ur=!1,jo=null,u0.apply(a0,arguments)}function d0(e,n,t,r,o,l,i,s,a){if(c0.apply(this,arguments),ur){if(ur){var c=jo;ur=!1,jo=null}else throw Error(R(198));Eo||(Eo=!0,Si=c)}}function ut(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Pc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Au(e){if(ut(e)!==e)throw Error(R(188))}function f0(e){var n=e.alternate;if(!n){if(n=ut(e),n===null)throw Error(R(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===t)return Au(o),e;if(l===r)return Au(o),n;l=l.sibling}throw Error(R(188))}if(t.return!==r.return)t=o,r=l;else{for(var i=!1,s=o.child;s;){if(s===t){i=!0,t=o,r=l;break}if(s===r){i=!0,r=o,t=l;break}s=s.sibling}if(!i){for(s=l.child;s;){if(s===t){i=!0,t=l,r=o;break}if(s===r){i=!0,r=l,t=o;break}s=s.sibling}if(!i)throw Error(R(189))}}if(t.alternate!==r)throw Error(R(190))}if(t.tag!==3)throw Error(R(188));return t.stateNode.current===t?e:n}function Lc(e){return e=f0(e),e!==null?Dc(e):null}function Dc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Dc(e);if(n!==null)return n;e=e.sibling}return null}var Oc=Le.unstable_scheduleCallback,Nu=Le.unstable_cancelCallback,p0=Le.unstable_shouldYield,h0=Le.unstable_requestPaint,q=Le.unstable_now,m0=Le.unstable_getCurrentPriorityLevel,Ss=Le.unstable_ImmediatePriority,Ic=Le.unstable_UserBlockingPriority,Ro=Le.unstable_NormalPriority,g0=Le.unstable_LowPriority,Mc=Le.unstable_IdlePriority,il=null,nn=null;function v0(e){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(il,e,void 0,(e.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:C0,x0=Math.log,y0=Math.LN2;function C0(e){return e>>>=0,e===0?32:31-(x0(e)/y0|0)|0}var Jr=64,Zr=4194304;function rr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function To(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=t&268435455;if(i!==0){var s=i&~o;s!==0?r=rr(s):(l&=i,l!==0&&(r=rr(l)))}else i=t&~o,i!==0?r=rr(i):l!==0&&(r=rr(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,l=n&-n,o>=l||o===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Qe(n),o=1<<t,r|=e[t],n&=~o;return r}function S0(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k0(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Qe(l),s=1<<i,a=o[i];a===-1?(!(s&t)||s&r)&&(o[i]=S0(s,n)):a<=n&&(e.expiredLanes|=s),l&=~s}}function ki(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fc(){var e=Jr;return Jr<<=1,!(Jr&4194240)&&(Jr=64),e}function Ll(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function $r(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Qe(n),e[n]=t}function w0(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-Qe(t),l=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~l}}function ks(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Qe(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var U=0;function bc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var zc,ws,$c,Uc,Bc,wi=!1,qr=[],Rn=null,Tn=null,An=null,yr=new Map,Cr=new Map,Sn=[],_0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pu(e,n){switch(e){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":An=null;break;case"pointerover":case"pointerout":yr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cr.delete(n.pointerId)}}function Gt(e,n,t,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},n!==null&&(n=Br(n),n!==null&&ws(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function j0(e,n,t,r,o){switch(n){case"focusin":return Rn=Gt(Rn,e,n,t,r,o),!0;case"dragenter":return Tn=Gt(Tn,e,n,t,r,o),!0;case"mouseover":return An=Gt(An,e,n,t,r,o),!0;case"pointerover":var l=o.pointerId;return yr.set(l,Gt(yr.get(l)||null,e,n,t,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Cr.set(l,Gt(Cr.get(l)||null,e,n,t,r,o)),!0}return!1}function Hc(e){var n=Gn(e.target);if(n!==null){var t=ut(n);if(t!==null){if(n=t.tag,n===13){if(n=Pc(t),n!==null){e.blockedOn=n,Bc(e.priority,function(){$c(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ho(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=_i(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);xi=r,t.target.dispatchEvent(r),xi=null}else return n=Br(t),n!==null&&ws(n),e.blockedOn=t,!1;n.shift()}return!0}function Lu(e,n,t){ho(e)&&t.delete(n)}function E0(){wi=!1,Rn!==null&&ho(Rn)&&(Rn=null),Tn!==null&&ho(Tn)&&(Tn=null),An!==null&&ho(An)&&(An=null),yr.forEach(Lu),Cr.forEach(Lu)}function Xt(e,n){e.blockedOn===n&&(e.blockedOn=null,wi||(wi=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,E0)))}function Sr(e){function n(o){return Xt(o,e)}if(0<qr.length){Xt(qr[0],e);for(var t=1;t<qr.length;t++){var r=qr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Rn!==null&&Xt(Rn,e),Tn!==null&&Xt(Tn,e),An!==null&&Xt(An,e),yr.forEach(n),Cr.forEach(n),t=0;t<Sn.length;t++)r=Sn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Sn.length&&(t=Sn[0],t.blockedOn===null);)Hc(t),t.blockedOn===null&&Sn.shift()}var Pt=mn.ReactCurrentBatchConfig,Ao=!0;function R0(e,n,t,r){var o=U,l=Pt.transition;Pt.transition=null;try{U=1,_s(e,n,t,r)}finally{U=o,Pt.transition=l}}function T0(e,n,t,r){var o=U,l=Pt.transition;Pt.transition=null;try{U=4,_s(e,n,t,r)}finally{U=o,Pt.transition=l}}function _s(e,n,t,r){if(Ao){var o=_i(e,n,t,r);if(o===null)Bl(e,n,r,No,t),Pu(e,r);else if(j0(o,e,n,t,r))r.stopPropagation();else if(Pu(e,r),n&4&&-1<_0.indexOf(e)){for(;o!==null;){var l=Br(o);if(l!==null&&zc(l),l=_i(e,n,t,r),l===null&&Bl(e,n,r,No,t),l===o)break;o=l}o!==null&&r.stopPropagation()}else Bl(e,n,r,null,t)}}var No=null;function _i(e,n,t,r){if(No=null,e=Cs(r),e=Gn(e),e!==null)if(n=ut(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Pc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return No=e,null}function Wc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(m0()){case Ss:return 1;case Ic:return 4;case Ro:case g0:return 16;case Mc:return 536870912;default:return 16}default:return 16}}var wn=null,js=null,mo=null;function Vc(){if(mo)return mo;var e,n=js,t=n.length,r,o="value"in wn?wn.value:wn.textContent,l=o.length;for(e=0;e<t&&n[e]===o[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===o[l-r];r++);return mo=o.slice(e,1<r?1-r:void 0)}function go(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function eo(){return!0}function Du(){return!1}function Oe(e){function n(t,r,o,l,i){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?eo:Du,this.isPropagationStopped=Du,this}return X(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=eo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=eo)},persist:function(){},isPersistent:eo}),n}var Wt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Es=Oe(Wt),Ur=X({},Wt,{view:0,detail:0}),A0=Oe(Ur),Dl,Ol,Jt,sl=X({},Ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jt&&(Jt&&e.type==="mousemove"?(Dl=e.screenX-Jt.screenX,Ol=e.screenY-Jt.screenY):Ol=Dl=0,Jt=e),Dl)},movementY:function(e){return"movementY"in e?e.movementY:Ol}}),Ou=Oe(sl),N0=X({},sl,{dataTransfer:0}),P0=Oe(N0),L0=X({},Ur,{relatedTarget:0}),Il=Oe(L0),D0=X({},Wt,{animationName:0,elapsedTime:0,pseudoElement:0}),O0=Oe(D0),I0=X({},Wt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),M0=Oe(I0),F0=X({},Wt,{data:0}),Iu=Oe(F0),b0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function U0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=$0[e])?!!n[e]:!1}function Rs(){return U0}var B0=X({},Ur,{key:function(e){if(e.key){var n=b0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=go(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?z0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rs,charCode:function(e){return e.type==="keypress"?go(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?go(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),H0=Oe(B0),W0=X({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mu=Oe(W0),V0=X({},Ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rs}),Y0=Oe(V0),K0=X({},Wt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Q0=Oe(K0),G0=X({},sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),X0=Oe(G0),J0=[9,13,27,32],Ts=cn&&"CompositionEvent"in window,ar=null;cn&&"documentMode"in document&&(ar=document.documentMode);var Z0=cn&&"TextEvent"in window&&!ar,Yc=cn&&(!Ts||ar&&8<ar&&11>=ar),Fu=" ",bu=!1;function Kc(e,n){switch(e){case"keyup":return J0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mt=!1;function q0(e,n){switch(e){case"compositionend":return Qc(n);case"keypress":return n.which!==32?null:(bu=!0,Fu);case"textInput":return e=n.data,e===Fu&&bu?null:e;default:return null}}function eg(e,n){if(mt)return e==="compositionend"||!Ts&&Kc(e,n)?(e=Vc(),mo=js=wn=null,mt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Yc&&n.locale!=="ko"?null:n.data;default:return null}}var ng={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ng[e.type]:n==="textarea"}function Gc(e,n,t,r){Ec(r),n=Po(n,"onChange"),0<n.length&&(t=new Es("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var cr=null,kr=null;function tg(e){id(e,0)}function ul(e){var n=xt(e);if(yc(n))return e}function rg(e,n){if(e==="change")return n}var Xc=!1;if(cn){var Ml;if(cn){var Fl="oninput"in document;if(!Fl){var $u=document.createElement("div");$u.setAttribute("oninput","return;"),Fl=typeof $u.oninput=="function"}Ml=Fl}else Ml=!1;Xc=Ml&&(!document.documentMode||9<document.documentMode)}function Uu(){cr&&(cr.detachEvent("onpropertychange",Jc),kr=cr=null)}function Jc(e){if(e.propertyName==="value"&&ul(kr)){var n=[];Gc(n,kr,e,Cs(e)),Nc(tg,n)}}function og(e,n,t){e==="focusin"?(Uu(),cr=n,kr=t,cr.attachEvent("onpropertychange",Jc)):e==="focusout"&&Uu()}function lg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ul(kr)}function ig(e,n){if(e==="click")return ul(n)}function sg(e,n){if(e==="input"||e==="change")return ul(n)}function ug(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Xe=typeof Object.is=="function"?Object.is:ug;function wr(e,n){if(Xe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!ii.call(n,o)||!Xe(e[o],n[o]))return!1}return!0}function Bu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hu(e,n){var t=Bu(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Bu(t)}}function Zc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Zc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function qc(){for(var e=window,n=_o();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=_o(e.document)}return n}function As(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function ag(e){var n=qc(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Zc(t.ownerDocument.documentElement,t)){if(r!==null&&As(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=Hu(t,l);var i=Hu(t,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var cg=cn&&"documentMode"in document&&11>=document.documentMode,gt=null,ji=null,dr=null,Ei=!1;function Wu(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ei||gt==null||gt!==_o(r)||(r=gt,"selectionStart"in r&&As(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),dr&&wr(dr,r)||(dr=r,r=Po(ji,"onSelect"),0<r.length&&(n=new Es("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=gt)))}function no(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var vt={animationend:no("Animation","AnimationEnd"),animationiteration:no("Animation","AnimationIteration"),animationstart:no("Animation","AnimationStart"),transitionend:no("Transition","TransitionEnd")},bl={},ed={};cn&&(ed=document.createElement("div").style,"AnimationEvent"in window||(delete vt.animationend.animation,delete vt.animationiteration.animation,delete vt.animationstart.animation),"TransitionEvent"in window||delete vt.transitionend.transition);function al(e){if(bl[e])return bl[e];if(!vt[e])return e;var n=vt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in ed)return bl[e]=n[t];return e}var nd=al("animationend"),td=al("animationiteration"),rd=al("animationstart"),od=al("transitionend"),ld=new Map,Vu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $n(e,n){ld.set(e,n),st(n,[e])}for(var zl=0;zl<Vu.length;zl++){var $l=Vu[zl],dg=$l.toLowerCase(),fg=$l[0].toUpperCase()+$l.slice(1);$n(dg,"on"+fg)}$n(nd,"onAnimationEnd");$n(td,"onAnimationIteration");$n(rd,"onAnimationStart");$n("dblclick","onDoubleClick");$n("focusin","onFocus");$n("focusout","onBlur");$n(od,"onTransitionEnd");Ot("onMouseEnter",["mouseout","mouseover"]);Ot("onMouseLeave",["mouseout","mouseover"]);Ot("onPointerEnter",["pointerout","pointerover"]);Ot("onPointerLeave",["pointerout","pointerover"]);st("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));st("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));st("onBeforeInput",["compositionend","keypress","textInput","paste"]);st("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));st("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));st("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var or="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pg=new Set("cancel close invalid load scroll toggle".split(" ").concat(or));function Yu(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,d0(r,n,void 0,e),e.currentTarget=null}function id(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var i=r.length-1;0<=i;i--){var s=r[i],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==l&&o.isPropagationStopped())break e;Yu(o,s,c),l=a}else for(i=0;i<r.length;i++){if(s=r[i],a=s.instance,c=s.currentTarget,s=s.listener,a!==l&&o.isPropagationStopped())break e;Yu(o,s,c),l=a}}}if(Eo)throw e=Si,Eo=!1,Si=null,e}function H(e,n){var t=n[Pi];t===void 0&&(t=n[Pi]=new Set);var r=e+"__bubble";t.has(r)||(sd(n,e,2,!1),t.add(r))}function Ul(e,n,t){var r=0;n&&(r|=4),sd(t,e,r,n)}var to="_reactListening"+Math.random().toString(36).slice(2);function _r(e){if(!e[to]){e[to]=!0,hc.forEach(function(t){t!=="selectionchange"&&(pg.has(t)||Ul(t,!1,e),Ul(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[to]||(n[to]=!0,Ul("selectionchange",!1,n))}}function sd(e,n,t,r){switch(Wc(n)){case 1:var o=R0;break;case 4:o=T0;break;default:o=_s}t=o.bind(null,n,t,e),o=void 0,!Ci||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function Bl(e,n,t,r,o){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;i=i.return}for(;s!==null;){if(i=Gn(s),i===null)return;if(a=i.tag,a===5||a===6){r=l=i;continue e}s=s.parentNode}}r=r.return}Nc(function(){var c=l,p=Cs(t),d=[];e:{var h=ld.get(e);if(h!==void 0){var x=Es,C=e;switch(e){case"keypress":if(go(t)===0)break e;case"keydown":case"keyup":x=H0;break;case"focusin":C="focus",x=Il;break;case"focusout":C="blur",x=Il;break;case"beforeblur":case"afterblur":x=Il;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Ou;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=P0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Y0;break;case nd:case td:case rd:x=O0;break;case od:x=Q0;break;case"scroll":x=A0;break;case"wheel":x=X0;break;case"copy":case"cut":case"paste":x=M0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Mu}var S=(n&4)!==0,j=!S&&e==="scroll",m=S?h!==null?h+"Capture":null:h;S=[];for(var f=c,g;f!==null;){g=f;var k=g.stateNode;if(g.tag===5&&k!==null&&(g=k,m!==null&&(k=xr(f,m),k!=null&&S.push(jr(f,k,g)))),j)break;f=f.return}0<S.length&&(h=new x(h,C,null,t,p),d.push({event:h,listeners:S}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&t!==xi&&(C=t.relatedTarget||t.fromElement)&&(Gn(C)||C[dn]))break e;if((x||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,x?(C=t.relatedTarget||t.toElement,x=c,C=C?Gn(C):null,C!==null&&(j=ut(C),C!==j||C.tag!==5&&C.tag!==6)&&(C=null)):(x=null,C=c),x!==C)){if(S=Ou,k="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(S=Mu,k="onPointerLeave",m="onPointerEnter",f="pointer"),j=x==null?h:xt(x),g=C==null?h:xt(C),h=new S(k,f+"leave",x,t,p),h.target=j,h.relatedTarget=g,k=null,Gn(p)===c&&(S=new S(m,f+"enter",C,t,p),S.target=g,S.relatedTarget=j,k=S),j=k,x&&C)n:{for(S=x,m=C,f=0,g=S;g;g=ct(g))f++;for(g=0,k=m;k;k=ct(k))g++;for(;0<f-g;)S=ct(S),f--;for(;0<g-f;)m=ct(m),g--;for(;f--;){if(S===m||m!==null&&S===m.alternate)break n;S=ct(S),m=ct(m)}S=null}else S=null;x!==null&&Ku(d,h,x,S,!1),C!==null&&j!==null&&Ku(d,j,C,S,!0)}}e:{if(h=c?xt(c):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var A=rg;else if(zu(h))if(Xc)A=sg;else{A=lg;var T=og}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=ig);if(A&&(A=A(e,c))){Gc(d,A,t,p);break e}T&&T(e,h,c),e==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&pi(h,"number",h.value)}switch(T=c?xt(c):window,e){case"focusin":(zu(T)||T.contentEditable==="true")&&(gt=T,ji=c,dr=null);break;case"focusout":dr=ji=gt=null;break;case"mousedown":Ei=!0;break;case"contextmenu":case"mouseup":case"dragend":Ei=!1,Wu(d,t,p);break;case"selectionchange":if(cg)break;case"keydown":case"keyup":Wu(d,t,p)}var v;if(Ts)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else mt?Kc(e,t)&&(y="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(Yc&&t.locale!=="ko"&&(mt||y!=="onCompositionStart"?y==="onCompositionEnd"&&mt&&(v=Vc()):(wn=p,js="value"in wn?wn.value:wn.textContent,mt=!0)),T=Po(c,y),0<T.length&&(y=new Iu(y,e,null,t,p),d.push({event:y,listeners:T}),v?y.data=v:(v=Qc(t),v!==null&&(y.data=v)))),(v=Z0?q0(e,t):eg(e,t))&&(c=Po(c,"onBeforeInput"),0<c.length&&(p=new Iu("onBeforeInput","beforeinput",null,t,p),d.push({event:p,listeners:c}),p.data=v))}id(d,n)})}function jr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Po(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=xr(e,t),l!=null&&r.unshift(jr(e,l,o)),l=xr(e,n),l!=null&&r.push(jr(e,l,o))),e=e.return}return r}function ct(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ku(e,n,t,r,o){for(var l=n._reactName,i=[];t!==null&&t!==r;){var s=t,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,o?(a=xr(t,l),a!=null&&i.unshift(jr(t,a,s))):o||(a=xr(t,l),a!=null&&i.push(jr(t,a,s)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var hg=/\r\n?/g,mg=/\u0000|\uFFFD/g;function Qu(e){return(typeof e=="string"?e:""+e).replace(hg,`
`).replace(mg,"")}function ro(e,n,t){if(n=Qu(n),Qu(e)!==n&&t)throw Error(R(425))}function Lo(){}var Ri=null,Ti=null;function Ai(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ni=typeof setTimeout=="function"?setTimeout:void 0,gg=typeof clearTimeout=="function"?clearTimeout:void 0,Gu=typeof Promise=="function"?Promise:void 0,vg=typeof queueMicrotask=="function"?queueMicrotask:typeof Gu<"u"?function(e){return Gu.resolve(null).then(e).catch(xg)}:Ni;function xg(e){setTimeout(function(){throw e})}function Hl(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),Sr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);Sr(n)}function Nn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Xu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Vt=Math.random().toString(36).slice(2),en="__reactFiber$"+Vt,Er="__reactProps$"+Vt,dn="__reactContainer$"+Vt,Pi="__reactEvents$"+Vt,yg="__reactListeners$"+Vt,Cg="__reactHandles$"+Vt;function Gn(e){var n=e[en];if(n)return n;for(var t=e.parentNode;t;){if(n=t[dn]||t[en]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Xu(e);e!==null;){if(t=e[en])return t;e=Xu(e)}return n}e=t,t=e.parentNode}return null}function Br(e){return e=e[en]||e[dn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function cl(e){return e[Er]||null}var Li=[],yt=-1;function Un(e){return{current:e}}function W(e){0>yt||(e.current=Li[yt],Li[yt]=null,yt--)}function B(e,n){yt++,Li[yt]=e.current,e.current=n}var bn={},me=Un(bn),je=Un(!1),tt=bn;function It(e,n){var t=e.type.contextTypes;if(!t)return bn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in t)o[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ee(e){return e=e.childContextTypes,e!=null}function Do(){W(je),W(me)}function Ju(e,n,t){if(me.current!==bn)throw Error(R(168));B(me,n),B(je,t)}function ud(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(R(108,o0(e)||"Unknown",o));return X({},t,r)}function Oo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bn,tt=me.current,B(me,e),B(je,je.current),!0}function Zu(e,n,t){var r=e.stateNode;if(!r)throw Error(R(169));t?(e=ud(e,n,tt),r.__reactInternalMemoizedMergedChildContext=e,W(je),W(me),B(me,e)):W(je),B(je,t)}var ln=null,dl=!1,Wl=!1;function ad(e){ln===null?ln=[e]:ln.push(e)}function Sg(e){dl=!0,ad(e)}function Bn(){if(!Wl&&ln!==null){Wl=!0;var e=0,n=U;try{var t=ln;for(U=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}ln=null,dl=!1}catch(o){throw ln!==null&&(ln=ln.slice(e+1)),Oc(Ss,Bn),o}finally{U=n,Wl=!1}}return null}var Ct=[],St=0,Io=null,Mo=0,Ie=[],Me=0,rt=null,sn=1,un="";function Kn(e,n){Ct[St++]=Mo,Ct[St++]=Io,Io=e,Mo=n}function cd(e,n,t){Ie[Me++]=sn,Ie[Me++]=un,Ie[Me++]=rt,rt=e;var r=sn;e=un;var o=32-Qe(r)-1;r&=~(1<<o),t+=1;var l=32-Qe(n)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,sn=1<<32-Qe(n)+o|t<<o|r,un=l+e}else sn=1<<l|t<<o|r,un=e}function Ns(e){e.return!==null&&(Kn(e,1),cd(e,1,0))}function Ps(e){for(;e===Io;)Io=Ct[--St],Ct[St]=null,Mo=Ct[--St],Ct[St]=null;for(;e===rt;)rt=Ie[--Me],Ie[Me]=null,un=Ie[--Me],Ie[Me]=null,sn=Ie[--Me],Ie[Me]=null}var Pe=null,Ne=null,Y=!1,Ye=null;function dd(e,n){var t=Fe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function qu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Pe=e,Ne=Nn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Pe=e,Ne=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=rt!==null?{id:sn,overflow:un}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Fe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Pe=e,Ne=null,!0):!1;default:return!1}}function Di(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Oi(e){if(Y){var n=Ne;if(n){var t=n;if(!qu(e,n)){if(Di(e))throw Error(R(418));n=Nn(t.nextSibling);var r=Pe;n&&qu(e,n)?dd(r,t):(e.flags=e.flags&-4097|2,Y=!1,Pe=e)}}else{if(Di(e))throw Error(R(418));e.flags=e.flags&-4097|2,Y=!1,Pe=e}}}function ea(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pe=e}function oo(e){if(e!==Pe)return!1;if(!Y)return ea(e),Y=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ai(e.type,e.memoizedProps)),n&&(n=Ne)){if(Di(e))throw fd(),Error(R(418));for(;n;)dd(e,n),n=Nn(n.nextSibling)}if(ea(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ne=Nn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ne=null}}else Ne=Pe?Nn(e.stateNode.nextSibling):null;return!0}function fd(){for(var e=Ne;e;)e=Nn(e.nextSibling)}function Mt(){Ne=Pe=null,Y=!1}function Ls(e){Ye===null?Ye=[e]:Ye.push(e)}var kg=mn.ReactCurrentBatchConfig;function Zt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(R(309));var r=t.stateNode}if(!r)throw Error(R(147,e));var o=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(i){var s=o.refs;i===null?delete s[l]:s[l]=i},n._stringRef=l,n)}if(typeof e!="string")throw Error(R(284));if(!t._owner)throw Error(R(290,e))}return e}function lo(e,n){throw e=Object.prototype.toString.call(n),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function na(e){var n=e._init;return n(e._payload)}function pd(e){function n(m,f){if(e){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function t(m,f){if(!e)return null;for(;f!==null;)n(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function o(m,f){return m=On(m,f),m.index=0,m.sibling=null,m}function l(m,f,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function i(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,f,g,k){return f===null||f.tag!==6?(f=Jl(g,m.mode,k),f.return=m,f):(f=o(f,g),f.return=m,f)}function a(m,f,g,k){var A=g.type;return A===ht?p(m,f,g.props.children,k,g.key):f!==null&&(f.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===yn&&na(A)===f.type)?(k=o(f,g.props),k.ref=Zt(m,f,g),k.return=m,k):(k=wo(g.type,g.key,g.props,null,m.mode,k),k.ref=Zt(m,f,g),k.return=m,k)}function c(m,f,g,k){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Zl(g,m.mode,k),f.return=m,f):(f=o(f,g.children||[]),f.return=m,f)}function p(m,f,g,k,A){return f===null||f.tag!==7?(f=et(g,m.mode,k,A),f.return=m,f):(f=o(f,g),f.return=m,f)}function d(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Jl(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Qr:return g=wo(f.type,f.key,f.props,null,m.mode,g),g.ref=Zt(m,null,f),g.return=m,g;case pt:return f=Zl(f,m.mode,g),f.return=m,f;case yn:var k=f._init;return d(m,k(f._payload),g)}if(tr(f)||Kt(f))return f=et(f,m.mode,g,null),f.return=m,f;lo(m,f)}return null}function h(m,f,g,k){var A=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return A!==null?null:s(m,f,""+g,k);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Qr:return g.key===A?a(m,f,g,k):null;case pt:return g.key===A?c(m,f,g,k):null;case yn:return A=g._init,h(m,f,A(g._payload),k)}if(tr(g)||Kt(g))return A!==null?null:p(m,f,g,k,null);lo(m,g)}return null}function x(m,f,g,k,A){if(typeof k=="string"&&k!==""||typeof k=="number")return m=m.get(g)||null,s(f,m,""+k,A);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Qr:return m=m.get(k.key===null?g:k.key)||null,a(f,m,k,A);case pt:return m=m.get(k.key===null?g:k.key)||null,c(f,m,k,A);case yn:var T=k._init;return x(m,f,g,T(k._payload),A)}if(tr(k)||Kt(k))return m=m.get(g)||null,p(f,m,k,A,null);lo(f,k)}return null}function C(m,f,g,k){for(var A=null,T=null,v=f,y=f=0,_=null;v!==null&&y<g.length;y++){v.index>y?(_=v,v=null):_=v.sibling;var E=h(m,v,g[y],k);if(E===null){v===null&&(v=_);break}e&&v&&E.alternate===null&&n(m,v),f=l(E,f,y),T===null?A=E:T.sibling=E,T=E,v=_}if(y===g.length)return t(m,v),Y&&Kn(m,y),A;if(v===null){for(;y<g.length;y++)v=d(m,g[y],k),v!==null&&(f=l(v,f,y),T===null?A=v:T.sibling=v,T=v);return Y&&Kn(m,y),A}for(v=r(m,v);y<g.length;y++)_=x(v,m,y,g[y],k),_!==null&&(e&&_.alternate!==null&&v.delete(_.key===null?y:_.key),f=l(_,f,y),T===null?A=_:T.sibling=_,T=_);return e&&v.forEach(function(L){return n(m,L)}),Y&&Kn(m,y),A}function S(m,f,g,k){var A=Kt(g);if(typeof A!="function")throw Error(R(150));if(g=A.call(g),g==null)throw Error(R(151));for(var T=A=null,v=f,y=f=0,_=null,E=g.next();v!==null&&!E.done;y++,E=g.next()){v.index>y?(_=v,v=null):_=v.sibling;var L=h(m,v,E.value,k);if(L===null){v===null&&(v=_);break}e&&v&&L.alternate===null&&n(m,v),f=l(L,f,y),T===null?A=L:T.sibling=L,T=L,v=_}if(E.done)return t(m,v),Y&&Kn(m,y),A;if(v===null){for(;!E.done;y++,E=g.next())E=d(m,E.value,k),E!==null&&(f=l(E,f,y),T===null?A=E:T.sibling=E,T=E);return Y&&Kn(m,y),A}for(v=r(m,v);!E.done;y++,E=g.next())E=x(v,m,y,E.value,k),E!==null&&(e&&E.alternate!==null&&v.delete(E.key===null?y:E.key),f=l(E,f,y),T===null?A=E:T.sibling=E,T=E);return e&&v.forEach(function(b){return n(m,b)}),Y&&Kn(m,y),A}function j(m,f,g,k){if(typeof g=="object"&&g!==null&&g.type===ht&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Qr:e:{for(var A=g.key,T=f;T!==null;){if(T.key===A){if(A=g.type,A===ht){if(T.tag===7){t(m,T.sibling),f=o(T,g.props.children),f.return=m,m=f;break e}}else if(T.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===yn&&na(A)===T.type){t(m,T.sibling),f=o(T,g.props),f.ref=Zt(m,T,g),f.return=m,m=f;break e}t(m,T);break}else n(m,T);T=T.sibling}g.type===ht?(f=et(g.props.children,m.mode,k,g.key),f.return=m,m=f):(k=wo(g.type,g.key,g.props,null,m.mode,k),k.ref=Zt(m,f,g),k.return=m,m=k)}return i(m);case pt:e:{for(T=g.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){t(m,f.sibling),f=o(f,g.children||[]),f.return=m,m=f;break e}else{t(m,f);break}else n(m,f);f=f.sibling}f=Zl(g,m.mode,k),f.return=m,m=f}return i(m);case yn:return T=g._init,j(m,f,T(g._payload),k)}if(tr(g))return C(m,f,g,k);if(Kt(g))return S(m,f,g,k);lo(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(t(m,f.sibling),f=o(f,g),f.return=m,m=f):(t(m,f),f=Jl(g,m.mode,k),f.return=m,m=f),i(m)):t(m,f)}return j}var Ft=pd(!0),hd=pd(!1),Fo=Un(null),bo=null,kt=null,Ds=null;function Os(){Ds=kt=bo=null}function Is(e){var n=Fo.current;W(Fo),e._currentValue=n}function Ii(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Lt(e,n){bo=e,Ds=kt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(we=!0),e.firstContext=null)}function ze(e){var n=e._currentValue;if(Ds!==e)if(e={context:e,memoizedValue:n,next:null},kt===null){if(bo===null)throw Error(R(308));kt=e,bo.dependencies={lanes:0,firstContext:e}}else kt=kt.next=e;return n}var Xn=null;function Ms(e){Xn===null?Xn=[e]:Xn.push(e)}function md(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,Ms(n)):(t.next=o.next,o.next=t),n.interleaved=t,fn(e,r)}function fn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Cn=!1;function Fs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function an(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Pn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,fn(e,t)}return o=r.interleaved,o===null?(n.next=n,Ms(r)):(n.next=o.next,o.next=n),r.interleaved=n,fn(e,t)}function vo(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ks(e,t)}}function ta(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?o=l=i:l=l.next=i,t=t.next}while(t!==null);l===null?o=l=n:l=l.next=n}else o=l=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function zo(e,n,t,r){var o=e.updateQueue;Cn=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,c=a.next;a.next=null,i===null?l=c:i.next=c,i=a;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==i&&(s===null?p.firstBaseUpdate=c:s.next=c,p.lastBaseUpdate=a))}if(l!==null){var d=o.baseState;i=0,p=c=a=null,s=l;do{var h=s.lane,x=s.eventTime;if((r&h)===h){p!==null&&(p=p.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var C=e,S=s;switch(h=n,x=t,S.tag){case 1:if(C=S.payload,typeof C=="function"){d=C.call(x,d,h);break e}d=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=S.payload,h=typeof C=="function"?C.call(x,d,h):C,h==null)break e;d=X({},d,h);break e;case 2:Cn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[s]:h.push(s))}else x={eventTime:x,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(c=p=x,a=d):p=p.next=x,i|=h;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;h=s,s=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(p===null&&(a=d),o.baseState=a,o.firstBaseUpdate=c,o.lastBaseUpdate=p,n=o.shared.interleaved,n!==null){o=n;do i|=o.lane,o=o.next;while(o!==n)}else l===null&&(o.shared.lanes=0);lt|=i,e.lanes=i,e.memoizedState=d}}function ra(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(R(191,o));o.call(r)}}}var Hr={},tn=Un(Hr),Rr=Un(Hr),Tr=Un(Hr);function Jn(e){if(e===Hr)throw Error(R(174));return e}function bs(e,n){switch(B(Tr,n),B(Rr,e),B(tn,Hr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:mi(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=mi(n,e)}W(tn),B(tn,n)}function bt(){W(tn),W(Rr),W(Tr)}function vd(e){Jn(Tr.current);var n=Jn(tn.current),t=mi(n,e.type);n!==t&&(B(Rr,e),B(tn,t))}function zs(e){Rr.current===e&&(W(tn),W(Rr))}var K=Un(0);function $o(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Vl=[];function $s(){for(var e=0;e<Vl.length;e++)Vl[e]._workInProgressVersionPrimary=null;Vl.length=0}var xo=mn.ReactCurrentDispatcher,Yl=mn.ReactCurrentBatchConfig,ot=0,Q=null,te=null,ie=null,Uo=!1,fr=!1,Ar=0,wg=0;function fe(){throw Error(R(321))}function Us(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Xe(e[t],n[t]))return!1;return!0}function Bs(e,n,t,r,o,l){if(ot=l,Q=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,xo.current=e===null||e.memoizedState===null?Rg:Tg,e=t(r,o),fr){l=0;do{if(fr=!1,Ar=0,25<=l)throw Error(R(301));l+=1,ie=te=null,n.updateQueue=null,xo.current=Ag,e=t(r,o)}while(fr)}if(xo.current=Bo,n=te!==null&&te.next!==null,ot=0,ie=te=Q=null,Uo=!1,n)throw Error(R(300));return e}function Hs(){var e=Ar!==0;return Ar=0,e}function qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?Q.memoizedState=ie=e:ie=ie.next=e,ie}function $e(){if(te===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var n=ie===null?Q.memoizedState:ie.next;if(n!==null)ie=n,te=e;else{if(e===null)throw Error(R(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},ie===null?Q.memoizedState=ie=e:ie=ie.next=e}return ie}function Nr(e,n){return typeof n=="function"?n(e):n}function Kl(e){var n=$e(),t=n.queue;if(t===null)throw Error(R(311));t.lastRenderedReducer=e;var r=te,o=r.baseQueue,l=t.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,t.pending=null}if(o!==null){l=o.next,r=r.baseState;var s=i=null,a=null,c=l;do{var p=c.lane;if((ot&p)===p)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=d,i=r):a=a.next=d,Q.lanes|=p,lt|=p}c=c.next}while(c!==null&&c!==l);a===null?i=r:a.next=s,Xe(r,n.memoizedState)||(we=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do l=o.lane,Q.lanes|=l,lt|=l,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ql(e){var n=$e(),t=n.queue;if(t===null)throw Error(R(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,l=n.memoizedState;if(o!==null){t.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);Xe(l,n.memoizedState)||(we=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function xd(){}function yd(e,n){var t=Q,r=$e(),o=n(),l=!Xe(r.memoizedState,o);if(l&&(r.memoizedState=o,we=!0),r=r.queue,Ws(kd.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||ie!==null&&ie.memoizedState.tag&1){if(t.flags|=2048,Pr(9,Sd.bind(null,t,r,o,n),void 0,null),se===null)throw Error(R(349));ot&30||Cd(t,n,o)}return o}function Cd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Q.updateQueue,n===null?(n={lastEffect:null,stores:null},Q.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Sd(e,n,t,r){n.value=t,n.getSnapshot=r,wd(n)&&_d(e)}function kd(e,n,t){return t(function(){wd(n)&&_d(e)})}function wd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Xe(e,t)}catch{return!0}}function _d(e){var n=fn(e,1);n!==null&&Ge(n,e,1,-1)}function oa(e){var n=qe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Nr,lastRenderedState:e},n.queue=e,e=e.dispatch=Eg.bind(null,Q,e),[n.memoizedState,e]}function Pr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Q.updateQueue,n===null?(n={lastEffect:null,stores:null},Q.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function jd(){return $e().memoizedState}function yo(e,n,t,r){var o=qe();Q.flags|=e,o.memoizedState=Pr(1|n,t,void 0,r===void 0?null:r)}function fl(e,n,t,r){var o=$e();r=r===void 0?null:r;var l=void 0;if(te!==null){var i=te.memoizedState;if(l=i.destroy,r!==null&&Us(r,i.deps)){o.memoizedState=Pr(n,t,l,r);return}}Q.flags|=e,o.memoizedState=Pr(1|n,t,l,r)}function la(e,n){return yo(8390656,8,e,n)}function Ws(e,n){return fl(2048,8,e,n)}function Ed(e,n){return fl(4,2,e,n)}function Rd(e,n){return fl(4,4,e,n)}function Td(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ad(e,n,t){return t=t!=null?t.concat([e]):null,fl(4,4,Td.bind(null,n,e),t)}function Vs(){}function Nd(e,n){var t=$e();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Us(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Pd(e,n){var t=$e();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Us(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Ld(e,n,t){return ot&21?(Xe(t,n)||(t=Fc(),Q.lanes|=t,lt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=t)}function _g(e,n){var t=U;U=t!==0&&4>t?t:4,e(!0);var r=Yl.transition;Yl.transition={};try{e(!1),n()}finally{U=t,Yl.transition=r}}function Dd(){return $e().memoizedState}function jg(e,n,t){var r=Dn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Od(e))Id(n,t);else if(t=md(e,n,t,r),t!==null){var o=ye();Ge(t,e,r,o),Md(t,n,r)}}function Eg(e,n,t){var r=Dn(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Od(e))Id(n,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var i=n.lastRenderedState,s=l(i,t);if(o.hasEagerState=!0,o.eagerState=s,Xe(s,i)){var a=n.interleaved;a===null?(o.next=o,Ms(n)):(o.next=a.next,a.next=o),n.interleaved=o;return}}catch{}finally{}t=md(e,n,o,r),t!==null&&(o=ye(),Ge(t,e,r,o),Md(t,n,r))}}function Od(e){var n=e.alternate;return e===Q||n!==null&&n===Q}function Id(e,n){fr=Uo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Md(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ks(e,t)}}var Bo={readContext:ze,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},Rg={readContext:ze,useCallback:function(e,n){return qe().memoizedState=[e,n===void 0?null:n],e},useContext:ze,useEffect:la,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,yo(4194308,4,Td.bind(null,n,e),t)},useLayoutEffect:function(e,n){return yo(4194308,4,e,n)},useInsertionEffect:function(e,n){return yo(4,2,e,n)},useMemo:function(e,n){var t=qe();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=qe();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=jg.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var n=qe();return e={current:e},n.memoizedState=e},useState:oa,useDebugValue:Vs,useDeferredValue:function(e){return qe().memoizedState=e},useTransition:function(){var e=oa(!1),n=e[0];return e=_g.bind(null,e[1]),qe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Q,o=qe();if(Y){if(t===void 0)throw Error(R(407));t=t()}else{if(t=n(),se===null)throw Error(R(349));ot&30||Cd(r,n,t)}o.memoizedState=t;var l={value:t,getSnapshot:n};return o.queue=l,la(kd.bind(null,r,l,e),[e]),r.flags|=2048,Pr(9,Sd.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=qe(),n=se.identifierPrefix;if(Y){var t=un,r=sn;t=(r&~(1<<32-Qe(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Ar++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=wg++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Tg={readContext:ze,useCallback:Nd,useContext:ze,useEffect:Ws,useImperativeHandle:Ad,useInsertionEffect:Ed,useLayoutEffect:Rd,useMemo:Pd,useReducer:Kl,useRef:jd,useState:function(){return Kl(Nr)},useDebugValue:Vs,useDeferredValue:function(e){var n=$e();return Ld(n,te.memoizedState,e)},useTransition:function(){var e=Kl(Nr)[0],n=$e().memoizedState;return[e,n]},useMutableSource:xd,useSyncExternalStore:yd,useId:Dd,unstable_isNewReconciler:!1},Ag={readContext:ze,useCallback:Nd,useContext:ze,useEffect:Ws,useImperativeHandle:Ad,useInsertionEffect:Ed,useLayoutEffect:Rd,useMemo:Pd,useReducer:Ql,useRef:jd,useState:function(){return Ql(Nr)},useDebugValue:Vs,useDeferredValue:function(e){var n=$e();return te===null?n.memoizedState=e:Ld(n,te.memoizedState,e)},useTransition:function(){var e=Ql(Nr)[0],n=$e().memoizedState;return[e,n]},useMutableSource:xd,useSyncExternalStore:yd,useId:Dd,unstable_isNewReconciler:!1};function We(e,n){if(e&&e.defaultProps){n=X({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Mi(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:X({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var pl={isMounted:function(e){return(e=e._reactInternals)?ut(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ye(),o=Dn(e),l=an(r,o);l.payload=n,t!=null&&(l.callback=t),n=Pn(e,l,o),n!==null&&(Ge(n,e,o,r),vo(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ye(),o=Dn(e),l=an(r,o);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=Pn(e,l,o),n!==null&&(Ge(n,e,o,r),vo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ye(),r=Dn(e),o=an(t,r);o.tag=2,n!=null&&(o.callback=n),n=Pn(e,o,r),n!==null&&(Ge(n,e,r,t),vo(n,e,r))}};function ia(e,n,t,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):n.prototype&&n.prototype.isPureReactComponent?!wr(t,r)||!wr(o,l):!0}function Fd(e,n,t){var r=!1,o=bn,l=n.contextType;return typeof l=="object"&&l!==null?l=ze(l):(o=Ee(n)?tt:me.current,r=n.contextTypes,l=(r=r!=null)?It(e,o):bn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=pl,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),n}function sa(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&pl.enqueueReplaceState(n,n.state,null)}function Fi(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},Fs(e);var l=n.contextType;typeof l=="object"&&l!==null?o.context=ze(l):(l=Ee(n)?tt:me.current,o.context=It(e,l)),o.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Mi(e,n,l,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&pl.enqueueReplaceState(o,o.state,null),zo(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function zt(e,n){try{var t="",r=n;do t+=r0(r),r=r.return;while(r);var o=t}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:o,digest:null}}function Gl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function bi(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Ng=typeof WeakMap=="function"?WeakMap:Map;function bd(e,n,t){t=an(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Wo||(Wo=!0,Qi=r),bi(e,n)},t}function zd(e,n,t){t=an(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){bi(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){bi(e,n),typeof r!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function ua(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Ng;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=Wg.bind(null,e,n,t),n.then(e,e))}function aa(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function ca(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=an(-1,1),n.tag=2,Pn(t,n,1))),t.lanes|=1),e)}var Pg=mn.ReactCurrentOwner,we=!1;function ve(e,n,t,r){n.child=e===null?hd(n,null,t,r):Ft(n,e.child,t,r)}function da(e,n,t,r,o){t=t.render;var l=n.ref;return Lt(n,o),r=Bs(e,n,t,r,l,o),t=Hs(),e!==null&&!we?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,pn(e,n,o)):(Y&&t&&Ns(n),n.flags|=1,ve(e,n,r,o),n.child)}function fa(e,n,t,r,o){if(e===null){var l=t.type;return typeof l=="function"&&!qs(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,$d(e,n,l,r,o)):(e=wo(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(t=t.compare,t=t!==null?t:wr,t(i,r)&&e.ref===n.ref)return pn(e,n,o)}return n.flags|=1,e=On(l,r),e.ref=n.ref,e.return=n,n.child=e}function $d(e,n,t,r,o){if(e!==null){var l=e.memoizedProps;if(wr(l,r)&&e.ref===n.ref)if(we=!1,n.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(we=!0);else return n.lanes=e.lanes,pn(e,n,o)}return zi(e,n,t,r,o)}function Ud(e,n,t){var r=n.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(_t,Ae),Ae|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,B(_t,Ae),Ae|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,B(_t,Ae),Ae|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,B(_t,Ae),Ae|=r;return ve(e,n,o,t),n.child}function Bd(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function zi(e,n,t,r,o){var l=Ee(t)?tt:me.current;return l=It(n,l),Lt(n,o),t=Bs(e,n,t,r,l,o),r=Hs(),e!==null&&!we?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,pn(e,n,o)):(Y&&r&&Ns(n),n.flags|=1,ve(e,n,t,o),n.child)}function pa(e,n,t,r,o){if(Ee(t)){var l=!0;Oo(n)}else l=!1;if(Lt(n,o),n.stateNode===null)Co(e,n),Fd(n,t,r),Fi(n,t,r,o),r=!0;else if(e===null){var i=n.stateNode,s=n.memoizedProps;i.props=s;var a=i.context,c=t.contextType;typeof c=="object"&&c!==null?c=ze(c):(c=Ee(t)?tt:me.current,c=It(n,c));var p=t.getDerivedStateFromProps,d=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function";d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||a!==c)&&sa(n,i,r,c),Cn=!1;var h=n.memoizedState;i.state=h,zo(n,r,i,o),a=n.memoizedState,s!==r||h!==a||je.current||Cn?(typeof p=="function"&&(Mi(n,t,p,r),a=n.memoizedState),(s=Cn||ia(n,t,s,r,h,a,c))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),i.props=r,i.state=a,i.context=c,r=s):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,gd(e,n),s=n.memoizedProps,c=n.type===n.elementType?s:We(n.type,s),i.props=c,d=n.pendingProps,h=i.context,a=t.contextType,typeof a=="object"&&a!==null?a=ze(a):(a=Ee(t)?tt:me.current,a=It(n,a));var x=t.getDerivedStateFromProps;(p=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==d||h!==a)&&sa(n,i,r,a),Cn=!1,h=n.memoizedState,i.state=h,zo(n,r,i,o);var C=n.memoizedState;s!==d||h!==C||je.current||Cn?(typeof x=="function"&&(Mi(n,t,x,r),C=n.memoizedState),(c=Cn||ia(n,t,c,r,h,C,a)||!1)?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,C,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,C,a)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=C),i.props=r,i.state=C,i.context=a,r=c):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return $i(e,n,t,r,l,o)}function $i(e,n,t,r,o,l){Bd(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return o&&Zu(n,t,!1),pn(e,n,l);r=n.stateNode,Pg.current=n;var s=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=Ft(n,e.child,null,l),n.child=Ft(n,null,s,l)):ve(e,n,s,l),n.memoizedState=r.state,o&&Zu(n,t,!0),n.child}function Hd(e){var n=e.stateNode;n.pendingContext?Ju(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ju(e,n.context,!1),bs(e,n.containerInfo)}function ha(e,n,t,r,o){return Mt(),Ls(o),n.flags|=256,ve(e,n,t,r),n.child}var Ui={dehydrated:null,treeContext:null,retryLane:0};function Bi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Wd(e,n,t){var r=n.pendingProps,o=K.current,l=!1,i=(n.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),B(K,o&1),e===null)return Oi(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=r.children,e=r.fallback,l?(r=n.mode,l=n.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=gl(i,r,0,null),e=et(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=Bi(t),n.memoizedState=Ui,e):Ys(n,i));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Lg(e,n,i,r,s,o,t);if(l){l=r.fallback,i=n.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=On(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?l=On(s,l):(l=et(l,i,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,i=e.child.memoizedState,i=i===null?Bi(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~t,n.memoizedState=Ui,r}return l=e.child,e=l.sibling,r=On(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Ys(e,n){return n=gl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function io(e,n,t,r){return r!==null&&Ls(r),Ft(n,e.child,null,t),e=Ys(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Lg(e,n,t,r,o,l,i){if(t)return n.flags&256?(n.flags&=-257,r=Gl(Error(R(422))),io(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,o=n.mode,r=gl({mode:"visible",children:r.children},o,0,null),l=et(l,o,i,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&Ft(n,e.child,null,i),n.child.memoizedState=Bi(i),n.memoizedState=Ui,l);if(!(n.mode&1))return io(e,n,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(R(419)),r=Gl(l,r,void 0),io(e,n,i,r)}if(s=(i&e.childLanes)!==0,we||s){if(r=se,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,fn(e,o),Ge(r,e,o,-1))}return Zs(),r=Gl(Error(R(421))),io(e,n,i,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=Vg.bind(null,e),o._reactRetry=n,null):(e=l.treeContext,Ne=Nn(o.nextSibling),Pe=n,Y=!0,Ye=null,e!==null&&(Ie[Me++]=sn,Ie[Me++]=un,Ie[Me++]=rt,sn=e.id,un=e.overflow,rt=n),n=Ys(n,r.children),n.flags|=4096,n)}function ma(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Ii(e.return,n,t)}function Xl(e,n,t,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=o)}function Vd(e,n,t){var r=n.pendingProps,o=r.revealOrder,l=r.tail;if(ve(e,n,r.children,t),r=K.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ma(e,t,n);else if(e.tag===19)ma(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(K,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&$o(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),Xl(n,!1,o,t,l);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&$o(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}Xl(n,!0,t,null,l);break;case"together":Xl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Co(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function pn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),lt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(R(153));if(n.child!==null){for(e=n.child,t=On(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=On(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Dg(e,n,t){switch(n.tag){case 3:Hd(n),Mt();break;case 5:vd(n);break;case 1:Ee(n.type)&&Oo(n);break;case 4:bs(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;B(Fo,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(B(K,K.current&1),n.flags|=128,null):t&n.child.childLanes?Wd(e,n,t):(B(K,K.current&1),e=pn(e,n,t),e!==null?e.sibling:null);B(K,K.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Vd(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),B(K,K.current),r)break;return null;case 22:case 23:return n.lanes=0,Ud(e,n,t)}return pn(e,n,t)}var Yd,Hi,Kd,Qd;Yd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Hi=function(){};Kd=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,Jn(tn.current);var l=null;switch(t){case"input":o=di(e,o),r=di(e,r),l=[];break;case"select":o=X({},o,{value:void 0}),r=X({},r,{value:void 0}),l=[];break;case"textarea":o=hi(e,o),r=hi(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Lo)}gi(t,r);var i;t=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(i in s)s.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(gr.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var a=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(t||(t={}),t[i]=a[i])}else t||(l||(l=[]),l.push(c,t)),t=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(l=l||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(gr.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&H("scroll",e),l||s===a||(l=[])):(l=l||[]).push(c,a))}t&&(l=l||[]).push("style",t);var c=l;(n.updateQueue=c)&&(n.flags|=4)}};Qd=function(e,n,t,r){t!==r&&(n.flags|=4)};function qt(e,n){if(!Y)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Og(e,n,t){var r=n.pendingProps;switch(Ps(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(n),null;case 1:return Ee(n.type)&&Do(),pe(n),null;case 3:return r=n.stateNode,bt(),W(je),W(me),$s(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(oo(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ye!==null&&(Ji(Ye),Ye=null))),Hi(e,n),pe(n),null;case 5:zs(n);var o=Jn(Tr.current);if(t=n.type,e!==null&&n.stateNode!=null)Kd(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(R(166));return pe(n),null}if(e=Jn(tn.current),oo(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[en]=n,r[Er]=l,e=(n.mode&1)!==0,t){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(o=0;o<or.length;o++)H(or[o],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":_u(r,l),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},H("invalid",r);break;case"textarea":Eu(r,l),H("invalid",r)}gi(t,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&ro(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&ro(r.textContent,s,e),o=["children",""+s]):gr.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&H("scroll",r)}switch(t){case"input":Gr(r),ju(r,l,!0);break;case"textarea":Gr(r),Ru(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Lo)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=kc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[en]=n,e[Er]=r,Yd(e,n,!1,!1),n.stateNode=e;e:{switch(i=vi(t,r),t){case"dialog":H("cancel",e),H("close",e),o=r;break;case"iframe":case"object":case"embed":H("load",e),o=r;break;case"video":case"audio":for(o=0;o<or.length;o++)H(or[o],e);o=r;break;case"source":H("error",e),o=r;break;case"img":case"image":case"link":H("error",e),H("load",e),o=r;break;case"details":H("toggle",e),o=r;break;case"input":_u(e,r),o=di(e,r),H("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=X({},r,{value:void 0}),H("invalid",e);break;case"textarea":Eu(e,r),o=hi(e,r),H("invalid",e);break;default:o=r}gi(t,o),s=o;for(l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="style"?jc(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&wc(e,a)):l==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&vr(e,a):typeof a=="number"&&vr(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(gr.hasOwnProperty(l)?a!=null&&l==="onScroll"&&H("scroll",e):a!=null&&gs(e,l,a,i))}switch(t){case"input":Gr(e),ju(e,r,!1);break;case"textarea":Gr(e),Ru(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Fn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Tt(e,!!r.multiple,l,!1):r.defaultValue!=null&&Tt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Lo)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return pe(n),null;case 6:if(e&&n.stateNode!=null)Qd(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(R(166));if(t=Jn(Tr.current),Jn(tn.current),oo(n)){if(r=n.stateNode,t=n.memoizedProps,r[en]=n,(l=r.nodeValue!==t)&&(e=Pe,e!==null))switch(e.tag){case 3:ro(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ro(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[en]=n,n.stateNode=r}return pe(n),null;case 13:if(W(K),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Ne!==null&&n.mode&1&&!(n.flags&128))fd(),Mt(),n.flags|=98560,l=!1;else if(l=oo(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(R(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(R(317));l[en]=n}else Mt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;pe(n),l=!1}else Ye!==null&&(Ji(Ye),Ye=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||K.current&1?oe===0&&(oe=3):Zs())),n.updateQueue!==null&&(n.flags|=4),pe(n),null);case 4:return bt(),Hi(e,n),e===null&&_r(n.stateNode.containerInfo),pe(n),null;case 10:return Is(n.type._context),pe(n),null;case 17:return Ee(n.type)&&Do(),pe(n),null;case 19:if(W(K),l=n.memoizedState,l===null)return pe(n),null;if(r=(n.flags&128)!==0,i=l.rendering,i===null)if(r)qt(l,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=$o(e),i!==null){for(n.flags|=128,qt(l,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return B(K,K.current&1|2),n.child}e=e.sibling}l.tail!==null&&q()>$t&&(n.flags|=128,r=!0,qt(l,!1),n.lanes=4194304)}else{if(!r)if(e=$o(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),qt(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!Y)return pe(n),null}else 2*q()-l.renderingStartTime>$t&&t!==1073741824&&(n.flags|=128,r=!0,qt(l,!1),n.lanes=4194304);l.isBackwards?(i.sibling=n.child,n.child=i):(t=l.last,t!==null?t.sibling=i:n.child=i,l.last=i)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=q(),n.sibling=null,t=K.current,B(K,r?t&1|2:t&1),n):(pe(n),null);case 22:case 23:return Js(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Ae&1073741824&&(pe(n),n.subtreeFlags&6&&(n.flags|=8192)):pe(n),null;case 24:return null;case 25:return null}throw Error(R(156,n.tag))}function Ig(e,n){switch(Ps(n),n.tag){case 1:return Ee(n.type)&&Do(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return bt(),W(je),W(me),$s(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return zs(n),null;case 13:if(W(K),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(R(340));Mt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return W(K),null;case 4:return bt(),null;case 10:return Is(n.type._context),null;case 22:case 23:return Js(),null;case 24:return null;default:return null}}var so=!1,he=!1,Mg=typeof WeakSet=="function"?WeakSet:Set,P=null;function wt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){J(e,n,r)}else t.current=null}function Wi(e,n,t){try{t()}catch(r){J(e,n,r)}}var ga=!1;function Fg(e,n){if(Ri=Ao,e=qc(),As(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var i=0,s=-1,a=-1,c=0,p=0,d=e,h=null;n:for(;;){for(var x;d!==t||o!==0&&d.nodeType!==3||(s=i+o),d!==l||r!==0&&d.nodeType!==3||(a=i+r),d.nodeType===3&&(i+=d.nodeValue.length),(x=d.firstChild)!==null;)h=d,d=x;for(;;){if(d===e)break n;if(h===t&&++c===o&&(s=i),h===l&&++p===r&&(a=i),(x=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=x}t=s===-1||a===-1?null:{start:s,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ti={focusedElem:e,selectionRange:t},Ao=!1,P=n;P!==null;)if(n=P,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,P=e;else for(;P!==null;){n=P;try{var C=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var S=C.memoizedProps,j=C.memoizedState,m=n.stateNode,f=m.getSnapshotBeforeUpdate(n.elementType===n.type?S:We(n.type,S),j);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(k){J(n,n.return,k)}if(e=n.sibling,e!==null){e.return=n.return,P=e;break}P=n.return}return C=ga,ga=!1,C}function pr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Wi(n,t,l)}o=o.next}while(o!==r)}}function hl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Vi(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Gd(e){var n=e.alternate;n!==null&&(e.alternate=null,Gd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[en],delete n[Er],delete n[Pi],delete n[yg],delete n[Cg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xd(e){return e.tag===5||e.tag===3||e.tag===4}function va(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yi(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Lo));else if(r!==4&&(e=e.child,e!==null))for(Yi(e,n,t),e=e.sibling;e!==null;)Yi(e,n,t),e=e.sibling}function Ki(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ki(e,n,t),e=e.sibling;e!==null;)Ki(e,n,t),e=e.sibling}var ue=null,Ve=!1;function xn(e,n,t){for(t=t.child;t!==null;)Jd(e,n,t),t=t.sibling}function Jd(e,n,t){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(il,t)}catch{}switch(t.tag){case 5:he||wt(t,n);case 6:var r=ue,o=Ve;ue=null,xn(e,n,t),ue=r,Ve=o,ue!==null&&(Ve?(e=ue,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ue.removeChild(t.stateNode));break;case 18:ue!==null&&(Ve?(e=ue,t=t.stateNode,e.nodeType===8?Hl(e.parentNode,t):e.nodeType===1&&Hl(e,t),Sr(e)):Hl(ue,t.stateNode));break;case 4:r=ue,o=Ve,ue=t.stateNode.containerInfo,Ve=!0,xn(e,n,t),ue=r,Ve=o;break;case 0:case 11:case 14:case 15:if(!he&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Wi(t,n,i),o=o.next}while(o!==r)}xn(e,n,t);break;case 1:if(!he&&(wt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){J(t,n,s)}xn(e,n,t);break;case 21:xn(e,n,t);break;case 22:t.mode&1?(he=(r=he)||t.memoizedState!==null,xn(e,n,t),he=r):xn(e,n,t);break;default:xn(e,n,t)}}function xa(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Mg),n.forEach(function(r){var o=Yg.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function Be(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var l=e,i=n,s=i;e:for(;s!==null;){switch(s.tag){case 5:ue=s.stateNode,Ve=!1;break e;case 3:ue=s.stateNode.containerInfo,Ve=!0;break e;case 4:ue=s.stateNode.containerInfo,Ve=!0;break e}s=s.return}if(ue===null)throw Error(R(160));Jd(l,i,o),ue=null,Ve=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(c){J(o,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Zd(n,e),n=n.sibling}function Zd(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Be(n,e),Ze(e),r&4){try{pr(3,e,e.return),hl(3,e)}catch(S){J(e,e.return,S)}try{pr(5,e,e.return)}catch(S){J(e,e.return,S)}}break;case 1:Be(n,e),Ze(e),r&512&&t!==null&&wt(t,t.return);break;case 5:if(Be(n,e),Ze(e),r&512&&t!==null&&wt(t,t.return),e.flags&32){var o=e.stateNode;try{vr(o,"")}catch(S){J(e,e.return,S)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=t!==null?t.memoizedProps:l,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Cc(o,l),vi(s,i);var c=vi(s,l);for(i=0;i<a.length;i+=2){var p=a[i],d=a[i+1];p==="style"?jc(o,d):p==="dangerouslySetInnerHTML"?wc(o,d):p==="children"?vr(o,d):gs(o,p,d,c)}switch(s){case"input":fi(o,l);break;case"textarea":Sc(o,l);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var x=l.value;x!=null?Tt(o,!!l.multiple,x,!1):h!==!!l.multiple&&(l.defaultValue!=null?Tt(o,!!l.multiple,l.defaultValue,!0):Tt(o,!!l.multiple,l.multiple?[]:"",!1))}o[Er]=l}catch(S){J(e,e.return,S)}}break;case 6:if(Be(n,e),Ze(e),r&4){if(e.stateNode===null)throw Error(R(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(S){J(e,e.return,S)}}break;case 3:if(Be(n,e),Ze(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Sr(n.containerInfo)}catch(S){J(e,e.return,S)}break;case 4:Be(n,e),Ze(e);break;case 13:Be(n,e),Ze(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Gs=q())),r&4&&xa(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(he=(c=he)||p,Be(n,e),he=c):Be(n,e),Ze(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(P=e,p=e.child;p!==null;){for(d=P=p;P!==null;){switch(h=P,x=h.child,h.tag){case 0:case 11:case 14:case 15:pr(4,h,h.return);break;case 1:wt(h,h.return);var C=h.stateNode;if(typeof C.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,C.props=n.memoizedProps,C.state=n.memoizedState,C.componentWillUnmount()}catch(S){J(r,t,S)}}break;case 5:wt(h,h.return);break;case 22:if(h.memoizedState!==null){Ca(d);continue}}x!==null?(x.return=h,P=x):Ca(d)}p=p.sibling}e:for(p=null,d=e;;){if(d.tag===5){if(p===null){p=d;try{o=d.stateNode,c?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=d.stateNode,a=d.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=_c("display",i))}catch(S){J(e,e.return,S)}}}else if(d.tag===6){if(p===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(S){J(e,e.return,S)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;p===d&&(p=null),d=d.return}p===d&&(p=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Be(n,e),Ze(e),r&4&&xa(e);break;case 21:break;default:Be(n,e),Ze(e)}}function Ze(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Xd(t)){var r=t;break e}t=t.return}throw Error(R(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(vr(o,""),r.flags&=-33);var l=va(e);Ki(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,s=va(e);Yi(e,s,i);break;default:throw Error(R(161))}}catch(a){J(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function bg(e,n,t){P=e,qd(e)}function qd(e,n,t){for(var r=(e.mode&1)!==0;P!==null;){var o=P,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||so;if(!i){var s=o.alternate,a=s!==null&&s.memoizedState!==null||he;s=so;var c=he;if(so=i,(he=a)&&!c)for(P=o;P!==null;)i=P,a=i.child,i.tag===22&&i.memoizedState!==null?Sa(o):a!==null?(a.return=i,P=a):Sa(o);for(;l!==null;)P=l,qd(l),l=l.sibling;P=o,so=s,he=c}ya(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,P=l):ya(e)}}function ya(e){for(;P!==null;){var n=P;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:he||hl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!he)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:We(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&ra(n,l,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}ra(n,i,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var d=p.dehydrated;d!==null&&Sr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}he||n.flags&512&&Vi(n)}catch(h){J(n,n.return,h)}}if(n===e){P=null;break}if(t=n.sibling,t!==null){t.return=n.return,P=t;break}P=n.return}}function Ca(e){for(;P!==null;){var n=P;if(n===e){P=null;break}var t=n.sibling;if(t!==null){t.return=n.return,P=t;break}P=n.return}}function Sa(e){for(;P!==null;){var n=P;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{hl(4,n)}catch(a){J(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(a){J(n,o,a)}}var l=n.return;try{Vi(n)}catch(a){J(n,l,a)}break;case 5:var i=n.return;try{Vi(n)}catch(a){J(n,i,a)}}}catch(a){J(n,n.return,a)}if(n===e){P=null;break}var s=n.sibling;if(s!==null){s.return=n.return,P=s;break}P=n.return}}var zg=Math.ceil,Ho=mn.ReactCurrentDispatcher,Ks=mn.ReactCurrentOwner,be=mn.ReactCurrentBatchConfig,z=0,se=null,ee=null,ae=0,Ae=0,_t=Un(0),oe=0,Lr=null,lt=0,ml=0,Qs=0,hr=null,ke=null,Gs=0,$t=1/0,on=null,Wo=!1,Qi=null,Ln=null,uo=!1,_n=null,Vo=0,mr=0,Gi=null,So=-1,ko=0;function ye(){return z&6?q():So!==-1?So:So=q()}function Dn(e){return e.mode&1?z&2&&ae!==0?ae&-ae:kg.transition!==null?(ko===0&&(ko=Fc()),ko):(e=U,e!==0||(e=window.event,e=e===void 0?16:Wc(e.type)),e):1}function Ge(e,n,t,r){if(50<mr)throw mr=0,Gi=null,Error(R(185));$r(e,t,r),(!(z&2)||e!==se)&&(e===se&&(!(z&2)&&(ml|=t),oe===4&&kn(e,ae)),Re(e,r),t===1&&z===0&&!(n.mode&1)&&($t=q()+500,dl&&Bn()))}function Re(e,n){var t=e.callbackNode;k0(e,n);var r=To(e,e===se?ae:0);if(r===0)t!==null&&Nu(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Nu(t),n===1)e.tag===0?Sg(ka.bind(null,e)):ad(ka.bind(null,e)),vg(function(){!(z&6)&&Bn()}),t=null;else{switch(bc(r)){case 1:t=Ss;break;case 4:t=Ic;break;case 16:t=Ro;break;case 536870912:t=Mc;break;default:t=Ro}t=uf(t,ef.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function ef(e,n){if(So=-1,ko=0,z&6)throw Error(R(327));var t=e.callbackNode;if(Dt()&&e.callbackNode!==t)return null;var r=To(e,e===se?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Yo(e,r);else{n=r;var o=z;z|=2;var l=tf();(se!==e||ae!==n)&&(on=null,$t=q()+500,qn(e,n));do try{Bg();break}catch(s){nf(e,s)}while(!0);Os(),Ho.current=l,z=o,ee!==null?n=0:(se=null,ae=0,n=oe)}if(n!==0){if(n===2&&(o=ki(e),o!==0&&(r=o,n=Xi(e,o))),n===1)throw t=Lr,qn(e,0),kn(e,r),Re(e,q()),t;if(n===6)kn(e,r);else{if(o=e.current.alternate,!(r&30)&&!$g(o)&&(n=Yo(e,r),n===2&&(l=ki(e),l!==0&&(r=l,n=Xi(e,l))),n===1))throw t=Lr,qn(e,0),kn(e,r),Re(e,q()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(R(345));case 2:Qn(e,ke,on);break;case 3:if(kn(e,r),(r&130023424)===r&&(n=Gs+500-q(),10<n)){if(To(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ni(Qn.bind(null,e,ke,on),n);break}Qn(e,ke,on);break;case 4:if(kn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var i=31-Qe(r);l=1<<i,i=n[i],i>o&&(o=i),r&=~l}if(r=o,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zg(r/1960))-r,10<r){e.timeoutHandle=Ni(Qn.bind(null,e,ke,on),r);break}Qn(e,ke,on);break;case 5:Qn(e,ke,on);break;default:throw Error(R(329))}}}return Re(e,q()),e.callbackNode===t?ef.bind(null,e):null}function Xi(e,n){var t=hr;return e.current.memoizedState.isDehydrated&&(qn(e,n).flags|=256),e=Yo(e,n),e!==2&&(n=ke,ke=t,n!==null&&Ji(n)),e}function Ji(e){ke===null?ke=e:ke.push.apply(ke,e)}function $g(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],l=o.getSnapshot;o=o.value;try{if(!Xe(l(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function kn(e,n){for(n&=~Qs,n&=~ml,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Qe(n),r=1<<t;e[t]=-1,n&=~r}}function ka(e){if(z&6)throw Error(R(327));Dt();var n=To(e,0);if(!(n&1))return Re(e,q()),null;var t=Yo(e,n);if(e.tag!==0&&t===2){var r=ki(e);r!==0&&(n=r,t=Xi(e,r))}if(t===1)throw t=Lr,qn(e,0),kn(e,n),Re(e,q()),t;if(t===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Qn(e,ke,on),Re(e,q()),null}function Xs(e,n){var t=z;z|=1;try{return e(n)}finally{z=t,z===0&&($t=q()+500,dl&&Bn())}}function it(e){_n!==null&&_n.tag===0&&!(z&6)&&Dt();var n=z;z|=1;var t=be.transition,r=U;try{if(be.transition=null,U=1,e)return e()}finally{U=r,be.transition=t,z=n,!(z&6)&&Bn()}}function Js(){Ae=_t.current,W(_t)}function qn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,gg(t)),ee!==null)for(t=ee.return;t!==null;){var r=t;switch(Ps(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Do();break;case 3:bt(),W(je),W(me),$s();break;case 5:zs(r);break;case 4:bt();break;case 13:W(K);break;case 19:W(K);break;case 10:Is(r.type._context);break;case 22:case 23:Js()}t=t.return}if(se=e,ee=e=On(e.current,null),ae=Ae=n,oe=0,Lr=null,Qs=ml=lt=0,ke=hr=null,Xn!==null){for(n=0;n<Xn.length;n++)if(t=Xn[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,l=t.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}t.pending=r}Xn=null}return e}function nf(e,n){do{var t=ee;try{if(Os(),xo.current=Bo,Uo){for(var r=Q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Uo=!1}if(ot=0,ie=te=Q=null,fr=!1,Ar=0,Ks.current=null,t===null||t.return===null){oe=1,Lr=n,ee=null;break}e:{var l=e,i=t.return,s=t,a=n;if(n=ae,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,p=s,d=p.tag;if(!(p.mode&1)&&(d===0||d===11||d===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var x=aa(i);if(x!==null){x.flags&=-257,ca(x,i,s,l,n),x.mode&1&&ua(l,c,n),n=x,a=c;var C=n.updateQueue;if(C===null){var S=new Set;S.add(a),n.updateQueue=S}else C.add(a);break e}else{if(!(n&1)){ua(l,c,n),Zs();break e}a=Error(R(426))}}else if(Y&&s.mode&1){var j=aa(i);if(j!==null){!(j.flags&65536)&&(j.flags|=256),ca(j,i,s,l,n),Ls(zt(a,s));break e}}l=a=zt(a,s),oe!==4&&(oe=2),hr===null?hr=[l]:hr.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var m=bd(l,a,n);ta(l,m);break e;case 1:s=a;var f=l.type,g=l.stateNode;if(!(l.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ln===null||!Ln.has(g)))){l.flags|=65536,n&=-n,l.lanes|=n;var k=zd(l,s,n);ta(l,k);break e}}l=l.return}while(l!==null)}of(t)}catch(A){n=A,ee===t&&t!==null&&(ee=t=t.return);continue}break}while(!0)}function tf(){var e=Ho.current;return Ho.current=Bo,e===null?Bo:e}function Zs(){(oe===0||oe===3||oe===2)&&(oe=4),se===null||!(lt&268435455)&&!(ml&268435455)||kn(se,ae)}function Yo(e,n){var t=z;z|=2;var r=tf();(se!==e||ae!==n)&&(on=null,qn(e,n));do try{Ug();break}catch(o){nf(e,o)}while(!0);if(Os(),z=t,Ho.current=r,ee!==null)throw Error(R(261));return se=null,ae=0,oe}function Ug(){for(;ee!==null;)rf(ee)}function Bg(){for(;ee!==null&&!p0();)rf(ee)}function rf(e){var n=sf(e.alternate,e,Ae);e.memoizedProps=e.pendingProps,n===null?of(e):ee=n,Ks.current=null}function of(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Ig(t,n),t!==null){t.flags&=32767,ee=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,ee=null;return}}else if(t=Og(t,n,Ae),t!==null){ee=t;return}if(n=n.sibling,n!==null){ee=n;return}ee=n=e}while(n!==null);oe===0&&(oe=5)}function Qn(e,n,t){var r=U,o=be.transition;try{be.transition=null,U=1,Hg(e,n,t,r)}finally{be.transition=o,U=r}return null}function Hg(e,n,t,r){do Dt();while(_n!==null);if(z&6)throw Error(R(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(w0(e,l),e===se&&(ee=se=null,ae=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||uo||(uo=!0,uf(Ro,function(){return Dt(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=be.transition,be.transition=null;var i=U;U=1;var s=z;z|=4,Ks.current=null,Fg(e,t),Zd(t,e),ag(Ti),Ao=!!Ri,Ti=Ri=null,e.current=t,bg(t),h0(),z=s,U=i,be.transition=l}else e.current=t;if(uo&&(uo=!1,_n=e,Vo=o),l=e.pendingLanes,l===0&&(Ln=null),v0(t.stateNode),Re(e,q()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(Wo)throw Wo=!1,e=Qi,Qi=null,e;return Vo&1&&e.tag!==0&&Dt(),l=e.pendingLanes,l&1?e===Gi?mr++:(mr=0,Gi=e):mr=0,Bn(),null}function Dt(){if(_n!==null){var e=bc(Vo),n=be.transition,t=U;try{if(be.transition=null,U=16>e?16:e,_n===null)var r=!1;else{if(e=_n,_n=null,Vo=0,z&6)throw Error(R(331));var o=z;for(z|=4,P=e.current;P!==null;){var l=P,i=l.child;if(P.flags&16){var s=l.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(P=c;P!==null;){var p=P;switch(p.tag){case 0:case 11:case 15:pr(8,p,l)}var d=p.child;if(d!==null)d.return=p,P=d;else for(;P!==null;){p=P;var h=p.sibling,x=p.return;if(Gd(p),p===c){P=null;break}if(h!==null){h.return=x,P=h;break}P=x}}}var C=l.alternate;if(C!==null){var S=C.child;if(S!==null){C.child=null;do{var j=S.sibling;S.sibling=null,S=j}while(S!==null)}}P=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,P=i;else e:for(;P!==null;){if(l=P,l.flags&2048)switch(l.tag){case 0:case 11:case 15:pr(9,l,l.return)}var m=l.sibling;if(m!==null){m.return=l.return,P=m;break e}P=l.return}}var f=e.current;for(P=f;P!==null;){i=P;var g=i.child;if(i.subtreeFlags&2064&&g!==null)g.return=i,P=g;else e:for(i=f;P!==null;){if(s=P,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:hl(9,s)}}catch(A){J(s,s.return,A)}if(s===i){P=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,P=k;break e}P=s.return}}if(z=o,Bn(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(il,e)}catch{}r=!0}return r}finally{U=t,be.transition=n}}return!1}function wa(e,n,t){n=zt(t,n),n=bd(e,n,1),e=Pn(e,n,1),n=ye(),e!==null&&($r(e,1,n),Re(e,n))}function J(e,n,t){if(e.tag===3)wa(e,e,t);else for(;n!==null;){if(n.tag===3){wa(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ln===null||!Ln.has(r))){e=zt(t,e),e=zd(n,e,1),n=Pn(n,e,1),e=ye(),n!==null&&($r(n,1,e),Re(n,e));break}}n=n.return}}function Wg(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ye(),e.pingedLanes|=e.suspendedLanes&t,se===e&&(ae&t)===t&&(oe===4||oe===3&&(ae&130023424)===ae&&500>q()-Gs?qn(e,0):Qs|=t),Re(e,n)}function lf(e,n){n===0&&(e.mode&1?(n=Zr,Zr<<=1,!(Zr&130023424)&&(Zr=4194304)):n=1);var t=ye();e=fn(e,n),e!==null&&($r(e,n,t),Re(e,t))}function Vg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),lf(e,t)}function Yg(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(n),lf(e,t)}var sf;sf=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||je.current)we=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return we=!1,Dg(e,n,t);we=!!(e.flags&131072)}else we=!1,Y&&n.flags&1048576&&cd(n,Mo,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Co(e,n),e=n.pendingProps;var o=It(n,me.current);Lt(n,t),o=Bs(null,n,r,e,o,t);var l=Hs();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ee(r)?(l=!0,Oo(n)):l=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Fs(n),o.updater=pl,n.stateNode=o,o._reactInternals=n,Fi(n,r,e,t),n=$i(null,n,r,!0,l,t)):(n.tag=0,Y&&l&&Ns(n),ve(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Co(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=Qg(r),e=We(r,e),o){case 0:n=zi(null,n,r,e,t);break e;case 1:n=pa(null,n,r,e,t);break e;case 11:n=da(null,n,r,e,t);break e;case 14:n=fa(null,n,r,We(r.type,e),t);break e}throw Error(R(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:We(r,o),zi(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:We(r,o),pa(e,n,r,o,t);case 3:e:{if(Hd(n),e===null)throw Error(R(387));r=n.pendingProps,l=n.memoizedState,o=l.element,gd(e,n),zo(n,r,null,t);var i=n.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){o=zt(Error(R(423)),n),n=ha(e,n,r,t,o);break e}else if(r!==o){o=zt(Error(R(424)),n),n=ha(e,n,r,t,o);break e}else for(Ne=Nn(n.stateNode.containerInfo.firstChild),Pe=n,Y=!0,Ye=null,t=hd(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Mt(),r===o){n=pn(e,n,t);break e}ve(e,n,r,t)}n=n.child}return n;case 5:return vd(n),e===null&&Oi(n),r=n.type,o=n.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Ai(r,o)?i=null:l!==null&&Ai(r,l)&&(n.flags|=32),Bd(e,n),ve(e,n,i,t),n.child;case 6:return e===null&&Oi(n),null;case 13:return Wd(e,n,t);case 4:return bs(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ft(n,null,r,t):ve(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:We(r,o),da(e,n,r,o,t);case 7:return ve(e,n,n.pendingProps,t),n.child;case 8:return ve(e,n,n.pendingProps.children,t),n.child;case 12:return ve(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,l=n.memoizedProps,i=o.value,B(Fo,r._currentValue),r._currentValue=i,l!==null)if(Xe(l.value,i)){if(l.children===o.children&&!je.current){n=pn(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var s=l.dependencies;if(s!==null){i=l.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=an(-1,t&-t),a.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?a.next=a:(a.next=p.next,p.next=a),c.pending=a}}l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),Ii(l.return,t,n),s.lanes|=t;break}a=a.next}}else if(l.tag===10)i=l.type===n.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(R(341));i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),Ii(i,t,n),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===n){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}ve(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,Lt(n,t),o=ze(o),r=r(o),n.flags|=1,ve(e,n,r,t),n.child;case 14:return r=n.type,o=We(r,n.pendingProps),o=We(r.type,o),fa(e,n,r,o,t);case 15:return $d(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:We(r,o),Co(e,n),n.tag=1,Ee(r)?(e=!0,Oo(n)):e=!1,Lt(n,t),Fd(n,r,o),Fi(n,r,o,t),$i(null,n,r,!0,e,t);case 19:return Vd(e,n,t);case 22:return Ud(e,n,t)}throw Error(R(156,n.tag))};function uf(e,n){return Oc(e,n)}function Kg(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,n,t,r){return new Kg(e,n,t,r)}function qs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qg(e){if(typeof e=="function")return qs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xs)return 11;if(e===ys)return 14}return 2}function On(e,n){var t=e.alternate;return t===null?(t=Fe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function wo(e,n,t,r,o,l){var i=2;if(r=e,typeof e=="function")qs(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case ht:return et(t.children,o,l,n);case vs:i=8,o|=8;break;case si:return e=Fe(12,t,n,o|2),e.elementType=si,e.lanes=l,e;case ui:return e=Fe(13,t,n,o),e.elementType=ui,e.lanes=l,e;case ai:return e=Fe(19,t,n,o),e.elementType=ai,e.lanes=l,e;case vc:return gl(t,o,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mc:i=10;break e;case gc:i=9;break e;case xs:i=11;break e;case ys:i=14;break e;case yn:i=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return n=Fe(i,t,n,o),n.elementType=e,n.type=r,n.lanes=l,n}function et(e,n,t,r){return e=Fe(7,e,r,n),e.lanes=t,e}function gl(e,n,t,r){return e=Fe(22,e,r,n),e.elementType=vc,e.lanes=t,e.stateNode={isHidden:!1},e}function Jl(e,n,t){return e=Fe(6,e,null,n),e.lanes=t,e}function Zl(e,n,t){return n=Fe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Gg(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ll(0),this.expirationTimes=Ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ll(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function eu(e,n,t,r,o,l,i,s,a){return e=new Gg(e,n,t,s,a),n===1?(n=1,l===!0&&(n|=8)):n=0,l=Fe(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fs(l),e}function Xg(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function af(e){if(!e)return bn;e=e._reactInternals;e:{if(ut(e)!==e||e.tag!==1)throw Error(R(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ee(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(R(171))}if(e.tag===1){var t=e.type;if(Ee(t))return ud(e,t,n)}return n}function cf(e,n,t,r,o,l,i,s,a){return e=eu(t,r,!0,e,o,l,i,s,a),e.context=af(null),t=e.current,r=ye(),o=Dn(t),l=an(r,o),l.callback=n??null,Pn(t,l,o),e.current.lanes=o,$r(e,o,r),Re(e,r),e}function vl(e,n,t,r){var o=n.current,l=ye(),i=Dn(o);return t=af(t),n.context===null?n.context=t:n.pendingContext=t,n=an(l,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Pn(o,n,i),e!==null&&(Ge(e,o,i,l),vo(e,o,i)),i}function Ko(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _a(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function nu(e,n){_a(e,n),(e=e.alternate)&&_a(e,n)}function Jg(){return null}var df=typeof reportError=="function"?reportError:function(e){console.error(e)};function tu(e){this._internalRoot=e}xl.prototype.render=tu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(R(409));vl(e,n,null,null)};xl.prototype.unmount=tu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;it(function(){vl(null,e,null,null)}),n[dn]=null}};function xl(e){this._internalRoot=e}xl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Uc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Sn.length&&n!==0&&n<Sn[t].priority;t++);Sn.splice(t,0,e),t===0&&Hc(e)}};function ru(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ja(){}function Zg(e,n,t,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var c=Ko(i);l.call(c)}}var i=cf(n,r,e,0,null,!1,!1,"",ja);return e._reactRootContainer=i,e[dn]=i.current,_r(e.nodeType===8?e.parentNode:e),it(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=Ko(a);s.call(c)}}var a=eu(e,0,!1,null,null,!1,!1,"",ja);return e._reactRootContainer=a,e[dn]=a.current,_r(e.nodeType===8?e.parentNode:e),it(function(){vl(n,a,t,r)}),a}function Cl(e,n,t,r,o){var l=t._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var s=o;o=function(){var a=Ko(i);s.call(a)}}vl(n,i,e,o)}else i=Zg(t,n,e,o,r);return Ko(i)}zc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=rr(n.pendingLanes);t!==0&&(ks(n,t|1),Re(n,q()),!(z&6)&&($t=q()+500,Bn()))}break;case 13:it(function(){var r=fn(e,1);if(r!==null){var o=ye();Ge(r,e,1,o)}}),nu(e,1)}};ws=function(e){if(e.tag===13){var n=fn(e,134217728);if(n!==null){var t=ye();Ge(n,e,134217728,t)}nu(e,134217728)}};$c=function(e){if(e.tag===13){var n=Dn(e),t=fn(e,n);if(t!==null){var r=ye();Ge(t,e,n,r)}nu(e,n)}};Uc=function(){return U};Bc=function(e,n){var t=U;try{return U=e,n()}finally{U=t}};yi=function(e,n,t){switch(n){case"input":if(fi(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=cl(r);if(!o)throw Error(R(90));yc(r),fi(r,o)}}}break;case"textarea":Sc(e,t);break;case"select":n=t.value,n!=null&&Tt(e,!!t.multiple,n,!1)}};Tc=Xs;Ac=it;var qg={usingClientEntryPoint:!1,Events:[Br,xt,cl,Ec,Rc,Xs]},er={findFiberByHostInstance:Gn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ev={bundleType:er.bundleType,version:er.version,rendererPackageName:er.rendererPackageName,rendererConfig:er.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Lc(e),e===null?null:e.stateNode},findFiberByHostInstance:er.findFiberByHostInstance||Jg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ao.isDisabled&&ao.supportsFiber)try{il=ao.inject(ev),nn=ao}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qg;De.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ru(n))throw Error(R(200));return Xg(e,n,null,t)};De.createRoot=function(e,n){if(!ru(e))throw Error(R(299));var t=!1,r="",o=df;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=eu(e,1,!1,null,null,t,!1,r,o),e[dn]=n.current,_r(e.nodeType===8?e.parentNode:e),new tu(n)};De.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=Lc(n),e=e===null?null:e.stateNode,e};De.flushSync=function(e){return it(e)};De.hydrate=function(e,n,t){if(!yl(n))throw Error(R(200));return Cl(null,e,n,!0,t)};De.hydrateRoot=function(e,n,t){if(!ru(e))throw Error(R(405));var r=t!=null&&t.hydratedSources||null,o=!1,l="",i=df;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=cf(n,null,e,1,t??null,o,!1,l,i),e[dn]=n.current,_r(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new xl(n)};De.render=function(e,n,t){if(!yl(n))throw Error(R(200));return Cl(null,e,n,!1,t)};De.unmountComponentAtNode=function(e){if(!yl(e))throw Error(R(40));return e._reactRootContainer?(it(function(){Cl(null,null,e,!1,function(){e._reactRootContainer=null,e[dn]=null})}),!0):!1};De.unstable_batchedUpdates=Xs;De.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!yl(t))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return Cl(e,n,t,!1,r)};De.version="18.3.1-next-f1338f8080-20240426";function ff(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ff)}catch(e){console.error(e)}}ff(),dc.exports=De;var pf=dc.exports;const ou=as(pf);var hf,Ea=pf;hf=Ea.createRoot,Ea.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dr(){return Dr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Dr.apply(this,arguments)}var jn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(jn||(jn={}));const Ra="popstate";function nv(e){e===void 0&&(e={});function n(o,l){let{pathname:i="/",search:s="",hash:a=""}=at(o.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),Zi("",{pathname:i,search:s,hash:a},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(o,l){let i=o.document.querySelector("base"),s="";if(i&&i.getAttribute("href")){let a=o.location.href,c=a.indexOf("#");s=c===-1?a:a.slice(0,c)}return s+"#"+(typeof l=="string"?l:Qo(l))}function r(o,l){lu(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return rv(n,t,r,e)}function G(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function lu(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function tv(){return Math.random().toString(36).substr(2,8)}function Ta(e,n){return{usr:e.state,key:e.key,idx:n}}function Zi(e,n,t,r){return t===void 0&&(t=null),Dr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?at(n):n,{state:t,key:n&&n.key||r||tv()})}function Qo(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function at(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function rv(e,n,t,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,i=o.history,s=jn.Pop,a=null,c=p();c==null&&(c=0,i.replaceState(Dr({},i.state,{idx:c}),""));function p(){return(i.state||{idx:null}).idx}function d(){s=jn.Pop;let j=p(),m=j==null?null:j-c;c=j,a&&a({action:s,location:S.location,delta:m})}function h(j,m){s=jn.Push;let f=Zi(S.location,j,m);t&&t(f,j),c=p()+1;let g=Ta(f,c),k=S.createHref(f);try{i.pushState(g,"",k)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;o.location.assign(k)}l&&a&&a({action:s,location:S.location,delta:1})}function x(j,m){s=jn.Replace;let f=Zi(S.location,j,m);t&&t(f,j),c=p();let g=Ta(f,c),k=S.createHref(f);i.replaceState(g,"",k),l&&a&&a({action:s,location:S.location,delta:0})}function C(j){let m=o.location.origin!=="null"?o.location.origin:o.location.href,f=typeof j=="string"?j:Qo(j);return f=f.replace(/ $/,"%20"),G(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let S={get action(){return s},get location(){return e(o,i)},listen(j){if(a)throw new Error("A history only accepts one active listener");return o.addEventListener(Ra,d),a=j,()=>{o.removeEventListener(Ra,d),a=null}},createHref(j){return n(o,j)},createURL:C,encodeLocation(j){let m=C(j);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:x,go(j){return i.go(j)}};return S}var Aa;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Aa||(Aa={}));function ov(e,n,t){return t===void 0&&(t="/"),lv(e,n,t,!1)}function lv(e,n,t,r){let o=typeof n=="string"?at(n):n,l=Ut(o.pathname||"/",t);if(l==null)return null;let i=mf(e);iv(i);let s=null;for(let a=0;s==null&&a<i.length;++a){let c=vv(l);s=mv(i[a],c,r)}return s}function mf(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let o=(l,i,s)=>{let a={relativePath:s===void 0?l.path||"":s,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};a.relativePath.startsWith("/")&&(G(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let c=In([r,a.relativePath]),p=t.concat(a);l.children&&l.children.length>0&&(G(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),mf(l.children,n,p,c)),!(l.path==null&&!l.index)&&n.push({path:c,score:pv(c,l.index),routesMeta:p})};return e.forEach((l,i)=>{var s;if(l.path===""||!((s=l.path)!=null&&s.includes("?")))o(l,i);else for(let a of gf(l.path))o(l,i,a)}),n}function gf(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let i=gf(r.join("/")),s=[];return s.push(...i.map(a=>a===""?l:[l,a].join("/"))),o&&s.push(...i),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function iv(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:hv(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const sv=/^:[\w-]+$/,uv=3,av=2,cv=1,dv=10,fv=-2,Na=e=>e==="*";function pv(e,n){let t=e.split("/"),r=t.length;return t.some(Na)&&(r+=fv),n&&(r+=av),t.filter(o=>!Na(o)).reduce((o,l)=>o+(sv.test(l)?uv:l===""?cv:dv),r)}function hv(e,n){return e.length===n.length&&e.slice(0,-1).every((r,o)=>r===n[o])?e[e.length-1]-n[n.length-1]:0}function mv(e,n,t){let{routesMeta:r}=e,o={},l="/",i=[];for(let s=0;s<r.length;++s){let a=r[s],c=s===r.length-1,p=l==="/"?n:n.slice(l.length)||"/",d=Go({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},p),h=a.route;if(!d&&c&&t&&!r[r.length-1].route.index&&(d=Go({path:a.relativePath,caseSensitive:a.caseSensitive,end:!1},p)),!d)return null;Object.assign(o,d.params),i.push({params:o,pathname:In([l,d.pathname]),pathnameBase:Sv(In([l,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(l=In([l,d.pathnameBase]))}return i}function Go(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=gv(e.path,e.caseSensitive,e.end),o=n.match(t);if(!o)return null;let l=o[0],i=l.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((c,p,d)=>{let{paramName:h,isOptional:x}=p;if(h==="*"){let S=s[d]||"";i=l.slice(0,l.length-S.length).replace(/(.)\/+$/,"$1")}const C=s[d];return x&&!C?c[h]=void 0:c[h]=(C||"").replace(/%2F/g,"/"),c},{}),pathname:l,pathnameBase:i,pattern:e}}function gv(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),lu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,n?void 0:"i"),r]}function vv(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return lu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Ut(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function xv(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:o=""}=typeof e=="string"?at(e):e;return{pathname:t?t.startsWith("/")?t:yv(t,n):n,search:kv(r),hash:wv(o)}}function yv(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function ql(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Cv(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function iu(e,n){let t=Cv(e);return n?t.map((r,o)=>o===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function su(e,n,t,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=at(e):(o=Dr({},e),G(!o.pathname||!o.pathname.includes("?"),ql("?","pathname","search",o)),G(!o.pathname||!o.pathname.includes("#"),ql("#","pathname","hash",o)),G(!o.search||!o.search.includes("#"),ql("#","search","hash",o)));let l=e===""||o.pathname==="",i=l?"/":o.pathname,s;if(i==null)s=t;else{let d=n.length-1;if(!r&&i.startsWith("..")){let h=i.split("/");for(;h[0]==="..";)h.shift(),d-=1;o.pathname=h.join("/")}s=d>=0?n[d]:"/"}let a=xv(o,s),c=i&&i!=="/"&&i.endsWith("/"),p=(l||i===".")&&t.endsWith("/");return!a.pathname.endsWith("/")&&(c||p)&&(a.pathname+="/"),a}const In=e=>e.join("/").replace(/\/\/+/g,"/"),Sv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),kv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,wv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function _v(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const vf=["post","put","patch","delete"];new Set(vf);const jv=["get",...vf];new Set(jv);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Or(){return Or=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Or.apply(this,arguments)}const Sl=w.createContext(null),xf=w.createContext(null),gn=w.createContext(null),kl=w.createContext(null),Hn=w.createContext({outlet:null,matches:[],isDataRoute:!1}),yf=w.createContext(null);function Ev(e,n){let{relative:t}=n===void 0?{}:n;Yt()||G(!1);let{basename:r,navigator:o}=w.useContext(gn),{hash:l,pathname:i,search:s}=_l(e,{relative:t}),a=i;return r!=="/"&&(a=i==="/"?r:In([r,i])),o.createHref({pathname:a,search:s,hash:l})}function Yt(){return w.useContext(kl)!=null}function Wn(){return Yt()||G(!1),w.useContext(kl).location}function Cf(e){w.useContext(gn).static||w.useLayoutEffect(e)}function wl(){let{isDataRoute:e}=w.useContext(Hn);return e?zv():Rv()}function Rv(){Yt()||G(!1);let e=w.useContext(Sl),{basename:n,future:t,navigator:r}=w.useContext(gn),{matches:o}=w.useContext(Hn),{pathname:l}=Wn(),i=JSON.stringify(iu(o,t.v7_relativeSplatPath)),s=w.useRef(!1);return Cf(()=>{s.current=!0}),w.useCallback(function(c,p){if(p===void 0&&(p={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let d=su(c,JSON.parse(i),l,p.relative==="path");e==null&&n!=="/"&&(d.pathname=d.pathname==="/"?n:In([n,d.pathname])),(p.replace?r.replace:r.push)(d,p.state,p)},[n,r,i,l,e])}function _l(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=w.useContext(gn),{matches:o}=w.useContext(Hn),{pathname:l}=Wn(),i=JSON.stringify(iu(o,r.v7_relativeSplatPath));return w.useMemo(()=>su(e,JSON.parse(i),l,t==="path"),[e,i,l,t])}function Tv(e,n){return Av(e,n)}function Av(e,n,t,r){Yt()||G(!1);let{navigator:o}=w.useContext(gn),{matches:l}=w.useContext(Hn),i=l[l.length-1],s=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let c=Wn(),p;if(n){var d;let j=typeof n=="string"?at(n):n;a==="/"||(d=j.pathname)!=null&&d.startsWith(a)||G(!1),p=j}else p=c;let h=p.pathname||"/",x=h;if(a!=="/"){let j=a.replace(/^\//,"").split("/");x="/"+h.replace(/^\//,"").split("/").slice(j.length).join("/")}let C=ov(e,{pathname:x}),S=Ov(C&&C.map(j=>Object.assign({},j,{params:Object.assign({},s,j.params),pathname:In([a,o.encodeLocation?o.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?a:In([a,o.encodeLocation?o.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),l,t,r);return n&&S?w.createElement(kl.Provider,{value:{location:Or({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:jn.Pop}},S):S}function Nv(){let e=bv(),n=_v(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},n),t?w.createElement("pre",{style:o},t):null,null)}const Pv=w.createElement(Nv,null);class Lv extends w.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?w.createElement(Hn.Provider,{value:this.props.routeContext},w.createElement(yf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Dv(e){let{routeContext:n,match:t,children:r}=e,o=w.useContext(Sl);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),w.createElement(Hn.Provider,{value:n},r)}function Ov(e,n,t,r){var o;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var l;if(!t)return null;if(t.errors)e=t.matches;else if((l=r)!=null&&l.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let i=e,s=(o=t)==null?void 0:o.errors;if(s!=null){let p=i.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);p>=0||G(!1),i=i.slice(0,Math.min(i.length,p+1))}let a=!1,c=-1;if(t&&r&&r.v7_partialHydration)for(let p=0;p<i.length;p++){let d=i[p];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=p),d.route.id){let{loaderData:h,errors:x}=t,C=d.route.loader&&h[d.route.id]===void 0&&(!x||x[d.route.id]===void 0);if(d.route.lazy||C){a=!0,c>=0?i=i.slice(0,c+1):i=[i[0]];break}}}return i.reduceRight((p,d,h)=>{let x,C=!1,S=null,j=null;t&&(x=s&&d.route.id?s[d.route.id]:void 0,S=d.route.errorElement||Pv,a&&(c<0&&h===0?(C=!0,j=null):c===h&&(C=!0,j=d.route.hydrateFallbackElement||null)));let m=n.concat(i.slice(0,h+1)),f=()=>{let g;return x?g=S:C?g=j:d.route.Component?g=w.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=p,w.createElement(Dv,{match:d,routeContext:{outlet:p,matches:m,isDataRoute:t!=null},children:g})};return t&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?w.createElement(Lv,{location:t.location,revalidation:t.revalidation,component:S,error:x,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()},null)}var Sf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Sf||{}),Xo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Xo||{});function Iv(e){let n=w.useContext(Sl);return n||G(!1),n}function Mv(e){let n=w.useContext(xf);return n||G(!1),n}function Fv(e){let n=w.useContext(Hn);return n||G(!1),n}function kf(e){let n=Fv(),t=n.matches[n.matches.length-1];return t.route.id||G(!1),t.route.id}function bv(){var e;let n=w.useContext(yf),t=Mv(Xo.UseRouteError),r=kf(Xo.UseRouteError);return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function zv(){let{router:e}=Iv(Sf.UseNavigateStable),n=kf(Xo.UseNavigateStable),t=w.useRef(!1);return Cf(()=>{t.current=!0}),w.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Or({fromRouteId:n},l)))},[e,n])}function $v(e){let{to:n,replace:t,state:r,relative:o}=e;Yt()||G(!1);let{future:l,static:i}=w.useContext(gn),{matches:s}=w.useContext(Hn),{pathname:a}=Wn(),c=wl(),p=su(n,iu(s,l.v7_relativeSplatPath),a,o==="path"),d=JSON.stringify(p);return w.useEffect(()=>c(JSON.parse(d),{replace:t,state:r,relative:o}),[c,d,o,t,r]),null}function qi(e){G(!1)}function Uv(e){let{basename:n="/",children:t=null,location:r,navigationType:o=jn.Pop,navigator:l,static:i=!1,future:s}=e;Yt()&&G(!1);let a=n.replace(/^\/*/,"/"),c=w.useMemo(()=>({basename:a,navigator:l,static:i,future:Or({v7_relativeSplatPath:!1},s)}),[a,s,l,i]);typeof r=="string"&&(r=at(r));let{pathname:p="/",search:d="",hash:h="",state:x=null,key:C="default"}=r,S=w.useMemo(()=>{let j=Ut(p,a);return j==null?null:{location:{pathname:j,search:d,hash:h,state:x,key:C},navigationType:o}},[a,p,d,h,x,C,o]);return S==null?null:w.createElement(gn.Provider,{value:c},w.createElement(kl.Provider,{children:t,value:S}))}function Bv(e){let{children:n,location:t}=e;return Tv(es(n),t)}new Promise(()=>{});function es(e,n){n===void 0&&(n=[]);let t=[];return w.Children.forEach(e,(r,o)=>{if(!w.isValidElement(r))return;let l=[...n,o];if(r.type===w.Fragment){t.push.apply(t,es(r.props.children,l));return}r.type!==qi&&G(!1),!r.props.index||!r.props.children||G(!1);let i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=es(r.props.children,l)),t.push(i)}),t}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jo(){return Jo=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Jo.apply(this,arguments)}function wf(e,n){if(e==null)return{};var t={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}function Hv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Wv(e,n){return e.button===0&&(!n||n==="_self")&&!Hv(e)}function ns(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((n,t)=>{let r=e[t];return n.concat(Array.isArray(r)?r.map(o=>[t,o]):[[t,r]])},[]))}function Vv(e,n){let t=ns(e);return n&&n.forEach((r,o)=>{t.has(o)||n.getAll(o).forEach(l=>{t.append(o,l)})}),t}const Yv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Kv=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Qv="6";try{window.__reactRouterVersion=Qv}catch{}const Gv=w.createContext({isTransitioning:!1}),Xv="startTransition",Pa=Wm[Xv];function Jv(e){let{basename:n,children:t,future:r,window:o}=e,l=w.useRef();l.current==null&&(l.current=nv({window:o,v5Compat:!0}));let i=l.current,[s,a]=w.useState({action:i.action,location:i.location}),{v7_startTransition:c}=r||{},p=w.useCallback(d=>{c&&Pa?Pa(()=>a(d)):a(d)},[a,c]);return w.useLayoutEffect(()=>i.listen(p),[i,p]),w.createElement(Uv,{basename:n,children:t,location:s.location,navigationType:s.action,navigator:i,future:r})}const Zv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ex=w.forwardRef(function(n,t){let{onClick:r,relative:o,reloadDocument:l,replace:i,state:s,target:a,to:c,preventScrollReset:p,viewTransition:d}=n,h=wf(n,Yv),{basename:x}=w.useContext(gn),C,S=!1;if(typeof c=="string"&&qv.test(c)&&(C=c,Zv))try{let g=new URL(window.location.href),k=c.startsWith("//")?new URL(g.protocol+c):new URL(c),A=Ut(k.pathname,x);k.origin===g.origin&&A!=null?c=A+k.search+k.hash:S=!0}catch{}let j=Ev(c,{relative:o}),m=rx(c,{replace:i,state:s,target:a,preventScrollReset:p,relative:o,viewTransition:d});function f(g){r&&r(g),g.defaultPrevented||m(g)}return w.createElement("a",Jo({},h,{href:C||j,onClick:S||l?r:f,ref:t,target:a}))}),nx=w.forwardRef(function(n,t){let{"aria-current":r="page",caseSensitive:o=!1,className:l="",end:i=!1,style:s,to:a,viewTransition:c,children:p}=n,d=wf(n,Kv),h=_l(a,{relative:d.relative}),x=Wn(),C=w.useContext(xf),{navigator:S,basename:j}=w.useContext(gn),m=C!=null&&lx(h)&&c===!0,f=S.encodeLocation?S.encodeLocation(h).pathname:h.pathname,g=x.pathname,k=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;o||(g=g.toLowerCase(),k=k?k.toLowerCase():null,f=f.toLowerCase()),k&&j&&(k=Ut(k,j)||k);const A=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let T=g===f||!i&&g.startsWith(f)&&g.charAt(A)==="/",v=k!=null&&(k===f||!i&&k.startsWith(f)&&k.charAt(f.length)==="/"),y={isActive:T,isPending:v,isTransitioning:m},_=T?r:void 0,E;typeof l=="function"?E=l(y):E=[l,T?"active":null,v?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let L=typeof s=="function"?s(y):s;return w.createElement(ex,Jo({},d,{"aria-current":_,className:E,ref:t,style:L,to:a,viewTransition:c}),typeof p=="function"?p(y):p)});var ts;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ts||(ts={}));var La;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(La||(La={}));function tx(e){let n=w.useContext(Sl);return n||G(!1),n}function rx(e,n){let{target:t,replace:r,state:o,preventScrollReset:l,relative:i,viewTransition:s}=n===void 0?{}:n,a=wl(),c=Wn(),p=_l(e,{relative:i});return w.useCallback(d=>{if(Wv(d,t)){d.preventDefault();let h=r!==void 0?r:Qo(c)===Qo(p);a(e,{replace:h,state:o,preventScrollReset:l,relative:i,viewTransition:s})}},[c,a,p,r,o,t,e,l,i,s])}function ox(e){let n=w.useRef(ns(e)),t=w.useRef(!1),r=Wn(),o=w.useMemo(()=>Vv(r.search,t.current?null:n.current),[r.search]),l=wl(),i=w.useCallback((s,a)=>{const c=ns(typeof s=="function"?s(o):s);t.current=!0,l("?"+c,a)},[l,o]);return[o,i]}function lx(e,n){n===void 0&&(n={});let t=w.useContext(Gv);t==null&&G(!1);let{basename:r}=tx(ts.useViewTransitionState),o=_l(e,{relative:n.relative});if(!t.isTransitioning)return!1;let l=Ut(t.currentLocation.pathname,r)||t.currentLocation.pathname,i=Ut(t.nextLocation.pathname,r)||t.nextLocation.pathname;return Go(o.pathname,i)!=null||Go(o.pathname,l)!=null}const _f=`function D1() {
  return (
    <div>
      <h2> JSX 模板语法采用 {'{}'} 包裹表达式</h2>
      <ul>
        <li>
          {'{1 + 1}'} 解析为 {1 + 1}
        </li>
      </ul>
    </div>
  )
}
D1.text = '大括号包裹表达式'
D1.meta = {
  tags: ['jsx']
}

export default D1
`,jf=`import React from 'react'

function D1 () {
  return (
    <div>
      <h2>jsx 支持的子节点</h2>
      <ul>
        <li>
          <h3>布尔,null,undefined 是无效的子节点,表示内容为空 </h3>
          <p>
            {\`<strong>{true}</strong>\`}:<strong>{true}</strong>
            <br />
            {\`<strong>{false}</strong>\`}:<strong>{false}</strong>
            <br />
            {\`<strong>{null}</strong>\`}:<strong>{null}</strong>
            <br />
            {\`<strong>{undefined}</strong>\`}:<strong>{undefined}</strong>
            <br />
            {\`<strong>{0}</strong>\`}: 注意 0 是有效子节点<strong>{0}</strong>
            <br />
          </p>
        </li>
      </ul>
    </div>
  )
}
D1.text = 'jsx 子节点'

export default D1
`,Ef=`import React from 'react'

function ClassComponent () {
  return (
    <div>
      <h2>采用类编写组价</h2>
      <ul>
        <li>
          <C1 {...{ a: 1, b: 2 }}></C1>
        </li>
      </ul>
    </div>
  )
}
ClassComponent.text = '类组件'

class C1 extends React.Component {
  render () {
    return <p>{JSON.stringify(this.props)}</p>
  }
}
export default ClassComponent
`,Rf=`import React from 'react'

function ClassComponent () {
  return (
    <div>
      <h2>类组件默认值采用 defaultProps</h2>
      <ul>
        <li>
          <h3>采用默认值</h3>
          默认值:
          <C1 />
          <br />
          为赋值属性会采用默认值:<C1 {...{ foo: 'foo' }}></C1>
        </li>
      </ul>
    </div>
  )
}
ClassComponent.text = '类组件 defaultProps'

class C1 extends React.Component {
  // 静态变量默认值
  static defaultProps = {
    foo: 'default',
    bar: 'default'
  }
  render () {
    return <strong>{JSON.stringify(this.props)}</strong>
  }
}
export default ClassComponent
`,Tf=`import React from 'react'

function ClassComponent () {
  return (
    <div>
      <h2>采用箭头函数避免 this 丢失</h2>
      <C1 {...{ a: 1, b: 2 }}></C1>
    </div>
  )
}
ClassComponent.text = '直接绑定事件注意避免 this 丢失'

class C1 extends React.Component {
  showProps = (e, ...args) => {
    alert('点击事件')
    console.log(this.props, e, args)
  }

  render () {
    return (
      <div>
        <button onClick={this.showProps}>点击</button>
        <button onClick={e => this.showProps(e, new Date(), 1, 2, 3)}>
          传入参数
        </button>
      </div>
    )
  }
}
export default ClassComponent
`,Af=`import React from 'react'

function ClassComponentState () {
  return (
    <div>
      <h2>hooks 控制组件状态</h2>
      <ul>
        <li>
          <C1></C1>
        </li>
      </ul>
    </div>
  )
}

class C1 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }
  componentDidMount () {
    this.timerId = setInterval(() => this.tick(), 1000)
  }
  componentWillUnmount () {
    clearInterval(this.timerId)
  }
  tick () {
    this.setState({
      date: new Date()
    })
  }
  render () {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}
ClassComponentState.text = '类组件利用 hooks 触发特定事件'

export default ClassComponentState
`,Nf=`import React from 'react'

function ClassComponentState () {
  return (
    <div>
      <h2>利用 this.setState 管理组件内部状态</h2>
      <ul>
        <li>
          <C1 {...{ increment: 1, decrement: -1 }}></C1>
        </li>
      </ul>
    </div>
  )
}

class C1 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  add () {
    this.setState((state, props) => {
      return {
        count: state.count + props.increment
      }
    })
  }
  minus () {
    this.setState((state, props) => {
      return {
        count: state.count + props.decrement
      }
    })
  }
  render () {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button
          style={{
            marginRight: '1rem'
          }}
          onClick={this.add.bind(this)}
        >
          +
        </button>
        <button onClick={this.minus.bind(this)}>-</button>
      </div>
    )
  }
}
ClassComponentState.text = '类组件 setState 改变内部状态'

export default ClassComponentState
`,Pf=`import React from 'react'

function ClassComponentState () {
  return (
    <div>
      <h2>利用 this.state 管理组件内部状态</h2>
      <ul>
        <li>
          <C1></C1>
        </li>
      </ul>
    </div>
  )
}

class C1 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }
  render () {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}
ClassComponentState.text = '类组件 state 保存状态'

export default ClassComponentState
`,Lf=`import React from 'react'

// 创建一个 context 变量组件,默认值为 dark
const ThemeContext = React.createContext('dark')
function CreatElement () {
  return (
    <div>
      <h2> React.createContext 使子孙节点可获得祖先节点属性</h2>
      <ul>
        <li>
          <h3>祖先节点使用 Context.Provider 提供值</h3>
          <ul>
            <li>1. 使用 React.createContext 创建常量</li>
            <li>2. 使用 Context.Provider 提供值</li>
            <li>3. 类组件设置 contextType 静态变量绑定 context</li>
            <li>4. 类组件使用 thi.context 访问状态</li>
          </ul>
          <ThemeContext.Provider value='light'>
            <A></A>
          </ThemeContext.Provider>
        </li>
        <li>
          <h3>祖先节点使用 Context.Provider 提供值</h3>
          <ul>
            <li>1. 使用 React.createContext 创建常量</li>
            <li>2. 使用 Context.Provider 提供值</li>
            <li>3. 类组件设置 contextType 静态变量绑定 context</li>
            <li>4. 类组件使用 thi.context 访问状态</li>
          </ul>
          <li>
            <h3>利用类组件修改 context 的值</h3>
            <ul>
              <li>1. 避免采用字面量对象在 provider 中</li>
            </ul>
            <Parent></Parent>
          </li>
        </li>
      </ul>
    </div>
  )
}
CreatElement.text = 'React.createContext'

class Parent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      theme: 'light'
    }
  }
  render () {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <A></A>
        <input
          type='text'
          onChange={e => {
            this.setState({
              theme: e.target.value
            })
          }}
        />
      </ThemeContext.Provider>
    )
  }
}

function A () {
  return (
    <p>
      <B></B>
    </p>
  )
}

class B extends React.Component {
  // 绑定 context
  static contextType = ThemeContext
  render () {
    // 消费 context
    return <span>{this.context}</span>
  }
}
export default CreatElement
`,Df=`import React, { createElement } from 'react'

function CreatElement () {
  return (
    <div>
      <h2>循环组件的替换规则</h2>
      <ul>
        <li>
          <h3>即使不带 key 节点相同只进行属性更新不替换节点</h3>
          <DomDiff />
        </li>
      </ul>
    </div>
  )
}
class DomDiff extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      before: false,
      after: false
    }
  }
  componentDidMount () {
    this._el = document.querySelector('#diff-mount')
  }
  render () {
    return (
      <div>
        <button
          onClick={() =>
            this.setState(state => {
              return {
                before: state.before ? null : true
              }
            })
          }
        >
          节点之前插入
        </button>
        <button
          onClick={() =>
            this.setState(state => {
              return {
                after: state.after ? null : true
              }
            })
          }
        >
          节点之后插入
        </button>
        <div>
          {this.state.before && <Children key='1' />}
          <Children key='2' />
          <Children key='3' />
          {this.state.after && <Children key='4' />}
        </div>
      </div>
    )
  }
}

class Children extends React.Component {
  static ID = 0
  constructor (props) {
    super(props)
    this._id = Children.ID++
  }
  componentWillMount () {
    console.groupEnd()
    console.group(\`mount \${this._id}\`)
    console.log(\`节点将挂载 \${this._id}\`)
  }
  componentWillUnmount () {
    console.log(\`节点将卸载 \${this._id}\`)
    console.groupEnd()
  }
  componentWillReceiveProps () {
    console.log(\`节点将接收属性 \${this._id} \`)
  }
  componentWillUpdate () {
    console.log(\`节点将更新 \${this._id} \`)
  }

  render () {
    return (
      <p>
        属性更新 {new Date().toLocaleTimeString()}:{this._id}
      </p>
    )
  }
}

CreatElement.text = 'dom diff  key'

export default CreatElement
`,Of=`import React, { createElement } from 'react'

function CreatElement () {
  return (
    <div>
      <h2>DomDiff 节点属性不同更新节点不触发替换</h2>
      <ul>
        <li>
          <h3>属性不同触发替换</h3>
          <DomDiffPropsUpdate />
        </li>
      </ul>
    </div>
  )
}
class DomDiffPropsUpdate extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      foo: 'a'
    }
  }
  updateProps = () => {
    this.setState(state => {
      return {
        foo: state.foo === 'foo' ? 'bar' : 'foo',
        [new Date().getTime().toString()]: Math.random()
      }
    })
  }
  render () {
    return (
      <div>
        <button onClick={this.updateProps}>更新属性</button>
        <Children {...this.state} />
      </div>
    )
  }
}

class Children extends React.Component {
  static mountCount = 0
  static update = 0
  componentWillMount () {
    console.group(\`mount \${Children.mountCount}\`)
    Children.mountCount++
    console.log('节点将挂载')
  }
  componentWillUnmount () {
    console.log('节点将卸载')
    console.groupEnd()
  }
  componentWillReceiveProps () {
    console.group(\`update \${Children.update}\`)
    Children.update++
    console.log('节点将接收属性')
  }
  componentWillUpdate () {
    console.log('节点将更新')
    console.groupEnd()
  }

  render () {
    return (
      <p>
        属性更新 {new Date().toLocaleTimeString()}: {JSON.stringify(this.props)}
      </p>
    )
  }
}

CreatElement.text = 'dom diff props'

export default CreatElement
`,If=`import React, { createElement } from 'react'

function CreatElement () {
  return (
    <div>
      <h2>DomDiff 根节点不同直接替换</h2>
      <ul>
        <li>
          <h3>根节点不同会触发替换</h3>
          <DomDiffReplace />
        </li>
      </ul>
    </div>
  )
}
class DomDiffReplace extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      rootName: 'div'
    }
  }
  changeRoot = () => {
    this.setState(state => {
      return {
        rootName: state.rootName === 'div' ? 'section' : 'div'
      }
    })
  }
  render () {
    return (
      <div>
        <button onClick={this.changeRoot}>跟换节点</button>
        {createElement(this.state.rootName, null, <Children />)}
      </div>
    )
  }
}

class Children extends React.Component {
  static mountCount = 0
  componentWillMount () {
    console.group(\`mount \${Children.mountCount}\`)
    Children.mountCount++
    console.log('节点将挂载')
  }
  componentWillUnmount () {
    console.log('节点将卸载')
    console.groupEnd()
  }
  render () {
    return <p>{new Date().toLocaleTimeString()}: 子节点刷新</p>
  }
}

CreatElement.text = 'dom diff replace'

export default CreatElement
`,Mf=`import React, { createElement } from 'react'

function CreatElement () {
  return (
    <div>
      <h2>循环组件的替换规则</h2>
      <ul>
        <li>
          <h3>即使不带 key 节点相同只进行属性更新不替换节点</h3>
          <DomDiff />
        </li>
      </ul>
    </div>
  )
}
class DomDiff extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      before: false,
      after: false
    }
  }
  componentDidMount () {
    this._el = document.querySelector('#diff-mount')
  }
  render () {
    return (
      <div>
        <button
          onClick={() =>
            this.setState(state => {
              return {
                before: state.before ? null : true
              }
            })
          }
        >
          节点之前插入
        </button>
        <button
          onClick={() =>
            this.setState(state => {
              return {
                after: state.after ? null : true
              }
            })
          }
        >
          节点之后插入
        </button>
        <div id='diff-mount'>
          {this.state.before && <Children />}
          <Children />
          <Children />
          {this.state.after && <Children />}
        </div>
      </div>
    )
  }
}

class Children extends React.Component {
  static ID = 0
  constructor (props) {
    super(props)
    this._id = Children.ID++
  }
  componentWillMount () {
    console.groupEnd()
    console.group(\`mount \${this._id}\`)
    console.log(\`节点将挂载 \${this._id}\`)
  }
  componentWillUnmount () {
    console.log(\`节点将卸载 \${this._id}\`)
    console.groupEnd()
  }
  componentWillReceiveProps () {
    console.log(\`节点将接收属性 \${this._id} \`)
  }
  componentWillUpdate () {
    console.log(\`节点将更新 \${this._id} \`)
  }

  render () {
    return (
      <p>
        属性更新 {new Date().toLocaleTimeString()}:{this._id}
      </p>
    )
  }
}

CreatElement.text = 'dom diff without key'

export default CreatElement
`,Ff=`import React from 'react'

const MyComponent = {
  A: props => <span>组件 A</span>,
  B: props => <span>组件 B</span>
}
function D1 () {
  return (
    <div>
      <h2> JSX 可以暴露对象返回多个组件</h2>
      <ul>
        <li>
          <h3>采用对象方式访问子组件</h3>
          <p>
            {'MyComponent.A'}:<MyComponent.A />
          </p>
          <p>
            {'MyComponent.B'}:<MyComponent.B />
          </p>
        </li>
      </ul>
    </div>
  )
}
D1.text = '采用 . 暴露多个 React 组件'

export default D1
`,bf=`import React, { useState } from 'react'

// 1. 声明 error 处理的插槽组件
class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      info: null
    }
  }
  // 2. 挂载 error 处理事件
  componentDidCatch(error, info) {
    this.setState({
      error,
      info
    })
    console.log('error:', arguments)
  }
  render() {
    // 3. 处理错误时的显示策略
    if (this.state.error) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.info.componentStack}
          </details>
        </div>
      )
      // 正常返回插槽节点
    }
    return this.props.children
  }
}


function CountButton() {
  let [count, setCount] = useState(1);
  let changeCount = () => {
    setCount(count + 1)
  }
  if (count > 5) {
    throw new Error('count error')
  } else return <button onClick={changeCount}>{count}</button>
}

// 4. 应用中使用错误处理组价

function App(props) {
  return (<div>
    <h1>使用 componentDidCatch 补货错误</h1>
    <ErrorBoundary>
      <CountButton></CountButton>
    </ErrorBoundary>
  </div>)
}


export default App;`,zf=`import React from 'react'

function ClassComponent () {
  return (
    <div>
      <h2>采用类编写组价</h2>
      <ul>
        <li>
          <h3>采用类编写受控组件</h3>
          <ControlInput init='initial'></ControlInput>
        </li>
        <li>
          <h3>非受控组件内部持有状态</h3>
          <input
            type='text'
            onChange={e => {
              console.log('value', e.target.value)
            }}
          ></input>
        </li>
      </ul>
    </div>
  )
}

class ControlInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: props.init
    }
  }
  changeValue = e => {
    let { target } = e
    this.setState({
      value: target.value
    })
  }
  render () {
    return (
      <p>
        <input
          type='text'
          value={this.state.value}
          onChange={this.changeValue}
        />
        <strong>{this.state.value}</strong>
        <button
          onClick={() =>
            this.setState({
              value: ''
            })
          }
        >
          reset
        </button>
      </p>
    )
  }
}
ClassComponent.text = '表单组件示例'

export default ClassComponent
`,$f=`import React from 'react'

function ClassComponent () {
  return (
    <div>
      <h2>组件初始有值则为只读,通过设置为空触发可修改</h2>
      <ul>
        <li>
          <h3>设置组件可修改,注意 null , undefined 不会修改组件的状态</h3>
          <ControlInput init='initial'></ControlInput>
        </li>
      </ul>
    </div>
  )
}

class ControlInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: props.init
    }
  }
  render () {
    return (
      <p>
        <input type='text' value={this.state.value} />
        <strong>{this.state.value}</strong>
        <button
          onClick={() =>
            this.setState({
              value: ''
            })
          }
        >
          reset
        </button>
        <button
          onClick={() =>
            this.setState({
              value: null
            })
          }
        >
          null
        </button>
        <button
          onClick={() =>
            this.setState({
              value: undefined
            })
          }
        >
          undefined
        </button>
      </p>
    )
  }
}
ClassComponent.text = '表单组件只读和复位'

export default ClassComponent
`,Uf=`import React from 'react'

function ClassComponent () {
  return (
    <div>
      <h2>多个表单组件的控制</h2>
      <ul>
        <li>
          <h3>采用 name 动态控制 input</h3>
          <MultiInput init={{ foo: 'a', bar: 'b' }}></MultiInput>
        </li>
      </ul>
    </div>
  )
}

class MultiInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      foo: props.init.foo,
      bar: props.init.bar
    }
  }
  changeValue = e => {
    let { target } = e
    this.setState({
      [target.name]: target.value
    })
  }
  render () {
    return (
      <p>
        <input
          type='text'
          name='foo'
          value={this.state.foo}
          onChange={this.changeValue}
        />
        <input
          type='text'
          name='bar'
          value={this.state.bar}
          onChange={this.changeValue}
        />
        <button
          onClick={() =>
            this.setState({
              foo: '',
              bar: ''
            })
          }
        >
          reset
        </button>
      </p>
    )
  }
}
ClassComponent.text = '表单组件控制多个元素'

export default ClassComponent
`,Bf=`import React from 'react'

function ClassComponent () {
  return (
    <div>
      <h2>表单组件 textarea</h2>
      <ul>
        <li>
          <h3>采用 value 控制 textarea</h3>
          <FormSelect init='lime'></FormSelect>
        </li>
        <li>
          <h3>采用 multiple 实现多选</h3>
          <FormSelect multiple={true} init={['lime', 'mango']}></FormSelect>
        </li>
      </ul>
    </div>
  )
}

class FormSelect extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: props.init
    }
  }
  changeHandle = e => {
    let { target } = e
    // TODO: 为什么选中的只有一个
    console.dir(target.selectedOptions)
    this.setState((state, props) => {
      return {
        value: props.multiple
          ? [...target.options]
              .filter(({ selected }) => selected)
              .map(({ value }) => value)
          : target.value
      }
    })
  }
  render () {
    return (
      <form
        onSubmit={e => {
          e.preventDefault()
        }}
      >
        <label>
          pick a item
          <select
            multiple={this.props.multiple}
            value={this.state.value}
            onChange={this.changeHandle}
          >
            <option value='grapefruit'>Grapefruit</option>
            <option value='lime'>Lime</option>
            <option value='coconut'>Coconut</option>
            <option value='mango'>Mango</option>
          </select>
        </label>
        <button
          onClick={() =>
            this.setState({
              value: ''
            })
          }
        >
          reset
        </button>
      </form>
    )
  }
}
ClassComponent.text = '表单组件 select'

export default ClassComponent
`,Hf=`import React from 'react'

function ClassComponent () {
  return (
    <div>
      <h2>表单组件 textarea</h2>
      <ul>
        <li>
          <h3>采用 value 控制 textarea</h3>
          <Textarea init='initial'></Textarea>
        </li>
      </ul>
    </div>
  )
}

class Textarea extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: props.init
    }
  }
  onChange = e => {
    let { target } = e
    this.setState({
      value: target.value
    })
  }
  render () {
    return (
      <p>
        <textarea onChange={this.onChange} value={this.state.value}></textarea>
        <button
          onClick={() =>
            this.setState({
              value: ''
            })
          }
        >
          reset
        </button>
      </p>
    )
  }
}
ClassComponent.text = '表单组件 textarea'

export default ClassComponent
`,Wf=`import React from 'react'

function Fragment () {
  return (
    <div>
      <h2>采用 fragment 包裹片段代码</h2>
      <ul>
        <li>
          <h3>使用 {\`<>片段...</>\`} 包裹内容</h3>
          <F1></F1>
        </li>
        <li>
          <h3>使用 {\`<React.Fragment>片段...</React.Fragment>\`} 效果相同</h3>
          <F2></F2>
        </li>
        <li>
          <h3>同样支持传入 key</h3>
          <Glossary
            items={[
              { id: 1, term: 'foo', description: 'test' },
              { id: 2, term: 'foo1', description: 'test1' }
            ]}
          ></Glossary>
        </li>
      </ul>
    </div>
  )
}
function F1 () {
  return (
    <>
      <p>这是一个片段没有根元素</p>
      <p>这是一个片段没有根元素</p>
    </>
  )
}

function F2 () {
  return (
    <React.Fragment>
      <p>这是一个片段没有根元素</p>
      <p>这是一个片段没有根元素</p>
    </React.Fragment>
  )
}

function Glossary (props) {
  return (
    <dl>
      {props.items.map(item => (
        //   Fragment 支持传入 key
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  )
}
export default Fragment
`,Vf=`import React from 'react'

function D1 () {
  return (
    <div>
      <h2>采用组件组织文件</h2>
      <ul>
        <li>
          <C1 {...{ a: 1, b: 2 }}></C1>
        </li>
      </ul>
    </div>
  )
}
D1.text = '函数组件'

function C1 (props) {
  return <p>{JSON.stringify(props)}</p>
}
export default D1
`,Yf=`import React from 'react'

function HelloWorld () {
  return <h1>hello world</h1>
}

export default HelloWorld
`,Kf=`import React from 'react'
function HelloWorld() {
  return <h1>hello world</h1>
}

export default HelloWorld
`,ix=`function HelloWorld() {
    return <h1>hello world</h1>
}

export default HelloWorld;`,Qf=`import React, { Suspense } from 'react'
const HelloWorld = React.lazy(() => import('./HelloWorld.jsx'))
import HelloWorld1 from './HelloWorld.jsx'

function ClassComponent() {
  return (
    <div>
      <h2>采用类编写组价</h2>
      <ul>
        <li>
          <h2>这是异步组件,点击触发加载</h2>
          <ul>
            <li>1. 采用 React.lazy 引入组件,只能用于默认导出模块</li>
            <li>2. 在 Suspense 使用组件</li>
            <li>3. 在 Suspense callback 绑定占位组件</li>
          </ul>
          <ShowAsync></ShowAsync>
        </li>
      </ul>
    </div>
  )
}

class ShowAsync extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }
  render() {
    return (
      <div>
        <button
          onClick={() =>
            this.setState({
              show: true
            })
          }
        >
          show hello world
        </button>
        <Suspense fallback={<div>loading...</div>}>
          {this.state.show ? <HelloWorld></HelloWorld> : null}
        </Suspense>
      </div>
    )
  }
}


export default ClassComponent
`,Gf=`import React from 'react'

function D1 () {
  let a = [1, 2, 3, 4]
  return (
    <div>
      <ul>
        <li>
          <h2>采用 map 迭代渲染</h2>
          {a.map(ele => {
            let spans = []
            for (let i = 1; i < 10; i++) {
              spans.push(<span key={i}>{i}</span>)
            }
            return (
              <p key={ele}>
                行{ele} {spans}{' '}
              </p>
            )
          })}
        </li>
      </ul>
    </div>
  )
}

D1.text = '列表熏染'

export default D1
`,Xf=`import React from 'react'

export default function MboxBegin() {
  return (
    <h1>demo111</h1>
  )
}
MboxBegin.meta = {
  tags: [
    'mbox',
  ]
}`,Jf=`---
tags: [mobx model]
---

<script src="https://unpkg.com/mobx"><\/script>
<div id="app">

</div>
<script>
  const { observable, autorun }  = mobx
  const todoStore = observable({
    todos: [],
    get completedCount() {
      return this.todos.filter((todo) => todo.completed).length
    }
  })

  let mountEl = document.getElementById('app')
  function updateTodo() {
      // debugger
      mountEl.innerHTML = \`
        \${todoStore.todos.map(todo => '<div>'+JSON.stringify(todo)+'</div>').join('')}
      \`
  }

  autorun(function() {
    console.log('complted %d of %d items', todoStore.completedCount, todoStore.todos.length)
  })
  autorun(updateTodo)

  todoStore.todos[0] = {
    title:" take a walk",
    completed: false
  }
  todoStore.todos[0].completed= true
<\/script>`,Zf=`---
tags: [mobx observer]
---

<script src="https://unpkg.com/mobx"><\/script>
<div id="app">
  <h1>验证 observable 支持的值类型</h1>
  <button class="primitive" >box 设置原始值,set 进行修改,get 获取结果 </button>
  <button class="array" >array 修改 </button>
  <button class="object" >对象修改</button>
</div>
<script>
  const { observable, autorun } = mobx
  let store = observable.box(1);
  let store1 = observable([1,2,3]);
  let store2 = observable({
    a: 1
  });
  
  autorun(() => {
    console.log('autorun' , store.get(), store1,store2)
  })

  let els =  {
    'primitive': () => {
      let a = store.get();
      store.set(++a)
      console.log('store', store)
    },
    'array': () => {
      store1[1] =12;
      store1.push(new Date())
      console.log('store1', store1)
    },
    'object': () => {
      store2.a = 'test'
      console.log('store2', store2);
    }
  }
  Object.keys(els).map(selctor => {
    let el = document.getElementsByClassName(selctor)[0];
    el.onclick = els[selctor];
  })

<\/script>`,qf=`---
tags: [mobx observer]
---
<script src="https://unpkg.com/mobx"><\/script>
<script>
const { observable, autorun, action } = mobx
var todos = observable([
    { title: "Spoil tea", completed: true },
    { title: "Make coffee", completed: false },
])

autorun(() => {
    console.log(
        "Remaining:",
        todos
        .filter((todo) => !todo.completed)
        .map((todo) => todo.title)
        .join(", ")
    )
})
// 触发监听
todos[0].completed = false

todos[2] = { title: "Take a nap", completed: false }

todos.shift()
<\/script>`,ep=`---
tags: [ mobx, observer]
---
<script src="https://unpkg.com/mobx"><\/script>
<script>
const { observable, autorun, action } = mobx
// 验证 observable 对深层属性的监听
var person = observable(
    {
        name: "John",
        age: 42,
        showAge: false,
        nest: {
          a: 1
        },
        // computed property:
        get labelText() {
            return this.showAge ? \`\${this.name} (age: \${this.age})\` : this.name
        },
        setAge1(age) {
            this.age = age
        },
        setAge(age) {
            this.age = age
        },
        
    },
    // TODO: 此处申明的意义
    {
        setAge: action,
    },
    // TODO: 此值的使用场景
    { deep: true }
)

autorun(() => {
  console.log('---log---,',person.name, person.age, person.nest)
})

person.name = "Dave"
person.setAge(21)
<\/script>`,np=`import React,{useState} from 'react'
import ReactDOM from 'react-dom'

class Portal extends React.Component {
  constructor() {
    super();
    this.el = document.createElement('div')
  }
  componentDidMount() {
    // TODO: 此变量 willunmount 为啥也可访问
    let modal = document.getElementById('modal')
    modal.appendChild(this.el)
  }
  componentWillUnmount() {
    let modal = document.getElementById('modal')
    modal.removeChild(this.el)
  }
  render() {
    return ReactDOM.createPortal(this.props.children,this.el)
  }
}

function PortalButton() {
  const [show,triggerShow] = useState(true);
  const handleShow = () => {
    triggerShow(show^1);
  }
  return <div>
    <button onClick={handleShow}>show: {show}</button>
    <div id="modal"></div>
    {show?<Portal><h1>modal</h1></Portal>:null}
  </div>
}

export default PortalButton`,tp=`import React,{useState} from 'react'
import ReactDOM from 'react-dom'

class  Portal extends React.Component {
  constructor() {
    super()
    this.el = document.createElement('div')
  }
  componentDidMount() {
       // TODO: 此变量 willunmount 为啥也可访问
       let modal = document.getElementById('modal')
       modal.appendChild(this.el)
  }
  render() {
    return (
      ReactDOM.createPortal(this.props.children,this.el)
    )
  }
}

function PortalButton() {
  const [count,setCount] = useState(0);
  const add = () => setCount(count+1)
  return (<>
    <h1>Protal 组件会修改事件冒泡,子元素的事件传递取决于组件申明时的位置，而非 dom 挂载的位置</h1>
    <div onClick={add}>
      <span>count:{count}</span>
      <Portal><button>count</button></Portal>
    </div>
    <div id="modal"></div>
    </>)
}

export default PortalButton`,rp=`import React from 'react'

function D1 () {
  return (
    <div>
      <h2> props 赋值方式</h2>
      <ul>
        <li>
          <h3>采用 {\`{}\`} 赋值表达式 </h3>
          <p>
            {\`<strong title="{'foo'+'bar'}">test</strong>\`}:
            <strong title={'foo' + 'bar'}>test</strong>
          </p>
        </li>
        <li>
          <h3>采用字符串字面量</h3>
          <p>
            {\`<strong title='<3'>test</strong>\`} :
            <strong title='<3'>test</strong>
          </p>
          <p>
            {\`<strong title={'<3'}>test</strong>\`} :
            <strong title={'<3'}>test</strong>
          </p>
        </li>
        <li>
          <h3>布尔值</h3>
          <p>
            {\` <input type='checkbox' checked></input>\`} :
            <input type='checkbox' checked></input>
          </p>
          <p>
            {\` <input type='checkbox' ></input>\`} :
            <input type='checkbox'></input>
          </p>
          <p>
            {\`<input type='checkbox' checked={true}></input>\`} :
            <input type='checkbox' checked={true}></input>
          </p>
          <p>
            {\`<input type='checkbox' checked={false}></input>\`} :
            <input type='checkbox' checked={false}></input>
          </p>
        </li>
        <li>
          <h3>...会自动扩展属性赋值</h3>
        </li>
      </ul>
    </div>
  )
}
D1.text = 'props 赋值方式'

export default D1
`,op=`import React from 'react'

function CreatElement () {
  return (
    <div>
      <h2> props.children 包含内部子元素,类似 vue 默认 slot</h2>
      <ul>
        <li>
          <Hi>
            <h4>hello world!</h4>
          </Hi>
        </li>
      </ul>
    </div>
  )
}
function Hi (props) {
  return (
    <p>
      <h3>标签内部元素会替换 props.children</h3>
      {props.children}
    </p>
  )
}

CreatElement.text = 'props.children'

export default CreatElement
`,lp=`import React from 'react'

function ClassComponent () {
  return (
    <div>
      <h2>props 也可传入组件,实现动态注入</h2>
      <ul>
        <li>
          <h3>children 为标签内内容,其余组件通过属性名注入</h3>
          <ShowName left={<strong>tom</strong>} right={<strong>jack</strong>}>
            <span>john</span>
          </ShowName>
        </li>
      </ul>
    </div>
  )
}
ClassComponent.text = '采用 props 实现插槽'

function ShowName (props) {
  return (
    <p>
      {props.left}
      {props.children}
      {props.right}
    </p>
  )
}

export default ClassComponent
`,ip=`---
tags: [redux, applymiddleware]
---

<script src="https://unpkg.com/redux"><\/script>
<script>
  const { createStore, applyMiddleware } = Redux;

  function logger({ getState }) {
    console.log('state before', getState());

    return (next) => (action) => {
      console.log('next', next.toString());
      let state = next(action);

      console.log('state after', state,action, getState());
      return state;
    };
  }
  // 之前的状态事件
  function count(state = 0, action) {
    switch (action.type) {
      case 'add':
        return ++state;
      default:
        return state;
    }
  }

  let state = createStore(count, applyMiddleware(logger));
  state.dispatch({
      type: 'add'
  })
  state.dispatch({
      type: 'add'
  })
<\/script>
`,sp=`---
tags: [redux, combineReducers]
---

<script src="https://unpkg.com/redux"><\/script>
<h1>利用 combineReducers 来结合状态</h1>
<script>
    const { combineReducers, createStore } = Redux
    function counter(state = 0, action) {
        switch(action.type) {
            case 'INCREMENT':
                return state + 1;
            case 'DECREASE':
                return state - 1;
            default:
                return state
        }
    }
    function todos(state = [], action) {
        switch(action.type) {
            case 'ADD':
                return state.concat(action.payload);
            default:
                return state 
        }
    }

    let reducer = combineReducers({
        todos,
        counter
    });
    let store = createStore(reducer)
    store.subscribe(function (){
        console.log('---', store.getState());
    })
    store.dispatch({
        type: 'ADD',
        payload: 1
    })
<\/script>`,up=`import React from 'react'
import ReactDOM from 'react-dom'

function Render () {
  return (
    <div>
      <h2> ReactDOM.render 挂载 dom 节点</h2>
      {setInterval(tick, 1000)}
      <div id='d1'></div>
    </div>
  )
}
function tick () {
  const element = (
    <div>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  )
  ReactDOM.render(element, document.getElementById('d1'))
}
Render.text = 'ReactDOM.Render'

export default Render
`,ap=`import React from 'react'

class Mouse extends React.Component {
  state = {
    x: 0,
    y: 0
  }
  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render() {
    return (<div style={{height:'400px',border:'1px solid red'}} onMouseMove={this.handleMouseMove}>
      {this.props.render(this.state)}
    </div>)
  }
}
function UseMouse(c) {
  return (
  <Mouse render = {
    ({x, y}) => (
      <h1>position: ({x},{y})</h1>
    )
  }/>
  )
}

UseMouse.meta = {
  tags: [
    'tricks',
    'render-props',
  ]
}
// read https://cdb.reacttraining.com/use-a-render-prop-50de5wa98f11ce to know all 

export default UseMouse


`,cp=`import Sandpack from '@/components/Sandpack/index'

function SandpackDemoTest() {
  return <Sandpack>
    <pre>
      <code className="language-js">
        {
          \`
         import { getImageUrl } from './utils.js';
         import { Hello } from './hello.jsx';

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <div>
        <Hello/>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
}

         \`
        }
      </code>
    </pre>
    <pre>
      <code meta="src/hello.jsx" className="language-jsx">
        {
          "export function Hello() { return <h1>hello</h1> }"
        }
      </code>
    </pre>
    <pre>
      <code meta="src/utils.js" className="language-ts">
        {
          "export function getImageUrl(person, size = 's') {\\n  return (\\n    'https://i.imgur.com/' +\\n    person.imageId +\\n    size +\\n    '.jpg'\\n  );\\n}\\n"
        }
      </code>
    </pre>
    <pre>


      <code className="language-css">
        {
          "body { min-height: 120px; }\\n.avatar { margin: 10px; border-radius: 50%; }\\n"
        }
      </code>
    </pre>

  </Sandpack>
}
SandpackDemoTest.meta = {
  disableSandpack: true
}

export default SandpackDemoTest`,dp=`import Sandpack from '@/components/Sandpack/index'

function SandpackDemoTest() {
  return <Sandpack template="vanilla">
    <pre>
      <code className="language-html">
        {\`<script src="https://cdn.jsdelivr.net/npm/react/umd/react.development.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.development.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/@babel/standalone"><\/script>

<div id="root"></div>
<script type="text/babel">
  const { createElement }  = React

  const Hello = (
    <h1>hello react111!</h1>
  )
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(Hello)

<\/script>\`}
      </code>
    </pre>
    <pre>
      <code className="language-css">
        {\`body { 
          min-height: 120px; 
        }
        h1 { 
          color: blue; 
        }\`}
      </code>
    </pre>
  </Sandpack>
}
SandpackDemoTest.meta = {
  disableSandpack: true
}

export default SandpackDemoTest`,fp=`import Sandpack from '@/components/Sandpack/index'

function SandpackDemoTest() {
  return <Sandpack>
    <pre>
      <code className="language-js">
        {
          \`
         import { getImageUrl } from './utils.js';
         import { Hello } from './hello.jsx';

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <div>
        <Hello/>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
}

         \`
        }
      </code>
    </pre>
    <pre>
      <code meta="src/hello.jsx" className="language-jsx">
        {
          "export function Hello() { return <h1>hello</h1> }"
        }
      </code>
    </pre>
    <pre>
      <code meta="src/utils.js" className="language-ts">
        {
          "export function getImageUrl(person, size = 's') {\\n  return (\\n    'https://i.imgur.com/' +\\n    person.imageId +\\n    size +\\n    '.jpg'\\n  );\\n}\\n"
        }
      </code>
    </pre>
    <pre>


      <code className="language-css">
        {
          "body { min-height: 120px; }\\n.avatar { margin: 10px; border-radius: 50%; }\\n"
        }
      </code>
    </pre>

  </Sandpack>
}
SandpackDemoTest.meta = {
  disableSandpack: true
}

export default SandpackDemoTest`,pp=`import React from 'react'

function List(props) {
  return (
    <div>
      <h2>slot scope in react test</h2>
      <ul>
        {
          props.lists.map(el => {
            if(props.item) {
            return (props.item({
                item: el
              }))
            } else {
              return (<li>{JSON.stringify(el)}</li>)
            }
          }) 
        }
      </ul>
    </div>
  )
}
function ShowList() {
  return <List item={Item} lists={[{a:1}, {a:2}]}/>
}

function Item(props) {
  return <span>{props.item.a}<br/></span>

}
ShowList.meta = {
  tags: [
    'slot-scope',
  ]
}

export default ShowList


`,hp=`import React from 'react'
import ThemeContext, { themes } from './theme-context.js'


function ThemeButton(props) {
  return <ThemeContext.Consumer>
    {theme => <button {...props} style={theme}></button>}
  </ThemeContext.Consumer>
}
function Toolbar(props) {
  return <ThemeButton onClick={props.changeTheme}>change theme</ThemeButton>
}
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      theme: themes.light
    }
  }
  changeTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.light ? themes.dark : themes.light
    })
    )
  }

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.changeTheme}></Toolbar>
        </ThemeContext.Provider>
        <ThemeButton>demo---</ThemeButton>
        <p>{JSON.stringify(this.state.theme)}</p>
      </div>)
  }
}


export default () => <App />`,sx=`import React from 'react'
export const themes = {
  light: {
    background: '#fefefe',
    color: '#888',
    padding: '10px'
  },
  dark: {
    background: '#333',
    color: '#f3f3f3',
    padding: '10px'
  }
}

export default React.createContext(themes.light)
`,mp=`// 1. 引用 useState 
import { useState } from 'react'

function BasicHook() {
  // 2. 使用数组解构 useState 返回值
  // 3 useState 的入参传入初始值
  let [count, setCount] = useState(0);

  // 4. 使用 setCount 修改 count 的值，setCount 的入参为修改后的值
  // 5. 消费 count 字段返回当前状态
  return <button onClick={() => setCount(++count)}>{count}</button>
}

BasicHook.meta = {
  tags: [
    'hook',
  ]
}


export default BasicHook`,gp=`
// 1. 引用 useEffect 作为组件更新的 hooks
import { useState, useEffect } from 'react'
function BasicHook() {

  let [count, setCount] = useState(0);

  // 2. 挂载组件更新的回调
  useEffect(() => {
    // 3. 每次渲染都会触发重新执行，包括首次
    document.title = \`\${count}\`
  })


  return <button onClick={() => setCount(++count)}>{count}</button>
}

BasicHook.meta = {
  tags: [
    'hook',
  ]
}


export default BasicHook`,vp=`
import { useState, useEffect } from 'react'
function NetStatus() {

  let [netStatus, setNetStatus] = useState('');
  function handleNetChange(e:Event) {
    setNetStatus(e.type);
  }

  useEffect(() => {
    window.addEventListener('offline', handleNetChange);
    window.addEventListener('online', handleNetChange);
    return () => {
      // 组件
      console.log('trigger unmounted')
      window.removeEventListener('offline', handleNetChange);
      window.removeEventListener('online', handleNetChange);
    }
  })

  return <h3>网络状态: { netStatus }</h3>
}



function UseNet() {
  let [use, setUse] = useState(true);
  function toggleShow() {
    setUse(!use)
  }
  return <div>
    { use ? <NetStatus/>: null}
    { <button onClick={toggleShow}>toggle</button>}
  </div>
}


UseNet.meta = {
  tags: [
    'hook',
  ]
}

export default UseNet`,xp=`import { useState } from 'react'
function HookRule() {
  const val = {count: 0}
  setTimeout(() => {
    let [count, setCount] = useState(0)
    setTimeout(() => setCount(10), 1e3)
  }, 2e3)

  return <p>{val.count}</p>
}

HookRule.meta = {
  tags: ['hook']
}

export default HookRule`,yp=`import {useEffect, useState} from 'react'

function useNetStatus() {
  const [netStatus, setNet] = useState('');
  function changeNet(e: Event) {
    setNet(e.type)
  }

  useEffect(() => {
    window.addEventListener('online',changeNet)
    window.addEventListener('offline',changeNet)

    return () => {
      window.removeEventListener('online',changeNet)
      window.removeEventListener('offline',changeNet)
    }
  })

  return netStatus;
}

function CustomerHook() {
  const netStatus = useNetStatus();
  return <p>网络状态: {netStatus}</p> 
}

CustomerHook.meta = {
  tags: ['hook']
}
export default CustomerHook;`,Cp=`import {useState, useEffect} from 'react'

function useCounter() {
  let [count, setCount] = useState(0)
  let [count1, setCount1] = useState(0)

  // useEffect 第二个参数确定观测哪几个值
  useEffect(() => {
    console.log(\`count: \${count}, count1: \${count1}\`);
  }, [count])

  return (
    <div>
      <button onClick={() => setCount(++count)}>{count}</button>
      <button  onClick={() => setCount1(++count1)}>{count1}</button>
    </div>
  )
}

useCounter.meta = {
  tags: ['hook']
}
export default useCounter`,Sp=`import {useState, useEffect} from 'react'

function useCounter() {
  let [count, setCount] = useState(0)

  // useEffect 第二个参数不传参，只在 mount 的时候才挂载
  useEffect(() => {
    console.log(\`count: \${count}\`);
  }, [])

  return (
    <div>
      <button onClick={() => setCount(++count)}>{count}</button>
    </div>
  )
}

useCounter.meta = {
  tags: ['hook']
}
export default useCounter`,kp=`import { useState } from 'react'

function Log() {
  // 1. 使用解构使用状态
  const [count, setCount] = useState(() => 1);
  return <div>
    <p>{count}</p>
    {/* 2. 传递函数获取之前的状态值 */}
    <button onClick={() => setCount(prev => prev + 1)}>add</button>
    <button onClick={() => setCount(prev => prev - 1)}>minus</button>
  </div>

}

Log.meta = {
  tags: ['hook']
}

export default Log`,wp=`import { useState } from 'react'

function Log() {
  const [todos, toggleDone] = useState([
    {label: 'todo1', done: false},
    {label: 'todo2', done: false},
    {label: 'todo3', done: false},
  ]);
  function handleChange(index: number, e: React.ChangeEvent<HTMLInputElement>) {
    // 1. 浅拷贝对象
    const newTodos = [...todos];
    // 2. 修改对象
    newTodos[index].done = e.target.checked ? true : false
    // 3. 修改后赋值新对象
    toggleDone(newTodos);
  }
  return <div>
      {
        todos.map((el, index) =>(
          <div>
            <input  type="checkbox" checked={el.done} onChange={ (e) => handleChange(index, e)}/>
            <span>{el.label} {el.done ? \`done \${new Date()}\`: \`undone \${new Date()}\`}</span>
          </div>
        ))
      }
  </div>

}

Log.meta = {
  tags: ['hook']
}

export default Log`,_p=`import {useContext ,createContext, useState} from 'react'
enum ThemeType {
  DARK = 'dark',
  LIGHT = 'light'
}

// 定义全局主题组件
const Theme = {
  [ThemeType.DARK]: {
    background: '#fff',
    color: '#000'
  },
  [ThemeType.LIGHT]: {
    background: '#000',
    color: '#fff'
  }
}


const ThemeContext = createContext(Theme[ThemeType.DARK]);

function ThemeButton() {
  const theme = useContext(ThemeContext);
  const [name, toggleTheme] = useState(ThemeType.DARK)


  return (<ThemeContext.Provider value={Theme[name]}>
      <h1 style={theme}>test text</h1>
      <button onClick={() => name === ThemeType.DARK ? toggleTheme(ThemeType.LIGHT): toggleTheme(ThemeType.DARK) }>toggle theme {name}</button>
  </ThemeContext.Provider>)
}
ThemeButton.meta = {
  tags: ['hook']
}
export default ThemeButton`,jp=`import {useReducer} from 'react'

// 1. 定义初始化状态
const InitValue = 0
// 2. 定义重置函数
function int() {
  return InitValue
}

// 3. 定义状态的派生函数
enum ActionType {
  ADD,
  MINUS,
  REST
}
function reducer(state: number, action: ActionType) {
  switch(action) {
    case ActionType.ADD:
      return state + 1
    case ActionType.MINUS:
      return state - 1
    case ActionType.REST:
      return InitValue 
    default:
      throw new Error(\`no this action: \${action}\`)
  }

}

function Counter() {
  let [count, dispatch] = useReducer(reducer, InitValue, int)
  return (
    <div>
      <h3>{ count }</h3>
      <div>
        <button onClick={() => dispatch(ActionType.ADD)}>add</button>
        <button onClick={() => dispatch(ActionType.MINUS)}>minus</button>
        <button onClick={() => dispatch(ActionType.REST)}>reset</button>
      </div>
    </div>
  )
}

Counter.meta = {
  tags: ['hook']
}
export default Counter`,Ep=`---
tags: [ theory, jsx]
---

<script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
<script src="./script.js"><\/script>

<div id="root"></div>
<script>
  // debug(document.createElement)
  const { createElement }  = React
  function App() {
    return createElement(
      'h1',
      undefined,
      'hello world'
    )
  }
  let mountPoint = document.getElementById('root')
  const root = ReactDOM.createRoot(mountPoint)
  root.render(createElement(App))
  // 查看是什么时候触发的 root 挂载数据
  // debug(mountPoint.appendChild)
<\/script>`,ux="console.log('hello world')",Rp=`<script src="https://cdn.jsdelivr.net/npm/react/umd/react.development.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.development.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/@babel/standalone"><\/script>

<div id="root"></div>
<script type="text/babel">
  const { createElement }  = React

  const Hello = (
    <h1>hello react!</h1>
  )
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(Hello)

<\/script>`,Tp=`---
tags: [redux]
---

<script src="https://unpkg.com/redux"><\/script>

<script>
    const { createStore } = Redux
    // 定义状态迁移函数
    function StateReduce(state, action) {
        console.log('---res--',arguments);
        switch(action.label) {
            case 1:
            return 1;
            default:
            return state
        }
    }
    // 定义初始状态
    let store = createStore(StateReduce, {
        type: 'init',
        data: [1,2]
    });
    // 获取状态
    console.log(store.getState())

    // 发送事件修改状态
    store.dispatch({
        type: 1,
        label: 1
    })
    console.log(store.getState())


<\/script>`,Ap=`import React from 'react'

function C1 (props) {
  return <input type='text' ref={props.getRef} />
}

class App extends React.Component {
  constructor () {
    super()
    this.input = null
  }
  getRef = el => {
    this.input = el
  }
  focus = () => {
    if (this.input) {
      this.input.focus()
    }
  }
  render () {
    return (
      <div>
        <button onClick={this.focus}>focus</button>
        <C1 getRef={this.getRef}></C1>
      </div>
    )
  }
}

export default App
`,Np=`import React from 'react'

function C1 (props) {
  const ref = React.useRef()
  const focus = () => {
    if (ref) {
      ref.current.focus()
    }
  }
  return (
    <div>
      <button onClick={focus}>focus</button>
      <input type='text' ref={ref} />
    </div>
  )
}

export default () => <C1></C1>
`,Pp=`import React from 'react'

class A extends React.Component {
  render () {
    return <input type='text' ref={this.props.ref1} />
  }
}

const C1 = React.forwardRef((props, ref) => <A ref1={ref}></A>)
// 直接采用字符串模式定义引用
class App extends React.Component {
  focus = () => {
    if (this.refs.input) {
      this.refs.input.focus()
    }
  }
  render () {
    return (
      <div>
        <button onClick={this.focus}>focus</button>
        <C1 ref='input'></C1>
      </div>
    )
  }
}
export default App
`,Lp=`import React from 'react'

// 1. 子组件采用 React.forwardRef 将 ref 传递给 ref 参数
const C1 = React.forwardRef((props, ref) => {
  return <input ref={ref} />
})

// 2. 外层组价定义 ref 并引用组件
class App extends React.Component {
  constructor () {
    super()
    this.ref = React.createRef()
  }

  focus = () => {
    if (this.ref) {
      this.ref.current.focus()
    }
  }
  render () {
    return (
      <div>
        <button onClick={this.focus}>focus</button>
        <C1 ref={this.ref}></C1>
      </div>
    )
  }
}
export default App
`,Dp=`import React from 'react'

// 直接采用字符串模式定义引用
class App extends React.Component {
  focus = () => {
    if (this.refs.input) {
      this.refs.input.focus()
    }
  }
  render () {
    return (
      <div>
        <button onClick={this.focus}>focus</button>
        <input ref='input'></input>
      </div>
    )
  }
}
export default App
`,Op=`import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.input = React.createRef();
  }
  focus = () => {
    console.log('----', this.input.current)
    this.input.current.focus()
  }
  render() {
    return (
      <div>
        <button onClick={this.focus}>focus</button>
        <input type="text" ref={this.input} />
      </div>
    )
  }
}
export default App;`,Ip=`import { useState, useEffect } from "react";

function TestBatchUpdate() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);


  const asyncHandleClick = () => {
    console.group('async');
    setCount(count + 1);
    requestIdleCallback(() => {
      setCount2(count2 + 1);
      setTimeout(() => {
        console.groupEnd();
      }, 0);
    })
  };
  const syncHandleClick = () => {
    console.group('sync');

    setCount(count + 1);
    setCount2(count2 + 1);
    setTimeout(() => {
      console.groupEnd();
    }, 0);
  };

  useEffect(() => {
    console.log('count after', count, count2);
}, [count, count2]);

  return (
    <div>
      <button onClick={asyncHandleClick}>async not batch, effect will log twice</button>
      <button onClick={syncHandleClick}>sync will  batch update, effect will log one</button>
      <p>Count: {count}</p>
      <p>Count2: {count2}</p>
    </div>
  );
}

TestBatchUpdate.meta = {
  tags: [ 'theory', 'batchUpdate']
}

export default TestBatchUpdate;`,Mp=`---
tags: [ theory, jsx]
---

<script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>

<div id="root"></div>
<script>
  // debug(document.createElement)
  const { createElement }  = React
  function App() {
    return createElement(
      'h1',
      undefined,
      'hello world'
    )
  }
  let mountPoint = document.getElementById('root')
  const root = ReactDOM.createRoot(mountPoint)
  root.render(createElement(App))
  // 查看是什么时候触发的 root 挂载数据
  // debug(mountPoint.appendChild)
<\/script>`,Fp=`---
tags: [theory, jsx]
---

<script src="https://unpkg.com/react@16/umd/react.development.js"><\/script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"><\/script>

<div id="root"></div>
</div>
<script>
  const { createElement }  = React
  class C extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
    add = () => {
      this.setState((state) => ({
        state: state.count++
      }))
    }
    render() {
      return {
        $$typeof: Symbol.for('react.element'),
        type: 'h1',
        props: {
          onClick: this.add,
          children: [
            1,
            this.state.count
          ]
        },
        ref: null
      }
    }
  };
  // 1. 创建 vnode
  c = createElement(C,{
  })
  console.dir(c)
  
  // 2. 挂载节点, 返回生成的 dom 对象
  const res = ReactDOM.render(c ,document.getElementById('root'),function log() {console.log(this)})
  console.dir(res)
<\/script>`;function uu(){return u.jsxs("div",{children:[u.jsxs("h2",{children:[" JSX 模板语法采用 ","{}"," 包裹表达式"]}),u.jsx("ul",{children:u.jsxs("li",{children:["{1 + 1}"," 解析为 ",2]})})]})}uu.text="大括号包裹表达式";uu.meta={tags:["jsx"]};function bp(){return u.jsxs("div",{children:[u.jsx("h2",{children:"jsx 支持的子节点"}),u.jsx("ul",{children:u.jsxs("li",{children:[u.jsx("h3",{children:"布尔,null,undefined 是无效的子节点,表示内容为空 "}),u.jsxs("p",{children:["<strong>{true}</strong>",":",u.jsx("strong",{children:!0}),u.jsx("br",{}),"<strong>{false}</strong>",":",u.jsx("strong",{children:!1}),u.jsx("br",{}),"<strong>{null}</strong>",":",u.jsx("strong",{children:null}),u.jsx("br",{}),"<strong>{undefined}</strong>",":",u.jsx("strong",{children:void 0}),u.jsx("br",{}),"<strong>{0}</strong>",": 注意 0 是有效子节点",u.jsx("strong",{children:0}),u.jsx("br",{})]})]})})]})}bp.text="jsx 子节点";function zp(){return u.jsxs("div",{children:[u.jsx("h2",{children:"采用类编写组价"}),u.jsx("ul",{children:u.jsx("li",{children:u.jsx(ax,{a:1,b:2})})})]})}zp.text="类组件";let ax=class extends O.Component{render(){return u.jsx("p",{children:JSON.stringify(this.props)})}};function $p(){return u.jsxs("div",{children:[u.jsx("h2",{children:"类组件默认值采用 defaultProps"}),u.jsx("ul",{children:u.jsxs("li",{children:[u.jsx("h3",{children:"采用默认值"}),"默认值:",u.jsx(Da,{}),u.jsx("br",{}),"为赋值属性会采用默认值:",u.jsx(Da,{foo:"foo"})]})})]})}$p.text="类组件 defaultProps";var li;let Da=(li=class extends O.Component{render(){return u.jsx("strong",{children:JSON.stringify(this.props)})}},V(li,"defaultProps",{foo:"default",bar:"default"}),li);function Up(){return u.jsxs("div",{children:[u.jsx("h2",{children:"采用箭头函数避免 this 丢失"}),u.jsx(cx,{a:1,b:2})]})}Up.text="直接绑定事件注意避免 this 丢失";let cx=class extends O.Component{constructor(){super(...arguments);V(this,"showProps",(t,...r)=>{alert("点击事件"),console.log(this.props,t,r)})}render(){return u.jsxs("div",{children:[u.jsx("button",{onClick:this.showProps,children:"点击"}),u.jsx("button",{onClick:t=>this.showProps(t,new Date,1,2,3),children:"传入参数"})]})}};function Bp(){return u.jsxs("div",{children:[u.jsx("h2",{children:"hooks 控制组件状态"}),u.jsx("ul",{children:u.jsx("li",{children:u.jsx(dx,{})})})]})}let dx=class extends O.Component{constructor(n){super(n),this.state={date:new Date}}componentDidMount(){this.timerId=setInterval(()=>this.tick(),1e3)}componentWillUnmount(){clearInterval(this.timerId)}tick(){this.setState({date:new Date})}render(){return u.jsx("div",{children:u.jsxs("h2",{children:["It is ",this.state.date.toLocaleTimeString(),"."]})})}};Bp.text="类组件利用 hooks 触发特定事件";function Hp(){return u.jsxs("div",{children:[u.jsx("h2",{children:"利用 this.setState 管理组件内部状态"}),u.jsx("ul",{children:u.jsx("li",{children:u.jsx(fx,{increment:1,decrement:-1})})})]})}let fx=class extends O.Component{constructor(n){super(n),this.state={count:0}}add(){this.setState((n,t)=>({count:n.count+t.increment}))}minus(){this.setState((n,t)=>({count:n.count+t.decrement}))}render(){return u.jsxs("div",{children:[u.jsx("h2",{children:this.state.count}),u.jsx("button",{style:{marginRight:"1rem"},onClick:this.add.bind(this),children:"+"}),u.jsx("button",{onClick:this.minus.bind(this),children:"-"})]})}};Hp.text="类组件 setState 改变内部状态";function Wp(){return u.jsxs("div",{children:[u.jsx("h2",{children:"利用 this.state 管理组件内部状态"}),u.jsx("ul",{children:u.jsx("li",{children:u.jsx(px,{})})})]})}let px=class extends O.Component{constructor(n){super(n),this.state={date:new Date}}render(){return u.jsx("div",{children:u.jsxs("h2",{children:["It is ",this.state.date.toLocaleTimeString(),"."]})})}};Wp.text="类组件 state 保存状态";const au=O.createContext("dark");function Vp(){return u.jsxs("div",{children:[u.jsx("h2",{children:" React.createContext 使子孙节点可获得祖先节点属性"}),u.jsxs("ul",{children:[u.jsxs("li",{children:[u.jsx("h3",{children:"祖先节点使用 Context.Provider 提供值"}),u.jsxs("ul",{children:[u.jsx("li",{children:"1. 使用 React.createContext 创建常量"}),u.jsx("li",{children:"2. 使用 Context.Provider 提供值"}),u.jsx("li",{children:"3. 类组件设置 contextType 静态变量绑定 context"}),u.jsx("li",{children:"4. 类组件使用 thi.context 访问状态"})]}),u.jsx(au.Provider,{value:"light",children:u.jsx(Yp,{})})]}),u.jsxs("li",{children:[u.jsx("h3",{children:"祖先节点使用 Context.Provider 提供值"}),u.jsxs("ul",{children:[u.jsx("li",{children:"1. 使用 React.createContext 创建常量"}),u.jsx("li",{children:"2. 使用 Context.Provider 提供值"}),u.jsx("li",{children:"3. 类组件设置 contextType 静态变量绑定 context"}),u.jsx("li",{children:"4. 类组件使用 thi.context 访问状态"})]}),u.jsxs("li",{children:[u.jsx("h3",{children:"利用类组件修改 context 的值"}),u.jsx("ul",{children:u.jsx("li",{children:"1. 避免采用字面量对象在 provider 中"})}),u.jsx(hx,{})]})]})]})]})}Vp.text="React.createContext";class hx extends O.Component{constructor(n){super(n),this.state={theme:"light"}}render(){return u.jsxs(au.Provider,{value:this.state.theme,children:[u.jsx(Yp,{}),u.jsx("input",{type:"text",onChange:n=>{this.setState({theme:n.target.value})}})]})}}function Yp(){return u.jsx("p",{children:u.jsx(Kp,{})})}class Kp extends O.Component{render(){return u.jsx("span",{children:this.context})}}V(Kp,"contextType",au);function Qp(){return u.jsxs("div",{children:[u.jsx("h2",{children:"循环组件的替换规则"}),u.jsx("ul",{children:u.jsxs("li",{children:[u.jsx("h3",{children:"即使不带 key 节点相同只进行属性更新不替换节点"}),u.jsx(mx,{})]})})]})}let mx=class extends O.Component{constructor(n){super(n),this.state={before:!1,after:!1}}componentDidMount(){this._el=document.querySelector("#diff-mount")}render(){return u.jsxs("div",{children:[u.jsx("button",{onClick:()=>this.setState(n=>({before:n.before?null:!0})),children:"节点之前插入"}),u.jsx("button",{onClick:()=>this.setState(n=>({after:n.after?null:!0})),children:"节点之后插入"}),u.jsxs("div",{children:[this.state.before&&u.jsx(co,{},"1"),u.jsx(co,{},"2"),u.jsx(co,{},"3"),this.state.after&&u.jsx(co,{},"4")]})]})}};var Zn;let co=(Zn=class extends O.Component{constructor(n){super(n),this._id=Zn.ID++}componentWillMount(){console.groupEnd(),console.group(`mount ${this._id}`),console.log(`节点将挂载 ${this._id}`)}componentWillUnmount(){console.log(`节点将卸载 ${this._id}`),console.groupEnd()}componentWillReceiveProps(){console.log(`节点将接收属性 ${this._id} `)}componentWillUpdate(){console.log(`节点将更新 ${this._id} `)}render(){return u.jsxs("p",{children:["属性更新 ",new Date().toLocaleTimeString(),":",this._id]})}},V(Zn,"ID",0),Zn);Qp.text="dom diff  key";function Gp(){return u.jsxs("div",{children:[u.jsx("h2",{children:"DomDiff 节点属性不同更新节点不触发替换"}),u.jsx("ul",{children:u.jsxs("li",{children:[u.jsx("h3",{children:"属性不同触发替换"}),u.jsx(gx,{})]})})]})}class gx extends O.Component{constructor(t){super(t);V(this,"updateProps",()=>{this.setState(t=>({foo:t.foo==="foo"?"bar":"foo",[new Date().getTime().toString()]:Math.random()}))});this.state={foo:"a"}}render(){return u.jsxs("div",{children:[u.jsx("button",{onClick:this.updateProps,children:"更新属性"}),u.jsx(vx,{...this.state})]})}}var Ke;let vx=(Ke=class extends O.Component{componentWillMount(){console.group(`mount ${Ke.mountCount}`),Ke.mountCount++,console.log("节点将挂载")}componentWillUnmount(){console.log("节点将卸载"),console.groupEnd()}componentWillReceiveProps(){console.group(`update ${Ke.update}`),Ke.update++,console.log("节点将接收属性")}componentWillUpdate(){console.log("节点将更新"),console.groupEnd()}render(){return u.jsxs("p",{children:["属性更新 ",new Date().toLocaleTimeString(),": ",JSON.stringify(this.props)]})}},V(Ke,"mountCount",0),V(Ke,"update",0),Ke);Gp.text="dom diff props";function Xp(){return u.jsxs("div",{children:[u.jsx("h2",{children:"DomDiff 根节点不同直接替换"}),u.jsx("ul",{children:u.jsxs("li",{children:[u.jsx("h3",{children:"根节点不同会触发替换"}),u.jsx(xx,{})]})})]})}class xx extends O.Component{constructor(t){super(t);V(this,"changeRoot",()=>{this.setState(t=>({rootName:t.rootName==="div"?"section":"div"}))});this.state={rootName:"div"}}render(){return u.jsxs("div",{children:[u.jsx("button",{onClick:this.changeRoot,children:"跟换节点"}),w.createElement(this.state.rootName,null,u.jsx(yx,{}))]})}}var En;let yx=(En=class extends O.Component{componentWillMount(){console.group(`mount ${En.mountCount}`),En.mountCount++,console.log("节点将挂载")}componentWillUnmount(){console.log("节点将卸载"),console.groupEnd()}render(){return u.jsxs("p",{children:[new Date().toLocaleTimeString(),": 子节点刷新"]})}},V(En,"mountCount",0),En);Xp.text="dom diff replace";function Jp(){return u.jsxs("div",{children:[u.jsx("h2",{children:"循环组件的替换规则"}),u.jsx("ul",{children:u.jsxs("li",{children:[u.jsx("h3",{children:"即使不带 key 节点相同只进行属性更新不替换节点"}),u.jsx(Cx,{})]})})]})}class Cx extends O.Component{constructor(n){super(n),this.state={before:!1,after:!1}}componentDidMount(){this._el=document.querySelector("#diff-mount")}render(){return u.jsxs("div",{children:[u.jsx("button",{onClick:()=>this.setState(n=>({before:n.before?null:!0})),children:"节点之前插入"}),u.jsx("button",{onClick:()=>this.setState(n=>({after:n.after?null:!0})),children:"节点之后插入"}),u.jsxs("div",{id:"diff-mount",children:[this.state.before&&u.jsx(jt,{}),u.jsx(jt,{}),u.jsx(jt,{}),this.state.after&&u.jsx(jt,{})]})]})}}const ol=class ol extends O.Component{constructor(n){super(n),this._id=ol.ID++}componentWillMount(){console.groupEnd(),console.group(`mount ${this._id}`),console.log(`节点将挂载 ${this._id}`)}componentWillUnmount(){console.log(`节点将卸载 ${this._id}`),console.groupEnd()}componentWillReceiveProps(){console.log(`节点将接收属性 ${this._id} `)}componentWillUpdate(){console.log(`节点将更新 ${this._id} `)}render(){return u.jsxs("p",{children:["属性更新 ",new Date().toLocaleTimeString(),":",this._id]})}};V(ol,"ID",0);let jt=ol;Jp.text="dom diff without key";const Oa={A:e=>u.jsx("span",{children:"组件 A"}),B:e=>u.jsx("span",{children:"组件 B"})};function Zp(){return u.jsxs("div",{children:[u.jsx("h2",{children:" JSX 可以暴露对象返回多个组件"}),u.jsx("ul",{children:u.jsxs("li",{children:[u.jsx("h3",{children:"采用对象方式访问子组件"}),u.jsxs("p",{children:["MyComponent.A",":",u.jsx(Oa.A,{})]}),u.jsxs("p",{children:["MyComponent.B",":",u.jsx(Oa.B,{})]})]})})]})}Zp.text="采用 . 暴露多个 React 组件";class Sx extends O.Component{constructor(){super(),this.state={error:null,info:null}}componentDidCatch(n,t){this.setState({error:n,info:t}),console.log("error:",arguments)}render(){return this.state.error?u.jsxs("div",{children:[u.jsx("h2",{children:"Something went wrong."}),u.jsxs("details",{style:{whiteSpace:"pre-wrap"},children:[this.state.error&&this.state.error.toString(),u.jsx("br",{}),this.state.info.componentStack]})]}):this.props.children}}function kx(){let[e,n]=w.useState(1),t=()=>{n(e+1)};if(e>5)throw new Error("count error");return u.jsx("button",{onClick:t,children:e})}function wx(e){return u.jsxs("div",{children:[u.jsx("h1",{children:"使用 componentDidCatch 补货错误"}),u.jsx(Sx,{children:u.jsx(kx,{})})]})}function qp(){return u.jsxs("div",{children:[u.jsx("h2",{children:"采用类编写组价"}),u.jsxs("ul",{children:[u.jsxs("li",{children:[u.jsx("h3",{children:"采用类编写受控组件"}),u.jsx(_x,{init:"initial"})]}),u.jsxs("li",{children:[u.jsx("h3",{children:"非受控组件内部持有状态"}),u.jsx("input",{type:"text",onChange:e=>{console.log("value",e.target.value)}})]})]})]})}let _x=class extends O.Component{constructor(t){super(t);V(this,"changeValue",t=>{let{target:r}=t;this.setState({value:r.value})});this.state={value:t.init}}render(){return u.jsxs("p",{children:[u.jsx("input",{type:"text",value:this.state.value,onChange:this.changeValue}),u.jsx("strong",{children:this.state.value}),u.jsx("button",{onClick:()=>this.setState({value:""}),children:"reset"})]})}};qp.text="表单组件示例";function eh(){return u.jsxs("div",{children:[u.jsx("h2",{children:"组件初始有值则为只读,通过设置为空触发可修改"}),u.jsx("ul",{children:u.jsxs("li",{children:[u.jsx("h3",{children:"设置组件可修改,注意 null , undefined 不会修改组件的状态"}),u.jsx(jx,{init:"initial"})]})})]})}class jx extends O.Component{constructor(n){super(n),this.state={value:n.init}}render(){return u.jsxs("p",{children:[u.jsx("input",{type:"text",value:this.state.value}),u.jsx("strong",{children:this.state.value}),u.jsx("button",{onClick:()=>this.setState({value:""}),children:"reset"}),u.jsx("button",{onClick:()=>this.setState({value:null}),children:"null"}),u.jsx("button",{onClick:()=>this.setState({value:void 0}),children:"undefined"})]})}}eh.text="表单组件只读和复位";function nh(){return u.jsxs("div",{children:[u.jsx("h2",{children:"多个表单组件的控制"}),u.jsx("ul",{children:u.jsxs("li",{children:[u.jsx("h3",{children:"采用 name 动态控制 input"}),u.jsx(Ex,{init:{foo:"a",bar:"b"}})]})})]})}class Ex extends O.Component{constructor(t){super(t);V(this,"changeValue",t=>{let{target:r}=t;this.setState({[r.name]:r.value})});this.state={foo:t.init.foo,bar:t.init.bar}}render(){return u.jsxs("p",{children:[u.jsx("input",{type:"text",name:"foo",value:this.state.foo,onChange:this.changeValue}),u.jsx("input",{type:"text",name:"bar",value:this.state.bar,onChange:this.changeValue}),u.jsx("button",{onClick:()=>this.setState({foo:"",bar:""}),children:"reset"})]})}}nh.text="表单组件控制多个元素";function th(){return u.jsxs("div",{children:[u.jsx("h2",{children:"表单组件 textarea"}),u.jsxs("ul",{children:[u.jsxs("li",{children:[u.jsx("h3",{children:"采用 value 控制 textarea"}),u.jsx(Ia,{init:"lime"})]}),u.jsxs("li",{children:[u.jsx("h3",{children:"采用 multiple 实现多选"}),u.jsx(Ia,{multiple:!0,init:["lime","mango"]})]})]})]})}class Ia extends O.Component{constructor(t){super(t);V(this,"changeHandle",t=>{let{target:r}=t;console.dir(r.selectedOptions),this.setState((o,l)=>({value:l.multiple?[...r.options].filter(({selected:i})=>i).map(({value:i})=>i):r.value}))});this.state={value:t.init}}render(){return u.jsxs("form",{onSubmit:t=>{t.preventDefault()},children:[u.jsxs("label",{children:["pick a item",u.jsxs("select",{multiple:this.props.multiple,value:this.state.value,onChange:this.changeHandle,children:[u.jsx("option",{value:"grapefruit",children:"Grapefruit"}),u.jsx("option",{value:"lime",children:"Lime"}),u.jsx("option",{value:"coconut",children:"Coconut"}),u.jsx("option",{value:"mango",children:"Mango"})]})]}),u.jsx("button",{onClick:()=>this.setState({value:""}),children:"reset"})]})}}th.text="表单组件 select";function rh(){return u.jsxs("div",{children:[u.jsx("h2",{children:"表单组件 textarea"}),u.jsx("ul",{children:u.jsxs("li",{children:[u.jsx("h3",{children:"采用 value 控制 textarea"}),u.jsx(Rx,{init:"initial"})]})})]})}class Rx extends O.Component{constructor(t){super(t);V(this,"onChange",t=>{let{target:r}=t;this.setState({value:r.value})});this.state={value:t.init}}render(){return u.jsxs("p",{children:[u.jsx("textarea",{onChange:this.onChange,value:this.state.value}),u.jsx("button",{onClick:()=>this.setState({value:""}),children:"reset"})]})}}rh.text="表单组件 textarea";function Tx(){return u.jsxs("div",{children:[u.jsx("h2",{children:"采用 fragment 包裹片段代码"}),u.jsxs("ul",{children:[u.jsxs("li",{children:[u.jsxs("h3",{children:["使用 ","<>片段...</>"," 包裹内容"]}),u.jsx(Ax,{})]}),u.jsxs("li",{children:[u.jsxs("h3",{children:["使用 ","<React.Fragment>片段...</React.Fragment>"," 效果相同"]}),u.jsx(Nx,{})]}),u.jsxs("li",{children:[u.jsx("h3",{children:"同样支持传入 key"}),u.jsx(Px,{items:[{id:1,term:"foo",description:"test"},{id:2,term:"foo1",description:"test1"}]})]})]})]})}function Ax(){return u.jsxs(u.Fragment,{children:[u.jsx("p",{children:"这是一个片段没有根元素"}),u.jsx("p",{children:"这是一个片段没有根元素"})]})}function Nx(){return u.jsxs(O.Fragment,{children:[u.jsx("p",{children:"这是一个片段没有根元素"}),u.jsx("p",{children:"这是一个片段没有根元素"})]})}function Px(e){return u.jsx("dl",{children:e.items.map(n=>u.jsxs(O.Fragment,{children:[u.jsx("dt",{children:n.term}),u.jsx("dd",{children:n.description})]},n.id))})}function oh(){return u.jsxs("div",{children:[u.jsx("h2",{children:"采用组件组织文件"}),u.jsx("ul",{children:u.jsx("li",{children:u.jsx(Lx,{a:1,b:2})})})]})}oh.text="函数组件";function Lx(e){return u.jsx("p",{children:JSON.stringify(e)})}function Dx(){return u.jsx("h1",{children:"hello world"})}function Ox(){return u.jsx("h1",{children:"hello world"})}const Ix="modulepreload",Mx=function(e){return"/learn-react/"+e},Ma={},lh=function(n,t,r){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),s=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));o=Promise.allSettled(t.map(a=>{if(a=Mx(a),a in Ma)return;Ma[a]=!0;const c=a.endsWith(".css"),p=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${p}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":Ix,c||(d.as="script"),d.crossOrigin="",d.href=a,s&&d.setAttribute("nonce",s),document.head.appendChild(d),c)return new Promise((h,x)=>{d.addEventListener("load",h),d.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${a}`)))})}))}function l(i){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i}return o.then(i=>{for(const s of i||[])s.status==="rejected"&&l(s.reason);return n().catch(l)})},Fx=O.lazy(()=>lh(()=>import("./HelloWorld-Ow4G81rh.js"),[]));function bx(){return u.jsxs("div",{children:[u.jsx("h2",{children:"采用类编写组价"}),u.jsx("ul",{children:u.jsxs("li",{children:[u.jsx("h2",{children:"这是异步组件,点击触发加载"}),u.jsxs("ul",{children:[u.jsx("li",{children:"1. 采用 React.lazy 引入组件,只能用于默认导出模块"}),u.jsx("li",{children:"2. 在 Suspense 使用组件"}),u.jsx("li",{children:"3. 在 Suspense callback 绑定占位组件"})]}),u.jsx(zx,{})]})})]})}class zx extends O.Component{constructor(n){super(n),this.state={show:!1}}render(){return u.jsxs("div",{children:[u.jsx("button",{onClick:()=>this.setState({show:!0}),children:"show hello world"}),u.jsx(w.Suspense,{fallback:u.jsx("div",{children:"loading..."}),children:this.state.show?u.jsx(Fx,{}):null})]})}}function ih(){let e=[1,2,3,4];return u.jsx("div",{children:u.jsx("ul",{children:u.jsxs("li",{children:[u.jsx("h2",{children:"采用 map 迭代渲染"}),e.map(n=>{let t=[];for(let r=1;r<10;r++)t.push(u.jsx("span",{children:r},r));return u.jsxs("p",{children:["行",n," ",t," "]},n)})]})})})}ih.text="列表熏染";function sh(){return u.jsx("h1",{children:"demo111"})}sh.meta={tags:["mbox"]};let $x=class extends O.Component{constructor(){super(),this.el=document.createElement("div")}componentDidMount(){document.getElementById("modal").appendChild(this.el)}componentWillUnmount(){document.getElementById("modal").removeChild(this.el)}render(){return ou.createPortal(this.props.children,this.el)}};function Ux(){const[e,n]=w.useState(!0),t=()=>{n(e^1)};return u.jsxs("div",{children:[u.jsxs("button",{onClick:t,children:["show: ",e]}),u.jsx("div",{id:"modal"}),e?u.jsx($x,{children:u.jsx("h1",{children:"modal"})}):null]})}class Bx extends O.Component{constructor(){super(),this.el=document.createElement("div")}componentDidMount(){document.getElementById("modal").appendChild(this.el)}render(){return ou.createPortal(this.props.children,this.el)}}function Hx(){const[e,n]=w.useState(0),t=()=>n(e+1);return u.jsxs(u.Fragment,{children:[u.jsx("h1",{children:"Protal 组件会修改事件冒泡,子元素的事件传递取决于组件申明时的位置，而非 dom 挂载的位置"}),u.jsxs("div",{onClick:t,children:[u.jsxs("span",{children:["count:",e]}),u.jsx(Bx,{children:u.jsx("button",{children:"count"})})]}),u.jsx("div",{id:"modal"})]})}function uh(){return u.jsxs("div",{children:[u.jsx("h2",{children:" props 赋值方式"}),u.jsxs("ul",{children:[u.jsxs("li",{children:[u.jsxs("h3",{children:["采用 ","{}"," 赋值表达式 "]}),u.jsxs("p",{children:[`<strong title="{'foo'+'bar'}">test</strong>`,":",u.jsx("strong",{title:"foobar",children:"test"})]})]}),u.jsxs("li",{children:[u.jsx("h3",{children:"采用字符串字面量"}),u.jsxs("p",{children:["<strong title='<3'>test</strong>"," :",u.jsx("strong",{title:"<3",children:"test"})]}),u.jsxs("p",{children:["<strong title={'<3'}>test</strong>"," :",u.jsx("strong",{title:"<3",children:"test"})]})]}),u.jsxs("li",{children:[u.jsx("h3",{children:"布尔值"}),u.jsxs("p",{children:[" <input type='checkbox' checked></input>"," :",u.jsx("input",{type:"checkbox",checked:!0})]}),u.jsxs("p",{children:[" <input type='checkbox' ></input>"," :",u.jsx("input",{type:"checkbox"})]}),u.jsxs("p",{children:["<input type='checkbox' checked={true}></input>"," :",u.jsx("input",{type:"checkbox",checked:!0})]}),u.jsxs("p",{children:["<input type='checkbox' checked={false}></input>"," :",u.jsx("input",{type:"checkbox",checked:!1})]})]}),u.jsx("li",{children:u.jsx("h3",{children:"...会自动扩展属性赋值"})})]})]})}uh.text="props 赋值方式";function ah(){return u.jsxs("div",{children:[u.jsx("h2",{children:" props.children 包含内部子元素,类似 vue 默认 slot"}),u.jsx("ul",{children:u.jsx("li",{children:u.jsx(Wx,{children:u.jsx("h4",{children:"hello world!"})})})})]})}function Wx(e){return u.jsxs("p",{children:[u.jsx("h3",{children:"标签内部元素会替换 props.children"}),e.children]})}ah.text="props.children";function ch(){return u.jsxs("div",{children:[u.jsx("h2",{children:"props 也可传入组件,实现动态注入"}),u.jsx("ul",{children:u.jsxs("li",{children:[u.jsx("h3",{children:"children 为标签内内容,其余组件通过属性名注入"}),u.jsx(Vx,{left:u.jsx("strong",{children:"tom"}),right:u.jsx("strong",{children:"jack"}),children:u.jsx("span",{children:"john"})})]})})]})}ch.text="采用 props 实现插槽";function Vx(e){return u.jsxs("p",{children:[e.left,e.children,e.right]})}function dh(){return u.jsxs("div",{children:[u.jsx("h2",{children:" ReactDOM.render 挂载 dom 节点"}),setInterval(Yx,1e3),u.jsx("div",{id:"d1"})]})}function Yx(){const e=u.jsx("div",{children:u.jsxs("h2",{children:["It is ",new Date().toLocaleTimeString(),"."]})});ou.render(e,document.getElementById("d1"))}dh.text="ReactDOM.Render";class Kx extends O.Component{constructor(){super(...arguments);V(this,"state",{x:0,y:0});V(this,"handleMouseMove",t=>{this.setState({x:t.clientX,y:t.clientY})})}render(){return u.jsx("div",{style:{height:"400px",border:"1px solid red"},onMouseMove:this.handleMouseMove,children:this.props.render(this.state)})}}function fh(e){return u.jsx(Kx,{render:({x:n,y:t})=>u.jsxs("h1",{children:["position: (",n,",",t,")"]})})}fh.meta={tags:["tricks","render-props"]};const cu="/src/App.js",ph="/src/styles.css",xS=[cu,ph],Qx=e=>e.reduce((n,t)=>{if(t.type.mdxName!=="pre"&&t.type!=="pre")return n;const{props:r}=t.props.children;let o,l=!1,i=!1;if(r.className==="language-html")o="/index.html",i=!0,n["/package.json"]={code:JSON.stringify({name:"static-html",main:"/index.html",dependencies:{}}),hidden:!0};else if(r.meta){const[s,...a]=r.meta.split(" ");o="/"+s,a.includes("hidden")&&(l=!0),a.includes("active")&&(i=!0)}else if(r.className==="language-js")o=cu;else if(r.className==="language-css")o=ph;else throw new Error(`Code block is missing a filename: ${r.children}`);if(n[o])throw new Error(`File ${o} was defined multiple times. Each file snippet should have a unique path name`);return n[o]={code:r.children||"",hidden:l,active:i},n},{}),Gx=w.lazy(()=>lh(()=>import("./SandpackRoot-BlbeJDLP.js").then(e=>e.k),[])),Xx=({code:e})=>u.jsx("div",{className:"sandpack sandpack--playground",style:{height:"100vh"},children:u.jsx("div",{className:"sp-wrapper",style:{height:"100%"},children:u.jsxs("div",{className:"shadow-lg dark:shadow-lg-dark rounded-lg",style:{height:"100%",display:"flex",flexDirection:"column"},children:[u.jsxs("div",{className:"bg-wash h-10 dark:bg-card-dark flex justify-between items-center relative z-10 border-b border-border dark:border-border-dark rounded-t-lg",children:[u.jsx("div",{className:"px-4 lg:px-6",children:u.jsx("div",{className:"sp-tabs",children:"App.js"})}),u.jsx("div",{className:"px-3 flex items-center justify-end grow text-right"})]}),u.jsxs("div",{className:"sp-layout flex flex-1",style:{minHeight:0},children:[u.jsx("div",{className:"sp-stack sp-editor flex-1",style:{overflow:"hidden",display:"flex",flexDirection:"column"},children:u.jsx("div",{className:"sp-code-editor flex-1",style:{overflow:"auto"},children:u.jsx("div",{className:"sp-cm sp-pristine h-full",children:u.jsx("div",{className:"cm-editor h-full",children:u.jsx("div",{className:"h-full",children:u.jsx("div",{className:"cm-gutters ps-9 sticky min-h-[192px]",children:u.jsx("div",{className:"cm-gutter cm-lineNumbers whitespace-pre sp-pre-placeholder",children:e})})})})})})}),u.jsx("div",{className:"sp-stack w-[400px]",style:{overflow:"hidden",display:"flex",flexDirection:"column"},children:u.jsx("div",{className:"bg-card dark:bg-wash-dark flex-1",style:{overflow:"auto",position:"relative"}})})]}),e.split(`
`).length>16&&u.jsx("div",{className:"flex h-[45px] text-base justify-between dark:border-card-dark bg-wash dark:bg-card-dark items-center z-10 rounded-t-none p-1 w-full border-b-1"})]})})}),Wr=w.memo(function(n){const t=Qx(w.Children.toArray(n.children));let r=Object.keys(t).filter(l=>{var i,s;return((i=t[l])==null?void 0:i.active)===!0&&((s=t[l])==null?void 0:s.hidden)===!1}),o;return r.length?o=t[r[0]].code:o=t[cu].code,u.jsx(w.Suspense,{fallback:u.jsx(Xx,{code:o}),children:u.jsx(Gx,{...n})})});function hh(){return u.jsxs(Wr,{children:[u.jsx("pre",{children:u.jsx("code",{className:"language-js",children:`
         import { getImageUrl } from './utils.js';
         import { Hello } from './hello.jsx';

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <div>
        <Hello/>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
}

         `})}),u.jsx("pre",{children:u.jsx("code",{meta:"src/hello.jsx",className:"language-jsx",children:"export function Hello() { return <h1>hello</h1> }"})}),u.jsx("pre",{children:u.jsx("code",{meta:"src/utils.js",className:"language-ts",children:`export function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}
`})}),u.jsx("pre",{children:u.jsx("code",{className:"language-css",children:`body { min-height: 120px; }
.avatar { margin: 10px; border-radius: 50%; }
`})})]})}hh.meta={disableSandpack:!0};function mh(){return u.jsxs(Wr,{template:"vanilla",children:[u.jsx("pre",{children:u.jsx("code",{className:"language-html",children:`<script src="https://cdn.jsdelivr.net/npm/react/umd/react.development.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.development.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/@babel/standalone"><\/script>

<div id="root"></div>
<script type="text/babel">
  const { createElement }  = React

  const Hello = (
    <h1>hello react111!</h1>
  )
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(Hello)

<\/script>`})}),u.jsx("pre",{children:u.jsx("code",{className:"language-css",children:`body { 
          min-height: 120px; 
        }
        h1 { 
          color: blue; 
        }`})})]})}mh.meta={disableSandpack:!0};function gh(){return u.jsxs(Wr,{children:[u.jsx("pre",{children:u.jsx("code",{className:"language-js",children:`
         import { getImageUrl } from './utils.js';
         import { Hello } from './hello.jsx';

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <div>
        <Hello/>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
}

         `})}),u.jsx("pre",{children:u.jsx("code",{meta:"src/hello.jsx",className:"language-jsx",children:"export function Hello() { return <h1>hello</h1> }"})}),u.jsx("pre",{children:u.jsx("code",{meta:"src/utils.js",className:"language-ts",children:`export function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}
`})}),u.jsx("pre",{children:u.jsx("code",{className:"language-css",children:`body { min-height: 120px; }
.avatar { margin: 10px; border-radius: 50%; }
`})})]})}gh.meta={disableSandpack:!0};function Jx(e){return u.jsxs("div",{children:[u.jsx("h2",{children:"slot scope in react test"}),u.jsx("ul",{children:e.lists.map(n=>e.item?e.item({item:n}):u.jsx("li",{children:JSON.stringify(n)}))})]})}function vh(){return u.jsx(Jx,{item:Zx,lists:[{a:1},{a:2}]})}function Zx(e){return u.jsxs("span",{children:[e.item.a,u.jsx("br",{})]})}vh.meta={tags:["slot-scope"]};const lr={light:{background:"#fefefe",color:"#888",padding:"10px"},dark:{background:"#333",color:"#f3f3f3",padding:"10px"}},xh=O.createContext(lr.light);function yh(e){return u.jsx(xh.Consumer,{children:n=>u.jsx("button",{...e,style:n})})}function qx(e){return u.jsx(yh,{onClick:e.changeTheme,children:"change theme"})}let e1=class extends O.Component{constructor(){super();V(this,"changeTheme",()=>{this.setState(t=>({theme:t.theme===lr.light?lr.dark:lr.light}))});this.state={theme:lr.light}}render(){return u.jsxs("div",{children:[u.jsx(xh.Provider,{value:this.state.theme,children:u.jsx(qx,{changeTheme:this.changeTheme})}),u.jsx(yh,{children:"demo---"}),u.jsx("p",{children:JSON.stringify(this.state.theme)})]})}};const n1=()=>u.jsx(e1,{});function Ch(){let[e,n]=w.useState(0);return u.jsx("button",{onClick:()=>n(++e),children:e})}Ch.meta={tags:["hook"]};function Sh(){let[e,n]=w.useState(0);return w.useEffect(()=>{document.title=`${e}`}),u.jsx("button",{onClick:()=>n(++e),children:e})}Sh.meta={tags:["hook"]};function t1(){let[e,n]=w.useState("");function t(r){n(r.type)}return w.useEffect(()=>(window.addEventListener("offline",t),window.addEventListener("online",t),()=>{console.log("trigger unmounted"),window.removeEventListener("offline",t),window.removeEventListener("online",t)})),u.jsxs("h3",{children:["网络状态: ",e]})}function kh(){let[e,n]=w.useState(!0);function t(){n(!e)}return u.jsxs("div",{children:[e?u.jsx(t1,{}):null,u.jsx("button",{onClick:t,children:"toggle"})]})}kh.meta={tags:["hook"]};function wh(){const e={count:0};return setTimeout(()=>{let[n,t]=w.useState(0);setTimeout(()=>t(10),1e3)},2e3),u.jsx("p",{children:e.count})}wh.meta={tags:["hook"]};function r1(){const[e,n]=w.useState("");function t(r){n(r.type)}return w.useEffect(()=>(window.addEventListener("online",t),window.addEventListener("offline",t),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",t)})),e}function _h(){const e=r1();return u.jsxs("p",{children:["网络状态: ",e]})}_h.meta={tags:["hook"]};function jh(){let[e,n]=w.useState(0),[t,r]=w.useState(0);return w.useEffect(()=>{console.log(`count: ${e}, count1: ${t}`)},[e]),u.jsxs("div",{children:[u.jsx("button",{onClick:()=>n(++e),children:e}),u.jsx("button",{onClick:()=>r(++t),children:t})]})}jh.meta={tags:["hook"]};function Eh(){let[e,n]=w.useState(0);return w.useEffect(()=>{console.log(`count: ${e}`)},[]),u.jsx("div",{children:u.jsx("button",{onClick:()=>n(++e),children:e})})}Eh.meta={tags:["hook"]};function Rh(){const[e,n]=w.useState(()=>1);return u.jsxs("div",{children:[u.jsx("p",{children:e}),u.jsx("button",{onClick:()=>n(t=>t+1),children:"add"}),u.jsx("button",{onClick:()=>n(t=>t-1),children:"minus"})]})}Rh.meta={tags:["hook"]};function Th(){const[e,n]=w.useState([{label:"todo1",done:!1},{label:"todo2",done:!1},{label:"todo3",done:!1}]);function t(r,o){const l=[...e];l[r].done=!!o.target.checked,n(l)}return u.jsx("div",{children:e.map((r,o)=>u.jsxs("div",{children:[u.jsx("input",{type:"checkbox",checked:r.done,onChange:l=>t(o,l)}),u.jsxs("span",{children:[r.label," ",r.done?`done ${new Date}`:`undone ${new Date}`]})]}))})}Th.meta={tags:["hook"]};const Ah={dark:{background:"#fff",color:"#000"},light:{background:"#000",color:"#fff"}},Fa=w.createContext(Ah.dark);function Nh(){const e=w.useContext(Fa),[n,t]=w.useState("dark");return u.jsxs(Fa.Provider,{value:Ah[n],children:[u.jsx("h1",{style:e,children:"test text"}),u.jsxs("button",{onClick:()=>t(n==="dark"?"light":"dark"),children:["toggle theme ",n]})]})}Nh.meta={tags:["hook"]};const du=0;function o1(){return du}function l1(e,n){switch(n){case 0:return e+1;case 1:return e-1;case 2:return du;default:throw new Error(`no this action: ${n}`)}}function Ph(){let[e,n]=w.useReducer(l1,du,o1);return u.jsxs("div",{children:[u.jsx("h3",{children:e}),u.jsxs("div",{children:[u.jsx("button",{onClick:()=>n(0),children:"add"}),u.jsx("button",{onClick:()=>n(1),children:"minus"}),u.jsx("button",{onClick:()=>n(2),children:"reset"})]})]})}Ph.meta={tags:["hook"]};function i1(e){return u.jsx("input",{type:"text",ref:e.getRef})}let s1=class extends O.Component{constructor(){super();V(this,"getRef",t=>{this.input=t});V(this,"focus",()=>{this.input&&this.input.focus()});this.input=null}render(){return u.jsxs("div",{children:[u.jsx("button",{onClick:this.focus,children:"focus"}),u.jsx(i1,{getRef:this.getRef})]})}};function u1(e){const n=O.useRef(),t=()=>{n&&n.current.focus()};return u.jsxs("div",{children:[u.jsx("button",{onClick:t,children:"focus"}),u.jsx("input",{type:"text",ref:n})]})}const a1=()=>u.jsx(u1,{});class c1 extends O.Component{render(){return u.jsx("input",{type:"text",ref:this.props.ref1})}}const d1=O.forwardRef((e,n)=>u.jsx(c1,{ref1:n}));let f1=class extends O.Component{constructor(){super(...arguments);V(this,"focus",()=>{this.refs.input&&this.refs.input.focus()})}render(){return u.jsxs("div",{children:[u.jsx("button",{onClick:this.focus,children:"focus"}),u.jsx(d1,{ref:"input"})]})}};const p1=O.forwardRef((e,n)=>u.jsx("input",{ref:n}));let h1=class extends O.Component{constructor(){super();V(this,"focus",()=>{this.ref&&this.ref.current.focus()});this.ref=O.createRef()}render(){return u.jsxs("div",{children:[u.jsx("button",{onClick:this.focus,children:"focus"}),u.jsx(p1,{ref:this.ref})]})}},m1=class extends O.Component{constructor(){super(...arguments);V(this,"focus",()=>{this.refs.input&&this.refs.input.focus()})}render(){return u.jsxs("div",{children:[u.jsx("button",{onClick:this.focus,children:"focus"}),u.jsx("input",{ref:"input"})]})}},g1=class extends O.Component{constructor(){super();V(this,"focus",()=>{console.log("----",this.input.current),this.input.current.focus()});this.input=O.createRef()}render(){return u.jsxs("div",{children:[u.jsx("button",{onClick:this.focus,children:"focus"}),u.jsx("input",{type:"text",ref:this.input})]})}};function Lh(){const[e,n]=w.useState(0),[t,r]=w.useState(0),o=()=>{console.group("async"),n(e+1),requestIdleCallback(()=>{r(t+1),setTimeout(()=>{console.groupEnd()},0)})},l=()=>{console.group("sync"),n(e+1),r(t+1),setTimeout(()=>{console.groupEnd()},0)};return w.useEffect(()=>{console.log("count after",e,t)},[e,t]),u.jsxs("div",{children:[u.jsx("button",{onClick:o,children:"async not batch, effect will log twice"}),u.jsx("button",{onClick:l,children:"sync will  batch update, effect will log one"}),u.jsxs("p",{children:["Count: ",e]}),u.jsxs("p",{children:["Count2: ",t]})]})}Lh.meta={tags:["theory","batchUpdate"]};/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Dh(e){return typeof e>"u"||e===null}function v1(e){return typeof e=="object"&&e!==null}function x1(e){return Array.isArray(e)?e:Dh(e)?[]:[e]}function y1(e,n){var t,r,o,l;if(n)for(l=Object.keys(n),t=0,r=l.length;t<r;t+=1)o=l[t],e[o]=n[o];return e}function C1(e,n){var t="",r;for(r=0;r<n;r+=1)t+=e;return t}function S1(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var k1=Dh,w1=v1,_1=x1,j1=C1,E1=S1,R1=y1,re={isNothing:k1,isObject:w1,toArray:_1,repeat:j1,isNegativeZero:E1,extend:R1};function Oh(e,n){var t="",r=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(t+='in "'+e.mark.name+'" '),t+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(t+=`

`+e.mark.snippet),r+" "+t):r}function Ir(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=Oh(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Ir.prototype=Object.create(Error.prototype);Ir.prototype.constructor=Ir;Ir.prototype.toString=function(n){return this.name+": "+Oh(this,n)};var xe=Ir;function ei(e,n,t,r,o){var l="",i="",s=Math.floor(o/2)-1;return r-n>s&&(l=" ... ",n=r-s+l.length),t-r>s&&(i=" ...",t=r+s-i.length),{str:l+e.slice(n,t).replace(/\t/g,"→")+i,pos:r-n+l.length}}function ni(e,n){return re.repeat(" ",n-e.length)+e}function T1(e,n){if(n=Object.create(n||null),!e.buffer)return null;n.maxLength||(n.maxLength=79),typeof n.indent!="number"&&(n.indent=1),typeof n.linesBefore!="number"&&(n.linesBefore=3),typeof n.linesAfter!="number"&&(n.linesAfter=2);for(var t=/\r?\n|\r|\0/g,r=[0],o=[],l,i=-1;l=t.exec(e.buffer);)o.push(l.index),r.push(l.index+l[0].length),e.position<=l.index&&i<0&&(i=r.length-2);i<0&&(i=r.length-1);var s="",a,c,p=Math.min(e.line+n.linesAfter,o.length).toString().length,d=n.maxLength-(n.indent+p+3);for(a=1;a<=n.linesBefore&&!(i-a<0);a++)c=ei(e.buffer,r[i-a],o[i-a],e.position-(r[i]-r[i-a]),d),s=re.repeat(" ",n.indent)+ni((e.line-a+1).toString(),p)+" | "+c.str+`
`+s;for(c=ei(e.buffer,r[i],o[i],e.position,d),s+=re.repeat(" ",n.indent)+ni((e.line+1).toString(),p)+" | "+c.str+`
`,s+=re.repeat("-",n.indent+p+3+c.pos)+`^
`,a=1;a<=n.linesAfter&&!(i+a>=o.length);a++)c=ei(e.buffer,r[i+a],o[i+a],e.position-(r[i]-r[i+a]),d),s+=re.repeat(" ",n.indent)+ni((e.line+a+1).toString(),p)+" | "+c.str+`
`;return s.replace(/\n$/,"")}var A1=T1,N1=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],P1=["scalar","sequence","mapping"];function L1(e){var n={};return e!==null&&Object.keys(e).forEach(function(t){e[t].forEach(function(r){n[String(r)]=t})}),n}function D1(e,n){if(n=n||{},Object.keys(n).forEach(function(t){if(N1.indexOf(t)===-1)throw new xe('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(t){return t},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=L1(n.styleAliases||null),P1.indexOf(this.kind)===-1)throw new xe('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var ce=D1;function ba(e,n){var t=[];return e[n].forEach(function(r){var o=t.length;t.forEach(function(l,i){l.tag===r.tag&&l.kind===r.kind&&l.multi===r.multi&&(o=i)}),t[o]=r}),t}function O1(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,t;function r(o){o.multi?(e.multi[o.kind].push(o),e.multi.fallback.push(o)):e[o.kind][o.tag]=e.fallback[o.tag]=o}for(n=0,t=arguments.length;n<t;n+=1)arguments[n].forEach(r);return e}function rs(e){return this.extend(e)}rs.prototype.extend=function(n){var t=[],r=[];if(n instanceof ce)r.push(n);else if(Array.isArray(n))r=r.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(t=t.concat(n.implicit)),n.explicit&&(r=r.concat(n.explicit));else throw new xe("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.forEach(function(l){if(!(l instanceof ce))throw new xe("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new xe("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new xe("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),r.forEach(function(l){if(!(l instanceof ce))throw new xe("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var o=Object.create(rs.prototype);return o.implicit=(this.implicit||[]).concat(t),o.explicit=(this.explicit||[]).concat(r),o.compiledImplicit=ba(o,"implicit"),o.compiledExplicit=ba(o,"explicit"),o.compiledTypeMap=O1(o.compiledImplicit,o.compiledExplicit),o};var Ih=rs,Mh=new ce("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),Fh=new ce("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),bh=new ce("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),zh=new Ih({explicit:[Mh,Fh,bh]});function I1(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function M1(){return null}function F1(e){return e===null}var $h=new ce("tag:yaml.org,2002:null",{kind:"scalar",resolve:I1,construct:M1,predicate:F1,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function b1(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function z1(e){return e==="true"||e==="True"||e==="TRUE"}function $1(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var Uh=new ce("tag:yaml.org,2002:bool",{kind:"scalar",resolve:b1,construct:z1,predicate:$1,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function U1(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function B1(e){return 48<=e&&e<=55}function H1(e){return 48<=e&&e<=57}function W1(e){if(e===null)return!1;var n=e.length,t=0,r=!1,o;if(!n)return!1;if(o=e[t],(o==="-"||o==="+")&&(o=e[++t]),o==="0"){if(t+1===n)return!0;if(o=e[++t],o==="b"){for(t++;t<n;t++)if(o=e[t],o!=="_"){if(o!=="0"&&o!=="1")return!1;r=!0}return r&&o!=="_"}if(o==="x"){for(t++;t<n;t++)if(o=e[t],o!=="_"){if(!U1(e.charCodeAt(t)))return!1;r=!0}return r&&o!=="_"}if(o==="o"){for(t++;t<n;t++)if(o=e[t],o!=="_"){if(!B1(e.charCodeAt(t)))return!1;r=!0}return r&&o!=="_"}}if(o==="_")return!1;for(;t<n;t++)if(o=e[t],o!=="_"){if(!H1(e.charCodeAt(t)))return!1;r=!0}return!(!r||o==="_")}function V1(e){var n=e,t=1,r;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),r=n[0],(r==="-"||r==="+")&&(r==="-"&&(t=-1),n=n.slice(1),r=n[0]),n==="0")return 0;if(r==="0"){if(n[1]==="b")return t*parseInt(n.slice(2),2);if(n[1]==="x")return t*parseInt(n.slice(2),16);if(n[1]==="o")return t*parseInt(n.slice(2),8)}return t*parseInt(n,10)}function Y1(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!re.isNegativeZero(e)}var Bh=new ce("tag:yaml.org,2002:int",{kind:"scalar",resolve:W1,construct:V1,predicate:Y1,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),K1=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Q1(e){return!(e===null||!K1.test(e)||e[e.length-1]==="_")}function G1(e){var n,t;return n=e.replace(/_/g,"").toLowerCase(),t=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:t*parseFloat(n,10)}var X1=/^[-+]?[0-9]+e/;function J1(e,n){var t;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(re.isNegativeZero(e))return"-0.0";return t=e.toString(10),X1.test(t)?t.replace("e",".e"):t}function Z1(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||re.isNegativeZero(e))}var Hh=new ce("tag:yaml.org,2002:float",{kind:"scalar",resolve:Q1,construct:G1,predicate:Z1,represent:J1,defaultStyle:"lowercase"}),Wh=zh.extend({implicit:[$h,Uh,Bh,Hh]}),Vh=Wh,Yh=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Kh=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function q1(e){return e===null?!1:Yh.exec(e)!==null||Kh.exec(e)!==null}function ey(e){var n,t,r,o,l,i,s,a=0,c=null,p,d,h;if(n=Yh.exec(e),n===null&&(n=Kh.exec(e)),n===null)throw new Error("Date resolve error");if(t=+n[1],r=+n[2]-1,o=+n[3],!n[4])return new Date(Date.UTC(t,r,o));if(l=+n[4],i=+n[5],s=+n[6],n[7]){for(a=n[7].slice(0,3);a.length<3;)a+="0";a=+a}return n[9]&&(p=+n[10],d=+(n[11]||0),c=(p*60+d)*6e4,n[9]==="-"&&(c=-c)),h=new Date(Date.UTC(t,r,o,l,i,s,a)),c&&h.setTime(h.getTime()-c),h}function ny(e){return e.toISOString()}var Qh=new ce("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:q1,construct:ey,instanceOf:Date,represent:ny});function ty(e){return e==="<<"||e===null}var Gh=new ce("tag:yaml.org,2002:merge",{kind:"scalar",resolve:ty}),fu=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function ry(e){if(e===null)return!1;var n,t,r=0,o=e.length,l=fu;for(t=0;t<o;t++)if(n=l.indexOf(e.charAt(t)),!(n>64)){if(n<0)return!1;r+=6}return r%8===0}function oy(e){var n,t,r=e.replace(/[\r\n=]/g,""),o=r.length,l=fu,i=0,s=[];for(n=0;n<o;n++)n%4===0&&n&&(s.push(i>>16&255),s.push(i>>8&255),s.push(i&255)),i=i<<6|l.indexOf(r.charAt(n));return t=o%4*6,t===0?(s.push(i>>16&255),s.push(i>>8&255),s.push(i&255)):t===18?(s.push(i>>10&255),s.push(i>>2&255)):t===12&&s.push(i>>4&255),new Uint8Array(s)}function ly(e){var n="",t=0,r,o,l=e.length,i=fu;for(r=0;r<l;r++)r%3===0&&r&&(n+=i[t>>18&63],n+=i[t>>12&63],n+=i[t>>6&63],n+=i[t&63]),t=(t<<8)+e[r];return o=l%3,o===0?(n+=i[t>>18&63],n+=i[t>>12&63],n+=i[t>>6&63],n+=i[t&63]):o===2?(n+=i[t>>10&63],n+=i[t>>4&63],n+=i[t<<2&63],n+=i[64]):o===1&&(n+=i[t>>2&63],n+=i[t<<4&63],n+=i[64],n+=i[64]),n}function iy(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var Xh=new ce("tag:yaml.org,2002:binary",{kind:"scalar",resolve:ry,construct:oy,predicate:iy,represent:ly}),sy=Object.prototype.hasOwnProperty,uy=Object.prototype.toString;function ay(e){if(e===null)return!0;var n=[],t,r,o,l,i,s=e;for(t=0,r=s.length;t<r;t+=1){if(o=s[t],i=!1,uy.call(o)!=="[object Object]")return!1;for(l in o)if(sy.call(o,l))if(!i)i=!0;else return!1;if(!i)return!1;if(n.indexOf(l)===-1)n.push(l);else return!1}return!0}function cy(e){return e!==null?e:[]}var Jh=new ce("tag:yaml.org,2002:omap",{kind:"sequence",resolve:ay,construct:cy}),dy=Object.prototype.toString;function fy(e){if(e===null)return!0;var n,t,r,o,l,i=e;for(l=new Array(i.length),n=0,t=i.length;n<t;n+=1){if(r=i[n],dy.call(r)!=="[object Object]"||(o=Object.keys(r),o.length!==1))return!1;l[n]=[o[0],r[o[0]]]}return!0}function py(e){if(e===null)return[];var n,t,r,o,l,i=e;for(l=new Array(i.length),n=0,t=i.length;n<t;n+=1)r=i[n],o=Object.keys(r),l[n]=[o[0],r[o[0]]];return l}var Zh=new ce("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:fy,construct:py}),hy=Object.prototype.hasOwnProperty;function my(e){if(e===null)return!0;var n,t=e;for(n in t)if(hy.call(t,n)&&t[n]!==null)return!1;return!0}function gy(e){return e!==null?e:{}}var qh=new ce("tag:yaml.org,2002:set",{kind:"mapping",resolve:my,construct:gy}),pu=Vh.extend({implicit:[Qh,Gh],explicit:[Xh,Jh,Zh,qh]}),zn=Object.prototype.hasOwnProperty,Zo=1,em=2,nm=3,qo=4,ti=1,vy=2,za=3,xy=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,yy=/[\x85\u2028\u2029]/,Cy=/[,\[\]\{\}]/,tm=/^(?:!|!!|![a-z\-]+!)$/i,rm=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function $a(e){return Object.prototype.toString.call(e)}function rn(e){return e===10||e===13}function nt(e){return e===9||e===32}function _e(e){return e===9||e===32||e===10||e===13}function Et(e){return e===44||e===91||e===93||e===123||e===125}function Sy(e){var n;return 48<=e&&e<=57?e-48:(n=e|32,97<=n&&n<=102?n-97+10:-1)}function ky(e){return e===120?2:e===117?4:e===85?8:0}function wy(e){return 48<=e&&e<=57?e-48:-1}function Ua(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}function _y(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}var om=new Array(256),lm=new Array(256);for(var dt=0;dt<256;dt++)om[dt]=Ua(dt)?1:0,lm[dt]=Ua(dt);function jy(e,n){this.input=e,this.filename=n.filename||null,this.schema=n.schema||pu,this.onWarning=n.onWarning||null,this.legacy=n.legacy||!1,this.json=n.json||!1,this.listener=n.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function im(e,n){var t={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return t.snippet=A1(t),new xe(n,t)}function D(e,n){throw im(e,n)}function el(e,n){e.onWarning&&e.onWarning.call(null,im(e,n))}var Ba={YAML:function(n,t,r){var o,l,i;n.version!==null&&D(n,"duplication of %YAML directive"),r.length!==1&&D(n,"YAML directive accepts exactly one argument"),o=/^([0-9]+)\.([0-9]+)$/.exec(r[0]),o===null&&D(n,"ill-formed argument of the YAML directive"),l=parseInt(o[1],10),i=parseInt(o[2],10),l!==1&&D(n,"unacceptable YAML version of the document"),n.version=r[0],n.checkLineBreaks=i<2,i!==1&&i!==2&&el(n,"unsupported YAML version of the document")},TAG:function(n,t,r){var o,l;r.length!==2&&D(n,"TAG directive accepts exactly two arguments"),o=r[0],l=r[1],tm.test(o)||D(n,"ill-formed tag handle (first argument) of the TAG directive"),zn.call(n.tagMap,o)&&D(n,'there is a previously declared suffix for "'+o+'" tag handle'),rm.test(l)||D(n,"ill-formed tag prefix (second argument) of the TAG directive");try{l=decodeURIComponent(l)}catch{D(n,"tag prefix is malformed: "+l)}n.tagMap[o]=l}};function Mn(e,n,t,r){var o,l,i,s;if(n<t){if(s=e.input.slice(n,t),r)for(o=0,l=s.length;o<l;o+=1)i=s.charCodeAt(o),i===9||32<=i&&i<=1114111||D(e,"expected valid JSON character");else xy.test(s)&&D(e,"the stream contains non-printable characters");e.result+=s}}function Ha(e,n,t,r){var o,l,i,s;for(re.isObject(t)||D(e,"cannot merge mappings; the provided source object is unacceptable"),o=Object.keys(t),i=0,s=o.length;i<s;i+=1)l=o[i],zn.call(n,l)||(n[l]=t[l],r[l]=!0)}function Rt(e,n,t,r,o,l,i,s,a){var c,p;if(Array.isArray(o))for(o=Array.prototype.slice.call(o),c=0,p=o.length;c<p;c+=1)Array.isArray(o[c])&&D(e,"nested arrays are not supported inside keys"),typeof o=="object"&&$a(o[c])==="[object Object]"&&(o[c]="[object Object]");if(typeof o=="object"&&$a(o)==="[object Object]"&&(o="[object Object]"),o=String(o),n===null&&(n={}),r==="tag:yaml.org,2002:merge")if(Array.isArray(l))for(c=0,p=l.length;c<p;c+=1)Ha(e,n,l[c],t);else Ha(e,n,l,t);else!e.json&&!zn.call(t,o)&&zn.call(n,o)&&(e.line=i||e.line,e.lineStart=s||e.lineStart,e.position=a||e.position,D(e,"duplicated mapping key")),o==="__proto__"?Object.defineProperty(n,o,{configurable:!0,enumerable:!0,writable:!0,value:l}):n[o]=l,delete t[o];return n}function hu(e){var n;n=e.input.charCodeAt(e.position),n===10?e.position++:n===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):D(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function ne(e,n,t){for(var r=0,o=e.input.charCodeAt(e.position);o!==0;){for(;nt(o);)o===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),o=e.input.charCodeAt(++e.position);if(n&&o===35)do o=e.input.charCodeAt(++e.position);while(o!==10&&o!==13&&o!==0);if(rn(o))for(hu(e),o=e.input.charCodeAt(e.position),r++,e.lineIndent=0;o===32;)e.lineIndent++,o=e.input.charCodeAt(++e.position);else break}return t!==-1&&r!==0&&e.lineIndent<t&&el(e,"deficient indentation"),r}function jl(e){var n=e.position,t;return t=e.input.charCodeAt(n),!!((t===45||t===46)&&t===e.input.charCodeAt(n+1)&&t===e.input.charCodeAt(n+2)&&(n+=3,t=e.input.charCodeAt(n),t===0||_e(t)))}function mu(e,n){n===1?e.result+=" ":n>1&&(e.result+=re.repeat(`
`,n-1))}function Ey(e,n,t){var r,o,l,i,s,a,c,p,d=e.kind,h=e.result,x;if(x=e.input.charCodeAt(e.position),_e(x)||Et(x)||x===35||x===38||x===42||x===33||x===124||x===62||x===39||x===34||x===37||x===64||x===96||(x===63||x===45)&&(o=e.input.charCodeAt(e.position+1),_e(o)||t&&Et(o)))return!1;for(e.kind="scalar",e.result="",l=i=e.position,s=!1;x!==0;){if(x===58){if(o=e.input.charCodeAt(e.position+1),_e(o)||t&&Et(o))break}else if(x===35){if(r=e.input.charCodeAt(e.position-1),_e(r))break}else{if(e.position===e.lineStart&&jl(e)||t&&Et(x))break;if(rn(x))if(a=e.line,c=e.lineStart,p=e.lineIndent,ne(e,!1,-1),e.lineIndent>=n){s=!0,x=e.input.charCodeAt(e.position);continue}else{e.position=i,e.line=a,e.lineStart=c,e.lineIndent=p;break}}s&&(Mn(e,l,i,!1),mu(e,e.line-a),l=i=e.position,s=!1),nt(x)||(i=e.position+1),x=e.input.charCodeAt(++e.position)}return Mn(e,l,i,!1),e.result?!0:(e.kind=d,e.result=h,!1)}function Ry(e,n){var t,r,o;if(t=e.input.charCodeAt(e.position),t!==39)return!1;for(e.kind="scalar",e.result="",e.position++,r=o=e.position;(t=e.input.charCodeAt(e.position))!==0;)if(t===39)if(Mn(e,r,e.position,!0),t=e.input.charCodeAt(++e.position),t===39)r=e.position,e.position++,o=e.position;else return!0;else rn(t)?(Mn(e,r,o,!0),mu(e,ne(e,!1,n)),r=o=e.position):e.position===e.lineStart&&jl(e)?D(e,"unexpected end of the document within a single quoted scalar"):(e.position++,o=e.position);D(e,"unexpected end of the stream within a single quoted scalar")}function Ty(e,n){var t,r,o,l,i,s;if(s=e.input.charCodeAt(e.position),s!==34)return!1;for(e.kind="scalar",e.result="",e.position++,t=r=e.position;(s=e.input.charCodeAt(e.position))!==0;){if(s===34)return Mn(e,t,e.position,!0),e.position++,!0;if(s===92){if(Mn(e,t,e.position,!0),s=e.input.charCodeAt(++e.position),rn(s))ne(e,!1,n);else if(s<256&&om[s])e.result+=lm[s],e.position++;else if((i=ky(s))>0){for(o=i,l=0;o>0;o--)s=e.input.charCodeAt(++e.position),(i=Sy(s))>=0?l=(l<<4)+i:D(e,"expected hexadecimal character");e.result+=_y(l),e.position++}else D(e,"unknown escape sequence");t=r=e.position}else rn(s)?(Mn(e,t,r,!0),mu(e,ne(e,!1,n)),t=r=e.position):e.position===e.lineStart&&jl(e)?D(e,"unexpected end of the document within a double quoted scalar"):(e.position++,r=e.position)}D(e,"unexpected end of the stream within a double quoted scalar")}function Ay(e,n){var t=!0,r,o,l,i=e.tag,s,a=e.anchor,c,p,d,h,x,C=Object.create(null),S,j,m,f;if(f=e.input.charCodeAt(e.position),f===91)p=93,x=!1,s=[];else if(f===123)p=125,x=!0,s={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=s),f=e.input.charCodeAt(++e.position);f!==0;){if(ne(e,!0,n),f=e.input.charCodeAt(e.position),f===p)return e.position++,e.tag=i,e.anchor=a,e.kind=x?"mapping":"sequence",e.result=s,!0;t?f===44&&D(e,"expected the node content, but found ','"):D(e,"missed comma between flow collection entries"),j=S=m=null,d=h=!1,f===63&&(c=e.input.charCodeAt(e.position+1),_e(c)&&(d=h=!0,e.position++,ne(e,!0,n))),r=e.line,o=e.lineStart,l=e.position,Bt(e,n,Zo,!1,!0),j=e.tag,S=e.result,ne(e,!0,n),f=e.input.charCodeAt(e.position),(h||e.line===r)&&f===58&&(d=!0,f=e.input.charCodeAt(++e.position),ne(e,!0,n),Bt(e,n,Zo,!1,!0),m=e.result),x?Rt(e,s,C,j,S,m,r,o,l):d?s.push(Rt(e,null,C,j,S,m,r,o,l)):s.push(S),ne(e,!0,n),f=e.input.charCodeAt(e.position),f===44?(t=!0,f=e.input.charCodeAt(++e.position)):t=!1}D(e,"unexpected end of the stream within a flow collection")}function Ny(e,n){var t,r,o=ti,l=!1,i=!1,s=n,a=0,c=!1,p,d;if(d=e.input.charCodeAt(e.position),d===124)r=!1;else if(d===62)r=!0;else return!1;for(e.kind="scalar",e.result="";d!==0;)if(d=e.input.charCodeAt(++e.position),d===43||d===45)ti===o?o=d===43?za:vy:D(e,"repeat of a chomping mode identifier");else if((p=wy(d))>=0)p===0?D(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):i?D(e,"repeat of an indentation width identifier"):(s=n+p-1,i=!0);else break;if(nt(d)){do d=e.input.charCodeAt(++e.position);while(nt(d));if(d===35)do d=e.input.charCodeAt(++e.position);while(!rn(d)&&d!==0)}for(;d!==0;){for(hu(e),e.lineIndent=0,d=e.input.charCodeAt(e.position);(!i||e.lineIndent<s)&&d===32;)e.lineIndent++,d=e.input.charCodeAt(++e.position);if(!i&&e.lineIndent>s&&(s=e.lineIndent),rn(d)){a++;continue}if(e.lineIndent<s){o===za?e.result+=re.repeat(`
`,l?1+a:a):o===ti&&l&&(e.result+=`
`);break}for(r?nt(d)?(c=!0,e.result+=re.repeat(`
`,l?1+a:a)):c?(c=!1,e.result+=re.repeat(`
`,a+1)):a===0?l&&(e.result+=" "):e.result+=re.repeat(`
`,a):e.result+=re.repeat(`
`,l?1+a:a),l=!0,i=!0,a=0,t=e.position;!rn(d)&&d!==0;)d=e.input.charCodeAt(++e.position);Mn(e,t,e.position,!1)}return!0}function Wa(e,n){var t,r=e.tag,o=e.anchor,l=[],i,s=!1,a;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=l),a=e.input.charCodeAt(e.position);a!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,D(e,"tab characters must not be used in indentation")),!(a!==45||(i=e.input.charCodeAt(e.position+1),!_e(i))));){if(s=!0,e.position++,ne(e,!0,-1)&&e.lineIndent<=n){l.push(null),a=e.input.charCodeAt(e.position);continue}if(t=e.line,Bt(e,n,nm,!1,!0),l.push(e.result),ne(e,!0,-1),a=e.input.charCodeAt(e.position),(e.line===t||e.lineIndent>n)&&a!==0)D(e,"bad indentation of a sequence entry");else if(e.lineIndent<n)break}return s?(e.tag=r,e.anchor=o,e.kind="sequence",e.result=l,!0):!1}function Py(e,n,t){var r,o,l,i,s,a,c=e.tag,p=e.anchor,d={},h=Object.create(null),x=null,C=null,S=null,j=!1,m=!1,f;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=d),f=e.input.charCodeAt(e.position);f!==0;){if(!j&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,D(e,"tab characters must not be used in indentation")),r=e.input.charCodeAt(e.position+1),l=e.line,(f===63||f===58)&&_e(r))f===63?(j&&(Rt(e,d,h,x,C,null,i,s,a),x=C=S=null),m=!0,j=!0,o=!0):j?(j=!1,o=!0):D(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,f=r;else{if(i=e.line,s=e.lineStart,a=e.position,!Bt(e,t,em,!1,!0))break;if(e.line===l){for(f=e.input.charCodeAt(e.position);nt(f);)f=e.input.charCodeAt(++e.position);if(f===58)f=e.input.charCodeAt(++e.position),_e(f)||D(e,"a whitespace character is expected after the key-value separator within a block mapping"),j&&(Rt(e,d,h,x,C,null,i,s,a),x=C=S=null),m=!0,j=!1,o=!1,x=e.tag,C=e.result;else if(m)D(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=c,e.anchor=p,!0}else if(m)D(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=c,e.anchor=p,!0}if((e.line===l||e.lineIndent>n)&&(j&&(i=e.line,s=e.lineStart,a=e.position),Bt(e,n,qo,!0,o)&&(j?C=e.result:S=e.result),j||(Rt(e,d,h,x,C,S,i,s,a),x=C=S=null),ne(e,!0,-1),f=e.input.charCodeAt(e.position)),(e.line===l||e.lineIndent>n)&&f!==0)D(e,"bad indentation of a mapping entry");else if(e.lineIndent<n)break}return j&&Rt(e,d,h,x,C,null,i,s,a),m&&(e.tag=c,e.anchor=p,e.kind="mapping",e.result=d),m}function Ly(e){var n,t=!1,r=!1,o,l,i;if(i=e.input.charCodeAt(e.position),i!==33)return!1;if(e.tag!==null&&D(e,"duplication of a tag property"),i=e.input.charCodeAt(++e.position),i===60?(t=!0,i=e.input.charCodeAt(++e.position)):i===33?(r=!0,o="!!",i=e.input.charCodeAt(++e.position)):o="!",n=e.position,t){do i=e.input.charCodeAt(++e.position);while(i!==0&&i!==62);e.position<e.length?(l=e.input.slice(n,e.position),i=e.input.charCodeAt(++e.position)):D(e,"unexpected end of the stream within a verbatim tag")}else{for(;i!==0&&!_e(i);)i===33&&(r?D(e,"tag suffix cannot contain exclamation marks"):(o=e.input.slice(n-1,e.position+1),tm.test(o)||D(e,"named tag handle cannot contain such characters"),r=!0,n=e.position+1)),i=e.input.charCodeAt(++e.position);l=e.input.slice(n,e.position),Cy.test(l)&&D(e,"tag suffix cannot contain flow indicator characters")}l&&!rm.test(l)&&D(e,"tag name cannot contain such characters: "+l);try{l=decodeURIComponent(l)}catch{D(e,"tag name is malformed: "+l)}return t?e.tag=l:zn.call(e.tagMap,o)?e.tag=e.tagMap[o]+l:o==="!"?e.tag="!"+l:o==="!!"?e.tag="tag:yaml.org,2002:"+l:D(e,'undeclared tag handle "'+o+'"'),!0}function Dy(e){var n,t;if(t=e.input.charCodeAt(e.position),t!==38)return!1;for(e.anchor!==null&&D(e,"duplication of an anchor property"),t=e.input.charCodeAt(++e.position),n=e.position;t!==0&&!_e(t)&&!Et(t);)t=e.input.charCodeAt(++e.position);return e.position===n&&D(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(n,e.position),!0}function Oy(e){var n,t,r;if(r=e.input.charCodeAt(e.position),r!==42)return!1;for(r=e.input.charCodeAt(++e.position),n=e.position;r!==0&&!_e(r)&&!Et(r);)r=e.input.charCodeAt(++e.position);return e.position===n&&D(e,"name of an alias node must contain at least one character"),t=e.input.slice(n,e.position),zn.call(e.anchorMap,t)||D(e,'unidentified alias "'+t+'"'),e.result=e.anchorMap[t],ne(e,!0,-1),!0}function Bt(e,n,t,r,o){var l,i,s,a=1,c=!1,p=!1,d,h,x,C,S,j;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,l=i=s=qo===t||nm===t,r&&ne(e,!0,-1)&&(c=!0,e.lineIndent>n?a=1:e.lineIndent===n?a=0:e.lineIndent<n&&(a=-1)),a===1)for(;Ly(e)||Dy(e);)ne(e,!0,-1)?(c=!0,s=l,e.lineIndent>n?a=1:e.lineIndent===n?a=0:e.lineIndent<n&&(a=-1)):s=!1;if(s&&(s=c||o),(a===1||qo===t)&&(Zo===t||em===t?S=n:S=n+1,j=e.position-e.lineStart,a===1?s&&(Wa(e,j)||Py(e,j,S))||Ay(e,S)?p=!0:(i&&Ny(e,S)||Ry(e,S)||Ty(e,S)?p=!0:Oy(e)?(p=!0,(e.tag!==null||e.anchor!==null)&&D(e,"alias node should not have any properties")):Ey(e,S,Zo===t)&&(p=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):a===0&&(p=s&&Wa(e,j))),e.tag===null)e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);else if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&D(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),d=0,h=e.implicitTypes.length;d<h;d+=1)if(C=e.implicitTypes[d],C.resolve(e.result)){e.result=C.construct(e.result),e.tag=C.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else if(e.tag!=="!"){if(zn.call(e.typeMap[e.kind||"fallback"],e.tag))C=e.typeMap[e.kind||"fallback"][e.tag];else for(C=null,x=e.typeMap.multi[e.kind||"fallback"],d=0,h=x.length;d<h;d+=1)if(e.tag.slice(0,x[d].tag.length)===x[d].tag){C=x[d];break}C||D(e,"unknown tag !<"+e.tag+">"),e.result!==null&&C.kind!==e.kind&&D(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+C.kind+'", not "'+e.kind+'"'),C.resolve(e.result,e.tag)?(e.result=C.construct(e.result,e.tag),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):D(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||p}function Iy(e){var n=e.position,t,r,o,l=!1,i;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(i=e.input.charCodeAt(e.position))!==0&&(ne(e,!0,-1),i=e.input.charCodeAt(e.position),!(e.lineIndent>0||i!==37));){for(l=!0,i=e.input.charCodeAt(++e.position),t=e.position;i!==0&&!_e(i);)i=e.input.charCodeAt(++e.position);for(r=e.input.slice(t,e.position),o=[],r.length<1&&D(e,"directive name must not be less than one character in length");i!==0;){for(;nt(i);)i=e.input.charCodeAt(++e.position);if(i===35){do i=e.input.charCodeAt(++e.position);while(i!==0&&!rn(i));break}if(rn(i))break;for(t=e.position;i!==0&&!_e(i);)i=e.input.charCodeAt(++e.position);o.push(e.input.slice(t,e.position))}i!==0&&hu(e),zn.call(Ba,r)?Ba[r](e,r,o):el(e,'unknown document directive "'+r+'"')}if(ne(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,ne(e,!0,-1)):l&&D(e,"directives end mark is expected"),Bt(e,e.lineIndent-1,qo,!1,!0),ne(e,!0,-1),e.checkLineBreaks&&yy.test(e.input.slice(n,e.position))&&el(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&jl(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,ne(e,!0,-1));return}if(e.position<e.length-1)D(e,"end of the stream or a document separator is expected");else return}function sm(e,n){e=String(e),n=n||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var t=new jy(e,n),r=e.indexOf("\0");for(r!==-1&&(t.position=r,D(t,"null byte is not allowed in input")),t.input+="\0";t.input.charCodeAt(t.position)===32;)t.lineIndent+=1,t.position+=1;for(;t.position<t.length-1;)Iy(t);return t.documents}function My(e,n,t){n!==null&&typeof n=="object"&&typeof t>"u"&&(t=n,n=null);var r=sm(e,t);if(typeof n!="function")return r;for(var o=0,l=r.length;o<l;o+=1)n(r[o])}function Fy(e,n){var t=sm(e,n);if(t.length!==0){if(t.length===1)return t[0];throw new xe("expected a single document in the stream, but found more")}}var by=My,zy=Fy,um={loadAll:by,load:zy},am=Object.prototype.toString,cm=Object.prototype.hasOwnProperty,gu=65279,$y=9,Mr=10,Uy=13,By=32,Hy=33,Wy=34,os=35,Vy=37,Yy=38,Ky=39,Qy=42,dm=44,Gy=45,nl=58,Xy=61,Jy=62,Zy=63,qy=64,fm=91,pm=93,eC=96,hm=123,nC=124,mm=125,ge={};ge[0]="\\0";ge[7]="\\a";ge[8]="\\b";ge[9]="\\t";ge[10]="\\n";ge[11]="\\v";ge[12]="\\f";ge[13]="\\r";ge[27]="\\e";ge[34]='\\"';ge[92]="\\\\";ge[133]="\\N";ge[160]="\\_";ge[8232]="\\L";ge[8233]="\\P";var tC=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],rC=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function oC(e,n){var t,r,o,l,i,s,a;if(n===null)return{};for(t={},r=Object.keys(n),o=0,l=r.length;o<l;o+=1)i=r[o],s=String(n[i]),i.slice(0,2)==="!!"&&(i="tag:yaml.org,2002:"+i.slice(2)),a=e.compiledTypeMap.fallback[i],a&&cm.call(a.styleAliases,s)&&(s=a.styleAliases[s]),t[i]=s;return t}function lC(e){var n,t,r;if(n=e.toString(16).toUpperCase(),e<=255)t="x",r=2;else if(e<=65535)t="u",r=4;else if(e<=4294967295)t="U",r=8;else throw new xe("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+t+re.repeat("0",r-n.length)+n}var iC=1,Fr=2;function sC(e){this.schema=e.schema||pu,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=re.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=oC(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType=e.quotingType==='"'?Fr:iC,this.forceQuotes=e.forceQuotes||!1,this.replacer=typeof e.replacer=="function"?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Va(e,n){for(var t=re.repeat(" ",n),r=0,o=-1,l="",i,s=e.length;r<s;)o=e.indexOf(`
`,r),o===-1?(i=e.slice(r),r=s):(i=e.slice(r,o+1),r=o+1),i.length&&i!==`
`&&(l+=t),l+=i;return l}function ls(e,n){return`
`+re.repeat(" ",e.indent*n)}function uC(e,n){var t,r,o;for(t=0,r=e.implicitTypes.length;t<r;t+=1)if(o=e.implicitTypes[t],o.resolve(n))return!0;return!1}function tl(e){return e===By||e===$y}function br(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==gu||65536<=e&&e<=1114111}function Ya(e){return br(e)&&e!==gu&&e!==Uy&&e!==Mr}function Ka(e,n,t){var r=Ya(e),o=r&&!tl(e);return(t?r:r&&e!==dm&&e!==fm&&e!==pm&&e!==hm&&e!==mm)&&e!==os&&!(n===nl&&!o)||Ya(n)&&!tl(n)&&e===os||n===nl&&o}function aC(e){return br(e)&&e!==gu&&!tl(e)&&e!==Gy&&e!==Zy&&e!==nl&&e!==dm&&e!==fm&&e!==pm&&e!==hm&&e!==mm&&e!==os&&e!==Yy&&e!==Qy&&e!==Hy&&e!==nC&&e!==Xy&&e!==Jy&&e!==Ky&&e!==Wy&&e!==Vy&&e!==qy&&e!==eC}function cC(e){return!tl(e)&&e!==nl}function ir(e,n){var t=e.charCodeAt(n),r;return t>=55296&&t<=56319&&n+1<e.length&&(r=e.charCodeAt(n+1),r>=56320&&r<=57343)?(t-55296)*1024+r-56320+65536:t}function gm(e){var n=/^\n* /;return n.test(e)}var vm=1,is=2,xm=3,ym=4,ft=5;function dC(e,n,t,r,o,l,i,s){var a,c=0,p=null,d=!1,h=!1,x=r!==-1,C=-1,S=aC(ir(e,0))&&cC(ir(e,e.length-1));if(n||i)for(a=0;a<e.length;c>=65536?a+=2:a++){if(c=ir(e,a),!br(c))return ft;S=S&&Ka(c,p,s),p=c}else{for(a=0;a<e.length;c>=65536?a+=2:a++){if(c=ir(e,a),c===Mr)d=!0,x&&(h=h||a-C-1>r&&e[C+1]!==" ",C=a);else if(!br(c))return ft;S=S&&Ka(c,p,s),p=c}h=h||x&&a-C-1>r&&e[C+1]!==" "}return!d&&!h?S&&!i&&!o(e)?vm:l===Fr?ft:is:t>9&&gm(e)?ft:i?l===Fr?ft:is:h?ym:xm}function fC(e,n,t,r,o){e.dump=function(){if(n.length===0)return e.quotingType===Fr?'""':"''";if(!e.noCompatMode&&(tC.indexOf(n)!==-1||rC.test(n)))return e.quotingType===Fr?'"'+n+'"':"'"+n+"'";var l=e.indent*Math.max(1,t),i=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-l),s=r||e.flowLevel>-1&&t>=e.flowLevel;function a(c){return uC(e,c)}switch(dC(n,s,e.indent,i,a,e.quotingType,e.forceQuotes&&!r,o)){case vm:return n;case is:return"'"+n.replace(/'/g,"''")+"'";case xm:return"|"+Qa(n,e.indent)+Ga(Va(n,l));case ym:return">"+Qa(n,e.indent)+Ga(Va(pC(n,i),l));case ft:return'"'+hC(n)+'"';default:throw new xe("impossible error: invalid scalar style")}}()}function Qa(e,n){var t=gm(e)?String(n):"",r=e[e.length-1]===`
`,o=r&&(e[e.length-2]===`
`||e===`
`),l=o?"+":r?"":"-";return t+l+`
`}function Ga(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function pC(e,n){for(var t=/(\n+)([^\n]*)/g,r=function(){var c=e.indexOf(`
`);return c=c!==-1?c:e.length,t.lastIndex=c,Xa(e.slice(0,c),n)}(),o=e[0]===`
`||e[0]===" ",l,i;i=t.exec(e);){var s=i[1],a=i[2];l=a[0]===" ",r+=s+(!o&&!l&&a!==""?`
`:"")+Xa(a,n),o=l}return r}function Xa(e,n){if(e===""||e[0]===" ")return e;for(var t=/ [^ ]/g,r,o=0,l,i=0,s=0,a="";r=t.exec(e);)s=r.index,s-o>n&&(l=i>o?i:s,a+=`
`+e.slice(o,l),o=l+1),i=s;return a+=`
`,e.length-o>n&&i>o?a+=e.slice(o,i)+`
`+e.slice(i+1):a+=e.slice(o),a.slice(1)}function hC(e){for(var n="",t=0,r,o=0;o<e.length;t>=65536?o+=2:o++)t=ir(e,o),r=ge[t],!r&&br(t)?(n+=e[o],t>=65536&&(n+=e[o+1])):n+=r||lC(t);return n}function mC(e,n,t){var r="",o=e.tag,l,i,s;for(l=0,i=t.length;l<i;l+=1)s=t[l],e.replacer&&(s=e.replacer.call(t,String(l),s)),(hn(e,n,s,!1,!1)||typeof s>"u"&&hn(e,n,null,!1,!1))&&(r!==""&&(r+=","+(e.condenseFlow?"":" ")),r+=e.dump);e.tag=o,e.dump="["+r+"]"}function Ja(e,n,t,r){var o="",l=e.tag,i,s,a;for(i=0,s=t.length;i<s;i+=1)a=t[i],e.replacer&&(a=e.replacer.call(t,String(i),a)),(hn(e,n+1,a,!0,!0,!1,!0)||typeof a>"u"&&hn(e,n+1,null,!0,!0,!1,!0))&&((!r||o!=="")&&(o+=ls(e,n)),e.dump&&Mr===e.dump.charCodeAt(0)?o+="-":o+="- ",o+=e.dump);e.tag=l,e.dump=o||"[]"}function gC(e,n,t){var r="",o=e.tag,l=Object.keys(t),i,s,a,c,p;for(i=0,s=l.length;i<s;i+=1)p="",r!==""&&(p+=", "),e.condenseFlow&&(p+='"'),a=l[i],c=t[a],e.replacer&&(c=e.replacer.call(t,a,c)),hn(e,n,a,!1,!1)&&(e.dump.length>1024&&(p+="? "),p+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),hn(e,n,c,!1,!1)&&(p+=e.dump,r+=p));e.tag=o,e.dump="{"+r+"}"}function vC(e,n,t,r){var o="",l=e.tag,i=Object.keys(t),s,a,c,p,d,h;if(e.sortKeys===!0)i.sort();else if(typeof e.sortKeys=="function")i.sort(e.sortKeys);else if(e.sortKeys)throw new xe("sortKeys must be a boolean or a function");for(s=0,a=i.length;s<a;s+=1)h="",(!r||o!=="")&&(h+=ls(e,n)),c=i[s],p=t[c],e.replacer&&(p=e.replacer.call(t,c,p)),hn(e,n+1,c,!0,!0,!0)&&(d=e.tag!==null&&e.tag!=="?"||e.dump&&e.dump.length>1024,d&&(e.dump&&Mr===e.dump.charCodeAt(0)?h+="?":h+="? "),h+=e.dump,d&&(h+=ls(e,n)),hn(e,n+1,p,!0,d)&&(e.dump&&Mr===e.dump.charCodeAt(0)?h+=":":h+=": ",h+=e.dump,o+=h));e.tag=l,e.dump=o||"{}"}function Za(e,n,t){var r,o,l,i,s,a;for(o=t?e.explicitTypes:e.implicitTypes,l=0,i=o.length;l<i;l+=1)if(s=o[l],(s.instanceOf||s.predicate)&&(!s.instanceOf||typeof n=="object"&&n instanceof s.instanceOf)&&(!s.predicate||s.predicate(n))){if(t?s.multi&&s.representName?e.tag=s.representName(n):e.tag=s.tag:e.tag="?",s.represent){if(a=e.styleMap[s.tag]||s.defaultStyle,am.call(s.represent)==="[object Function]")r=s.represent(n,a);else if(cm.call(s.represent,a))r=s.represent[a](n,a);else throw new xe("!<"+s.tag+'> tag resolver accepts not "'+a+'" style');e.dump=r}return!0}return!1}function hn(e,n,t,r,o,l,i){e.tag=null,e.dump=t,Za(e,t,!1)||Za(e,t,!0);var s=am.call(e.dump),a=r,c;r&&(r=e.flowLevel<0||e.flowLevel>n);var p=s==="[object Object]"||s==="[object Array]",d,h;if(p&&(d=e.duplicates.indexOf(t),h=d!==-1),(e.tag!==null&&e.tag!=="?"||h||e.indent!==2&&n>0)&&(o=!1),h&&e.usedDuplicates[d])e.dump="*ref_"+d;else{if(p&&h&&!e.usedDuplicates[d]&&(e.usedDuplicates[d]=!0),s==="[object Object]")r&&Object.keys(e.dump).length!==0?(vC(e,n,e.dump,o),h&&(e.dump="&ref_"+d+e.dump)):(gC(e,n,e.dump),h&&(e.dump="&ref_"+d+" "+e.dump));else if(s==="[object Array]")r&&e.dump.length!==0?(e.noArrayIndent&&!i&&n>0?Ja(e,n-1,e.dump,o):Ja(e,n,e.dump,o),h&&(e.dump="&ref_"+d+e.dump)):(mC(e,n,e.dump),h&&(e.dump="&ref_"+d+" "+e.dump));else if(s==="[object String]")e.tag!=="?"&&fC(e,e.dump,n,l,a);else{if(s==="[object Undefined]")return!1;if(e.skipInvalid)return!1;throw new xe("unacceptable kind of an object to dump "+s)}e.tag!==null&&e.tag!=="?"&&(c=encodeURI(e.tag[0]==="!"?e.tag.slice(1):e.tag).replace(/!/g,"%21"),e.tag[0]==="!"?c="!"+c:c.slice(0,18)==="tag:yaml.org,2002:"?c="!!"+c.slice(18):c="!<"+c+">",e.dump=c+" "+e.dump)}return!0}function xC(e,n){var t=[],r=[],o,l;for(ss(e,t,r),o=0,l=r.length;o<l;o+=1)n.duplicates.push(t[r[o]]);n.usedDuplicates=new Array(l)}function ss(e,n,t){var r,o,l;if(e!==null&&typeof e=="object")if(o=n.indexOf(e),o!==-1)t.indexOf(o)===-1&&t.push(o);else if(n.push(e),Array.isArray(e))for(o=0,l=e.length;o<l;o+=1)ss(e[o],n,t);else for(r=Object.keys(e),o=0,l=r.length;o<l;o+=1)ss(e[r[o]],n,t)}function yC(e,n){n=n||{};var t=new sC(n);t.noRefs||xC(e,t);var r=e;return t.replacer&&(r=t.replacer.call({"":r},"",r)),hn(t,0,r,!0,!0)?t.dump+`
`:""}var CC=yC,SC={dump:CC};function vu(e,n){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+n+" instead, which is now safe by default.")}}var kC=ce,wC=Ih,_C=zh,jC=Wh,EC=Vh,RC=pu,TC=um.load,AC=um.loadAll,NC=SC.dump,PC=xe,LC={binary:Xh,float:Hh,map:bh,null:$h,pairs:Zh,set:qh,timestamp:Qh,bool:Uh,int:Bh,merge:Gh,omap:Jh,seq:Fh,str:Mh},DC=vu("safeLoad","load"),OC=vu("safeLoadAll","loadAll"),IC=vu("safeDump","dump"),MC={Type:kC,Schema:wC,FAILSAFE_SCHEMA:_C,JSON_SCHEMA:jC,CORE_SCHEMA:EC,DEFAULT_SCHEMA:RC,load:TC,loadAll:AC,dump:NC,YAMLException:PC,types:LC,safeLoad:DC,safeLoadAll:OC,safeDump:IC},us={exports:{}};(function(e,n){(function(t,r){{var o=r();e&&e.exports&&(n=e.exports=o),n.randomColor=o}})(Tm,function(){var t=null,r={};m();var o=[],l=function(v){if(v=v||{},v.seed!==void 0&&v.seed!==null&&v.seed===parseInt(v.seed,10))t=v.seed;else if(typeof v.seed=="string")t=A(v.seed);else{if(v.seed!==void 0&&v.seed!==null)throw new TypeError("The seed value must be an integer or string");t=null}var y,_,E;if(v.count!==null&&v.count!==void 0){for(var L=v.count,b=[],$=0;$<v.count;$++)o.push(!1);for(v.count=null;L>b.length;){var Je=l(v);t!==null&&(v.seed=t),b.push(Je)}return v.count=L,b}return y=i(v),_=s(y,v),E=a(y,_,v),c([y,_,E],v)};function i(v){if(o.length>0){var y=T(v.hue),_=C(y),E=(y[1]-y[0])/o.length,L=parseInt((_-y[0])/E);o[L]===!0?L=(L+2)%o.length:o[L]=!0;var b=(y[0]+L*E)%359,$=(y[0]+(L+1)*E)%359;return y=[b,$],_=C(y),_<0&&(_=360+_),_}else{var y=d(v.hue);return _=C(y),_<0&&(_=360+_),_}}function s(v,y){if(y.hue==="monochrome")return 0;if(y.luminosity==="random")return C([0,100]);var _=h(v),E=_[0],L=_[1];switch(y.luminosity){case"bright":E=55;break;case"dark":E=L-10;break;case"light":L=55;break}return C([E,L])}function a(v,y,_){var E=p(v,y),L=100;switch(_.luminosity){case"dark":L=E+20;break;case"light":E=(L+E)/2;break;case"random":E=0,L=100;break}return C([E,L])}function c(v,y){switch(y.format){case"hsvArray":return v;case"hslArray":return k(v);case"hsl":var _=k(v);return"hsl("+_[0]+", "+_[1]+"%, "+_[2]+"%)";case"hsla":var E=k(v),$=y.alpha||Math.random();return"hsla("+E[0]+", "+E[1]+"%, "+E[2]+"%, "+$+")";case"rgbArray":return f(v);case"rgb":var L=f(v);return"rgb("+L.join(", ")+")";case"rgba":var b=f(v),$=y.alpha||Math.random();return"rgba("+b.join(", ")+", "+$+")";default:return S(v)}}function p(v,y){for(var _=x(v).lowerBounds,E=0;E<_.length-1;E++){var L=_[E][0],b=_[E][1],$=_[E+1][0],Je=_[E+1][1];if(y>=L&&y<=$){var vn=(Je-b)/($-L),Te=b-vn*L;return vn*y+Te}}return 0}function d(v){if(typeof parseInt(v)=="number"){var y=parseInt(v);if(y<360&&y>0)return[y,y]}if(typeof v=="string"){if(r[v]){var _=r[v];if(_.hueRange)return _.hueRange}else if(v.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var E=g(v)[0];return[E,E]}}return[0,360]}function h(v){return x(v).saturationRange}function x(v){v>=334&&v<=360&&(v-=360);for(var y in r){var _=r[y];if(_.hueRange&&v>=_.hueRange[0]&&v<=_.hueRange[1])return r[y]}return"Color not found"}function C(v){if(t===null){var y=.618033988749895,_=Math.random();return _+=y,_%=1,Math.floor(v[0]+_*(v[1]+1-v[0]))}else{var E=v[1]||1,L=v[0]||0;t=(t*9301+49297)%233280;var b=t/233280;return Math.floor(L+b*(E-L))}}function S(v){var y=f(v);function _(L){var b=L.toString(16);return b.length==1?"0"+b:b}var E="#"+_(y[0])+_(y[1])+_(y[2]);return E}function j(v,y,_){var E=_[0][0],L=_[_.length-1][0],b=_[_.length-1][1],$=_[0][1];r[v]={hueRange:y,lowerBounds:_,saturationRange:[E,L],brightnessRange:[b,$]}}function m(){j("monochrome",null,[[0,0],[100,0]]),j("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),j("orange",[18,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),j("yellow",[46,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),j("green",[62,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),j("blue",[178,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),j("purple",[257,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),j("pink",[282,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]])}function f(v){var y=v[0];y===0&&(y=1),y===360&&(y=359),y=y/360;var _=v[1]/100,E=v[2]/100,L=Math.floor(y*6),b=y*6-L,$=E*(1-_),Je=E*(1-b*_),vn=E*(1-(1-b)*_),Te=256,Ue=256,N=256;switch(L){case 0:Te=E,Ue=vn,N=$;break;case 1:Te=Je,Ue=E,N=$;break;case 2:Te=$,Ue=E,N=vn;break;case 3:Te=$,Ue=Je,N=E;break;case 4:Te=vn,Ue=$,N=E;break;case 5:Te=E,Ue=$,N=Je;break}var I=[Math.floor(Te*255),Math.floor(Ue*255),Math.floor(N*255)];return I}function g(v){v=v.replace(/^#/,""),v=v.length===3?v.replace(/(.)/g,"$1$1"):v;var y=parseInt(v.substr(0,2),16)/255,_=parseInt(v.substr(2,2),16)/255,E=parseInt(v.substr(4,2),16)/255,L=Math.max(y,_,E),b=L-Math.min(y,_,E),$=L?b/L:0;switch(L){case y:return[60*((_-E)/b%6)||0,$,L];case _:return[60*((E-y)/b+2)||0,$,L];case E:return[60*((y-_)/b+4)||0,$,L]}}function k(v){var y=v[0],_=v[1]/100,E=v[2]/100,L=(2-_)*E;return[y,Math.round(_*E/(L<1?L:2-L)*1e4)/100,L/2*100]}function A(v){for(var y=0,_=0;_!==v.length&&!(y>=Number.MAX_SAFE_INTEGER);_++)y+=v.charCodeAt(_);return y}function T(v){if(isNaN(v)){if(typeof v=="string"){if(r[v]){var _=r[v];if(_.hueRange)return _.hueRange}else if(v.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var E=g(v)[0];return x(E).hueRange}}}else{var y=parseInt(v);if(y<360&&y>0)return x(v).hueRange}return[0,360]}return l})})(us,us.exports);var FC=us.exports;const bC=as(FC);function zC(e){const n="---",t=`
---
`;if(e.startsWith(n)){let r=e.indexOf(t)+t.length,o=MC.load(e.slice(0,r-t.length));return{component:e.slice(r),...o}}return{component:e}}function $C(e){let n={};return(new Set(e.map(r=>r.tags).reduce((r,o)=>r.concat(o),[]).filter(r=>r))||[]).forEach(r=>{n[r]=bC({luminosity:"light"})}),n}function Cm(e,n){const t=n.substring(0,n.lastIndexOf("/"));if(e.startsWith("./"))e=e.slice(2);else if(e.startsWith("../"))return`${t.substring(0,t.lastIndexOf("/"))}/${e.slice(3)}`;return`${t}/${e}`}function UC(e){const t=e.replace(/\/\/.*/g,"").replace(/\/\*[\s\S]*?\*\//g,""),r=/import\s+(?:[^"']*\s+from\s+)?["'](\.\.?\/[^"']+)["']/g,o=[];let l;for(;(l=r.exec(t))!==null;)o.push(l[1]);return[...new Set(o)]}function BC(e,n){const t=Object.keys(n),r=[""];return t.find(o=>r.some(l=>(e+l).includes(o)))}function Sm(e,n,t){const r={};return r["App.js"]=e,UC(e).forEach(l=>{const i=Cm(l,n),s=BC(i,t);if(s&&t[s]){const a=t[s];r[`${l}`]=a;const c=Sm(a,s,t);Object.entries(c).forEach(([p,d])=>{p!=="App.js"&&(r[p]=d)})}else console.warn(`Could not find file for import: ${l} (resolved to ${i})`)}),r}function HC(e,n,t){const r=Sm(e,n,t);return function(){const l={};return l["App.js"]={code:r["App.js"]},Object.entries(r).forEach(([s,a])=>{if(s!=="App.js"){const c=s.startsWith(".")?s.replace("./","src/").replace(".tsx",".js"):`src/${s.replace(".tsx",".js")}`;l[c]={code:a}}}),u.jsx(Wr,{children:Object.entries(l).map(([s,a])=>u.jsx("pre",{children:u.jsx("code",{className:"language-js",...s!=="App.js"?{meta:s}:{},children:a.code})},s))})}}function WC(e){const n=[],t=e.replace(/<!--[\s\S]*?-->/g,""),r=/<script[^>]*?\ssrc=["'](\.\.?\/[^"']+)["'][^>]*>/g;let o;for(;(o=r.exec(t))!==null;)(o[1].startsWith("./")||o[1].startsWith("../"))&&n.push(o[1]);return[...new Set(n)]}function VC(e,n){const t=Object.keys(n),r=e.replace(/^\.\//,"").replace(/^\.\.\//,"../");let o=t.find(l=>l===r||l===`${r}.js`||l===`${r}.jsx`);return o||t.find(l=>{const i=l.replace(/^\.\//,"");return i.includes(r)||r.includes(i)})}function km(e,n,t){const r={};return r["index.html"]=e,WC(e).forEach(l=>{const i=Cm(l,n),s=VC(i,t);if(s&&t[s]){const a=t[s];r[`${l}`]=a;const c=km(a,s,t);Object.entries(c).forEach(([p,d])=>{p!=="index.html"&&(r[p]=d)})}else console.warn(`Could not find file for import: ${l} (resolved to ${i})`)}),r}function YC(e,n,t){const r=km(e,n,t);return function(){const l={};return l["inde.html"]={code:r["index.html"]},Object.entries(r).forEach(([s,a])=>{if(s!=="index.html"){const c=s.startsWith(".")?s.replace("./","src/").replace(".tsx",".js"):`src/${s.replace(".tsx",".js")}`;l[c]={code:a}}}),u.jsx(Wr,{template:"vanilla",children:Object.entries(l).map(([s,a])=>u.jsx("pre",{children:u.jsx("code",{className:s.endsWith(".html")?"language-html":"language-js",...s!=="inde.html"?{meta:s}:{},children:a.code})},s))})}}var rl=(e=>(e.HTML="html",e.REACT="react",e))(rl||{});function KC(e,n,t,r){if(e==="react")return HC(n,t,r);if(e==="html")return YC(n,t,r);throw new Error(`Unsupported demo type: ${e}`)}function QC(e){const n={},t=new Set;return Object.keys(e).forEach(o=>{const l=o.substring(0,o.lastIndexOf("/"));t.add(l)}),Object.entries(Object.assign({"./demos/Bracket.demo.jsx":_f,"./demos/Children.demo.jsx":jf,"./demos/ClassComponent.demo.jsx":Ef,"./demos/ClassComponentDefault.demo.jsx":Rf,"./demos/ClassComponentEvent.demo.jsx":Tf,"./demos/ClassComponentHooks.demo.jsx":Af,"./demos/ClassComponentSetState.demo.jsx":Nf,"./demos/ClassComponentState.demo.jsx":Pf,"./demos/CreatContext.demo.jsx":Lf,"./demos/DomDiffKey.demo.jsx":Df,"./demos/DomDiffProps.demo.jsx":Of,"./demos/DomDiffReplace.demo.jsx":If,"./demos/DomDiffWithoutKey.demo.jsx":Mf,"./demos/DotNotation.demo.jsx":Ff,"./demos/ErrorBoundaries.demo.jsx":bf,"./demos/Form.demo.jsx":zf,"./demos/FormDisable.demo.jsx":$f,"./demos/FormMultiple.demo.jsx":Uf,"./demos/FormSelect.demo.jsx":Bf,"./demos/FormTextarea.demo.jsx":Hf,"./demos/Fragment.demo.jsx":Wf,"./demos/FunctionComponent.demo.jsx":Vf,"./demos/HelloWorld-ts.demo.tsx":Yf,"./demos/HelloWorld.demo.jsx":Kf,"./demos/LazyComponent/HelloWorld.jsx":ix,"./demos/LazyComponent/index.demo.jsx":Qf,"./demos/ListRender.demo.jsx":Gf,"./demos/MboxBegin.demo.jsx":Xf,"./demos/MobxModel.demo.html":Jf,"./demos/MobxObservable.demo.html":Zf,"./demos/MobxObservableArray.demo.html":qf,"./demos/MobxObservableObject.demo.html":ep,"./demos/PortalDynamic.demo.jsx":np,"./demos/PortalEventPass.demo.jsx":tp,"./demos/Props.demo.jsx":rp,"./demos/PropsChildren.demo.jsx":op,"./demos/PropsSlot.demo.jsx":lp,"./demos/ReduxApplyMiddleware.demo.html":ip,"./demos/ReduxCombineReducers.demo.html":sp,"./demos/Render.demo.jsx":up,"./demos/RenderProps.demo.jsx":ap,"./demos/SandpackDemoTest.demo.jsx":cp,"./demos/SandpackHtml.demo.jsx":dp,"./demos/SandpackReactTest.demo.jsx":fp,"./demos/SlotScope.demo.jsx":pp,"./demos/dynamic-context/index.demo.jsx":hp,"./demos/dynamic-context/theme-context.js":sx,"./demos/hooks/01_basic.demo.tsx":mp,"./demos/hooks/02_useEffect_basic.demo.tsx":gp,"./demos/hooks/03_useEffect_clean.demo.tsx":vp,"./demos/hooks/04_hook_rule.demo.tsx":xp,"./demos/hooks/05_customer_hook copy.demo.tsx":yp,"./demos/hooks/06_effect_filter.demo.tsx":Cp,"./demos/hooks/07_effect_run_once.demo.tsx":Sp,"./demos/hooks/apis/01_useState.demo.tsx":kp,"./demos/hooks/apis/02_useState_change_nest.demo.tsx":wp,"./demos/hooks/apis/03_useContext.demo.tsx":_p,"./demos/hooks/apis/04_useReducer.demo.tsx":jp,"./demos/html/index.demo.html":Ep,"./demos/html/script.js":ux,"./demos/jsx.demo.html":Rp,"./demos/redux-basic.demo.html":Tp,"./demos/ref-callback.demo.jsx":Ap,"./demos/ref-hooks.demo.jsx":Np,"./demos/ref-pass-class.demo.jsx":Pp,"./demos/ref-pass.demo.jsx":Lp,"./demos/ref-string.demo.jsx":Dp,"./demos/ref.demo.jsx":Op,"./demos/theory/batchTest.demo.tsx":Ip,"./demos/theory/jsx.demo.html":Mp,"./demos/theory/render-class.demo.html":Fp})).forEach(([o,l])=>{const i=o.replace(/^\.\/demos\//,"");n[i]=l}),n}function GC(e){const n=[];return e.forEach(t=>{const r=t.name.split("/");if(r[r.length-1]==="index"){r.pop();const o=r.pop();let l=n;r.forEach(i=>{let s=l.find(a=>a.name===i);s||(s={name:i,children:[],id:Math.random(),component:null},l.push(s)),l=s.children}),l.push({...t,name:o})}else{const o=r.pop();let l=n;r.forEach(i=>{let s=l.find(a=>a.name===i);s||(s={name:i,children:[],id:Math.random(),component:null},l.push(s)),l=s.children}),l.push({...t,name:o})}}),n}function XC(e,n){return e===rl.HTML?zC(n):n.meta||{}}function JC(){let e=[];const n=Object.assign({"./demos/Bracket.demo.jsx":uu,"./demos/Children.demo.jsx":bp,"./demos/ClassComponent.demo.jsx":zp,"./demos/ClassComponentDefault.demo.jsx":$p,"./demos/ClassComponentEvent.demo.jsx":Up,"./demos/ClassComponentHooks.demo.jsx":Bp,"./demos/ClassComponentSetState.demo.jsx":Hp,"./demos/ClassComponentState.demo.jsx":Wp,"./demos/CreatContext.demo.jsx":Vp,"./demos/DomDiffKey.demo.jsx":Qp,"./demos/DomDiffProps.demo.jsx":Gp,"./demos/DomDiffReplace.demo.jsx":Xp,"./demos/DomDiffWithoutKey.demo.jsx":Jp,"./demos/DotNotation.demo.jsx":Zp,"./demos/ErrorBoundaries.demo.jsx":wx,"./demos/Form.demo.jsx":qp,"./demos/FormDisable.demo.jsx":eh,"./demos/FormMultiple.demo.jsx":nh,"./demos/FormSelect.demo.jsx":th,"./demos/FormTextarea.demo.jsx":rh,"./demos/Fragment.demo.jsx":Tx,"./demos/FunctionComponent.demo.jsx":oh,"./demos/HelloWorld-ts.demo.tsx":Dx,"./demos/HelloWorld.demo.jsx":Ox,"./demos/LazyComponent/index.demo.jsx":bx,"./demos/ListRender.demo.jsx":ih,"./demos/MboxBegin.demo.jsx":sh,"./demos/PortalDynamic.demo.jsx":Ux,"./demos/PortalEventPass.demo.jsx":Hx,"./demos/Props.demo.jsx":uh,"./demos/PropsChildren.demo.jsx":ah,"./demos/PropsSlot.demo.jsx":ch,"./demos/Render.demo.jsx":dh,"./demos/RenderProps.demo.jsx":fh,"./demos/SandpackDemoTest.demo.jsx":hh,"./demos/SandpackHtml.demo.jsx":mh,"./demos/SandpackReactTest.demo.jsx":gh,"./demos/SlotScope.demo.jsx":vh,"./demos/dynamic-context/index.demo.jsx":n1,"./demos/hooks/01_basic.demo.tsx":Ch,"./demos/hooks/02_useEffect_basic.demo.tsx":Sh,"./demos/hooks/03_useEffect_clean.demo.tsx":kh,"./demos/hooks/04_hook_rule.demo.tsx":wh,"./demos/hooks/05_customer_hook copy.demo.tsx":_h,"./demos/hooks/06_effect_filter.demo.tsx":jh,"./demos/hooks/07_effect_run_once.demo.tsx":Eh,"./demos/hooks/apis/01_useState.demo.tsx":Rh,"./demos/hooks/apis/02_useState_change_nest.demo.tsx":Th,"./demos/hooks/apis/03_useContext.demo.tsx":Nh,"./demos/hooks/apis/04_useReducer.demo.tsx":Ph,"./demos/ref-callback.demo.jsx":s1,"./demos/ref-hooks.demo.jsx":a1,"./demos/ref-pass-class.demo.jsx":f1,"./demos/ref-pass.demo.jsx":h1,"./demos/ref-string.demo.jsx":m1,"./demos/ref.demo.jsx":g1,"./demos/theory/batchTest.demo.tsx":Lh}),t=Object.assign({"./demos/Bracket.demo.jsx":_f,"./demos/Children.demo.jsx":jf,"./demos/ClassComponent.demo.jsx":Ef,"./demos/ClassComponentDefault.demo.jsx":Rf,"./demos/ClassComponentEvent.demo.jsx":Tf,"./demos/ClassComponentHooks.demo.jsx":Af,"./demos/ClassComponentSetState.demo.jsx":Nf,"./demos/ClassComponentState.demo.jsx":Pf,"./demos/CreatContext.demo.jsx":Lf,"./demos/DomDiffKey.demo.jsx":Df,"./demos/DomDiffProps.demo.jsx":Of,"./demos/DomDiffReplace.demo.jsx":If,"./demos/DomDiffWithoutKey.demo.jsx":Mf,"./demos/DotNotation.demo.jsx":Ff,"./demos/ErrorBoundaries.demo.jsx":bf,"./demos/Form.demo.jsx":zf,"./demos/FormDisable.demo.jsx":$f,"./demos/FormMultiple.demo.jsx":Uf,"./demos/FormSelect.demo.jsx":Bf,"./demos/FormTextarea.demo.jsx":Hf,"./demos/Fragment.demo.jsx":Wf,"./demos/FunctionComponent.demo.jsx":Vf,"./demos/HelloWorld-ts.demo.tsx":Yf,"./demos/HelloWorld.demo.jsx":Kf,"./demos/LazyComponent/index.demo.jsx":Qf,"./demos/ListRender.demo.jsx":Gf,"./demos/MboxBegin.demo.jsx":Xf,"./demos/MobxModel.demo.html":Jf,"./demos/MobxObservable.demo.html":Zf,"./demos/MobxObservableArray.demo.html":qf,"./demos/MobxObservableObject.demo.html":ep,"./demos/PortalDynamic.demo.jsx":np,"./demos/PortalEventPass.demo.jsx":tp,"./demos/Props.demo.jsx":rp,"./demos/PropsChildren.demo.jsx":op,"./demos/PropsSlot.demo.jsx":lp,"./demos/ReduxApplyMiddleware.demo.html":ip,"./demos/ReduxCombineReducers.demo.html":sp,"./demos/Render.demo.jsx":up,"./demos/RenderProps.demo.jsx":ap,"./demos/SandpackDemoTest.demo.jsx":cp,"./demos/SandpackHtml.demo.jsx":dp,"./demos/SandpackReactTest.demo.jsx":fp,"./demos/SlotScope.demo.jsx":pp,"./demos/dynamic-context/index.demo.jsx":hp,"./demos/hooks/01_basic.demo.tsx":mp,"./demos/hooks/02_useEffect_basic.demo.tsx":gp,"./demos/hooks/03_useEffect_clean.demo.tsx":vp,"./demos/hooks/04_hook_rule.demo.tsx":xp,"./demos/hooks/05_customer_hook copy.demo.tsx":yp,"./demos/hooks/06_effect_filter.demo.tsx":Cp,"./demos/hooks/07_effect_run_once.demo.tsx":Sp,"./demos/hooks/apis/01_useState.demo.tsx":kp,"./demos/hooks/apis/02_useState_change_nest.demo.tsx":wp,"./demos/hooks/apis/03_useContext.demo.tsx":_p,"./demos/hooks/apis/04_useReducer.demo.tsx":jp,"./demos/html/index.demo.html":Ep,"./demos/jsx.demo.html":Rp,"./demos/redux-basic.demo.html":Tp,"./demos/ref-callback.demo.jsx":Ap,"./demos/ref-hooks.demo.jsx":Np,"./demos/ref-pass-class.demo.jsx":Pp,"./demos/ref-pass.demo.jsx":Lp,"./demos/ref-string.demo.jsx":Dp,"./demos/ref.demo.jsx":Op,"./demos/theory/batchTest.demo.tsx":Ip,"./demos/theory/jsx.demo.html":Mp,"./demos/theory/render-class.demo.html":Fp}),r=QC(t);return Object.keys(t).forEach((o,l)=>{const i=n[o]||t[o],s=t[o],a=o.endsWith(".html")?rl.HTML:rl.REACT,c=o.replace(/^\.\/demos\//,"").replace(/\.demo\.\w+$/,""),p=XC(a,i),d=KC(a,s,o,r);e.push({...p,name:c,component:p!=null&&p.disableSandpack?i:d,id:l})}),e}const wm=JC(),ZC=GC(wm),qC=$C(wm),ri={tagsWrap:{lineHeight:0,verticalAlign:"middle",display:"inline-flex",alignItems:"center",gap:"4px",marginLeft:"0.5rem"},tag:{display:"inline-flex",alignItems:"center",fontSize:"12px",height:"20px",lineHeight:"20px",borderRadius:"4px",padding:"0 8px",color:"#000",fontWeight:500,letterSpacing:"0.02em",transition:"all 0.2s ease",opacity:.85,cursor:"pointer",userSelect:"none"},tagHoverStyles:{opacity:1,transform:"translateY(-1px)",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"}};function eS({tags:e,tagsColor:n,onClickTag:t}){const[r,o]=O.useState(null);return u.jsx("span",{style:ri.tagsWrap,children:e.map(l=>{const i=r===l,s=n[l]||"#eee",a=s.includes("hsl")?s.replace("50%","30%"):"#000000";return u.jsx("span",{style:{...ri.tag,backgroundColor:s,color:a,...i?ri.tagHoverStyles:{}},onClick:c=>{c.preventDefault(),t(l)},onMouseEnter:()=>o(l),onMouseLeave:()=>o(null),children:l},l)})})}const He={layout:{display:"flex",height:"100vh",overflow:"hidden"},sidebar:{borderRight:"1px solid var(--border-color)",backgroundColor:"var(--bg-secondary)",height:"100vh",position:"relative",overflowY:"auto"},sidebarExpanded:{width:"300px"},sidebarCollapsed:{width:"50px"},navHeader:{position:"sticky",top:0,backgroundColor:"var(--bg-secondary)",borderBottom:"1px solid var(--border-color)",padding:"12px",display:"flex",alignItems:"center",justifyContent:"space-between",zIndex:10},navLink:{display:"block",padding:"0.375rem 0.75rem",color:"var(--text-secondary)",textDecoration:"none",borderRadius:"0.375rem",fontSize:"0.9375rem","&:hover":{backgroundColor:"var(--bg-hover)",color:"var(--text-primary)"}},navLinkActive:{backgroundColor:"var(--bg-active)",color:"var(--text-primary)",fontWeight:500},navSectionTitle:{fontSize:"0.875rem",fontWeight:500,color:"var(--text-primary)",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"0.75rem"},content:{flex:1,backgroundColor:"var(--bg-primary)",height:"100vh",overflowY:"auto",display:"sticky",top:0},navContent:{overflowY:"auto",flex:1,padding:"12px",display:"flex",flexDirection:"column"},navContentHidden:{display:"none"}};function nS(e){return typeof e=="string"?u.jsx("iframe",{srcDoc:e}):O.createElement(e)}const qa=({expanded:e})=>u.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",style:{transform:e?"rotate(90deg)":"none"},children:u.jsx("path",{d:"M5.7 13.7L5 13l4.6-4.6L5 3.7 5.7 3l5.3 5.4z"})}),tS=()=>u.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",style:{marginRight:"6px"},children:u.jsx("path",{d:"M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"})}),rS=({isDark:e})=>u.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",style:{marginRight:"6px"},children:e?u.jsx("path",{d:"M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"}):u.jsx("path",{d:"M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"})});function oS({children:e,tagsColor:n}){const[t,r]=ox(),[o,l]=w.useState([]),[i,s]=w.useState(!0),[a,c]=w.useState(()=>{const T=localStorage.getItem("darkMode");return T!==null?T==="true":window.matchMedia("(prefers-color-scheme: dark)").matches}),p=t.get("tag"),d=Wn(),h=wl(),x=()=>{c(!a),localStorage.setItem("darkMode",(!a).toString()),document.documentElement.classList.toggle("dark")};w.useEffect(()=>{a?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[a]);const C=T=>{r({tag:T})},S=T=>{l(v=>v.includes(T)?v.filter(y=>y!==T):[...v,T])},j=T=>{var v;return!p||(v=T.tags)!=null&&v.includes(p)?!0:T.children?T.children.some(y=>j(y)):!1},m=(T,v="")=>T.filter(j).map(y=>{const _=v?`${v}/${y.name}`:y.name,E=y.tags||[],L=o.includes(y.name);return y.children?y.children.filter(j).length===0?null:u.jsxs("div",{children:[u.jsxs("div",{style:{...He.navSectionTitle,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between"},onClick:()=>S(y.name),children:[y.name,u.jsx(qa,{expanded:L})]}),u.jsx("ul",{style:{display:L?"block":"none"},children:m(y.children,y.name)})]},y.name):u.jsx("li",{children:u.jsxs(nx,{style:({isActive:b})=>({...He.navLink,...b?He.navLinkActive:{}}),to:{pathname:_,search:d.search},children:[y.name,E.length>0&&u.jsx("span",{children:u.jsx(eS,{onClickTag:C,tagsColor:n,tags:E})})]})},_)}).filter(Boolean),f=(T,v="")=>T.reduce((y,_)=>{const E=v?`${v}/${_.name}`:_.name;return _.children?[...y,...f(_.children,_.name)]:_.component?[...y,{name:_.name,path:E,component:_.component,tags:_.tags||[]}]:y},[]),g=()=>{var v;return((v=f(e)[0])==null?void 0:v.path)||"/"},k=()=>{s(!i)},A=()=>{r({}),l([]),h(g())};return u.jsxs("div",{style:He.layout,children:[u.jsxs("nav",{style:{...He.sidebar,...i?He.sidebarExpanded:He.sidebarCollapsed},children:[u.jsxs("div",{style:He.navHeader,children:[i&&u.jsxs(u.Fragment,{children:[u.jsx("button",{onClick:A,style:oi.homeButton,title:"Back to home",children:u.jsx(tS,{})}),u.jsxs("button",{onClick:x,style:oi.homeButton,title:a?"Switch to light mode":"Switch to dark mode",children:[u.jsx(rS,{isDark:a}),a?"Light":"Dark"]})]}),u.jsx("button",{onClick:k,style:{...oi.toggleButton,marginLeft:i?"auto":0},title:i?"Collapse sidebar":"Expand sidebar",children:u.jsx(qa,{expanded:i})})]}),u.jsx("div",{style:{...He.navContent,...i?{}:He.navContentHidden},children:u.jsx("ul",{children:m(e)})})]}),u.jsx("main",{style:He.content,children:u.jsxs(Bv,{children:[f(e).map(({path:T,component:v})=>u.jsx(qi,{path:T,element:nS(v)},T)),u.jsx(qi,{path:"*",element:u.jsx($v,{to:g(),replace:!0})})]})})]})}const _m=document.createElement("style");_m.textContent=`
  :root {
    --bg-primary: #ffffff;
    --bg-secondary: #f6f7f9;
    --bg-hover: #ebecf0;
    --bg-active: #e3e5e8;
    --text-primary: #000000;
    --text-secondary: #404756;
    --border-color: #ebecf0;
    --link-color: #087EA4;
    --logo-color: #23272F;
  }

  .dark {
    --bg-primary: #23272F;
    --bg-secondary: #1a1d23;
    --bg-hover: #2B3138;
    --bg-active: #36373D;
    --text-primary: #F6F7F9;
    --text-secondary: #EBECF0;
    --border-color: #343A46;
    --link-color: #149ECA;
    --logo-color: #F6F7F9;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 1.5;
    background-color: var(--bg-primary);
    color: var(--text-primary);
  }

  * {
    box-sizing: border-box;
  }
`;document.head.appendChild(_m);const oi={homeButton:{display:"flex",alignItems:"center",padding:"6px 12px",borderRadius:"4px",border:"none",backgroundColor:"transparent",color:"var(--text-secondary)",cursor:"pointer",fontSize:"14px","&:hover":{color:"var(--text-primary)",backgroundColor:"var(--bg-hover)"}},toggleButton:{width:"24px",height:"24px",borderRadius:"4px",backgroundColor:"transparent",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)","&:hover":{color:"var(--text-primary)",backgroundColor:"var(--bg-hover)"}}};function lS(){return u.jsx("div",{className:"App",children:u.jsx(Jv,{children:u.jsx(oS,{children:ZC,tagsColor:qC})})})}window.process={cwd:()=>"",env:{SANDPACK_CLIENT_VERSION:"2.19.8"}};const iS=document.getElementById("root"),sS=hf(iS);sS.render(u.jsx(O.StrictMode,{children:u.jsx(lS,{})}));export{cu as A,xS as S,O as U,lh as _,ph as a,pf as b,Qx as c,as as g,u as j,w as r,Wm as t};
