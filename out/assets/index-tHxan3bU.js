(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))d(f);new MutationObserver(f=>{for(const m of f)if(m.type==="childList")for(const b of m.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&d(b)}).observe(document,{childList:!0,subtree:!0});function o(f){const m={};return f.integrity&&(m.integrity=f.integrity),f.referrerPolicy&&(m.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?m.credentials="include":f.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function d(f){if(f.ep)return;f.ep=!0;const m=o(f);fetch(f.href,m)}})();var eo={exports:{}},Yn={};var Af;function Fx(){if(Af)return Yn;Af=1;var s=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function o(d,f,m){var b=null;if(m!==void 0&&(b=""+m),f.key!==void 0&&(b=""+f.key),"key"in f){m={};for(var y in f)y!=="key"&&(m[y]=f[y])}else m=f;return f=m.ref,{$$typeof:s,type:d,key:b,ref:f!==void 0?f:null,props:m}}return Yn.Fragment=u,Yn.jsx=o,Yn.jsxs=o,Yn}var Tf;function $x(){return Tf||(Tf=1,eo.exports=Fx()),eo.exports}var n=$x(),to={exports:{}},ce={};var Rf;function Ix(){if(Rf)return ce;Rf=1;var s=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),b=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),B=Symbol.iterator;function Z(v){return v===null||typeof v!="object"?null:(v=B&&v[B]||v["@@iterator"],typeof v=="function"?v:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,L={};function H(v,O,Q){this.props=v,this.context=O,this.refs=L,this.updater=Q||S}H.prototype.isReactComponent={},H.prototype.setState=function(v,O){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,O,"setState")},H.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function X(){}X.prototype=H.prototype;function Y(v,O,Q){this.props=v,this.context=O,this.refs=L,this.updater=Q||S}var K=Y.prototype=new X;K.constructor=Y,q(K,H.prototype),K.isPureReactComponent=!0;var ne=Array.isArray;function F(){}var P={H:null,A:null,T:null,S:null},je=Object.prototype.hasOwnProperty;function U(v,O,Q){var J=Q.ref;return{$$typeof:s,type:v,key:O,ref:J!==void 0?J:null,props:Q}}function le(v,O){return U(v.type,O,v.props)}function re(v){return typeof v=="object"&&v!==null&&v.$$typeof===s}function $(v){var O={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(Q){return O[Q]})}var ie=/\/+/g;function Oe(v,O){return typeof v=="object"&&v!==null&&v.key!=null?$(""+v.key):O.toString(36)}function ke(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(F,F):(v.status="pending",v.then(function(O){v.status==="pending"&&(v.status="fulfilled",v.value=O)},function(O){v.status==="pending"&&(v.status="rejected",v.reason=O)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function R(v,O,Q,J,se){var ue=typeof v;(ue==="undefined"||ue==="boolean")&&(v=null);var be=!1;if(v===null)be=!0;else switch(ue){case"bigint":case"string":case"number":be=!0;break;case"object":switch(v.$$typeof){case s:case u:be=!0;break;case T:return be=v._init,R(be(v._payload),O,Q,J,se)}}if(be)return se=se(v),be=J===""?"."+Oe(v,0):J,ne(se)?(Q="",be!=null&&(Q=be.replace(ie,"$&/")+"/"),R(se,O,Q,"",function(Kl){return Kl})):se!=null&&(re(se)&&(se=le(se,Q+(se.key==null||v&&v.key===se.key?"":(""+se.key).replace(ie,"$&/")+"/")+be)),O.push(se)),1;be=0;var tt=J===""?".":J+":";if(ne(v))for(var Ue=0;Ue<v.length;Ue++)J=v[Ue],ue=tt+Oe(J,Ue),be+=R(J,O,Q,ue,se);else if(Ue=Z(v),typeof Ue=="function")for(v=Ue.call(v),Ue=0;!(J=v.next()).done;)J=J.value,ue=tt+Oe(J,Ue++),be+=R(J,O,Q,ue,se);else if(ue==="object"){if(typeof v.then=="function")return R(ke(v),O,Q,J,se);throw O=String(v),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return be}function G(v,O,Q){if(v==null)return v;var J=[],se=0;return R(v,J,"","",function(ue){return O.call(Q,ue,se++)}),J}function ee(v){if(v._status===-1){var O=v._result;O=O(),O.then(function(Q){(v._status===0||v._status===-1)&&(v._status=1,v._result=Q)},function(Q){(v._status===0||v._status===-1)&&(v._status=2,v._result=Q)}),v._status===-1&&(v._status=0,v._result=O)}if(v._status===1)return v._result.default;throw v._result}var ge=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)},V={map:G,forEach:function(v,O,Q){G(v,function(){O.apply(this,arguments)},Q)},count:function(v){var O=0;return G(v,function(){O++}),O},toArray:function(v){return G(v,function(O){return O})||[]},only:function(v){if(!re(v))throw Error("React.Children.only expected to receive a single React element child.");return v}};return ce.Activity=w,ce.Children=V,ce.Component=H,ce.Fragment=o,ce.Profiler=f,ce.PureComponent=Y,ce.StrictMode=d,ce.Suspense=x,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ce.__COMPILER_RUNTIME={__proto__:null,c:function(v){return P.H.useMemoCache(v)}},ce.cache=function(v){return function(){return v.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(v,O,Q){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var J=q({},v.props),se=v.key;if(O!=null)for(ue in O.key!==void 0&&(se=""+O.key),O)!je.call(O,ue)||ue==="key"||ue==="__self"||ue==="__source"||ue==="ref"&&O.ref===void 0||(J[ue]=O[ue]);var ue=arguments.length-2;if(ue===1)J.children=Q;else if(1<ue){for(var be=Array(ue),tt=0;tt<ue;tt++)be[tt]=arguments[tt+2];J.children=be}return U(v.type,se,J)},ce.createContext=function(v){return v={$$typeof:b,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:m,_context:v},v},ce.createElement=function(v,O,Q){var J,se={},ue=null;if(O!=null)for(J in O.key!==void 0&&(ue=""+O.key),O)je.call(O,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(se[J]=O[J]);var be=arguments.length-2;if(be===1)se.children=Q;else if(1<be){for(var tt=Array(be),Ue=0;Ue<be;Ue++)tt[Ue]=arguments[Ue+2];se.children=tt}if(v&&v.defaultProps)for(J in be=v.defaultProps,be)se[J]===void 0&&(se[J]=be[J]);return U(v,ue,se)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(v){return{$$typeof:y,render:v}},ce.isValidElement=re,ce.lazy=function(v){return{$$typeof:T,_payload:{_status:-1,_result:v},_init:ee}},ce.memo=function(v,O){return{$$typeof:h,type:v,compare:O===void 0?null:O}},ce.startTransition=function(v){var O=P.T,Q={};P.T=Q;try{var J=v(),se=P.S;se!==null&&se(Q,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(F,ge)}catch(ue){ge(ue)}finally{O!==null&&Q.types!==null&&(O.types=Q.types),P.T=O}},ce.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ce.use=function(v){return P.H.use(v)},ce.useActionState=function(v,O,Q){return P.H.useActionState(v,O,Q)},ce.useCallback=function(v,O){return P.H.useCallback(v,O)},ce.useContext=function(v){return P.H.useContext(v)},ce.useDebugValue=function(){},ce.useDeferredValue=function(v,O){return P.H.useDeferredValue(v,O)},ce.useEffect=function(v,O){return P.H.useEffect(v,O)},ce.useEffectEvent=function(v){return P.H.useEffectEvent(v)},ce.useId=function(){return P.H.useId()},ce.useImperativeHandle=function(v,O,Q){return P.H.useImperativeHandle(v,O,Q)},ce.useInsertionEffect=function(v,O){return P.H.useInsertionEffect(v,O)},ce.useLayoutEffect=function(v,O){return P.H.useLayoutEffect(v,O)},ce.useMemo=function(v,O){return P.H.useMemo(v,O)},ce.useOptimistic=function(v,O){return P.H.useOptimistic(v,O)},ce.useReducer=function(v,O,Q){return P.H.useReducer(v,O,Q)},ce.useRef=function(v){return P.H.useRef(v)},ce.useState=function(v){return P.H.useState(v)},ce.useSyncExternalStore=function(v,O,Q){return P.H.useSyncExternalStore(v,O,Q)},ce.useTransition=function(){return P.H.useTransition()},ce.version="19.2.4",ce}var Cf;function vo(){return Cf||(Cf=1,to.exports=Ix()),to.exports}var k=vo(),ao={exports:{}},qn={},lo={exports:{}},no={};var Of;function Px(){return Of||(Of=1,(function(s){function u(R,G){var ee=R.length;R.push(G);e:for(;0<ee;){var ge=ee-1>>>1,V=R[ge];if(0<f(V,G))R[ge]=G,R[ee]=V,ee=ge;else break e}}function o(R){return R.length===0?null:R[0]}function d(R){if(R.length===0)return null;var G=R[0],ee=R.pop();if(ee!==G){R[0]=ee;e:for(var ge=0,V=R.length,v=V>>>1;ge<v;){var O=2*(ge+1)-1,Q=R[O],J=O+1,se=R[J];if(0>f(Q,ee))J<V&&0>f(se,Q)?(R[ge]=se,R[J]=ee,ge=J):(R[ge]=Q,R[O]=ee,ge=O);else if(J<V&&0>f(se,ee))R[ge]=se,R[J]=ee,ge=J;else break e}}return G}function f(R,G){var ee=R.sortIndex-G.sortIndex;return ee!==0?ee:R.id-G.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;s.unstable_now=function(){return m.now()}}else{var b=Date,y=b.now();s.unstable_now=function(){return b.now()-y}}var x=[],h=[],T=1,w=null,B=3,Z=!1,S=!1,q=!1,L=!1,H=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function K(R){for(var G=o(h);G!==null;){if(G.callback===null)d(h);else if(G.startTime<=R)d(h),G.sortIndex=G.expirationTime,u(x,G);else break;G=o(h)}}function ne(R){if(q=!1,K(R),!S)if(o(x)!==null)S=!0,F||(F=!0,$());else{var G=o(h);G!==null&&ke(ne,G.startTime-R)}}var F=!1,P=-1,je=5,U=-1;function le(){return L?!0:!(s.unstable_now()-U<je)}function re(){if(L=!1,F){var R=s.unstable_now();U=R;var G=!0;try{e:{S=!1,q&&(q=!1,X(P),P=-1),Z=!0;var ee=B;try{t:{for(K(R),w=o(x);w!==null&&!(w.expirationTime>R&&le());){var ge=w.callback;if(typeof ge=="function"){w.callback=null,B=w.priorityLevel;var V=ge(w.expirationTime<=R);if(R=s.unstable_now(),typeof V=="function"){w.callback=V,K(R),G=!0;break t}w===o(x)&&d(x),K(R)}else d(x);w=o(x)}if(w!==null)G=!0;else{var v=o(h);v!==null&&ke(ne,v.startTime-R),G=!1}}break e}finally{w=null,B=ee,Z=!1}G=void 0}}finally{G?$():F=!1}}}var $;if(typeof Y=="function")$=function(){Y(re)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,Oe=ie.port2;ie.port1.onmessage=re,$=function(){Oe.postMessage(null)}}else $=function(){H(re,0)};function ke(R,G){P=H(function(){R(s.unstable_now())},G)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(R){R.callback=null},s.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):je=0<R?Math.floor(1e3/R):5},s.unstable_getCurrentPriorityLevel=function(){return B},s.unstable_next=function(R){switch(B){case 1:case 2:case 3:var G=3;break;default:G=B}var ee=B;B=G;try{return R()}finally{B=ee}},s.unstable_requestPaint=function(){L=!0},s.unstable_runWithPriority=function(R,G){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var ee=B;B=R;try{return G()}finally{B=ee}},s.unstable_scheduleCallback=function(R,G,ee){var ge=s.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ge+ee:ge):ee=ge,R){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=ee+V,R={id:T++,callback:G,priorityLevel:R,startTime:ee,expirationTime:V,sortIndex:-1},ee>ge?(R.sortIndex=ee,u(h,R),o(x)===null&&R===o(h)&&(q?(X(P),P=-1):q=!0,ke(ne,ee-ge))):(R.sortIndex=V,u(x,R),S||Z||(S=!0,F||(F=!0,$()))),R},s.unstable_shouldYield=le,s.unstable_wrapCallback=function(R){var G=B;return function(){var ee=B;B=G;try{return R.apply(this,arguments)}finally{B=ee}}}})(no)),no}var Mf;function eg(){return Mf||(Mf=1,lo.exports=Px()),lo.exports}var io={exports:{}},et={};var Df;function tg(){if(Df)return et;Df=1;var s=vo();function u(x){var h="https://react.dev/errors/"+x;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)h+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+x+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var d={d:{f:o,r:function(){throw Error(u(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},f=Symbol.for("react.portal");function m(x,h,T){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:w==null?null:""+w,children:x,containerInfo:h,implementation:T}}var b=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(x,h){if(x==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,et.createPortal=function(x,h){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(u(299));return m(x,h,null,T)},et.flushSync=function(x){var h=b.T,T=d.p;try{if(b.T=null,d.p=2,x)return x()}finally{b.T=h,d.p=T,d.d.f()}},et.preconnect=function(x,h){typeof x=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,d.d.C(x,h))},et.prefetchDNS=function(x){typeof x=="string"&&d.d.D(x)},et.preinit=function(x,h){if(typeof x=="string"&&h&&typeof h.as=="string"){var T=h.as,w=y(T,h.crossOrigin),B=typeof h.integrity=="string"?h.integrity:void 0,Z=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;T==="style"?d.d.S(x,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:w,integrity:B,fetchPriority:Z}):T==="script"&&d.d.X(x,{crossOrigin:w,integrity:B,fetchPriority:Z,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},et.preinitModule=function(x,h){if(typeof x=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var T=y(h.as,h.crossOrigin);d.d.M(x,{crossOrigin:T,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&d.d.M(x)},et.preload=function(x,h){if(typeof x=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var T=h.as,w=y(T,h.crossOrigin);d.d.L(x,T,{crossOrigin:w,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},et.preloadModule=function(x,h){if(typeof x=="string")if(h){var T=y(h.as,h.crossOrigin);d.d.m(x,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:T,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else d.d.m(x)},et.requestFormReset=function(x){d.d.r(x)},et.unstable_batchedUpdates=function(x,h){return x(h)},et.useFormState=function(x,h,T){return b.H.useFormState(x,h,T)},et.useFormStatus=function(){return b.H.useHostTransitionStatus()},et.version="19.2.4",et}var _f;function ag(){if(_f)return io.exports;_f=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(u){console.error(u)}}return s(),io.exports=tg(),io.exports}var Uf;function lg(){if(Uf)return qn;Uf=1;var s=eg(),u=vo(),o=ag();function d(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(m(e)!==e)throw Error(d(188))}function h(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(d(188));return t!==e?null:e}for(var a=e,l=t;;){var i=a.return;if(i===null)break;var r=i.alternate;if(r===null){if(l=i.return,l!==null){a=l;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===a)return x(i),e;if(r===l)return x(i),t;r=r.sibling}throw Error(d(188))}if(a.return!==l.return)a=i,l=r;else{for(var c=!1,p=i.child;p;){if(p===a){c=!0,a=i,l=r;break}if(p===l){c=!0,l=i,a=r;break}p=p.sibling}if(!c){for(p=r.child;p;){if(p===a){c=!0,a=r,l=i;break}if(p===l){c=!0,l=r,a=i;break}p=p.sibling}if(!c)throw Error(d(189))}}if(a.alternate!==l)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?e:t}function T(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=T(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,B=Symbol.for("react.element"),Z=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),je=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),le=Symbol.for("react.memo_cache_sentinel"),re=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=re&&e[re]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Symbol.for("react.client.reference");function Oe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case H:return"Profiler";case L:return"StrictMode";case ne:return"Suspense";case F:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case Y:return e.displayName||"Context";case X:return(e._context.displayName||"Context")+".Consumer";case K:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return t=e.displayName||null,t!==null?t:Oe(e.type)||"Memo";case je:t=e._payload,e=e._init;try{return Oe(e(t))}catch{}}return null}var ke=Array.isArray,R=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},ge=[],V=-1;function v(e){return{current:e}}function O(e){0>V||(e.current=ge[V],ge[V]=null,V--)}function Q(e,t){V++,ge[V]=e.current,e.current=t}var J=v(null),se=v(null),ue=v(null),be=v(null);function tt(e,t){switch(Q(ue,t),Q(se,e),Q(J,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Fp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Fp(t),e=$p(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}O(J),Q(J,e)}function Ue(){O(J),O(se),O(ue)}function Kl(e){e.memoizedState!==null&&Q(be,e);var t=J.current,a=$p(t,e.type);t!==a&&(Q(se,e),Q(J,a))}function Pn(e){se.current===e&&(O(J),O(se)),be.current===e&&(O(be),Un._currentValue=ee)}var Ur,zo;function Ua(e){if(Ur===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Ur=t&&t[1]||"",zo=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ur+e+zo}var Br=!1;function Hr(e,t){if(!e||Br)return"";Br=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(C){var A=C}Reflect.construct(e,[],_)}else{try{_.call()}catch(C){A=C}e.call(_.prototype)}}else{try{throw Error()}catch(C){A=C}(_=e())&&typeof _.catch=="function"&&_.catch(function(){})}}catch(C){if(C&&A&&typeof C.stack=="string")return[C.stack,A.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=l.DetermineComponentFrameRoot(),c=r[0],p=r[1];if(c&&p){var g=c.split(`
`),E=p.split(`
`);for(i=l=0;l<g.length&&!g[l].includes("DetermineComponentFrameRoot");)l++;for(;i<E.length&&!E[i].includes("DetermineComponentFrameRoot");)i++;if(l===g.length||i===E.length)for(l=g.length-1,i=E.length-1;1<=l&&0<=i&&g[l]!==E[i];)i--;for(;1<=l&&0<=i;l--,i--)if(g[l]!==E[i]){if(l!==1||i!==1)do if(l--,i--,0>i||g[l]!==E[i]){var M=`
`+g[l].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=l&&0<=i);break}}}finally{Br=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ua(a):""}function Em(e,t){switch(e.tag){case 26:case 27:case 5:return Ua(e.type);case 16:return Ua("Lazy");case 13:return e.child!==t&&t!==null?Ua("Suspense Fallback"):Ua("Suspense");case 19:return Ua("SuspenseList");case 0:case 15:return Hr(e.type,!1);case 11:return Hr(e.type.render,!1);case 1:return Hr(e.type,!0);case 31:return Ua("Activity");default:return""}}function Eo(e){try{var t="",a=null;do t+=Em(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Lr=Object.prototype.hasOwnProperty,Yr=s.unstable_scheduleCallback,qr=s.unstable_cancelCallback,Am=s.unstable_shouldYield,Tm=s.unstable_requestPaint,ut=s.unstable_now,Rm=s.unstable_getCurrentPriorityLevel,Ao=s.unstable_ImmediatePriority,To=s.unstable_UserBlockingPriority,ei=s.unstable_NormalPriority,Cm=s.unstable_LowPriority,Ro=s.unstable_IdlePriority,Om=s.log,Mm=s.unstable_setDisableYieldValue,Xl=null,pt=null;function da(e){if(typeof Om=="function"&&Mm(e),pt&&typeof pt.setStrictMode=="function")try{pt.setStrictMode(Xl,e)}catch{}}var ft=Math.clz32?Math.clz32:Um,Dm=Math.log,_m=Math.LN2;function Um(e){return e>>>=0,e===0?32:31-(Dm(e)/_m|0)|0}var ti=256,ai=262144,li=4194304;function Ba(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ni(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var i=0,r=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var p=l&134217727;return p!==0?(l=p&~r,l!==0?i=Ba(l):(c&=p,c!==0?i=Ba(c):a||(a=p&~e,a!==0&&(i=Ba(a))))):(p=l&~r,p!==0?i=Ba(p):c!==0?i=Ba(c):a||(a=l&~e,a!==0&&(i=Ba(a)))),i===0?0:t!==0&&t!==i&&(t&r)===0&&(r=i&-i,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:i}function Jl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Bm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Co(){var e=li;return li<<=1,(li&62914560)===0&&(li=4194304),e}function Gr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Wl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Hm(e,t,a,l,i,r){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var p=e.entanglements,g=e.expirationTimes,E=e.hiddenUpdates;for(a=c&~a;0<a;){var M=31-ft(a),_=1<<M;p[M]=0,g[M]=-1;var A=E[M];if(A!==null)for(E[M]=null,M=0;M<A.length;M++){var C=A[M];C!==null&&(C.lane&=-536870913)}a&=~_}l!==0&&Oo(e,l,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(c&~t))}function Oo(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ft(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Mo(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-ft(a),i=1<<l;i&t|e[l]&t&&(e[l]|=t),a&=~i}}function Do(e,t){var a=t&-t;return a=(a&42)!==0?1:Vr(a),(a&(e.suspendedLanes|t))!==0?0:a}function Vr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Qr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function _o(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:jf(e.type))}function Uo(e,t){var a=G.p;try{return G.p=e,t()}finally{G.p=a}}var ua=Math.random().toString(36).slice(2),We="__reactFiber$"+ua,nt="__reactProps$"+ua,il="__reactContainer$"+ua,Zr="__reactEvents$"+ua,Lm="__reactListeners$"+ua,Ym="__reactHandles$"+ua,Bo="__reactResources$"+ua,Fl="__reactMarker$"+ua;function Kr(e){delete e[We],delete e[nt],delete e[Zr],delete e[Lm],delete e[Ym]}function rl(e){var t=e[We];if(t)return t;for(var a=e.parentNode;a;){if(t=a[il]||a[We]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=nf(e);e!==null;){if(a=e[We])return a;e=nf(e)}return t}e=a,a=e.parentNode}return null}function sl(e){if(e=e[We]||e[il]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function $l(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(d(33))}function cl(e){var t=e[Bo];return t||(t=e[Bo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ke(e){e[Fl]=!0}var Ho=new Set,Lo={};function Ha(e,t){ol(e,t),ol(e+"Capture",t)}function ol(e,t){for(Lo[e]=t,e=0;e<t.length;e++)Ho.add(t[e])}var qm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Yo={},qo={};function Gm(e){return Lr.call(qo,e)?!0:Lr.call(Yo,e)?!1:qm.test(e)?qo[e]=!0:(Yo[e]=!0,!1)}function ii(e,t,a){if(Gm(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function ri(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Qt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Go(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vm(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,r=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(c){a=""+c,r.call(this,c)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xr(e){if(!e._valueTracker){var t=Go(e)?"checked":"value";e._valueTracker=Vm(e,t,""+e[t])}}function Vo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Go(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function si(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Qm=/[\n"\\]/g;function kt(e){return e.replace(Qm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Jr(e,t,a,l,i,r,c,p){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+jt(t)):e.value!==""+jt(t)&&(e.value=""+jt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?Wr(e,c,jt(t)):a!=null?Wr(e,c,jt(a)):l!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+jt(p):e.removeAttribute("name")}function Qo(e,t,a,l,i,r,c,p){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Xr(e);return}a=a!=null?""+jt(a):"",t=t!=null?""+jt(t):a,p||t===e.value||(e.value=t),e.defaultValue=t}l=l??i,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=p?e.checked:!!l,e.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),Xr(e)}function Wr(e,t,a){t==="number"&&si(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function dl(e,t,a,l){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&l&&(e[a].defaultSelected=!0)}else{for(a=""+jt(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,l&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zo(e,t,a){if(t!=null&&(t=""+jt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+jt(a):""}function Ko(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(d(92));if(ke(l)){if(1<l.length)throw Error(d(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=jt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Xr(e)}function ul(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Zm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xo(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Zm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Jo(e,t,a){if(t!=null&&typeof t!="object")throw Error(d(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var i in t)l=t[i],t.hasOwnProperty(i)&&a[i]!==l&&Xo(e,i,l)}else for(var r in t)t.hasOwnProperty(r)&&Xo(e,r,t[r])}function Fr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Km=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ci(e){return Xm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zt(){}var $r=null;function Ir(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pl=null,fl=null;function Wo(e){var t=sl(e);if(t&&(e=t.stateNode)){var a=e[nt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Jr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+kt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var i=l[nt]||null;if(!i)throw Error(d(90));Jr(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Vo(l)}break e;case"textarea":Zo(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&dl(e,!!a.multiple,t,!1)}}}var Pr=!1;function Fo(e,t,a){if(Pr)return e(t,a);Pr=!0;try{var l=e(t);return l}finally{if(Pr=!1,(pl!==null||fl!==null)&&(Wi(),pl&&(t=pl,e=fl,fl=pl=null,Wo(t),e)))for(t=0;t<e.length;t++)Wo(e[t])}}function Il(e,t){var a=e.stateNode;if(a===null)return null;var l=a[nt]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(d(231,t,typeof a));return a}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),es=!1;if(Kt)try{var Pl={};Object.defineProperty(Pl,"passive",{get:function(){es=!0}}),window.addEventListener("test",Pl,Pl),window.removeEventListener("test",Pl,Pl)}catch{es=!1}var pa=null,ts=null,oi=null;function $o(){if(oi)return oi;var e,t=ts,a=t.length,l,i="value"in pa?pa.value:pa.textContent,r=i.length;for(e=0;e<a&&t[e]===i[e];e++);var c=a-e;for(l=1;l<=c&&t[a-l]===i[r-l];l++);return oi=i.slice(e,1<l?1-l:void 0)}function di(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ui(){return!0}function Io(){return!1}function it(e){function t(a,l,i,r,c){this._reactName=a,this._targetInst=i,this.type=l,this.nativeEvent=r,this.target=c,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(a=e[p],this[p]=a?a(r):r[p]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?ui:Io,this.isPropagationStopped=Io,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ui)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ui)},persist:function(){},isPersistent:ui}),t}var La={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pi=it(La),en=w({},La,{view:0,detail:0}),Jm=it(en),as,ls,tn,fi=w({},en,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:is,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tn&&(tn&&e.type==="mousemove"?(as=e.screenX-tn.screenX,ls=e.screenY-tn.screenY):ls=as=0,tn=e),as)},movementY:function(e){return"movementY"in e?e.movementY:ls}}),Po=it(fi),Wm=w({},fi,{dataTransfer:0}),Fm=it(Wm),$m=w({},en,{relatedTarget:0}),ns=it($m),Im=w({},La,{animationName:0,elapsedTime:0,pseudoElement:0}),Pm=it(Im),eh=w({},La,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),th=it(eh),ah=w({},La,{data:0}),ed=it(ah),lh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ih={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ih[e])?!!t[e]:!1}function is(){return rh}var sh=w({},en,{key:function(e){if(e.key){var t=lh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=di(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:is,charCode:function(e){return e.type==="keypress"?di(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?di(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ch=it(sh),oh=w({},fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),td=it(oh),dh=w({},en,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:is}),uh=it(dh),ph=w({},La,{propertyName:0,elapsedTime:0,pseudoElement:0}),fh=it(ph),mh=w({},fi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hh=it(mh),xh=w({},La,{newState:0,oldState:0}),gh=it(xh),bh=[9,13,27,32],rs=Kt&&"CompositionEvent"in window,an=null;Kt&&"documentMode"in document&&(an=document.documentMode);var vh=Kt&&"TextEvent"in window&&!an,ad=Kt&&(!rs||an&&8<an&&11>=an),ld=" ",nd=!1;function id(e,t){switch(e){case"keyup":return bh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ml=!1;function yh(e,t){switch(e){case"compositionend":return rd(t);case"keypress":return t.which!==32?null:(nd=!0,ld);case"textInput":return e=t.data,e===ld&&nd?null:e;default:return null}}function jh(e,t){if(ml)return e==="compositionend"||!rs&&id(e,t)?(e=$o(),oi=ts=pa=null,ml=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ad&&t.locale!=="ko"?null:t.data;default:return null}}var kh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kh[e.type]:t==="textarea"}function cd(e,t,a,l){pl?fl?fl.push(l):fl=[l]:pl=l,t=ar(t,"onChange"),0<t.length&&(a=new pi("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var ln=null,nn=null;function wh(e){Qp(e,0)}function mi(e){var t=$l(e);if(Vo(t))return e}function od(e,t){if(e==="change")return t}var dd=!1;if(Kt){var ss;if(Kt){var cs="oninput"in document;if(!cs){var ud=document.createElement("div");ud.setAttribute("oninput","return;"),cs=typeof ud.oninput=="function"}ss=cs}else ss=!1;dd=ss&&(!document.documentMode||9<document.documentMode)}function pd(){ln&&(ln.detachEvent("onpropertychange",fd),nn=ln=null)}function fd(e){if(e.propertyName==="value"&&mi(nn)){var t=[];cd(t,nn,e,Ir(e)),Fo(wh,t)}}function Nh(e,t,a){e==="focusin"?(pd(),ln=t,nn=a,ln.attachEvent("onpropertychange",fd)):e==="focusout"&&pd()}function Sh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mi(nn)}function zh(e,t){if(e==="click")return mi(t)}function Eh(e,t){if(e==="input"||e==="change")return mi(t)}function Ah(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:Ah;function rn(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var i=a[l];if(!Lr.call(t,i)||!mt(e[i],t[i]))return!1}return!0}function md(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hd(e,t){var a=md(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=md(a)}}function xd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=si(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=si(e.document)}return t}function os(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Th=Kt&&"documentMode"in document&&11>=document.documentMode,hl=null,ds=null,sn=null,us=!1;function bd(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;us||hl==null||hl!==si(l)||(l=hl,"selectionStart"in l&&os(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),sn&&rn(sn,l)||(sn=l,l=ar(ds,"onSelect"),0<l.length&&(t=new pi("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=hl)))}function Ya(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var xl={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},ps={},vd={};Kt&&(vd=document.createElement("div").style,"AnimationEvent"in window||(delete xl.animationend.animation,delete xl.animationiteration.animation,delete xl.animationstart.animation),"TransitionEvent"in window||delete xl.transitionend.transition);function qa(e){if(ps[e])return ps[e];if(!xl[e])return e;var t=xl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in vd)return ps[e]=t[a];return e}var yd=qa("animationend"),jd=qa("animationiteration"),kd=qa("animationstart"),Rh=qa("transitionrun"),Ch=qa("transitionstart"),Oh=qa("transitioncancel"),wd=qa("transitionend"),Nd=new Map,fs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fs.push("scrollEnd");function Ot(e,t){Nd.set(e,t),Ha(t,[e])}var hi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},wt=[],gl=0,ms=0;function xi(){for(var e=gl,t=ms=gl=0;t<e;){var a=wt[t];wt[t++]=null;var l=wt[t];wt[t++]=null;var i=wt[t];wt[t++]=null;var r=wt[t];if(wt[t++]=null,l!==null&&i!==null){var c=l.pending;c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i}r!==0&&Sd(a,i,r)}}function gi(e,t,a,l){wt[gl++]=e,wt[gl++]=t,wt[gl++]=a,wt[gl++]=l,ms|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function hs(e,t,a,l){return gi(e,t,a,l),bi(e)}function Ga(e,t){return gi(e,null,null,t),bi(e)}function Sd(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var i=!1,r=e.return;r!==null;)r.childLanes|=a,l=r.alternate,l!==null&&(l.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-ft(a),e=r.hiddenUpdates,l=e[i],l===null?e[i]=[t]:l.push(t),t.lane=a|536870912),r):null}function bi(e){if(50<Tn)throw Tn=0,Nc=null,Error(d(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var bl={};function Mh(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(e,t,a,l){return new Mh(e,t,a,l)}function xs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xt(e,t){var a=e.alternate;return a===null?(a=ht(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function zd(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function vi(e,t,a,l,i,r){var c=0;if(l=e,typeof e=="function")xs(e)&&(c=1);else if(typeof e=="string")c=Hx(e,a,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case U:return e=ht(31,a,t,i),e.elementType=U,e.lanes=r,e;case q:return Va(a.children,i,r,t);case L:c=8,i|=24;break;case H:return e=ht(12,a,t,i|2),e.elementType=H,e.lanes=r,e;case ne:return e=ht(13,a,t,i),e.elementType=ne,e.lanes=r,e;case F:return e=ht(19,a,t,i),e.elementType=F,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Y:c=10;break e;case X:c=9;break e;case K:c=11;break e;case P:c=14;break e;case je:c=16,l=null;break e}c=29,a=Error(d(130,e===null?"null":typeof e,"")),l=null}return t=ht(c,a,t,i),t.elementType=e,t.type=l,t.lanes=r,t}function Va(e,t,a,l){return e=ht(7,e,l,t),e.lanes=a,e}function gs(e,t,a){return e=ht(6,e,null,t),e.lanes=a,e}function Ed(e){var t=ht(18,null,null,0);return t.stateNode=e,t}function bs(e,t,a){return t=ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ad=new WeakMap;function Nt(e,t){if(typeof e=="object"&&e!==null){var a=Ad.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Eo(t)},Ad.set(e,t),t)}return{value:e,source:t,stack:Eo(t)}}var vl=[],yl=0,yi=null,cn=0,St=[],zt=0,fa=null,Ht=1,Lt="";function Jt(e,t){vl[yl++]=cn,vl[yl++]=yi,yi=e,cn=t}function Td(e,t,a){St[zt++]=Ht,St[zt++]=Lt,St[zt++]=fa,fa=e;var l=Ht;e=Lt;var i=32-ft(l)-1;l&=~(1<<i),a+=1;var r=32-ft(t)+i;if(30<r){var c=i-i%5;r=(l&(1<<c)-1).toString(32),l>>=c,i-=c,Ht=1<<32-ft(t)+i|a<<i|l,Lt=r+e}else Ht=1<<r|a<<i|l,Lt=e}function vs(e){e.return!==null&&(Jt(e,1),Td(e,1,0))}function ys(e){for(;e===yi;)yi=vl[--yl],vl[yl]=null,cn=vl[--yl],vl[yl]=null;for(;e===fa;)fa=St[--zt],St[zt]=null,Lt=St[--zt],St[zt]=null,Ht=St[--zt],St[zt]=null}function Rd(e,t){St[zt++]=Ht,St[zt++]=Lt,St[zt++]=fa,Ht=t.id,Lt=t.overflow,fa=e}var Fe=null,Re=null,xe=!1,ma=null,Et=!1,js=Error(d(519));function ha(e){var t=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw on(Nt(t,e)),js}function Cd(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[We]=e,t[nt]=l,a){case"dialog":fe("cancel",t),fe("close",t);break;case"iframe":case"object":case"embed":fe("load",t);break;case"video":case"audio":for(a=0;a<Cn.length;a++)fe(Cn[a],t);break;case"source":fe("error",t);break;case"img":case"image":case"link":fe("error",t),fe("load",t);break;case"details":fe("toggle",t);break;case"input":fe("invalid",t),Qo(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":fe("invalid",t);break;case"textarea":fe("invalid",t),Ko(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Jp(t.textContent,a)?(l.popover!=null&&(fe("beforetoggle",t),fe("toggle",t)),l.onScroll!=null&&fe("scroll",t),l.onScrollEnd!=null&&fe("scrollend",t),l.onClick!=null&&(t.onclick=Zt),t=!0):t=!1,t||ha(e,!0)}function Od(e){for(Fe=e.return;Fe;)switch(Fe.tag){case 5:case 31:case 13:Et=!1;return;case 27:case 3:Et=!0;return;default:Fe=Fe.return}}function jl(e){if(e!==Fe)return!1;if(!xe)return Od(e),xe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Lc(e.type,e.memoizedProps)),a=!a),a&&Re&&ha(e),Od(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Re=lf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Re=lf(e)}else t===27?(t=Re,Ta(e.type)?(e=Qc,Qc=null,Re=e):Re=t):Re=Fe?Tt(e.stateNode.nextSibling):null;return!0}function Qa(){Re=Fe=null,xe=!1}function ks(){var e=ma;return e!==null&&(ot===null?ot=e:ot.push.apply(ot,e),ma=null),e}function on(e){ma===null?ma=[e]:ma.push(e)}var ws=v(null),Za=null,Wt=null;function xa(e,t,a){Q(ws,t._currentValue),t._currentValue=a}function Ft(e){e._currentValue=ws.current,O(ws)}function Ns(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Ss(e,t,a,l){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var c=i.child;r=r.firstContext;e:for(;r!==null;){var p=r;r=i;for(var g=0;g<t.length;g++)if(p.context===t[g]){r.lanes|=a,p=r.alternate,p!==null&&(p.lanes|=a),Ns(r.return,a,e),l||(c=null);break e}r=p.next}}else if(i.tag===18){if(c=i.return,c===null)throw Error(d(341));c.lanes|=a,r=c.alternate,r!==null&&(r.lanes|=a),Ns(c,a,e),c=null}else c=i.child;if(c!==null)c.return=i;else for(c=i;c!==null;){if(c===e){c=null;break}if(i=c.sibling,i!==null){i.return=c.return,c=i;break}c=c.return}i=c}}function kl(e,t,a,l){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var c=i.alternate;if(c===null)throw Error(d(387));if(c=c.memoizedProps,c!==null){var p=i.type;mt(i.pendingProps.value,c.value)||(e!==null?e.push(p):e=[p])}}else if(i===be.current){if(c=i.alternate,c===null)throw Error(d(387));c.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Un):e=[Un])}i=i.return}e!==null&&Ss(t,e,a,l),t.flags|=262144}function ji(e){for(e=e.firstContext;e!==null;){if(!mt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ka(e){Za=e,Wt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function $e(e){return Md(Za,e)}function ki(e,t){return Za===null&&Ka(e),Md(e,t)}function Md(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Wt===null){if(e===null)throw Error(d(308));Wt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Wt=Wt.next=t;return a}var Dh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},_h=s.unstable_scheduleCallback,Uh=s.unstable_NormalPriority,Ye={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zs(){return{controller:new Dh,data:new Map,refCount:0}}function dn(e){e.refCount--,e.refCount===0&&_h(Uh,function(){e.controller.abort()})}var un=null,Es=0,wl=0,Nl=null;function Bh(e,t){if(un===null){var a=un=[];Es=0,wl=Rc(),Nl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Es++,t.then(Dd,Dd),t}function Dd(){if(--Es===0&&un!==null){Nl!==null&&(Nl.status="fulfilled");var e=un;un=null,wl=0,Nl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Hh(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(l.status="rejected",l.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),l}var _d=R.S;R.S=function(e,t){bp=ut(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Bh(e,t),_d!==null&&_d(e,t)};var Xa=v(null);function As(){var e=Xa.current;return e!==null?e:Te.pooledCache}function wi(e,t){t===null?Q(Xa,Xa.current):Q(Xa,t.pool)}function Ud(){var e=As();return e===null?null:{parent:Ye._currentValue,pool:e}}var Sl=Error(d(460)),Ts=Error(d(474)),Ni=Error(d(542)),Si={then:function(){}};function Bd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Hd(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Zt,Zt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Yd(e),e;default:if(typeof t.status=="string")t.then(Zt,Zt);else{if(e=Te,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=l}},function(l){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Yd(e),e}throw Wa=t,Sl}}function Ja(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Wa=a,Sl):a}}var Wa=null;function Ld(){if(Wa===null)throw Error(d(459));var e=Wa;return Wa=null,e}function Yd(e){if(e===Sl||e===Ni)throw Error(d(483))}var zl=null,pn=0;function zi(e){var t=pn;return pn+=1,zl===null&&(zl=[]),Hd(zl,e,t)}function fn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ei(e,t){throw t.$$typeof===B?Error(d(525)):(e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function qd(e){function t(N,j){if(e){var z=N.deletions;z===null?(N.deletions=[j],N.flags|=16):z.push(j)}}function a(N,j){if(!e)return null;for(;j!==null;)t(N,j),j=j.sibling;return null}function l(N){for(var j=new Map;N!==null;)N.key!==null?j.set(N.key,N):j.set(N.index,N),N=N.sibling;return j}function i(N,j){return N=Xt(N,j),N.index=0,N.sibling=null,N}function r(N,j,z){return N.index=z,e?(z=N.alternate,z!==null?(z=z.index,z<j?(N.flags|=67108866,j):z):(N.flags|=67108866,j)):(N.flags|=1048576,j)}function c(N){return e&&N.alternate===null&&(N.flags|=67108866),N}function p(N,j,z,D){return j===null||j.tag!==6?(j=gs(z,N.mode,D),j.return=N,j):(j=i(j,z),j.return=N,j)}function g(N,j,z,D){var te=z.type;return te===q?M(N,j,z.props.children,D,z.key):j!==null&&(j.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===je&&Ja(te)===j.type)?(j=i(j,z.props),fn(j,z),j.return=N,j):(j=vi(z.type,z.key,z.props,null,N.mode,D),fn(j,z),j.return=N,j)}function E(N,j,z,D){return j===null||j.tag!==4||j.stateNode.containerInfo!==z.containerInfo||j.stateNode.implementation!==z.implementation?(j=bs(z,N.mode,D),j.return=N,j):(j=i(j,z.children||[]),j.return=N,j)}function M(N,j,z,D,te){return j===null||j.tag!==7?(j=Va(z,N.mode,D,te),j.return=N,j):(j=i(j,z),j.return=N,j)}function _(N,j,z){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=gs(""+j,N.mode,z),j.return=N,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Z:return z=vi(j.type,j.key,j.props,null,N.mode,z),fn(z,j),z.return=N,z;case S:return j=bs(j,N.mode,z),j.return=N,j;case je:return j=Ja(j),_(N,j,z)}if(ke(j)||$(j))return j=Va(j,N.mode,z,null),j.return=N,j;if(typeof j.then=="function")return _(N,zi(j),z);if(j.$$typeof===Y)return _(N,ki(N,j),z);Ei(N,j)}return null}function A(N,j,z,D){var te=j!==null?j.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return te!==null?null:p(N,j,""+z,D);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case Z:return z.key===te?g(N,j,z,D):null;case S:return z.key===te?E(N,j,z,D):null;case je:return z=Ja(z),A(N,j,z,D)}if(ke(z)||$(z))return te!==null?null:M(N,j,z,D,null);if(typeof z.then=="function")return A(N,j,zi(z),D);if(z.$$typeof===Y)return A(N,j,ki(N,z),D);Ei(N,z)}return null}function C(N,j,z,D,te){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return N=N.get(z)||null,p(j,N,""+D,te);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Z:return N=N.get(D.key===null?z:D.key)||null,g(j,N,D,te);case S:return N=N.get(D.key===null?z:D.key)||null,E(j,N,D,te);case je:return D=Ja(D),C(N,j,z,D,te)}if(ke(D)||$(D))return N=N.get(z)||null,M(j,N,D,te,null);if(typeof D.then=="function")return C(N,j,z,zi(D),te);if(D.$$typeof===Y)return C(N,j,z,ki(j,D),te);Ei(j,D)}return null}function W(N,j,z,D){for(var te=null,ve=null,I=j,de=j=0,he=null;I!==null&&de<z.length;de++){I.index>de?(he=I,I=null):he=I.sibling;var ye=A(N,I,z[de],D);if(ye===null){I===null&&(I=he);break}e&&I&&ye.alternate===null&&t(N,I),j=r(ye,j,de),ve===null?te=ye:ve.sibling=ye,ve=ye,I=he}if(de===z.length)return a(N,I),xe&&Jt(N,de),te;if(I===null){for(;de<z.length;de++)I=_(N,z[de],D),I!==null&&(j=r(I,j,de),ve===null?te=I:ve.sibling=I,ve=I);return xe&&Jt(N,de),te}for(I=l(I);de<z.length;de++)he=C(I,N,de,z[de],D),he!==null&&(e&&he.alternate!==null&&I.delete(he.key===null?de:he.key),j=r(he,j,de),ve===null?te=he:ve.sibling=he,ve=he);return e&&I.forEach(function(Da){return t(N,Da)}),xe&&Jt(N,de),te}function ae(N,j,z,D){if(z==null)throw Error(d(151));for(var te=null,ve=null,I=j,de=j=0,he=null,ye=z.next();I!==null&&!ye.done;de++,ye=z.next()){I.index>de?(he=I,I=null):he=I.sibling;var Da=A(N,I,ye.value,D);if(Da===null){I===null&&(I=he);break}e&&I&&Da.alternate===null&&t(N,I),j=r(Da,j,de),ve===null?te=Da:ve.sibling=Da,ve=Da,I=he}if(ye.done)return a(N,I),xe&&Jt(N,de),te;if(I===null){for(;!ye.done;de++,ye=z.next())ye=_(N,ye.value,D),ye!==null&&(j=r(ye,j,de),ve===null?te=ye:ve.sibling=ye,ve=ye);return xe&&Jt(N,de),te}for(I=l(I);!ye.done;de++,ye=z.next())ye=C(I,N,de,ye.value,D),ye!==null&&(e&&ye.alternate!==null&&I.delete(ye.key===null?de:ye.key),j=r(ye,j,de),ve===null?te=ye:ve.sibling=ye,ve=ye);return e&&I.forEach(function(Wx){return t(N,Wx)}),xe&&Jt(N,de),te}function Ae(N,j,z,D){if(typeof z=="object"&&z!==null&&z.type===q&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case Z:e:{for(var te=z.key;j!==null;){if(j.key===te){if(te=z.type,te===q){if(j.tag===7){a(N,j.sibling),D=i(j,z.props.children),D.return=N,N=D;break e}}else if(j.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===je&&Ja(te)===j.type){a(N,j.sibling),D=i(j,z.props),fn(D,z),D.return=N,N=D;break e}a(N,j);break}else t(N,j);j=j.sibling}z.type===q?(D=Va(z.props.children,N.mode,D,z.key),D.return=N,N=D):(D=vi(z.type,z.key,z.props,null,N.mode,D),fn(D,z),D.return=N,N=D)}return c(N);case S:e:{for(te=z.key;j!==null;){if(j.key===te)if(j.tag===4&&j.stateNode.containerInfo===z.containerInfo&&j.stateNode.implementation===z.implementation){a(N,j.sibling),D=i(j,z.children||[]),D.return=N,N=D;break e}else{a(N,j);break}else t(N,j);j=j.sibling}D=bs(z,N.mode,D),D.return=N,N=D}return c(N);case je:return z=Ja(z),Ae(N,j,z,D)}if(ke(z))return W(N,j,z,D);if($(z)){if(te=$(z),typeof te!="function")throw Error(d(150));return z=te.call(z),ae(N,j,z,D)}if(typeof z.then=="function")return Ae(N,j,zi(z),D);if(z.$$typeof===Y)return Ae(N,j,ki(N,z),D);Ei(N,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,j!==null&&j.tag===6?(a(N,j.sibling),D=i(j,z),D.return=N,N=D):(a(N,j),D=gs(z,N.mode,D),D.return=N,N=D),c(N)):a(N,j)}return function(N,j,z,D){try{pn=0;var te=Ae(N,j,z,D);return zl=null,te}catch(I){if(I===Sl||I===Ni)throw I;var ve=ht(29,I,null,N.mode);return ve.lanes=D,ve.return=N,ve}}}var Fa=qd(!0),Gd=qd(!1),ga=!1;function Rs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function va(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(we&2)!==0){var i=l.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),l.pending=t,t=bi(e),Sd(e,null,a),t}return gi(e,l,t,a),bi(e)}function mn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Mo(e,a)}}function Os(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var i=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?i=r=c:r=r.next=c,a=a.next}while(a!==null);r===null?i=r=t:r=r.next=t}else i=r=t;a={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Ms=!1;function hn(){if(Ms){var e=Nl;if(e!==null)throw e}}function xn(e,t,a,l){Ms=!1;var i=e.updateQueue;ga=!1;var r=i.firstBaseUpdate,c=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var g=p,E=g.next;g.next=null,c===null?r=E:c.next=E,c=g;var M=e.alternate;M!==null&&(M=M.updateQueue,p=M.lastBaseUpdate,p!==c&&(p===null?M.firstBaseUpdate=E:p.next=E,M.lastBaseUpdate=g))}if(r!==null){var _=i.baseState;c=0,M=E=g=null,p=r;do{var A=p.lane&-536870913,C=A!==p.lane;if(C?(me&A)===A:(l&A)===A){A!==0&&A===wl&&(Ms=!0),M!==null&&(M=M.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var W=e,ae=p;A=t;var Ae=a;switch(ae.tag){case 1:if(W=ae.payload,typeof W=="function"){_=W.call(Ae,_,A);break e}_=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=ae.payload,A=typeof W=="function"?W.call(Ae,_,A):W,A==null)break e;_=w({},_,A);break e;case 2:ga=!0}}A=p.callback,A!==null&&(e.flags|=64,C&&(e.flags|=8192),C=i.callbacks,C===null?i.callbacks=[A]:C.push(A))}else C={lane:A,tag:p.tag,payload:p.payload,callback:p.callback,next:null},M===null?(E=M=C,g=_):M=M.next=C,c|=A;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;C=p,p=C.next,C.next=null,i.lastBaseUpdate=C,i.shared.pending=null}}while(!0);M===null&&(g=_),i.baseState=g,i.firstBaseUpdate=E,i.lastBaseUpdate=M,r===null&&(i.shared.lanes=0),Na|=c,e.lanes=c,e.memoizedState=_}}function Vd(e,t){if(typeof e!="function")throw Error(d(191,e));e.call(t)}function Qd(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Vd(a[e],t)}var El=v(null),Ai=v(0);function Zd(e,t){e=ia,Q(Ai,e),Q(El,t),ia=e|t.baseLanes}function Ds(){Q(Ai,ia),Q(El,El.current)}function _s(){ia=Ai.current,O(El),O(Ai)}var xt=v(null),At=null;function ya(e){var t=e.alternate;Q(Be,Be.current&1),Q(xt,e),At===null&&(t===null||El.current!==null||t.memoizedState!==null)&&(At=e)}function Us(e){Q(Be,Be.current),Q(xt,e),At===null&&(At=e)}function Kd(e){e.tag===22?(Q(Be,Be.current),Q(xt,e),At===null&&(At=e)):ja()}function ja(){Q(Be,Be.current),Q(xt,xt.current)}function gt(e){O(xt),At===e&&(At=null),O(Be)}var Be=v(0);function Ti(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Gc(a)||Vc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $t=0,oe=null,ze=null,qe=null,Ri=!1,Al=!1,$a=!1,Ci=0,gn=0,Tl=null,Lh=0;function De(){throw Error(d(321))}function Bs(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!mt(e[a],t[a]))return!1;return!0}function Hs(e,t,a,l,i,r){return $t=r,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?Tu:Ps,$a=!1,r=a(l,i),$a=!1,Al&&(r=Jd(t,a,l,i)),Xd(e),r}function Xd(e){R.H=yn;var t=ze!==null&&ze.next!==null;if($t=0,qe=ze=oe=null,Ri=!1,gn=0,Tl=null,t)throw Error(d(300));e===null||Ge||(e=e.dependencies,e!==null&&ji(e)&&(Ge=!0))}function Jd(e,t,a,l){oe=e;var i=0;do{if(Al&&(Tl=null),gn=0,Al=!1,25<=i)throw Error(d(301));if(i+=1,qe=ze=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}R.H=Ru,r=t(a,l)}while(Al);return r}function Yh(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?bn(t):t,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(oe.flags|=1024),t}function Ls(){var e=Ci!==0;return Ci=0,e}function Ys(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function qs(e){if(Ri){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ri=!1}$t=0,qe=ze=oe=null,Al=!1,gn=Ci=0,Tl=null}function at(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?oe.memoizedState=qe=e:qe=qe.next=e,qe}function He(){if(ze===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=qe===null?oe.memoizedState:qe.next;if(t!==null)qe=t,ze=e;else{if(e===null)throw oe.alternate===null?Error(d(467)):Error(d(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},qe===null?oe.memoizedState=qe=e:qe=qe.next=e}return qe}function Oi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bn(e){var t=gn;return gn+=1,Tl===null&&(Tl=[]),e=Hd(Tl,e,t),t=oe,(qe===null?t.memoizedState:qe.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?Tu:Ps),e}function Mi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bn(e);if(e.$$typeof===Y)return $e(e)}throw Error(d(438,String(e)))}function Gs(e){var t=null,a=oe.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=oe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Oi(),oe.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=le;return t.index++,a}function It(e,t){return typeof t=="function"?t(e):t}function Di(e){var t=He();return Vs(t,ze,e)}function Vs(e,t,a){var l=e.queue;if(l===null)throw Error(d(311));l.lastRenderedReducer=a;var i=e.baseQueue,r=l.pending;if(r!==null){if(i!==null){var c=i.next;i.next=r.next,r.next=c}t.baseQueue=i=r,l.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var p=c=null,g=null,E=t,M=!1;do{var _=E.lane&-536870913;if(_!==E.lane?(me&_)===_:($t&_)===_){var A=E.revertLane;if(A===0)g!==null&&(g=g.next={lane:0,revertLane:0,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),_===wl&&(M=!0);else if(($t&A)===A){E=E.next,A===wl&&(M=!0);continue}else _={lane:0,revertLane:E.revertLane,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},g===null?(p=g=_,c=r):g=g.next=_,oe.lanes|=A,Na|=A;_=E.action,$a&&a(r,_),r=E.hasEagerState?E.eagerState:a(r,_)}else A={lane:_,revertLane:E.revertLane,gesture:E.gesture,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},g===null?(p=g=A,c=r):g=g.next=A,oe.lanes|=_,Na|=_;E=E.next}while(E!==null&&E!==t);if(g===null?c=r:g.next=p,!mt(r,e.memoizedState)&&(Ge=!0,M&&(a=Nl,a!==null)))throw a;e.memoizedState=r,e.baseState=c,e.baseQueue=g,l.lastRenderedState=r}return i===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Qs(e){var t=He(),a=t.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=e;var l=a.dispatch,i=a.pending,r=t.memoizedState;if(i!==null){a.pending=null;var c=i=i.next;do r=e(r,c.action),c=c.next;while(c!==i);mt(r,t.memoizedState)||(Ge=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,l]}function Wd(e,t,a){var l=oe,i=He(),r=xe;if(r){if(a===void 0)throw Error(d(407));a=a()}else a=t();var c=!mt((ze||i).memoizedState,a);if(c&&(i.memoizedState=a,Ge=!0),i=i.queue,Xs(Id.bind(null,l,i,e),[e]),i.getSnapshot!==t||c||qe!==null&&qe.memoizedState.tag&1){if(l.flags|=2048,Rl(9,{destroy:void 0},$d.bind(null,l,i,a,t),null),Te===null)throw Error(d(349));r||($t&127)!==0||Fd(l,t,a)}return a}function Fd(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=oe.updateQueue,t===null?(t=Oi(),oe.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function $d(e,t,a,l){t.value=a,t.getSnapshot=l,Pd(t)&&eu(e)}function Id(e,t,a){return a(function(){Pd(t)&&eu(e)})}function Pd(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!mt(e,a)}catch{return!0}}function eu(e){var t=Ga(e,2);t!==null&&dt(t,e,2)}function Zs(e){var t=at();if(typeof e=="function"){var a=e;if(e=a(),$a){da(!0);try{a()}finally{da(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:It,lastRenderedState:e},t}function tu(e,t,a,l){return e.baseState=a,Vs(e,ze,typeof l=="function"?l:It)}function qh(e,t,a,l,i){if(Bi(e))throw Error(d(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){r.listeners.push(c)}};R.T!==null?a(!0):r.isTransition=!1,l(r),a=t.pending,a===null?(r.next=t.pending=r,au(t,r)):(r.next=a.next,t.pending=a.next=r)}}function au(e,t){var a=t.action,l=t.payload,i=e.state;if(t.isTransition){var r=R.T,c={};R.T=c;try{var p=a(i,l),g=R.S;g!==null&&g(c,p),lu(e,t,p)}catch(E){Ks(e,t,E)}finally{r!==null&&c.types!==null&&(r.types=c.types),R.T=r}}else try{r=a(i,l),lu(e,t,r)}catch(E){Ks(e,t,E)}}function lu(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){nu(e,t,l)},function(l){return Ks(e,t,l)}):nu(e,t,a)}function nu(e,t,a){t.status="fulfilled",t.value=a,iu(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,au(e,a)))}function Ks(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,iu(t),t=t.next;while(t!==l)}e.action=null}function iu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ru(e,t){return t}function su(e,t){if(xe){var a=Te.formState;if(a!==null){e:{var l=oe;if(xe){if(Re){t:{for(var i=Re,r=Et;i.nodeType!==8;){if(!r){i=null;break t}if(i=Tt(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){Re=Tt(i.nextSibling),l=i.data==="F!";break e}}ha(l)}l=!1}l&&(t=a[0])}}return a=at(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ru,lastRenderedState:t},a.queue=l,a=zu.bind(null,oe,l),l.dispatch=a,l=Zs(!1),r=Is.bind(null,oe,!1,l.queue),l=at(),i={state:t,dispatch:null,action:e,pending:null},l.queue=i,a=qh.bind(null,oe,i,r,a),i.dispatch=a,l.memoizedState=e,[t,a,!1]}function cu(e){var t=He();return ou(t,ze,e)}function ou(e,t,a){if(t=Vs(e,t,ru)[0],e=Di(It)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=bn(t)}catch(c){throw c===Sl?Ni:c}else l=t;t=He();var i=t.queue,r=i.dispatch;return a!==t.memoizedState&&(oe.flags|=2048,Rl(9,{destroy:void 0},Gh.bind(null,i,a),null)),[l,r,e]}function Gh(e,t){e.action=t}function du(e){var t=He(),a=ze;if(a!==null)return ou(t,a,e);He(),t=t.memoizedState,a=He();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Rl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=oe.updateQueue,t===null&&(t=Oi(),oe.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function uu(){return He().memoizedState}function _i(e,t,a,l){var i=at();oe.flags|=e,i.memoizedState=Rl(1|t,{destroy:void 0},a,l===void 0?null:l)}function Ui(e,t,a,l){var i=He();l=l===void 0?null:l;var r=i.memoizedState.inst;ze!==null&&l!==null&&Bs(l,ze.memoizedState.deps)?i.memoizedState=Rl(t,r,a,l):(oe.flags|=e,i.memoizedState=Rl(1|t,r,a,l))}function pu(e,t){_i(8390656,8,e,t)}function Xs(e,t){Ui(2048,8,e,t)}function Vh(e){oe.flags|=4;var t=oe.updateQueue;if(t===null)t=Oi(),oe.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function fu(e){var t=He().memoizedState;return Vh({ref:t,nextImpl:e}),function(){if((we&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}function mu(e,t){return Ui(4,2,e,t)}function hu(e,t){return Ui(4,4,e,t)}function xu(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gu(e,t,a){a=a!=null?a.concat([e]):null,Ui(4,4,xu.bind(null,t,e),a)}function Js(){}function bu(e,t){var a=He();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Bs(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function vu(e,t){var a=He();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Bs(t,l[1]))return l[0];if(l=e(),$a){da(!0);try{e()}finally{da(!1)}}return a.memoizedState=[l,t],l}function Ws(e,t,a){return a===void 0||($t&1073741824)!==0&&(me&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=yp(),oe.lanes|=e,Na|=e,a)}function yu(e,t,a,l){return mt(a,t)?a:El.current!==null?(e=Ws(e,a,l),mt(e,t)||(Ge=!0),e):($t&42)===0||($t&1073741824)!==0&&(me&261930)===0?(Ge=!0,e.memoizedState=a):(e=yp(),oe.lanes|=e,Na|=e,t)}function ju(e,t,a,l,i){var r=G.p;G.p=r!==0&&8>r?r:8;var c=R.T,p={};R.T=p,Is(e,!1,t,a);try{var g=i(),E=R.S;if(E!==null&&E(p,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var M=Hh(g,l);vn(e,t,M,yt(e))}else vn(e,t,l,yt(e))}catch(_){vn(e,t,{then:function(){},status:"rejected",reason:_},yt())}finally{G.p=r,c!==null&&p.types!==null&&(c.types=p.types),R.T=c}}function Qh(){}function Fs(e,t,a,l){if(e.tag!==5)throw Error(d(476));var i=ku(e).queue;ju(e,i,t,ee,a===null?Qh:function(){return wu(e),a(l)})}function ku(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:It,lastRenderedState:ee},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:It,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function wu(e){var t=ku(e);t.next===null&&(t=e.alternate.memoizedState),vn(e,t.next.queue,{},yt())}function $s(){return $e(Un)}function Nu(){return He().memoizedState}function Su(){return He().memoizedState}function Zh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=yt();e=ba(a);var l=va(t,e,a);l!==null&&(dt(l,t,a),mn(l,t,a)),t={cache:zs()},e.payload=t;return}t=t.return}}function Kh(e,t,a){var l=yt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Bi(e)?Eu(t,a):(a=hs(e,t,a,l),a!==null&&(dt(a,e,l),Au(a,t,l)))}function zu(e,t,a){var l=yt();vn(e,t,a,l)}function vn(e,t,a,l){var i={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Bi(e))Eu(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var c=t.lastRenderedState,p=r(c,a);if(i.hasEagerState=!0,i.eagerState=p,mt(p,c))return gi(e,t,i,0),Te===null&&xi(),!1}catch{}if(a=hs(e,t,i,l),a!==null)return dt(a,e,l),Au(a,t,l),!0}return!1}function Is(e,t,a,l){if(l={lane:2,revertLane:Rc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Bi(e)){if(t)throw Error(d(479))}else t=hs(e,a,l,2),t!==null&&dt(t,e,2)}function Bi(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function Eu(e,t){Al=Ri=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Au(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Mo(e,a)}}var yn={readContext:$e,use:Mi,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useLayoutEffect:De,useInsertionEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useSyncExternalStore:De,useId:De,useHostTransitionStatus:De,useFormState:De,useActionState:De,useOptimistic:De,useMemoCache:De,useCacheRefresh:De};yn.useEffectEvent=De;var Tu={readContext:$e,use:Mi,useCallback:function(e,t){return at().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:pu,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,_i(4194308,4,xu.bind(null,t,e),a)},useLayoutEffect:function(e,t){return _i(4194308,4,e,t)},useInsertionEffect:function(e,t){_i(4,2,e,t)},useMemo:function(e,t){var a=at();t=t===void 0?null:t;var l=e();if($a){da(!0);try{e()}finally{da(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=at();if(a!==void 0){var i=a(t);if($a){da(!0);try{a(t)}finally{da(!1)}}}else i=t;return l.memoizedState=l.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},l.queue=e,e=e.dispatch=Kh.bind(null,oe,e),[l.memoizedState,e]},useRef:function(e){var t=at();return e={current:e},t.memoizedState=e},useState:function(e){e=Zs(e);var t=e.queue,a=zu.bind(null,oe,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Js,useDeferredValue:function(e,t){var a=at();return Ws(a,e,t)},useTransition:function(){var e=Zs(!1);return e=ju.bind(null,oe,e.queue,!0,!1),at().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=oe,i=at();if(xe){if(a===void 0)throw Error(d(407));a=a()}else{if(a=t(),Te===null)throw Error(d(349));(me&127)!==0||Fd(l,t,a)}i.memoizedState=a;var r={value:a,getSnapshot:t};return i.queue=r,pu(Id.bind(null,l,r,e),[e]),l.flags|=2048,Rl(9,{destroy:void 0},$d.bind(null,l,r,a,t),null),a},useId:function(){var e=at(),t=Te.identifierPrefix;if(xe){var a=Lt,l=Ht;a=(l&~(1<<32-ft(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Ci++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Lh++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:$s,useFormState:su,useActionState:su,useOptimistic:function(e){var t=at();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Is.bind(null,oe,!0,a),a.dispatch=t,[e,t]},useMemoCache:Gs,useCacheRefresh:function(){return at().memoizedState=Zh.bind(null,oe)},useEffectEvent:function(e){var t=at(),a={impl:e};return t.memoizedState=a,function(){if((we&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}},Ps={readContext:$e,use:Mi,useCallback:bu,useContext:$e,useEffect:Xs,useImperativeHandle:gu,useInsertionEffect:mu,useLayoutEffect:hu,useMemo:vu,useReducer:Di,useRef:uu,useState:function(){return Di(It)},useDebugValue:Js,useDeferredValue:function(e,t){var a=He();return yu(a,ze.memoizedState,e,t)},useTransition:function(){var e=Di(It)[0],t=He().memoizedState;return[typeof e=="boolean"?e:bn(e),t]},useSyncExternalStore:Wd,useId:Nu,useHostTransitionStatus:$s,useFormState:cu,useActionState:cu,useOptimistic:function(e,t){var a=He();return tu(a,ze,e,t)},useMemoCache:Gs,useCacheRefresh:Su};Ps.useEffectEvent=fu;var Ru={readContext:$e,use:Mi,useCallback:bu,useContext:$e,useEffect:Xs,useImperativeHandle:gu,useInsertionEffect:mu,useLayoutEffect:hu,useMemo:vu,useReducer:Qs,useRef:uu,useState:function(){return Qs(It)},useDebugValue:Js,useDeferredValue:function(e,t){var a=He();return ze===null?Ws(a,e,t):yu(a,ze.memoizedState,e,t)},useTransition:function(){var e=Qs(It)[0],t=He().memoizedState;return[typeof e=="boolean"?e:bn(e),t]},useSyncExternalStore:Wd,useId:Nu,useHostTransitionStatus:$s,useFormState:du,useActionState:du,useOptimistic:function(e,t){var a=He();return ze!==null?tu(a,ze,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Gs,useCacheRefresh:Su};Ru.useEffectEvent=fu;function ec(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:w({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var tc={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=yt(),i=ba(l);i.payload=t,a!=null&&(i.callback=a),t=va(e,i,l),t!==null&&(dt(t,e,l),mn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=yt(),i=ba(l);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=va(e,i,l),t!==null&&(dt(t,e,l),mn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=yt(),l=ba(a);l.tag=2,t!=null&&(l.callback=t),t=va(e,l,a),t!==null&&(dt(t,e,a),mn(t,e,a))}};function Cu(e,t,a,l,i,r,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,r,c):t.prototype&&t.prototype.isPureReactComponent?!rn(a,l)||!rn(i,r):!0}function Ou(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&tc.enqueueReplaceState(t,t.state,null)}function Ia(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=w({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function Mu(e){hi(e)}function Du(e){console.error(e)}function _u(e){hi(e)}function Hi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Uu(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function ac(e,t,a){return a=ba(a),a.tag=3,a.payload={element:null},a.callback=function(){Hi(e,t)},a}function Bu(e){return e=ba(e),e.tag=3,e}function Hu(e,t,a,l){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var r=l.value;e.payload=function(){return i(r)},e.callback=function(){Uu(t,a,l)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){Uu(t,a,l),typeof i!="function"&&(Sa===null?Sa=new Set([this]):Sa.add(this));var p=l.stack;this.componentDidCatch(l.value,{componentStack:p!==null?p:""})})}function Xh(e,t,a,l,i){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&kl(t,a,i,!0),a=xt.current,a!==null){switch(a.tag){case 31:case 13:return At===null?Fi():a.alternate===null&&_e===0&&(_e=3),a.flags&=-257,a.flags|=65536,a.lanes=i,l===Si?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Ec(e,l,i)),!1;case 22:return a.flags|=65536,l===Si?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Ec(e,l,i)),!1}throw Error(d(435,a.tag))}return Ec(e,l,i),Fi(),!1}if(xe)return t=xt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,l!==js&&(e=Error(d(422),{cause:l}),on(Nt(e,a)))):(l!==js&&(t=Error(d(423),{cause:l}),on(Nt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,l=Nt(l,a),i=ac(e.stateNode,l,i),Os(e,i),_e!==4&&(_e=2)),!1;var r=Error(d(520),{cause:l});if(r=Nt(r,a),An===null?An=[r]:An.push(r),_e!==4&&(_e=2),t===null)return!0;l=Nt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=ac(a.stateNode,l,e),Os(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Sa===null||!Sa.has(r))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Bu(i),Hu(i,e,a,l),Os(a,i),!1}a=a.return}while(a!==null);return!1}var lc=Error(d(461)),Ge=!1;function Ie(e,t,a,l){t.child=e===null?Gd(t,null,a,l):Fa(t,e.child,a,l)}function Lu(e,t,a,l,i){a=a.render;var r=t.ref;if("ref"in l){var c={};for(var p in l)p!=="ref"&&(c[p]=l[p])}else c=l;return Ka(t),l=Hs(e,t,a,c,r,i),p=Ls(),e!==null&&!Ge?(Ys(e,t,i),Pt(e,t,i)):(xe&&p&&vs(t),t.flags|=1,Ie(e,t,l,i),t.child)}function Yu(e,t,a,l,i){if(e===null){var r=a.type;return typeof r=="function"&&!xs(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,qu(e,t,r,l,i)):(e=vi(a.type,null,l,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!uc(e,i)){var c=r.memoizedProps;if(a=a.compare,a=a!==null?a:rn,a(c,l)&&e.ref===t.ref)return Pt(e,t,i)}return t.flags|=1,e=Xt(r,l),e.ref=t.ref,e.return=t,t.child=e}function qu(e,t,a,l,i){if(e!==null){var r=e.memoizedProps;if(rn(r,l)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=l=r,uc(e,i))(e.flags&131072)!==0&&(Ge=!0);else return t.lanes=e.lanes,Pt(e,t,i)}return nc(e,t,a,l,i)}function Gu(e,t,a,l){var i=l.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(l=t.child=e.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;l=i&~r}else l=0,t.child=null;return Vu(e,t,r,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&wi(t,r!==null?r.cachePool:null),r!==null?Zd(t,r):Ds(),Kd(t);else return l=t.lanes=536870912,Vu(e,t,r!==null?r.baseLanes|a:a,a,l)}else r!==null?(wi(t,r.cachePool),Zd(t,r),ja(),t.memoizedState=null):(e!==null&&wi(t,null),Ds(),ja());return Ie(e,t,i,a),t.child}function jn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Vu(e,t,a,l,i){var r=As();return r=r===null?null:{parent:Ye._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&wi(t,null),Ds(),Kd(t),e!==null&&kl(e,t,l,!0),t.childLanes=i,null}function Li(e,t){return t=qi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Qu(e,t,a){return Fa(t,e.child,null,a),e=Li(t,t.pendingProps),e.flags|=2,gt(t),t.memoizedState=null,e}function Jh(e,t,a){var l=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(xe){if(l.mode==="hidden")return e=Li(t,l),t.lanes=536870912,jn(null,e);if(Us(t),(e=Re)?(e=af(e,Et),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:fa!==null?{id:Ht,overflow:Lt}:null,retryLane:536870912,hydrationErrors:null},a=Ed(e),a.return=t,t.child=a,Fe=t,Re=null)):e=null,e===null)throw ha(t);return t.lanes=536870912,null}return Li(t,l)}var r=e.memoizedState;if(r!==null){var c=r.dehydrated;if(Us(t),i)if(t.flags&256)t.flags&=-257,t=Qu(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(d(558));else if(Ge||kl(e,t,a,!1),i=(a&e.childLanes)!==0,Ge||i){if(l=Te,l!==null&&(c=Do(l,a),c!==0&&c!==r.retryLane))throw r.retryLane=c,Ga(e,c),dt(l,e,c),lc;Fi(),t=Qu(e,t,a)}else e=r.treeContext,Re=Tt(c.nextSibling),Fe=t,xe=!0,ma=null,Et=!1,e!==null&&Rd(t,e),t=Li(t,l),t.flags|=4096;return t}return e=Xt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Yi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function nc(e,t,a,l,i){return Ka(t),a=Hs(e,t,a,l,void 0,i),l=Ls(),e!==null&&!Ge?(Ys(e,t,i),Pt(e,t,i)):(xe&&l&&vs(t),t.flags|=1,Ie(e,t,a,i),t.child)}function Zu(e,t,a,l,i,r){return Ka(t),t.updateQueue=null,a=Jd(t,l,a,i),Xd(e),l=Ls(),e!==null&&!Ge?(Ys(e,t,r),Pt(e,t,r)):(xe&&l&&vs(t),t.flags|=1,Ie(e,t,a,r),t.child)}function Ku(e,t,a,l,i){if(Ka(t),t.stateNode===null){var r=bl,c=a.contextType;typeof c=="object"&&c!==null&&(r=$e(c)),r=new a(l,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=tc,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=l,r.state=t.memoizedState,r.refs={},Rs(t),c=a.contextType,r.context=typeof c=="object"&&c!==null?$e(c):bl,r.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(ec(t,a,c,l),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(c=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),c!==r.state&&tc.enqueueReplaceState(r,r.state,null),xn(t,l,r,i),hn(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){r=t.stateNode;var p=t.memoizedProps,g=Ia(a,p);r.props=g;var E=r.context,M=a.contextType;c=bl,typeof M=="object"&&M!==null&&(c=$e(M));var _=a.getDerivedStateFromProps;M=typeof _=="function"||typeof r.getSnapshotBeforeUpdate=="function",p=t.pendingProps!==p,M||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(p||E!==c)&&Ou(t,r,l,c),ga=!1;var A=t.memoizedState;r.state=A,xn(t,l,r,i),hn(),E=t.memoizedState,p||A!==E||ga?(typeof _=="function"&&(ec(t,a,_,l),E=t.memoizedState),(g=ga||Cu(t,a,g,l,A,E,c))?(M||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=E),r.props=l,r.state=E,r.context=c,l=g):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{r=t.stateNode,Cs(e,t),c=t.memoizedProps,M=Ia(a,c),r.props=M,_=t.pendingProps,A=r.context,E=a.contextType,g=bl,typeof E=="object"&&E!==null&&(g=$e(E)),p=a.getDerivedStateFromProps,(E=typeof p=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(c!==_||A!==g)&&Ou(t,r,l,g),ga=!1,A=t.memoizedState,r.state=A,xn(t,l,r,i),hn();var C=t.memoizedState;c!==_||A!==C||ga||e!==null&&e.dependencies!==null&&ji(e.dependencies)?(typeof p=="function"&&(ec(t,a,p,l),C=t.memoizedState),(M=ga||Cu(t,a,M,l,A,C,g)||e!==null&&e.dependencies!==null&&ji(e.dependencies))?(E||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(l,C,g),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(l,C,g)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||c===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=C),r.props=l,r.state=C,r.context=g,l=M):(typeof r.componentDidUpdate!="function"||c===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),l=!1)}return r=l,Yi(e,t),l=(t.flags&128)!==0,r||l?(r=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&l?(t.child=Fa(t,e.child,null,i),t.child=Fa(t,null,a,i)):Ie(e,t,a,i),t.memoizedState=r.state,e=t.child):e=Pt(e,t,i),e}function Xu(e,t,a,l){return Qa(),t.flags|=256,Ie(e,t,a,l),t.child}var ic={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rc(e){return{baseLanes:e,cachePool:Ud()}}function sc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=vt),e}function Ju(e,t,a){var l=t.pendingProps,i=!1,r=(t.flags&128)!==0,c;if((c=r)||(c=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),c&&(i=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(xe){if(i?ya(t):ja(),(e=Re)?(e=af(e,Et),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:fa!==null?{id:Ht,overflow:Lt}:null,retryLane:536870912,hydrationErrors:null},a=Ed(e),a.return=t,t.child=a,Fe=t,Re=null)):e=null,e===null)throw ha(t);return Vc(e)?t.lanes=32:t.lanes=536870912,null}var p=l.children;return l=l.fallback,i?(ja(),i=t.mode,p=qi({mode:"hidden",children:p},i),l=Va(l,i,a,null),p.return=t,l.return=t,p.sibling=l,t.child=p,l=t.child,l.memoizedState=rc(a),l.childLanes=sc(e,c,a),t.memoizedState=ic,jn(null,l)):(ya(t),cc(t,p))}var g=e.memoizedState;if(g!==null&&(p=g.dehydrated,p!==null)){if(r)t.flags&256?(ya(t),t.flags&=-257,t=oc(e,t,a)):t.memoizedState!==null?(ja(),t.child=e.child,t.flags|=128,t=null):(ja(),p=l.fallback,i=t.mode,l=qi({mode:"visible",children:l.children},i),p=Va(p,i,a,null),p.flags|=2,l.return=t,p.return=t,l.sibling=p,t.child=l,Fa(t,e.child,null,a),l=t.child,l.memoizedState=rc(a),l.childLanes=sc(e,c,a),t.memoizedState=ic,t=jn(null,l));else if(ya(t),Vc(p)){if(c=p.nextSibling&&p.nextSibling.dataset,c)var E=c.dgst;c=E,l=Error(d(419)),l.stack="",l.digest=c,on({value:l,source:null,stack:null}),t=oc(e,t,a)}else if(Ge||kl(e,t,a,!1),c=(a&e.childLanes)!==0,Ge||c){if(c=Te,c!==null&&(l=Do(c,a),l!==0&&l!==g.retryLane))throw g.retryLane=l,Ga(e,l),dt(c,e,l),lc;Gc(p)||Fi(),t=oc(e,t,a)}else Gc(p)?(t.flags|=192,t.child=e.child,t=null):(e=g.treeContext,Re=Tt(p.nextSibling),Fe=t,xe=!0,ma=null,Et=!1,e!==null&&Rd(t,e),t=cc(t,l.children),t.flags|=4096);return t}return i?(ja(),p=l.fallback,i=t.mode,g=e.child,E=g.sibling,l=Xt(g,{mode:"hidden",children:l.children}),l.subtreeFlags=g.subtreeFlags&65011712,E!==null?p=Xt(E,p):(p=Va(p,i,a,null),p.flags|=2),p.return=t,l.return=t,l.sibling=p,t.child=l,jn(null,l),l=t.child,p=e.child.memoizedState,p===null?p=rc(a):(i=p.cachePool,i!==null?(g=Ye._currentValue,i=i.parent!==g?{parent:g,pool:g}:i):i=Ud(),p={baseLanes:p.baseLanes|a,cachePool:i}),l.memoizedState=p,l.childLanes=sc(e,c,a),t.memoizedState=ic,jn(e.child,l)):(ya(t),a=e.child,e=a.sibling,a=Xt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function cc(e,t){return t=qi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function qi(e,t){return e=ht(22,e,null,t),e.lanes=0,e}function oc(e,t,a){return Fa(t,e.child,null,a),e=cc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wu(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Ns(e.return,t,a)}function dc(e,t,a,l,i,r){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:i,treeForkCount:r}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=a,c.tailMode=i,c.treeForkCount=r)}function Fu(e,t,a){var l=t.pendingProps,i=l.revealOrder,r=l.tail;l=l.children;var c=Be.current,p=(c&2)!==0;if(p?(c=c&1|2,t.flags|=128):c&=1,Q(Be,c),Ie(e,t,l,a),l=xe?cn:0,!p&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wu(e,a,t);else if(e.tag===19)Wu(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&Ti(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),dc(t,!1,i,a,r,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ti(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}dc(t,!0,a,null,r,l);break;case"together":dc(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Pt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Na|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(kl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,a=Xt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Xt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function uc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ji(e)))}function Wh(e,t,a){switch(t.tag){case 3:tt(t,t.stateNode.containerInfo),xa(t,Ye,e.memoizedState.cache),Qa();break;case 27:case 5:Kl(t);break;case 4:tt(t,t.stateNode.containerInfo);break;case 10:xa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Us(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ya(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Ju(e,t,a):(ya(t),e=Pt(e,t,a),e!==null?e.sibling:null);ya(t);break;case 19:var i=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(kl(e,t,a,!1),l=(a&t.childLanes)!==0),i){if(l)return Fu(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(Be,Be.current),l)break;return null;case 22:return t.lanes=0,Gu(e,t,a,t.pendingProps);case 24:xa(t,Ye,e.memoizedState.cache)}return Pt(e,t,a)}function $u(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ge=!0;else{if(!uc(e,a)&&(t.flags&128)===0)return Ge=!1,Wh(e,t,a);Ge=(e.flags&131072)!==0}else Ge=!1,xe&&(t.flags&1048576)!==0&&Td(t,cn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ja(t.elementType),t.type=e,typeof e=="function")xs(e)?(l=Ia(e,l),t.tag=1,t=Ku(null,t,e,l,a)):(t.tag=0,t=nc(null,t,e,l,a));else{if(e!=null){var i=e.$$typeof;if(i===K){t.tag=11,t=Lu(null,t,e,l,a);break e}else if(i===P){t.tag=14,t=Yu(null,t,e,l,a);break e}}throw t=Oe(e)||e,Error(d(306,t,""))}}return t;case 0:return nc(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,i=Ia(l,t.pendingProps),Ku(e,t,l,i,a);case 3:e:{if(tt(t,t.stateNode.containerInfo),e===null)throw Error(d(387));l=t.pendingProps;var r=t.memoizedState;i=r.element,Cs(e,t),xn(t,l,null,a);var c=t.memoizedState;if(l=c.cache,xa(t,Ye,l),l!==r.cache&&Ss(t,[Ye],a,!0),hn(),l=c.element,r.isDehydrated)if(r={element:l,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Xu(e,t,l,a);break e}else if(l!==i){i=Nt(Error(d(424)),t),on(i),t=Xu(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Re=Tt(e.firstChild),Fe=t,xe=!0,ma=null,Et=!0,a=Gd(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Qa(),l===i){t=Pt(e,t,a);break e}Ie(e,t,l,a)}t=t.child}return t;case 26:return Yi(e,t),e===null?(a=of(t.type,null,t.pendingProps,null))?t.memoizedState=a:xe||(a=t.type,e=t.pendingProps,l=lr(ue.current).createElement(a),l[We]=t,l[nt]=e,Pe(l,a,e),Ke(l),t.stateNode=l):t.memoizedState=of(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Kl(t),e===null&&xe&&(l=t.stateNode=rf(t.type,t.pendingProps,ue.current),Fe=t,Et=!0,i=Re,Ta(t.type)?(Qc=i,Re=Tt(l.firstChild)):Re=i),Ie(e,t,t.pendingProps.children,a),Yi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&xe&&((i=l=Re)&&(l=Sx(l,t.type,t.pendingProps,Et),l!==null?(t.stateNode=l,Fe=t,Re=Tt(l.firstChild),Et=!1,i=!0):i=!1),i||ha(t)),Kl(t),i=t.type,r=t.pendingProps,c=e!==null?e.memoizedProps:null,l=r.children,Lc(i,r)?l=null:c!==null&&Lc(i,c)&&(t.flags|=32),t.memoizedState!==null&&(i=Hs(e,t,Yh,null,null,a),Un._currentValue=i),Yi(e,t),Ie(e,t,l,a),t.child;case 6:return e===null&&xe&&((e=a=Re)&&(a=zx(a,t.pendingProps,Et),a!==null?(t.stateNode=a,Fe=t,Re=null,e=!0):e=!1),e||ha(t)),null;case 13:return Ju(e,t,a);case 4:return tt(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Fa(t,null,l,a):Ie(e,t,l,a),t.child;case 11:return Lu(e,t,t.type,t.pendingProps,a);case 7:return Ie(e,t,t.pendingProps,a),t.child;case 8:return Ie(e,t,t.pendingProps.children,a),t.child;case 12:return Ie(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,xa(t,t.type,l.value),Ie(e,t,l.children,a),t.child;case 9:return i=t.type._context,l=t.pendingProps.children,Ka(t),i=$e(i),l=l(i),t.flags|=1,Ie(e,t,l,a),t.child;case 14:return Yu(e,t,t.type,t.pendingProps,a);case 15:return qu(e,t,t.type,t.pendingProps,a);case 19:return Fu(e,t,a);case 31:return Jh(e,t,a);case 22:return Gu(e,t,a,t.pendingProps);case 24:return Ka(t),l=$e(Ye),e===null?(i=As(),i===null&&(i=Te,r=zs(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=a),i=r),t.memoizedState={parent:l,cache:i},Rs(t),xa(t,Ye,i)):((e.lanes&a)!==0&&(Cs(e,t),xn(t,null,null,a),hn()),i=e.memoizedState,r=t.memoizedState,i.parent!==l?(i={parent:l,cache:l},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),xa(t,Ye,l)):(l=r.cache,xa(t,Ye,l),l!==i.cache&&Ss(t,[Ye],a,!0))),Ie(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(d(156,t.tag))}function ea(e){e.flags|=4}function pc(e,t,a,l,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Np())e.flags|=8192;else throw Wa=Si,Ts}else e.flags&=-16777217}function Iu(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!mf(t))if(Np())e.flags|=8192;else throw Wa=Si,Ts}function Gi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Co():536870912,e.lanes|=t,Dl|=t)}function kn(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags&65011712,l|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Fh(e,t,a){var l=t.pendingProps;switch(ys(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Ce(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Ft(Ye),Ue(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(jl(t)?ea(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ks())),Ce(t),null;case 26:var i=t.type,r=t.memoizedState;return e===null?(ea(t),r!==null?(Ce(t),Iu(t,r)):(Ce(t),pc(t,i,null,l,a))):r?r!==e.memoizedState?(ea(t),Ce(t),Iu(t,r)):(Ce(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&ea(t),Ce(t),pc(t,i,e,l,a)),null;case 27:if(Pn(t),a=ue.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ea(t);else{if(!l){if(t.stateNode===null)throw Error(d(166));return Ce(t),null}e=J.current,jl(t)?Cd(t):(e=rf(i,l,a),t.stateNode=e,ea(t))}return Ce(t),null;case 5:if(Pn(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ea(t);else{if(!l){if(t.stateNode===null)throw Error(d(166));return Ce(t),null}if(r=J.current,jl(t))Cd(t);else{var c=lr(ue.current);switch(r){case 1:r=c.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:r=c.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":r=c.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":r=c.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":r=c.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?r.multiple=!0:l.size&&(r.size=l.size);break;default:r=typeof l.is=="string"?c.createElement(i,{is:l.is}):c.createElement(i)}}r[We]=t,r[nt]=l;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)r.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=r;e:switch(Pe(r,i,l),i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ea(t)}}return Ce(t),pc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&ea(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(d(166));if(e=ue.current,jl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,i=Fe,i!==null)switch(i.tag){case 27:case 5:l=i.memoizedProps}e[We]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Jp(e.nodeValue,a)),e||ha(t,!0)}else e=lr(e).createTextNode(l),e[We]=t,t.stateNode=e}return Ce(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=jl(t),a!==null){if(e===null){if(!l)throw Error(d(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[We]=t}else Qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ce(t),e=!1}else a=ks(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(gt(t),t):(gt(t),null);if((t.flags&128)!==0)throw Error(d(558))}return Ce(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=jl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!i)throw Error(d(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(d(317));i[We]=t}else Qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ce(t),i=!1}else i=ks(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(gt(t),t):(gt(t),null)}return gt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,i=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(i=l.alternate.memoizedState.cachePool.pool),r=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(r=l.memoizedState.cachePool.pool),r!==i&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Gi(t,t.updateQueue),Ce(t),null);case 4:return Ue(),e===null&&Dc(t.stateNode.containerInfo),Ce(t),null;case 10:return Ft(t.type),Ce(t),null;case 19:if(O(Be),l=t.memoizedState,l===null)return Ce(t),null;if(i=(t.flags&128)!==0,r=l.rendering,r===null)if(i)kn(l,!1);else{if(_e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Ti(e),r!==null){for(t.flags|=128,kn(l,!1),e=r.updateQueue,t.updateQueue=e,Gi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)zd(a,e),a=a.sibling;return Q(Be,Be.current&1|2),xe&&Jt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&ut()>Xi&&(t.flags|=128,i=!0,kn(l,!1),t.lanes=4194304)}else{if(!i)if(e=Ti(r),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Gi(t,e),kn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!xe)return Ce(t),null}else 2*ut()-l.renderingStartTime>Xi&&a!==536870912&&(t.flags|=128,i=!0,kn(l,!1),t.lanes=4194304);l.isBackwards?(r.sibling=t.child,t.child=r):(e=l.last,e!==null?e.sibling=r:t.child=r,l.last=r)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ut(),e.sibling=null,a=Be.current,Q(Be,i?a&1|2:a&1),xe&&Jt(t,l.treeForkCount),e):(Ce(t),null);case 22:case 23:return gt(t),_s(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),a=t.updateQueue,a!==null&&Gi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&O(Xa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ft(Ye),Ce(t),null;case 25:return null;case 30:return null}throw Error(d(156,t.tag))}function $h(e,t){switch(ys(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ft(Ye),Ue(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Pn(t),null;case 31:if(t.memoizedState!==null){if(gt(t),t.alternate===null)throw Error(d(340));Qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(gt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));Qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(Be),null;case 4:return Ue(),null;case 10:return Ft(t.type),null;case 22:case 23:return gt(t),_s(),e!==null&&O(Xa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ft(Ye),null;case 25:return null;default:return null}}function Pu(e,t){switch(ys(t),t.tag){case 3:Ft(Ye),Ue();break;case 26:case 27:case 5:Pn(t);break;case 4:Ue();break;case 31:t.memoizedState!==null&&gt(t);break;case 13:gt(t);break;case 19:O(Be);break;case 10:Ft(t.type);break;case 22:case 23:gt(t),_s(),e!==null&&O(Xa);break;case 24:Ft(Ye)}}function wn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){l=void 0;var r=a.create,c=a.inst;l=r(),c.destroy=l}a=a.next}while(a!==i)}}catch(p){Se(t,t.return,p)}}function ka(e,t,a){try{var l=t.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var r=i.next;l=r;do{if((l.tag&e)===e){var c=l.inst,p=c.destroy;if(p!==void 0){c.destroy=void 0,i=t;var g=a,E=p;try{E()}catch(M){Se(i,g,M)}}}l=l.next}while(l!==r)}}catch(M){Se(t,t.return,M)}}function ep(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Qd(t,a)}catch(l){Se(e,e.return,l)}}}function tp(e,t,a){a.props=Ia(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Se(e,t,l)}}function Nn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(i){Se(e,t,i)}}function Yt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(i){Se(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Se(e,t,i)}else a.current=null}function ap(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(i){Se(e,e.return,i)}}function fc(e,t,a){try{var l=e.stateNode;vx(l,e.type,a,t),l[nt]=t}catch(i){Se(e,e.return,i)}}function lp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ta(e.type)||e.tag===4}function mc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ta(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Zt));else if(l!==4&&(l===27&&Ta(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(hc(e,t,a),e=e.sibling;e!==null;)hc(e,t,a),e=e.sibling}function Vi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Ta(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Vi(e,t,a),e=e.sibling;e!==null;)Vi(e,t,a),e=e.sibling}function np(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pe(t,l,a),t[We]=e,t[nt]=a}catch(r){Se(e,e.return,r)}}var ta=!1,Ve=!1,xc=!1,ip=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function Ih(e,t){if(e=e.containerInfo,Bc=dr,e=gd(e),os(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var i=l.anchorOffset,r=l.focusNode;l=l.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var c=0,p=-1,g=-1,E=0,M=0,_=e,A=null;t:for(;;){for(var C;_!==a||i!==0&&_.nodeType!==3||(p=c+i),_!==r||l!==0&&_.nodeType!==3||(g=c+l),_.nodeType===3&&(c+=_.nodeValue.length),(C=_.firstChild)!==null;)A=_,_=C;for(;;){if(_===e)break t;if(A===a&&++E===i&&(p=c),A===r&&++M===l&&(g=c),(C=_.nextSibling)!==null)break;_=A,A=_.parentNode}_=C}a=p===-1||g===-1?null:{start:p,end:g}}else a=null}a=a||{start:0,end:0}}else a=null;for(Hc={focusedElem:e,selectionRange:a},dr=!1,Xe=t;Xe!==null;)if(t=Xe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Xe=e;else for(;Xe!==null;){switch(t=Xe,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,i=r.memoizedProps,r=r.memoizedState,l=a.stateNode;try{var W=Ia(a.type,i);e=l.getSnapshotBeforeUpdate(W,r),l.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Se(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)qc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=t.sibling,e!==null){e.return=t.return,Xe=e;break}Xe=t.return}}function rp(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:la(e,a),l&4&&wn(5,a);break;case 1:if(la(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){Se(a,a.return,c)}else{var i=Ia(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){Se(a,a.return,c)}}l&64&&ep(a),l&512&&Nn(a,a.return);break;case 3:if(la(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Qd(e,t)}catch(c){Se(a,a.return,c)}}break;case 27:t===null&&l&4&&np(a);case 26:case 5:la(e,a),t===null&&l&4&&ap(a),l&512&&Nn(a,a.return);break;case 12:la(e,a);break;case 31:la(e,a),l&4&&op(e,a);break;case 13:la(e,a),l&4&&dp(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=sx.bind(null,a),Ex(e,a))));break;case 22:if(l=a.memoizedState!==null||ta,!l){t=t!==null&&t.memoizedState!==null||Ve,i=ta;var r=Ve;ta=l,(Ve=t)&&!r?na(e,a,(a.subtreeFlags&8772)!==0):la(e,a),ta=i,Ve=r}break;case 30:break;default:la(e,a)}}function sp(e){var t=e.alternate;t!==null&&(e.alternate=null,sp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Kr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Me=null,rt=!1;function aa(e,t,a){for(a=a.child;a!==null;)cp(e,t,a),a=a.sibling}function cp(e,t,a){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(Xl,a)}catch{}switch(a.tag){case 26:Ve||Yt(a,t),aa(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ve||Yt(a,t);var l=Me,i=rt;Ta(a.type)&&(Me=a.stateNode,rt=!1),aa(e,t,a),Mn(a.stateNode),Me=l,rt=i;break;case 5:Ve||Yt(a,t);case 6:if(l=Me,i=rt,Me=null,aa(e,t,a),Me=l,rt=i,Me!==null)if(rt)try{(Me.nodeType===9?Me.body:Me.nodeName==="HTML"?Me.ownerDocument.body:Me).removeChild(a.stateNode)}catch(r){Se(a,t,r)}else try{Me.removeChild(a.stateNode)}catch(r){Se(a,t,r)}break;case 18:Me!==null&&(rt?(e=Me,ef(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Gl(e)):ef(Me,a.stateNode));break;case 4:l=Me,i=rt,Me=a.stateNode.containerInfo,rt=!0,aa(e,t,a),Me=l,rt=i;break;case 0:case 11:case 14:case 15:ka(2,a,t),Ve||ka(4,a,t),aa(e,t,a);break;case 1:Ve||(Yt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&tp(a,t,l)),aa(e,t,a);break;case 21:aa(e,t,a);break;case 22:Ve=(l=Ve)||a.memoizedState!==null,aa(e,t,a),Ve=l;break;default:aa(e,t,a)}}function op(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Gl(e)}catch(a){Se(t,t.return,a)}}}function dp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Gl(e)}catch(a){Se(t,t.return,a)}}function Ph(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ip),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ip),t;default:throw Error(d(435,e.tag))}}function Qi(e,t){var a=Ph(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var i=cx.bind(null,e,l);l.then(i,i)}})}function st(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var i=a[l],r=e,c=t,p=c;e:for(;p!==null;){switch(p.tag){case 27:if(Ta(p.type)){Me=p.stateNode,rt=!1;break e}break;case 5:Me=p.stateNode,rt=!1;break e;case 3:case 4:Me=p.stateNode.containerInfo,rt=!0;break e}p=p.return}if(Me===null)throw Error(d(160));cp(r,c,i),Me=null,rt=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)up(t,e),t=t.sibling}var Mt=null;function up(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:st(t,e),ct(e),l&4&&(ka(3,e,e.return),wn(3,e),ka(5,e,e.return));break;case 1:st(t,e),ct(e),l&512&&(Ve||a===null||Yt(a,a.return)),l&64&&ta&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var i=Mt;if(st(t,e),ct(e),l&512&&(Ve||a===null||Yt(a,a.return)),l&4){var r=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(l){case"title":r=i.getElementsByTagName("title")[0],(!r||r[Fl]||r[We]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(l),i.head.insertBefore(r,i.querySelector("head > title"))),Pe(r,l,a),r[We]=e,Ke(r),l=r;break e;case"link":var c=pf("link","href",i).get(l+(a.href||""));if(c){for(var p=0;p<c.length;p++)if(r=c[p],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(p,1);break t}}r=i.createElement(l),Pe(r,l,a),i.head.appendChild(r);break;case"meta":if(c=pf("meta","content",i).get(l+(a.content||""))){for(p=0;p<c.length;p++)if(r=c[p],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(p,1);break t}}r=i.createElement(l),Pe(r,l,a),i.head.appendChild(r);break;default:throw Error(d(468,l))}r[We]=e,Ke(r),l=r}e.stateNode=l}else ff(i,e.type,e.stateNode);else e.stateNode=uf(i,l,e.memoizedProps);else r!==l?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,l===null?ff(i,e.type,e.stateNode):uf(i,l,e.memoizedProps)):l===null&&e.stateNode!==null&&fc(e,e.memoizedProps,a.memoizedProps)}break;case 27:st(t,e),ct(e),l&512&&(Ve||a===null||Yt(a,a.return)),a!==null&&l&4&&fc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(st(t,e),ct(e),l&512&&(Ve||a===null||Yt(a,a.return)),e.flags&32){i=e.stateNode;try{ul(i,"")}catch(W){Se(e,e.return,W)}}l&4&&e.stateNode!=null&&(i=e.memoizedProps,fc(e,i,a!==null?a.memoizedProps:i)),l&1024&&(xc=!0);break;case 6:if(st(t,e),ct(e),l&4){if(e.stateNode===null)throw Error(d(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(W){Se(e,e.return,W)}}break;case 3:if(rr=null,i=Mt,Mt=nr(t.containerInfo),st(t,e),Mt=i,ct(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Gl(t.containerInfo)}catch(W){Se(e,e.return,W)}xc&&(xc=!1,pp(e));break;case 4:l=Mt,Mt=nr(e.stateNode.containerInfo),st(t,e),ct(e),Mt=l;break;case 12:st(t,e),ct(e);break;case 31:st(t,e),ct(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Qi(e,l)));break;case 13:st(t,e),ct(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ki=ut()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Qi(e,l)));break;case 22:i=e.memoizedState!==null;var g=a!==null&&a.memoizedState!==null,E=ta,M=Ve;if(ta=E||i,Ve=M||g,st(t,e),Ve=M,ta=E,ct(e),l&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||g||ta||Ve||Pa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){g=a=t;try{if(r=g.stateNode,i)c=r.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{p=g.stateNode;var _=g.memoizedProps.style,A=_!=null&&_.hasOwnProperty("display")?_.display:null;p.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(W){Se(g,g.return,W)}}}else if(t.tag===6){if(a===null){g=t;try{g.stateNode.nodeValue=i?"":g.memoizedProps}catch(W){Se(g,g.return,W)}}}else if(t.tag===18){if(a===null){g=t;try{var C=g.stateNode;i?tf(C,!0):tf(g.stateNode,!1)}catch(W){Se(g,g.return,W)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Qi(e,a))));break;case 19:st(t,e),ct(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Qi(e,l)));break;case 30:break;case 21:break;default:st(t,e),ct(e)}}function ct(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(lp(l)){a=l;break}l=l.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var i=a.stateNode,r=mc(e);Vi(e,r,i);break;case 5:var c=a.stateNode;a.flags&32&&(ul(c,""),a.flags&=-33);var p=mc(e);Vi(e,p,c);break;case 3:case 4:var g=a.stateNode.containerInfo,E=mc(e);hc(e,E,g);break;default:throw Error(d(161))}}catch(M){Se(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;pp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function la(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)rp(e,t.alternate,t),t=t.sibling}function Pa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ka(4,t,t.return),Pa(t);break;case 1:Yt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&tp(t,t.return,a),Pa(t);break;case 27:Mn(t.stateNode);case 26:case 5:Yt(t,t.return),Pa(t);break;case 22:t.memoizedState===null&&Pa(t);break;case 30:Pa(t);break;default:Pa(t)}e=e.sibling}}function na(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,i=e,r=t,c=r.flags;switch(r.tag){case 0:case 11:case 15:na(i,r,a),wn(4,r);break;case 1:if(na(i,r,a),l=r,i=l.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(E){Se(l,l.return,E)}if(l=r,i=l.updateQueue,i!==null){var p=l.stateNode;try{var g=i.shared.hiddenCallbacks;if(g!==null)for(i.shared.hiddenCallbacks=null,i=0;i<g.length;i++)Vd(g[i],p)}catch(E){Se(l,l.return,E)}}a&&c&64&&ep(r),Nn(r,r.return);break;case 27:np(r);case 26:case 5:na(i,r,a),a&&l===null&&c&4&&ap(r),Nn(r,r.return);break;case 12:na(i,r,a);break;case 31:na(i,r,a),a&&c&4&&op(i,r);break;case 13:na(i,r,a),a&&c&4&&dp(i,r);break;case 22:r.memoizedState===null&&na(i,r,a),Nn(r,r.return);break;case 30:break;default:na(i,r,a)}t=t.sibling}}function gc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&dn(a))}function bc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&dn(e))}function Dt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)fp(e,t,a,l),t=t.sibling}function fp(e,t,a,l){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dt(e,t,a,l),i&2048&&wn(9,t);break;case 1:Dt(e,t,a,l);break;case 3:Dt(e,t,a,l),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&dn(e)));break;case 12:if(i&2048){Dt(e,t,a,l),e=t.stateNode;try{var r=t.memoizedProps,c=r.id,p=r.onPostCommit;typeof p=="function"&&p(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){Se(t,t.return,g)}}else Dt(e,t,a,l);break;case 31:Dt(e,t,a,l);break;case 13:Dt(e,t,a,l);break;case 23:break;case 22:r=t.stateNode,c=t.alternate,t.memoizedState!==null?r._visibility&2?Dt(e,t,a,l):Sn(e,t):r._visibility&2?Dt(e,t,a,l):(r._visibility|=2,Cl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),i&2048&&gc(c,t);break;case 24:Dt(e,t,a,l),i&2048&&bc(t.alternate,t);break;default:Dt(e,t,a,l)}}function Cl(e,t,a,l,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,c=t,p=a,g=l,E=c.flags;switch(c.tag){case 0:case 11:case 15:Cl(r,c,p,g,i),wn(8,c);break;case 23:break;case 22:var M=c.stateNode;c.memoizedState!==null?M._visibility&2?Cl(r,c,p,g,i):Sn(r,c):(M._visibility|=2,Cl(r,c,p,g,i)),i&&E&2048&&gc(c.alternate,c);break;case 24:Cl(r,c,p,g,i),i&&E&2048&&bc(c.alternate,c);break;default:Cl(r,c,p,g,i)}t=t.sibling}}function Sn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,i=l.flags;switch(l.tag){case 22:Sn(a,l),i&2048&&gc(l.alternate,l);break;case 24:Sn(a,l),i&2048&&bc(l.alternate,l);break;default:Sn(a,l)}t=t.sibling}}var zn=8192;function Ol(e,t,a){if(e.subtreeFlags&zn)for(e=e.child;e!==null;)mp(e,t,a),e=e.sibling}function mp(e,t,a){switch(e.tag){case 26:Ol(e,t,a),e.flags&zn&&e.memoizedState!==null&&Lx(a,Mt,e.memoizedState,e.memoizedProps);break;case 5:Ol(e,t,a);break;case 3:case 4:var l=Mt;Mt=nr(e.stateNode.containerInfo),Ol(e,t,a),Mt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=zn,zn=16777216,Ol(e,t,a),zn=l):Ol(e,t,a));break;default:Ol(e,t,a)}}function hp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function En(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Xe=l,gp(l,e)}hp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xp(e),e=e.sibling}function xp(e){switch(e.tag){case 0:case 11:case 15:En(e),e.flags&2048&&ka(9,e,e.return);break;case 3:En(e);break;case 12:En(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Zi(e)):En(e);break;default:En(e)}}function Zi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Xe=l,gp(l,e)}hp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ka(8,t,t.return),Zi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Zi(t));break;default:Zi(t)}e=e.sibling}}function gp(e,t){for(;Xe!==null;){var a=Xe;switch(a.tag){case 0:case 11:case 15:ka(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:dn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Xe=l;else e:for(a=e;Xe!==null;){l=Xe;var i=l.sibling,r=l.return;if(sp(l),l===a){Xe=null;break e}if(i!==null){i.return=r,Xe=i;break e}Xe=r}}}var ex={getCacheForType:function(e){var t=$e(Ye),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return $e(Ye).controller.signal}},tx=typeof WeakMap=="function"?WeakMap:Map,we=0,Te=null,pe=null,me=0,Ne=0,bt=null,wa=!1,Ml=!1,vc=!1,ia=0,_e=0,Na=0,el=0,yc=0,vt=0,Dl=0,An=null,ot=null,jc=!1,Ki=0,bp=0,Xi=1/0,Ji=null,Sa=null,Qe=0,za=null,_l=null,ra=0,kc=0,wc=null,vp=null,Tn=0,Nc=null;function yt(){return(we&2)!==0&&me!==0?me&-me:R.T!==null?Rc():_o()}function yp(){if(vt===0)if((me&536870912)===0||xe){var e=ai;ai<<=1,(ai&3932160)===0&&(ai=262144),vt=e}else vt=536870912;return e=xt.current,e!==null&&(e.flags|=32),vt}function dt(e,t,a){(e===Te&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&(Ul(e,0),Ea(e,me,vt,!1)),Wl(e,a),((we&2)===0||e!==Te)&&(e===Te&&((we&2)===0&&(el|=a),_e===4&&Ea(e,me,vt,!1)),qt(e))}function jp(e,t,a){if((we&6)!==0)throw Error(d(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Jl(e,t),i=l?nx(e,t):zc(e,t,!0),r=l;do{if(i===0){Ml&&!l&&Ea(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!ax(a)){i=zc(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var p=e;i=An;var g=p.current.memoizedState.isDehydrated;if(g&&(Ul(p,c).flags|=256),c=zc(p,c,!1),c!==2){if(vc&&!g){p.errorRecoveryDisabledLanes|=r,el|=r,i=4;break e}r=ot,ot=i,r!==null&&(ot===null?ot=r:ot.push.apply(ot,r))}i=c}if(r=!1,i!==2)continue}}if(i===1){Ul(e,0),Ea(e,t,0,!0);break}e:{switch(l=e,r=i,r){case 0:case 1:throw Error(d(345));case 4:if((t&4194048)!==t)break;case 6:Ea(l,t,vt,!wa);break e;case 2:ot=null;break;case 3:case 5:break;default:throw Error(d(329))}if((t&62914560)===t&&(i=Ki+300-ut(),10<i)){if(Ea(l,t,vt,!wa),ni(l,0,!0)!==0)break e;ra=t,l.timeoutHandle=Ip(kp.bind(null,l,a,ot,Ji,jc,t,vt,el,Dl,wa,r,"Throttled",-0,0),i);break e}kp(l,a,ot,Ji,jc,t,vt,el,Dl,wa,r,null,-0,0)}}break}while(!0);qt(e)}function kp(e,t,a,l,i,r,c,p,g,E,M,_,A,C){if(e.timeoutHandle=-1,_=t.subtreeFlags,_&8192||(_&16785408)===16785408){_={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zt},mp(t,r,_);var W=(r&62914560)===r?Ki-ut():(r&4194048)===r?bp-ut():0;if(W=Yx(_,W),W!==null){ra=r,e.cancelPendingCommit=W(Rp.bind(null,e,t,r,a,l,i,c,p,g,M,_,null,A,C)),Ea(e,r,c,!E);return}}Rp(e,t,r,a,l,i,c,p,g)}function ax(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var i=a[l],r=i.getSnapshot;i=i.value;try{if(!mt(r(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ea(e,t,a,l){t&=~yc,t&=~el,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var i=t;0<i;){var r=31-ft(i),c=1<<r;l[r]=-1,i&=~c}a!==0&&Oo(e,a,t)}function Wi(){return(we&6)===0?(Rn(0),!1):!0}function Sc(){if(pe!==null){if(Ne===0)var e=pe.return;else e=pe,Wt=Za=null,qs(e),zl=null,pn=0,e=pe;for(;e!==null;)Pu(e.alternate,e),e=e.return;pe=null}}function Ul(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,kx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ra=0,Sc(),Te=e,pe=a=Xt(e.current,null),me=t,Ne=0,bt=null,wa=!1,Ml=Jl(e,t),vc=!1,Dl=vt=yc=el=Na=_e=0,ot=An=null,jc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var i=31-ft(l),r=1<<i;t|=e[i],l&=~r}return ia=t,xi(),a}function wp(e,t){oe=null,R.H=yn,t===Sl||t===Ni?(t=Ld(),Ne=3):t===Ts?(t=Ld(),Ne=4):Ne=t===lc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,bt=t,pe===null&&(_e=1,Hi(e,Nt(t,e.current)))}function Np(){var e=xt.current;return e===null?!0:(me&4194048)===me?At===null:(me&62914560)===me||(me&536870912)!==0?e===At:!1}function Sp(){var e=R.H;return R.H=yn,e===null?yn:e}function zp(){var e=R.A;return R.A=ex,e}function Fi(){_e=4,wa||(me&4194048)!==me&&xt.current!==null||(Ml=!0),(Na&134217727)===0&&(el&134217727)===0||Te===null||Ea(Te,me,vt,!1)}function zc(e,t,a){var l=we;we|=2;var i=Sp(),r=zp();(Te!==e||me!==t)&&(Ji=null,Ul(e,t)),t=!1;var c=_e;e:do try{if(Ne!==0&&pe!==null){var p=pe,g=bt;switch(Ne){case 8:Sc(),c=6;break e;case 3:case 2:case 9:case 6:xt.current===null&&(t=!0);var E=Ne;if(Ne=0,bt=null,Bl(e,p,g,E),a&&Ml){c=0;break e}break;default:E=Ne,Ne=0,bt=null,Bl(e,p,g,E)}}lx(),c=_e;break}catch(M){wp(e,M)}while(!0);return t&&e.shellSuspendCounter++,Wt=Za=null,we=l,R.H=i,R.A=r,pe===null&&(Te=null,me=0,xi()),c}function lx(){for(;pe!==null;)Ep(pe)}function nx(e,t){var a=we;we|=2;var l=Sp(),i=zp();Te!==e||me!==t?(Ji=null,Xi=ut()+500,Ul(e,t)):Ml=Jl(e,t);e:do try{if(Ne!==0&&pe!==null){t=pe;var r=bt;t:switch(Ne){case 1:Ne=0,bt=null,Bl(e,t,r,1);break;case 2:case 9:if(Bd(r)){Ne=0,bt=null,Ap(t);break}t=function(){Ne!==2&&Ne!==9||Te!==e||(Ne=7),qt(e)},r.then(t,t);break e;case 3:Ne=7;break e;case 4:Ne=5;break e;case 7:Bd(r)?(Ne=0,bt=null,Ap(t)):(Ne=0,bt=null,Bl(e,t,r,7));break;case 5:var c=null;switch(pe.tag){case 26:c=pe.memoizedState;case 5:case 27:var p=pe;if(c?mf(c):p.stateNode.complete){Ne=0,bt=null;var g=p.sibling;if(g!==null)pe=g;else{var E=p.return;E!==null?(pe=E,$i(E)):pe=null}break t}}Ne=0,bt=null,Bl(e,t,r,5);break;case 6:Ne=0,bt=null,Bl(e,t,r,6);break;case 8:Sc(),_e=6;break e;default:throw Error(d(462))}}ix();break}catch(M){wp(e,M)}while(!0);return Wt=Za=null,R.H=l,R.A=i,we=a,pe!==null?0:(Te=null,me=0,xi(),_e)}function ix(){for(;pe!==null&&!Am();)Ep(pe)}function Ep(e){var t=$u(e.alternate,e,ia);e.memoizedProps=e.pendingProps,t===null?$i(e):pe=t}function Ap(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Zu(a,t,t.pendingProps,t.type,void 0,me);break;case 11:t=Zu(a,t,t.pendingProps,t.type.render,t.ref,me);break;case 5:qs(t);default:Pu(a,t),t=pe=zd(t,ia),t=$u(a,t,ia)}e.memoizedProps=e.pendingProps,t===null?$i(e):pe=t}function Bl(e,t,a,l){Wt=Za=null,qs(t),zl=null,pn=0;var i=t.return;try{if(Xh(e,i,t,a,me)){_e=1,Hi(e,Nt(a,e.current)),pe=null;return}}catch(r){if(i!==null)throw pe=i,r;_e=1,Hi(e,Nt(a,e.current)),pe=null;return}t.flags&32768?(xe||l===1?e=!0:Ml||(me&536870912)!==0?e=!1:(wa=e=!0,(l===2||l===9||l===3||l===6)&&(l=xt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Tp(t,e)):$i(t)}function $i(e){var t=e;do{if((t.flags&32768)!==0){Tp(t,wa);return}e=t.return;var a=Fh(t.alternate,t,ia);if(a!==null){pe=a;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);_e===0&&(_e=5)}function Tp(e,t){do{var a=$h(e.alternate,e);if(a!==null){a.flags&=32767,pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){pe=e;return}pe=e=a}while(e!==null);_e=6,pe=null}function Rp(e,t,a,l,i,r,c,p,g){e.cancelPendingCommit=null;do Ii();while(Qe!==0);if((we&6)!==0)throw Error(d(327));if(t!==null){if(t===e.current)throw Error(d(177));if(r=t.lanes|t.childLanes,r|=ms,Hm(e,a,r,c,p,g),e===Te&&(pe=Te=null,me=0),_l=t,za=e,ra=a,kc=r,wc=i,vp=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ox(ei,function(){return _p(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=R.T,R.T=null,i=G.p,G.p=2,c=we,we|=4;try{Ih(e,t,a)}finally{we=c,G.p=i,R.T=l}}Qe=1,Cp(),Op(),Mp()}}function Cp(){if(Qe===1){Qe=0;var e=za,t=_l,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=R.T,R.T=null;var l=G.p;G.p=2;var i=we;we|=4;try{up(t,e);var r=Hc,c=gd(e.containerInfo),p=r.focusedElem,g=r.selectionRange;if(c!==p&&p&&p.ownerDocument&&xd(p.ownerDocument.documentElement,p)){if(g!==null&&os(p)){var E=g.start,M=g.end;if(M===void 0&&(M=E),"selectionStart"in p)p.selectionStart=E,p.selectionEnd=Math.min(M,p.value.length);else{var _=p.ownerDocument||document,A=_&&_.defaultView||window;if(A.getSelection){var C=A.getSelection(),W=p.textContent.length,ae=Math.min(g.start,W),Ae=g.end===void 0?ae:Math.min(g.end,W);!C.extend&&ae>Ae&&(c=Ae,Ae=ae,ae=c);var N=hd(p,ae),j=hd(p,Ae);if(N&&j&&(C.rangeCount!==1||C.anchorNode!==N.node||C.anchorOffset!==N.offset||C.focusNode!==j.node||C.focusOffset!==j.offset)){var z=_.createRange();z.setStart(N.node,N.offset),C.removeAllRanges(),ae>Ae?(C.addRange(z),C.extend(j.node,j.offset)):(z.setEnd(j.node,j.offset),C.addRange(z))}}}}for(_=[],C=p;C=C.parentNode;)C.nodeType===1&&_.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<_.length;p++){var D=_[p];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}dr=!!Bc,Hc=Bc=null}finally{we=i,G.p=l,R.T=a}}e.current=t,Qe=2}}function Op(){if(Qe===2){Qe=0;var e=za,t=_l,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=R.T,R.T=null;var l=G.p;G.p=2;var i=we;we|=4;try{rp(e,t.alternate,t)}finally{we=i,G.p=l,R.T=a}}Qe=3}}function Mp(){if(Qe===4||Qe===3){Qe=0,Tm();var e=za,t=_l,a=ra,l=vp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Qe=5:(Qe=0,_l=za=null,Dp(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Sa=null),Qr(a),t=t.stateNode,pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(Xl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=R.T,i=G.p,G.p=2,R.T=null;try{for(var r=e.onRecoverableError,c=0;c<l.length;c++){var p=l[c];r(p.value,{componentStack:p.stack})}}finally{R.T=t,G.p=i}}(ra&3)!==0&&Ii(),qt(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===Nc?Tn++:(Tn=0,Nc=e):Tn=0,Rn(0)}}function Dp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,dn(t)))}function Ii(){return Cp(),Op(),Mp(),_p()}function _p(){if(Qe!==5)return!1;var e=za,t=kc;kc=0;var a=Qr(ra),l=R.T,i=G.p;try{G.p=32>a?32:a,R.T=null,a=wc,wc=null;var r=za,c=ra;if(Qe=0,_l=za=null,ra=0,(we&6)!==0)throw Error(d(331));var p=we;if(we|=4,xp(r.current),fp(r,r.current,c,a),we=p,Rn(0,!1),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(Xl,r)}catch{}return!0}finally{G.p=i,R.T=l,Dp(e,t)}}function Up(e,t,a){t=Nt(a,t),t=ac(e.stateNode,t,2),e=va(e,t,2),e!==null&&(Wl(e,2),qt(e))}function Se(e,t,a){if(e.tag===3)Up(e,e,a);else for(;t!==null;){if(t.tag===3){Up(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Sa===null||!Sa.has(l))){e=Nt(a,e),a=Bu(2),l=va(t,a,2),l!==null&&(Hu(a,l,t,e),Wl(l,2),qt(l));break}}t=t.return}}function Ec(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new tx;var i=new Set;l.set(t,i)}else i=l.get(t),i===void 0&&(i=new Set,l.set(t,i));i.has(a)||(vc=!0,i.add(a),e=rx.bind(null,e,t,a),t.then(e,e))}function rx(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Te===e&&(me&a)===a&&(_e===4||_e===3&&(me&62914560)===me&&300>ut()-Ki?(we&2)===0&&Ul(e,0):yc|=a,Dl===me&&(Dl=0)),qt(e)}function Bp(e,t){t===0&&(t=Co()),e=Ga(e,t),e!==null&&(Wl(e,t),qt(e))}function sx(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Bp(e,a)}function cx(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(d(314))}l!==null&&l.delete(t),Bp(e,a)}function ox(e,t){return Yr(e,t)}var Pi=null,Hl=null,Ac=!1,er=!1,Tc=!1,Aa=0;function qt(e){e!==Hl&&e.next===null&&(Hl===null?Pi=Hl=e:Hl=Hl.next=e),er=!0,Ac||(Ac=!0,ux())}function Rn(e,t){if(!Tc&&er){Tc=!0;do for(var a=!1,l=Pi;l!==null;){if(e!==0){var i=l.pendingLanes;if(i===0)var r=0;else{var c=l.suspendedLanes,p=l.pingedLanes;r=(1<<31-ft(42|e)+1)-1,r&=i&~(c&~p),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,qp(l,r))}else r=me,r=ni(l,l===Te?r:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(r&3)===0||Jl(l,r)||(a=!0,qp(l,r));l=l.next}while(a);Tc=!1}}function dx(){Hp()}function Hp(){er=Ac=!1;var e=0;Aa!==0&&jx()&&(e=Aa);for(var t=ut(),a=null,l=Pi;l!==null;){var i=l.next,r=Lp(l,t);r===0?(l.next=null,a===null?Pi=i:a.next=i,i===null&&(Hl=a)):(a=l,(e!==0||(r&3)!==0)&&(er=!0)),l=i}Qe!==0&&Qe!==5||Rn(e),Aa!==0&&(Aa=0)}function Lp(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var c=31-ft(r),p=1<<c,g=i[c];g===-1?((p&a)===0||(p&l)!==0)&&(i[c]=Bm(p,t)):g<=t&&(e.expiredLanes|=p),r&=~p}if(t=Te,a=me,a=ni(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&qr(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Jl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&qr(l),Qr(a)){case 2:case 8:a=To;break;case 32:a=ei;break;case 268435456:a=Ro;break;default:a=ei}return l=Yp.bind(null,e),a=Yr(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&qr(l),e.callbackPriority=2,e.callbackNode=null,2}function Yp(e,t){if(Qe!==0&&Qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ii()&&e.callbackNode!==a)return null;var l=me;return l=ni(e,e===Te?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(jp(e,l,t),Lp(e,ut()),e.callbackNode!=null&&e.callbackNode===a?Yp.bind(null,e):null)}function qp(e,t){if(Ii())return null;jp(e,t,!0)}function ux(){wx(function(){(we&6)!==0?Yr(Ao,dx):Hp()})}function Rc(){if(Aa===0){var e=wl;e===0&&(e=ti,ti<<=1,(ti&261888)===0&&(ti=256)),Aa=e}return Aa}function Gp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ci(""+e)}function Vp(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function px(e,t,a,l,i){if(t==="submit"&&a&&a.stateNode===i){var r=Gp((i[nt]||null).action),c=l.submitter;c&&(t=(t=c[nt]||null)?Gp(t.formAction):c.getAttribute("formAction"),t!==null&&(r=t,c=null));var p=new pi("action","action",null,l,i);e.push({event:p,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Aa!==0){var g=c?Vp(i,c):new FormData(i);Fs(a,{pending:!0,data:g,method:i.method,action:r},null,g)}}else typeof r=="function"&&(p.preventDefault(),g=c?Vp(i,c):new FormData(i),Fs(a,{pending:!0,data:g,method:i.method,action:r},r,g))},currentTarget:i}]})}}for(var Cc=0;Cc<fs.length;Cc++){var Oc=fs[Cc],fx=Oc.toLowerCase(),mx=Oc[0].toUpperCase()+Oc.slice(1);Ot(fx,"on"+mx)}Ot(yd,"onAnimationEnd"),Ot(jd,"onAnimationIteration"),Ot(kd,"onAnimationStart"),Ot("dblclick","onDoubleClick"),Ot("focusin","onFocus"),Ot("focusout","onBlur"),Ot(Rh,"onTransitionRun"),Ot(Ch,"onTransitionStart"),Ot(Oh,"onTransitionCancel"),Ot(wd,"onTransitionEnd"),ol("onMouseEnter",["mouseout","mouseover"]),ol("onMouseLeave",["mouseout","mouseover"]),ol("onPointerEnter",["pointerout","pointerover"]),ol("onPointerLeave",["pointerout","pointerover"]),Ha("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ha("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ha("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ha("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ha("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ha("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Cn));function Qp(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],i=l.event;l=l.listeners;e:{var r=void 0;if(t)for(var c=l.length-1;0<=c;c--){var p=l[c],g=p.instance,E=p.currentTarget;if(p=p.listener,g!==r&&i.isPropagationStopped())break e;r=p,i.currentTarget=E;try{r(i)}catch(M){hi(M)}i.currentTarget=null,r=g}else for(c=0;c<l.length;c++){if(p=l[c],g=p.instance,E=p.currentTarget,p=p.listener,g!==r&&i.isPropagationStopped())break e;r=p,i.currentTarget=E;try{r(i)}catch(M){hi(M)}i.currentTarget=null,r=g}}}}function fe(e,t){var a=t[Zr];a===void 0&&(a=t[Zr]=new Set);var l=e+"__bubble";a.has(l)||(Zp(t,e,2,!1),a.add(l))}function Mc(e,t,a){var l=0;t&&(l|=4),Zp(a,e,l,t)}var tr="_reactListening"+Math.random().toString(36).slice(2);function Dc(e){if(!e[tr]){e[tr]=!0,Ho.forEach(function(a){a!=="selectionchange"&&(hx.has(a)||Mc(a,!1,e),Mc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[tr]||(t[tr]=!0,Mc("selectionchange",!1,t))}}function Zp(e,t,a,l){switch(jf(t)){case 2:var i=Vx;break;case 8:i=Qx;break;default:i=Wc}a=i.bind(null,t,a,e),i=void 0,!es||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),l?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function _c(e,t,a,l,i){var r=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var p=l.stateNode.containerInfo;if(p===i)break;if(c===4)for(c=l.return;c!==null;){var g=c.tag;if((g===3||g===4)&&c.stateNode.containerInfo===i)return;c=c.return}for(;p!==null;){if(c=rl(p),c===null)return;if(g=c.tag,g===5||g===6||g===26||g===27){l=r=c;continue e}p=p.parentNode}}l=l.return}Fo(function(){var E=r,M=Ir(a),_=[];e:{var A=Nd.get(e);if(A!==void 0){var C=pi,W=e;switch(e){case"keypress":if(di(a)===0)break e;case"keydown":case"keyup":C=ch;break;case"focusin":W="focus",C=ns;break;case"focusout":W="blur",C=ns;break;case"beforeblur":case"afterblur":C=ns;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Po;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=Fm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=uh;break;case yd:case jd:case kd:C=Pm;break;case wd:C=fh;break;case"scroll":case"scrollend":C=Jm;break;case"wheel":C=hh;break;case"copy":case"cut":case"paste":C=th;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=td;break;case"toggle":case"beforetoggle":C=gh}var ae=(t&4)!==0,Ae=!ae&&(e==="scroll"||e==="scrollend"),N=ae?A!==null?A+"Capture":null:A;ae=[];for(var j=E,z;j!==null;){var D=j;if(z=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||z===null||N===null||(D=Il(j,N),D!=null&&ae.push(On(j,D,z))),Ae)break;j=j.return}0<ae.length&&(A=new C(A,W,null,a,M),_.push({event:A,listeners:ae}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",A&&a!==$r&&(W=a.relatedTarget||a.fromElement)&&(rl(W)||W[il]))break e;if((C||A)&&(A=M.window===M?M:(A=M.ownerDocument)?A.defaultView||A.parentWindow:window,C?(W=a.relatedTarget||a.toElement,C=E,W=W?rl(W):null,W!==null&&(Ae=m(W),ae=W.tag,W!==Ae||ae!==5&&ae!==27&&ae!==6)&&(W=null)):(C=null,W=E),C!==W)){if(ae=Po,D="onMouseLeave",N="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(ae=td,D="onPointerLeave",N="onPointerEnter",j="pointer"),Ae=C==null?A:$l(C),z=W==null?A:$l(W),A=new ae(D,j+"leave",C,a,M),A.target=Ae,A.relatedTarget=z,D=null,rl(M)===E&&(ae=new ae(N,j+"enter",W,a,M),ae.target=z,ae.relatedTarget=Ae,D=ae),Ae=D,C&&W)t:{for(ae=xx,N=C,j=W,z=0,D=N;D;D=ae(D))z++;D=0;for(var te=j;te;te=ae(te))D++;for(;0<z-D;)N=ae(N),z--;for(;0<D-z;)j=ae(j),D--;for(;z--;){if(N===j||j!==null&&N===j.alternate){ae=N;break t}N=ae(N),j=ae(j)}ae=null}else ae=null;C!==null&&Kp(_,A,C,ae,!1),W!==null&&Ae!==null&&Kp(_,Ae,W,ae,!0)}}e:{if(A=E?$l(E):window,C=A.nodeName&&A.nodeName.toLowerCase(),C==="select"||C==="input"&&A.type==="file")var ve=od;else if(sd(A))if(dd)ve=Eh;else{ve=Sh;var I=Nh}else C=A.nodeName,!C||C.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?E&&Fr(E.elementType)&&(ve=od):ve=zh;if(ve&&(ve=ve(e,E))){cd(_,ve,a,M);break e}I&&I(e,A,E),e==="focusout"&&E&&A.type==="number"&&E.memoizedProps.value!=null&&Wr(A,"number",A.value)}switch(I=E?$l(E):window,e){case"focusin":(sd(I)||I.contentEditable==="true")&&(hl=I,ds=E,sn=null);break;case"focusout":sn=ds=hl=null;break;case"mousedown":us=!0;break;case"contextmenu":case"mouseup":case"dragend":us=!1,bd(_,a,M);break;case"selectionchange":if(Th)break;case"keydown":case"keyup":bd(_,a,M)}var de;if(rs)e:{switch(e){case"compositionstart":var he="onCompositionStart";break e;case"compositionend":he="onCompositionEnd";break e;case"compositionupdate":he="onCompositionUpdate";break e}he=void 0}else ml?id(e,a)&&(he="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(he="onCompositionStart");he&&(ad&&a.locale!=="ko"&&(ml||he!=="onCompositionStart"?he==="onCompositionEnd"&&ml&&(de=$o()):(pa=M,ts="value"in pa?pa.value:pa.textContent,ml=!0)),I=ar(E,he),0<I.length&&(he=new ed(he,e,null,a,M),_.push({event:he,listeners:I}),de?he.data=de:(de=rd(a),de!==null&&(he.data=de)))),(de=vh?yh(e,a):jh(e,a))&&(he=ar(E,"onBeforeInput"),0<he.length&&(I=new ed("onBeforeInput","beforeinput",null,a,M),_.push({event:I,listeners:he}),I.data=de)),px(_,e,E,a,M)}Qp(_,t)})}function On(e,t,a){return{instance:e,listener:t,currentTarget:a}}function ar(e,t){for(var a=t+"Capture",l=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=Il(e,a),i!=null&&l.unshift(On(e,i,r)),i=Il(e,t),i!=null&&l.push(On(e,i,r))),e.tag===3)return l;e=e.return}return[]}function xx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Kp(e,t,a,l,i){for(var r=t._reactName,c=[];a!==null&&a!==l;){var p=a,g=p.alternate,E=p.stateNode;if(p=p.tag,g!==null&&g===l)break;p!==5&&p!==26&&p!==27||E===null||(g=E,i?(E=Il(a,r),E!=null&&c.unshift(On(a,E,g))):i||(E=Il(a,r),E!=null&&c.push(On(a,E,g)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var gx=/\r\n?/g,bx=/\u0000|\uFFFD/g;function Xp(e){return(typeof e=="string"?e:""+e).replace(gx,`
`).replace(bx,"")}function Jp(e,t){return t=Xp(t),Xp(e)===t}function Ee(e,t,a,l,i,r){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||ul(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&ul(e,""+l);break;case"className":ri(e,"class",l);break;case"tabIndex":ri(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ri(e,a,l);break;case"style":Jo(e,l,r);break;case"data":if(t!=="object"){ri(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ci(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&Ee(e,t,"name",i.name,i,null),Ee(e,t,"formEncType",i.formEncType,i,null),Ee(e,t,"formMethod",i.formMethod,i,null),Ee(e,t,"formTarget",i.formTarget,i,null)):(Ee(e,t,"encType",i.encType,i,null),Ee(e,t,"method",i.method,i,null),Ee(e,t,"target",i.target,i,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ci(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Zt);break;case"onScroll":l!=null&&fe("scroll",e);break;case"onScrollEnd":l!=null&&fe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=ci(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":fe("beforetoggle",e),fe("toggle",e),ii(e,"popover",l);break;case"xlinkActuate":Qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Qt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Qt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Qt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Qt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ii(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Km.get(a)||a,ii(e,a,l))}}function Uc(e,t,a,l,i,r){switch(a){case"style":Jo(e,l,r);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"children":typeof l=="string"?ul(e,l):(typeof l=="number"||typeof l=="bigint")&&ul(e,""+l);break;case"onScroll":l!=null&&fe("scroll",e);break;case"onScrollEnd":l!=null&&fe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Zt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Lo.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),r=e[nt]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof l=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,i);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):ii(e,a,l)}}}function Pe(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":fe("error",e),fe("load",e);var l=!1,i=!1,r;for(r in a)if(a.hasOwnProperty(r)){var c=a[r];if(c!=null)switch(r){case"src":l=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:Ee(e,t,r,c,a,null)}}i&&Ee(e,t,"srcSet",a.srcSet,a,null),l&&Ee(e,t,"src",a.src,a,null);return;case"input":fe("invalid",e);var p=r=c=i=null,g=null,E=null;for(l in a)if(a.hasOwnProperty(l)){var M=a[l];if(M!=null)switch(l){case"name":i=M;break;case"type":c=M;break;case"checked":g=M;break;case"defaultChecked":E=M;break;case"value":r=M;break;case"defaultValue":p=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(d(137,t));break;default:Ee(e,t,l,M,a,null)}}Qo(e,r,p,g,E,c,i,!1);return;case"select":fe("invalid",e),l=c=r=null;for(i in a)if(a.hasOwnProperty(i)&&(p=a[i],p!=null))switch(i){case"value":r=p;break;case"defaultValue":c=p;break;case"multiple":l=p;default:Ee(e,t,i,p,a,null)}t=r,a=c,e.multiple=!!l,t!=null?dl(e,!!l,t,!1):a!=null&&dl(e,!!l,a,!0);return;case"textarea":fe("invalid",e),r=i=l=null;for(c in a)if(a.hasOwnProperty(c)&&(p=a[c],p!=null))switch(c){case"value":l=p;break;case"defaultValue":i=p;break;case"children":r=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(d(91));break;default:Ee(e,t,c,p,a,null)}Ko(e,l,i,r);return;case"option":for(g in a)a.hasOwnProperty(g)&&(l=a[g],l!=null)&&(g==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Ee(e,t,g,l,a,null));return;case"dialog":fe("beforetoggle",e),fe("toggle",e),fe("cancel",e),fe("close",e);break;case"iframe":case"object":fe("load",e);break;case"video":case"audio":for(l=0;l<Cn.length;l++)fe(Cn[l],e);break;case"image":fe("error",e),fe("load",e);break;case"details":fe("toggle",e);break;case"embed":case"source":case"link":fe("error",e),fe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in a)if(a.hasOwnProperty(E)&&(l=a[E],l!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:Ee(e,t,E,l,a,null)}return;default:if(Fr(t)){for(M in a)a.hasOwnProperty(M)&&(l=a[M],l!==void 0&&Uc(e,t,M,l,a,void 0));return}}for(p in a)a.hasOwnProperty(p)&&(l=a[p],l!=null&&Ee(e,t,p,l,a,null))}function vx(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,c=null,p=null,g=null,E=null,M=null;for(C in a){var _=a[C];if(a.hasOwnProperty(C)&&_!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":g=_;default:l.hasOwnProperty(C)||Ee(e,t,C,null,l,_)}}for(var A in l){var C=l[A];if(_=a[A],l.hasOwnProperty(A)&&(C!=null||_!=null))switch(A){case"type":r=C;break;case"name":i=C;break;case"checked":E=C;break;case"defaultChecked":M=C;break;case"value":c=C;break;case"defaultValue":p=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(d(137,t));break;default:C!==_&&Ee(e,t,A,C,l,_)}}Jr(e,c,p,g,E,M,r,i);return;case"select":C=c=p=A=null;for(r in a)if(g=a[r],a.hasOwnProperty(r)&&g!=null)switch(r){case"value":break;case"multiple":C=g;default:l.hasOwnProperty(r)||Ee(e,t,r,null,l,g)}for(i in l)if(r=l[i],g=a[i],l.hasOwnProperty(i)&&(r!=null||g!=null))switch(i){case"value":A=r;break;case"defaultValue":p=r;break;case"multiple":c=r;default:r!==g&&Ee(e,t,i,r,l,g)}t=p,a=c,l=C,A!=null?dl(e,!!a,A,!1):!!l!=!!a&&(t!=null?dl(e,!!a,t,!0):dl(e,!!a,a?[]:"",!1));return;case"textarea":C=A=null;for(p in a)if(i=a[p],a.hasOwnProperty(p)&&i!=null&&!l.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:Ee(e,t,p,null,l,i)}for(c in l)if(i=l[c],r=a[c],l.hasOwnProperty(c)&&(i!=null||r!=null))switch(c){case"value":A=i;break;case"defaultValue":C=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(d(91));break;default:i!==r&&Ee(e,t,c,i,l,r)}Zo(e,A,C);return;case"option":for(var W in a)A=a[W],a.hasOwnProperty(W)&&A!=null&&!l.hasOwnProperty(W)&&(W==="selected"?e.selected=!1:Ee(e,t,W,null,l,A));for(g in l)A=l[g],C=a[g],l.hasOwnProperty(g)&&A!==C&&(A!=null||C!=null)&&(g==="selected"?e.selected=A&&typeof A!="function"&&typeof A!="symbol":Ee(e,t,g,A,l,C));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)A=a[ae],a.hasOwnProperty(ae)&&A!=null&&!l.hasOwnProperty(ae)&&Ee(e,t,ae,null,l,A);for(E in l)if(A=l[E],C=a[E],l.hasOwnProperty(E)&&A!==C&&(A!=null||C!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(d(137,t));break;default:Ee(e,t,E,A,l,C)}return;default:if(Fr(t)){for(var Ae in a)A=a[Ae],a.hasOwnProperty(Ae)&&A!==void 0&&!l.hasOwnProperty(Ae)&&Uc(e,t,Ae,void 0,l,A);for(M in l)A=l[M],C=a[M],!l.hasOwnProperty(M)||A===C||A===void 0&&C===void 0||Uc(e,t,M,A,l,C);return}}for(var N in a)A=a[N],a.hasOwnProperty(N)&&A!=null&&!l.hasOwnProperty(N)&&Ee(e,t,N,null,l,A);for(_ in l)A=l[_],C=a[_],!l.hasOwnProperty(_)||A===C||A==null&&C==null||Ee(e,t,_,A,l,C)}function Wp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function yx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var i=a[l],r=i.transferSize,c=i.initiatorType,p=i.duration;if(r&&p&&Wp(c)){for(c=0,p=i.responseEnd,l+=1;l<a.length;l++){var g=a[l],E=g.startTime;if(E>p)break;var M=g.transferSize,_=g.initiatorType;M&&Wp(_)&&(g=g.responseEnd,c+=M*(g<p?1:(p-E)/(g-E)))}if(--l,t+=8*(r+c)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Bc=null,Hc=null;function lr(e){return e.nodeType===9?e:e.ownerDocument}function Fp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $p(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Lc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yc=null;function jx(){var e=window.event;return e&&e.type==="popstate"?e===Yc?!1:(Yc=e,!0):(Yc=null,!1)}var Ip=typeof setTimeout=="function"?setTimeout:void 0,kx=typeof clearTimeout=="function"?clearTimeout:void 0,Pp=typeof Promise=="function"?Promise:void 0,wx=typeof queueMicrotask=="function"?queueMicrotask:typeof Pp<"u"?function(e){return Pp.resolve(null).then(e).catch(Nx)}:Ip;function Nx(e){setTimeout(function(){throw e})}function Ta(e){return e==="head"}function ef(e,t){var a=t,l=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(i),Gl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Mn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Mn(a);for(var r=a.firstChild;r;){var c=r.nextSibling,p=r.nodeName;r[Fl]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=c}}else a==="body"&&Mn(e.ownerDocument.body);a=i}while(a);Gl(t)}function tf(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function qc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":qc(a),Kr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Sx(e,t,a,l){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Fl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Tt(e.nextSibling),e===null)break}return null}function zx(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Tt(e.nextSibling),e===null))return null;return e}function af(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Tt(e.nextSibling),e===null))return null;return e}function Gc(e){return e.data==="$?"||e.data==="$~"}function Vc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ex(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Tt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Qc=null;function lf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Tt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function nf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function rf(e,t,a){switch(t=lr(a),e){case"html":if(e=t.documentElement,!e)throw Error(d(452));return e;case"head":if(e=t.head,!e)throw Error(d(453));return e;case"body":if(e=t.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function Mn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Kr(e)}var Rt=new Map,sf=new Set;function nr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var sa=G.d;G.d={f:Ax,r:Tx,D:Rx,C:Cx,L:Ox,m:Mx,X:_x,S:Dx,M:Ux};function Ax(){var e=sa.f(),t=Wi();return e||t}function Tx(e){var t=sl(e);t!==null&&t.tag===5&&t.type==="form"?wu(t):sa.r(e)}var Ll=typeof document>"u"?null:document;function cf(e,t,a){var l=Ll;if(l&&typeof t=="string"&&t){var i=kt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),sf.has(i)||(sf.add(i),e={rel:e,crossOrigin:a,href:t},l.querySelector(i)===null&&(t=l.createElement("link"),Pe(t,"link",e),Ke(t),l.head.appendChild(t)))}}function Rx(e){sa.D(e),cf("dns-prefetch",e,null)}function Cx(e,t){sa.C(e,t),cf("preconnect",e,t)}function Ox(e,t,a){sa.L(e,t,a);var l=Ll;if(l&&e&&t){var i='link[rel="preload"][as="'+kt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+kt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+kt(a.imageSizes)+'"]')):i+='[href="'+kt(e)+'"]';var r=i;switch(t){case"style":r=Yl(e);break;case"script":r=ql(e)}Rt.has(r)||(e=w({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Rt.set(r,e),l.querySelector(i)!==null||t==="style"&&l.querySelector(Dn(r))||t==="script"&&l.querySelector(_n(r))||(t=l.createElement("link"),Pe(t,"link",e),Ke(t),l.head.appendChild(t)))}}function Mx(e,t){sa.m(e,t);var a=Ll;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+kt(l)+'"][href="'+kt(e)+'"]',r=i;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=ql(e)}if(!Rt.has(r)&&(e=w({rel:"modulepreload",href:e},t),Rt.set(r,e),a.querySelector(i)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(_n(r)))return}l=a.createElement("link"),Pe(l,"link",e),Ke(l),a.head.appendChild(l)}}}function Dx(e,t,a){sa.S(e,t,a);var l=Ll;if(l&&e){var i=cl(l).hoistableStyles,r=Yl(e);t=t||"default";var c=i.get(r);if(!c){var p={loading:0,preload:null};if(c=l.querySelector(Dn(r)))p.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Rt.get(r))&&Zc(e,a);var g=c=l.createElement("link");Ke(g),Pe(g,"link",e),g._p=new Promise(function(E,M){g.onload=E,g.onerror=M}),g.addEventListener("load",function(){p.loading|=1}),g.addEventListener("error",function(){p.loading|=2}),p.loading|=4,ir(c,t,l)}c={type:"stylesheet",instance:c,count:1,state:p},i.set(r,c)}}}function _x(e,t){sa.X(e,t);var a=Ll;if(a&&e){var l=cl(a).hoistableScripts,i=ql(e),r=l.get(i);r||(r=a.querySelector(_n(i)),r||(e=w({src:e,async:!0},t),(t=Rt.get(i))&&Kc(e,t),r=a.createElement("script"),Ke(r),Pe(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(i,r))}}function Ux(e,t){sa.M(e,t);var a=Ll;if(a&&e){var l=cl(a).hoistableScripts,i=ql(e),r=l.get(i);r||(r=a.querySelector(_n(i)),r||(e=w({src:e,async:!0,type:"module"},t),(t=Rt.get(i))&&Kc(e,t),r=a.createElement("script"),Ke(r),Pe(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(i,r))}}function of(e,t,a,l){var i=(i=ue.current)?nr(i):null;if(!i)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Yl(a.href),a=cl(i).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Yl(a.href);var r=cl(i).hoistableStyles,c=r.get(e);if(c||(i=i.ownerDocument||i,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,c),(r=i.querySelector(Dn(e)))&&!r._p&&(c.instance=r,c.state.loading=5),Rt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Rt.set(e,a),r||Bx(i,e,a,c.state))),t&&l===null)throw Error(d(528,""));return c}if(t&&l!==null)throw Error(d(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ql(a),a=cl(i).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function Yl(e){return'href="'+kt(e)+'"'}function Dn(e){return'link[rel="stylesheet"]['+e+"]"}function df(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function Bx(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Pe(t,"link",a),Ke(t),e.head.appendChild(t))}function ql(e){return'[src="'+kt(e)+'"]'}function _n(e){return"script[async]"+e}function uf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+kt(a.href)+'"]');if(l)return t.instance=l,Ke(l),l;var i=w({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ke(l),Pe(l,"style",i),ir(l,a.precedence,e),t.instance=l;case"stylesheet":i=Yl(a.href);var r=e.querySelector(Dn(i));if(r)return t.state.loading|=4,t.instance=r,Ke(r),r;l=df(a),(i=Rt.get(i))&&Zc(l,i),r=(e.ownerDocument||e).createElement("link"),Ke(r);var c=r;return c._p=new Promise(function(p,g){c.onload=p,c.onerror=g}),Pe(r,"link",l),t.state.loading|=4,ir(r,a.precedence,e),t.instance=r;case"script":return r=ql(a.src),(i=e.querySelector(_n(r)))?(t.instance=i,Ke(i),i):(l=a,(i=Rt.get(r))&&(l=w({},a),Kc(l,i)),e=e.ownerDocument||e,i=e.createElement("script"),Ke(i),Pe(i,"link",l),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(d(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,ir(l,a.precedence,e));return t.instance}function ir(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=l.length?l[l.length-1]:null,r=i,c=0;c<l.length;c++){var p=l[c];if(p.dataset.precedence===t)r=p;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Zc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Kc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var rr=null;function pf(e,t,a){if(rr===null){var l=new Map,i=rr=new Map;i.set(a,l)}else i=rr,l=i.get(a),l||(l=new Map,i.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var r=a[i];if(!(r[Fl]||r[We]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var c=r.getAttribute(t)||"";c=e+c;var p=l.get(c);p?p.push(r):l.set(c,[r])}}return l}function ff(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Hx(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function mf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Lx(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=Yl(l.href),r=t.querySelector(Dn(i));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=sr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,Ke(r);return}r=t.ownerDocument||t,l=df(l),(i=Rt.get(i))&&Zc(l,i),r=r.createElement("link"),Ke(r);var c=r;c._p=new Promise(function(p,g){c.onload=p,c.onerror=g}),Pe(r,"link",l),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=sr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Xc=0;function Yx(e,t){return e.stylesheets&&e.count===0&&or(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&or(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&Xc===0&&(Xc=62500*yx());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&or(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Xc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(i)}}:null}function sr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)or(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var cr=null;function or(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,cr=new Map,t.forEach(qx,e),cr=null,sr.call(e))}function qx(e,t){if(!(t.state.loading&4)){var a=cr.get(e);if(a)var l=a.get(null);else{a=new Map,cr.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var c=i[r];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),l=c)}l&&a.set(null,l)}i=t.instance,c=i.getAttribute("data-precedence"),r=a.get(c)||l,r===l&&a.set(null,i),a.set(c,i),this.count++,l=sr.bind(this),i.addEventListener("load",l),i.addEventListener("error",l),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Un={$$typeof:Y,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function Gx(e,t,a,l,i,r,c,p,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Gr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gr(0),this.hiddenUpdates=Gr(null),this.identifierPrefix=l,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function hf(e,t,a,l,i,r,c,p,g,E,M,_){return e=new Gx(e,t,a,c,g,E,M,_,p),t=1,r===!0&&(t|=24),r=ht(3,null,null,t),e.current=r,r.stateNode=e,t=zs(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:l,isDehydrated:a,cache:t},Rs(r),e}function xf(e){return e?(e=bl,e):bl}function gf(e,t,a,l,i,r){i=xf(i),l.context===null?l.context=i:l.pendingContext=i,l=ba(t),l.payload={element:a},r=r===void 0?null:r,r!==null&&(l.callback=r),a=va(e,l,t),a!==null&&(dt(a,e,t),mn(a,e,t))}function bf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Jc(e,t){bf(e,t),(e=e.alternate)&&bf(e,t)}function vf(e){if(e.tag===13||e.tag===31){var t=Ga(e,67108864);t!==null&&dt(t,e,67108864),Jc(e,67108864)}}function yf(e){if(e.tag===13||e.tag===31){var t=yt();t=Vr(t);var a=Ga(e,t);a!==null&&dt(a,e,t),Jc(e,t)}}var dr=!0;function Vx(e,t,a,l){var i=R.T;R.T=null;var r=G.p;try{G.p=2,Wc(e,t,a,l)}finally{G.p=r,R.T=i}}function Qx(e,t,a,l){var i=R.T;R.T=null;var r=G.p;try{G.p=8,Wc(e,t,a,l)}finally{G.p=r,R.T=i}}function Wc(e,t,a,l){if(dr){var i=Fc(l);if(i===null)_c(e,t,l,ur,a),kf(e,l);else if(Kx(i,e,t,a,l))l.stopPropagation();else if(kf(e,l),t&4&&-1<Zx.indexOf(e)){for(;i!==null;){var r=sl(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var c=Ba(r.pendingLanes);if(c!==0){var p=r;for(p.pendingLanes|=2,p.entangledLanes|=2;c;){var g=1<<31-ft(c);p.entanglements[1]|=g,c&=~g}qt(r),(we&6)===0&&(Xi=ut()+500,Rn(0))}}break;case 31:case 13:p=Ga(r,2),p!==null&&dt(p,r,2),Wi(),Jc(r,2)}if(r=Fc(l),r===null&&_c(e,t,l,ur,a),r===i)break;i=r}i!==null&&l.stopPropagation()}else _c(e,t,l,null,a)}}function Fc(e){return e=Ir(e),$c(e)}var ur=null;function $c(e){if(ur=null,e=rl(e),e!==null){var t=m(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=b(t),e!==null)return e;e=null}else if(a===31){if(e=y(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ur=e,null}function jf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rm()){case Ao:return 2;case To:return 8;case ei:case Cm:return 32;case Ro:return 268435456;default:return 32}default:return 32}}var Ic=!1,Ra=null,Ca=null,Oa=null,Bn=new Map,Hn=new Map,Ma=[],Zx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function kf(e,t){switch(e){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":Ca=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":Bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hn.delete(t.pointerId)}}function Ln(e,t,a,l,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:r,targetContainers:[i]},t!==null&&(t=sl(t),t!==null&&vf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Kx(e,t,a,l,i){switch(t){case"focusin":return Ra=Ln(Ra,e,t,a,l,i),!0;case"dragenter":return Ca=Ln(Ca,e,t,a,l,i),!0;case"mouseover":return Oa=Ln(Oa,e,t,a,l,i),!0;case"pointerover":var r=i.pointerId;return Bn.set(r,Ln(Bn.get(r)||null,e,t,a,l,i)),!0;case"gotpointercapture":return r=i.pointerId,Hn.set(r,Ln(Hn.get(r)||null,e,t,a,l,i)),!0}return!1}function wf(e){var t=rl(e.target);if(t!==null){var a=m(t);if(a!==null){if(t=a.tag,t===13){if(t=b(a),t!==null){e.blockedOn=t,Uo(e.priority,function(){yf(a)});return}}else if(t===31){if(t=y(a),t!==null){e.blockedOn=t,Uo(e.priority,function(){yf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Fc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);$r=l,a.target.dispatchEvent(l),$r=null}else return t=sl(a),t!==null&&vf(t),e.blockedOn=a,!1;t.shift()}return!0}function Nf(e,t,a){pr(e)&&a.delete(t)}function Xx(){Ic=!1,Ra!==null&&pr(Ra)&&(Ra=null),Ca!==null&&pr(Ca)&&(Ca=null),Oa!==null&&pr(Oa)&&(Oa=null),Bn.forEach(Nf),Hn.forEach(Nf)}function fr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ic||(Ic=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Xx)))}var mr=null;function Sf(e){mr!==e&&(mr=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){mr===e&&(mr=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],i=e[t+2];if(typeof l!="function"){if($c(l||a)===null)continue;break}var r=sl(a);r!==null&&(e.splice(t,3),t-=3,Fs(r,{pending:!0,data:i,method:a.method,action:l},l,i))}}))}function Gl(e){function t(g){return fr(g,e)}Ra!==null&&fr(Ra,e),Ca!==null&&fr(Ca,e),Oa!==null&&fr(Oa,e),Bn.forEach(t),Hn.forEach(t);for(var a=0;a<Ma.length;a++){var l=Ma[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ma.length&&(a=Ma[0],a.blockedOn===null);)wf(a),a.blockedOn===null&&Ma.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var i=a[l],r=a[l+1],c=i[nt]||null;if(typeof r=="function")c||Sf(a);else if(c){var p=null;if(r&&r.hasAttribute("formAction")){if(i=r,c=r[nt]||null)p=c.formAction;else if($c(i)!==null)continue}else p=c.action;typeof p=="function"?a[l+1]=p:(a.splice(l,3),l-=3),Sf(a)}}}function zf(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(c){return i=c})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function Pc(e){this._internalRoot=e}hr.prototype.render=Pc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));var a=t.current,l=yt();gf(a,l,e,t,null,null)},hr.prototype.unmount=Pc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;gf(e.current,2,null,e,null,null),Wi(),t[il]=null}};function hr(e){this._internalRoot=e}hr.prototype.unstable_scheduleHydration=function(e){if(e){var t=_o();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ma.length&&t!==0&&t<Ma[a].priority;a++);Ma.splice(a,0,e),a===0&&wf(e)}};var Ef=u.version;if(Ef!=="19.2.4")throw Error(d(527,Ef,"19.2.4"));G.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=h(t),e=e!==null?T(e):null,e=e===null?null:e.stateNode,e};var Jx={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xr.isDisabled&&xr.supportsFiber)try{Xl=xr.inject(Jx),pt=xr}catch{}}return qn.createRoot=function(e,t){if(!f(e))throw Error(d(299));var a=!1,l="",i=Mu,r=Du,c=_u;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=hf(e,1,!1,null,null,a,l,null,i,r,c,zf),e[il]=t.current,Dc(e),new Pc(t)},qn.hydrateRoot=function(e,t,a){if(!f(e))throw Error(d(299));var l=!1,i="",r=Mu,c=Du,p=_u,g=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(p=a.onRecoverableError),a.formState!==void 0&&(g=a.formState)),t=hf(e,1,!0,t,a??null,l,i,g,r,c,p,zf),t.context=xf(null),a=t.current,l=yt(),l=Vr(l),i=ba(l),i.callback=null,va(a,i,l),a=l,t.current.lanes=a,Wl(t,a),qt(t),e[il]=t.current,Dc(e),new hr(t)},qn.version="19.2.4",qn}var Bf;function ng(){if(Bf)return ao.exports;Bf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(u){console.error(u)}}return s(),ao.exports=lg(),ao.exports}var ig=ng();var Hf="popstate";function Lf(s){return typeof s=="object"&&s!=null&&"pathname"in s&&"search"in s&&"hash"in s&&"state"in s&&"key"in s}function rg(s={}){function u(d,f){let m=f.state?.masked,{pathname:b,search:y,hash:x}=m||d.location;return ho("",{pathname:b,search:y,hash:x},f.state&&f.state.usr||null,f.state&&f.state.key||"default",m?{pathname:d.location.pathname,search:d.location.search,hash:d.location.hash}:void 0)}function o(d,f){return typeof f=="string"?f:Jn(f)}return cg(u,o,null,s)}function Ze(s,u){if(s===!1||s===null||typeof s>"u")throw new Error(u)}function Vt(s,u){if(!s){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function sg(){return Math.random().toString(36).substring(2,10)}function Yf(s,u){return{usr:s.state,key:s.key,idx:u,masked:s.unstable_mask?{pathname:s.pathname,search:s.search,hash:s.hash}:void 0}}function ho(s,u,o=null,d,f){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof u=="string"?Fn(u):u,state:o,key:u&&u.key||d||sg(),unstable_mask:f}}function Jn({pathname:s="/",search:u="",hash:o=""}){return u&&u!=="?"&&(s+=u.charAt(0)==="?"?u:"?"+u),o&&o!=="#"&&(s+=o.charAt(0)==="#"?o:"#"+o),s}function Fn(s){let u={};if(s){let o=s.indexOf("#");o>=0&&(u.hash=s.substring(o),s=s.substring(0,o));let d=s.indexOf("?");d>=0&&(u.search=s.substring(d),s=s.substring(0,d)),s&&(u.pathname=s)}return u}function cg(s,u,o,d={}){let{window:f=document.defaultView,v5Compat:m=!1}=d,b=f.history,y="POP",x=null,h=T();h==null&&(h=0,b.replaceState({...b.state,idx:h},""));function T(){return(b.state||{idx:null}).idx}function w(){y="POP";let L=T(),H=L==null?null:L-h;h=L,x&&x({action:y,location:q.location,delta:H})}function B(L,H){y="PUSH";let X=Lf(L)?L:ho(q.location,L,H);h=T()+1;let Y=Yf(X,h),K=q.createHref(X.unstable_mask||X);try{b.pushState(Y,"",K)}catch(ne){if(ne instanceof DOMException&&ne.name==="DataCloneError")throw ne;f.location.assign(K)}m&&x&&x({action:y,location:q.location,delta:1})}function Z(L,H){y="REPLACE";let X=Lf(L)?L:ho(q.location,L,H);h=T();let Y=Yf(X,h),K=q.createHref(X.unstable_mask||X);b.replaceState(Y,"",K),m&&x&&x({action:y,location:q.location,delta:0})}function S(L){return og(L)}let q={get action(){return y},get location(){return s(f,b)},listen(L){if(x)throw new Error("A history only accepts one active listener");return f.addEventListener(Hf,w),x=L,()=>{f.removeEventListener(Hf,w),x=null}},createHref(L){return u(f,L)},createURL:S,encodeLocation(L){let H=S(L);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:B,replace:Z,go(L){return b.go(L)}};return q}function og(s,u=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),Ze(o,"No window.location.(origin|href) available to create URL");let d=typeof s=="string"?s:Jn(s);return d=d.replace(/ $/,"%20"),!u&&d.startsWith("//")&&(d=o+d),new URL(d,o)}function nm(s,u,o="/"){return dg(s,u,o,!1)}function dg(s,u,o,d){let f=typeof u=="string"?Fn(u):u,m=ca(f.pathname||"/",o);if(m==null)return null;let b=im(s);ug(b);let y=null;for(let x=0;y==null&&x<b.length;++x){let h=kg(m);y=yg(b[x],h,d)}return y}function im(s,u=[],o=[],d="",f=!1){let m=(b,y,x=f,h)=>{let T={relativePath:h===void 0?b.path||"":h,caseSensitive:b.caseSensitive===!0,childrenIndex:y,route:b};if(T.relativePath.startsWith("/")){if(!T.relativePath.startsWith(d)&&x)return;Ze(T.relativePath.startsWith(d),`Absolute route path "${T.relativePath}" nested under path "${d}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),T.relativePath=T.relativePath.slice(d.length)}let w=Gt([d,T.relativePath]),B=o.concat(T);b.children&&b.children.length>0&&(Ze(b.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),im(b.children,u,B,w,x)),!(b.path==null&&!b.index)&&u.push({path:w,score:bg(w,b.index),routesMeta:B})};return s.forEach((b,y)=>{if(b.path===""||!b.path?.includes("?"))m(b,y);else for(let x of rm(b.path))m(b,y,!0,x)}),u}function rm(s){let u=s.split("/");if(u.length===0)return[];let[o,...d]=u,f=o.endsWith("?"),m=o.replace(/\?$/,"");if(d.length===0)return f?[m,""]:[m];let b=rm(d.join("/")),y=[];return y.push(...b.map(x=>x===""?m:[m,x].join("/"))),f&&y.push(...b),y.map(x=>s.startsWith("/")&&x===""?"/":x)}function ug(s){s.sort((u,o)=>u.score!==o.score?o.score-u.score:vg(u.routesMeta.map(d=>d.childrenIndex),o.routesMeta.map(d=>d.childrenIndex)))}var pg=/^:[\w-]+$/,fg=3,mg=2,hg=1,xg=10,gg=-2,qf=s=>s==="*";function bg(s,u){let o=s.split("/"),d=o.length;return o.some(qf)&&(d+=gg),u&&(d+=mg),o.filter(f=>!qf(f)).reduce((f,m)=>f+(pg.test(m)?fg:m===""?hg:xg),d)}function vg(s,u){return s.length===u.length&&s.slice(0,-1).every((d,f)=>d===u[f])?s[s.length-1]-u[u.length-1]:0}function yg(s,u,o=!1){let{routesMeta:d}=s,f={},m="/",b=[];for(let y=0;y<d.length;++y){let x=d[y],h=y===d.length-1,T=m==="/"?u:u.slice(m.length)||"/",w=Ar({path:x.relativePath,caseSensitive:x.caseSensitive,end:h},T),B=x.route;if(!w&&h&&o&&!d[d.length-1].route.index&&(w=Ar({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},T)),!w)return null;Object.assign(f,w.params),b.push({params:f,pathname:Gt([m,w.pathname]),pathnameBase:zg(Gt([m,w.pathnameBase])),route:B}),w.pathnameBase!=="/"&&(m=Gt([m,w.pathnameBase]))}return b}function Ar(s,u){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[o,d]=jg(s.path,s.caseSensitive,s.end),f=u.match(o);if(!f)return null;let m=f[0],b=m.replace(/(.)\/+$/,"$1"),y=f.slice(1);return{params:d.reduce((h,{paramName:T,isOptional:w},B)=>{if(T==="*"){let S=y[B]||"";b=m.slice(0,m.length-S.length).replace(/(.)\/+$/,"$1")}const Z=y[B];return w&&!Z?h[T]=void 0:h[T]=(Z||"").replace(/%2F/g,"/"),h},{}),pathname:m,pathnameBase:b,pattern:s}}function jg(s,u=!1,o=!0){Vt(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let d=[],f="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(b,y,x,h,T)=>{if(d.push({paramName:y,isOptional:x!=null}),x){let w=T.charAt(h+b.length);return w&&w!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(d.push({paramName:"*"}),f+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?f+="\\/*$":s!==""&&s!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,u?void 0:"i"),d]}function kg(s){try{return s.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return Vt(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),s}}function ca(s,u){if(u==="/")return s;if(!s.toLowerCase().startsWith(u.toLowerCase()))return null;let o=u.endsWith("/")?u.length-1:u.length,d=s.charAt(o);return d&&d!=="/"?null:s.slice(o)||"/"}var wg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Ng(s,u="/"){let{pathname:o,search:d="",hash:f=""}=typeof s=="string"?Fn(s):s,m;return o?(o=o.replace(/\/\/+/g,"/"),o.startsWith("/")?m=Gf(o.substring(1),"/"):m=Gf(o,u)):m=u,{pathname:m,search:Eg(d),hash:Ag(f)}}function Gf(s,u){let o=u.replace(/\/+$/,"").split("/");return s.split("/").forEach(f=>{f===".."?o.length>1&&o.pop():f!=="."&&o.push(f)}),o.length>1?o.join("/"):"/"}function ro(s,u,o,d){return`Cannot include a '${s}' character in a manually specified \`to.${u}\` field [${JSON.stringify(d)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Sg(s){return s.filter((u,o)=>o===0||u.route.path&&u.route.path.length>0)}function sm(s){let u=Sg(s);return u.map((o,d)=>d===u.length-1?o.pathname:o.pathnameBase)}function yo(s,u,o,d=!1){let f;typeof s=="string"?f=Fn(s):(f={...s},Ze(!f.pathname||!f.pathname.includes("?"),ro("?","pathname","search",f)),Ze(!f.pathname||!f.pathname.includes("#"),ro("#","pathname","hash",f)),Ze(!f.search||!f.search.includes("#"),ro("#","search","hash",f)));let m=s===""||f.pathname==="",b=m?"/":f.pathname,y;if(b==null)y=o;else{let w=u.length-1;if(!d&&b.startsWith("..")){let B=b.split("/");for(;B[0]==="..";)B.shift(),w-=1;f.pathname=B.join("/")}y=w>=0?u[w]:"/"}let x=Ng(f,y),h=b&&b!=="/"&&b.endsWith("/"),T=(m||b===".")&&o.endsWith("/");return!x.pathname.endsWith("/")&&(h||T)&&(x.pathname+="/"),x}var Gt=s=>s.join("/").replace(/\/\/+/g,"/"),zg=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Eg=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Ag=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,Tg=class{constructor(s,u,o,d=!1){this.status=s,this.statusText=u||"",this.internal=d,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}};function Rg(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function Cg(s){return s.map(u=>u.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var cm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function om(s,u){let o=s;if(typeof o!="string"||!wg.test(o))return{absoluteURL:void 0,isExternal:!1,to:o};let d=o,f=!1;if(cm)try{let m=new URL(window.location.href),b=o.startsWith("//")?new URL(m.protocol+o):new URL(o),y=ca(b.pathname,u);b.origin===m.origin&&y!=null?o=y+b.search+b.hash:f=!0}catch{Vt(!1,`<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:d,isExternal:f,to:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var dm=["POST","PUT","PATCH","DELETE"];new Set(dm);var Og=["GET",...dm];new Set(Og);var Zl=k.createContext(null);Zl.displayName="DataRouter";var Or=k.createContext(null);Or.displayName="DataRouterState";var Mg=k.createContext(!1),um=k.createContext({isTransitioning:!1});um.displayName="ViewTransition";var Dg=k.createContext(new Map);Dg.displayName="Fetchers";var _g=k.createContext(null);_g.displayName="Await";var Ct=k.createContext(null);Ct.displayName="Navigation";var Mr=k.createContext(null);Mr.displayName="Location";var oa=k.createContext({outlet:null,matches:[],isDataRoute:!1});oa.displayName="Route";var jo=k.createContext(null);jo.displayName="RouteError";var pm="REACT_ROUTER_ERROR",Ug="REDIRECT",Bg="ROUTE_ERROR_RESPONSE";function Hg(s){if(s.startsWith(`${pm}:${Ug}:{`))try{let u=JSON.parse(s.slice(28));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.location=="string"&&typeof u.reloadDocument=="boolean"&&typeof u.replace=="boolean")return u}catch{}}function Lg(s){if(s.startsWith(`${pm}:${Bg}:{`))try{let u=JSON.parse(s.slice(40));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string")return new Tg(u.status,u.statusText,u.data)}catch{}}function Yg(s,{relative:u}={}){Ze($n(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:d}=k.useContext(Ct),{hash:f,pathname:m,search:b}=In(s,{relative:u}),y=m;return o!=="/"&&(y=m==="/"?o:Gt([o,m])),d.createHref({pathname:y,search:b,hash:f})}function $n(){return k.useContext(Mr)!=null}function Bt(){return Ze($n(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(Mr).location}var fm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function mm(s){k.useContext(Ct).static||k.useLayoutEffect(s)}function _a(){let{isDataRoute:s}=k.useContext(oa);return s?Pg():qg()}function qg(){Ze($n(),"useNavigate() may be used only in the context of a <Router> component.");let s=k.useContext(Zl),{basename:u,navigator:o}=k.useContext(Ct),{matches:d}=k.useContext(oa),{pathname:f}=Bt(),m=JSON.stringify(sm(d)),b=k.useRef(!1);return mm(()=>{b.current=!0}),k.useCallback((x,h={})=>{if(Vt(b.current,fm),!b.current)return;if(typeof x=="number"){o.go(x);return}let T=yo(x,JSON.parse(m),f,h.relative==="path");s==null&&u!=="/"&&(T.pathname=T.pathname==="/"?u:Gt([u,T.pathname])),(h.replace?o.replace:o.push)(T,h.state,h)},[u,o,m,f,s])}k.createContext(null);function In(s,{relative:u}={}){let{matches:o}=k.useContext(oa),{pathname:d}=Bt(),f=JSON.stringify(sm(o));return k.useMemo(()=>yo(s,JSON.parse(f),d,u==="path"),[s,f,d,u])}function Gg(s,u){return hm(s)}function hm(s,u,o){Ze($n(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=k.useContext(Ct),{matches:f}=k.useContext(oa),m=f[f.length-1],b=m?m.params:{},y=m?m.pathname:"/",x=m?m.pathnameBase:"/",h=m&&m.route;{let L=h&&h.path||"";gm(y,!h||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let T=Bt(),w;w=T;let B=w.pathname||"/",Z=B;if(x!=="/"){let L=x.replace(/^\//,"").split("/");Z="/"+B.replace(/^\//,"").split("/").slice(L.length).join("/")}let S=nm(s,{pathname:Z});return Vt(h||S!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),Vt(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),Xg(S&&S.map(L=>Object.assign({},L,{params:Object.assign({},b,L.params),pathname:Gt([x,d.encodeLocation?d.encodeLocation(L.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?x:Gt([x,d.encodeLocation?d.encodeLocation(L.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathnameBase])})),f,o)}function Vg(){let s=Ig(),u=Rg(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),o=s instanceof Error?s.stack:null,d="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:d},m={padding:"2px 4px",backgroundColor:d},b=null;return console.error("Error handled by React Router default ErrorBoundary:",s),b=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:m},"ErrorBoundary")," or"," ",k.createElement("code",{style:m},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},u),o?k.createElement("pre",{style:f},o):null,b)}var Qg=k.createElement(Vg,null),xm=class extends k.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,u){return u.location!==s.location||u.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:u.error,location:u.location,revalidation:s.revalidation||u.revalidation}}componentDidCatch(s,u){this.props.onError?this.props.onError(s,u):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const o=Lg(s.digest);o&&(s=o)}let u=s!==void 0?k.createElement(oa.Provider,{value:this.props.routeContext},k.createElement(jo.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?k.createElement(Zg,{error:s},u):u}};xm.contextType=Mg;var so=new WeakMap;function Zg({children:s,error:u}){let{basename:o}=k.useContext(Ct);if(typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){let d=Hg(u.digest);if(d){let f=so.get(u);if(f)throw f;let m=om(d.location,o);if(cm&&!so.get(u))if(m.isExternal||d.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const b=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:d.replace}));throw so.set(u,b),b}return k.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return s}function Kg({routeContext:s,match:u,children:o}){let d=k.useContext(Zl);return d&&d.static&&d.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=u.route.id),k.createElement(oa.Provider,{value:s},o)}function Xg(s,u=[],o){let d=o?.state;if(s==null){if(!d)return null;if(d.errors)s=d.matches;else if(u.length===0&&!d.initialized&&d.matches.length>0)s=d.matches;else return null}let f=s,m=d?.errors;if(m!=null){let T=f.findIndex(w=>w.route.id&&m?.[w.route.id]!==void 0);Ze(T>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),f=f.slice(0,Math.min(f.length,T+1))}let b=!1,y=-1;if(o&&d){b=d.renderFallback;for(let T=0;T<f.length;T++){let w=f[T];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(y=T),w.route.id){let{loaderData:B,errors:Z}=d,S=w.route.loader&&!B.hasOwnProperty(w.route.id)&&(!Z||Z[w.route.id]===void 0);if(w.route.lazy||S){o.isStatic&&(b=!0),y>=0?f=f.slice(0,y+1):f=[f[0]];break}}}}let x=o?.onError,h=d&&x?(T,w)=>{x(T,{location:d.location,params:d.matches?.[0]?.params??{},unstable_pattern:Cg(d.matches),errorInfo:w})}:void 0;return f.reduceRight((T,w,B)=>{let Z,S=!1,q=null,L=null;d&&(Z=m&&w.route.id?m[w.route.id]:void 0,q=w.route.errorElement||Qg,b&&(y<0&&B===0?(gm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,L=null):y===B&&(S=!0,L=w.route.hydrateFallbackElement||null)));let H=u.concat(f.slice(0,B+1)),X=()=>{let Y;return Z?Y=q:S?Y=L:w.route.Component?Y=k.createElement(w.route.Component,null):w.route.element?Y=w.route.element:Y=T,k.createElement(Kg,{match:w,routeContext:{outlet:T,matches:H,isDataRoute:d!=null},children:Y})};return d&&(w.route.ErrorBoundary||w.route.errorElement||B===0)?k.createElement(xm,{location:d.location,revalidation:d.revalidation,component:q,error:Z,children:X(),routeContext:{outlet:null,matches:H,isDataRoute:!0},onError:h}):X()},null)}function ko(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Jg(s){let u=k.useContext(Zl);return Ze(u,ko(s)),u}function Wg(s){let u=k.useContext(Or);return Ze(u,ko(s)),u}function Fg(s){let u=k.useContext(oa);return Ze(u,ko(s)),u}function wo(s){let u=Fg(s),o=u.matches[u.matches.length-1];return Ze(o.route.id,`${s} can only be used on routes that contain a unique "id"`),o.route.id}function $g(){return wo("useRouteId")}function Ig(){let s=k.useContext(jo),u=Wg("useRouteError"),o=wo("useRouteError");return s!==void 0?s:u.errors?.[o]}function Pg(){let{router:s}=Jg("useNavigate"),u=wo("useNavigate"),o=k.useRef(!1);return mm(()=>{o.current=!0}),k.useCallback(async(f,m={})=>{Vt(o.current,fm),o.current&&(typeof f=="number"?await s.navigate(f):await s.navigate(f,{fromRouteId:u,...m}))},[s,u])}var Vf={};function gm(s,u,o){!u&&!Vf[s]&&(Vf[s]=!0,Vt(!1,o))}k.memo(e0);function e0({routes:s,future:u,state:o,isStatic:d,onError:f}){return hm(s,void 0,{state:o,isStatic:d,onError:f})}function t0({basename:s="/",children:u=null,location:o,navigationType:d="POP",navigator:f,static:m=!1,unstable_useTransitions:b}){Ze(!$n(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=s.replace(/^\/*/,"/"),x=k.useMemo(()=>({basename:y,navigator:f,static:m,unstable_useTransitions:b,future:{}}),[y,f,m,b]);typeof o=="string"&&(o=Fn(o));let{pathname:h="/",search:T="",hash:w="",state:B=null,key:Z="default",unstable_mask:S}=o,q=k.useMemo(()=>{let L=ca(h,y);return L==null?null:{location:{pathname:L,search:T,hash:w,state:B,key:Z,unstable_mask:S},navigationType:d}},[y,h,T,w,B,Z,d,S]);return Vt(q!=null,`<Router basename="${y}"> is not able to match the URL "${h}${T}${w}" because it does not start with the basename, so the <Router> won't render anything.`),q==null?null:k.createElement(Ct.Provider,{value:x},k.createElement(Mr.Provider,{children:u,value:q}))}var Sr="get",zr="application/x-www-form-urlencoded";function Dr(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function a0(s){return Dr(s)&&s.tagName.toLowerCase()==="button"}function l0(s){return Dr(s)&&s.tagName.toLowerCase()==="form"}function n0(s){return Dr(s)&&s.tagName.toLowerCase()==="input"}function i0(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function r0(s,u){return s.button===0&&(!u||u==="_self")&&!i0(s)}var gr=null;function s0(){if(gr===null)try{new FormData(document.createElement("form"),0),gr=!1}catch{gr=!0}return gr}var c0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function co(s){return s!=null&&!c0.has(s)?(Vt(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${zr}"`),null):s}function o0(s,u){let o,d,f,m,b;if(l0(s)){let y=s.getAttribute("action");d=y?ca(y,u):null,o=s.getAttribute("method")||Sr,f=co(s.getAttribute("enctype"))||zr,m=new FormData(s)}else if(a0(s)||n0(s)&&(s.type==="submit"||s.type==="image")){let y=s.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=s.getAttribute("formaction")||y.getAttribute("action");if(d=x?ca(x,u):null,o=s.getAttribute("formmethod")||y.getAttribute("method")||Sr,f=co(s.getAttribute("formenctype"))||co(y.getAttribute("enctype"))||zr,m=new FormData(y,s),!s0()){let{name:h,type:T,value:w}=s;if(T==="image"){let B=h?`${h}.`:"";m.append(`${B}x`,"0"),m.append(`${B}y`,"0")}else h&&m.append(h,w)}}else{if(Dr(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Sr,d=null,f=zr,b=s}return m&&f==="text/plain"&&(b=m,m=void 0),{action:d,method:o.toLowerCase(),encType:f,formData:m,body:b}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function No(s,u){if(s===!1||s===null||typeof s>"u")throw new Error(u)}function d0(s,u,o,d){let f=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return o?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${d}`:f.pathname=`${f.pathname}.${d}`:f.pathname==="/"?f.pathname=`_root.${d}`:u&&ca(f.pathname,u)==="/"?f.pathname=`${u.replace(/\/$/,"")}/_root.${d}`:f.pathname=`${f.pathname.replace(/\/$/,"")}.${d}`,f}async function u0(s,u){if(s.id in u)return u[s.id];try{let o=await import(s.module);return u[s.id]=o,o}catch(o){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function p0(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function f0(s,u,o){let d=await Promise.all(s.map(async f=>{let m=u.routes[f.route.id];if(m){let b=await u0(m,o);return b.links?b.links():[]}return[]}));return g0(d.flat(1).filter(p0).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function Qf(s,u,o,d,f,m){let b=(x,h)=>o[h]?x.route.id!==o[h].route.id:!0,y=(x,h)=>o[h].pathname!==x.pathname||o[h].route.path?.endsWith("*")&&o[h].params["*"]!==x.params["*"];return m==="assets"?u.filter((x,h)=>b(x,h)||y(x,h)):m==="data"?u.filter((x,h)=>{let T=d.routes[x.route.id];if(!T||!T.hasLoader)return!1;if(b(x,h)||y(x,h))return!0;if(x.route.shouldRevalidate){let w=x.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function m0(s,u,{includeHydrateFallback:o}={}){return h0(s.map(d=>{let f=u.routes[d.route.id];if(!f)return[];let m=[f.module];return f.clientActionModule&&(m=m.concat(f.clientActionModule)),f.clientLoaderModule&&(m=m.concat(f.clientLoaderModule)),o&&f.hydrateFallbackModule&&(m=m.concat(f.hydrateFallbackModule)),f.imports&&(m=m.concat(f.imports)),m}).flat(1))}function h0(s){return[...new Set(s)]}function x0(s){let u={},o=Object.keys(s).sort();for(let d of o)u[d]=s[d];return u}function g0(s,u){let o=new Set;return new Set(u),s.reduce((d,f)=>{let m=JSON.stringify(x0(f));return o.has(m)||(o.add(m),d.push({key:m,link:f})),d},[])}function bm(){let s=k.useContext(Zl);return No(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function b0(){let s=k.useContext(Or);return No(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var So=k.createContext(void 0);So.displayName="FrameworkContext";function vm(){let s=k.useContext(So);return No(s,"You must render this element inside a <HydratedRouter> element"),s}function v0(s,u){let o=k.useContext(So),[d,f]=k.useState(!1),[m,b]=k.useState(!1),{onFocus:y,onBlur:x,onMouseEnter:h,onMouseLeave:T,onTouchStart:w}=u,B=k.useRef(null);k.useEffect(()=>{if(s==="render"&&b(!0),s==="viewport"){let q=H=>{H.forEach(X=>{b(X.isIntersecting)})},L=new IntersectionObserver(q,{threshold:.5});return B.current&&L.observe(B.current),()=>{L.disconnect()}}},[s]),k.useEffect(()=>{if(d){let q=setTimeout(()=>{b(!0)},100);return()=>{clearTimeout(q)}}},[d]);let Z=()=>{f(!0)},S=()=>{f(!1),b(!1)};return o?s!=="intent"?[m,B,{}]:[m,B,{onFocus:Gn(y,Z),onBlur:Gn(x,S),onMouseEnter:Gn(h,Z),onMouseLeave:Gn(T,S),onTouchStart:Gn(w,Z)}]:[!1,B,{}]}function Gn(s,u){return o=>{s&&s(o),o.defaultPrevented||u(o)}}function y0({page:s,...u}){let{router:o}=bm(),d=k.useMemo(()=>nm(o.routes,s,o.basename),[o.routes,s,o.basename]);return d?k.createElement(k0,{page:s,matches:d,...u}):null}function j0(s){let{manifest:u,routeModules:o}=vm(),[d,f]=k.useState([]);return k.useEffect(()=>{let m=!1;return f0(s,u,o).then(b=>{m||f(b)}),()=>{m=!0}},[s,u,o]),d}function k0({page:s,matches:u,...o}){let d=Bt(),{future:f,manifest:m,routeModules:b}=vm(),{basename:y}=bm(),{loaderData:x,matches:h}=b0(),T=k.useMemo(()=>Qf(s,u,h,m,d,"data"),[s,u,h,m,d]),w=k.useMemo(()=>Qf(s,u,h,m,d,"assets"),[s,u,h,m,d]),B=k.useMemo(()=>{if(s===d.pathname+d.search+d.hash)return[];let q=new Set,L=!1;if(u.forEach(X=>{let Y=m.routes[X.route.id];!Y||!Y.hasLoader||(!T.some(K=>K.route.id===X.route.id)&&X.route.id in x&&b[X.route.id]?.shouldRevalidate||Y.hasClientLoader?L=!0:q.add(X.route.id))}),q.size===0)return[];let H=d0(s,y,f.unstable_trailingSlashAwareDataRequests,"data");return L&&q.size>0&&H.searchParams.set("_routes",u.filter(X=>q.has(X.route.id)).map(X=>X.route.id).join(",")),[H.pathname+H.search]},[y,f.unstable_trailingSlashAwareDataRequests,x,d,m,T,u,s,b]),Z=k.useMemo(()=>m0(w,m),[w,m]),S=j0(w);return k.createElement(k.Fragment,null,B.map(q=>k.createElement("link",{key:q,rel:"prefetch",as:"fetch",href:q,...o})),Z.map(q=>k.createElement("link",{key:q,rel:"modulepreload",href:q,...o})),S.map(({key:q,link:L})=>k.createElement("link",{key:q,nonce:o.nonce,...L,crossOrigin:L.crossOrigin??o.crossOrigin})))}function w0(...s){return u=>{s.forEach(o=>{typeof o=="function"?o(u):o!=null&&(o.current=u)})}}var N0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{N0&&(window.__reactRouterVersion="7.13.1")}catch{}function S0({basename:s,children:u,unstable_useTransitions:o,window:d}){let f=k.useRef();f.current==null&&(f.current=rg({window:d,v5Compat:!0}));let m=f.current,[b,y]=k.useState({action:m.action,location:m.location}),x=k.useCallback(h=>{o===!1?y(h):k.startTransition(()=>y(h))},[o]);return k.useLayoutEffect(()=>m.listen(x),[m,x]),k.createElement(t0,{basename:s,children:u,location:b.location,navigationType:b.action,navigator:m,unstable_useTransitions:o})}var ym=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Je=k.forwardRef(function({onClick:u,discover:o="render",prefetch:d="none",relative:f,reloadDocument:m,replace:b,unstable_mask:y,state:x,target:h,to:T,preventScrollReset:w,viewTransition:B,unstable_defaultShouldRevalidate:Z,...S},q){let{basename:L,navigator:H,unstable_useTransitions:X}=k.useContext(Ct),Y=typeof T=="string"&&ym.test(T),K=om(T,L);T=K.to;let ne=Yg(T,{relative:f}),F=Bt(),P=null;if(y){let ke=yo(y,[],F.unstable_mask?F.unstable_mask.pathname:"/",!0);L!=="/"&&(ke.pathname=ke.pathname==="/"?L:Gt([L,ke.pathname])),P=H.createHref(ke)}let[je,U,le]=v0(d,S),re=T0(T,{replace:b,unstable_mask:y,state:x,target:h,preventScrollReset:w,relative:f,viewTransition:B,unstable_defaultShouldRevalidate:Z,unstable_useTransitions:X});function $(ke){u&&u(ke),ke.defaultPrevented||re(ke)}let ie=!(K.isExternal||m),Oe=k.createElement("a",{...S,...le,href:(ie?P:void 0)||K.absoluteURL||ne,onClick:ie?$:u,ref:w0(q,U),target:h,"data-discover":!Y&&o==="render"?"true":void 0});return je&&!Y?k.createElement(k.Fragment,null,Oe,k.createElement(y0,{page:ne})):Oe});Je.displayName="Link";var z0=k.forwardRef(function({"aria-current":u="page",caseSensitive:o=!1,className:d="",end:f=!1,style:m,to:b,viewTransition:y,children:x,...h},T){let w=In(b,{relative:h.relative}),B=Bt(),Z=k.useContext(Or),{navigator:S,basename:q}=k.useContext(Ct),L=Z!=null&&D0(w)&&y===!0,H=S.encodeLocation?S.encodeLocation(w).pathname:w.pathname,X=B.pathname,Y=Z&&Z.navigation&&Z.navigation.location?Z.navigation.location.pathname:null;o||(X=X.toLowerCase(),Y=Y?Y.toLowerCase():null,H=H.toLowerCase()),Y&&q&&(Y=ca(Y,q)||Y);const K=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let ne=X===H||!f&&X.startsWith(H)&&X.charAt(K)==="/",F=Y!=null&&(Y===H||!f&&Y.startsWith(H)&&Y.charAt(H.length)==="/"),P={isActive:ne,isPending:F,isTransitioning:L},je=ne?u:void 0,U;typeof d=="function"?U=d(P):U=[d,ne?"active":null,F?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let le=typeof m=="function"?m(P):m;return k.createElement(Je,{...h,"aria-current":je,className:U,ref:T,style:le,to:b,viewTransition:y},typeof x=="function"?x(P):x)});z0.displayName="NavLink";var E0=k.forwardRef(({discover:s="render",fetcherKey:u,navigate:o,reloadDocument:d,replace:f,state:m,method:b=Sr,action:y,onSubmit:x,relative:h,preventScrollReset:T,viewTransition:w,unstable_defaultShouldRevalidate:B,...Z},S)=>{let{unstable_useTransitions:q}=k.useContext(Ct),L=O0(),H=M0(y,{relative:h}),X=b.toLowerCase()==="get"?"get":"post",Y=typeof y=="string"&&ym.test(y),K=ne=>{if(x&&x(ne),ne.defaultPrevented)return;ne.preventDefault();let F=ne.nativeEvent.submitter,P=F?.getAttribute("formmethod")||b,je=()=>L(F||ne.currentTarget,{fetcherKey:u,method:P,navigate:o,replace:f,state:m,relative:h,preventScrollReset:T,viewTransition:w,unstable_defaultShouldRevalidate:B});q&&o!==!1?k.startTransition(()=>je()):je()};return k.createElement("form",{ref:S,method:X,action:H,onSubmit:d?x:K,...Z,"data-discover":!Y&&s==="render"?"true":void 0})});E0.displayName="Form";function A0(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jm(s){let u=k.useContext(Zl);return Ze(u,A0(s)),u}function T0(s,{target:u,replace:o,unstable_mask:d,state:f,preventScrollReset:m,relative:b,viewTransition:y,unstable_defaultShouldRevalidate:x,unstable_useTransitions:h}={}){let T=_a(),w=Bt(),B=In(s,{relative:b});return k.useCallback(Z=>{if(r0(Z,u)){Z.preventDefault();let S=o!==void 0?o:Jn(w)===Jn(B),q=()=>T(s,{replace:S,unstable_mask:d,state:f,preventScrollReset:m,relative:b,viewTransition:y,unstable_defaultShouldRevalidate:x});h?k.startTransition(()=>q()):q()}},[w,T,B,o,d,f,u,s,m,b,y,x,h])}var R0=0,C0=()=>`__${String(++R0)}__`;function O0(){let{router:s}=jm("useSubmit"),{basename:u}=k.useContext(Ct),o=$g(),d=s.fetch,f=s.navigate;return k.useCallback(async(m,b={})=>{let{action:y,method:x,encType:h,formData:T,body:w}=o0(m,u);if(b.navigate===!1){let B=b.fetcherKey||C0();await d(B,o,b.action||y,{unstable_defaultShouldRevalidate:b.unstable_defaultShouldRevalidate,preventScrollReset:b.preventScrollReset,formData:T,body:w,formMethod:b.method||x,formEncType:b.encType||h,flushSync:b.flushSync})}else await f(b.action||y,{unstable_defaultShouldRevalidate:b.unstable_defaultShouldRevalidate,preventScrollReset:b.preventScrollReset,formData:T,body:w,formMethod:b.method||x,formEncType:b.encType||h,replace:b.replace,state:b.state,fromRouteId:o,flushSync:b.flushSync,viewTransition:b.viewTransition})},[d,f,u,o])}function M0(s,{relative:u}={}){let{basename:o}=k.useContext(Ct),d=k.useContext(oa);Ze(d,"useFormAction must be used inside a RouteContext");let[f]=d.matches.slice(-1),m={...In(s||".",{relative:u})},b=Bt();if(s==null){m.search=b.search;let y=new URLSearchParams(m.search),x=y.getAll("index");if(x.some(T=>T==="")){y.delete("index"),x.filter(w=>w).forEach(w=>y.append("index",w));let T=y.toString();m.search=T?`?${T}`:""}}return(!s||s===".")&&f.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(m.pathname=m.pathname==="/"?o:Gt([o,m.pathname])),Jn(m)}function D0(s,{relative:u}={}){let o=k.useContext(um);Ze(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:d}=jm("useViewTransitionState"),f=In(s,{relative:u});if(!o.isTransitioning)return!1;let m=ca(o.currentLocation.pathname,d)||o.currentLocation.pathname,b=ca(o.nextLocation.pathname,d)||o.nextLocation.pathname;return Ar(f.pathname,b)!=null||Ar(f.pathname,m)!=null}function _0(){const s=Bt();return n.jsxs("div",{className:"relative flex flex-col items-center justify-center h-screen text-center px-4 bg-[var(--bg)]",children:[n.jsx("div",{"aria-hidden":"true",className:"absolute bottom-0 text-9xl md:text-[12rem] font-black text-[var(--bg-2)] select-none pointer-events-none z-0",children:"404"}),n.jsxs("div",{className:"relative z-10",children:[n.jsx("h1",{className:"text-xl md:text-2xl font-medium mt-6 text-[var(--ink)]",children:"This page has not been generated"}),n.jsx("p",{className:"mt-2 text-base text-[var(--muted-2)] tracking-[0.04em]",children:s.pathname}),n.jsx("p",{className:"mt-4 text-lg md:text-xl text-[var(--muted)]",children:"Tell me more about this page, so I can generate it"})]})]})}const km="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABACAYAAABfuzgrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDEwLjAtYzAwMCA3OS5kMjBlNDY2MzAsIDIwMjUvMTIvMDktMDI6MTE6MjMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NDIzNGE4NjAtMzY3My0yNzRkLTkxNjQtMGNmZTEzMjJiZTg3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBGMUQ1ODQ0NThBMzExRjE4Q0Y0RjdERUE1Q0YyN0ZEIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBGMUQ1ODQzNThBMzExRjE4Q0Y0RjdERUE1Q0YyN0ZEIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNy40IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFlNDEyZmE4LWI5NTgtZWY0YS05OTlhLTRmMzgxMTNjMzMyMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MjM0YTg2MC0zNjczLTI3NGQtOTE2NC0wY2ZlMTMyMmJlODciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6HZ9cfAAALMElEQVR42uxcTWzjWB1/sRM7zlfrzsx+sawgK3GAE8pwA4lD5jISx4z2gDimVw5I6YUz6YUzzQ0JcWhOXBBSIySkkZCWhr2wq4WdyaJlNDs7s43bpPlObH5/+zl1MkmnKSnNpP+f5Nr1e/772X6/9/96LyHHcQSDwZgNhV8Bg8EEYTCYIAwGE4TBYIIwGEwQBoMJwmAwQRgMJgiDwQRhMBhMEAaDCcJgMEEYDCYIg8EEYTCYIAzGa4XwVd/go4e/u5YVWd//4U9D/HkZK08Qwne++4OF6h89fyIe/vkPYnPrjrj/wS9Eq/7FQtf/65O/8ZdlsInF5GAwQZgcjHU3sVaVHP/++I+r9RD4AQ3PYcPe/zENx/0vsHe8vVtHePUc5+wax9s7Xr2scOyKPB6fl3Uy+JOmvePYJRzXfHmefBtlAmVO2i0TTjko32uQk8VxJdgur8i/lz3ZTuGcyXfP2WftCVwrgvJE8J6yOPB+fvKzX7MGYc1xKexhO4hoRh379NR5OneoRrR9LRorxBKbGUUdj5UFbI9pU1V1X9ONohFLZrCfKT+s6dPyWYOsETmy2IoXqFfBVsVWfk1ei4ktn0jdEtFo3LRHo7xVf7ozHPapbBvndzQtWheh0HikHw56YjQcUvkuCFGKGrGDkKJm/BG+3W6IXrc9IT+eNIUWNUzbHuVP6s93RqMBE2TNNEcFI+O9ePKWKUdNHw8kKUxJony/1y6gE9V63dbOkolCo+++PL67JJlWSFHQyZN5mFjyOCFOm3W38LRxBG6EhHn7G379avDiTrtpdTtNkdy8LVQ1Qqdqs+TrRjzvkPwQjqNx0W4ds5O+bmZVv9exjutPrYb1TIQj+nhrn1p0vobzpU67cVfTY6WU+VZ664339tEZCkt8lJyqhjPm7XdpM5fmztj2Njo5EW4Lx7Vu5/RcQg0H/Sl3yJ4ot0fDl+T3Oi1PvmPTwMEm1rr6HPjYwlZmnx8JbDAvuu3GdnLjTjYaS6VBlGKreVRtnx5XlnD7rI7RHaSsolfSyIz7jpbyXNAU1W6rIQaDrvDd//nxAfvcctt+ubzVtKodaBqXXGv6C52vFUGow372afXa7t88eVGKwGklswNmGZlcFWigeb5NRppovg9TmeEnkHmViWgx9wTk5RyvI1oz6mekXF+mFfCN5ppvw2EvK+tcxYtLjwaD8+T772F3xjNYgfPn+VK5QBCArinJPZtYE6Nh07pWckiUoUnGH9+Im5kZ/sQBbfBtTESHqvHkFsi0Rf8fBDo3dRI4wcoeNIcZgUknry2Q+aZHEzmYdMFOsu9GjCJ6LSCzGItvHIYjWmFGGyjCdEh+laJG9uCL5MJhfZk+U0C+uoc259SwNjYZZXsfe1E0vRiNJUz/mnA4UjSMRCEWS2IfPwy8k2m40TT4N3ldN2pGLEFbDsEDnAsVBGuQMzz69O9Q8aNVaEqt1zm1pFMv0OmzZBpRBEh2nEP4E2Zi441dlO3AjyGtUEad9MbWOzlom/3G8bN70BIUHLgLOW5nIrOKZEMz3fX6kiMG/S78IzdqtKcoSi6RulONaNFy8/g5mUuQqWVAkizqF1uNowoc5PHogZAtOlMqS502HA67kSpyoMnUWgbwjDV0esgP07Erv9OCqTV03wPeS7SGtpJvhbYoVF7sdlpWLJaAL2dYaP++8PIvGYSJ86cn9d3R5PclMuWjRtzSDeOePRwiaOC+iyquP4waRrHTbsGvapfXgiBf1P6xsCnl468HvxXW0YuFrn/73W9f2bOMRsMa2peRndqk/IAkyB6Rw7z9TUERHiJHS0aN4MBW1HAkB82QTW2+hZDo0xKZZv3eE0HRH/g0UvZAWF8/CSbCSEPlEht3hK7HLerg5AyTP9HrnlZVVcuiI5I2yfb7nSqRSkacdtHOXBhlPrGXOUi48u1hLhLSZsmnTltBaLkA7eEl/XAuFk9WnNFINI6/psGuFE9u4n2pIDDei27sts+CCDRo5GOJFBGtbDsjq9k49gfI6mAwqKY2zQy0SQH3WA+CfPThXy597eeffbLwNVdJEL8jhxXPZIEJ4JtMWWgOIgeN5LWAKebazkQIEIS0ThqOvpgqn4cqtE8ZJEI2W+xMO8o0Ykc8EphICApJEEERp07rRLhmmkdkazQVhfofBwkxgsZALkWonpU+EeXq99COUE/oxthMrNI5ap/MpFuUUwFp3MKIjmc4I0he03W8K4PqwsfrTQQQ3HsjXwPTLgMNY161P/J/IQjNyl0Ux/UXl772GpAlTeJnm6FRzKkOmQ5GplT14q8dsh6Q1lCV8FgjSc0ykb2WGu1CWvlqZsmcL384HEy1x5nnlGeR3Q88f9+cKh//TybeWmiQ+x/8crEL7C/F73/zK3ntz8lIWXANyp/EFWepRSCq4o2CmhHsvPXpDgsT69I3bFhfkaWSw8jrR3QqlKuRSby1gqKERCSi+WHj/TMt7UiNHXK3tXLSW/V/LlT/w4dnkwibzz4Wjx49WpXvR50zHej8lRkjJ5lF926/OdfMW9QkyMjpMFmYWjvYHiiKKvr9dlGsPx7EkxuVycmKTtBHs25cFGvFJx66kRk5clc827ozyyyiLPwyzB1ThnfNeGKrDFt9FxEr0Tq13E7iRbzWGmareWIN+r15BLlZeZDXYFZujrLeEm4kSkawKlMjfoZIMG9bAHloK3Nz623ybyrkiyB7v86EmE6QZkPuhEo7sDkT240hyGtADjJpMhSJAna8pOHJ2NQa9DvjD4sRvxCO6PPMpfwiIyjyGb4Dbg567Xm+0EVMw+ssv7j7aTulwdm8MISqtew53+NmEGTFyZGRzmIB+YYaOv42jncxF0sEJ+hBm2zTxEf/wyLjvS9j+mZgWn2RwrYU5p0xizYTqF+Qna4mw8iuTJp+Ls+TLFMJqdNkyc0jmnJ+xCetnB9ZM18ReTMVdWnWernfbZf8fxBK3qcBJxC5y8vZChZyIetPkGsmR9afMiFenubgn6cPZKbMN3dg87+PHEgJc7JmmTq105Pn78OEcpNXNF0E19DMX4po0VSTNAgGp/MWcgDjmH8NJtpOQPPI+moa96LMeonu5xMIZZhaoiNbH7FIlsy5uKaYElKovTWESP1nCo7qOVku/IVO088LAuxNPfvE9bjX4dQ7myw/X/6BlOuXF6a0z6GUKweb3nav29mWCUgzkUwVkfOg536MAEUBicVyMrW5+6rQ8jIQumo7jn72Z96vmswjB+VAvnzyuZsD+dGP710qinWRn/2hJbc0Zwqd1nW8g6FZ6VvQOVcrUHJq0G+/0gcgGZj1mwZBMlPZ5yoRg8g17YfQij60IS2X3KKuU6VEH9WlE4mNW9mokTLl8lPKUlvtFjL1aAv8E8yz0shthZnXtU7pmlDIjCGHRtEuiojSNx4iuYlknmUdPRWJ5JarESj0PF4w1e8hU98TmPYhaO6UFo0KV0N5AtzkKKaDWCdHXxGRTSORFKpb7snHdBAxQtYbC6dEPLHhahTKlPsONcwmq9/t0FoTPG/Kuz/K3fsjRzRE29pIPg56PeEvuUUmnZKNWUy1MQNOetlNhHZa0OCdK19yG77JZtW3vnf/qkKFNTFjekcc29Y7M+u/NBs2cUuIO5MrGuclY8qLhJLfu1io+brLhTjn2cW6L5jiNeQMwetBxMqt52AwVpYgtJ7j6X8e8RtnMEHE6q7nYDBWjyCLkoOiV/4s3hWah8W4gQg5a7rYnsEQ/MuKDAYThMFggjAYTBAGgwnCYDBBGAwmCIPBBGEwGEwQBoMJwmAwQRgMJgiDwQRhMJggDAYThMFggjAYNw7/FWAAi26mbSS44fEAAAAASUVORK5CYII=",U0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABACAYAAABfuzgrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDEwLjAtYzAwMCA3OS5kMjBlNDY2MzAsIDIwMjUvMTIvMDktMDI6MTE6MjMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NDIzNGE4NjAtMzY3My0yNzRkLTkxNjQtMGNmZTEzMjJiZTg3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjExQTg3QUM2NThBNDExRjE5NkY0RkVCOURBRkVDNjk2IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjExQTg3QUM1NThBNDExRjE5NkY0RkVCOURBRkVDNjk2IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNy40IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFkNjhmZjAxLWMzYjUtYWM0NS04OTM1LTVmZGE1YWU2OTJhMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MjM0YTg2MC0zNjczLTI3NGQtOTE2NC0wY2ZlMTMyMmJlODciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6dJ7OqAAAF3klEQVR42uydv48bRRTHZxF/ABuJAomGDaKACq2poNxr0u8pBbWvpUCyG2rs/wBbNEiIwq5oEJKtSEiHkMI515AoP3yLlEQJIooXKaSgwGY3fnN5fuyPG3s3Xq+/H92c92Znxju78515M/NWZy0WCwUASOY13AIAIBAAIBAAIBAAIBAAIBAAIBAAIBAAIBAAIBAAAAQCAAQCAAQCAAQCAAQCAAQCwE7xetlfcHr87VbeyPrwk08tPF5QeYHEvPf+R0bpn/75UB1f+169celNdeXq5+r57L5R/ru3fsWTBTCxIA4AgUAcoO4mVlXF8fEH71arEtbKx8vj83hrJU6nsyx+Vv/9IsaLjsc67jz/Mq8bHTqWZbnRcT86Ds7TLH+cKM598WlF55Q1ZHmpHMuLPsb8elh+tZreUqvplicTrnk1zUpdrf/V/etrpxhBMHKsRS8KoyjM1LKx8/g47iQKgyi01FIsmvjvMwrx+Y44n1c+TKwaicOjhpIX4kbi79BtsaPQTDiOOYrC5Yy83Sg0ojBZs3wIpEYjR2x+HEThkHpJHbosvk9CGlCvWrRQHCbEogjpuuVxGpOE/Jxgw/IhkB02q8KEBqHjA3r4Dfp0mFlSFD4Tpl1guUd03ZcSGrjKEcRFzpuUD4HswZzjiDWEDo0qReCxXjws+JonJd+TiVJYxaoMi/lc3bu91WfSJ3Hoyew4o9HzEWGckNamEckVo4nusWV6l8q1RZpJjvnmUZoyblxe+R4zWWUdQhafNdfx2SKANudChRFklb+fhdsWR8ww4eHLBjOiYLNGw+N03hGtBNksb4uCLxrJgNIHrMwOzVtaCdfQo3NndOwXLIqs8n02XxvRddosT4euWV9/mlmpV9OaVO+Ayj4r2MTd/RFkevuGms//rcKlBNR78YY+EZNtm3rGNhOVwxrOAfX8DRany26o5OVUn75nyMrUvXEnYSQJCjQB0+6Dl3Oei6ZD961BnwM272omjCQ9ig/pfoXMpNMiC0SHtbsCuR/8ZmxKaX4ZfaPCp0+M8r/19jtli8RlvTt/qDYzxZRYLfOpUTUNVn1cYXZJ+99LEGpADc7PWIXatP5Z5Q+pvq2EOG6q9tiI0xUjUJPlC0WdJ3RfWrURyOn1n9bO+/u9W8Z5ShZI2pyDT7aDjFUgx3ASrEegdo6tvskqlSpgJXCTZWROU3QsWZ2HXXbdXolAYq9cU/6aPVk77xbwchrsJjvNhymNo46713bOvbQLXgqvhkCuXP3CLMP8sfruqy8p72fR738M30H5seyHmNUTuuR+UTQ+W9EZq/1goPZhmff57I5R+uvHP5wfP/vjpppOp1V5YI7ouccp5sRBgeaOy/Zd2mxE6eyBQA5zOoNw71axKu546AtxTEp+cDZbHh5eYN+gjiZXqLCTvjNeub5YiUkaSfTyZRE0xWZj3ZEbpJ6Cq8nOiIO7fbfFEqPcKW9lmEvNNec7tuHKlckiQdnnlaG3Au+QvIznsR8Cqbg4XOagGJBPVjfFVysUu8k+W5npUBimLH+6LH2LGl2Q4NToqJe701Is/prLwI6BUNc5rwy9Ffpiot5idW+S2RnuhUC2LA6PuUwoMQKcsJeGbBo1Lmds8gV0fihEMqMH6tCkMxR52qIxzJg4+uz7XOYWH1JZE2aKnbAd7hPR6H3mTq9fdJL17Ym6p+Vfp/wRG1V7YoTVHgie6Gy0c6jN3FLO2AZht/auJhUYOcY5K06mE27dcKUTYpAxoe/SdTgpaY+oQfC5iL6mBhs1ePxBjleynVHPbs5O/3jD8vPOc1OrLxw01avYPa+EQKpgVv18c1rWUmFg6N6R5207vqAD5Sbvd1Tp/EXrXk8TC++QA4X3QVQV3+cAoJoCid/nePRgijsOIBBV3fc5AKieQEzFEXvwai/eCvlhgT3EWiwWuAsAKPx/EAAgEAAgEAAgEAAgEAAgEAAgEAAgEAAgEAAABAIABAIABAIABAIABAIABAIABAJAHfhPgAEAek7EkD6DsgoAAAAASUVORK5CYII=";function Vn(s,u){if(!(typeof window>"u")&&typeof window.gtag=="function")try{window.gtag("event",s,u)}catch{}}const Ut={formSubmit:(s,u)=>Vn("form_submit",{areas:s.join(","),region:u}),phoneClick:s=>Vn("phone_click",{source:s}),kakaoClick:s=>Vn("kakao_click",{source:s}),priceCalcUse:(s,u)=>Vn("price_calc_use",{space:s,house_type:u}),quoteSectionView:()=>Vn("quote_section_view")},Zf=[{label:"포트폴리오",href:"#portfolio"},{label:"시공범위",href:"#scope"},{label:"FAQ",href:"#faq"},{label:"견적문의",href:"#quote"}],Kf=[{label:"케라폭시 줄눈이란?",href:"/info/kerafoxy"},{label:"케라폭시 가격 안내",href:"/info/kerafoxy-price"},{label:"케라폭시 제품 소개",href:"/info/kerafoxy-product"},{label:"폴리우레아 vs 케라폭시 비교",href:"/info/comparison"},{label:"줄눈시공 하는 이유",href:"/info/why-grout"}];function al(){const[s,u]=k.useState(!1),[o,d]=k.useState(!1),[f,m]=k.useState(!1),[b,y]=k.useState(!1),x=k.useRef(null),h=k.useRef(!1),T=_a(),w=Bt(),B=w.pathname==="/";k.useEffect(()=>{const H=()=>u(window.scrollY>60);return window.addEventListener("scroll",H),()=>window.removeEventListener("scroll",H)},[]),k.useEffect(()=>{const H=X=>{x.current&&!x.current.contains(X.target)&&m(!1)};return document.addEventListener("mousedown",H),()=>document.removeEventListener("mousedown",H)},[]),k.useEffect(()=>{if(!o)return;const H=window.scrollY,X=document.documentElement,Y=document.body,K={htmlOverflow:X.style.overflow,bodyOverflow:Y.style.overflow,bodyPosition:Y.style.position,bodyTop:Y.style.top,bodyWidth:Y.style.width};return X.style.overflow="hidden",Y.style.overflow="hidden",Y.style.position="fixed",Y.style.top=`-${H}px`,Y.style.width="100%",()=>{X.style.overflow=K.htmlOverflow,Y.style.overflow=K.bodyOverflow,Y.style.position=K.bodyPosition,Y.style.top=K.bodyTop,Y.style.width=K.bodyWidth,h.current?h.current=!1:window.scrollTo(0,H)}},[o]);const Z=H=>{h.current=!0,d(!1),B?setTimeout(()=>{const X=document.querySelector(H);X&&X.scrollIntoView({behavior:"smooth"})},0):(T("/"),setTimeout(()=>{const X=document.querySelector(H);X&&X.scrollIntoView({behavior:"smooth"})},300))},S=s||!B,q=S?"text-stone-700 hover:text-[var(--accent)]":"text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] hover:text-white",L=S?"text-stone-900":"text-white";return n.jsxs("nav",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${S?"bg-white shadow-sm":"bg-transparent"}`,children:[n.jsxs("div",{className:"px-5 md:px-12 lg:px-20 h-12 md:h-auto md:py-4 flex items-center transition-all duration-300",children:[n.jsx("div",{className:"flex-1",children:n.jsx(Je,{to:"/",className:"flex items-center gap-3 cursor-pointer",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:n.jsx("img",{src:S?U0:km,alt:"디테일라인 - 서울·경기 줄눈시공 전문",className:"h-10 md:h-12 w-auto object-contain transition-opacity duration-300"})})}),n.jsx("div",{className:"flex-1 hidden md:flex justify-center",children:n.jsxs("ul",{className:"flex items-center gap-8",children:[Zf.map(H=>n.jsx("li",{children:n.jsx("button",{onClick:()=>Z(H.href),className:`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${q}`,children:H.label})},H.href)),n.jsxs("li",{ref:x,className:"relative",children:[n.jsxs("button",{onClick:()=>m(!f),className:`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1 ${w.pathname.startsWith("/info")?L:q}`,children:["줄눈 정보",n.jsx("i",{className:`ri-arrow-down-s-line text-lg transition-transform ${f?"rotate-180":""}`})]}),f&&n.jsx("div",{className:"absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-2xl overflow-hidden w-56",style:{boxShadow:"0 4px 24px 0 rgba(0,0,0,0.10)"},children:n.jsx("ul",{className:"py-2",children:Kf.map(H=>n.jsx("li",{children:n.jsx(Je,{to:H.href,onClick:()=>m(!1),className:"block px-5 py-3 text-sm text-stone-500 hover:bg-stone-100 hover:text-stone-900 transition-colors cursor-pointer",children:H.label})},H.href))})})]})]})}),n.jsx("div",{className:"flex-1 hidden md:flex items-center justify-end gap-4",children:n.jsxs("a",{href:"tel:010-8005-6674",onClick:()=>Ut.phoneClick("navbar"),className:`flex items-center gap-2 text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${S?"bg-[var(--accent)] text-white px-5 py-2.5 rounded-full hover:bg-[var(--accent-deep)]":"bg-white/10 text-white px-5 py-2.5 rounded-full border border-white/30 hover:bg-white/20 backdrop-blur-sm"}`,children:[n.jsx("i",{className:"ri-phone-line text-sm"}),"010-8005-6674"]})}),n.jsx("button",{className:`md:hidden w-8 h-8 flex items-center justify-center cursor-pointer ml-auto ${S?"text-stone-800":"text-white"}`,onClick:()=>d(!o),children:n.jsx("i",{className:`text-xl ${o?"ri-close-line":"ri-menu-line"}`})})]}),n.jsxs(n.Fragment,{children:[n.jsx("div",{className:`fixed inset-0 bg-black/60 z-40 md:hidden transition-opacity duration-300 ${o?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}`,onClick:()=>d(!1)}),n.jsxs("div",{className:`fixed top-0 right-0 h-screen w-4/6 bg-stone-100 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto md:hidden ${o?"translate-x-0":"translate-x-full"}`,children:[n.jsx("div",{className:"sticky top-0 bg-white h-12 px-5 flex items-center justify-end border-b border-stone-300",children:n.jsx("button",{onClick:()=>d(!1),className:"text-stone-700 hover:text-stone-900 cursor-pointer",children:n.jsx("i",{className:"ri-close-line text-2xl"})})}),n.jsxs("div",{className:"px-6 py-4",children:[n.jsxs("ul",{className:"space-y-3",children:[Zf.map(H=>n.jsx("li",{children:n.jsx("button",{onClick:()=>Z(H.href),className:"w-full border-b border-stone-200 pb-4 text-left text-sm font-medium text-stone-600 hover:text-[var(--accent)] cursor-pointer transition-colors",children:H.label})},H.href)),n.jsxs("li",{children:[n.jsxs("div",{className:"flex flex-row w-full text-sm font-medium text-stone-600 mb-4 items-center justify-between",children:["줄눈 정보",n.jsx("i",{className:"ri-arrow-down-s-line text-xl"})]}),n.jsx("ul",{className:"space-y-4 pl-3 border-stone-100",children:Kf.map(H=>n.jsx("li",{children:n.jsx(Je,{to:H.href,onClick:()=>{h.current=!0,d(!1)},className:"text-sm font-medium text-stone-400 hover:text-[var(--accent)] cursor-pointer transition-colors block",children:H.label})},H.href))})]})]}),n.jsxs("a",{href:"tel:010-8005-6674",onClick:()=>Ut.phoneClick("navbar"),className:"call-bg mt-8 flex items-center justify-center gap-2 px-6 py-3 bg-[var(--accent)] text-white text-sm font-semibold rounded-full hover:bg-[var(--accent-deep)] transition-colors cursor-pointer w-full",children:[n.jsx("i",{className:"ri-phone-line"}),"010-8005-6674"]}),n.jsx("p",{className:"text-center text-xs text-stone-500 mt-3",children:"번호를 누르면 전화 연결 됩니다."})]})]})]})]})}const B0=[{label:"포트폴리오",href:"#portfolio"},{label:"시공범위",href:"#scope"},{label:"FAQ",href:"#faq"},{label:"견적문의",href:"#quote"}],H0=["화장실 줄눈","주방 줄눈","베란다 줄눈","현관 줄눈","수영장 줄눈","목욕탕 줄눈"];function ll(){const s=u=>{const o=document.querySelector(u);o&&o.scrollIntoView({behavior:"smooth"})};return n.jsx("footer",{className:"bg-[var(--dark)] mx-2 overflow-hidden",children:n.jsxs("div",{className:"px-6 md:px-12 lg:px-16 pt-10 pb-8",children:[n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-6 md:mb-12",children:[n.jsxs("div",{className:"lg:col-span-1",children:[n.jsx("img",{src:km,alt:"디테일라인 - 서울·경기 줄눈시공 전문",className:"h-10 w-auto object-contain mb-4"}),n.jsxs("p",{className:"text-stone-400 text-sm leading-relaxed mb-5",children:["집요함이 만들어 내는 완벽함, 디테일라인",n.jsx("br",{}),"완벽한 마감을 약속드립니다."]}),n.jsxs("div",{className:"space-y-2",children:[n.jsxs("div",{className:"flex items-center gap-2 text-stone-400 text-sm",children:[n.jsx("i",{className:"ri-phone-line text-stone-500"}),n.jsx("a",{href:"tel:010-8005-6674",onClick:()=>Ut.phoneClick("footer"),className:"hover:text-white transition-colors cursor-pointer",children:"010-8005-6674"})]}),n.jsxs("div",{className:"flex items-center gap-2 text-stone-400 text-sm",children:[n.jsx("i",{className:"ri-map-pin-line text-stone-500"}),n.jsx("span",{children:"서울 서초구 본마을4길 11 1층 104호"})]}),n.jsxs("div",{className:"flex items-center gap-2 text-stone-400 text-sm",children:[n.jsx("i",{className:"ri-time-line text-stone-500"}),n.jsx("span",{children:"평일 09:00 – 18:00"})]})]})]}),n.jsxs("div",{className:"hidden md:block",children:[n.jsx("h4",{className:"text-white font-bold text-sm mb-5",children:"빠른 링크"}),n.jsx("ul",{className:"space-y-3",children:B0.map(u=>n.jsx("li",{children:n.jsx("button",{onClick:()=>s(u.href),className:"text-stone-400 text-sm hover:text-white transition-colors cursor-pointer",children:u.label})},u.href))})]}),n.jsxs("div",{className:"hidden md:block",children:[n.jsx("h4",{className:"text-white font-bold text-sm mb-5",children:"시공 서비스"}),n.jsx("ul",{className:"space-y-3",children:H0.map(u=>n.jsx("li",{children:n.jsx("span",{className:"text-stone-400 text-sm",children:u})},u))})]}),n.jsxs("div",{className:"hidden md:block",children:[n.jsx("h4",{className:"text-white font-bold text-sm mb-5",children:"소셜 미디어"}),n.jsx("div",{className:"space-y-3",children:[{icon:"ri-instagram-line",label:"Instagram",href:"https://www.instagram.com"},{icon:"ri-kakao-talk-fill",label:"KakaoTalk",href:"https://pf.kakao.com"}].map(u=>n.jsxs("a",{href:u.href,target:"_blank",rel:"nofollow noreferrer",className:"flex items-center gap-3 text-stone-400 text-sm hover:text-white transition-colors cursor-pointer",children:[n.jsx("div",{className:"w-8 h-8 flex items-center justify-center bg-white/10 rounded-sm",children:n.jsx("i",{className:`${u.icon} text-sm`})}),u.label]},u.label))})]})]}),n.jsx("div",{className:"border-t border-stone-700 pt-6",children:n.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-3",children:[n.jsx("p",{className:"text-stone-500 text-xs",children:"© 2026 줄눈시공 전문. All rights reserved."}),n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx(Je,{to:"/privacy",className:"text-stone-500 text-xs hover:text-white transition-colors cursor-pointer",children:"개인정보처리방침"}),n.jsx("span",{className:"text-stone-600 text-xs",children:"사업자등록번호: 609-33-19473"})]})]})})]})})}function L0(){const[s,u]=k.useState(!1);return k.useEffect(()=>{const o=()=>{u(window.scrollY>window.innerHeight*.6)};return o(),window.addEventListener("scroll",o,{passive:!0}),()=>window.removeEventListener("scroll",o)},[]),n.jsx("div",{className:`md:hidden fixed bottom-5 right-4 z-40 flex flex-col gap-3 transition-all duration-300 ${s?"opacity-100 translate-y-0":"opacity-0 translate-y-4 pointer-events-none"}`,"aria-hidden":!s,children:n.jsx("a",{href:"tel:010-8005-6674",onClick:()=>Ut.phoneClick("floating"),className:"w-14 h-14 flex items-center justify-center rounded-full bg-[var(--accent)] text-white shadow-lg active:scale-95 transition-transform","aria-label":"전화 상담",children:n.jsx("i",{className:"ri-phone-fill text-2xl"})})})}const lt={eyebrow:"오직 줄눈, 6년간 한 길",headlineL1:"손끝이 남기는",headlineAccent:"줄눈시공",headlineTail:"",headlineL3:"디테일라인",subL1:"시공 전, 후 사진으로 먼저 확인하고 결정하세요.",subL2:"무료 견적은 24시간 실시간 답변 드립니다.",ctaPrimary:"실시간 무료 견적 상담",ctaSecondary:"시공 포트폴리오 →",captionTag:"KERAPOXY",captionMeta:"프리미엄 줄눈 시공",signatureMeta:"모든 주거공간, 상업공간 시공 가능",footerItems:["2,000세대 이상 시공 경력","하루 한집 시공","2년 무상 AS"],scrollLabel:"SCROLL",srHeading:"서울·경기 줄눈시공 전문 디테일라인 — 화장실·주방·베란다·현관 케라폭시 줄눈 시공"};function Xf(s){const u=document.querySelector(s);u&&u.scrollIntoView({behavior:"smooth"})}function Y0(){return n.jsxs("section",{className:"hero-b-wrap","aria-label":"히어로",children:[n.jsx("div",{className:"tile-floor","aria-hidden":"true",children:n.jsx("div",{className:"tile-floor__plane",children:n.jsx("div",{className:"tile-floor__shine"})})}),n.jsx("div",{className:"hero-b__tint","aria-hidden":"true"}),n.jsx("div",{className:"hero-b__vignette","aria-hidden":"true"}),n.jsx("div",{className:"hero-b__glow","aria-hidden":"true"}),n.jsx("div",{className:"hero-b__grain","aria-hidden":"true"}),n.jsx("div",{className:"hero-b__padded",children:n.jsxs("div",{className:"hero-b",children:[n.jsx("h2",{className:"sr-only",children:lt.srHeading}),n.jsxs("div",{className:"hero-b__lead",children:[n.jsxs("div",{className:"hero-b__eyebrow",children:[n.jsx("span",{className:"hero-b__eyebrow-line","aria-hidden":"true"}),n.jsx("span",{children:lt.eyebrow})]}),n.jsxs("h1",{className:"hero-b__headline",children:[lt.headlineL1,n.jsx("br",{}),n.jsx("em",{children:lt.headlineAccent}),lt.headlineTail,n.jsx("br",{}),lt.headlineL3]}),n.jsxs("p",{className:"hero-b__sub",children:[lt.subL1,n.jsx("br",{}),lt.subL2]}),n.jsxs("div",{className:"hero-b__cta-row",children:[n.jsxs("button",{type:"button",className:"hero-b__btn",onClick:()=>Xf("#quote"),children:[lt.ctaPrimary,n.jsx("span",{className:"hero-b__btn-arrow","aria-hidden":"true",children:"→"})]}),n.jsx("button",{type:"button",className:"hero-b__btn-link",onClick:()=>Xf("#portfolio"),children:lt.ctaSecondary})]})]}),n.jsxs("div",{className:"hero-b__caption",children:[n.jsxs("div",{className:"hero-b__caption-row",children:[n.jsx("span",{className:"hero-b__caption-dot","aria-hidden":"true"}),n.jsx("span",{className:"hero-b__caption-after",children:lt.captionTag})]}),n.jsx("div",{className:"hero-b__caption-meta",children:lt.captionMeta})]}),n.jsx("div",{className:"hero-b__signature",children:n.jsx("div",{className:"hero-b__signature-meta",children:lt.signatureMeta})}),n.jsxs("div",{className:"hero-b__footer-meta",children:[n.jsx("ul",{className:"hero-b__footer-items",children:lt.footerItems.map(s=>n.jsx("li",{children:s},s))}),n.jsxs("div",{className:"hero-b__scroll","aria-hidden":"true",children:[n.jsx("span",{children:lt.scrollLabel}),n.jsx("span",{className:"hero-b__scroll-bar"})]})]})]})})]})}const Wn={all:"all",itemOne:"itemOne",itemTwo:"itemTwo"},Le={rawPosition:"--rcs-raw-position",currentPosition:"--rcs-current-position",boundsPadding:"--rcs-bounds-padding",handleColor:"--rcs-handle-color"},br={capture:!1,passive:!0},Tr={capture:!0,passive:!1};let Qn=(function(s){return s.ARROW_LEFT="ArrowLeft",s.ARROW_RIGHT="ArrowRight",s.ARROW_UP="ArrowUp",s.ARROW_DOWN="ArrowDown",s})({});const Rr=(s,u,o,d)=>{let f=k.useRef(void 0);k.useEffect(()=>{f.current=u},[u]),k.useEffect(()=>{if(!o?.addEventListener)return;let m=b=>f.current?.(b);return o.addEventListener(s,m,d),()=>{o.removeEventListener(s,m,d)}},[s,o,d])},wm=k.createContext(null),q0=({children:s,...u})=>n.jsx(wm.Provider,{value:u,children:s}),_r=()=>{let s=k.useContext(wm);if(!s)throw Error("useReactCompareSliderContext must be used within the Provider component");return s},Jf=({flip:s})=>{let u={width:"0.85rem",height:"0.85rem",clipPath:"polygon(100% 0%, 100% 100%, 30% 50%)",rotate:s?"180deg":"0deg",outline:`0.5rem solid var(${Le.handleColor})`,outlineOffset:"-0.5rem"};return n.jsx("div",{"aria-hidden":"true",className:"__rcs-handle-arrow",style:u})},G0=({className:s="__rcs-handle-root",buttonStyle:u,linesStyle:o,style:d,...f})=>{let{disabled:m,portrait:b}=_r(),y={boxSizing:"border-box",position:"relative",display:"inline-flex",flexDirection:b?"row":"column",placeItems:"center",width:b?"100%":void 0,height:b?void 0:"100%",cursor:m?"not-allowed":b?"ns-resize":"ew-resize",pointerEvents:"none",[Le.handleColor]:"rgba(255, 255, 255, 1)",...d},x={flexGrow:1,height:b?2:"100%",width:b?"100%":2,outline:`1px solid var(${Le.handleColor})`,outlineOffset:-1,pointerEvents:"auto",boxShadow:"0 0 4px rgba(0,0,0,.5)",...o},h={direction:"ltr",display:"grid",gridAutoFlow:"column",gap:"0.5rem",placeContent:"center",flexShrink:0,width:"3.5rem",height:"3.5rem",borderRadius:"50%",border:`2px solid var(${Le.handleColor})`,color:"inherit",pointerEvents:"auto",backdropFilter:"blur(0.5rem)",WebkitBackdropFilter:"blur(0.5rem)",backgroundColor:"rgba(0, 0, 0, 0.125)",boxShadow:"0 0 4px rgba(0,0,0,.35)",transform:b?"rotate(90deg)":void 0,...u};return n.jsxs("div",{"data-rcs":"handle",...f,className:s,style:y,children:[n.jsx("div",{className:"__rcs-handle-line",style:x}),n.jsxs("div",{className:"__rcs-handle-button",style:h,children:[n.jsx(Jf,{}),n.jsx(Jf,{flip:!0})]}),n.jsx("div",{className:"__rcs-handle-line",style:x})]})},V0=({display:s="block",width:u="100%",height:o="100%",maxWidth:d="100%",boxSizing:f="border-box",objectFit:m="cover",objectPosition:b="center center",...y}={})=>({display:s,width:u,height:o,maxWidth:d,boxSizing:f,objectFit:m,objectPosition:b,...y}),Wf=({alt:s,style:u,...o})=>{let d=V0(u);return n.jsx("img",{"data-rcs":"image",...o,alt:s,style:d})},Q0=({style:s,...u})=>{let{disabled:o,portrait:d,position:f,handleRootRef:m,onHandleRootClick:b,onHandleRootKeyDown:y}=_r(),x={WebkitAppearance:"none",MozAppearance:"none",WebkitTapHighlightColor:"transparent",boxSizing:"border-box",position:"absolute",display:"flex",flexDirection:d?"row":"column",placeItems:"center",contain:"layout",top:d?"-50%":void 0,left:d?void 0:"-50%",width:"100%",height:"100%",background:"none",border:0,padding:0,pointerEvents:"none",appearance:"none",outline:0,zIndex:1,translate:d?`0 var(${Le.currentPosition}) 0`:`var(${Le.currentPosition}) 0 0`,backfaceVisibility:"hidden",willChange:"translate",...s};return Rr("keydown",y,m.current,Tr),Rr("click",b,m.current,Tr),n.jsx("div",{ref:m,tabIndex:0,"aria-label":"Click and drag or focus and use arrow keys to change the position of the slider","aria-orientation":d?"vertical":"horizontal","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":f.current,"aria-disabled":o,"data-rcs":"handle-root",role:"slider",style:x,...u})},Z0=({itemClip:s,portrait:u})=>s===Wn.itemOne?u?`inset(0px 0px calc(100% - var(${Le.currentPosition})) 0px)`:`inset(0px calc(100% - var(${Le.currentPosition})) 0px 0px)`:s===Wn.itemTwo?u?`inset(var(${Le.currentPosition}) 0px 0px 0px)`:`inset(0px 0px 0px var(${Le.currentPosition}))`:"none",Ff=({item:s,style:u,...o})=>{let{clip:d,portrait:f}=_r(),m={KhtmlUserSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",gridArea:"1 / 1",maxWidth:"100%",overflow:"hidden",clipPath:Z0({itemClip:d===Wn.all||d===s?s:void 0,portrait:f}),boxSizing:"border-box",transform:"translateZ(0)",userSelect:"none",zIndex:s===Wn.itemOne?1:void 0,willChange:"clip-path",...u};return n.jsx("div",{"data-rcs":"item","data-rcs-item":s,...o,style:m})},K0=`clamp(var(${Le.boundsPadding}), var(${Le.rawPosition}) - var(${Le.boundsPadding}) + var(${Le.boundsPadding}), calc(100% - var(${Le.boundsPadding})))`,X0=({style:s,...u})=>{let{browsingContext:o,boundsPadding:d,changePositionOnHover:f,clip:m,isDragging:b,portrait:y,position:x,onTouchEnd:h,onPointerDown:T,onPointerMove:w,onPointerUp:B,interactiveTarget:Z,rootRef:S,transition:q,canTransition:L}=_r(),H={position:"relative",boxSizing:"border-box",display:"grid",maxWidth:"100%",maxHeight:"100%",overflow:"hidden",cursor:b?y?"ns-resize":"ew-resize":void 0,touchAction:"pan-y",userSelect:"none",KhtmlUserSelect:"none",msUserSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",transition:L&&q?`${Le.rawPosition} ${q}`:"none",[Le.rawPosition]:`${x.current}%`,[Le.boundsPadding]:d,[Le.currentPosition]:K0,...s};return Rr("touchend",h,Z,Tr),Rr("pointerdown",T,Z,Tr),k.useEffect(()=>{let X=S.current,Y=K=>{b||B(K)};return f&&(X.addEventListener("pointermove",w,br),X.addEventListener("pointerleave",Y,br)),()=>{X.removeEventListener("pointermove",w),X.removeEventListener("pointerleave",Y)}},[f,w,B,b,S]),k.useEffect(()=>{if(b)return o.addEventListener("pointermove",w,br),o.addEventListener("pointerup",B,br),()=>{o?.removeEventListener("pointermove",w),o?.removeEventListener("pointerup",B)}},[w,B,b,o]),n.jsx("div",{ref:S,style:H,"data-rcs":"root","data-rcs-clip":m,...u})};(()=>{try{typeof CSS<"u"&&CSS.registerProperty({name:Le.rawPosition,syntax:"<percentage>",inherits:!0,initialValue:"50%"})}catch(s){console.debug("[react-compare-slider] register CSS property:",s)}})();const J0=()=>globalThis.matchMedia?.("(prefers-reduced-motion: no-preference)")?.matches?"0.15s ease-out":"none",W0=()=>!!globalThis.matchMedia?.("(pointer: coarse)")?.matches,F0=({boundsPadding:s="0px",browsingContext:u=globalThis,changePositionOnHover:o=!1,clip:d=Wn.all,defaultPosition:f=50,disabled:m=!1,keyboardIncrement:b="5%",onlyHandleDraggable:y=W0(),onPositionChange:x,portrait:h=!1,transition:T=J0()}={})=>{let w=k.useRef(null),B=k.useRef(null),Z=k.useRef(f),[S,q]=k.useState(!1),[L,H]=k.useState(!0),[X,Y]=k.useState(null),K=k.useCallback($=>{let ie=Math.min(Math.max($,0),100);w.current?.style.setProperty(Le.rawPosition,`${ie}%`),B.current?.setAttribute("aria-valuenow",`${Math.round(ie)}`),Z.current=ie,x?.(ie)},[x]),ne=k.useCallback(function({x:$,y:ie}){let{width:Oe,height:ke,top:R,left:G}=w.current.getBoundingClientRect();Oe===0||ke===0||K((h?ie-R-u.scrollY:$-G-u.scrollX)/(h?ke:Oe)*100)},[u,h,K]),F=k.useCallback($=>{$.preventDefault(),!(m||$.button!==0)&&(ne({x:$.pageX,y:$.pageY}),q(!0),H(!0))},[m,ne]),P=k.useCallback(function($){H(!1),ne({x:$.pageX,y:$.pageY})},[ne]),je=k.useCallback($=>{q(!1),H(!0)},[]),U=k.useCallback($=>{q(!1),H(!0)},[]),le=k.useCallback($=>{$.preventDefault(),$.currentTarget?.focus()},[]),re=k.useCallback($=>{if(!Object.values(Qn).includes($.key))return;$.preventDefault(),H(!0);let ie=typeof b=="string"?Number.parseFloat(b):b/w.current?.getBoundingClientRect().width*100;K((h?$.key===Qn.ARROW_LEFT||$.key===Qn.ARROW_DOWN:$.key===Qn.ARROW_RIGHT||$.key===Qn.ARROW_UP)?Z.current+ie:Z.current-ie)},[b,h,K]);return k.useLayoutEffect(()=>{Y(y?B.current:w.current)},[y]),k.useEffect(()=>{K(f)},[f,K]),{boundsPadding:s,browsingContext:u,changePositionOnHover:o,clip:d,defaultPosition:f,disabled:m,keyboardIncrement:b,onlyHandleDraggable:y,portrait:h,transition:T,onHandleRootKeyDown:re,onPointerDown:F,onPointerMove:P,onPointerUp:je,onTouchEnd:U,onHandleRootClick:le,canTransition:L,isDragging:S,position:Z,setPosition:K,setPositionFromBounds:ne,rootRef:w,handleRootRef:B,interactiveTarget:X}},$0=({boundsPadding:s,browsingContext:u,changePositionOnHover:o,clip:d,defaultPosition:f,disabled:m,handle:b,itemOne:y,itemTwo:x,keyboardIncrement:h,onPositionChange:T,onlyHandleDraggable:w,portrait:B,transition:Z,...S})=>n.jsx(q0,{...F0({boundsPadding:s,browsingContext:u,changePositionOnHover:o,clip:d,defaultPosition:f,disabled:m,keyboardIncrement:h,onPositionChange:T,onlyHandleDraggable:w,portrait:B,transition:Z}),children:n.jsxs(X0,{...S,children:[n.jsx(Ff,{item:"itemOne",children:y}),n.jsx(Ff,{item:"itemTwo",children:x}),n.jsx(Q0,{children:b||n.jsx(G0,{})})]})}),I0=["전체","현관","화장실","베란다","거실","주방","수영장","목욕탕"],$f=[{id:1,category:"화장실",title:"강남구 아파트 화장실",description:"노후된 타일 줄눈 전면 교체, 방수 처리 완료",location:"서울 강남구",image:"https://readdy.ai/api/search-image?query=clean%20modern%20bathroom%20white%20tiles%20with%20perfect%20grout%20lines%20fresh%20renovation%20bright%20natural%20light%20marble%20effect%20minimalist%20Korean%20apartment%20interior%20clean%20background&width=600&height=800&seq=p1&orientation=portrait"},{id:2,category:"주방",title:"분당 주방 타일 줄눈",description:"주방 벽면 및 바닥 줄눈 보수, 항균 줄눈재 시공",location:"경기 성남시",image:"https://readdy.ai/api/search-image?query=modern%20kitchen%20white%20subway%20tiles%20clean%20grout%20lines%20renovation%20bright%20minimalist%20Korean%20home%20interior%20countertop%20simple%20background&width=600&height=800&seq=p2&orientation=portrait"},{id:3,category:"베란다",title:"마포구 베란다 시공",description:"베란다 바닥 전체 줄눈 제거 후 방수 줄눈재 재시공",location:"서울 마포구",image:"https://readdy.ai/api/search-image?query=apartment%20balcony%20clean%20tile%20floor%20grout%20renovation%20modern%20minimalist%20Korean%20home%20natural%20light%20bright%20clean%20simple%20background&width=600&height=800&seq=p3&orientation=portrait"},{id:4,category:"현관",title:"송파구 아파트 현관",description:"현관 대리석 줄눈 복원, 크리스탈 마감재 사용",location:"서울 송파구",image:"https://readdy.ai/api/search-image?query=apartment%20entrance%20hallway%20marble%20tiles%20clean%20grout%20renovation%20modern%20Korean%20interior%20elegant%20bright%20neutral%20background&width=600&height=800&seq=p4&orientation=portrait"},{id:5,category:"수영장",title:"강동구 수영장 줄눈",description:"수중 전용 방수 줄눈재 시공, 균열 방지 처리",location:"서울 강동구",image:"https://readdy.ai/api/search-image?query=indoor%20swimming%20pool%20blue%20tiles%20clean%20grout%20renovation%20modern%20facility%20clear%20water%20reflection%20professional%20finish%20simple%20background&width=600&height=800&seq=p5&orientation=portrait"},{id:6,category:"거실",title:"용인 거실 바닥 시공",description:"거실 전체 포세린 타일 줄눈 교체, 무수축 시공",location:"경기 용인시",image:"https://readdy.ai/api/search-image?query=modern%20living%20room%20large%20format%20floor%20tiles%20clean%20thin%20grout%20lines%20renovation%20minimalist%20Korean%20apartment%20interior%20neutral%20background&width=600&height=800&seq=p6&orientation=portrait"},{id:7,category:"목욕탕",title:"인천 목욕탕 전면 시공",description:"상업용 목욕탕 전체 줄눈 교체, 곰팡이 방지 처리",location:"인천 남동구",image:"https://readdy.ai/api/search-image?query=public%20bath%20spa%20white%20ceramic%20tiles%20clean%20grout%20renovation%20professional%20facility%20hygienic%20clean%20bright%20simple%20background&width=600&height=800&seq=p7&orientation=portrait"},{id:8,category:"화장실",title:"판교 오피스 화장실",description:"사무용 건물 화장실 전층 줄눈 일괄 시공",location:"경기 성남시",image:"https://readdy.ai/api/search-image?query=office%20restroom%20modern%20gray%20tiles%20clean%20grout%20professional%20renovation%20commercial%20building%20interior%20bright%20neutral%20simple%20background&width=600&height=800&seq=p8&orientation=portrait"}];function P0(){const[s,u]=k.useState("전체"),[o,d]=k.useState(null);k.useEffect(()=>{if(!o)return;const m=T=>{T.key==="Escape"&&d(null)},b=window.scrollY,y=document.documentElement,x=document.body,h=y.style.scrollBehavior;return y.style.overflow="hidden",x.style.overflow="hidden",x.style.position="fixed",x.style.top=`-${b}px`,x.style.left="0",x.style.right="0",x.style.width="100%",window.addEventListener("keydown",m),()=>{y.style.overflow="",x.style.overflow="",x.style.position="",x.style.top="",x.style.left="",x.style.right="",x.style.width="",y.style.scrollBehavior="auto",window.scrollTo(0,b),y.style.scrollBehavior=h,window.removeEventListener("keydown",m)}},[o]);const f=s==="전체"?$f:$f.filter(m=>m.category===s);return n.jsxs(n.Fragment,{children:[n.jsx("section",{id:"portfolio",className:"py-20 px-6 md:px-12 lg:px-20 bg-[var(--bg)]",children:n.jsxs("div",{className:"max-w-7xl mx-auto",children:[n.jsxs("div",{className:"mb-10",children:[n.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Our Work"}),n.jsx("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:"완성된 프로젝트"}),n.jsx("p",{className:"text-[var(--muted)] mt-1 sm:mt-3 text-base",children:"고객님의 공간을 완벽하게 되살렸습니다"})]}),n.jsx("div",{className:"flex flex-wrap gap-2 mb-10",children:I0.map(m=>n.jsx("button",{onClick:()=>u(m),className:`px-5 py-2 rounded-sm text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${s===m?"bg-[var(--accent)] text-white":"bg-white text-[var(--muted)] border border-[var(--line)] hover:border-[var(--line-strong)]"}`,children:m},m))}),n.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4",children:f.map(m=>n.jsxs("div",{onClick:()=>d(m),className:"group relative rounded-sm overflow-hidden cursor-pointer aspect-[3/4]",children:[n.jsx("img",{src:m.image,alt:`${m.title} 줄눈시공 사례 - 디테일라인`,className:"w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"}),n.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"}),m.before&&m.after&&n.jsxs("span",{className:"absolute top-2 right-2 inline-flex items-center gap-1 bg-[var(--accent)] text-white text-[10px] font-medium px-2 py-0.5 rounded-sm uppercase tracking-[0.12em]",children:[n.jsx("i",{className:"ri-contrast-2-line"}),"시공 전·후"]}),n.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-4",children:[n.jsx("span",{className:"inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-sm mb-2",children:m.category}),n.jsx("h3",{className:"text-white font-bold text-sm leading-snug",children:m.title}),n.jsx("p",{className:"text-white/70 text-xs mt-1",children:m.location})]})]},m.id))})]})}),o&&n.jsx("div",{className:"fixed inset-0 z-[100] bg-black/80 flex items-center justify-center px-4",onClick:()=>d(null),children:n.jsxs("div",{className:"relative w-full max-w-3xl",onClick:m=>m.stopPropagation(),children:[n.jsx("button",{type:"button",onClick:()=>d(null),className:"absolute -top-11 right-0 w-9 h-9 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors","aria-label":"닫기",children:n.jsx("i",{className:"ri-close-line text-xl"})}),n.jsx("div",{className:"rounded-sm overflow-hidden shadow-2xl bg-[var(--dark)]",children:o.before&&o.after?n.jsx($0,{itemOne:n.jsx(Wf,{src:o.before,alt:`${o.title} 시공 전`,style:{objectFit:"cover"}}),itemTwo:n.jsx(Wf,{src:o.after,alt:`${o.title} 시공 후`,style:{objectFit:"cover"}}),style:{width:"100%",maxHeight:"80vh"}}):n.jsx("img",{src:o.image,alt:`${o.title} 줄눈시공 사례 - 디테일라인`,onClick:()=>d(null),className:"w-full max-h-[80vh] object-contain cursor-zoom-out"})}),n.jsxs("div",{className:"mt-3 text-white",children:[n.jsx("p",{className:"text-sm font-semibold",children:o.title}),n.jsx("p",{className:"text-xs text-white/70 mt-1",children:o.location})]})]})})]})}const eb=[{n:"01",t:"대표 직접 시공",en:"Founder on every site",d:"외주·하청 없습니다. 첫 현장부터 마지막 줄눈까지 대표가 직접 와서 시공합니다. 7년차, 2,400 가구의 손맛 그대로."},{n:"02",t:"KC 인증 친환경 자재",en:"Certified, low-VOC",d:"케라폭시·정품 폴리우레아만 사용합니다. 각 시공한 자재서에 가족이 있는 동네 수준의 친환경 등급을 고집합니다."},{n:"03",t:"2년 무상 A/S · 서면",en:"2-year written warranty",d:"에폭시 계열 자재 시공에 한해 시공 후 2년간 무상 재시공. 들뜸·변색·곰팡이가 발생하면 서면 보증서대로 책임집니다."},{n:"04",t:"정밀 기계 작업",en:"Calibrated tooling",d:"커터·믹서·트랜퍼스 — 도구 하나하나를 매 현장 캘리브레이션. 균일한 폭, 균일한 마감, 균일한 광택."}];function tb(){return n.jsxs("section",{id:"why",className:"relative overflow-hidden bg-[var(--dark)] py-20 px-6 md:px-12 lg:px-20",children:[n.jsx("div",{className:"why-bg","aria-hidden":"true"}),n.jsxs("div",{className:"relative max-w-7xl mx-auto",children:[n.jsxs("div",{className:"mb-10",children:[n.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Why Detailline"}),n.jsxs("h2",{className:"text-4xl md:text-5xl text-[var(--on-dark)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:["싸지 않습니다. 대신",n.jsx("br",{}),"10년 후에도 그 자리에 있습니다."]}),n.jsxs("p",{className:"text-white/70 mt-1 sm:mt-3 text-base max-w-[56ch]",children:["저희는 가장 싼 업체가 아닙니다. 가장 오래 가게 만드는 업체입니다.",n.jsx("br",{}),"아래 네 가지는 디테일라인이 단 한 번도 타협한 적 없는 기준입니다."]})]}),n.jsx("div",{className:"why-grid mt-12",children:eb.map(s=>n.jsxs("div",{className:"why-cell",children:[n.jsxs("span",{className:"why-cell-num",children:["— ",s.n]}),n.jsx("h3",{className:"why-cell-title",children:s.t}),n.jsx("p",{className:"why-cell-en",children:s.en}),n.jsx("p",{className:"why-cell-desc",children:s.d})]},s.n))}),n.jsxs("div",{className:"why-foot",children:[n.jsx("p",{className:"why-quote-text",children:"“줄눈은 결국 사람이 합니다. 그 위에 누가 잡고 있느냐가 10년을 가릅니다.”"}),n.jsx("span",{className:"why-quote-caption",children:"— 대표 제이슨 —"})]})]}),n.jsx("style",{children:ab})]})}const ab=`
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
`,lb="/assets/bathroom-qafbnYCD.JPG",nb="/assets/outdoor_wc-CJQL97Jp.JPG",ib="/assets/living-BQx9vWF-.jpg",rb="/assets/entrance-D-gIu59c.jpg",sb="/assets/veranda-BQTujKkw.jpg",cb="/assets/commercial-BUQpqBDH.jpg",ob=[{n:"01",t:"욕실 · 화장실",en:"Bathroom",d:"에폭시 계열 전용. 물이 닿는 환경엔 폴리우레아 시공 불가 → 2년 무상 A/S 대상.",tag:"에폭시 계열",photo:lb},{n:"02",t:"외부 화장실",en:"Outdoor WC",d:"내부 화장실과 동일 → 에폭시 계열만 시공. 물 접촉 환경에서 폴리우레아 시공 불가.",tag:"에폭시 계열",photo:nb},{n:"03",t:"거실",en:"Living",d:"바닥 줄눈. 20평대 기준 폴리우레아 100만원 · 에폭시 150만원. 30평+ 별도 견적.",tag:"에폭시 / 폴리우레아",photo:ib},{n:"04",t:"현관",en:"Entrance",d:"첫인상을 결정짓는 1평. 외부 접촉 폴리우레아 가성비 선택 권장.",tag:"폴리우레아 권장",photo:rb},{n:"05",t:"베란다",en:"Veranda",d:"결로·온도차에 폴리우레아 권장. 빠른 경화 2~4시간 마무리.",tag:"폴리우레아 권장",photo:sb},{n:"06",t:"상업 공간",en:"Commercial",d:"카페·매장·호텔·수영장. 야간·새벽 시공 협의 가능. 환경별 자재 매칭.",tag:"맞춤 자재",photo:cb}];function db(){return n.jsxs("section",{id:"scope",className:"scope-section bg-[var(--bg)] py-20 px-6 md:px-12 lg:px-20",children:[n.jsxs("div",{className:"max-w-7xl mx-auto",children:[n.jsxs("div",{className:"mb-10",children:[n.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Scope"}),n.jsxs("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:["줄눈이 필요한 ",n.jsx("br",{}),n.jsx("span",{className:"text-[var(--accent)]",children:"모든 곳에"})]}),n.jsxs("p",{className:"text-[var(--muted)] mt-1 sm:mt-3 text-base max-w-[56ch]",children:["주거 · 상업 · 시설까지. 디테일라인은 환경별로 자재와 시공 방식을 다르게 가져갑니다.",n.jsx("br",{}),"한 가지 방법으로 모든 곳을 시공하지 않습니다."]})]}),n.jsx("div",{className:"scope-grid mt-12",children:ob.map(s=>n.jsxs("article",{className:"scope-card",children:[n.jsxs("div",{className:`scope-imgph ${s.photo?"has-photo":""}`,children:[s.photo?n.jsx("img",{src:s.photo,alt:`${s.t} 줄눈시공 - 디테일라인`,className:"scope-imgph-img",loading:"lazy"}):n.jsx("span",{className:"scope-imgph-label","aria-hidden":"true",children:s.en.toUpperCase()}),n.jsx("span",{className:"scope-imgph-corner","aria-hidden":"true",children:s.n})]}),n.jsxs("div",{className:"scope-meta",children:[n.jsxs("span",{className:"scope-meta-mono",children:["— ",s.n," · ",s.en.toUpperCase()]}),n.jsx("h3",{className:"scope-meta-title",children:s.t}),n.jsx("p",{className:"scope-meta-body",children:s.d}),n.jsxs("span",{className:"scope-meta-tag",children:[n.jsx("span",{className:"scope-tag-dot","aria-hidden":"true"}),s.tag]})]})]},s.n))})]}),n.jsx("style",{children:ub})]})}const ub=`
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
`,pb="/assets/re_1-iaNcuT_7.jpg",fb="/assets/re_2-CcDcgcOi.jpg",mb="/assets/re_3-DPjtmN0S.jpg",hb=[{star:5,t:"줄눈은 다 똑같은 줄 알았는데",name:"최OO 고객님",photo:{label:"BANPO",corner:"거실 특",src:pb},body:"다른 곳에서 한 줄눈이 2년만에 변색됐어요. 디테일라인은 하루 종일 걸렸지만 마감이 차원이 다릅니다. 모서리, 코너, 실리콘까지 손이 갔어요. 비싸지만 다시 하라면 또 합니다."},{star:5,t:"대표님이 직접 오십니다",name:"정OO 고객님",photo:{label:"HANNAM",corner:"욕실",src:fb},body:"견적부터 시공, A/S 안내까지 같은 분이세요. 중간에 누구한테 다시 설명할 필요가 없습니다. 시공도 깔끔하고, 시공 후에도 친절히 안내해 주시고요."},{star:5,t:"2년 보증서 진짜 줍니다",name:"강OO 고객님",photo:{label:"JAMSIL",corner:"욕실",src:mb},body:"대부분 구두 보증인데 여기는 서면으로 보증서를 줍니다. 솔직히 그거 하나만으로도 결정 났어요. 시공도 깔끔하고 청소까지 다 해주고 가시는 게 인상 깊었습니다."}];function xb({n:s}){return n.jsx("div",{className:"rev-stars",role:"img","aria-label":`별점 5점 만점에 ${s}점`,children:[0,1,2,3,4].map(u=>n.jsx("svg",{className:u<s?"rev-star rev-star-filled":"rev-star rev-star-empty",width:"13",height:"13",viewBox:"0 0 13 13","aria-hidden":"true",children:n.jsx("path",{d:"M6.5 0l1.8 4.3 4.7.4-3.6 3 1.1 4.6L6.5 9.9 2.5 12.3l1.1-4.6L0 4.7l4.7-.4z"})},u))})}function gb(){return n.jsxs("section",{id:"reviews",className:"rev-section bg-[var(--bg-2)] py-20 px-6 md:px-12 lg:px-20",children:[n.jsxs("div",{className:"max-w-7xl mx-auto",children:[n.jsxs("div",{className:"mb-10",children:[n.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Reviews"}),n.jsxs("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:[n.jsx("span",{className:"md:block text-[var(--accent)]",children:"지금까지 2,000세대 이상의"})," ",n.jsx("span",{className:"md:block",children:"가족이 맡겨 주셨습니다"})]}),n.jsxs("p",{className:"text-[var(--muted)] mt-1 sm:mt-3 text-base max-w-[56ch]",children:["실제 시공 후 30일 내 작성된 후기 중 일부입니다.",n.jsx("br",{}),"좋은 말씀도, 아쉬운 말씀도 모두 받고 있습니다."]})]}),n.jsx("div",{className:"rev-grid mt-12",children:hb.map(s=>n.jsxs("article",{className:"rev-card",children:[n.jsx("div",{className:"rev-card-photo",children:n.jsxs("div",{className:`rev-imgph ${s.photo.src?"has-photo":""}`,children:[s.photo.src?n.jsx("img",{src:s.photo.src,alt:`${s.photo.label} · ${s.photo.corner}`,className:"rev-imgph-img",loading:"lazy"}):n.jsx("span",{className:"rev-imgph-label","aria-hidden":"true",children:s.photo.label}),n.jsx("span",{className:"rev-imgph-corner","aria-hidden":"true",children:s.photo.corner})]})}),n.jsxs("div",{className:"rev-card-body",children:[n.jsx(xb,{n:s.star}),n.jsxs("h3",{className:"rev-card-title",children:["“",s.t,"”"]}),n.jsx("p",{className:"rev-card-text",children:s.body}),n.jsx("div",{className:"rev-card-footer",children:n.jsx("div",{className:"rev-card-name",children:s.name})})]})]},s.name))})]}),n.jsx("style",{children:bb})]})}const bb=`
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
`,Er="spc:quote-prefill",xo="spc:quote-prefill-changed",vb={화장실:"화장실","거실 바닥":"거실",현관:"현관",베란다:"베란다",세탁실:"기타","다용도/실외기실":"기타"};function yb(s){return vb[s]??"기타"}function jb(s){const u=new Set;for(const o of s)u.add(yb(o));return Array.from(u)}const _t={화장실:{label:"화장실",en:"BATHROOM",icon:"🛁",rec:"kera",materialLocked:!0,multiple:!0,typeAxis:{lbl:"타입",options:["욕조형","샤워부스형"]},scopeAxis:{lbl:"범위",options:["바닥만","전체(바닥+벽)"]},variants:[{id:"bt-floor",label:"욕조형 · 바닥만",type:"욕조형",scope:"바닥만",kera:{신축:40,구축:50},poly:null},{id:"bt-full",label:"욕조형 · 전체 (바닥+벽)",type:"욕조형",scope:"전체(바닥+벽)",kera:{신축:90,구축:100},poly:null},{id:"sh-floor",label:"샤워부스형 · 바닥만",type:"샤워부스형",scope:"바닥만",kera:{신축:45,구축:55},poly:null},{id:"sh-full",label:"샤워부스형 · 전체 (바닥+벽)",type:"샤워부스형",scope:"전체(바닥+벽)",kera:{신축:95,구축:105},poly:null}]},"거실 바닥":{label:"거실 바닥",en:"LIVING FLOOR",icon:"🛋️",rec:"kera",materialLocked:!0,note:"34평 이하 기준",variants:[{id:"lv",label:"34평 미만",kera:{신축:150,구축:150},poly:null}]},현관:{label:"현관",en:"ENTRANCE",icon:"🚪",rec:"poly",materialLocked:!1,variants:[{id:"ent",label:"바닥",kera:{신축:25,구축:25},poly:{신축:5,구축:10}}]},세탁실:{label:"세탁실",en:"LAUNDRY",icon:"🧺",rec:"poly",materialLocked:!1,variants:[{id:"ldy",label:"바닥",kera:{신축:30,구축:30},poly:{신축:15,구축:15}}]},베란다:{label:"베란다",en:"VERANDA",icon:"🌿",rec:"poly",materialLocked:!1,variants:[{id:"ver",label:"바닥",kera:{신축:30,구축:30},poly:{신축:15,구축:15}}]},"다용도/실외기실":{label:"다용도/실외기실",en:"UTILITY",icon:"🪟",rec:"poly",materialLocked:!1,variants:[{id:"utl",label:"바닥",kera:{신축:20,구축:20},poly:{신축:10,구축:10}}]}},Cr={kera:"케라폭시",poly:"폴리우레아"},oo={1:{name:"세트 1",sub:"기본",desc:"화장실 바닥 ×2 + 현관",prices:{신축:100,구축:120},components:[{space:"화장실",variantId:"bt-floor",material:"kera"},{space:"화장실",variantId:"sh-floor",material:"kera"},{space:"현관",variantId:"ent",material:"poly"}],services:[]},2:{name:"세트 2",sub:"표준",desc:"세트 1 + 양조벽 or 샤워벽 3면 ×1곳",prices:{신축:125,구축:145},components:[{space:"화장실",variantId:"bt-full",material:"kera"},{space:"화장실",variantId:"sh-floor",material:"kera"},{space:"현관",variantId:"ent",material:"poly"}],services:["젠 다이 실리콘 ×2","세면대 실리콘 ×2"]},3:{name:"세트 3",sub:"완성",desc:"화장실 바닥 ×2 + 전체벽 ×2 + 현관",prices:{신축:220,구축:240},components:[{space:"화장실",variantId:"bt-full",material:"kera"},{space:"화장실",variantId:"sh-full",material:"kera"},{space:"현관",variantId:"ent",material:"poly"}],services:["젠 다이 실리콘 ×2","세면대 실리콘 ×2","싱크볼 실리콘","주방벽 케라폭시"]},4:{name:"세트 4",sub:"확장",desc:"세트 2 + 세탁실",prices:{신축:140,구축:160},components:[{space:"화장실",variantId:"bt-full",material:"kera"},{space:"화장실",variantId:"sh-floor",material:"kera"},{space:"현관",variantId:"ent",material:"poly"},{space:"세탁실",variantId:"ldy",material:"poly"}],services:["젠 다이 실리콘 ×2","세면대 실리콘 ×2","주방 실리콘","싱크볼 실리콘"]}},kb=["화장실","거실 바닥","현관","세탁실","베란다","다용도/실외기실"],Xn=(s,u)=>_t[s]?.variants.find(o=>o.id===u),go=(s,u)=>({"욕조형|바닥만":"bt-floor","욕조형|전체(바닥+벽)":"bt-full","샤워부스형|바닥만":"sh-floor","샤워부스형|전체(바닥+벽)":"sh-full"})[`${s}|${u}`]??"bt-floor",bo=(s,u)=>{const o=_t[s.space],d=Xn(s.space,s.variantId);if(!o||!d)return null;const f=o.materialLocked?o.rec:s.material,m=d[f];return m?m[u]:null},vr=()=>`sel-${Math.random().toString(36).slice(2,9)}-${Date.now().toString(36)}`,tl=s=>s.toLocaleString("ko-KR");function wb(){const[s,u]=k.useState("신축"),[o,d]=k.useState([]),[f,m]=k.useState(null),[b,y]=k.useState(!1),[x,h]=k.useState(!1),T=o.filter(U=>U.space==="화장실"),w=T.length>=1,B=T.length>=2,Z=U=>o.some(le=>le.space===U),S=()=>m(null),q=U=>{if(S(),Z(U))d(le=>le.filter(re=>re.space!==U));else{const le=_t[U],re=le.variants[0];d($=>[...$,{key:vr(),space:U,variantId:re.id,material:le.rec}])}},L=()=>{S(),d(w?U=>U.filter(le=>le.space!=="화장실"):U=>[...U,{key:vr(),space:"화장실",variantId:"bt-floor",material:"kera"}])},H=()=>{if(w)if(S(),B){const le=o.map((re,$)=>re.space==="화장실"?$:-1).filter(re=>re>=0)[1];d(re=>re.filter(($,ie)=>ie!==le))}else{const U=o.find(ie=>ie.space==="화장실"),re=(U?Xn("화장실",U.variantId)?.type:void 0)==="욕조형"?"샤워부스형":"욕조형",$=go(re,"바닥만");d(ie=>[...ie,{key:vr(),space:"화장실",variantId:$,material:"kera"}])}},X=U=>{if(f===U){m(null),d([]);return}const re=oo[U].components.map($=>({key:vr(),space:$.space,variantId:$.variantId,material:$.material}));d(re),m(U)},Y=(U,le)=>{S(),d(re=>re.map($=>$.key===U?{...$,...le}:$))},K=U=>{S(),d(le=>le.filter(re=>re.key!==U))},ne=()=>{d([]),m(null)},F=k.useMemo(()=>{const U=o.filter(R=>R.space==="화장실"),le=o.map(R=>{const G=_t[R.space],ee=Xn(R.space,R.variantId),ge=G.materialLocked?G.rec:R.material,V=bo(R,s),v=U.length>1&&R.space==="화장실";return{key:R.key,space:R.space,icon:G.icon,label:`${R.space}${v?" · "+ee.label:""}`,material:ge,unit:V}}),re=le.reduce((R,G)=>R+(G.unit??0),0),$=le.some(R=>R.unit===null),ie=f?oo[f]:null,Oe=ie?ie.prices[s]:re,ke=ie?Math.max(0,re-Oe):0;return{lineItems:le,itemsSum:re,hasNull:$,finalTotal:Oe,savings:ke,set:ie}},[o,s,f]),P=()=>{if(o.length===0)return;const U=[];U.push(`[가격 계산기에서 전달된 구성 · ${s} 기준]`),F.set&&U.push(`✓ ${F.set.name} · ${F.set.sub} (${F.set.desc})`),U.push("");const le=o.filter(ie=>ie.space==="화장실").length;let re=0;for(const ie of o){const Oe=_t[ie.space],ke=Xn(ie.space,ie.variantId),R=Oe.materialLocked?Oe.rec:ie.material,G=Cr[R],ee=bo(ie,s),ge=ee===null?"별도 견적":`${ee}만원`;let V;ie.space==="화장실"?(re+=1,V=`화장실${le>1?` ${re}`:""} · ${ke.label}`):Oe.variants.length>1||ke.label!=="바닥"?V=`${ie.space} · ${ke.label}`:V=ie.space,U.push(`· ${V} · ${G} — ${ge}`)}if(F.set&&F.set.services.length>0){U.push(""),U.push("함께 제공 서비스:");for(const ie of F.set.services)U.push(`· ${ie}`)}U.push(""),U.push("───────────"),F.set&&F.savings>0&&(U.push(`개별 합계: ${F.itemsSum}만원`),U.push(`세트 적용: -${F.savings}만원`)),U.push(`예상 견적가: ${F.finalTotal}만원${F.hasNull?" +α":""} (VAT 포함, 34평·300타일 기준)`),U.push("※정확한 금액은 유선상담 진행 후 안내드립니다.");const $={areas:jb(o.map(ie=>ie.space)),message:U.join(`
`).slice(0,500)};try{sessionStorage.setItem(Er,JSON.stringify($)),window.dispatchEvent(new CustomEvent(xo))}catch{}h(!0)},je=()=>{h(!1);const U=document.querySelector("#quote");U&&U.scrollIntoView({behavior:"smooth"})};return k.useEffect(()=>{if(!x)return;const U=re=>{re.key==="Escape"&&h(!1)};document.addEventListener("keydown",U);const le=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",U),document.body.style.overflow=le}},[x]),n.jsxs("section",{id:"calc",className:"spc-section py-20 px-6 md:px-12 lg:px-20",children:[n.jsxs("div",{className:"spc-container max-w-7xl mx-auto",children:[n.jsxs("div",{className:"mb-10",children:[n.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Price Calculator"}),n.jsxs("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:[n.jsxs("span",{className:"md:block",children:["공간을 고르면,",n.jsx("br",{})]})," ",n.jsx("span",{className:"md:block",children:"가격이 바로 보입니다"})]}),n.jsx("p",{className:"text-stone-500 mt-1 sm:mt-3 text-base max-w-[56ch]",children:"필요한 공간만 골라 실시간 견적을 확인하세요"}),n.jsxs("div",{className:"spc-info-chips mt-5",children:[n.jsx("span",{className:"spc-info-chip",children:"34평 이하 기준"}),n.jsx("span",{className:"spc-info-chip",children:"300개 타일 기준"}),n.jsx("span",{className:"spc-info-chip",children:"VAT 포함"})]})]}),n.jsxs("div",{className:"spc-body",children:[n.jsxs("div",{className:"spc-left",children:[n.jsxs("div",{className:"spc-step",children:[n.jsxs("div",{className:"spc-step-head",children:[n.jsx("div",{className:"spc-step-num",children:"01"}),n.jsxs("div",{className:"spc-step-titles",children:[n.jsx("div",{className:"spc-step-title",children:"시공할 공간을 선택해 주세요"}),n.jsx("div",{className:"spc-step-sub",children:"여러 공간을 자유롭게 조합하세요 · 화장실은 최대 2곳까지"})]}),o.length>0&&n.jsx("button",{type:"button",className:"spc-step-action",onClick:ne,children:"전체 초기화"})]}),n.jsx("div",{className:"spc-step-body",children:n.jsxs("div",{className:"spc-space-grid",children:[n.jsx(uo,{icon:_t.화장실.icon,label:"화장실 1",en:"BATHROOM",selected:w,onClick:L}),n.jsx(uo,{icon:_t.화장실.icon,label:"화장실 (추가)",en:"BATHROOM +",selected:B,disabled:!w,onClick:H}),kb.slice(1).map(U=>n.jsx(uo,{icon:_t[U].icon,label:_t[U].label,en:_t[U].en,selected:Z(U),onClick:()=>q(U)},U))]})})]}),n.jsxs("div",{className:"spc-step",children:[n.jsxs("button",{type:"button",className:"spc-accordion-head",onClick:()=>y(U=>!U),"aria-expanded":b,children:[n.jsx("div",{className:"spc-step-num",children:"02"}),n.jsxs("div",{className:"spc-step-titles",children:[n.jsx("div",{className:"spc-step-title",children:"또는 간편 세트 패키지로 선택"}),n.jsx("div",{className:"spc-step-sub",children:"자주 함께 시공되는 4가지 구성"})]}),n.jsx("span",{className:"spc-accordion-chev","aria-hidden":"true",children:b?"−":"+"})]}),b&&n.jsxs("div",{className:"spc-step-body",children:[n.jsx("div",{className:"spc-set-grid",children:["1","2","3","4"].map(U=>n.jsx(Nb,{id:U,set:oo[U],selected:f===U,houseType:s,onPick:()=>X(U)},U))}),n.jsx("p",{className:"spc-set-note",children:"※ 세트 가격은 컴포넌트 개별 합산과 동일하지 않습니다. 추가 서비스 포함 구성이며, 4개 세트는 시각적으로 동등하게 노출됩니다."})]})]}),o.length>0&&n.jsxs("div",{className:"spc-step",children:[n.jsxs("div",{className:"spc-step-head",children:[n.jsx("div",{className:"spc-step-num",children:"03"}),n.jsxs("div",{className:"spc-step-titles",children:[n.jsx("div",{className:"spc-step-title",children:"세부 옵션을 조정해 보세요"}),n.jsx("div",{className:"spc-step-sub",children:"타입 · 범위 · 자재를 변경하면 견적이 실시간으로 업데이트됩니다"})]})]}),n.jsx("div",{className:"spc-step-body",children:n.jsx("div",{className:"spc-selrow-list",children:o.map((U,le)=>n.jsx(Sb,{sel:U,houseType:s,bathroomIndex:U.space==="화장실"?T.findIndex(re=>re.key===U.key):-1,bathroomCount:T.length,onUpdate:re=>Y(U.key,re),onRemove:()=>K(U.key)},U.key))})})]})]}),n.jsx("aside",{className:"spc-right",children:n.jsxs("div",{className:"spc-result",children:[n.jsx("div",{className:"spc-result-eyebrow",children:n.jsx("span",{className:"spc-result-ht-lbl",children:"줄눈 시공 계산기"})}),n.jsxs("div",{className:"spc-result-ht",children:[n.jsx("span",{className:"spc-result-ht-lbl",children:"주거 유형"}),n.jsx("div",{className:"spc-ht-toggle",children:["신축","구축"].map(U=>n.jsx("button",{type:"button",className:`spc-ht-btn ${s===U?"on":""}`,onClick:()=>u(U),children:U},U))})]}),F.set&&n.jsxs("div",{className:"spc-set-banner",children:[n.jsxs("div",{className:"spc-set-banner-meta",children:[n.jsx("span",{className:"spc-set-banner-lbl",children:"★ SET APPLIED"}),n.jsxs("span",{className:"spc-set-banner-name",children:[F.set.name," ",n.jsxs("span",{className:"spc-set-banner-sub",children:["· ",F.set.sub]})]})]}),n.jsx("button",{type:"button",className:"spc-set-banner-clear",onClick:S,"aria-label":"세트 해제",children:"×"})]}),o.length===0?n.jsxs("div",{className:"spc-result-empty",children:["좌측에서 공간을 개별로 선택하거나,",n.jsx("br",{}),"세트 패키지를 골라 보세요."]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"spc-result-section",children:[n.jsxs("div",{className:"spc-result-section-lbl",children:["선택 항목 · ",F.lineItems.length,"건"]}),n.jsx("ul",{className:"spc-line-items",children:F.lineItems.map(U=>n.jsxs("li",{className:"spc-line-item",children:[n.jsxs("div",{className:"spc-li-main",children:[n.jsx("span",{className:"spc-li-icon","aria-hidden":"true",children:U.icon}),n.jsxs("div",{className:"spc-li-text",children:[n.jsx("div",{className:"spc-li-label",children:U.label}),n.jsxs("div",{className:"spc-li-meta",children:[Cr[U.material]," · ",s]})]})]}),n.jsx("div",{className:"spc-li-price",children:U.unit===null?n.jsx("span",{className:"spc-li-quote",children:"별도 견적"}):n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"spc-li-val",children:tl(U.unit)}),n.jsx("span",{className:"spc-li-unit",children:"만원"})]})})]},U.key))})]}),F.set&&F.set.services.length>0&&n.jsxs("div",{className:"spc-result-services",children:[n.jsx("div",{className:"spc-result-section-lbl",children:"+ 함께 제공되는 서비스"}),n.jsx("ul",{className:"spc-services-list",children:F.set.services.map(U=>n.jsxs("li",{className:"spc-service-item",children:["✓ ",U]},U))})]}),n.jsxs("div",{className:"spc-totals",children:[F.set&&n.jsxs("div",{className:"spc-subtotal-row",children:[n.jsx("span",{className:"spc-totals-lbl",children:"개별 합계"}),n.jsxs("span",{className:"spc-subtotal-val",children:[n.jsx("span",{className:"strike",children:tl(F.itemsSum)}),n.jsx("span",{className:"spc-totals-suffix",children:"만원"})]})]}),F.set&&F.savings>0&&n.jsxs("div",{className:"spc-discount-note",children:["세트 적용 −",tl(F.savings),"만원"]}),n.jsxs("div",{className:"spc-final-row",children:[n.jsx("span",{className:"spc-totals-lbl spc-totals-lbl-accent",children:"최종 견적가"}),n.jsxs("span",{className:"spc-final-price",children:[n.jsx("span",{className:"spc-final-val",children:tl(F.finalTotal)}),n.jsx("span",{className:"spc-totals-suffix spc-totals-suffix-lg",children:"만원"}),F.hasNull&&n.jsx("span",{className:"spc-hasnull",children:"+α"})]})]}),F.hasNull&&n.jsx("div",{className:"spc-hasnull-note",children:"‘별도 견적’ 항목이 포함되어 있어 현장 확인 후 안내드립니다."})]}),n.jsx("button",{type:"button",className:"spc-cta",onClick:P,children:"이 구성으로 견적 받기 →"})]}),n.jsxs("div",{className:"spc-policy",children:[n.jsx("span",{className:"spc-policy-chip",children:"📷 원격 견적"}),n.jsx("span",{className:"spc-policy-chip",children:"💡 2년 A/S · 케라폭시"}),n.jsx("span",{className:"spc-policy-chip",children:"✓ VAT 포함"})]}),n.jsx("p",{className:"spc-fineprint",children:"※ 34평 이하 · 300개 타일 기준 예상가. 정확한 금액은 사진·정보 확인 후 서면 견적서로 안내드립니다."})]})})]})]}),x&&n.jsx("div",{className:"spc-modal-overlay",role:"dialog","aria-modal":"true","aria-labelledby":"spc-modal-title",onClick:()=>h(!1),children:n.jsxs("div",{className:"spc-modal",onClick:U=>U.stopPropagation(),children:[n.jsx("button",{type:"button",className:"spc-modal-close",onClick:()=>h(!1),"aria-label":"닫기",children:"×"}),n.jsx("span",{className:"spc-modal-eyebrow",children:"견적 전달 완료"}),n.jsx("h3",{id:"spc-modal-title",className:"spc-modal-title",children:"견적 구성이 자동으로 담겼습니다"}),n.jsxs("p",{className:"spc-modal-body",children:[n.jsx("strong",{children:"이름 · 연락처 · 시공 위치 · 희망 날짜"}),n.jsx("br",{}),"4가지 정보만 입력해 주시면",n.jsx("br",{}),"빠른 시간 내 유선으로 안내드리겠습니다."]}),n.jsx("button",{type:"button",className:"spc-modal-cta",onClick:je,children:"견적 폼으로 이동 →"})]})}),n.jsx("style",{children:zb})]})}function uo({icon:s,label:u,en:o,selected:d,disabled:f,onClick:m}){return n.jsxs("button",{type:"button",className:`spc-space-card ${d?"on":""} ${f?"is-disabled":""}`,onClick:m,disabled:f,"aria-pressed":d,children:[n.jsx("span",{className:"spc-sc-icon","aria-hidden":"true",children:s}),n.jsxs("span",{className:"spc-sc-meta",children:[n.jsx("span",{className:"spc-sc-label",children:u}),n.jsx("span",{className:"spc-sc-en",children:o})]}),n.jsx("span",{className:"spc-sc-action","aria-hidden":"true",children:f?"🔒":d?"✓":"＋"})]})}function Nb({id:s,set:u,selected:o,houseType:d,onPick:f}){return n.jsxs("div",{className:`spc-set-card ${o?"on":""}`,children:[n.jsxs("div",{className:"spc-set-head",children:[n.jsxs("span",{className:"spc-set-num",children:["SET 0",s]}),n.jsxs("h3",{className:"spc-set-name",children:[u.name," ",n.jsxs("span",{className:"spc-set-sub",children:["· ",u.sub]})]})]}),n.jsx("p",{className:"spc-set-desc",children:u.desc}),n.jsxs("div",{className:"spc-set-prices",children:[n.jsxs("div",{className:"spc-set-price",children:[n.jsx("span",{className:"spc-set-price-lbl",children:"신축"}),n.jsx("span",{className:"spc-set-price-val",children:tl(u.prices.신축)}),n.jsx("span",{className:"spc-set-price-unit",children:"만원"})]}),n.jsxs("div",{className:"spc-set-price",children:[n.jsx("span",{className:"spc-set-price-lbl",children:"구축"}),n.jsx("span",{className:"spc-set-price-val",children:tl(u.prices.구축)}),n.jsx("span",{className:"spc-set-price-unit",children:"만원"})]})]}),u.services.length>0&&n.jsxs("div",{className:"spc-set-services",children:[n.jsx("div",{className:"spc-set-services-lbl",children:"+ 함께 제공"}),n.jsx("ul",{children:u.services.map(m=>n.jsxs("li",{children:["· ",m]},m))})]}),n.jsx("button",{type:"button",className:"spc-set-cta",onClick:f,children:o?"✓ 적용 중 · 다시 누르면 해제":"이 세트로 선택 →"}),n.jsxs("p",{className:"spc-set-note-inner",children:[d==="신축"?"신축":"구축"," 기준"]})]})}function Sb({sel:s,houseType:u,bathroomIndex:o,bathroomCount:d,onUpdate:f,onRemove:m}){const b=_t[s.space],y=Xn(s.space,s.variantId),x=s.space==="화장실",h=b.materialLocked?b.rec:s.material,T=bo(s,u),w=S=>{if(!x)return;const q=y.scope??"바닥만";f({variantId:go(S,q)})},B=S=>{if(!x)return;const q=y.type??"욕조형";f({variantId:go(q,S)})},Z=x&&d>1?`${b.label} ${o+1}`:b.label;return n.jsxs("div",{className:"spc-sel-row",children:[n.jsxs("div",{className:"spc-sel-row-head",children:[n.jsxs("div",{className:"spc-sel-row-title",children:[n.jsx("span",{className:"spc-sr-icon","aria-hidden":"true",children:b.icon}),n.jsx("span",{children:Z})]}),n.jsx("button",{type:"button",className:"spc-sel-x",onClick:m,"aria-label":"이 항목 삭제",children:"×"})]}),n.jsxs("div",{className:"spc-sel-row-body",children:[x&&b.typeAxis&&n.jsxs("div",{className:"spc-sr-block",children:[n.jsx("div",{className:"spc-sr-lbl",children:b.typeAxis.lbl}),n.jsx("div",{className:"spc-sr-chips",children:b.typeAxis.options.map(S=>n.jsx("button",{type:"button",className:`spc-sr-chip ${y.type===S?"on":""}`,onClick:()=>w(S),children:S},S))})]}),x&&b.scopeAxis&&n.jsxs("div",{className:"spc-sr-block",children:[n.jsx("div",{className:"spc-sr-lbl",children:b.scopeAxis.lbl}),n.jsx("div",{className:"spc-sr-chips",children:b.scopeAxis.options.map(S=>n.jsx("button",{type:"button",className:`spc-sr-chip ${y.scope===S?"on":""}`,onClick:()=>B(S),children:S},S))})]}),!x&&b.variants.length>1&&n.jsxs("div",{className:"spc-sr-block",children:[n.jsx("div",{className:"spc-sr-lbl",children:"옵션"}),n.jsx("div",{className:"spc-sr-chips",children:b.variants.map(S=>n.jsx("button",{type:"button",className:`spc-sr-chip ${s.variantId===S.id?"on":""}`,onClick:()=>f({variantId:S.id}),children:S.label},S.id))})]}),b.materialLocked?n.jsx("div",{className:"spc-sr-locked",children:"EPOXY ONLY · 물 접촉 환경 → 폴리우레아 시공 불가"}):n.jsxs("div",{className:"spc-sr-block",children:[n.jsxs("div",{className:"spc-sr-lbl",children:["자재 ",n.jsxs("span",{className:"spc-sr-lbl-aux",children:["권장 ",Cr[b.rec]]})]}),n.jsx("div",{className:"spc-sr-chips",children:["kera","poly"].map(S=>n.jsx("button",{type:"button",className:`spc-sr-chip ${h===S?"on":""}`,onClick:()=>f({material:S}),children:Cr[S]},S))})]}),n.jsxs("div",{className:"spc-sr-price",children:[n.jsxs("span",{className:"spc-sr-price-lbl",children:[u," · 예상가"]}),T===null?n.jsx("span",{className:"spc-sr-quote",children:"QUOTE NEEDED · 별도 견적"}):n.jsxs("span",{className:"spc-sr-price-val-wrap",children:[n.jsx("span",{className:"spc-sr-price-val",children:tl(T)}),n.jsx("span",{className:"spc-sr-price-unit",children:"만원"})]})]})]})]})}const zb=`
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
`,Eb="/assets/grouting-Bwtwubk9.jpg",Ab="/assets/grouting_m-MwMcW6AJ.jpg",Tb=["Since 2019","누적 2,000+ 현장","전 시공 대표 직접 마감"];function Rb(){return n.jsxs("section",{id:"about",className:"ab-section",children:[n.jsxs("div",{className:"ab-photo-wrap","aria-hidden":"true",children:[n.jsxs("picture",{children:[n.jsx("source",{media:"(max-width: 900px)",srcSet:Ab}),n.jsx("img",{src:Eb,alt:"",className:"ab-photo",loading:"lazy"})]}),n.jsx("div",{className:"ab-photo-fade"})]}),n.jsx("div",{className:"ab-text-outer px-6 md:px-12 lg:px-20",children:n.jsx("div",{className:"max-w-7xl mx-auto",children:n.jsxs("div",{className:"ab-text",children:[n.jsx("span",{className:"ab-eyebrow",children:"About Detailline"}),n.jsxs("h2",{className:"ab-headline",children:["보이지 않는",n.jsx("br",{}),"한 줄에도,",n.jsx("br",{}),n.jsx("span",{className:"ab-accent",children:"집요한 정성."})]}),n.jsxs("p",{className:"ab-body",children:["줄눈 한 줄은 손가락 한 마디 폭. 하지만 그 한 줄이",n.jsx("br",{className:"ab-br-pc"}),"공간의 인상을 좌우합니다. 디테일라인은 그 한 줄을",n.jsx("br",{className:"ab-br-pc"}),"끝까지 다듬는 사람들의 이름입니다."]}),n.jsx("ul",{className:"ab-badges",children:Tb.map(s=>n.jsxs("li",{className:"ab-badge",children:[n.jsx("span",{className:"ab-dot","aria-hidden":"true"}),s]},s))})]})})}),n.jsx("style",{children:Cb})]})}const Cb=`
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
`,If=[{id:1,question:"줄눈 시공은 어떤 공간에 적용할 수 있나요?",answer:"화장실, 주방, 현관, 베란다, 거실, 수영장, 목욕탕 등 타일이 시공된 모든 공간에 적용 가능합니다. 주거 공간뿐만 아니라 상업 시설, 공공시설에도 시공 가능하며, 실내외 모두 가능합니다. 공간별 특성에 맞는 전용 줄눈재를 사용합니다."},{id:2,question:"시공 기간은 얼마나 걸리나요?",answer:"일반 가정용 화장실 기준으로 보통 반나절(4~6시간) 내에 완료됩니다. 시공 면적과 오염 정도에 따라 다를 수 있으며, 대형 공간이나 전면 교체의 경우 1~2일이 소요될 수 있습니다. 정확한 기간은 현장 확인 후 안내드립니다."},{id:3,question:"기존 줄눈을 제거하고 새로 시공하나요?",answer:"오염 정도와 상태에 따라 달라집니다. 경미한 오염의 경우 세척 후 덧시공이 가능하지만, 곰팡이가 심하거나 들뜸 현상이 있는 경우에는 전동 공구를 이용해 기존 줄눈을 완전히 제거한 후 새로 시공합니다. 현장 방문 후 최적의 방법을 제안드립니다."},{id:4,question:"시공 후 관리 방법이 있나요?",answer:"시공 완료 후 24시간은 물에 닿지 않도록 해주세요. 이후에는 일반 중성 세제로 청소하시면 됩니다. 강산성·강알칼리성 세제는 줄눈재를 손상시킬 수 있으니 피해주세요. 정기적인 청소만으로도 시공 효과가 오래 유지됩니다. 보통 5~10년 이상 효과가 지속됩니다."},{id:5,question:"곰팡이가 심한 경우에도 시공이 가능한가요?",answer:"네, 가능합니다. 먼저 항균·항곰팡이 처리를 진행한 후, 곰팡이 방지 성분이 포함된 항균 줄눈재를 사용하여 시공합니다. 심한 경우에는 타일과 방수층까지 점검하여 근본적인 원인을 해결합니다. 재발 방지를 위한 처리까지 함께 진행합니다."},{id:6,question:"견적은 어떻게 받을 수 있나요?",answer:'하단의 "무료 견적 신청" 폼을 작성하시거나 전화로 문의 주시면 됩니다. 시공 면적, 타일 종류, 현재 상태 등 간단한 정보와 사진을 보내주시면 더 정확한 견적을 드릴 수 있습니다. 현장 방문 견적도 무료로 진행하고 있습니다.'}];function Ob(s){return{"@context":"https://schema.org","@type":"FAQPage",mainEntity:s.map(({q:u,a:o})=>({"@type":"Question",name:u,acceptedAnswer:{"@type":"Answer",text:o}}))}}function Mb(s,u){document.getElementById(s)?.remove();const o=document.createElement("script");return o.type="application/ld+json",o.id=s,o.textContent=JSON.stringify(u),document.head.appendChild(o),()=>{document.getElementById(s)?.remove()}}function Db(){const[s,u]=k.useState(null);k.useEffect(()=>Mb("faq-jsonld",Ob(If.map(f=>({q:f.question,a:f.answer})))),[]);const o=d=>{u(f=>f===d?null:d)};return n.jsx("section",{id:"faq",className:"py-20 px-6 md:px-12 lg:px-20 bg-[var(--bg-2)]",children:n.jsxs("div",{className:"max-w-3xl mx-auto",children:[n.jsxs("div",{className:"text-center mb-10",children:[n.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"FAQ"}),n.jsx("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:"자주 묻는 질문"}),n.jsx("p",{className:"text-[var(--muted)] mt-3 text-base",children:"궁금하신 점을 확인하세요"})]}),n.jsx("div",{className:"space-y-0",children:If.map((d,f)=>n.jsxs("div",{className:`border-b ${f===0?"border-t":""} border-[var(--line)]`,children:[n.jsxs("button",{onClick:()=>o(d.id),className:"w-full flex items-start justify-between gap-4 py-5 text-left cursor-pointer group",children:[n.jsx("span",{className:`text-base font-medium leading-snug transition-colors ${s===d.id?"text-[var(--ink)]":"text-[var(--muted)] group-hover:text-[var(--ink-2)]"}`,children:d.question}),n.jsx("div",{className:`w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full transition-all ${s===d.id?"bg-[var(--ink)] text-[var(--paper)] rotate-45":"bg-[var(--paper)] text-[var(--muted)] border border-[var(--line)]"}`,children:n.jsx("i",{className:"ri-add-line text-sm"})})]}),s===d.id&&n.jsx("div",{className:"pb-10 bg-[var(--paper)]",children:n.jsx("p",{className:"px-5 pt-3 text-[var(--ink-2)] text-sm leading-relaxed",children:d.answer})})]},d.id))}),n.jsxs("div",{className:"mt-12 text-center bg-[var(--paper)] border border-[var(--line)] rounded-sm py-10 px-6",children:[n.jsx("p",{className:"text-stone-600 font-medium mb-2",children:"원하는 답을 찾지 못하셨나요?"}),n.jsx("p",{className:"text-stone-400 text-sm mb-6",children:"전화로 편하게 문의해 주세요"}),n.jsx("div",{className:"flex justify-center",children:n.jsxs("a",{href:"tel:010-8005-6674",onClick:()=>Ut.phoneClick("faq"),className:"inline-flex h-12 sm:min-w-[180px] items-center justify-center gap-2 px-7 text-sm font-medium cursor-pointer rounded-sm bg-[var(--accent)] text-white transition-all hover:bg-[var(--accent-deep)]",children:[n.jsx("i",{className:"ri-phone-line"}),"010-8005-6674"]})})]})]})})}const Nm=["일","월","화","수","목","금","토"];function Pf(s,u){return s.getFullYear()===u.getFullYear()&&s.getMonth()===u.getMonth()&&s.getDate()===u.getDate()}function em(s){return`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`}function _b(s){return`${s.getFullYear()}년 ${s.getMonth()+1}월 ${s.getDate()}일 (${Nm[s.getDay()]})`}function Ub({name:s="date",onChange:u}){const o=new Date,[d,f]=k.useState(!1),[m,b]=k.useState(o.getFullYear()),[y,x]=k.useState(o.getMonth()),[h,T]=k.useState(null),w=Y=>{const K=new Date(m,y+Y,1);b(K.getFullYear()),x(K.getMonth())},B=Y=>{T(Y),u?.(em(Y)),f(!1)},Z=()=>{T(null),u?.("")},S=()=>{b(o.getFullYear()),x(o.getMonth()),B(o)},q=new Date(m,y,1).getDay(),L=new Date(m,y+1,0).getDate(),H=new Date(o.getFullYear(),o.getMonth(),o.getDate()),X=[...Array(q).fill(null),...Array.from({length:L},(Y,K)=>new Date(m,y,K+1))];return n.jsxs("div",{className:"relative w-full",children:[n.jsxs("button",{type:"button",onClick:()=>f(Y=>!Y),className:"w-full flex items-center justify-between px-4 py-3 rounded-sm border border-[var(--line)] bg-[var(--paper)] hover:border-[var(--line-strong)] transition-all duration-150",children:[n.jsx("span",{className:`text-sm ${h?"text-[var(--ink)]":"text-[var(--muted-2)]"}`,children:h?_b(h):"날짜를 선택해 주세요"}),n.jsx("i",{className:"ri-calendar-line text-stone-400 text-base"})]}),n.jsx("input",{type:"hidden",name:s,value:h?em(h):""}),d&&n.jsxs("div",{className:"absolute z-50 mt-2 w-full bg-[var(--paper)] border border-[var(--line)] rounded-sm shadow-xl overflow-hidden",children:[n.jsxs("div",{className:"flex items-center justify-between px-5 pt-5 pb-3",children:[n.jsx("button",{type:"button",onClick:()=>w(-1),className:"w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-100 transition-colors",children:n.jsx("i",{className:"ri-arrow-left-s-line text-stone-500"})}),n.jsxs("span",{className:"text-sm font-medium text-stone-800 tracking-tight",children:[m,"년 ",y+1,"월"]}),n.jsx("button",{type:"button",onClick:()=>w(1),className:"w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-100 transition-colors",children:n.jsx("i",{className:"ri-arrow-right-s-line text-stone-500"})})]}),n.jsx("div",{className:"grid grid-cols-7 px-3 pb-1",children:Nm.map((Y,K)=>n.jsx("div",{className:`text-center text-xs font-medium py-1 ${K===0||K===6?"text-[var(--accent)]":"text-[var(--muted-2)]"}`,children:Y},Y))}),n.jsx("div",{className:"grid grid-cols-7 px-3 pb-4 gap-y-1",children:X.map((Y,K)=>{if(!Y)return n.jsx("div",{},`empty-${K}`);const ne=Y<H,F=Pf(Y,o),P=h?Pf(Y,h):!1,je=Y.getDay()===0,U=Y.getDay()===6;let le="w-9 h-9 mx-auto flex items-center justify-center rounded-full text-sm transition-all duration-100 ";return P?le+="bg-[var(--ink)] text-[var(--paper)] font-medium":ne?le+="text-[var(--muted-2)]/50 cursor-not-allowed":F?le+="border border-[var(--accent)] text-[var(--accent)] font-medium hover:bg-[var(--accent)]/10":je||U?le+="text-[var(--muted-2)] hover:bg-[var(--bg-2)]":le+="text-[var(--ink-2)] hover:bg-[var(--bg-2)]",n.jsx("button",{type:"button",disabled:ne,onClick:()=>B(Y),className:le,children:Y.getDate()},Y.toISOString())})}),n.jsxs("div",{className:"border-t border-[var(--line)] px-4 py-3 flex justify-between items-center",children:[n.jsx("button",{type:"button",onClick:Z,className:"text-xs text-[var(--muted-2)] hover:text-[var(--ink-2)] transition-colors",children:"초기화"}),n.jsx("button",{type:"button",onClick:S,className:"text-xs font-medium text-[var(--accent)] hover:text-[var(--accent-deep)] transition-colors",children:"오늘"})]})]})]})}const tm=["현관","화장실","베란다","거실","주방","수영장","목욕탕","기타"],Bb="0x4AAAAAADGHPfvxD-MhAQbY";function Hb(s){return s.length<=3?s:s.length<=7?`${s.slice(0,3)}-${s.slice(3)}`:`${s.slice(0,3)}-${s.slice(3,7)}-${s.slice(7,11)}`}function Lb(){const[s,u]=k.useState(!1),[o,d]=k.useState(!1),[f,m]=k.useState(0),[b,y]=k.useState(""),[x,h]=k.useState(""),[T,w]=k.useState(""),[B,Z]=k.useState(""),[S,q]=k.useState([]),[L,H]=k.useState(""),[X,Y]=k.useState(!1),[K,ne]=k.useState({}),[F,P]=k.useState(""),je=k.useRef(null),U=k.useRef(null),le=500;k.useEffect(()=>{let V=!1;const v=()=>{if(!V&&je.current){if(typeof window.turnstile>"u"){setTimeout(v,100);return}U.current=window.turnstile.render(je.current,{sitekey:Bb,callback:O=>P(O),"error-callback":()=>P(""),"expired-callback":()=>P(""),theme:"light",size:"normal"})}};return v(),()=>{V=!0,U.current&&window.turnstile&&(window.turnstile.remove(U.current),U.current=null)}},[]),k.useEffect(()=>{const V=()=>{try{const v=sessionStorage.getItem(Er);if(!v)return;const O=JSON.parse(v);Array.isArray(O.areas)&&O.areas.length>0&&q(O.areas.filter(Q=>tm.includes(Q))),typeof O.message=="string"&&O.message.length>0&&(H(O.message),m(O.message.length)),ne(Q=>({...Q,areas:""}))}catch{}};return V(),window.addEventListener(xo,V),()=>window.removeEventListener(xo,V)},[]);const re=V=>{const v=V.target.value.replace(/[0-9]/g,"").slice(0,9);y(v),ne(O=>({...O,name:""}))},$=V=>{const v=V.target.value.replace(/[^0-9]/g,"").slice(0,11);h(v),ne(O=>({...O,phone:""}))},ie=V=>{w(V.target.value.slice(0,39)),ne(v=>({...v,location:""}))},Oe=V=>{Z(V),ne(v=>({...v,date:""}))},ke=V=>{q(v=>v.includes(V)?v.filter(J=>J!==V):[...v,V]),ne(v=>({...v,areas:""}))},R=V=>{Y(V.target.checked),ne(v=>({...v,privacy:""}))},G=()=>{const V={};return b.trim()||(V.name="이름을 입력해주세요."),x.length?x.length<10&&(V.phone="올바른 연락처를 입력해주세요."):V.phone="연락처를 입력해주세요.",T.trim()||(V.location="시공위치를 입력해주세요."),B||(V.date="희망날짜를 선택해주세요."),S.length===0&&(V.areas="시공공간을 1개 이상 선택해주세요."),X||(V.privacy="개인정보처리방침에 동의해주세요."),F||(V.cfToken="봇 검증을 완료해주세요."),ne(V),Object.keys(V).length===0},ee=b.trim().length>0&&x.length>=10&&T.trim().length>0&&B.length>0&&S.length>0&&F.length>0&&X,ge=async V=>{if(V.preventDefault(),!G())return;const v=V.currentTarget;if(v.querySelector('[name="company_website"]')?.value||""){u(!0);return}if((v.querySelector('[name="message"]')?.value||"").length>le)return;const J=new FormData(v),se=new URLSearchParams;J.forEach((ue,be)=>{be!=="phone"&&be!=="company_website"&&se.append(be,ue.toString())}),se.append("phone",x),se.append("cf_turnstile_token",F),d(!0);try{await fetch("https://script.google.com/macros/s/AKfycbyQBvfjjtCFSY4WZUL2Qv_vIwz4xbXyLF5pygpV5d_jpICW_hhXnDnr1r6jZHhS_kEayA/exec",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:se.toString()}),Ut.formSubmit(S,T.split(" ")[0]||"unknown"),u(!0),y(""),h(""),w(""),Z(""),q([]),H(""),Y(!1),m(0),ne({}),P("");try{sessionStorage.removeItem(Er)}catch{}U.current&&window.turnstile&&window.turnstile.reset(U.current)}catch{alert("제출 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.")}finally{d(!1)}};return n.jsx("section",{id:"quote",className:"py-10 px-6 md:px-12 lg:px-20 bg-[var(--bg)]",children:n.jsxs("div",{className:"max-w-4xl mx-auto",children:[n.jsxs("div",{className:"text-center mb-10",children:[n.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Free Estimate"}),n.jsx("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:"무료 견적 상담 신청"}),n.jsx("p",{className:"text-[var(--muted)] mt-3",children:"양식을 작성하시면 24시간 내 연락드립니다"})]}),n.jsx("div",{className:"bg-white rounded-sm pt-5 px-5 pb-6 md:p-12 border border-[var(--line)]",style:{colorScheme:"light"},children:s?n.jsxs("div",{className:"text-center py-12",children:[n.jsx("div",{className:"w-16 h-16 flex items-center justify-center bg-[var(--ink)] rounded-full mx-auto mb-4",children:n.jsx("i",{className:"ri-check-line text-[var(--paper)] text-2xl"})}),n.jsx("h3",{className:"text-xl font-medium text-[var(--ink)] mb-2",children:"신청이 완료되었습니다!"}),n.jsxs("p",{className:"text-[var(--muted)] text-sm",children:["24시간 내에 담당자가 연락드릴 예정입니다.",n.jsx("br",{}),"감사합니다."]}),n.jsx("button",{onClick:()=>{u(!1),y(""),h(""),w(""),Z(""),q([]),H(""),Y(!1),m(0),ne({});try{sessionStorage.removeItem(Er)}catch{}},className:"mt-6 text-sm text-stone-400 underline cursor-pointer",children:"다시 신청하기"})]}):n.jsxs("form",{"data-readdy-form":!0,onSubmit:ge,className:"space-y-6",children:[n.jsxs("div",{"aria-hidden":"true",style:{position:"absolute",left:"-9999px",width:"1px",height:"1px",overflow:"hidden"},children:[n.jsx("label",{htmlFor:"company_website",children:"Website (do not fill)"}),n.jsx("input",{type:"text",id:"company_website",name:"company_website",tabIndex:-1,autoComplete:"off",defaultValue:""})]}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[n.jsxs("div",{children:[n.jsxs("label",{className:"block text-sm font-medium text-[var(--ink-2)] mb-1.5",children:["이름 ",n.jsx("span",{className:"text-red-400",children:"*"})]}),n.jsx("input",{type:"text",name:"name",required:!0,value:b,onChange:re,maxLength:9,placeholder:"홍길동",className:"w-full px-4 py-3 border border-[var(--line)] rounded-sm text-base text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors"}),K.name&&n.jsx("p",{className:"mt-1 text-xs text-red-500",children:K.name})]}),n.jsxs("div",{children:[n.jsxs("label",{className:"block text-sm font-medium text-[var(--ink-2)] mb-1.5",children:["연락처 ",n.jsx("span",{className:"text-red-400",children:"*"})]}),n.jsxs("div",{className:"relative",children:[n.jsx("input",{type:"tel",name:"phone",required:!0,value:Hb(x),onChange:$,inputMode:"numeric",maxLength:13,placeholder:"010-1234-5678",className:"w-full px-4 py-3 border border-[var(--line)] rounded-sm text-base text-stone-700 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors"}),n.jsxs("span",{className:`absolute right-4 top-3 text-xs font-medium ${x.length>=10?"text-[var(--accent)]":"text-[var(--muted-2)]"}`,children:[x.length,"/11"]})]}),K.phone&&n.jsx("p",{className:"mt-1 text-xs text-red-500",children:K.phone})]})]}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[n.jsxs("div",{children:[n.jsxs("label",{className:"block text-sm font-medium text-[var(--ink-2)] mb-1.5",children:["시공 아파트 ",n.jsx("span",{className:"text-red-400",children:"*"})]}),n.jsx("input",{type:"text",name:"location",required:!0,value:T,onChange:ie,maxLength:39,placeholder:"예 : 서초구 반포동 자이아파트",className:"w-full px-4 py-3 border border-[var(--line)] rounded-sm text-base text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors"}),K.location&&n.jsx("p",{className:"mt-1 text-xs text-red-500",children:K.location})]}),n.jsxs("div",{children:[n.jsxs("label",{className:"block text-sm font-medium text-[var(--ink-2)] mb-1.5",children:["희망 날짜 ",n.jsx("span",{className:"text-red-400",children:"*"})]}),n.jsx(Ub,{name:"date",onChange:Oe}),K.date&&n.jsx("p",{className:"mt-1 text-xs text-red-500",children:K.date})]})]}),n.jsxs("div",{children:[n.jsxs("label",{className:"block text-sm font-medium text-stone-700 mb-2",children:["시공 공간 (중복 선택 가능) ",n.jsx("span",{className:"text-red-400",children:"*"})]}),n.jsx("div",{className:"flex flex-wrap gap-2",children:tm.map(V=>n.jsxs("label",{className:"cursor-pointer",children:[n.jsx("input",{type:"checkbox",name:"areas",value:V,checked:S.includes(V),onChange:()=>ke(V),className:"sr-only peer"}),n.jsx("span",{className:"inline-block px-5 py-2 rounded-sm text-sm font-medium bg-white text-[var(--muted)] border border-[var(--line)] hover:border-[var(--line-strong)] peer-checked:bg-[var(--accent)] peer-checked:text-white peer-checked:border-[var(--accent)] transition-all cursor-pointer whitespace-nowrap",children:V})]},V))}),K.areas&&n.jsx("p",{className:"mt-1 text-xs text-red-500",children:K.areas})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-sm font-medium text-[var(--ink-2)] mb-1.5",children:"상세 내용"}),n.jsxs("div",{className:"relative",children:[n.jsx("textarea",{name:"message",rows:8,maxLength:le,value:L,onChange:V=>{H(V.target.value),m(V.target.value.length)},placeholder:"시공 면적, 현재 상태, 요청 사항 등을 자유롭게 작성해 주세요.",className:"w-full px-4 py-3 border border-[var(--line)] rounded-sm text-base text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors resize-none"}),n.jsxs("span",{className:"absolute bottom-3 right-4 text-xs text-stone-400",children:[f," / ",le]})]})]}),n.jsxs("div",{className:"border-t text-sm text-center text-stone-500 px-4 py-3 border-stone-200",children:["희망 날짜에 시공이 어려울 수 있는 점 양해 부탁드립니다. ",n.jsx("br",{}),n.jsx("span",{className:"font-bold text-red-400",children:"정확한 시공 가능 일정은 상담 후 안내드리며,"})," 최대한 희망에 맞춰 드릴 수 있도록 노력하겠습니다."]}),n.jsxs("div",{children:[n.jsx("div",{ref:je,className:"flex justify-center"}),K.cfToken&&n.jsx("p",{className:"mt-1 text-xs text-red-500 text-center",children:K.cfToken})]}),n.jsxs("div",{className:"flex items-start gap-3",children:[n.jsx("input",{type:"checkbox",id:"privacy",name:"privacy",required:!0,checked:X,onChange:R,className:"w-5 h-5 mt-0.5 cursor-pointer accent-[var(--accent)]"}),n.jsxs("label",{htmlFor:"privacy",className:"text-sm text-stone-400 leading-relaxed cursor-pointer",children:["수집된 개인정보(이름, 연락처, 시공 위치, 희망 일정, 시공 공간, 상세 내용)는 견적 상담 목적으로만 사용되며, 상담 완료 후 즉시 폐기됩니다."," ",n.jsx(Je,{to:"/privacy",target:"_blank",rel:"noopener noreferrer",onClick:V=>V.stopPropagation(),className:"text-[var(--accent)] font-semibold underline underline-offset-2 hover:opacity-80",children:"개인정보 처리방침"}),"에 동의합니다."]})]}),K.privacy&&n.jsx("p",{className:"-mt-3 text-xs text-red-500",children:K.privacy}),n.jsx("button",{type:"submit",disabled:o||!ee,className:"w-full py-4 bg-[var(--ink)] text-[var(--paper)] font-medium text-base rounded-sm hover:bg-[var(--accent-deep)] transition-all cursor-pointer whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed",children:o?"제출 중...":"견적 신청하기"})]})})]})})}const Sm="https://www.detailline.kr",Yb="디테일라인",qb=`${Sm}/og_banner.jpg`,Gb={"/":{title:"서울·경기 줄눈시공 전문 디테일라인 | 케라폭시·폴리우레아 시공",description:"서울·경기 줄눈시공 전문업체 디테일라인. 화장실·주방·베란다·현관 케라폭시/폴리우레아 줄눈. 대표 직접 시공, KC 인증 친환경 자재, 시공 후 2년 무상 A/S. 무료 견적 상담.",keywords:"줄눈시공, 케라폭시, 폴리우레아, 화장실 줄눈, 욕실 줄눈, 강남 줄눈시공, 서초 줄눈시공, 송파 줄눈시공, 강동 줄눈시공, 분당 줄눈시공, 판교 줄눈시공, 줄눈 교체, 타일 줄눈, 서울 줄눈시공, 경기 줄눈시공, 아파트 줄눈"},"/info/why-grout":{title:"줄눈시공 왜 해야 하나요? 곰팡이·들뜸 해결 | 디테일라인",description:"줄눈 곰팡이·균열·들뜸의 원인과 해결법. 케라폭시 줄눈으로 영구 해결. 시공 사례·비교 사진 포함. 강남·서초·분당 화장실 줄눈 시공 전문.",keywords:"줄눈 곰팡이, 줄눈 들뜸, 줄눈 균열, 줄눈 교체 시기, 화장실 곰팡이 제거, 욕실 줄눈 곰팡이, 줄눈 검정, 줄눈 변색, 강남 화장실 줄눈, 서초 욕실 줄눈"},"/info/kerafoxy":{title:"케라폭시란? 친환경 줄눈 자재의 모든 것 | 디테일라인",description:"케라폭시는 이탈리아산 에폭시 줄눈재로, 곰팡이·변색 방지 효과가 일반 줄눈 대비 10배 이상. KC 인증 친환경 — 강남·서초 아파트 시공 다수.",keywords:"케라폭시, 케라폭시 줄눈, 에폭시 줄눈, 친환경 줄눈, 케라폭시 효과, 케라폭시 후기, 마페이 케라폭시, 강남 케라폭시, 서초 케라폭시"},"/info/kerafoxy-product":{title:"케라폭시 제품 6종 비교 | 케라폭시·스타라이크·푸가리테",description:"케라폭시 클래식·이지디자인·스타라이크·스타라이크 에보·스타라이크 프로·푸가리테 6종 비교. 용도·공간·예산별 추천.",keywords:"케라폭시 제품, 스타라이크, 푸가리테, 케라폭시 종류, 케라폭시 색상, 스타라이크 에보, 스타라이크 프로, 줄눈재 비교, 마페이 줄눈"},"/info/comparison":{title:"폴리우레아 vs 케라폭시 — 어떤 줄눈이 맞을까? | 디테일라인",description:"폴리우레아·케라폭시 시공 비용·내구성·시공 시간 비교. 공간별 추천 자재. 화장실·베란다·현관 어디에 뭘 써야 할지 가이드.",keywords:"폴리우레아 케라폭시 차이, 줄눈 자재 비교, 폴리우레아 줄눈, 폴리우레아 단점, 케라폭시 단점, 줄눈 종류 비교, 베란다 폴리우레아, 화장실 케라폭시"},"/info/kerafoxy-price":{title:"케라폭시 줄눈 가격 안내 — 공간별·평수별 시공비 | 디테일라인",description:"케라폭시 줄눈 시공 가격을 공간(화장실·주방·베란다·현관)별, 신축/구축별로 안내. 강남·서초·분당 지역 시공비 표준 단가표. 무료 견적 상담.",keywords:"케라폭시 가격, 줄눈시공 가격, 화장실 줄눈 가격, 강남 줄눈 가격, 서초 줄눈 가격, 분당 줄눈 가격, 케라폭시 시공비, 줄눈 견적, 아파트 줄눈 가격, 30평 줄눈 가격"},"/privacy":{title:"개인정보처리방침 | 디테일라인",description:"디테일라인 개인정보처리방침",keywords:""}};function nl(s){const{pathname:u}=Bt();k.useEffect(()=>{const o=Gb[u],d=o?.title??Yb,f=o?.description??"",m=o?.keywords??"",b=qb,y=`${Sm}${u==="/"?"/":u}`;document.title=d,Vl("description",f),Vl("keywords",m),Zn("og:title",d),Zn("og:description",f),Zn("og:url",y),Zn("og:image",b),Zn("og:image:secure_url",b),Vl("twitter:title",d),Vl("twitter:description",f),Vl("twitter:image",b),Vb("canonical",y),Vl("robots","index,follow,max-image-preview:large")},[u,s])}function Vl(s,u){let o=document.querySelector(`meta[name="${s}"]`);o||(o=document.createElement("meta"),o.name=s,document.head.appendChild(o)),o.content=u}function Zn(s,u){let o=document.querySelector(`meta[property="${s}"]`);o||(o=document.createElement("meta"),o.setAttribute("property",s),document.head.appendChild(o)),o.content=u}function Vb(s,u){let o=document.querySelector(`link[rel="${s}"]`);o||(o=document.createElement("link"),o.rel=s,document.head.appendChild(o)),o.href=u}function Qb(){return nl(),n.jsxs("div",{className:"min-h-screen bg-white",children:[n.jsx(al,{}),n.jsxs("main",{children:[n.jsx(Y0,{}),n.jsx(Rb,{}),n.jsx(P0,{}),n.jsx(tb,{}),n.jsx(db,{}),n.jsx(gb,{}),n.jsx(wb,{}),n.jsx(Db,{}),n.jsx(Lb,{})]}),n.jsx(L0,{}),n.jsx(ll,{})]})}const Zb="/assets/before-DA_T54W5.jpg",Kb="/assets/after-Cw81fPXQ.jpg",Xb="/assets/kerafoxy-C29B-TmB.jpg",Jb="/assets/bg-zCXDQjbF.webp",Wb="/assets/bg_m-D6VSEPhL.webp",Fb=[{k:"소재 분류",v:"에폭시 계열"},{k:"원산지",v:"이탈리아"},{k:"수명",v:"10년+"},{k:"A/S",v:"2년"}],$b=[{k:"압축강도",v:"75 N/mm²"},{k:"수축률",v:"≈ 0% (거의 없음)"},{k:"흡수율",v:"< 0.1 g/cm²"}],Ib=[{idx:"01",title:"강력한 내수성",body:"물에 강한 에폭시 성분으로 화장실·욕실의 지속적인 수분 노출에도 변형 없이 줄눈이 유지됩니다.",k:"흡수율",v:"< 0.1 g/cm²"},{idx:"02",title:"곰팡이·세균 차단",body:"항균 성분이 배합되어 습한 환경에서도 곰팡이와 세균이 번식하지 않아 위생적인 공간을 유지합니다.",k:"항균 등급",v:"JIS Z 2801"},{idx:"03",title:"다양한 색상 선택",body:"화이트·베이지·그레이·블랙 등 20여 가지 색상으로 인테리어 스타일에 맞는 선택이 가능합니다.",k:"컬러 옵션",v:"20+ Colors"},{idx:"04",title:"월등한 내구성",body:"일반 시멘트 줄눈 대비 3~5배 긴 수명을 자랑하며, 균열·탈락 없이 깔끔한 마감이 오래 유지됩니다.",k:"예상 수명",v:"10년+"},{idx:"05",title:"손쉬운 유지관리",body:"표면이 매끄럽고 오염이 잘 스며들지 않아 간단한 청소만으로 항상 깨끗한 상태를 유지할 수 있습니다.",k:"청소",v:"솔 청소 가능"},{idx:"+",title:"대표 직접 시공. 2년 무상 A/S.",body:"소재의 차이만큼이나 중요한 것은 시공자의 손. 디테일라인은 모든 현장을 대표가 직접 마감합니다.",k:"누적",v:"2,000+ 세대",dark:!0}],Pb=[{name:"시멘트 줄눈",tag:"Standard",items:["시공 비용이 가장 저렴","1~2년 후 변색·균열 발생","곰팡이 번식에 취약","주기적 재시공 필요"]},{name:"케라폭시 줄눈",tag:"Detailline 추천",hero:!0,items:["에폭시 결합 — 균열·변색 없음","항균 처리 — 곰팡이 차단","20+ 색상으로 인테리어 매칭","10년+ 수명 · 2년 무상 A/S"]},{name:"폴리우레아",tag:"Heavy-duty",items:["압도적 내구성·하중 강도","주차장·산업 현장에 적합","주거 인테리어엔 과도","색상·질감 선택이 제한적"]}],ev=[{code:"SP · 01",ko:"화장실 · 욕실",en:"Bath / Powder Room",desc:"가장 많이 사용하는 공간으로, 케라폭시의 내수성과 항균 기능이 극대화됩니다."},{code:"SP · 02",ko:"주방 · 싱크대 주변",en:"Kitchen / Counter",desc:"음식물 오염과 물에 강해 주방 타일 줄눈에 이상적인 소재입니다."},{code:"SP · 03",ko:"베란다 · 발코니",en:"Veranda / Balcony",desc:"자외선과 온도 변화에도 변색이 거의 없어 실외 공간에도 적합합니다."},{code:"SP · 04",ko:"현관 바닥",en:"Entrance Floor",desc:"먼지와 오염이 많은 현관 바닥에서도 변색 없이 깔끔한 마감을 유지합니다."},{code:"SP · 05",ko:"수영장 · 목욕탕",en:"Pool / Sauna",desc:"항시 수분에 노출되는 환경에서도 박리 없이 완벽한 방수 성능을 발휘합니다."}],tv=[{k:"시공 시간",v:"1일 (평형별 상이)"},{k:"건조 시간",v:"24시간 (완전 경화)"},{k:"사용 가능",v:"48시간 후 (물 사용 OK)"},{k:"A/S",v:"2년 (무상)"}],av=[{idx:"No. 02 · Pricing",href:"/info/kerafoxy-price",title:"케라폭시 가격 안내",desc:"시공 비용에 영향을 주는 요인과 평형별 표준 가격을 한눈에."},{idx:"No. 03 · Product",href:"/info/kerafoxy-product",title:"케라폭시 계열 제품 소개",desc:"케라폭시·인터라컬러 등 주요 제품 라인업과 색상 가이드."},{idx:"No. 04 · Compare",href:"/info/comparison",title:"폴리우레아 vs 케라폭시",desc:"두 소재의 차이점과, 어떤 공간에 어떤 소재가 적합한지."},{idx:"No. 05 · Why",href:"/info/why-grout",title:"줄눈시공 하는 이유",desc:"위생·미관·내구성을 위한 필수 시공인 이유를 정리했습니다."}];function yr({num:s,ko:u,en:o,title:d,lede:f,dark:m}){return n.jsxs("div",{className:`kf-sec-head ${m?"kf-sec-head-dark":""}`,children:[n.jsxs("div",{className:"kf-sec-bar",children:[n.jsx("span",{className:"kf-sec-n",children:s}),n.jsx("span",{className:"kf-sec-rule"}),n.jsxs("span",{className:"kf-sec-lbl",children:[n.jsx("span",{className:"kf-sec-ko",children:u}),n.jsx("span",{className:"kf-sec-en",children:o})]})]}),n.jsxs("div",{className:"kf-sec-body",children:[n.jsx("h2",{className:"kf-sec-title",children:d}),n.jsx("p",{className:"kf-sec-lede",children:f})]})]})}function lv(){const s=_a();nl(),k.useEffect(()=>{window.scrollTo(0,0)},[]);const u=()=>{s("/#calc"),setTimeout(()=>{const o=document.querySelector("#calc");o&&o.scrollIntoView({behavior:"smooth"})},300)};return n.jsxs("div",{className:"kf-page",children:[n.jsx(al,{}),n.jsxs("header",{className:"kf-hero","data-screen-label":"01 Hero",children:[n.jsx("div",{className:"kf-hero-bg",style:{"--hero-img-d":`url(${Jb})`,"--hero-img-m":`url(${Wb})`},"aria-hidden":"true"}),n.jsxs("div",{className:"kf-container kf-hero-inner",children:[n.jsx("div",{className:"kf-eyebrow kf-eyebrow-light",children:"Grout Knowledge · 01"}),n.jsxs("h1",{className:"kf-hero-title",children:["케라폭시 줄눈,",n.jsx("br",{}),"한 줄의 깊이 ",n.jsx("em",{children:"완벽"}),"의 기준."]}),n.jsxs("p",{className:"kf-hero-lede",children:["마페이의 80년 경험치를 흡수한 2액형 고성능 줄눈 소재.",n.jsx("br",{}),"일반 시멘트 줄눈과 무엇이 다른지, 왜 프리미엄 공간에 선택되는지 정리했습니다."]}),n.jsx("ul",{className:"kf-hero-meta",children:Fb.map(o=>n.jsxs("li",{children:[n.jsx("span",{className:"kf-meta-k",children:o.k}),n.jsx("span",{className:"kf-meta-v",children:o.v})]},o.k))})]})]}),n.jsx("nav",{className:"kf-crumb","aria-label":"현재 위치",children:n.jsxs("div",{className:"kf-container kf-crumb-inner",children:[n.jsx(Je,{to:"/",className:"kf-crumb-item",children:"홈"}),n.jsx("span",{className:"kf-crumb-sep",children:"/"}),n.jsx("span",{className:"kf-crumb-item",children:"줄눈 정보"}),n.jsx("span",{className:"kf-crumb-sep",children:"/"}),n.jsx("span",{className:"kf-crumb-here",children:"케라폭시 줄눈이란?"})]})}),n.jsx("section",{className:"kf-section","data-screen-label":"02 Introduction",children:n.jsx("div",{className:"kf-container",children:n.jsxs("div",{className:"kf-intro",children:[n.jsxs("div",{className:"kf-intro-left",children:[n.jsx("div",{className:"kf-eyebrow",children:"Introduction · 들어가며"}),n.jsxs("h2",{className:"kf-intro-title",children:["케라폭시 줄눈,",n.jsx("br",{}),"왜 ",n.jsx("em",{children:"프리미엄 소재"}),"인가요?"]}),n.jsxs("p",{className:"kf-intro-body",children:[n.jsx("em",{className:"kf-hl",children:"케라폭시(Kerafoxy)는 에폭시 수지와 경화제를 혼합한 2액형 고성능 줄눈 소재"}),"입니다. 시멘트 줄눈이 물과 함께 굳는 방식과 달리, 화학적 결합으로 경화되어 본질적으로 다른 강도와 방수성을 만들어냅니다."]}),n.jsx("p",{className:"kf-intro-body",children:"이탈리아 건설 소재 전문 브랜드가 개발한 케라폭시는 국내외 수많은 고급 주택·호텔·상업 공간에서 사용되며 줄눈 소재로서의 우수성이 검증되어 있습니다."}),n.jsx("p",{className:"kf-intro-body",children:"특히 곰팡이가 쉽게 번식하는 욕실·주방 환경에서, 케라폭시는 일반 시멘트 줄눈 대비 압도적인 위생 유지 효과를 보여줍니다."}),n.jsx("ul",{className:"kf-intro-stats",children:$b.map(o=>n.jsxs("li",{children:[n.jsx("span",{className:"kf-stat-k",children:o.k}),n.jsx("span",{className:"kf-stat-v",children:o.v})]},o.k))})]}),n.jsx("div",{className:"kf-intro-right",children:n.jsx("div",{className:"kf-intro-photo",children:n.jsx("img",{src:Xb,alt:"케라폭시 줄눈 시공 디테일",loading:"lazy"})})})]})})}),n.jsx("section",{className:"kf-section kf-bg-paper","data-screen-label":"03 Benefits",children:n.jsxs("div",{className:"kf-container",children:[n.jsx(yr,{num:"02",ko:"5가지 핵심 장점",en:"Benefits",title:n.jsxs(n.Fragment,{children:["일반 시멘트 줄눈과 비교할 수 없는 ",n.jsx("em",{children:"성능 차이"}),"."]}),lede:"물·세균·시간이라는 줄눈의 세 가지 적에 대해, 케라폭시가 어떻게 대응하는지 정리했습니다."}),n.jsx("div",{className:"kf-benefits-grid",children:Ib.map(o=>n.jsxs("article",{className:`kf-benefit ${o.dark?"kf-benefit-dark":""}`,children:[n.jsxs("div",{className:"kf-benefit-head",children:[n.jsxs("span",{className:"kf-benefit-lbl",children:["Benefit / ",o.idx]}),n.jsx("span",{className:"kf-benefit-idx",children:o.idx})]}),n.jsx("h3",{className:"kf-benefit-title",children:o.title.split(`
`).map((d,f)=>n.jsx("span",{className:"kf-benefit-title-line",children:d},f))}),n.jsx("p",{className:"kf-benefit-body",children:o.body}),n.jsxs("div",{className:"kf-benefit-spec",children:[n.jsx("span",{className:"kf-spec-k",children:o.k}),n.jsx("span",{className:"kf-spec-v",children:o.v})]})]},o.idx))}),n.jsx("div",{className:"kf-compare",children:Pb.map(o=>n.jsxs("div",{className:`kf-compare-col ${o.hero?"kf-is-hero":""}`,children:[n.jsxs("div",{className:"kf-compare-head",children:[n.jsx("h3",{className:"kf-compare-name",children:o.name}),n.jsx("span",{className:"kf-compare-tag",children:o.tag})]}),n.jsx("ul",{className:"kf-compare-list",children:o.items.map(d=>n.jsx("li",{children:d},d))})]},o.name))})]})}),n.jsx("section",{className:"kf-section","data-screen-label":"04 Spaces",children:n.jsxs("div",{className:"kf-container",children:[n.jsx(yr,{num:"03",ko:"적합한 공간",en:"Spaces",title:n.jsxs(n.Fragment,{children:["어떤 공간에 케라폭시를 ",n.jsx("em",{children:"시공"}),"해야 할까요?"]}),lede:"물과 오염이 가까운 곳, 미관과 위생을 동시에 잡아야 하는 곳에 케라폭시가 강합니다."}),n.jsx("ul",{className:"kf-spaces",children:ev.map(o=>n.jsxs("li",{className:"kf-space-row",children:[n.jsx("span",{className:"kf-space-code",children:o.code}),n.jsxs("span",{className:"kf-space-lbl",children:[n.jsx("span",{className:"kf-space-ko",children:o.ko}),n.jsx("span",{className:"kf-space-en",children:o.en})]}),n.jsx("span",{className:"kf-space-desc",children:o.desc}),n.jsxs("span",{className:"kf-space-more",children:["자세히 ",n.jsx("span",{className:"kf-space-arr",children:"→"})]})]},o.code))})]})}),n.jsx("section",{className:"kf-section-dark","data-screen-label":"05 Before · After",children:n.jsxs("div",{className:"kf-container",children:[n.jsx(yr,{dark:!0,num:"04",ko:"시공 전 · 후 비교",en:"Before · After",title:n.jsxs(n.Fragment,{children:["한 번의 시공으로, 줄눈이 ",n.jsx("em",{children:"인테리어의 점"}),"이 됩니다."]}),lede:"실제 시공 현장에서 발견되는 변화를 정리했습니다. 같은 공간, 다른 마감."}),n.jsxs("div",{className:"kf-ba-grid",children:[n.jsxs("figure",{className:"kf-ba-item",children:[n.jsxs("div",{className:"kf-ba-photo",children:[n.jsx("img",{src:Zb,alt:"시공 전 — 시멘트 줄눈 상태",loading:"lazy"}),n.jsx("span",{className:"kf-ba-pill kf-ba-pill-light",children:"Before"})]}),n.jsxs("figcaption",{className:"kf-ba-cap",children:[n.jsx("h4",{className:"kf-ba-cap-title",children:"변색·균열·곰팡이 발생, 청소 어려움"}),n.jsx("p",{className:"kf-ba-cap-body",children:"시간이 지나며 흡수된 수분과 오염으로 줄눈이 어둡게 변하고, 모서리 부근부터 균열이 나타납니다."})]})]}),n.jsxs("figure",{className:"kf-ba-item",children:[n.jsxs("div",{className:"kf-ba-photo",children:[n.jsx("img",{src:Kb,alt:"시공 후 — 케라폭시 줄눈 마감",loading:"lazy"}),n.jsx("span",{className:"kf-ba-pill kf-ba-pill-accent",children:"After"})]}),n.jsxs("figcaption",{className:"kf-ba-cap",children:[n.jsx("h4",{className:"kf-ba-cap-title",children:"매끄럽고 균일한 마감, 위생적인 깨끗함"}),n.jsx("p",{className:"kf-ba-cap-body",children:"균일한 두께·색상으로 타일 사이의 선이 이어지며, 청소 한 번으로 새것처럼 유지됩니다."})]})]})]}),n.jsx("ul",{className:"kf-ba-bottom",children:tv.map(o=>n.jsxs("li",{children:[n.jsx("span",{className:"kf-ba-bot-k",children:o.k}),n.jsx("span",{className:"kf-ba-bot-v",children:o.v})]},o.k))})]})}),n.jsx("section",{className:"kf-section kf-bg-paper","data-screen-label":"06 Related",children:n.jsxs("div",{className:"kf-container",children:[n.jsx(yr,{num:"05",ko:"관련 정보 더 보기",en:"Related",title:n.jsxs(n.Fragment,{children:["줄눈에 대해 알아야 할, 다른 ",n.jsx("em",{children:"네 가지"}),"."]}),lede:"가격 · 제품 · 비교 · 시공 — 네 가지 관점으로 줄눈을 더 깊이 살펴보세요."}),n.jsx("div",{className:"kf-related-grid",children:av.map(o=>n.jsxs(Je,{to:o.href,className:"kf-related-card",children:[n.jsx("span",{className:"kf-related-idx",children:o.idx}),n.jsx("h4",{className:"kf-related-title",children:o.title}),n.jsx("p",{className:"kf-related-desc",children:o.desc}),n.jsxs("span",{className:"kf-related-more",children:["more ",n.jsx("span",{className:"kf-related-arr",children:"→"})]})]},o.href))})]})}),n.jsx("section",{className:"kf-cta-band","data-screen-label":"CTA Band",children:n.jsxs("div",{className:"kf-container kf-cta-row",children:[n.jsxs("div",{className:"kf-cta-text",children:[n.jsxs("h3",{className:"kf-cta-title",children:["우리 집 줄눈에 맞는 답이 궁금하다면, ",n.jsx("em",{children:"무료 견적"}),"으로 시작하세요."]}),n.jsx("p",{className:"kf-cta-sub",children:"평형 · 공간 · 색상을 알려주시면 24시간 내에 회신드립니다."})]}),n.jsxs("div",{className:"kf-cta-actions",children:[n.jsxs("button",{type:"button",className:"kf-btn kf-btn-primary",onClick:u,children:["무료 견적 받기 ",n.jsx("span",{className:"kf-btn-arr",children:"→"})]}),n.jsx("a",{href:"tel:010-8005-6674",onClick:()=>Ut.phoneClick("info_cta"),className:"kf-btn kf-btn-ghost",children:"전화 상담 010-8005-6674"})]})]})}),n.jsx(ll,{}),n.jsx("style",{children:nv})]})}const nv=`
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
`,iv="/assets/bg-CP9CkGLZ.webp",rv="/assets/bg_m-DjojSNnF.webp",sv=[{k:"기준 연도",v:"2026",small:"VAT 별도"},{k:"단위",v:"만원",small:"1ea / 1줄"},{k:"A/S",v:"2년",small:"무상"},{k:"결제",v:"현금 / 카드",small:"분할 OK"}],cv=[{label:"화장실",group:"bath",rows:[{scope:"욕조형 · 바닥만",new:[40,30],old:[30,25]},{scope:"욕조형 · 전체 (바닥+벽)",new:[90,65],old:[75,55]},{scope:"샤워부스형 · 바닥만",new:[45,35],old:[38,30]},{scope:"샤워부스형 · 전체 (바닥+벽)",new:[95,70],old:[80,60]}]},{label:"거실",group:"living",rows:[{scope:"바닥 · 20평대",new:[150,100],old:[130,90]},{scope:"바닥 · 30평대+",new:[null,null],old:[null,null],note:"별도 협의"}]},{label:"현관",group:"etc",rows:[{scope:"바닥",new:[15,5],old:[12,4]}]},{label:"베란다",group:"etc",rows:[{scope:"바닥",new:[20,15],old:[18,13]}]},{label:"외부 화장실",group:"etc",rows:[{scope:"바닥",new:[30,25],old:[28,23]}]}],ov=[{num:"01",name:"세트 1",sub:"· 기본",desc:"화장실 바닥 ×2 + 현관",newPrice:100,oldPrice:120,services:[],emptyLabel:"기본 시공 패키지"},{num:"02",name:"세트 2",sub:"· 표준",desc:"세트 1 + 양조벽 or 샤워벽 3면 ×1곳",newPrice:135,oldPrice:155,services:[{text:"젠 다이 실리콘 ×2"},{text:"세면대 실리콘 ×2"}]},{num:"03",name:"세트 3",sub:"· 완성",desc:"화장실 바닥 ×2 + 전체벽 ×2 + 현관",newPrice:240,oldPrice:260,services:[{text:"젠 다이 실리콘 ×2"},{text:"세면대 실리콘 ×2"},{text:"싱크볼 실리콘"},{text:"주방벽 케라폭시"}]},{num:"04",name:"세트 4",sub:"· 확장",desc:"세트 2 + 세탁실",newPrice:150,oldPrice:170,services:[{text:"젠 다이 실리콘 ×2"},{text:"세면대 실리콘 ×2"},{text:"주방 실리콘"},{text:"싱크볼 실리콘"}]}],dv=[{n:"01",name:"시공 면적",en:"Area / Size",desc:"면적이 넓을수록 평단가가 내려가며, 협소한 공간은 작업 난이도로 인해 단가가 높아질 수 있습니다.",impact:"평단가 ↘",impactClass:"down"},{n:"02",name:"타일 크기 · 줄눈 간격",en:"Tile Size",desc:"타일이 작을수록 줄눈 길이가 길어져 작업 시간과 자재비가 증가합니다.",impact:"자재·시간 ↗",impactClass:"up"},{n:"03",name:"기존 줄눈 상태",en:"Existing Grout",desc:"기존 줄눈 제거가 필요한 경우 추가 작업비가 발생하며, 손상이 심할수록 비용이 올라갑니다.",impact:"+10만원~",impactClass:"up"},{n:"04",name:"색상 선택",en:"Color",desc:"특수 색상이나 다색 시공의 경우 단가가 다를 수 있으며, 컬러 매칭 작업이 추가됩니다.",impact:"옵션 변동",impactClass:"var"},{n:"05",name:"지역 · 접근성",en:"Location",desc:"지방이나 접근이 어려운 고층 건물의 경우 추가 출장비가 반영될 수 있습니다.",impact:"출장비 가산",impactClass:"up"}],uv=[{idx:"No. 01 · Intro",href:"/info/kerafoxy",title:"케라폭시 줄눈이란?",desc:"에폭시 줄눈 소재의 특징과 장점을 정리했습니다."},{idx:"No. 03 · Product",href:"/info/kerafoxy-product",title:"케라폭시 계열 제품 소개",desc:"주요 제품 라인업과 색상 가이드."},{idx:"No. 04 · Compare",href:"/info/comparison",title:"폴리우레아 vs 케라폭시",desc:"두 소재의 차이점과 적합한 공간 정리."},{idx:"No. 05 · Why",href:"/info/why-grout",title:"줄눈시공 하는 이유",desc:"위생·미관·내구성을 위한 필수 시공."}];function jr({num:s,ko:u,en:o,title:d,lede:f}){return n.jsxs("div",{className:"kp-sec-head",children:[n.jsxs("div",{className:"kp-sec-bar",children:[n.jsx("span",{className:"kp-sec-n",children:s}),n.jsx("span",{className:"kp-sec-rule"}),n.jsxs("span",{className:"kp-sec-lbl",children:[n.jsx("span",{className:"kp-sec-ko",children:u}),n.jsx("span",{className:"kp-sec-en",children:o})]})]}),n.jsxs("div",{className:"kp-sec-body",children:[n.jsx("h2",{className:"kp-sec-title",children:d}),f&&n.jsx("p",{className:"kp-sec-lede",children:f})]})]})}function pv(){const s=_a(),[u,o]=k.useState("all"),[d,f]=k.useState("new");nl(),k.useEffect(()=>{window.scrollTo(0,0)},[]);const m=()=>{s("/#calc"),setTimeout(()=>{const y=document.querySelector("#calc");y&&y.scrollIntoView({behavior:"smooth"})},300)},b=k.useMemo(()=>cv.filter(y=>u==="all"||u===y.group),[u]);return n.jsxs("div",{className:"kp-page",children:[n.jsx(al,{}),n.jsxs("header",{className:"kp-hero","data-screen-label":"Hero",children:[n.jsx("div",{className:"kp-hero-bg",style:{"--hero-img-d":`url(${iv})`,"--hero-img-m":`url(${rv})`},"aria-hidden":"true"}),n.jsxs("div",{className:"kp-container kp-hero-inner",children:[n.jsx("div",{className:"kp-eyebrow kp-eyebrow-light",children:"Grout Knowledge · 02"}),n.jsxs("h1",{className:"kp-hero-title",children:["케라폭시 가격",n.jsx("em",{children:","}),n.jsx("br",{}),"한 줄까지 ",n.jsx("em",{children:"투명하게"}),"."]}),n.jsxs("p",{className:"kp-hero-lede",children:["2026년 디테일라인 표준 가격표.",n.jsx("br",{}),"공간 · 평형 · 시공 범위에 따른 단가를 그대로 공개합니다."]}),n.jsx("ul",{className:"kp-hero-meta",children:sv.map(y=>n.jsxs("li",{children:[n.jsx("span",{className:"kp-meta-k",children:y.k}),n.jsxs("span",{className:"kp-meta-v",children:[y.v," ",n.jsx("small",{children:y.small})]})]},y.k))})]})]}),n.jsx("nav",{className:"kp-crumb","aria-label":"현재 위치",children:n.jsxs("div",{className:"kp-container kp-crumb-inner",children:[n.jsx(Je,{to:"/",className:"kp-crumb-item",children:"홈"}),n.jsx("span",{className:"kp-crumb-sep",children:"/"}),n.jsx("span",{className:"kp-crumb-item",children:"줄눈 정보"}),n.jsx("span",{className:"kp-crumb-sep",children:"/"}),n.jsx("span",{className:"kp-crumb-here",children:"케라폭시 가격 안내"})]})}),n.jsx("section",{className:"kp-section","data-screen-label":"01 Pricing Table",children:n.jsxs("div",{className:"kp-container",children:[n.jsx(jr,{num:"01",ko:"2026 가격 테이블",en:"Pricing Table",title:n.jsxs(n.Fragment,{children:["공간별 시공 단가,",n.jsx("br",{}),n.jsx("em",{children:"그대로 공개"}),"합니다."]}),lede:"케라폭시·폴리우레아 두 소재의 표준 단가입니다. 현장 상황에 따라 ±10% 조정될 수 있습니다."}),n.jsxs("div",{className:"kp-pt-controls",children:[n.jsx("div",{className:"kp-chips",role:"tablist","aria-label":"공간 필터",children:["all","bath","living","etc"].map(y=>n.jsx("button",{type:"button",className:`kp-chip ${u===y?"on":""}`,onClick:()=>o(y),role:"tab","aria-selected":u===y,children:y==="all"?"전체":y==="bath"?"화장실":y==="living"?"거실":"현관·기타"},y))}),n.jsx("div",{className:"kp-toggle",role:"tablist","aria-label":"건물 유형",children:["new","old"].map(y=>n.jsx("button",{type:"button",className:d===y?"on":"",onClick:()=>f(y),role:"tab","aria-selected":d===y,children:y==="new"?"신축":"구축"},y))})]}),n.jsx("div",{className:"kp-ptable-wrap",children:n.jsxs("table",{className:"kp-ptable",children:[n.jsx("caption",{className:"sr-only",children:"2026년 공간별 표준 단가 (만원, VAT 별도)"}),n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{style:{width:"160px"},children:"공간"}),n.jsx("th",{children:"범위"}),n.jsx("th",{className:"right",style:{width:"200px"},children:"케라폭시"}),n.jsx("th",{className:"right",style:{width:"200px"},children:"폴리우레아"})]})}),n.jsx("tbody",{children:b.flatMap(y=>y.rows.map((x,h)=>{const[T,w]=d==="new"?x.new:x.old;return n.jsxs("tr",{children:[n.jsx("td",{className:"kp-cell-space",children:h===0?y.label:""}),n.jsx("td",{className:"kp-cell-scope",children:x.scope}),n.jsx("td",{className:"right",children:x.note?n.jsx("span",{className:"kp-price note",children:x.note}):n.jsxs("span",{className:"kp-price kp",children:[T,n.jsx("small",{children:"만원"})]})}),n.jsx("td",{className:"right",children:x.note?n.jsx("span",{className:"kp-price note",children:x.note}):n.jsxs("span",{className:"kp-price",children:[w,n.jsx("small",{children:"만원"})]})})]},`${y.label}-${x.scope}`)}))})]})}),n.jsx("ul",{className:"kp-pcards","aria-label":"공간별 가격 카드",children:b.flatMap(y=>y.rows.map(x=>{const[h,T]=d==="new"?x.new:x.old;return n.jsxs("li",{className:"kp-pcard",children:[n.jsxs("div",{className:"kp-pcard-info",children:[n.jsx("span",{className:"kp-pcard-space",children:y.label}),n.jsx("span",{className:"kp-pcard-scope",children:x.scope})]}),n.jsxs("div",{className:"kp-pcard-prices",children:[n.jsxs("div",{className:"kp-pcard-pr",children:[n.jsx("span",{className:"kp-pcard-pr-lbl",children:"케라폭시"}),x.note?n.jsx("span",{className:"kp-pcard-pr-note",children:x.note}):n.jsxs("span",{className:"kp-pcard-pr-val kp",children:[h,n.jsx("small",{children:"만원"})]})]}),n.jsxs("div",{className:"kp-pcard-pr",children:[n.jsx("span",{className:"kp-pcard-pr-lbl",children:"폴리우레아"}),x.note?n.jsx("span",{className:"kp-pcard-pr-note",children:x.note}):n.jsxs("span",{className:"kp-pcard-pr-val",children:[T,n.jsx("small",{children:"만원"})]})]})]})]},`m-${y.label}-${x.scope}`)}))}),n.jsxs("div",{className:"kp-pt-foot",children:[n.jsx("div",{children:"* 모든 가격은 VAT 별도 · 자재비·인건비·출장비 포함 · 2년 무상 A/S (에폭시 계열)"}),n.jsx("div",{children:"* 평형 30평 초과 또는 특수 상황은 별도 협의"})]})]})}),n.jsx("section",{className:"kp-section kp-bg-paper","data-screen-label":"02 Set Packages",children:n.jsxs("div",{className:"kp-container",children:[n.jsx(jr,{num:"02",ko:"세트 할인 패키지",en:"Set Packages",title:n.jsxs(n.Fragment,{children:["4가지 패키지로,",n.jsx("br",{}),"한 번에 ",n.jsx("em",{children:"합리적으로"}),"."]}),lede:"화장실·현관·벽 등 주요 공간을 묶어 시공하면 실리콘·주방벽 등 추가 서비스가 함께 제공됩니다. VAT 포함 · 34평 이하 · 300개 타일 기준."}),n.jsx("div",{className:"kp-sets",children:ov.map(y=>n.jsxs("div",{className:"kp-set-card",children:[n.jsxs("div",{className:"kp-set-badge",children:["— SET ",y.num]}),n.jsxs("div",{className:"kp-set-title",children:[n.jsx("h3",{className:"kp-set-name",children:y.name}),n.jsx("span",{className:"kp-set-sub",children:y.sub})]}),n.jsx("p",{className:"kp-set-desc",children:y.desc}),n.jsxs("div",{className:"kp-set-prices",children:[n.jsxs("div",{className:"kp-set-pr",children:[n.jsx("span",{className:"kp-set-pr-lbl",children:"신축"}),n.jsx("span",{className:"kp-set-pr-val",children:y.newPrice}),n.jsx("span",{className:"kp-set-pr-unit",children:"만원"})]}),n.jsxs("div",{className:"kp-set-pr",children:[n.jsx("span",{className:"kp-set-pr-lbl",children:"구축"}),n.jsx("span",{className:"kp-set-pr-val",children:y.oldPrice}),n.jsx("span",{className:"kp-set-pr-unit",children:"만원"})]})]}),y.services.length>0?n.jsxs("div",{className:"kp-set-services",children:[n.jsx("div",{className:"kp-set-s-lbl",children:"+ 함께 제공"}),n.jsx("ul",{children:y.services.map(x=>n.jsx("li",{children:x.text},x.text))})]}):n.jsx("div",{className:"kp-set-services-empty",children:y.emptyLabel})]},y.num))}),n.jsxs("p",{className:"kp-set-foot",children:["※ 가격은 ",n.jsx("b",{children:"VAT 포함 · 34평 이하 · 300개 타일"})," 기준. 세트 외 추가 옵션은 상담 후 별도 산정됩니다.",n.jsx("br",{}),"※ 세트 실리콘은 기존 실리콘 양호 기준이며, 제거 후 재시공 시 추가 비용이 발생합니다. 기존 줄눈 시공 이력이 있는 경우 ",n.jsx("b",{children:"공간당 +10만원"}),"이 추가됩니다."]})]})}),n.jsx("section",{className:"kp-section","data-screen-label":"03 Cost Factors",children:n.jsxs("div",{className:"kp-container",children:[n.jsx(jr,{num:"03",ko:"시공 가격에 영향을 주는 요인",en:"Cost Factors",title:n.jsxs(n.Fragment,{children:["같은 평형이라도,",n.jsx("br",{}),"견적이 ",n.jsx("em",{children:"달라지는 이유"}),"."]}),lede:"현장의 디테일이 가격을 만듭니다. 자주 영향을 주는 다섯 가지 요인입니다."}),n.jsx("ul",{className:"kp-factors",children:dv.map(y=>n.jsxs("li",{className:"kp-f-row",children:[n.jsx("span",{className:"kp-f-n",children:y.n}),n.jsxs("span",{className:"kp-f-name",children:[y.name,n.jsx("small",{children:y.en})]}),n.jsx("span",{className:"kp-f-desc",children:y.desc}),n.jsx("span",{className:`kp-f-impact kp-f-impact--${y.impactClass}`,children:y.impact})]},y.n))})]})}),n.jsx("section",{className:"kp-section kp-bg-paper","data-screen-label":"04 Related",children:n.jsxs("div",{className:"kp-container",children:[n.jsx(jr,{num:"04",ko:"관련 정보 더 보기",en:"Related",title:n.jsxs(n.Fragment,{children:["줄눈에 대해 알아야 할, 다른 ",n.jsx("em",{children:"네 가지"}),"."]}),lede:"가격 · 제품 · 비교 · 시공 — 네 가지 관점으로 줄눈을 더 깊이 살펴보세요."}),n.jsx("div",{className:"kp-related-grid",children:uv.map(y=>n.jsxs(Je,{to:y.href,className:"kp-related-card",children:[n.jsx("span",{className:"kp-related-idx",children:y.idx}),n.jsx("h4",{className:"kp-related-title",children:y.title}),n.jsx("p",{className:"kp-related-desc",children:y.desc}),n.jsxs("span",{className:"kp-related-more",children:["more ",n.jsx("span",{className:"kp-related-arr",children:"→"})]})]},y.href))})]})}),n.jsx("section",{className:"kp-cta-band","data-screen-label":"CTA Band",children:n.jsxs("div",{className:"kp-container kp-cta-row",children:[n.jsxs("div",{className:"kp-cta-text",children:[n.jsxs("h3",{className:"kp-cta-title",children:["정확한 시공 비용이 ",n.jsx("em",{children:"궁금하신가요?"})]}),n.jsx("p",{className:"kp-cta-sub",children:"현장 상황에 따라 가격이 달라질 수 있습니다. 공간별 맞춤 견적을 안내해 드립니다."})]}),n.jsxs("div",{className:"kp-cta-actions",children:[n.jsxs("button",{type:"button",className:"kp-btn kp-btn-primary",onClick:m,children:["무료 견적 받기 ",n.jsx("span",{className:"kp-btn-arr",children:"→"})]}),n.jsx("a",{href:"tel:010-8005-6674",onClick:()=>Ut.phoneClick("info_cta"),className:"kp-btn kp-btn-ghost",children:"전화 상담 010-8005-6674"})]})]})}),n.jsx(ll,{}),n.jsx("style",{children:fv})]})}const fv=`
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
`,mv="/assets/kerafoxy-DrWysCxm.jpg",hv="/assets/strikeevo-CoKoyCPo.jpg",xv="/assets/aspactone-CtALWUuf.jpg",gv="/assets/Polyurea-DMhrJjtC.jpg",bv="/assets/bg-LU8nN9ip.webp",vv="/assets/bg_m-BSEgDA_R.webp",yv=[{k:"라인업",v:"4종",small:"에폭시 계열"},{k:"컬러",v:"20+",small:"표준 색상"},{k:"친환경",v:"EC1+",small:"GEV 인증"},{k:"A/S",v:"2년",small:"무상"}],kr=[{id:"pure",name:"순백",hex:"#f1ede4",group:"white",tagEn:"WHITE",light:!0},{id:"ivory",name:"아이보리",hex:"#e6dccb",group:"white",tagEn:"WHITE",light:!0},{id:"beige",name:"베이지",hex:"#d9c8a2",group:"earth",tagEn:"EARTH",light:!0},{id:"sand",name:"샌드",hex:"#bfa478",group:"earth",tagEn:"EARTH",light:!1},{id:"khaki",name:"카키",hex:"#8a7d5e",group:"earth",tagEn:"EARTH",light:!1},{id:"brown",name:"브라운",hex:"#6f4a2a",group:"earth",tagEn:"EARTH",light:!1},{id:"silver",name:"실버그레이",hex:"#c4c0bc",group:"gray",tagEn:"GRAY",light:!0},{id:"lightgray",name:"라이트그레이",hex:"#a8a59f",group:"gray",tagEn:"GRAY",light:!1},{id:"mediumgray",name:"미디엄그레이",hex:"#7a766f",group:"gray",tagEn:"GRAY",light:!1},{id:"darkgray",name:"다크그레이",hex:"#4a4842",group:"dark",tagEn:"DARK",light:!1},{id:"charcoal",name:"차콜",hex:"#2a2825",group:"dark",tagEn:"DARK",light:!1},{id:"black",name:"블랙",hex:"#16140f",group:"dark",tagEn:"DARK",light:!1}],Kn={all:"전체",white:"화이트 계열",earth:"베이지·어스 계열",gray:"그레이 계열",dark:"다크 계열"},po={white:"타일과 통일감을 주어 깔끔하고 넓어 보이는 효과를 만듭니다. 오염은 비교적 잘 보이는 편이므로 청소 빈도가 높은 공간에 적합합니다.",earth:"원목·가구·내추럴 인테리어와 잘 어우러집니다. 오염 자국이 눈에 잘 띄지 않아 관리가 편합니다.",gray:"오염이 덜 보이고 유지관리가 편하며, 모던하고 차분한 분위기를 만듭니다. 대부분의 타일과 무난하게 어울립니다.",dark:"타일과 강한 대비를 만들어 그래픽한 인테리어 포인트가 됩니다. 좁은 공간에서는 답답하게 보일 수 있어 주의가 필요합니다."},wr={white:{label:"화이트",hex:"#ece6dc"},gray:{label:"그레이",hex:"#b5b1a8"},dark:{label:"다크",hex:"#3a3530"}},am=[{id:"kerafoxy",name:"케라폭시",badge:{label:"프리미엄",variant:"premium"},desc:"에폭시 수지+경화제 2액형의 대표 프리미엄 줄눈재. 화장실·욕실·주방 등 물 접촉 공간에서 가장 안정적인 성능을 보입니다.",specs:[{k:"베이스",v:"에폭시 + 경화제 2액형"},{k:"경화 시간",v:"24 ~ 48시간"},{k:"표면",v:"고광택"},{k:"추천 공간",v:"화장실 · 욕실 · 주방"},{k:"컬러",v:"20+ 색상"},{k:"수명",v:"10년+"}],image:mv},{id:"strikeevo",name:"스트라이크 에보",badge:{label:"프리미엄",variant:"premium"},desc:"3세대 에폭시 줄눈재로 무광·유광 선택이 가능하며, 균일한 컬러와 변색 저항성이 뛰어납니다. 프리미엄 인테리어에 자주 채택됩니다.",specs:[{k:"베이스",v:"에폭시 (이탈리아산)"},{k:"경화 시간",v:"24 ~ 72시간"},{k:"표면",v:"무광 / 유광 선택"},{k:"추천 공간",v:"화장실 · 주방 · 디자인 강조"},{k:"컬러",v:"30+ 색상"},{k:"수명",v:"10년+"}],image:hv},{id:"aspactone",name:"아스팍톤",badge:{label:"개선형",variant:"premium"},desc:"무광·무펄·무수축·무황변을 구현한 신소재 에폭시. 기존 무광 에폭시의 단점을 보완해 어린이방·욕실에 추천됩니다.",specs:[{k:"베이스",v:"에폭시 개선형"},{k:"경화 시간",v:"24 ~ 36시간"},{k:"표면",v:"균일 무광"},{k:"추천 공간",v:"패턴 타일 · 디자인 욕실"},{k:"컬러",v:"25+ 색상"},{k:"수명",v:"10년+"}],image:xv},{id:"polyurea",name:"폴리우레아",badge:{label:"하이브리드",variant:"hybrid"},desc:"시멘트 + 에폭시 하이브리드 줄눈재. 매트한 질감으로 내추럴 인테리어에 잘 맞고, 가격대가 합리적이라 비수계 공간에 추천됩니다.",specs:[{k:"베이스",v:"시멘트 + 에폭시"},{k:"경화 시간",v:"48 ~ 96시간"},{k:"표면",v:"매트"},{k:"추천 공간",v:"현관 · 베란다 · 거실 일부"},{k:"컬러",v:"16+ 색상"},{k:"수명",v:"5년+"}],image:gv}],jv=[{idx:"No. 01 · Intro",href:"/info/kerafoxy",title:"케라폭시 줄눈이란?",desc:"에폭시 줄눈 소재의 특징과 장점을 정리했습니다."},{idx:"No. 02 · Pricing",href:"/info/kerafoxy-price",title:"케라폭시 가격 안내",desc:"시공 비용에 영향을 주는 요인과 표준 가격."},{idx:"No. 04 · Compare",href:"/info/comparison",title:"폴리우레아 vs 케라폭시",desc:"두 소재의 차이점과 적합한 공간 정리."},{idx:"No. 05 · Why",href:"/info/why-grout",title:"줄눈시공 하는 이유",desc:"위생·미관·내구성을 위한 필수 시공."}];function fo({num:s,ko:u,en:o,title:d,lede:f}){return n.jsxs("div",{className:"ep-sec-head",children:[n.jsxs("div",{className:"ep-sec-bar",children:[n.jsx("span",{className:"ep-sec-n",children:s}),n.jsx("span",{className:"ep-sec-rule"}),n.jsxs("span",{className:"ep-sec-lbl",children:[n.jsx("span",{className:"ep-sec-ko",children:u}),n.jsx("span",{className:"ep-sec-en",children:o})]})]}),n.jsxs("div",{className:"ep-sec-body",children:[n.jsx("h2",{className:"ep-sec-title",children:d}),f&&n.jsx("p",{className:"ep-sec-lede",children:f})]})]})}function kv(){const s=_a(),[u,o]=k.useState("kerafoxy"),[d,f]=k.useState("silver"),[m,b]=k.useState("all"),[y,x]=k.useState("white");nl(),k.useEffect(()=>{window.scrollTo(0,0)},[]);const h=()=>{s("/#calc"),setTimeout(()=>{const S=document.querySelector("#calc");S&&S.scrollIntoView({behavior:"smooth"})},300)},T=am.find(S=>S.id===u),w=kr.find(S=>S.id===d),B=k.useMemo(()=>m==="all"?kr:kr.filter(S=>S.group===m),[m]),Z={"--grout-color":w.hex,"--tile-color":wr[y].hex};return n.jsxs("div",{className:"ep-page",children:[n.jsx(al,{}),n.jsxs("header",{className:"ep-hero","data-screen-label":"Hero",children:[n.jsx("div",{className:"ep-hero-bg",style:{"--hero-img-d":`url(${bv})`,"--hero-img-m":`url(${vv})`},"aria-hidden":"true"}),n.jsxs("div",{className:"ep-container ep-hero-inner",children:[n.jsx("div",{className:"ep-eyebrow ep-eyebrow-light",children:"Grout Knowledge · 03"}),n.jsxs("h1",{className:"ep-hero-title",children:["내 공간에 맞는",n.jsx("br",{}),"에폭시 계열 ",n.jsx("em",{children:"한 가지"}),"."]}),n.jsxs("p",{className:"ep-hero-lede",children:["디테일라인이 직접 시공하는 4종의 에폭시 계열 줄눈재와",n.jsx("br",{}),"줄눈 색상을 미리 확인할 수 있는 라이브 시뮬레이터를 제공합니다."]}),n.jsx("ul",{className:"ep-hero-meta",children:yv.map(S=>n.jsxs("li",{children:[n.jsx("span",{className:"ep-meta-k",children:S.k}),n.jsxs("span",{className:"ep-meta-v",children:[S.v," ",n.jsx("small",{children:S.small})]})]},S.k))})]})]}),n.jsx("nav",{className:"ep-crumb","aria-label":"현재 위치",children:n.jsxs("div",{className:"ep-container ep-crumb-inner",children:[n.jsx(Je,{to:"/",className:"ep-crumb-item",children:"홈"}),n.jsx("span",{className:"ep-crumb-sep",children:"/"}),n.jsx("span",{className:"ep-crumb-item",children:"줄눈 정보"}),n.jsx("span",{className:"ep-crumb-sep",children:"/"}),n.jsx("span",{className:"ep-crumb-here",children:"에폭시 계열 제품 소개"})]})}),n.jsx("section",{className:"ep-section","data-screen-label":"01 Product Lineup",children:n.jsxs("div",{className:"ep-container",children:[n.jsx(fo,{num:"01",ko:"제품 라인업",en:"Product Lineup",title:n.jsxs(n.Fragment,{children:["같은 에폭시여도,",n.jsx("br",{}),n.jsx("em",{children:"맞춤 선택"}),"이 가능합니다."]}),lede:"공간 · 표면 질감 · 색상 선호에 따라 4종의 제품 중 가장 적합한 것을 안내해 드립니다."}),n.jsx("div",{className:"ep-prod-tabs",role:"tablist","aria-label":"제품 선택",children:am.map(S=>n.jsx("button",{type:"button",role:"tab","aria-selected":u===S.id,className:`ep-prod-tab ${u===S.id?"on":""}`,onClick:()=>o(S.id),children:S.name},S.id))}),n.jsxs("div",{className:"ep-prod-panel",role:"tabpanel",children:[n.jsx("div",{className:"ep-prod-image",children:n.jsx("img",{src:T.image,alt:`${T.name} 시공 결과`,loading:"lazy"})}),n.jsxs("div",{className:"ep-prod-info",children:[n.jsxs("div",{className:"ep-prod-head",children:[n.jsx("h3",{className:"ep-prod-name",children:T.name}),n.jsx("span",{className:`ep-prod-badge ep-prod-badge--${T.badge.variant}`,children:T.badge.label})]}),n.jsx("p",{className:"ep-prod-desc",children:T.desc}),n.jsx("dl",{className:"ep-prod-specs",children:T.specs.map(S=>n.jsxs("div",{className:"ep-prod-spec-row",children:[n.jsx("dt",{children:S.k}),n.jsx("dd",{children:S.v})]},S.k))})]})]})]})}),n.jsx("section",{className:"ep-section ep-bg-paper","data-screen-label":"02 Color Simulator",children:n.jsxs("div",{className:"ep-container",children:[n.jsx(fo,{num:"02",ko:"라이브 컬러 시뮬레이터",en:"Live Color Simulator",title:n.jsxs(n.Fragment,{children:["시공 전에, 줄눈 색을 ",n.jsx("em",{children:"미리 보세요"}),"."]}),lede:"아래 스와치를 클릭하면 좌측 타일 그리드의 줄눈 색이 즉시 바뀝니다. 타일 색·계열 필터로 다양한 조합을 빠르게 확인해 보세요."}),n.jsxs("div",{className:"ep-sim-grid",children:[n.jsxs("div",{className:"ep-sim-left",children:[n.jsx("div",{className:"ep-tile-preview",children:n.jsx("div",{className:"ep-tile-stage",style:Z,"aria-hidden":"true",children:Array.from({length:30}).map((S,q)=>n.jsx("span",{className:"ep-tile"},q))})}),n.jsx("div",{className:"ep-tile-toggle",role:"tablist","aria-label":"타일 색상",children:Object.keys(wr).map(S=>n.jsxs("button",{type:"button",role:"tab","aria-selected":y===S,className:`ep-tile-toggle-btn ${y===S?"on":""}`,onClick:()=>x(S),children:[n.jsx("span",{className:"ep-tile-toggle-dot",style:{"--td":wr[S].hex}}),n.jsx("span",{children:wr[S].label})]},S))})]}),n.jsxs("div",{className:"ep-sim-right",children:[n.jsx("div",{className:"ep-group-tabs",role:"tablist","aria-label":"색상 계열",children:Object.keys(Kn).map(S=>n.jsx("button",{type:"button",role:"tab","aria-selected":m===S,className:`ep-group-tab ${m===S?"on":""}`,onClick:()=>b(S),children:Kn[S]},S))}),n.jsx("div",{className:"ep-swatches",children:B.map(S=>n.jsx("button",{type:"button",className:`ep-swatch ${d===S.id?"is-active":""}`,style:{background:S.hex},"data-light":S.light?"true":"false",onClick:()=>f(S.id),"aria-label":`${S.name} · ${S.hex.toUpperCase()} · ${Kn[S.group]}`,"aria-pressed":d===S.id},S.id))}),n.jsxs("div",{className:"ep-sel-card","aria-live":"polite",children:[n.jsx("div",{className:"ep-sel-chip",style:{"--c":w.hex},"aria-hidden":"true"}),n.jsxs("div",{className:"ep-sel-info",children:[n.jsx("h4",{className:"ep-sel-name",children:w.name}),n.jsxs("div",{className:"ep-sel-meta",children:[n.jsx("span",{className:"ep-sel-hex",children:w.hex.toUpperCase()}),n.jsxs("span",{className:"ep-sel-tag",children:["· ",w.tagEn]})]}),n.jsx("div",{className:"ep-sel-group",children:Kn[w.group]}),n.jsx("p",{className:"ep-sel-tip",children:po[w.group]})]})]})]})]}),n.jsx("ul",{className:"ep-tips-grid",children:Object.keys(po).map(S=>{const q=kr.filter(L=>L.group===S).slice(0,3);return n.jsxs("li",{className:"ep-tip-cell",children:[n.jsx("div",{className:"ep-tip-swatches","aria-hidden":"true",children:q.map(L=>n.jsx("span",{style:{background:L.hex}},L.id))}),n.jsx("h4",{className:"ep-tip-name",children:Kn[S]}),n.jsx("p",{className:"ep-tip-desc",children:po[S]})]},S)})})]})}),n.jsx("section",{className:"ep-section","data-screen-label":"03 Related",children:n.jsxs("div",{className:"ep-container",children:[n.jsx(fo,{num:"03",ko:"관련 정보 더 보기",en:"Related",title:n.jsxs(n.Fragment,{children:["줄눈에 대해 알아야 할, 다른 ",n.jsx("em",{children:"네 가지"}),"."]}),lede:"가격 · 제품 · 비교 · 시공 — 네 가지 관점으로 줄눈을 더 깊이 살펴보세요."}),n.jsx("div",{className:"ep-related-grid",children:jv.map(S=>n.jsxs(Je,{to:S.href,className:"ep-related-card",children:[n.jsx("span",{className:"ep-related-idx",children:S.idx}),n.jsx("h4",{className:"ep-related-title",children:S.title}),n.jsx("p",{className:"ep-related-desc",children:S.desc}),n.jsxs("span",{className:"ep-related-more",children:["more ",n.jsx("span",{className:"ep-related-arr",children:"→"})]})]},S.href))})]})}),n.jsx("section",{className:"ep-cta-band","data-screen-label":"CTA Band",children:n.jsxs("div",{className:"ep-container ep-cta-row",children:[n.jsxs("div",{className:"ep-cta-text",children:[n.jsxs("h3",{className:"ep-cta-title",children:["어떤 제품·색이 우리 집에 맞을지 ",n.jsx("em",{children:"고민되신다면"}),"?"]}),n.jsx("p",{className:"ep-cta-sub",children:"공간 사진 한 장만 보내주시면, 가장 잘 어울리는 제품과 색을 추천해 드립니다."})]}),n.jsxs("div",{className:"ep-cta-actions",children:[n.jsxs("button",{type:"button",className:"ep-btn ep-btn-primary",onClick:h,children:["무료 견적 받기 ",n.jsx("span",{className:"ep-btn-arr",children:"→"})]}),n.jsx("a",{href:"tel:010-8005-6674",onClick:()=>Ut.phoneClick("info_cta"),className:"ep-btn ep-btn-ghost",children:"전화 상담 010-8005-6674"})]})]})}),n.jsx(ll,{}),n.jsx("style",{children:wv})]})}const wv=`
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
`,Ql=({n:s,best:u})=>n.jsxs(n.Fragment,{children:[n.jsxs("span",{className:"cp-stars",children:["★".repeat(s),n.jsx("span",{className:"off",children:"★".repeat(5-s)})]}),n.jsx("span",{className:`cp-rating ${u?"best":""}`,children:u?"탁월":s>=4?"우수":s>=3?"보통":"낮음"})]}),lm=[{k:"소재 성분",kerafoxy:n.jsxs(n.Fragment,{children:["에폭시 수지 ",n.jsx("span",{className:"cp-plus",children:"+"})," 경화제"," ",n.jsx("span",{className:"cp-rating",children:"2액형"})]}),polyurea:n.jsxs(n.Fragment,{children:["폴리우레아 수지 ",n.jsx("span",{className:"cp-rating",children:"1액형"})]})},{k:"경화 방식",kerafoxy:n.jsxs(n.Fragment,{children:["화학 반응 경화 ",n.jsx("span",{className:"cp-rating",children:"수동 혼합"})]}),polyurea:n.jsxs(n.Fragment,{children:["자연 경화 ",n.jsx("span",{className:"cp-rating",children:"습기·공기 반응"})]})},{k:"내수성",kerafoxy:n.jsx(Ql,{n:5,best:!0}),polyurea:n.jsx(Ql,{n:3})},{k:"항균성",kerafoxy:n.jsx(Ql,{n:5,best:!0}),polyurea:n.jsx(Ql,{n:3})},{k:"내구성 · 수명",kerafoxy:n.jsxs("span",{className:"cp-num",children:["10~15",n.jsx("small",{children:"년 이상"})]}),polyurea:n.jsxs("span",{className:"cp-num",children:["2~4",n.jsx("small",{children:"년"})]})},{k:"탄성 · 신축성",kerafoxy:n.jsx(Ql,{n:4}),polyurea:n.jsx(Ql,{n:5,best:!0})},{k:"시공 난이도",kerafoxy:"전문 기술 필요",polyurea:"비교적 간단"},{k:"가격",kerafoxy:n.jsxs("span",{className:"cp-num",children:["평균 30",n.jsx("small",{children:"만원"})]}),polyurea:n.jsxs("span",{className:"cp-num",children:["평균 20",n.jsx("small",{children:"만원"})]})},{k:"색상 선택",kerafoxy:n.jsxs("span",{className:"cp-num",children:["16",n.jsx("small",{children:"여 가지"})]}),polyurea:n.jsxs("span",{className:"cp-num",children:["20",n.jsx("small",{children:"여 가지"})]})},{k:"적합 환경",kerafoxy:n.jsxs(n.Fragment,{children:["욕실 · 주방 · 수영장 등 ",n.jsx("strong",{className:"cp-strong",children:"수분 多"})]}),polyurea:n.jsxs(n.Fragment,{children:["베란다 · 외벽 등 ",n.jsx("strong",{className:"cp-strong",children:"진동·충격 多"})]})}],Nv=[{variant:"kp",title:"케라폭시 줄눈 추천",sub:"For Home · Indoor",items:[{text:"화장실·욕실·주방처럼 상시 수분에 노출되는 공간"},{text:"위생이 특히 중요한 가정 (어린이, 노약자)"},{text:"오랫동안 재시공 없이 사용하고 싶은 경우"},{text:"다양한 색상으로 인테리어를 연출하고 싶은 경우"}]},{variant:"pu",title:"폴리우레아 줄눈 추천",sub:"For Outdoor · Industrial",items:[{text:"베란다·테라스 등 온도 변화와 진동이 많은 공간"},{text:"건물 외벽·주차장처럼 하중과 충격이 큰 환경"},{text:"빠른 시공과 조기 경화가 필요한 경우"},{text:"비용을 절감하면서도 품질을 원하는 경우"}]}],Sv=[{idx:"No. 01 · Kerafoxy",href:"/info/kerafoxy",title:"케라폭시 줄눈이란?",desc:"에폭시 계열 고성능 줄눈 소재 케라폭시의 5가지 핵심 장점."},{idx:"No. 02 · Product",href:"/info/kerafoxy-product",title:"케라폭시 계열 제품 소개",desc:"케라폭시·스타라이크·푸가리테 등 주요 제품 라인업과 색상 가이드."},{idx:"No. 03 · Pricing",href:"/info/kerafoxy-price",title:"케라폭시 가격 안내",desc:"시공 비용에 영향을 주는 요인과 평형별 표준 가격을 한눈에."},{idx:"No. 04 · Why",href:"/info/why-grout",title:"줄눈시공 하는 이유",desc:"위생·미관·내구성을 위한 필수 시공인 이유를 정리했습니다."}];function mo({num:s,ko:u,en:o,title:d,lede:f}){return n.jsxs("div",{className:"cp-sec-head",children:[n.jsxs("div",{className:"cp-sec-bar",children:[n.jsx("span",{className:"cp-sec-n",children:s}),n.jsx("span",{className:"cp-sec-rule"}),n.jsxs("span",{className:"cp-sec-lbl",children:[n.jsx("span",{className:"cp-sec-ko",children:u}),n.jsx("span",{className:"cp-sec-en",children:o})]})]}),n.jsxs("div",{className:"cp-sec-body",children:[n.jsx("h2",{className:"cp-sec-title",children:d}),f&&n.jsx("p",{className:"cp-sec-lede",children:f})]})]})}function zv(){const s=_a();nl(),k.useEffect(()=>{window.scrollTo(0,0)},[]);const u=()=>{s("/#calc"),setTimeout(()=>{const o=document.querySelector("#calc");o&&o.scrollIntoView({behavior:"smooth"})},300)};return n.jsxs("div",{className:"cp-page",children:[n.jsx(al,{}),n.jsxs("header",{className:"cp-hero","data-screen-label":"Hero",children:[n.jsx("div",{className:"cp-hero-bg","aria-hidden":"true"}),n.jsxs("div",{className:"cp-container cp-hero-inner",children:[n.jsx("div",{className:"cp-eyebrow cp-eyebrow-light",children:"Material Compare Guide"}),n.jsxs("h1",{className:"cp-hero-title",children:["폴리우레아 ",n.jsx("span",{className:"cp-vs",children:"vs"})," 케라폭시"]}),n.jsxs("p",{className:"cp-hero-lede",children:["두 소재의 차이점과 장단점을 비교해",n.jsx("br",{}),"공간에 가장 알맞은 소재를 선택하세요."]})]})]}),n.jsx("nav",{className:"cp-crumb","aria-label":"현재 위치",children:n.jsxs("div",{className:"cp-container cp-crumb-inner",children:[n.jsx(Je,{to:"/",className:"cp-crumb-item",children:"홈"}),n.jsx("span",{className:"cp-crumb-sep",children:"/"}),n.jsx("span",{className:"cp-crumb-item",children:"줄눈 정보"}),n.jsx("span",{className:"cp-crumb-sep",children:"/"}),n.jsx("span",{className:"cp-crumb-here",children:"폴리우레아 vs 케라폭시"})]})}),n.jsx("section",{className:"cp-intro","data-screen-label":"Intro",children:n.jsx("div",{className:"cp-container",children:n.jsxs("div",{className:"cp-intro-grid",children:[n.jsxs("h2",{className:"cp-intro-title",children:["폴리우레아 줄눈과",n.jsx("br",{}),"케라폭시 줄눈,",n.jsx("br",{}),n.jsx("em",{children:"어떻게 다를까?"})]}),n.jsxs("div",{className:"cp-intro-body",children:[n.jsxs("p",{children:["줄눈 시공을 알아보다 보면 ",n.jsx("b",{children:"폴리우레아 줄눈"}),"과 ",n.jsx("b",{children:"케라폭시 줄눈"}),", 두 가지 선택지를 마주하게 됩니다. 두 소재 모두 기존 시멘트 줄눈보다 월등히 우수한 성능을 자랑하지만, 각자의 강점이 다릅니다."]}),n.jsxs("p",{children:["간단히 말하면, ",n.jsx("b",{children:"케라폭시는 방수·항균 성능"}),"이 극강이고"," ",n.jsx("b",{children:"폴리우레아는 탄성·신축성"}),"이 뛰어납니다. 공간의 특성에 따라 알맞은 소재를 선택하는 것이 핵심입니다."]}),n.jsxs("div",{className:"cp-vs-mark",children:[n.jsxs("span",{className:"cp-pill",children:["방수·항균 ",n.jsx("b",{children:"케라폭시"})]}),n.jsx("span",{className:"cp-vs-x",children:"×"}),n.jsxs("span",{className:"cp-pill",children:["탄성·내충격 ",n.jsx("b",{children:"폴리우레아"})]})]})]})]})})}),n.jsx("section",{className:"cp-section cp-bg-paper","data-screen-label":"01 Detailed Comparison",children:n.jsxs("div",{className:"cp-container",children:[n.jsx(mo,{num:"01",ko:"상세 비교표",en:"Detailed Comparison",title:n.jsxs(n.Fragment,{children:["10가지 항목으로,",n.jsx("br",{}),"두 소재를 ",n.jsx("em",{children:"나란히 본다"}),"."]}),lede:"성분·내구성·가격·시공성까지. 한 줄씩 짚어가며 비교하세요. ★은 5점 만점 기준의 상대 성능입니다."}),n.jsx("div",{className:"cp-cmp-wrap",children:n.jsxs("table",{className:"cp-cmp-table",children:[n.jsx("caption",{className:"sr-only",children:"케라폭시 vs 폴리우레아 10항목 비교"}),n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{className:"cp-cmp-first",children:n.jsxs("span",{className:"cp-cmp-mat",children:["비교 항목",n.jsx("small",{children:"Criteria"})]})}),n.jsx("th",{children:n.jsxs("span",{className:"cp-cmp-mat",children:["케라폭시 줄눈",n.jsx("small",{children:"Kerapoxy"})]})}),n.jsx("th",{children:n.jsxs("span",{className:"cp-cmp-mat",children:["폴리우레아 줄눈",n.jsx("small",{children:"Polyurea"})]})})]})}),n.jsx("tbody",{children:lm.map(o=>n.jsxs("tr",{children:[n.jsx("td",{className:"cp-row-label",children:o.k}),n.jsx("td",{className:"cp-col-kp",children:o.kerafoxy}),n.jsx("td",{children:o.polyurea})]},o.k))})]})}),n.jsx("ul",{className:"cp-cmp-cards","aria-label":"비교 항목별 카드",children:lm.map(o=>n.jsxs("li",{className:"cp-cmp-card",children:[n.jsx("div",{className:"cp-cmp-card-k",children:o.k}),n.jsxs("div",{className:"cp-cmp-card-row",children:[n.jsxs("div",{className:"cp-cmp-card-side cp-cmp-card-kp",children:[n.jsx("span",{className:"cp-cmp-card-side-lbl",children:"케라폭시"}),n.jsx("span",{className:"cp-cmp-card-side-val",children:o.kerafoxy})]}),n.jsxs("div",{className:"cp-cmp-card-side",children:[n.jsx("span",{className:"cp-cmp-card-side-lbl",children:"폴리우레아"}),n.jsx("span",{className:"cp-cmp-card-side-val",children:o.polyurea})]})]})]},`m-${o.k}`))}),n.jsx("p",{className:"cp-cmp-foot",children:"* 가격은 화장실 양변기 전체(바닥+벽) 시공 기준 평균값이며, 평형·현장 상황에 따라 달라질 수 있습니다."})]})}),n.jsx("section",{className:"cp-section","data-screen-label":"02 Recommend",children:n.jsxs("div",{className:"cp-container",children:[n.jsx(mo,{num:"02",ko:"어떤 소재를 선택해야 할까요?",en:"Which to Choose",title:n.jsxs(n.Fragment,{children:["공간 용도와 목적에 따라,",n.jsx("br",{}),"최적의 ",n.jsx("em",{children:"줄눈 소재"}),"를 선택하세요."]}),lede:"아래 체크리스트로 본인 공간에 더 어울리는 소재를 확인할 수 있습니다."}),n.jsx("div",{className:"cp-reco-grid",children:Nv.map(o=>n.jsxs("article",{className:`cp-reco cp-reco-${o.variant}`,children:[n.jsxs("div",{className:"cp-reco-head",children:[n.jsx("h3",{className:"cp-reco-title",children:o.title}),n.jsx("span",{className:"cp-reco-sub",children:o.sub})]}),n.jsx("ul",{className:"cp-reco-list",children:o.items.map(d=>n.jsx("li",{children:d.text},d.text))})]},o.variant))})]})}),n.jsx("section",{className:"cp-section cp-bg-paper","data-screen-label":"03 Related",children:n.jsxs("div",{className:"cp-container",children:[n.jsx(mo,{num:"03",ko:"관련 정보 더 보기",en:"Related",title:n.jsxs(n.Fragment,{children:["줄눈에 대해 알아야 할, 다른 ",n.jsx("em",{children:"네 가지"}),"."]}),lede:"자재 · 제품 · 가격 · 시공 이유 — 네 가지 관점으로 줄눈을 더 깊이 살펴보세요."}),n.jsx("div",{className:"cp-related-grid",children:Sv.map(o=>n.jsxs(Je,{to:o.href,className:"cp-related-card",children:[n.jsx("span",{className:"cp-related-idx",children:o.idx}),n.jsx("h4",{className:"cp-related-title",children:o.title}),n.jsx("p",{className:"cp-related-desc",children:o.desc}),n.jsxs("span",{className:"cp-related-more",children:["more ",n.jsx("span",{className:"cp-related-arr",children:"→"})]})]},o.href))})]})}),n.jsx("section",{className:"cp-cta-band","data-screen-label":"CTA Band",children:n.jsxs("div",{className:"cp-container cp-cta-row",children:[n.jsxs("div",{className:"cp-cta-text",children:[n.jsxs("h3",{className:"cp-cta-title",children:["어떤 소재가 맞을지 ",n.jsx("em",{children:"아직 고민되시나요?"})]}),n.jsx("p",{className:"cp-cta-sub",children:"현장 상황과 요구 사항을 듣고 최적의 소재를 추천해 드립니다."})]}),n.jsxs("div",{className:"cp-cta-actions",children:[n.jsxs("button",{type:"button",className:"cp-btn cp-btn-primary",onClick:u,children:["무료 견적 받기 ",n.jsx("span",{className:"cp-btn-arr",children:"→"})]}),n.jsx("a",{href:"tel:010-8005-6674",onClick:()=>Ut.phoneClick("info_cta"),className:"cp-btn cp-btn-ghost",children:"전화 상담 010-8005-6674"})]})]})}),n.jsx(ll,{}),n.jsx("style",{children:Ev})]})}const Ev=`
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

/* ===== Related ===== */
.cp-related-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
@media (max-width: 900px) {
  .cp-related-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .cp-related-grid { grid-template-columns: 1fr; }
}
.cp-related-card {
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
.cp-related-card:hover {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
}
.cp-related-idx {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.cp-related-card:hover .cp-related-idx { color: #d9b790; }
.cp-related-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 500;
  font-size: 21px;
  line-height: 1.35;
  color: var(--ink);
  margin: 0;
  letter-spacing: -0.005em;
}
.cp-related-card:hover .cp-related-title { color: #fff; }
.cp-related-desc {
  font-size: 13px;
  line-height: 1.7;
  color: var(--muted);
  margin: 0;
}
.cp-related-card:hover .cp-related-desc { color: rgba(255,255,255,.75); }
.cp-related-more {
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
.cp-related-card:hover .cp-related-more { color: #d9b790; }
.cp-related-arr { transition: transform .3s ease; }
.cp-related-card:hover .cp-related-arr { transform: translateX(4px); }

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
`,Av=[{k:"핵심 가치",v:"위생·미관·방수",small:"3대 효과"},{k:"권장 주기",v:"5년+",small:"시멘트 줄눈 기준"},{k:"시공 시간",v:"1일",small:"평형별 상이"},{k:"A/S",v:"2년",small:"무상"}],Tv=[{n:"01",title:"위생 관리 — 곰팡이와 세균 차단",body:"타일 사이 줄눈은 습기가 모이기 쉬운 공간입니다. 시멘트 줄눈이 낡으면 균열과 기공이 생겨 곰팡이와 세균이 번식합니다. 정기적인 줄눈시공은 이런 위생 문제를 근본적으로 차단합니다.",k:"위생 지표",v:"곰팡이 0"},{n:"02",title:"미관 개선 — 공간의 첫인상을 바꾸다",body:"낡고 변색된 줄눈은 아무리 깨끗한 타일이어도 공간 전체를 낡아 보이게 만듭니다. 반대로 깔끔한 줄눈 하나만으로도 화장실·주방이 리모델링한 것처럼 새로워집니다.",k:"체감 효과",v:"리모델링 급"},{n:"03",title:"방수 보강 — 구조물 손상 예방",body:"줄눈이 갈라지면 물이 타일 아래로 스며들어 시멘트 바닥과 벽체에 수분이 침투합니다. 장기적으로 곰팡이, 타일 박리, 구조물 부식으로 이어져 훨씬 큰 수리 비용을 만듭니다.",k:"방수 효과",v:"구조 보호"},{n:"04",title:"비용 절감 — 조기 시공이 유리한 이유",body:"줄눈 문제를 방치하면 타일 전체 교체·방수 공사·구조 보수 등 수백만 원대 공사가 필요해집니다. 초기에 줄눈시공만 해도 이런 대규모 수리를 미연에 방지할 수 있습니다.",k:"예상 절감",v:"수백만 원"}],Rv=[{k:"PB · 01",title:"곰팡이 대량 번식",body:"검은 곰팡이가 타일 줄눈을 따라 번지며 제거가 점점 어려워집니다."},{k:"PB · 02",title:"물이 벽·바닥 내부로 침투",body:"균열된 줄눈을 통해 물이 내부로 스며들어 구조 손상이 시작됩니다."},{k:"PB · 03",title:"타일 박리 · 탈락",body:"수분 침투로 접착력이 약해지며 타일이 들뜨거나 깨져 나갑니다."},{k:"PB · 04",title:"악취 발생",body:"유기물과 습기가 결합해 욕실 특유의 불쾌한 냄새가 심해집니다."}],Cv=[{k:"TM · 01",title:"5년 이상 된 욕실·화장실",body:"시멘트 줄눈의 평균 수명을 넘은 경우 교체 시공을 권장합니다."},{k:"TM · 02",title:"변색·흑화가 눈에 띄는 경우",body:"줄눈이 검게 변했다면 이미 곰팡이가 깊이 침투한 상태일 수 있습니다."},{k:"TM · 03",title:"균열·탈락이 발생한 경우",body:"방치하면 물 침투로 인한 구조 손상으로 이어질 수 있습니다."},{k:"TM · 04",title:"집 매매 · 임대 전후",body:"줄눈 시공만으로도 체감 상태가 크게 달라져 매도·임대에 유리합니다."}],Ov=[{idx:"No. 01 · Kerafoxy",href:"/info/kerafoxy",title:"케라폭시 줄눈이란?",desc:"에폭시 계열 고성능 줄눈 소재 케라폭시의 5가지 핵심 장점을 정리했습니다."},{idx:"No. 02 · Pricing",href:"/info/kerafoxy-price",title:"케라폭시 가격 안내",desc:"시공 비용에 영향을 주는 요인과 평형별 표준 가격을 한눈에."},{idx:"No. 03 · Product",href:"/info/kerafoxy-product",title:"케라폭시 계열 제품 소개",desc:"케라폭시·스타라이크·푸가리테 등 주요 제품 라인업과 색상 가이드."},{idx:"No. 04 · Compare",href:"/info/comparison",title:"폴리우레아 vs 케라폭시",desc:"두 소재의 차이점과, 어떤 공간에 어떤 소재가 적합한지."}];function Nr({num:s,ko:u,en:o,title:d,lede:f,dark:m}){return n.jsxs("div",{className:`wg-sec-head ${m?"wg-sec-head-dark":""}`,children:[n.jsxs("div",{className:"wg-sec-bar",children:[n.jsx("span",{className:"wg-sec-n",children:s}),n.jsx("span",{className:"wg-sec-rule"}),n.jsxs("span",{className:"wg-sec-lbl",children:[n.jsx("span",{className:"wg-sec-ko",children:u}),n.jsx("span",{className:"wg-sec-en",children:o})]})]}),n.jsxs("div",{className:"wg-sec-body",children:[n.jsx("h2",{className:"wg-sec-title",children:d}),f&&n.jsx("p",{className:"wg-sec-lede",children:f})]})]})}function Mv(){const s=_a();nl(),k.useEffect(()=>{window.scrollTo(0,0)},[]);const u=()=>{s("/#calc"),setTimeout(()=>{const o=document.querySelector("#calc");o&&o.scrollIntoView({behavior:"smooth"})},300)};return n.jsxs("div",{className:"wg-page",children:[n.jsx(al,{}),n.jsxs("header",{className:"wg-hero","data-screen-label":"Hero",children:[n.jsx("div",{className:"wg-hero-bg","aria-hidden":"true"}),n.jsxs("div",{className:"wg-container wg-hero-inner",children:[n.jsx("div",{className:"wg-eyebrow wg-eyebrow-light",children:"Grout Knowledge · 05"}),n.jsxs("h1",{className:"wg-hero-title",children:["줄눈시공",n.jsx("em",{children:","}),n.jsx("br",{}),"선택이 아닌 ",n.jsx("em",{children:"필수"}),"인 이유."]}),n.jsxs("p",{className:"wg-hero-lede",children:["위생 · 미관 · 방수 · 비용 절감.",n.jsx("br",{}),"줄눈 하나만 바꿔도 공간의 수명이 크게 달라집니다."]}),n.jsx("ul",{className:"wg-hero-meta",children:Av.map(o=>n.jsxs("li",{children:[n.jsx("span",{className:"wg-meta-k",children:o.k}),n.jsxs("span",{className:"wg-meta-v",children:[o.v," ",n.jsx("small",{children:o.small})]})]},o.k))})]})]}),n.jsx("nav",{className:"wg-crumb","aria-label":"현재 위치",children:n.jsxs("div",{className:"wg-container wg-crumb-inner",children:[n.jsx(Je,{to:"/",className:"wg-crumb-item",children:"홈"}),n.jsx("span",{className:"wg-crumb-sep",children:"/"}),n.jsx("span",{className:"wg-crumb-item",children:"줄눈 정보"}),n.jsx("span",{className:"wg-crumb-sep",children:"/"}),n.jsx("span",{className:"wg-crumb-here",children:"줄눈시공 하는 이유"})]})}),n.jsx("section",{className:"wg-section","data-screen-label":"Intro",children:n.jsx("div",{className:"wg-container",children:n.jsxs("div",{className:"wg-intro-grid",children:[n.jsxs("h2",{className:"wg-intro-title",children:["줄눈시공은",n.jsx("br",{}),"선택이 아니라 ",n.jsx("em",{children:"필수"}),"입니다."]}),n.jsxs("div",{className:"wg-intro-body",children:[n.jsxs("p",{children:["많은 분들이 줄눈을 단순한 타일 사이 채움재로 생각하지만, 실제로는"," ",n.jsx("b",{children:"방수 · 위생 · 구조 보호"}),"를 담당하는 핵심 요소입니다. 줄눈이 낡으면 눈에 보이는 미관 문제를 넘어, 심각한 주거 환경 문제로 이어집니다."]}),n.jsxs("p",{children:["특히 매일 물을 사용하는 욕실·화장실·주방에서 ",n.jsx("b",{children:"줄눈시공"}),"은 가장 효과적인 유지보수 방법 중 하나입니다. 작은 투자로 공간 수명을 크게 연장할 수 있습니다."]})]})]})})}),n.jsx("section",{className:"wg-section wg-bg-paper","data-screen-label":"01 Reasons",children:n.jsxs("div",{className:"wg-container",children:[n.jsx(Nr,{num:"01",ko:"줄눈시공을 해야 하는 이유",en:"4 Reasons",title:n.jsxs(n.Fragment,{children:["네 가지 이유로,",n.jsx("br",{}),n.jsx("em",{children:"지금"})," 시공해야 합니다."]}),lede:"위생 · 미관 · 방수 · 비용. 줄눈시공이 만들어내는 효과를 한 줄씩 짚어봅니다."}),n.jsx("ul",{className:"wg-reasons",children:Tv.map(o=>n.jsxs("li",{className:"wg-r-row",children:[n.jsx("span",{className:"wg-r-n",children:o.n}),n.jsxs("div",{className:"wg-r-text",children:[n.jsx("h3",{className:"wg-r-title",children:o.title}),n.jsx("p",{className:"wg-r-body",children:o.body})]}),n.jsxs("div",{className:"wg-r-spec",children:[n.jsx("span",{className:"wg-r-k",children:o.k}),n.jsx("span",{className:"wg-r-v",children:o.v})]})]},o.n))})]})}),n.jsx("section",{className:"wg-section-dark","data-screen-label":"02 Problems",children:n.jsxs("div",{className:"wg-container",children:[n.jsx(Nr,{dark:!0,num:"02",ko:"줄눈시공을 미루면 생기는 문제",en:"What Happens",title:n.jsxs(n.Fragment,{children:["작은 균열이,",n.jsx("br",{}),n.jsx("em",{children:"큰 손상"}),"으로 이어집니다."]}),lede:"줄눈 노후를 방치하면 단순한 미관 문제를 넘어 주거 구조 자체에 영향을 줍니다."}),n.jsx("div",{className:"wg-prob-grid",children:Rv.map(o=>n.jsxs("article",{className:"wg-prob-card",children:[n.jsx("span",{className:"wg-prob-k",children:o.k}),n.jsx("h3",{className:"wg-prob-title",children:o.title}),n.jsx("p",{className:"wg-prob-body",children:o.body})]},o.k))})]})}),n.jsx("section",{className:"wg-section","data-screen-label":"03 Timing",children:n.jsxs("div",{className:"wg-container",children:[n.jsx(Nr,{num:"03",ko:"줄눈시공이 필요한 시점",en:"When to Start",title:n.jsxs(n.Fragment,{children:["이런 상황이라면,",n.jsx("br",{}),n.jsx("em",{children:"지금"})," 점검해 보세요."]}),lede:"아래 중 하나라도 해당된다면 줄눈 상태를 한 번 확인해볼 시점입니다."}),n.jsx("div",{className:"wg-timing-grid",children:Cv.map(o=>n.jsxs("article",{className:"wg-timing-card",children:[n.jsx("span",{className:"wg-timing-k",children:o.k}),n.jsx("h3",{className:"wg-timing-title",children:o.title}),n.jsx("p",{className:"wg-timing-body",children:o.body})]},o.k))})]})}),n.jsx("section",{className:"wg-section wg-bg-paper","data-screen-label":"04 Related",children:n.jsxs("div",{className:"wg-container",children:[n.jsx(Nr,{num:"04",ko:"관련 정보 더 보기",en:"Related",title:n.jsxs(n.Fragment,{children:["줄눈에 대해 알아야 할, 다른 ",n.jsx("em",{children:"네 가지"}),"."]}),lede:"자재 · 가격 · 제품 · 비교 — 네 가지 관점으로 줄눈을 더 깊이 살펴보세요."}),n.jsx("div",{className:"wg-related-grid",children:Ov.map(o=>n.jsxs(Je,{to:o.href,className:"wg-related-card",children:[n.jsx("span",{className:"wg-related-idx",children:o.idx}),n.jsx("h4",{className:"wg-related-title",children:o.title}),n.jsx("p",{className:"wg-related-desc",children:o.desc}),n.jsxs("span",{className:"wg-related-more",children:["more ",n.jsx("span",{className:"wg-related-arr",children:"→"})]})]},o.href))})]})}),n.jsx("section",{className:"wg-cta-band","data-screen-label":"CTA Band",children:n.jsxs("div",{className:"wg-container wg-cta-row",children:[n.jsxs("div",{className:"wg-cta-text",children:[n.jsxs("h3",{className:"wg-cta-title",children:["지금 우리 집 줄눈이 ",n.jsx("em",{children:"괜찮은지"})," 점검받아 보세요."]}),n.jsx("p",{className:"wg-cta-sub",children:"사진 한 장만 보내주시면 현재 상태와 시공 필요 여부를 안내해 드립니다."})]}),n.jsxs("div",{className:"wg-cta-actions",children:[n.jsxs("button",{type:"button",className:"wg-btn wg-btn-primary",onClick:u,children:["무료 견적 받기 ",n.jsx("span",{className:"wg-btn-arr",children:"→"})]}),n.jsx("a",{href:"tel:010-8005-6674",onClick:()=>Ut.phoneClick("info_cta"),className:"wg-btn wg-btn-ghost",children:"전화 상담 010-8005-6674"})]})]})}),n.jsx(ll,{}),n.jsx("style",{children:Dv})]})}const Dv=`
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

/* ===== Related ===== */
.wg-related-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
@media (max-width: 900px) {
  .wg-related-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .wg-related-grid { grid-template-columns: 1fr; }
}
.wg-related-card {
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
.wg-related-card:hover {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
}
.wg-related-idx {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.wg-related-card:hover .wg-related-idx { color: #d9b790; }
.wg-related-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 500;
  font-size: 21px;
  line-height: 1.35;
  color: var(--ink);
  margin: 0;
  letter-spacing: -0.005em;
}
.wg-related-card:hover .wg-related-title { color: #fff; }
.wg-related-desc {
  font-size: 13px;
  line-height: 1.7;
  color: var(--muted);
  margin: 0;
}
.wg-related-card:hover .wg-related-desc { color: rgba(255,255,255,.75); }
.wg-related-more {
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
.wg-related-card:hover .wg-related-more { color: #d9b790; }
.wg-related-arr { transition: transform .3s ease; }
.wg-related-card:hover .wg-related-arr { transform: translateX(4px); }

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
`,_v=[{title:"1. 개인정보의 처리 목적",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:'디테일라인(이하 "회사")은 다음의 목적을 위하여 개인정보를 처리하며, 다음의 목적 이외의 용도로는 이용하지 않습니다.'}),n.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[n.jsx("li",{children:"견적 상담 및 방문 일정 조율"}),n.jsx("li",{children:"시공 서비스 안내, 견적 회신, 후속 응대"}),n.jsx("li",{children:"본인 확인 및 부정 이용 방지"})]})]})},{title:"2. 수집하는 개인정보 항목",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"회사는 무료 견적 상담 신청 시 다음의 개인정보를 수집합니다."}),n.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[n.jsxs("li",{children:[n.jsx("strong",{children:"필수 항목"}),": 이름, 연락처(휴대전화), 시공 위치(주소), 희망 시공 일정, 시공 공간(현관/화장실/베란다 등)"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"선택 항목"}),": 이메일, 상세 시공 내역(요청 사항)"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"자동 수집"}),": 접속 일시(상담 신청 시각)"]})]})]})},{title:"3. 개인정보의 보유 및 이용 기간",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"수집된 개인정보는 상담 완료 후 즉시 폐기하는 것을 원칙으로 합니다."}),n.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[n.jsx("li",{children:"상담 완료(견적 회신 또는 거절 의사 확인) 후 지체 없이 파기"}),n.jsx("li",{children:"다만, 시공 계약이 체결된 경우에는 「전자상거래 등에서의 소비자보호에 관한 법률」 등 관계 법령에 따라 거래 기록을 5년간 보관할 수 있습니다."})]})]})},{title:"4. 개인정보의 제3자 제공 및 처리 위탁",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"회사는 정보주체의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 견적 신청서 접수 처리를 위해 다음의 클라우드 서비스를 이용합니다."}),n.jsx("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:n.jsxs("li",{children:[n.jsx("strong",{children:"Google LLC (Google Workspace · Apps Script)"})," — 견적 신청 데이터 저장 및 처리. 데이터 처리 위치: 미국"]})}),n.jsx("p",{className:"mt-3 text-[var(--muted)] text-sm",children:"위 위탁업체는 Google이 제공하는 표준 데이터 보호 약관에 따라 운영되며, 회사는 위탁 처리 과정을 정기적으로 점검합니다."})]})},{title:"5. 개인정보의 파기 절차 및 방법",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"회사는 보유 기간이 경과하거나 처리 목적이 달성된 개인정보를 다음의 절차와 방법에 따라 지체 없이 파기합니다."}),n.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[n.jsxs("li",{children:[n.jsx("strong",{children:"파기 절차"}),": 상담 완료 시점에 자동/수동으로 식별, 즉시 파기 처리"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"전자적 파일"}),": 복원이 불가능한 방법으로 영구 삭제"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"출력물"}),": 분쇄 또는 소각"]})]})]})},{title:"6. 정보주체의 권리·의무 및 행사 방법",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"정보주체는 회사에 대해 언제든지 다음의 권리를 행사할 수 있습니다."}),n.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[n.jsx("li",{children:"개인정보 열람 요구"}),n.jsx("li",{children:"오류 등이 있을 경우 정정 요구"}),n.jsx("li",{children:"삭제 요구"}),n.jsx("li",{children:"처리 정지 요구"})]}),n.jsx("p",{className:"mt-3",children:"위 권리 행사는 아래 연락처를 통해 요청하실 수 있으며, 회사는 지체 없이 조치합니다."})]})},{title:"7. 개인정보의 안전성 확보 조치",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"회사는 개인정보 보호를 위해 다음의 조치를 취하고 있습니다."}),n.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[n.jsx("li",{children:"관리적 조치: 개인정보 취급자 최소화, 정기 점검"}),n.jsx("li",{children:"기술적 조치: 전송 구간 HTTPS 암호화, 접근 권한 통제"}),n.jsx("li",{children:"물리적 조치: 자료 보관 장소 출입 통제"})]})]})},{title:"8. 개인정보 보호 책임자",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만 처리 및 피해 구제 등을 위하여 아래와 같이 개인정보 보호 책임자를 지정하고 있습니다."}),n.jsxs("div",{className:"mt-3 p-4 bg-[var(--bg)] rounded-sm text-sm space-y-1",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"상호"}),": 디테일라인"]}),n.jsxs("p",{children:[n.jsx("strong",{children:"사업자등록번호"}),": 609-33-19473"]}),n.jsxs("p",{children:[n.jsx("strong",{children:"주소"}),": 서울 서초구 본마을4길 11 1층 104호"]}),n.jsxs("p",{children:[n.jsx("strong",{children:"연락처"}),": 010-8005-6674"]})]})]})},{title:"9. 권익 침해 구제 방법",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"개인정보 침해로 인한 구제가 필요한 경우 아래 기관에 문의하실 수 있습니다."}),n.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[n.jsx("li",{children:"개인정보분쟁조정위원회: 1833-6972 (privacy.go.kr)"}),n.jsx("li",{children:"개인정보침해신고센터: 118 (privacy.kisa.or.kr)"}),n.jsx("li",{children:"대검찰청 사이버수사과: 1301 (spo.go.kr)"}),n.jsx("li",{children:"경찰청 사이버수사국: 182 (ecrm.cyber.go.kr)"})]})]})},{title:"10. 개인정보 처리방침의 변경",body:n.jsx(n.Fragment,{children:n.jsx("p",{children:"이 개인정보 처리방침은 2026년 4월 29일부터 적용됩니다. 법령·정책 또는 보안 기술의 변경에 따라 내용이 추가, 삭제 및 수정될 경우 시행 7일 전부터 본 페이지를 통해 공지합니다."})})}];function Uv(){return nl(),k.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[]),n.jsxs("div",{className:"min-h-screen bg-[var(--paper)]",children:[n.jsx(al,{}),n.jsx("main",{className:"pt-28 pb-20 px-6 md:px-12 lg:px-20",children:n.jsxs("div",{className:"max-w-3xl mx-auto",children:[n.jsxs("div",{className:"mb-10",children:[n.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Privacy Policy"}),n.jsx("h1",{className:"text-4xl md:text-5xl font-black text-[var(--ink)] mt-2",children:"개인정보 처리방침"}),n.jsx("p",{className:"text-[var(--muted)] mt-3 text-sm",children:"시행일: 2026년 4월 29일"})]}),n.jsx("p",{className:"text-[var(--muted)] leading-relaxed mb-12",children:'디테일라인(이하 "회사")은 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립·공개합니다.'}),n.jsx("div",{className:"space-y-10",children:_v.map(s=>n.jsxs("section",{children:[n.jsx("h2",{className:"text-xl md:text-2xl font-bold text-[var(--ink)] mb-3",children:s.title}),n.jsx("div",{className:"text-[var(--muted)] leading-relaxed text-sm md:text-base",children:s.body})]},s.title))}),n.jsx("div",{className:"mt-16 pt-8 border-t border-[var(--line)] text-center",children:n.jsxs(Je,{to:"/",className:"inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--ink)] transition-colors",children:[n.jsx("i",{className:"ri-arrow-left-line"}),"홈으로 돌아가기"]})})]})}),n.jsx(ll,{})]})}const Bv=[{path:"/",element:n.jsx(Qb,{})},{path:"/privacy",element:n.jsx(Uv,{})},{path:"/info/kerafoxy",element:n.jsx(lv,{})},{path:"/info/kerafoxy-price",element:n.jsx(pv,{})},{path:"/info/kerafoxy-product",element:n.jsx(kv,{})},{path:"/info/comparison",element:n.jsx(zv,{})},{path:"/info/why-grout",element:n.jsx(Mv,{})},{path:"*",element:n.jsx(_0,{})}];let zm;new Promise(s=>{zm=s});function Hv(){const s=Gg(Bv),u=_a();return k.useEffect(()=>{window.REACT_APP_NAVIGATE=u,zm(window.REACT_APP_NAVIGATE)}),s}function Lv(){return n.jsx(S0,{basename:"/",children:n.jsx(Hv,{})})}ig.createRoot(document.getElementById("root")).render(n.jsx(k.StrictMode,{children:n.jsx(Lv,{})}));
