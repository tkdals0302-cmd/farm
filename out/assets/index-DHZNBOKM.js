(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))u(f);new MutationObserver(f=>{for(const m of f)if(m.type==="childList")for(const v of m.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&u(v)}).observe(document,{childList:!0,subtree:!0});function o(f){const m={};return f.integrity&&(m.integrity=f.integrity),f.referrerPolicy&&(m.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?m.credentials="include":f.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function u(f){if(f.ep)return;f.ep=!0;const m=o(f);fetch(f.href,m)}})();var Jc={exports:{}},Hn={};var wf;function Zg(){if(wf)return Hn;wf=1;var s=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function o(u,f,m){var v=null;if(m!==void 0&&(v=""+m),f.key!==void 0&&(v=""+f.key),"key"in f){m={};for(var y in f)y!=="key"&&(m[y]=f[y])}else m=f;return f=m.ref,{$$typeof:s,type:u,key:v,ref:f!==void 0?f:null,props:m}}return Hn.Fragment=d,Hn.jsx=o,Hn.jsxs=o,Hn}var Nf;function Kg(){return Nf||(Nf=1,Jc.exports=Zg()),Jc.exports}var n=Kg(),Wc={exports:{}},ce={};var Sf;function Xg(){if(Sf)return ce;Sf=1;var s=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),v=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),B=Symbol.iterator;function Z(b){return b===null||typeof b!="object"?null:(b=B&&b[B]||b["@@iterator"],typeof b=="function"?b:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,Y={};function H(b,O,Q){this.props=b,this.context=O,this.refs=Y,this.updater=Q||S}H.prototype.isReactComponent={},H.prototype.setState=function(b,O){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,O,"setState")},H.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function X(){}X.prototype=H.prototype;function L(b,O,Q){this.props=b,this.context=O,this.refs=Y,this.updater=Q||S}var K=L.prototype=new X;K.constructor=L,q(K,H.prototype),K.isPureReactComponent=!0;var ne=Array.isArray;function F(){}var P={H:null,A:null,T:null,S:null},je=Object.prototype.hasOwnProperty;function U(b,O,Q){var J=Q.ref;return{$$typeof:s,type:b,key:O,ref:J!==void 0?J:null,props:Q}}function le(b,O){return U(b.type,O,b.props)}function re(b){return typeof b=="object"&&b!==null&&b.$$typeof===s}function $(b){var O={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(Q){return O[Q]})}var ie=/\/+/g;function Oe(b,O){return typeof b=="object"&&b!==null&&b.key!=null?$(""+b.key):O.toString(36)}function ke(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(F,F):(b.status="pending",b.then(function(O){b.status==="pending"&&(b.status="fulfilled",b.value=O)},function(O){b.status==="pending"&&(b.status="rejected",b.reason=O)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function R(b,O,Q,J,se){var de=typeof b;(de==="undefined"||de==="boolean")&&(b=null);var be=!1;if(b===null)be=!0;else switch(de){case"bigint":case"string":case"number":be=!0;break;case"object":switch(b.$$typeof){case s:case d:be=!0;break;case T:return be=b._init,R(be(b._payload),O,Q,J,se)}}if(be)return se=se(b),be=J===""?"."+Oe(b,0):J,ne(se)?(Q="",be!=null&&(Q=be.replace(ie,"$&/")+"/"),R(se,O,Q,"",function(Ql){return Ql})):se!=null&&(re(se)&&(se=le(se,Q+(se.key==null||b&&b.key===se.key?"":(""+se.key).replace(ie,"$&/")+"/")+be)),O.push(se)),1;be=0;var et=J===""?".":J+":";if(ne(b))for(var Ue=0;Ue<b.length;Ue++)J=b[Ue],de=et+Oe(J,Ue),be+=R(J,O,Q,de,se);else if(Ue=Z(b),typeof Ue=="function")for(b=Ue.call(b),Ue=0;!(J=b.next()).done;)J=J.value,de=et+Oe(J,Ue++),be+=R(J,O,Q,de,se);else if(de==="object"){if(typeof b.then=="function")return R(ke(b),O,Q,J,se);throw O=String(b),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return be}function G(b,O,Q){if(b==null)return b;var J=[],se=0;return R(b,J,"","",function(de){return O.call(Q,de,se++)}),J}function ee(b){if(b._status===-1){var O=b._result;O=O(),O.then(function(Q){(b._status===0||b._status===-1)&&(b._status=1,b._result=Q)},function(Q){(b._status===0||b._status===-1)&&(b._status=2,b._result=Q)}),b._status===-1&&(b._status=0,b._result=O)}if(b._status===1)return b._result.default;throw b._result}var xe=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)},V={map:G,forEach:function(b,O,Q){G(b,function(){O.apply(this,arguments)},Q)},count:function(b){var O=0;return G(b,function(){O++}),O},toArray:function(b){return G(b,function(O){return O})||[]},only:function(b){if(!re(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return ce.Activity=w,ce.Children=V,ce.Component=H,ce.Fragment=o,ce.Profiler=f,ce.PureComponent=L,ce.StrictMode=u,ce.Suspense=g,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ce.__COMPILER_RUNTIME={__proto__:null,c:function(b){return P.H.useMemoCache(b)}},ce.cache=function(b){return function(){return b.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(b,O,Q){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var J=q({},b.props),se=b.key;if(O!=null)for(de in O.key!==void 0&&(se=""+O.key),O)!je.call(O,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&O.ref===void 0||(J[de]=O[de]);var de=arguments.length-2;if(de===1)J.children=Q;else if(1<de){for(var be=Array(de),et=0;et<de;et++)be[et]=arguments[et+2];J.children=be}return U(b.type,se,J)},ce.createContext=function(b){return b={$$typeof:v,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:m,_context:b},b},ce.createElement=function(b,O,Q){var J,se={},de=null;if(O!=null)for(J in O.key!==void 0&&(de=""+O.key),O)je.call(O,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(se[J]=O[J]);var be=arguments.length-2;if(be===1)se.children=Q;else if(1<be){for(var et=Array(be),Ue=0;Ue<be;Ue++)et[Ue]=arguments[Ue+2];se.children=et}if(b&&b.defaultProps)for(J in be=b.defaultProps,be)se[J]===void 0&&(se[J]=be[J]);return U(b,de,se)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(b){return{$$typeof:y,render:b}},ce.isValidElement=re,ce.lazy=function(b){return{$$typeof:T,_payload:{_status:-1,_result:b},_init:ee}},ce.memo=function(b,O){return{$$typeof:h,type:b,compare:O===void 0?null:O}},ce.startTransition=function(b){var O=P.T,Q={};P.T=Q;try{var J=b(),se=P.S;se!==null&&se(Q,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(F,xe)}catch(de){xe(de)}finally{O!==null&&Q.types!==null&&(O.types=Q.types),P.T=O}},ce.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ce.use=function(b){return P.H.use(b)},ce.useActionState=function(b,O,Q){return P.H.useActionState(b,O,Q)},ce.useCallback=function(b,O){return P.H.useCallback(b,O)},ce.useContext=function(b){return P.H.useContext(b)},ce.useDebugValue=function(){},ce.useDeferredValue=function(b,O){return P.H.useDeferredValue(b,O)},ce.useEffect=function(b,O){return P.H.useEffect(b,O)},ce.useEffectEvent=function(b){return P.H.useEffectEvent(b)},ce.useId=function(){return P.H.useId()},ce.useImperativeHandle=function(b,O,Q){return P.H.useImperativeHandle(b,O,Q)},ce.useInsertionEffect=function(b,O){return P.H.useInsertionEffect(b,O)},ce.useLayoutEffect=function(b,O){return P.H.useLayoutEffect(b,O)},ce.useMemo=function(b,O){return P.H.useMemo(b,O)},ce.useOptimistic=function(b,O){return P.H.useOptimistic(b,O)},ce.useReducer=function(b,O,Q){return P.H.useReducer(b,O,Q)},ce.useRef=function(b){return P.H.useRef(b)},ce.useState=function(b){return P.H.useState(b)},ce.useSyncExternalStore=function(b,O,Q){return P.H.useSyncExternalStore(b,O,Q)},ce.useTransition=function(){return P.H.useTransition()},ce.version="19.2.4",ce}var zf;function mo(){return zf||(zf=1,Wc.exports=Xg()),Wc.exports}var k=mo(),Fc={exports:{}},Yn={},$c={exports:{}},Ic={};var Ef;function Jg(){return Ef||(Ef=1,(function(s){function d(R,G){var ee=R.length;R.push(G);e:for(;0<ee;){var xe=ee-1>>>1,V=R[xe];if(0<f(V,G))R[xe]=G,R[ee]=V,ee=xe;else break e}}function o(R){return R.length===0?null:R[0]}function u(R){if(R.length===0)return null;var G=R[0],ee=R.pop();if(ee!==G){R[0]=ee;e:for(var xe=0,V=R.length,b=V>>>1;xe<b;){var O=2*(xe+1)-1,Q=R[O],J=O+1,se=R[J];if(0>f(Q,ee))J<V&&0>f(se,Q)?(R[xe]=se,R[J]=ee,xe=J):(R[xe]=Q,R[O]=ee,xe=O);else if(J<V&&0>f(se,ee))R[xe]=se,R[J]=ee,xe=J;else break e}}return G}function f(R,G){var ee=R.sortIndex-G.sortIndex;return ee!==0?ee:R.id-G.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;s.unstable_now=function(){return m.now()}}else{var v=Date,y=v.now();s.unstable_now=function(){return v.now()-y}}var g=[],h=[],T=1,w=null,B=3,Z=!1,S=!1,q=!1,Y=!1,H=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function K(R){for(var G=o(h);G!==null;){if(G.callback===null)u(h);else if(G.startTime<=R)u(h),G.sortIndex=G.expirationTime,d(g,G);else break;G=o(h)}}function ne(R){if(q=!1,K(R),!S)if(o(g)!==null)S=!0,F||(F=!0,$());else{var G=o(h);G!==null&&ke(ne,G.startTime-R)}}var F=!1,P=-1,je=5,U=-1;function le(){return Y?!0:!(s.unstable_now()-U<je)}function re(){if(Y=!1,F){var R=s.unstable_now();U=R;var G=!0;try{e:{S=!1,q&&(q=!1,X(P),P=-1),Z=!0;var ee=B;try{t:{for(K(R),w=o(g);w!==null&&!(w.expirationTime>R&&le());){var xe=w.callback;if(typeof xe=="function"){w.callback=null,B=w.priorityLevel;var V=xe(w.expirationTime<=R);if(R=s.unstable_now(),typeof V=="function"){w.callback=V,K(R),G=!0;break t}w===o(g)&&u(g),K(R)}else u(g);w=o(g)}if(w!==null)G=!0;else{var b=o(h);b!==null&&ke(ne,b.startTime-R),G=!1}}break e}finally{w=null,B=ee,Z=!1}G=void 0}}finally{G?$():F=!1}}}var $;if(typeof L=="function")$=function(){L(re)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,Oe=ie.port2;ie.port1.onmessage=re,$=function(){Oe.postMessage(null)}}else $=function(){H(re,0)};function ke(R,G){P=H(function(){R(s.unstable_now())},G)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(R){R.callback=null},s.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):je=0<R?Math.floor(1e3/R):5},s.unstable_getCurrentPriorityLevel=function(){return B},s.unstable_next=function(R){switch(B){case 1:case 2:case 3:var G=3;break;default:G=B}var ee=B;B=G;try{return R()}finally{B=ee}},s.unstable_requestPaint=function(){Y=!0},s.unstable_runWithPriority=function(R,G){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var ee=B;B=R;try{return G()}finally{B=ee}},s.unstable_scheduleCallback=function(R,G,ee){var xe=s.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?xe+ee:xe):ee=xe,R){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=ee+V,R={id:T++,callback:G,priorityLevel:R,startTime:ee,expirationTime:V,sortIndex:-1},ee>xe?(R.sortIndex=ee,d(h,R),o(g)===null&&R===o(h)&&(q?(X(P),P=-1):q=!0,ke(ne,ee-xe))):(R.sortIndex=V,d(g,R),S||Z||(S=!0,F||(F=!0,$()))),R},s.unstable_shouldYield=le,s.unstable_wrapCallback=function(R){var G=B;return function(){var ee=B;B=G;try{return R.apply(this,arguments)}finally{B=ee}}}})(Ic)),Ic}var Af;function Wg(){return Af||(Af=1,$c.exports=Jg()),$c.exports}var Pc={exports:{}},Pe={};var Tf;function Fg(){if(Tf)return Pe;Tf=1;var s=mo();function d(g){var h="https://react.dev/errors/"+g;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)h+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+g+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var u={d:{f:o,r:function(){throw Error(d(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},f=Symbol.for("react.portal");function m(g,h,T){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:w==null?null:""+w,children:g,containerInfo:h,implementation:T}}var v=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(g,h){if(g==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Pe.createPortal=function(g,h){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(d(299));return m(g,h,null,T)},Pe.flushSync=function(g){var h=v.T,T=u.p;try{if(v.T=null,u.p=2,g)return g()}finally{v.T=h,u.p=T,u.d.f()}},Pe.preconnect=function(g,h){typeof g=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,u.d.C(g,h))},Pe.prefetchDNS=function(g){typeof g=="string"&&u.d.D(g)},Pe.preinit=function(g,h){if(typeof g=="string"&&h&&typeof h.as=="string"){var T=h.as,w=y(T,h.crossOrigin),B=typeof h.integrity=="string"?h.integrity:void 0,Z=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;T==="style"?u.d.S(g,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:w,integrity:B,fetchPriority:Z}):T==="script"&&u.d.X(g,{crossOrigin:w,integrity:B,fetchPriority:Z,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Pe.preinitModule=function(g,h){if(typeof g=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var T=y(h.as,h.crossOrigin);u.d.M(g,{crossOrigin:T,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&u.d.M(g)},Pe.preload=function(g,h){if(typeof g=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var T=h.as,w=y(T,h.crossOrigin);u.d.L(g,T,{crossOrigin:w,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Pe.preloadModule=function(g,h){if(typeof g=="string")if(h){var T=y(h.as,h.crossOrigin);u.d.m(g,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:T,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else u.d.m(g)},Pe.requestFormReset=function(g){u.d.r(g)},Pe.unstable_batchedUpdates=function(g,h){return g(h)},Pe.useFormState=function(g,h,T){return v.H.useFormState(g,h,T)},Pe.useFormStatus=function(){return v.H.useHostTransitionStatus()},Pe.version="19.2.4",Pe}var Rf;function $g(){if(Rf)return Pc.exports;Rf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(d){console.error(d)}}return s(),Pc.exports=Fg(),Pc.exports}var Cf;function Ig(){if(Cf)return Yn;Cf=1;var s=Wg(),d=mo(),o=$g();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function v(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(m(e)!==e)throw Error(u(188))}function h(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,l=t;;){var i=a.return;if(i===null)break;var r=i.alternate;if(r===null){if(l=i.return,l!==null){a=l;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===a)return g(i),e;if(r===l)return g(i),t;r=r.sibling}throw Error(u(188))}if(a.return!==l.return)a=i,l=r;else{for(var c=!1,p=i.child;p;){if(p===a){c=!0,a=i,l=r;break}if(p===l){c=!0,l=i,a=r;break}p=p.sibling}if(!c){for(p=r.child;p;){if(p===a){c=!0,a=r,l=i;break}if(p===l){c=!0,l=r,a=i;break}p=p.sibling}if(!c)throw Error(u(189))}}if(a.alternate!==l)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function T(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=T(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,B=Symbol.for("react.element"),Z=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),L=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),je=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),le=Symbol.for("react.memo_cache_sentinel"),re=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=re&&e[re]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Symbol.for("react.client.reference");function Oe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case H:return"Profiler";case Y:return"StrictMode";case ne:return"Suspense";case F:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case L:return e.displayName||"Context";case X:return(e._context.displayName||"Context")+".Consumer";case K:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return t=e.displayName||null,t!==null?t:Oe(e.type)||"Memo";case je:t=e._payload,e=e._init;try{return Oe(e(t))}catch{}}return null}var ke=Array.isArray,R=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},xe=[],V=-1;function b(e){return{current:e}}function O(e){0>V||(e.current=xe[V],xe[V]=null,V--)}function Q(e,t){V++,xe[V]=e.current,e.current=t}var J=b(null),se=b(null),de=b(null),be=b(null);function et(e,t){switch(Q(de,t),Q(se,e),Q(J,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Zp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Zp(t),e=Kp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}O(J),Q(J,e)}function Ue(){O(J),O(se),O(de)}function Ql(e){e.memoizedState!==null&&Q(be,e);var t=J.current,a=Kp(t,e.type);t!==a&&(Q(se,e),Q(J,a))}function Fn(e){se.current===e&&(O(J),O(se)),be.current===e&&(O(be),Dn._currentValue=ee)}var Rr,jo;function Ua(e){if(Rr===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Rr=t&&t[1]||"",jo=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Rr+e+jo}var Cr=!1;function Or(e,t){if(!e||Cr)return"";Cr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(C){var A=C}Reflect.construct(e,[],_)}else{try{_.call()}catch(C){A=C}e.call(_.prototype)}}else{try{throw Error()}catch(C){A=C}(_=e())&&typeof _.catch=="function"&&_.catch(function(){})}}catch(C){if(C&&A&&typeof C.stack=="string")return[C.stack,A.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=l.DetermineComponentFrameRoot(),c=r[0],p=r[1];if(c&&p){var x=c.split(`
`),E=p.split(`
`);for(i=l=0;l<x.length&&!x[l].includes("DetermineComponentFrameRoot");)l++;for(;i<E.length&&!E[i].includes("DetermineComponentFrameRoot");)i++;if(l===x.length||i===E.length)for(l=x.length-1,i=E.length-1;1<=l&&0<=i&&x[l]!==E[i];)i--;for(;1<=l&&0<=i;l--,i--)if(x[l]!==E[i]){if(l!==1||i!==1)do if(l--,i--,0>i||x[l]!==E[i]){var M=`
`+x[l].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=l&&0<=i);break}}}finally{Cr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ua(a):""}function km(e,t){switch(e.tag){case 26:case 27:case 5:return Ua(e.type);case 16:return Ua("Lazy");case 13:return e.child!==t&&t!==null?Ua("Suspense Fallback"):Ua("Suspense");case 19:return Ua("SuspenseList");case 0:case 15:return Or(e.type,!1);case 11:return Or(e.type.render,!1);case 1:return Or(e.type,!0);case 31:return Ua("Activity");default:return""}}function ko(e){try{var t="",a=null;do t+=km(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Mr=Object.prototype.hasOwnProperty,Dr=s.unstable_scheduleCallback,_r=s.unstable_cancelCallback,wm=s.unstable_shouldYield,Nm=s.unstable_requestPaint,ut=s.unstable_now,Sm=s.unstable_getCurrentPriorityLevel,wo=s.unstable_ImmediatePriority,No=s.unstable_UserBlockingPriority,$n=s.unstable_NormalPriority,zm=s.unstable_LowPriority,So=s.unstable_IdlePriority,Em=s.log,Am=s.unstable_setDisableYieldValue,Zl=null,dt=null;function ua(e){if(typeof Em=="function"&&Am(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(Zl,e)}catch{}}var pt=Math.clz32?Math.clz32:Cm,Tm=Math.log,Rm=Math.LN2;function Cm(e){return e>>>=0,e===0?32:31-(Tm(e)/Rm|0)|0}var In=256,Pn=262144,ei=4194304;function Ba(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ti(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var i=0,r=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var p=l&134217727;return p!==0?(l=p&~r,l!==0?i=Ba(l):(c&=p,c!==0?i=Ba(c):a||(a=p&~e,a!==0&&(i=Ba(a))))):(p=l&~r,p!==0?i=Ba(p):c!==0?i=Ba(c):a||(a=l&~e,a!==0&&(i=Ba(a)))),i===0?0:t!==0&&t!==i&&(t&r)===0&&(r=i&-i,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:i}function Kl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Om(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zo(){var e=ei;return ei<<=1,(ei&62914560)===0&&(ei=4194304),e}function Ur(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Xl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Mm(e,t,a,l,i,r){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var p=e.entanglements,x=e.expirationTimes,E=e.hiddenUpdates;for(a=c&~a;0<a;){var M=31-pt(a),_=1<<M;p[M]=0,x[M]=-1;var A=E[M];if(A!==null)for(E[M]=null,M=0;M<A.length;M++){var C=A[M];C!==null&&(C.lane&=-536870913)}a&=~_}l!==0&&Eo(e,l,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(c&~t))}function Eo(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-pt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Ao(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-pt(a),i=1<<l;i&t|e[l]&t&&(e[l]|=t),a&=~i}}function To(e,t){var a=t&-t;return a=(a&42)!==0?1:Br(a),(a&(e.suspendedLanes|t))!==0?0:a}function Br(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Hr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ro(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:gf(e.type))}function Co(e,t){var a=G.p;try{return G.p=e,t()}finally{G.p=a}}var da=Math.random().toString(36).slice(2),Je="__reactFiber$"+da,lt="__reactProps$"+da,nl="__reactContainer$"+da,Yr="__reactEvents$"+da,Dm="__reactListeners$"+da,_m="__reactHandles$"+da,Oo="__reactResources$"+da,Jl="__reactMarker$"+da;function Lr(e){delete e[Je],delete e[lt],delete e[Yr],delete e[Dm],delete e[_m]}function il(e){var t=e[Je];if(t)return t;for(var a=e.parentNode;a;){if(t=a[nl]||a[Je]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Pp(e);e!==null;){if(a=e[Je])return a;e=Pp(e)}return t}e=a,a=e.parentNode}return null}function rl(e){if(e=e[Je]||e[nl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Wl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function sl(e){var t=e[Oo];return t||(t=e[Oo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ke(e){e[Jl]=!0}var Mo=new Set,Do={};function Ha(e,t){cl(e,t),cl(e+"Capture",t)}function cl(e,t){for(Do[e]=t,e=0;e<t.length;e++)Mo.add(t[e])}var Um=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_o={},Uo={};function Bm(e){return Mr.call(Uo,e)?!0:Mr.call(_o,e)?!1:Um.test(e)?Uo[e]=!0:(_o[e]=!0,!1)}function ai(e,t,a){if(Bm(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function li(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Qt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hm(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,r=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(c){a=""+c,r.call(this,c)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qr(e){if(!e._valueTracker){var t=Bo(e)?"checked":"value";e._valueTracker=Hm(e,t,""+e[t])}}function Ho(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Bo(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function ni(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ym=/[\n"\\]/g;function kt(e){return e.replace(Ym,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Gr(e,t,a,l,i,r,c,p){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+jt(t)):e.value!==""+jt(t)&&(e.value=""+jt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?Vr(e,c,jt(t)):a!=null?Vr(e,c,jt(a)):l!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+jt(p):e.removeAttribute("name")}function Yo(e,t,a,l,i,r,c,p){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){qr(e);return}a=a!=null?""+jt(a):"",t=t!=null?""+jt(t):a,p||t===e.value||(e.value=t),e.defaultValue=t}l=l??i,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=p?e.checked:!!l,e.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),qr(e)}function Vr(e,t,a){t==="number"&&ni(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ol(e,t,a,l){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&l&&(e[a].defaultSelected=!0)}else{for(a=""+jt(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,l&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Lo(e,t,a){if(t!=null&&(t=""+jt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+jt(a):""}function qo(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(u(92));if(ke(l)){if(1<l.length)throw Error(u(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=jt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),qr(e)}function ul(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Lm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Go(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Lm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Vo(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var i in t)l=t[i],t.hasOwnProperty(i)&&a[i]!==l&&Go(e,i,l)}else for(var r in t)t.hasOwnProperty(r)&&Go(e,r,t[r])}function Qr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Gm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ii(e){return Gm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zt(){}var Zr=null;function Kr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dl=null,pl=null;function Qo(e){var t=rl(e);if(t&&(e=t.stateNode)){var a=e[lt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Gr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+kt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var i=l[lt]||null;if(!i)throw Error(u(90));Gr(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Ho(l)}break e;case"textarea":Lo(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&ol(e,!!a.multiple,t,!1)}}}var Xr=!1;function Zo(e,t,a){if(Xr)return e(t,a);Xr=!0;try{var l=e(t);return l}finally{if(Xr=!1,(dl!==null||pl!==null)&&(Ki(),dl&&(t=dl,e=pl,pl=dl=null,Qo(t),e)))for(t=0;t<e.length;t++)Qo(e[t])}}function Fl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[lt]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jr=!1;if(Kt)try{var $l={};Object.defineProperty($l,"passive",{get:function(){Jr=!0}}),window.addEventListener("test",$l,$l),window.removeEventListener("test",$l,$l)}catch{Jr=!1}var pa=null,Wr=null,ri=null;function Ko(){if(ri)return ri;var e,t=Wr,a=t.length,l,i="value"in pa?pa.value:pa.textContent,r=i.length;for(e=0;e<a&&t[e]===i[e];e++);var c=a-e;for(l=1;l<=c&&t[a-l]===i[r-l];l++);return ri=i.slice(e,1<l?1-l:void 0)}function si(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ci(){return!0}function Xo(){return!1}function nt(e){function t(a,l,i,r,c){this._reactName=a,this._targetInst=i,this.type=l,this.nativeEvent=r,this.target=c,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(a=e[p],this[p]=a?a(r):r[p]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?ci:Xo,this.isPropagationStopped=Xo,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ci)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ci)},persist:function(){},isPersistent:ci}),t}var Ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oi=nt(Ya),Il=w({},Ya,{view:0,detail:0}),Vm=nt(Il),Fr,$r,Pl,ui=w({},Il,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pl&&(Pl&&e.type==="mousemove"?(Fr=e.screenX-Pl.screenX,$r=e.screenY-Pl.screenY):$r=Fr=0,Pl=e),Fr)},movementY:function(e){return"movementY"in e?e.movementY:$r}}),Jo=nt(ui),Qm=w({},ui,{dataTransfer:0}),Zm=nt(Qm),Km=w({},Il,{relatedTarget:0}),Ir=nt(Km),Xm=w({},Ya,{animationName:0,elapsedTime:0,pseudoElement:0}),Jm=nt(Xm),Wm=w({},Ya,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fm=nt(Wm),$m=w({},Ya,{data:0}),Wo=nt($m),Im={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function th(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=eh[e])?!!t[e]:!1}function Pr(){return th}var ah=w({},Il,{key:function(e){if(e.key){var t=Im[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=si(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pr,charCode:function(e){return e.type==="keypress"?si(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?si(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lh=nt(ah),nh=w({},ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fo=nt(nh),ih=w({},Il,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pr}),rh=nt(ih),sh=w({},Ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),ch=nt(sh),oh=w({},ui,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uh=nt(oh),dh=w({},Ya,{newState:0,oldState:0}),ph=nt(dh),fh=[9,13,27,32],es=Kt&&"CompositionEvent"in window,en=null;Kt&&"documentMode"in document&&(en=document.documentMode);var mh=Kt&&"TextEvent"in window&&!en,$o=Kt&&(!es||en&&8<en&&11>=en),Io=" ",Po=!1;function eu(e,t){switch(e){case"keyup":return fh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fl=!1;function hh(e,t){switch(e){case"compositionend":return tu(t);case"keypress":return t.which!==32?null:(Po=!0,Io);case"textInput":return e=t.data,e===Io&&Po?null:e;default:return null}}function gh(e,t){if(fl)return e==="compositionend"||!es&&eu(e,t)?(e=Ko(),ri=Wr=pa=null,fl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $o&&t.locale!=="ko"?null:t.data;default:return null}}var xh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function au(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xh[e.type]:t==="textarea"}function lu(e,t,a,l){dl?pl?pl.push(l):pl=[l]:dl=l,t=Pi(t,"onChange"),0<t.length&&(a=new oi("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var tn=null,an=null;function bh(e){Yp(e,0)}function di(e){var t=Wl(e);if(Ho(t))return e}function nu(e,t){if(e==="change")return t}var iu=!1;if(Kt){var ts;if(Kt){var as="oninput"in document;if(!as){var ru=document.createElement("div");ru.setAttribute("oninput","return;"),as=typeof ru.oninput=="function"}ts=as}else ts=!1;iu=ts&&(!document.documentMode||9<document.documentMode)}function su(){tn&&(tn.detachEvent("onpropertychange",cu),an=tn=null)}function cu(e){if(e.propertyName==="value"&&di(an)){var t=[];lu(t,an,e,Kr(e)),Zo(bh,t)}}function vh(e,t,a){e==="focusin"?(su(),tn=t,an=a,tn.attachEvent("onpropertychange",cu)):e==="focusout"&&su()}function yh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return di(an)}function jh(e,t){if(e==="click")return di(t)}function kh(e,t){if(e==="input"||e==="change")return di(t)}function wh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:wh;function ln(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var i=a[l];if(!Mr.call(t,i)||!ft(e[i],t[i]))return!1}return!0}function ou(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function uu(e,t){var a=ou(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ou(a)}}function du(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?du(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function pu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ni(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=ni(e.document)}return t}function ls(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Nh=Kt&&"documentMode"in document&&11>=document.documentMode,ml=null,ns=null,nn=null,is=!1;function fu(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;is||ml==null||ml!==ni(l)||(l=ml,"selectionStart"in l&&ls(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),nn&&ln(nn,l)||(nn=l,l=Pi(ns,"onSelect"),0<l.length&&(t=new oi("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=ml)))}function La(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var hl={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionrun:La("Transition","TransitionRun"),transitionstart:La("Transition","TransitionStart"),transitioncancel:La("Transition","TransitionCancel"),transitionend:La("Transition","TransitionEnd")},rs={},mu={};Kt&&(mu=document.createElement("div").style,"AnimationEvent"in window||(delete hl.animationend.animation,delete hl.animationiteration.animation,delete hl.animationstart.animation),"TransitionEvent"in window||delete hl.transitionend.transition);function qa(e){if(rs[e])return rs[e];if(!hl[e])return e;var t=hl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in mu)return rs[e]=t[a];return e}var hu=qa("animationend"),gu=qa("animationiteration"),xu=qa("animationstart"),Sh=qa("transitionrun"),zh=qa("transitionstart"),Eh=qa("transitioncancel"),bu=qa("transitionend"),vu=new Map,ss="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ss.push("scrollEnd");function Ot(e,t){vu.set(e,t),Ha(t,[e])}var pi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},wt=[],gl=0,cs=0;function fi(){for(var e=gl,t=cs=gl=0;t<e;){var a=wt[t];wt[t++]=null;var l=wt[t];wt[t++]=null;var i=wt[t];wt[t++]=null;var r=wt[t];if(wt[t++]=null,l!==null&&i!==null){var c=l.pending;c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i}r!==0&&yu(a,i,r)}}function mi(e,t,a,l){wt[gl++]=e,wt[gl++]=t,wt[gl++]=a,wt[gl++]=l,cs|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function os(e,t,a,l){return mi(e,t,a,l),hi(e)}function Ga(e,t){return mi(e,null,null,t),hi(e)}function yu(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var i=!1,r=e.return;r!==null;)r.childLanes|=a,l=r.alternate,l!==null&&(l.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-pt(a),e=r.hiddenUpdates,l=e[i],l===null?e[i]=[t]:l.push(t),t.lane=a|536870912),r):null}function hi(e){if(50<En)throw En=0,bc=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var xl={};function Ah(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,a,l){return new Ah(e,t,a,l)}function us(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xt(e,t){var a=e.alternate;return a===null?(a=mt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function ju(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function gi(e,t,a,l,i,r){var c=0;if(l=e,typeof e=="function")us(e)&&(c=1);else if(typeof e=="string")c=Mg(e,a,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case U:return e=mt(31,a,t,i),e.elementType=U,e.lanes=r,e;case q:return Va(a.children,i,r,t);case Y:c=8,i|=24;break;case H:return e=mt(12,a,t,i|2),e.elementType=H,e.lanes=r,e;case ne:return e=mt(13,a,t,i),e.elementType=ne,e.lanes=r,e;case F:return e=mt(19,a,t,i),e.elementType=F,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:c=10;break e;case X:c=9;break e;case K:c=11;break e;case P:c=14;break e;case je:c=16,l=null;break e}c=29,a=Error(u(130,e===null?"null":typeof e,"")),l=null}return t=mt(c,a,t,i),t.elementType=e,t.type=l,t.lanes=r,t}function Va(e,t,a,l){return e=mt(7,e,l,t),e.lanes=a,e}function ds(e,t,a){return e=mt(6,e,null,t),e.lanes=a,e}function ku(e){var t=mt(18,null,null,0);return t.stateNode=e,t}function ps(e,t,a){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var wu=new WeakMap;function Nt(e,t){if(typeof e=="object"&&e!==null){var a=wu.get(e);return a!==void 0?a:(t={value:e,source:t,stack:ko(t)},wu.set(e,t),t)}return{value:e,source:t,stack:ko(t)}}var bl=[],vl=0,xi=null,rn=0,St=[],zt=0,fa=null,Bt=1,Ht="";function Jt(e,t){bl[vl++]=rn,bl[vl++]=xi,xi=e,rn=t}function Nu(e,t,a){St[zt++]=Bt,St[zt++]=Ht,St[zt++]=fa,fa=e;var l=Bt;e=Ht;var i=32-pt(l)-1;l&=~(1<<i),a+=1;var r=32-pt(t)+i;if(30<r){var c=i-i%5;r=(l&(1<<c)-1).toString(32),l>>=c,i-=c,Bt=1<<32-pt(t)+i|a<<i|l,Ht=r+e}else Bt=1<<r|a<<i|l,Ht=e}function fs(e){e.return!==null&&(Jt(e,1),Nu(e,1,0))}function ms(e){for(;e===xi;)xi=bl[--vl],bl[vl]=null,rn=bl[--vl],bl[vl]=null;for(;e===fa;)fa=St[--zt],St[zt]=null,Ht=St[--zt],St[zt]=null,Bt=St[--zt],St[zt]=null}function Su(e,t){St[zt++]=Bt,St[zt++]=Ht,St[zt++]=fa,Bt=t.id,Ht=t.overflow,fa=e}var We=null,Re=null,ge=!1,ma=null,Et=!1,hs=Error(u(519));function ha(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw sn(Nt(t,e)),hs}function zu(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Je]=e,t[lt]=l,a){case"dialog":fe("cancel",t),fe("close",t);break;case"iframe":case"object":case"embed":fe("load",t);break;case"video":case"audio":for(a=0;a<Tn.length;a++)fe(Tn[a],t);break;case"source":fe("error",t);break;case"img":case"image":case"link":fe("error",t),fe("load",t);break;case"details":fe("toggle",t);break;case"input":fe("invalid",t),Yo(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":fe("invalid",t);break;case"textarea":fe("invalid",t),qo(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Vp(t.textContent,a)?(l.popover!=null&&(fe("beforetoggle",t),fe("toggle",t)),l.onScroll!=null&&fe("scroll",t),l.onScrollEnd!=null&&fe("scrollend",t),l.onClick!=null&&(t.onclick=Zt),t=!0):t=!1,t||ha(e,!0)}function Eu(e){for(We=e.return;We;)switch(We.tag){case 5:case 31:case 13:Et=!1;return;case 27:case 3:Et=!0;return;default:We=We.return}}function yl(e){if(e!==We)return!1;if(!ge)return Eu(e),ge=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Mc(e.type,e.memoizedProps)),a=!a),a&&Re&&ha(e),Eu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Re=Ip(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Re=Ip(e)}else t===27?(t=Re,Ta(e.type)?(e=Hc,Hc=null,Re=e):Re=t):Re=We?Tt(e.stateNode.nextSibling):null;return!0}function Qa(){Re=We=null,ge=!1}function gs(){var e=ma;return e!==null&&(ct===null?ct=e:ct.push.apply(ct,e),ma=null),e}function sn(e){ma===null?ma=[e]:ma.push(e)}var xs=b(null),Za=null,Wt=null;function ga(e,t,a){Q(xs,t._currentValue),t._currentValue=a}function Ft(e){e._currentValue=xs.current,O(xs)}function bs(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function vs(e,t,a,l){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var c=i.child;r=r.firstContext;e:for(;r!==null;){var p=r;r=i;for(var x=0;x<t.length;x++)if(p.context===t[x]){r.lanes|=a,p=r.alternate,p!==null&&(p.lanes|=a),bs(r.return,a,e),l||(c=null);break e}r=p.next}}else if(i.tag===18){if(c=i.return,c===null)throw Error(u(341));c.lanes|=a,r=c.alternate,r!==null&&(r.lanes|=a),bs(c,a,e),c=null}else c=i.child;if(c!==null)c.return=i;else for(c=i;c!==null;){if(c===e){c=null;break}if(i=c.sibling,i!==null){i.return=c.return,c=i;break}c=c.return}i=c}}function jl(e,t,a,l){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var c=i.alternate;if(c===null)throw Error(u(387));if(c=c.memoizedProps,c!==null){var p=i.type;ft(i.pendingProps.value,c.value)||(e!==null?e.push(p):e=[p])}}else if(i===be.current){if(c=i.alternate,c===null)throw Error(u(387));c.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Dn):e=[Dn])}i=i.return}e!==null&&vs(t,e,a,l),t.flags|=262144}function bi(e){for(e=e.firstContext;e!==null;){if(!ft(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ka(e){Za=e,Wt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Fe(e){return Au(Za,e)}function vi(e,t){return Za===null&&Ka(e),Au(e,t)}function Au(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Wt===null){if(e===null)throw Error(u(308));Wt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Wt=Wt.next=t;return a}var Th=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Rh=s.unstable_scheduleCallback,Ch=s.unstable_NormalPriority,Le={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ys(){return{controller:new Th,data:new Map,refCount:0}}function cn(e){e.refCount--,e.refCount===0&&Rh(Ch,function(){e.controller.abort()})}var on=null,js=0,kl=0,wl=null;function Oh(e,t){if(on===null){var a=on=[];js=0,kl=Nc(),wl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return js++,t.then(Tu,Tu),t}function Tu(){if(--js===0&&on!==null){wl!==null&&(wl.status="fulfilled");var e=on;on=null,kl=0,wl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Mh(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(l.status="rejected",l.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),l}var Ru=R.S;R.S=function(e,t){fp=ut(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Oh(e,t),Ru!==null&&Ru(e,t)};var Xa=b(null);function ks(){var e=Xa.current;return e!==null?e:Te.pooledCache}function yi(e,t){t===null?Q(Xa,Xa.current):Q(Xa,t.pool)}function Cu(){var e=ks();return e===null?null:{parent:Le._currentValue,pool:e}}var Nl=Error(u(460)),ws=Error(u(474)),ji=Error(u(542)),ki={then:function(){}};function Ou(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Mu(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Zt,Zt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_u(e),e;default:if(typeof t.status=="string")t.then(Zt,Zt);else{if(e=Te,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=l}},function(l){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_u(e),e}throw Wa=t,Nl}}function Ja(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Wa=a,Nl):a}}var Wa=null;function Du(){if(Wa===null)throw Error(u(459));var e=Wa;return Wa=null,e}function _u(e){if(e===Nl||e===ji)throw Error(u(483))}var Sl=null,un=0;function wi(e){var t=un;return un+=1,Sl===null&&(Sl=[]),Mu(Sl,e,t)}function dn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ni(e,t){throw t.$$typeof===B?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Uu(e){function t(N,j){if(e){var z=N.deletions;z===null?(N.deletions=[j],N.flags|=16):z.push(j)}}function a(N,j){if(!e)return null;for(;j!==null;)t(N,j),j=j.sibling;return null}function l(N){for(var j=new Map;N!==null;)N.key!==null?j.set(N.key,N):j.set(N.index,N),N=N.sibling;return j}function i(N,j){return N=Xt(N,j),N.index=0,N.sibling=null,N}function r(N,j,z){return N.index=z,e?(z=N.alternate,z!==null?(z=z.index,z<j?(N.flags|=67108866,j):z):(N.flags|=67108866,j)):(N.flags|=1048576,j)}function c(N){return e&&N.alternate===null&&(N.flags|=67108866),N}function p(N,j,z,D){return j===null||j.tag!==6?(j=ds(z,N.mode,D),j.return=N,j):(j=i(j,z),j.return=N,j)}function x(N,j,z,D){var te=z.type;return te===q?M(N,j,z.props.children,D,z.key):j!==null&&(j.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===je&&Ja(te)===j.type)?(j=i(j,z.props),dn(j,z),j.return=N,j):(j=gi(z.type,z.key,z.props,null,N.mode,D),dn(j,z),j.return=N,j)}function E(N,j,z,D){return j===null||j.tag!==4||j.stateNode.containerInfo!==z.containerInfo||j.stateNode.implementation!==z.implementation?(j=ps(z,N.mode,D),j.return=N,j):(j=i(j,z.children||[]),j.return=N,j)}function M(N,j,z,D,te){return j===null||j.tag!==7?(j=Va(z,N.mode,D,te),j.return=N,j):(j=i(j,z),j.return=N,j)}function _(N,j,z){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=ds(""+j,N.mode,z),j.return=N,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Z:return z=gi(j.type,j.key,j.props,null,N.mode,z),dn(z,j),z.return=N,z;case S:return j=ps(j,N.mode,z),j.return=N,j;case je:return j=Ja(j),_(N,j,z)}if(ke(j)||$(j))return j=Va(j,N.mode,z,null),j.return=N,j;if(typeof j.then=="function")return _(N,wi(j),z);if(j.$$typeof===L)return _(N,vi(N,j),z);Ni(N,j)}return null}function A(N,j,z,D){var te=j!==null?j.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return te!==null?null:p(N,j,""+z,D);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case Z:return z.key===te?x(N,j,z,D):null;case S:return z.key===te?E(N,j,z,D):null;case je:return z=Ja(z),A(N,j,z,D)}if(ke(z)||$(z))return te!==null?null:M(N,j,z,D,null);if(typeof z.then=="function")return A(N,j,wi(z),D);if(z.$$typeof===L)return A(N,j,vi(N,z),D);Ni(N,z)}return null}function C(N,j,z,D,te){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return N=N.get(z)||null,p(j,N,""+D,te);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Z:return N=N.get(D.key===null?z:D.key)||null,x(j,N,D,te);case S:return N=N.get(D.key===null?z:D.key)||null,E(j,N,D,te);case je:return D=Ja(D),C(N,j,z,D,te)}if(ke(D)||$(D))return N=N.get(z)||null,M(j,N,D,te,null);if(typeof D.then=="function")return C(N,j,z,wi(D),te);if(D.$$typeof===L)return C(N,j,z,vi(j,D),te);Ni(j,D)}return null}function W(N,j,z,D){for(var te=null,ve=null,I=j,ue=j=0,he=null;I!==null&&ue<z.length;ue++){I.index>ue?(he=I,I=null):he=I.sibling;var ye=A(N,I,z[ue],D);if(ye===null){I===null&&(I=he);break}e&&I&&ye.alternate===null&&t(N,I),j=r(ye,j,ue),ve===null?te=ye:ve.sibling=ye,ve=ye,I=he}if(ue===z.length)return a(N,I),ge&&Jt(N,ue),te;if(I===null){for(;ue<z.length;ue++)I=_(N,z[ue],D),I!==null&&(j=r(I,j,ue),ve===null?te=I:ve.sibling=I,ve=I);return ge&&Jt(N,ue),te}for(I=l(I);ue<z.length;ue++)he=C(I,N,ue,z[ue],D),he!==null&&(e&&he.alternate!==null&&I.delete(he.key===null?ue:he.key),j=r(he,j,ue),ve===null?te=he:ve.sibling=he,ve=he);return e&&I.forEach(function(Da){return t(N,Da)}),ge&&Jt(N,ue),te}function ae(N,j,z,D){if(z==null)throw Error(u(151));for(var te=null,ve=null,I=j,ue=j=0,he=null,ye=z.next();I!==null&&!ye.done;ue++,ye=z.next()){I.index>ue?(he=I,I=null):he=I.sibling;var Da=A(N,I,ye.value,D);if(Da===null){I===null&&(I=he);break}e&&I&&Da.alternate===null&&t(N,I),j=r(Da,j,ue),ve===null?te=Da:ve.sibling=Da,ve=Da,I=he}if(ye.done)return a(N,I),ge&&Jt(N,ue),te;if(I===null){for(;!ye.done;ue++,ye=z.next())ye=_(N,ye.value,D),ye!==null&&(j=r(ye,j,ue),ve===null?te=ye:ve.sibling=ye,ve=ye);return ge&&Jt(N,ue),te}for(I=l(I);!ye.done;ue++,ye=z.next())ye=C(I,N,ue,ye.value,D),ye!==null&&(e&&ye.alternate!==null&&I.delete(ye.key===null?ue:ye.key),j=r(ye,j,ue),ve===null?te=ye:ve.sibling=ye,ve=ye);return e&&I.forEach(function(Qg){return t(N,Qg)}),ge&&Jt(N,ue),te}function Ae(N,j,z,D){if(typeof z=="object"&&z!==null&&z.type===q&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case Z:e:{for(var te=z.key;j!==null;){if(j.key===te){if(te=z.type,te===q){if(j.tag===7){a(N,j.sibling),D=i(j,z.props.children),D.return=N,N=D;break e}}else if(j.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===je&&Ja(te)===j.type){a(N,j.sibling),D=i(j,z.props),dn(D,z),D.return=N,N=D;break e}a(N,j);break}else t(N,j);j=j.sibling}z.type===q?(D=Va(z.props.children,N.mode,D,z.key),D.return=N,N=D):(D=gi(z.type,z.key,z.props,null,N.mode,D),dn(D,z),D.return=N,N=D)}return c(N);case S:e:{for(te=z.key;j!==null;){if(j.key===te)if(j.tag===4&&j.stateNode.containerInfo===z.containerInfo&&j.stateNode.implementation===z.implementation){a(N,j.sibling),D=i(j,z.children||[]),D.return=N,N=D;break e}else{a(N,j);break}else t(N,j);j=j.sibling}D=ps(z,N.mode,D),D.return=N,N=D}return c(N);case je:return z=Ja(z),Ae(N,j,z,D)}if(ke(z))return W(N,j,z,D);if($(z)){if(te=$(z),typeof te!="function")throw Error(u(150));return z=te.call(z),ae(N,j,z,D)}if(typeof z.then=="function")return Ae(N,j,wi(z),D);if(z.$$typeof===L)return Ae(N,j,vi(N,z),D);Ni(N,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,j!==null&&j.tag===6?(a(N,j.sibling),D=i(j,z),D.return=N,N=D):(a(N,j),D=ds(z,N.mode,D),D.return=N,N=D),c(N)):a(N,j)}return function(N,j,z,D){try{un=0;var te=Ae(N,j,z,D);return Sl=null,te}catch(I){if(I===Nl||I===ji)throw I;var ve=mt(29,I,null,N.mode);return ve.lanes=D,ve.return=N,ve}}}var Fa=Uu(!0),Bu=Uu(!1),xa=!1;function Ns(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ss(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function va(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(we&2)!==0){var i=l.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),l.pending=t,t=hi(e),yu(e,null,a),t}return mi(e,l,t,a),hi(e)}function pn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Ao(e,a)}}function zs(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var i=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?i=r=c:r=r.next=c,a=a.next}while(a!==null);r===null?i=r=t:r=r.next=t}else i=r=t;a={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Es=!1;function fn(){if(Es){var e=wl;if(e!==null)throw e}}function mn(e,t,a,l){Es=!1;var i=e.updateQueue;xa=!1;var r=i.firstBaseUpdate,c=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var x=p,E=x.next;x.next=null,c===null?r=E:c.next=E,c=x;var M=e.alternate;M!==null&&(M=M.updateQueue,p=M.lastBaseUpdate,p!==c&&(p===null?M.firstBaseUpdate=E:p.next=E,M.lastBaseUpdate=x))}if(r!==null){var _=i.baseState;c=0,M=E=x=null,p=r;do{var A=p.lane&-536870913,C=A!==p.lane;if(C?(me&A)===A:(l&A)===A){A!==0&&A===kl&&(Es=!0),M!==null&&(M=M.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var W=e,ae=p;A=t;var Ae=a;switch(ae.tag){case 1:if(W=ae.payload,typeof W=="function"){_=W.call(Ae,_,A);break e}_=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=ae.payload,A=typeof W=="function"?W.call(Ae,_,A):W,A==null)break e;_=w({},_,A);break e;case 2:xa=!0}}A=p.callback,A!==null&&(e.flags|=64,C&&(e.flags|=8192),C=i.callbacks,C===null?i.callbacks=[A]:C.push(A))}else C={lane:A,tag:p.tag,payload:p.payload,callback:p.callback,next:null},M===null?(E=M=C,x=_):M=M.next=C,c|=A;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;C=p,p=C.next,C.next=null,i.lastBaseUpdate=C,i.shared.pending=null}}while(!0);M===null&&(x=_),i.baseState=x,i.firstBaseUpdate=E,i.lastBaseUpdate=M,r===null&&(i.shared.lanes=0),Na|=c,e.lanes=c,e.memoizedState=_}}function Hu(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Yu(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Hu(a[e],t)}var zl=b(null),Si=b(0);function Lu(e,t){e=ia,Q(Si,e),Q(zl,t),ia=e|t.baseLanes}function As(){Q(Si,ia),Q(zl,zl.current)}function Ts(){ia=Si.current,O(zl),O(Si)}var ht=b(null),At=null;function ya(e){var t=e.alternate;Q(Be,Be.current&1),Q(ht,e),At===null&&(t===null||zl.current!==null||t.memoizedState!==null)&&(At=e)}function Rs(e){Q(Be,Be.current),Q(ht,e),At===null&&(At=e)}function qu(e){e.tag===22?(Q(Be,Be.current),Q(ht,e),At===null&&(At=e)):ja()}function ja(){Q(Be,Be.current),Q(ht,ht.current)}function gt(e){O(ht),At===e&&(At=null),O(Be)}var Be=b(0);function zi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Uc(a)||Bc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $t=0,oe=null,ze=null,qe=null,Ei=!1,El=!1,$a=!1,Ai=0,hn=0,Al=null,Dh=0;function De(){throw Error(u(321))}function Cs(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ft(e[a],t[a]))return!1;return!0}function Os(e,t,a,l,i,r){return $t=r,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?Nd:Xs,$a=!1,r=a(l,i),$a=!1,El&&(r=Vu(t,a,l,i)),Gu(e),r}function Gu(e){R.H=bn;var t=ze!==null&&ze.next!==null;if($t=0,qe=ze=oe=null,Ei=!1,hn=0,Al=null,t)throw Error(u(300));e===null||Ge||(e=e.dependencies,e!==null&&bi(e)&&(Ge=!0))}function Vu(e,t,a,l){oe=e;var i=0;do{if(El&&(Al=null),hn=0,El=!1,25<=i)throw Error(u(301));if(i+=1,qe=ze=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}R.H=Sd,r=t(a,l)}while(El);return r}function _h(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?gn(t):t,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(oe.flags|=1024),t}function Ms(){var e=Ai!==0;return Ai=0,e}function Ds(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function _s(e){if(Ei){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ei=!1}$t=0,qe=ze=oe=null,El=!1,hn=Ai=0,Al=null}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?oe.memoizedState=qe=e:qe=qe.next=e,qe}function He(){if(ze===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=qe===null?oe.memoizedState:qe.next;if(t!==null)qe=t,ze=e;else{if(e===null)throw oe.alternate===null?Error(u(467)):Error(u(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},qe===null?oe.memoizedState=qe=e:qe=qe.next=e}return qe}function Ti(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function gn(e){var t=hn;return hn+=1,Al===null&&(Al=[]),e=Mu(Al,e,t),t=oe,(qe===null?t.memoizedState:qe.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?Nd:Xs),e}function Ri(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return gn(e);if(e.$$typeof===L)return Fe(e)}throw Error(u(438,String(e)))}function Us(e){var t=null,a=oe.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=oe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ti(),oe.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=le;return t.index++,a}function It(e,t){return typeof t=="function"?t(e):t}function Ci(e){var t=He();return Bs(t,ze,e)}function Bs(e,t,a){var l=e.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=a;var i=e.baseQueue,r=l.pending;if(r!==null){if(i!==null){var c=i.next;i.next=r.next,r.next=c}t.baseQueue=i=r,l.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var p=c=null,x=null,E=t,M=!1;do{var _=E.lane&-536870913;if(_!==E.lane?(me&_)===_:($t&_)===_){var A=E.revertLane;if(A===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),_===kl&&(M=!0);else if(($t&A)===A){E=E.next,A===kl&&(M=!0);continue}else _={lane:0,revertLane:E.revertLane,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},x===null?(p=x=_,c=r):x=x.next=_,oe.lanes|=A,Na|=A;_=E.action,$a&&a(r,_),r=E.hasEagerState?E.eagerState:a(r,_)}else A={lane:_,revertLane:E.revertLane,gesture:E.gesture,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},x===null?(p=x=A,c=r):x=x.next=A,oe.lanes|=_,Na|=_;E=E.next}while(E!==null&&E!==t);if(x===null?c=r:x.next=p,!ft(r,e.memoizedState)&&(Ge=!0,M&&(a=wl,a!==null)))throw a;e.memoizedState=r,e.baseState=c,e.baseQueue=x,l.lastRenderedState=r}return i===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Hs(e){var t=He(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var l=a.dispatch,i=a.pending,r=t.memoizedState;if(i!==null){a.pending=null;var c=i=i.next;do r=e(r,c.action),c=c.next;while(c!==i);ft(r,t.memoizedState)||(Ge=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,l]}function Qu(e,t,a){var l=oe,i=He(),r=ge;if(r){if(a===void 0)throw Error(u(407));a=a()}else a=t();var c=!ft((ze||i).memoizedState,a);if(c&&(i.memoizedState=a,Ge=!0),i=i.queue,qs(Xu.bind(null,l,i,e),[e]),i.getSnapshot!==t||c||qe!==null&&qe.memoizedState.tag&1){if(l.flags|=2048,Tl(9,{destroy:void 0},Ku.bind(null,l,i,a,t),null),Te===null)throw Error(u(349));r||($t&127)!==0||Zu(l,t,a)}return a}function Zu(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=oe.updateQueue,t===null?(t=Ti(),oe.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Ku(e,t,a,l){t.value=a,t.getSnapshot=l,Ju(t)&&Wu(e)}function Xu(e,t,a){return a(function(){Ju(t)&&Wu(e)})}function Ju(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ft(e,a)}catch{return!0}}function Wu(e){var t=Ga(e,2);t!==null&&ot(t,e,2)}function Ys(e){var t=tt();if(typeof e=="function"){var a=e;if(e=a(),$a){ua(!0);try{a()}finally{ua(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:It,lastRenderedState:e},t}function Fu(e,t,a,l){return e.baseState=a,Bs(e,ze,typeof l=="function"?l:It)}function Uh(e,t,a,l,i){if(Di(e))throw Error(u(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){r.listeners.push(c)}};R.T!==null?a(!0):r.isTransition=!1,l(r),a=t.pending,a===null?(r.next=t.pending=r,$u(t,r)):(r.next=a.next,t.pending=a.next=r)}}function $u(e,t){var a=t.action,l=t.payload,i=e.state;if(t.isTransition){var r=R.T,c={};R.T=c;try{var p=a(i,l),x=R.S;x!==null&&x(c,p),Iu(e,t,p)}catch(E){Ls(e,t,E)}finally{r!==null&&c.types!==null&&(r.types=c.types),R.T=r}}else try{r=a(i,l),Iu(e,t,r)}catch(E){Ls(e,t,E)}}function Iu(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Pu(e,t,l)},function(l){return Ls(e,t,l)}):Pu(e,t,a)}function Pu(e,t,a){t.status="fulfilled",t.value=a,ed(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,$u(e,a)))}function Ls(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,ed(t),t=t.next;while(t!==l)}e.action=null}function ed(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function td(e,t){return t}function ad(e,t){if(ge){var a=Te.formState;if(a!==null){e:{var l=oe;if(ge){if(Re){t:{for(var i=Re,r=Et;i.nodeType!==8;){if(!r){i=null;break t}if(i=Tt(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){Re=Tt(i.nextSibling),l=i.data==="F!";break e}}ha(l)}l=!1}l&&(t=a[0])}}return a=tt(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:td,lastRenderedState:t},a.queue=l,a=jd.bind(null,oe,l),l.dispatch=a,l=Ys(!1),r=Ks.bind(null,oe,!1,l.queue),l=tt(),i={state:t,dispatch:null,action:e,pending:null},l.queue=i,a=Uh.bind(null,oe,i,r,a),i.dispatch=a,l.memoizedState=e,[t,a,!1]}function ld(e){var t=He();return nd(t,ze,e)}function nd(e,t,a){if(t=Bs(e,t,td)[0],e=Ci(It)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=gn(t)}catch(c){throw c===Nl?ji:c}else l=t;t=He();var i=t.queue,r=i.dispatch;return a!==t.memoizedState&&(oe.flags|=2048,Tl(9,{destroy:void 0},Bh.bind(null,i,a),null)),[l,r,e]}function Bh(e,t){e.action=t}function id(e){var t=He(),a=ze;if(a!==null)return nd(t,a,e);He(),t=t.memoizedState,a=He();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Tl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=oe.updateQueue,t===null&&(t=Ti(),oe.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function rd(){return He().memoizedState}function Oi(e,t,a,l){var i=tt();oe.flags|=e,i.memoizedState=Tl(1|t,{destroy:void 0},a,l===void 0?null:l)}function Mi(e,t,a,l){var i=He();l=l===void 0?null:l;var r=i.memoizedState.inst;ze!==null&&l!==null&&Cs(l,ze.memoizedState.deps)?i.memoizedState=Tl(t,r,a,l):(oe.flags|=e,i.memoizedState=Tl(1|t,r,a,l))}function sd(e,t){Oi(8390656,8,e,t)}function qs(e,t){Mi(2048,8,e,t)}function Hh(e){oe.flags|=4;var t=oe.updateQueue;if(t===null)t=Ti(),oe.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function cd(e){var t=He().memoizedState;return Hh({ref:t,nextImpl:e}),function(){if((we&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function od(e,t){return Mi(4,2,e,t)}function ud(e,t){return Mi(4,4,e,t)}function dd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function pd(e,t,a){a=a!=null?a.concat([e]):null,Mi(4,4,dd.bind(null,t,e),a)}function Gs(){}function fd(e,t){var a=He();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Cs(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function md(e,t){var a=He();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Cs(t,l[1]))return l[0];if(l=e(),$a){ua(!0);try{e()}finally{ua(!1)}}return a.memoizedState=[l,t],l}function Vs(e,t,a){return a===void 0||($t&1073741824)!==0&&(me&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=hp(),oe.lanes|=e,Na|=e,a)}function hd(e,t,a,l){return ft(a,t)?a:zl.current!==null?(e=Vs(e,a,l),ft(e,t)||(Ge=!0),e):($t&42)===0||($t&1073741824)!==0&&(me&261930)===0?(Ge=!0,e.memoizedState=a):(e=hp(),oe.lanes|=e,Na|=e,t)}function gd(e,t,a,l,i){var r=G.p;G.p=r!==0&&8>r?r:8;var c=R.T,p={};R.T=p,Ks(e,!1,t,a);try{var x=i(),E=R.S;if(E!==null&&E(p,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var M=Mh(x,l);xn(e,t,M,vt(e))}else xn(e,t,l,vt(e))}catch(_){xn(e,t,{then:function(){},status:"rejected",reason:_},vt())}finally{G.p=r,c!==null&&p.types!==null&&(c.types=p.types),R.T=c}}function Yh(){}function Qs(e,t,a,l){if(e.tag!==5)throw Error(u(476));var i=xd(e).queue;gd(e,i,t,ee,a===null?Yh:function(){return bd(e),a(l)})}function xd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:It,lastRenderedState:ee},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:It,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function bd(e){var t=xd(e);t.next===null&&(t=e.alternate.memoizedState),xn(e,t.next.queue,{},vt())}function Zs(){return Fe(Dn)}function vd(){return He().memoizedState}function yd(){return He().memoizedState}function Lh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=vt();e=ba(a);var l=va(t,e,a);l!==null&&(ot(l,t,a),pn(l,t,a)),t={cache:ys()},e.payload=t;return}t=t.return}}function qh(e,t,a){var l=vt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Di(e)?kd(t,a):(a=os(e,t,a,l),a!==null&&(ot(a,e,l),wd(a,t,l)))}function jd(e,t,a){var l=vt();xn(e,t,a,l)}function xn(e,t,a,l){var i={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Di(e))kd(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var c=t.lastRenderedState,p=r(c,a);if(i.hasEagerState=!0,i.eagerState=p,ft(p,c))return mi(e,t,i,0),Te===null&&fi(),!1}catch{}if(a=os(e,t,i,l),a!==null)return ot(a,e,l),wd(a,t,l),!0}return!1}function Ks(e,t,a,l){if(l={lane:2,revertLane:Nc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Di(e)){if(t)throw Error(u(479))}else t=os(e,a,l,2),t!==null&&ot(t,e,2)}function Di(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function kd(e,t){El=Ei=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function wd(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Ao(e,a)}}var bn={readContext:Fe,use:Ri,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useLayoutEffect:De,useInsertionEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useSyncExternalStore:De,useId:De,useHostTransitionStatus:De,useFormState:De,useActionState:De,useOptimistic:De,useMemoCache:De,useCacheRefresh:De};bn.useEffectEvent=De;var Nd={readContext:Fe,use:Ri,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:sd,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Oi(4194308,4,dd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Oi(4194308,4,e,t)},useInsertionEffect:function(e,t){Oi(4,2,e,t)},useMemo:function(e,t){var a=tt();t=t===void 0?null:t;var l=e();if($a){ua(!0);try{e()}finally{ua(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=tt();if(a!==void 0){var i=a(t);if($a){ua(!0);try{a(t)}finally{ua(!1)}}}else i=t;return l.memoizedState=l.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},l.queue=e,e=e.dispatch=qh.bind(null,oe,e),[l.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:function(e){e=Ys(e);var t=e.queue,a=jd.bind(null,oe,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Gs,useDeferredValue:function(e,t){var a=tt();return Vs(a,e,t)},useTransition:function(){var e=Ys(!1);return e=gd.bind(null,oe,e.queue,!0,!1),tt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=oe,i=tt();if(ge){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),Te===null)throw Error(u(349));(me&127)!==0||Zu(l,t,a)}i.memoizedState=a;var r={value:a,getSnapshot:t};return i.queue=r,sd(Xu.bind(null,l,r,e),[e]),l.flags|=2048,Tl(9,{destroy:void 0},Ku.bind(null,l,r,a,t),null),a},useId:function(){var e=tt(),t=Te.identifierPrefix;if(ge){var a=Ht,l=Bt;a=(l&~(1<<32-pt(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Ai++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Dh++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Zs,useFormState:ad,useActionState:ad,useOptimistic:function(e){var t=tt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Ks.bind(null,oe,!0,a),a.dispatch=t,[e,t]},useMemoCache:Us,useCacheRefresh:function(){return tt().memoizedState=Lh.bind(null,oe)},useEffectEvent:function(e){var t=tt(),a={impl:e};return t.memoizedState=a,function(){if((we&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},Xs={readContext:Fe,use:Ri,useCallback:fd,useContext:Fe,useEffect:qs,useImperativeHandle:pd,useInsertionEffect:od,useLayoutEffect:ud,useMemo:md,useReducer:Ci,useRef:rd,useState:function(){return Ci(It)},useDebugValue:Gs,useDeferredValue:function(e,t){var a=He();return hd(a,ze.memoizedState,e,t)},useTransition:function(){var e=Ci(It)[0],t=He().memoizedState;return[typeof e=="boolean"?e:gn(e),t]},useSyncExternalStore:Qu,useId:vd,useHostTransitionStatus:Zs,useFormState:ld,useActionState:ld,useOptimistic:function(e,t){var a=He();return Fu(a,ze,e,t)},useMemoCache:Us,useCacheRefresh:yd};Xs.useEffectEvent=cd;var Sd={readContext:Fe,use:Ri,useCallback:fd,useContext:Fe,useEffect:qs,useImperativeHandle:pd,useInsertionEffect:od,useLayoutEffect:ud,useMemo:md,useReducer:Hs,useRef:rd,useState:function(){return Hs(It)},useDebugValue:Gs,useDeferredValue:function(e,t){var a=He();return ze===null?Vs(a,e,t):hd(a,ze.memoizedState,e,t)},useTransition:function(){var e=Hs(It)[0],t=He().memoizedState;return[typeof e=="boolean"?e:gn(e),t]},useSyncExternalStore:Qu,useId:vd,useHostTransitionStatus:Zs,useFormState:id,useActionState:id,useOptimistic:function(e,t){var a=He();return ze!==null?Fu(a,ze,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Us,useCacheRefresh:yd};Sd.useEffectEvent=cd;function Js(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:w({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ws={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=vt(),i=ba(l);i.payload=t,a!=null&&(i.callback=a),t=va(e,i,l),t!==null&&(ot(t,e,l),pn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=vt(),i=ba(l);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=va(e,i,l),t!==null&&(ot(t,e,l),pn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=vt(),l=ba(a);l.tag=2,t!=null&&(l.callback=t),t=va(e,l,a),t!==null&&(ot(t,e,a),pn(t,e,a))}};function zd(e,t,a,l,i,r,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,r,c):t.prototype&&t.prototype.isPureReactComponent?!ln(a,l)||!ln(i,r):!0}function Ed(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function Ia(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=w({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function Ad(e){pi(e)}function Td(e){console.error(e)}function Rd(e){pi(e)}function _i(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Cd(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Fs(e,t,a){return a=ba(a),a.tag=3,a.payload={element:null},a.callback=function(){_i(e,t)},a}function Od(e){return e=ba(e),e.tag=3,e}function Md(e,t,a,l){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var r=l.value;e.payload=function(){return i(r)},e.callback=function(){Cd(t,a,l)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){Cd(t,a,l),typeof i!="function"&&(Sa===null?Sa=new Set([this]):Sa.add(this));var p=l.stack;this.componentDidCatch(l.value,{componentStack:p!==null?p:""})})}function Gh(e,t,a,l,i){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&jl(t,a,i,!0),a=ht.current,a!==null){switch(a.tag){case 31:case 13:return At===null?Xi():a.alternate===null&&_e===0&&(_e=3),a.flags&=-257,a.flags|=65536,a.lanes=i,l===ki?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),jc(e,l,i)),!1;case 22:return a.flags|=65536,l===ki?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),jc(e,l,i)),!1}throw Error(u(435,a.tag))}return jc(e,l,i),Xi(),!1}if(ge)return t=ht.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,l!==hs&&(e=Error(u(422),{cause:l}),sn(Nt(e,a)))):(l!==hs&&(t=Error(u(423),{cause:l}),sn(Nt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,l=Nt(l,a),i=Fs(e.stateNode,l,i),zs(e,i),_e!==4&&(_e=2)),!1;var r=Error(u(520),{cause:l});if(r=Nt(r,a),zn===null?zn=[r]:zn.push(r),_e!==4&&(_e=2),t===null)return!0;l=Nt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=Fs(a.stateNode,l,e),zs(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Sa===null||!Sa.has(r))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Od(i),Md(i,e,a,l),zs(a,i),!1}a=a.return}while(a!==null);return!1}var $s=Error(u(461)),Ge=!1;function $e(e,t,a,l){t.child=e===null?Bu(t,null,a,l):Fa(t,e.child,a,l)}function Dd(e,t,a,l,i){a=a.render;var r=t.ref;if("ref"in l){var c={};for(var p in l)p!=="ref"&&(c[p]=l[p])}else c=l;return Ka(t),l=Os(e,t,a,c,r,i),p=Ms(),e!==null&&!Ge?(Ds(e,t,i),Pt(e,t,i)):(ge&&p&&fs(t),t.flags|=1,$e(e,t,l,i),t.child)}function _d(e,t,a,l,i){if(e===null){var r=a.type;return typeof r=="function"&&!us(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,Ud(e,t,r,l,i)):(e=gi(a.type,null,l,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!ic(e,i)){var c=r.memoizedProps;if(a=a.compare,a=a!==null?a:ln,a(c,l)&&e.ref===t.ref)return Pt(e,t,i)}return t.flags|=1,e=Xt(r,l),e.ref=t.ref,e.return=t,t.child=e}function Ud(e,t,a,l,i){if(e!==null){var r=e.memoizedProps;if(ln(r,l)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=l=r,ic(e,i))(e.flags&131072)!==0&&(Ge=!0);else return t.lanes=e.lanes,Pt(e,t,i)}return Is(e,t,a,l,i)}function Bd(e,t,a,l){var i=l.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(l=t.child=e.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;l=i&~r}else l=0,t.child=null;return Hd(e,t,r,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&yi(t,r!==null?r.cachePool:null),r!==null?Lu(t,r):As(),qu(t);else return l=t.lanes=536870912,Hd(e,t,r!==null?r.baseLanes|a:a,a,l)}else r!==null?(yi(t,r.cachePool),Lu(t,r),ja(),t.memoizedState=null):(e!==null&&yi(t,null),As(),ja());return $e(e,t,i,a),t.child}function vn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Hd(e,t,a,l,i){var r=ks();return r=r===null?null:{parent:Le._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&yi(t,null),As(),qu(t),e!==null&&jl(e,t,l,!0),t.childLanes=i,null}function Ui(e,t){return t=Hi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Yd(e,t,a){return Fa(t,e.child,null,a),e=Ui(t,t.pendingProps),e.flags|=2,gt(t),t.memoizedState=null,e}function Vh(e,t,a){var l=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ge){if(l.mode==="hidden")return e=Ui(t,l),t.lanes=536870912,vn(null,e);if(Rs(t),(e=Re)?(e=$p(e,Et),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:fa!==null?{id:Bt,overflow:Ht}:null,retryLane:536870912,hydrationErrors:null},a=ku(e),a.return=t,t.child=a,We=t,Re=null)):e=null,e===null)throw ha(t);return t.lanes=536870912,null}return Ui(t,l)}var r=e.memoizedState;if(r!==null){var c=r.dehydrated;if(Rs(t),i)if(t.flags&256)t.flags&=-257,t=Yd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(Ge||jl(e,t,a,!1),i=(a&e.childLanes)!==0,Ge||i){if(l=Te,l!==null&&(c=To(l,a),c!==0&&c!==r.retryLane))throw r.retryLane=c,Ga(e,c),ot(l,e,c),$s;Xi(),t=Yd(e,t,a)}else e=r.treeContext,Re=Tt(c.nextSibling),We=t,ge=!0,ma=null,Et=!1,e!==null&&Su(t,e),t=Ui(t,l),t.flags|=4096;return t}return e=Xt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Bi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Is(e,t,a,l,i){return Ka(t),a=Os(e,t,a,l,void 0,i),l=Ms(),e!==null&&!Ge?(Ds(e,t,i),Pt(e,t,i)):(ge&&l&&fs(t),t.flags|=1,$e(e,t,a,i),t.child)}function Ld(e,t,a,l,i,r){return Ka(t),t.updateQueue=null,a=Vu(t,l,a,i),Gu(e),l=Ms(),e!==null&&!Ge?(Ds(e,t,r),Pt(e,t,r)):(ge&&l&&fs(t),t.flags|=1,$e(e,t,a,r),t.child)}function qd(e,t,a,l,i){if(Ka(t),t.stateNode===null){var r=xl,c=a.contextType;typeof c=="object"&&c!==null&&(r=Fe(c)),r=new a(l,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ws,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=l,r.state=t.memoizedState,r.refs={},Ns(t),c=a.contextType,r.context=typeof c=="object"&&c!==null?Fe(c):xl,r.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(Js(t,a,c,l),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(c=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),c!==r.state&&Ws.enqueueReplaceState(r,r.state,null),mn(t,l,r,i),fn(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){r=t.stateNode;var p=t.memoizedProps,x=Ia(a,p);r.props=x;var E=r.context,M=a.contextType;c=xl,typeof M=="object"&&M!==null&&(c=Fe(M));var _=a.getDerivedStateFromProps;M=typeof _=="function"||typeof r.getSnapshotBeforeUpdate=="function",p=t.pendingProps!==p,M||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(p||E!==c)&&Ed(t,r,l,c),xa=!1;var A=t.memoizedState;r.state=A,mn(t,l,r,i),fn(),E=t.memoizedState,p||A!==E||xa?(typeof _=="function"&&(Js(t,a,_,l),E=t.memoizedState),(x=xa||zd(t,a,x,l,A,E,c))?(M||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=E),r.props=l,r.state=E,r.context=c,l=x):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{r=t.stateNode,Ss(e,t),c=t.memoizedProps,M=Ia(a,c),r.props=M,_=t.pendingProps,A=r.context,E=a.contextType,x=xl,typeof E=="object"&&E!==null&&(x=Fe(E)),p=a.getDerivedStateFromProps,(E=typeof p=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(c!==_||A!==x)&&Ed(t,r,l,x),xa=!1,A=t.memoizedState,r.state=A,mn(t,l,r,i),fn();var C=t.memoizedState;c!==_||A!==C||xa||e!==null&&e.dependencies!==null&&bi(e.dependencies)?(typeof p=="function"&&(Js(t,a,p,l),C=t.memoizedState),(M=xa||zd(t,a,M,l,A,C,x)||e!==null&&e.dependencies!==null&&bi(e.dependencies))?(E||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(l,C,x),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(l,C,x)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||c===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=C),r.props=l,r.state=C,r.context=x,l=M):(typeof r.componentDidUpdate!="function"||c===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),l=!1)}return r=l,Bi(e,t),l=(t.flags&128)!==0,r||l?(r=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&l?(t.child=Fa(t,e.child,null,i),t.child=Fa(t,null,a,i)):$e(e,t,a,i),t.memoizedState=r.state,e=t.child):e=Pt(e,t,i),e}function Gd(e,t,a,l){return Qa(),t.flags|=256,$e(e,t,a,l),t.child}var Ps={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ec(e){return{baseLanes:e,cachePool:Cu()}}function tc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=bt),e}function Vd(e,t,a){var l=t.pendingProps,i=!1,r=(t.flags&128)!==0,c;if((c=r)||(c=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),c&&(i=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(ge){if(i?ya(t):ja(),(e=Re)?(e=$p(e,Et),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:fa!==null?{id:Bt,overflow:Ht}:null,retryLane:536870912,hydrationErrors:null},a=ku(e),a.return=t,t.child=a,We=t,Re=null)):e=null,e===null)throw ha(t);return Bc(e)?t.lanes=32:t.lanes=536870912,null}var p=l.children;return l=l.fallback,i?(ja(),i=t.mode,p=Hi({mode:"hidden",children:p},i),l=Va(l,i,a,null),p.return=t,l.return=t,p.sibling=l,t.child=p,l=t.child,l.memoizedState=ec(a),l.childLanes=tc(e,c,a),t.memoizedState=Ps,vn(null,l)):(ya(t),ac(t,p))}var x=e.memoizedState;if(x!==null&&(p=x.dehydrated,p!==null)){if(r)t.flags&256?(ya(t),t.flags&=-257,t=lc(e,t,a)):t.memoizedState!==null?(ja(),t.child=e.child,t.flags|=128,t=null):(ja(),p=l.fallback,i=t.mode,l=Hi({mode:"visible",children:l.children},i),p=Va(p,i,a,null),p.flags|=2,l.return=t,p.return=t,l.sibling=p,t.child=l,Fa(t,e.child,null,a),l=t.child,l.memoizedState=ec(a),l.childLanes=tc(e,c,a),t.memoizedState=Ps,t=vn(null,l));else if(ya(t),Bc(p)){if(c=p.nextSibling&&p.nextSibling.dataset,c)var E=c.dgst;c=E,l=Error(u(419)),l.stack="",l.digest=c,sn({value:l,source:null,stack:null}),t=lc(e,t,a)}else if(Ge||jl(e,t,a,!1),c=(a&e.childLanes)!==0,Ge||c){if(c=Te,c!==null&&(l=To(c,a),l!==0&&l!==x.retryLane))throw x.retryLane=l,Ga(e,l),ot(c,e,l),$s;Uc(p)||Xi(),t=lc(e,t,a)}else Uc(p)?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,Re=Tt(p.nextSibling),We=t,ge=!0,ma=null,Et=!1,e!==null&&Su(t,e),t=ac(t,l.children),t.flags|=4096);return t}return i?(ja(),p=l.fallback,i=t.mode,x=e.child,E=x.sibling,l=Xt(x,{mode:"hidden",children:l.children}),l.subtreeFlags=x.subtreeFlags&65011712,E!==null?p=Xt(E,p):(p=Va(p,i,a,null),p.flags|=2),p.return=t,l.return=t,l.sibling=p,t.child=l,vn(null,l),l=t.child,p=e.child.memoizedState,p===null?p=ec(a):(i=p.cachePool,i!==null?(x=Le._currentValue,i=i.parent!==x?{parent:x,pool:x}:i):i=Cu(),p={baseLanes:p.baseLanes|a,cachePool:i}),l.memoizedState=p,l.childLanes=tc(e,c,a),t.memoizedState=Ps,vn(e.child,l)):(ya(t),a=e.child,e=a.sibling,a=Xt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function ac(e,t){return t=Hi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Hi(e,t){return e=mt(22,e,null,t),e.lanes=0,e}function lc(e,t,a){return Fa(t,e.child,null,a),e=ac(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qd(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),bs(e.return,t,a)}function nc(e,t,a,l,i,r){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:i,treeForkCount:r}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=a,c.tailMode=i,c.treeForkCount=r)}function Zd(e,t,a){var l=t.pendingProps,i=l.revealOrder,r=l.tail;l=l.children;var c=Be.current,p=(c&2)!==0;if(p?(c=c&1|2,t.flags|=128):c&=1,Q(Be,c),$e(e,t,l,a),l=ge?rn:0,!p&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qd(e,a,t);else if(e.tag===19)Qd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&zi(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),nc(t,!1,i,a,r,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&zi(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}nc(t,!0,a,null,r,l);break;case"together":nc(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Pt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Na|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(jl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=Xt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Xt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function ic(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&bi(e)))}function Qh(e,t,a){switch(t.tag){case 3:et(t,t.stateNode.containerInfo),ga(t,Le,e.memoizedState.cache),Qa();break;case 27:case 5:Ql(t);break;case 4:et(t,t.stateNode.containerInfo);break;case 10:ga(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Rs(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ya(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Vd(e,t,a):(ya(t),e=Pt(e,t,a),e!==null?e.sibling:null);ya(t);break;case 19:var i=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(jl(e,t,a,!1),l=(a&t.childLanes)!==0),i){if(l)return Zd(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(Be,Be.current),l)break;return null;case 22:return t.lanes=0,Bd(e,t,a,t.pendingProps);case 24:ga(t,Le,e.memoizedState.cache)}return Pt(e,t,a)}function Kd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ge=!0;else{if(!ic(e,a)&&(t.flags&128)===0)return Ge=!1,Qh(e,t,a);Ge=(e.flags&131072)!==0}else Ge=!1,ge&&(t.flags&1048576)!==0&&Nu(t,rn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ja(t.elementType),t.type=e,typeof e=="function")us(e)?(l=Ia(e,l),t.tag=1,t=qd(null,t,e,l,a)):(t.tag=0,t=Is(null,t,e,l,a));else{if(e!=null){var i=e.$$typeof;if(i===K){t.tag=11,t=Dd(null,t,e,l,a);break e}else if(i===P){t.tag=14,t=_d(null,t,e,l,a);break e}}throw t=Oe(e)||e,Error(u(306,t,""))}}return t;case 0:return Is(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,i=Ia(l,t.pendingProps),qd(e,t,l,i,a);case 3:e:{if(et(t,t.stateNode.containerInfo),e===null)throw Error(u(387));l=t.pendingProps;var r=t.memoizedState;i=r.element,Ss(e,t),mn(t,l,null,a);var c=t.memoizedState;if(l=c.cache,ga(t,Le,l),l!==r.cache&&vs(t,[Le],a,!0),fn(),l=c.element,r.isDehydrated)if(r={element:l,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Gd(e,t,l,a);break e}else if(l!==i){i=Nt(Error(u(424)),t),sn(i),t=Gd(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Re=Tt(e.firstChild),We=t,ge=!0,ma=null,Et=!0,a=Bu(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Qa(),l===i){t=Pt(e,t,a);break e}$e(e,t,l,a)}t=t.child}return t;case 26:return Bi(e,t),e===null?(a=lf(t.type,null,t.pendingProps,null))?t.memoizedState=a:ge||(a=t.type,e=t.pendingProps,l=er(de.current).createElement(a),l[Je]=t,l[lt]=e,Ie(l,a,e),Ke(l),t.stateNode=l):t.memoizedState=lf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ql(t),e===null&&ge&&(l=t.stateNode=ef(t.type,t.pendingProps,de.current),We=t,Et=!0,i=Re,Ta(t.type)?(Hc=i,Re=Tt(l.firstChild)):Re=i),$e(e,t,t.pendingProps.children,a),Bi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ge&&((i=l=Re)&&(l=yg(l,t.type,t.pendingProps,Et),l!==null?(t.stateNode=l,We=t,Re=Tt(l.firstChild),Et=!1,i=!0):i=!1),i||ha(t)),Ql(t),i=t.type,r=t.pendingProps,c=e!==null?e.memoizedProps:null,l=r.children,Mc(i,r)?l=null:c!==null&&Mc(i,c)&&(t.flags|=32),t.memoizedState!==null&&(i=Os(e,t,_h,null,null,a),Dn._currentValue=i),Bi(e,t),$e(e,t,l,a),t.child;case 6:return e===null&&ge&&((e=a=Re)&&(a=jg(a,t.pendingProps,Et),a!==null?(t.stateNode=a,We=t,Re=null,e=!0):e=!1),e||ha(t)),null;case 13:return Vd(e,t,a);case 4:return et(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Fa(t,null,l,a):$e(e,t,l,a),t.child;case 11:return Dd(e,t,t.type,t.pendingProps,a);case 7:return $e(e,t,t.pendingProps,a),t.child;case 8:return $e(e,t,t.pendingProps.children,a),t.child;case 12:return $e(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ga(t,t.type,l.value),$e(e,t,l.children,a),t.child;case 9:return i=t.type._context,l=t.pendingProps.children,Ka(t),i=Fe(i),l=l(i),t.flags|=1,$e(e,t,l,a),t.child;case 14:return _d(e,t,t.type,t.pendingProps,a);case 15:return Ud(e,t,t.type,t.pendingProps,a);case 19:return Zd(e,t,a);case 31:return Vh(e,t,a);case 22:return Bd(e,t,a,t.pendingProps);case 24:return Ka(t),l=Fe(Le),e===null?(i=ks(),i===null&&(i=Te,r=ys(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=a),i=r),t.memoizedState={parent:l,cache:i},Ns(t),ga(t,Le,i)):((e.lanes&a)!==0&&(Ss(e,t),mn(t,null,null,a),fn()),i=e.memoizedState,r=t.memoizedState,i.parent!==l?(i={parent:l,cache:l},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ga(t,Le,l)):(l=r.cache,ga(t,Le,l),l!==i.cache&&vs(t,[Le],a,!0))),$e(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function ea(e){e.flags|=4}function rc(e,t,a,l,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(vp())e.flags|=8192;else throw Wa=ki,ws}else e.flags&=-16777217}function Xd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!of(t))if(vp())e.flags|=8192;else throw Wa=ki,ws}function Yi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?zo():536870912,e.lanes|=t,Ml|=t)}function yn(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags&65011712,l|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Zh(e,t,a){var l=t.pendingProps;switch(ms(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Ce(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Ft(Le),Ue(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(yl(t)?ea(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,gs())),Ce(t),null;case 26:var i=t.type,r=t.memoizedState;return e===null?(ea(t),r!==null?(Ce(t),Xd(t,r)):(Ce(t),rc(t,i,null,l,a))):r?r!==e.memoizedState?(ea(t),Ce(t),Xd(t,r)):(Ce(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&ea(t),Ce(t),rc(t,i,e,l,a)),null;case 27:if(Fn(t),a=de.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ea(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return Ce(t),null}e=J.current,yl(t)?zu(t):(e=ef(i,l,a),t.stateNode=e,ea(t))}return Ce(t),null;case 5:if(Fn(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ea(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return Ce(t),null}if(r=J.current,yl(t))zu(t);else{var c=er(de.current);switch(r){case 1:r=c.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:r=c.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":r=c.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":r=c.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":r=c.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?r.multiple=!0:l.size&&(r.size=l.size);break;default:r=typeof l.is=="string"?c.createElement(i,{is:l.is}):c.createElement(i)}}r[Je]=t,r[lt]=l;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)r.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=r;e:switch(Ie(r,i,l),i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ea(t)}}return Ce(t),rc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&ea(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(u(166));if(e=de.current,yl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,i=We,i!==null)switch(i.tag){case 27:case 5:l=i.memoizedProps}e[Je]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Vp(e.nodeValue,a)),e||ha(t,!0)}else e=er(e).createTextNode(l),e[Je]=t,t.stateNode=e}return Ce(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=yl(t),a!==null){if(e===null){if(!l)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[Je]=t}else Qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ce(t),e=!1}else a=gs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(gt(t),t):(gt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Ce(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=yl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[Je]=t}else Qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ce(t),i=!1}else i=gs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(gt(t),t):(gt(t),null)}return gt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,i=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(i=l.alternate.memoizedState.cachePool.pool),r=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(r=l.memoizedState.cachePool.pool),r!==i&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Yi(t,t.updateQueue),Ce(t),null);case 4:return Ue(),e===null&&Ac(t.stateNode.containerInfo),Ce(t),null;case 10:return Ft(t.type),Ce(t),null;case 19:if(O(Be),l=t.memoizedState,l===null)return Ce(t),null;if(i=(t.flags&128)!==0,r=l.rendering,r===null)if(i)yn(l,!1);else{if(_e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=zi(e),r!==null){for(t.flags|=128,yn(l,!1),e=r.updateQueue,t.updateQueue=e,Yi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)ju(a,e),a=a.sibling;return Q(Be,Be.current&1|2),ge&&Jt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&ut()>Qi&&(t.flags|=128,i=!0,yn(l,!1),t.lanes=4194304)}else{if(!i)if(e=zi(r),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Yi(t,e),yn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!ge)return Ce(t),null}else 2*ut()-l.renderingStartTime>Qi&&a!==536870912&&(t.flags|=128,i=!0,yn(l,!1),t.lanes=4194304);l.isBackwards?(r.sibling=t.child,t.child=r):(e=l.last,e!==null?e.sibling=r:t.child=r,l.last=r)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ut(),e.sibling=null,a=Be.current,Q(Be,i?a&1|2:a&1),ge&&Jt(t,l.treeForkCount),e):(Ce(t),null);case 22:case 23:return gt(t),Ts(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),a=t.updateQueue,a!==null&&Yi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&O(Xa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ft(Le),Ce(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function Kh(e,t){switch(ms(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ft(Le),Ue(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Fn(t),null;case 31:if(t.memoizedState!==null){if(gt(t),t.alternate===null)throw Error(u(340));Qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(gt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(Be),null;case 4:return Ue(),null;case 10:return Ft(t.type),null;case 22:case 23:return gt(t),Ts(),e!==null&&O(Xa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ft(Le),null;case 25:return null;default:return null}}function Jd(e,t){switch(ms(t),t.tag){case 3:Ft(Le),Ue();break;case 26:case 27:case 5:Fn(t);break;case 4:Ue();break;case 31:t.memoizedState!==null&&gt(t);break;case 13:gt(t);break;case 19:O(Be);break;case 10:Ft(t.type);break;case 22:case 23:gt(t),Ts(),e!==null&&O(Xa);break;case 24:Ft(Le)}}function jn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){l=void 0;var r=a.create,c=a.inst;l=r(),c.destroy=l}a=a.next}while(a!==i)}}catch(p){Se(t,t.return,p)}}function ka(e,t,a){try{var l=t.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var r=i.next;l=r;do{if((l.tag&e)===e){var c=l.inst,p=c.destroy;if(p!==void 0){c.destroy=void 0,i=t;var x=a,E=p;try{E()}catch(M){Se(i,x,M)}}}l=l.next}while(l!==r)}}catch(M){Se(t,t.return,M)}}function Wd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Yu(t,a)}catch(l){Se(e,e.return,l)}}}function Fd(e,t,a){a.props=Ia(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Se(e,t,l)}}function kn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(i){Se(e,t,i)}}function Yt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(i){Se(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Se(e,t,i)}else a.current=null}function $d(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(i){Se(e,e.return,i)}}function sc(e,t,a){try{var l=e.stateNode;mg(l,e.type,a,t),l[lt]=t}catch(i){Se(e,e.return,i)}}function Id(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ta(e.type)||e.tag===4}function cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Id(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ta(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function oc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Zt));else if(l!==4&&(l===27&&Ta(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(oc(e,t,a),e=e.sibling;e!==null;)oc(e,t,a),e=e.sibling}function Li(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Ta(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Li(e,t,a),e=e.sibling;e!==null;)Li(e,t,a),e=e.sibling}function Pd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Ie(t,l,a),t[Je]=e,t[lt]=a}catch(r){Se(e,e.return,r)}}var ta=!1,Ve=!1,uc=!1,ep=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function Xh(e,t){if(e=e.containerInfo,Cc=sr,e=pu(e),ls(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var i=l.anchorOffset,r=l.focusNode;l=l.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var c=0,p=-1,x=-1,E=0,M=0,_=e,A=null;t:for(;;){for(var C;_!==a||i!==0&&_.nodeType!==3||(p=c+i),_!==r||l!==0&&_.nodeType!==3||(x=c+l),_.nodeType===3&&(c+=_.nodeValue.length),(C=_.firstChild)!==null;)A=_,_=C;for(;;){if(_===e)break t;if(A===a&&++E===i&&(p=c),A===r&&++M===l&&(x=c),(C=_.nextSibling)!==null)break;_=A,A=_.parentNode}_=C}a=p===-1||x===-1?null:{start:p,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(Oc={focusedElem:e,selectionRange:a},sr=!1,Xe=t;Xe!==null;)if(t=Xe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Xe=e;else for(;Xe!==null;){switch(t=Xe,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,i=r.memoizedProps,r=r.memoizedState,l=a.stateNode;try{var W=Ia(a.type,i);e=l.getSnapshotBeforeUpdate(W,r),l.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Se(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)_c(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":_c(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Xe=e;break}Xe=t.return}}function tp(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:la(e,a),l&4&&jn(5,a);break;case 1:if(la(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){Se(a,a.return,c)}else{var i=Ia(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){Se(a,a.return,c)}}l&64&&Wd(a),l&512&&kn(a,a.return);break;case 3:if(la(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Yu(e,t)}catch(c){Se(a,a.return,c)}}break;case 27:t===null&&l&4&&Pd(a);case 26:case 5:la(e,a),t===null&&l&4&&$d(a),l&512&&kn(a,a.return);break;case 12:la(e,a);break;case 31:la(e,a),l&4&&np(e,a);break;case 13:la(e,a),l&4&&ip(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ag.bind(null,a),kg(e,a))));break;case 22:if(l=a.memoizedState!==null||ta,!l){t=t!==null&&t.memoizedState!==null||Ve,i=ta;var r=Ve;ta=l,(Ve=t)&&!r?na(e,a,(a.subtreeFlags&8772)!==0):la(e,a),ta=i,Ve=r}break;case 30:break;default:la(e,a)}}function ap(e){var t=e.alternate;t!==null&&(e.alternate=null,ap(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Lr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Me=null,it=!1;function aa(e,t,a){for(a=a.child;a!==null;)lp(e,t,a),a=a.sibling}function lp(e,t,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Zl,a)}catch{}switch(a.tag){case 26:Ve||Yt(a,t),aa(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ve||Yt(a,t);var l=Me,i=it;Ta(a.type)&&(Me=a.stateNode,it=!1),aa(e,t,a),Cn(a.stateNode),Me=l,it=i;break;case 5:Ve||Yt(a,t);case 6:if(l=Me,i=it,Me=null,aa(e,t,a),Me=l,it=i,Me!==null)if(it)try{(Me.nodeType===9?Me.body:Me.nodeName==="HTML"?Me.ownerDocument.body:Me).removeChild(a.stateNode)}catch(r){Se(a,t,r)}else try{Me.removeChild(a.stateNode)}catch(r){Se(a,t,r)}break;case 18:Me!==null&&(it?(e=Me,Wp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ql(e)):Wp(Me,a.stateNode));break;case 4:l=Me,i=it,Me=a.stateNode.containerInfo,it=!0,aa(e,t,a),Me=l,it=i;break;case 0:case 11:case 14:case 15:ka(2,a,t),Ve||ka(4,a,t),aa(e,t,a);break;case 1:Ve||(Yt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Fd(a,t,l)),aa(e,t,a);break;case 21:aa(e,t,a);break;case 22:Ve=(l=Ve)||a.memoizedState!==null,aa(e,t,a),Ve=l;break;default:aa(e,t,a)}}function np(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ql(e)}catch(a){Se(t,t.return,a)}}}function ip(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ql(e)}catch(a){Se(t,t.return,a)}}function Jh(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ep),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ep),t;default:throw Error(u(435,e.tag))}}function qi(e,t){var a=Jh(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var i=lg.bind(null,e,l);l.then(i,i)}})}function rt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var i=a[l],r=e,c=t,p=c;e:for(;p!==null;){switch(p.tag){case 27:if(Ta(p.type)){Me=p.stateNode,it=!1;break e}break;case 5:Me=p.stateNode,it=!1;break e;case 3:case 4:Me=p.stateNode.containerInfo,it=!0;break e}p=p.return}if(Me===null)throw Error(u(160));lp(r,c,i),Me=null,it=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)rp(t,e),t=t.sibling}var Mt=null;function rp(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:rt(t,e),st(e),l&4&&(ka(3,e,e.return),jn(3,e),ka(5,e,e.return));break;case 1:rt(t,e),st(e),l&512&&(Ve||a===null||Yt(a,a.return)),l&64&&ta&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var i=Mt;if(rt(t,e),st(e),l&512&&(Ve||a===null||Yt(a,a.return)),l&4){var r=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(l){case"title":r=i.getElementsByTagName("title")[0],(!r||r[Jl]||r[Je]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(l),i.head.insertBefore(r,i.querySelector("head > title"))),Ie(r,l,a),r[Je]=e,Ke(r),l=r;break e;case"link":var c=sf("link","href",i).get(l+(a.href||""));if(c){for(var p=0;p<c.length;p++)if(r=c[p],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(p,1);break t}}r=i.createElement(l),Ie(r,l,a),i.head.appendChild(r);break;case"meta":if(c=sf("meta","content",i).get(l+(a.content||""))){for(p=0;p<c.length;p++)if(r=c[p],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(p,1);break t}}r=i.createElement(l),Ie(r,l,a),i.head.appendChild(r);break;default:throw Error(u(468,l))}r[Je]=e,Ke(r),l=r}e.stateNode=l}else cf(i,e.type,e.stateNode);else e.stateNode=rf(i,l,e.memoizedProps);else r!==l?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,l===null?cf(i,e.type,e.stateNode):rf(i,l,e.memoizedProps)):l===null&&e.stateNode!==null&&sc(e,e.memoizedProps,a.memoizedProps)}break;case 27:rt(t,e),st(e),l&512&&(Ve||a===null||Yt(a,a.return)),a!==null&&l&4&&sc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(rt(t,e),st(e),l&512&&(Ve||a===null||Yt(a,a.return)),e.flags&32){i=e.stateNode;try{ul(i,"")}catch(W){Se(e,e.return,W)}}l&4&&e.stateNode!=null&&(i=e.memoizedProps,sc(e,i,a!==null?a.memoizedProps:i)),l&1024&&(uc=!0);break;case 6:if(rt(t,e),st(e),l&4){if(e.stateNode===null)throw Error(u(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(W){Se(e,e.return,W)}}break;case 3:if(lr=null,i=Mt,Mt=tr(t.containerInfo),rt(t,e),Mt=i,st(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ql(t.containerInfo)}catch(W){Se(e,e.return,W)}uc&&(uc=!1,sp(e));break;case 4:l=Mt,Mt=tr(e.stateNode.containerInfo),rt(t,e),st(e),Mt=l;break;case 12:rt(t,e),st(e);break;case 31:rt(t,e),st(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,qi(e,l)));break;case 13:rt(t,e),st(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Vi=ut()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,qi(e,l)));break;case 22:i=e.memoizedState!==null;var x=a!==null&&a.memoizedState!==null,E=ta,M=Ve;if(ta=E||i,Ve=M||x,rt(t,e),Ve=M,ta=E,st(e),l&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||x||ta||Ve||Pa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){x=a=t;try{if(r=x.stateNode,i)c=r.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{p=x.stateNode;var _=x.memoizedProps.style,A=_!=null&&_.hasOwnProperty("display")?_.display:null;p.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(W){Se(x,x.return,W)}}}else if(t.tag===6){if(a===null){x=t;try{x.stateNode.nodeValue=i?"":x.memoizedProps}catch(W){Se(x,x.return,W)}}}else if(t.tag===18){if(a===null){x=t;try{var C=x.stateNode;i?Fp(C,!0):Fp(x.stateNode,!1)}catch(W){Se(x,x.return,W)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,qi(e,a))));break;case 19:rt(t,e),st(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,qi(e,l)));break;case 30:break;case 21:break;default:rt(t,e),st(e)}}function st(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Id(l)){a=l;break}l=l.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var i=a.stateNode,r=cc(e);Li(e,r,i);break;case 5:var c=a.stateNode;a.flags&32&&(ul(c,""),a.flags&=-33);var p=cc(e);Li(e,p,c);break;case 3:case 4:var x=a.stateNode.containerInfo,E=cc(e);oc(e,E,x);break;default:throw Error(u(161))}}catch(M){Se(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;sp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function la(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)tp(e,t.alternate,t),t=t.sibling}function Pa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ka(4,t,t.return),Pa(t);break;case 1:Yt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Fd(t,t.return,a),Pa(t);break;case 27:Cn(t.stateNode);case 26:case 5:Yt(t,t.return),Pa(t);break;case 22:t.memoizedState===null&&Pa(t);break;case 30:Pa(t);break;default:Pa(t)}e=e.sibling}}function na(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,i=e,r=t,c=r.flags;switch(r.tag){case 0:case 11:case 15:na(i,r,a),jn(4,r);break;case 1:if(na(i,r,a),l=r,i=l.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(E){Se(l,l.return,E)}if(l=r,i=l.updateQueue,i!==null){var p=l.stateNode;try{var x=i.shared.hiddenCallbacks;if(x!==null)for(i.shared.hiddenCallbacks=null,i=0;i<x.length;i++)Hu(x[i],p)}catch(E){Se(l,l.return,E)}}a&&c&64&&Wd(r),kn(r,r.return);break;case 27:Pd(r);case 26:case 5:na(i,r,a),a&&l===null&&c&4&&$d(r),kn(r,r.return);break;case 12:na(i,r,a);break;case 31:na(i,r,a),a&&c&4&&np(i,r);break;case 13:na(i,r,a),a&&c&4&&ip(i,r);break;case 22:r.memoizedState===null&&na(i,r,a),kn(r,r.return);break;case 30:break;default:na(i,r,a)}t=t.sibling}}function dc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&cn(a))}function pc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&cn(e))}function Dt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)cp(e,t,a,l),t=t.sibling}function cp(e,t,a,l){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dt(e,t,a,l),i&2048&&jn(9,t);break;case 1:Dt(e,t,a,l);break;case 3:Dt(e,t,a,l),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&cn(e)));break;case 12:if(i&2048){Dt(e,t,a,l),e=t.stateNode;try{var r=t.memoizedProps,c=r.id,p=r.onPostCommit;typeof p=="function"&&p(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){Se(t,t.return,x)}}else Dt(e,t,a,l);break;case 31:Dt(e,t,a,l);break;case 13:Dt(e,t,a,l);break;case 23:break;case 22:r=t.stateNode,c=t.alternate,t.memoizedState!==null?r._visibility&2?Dt(e,t,a,l):wn(e,t):r._visibility&2?Dt(e,t,a,l):(r._visibility|=2,Rl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),i&2048&&dc(c,t);break;case 24:Dt(e,t,a,l),i&2048&&pc(t.alternate,t);break;default:Dt(e,t,a,l)}}function Rl(e,t,a,l,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,c=t,p=a,x=l,E=c.flags;switch(c.tag){case 0:case 11:case 15:Rl(r,c,p,x,i),jn(8,c);break;case 23:break;case 22:var M=c.stateNode;c.memoizedState!==null?M._visibility&2?Rl(r,c,p,x,i):wn(r,c):(M._visibility|=2,Rl(r,c,p,x,i)),i&&E&2048&&dc(c.alternate,c);break;case 24:Rl(r,c,p,x,i),i&&E&2048&&pc(c.alternate,c);break;default:Rl(r,c,p,x,i)}t=t.sibling}}function wn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,i=l.flags;switch(l.tag){case 22:wn(a,l),i&2048&&dc(l.alternate,l);break;case 24:wn(a,l),i&2048&&pc(l.alternate,l);break;default:wn(a,l)}t=t.sibling}}var Nn=8192;function Cl(e,t,a){if(e.subtreeFlags&Nn)for(e=e.child;e!==null;)op(e,t,a),e=e.sibling}function op(e,t,a){switch(e.tag){case 26:Cl(e,t,a),e.flags&Nn&&e.memoizedState!==null&&Dg(a,Mt,e.memoizedState,e.memoizedProps);break;case 5:Cl(e,t,a);break;case 3:case 4:var l=Mt;Mt=tr(e.stateNode.containerInfo),Cl(e,t,a),Mt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Nn,Nn=16777216,Cl(e,t,a),Nn=l):Cl(e,t,a));break;default:Cl(e,t,a)}}function up(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Sn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Xe=l,pp(l,e)}up(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)dp(e),e=e.sibling}function dp(e){switch(e.tag){case 0:case 11:case 15:Sn(e),e.flags&2048&&ka(9,e,e.return);break;case 3:Sn(e);break;case 12:Sn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Gi(e)):Sn(e);break;default:Sn(e)}}function Gi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Xe=l,pp(l,e)}up(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ka(8,t,t.return),Gi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Gi(t));break;default:Gi(t)}e=e.sibling}}function pp(e,t){for(;Xe!==null;){var a=Xe;switch(a.tag){case 0:case 11:case 15:ka(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:cn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Xe=l;else e:for(a=e;Xe!==null;){l=Xe;var i=l.sibling,r=l.return;if(ap(l),l===a){Xe=null;break e}if(i!==null){i.return=r,Xe=i;break e}Xe=r}}}var Wh={getCacheForType:function(e){var t=Fe(Le),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Fe(Le).controller.signal}},Fh=typeof WeakMap=="function"?WeakMap:Map,we=0,Te=null,pe=null,me=0,Ne=0,xt=null,wa=!1,Ol=!1,fc=!1,ia=0,_e=0,Na=0,el=0,mc=0,bt=0,Ml=0,zn=null,ct=null,hc=!1,Vi=0,fp=0,Qi=1/0,Zi=null,Sa=null,Qe=0,za=null,Dl=null,ra=0,gc=0,xc=null,mp=null,En=0,bc=null;function vt(){return(we&2)!==0&&me!==0?me&-me:R.T!==null?Nc():Ro()}function hp(){if(bt===0)if((me&536870912)===0||ge){var e=Pn;Pn<<=1,(Pn&3932160)===0&&(Pn=262144),bt=e}else bt=536870912;return e=ht.current,e!==null&&(e.flags|=32),bt}function ot(e,t,a){(e===Te&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&(_l(e,0),Ea(e,me,bt,!1)),Xl(e,a),((we&2)===0||e!==Te)&&(e===Te&&((we&2)===0&&(el|=a),_e===4&&Ea(e,me,bt,!1)),Lt(e))}function gp(e,t,a){if((we&6)!==0)throw Error(u(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Kl(e,t),i=l?Ph(e,t):yc(e,t,!0),r=l;do{if(i===0){Ol&&!l&&Ea(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!$h(a)){i=yc(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var p=e;i=zn;var x=p.current.memoizedState.isDehydrated;if(x&&(_l(p,c).flags|=256),c=yc(p,c,!1),c!==2){if(fc&&!x){p.errorRecoveryDisabledLanes|=r,el|=r,i=4;break e}r=ct,ct=i,r!==null&&(ct===null?ct=r:ct.push.apply(ct,r))}i=c}if(r=!1,i!==2)continue}}if(i===1){_l(e,0),Ea(e,t,0,!0);break}e:{switch(l=e,r=i,r){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Ea(l,t,bt,!wa);break e;case 2:ct=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(i=Vi+300-ut(),10<i)){if(Ea(l,t,bt,!wa),ti(l,0,!0)!==0)break e;ra=t,l.timeoutHandle=Xp(xp.bind(null,l,a,ct,Zi,hc,t,bt,el,Ml,wa,r,"Throttled",-0,0),i);break e}xp(l,a,ct,Zi,hc,t,bt,el,Ml,wa,r,null,-0,0)}}break}while(!0);Lt(e)}function xp(e,t,a,l,i,r,c,p,x,E,M,_,A,C){if(e.timeoutHandle=-1,_=t.subtreeFlags,_&8192||(_&16785408)===16785408){_={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zt},op(t,r,_);var W=(r&62914560)===r?Vi-ut():(r&4194048)===r?fp-ut():0;if(W=_g(_,W),W!==null){ra=r,e.cancelPendingCommit=W(Sp.bind(null,e,t,r,a,l,i,c,p,x,M,_,null,A,C)),Ea(e,r,c,!E);return}}Sp(e,t,r,a,l,i,c,p,x)}function $h(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var i=a[l],r=i.getSnapshot;i=i.value;try{if(!ft(r(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ea(e,t,a,l){t&=~mc,t&=~el,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var i=t;0<i;){var r=31-pt(i),c=1<<r;l[r]=-1,i&=~c}a!==0&&Eo(e,a,t)}function Ki(){return(we&6)===0?(An(0),!1):!0}function vc(){if(pe!==null){if(Ne===0)var e=pe.return;else e=pe,Wt=Za=null,_s(e),Sl=null,un=0,e=pe;for(;e!==null;)Jd(e.alternate,e),e=e.return;pe=null}}function _l(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,xg(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ra=0,vc(),Te=e,pe=a=Xt(e.current,null),me=t,Ne=0,xt=null,wa=!1,Ol=Kl(e,t),fc=!1,Ml=bt=mc=el=Na=_e=0,ct=zn=null,hc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var i=31-pt(l),r=1<<i;t|=e[i],l&=~r}return ia=t,fi(),a}function bp(e,t){oe=null,R.H=bn,t===Nl||t===ji?(t=Du(),Ne=3):t===ws?(t=Du(),Ne=4):Ne=t===$s?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,xt=t,pe===null&&(_e=1,_i(e,Nt(t,e.current)))}function vp(){var e=ht.current;return e===null?!0:(me&4194048)===me?At===null:(me&62914560)===me||(me&536870912)!==0?e===At:!1}function yp(){var e=R.H;return R.H=bn,e===null?bn:e}function jp(){var e=R.A;return R.A=Wh,e}function Xi(){_e=4,wa||(me&4194048)!==me&&ht.current!==null||(Ol=!0),(Na&134217727)===0&&(el&134217727)===0||Te===null||Ea(Te,me,bt,!1)}function yc(e,t,a){var l=we;we|=2;var i=yp(),r=jp();(Te!==e||me!==t)&&(Zi=null,_l(e,t)),t=!1;var c=_e;e:do try{if(Ne!==0&&pe!==null){var p=pe,x=xt;switch(Ne){case 8:vc(),c=6;break e;case 3:case 2:case 9:case 6:ht.current===null&&(t=!0);var E=Ne;if(Ne=0,xt=null,Ul(e,p,x,E),a&&Ol){c=0;break e}break;default:E=Ne,Ne=0,xt=null,Ul(e,p,x,E)}}Ih(),c=_e;break}catch(M){bp(e,M)}while(!0);return t&&e.shellSuspendCounter++,Wt=Za=null,we=l,R.H=i,R.A=r,pe===null&&(Te=null,me=0,fi()),c}function Ih(){for(;pe!==null;)kp(pe)}function Ph(e,t){var a=we;we|=2;var l=yp(),i=jp();Te!==e||me!==t?(Zi=null,Qi=ut()+500,_l(e,t)):Ol=Kl(e,t);e:do try{if(Ne!==0&&pe!==null){t=pe;var r=xt;t:switch(Ne){case 1:Ne=0,xt=null,Ul(e,t,r,1);break;case 2:case 9:if(Ou(r)){Ne=0,xt=null,wp(t);break}t=function(){Ne!==2&&Ne!==9||Te!==e||(Ne=7),Lt(e)},r.then(t,t);break e;case 3:Ne=7;break e;case 4:Ne=5;break e;case 7:Ou(r)?(Ne=0,xt=null,wp(t)):(Ne=0,xt=null,Ul(e,t,r,7));break;case 5:var c=null;switch(pe.tag){case 26:c=pe.memoizedState;case 5:case 27:var p=pe;if(c?of(c):p.stateNode.complete){Ne=0,xt=null;var x=p.sibling;if(x!==null)pe=x;else{var E=p.return;E!==null?(pe=E,Ji(E)):pe=null}break t}}Ne=0,xt=null,Ul(e,t,r,5);break;case 6:Ne=0,xt=null,Ul(e,t,r,6);break;case 8:vc(),_e=6;break e;default:throw Error(u(462))}}eg();break}catch(M){bp(e,M)}while(!0);return Wt=Za=null,R.H=l,R.A=i,we=a,pe!==null?0:(Te=null,me=0,fi(),_e)}function eg(){for(;pe!==null&&!wm();)kp(pe)}function kp(e){var t=Kd(e.alternate,e,ia);e.memoizedProps=e.pendingProps,t===null?Ji(e):pe=t}function wp(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Ld(a,t,t.pendingProps,t.type,void 0,me);break;case 11:t=Ld(a,t,t.pendingProps,t.type.render,t.ref,me);break;case 5:_s(t);default:Jd(a,t),t=pe=ju(t,ia),t=Kd(a,t,ia)}e.memoizedProps=e.pendingProps,t===null?Ji(e):pe=t}function Ul(e,t,a,l){Wt=Za=null,_s(t),Sl=null,un=0;var i=t.return;try{if(Gh(e,i,t,a,me)){_e=1,_i(e,Nt(a,e.current)),pe=null;return}}catch(r){if(i!==null)throw pe=i,r;_e=1,_i(e,Nt(a,e.current)),pe=null;return}t.flags&32768?(ge||l===1?e=!0:Ol||(me&536870912)!==0?e=!1:(wa=e=!0,(l===2||l===9||l===3||l===6)&&(l=ht.current,l!==null&&l.tag===13&&(l.flags|=16384))),Np(t,e)):Ji(t)}function Ji(e){var t=e;do{if((t.flags&32768)!==0){Np(t,wa);return}e=t.return;var a=Zh(t.alternate,t,ia);if(a!==null){pe=a;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);_e===0&&(_e=5)}function Np(e,t){do{var a=Kh(e.alternate,e);if(a!==null){a.flags&=32767,pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){pe=e;return}pe=e=a}while(e!==null);_e=6,pe=null}function Sp(e,t,a,l,i,r,c,p,x){e.cancelPendingCommit=null;do Wi();while(Qe!==0);if((we&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(r=t.lanes|t.childLanes,r|=cs,Mm(e,a,r,c,p,x),e===Te&&(pe=Te=null,me=0),Dl=t,za=e,ra=a,gc=r,xc=i,mp=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ng($n,function(){return Rp(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=R.T,R.T=null,i=G.p,G.p=2,c=we,we|=4;try{Xh(e,t,a)}finally{we=c,G.p=i,R.T=l}}Qe=1,zp(),Ep(),Ap()}}function zp(){if(Qe===1){Qe=0;var e=za,t=Dl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=R.T,R.T=null;var l=G.p;G.p=2;var i=we;we|=4;try{rp(t,e);var r=Oc,c=pu(e.containerInfo),p=r.focusedElem,x=r.selectionRange;if(c!==p&&p&&p.ownerDocument&&du(p.ownerDocument.documentElement,p)){if(x!==null&&ls(p)){var E=x.start,M=x.end;if(M===void 0&&(M=E),"selectionStart"in p)p.selectionStart=E,p.selectionEnd=Math.min(M,p.value.length);else{var _=p.ownerDocument||document,A=_&&_.defaultView||window;if(A.getSelection){var C=A.getSelection(),W=p.textContent.length,ae=Math.min(x.start,W),Ae=x.end===void 0?ae:Math.min(x.end,W);!C.extend&&ae>Ae&&(c=Ae,Ae=ae,ae=c);var N=uu(p,ae),j=uu(p,Ae);if(N&&j&&(C.rangeCount!==1||C.anchorNode!==N.node||C.anchorOffset!==N.offset||C.focusNode!==j.node||C.focusOffset!==j.offset)){var z=_.createRange();z.setStart(N.node,N.offset),C.removeAllRanges(),ae>Ae?(C.addRange(z),C.extend(j.node,j.offset)):(z.setEnd(j.node,j.offset),C.addRange(z))}}}}for(_=[],C=p;C=C.parentNode;)C.nodeType===1&&_.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<_.length;p++){var D=_[p];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}sr=!!Cc,Oc=Cc=null}finally{we=i,G.p=l,R.T=a}}e.current=t,Qe=2}}function Ep(){if(Qe===2){Qe=0;var e=za,t=Dl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=R.T,R.T=null;var l=G.p;G.p=2;var i=we;we|=4;try{tp(e,t.alternate,t)}finally{we=i,G.p=l,R.T=a}}Qe=3}}function Ap(){if(Qe===4||Qe===3){Qe=0,Nm();var e=za,t=Dl,a=ra,l=mp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Qe=5:(Qe=0,Dl=za=null,Tp(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Sa=null),Hr(a),t=t.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Zl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=R.T,i=G.p,G.p=2,R.T=null;try{for(var r=e.onRecoverableError,c=0;c<l.length;c++){var p=l[c];r(p.value,{componentStack:p.stack})}}finally{R.T=t,G.p=i}}(ra&3)!==0&&Wi(),Lt(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===bc?En++:(En=0,bc=e):En=0,An(0)}}function Tp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,cn(t)))}function Wi(){return zp(),Ep(),Ap(),Rp()}function Rp(){if(Qe!==5)return!1;var e=za,t=gc;gc=0;var a=Hr(ra),l=R.T,i=G.p;try{G.p=32>a?32:a,R.T=null,a=xc,xc=null;var r=za,c=ra;if(Qe=0,Dl=za=null,ra=0,(we&6)!==0)throw Error(u(331));var p=we;if(we|=4,dp(r.current),cp(r,r.current,c,a),we=p,An(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Zl,r)}catch{}return!0}finally{G.p=i,R.T=l,Tp(e,t)}}function Cp(e,t,a){t=Nt(a,t),t=Fs(e.stateNode,t,2),e=va(e,t,2),e!==null&&(Xl(e,2),Lt(e))}function Se(e,t,a){if(e.tag===3)Cp(e,e,a);else for(;t!==null;){if(t.tag===3){Cp(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Sa===null||!Sa.has(l))){e=Nt(a,e),a=Od(2),l=va(t,a,2),l!==null&&(Md(a,l,t,e),Xl(l,2),Lt(l));break}}t=t.return}}function jc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Fh;var i=new Set;l.set(t,i)}else i=l.get(t),i===void 0&&(i=new Set,l.set(t,i));i.has(a)||(fc=!0,i.add(a),e=tg.bind(null,e,t,a),t.then(e,e))}function tg(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Te===e&&(me&a)===a&&(_e===4||_e===3&&(me&62914560)===me&&300>ut()-Vi?(we&2)===0&&_l(e,0):mc|=a,Ml===me&&(Ml=0)),Lt(e)}function Op(e,t){t===0&&(t=zo()),e=Ga(e,t),e!==null&&(Xl(e,t),Lt(e))}function ag(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Op(e,a)}function lg(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(t),Op(e,a)}function ng(e,t){return Dr(e,t)}var Fi=null,Bl=null,kc=!1,$i=!1,wc=!1,Aa=0;function Lt(e){e!==Bl&&e.next===null&&(Bl===null?Fi=Bl=e:Bl=Bl.next=e),$i=!0,kc||(kc=!0,rg())}function An(e,t){if(!wc&&$i){wc=!0;do for(var a=!1,l=Fi;l!==null;){if(e!==0){var i=l.pendingLanes;if(i===0)var r=0;else{var c=l.suspendedLanes,p=l.pingedLanes;r=(1<<31-pt(42|e)+1)-1,r&=i&~(c&~p),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,Up(l,r))}else r=me,r=ti(l,l===Te?r:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(r&3)===0||Kl(l,r)||(a=!0,Up(l,r));l=l.next}while(a);wc=!1}}function ig(){Mp()}function Mp(){$i=kc=!1;var e=0;Aa!==0&&gg()&&(e=Aa);for(var t=ut(),a=null,l=Fi;l!==null;){var i=l.next,r=Dp(l,t);r===0?(l.next=null,a===null?Fi=i:a.next=i,i===null&&(Bl=a)):(a=l,(e!==0||(r&3)!==0)&&($i=!0)),l=i}Qe!==0&&Qe!==5||An(e),Aa!==0&&(Aa=0)}function Dp(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var c=31-pt(r),p=1<<c,x=i[c];x===-1?((p&a)===0||(p&l)!==0)&&(i[c]=Om(p,t)):x<=t&&(e.expiredLanes|=p),r&=~p}if(t=Te,a=me,a=ti(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&_r(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Kl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&_r(l),Hr(a)){case 2:case 8:a=No;break;case 32:a=$n;break;case 268435456:a=So;break;default:a=$n}return l=_p.bind(null,e),a=Dr(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&_r(l),e.callbackPriority=2,e.callbackNode=null,2}function _p(e,t){if(Qe!==0&&Qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Wi()&&e.callbackNode!==a)return null;var l=me;return l=ti(e,e===Te?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(gp(e,l,t),Dp(e,ut()),e.callbackNode!=null&&e.callbackNode===a?_p.bind(null,e):null)}function Up(e,t){if(Wi())return null;gp(e,t,!0)}function rg(){bg(function(){(we&6)!==0?Dr(wo,ig):Mp()})}function Nc(){if(Aa===0){var e=kl;e===0&&(e=In,In<<=1,(In&261888)===0&&(In=256)),Aa=e}return Aa}function Bp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ii(""+e)}function Hp(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function sg(e,t,a,l,i){if(t==="submit"&&a&&a.stateNode===i){var r=Bp((i[lt]||null).action),c=l.submitter;c&&(t=(t=c[lt]||null)?Bp(t.formAction):c.getAttribute("formAction"),t!==null&&(r=t,c=null));var p=new oi("action","action",null,l,i);e.push({event:p,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Aa!==0){var x=c?Hp(i,c):new FormData(i);Qs(a,{pending:!0,data:x,method:i.method,action:r},null,x)}}else typeof r=="function"&&(p.preventDefault(),x=c?Hp(i,c):new FormData(i),Qs(a,{pending:!0,data:x,method:i.method,action:r},r,x))},currentTarget:i}]})}}for(var Sc=0;Sc<ss.length;Sc++){var zc=ss[Sc],cg=zc.toLowerCase(),og=zc[0].toUpperCase()+zc.slice(1);Ot(cg,"on"+og)}Ot(hu,"onAnimationEnd"),Ot(gu,"onAnimationIteration"),Ot(xu,"onAnimationStart"),Ot("dblclick","onDoubleClick"),Ot("focusin","onFocus"),Ot("focusout","onBlur"),Ot(Sh,"onTransitionRun"),Ot(zh,"onTransitionStart"),Ot(Eh,"onTransitionCancel"),Ot(bu,"onTransitionEnd"),cl("onMouseEnter",["mouseout","mouseover"]),cl("onMouseLeave",["mouseout","mouseover"]),cl("onPointerEnter",["pointerout","pointerover"]),cl("onPointerLeave",["pointerout","pointerover"]),Ha("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ha("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ha("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ha("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ha("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ha("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ug=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tn));function Yp(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],i=l.event;l=l.listeners;e:{var r=void 0;if(t)for(var c=l.length-1;0<=c;c--){var p=l[c],x=p.instance,E=p.currentTarget;if(p=p.listener,x!==r&&i.isPropagationStopped())break e;r=p,i.currentTarget=E;try{r(i)}catch(M){pi(M)}i.currentTarget=null,r=x}else for(c=0;c<l.length;c++){if(p=l[c],x=p.instance,E=p.currentTarget,p=p.listener,x!==r&&i.isPropagationStopped())break e;r=p,i.currentTarget=E;try{r(i)}catch(M){pi(M)}i.currentTarget=null,r=x}}}}function fe(e,t){var a=t[Yr];a===void 0&&(a=t[Yr]=new Set);var l=e+"__bubble";a.has(l)||(Lp(t,e,2,!1),a.add(l))}function Ec(e,t,a){var l=0;t&&(l|=4),Lp(a,e,l,t)}var Ii="_reactListening"+Math.random().toString(36).slice(2);function Ac(e){if(!e[Ii]){e[Ii]=!0,Mo.forEach(function(a){a!=="selectionchange"&&(ug.has(a)||Ec(a,!1,e),Ec(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ii]||(t[Ii]=!0,Ec("selectionchange",!1,t))}}function Lp(e,t,a,l){switch(gf(t)){case 2:var i=Hg;break;case 8:i=Yg;break;default:i=Vc}a=i.bind(null,t,a,e),i=void 0,!Jr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),l?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function Tc(e,t,a,l,i){var r=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var p=l.stateNode.containerInfo;if(p===i)break;if(c===4)for(c=l.return;c!==null;){var x=c.tag;if((x===3||x===4)&&c.stateNode.containerInfo===i)return;c=c.return}for(;p!==null;){if(c=il(p),c===null)return;if(x=c.tag,x===5||x===6||x===26||x===27){l=r=c;continue e}p=p.parentNode}}l=l.return}Zo(function(){var E=r,M=Kr(a),_=[];e:{var A=vu.get(e);if(A!==void 0){var C=oi,W=e;switch(e){case"keypress":if(si(a)===0)break e;case"keydown":case"keyup":C=lh;break;case"focusin":W="focus",C=Ir;break;case"focusout":W="blur",C=Ir;break;case"beforeblur":case"afterblur":C=Ir;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Jo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=Zm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=rh;break;case hu:case gu:case xu:C=Jm;break;case bu:C=ch;break;case"scroll":case"scrollend":C=Vm;break;case"wheel":C=uh;break;case"copy":case"cut":case"paste":C=Fm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Fo;break;case"toggle":case"beforetoggle":C=ph}var ae=(t&4)!==0,Ae=!ae&&(e==="scroll"||e==="scrollend"),N=ae?A!==null?A+"Capture":null:A;ae=[];for(var j=E,z;j!==null;){var D=j;if(z=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||z===null||N===null||(D=Fl(j,N),D!=null&&ae.push(Rn(j,D,z))),Ae)break;j=j.return}0<ae.length&&(A=new C(A,W,null,a,M),_.push({event:A,listeners:ae}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",A&&a!==Zr&&(W=a.relatedTarget||a.fromElement)&&(il(W)||W[nl]))break e;if((C||A)&&(A=M.window===M?M:(A=M.ownerDocument)?A.defaultView||A.parentWindow:window,C?(W=a.relatedTarget||a.toElement,C=E,W=W?il(W):null,W!==null&&(Ae=m(W),ae=W.tag,W!==Ae||ae!==5&&ae!==27&&ae!==6)&&(W=null)):(C=null,W=E),C!==W)){if(ae=Jo,D="onMouseLeave",N="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(ae=Fo,D="onPointerLeave",N="onPointerEnter",j="pointer"),Ae=C==null?A:Wl(C),z=W==null?A:Wl(W),A=new ae(D,j+"leave",C,a,M),A.target=Ae,A.relatedTarget=z,D=null,il(M)===E&&(ae=new ae(N,j+"enter",W,a,M),ae.target=z,ae.relatedTarget=Ae,D=ae),Ae=D,C&&W)t:{for(ae=dg,N=C,j=W,z=0,D=N;D;D=ae(D))z++;D=0;for(var te=j;te;te=ae(te))D++;for(;0<z-D;)N=ae(N),z--;for(;0<D-z;)j=ae(j),D--;for(;z--;){if(N===j||j!==null&&N===j.alternate){ae=N;break t}N=ae(N),j=ae(j)}ae=null}else ae=null;C!==null&&qp(_,A,C,ae,!1),W!==null&&Ae!==null&&qp(_,Ae,W,ae,!0)}}e:{if(A=E?Wl(E):window,C=A.nodeName&&A.nodeName.toLowerCase(),C==="select"||C==="input"&&A.type==="file")var ve=nu;else if(au(A))if(iu)ve=kh;else{ve=yh;var I=vh}else C=A.nodeName,!C||C.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?E&&Qr(E.elementType)&&(ve=nu):ve=jh;if(ve&&(ve=ve(e,E))){lu(_,ve,a,M);break e}I&&I(e,A,E),e==="focusout"&&E&&A.type==="number"&&E.memoizedProps.value!=null&&Vr(A,"number",A.value)}switch(I=E?Wl(E):window,e){case"focusin":(au(I)||I.contentEditable==="true")&&(ml=I,ns=E,nn=null);break;case"focusout":nn=ns=ml=null;break;case"mousedown":is=!0;break;case"contextmenu":case"mouseup":case"dragend":is=!1,fu(_,a,M);break;case"selectionchange":if(Nh)break;case"keydown":case"keyup":fu(_,a,M)}var ue;if(es)e:{switch(e){case"compositionstart":var he="onCompositionStart";break e;case"compositionend":he="onCompositionEnd";break e;case"compositionupdate":he="onCompositionUpdate";break e}he=void 0}else fl?eu(e,a)&&(he="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(he="onCompositionStart");he&&($o&&a.locale!=="ko"&&(fl||he!=="onCompositionStart"?he==="onCompositionEnd"&&fl&&(ue=Ko()):(pa=M,Wr="value"in pa?pa.value:pa.textContent,fl=!0)),I=Pi(E,he),0<I.length&&(he=new Wo(he,e,null,a,M),_.push({event:he,listeners:I}),ue?he.data=ue:(ue=tu(a),ue!==null&&(he.data=ue)))),(ue=mh?hh(e,a):gh(e,a))&&(he=Pi(E,"onBeforeInput"),0<he.length&&(I=new Wo("onBeforeInput","beforeinput",null,a,M),_.push({event:I,listeners:he}),I.data=ue)),sg(_,e,E,a,M)}Yp(_,t)})}function Rn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Pi(e,t){for(var a=t+"Capture",l=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=Fl(e,a),i!=null&&l.unshift(Rn(e,i,r)),i=Fl(e,t),i!=null&&l.push(Rn(e,i,r))),e.tag===3)return l;e=e.return}return[]}function dg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function qp(e,t,a,l,i){for(var r=t._reactName,c=[];a!==null&&a!==l;){var p=a,x=p.alternate,E=p.stateNode;if(p=p.tag,x!==null&&x===l)break;p!==5&&p!==26&&p!==27||E===null||(x=E,i?(E=Fl(a,r),E!=null&&c.unshift(Rn(a,E,x))):i||(E=Fl(a,r),E!=null&&c.push(Rn(a,E,x)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var pg=/\r\n?/g,fg=/\u0000|\uFFFD/g;function Gp(e){return(typeof e=="string"?e:""+e).replace(pg,`
`).replace(fg,"")}function Vp(e,t){return t=Gp(t),Gp(e)===t}function Ee(e,t,a,l,i,r){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||ul(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&ul(e,""+l);break;case"className":li(e,"class",l);break;case"tabIndex":li(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":li(e,a,l);break;case"style":Vo(e,l,r);break;case"data":if(t!=="object"){li(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ii(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&Ee(e,t,"name",i.name,i,null),Ee(e,t,"formEncType",i.formEncType,i,null),Ee(e,t,"formMethod",i.formMethod,i,null),Ee(e,t,"formTarget",i.formTarget,i,null)):(Ee(e,t,"encType",i.encType,i,null),Ee(e,t,"method",i.method,i,null),Ee(e,t,"target",i.target,i,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ii(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Zt);break;case"onScroll":l!=null&&fe("scroll",e);break;case"onScrollEnd":l!=null&&fe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=ii(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":fe("beforetoggle",e),fe("toggle",e),ai(e,"popover",l);break;case"xlinkActuate":Qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Qt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Qt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Qt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Qt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ai(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=qm.get(a)||a,ai(e,a,l))}}function Rc(e,t,a,l,i,r){switch(a){case"style":Vo(e,l,r);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof l=="string"?ul(e,l):(typeof l=="number"||typeof l=="bigint")&&ul(e,""+l);break;case"onScroll":l!=null&&fe("scroll",e);break;case"onScrollEnd":l!=null&&fe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Zt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Do.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),r=e[lt]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof l=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,i);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):ai(e,a,l)}}}function Ie(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":fe("error",e),fe("load",e);var l=!1,i=!1,r;for(r in a)if(a.hasOwnProperty(r)){var c=a[r];if(c!=null)switch(r){case"src":l=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ee(e,t,r,c,a,null)}}i&&Ee(e,t,"srcSet",a.srcSet,a,null),l&&Ee(e,t,"src",a.src,a,null);return;case"input":fe("invalid",e);var p=r=c=i=null,x=null,E=null;for(l in a)if(a.hasOwnProperty(l)){var M=a[l];if(M!=null)switch(l){case"name":i=M;break;case"type":c=M;break;case"checked":x=M;break;case"defaultChecked":E=M;break;case"value":r=M;break;case"defaultValue":p=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(u(137,t));break;default:Ee(e,t,l,M,a,null)}}Yo(e,r,p,x,E,c,i,!1);return;case"select":fe("invalid",e),l=c=r=null;for(i in a)if(a.hasOwnProperty(i)&&(p=a[i],p!=null))switch(i){case"value":r=p;break;case"defaultValue":c=p;break;case"multiple":l=p;default:Ee(e,t,i,p,a,null)}t=r,a=c,e.multiple=!!l,t!=null?ol(e,!!l,t,!1):a!=null&&ol(e,!!l,a,!0);return;case"textarea":fe("invalid",e),r=i=l=null;for(c in a)if(a.hasOwnProperty(c)&&(p=a[c],p!=null))switch(c){case"value":l=p;break;case"defaultValue":i=p;break;case"children":r=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(u(91));break;default:Ee(e,t,c,p,a,null)}qo(e,l,i,r);return;case"option":for(x in a)a.hasOwnProperty(x)&&(l=a[x],l!=null)&&(x==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Ee(e,t,x,l,a,null));return;case"dialog":fe("beforetoggle",e),fe("toggle",e),fe("cancel",e),fe("close",e);break;case"iframe":case"object":fe("load",e);break;case"video":case"audio":for(l=0;l<Tn.length;l++)fe(Tn[l],e);break;case"image":fe("error",e),fe("load",e);break;case"details":fe("toggle",e);break;case"embed":case"source":case"link":fe("error",e),fe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in a)if(a.hasOwnProperty(E)&&(l=a[E],l!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ee(e,t,E,l,a,null)}return;default:if(Qr(t)){for(M in a)a.hasOwnProperty(M)&&(l=a[M],l!==void 0&&Rc(e,t,M,l,a,void 0));return}}for(p in a)a.hasOwnProperty(p)&&(l=a[p],l!=null&&Ee(e,t,p,l,a,null))}function mg(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,c=null,p=null,x=null,E=null,M=null;for(C in a){var _=a[C];if(a.hasOwnProperty(C)&&_!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":x=_;default:l.hasOwnProperty(C)||Ee(e,t,C,null,l,_)}}for(var A in l){var C=l[A];if(_=a[A],l.hasOwnProperty(A)&&(C!=null||_!=null))switch(A){case"type":r=C;break;case"name":i=C;break;case"checked":E=C;break;case"defaultChecked":M=C;break;case"value":c=C;break;case"defaultValue":p=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(u(137,t));break;default:C!==_&&Ee(e,t,A,C,l,_)}}Gr(e,c,p,x,E,M,r,i);return;case"select":C=c=p=A=null;for(r in a)if(x=a[r],a.hasOwnProperty(r)&&x!=null)switch(r){case"value":break;case"multiple":C=x;default:l.hasOwnProperty(r)||Ee(e,t,r,null,l,x)}for(i in l)if(r=l[i],x=a[i],l.hasOwnProperty(i)&&(r!=null||x!=null))switch(i){case"value":A=r;break;case"defaultValue":p=r;break;case"multiple":c=r;default:r!==x&&Ee(e,t,i,r,l,x)}t=p,a=c,l=C,A!=null?ol(e,!!a,A,!1):!!l!=!!a&&(t!=null?ol(e,!!a,t,!0):ol(e,!!a,a?[]:"",!1));return;case"textarea":C=A=null;for(p in a)if(i=a[p],a.hasOwnProperty(p)&&i!=null&&!l.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:Ee(e,t,p,null,l,i)}for(c in l)if(i=l[c],r=a[c],l.hasOwnProperty(c)&&(i!=null||r!=null))switch(c){case"value":A=i;break;case"defaultValue":C=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(u(91));break;default:i!==r&&Ee(e,t,c,i,l,r)}Lo(e,A,C);return;case"option":for(var W in a)A=a[W],a.hasOwnProperty(W)&&A!=null&&!l.hasOwnProperty(W)&&(W==="selected"?e.selected=!1:Ee(e,t,W,null,l,A));for(x in l)A=l[x],C=a[x],l.hasOwnProperty(x)&&A!==C&&(A!=null||C!=null)&&(x==="selected"?e.selected=A&&typeof A!="function"&&typeof A!="symbol":Ee(e,t,x,A,l,C));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)A=a[ae],a.hasOwnProperty(ae)&&A!=null&&!l.hasOwnProperty(ae)&&Ee(e,t,ae,null,l,A);for(E in l)if(A=l[E],C=a[E],l.hasOwnProperty(E)&&A!==C&&(A!=null||C!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(u(137,t));break;default:Ee(e,t,E,A,l,C)}return;default:if(Qr(t)){for(var Ae in a)A=a[Ae],a.hasOwnProperty(Ae)&&A!==void 0&&!l.hasOwnProperty(Ae)&&Rc(e,t,Ae,void 0,l,A);for(M in l)A=l[M],C=a[M],!l.hasOwnProperty(M)||A===C||A===void 0&&C===void 0||Rc(e,t,M,A,l,C);return}}for(var N in a)A=a[N],a.hasOwnProperty(N)&&A!=null&&!l.hasOwnProperty(N)&&Ee(e,t,N,null,l,A);for(_ in l)A=l[_],C=a[_],!l.hasOwnProperty(_)||A===C||A==null&&C==null||Ee(e,t,_,A,l,C)}function Qp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function hg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var i=a[l],r=i.transferSize,c=i.initiatorType,p=i.duration;if(r&&p&&Qp(c)){for(c=0,p=i.responseEnd,l+=1;l<a.length;l++){var x=a[l],E=x.startTime;if(E>p)break;var M=x.transferSize,_=x.initiatorType;M&&Qp(_)&&(x=x.responseEnd,c+=M*(x<p?1:(p-E)/(x-E)))}if(--l,t+=8*(r+c)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Cc=null,Oc=null;function er(e){return e.nodeType===9?e:e.ownerDocument}function Zp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Kp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Mc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Dc=null;function gg(){var e=window.event;return e&&e.type==="popstate"?e===Dc?!1:(Dc=e,!0):(Dc=null,!1)}var Xp=typeof setTimeout=="function"?setTimeout:void 0,xg=typeof clearTimeout=="function"?clearTimeout:void 0,Jp=typeof Promise=="function"?Promise:void 0,bg=typeof queueMicrotask=="function"?queueMicrotask:typeof Jp<"u"?function(e){return Jp.resolve(null).then(e).catch(vg)}:Xp;function vg(e){setTimeout(function(){throw e})}function Ta(e){return e==="head"}function Wp(e,t){var a=t,l=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(i),ql(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Cn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Cn(a);for(var r=a.firstChild;r;){var c=r.nextSibling,p=r.nodeName;r[Jl]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=c}}else a==="body"&&Cn(e.ownerDocument.body);a=i}while(a);ql(t)}function Fp(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function _c(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":_c(a),Lr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function yg(e,t,a,l){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Jl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Tt(e.nextSibling),e===null)break}return null}function jg(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Tt(e.nextSibling),e===null))return null;return e}function $p(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Tt(e.nextSibling),e===null))return null;return e}function Uc(e){return e.data==="$?"||e.data==="$~"}function Bc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function kg(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Tt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Hc=null;function Ip(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Tt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Pp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function ef(e,t,a){switch(t=er(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Cn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Lr(e)}var Rt=new Map,tf=new Set;function tr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var sa=G.d;G.d={f:wg,r:Ng,D:Sg,C:zg,L:Eg,m:Ag,X:Rg,S:Tg,M:Cg};function wg(){var e=sa.f(),t=Ki();return e||t}function Ng(e){var t=rl(e);t!==null&&t.tag===5&&t.type==="form"?bd(t):sa.r(e)}var Hl=typeof document>"u"?null:document;function af(e,t,a){var l=Hl;if(l&&typeof t=="string"&&t){var i=kt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),tf.has(i)||(tf.add(i),e={rel:e,crossOrigin:a,href:t},l.querySelector(i)===null&&(t=l.createElement("link"),Ie(t,"link",e),Ke(t),l.head.appendChild(t)))}}function Sg(e){sa.D(e),af("dns-prefetch",e,null)}function zg(e,t){sa.C(e,t),af("preconnect",e,t)}function Eg(e,t,a){sa.L(e,t,a);var l=Hl;if(l&&e&&t){var i='link[rel="preload"][as="'+kt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+kt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+kt(a.imageSizes)+'"]')):i+='[href="'+kt(e)+'"]';var r=i;switch(t){case"style":r=Yl(e);break;case"script":r=Ll(e)}Rt.has(r)||(e=w({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Rt.set(r,e),l.querySelector(i)!==null||t==="style"&&l.querySelector(On(r))||t==="script"&&l.querySelector(Mn(r))||(t=l.createElement("link"),Ie(t,"link",e),Ke(t),l.head.appendChild(t)))}}function Ag(e,t){sa.m(e,t);var a=Hl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+kt(l)+'"][href="'+kt(e)+'"]',r=i;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Ll(e)}if(!Rt.has(r)&&(e=w({rel:"modulepreload",href:e},t),Rt.set(r,e),a.querySelector(i)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Mn(r)))return}l=a.createElement("link"),Ie(l,"link",e),Ke(l),a.head.appendChild(l)}}}function Tg(e,t,a){sa.S(e,t,a);var l=Hl;if(l&&e){var i=sl(l).hoistableStyles,r=Yl(e);t=t||"default";var c=i.get(r);if(!c){var p={loading:0,preload:null};if(c=l.querySelector(On(r)))p.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Rt.get(r))&&Yc(e,a);var x=c=l.createElement("link");Ke(x),Ie(x,"link",e),x._p=new Promise(function(E,M){x.onload=E,x.onerror=M}),x.addEventListener("load",function(){p.loading|=1}),x.addEventListener("error",function(){p.loading|=2}),p.loading|=4,ar(c,t,l)}c={type:"stylesheet",instance:c,count:1,state:p},i.set(r,c)}}}function Rg(e,t){sa.X(e,t);var a=Hl;if(a&&e){var l=sl(a).hoistableScripts,i=Ll(e),r=l.get(i);r||(r=a.querySelector(Mn(i)),r||(e=w({src:e,async:!0},t),(t=Rt.get(i))&&Lc(e,t),r=a.createElement("script"),Ke(r),Ie(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(i,r))}}function Cg(e,t){sa.M(e,t);var a=Hl;if(a&&e){var l=sl(a).hoistableScripts,i=Ll(e),r=l.get(i);r||(r=a.querySelector(Mn(i)),r||(e=w({src:e,async:!0,type:"module"},t),(t=Rt.get(i))&&Lc(e,t),r=a.createElement("script"),Ke(r),Ie(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(i,r))}}function lf(e,t,a,l){var i=(i=de.current)?tr(i):null;if(!i)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Yl(a.href),a=sl(i).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Yl(a.href);var r=sl(i).hoistableStyles,c=r.get(e);if(c||(i=i.ownerDocument||i,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,c),(r=i.querySelector(On(e)))&&!r._p&&(c.instance=r,c.state.loading=5),Rt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Rt.set(e,a),r||Og(i,e,a,c.state))),t&&l===null)throw Error(u(528,""));return c}if(t&&l!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ll(a),a=sl(i).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Yl(e){return'href="'+kt(e)+'"'}function On(e){return'link[rel="stylesheet"]['+e+"]"}function nf(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function Og(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Ie(t,"link",a),Ke(t),e.head.appendChild(t))}function Ll(e){return'[src="'+kt(e)+'"]'}function Mn(e){return"script[async]"+e}function rf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+kt(a.href)+'"]');if(l)return t.instance=l,Ke(l),l;var i=w({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ke(l),Ie(l,"style",i),ar(l,a.precedence,e),t.instance=l;case"stylesheet":i=Yl(a.href);var r=e.querySelector(On(i));if(r)return t.state.loading|=4,t.instance=r,Ke(r),r;l=nf(a),(i=Rt.get(i))&&Yc(l,i),r=(e.ownerDocument||e).createElement("link"),Ke(r);var c=r;return c._p=new Promise(function(p,x){c.onload=p,c.onerror=x}),Ie(r,"link",l),t.state.loading|=4,ar(r,a.precedence,e),t.instance=r;case"script":return r=Ll(a.src),(i=e.querySelector(Mn(r)))?(t.instance=i,Ke(i),i):(l=a,(i=Rt.get(r))&&(l=w({},a),Lc(l,i)),e=e.ownerDocument||e,i=e.createElement("script"),Ke(i),Ie(i,"link",l),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,ar(l,a.precedence,e));return t.instance}function ar(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=l.length?l[l.length-1]:null,r=i,c=0;c<l.length;c++){var p=l[c];if(p.dataset.precedence===t)r=p;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Yc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Lc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var lr=null;function sf(e,t,a){if(lr===null){var l=new Map,i=lr=new Map;i.set(a,l)}else i=lr,l=i.get(a),l||(l=new Map,i.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var r=a[i];if(!(r[Jl]||r[Je]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var c=r.getAttribute(t)||"";c=e+c;var p=l.get(c);p?p.push(r):l.set(c,[r])}}return l}function cf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Mg(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function of(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Dg(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=Yl(l.href),r=t.querySelector(On(i));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=nr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,Ke(r);return}r=t.ownerDocument||t,l=nf(l),(i=Rt.get(i))&&Yc(l,i),r=r.createElement("link"),Ke(r);var c=r;c._p=new Promise(function(p,x){c.onload=p,c.onerror=x}),Ie(r,"link",l),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=nr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var qc=0;function _g(e,t){return e.stylesheets&&e.count===0&&rr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&rr(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&qc===0&&(qc=62500*hg());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&rr(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>qc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(i)}}:null}function nr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)rr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ir=null;function rr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ir=new Map,t.forEach(Ug,e),ir=null,nr.call(e))}function Ug(e,t){if(!(t.state.loading&4)){var a=ir.get(e);if(a)var l=a.get(null);else{a=new Map,ir.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var c=i[r];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),l=c)}l&&a.set(null,l)}i=t.instance,c=i.getAttribute("data-precedence"),r=a.get(c)||l,r===l&&a.set(null,i),a.set(c,i),this.count++,l=nr.bind(this),i.addEventListener("load",l),i.addEventListener("error",l),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Dn={$$typeof:L,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function Bg(e,t,a,l,i,r,c,p,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ur(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ur(0),this.hiddenUpdates=Ur(null),this.identifierPrefix=l,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function uf(e,t,a,l,i,r,c,p,x,E,M,_){return e=new Bg(e,t,a,c,x,E,M,_,p),t=1,r===!0&&(t|=24),r=mt(3,null,null,t),e.current=r,r.stateNode=e,t=ys(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:l,isDehydrated:a,cache:t},Ns(r),e}function df(e){return e?(e=xl,e):xl}function pf(e,t,a,l,i,r){i=df(i),l.context===null?l.context=i:l.pendingContext=i,l=ba(t),l.payload={element:a},r=r===void 0?null:r,r!==null&&(l.callback=r),a=va(e,l,t),a!==null&&(ot(a,e,t),pn(a,e,t))}function ff(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Gc(e,t){ff(e,t),(e=e.alternate)&&ff(e,t)}function mf(e){if(e.tag===13||e.tag===31){var t=Ga(e,67108864);t!==null&&ot(t,e,67108864),Gc(e,67108864)}}function hf(e){if(e.tag===13||e.tag===31){var t=vt();t=Br(t);var a=Ga(e,t);a!==null&&ot(a,e,t),Gc(e,t)}}var sr=!0;function Hg(e,t,a,l){var i=R.T;R.T=null;var r=G.p;try{G.p=2,Vc(e,t,a,l)}finally{G.p=r,R.T=i}}function Yg(e,t,a,l){var i=R.T;R.T=null;var r=G.p;try{G.p=8,Vc(e,t,a,l)}finally{G.p=r,R.T=i}}function Vc(e,t,a,l){if(sr){var i=Qc(l);if(i===null)Tc(e,t,l,cr,a),xf(e,l);else if(qg(i,e,t,a,l))l.stopPropagation();else if(xf(e,l),t&4&&-1<Lg.indexOf(e)){for(;i!==null;){var r=rl(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var c=Ba(r.pendingLanes);if(c!==0){var p=r;for(p.pendingLanes|=2,p.entangledLanes|=2;c;){var x=1<<31-pt(c);p.entanglements[1]|=x,c&=~x}Lt(r),(we&6)===0&&(Qi=ut()+500,An(0))}}break;case 31:case 13:p=Ga(r,2),p!==null&&ot(p,r,2),Ki(),Gc(r,2)}if(r=Qc(l),r===null&&Tc(e,t,l,cr,a),r===i)break;i=r}i!==null&&l.stopPropagation()}else Tc(e,t,l,null,a)}}function Qc(e){return e=Kr(e),Zc(e)}var cr=null;function Zc(e){if(cr=null,e=il(e),e!==null){var t=m(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=v(t),e!==null)return e;e=null}else if(a===31){if(e=y(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return cr=e,null}function gf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Sm()){case wo:return 2;case No:return 8;case $n:case zm:return 32;case So:return 268435456;default:return 32}default:return 32}}var Kc=!1,Ra=null,Ca=null,Oa=null,_n=new Map,Un=new Map,Ma=[],Lg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xf(e,t){switch(e){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":Ca=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":_n.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Un.delete(t.pointerId)}}function Bn(e,t,a,l,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:r,targetContainers:[i]},t!==null&&(t=rl(t),t!==null&&mf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function qg(e,t,a,l,i){switch(t){case"focusin":return Ra=Bn(Ra,e,t,a,l,i),!0;case"dragenter":return Ca=Bn(Ca,e,t,a,l,i),!0;case"mouseover":return Oa=Bn(Oa,e,t,a,l,i),!0;case"pointerover":var r=i.pointerId;return _n.set(r,Bn(_n.get(r)||null,e,t,a,l,i)),!0;case"gotpointercapture":return r=i.pointerId,Un.set(r,Bn(Un.get(r)||null,e,t,a,l,i)),!0}return!1}function bf(e){var t=il(e.target);if(t!==null){var a=m(t);if(a!==null){if(t=a.tag,t===13){if(t=v(a),t!==null){e.blockedOn=t,Co(e.priority,function(){hf(a)});return}}else if(t===31){if(t=y(a),t!==null){e.blockedOn=t,Co(e.priority,function(){hf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function or(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Qc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Zr=l,a.target.dispatchEvent(l),Zr=null}else return t=rl(a),t!==null&&mf(t),e.blockedOn=a,!1;t.shift()}return!0}function vf(e,t,a){or(e)&&a.delete(t)}function Gg(){Kc=!1,Ra!==null&&or(Ra)&&(Ra=null),Ca!==null&&or(Ca)&&(Ca=null),Oa!==null&&or(Oa)&&(Oa=null),_n.forEach(vf),Un.forEach(vf)}function ur(e,t){e.blockedOn===t&&(e.blockedOn=null,Kc||(Kc=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Gg)))}var dr=null;function yf(e){dr!==e&&(dr=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){dr===e&&(dr=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],i=e[t+2];if(typeof l!="function"){if(Zc(l||a)===null)continue;break}var r=rl(a);r!==null&&(e.splice(t,3),t-=3,Qs(r,{pending:!0,data:i,method:a.method,action:l},l,i))}}))}function ql(e){function t(x){return ur(x,e)}Ra!==null&&ur(Ra,e),Ca!==null&&ur(Ca,e),Oa!==null&&ur(Oa,e),_n.forEach(t),Un.forEach(t);for(var a=0;a<Ma.length;a++){var l=Ma[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ma.length&&(a=Ma[0],a.blockedOn===null);)bf(a),a.blockedOn===null&&Ma.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var i=a[l],r=a[l+1],c=i[lt]||null;if(typeof r=="function")c||yf(a);else if(c){var p=null;if(r&&r.hasAttribute("formAction")){if(i=r,c=r[lt]||null)p=c.formAction;else if(Zc(i)!==null)continue}else p=c.action;typeof p=="function"?a[l+1]=p:(a.splice(l,3),l-=3),yf(a)}}}function jf(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(c){return i=c})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function Xc(e){this._internalRoot=e}pr.prototype.render=Xc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,l=vt();pf(a,l,e,t,null,null)},pr.prototype.unmount=Xc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pf(e.current,2,null,e,null,null),Ki(),t[nl]=null}};function pr(e){this._internalRoot=e}pr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ro();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ma.length&&t!==0&&t<Ma[a].priority;a++);Ma.splice(a,0,e),a===0&&bf(e)}};var kf=d.version;if(kf!=="19.2.4")throw Error(u(527,kf,"19.2.4"));G.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=h(t),e=e!==null?T(e):null,e=e===null?null:e.stateNode,e};var Vg={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fr.isDisabled&&fr.supportsFiber)try{Zl=fr.inject(Vg),dt=fr}catch{}}return Yn.createRoot=function(e,t){if(!f(e))throw Error(u(299));var a=!1,l="",i=Ad,r=Td,c=Rd;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=uf(e,1,!1,null,null,a,l,null,i,r,c,jf),e[nl]=t.current,Ac(e),new Xc(t)},Yn.hydrateRoot=function(e,t,a){if(!f(e))throw Error(u(299));var l=!1,i="",r=Ad,c=Td,p=Rd,x=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(p=a.onRecoverableError),a.formState!==void 0&&(x=a.formState)),t=uf(e,1,!0,t,a??null,l,i,x,r,c,p,jf),t.context=df(null),a=t.current,l=vt(),l=Br(l),i=ba(l),i.callback=null,va(a,i,l),a=l,t.current.lanes=a,Xl(t,a),Lt(t),e[nl]=t.current,Ac(e),new pr(t)},Yn.version="19.2.4",Yn}var Of;function Pg(){if(Of)return Fc.exports;Of=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(d){console.error(d)}}return s(),Fc.exports=Ig(),Fc.exports}var ex=Pg();var Mf="popstate";function Df(s){return typeof s=="object"&&s!=null&&"pathname"in s&&"search"in s&&"hash"in s&&"state"in s&&"key"in s}function tx(s={}){function d(u,f){let m=f.state?.masked,{pathname:v,search:y,hash:g}=m||u.location;return oo("",{pathname:v,search:y,hash:g},f.state&&f.state.usr||null,f.state&&f.state.key||"default",m?{pathname:u.location.pathname,search:u.location.search,hash:u.location.hash}:void 0)}function o(u,f){return typeof f=="string"?f:Zn(f)}return lx(d,o,null,s)}function Ze(s,d){if(s===!1||s===null||typeof s>"u")throw new Error(d)}function Gt(s,d){if(!s){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function ax(){return Math.random().toString(36).substring(2,10)}function _f(s,d){return{usr:s.state,key:s.key,idx:d,masked:s.unstable_mask?{pathname:s.pathname,search:s.search,hash:s.hash}:void 0}}function oo(s,d,o=null,u,f){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof d=="string"?Xn(d):d,state:o,key:d&&d.key||u||ax(),unstable_mask:f}}function Zn({pathname:s="/",search:d="",hash:o=""}){return d&&d!=="?"&&(s+=d.charAt(0)==="?"?d:"?"+d),o&&o!=="#"&&(s+=o.charAt(0)==="#"?o:"#"+o),s}function Xn(s){let d={};if(s){let o=s.indexOf("#");o>=0&&(d.hash=s.substring(o),s=s.substring(0,o));let u=s.indexOf("?");u>=0&&(d.search=s.substring(u),s=s.substring(0,u)),s&&(d.pathname=s)}return d}function lx(s,d,o,u={}){let{window:f=document.defaultView,v5Compat:m=!1}=u,v=f.history,y="POP",g=null,h=T();h==null&&(h=0,v.replaceState({...v.state,idx:h},""));function T(){return(v.state||{idx:null}).idx}function w(){y="POP";let Y=T(),H=Y==null?null:Y-h;h=Y,g&&g({action:y,location:q.location,delta:H})}function B(Y,H){y="PUSH";let X=Df(Y)?Y:oo(q.location,Y,H);h=T()+1;let L=_f(X,h),K=q.createHref(X.unstable_mask||X);try{v.pushState(L,"",K)}catch(ne){if(ne instanceof DOMException&&ne.name==="DataCloneError")throw ne;f.location.assign(K)}m&&g&&g({action:y,location:q.location,delta:1})}function Z(Y,H){y="REPLACE";let X=Df(Y)?Y:oo(q.location,Y,H);h=T();let L=_f(X,h),K=q.createHref(X.unstable_mask||X);v.replaceState(L,"",K),m&&g&&g({action:y,location:q.location,delta:0})}function S(Y){return nx(Y)}let q={get action(){return y},get location(){return s(f,v)},listen(Y){if(g)throw new Error("A history only accepts one active listener");return f.addEventListener(Mf,w),g=Y,()=>{f.removeEventListener(Mf,w),g=null}},createHref(Y){return d(f,Y)},createURL:S,encodeLocation(Y){let H=S(Y);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:B,replace:Z,go(Y){return v.go(Y)}};return q}function nx(s,d=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),Ze(o,"No window.location.(origin|href) available to create URL");let u=typeof s=="string"?s:Zn(s);return u=u.replace(/ $/,"%20"),!d&&u.startsWith("//")&&(u=o+u),new URL(u,o)}function em(s,d,o="/"){return ix(s,d,o,!1)}function ix(s,d,o,u){let f=typeof d=="string"?Xn(d):d,m=ca(f.pathname||"/",o);if(m==null)return null;let v=tm(s);rx(v);let y=null;for(let g=0;y==null&&g<v.length;++g){let h=xx(m);y=hx(v[g],h,u)}return y}function tm(s,d=[],o=[],u="",f=!1){let m=(v,y,g=f,h)=>{let T={relativePath:h===void 0?v.path||"":h,caseSensitive:v.caseSensitive===!0,childrenIndex:y,route:v};if(T.relativePath.startsWith("/")){if(!T.relativePath.startsWith(u)&&g)return;Ze(T.relativePath.startsWith(u),`Absolute route path "${T.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),T.relativePath=T.relativePath.slice(u.length)}let w=qt([u,T.relativePath]),B=o.concat(T);v.children&&v.children.length>0&&(Ze(v.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),tm(v.children,d,B,w,g)),!(v.path==null&&!v.index)&&d.push({path:w,score:fx(w,v.index),routesMeta:B})};return s.forEach((v,y)=>{if(v.path===""||!v.path?.includes("?"))m(v,y);else for(let g of am(v.path))m(v,y,!0,g)}),d}function am(s){let d=s.split("/");if(d.length===0)return[];let[o,...u]=d,f=o.endsWith("?"),m=o.replace(/\?$/,"");if(u.length===0)return f?[m,""]:[m];let v=am(u.join("/")),y=[];return y.push(...v.map(g=>g===""?m:[m,g].join("/"))),f&&y.push(...v),y.map(g=>s.startsWith("/")&&g===""?"/":g)}function rx(s){s.sort((d,o)=>d.score!==o.score?o.score-d.score:mx(d.routesMeta.map(u=>u.childrenIndex),o.routesMeta.map(u=>u.childrenIndex)))}var sx=/^:[\w-]+$/,cx=3,ox=2,ux=1,dx=10,px=-2,Uf=s=>s==="*";function fx(s,d){let o=s.split("/"),u=o.length;return o.some(Uf)&&(u+=px),d&&(u+=ox),o.filter(f=>!Uf(f)).reduce((f,m)=>f+(sx.test(m)?cx:m===""?ux:dx),u)}function mx(s,d){return s.length===d.length&&s.slice(0,-1).every((u,f)=>u===d[f])?s[s.length-1]-d[d.length-1]:0}function hx(s,d,o=!1){let{routesMeta:u}=s,f={},m="/",v=[];for(let y=0;y<u.length;++y){let g=u[y],h=y===u.length-1,T=m==="/"?d:d.slice(m.length)||"/",w=kr({path:g.relativePath,caseSensitive:g.caseSensitive,end:h},T),B=g.route;if(!w&&h&&o&&!u[u.length-1].route.index&&(w=kr({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},T)),!w)return null;Object.assign(f,w.params),v.push({params:f,pathname:qt([m,w.pathname]),pathnameBase:jx(qt([m,w.pathnameBase])),route:B}),w.pathnameBase!=="/"&&(m=qt([m,w.pathnameBase]))}return v}function kr(s,d){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[o,u]=gx(s.path,s.caseSensitive,s.end),f=d.match(o);if(!f)return null;let m=f[0],v=m.replace(/(.)\/+$/,"$1"),y=f.slice(1);return{params:u.reduce((h,{paramName:T,isOptional:w},B)=>{if(T==="*"){let S=y[B]||"";v=m.slice(0,m.length-S.length).replace(/(.)\/+$/,"$1")}const Z=y[B];return w&&!Z?h[T]=void 0:h[T]=(Z||"").replace(/%2F/g,"/"),h},{}),pathname:m,pathnameBase:v,pattern:s}}function gx(s,d=!1,o=!0){Gt(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let u=[],f="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,y,g,h,T)=>{if(u.push({paramName:y,isOptional:g!=null}),g){let w=T.charAt(h+v.length);return w&&w!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(u.push({paramName:"*"}),f+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?f+="\\/*$":s!==""&&s!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,d?void 0:"i"),u]}function xx(s){try{return s.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return Gt(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`),s}}function ca(s,d){if(d==="/")return s;if(!s.toLowerCase().startsWith(d.toLowerCase()))return null;let o=d.endsWith("/")?d.length-1:d.length,u=s.charAt(o);return u&&u!=="/"?null:s.slice(o)||"/"}var bx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function vx(s,d="/"){let{pathname:o,search:u="",hash:f=""}=typeof s=="string"?Xn(s):s,m;return o?(o=o.replace(/\/\/+/g,"/"),o.startsWith("/")?m=Bf(o.substring(1),"/"):m=Bf(o,d)):m=d,{pathname:m,search:kx(u),hash:wx(f)}}function Bf(s,d){let o=d.replace(/\/+$/,"").split("/");return s.split("/").forEach(f=>{f===".."?o.length>1&&o.pop():f!=="."&&o.push(f)}),o.length>1?o.join("/"):"/"}function eo(s,d,o,u){return`Cannot include a '${s}' character in a manually specified \`to.${d}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function yx(s){return s.filter((d,o)=>o===0||d.route.path&&d.route.path.length>0)}function lm(s){let d=yx(s);return d.map((o,u)=>u===d.length-1?o.pathname:o.pathnameBase)}function ho(s,d,o,u=!1){let f;typeof s=="string"?f=Xn(s):(f={...s},Ze(!f.pathname||!f.pathname.includes("?"),eo("?","pathname","search",f)),Ze(!f.pathname||!f.pathname.includes("#"),eo("#","pathname","hash",f)),Ze(!f.search||!f.search.includes("#"),eo("#","search","hash",f)));let m=s===""||f.pathname==="",v=m?"/":f.pathname,y;if(v==null)y=o;else{let w=d.length-1;if(!u&&v.startsWith("..")){let B=v.split("/");for(;B[0]==="..";)B.shift(),w-=1;f.pathname=B.join("/")}y=w>=0?d[w]:"/"}let g=vx(f,y),h=v&&v!=="/"&&v.endsWith("/"),T=(m||v===".")&&o.endsWith("/");return!g.pathname.endsWith("/")&&(h||T)&&(g.pathname+="/"),g}var qt=s=>s.join("/").replace(/\/\/+/g,"/"),jx=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),kx=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,wx=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,Nx=class{constructor(s,d,o,u=!1){this.status=s,this.statusText=d||"",this.internal=u,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}};function Sx(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function zx(s){return s.map(d=>d.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var nm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function im(s,d){let o=s;if(typeof o!="string"||!bx.test(o))return{absoluteURL:void 0,isExternal:!1,to:o};let u=o,f=!1;if(nm)try{let m=new URL(window.location.href),v=o.startsWith("//")?new URL(m.protocol+o):new URL(o),y=ca(v.pathname,d);v.origin===m.origin&&y!=null?o=y+v.search+v.hash:f=!0}catch{Gt(!1,`<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:f,to:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var rm=["POST","PUT","PATCH","DELETE"];new Set(rm);var Ex=["GET",...rm];new Set(Ex);var Vl=k.createContext(null);Vl.displayName="DataRouter";var zr=k.createContext(null);zr.displayName="DataRouterState";var Ax=k.createContext(!1),sm=k.createContext({isTransitioning:!1});sm.displayName="ViewTransition";var Tx=k.createContext(new Map);Tx.displayName="Fetchers";var Rx=k.createContext(null);Rx.displayName="Await";var Ct=k.createContext(null);Ct.displayName="Navigation";var Er=k.createContext(null);Er.displayName="Location";var oa=k.createContext({outlet:null,matches:[],isDataRoute:!1});oa.displayName="Route";var go=k.createContext(null);go.displayName="RouteError";var cm="REACT_ROUTER_ERROR",Cx="REDIRECT",Ox="ROUTE_ERROR_RESPONSE";function Mx(s){if(s.startsWith(`${cm}:${Cx}:{`))try{let d=JSON.parse(s.slice(28));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string"&&typeof d.location=="string"&&typeof d.reloadDocument=="boolean"&&typeof d.replace=="boolean")return d}catch{}}function Dx(s){if(s.startsWith(`${cm}:${Ox}:{`))try{let d=JSON.parse(s.slice(40));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string")return new Nx(d.status,d.statusText,d.data)}catch{}}function _x(s,{relative:d}={}){Ze(Jn(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:u}=k.useContext(Ct),{hash:f,pathname:m,search:v}=Wn(s,{relative:d}),y=m;return o!=="/"&&(y=m==="/"?o:qt([o,m])),u.createHref({pathname:y,search:v,hash:f})}function Jn(){return k.useContext(Er)!=null}function Vt(){return Ze(Jn(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(Er).location}var om="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function um(s){k.useContext(Ct).static||k.useLayoutEffect(s)}function _a(){let{isDataRoute:s}=k.useContext(oa);return s?Jx():Ux()}function Ux(){Ze(Jn(),"useNavigate() may be used only in the context of a <Router> component.");let s=k.useContext(Vl),{basename:d,navigator:o}=k.useContext(Ct),{matches:u}=k.useContext(oa),{pathname:f}=Vt(),m=JSON.stringify(lm(u)),v=k.useRef(!1);return um(()=>{v.current=!0}),k.useCallback((g,h={})=>{if(Gt(v.current,om),!v.current)return;if(typeof g=="number"){o.go(g);return}let T=ho(g,JSON.parse(m),f,h.relative==="path");s==null&&d!=="/"&&(T.pathname=T.pathname==="/"?d:qt([d,T.pathname])),(h.replace?o.replace:o.push)(T,h.state,h)},[d,o,m,f,s])}k.createContext(null);function Wn(s,{relative:d}={}){let{matches:o}=k.useContext(oa),{pathname:u}=Vt(),f=JSON.stringify(lm(o));return k.useMemo(()=>ho(s,JSON.parse(f),u,d==="path"),[s,f,u,d])}function Bx(s,d){return dm(s)}function dm(s,d,o){Ze(Jn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=k.useContext(Ct),{matches:f}=k.useContext(oa),m=f[f.length-1],v=m?m.params:{},y=m?m.pathname:"/",g=m?m.pathnameBase:"/",h=m&&m.route;{let Y=h&&h.path||"";fm(y,!h||Y.endsWith("*")||Y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${Y==="/"?"*":`${Y}/*`}">.`)}let T=Vt(),w;w=T;let B=w.pathname||"/",Z=B;if(g!=="/"){let Y=g.replace(/^\//,"").split("/");Z="/"+B.replace(/^\//,"").split("/").slice(Y.length).join("/")}let S=em(s,{pathname:Z});return Gt(h||S!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),Gt(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),Gx(S&&S.map(Y=>Object.assign({},Y,{params:Object.assign({},v,Y.params),pathname:qt([g,u.encodeLocation?u.encodeLocation(Y.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Y.pathname]),pathnameBase:Y.pathnameBase==="/"?g:qt([g,u.encodeLocation?u.encodeLocation(Y.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Y.pathnameBase])})),f,o)}function Hx(){let s=Xx(),d=Sx(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),o=s instanceof Error?s.stack:null,u="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:u},m={padding:"2px 4px",backgroundColor:u},v=null;return console.error("Error handled by React Router default ErrorBoundary:",s),v=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:m},"ErrorBoundary")," or"," ",k.createElement("code",{style:m},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},d),o?k.createElement("pre",{style:f},o):null,v)}var Yx=k.createElement(Hx,null),pm=class extends k.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,d){return d.location!==s.location||d.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:d.error,location:d.location,revalidation:s.revalidation||d.revalidation}}componentDidCatch(s,d){this.props.onError?this.props.onError(s,d):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const o=Dx(s.digest);o&&(s=o)}let d=s!==void 0?k.createElement(oa.Provider,{value:this.props.routeContext},k.createElement(go.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?k.createElement(Lx,{error:s},d):d}};pm.contextType=Ax;var to=new WeakMap;function Lx({children:s,error:d}){let{basename:o}=k.useContext(Ct);if(typeof d=="object"&&d&&"digest"in d&&typeof d.digest=="string"){let u=Mx(d.digest);if(u){let f=to.get(d);if(f)throw f;let m=im(u.location,o);if(nm&&!to.get(d))if(m.isExternal||u.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const v=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:u.replace}));throw to.set(d,v),v}return k.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return s}function qx({routeContext:s,match:d,children:o}){let u=k.useContext(Vl);return u&&u.static&&u.staticContext&&(d.route.errorElement||d.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=d.route.id),k.createElement(oa.Provider,{value:s},o)}function Gx(s,d=[],o){let u=o?.state;if(s==null){if(!u)return null;if(u.errors)s=u.matches;else if(d.length===0&&!u.initialized&&u.matches.length>0)s=u.matches;else return null}let f=s,m=u?.errors;if(m!=null){let T=f.findIndex(w=>w.route.id&&m?.[w.route.id]!==void 0);Ze(T>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),f=f.slice(0,Math.min(f.length,T+1))}let v=!1,y=-1;if(o&&u){v=u.renderFallback;for(let T=0;T<f.length;T++){let w=f[T];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(y=T),w.route.id){let{loaderData:B,errors:Z}=u,S=w.route.loader&&!B.hasOwnProperty(w.route.id)&&(!Z||Z[w.route.id]===void 0);if(w.route.lazy||S){o.isStatic&&(v=!0),y>=0?f=f.slice(0,y+1):f=[f[0]];break}}}}let g=o?.onError,h=u&&g?(T,w)=>{g(T,{location:u.location,params:u.matches?.[0]?.params??{},unstable_pattern:zx(u.matches),errorInfo:w})}:void 0;return f.reduceRight((T,w,B)=>{let Z,S=!1,q=null,Y=null;u&&(Z=m&&w.route.id?m[w.route.id]:void 0,q=w.route.errorElement||Yx,v&&(y<0&&B===0?(fm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,Y=null):y===B&&(S=!0,Y=w.route.hydrateFallbackElement||null)));let H=d.concat(f.slice(0,B+1)),X=()=>{let L;return Z?L=q:S?L=Y:w.route.Component?L=k.createElement(w.route.Component,null):w.route.element?L=w.route.element:L=T,k.createElement(qx,{match:w,routeContext:{outlet:T,matches:H,isDataRoute:u!=null},children:L})};return u&&(w.route.ErrorBoundary||w.route.errorElement||B===0)?k.createElement(pm,{location:u.location,revalidation:u.revalidation,component:q,error:Z,children:X(),routeContext:{outlet:null,matches:H,isDataRoute:!0},onError:h}):X()},null)}function xo(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vx(s){let d=k.useContext(Vl);return Ze(d,xo(s)),d}function Qx(s){let d=k.useContext(zr);return Ze(d,xo(s)),d}function Zx(s){let d=k.useContext(oa);return Ze(d,xo(s)),d}function bo(s){let d=Zx(s),o=d.matches[d.matches.length-1];return Ze(o.route.id,`${s} can only be used on routes that contain a unique "id"`),o.route.id}function Kx(){return bo("useRouteId")}function Xx(){let s=k.useContext(go),d=Qx("useRouteError"),o=bo("useRouteError");return s!==void 0?s:d.errors?.[o]}function Jx(){let{router:s}=Vx("useNavigate"),d=bo("useNavigate"),o=k.useRef(!1);return um(()=>{o.current=!0}),k.useCallback(async(f,m={})=>{Gt(o.current,om),o.current&&(typeof f=="number"?await s.navigate(f):await s.navigate(f,{fromRouteId:d,...m}))},[s,d])}var Hf={};function fm(s,d,o){!d&&!Hf[s]&&(Hf[s]=!0,Gt(!1,o))}k.memo(Wx);function Wx({routes:s,future:d,state:o,isStatic:u,onError:f}){return dm(s,void 0,{state:o,isStatic:u,onError:f})}function Fx({basename:s="/",children:d=null,location:o,navigationType:u="POP",navigator:f,static:m=!1,unstable_useTransitions:v}){Ze(!Jn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=s.replace(/^\/*/,"/"),g=k.useMemo(()=>({basename:y,navigator:f,static:m,unstable_useTransitions:v,future:{}}),[y,f,m,v]);typeof o=="string"&&(o=Xn(o));let{pathname:h="/",search:T="",hash:w="",state:B=null,key:Z="default",unstable_mask:S}=o,q=k.useMemo(()=>{let Y=ca(h,y);return Y==null?null:{location:{pathname:Y,search:T,hash:w,state:B,key:Z,unstable_mask:S},navigationType:u}},[y,h,T,w,B,Z,u,S]);return Gt(q!=null,`<Router basename="${y}"> is not able to match the URL "${h}${T}${w}" because it does not start with the basename, so the <Router> won't render anything.`),q==null?null:k.createElement(Ct.Provider,{value:g},k.createElement(Er.Provider,{children:d,value:q}))}var vr="get",yr="application/x-www-form-urlencoded";function Ar(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function $x(s){return Ar(s)&&s.tagName.toLowerCase()==="button"}function Ix(s){return Ar(s)&&s.tagName.toLowerCase()==="form"}function Px(s){return Ar(s)&&s.tagName.toLowerCase()==="input"}function e0(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function t0(s,d){return s.button===0&&(!d||d==="_self")&&!e0(s)}var mr=null;function a0(){if(mr===null)try{new FormData(document.createElement("form"),0),mr=!1}catch{mr=!0}return mr}var l0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ao(s){return s!=null&&!l0.has(s)?(Gt(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${yr}"`),null):s}function n0(s,d){let o,u,f,m,v;if(Ix(s)){let y=s.getAttribute("action");u=y?ca(y,d):null,o=s.getAttribute("method")||vr,f=ao(s.getAttribute("enctype"))||yr,m=new FormData(s)}else if($x(s)||Px(s)&&(s.type==="submit"||s.type==="image")){let y=s.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=s.getAttribute("formaction")||y.getAttribute("action");if(u=g?ca(g,d):null,o=s.getAttribute("formmethod")||y.getAttribute("method")||vr,f=ao(s.getAttribute("formenctype"))||ao(y.getAttribute("enctype"))||yr,m=new FormData(y,s),!a0()){let{name:h,type:T,value:w}=s;if(T==="image"){let B=h?`${h}.`:"";m.append(`${B}x`,"0"),m.append(`${B}y`,"0")}else h&&m.append(h,w)}}else{if(Ar(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=vr,u=null,f=yr,v=s}return m&&f==="text/plain"&&(v=m,m=void 0),{action:u,method:o.toLowerCase(),encType:f,formData:m,body:v}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function vo(s,d){if(s===!1||s===null||typeof s>"u")throw new Error(d)}function i0(s,d,o,u){let f=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return o?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${u}`:f.pathname=`${f.pathname}.${u}`:f.pathname==="/"?f.pathname=`_root.${u}`:d&&ca(f.pathname,d)==="/"?f.pathname=`${d.replace(/\/$/,"")}/_root.${u}`:f.pathname=`${f.pathname.replace(/\/$/,"")}.${u}`,f}async function r0(s,d){if(s.id in d)return d[s.id];try{let o=await import(s.module);return d[s.id]=o,o}catch(o){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function s0(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function c0(s,d,o){let u=await Promise.all(s.map(async f=>{let m=d.routes[f.route.id];if(m){let v=await r0(m,o);return v.links?v.links():[]}return[]}));return p0(u.flat(1).filter(s0).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function Yf(s,d,o,u,f,m){let v=(g,h)=>o[h]?g.route.id!==o[h].route.id:!0,y=(g,h)=>o[h].pathname!==g.pathname||o[h].route.path?.endsWith("*")&&o[h].params["*"]!==g.params["*"];return m==="assets"?d.filter((g,h)=>v(g,h)||y(g,h)):m==="data"?d.filter((g,h)=>{let T=u.routes[g.route.id];if(!T||!T.hasLoader)return!1;if(v(g,h)||y(g,h))return!0;if(g.route.shouldRevalidate){let w=g.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function o0(s,d,{includeHydrateFallback:o}={}){return u0(s.map(u=>{let f=d.routes[u.route.id];if(!f)return[];let m=[f.module];return f.clientActionModule&&(m=m.concat(f.clientActionModule)),f.clientLoaderModule&&(m=m.concat(f.clientLoaderModule)),o&&f.hydrateFallbackModule&&(m=m.concat(f.hydrateFallbackModule)),f.imports&&(m=m.concat(f.imports)),m}).flat(1))}function u0(s){return[...new Set(s)]}function d0(s){let d={},o=Object.keys(s).sort();for(let u of o)d[u]=s[u];return d}function p0(s,d){let o=new Set;return new Set(d),s.reduce((u,f)=>{let m=JSON.stringify(d0(f));return o.has(m)||(o.add(m),u.push({key:m,link:f})),u},[])}function mm(){let s=k.useContext(Vl);return vo(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function f0(){let s=k.useContext(zr);return vo(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var yo=k.createContext(void 0);yo.displayName="FrameworkContext";function hm(){let s=k.useContext(yo);return vo(s,"You must render this element inside a <HydratedRouter> element"),s}function m0(s,d){let o=k.useContext(yo),[u,f]=k.useState(!1),[m,v]=k.useState(!1),{onFocus:y,onBlur:g,onMouseEnter:h,onMouseLeave:T,onTouchStart:w}=d,B=k.useRef(null);k.useEffect(()=>{if(s==="render"&&v(!0),s==="viewport"){let q=H=>{H.forEach(X=>{v(X.isIntersecting)})},Y=new IntersectionObserver(q,{threshold:.5});return B.current&&Y.observe(B.current),()=>{Y.disconnect()}}},[s]),k.useEffect(()=>{if(u){let q=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(q)}}},[u]);let Z=()=>{f(!0)},S=()=>{f(!1),v(!1)};return o?s!=="intent"?[m,B,{}]:[m,B,{onFocus:Ln(y,Z),onBlur:Ln(g,S),onMouseEnter:Ln(h,Z),onMouseLeave:Ln(T,S),onTouchStart:Ln(w,Z)}]:[!1,B,{}]}function Ln(s,d){return o=>{s&&s(o),o.defaultPrevented||d(o)}}function h0({page:s,...d}){let{router:o}=mm(),u=k.useMemo(()=>em(o.routes,s,o.basename),[o.routes,s,o.basename]);return u?k.createElement(x0,{page:s,matches:u,...d}):null}function g0(s){let{manifest:d,routeModules:o}=hm(),[u,f]=k.useState([]);return k.useEffect(()=>{let m=!1;return c0(s,d,o).then(v=>{m||f(v)}),()=>{m=!0}},[s,d,o]),u}function x0({page:s,matches:d,...o}){let u=Vt(),{future:f,manifest:m,routeModules:v}=hm(),{basename:y}=mm(),{loaderData:g,matches:h}=f0(),T=k.useMemo(()=>Yf(s,d,h,m,u,"data"),[s,d,h,m,u]),w=k.useMemo(()=>Yf(s,d,h,m,u,"assets"),[s,d,h,m,u]),B=k.useMemo(()=>{if(s===u.pathname+u.search+u.hash)return[];let q=new Set,Y=!1;if(d.forEach(X=>{let L=m.routes[X.route.id];!L||!L.hasLoader||(!T.some(K=>K.route.id===X.route.id)&&X.route.id in g&&v[X.route.id]?.shouldRevalidate||L.hasClientLoader?Y=!0:q.add(X.route.id))}),q.size===0)return[];let H=i0(s,y,f.unstable_trailingSlashAwareDataRequests,"data");return Y&&q.size>0&&H.searchParams.set("_routes",d.filter(X=>q.has(X.route.id)).map(X=>X.route.id).join(",")),[H.pathname+H.search]},[y,f.unstable_trailingSlashAwareDataRequests,g,u,m,T,d,s,v]),Z=k.useMemo(()=>o0(w,m),[w,m]),S=g0(w);return k.createElement(k.Fragment,null,B.map(q=>k.createElement("link",{key:q,rel:"prefetch",as:"fetch",href:q,...o})),Z.map(q=>k.createElement("link",{key:q,rel:"modulepreload",href:q,...o})),S.map(({key:q,link:Y})=>k.createElement("link",{key:q,nonce:o.nonce,...Y,crossOrigin:Y.crossOrigin??o.crossOrigin})))}function b0(...s){return d=>{s.forEach(o=>{typeof o=="function"?o(d):o!=null&&(o.current=d)})}}var v0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{v0&&(window.__reactRouterVersion="7.13.1")}catch{}function y0({basename:s,children:d,unstable_useTransitions:o,window:u}){let f=k.useRef();f.current==null&&(f.current=tx({window:u,v5Compat:!0}));let m=f.current,[v,y]=k.useState({action:m.action,location:m.location}),g=k.useCallback(h=>{o===!1?y(h):k.startTransition(()=>y(h))},[o]);return k.useLayoutEffect(()=>m.listen(g),[m,g]),k.createElement(Fx,{basename:s,children:d,location:v.location,navigationType:v.action,navigator:m,unstable_useTransitions:o})}var gm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yt=k.forwardRef(function({onClick:d,discover:o="render",prefetch:u="none",relative:f,reloadDocument:m,replace:v,unstable_mask:y,state:g,target:h,to:T,preventScrollReset:w,viewTransition:B,unstable_defaultShouldRevalidate:Z,...S},q){let{basename:Y,navigator:H,unstable_useTransitions:X}=k.useContext(Ct),L=typeof T=="string"&&gm.test(T),K=im(T,Y);T=K.to;let ne=_x(T,{relative:f}),F=Vt(),P=null;if(y){let ke=ho(y,[],F.unstable_mask?F.unstable_mask.pathname:"/",!0);Y!=="/"&&(ke.pathname=ke.pathname==="/"?Y:qt([Y,ke.pathname])),P=H.createHref(ke)}let[je,U,le]=m0(u,S),re=N0(T,{replace:v,unstable_mask:y,state:g,target:h,preventScrollReset:w,relative:f,viewTransition:B,unstable_defaultShouldRevalidate:Z,unstable_useTransitions:X});function $(ke){d&&d(ke),ke.defaultPrevented||re(ke)}let ie=!(K.isExternal||m),Oe=k.createElement("a",{...S,...le,href:(ie?P:void 0)||K.absoluteURL||ne,onClick:ie?$:d,ref:b0(q,U),target:h,"data-discover":!L&&o==="render"?"true":void 0});return je&&!L?k.createElement(k.Fragment,null,Oe,k.createElement(h0,{page:ne})):Oe});yt.displayName="Link";var j0=k.forwardRef(function({"aria-current":d="page",caseSensitive:o=!1,className:u="",end:f=!1,style:m,to:v,viewTransition:y,children:g,...h},T){let w=Wn(v,{relative:h.relative}),B=Vt(),Z=k.useContext(zr),{navigator:S,basename:q}=k.useContext(Ct),Y=Z!=null&&T0(w)&&y===!0,H=S.encodeLocation?S.encodeLocation(w).pathname:w.pathname,X=B.pathname,L=Z&&Z.navigation&&Z.navigation.location?Z.navigation.location.pathname:null;o||(X=X.toLowerCase(),L=L?L.toLowerCase():null,H=H.toLowerCase()),L&&q&&(L=ca(L,q)||L);const K=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let ne=X===H||!f&&X.startsWith(H)&&X.charAt(K)==="/",F=L!=null&&(L===H||!f&&L.startsWith(H)&&L.charAt(H.length)==="/"),P={isActive:ne,isPending:F,isTransitioning:Y},je=ne?d:void 0,U;typeof u=="function"?U=u(P):U=[u,ne?"active":null,F?"pending":null,Y?"transitioning":null].filter(Boolean).join(" ");let le=typeof m=="function"?m(P):m;return k.createElement(yt,{...h,"aria-current":je,className:U,ref:T,style:le,to:v,viewTransition:y},typeof g=="function"?g(P):g)});j0.displayName="NavLink";var k0=k.forwardRef(({discover:s="render",fetcherKey:d,navigate:o,reloadDocument:u,replace:f,state:m,method:v=vr,action:y,onSubmit:g,relative:h,preventScrollReset:T,viewTransition:w,unstable_defaultShouldRevalidate:B,...Z},S)=>{let{unstable_useTransitions:q}=k.useContext(Ct),Y=E0(),H=A0(y,{relative:h}),X=v.toLowerCase()==="get"?"get":"post",L=typeof y=="string"&&gm.test(y),K=ne=>{if(g&&g(ne),ne.defaultPrevented)return;ne.preventDefault();let F=ne.nativeEvent.submitter,P=F?.getAttribute("formmethod")||v,je=()=>Y(F||ne.currentTarget,{fetcherKey:d,method:P,navigate:o,replace:f,state:m,relative:h,preventScrollReset:T,viewTransition:w,unstable_defaultShouldRevalidate:B});q&&o!==!1?k.startTransition(()=>je()):je()};return k.createElement("form",{ref:S,method:X,action:H,onSubmit:u?g:K,...Z,"data-discover":!L&&s==="render"?"true":void 0})});k0.displayName="Form";function w0(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xm(s){let d=k.useContext(Vl);return Ze(d,w0(s)),d}function N0(s,{target:d,replace:o,unstable_mask:u,state:f,preventScrollReset:m,relative:v,viewTransition:y,unstable_defaultShouldRevalidate:g,unstable_useTransitions:h}={}){let T=_a(),w=Vt(),B=Wn(s,{relative:v});return k.useCallback(Z=>{if(t0(Z,d)){Z.preventDefault();let S=o!==void 0?o:Zn(w)===Zn(B),q=()=>T(s,{replace:S,unstable_mask:u,state:f,preventScrollReset:m,relative:v,viewTransition:y,unstable_defaultShouldRevalidate:g});h?k.startTransition(()=>q()):q()}},[w,T,B,o,u,f,d,s,m,v,y,g,h])}var S0=0,z0=()=>`__${String(++S0)}__`;function E0(){let{router:s}=xm("useSubmit"),{basename:d}=k.useContext(Ct),o=Kx(),u=s.fetch,f=s.navigate;return k.useCallback(async(m,v={})=>{let{action:y,method:g,encType:h,formData:T,body:w}=n0(m,d);if(v.navigate===!1){let B=v.fetcherKey||z0();await u(B,o,v.action||y,{unstable_defaultShouldRevalidate:v.unstable_defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:T,body:w,formMethod:v.method||g,formEncType:v.encType||h,flushSync:v.flushSync})}else await f(v.action||y,{unstable_defaultShouldRevalidate:v.unstable_defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:T,body:w,formMethod:v.method||g,formEncType:v.encType||h,replace:v.replace,state:v.state,fromRouteId:o,flushSync:v.flushSync,viewTransition:v.viewTransition})},[u,f,d,o])}function A0(s,{relative:d}={}){let{basename:o}=k.useContext(Ct),u=k.useContext(oa);Ze(u,"useFormAction must be used inside a RouteContext");let[f]=u.matches.slice(-1),m={...Wn(s||".",{relative:d})},v=Vt();if(s==null){m.search=v.search;let y=new URLSearchParams(m.search),g=y.getAll("index");if(g.some(T=>T==="")){y.delete("index"),g.filter(w=>w).forEach(w=>y.append("index",w));let T=y.toString();m.search=T?`?${T}`:""}}return(!s||s===".")&&f.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(m.pathname=m.pathname==="/"?o:qt([o,m.pathname])),Zn(m)}function T0(s,{relative:d}={}){let o=k.useContext(sm);Ze(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=xm("useViewTransitionState"),f=Wn(s,{relative:d});if(!o.isTransitioning)return!1;let m=ca(o.currentLocation.pathname,u)||o.currentLocation.pathname,v=ca(o.nextLocation.pathname,u)||o.nextLocation.pathname;return kr(f.pathname,v)!=null||kr(f.pathname,m)!=null}function R0(){const s=Vt();return n.jsxs("div",{className:"relative flex flex-col items-center justify-center h-screen text-center px-4 bg-[var(--bg)]",children:[n.jsx("h1",{className:"absolute bottom-0 text-9xl md:text-[12rem] font-black text-[var(--bg-2)] select-none pointer-events-none z-0",children:"404"}),n.jsxs("div",{className:"relative z-10",children:[n.jsx("h1",{className:"text-xl md:text-2xl font-medium mt-6 text-[var(--ink)]",children:"This page has not been generated"}),n.jsx("p",{className:"mt-2 text-base text-[var(--muted-2)] tracking-[0.04em]",children:s.pathname}),n.jsx("p",{className:"mt-4 text-lg md:text-xl text-[var(--muted)]",children:"Tell me more about this page, so I can generate it"})]})]})}const bm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABACAYAAABfuzgrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDEwLjAtYzAwMCA3OS5kMjBlNDY2MzAsIDIwMjUvMTIvMDktMDI6MTE6MjMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NDIzNGE4NjAtMzY3My0yNzRkLTkxNjQtMGNmZTEzMjJiZTg3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBGMUQ1ODQ0NThBMzExRjE4Q0Y0RjdERUE1Q0YyN0ZEIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBGMUQ1ODQzNThBMzExRjE4Q0Y0RjdERUE1Q0YyN0ZEIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNy40IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFlNDEyZmE4LWI5NTgtZWY0YS05OTlhLTRmMzgxMTNjMzMyMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MjM0YTg2MC0zNjczLTI3NGQtOTE2NC0wY2ZlMTMyMmJlODciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6HZ9cfAAALMElEQVR42uxcTWzjWB1/sRM7zlfrzsx+sawgK3GAE8pwA4lD5jISx4z2gDimVw5I6YUz6YUzzQ0JcWhOXBBSIySkkZCWhr2wq4WdyaJlNDs7s43bpPlObH5/+zl1MkmnKSnNpP+f5Nr1e/772X6/9/96LyHHcQSDwZgNhV8Bg8EEYTCYIAwGE4TBYIIwGEwQBoMJwmAwQRgMJgiDwQRhMBhMEAaDCcJgMEEYDCYIg8EEYTCYIAzGa4XwVd/go4e/u5YVWd//4U9D/HkZK08Qwne++4OF6h89fyIe/vkPYnPrjrj/wS9Eq/7FQtf/65O/8ZdlsInF5GAwQZgcjHU3sVaVHP/++I+r9RD4AQ3PYcPe/zENx/0vsHe8vVtHePUc5+wax9s7Xr2scOyKPB6fl3Uy+JOmvePYJRzXfHmefBtlAmVO2i0TTjko32uQk8VxJdgur8i/lz3ZTuGcyXfP2WftCVwrgvJE8J6yOPB+fvKzX7MGYc1xKexhO4hoRh379NR5OneoRrR9LRorxBKbGUUdj5UFbI9pU1V1X9ONohFLZrCfKT+s6dPyWYOsETmy2IoXqFfBVsVWfk1ei4ktn0jdEtFo3LRHo7xVf7ozHPapbBvndzQtWheh0HikHw56YjQcUvkuCFGKGrGDkKJm/BG+3W6IXrc9IT+eNIUWNUzbHuVP6s93RqMBE2TNNEcFI+O9ePKWKUdNHw8kKUxJony/1y6gE9V63dbOkolCo+++PL67JJlWSFHQyZN5mFjyOCFOm3W38LRxBG6EhHn7G379avDiTrtpdTtNkdy8LVQ1Qqdqs+TrRjzvkPwQjqNx0W4ds5O+bmZVv9exjutPrYb1TIQj+nhrn1p0vobzpU67cVfTY6WU+VZ664339tEZCkt8lJyqhjPm7XdpM5fmztj2Njo5EW4Lx7Vu5/RcQg0H/Sl3yJ4ot0fDl+T3Oi1PvmPTwMEm1rr6HPjYwlZmnx8JbDAvuu3GdnLjTjYaS6VBlGKreVRtnx5XlnD7rI7RHaSsolfSyIz7jpbyXNAU1W6rIQaDrvDd//nxAfvcctt+ubzVtKodaBqXXGv6C52vFUGow372afXa7t88eVGKwGklswNmGZlcFWigeb5NRppovg9TmeEnkHmViWgx9wTk5RyvI1oz6mekXF+mFfCN5ppvw2EvK+tcxYtLjwaD8+T772F3xjNYgfPn+VK5QBCArinJPZtYE6Nh07pWckiUoUnGH9+Im5kZ/sQBbfBtTESHqvHkFsi0Rf8fBDo3dRI4wcoeNIcZgUknry2Q+aZHEzmYdMFOsu9GjCJ6LSCzGItvHIYjWmFGGyjCdEh+laJG9uCL5MJhfZk+U0C+uoc259SwNjYZZXsfe1E0vRiNJUz/mnA4UjSMRCEWS2IfPwy8k2m40TT4N3ldN2pGLEFbDsEDnAsVBGuQMzz69O9Q8aNVaEqt1zm1pFMv0OmzZBpRBEh2nEP4E2Zi441dlO3AjyGtUEad9MbWOzlom/3G8bN70BIUHLgLOW5nIrOKZEMz3fX6kiMG/S78IzdqtKcoSi6RulONaNFy8/g5mUuQqWVAkizqF1uNowoc5PHogZAtOlMqS502HA67kSpyoMnUWgbwjDV0esgP07Erv9OCqTV03wPeS7SGtpJvhbYoVF7sdlpWLJaAL2dYaP++8PIvGYSJ86cn9d3R5PclMuWjRtzSDeOePRwiaOC+iyquP4waRrHTbsGvapfXgiBf1P6xsCnl468HvxXW0YuFrn/73W9f2bOMRsMa2peRndqk/IAkyB6Rw7z9TUERHiJHS0aN4MBW1HAkB82QTW2+hZDo0xKZZv3eE0HRH/g0UvZAWF8/CSbCSEPlEht3hK7HLerg5AyTP9HrnlZVVcuiI5I2yfb7nSqRSkacdtHOXBhlPrGXOUi48u1hLhLSZsmnTltBaLkA7eEl/XAuFk9WnNFINI6/psGuFE9u4n2pIDDei27sts+CCDRo5GOJFBGtbDsjq9k49gfI6mAwqKY2zQy0SQH3WA+CfPThXy597eeffbLwNVdJEL8jhxXPZIEJ4JtMWWgOIgeN5LWAKebazkQIEIS0ThqOvpgqn4cqtE8ZJEI2W+xMO8o0Ykc8EphICApJEEERp07rRLhmmkdkazQVhfofBwkxgsZALkWonpU+EeXq99COUE/oxthMrNI5ap/MpFuUUwFp3MKIjmc4I0he03W8K4PqwsfrTQQQ3HsjXwPTLgMNY161P/J/IQjNyl0Ux/UXl772GpAlTeJnm6FRzKkOmQ5GplT14q8dsh6Q1lCV8FgjSc0ykb2WGu1CWvlqZsmcL384HEy1x5nnlGeR3Q88f9+cKh//TybeWmiQ+x/8crEL7C/F73/zK3ntz8lIWXANyp/EFWepRSCq4o2CmhHsvPXpDgsT69I3bFhfkaWSw8jrR3QqlKuRSby1gqKERCSi+WHj/TMt7UiNHXK3tXLSW/V/LlT/w4dnkwibzz4Wjx49WpXvR50zHej8lRkjJ5lF926/OdfMW9QkyMjpMFmYWjvYHiiKKvr9dlGsPx7EkxuVycmKTtBHs25cFGvFJx66kRk5clc827ozyyyiLPwyzB1ThnfNeGKrDFt9FxEr0Tq13E7iRbzWGmareWIN+r15BLlZeZDXYFZujrLeEm4kSkawKlMjfoZIMG9bAHloK3Nz623ybyrkiyB7v86EmE6QZkPuhEo7sDkT240hyGtADjJpMhSJAna8pOHJ2NQa9DvjD4sRvxCO6PPMpfwiIyjyGb4Dbg567Xm+0EVMw+ssv7j7aTulwdm8MISqtew53+NmEGTFyZGRzmIB+YYaOv42jncxF0sEJ+hBm2zTxEf/wyLjvS9j+mZgWn2RwrYU5p0xizYTqF+Qna4mw8iuTJp+Ls+TLFMJqdNkyc0jmnJ+xCetnB9ZM18ReTMVdWnWernfbZf8fxBK3qcBJxC5y8vZChZyIetPkGsmR9afMiFenubgn6cPZKbMN3dg87+PHEgJc7JmmTq105Pn78OEcpNXNF0E19DMX4po0VSTNAgGp/MWcgDjmH8NJtpOQPPI+moa96LMeonu5xMIZZhaoiNbH7FIlsy5uKaYElKovTWESP1nCo7qOVku/IVO088LAuxNPfvE9bjX4dQ7myw/X/6BlOuXF6a0z6GUKweb3nav29mWCUgzkUwVkfOg536MAEUBicVyMrW5+6rQ8jIQumo7jn72Z96vmswjB+VAvnzyuZsD+dGP710qinWRn/2hJbc0Zwqd1nW8g6FZ6VvQOVcrUHJq0G+/0gcgGZj1mwZBMlPZ5yoRg8g17YfQij60IS2X3KKuU6VEH9WlE4mNW9mokTLl8lPKUlvtFjL1aAv8E8yz0shthZnXtU7pmlDIjCGHRtEuiojSNx4iuYlknmUdPRWJ5JarESj0PF4w1e8hU98TmPYhaO6UFo0KV0N5AtzkKKaDWCdHXxGRTSORFKpb7snHdBAxQtYbC6dEPLHhahTKlPsONcwmq9/t0FoTPG/Kuz/K3fsjRzRE29pIPg56PeEvuUUmnZKNWUy1MQNOetlNhHZa0OCdK19yG77JZtW3vnf/qkKFNTFjekcc29Y7M+u/NBs2cUuIO5MrGuclY8qLhJLfu1io+brLhTjn2cW6L5jiNeQMwetBxMqt52AwVpYgtJ7j6X8e8RtnMEHE6q7nYDBWjyCLkoOiV/4s3hWah8W4gQg5a7rYnsEQ/MuKDAYThMFggjAYTBAGgwnCYDBBGAwmCIPBBGEwGEwQBoMJwmAwQRgMJgiDwQRhMJggDAYThMFggjAYNw7/FWAAi26mbSS44fEAAAAASUVORK5CYII=",C0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABACAYAAABfuzgrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDEwLjAtYzAwMCA3OS5kMjBlNDY2MzAsIDIwMjUvMTIvMDktMDI6MTE6MjMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NDIzNGE4NjAtMzY3My0yNzRkLTkxNjQtMGNmZTEzMjJiZTg3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjExQTg3QUM2NThBNDExRjE5NkY0RkVCOURBRkVDNjk2IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjExQTg3QUM1NThBNDExRjE5NkY0RkVCOURBRkVDNjk2IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNy40IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFkNjhmZjAxLWMzYjUtYWM0NS04OTM1LTVmZGE1YWU2OTJhMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MjM0YTg2MC0zNjczLTI3NGQtOTE2NC0wY2ZlMTMyMmJlODciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6dJ7OqAAAF3klEQVR42uydv48bRRTHZxF/ABuJAomGDaKACq2poNxr0u8pBbWvpUCyG2rs/wBbNEiIwq5oEJKtSEiHkMI515AoP3yLlEQJIooXKaSgwGY3fnN5fuyPG3s3Xq+/H92c92Znxju78515M/NWZy0WCwUASOY13AIAIBAAIBAAIBAAIBAAIBAAIBAAIBAAIBAAIBAAAAQCAAQCAAQCAAQCAAQCAAQCwE7xetlfcHr87VbeyPrwk08tPF5QeYHEvPf+R0bpn/75UB1f+169celNdeXq5+r57L5R/ru3fsWTBTCxIA4AgUAcoO4mVlXF8fEH71arEtbKx8vj83hrJU6nsyx+Vv/9IsaLjsc67jz/Mq8bHTqWZbnRcT86Ds7TLH+cKM598WlF55Q1ZHmpHMuLPsb8elh+tZreUqvplicTrnk1zUpdrf/V/etrpxhBMHKsRS8KoyjM1LKx8/g47iQKgyi01FIsmvjvMwrx+Y44n1c+TKwaicOjhpIX4kbi79BtsaPQTDiOOYrC5Yy83Sg0ojBZs3wIpEYjR2x+HEThkHpJHbosvk9CGlCvWrRQHCbEogjpuuVxGpOE/Jxgw/IhkB02q8KEBqHjA3r4Dfp0mFlSFD4Tpl1guUd03ZcSGrjKEcRFzpuUD4HswZzjiDWEDo0qReCxXjws+JonJd+TiVJYxaoMi/lc3bu91WfSJ3Hoyew4o9HzEWGckNamEckVo4nusWV6l8q1RZpJjvnmUZoyblxe+R4zWWUdQhafNdfx2SKANudChRFklb+fhdsWR8ww4eHLBjOiYLNGw+N03hGtBNksb4uCLxrJgNIHrMwOzVtaCdfQo3NndOwXLIqs8n02XxvRddosT4euWV9/mlmpV9OaVO+Ayj4r2MTd/RFkevuGms//rcKlBNR78YY+EZNtm3rGNhOVwxrOAfX8DRany26o5OVUn75nyMrUvXEnYSQJCjQB0+6Dl3Oei6ZD961BnwM272omjCQ9ig/pfoXMpNMiC0SHtbsCuR/8ZmxKaX4ZfaPCp0+M8r/19jtli8RlvTt/qDYzxZRYLfOpUTUNVn1cYXZJ+99LEGpADc7PWIXatP5Z5Q+pvq2EOG6q9tiI0xUjUJPlC0WdJ3RfWrURyOn1n9bO+/u9W8Z5ShZI2pyDT7aDjFUgx3ASrEegdo6tvskqlSpgJXCTZWROU3QsWZ2HXXbdXolAYq9cU/6aPVk77xbwchrsJjvNhymNo46713bOvbQLXgqvhkCuXP3CLMP8sfruqy8p72fR738M30H5seyHmNUTuuR+UTQ+W9EZq/1goPZhmff57I5R+uvHP5wfP/vjpppOp1V5YI7ouccp5sRBgeaOy/Zd2mxE6eyBQA5zOoNw71axKu546AtxTEp+cDZbHh5eYN+gjiZXqLCTvjNeub5YiUkaSfTyZRE0xWZj3ZEbpJ6Cq8nOiIO7fbfFEqPcKW9lmEvNNec7tuHKlckiQdnnlaG3Au+QvIznsR8Cqbg4XOagGJBPVjfFVysUu8k+W5npUBimLH+6LH2LGl2Q4NToqJe701Is/prLwI6BUNc5rwy9Ffpiot5idW+S2RnuhUC2LA6PuUwoMQKcsJeGbBo1Lmds8gV0fihEMqMH6tCkMxR52qIxzJg4+uz7XOYWH1JZE2aKnbAd7hPR6H3mTq9fdJL17Ym6p+Vfp/wRG1V7YoTVHgie6Gy0c6jN3FLO2AZht/auJhUYOcY5K06mE27dcKUTYpAxoe/SdTgpaY+oQfC5iL6mBhs1ePxBjleynVHPbs5O/3jD8vPOc1OrLxw01avYPa+EQKpgVv18c1rWUmFg6N6R5207vqAD5Sbvd1Tp/EXrXk8TC++QA4X3QVQV3+cAoJoCid/nePRgijsOIBBV3fc5AKieQEzFEXvwai/eCvlhgT3EWiwWuAsAKPx/EAAgEAAgEAAgEAAgEAAgEAAgEAAgEAAgEAAABAIABAIABAIABAIABAIABAIABAJAHfhPgAEAek7EkD6DsgoAAAAASUVORK5CYII=";function qn(s,d){if(!(typeof window>"u")&&typeof window.gtag=="function")try{window.gtag("event",s,d)}catch{}}const Ut={formSubmit:(s,d)=>qn("form_submit",{areas:s.join(","),region:d}),phoneClick:s=>qn("phone_click",{source:s}),kakaoClick:s=>qn("kakao_click",{source:s}),priceCalcUse:(s,d)=>qn("price_calc_use",{space:s,house_type:d}),quoteSectionView:()=>qn("quote_section_view")},Lf=[{label:"포트폴리오",href:"#portfolio"},{label:"시공범위",href:"#scope"},{label:"FAQ",href:"#faq"},{label:"견적문의",href:"#quote"}],qf=[{label:"케라폭시 줄눈이란?",href:"/info/kerafoxy"},{label:"케라폭시 가격 안내",href:"/info/kerafoxy-price"},{label:"케라폭시 제품 소개",href:"/info/kerafoxy-product"},{label:"폴리우레아 vs 케라폭시 비교",href:"/info/comparison"},{label:"줄눈시공 하는 이유",href:"/info/why-grout"}];function al(){const[s,d]=k.useState(!1),[o,u]=k.useState(!1),[f,m]=k.useState(!1),[v,y]=k.useState(!1),g=k.useRef(null),h=k.useRef(!1),T=_a(),w=Vt(),B=w.pathname==="/";k.useEffect(()=>{const H=()=>d(window.scrollY>60);return window.addEventListener("scroll",H),()=>window.removeEventListener("scroll",H)},[]),k.useEffect(()=>{const H=X=>{g.current&&!g.current.contains(X.target)&&m(!1)};return document.addEventListener("mousedown",H),()=>document.removeEventListener("mousedown",H)},[]),k.useEffect(()=>{if(!o)return;const H=window.scrollY,X=document.documentElement,L=document.body,K={htmlOverflow:X.style.overflow,bodyOverflow:L.style.overflow,bodyPosition:L.style.position,bodyTop:L.style.top,bodyWidth:L.style.width};return X.style.overflow="hidden",L.style.overflow="hidden",L.style.position="fixed",L.style.top=`-${H}px`,L.style.width="100%",()=>{X.style.overflow=K.htmlOverflow,L.style.overflow=K.bodyOverflow,L.style.position=K.bodyPosition,L.style.top=K.bodyTop,L.style.width=K.bodyWidth,h.current?h.current=!1:window.scrollTo(0,H)}},[o]);const Z=H=>{h.current=!0,u(!1),B?setTimeout(()=>{const X=document.querySelector(H);X&&X.scrollIntoView({behavior:"smooth"})},0):(T("/"),setTimeout(()=>{const X=document.querySelector(H);X&&X.scrollIntoView({behavior:"smooth"})},300))},S=s||!B,q=S?"text-stone-700 hover:text-[var(--accent)]":"text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] hover:text-white",Y=S?"text-stone-900":"text-white";return n.jsxs("nav",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${S?"bg-white shadow-sm":"bg-transparent"}`,children:[n.jsxs("div",{className:"px-5 md:px-12 lg:px-20 h-12 md:h-auto md:py-4 flex items-center transition-all duration-300",children:[n.jsx("div",{className:"flex-1",children:n.jsx(yt,{to:"/",className:"flex items-center gap-3 cursor-pointer",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:n.jsx("img",{src:S?C0:bm,alt:"줄눈시공 전문 로고",className:"h-10 md:h-12 w-auto object-contain transition-opacity duration-300"})})}),n.jsx("div",{className:"flex-1 hidden md:flex justify-center",children:n.jsxs("ul",{className:"flex items-center gap-8",children:[Lf.map(H=>n.jsx("li",{children:n.jsx("button",{onClick:()=>Z(H.href),className:`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${q}`,children:H.label})},H.href)),n.jsxs("li",{ref:g,className:"relative",children:[n.jsxs("button",{onClick:()=>m(!f),className:`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1 ${w.pathname.startsWith("/info")?Y:q}`,children:["줄눈 정보",n.jsx("i",{className:`ri-arrow-down-s-line text-lg transition-transform ${f?"rotate-180":""}`})]}),f&&n.jsx("div",{className:"absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-2xl overflow-hidden w-56",style:{boxShadow:"0 4px 24px 0 rgba(0,0,0,0.10)"},children:n.jsx("ul",{className:"py-2",children:qf.map(H=>n.jsx("li",{children:n.jsx(yt,{to:H.href,onClick:()=>m(!1),className:"block px-5 py-3 text-sm text-stone-500 hover:bg-stone-100 hover:text-stone-900 transition-colors cursor-pointer",children:H.label})},H.href))})})]})]})}),n.jsx("div",{className:"flex-1 hidden md:flex items-center justify-end gap-4",children:n.jsxs("a",{href:"tel:010-8005-6674",onClick:()=>Ut.phoneClick("navbar"),className:`flex items-center gap-2 text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${S?"bg-[var(--accent)] text-white px-5 py-2.5 rounded-full hover:bg-[var(--accent-deep)]":"bg-white/10 text-white px-5 py-2.5 rounded-full border border-white/30 hover:bg-white/20 backdrop-blur-sm"}`,children:[n.jsx("i",{className:"ri-phone-line text-sm"}),"010-8005-6674"]})}),n.jsx("button",{className:`md:hidden w-8 h-8 flex items-center justify-center cursor-pointer ml-auto ${S?"text-stone-800":"text-white"}`,onClick:()=>u(!o),children:n.jsx("i",{className:`text-xl ${o?"ri-close-line":"ri-menu-line"}`})})]}),n.jsxs(n.Fragment,{children:[n.jsx("div",{className:`fixed inset-0 bg-black/60 z-40 md:hidden transition-opacity duration-300 ${o?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}`,onClick:()=>u(!1)}),n.jsxs("div",{className:`fixed top-0 right-0 h-screen w-4/6 bg-stone-100 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto md:hidden ${o?"translate-x-0":"translate-x-full"}`,children:[n.jsx("div",{className:"sticky top-0 bg-white h-12 px-5 flex items-center justify-end border-b border-stone-300",children:n.jsx("button",{onClick:()=>u(!1),className:"text-stone-700 hover:text-stone-900 cursor-pointer",children:n.jsx("i",{className:"ri-close-line text-2xl"})})}),n.jsxs("div",{className:"px-6 py-4",children:[n.jsxs("ul",{className:"space-y-3",children:[Lf.map(H=>n.jsx("li",{children:n.jsx("button",{onClick:()=>Z(H.href),className:"w-full border-b border-stone-200 pb-4 text-left text-sm font-medium text-stone-600 hover:text-[var(--accent)] cursor-pointer transition-colors",children:H.label})},H.href)),n.jsxs("li",{children:[n.jsxs("div",{className:"flex flex-row w-full text-sm font-medium text-stone-600 mb-4 items-center justify-between",children:["줄눈 정보",n.jsx("i",{className:"ri-arrow-down-s-line text-xl"})]}),n.jsx("ul",{className:"space-y-4 pl-3 border-stone-100",children:qf.map(H=>n.jsx("li",{children:n.jsx(yt,{to:H.href,onClick:()=>{h.current=!0,u(!1)},className:"text-sm font-medium text-stone-400 hover:text-[var(--accent)] cursor-pointer transition-colors block",children:H.label})},H.href))})]})]}),n.jsxs("a",{href:"tel:010-8005-6674",onClick:()=>Ut.phoneClick("navbar"),className:"call-bg mt-8 flex items-center justify-center gap-2 px-6 py-3 bg-[var(--accent)] text-white text-sm font-semibold rounded-full hover:bg-[var(--accent-deep)] transition-colors cursor-pointer w-full",children:[n.jsx("i",{className:"ri-phone-line"}),"010-8005-6674"]}),n.jsx("p",{className:"text-center text-xs text-stone-500 mt-3",children:"번호를 누르면 전화 연결 됩니다."})]})]})]})]})}const O0=[{label:"포트폴리오",href:"#portfolio"},{label:"시공범위",href:"#scope"},{label:"FAQ",href:"#faq"},{label:"견적문의",href:"#quote"}],M0=["화장실 줄눈","주방 줄눈","베란다 줄눈","현관 줄눈","수영장 줄눈","목욕탕 줄눈"];function ll(){const s=d=>{const o=document.querySelector(d);o&&o.scrollIntoView({behavior:"smooth"})};return n.jsx("footer",{className:"bg-[var(--dark)] mx-2 overflow-hidden",children:n.jsxs("div",{className:"px-6 md:px-12 lg:px-16 pt-10 pb-8",children:[n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-6 md:mb-12",children:[n.jsxs("div",{className:"lg:col-span-1",children:[n.jsx("img",{src:bm,alt:"줄눈시공 전문 로고",className:"h-10 w-auto object-contain mb-4"}),n.jsxs("p",{className:"text-stone-400 text-sm leading-relaxed mb-5",children:["집요함이 만들어 내는 완벽함, 디테일라인",n.jsx("br",{}),"완벽한 마감을 약속드립니다."]}),n.jsxs("div",{className:"space-y-2",children:[n.jsxs("div",{className:"flex items-center gap-2 text-stone-400 text-sm",children:[n.jsx("i",{className:"ri-phone-line text-stone-500"}),n.jsx("a",{href:"tel:010-8005-6674",onClick:()=>Ut.phoneClick("footer"),className:"hover:text-white transition-colors cursor-pointer",children:"010-8005-6674"})]}),n.jsxs("div",{className:"flex items-center gap-2 text-stone-400 text-sm",children:[n.jsx("i",{className:"ri-map-pin-line text-stone-500"}),n.jsx("span",{children:"서울 서초구 본마을4길 11 1층 104호"})]}),n.jsxs("div",{className:"flex items-center gap-2 text-stone-400 text-sm",children:[n.jsx("i",{className:"ri-time-line text-stone-500"}),n.jsx("span",{children:"평일 09:00 – 18:00"})]})]})]}),n.jsxs("div",{className:"hidden md:block",children:[n.jsx("h4",{className:"text-white font-bold text-sm mb-5",children:"빠른 링크"}),n.jsx("ul",{className:"space-y-3",children:O0.map(d=>n.jsx("li",{children:n.jsx("button",{onClick:()=>s(d.href),className:"text-stone-400 text-sm hover:text-white transition-colors cursor-pointer",children:d.label})},d.href))})]}),n.jsxs("div",{className:"hidden md:block",children:[n.jsx("h4",{className:"text-white font-bold text-sm mb-5",children:"시공 서비스"}),n.jsx("ul",{className:"space-y-3",children:M0.map(d=>n.jsx("li",{children:n.jsx("span",{className:"text-stone-400 text-sm",children:d})},d))})]}),n.jsxs("div",{className:"hidden md:block",children:[n.jsx("h4",{className:"text-white font-bold text-sm mb-5",children:"소셜 미디어"}),n.jsx("div",{className:"space-y-3",children:[{icon:"ri-instagram-line",label:"Instagram",href:"https://www.instagram.com"},{icon:"ri-kakao-talk-fill",label:"KakaoTalk",href:"https://pf.kakao.com"}].map(d=>n.jsxs("a",{href:d.href,target:"_blank",rel:"nofollow noreferrer",className:"flex items-center gap-3 text-stone-400 text-sm hover:text-white transition-colors cursor-pointer",children:[n.jsx("div",{className:"w-8 h-8 flex items-center justify-center bg-white/10 rounded-sm",children:n.jsx("i",{className:`${d.icon} text-sm`})}),d.label]},d.label))})]})]}),n.jsx("div",{className:"border-t border-stone-700 pt-6",children:n.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-3",children:[n.jsx("p",{className:"text-stone-500 text-xs",children:"© 2026 줄눈시공 전문. All rights reserved."}),n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx(yt,{to:"/privacy",className:"text-stone-500 text-xs hover:text-white transition-colors cursor-pointer",children:"개인정보처리방침"}),n.jsx("span",{className:"text-stone-600 text-xs",children:"사업자등록번호: 609-33-19473"})]})]})})]})})}function D0(){const[s,d]=k.useState(!1);return k.useEffect(()=>{const o=()=>{d(window.scrollY>window.innerHeight*.6)};return o(),window.addEventListener("scroll",o,{passive:!0}),()=>window.removeEventListener("scroll",o)},[]),n.jsx("div",{className:`md:hidden fixed bottom-5 right-4 z-40 flex flex-col gap-3 transition-all duration-300 ${s?"opacity-100 translate-y-0":"opacity-0 translate-y-4 pointer-events-none"}`,"aria-hidden":!s,children:n.jsx("a",{href:"tel:010-8005-6674",onClick:()=>Ut.phoneClick("floating"),className:"w-14 h-14 flex items-center justify-center rounded-full bg-[var(--accent)] text-white shadow-lg active:scale-95 transition-transform","aria-label":"전화 상담",children:n.jsx("i",{className:"ri-phone-fill text-2xl"})})})}const at={eyebrow:"오직 줄눈, 6년간 한 길",headlineL1:"손끝이 남기는",headlineAccent:"줄눈시공",headlineTail:"",headlineL3:"디테일라인",subL1:"시공 전, 후 사진으로 먼저 확인하고 결정하세요.",subL2:"무료 견적은 24시간 실시간 답변 드립니다.",ctaPrimary:"실시간 무료 견적 상담",ctaSecondary:"시공 포트폴리오 →",captionTag:"KERAPOXY",captionMeta:"프리미엄 줄눈 시공",signatureMeta:"모든 주거공간, 상업공간 시공 가능",footerItems:["2,000세대 이상 시공 경력","하루 한집 시공","2년 무상 AS"],scrollLabel:"SCROLL",srHeading:"서울·경기 줄눈시공 전문 디테일라인 — 화장실·주방·베란다·현관 케라폭시 줄눈 시공"};function Gf(s){const d=document.querySelector(s);d&&d.scrollIntoView({behavior:"smooth"})}function _0(){return n.jsxs("section",{className:"hero-b-wrap","aria-label":"히어로",children:[n.jsx("div",{className:"tile-floor","aria-hidden":"true",children:n.jsx("div",{className:"tile-floor__plane",children:n.jsx("div",{className:"tile-floor__shine"})})}),n.jsx("div",{className:"hero-b__tint","aria-hidden":"true"}),n.jsx("div",{className:"hero-b__vignette","aria-hidden":"true"}),n.jsx("div",{className:"hero-b__glow","aria-hidden":"true"}),n.jsx("div",{className:"hero-b__grain","aria-hidden":"true"}),n.jsx("div",{className:"hero-b__padded",children:n.jsxs("div",{className:"hero-b",children:[n.jsx("h2",{className:"sr-only",children:at.srHeading}),n.jsxs("div",{className:"hero-b__lead",children:[n.jsxs("div",{className:"hero-b__eyebrow",children:[n.jsx("span",{className:"hero-b__eyebrow-line","aria-hidden":"true"}),n.jsx("span",{children:at.eyebrow})]}),n.jsxs("h1",{className:"hero-b__headline",children:[at.headlineL1,n.jsx("br",{}),n.jsx("em",{children:at.headlineAccent}),at.headlineTail,n.jsx("br",{}),at.headlineL3]}),n.jsxs("p",{className:"hero-b__sub",children:[at.subL1,n.jsx("br",{}),at.subL2]}),n.jsxs("div",{className:"hero-b__cta-row",children:[n.jsxs("button",{type:"button",className:"hero-b__btn",onClick:()=>Gf("#quote"),children:[at.ctaPrimary,n.jsx("span",{className:"hero-b__btn-arrow","aria-hidden":"true",children:"→"})]}),n.jsx("button",{type:"button",className:"hero-b__btn-link",onClick:()=>Gf("#portfolio"),children:at.ctaSecondary})]})]}),n.jsxs("div",{className:"hero-b__caption",children:[n.jsxs("div",{className:"hero-b__caption-row",children:[n.jsx("span",{className:"hero-b__caption-dot","aria-hidden":"true"}),n.jsx("span",{className:"hero-b__caption-after",children:at.captionTag})]}),n.jsx("div",{className:"hero-b__caption-meta",children:at.captionMeta})]}),n.jsx("div",{className:"hero-b__signature",children:n.jsx("div",{className:"hero-b__signature-meta",children:at.signatureMeta})}),n.jsxs("div",{className:"hero-b__footer-meta",children:[n.jsx("ul",{className:"hero-b__footer-items",children:at.footerItems.map(s=>n.jsx("li",{children:s},s))}),n.jsxs("div",{className:"hero-b__scroll","aria-hidden":"true",children:[n.jsx("span",{children:at.scrollLabel}),n.jsx("span",{className:"hero-b__scroll-bar"})]})]})]})})]})}const Kn={all:"all",itemOne:"itemOne",itemTwo:"itemTwo"},Ye={rawPosition:"--rcs-raw-position",currentPosition:"--rcs-current-position",boundsPadding:"--rcs-bounds-padding",handleColor:"--rcs-handle-color"},hr={capture:!1,passive:!0},wr={capture:!0,passive:!1};let Gn=(function(s){return s.ARROW_LEFT="ArrowLeft",s.ARROW_RIGHT="ArrowRight",s.ARROW_UP="ArrowUp",s.ARROW_DOWN="ArrowDown",s})({});const Nr=(s,d,o,u)=>{let f=k.useRef(void 0);k.useEffect(()=>{f.current=d},[d]),k.useEffect(()=>{if(!o?.addEventListener)return;let m=v=>f.current?.(v);return o.addEventListener(s,m,u),()=>{o.removeEventListener(s,m,u)}},[s,o,u])},vm=k.createContext(null),U0=({children:s,...d})=>n.jsx(vm.Provider,{value:d,children:s}),Tr=()=>{let s=k.useContext(vm);if(!s)throw Error("useReactCompareSliderContext must be used within the Provider component");return s},Vf=({flip:s})=>{let d={width:"0.85rem",height:"0.85rem",clipPath:"polygon(100% 0%, 100% 100%, 30% 50%)",rotate:s?"180deg":"0deg",outline:`0.5rem solid var(${Ye.handleColor})`,outlineOffset:"-0.5rem"};return n.jsx("div",{"aria-hidden":"true",className:"__rcs-handle-arrow",style:d})},B0=({className:s="__rcs-handle-root",buttonStyle:d,linesStyle:o,style:u,...f})=>{let{disabled:m,portrait:v}=Tr(),y={boxSizing:"border-box",position:"relative",display:"inline-flex",flexDirection:v?"row":"column",placeItems:"center",width:v?"100%":void 0,height:v?void 0:"100%",cursor:m?"not-allowed":v?"ns-resize":"ew-resize",pointerEvents:"none",[Ye.handleColor]:"rgba(255, 255, 255, 1)",...u},g={flexGrow:1,height:v?2:"100%",width:v?"100%":2,outline:`1px solid var(${Ye.handleColor})`,outlineOffset:-1,pointerEvents:"auto",boxShadow:"0 0 4px rgba(0,0,0,.5)",...o},h={direction:"ltr",display:"grid",gridAutoFlow:"column",gap:"0.5rem",placeContent:"center",flexShrink:0,width:"3.5rem",height:"3.5rem",borderRadius:"50%",border:`2px solid var(${Ye.handleColor})`,color:"inherit",pointerEvents:"auto",backdropFilter:"blur(0.5rem)",WebkitBackdropFilter:"blur(0.5rem)",backgroundColor:"rgba(0, 0, 0, 0.125)",boxShadow:"0 0 4px rgba(0,0,0,.35)",transform:v?"rotate(90deg)":void 0,...d};return n.jsxs("div",{"data-rcs":"handle",...f,className:s,style:y,children:[n.jsx("div",{className:"__rcs-handle-line",style:g}),n.jsxs("div",{className:"__rcs-handle-button",style:h,children:[n.jsx(Vf,{}),n.jsx(Vf,{flip:!0})]}),n.jsx("div",{className:"__rcs-handle-line",style:g})]})},H0=({display:s="block",width:d="100%",height:o="100%",maxWidth:u="100%",boxSizing:f="border-box",objectFit:m="cover",objectPosition:v="center center",...y}={})=>({display:s,width:d,height:o,maxWidth:u,boxSizing:f,objectFit:m,objectPosition:v,...y}),Qf=({alt:s,style:d,...o})=>{let u=H0(d);return n.jsx("img",{"data-rcs":"image",...o,alt:s,style:u})},Y0=({style:s,...d})=>{let{disabled:o,portrait:u,position:f,handleRootRef:m,onHandleRootClick:v,onHandleRootKeyDown:y}=Tr(),g={WebkitAppearance:"none",MozAppearance:"none",WebkitTapHighlightColor:"transparent",boxSizing:"border-box",position:"absolute",display:"flex",flexDirection:u?"row":"column",placeItems:"center",contain:"layout",top:u?"-50%":void 0,left:u?void 0:"-50%",width:"100%",height:"100%",background:"none",border:0,padding:0,pointerEvents:"none",appearance:"none",outline:0,zIndex:1,translate:u?`0 var(${Ye.currentPosition}) 0`:`var(${Ye.currentPosition}) 0 0`,backfaceVisibility:"hidden",willChange:"translate",...s};return Nr("keydown",y,m.current,wr),Nr("click",v,m.current,wr),n.jsx("div",{ref:m,tabIndex:0,"aria-label":"Click and drag or focus and use arrow keys to change the position of the slider","aria-orientation":u?"vertical":"horizontal","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":f.current,"aria-disabled":o,"data-rcs":"handle-root",role:"slider",style:g,...d})},L0=({itemClip:s,portrait:d})=>s===Kn.itemOne?d?`inset(0px 0px calc(100% - var(${Ye.currentPosition})) 0px)`:`inset(0px calc(100% - var(${Ye.currentPosition})) 0px 0px)`:s===Kn.itemTwo?d?`inset(var(${Ye.currentPosition}) 0px 0px 0px)`:`inset(0px 0px 0px var(${Ye.currentPosition}))`:"none",Zf=({item:s,style:d,...o})=>{let{clip:u,portrait:f}=Tr(),m={KhtmlUserSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",gridArea:"1 / 1",maxWidth:"100%",overflow:"hidden",clipPath:L0({itemClip:u===Kn.all||u===s?s:void 0,portrait:f}),boxSizing:"border-box",transform:"translateZ(0)",userSelect:"none",zIndex:s===Kn.itemOne?1:void 0,willChange:"clip-path",...d};return n.jsx("div",{"data-rcs":"item","data-rcs-item":s,...o,style:m})},q0=`clamp(var(${Ye.boundsPadding}), var(${Ye.rawPosition}) - var(${Ye.boundsPadding}) + var(${Ye.boundsPadding}), calc(100% - var(${Ye.boundsPadding})))`,G0=({style:s,...d})=>{let{browsingContext:o,boundsPadding:u,changePositionOnHover:f,clip:m,isDragging:v,portrait:y,position:g,onTouchEnd:h,onPointerDown:T,onPointerMove:w,onPointerUp:B,interactiveTarget:Z,rootRef:S,transition:q,canTransition:Y}=Tr(),H={position:"relative",boxSizing:"border-box",display:"grid",maxWidth:"100%",maxHeight:"100%",overflow:"hidden",cursor:v?y?"ns-resize":"ew-resize":void 0,touchAction:"pan-y",userSelect:"none",KhtmlUserSelect:"none",msUserSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",transition:Y&&q?`${Ye.rawPosition} ${q}`:"none",[Ye.rawPosition]:`${g.current}%`,[Ye.boundsPadding]:u,[Ye.currentPosition]:q0,...s};return Nr("touchend",h,Z,wr),Nr("pointerdown",T,Z,wr),k.useEffect(()=>{let X=S.current,L=K=>{v||B(K)};return f&&(X.addEventListener("pointermove",w,hr),X.addEventListener("pointerleave",L,hr)),()=>{X.removeEventListener("pointermove",w),X.removeEventListener("pointerleave",L)}},[f,w,B,v,S]),k.useEffect(()=>{if(v)return o.addEventListener("pointermove",w,hr),o.addEventListener("pointerup",B,hr),()=>{o?.removeEventListener("pointermove",w),o?.removeEventListener("pointerup",B)}},[w,B,v,o]),n.jsx("div",{ref:S,style:H,"data-rcs":"root","data-rcs-clip":m,...d})};(()=>{try{typeof CSS<"u"&&CSS.registerProperty({name:Ye.rawPosition,syntax:"<percentage>",inherits:!0,initialValue:"50%"})}catch(s){console.debug("[react-compare-slider] register CSS property:",s)}})();const V0=()=>globalThis.matchMedia?.("(prefers-reduced-motion: no-preference)")?.matches?"0.15s ease-out":"none",Q0=()=>!!globalThis.matchMedia?.("(pointer: coarse)")?.matches,Z0=({boundsPadding:s="0px",browsingContext:d=globalThis,changePositionOnHover:o=!1,clip:u=Kn.all,defaultPosition:f=50,disabled:m=!1,keyboardIncrement:v="5%",onlyHandleDraggable:y=Q0(),onPositionChange:g,portrait:h=!1,transition:T=V0()}={})=>{let w=k.useRef(null),B=k.useRef(null),Z=k.useRef(f),[S,q]=k.useState(!1),[Y,H]=k.useState(!0),[X,L]=k.useState(null),K=k.useCallback($=>{let ie=Math.min(Math.max($,0),100);w.current?.style.setProperty(Ye.rawPosition,`${ie}%`),B.current?.setAttribute("aria-valuenow",`${Math.round(ie)}`),Z.current=ie,g?.(ie)},[g]),ne=k.useCallback(function({x:$,y:ie}){let{width:Oe,height:ke,top:R,left:G}=w.current.getBoundingClientRect();Oe===0||ke===0||K((h?ie-R-d.scrollY:$-G-d.scrollX)/(h?ke:Oe)*100)},[d,h,K]),F=k.useCallback($=>{$.preventDefault(),!(m||$.button!==0)&&(ne({x:$.pageX,y:$.pageY}),q(!0),H(!0))},[m,ne]),P=k.useCallback(function($){H(!1),ne({x:$.pageX,y:$.pageY})},[ne]),je=k.useCallback($=>{q(!1),H(!0)},[]),U=k.useCallback($=>{q(!1),H(!0)},[]),le=k.useCallback($=>{$.preventDefault(),$.currentTarget?.focus()},[]),re=k.useCallback($=>{if(!Object.values(Gn).includes($.key))return;$.preventDefault(),H(!0);let ie=typeof v=="string"?Number.parseFloat(v):v/w.current?.getBoundingClientRect().width*100;K((h?$.key===Gn.ARROW_LEFT||$.key===Gn.ARROW_DOWN:$.key===Gn.ARROW_RIGHT||$.key===Gn.ARROW_UP)?Z.current+ie:Z.current-ie)},[v,h,K]);return k.useLayoutEffect(()=>{L(y?B.current:w.current)},[y]),k.useEffect(()=>{K(f)},[f,K]),{boundsPadding:s,browsingContext:d,changePositionOnHover:o,clip:u,defaultPosition:f,disabled:m,keyboardIncrement:v,onlyHandleDraggable:y,portrait:h,transition:T,onHandleRootKeyDown:re,onPointerDown:F,onPointerMove:P,onPointerUp:je,onTouchEnd:U,onHandleRootClick:le,canTransition:Y,isDragging:S,position:Z,setPosition:K,setPositionFromBounds:ne,rootRef:w,handleRootRef:B,interactiveTarget:X}},K0=({boundsPadding:s,browsingContext:d,changePositionOnHover:o,clip:u,defaultPosition:f,disabled:m,handle:v,itemOne:y,itemTwo:g,keyboardIncrement:h,onPositionChange:T,onlyHandleDraggable:w,portrait:B,transition:Z,...S})=>n.jsx(U0,{...Z0({boundsPadding:s,browsingContext:d,changePositionOnHover:o,clip:u,defaultPosition:f,disabled:m,keyboardIncrement:h,onPositionChange:T,onlyHandleDraggable:w,portrait:B,transition:Z}),children:n.jsxs(G0,{...S,children:[n.jsx(Zf,{item:"itemOne",children:y}),n.jsx(Zf,{item:"itemTwo",children:g}),n.jsx(Y0,{children:v||n.jsx(B0,{})})]})}),X0=["전체","현관","화장실","베란다","거실","주방","수영장","목욕탕"],Kf=[{id:1,category:"화장실",title:"강남구 아파트 화장실",description:"노후된 타일 줄눈 전면 교체, 방수 처리 완료",location:"서울 강남구",image:"https://readdy.ai/api/search-image?query=clean%20modern%20bathroom%20white%20tiles%20with%20perfect%20grout%20lines%20fresh%20renovation%20bright%20natural%20light%20marble%20effect%20minimalist%20Korean%20apartment%20interior%20clean%20background&width=600&height=800&seq=p1&orientation=portrait"},{id:2,category:"주방",title:"분당 주방 타일 줄눈",description:"주방 벽면 및 바닥 줄눈 보수, 항균 줄눈재 시공",location:"경기 성남시",image:"https://readdy.ai/api/search-image?query=modern%20kitchen%20white%20subway%20tiles%20clean%20grout%20lines%20renovation%20bright%20minimalist%20Korean%20home%20interior%20countertop%20simple%20background&width=600&height=800&seq=p2&orientation=portrait"},{id:3,category:"베란다",title:"마포구 베란다 시공",description:"베란다 바닥 전체 줄눈 제거 후 방수 줄눈재 재시공",location:"서울 마포구",image:"https://readdy.ai/api/search-image?query=apartment%20balcony%20clean%20tile%20floor%20grout%20renovation%20modern%20minimalist%20Korean%20home%20natural%20light%20bright%20clean%20simple%20background&width=600&height=800&seq=p3&orientation=portrait"},{id:4,category:"현관",title:"송파구 아파트 현관",description:"현관 대리석 줄눈 복원, 크리스탈 마감재 사용",location:"서울 송파구",image:"https://readdy.ai/api/search-image?query=apartment%20entrance%20hallway%20marble%20tiles%20clean%20grout%20renovation%20modern%20Korean%20interior%20elegant%20bright%20neutral%20background&width=600&height=800&seq=p4&orientation=portrait"},{id:5,category:"수영장",title:"강동구 수영장 줄눈",description:"수중 전용 방수 줄눈재 시공, 균열 방지 처리",location:"서울 강동구",image:"https://readdy.ai/api/search-image?query=indoor%20swimming%20pool%20blue%20tiles%20clean%20grout%20renovation%20modern%20facility%20clear%20water%20reflection%20professional%20finish%20simple%20background&width=600&height=800&seq=p5&orientation=portrait"},{id:6,category:"거실",title:"용인 거실 바닥 시공",description:"거실 전체 포세린 타일 줄눈 교체, 무수축 시공",location:"경기 용인시",image:"https://readdy.ai/api/search-image?query=modern%20living%20room%20large%20format%20floor%20tiles%20clean%20thin%20grout%20lines%20renovation%20minimalist%20Korean%20apartment%20interior%20neutral%20background&width=600&height=800&seq=p6&orientation=portrait"},{id:7,category:"목욕탕",title:"인천 목욕탕 전면 시공",description:"상업용 목욕탕 전체 줄눈 교체, 곰팡이 방지 처리",location:"인천 남동구",image:"https://readdy.ai/api/search-image?query=public%20bath%20spa%20white%20ceramic%20tiles%20clean%20grout%20renovation%20professional%20facility%20hygienic%20clean%20bright%20simple%20background&width=600&height=800&seq=p7&orientation=portrait"},{id:8,category:"화장실",title:"판교 오피스 화장실",description:"사무용 건물 화장실 전층 줄눈 일괄 시공",location:"경기 성남시",image:"https://readdy.ai/api/search-image?query=office%20restroom%20modern%20gray%20tiles%20clean%20grout%20professional%20renovation%20commercial%20building%20interior%20bright%20neutral%20simple%20background&width=600&height=800&seq=p8&orientation=portrait"}];function J0(){const[s,d]=k.useState("전체"),[o,u]=k.useState(null);k.useEffect(()=>{if(!o)return;const m=T=>{T.key==="Escape"&&u(null)},v=window.scrollY,y=document.documentElement,g=document.body,h=y.style.scrollBehavior;return y.style.overflow="hidden",g.style.overflow="hidden",g.style.position="fixed",g.style.top=`-${v}px`,g.style.left="0",g.style.right="0",g.style.width="100%",window.addEventListener("keydown",m),()=>{y.style.overflow="",g.style.overflow="",g.style.position="",g.style.top="",g.style.left="",g.style.right="",g.style.width="",y.style.scrollBehavior="auto",window.scrollTo(0,v),y.style.scrollBehavior=h,window.removeEventListener("keydown",m)}},[o]);const f=s==="전체"?Kf:Kf.filter(m=>m.category===s);return n.jsxs(n.Fragment,{children:[n.jsx("section",{id:"portfolio",className:"py-20 px-6 md:px-12 lg:px-20 bg-[var(--bg)]",children:n.jsxs("div",{className:"max-w-7xl mx-auto",children:[n.jsxs("div",{className:"mb-10",children:[n.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Our Work"}),n.jsx("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:"완성된 프로젝트"}),n.jsx("p",{className:"text-[var(--muted)] mt-1 sm:mt-3 text-base",children:"고객님의 공간을 완벽하게 되살렸습니다"})]}),n.jsx("div",{className:"flex flex-wrap gap-2 mb-10",children:X0.map(m=>n.jsx("button",{onClick:()=>d(m),className:`px-5 py-2 rounded-sm text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${s===m?"bg-[var(--accent)] text-white":"bg-white text-[var(--muted)] border border-[var(--line)] hover:border-[var(--line-strong)]"}`,children:m},m))}),n.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4",children:f.map(m=>n.jsxs("div",{onClick:()=>u(m),className:"group relative rounded-sm overflow-hidden cursor-pointer aspect-[3/4]",children:[n.jsx("img",{src:m.image,alt:m.title,className:"w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"}),n.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"}),m.before&&m.after&&n.jsxs("span",{className:"absolute top-2 right-2 inline-flex items-center gap-1 bg-[var(--accent)] text-white text-[10px] font-medium px-2 py-0.5 rounded-sm uppercase tracking-[0.12em]",children:[n.jsx("i",{className:"ri-contrast-2-line"}),"시공 전·후"]}),n.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-4",children:[n.jsx("span",{className:"inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-sm mb-2",children:m.category}),n.jsx("h3",{className:"text-white font-bold text-sm leading-snug",children:m.title}),n.jsx("p",{className:"text-white/70 text-xs mt-1",children:m.location})]})]},m.id))})]})}),o&&n.jsx("div",{className:"fixed inset-0 z-[100] bg-black/80 flex items-center justify-center px-4",onClick:()=>u(null),children:n.jsxs("div",{className:"relative w-full max-w-3xl",onClick:m=>m.stopPropagation(),children:[n.jsx("button",{type:"button",onClick:()=>u(null),className:"absolute -top-11 right-0 w-9 h-9 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors","aria-label":"닫기",children:n.jsx("i",{className:"ri-close-line text-xl"})}),n.jsx("div",{className:"rounded-sm overflow-hidden shadow-2xl bg-[var(--dark)]",children:o.before&&o.after?n.jsx(K0,{itemOne:n.jsx(Qf,{src:o.before,alt:`${o.title} 시공 전`,style:{objectFit:"cover"}}),itemTwo:n.jsx(Qf,{src:o.after,alt:`${o.title} 시공 후`,style:{objectFit:"cover"}}),style:{width:"100%",maxHeight:"80vh"}}):n.jsx("img",{src:o.image,alt:o.title,onClick:()=>u(null),className:"w-full max-h-[80vh] object-contain cursor-zoom-out"})}),n.jsxs("div",{className:"mt-3 text-white",children:[n.jsx("p",{className:"text-sm font-semibold",children:o.title}),n.jsx("p",{className:"text-xs text-white/70 mt-1",children:o.location})]})]})})]})}const W0=[{n:"01",t:"대표 직접 시공",en:"Founder on every site",d:"외주·하청 없습니다. 첫 현장부터 마지막 줄눈까지 대표가 직접 와서 시공합니다. 7년차, 2,400 가구의 손맛 그대로."},{n:"02",t:"KC 인증 친환경 자재",en:"Certified, low-VOC",d:"케라폭시·정품 폴리우레아만 사용합니다. 각 시공한 자재서에 가족이 있는 동네 수준의 친환경 등급을 고집합니다."},{n:"03",t:"2년 무상 A/S · 서면",en:"2-year written warranty",d:"에폭시 계열 자재 시공에 한해 시공 후 2년간 무상 재시공. 들뜸·변색·곰팡이가 발생하면 서면 보증서대로 책임집니다."},{n:"04",t:"정밀 기계 작업",en:"Calibrated tooling",d:"커터·믹서·트랜퍼스 — 도구 하나하나를 매 현장 캘리브레이션. 균일한 폭, 균일한 마감, 균일한 광택."}];function F0(){return n.jsxs("section",{id:"why",className:"relative overflow-hidden bg-[var(--dark)] py-20 px-6 md:px-12 lg:px-20",children:[n.jsx("div",{className:"why-bg","aria-hidden":"true"}),n.jsxs("div",{className:"relative max-w-7xl mx-auto",children:[n.jsxs("div",{className:"mb-10",children:[n.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Why Detailline"}),n.jsxs("h2",{className:"text-4xl md:text-5xl text-[var(--on-dark)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:["싸지 않습니다. 대신",n.jsx("br",{}),"10년 후에도 그 자리에 있습니다."]}),n.jsxs("p",{className:"text-white/70 mt-1 sm:mt-3 text-base max-w-[56ch]",children:["저희는 가장 싼 업체가 아닙니다. 가장 오래 가게 만드는 업체입니다.",n.jsx("br",{}),"아래 네 가지는 디테일라인이 단 한 번도 타협한 적 없는 기준입니다."]})]}),n.jsx("div",{className:"why-grid mt-12",children:W0.map(s=>n.jsxs("div",{className:"why-cell",children:[n.jsxs("span",{className:"why-cell-num",children:["— ",s.n]}),n.jsx("h3",{className:"why-cell-title",children:s.t}),n.jsx("p",{className:"why-cell-en",children:s.en}),n.jsx("p",{className:"why-cell-desc",children:s.d})]},s.n))}),n.jsxs("div",{className:"why-foot",children:[n.jsx("p",{className:"why-quote-text",children:"“줄눈은 결국 사람이 합니다. 그 위에 누가 잡고 있느냐가 10년을 가릅니다.”"}),n.jsx("span",{className:"why-quote-caption",children:"— 대표 제이슨 —"})]})]}),n.jsx("style",{children:$0})]})}const $0=`
.why-bg {
  position: absolute;
  inset: 0;
  opacity: 0.5;
  pointer-events: none;
  background:
    radial-gradient(60% 50% at 80% 10%, rgba(255,255,255,0.04), transparent 60%),
    radial-gradient(60% 50% at 10% 100%, rgba(255,255,255,0.03), transparent 60%);
}

/* ===== 4-cell grid ===== */
.why-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  border-top: 1px solid var(--dark-line);
}
@media (max-width: 980px) {
  .why-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .why-grid { grid-template-columns: 1fr; }
}

.why-cell {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 48px 36px 20px;
  border-right: 1px solid var(--dark-line);
}
.why-cell:last-child { border-right: none; }

@media (max-width: 980px) {
  .why-cell { padding: 40px 28px 48px; }
  /* 2x2 grid: remove right border on 2nd col, add bottom border on first row */
  .why-cell:nth-child(2n) { border-right: none; }
  .why-cell:nth-child(-n+2) { border-bottom: 1px solid var(--dark-line); }
}
@media (max-width: 640px) {
  .why-cell {
    padding: 36px 4px 40px;
    border-right: none;
    border-bottom: 1px solid var(--dark-line);
  }
  .why-cell:last-child { border-bottom: none; }
}

.why-cell-num {
  display: block;
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 20px;
}

.why-cell-title {
  font-size: 22px;
  font-weight: 500;
  color: var(--on-dark);
  margin: 0 0 6px;
  letter-spacing: -0.01em;
  line-height: 1.35;
}

.why-cell-en {
  font-family: 'Noto Serif KR', Georgia, serif;
  font-style: italic;
  font-size: 15px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.42);
  margin: 0 0 24px;
}

.why-cell-desc {
  font-size: 14.5px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
  margin: auto 0 0;
}

/* ===== Footer ===== */
.why-foot {
  margin-top: 60px;
  padding-top: 28px;
  border-top: 1px solid var(--dark-line);
  text-align: center;
}

.why-quote-text {
  font-family: 'Noto Serif KR', Georgia, serif;
  font-style: italic;
  font-size: 22px;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.78);
  margin: 0 0 10px;
  font-weight: 400;
  white-space: nowrap;
}
.why-quote-caption {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-style: normal;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.45);
}

@media (max-width: 900px) {
  .why-quote-text { white-space: normal; font-size: 19px; }
}
`,I0="/assets/bathroom-qafbnYCD.JPG",P0="/assets/outdoor_wc-CJQL97Jp.JPG",eb="/assets/living-BQx9vWF-.jpg",tb="/assets/entrance-D-gIu59c.jpg",ab="/assets/veranda-BQTujKkw.jpg",lb="/assets/commercial-BUQpqBDH.jpg",nb=[{n:"01",t:"욕실 · 화장실",en:"Bathroom",d:"에폭시 계열 전용. 물이 닿는 환경엔 폴리우레아 시공 불가 → 2년 무상 A/S 대상.",tag:"에폭시 계열",photo:I0},{n:"02",t:"외부 화장실",en:"Outdoor WC",d:"내부 화장실과 동일 → 에폭시 계열만 시공. 물 접촉 환경에서 폴리우레아 시공 불가.",tag:"에폭시 계열",photo:P0},{n:"03",t:"거실",en:"Living",d:"바닥 줄눈. 20평대 기준 폴리우레아 100만원 · 에폭시 150만원. 30평+ 별도 견적.",tag:"에폭시 / 폴리우레아",photo:eb},{n:"04",t:"현관",en:"Entrance",d:"첫인상을 결정짓는 1평. 외부 접촉 폴리우레아 가성비 선택 권장.",tag:"폴리우레아 권장",photo:tb},{n:"05",t:"베란다",en:"Veranda",d:"결로·온도차에 폴리우레아 권장. 빠른 경화 2~4시간 마무리.",tag:"폴리우레아 권장",photo:ab},{n:"06",t:"상업 공간",en:"Commercial",d:"카페·매장·호텔·수영장. 야간·새벽 시공 협의 가능. 환경별 자재 매칭.",tag:"맞춤 자재",photo:lb}];function ib(){return n.jsxs("section",{id:"scope",className:"scope-section bg-[var(--bg)] py-20 px-6 md:px-12 lg:px-20",children:[n.jsxs("div",{className:"max-w-7xl mx-auto",children:[n.jsxs("div",{className:"mb-10",children:[n.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Scope"}),n.jsxs("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:["줄눈이 필요한 ",n.jsx("br",{}),n.jsx("span",{className:"text-[var(--accent)]",children:"모든 곳에"})]}),n.jsxs("p",{className:"text-[var(--muted)] mt-1 sm:mt-3 text-base max-w-[56ch]",children:["주거 · 상업 · 시설까지. 디테일라인은 환경별로 자재와 시공 방식을 다르게 가져갑니다.",n.jsx("br",{}),"한 가지 방법으로 모든 곳을 시공하지 않습니다."]})]}),n.jsx("div",{className:"scope-grid mt-12",children:nb.map(s=>n.jsxs("article",{className:"scope-card",children:[n.jsxs("div",{className:`scope-imgph ${s.photo?"has-photo":""}`,children:[s.photo?n.jsx("img",{src:s.photo,alt:s.t,className:"scope-imgph-img",loading:"lazy"}):n.jsx("span",{className:"scope-imgph-label","aria-hidden":"true",children:s.en.toUpperCase()}),n.jsx("span",{className:"scope-imgph-corner","aria-hidden":"true",children:s.n})]}),n.jsxs("div",{className:"scope-meta",children:[n.jsxs("span",{className:"scope-meta-mono",children:["— ",s.n," · ",s.en.toUpperCase()]}),n.jsx("h3",{className:"scope-meta-title",children:s.t}),n.jsx("p",{className:"scope-meta-body",children:s.d}),n.jsxs("span",{className:"scope-meta-tag",children:[n.jsx("span",{className:"scope-tag-dot","aria-hidden":"true"}),s.tag]})]})]},s.n))})]}),n.jsx("style",{children:rb})]})}const rb=`
.scope-section {
  color: var(--ink);
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
}

/* ===== Card grid ===== */
.scope-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px 32px;
}
@media (max-width: 980px) {
  .scope-grid { grid-template-columns: repeat(2, 1fr); gap: 40px 24px; }
}

.scope-card {
  display: flex;
  flex-direction: column;
}

/* ===== Mobile: horizontal scroll-snap carousel ===== */
@media (max-width: 560px) {
  .scope-grid {
    display: flex;
    grid-template-columns: none;
    gap: 16px;
    overflow-x: auto;
    overflow-y: visible;
    scroll-snap-type: x mandatory;
    scroll-padding-left: 20px;
    /* bleed past section padding so cards can edge-peek */
    margin-left: -20px;
    margin-right: -20px;
    padding: 4px 20px 8px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .scope-grid::-webkit-scrollbar { display: none; }
  .scope-card {
    flex: 0 0 78%;
    min-width: 0;
    scroll-snap-align: start;
  }
}

/* ===== Image / placeholder ===== */
.scope-imgph {
  position: relative;
  aspect-ratio: 4 / 5;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
  background:
    radial-gradient(120% 80% at 30% 20%, rgba(255,255,255,0.06), transparent 50%),
    radial-gradient(100% 70% at 80% 100%, rgba(138,106,76,0.18), transparent 60%),
    linear-gradient(180deg, #221b13 0%, #18130e 60%, #120e09 100%);
  color: var(--on-dark);
  display: flex;
  align-items: center;
  justify-content: center;
}
.scope-imgph.has-photo {
  background: var(--dark);
}
.scope-imgph-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.scope-imgph.has-photo::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 30%);
  pointer-events: none;
}
.scope-imgph-label {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: clamp(13px, 1.4vw, 17px);
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(243, 236, 225, 0.78);
}
.scope-imgph-corner {
  position: absolute;
  top: 14px;
  right: 16px;
  z-index: 1;
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: 0.14em;
  color: rgba(243, 236, 225, 0.7);
}

/* ===== Meta ===== */
.scope-meta {
  padding-top: 20px;
}
.scope-meta-mono {
  display: block;
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
  margin-bottom: 8px;
}
.scope-meta-title {
  font-size: 19px;
  font-weight: 500;
  color: var(--ink);
  margin: 0 0 8px;
  letter-spacing: -0.01em;
  line-height: 1.35;
}
.scope-meta-body {
  font-size: 14px;
  line-height: 1.6;
  color: var(--muted);
  margin: 0 0 14px;
}
.scope-meta-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  width: fit-content;
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  border-top: 1px solid var(--line);
  padding-top: 8px;
}
.scope-tag-dot {
  width: 5px;
  height: 5px;
  background: var(--accent);
  display: inline-block;
  border-radius: 0;
}
`,sb="/assets/re_1-iaNcuT_7.jpg",cb="/assets/re_2-CcDcgcOi.jpg",ob="/assets/re_3-DPjtmN0S.jpg",ub=[{star:5,t:"줄눈은 다 똑같은 줄 알았는데",name:"최OO 고객님",photo:{label:"BANPO",corner:"거실 특",src:sb},body:"다른 곳에서 한 줄눈이 2년만에 변색됐어요. 디테일라인은 하루 종일 걸렸지만 마감이 차원이 다릅니다. 모서리, 코너, 실리콘까지 손이 갔어요. 비싸지만 다시 하라면 또 합니다."},{star:5,t:"대표님이 직접 오십니다",name:"정OO 고객님",photo:{label:"HANNAM",corner:"욕실",src:cb},body:"견적부터 시공, A/S 안내까지 같은 분이세요. 중간에 누구한테 다시 설명할 필요가 없습니다. 시공도 깔끔하고, 시공 후에도 친절히 안내해 주시고요."},{star:5,t:"2년 보증서 진짜 줍니다",name:"강OO 고객님",photo:{label:"JAMSIL",corner:"욕실",src:ob},body:"대부분 구두 보증인데 여기는 서면으로 보증서를 줍니다. 솔직히 그거 하나만으로도 결정 났어요. 시공도 깔끔하고 청소까지 다 해주고 가시는 게 인상 깊었습니다."}];function db({n:s}){return n.jsx("div",{className:"rev-stars",role:"img","aria-label":`별점 5점 만점에 ${s}점`,children:[0,1,2,3,4].map(d=>n.jsx("svg",{className:d<s?"rev-star rev-star-filled":"rev-star rev-star-empty",width:"13",height:"13",viewBox:"0 0 13 13","aria-hidden":"true",children:n.jsx("path",{d:"M6.5 0l1.8 4.3 4.7.4-3.6 3 1.1 4.6L6.5 9.9 2.5 12.3l1.1-4.6L0 4.7l4.7-.4z"})},d))})}function pb(){return n.jsxs("section",{id:"reviews",className:"rev-section bg-[var(--bg-2)] py-20 px-6 md:px-12 lg:px-20",children:[n.jsxs("div",{className:"max-w-7xl mx-auto",children:[n.jsxs("div",{className:"mb-10",children:[n.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Reviews"}),n.jsxs("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:[n.jsx("span",{className:"md:block text-[var(--accent)]",children:"지금까지 2,000세대 이상의"})," ",n.jsx("span",{className:"md:block",children:"가족이 맡겨 주셨습니다"})]}),n.jsxs("p",{className:"text-[var(--muted)] mt-1 sm:mt-3 text-base max-w-[56ch]",children:["실제 시공 후 30일 내 작성된 후기 중 일부입니다.",n.jsx("br",{}),"좋은 말씀도, 아쉬운 말씀도 모두 받고 있습니다."]})]}),n.jsx("div",{className:"rev-grid mt-12",children:ub.map(s=>n.jsxs("article",{className:"rev-card",children:[n.jsx("div",{className:"rev-card-photo",children:n.jsxs("div",{className:`rev-imgph ${s.photo.src?"has-photo":""}`,children:[s.photo.src?n.jsx("img",{src:s.photo.src,alt:`${s.photo.label} · ${s.photo.corner}`,className:"rev-imgph-img",loading:"lazy"}):n.jsx("span",{className:"rev-imgph-label","aria-hidden":"true",children:s.photo.label}),n.jsx("span",{className:"rev-imgph-corner","aria-hidden":"true",children:s.photo.corner})]})}),n.jsxs("div",{className:"rev-card-body",children:[n.jsx(db,{n:s.star}),n.jsxs("h3",{className:"rev-card-title",children:["“",s.t,"”"]}),n.jsx("p",{className:"rev-card-text",children:s.body}),n.jsx("div",{className:"rev-card-footer",children:n.jsx("div",{className:"rev-card-name",children:s.name})})]})]},s.name))})]}),n.jsx("style",{children:fb})]})}const fb=`
.rev-section {
  color: var(--ink);
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
}

/* ===== Card grid ===== */
.rev-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}
@media (max-width: 900px) {
  .rev-grid { grid-template-columns: 1fr; }
}

.rev-card {
  display: flex;
  flex-direction: column;
  background: var(--paper);
  border-right: 1px solid var(--line);
  height: 100%;
}
.rev-card:last-child { border-right: none; }
@media (max-width: 900px) {
  .rev-card {
    border-right: none;
    border-bottom: 1px solid var(--line);
  }
  .rev-card:last-child { border-bottom: none; }
}

/* ===== Mobile: horizontal scroll-snap carousel ===== */
@media (max-width: 560px) {
  .rev-grid {
    display: flex;
    grid-template-columns: none;
    gap: 16px;
    overflow-x: auto;
    overflow-y: visible;
    scroll-snap-type: x mandatory;
    scroll-padding-left: 20px;
    margin-left: -20px;
    margin-right: -20px;
    padding: 4px 20px 8px;
    border-top: none;
    border-bottom: none;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .rev-grid::-webkit-scrollbar { display: none; }
  .rev-card {
    flex: 0 0 85%;
    min-width: 0;
    scroll-snap-align: start;
    border-right: none;
    border-bottom: none;
  }
}

.rev-card-photo { padding: 0; }
.rev-imgph {
  position: relative;
  aspect-ratio: 4 / 3;
  width: 100%;
  overflow: hidden;
  background:
    radial-gradient(120% 80% at 30% 20%, rgba(255,255,255,0.07), transparent 50%),
    radial-gradient(100% 70% at 80% 100%, rgba(138,106,76,0.20), transparent 60%),
    linear-gradient(180deg, #221b13 0%, #18130e 60%, #120e09 100%);
  color: #f3ece1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.rev-imgph.has-photo { background: var(--dark); }
.rev-imgph-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.rev-imgph.has-photo::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 30%);
  pointer-events: none;
}
.rev-imgph-label {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: clamp(13px, 1.4vw, 17px);
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(243, 236, 225, 0.78);
}
.rev-imgph-corner {
  position: absolute;
  top: 14px;
  right: 16px;
  z-index: 1;
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: 0.14em;
  color: rgba(243, 236, 225, 0.85);
  text-transform: uppercase;
}

.rev-card-body {
  padding: 32px 36px 36px;
  display: flex;
  flex-direction: column;
  flex: 1;
}
@media (max-width: 560px) {
  .rev-card-body { padding: 28px 24px 28px; }
}

/* ===== Stars ===== */
.rev-stars { display: inline-flex; gap: 2px; margin-bottom: 18px; }
.rev-star-filled { fill: var(--accent); }
.rev-star-empty { fill: var(--bg-2); }

/* ===== Quote title ===== */
.rev-card-title {
  font-weight: 500;
  line-height: 1.3;
  font-size: clamp(20px, 1.5vw, 24px);
  color: var(--ink);
  margin: 0 0 18px;
  letter-spacing: -0.01em;
}

/* ===== Body ===== */
.rev-card-text {
  color: var(--muted);
  font-size: 14.5px;
  line-height: 1.7;
  margin: 0 0 32px;
}

/* ===== Card footer ===== */
.rev-card-footer {
  margin-top: auto;
  padding-top: 24px;
  border-top: 1px solid var(--line);
}
.rev-card-name {
  font-size: 13px;
  font-weight: 500;
  color: var(--ink);
}
`,jr="spc:quote-prefill",uo="spc:quote-prefill-changed",mb={화장실:"화장실","거실 바닥":"거실",현관:"현관",베란다:"베란다",세탁실:"기타","다용도/실외기실":"기타"};function hb(s){return mb[s]??"기타"}function gb(s){const d=new Set;for(const o of s)d.add(hb(o));return Array.from(d)}const _t={화장실:{label:"화장실",en:"BATHROOM",icon:"🛁",rec:"kera",materialLocked:!0,multiple:!0,typeAxis:{lbl:"타입",options:["욕조형","샤워부스형"]},scopeAxis:{lbl:"범위",options:["바닥만","전체(바닥+벽)"]},variants:[{id:"bt-floor",label:"욕조형 · 바닥만",type:"욕조형",scope:"바닥만",kera:{신축:40,구축:50},poly:null},{id:"bt-full",label:"욕조형 · 전체 (바닥+벽)",type:"욕조형",scope:"전체(바닥+벽)",kera:{신축:90,구축:100},poly:null},{id:"sh-floor",label:"샤워부스형 · 바닥만",type:"샤워부스형",scope:"바닥만",kera:{신축:45,구축:55},poly:null},{id:"sh-full",label:"샤워부스형 · 전체 (바닥+벽)",type:"샤워부스형",scope:"전체(바닥+벽)",kera:{신축:95,구축:105},poly:null}]},"거실 바닥":{label:"거실 바닥",en:"LIVING FLOOR",icon:"🛋️",rec:"kera",materialLocked:!0,note:"34평 이하 기준",variants:[{id:"lv",label:"34평 미만",kera:{신축:150,구축:150},poly:null}]},현관:{label:"현관",en:"ENTRANCE",icon:"🚪",rec:"poly",materialLocked:!1,variants:[{id:"ent",label:"바닥",kera:{신축:25,구축:25},poly:{신축:5,구축:10}}]},세탁실:{label:"세탁실",en:"LAUNDRY",icon:"🧺",rec:"poly",materialLocked:!1,variants:[{id:"ldy",label:"바닥",kera:{신축:30,구축:30},poly:{신축:15,구축:15}}]},베란다:{label:"베란다",en:"VERANDA",icon:"🌿",rec:"poly",materialLocked:!1,variants:[{id:"ver",label:"바닥",kera:{신축:30,구축:30},poly:{신축:15,구축:15}}]},"다용도/실외기실":{label:"다용도/실외기실",en:"UTILITY",icon:"🪟",rec:"poly",materialLocked:!1,variants:[{id:"utl",label:"바닥",kera:{신축:20,구축:20},poly:{신축:10,구축:10}}]}},Sr={kera:"케라폭시",poly:"폴리우레아"},lo={1:{name:"세트 1",sub:"기본",desc:"화장실 바닥 ×2 + 현관",prices:{신축:100,구축:120},components:[{space:"화장실",variantId:"bt-floor",material:"kera"},{space:"화장실",variantId:"sh-floor",material:"kera"},{space:"현관",variantId:"ent",material:"poly"}],services:[]},2:{name:"세트 2",sub:"표준",desc:"세트 1 + 양조벽 or 샤워벽 3면 ×1곳",prices:{신축:125,구축:145},components:[{space:"화장실",variantId:"bt-full",material:"kera"},{space:"화장실",variantId:"sh-floor",material:"kera"},{space:"현관",variantId:"ent",material:"poly"}],services:["젠 다이 실리콘 ×2","세면대 실리콘 ×2"]},3:{name:"세트 3",sub:"완성",desc:"화장실 바닥 ×2 + 전체벽 ×2 + 현관",prices:{신축:220,구축:240},components:[{space:"화장실",variantId:"bt-full",material:"kera"},{space:"화장실",variantId:"sh-full",material:"kera"},{space:"현관",variantId:"ent",material:"poly"}],services:["젠 다이 실리콘 ×2","세면대 실리콘 ×2","싱크볼 실리콘","주방벽 케라폭시"]},4:{name:"세트 4",sub:"확장",desc:"세트 2 + 세탁실",prices:{신축:140,구축:160},components:[{space:"화장실",variantId:"bt-full",material:"kera"},{space:"화장실",variantId:"sh-floor",material:"kera"},{space:"현관",variantId:"ent",material:"poly"},{space:"세탁실",variantId:"ldy",material:"poly"}],services:["젠 다이 실리콘 ×2","세면대 실리콘 ×2","주방 실리콘","싱크볼 실리콘"]}},xb=["화장실","거실 바닥","현관","세탁실","베란다","다용도/실외기실"],Qn=(s,d)=>_t[s]?.variants.find(o=>o.id===d),po=(s,d)=>({"욕조형|바닥만":"bt-floor","욕조형|전체(바닥+벽)":"bt-full","샤워부스형|바닥만":"sh-floor","샤워부스형|전체(바닥+벽)":"sh-full"})[`${s}|${d}`]??"bt-floor",fo=(s,d)=>{const o=_t[s.space],u=Qn(s.space,s.variantId);if(!o||!u)return null;const f=o.materialLocked?o.rec:s.material,m=u[f];return m?m[d]:null},gr=()=>`sel-${Math.random().toString(36).slice(2,9)}-${Date.now().toString(36)}`,tl=s=>s.toLocaleString("ko-KR");function bb(){const[s,d]=k.useState("신축"),[o,u]=k.useState([]),[f,m]=k.useState(null),[v,y]=k.useState(!1),[g,h]=k.useState(!1),T=o.filter(U=>U.space==="화장실"),w=T.length>=1,B=T.length>=2,Z=U=>o.some(le=>le.space===U),S=()=>m(null),q=U=>{if(S(),Z(U))u(le=>le.filter(re=>re.space!==U));else{const le=_t[U],re=le.variants[0];u($=>[...$,{key:gr(),space:U,variantId:re.id,material:le.rec}])}},Y=()=>{S(),u(w?U=>U.filter(le=>le.space!=="화장실"):U=>[...U,{key:gr(),space:"화장실",variantId:"bt-floor",material:"kera"}])},H=()=>{if(w)if(S(),B){const le=o.map((re,$)=>re.space==="화장실"?$:-1).filter(re=>re>=0)[1];u(re=>re.filter(($,ie)=>ie!==le))}else{const U=o.find(ie=>ie.space==="화장실"),re=(U?Qn("화장실",U.variantId)?.type:void 0)==="욕조형"?"샤워부스형":"욕조형",$=po(re,"바닥만");u(ie=>[...ie,{key:gr(),space:"화장실",variantId:$,material:"kera"}])}},X=U=>{if(f===U){m(null),u([]);return}const re=lo[U].components.map($=>({key:gr(),space:$.space,variantId:$.variantId,material:$.material}));u(re),m(U)},L=(U,le)=>{S(),u(re=>re.map($=>$.key===U?{...$,...le}:$))},K=U=>{S(),u(le=>le.filter(re=>re.key!==U))},ne=()=>{u([]),m(null)},F=k.useMemo(()=>{const U=o.filter(R=>R.space==="화장실"),le=o.map(R=>{const G=_t[R.space],ee=Qn(R.space,R.variantId),xe=G.materialLocked?G.rec:R.material,V=fo(R,s),b=U.length>1&&R.space==="화장실";return{key:R.key,space:R.space,icon:G.icon,label:`${R.space}${b?" · "+ee.label:""}`,material:xe,unit:V}}),re=le.reduce((R,G)=>R+(G.unit??0),0),$=le.some(R=>R.unit===null),ie=f?lo[f]:null,Oe=ie?ie.prices[s]:re,ke=ie?Math.max(0,re-Oe):0;return{lineItems:le,itemsSum:re,hasNull:$,finalTotal:Oe,savings:ke,set:ie}},[o,s,f]),P=()=>{if(o.length===0)return;const U=[];U.push(`[가격 계산기에서 전달된 구성 · ${s} 기준]`),F.set&&U.push(`✓ ${F.set.name} · ${F.set.sub} (${F.set.desc})`),U.push("");const le=o.filter(ie=>ie.space==="화장실").length;let re=0;for(const ie of o){const Oe=_t[ie.space],ke=Qn(ie.space,ie.variantId),R=Oe.materialLocked?Oe.rec:ie.material,G=Sr[R],ee=fo(ie,s),xe=ee===null?"별도 견적":`${ee}만원`;let V;ie.space==="화장실"?(re+=1,V=`화장실${le>1?` ${re}`:""} · ${ke.label}`):Oe.variants.length>1||ke.label!=="바닥"?V=`${ie.space} · ${ke.label}`:V=ie.space,U.push(`· ${V} · ${G} — ${xe}`)}if(F.set&&F.set.services.length>0){U.push(""),U.push("함께 제공 서비스:");for(const ie of F.set.services)U.push(`· ${ie}`)}U.push(""),U.push("───────────"),F.set&&F.savings>0&&(U.push(`개별 합계: ${F.itemsSum}만원`),U.push(`세트 적용: -${F.savings}만원`)),U.push(`예상 견적가: ${F.finalTotal}만원${F.hasNull?" +α":""} (VAT 포함, 34평·300타일 기준)`),U.push("※정확한 금액은 유선상담 진행 후 안내드립니다.");const $={areas:gb(o.map(ie=>ie.space)),message:U.join(`
`).slice(0,500)};try{sessionStorage.setItem(jr,JSON.stringify($)),window.dispatchEvent(new CustomEvent(uo))}catch{}h(!0)},je=()=>{h(!1);const U=document.querySelector("#quote");U&&U.scrollIntoView({behavior:"smooth"})};return k.useEffect(()=>{if(!g)return;const U=re=>{re.key==="Escape"&&h(!1)};document.addEventListener("keydown",U);const le=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",U),document.body.style.overflow=le}},[g]),n.jsxs("section",{id:"calc",className:"spc-section py-20 px-6 md:px-12 lg:px-20",children:[n.jsxs("div",{className:"spc-container max-w-7xl mx-auto",children:[n.jsxs("div",{className:"mb-10",children:[n.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Price Calculator"}),n.jsxs("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:[n.jsxs("span",{className:"md:block",children:["공간을 고르면,",n.jsx("br",{})]})," ",n.jsx("span",{className:"md:block",children:"가격이 바로 보입니다"})]}),n.jsx("p",{className:"text-stone-500 mt-1 sm:mt-3 text-base max-w-[56ch]",children:"필요한 공간만 골라 실시간 견적을 확인하세요"}),n.jsxs("div",{className:"spc-info-chips mt-5",children:[n.jsx("span",{className:"spc-info-chip",children:"34평 이하 기준"}),n.jsx("span",{className:"spc-info-chip",children:"300개 타일 기준"}),n.jsx("span",{className:"spc-info-chip",children:"VAT 포함"})]})]}),n.jsxs("div",{className:"spc-body",children:[n.jsxs("div",{className:"spc-left",children:[n.jsxs("div",{className:"spc-step",children:[n.jsxs("div",{className:"spc-step-head",children:[n.jsx("div",{className:"spc-step-num",children:"01"}),n.jsxs("div",{className:"spc-step-titles",children:[n.jsx("div",{className:"spc-step-title",children:"시공할 공간을 선택해 주세요"}),n.jsx("div",{className:"spc-step-sub",children:"여러 공간을 자유롭게 조합하세요 · 화장실은 최대 2곳까지"})]}),o.length>0&&n.jsx("button",{type:"button",className:"spc-step-action",onClick:ne,children:"전체 초기화"})]}),n.jsx("div",{className:"spc-step-body",children:n.jsxs("div",{className:"spc-space-grid",children:[n.jsx(no,{icon:_t.화장실.icon,label:"화장실 1",en:"BATHROOM",selected:w,onClick:Y}),n.jsx(no,{icon:_t.화장실.icon,label:"화장실 (추가)",en:"BATHROOM +",selected:B,disabled:!w,onClick:H}),xb.slice(1).map(U=>n.jsx(no,{icon:_t[U].icon,label:_t[U].label,en:_t[U].en,selected:Z(U),onClick:()=>q(U)},U))]})})]}),n.jsxs("div",{className:"spc-step",children:[n.jsxs("button",{type:"button",className:"spc-accordion-head",onClick:()=>y(U=>!U),"aria-expanded":v,children:[n.jsx("div",{className:"spc-step-num",children:"02"}),n.jsxs("div",{className:"spc-step-titles",children:[n.jsx("div",{className:"spc-step-title",children:"또는 간편 세트 패키지로 선택"}),n.jsx("div",{className:"spc-step-sub",children:"자주 함께 시공되는 4가지 구성"})]}),n.jsx("span",{className:"spc-accordion-chev","aria-hidden":"true",children:v?"−":"+"})]}),v&&n.jsxs("div",{className:"spc-step-body",children:[n.jsx("div",{className:"spc-set-grid",children:["1","2","3","4"].map(U=>n.jsx(vb,{id:U,set:lo[U],selected:f===U,houseType:s,onPick:()=>X(U)},U))}),n.jsx("p",{className:"spc-set-note",children:"※ 세트 가격은 컴포넌트 개별 합산과 동일하지 않습니다. 추가 서비스 포함 구성이며, 4개 세트는 시각적으로 동등하게 노출됩니다."})]})]}),o.length>0&&n.jsxs("div",{className:"spc-step",children:[n.jsxs("div",{className:"spc-step-head",children:[n.jsx("div",{className:"spc-step-num",children:"03"}),n.jsxs("div",{className:"spc-step-titles",children:[n.jsx("div",{className:"spc-step-title",children:"세부 옵션을 조정해 보세요"}),n.jsx("div",{className:"spc-step-sub",children:"타입 · 범위 · 자재를 변경하면 견적이 실시간으로 업데이트됩니다"})]})]}),n.jsx("div",{className:"spc-step-body",children:n.jsx("div",{className:"spc-selrow-list",children:o.map((U,le)=>n.jsx(yb,{sel:U,houseType:s,bathroomIndex:U.space==="화장실"?T.findIndex(re=>re.key===U.key):-1,bathroomCount:T.length,onUpdate:re=>L(U.key,re),onRemove:()=>K(U.key)},U.key))})})]})]}),n.jsx("aside",{className:"spc-right",children:n.jsxs("div",{className:"spc-result",children:[n.jsx("div",{className:"spc-result-eyebrow",children:n.jsx("span",{className:"spc-result-ht-lbl",children:"줄눈 시공 계산기"})}),n.jsxs("div",{className:"spc-result-ht",children:[n.jsx("span",{className:"spc-result-ht-lbl",children:"주거 유형"}),n.jsx("div",{className:"spc-ht-toggle",children:["신축","구축"].map(U=>n.jsx("button",{type:"button",className:`spc-ht-btn ${s===U?"on":""}`,onClick:()=>d(U),children:U},U))})]}),F.set&&n.jsxs("div",{className:"spc-set-banner",children:[n.jsxs("div",{className:"spc-set-banner-meta",children:[n.jsx("span",{className:"spc-set-banner-lbl",children:"★ SET APPLIED"}),n.jsxs("span",{className:"spc-set-banner-name",children:[F.set.name," ",n.jsxs("span",{className:"spc-set-banner-sub",children:["· ",F.set.sub]})]})]}),n.jsx("button",{type:"button",className:"spc-set-banner-clear",onClick:S,"aria-label":"세트 해제",children:"×"})]}),o.length===0?n.jsxs("div",{className:"spc-result-empty",children:["좌측에서 공간을 개별로 선택하거나,",n.jsx("br",{}),"세트 패키지를 골라 보세요."]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"spc-result-section",children:[n.jsxs("div",{className:"spc-result-section-lbl",children:["선택 항목 · ",F.lineItems.length,"건"]}),n.jsx("ul",{className:"spc-line-items",children:F.lineItems.map(U=>n.jsxs("li",{className:"spc-line-item",children:[n.jsxs("div",{className:"spc-li-main",children:[n.jsx("span",{className:"spc-li-icon","aria-hidden":"true",children:U.icon}),n.jsxs("div",{className:"spc-li-text",children:[n.jsx("div",{className:"spc-li-label",children:U.label}),n.jsxs("div",{className:"spc-li-meta",children:[Sr[U.material]," · ",s]})]})]}),n.jsx("div",{className:"spc-li-price",children:U.unit===null?n.jsx("span",{className:"spc-li-quote",children:"별도 견적"}):n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"spc-li-val",children:tl(U.unit)}),n.jsx("span",{className:"spc-li-unit",children:"만원"})]})})]},U.key))})]}),F.set&&F.set.services.length>0&&n.jsxs("div",{className:"spc-result-services",children:[n.jsx("div",{className:"spc-result-section-lbl",children:"+ 함께 제공되는 서비스"}),n.jsx("ul",{className:"spc-services-list",children:F.set.services.map(U=>n.jsxs("li",{className:"spc-service-item",children:["✓ ",U]},U))})]}),n.jsxs("div",{className:"spc-totals",children:[F.set&&n.jsxs("div",{className:"spc-subtotal-row",children:[n.jsx("span",{className:"spc-totals-lbl",children:"개별 합계"}),n.jsxs("span",{className:"spc-subtotal-val",children:[n.jsx("span",{className:"strike",children:tl(F.itemsSum)}),n.jsx("span",{className:"spc-totals-suffix",children:"만원"})]})]}),F.set&&F.savings>0&&n.jsxs("div",{className:"spc-discount-note",children:["세트 적용 −",tl(F.savings),"만원"]}),n.jsxs("div",{className:"spc-final-row",children:[n.jsx("span",{className:"spc-totals-lbl spc-totals-lbl-accent",children:"최종 견적가"}),n.jsxs("span",{className:"spc-final-price",children:[n.jsx("span",{className:"spc-final-val",children:tl(F.finalTotal)}),n.jsx("span",{className:"spc-totals-suffix spc-totals-suffix-lg",children:"만원"}),F.hasNull&&n.jsx("span",{className:"spc-hasnull",children:"+α"})]})]}),F.hasNull&&n.jsx("div",{className:"spc-hasnull-note",children:"‘별도 견적’ 항목이 포함되어 있어 현장 확인 후 안내드립니다."})]}),n.jsx("button",{type:"button",className:"spc-cta",onClick:P,children:"이 구성으로 견적 받기 →"})]}),n.jsxs("div",{className:"spc-policy",children:[n.jsx("span",{className:"spc-policy-chip",children:"📷 원격 견적"}),n.jsx("span",{className:"spc-policy-chip",children:"💡 2년 A/S · 케라폭시"}),n.jsx("span",{className:"spc-policy-chip",children:"✓ VAT 포함"})]}),n.jsx("p",{className:"spc-fineprint",children:"※ 34평 이하 · 300개 타일 기준 예상가. 정확한 금액은 사진·정보 확인 후 서면 견적서로 안내드립니다."})]})})]})]}),g&&n.jsx("div",{className:"spc-modal-overlay",role:"dialog","aria-modal":"true","aria-labelledby":"spc-modal-title",onClick:()=>h(!1),children:n.jsxs("div",{className:"spc-modal",onClick:U=>U.stopPropagation(),children:[n.jsx("button",{type:"button",className:"spc-modal-close",onClick:()=>h(!1),"aria-label":"닫기",children:"×"}),n.jsx("span",{className:"spc-modal-eyebrow",children:"견적 전달 완료"}),n.jsx("h3",{id:"spc-modal-title",className:"spc-modal-title",children:"견적 구성이 자동으로 담겼습니다"}),n.jsxs("p",{className:"spc-modal-body",children:[n.jsx("strong",{children:"이름 · 연락처 · 시공 위치 · 희망 날짜"}),n.jsx("br",{}),"4가지 정보만 입력해 주시면",n.jsx("br",{}),"빠른 시간 내 유선으로 안내드리겠습니다."]}),n.jsx("button",{type:"button",className:"spc-modal-cta",onClick:je,children:"견적 폼으로 이동 →"})]})}),n.jsx("style",{children:jb})]})}function no({icon:s,label:d,en:o,selected:u,disabled:f,onClick:m}){return n.jsxs("button",{type:"button",className:`spc-space-card ${u?"on":""} ${f?"is-disabled":""}`,onClick:m,disabled:f,"aria-pressed":u,children:[n.jsx("span",{className:"spc-sc-icon","aria-hidden":"true",children:s}),n.jsxs("span",{className:"spc-sc-meta",children:[n.jsx("span",{className:"spc-sc-label",children:d}),n.jsx("span",{className:"spc-sc-en",children:o})]}),n.jsx("span",{className:"spc-sc-action","aria-hidden":"true",children:f?"🔒":u?"✓":"＋"})]})}function vb({id:s,set:d,selected:o,houseType:u,onPick:f}){return n.jsxs("div",{className:`spc-set-card ${o?"on":""}`,children:[n.jsxs("div",{className:"spc-set-head",children:[n.jsxs("span",{className:"spc-set-num",children:["SET 0",s]}),n.jsxs("h3",{className:"spc-set-name",children:[d.name," ",n.jsxs("span",{className:"spc-set-sub",children:["· ",d.sub]})]})]}),n.jsx("p",{className:"spc-set-desc",children:d.desc}),n.jsxs("div",{className:"spc-set-prices",children:[n.jsxs("div",{className:"spc-set-price",children:[n.jsx("span",{className:"spc-set-price-lbl",children:"신축"}),n.jsx("span",{className:"spc-set-price-val",children:tl(d.prices.신축)}),n.jsx("span",{className:"spc-set-price-unit",children:"만원"})]}),n.jsxs("div",{className:"spc-set-price",children:[n.jsx("span",{className:"spc-set-price-lbl",children:"구축"}),n.jsx("span",{className:"spc-set-price-val",children:tl(d.prices.구축)}),n.jsx("span",{className:"spc-set-price-unit",children:"만원"})]})]}),d.services.length>0&&n.jsxs("div",{className:"spc-set-services",children:[n.jsx("div",{className:"spc-set-services-lbl",children:"+ 함께 제공"}),n.jsx("ul",{children:d.services.map(m=>n.jsxs("li",{children:["· ",m]},m))})]}),n.jsx("button",{type:"button",className:"spc-set-cta",onClick:f,children:o?"✓ 적용 중 · 다시 누르면 해제":"이 세트로 선택 →"}),n.jsxs("p",{className:"spc-set-note-inner",children:[u==="신축"?"신축":"구축"," 기준"]})]})}function yb({sel:s,houseType:d,bathroomIndex:o,bathroomCount:u,onUpdate:f,onRemove:m}){const v=_t[s.space],y=Qn(s.space,s.variantId),g=s.space==="화장실",h=v.materialLocked?v.rec:s.material,T=fo(s,d),w=S=>{if(!g)return;const q=y.scope??"바닥만";f({variantId:po(S,q)})},B=S=>{if(!g)return;const q=y.type??"욕조형";f({variantId:po(q,S)})},Z=g&&u>1?`${v.label} ${o+1}`:v.label;return n.jsxs("div",{className:"spc-sel-row",children:[n.jsxs("div",{className:"spc-sel-row-head",children:[n.jsxs("div",{className:"spc-sel-row-title",children:[n.jsx("span",{className:"spc-sr-icon","aria-hidden":"true",children:v.icon}),n.jsx("span",{children:Z})]}),n.jsx("button",{type:"button",className:"spc-sel-x",onClick:m,"aria-label":"이 항목 삭제",children:"×"})]}),n.jsxs("div",{className:"spc-sel-row-body",children:[g&&v.typeAxis&&n.jsxs("div",{className:"spc-sr-block",children:[n.jsx("div",{className:"spc-sr-lbl",children:v.typeAxis.lbl}),n.jsx("div",{className:"spc-sr-chips",children:v.typeAxis.options.map(S=>n.jsx("button",{type:"button",className:`spc-sr-chip ${y.type===S?"on":""}`,onClick:()=>w(S),children:S},S))})]}),g&&v.scopeAxis&&n.jsxs("div",{className:"spc-sr-block",children:[n.jsx("div",{className:"spc-sr-lbl",children:v.scopeAxis.lbl}),n.jsx("div",{className:"spc-sr-chips",children:v.scopeAxis.options.map(S=>n.jsx("button",{type:"button",className:`spc-sr-chip ${y.scope===S?"on":""}`,onClick:()=>B(S),children:S},S))})]}),!g&&v.variants.length>1&&n.jsxs("div",{className:"spc-sr-block",children:[n.jsx("div",{className:"spc-sr-lbl",children:"옵션"}),n.jsx("div",{className:"spc-sr-chips",children:v.variants.map(S=>n.jsx("button",{type:"button",className:`spc-sr-chip ${s.variantId===S.id?"on":""}`,onClick:()=>f({variantId:S.id}),children:S.label},S.id))})]}),v.materialLocked?n.jsx("div",{className:"spc-sr-locked",children:"EPOXY ONLY · 물 접촉 환경 → 폴리우레아 시공 불가"}):n.jsxs("div",{className:"spc-sr-block",children:[n.jsxs("div",{className:"spc-sr-lbl",children:["자재 ",n.jsxs("span",{className:"spc-sr-lbl-aux",children:["권장 ",Sr[v.rec]]})]}),n.jsx("div",{className:"spc-sr-chips",children:["kera","poly"].map(S=>n.jsx("button",{type:"button",className:`spc-sr-chip ${h===S?"on":""}`,onClick:()=>f({material:S}),children:Sr[S]},S))})]}),n.jsxs("div",{className:"spc-sr-price",children:[n.jsxs("span",{className:"spc-sr-price-lbl",children:[d," · 예상가"]}),T===null?n.jsx("span",{className:"spc-sr-quote",children:"QUOTE NEEDED · 별도 견적"}):n.jsxs("span",{className:"spc-sr-price-val-wrap",children:[n.jsx("span",{className:"spc-sr-price-val",children:tl(T)}),n.jsx("span",{className:"spc-sr-price-unit",children:"만원"})]})]})]})]})}const jb=`
.spc-section {
  --bg:#f7f4ef; --bg-2:#efeae1; --paper:#fbf9f5;
  --ink:#1c1916; --ink-2:#2d2926;
  --muted:#6f665a; --muted-2:#8c8276;
  --line:rgba(28,25,22,.12);
  --line-strong:rgba(28,25,22,.22);
  --accent:#8a6a4c; --accent-deep:#5e4733;
  --dark:#18130e; --on-dark:#f3ece1;
  --dark-line:rgba(255,255,255,.1);
  background: var(--bg);
  color: var(--ink);
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
}
.spc-section .serif { font-family: 'Noto Serif KR', serif; font-style: italic; }
.spc-section .mono { font-family: 'Pretendard Variable', 'Pretendard', sans-serif; font-weight: 500; letter-spacing: .12em; text-transform: uppercase; }

/* Header chips */
.spc-info-chips { display: flex; flex-wrap: wrap; gap: 8px; justify-content: flex-start; }
.spc-info-chip {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--muted);
  border: 1px solid var(--line);
  border-radius: 2px;
  padding: 5px 12px;
  background: var(--paper);
}

/* Layout */
.spc-body {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 32px;
  align-items: start;
}
@media (max-width: 980px) {
  .spc-body { grid-template-columns: 1fr; }
}

/* Step blocks */
.spc-step {
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 2px;
  padding: 22px 24px;
  margin-bottom: 18px;
}
.spc-step-head, .spc-accordion-head {
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  text-align: left;
}
.spc-accordion-head {
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  color: inherit;
}
.spc-step-num {
  font-family: 'Noto Serif KR', serif;
  font-style: italic;
  font-size: 36px;
  font-weight: 400;
  color: var(--accent);
  line-height: 1;
  font-variant-numeric: lining-nums;
  font-feature-settings: "lnum" 1;
  min-width: 48px;
}
.spc-step-titles { flex: 1; }
.spc-step-title { font-size: 18px; font-weight: 600; color: var(--ink); }
.spc-step-sub { font-size: 13px; color: var(--muted); margin-top: 4px; }
.spc-step-action {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--muted);
  background: transparent;
  border: 1px solid var(--line);
  border-radius: 2px;
  padding: 6px 12px;
  cursor: pointer;
  transition: all .15s ease;
}
.spc-step-action:hover { color: var(--ink); border-color: var(--line-strong); }
.spc-step-body { margin-top: 18px; }
.spc-accordion-chev {
  font-size: 26px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--muted);
  font-weight: 300;
  background: var(--bg);
  transition: all .15s ease;
}
.spc-accordion-head:hover .spc-accordion-chev {
  color: var(--ink);
  border-color: var(--line-strong);
}
@media (max-width: 980px) {
  .spc-step { padding: 18px 18px; }
  .spc-step-num { font-size: 28px; min-width: 36px; }
  .spc-step-title { font-size: 16px; }
  .spc-accordion-chev { width: 32px; height: 32px; font-size: 22px; }
}

/* Space cards */
.spc-space-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
@media (max-width: 640px) {
  .spc-space-grid { grid-template-columns: 1fr; }
}
.spc-space-card {
  display: grid;
  grid-template-columns: 38px 1fr 24px;
  align-items: center;
  gap: 12px;
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: 2px;
  padding: 14px 16px;
  cursor: pointer;
  font: inherit;
  color: inherit;
  text-align: left;
  transition: all .15s ease;
}
.spc-space-card:hover:not(.is-disabled):not(.on) {
  border-color: var(--line-strong);
  background: var(--paper);
}
.spc-space-card.on {
  background: var(--ink);
  border-color: var(--ink);
  color: var(--on-dark);
}
.spc-space-card.on .spc-sc-en { color: rgba(255,255,255,.55); }
.spc-space-card.is-disabled {
  border-style: dashed;
  background: var(--bg-2);
  opacity: .45;
  cursor: not-allowed;
}
.spc-sc-icon { font-size: 24px; line-height: 1; }
.spc-sc-meta { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.spc-sc-label { font-size: 15px; font-weight: 600; }
.spc-sc-en {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .14em;
  color: var(--muted);
}
.spc-sc-action {
  font-size: 16px;
  color: var(--muted);
  text-align: center;
}
.spc-space-card.on .spc-sc-action { color: var(--on-dark); }

/* Set grid */
.spc-set-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}
@media (max-width: 1100px) {
  .spc-set-grid { grid-template-columns: 1fr; }
}
.spc-set-card {
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: 2px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  transition: border-color .15s ease;
}
.spc-set-card.on { border-color: var(--accent); }
.spc-set-card:hover { border-color: var(--line-strong); }
.spc-set-head { margin-bottom: 8px; }
.spc-set-num {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .16em;
  color: var(--muted);
  text-transform: uppercase;
  display: block;
  margin-bottom: 6px;
}
.spc-set-name {
  font-family: 'Noto Serif KR', serif;
  font-style: italic;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.35;
  color: var(--ink);
  margin: 0;
  font-variant-numeric: lining-nums;
  font-feature-settings: "lnum" 1;
}
.spc-set-sub {
  font-style: normal;
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: var(--muted);
  margin-left: 4px;
}
.spc-set-desc {
  font-size: 13px;
  color: var(--muted);
  line-height: 1.55;
  margin: 0 0 14px;
}
.spc-set-prices {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 12px;
  padding: 12px;
  background: var(--paper);
  border-radius: 2px;
}
.spc-set-price { display: flex; align-items: baseline; gap: 6px; }
.spc-set-price-lbl {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .12em;
  color: var(--muted);
  text-transform: uppercase;
}
.spc-set-price-val {
  font-family: 'Noto Serif KR', serif;
  font-style: italic;
  font-size: 22px;
  font-weight: 500;
  color: var(--ink);
  line-height: 1.35;
  margin-left: 4px;
  font-variant-numeric: lining-nums;
  font-feature-settings: "lnum" 1;
}
.spc-set-price-unit {
  font-size: 11px;
  color: var(--muted);
  margin-left: 6px;
}
.spc-set-services { margin-bottom: 14px; }
.spc-set-services-lbl {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .14em;
  color: var(--muted);
  text-transform: uppercase;
  margin-bottom: 6px;
}
.spc-set-services ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 12px;
  color: var(--ink-2);
  line-height: 1.65;
}
.spc-set-cta {
  margin-top: auto;
  background: var(--ink);
  color: var(--on-dark);
  border: none;
  border-radius: 2px;
  padding: 12px 16px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: .02em;
  transition: background .15s ease;
}
.spc-set-cta:hover { background: var(--accent-deep); }
.spc-set-card.on .spc-set-cta { background: var(--accent); }
.spc-set-card.on .spc-set-cta:hover { background: var(--accent-deep); }
.spc-set-note-inner {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .12em;
  color: var(--muted);
  text-transform: uppercase;
  margin: 8px 0 0;
  text-align: center;
}
.spc-set-note {
  font-size: 12px;
  color: var(--muted);
  margin-top: 14px;
  line-height: 1.55;
}

/* Selection rows */
.spc-selrow-list { display: flex; flex-direction: column; gap: 12px; }
.spc-sel-row {
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: 2px;
  padding: 14px 16px;
}
.spc-sel-row-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--line);
}
.spc-sel-row-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 15px;
}
.spc-sr-icon { font-size: 18px; }
.spc-sel-x {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: transparent;
  border: 1px solid var(--line);
  color: var(--muted);
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  transition: all .15s ease;
}
.spc-sel-x:hover { color: var(--ink); border-color: var(--line-strong); }
.spc-sel-row-body { display: flex; flex-direction: column; gap: 10px; margin-top: 12px; }
.spc-sr-block {}
.spc-sr-lbl {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .14em;
  color: var(--muted);
  text-transform: uppercase;
  margin-bottom: 6px;
}
.spc-sr-lbl-aux {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  text-transform: none;
  letter-spacing: 0;
  font-size: 11px;
  color: var(--muted-2);
  margin-left: 6px;
}
.spc-sr-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.spc-sr-chip {
  font: inherit;
  font-size: 13px;
  color: var(--ink-2);
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 2px;
  padding: 6px 14px;
  cursor: pointer;
  transition: all .15s ease;
}
.spc-sr-chip:hover { border-color: var(--line-strong); }
.spc-sr-chip.on {
  background: var(--ink);
  color: var(--on-dark);
  border-color: var(--ink);
}
.spc-sr-locked {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .1em;
  color: var(--muted);
  background: var(--bg-2);
  border-radius: 2px;
  padding: 8px 12px;
}
.spc-sr-price {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-top: 10px;
  margin-top: 4px;
  border-top: 1px dashed var(--line);
}
.spc-sr-price-lbl {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .14em;
  color: var(--muted);
  text-transform: uppercase;
}
.spc-sr-price-val-wrap { display: inline-flex; align-items: baseline; gap: 6px; }
.spc-sr-price-val {
  font-family: 'Noto Serif KR', serif;
  font-style: italic;
  font-weight: 500;
  font-size: 26px;
  color: var(--ink);
  line-height: 1.35;
  font-variant-numeric: lining-nums;
  font-feature-settings: "lnum" 1;
}
.spc-sr-price-unit { font-size: 12px; color: var(--muted); }
.spc-sr-quote {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: .1em;
  color: var(--accent);
}

/* Result panel */
.spc-right { position: sticky; top: 88px; }
@media (max-width: 980px) {
  .spc-right { position: static; }
}
.spc-result {
  background: var(--dark);
  color: var(--on-dark);
  border-radius: 2px;
  padding: 24px;
}
.spc-result-eyebrow {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .16em;
  color: rgba(255,255,255,.45);
  text-transform: uppercase;
  margin-bottom: 18px;
}
.spc-result-ht {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--dark-line);
  margin-bottom: 16px;
}
.spc-result-ht-lbl {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .14em;
  color: rgba(255,255,255,.55);
  text-transform: uppercase;
}
.spc-ht-toggle {
  display: inline-flex;
  background: rgba(255,255,255,.08);
  border-radius: 2px;
  padding: 3px;
}
.spc-ht-btn {
  background: transparent;
  border: none;
  color: rgba(255,255,255,.55);
  padding: 6px 16px;
  border-radius: 2px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all .15s ease;
}
.spc-ht-btn.on { background: var(--on-dark); color: var(--dark); }

.spc-set-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(138,106,76,.18);
  border: 1px solid rgba(138,106,76,.4);
  border-radius: 2px;
  padding: 10px 14px;
  margin-bottom: 16px;
}
.spc-set-banner-meta { display: flex; flex-direction: column; gap: 2px; }
.spc-set-banner-lbl {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .14em;
  color: rgba(255,255,255,.6);
}
.spc-set-banner-name { font-size: 14px; font-weight: 600; }
.spc-set-banner-sub { font-weight: 400; color: rgba(255,255,255,.6); }
.spc-set-banner-clear {
  background: transparent;
  border: 1px solid rgba(255,255,255,.2);
  color: var(--on-dark);
  width: 26px; height: 26px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
}
.spc-set-banner-clear:hover { background: rgba(255,255,255,.08); }

.spc-result-empty {
  text-align: center;
  padding: 28px 8px;
  color: rgba(255,255,255,.55);
  font-size: 13px;
  line-height: 1.6;
}
.spc-result-section { margin-bottom: 16px; }
.spc-result-section-lbl {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .14em;
  color: rgba(255,255,255,.5);
  text-transform: uppercase;
  margin-bottom: 10px;
}
.spc-line-items { list-style: none; padding: 0; margin: 0; }
.spc-line-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid var(--dark-line);
}
.spc-line-item:last-child { border-bottom: none; }
.spc-li-main { display: flex; gap: 10px; align-items: center; min-width: 0; }
.spc-li-icon { font-size: 18px; }
.spc-li-text { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.spc-li-label { font-size: 13px; font-weight: 500; }
.spc-li-meta {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .1em;
  color: rgba(255,255,255,.5);
  text-transform: uppercase;
}
.spc-li-price { display: inline-flex; align-items: baseline; gap: 6px; white-space: nowrap; }
.spc-li-val {
  font-family: 'Noto Serif KR', serif;
  font-style: italic;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  font-variant-numeric: lining-nums;
  font-feature-settings: "lnum" 1;
}
.spc-li-unit { font-size: 11px; color: rgba(255,255,255,.55); }
.spc-li-quote {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .1em;
  color: #d8a373;
}

.spc-result-services {
  background: rgba(255,255,255,.04);
  border-radius: 2px;
  padding: 12px 14px;
  margin-bottom: 16px;
}
.spc-services-list { list-style: none; padding: 0; margin: 0; }
.spc-service-item {
  font-size: 12px;
  color: rgba(255,255,255,.78);
  line-height: 1.8;
}

.spc-totals {
  padding-top: 16px;
  border-top: 1px solid var(--dark-line);
  margin-bottom: 20px;
}
.spc-totals-lbl {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .14em;
  color: rgba(255,255,255,.55);
  text-transform: uppercase;
}
.spc-totals-lbl-accent { color: rgba(255,255,255,.78); }
.spc-subtotal-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 6px;
}
.spc-subtotal-val .strike {
  text-decoration: line-through;
  color: rgba(255,255,255,.4);
  font-family: 'Noto Serif KR', serif;
  font-style: italic;
  font-size: 16px;
  font-variant-numeric: lining-nums;
  font-feature-settings: "lnum" 1;
}
.spc-totals-suffix { font-size: 11px; color: rgba(255,255,255,.4); margin-left: 6px; }
.spc-totals-suffix-lg { font-size: 14px; color: rgba(255,255,255,.7); }
.spc-discount-note {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .12em;
  color: #d8a373;
  text-align: right;
  margin-bottom: 12px;
  text-transform: uppercase;
}
.spc-final-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 10px;
}
.spc-final-price { display: inline-flex; align-items: baseline; gap: 8px; }
.spc-final-val {
  font-family: 'Noto Serif KR', serif;
  font-style: italic;
  font-weight: 500;
  font-size: 44px;
  line-height: 1.35;
  font-variant-numeric: lining-nums;
  font-feature-settings: "lnum" 1;
  color: var(--on-dark);
}
.spc-hasnull {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #d8a373;
  margin-left: 6px;
}
.spc-hasnull-note {
  font-size: 11px;
  color: rgba(255,255,255,.55);
  margin-top: 8px;
}

.spc-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  background: var(--on-dark);
  color: var(--dark);
  border: none;
  border-radius: 2px;
  padding: 14px 20px;
  font-family: inherit;
  font-size: 13.5px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 18px;
  transition: background .25s ease;
  letter-spacing: -0.005em;
}
.spc-cta:hover { background: #fff; }

.spc-policy {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
}
.spc-policy-chip {
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: .1em;
  color: rgba(255,255,255,.7);
  background: rgba(255,255,255,.06);
  border-radius: 2px;
  padding: 5px 10px;
}
.spc-fineprint {
  font-size: 11px;
  color: rgba(255,255,255,.45);
  line-height: 1.6;
  margin: 0;
}

/* ===== Modal ===== */
.spc-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(24, 19, 14, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: spc-fade-in .15s ease-out;
}
.spc-modal {
  position: relative;
  width: 100%;
  max-width: 440px;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 2px;
  padding: 40px 32px 32px;
  text-align: center;
  color: var(--ink);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.25);
  animation: spc-modal-in .2s ease-out;
}
.spc-modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  color: var(--muted);
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  border-radius: 2px;
  transition: background .15s ease, color .15s ease;
}
.spc-modal-close:hover {
  background: var(--bg-2);
  color: var(--ink);
}
.spc-modal-eyebrow {
  display: inline-block;
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 16px;
}
.spc-modal-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 16px;
  letter-spacing: -0.01em;
  line-height: 1.35;
}
.spc-modal-body {
  font-size: 14.5px;
  line-height: 1.75;
  color: var(--muted);
  margin: 0 0 28px;
}
.spc-modal-body strong {
  color: var(--ink-2);
  font-weight: 500;
}
.spc-modal-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  background: var(--ink);
  color: var(--paper);
  border: none;
  border-radius: 2px;
  padding: 14px 20px;
  font-size: 13.5px;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: -0.005em;
  transition: background .2s ease;
  font-family: inherit;
}
.spc-modal-cta:hover { background: var(--accent-deep); }
@keyframes spc-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes spc-modal-in {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
`,kb="/assets/grouting-Bwtwubk9.jpg",wb="/assets/grouting_m-MwMcW6AJ.jpg",Nb=["Since 2019","누적 2,000+ 현장","전 시공 대표 직접 마감"];function Sb(){return n.jsxs("section",{id:"about",className:"ab-section",children:[n.jsxs("div",{className:"ab-photo-wrap","aria-hidden":"true",children:[n.jsxs("picture",{children:[n.jsx("source",{media:"(max-width: 900px)",srcSet:wb}),n.jsx("img",{src:kb,alt:"",className:"ab-photo",loading:"lazy"})]}),n.jsx("div",{className:"ab-photo-fade"})]}),n.jsx("div",{className:"ab-text-outer px-6 md:px-12 lg:px-20",children:n.jsx("div",{className:"max-w-7xl mx-auto",children:n.jsxs("div",{className:"ab-text",children:[n.jsx("span",{className:"ab-eyebrow",children:"About Detailline"}),n.jsxs("h2",{className:"ab-headline",children:["보이지 않는",n.jsx("br",{}),"한 줄에도,",n.jsx("br",{}),n.jsx("span",{className:"ab-accent",children:"집요한 정성."})]}),n.jsxs("p",{className:"ab-body",children:["줄눈 한 줄은 손가락 한 마디 폭. 하지만 그 한 줄이",n.jsx("br",{className:"ab-br-pc"}),"공간의 인상을 좌우합니다. 디테일라인은 그 한 줄을",n.jsx("br",{className:"ab-br-pc"}),"끝까지 다듬는 사람들의 이름입니다."]}),n.jsx("ul",{className:"ab-badges",children:Nb.map(s=>n.jsxs("li",{className:"ab-badge",children:[n.jsx("span",{className:"ab-dot","aria-hidden":"true"}),s]},s))})]})})}),n.jsx("style",{children:zb})]})}const zb=`
.ab-section {
  position: relative;
  background: var(--bg-2);
  overflow: hidden;
}

/* ───── Photo: absolute background, max 1920px centered, cover-fills section ───── */
.ab-photo-wrap {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1920px;
  z-index: 1;
}

.ab-photo {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Left fade so headline/body remain readable over empty-floor portion */
.ab-photo-fade {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    to right,
    var(--bg-2) 0%,
    rgba(239, 234, 225, 0.78) 6%,
    rgba(239, 234, 225, 0.4) 22%,
    rgba(239, 234, 225, 0) 40%
  );
}

/* ───── Text: normal flow, drives section height, aligned to max-w-7xl grid ───── */
.ab-text-outer {
  position: relative;
  z-index: 2;
  padding-top: 96px;
  padding-bottom: 96px;
}

@media (min-width: 768px) {
  .ab-text-outer {
    padding-top: 120px;
    padding-bottom: 120px;
  }
}

@media (min-width: 1024px) {
  .ab-text-outer {
    padding-top: 144px;
    padding-bottom: 144px;
  }
}

.ab-text {
  max-width: 720px;
}

/* ───── Eyebrow / Headline / Body ───── */
.ab-eyebrow {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent);
  display: block;
  margin-bottom: 28px;
}

.ab-headline {
  font-family: 'Noto Serif KR', Georgia, serif;
  font-weight: 500;
  font-size: clamp(36px, 5.2vw, 64px);
  line-height: 1.22;
  letter-spacing: -0.01em;
  color: var(--ink);
  margin: 0 0 36px;
  word-break: keep-all;
}

.ab-accent {
  color: var(--accent);
}

.ab-body {
  font-size: 15.5px;
  line-height: 1.85;
  color: var(--muted);
  margin: 0 0 36px;
  max-width: 44ch;
  word-break: keep-all;
}

/* ───── Badges ───── */
.ab-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.ab-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 999px;
  font-size: 13px;
  font-weight: 500;
  color: var(--ink-2);
  letter-spacing: -0.005em;
  white-space: nowrap;
}

.ab-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  flex-shrink: 0;
}

/* ───── Tablet (≤ 1024px): tighten text for smaller image area ───── */
@media (max-width: 1024px) {
  .ab-headline {
    font-size: clamp(34px, 5vw, 48px);
  }
  .ab-body {
    font-size: 15px;
    max-width: 38ch;
  }
  .ab-br-pc { display: none; }
}

/* ───── Mobile (≤ 900px): vertical fade, larger headline ───── */
@media (max-width: 900px) {
  .ab-photo-fade {
    background: linear-gradient(
      180deg,
      rgba(239, 234, 225, 0.7) 0%,
      rgba(239, 234, 225, 0.42) 28%,
      rgba(239, 234, 225, 0.22) 60%,
      rgba(239, 234, 225, 0.38) 100%
    );
  }

  .ab-text-outer {
    padding-top: 72px;
    padding-bottom: 64px;
  }

  .ab-text { max-width: 100%; }

  .ab-headline {
    font-size: clamp(38px, 10vw, 50px);
    line-height: 1.22;
    margin-bottom: 32px;
    text-shadow: 0 1px 0 rgba(239, 234, 225, 0.35);
  }

  .ab-body {
    font-size: 14.5px;
    line-height: 1.8;
    color: var(--ink-2);
    max-width: 32ch;
    margin-bottom: 36px;
  }
}

/* ───── Small phones (≤ 480px): shrink headline more, single-line eyebrow ───── */
@media (max-width: 480px) {
  .ab-headline {
    font-size: clamp(32px, 9vw, 40px);
  }
  .ab-body {
    margin-bottom: 28px;
  }
  .ab-badge {
    padding: 8px 12px;
    font-size: 12px;
  }
}
`,Eb=[{id:1,question:"줄눈 시공은 어떤 공간에 적용할 수 있나요?",answer:"화장실, 주방, 현관, 베란다, 거실, 수영장, 목욕탕 등 타일이 시공된 모든 공간에 적용 가능합니다. 주거 공간뿐만 아니라 상업 시설, 공공시설에도 시공 가능하며, 실내외 모두 가능합니다. 공간별 특성에 맞는 전용 줄눈재를 사용합니다."},{id:2,question:"시공 기간은 얼마나 걸리나요?",answer:"일반 가정용 화장실 기준으로 보통 반나절(4~6시간) 내에 완료됩니다. 시공 면적과 오염 정도에 따라 다를 수 있으며, 대형 공간이나 전면 교체의 경우 1~2일이 소요될 수 있습니다. 정확한 기간은 현장 확인 후 안내드립니다."},{id:3,question:"기존 줄눈을 제거하고 새로 시공하나요?",answer:"오염 정도와 상태에 따라 달라집니다. 경미한 오염의 경우 세척 후 덧시공이 가능하지만, 곰팡이가 심하거나 들뜸 현상이 있는 경우에는 전동 공구를 이용해 기존 줄눈을 완전히 제거한 후 새로 시공합니다. 현장 방문 후 최적의 방법을 제안드립니다."},{id:4,question:"시공 후 관리 방법이 있나요?",answer:"시공 완료 후 24시간은 물에 닿지 않도록 해주세요. 이후에는 일반 중성 세제로 청소하시면 됩니다. 강산성·강알칼리성 세제는 줄눈재를 손상시킬 수 있으니 피해주세요. 정기적인 청소만으로도 시공 효과가 오래 유지됩니다. 보통 5~10년 이상 효과가 지속됩니다."},{id:5,question:"곰팡이가 심한 경우에도 시공이 가능한가요?",answer:"네, 가능합니다. 먼저 항균·항곰팡이 처리를 진행한 후, 곰팡이 방지 성분이 포함된 항균 줄눈재를 사용하여 시공합니다. 심한 경우에는 타일과 방수층까지 점검하여 근본적인 원인을 해결합니다. 재발 방지를 위한 처리까지 함께 진행합니다."},{id:6,question:"견적은 어떻게 받을 수 있나요?",answer:'하단의 "무료 견적 신청" 폼을 작성하시거나 전화로 문의 주시면 됩니다. 시공 면적, 타일 종류, 현재 상태 등 간단한 정보와 사진을 보내주시면 더 정확한 견적을 드릴 수 있습니다. 현장 방문 견적도 무료로 진행하고 있습니다.'}];function Ab(){const[s,d]=k.useState(null),o=u=>{d(f=>f===u?null:u)};return n.jsx("section",{id:"faq",className:"py-20 px-6 md:px-12 lg:px-20 bg-[var(--bg-2)]",children:n.jsxs("div",{className:"max-w-3xl mx-auto",children:[n.jsxs("div",{className:"text-center mb-10",children:[n.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"FAQ"}),n.jsx("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:"자주 묻는 질문"}),n.jsx("p",{className:"text-[var(--muted)] mt-3 text-base",children:"궁금하신 점을 확인하세요"})]}),n.jsx("div",{className:"space-y-0",children:Eb.map((u,f)=>n.jsxs("div",{className:`border-b ${f===0?"border-t":""} border-[var(--line)]`,children:[n.jsxs("button",{onClick:()=>o(u.id),className:"w-full flex items-start justify-between gap-4 py-5 text-left cursor-pointer group",children:[n.jsx("span",{className:`text-base font-medium leading-snug transition-colors ${s===u.id?"text-[var(--ink)]":"text-[var(--muted)] group-hover:text-[var(--ink-2)]"}`,children:u.question}),n.jsx("div",{className:`w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full transition-all ${s===u.id?"bg-[var(--ink)] text-[var(--paper)] rotate-45":"bg-[var(--paper)] text-[var(--muted)] border border-[var(--line)]"}`,children:n.jsx("i",{className:"ri-add-line text-sm"})})]}),s===u.id&&n.jsx("div",{className:"pb-10 bg-[var(--paper)]",children:n.jsx("p",{className:"px-5 pt-3 text-[var(--ink-2)] text-sm leading-relaxed",children:u.answer})})]},u.id))}),n.jsxs("div",{className:"mt-12 text-center bg-[var(--paper)] border border-[var(--line)] rounded-sm py-10 px-6",children:[n.jsx("p",{className:"text-stone-600 font-medium mb-2",children:"원하는 답을 찾지 못하셨나요?"}),n.jsx("p",{className:"text-stone-400 text-sm mb-6",children:"전화로 편하게 문의해 주세요"}),n.jsx("div",{className:"flex justify-center",children:n.jsxs("a",{href:"tel:010-8005-6674",onClick:()=>Ut.phoneClick("faq"),className:"inline-flex h-12 sm:min-w-[180px] items-center justify-center gap-2 px-7 text-sm font-medium cursor-pointer rounded-sm bg-[var(--accent)] text-white transition-all hover:bg-[var(--accent-deep)]",children:[n.jsx("i",{className:"ri-phone-line"}),"010-8005-6674"]})})]})]})})}const ym=["일","월","화","수","목","금","토"];function Xf(s,d){return s.getFullYear()===d.getFullYear()&&s.getMonth()===d.getMonth()&&s.getDate()===d.getDate()}function Jf(s){return`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`}function Tb(s){return`${s.getFullYear()}년 ${s.getMonth()+1}월 ${s.getDate()}일 (${ym[s.getDay()]})`}function Rb({name:s="date",onChange:d}){const o=new Date,[u,f]=k.useState(!1),[m,v]=k.useState(o.getFullYear()),[y,g]=k.useState(o.getMonth()),[h,T]=k.useState(null),w=L=>{const K=new Date(m,y+L,1);v(K.getFullYear()),g(K.getMonth())},B=L=>{T(L),d?.(Jf(L)),f(!1)},Z=()=>{T(null),d?.("")},S=()=>{v(o.getFullYear()),g(o.getMonth()),B(o)},q=new Date(m,y,1).getDay(),Y=new Date(m,y+1,0).getDate(),H=new Date(o.getFullYear(),o.getMonth(),o.getDate()),X=[...Array(q).fill(null),...Array.from({length:Y},(L,K)=>new Date(m,y,K+1))];return n.jsxs("div",{className:"relative w-full",children:[n.jsxs("button",{type:"button",onClick:()=>f(L=>!L),className:"w-full flex items-center justify-between px-4 py-3 rounded-sm border border-[var(--line)] bg-[var(--paper)] hover:border-[var(--line-strong)] transition-all duration-150",children:[n.jsx("span",{className:`text-sm ${h?"text-[var(--ink)]":"text-[var(--muted-2)]"}`,children:h?Tb(h):"날짜를 선택해 주세요"}),n.jsx("i",{className:"ri-calendar-line text-stone-400 text-base"})]}),n.jsx("input",{type:"hidden",name:s,value:h?Jf(h):""}),u&&n.jsxs("div",{className:"absolute z-50 mt-2 w-full bg-[var(--paper)] border border-[var(--line)] rounded-sm shadow-xl overflow-hidden",children:[n.jsxs("div",{className:"flex items-center justify-between px-5 pt-5 pb-3",children:[n.jsx("button",{type:"button",onClick:()=>w(-1),className:"w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-100 transition-colors",children:n.jsx("i",{className:"ri-arrow-left-s-line text-stone-500"})}),n.jsxs("span",{className:"text-sm font-medium text-stone-800 tracking-tight",children:[m,"년 ",y+1,"월"]}),n.jsx("button",{type:"button",onClick:()=>w(1),className:"w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-100 transition-colors",children:n.jsx("i",{className:"ri-arrow-right-s-line text-stone-500"})})]}),n.jsx("div",{className:"grid grid-cols-7 px-3 pb-1",children:ym.map((L,K)=>n.jsx("div",{className:`text-center text-xs font-medium py-1 ${K===0||K===6?"text-[var(--accent)]":"text-[var(--muted-2)]"}`,children:L},L))}),n.jsx("div",{className:"grid grid-cols-7 px-3 pb-4 gap-y-1",children:X.map((L,K)=>{if(!L)return n.jsx("div",{},`empty-${K}`);const ne=L<H,F=Xf(L,o),P=h?Xf(L,h):!1,je=L.getDay()===0,U=L.getDay()===6;let le="w-9 h-9 mx-auto flex items-center justify-center rounded-full text-sm transition-all duration-100 ";return P?le+="bg-[var(--ink)] text-[var(--paper)] font-medium":ne?le+="text-[var(--muted-2)]/50 cursor-not-allowed":F?le+="border border-[var(--accent)] text-[var(--accent)] font-medium hover:bg-[var(--accent)]/10":je||U?le+="text-[var(--muted-2)] hover:bg-[var(--bg-2)]":le+="text-[var(--ink-2)] hover:bg-[var(--bg-2)]",n.jsx("button",{type:"button",disabled:ne,onClick:()=>B(L),className:le,children:L.getDate()},L.toISOString())})}),n.jsxs("div",{className:"border-t border-[var(--line)] px-4 py-3 flex justify-between items-center",children:[n.jsx("button",{type:"button",onClick:Z,className:"text-xs text-[var(--muted-2)] hover:text-[var(--ink-2)] transition-colors",children:"초기화"}),n.jsx("button",{type:"button",onClick:S,className:"text-xs font-medium text-[var(--accent)] hover:text-[var(--accent-deep)] transition-colors",children:"오늘"})]})]})]})}const Wf=["현관","화장실","베란다","거실","주방","수영장","목욕탕","기타"],Cb="0x4AAAAAADGHPfvxD-MhAQbY";function Ob(s){return s.length<=3?s:s.length<=7?`${s.slice(0,3)}-${s.slice(3)}`:`${s.slice(0,3)}-${s.slice(3,7)}-${s.slice(7,11)}`}function Mb(){const[s,d]=k.useState(!1),[o,u]=k.useState(!1),[f,m]=k.useState(0),[v,y]=k.useState(""),[g,h]=k.useState(""),[T,w]=k.useState(""),[B,Z]=k.useState(""),[S,q]=k.useState([]),[Y,H]=k.useState(""),[X,L]=k.useState(!1),[K,ne]=k.useState({}),[F,P]=k.useState(""),je=k.useRef(null),U=k.useRef(null),le=500;k.useEffect(()=>{let V=!1;const b=()=>{if(!V&&je.current){if(typeof window.turnstile>"u"){setTimeout(b,100);return}U.current=window.turnstile.render(je.current,{sitekey:Cb,callback:O=>P(O),"error-callback":()=>P(""),"expired-callback":()=>P(""),theme:"light",size:"normal"})}};return b(),()=>{V=!0,U.current&&window.turnstile&&(window.turnstile.remove(U.current),U.current=null)}},[]),k.useEffect(()=>{const V=()=>{try{const b=sessionStorage.getItem(jr);if(!b)return;const O=JSON.parse(b);Array.isArray(O.areas)&&O.areas.length>0&&q(O.areas.filter(Q=>Wf.includes(Q))),typeof O.message=="string"&&O.message.length>0&&(H(O.message),m(O.message.length)),ne(Q=>({...Q,areas:""}))}catch{}};return V(),window.addEventListener(uo,V),()=>window.removeEventListener(uo,V)},[]);const re=V=>{const b=V.target.value.replace(/[0-9]/g,"").slice(0,9);y(b),ne(O=>({...O,name:""}))},$=V=>{const b=V.target.value.replace(/[^0-9]/g,"").slice(0,11);h(b),ne(O=>({...O,phone:""}))},ie=V=>{w(V.target.value.slice(0,39)),ne(b=>({...b,location:""}))},Oe=V=>{Z(V),ne(b=>({...b,date:""}))},ke=V=>{q(b=>b.includes(V)?b.filter(J=>J!==V):[...b,V]),ne(b=>({...b,areas:""}))},R=V=>{L(V.target.checked),ne(b=>({...b,privacy:""}))},G=()=>{const V={};return v.trim()||(V.name="이름을 입력해주세요."),g.length?g.length<10&&(V.phone="올바른 연락처를 입력해주세요."):V.phone="연락처를 입력해주세요.",T.trim()||(V.location="시공위치를 입력해주세요."),B||(V.date="희망날짜를 선택해주세요."),S.length===0&&(V.areas="시공공간을 1개 이상 선택해주세요."),X||(V.privacy="개인정보처리방침에 동의해주세요."),F||(V.cfToken="봇 검증을 완료해주세요."),ne(V),Object.keys(V).length===0},ee=v.trim().length>0&&g.length>=10&&T.trim().length>0&&B.length>0&&S.length>0&&F.length>0&&X,xe=async V=>{if(V.preventDefault(),!G())return;const b=V.currentTarget;if(b.querySelector('[name="company_website"]')?.value||""){d(!0);return}if((b.querySelector('[name="message"]')?.value||"").length>le)return;const J=new FormData(b),se=new URLSearchParams;J.forEach((de,be)=>{be!=="phone"&&be!=="company_website"&&se.append(be,de.toString())}),se.append("phone",g),se.append("cf_turnstile_token",F),u(!0);try{await fetch("https://script.google.com/macros/s/AKfycbyQBvfjjtCFSY4WZUL2Qv_vIwz4xbXyLF5pygpV5d_jpICW_hhXnDnr1r6jZHhS_kEayA/exec",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:se.toString()}),Ut.formSubmit(S,T.split(" ")[0]||"unknown"),d(!0),y(""),h(""),w(""),Z(""),q([]),H(""),L(!1),m(0),ne({}),P("");try{sessionStorage.removeItem(jr)}catch{}U.current&&window.turnstile&&window.turnstile.reset(U.current)}catch{alert("제출 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.")}finally{u(!1)}};return n.jsx("section",{id:"quote",className:"py-10 px-6 md:px-12 lg:px-20 bg-[var(--bg)]",children:n.jsxs("div",{className:"max-w-4xl mx-auto",children:[n.jsxs("div",{className:"text-center mb-10",children:[n.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Free Estimate"}),n.jsx("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:"무료 견적 상담 신청"}),n.jsx("p",{className:"text-[var(--muted)] mt-3",children:"양식을 작성하시면 24시간 내 연락드립니다"})]}),n.jsx("div",{className:"bg-white rounded-sm pt-5 px-5 pb-6 md:p-12 border border-[var(--line)]",style:{colorScheme:"light"},children:s?n.jsxs("div",{className:"text-center py-12",children:[n.jsx("div",{className:"w-16 h-16 flex items-center justify-center bg-[var(--ink)] rounded-full mx-auto mb-4",children:n.jsx("i",{className:"ri-check-line text-[var(--paper)] text-2xl"})}),n.jsx("h3",{className:"text-xl font-medium text-[var(--ink)] mb-2",children:"신청이 완료되었습니다!"}),n.jsxs("p",{className:"text-[var(--muted)] text-sm",children:["24시간 내에 담당자가 연락드릴 예정입니다.",n.jsx("br",{}),"감사합니다."]}),n.jsx("button",{onClick:()=>{d(!1),y(""),h(""),w(""),Z(""),q([]),H(""),L(!1),m(0),ne({});try{sessionStorage.removeItem(jr)}catch{}},className:"mt-6 text-sm text-stone-400 underline cursor-pointer",children:"다시 신청하기"})]}):n.jsxs("form",{"data-readdy-form":!0,onSubmit:xe,className:"space-y-6",children:[n.jsxs("div",{"aria-hidden":"true",style:{position:"absolute",left:"-9999px",width:"1px",height:"1px",overflow:"hidden"},children:[n.jsx("label",{htmlFor:"company_website",children:"Website (do not fill)"}),n.jsx("input",{type:"text",id:"company_website",name:"company_website",tabIndex:-1,autoComplete:"off",defaultValue:""})]}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[n.jsxs("div",{children:[n.jsxs("label",{className:"block text-sm font-medium text-[var(--ink-2)] mb-1.5",children:["이름 ",n.jsx("span",{className:"text-red-400",children:"*"})]}),n.jsx("input",{type:"text",name:"name",required:!0,value:v,onChange:re,maxLength:9,placeholder:"홍길동",className:"w-full px-4 py-3 border border-[var(--line)] rounded-sm text-base text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors"}),K.name&&n.jsx("p",{className:"mt-1 text-xs text-red-500",children:K.name})]}),n.jsxs("div",{children:[n.jsxs("label",{className:"block text-sm font-medium text-[var(--ink-2)] mb-1.5",children:["연락처 ",n.jsx("span",{className:"text-red-400",children:"*"})]}),n.jsxs("div",{className:"relative",children:[n.jsx("input",{type:"tel",name:"phone",required:!0,value:Ob(g),onChange:$,inputMode:"numeric",maxLength:13,placeholder:"010-1234-5678",className:"w-full px-4 py-3 border border-[var(--line)] rounded-sm text-base text-stone-700 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors"}),n.jsxs("span",{className:`absolute right-4 top-3 text-xs font-medium ${g.length>=10?"text-[var(--accent)]":"text-[var(--muted-2)]"}`,children:[g.length,"/11"]})]}),K.phone&&n.jsx("p",{className:"mt-1 text-xs text-red-500",children:K.phone})]})]}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[n.jsxs("div",{children:[n.jsxs("label",{className:"block text-sm font-medium text-[var(--ink-2)] mb-1.5",children:["시공 아파트 ",n.jsx("span",{className:"text-red-400",children:"*"})]}),n.jsx("input",{type:"text",name:"location",required:!0,value:T,onChange:ie,maxLength:39,placeholder:"예 : 서초구 반포동 자이아파트",className:"w-full px-4 py-3 border border-[var(--line)] rounded-sm text-base text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors"}),K.location&&n.jsx("p",{className:"mt-1 text-xs text-red-500",children:K.location})]}),n.jsxs("div",{children:[n.jsxs("label",{className:"block text-sm font-medium text-[var(--ink-2)] mb-1.5",children:["희망 날짜 ",n.jsx("span",{className:"text-red-400",children:"*"})]}),n.jsx(Rb,{name:"date",onChange:Oe}),K.date&&n.jsx("p",{className:"mt-1 text-xs text-red-500",children:K.date})]})]}),n.jsxs("div",{children:[n.jsxs("label",{className:"block text-sm font-medium text-stone-700 mb-2",children:["시공 공간 (중복 선택 가능) ",n.jsx("span",{className:"text-red-400",children:"*"})]}),n.jsx("div",{className:"flex flex-wrap gap-2",children:Wf.map(V=>n.jsxs("label",{className:"cursor-pointer",children:[n.jsx("input",{type:"checkbox",name:"areas",value:V,checked:S.includes(V),onChange:()=>ke(V),className:"sr-only peer"}),n.jsx("span",{className:"inline-block px-5 py-2 rounded-sm text-sm font-medium bg-white text-[var(--muted)] border border-[var(--line)] hover:border-[var(--line-strong)] peer-checked:bg-[var(--accent)] peer-checked:text-white peer-checked:border-[var(--accent)] transition-all cursor-pointer whitespace-nowrap",children:V})]},V))}),K.areas&&n.jsx("p",{className:"mt-1 text-xs text-red-500",children:K.areas})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-sm font-medium text-[var(--ink-2)] mb-1.5",children:"상세 내용"}),n.jsxs("div",{className:"relative",children:[n.jsx("textarea",{name:"message",rows:8,maxLength:le,value:Y,onChange:V=>{H(V.target.value),m(V.target.value.length)},placeholder:"시공 면적, 현재 상태, 요청 사항 등을 자유롭게 작성해 주세요.",className:"w-full px-4 py-3 border border-[var(--line)] rounded-sm text-base text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors resize-none"}),n.jsxs("span",{className:"absolute bottom-3 right-4 text-xs text-stone-400",children:[f," / ",le]})]})]}),n.jsxs("div",{className:"border-t text-sm text-center text-stone-500 px-4 py-3 border-stone-200",children:["희망 날짜에 시공이 어려울 수 있는 점 양해 부탁드립니다. ",n.jsx("br",{}),n.jsx("span",{className:"font-bold text-red-400",children:"정확한 시공 가능 일정은 상담 후 안내드리며,"})," 최대한 희망에 맞춰 드릴 수 있도록 노력하겠습니다."]}),n.jsxs("div",{children:[n.jsx("div",{ref:je,className:"flex justify-center"}),K.cfToken&&n.jsx("p",{className:"mt-1 text-xs text-red-500 text-center",children:K.cfToken})]}),n.jsxs("div",{className:"flex items-start gap-3",children:[n.jsx("input",{type:"checkbox",id:"privacy",name:"privacy",required:!0,checked:X,onChange:R,className:"w-5 h-5 mt-0.5 cursor-pointer accent-[var(--accent)]"}),n.jsxs("label",{htmlFor:"privacy",className:"text-sm text-stone-400 leading-relaxed cursor-pointer",children:["수집된 개인정보(이름, 연락처, 시공 위치, 희망 일정, 시공 공간, 상세 내용)는 견적 상담 목적으로만 사용되며, 상담 완료 후 즉시 폐기됩니다."," ",n.jsx(yt,{to:"/privacy",target:"_blank",rel:"noopener noreferrer",onClick:V=>V.stopPropagation(),className:"text-[var(--accent)] font-semibold underline underline-offset-2 hover:opacity-80",children:"개인정보 처리방침"}),"에 동의합니다."]})]}),K.privacy&&n.jsx("p",{className:"-mt-3 text-xs text-red-500",children:K.privacy}),n.jsx("button",{type:"submit",disabled:o||!ee,className:"w-full py-4 bg-[var(--ink)] text-[var(--paper)] font-medium text-base rounded-sm hover:bg-[var(--accent-deep)] transition-all cursor-pointer whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed",children:o?"제출 중...":"견적 신청하기"})]})})]})})}function Db(){return n.jsxs("div",{className:"min-h-screen bg-white",children:[n.jsx(al,{}),n.jsxs("main",{children:[n.jsx(_0,{}),n.jsx(Sb,{}),n.jsx(J0,{}),n.jsx(F0,{}),n.jsx(ib,{}),n.jsx(pb,{}),n.jsx(bb,{}),n.jsx(Ab,{}),n.jsx(Mb,{})]}),n.jsx(D0,{}),n.jsx(ll,{})]})}const _b="/assets/before-DA_T54W5.jpg",Ub="/assets/after-Cw81fPXQ.jpg",Bb="/assets/kerafoxy-C29B-TmB.jpg",Hb="/assets/bg-zCXDQjbF.webp",Yb="/assets/bg_m-D6VSEPhL.webp",Lb=[{k:"소재 분류",v:"에폭시 계열"},{k:"원산지",v:"이탈리아"},{k:"수명",v:"10년+"},{k:"A/S",v:"2년"}],qb=[{k:"압축강도",v:"75 N/mm²"},{k:"수축률",v:"≈ 0% (거의 없음)"},{k:"흡수율",v:"< 0.1 g/cm²"}],Gb=[{idx:"01",title:"강력한 내수성",body:"물에 강한 에폭시 성분으로 화장실·욕실의 지속적인 수분 노출에도 변형 없이 줄눈이 유지됩니다.",k:"흡수율",v:"< 0.1 g/cm²"},{idx:"02",title:"곰팡이·세균 차단",body:"항균 성분이 배합되어 습한 환경에서도 곰팡이와 세균이 번식하지 않아 위생적인 공간을 유지합니다.",k:"항균 등급",v:"JIS Z 2801"},{idx:"03",title:"다양한 색상 선택",body:"화이트·베이지·그레이·블랙 등 20여 가지 색상으로 인테리어 스타일에 맞는 선택이 가능합니다.",k:"컬러 옵션",v:"20+ Colors"},{idx:"04",title:"월등한 내구성",body:"일반 시멘트 줄눈 대비 3~5배 긴 수명을 자랑하며, 균열·탈락 없이 깔끔한 마감이 오래 유지됩니다.",k:"예상 수명",v:"10년+"},{idx:"05",title:"손쉬운 유지관리",body:"표면이 매끄럽고 오염이 잘 스며들지 않아 간단한 청소만으로 항상 깨끗한 상태를 유지할 수 있습니다.",k:"청소",v:"솔 청소 가능"},{idx:"+",title:"대표 직접 시공. 2년 무상 A/S.",body:"소재의 차이만큼이나 중요한 것은 시공자의 손. 디테일라인은 모든 현장을 대표가 직접 마감합니다.",k:"누적",v:"2,000+ 세대",dark:!0}],Vb=[{name:"시멘트 줄눈",tag:"Standard",items:["시공 비용이 가장 저렴","1~2년 후 변색·균열 발생","곰팡이 번식에 취약","주기적 재시공 필요"]},{name:"케라폭시 줄눈",tag:"Detailline 추천",hero:!0,items:["에폭시 결합 — 균열·변색 없음","항균 처리 — 곰팡이 차단","20+ 색상으로 인테리어 매칭","10년+ 수명 · 2년 무상 A/S"]},{name:"폴리우레아",tag:"Heavy-duty",items:["압도적 내구성·하중 강도","주차장·산업 현장에 적합","주거 인테리어엔 과도","색상·질감 선택이 제한적"]}],Qb=[{code:"SP · 01",ko:"화장실 · 욕실",en:"Bath / Powder Room",desc:"가장 많이 사용하는 공간으로, 케라폭시의 내수성과 항균 기능이 극대화됩니다."},{code:"SP · 02",ko:"주방 · 싱크대 주변",en:"Kitchen / Counter",desc:"음식물 오염과 물에 강해 주방 타일 줄눈에 이상적인 소재입니다."},{code:"SP · 03",ko:"베란다 · 발코니",en:"Veranda / Balcony",desc:"자외선과 온도 변화에도 변색이 거의 없어 실외 공간에도 적합합니다."},{code:"SP · 04",ko:"현관 바닥",en:"Entrance Floor",desc:"먼지와 오염이 많은 현관 바닥에서도 변색 없이 깔끔한 마감을 유지합니다."},{code:"SP · 05",ko:"수영장 · 목욕탕",en:"Pool / Sauna",desc:"항시 수분에 노출되는 환경에서도 박리 없이 완벽한 방수 성능을 발휘합니다."}],Zb=[{k:"시공 시간",v:"1일 (평형별 상이)"},{k:"건조 시간",v:"24시간 (완전 경화)"},{k:"사용 가능",v:"48시간 후 (물 사용 OK)"},{k:"A/S",v:"2년 (무상)"}];function io({num:s,ko:d,en:o,title:u,lede:f,dark:m}){return n.jsxs("div",{className:`kf-sec-head ${m?"kf-sec-head-dark":""}`,children:[n.jsxs("div",{className:"kf-sec-bar",children:[n.jsx("span",{className:"kf-sec-n",children:s}),n.jsx("span",{className:"kf-sec-rule"}),n.jsxs("span",{className:"kf-sec-lbl",children:[n.jsx("span",{className:"kf-sec-ko",children:d}),n.jsx("span",{className:"kf-sec-en",children:o})]})]}),n.jsxs("div",{className:"kf-sec-body",children:[n.jsx("h2",{className:"kf-sec-title",children:u}),n.jsx("p",{className:"kf-sec-lede",children:f})]})]})}function Kb(){const s=_a();k.useEffect(()=>{window.scrollTo(0,0),document.title="케라폭시 줄눈이란? — 디테일라인";const o=document.querySelector('meta[name="description"]'),u=o?.getAttribute("content")??"";return o?.setAttribute("content","에폭시 수지·경화제 2액형 고성능 줄눈 소재 케라폭시. 시멘트 줄눈과의 차이, 5가지 핵심 장점, 적합한 공간, 시공 전·후 변화를 정리했습니다."),()=>{o&&u&&o.setAttribute("content",u)}},[]);const d=()=>{s("/#calc"),setTimeout(()=>{const o=document.querySelector("#calc");o&&o.scrollIntoView({behavior:"smooth"})},300)};return n.jsxs("div",{className:"kf-page",children:[n.jsx(al,{}),n.jsxs("header",{className:"kf-hero","data-screen-label":"01 Hero",children:[n.jsx("div",{className:"kf-hero-bg",style:{"--hero-img-d":`url(${Hb})`,"--hero-img-m":`url(${Yb})`},"aria-hidden":"true"}),n.jsxs("div",{className:"kf-container kf-hero-inner",children:[n.jsx("div",{className:"kf-eyebrow kf-eyebrow-light",children:"Grout Knowledge · 01"}),n.jsxs("h1",{className:"kf-hero-title",children:["케라폭시 줄눈,",n.jsx("br",{}),"한 줄의 깊이 ",n.jsx("em",{children:"완벽"}),"의 기준."]}),n.jsxs("p",{className:"kf-hero-lede",children:["마페이의 80년 경험치를 흡수한 2액형 고성능 줄눈 소재.",n.jsx("br",{}),"일반 시멘트 줄눈과 무엇이 다른지, 왜 프리미엄 공간에 선택되는지 정리했습니다."]}),n.jsx("ul",{className:"kf-hero-meta",children:Lb.map(o=>n.jsxs("li",{children:[n.jsx("span",{className:"kf-meta-k",children:o.k}),n.jsx("span",{className:"kf-meta-v",children:o.v})]},o.k))})]})]}),n.jsx("nav",{className:"kf-crumb","aria-label":"현재 위치",children:n.jsxs("div",{className:"kf-container kf-crumb-inner",children:[n.jsx(yt,{to:"/",className:"kf-crumb-item",children:"홈"}),n.jsx("span",{className:"kf-crumb-sep",children:"/"}),n.jsx("span",{className:"kf-crumb-item",children:"줄눈 정보"}),n.jsx("span",{className:"kf-crumb-sep",children:"/"}),n.jsx("span",{className:"kf-crumb-here",children:"케라폭시 줄눈이란?"})]})}),n.jsx("section",{className:"kf-section","data-screen-label":"02 Introduction",children:n.jsx("div",{className:"kf-container",children:n.jsxs("div",{className:"kf-intro",children:[n.jsxs("div",{className:"kf-intro-left",children:[n.jsx("div",{className:"kf-eyebrow",children:"Introduction · 들어가며"}),n.jsxs("h2",{className:"kf-intro-title",children:["케라폭시 줄눈,",n.jsx("br",{}),"왜 ",n.jsx("em",{children:"프리미엄 소재"}),"인가요?"]}),n.jsxs("p",{className:"kf-intro-body",children:[n.jsx("em",{className:"kf-hl",children:"케라폭시(Kerafoxy)는 에폭시 수지와 경화제를 혼합한 2액형 고성능 줄눈 소재"}),"입니다. 시멘트 줄눈이 물과 함께 굳는 방식과 달리, 화학적 결합으로 경화되어 본질적으로 다른 강도와 방수성을 만들어냅니다."]}),n.jsx("p",{className:"kf-intro-body",children:"이탈리아 건설 소재 전문 브랜드가 개발한 케라폭시는 국내외 수많은 고급 주택·호텔·상업 공간에서 사용되며 줄눈 소재로서의 우수성이 검증되어 있습니다."}),n.jsx("p",{className:"kf-intro-body",children:"특히 곰팡이가 쉽게 번식하는 욕실·주방 환경에서, 케라폭시는 일반 시멘트 줄눈 대비 압도적인 위생 유지 효과를 보여줍니다."}),n.jsx("ul",{className:"kf-intro-stats",children:qb.map(o=>n.jsxs("li",{children:[n.jsx("span",{className:"kf-stat-k",children:o.k}),n.jsx("span",{className:"kf-stat-v",children:o.v})]},o.k))})]}),n.jsx("div",{className:"kf-intro-right",children:n.jsx("div",{className:"kf-intro-photo",children:n.jsx("img",{src:Bb,alt:"케라폭시 줄눈 시공 디테일",loading:"lazy"})})})]})})}),n.jsx("section",{className:"kf-section kf-bg-paper","data-screen-label":"03 Benefits",children:n.jsxs("div",{className:"kf-container",children:[n.jsx(io,{num:"02",ko:"5가지 핵심 장점",en:"Benefits",title:n.jsxs(n.Fragment,{children:["일반 시멘트 줄눈과 비교할 수 없는 ",n.jsx("em",{children:"성능 차이"}),"."]}),lede:"물·세균·시간이라는 줄눈의 세 가지 적에 대해, 케라폭시가 어떻게 대응하는지 정리했습니다."}),n.jsx("div",{className:"kf-benefits-grid",children:Gb.map(o=>n.jsxs("article",{className:`kf-benefit ${o.dark?"kf-benefit-dark":""}`,children:[n.jsxs("div",{className:"kf-benefit-head",children:[n.jsxs("span",{className:"kf-benefit-lbl",children:["Benefit / ",o.idx]}),n.jsx("span",{className:"kf-benefit-idx",children:o.idx})]}),n.jsx("h3",{className:"kf-benefit-title",children:o.title.split(`
`).map((u,f)=>n.jsx("span",{className:"kf-benefit-title-line",children:u},f))}),n.jsx("p",{className:"kf-benefit-body",children:o.body}),n.jsxs("div",{className:"kf-benefit-spec",children:[n.jsx("span",{className:"kf-spec-k",children:o.k}),n.jsx("span",{className:"kf-spec-v",children:o.v})]})]},o.idx))}),n.jsx("div",{className:"kf-compare",children:Vb.map(o=>n.jsxs("div",{className:`kf-compare-col ${o.hero?"kf-is-hero":""}`,children:[n.jsxs("div",{className:"kf-compare-head",children:[n.jsx("h3",{className:"kf-compare-name",children:o.name}),n.jsx("span",{className:"kf-compare-tag",children:o.tag})]}),n.jsx("ul",{className:"kf-compare-list",children:o.items.map(u=>n.jsx("li",{children:u},u))})]},o.name))})]})}),n.jsx("section",{className:"kf-section","data-screen-label":"04 Spaces",children:n.jsxs("div",{className:"kf-container",children:[n.jsx(io,{num:"03",ko:"적합한 공간",en:"Spaces",title:n.jsxs(n.Fragment,{children:["어떤 공간에 케라폭시를 ",n.jsx("em",{children:"시공"}),"해야 할까요?"]}),lede:"물과 오염이 가까운 곳, 미관과 위생을 동시에 잡아야 하는 곳에 케라폭시가 강합니다."}),n.jsx("ul",{className:"kf-spaces",children:Qb.map(o=>n.jsxs("li",{className:"kf-space-row",children:[n.jsx("span",{className:"kf-space-code",children:o.code}),n.jsxs("span",{className:"kf-space-lbl",children:[n.jsx("span",{className:"kf-space-ko",children:o.ko}),n.jsx("span",{className:"kf-space-en",children:o.en})]}),n.jsx("span",{className:"kf-space-desc",children:o.desc}),n.jsxs("span",{className:"kf-space-more",children:["자세히 ",n.jsx("span",{className:"kf-space-arr",children:"→"})]})]},o.code))})]})}),n.jsx("section",{className:"kf-section-dark","data-screen-label":"05 Before · After",children:n.jsxs("div",{className:"kf-container",children:[n.jsx(io,{dark:!0,num:"04",ko:"시공 전 · 후 비교",en:"Before · After",title:n.jsxs(n.Fragment,{children:["한 번의 시공으로, 줄눈이 ",n.jsx("em",{children:"인테리어의 점"}),"이 됩니다."]}),lede:"실제 시공 현장에서 발견되는 변화를 정리했습니다. 같은 공간, 다른 마감."}),n.jsxs("div",{className:"kf-ba-grid",children:[n.jsxs("figure",{className:"kf-ba-item",children:[n.jsxs("div",{className:"kf-ba-photo",children:[n.jsx("img",{src:_b,alt:"시공 전 — 시멘트 줄눈 상태",loading:"lazy"}),n.jsx("span",{className:"kf-ba-pill kf-ba-pill-light",children:"Before"})]}),n.jsxs("figcaption",{className:"kf-ba-cap",children:[n.jsx("h4",{className:"kf-ba-cap-title",children:"변색·균열·곰팡이 발생, 청소 어려움"}),n.jsx("p",{className:"kf-ba-cap-body",children:"시간이 지나며 흡수된 수분과 오염으로 줄눈이 어둡게 변하고, 모서리 부근부터 균열이 나타납니다."})]})]}),n.jsxs("figure",{className:"kf-ba-item",children:[n.jsxs("div",{className:"kf-ba-photo",children:[n.jsx("img",{src:Ub,alt:"시공 후 — 케라폭시 줄눈 마감",loading:"lazy"}),n.jsx("span",{className:"kf-ba-pill kf-ba-pill-accent",children:"After"})]}),n.jsxs("figcaption",{className:"kf-ba-cap",children:[n.jsx("h4",{className:"kf-ba-cap-title",children:"매끄럽고 균일한 마감, 위생적인 깨끗함"}),n.jsx("p",{className:"kf-ba-cap-body",children:"균일한 두께·색상으로 타일 사이의 선이 이어지며, 청소 한 번으로 새것처럼 유지됩니다."})]})]})]}),n.jsx("ul",{className:"kf-ba-bottom",children:Zb.map(o=>n.jsxs("li",{children:[n.jsx("span",{className:"kf-ba-bot-k",children:o.k}),n.jsx("span",{className:"kf-ba-bot-v",children:o.v})]},o.k))})]})}),!1,n.jsx("section",{className:"kf-cta-band","data-screen-label":"CTA Band",children:n.jsxs("div",{className:"kf-container kf-cta-row",children:[n.jsxs("div",{className:"kf-cta-text",children:[n.jsxs("h3",{className:"kf-cta-title",children:["우리 집 줄눈에 맞는 답이 궁금하다면, ",n.jsx("em",{children:"무료 견적"}),"으로 시작하세요."]}),n.jsx("p",{className:"kf-cta-sub",children:"평형 · 공간 · 색상을 알려주시면 24시간 내에 회신드립니다."})]}),n.jsxs("div",{className:"kf-cta-actions",children:[n.jsxs("button",{type:"button",className:"kf-btn kf-btn-primary",onClick:d,children:["무료 견적 받기 ",n.jsx("span",{className:"kf-btn-arr",children:"→"})]}),n.jsx("a",{href:"tel:010-8005-6674",onClick:()=>Ut.phoneClick("info_cta"),className:"kf-btn kf-btn-ghost",children:"전화 상담 010-8005-6674"})]})]})}),n.jsx(ll,{}),n.jsx("style",{children:Xb})]})}const Xb=`
.kf-page {
  background: var(--bg);
  color: var(--ink);
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
}
.kf-page ::selection { background: var(--accent); color: #fff; }

.kf-container {
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 32px;
}
@media (max-width: 720px) {
  .kf-container { padding: 0 20px; }
}

.kf-section {
  padding: 120px 0;
  border-top: 1px solid var(--line);
}
.kf-section-dark {
  padding: 120px 0;
  background: var(--dark);
  color: var(--on-dark);
}
.kf-bg-paper { background: var(--paper); }
@media (max-width: 720px) {
  .kf-section, .kf-section-dark { padding: 72px 0; }
}

.kf-eyebrow {
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
}
.kf-eyebrow-light { color: #d9b790; }

em {
  font-style: normal;
  color: var(--accent);
}
.kf-section-dark em, .kf-hero em { color: #e3c5a3; }

/* ===== Hero ===== */
.kf-hero {
  position: relative;
  padding: 168px 0 84px;
  overflow: hidden;
  isolation: isolate;
}
@media (max-width: 720px) {
  .kf-hero { padding: 120px 0 64px; }
}
.kf-hero-bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    /* Bottom fade — light top → strong dark near bottom for image blend */
    linear-gradient(180deg, rgba(20,16,12,.25) 0%, rgba(20,16,12,.25) 35%, rgba(14,11,8,.95) 100%),
    radial-gradient(120% 80% at 70% 20%, rgba(138,106,76,.18), transparent 60%),
    /* Width-anchored, top-aligned */
    var(--hero-img-d, none) center top / 100% auto no-repeat,
    linear-gradient(180deg, #251d14 0%, #18130e 100%);
}
@media (max-width: 720px) {
  /* Mobile uses dedicated mobile-optimized image with cover */
  .kf-hero-bg {
    background:
      linear-gradient(180deg, rgba(20,16,12,.35) 0%, rgba(14,11,8,.78) 100%),
      radial-gradient(120% 80% at 70% 20%, rgba(138,106,76,.18), transparent 60%),
      var(--hero-img-m, none) center/cover no-repeat,
      linear-gradient(180deg, #251d14 0%, #18130e 100%);
  }
}
.kf-hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(120% 100% at 50% 0%, rgba(0,0,0,.15), rgba(0,0,0,.55) 80%);
  pointer-events: none;
}
.kf-hero-inner { position: relative; z-index: 1; }
.kf-hero-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: clamp(36px, 5vw, 68px);
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: #fff;
  margin: 14px 0 22px;
  max-width: 24ch;
  word-break: keep-all;
}
.kf-hero-lede {
  font-size: 15.5px;
  line-height: 1.75;
  color: rgba(255,255,255,.78);
  max-width: 56ch;
  margin: 0;
}
.kf-hero-meta {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  list-style: none;
  padding: 0;
  margin: 48px 0 0;
  border-top: 1px solid rgba(255,255,255,.16);
}
.kf-hero-meta li {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 22px 22px 22px 0;
  border-right: 1px solid rgba(255,255,255,.16);
}
.kf-hero-meta li:last-child { border-right: none; }
.kf-hero-meta li:not(:first-child) { padding-left: 22px; }
.kf-meta-k {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,.55);
}
.kf-meta-v {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: 17px;
  color: #fff;
  letter-spacing: -0.005em;
}
.kf-meta-small {
  font-size: 11.5px;
  color: rgba(255,255,255,.6);
}
@media (max-width: 720px) {
  .kf-hero-meta { grid-template-columns: repeat(2, 1fr); }
  .kf-hero-meta li:nth-child(2) { border-right: none; }
  .kf-hero-meta li:nth-child(3) { padding-left: 0; }
  .kf-hero-meta li:nth-child(3), .kf-hero-meta li:nth-child(4) {
    border-top: 1px solid rgba(255,255,255,.16);
  }
}

/* ===== Breadcrumb ===== */
.kf-crumb {
  background: var(--paper);
  border-bottom: 1px solid var(--line);
}
.kf-crumb-inner {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 32px;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: var(--muted-2);
}
@media (max-width: 720px) {
  .kf-crumb-inner { padding: 14px 20px; }
}
.kf-crumb-item {
  color: var(--muted-2);
  text-decoration: none;
  transition: color .2s ease;
}
.kf-crumb-item:hover { color: var(--accent); }
.kf-crumb-sep { opacity: .4; }
.kf-crumb-here { color: var(--ink); }

/* ===== Section Head ===== */
.kf-sec-head { margin-bottom: 64px; }
.kf-sec-bar {
  display: flex;
  align-items: center;
  gap: 18px;
  padding-bottom: 22px;
  margin-bottom: 36px;
  border-bottom: 1px solid var(--line);
}
.kf-sec-head-dark .kf-sec-bar { border-bottom-color: rgba(255,255,255,.14); }
.kf-sec-n {
  font-family: 'Noto Serif KR', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 1;
  color: var(--accent);
  font-variant-numeric: lining-nums;
}
.kf-sec-head-dark .kf-sec-n { color: #d9b790; }
.kf-sec-rule {
  flex: 0 0 56px;
  height: 1px;
  background: var(--accent);
  opacity: .6;
}
.kf-sec-head-dark .kf-sec-rule { background: #d9b790; opacity: .7; }
.kf-sec-lbl {
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
.kf-sec-ko { color: var(--ink-2); }
.kf-sec-head-dark .kf-sec-ko { color: #fff; }
.kf-sec-en { color: var(--muted-2); margin-left: 10px; }
.kf-sec-head-dark .kf-sec-en { color: rgba(255,255,255,.5); }
.kf-sec-body {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 64px;
  align-items: end;
}
@media (max-width: 820px) {
  .kf-sec-body { grid-template-columns: 1fr; gap: 24px; align-items: start; }
}
.kf-sec-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: clamp(30px, 3.6vw, 48px);
  line-height: 1.3;
  letter-spacing: -0.01em;
  margin: 0;
  word-break: keep-all;
}
.kf-sec-head-dark .kf-sec-title { color: var(--on-dark); }
.kf-sec-lede {
  font-size: 16px;
  line-height: 1.75;
  color: var(--muted);
  margin: 0;
}
.kf-sec-head-dark .kf-sec-lede { color: var(--dark-muted); }

/* ===== Intro ===== */
.kf-intro {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 80px;
  align-items: start;
}
@media (max-width: 820px) {
  .kf-intro { grid-template-columns: 1fr; gap: 40px; }
}
.kf-intro-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: clamp(28px, 3.2vw, 44px);
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: var(--ink);
  margin: 16px 0 28px;
  word-break: keep-all;
}
.kf-intro-body {
  font-size: 16px;
  line-height: 1.85;
  color: var(--ink-2);
  margin: 0 0 18px;
  word-break: keep-all;
}
.kf-hl {
  background: linear-gradient(180deg, transparent 62%, rgba(138,106,76,.18) 62%);
}
.kf-intro-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  padding: 22px 0 0;
  margin: 28px 0 0;
  border-top: 1px solid var(--line);
  gap: 0;
}
.kf-intro-stats li {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-right: 18px;
}
.kf-intro-stats li + li {
  border-left: 1px solid var(--line);
  padding-left: 18px;
}
.kf-stat-k {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.kf-stat-v {
  font-family: 'Noto Serif KR', serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.3;
  color: var(--ink);
  font-variant-numeric: lining-nums;
}

/* ===== Intro photo ===== */
.kf-intro-photo {
  position: relative;
  width: 80%;
  margin-left: auto;
  aspect-ratio: 5 / 6;
  overflow: hidden;
  border: 1px solid var(--line);
  background: var(--bg-2);
}
@media (max-width: 820px) {
  .kf-intro-photo { width: 100%; margin-left: 0; }
}
.kf-intro-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* ===== Image placeholder ===== */
.kf-imgph {
  position: relative;
  width: 100%;
  overflow: hidden;
  background:
    repeating-linear-gradient(
      135deg,
      rgba(28,25,22,.04) 0 1px,
      transparent 1px 24px
    ),
    radial-gradient(120% 80% at 30% 20%, rgba(255,255,255,.5), transparent 55%),
    linear-gradient(180deg, #ece5d8 0%, #d9cfbf 100%);
  border: 1px solid var(--line);
}
.kf-imgph-dark {
  background:
    repeating-linear-gradient(
      135deg,
      rgba(255,255,255,.05) 0 1px,
      transparent 1px 24px
    ),
    radial-gradient(120% 80% at 70% 20%, rgba(138,106,76,.25), transparent 60%),
    linear-gradient(180deg, #251d14 0%, #18130e 100%);
  border-color: rgba(255,255,255,.1);
  color: var(--on-dark);
}
.kf-ph-corner {
  position: absolute;
  top: 14px;
  right: 16px;
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.kf-imgph-dark .kf-ph-corner { color: rgba(255,255,255,.55); }
.kf-ph-label {
  position: absolute;
  left: 18px;
  bottom: 16px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.kf-imgph-dark .kf-ph-label { color: rgba(255,255,255,.55); }
.kf-ph-sq {
  display: inline-block;
  width: 6px;
  height: 6px;
  background: var(--accent);
}

/* ===== Benefits ===== */
.kf-benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
  margin-bottom: 80px;
}
@media (max-width: 900px) {
  .kf-benefits-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .kf-benefits-grid { grid-template-columns: 1fr; }
}
.kf-benefit {
  background: var(--bg);
  padding: 40px 36px 36px;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  transition: background .25s ease;
}
.kf-benefit:hover { background: var(--paper); }
.kf-benefit-dark {
  background: var(--ink);
  color: var(--on-dark);
}
.kf-benefit-dark:hover { background: var(--ink); }
.kf-benefit-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 18px;
}
.kf-benefit-lbl {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
}
.kf-benefit-dark .kf-benefit-lbl { color: #d9b790; }
.kf-benefit-idx {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-style: italic;
  font-size: 40px;
  line-height: 1;
  color: var(--accent);
  opacity: .35;
  letter-spacing: -0.02em;
  padding-right: 2px;
  flex-shrink: 0;
}
@media (max-width: 900px) {
  .kf-benefit-idx { font-size: 32px; }
}
.kf-benefit-dark .kf-benefit-idx { color: #d9b790; opacity: .55; }
.kf-benefit-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.35;
  letter-spacing: -0.005em;
  color: var(--ink);
  margin: 0 0 14px;
  display: flex;
  flex-direction: column;
}
.kf-benefit-dark .kf-benefit-title { color: #fff; }
.kf-benefit-title-line { display: block; }
.kf-benefit-body {
  font-size: 14px;
  line-height: 1.75;
  color: var(--muted);
  margin: 0;
  min-height: calc(1.75em * 3);
}
.kf-benefit-dark .kf-benefit-body { color: rgba(255,255,255,.7); }
.kf-benefit-spec {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  padding-top: 18px;
  margin-top: auto;
  border-top: 1px solid var(--line);
}
.kf-benefit-dark .kf-benefit-spec { border-top-color: rgba(255,255,255,.14); }
.kf-spec-k {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.kf-benefit-dark .kf-spec-k { color: #d9b790; }
.kf-spec-v {
  font-family: 'Noto Serif KR', serif;
  font-weight: 500;
  font-size: 16px;
  color: var(--ink);
  font-variant-numeric: lining-nums;
}
.kf-benefit-dark .kf-spec-v { color: #fff; }

/* ===== Compare ===== */
.kf-compare {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border: 1px solid var(--line);
}
@media (max-width: 820px) {
  .kf-compare { grid-template-columns: 1fr; }
}
.kf-compare-col {
  background: var(--bg);
  padding: 36px 32px;
  border-right: 1px solid var(--line);
}
.kf-compare-col:last-child { border-right: none; }
@media (max-width: 820px) {
  .kf-compare-col {
    border-right: none;
    border-bottom: 1px solid var(--line);
  }
  .kf-compare-col:last-child { border-bottom: none; }
}
.kf-compare-col.kf-is-hero {
  background: var(--ink);
  color: var(--on-dark);
}
.kf-compare-head {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 18px;
  margin-bottom: 18px;
  border-bottom: 1px solid var(--line);
}
.kf-compare-col.kf-is-hero .kf-compare-head { border-bottom-color: rgba(255,255,255,.14); }
.kf-compare-name {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: -0.005em;
  color: var(--ink);
  margin: 0;
}
.kf-compare-col.kf-is-hero .kf-compare-name { color: #fff; }
.kf-compare-tag {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.kf-compare-col.kf-is-hero .kf-compare-tag { color: #d9b790; }
.kf-compare-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.kf-compare-list li {
  font-size: 14px;
  line-height: 1.7;
  color: var(--ink-2);
  padding-left: 14px;
  position: relative;
}
.kf-compare-list li::before {
  content: '';
  position: absolute;
  left: 0; top: 0.75em;
  width: 6px; height: 1px;
  background: var(--muted-2);
}
.kf-compare-col.kf-is-hero .kf-compare-list li { color: rgba(255,255,255,.85); }
.kf-compare-col.kf-is-hero .kf-compare-list li::before { background: #d9b790; }

/* ===== Spaces ===== */
.kf-spaces { list-style: none; padding: 0; margin: 0; }
.kf-space-row {
  display: grid;
  grid-template-columns: 90px 1fr 2fr 100px;
  gap: 32px;
  align-items: center;
  padding: 32px 8px;
  border-bottom: 1px solid var(--line);
  transition: background .25s ease, padding .25s ease;
}
.kf-space-row:first-child { border-top: 1px solid var(--line); }
.kf-space-row:hover {
  background: var(--paper);
  padding-left: 28px;
}
.kf-space-row:hover .kf-space-more {
  color: var(--accent);
}
.kf-space-row:hover .kf-space-arr {
  transform: translateX(4px);
}
.kf-space-code {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.kf-space-lbl { display: flex; flex-direction: column; gap: 4px; }
.kf-space-ko {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: 21px;
  color: var(--ink);
  letter-spacing: -0.005em;
}
.kf-space-en {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.kf-space-desc {
  font-size: 14.5px;
  line-height: 1.7;
  color: var(--muted);
}
.kf-space-more {
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
  text-align: right;
  transition: color .25s ease;
}
.kf-space-arr {
  display: inline-block;
  margin-left: 4px;
  transition: transform .3s ease;
}
@media (max-width: 820px) {
  .kf-space-row {
    grid-template-columns: 1fr;
    gap: 8px;
    padding: 24px 8px;
  }
  .kf-space-row:hover { padding-left: 18px; }
  .kf-space-code { display: none; }
  .kf-space-desc, .kf-space-more { grid-column: 1; }
  .kf-space-more { text-align: left; }
}

/* ===== Before · After ===== */
.kf-ba-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}
@media (max-width: 820px) { .kf-ba-grid { grid-template-columns: 1fr; } }
.kf-ba-item { margin: 0; }
.kf-ba-photo {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: #1f1a14;
  border: 1px solid rgba(255,255,255,.1);
}
.kf-ba-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.kf-ba-pill {
  position: absolute;
  top: 16px;
  left: 16px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 6px 12px;
  border-radius: 999px;
}
.kf-ba-pill-light {
  background: rgba(255,255,255,.92);
  color: var(--ink);
}
.kf-ba-pill-accent {
  background: #d9b790;
  color: var(--dark);
}
.kf-ba-cap { padding: 22px 4px 0; }
.kf-ba-cap-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: 19px;
  line-height: 1.4;
  color: var(--on-dark);
  margin: 0 0 8px;
}
.kf-ba-cap-body {
  font-size: 14px;
  line-height: 1.7;
  color: var(--dark-muted);
  margin: 0;
}
.kf-ba-bottom {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
  padding: 32px 0 0;
  margin: 80px 0 0;
  border-top: 1px solid rgba(255,255,255,.14);
  gap: 0;
}
@media (max-width: 820px) {
  .kf-ba-bottom { grid-template-columns: repeat(2, 1fr); row-gap: 24px; }
}
.kf-ba-bottom li {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-right: 18px;
  border-right: 1px solid rgba(255,255,255,.14);
}
.kf-ba-bottom li:last-child { border-right: none; }
.kf-ba-bottom li:not(:first-child) { padding-left: 18px; }
@media (max-width: 820px) {
  .kf-ba-bottom li:nth-child(2) { border-right: none; }
  .kf-ba-bottom li:nth-child(3) { padding-left: 0; }
}
.kf-ba-bot-k {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,.55);
}
.kf-ba-bot-v {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: 18px;
  color: var(--on-dark);
  letter-spacing: -0.005em;
}
@media (max-width: 820px) {
  .kf-ba-bot-v { font-size: 16px; }
}

/* ===== Related ===== */
.kf-related-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
@media (max-width: 900px) {
  .kf-related-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .kf-related-grid { grid-template-columns: 1fr; }
}
.kf-related-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: var(--paper);
  border: 1px solid var(--line);
  padding: 32px 28px 28px;
  min-height: 220px;
  color: inherit;
  text-decoration: none;
  transition: background .25s ease, color .25s ease, border-color .25s ease;
}
.kf-related-card:hover {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
}
.kf-related-idx {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.kf-related-card:hover .kf-related-idx { color: #d9b790; }
.kf-related-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 500;
  font-size: 21px;
  line-height: 1.35;
  color: var(--ink);
  margin: 0;
  letter-spacing: -0.005em;
}
.kf-related-card:hover .kf-related-title { color: #fff; }
.kf-related-desc {
  font-size: 13px;
  line-height: 1.7;
  color: var(--muted);
  margin: 0;
}
.kf-related-card:hover .kf-related-desc { color: rgba(255,255,255,.75); }
.kf-related-more {
  margin-top: auto;
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.kf-related-card:hover .kf-related-more { color: #d9b790; }
.kf-related-arr { transition: transform .3s ease; }
.kf-related-card:hover .kf-related-arr { transform: translateX(4px); }

/* ===== CTA Band ===== */
.kf-cta-band {
  background: var(--bg-2);
  border-top: 1px solid var(--line);
  padding: 72px 0;
}
@media (max-width: 720px) {
  .kf-cta-band { padding: 56px 0; }
}
.kf-cta-row {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 32px;
  align-items: center;
}
@media (max-width: 820px) {
  .kf-cta-row { grid-template-columns: 1fr; gap: 24px; }
}
.kf-cta-text { display: flex; flex-direction: column; gap: 8px; }
.kf-cta-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: clamp(22px, 2.5vw, 30px);
  line-height: 1.4;
  letter-spacing: -0.005em;
  color: var(--ink);
  margin: 0;
  word-break: keep-all;
}
.kf-cta-sub {
  font-size: 14px;
  color: var(--muted);
  margin: 0;
}
.kf-cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-end;
}
@media (max-width: 820px) {
  .kf-cta-actions {
    flex-wrap: nowrap;
    justify-content: flex-start;
    gap: 8px;
  }
  .kf-cta-actions .kf-btn {
    flex: 1 1 0;
    min-width: 0;
    padding: 14px 12px;
    font-size: 13px;
    white-space: nowrap;
    justify-content: center;
  }
}

/* ===== Buttons ===== */
.kf-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 22px;
  border-radius: 2px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.005em;
  border: 0;
  cursor: pointer;
  text-decoration: none;
  transition: background .25s ease, color .25s ease, border-color .25s ease;
}
.kf-btn-arr { transition: transform .3s ease; }
.kf-btn:hover .kf-btn-arr { transform: translateX(4px); }
.kf-btn-primary {
  background: var(--ink);
  color: var(--paper);
}
.kf-btn-primary:hover { background: var(--accent-deep); }
.kf-btn-ghost {
  background: transparent;
  border: 1px solid var(--line-strong);
  color: var(--ink);
}
.kf-btn-ghost:hover {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
}
`,Jb="/assets/bg-CP9CkGLZ.webp",Wb="/assets/bg_m-DjojSNnF.webp",Fb=[{k:"기준 연도",v:"2026",small:"VAT 별도"},{k:"단위",v:"만원",small:"1ea / 1줄"},{k:"A/S",v:"2년",small:"무상"},{k:"결제",v:"현금 / 카드",small:"분할 OK"}],$b=[{label:"화장실",group:"bath",rows:[{scope:"욕조형 · 바닥만",new:[40,30],old:[30,25]},{scope:"욕조형 · 전체 (바닥+벽)",new:[90,65],old:[75,55]},{scope:"샤워부스형 · 바닥만",new:[45,35],old:[38,30]},{scope:"샤워부스형 · 전체 (바닥+벽)",new:[95,70],old:[80,60]}]},{label:"거실",group:"living",rows:[{scope:"바닥 · 20평대",new:[150,100],old:[130,90]},{scope:"바닥 · 30평대+",new:[null,null],old:[null,null],note:"별도 협의"}]},{label:"현관",group:"etc",rows:[{scope:"바닥",new:[15,5],old:[12,4]}]},{label:"베란다",group:"etc",rows:[{scope:"바닥",new:[20,15],old:[18,13]}]},{label:"외부 화장실",group:"etc",rows:[{scope:"바닥",new:[30,25],old:[28,23]}]}],Ib=[{num:"01",name:"세트 1",sub:"· 기본",desc:"화장실 바닥 ×2 + 현관",newPrice:100,oldPrice:120,services:[],emptyLabel:"기본 시공 패키지"},{num:"02",name:"세트 2",sub:"· 표준",desc:"세트 1 + 양조벽 or 샤워벽 3면 ×1곳",newPrice:135,oldPrice:155,services:[{text:"젠 다이 실리콘 ×2"},{text:"세면대 실리콘 ×2"}]},{num:"03",name:"세트 3",sub:"· 완성",desc:"화장실 바닥 ×2 + 전체벽 ×2 + 현관",newPrice:240,oldPrice:260,services:[{text:"젠 다이 실리콘 ×2"},{text:"세면대 실리콘 ×2"},{text:"싱크볼 실리콘"},{text:"주방벽 케라폭시"}]},{num:"04",name:"세트 4",sub:"· 확장",desc:"세트 2 + 세탁실",newPrice:150,oldPrice:170,services:[{text:"젠 다이 실리콘 ×2"},{text:"세면대 실리콘 ×2"},{text:"주방 실리콘"},{text:"싱크볼 실리콘"}]}],Pb=[{n:"01",name:"시공 면적",en:"Area / Size",desc:"면적이 넓을수록 평단가가 내려가며, 협소한 공간은 작업 난이도로 인해 단가가 높아질 수 있습니다.",impact:"평단가 ↘",impactClass:"down"},{n:"02",name:"타일 크기 · 줄눈 간격",en:"Tile Size",desc:"타일이 작을수록 줄눈 길이가 길어져 작업 시간과 자재비가 증가합니다.",impact:"자재·시간 ↗",impactClass:"up"},{n:"03",name:"기존 줄눈 상태",en:"Existing Grout",desc:"기존 줄눈 제거가 필요한 경우 추가 작업비가 발생하며, 손상이 심할수록 비용이 올라갑니다.",impact:"+10만원~",impactClass:"up"},{n:"04",name:"색상 선택",en:"Color",desc:"특수 색상이나 다색 시공의 경우 단가가 다를 수 있으며, 컬러 매칭 작업이 추가됩니다.",impact:"옵션 변동",impactClass:"var"},{n:"05",name:"지역 · 접근성",en:"Location",desc:"지방이나 접근이 어려운 고층 건물의 경우 추가 출장비가 반영될 수 있습니다.",impact:"출장비 가산",impactClass:"up"}];function ro({num:s,ko:d,en:o,title:u,lede:f}){return n.jsxs("div",{className:"kp-sec-head",children:[n.jsxs("div",{className:"kp-sec-bar",children:[n.jsx("span",{className:"kp-sec-n",children:s}),n.jsx("span",{className:"kp-sec-rule"}),n.jsxs("span",{className:"kp-sec-lbl",children:[n.jsx("span",{className:"kp-sec-ko",children:d}),n.jsx("span",{className:"kp-sec-en",children:o})]})]}),n.jsxs("div",{className:"kp-sec-body",children:[n.jsx("h2",{className:"kp-sec-title",children:u}),f&&n.jsx("p",{className:"kp-sec-lede",children:f})]})]})}function ev(){const s=_a(),[d,o]=k.useState("all"),[u,f]=k.useState("new");k.useEffect(()=>{window.scrollTo(0,0),document.title="케라폭시 가격 안내 — 디테일라인";const y=document.querySelector('meta[name="description"]'),g=y?.getAttribute("content")??"";return y?.setAttribute("content","2026년 케라폭시 줄눈 시공 가격표. 공간별 표준 단가, 세트 할인 패키지, 폴리우레아·일반 줄눈 비교와 가격에 영향을 주는 요인을 정리했습니다."),()=>{y&&g&&y.setAttribute("content",g)}},[]);const m=()=>{s("/#calc"),setTimeout(()=>{const y=document.querySelector("#calc");y&&y.scrollIntoView({behavior:"smooth"})},300)},v=k.useMemo(()=>$b.filter(y=>d==="all"||d===y.group),[d]);return n.jsxs("div",{className:"kp-page",children:[n.jsx(al,{}),n.jsxs("header",{className:"kp-hero","data-screen-label":"Hero",children:[n.jsx("div",{className:"kp-hero-bg",style:{"--hero-img-d":`url(${Jb})`,"--hero-img-m":`url(${Wb})`},"aria-hidden":"true"}),n.jsxs("div",{className:"kp-container kp-hero-inner",children:[n.jsx("div",{className:"kp-eyebrow kp-eyebrow-light",children:"Grout Knowledge · 02"}),n.jsxs("h1",{className:"kp-hero-title",children:["케라폭시 가격",n.jsx("em",{children:","}),n.jsx("br",{}),"한 줄까지 ",n.jsx("em",{children:"투명하게"}),"."]}),n.jsxs("p",{className:"kp-hero-lede",children:["2026년 디테일라인 표준 가격표.",n.jsx("br",{}),"공간 · 평형 · 시공 범위에 따른 단가를 그대로 공개합니다."]}),n.jsx("ul",{className:"kp-hero-meta",children:Fb.map(y=>n.jsxs("li",{children:[n.jsx("span",{className:"kp-meta-k",children:y.k}),n.jsxs("span",{className:"kp-meta-v",children:[y.v," ",n.jsx("small",{children:y.small})]})]},y.k))})]})]}),n.jsx("nav",{className:"kp-crumb","aria-label":"현재 위치",children:n.jsxs("div",{className:"kp-container kp-crumb-inner",children:[n.jsx(yt,{to:"/",className:"kp-crumb-item",children:"홈"}),n.jsx("span",{className:"kp-crumb-sep",children:"/"}),n.jsx("span",{className:"kp-crumb-item",children:"줄눈 정보"}),n.jsx("span",{className:"kp-crumb-sep",children:"/"}),n.jsx("span",{className:"kp-crumb-here",children:"케라폭시 가격 안내"})]})}),n.jsx("section",{className:"kp-section","data-screen-label":"01 Pricing Table",children:n.jsxs("div",{className:"kp-container",children:[n.jsx(ro,{num:"01",ko:"2026 가격 테이블",en:"Pricing Table",title:n.jsxs(n.Fragment,{children:["공간별 시공 단가,",n.jsx("br",{}),n.jsx("em",{children:"그대로 공개"}),"합니다."]}),lede:"케라폭시·폴리우레아 두 소재의 표준 단가입니다. 현장 상황에 따라 ±10% 조정될 수 있습니다."}),n.jsxs("div",{className:"kp-pt-controls",children:[n.jsx("div",{className:"kp-chips",role:"tablist","aria-label":"공간 필터",children:["all","bath","living","etc"].map(y=>n.jsx("button",{type:"button",className:`kp-chip ${d===y?"on":""}`,onClick:()=>o(y),role:"tab","aria-selected":d===y,children:y==="all"?"전체":y==="bath"?"화장실":y==="living"?"거실":"현관·기타"},y))}),n.jsx("div",{className:"kp-toggle",role:"tablist","aria-label":"건물 유형",children:["new","old"].map(y=>n.jsx("button",{type:"button",className:u===y?"on":"",onClick:()=>f(y),role:"tab","aria-selected":u===y,children:y==="new"?"신축":"구축"},y))})]}),n.jsx("div",{className:"kp-ptable-wrap",children:n.jsxs("table",{className:"kp-ptable",children:[n.jsx("caption",{className:"sr-only",children:"2026년 공간별 표준 단가 (만원, VAT 별도)"}),n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{style:{width:"160px"},children:"공간"}),n.jsx("th",{children:"범위"}),n.jsx("th",{className:"right",style:{width:"200px"},children:"케라폭시"}),n.jsx("th",{className:"right",style:{width:"200px"},children:"폴리우레아"})]})}),n.jsx("tbody",{children:v.flatMap(y=>y.rows.map((g,h)=>{const[T,w]=u==="new"?g.new:g.old;return n.jsxs("tr",{children:[n.jsx("td",{className:"kp-cell-space",children:h===0?y.label:""}),n.jsx("td",{className:"kp-cell-scope",children:g.scope}),n.jsx("td",{className:"right",children:g.note?n.jsx("span",{className:"kp-price note",children:g.note}):n.jsxs("span",{className:"kp-price kp",children:[T,n.jsx("small",{children:"만원"})]})}),n.jsx("td",{className:"right",children:g.note?n.jsx("span",{className:"kp-price note",children:g.note}):n.jsxs("span",{className:"kp-price",children:[w,n.jsx("small",{children:"만원"})]})})]},`${y.label}-${g.scope}`)}))})]})}),n.jsx("ul",{className:"kp-pcards","aria-label":"공간별 가격 카드",children:v.flatMap(y=>y.rows.map(g=>{const[h,T]=u==="new"?g.new:g.old;return n.jsxs("li",{className:"kp-pcard",children:[n.jsxs("div",{className:"kp-pcard-info",children:[n.jsx("span",{className:"kp-pcard-space",children:y.label}),n.jsx("span",{className:"kp-pcard-scope",children:g.scope})]}),n.jsxs("div",{className:"kp-pcard-prices",children:[n.jsxs("div",{className:"kp-pcard-pr",children:[n.jsx("span",{className:"kp-pcard-pr-lbl",children:"케라폭시"}),g.note?n.jsx("span",{className:"kp-pcard-pr-note",children:g.note}):n.jsxs("span",{className:"kp-pcard-pr-val kp",children:[h,n.jsx("small",{children:"만원"})]})]}),n.jsxs("div",{className:"kp-pcard-pr",children:[n.jsx("span",{className:"kp-pcard-pr-lbl",children:"폴리우레아"}),g.note?n.jsx("span",{className:"kp-pcard-pr-note",children:g.note}):n.jsxs("span",{className:"kp-pcard-pr-val",children:[T,n.jsx("small",{children:"만원"})]})]})]})]},`m-${y.label}-${g.scope}`)}))}),n.jsxs("div",{className:"kp-pt-foot",children:[n.jsx("div",{children:"* 모든 가격은 VAT 별도 · 자재비·인건비·출장비 포함 · 2년 무상 A/S (에폭시 계열)"}),n.jsx("div",{children:"* 평형 30평 초과 또는 특수 상황은 별도 협의"})]})]})}),n.jsx("section",{className:"kp-section kp-bg-paper","data-screen-label":"02 Set Packages",children:n.jsxs("div",{className:"kp-container",children:[n.jsx(ro,{num:"02",ko:"세트 할인 패키지",en:"Set Packages",title:n.jsxs(n.Fragment,{children:["4가지 패키지로,",n.jsx("br",{}),"한 번에 ",n.jsx("em",{children:"합리적으로"}),"."]}),lede:"화장실·현관·벽 등 주요 공간을 묶어 시공하면 실리콘·주방벽 등 추가 서비스가 함께 제공됩니다. VAT 포함 · 34평 이하 · 300개 타일 기준."}),n.jsx("div",{className:"kp-sets",children:Ib.map(y=>n.jsxs("div",{className:"kp-set-card",children:[n.jsxs("div",{className:"kp-set-badge",children:["— SET ",y.num]}),n.jsxs("div",{className:"kp-set-title",children:[n.jsx("h3",{className:"kp-set-name",children:y.name}),n.jsx("span",{className:"kp-set-sub",children:y.sub})]}),n.jsx("p",{className:"kp-set-desc",children:y.desc}),n.jsxs("div",{className:"kp-set-prices",children:[n.jsxs("div",{className:"kp-set-pr",children:[n.jsx("span",{className:"kp-set-pr-lbl",children:"신축"}),n.jsx("span",{className:"kp-set-pr-val",children:y.newPrice}),n.jsx("span",{className:"kp-set-pr-unit",children:"만원"})]}),n.jsxs("div",{className:"kp-set-pr",children:[n.jsx("span",{className:"kp-set-pr-lbl",children:"구축"}),n.jsx("span",{className:"kp-set-pr-val",children:y.oldPrice}),n.jsx("span",{className:"kp-set-pr-unit",children:"만원"})]})]}),y.services.length>0?n.jsxs("div",{className:"kp-set-services",children:[n.jsx("div",{className:"kp-set-s-lbl",children:"+ 함께 제공"}),n.jsx("ul",{children:y.services.map(g=>n.jsx("li",{children:g.text},g.text))})]}):n.jsx("div",{className:"kp-set-services-empty",children:y.emptyLabel})]},y.num))}),n.jsxs("p",{className:"kp-set-foot",children:["※ 가격은 ",n.jsx("b",{children:"VAT 포함 · 34평 이하 · 300개 타일"})," 기준. 세트 외 추가 옵션은 상담 후 별도 산정됩니다.",n.jsx("br",{}),"※ 세트 실리콘은 기존 실리콘 양호 기준이며, 제거 후 재시공 시 추가 비용이 발생합니다. 기존 줄눈 시공 이력이 있는 경우 ",n.jsx("b",{children:"공간당 +10만원"}),"이 추가됩니다."]})]})}),n.jsx("section",{className:"kp-section","data-screen-label":"03 Cost Factors",children:n.jsxs("div",{className:"kp-container",children:[n.jsx(ro,{num:"03",ko:"시공 가격에 영향을 주는 요인",en:"Cost Factors",title:n.jsxs(n.Fragment,{children:["같은 평형이라도,",n.jsx("br",{}),"견적이 ",n.jsx("em",{children:"달라지는 이유"}),"."]}),lede:"현장의 디테일이 가격을 만듭니다. 자주 영향을 주는 다섯 가지 요인입니다."}),n.jsx("ul",{className:"kp-factors",children:Pb.map(y=>n.jsxs("li",{className:"kp-f-row",children:[n.jsx("span",{className:"kp-f-n",children:y.n}),n.jsxs("span",{className:"kp-f-name",children:[y.name,n.jsx("small",{children:y.en})]}),n.jsx("span",{className:"kp-f-desc",children:y.desc}),n.jsx("span",{className:`kp-f-impact kp-f-impact--${y.impactClass}`,children:y.impact})]},y.n))})]})}),!1,n.jsx("section",{className:"kp-cta-band","data-screen-label":"CTA Band",children:n.jsxs("div",{className:"kp-container kp-cta-row",children:[n.jsxs("div",{className:"kp-cta-text",children:[n.jsxs("h3",{className:"kp-cta-title",children:["정확한 시공 비용이 ",n.jsx("em",{children:"궁금하신가요?"})]}),n.jsx("p",{className:"kp-cta-sub",children:"현장 상황에 따라 가격이 달라질 수 있습니다. 공간별 맞춤 견적을 안내해 드립니다."})]}),n.jsxs("div",{className:"kp-cta-actions",children:[n.jsxs("button",{type:"button",className:"kp-btn kp-btn-primary",onClick:m,children:["무료 견적 받기 ",n.jsx("span",{className:"kp-btn-arr",children:"→"})]}),n.jsx("a",{href:"tel:010-8005-6674",onClick:()=>Ut.phoneClick("info_cta"),className:"kp-btn kp-btn-ghost",children:"전화 상담 010-8005-6674"})]})]})}),n.jsx(ll,{}),n.jsx("style",{children:tv})]})}const tv=`
.kp-page {
  background: var(--bg);
  color: var(--ink);
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
}
.kp-page ::selection { background: var(--accent); color: #fff; }

.kp-container {
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 32px;
}
@media (max-width: 720px) {
  .kp-container { padding: 0 20px; }
}

.kp-section {
  padding: 120px 0;
  border-top: 1px solid var(--line);
}
.kp-bg-paper { background: var(--paper); }
@media (max-width: 720px) {
  .kp-section { padding: 72px 0; }
}

.kp-eyebrow {
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
}
.kp-eyebrow-light { color: #d9b790; }

.kp-page em {
  font-style: normal;
  color: var(--accent);
}
.kp-hero em { color: #e3c5a3; }

/* ===== Hero ===== */
.kp-hero {
  position: relative;
  padding: 168px 0 84px;
  overflow: hidden;
  isolation: isolate;
  color-scheme: dark;
}
@media (max-width: 720px) {
  .kp-hero { padding: 120px 0 64px; }
}
.kp-hero-bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    /* Bottom fade — light top → strong dark near bottom for image blend */
    linear-gradient(180deg, rgba(20,16,12,.25) 0%, rgba(20,16,12,.25) 35%, rgba(14,11,8,.95) 100%),
    radial-gradient(120% 80% at 70% 20%, rgba(138,106,76,.18), transparent 60%),
    /* Width-anchored, top-aligned */
    var(--hero-img-d, none) center top / 100% auto no-repeat,
    linear-gradient(180deg, #251d14 0%, #18130e 100%);
}
@media (max-width: 720px) {
  /* Mobile uses dedicated mobile-optimized image with cover */
  .kp-hero-bg {
    background:
      linear-gradient(180deg, rgba(20,16,12,.35) 0%, rgba(14,11,8,.78) 100%),
      radial-gradient(120% 80% at 70% 20%, rgba(138,106,76,.18), transparent 60%),
      var(--hero-img-m, none) center/cover no-repeat,
      linear-gradient(180deg, #251d14 0%, #18130e 100%);
  }
}
.kp-hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(120% 100% at 50% 0%, rgba(0,0,0,.15), rgba(0,0,0,.55) 80%);
  pointer-events: none;
}
.kp-ph-corner {
  position: absolute;
  top: 14px;
  right: 16px;
  font-size: 9.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,.4);
  z-index: 1;
}
.kp-ph-label {
  position: absolute;
  left: 18px;
  bottom: 16px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255,255,255,.4);
  z-index: 1;
}
.kp-ph-sq {
  display: inline-block;
  width: 6px;
  height: 6px;
  background: var(--accent);
}
.kp-hero-inner { position: relative; z-index: 1; }
.kp-hero-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: clamp(36px, 5vw, 68px);
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: #fff;
  margin: 14px 0 22px;
  max-width: 24ch;
  word-break: keep-all;
}
.kp-hero-lede {
  font-size: 15.5px;
  line-height: 1.75;
  color: rgba(255,255,255,.78);
  max-width: 56ch;
  margin: 0;
}
.kp-hero-meta {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
  padding: 0;
  margin: 48px 0 0;
  border-top: 1px solid rgba(255,255,255,.16);
}
.kp-hero-meta li {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 22px 22px 22px 0;
  border-right: 1px solid rgba(255,255,255,.16);
}
.kp-hero-meta li:last-child { border-right: none; }
.kp-hero-meta li:not(:first-child) { padding-left: 22px; }
.kp-meta-k {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,.55);
}
.kp-meta-v {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: 17px;
  color: #fff;
  letter-spacing: -0.005em;
}
.kp-meta-v small {
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 11px;
  font-weight: 500;
  color: rgba(255,255,255,.55);
  margin-left: 6px;
  letter-spacing: 0;
}
@media (max-width: 720px) {
  .kp-hero-meta { grid-template-columns: repeat(2, 1fr); }
  .kp-hero-meta li:nth-child(2) { border-right: none; }
  .kp-hero-meta li:nth-child(3) { padding-left: 0; }
  .kp-hero-meta li:nth-child(3),
  .kp-hero-meta li:nth-child(4) {
    border-top: 1px solid rgba(255,255,255,.16);
  }
}

/* ===== Breadcrumb ===== */
.kp-crumb {
  background: var(--paper);
  border-bottom: 1px solid var(--line);
}
.kp-crumb-inner {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 32px;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: var(--muted-2);
}
@media (max-width: 720px) {
  .kp-crumb-inner { padding: 14px 20px; }
}
.kp-crumb-item {
  color: var(--muted-2);
  text-decoration: none;
  transition: color .2s ease;
}
.kp-crumb-item:hover { color: var(--accent); }
.kp-crumb-sep { opacity: .4; }
.kp-crumb-here { color: var(--ink); }

/* ===== Section Head ===== */
.kp-sec-head { margin-bottom: 56px; }
@media (max-width: 820px) {
  .kp-sec-head { margin-bottom: 36px; }
}
.kp-sec-bar {
  display: flex;
  align-items: center;
  gap: 18px;
  padding-bottom: 22px;
  margin-bottom: 32px;
  border-bottom: 1px solid var(--line);
}
.kp-sec-n {
  font-family: 'Noto Serif KR', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 1;
  color: var(--accent);
  font-variant-numeric: lining-nums;
}
.kp-sec-rule {
  flex: 0 0 56px;
  height: 1px;
  background: var(--accent);
  opacity: .6;
}
.kp-sec-lbl {
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
.kp-sec-ko { color: var(--ink-2); }
.kp-sec-en { color: var(--muted-2); margin-left: 10px; }
.kp-sec-body {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 64px;
  align-items: end;
}
@media (max-width: 820px) {
  .kp-sec-body { grid-template-columns: 1fr; gap: 16px; align-items: start; }
}
.kp-sec-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: clamp(30px, 3.6vw, 48px);
  line-height: 1.18;
  letter-spacing: -0.02em;
  margin: 0;
  word-break: keep-all;
}
.kp-sec-lede {
  font-size: 16px;
  line-height: 1.75;
  color: var(--muted);
  max-width: 48ch;
  margin: 0;
}

/* ===== Pricing Table ===== */
.kp-pt-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 20px;
}
.kp-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.kp-chip {
  padding: 10px 18px;
  font-size: 13px;
  letter-spacing: -0.005em;
  border: 1px solid var(--line-strong);
  background: transparent;
  color: var(--ink-2);
  border-radius: 999px;
  cursor: pointer;
  transition: all .2s ease;
  font-family: inherit;
}
.kp-chip:hover { border-color: var(--ink); color: var(--ink); }
.kp-chip.on { background: var(--ink); color: var(--paper); border-color: var(--ink); }
.kp-toggle {
  display: inline-flex;
  border: 1px solid var(--line-strong);
  border-radius: 999px;
  padding: 3px;
  background: var(--bg);
}
.kp-toggle button {
  padding: 8px 18px;
  font-size: 13px;
  border: 0;
  background: transparent;
  cursor: pointer;
  border-radius: 999px;
  color: var(--muted);
  transition: all .2s ease;
  font-family: inherit;
}
.kp-toggle button.on { background: var(--ink); color: var(--paper); }

.kp-ptable-wrap {
  border: 1px solid var(--line);
  overflow: hidden;
}
.kp-ptable {
  width: 100%;
  border-collapse: collapse;
  background: var(--paper);
}
/* Mobile cards default hidden — only shown ≤720px */
.kp-pcards { display: none; }
@media (max-width: 720px) {
  .kp-ptable-wrap { display: none; }
  .kp-pcards {
    display: flex;
    flex-direction: column;
    gap: 0;
    list-style: none;
    margin: 0;
    padding: 0;
    background: var(--paper);
    border: 1px solid var(--line);
  }
  .kp-pcard {
    display: grid;
    grid-template-columns: 1fr 1.1fr;
    gap: 16px;
    align-items: center;
    padding: 18px 18px;
    border-bottom: 1px solid var(--line);
  }
  .kp-pcard:last-child { border-bottom: 0; }
  .kp-pcard-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 0;
  }
  .kp-pcard-space {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.06em;
    color: var(--muted-2);
  }
  .kp-pcard-scope {
    font-size: 14.5px;
    font-weight: 600;
    color: var(--ink);
    line-height: 1.35;
    letter-spacing: -0.005em;
    word-break: keep-all;
  }
  .kp-pcard-prices {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
  }
  .kp-pcard-pr {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
    padding: 0 4px 0 12px;
    border-left: 1px solid var(--line);
  }
  .kp-pcard-pr:first-child {
    border-left: 0;
    padding-left: 0;
  }
  .kp-pcard-pr-lbl {
    font-size: 10.5px;
    font-weight: 500;
    letter-spacing: 0.04em;
    color: var(--muted-2);
  }
  .kp-pcard-pr-val {
    font-family: 'Noto Serif KR', serif;
    font-size: 18px;
    font-weight: 500;
    color: var(--ink);
    letter-spacing: -0.01em;
    line-height: 1.2;
  }
  .kp-pcard-pr-val.kp { color: var(--accent-deep); }
  .kp-pcard-pr-val small {
    font-family: 'Pretendard Variable', sans-serif;
    font-size: 11px;
    font-weight: 500;
    color: var(--muted-2);
    margin-left: 2px;
    letter-spacing: 0;
  }
  .kp-pcard-pr-note {
    font-size: 13px;
    font-weight: 600;
    color: #c0625c;
    letter-spacing: -0.005em;
  }
}
.kp-ptable thead th {
  background: var(--ink);
  color: var(--paper);
  text-align: left;
  font-weight: 500;
  font-size: 12.5px;
  letter-spacing: 0.04em;
  padding: 18px 24px;
  border-right: 1px solid rgba(255,255,255,.08);
}
.kp-ptable thead th:last-child { border-right: 0; }
.kp-ptable thead th.right { text-align: right; }
.kp-ptable tbody td {
  padding: 14px 24px;
  border-bottom: 1px solid var(--line);
  border-right: 1px solid var(--line);
  font-size: 14.5px;
  color: var(--ink-2);
  vertical-align: middle;
}
.kp-ptable tbody tr:last-child td { border-bottom: 0; }
.kp-ptable tbody td:last-child { border-right: 0; }
.kp-ptable tbody td.right { text-align: right; }
.kp-ptable tbody tr { transition: background .2s ease; }
.kp-ptable tbody tr:hover { background: var(--bg); }
.kp-cell-space {
  font-family: 'Noto Serif KR', serif;
  font-size: 16px;
  color: var(--ink);
  letter-spacing: -0.01em;
}
.kp-cell-scope {
  color: var(--muted);
  font-size: 13.5px;
}
.kp-price {
  font-family: 'Noto Serif KR', serif;
  font-size: 18px;
  color: var(--ink);
  letter-spacing: -0.005em;
}
.kp-price.kp { color: var(--accent-deep); }
.kp-price small {
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 11px;
  color: var(--muted-2);
  margin-left: 3px;
  letter-spacing: 0;
}
.kp-price.note {
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 13px;
  color: var(--muted-2);
  font-weight: 400;
}
.kp-pt-foot {
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 11.5px;
  color: var(--muted-2);
  letter-spacing: 0.02em;
}

/* ===== Set Packages ===== */
.kp-sets {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}
@media (max-width: 1100px) {
  .kp-sets { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .kp-sets { grid-template-columns: 1fr; }
}
.kp-set-card {
  position: relative;
  background: var(--paper);
  border: 1px solid var(--line);
  padding: 28px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 2px;
  transition: all .25s ease;
  min-height: 380px;
}
.kp-set-card:hover {
  border-color: var(--ink);
  transform: translateY(-2px);
  box-shadow: 0 12px 24px -16px rgba(28,25,22,.18);
}
.kp-set-badge {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
}
.kp-set-title {
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: -2px;
}
.kp-set-name {
  font-family: 'Noto Serif KR', serif;
  font-style: italic;
  font-size: 26px;
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 1.45;
  font-variant-numeric: lining-nums;
  margin: 0;
}
.kp-set-sub {
  font-size: 13.5px;
  color: var(--muted);
  font-weight: 500;
}
.kp-set-desc {
  font-size: 13.5px;
  color: var(--muted);
  line-height: 1.6;
  margin: 0;
}
.kp-set-prices {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 14px 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}
.kp-set-pr {
  display: flex;
  align-items: baseline;
  gap: 8px;
}
.kp-set-pr-lbl {
  font-size: 10.5px;
  letter-spacing: 0.12em;
  color: var(--muted-2);
  text-transform: uppercase;
  width: 32px;
  flex: 0 0 auto;
  font-weight: 500;
}
.kp-set-pr-val {
  font-family: 'Noto Serif KR', serif;
  font-style: italic;
  font-size: 30px;
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 1.35;
  color: var(--ink);
  font-variant-numeric: lining-nums;
}
.kp-set-pr-unit {
  font-size: 12px;
  color: var(--muted);
  margin-left: 4px;
}
.kp-set-services {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: auto;
}
.kp-set-s-lbl {
  font-size: 10.5px;
  letter-spacing: 0.12em;
  color: var(--accent);
  text-transform: uppercase;
  font-weight: 500;
}
.kp-set-services ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.kp-set-services li {
  font-size: 12.5px;
  color: var(--ink-2);
  line-height: 1.55;
  position: relative;
  padding-left: 10px;
}
.kp-set-services li::before {
  content: "·";
  position: absolute;
  left: 2px;
  color: var(--accent);
  font-weight: 700;
}
.kp-set-services-empty {
  margin-top: auto;
  font-size: 12.5px;
  color: var(--muted-2);
  font-style: italic;
  line-height: 1.55;
  padding: 8px 0;
}
.kp-set-foot {
  margin-top: 28px;
  color: var(--muted-2);
  font-size: 12.5px;
  font-style: italic;
  line-height: 1.7;
}
.kp-set-foot b {
  color: var(--ink-2);
  font-weight: 500;
  font-style: normal;
}

/* ===== Cost Factors ===== */
.kp-factors {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--line);
}
.kp-f-row {
  display: grid;
  grid-template-columns: 84px 1.3fr 2fr 150px;
  gap: 32px;
  align-items: center;
  padding: 32px 8px;
  border-bottom: 1px solid var(--line);
  transition: all .25s ease;
}
.kp-f-row:hover {
  background: var(--paper);
  padding-left: 20px;
}
.kp-f-n {
  font-family: 'Noto Serif KR', serif;
  font-style: italic;
  font-size: 28px;
  color: var(--accent);
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 1;
}
.kp-f-name {
  font-family: 'Noto Serif KR', serif;
  font-size: 22px;
  letter-spacing: -0.01em;
  color: var(--ink);
  font-weight: 500;
  line-height: 1.3;
  display: block;
}
.kp-f-name small {
  display: block;
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 10.5px;
  color: var(--muted-2);
  letter-spacing: 0.12em;
  margin-top: 6px;
  text-transform: uppercase;
  font-weight: 500;
}
.kp-f-desc {
  color: var(--muted);
  font-size: 14.5px;
  line-height: 1.7;
}
.kp-f-impact {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  font-size: 11px;
  letter-spacing: 0.04em;
  border-radius: 999px;
  width: fit-content;
  justify-self: end;
  white-space: nowrap;
  font-weight: 500;
}
.kp-f-impact--up { background: rgba(138,106,76,.14); color: var(--accent-deep); }
.kp-f-impact--down { background: rgba(28,25,22,.06); color: var(--ink-2); }
.kp-f-impact--var { background: var(--bg-2); color: var(--muted); }
@media (max-width: 820px) {
  .kp-f-row {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 22px 4px;
  }
  .kp-f-row:hover { padding-left: 18px; }
  .kp-f-n { display: none; }
  .kp-f-name, .kp-f-desc, .kp-f-impact { grid-column: 1; }
  .kp-f-impact { justify-self: start; margin-top: 4px; }
}

/* ===== Related ===== */
.kp-related-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 32px;
}
@media (max-width: 900px) {
  .kp-related-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .kp-related-grid { grid-template-columns: 1fr; }
}
.kp-related-card {
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: var(--bg);
  border: 1px solid var(--line);
  padding: 32px 28px 28px;
  min-height: 220px;
  color: inherit;
  text-decoration: none;
  transition: background .25s ease, color .25s ease, border-color .25s ease;
}
.kp-related-card:hover {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
}
.kp-related-idx {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
}
.kp-related-card:hover .kp-related-idx { color: #d9b790; }
.kp-related-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 500;
  font-size: 21px;
  line-height: 1.35;
  letter-spacing: -0.01em;
  margin: 0;
  color: var(--ink);
}
.kp-related-card:hover .kp-related-title { color: #fff; }
.kp-related-desc {
  font-size: 13px;
  line-height: 1.65;
  color: var(--muted);
  margin: 0;
}
.kp-related-card:hover .kp-related-desc { color: rgba(255,255,255,.65); }
.kp-related-more {
  margin-top: auto;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted-2);
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.kp-related-card:hover .kp-related-more { color: #d9b790; }
.kp-related-arr { transition: transform .3s ease; }
.kp-related-card:hover .kp-related-arr { transform: translateX(4px); }

/* ===== CTA Band ===== */
.kp-cta-band {
  background: var(--bg-2);
  border-top: 1px solid var(--line);
  padding: 72px 0;
}
@media (max-width: 720px) {
  .kp-cta-band { padding: 56px 0; }
}
.kp-cta-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}
.kp-cta-text { display: flex; flex-direction: column; gap: 8px; flex: 1 1 380px; }
.kp-cta-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: clamp(26px, 3vw, 38px);
  letter-spacing: -0.015em;
  line-height: 1.35;
  margin: 0;
  word-break: keep-all;
}
.kp-cta-sub {
  font-size: 14px;
  color: var(--muted);
  margin: 0;
}
.kp-cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: flex-end;
}
@media (max-width: 820px) {
  .kp-cta-actions {
    flex-wrap: nowrap;
    justify-content: flex-start;
    gap: 8px;
    width: 100%;
  }
  .kp-cta-actions .kp-btn {
    flex: 1 1 0;
    min-width: 0;
    padding: 14px 12px;
    font-size: 13px;
    white-space: nowrap;
    justify-content: center;
  }
}

/* ===== Buttons ===== */
.kp-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 22px;
  border-radius: 2px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.005em;
  border: 0;
  cursor: pointer;
  text-decoration: none;
  transition: background .25s ease, color .25s ease, border-color .25s ease;
}
.kp-btn-arr { transition: transform .3s ease; }
.kp-btn:hover .kp-btn-arr { transform: translateX(4px); }
.kp-btn-primary {
  background: var(--ink);
  color: var(--paper);
}
.kp-btn-primary:hover { background: var(--accent-deep); }
.kp-btn-ghost {
  background: transparent;
  border: 1px solid var(--line-strong);
  color: var(--ink);
}
.kp-btn-ghost:hover {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
}
`,av="/assets/kerafoxy-DrWysCxm.jpg",lv="/assets/strikeevo-CoKoyCPo.jpg",nv="/assets/aspactone-CtALWUuf.jpg",iv="/assets/Polyurea-DMhrJjtC.jpg",rv="/assets/bg-LU8nN9ip.webp",sv="/assets/bg_m-BSEgDA_R.webp",cv=[{k:"라인업",v:"4종",small:"에폭시 계열"},{k:"컬러",v:"20+",small:"표준 색상"},{k:"친환경",v:"EC1+",small:"GEV 인증"},{k:"A/S",v:"2년",small:"무상"}],xr=[{id:"pure",name:"순백",hex:"#f1ede4",group:"white",tagEn:"WHITE",light:!0},{id:"ivory",name:"아이보리",hex:"#e6dccb",group:"white",tagEn:"WHITE",light:!0},{id:"beige",name:"베이지",hex:"#d9c8a2",group:"earth",tagEn:"EARTH",light:!0},{id:"sand",name:"샌드",hex:"#bfa478",group:"earth",tagEn:"EARTH",light:!1},{id:"khaki",name:"카키",hex:"#8a7d5e",group:"earth",tagEn:"EARTH",light:!1},{id:"brown",name:"브라운",hex:"#6f4a2a",group:"earth",tagEn:"EARTH",light:!1},{id:"silver",name:"실버그레이",hex:"#c4c0bc",group:"gray",tagEn:"GRAY",light:!0},{id:"lightgray",name:"라이트그레이",hex:"#a8a59f",group:"gray",tagEn:"GRAY",light:!1},{id:"mediumgray",name:"미디엄그레이",hex:"#7a766f",group:"gray",tagEn:"GRAY",light:!1},{id:"darkgray",name:"다크그레이",hex:"#4a4842",group:"dark",tagEn:"DARK",light:!1},{id:"charcoal",name:"차콜",hex:"#2a2825",group:"dark",tagEn:"DARK",light:!1},{id:"black",name:"블랙",hex:"#16140f",group:"dark",tagEn:"DARK",light:!1}],Vn={all:"전체",white:"화이트 계열",earth:"베이지·어스 계열",gray:"그레이 계열",dark:"다크 계열"},so={white:"타일과 통일감을 주어 깔끔하고 넓어 보이는 효과를 만듭니다. 오염은 비교적 잘 보이는 편이므로 청소 빈도가 높은 공간에 적합합니다.",earth:"원목·가구·내추럴 인테리어와 잘 어우러집니다. 오염 자국이 눈에 잘 띄지 않아 관리가 편합니다.",gray:"오염이 덜 보이고 유지관리가 편하며, 모던하고 차분한 분위기를 만듭니다. 대부분의 타일과 무난하게 어울립니다.",dark:"타일과 강한 대비를 만들어 그래픽한 인테리어 포인트가 됩니다. 좁은 공간에서는 답답하게 보일 수 있어 주의가 필요합니다."},br={white:{label:"화이트",hex:"#ece6dc"},gray:{label:"그레이",hex:"#b5b1a8"},dark:{label:"다크",hex:"#3a3530"}},Ff=[{id:"kerafoxy",name:"케라폭시",badge:{label:"프리미엄",variant:"premium"},desc:"에폭시 수지+경화제 2액형의 대표 프리미엄 줄눈재. 화장실·욕실·주방 등 물 접촉 공간에서 가장 안정적인 성능을 보입니다.",specs:[{k:"베이스",v:"에폭시 + 경화제 2액형"},{k:"경화 시간",v:"24 ~ 48시간"},{k:"표면",v:"고광택"},{k:"추천 공간",v:"화장실 · 욕실 · 주방"},{k:"컬러",v:"20+ 색상"},{k:"수명",v:"10년+"}],image:av},{id:"strikeevo",name:"스트라이크 에보",badge:{label:"프리미엄",variant:"premium"},desc:"3세대 에폭시 줄눈재로 무광·유광 선택이 가능하며, 균일한 컬러와 변색 저항성이 뛰어납니다. 프리미엄 인테리어에 자주 채택됩니다.",specs:[{k:"베이스",v:"에폭시 (이탈리아산)"},{k:"경화 시간",v:"24 ~ 72시간"},{k:"표면",v:"무광 / 유광 선택"},{k:"추천 공간",v:"화장실 · 주방 · 디자인 강조"},{k:"컬러",v:"30+ 색상"},{k:"수명",v:"10년+"}],image:lv},{id:"aspactone",name:"아스팍톤",badge:{label:"개선형",variant:"premium"},desc:"무광·무펄·무수축·무황변을 구현한 신소재 에폭시. 기존 무광 에폭시의 단점을 보완해 어린이방·욕실에 추천됩니다.",specs:[{k:"베이스",v:"에폭시 개선형"},{k:"경화 시간",v:"24 ~ 36시간"},{k:"표면",v:"균일 무광"},{k:"추천 공간",v:"패턴 타일 · 디자인 욕실"},{k:"컬러",v:"25+ 색상"},{k:"수명",v:"10년+"}],image:nv},{id:"polyurea",name:"폴리우레아",badge:{label:"하이브리드",variant:"hybrid"},desc:"시멘트 + 에폭시 하이브리드 줄눈재. 매트한 질감으로 내추럴 인테리어에 잘 맞고, 가격대가 합리적이라 비수계 공간에 추천됩니다.",specs:[{k:"베이스",v:"시멘트 + 에폭시"},{k:"경화 시간",v:"48 ~ 96시간"},{k:"표면",v:"매트"},{k:"추천 공간",v:"현관 · 베란다 · 거실 일부"},{k:"컬러",v:"16+ 색상"},{k:"수명",v:"5년+"}],image:iv}];function $f({num:s,ko:d,en:o,title:u,lede:f}){return n.jsxs("div",{className:"ep-sec-head",children:[n.jsxs("div",{className:"ep-sec-bar",children:[n.jsx("span",{className:"ep-sec-n",children:s}),n.jsx("span",{className:"ep-sec-rule"}),n.jsxs("span",{className:"ep-sec-lbl",children:[n.jsx("span",{className:"ep-sec-ko",children:d}),n.jsx("span",{className:"ep-sec-en",children:o})]})]}),n.jsxs("div",{className:"ep-sec-body",children:[n.jsx("h2",{className:"ep-sec-title",children:u}),f&&n.jsx("p",{className:"ep-sec-lede",children:f})]})]})}function ov(){const s=_a(),[d,o]=k.useState("kerafoxy"),[u,f]=k.useState("silver"),[m,v]=k.useState("all"),[y,g]=k.useState("white");k.useEffect(()=>{window.scrollTo(0,0),document.title="에폭시 계열 제품 소개 — 디테일라인";const S=document.querySelector('meta[name="description"]'),q=S?.getAttribute("content")??"";return S?.setAttribute("content","케라폭시·스트라이크 에보·아스팍톤·폴리우레아 등 디테일라인이 시공하는 에폭시 계열 줄눈 제품 라인업과, 줄눈 색상을 미리 보는 인터랙티브 시뮬레이터."),()=>{S&&q&&S.setAttribute("content",q)}},[]);const h=()=>{s("/#calc"),setTimeout(()=>{const S=document.querySelector("#calc");S&&S.scrollIntoView({behavior:"smooth"})},300)},T=Ff.find(S=>S.id===d),w=xr.find(S=>S.id===u),B=k.useMemo(()=>m==="all"?xr:xr.filter(S=>S.group===m),[m]),Z={"--grout-color":w.hex,"--tile-color":br[y].hex};return n.jsxs("div",{className:"ep-page",children:[n.jsx(al,{}),n.jsxs("header",{className:"ep-hero","data-screen-label":"Hero",children:[n.jsx("div",{className:"ep-hero-bg",style:{"--hero-img-d":`url(${rv})`,"--hero-img-m":`url(${sv})`},"aria-hidden":"true"}),n.jsxs("div",{className:"ep-container ep-hero-inner",children:[n.jsx("div",{className:"ep-eyebrow ep-eyebrow-light",children:"Grout Knowledge · 03"}),n.jsxs("h1",{className:"ep-hero-title",children:["내 공간에 맞는",n.jsx("br",{}),"에폭시 계열 ",n.jsx("em",{children:"한 가지"}),"."]}),n.jsxs("p",{className:"ep-hero-lede",children:["디테일라인이 직접 시공하는 4종의 에폭시 계열 줄눈재와",n.jsx("br",{}),"줄눈 색상을 미리 확인할 수 있는 라이브 시뮬레이터를 제공합니다."]}),n.jsx("ul",{className:"ep-hero-meta",children:cv.map(S=>n.jsxs("li",{children:[n.jsx("span",{className:"ep-meta-k",children:S.k}),n.jsxs("span",{className:"ep-meta-v",children:[S.v," ",n.jsx("small",{children:S.small})]})]},S.k))})]})]}),n.jsx("nav",{className:"ep-crumb","aria-label":"현재 위치",children:n.jsxs("div",{className:"ep-container ep-crumb-inner",children:[n.jsx(yt,{to:"/",className:"ep-crumb-item",children:"홈"}),n.jsx("span",{className:"ep-crumb-sep",children:"/"}),n.jsx("span",{className:"ep-crumb-item",children:"줄눈 정보"}),n.jsx("span",{className:"ep-crumb-sep",children:"/"}),n.jsx("span",{className:"ep-crumb-here",children:"에폭시 계열 제품 소개"})]})}),n.jsx("section",{className:"ep-section","data-screen-label":"01 Product Lineup",children:n.jsxs("div",{className:"ep-container",children:[n.jsx($f,{num:"01",ko:"제품 라인업",en:"Product Lineup",title:n.jsxs(n.Fragment,{children:["같은 에폭시여도,",n.jsx("br",{}),n.jsx("em",{children:"맞춤 선택"}),"이 가능합니다."]}),lede:"공간 · 표면 질감 · 색상 선호에 따라 4종의 제품 중 가장 적합한 것을 안내해 드립니다."}),n.jsx("div",{className:"ep-prod-tabs",role:"tablist","aria-label":"제품 선택",children:Ff.map(S=>n.jsx("button",{type:"button",role:"tab","aria-selected":d===S.id,className:`ep-prod-tab ${d===S.id?"on":""}`,onClick:()=>o(S.id),children:S.name},S.id))}),n.jsxs("div",{className:"ep-prod-panel",role:"tabpanel",children:[n.jsx("div",{className:"ep-prod-image",children:n.jsx("img",{src:T.image,alt:`${T.name} 시공 결과`,loading:"lazy"})}),n.jsxs("div",{className:"ep-prod-info",children:[n.jsxs("div",{className:"ep-prod-head",children:[n.jsx("h3",{className:"ep-prod-name",children:T.name}),n.jsx("span",{className:`ep-prod-badge ep-prod-badge--${T.badge.variant}`,children:T.badge.label})]}),n.jsx("p",{className:"ep-prod-desc",children:T.desc}),n.jsx("dl",{className:"ep-prod-specs",children:T.specs.map(S=>n.jsxs("div",{className:"ep-prod-spec-row",children:[n.jsx("dt",{children:S.k}),n.jsx("dd",{children:S.v})]},S.k))})]})]})]})}),n.jsx("section",{className:"ep-section ep-bg-paper","data-screen-label":"02 Color Simulator",children:n.jsxs("div",{className:"ep-container",children:[n.jsx($f,{num:"02",ko:"라이브 컬러 시뮬레이터",en:"Live Color Simulator",title:n.jsxs(n.Fragment,{children:["시공 전에, 줄눈 색을 ",n.jsx("em",{children:"미리 보세요"}),"."]}),lede:"아래 스와치를 클릭하면 좌측 타일 그리드의 줄눈 색이 즉시 바뀝니다. 타일 색·계열 필터로 다양한 조합을 빠르게 확인해 보세요."}),n.jsxs("div",{className:"ep-sim-grid",children:[n.jsxs("div",{className:"ep-sim-left",children:[n.jsx("div",{className:"ep-tile-preview",children:n.jsx("div",{className:"ep-tile-stage",style:Z,"aria-hidden":"true",children:Array.from({length:30}).map((S,q)=>n.jsx("span",{className:"ep-tile"},q))})}),n.jsx("div",{className:"ep-tile-toggle",role:"tablist","aria-label":"타일 색상",children:Object.keys(br).map(S=>n.jsxs("button",{type:"button",role:"tab","aria-selected":y===S,className:`ep-tile-toggle-btn ${y===S?"on":""}`,onClick:()=>g(S),children:[n.jsx("span",{className:"ep-tile-toggle-dot",style:{"--td":br[S].hex}}),n.jsx("span",{children:br[S].label})]},S))})]}),n.jsxs("div",{className:"ep-sim-right",children:[n.jsx("div",{className:"ep-group-tabs",role:"tablist","aria-label":"색상 계열",children:Object.keys(Vn).map(S=>n.jsx("button",{type:"button",role:"tab","aria-selected":m===S,className:`ep-group-tab ${m===S?"on":""}`,onClick:()=>v(S),children:Vn[S]},S))}),n.jsx("div",{className:"ep-swatches",children:B.map(S=>n.jsx("button",{type:"button",className:`ep-swatch ${u===S.id?"is-active":""}`,style:{background:S.hex},"data-light":S.light?"true":"false",onClick:()=>f(S.id),"aria-label":`${S.name} · ${S.hex.toUpperCase()} · ${Vn[S.group]}`,"aria-pressed":u===S.id},S.id))}),n.jsxs("div",{className:"ep-sel-card","aria-live":"polite",children:[n.jsx("div",{className:"ep-sel-chip",style:{"--c":w.hex},"aria-hidden":"true"}),n.jsxs("div",{className:"ep-sel-info",children:[n.jsx("h4",{className:"ep-sel-name",children:w.name}),n.jsxs("div",{className:"ep-sel-meta",children:[n.jsx("span",{className:"ep-sel-hex",children:w.hex.toUpperCase()}),n.jsxs("span",{className:"ep-sel-tag",children:["· ",w.tagEn]})]}),n.jsx("div",{className:"ep-sel-group",children:Vn[w.group]}),n.jsx("p",{className:"ep-sel-tip",children:so[w.group]})]})]})]})]}),n.jsx("ul",{className:"ep-tips-grid",children:Object.keys(so).map(S=>{const q=xr.filter(Y=>Y.group===S).slice(0,3);return n.jsxs("li",{className:"ep-tip-cell",children:[n.jsx("div",{className:"ep-tip-swatches","aria-hidden":"true",children:q.map(Y=>n.jsx("span",{style:{background:Y.hex}},Y.id))}),n.jsx("h4",{className:"ep-tip-name",children:Vn[S]}),n.jsx("p",{className:"ep-tip-desc",children:so[S]})]},S)})})]})}),!1,n.jsx("section",{className:"ep-cta-band","data-screen-label":"CTA Band",children:n.jsxs("div",{className:"ep-container ep-cta-row",children:[n.jsxs("div",{className:"ep-cta-text",children:[n.jsxs("h3",{className:"ep-cta-title",children:["어떤 제품·색이 우리 집에 맞을지 ",n.jsx("em",{children:"고민되신다면"}),"?"]}),n.jsx("p",{className:"ep-cta-sub",children:"공간 사진 한 장만 보내주시면, 가장 잘 어울리는 제품과 색을 추천해 드립니다."})]}),n.jsxs("div",{className:"ep-cta-actions",children:[n.jsxs("button",{type:"button",className:"ep-btn ep-btn-primary",onClick:h,children:["무료 견적 받기 ",n.jsx("span",{className:"ep-btn-arr",children:"→"})]}),n.jsx("a",{href:"tel:010-8005-6674",onClick:()=>Ut.phoneClick("info_cta"),className:"ep-btn ep-btn-ghost",children:"전화 상담 010-8005-6674"})]})]})}),n.jsx(ll,{}),n.jsx("style",{children:uv})]})}const uv=`
.ep-page {
  background: var(--bg);
  color: var(--ink);
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
}
.ep-page ::selection { background: var(--accent); color: #fff; }

.ep-container {
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 32px;
}
@media (max-width: 720px) {
  .ep-container { padding: 0 20px; }
}

.ep-section {
  padding: 120px 0;
  border-top: 1px solid var(--line);
}
.ep-bg-paper { background: var(--paper); }
@media (max-width: 720px) {
  .ep-section { padding: 72px 0; }
}

.ep-eyebrow {
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
}
.ep-eyebrow-light { color: #d9b790; }

.ep-page em {
  font-style: normal;
  color: var(--accent);
}
.ep-hero em { color: #e3c5a3; }

/* ===== Hero ===== */
.ep-hero {
  position: relative;
  padding: 168px 0 84px;
  overflow: hidden;
  isolation: isolate;
  color-scheme: dark;
}
@media (max-width: 720px) {
  .ep-hero { padding: 120px 0 64px; }
}
.ep-hero-bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    /* Bottom fade — light at top, strong dark near bottom so image blends into dark */
    linear-gradient(180deg, rgba(20,16,12,.25) 0%, rgba(20,16,12,.25) 35%, rgba(14,11,8,.95) 100%),
    radial-gradient(120% 80% at 70% 20%, rgba(138,106,76,.18), transparent 60%),
    /* Width-anchored, top-aligned — image fills full width from the top */
    var(--hero-img-d, none) center top / 100% auto no-repeat,
    linear-gradient(180deg, #251d14 0%, #18130e 100%);
}
@media (max-width: 720px) {
  /* Mobile uses dedicated mobile-optimized image with cover */
  .ep-hero-bg {
    background:
      linear-gradient(180deg, rgba(20,16,12,.35) 0%, rgba(14,11,8,.78) 100%),
      radial-gradient(120% 80% at 70% 20%, rgba(138,106,76,.18), transparent 60%),
      var(--hero-img-m, none) center/cover no-repeat,
      linear-gradient(180deg, #251d14 0%, #18130e 100%);
  }
}
.ep-hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(120% 100% at 50% 0%, rgba(0,0,0,.15), rgba(0,0,0,.55) 80%);
  pointer-events: none;
}
.ep-ph-corner {
  position: absolute;
  top: 14px;
  right: 16px;
  font-size: 9.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,.4);
  z-index: 1;
}
.ep-ph-label {
  position: absolute;
  left: 18px;
  bottom: 16px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255,255,255,.4);
  z-index: 1;
}
.ep-ph-sq {
  display: inline-block;
  width: 6px;
  height: 6px;
  background: var(--accent);
}
.ep-hero-inner { position: relative; z-index: 1; }
.ep-hero-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: clamp(36px, 5vw, 68px);
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: #fff;
  margin: 14px 0 22px;
  max-width: 24ch;
  word-break: keep-all;
}
.ep-hero-lede {
  font-size: 15.5px;
  line-height: 1.75;
  color: rgba(255,255,255,.78);
  max-width: 56ch;
  margin: 0;
}
.ep-hero-meta {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
  padding: 0;
  margin: 48px 0 0;
  border-top: 1px solid rgba(255,255,255,.16);
}
.ep-hero-meta li {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 22px 22px 22px 0;
  border-right: 1px solid rgba(255,255,255,.16);
}
.ep-hero-meta li:last-child { border-right: none; }
.ep-hero-meta li:not(:first-child) { padding-left: 22px; }
.ep-meta-k {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,.55);
}
.ep-meta-v {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: 17px;
  color: #fff;
  letter-spacing: -0.005em;
}
.ep-meta-v small {
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 11px;
  font-weight: 500;
  color: rgba(255,255,255,.55);
  margin-left: 6px;
  letter-spacing: 0;
}
@media (max-width: 720px) {
  .ep-hero-meta { grid-template-columns: repeat(2, 1fr); }
  .ep-hero-meta li:nth-child(2) { border-right: none; }
  .ep-hero-meta li:nth-child(3) { padding-left: 0; }
  .ep-hero-meta li:nth-child(3),
  .ep-hero-meta li:nth-child(4) {
    border-top: 1px solid rgba(255,255,255,.16);
  }
}

/* ===== Breadcrumb ===== */
.ep-crumb {
  background: var(--paper);
  border-bottom: 1px solid var(--line);
}
.ep-crumb-inner {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 32px;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: var(--muted-2);
}
@media (max-width: 720px) {
  .ep-crumb-inner { padding: 14px 20px; }
}
.ep-crumb-item {
  color: var(--muted-2);
  text-decoration: none;
  transition: color .2s ease;
}
.ep-crumb-item:hover { color: var(--accent); }
.ep-crumb-sep { opacity: .4; }
.ep-crumb-here { color: var(--ink); }

/* ===== Section Head ===== */
.ep-sec-head { margin-bottom: 56px; }
@media (max-width: 820px) {
  .ep-sec-head { margin-bottom: 36px; }
}
.ep-sec-bar {
  display: flex;
  align-items: center;
  gap: 18px;
  padding-bottom: 22px;
  margin-bottom: 32px;
  border-bottom: 1px solid var(--line);
}
.ep-sec-n {
  font-family: 'Noto Serif KR', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 1;
  color: var(--accent);
  font-variant-numeric: lining-nums;
}
.ep-sec-rule {
  flex: 0 0 56px;
  height: 1px;
  background: var(--accent);
  opacity: .6;
}
.ep-sec-lbl {
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
.ep-sec-ko { color: var(--ink-2); }
.ep-sec-en { color: var(--muted-2); margin-left: 10px; }
.ep-sec-body {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 64px;
  align-items: end;
}
@media (max-width: 820px) {
  .ep-sec-body { grid-template-columns: 1fr; gap: 16px; align-items: start; }
}
.ep-sec-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: clamp(30px, 3.6vw, 48px);
  line-height: 1.18;
  letter-spacing: -0.02em;
  margin: 0;
  word-break: keep-all;
}
.ep-sec-lede {
  font-size: 16px;
  line-height: 1.75;
  color: var(--muted);
  max-width: 48ch;
  margin: 0;
}

/* ===== Product Lineup ===== */
.ep-prod-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
}
.ep-prod-tab {
  padding: 12px 22px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.005em;
  border: 1px solid var(--line-strong);
  background: transparent;
  color: var(--ink-2);
  border-radius: 999px;
  cursor: pointer;
  transition: all .2s ease;
}
.ep-prod-tab:hover { border-color: var(--ink); color: var(--ink); }
.ep-prod-tab.on { background: var(--ink); color: var(--paper); border-color: var(--ink); }

.ep-prod-panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  background: var(--paper);
  border: 1px solid var(--line);
  padding: 40px;
  align-items: start;
}
@media (max-width: 900px) {
  .ep-prod-panel { grid-template-columns: 1fr; padding: 28px 24px; gap: 28px; }
}
.ep-prod-image {
  position: relative;
  aspect-ratio: 16 / 13;
  overflow: hidden;
  background: var(--bg-2);
  border: 1px solid var(--line);
}
.ep-prod-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.ep-prod-info { display: flex; flex-direction: column; gap: 18px; }
.ep-prod-head {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
.ep-prod-name {
  font-family: 'Noto Serif KR', serif;
  font-size: clamp(24px, 2.6vw, 32px);
  font-weight: 500;
  letter-spacing: -0.015em;
  margin: 0;
  color: var(--ink);
}
.ep-prod-badge {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 6px 12px;
  border-radius: 999px;
}
.ep-prod-badge--premium { background: var(--accent); color: #fff; }
.ep-prod-badge--standard { background: var(--bg-2); color: var(--ink-2); border: 1px solid var(--line-strong); }
.ep-prod-badge--hybrid { background: #3a3833; color: #d9b790; }
.ep-prod-desc {
  font-size: 15px;
  line-height: 1.8;
  color: var(--muted);
  margin: 0;
  word-break: keep-all;
}
.ep-prod-specs {
  margin: 4px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  border-top: 1px solid var(--line);
}
.ep-prod-spec-row {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 16px;
  padding: 14px 0;
  border-bottom: 1px solid var(--line);
}
.ep-prod-spec-row:last-child { border-bottom: 0; }
.ep-prod-spec-row dt {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
  align-self: center;
}
.ep-prod-spec-row dd {
  margin: 0;
  font-family: 'Noto Serif KR', serif;
  font-size: 15px;
  font-weight: 400;
  color: var(--ink);
  letter-spacing: -0.005em;
}

/* ===== Color Simulator ===== */
.ep-sim-grid {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 40px;
  align-items: start;
}
@media (max-width: 980px) {
  .ep-sim-grid { grid-template-columns: 1fr; }
}
.ep-sim-left { display: flex; flex-direction: column; gap: 20px; }
.ep-tile-preview {
  position: relative;
  aspect-ratio: 6 / 5;
  overflow: hidden;
  background: var(--bg);
  border: 1px solid var(--line);
  box-shadow: 0 24px 64px -32px rgba(28,25,22,.32);
}
.ep-tile-preview::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(120% 80% at 30% 0%, rgba(255,255,255,.08), transparent 60%);
  pointer-events: none;
  z-index: 2;
}
.ep-tile-stage {
  position: absolute;
  inset: 0;
  background: var(--grout-color, #c4c0bc);
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 5px;
  padding: 5px;
  transition: background .35s ease;
}
.ep-tile {
  position: relative;
  background: var(--tile-color, #ece6dc);
  transition: background .35s ease;
  overflow: hidden;
}
.ep-tile::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(255,255,255,.18) 0%, transparent 35%);
  pointer-events: none;
}
.ep-tile::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(60% 40% at 20% 100%, rgba(255,255,255,.06), transparent 70%);
  pointer-events: none;
}

/* Tile toggle */
.ep-tile-toggle {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.ep-tile-toggle-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px 8px 8px;
  font-family: inherit;
  font-size: 12.5px;
  font-weight: 500;
  letter-spacing: -0.005em;
  border: 1px solid var(--line-strong);
  background: var(--paper);
  color: var(--ink-2);
  border-radius: 999px;
  cursor: pointer;
  transition: all .2s ease;
}
.ep-tile-toggle-btn:hover { border-color: var(--ink); }
.ep-tile-toggle-btn.on { background: var(--ink); color: var(--paper); border-color: var(--ink); }
.ep-tile-toggle-dot {
  width: 18px;
  height: 18px;
  background: var(--td);
  border: 1px solid rgba(0,0,0,.1);
  border-radius: 50%;
  display: inline-block;
}

/* Group filter */
.ep-group-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 18px;
}
.ep-group-tab {
  padding: 8px 14px;
  font-family: inherit;
  font-size: 12.5px;
  font-weight: 500;
  letter-spacing: -0.005em;
  border: 1px solid var(--line-strong);
  background: transparent;
  color: var(--ink-2);
  border-radius: 999px;
  cursor: pointer;
  transition: all .2s ease;
}
.ep-group-tab:hover { border-color: var(--ink); color: var(--ink); }
.ep-group-tab.on { background: var(--ink-2); color: var(--paper); border-color: var(--ink-2); }

/* Swatches */
.ep-swatches {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
  margin-bottom: 24px;
}
@media (max-width: 560px) {
  .ep-swatches { grid-template-columns: repeat(4, 1fr); }
}
.ep-swatch {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border: 1px solid rgba(0,0,0,.1);
  border-radius: 4px;
  cursor: pointer;
  padding: 0;
  transition: transform .15s ease, box-shadow .15s ease;
}
.ep-swatch:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px -4px rgba(28,25,22,.18);
}
.ep-swatch.is-active {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
.ep-swatch.is-active::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 6px;
  border-left: 1.8px solid #fff;
  border-bottom: 1.8px solid #fff;
  transform: translate(-50%, -65%) rotate(-45deg);
  mix-blend-mode: difference;
  filter: invert(1);
}
.ep-swatch[data-light="true"].is-active::after {
  filter: none;
  border-color: #1c1916;
}

/* Selected color card */
.ep-sel-card {
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 18px;
  align-items: start;
  background: var(--paper);
  border: 1px solid var(--line);
  padding: 20px;
}
.ep-sel-chip {
  width: 64px;
  height: 64px;
  background: var(--c, var(--bg-2));
  border: 1px solid rgba(0,0,0,.08);
  border-radius: 4px;
}
.ep-sel-info { display: flex; flex-direction: column; gap: 4px; min-width: 0; }
.ep-sel-name {
  font-family: 'Noto Serif KR', serif;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.01em;
  margin: 0;
  color: var(--ink);
}
.ep-sel-meta {
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted-2);
  font-weight: 500;
}
.ep-sel-hex { color: var(--ink-2); }
.ep-sel-group {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  margin-top: 4px;
}
.ep-sel-tip {
  font-size: 13.5px;
  line-height: 1.7;
  color: var(--muted);
  margin: 8px 0 0;
  word-break: keep-all;
}

/* Tips grid */
.ep-tips-grid {
  list-style: none;
  padding: 0;
  margin: 56px 0 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}
@media (max-width: 820px) {
  .ep-tips-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .ep-tips-grid { grid-template-columns: 1fr; }
}
.ep-tip-cell {
  background: var(--bg);
  border: 1px solid var(--line);
  padding: 22px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.ep-tip-swatches {
  display: inline-flex;
  gap: 4px;
}
.ep-tip-swatches span {
  width: 18px;
  height: 18px;
  border-radius: 3px;
  border: 1px solid rgba(0,0,0,.08);
  display: inline-block;
}
.ep-tip-name {
  font-family: 'Noto Serif KR', serif;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: -0.005em;
  margin: 4px 0 0;
  color: var(--ink);
}
.ep-tip-desc {
  font-size: 13px;
  line-height: 1.7;
  color: var(--muted);
  margin: 0;
  word-break: keep-all;
}

/* ===== Related ===== */
.ep-related-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 32px;
}
@media (max-width: 900px) {
  .ep-related-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .ep-related-grid { grid-template-columns: 1fr; }
}
.ep-related-card {
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: var(--paper);
  border: 1px solid var(--line);
  padding: 32px 28px 28px;
  min-height: 220px;
  color: inherit;
  text-decoration: none;
  transition: background .25s ease, color .25s ease, border-color .25s ease;
}
.ep-related-card:hover {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
}
.ep-related-idx {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
}
.ep-related-card:hover .ep-related-idx { color: #d9b790; }
.ep-related-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 500;
  font-size: 21px;
  line-height: 1.35;
  letter-spacing: -0.01em;
  margin: 0;
  color: var(--ink);
}
.ep-related-card:hover .ep-related-title { color: #fff; }
.ep-related-desc {
  font-size: 13px;
  line-height: 1.65;
  color: var(--muted);
  margin: 0;
}
.ep-related-card:hover .ep-related-desc { color: rgba(255,255,255,.65); }
.ep-related-more {
  margin-top: auto;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted-2);
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.ep-related-card:hover .ep-related-more { color: #d9b790; }
.ep-related-arr { transition: transform .3s ease; }
.ep-related-card:hover .ep-related-arr { transform: translateX(4px); }

/* ===== CTA Band ===== */
.ep-cta-band {
  background: var(--bg-2);
  border-top: 1px solid var(--line);
  padding: 72px 0;
}
@media (max-width: 720px) {
  .ep-cta-band { padding: 56px 0; }
}
.ep-cta-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}
.ep-cta-text { display: flex; flex-direction: column; gap: 8px; flex: 1 1 380px; }
.ep-cta-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: clamp(26px, 3vw, 38px);
  letter-spacing: -0.015em;
  line-height: 1.35;
  margin: 0;
  word-break: keep-all;
}
.ep-cta-sub {
  font-size: 14px;
  color: var(--muted);
  margin: 0;
}
.ep-cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: flex-end;
}
@media (max-width: 820px) {
  .ep-cta-actions {
    flex-wrap: nowrap;
    justify-content: flex-start;
    gap: 8px;
    width: 100%;
  }
  .ep-cta-actions .ep-btn {
    flex: 1 1 0;
    min-width: 0;
    padding: 14px 12px;
    font-size: 13px;
    white-space: nowrap;
    justify-content: center;
  }
}

/* ===== Buttons ===== */
.ep-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 22px;
  border-radius: 2px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.005em;
  border: 0;
  cursor: pointer;
  text-decoration: none;
  transition: background .25s ease, color .25s ease, border-color .25s ease;
}
.ep-btn-arr { transition: transform .3s ease; }
.ep-btn:hover .ep-btn-arr { transform: translateX(4px); }
.ep-btn-primary {
  background: var(--ink);
  color: var(--paper);
}
.ep-btn-primary:hover { background: var(--accent-deep); }
.ep-btn-ghost {
  background: transparent;
  border: 1px solid var(--line-strong);
  color: var(--ink);
}
.ep-btn-ghost:hover {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
}
`,Gl=({n:s,best:d})=>n.jsxs(n.Fragment,{children:[n.jsxs("span",{className:"cp-stars",children:["★".repeat(s),n.jsx("span",{className:"off",children:"★".repeat(5-s)})]}),n.jsx("span",{className:`cp-rating ${d?"best":""}`,children:d?"탁월":s>=4?"우수":s>=3?"보통":"낮음"})]}),If=[{k:"소재 성분",kerafoxy:n.jsxs(n.Fragment,{children:["에폭시 수지 ",n.jsx("span",{className:"cp-plus",children:"+"})," 경화제"," ",n.jsx("span",{className:"cp-rating",children:"2액형"})]}),polyurea:n.jsxs(n.Fragment,{children:["폴리우레아 수지 ",n.jsx("span",{className:"cp-rating",children:"1액형"})]})},{k:"경화 방식",kerafoxy:n.jsxs(n.Fragment,{children:["화학 반응 경화 ",n.jsx("span",{className:"cp-rating",children:"수동 혼합"})]}),polyurea:n.jsxs(n.Fragment,{children:["자연 경화 ",n.jsx("span",{className:"cp-rating",children:"습기·공기 반응"})]})},{k:"내수성",kerafoxy:n.jsx(Gl,{n:5,best:!0}),polyurea:n.jsx(Gl,{n:3})},{k:"항균성",kerafoxy:n.jsx(Gl,{n:5,best:!0}),polyurea:n.jsx(Gl,{n:3})},{k:"내구성 · 수명",kerafoxy:n.jsxs("span",{className:"cp-num",children:["10~15",n.jsx("small",{children:"년 이상"})]}),polyurea:n.jsxs("span",{className:"cp-num",children:["2~4",n.jsx("small",{children:"년"})]})},{k:"탄성 · 신축성",kerafoxy:n.jsx(Gl,{n:4}),polyurea:n.jsx(Gl,{n:5,best:!0})},{k:"시공 난이도",kerafoxy:"전문 기술 필요",polyurea:"비교적 간단"},{k:"가격",kerafoxy:n.jsxs("span",{className:"cp-num",children:["평균 30",n.jsx("small",{children:"만원"})]}),polyurea:n.jsxs("span",{className:"cp-num",children:["평균 20",n.jsx("small",{children:"만원"})]})},{k:"색상 선택",kerafoxy:n.jsxs("span",{className:"cp-num",children:["16",n.jsx("small",{children:"여 가지"})]}),polyurea:n.jsxs("span",{className:"cp-num",children:["20",n.jsx("small",{children:"여 가지"})]})},{k:"적합 환경",kerafoxy:n.jsxs(n.Fragment,{children:["욕실 · 주방 · 수영장 등 ",n.jsx("strong",{className:"cp-strong",children:"수분 多"})]}),polyurea:n.jsxs(n.Fragment,{children:["베란다 · 외벽 등 ",n.jsx("strong",{className:"cp-strong",children:"진동·충격 多"})]})}],dv=[{variant:"kp",title:"케라폭시 줄눈 추천",sub:"For Home · Indoor",items:[{text:"화장실·욕실·주방처럼 상시 수분에 노출되는 공간"},{text:"위생이 특히 중요한 가정 (어린이, 노약자)"},{text:"오랫동안 재시공 없이 사용하고 싶은 경우"},{text:"다양한 색상으로 인테리어를 연출하고 싶은 경우"}]},{variant:"pu",title:"폴리우레아 줄눈 추천",sub:"For Outdoor · Industrial",items:[{text:"베란다·테라스 등 온도 변화와 진동이 많은 공간"},{text:"건물 외벽·주차장처럼 하중과 충격이 큰 환경"},{text:"빠른 시공과 조기 경화가 필요한 경우"},{text:"비용을 절감하면서도 품질을 원하는 경우"}]}];function Pf({num:s,ko:d,en:o,title:u,lede:f}){return n.jsxs("div",{className:"cp-sec-head",children:[n.jsxs("div",{className:"cp-sec-bar",children:[n.jsx("span",{className:"cp-sec-n",children:s}),n.jsx("span",{className:"cp-sec-rule"}),n.jsxs("span",{className:"cp-sec-lbl",children:[n.jsx("span",{className:"cp-sec-ko",children:d}),n.jsx("span",{className:"cp-sec-en",children:o})]})]}),n.jsxs("div",{className:"cp-sec-body",children:[n.jsx("h2",{className:"cp-sec-title",children:u}),f&&n.jsx("p",{className:"cp-sec-lede",children:f})]})]})}function pv(){const s=_a();k.useEffect(()=>{window.scrollTo(0,0),document.title="폴리우레아 vs 케라폭시 — 디테일라인";const o=document.querySelector('meta[name="description"]'),u=o?.getAttribute("content")??"";return o?.setAttribute("content","폴리우레아 줄눈과 케라폭시 줄눈, 두 소재의 차이점과 장단점을 비교하고 공간에 맞는 최적의 선택을 안내합니다."),()=>{o&&u&&o.setAttribute("content",u)}},[]);const d=()=>{s("/#calc"),setTimeout(()=>{const o=document.querySelector("#calc");o&&o.scrollIntoView({behavior:"smooth"})},300)};return n.jsxs("div",{className:"cp-page",children:[n.jsx(al,{}),n.jsxs("header",{className:"cp-hero","data-screen-label":"Hero",children:[n.jsx("div",{className:"cp-hero-bg","aria-hidden":"true"}),n.jsxs("div",{className:"cp-container cp-hero-inner",children:[n.jsx("div",{className:"cp-eyebrow cp-eyebrow-light",children:"Material Compare Guide"}),n.jsxs("h1",{className:"cp-hero-title",children:["폴리우레아 ",n.jsx("span",{className:"cp-vs",children:"vs"})," 케라폭시"]}),n.jsxs("p",{className:"cp-hero-lede",children:["두 소재의 차이점과 장단점을 비교해",n.jsx("br",{}),"공간에 가장 알맞은 소재를 선택하세요."]})]})]}),n.jsx("nav",{className:"cp-crumb","aria-label":"현재 위치",children:n.jsxs("div",{className:"cp-container cp-crumb-inner",children:[n.jsx(yt,{to:"/",className:"cp-crumb-item",children:"홈"}),n.jsx("span",{className:"cp-crumb-sep",children:"/"}),n.jsx("span",{className:"cp-crumb-item",children:"줄눈 정보"}),n.jsx("span",{className:"cp-crumb-sep",children:"/"}),n.jsx("span",{className:"cp-crumb-here",children:"폴리우레아 vs 케라폭시"})]})}),n.jsx("section",{className:"cp-intro","data-screen-label":"Intro",children:n.jsx("div",{className:"cp-container",children:n.jsxs("div",{className:"cp-intro-grid",children:[n.jsxs("h2",{className:"cp-intro-title",children:["폴리우레아 줄눈과",n.jsx("br",{}),"케라폭시 줄눈,",n.jsx("br",{}),n.jsx("em",{children:"어떻게 다를까?"})]}),n.jsxs("div",{className:"cp-intro-body",children:[n.jsxs("p",{children:["줄눈 시공을 알아보다 보면 ",n.jsx("b",{children:"폴리우레아 줄눈"}),"과 ",n.jsx("b",{children:"케라폭시 줄눈"}),", 두 가지 선택지를 마주하게 됩니다. 두 소재 모두 기존 시멘트 줄눈보다 월등히 우수한 성능을 자랑하지만, 각자의 강점이 다릅니다."]}),n.jsxs("p",{children:["간단히 말하면, ",n.jsx("b",{children:"케라폭시는 방수·항균 성능"}),"이 극강이고"," ",n.jsx("b",{children:"폴리우레아는 탄성·신축성"}),"이 뛰어납니다. 공간의 특성에 따라 알맞은 소재를 선택하는 것이 핵심입니다."]}),n.jsxs("div",{className:"cp-vs-mark",children:[n.jsxs("span",{className:"cp-pill",children:["방수·항균 ",n.jsx("b",{children:"케라폭시"})]}),n.jsx("span",{className:"cp-vs-x",children:"×"}),n.jsxs("span",{className:"cp-pill",children:["탄성·내충격 ",n.jsx("b",{children:"폴리우레아"})]})]})]})]})})}),n.jsx("section",{className:"cp-section cp-bg-paper","data-screen-label":"01 Detailed Comparison",children:n.jsxs("div",{className:"cp-container",children:[n.jsx(Pf,{num:"01",ko:"상세 비교표",en:"Detailed Comparison",title:n.jsxs(n.Fragment,{children:["10가지 항목으로,",n.jsx("br",{}),"두 소재를 ",n.jsx("em",{children:"나란히 본다"}),"."]}),lede:"성분·내구성·가격·시공성까지. 한 줄씩 짚어가며 비교하세요. ★은 5점 만점 기준의 상대 성능입니다."}),n.jsx("div",{className:"cp-cmp-wrap",children:n.jsxs("table",{className:"cp-cmp-table",children:[n.jsx("caption",{className:"sr-only",children:"케라폭시 vs 폴리우레아 10항목 비교"}),n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{className:"cp-cmp-first",children:n.jsxs("span",{className:"cp-cmp-mat",children:["비교 항목",n.jsx("small",{children:"Criteria"})]})}),n.jsx("th",{children:n.jsxs("span",{className:"cp-cmp-mat",children:["케라폭시 줄눈",n.jsx("small",{children:"Kerapoxy"})]})}),n.jsx("th",{children:n.jsxs("span",{className:"cp-cmp-mat",children:["폴리우레아 줄눈",n.jsx("small",{children:"Polyurea"})]})})]})}),n.jsx("tbody",{children:If.map(o=>n.jsxs("tr",{children:[n.jsx("td",{className:"cp-row-label",children:o.k}),n.jsx("td",{className:"cp-col-kp",children:o.kerafoxy}),n.jsx("td",{children:o.polyurea})]},o.k))})]})}),n.jsx("ul",{className:"cp-cmp-cards","aria-label":"비교 항목별 카드",children:If.map(o=>n.jsxs("li",{className:"cp-cmp-card",children:[n.jsx("div",{className:"cp-cmp-card-k",children:o.k}),n.jsxs("div",{className:"cp-cmp-card-row",children:[n.jsxs("div",{className:"cp-cmp-card-side cp-cmp-card-kp",children:[n.jsx("span",{className:"cp-cmp-card-side-lbl",children:"케라폭시"}),n.jsx("span",{className:"cp-cmp-card-side-val",children:o.kerafoxy})]}),n.jsxs("div",{className:"cp-cmp-card-side",children:[n.jsx("span",{className:"cp-cmp-card-side-lbl",children:"폴리우레아"}),n.jsx("span",{className:"cp-cmp-card-side-val",children:o.polyurea})]})]})]},`m-${o.k}`))}),n.jsx("p",{className:"cp-cmp-foot",children:"* 가격은 화장실 양변기 전체(바닥+벽) 시공 기준 평균값이며, 평형·현장 상황에 따라 달라질 수 있습니다."})]})}),n.jsx("section",{className:"cp-section","data-screen-label":"02 Recommend",children:n.jsxs("div",{className:"cp-container",children:[n.jsx(Pf,{num:"02",ko:"어떤 소재를 선택해야 할까요?",en:"Which to Choose",title:n.jsxs(n.Fragment,{children:["공간 용도와 목적에 따라,",n.jsx("br",{}),"최적의 ",n.jsx("em",{children:"줄눈 소재"}),"를 선택하세요."]}),lede:"아래 체크리스트로 본인 공간에 더 어울리는 소재를 확인할 수 있습니다."}),n.jsx("div",{className:"cp-reco-grid",children:dv.map(o=>n.jsxs("article",{className:`cp-reco cp-reco-${o.variant}`,children:[n.jsxs("div",{className:"cp-reco-head",children:[n.jsx("h3",{className:"cp-reco-title",children:o.title}),n.jsx("span",{className:"cp-reco-sub",children:o.sub})]}),n.jsx("ul",{className:"cp-reco-list",children:o.items.map(u=>n.jsx("li",{children:u.text},u.text))})]},o.variant))})]})}),n.jsx("section",{className:"cp-cta-band","data-screen-label":"CTA Band",children:n.jsxs("div",{className:"cp-container cp-cta-row",children:[n.jsxs("div",{className:"cp-cta-text",children:[n.jsxs("h3",{className:"cp-cta-title",children:["어떤 소재가 맞을지 ",n.jsx("em",{children:"아직 고민되시나요?"})]}),n.jsx("p",{className:"cp-cta-sub",children:"현장 상황과 요구 사항을 듣고 최적의 소재를 추천해 드립니다."})]}),n.jsxs("div",{className:"cp-cta-actions",children:[n.jsxs("button",{type:"button",className:"cp-btn cp-btn-primary",onClick:d,children:["무료 견적 받기 ",n.jsx("span",{className:"cp-btn-arr",children:"→"})]}),n.jsx("a",{href:"tel:010-8005-6674",onClick:()=>Ut.phoneClick("info_cta"),className:"cp-btn cp-btn-ghost",children:"전화 상담 010-8005-6674"})]})]})}),n.jsx(ll,{}),n.jsx("style",{children:fv})]})}const fv=`
.cp-page {
  background: var(--bg);
  color: var(--ink);
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
}
.cp-page ::selection { background: var(--accent); color: #fff; }

.cp-container {
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 32px;
}
@media (max-width: 720px) {
  .cp-container { padding: 0 20px; }
}

.cp-section {
  padding: 120px 0;
  border-top: 1px solid var(--line);
}
.cp-bg-paper { background: var(--paper); }
@media (max-width: 720px) {
  .cp-section { padding: 72px 0; }
}

.cp-eyebrow {
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
}
.cp-eyebrow-light { color: #d9b790; }

.cp-page em {
  font-style: normal;
  color: var(--accent);
}
.cp-hero em { color: #e3c5a3; }

/* ===== Hero ===== */
.cp-hero {
  position: relative;
  padding: 168px 0 92px;
  overflow: hidden;
  isolation: isolate;
  text-align: center;
  color-scheme: dark;
}
@media (max-width: 720px) {
  .cp-hero { padding: 120px 0 64px; }
}
.cp-hero-bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    linear-gradient(180deg, rgba(20,16,12,.45) 0%, rgba(14,11,8,.78) 100%),
    radial-gradient(120% 80% at 50% 20%, rgba(138,106,76,.18), transparent 60%),
    var(--hero-img, none) center/cover no-repeat,
    linear-gradient(180deg, #251d14 0%, #18130e 100%);
}
.cp-hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(120% 100% at 50% 0%, rgba(0,0,0,.15), rgba(0,0,0,.55) 80%);
  pointer-events: none;
}
.cp-hero-inner { position: relative; z-index: 1; }
.cp-hero .cp-eyebrow {
  display: inline-flex;
  justify-content: center;
}
.cp-hero-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: clamp(40px, 5.4vw, 76px);
  line-height: 1.1;
  letter-spacing: -0.022em;
  color: #fff;
  margin: 18px 0 0;
  word-break: keep-all;
}
.cp-vs {
  font-family: 'Noto Serif KR', serif;
  font-style: italic;
  color: #d9b790;
  font-weight: 300;
  padding: 0 0.1em;
}
.cp-hero-lede {
  font-size: 15.5px;
  line-height: 1.7;
  color: rgba(255,255,255,.78);
  margin: 18px auto 0;
  max-width: 54ch;
}

/* ===== Breadcrumb ===== */
.cp-crumb {
  background: var(--paper);
  border-bottom: 1px solid var(--line);
}
.cp-crumb-inner {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 32px;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: var(--muted-2);
}
@media (max-width: 720px) {
  .cp-crumb-inner { padding: 14px 20px; }
}
.cp-crumb-item {
  color: var(--muted-2);
  text-decoration: none;
  transition: color .2s ease;
}
.cp-crumb-item:hover { color: var(--accent); }
.cp-crumb-sep { opacity: .4; }
.cp-crumb-here { color: var(--ink); }

/* ===== Intro ===== */
.cp-intro {
  padding: 96px 0;
}
@media (max-width: 720px) {
  .cp-intro { padding: 64px 0; }
}
.cp-intro-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 72px;
  align-items: start;
}
@media (max-width: 900px) {
  .cp-intro-grid { grid-template-columns: 1fr; gap: 24px; }
}
.cp-intro-title {
  font-family: 'Noto Serif KR', serif;
  font-size: clamp(28px, 3.2vw, 40px);
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.25;
  margin: 0;
  word-break: keep-all;
}
.cp-intro-body {
  font-size: 15.5px;
  color: var(--muted);
  line-height: 1.85;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.cp-intro-body p { margin: 0; }
.cp-intro-body b {
  font-weight: 500;
  color: var(--ink-2);
  border-bottom: 1px solid var(--accent);
  padding-bottom: 1px;
}
.cp-vs-mark {
  display: inline-flex;
  align-items: center;
  gap: 18px;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid var(--line);
  flex-wrap: wrap;
}
.cp-pill {
  padding: 7px 16px;
  border: 1px solid var(--line-strong);
  border-radius: 999px;
  font-size: 12.5px;
  color: var(--ink-2);
  letter-spacing: -0.005em;
}
.cp-pill b {
  font-weight: 500;
  color: var(--accent-deep);
}
.cp-vs-x {
  font-family: 'Noto Serif KR', serif;
  font-style: italic;
  color: var(--muted-2);
  font-size: 18px;
}

/* ===== Section Head ===== */
.cp-sec-head { margin-bottom: 56px; }
@media (max-width: 820px) {
  .cp-sec-head { margin-bottom: 36px; }
}
.cp-sec-bar {
  display: flex;
  align-items: center;
  gap: 18px;
  padding-bottom: 22px;
  margin-bottom: 32px;
  border-bottom: 1px solid var(--line);
}
.cp-sec-n {
  font-family: 'Noto Serif KR', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 1;
  color: var(--accent);
  font-variant-numeric: lining-nums;
}
.cp-sec-rule {
  flex: 0 0 56px;
  height: 1px;
  background: var(--accent);
  opacity: .6;
}
.cp-sec-lbl {
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
.cp-sec-ko { color: var(--ink-2); }
.cp-sec-en { color: var(--muted-2); margin-left: 10px; }
.cp-sec-body {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 64px;
  align-items: end;
}
@media (max-width: 820px) {
  .cp-sec-body { grid-template-columns: 1fr; gap: 16px; align-items: start; }
}
.cp-sec-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: clamp(30px, 3.6vw, 48px);
  line-height: 1.18;
  letter-spacing: -0.02em;
  margin: 0;
  word-break: keep-all;
}
.cp-sec-lede {
  font-size: 16px;
  line-height: 1.75;
  color: var(--muted);
  max-width: 48ch;
  margin: 0;
}

/* ===== Compare Table (desktop) ===== */
.cp-cmp-wrap {
  border: 1px solid var(--line);
  overflow: hidden;
}
.cp-cmp-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--paper);
}
.cp-cmp-table thead th {
  background: var(--ink);
  color: var(--paper);
  text-align: left;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 0.02em;
  padding: 20px 28px;
  border-right: 1px solid rgba(255,255,255,.08);
  vertical-align: top;
}
.cp-cmp-table thead th:last-child { border-right: 0; }
.cp-cmp-mat {
  display: block;
  font-family: 'Noto Serif KR', serif;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: -0.005em;
  color: #fff;
}
.cp-cmp-mat small {
  display: block;
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 10.5px;
  letter-spacing: 0.14em;
  color: rgba(255,255,255,.55);
  text-transform: uppercase;
  margin-top: 6px;
  font-weight: 400;
}
.cp-cmp-first { width: 200px; }
.cp-cmp-first .cp-cmp-mat { color: rgba(255,255,255,.7); }

.cp-cmp-table tbody td {
  padding: 22px 28px;
  border-bottom: 1px solid var(--line);
  border-right: 1px solid var(--line);
  font-size: 15px;
  color: var(--ink-2);
  vertical-align: middle;
  line-height: 1.55;
}
.cp-cmp-table tbody tr:last-child td { border-bottom: 0; }
.cp-cmp-table tbody td:last-child { border-right: 0; }
.cp-cmp-table tbody tr { transition: background .2s ease; }
.cp-cmp-table tbody tr:hover { background: var(--bg); }
.cp-row-label {
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 13.5px;
  color: var(--muted);
  letter-spacing: 0.02em;
  width: 200px;
}
.cp-col-kp { background: rgba(217,183,144,.06); }
.cp-stars {
  letter-spacing: 0.08em;
  color: var(--accent);
  font-size: 15px;
  display: inline-block;
  margin-right: 8px;
  line-height: 1;
}
.cp-stars .off { color: rgba(28,25,22,.18); }
.cp-rating {
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 13px;
  color: var(--muted);
  letter-spacing: 0.04em;
  margin-left: 4px;
}
.cp-rating.best { color: var(--accent-deep); font-weight: 500; }
.cp-num {
  font-family: 'Noto Serif KR', serif;
  font-size: 17px;
  color: var(--ink);
  letter-spacing: -0.005em;
}
.cp-num small {
  font-size: 11.5px;
  color: var(--muted-2);
  margin-left: 2px;
  letter-spacing: 0;
  font-family: 'Pretendard Variable', sans-serif;
}
.cp-plus { color: var(--muted-2); }
.cp-strong {
  color: var(--accent-deep);
  font-weight: 500;
}
.cp-cmp-foot {
  margin-top: 16px;
  font-size: 11.5px;
  color: var(--muted-2);
  letter-spacing: 0.02em;
}

/* ===== Compare Cards (mobile only) ===== */
.cp-cmp-cards { display: none; }
@media (max-width: 820px) {
  .cp-cmp-wrap { display: none; }
  .cp-cmp-cards {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
    background: var(--paper);
    border: 1px solid var(--line);
  }
  .cp-cmp-card {
    display: grid;
    grid-template-columns: 0.85fr 1fr 1fr;
    gap: 0;
    align-items: stretch;
    border-bottom: 1px solid var(--line);
  }
  .cp-cmp-card:last-child { border-bottom: 0; }
  .cp-cmp-card-k {
    display: flex;
    align-items: center;
    padding: 16px 14px;
    font-size: 14px;
    font-weight: 600;
    color: var(--ink);
    line-height: 1.35;
    word-break: keep-all;
    letter-spacing: -0.005em;
  }
  .cp-cmp-card-row {
    display: contents;
  }
  .cp-cmp-card-side {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 14px 12px;
    border-left: 1px solid var(--line);
    background: transparent;
    border-radius: 0;
  }
  .cp-cmp-card-kp {
    background: rgba(217,183,144,.10);
  }
  .cp-cmp-card-side-lbl {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--muted-2);
  }
  .cp-cmp-card-side-val {
    font-size: 13.5px;
    color: var(--ink);
    line-height: 1.55;
    word-break: keep-all;
  }
  /* Mobile-tuned inline display for ratings / nums / strong */
  .cp-cmp-card-side-val .cp-rating { margin-left: 0; display: block; margin-top: 2px; font-size: 11.5px; }
  .cp-cmp-card-side-val .cp-stars { display: block; margin-right: 0; font-size: 14px; }
  .cp-cmp-card-side-val .cp-num { font-size: 15px; }
}

/* ===== Recommend ===== */
.cp-reco-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
@media (max-width: 820px) {
  .cp-reco-grid { grid-template-columns: 1fr; }
}
.cp-reco {
  position: relative;
  padding: 48px 44px;
  border: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-height: 340px;
  border-radius: 2px;
  transition: all .25s ease;
}
.cp-reco:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 36px -20px rgba(28,25,22,.22);
}
@media (max-width: 720px) {
  .cp-reco { padding: 36px 28px; }
}
.cp-reco-kp {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
}
.cp-reco-pu {
  background: var(--bg-2);
  color: var(--ink-2);
}
.cp-reco-head {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.cp-reco-title {
  font-family: 'Noto Serif KR', serif;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1.3;
  margin: 0;
}
.cp-reco-sub {
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  opacity: .65;
  font-weight: 500;
}
.cp-reco-kp .cp-reco-sub { color: rgba(255,255,255,.6); }
.cp-reco-pu .cp-reco-sub { color: var(--muted-2); }
.cp-reco-list {
  list-style: none;
  margin: 8px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.cp-reco-list li {
  font-size: 14.5px;
  line-height: 1.6;
  display: flex;
  gap: 12px;
  align-items: flex-start;
}
.cp-reco-list li::before {
  content: '';
  flex: 0 0 auto;
  width: 14px;
  height: 8px;
  border-left: 1.5px solid currentColor;
  border-bottom: 1.5px solid currentColor;
  transform: rotate(-45deg);
  margin-top: 6px;
  opacity: .9;
}
.cp-reco-kp .cp-reco-list li { color: rgba(255,255,255,.82); }
.cp-reco-kp .cp-reco-list li::before { color: #d9b790; }
.cp-reco-pu .cp-reco-list li::before { color: var(--accent); }

/* ===== CTA Band ===== */
.cp-cta-band {
  background: var(--bg-2);
  border-top: 1px solid var(--line);
  padding: 72px 0;
}
@media (max-width: 720px) {
  .cp-cta-band { padding: 56px 0; }
}
.cp-cta-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}
.cp-cta-text { display: flex; flex-direction: column; gap: 8px; flex: 1 1 380px; }
.cp-cta-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: clamp(26px, 3vw, 38px);
  letter-spacing: -0.015em;
  line-height: 1.35;
  margin: 0;
  word-break: keep-all;
}
.cp-cta-sub {
  font-size: 14px;
  color: var(--muted);
  margin: 0;
}
.cp-cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: flex-end;
}
@media (max-width: 820px) {
  .cp-cta-actions {
    flex-wrap: nowrap;
    justify-content: flex-start;
    gap: 8px;
    width: 100%;
  }
  .cp-cta-actions .cp-btn {
    flex: 1 1 0;
    min-width: 0;
    padding: 14px 12px;
    font-size: 13px;
    white-space: nowrap;
    justify-content: center;
  }
}

/* ===== Buttons ===== */
.cp-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 22px;
  border-radius: 2px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.005em;
  border: 0;
  cursor: pointer;
  text-decoration: none;
  transition: background .25s ease, color .25s ease, border-color .25s ease;
}
.cp-btn-arr { transition: transform .3s ease; }
.cp-btn:hover .cp-btn-arr { transform: translateX(4px); }
.cp-btn-primary {
  background: var(--ink);
  color: var(--paper);
}
.cp-btn-primary:hover { background: var(--accent-deep); }
.cp-btn-ghost {
  background: transparent;
  border: 1px solid var(--line-strong);
  color: var(--ink);
}
.cp-btn-ghost:hover {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
}
`,mv=[{k:"핵심 가치",v:"위생·미관·방수",small:"3대 효과"},{k:"권장 주기",v:"5년+",small:"시멘트 줄눈 기준"},{k:"시공 시간",v:"1일",small:"평형별 상이"},{k:"A/S",v:"2년",small:"무상"}],hv=[{n:"01",title:"위생 관리 — 곰팡이와 세균 차단",body:"타일 사이 줄눈은 습기가 모이기 쉬운 공간입니다. 시멘트 줄눈이 낡으면 균열과 기공이 생겨 곰팡이와 세균이 번식합니다. 정기적인 줄눈시공은 이런 위생 문제를 근본적으로 차단합니다.",k:"위생 지표",v:"곰팡이 0"},{n:"02",title:"미관 개선 — 공간의 첫인상을 바꾸다",body:"낡고 변색된 줄눈은 아무리 깨끗한 타일이어도 공간 전체를 낡아 보이게 만듭니다. 반대로 깔끔한 줄눈 하나만으로도 화장실·주방이 리모델링한 것처럼 새로워집니다.",k:"체감 효과",v:"리모델링 급"},{n:"03",title:"방수 보강 — 구조물 손상 예방",body:"줄눈이 갈라지면 물이 타일 아래로 스며들어 시멘트 바닥과 벽체에 수분이 침투합니다. 장기적으로 곰팡이, 타일 박리, 구조물 부식으로 이어져 훨씬 큰 수리 비용을 만듭니다.",k:"방수 효과",v:"구조 보호"},{n:"04",title:"비용 절감 — 조기 시공이 유리한 이유",body:"줄눈 문제를 방치하면 타일 전체 교체·방수 공사·구조 보수 등 수백만 원대 공사가 필요해집니다. 초기에 줄눈시공만 해도 이런 대규모 수리를 미연에 방지할 수 있습니다.",k:"예상 절감",v:"수백만 원"}],gv=[{k:"PB · 01",title:"곰팡이 대량 번식",body:"검은 곰팡이가 타일 줄눈을 따라 번지며 제거가 점점 어려워집니다."},{k:"PB · 02",title:"물이 벽·바닥 내부로 침투",body:"균열된 줄눈을 통해 물이 내부로 스며들어 구조 손상이 시작됩니다."},{k:"PB · 03",title:"타일 박리 · 탈락",body:"수분 침투로 접착력이 약해지며 타일이 들뜨거나 깨져 나갑니다."},{k:"PB · 04",title:"악취 발생",body:"유기물과 습기가 결합해 욕실 특유의 불쾌한 냄새가 심해집니다."}],xv=[{k:"TM · 01",title:"5년 이상 된 욕실·화장실",body:"시멘트 줄눈의 평균 수명을 넘은 경우 교체 시공을 권장합니다."},{k:"TM · 02",title:"변색·흑화가 눈에 띄는 경우",body:"줄눈이 검게 변했다면 이미 곰팡이가 깊이 침투한 상태일 수 있습니다."},{k:"TM · 03",title:"균열·탈락이 발생한 경우",body:"방치하면 물 침투로 인한 구조 손상으로 이어질 수 있습니다."},{k:"TM · 04",title:"집 매매 · 임대 전후",body:"줄눈 시공만으로도 체감 상태가 크게 달라져 매도·임대에 유리합니다."}];function co({num:s,ko:d,en:o,title:u,lede:f,dark:m}){return n.jsxs("div",{className:`wg-sec-head ${m?"wg-sec-head-dark":""}`,children:[n.jsxs("div",{className:"wg-sec-bar",children:[n.jsx("span",{className:"wg-sec-n",children:s}),n.jsx("span",{className:"wg-sec-rule"}),n.jsxs("span",{className:"wg-sec-lbl",children:[n.jsx("span",{className:"wg-sec-ko",children:d}),n.jsx("span",{className:"wg-sec-en",children:o})]})]}),n.jsxs("div",{className:"wg-sec-body",children:[n.jsx("h2",{className:"wg-sec-title",children:u}),f&&n.jsx("p",{className:"wg-sec-lede",children:f})]})]})}function bv(){const s=_a();k.useEffect(()=>{window.scrollTo(0,0),document.title="줄눈시공 하는 이유 — 디테일라인";const o=document.querySelector('meta[name="description"]'),u=o?.getAttribute("content")??"";return o?.setAttribute("content","줄눈시공이 왜 필요한지, 미루면 어떤 문제가 생기는지, 언제 시공해야 하는지 — 위생·미관·방수·비용 절감 관점에서 4가지 이유로 정리했습니다."),()=>{o&&u&&o.setAttribute("content",u)}},[]);const d=()=>{s("/#calc"),setTimeout(()=>{const o=document.querySelector("#calc");o&&o.scrollIntoView({behavior:"smooth"})},300)};return n.jsxs("div",{className:"wg-page",children:[n.jsx(al,{}),n.jsxs("header",{className:"wg-hero","data-screen-label":"Hero",children:[n.jsx("div",{className:"wg-hero-bg","aria-hidden":"true"}),n.jsxs("div",{className:"wg-container wg-hero-inner",children:[n.jsx("div",{className:"wg-eyebrow wg-eyebrow-light",children:"Grout Knowledge · 05"}),n.jsxs("h1",{className:"wg-hero-title",children:["줄눈시공",n.jsx("em",{children:","}),n.jsx("br",{}),"선택이 아닌 ",n.jsx("em",{children:"필수"}),"인 이유."]}),n.jsxs("p",{className:"wg-hero-lede",children:["위생 · 미관 · 방수 · 비용 절감.",n.jsx("br",{}),"줄눈 하나만 바꿔도 공간의 수명이 크게 달라집니다."]}),n.jsx("ul",{className:"wg-hero-meta",children:mv.map(o=>n.jsxs("li",{children:[n.jsx("span",{className:"wg-meta-k",children:o.k}),n.jsxs("span",{className:"wg-meta-v",children:[o.v," ",n.jsx("small",{children:o.small})]})]},o.k))})]})]}),n.jsx("nav",{className:"wg-crumb","aria-label":"현재 위치",children:n.jsxs("div",{className:"wg-container wg-crumb-inner",children:[n.jsx(yt,{to:"/",className:"wg-crumb-item",children:"홈"}),n.jsx("span",{className:"wg-crumb-sep",children:"/"}),n.jsx("span",{className:"wg-crumb-item",children:"줄눈 정보"}),n.jsx("span",{className:"wg-crumb-sep",children:"/"}),n.jsx("span",{className:"wg-crumb-here",children:"줄눈시공 하는 이유"})]})}),n.jsx("section",{className:"wg-section","data-screen-label":"Intro",children:n.jsx("div",{className:"wg-container",children:n.jsxs("div",{className:"wg-intro-grid",children:[n.jsxs("h2",{className:"wg-intro-title",children:["줄눈시공은",n.jsx("br",{}),"선택이 아니라 ",n.jsx("em",{children:"필수"}),"입니다."]}),n.jsxs("div",{className:"wg-intro-body",children:[n.jsxs("p",{children:["많은 분들이 줄눈을 단순한 타일 사이 채움재로 생각하지만, 실제로는"," ",n.jsx("b",{children:"방수 · 위생 · 구조 보호"}),"를 담당하는 핵심 요소입니다. 줄눈이 낡으면 눈에 보이는 미관 문제를 넘어, 심각한 주거 환경 문제로 이어집니다."]}),n.jsxs("p",{children:["특히 매일 물을 사용하는 욕실·화장실·주방에서 ",n.jsx("b",{children:"줄눈시공"}),"은 가장 효과적인 유지보수 방법 중 하나입니다. 작은 투자로 공간 수명을 크게 연장할 수 있습니다."]})]})]})})}),n.jsx("section",{className:"wg-section wg-bg-paper","data-screen-label":"01 Reasons",children:n.jsxs("div",{className:"wg-container",children:[n.jsx(co,{num:"01",ko:"줄눈시공을 해야 하는 이유",en:"4 Reasons",title:n.jsxs(n.Fragment,{children:["네 가지 이유로,",n.jsx("br",{}),n.jsx("em",{children:"지금"})," 시공해야 합니다."]}),lede:"위생 · 미관 · 방수 · 비용. 줄눈시공이 만들어내는 효과를 한 줄씩 짚어봅니다."}),n.jsx("ul",{className:"wg-reasons",children:hv.map(o=>n.jsxs("li",{className:"wg-r-row",children:[n.jsx("span",{className:"wg-r-n",children:o.n}),n.jsxs("div",{className:"wg-r-text",children:[n.jsx("h3",{className:"wg-r-title",children:o.title}),n.jsx("p",{className:"wg-r-body",children:o.body})]}),n.jsxs("div",{className:"wg-r-spec",children:[n.jsx("span",{className:"wg-r-k",children:o.k}),n.jsx("span",{className:"wg-r-v",children:o.v})]})]},o.n))})]})}),n.jsx("section",{className:"wg-section-dark","data-screen-label":"02 Problems",children:n.jsxs("div",{className:"wg-container",children:[n.jsx(co,{dark:!0,num:"02",ko:"줄눈시공을 미루면 생기는 문제",en:"What Happens",title:n.jsxs(n.Fragment,{children:["작은 균열이,",n.jsx("br",{}),n.jsx("em",{children:"큰 손상"}),"으로 이어집니다."]}),lede:"줄눈 노후를 방치하면 단순한 미관 문제를 넘어 주거 구조 자체에 영향을 줍니다."}),n.jsx("div",{className:"wg-prob-grid",children:gv.map(o=>n.jsxs("article",{className:"wg-prob-card",children:[n.jsx("span",{className:"wg-prob-k",children:o.k}),n.jsx("h3",{className:"wg-prob-title",children:o.title}),n.jsx("p",{className:"wg-prob-body",children:o.body})]},o.k))})]})}),n.jsx("section",{className:"wg-section","data-screen-label":"03 Timing",children:n.jsxs("div",{className:"wg-container",children:[n.jsx(co,{num:"03",ko:"줄눈시공이 필요한 시점",en:"When to Start",title:n.jsxs(n.Fragment,{children:["이런 상황이라면,",n.jsx("br",{}),n.jsx("em",{children:"지금"})," 점검해 보세요."]}),lede:"아래 중 하나라도 해당된다면 줄눈 상태를 한 번 확인해볼 시점입니다."}),n.jsx("div",{className:"wg-timing-grid",children:xv.map(o=>n.jsxs("article",{className:"wg-timing-card",children:[n.jsx("span",{className:"wg-timing-k",children:o.k}),n.jsx("h3",{className:"wg-timing-title",children:o.title}),n.jsx("p",{className:"wg-timing-body",children:o.body})]},o.k))})]})}),n.jsx("section",{className:"wg-cta-band","data-screen-label":"CTA Band",children:n.jsxs("div",{className:"wg-container wg-cta-row",children:[n.jsxs("div",{className:"wg-cta-text",children:[n.jsxs("h3",{className:"wg-cta-title",children:["지금 우리 집 줄눈이 ",n.jsx("em",{children:"괜찮은지"})," 점검받아 보세요."]}),n.jsx("p",{className:"wg-cta-sub",children:"사진 한 장만 보내주시면 현재 상태와 시공 필요 여부를 안내해 드립니다."})]}),n.jsxs("div",{className:"wg-cta-actions",children:[n.jsxs("button",{type:"button",className:"wg-btn wg-btn-primary",onClick:d,children:["무료 견적 받기 ",n.jsx("span",{className:"wg-btn-arr",children:"→"})]}),n.jsx("a",{href:"tel:010-8005-6674",onClick:()=>Ut.phoneClick("info_cta"),className:"wg-btn wg-btn-ghost",children:"전화 상담 010-8005-6674"})]})]})}),n.jsx(ll,{}),n.jsx("style",{children:vv})]})}const vv=`
.wg-page {
  background: var(--bg);
  color: var(--ink);
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
}
.wg-page ::selection { background: var(--accent); color: #fff; }

.wg-container {
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 32px;
}
@media (max-width: 720px) {
  .wg-container { padding: 0 20px; }
}

.wg-section {
  padding: 120px 0;
  border-top: 1px solid var(--line);
}
.wg-section-dark {
  padding: 120px 0;
  background: var(--dark);
  color: var(--on-dark);
}
.wg-bg-paper { background: var(--paper); }
@media (max-width: 720px) {
  .wg-section, .wg-section-dark { padding: 72px 0; }
}

.wg-eyebrow {
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
}
.wg-eyebrow-light { color: #d9b790; }

.wg-page em {
  font-style: normal;
  color: var(--accent);
}
.wg-hero em, .wg-section-dark em { color: #e3c5a3; }

/* ===== Hero ===== */
.wg-hero {
  position: relative;
  padding: 168px 0 84px;
  overflow: hidden;
  isolation: isolate;
  color-scheme: dark;
}
@media (max-width: 720px) {
  .wg-hero { padding: 120px 0 64px; }
}
.wg-hero-bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    repeating-linear-gradient(135deg, rgba(255,255,255,.05) 0 1px, transparent 1px 24px),
    radial-gradient(120% 80% at 70% 20%, rgba(138,106,76,.25), transparent 60%),
    linear-gradient(180deg, #251d14 0%, #18130e 100%);
}
.wg-hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(120% 100% at 50% 0%, rgba(0,0,0,.25), rgba(0,0,0,.65) 80%);
  pointer-events: none;
}
.wg-hero-inner { position: relative; z-index: 1; }
.wg-hero-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: clamp(36px, 5vw, 68px);
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: #fff;
  margin: 14px 0 22px;
  max-width: 24ch;
  word-break: keep-all;
}
.wg-hero-lede {
  font-size: 15.5px;
  line-height: 1.75;
  color: rgba(255,255,255,.78);
  max-width: 56ch;
  margin: 0;
}
.wg-hero-meta {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
  padding: 0;
  margin: 48px 0 0;
  border-top: 1px solid rgba(255,255,255,.16);
}
.wg-hero-meta li {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 22px 22px 22px 0;
  border-right: 1px solid rgba(255,255,255,.16);
}
.wg-hero-meta li:last-child { border-right: none; }
.wg-hero-meta li:not(:first-child) { padding-left: 22px; }
.wg-meta-k {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,.55);
}
.wg-meta-v {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: 17px;
  color: #fff;
  letter-spacing: -0.005em;
}
.wg-meta-v small {
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 11px;
  font-weight: 500;
  color: rgba(255,255,255,.55);
  margin-left: 6px;
  letter-spacing: 0;
}
@media (max-width: 720px) {
  .wg-hero-meta { grid-template-columns: repeat(2, 1fr); }
  .wg-hero-meta li:nth-child(2) { border-right: none; }
  .wg-hero-meta li:nth-child(3) { padding-left: 0; }
  .wg-hero-meta li:nth-child(3),
  .wg-hero-meta li:nth-child(4) {
    border-top: 1px solid rgba(255,255,255,.16);
  }
}

/* ===== Breadcrumb ===== */
.wg-crumb {
  background: var(--paper);
  border-bottom: 1px solid var(--line);
}
.wg-crumb-inner {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 32px;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: var(--muted-2);
}
@media (max-width: 720px) {
  .wg-crumb-inner { padding: 14px 20px; }
}
.wg-crumb-item {
  color: var(--muted-2);
  text-decoration: none;
  transition: color .2s ease;
}
.wg-crumb-item:hover { color: var(--accent); }
.wg-crumb-sep { opacity: .4; }
.wg-crumb-here { color: var(--ink); }

/* ===== Section Head ===== */
.wg-sec-head { margin-bottom: 56px; }
@media (max-width: 820px) {
  .wg-sec-head { margin-bottom: 36px; }
}
.wg-sec-bar {
  display: flex;
  align-items: center;
  gap: 18px;
  padding-bottom: 22px;
  margin-bottom: 32px;
  border-bottom: 1px solid var(--line);
}
.wg-sec-head-dark .wg-sec-bar { border-bottom-color: rgba(255,255,255,.14); }
.wg-sec-n {
  font-family: 'Noto Serif KR', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 1;
  color: var(--accent);
  font-variant-numeric: lining-nums;
}
.wg-sec-head-dark .wg-sec-n { color: #d9b790; }
.wg-sec-rule {
  flex: 0 0 56px;
  height: 1px;
  background: var(--accent);
  opacity: .6;
}
.wg-sec-head-dark .wg-sec-rule { background: #d9b790; opacity: .7; }
.wg-sec-lbl {
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
.wg-sec-ko { color: var(--ink-2); }
.wg-sec-head-dark .wg-sec-ko { color: #fff; }
.wg-sec-en { color: var(--muted-2); margin-left: 10px; }
.wg-sec-head-dark .wg-sec-en { color: rgba(255,255,255,.5); }
.wg-sec-body {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 64px;
  align-items: end;
}
@media (max-width: 820px) {
  .wg-sec-body { grid-template-columns: 1fr; gap: 16px; align-items: start; }
}
.wg-sec-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: clamp(30px, 3.6vw, 48px);
  line-height: 1.18;
  letter-spacing: -0.02em;
  margin: 0;
  word-break: keep-all;
}
.wg-sec-head-dark .wg-sec-title { color: var(--on-dark); }
.wg-sec-lede {
  font-size: 16px;
  line-height: 1.75;
  color: var(--muted);
  max-width: 48ch;
  margin: 0;
}
.wg-sec-head-dark .wg-sec-lede { color: var(--dark-muted); }

/* ===== Intro ===== */
.wg-intro-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 72px;
  align-items: start;
}
@media (max-width: 900px) {
  .wg-intro-grid { grid-template-columns: 1fr; gap: 24px; }
}
.wg-intro-title {
  font-family: 'Noto Serif KR', serif;
  font-size: clamp(28px, 3.2vw, 40px);
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.25;
  margin: 0;
  word-break: keep-all;
}
.wg-intro-body {
  font-size: 15.5px;
  color: var(--muted);
  line-height: 1.85;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.wg-intro-body p { margin: 0; }
.wg-intro-body b {
  font-weight: 500;
  color: var(--ink-2);
  border-bottom: 1px solid var(--accent);
  padding-bottom: 1px;
}

/* ===== Reasons (editorial row list) ===== */
.wg-reasons {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--line);
}
.wg-r-row {
  display: grid;
  grid-template-columns: 84px 1fr 200px;
  gap: 40px;
  align-items: center;
  padding: 36px 8px;
  border-bottom: 1px solid var(--line);
  transition: all .25s ease;
}
.wg-r-row:hover {
  background: var(--bg);
  padding-left: 20px;
}
.wg-r-n {
  font-family: 'Noto Serif KR', serif;
  font-style: italic;
  font-size: 32px;
  color: var(--accent);
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 1;
}
.wg-r-text { display: flex; flex-direction: column; gap: 8px; min-width: 0; }
.wg-r-title {
  font-family: 'Noto Serif KR', serif;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--ink);
  margin: 0;
  line-height: 1.35;
}
.wg-r-body {
  font-size: 14.5px;
  line-height: 1.75;
  color: var(--muted);
  margin: 0;
  word-break: keep-all;
}
.wg-r-spec {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  border-left: 1px solid var(--line);
  padding-left: 24px;
}
.wg-r-k {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.wg-r-v {
  font-family: 'Noto Serif KR', serif;
  font-size: 17px;
  font-weight: 500;
  color: var(--accent-deep);
  letter-spacing: -0.005em;
}
@media (max-width: 820px) {
  .wg-r-row {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 28px 4px;
  }
  .wg-r-row:hover { padding-left: 18px; }
  .wg-r-n { font-size: 26px; }
  .wg-r-spec {
    flex-direction: row;
    align-items: baseline;
    gap: 10px;
    border-left: 0;
    padding-left: 0;
    padding-top: 8px;
    border-top: 1px dashed var(--line);
  }
}

/* ===== Problems (dark section, 4 cards) ===== */
.wg-prob-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: rgba(255,255,255,.14);
  border: 1px solid rgba(255,255,255,.14);
}
@media (max-width: 900px) {
  .wg-prob-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .wg-prob-grid { grid-template-columns: 1fr; }
}
.wg-prob-card {
  background: var(--dark);
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 200px;
}
.wg-prob-k {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #d9b790;
}
.wg-prob-title {
  font-family: 'Noto Serif KR', serif;
  font-size: 19px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #fff;
  margin: 0;
  line-height: 1.35;
}
.wg-prob-body {
  font-size: 13.5px;
  line-height: 1.7;
  color: rgba(255,255,255,.65);
  margin: 0;
  word-break: keep-all;
}

/* ===== Timing ===== */
.wg-timing-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}
@media (max-width: 720px) {
  .wg-timing-grid { grid-template-columns: 1fr; }
}
.wg-timing-card {
  background: var(--paper);
  border: 1px solid var(--line);
  padding: 28px 28px 26px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all .25s ease;
}
.wg-timing-card:hover {
  border-color: var(--line-strong);
  transform: translateY(-2px);
}
.wg-timing-k {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
}
.wg-timing-title {
  font-family: 'Noto Serif KR', serif;
  font-size: 19px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--ink);
  margin: 0;
  line-height: 1.35;
}
.wg-timing-body {
  font-size: 14px;
  line-height: 1.75;
  color: var(--muted);
  margin: 0;
  word-break: keep-all;
}

/* ===== CTA Band ===== */
.wg-cta-band {
  background: var(--bg-2);
  border-top: 1px solid var(--line);
  padding: 72px 0;
}
@media (max-width: 720px) {
  .wg-cta-band { padding: 56px 0; }
}
.wg-cta-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}
.wg-cta-text { display: flex; flex-direction: column; gap: 8px; flex: 1 1 380px; }
.wg-cta-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: clamp(26px, 3vw, 38px);
  letter-spacing: -0.015em;
  line-height: 1.35;
  margin: 0;
  word-break: keep-all;
}
.wg-cta-sub {
  font-size: 14px;
  color: var(--muted);
  margin: 0;
}
.wg-cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: flex-end;
}
@media (max-width: 820px) {
  .wg-cta-actions {
    flex-wrap: nowrap;
    justify-content: flex-start;
    gap: 8px;
    width: 100%;
  }
  .wg-cta-actions .wg-btn {
    flex: 1 1 0;
    min-width: 0;
    padding: 14px 12px;
    font-size: 13px;
    white-space: nowrap;
    justify-content: center;
  }
}

/* ===== Buttons ===== */
.wg-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 22px;
  border-radius: 2px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.005em;
  border: 0;
  cursor: pointer;
  text-decoration: none;
  transition: background .25s ease, color .25s ease, border-color .25s ease;
}
.wg-btn-arr { transition: transform .3s ease; }
.wg-btn:hover .wg-btn-arr { transform: translateX(4px); }
.wg-btn-primary {
  background: var(--ink);
  color: var(--paper);
}
.wg-btn-primary:hover { background: var(--accent-deep); }
.wg-btn-ghost {
  background: transparent;
  border: 1px solid var(--line-strong);
  color: var(--ink);
}
.wg-btn-ghost:hover {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
}
`,yv=[{title:"1. 개인정보의 처리 목적",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:'디테일라인(이하 "회사")은 다음의 목적을 위하여 개인정보를 처리하며, 다음의 목적 이외의 용도로는 이용하지 않습니다.'}),n.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[n.jsx("li",{children:"견적 상담 및 방문 일정 조율"}),n.jsx("li",{children:"시공 서비스 안내, 견적 회신, 후속 응대"}),n.jsx("li",{children:"본인 확인 및 부정 이용 방지"})]})]})},{title:"2. 수집하는 개인정보 항목",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"회사는 무료 견적 상담 신청 시 다음의 개인정보를 수집합니다."}),n.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[n.jsxs("li",{children:[n.jsx("strong",{children:"필수 항목"}),": 이름, 연락처(휴대전화), 시공 위치(주소), 희망 시공 일정, 시공 공간(현관/화장실/베란다 등)"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"선택 항목"}),": 이메일, 상세 시공 내역(요청 사항)"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"자동 수집"}),": 접속 일시(상담 신청 시각)"]})]})]})},{title:"3. 개인정보의 보유 및 이용 기간",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"수집된 개인정보는 상담 완료 후 즉시 폐기하는 것을 원칙으로 합니다."}),n.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[n.jsx("li",{children:"상담 완료(견적 회신 또는 거절 의사 확인) 후 지체 없이 파기"}),n.jsx("li",{children:"다만, 시공 계약이 체결된 경우에는 「전자상거래 등에서의 소비자보호에 관한 법률」 등 관계 법령에 따라 거래 기록을 5년간 보관할 수 있습니다."})]})]})},{title:"4. 개인정보의 제3자 제공 및 처리 위탁",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"회사는 정보주체의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 견적 신청서 접수 처리를 위해 다음의 클라우드 서비스를 이용합니다."}),n.jsx("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:n.jsxs("li",{children:[n.jsx("strong",{children:"Google LLC (Google Workspace · Apps Script)"})," — 견적 신청 데이터 저장 및 처리. 데이터 처리 위치: 미국"]})}),n.jsx("p",{className:"mt-3 text-[var(--muted)] text-sm",children:"위 위탁업체는 Google이 제공하는 표준 데이터 보호 약관에 따라 운영되며, 회사는 위탁 처리 과정을 정기적으로 점검합니다."})]})},{title:"5. 개인정보의 파기 절차 및 방법",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"회사는 보유 기간이 경과하거나 처리 목적이 달성된 개인정보를 다음의 절차와 방법에 따라 지체 없이 파기합니다."}),n.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[n.jsxs("li",{children:[n.jsx("strong",{children:"파기 절차"}),": 상담 완료 시점에 자동/수동으로 식별, 즉시 파기 처리"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"전자적 파일"}),": 복원이 불가능한 방법으로 영구 삭제"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"출력물"}),": 분쇄 또는 소각"]})]})]})},{title:"6. 정보주체의 권리·의무 및 행사 방법",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"정보주체는 회사에 대해 언제든지 다음의 권리를 행사할 수 있습니다."}),n.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[n.jsx("li",{children:"개인정보 열람 요구"}),n.jsx("li",{children:"오류 등이 있을 경우 정정 요구"}),n.jsx("li",{children:"삭제 요구"}),n.jsx("li",{children:"처리 정지 요구"})]}),n.jsx("p",{className:"mt-3",children:"위 권리 행사는 아래 연락처를 통해 요청하실 수 있으며, 회사는 지체 없이 조치합니다."})]})},{title:"7. 개인정보의 안전성 확보 조치",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"회사는 개인정보 보호를 위해 다음의 조치를 취하고 있습니다."}),n.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[n.jsx("li",{children:"관리적 조치: 개인정보 취급자 최소화, 정기 점검"}),n.jsx("li",{children:"기술적 조치: 전송 구간 HTTPS 암호화, 접근 권한 통제"}),n.jsx("li",{children:"물리적 조치: 자료 보관 장소 출입 통제"})]})]})},{title:"8. 개인정보 보호 책임자",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만 처리 및 피해 구제 등을 위하여 아래와 같이 개인정보 보호 책임자를 지정하고 있습니다."}),n.jsxs("div",{className:"mt-3 p-4 bg-[var(--bg)] rounded-sm text-sm space-y-1",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"상호"}),": 디테일라인"]}),n.jsxs("p",{children:[n.jsx("strong",{children:"사업자등록번호"}),": 609-33-19473"]}),n.jsxs("p",{children:[n.jsx("strong",{children:"주소"}),": 서울 서초구 본마을4길 11 1층 104호"]}),n.jsxs("p",{children:[n.jsx("strong",{children:"연락처"}),": 010-8005-6674"]})]})]})},{title:"9. 권익 침해 구제 방법",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"개인정보 침해로 인한 구제가 필요한 경우 아래 기관에 문의하실 수 있습니다."}),n.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[n.jsx("li",{children:"개인정보분쟁조정위원회: 1833-6972 (privacy.go.kr)"}),n.jsx("li",{children:"개인정보침해신고센터: 118 (privacy.kisa.or.kr)"}),n.jsx("li",{children:"대검찰청 사이버수사과: 1301 (spo.go.kr)"}),n.jsx("li",{children:"경찰청 사이버수사국: 182 (ecrm.cyber.go.kr)"})]})]})},{title:"10. 개인정보 처리방침의 변경",body:n.jsx(n.Fragment,{children:n.jsx("p",{children:"이 개인정보 처리방침은 2026년 4월 29일부터 적용됩니다. 법령·정책 또는 보안 기술의 변경에 따라 내용이 추가, 삭제 및 수정될 경우 시행 7일 전부터 본 페이지를 통해 공지합니다."})})}];function jv(){return k.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[]),n.jsxs("div",{className:"min-h-screen bg-[var(--paper)]",children:[n.jsx(al,{}),n.jsx("main",{className:"pt-28 pb-20 px-6 md:px-12 lg:px-20",children:n.jsxs("div",{className:"max-w-3xl mx-auto",children:[n.jsxs("div",{className:"mb-10",children:[n.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Privacy Policy"}),n.jsx("h1",{className:"text-4xl md:text-5xl font-black text-[var(--ink)] mt-2",children:"개인정보 처리방침"}),n.jsx("p",{className:"text-[var(--muted)] mt-3 text-sm",children:"시행일: 2026년 4월 29일"})]}),n.jsx("p",{className:"text-[var(--muted)] leading-relaxed mb-12",children:'디테일라인(이하 "회사")은 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립·공개합니다.'}),n.jsx("div",{className:"space-y-10",children:yv.map(s=>n.jsxs("section",{children:[n.jsx("h2",{className:"text-xl md:text-2xl font-bold text-[var(--ink)] mb-3",children:s.title}),n.jsx("div",{className:"text-[var(--muted)] leading-relaxed text-sm md:text-base",children:s.body})]},s.title))}),n.jsx("div",{className:"mt-16 pt-8 border-t border-[var(--line)] text-center",children:n.jsxs(yt,{to:"/",className:"inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--ink)] transition-colors",children:[n.jsx("i",{className:"ri-arrow-left-line"}),"홈으로 돌아가기"]})})]})}),n.jsx(ll,{})]})}const kv=[{path:"/",element:n.jsx(Db,{})},{path:"/privacy",element:n.jsx(jv,{})},{path:"/info/kerafoxy",element:n.jsx(Kb,{})},{path:"/info/kerafoxy-price",element:n.jsx(ev,{})},{path:"/info/kerafoxy-product",element:n.jsx(ov,{})},{path:"/info/comparison",element:n.jsx(pv,{})},{path:"/info/why-grout",element:n.jsx(bv,{})},{path:"*",element:n.jsx(R0,{})}];let jm;new Promise(s=>{jm=s});function wv(){const s=Bx(kv),d=_a();return k.useEffect(()=>{window.REACT_APP_NAVIGATE=d,jm(window.REACT_APP_NAVIGATE)}),s}function Nv(){return n.jsx(y0,{basename:"/",children:n.jsx(wv,{})})}ex.createRoot(document.getElementById("root")).render(n.jsx(k.StrictMode,{children:n.jsx(Nv,{})}));
