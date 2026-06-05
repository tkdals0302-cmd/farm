(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))u(p);new MutationObserver(p=>{for(const m of p)if(m.type==="childList")for(const x of m.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&u(x)}).observe(document,{childList:!0,subtree:!0});function c(p){const m={};return p.integrity&&(m.integrity=p.integrity),p.referrerPolicy&&(m.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?m.credentials="include":p.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function u(p){if(p.ep)return;p.ep=!0;const m=c(p);fetch(p.href,m)}})();var go={exports:{}},Wn={};var im;function Jg(){if(im)return Wn;im=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function c(u,p,m){var x=null;if(m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),"key"in p){m={};for(var g in p)g!=="key"&&(m[g]=p[g])}else m=p;return p=m.ref,{$$typeof:r,type:u,key:x,ref:p!==void 0?p:null,props:m}}return Wn.Fragment=o,Wn.jsx=c,Wn.jsxs=c,Wn}var sm;function $g(){return sm||(sm=1,go.exports=Jg()),go.exports}var l=$g(),bo={exports:{}},re={};var rm;function Wg(){if(rm)return re;rm=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),x=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),k=Symbol.for("react.activity"),B=Symbol.iterator;function Q(N){return N===null||typeof N!="object"?null:(N=B&&N[B]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,q={};function Y(N,A,L){this.props=N,this.context=A,this.refs=q,this.updater=L||S}Y.prototype.isReactComponent={},Y.prototype.setState=function(N,A){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,A,"setState")},Y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function V(){}V.prototype=Y.prototype;function H(N,A,L){this.props=N,this.context=A,this.refs=q,this.updater=L||S}var X=H.prototype=new V;X.constructor=H,G(X,Y.prototype),X.isPureReactComponent=!0;var le=Array.isArray;function W(){}var P={H:null,A:null,T:null,S:null},Ne=Object.prototype.hasOwnProperty;function U(N,A,L){var K=L.ref;return{$$typeof:r,type:N,key:A,ref:K!==void 0?K:null,props:L}}function ae(N,A){return U(N.type,A,N.props)}function ne(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function $(N){var A={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(L){return A[L]})}var ie=/\/+/g;function De(N,A){return typeof N=="object"&&N!==null&&N.key!=null?$(""+N.key):A.toString(36)}function ke(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(W,W):(N.status="pending",N.then(function(A){N.status==="pending"&&(N.status="fulfilled",N.value=A)},function(A){N.status==="pending"&&(N.status="rejected",N.reason=A)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function C(N,A,L,K,se){var oe=typeof N;(oe==="undefined"||oe==="boolean")&&(N=null);var xe=!1;if(N===null)xe=!0;else switch(oe){case"bigint":case"string":case"number":xe=!0;break;case"object":switch(N.$$typeof){case r:case o:xe=!0;break;case w:return xe=N._init,C(xe(N._payload),A,L,K,se)}}if(xe)return se=se(N),xe=K===""?"."+De(N,0):K,le(se)?(L="",xe!=null&&(L=xe.replace(ie,"$&/")+"/"),C(se,A,L,"",function(an){return an})):se!=null&&(ne(se)&&(se=ae(se,L+(se.key==null||N&&N.key===se.key?"":(""+se.key).replace(ie,"$&/")+"/")+xe)),A.push(se)),1;xe=0;var We=K===""?".":K+":";if(le(N))for(var Me=0;Me<N.length;Me++)K=N[Me],oe=We+De(K,Me),xe+=C(K,A,L,oe,se);else if(Me=Q(N),typeof Me=="function")for(N=Me.call(N),Me=0;!(K=N.next()).done;)K=K.value,oe=We+De(K,Me++),xe+=C(K,A,L,oe,se);else if(oe==="object"){if(typeof N.then=="function")return C(ke(N),A,L,K,se);throw A=String(N),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.")}return xe}function Z(N,A,L){if(N==null)return N;var K=[],se=0;return C(N,K,"","",function(oe){return A.call(L,oe,se++)}),K}function I(N){if(N._status===-1){var A=N._result;A=A(),A.then(function(L){(N._status===0||N._status===-1)&&(N._status=1,N._result=L)},function(L){(N._status===0||N._status===-1)&&(N._status=2,N._result=L)}),N._status===-1&&(N._status=0,N._result=A)}if(N._status===1)return N._result.default;throw N._result}var be=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var A=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(A))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},fe={map:Z,forEach:function(N,A,L){Z(N,function(){A.apply(this,arguments)},L)},count:function(N){var A=0;return Z(N,function(){A++}),A},toArray:function(N){return Z(N,function(A){return A})||[]},only:function(N){if(!ne(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return re.Activity=k,re.Children=fe,re.Component=Y,re.Fragment=c,re.Profiler=p,re.PureComponent=H,re.StrictMode=u,re.Suspense=b,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,re.__COMPILER_RUNTIME={__proto__:null,c:function(N){return P.H.useMemoCache(N)}},re.cache=function(N){return function(){return N.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(N,A,L){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var K=G({},N.props),se=N.key;if(A!=null)for(oe in A.key!==void 0&&(se=""+A.key),A)!Ne.call(A,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&A.ref===void 0||(K[oe]=A[oe]);var oe=arguments.length-2;if(oe===1)K.children=L;else if(1<oe){for(var xe=Array(oe),We=0;We<oe;We++)xe[We]=arguments[We+2];K.children=xe}return U(N.type,se,K)},re.createContext=function(N){return N={$$typeof:x,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:m,_context:N},N},re.createElement=function(N,A,L){var K,se={},oe=null;if(A!=null)for(K in A.key!==void 0&&(oe=""+A.key),A)Ne.call(A,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(se[K]=A[K]);var xe=arguments.length-2;if(xe===1)se.children=L;else if(1<xe){for(var We=Array(xe),Me=0;Me<xe;Me++)We[Me]=arguments[Me+2];se.children=We}if(N&&N.defaultProps)for(K in xe=N.defaultProps,xe)se[K]===void 0&&(se[K]=xe[K]);return U(N,oe,se)},re.createRef=function(){return{current:null}},re.forwardRef=function(N){return{$$typeof:g,render:N}},re.isValidElement=ne,re.lazy=function(N){return{$$typeof:w,_payload:{_status:-1,_result:N},_init:I}},re.memo=function(N,A){return{$$typeof:h,type:N,compare:A===void 0?null:A}},re.startTransition=function(N){var A=P.T,L={};P.T=L;try{var K=N(),se=P.S;se!==null&&se(L,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(W,be)}catch(oe){be(oe)}finally{A!==null&&L.types!==null&&(A.types=L.types),P.T=A}},re.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},re.use=function(N){return P.H.use(N)},re.useActionState=function(N,A,L){return P.H.useActionState(N,A,L)},re.useCallback=function(N,A){return P.H.useCallback(N,A)},re.useContext=function(N){return P.H.useContext(N)},re.useDebugValue=function(){},re.useDeferredValue=function(N,A){return P.H.useDeferredValue(N,A)},re.useEffect=function(N,A){return P.H.useEffect(N,A)},re.useEffectEvent=function(N){return P.H.useEffectEvent(N)},re.useId=function(){return P.H.useId()},re.useImperativeHandle=function(N,A,L){return P.H.useImperativeHandle(N,A,L)},re.useInsertionEffect=function(N,A){return P.H.useInsertionEffect(N,A)},re.useLayoutEffect=function(N,A){return P.H.useLayoutEffect(N,A)},re.useMemo=function(N,A){return P.H.useMemo(N,A)},re.useOptimistic=function(N,A){return P.H.useOptimistic(N,A)},re.useReducer=function(N,A,L){return P.H.useReducer(N,A,L)},re.useRef=function(N){return P.H.useRef(N)},re.useState=function(N){return P.H.useState(N)},re.useSyncExternalStore=function(N,A,L){return P.H.useSyncExternalStore(N,A,L)},re.useTransition=function(){return P.H.useTransition()},re.version="19.2.4",re}var cm;function Qo(){return cm||(cm=1,bo.exports=Wg()),bo.exports}var v=Qo(),vo={exports:{}},Fn={},yo={exports:{}},jo={};var om;function Fg(){return om||(om=1,(function(r){function o(C,Z){var I=C.length;C.push(Z);e:for(;0<I;){var be=I-1>>>1,fe=C[be];if(0<p(fe,Z))C[be]=Z,C[I]=fe,I=be;else break e}}function c(C){return C.length===0?null:C[0]}function u(C){if(C.length===0)return null;var Z=C[0],I=C.pop();if(I!==Z){C[0]=I;e:for(var be=0,fe=C.length,N=fe>>>1;be<N;){var A=2*(be+1)-1,L=C[A],K=A+1,se=C[K];if(0>p(L,I))K<fe&&0>p(se,L)?(C[be]=se,C[K]=I,be=K):(C[be]=L,C[A]=I,be=A);else if(K<fe&&0>p(se,I))C[be]=se,C[K]=I,be=K;else break e}}return Z}function p(C,Z){var I=C.sortIndex-Z.sortIndex;return I!==0?I:C.id-Z.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;r.unstable_now=function(){return m.now()}}else{var x=Date,g=x.now();r.unstable_now=function(){return x.now()-g}}var b=[],h=[],w=1,k=null,B=3,Q=!1,S=!1,G=!1,q=!1,Y=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function X(C){for(var Z=c(h);Z!==null;){if(Z.callback===null)u(h);else if(Z.startTime<=C)u(h),Z.sortIndex=Z.expirationTime,o(b,Z);else break;Z=c(h)}}function le(C){if(G=!1,X(C),!S)if(c(b)!==null)S=!0,W||(W=!0,$());else{var Z=c(h);Z!==null&&ke(le,Z.startTime-C)}}var W=!1,P=-1,Ne=5,U=-1;function ae(){return q?!0:!(r.unstable_now()-U<Ne)}function ne(){if(q=!1,W){var C=r.unstable_now();U=C;var Z=!0;try{e:{S=!1,G&&(G=!1,V(P),P=-1),Q=!0;var I=B;try{t:{for(X(C),k=c(b);k!==null&&!(k.expirationTime>C&&ae());){var be=k.callback;if(typeof be=="function"){k.callback=null,B=k.priorityLevel;var fe=be(k.expirationTime<=C);if(C=r.unstable_now(),typeof fe=="function"){k.callback=fe,X(C),Z=!0;break t}k===c(b)&&u(b),X(C)}else u(b);k=c(b)}if(k!==null)Z=!0;else{var N=c(h);N!==null&&ke(le,N.startTime-C),Z=!1}}break e}finally{k=null,B=I,Q=!1}Z=void 0}}finally{Z?$():W=!1}}}var $;if(typeof H=="function")$=function(){H(ne)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,De=ie.port2;ie.port1.onmessage=ne,$=function(){De.postMessage(null)}}else $=function(){Y(ne,0)};function ke(C,Z){P=Y(function(){C(r.unstable_now())},Z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(C){C.callback=null},r.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ne=0<C?Math.floor(1e3/C):5},r.unstable_getCurrentPriorityLevel=function(){return B},r.unstable_next=function(C){switch(B){case 1:case 2:case 3:var Z=3;break;default:Z=B}var I=B;B=Z;try{return C()}finally{B=I}},r.unstable_requestPaint=function(){q=!0},r.unstable_runWithPriority=function(C,Z){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var I=B;B=C;try{return Z()}finally{B=I}},r.unstable_scheduleCallback=function(C,Z,I){var be=r.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?be+I:be):I=be,C){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=I+fe,C={id:w++,callback:Z,priorityLevel:C,startTime:I,expirationTime:fe,sortIndex:-1},I>be?(C.sortIndex=I,o(h,C),c(b)===null&&C===c(h)&&(G?(V(P),P=-1):G=!0,ke(le,I-be))):(C.sortIndex=fe,o(b,C),S||Q||(S=!0,W||(W=!0,$()))),C},r.unstable_shouldYield=ae,r.unstable_wrapCallback=function(C){var Z=B;return function(){var I=B;B=Z;try{return C.apply(this,arguments)}finally{B=I}}}})(jo)),jo}var um;function Pg(){return um||(um=1,yo.exports=Fg()),yo.exports}var No={exports:{}},lt={};var dm;function Ig(){if(dm)return lt;dm=1;var r=Qo();function o(b){var h="https://react.dev/errors/"+b;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)h+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+b+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var u={d:{f:c,r:function(){throw Error(o(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},p=Symbol.for("react.portal");function m(b,h,w){var k=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:k==null?null:""+k,children:b,containerInfo:h,implementation:w}}var x=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(b,h){if(b==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,lt.createPortal=function(b,h){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(o(299));return m(b,h,null,w)},lt.flushSync=function(b){var h=x.T,w=u.p;try{if(x.T=null,u.p=2,b)return b()}finally{x.T=h,u.p=w,u.d.f()}},lt.preconnect=function(b,h){typeof b=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,u.d.C(b,h))},lt.prefetchDNS=function(b){typeof b=="string"&&u.d.D(b)},lt.preinit=function(b,h){if(typeof b=="string"&&h&&typeof h.as=="string"){var w=h.as,k=g(w,h.crossOrigin),B=typeof h.integrity=="string"?h.integrity:void 0,Q=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;w==="style"?u.d.S(b,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:k,integrity:B,fetchPriority:Q}):w==="script"&&u.d.X(b,{crossOrigin:k,integrity:B,fetchPriority:Q,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},lt.preinitModule=function(b,h){if(typeof b=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var w=g(h.as,h.crossOrigin);u.d.M(b,{crossOrigin:w,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&u.d.M(b)},lt.preload=function(b,h){if(typeof b=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var w=h.as,k=g(w,h.crossOrigin);u.d.L(b,w,{crossOrigin:k,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},lt.preloadModule=function(b,h){if(typeof b=="string")if(h){var w=g(h.as,h.crossOrigin);u.d.m(b,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:w,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else u.d.m(b)},lt.requestFormReset=function(b){u.d.r(b)},lt.unstable_batchedUpdates=function(b,h){return b(h)},lt.useFormState=function(b,h,w){return x.H.useFormState(b,h,w)},lt.useFormStatus=function(){return x.H.useHostTransitionStatus()},lt.version="19.2.4",lt}var pm;function e0(){if(pm)return No.exports;pm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),No.exports=Ig(),No.exports}var fm;function t0(){if(fm)return Fn;fm=1;var r=Pg(),o=Qo(),c=e0();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function x(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(m(e)!==e)throw Error(u(188))}function h(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===a)return b(i),e;if(s===n)return b(i),t;s=s.sibling}throw Error(u(188))}if(a.return!==n.return)a=i,n=s;else{for(var d=!1,f=i.child;f;){if(f===a){d=!0,a=i,n=s;break}if(f===n){d=!0,n=i,a=s;break}f=f.sibling}if(!d){for(f=s.child;f;){if(f===a){d=!0,a=s,n=i;break}if(f===n){d=!0,n=s,a=i;break}f=f.sibling}if(!d)throw Error(u(189))}}if(a.alternate!==n)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function w(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=w(e),t!==null)return t;e=e.sibling}return null}var k=Object.assign,B=Symbol.for("react.element"),Q=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),H=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),Ne=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),ae=Symbol.for("react.memo_cache_sentinel"),ne=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=ne&&e[ne]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Symbol.for("react.client.reference");function De(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case Y:return"Profiler";case q:return"StrictMode";case le:return"Suspense";case W:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case H:return e.displayName||"Context";case V:return(e._context.displayName||"Context")+".Consumer";case X:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return t=e.displayName||null,t!==null?t:De(e.type)||"Memo";case Ne:t=e._payload,e=e._init;try{return De(e(t))}catch{}}return null}var ke=Array.isArray,C=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},be=[],fe=-1;function N(e){return{current:e}}function A(e){0>fe||(e.current=be[fe],be[fe]=null,fe--)}function L(e,t){fe++,be[fe]=e.current,e.current=t}var K=N(null),se=N(null),oe=N(null),xe=N(null);function We(e,t){switch(L(oe,t),L(se,e),L(K,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?zf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=zf(t),e=Tf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}A(K),L(K,e)}function Me(){A(K),A(se),A(oe)}function an(e){e.memoizedState!==null&&L(xe,e);var t=K.current,a=Tf(t,e.type);t!==a&&(L(se,e),L(K,a))}function di(e){se.current===e&&(A(K),A(se)),xe.current===e&&(A(xe),Kn._currentValue=I)}var Ps,lu;function Va(e){if(Ps===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Ps=t&&t[1]||"",lu=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ps+e+lu}var Is=!1;function er(e,t){if(!e||Is)return"";Is=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(M){var R=M}Reflect.construct(e,[],D)}else{try{D.call()}catch(M){R=M}e.call(D.prototype)}}else{try{throw Error()}catch(M){R=M}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(M){if(M&&R&&typeof M.stack=="string")return[M.stack,R.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=n.DetermineComponentFrameRoot(),d=s[0],f=s[1];if(d&&f){var y=d.split(`
`),T=f.split(`
`);for(i=n=0;n<y.length&&!y[n].includes("DetermineComponentFrameRoot");)n++;for(;i<T.length&&!T[i].includes("DetermineComponentFrameRoot");)i++;if(n===y.length||i===T.length)for(n=y.length-1,i=T.length-1;1<=n&&0<=i&&y[n]!==T[i];)i--;for(;1<=n&&0<=i;n--,i--)if(y[n]!==T[i]){if(n!==1||i!==1)do if(n--,i--,0>i||y[n]!==T[i]){var O=`
`+y[n].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=n&&0<=i);break}}}finally{Is=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Va(a):""}function Sh(e,t){switch(e.tag){case 26:case 27:case 5:return Va(e.type);case 16:return Va("Lazy");case 13:return e.child!==t&&t!==null?Va("Suspense Fallback"):Va("Suspense");case 19:return Va("SuspenseList");case 0:case 15:return er(e.type,!1);case 11:return er(e.type.render,!1);case 1:return er(e.type,!0);case 31:return Va("Activity");default:return""}}function nu(e){try{var t="",a=null;do t+=Sh(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var tr=Object.prototype.hasOwnProperty,ar=r.unstable_scheduleCallback,lr=r.unstable_cancelCallback,Eh=r.unstable_shouldYield,Ah=r.unstable_requestPaint,mt=r.unstable_now,zh=r.unstable_getCurrentPriorityLevel,iu=r.unstable_ImmediatePriority,su=r.unstable_UserBlockingPriority,pi=r.unstable_NormalPriority,Th=r.unstable_LowPriority,ru=r.unstable_IdlePriority,Rh=r.log,Ch=r.unstable_setDisableYieldValue,ln=null,ht=null;function ba(e){if(typeof Rh=="function"&&Ch(e),ht&&typeof ht.setStrictMode=="function")try{ht.setStrictMode(ln,e)}catch{}}var xt=Math.clz32?Math.clz32:_h,Mh=Math.log,Oh=Math.LN2;function _h(e){return e>>>=0,e===0?32:31-(Mh(e)/Oh|0)|0}var fi=256,mi=262144,hi=4194304;function Qa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xi(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,s=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var f=n&134217727;return f!==0?(n=f&~s,n!==0?i=Qa(n):(d&=f,d!==0?i=Qa(d):a||(a=f&~e,a!==0&&(i=Qa(a))))):(f=n&~s,f!==0?i=Qa(f):d!==0?i=Qa(d):a||(a=n&~e,a!==0&&(i=Qa(a)))),i===0?0:t!==0&&t!==i&&(t&s)===0&&(s=i&-i,a=t&-t,s>=a||s===32&&(a&4194048)!==0)?t:i}function nn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Dh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cu(){var e=hi;return hi<<=1,(hi&62914560)===0&&(hi=4194304),e}function nr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function sn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Uh(e,t,a,n,i,s){var d=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var f=e.entanglements,y=e.expirationTimes,T=e.hiddenUpdates;for(a=d&~a;0<a;){var O=31-xt(a),D=1<<O;f[O]=0,y[O]=-1;var R=T[O];if(R!==null)for(T[O]=null,O=0;O<R.length;O++){var M=R[O];M!==null&&(M.lane&=-536870913)}a&=~D}n!==0&&ou(e,n,0),s!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=s&~(d&~t))}function ou(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-xt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function uu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-xt(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function du(e,t){var a=t&-t;return a=(a&42)!==0?1:ir(a),(a&(e.suspendedLanes|t))!==0?0:a}function ir(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function sr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function pu(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:Pf(e.type))}function fu(e,t){var a=Z.p;try{return Z.p=e,t()}finally{Z.p=a}}var va=Math.random().toString(36).slice(2),Fe="__reactFiber$"+va,rt="__reactProps$"+va,pl="__reactContainer$"+va,rr="__reactEvents$"+va,Bh="__reactListeners$"+va,Hh="__reactHandles$"+va,mu="__reactResources$"+va,rn="__reactMarker$"+va;function cr(e){delete e[Fe],delete e[rt],delete e[rr],delete e[Bh],delete e[Hh]}function fl(e){var t=e[Fe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[pl]||a[Fe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Uf(e);e!==null;){if(a=e[Fe])return a;e=Uf(e)}return t}e=a,a=e.parentNode}return null}function ml(e){if(e=e[Fe]||e[pl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function cn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function hl(e){var t=e[mu];return t||(t=e[mu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[rn]=!0}var hu=new Set,xu={};function Za(e,t){xl(e,t),xl(e+"Capture",t)}function xl(e,t){for(xu[e]=t,e=0;e<t.length;e++)hu.add(t[e])}var Lh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),gu={},bu={};function Yh(e){return tr.call(bu,e)?!0:tr.call(gu,e)?!1:Lh.test(e)?bu[e]=!0:(gu[e]=!0,!1)}function gi(e,t,a){if(Yh(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function bi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function It(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function wt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qh(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(d){a=""+d,s.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(d){a=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function or(e){if(!e._valueTracker){var t=vu(e)?"checked":"value";e._valueTracker=qh(e,t,""+e[t])}}function yu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=vu(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function vi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Gh=/[\n"\\]/g;function St(e){return e.replace(Gh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ur(e,t,a,n,i,s,d,f){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+wt(t)):e.value!==""+wt(t)&&(e.value=""+wt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?dr(e,d,wt(t)):a!=null?dr(e,d,wt(a)):n!=null&&e.removeAttribute("value"),i==null&&s!=null&&(e.defaultChecked=!!s),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+wt(f):e.removeAttribute("name")}function ju(e,t,a,n,i,s,d,f){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){or(e);return}a=a!=null?""+wt(a):"",t=t!=null?""+wt(t):a,f||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=f?e.checked:!!n,e.defaultChecked=!!n,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),or(e)}function dr(e,t,a){t==="number"&&vi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function gl(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+wt(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Nu(e,t,a){if(t!=null&&(t=""+wt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+wt(a):""}function ku(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(u(92));if(ke(n)){if(1<n.length)throw Error(u(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=wt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),or(e)}function bl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Vh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wu(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Vh.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Su(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&wu(e,i,n)}else for(var s in t)t.hasOwnProperty(s)&&wu(e,s,t[s])}function pr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yi(e){return Zh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ea(){}var fr=null;function mr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vl=null,yl=null;function Eu(e){var t=ml(e);if(t&&(e=t.stateNode)){var a=e[rt]||null;e:switch(e=t.stateNode,t.type){case"input":if(ur(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+St(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[rt]||null;if(!i)throw Error(u(90));ur(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&yu(n)}break e;case"textarea":Nu(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&gl(e,!!a.multiple,t,!1)}}}var hr=!1;function Au(e,t,a){if(hr)return e(t,a);hr=!0;try{var n=e(t);return n}finally{if(hr=!1,(vl!==null||yl!==null)&&(rs(),vl&&(t=vl,e=yl,yl=vl=null,Eu(t),e)))for(t=0;t<e.length;t++)Eu(e[t])}}function on(e,t){var a=e.stateNode;if(a===null)return null;var n=a[rt]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xr=!1;if(ta)try{var un={};Object.defineProperty(un,"passive",{get:function(){xr=!0}}),window.addEventListener("test",un,un),window.removeEventListener("test",un,un)}catch{xr=!1}var ya=null,gr=null,ji=null;function zu(){if(ji)return ji;var e,t=gr,a=t.length,n,i="value"in ya?ya.value:ya.textContent,s=i.length;for(e=0;e<a&&t[e]===i[e];e++);var d=a-e;for(n=1;n<=d&&t[a-n]===i[s-n];n++);return ji=i.slice(e,1<n?1-n:void 0)}function Ni(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ki(){return!0}function Tu(){return!1}function ct(e){function t(a,n,i,s,d){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(a=e[f],this[f]=a?a(s):s[f]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ki:Tu,this.isPropagationStopped=Tu,this}return k(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ki)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ki)},persist:function(){},isPersistent:ki}),t}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wi=ct(Ka),dn=k({},Ka,{view:0,detail:0}),Kh=ct(dn),br,vr,pn,Si=k({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pn&&(pn&&e.type==="mousemove"?(br=e.screenX-pn.screenX,vr=e.screenY-pn.screenY):vr=br=0,pn=e),br)},movementY:function(e){return"movementY"in e?e.movementY:vr}}),Ru=ct(Si),Xh=k({},Si,{dataTransfer:0}),Jh=ct(Xh),$h=k({},dn,{relatedTarget:0}),yr=ct($h),Wh=k({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),Fh=ct(Wh),Ph=k({},Ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ih=ct(Ph),ex=k({},Ka,{data:0}),Cu=ct(ex),tx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ax={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lx[e])?!!t[e]:!1}function jr(){return nx}var ix=k({},dn,{key:function(e){if(e.key){var t=tx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ni(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ax[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jr,charCode:function(e){return e.type==="keypress"?Ni(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ni(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sx=ct(ix),rx=k({},Si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mu=ct(rx),cx=k({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jr}),ox=ct(cx),ux=k({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),dx=ct(ux),px=k({},Si,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fx=ct(px),mx=k({},Ka,{newState:0,oldState:0}),hx=ct(mx),xx=[9,13,27,32],Nr=ta&&"CompositionEvent"in window,fn=null;ta&&"documentMode"in document&&(fn=document.documentMode);var gx=ta&&"TextEvent"in window&&!fn,Ou=ta&&(!Nr||fn&&8<fn&&11>=fn),_u=" ",Du=!1;function Uu(e,t){switch(e){case"keyup":return xx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jl=!1;function bx(e,t){switch(e){case"compositionend":return Bu(t);case"keypress":return t.which!==32?null:(Du=!0,_u);case"textInput":return e=t.data,e===_u&&Du?null:e;default:return null}}function vx(e,t){if(jl)return e==="compositionend"||!Nr&&Uu(e,t)?(e=zu(),ji=gr=ya=null,jl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ou&&t.locale!=="ko"?null:t.data;default:return null}}var yx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yx[e.type]:t==="textarea"}function Lu(e,t,a,n){vl?yl?yl.push(n):yl=[n]:vl=n,t=ms(t,"onChange"),0<t.length&&(a=new wi("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var mn=null,hn=null;function jx(e){Nf(e,0)}function Ei(e){var t=cn(e);if(yu(t))return e}function Yu(e,t){if(e==="change")return t}var qu=!1;if(ta){var kr;if(ta){var wr="oninput"in document;if(!wr){var Gu=document.createElement("div");Gu.setAttribute("oninput","return;"),wr=typeof Gu.oninput=="function"}kr=wr}else kr=!1;qu=kr&&(!document.documentMode||9<document.documentMode)}function Vu(){mn&&(mn.detachEvent("onpropertychange",Qu),hn=mn=null)}function Qu(e){if(e.propertyName==="value"&&Ei(hn)){var t=[];Lu(t,hn,e,mr(e)),Au(jx,t)}}function Nx(e,t,a){e==="focusin"?(Vu(),mn=t,hn=a,mn.attachEvent("onpropertychange",Qu)):e==="focusout"&&Vu()}function kx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ei(hn)}function wx(e,t){if(e==="click")return Ei(t)}function Sx(e,t){if(e==="input"||e==="change")return Ei(t)}function Ex(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:Ex;function xn(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!tr.call(t,i)||!gt(e[i],t[i]))return!1}return!0}function Zu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ku(e,t){var a=Zu(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Zu(a)}}function Xu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ju(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=vi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=vi(e.document)}return t}function Sr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ax=ta&&"documentMode"in document&&11>=document.documentMode,Nl=null,Er=null,gn=null,Ar=!1;function $u(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ar||Nl==null||Nl!==vi(n)||(n=Nl,"selectionStart"in n&&Sr(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),gn&&xn(gn,n)||(gn=n,n=ms(Er,"onSelect"),0<n.length&&(t=new wi("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Nl)))}function Xa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var kl={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionrun:Xa("Transition","TransitionRun"),transitionstart:Xa("Transition","TransitionStart"),transitioncancel:Xa("Transition","TransitionCancel"),transitionend:Xa("Transition","TransitionEnd")},zr={},Wu={};ta&&(Wu=document.createElement("div").style,"AnimationEvent"in window||(delete kl.animationend.animation,delete kl.animationiteration.animation,delete kl.animationstart.animation),"TransitionEvent"in window||delete kl.transitionend.transition);function Ja(e){if(zr[e])return zr[e];if(!kl[e])return e;var t=kl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Wu)return zr[e]=t[a];return e}var Fu=Ja("animationend"),Pu=Ja("animationiteration"),Iu=Ja("animationstart"),zx=Ja("transitionrun"),Tx=Ja("transitionstart"),Rx=Ja("transitioncancel"),ed=Ja("transitionend"),td=new Map,Tr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Tr.push("scrollEnd");function Dt(e,t){td.set(e,t),Za(t,[e])}var Ai=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Et=[],wl=0,Rr=0;function zi(){for(var e=wl,t=Rr=wl=0;t<e;){var a=Et[t];Et[t++]=null;var n=Et[t];Et[t++]=null;var i=Et[t];Et[t++]=null;var s=Et[t];if(Et[t++]=null,n!==null&&i!==null){var d=n.pending;d===null?i.next=i:(i.next=d.next,d.next=i),n.pending=i}s!==0&&ad(a,i,s)}}function Ti(e,t,a,n){Et[wl++]=e,Et[wl++]=t,Et[wl++]=a,Et[wl++]=n,Rr|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Cr(e,t,a,n){return Ti(e,t,a,n),Ri(e)}function $a(e,t){return Ti(e,null,null,t),Ri(e)}function ad(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,s=e.return;s!==null;)s.childLanes|=a,n=s.alternate,n!==null&&(n.childLanes|=a),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(i=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,i&&t!==null&&(i=31-xt(a),e=s.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),s):null}function Ri(e){if(50<Ln)throw Ln=0,Yc=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Sl={};function Cx(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(e,t,a,n){return new Cx(e,t,a,n)}function Mr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function aa(e,t){var a=e.alternate;return a===null?(a=bt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function ld(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ci(e,t,a,n,i,s){var d=0;if(n=e,typeof e=="function")Mr(e)&&(d=1);else if(typeof e=="string")d=Ug(e,a,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case U:return e=bt(31,a,t,i),e.elementType=U,e.lanes=s,e;case G:return Wa(a.children,i,s,t);case q:d=8,i|=24;break;case Y:return e=bt(12,a,t,i|2),e.elementType=Y,e.lanes=s,e;case le:return e=bt(13,a,t,i),e.elementType=le,e.lanes=s,e;case W:return e=bt(19,a,t,i),e.elementType=W,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:d=10;break e;case V:d=9;break e;case X:d=11;break e;case P:d=14;break e;case Ne:d=16,n=null;break e}d=29,a=Error(u(130,e===null?"null":typeof e,"")),n=null}return t=bt(d,a,t,i),t.elementType=e,t.type=n,t.lanes=s,t}function Wa(e,t,a,n){return e=bt(7,e,n,t),e.lanes=a,e}function Or(e,t,a){return e=bt(6,e,null,t),e.lanes=a,e}function nd(e){var t=bt(18,null,null,0);return t.stateNode=e,t}function _r(e,t,a){return t=bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var id=new WeakMap;function At(e,t){if(typeof e=="object"&&e!==null){var a=id.get(e);return a!==void 0?a:(t={value:e,source:t,stack:nu(t)},id.set(e,t),t)}return{value:e,source:t,stack:nu(t)}}var El=[],Al=0,Mi=null,bn=0,zt=[],Tt=0,ja=null,Gt=1,Vt="";function la(e,t){El[Al++]=bn,El[Al++]=Mi,Mi=e,bn=t}function sd(e,t,a){zt[Tt++]=Gt,zt[Tt++]=Vt,zt[Tt++]=ja,ja=e;var n=Gt;e=Vt;var i=32-xt(n)-1;n&=~(1<<i),a+=1;var s=32-xt(t)+i;if(30<s){var d=i-i%5;s=(n&(1<<d)-1).toString(32),n>>=d,i-=d,Gt=1<<32-xt(t)+i|a<<i|n,Vt=s+e}else Gt=1<<s|a<<i|n,Vt=e}function Dr(e){e.return!==null&&(la(e,1),sd(e,1,0))}function Ur(e){for(;e===Mi;)Mi=El[--Al],El[Al]=null,bn=El[--Al],El[Al]=null;for(;e===ja;)ja=zt[--Tt],zt[Tt]=null,Vt=zt[--Tt],zt[Tt]=null,Gt=zt[--Tt],zt[Tt]=null}function rd(e,t){zt[Tt++]=Gt,zt[Tt++]=Vt,zt[Tt++]=ja,Gt=t.id,Vt=t.overflow,ja=e}var Pe=null,Oe=null,ge=!1,Na=null,Rt=!1,Br=Error(u(519));function ka(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw vn(At(t,e)),Br}function cd(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[Fe]=e,t[rt]=n,a){case"dialog":pe("cancel",t),pe("close",t);break;case"iframe":case"object":case"embed":pe("load",t);break;case"video":case"audio":for(a=0;a<qn.length;a++)pe(qn[a],t);break;case"source":pe("error",t);break;case"img":case"image":case"link":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"input":pe("invalid",t),ju(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":pe("invalid",t);break;case"textarea":pe("invalid",t),ku(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||Ef(t.textContent,a)?(n.popover!=null&&(pe("beforetoggle",t),pe("toggle",t)),n.onScroll!=null&&pe("scroll",t),n.onScrollEnd!=null&&pe("scrollend",t),n.onClick!=null&&(t.onclick=ea),t=!0):t=!1,t||ka(e,!0)}function od(e){for(Pe=e.return;Pe;)switch(Pe.tag){case 5:case 31:case 13:Rt=!1;return;case 27:case 3:Rt=!0;return;default:Pe=Pe.return}}function zl(e){if(e!==Pe)return!1;if(!ge)return od(e),ge=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||to(e.type,e.memoizedProps)),a=!a),a&&Oe&&ka(e),od(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Oe=Df(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Oe=Df(e)}else t===27?(t=Oe,Ba(e.type)?(e=so,so=null,Oe=e):Oe=t):Oe=Pe?Mt(e.stateNode.nextSibling):null;return!0}function Fa(){Oe=Pe=null,ge=!1}function Hr(){var e=Na;return e!==null&&(pt===null?pt=e:pt.push.apply(pt,e),Na=null),e}function vn(e){Na===null?Na=[e]:Na.push(e)}var Lr=N(null),Pa=null,na=null;function wa(e,t,a){L(Lr,t._currentValue),t._currentValue=a}function ia(e){e._currentValue=Lr.current,A(Lr)}function Yr(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function qr(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var s=i.dependencies;if(s!==null){var d=i.child;s=s.firstContext;e:for(;s!==null;){var f=s;s=i;for(var y=0;y<t.length;y++)if(f.context===t[y]){s.lanes|=a,f=s.alternate,f!==null&&(f.lanes|=a),Yr(s.return,a,e),n||(d=null);break e}s=f.next}}else if(i.tag===18){if(d=i.return,d===null)throw Error(u(341));d.lanes|=a,s=d.alternate,s!==null&&(s.lanes|=a),Yr(d,a,e),d=null}else d=i.child;if(d!==null)d.return=i;else for(d=i;d!==null;){if(d===e){d=null;break}if(i=d.sibling,i!==null){i.return=d.return,d=i;break}d=d.return}i=d}}function Tl(e,t,a,n){e=null;for(var i=t,s=!1;i!==null;){if(!s){if((i.flags&524288)!==0)s=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var d=i.alternate;if(d===null)throw Error(u(387));if(d=d.memoizedProps,d!==null){var f=i.type;gt(i.pendingProps.value,d.value)||(e!==null?e.push(f):e=[f])}}else if(i===xe.current){if(d=i.alternate,d===null)throw Error(u(387));d.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Kn):e=[Kn])}i=i.return}e!==null&&qr(t,e,a,n),t.flags|=262144}function Oi(e){for(e=e.firstContext;e!==null;){if(!gt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ia(e){Pa=e,na=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ie(e){return ud(Pa,e)}function _i(e,t){return Pa===null&&Ia(e),ud(e,t)}function ud(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},na===null){if(e===null)throw Error(u(308));na=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else na=na.next=t;return a}var Mx=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Ox=r.unstable_scheduleCallback,_x=r.unstable_NormalPriority,Ge={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gr(){return{controller:new Mx,data:new Map,refCount:0}}function yn(e){e.refCount--,e.refCount===0&&Ox(_x,function(){e.controller.abort()})}var jn=null,Vr=0,Rl=0,Cl=null;function Dx(e,t){if(jn===null){var a=jn=[];Vr=0,Rl=Kc(),Cl={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Vr++,t.then(dd,dd),t}function dd(){if(--Vr===0&&jn!==null){Cl!==null&&(Cl.status="fulfilled");var e=jn;jn=null,Rl=0,Cl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ux(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var pd=C.S;C.S=function(e,t){$p=mt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Dx(e,t),pd!==null&&pd(e,t)};var el=N(null);function Qr(){var e=el.current;return e!==null?e:Ce.pooledCache}function Di(e,t){t===null?L(el,el.current):L(el,t.pool)}function fd(){var e=Qr();return e===null?null:{parent:Ge._currentValue,pool:e}}var Ml=Error(u(460)),Zr=Error(u(474)),Ui=Error(u(542)),Bi={then:function(){}};function md(e){return e=e.status,e==="fulfilled"||e==="rejected"}function hd(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ea,ea),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,gd(e),e;default:if(typeof t.status=="string")t.then(ea,ea);else{if(e=Ce,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,gd(e),e}throw al=t,Ml}}function tl(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(al=a,Ml):a}}var al=null;function xd(){if(al===null)throw Error(u(459));var e=al;return al=null,e}function gd(e){if(e===Ml||e===Ui)throw Error(u(483))}var Ol=null,Nn=0;function Hi(e){var t=Nn;return Nn+=1,Ol===null&&(Ol=[]),hd(Ol,e,t)}function kn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Li(e,t){throw t.$$typeof===B?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function bd(e){function t(E,j){if(e){var z=E.deletions;z===null?(E.deletions=[j],E.flags|=16):z.push(j)}}function a(E,j){if(!e)return null;for(;j!==null;)t(E,j),j=j.sibling;return null}function n(E){for(var j=new Map;E!==null;)E.key!==null?j.set(E.key,E):j.set(E.index,E),E=E.sibling;return j}function i(E,j){return E=aa(E,j),E.index=0,E.sibling=null,E}function s(E,j,z){return E.index=z,e?(z=E.alternate,z!==null?(z=z.index,z<j?(E.flags|=67108866,j):z):(E.flags|=67108866,j)):(E.flags|=1048576,j)}function d(E){return e&&E.alternate===null&&(E.flags|=67108866),E}function f(E,j,z,_){return j===null||j.tag!==6?(j=Or(z,E.mode,_),j.return=E,j):(j=i(j,z),j.return=E,j)}function y(E,j,z,_){var ee=z.type;return ee===G?O(E,j,z.props.children,_,z.key):j!==null&&(j.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Ne&&tl(ee)===j.type)?(j=i(j,z.props),kn(j,z),j.return=E,j):(j=Ci(z.type,z.key,z.props,null,E.mode,_),kn(j,z),j.return=E,j)}function T(E,j,z,_){return j===null||j.tag!==4||j.stateNode.containerInfo!==z.containerInfo||j.stateNode.implementation!==z.implementation?(j=_r(z,E.mode,_),j.return=E,j):(j=i(j,z.children||[]),j.return=E,j)}function O(E,j,z,_,ee){return j===null||j.tag!==7?(j=Wa(z,E.mode,_,ee),j.return=E,j):(j=i(j,z),j.return=E,j)}function D(E,j,z){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Or(""+j,E.mode,z),j.return=E,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Q:return z=Ci(j.type,j.key,j.props,null,E.mode,z),kn(z,j),z.return=E,z;case S:return j=_r(j,E.mode,z),j.return=E,j;case Ne:return j=tl(j),D(E,j,z)}if(ke(j)||$(j))return j=Wa(j,E.mode,z,null),j.return=E,j;if(typeof j.then=="function")return D(E,Hi(j),z);if(j.$$typeof===H)return D(E,_i(E,j),z);Li(E,j)}return null}function R(E,j,z,_){var ee=j!==null?j.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return ee!==null?null:f(E,j,""+z,_);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case Q:return z.key===ee?y(E,j,z,_):null;case S:return z.key===ee?T(E,j,z,_):null;case Ne:return z=tl(z),R(E,j,z,_)}if(ke(z)||$(z))return ee!==null?null:O(E,j,z,_,null);if(typeof z.then=="function")return R(E,j,Hi(z),_);if(z.$$typeof===H)return R(E,j,_i(E,z),_);Li(E,z)}return null}function M(E,j,z,_,ee){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return E=E.get(z)||null,f(j,E,""+_,ee);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Q:return E=E.get(_.key===null?z:_.key)||null,y(j,E,_,ee);case S:return E=E.get(_.key===null?z:_.key)||null,T(j,E,_,ee);case Ne:return _=tl(_),M(E,j,z,_,ee)}if(ke(_)||$(_))return E=E.get(z)||null,O(j,E,_,ee,null);if(typeof _.then=="function")return M(E,j,z,Hi(_),ee);if(_.$$typeof===H)return M(E,j,z,_i(j,_),ee);Li(j,_)}return null}function J(E,j,z,_){for(var ee=null,ye=null,F=j,ue=j=0,he=null;F!==null&&ue<z.length;ue++){F.index>ue?(he=F,F=null):he=F.sibling;var je=R(E,F,z[ue],_);if(je===null){F===null&&(F=he);break}e&&F&&je.alternate===null&&t(E,F),j=s(je,j,ue),ye===null?ee=je:ye.sibling=je,ye=je,F=he}if(ue===z.length)return a(E,F),ge&&la(E,ue),ee;if(F===null){for(;ue<z.length;ue++)F=D(E,z[ue],_),F!==null&&(j=s(F,j,ue),ye===null?ee=F:ye.sibling=F,ye=F);return ge&&la(E,ue),ee}for(F=n(F);ue<z.length;ue++)he=M(F,E,ue,z[ue],_),he!==null&&(e&&he.alternate!==null&&F.delete(he.key===null?ue:he.key),j=s(he,j,ue),ye===null?ee=he:ye.sibling=he,ye=he);return e&&F.forEach(function(Ga){return t(E,Ga)}),ge&&la(E,ue),ee}function te(E,j,z,_){if(z==null)throw Error(u(151));for(var ee=null,ye=null,F=j,ue=j=0,he=null,je=z.next();F!==null&&!je.done;ue++,je=z.next()){F.index>ue?(he=F,F=null):he=F.sibling;var Ga=R(E,F,je.value,_);if(Ga===null){F===null&&(F=he);break}e&&F&&Ga.alternate===null&&t(E,F),j=s(Ga,j,ue),ye===null?ee=Ga:ye.sibling=Ga,ye=Ga,F=he}if(je.done)return a(E,F),ge&&la(E,ue),ee;if(F===null){for(;!je.done;ue++,je=z.next())je=D(E,je.value,_),je!==null&&(j=s(je,j,ue),ye===null?ee=je:ye.sibling=je,ye=je);return ge&&la(E,ue),ee}for(F=n(F);!je.done;ue++,je=z.next())je=M(F,E,ue,je.value,_),je!==null&&(e&&je.alternate!==null&&F.delete(je.key===null?ue:je.key),j=s(je,j,ue),ye===null?ee=je:ye.sibling=je,ye=je);return e&&F.forEach(function(Xg){return t(E,Xg)}),ge&&la(E,ue),ee}function Re(E,j,z,_){if(typeof z=="object"&&z!==null&&z.type===G&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case Q:e:{for(var ee=z.key;j!==null;){if(j.key===ee){if(ee=z.type,ee===G){if(j.tag===7){a(E,j.sibling),_=i(j,z.props.children),_.return=E,E=_;break e}}else if(j.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Ne&&tl(ee)===j.type){a(E,j.sibling),_=i(j,z.props),kn(_,z),_.return=E,E=_;break e}a(E,j);break}else t(E,j);j=j.sibling}z.type===G?(_=Wa(z.props.children,E.mode,_,z.key),_.return=E,E=_):(_=Ci(z.type,z.key,z.props,null,E.mode,_),kn(_,z),_.return=E,E=_)}return d(E);case S:e:{for(ee=z.key;j!==null;){if(j.key===ee)if(j.tag===4&&j.stateNode.containerInfo===z.containerInfo&&j.stateNode.implementation===z.implementation){a(E,j.sibling),_=i(j,z.children||[]),_.return=E,E=_;break e}else{a(E,j);break}else t(E,j);j=j.sibling}_=_r(z,E.mode,_),_.return=E,E=_}return d(E);case Ne:return z=tl(z),Re(E,j,z,_)}if(ke(z))return J(E,j,z,_);if($(z)){if(ee=$(z),typeof ee!="function")throw Error(u(150));return z=ee.call(z),te(E,j,z,_)}if(typeof z.then=="function")return Re(E,j,Hi(z),_);if(z.$$typeof===H)return Re(E,j,_i(E,z),_);Li(E,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,j!==null&&j.tag===6?(a(E,j.sibling),_=i(j,z),_.return=E,E=_):(a(E,j),_=Or(z,E.mode,_),_.return=E,E=_),d(E)):a(E,j)}return function(E,j,z,_){try{Nn=0;var ee=Re(E,j,z,_);return Ol=null,ee}catch(F){if(F===Ml||F===Ui)throw F;var ye=bt(29,F,null,E.mode);return ye.lanes=_,ye.return=E,ye}}}var ll=bd(!0),vd=bd(!1),Sa=!1;function Kr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ea(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Aa(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(we&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=Ri(e),ad(e,null,a),t}return Ti(e,n,t,a),Ri(e)}function wn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,uu(e,a)}}function Jr(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var d={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?i=s=d:s=s.next=d,a=a.next}while(a!==null);s===null?i=s=t:s=s.next=t}else i=s=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var $r=!1;function Sn(){if($r){var e=Cl;if(e!==null)throw e}}function En(e,t,a,n){$r=!1;var i=e.updateQueue;Sa=!1;var s=i.firstBaseUpdate,d=i.lastBaseUpdate,f=i.shared.pending;if(f!==null){i.shared.pending=null;var y=f,T=y.next;y.next=null,d===null?s=T:d.next=T,d=y;var O=e.alternate;O!==null&&(O=O.updateQueue,f=O.lastBaseUpdate,f!==d&&(f===null?O.firstBaseUpdate=T:f.next=T,O.lastBaseUpdate=y))}if(s!==null){var D=i.baseState;d=0,O=T=y=null,f=s;do{var R=f.lane&-536870913,M=R!==f.lane;if(M?(me&R)===R:(n&R)===R){R!==0&&R===Rl&&($r=!0),O!==null&&(O=O.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var J=e,te=f;R=t;var Re=a;switch(te.tag){case 1:if(J=te.payload,typeof J=="function"){D=J.call(Re,D,R);break e}D=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=te.payload,R=typeof J=="function"?J.call(Re,D,R):J,R==null)break e;D=k({},D,R);break e;case 2:Sa=!0}}R=f.callback,R!==null&&(e.flags|=64,M&&(e.flags|=8192),M=i.callbacks,M===null?i.callbacks=[R]:M.push(R))}else M={lane:R,tag:f.tag,payload:f.payload,callback:f.callback,next:null},O===null?(T=O=M,y=D):O=O.next=M,d|=R;if(f=f.next,f===null){if(f=i.shared.pending,f===null)break;M=f,f=M.next,M.next=null,i.lastBaseUpdate=M,i.shared.pending=null}}while(!0);O===null&&(y=D),i.baseState=y,i.firstBaseUpdate=T,i.lastBaseUpdate=O,s===null&&(i.shared.lanes=0),Ma|=d,e.lanes=d,e.memoizedState=D}}function yd(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function jd(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)yd(a[e],t)}var _l=N(null),Yi=N(0);function Nd(e,t){e=ma,L(Yi,e),L(_l,t),ma=e|t.baseLanes}function Wr(){L(Yi,ma),L(_l,_l.current)}function Fr(){ma=Yi.current,A(_l),A(Yi)}var vt=N(null),Ct=null;function za(e){var t=e.alternate;L(Le,Le.current&1),L(vt,e),Ct===null&&(t===null||_l.current!==null||t.memoizedState!==null)&&(Ct=e)}function Pr(e){L(Le,Le.current),L(vt,e),Ct===null&&(Ct=e)}function kd(e){e.tag===22?(L(Le,Le.current),L(vt,e),Ct===null&&(Ct=e)):Ta()}function Ta(){L(Le,Le.current),L(vt,vt.current)}function yt(e){A(vt),Ct===e&&(Ct=null),A(Le)}var Le=N(0);function qi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||no(a)||io(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var sa=0,ce=null,ze=null,Ve=null,Gi=!1,Dl=!1,nl=!1,Vi=0,An=0,Ul=null,Bx=0;function Be(){throw Error(u(321))}function Ir(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!gt(e[a],t[a]))return!1;return!0}function ec(e,t,a,n,i,s){return sa=s,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,C.H=e===null||e.memoizedState===null?sp:hc,nl=!1,s=a(n,i),nl=!1,Dl&&(s=Sd(t,a,n,i)),wd(e),s}function wd(e){C.H=Rn;var t=ze!==null&&ze.next!==null;if(sa=0,Ve=ze=ce=null,Gi=!1,An=0,Ul=null,t)throw Error(u(300));e===null||Qe||(e=e.dependencies,e!==null&&Oi(e)&&(Qe=!0))}function Sd(e,t,a,n){ce=e;var i=0;do{if(Dl&&(Ul=null),An=0,Dl=!1,25<=i)throw Error(u(301));if(i+=1,Ve=ze=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}C.H=rp,s=t(a,n)}while(Dl);return s}function Hx(){var e=C.H,t=e.useState()[0];return t=typeof t.then=="function"?zn(t):t,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(ce.flags|=1024),t}function tc(){var e=Vi!==0;return Vi=0,e}function ac(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function lc(e){if(Gi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Gi=!1}sa=0,Ve=ze=ce=null,Dl=!1,An=Vi=0,Ul=null}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?ce.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function Ye(){if(ze===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=Ve===null?ce.memoizedState:Ve.next;if(t!==null)Ve=t,ze=e;else{if(e===null)throw ce.alternate===null?Error(u(467)):Error(u(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Ve===null?ce.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function Qi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function zn(e){var t=An;return An+=1,Ul===null&&(Ul=[]),e=hd(Ul,e,t),t=ce,(Ve===null?t.memoizedState:Ve.next)===null&&(t=t.alternate,C.H=t===null||t.memoizedState===null?sp:hc),e}function Zi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return zn(e);if(e.$$typeof===H)return Ie(e)}throw Error(u(438,String(e)))}function nc(e){var t=null,a=ce.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=ce.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Qi(),ce.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=ae;return t.index++,a}function ra(e,t){return typeof t=="function"?t(e):t}function Ki(e){var t=Ye();return ic(t,ze,e)}function ic(e,t,a){var n=e.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=a;var i=e.baseQueue,s=n.pending;if(s!==null){if(i!==null){var d=i.next;i.next=s.next,s.next=d}t.baseQueue=i=s,n.pending=null}if(s=e.baseState,i===null)e.memoizedState=s;else{t=i.next;var f=d=null,y=null,T=t,O=!1;do{var D=T.lane&-536870913;if(D!==T.lane?(me&D)===D:(sa&D)===D){var R=T.revertLane;if(R===0)y!==null&&(y=y.next={lane:0,revertLane:0,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),D===Rl&&(O=!0);else if((sa&R)===R){T=T.next,R===Rl&&(O=!0);continue}else D={lane:0,revertLane:T.revertLane,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},y===null?(f=y=D,d=s):y=y.next=D,ce.lanes|=R,Ma|=R;D=T.action,nl&&a(s,D),s=T.hasEagerState?T.eagerState:a(s,D)}else R={lane:D,revertLane:T.revertLane,gesture:T.gesture,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},y===null?(f=y=R,d=s):y=y.next=R,ce.lanes|=D,Ma|=D;T=T.next}while(T!==null&&T!==t);if(y===null?d=s:y.next=f,!gt(s,e.memoizedState)&&(Qe=!0,O&&(a=Cl,a!==null)))throw a;e.memoizedState=s,e.baseState=d,e.baseQueue=y,n.lastRenderedState=s}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function sc(e){var t=Ye(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,s=t.memoizedState;if(i!==null){a.pending=null;var d=i=i.next;do s=e(s,d.action),d=d.next;while(d!==i);gt(s,t.memoizedState)||(Qe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),a.lastRenderedState=s}return[s,n]}function Ed(e,t,a){var n=ce,i=Ye(),s=ge;if(s){if(a===void 0)throw Error(u(407));a=a()}else a=t();var d=!gt((ze||i).memoizedState,a);if(d&&(i.memoizedState=a,Qe=!0),i=i.queue,oc(Td.bind(null,n,i,e),[e]),i.getSnapshot!==t||d||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,Bl(9,{destroy:void 0},zd.bind(null,n,i,a,t),null),Ce===null)throw Error(u(349));s||(sa&127)!==0||Ad(n,t,a)}return a}function Ad(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ce.updateQueue,t===null?(t=Qi(),ce.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function zd(e,t,a,n){t.value=a,t.getSnapshot=n,Rd(t)&&Cd(e)}function Td(e,t,a){return a(function(){Rd(t)&&Cd(e)})}function Rd(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!gt(e,a)}catch{return!0}}function Cd(e){var t=$a(e,2);t!==null&&ft(t,e,2)}function rc(e){var t=nt();if(typeof e=="function"){var a=e;if(e=a(),nl){ba(!0);try{a()}finally{ba(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:e},t}function Md(e,t,a,n){return e.baseState=a,ic(e,ze,typeof n=="function"?n:ra)}function Lx(e,t,a,n,i){if($i(e))throw Error(u(485));if(e=t.action,e!==null){var s={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){s.listeners.push(d)}};C.T!==null?a(!0):s.isTransition=!1,n(s),a=t.pending,a===null?(s.next=t.pending=s,Od(t,s)):(s.next=a.next,t.pending=a.next=s)}}function Od(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var s=C.T,d={};C.T=d;try{var f=a(i,n),y=C.S;y!==null&&y(d,f),_d(e,t,f)}catch(T){cc(e,t,T)}finally{s!==null&&d.types!==null&&(s.types=d.types),C.T=s}}else try{s=a(i,n),_d(e,t,s)}catch(T){cc(e,t,T)}}function _d(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Dd(e,t,n)},function(n){return cc(e,t,n)}):Dd(e,t,a)}function Dd(e,t,a){t.status="fulfilled",t.value=a,Ud(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Od(e,a)))}function cc(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Ud(t),t=t.next;while(t!==n)}e.action=null}function Ud(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Bd(e,t){return t}function Hd(e,t){if(ge){var a=Ce.formState;if(a!==null){e:{var n=ce;if(ge){if(Oe){t:{for(var i=Oe,s=Rt;i.nodeType!==8;){if(!s){i=null;break t}if(i=Mt(i.nextSibling),i===null){i=null;break t}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){Oe=Mt(i.nextSibling),n=i.data==="F!";break e}}ka(n)}n=!1}n&&(t=a[0])}}return a=nt(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bd,lastRenderedState:t},a.queue=n,a=lp.bind(null,ce,n),n.dispatch=a,n=rc(!1),s=mc.bind(null,ce,!1,n.queue),n=nt(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=Lx.bind(null,ce,i,s,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function Ld(e){var t=Ye();return Yd(t,ze,e)}function Yd(e,t,a){if(t=ic(e,t,Bd)[0],e=Ki(ra)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=zn(t)}catch(d){throw d===Ml?Ui:d}else n=t;t=Ye();var i=t.queue,s=i.dispatch;return a!==t.memoizedState&&(ce.flags|=2048,Bl(9,{destroy:void 0},Yx.bind(null,i,a),null)),[n,s,e]}function Yx(e,t){e.action=t}function qd(e){var t=Ye(),a=ze;if(a!==null)return Yd(t,a,e);Ye(),t=t.memoizedState,a=Ye();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function Bl(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=ce.updateQueue,t===null&&(t=Qi(),ce.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Gd(){return Ye().memoizedState}function Xi(e,t,a,n){var i=nt();ce.flags|=e,i.memoizedState=Bl(1|t,{destroy:void 0},a,n===void 0?null:n)}function Ji(e,t,a,n){var i=Ye();n=n===void 0?null:n;var s=i.memoizedState.inst;ze!==null&&n!==null&&Ir(n,ze.memoizedState.deps)?i.memoizedState=Bl(t,s,a,n):(ce.flags|=e,i.memoizedState=Bl(1|t,s,a,n))}function Vd(e,t){Xi(8390656,8,e,t)}function oc(e,t){Ji(2048,8,e,t)}function qx(e){ce.flags|=4;var t=ce.updateQueue;if(t===null)t=Qi(),ce.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Qd(e){var t=Ye().memoizedState;return qx({ref:t,nextImpl:e}),function(){if((we&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function Zd(e,t){return Ji(4,2,e,t)}function Kd(e,t){return Ji(4,4,e,t)}function Xd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Jd(e,t,a){a=a!=null?a.concat([e]):null,Ji(4,4,Xd.bind(null,t,e),a)}function uc(){}function $d(e,t){var a=Ye();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Ir(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Wd(e,t){var a=Ye();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Ir(t,n[1]))return n[0];if(n=e(),nl){ba(!0);try{e()}finally{ba(!1)}}return a.memoizedState=[n,t],n}function dc(e,t,a){return a===void 0||(sa&1073741824)!==0&&(me&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Fp(),ce.lanes|=e,Ma|=e,a)}function Fd(e,t,a,n){return gt(a,t)?a:_l.current!==null?(e=dc(e,a,n),gt(e,t)||(Qe=!0),e):(sa&42)===0||(sa&1073741824)!==0&&(me&261930)===0?(Qe=!0,e.memoizedState=a):(e=Fp(),ce.lanes|=e,Ma|=e,t)}function Pd(e,t,a,n,i){var s=Z.p;Z.p=s!==0&&8>s?s:8;var d=C.T,f={};C.T=f,mc(e,!1,t,a);try{var y=i(),T=C.S;if(T!==null&&T(f,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var O=Ux(y,n);Tn(e,t,O,kt(e))}else Tn(e,t,n,kt(e))}catch(D){Tn(e,t,{then:function(){},status:"rejected",reason:D},kt())}finally{Z.p=s,d!==null&&f.types!==null&&(d.types=f.types),C.T=d}}function Gx(){}function pc(e,t,a,n){if(e.tag!==5)throw Error(u(476));var i=Id(e).queue;Pd(e,i,t,I,a===null?Gx:function(){return ep(e),a(n)})}function Id(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:I},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ep(e){var t=Id(e);t.next===null&&(t=e.alternate.memoizedState),Tn(e,t.next.queue,{},kt())}function fc(){return Ie(Kn)}function tp(){return Ye().memoizedState}function ap(){return Ye().memoizedState}function Vx(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=kt();e=Ea(a);var n=Aa(t,e,a);n!==null&&(ft(n,t,a),wn(n,t,a)),t={cache:Gr()},e.payload=t;return}t=t.return}}function Qx(e,t,a){var n=kt();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},$i(e)?np(t,a):(a=Cr(e,t,a,n),a!==null&&(ft(a,e,n),ip(a,t,n)))}function lp(e,t,a){var n=kt();Tn(e,t,a,n)}function Tn(e,t,a,n){var i={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if($i(e))np(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var d=t.lastRenderedState,f=s(d,a);if(i.hasEagerState=!0,i.eagerState=f,gt(f,d))return Ti(e,t,i,0),Ce===null&&zi(),!1}catch{}if(a=Cr(e,t,i,n),a!==null)return ft(a,e,n),ip(a,t,n),!0}return!1}function mc(e,t,a,n){if(n={lane:2,revertLane:Kc(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},$i(e)){if(t)throw Error(u(479))}else t=Cr(e,a,n,2),t!==null&&ft(t,e,2)}function $i(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function np(e,t){Dl=Gi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function ip(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,uu(e,a)}}var Rn={readContext:Ie,use:Zi,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useLayoutEffect:Be,useInsertionEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useSyncExternalStore:Be,useId:Be,useHostTransitionStatus:Be,useFormState:Be,useActionState:Be,useOptimistic:Be,useMemoCache:Be,useCacheRefresh:Be};Rn.useEffectEvent=Be;var sp={readContext:Ie,use:Zi,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:Vd,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Xi(4194308,4,Xd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Xi(4194308,4,e,t)},useInsertionEffect:function(e,t){Xi(4,2,e,t)},useMemo:function(e,t){var a=nt();t=t===void 0?null:t;var n=e();if(nl){ba(!0);try{e()}finally{ba(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=nt();if(a!==void 0){var i=a(t);if(nl){ba(!0);try{a(t)}finally{ba(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=Qx.bind(null,ce,e),[n.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:function(e){e=rc(e);var t=e.queue,a=lp.bind(null,ce,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:uc,useDeferredValue:function(e,t){var a=nt();return dc(a,e,t)},useTransition:function(){var e=rc(!1);return e=Pd.bind(null,ce,e.queue,!0,!1),nt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=ce,i=nt();if(ge){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),Ce===null)throw Error(u(349));(me&127)!==0||Ad(n,t,a)}i.memoizedState=a;var s={value:a,getSnapshot:t};return i.queue=s,Vd(Td.bind(null,n,s,e),[e]),n.flags|=2048,Bl(9,{destroy:void 0},zd.bind(null,n,s,a,t),null),a},useId:function(){var e=nt(),t=Ce.identifierPrefix;if(ge){var a=Vt,n=Gt;a=(n&~(1<<32-xt(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Vi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Bx++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:fc,useFormState:Hd,useActionState:Hd,useOptimistic:function(e){var t=nt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=mc.bind(null,ce,!0,a),a.dispatch=t,[e,t]},useMemoCache:nc,useCacheRefresh:function(){return nt().memoizedState=Vx.bind(null,ce)},useEffectEvent:function(e){var t=nt(),a={impl:e};return t.memoizedState=a,function(){if((we&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},hc={readContext:Ie,use:Zi,useCallback:$d,useContext:Ie,useEffect:oc,useImperativeHandle:Jd,useInsertionEffect:Zd,useLayoutEffect:Kd,useMemo:Wd,useReducer:Ki,useRef:Gd,useState:function(){return Ki(ra)},useDebugValue:uc,useDeferredValue:function(e,t){var a=Ye();return Fd(a,ze.memoizedState,e,t)},useTransition:function(){var e=Ki(ra)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:zn(e),t]},useSyncExternalStore:Ed,useId:tp,useHostTransitionStatus:fc,useFormState:Ld,useActionState:Ld,useOptimistic:function(e,t){var a=Ye();return Md(a,ze,e,t)},useMemoCache:nc,useCacheRefresh:ap};hc.useEffectEvent=Qd;var rp={readContext:Ie,use:Zi,useCallback:$d,useContext:Ie,useEffect:oc,useImperativeHandle:Jd,useInsertionEffect:Zd,useLayoutEffect:Kd,useMemo:Wd,useReducer:sc,useRef:Gd,useState:function(){return sc(ra)},useDebugValue:uc,useDeferredValue:function(e,t){var a=Ye();return ze===null?dc(a,e,t):Fd(a,ze.memoizedState,e,t)},useTransition:function(){var e=sc(ra)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:zn(e),t]},useSyncExternalStore:Ed,useId:tp,useHostTransitionStatus:fc,useFormState:qd,useActionState:qd,useOptimistic:function(e,t){var a=Ye();return ze!==null?Md(a,ze,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:nc,useCacheRefresh:ap};rp.useEffectEvent=Qd;function xc(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:k({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var gc={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=kt(),i=Ea(n);i.payload=t,a!=null&&(i.callback=a),t=Aa(e,i,n),t!==null&&(ft(t,e,n),wn(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=kt(),i=Ea(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=Aa(e,i,n),t!==null&&(ft(t,e,n),wn(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=kt(),n=Ea(a);n.tag=2,t!=null&&(n.callback=t),t=Aa(e,n,a),t!==null&&(ft(t,e,a),wn(t,e,a))}};function cp(e,t,a,n,i,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,d):t.prototype&&t.prototype.isPureReactComponent?!xn(a,n)||!xn(i,s):!0}function op(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&gc.enqueueReplaceState(t,t.state,null)}function il(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=k({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function up(e){Ai(e)}function dp(e){console.error(e)}function pp(e){Ai(e)}function Wi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function fp(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function bc(e,t,a){return a=Ea(a),a.tag=3,a.payload={element:null},a.callback=function(){Wi(e,t)},a}function mp(e){return e=Ea(e),e.tag=3,e}function hp(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var s=n.value;e.payload=function(){return i(s)},e.callback=function(){fp(t,a,n)}}var d=a.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){fp(t,a,n),typeof i!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var f=n.stack;this.componentDidCatch(n.value,{componentStack:f!==null?f:""})})}function Zx(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Tl(t,a,i,!0),a=vt.current,a!==null){switch(a.tag){case 31:case 13:return Ct===null?cs():a.alternate===null&&He===0&&(He=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Bi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Vc(e,n,i)),!1;case 22:return a.flags|=65536,n===Bi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Vc(e,n,i)),!1}throw Error(u(435,a.tag))}return Vc(e,n,i),cs(),!1}if(ge)return t=vt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==Br&&(e=Error(u(422),{cause:n}),vn(At(e,a)))):(n!==Br&&(t=Error(u(423),{cause:n}),vn(At(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=At(n,a),i=bc(e.stateNode,n,i),Jr(e,i),He!==4&&(He=2)),!1;var s=Error(u(520),{cause:n});if(s=At(s,a),Hn===null?Hn=[s]:Hn.push(s),He!==4&&(He=2),t===null)return!0;n=At(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=bc(a.stateNode,n,e),Jr(a,e),!1;case 1:if(t=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Oa===null||!Oa.has(s))))return a.flags|=65536,i&=-i,a.lanes|=i,i=mp(i),hp(i,e,a,n),Jr(a,i),!1}a=a.return}while(a!==null);return!1}var vc=Error(u(461)),Qe=!1;function et(e,t,a,n){t.child=e===null?vd(t,null,a,n):ll(t,e.child,a,n)}function xp(e,t,a,n,i){a=a.render;var s=t.ref;if("ref"in n){var d={};for(var f in n)f!=="ref"&&(d[f]=n[f])}else d=n;return Ia(t),n=ec(e,t,a,d,s,i),f=tc(),e!==null&&!Qe?(ac(e,t,i),ca(e,t,i)):(ge&&f&&Dr(t),t.flags|=1,et(e,t,n,i),t.child)}function gp(e,t,a,n,i){if(e===null){var s=a.type;return typeof s=="function"&&!Mr(s)&&s.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=s,bp(e,t,s,n,i)):(e=Ci(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Ac(e,i)){var d=s.memoizedProps;if(a=a.compare,a=a!==null?a:xn,a(d,n)&&e.ref===t.ref)return ca(e,t,i)}return t.flags|=1,e=aa(s,n),e.ref=t.ref,e.return=t,t.child=e}function bp(e,t,a,n,i){if(e!==null){var s=e.memoizedProps;if(xn(s,n)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=n=s,Ac(e,i))(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,ca(e,t,i)}return yc(e,t,a,n,i)}function vp(e,t,a,n){var i=n.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~s}else n=0,t.child=null;return yp(e,t,s,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Di(t,s!==null?s.cachePool:null),s!==null?Nd(t,s):Wr(),kd(t);else return n=t.lanes=536870912,yp(e,t,s!==null?s.baseLanes|a:a,a,n)}else s!==null?(Di(t,s.cachePool),Nd(t,s),Ta(),t.memoizedState=null):(e!==null&&Di(t,null),Wr(),Ta());return et(e,t,i,a),t.child}function Cn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function yp(e,t,a,n,i){var s=Qr();return s=s===null?null:{parent:Ge._currentValue,pool:s},t.memoizedState={baseLanes:a,cachePool:s},e!==null&&Di(t,null),Wr(),kd(t),e!==null&&Tl(e,t,n,!0),t.childLanes=i,null}function Fi(e,t){return t=Ii({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function jp(e,t,a){return ll(t,e.child,null,a),e=Fi(t,t.pendingProps),e.flags|=2,yt(t),t.memoizedState=null,e}function Kx(e,t,a){var n=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ge){if(n.mode==="hidden")return e=Fi(t,n),t.lanes=536870912,Cn(null,e);if(Pr(t),(e=Oe)?(e=_f(e,Rt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ja!==null?{id:Gt,overflow:Vt}:null,retryLane:536870912,hydrationErrors:null},a=nd(e),a.return=t,t.child=a,Pe=t,Oe=null)):e=null,e===null)throw ka(t);return t.lanes=536870912,null}return Fi(t,n)}var s=e.memoizedState;if(s!==null){var d=s.dehydrated;if(Pr(t),i)if(t.flags&256)t.flags&=-257,t=jp(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(Qe||Tl(e,t,a,!1),i=(a&e.childLanes)!==0,Qe||i){if(n=Ce,n!==null&&(d=du(n,a),d!==0&&d!==s.retryLane))throw s.retryLane=d,$a(e,d),ft(n,e,d),vc;cs(),t=jp(e,t,a)}else e=s.treeContext,Oe=Mt(d.nextSibling),Pe=t,ge=!0,Na=null,Rt=!1,e!==null&&rd(t,e),t=Fi(t,n),t.flags|=4096;return t}return e=aa(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Pi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function yc(e,t,a,n,i){return Ia(t),a=ec(e,t,a,n,void 0,i),n=tc(),e!==null&&!Qe?(ac(e,t,i),ca(e,t,i)):(ge&&n&&Dr(t),t.flags|=1,et(e,t,a,i),t.child)}function Np(e,t,a,n,i,s){return Ia(t),t.updateQueue=null,a=Sd(t,n,a,i),wd(e),n=tc(),e!==null&&!Qe?(ac(e,t,s),ca(e,t,s)):(ge&&n&&Dr(t),t.flags|=1,et(e,t,a,s),t.child)}function kp(e,t,a,n,i){if(Ia(t),t.stateNode===null){var s=Sl,d=a.contextType;typeof d=="object"&&d!==null&&(s=Ie(d)),s=new a(n,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=gc,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=n,s.state=t.memoizedState,s.refs={},Kr(t),d=a.contextType,s.context=typeof d=="object"&&d!==null?Ie(d):Sl,s.state=t.memoizedState,d=a.getDerivedStateFromProps,typeof d=="function"&&(xc(t,a,d,n),s.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(d=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),d!==s.state&&gc.enqueueReplaceState(s,s.state,null),En(t,n,s,i),Sn(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){s=t.stateNode;var f=t.memoizedProps,y=il(a,f);s.props=y;var T=s.context,O=a.contextType;d=Sl,typeof O=="object"&&O!==null&&(d=Ie(O));var D=a.getDerivedStateFromProps;O=typeof D=="function"||typeof s.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,O||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(f||T!==d)&&op(t,s,n,d),Sa=!1;var R=t.memoizedState;s.state=R,En(t,n,s,i),Sn(),T=t.memoizedState,f||R!==T||Sa?(typeof D=="function"&&(xc(t,a,D,n),T=t.memoizedState),(y=Sa||cp(t,a,y,n,R,T,d))?(O||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=T),s.props=n,s.state=T,s.context=d,n=y):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,Xr(e,t),d=t.memoizedProps,O=il(a,d),s.props=O,D=t.pendingProps,R=s.context,T=a.contextType,y=Sl,typeof T=="object"&&T!==null&&(y=Ie(T)),f=a.getDerivedStateFromProps,(T=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==D||R!==y)&&op(t,s,n,y),Sa=!1,R=t.memoizedState,s.state=R,En(t,n,s,i),Sn();var M=t.memoizedState;d!==D||R!==M||Sa||e!==null&&e.dependencies!==null&&Oi(e.dependencies)?(typeof f=="function"&&(xc(t,a,f,n),M=t.memoizedState),(O=Sa||cp(t,a,O,n,R,M,y)||e!==null&&e.dependencies!==null&&Oi(e.dependencies))?(T||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,M,y),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,M,y)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=M),s.props=n,s.state=M,s.context=y,n=O):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),n=!1)}return s=n,Pi(e,t),n=(t.flags&128)!==0,s||n?(s=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&n?(t.child=ll(t,e.child,null,i),t.child=ll(t,null,a,i)):et(e,t,a,i),t.memoizedState=s.state,e=t.child):e=ca(e,t,i),e}function wp(e,t,a,n){return Fa(),t.flags|=256,et(e,t,a,n),t.child}var jc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nc(e){return{baseLanes:e,cachePool:fd()}}function kc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Nt),e}function Sp(e,t,a){var n=t.pendingProps,i=!1,s=(t.flags&128)!==0,d;if((d=s)||(d=e!==null&&e.memoizedState===null?!1:(Le.current&2)!==0),d&&(i=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(ge){if(i?za(t):Ta(),(e=Oe)?(e=_f(e,Rt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ja!==null?{id:Gt,overflow:Vt}:null,retryLane:536870912,hydrationErrors:null},a=nd(e),a.return=t,t.child=a,Pe=t,Oe=null)):e=null,e===null)throw ka(t);return io(e)?t.lanes=32:t.lanes=536870912,null}var f=n.children;return n=n.fallback,i?(Ta(),i=t.mode,f=Ii({mode:"hidden",children:f},i),n=Wa(n,i,a,null),f.return=t,n.return=t,f.sibling=n,t.child=f,n=t.child,n.memoizedState=Nc(a),n.childLanes=kc(e,d,a),t.memoizedState=jc,Cn(null,n)):(za(t),wc(t,f))}var y=e.memoizedState;if(y!==null&&(f=y.dehydrated,f!==null)){if(s)t.flags&256?(za(t),t.flags&=-257,t=Sc(e,t,a)):t.memoizedState!==null?(Ta(),t.child=e.child,t.flags|=128,t=null):(Ta(),f=n.fallback,i=t.mode,n=Ii({mode:"visible",children:n.children},i),f=Wa(f,i,a,null),f.flags|=2,n.return=t,f.return=t,n.sibling=f,t.child=n,ll(t,e.child,null,a),n=t.child,n.memoizedState=Nc(a),n.childLanes=kc(e,d,a),t.memoizedState=jc,t=Cn(null,n));else if(za(t),io(f)){if(d=f.nextSibling&&f.nextSibling.dataset,d)var T=d.dgst;d=T,n=Error(u(419)),n.stack="",n.digest=d,vn({value:n,source:null,stack:null}),t=Sc(e,t,a)}else if(Qe||Tl(e,t,a,!1),d=(a&e.childLanes)!==0,Qe||d){if(d=Ce,d!==null&&(n=du(d,a),n!==0&&n!==y.retryLane))throw y.retryLane=n,$a(e,n),ft(d,e,n),vc;no(f)||cs(),t=Sc(e,t,a)}else no(f)?(t.flags|=192,t.child=e.child,t=null):(e=y.treeContext,Oe=Mt(f.nextSibling),Pe=t,ge=!0,Na=null,Rt=!1,e!==null&&rd(t,e),t=wc(t,n.children),t.flags|=4096);return t}return i?(Ta(),f=n.fallback,i=t.mode,y=e.child,T=y.sibling,n=aa(y,{mode:"hidden",children:n.children}),n.subtreeFlags=y.subtreeFlags&65011712,T!==null?f=aa(T,f):(f=Wa(f,i,a,null),f.flags|=2),f.return=t,n.return=t,n.sibling=f,t.child=n,Cn(null,n),n=t.child,f=e.child.memoizedState,f===null?f=Nc(a):(i=f.cachePool,i!==null?(y=Ge._currentValue,i=i.parent!==y?{parent:y,pool:y}:i):i=fd(),f={baseLanes:f.baseLanes|a,cachePool:i}),n.memoizedState=f,n.childLanes=kc(e,d,a),t.memoizedState=jc,Cn(e.child,n)):(za(t),a=e.child,e=a.sibling,a=aa(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=a,t.memoizedState=null,a)}function wc(e,t){return t=Ii({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ii(e,t){return e=bt(22,e,null,t),e.lanes=0,e}function Sc(e,t,a){return ll(t,e.child,null,a),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ep(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Yr(e.return,t,a)}function Ec(e,t,a,n,i,s){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i,treeForkCount:s}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=n,d.tail=a,d.tailMode=i,d.treeForkCount=s)}function Ap(e,t,a){var n=t.pendingProps,i=n.revealOrder,s=n.tail;n=n.children;var d=Le.current,f=(d&2)!==0;if(f?(d=d&1|2,t.flags|=128):d&=1,L(Le,d),et(e,t,n,a),n=ge?bn:0,!f&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ep(e,a,t);else if(e.tag===19)Ep(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&qi(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),Ec(t,!1,i,a,s,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&qi(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}Ec(t,!0,a,null,s,n);break;case"together":Ec(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function ca(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ma|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Tl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=aa(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=aa(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ac(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Oi(e)))}function Xx(e,t,a){switch(t.tag){case 3:We(t,t.stateNode.containerInfo),wa(t,Ge,e.memoizedState.cache),Fa();break;case 27:case 5:an(t);break;case 4:We(t,t.stateNode.containerInfo);break;case 10:wa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Pr(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(za(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Sp(e,t,a):(za(t),e=ca(e,t,a),e!==null?e.sibling:null);za(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Tl(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return Ap(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),L(Le,Le.current),n)break;return null;case 22:return t.lanes=0,vp(e,t,a,t.pendingProps);case 24:wa(t,Ge,e.memoizedState.cache)}return ca(e,t,a)}function zp(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qe=!0;else{if(!Ac(e,a)&&(t.flags&128)===0)return Qe=!1,Xx(e,t,a);Qe=(e.flags&131072)!==0}else Qe=!1,ge&&(t.flags&1048576)!==0&&sd(t,bn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=tl(t.elementType),t.type=e,typeof e=="function")Mr(e)?(n=il(e,n),t.tag=1,t=kp(null,t,e,n,a)):(t.tag=0,t=yc(null,t,e,n,a));else{if(e!=null){var i=e.$$typeof;if(i===X){t.tag=11,t=xp(null,t,e,n,a);break e}else if(i===P){t.tag=14,t=gp(null,t,e,n,a);break e}}throw t=De(e)||e,Error(u(306,t,""))}}return t;case 0:return yc(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=il(n,t.pendingProps),kp(e,t,n,i,a);case 3:e:{if(We(t,t.stateNode.containerInfo),e===null)throw Error(u(387));n=t.pendingProps;var s=t.memoizedState;i=s.element,Xr(e,t),En(t,n,null,a);var d=t.memoizedState;if(n=d.cache,wa(t,Ge,n),n!==s.cache&&qr(t,[Ge],a,!0),Sn(),n=d.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=wp(e,t,n,a);break e}else if(n!==i){i=At(Error(u(424)),t),vn(i),t=wp(e,t,n,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Oe=Mt(e.firstChild),Pe=t,ge=!0,Na=null,Rt=!0,a=vd(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Fa(),n===i){t=ca(e,t,a);break e}et(e,t,n,a)}t=t.child}return t;case 26:return Pi(e,t),e===null?(a=Yf(t.type,null,t.pendingProps,null))?t.memoizedState=a:ge||(a=t.type,e=t.pendingProps,n=hs(oe.current).createElement(a),n[Fe]=t,n[rt]=e,tt(n,a,e),Je(n),t.stateNode=n):t.memoizedState=Yf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return an(t),e===null&&ge&&(n=t.stateNode=Bf(t.type,t.pendingProps,oe.current),Pe=t,Rt=!0,i=Oe,Ba(t.type)?(so=i,Oe=Mt(n.firstChild)):Oe=i),et(e,t,t.pendingProps.children,a),Pi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ge&&((i=n=Oe)&&(n=kg(n,t.type,t.pendingProps,Rt),n!==null?(t.stateNode=n,Pe=t,Oe=Mt(n.firstChild),Rt=!1,i=!0):i=!1),i||ka(t)),an(t),i=t.type,s=t.pendingProps,d=e!==null?e.memoizedProps:null,n=s.children,to(i,s)?n=null:d!==null&&to(i,d)&&(t.flags|=32),t.memoizedState!==null&&(i=ec(e,t,Hx,null,null,a),Kn._currentValue=i),Pi(e,t),et(e,t,n,a),t.child;case 6:return e===null&&ge&&((e=a=Oe)&&(a=wg(a,t.pendingProps,Rt),a!==null?(t.stateNode=a,Pe=t,Oe=null,e=!0):e=!1),e||ka(t)),null;case 13:return Sp(e,t,a);case 4:return We(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=ll(t,null,n,a):et(e,t,n,a),t.child;case 11:return xp(e,t,t.type,t.pendingProps,a);case 7:return et(e,t,t.pendingProps,a),t.child;case 8:return et(e,t,t.pendingProps.children,a),t.child;case 12:return et(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,wa(t,t.type,n.value),et(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,Ia(t),i=Ie(i),n=n(i),t.flags|=1,et(e,t,n,a),t.child;case 14:return gp(e,t,t.type,t.pendingProps,a);case 15:return bp(e,t,t.type,t.pendingProps,a);case 19:return Ap(e,t,a);case 31:return Kx(e,t,a);case 22:return vp(e,t,a,t.pendingProps);case 24:return Ia(t),n=Ie(Ge),e===null?(i=Qr(),i===null&&(i=Ce,s=Gr(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=a),i=s),t.memoizedState={parent:n,cache:i},Kr(t),wa(t,Ge,i)):((e.lanes&a)!==0&&(Xr(e,t),En(t,null,null,a),Sn()),i=e.memoizedState,s=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),wa(t,Ge,n)):(n=s.cache,wa(t,Ge,n),n!==i.cache&&qr(t,[Ge],a,!0))),et(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function oa(e){e.flags|=4}function zc(e,t,a,n,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(tf())e.flags|=8192;else throw al=Bi,Zr}else e.flags&=-16777217}function Tp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Zf(t))if(tf())e.flags|=8192;else throw al=Bi,Zr}function es(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?cu():536870912,e.lanes|=t,ql|=t)}function Mn(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Jx(e,t,a){var n=t.pendingProps;switch(Ur(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return _e(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ia(Ge),Me(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(zl(t)?oa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Hr())),_e(t),null;case 26:var i=t.type,s=t.memoizedState;return e===null?(oa(t),s!==null?(_e(t),Tp(t,s)):(_e(t),zc(t,i,null,n,a))):s?s!==e.memoizedState?(oa(t),_e(t),Tp(t,s)):(_e(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&oa(t),_e(t),zc(t,i,e,n,a)),null;case 27:if(di(t),a=oe.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&oa(t);else{if(!n){if(t.stateNode===null)throw Error(u(166));return _e(t),null}e=K.current,zl(t)?cd(t):(e=Bf(i,n,a),t.stateNode=e,oa(t))}return _e(t),null;case 5:if(di(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&oa(t);else{if(!n){if(t.stateNode===null)throw Error(u(166));return _e(t),null}if(s=K.current,zl(t))cd(t);else{var d=hs(oe.current);switch(s){case 1:s=d.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:s=d.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":s=d.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":s=d.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":s=d.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof n.is=="string"?d.createElement("select",{is:n.is}):d.createElement("select"),n.multiple?s.multiple=!0:n.size&&(s.size=n.size);break;default:s=typeof n.is=="string"?d.createElement(i,{is:n.is}):d.createElement(i)}}s[Fe]=t,s[rt]=n;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)s.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=s;e:switch(tt(s,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&oa(t)}}return _e(t),zc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&oa(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(u(166));if(e=oe.current,zl(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=Pe,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[Fe]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Ef(e.nodeValue,a)),e||ka(t,!0)}else e=hs(e).createTextNode(n),e[Fe]=t,t.stateNode=e}return _e(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=zl(t),a!==null){if(e===null){if(!n)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[Fe]=t}else Fa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_e(t),e=!1}else a=Hr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(yt(t),t):(yt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return _e(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=zl(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[Fe]=t}else Fa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_e(t),i=!1}else i=Hr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(yt(t),t):(yt(t),null)}return yt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==i&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),es(t,t.updateQueue),_e(t),null);case 4:return Me(),e===null&&Wc(t.stateNode.containerInfo),_e(t),null;case 10:return ia(t.type),_e(t),null;case 19:if(A(Le),n=t.memoizedState,n===null)return _e(t),null;if(i=(t.flags&128)!==0,s=n.rendering,s===null)if(i)Mn(n,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=qi(e),s!==null){for(t.flags|=128,Mn(n,!1),e=s.updateQueue,t.updateQueue=e,es(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)ld(a,e),a=a.sibling;return L(Le,Le.current&1|2),ge&&la(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&mt()>is&&(t.flags|=128,i=!0,Mn(n,!1),t.lanes=4194304)}else{if(!i)if(e=qi(s),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,es(t,e),Mn(n,!0),n.tail===null&&n.tailMode==="hidden"&&!s.alternate&&!ge)return _e(t),null}else 2*mt()-n.renderingStartTime>is&&a!==536870912&&(t.flags|=128,i=!0,Mn(n,!1),t.lanes=4194304);n.isBackwards?(s.sibling=t.child,t.child=s):(e=n.last,e!==null?e.sibling=s:t.child=s,n.last=s)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=mt(),e.sibling=null,a=Le.current,L(Le,i?a&1|2:a&1),ge&&la(t,n.treeForkCount),e):(_e(t),null);case 22:case 23:return yt(t),Fr(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),a=t.updateQueue,a!==null&&es(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&A(el),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ia(Ge),_e(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function $x(e,t){switch(Ur(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ia(Ge),Me(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return di(t),null;case 31:if(t.memoizedState!==null){if(yt(t),t.alternate===null)throw Error(u(340));Fa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(yt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Fa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(Le),null;case 4:return Me(),null;case 10:return ia(t.type),null;case 22:case 23:return yt(t),Fr(),e!==null&&A(el),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ia(Ge),null;case 25:return null;default:return null}}function Rp(e,t){switch(Ur(t),t.tag){case 3:ia(Ge),Me();break;case 26:case 27:case 5:di(t);break;case 4:Me();break;case 31:t.memoizedState!==null&&yt(t);break;case 13:yt(t);break;case 19:A(Le);break;case 10:ia(t.type);break;case 22:case 23:yt(t),Fr(),e!==null&&A(el);break;case 24:ia(Ge)}}function On(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var s=a.create,d=a.inst;n=s(),d.destroy=n}a=a.next}while(a!==i)}}catch(f){Ee(t,t.return,f)}}function Ra(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){var d=n.inst,f=d.destroy;if(f!==void 0){d.destroy=void 0,i=t;var y=a,T=f;try{T()}catch(O){Ee(i,y,O)}}}n=n.next}while(n!==s)}}catch(O){Ee(t,t.return,O)}}function Cp(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{jd(t,a)}catch(n){Ee(e,e.return,n)}}}function Mp(e,t,a){a.props=il(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){Ee(e,t,n)}}function _n(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){Ee(e,t,i)}}function Qt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){Ee(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Ee(e,t,i)}else a.current=null}function Op(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){Ee(e,e.return,i)}}function Tc(e,t,a){try{var n=e.stateNode;gg(n,e.type,a,t),n[rt]=t}catch(i){Ee(e,e.return,i)}}function _p(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ba(e.type)||e.tag===4}function Rc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_p(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ba(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cc(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ea));else if(n!==4&&(n===27&&Ba(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Cc(e,t,a),e=e.sibling;e!==null;)Cc(e,t,a),e=e.sibling}function ts(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&Ba(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ts(e,t,a),e=e.sibling;e!==null;)ts(e,t,a),e=e.sibling}function Dp(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);tt(t,n,a),t[Fe]=e,t[rt]=a}catch(s){Ee(e,e.return,s)}}var ua=!1,Ze=!1,Mc=!1,Up=typeof WeakSet=="function"?WeakSet:Set,$e=null;function Wx(e,t){if(e=e.containerInfo,Ic=Ns,e=Ju(e),Sr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var d=0,f=-1,y=-1,T=0,O=0,D=e,R=null;t:for(;;){for(var M;D!==a||i!==0&&D.nodeType!==3||(f=d+i),D!==s||n!==0&&D.nodeType!==3||(y=d+n),D.nodeType===3&&(d+=D.nodeValue.length),(M=D.firstChild)!==null;)R=D,D=M;for(;;){if(D===e)break t;if(R===a&&++T===i&&(f=d),R===s&&++O===n&&(y=d),(M=D.nextSibling)!==null)break;D=R,R=D.parentNode}D=M}a=f===-1||y===-1?null:{start:f,end:y}}else a=null}a=a||{start:0,end:0}}else a=null;for(eo={focusedElem:e,selectionRange:a},Ns=!1,$e=t;$e!==null;)if(t=$e,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$e=e;else for(;$e!==null;){switch(t=$e,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,a=t,i=s.memoizedProps,s=s.memoizedState,n=a.stateNode;try{var J=il(a.type,i);e=n.getSnapshotBeforeUpdate(J,s),n.__reactInternalSnapshotBeforeUpdate=e}catch(te){Ee(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)lo(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":lo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,$e=e;break}$e=t.return}}function Bp(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:pa(e,a),n&4&&On(5,a);break;case 1:if(pa(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(d){Ee(a,a.return,d)}else{var i=il(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Ee(a,a.return,d)}}n&64&&Cp(a),n&512&&_n(a,a.return);break;case 3:if(pa(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{jd(e,t)}catch(d){Ee(a,a.return,d)}}break;case 27:t===null&&n&4&&Dp(a);case 26:case 5:pa(e,a),t===null&&n&4&&Op(a),n&512&&_n(a,a.return);break;case 12:pa(e,a);break;case 31:pa(e,a),n&4&&Yp(e,a);break;case 13:pa(e,a),n&4&&qp(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ig.bind(null,a),Sg(e,a))));break;case 22:if(n=a.memoizedState!==null||ua,!n){t=t!==null&&t.memoizedState!==null||Ze,i=ua;var s=Ze;ua=n,(Ze=t)&&!s?fa(e,a,(a.subtreeFlags&8772)!==0):pa(e,a),ua=i,Ze=s}break;case 30:break;default:pa(e,a)}}function Hp(e){var t=e.alternate;t!==null&&(e.alternate=null,Hp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&cr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ue=null,ot=!1;function da(e,t,a){for(a=a.child;a!==null;)Lp(e,t,a),a=a.sibling}function Lp(e,t,a){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(ln,a)}catch{}switch(a.tag){case 26:Ze||Qt(a,t),da(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ze||Qt(a,t);var n=Ue,i=ot;Ba(a.type)&&(Ue=a.stateNode,ot=!1),da(e,t,a),Vn(a.stateNode),Ue=n,ot=i;break;case 5:Ze||Qt(a,t);case 6:if(n=Ue,i=ot,Ue=null,da(e,t,a),Ue=n,ot=i,Ue!==null)if(ot)try{(Ue.nodeType===9?Ue.body:Ue.nodeName==="HTML"?Ue.ownerDocument.body:Ue).removeChild(a.stateNode)}catch(s){Ee(a,t,s)}else try{Ue.removeChild(a.stateNode)}catch(s){Ee(a,t,s)}break;case 18:Ue!==null&&(ot?(e=Ue,Mf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),$l(e)):Mf(Ue,a.stateNode));break;case 4:n=Ue,i=ot,Ue=a.stateNode.containerInfo,ot=!0,da(e,t,a),Ue=n,ot=i;break;case 0:case 11:case 14:case 15:Ra(2,a,t),Ze||Ra(4,a,t),da(e,t,a);break;case 1:Ze||(Qt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Mp(a,t,n)),da(e,t,a);break;case 21:da(e,t,a);break;case 22:Ze=(n=Ze)||a.memoizedState!==null,da(e,t,a),Ze=n;break;default:da(e,t,a)}}function Yp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{$l(e)}catch(a){Ee(t,t.return,a)}}}function qp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{$l(e)}catch(a){Ee(t,t.return,a)}}function Fx(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Up),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Up),t;default:throw Error(u(435,e.tag))}}function as(e,t){var a=Fx(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var i=sg.bind(null,e,n);n.then(i,i)}})}function ut(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],s=e,d=t,f=d;e:for(;f!==null;){switch(f.tag){case 27:if(Ba(f.type)){Ue=f.stateNode,ot=!1;break e}break;case 5:Ue=f.stateNode,ot=!1;break e;case 3:case 4:Ue=f.stateNode.containerInfo,ot=!0;break e}f=f.return}if(Ue===null)throw Error(u(160));Lp(s,d,i),Ue=null,ot=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Gp(t,e),t=t.sibling}var Ut=null;function Gp(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ut(t,e),dt(e),n&4&&(Ra(3,e,e.return),On(3,e),Ra(5,e,e.return));break;case 1:ut(t,e),dt(e),n&512&&(Ze||a===null||Qt(a,a.return)),n&64&&ua&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Ut;if(ut(t,e),dt(e),n&512&&(Ze||a===null||Qt(a,a.return)),n&4){var s=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":s=i.getElementsByTagName("title")[0],(!s||s[rn]||s[Fe]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=i.createElement(n),i.head.insertBefore(s,i.querySelector("head > title"))),tt(s,n,a),s[Fe]=e,Je(s),n=s;break e;case"link":var d=Vf("link","href",i).get(n+(a.href||""));if(d){for(var f=0;f<d.length;f++)if(s=d[f],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){d.splice(f,1);break t}}s=i.createElement(n),tt(s,n,a),i.head.appendChild(s);break;case"meta":if(d=Vf("meta","content",i).get(n+(a.content||""))){for(f=0;f<d.length;f++)if(s=d[f],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){d.splice(f,1);break t}}s=i.createElement(n),tt(s,n,a),i.head.appendChild(s);break;default:throw Error(u(468,n))}s[Fe]=e,Je(s),n=s}e.stateNode=n}else Qf(i,e.type,e.stateNode);else e.stateNode=Gf(i,n,e.memoizedProps);else s!==n?(s===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):s.count--,n===null?Qf(i,e.type,e.stateNode):Gf(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Tc(e,e.memoizedProps,a.memoizedProps)}break;case 27:ut(t,e),dt(e),n&512&&(Ze||a===null||Qt(a,a.return)),a!==null&&n&4&&Tc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ut(t,e),dt(e),n&512&&(Ze||a===null||Qt(a,a.return)),e.flags&32){i=e.stateNode;try{bl(i,"")}catch(J){Ee(e,e.return,J)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,Tc(e,i,a!==null?a.memoizedProps:i)),n&1024&&(Mc=!0);break;case 6:if(ut(t,e),dt(e),n&4){if(e.stateNode===null)throw Error(u(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(J){Ee(e,e.return,J)}}break;case 3:if(bs=null,i=Ut,Ut=xs(t.containerInfo),ut(t,e),Ut=i,dt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{$l(t.containerInfo)}catch(J){Ee(e,e.return,J)}Mc&&(Mc=!1,Vp(e));break;case 4:n=Ut,Ut=xs(e.stateNode.containerInfo),ut(t,e),dt(e),Ut=n;break;case 12:ut(t,e),dt(e);break;case 31:ut(t,e),dt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,as(e,n)));break;case 13:ut(t,e),dt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ns=mt()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,as(e,n)));break;case 22:i=e.memoizedState!==null;var y=a!==null&&a.memoizedState!==null,T=ua,O=Ze;if(ua=T||i,Ze=O||y,ut(t,e),Ze=O,ua=T,dt(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||y||ua||Ze||sl(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){y=a=t;try{if(s=y.stateNode,i)d=s.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{f=y.stateNode;var D=y.memoizedProps.style,R=D!=null&&D.hasOwnProperty("display")?D.display:null;f.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(J){Ee(y,y.return,J)}}}else if(t.tag===6){if(a===null){y=t;try{y.stateNode.nodeValue=i?"":y.memoizedProps}catch(J){Ee(y,y.return,J)}}}else if(t.tag===18){if(a===null){y=t;try{var M=y.stateNode;i?Of(M,!0):Of(y.stateNode,!1)}catch(J){Ee(y,y.return,J)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,as(e,a))));break;case 19:ut(t,e),dt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,as(e,n)));break;case 30:break;case 21:break;default:ut(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(_p(n)){a=n;break}n=n.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var i=a.stateNode,s=Rc(e);ts(e,s,i);break;case 5:var d=a.stateNode;a.flags&32&&(bl(d,""),a.flags&=-33);var f=Rc(e);ts(e,f,d);break;case 3:case 4:var y=a.stateNode.containerInfo,T=Rc(e);Cc(e,T,y);break;default:throw Error(u(161))}}catch(O){Ee(e,e.return,O)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Vp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function pa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Bp(e,t.alternate,t),t=t.sibling}function sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ra(4,t,t.return),sl(t);break;case 1:Qt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Mp(t,t.return,a),sl(t);break;case 27:Vn(t.stateNode);case 26:case 5:Qt(t,t.return),sl(t);break;case 22:t.memoizedState===null&&sl(t);break;case 30:sl(t);break;default:sl(t)}e=e.sibling}}function fa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,s=t,d=s.flags;switch(s.tag){case 0:case 11:case 15:fa(i,s,a),On(4,s);break;case 1:if(fa(i,s,a),n=s,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(T){Ee(n,n.return,T)}if(n=s,i=n.updateQueue,i!==null){var f=n.stateNode;try{var y=i.shared.hiddenCallbacks;if(y!==null)for(i.shared.hiddenCallbacks=null,i=0;i<y.length;i++)yd(y[i],f)}catch(T){Ee(n,n.return,T)}}a&&d&64&&Cp(s),_n(s,s.return);break;case 27:Dp(s);case 26:case 5:fa(i,s,a),a&&n===null&&d&4&&Op(s),_n(s,s.return);break;case 12:fa(i,s,a);break;case 31:fa(i,s,a),a&&d&4&&Yp(i,s);break;case 13:fa(i,s,a),a&&d&4&&qp(i,s);break;case 22:s.memoizedState===null&&fa(i,s,a),_n(s,s.return);break;case 30:break;default:fa(i,s,a)}t=t.sibling}}function Oc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&yn(a))}function _c(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&yn(e))}function Bt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Qp(e,t,a,n),t=t.sibling}function Qp(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Bt(e,t,a,n),i&2048&&On(9,t);break;case 1:Bt(e,t,a,n);break;case 3:Bt(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&yn(e)));break;case 12:if(i&2048){Bt(e,t,a,n),e=t.stateNode;try{var s=t.memoizedProps,d=s.id,f=s.onPostCommit;typeof f=="function"&&f(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(y){Ee(t,t.return,y)}}else Bt(e,t,a,n);break;case 31:Bt(e,t,a,n);break;case 13:Bt(e,t,a,n);break;case 23:break;case 22:s=t.stateNode,d=t.alternate,t.memoizedState!==null?s._visibility&2?Bt(e,t,a,n):Dn(e,t):s._visibility&2?Bt(e,t,a,n):(s._visibility|=2,Hl(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),i&2048&&Oc(d,t);break;case 24:Bt(e,t,a,n),i&2048&&_c(t.alternate,t);break;default:Bt(e,t,a,n)}}function Hl(e,t,a,n,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,d=t,f=a,y=n,T=d.flags;switch(d.tag){case 0:case 11:case 15:Hl(s,d,f,y,i),On(8,d);break;case 23:break;case 22:var O=d.stateNode;d.memoizedState!==null?O._visibility&2?Hl(s,d,f,y,i):Dn(s,d):(O._visibility|=2,Hl(s,d,f,y,i)),i&&T&2048&&Oc(d.alternate,d);break;case 24:Hl(s,d,f,y,i),i&&T&2048&&_c(d.alternate,d);break;default:Hl(s,d,f,y,i)}t=t.sibling}}function Dn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:Dn(a,n),i&2048&&Oc(n.alternate,n);break;case 24:Dn(a,n),i&2048&&_c(n.alternate,n);break;default:Dn(a,n)}t=t.sibling}}var Un=8192;function Ll(e,t,a){if(e.subtreeFlags&Un)for(e=e.child;e!==null;)Zp(e,t,a),e=e.sibling}function Zp(e,t,a){switch(e.tag){case 26:Ll(e,t,a),e.flags&Un&&e.memoizedState!==null&&Bg(a,Ut,e.memoizedState,e.memoizedProps);break;case 5:Ll(e,t,a);break;case 3:case 4:var n=Ut;Ut=xs(e.stateNode.containerInfo),Ll(e,t,a),Ut=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Un,Un=16777216,Ll(e,t,a),Un=n):Ll(e,t,a));break;default:Ll(e,t,a)}}function Kp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Bn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];$e=n,Jp(n,e)}Kp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Xp(e),e=e.sibling}function Xp(e){switch(e.tag){case 0:case 11:case 15:Bn(e),e.flags&2048&&Ra(9,e,e.return);break;case 3:Bn(e);break;case 12:Bn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ls(e)):Bn(e);break;default:Bn(e)}}function ls(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];$e=n,Jp(n,e)}Kp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ra(8,t,t.return),ls(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,ls(t));break;default:ls(t)}e=e.sibling}}function Jp(e,t){for(;$e!==null;){var a=$e;switch(a.tag){case 0:case 11:case 15:Ra(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:yn(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,$e=n;else e:for(a=e;$e!==null;){n=$e;var i=n.sibling,s=n.return;if(Hp(n),n===a){$e=null;break e}if(i!==null){i.return=s,$e=i;break e}$e=s}}}var Px={getCacheForType:function(e){var t=Ie(Ge),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ie(Ge).controller.signal}},Ix=typeof WeakMap=="function"?WeakMap:Map,we=0,Ce=null,de=null,me=0,Se=0,jt=null,Ca=!1,Yl=!1,Dc=!1,ma=0,He=0,Ma=0,rl=0,Uc=0,Nt=0,ql=0,Hn=null,pt=null,Bc=!1,ns=0,$p=0,is=1/0,ss=null,Oa=null,Ke=0,_a=null,Gl=null,ha=0,Hc=0,Lc=null,Wp=null,Ln=0,Yc=null;function kt(){return(we&2)!==0&&me!==0?me&-me:C.T!==null?Kc():pu()}function Fp(){if(Nt===0)if((me&536870912)===0||ge){var e=mi;mi<<=1,(mi&3932160)===0&&(mi=262144),Nt=e}else Nt=536870912;return e=vt.current,e!==null&&(e.flags|=32),Nt}function ft(e,t,a){(e===Ce&&(Se===2||Se===9)||e.cancelPendingCommit!==null)&&(Vl(e,0),Da(e,me,Nt,!1)),sn(e,a),((we&2)===0||e!==Ce)&&(e===Ce&&((we&2)===0&&(rl|=a),He===4&&Da(e,me,Nt,!1)),Zt(e))}function Pp(e,t,a){if((we&6)!==0)throw Error(u(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||nn(e,t),i=n?ag(e,t):Gc(e,t,!0),s=n;do{if(i===0){Yl&&!n&&Da(e,t,0,!1);break}else{if(a=e.current.alternate,s&&!eg(a)){i=Gc(e,t,!1),s=!1;continue}if(i===2){if(s=t,e.errorRecoveryDisabledLanes&s)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var f=e;i=Hn;var y=f.current.memoizedState.isDehydrated;if(y&&(Vl(f,d).flags|=256),d=Gc(f,d,!1),d!==2){if(Dc&&!y){f.errorRecoveryDisabledLanes|=s,rl|=s,i=4;break e}s=pt,pt=i,s!==null&&(pt===null?pt=s:pt.push.apply(pt,s))}i=d}if(s=!1,i!==2)continue}}if(i===1){Vl(e,0),Da(e,t,0,!0);break}e:{switch(n=e,s=i,s){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Da(n,t,Nt,!Ca);break e;case 2:pt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(i=ns+300-mt(),10<i)){if(Da(n,t,Nt,!Ca),xi(n,0,!0)!==0)break e;ha=t,n.timeoutHandle=Rf(Ip.bind(null,n,a,pt,ss,Bc,t,Nt,rl,ql,Ca,s,"Throttled",-0,0),i);break e}Ip(n,a,pt,ss,Bc,t,Nt,rl,ql,Ca,s,null,-0,0)}}break}while(!0);Zt(e)}function Ip(e,t,a,n,i,s,d,f,y,T,O,D,R,M){if(e.timeoutHandle=-1,D=t.subtreeFlags,D&8192||(D&16785408)===16785408){D={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ea},Zp(t,s,D);var J=(s&62914560)===s?ns-mt():(s&4194048)===s?$p-mt():0;if(J=Hg(D,J),J!==null){ha=s,e.cancelPendingCommit=J(cf.bind(null,e,t,s,a,n,i,d,f,y,O,D,null,R,M)),Da(e,s,d,!T);return}}cf(e,t,s,a,n,i,d,f,y)}function eg(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],s=i.getSnapshot;i=i.value;try{if(!gt(s(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Da(e,t,a,n){t&=~Uc,t&=~rl,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var s=31-xt(i),d=1<<s;n[s]=-1,i&=~d}a!==0&&ou(e,a,t)}function rs(){return(we&6)===0?(Yn(0),!1):!0}function qc(){if(de!==null){if(Se===0)var e=de.return;else e=de,na=Pa=null,lc(e),Ol=null,Nn=0,e=de;for(;e!==null;)Rp(e.alternate,e),e=e.return;de=null}}function Vl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,yg(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ha=0,qc(),Ce=e,de=a=aa(e.current,null),me=t,Se=0,jt=null,Ca=!1,Yl=nn(e,t),Dc=!1,ql=Nt=Uc=rl=Ma=He=0,pt=Hn=null,Bc=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-xt(n),s=1<<i;t|=e[i],n&=~s}return ma=t,zi(),a}function ef(e,t){ce=null,C.H=Rn,t===Ml||t===Ui?(t=xd(),Se=3):t===Zr?(t=xd(),Se=4):Se=t===vc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,jt=t,de===null&&(He=1,Wi(e,At(t,e.current)))}function tf(){var e=vt.current;return e===null?!0:(me&4194048)===me?Ct===null:(me&62914560)===me||(me&536870912)!==0?e===Ct:!1}function af(){var e=C.H;return C.H=Rn,e===null?Rn:e}function lf(){var e=C.A;return C.A=Px,e}function cs(){He=4,Ca||(me&4194048)!==me&&vt.current!==null||(Yl=!0),(Ma&134217727)===0&&(rl&134217727)===0||Ce===null||Da(Ce,me,Nt,!1)}function Gc(e,t,a){var n=we;we|=2;var i=af(),s=lf();(Ce!==e||me!==t)&&(ss=null,Vl(e,t)),t=!1;var d=He;e:do try{if(Se!==0&&de!==null){var f=de,y=jt;switch(Se){case 8:qc(),d=6;break e;case 3:case 2:case 9:case 6:vt.current===null&&(t=!0);var T=Se;if(Se=0,jt=null,Ql(e,f,y,T),a&&Yl){d=0;break e}break;default:T=Se,Se=0,jt=null,Ql(e,f,y,T)}}tg(),d=He;break}catch(O){ef(e,O)}while(!0);return t&&e.shellSuspendCounter++,na=Pa=null,we=n,C.H=i,C.A=s,de===null&&(Ce=null,me=0,zi()),d}function tg(){for(;de!==null;)nf(de)}function ag(e,t){var a=we;we|=2;var n=af(),i=lf();Ce!==e||me!==t?(ss=null,is=mt()+500,Vl(e,t)):Yl=nn(e,t);e:do try{if(Se!==0&&de!==null){t=de;var s=jt;t:switch(Se){case 1:Se=0,jt=null,Ql(e,t,s,1);break;case 2:case 9:if(md(s)){Se=0,jt=null,sf(t);break}t=function(){Se!==2&&Se!==9||Ce!==e||(Se=7),Zt(e)},s.then(t,t);break e;case 3:Se=7;break e;case 4:Se=5;break e;case 7:md(s)?(Se=0,jt=null,sf(t)):(Se=0,jt=null,Ql(e,t,s,7));break;case 5:var d=null;switch(de.tag){case 26:d=de.memoizedState;case 5:case 27:var f=de;if(d?Zf(d):f.stateNode.complete){Se=0,jt=null;var y=f.sibling;if(y!==null)de=y;else{var T=f.return;T!==null?(de=T,os(T)):de=null}break t}}Se=0,jt=null,Ql(e,t,s,5);break;case 6:Se=0,jt=null,Ql(e,t,s,6);break;case 8:qc(),He=6;break e;default:throw Error(u(462))}}lg();break}catch(O){ef(e,O)}while(!0);return na=Pa=null,C.H=n,C.A=i,we=a,de!==null?0:(Ce=null,me=0,zi(),He)}function lg(){for(;de!==null&&!Eh();)nf(de)}function nf(e){var t=zp(e.alternate,e,ma);e.memoizedProps=e.pendingProps,t===null?os(e):de=t}function sf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Np(a,t,t.pendingProps,t.type,void 0,me);break;case 11:t=Np(a,t,t.pendingProps,t.type.render,t.ref,me);break;case 5:lc(t);default:Rp(a,t),t=de=ld(t,ma),t=zp(a,t,ma)}e.memoizedProps=e.pendingProps,t===null?os(e):de=t}function Ql(e,t,a,n){na=Pa=null,lc(t),Ol=null,Nn=0;var i=t.return;try{if(Zx(e,i,t,a,me)){He=1,Wi(e,At(a,e.current)),de=null;return}}catch(s){if(i!==null)throw de=i,s;He=1,Wi(e,At(a,e.current)),de=null;return}t.flags&32768?(ge||n===1?e=!0:Yl||(me&536870912)!==0?e=!1:(Ca=e=!0,(n===2||n===9||n===3||n===6)&&(n=vt.current,n!==null&&n.tag===13&&(n.flags|=16384))),rf(t,e)):os(t)}function os(e){var t=e;do{if((t.flags&32768)!==0){rf(t,Ca);return}e=t.return;var a=Jx(t.alternate,t,ma);if(a!==null){de=a;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);He===0&&(He=5)}function rf(e,t){do{var a=$x(e.alternate,e);if(a!==null){a.flags&=32767,de=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){de=e;return}de=e=a}while(e!==null);He=6,de=null}function cf(e,t,a,n,i,s,d,f,y){e.cancelPendingCommit=null;do us();while(Ke!==0);if((we&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(s=t.lanes|t.childLanes,s|=Rr,Uh(e,a,s,d,f,y),e===Ce&&(de=Ce=null,me=0),Gl=t,_a=e,ha=a,Hc=s,Lc=i,Wp=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,rg(pi,function(){return ff(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=C.T,C.T=null,i=Z.p,Z.p=2,d=we,we|=4;try{Wx(e,t,a)}finally{we=d,Z.p=i,C.T=n}}Ke=1,of(),uf(),df()}}function of(){if(Ke===1){Ke=0;var e=_a,t=Gl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=C.T,C.T=null;var n=Z.p;Z.p=2;var i=we;we|=4;try{Gp(t,e);var s=eo,d=Ju(e.containerInfo),f=s.focusedElem,y=s.selectionRange;if(d!==f&&f&&f.ownerDocument&&Xu(f.ownerDocument.documentElement,f)){if(y!==null&&Sr(f)){var T=y.start,O=y.end;if(O===void 0&&(O=T),"selectionStart"in f)f.selectionStart=T,f.selectionEnd=Math.min(O,f.value.length);else{var D=f.ownerDocument||document,R=D&&D.defaultView||window;if(R.getSelection){var M=R.getSelection(),J=f.textContent.length,te=Math.min(y.start,J),Re=y.end===void 0?te:Math.min(y.end,J);!M.extend&&te>Re&&(d=Re,Re=te,te=d);var E=Ku(f,te),j=Ku(f,Re);if(E&&j&&(M.rangeCount!==1||M.anchorNode!==E.node||M.anchorOffset!==E.offset||M.focusNode!==j.node||M.focusOffset!==j.offset)){var z=D.createRange();z.setStart(E.node,E.offset),M.removeAllRanges(),te>Re?(M.addRange(z),M.extend(j.node,j.offset)):(z.setEnd(j.node,j.offset),M.addRange(z))}}}}for(D=[],M=f;M=M.parentNode;)M.nodeType===1&&D.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<D.length;f++){var _=D[f];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}Ns=!!Ic,eo=Ic=null}finally{we=i,Z.p=n,C.T=a}}e.current=t,Ke=2}}function uf(){if(Ke===2){Ke=0;var e=_a,t=Gl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=C.T,C.T=null;var n=Z.p;Z.p=2;var i=we;we|=4;try{Bp(e,t.alternate,t)}finally{we=i,Z.p=n,C.T=a}}Ke=3}}function df(){if(Ke===4||Ke===3){Ke=0,Ah();var e=_a,t=Gl,a=ha,n=Wp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ke=5:(Ke=0,Gl=_a=null,pf(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Oa=null),sr(a),t=t.stateNode,ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(ln,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=C.T,i=Z.p,Z.p=2,C.T=null;try{for(var s=e.onRecoverableError,d=0;d<n.length;d++){var f=n[d];s(f.value,{componentStack:f.stack})}}finally{C.T=t,Z.p=i}}(ha&3)!==0&&us(),Zt(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===Yc?Ln++:(Ln=0,Yc=e):Ln=0,Yn(0)}}function pf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,yn(t)))}function us(){return of(),uf(),df(),ff()}function ff(){if(Ke!==5)return!1;var e=_a,t=Hc;Hc=0;var a=sr(ha),n=C.T,i=Z.p;try{Z.p=32>a?32:a,C.T=null,a=Lc,Lc=null;var s=_a,d=ha;if(Ke=0,Gl=_a=null,ha=0,(we&6)!==0)throw Error(u(331));var f=we;if(we|=4,Xp(s.current),Qp(s,s.current,d,a),we=f,Yn(0,!1),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(ln,s)}catch{}return!0}finally{Z.p=i,C.T=n,pf(e,t)}}function mf(e,t,a){t=At(a,t),t=bc(e.stateNode,t,2),e=Aa(e,t,2),e!==null&&(sn(e,2),Zt(e))}function Ee(e,t,a){if(e.tag===3)mf(e,e,a);else for(;t!==null;){if(t.tag===3){mf(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Oa===null||!Oa.has(n))){e=At(a,e),a=mp(2),n=Aa(t,a,2),n!==null&&(hp(a,n,t,e),sn(n,2),Zt(n));break}}t=t.return}}function Vc(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Ix;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(Dc=!0,i.add(a),e=ng.bind(null,e,t,a),t.then(e,e))}function ng(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ce===e&&(me&a)===a&&(He===4||He===3&&(me&62914560)===me&&300>mt()-ns?(we&2)===0&&Vl(e,0):Uc|=a,ql===me&&(ql=0)),Zt(e)}function hf(e,t){t===0&&(t=cu()),e=$a(e,t),e!==null&&(sn(e,t),Zt(e))}function ig(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),hf(e,a)}function sg(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(u(314))}n!==null&&n.delete(t),hf(e,a)}function rg(e,t){return ar(e,t)}var ds=null,Zl=null,Qc=!1,ps=!1,Zc=!1,Ua=0;function Zt(e){e!==Zl&&e.next===null&&(Zl===null?ds=Zl=e:Zl=Zl.next=e),ps=!0,Qc||(Qc=!0,og())}function Yn(e,t){if(!Zc&&ps){Zc=!0;do for(var a=!1,n=ds;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var s=0;else{var d=n.suspendedLanes,f=n.pingedLanes;s=(1<<31-xt(42|e)+1)-1,s&=i&~(d&~f),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(a=!0,vf(n,s))}else s=me,s=xi(n,n===Ce?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(s&3)===0||nn(n,s)||(a=!0,vf(n,s));n=n.next}while(a);Zc=!1}}function cg(){xf()}function xf(){ps=Qc=!1;var e=0;Ua!==0&&vg()&&(e=Ua);for(var t=mt(),a=null,n=ds;n!==null;){var i=n.next,s=gf(n,t);s===0?(n.next=null,a===null?ds=i:a.next=i,i===null&&(Zl=a)):(a=n,(e!==0||(s&3)!==0)&&(ps=!0)),n=i}Ke!==0&&Ke!==5||Yn(e),Ua!==0&&(Ua=0)}function gf(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var d=31-xt(s),f=1<<d,y=i[d];y===-1?((f&a)===0||(f&n)!==0)&&(i[d]=Dh(f,t)):y<=t&&(e.expiredLanes|=f),s&=~f}if(t=Ce,a=me,a=xi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(Se===2||Se===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&lr(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||nn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&lr(n),sr(a)){case 2:case 8:a=su;break;case 32:a=pi;break;case 268435456:a=ru;break;default:a=pi}return n=bf.bind(null,e),a=ar(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&lr(n),e.callbackPriority=2,e.callbackNode=null,2}function bf(e,t){if(Ke!==0&&Ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(us()&&e.callbackNode!==a)return null;var n=me;return n=xi(e,e===Ce?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Pp(e,n,t),gf(e,mt()),e.callbackNode!=null&&e.callbackNode===a?bf.bind(null,e):null)}function vf(e,t){if(us())return null;Pp(e,t,!0)}function og(){jg(function(){(we&6)!==0?ar(iu,cg):xf()})}function Kc(){if(Ua===0){var e=Rl;e===0&&(e=fi,fi<<=1,(fi&261888)===0&&(fi=256)),Ua=e}return Ua}function yf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:yi(""+e)}function jf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function ug(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var s=yf((i[rt]||null).action),d=n.submitter;d&&(t=(t=d[rt]||null)?yf(t.formAction):d.getAttribute("formAction"),t!==null&&(s=t,d=null));var f=new wi("action","action",null,n,i);e.push({event:f,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Ua!==0){var y=d?jf(i,d):new FormData(i);pc(a,{pending:!0,data:y,method:i.method,action:s},null,y)}}else typeof s=="function"&&(f.preventDefault(),y=d?jf(i,d):new FormData(i),pc(a,{pending:!0,data:y,method:i.method,action:s},s,y))},currentTarget:i}]})}}for(var Xc=0;Xc<Tr.length;Xc++){var Jc=Tr[Xc],dg=Jc.toLowerCase(),pg=Jc[0].toUpperCase()+Jc.slice(1);Dt(dg,"on"+pg)}Dt(Fu,"onAnimationEnd"),Dt(Pu,"onAnimationIteration"),Dt(Iu,"onAnimationStart"),Dt("dblclick","onDoubleClick"),Dt("focusin","onFocus"),Dt("focusout","onBlur"),Dt(zx,"onTransitionRun"),Dt(Tx,"onTransitionStart"),Dt(Rx,"onTransitionCancel"),Dt(ed,"onTransitionEnd"),xl("onMouseEnter",["mouseout","mouseover"]),xl("onMouseLeave",["mouseout","mouseover"]),xl("onPointerEnter",["pointerout","pointerover"]),xl("onPointerLeave",["pointerout","pointerover"]),Za("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Za("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Za("onBeforeInput",["compositionend","keypress","textInput","paste"]),Za("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Za("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Za("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qn));function Nf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var d=n.length-1;0<=d;d--){var f=n[d],y=f.instance,T=f.currentTarget;if(f=f.listener,y!==s&&i.isPropagationStopped())break e;s=f,i.currentTarget=T;try{s(i)}catch(O){Ai(O)}i.currentTarget=null,s=y}else for(d=0;d<n.length;d++){if(f=n[d],y=f.instance,T=f.currentTarget,f=f.listener,y!==s&&i.isPropagationStopped())break e;s=f,i.currentTarget=T;try{s(i)}catch(O){Ai(O)}i.currentTarget=null,s=y}}}}function pe(e,t){var a=t[rr];a===void 0&&(a=t[rr]=new Set);var n=e+"__bubble";a.has(n)||(kf(t,e,2,!1),a.add(n))}function $c(e,t,a){var n=0;t&&(n|=4),kf(a,e,n,t)}var fs="_reactListening"+Math.random().toString(36).slice(2);function Wc(e){if(!e[fs]){e[fs]=!0,hu.forEach(function(a){a!=="selectionchange"&&(fg.has(a)||$c(a,!1,e),$c(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fs]||(t[fs]=!0,$c("selectionchange",!1,t))}}function kf(e,t,a,n){switch(Pf(t)){case 2:var i=qg;break;case 8:i=Gg;break;default:i=po}a=i.bind(null,t,a,e),i=void 0,!xr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function Fc(e,t,a,n,i){var s=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var d=n.tag;if(d===3||d===4){var f=n.stateNode.containerInfo;if(f===i)break;if(d===4)for(d=n.return;d!==null;){var y=d.tag;if((y===3||y===4)&&d.stateNode.containerInfo===i)return;d=d.return}for(;f!==null;){if(d=fl(f),d===null)return;if(y=d.tag,y===5||y===6||y===26||y===27){n=s=d;continue e}f=f.parentNode}}n=n.return}Au(function(){var T=s,O=mr(a),D=[];e:{var R=td.get(e);if(R!==void 0){var M=wi,J=e;switch(e){case"keypress":if(Ni(a)===0)break e;case"keydown":case"keyup":M=sx;break;case"focusin":J="focus",M=yr;break;case"focusout":J="blur",M=yr;break;case"beforeblur":case"afterblur":M=yr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=Ru;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=Jh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=ox;break;case Fu:case Pu:case Iu:M=Fh;break;case ed:M=dx;break;case"scroll":case"scrollend":M=Kh;break;case"wheel":M=fx;break;case"copy":case"cut":case"paste":M=Ih;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Mu;break;case"toggle":case"beforetoggle":M=hx}var te=(t&4)!==0,Re=!te&&(e==="scroll"||e==="scrollend"),E=te?R!==null?R+"Capture":null:R;te=[];for(var j=T,z;j!==null;){var _=j;if(z=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||z===null||E===null||(_=on(j,E),_!=null&&te.push(Gn(j,_,z))),Re)break;j=j.return}0<te.length&&(R=new M(R,J,null,a,O),D.push({event:R,listeners:te}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",R&&a!==fr&&(J=a.relatedTarget||a.fromElement)&&(fl(J)||J[pl]))break e;if((M||R)&&(R=O.window===O?O:(R=O.ownerDocument)?R.defaultView||R.parentWindow:window,M?(J=a.relatedTarget||a.toElement,M=T,J=J?fl(J):null,J!==null&&(Re=m(J),te=J.tag,J!==Re||te!==5&&te!==27&&te!==6)&&(J=null)):(M=null,J=T),M!==J)){if(te=Ru,_="onMouseLeave",E="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(te=Mu,_="onPointerLeave",E="onPointerEnter",j="pointer"),Re=M==null?R:cn(M),z=J==null?R:cn(J),R=new te(_,j+"leave",M,a,O),R.target=Re,R.relatedTarget=z,_=null,fl(O)===T&&(te=new te(E,j+"enter",J,a,O),te.target=z,te.relatedTarget=Re,_=te),Re=_,M&&J)t:{for(te=mg,E=M,j=J,z=0,_=E;_;_=te(_))z++;_=0;for(var ee=j;ee;ee=te(ee))_++;for(;0<z-_;)E=te(E),z--;for(;0<_-z;)j=te(j),_--;for(;z--;){if(E===j||j!==null&&E===j.alternate){te=E;break t}E=te(E),j=te(j)}te=null}else te=null;M!==null&&wf(D,R,M,te,!1),J!==null&&Re!==null&&wf(D,Re,J,te,!0)}}e:{if(R=T?cn(T):window,M=R.nodeName&&R.nodeName.toLowerCase(),M==="select"||M==="input"&&R.type==="file")var ye=Yu;else if(Hu(R))if(qu)ye=Sx;else{ye=kx;var F=Nx}else M=R.nodeName,!M||M.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?T&&pr(T.elementType)&&(ye=Yu):ye=wx;if(ye&&(ye=ye(e,T))){Lu(D,ye,a,O);break e}F&&F(e,R,T),e==="focusout"&&T&&R.type==="number"&&T.memoizedProps.value!=null&&dr(R,"number",R.value)}switch(F=T?cn(T):window,e){case"focusin":(Hu(F)||F.contentEditable==="true")&&(Nl=F,Er=T,gn=null);break;case"focusout":gn=Er=Nl=null;break;case"mousedown":Ar=!0;break;case"contextmenu":case"mouseup":case"dragend":Ar=!1,$u(D,a,O);break;case"selectionchange":if(Ax)break;case"keydown":case"keyup":$u(D,a,O)}var ue;if(Nr)e:{switch(e){case"compositionstart":var he="onCompositionStart";break e;case"compositionend":he="onCompositionEnd";break e;case"compositionupdate":he="onCompositionUpdate";break e}he=void 0}else jl?Uu(e,a)&&(he="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(he="onCompositionStart");he&&(Ou&&a.locale!=="ko"&&(jl||he!=="onCompositionStart"?he==="onCompositionEnd"&&jl&&(ue=zu()):(ya=O,gr="value"in ya?ya.value:ya.textContent,jl=!0)),F=ms(T,he),0<F.length&&(he=new Cu(he,e,null,a,O),D.push({event:he,listeners:F}),ue?he.data=ue:(ue=Bu(a),ue!==null&&(he.data=ue)))),(ue=gx?bx(e,a):vx(e,a))&&(he=ms(T,"onBeforeInput"),0<he.length&&(F=new Cu("onBeforeInput","beforeinput",null,a,O),D.push({event:F,listeners:he}),F.data=ue)),ug(D,e,T,a,O)}Nf(D,t)})}function Gn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function ms(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=on(e,a),i!=null&&n.unshift(Gn(e,i,s)),i=on(e,t),i!=null&&n.push(Gn(e,i,s))),e.tag===3)return n;e=e.return}return[]}function mg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function wf(e,t,a,n,i){for(var s=t._reactName,d=[];a!==null&&a!==n;){var f=a,y=f.alternate,T=f.stateNode;if(f=f.tag,y!==null&&y===n)break;f!==5&&f!==26&&f!==27||T===null||(y=T,i?(T=on(a,s),T!=null&&d.unshift(Gn(a,T,y))):i||(T=on(a,s),T!=null&&d.push(Gn(a,T,y)))),a=a.return}d.length!==0&&e.push({event:t,listeners:d})}var hg=/\r\n?/g,xg=/\u0000|\uFFFD/g;function Sf(e){return(typeof e=="string"?e:""+e).replace(hg,`
`).replace(xg,"")}function Ef(e,t){return t=Sf(t),Sf(e)===t}function Te(e,t,a,n,i,s){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||bl(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&bl(e,""+n);break;case"className":bi(e,"class",n);break;case"tabIndex":bi(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":bi(e,a,n);break;case"style":Su(e,n,s);break;case"data":if(t!=="object"){bi(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=yi(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(t!=="input"&&Te(e,t,"name",i.name,i,null),Te(e,t,"formEncType",i.formEncType,i,null),Te(e,t,"formMethod",i.formMethod,i,null),Te(e,t,"formTarget",i.formTarget,i,null)):(Te(e,t,"encType",i.encType,i,null),Te(e,t,"method",i.method,i,null),Te(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=yi(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=ea);break;case"onScroll":n!=null&&pe("scroll",e);break;case"onScrollEnd":n!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=yi(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":pe("beforetoggle",e),pe("toggle",e),gi(e,"popover",n);break;case"xlinkActuate":It(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":It(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":It(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":It(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":It(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":It(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":It(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":It(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":It(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":gi(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Qh.get(a)||a,gi(e,a,n))}}function Pc(e,t,a,n,i,s){switch(a){case"style":Su(e,n,s);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof n=="string"?bl(e,n):(typeof n=="number"||typeof n=="bigint")&&bl(e,""+n);break;case"onScroll":n!=null&&pe("scroll",e);break;case"onScrollEnd":n!=null&&pe("scrollend",e);break;case"onClick":n!=null&&(e.onclick=ea);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xu.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),s=e[rt]||null,s=s!=null?s[a]:null,typeof s=="function"&&e.removeEventListener(t,s,i),typeof n=="function")){typeof s!="function"&&s!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):gi(e,a,n)}}}function tt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var n=!1,i=!1,s;for(s in a)if(a.hasOwnProperty(s)){var d=a[s];if(d!=null)switch(s){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Te(e,t,s,d,a,null)}}i&&Te(e,t,"srcSet",a.srcSet,a,null),n&&Te(e,t,"src",a.src,a,null);return;case"input":pe("invalid",e);var f=s=d=i=null,y=null,T=null;for(n in a)if(a.hasOwnProperty(n)){var O=a[n];if(O!=null)switch(n){case"name":i=O;break;case"type":d=O;break;case"checked":y=O;break;case"defaultChecked":T=O;break;case"value":s=O;break;case"defaultValue":f=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(u(137,t));break;default:Te(e,t,n,O,a,null)}}ju(e,s,f,y,T,d,i,!1);return;case"select":pe("invalid",e),n=d=s=null;for(i in a)if(a.hasOwnProperty(i)&&(f=a[i],f!=null))switch(i){case"value":s=f;break;case"defaultValue":d=f;break;case"multiple":n=f;default:Te(e,t,i,f,a,null)}t=s,a=d,e.multiple=!!n,t!=null?gl(e,!!n,t,!1):a!=null&&gl(e,!!n,a,!0);return;case"textarea":pe("invalid",e),s=i=n=null;for(d in a)if(a.hasOwnProperty(d)&&(f=a[d],f!=null))switch(d){case"value":n=f;break;case"defaultValue":i=f;break;case"children":s=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(u(91));break;default:Te(e,t,d,f,a,null)}ku(e,n,i,s);return;case"option":for(y in a)a.hasOwnProperty(y)&&(n=a[y],n!=null)&&(y==="selected"?e.selected=n&&typeof n!="function"&&typeof n!="symbol":Te(e,t,y,n,a,null));return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(n=0;n<qn.length;n++)pe(qn[n],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in a)if(a.hasOwnProperty(T)&&(n=a[T],n!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Te(e,t,T,n,a,null)}return;default:if(pr(t)){for(O in a)a.hasOwnProperty(O)&&(n=a[O],n!==void 0&&Pc(e,t,O,n,a,void 0));return}}for(f in a)a.hasOwnProperty(f)&&(n=a[f],n!=null&&Te(e,t,f,n,a,null))}function gg(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,d=null,f=null,y=null,T=null,O=null;for(M in a){var D=a[M];if(a.hasOwnProperty(M)&&D!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":y=D;default:n.hasOwnProperty(M)||Te(e,t,M,null,n,D)}}for(var R in n){var M=n[R];if(D=a[R],n.hasOwnProperty(R)&&(M!=null||D!=null))switch(R){case"type":s=M;break;case"name":i=M;break;case"checked":T=M;break;case"defaultChecked":O=M;break;case"value":d=M;break;case"defaultValue":f=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(u(137,t));break;default:M!==D&&Te(e,t,R,M,n,D)}}ur(e,d,f,y,T,O,s,i);return;case"select":M=d=f=R=null;for(s in a)if(y=a[s],a.hasOwnProperty(s)&&y!=null)switch(s){case"value":break;case"multiple":M=y;default:n.hasOwnProperty(s)||Te(e,t,s,null,n,y)}for(i in n)if(s=n[i],y=a[i],n.hasOwnProperty(i)&&(s!=null||y!=null))switch(i){case"value":R=s;break;case"defaultValue":f=s;break;case"multiple":d=s;default:s!==y&&Te(e,t,i,s,n,y)}t=f,a=d,n=M,R!=null?gl(e,!!a,R,!1):!!n!=!!a&&(t!=null?gl(e,!!a,t,!0):gl(e,!!a,a?[]:"",!1));return;case"textarea":M=R=null;for(f in a)if(i=a[f],a.hasOwnProperty(f)&&i!=null&&!n.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:Te(e,t,f,null,n,i)}for(d in n)if(i=n[d],s=a[d],n.hasOwnProperty(d)&&(i!=null||s!=null))switch(d){case"value":R=i;break;case"defaultValue":M=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(u(91));break;default:i!==s&&Te(e,t,d,i,n,s)}Nu(e,R,M);return;case"option":for(var J in a)R=a[J],a.hasOwnProperty(J)&&R!=null&&!n.hasOwnProperty(J)&&(J==="selected"?e.selected=!1:Te(e,t,J,null,n,R));for(y in n)R=n[y],M=a[y],n.hasOwnProperty(y)&&R!==M&&(R!=null||M!=null)&&(y==="selected"?e.selected=R&&typeof R!="function"&&typeof R!="symbol":Te(e,t,y,R,n,M));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)R=a[te],a.hasOwnProperty(te)&&R!=null&&!n.hasOwnProperty(te)&&Te(e,t,te,null,n,R);for(T in n)if(R=n[T],M=a[T],n.hasOwnProperty(T)&&R!==M&&(R!=null||M!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(u(137,t));break;default:Te(e,t,T,R,n,M)}return;default:if(pr(t)){for(var Re in a)R=a[Re],a.hasOwnProperty(Re)&&R!==void 0&&!n.hasOwnProperty(Re)&&Pc(e,t,Re,void 0,n,R);for(O in n)R=n[O],M=a[O],!n.hasOwnProperty(O)||R===M||R===void 0&&M===void 0||Pc(e,t,O,R,n,M);return}}for(var E in a)R=a[E],a.hasOwnProperty(E)&&R!=null&&!n.hasOwnProperty(E)&&Te(e,t,E,null,n,R);for(D in n)R=n[D],M=a[D],!n.hasOwnProperty(D)||R===M||R==null&&M==null||Te(e,t,D,R,n,M)}function Af(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var i=a[n],s=i.transferSize,d=i.initiatorType,f=i.duration;if(s&&f&&Af(d)){for(d=0,f=i.responseEnd,n+=1;n<a.length;n++){var y=a[n],T=y.startTime;if(T>f)break;var O=y.transferSize,D=y.initiatorType;O&&Af(D)&&(y=y.responseEnd,d+=O*(y<f?1:(f-T)/(y-T)))}if(--n,t+=8*(s+d)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ic=null,eo=null;function hs(e){return e.nodeType===9?e:e.ownerDocument}function zf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Tf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function to(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ao=null;function vg(){var e=window.event;return e&&e.type==="popstate"?e===ao?!1:(ao=e,!0):(ao=null,!1)}var Rf=typeof setTimeout=="function"?setTimeout:void 0,yg=typeof clearTimeout=="function"?clearTimeout:void 0,Cf=typeof Promise=="function"?Promise:void 0,jg=typeof queueMicrotask=="function"?queueMicrotask:typeof Cf<"u"?function(e){return Cf.resolve(null).then(e).catch(Ng)}:Rf;function Ng(e){setTimeout(function(){throw e})}function Ba(e){return e==="head"}function Mf(e,t){var a=t,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(i),$l(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")Vn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Vn(a);for(var s=a.firstChild;s;){var d=s.nextSibling,f=s.nodeName;s[rn]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=d}}else a==="body"&&Vn(e.ownerDocument.body);a=i}while(a);$l(t)}function Of(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function lo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":lo(a),cr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function kg(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[rn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Mt(e.nextSibling),e===null)break}return null}function wg(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Mt(e.nextSibling),e===null))return null;return e}function _f(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Mt(e.nextSibling),e===null))return null;return e}function no(e){return e.data==="$?"||e.data==="$~"}function io(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Sg(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var so=null;function Df(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Mt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Uf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Bf(e,t,a){switch(t=hs(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Vn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);cr(e)}var Ot=new Map,Hf=new Set;function xs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var xa=Z.d;Z.d={f:Eg,r:Ag,D:zg,C:Tg,L:Rg,m:Cg,X:Og,S:Mg,M:_g};function Eg(){var e=xa.f(),t=rs();return e||t}function Ag(e){var t=ml(e);t!==null&&t.tag===5&&t.type==="form"?ep(t):xa.r(e)}var Kl=typeof document>"u"?null:document;function Lf(e,t,a){var n=Kl;if(n&&typeof t=="string"&&t){var i=St(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Hf.has(i)||(Hf.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),tt(t,"link",e),Je(t),n.head.appendChild(t)))}}function zg(e){xa.D(e),Lf("dns-prefetch",e,null)}function Tg(e,t){xa.C(e,t),Lf("preconnect",e,t)}function Rg(e,t,a){xa.L(e,t,a);var n=Kl;if(n&&e&&t){var i='link[rel="preload"][as="'+St(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+St(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+St(a.imageSizes)+'"]')):i+='[href="'+St(e)+'"]';var s=i;switch(t){case"style":s=Xl(e);break;case"script":s=Jl(e)}Ot.has(s)||(e=k({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ot.set(s,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(Qn(s))||t==="script"&&n.querySelector(Zn(s))||(t=n.createElement("link"),tt(t,"link",e),Je(t),n.head.appendChild(t)))}}function Cg(e,t){xa.m(e,t);var a=Kl;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+St(n)+'"][href="'+St(e)+'"]',s=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Jl(e)}if(!Ot.has(s)&&(e=k({rel:"modulepreload",href:e},t),Ot.set(s,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Zn(s)))return}n=a.createElement("link"),tt(n,"link",e),Je(n),a.head.appendChild(n)}}}function Mg(e,t,a){xa.S(e,t,a);var n=Kl;if(n&&e){var i=hl(n).hoistableStyles,s=Xl(e);t=t||"default";var d=i.get(s);if(!d){var f={loading:0,preload:null};if(d=n.querySelector(Qn(s)))f.loading=5;else{e=k({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ot.get(s))&&ro(e,a);var y=d=n.createElement("link");Je(y),tt(y,"link",e),y._p=new Promise(function(T,O){y.onload=T,y.onerror=O}),y.addEventListener("load",function(){f.loading|=1}),y.addEventListener("error",function(){f.loading|=2}),f.loading|=4,gs(d,t,n)}d={type:"stylesheet",instance:d,count:1,state:f},i.set(s,d)}}}function Og(e,t){xa.X(e,t);var a=Kl;if(a&&e){var n=hl(a).hoistableScripts,i=Jl(e),s=n.get(i);s||(s=a.querySelector(Zn(i)),s||(e=k({src:e,async:!0},t),(t=Ot.get(i))&&co(e,t),s=a.createElement("script"),Je(s),tt(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function _g(e,t){xa.M(e,t);var a=Kl;if(a&&e){var n=hl(a).hoistableScripts,i=Jl(e),s=n.get(i);s||(s=a.querySelector(Zn(i)),s||(e=k({src:e,async:!0,type:"module"},t),(t=Ot.get(i))&&co(e,t),s=a.createElement("script"),Je(s),tt(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function Yf(e,t,a,n){var i=(i=oe.current)?xs(i):null;if(!i)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Xl(a.href),a=hl(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Xl(a.href);var s=hl(i).hoistableStyles,d=s.get(e);if(d||(i=i.ownerDocument||i,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,d),(s=i.querySelector(Qn(e)))&&!s._p&&(d.instance=s,d.state.loading=5),Ot.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ot.set(e,a),s||Dg(i,e,a,d.state))),t&&n===null)throw Error(u(528,""));return d}if(t&&n!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Jl(a),a=hl(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Xl(e){return'href="'+St(e)+'"'}function Qn(e){return'link[rel="stylesheet"]['+e+"]"}function qf(e){return k({},e,{"data-precedence":e.precedence,precedence:null})}function Dg(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),tt(t,"link",a),Je(t),e.head.appendChild(t))}function Jl(e){return'[src="'+St(e)+'"]'}function Zn(e){return"script[async]"+e}function Gf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+St(a.href)+'"]');if(n)return t.instance=n,Je(n),n;var i=k({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Je(n),tt(n,"style",i),gs(n,a.precedence,e),t.instance=n;case"stylesheet":i=Xl(a.href);var s=e.querySelector(Qn(i));if(s)return t.state.loading|=4,t.instance=s,Je(s),s;n=qf(a),(i=Ot.get(i))&&ro(n,i),s=(e.ownerDocument||e).createElement("link"),Je(s);var d=s;return d._p=new Promise(function(f,y){d.onload=f,d.onerror=y}),tt(s,"link",n),t.state.loading|=4,gs(s,a.precedence,e),t.instance=s;case"script":return s=Jl(a.src),(i=e.querySelector(Zn(s)))?(t.instance=i,Je(i),i):(n=a,(i=Ot.get(s))&&(n=k({},a),co(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Je(i),tt(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,gs(n,a.precedence,e));return t.instance}function gs(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,s=i,d=0;d<n.length;d++){var f=n[d];if(f.dataset.precedence===t)s=f;else if(s!==i)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function ro(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function co(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var bs=null;function Vf(e,t,a){if(bs===null){var n=new Map,i=bs=new Map;i.set(a,n)}else i=bs,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var s=a[i];if(!(s[rn]||s[Fe]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var d=s.getAttribute(t)||"";d=e+d;var f=n.get(d);f?f.push(s):n.set(d,[s])}}return n}function Qf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Ug(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Zf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Bg(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=Xl(n.href),s=t.querySelector(Qn(i));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=vs.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=s,Je(s);return}s=t.ownerDocument||t,n=qf(n),(i=Ot.get(i))&&ro(n,i),s=s.createElement("link"),Je(s);var d=s;d._p=new Promise(function(f,y){d.onload=f,d.onerror=y}),tt(s,"link",n),a.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=vs.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var oo=0;function Hg(e,t){return e.stylesheets&&e.count===0&&js(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&js(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&oo===0&&(oo=62500*bg());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&js(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>oo?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function vs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)js(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ys=null;function js(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ys=new Map,t.forEach(Lg,e),ys=null,vs.call(e))}function Lg(e,t){if(!(t.state.loading&4)){var a=ys.get(e);if(a)var n=a.get(null);else{a=new Map,ys.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var d=i[s];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(a.set(d.dataset.precedence,d),n=d)}n&&a.set(null,n)}i=t.instance,d=i.getAttribute("data-precedence"),s=a.get(d)||n,s===n&&a.set(null,i),a.set(d,i),this.count++,n=vs.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),s?s.parentNode.insertBefore(i,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Kn={$$typeof:H,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function Yg(e,t,a,n,i,s,d,f,y){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nr(0),this.hiddenUpdates=nr(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function Kf(e,t,a,n,i,s,d,f,y,T,O,D){return e=new Yg(e,t,a,d,y,T,O,D,f),t=1,s===!0&&(t|=24),s=bt(3,null,null,t),e.current=s,s.stateNode=e,t=Gr(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:n,isDehydrated:a,cache:t},Kr(s),e}function Xf(e){return e?(e=Sl,e):Sl}function Jf(e,t,a,n,i,s){i=Xf(i),n.context===null?n.context=i:n.pendingContext=i,n=Ea(t),n.payload={element:a},s=s===void 0?null:s,s!==null&&(n.callback=s),a=Aa(e,n,t),a!==null&&(ft(a,e,t),wn(a,e,t))}function $f(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function uo(e,t){$f(e,t),(e=e.alternate)&&$f(e,t)}function Wf(e){if(e.tag===13||e.tag===31){var t=$a(e,67108864);t!==null&&ft(t,e,67108864),uo(e,67108864)}}function Ff(e){if(e.tag===13||e.tag===31){var t=kt();t=ir(t);var a=$a(e,t);a!==null&&ft(a,e,t),uo(e,t)}}var Ns=!0;function qg(e,t,a,n){var i=C.T;C.T=null;var s=Z.p;try{Z.p=2,po(e,t,a,n)}finally{Z.p=s,C.T=i}}function Gg(e,t,a,n){var i=C.T;C.T=null;var s=Z.p;try{Z.p=8,po(e,t,a,n)}finally{Z.p=s,C.T=i}}function po(e,t,a,n){if(Ns){var i=fo(n);if(i===null)Fc(e,t,n,ks,a),If(e,n);else if(Qg(i,e,t,a,n))n.stopPropagation();else if(If(e,n),t&4&&-1<Vg.indexOf(e)){for(;i!==null;){var s=ml(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var d=Qa(s.pendingLanes);if(d!==0){var f=s;for(f.pendingLanes|=2,f.entangledLanes|=2;d;){var y=1<<31-xt(d);f.entanglements[1]|=y,d&=~y}Zt(s),(we&6)===0&&(is=mt()+500,Yn(0))}}break;case 31:case 13:f=$a(s,2),f!==null&&ft(f,s,2),rs(),uo(s,2)}if(s=fo(n),s===null&&Fc(e,t,n,ks,a),s===i)break;i=s}i!==null&&n.stopPropagation()}else Fc(e,t,n,null,a)}}function fo(e){return e=mr(e),mo(e)}var ks=null;function mo(e){if(ks=null,e=fl(e),e!==null){var t=m(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=x(t),e!==null)return e;e=null}else if(a===31){if(e=g(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ks=e,null}function Pf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(zh()){case iu:return 2;case su:return 8;case pi:case Th:return 32;case ru:return 268435456;default:return 32}default:return 32}}var ho=!1,Ha=null,La=null,Ya=null,Xn=new Map,Jn=new Map,qa=[],Vg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function If(e,t){switch(e){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":Xn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jn.delete(t.pointerId)}}function $n(e,t,a,n,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},t!==null&&(t=ml(t),t!==null&&Wf(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Qg(e,t,a,n,i){switch(t){case"focusin":return Ha=$n(Ha,e,t,a,n,i),!0;case"dragenter":return La=$n(La,e,t,a,n,i),!0;case"mouseover":return Ya=$n(Ya,e,t,a,n,i),!0;case"pointerover":var s=i.pointerId;return Xn.set(s,$n(Xn.get(s)||null,e,t,a,n,i)),!0;case"gotpointercapture":return s=i.pointerId,Jn.set(s,$n(Jn.get(s)||null,e,t,a,n,i)),!0}return!1}function em(e){var t=fl(e.target);if(t!==null){var a=m(t);if(a!==null){if(t=a.tag,t===13){if(t=x(a),t!==null){e.blockedOn=t,fu(e.priority,function(){Ff(a)});return}}else if(t===31){if(t=g(a),t!==null){e.blockedOn=t,fu(e.priority,function(){Ff(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ws(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=fo(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);fr=n,a.target.dispatchEvent(n),fr=null}else return t=ml(a),t!==null&&Wf(t),e.blockedOn=a,!1;t.shift()}return!0}function tm(e,t,a){ws(e)&&a.delete(t)}function Zg(){ho=!1,Ha!==null&&ws(Ha)&&(Ha=null),La!==null&&ws(La)&&(La=null),Ya!==null&&ws(Ya)&&(Ya=null),Xn.forEach(tm),Jn.forEach(tm)}function Ss(e,t){e.blockedOn===t&&(e.blockedOn=null,ho||(ho=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Zg)))}var Es=null;function am(e){Es!==e&&(Es=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Es===e&&(Es=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(mo(n||a)===null)continue;break}var s=ml(a);s!==null&&(e.splice(t,3),t-=3,pc(s,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function $l(e){function t(y){return Ss(y,e)}Ha!==null&&Ss(Ha,e),La!==null&&Ss(La,e),Ya!==null&&Ss(Ya,e),Xn.forEach(t),Jn.forEach(t);for(var a=0;a<qa.length;a++){var n=qa[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<qa.length&&(a=qa[0],a.blockedOn===null);)em(a),a.blockedOn===null&&qa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],s=a[n+1],d=i[rt]||null;if(typeof s=="function")d||am(a);else if(d){var f=null;if(s&&s.hasAttribute("formAction")){if(i=s,d=s[rt]||null)f=d.formAction;else if(mo(i)!==null)continue}else f=d.action;typeof f=="function"?a[n+1]=f:(a.splice(n,3),n-=3),am(a)}}}function lm(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(d){return i=d})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function xo(e){this._internalRoot=e}As.prototype.render=xo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,n=kt();Jf(a,n,e,t,null,null)},As.prototype.unmount=xo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Jf(e.current,2,null,e,null,null),rs(),t[pl]=null}};function As(e){this._internalRoot=e}As.prototype.unstable_scheduleHydration=function(e){if(e){var t=pu();e={blockedOn:null,target:e,priority:t};for(var a=0;a<qa.length&&t!==0&&t<qa[a].priority;a++);qa.splice(a,0,e),a===0&&em(e)}};var nm=o.version;if(nm!=="19.2.4")throw Error(u(527,nm,"19.2.4"));Z.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=h(t),e=e!==null?w(e):null,e=e===null?null:e.stateNode,e};var Kg={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zs.isDisabled&&zs.supportsFiber)try{ln=zs.inject(Kg),ht=zs}catch{}}return Fn.createRoot=function(e,t){if(!p(e))throw Error(u(299));var a=!1,n="",i=up,s=dp,d=pp;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=Kf(e,1,!1,null,null,a,n,null,i,s,d,lm),e[pl]=t.current,Wc(e),new xo(t)},Fn.hydrateRoot=function(e,t,a){if(!p(e))throw Error(u(299));var n=!1,i="",s=up,d=dp,f=pp,y=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(d=a.onCaughtError),a.onRecoverableError!==void 0&&(f=a.onRecoverableError),a.formState!==void 0&&(y=a.formState)),t=Kf(e,1,!0,t,a??null,n,i,y,s,d,f,lm),t.context=Xf(null),a=t.current,n=kt(),n=ir(n),i=Ea(n),i.callback=null,Aa(a,i,n),a=n,t.current.lanes=a,sn(t,a),Zt(t),e[pl]=t.current,Wc(e),new As(t)},Fn.version="19.2.4",Fn}var mm;function a0(){if(mm)return vo.exports;mm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),vo.exports=t0(),vo.exports}var l0=a0();var hm="popstate";function xm(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function n0(r={}){function o(u,p){let m=p.state?.masked,{pathname:x,search:g,hash:b}=m||u.location;return Do("",{pathname:x,search:g,hash:b},p.state&&p.state.usr||null,p.state&&p.state.key||"default",m?{pathname:u.location.pathname,search:u.location.search,hash:u.location.hash}:void 0)}function c(u,p){return typeof p=="string"?p:ni(p)}return s0(o,c,null,r)}function Xe(r,o){if(r===!1||r===null||typeof r>"u")throw new Error(o)}function Xt(r,o){if(!r){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function i0(){return Math.random().toString(36).substring(2,10)}function gm(r,o){return{usr:r.state,key:r.key,idx:o,masked:r.unstable_mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function Do(r,o,c=null,u,p){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof o=="string"?si(o):o,state:c,key:o&&o.key||u||i0(),unstable_mask:p}}function ni({pathname:r="/",search:o="",hash:c=""}){return o&&o!=="?"&&(r+=o.charAt(0)==="?"?o:"?"+o),c&&c!=="#"&&(r+=c.charAt(0)==="#"?c:"#"+c),r}function si(r){let o={};if(r){let c=r.indexOf("#");c>=0&&(o.hash=r.substring(c),r=r.substring(0,c));let u=r.indexOf("?");u>=0&&(o.search=r.substring(u),r=r.substring(0,u)),r&&(o.pathname=r)}return o}function s0(r,o,c,u={}){let{window:p=document.defaultView,v5Compat:m=!1}=u,x=p.history,g="POP",b=null,h=w();h==null&&(h=0,x.replaceState({...x.state,idx:h},""));function w(){return(x.state||{idx:null}).idx}function k(){g="POP";let q=w(),Y=q==null?null:q-h;h=q,b&&b({action:g,location:G.location,delta:Y})}function B(q,Y){g="PUSH";let V=xm(q)?q:Do(G.location,q,Y);h=w()+1;let H=gm(V,h),X=G.createHref(V.unstable_mask||V);try{x.pushState(H,"",X)}catch(le){if(le instanceof DOMException&&le.name==="DataCloneError")throw le;p.location.assign(X)}m&&b&&b({action:g,location:G.location,delta:1})}function Q(q,Y){g="REPLACE";let V=xm(q)?q:Do(G.location,q,Y);h=w();let H=gm(V,h),X=G.createHref(V.unstable_mask||V);x.replaceState(H,"",X),m&&b&&b({action:g,location:G.location,delta:0})}function S(q){return r0(q)}let G={get action(){return g},get location(){return r(p,x)},listen(q){if(b)throw new Error("A history only accepts one active listener");return p.addEventListener(hm,k),b=q,()=>{p.removeEventListener(hm,k),b=null}},createHref(q){return o(p,q)},createURL:S,encodeLocation(q){let Y=S(q);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:B,replace:Q,go(q){return x.go(q)}};return G}function r0(r,o=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),Xe(c,"No window.location.(origin|href) available to create URL");let u=typeof r=="string"?r:ni(r);return u=u.replace(/ $/,"%20"),!o&&u.startsWith("//")&&(u=c+u),new URL(u,c)}function Qm(r,o,c="/"){return c0(r,o,c,!1)}function c0(r,o,c,u){let p=typeof o=="string"?si(o):o,m=ga(p.pathname||"/",c);if(m==null)return null;let x=Zm(r);o0(x);let g=null;for(let b=0;g==null&&b<x.length;++b){let h=y0(m);g=b0(x[b],h,u)}return g}function Zm(r,o=[],c=[],u="",p=!1){let m=(x,g,b=p,h)=>{let w={relativePath:h===void 0?x.path||"":h,caseSensitive:x.caseSensitive===!0,childrenIndex:g,route:x};if(w.relativePath.startsWith("/")){if(!w.relativePath.startsWith(u)&&b)return;Xe(w.relativePath.startsWith(u),`Absolute route path "${w.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),w.relativePath=w.relativePath.slice(u.length)}let k=Kt([u,w.relativePath]),B=c.concat(w);x.children&&x.children.length>0&&(Xe(x.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${k}".`),Zm(x.children,o,B,k,b)),!(x.path==null&&!x.index)&&o.push({path:k,score:x0(k,x.index),routesMeta:B})};return r.forEach((x,g)=>{if(x.path===""||!x.path?.includes("?"))m(x,g);else for(let b of Km(x.path))m(x,g,!0,b)}),o}function Km(r){let o=r.split("/");if(o.length===0)return[];let[c,...u]=o,p=c.endsWith("?"),m=c.replace(/\?$/,"");if(u.length===0)return p?[m,""]:[m];let x=Km(u.join("/")),g=[];return g.push(...x.map(b=>b===""?m:[m,b].join("/"))),p&&g.push(...x),g.map(b=>r.startsWith("/")&&b===""?"/":b)}function o0(r){r.sort((o,c)=>o.score!==c.score?c.score-o.score:g0(o.routesMeta.map(u=>u.childrenIndex),c.routesMeta.map(u=>u.childrenIndex)))}var u0=/^:[\w-]+$/,d0=3,p0=2,f0=1,m0=10,h0=-2,bm=r=>r==="*";function x0(r,o){let c=r.split("/"),u=c.length;return c.some(bm)&&(u+=h0),o&&(u+=p0),c.filter(p=>!bm(p)).reduce((p,m)=>p+(u0.test(m)?d0:m===""?f0:m0),u)}function g0(r,o){return r.length===o.length&&r.slice(0,-1).every((u,p)=>u===o[p])?r[r.length-1]-o[o.length-1]:0}function b0(r,o,c=!1){let{routesMeta:u}=r,p={},m="/",x=[];for(let g=0;g<u.length;++g){let b=u[g],h=g===u.length-1,w=m==="/"?o:o.slice(m.length)||"/",k=Gs({path:b.relativePath,caseSensitive:b.caseSensitive,end:h},w),B=b.route;if(!k&&h&&c&&!u[u.length-1].route.index&&(k=Gs({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},w)),!k)return null;Object.assign(p,k.params),x.push({params:p,pathname:Kt([m,k.pathname]),pathnameBase:w0(Kt([m,k.pathnameBase])),route:B}),k.pathnameBase!=="/"&&(m=Kt([m,k.pathnameBase]))}return x}function Gs(r,o){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[c,u]=v0(r.path,r.caseSensitive,r.end),p=o.match(c);if(!p)return null;let m=p[0],x=m.replace(/(.)\/+$/,"$1"),g=p.slice(1);return{params:u.reduce((h,{paramName:w,isOptional:k},B)=>{if(w==="*"){let S=g[B]||"";x=m.slice(0,m.length-S.length).replace(/(.)\/+$/,"$1")}const Q=g[B];return k&&!Q?h[w]=void 0:h[w]=(Q||"").replace(/%2F/g,"/"),h},{}),pathname:m,pathnameBase:x,pattern:r}}function v0(r,o=!1,c=!0){Xt(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let u=[],p="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(x,g,b,h,w)=>{if(u.push({paramName:g,isOptional:b!=null}),b){let k=w.charAt(h+x.length);return k&&k!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(u.push({paramName:"*"}),p+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?p+="\\/*$":r!==""&&r!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,o?void 0:"i"),u]}function y0(r){try{return r.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Xt(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),r}}function ga(r,o){if(o==="/")return r;if(!r.toLowerCase().startsWith(o.toLowerCase()))return null;let c=o.endsWith("/")?o.length-1:o.length,u=r.charAt(c);return u&&u!=="/"?null:r.slice(c)||"/"}var j0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function N0(r,o="/"){let{pathname:c,search:u="",hash:p=""}=typeof r=="string"?si(r):r,m;return c?(c=c.replace(/\/\/+/g,"/"),c.startsWith("/")?m=vm(c.substring(1),"/"):m=vm(c,o)):m=o,{pathname:m,search:S0(u),hash:E0(p)}}function vm(r,o){let c=o.replace(/\/+$/,"").split("/");return r.split("/").forEach(p=>{p===".."?c.length>1&&c.pop():p!=="."&&c.push(p)}),c.length>1?c.join("/"):"/"}function ko(r,o,c,u){return`Cannot include a '${r}' character in a manually specified \`to.${o}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function k0(r){return r.filter((o,c)=>c===0||o.route.path&&o.route.path.length>0)}function Xm(r){let o=k0(r);return o.map((c,u)=>u===o.length-1?c.pathname:c.pathnameBase)}function Zo(r,o,c,u=!1){let p;typeof r=="string"?p=si(r):(p={...r},Xe(!p.pathname||!p.pathname.includes("?"),ko("?","pathname","search",p)),Xe(!p.pathname||!p.pathname.includes("#"),ko("#","pathname","hash",p)),Xe(!p.search||!p.search.includes("#"),ko("#","search","hash",p)));let m=r===""||p.pathname==="",x=m?"/":p.pathname,g;if(x==null)g=c;else{let k=o.length-1;if(!u&&x.startsWith("..")){let B=x.split("/");for(;B[0]==="..";)B.shift(),k-=1;p.pathname=B.join("/")}g=k>=0?o[k]:"/"}let b=N0(p,g),h=x&&x!=="/"&&x.endsWith("/"),w=(m||x===".")&&c.endsWith("/");return!b.pathname.endsWith("/")&&(h||w)&&(b.pathname+="/"),b}var Kt=r=>r.join("/").replace(/\/\/+/g,"/"),w0=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),S0=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,E0=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,A0=class{constructor(r,o,c,u=!1){this.status=r,this.statusText=o||"",this.internal=u,c instanceof Error?(this.data=c.toString(),this.error=c):this.data=c}};function z0(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function T0(r){return r.map(o=>o.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Jm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function $m(r,o){let c=r;if(typeof c!="string"||!j0.test(c))return{absoluteURL:void 0,isExternal:!1,to:c};let u=c,p=!1;if(Jm)try{let m=new URL(window.location.href),x=c.startsWith("//")?new URL(m.protocol+c):new URL(c),g=ga(x.pathname,o);x.origin===m.origin&&g!=null?c=g+x.search+x.hash:p=!0}catch{Xt(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:p,to:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Wm=["POST","PUT","PATCH","DELETE"];new Set(Wm);var R0=["GET",...Wm];new Set(R0);var en=v.createContext(null);en.displayName="DataRouter";var Ks=v.createContext(null);Ks.displayName="DataRouterState";var C0=v.createContext(!1),Fm=v.createContext({isTransitioning:!1});Fm.displayName="ViewTransition";var M0=v.createContext(new Map);M0.displayName="Fetchers";var O0=v.createContext(null);O0.displayName="Await";var _t=v.createContext(null);_t.displayName="Navigation";var Xs=v.createContext(null);Xs.displayName="Location";var Wt=v.createContext({outlet:null,matches:[],isDataRoute:!1});Wt.displayName="Route";var Ko=v.createContext(null);Ko.displayName="RouteError";var Pm="REACT_ROUTER_ERROR",_0="REDIRECT",D0="ROUTE_ERROR_RESPONSE";function U0(r){if(r.startsWith(`${Pm}:${_0}:{`))try{let o=JSON.parse(r.slice(28));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.location=="string"&&typeof o.reloadDocument=="boolean"&&typeof o.replace=="boolean")return o}catch{}}function B0(r){if(r.startsWith(`${Pm}:${D0}:{`))try{let o=JSON.parse(r.slice(40));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string")return new A0(o.status,o.statusText,o.data)}catch{}}function H0(r,{relative:o}={}){Xe(ri(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:u}=v.useContext(_t),{hash:p,pathname:m,search:x}=ci(r,{relative:o}),g=m;return c!=="/"&&(g=m==="/"?c:Kt([c,m])),u.createHref({pathname:g,search:x,hash:p})}function ri(){return v.useContext(Xs)!=null}function qt(){return Xe(ri(),"useLocation() may be used only in the context of a <Router> component."),v.useContext(Xs).location}var Im="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function eh(r){v.useContext(_t).static||v.useLayoutEffect(r)}function Ft(){let{isDataRoute:r}=v.useContext(Wt);return r?P0():L0()}function L0(){Xe(ri(),"useNavigate() may be used only in the context of a <Router> component.");let r=v.useContext(en),{basename:o,navigator:c}=v.useContext(_t),{matches:u}=v.useContext(Wt),{pathname:p}=qt(),m=JSON.stringify(Xm(u)),x=v.useRef(!1);return eh(()=>{x.current=!0}),v.useCallback((b,h={})=>{if(Xt(x.current,Im),!x.current)return;if(typeof b=="number"){c.go(b);return}let w=Zo(b,JSON.parse(m),p,h.relative==="path");r==null&&o!=="/"&&(w.pathname=w.pathname==="/"?o:Kt([o,w.pathname])),(h.replace?c.replace:c.push)(w,h.state,h)},[o,c,m,p,r])}v.createContext(null);function Y0(){let{matches:r}=v.useContext(Wt),o=r[r.length-1];return o?o.params:{}}function ci(r,{relative:o}={}){let{matches:c}=v.useContext(Wt),{pathname:u}=qt(),p=JSON.stringify(Xm(c));return v.useMemo(()=>Zo(r,JSON.parse(p),u,o==="path"),[r,p,u,o])}function q0(r,o){return th(r)}function th(r,o,c){Xe(ri(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=v.useContext(_t),{matches:p}=v.useContext(Wt),m=p[p.length-1],x=m?m.params:{},g=m?m.pathname:"/",b=m?m.pathnameBase:"/",h=m&&m.route;{let q=h&&h.path||"";lh(g,!h||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let w=qt(),k;k=w;let B=k.pathname||"/",Q=B;if(b!=="/"){let q=b.replace(/^\//,"").split("/");Q="/"+B.replace(/^\//,"").split("/").slice(q.length).join("/")}let S=Qm(r,{pathname:Q});return Xt(h||S!=null,`No routes matched location "${k.pathname}${k.search}${k.hash}" `),Xt(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${k.pathname}${k.search}${k.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),K0(S&&S.map(q=>Object.assign({},q,{params:Object.assign({},x,q.params),pathname:Kt([b,u.encodeLocation?u.encodeLocation(q.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?b:Kt([b,u.encodeLocation?u.encodeLocation(q.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathnameBase])})),p,c)}function G0(){let r=F0(),o=z0(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),c=r instanceof Error?r.stack:null,u="rgba(200,200,200, 0.5)",p={padding:"0.5rem",backgroundColor:u},m={padding:"2px 4px",backgroundColor:u},x=null;return console.error("Error handled by React Router default ErrorBoundary:",r),x=v.createElement(v.Fragment,null,v.createElement("p",null,"💿 Hey developer 👋"),v.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",v.createElement("code",{style:m},"ErrorBoundary")," or"," ",v.createElement("code",{style:m},"errorElement")," prop on your route.")),v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},o),c?v.createElement("pre",{style:p},c):null,x)}var V0=v.createElement(G0,null),ah=class extends v.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,o){return o.location!==r.location||o.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:o.error,location:o.location,revalidation:r.revalidation||o.revalidation}}componentDidCatch(r,o){this.props.onError?this.props.onError(r,o):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const c=B0(r.digest);c&&(r=c)}let o=r!==void 0?v.createElement(Wt.Provider,{value:this.props.routeContext},v.createElement(Ko.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?v.createElement(Q0,{error:r},o):o}};ah.contextType=C0;var wo=new WeakMap;function Q0({children:r,error:o}){let{basename:c}=v.useContext(_t);if(typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){let u=U0(o.digest);if(u){let p=wo.get(o);if(p)throw p;let m=$m(u.location,c);if(Jm&&!wo.get(o))if(m.isExternal||u.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const x=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:u.replace}));throw wo.set(o,x),x}return v.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return r}function Z0({routeContext:r,match:o,children:c}){let u=v.useContext(en);return u&&u.static&&u.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=o.route.id),v.createElement(Wt.Provider,{value:r},c)}function K0(r,o=[],c){let u=c?.state;if(r==null){if(!u)return null;if(u.errors)r=u.matches;else if(o.length===0&&!u.initialized&&u.matches.length>0)r=u.matches;else return null}let p=r,m=u?.errors;if(m!=null){let w=p.findIndex(k=>k.route.id&&m?.[k.route.id]!==void 0);Xe(w>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),p=p.slice(0,Math.min(p.length,w+1))}let x=!1,g=-1;if(c&&u){x=u.renderFallback;for(let w=0;w<p.length;w++){let k=p[w];if((k.route.HydrateFallback||k.route.hydrateFallbackElement)&&(g=w),k.route.id){let{loaderData:B,errors:Q}=u,S=k.route.loader&&!B.hasOwnProperty(k.route.id)&&(!Q||Q[k.route.id]===void 0);if(k.route.lazy||S){c.isStatic&&(x=!0),g>=0?p=p.slice(0,g+1):p=[p[0]];break}}}}let b=c?.onError,h=u&&b?(w,k)=>{b(w,{location:u.location,params:u.matches?.[0]?.params??{},unstable_pattern:T0(u.matches),errorInfo:k})}:void 0;return p.reduceRight((w,k,B)=>{let Q,S=!1,G=null,q=null;u&&(Q=m&&k.route.id?m[k.route.id]:void 0,G=k.route.errorElement||V0,x&&(g<0&&B===0?(lh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,q=null):g===B&&(S=!0,q=k.route.hydrateFallbackElement||null)));let Y=o.concat(p.slice(0,B+1)),V=()=>{let H;return Q?H=G:S?H=q:k.route.Component?H=v.createElement(k.route.Component,null):k.route.element?H=k.route.element:H=w,v.createElement(Z0,{match:k,routeContext:{outlet:w,matches:Y,isDataRoute:u!=null},children:H})};return u&&(k.route.ErrorBoundary||k.route.errorElement||B===0)?v.createElement(ah,{location:u.location,revalidation:u.revalidation,component:G,error:Q,children:V(),routeContext:{outlet:null,matches:Y,isDataRoute:!0},onError:h}):V()},null)}function Xo(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function X0(r){let o=v.useContext(en);return Xe(o,Xo(r)),o}function J0(r){let o=v.useContext(Ks);return Xe(o,Xo(r)),o}function $0(r){let o=v.useContext(Wt);return Xe(o,Xo(r)),o}function Jo(r){let o=$0(r),c=o.matches[o.matches.length-1];return Xe(c.route.id,`${r} can only be used on routes that contain a unique "id"`),c.route.id}function W0(){return Jo("useRouteId")}function F0(){let r=v.useContext(Ko),o=J0("useRouteError"),c=Jo("useRouteError");return r!==void 0?r:o.errors?.[c]}function P0(){let{router:r}=X0("useNavigate"),o=Jo("useNavigate"),c=v.useRef(!1);return eh(()=>{c.current=!0}),v.useCallback(async(p,m={})=>{Xt(c.current,Im),c.current&&(typeof p=="number"?await r.navigate(p):await r.navigate(p,{fromRouteId:o,...m}))},[r,o])}var ym={};function lh(r,o,c){!o&&!ym[r]&&(ym[r]=!0,Xt(!1,c))}v.memo(I0);function I0({routes:r,future:o,state:c,isStatic:u,onError:p}){return th(r,void 0,{state:c,isStatic:u,onError:p})}function eb({basename:r="/",children:o=null,location:c,navigationType:u="POP",navigator:p,static:m=!1,unstable_useTransitions:x}){Xe(!ri(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=r.replace(/^\/*/,"/"),b=v.useMemo(()=>({basename:g,navigator:p,static:m,unstable_useTransitions:x,future:{}}),[g,p,m,x]);typeof c=="string"&&(c=si(c));let{pathname:h="/",search:w="",hash:k="",state:B=null,key:Q="default",unstable_mask:S}=c,G=v.useMemo(()=>{let q=ga(h,g);return q==null?null:{location:{pathname:q,search:w,hash:k,state:B,key:Q,unstable_mask:S},navigationType:u}},[g,h,w,k,B,Q,u,S]);return Xt(G!=null,`<Router basename="${g}"> is not able to match the URL "${h}${w}${k}" because it does not start with the basename, so the <Router> won't render anything.`),G==null?null:v.createElement(_t.Provider,{value:b},v.createElement(Xs.Provider,{children:o,value:G}))}var Ls="get",Ys="application/x-www-form-urlencoded";function Js(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function tb(r){return Js(r)&&r.tagName.toLowerCase()==="button"}function ab(r){return Js(r)&&r.tagName.toLowerCase()==="form"}function lb(r){return Js(r)&&r.tagName.toLowerCase()==="input"}function nb(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function ib(r,o){return r.button===0&&(!o||o==="_self")&&!nb(r)}var Ts=null;function sb(){if(Ts===null)try{new FormData(document.createElement("form"),0),Ts=!1}catch{Ts=!0}return Ts}var rb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function So(r){return r!=null&&!rb.has(r)?(Xt(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ys}"`),null):r}function cb(r,o){let c,u,p,m,x;if(ab(r)){let g=r.getAttribute("action");u=g?ga(g,o):null,c=r.getAttribute("method")||Ls,p=So(r.getAttribute("enctype"))||Ys,m=new FormData(r)}else if(tb(r)||lb(r)&&(r.type==="submit"||r.type==="image")){let g=r.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=r.getAttribute("formaction")||g.getAttribute("action");if(u=b?ga(b,o):null,c=r.getAttribute("formmethod")||g.getAttribute("method")||Ls,p=So(r.getAttribute("formenctype"))||So(g.getAttribute("enctype"))||Ys,m=new FormData(g,r),!sb()){let{name:h,type:w,value:k}=r;if(w==="image"){let B=h?`${h}.`:"";m.append(`${B}x`,"0"),m.append(`${B}y`,"0")}else h&&m.append(h,k)}}else{if(Js(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=Ls,u=null,p=Ys,x=r}return m&&p==="text/plain"&&(x=m,m=void 0),{action:u,method:c.toLowerCase(),encType:p,formData:m,body:x}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function $o(r,o){if(r===!1||r===null||typeof r>"u")throw new Error(o)}function ob(r,o,c,u){let p=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return c?p.pathname.endsWith("/")?p.pathname=`${p.pathname}_.${u}`:p.pathname=`${p.pathname}.${u}`:p.pathname==="/"?p.pathname=`_root.${u}`:o&&ga(p.pathname,o)==="/"?p.pathname=`${o.replace(/\/$/,"")}/_root.${u}`:p.pathname=`${p.pathname.replace(/\/$/,"")}.${u}`,p}async function ub(r,o){if(r.id in o)return o[r.id];try{let c=await import(r.module);return o[r.id]=c,c}catch(c){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function db(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function pb(r,o,c){let u=await Promise.all(r.map(async p=>{let m=o.routes[p.route.id];if(m){let x=await ub(m,c);return x.links?x.links():[]}return[]}));return xb(u.flat(1).filter(db).filter(p=>p.rel==="stylesheet"||p.rel==="preload").map(p=>p.rel==="stylesheet"?{...p,rel:"prefetch",as:"style"}:{...p,rel:"prefetch"}))}function jm(r,o,c,u,p,m){let x=(b,h)=>c[h]?b.route.id!==c[h].route.id:!0,g=(b,h)=>c[h].pathname!==b.pathname||c[h].route.path?.endsWith("*")&&c[h].params["*"]!==b.params["*"];return m==="assets"?o.filter((b,h)=>x(b,h)||g(b,h)):m==="data"?o.filter((b,h)=>{let w=u.routes[b.route.id];if(!w||!w.hasLoader)return!1;if(x(b,h)||g(b,h))return!0;if(b.route.shouldRevalidate){let k=b.route.shouldRevalidate({currentUrl:new URL(p.pathname+p.search+p.hash,window.origin),currentParams:c[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof k=="boolean")return k}return!0}):[]}function fb(r,o,{includeHydrateFallback:c}={}){return mb(r.map(u=>{let p=o.routes[u.route.id];if(!p)return[];let m=[p.module];return p.clientActionModule&&(m=m.concat(p.clientActionModule)),p.clientLoaderModule&&(m=m.concat(p.clientLoaderModule)),c&&p.hydrateFallbackModule&&(m=m.concat(p.hydrateFallbackModule)),p.imports&&(m=m.concat(p.imports)),m}).flat(1))}function mb(r){return[...new Set(r)]}function hb(r){let o={},c=Object.keys(r).sort();for(let u of c)o[u]=r[u];return o}function xb(r,o){let c=new Set;return new Set(o),r.reduce((u,p)=>{let m=JSON.stringify(hb(p));return c.has(m)||(c.add(m),u.push({key:m,link:p})),u},[])}function nh(){let r=v.useContext(en);return $o(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function gb(){let r=v.useContext(Ks);return $o(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Wo=v.createContext(void 0);Wo.displayName="FrameworkContext";function ih(){let r=v.useContext(Wo);return $o(r,"You must render this element inside a <HydratedRouter> element"),r}function bb(r,o){let c=v.useContext(Wo),[u,p]=v.useState(!1),[m,x]=v.useState(!1),{onFocus:g,onBlur:b,onMouseEnter:h,onMouseLeave:w,onTouchStart:k}=o,B=v.useRef(null);v.useEffect(()=>{if(r==="render"&&x(!0),r==="viewport"){let G=Y=>{Y.forEach(V=>{x(V.isIntersecting)})},q=new IntersectionObserver(G,{threshold:.5});return B.current&&q.observe(B.current),()=>{q.disconnect()}}},[r]),v.useEffect(()=>{if(u){let G=setTimeout(()=>{x(!0)},100);return()=>{clearTimeout(G)}}},[u]);let Q=()=>{p(!0)},S=()=>{p(!1),x(!1)};return c?r!=="intent"?[m,B,{}]:[m,B,{onFocus:Pn(g,Q),onBlur:Pn(b,S),onMouseEnter:Pn(h,Q),onMouseLeave:Pn(w,S),onTouchStart:Pn(k,Q)}]:[!1,B,{}]}function Pn(r,o){return c=>{r&&r(c),c.defaultPrevented||o(c)}}function vb({page:r,...o}){let{router:c}=nh(),u=v.useMemo(()=>Qm(c.routes,r,c.basename),[c.routes,r,c.basename]);return u?v.createElement(jb,{page:r,matches:u,...o}):null}function yb(r){let{manifest:o,routeModules:c}=ih(),[u,p]=v.useState([]);return v.useEffect(()=>{let m=!1;return pb(r,o,c).then(x=>{m||p(x)}),()=>{m=!0}},[r,o,c]),u}function jb({page:r,matches:o,...c}){let u=qt(),{future:p,manifest:m,routeModules:x}=ih(),{basename:g}=nh(),{loaderData:b,matches:h}=gb(),w=v.useMemo(()=>jm(r,o,h,m,u,"data"),[r,o,h,m,u]),k=v.useMemo(()=>jm(r,o,h,m,u,"assets"),[r,o,h,m,u]),B=v.useMemo(()=>{if(r===u.pathname+u.search+u.hash)return[];let G=new Set,q=!1;if(o.forEach(V=>{let H=m.routes[V.route.id];!H||!H.hasLoader||(!w.some(X=>X.route.id===V.route.id)&&V.route.id in b&&x[V.route.id]?.shouldRevalidate||H.hasClientLoader?q=!0:G.add(V.route.id))}),G.size===0)return[];let Y=ob(r,g,p.unstable_trailingSlashAwareDataRequests,"data");return q&&G.size>0&&Y.searchParams.set("_routes",o.filter(V=>G.has(V.route.id)).map(V=>V.route.id).join(",")),[Y.pathname+Y.search]},[g,p.unstable_trailingSlashAwareDataRequests,b,u,m,w,o,r,x]),Q=v.useMemo(()=>fb(k,m),[k,m]),S=yb(k);return v.createElement(v.Fragment,null,B.map(G=>v.createElement("link",{key:G,rel:"prefetch",as:"fetch",href:G,...c})),Q.map(G=>v.createElement("link",{key:G,rel:"modulepreload",href:G,...c})),S.map(({key:G,link:q})=>v.createElement("link",{key:G,nonce:c.nonce,...q,crossOrigin:q.crossOrigin??c.crossOrigin})))}function Nb(...r){return o=>{r.forEach(c=>{typeof c=="function"?c(o):c!=null&&(c.current=o)})}}var kb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{kb&&(window.__reactRouterVersion="7.13.1")}catch{}function wb({basename:r,children:o,unstable_useTransitions:c,window:u}){let p=v.useRef();p.current==null&&(p.current=n0({window:u,v5Compat:!0}));let m=p.current,[x,g]=v.useState({action:m.action,location:m.location}),b=v.useCallback(h=>{c===!1?g(h):v.startTransition(()=>g(h))},[c]);return v.useLayoutEffect(()=>m.listen(b),[m,b]),v.createElement(eb,{basename:r,children:o,location:x.location,navigationType:x.action,navigator:m,unstable_useTransitions:c})}var sh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ae=v.forwardRef(function({onClick:o,discover:c="render",prefetch:u="none",relative:p,reloadDocument:m,replace:x,unstable_mask:g,state:b,target:h,to:w,preventScrollReset:k,viewTransition:B,unstable_defaultShouldRevalidate:Q,...S},G){let{basename:q,navigator:Y,unstable_useTransitions:V}=v.useContext(_t),H=typeof w=="string"&&sh.test(w),X=$m(w,q);w=X.to;let le=H0(w,{relative:p}),W=qt(),P=null;if(g){let ke=Zo(g,[],W.unstable_mask?W.unstable_mask.pathname:"/",!0);q!=="/"&&(ke.pathname=ke.pathname==="/"?q:Kt([q,ke.pathname])),P=Y.createHref(ke)}let[Ne,U,ae]=bb(u,S),ne=zb(w,{replace:x,unstable_mask:g,state:b,target:h,preventScrollReset:k,relative:p,viewTransition:B,unstable_defaultShouldRevalidate:Q,unstable_useTransitions:V});function $(ke){o&&o(ke),ke.defaultPrevented||ne(ke)}let ie=!(X.isExternal||m),De=v.createElement("a",{...S,...ae,href:(ie?P:void 0)||X.absoluteURL||le,onClick:ie?$:o,ref:Nb(G,U),target:h,"data-discover":!H&&c==="render"?"true":void 0});return Ne&&!H?v.createElement(v.Fragment,null,De,v.createElement(vb,{page:le})):De});Ae.displayName="Link";var Sb=v.forwardRef(function({"aria-current":o="page",caseSensitive:c=!1,className:u="",end:p=!1,style:m,to:x,viewTransition:g,children:b,...h},w){let k=ci(x,{relative:h.relative}),B=qt(),Q=v.useContext(Ks),{navigator:S,basename:G}=v.useContext(_t),q=Q!=null&&Ob(k)&&g===!0,Y=S.encodeLocation?S.encodeLocation(k).pathname:k.pathname,V=B.pathname,H=Q&&Q.navigation&&Q.navigation.location?Q.navigation.location.pathname:null;c||(V=V.toLowerCase(),H=H?H.toLowerCase():null,Y=Y.toLowerCase()),H&&G&&(H=ga(H,G)||H);const X=Y!=="/"&&Y.endsWith("/")?Y.length-1:Y.length;let le=V===Y||!p&&V.startsWith(Y)&&V.charAt(X)==="/",W=H!=null&&(H===Y||!p&&H.startsWith(Y)&&H.charAt(Y.length)==="/"),P={isActive:le,isPending:W,isTransitioning:q},Ne=le?o:void 0,U;typeof u=="function"?U=u(P):U=[u,le?"active":null,W?"pending":null,q?"transitioning":null].filter(Boolean).join(" ");let ae=typeof m=="function"?m(P):m;return v.createElement(Ae,{...h,"aria-current":Ne,className:U,ref:w,style:ae,to:x,viewTransition:g},typeof b=="function"?b(P):b)});Sb.displayName="NavLink";var Eb=v.forwardRef(({discover:r="render",fetcherKey:o,navigate:c,reloadDocument:u,replace:p,state:m,method:x=Ls,action:g,onSubmit:b,relative:h,preventScrollReset:w,viewTransition:k,unstable_defaultShouldRevalidate:B,...Q},S)=>{let{unstable_useTransitions:G}=v.useContext(_t),q=Cb(),Y=Mb(g,{relative:h}),V=x.toLowerCase()==="get"?"get":"post",H=typeof g=="string"&&sh.test(g),X=le=>{if(b&&b(le),le.defaultPrevented)return;le.preventDefault();let W=le.nativeEvent.submitter,P=W?.getAttribute("formmethod")||x,Ne=()=>q(W||le.currentTarget,{fetcherKey:o,method:P,navigate:c,replace:p,state:m,relative:h,preventScrollReset:w,viewTransition:k,unstable_defaultShouldRevalidate:B});G&&c!==!1?v.startTransition(()=>Ne()):Ne()};return v.createElement("form",{ref:S,method:V,action:Y,onSubmit:u?b:X,...Q,"data-discover":!H&&r==="render"?"true":void 0})});Eb.displayName="Form";function Ab(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rh(r){let o=v.useContext(en);return Xe(o,Ab(r)),o}function zb(r,{target:o,replace:c,unstable_mask:u,state:p,preventScrollReset:m,relative:x,viewTransition:g,unstable_defaultShouldRevalidate:b,unstable_useTransitions:h}={}){let w=Ft(),k=qt(),B=ci(r,{relative:x});return v.useCallback(Q=>{if(ib(Q,o)){Q.preventDefault();let S=c!==void 0?c:ni(k)===ni(B),G=()=>w(r,{replace:S,unstable_mask:u,state:p,preventScrollReset:m,relative:x,viewTransition:g,unstable_defaultShouldRevalidate:b});h?v.startTransition(()=>G()):G()}},[k,w,B,c,u,p,o,r,m,x,g,b,h])}var Tb=0,Rb=()=>`__${String(++Tb)}__`;function Cb(){let{router:r}=rh("useSubmit"),{basename:o}=v.useContext(_t),c=W0(),u=r.fetch,p=r.navigate;return v.useCallback(async(m,x={})=>{let{action:g,method:b,encType:h,formData:w,body:k}=cb(m,o);if(x.navigate===!1){let B=x.fetcherKey||Rb();await u(B,c,x.action||g,{unstable_defaultShouldRevalidate:x.unstable_defaultShouldRevalidate,preventScrollReset:x.preventScrollReset,formData:w,body:k,formMethod:x.method||b,formEncType:x.encType||h,flushSync:x.flushSync})}else await p(x.action||g,{unstable_defaultShouldRevalidate:x.unstable_defaultShouldRevalidate,preventScrollReset:x.preventScrollReset,formData:w,body:k,formMethod:x.method||b,formEncType:x.encType||h,replace:x.replace,state:x.state,fromRouteId:c,flushSync:x.flushSync,viewTransition:x.viewTransition})},[u,p,o,c])}function Mb(r,{relative:o}={}){let{basename:c}=v.useContext(_t),u=v.useContext(Wt);Xe(u,"useFormAction must be used inside a RouteContext");let[p]=u.matches.slice(-1),m={...ci(r||".",{relative:o})},x=qt();if(r==null){m.search=x.search;let g=new URLSearchParams(m.search),b=g.getAll("index");if(b.some(w=>w==="")){g.delete("index"),b.filter(k=>k).forEach(k=>g.append("index",k));let w=g.toString();m.search=w?`?${w}`:""}}return(!r||r===".")&&p.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(m.pathname=m.pathname==="/"?c:Kt([c,m.pathname])),ni(m)}function Ob(r,{relative:o}={}){let c=v.useContext(Fm);Xe(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=rh("useViewTransitionState"),p=ci(r,{relative:o});if(!c.isTransitioning)return!1;let m=ga(c.currentLocation.pathname,u)||c.currentLocation.pathname,x=ga(c.nextLocation.pathname,u)||c.nextLocation.pathname;return Gs(p.pathname,x)!=null||Gs(p.pathname,m)!=null}function _b(){const r=qt();return l.jsxs("div",{className:"relative flex flex-col items-center justify-center h-screen text-center px-4 bg-[var(--bg)]",children:[l.jsx("div",{"aria-hidden":"true",className:"absolute bottom-0 text-9xl md:text-[12rem] font-black text-[var(--bg-2)] select-none pointer-events-none z-0",children:"404"}),l.jsxs("div",{className:"relative z-10",children:[l.jsx("h1",{className:"text-xl md:text-2xl font-medium mt-6 text-[var(--ink)]",children:"This page has not been generated"}),l.jsx("p",{className:"mt-2 text-base text-[var(--muted-2)] tracking-[0.04em]",children:r.pathname}),l.jsx("p",{className:"mt-4 text-lg md:text-xl text-[var(--muted)]",children:"Tell me more about this page, so I can generate it"})]})]})}const ch="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABACAYAAABfuzgrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDEwLjAtYzAwMCA3OS5kMjBlNDY2MzAsIDIwMjUvMTIvMDktMDI6MTE6MjMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NDIzNGE4NjAtMzY3My0yNzRkLTkxNjQtMGNmZTEzMjJiZTg3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBGMUQ1ODQ0NThBMzExRjE4Q0Y0RjdERUE1Q0YyN0ZEIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBGMUQ1ODQzNThBMzExRjE4Q0Y0RjdERUE1Q0YyN0ZEIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNy40IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFlNDEyZmE4LWI5NTgtZWY0YS05OTlhLTRmMzgxMTNjMzMyMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MjM0YTg2MC0zNjczLTI3NGQtOTE2NC0wY2ZlMTMyMmJlODciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6HZ9cfAAALMElEQVR42uxcTWzjWB1/sRM7zlfrzsx+sawgK3GAE8pwA4lD5jISx4z2gDimVw5I6YUz6YUzzQ0JcWhOXBBSIySkkZCWhr2wq4WdyaJlNDs7s43bpPlObH5/+zl1MkmnKSnNpP+f5Nr1e/772X6/9/96LyHHcQSDwZgNhV8Bg8EEYTCYIAwGE4TBYIIwGEwQBoMJwmAwQRgMJgiDwQRhMBhMEAaDCcJgMEEYDCYIg8EEYTCYIAzGa4XwVd/go4e/u5YVWd//4U9D/HkZK08Qwne++4OF6h89fyIe/vkPYnPrjrj/wS9Eq/7FQtf/65O/8ZdlsInF5GAwQZgcjHU3sVaVHP/++I+r9RD4AQ3PYcPe/zENx/0vsHe8vVtHePUc5+wax9s7Xr2scOyKPB6fl3Uy+JOmvePYJRzXfHmefBtlAmVO2i0TTjko32uQk8VxJdgur8i/lz3ZTuGcyXfP2WftCVwrgvJE8J6yOPB+fvKzX7MGYc1xKexhO4hoRh379NR5OneoRrR9LRorxBKbGUUdj5UFbI9pU1V1X9ONohFLZrCfKT+s6dPyWYOsETmy2IoXqFfBVsVWfk1ei4ktn0jdEtFo3LRHo7xVf7ozHPapbBvndzQtWheh0HikHw56YjQcUvkuCFGKGrGDkKJm/BG+3W6IXrc9IT+eNIUWNUzbHuVP6s93RqMBE2TNNEcFI+O9ePKWKUdNHw8kKUxJony/1y6gE9V63dbOkolCo+++PL67JJlWSFHQyZN5mFjyOCFOm3W38LRxBG6EhHn7G379avDiTrtpdTtNkdy8LVQ1Qqdqs+TrRjzvkPwQjqNx0W4ds5O+bmZVv9exjutPrYb1TIQj+nhrn1p0vobzpU67cVfTY6WU+VZ664339tEZCkt8lJyqhjPm7XdpM5fmztj2Njo5EW4Lx7Vu5/RcQg0H/Sl3yJ4ot0fDl+T3Oi1PvmPTwMEm1rr6HPjYwlZmnx8JbDAvuu3GdnLjTjYaS6VBlGKreVRtnx5XlnD7rI7RHaSsolfSyIz7jpbyXNAU1W6rIQaDrvDd//nxAfvcctt+ubzVtKodaBqXXGv6C52vFUGow372afXa7t88eVGKwGklswNmGZlcFWigeb5NRppovg9TmeEnkHmViWgx9wTk5RyvI1oz6mekXF+mFfCN5ppvw2EvK+tcxYtLjwaD8+T772F3xjNYgfPn+VK5QBCArinJPZtYE6Nh07pWckiUoUnGH9+Im5kZ/sQBbfBtTESHqvHkFsi0Rf8fBDo3dRI4wcoeNIcZgUknry2Q+aZHEzmYdMFOsu9GjCJ6LSCzGItvHIYjWmFGGyjCdEh+laJG9uCL5MJhfZk+U0C+uoc259SwNjYZZXsfe1E0vRiNJUz/mnA4UjSMRCEWS2IfPwy8k2m40TT4N3ldN2pGLEFbDsEDnAsVBGuQMzz69O9Q8aNVaEqt1zm1pFMv0OmzZBpRBEh2nEP4E2Zi441dlO3AjyGtUEad9MbWOzlom/3G8bN70BIUHLgLOW5nIrOKZEMz3fX6kiMG/S78IzdqtKcoSi6RulONaNFy8/g5mUuQqWVAkizqF1uNowoc5PHogZAtOlMqS502HA67kSpyoMnUWgbwjDV0esgP07Erv9OCqTV03wPeS7SGtpJvhbYoVF7sdlpWLJaAL2dYaP++8PIvGYSJ86cn9d3R5PclMuWjRtzSDeOePRwiaOC+iyquP4waRrHTbsGvapfXgiBf1P6xsCnl468HvxXW0YuFrn/73W9f2bOMRsMa2peRndqk/IAkyB6Rw7z9TUERHiJHS0aN4MBW1HAkB82QTW2+hZDo0xKZZv3eE0HRH/g0UvZAWF8/CSbCSEPlEht3hK7HLerg5AyTP9HrnlZVVcuiI5I2yfb7nSqRSkacdtHOXBhlPrGXOUi48u1hLhLSZsmnTltBaLkA7eEl/XAuFk9WnNFINI6/psGuFE9u4n2pIDDei27sts+CCDRo5GOJFBGtbDsjq9k49gfI6mAwqKY2zQy0SQH3WA+CfPThXy597eeffbLwNVdJEL8jhxXPZIEJ4JtMWWgOIgeN5LWAKebazkQIEIS0ThqOvpgqn4cqtE8ZJEI2W+xMO8o0Ykc8EphICApJEEERp07rRLhmmkdkazQVhfofBwkxgsZALkWonpU+EeXq99COUE/oxthMrNI5ap/MpFuUUwFp3MKIjmc4I0he03W8K4PqwsfrTQQQ3HsjXwPTLgMNY161P/J/IQjNyl0Ux/UXl772GpAlTeJnm6FRzKkOmQ5GplT14q8dsh6Q1lCV8FgjSc0ykb2WGu1CWvlqZsmcL384HEy1x5nnlGeR3Q88f9+cKh//TybeWmiQ+x/8crEL7C/F73/zK3ntz8lIWXANyp/EFWepRSCq4o2CmhHsvPXpDgsT69I3bFhfkaWSw8jrR3QqlKuRSby1gqKERCSi+WHj/TMt7UiNHXK3tXLSW/V/LlT/w4dnkwibzz4Wjx49WpXvR50zHej8lRkjJ5lF926/OdfMW9QkyMjpMFmYWjvYHiiKKvr9dlGsPx7EkxuVycmKTtBHs25cFGvFJx66kRk5clc827ozyyyiLPwyzB1ThnfNeGKrDFt9FxEr0Tq13E7iRbzWGmareWIN+r15BLlZeZDXYFZujrLeEm4kSkawKlMjfoZIMG9bAHloK3Nz623ybyrkiyB7v86EmE6QZkPuhEo7sDkT240hyGtADjJpMhSJAna8pOHJ2NQa9DvjD4sRvxCO6PPMpfwiIyjyGb4Dbg567Xm+0EVMw+ssv7j7aTulwdm8MISqtew53+NmEGTFyZGRzmIB+YYaOv42jncxF0sEJ+hBm2zTxEf/wyLjvS9j+mZgWn2RwrYU5p0xizYTqF+Qna4mw8iuTJp+Ls+TLFMJqdNkyc0jmnJ+xCetnB9ZM18ReTMVdWnWernfbZf8fxBK3qcBJxC5y8vZChZyIetPkGsmR9afMiFenubgn6cPZKbMN3dg87+PHEgJc7JmmTq105Pn78OEcpNXNF0E19DMX4po0VSTNAgGp/MWcgDjmH8NJtpOQPPI+moa96LMeonu5xMIZZhaoiNbH7FIlsy5uKaYElKovTWESP1nCo7qOVku/IVO088LAuxNPfvE9bjX4dQ7myw/X/6BlOuXF6a0z6GUKweb3nav29mWCUgzkUwVkfOg536MAEUBicVyMrW5+6rQ8jIQumo7jn72Z96vmswjB+VAvnzyuZsD+dGP710qinWRn/2hJbc0Zwqd1nW8g6FZ6VvQOVcrUHJq0G+/0gcgGZj1mwZBMlPZ5yoRg8g17YfQij60IS2X3KKuU6VEH9WlE4mNW9mokTLl8lPKUlvtFjL1aAv8E8yz0shthZnXtU7pmlDIjCGHRtEuiojSNx4iuYlknmUdPRWJ5JarESj0PF4w1e8hU98TmPYhaO6UFo0KV0N5AtzkKKaDWCdHXxGRTSORFKpb7snHdBAxQtYbC6dEPLHhahTKlPsONcwmq9/t0FoTPG/Kuz/K3fsjRzRE29pIPg56PeEvuUUmnZKNWUy1MQNOetlNhHZa0OCdK19yG77JZtW3vnf/qkKFNTFjekcc29Y7M+u/NBs2cUuIO5MrGuclY8qLhJLfu1io+brLhTjn2cW6L5jiNeQMwetBxMqt52AwVpYgtJ7j6X8e8RtnMEHE6q7nYDBWjyCLkoOiV/4s3hWah8W4gQg5a7rYnsEQ/MuKDAYThMFggjAYTBAGgwnCYDBBGAwmCIPBBGEwGEwQBoMJwmAwQRgMJgiDwQRhMJggDAYThMFggjAYNw7/FWAAi26mbSS44fEAAAAASUVORK5CYII=",Db="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABACAYAAABfuzgrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDEwLjAtYzAwMCA3OS5kMjBlNDY2MzAsIDIwMjUvMTIvMDktMDI6MTE6MjMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NDIzNGE4NjAtMzY3My0yNzRkLTkxNjQtMGNmZTEzMjJiZTg3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjExQTg3QUM2NThBNDExRjE5NkY0RkVCOURBRkVDNjk2IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjExQTg3QUM1NThBNDExRjE5NkY0RkVCOURBRkVDNjk2IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNy40IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFkNjhmZjAxLWMzYjUtYWM0NS04OTM1LTVmZGE1YWU2OTJhMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MjM0YTg2MC0zNjczLTI3NGQtOTE2NC0wY2ZlMTMyMmJlODciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6dJ7OqAAAF3klEQVR42uydv48bRRTHZxF/ABuJAomGDaKACq2poNxr0u8pBbWvpUCyG2rs/wBbNEiIwq5oEJKtSEiHkMI515AoP3yLlEQJIooXKaSgwGY3fnN5fuyPG3s3Xq+/H92c92Znxju78515M/NWZy0WCwUASOY13AIAIBAAIBAAIBAAIBAAIBAAIBAAIBAAIBAAIBAAAAQCAAQCAAQCAAQCAAQCAAQCwE7xetlfcHr87VbeyPrwk08tPF5QeYHEvPf+R0bpn/75UB1f+169celNdeXq5+r57L5R/ru3fsWTBTCxIA4AgUAcoO4mVlXF8fEH71arEtbKx8vj83hrJU6nsyx+Vv/9IsaLjsc67jz/Mq8bHTqWZbnRcT86Ds7TLH+cKM598WlF55Q1ZHmpHMuLPsb8elh+tZreUqvplicTrnk1zUpdrf/V/etrpxhBMHKsRS8KoyjM1LKx8/g47iQKgyi01FIsmvjvMwrx+Y44n1c+TKwaicOjhpIX4kbi79BtsaPQTDiOOYrC5Yy83Sg0ojBZs3wIpEYjR2x+HEThkHpJHbosvk9CGlCvWrRQHCbEogjpuuVxGpOE/Jxgw/IhkB02q8KEBqHjA3r4Dfp0mFlSFD4Tpl1guUd03ZcSGrjKEcRFzpuUD4HswZzjiDWEDo0qReCxXjws+JonJd+TiVJYxaoMi/lc3bu91WfSJ3Hoyew4o9HzEWGckNamEckVo4nusWV6l8q1RZpJjvnmUZoyblxe+R4zWWUdQhafNdfx2SKANudChRFklb+fhdsWR8ww4eHLBjOiYLNGw+N03hGtBNksb4uCLxrJgNIHrMwOzVtaCdfQo3NndOwXLIqs8n02XxvRddosT4euWV9/mlmpV9OaVO+Ayj4r2MTd/RFkevuGms//rcKlBNR78YY+EZNtm3rGNhOVwxrOAfX8DRany26o5OVUn75nyMrUvXEnYSQJCjQB0+6Dl3Oei6ZD961BnwM272omjCQ9ig/pfoXMpNMiC0SHtbsCuR/8ZmxKaX4ZfaPCp0+M8r/19jtli8RlvTt/qDYzxZRYLfOpUTUNVn1cYXZJ+99LEGpADc7PWIXatP5Z5Q+pvq2EOG6q9tiI0xUjUJPlC0WdJ3RfWrURyOn1n9bO+/u9W8Z5ShZI2pyDT7aDjFUgx3ASrEegdo6tvskqlSpgJXCTZWROU3QsWZ2HXXbdXolAYq9cU/6aPVk77xbwchrsJjvNhymNo46713bOvbQLXgqvhkCuXP3CLMP8sfruqy8p72fR738M30H5seyHmNUTuuR+UTQ+W9EZq/1goPZhmff57I5R+uvHP5wfP/vjpppOp1V5YI7ouccp5sRBgeaOy/Zd2mxE6eyBQA5zOoNw71axKu546AtxTEp+cDZbHh5eYN+gjiZXqLCTvjNeub5YiUkaSfTyZRE0xWZj3ZEbpJ6Cq8nOiIO7fbfFEqPcKW9lmEvNNec7tuHKlckiQdnnlaG3Au+QvIznsR8Cqbg4XOagGJBPVjfFVysUu8k+W5npUBimLH+6LH2LGl2Q4NToqJe701Is/prLwI6BUNc5rwy9Ffpiot5idW+S2RnuhUC2LA6PuUwoMQKcsJeGbBo1Lmds8gV0fihEMqMH6tCkMxR52qIxzJg4+uz7XOYWH1JZE2aKnbAd7hPR6H3mTq9fdJL17Ym6p+Vfp/wRG1V7YoTVHgie6Gy0c6jN3FLO2AZht/auJhUYOcY5K06mE27dcKUTYpAxoe/SdTgpaY+oQfC5iL6mBhs1ePxBjleynVHPbs5O/3jD8vPOc1OrLxw01avYPa+EQKpgVv18c1rWUmFg6N6R5207vqAD5Sbvd1Tp/EXrXk8TC++QA4X3QVQV3+cAoJoCid/nePRgijsOIBBV3fc5AKieQEzFEXvwai/eCvlhgT3EWiwWuAsAKPx/EAAgEAAgEAAgEAAgEAAgEAAgEAAgEAAgEAAABAIABAIABAIABAIABAIABAIABAJAHfhPgAEAek7EkD6DsgoAAAAASUVORK5CYII=";function Wl(r,o){if(!(typeof window>"u")&&typeof window.gtag=="function")try{window.gtag("event",r,o)}catch{}}const at={formSubmit:(r,o)=>Wl("form_submit",{areas:r.join(","),region:o}),formSubmitFail:r=>Wl("form_submit_fail",{reason:r}),phoneClick:r=>Wl("phone_click",{source:r}),kakaoClick:r=>Wl("kakao_click",{source:r}),priceCalcUse:(r,o)=>Wl("price_calc_use",{space:r,house_type:o}),quoteSectionView:()=>Wl("quote_section_view")},Nm=[{label:"포트폴리오",href:"/portfolio"},{label:"시공범위",href:"#scope"},{label:"FAQ",href:"#faq"},{label:"견적문의",href:"#quote"}],km=[{label:"줄눈시공 하는 이유",href:"/info/why-grout"},{label:"케라폭시 줄눈이란?",href:"/info/kerafoxy"},{label:"폴리우레아 줄눈이란?",href:"/info/polyurea"},{label:"케라폭시 가격 안내",href:"/info/kerafoxy-price"},{label:"케라폭시 제품 소개",href:"/info/kerafoxy-product"},{label:"폴리우레아 vs 케라폭시 비교",href:"/info/comparison"}];function Lt(){const[r,o]=v.useState(!1),[c,u]=v.useState(!1),[p,m]=v.useState(!1),[x,g]=v.useState(!1),b=v.useRef(null),h=v.useRef(!1),w=Ft(),k=qt(),B=k.pathname==="/";v.useEffect(()=>{const Y=()=>o(window.scrollY>60);return window.addEventListener("scroll",Y),()=>window.removeEventListener("scroll",Y)},[]),v.useEffect(()=>{const Y=V=>{b.current&&!b.current.contains(V.target)&&m(!1)};return document.addEventListener("mousedown",Y),()=>document.removeEventListener("mousedown",Y)},[]),v.useEffect(()=>{if(!c)return;const Y=window.scrollY,V=document.documentElement,H=document.body,X={htmlOverflow:V.style.overflow,bodyOverflow:H.style.overflow,bodyPosition:H.style.position,bodyTop:H.style.top,bodyWidth:H.style.width};return V.style.overflow="hidden",H.style.overflow="hidden",H.style.position="fixed",H.style.top=`-${Y}px`,H.style.width="100%",()=>{V.style.overflow=X.htmlOverflow,H.style.overflow=X.bodyOverflow,H.style.position=X.bodyPosition,H.style.top=X.bodyTop,H.style.width=X.bodyWidth,h.current?h.current=!1:window.scrollTo(0,Y)}},[c]);const Q=Y=>{if(h.current=!0,u(!1),Y.startsWith("/")){w(Y);return}B?setTimeout(()=>{const V=document.querySelector(Y);V&&V.scrollIntoView({behavior:"smooth"})},0):(w("/"),setTimeout(()=>{const V=document.querySelector(Y);V&&V.scrollIntoView({behavior:"smooth"})},300))},S=r||!B,G=S?"text-stone-700 hover:text-[var(--accent)]":"text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] hover:text-white",q=S?"text-stone-900":"text-white";return l.jsxs("nav",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${S?"bg-white shadow-sm":"bg-transparent"}`,children:[l.jsxs("div",{className:"px-5 md:px-12 lg:px-20 h-12 md:h-auto md:py-4 flex items-center transition-all duration-300",children:[l.jsx("div",{className:"flex-1",children:l.jsx(Ae,{to:"/",className:"flex items-center gap-3 cursor-pointer",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:l.jsx("img",{src:S?Db:ch,alt:"디테일라인 - 서울·경기 줄눈시공 전문",className:"h-10 md:h-12 w-auto object-contain transition-opacity duration-300"})})}),l.jsx("div",{className:"flex-1 hidden md:flex justify-center",children:l.jsxs("ul",{className:"flex items-center gap-8",children:[Nm.map(Y=>l.jsx("li",{children:l.jsx("button",{onClick:()=>Q(Y.href),className:`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${G}`,children:Y.label})},Y.href)),l.jsxs("li",{ref:b,className:"relative",children:[l.jsxs("button",{onClick:()=>m(!p),className:`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1 ${k.pathname.startsWith("/info")?q:G}`,children:["줄눈 정보",l.jsx("i",{className:`ri-arrow-down-s-line text-lg transition-transform ${p?"rotate-180":""}`})]}),p&&l.jsx("div",{className:"absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-2xl overflow-hidden w-56",style:{boxShadow:"0 4px 24px 0 rgba(0,0,0,0.10)"},children:l.jsx("ul",{className:"py-2",children:km.map(Y=>l.jsx("li",{children:l.jsx(Ae,{to:Y.href,onClick:()=>m(!1),className:"block px-5 py-3 text-sm text-stone-500 hover:bg-stone-100 hover:text-stone-900 transition-colors cursor-pointer",children:Y.label})},Y.href))})})]})]})}),l.jsx("div",{className:"flex-1 hidden md:flex items-center justify-end gap-4",children:l.jsxs("a",{href:"tel:010-8005-6674",onClick:()=>at.phoneClick("navbar"),className:`flex items-center gap-2 text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${S?"bg-[var(--accent)] text-white px-5 py-2.5 rounded-full hover:bg-[var(--accent-deep)]":"bg-white/10 text-white px-5 py-2.5 rounded-full border border-white/30 hover:bg-white/20 backdrop-blur-sm"}`,children:[l.jsx("i",{className:"ri-phone-line text-sm"}),"010-8005-6674"]})}),l.jsx("button",{className:`md:hidden w-8 h-8 flex items-center justify-center cursor-pointer ml-auto ${S?"text-stone-800":"text-white"}`,onClick:()=>u(!c),children:l.jsx("i",{className:`text-xl ${c?"ri-close-line":"ri-menu-line"}`})})]}),l.jsxs(l.Fragment,{children:[l.jsx("div",{className:`fixed inset-0 bg-black/60 z-40 md:hidden transition-opacity duration-300 ${c?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}`,onClick:()=>u(!1)}),l.jsxs("div",{className:`fixed top-0 right-0 h-screen w-4/6 bg-stone-100 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto md:hidden ${c?"translate-x-0":"translate-x-full"}`,children:[l.jsx("div",{className:"sticky top-0 bg-white h-12 px-5 flex items-center justify-end border-b border-stone-300",children:l.jsx("button",{onClick:()=>u(!1),className:"text-stone-700 hover:text-stone-900 cursor-pointer",children:l.jsx("i",{className:"ri-close-line text-2xl"})})}),l.jsxs("div",{className:"px-6 py-4",children:[l.jsxs("ul",{className:"space-y-3",children:[Nm.map(Y=>l.jsx("li",{children:l.jsx("button",{onClick:()=>Q(Y.href),className:"w-full border-b border-stone-200 pb-4 text-left text-sm font-medium text-stone-600 hover:text-[var(--accent)] cursor-pointer transition-colors",children:Y.label})},Y.href)),l.jsxs("li",{children:[l.jsxs("div",{className:"flex flex-row w-full text-sm font-medium text-stone-600 mb-4 items-center justify-between",children:["줄눈 정보",l.jsx("i",{className:"ri-arrow-down-s-line text-xl"})]}),l.jsx("ul",{className:"space-y-4 pl-3 border-stone-100",children:km.map(Y=>l.jsx("li",{children:l.jsx(Ae,{to:Y.href,onClick:()=>{h.current=!0,u(!1)},className:"text-sm font-medium text-stone-400 hover:text-[var(--accent)] cursor-pointer transition-colors block",children:Y.label})},Y.href))})]})]}),l.jsxs("a",{href:"tel:010-8005-6674",onClick:()=>at.phoneClick("navbar"),className:"call-bg mt-8 flex items-center justify-center gap-2 px-6 py-3 bg-[var(--accent)] text-white text-sm font-semibold rounded-full hover:bg-[var(--accent-deep)] transition-colors cursor-pointer w-full",children:[l.jsx("i",{className:"ri-phone-line"}),"010-8005-6674"]}),l.jsx("p",{className:"text-center text-xs text-stone-500 mt-3",children:"번호를 누르면 전화 연결 됩니다."})]})]})]})]})}const Ub=[{label:"포트폴리오",href:"/portfolio"},{label:"시공범위",href:"#scope"},{label:"FAQ",href:"#faq"},{label:"견적문의",href:"#quote"}],Bb=["화장실 줄눈","주방 줄눈","베란다 줄눈","현관 줄눈","수영장 줄눈","목욕탕 줄눈"];function Yt(){const r=Ft(),[o,c]=v.useState(!1),u=p=>{if(p.startsWith("/")){r(p);return}const m=document.querySelector(p);m&&m.scrollIntoView({behavior:"smooth"})};return l.jsx("footer",{className:"bg-[var(--dark)] mx-2 overflow-hidden",children:l.jsxs("div",{className:"px-6 md:px-12 lg:px-16 pt-10 pb-8",children:[l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-6 md:mb-12",children:[l.jsxs("div",{className:"lg:col-span-1",children:[l.jsx("img",{src:ch,alt:"디테일라인 - 서울·경기 줄눈시공 전문",className:"h-10 w-auto object-contain mb-4"}),l.jsxs("p",{className:"text-stone-400 text-sm leading-relaxed mb-5",children:["집요함이 만들어 내는 완벽함, 디테일라인",l.jsx("br",{}),"완벽한 마감을 약속드립니다."]}),l.jsxs("div",{className:"space-y-2",children:[l.jsxs("div",{className:"flex items-center gap-2 text-stone-400 text-sm",children:[l.jsx("i",{className:"ri-phone-line text-stone-500"}),l.jsx("a",{href:"tel:010-8005-6674",onClick:()=>at.phoneClick("footer"),className:"hover:text-white transition-colors cursor-pointer",children:"010-8005-6674"})]}),l.jsxs("div",{className:"flex items-center gap-2 text-stone-400 text-sm",children:[l.jsx("i",{className:"ri-map-pin-line text-stone-500"}),l.jsx("span",{children:"서울 서초구 본마을4길 11 1층 104호"})]}),l.jsxs("div",{className:"flex items-center gap-2 text-stone-400 text-sm",children:[l.jsx("i",{className:"ri-time-line text-stone-500"}),l.jsx("span",{children:"평일 09:00 – 18:00"})]})]})]}),l.jsxs("div",{className:"hidden md:block",children:[l.jsx("h4",{className:"text-white font-bold text-sm mb-5",children:"빠른 링크"}),l.jsx("ul",{className:"space-y-3",children:Ub.map(p=>l.jsx("li",{children:l.jsx("button",{onClick:()=>u(p.href),className:"text-stone-400 text-sm hover:text-white transition-colors cursor-pointer",children:p.label})},p.href))})]}),l.jsxs("div",{className:"hidden md:block",children:[l.jsx("h4",{className:"text-white font-bold text-sm mb-5",children:"시공 서비스"}),l.jsx("ul",{className:"space-y-3",children:Bb.map(p=>l.jsx("li",{children:l.jsx("span",{className:"text-stone-400 text-sm",children:p})},p))})]}),l.jsxs("div",{className:"hidden md:block",children:[l.jsx("h4",{className:"text-white font-bold text-sm mb-5",children:"소셜 미디어"}),l.jsx("div",{className:"space-y-3",children:[{icon:"ri-instagram-line",label:"Instagram",href:"https://www.instagram.com"},{icon:"ri-kakao-talk-fill",label:"KakaoTalk",href:"https://pf.kakao.com"}].map(p=>l.jsxs("a",{href:p.href,target:"_blank",rel:"nofollow noreferrer",className:"flex items-center gap-3 text-stone-400 text-sm hover:text-white transition-colors cursor-pointer",children:[l.jsx("div",{className:"w-8 h-8 flex items-center justify-center bg-white/10 rounded-sm",children:l.jsx("i",{className:`${p.icon} text-sm`})}),p.label]},p.label))})]})]}),l.jsxs("div",{className:"border-t border-stone-700 pt-6 pb-6 mb-2",children:[l.jsx("h4",{className:"text-white font-bold text-sm mb-3",children:"출장 시공 안내"}),l.jsxs("p",{className:"text-stone-400 text-sm leading-relaxed mb-4",children:["디테일라인은 서울·경기·인천 전 지역 출장 시공이 가능합니다.",l.jsx("br",{}),"그 외 지역은 출장비 협의 후 진행됩니다."]}),l.jsxs("button",{type:"button",onClick:()=>c(!o),"aria-expanded":o,"aria-controls":"footer-regions-list",className:"text-stone-500 text-[11px] tracking-wider uppercase flex items-center gap-1.5 hover:text-stone-300 transition-colors cursor-pointer",children:["자주 시공한 지역",l.jsx("i",{className:`ri-arrow-down-s-line text-sm transition-transform duration-300 ${o?"rotate-180":""}`})]}),l.jsx("div",{id:"footer-regions-list",className:`overflow-hidden transition-all duration-300 ease-in-out ${o?"max-h-96 mt-3 opacity-100":"max-h-0 mt-0 opacity-0"}`,children:l.jsxs("div",{className:"text-stone-400 text-xs leading-relaxed space-y-1.5 pb-1",children:[l.jsxs("p",{children:[l.jsx("span",{className:"text-stone-300 font-medium mr-2",children:"서울"}),"강남구 · 서초구 · 송파구 · 강동구 · 성동구 · 마포구 · 용산구 · 양천구 · 영등포구 · 종로구"]}),l.jsxs("p",{children:[l.jsx("span",{className:"text-stone-300 font-medium mr-2",children:"경기"}),"성남시 분당구 · 수지구 · 하남시 · 과천시 · 광명시 · 고양시 · 일산 · 용인시"]}),l.jsxs("p",{children:[l.jsx("span",{className:"text-stone-300 font-medium mr-2",children:"인천"}),"송도 · 연수구 · 남동구"]})]})})]}),l.jsx("div",{className:"border-t border-stone-700 pt-6",children:l.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-3",children:[l.jsx("p",{className:"text-stone-500 text-xs",children:"© 2026 줄눈시공 전문. All rights reserved."}),l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsx(Ae,{to:"/privacy",className:"text-stone-500 text-xs hover:text-white transition-colors cursor-pointer",children:"개인정보처리방침"}),l.jsx("span",{className:"text-stone-600 text-xs",children:"사업자등록번호: 609-33-19473"})]})]})})]})})}const Hb="https://pf.kakao.com/_TsIAE";function Fo(){const[r,o]=v.useState(!1);return v.useEffect(()=>{const c=()=>{o(window.scrollY>window.innerHeight*.6)};return c(),window.addEventListener("scroll",c,{passive:!0}),()=>window.removeEventListener("scroll",c)},[]),l.jsxs("div",{className:`md:hidden fixed bottom-5 right-4 z-40 flex flex-col gap-3 transition-all duration-300 ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-4 pointer-events-none"}`,"aria-hidden":!r,children:[l.jsx("a",{href:Hb,target:"_blank",rel:"noopener noreferrer",onClick:()=>at.kakaoClick("floating"),className:"w-14 h-14 flex items-center justify-center rounded-full bg-[#FEE500] text-[#191600] shadow-lg active:scale-95 transition-transform","aria-label":"카카오톡 상담",children:l.jsx("i",{className:"ri-kakao-talk-fill text-2xl"})}),l.jsx("a",{href:"tel:010-8005-6674",onClick:()=>at.phoneClick("floating"),className:"w-14 h-14 flex items-center justify-center rounded-full bg-[var(--accent)] text-white shadow-lg active:scale-95 transition-transform","aria-label":"전화 상담",children:l.jsx("i",{className:"ri-phone-fill text-2xl"})})]})}const it={eyebrow:"오직 줄눈, 6년간 한 길",headlineL1:"손끝이 남기는",headlineAccent:"줄눈시공",headlineTail:"",headlineL3:"디테일라인",subL1:"시공 전, 후 사진으로 먼저 확인하고 결정하세요.",subL2:"무료 견적은 24시간 실시간 답변 드립니다.",ctaPrimary:"실시간 무료 견적 상담",ctaSecondary:"시공 포트폴리오 →",captionTag:"KERAPOXY",captionMeta:"프리미엄 줄눈 시공",signatureMeta:"모든 주거공간, 상업공간 시공 가능",footerItems:["2,000세대 이상 시공 경력","하루 한집 시공","2년 무상 AS"],scrollLabel:"SCROLL",srHeading:"서울·경기·인천 줄눈시공 전문 디테일라인 — 화장실·욕실·베란다·현관 케라폭시·폴리우레아 줄눈시공"};function wm(r){const o=document.querySelector(r);o&&o.scrollIntoView({behavior:"smooth"})}function Lb(){return l.jsxs("section",{className:"hero-b-wrap","aria-label":"히어로",children:[l.jsx("div",{className:"tile-floor","aria-hidden":"true",children:l.jsx("div",{className:"tile-floor__plane",children:l.jsx("div",{className:"tile-floor__shine"})})}),l.jsx("div",{className:"hero-b__tint","aria-hidden":"true"}),l.jsx("div",{className:"hero-b__vignette","aria-hidden":"true"}),l.jsx("div",{className:"hero-b__glow","aria-hidden":"true"}),l.jsx("div",{className:"hero-b__grain","aria-hidden":"true"}),l.jsx("div",{className:"hero-b__padded",children:l.jsxs("div",{className:"hero-b",children:[l.jsx("h2",{className:"sr-only",children:it.srHeading}),l.jsxs("div",{className:"hero-b__lead",children:[l.jsxs("div",{className:"hero-b__eyebrow",children:[l.jsx("span",{className:"hero-b__eyebrow-line","aria-hidden":"true"}),l.jsx("span",{children:it.eyebrow})]}),l.jsxs("h1",{className:"hero-b__headline",children:[it.headlineL1,l.jsx("br",{}),l.jsx("em",{children:it.headlineAccent}),it.headlineTail,l.jsx("br",{}),it.headlineL3]}),l.jsxs("p",{className:"hero-b__sub",children:[it.subL1,l.jsx("br",{}),it.subL2]}),l.jsxs("div",{className:"hero-b__cta-row",children:[l.jsxs("button",{type:"button",className:"hero-b__btn",onClick:()=>wm("#quote"),children:[it.ctaPrimary,l.jsx("span",{className:"hero-b__btn-arrow","aria-hidden":"true",children:"→"})]}),l.jsx("button",{type:"button",className:"hero-b__btn-link",onClick:()=>wm("#portfolio"),children:it.ctaSecondary})]})]}),l.jsxs("div",{className:"hero-b__caption",children:[l.jsxs("div",{className:"hero-b__caption-row",children:[l.jsx("span",{className:"hero-b__caption-dot","aria-hidden":"true"}),l.jsx("span",{className:"hero-b__caption-after",children:it.captionTag})]}),l.jsx("div",{className:"hero-b__caption-meta",children:it.captionMeta})]}),l.jsx("div",{className:"hero-b__signature",children:l.jsx("div",{className:"hero-b__signature-meta",children:it.signatureMeta})}),l.jsxs("div",{className:"hero-b__footer-meta",children:[l.jsx("ul",{className:"hero-b__footer-items",children:it.footerItems.map(r=>l.jsx("li",{children:r},r))}),l.jsxs("div",{className:"hero-b__scroll","aria-hidden":"true",children:[l.jsx("span",{children:it.scrollLabel}),l.jsx("span",{className:"hero-b__scroll-bar"})]})]})]})})]})}const ii={all:"all",itemOne:"itemOne",itemTwo:"itemTwo"},qe={rawPosition:"--rcs-raw-position",currentPosition:"--rcs-current-position",boundsPadding:"--rcs-bounds-padding",handleColor:"--rcs-handle-color"},Rs={capture:!1,passive:!0},Vs={capture:!0,passive:!1};let In=(function(r){return r.ARROW_LEFT="ArrowLeft",r.ARROW_RIGHT="ArrowRight",r.ARROW_UP="ArrowUp",r.ARROW_DOWN="ArrowDown",r})({});const Qs=(r,o,c,u)=>{let p=v.useRef(void 0);v.useEffect(()=>{p.current=o},[o]),v.useEffect(()=>{if(!c?.addEventListener)return;let m=x=>p.current?.(x);return c.addEventListener(r,m,u),()=>{c.removeEventListener(r,m,u)}},[r,c,u])},oh=v.createContext(null),Yb=({children:r,...o})=>l.jsx(oh.Provider,{value:o,children:r}),$s=()=>{let r=v.useContext(oh);if(!r)throw Error("useReactCompareSliderContext must be used within the Provider component");return r},Sm=({flip:r})=>{let o={width:"0.85rem",height:"0.85rem",clipPath:"polygon(100% 0%, 100% 100%, 30% 50%)",rotate:r?"180deg":"0deg",outline:`0.5rem solid var(${qe.handleColor})`,outlineOffset:"-0.5rem"};return l.jsx("div",{"aria-hidden":"true",className:"__rcs-handle-arrow",style:o})},qb=({className:r="__rcs-handle-root",buttonStyle:o,linesStyle:c,style:u,...p})=>{let{disabled:m,portrait:x}=$s(),g={boxSizing:"border-box",position:"relative",display:"inline-flex",flexDirection:x?"row":"column",placeItems:"center",width:x?"100%":void 0,height:x?void 0:"100%",cursor:m?"not-allowed":x?"ns-resize":"ew-resize",pointerEvents:"none",[qe.handleColor]:"rgba(255, 255, 255, 1)",...u},b={flexGrow:1,height:x?2:"100%",width:x?"100%":2,outline:`1px solid var(${qe.handleColor})`,outlineOffset:-1,pointerEvents:"auto",boxShadow:"0 0 4px rgba(0,0,0,.5)",...c},h={direction:"ltr",display:"grid",gridAutoFlow:"column",gap:"0.5rem",placeContent:"center",flexShrink:0,width:"3.5rem",height:"3.5rem",borderRadius:"50%",border:`2px solid var(${qe.handleColor})`,color:"inherit",pointerEvents:"auto",backdropFilter:"blur(0.5rem)",WebkitBackdropFilter:"blur(0.5rem)",backgroundColor:"rgba(0, 0, 0, 0.125)",boxShadow:"0 0 4px rgba(0,0,0,.35)",transform:x?"rotate(90deg)":void 0,...o};return l.jsxs("div",{"data-rcs":"handle",...p,className:r,style:g,children:[l.jsx("div",{className:"__rcs-handle-line",style:b}),l.jsxs("div",{className:"__rcs-handle-button",style:h,children:[l.jsx(Sm,{}),l.jsx(Sm,{flip:!0})]}),l.jsx("div",{className:"__rcs-handle-line",style:b})]})},Gb=({display:r="block",width:o="100%",height:c="100%",maxWidth:u="100%",boxSizing:p="border-box",objectFit:m="cover",objectPosition:x="center center",...g}={})=>({display:r,width:o,height:c,maxWidth:u,boxSizing:p,objectFit:m,objectPosition:x,...g}),Em=({alt:r,style:o,...c})=>{let u=Gb(o);return l.jsx("img",{"data-rcs":"image",...c,alt:r,style:u})},Vb=({style:r,...o})=>{let{disabled:c,portrait:u,position:p,handleRootRef:m,onHandleRootClick:x,onHandleRootKeyDown:g}=$s(),b={WebkitAppearance:"none",MozAppearance:"none",WebkitTapHighlightColor:"transparent",boxSizing:"border-box",position:"absolute",display:"flex",flexDirection:u?"row":"column",placeItems:"center",contain:"layout",top:u?"-50%":void 0,left:u?void 0:"-50%",width:"100%",height:"100%",background:"none",border:0,padding:0,pointerEvents:"none",appearance:"none",outline:0,zIndex:1,translate:u?`0 var(${qe.currentPosition}) 0`:`var(${qe.currentPosition}) 0 0`,backfaceVisibility:"hidden",willChange:"translate",...r};return Qs("keydown",g,m.current,Vs),Qs("click",x,m.current,Vs),l.jsx("div",{ref:m,tabIndex:0,"aria-label":"Click and drag or focus and use arrow keys to change the position of the slider","aria-orientation":u?"vertical":"horizontal","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":p.current,"aria-disabled":c,"data-rcs":"handle-root",role:"slider",style:b,...o})},Qb=({itemClip:r,portrait:o})=>r===ii.itemOne?o?`inset(0px 0px calc(100% - var(${qe.currentPosition})) 0px)`:`inset(0px calc(100% - var(${qe.currentPosition})) 0px 0px)`:r===ii.itemTwo?o?`inset(var(${qe.currentPosition}) 0px 0px 0px)`:`inset(0px 0px 0px var(${qe.currentPosition}))`:"none",Am=({item:r,style:o,...c})=>{let{clip:u,portrait:p}=$s(),m={KhtmlUserSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",gridArea:"1 / 1",maxWidth:"100%",overflow:"hidden",clipPath:Qb({itemClip:u===ii.all||u===r?r:void 0,portrait:p}),boxSizing:"border-box",transform:"translateZ(0)",userSelect:"none",zIndex:r===ii.itemOne?1:void 0,willChange:"clip-path",...o};return l.jsx("div",{"data-rcs":"item","data-rcs-item":r,...c,style:m})},Zb=`clamp(var(${qe.boundsPadding}), var(${qe.rawPosition}) - var(${qe.boundsPadding}) + var(${qe.boundsPadding}), calc(100% - var(${qe.boundsPadding})))`,Kb=({style:r,...o})=>{let{browsingContext:c,boundsPadding:u,changePositionOnHover:p,clip:m,isDragging:x,portrait:g,position:b,onTouchEnd:h,onPointerDown:w,onPointerMove:k,onPointerUp:B,interactiveTarget:Q,rootRef:S,transition:G,canTransition:q}=$s(),Y={position:"relative",boxSizing:"border-box",display:"grid",maxWidth:"100%",maxHeight:"100%",overflow:"hidden",cursor:x?g?"ns-resize":"ew-resize":void 0,touchAction:"pan-y",userSelect:"none",KhtmlUserSelect:"none",msUserSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",transition:q&&G?`${qe.rawPosition} ${G}`:"none",[qe.rawPosition]:`${b.current}%`,[qe.boundsPadding]:u,[qe.currentPosition]:Zb,...r};return Qs("touchend",h,Q,Vs),Qs("pointerdown",w,Q,Vs),v.useEffect(()=>{let V=S.current,H=X=>{x||B(X)};return p&&(V.addEventListener("pointermove",k,Rs),V.addEventListener("pointerleave",H,Rs)),()=>{V.removeEventListener("pointermove",k),V.removeEventListener("pointerleave",H)}},[p,k,B,x,S]),v.useEffect(()=>{if(x)return c.addEventListener("pointermove",k,Rs),c.addEventListener("pointerup",B,Rs),()=>{c?.removeEventListener("pointermove",k),c?.removeEventListener("pointerup",B)}},[k,B,x,c]),l.jsx("div",{ref:S,style:Y,"data-rcs":"root","data-rcs-clip":m,...o})};(()=>{try{typeof CSS<"u"&&CSS.registerProperty({name:qe.rawPosition,syntax:"<percentage>",inherits:!0,initialValue:"50%"})}catch(r){console.debug("[react-compare-slider] register CSS property:",r)}})();const Xb=()=>globalThis.matchMedia?.("(prefers-reduced-motion: no-preference)")?.matches?"0.15s ease-out":"none",Jb=()=>!!globalThis.matchMedia?.("(pointer: coarse)")?.matches,$b=({boundsPadding:r="0px",browsingContext:o=globalThis,changePositionOnHover:c=!1,clip:u=ii.all,defaultPosition:p=50,disabled:m=!1,keyboardIncrement:x="5%",onlyHandleDraggable:g=Jb(),onPositionChange:b,portrait:h=!1,transition:w=Xb()}={})=>{let k=v.useRef(null),B=v.useRef(null),Q=v.useRef(p),[S,G]=v.useState(!1),[q,Y]=v.useState(!0),[V,H]=v.useState(null),X=v.useCallback($=>{let ie=Math.min(Math.max($,0),100);k.current?.style.setProperty(qe.rawPosition,`${ie}%`),B.current?.setAttribute("aria-valuenow",`${Math.round(ie)}`),Q.current=ie,b?.(ie)},[b]),le=v.useCallback(function({x:$,y:ie}){let{width:De,height:ke,top:C,left:Z}=k.current.getBoundingClientRect();De===0||ke===0||X((h?ie-C-o.scrollY:$-Z-o.scrollX)/(h?ke:De)*100)},[o,h,X]),W=v.useCallback($=>{$.preventDefault(),!(m||$.button!==0)&&(le({x:$.pageX,y:$.pageY}),G(!0),Y(!0))},[m,le]),P=v.useCallback(function($){Y(!1),le({x:$.pageX,y:$.pageY})},[le]),Ne=v.useCallback($=>{G(!1),Y(!0)},[]),U=v.useCallback($=>{G(!1),Y(!0)},[]),ae=v.useCallback($=>{$.preventDefault(),$.currentTarget?.focus()},[]),ne=v.useCallback($=>{if(!Object.values(In).includes($.key))return;$.preventDefault(),Y(!0);let ie=typeof x=="string"?Number.parseFloat(x):x/k.current?.getBoundingClientRect().width*100;X((h?$.key===In.ARROW_LEFT||$.key===In.ARROW_DOWN:$.key===In.ARROW_RIGHT||$.key===In.ARROW_UP)?Q.current+ie:Q.current-ie)},[x,h,X]);return v.useLayoutEffect(()=>{H(g?B.current:k.current)},[g]),v.useEffect(()=>{X(p)},[p,X]),{boundsPadding:r,browsingContext:o,changePositionOnHover:c,clip:u,defaultPosition:p,disabled:m,keyboardIncrement:x,onlyHandleDraggable:g,portrait:h,transition:w,onHandleRootKeyDown:ne,onPointerDown:W,onPointerMove:P,onPointerUp:Ne,onTouchEnd:U,onHandleRootClick:ae,canTransition:q,isDragging:S,position:Q,setPosition:X,setPositionFromBounds:le,rootRef:k,handleRootRef:B,interactiveTarget:V}},Wb=({boundsPadding:r,browsingContext:o,changePositionOnHover:c,clip:u,defaultPosition:p,disabled:m,handle:x,itemOne:g,itemTwo:b,keyboardIncrement:h,onPositionChange:w,onlyHandleDraggable:k,portrait:B,transition:Q,...S})=>l.jsx(Yb,{...$b({boundsPadding:r,browsingContext:o,changePositionOnHover:c,clip:u,defaultPosition:p,disabled:m,keyboardIncrement:h,onPositionChange:w,onlyHandleDraggable:k,portrait:B,transition:Q}),children:l.jsxs(Kb,{...S,children:[l.jsx(Am,{item:"itemOne",children:g}),l.jsx(Am,{item:"itemTwo",children:b}),l.jsx(Vb,{children:x||l.jsx(qb,{})})]})}),uh=["화장실","욕실","베란다","현관","거실","주방","세탁실","수영장","목욕탕"],Fb=["서울","경기","인천","기타"],Pb=["케라폭시","폴리우레아","실리콘"],Po=[{slug:"seoul-yangcheon-mokdong-daerim-bathroom-34py",apartment:"목동대림아파트",region:"서울",district:"양천구",area:34,space:"화장실",spaceDetail:"바닥 + 샤워공간 벽",material:"케라폭시",duration:"1일",date:"2024-08-15",asPeriod:"2년",images:[{src:"/portfolio/seoul-yangcheon-mokdong-daerim-bathroom-34py/before_01.jpg",alt:"서울 양천구 목동대림아파트 화장실 줄눈시공 시공 전 — 체크무늬 타일 바닥",type:"before"},{src:"/portfolio/seoul-yangcheon-mokdong-daerim-bathroom-34py/before_02.jpg",alt:"목동대림아파트 화장실 줄눈 변색·곰팡이 시공 전 상태",type:"before"},{src:"/portfolio/seoul-yangcheon-mokdong-daerim-bathroom-34py/before_03.jpg",alt:"목동대림아파트 화장실 샤워공간 줄눈 시공 전 상태",type:"before"},{src:"/portfolio/seoul-yangcheon-mokdong-daerim-bathroom-34py/before_04.jpg",alt:"목동대림아파트 화장실 코너 줄눈 시공 전 디테일",type:"before"},{src:"/portfolio/seoul-yangcheon-mokdong-daerim-bathroom-34py/after-main.jpg",alt:"서울 양천구 목동대림아파트 화장실 케라폭시 줄눈시공 시공 후 대표",type:"after-main"},{src:"/portfolio/seoul-yangcheon-mokdong-daerim-bathroom-34py/after_01.jpg",alt:"목동대림아파트 화장실 바닥 케라폭시 줄눈 디테일",type:"after"},{src:"/portfolio/seoul-yangcheon-mokdong-daerim-bathroom-34py/after_02.jpg",alt:"목동대림아파트 화장실 샤워공간 벽 케라폭시 줄눈 마감",type:"after"},{src:"/portfolio/seoul-yangcheon-mokdong-daerim-bathroom-34py/after_03.jpg",alt:"목동대림아파트 화장실 코너 케라폭시 줄눈 마감",type:"after"},{src:"/portfolio/seoul-yangcheon-mokdong-daerim-bathroom-34py/after_04.jpg",alt:"목동대림아파트 화장실 줄눈선 균일 마감 디테일",type:"after"}],title:"목동대림아파트 화장실 케라폭시 줄눈시공 사례 | 디테일라인",description:"서울 양천구 목동 대림아파트 화장실 케라폭시 줄눈시공 사례. 바닥 + 샤워공간 벽 시공, 체크무늬 타일 패턴 살리는 균일한 줄눈 마감. 시공 후 2년 무상 A/S.",excerpt:"베이지·화이트 체크무늬 타일 화장실의 줄눈을 케라폭시로 정리한 사례.",body:{beforeText:"서울 양천구 목동 대림아파트 화장실은 베이지와 화이트의 체크무늬 타일로 마감되어 있었습니다. 사용 연한이 누적되며 줄눈선이 누렇게 변색되고 샤워공간 주변과 코너 부분에는 곰팡이가 자리잡아 일반 세제로는 회복이 어려운 상태였습니다. 타일 자체의 손상은 없어 리모델링 대신 줄눈만 교체하여 위생과 미관을 회복하길 원하셨습니다.",afterText:"바닥 전체와 샤워공간 벽에 케라폭시 줄눈을 시공해 줄눈선을 균일하게 정리했습니다. 화이트와 베이지 타일 사이의 줄눈이 깨끗하게 살아나면서 체크무늬 패턴이 더 또렷하게 표현되었고, 샤워공간의 위생 환경도 함께 회복되었습니다. 케라폭시의 항균 성분으로 향후 5~10년간 곰팡이 재발 걱정 없이 유지가 가능합니다. 시공 후 48시간이 지나면 정상 사용이 가능하며, 디테일라인은 시공 후 2년 무상 A/S를 보장합니다."},createdAt:"2024-08-15T00:00:00.000Z"},{slug:"seoul-gangdong-heritage-xi-bathroom-33py",apartment:"강동헤리티지자이",region:"서울",district:"강동구",area:33,space:"화장실",spaceDetail:"전체",material:"케라폭시",extraSpaces:[{space:"현관",material:"폴리우레아"},{space:"베란다",material:"폴리우레아"},{space:"세탁실",material:"폴리우레아"}],duration:"1일",date:"2024-06-29",asPeriod:"2년",images:[{src:"/portfolio/seoul-gangdong-heritage-xi-bathroom-33py/before_01.jpg",alt:"서울 강동구 강동헤리티지자이 화장실 줄눈시공 시공 전",type:"before"},{src:"/portfolio/seoul-gangdong-heritage-xi-bathroom-33py/before_02.jpg",alt:"강동헤리티지자이 화장실 줄눈 변색·곰팡이 상태",type:"before"},{src:"/portfolio/seoul-gangdong-heritage-xi-bathroom-33py/before_03.jpg",alt:"강동헤리티지자이 현관·베란다 줄눈 시공 전 상태",type:"before"},{src:"/portfolio/seoul-gangdong-heritage-xi-bathroom-33py/after_01.jpg",alt:"서울 강동구 강동헤리티지자이 화장실 케라폭시 줄눈시공 시공 후 대표",type:"after"},{src:"/portfolio/seoul-gangdong-heritage-xi-bathroom-33py/after_02.jpg",alt:"강동헤리티지자이 화장실 케라폭시 줄눈 디테일",type:"after"},{src:"/portfolio/seoul-gangdong-heritage-xi-bathroom-33py/after_03.jpg",alt:"강동헤리티지자이 현관·베란다·세탁실 폴리우레아 줄눈 마감",type:"after"}],title:"강동헤리티지자이 화장실·현관·베란다·세탁실 줄눈시공 사례 | 디테일라인",description:"서울 강동구 강동헤리티지자이 화장실 케라폭시 + 현관·베란다·세탁실 폴리우레아 줄눈시공 사례. 공간별 맞춤 자재 통합 시공, 시공 후 2년 무상 A/S.",excerpt:"화장실은 케라폭시, 현관·베란다·세탁실은 폴리우레아로 한 번에 정리한 통합 시공 사례.",body:{beforeText:"서울 강동구 강동헤리티지자이의 화장실은 사용 연한이 누적되며 줄눈선이 변색되고 코너 부분에 곰팡이가 발생한 상태였습니다. 더불어 현관·베란다·세탁실 등 외부 공간의 줄눈도 균열과 들뜸이 진행 중이었습니다. 고객께서는 공간별로 따로 의뢰하지 않고 한 번에 통합 시공으로 정리하기를 원하셨습니다.",afterText:"화장실은 내수성·항균 성능이 강한 케라폭시로 시공해 위생 환경을 회복하고, 현관·베란다·세탁실 등 외부 공간은 자외선·온도 변화에 강하면서도 가성비가 좋은 폴리우레아로 시공했습니다. 공간 특성에 맞춰 자재를 다르게 적용함으로써 내구성과 비용의 균형을 모두 잡았습니다. 시공 후 48시간이 지나면 정상 사용이 가능하며, 디테일라인은 시공 후 2년 무상 A/S를 보장합니다."},createdAt:"2024-06-29T00:00:00.000Z"},{slug:"gyeonggi-suwon-hanil-town-bathroom-32py",apartment:"한일타운아파트",region:"경기",district:"수원시 장안구",area:32,space:"화장실",spaceDetail:"전체",material:"케라폭시",duration:"1일",date:"2024-04-07",asPeriod:"2년",images:[{src:"/portfolio/gyeonggi-suwon-hanil-town-bathroom-32py/before_01.jpg",alt:"경기 수원시 장안구 한일타운아파트 화장실 줄눈시공 시공 전",type:"before"},{src:"/portfolio/gyeonggi-suwon-hanil-town-bathroom-32py/before_02.jpg",alt:"한일타운아파트 화장실 줄눈 변색 상태",type:"before"},{src:"/portfolio/gyeonggi-suwon-hanil-town-bathroom-32py/before_03.jpg",alt:"한일타운아파트 화장실 코너 줄눈 시공 전 디테일",type:"before"},{src:"/portfolio/gyeonggi-suwon-hanil-town-bathroom-32py/before_04.jpg",alt:"한일타운아파트 화장실 샤워공간 줄눈 시공 전 상태",type:"before"},{src:"/portfolio/gyeonggi-suwon-hanil-town-bathroom-32py/before_05.jpg",alt:"한일타운아파트 화장실 바닥 줄눈 시공 전 상태",type:"before"},{src:"/portfolio/gyeonggi-suwon-hanil-town-bathroom-32py/after_01.jpg",alt:"경기 수원시 장안구 한일타운아파트 화장실 케라폭시 줄눈시공 시공 후 대표",type:"after"},{src:"/portfolio/gyeonggi-suwon-hanil-town-bathroom-32py/after_02.jpg",alt:"한일타운아파트 화장실 케라폭시 줄눈 디테일",type:"after"},{src:"/portfolio/gyeonggi-suwon-hanil-town-bathroom-32py/after_03.jpg",alt:"한일타운아파트 화장실 케라폭시 줄눈 코너 마감",type:"after"},{src:"/portfolio/gyeonggi-suwon-hanil-town-bathroom-32py/after_04.jpg",alt:"한일타운아파트 화장실 케라폭시 줄눈 샤워공간 마감",type:"after"},{src:"/portfolio/gyeonggi-suwon-hanil-town-bathroom-32py/after_05.jpg",alt:"한일타운아파트 화장실 케라폭시 줄눈 균일 마감 디테일",type:"after"}],title:"수원 한일타운아파트 화장실 케라폭시 줄눈시공 사례 | 디테일라인",description:"경기 수원시 장안구 한일타운아파트 화장실 케라폭시 줄눈시공 사례. 변색·곰팡이 해결, 시공 후 2년 무상 A/S.",excerpt:"한일타운아파트 화장실 줄눈을 케라폭시로 새것처럼 정리한 사례.",body:{beforeText:"경기 수원시 장안구 한일타운아파트 화장실은 사용 연한이 쌓이며 줄눈선이 누렇게 변색되고 코너와 샤워공간 주변에는 곰팡이가 자리잡아 일반 세제로 회복이 어려운 상태였습니다. 타일 자체의 손상은 없어 리모델링 대신 줄눈만 교체하여 위생과 미관을 한 번에 회복하기로 했습니다.",afterText:"화장실 전체에 케라폭시 줄눈을 시공해 균일한 줄눈선을 만들었습니다. 케라폭시의 강한 내수성과 항균 성분으로 향후 5~10년간 곰팡이 재발 걱정 없이 위생 유지가 가능하며, 청소 한 번으로 새것처럼 회복됩니다. 시공 후 48시간이 지나면 정상 사용이 가능하고, 디테일라인은 시공 후 2년 무상 A/S를 보장합니다."},createdAt:"2024-04-07T00:00:00.000Z"},{slug:"seoul-songpa-helio-city-bathroom-39py",apartment:"송파 헬리오시티",region:"서울",district:"송파구",area:39,space:"화장실",spaceDetail:"바닥",material:"케라폭시",extraSpaces:[{space:"주방",material:"실리콘"},{space:"현관",material:"폴리우레아"}],duration:"1일",date:"2024-04-07",asPeriod:"2년",images:[{src:"/portfolio/seoul-songpa-helio-city-bathroom-39py/before_01.jpg",alt:"서울 송파구 헬리오시티 화장실 바닥 줄눈시공 시공 전",type:"before"},{src:"/portfolio/seoul-songpa-helio-city-bathroom-39py/before_02.jpg",alt:"헬리오시티 화장실 바닥 줄눈 변색 상태",type:"before"},{src:"/portfolio/seoul-songpa-helio-city-bathroom-39py/before_03.jpg",alt:"헬리오시티 주방 실리콘 코킹 시공 전 상태",type:"before"},{src:"/portfolio/seoul-songpa-helio-city-bathroom-39py/before_04.jpg",alt:"헬리오시티 주방 싱크대 주변 시공 전 상태",type:"before"},{src:"/portfolio/seoul-songpa-helio-city-bathroom-39py/before_05.jpg",alt:"헬리오시티 현관 바닥 줄눈 시공 전 상태",type:"before"},{src:"/portfolio/seoul-songpa-helio-city-bathroom-39py/before_06.jpg",alt:"헬리오시티 현관 코너 시공 전 디테일",type:"before"},{src:"/portfolio/seoul-songpa-helio-city-bathroom-39py/after_01.jpg",alt:"서울 송파구 헬리오시티 화장실 바닥 케라폭시 줄눈시공 시공 후 대표",type:"after"},{src:"/portfolio/seoul-songpa-helio-city-bathroom-39py/after_02.jpg",alt:"헬리오시티 화장실 바닥 케라폭시 줄눈 디테일",type:"after"},{src:"/portfolio/seoul-songpa-helio-city-bathroom-39py/after_03.jpg",alt:"헬리오시티 주방 실리콘 코킹 마감 디테일",type:"after"},{src:"/portfolio/seoul-songpa-helio-city-bathroom-39py/after_04.jpg",alt:"헬리오시티 주방 싱크대 실리콘 코킹 마감",type:"after"},{src:"/portfolio/seoul-songpa-helio-city-bathroom-39py/after_05.jpg",alt:"헬리오시티 현관 폴리우레아 줄눈 마감",type:"after"},{src:"/portfolio/seoul-songpa-helio-city-bathroom-39py/after_06.jpg",alt:"헬리오시티 현관 코너 폴리우레아 줄눈 디테일",type:"after"}],title:"송파 헬리오시티 화장실·주방·현관 줄눈시공 사례 | 디테일라인",description:"서울 송파구 헬리오시티 화장실 바닥 케라폭시 + 주방 실리콘 코킹 + 현관 폴리우레아 줄눈시공 사례. 공간별 맞춤 자재 통합 시공, 시공 후 2년 무상 A/S.",excerpt:"화장실 바닥·주방·현관을 자재별로 맞춤 시공한 통합 사례.",body:{beforeText:"서울 송파구 헬리오시티는 입주 후 사용 연한이 누적되며 화장실 바닥 줄눈이 변색되고, 주방 싱크대 주변의 실리콘은 들뜸과 곰팡이가 발생한 상태였습니다. 현관 바닥의 줄눈선도 균열이 진행 중이었습니다. 고객께서는 공간별 특성에 맞춰 적합한 자재로 한 번에 정리하길 원하셨습니다.",afterText:"화장실 바닥은 내수성이 핵심이라 케라폭시로 시공해 위생 환경을 회복했고, 주방 싱크대 주변은 들뜸이 있던 기존 실리콘을 깨끗하게 제거하고 새로 코킹해 곰팡이 발생 가능성을 차단했습니다. 현관 바닥은 자외선·온도 변화에 강한 폴리우레아로 가성비 시공을 진행했습니다. 공간별 자재 매칭으로 내구성과 비용을 모두 합리적으로 잡았습니다. 디테일라인은 시공 후 2년 무상 A/S를 보장합니다."},createdAt:"2024-04-07T00:00:00.000Z"}];function Ib(r){return Po.find(o=>o.slug===r)}function dh(r){return[r.space,...(r.extraSpaces??[]).map(o=>o.space)]}function ev(r){return[r.material,...(r.extraSpaces??[]).map(o=>o.material)]}function tv(r){return Po.filter(o=>{if(r.spaces?.length){const c=dh(o);if(!r.spaces.some(u=>c.includes(u)))return!1}if(r.regions?.length&&!r.regions.includes(o.region))return!1;if(r.materials?.length){const c=ev(o);if(!r.materials.some(u=>c.includes(u)))return!1}return!0}).sort((o,c)=>c.date.localeCompare(o.date))}function av(r){const o=r.images.find(u=>u.type==="after-main")??r.images.find(u=>u.type==="after")??r.images[0],c=r.images.find(u=>u.type==="before");return{main:o,before:c}}function lv(r){return r.district?`${r.region} · ${r.district}`:r.region}const nv=["전체",...uh.filter(r=>r!=="욕실")];function iv(){const[r,o]=v.useState("전체"),[c,u]=v.useState(null),p=v.useMemo(()=>Po.map(x=>{const g=x.images.find(w=>w.type==="after-main")??x.images.find(w=>w.type==="after"),b=x.images.find(w=>w.type==="before"),h=dh(x).map(w=>w==="욕실"?"화장실":w);return{id:x.slug,slug:x.slug,category:x.space==="욕실"?"화장실":x.space,allCategories:h,title:`${x.apartment} ${x.area}평 ${x.space}`,location:x.district?`${x.region} ${x.district}`:x.region,image:g?.src??"",before:b?.src,after:g?.src}}),[]);v.useEffect(()=>{if(!c)return;const x=k=>{k.key==="Escape"&&u(null)},g=window.scrollY,b=document.documentElement,h=document.body,w=b.style.scrollBehavior;return b.style.overflow="hidden",h.style.overflow="hidden",h.style.position="fixed",h.style.top=`-${g}px`,h.style.left="0",h.style.right="0",h.style.width="100%",window.addEventListener("keydown",x),()=>{b.style.overflow="",h.style.overflow="",h.style.position="",h.style.top="",h.style.left="",h.style.right="",h.style.width="",b.style.scrollBehavior="auto",window.scrollTo(0,g),b.style.scrollBehavior=w,window.removeEventListener("keydown",x)}},[c]);const m=v.useMemo(()=>r==="전체"?p:p.filter(x=>x.allCategories.includes(r)),[r,p]);return l.jsxs(l.Fragment,{children:[l.jsx("section",{id:"portfolio",className:"py-20 px-6 md:px-12 lg:px-20 bg-[var(--bg)]",children:l.jsxs("div",{className:"max-w-7xl mx-auto",children:[l.jsxs("div",{className:"mb-10",children:[l.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Our Work"}),l.jsx("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:"완성된 프로젝트"}),l.jsx("p",{className:"text-[var(--muted)] mt-1 sm:mt-3 text-base",children:"고객님의 공간을 완벽하게 되살렸습니다"})]}),l.jsx("div",{className:"flex flex-wrap gap-2 mb-10",children:nv.map(x=>l.jsx("button",{onClick:()=>o(x),className:`px-5 py-2 rounded-sm text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${r===x?"bg-[var(--accent)] text-white":"bg-white text-[var(--muted)] border border-[var(--line)] hover:border-[var(--line-strong)]"}`,children:x},x))}),m.length>0?l.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4",children:m.map(x=>l.jsxs("div",{onClick:()=>u(x),className:"group relative rounded-sm overflow-hidden cursor-pointer aspect-[3/4]",children:[l.jsx("img",{src:x.image,alt:`${x.title} 줄눈시공 사례 - 디테일라인`,className:"w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"}),l.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-4",children:[l.jsx("span",{className:"inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-sm mb-2",children:x.category}),l.jsx("h3",{className:"text-white font-bold text-sm leading-snug",children:x.title}),l.jsx("p",{className:"text-white/70 text-xs mt-1",children:x.location})]})]},x.id))}):l.jsxs("div",{className:"border border-dashed border-[var(--line-strong)] rounded-sm py-16 px-6 text-center bg-white/40",children:[l.jsx("i",{className:"ri-image-line text-4xl text-[var(--muted-2)] mb-4 block","aria-hidden":"true"}),l.jsx("h3",{className:"text-2xl text-[var(--ink)] mb-3",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:"시공 사례 — 곧 공개됩니다"}),l.jsxs("p",{className:"text-[var(--muted)] text-sm leading-relaxed max-w-md mx-auto",children:["현재 자체 촬영 시공 사례를 정리 중입니다.",l.jsx("br",{}),"실제 현장의 Before / After 사진과 시공 디테일을 곧 보여드리겠습니다."]}),l.jsx("p",{className:"text-[var(--muted-2)] text-xs mt-6",children:"시공 사례가 필요하시면 카카오톡·전화로 즉시 안내해 드립니다."})]}),l.jsx("div",{className:"text-center mt-10",children:l.jsxs(Ae,{to:"/portfolio",className:"inline-flex items-center gap-2 px-6 py-2.5 border border-[var(--line-strong)] rounded-[2px] text-sm text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] hover:border-[var(--ink)] transition-colors cursor-pointer",children:["전체 시공사례 보기 ",l.jsx("span",{children:"→"})]})})]})}),c&&l.jsx("div",{className:"fixed inset-0 z-[100] bg-black/80 flex items-center justify-center px-4",onClick:()=>u(null),children:l.jsxs("div",{className:"relative w-full max-w-3xl",onClick:x=>x.stopPropagation(),children:[l.jsx("button",{type:"button",onClick:()=>u(null),className:"absolute -top-11 right-0 w-9 h-9 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors","aria-label":"닫기",children:l.jsx("i",{className:"ri-close-line text-xl"})}),l.jsx("div",{className:"rounded-sm overflow-hidden shadow-2xl bg-[var(--dark)]",children:c.before&&c.after?l.jsx(Wb,{itemOne:l.jsx(Em,{src:c.before,alt:`${c.title} 시공 전`,style:{objectFit:"cover"}}),itemTwo:l.jsx(Em,{src:c.after,alt:`${c.title} 시공 후`,style:{objectFit:"cover"}}),style:{width:"100%",maxHeight:"80vh"}}):l.jsx("img",{src:c.image,alt:`${c.title} 줄눈시공 사례 - 디테일라인`,onClick:()=>u(null),className:"w-full max-h-[80vh] object-contain cursor-zoom-out"})}),l.jsxs("div",{className:"mt-3 text-white",children:[l.jsx("p",{className:"text-sm font-semibold",children:c.title}),l.jsx("p",{className:"text-xs text-white/70 mt-1",children:c.location})]})]})})]})}const sv=[{n:"01",t:"대표 직접 시공",en:"Founder on every site",d:"외주·하청 없습니다. 첫 현장부터 마지막 줄눈까지 대표가 직접 와서 시공합니다. 7년차, 2,400 가구의 손맛 그대로."},{n:"02",t:"KC 인증 친환경 자재",en:"Certified, low-VOC",d:"케라폭시·정품 폴리우레아만 사용합니다. 각 시공한 자재서에 가족이 있는 동네 수준의 친환경 등급을 고집합니다."},{n:"03",t:"2년 무상 A/S · 서면",en:"2-year written warranty",d:"에폭시 계열 자재 시공에 한해 시공 후 2년간 무상 재시공. 들뜸·변색·곰팡이가 발생하면 서면 보증서대로 책임집니다."},{n:"04",t:"정밀 기계 작업",en:"Calibrated tooling",d:"커터·믹서·트랜퍼스 — 도구 하나하나를 매 현장 캘리브레이션. 균일한 폭, 균일한 마감, 균일한 광택."}];function rv(){return l.jsxs("section",{id:"why",className:"relative overflow-hidden bg-[var(--dark)] py-20 px-6 md:px-12 lg:px-20",children:[l.jsx("div",{className:"why-bg","aria-hidden":"true"}),l.jsxs("div",{className:"relative max-w-7xl mx-auto",children:[l.jsxs("div",{className:"mb-10",children:[l.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Why Detailline"}),l.jsxs("h2",{className:"text-4xl md:text-5xl text-[var(--on-dark)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:["싸지 않습니다. 대신",l.jsx("br",{}),"10년 후에도 그 자리에 있습니다."]}),l.jsxs("p",{className:"text-white/70 mt-1 sm:mt-3 text-base max-w-[56ch]",children:["저희는 가장 싼 업체가 아닙니다. 가장 오래 가게 만드는 업체입니다.",l.jsx("br",{}),"아래 네 가지는 디테일라인이 단 한 번도 타협한 적 없는 기준입니다."]})]}),l.jsx("div",{className:"why-grid mt-12",children:sv.map(r=>l.jsxs("div",{className:"why-cell",children:[l.jsxs("span",{className:"why-cell-num",children:["— ",r.n]}),l.jsx("h3",{className:"why-cell-title",children:r.t}),l.jsx("p",{className:"why-cell-en",children:r.en}),l.jsx("p",{className:"why-cell-desc",children:r.d})]},r.n))}),l.jsxs("div",{className:"why-foot",children:[l.jsx("p",{className:"why-quote-text",children:"“줄눈은 결국 사람이 합니다. 그 위에 누가 잡고 있느냐가 10년을 가릅니다.”"}),l.jsx("span",{className:"why-quote-caption",children:"— 대표 제이슨 —"})]})]}),l.jsx("style",{children:cv})]})}const cv=`
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
`,ov="/assets/bathroom-qafbnYCD.JPG",uv="/assets/outdoor_wc-CJQL97Jp.JPG",dv="/assets/living-BQx9vWF-.jpg",pv="/assets/entrance-D-gIu59c.jpg",fv="/assets/veranda-BQTujKkw.jpg",mv="/assets/commercial-BUQpqBDH.jpg",hv=[{n:"01",t:"욕실 · 화장실",en:"Bathroom",d:"에폭시 계열 전용. 물이 닿는 환경엔 폴리우레아 시공 불가 → 2년 무상 A/S 대상.",tag:"에폭시 계열",photo:ov},{n:"02",t:"외부 화장실",en:"Outdoor WC",d:"내부 화장실과 동일 → 에폭시 계열만 시공. 물 접촉 환경에서 폴리우레아 시공 불가.",tag:"에폭시 계열",photo:uv},{n:"03",t:"거실",en:"Living",d:"바닥 줄눈. 20평대 기준 폴리우레아 100만원 · 에폭시 150만원. 30평+ 별도 견적.",tag:"에폭시 / 폴리우레아",photo:dv},{n:"04",t:"현관",en:"Entrance",d:"첫인상을 결정짓는 1평. 외부 접촉 폴리우레아 가성비 선택 권장.",tag:"폴리우레아 권장",photo:pv},{n:"05",t:"베란다",en:"Veranda",d:"결로·온도차에 폴리우레아 권장. 빠른 경화 2~4시간 마무리.",tag:"폴리우레아 권장",photo:fv},{n:"06",t:"상업 공간",en:"Commercial",d:"카페·매장·호텔·수영장. 야간·새벽 시공 협의 가능. 환경별 자재 매칭.",tag:"맞춤 자재",photo:mv}];function xv(){return l.jsxs("section",{id:"scope",className:"scope-section bg-[var(--bg)] py-20 px-6 md:px-12 lg:px-20",children:[l.jsxs("div",{className:"max-w-7xl mx-auto",children:[l.jsxs("div",{className:"mb-10",children:[l.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Scope"}),l.jsxs("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:["줄눈이 필요한 ",l.jsx("br",{}),l.jsx("span",{className:"text-[var(--accent)]",children:"모든 곳에"})]}),l.jsxs("p",{className:"text-[var(--muted)] mt-1 sm:mt-3 text-base max-w-[56ch]",children:["주거 · 상업 · 시설까지. 디테일라인은 환경별로 자재와 시공 방식을 다르게 가져갑니다.",l.jsx("br",{}),"한 가지 방법으로 모든 곳을 시공하지 않습니다."]})]}),l.jsx("div",{className:"scope-grid mt-12",children:hv.map(r=>l.jsxs("article",{className:"scope-card",children:[l.jsxs("div",{className:`scope-imgph ${r.photo?"has-photo":""}`,children:[r.photo?l.jsx("img",{src:r.photo,alt:`${r.t} 줄눈시공 - 디테일라인`,className:"scope-imgph-img",loading:"lazy"}):l.jsx("span",{className:"scope-imgph-label","aria-hidden":"true",children:r.en.toUpperCase()}),l.jsx("span",{className:"scope-imgph-corner","aria-hidden":"true",children:r.n})]}),l.jsxs("div",{className:"scope-meta",children:[l.jsxs("span",{className:"scope-meta-mono",children:["— ",r.n," · ",r.en.toUpperCase()]}),l.jsx("h3",{className:"scope-meta-title",children:r.t}),l.jsx("p",{className:"scope-meta-body",children:r.d}),l.jsxs("span",{className:"scope-meta-tag",children:[l.jsx("span",{className:"scope-tag-dot","aria-hidden":"true"}),r.tag]})]})]},r.n))})]}),l.jsx("style",{children:gv})]})}const gv=`
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
`,bv="/assets/re_1-iaNcuT_7.jpg",vv="/assets/re_2-CcDcgcOi.jpg",yv="/assets/re_3-DPjtmN0S.jpg",jv=[{star:5,t:"줄눈은 다 똑같은 줄 알았는데",name:"최OO 고객님",photo:{label:"BANPO",corner:"거실 특",src:bv},body:"다른 곳에서 한 줄눈이 2년만에 변색됐어요. 디테일라인은 하루 종일 걸렸지만 마감이 차원이 다릅니다. 모서리, 코너, 실리콘까지 손이 갔어요. 비싸지만 다시 하라면 또 합니다."},{star:5,t:"대표님이 직접 오십니다",name:"정OO 고객님",photo:{label:"HANNAM",corner:"욕실",src:vv},body:"견적부터 시공, A/S 안내까지 같은 분이세요. 중간에 누구한테 다시 설명할 필요가 없습니다. 시공도 깔끔하고, 시공 후에도 친절히 안내해 주시고요."},{star:5,t:"2년 보증서 진짜 줍니다",name:"강OO 고객님",photo:{label:"JAMSIL",corner:"욕실",src:yv},body:"대부분 구두 보증인데 여기는 서면으로 보증서를 줍니다. 솔직히 그거 하나만으로도 결정 났어요. 시공도 깔끔하고 청소까지 다 해주고 가시는 게 인상 깊었습니다."}];function Nv({n:r}){return l.jsx("div",{className:"rev-stars",role:"img","aria-label":`별점 5점 만점에 ${r}점`,children:[0,1,2,3,4].map(o=>l.jsx("svg",{className:o<r?"rev-star rev-star-filled":"rev-star rev-star-empty",width:"13",height:"13",viewBox:"0 0 13 13","aria-hidden":"true",children:l.jsx("path",{d:"M6.5 0l1.8 4.3 4.7.4-3.6 3 1.1 4.6L6.5 9.9 2.5 12.3l1.1-4.6L0 4.7l4.7-.4z"})},o))})}function kv(){return l.jsxs("section",{id:"reviews",className:"rev-section bg-[var(--bg-2)] py-20 px-6 md:px-12 lg:px-20",children:[l.jsxs("div",{className:"max-w-7xl mx-auto",children:[l.jsxs("div",{className:"mb-10",children:[l.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Reviews"}),l.jsxs("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:[l.jsx("span",{className:"md:block text-[var(--accent)]",children:"지금까지 2,000세대 이상의"})," ",l.jsx("span",{className:"md:block",children:"가족이 맡겨 주셨습니다"})]}),l.jsxs("p",{className:"text-[var(--muted)] mt-1 sm:mt-3 text-base max-w-[56ch]",children:["실제 시공 후 30일 내 작성된 후기 중 일부입니다.",l.jsx("br",{}),"좋은 말씀도, 아쉬운 말씀도 모두 받고 있습니다."]})]}),l.jsx("div",{className:"rev-grid mt-12",children:jv.map(r=>l.jsxs("article",{className:"rev-card",children:[l.jsx("div",{className:"rev-card-photo",children:l.jsxs("div",{className:`rev-imgph ${r.photo.src?"has-photo":""}`,children:[r.photo.src?l.jsx("img",{src:r.photo.src,alt:`${r.photo.label} · ${r.photo.corner}`,className:"rev-imgph-img",loading:"lazy"}):l.jsx("span",{className:"rev-imgph-label","aria-hidden":"true",children:r.photo.label}),l.jsx("span",{className:"rev-imgph-corner","aria-hidden":"true",children:r.photo.corner})]})}),l.jsxs("div",{className:"rev-card-body",children:[l.jsx(Nv,{n:r.star}),l.jsxs("h3",{className:"rev-card-title",children:["“",r.t,"”"]}),l.jsx("p",{className:"rev-card-text",children:r.body}),l.jsx("div",{className:"rev-card-footer",children:l.jsx("div",{className:"rev-card-name",children:r.name})})]})]},r.name))})]}),l.jsx("style",{children:wv})]})}const wv=`
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
`,qs="spc:quote-prefill",Uo="spc:quote-prefill-changed",Sv={화장실:"화장실","거실 바닥":"거실",현관:"현관",베란다:"베란다",세탁실:"기타","다용도/실외기실":"기타"};function Ev(r){return Sv[r]??"기타"}function Av(r){const o=new Set;for(const c of r)o.add(Ev(c));return Array.from(o)}const Ht={화장실:{label:"화장실",en:"BATHROOM",icon:"🛁",rec:"kera",materialLocked:!0,multiple:!0,typeAxis:{lbl:"타입",options:["욕조형","샤워부스형"]},scopeAxis:{lbl:"범위",options:["바닥만","전체(바닥+벽)"]},variants:[{id:"bt-floor",label:"욕조형 · 바닥만",type:"욕조형",scope:"바닥만",kera:{신축:40,구축:50},poly:null},{id:"bt-full",label:"욕조형 · 전체 (바닥+벽)",type:"욕조형",scope:"전체(바닥+벽)",kera:{신축:90,구축:100},poly:null},{id:"sh-floor",label:"샤워부스형 · 바닥만",type:"샤워부스형",scope:"바닥만",kera:{신축:45,구축:55},poly:null},{id:"sh-full",label:"샤워부스형 · 전체 (바닥+벽)",type:"샤워부스형",scope:"전체(바닥+벽)",kera:{신축:95,구축:105},poly:null}]},"거실 바닥":{label:"거실 바닥",en:"LIVING FLOOR",icon:"🛋️",rec:"kera",materialLocked:!0,note:"34평 이하 기준",variants:[{id:"lv",label:"34평 미만",kera:{신축:150,구축:150},poly:null}]},현관:{label:"현관",en:"ENTRANCE",icon:"🚪",rec:"poly",materialLocked:!1,variants:[{id:"ent",label:"바닥",kera:{신축:25,구축:25},poly:{신축:5,구축:10}}]},세탁실:{label:"세탁실",en:"LAUNDRY",icon:"🧺",rec:"poly",materialLocked:!1,variants:[{id:"ldy",label:"바닥",kera:{신축:30,구축:30},poly:{신축:15,구축:15}}]},베란다:{label:"베란다",en:"VERANDA",icon:"🌿",rec:"poly",materialLocked:!1,variants:[{id:"ver",label:"바닥",kera:{신축:30,구축:30},poly:{신축:15,구축:15}}]},"다용도/실외기실":{label:"다용도/실외기실",en:"UTILITY",icon:"🪟",rec:"poly",materialLocked:!1,variants:[{id:"utl",label:"바닥",kera:{신축:20,구축:20},poly:{신축:10,구축:10}}]}},Zs={kera:"케라폭시",poly:"폴리우레아"},Eo={1:{name:"세트 1",sub:"기본",desc:"화장실 바닥 ×2 + 현관",prices:{신축:100,구축:120},components:[{space:"화장실",variantId:"bt-floor",material:"kera"},{space:"화장실",variantId:"sh-floor",material:"kera"},{space:"현관",variantId:"ent",material:"poly"}],services:[]},2:{name:"세트 2",sub:"표준",desc:"세트 1 + 양조벽 or 샤워벽 3면 ×1곳",prices:{신축:125,구축:145},components:[{space:"화장실",variantId:"bt-full",material:"kera"},{space:"화장실",variantId:"sh-floor",material:"kera"},{space:"현관",variantId:"ent",material:"poly"}],services:["젠 다이 실리콘 ×2","세면대 실리콘 ×2"]},3:{name:"세트 3",sub:"완성",desc:"화장실 바닥 ×2 + 전체벽 ×2 + 현관",prices:{신축:220,구축:240},components:[{space:"화장실",variantId:"bt-full",material:"kera"},{space:"화장실",variantId:"sh-full",material:"kera"},{space:"현관",variantId:"ent",material:"poly"}],services:["젠 다이 실리콘 ×2","세면대 실리콘 ×2","싱크볼 실리콘","주방벽 케라폭시"]},4:{name:"세트 4",sub:"확장",desc:"세트 2 + 세탁실",prices:{신축:140,구축:160},components:[{space:"화장실",variantId:"bt-full",material:"kera"},{space:"화장실",variantId:"sh-floor",material:"kera"},{space:"현관",variantId:"ent",material:"poly"},{space:"세탁실",variantId:"ldy",material:"poly"}],services:["젠 다이 실리콘 ×2","세면대 실리콘 ×2","주방 실리콘","싱크볼 실리콘"]}},zv=["화장실","거실 바닥","현관","세탁실","베란다","다용도/실외기실"],li=(r,o)=>Ht[r]?.variants.find(c=>c.id===o),Bo=(r,o)=>({"욕조형|바닥만":"bt-floor","욕조형|전체(바닥+벽)":"bt-full","샤워부스형|바닥만":"sh-floor","샤워부스형|전체(바닥+벽)":"sh-full"})[`${r}|${o}`]??"bt-floor",Ho=(r,o)=>{const c=Ht[r.space],u=li(r.space,r.variantId);if(!c||!u)return null;const p=c.materialLocked?c.rec:r.material,m=u[p];return m?m[o]:null},Cs=()=>`sel-${Math.random().toString(36).slice(2,9)}-${Date.now().toString(36)}`,cl=r=>r.toLocaleString("ko-KR");function Tv(){const[r,o]=v.useState("신축"),[c,u]=v.useState([]),[p,m]=v.useState(null),[x,g]=v.useState(!1),[b,h]=v.useState(!1),w=c.filter(U=>U.space==="화장실"),k=w.length>=1,B=w.length>=2,Q=U=>c.some(ae=>ae.space===U),S=()=>m(null),G=U=>{if(S(),Q(U))u(ae=>ae.filter(ne=>ne.space!==U));else{const ae=Ht[U],ne=ae.variants[0];u($=>[...$,{key:Cs(),space:U,variantId:ne.id,material:ae.rec}])}},q=()=>{S(),u(k?U=>U.filter(ae=>ae.space!=="화장실"):U=>[...U,{key:Cs(),space:"화장실",variantId:"bt-floor",material:"kera"}])},Y=()=>{if(k)if(S(),B){const ae=c.map((ne,$)=>ne.space==="화장실"?$:-1).filter(ne=>ne>=0)[1];u(ne=>ne.filter(($,ie)=>ie!==ae))}else{const U=c.find(ie=>ie.space==="화장실"),ne=(U?li("화장실",U.variantId)?.type:void 0)==="욕조형"?"샤워부스형":"욕조형",$=Bo(ne,"바닥만");u(ie=>[...ie,{key:Cs(),space:"화장실",variantId:$,material:"kera"}])}},V=U=>{if(p===U){m(null),u([]);return}const ne=Eo[U].components.map($=>({key:Cs(),space:$.space,variantId:$.variantId,material:$.material}));u(ne),m(U)},H=(U,ae)=>{S(),u(ne=>ne.map($=>$.key===U?{...$,...ae}:$))},X=U=>{S(),u(ae=>ae.filter(ne=>ne.key!==U))},le=()=>{u([]),m(null)},W=v.useMemo(()=>{const U=c.filter(C=>C.space==="화장실"),ae=c.map(C=>{const Z=Ht[C.space],I=li(C.space,C.variantId),be=Z.materialLocked?Z.rec:C.material,fe=Ho(C,r),N=U.length>1&&C.space==="화장실";return{key:C.key,space:C.space,icon:Z.icon,label:`${C.space}${N?" · "+I.label:""}`,material:be,unit:fe}}),ne=ae.reduce((C,Z)=>C+(Z.unit??0),0),$=ae.some(C=>C.unit===null),ie=p?Eo[p]:null,De=ie?ie.prices[r]:ne,ke=ie?Math.max(0,ne-De):0;return{lineItems:ae,itemsSum:ne,hasNull:$,finalTotal:De,savings:ke,set:ie}},[c,r,p]),P=()=>{if(c.length===0)return;const U=[];U.push(`[가격 계산기에서 전달된 구성 · ${r} 기준]`),W.set&&U.push(`✓ ${W.set.name} · ${W.set.sub} (${W.set.desc})`),U.push("");const ae=c.filter(ie=>ie.space==="화장실").length;let ne=0;for(const ie of c){const De=Ht[ie.space],ke=li(ie.space,ie.variantId),C=De.materialLocked?De.rec:ie.material,Z=Zs[C],I=Ho(ie,r),be=I===null?"별도 견적":`${I}만원`;let fe;ie.space==="화장실"?(ne+=1,fe=`화장실${ae>1?` ${ne}`:""} · ${ke.label}`):De.variants.length>1||ke.label!=="바닥"?fe=`${ie.space} · ${ke.label}`:fe=ie.space,U.push(`· ${fe} · ${Z} — ${be}`)}if(W.set&&W.set.services.length>0){U.push(""),U.push("함께 제공 서비스:");for(const ie of W.set.services)U.push(`· ${ie}`)}U.push(""),U.push("───────────"),W.set&&W.savings>0&&(U.push(`개별 합계: ${W.itemsSum}만원`),U.push(`세트 적용: -${W.savings}만원`)),U.push(`예상 견적가: ${W.finalTotal}만원${W.hasNull?" +α":""} (VAT 포함, 34평·300타일 기준)`),U.push("※정확한 금액은 유선상담 진행 후 안내드립니다.");const $={areas:Av(c.map(ie=>ie.space)),message:U.join(`
`).slice(0,500)};try{sessionStorage.setItem(qs,JSON.stringify($)),window.dispatchEvent(new CustomEvent(Uo))}catch{}h(!0)},Ne=()=>{h(!1);const U=document.querySelector("#quote");U&&U.scrollIntoView({behavior:"smooth"})};return v.useEffect(()=>{if(!b)return;const U=ne=>{ne.key==="Escape"&&h(!1)};document.addEventListener("keydown",U);const ae=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",U),document.body.style.overflow=ae}},[b]),l.jsxs("section",{id:"calc",className:"spc-section py-20 px-6 md:px-12 lg:px-20",children:[l.jsxs("div",{className:"spc-container max-w-7xl mx-auto",children:[l.jsxs("div",{className:"mb-10",children:[l.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Price Calculator"}),l.jsxs("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:[l.jsxs("span",{className:"md:block",children:["공간을 고르면,",l.jsx("br",{})]})," ",l.jsx("span",{className:"md:block",children:"가격이 바로 보입니다"})]}),l.jsx("p",{className:"text-stone-500 mt-1 sm:mt-3 text-base max-w-[56ch]",children:"필요한 공간만 골라 실시간 견적을 확인하세요"}),l.jsxs("div",{className:"spc-info-chips mt-5",children:[l.jsx("span",{className:"spc-info-chip",children:"34평 이하 기준"}),l.jsx("span",{className:"spc-info-chip",children:"300개 타일 기준"}),l.jsx("span",{className:"spc-info-chip",children:"VAT 포함"})]})]}),l.jsxs("div",{className:"spc-body",children:[l.jsxs("div",{className:"spc-left",children:[l.jsxs("div",{className:"spc-step",children:[l.jsxs("div",{className:"spc-step-head",children:[l.jsx("div",{className:"spc-step-num",children:"01"}),l.jsxs("div",{className:"spc-step-titles",children:[l.jsx("div",{className:"spc-step-title",children:"시공할 공간을 선택해 주세요"}),l.jsx("div",{className:"spc-step-sub",children:"여러 공간을 자유롭게 조합하세요 · 화장실은 최대 2곳까지"})]}),c.length>0&&l.jsx("button",{type:"button",className:"spc-step-action",onClick:le,children:"전체 초기화"})]}),l.jsx("div",{className:"spc-step-body",children:l.jsxs("div",{className:"spc-space-grid",children:[l.jsx(Ao,{icon:Ht.화장실.icon,label:"화장실 1",en:"BATHROOM",selected:k,onClick:q}),l.jsx(Ao,{icon:Ht.화장실.icon,label:"화장실 (추가)",en:"BATHROOM +",selected:B,disabled:!k,onClick:Y}),zv.slice(1).map(U=>l.jsx(Ao,{icon:Ht[U].icon,label:Ht[U].label,en:Ht[U].en,selected:Q(U),onClick:()=>G(U)},U))]})})]}),l.jsxs("div",{className:"spc-step",children:[l.jsxs("button",{type:"button",className:"spc-accordion-head",onClick:()=>g(U=>!U),"aria-expanded":x,children:[l.jsx("div",{className:"spc-step-num",children:"02"}),l.jsxs("div",{className:"spc-step-titles",children:[l.jsx("div",{className:"spc-step-title",children:"또는 간편 세트 패키지로 선택"}),l.jsx("div",{className:"spc-step-sub",children:"자주 함께 시공되는 4가지 구성"})]}),l.jsx("span",{className:"spc-accordion-chev","aria-hidden":"true",children:x?"−":"+"})]}),x&&l.jsxs("div",{className:"spc-step-body",children:[l.jsx("div",{className:"spc-set-grid",children:["1","2","3","4"].map(U=>l.jsx(Rv,{id:U,set:Eo[U],selected:p===U,houseType:r,onPick:()=>V(U)},U))}),l.jsx("p",{className:"spc-set-note",children:"※ 세트 가격은 컴포넌트 개별 합산과 동일하지 않습니다. 추가 서비스 포함 구성이며, 4개 세트는 시각적으로 동등하게 노출됩니다."})]})]}),c.length>0&&l.jsxs("div",{className:"spc-step",children:[l.jsxs("div",{className:"spc-step-head",children:[l.jsx("div",{className:"spc-step-num",children:"03"}),l.jsxs("div",{className:"spc-step-titles",children:[l.jsx("div",{className:"spc-step-title",children:"세부 옵션을 조정해 보세요"}),l.jsx("div",{className:"spc-step-sub",children:"타입 · 범위 · 자재를 변경하면 견적이 실시간으로 업데이트됩니다"})]})]}),l.jsx("div",{className:"spc-step-body",children:l.jsx("div",{className:"spc-selrow-list",children:c.map((U,ae)=>l.jsx(Cv,{sel:U,houseType:r,bathroomIndex:U.space==="화장실"?w.findIndex(ne=>ne.key===U.key):-1,bathroomCount:w.length,onUpdate:ne=>H(U.key,ne),onRemove:()=>X(U.key)},U.key))})})]})]}),l.jsx("aside",{className:"spc-right",children:l.jsxs("div",{className:"spc-result",children:[l.jsx("div",{className:"spc-result-eyebrow",children:l.jsx("span",{className:"spc-result-ht-lbl",children:"줄눈 시공 계산기"})}),l.jsxs("div",{className:"spc-result-ht",children:[l.jsx("span",{className:"spc-result-ht-lbl",children:"주거 유형"}),l.jsx("div",{className:"spc-ht-toggle",children:["신축","구축"].map(U=>l.jsx("button",{type:"button",className:`spc-ht-btn ${r===U?"on":""}`,onClick:()=>o(U),children:U},U))})]}),W.set&&l.jsxs("div",{className:"spc-set-banner",children:[l.jsxs("div",{className:"spc-set-banner-meta",children:[l.jsx("span",{className:"spc-set-banner-lbl",children:"★ SET APPLIED"}),l.jsxs("span",{className:"spc-set-banner-name",children:[W.set.name," ",l.jsxs("span",{className:"spc-set-banner-sub",children:["· ",W.set.sub]})]})]}),l.jsx("button",{type:"button",className:"spc-set-banner-clear",onClick:S,"aria-label":"세트 해제",children:"×"})]}),c.length===0?l.jsxs("div",{className:"spc-result-empty",children:["좌측에서 공간을 개별로 선택하거나,",l.jsx("br",{}),"세트 패키지를 골라 보세요."]}):l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"spc-result-section",children:[l.jsxs("div",{className:"spc-result-section-lbl",children:["선택 항목 · ",W.lineItems.length,"건"]}),l.jsx("ul",{className:"spc-line-items",children:W.lineItems.map(U=>l.jsxs("li",{className:"spc-line-item",children:[l.jsxs("div",{className:"spc-li-main",children:[l.jsx("span",{className:"spc-li-icon","aria-hidden":"true",children:U.icon}),l.jsxs("div",{className:"spc-li-text",children:[l.jsx("div",{className:"spc-li-label",children:U.label}),l.jsxs("div",{className:"spc-li-meta",children:[Zs[U.material]," · ",r]})]})]}),l.jsx("div",{className:"spc-li-price",children:U.unit===null?l.jsx("span",{className:"spc-li-quote",children:"별도 견적"}):l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"spc-li-val",children:cl(U.unit)}),l.jsx("span",{className:"spc-li-unit",children:"만원"})]})})]},U.key))})]}),W.set&&W.set.services.length>0&&l.jsxs("div",{className:"spc-result-services",children:[l.jsx("div",{className:"spc-result-section-lbl",children:"+ 함께 제공되는 서비스"}),l.jsx("ul",{className:"spc-services-list",children:W.set.services.map(U=>l.jsxs("li",{className:"spc-service-item",children:["✓ ",U]},U))})]}),l.jsxs("div",{className:"spc-totals",children:[W.set&&l.jsxs("div",{className:"spc-subtotal-row",children:[l.jsx("span",{className:"spc-totals-lbl",children:"개별 합계"}),l.jsxs("span",{className:"spc-subtotal-val",children:[l.jsx("span",{className:"strike",children:cl(W.itemsSum)}),l.jsx("span",{className:"spc-totals-suffix",children:"만원"})]})]}),W.set&&W.savings>0&&l.jsxs("div",{className:"spc-discount-note",children:["세트 적용 −",cl(W.savings),"만원"]}),l.jsxs("div",{className:"spc-final-row",children:[l.jsx("span",{className:"spc-totals-lbl spc-totals-lbl-accent",children:"최종 견적가"}),l.jsxs("span",{className:"spc-final-price",children:[l.jsx("span",{className:"spc-final-val",children:cl(W.finalTotal)}),l.jsx("span",{className:"spc-totals-suffix spc-totals-suffix-lg",children:"만원"}),W.hasNull&&l.jsx("span",{className:"spc-hasnull",children:"+α"})]})]}),W.hasNull&&l.jsx("div",{className:"spc-hasnull-note",children:"‘별도 견적’ 항목이 포함되어 있어 현장 확인 후 안내드립니다."})]}),l.jsx("button",{type:"button",className:"spc-cta",onClick:P,children:"이 구성으로 견적 받기 →"})]}),l.jsxs("div",{className:"spc-policy",children:[l.jsx("span",{className:"spc-policy-chip",children:"📷 원격 견적"}),l.jsx("span",{className:"spc-policy-chip",children:"💡 2년 A/S · 케라폭시"}),l.jsx("span",{className:"spc-policy-chip",children:"✓ VAT 포함"})]}),l.jsx("p",{className:"spc-fineprint",children:"※ 34평 이하 · 300개 타일 기준 예상가. 정확한 금액은 사진·정보 확인 후 서면 견적서로 안내드립니다."})]})})]})]}),b&&l.jsx("div",{className:"spc-modal-overlay",role:"dialog","aria-modal":"true","aria-labelledby":"spc-modal-title",onClick:()=>h(!1),children:l.jsxs("div",{className:"spc-modal",onClick:U=>U.stopPropagation(),children:[l.jsx("button",{type:"button",className:"spc-modal-close",onClick:()=>h(!1),"aria-label":"닫기",children:"×"}),l.jsx("span",{className:"spc-modal-eyebrow",children:"견적 전달 완료"}),l.jsx("h3",{id:"spc-modal-title",className:"spc-modal-title",children:"견적 구성이 자동으로 담겼습니다"}),l.jsxs("p",{className:"spc-modal-body",children:[l.jsx("strong",{children:"이름 · 연락처 · 시공 위치 · 희망 날짜"}),l.jsx("br",{}),"4가지 정보만 입력해 주시면",l.jsx("br",{}),"빠른 시간 내 유선으로 안내드리겠습니다."]}),l.jsx("button",{type:"button",className:"spc-modal-cta",onClick:Ne,children:"견적 폼으로 이동 →"})]})}),l.jsx("style",{children:Mv})]})}function Ao({icon:r,label:o,en:c,selected:u,disabled:p,onClick:m}){return l.jsxs("button",{type:"button",className:`spc-space-card ${u?"on":""} ${p?"is-disabled":""}`,onClick:m,disabled:p,"aria-pressed":u,children:[l.jsx("span",{className:"spc-sc-icon","aria-hidden":"true",children:r}),l.jsxs("span",{className:"spc-sc-meta",children:[l.jsx("span",{className:"spc-sc-label",children:o}),l.jsx("span",{className:"spc-sc-en",children:c})]}),l.jsx("span",{className:"spc-sc-action","aria-hidden":"true",children:p?"🔒":u?"✓":"＋"})]})}function Rv({id:r,set:o,selected:c,houseType:u,onPick:p}){return l.jsxs("div",{className:`spc-set-card ${c?"on":""}`,children:[l.jsxs("div",{className:"spc-set-head",children:[l.jsxs("span",{className:"spc-set-num",children:["SET 0",r]}),l.jsxs("h3",{className:"spc-set-name",children:[o.name," ",l.jsxs("span",{className:"spc-set-sub",children:["· ",o.sub]})]})]}),l.jsx("p",{className:"spc-set-desc",children:o.desc}),l.jsxs("div",{className:"spc-set-prices",children:[l.jsxs("div",{className:"spc-set-price",children:[l.jsx("span",{className:"spc-set-price-lbl",children:"신축"}),l.jsx("span",{className:"spc-set-price-val",children:cl(o.prices.신축)}),l.jsx("span",{className:"spc-set-price-unit",children:"만원"})]}),l.jsxs("div",{className:"spc-set-price",children:[l.jsx("span",{className:"spc-set-price-lbl",children:"구축"}),l.jsx("span",{className:"spc-set-price-val",children:cl(o.prices.구축)}),l.jsx("span",{className:"spc-set-price-unit",children:"만원"})]})]}),o.services.length>0&&l.jsxs("div",{className:"spc-set-services",children:[l.jsx("div",{className:"spc-set-services-lbl",children:"+ 함께 제공"}),l.jsx("ul",{children:o.services.map(m=>l.jsxs("li",{children:["· ",m]},m))})]}),l.jsx("button",{type:"button",className:"spc-set-cta",onClick:p,children:c?"✓ 적용 중 · 다시 누르면 해제":"이 세트로 선택 →"}),l.jsxs("p",{className:"spc-set-note-inner",children:[u==="신축"?"신축":"구축"," 기준"]})]})}function Cv({sel:r,houseType:o,bathroomIndex:c,bathroomCount:u,onUpdate:p,onRemove:m}){const x=Ht[r.space],g=li(r.space,r.variantId),b=r.space==="화장실",h=x.materialLocked?x.rec:r.material,w=Ho(r,o),k=S=>{if(!b)return;const G=g.scope??"바닥만";p({variantId:Bo(S,G)})},B=S=>{if(!b)return;const G=g.type??"욕조형";p({variantId:Bo(G,S)})},Q=b&&u>1?`${x.label} ${c+1}`:x.label;return l.jsxs("div",{className:"spc-sel-row",children:[l.jsxs("div",{className:"spc-sel-row-head",children:[l.jsxs("div",{className:"spc-sel-row-title",children:[l.jsx("span",{className:"spc-sr-icon","aria-hidden":"true",children:x.icon}),l.jsx("span",{children:Q})]}),l.jsx("button",{type:"button",className:"spc-sel-x",onClick:m,"aria-label":"이 항목 삭제",children:"×"})]}),l.jsxs("div",{className:"spc-sel-row-body",children:[b&&x.typeAxis&&l.jsxs("div",{className:"spc-sr-block",children:[l.jsx("div",{className:"spc-sr-lbl",children:x.typeAxis.lbl}),l.jsx("div",{className:"spc-sr-chips",children:x.typeAxis.options.map(S=>l.jsx("button",{type:"button",className:`spc-sr-chip ${g.type===S?"on":""}`,onClick:()=>k(S),children:S},S))})]}),b&&x.scopeAxis&&l.jsxs("div",{className:"spc-sr-block",children:[l.jsx("div",{className:"spc-sr-lbl",children:x.scopeAxis.lbl}),l.jsx("div",{className:"spc-sr-chips",children:x.scopeAxis.options.map(S=>l.jsx("button",{type:"button",className:`spc-sr-chip ${g.scope===S?"on":""}`,onClick:()=>B(S),children:S},S))})]}),!b&&x.variants.length>1&&l.jsxs("div",{className:"spc-sr-block",children:[l.jsx("div",{className:"spc-sr-lbl",children:"옵션"}),l.jsx("div",{className:"spc-sr-chips",children:x.variants.map(S=>l.jsx("button",{type:"button",className:`spc-sr-chip ${r.variantId===S.id?"on":""}`,onClick:()=>p({variantId:S.id}),children:S.label},S.id))})]}),x.materialLocked?l.jsx("div",{className:"spc-sr-locked",children:"EPOXY ONLY · 물 접촉 환경 → 폴리우레아 시공 불가"}):l.jsxs("div",{className:"spc-sr-block",children:[l.jsxs("div",{className:"spc-sr-lbl",children:["자재 ",l.jsxs("span",{className:"spc-sr-lbl-aux",children:["권장 ",Zs[x.rec]]})]}),l.jsx("div",{className:"spc-sr-chips",children:["kera","poly"].map(S=>l.jsx("button",{type:"button",className:`spc-sr-chip ${h===S?"on":""}`,onClick:()=>p({material:S}),children:Zs[S]},S))})]}),l.jsxs("div",{className:"spc-sr-price",children:[l.jsxs("span",{className:"spc-sr-price-lbl",children:[o," · 예상가"]}),w===null?l.jsx("span",{className:"spc-sr-quote",children:"QUOTE NEEDED · 별도 견적"}):l.jsxs("span",{className:"spc-sr-price-val-wrap",children:[l.jsx("span",{className:"spc-sr-price-val",children:cl(w)}),l.jsx("span",{className:"spc-sr-price-unit",children:"만원"})]})]})]})]})}const Mv=`
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
`,Ov="/assets/grouting-Bwtwubk9.jpg",_v="/assets/grouting_m-MwMcW6AJ.jpg",Dv=["Since 2019","누적 2,000+ 현장","전 시공 대표 직접 마감"];function Uv(){return l.jsxs("section",{id:"about",className:"ab-section",children:[l.jsxs("div",{className:"ab-photo-wrap","aria-hidden":"true",children:[l.jsxs("picture",{children:[l.jsx("source",{media:"(max-width: 900px)",srcSet:_v}),l.jsx("img",{src:Ov,alt:"",className:"ab-photo",loading:"lazy"})]}),l.jsx("div",{className:"ab-photo-fade"})]}),l.jsx("div",{className:"ab-text-outer px-6 md:px-12 lg:px-20",children:l.jsx("div",{className:"max-w-7xl mx-auto",children:l.jsxs("div",{className:"ab-text",children:[l.jsx("span",{className:"ab-eyebrow",children:"About Detailline"}),l.jsxs("h2",{className:"ab-headline",children:["보이지 않는",l.jsx("br",{}),"한 줄에도,",l.jsx("br",{}),l.jsx("span",{className:"ab-accent",children:"집요한 정성."})]}),l.jsxs("p",{className:"ab-body",children:["줄눈 한 줄은 손가락 한 마디 폭. 하지만 그 한 줄이",l.jsx("br",{className:"ab-br-pc"}),"공간의 인상을 좌우합니다. 디테일라인은 그 한 줄을",l.jsx("br",{className:"ab-br-pc"}),"끝까지 다듬는 사람들의 이름입니다."]}),l.jsx("ul",{className:"ab-badges",children:Dv.map(r=>l.jsxs("li",{className:"ab-badge",children:[l.jsx("span",{className:"ab-dot","aria-hidden":"true"}),r]},r))})]})})}),l.jsx("style",{children:Bv})]})}const Bv=`
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
`,zm=[{id:1,question:"줄눈 시공은 어떤 공간에 적용할 수 있나요?",answer:"화장실, 주방, 현관, 베란다, 거실, 수영장, 목욕탕 등 타일이 시공된 모든 공간에 적용 가능합니다. 주거 공간뿐만 아니라 상업 시설, 공공시설에도 시공 가능하며, 실내외 모두 가능합니다. 공간별 특성에 맞는 전용 줄눈재를 사용합니다."},{id:2,question:"시공 기간은 얼마나 걸리나요?",answer:"일반 가정용 화장실 기준으로 보통 반나절(4~6시간) 내에 완료됩니다. 시공 면적과 오염 정도에 따라 다를 수 있으며, 대형 공간이나 전면 교체의 경우 1~2일이 소요될 수 있습니다. 정확한 기간은 현장 확인 후 안내드립니다."},{id:3,question:"기존 줄눈을 제거하고 새로 시공하나요?",answer:"오염 정도와 상태에 따라 달라집니다. 경미한 오염의 경우 세척 후 덧시공이 가능하지만, 곰팡이가 심하거나 들뜸 현상이 있는 경우에는 전동 공구를 이용해 기존 줄눈을 완전히 제거한 후 새로 시공합니다. 현장 방문 후 최적의 방법을 제안드립니다."},{id:4,question:"시공 후 관리 방법이 있나요?",answer:"시공 완료 후 24시간은 물에 닿지 않도록 해주세요. 이후에는 일반 중성 세제로 청소하시면 됩니다. 강산성·강알칼리성 세제는 줄눈재를 손상시킬 수 있으니 피해주세요. 정기적인 청소만으로도 시공 효과가 오래 유지됩니다. 보통 5~10년 이상 효과가 지속됩니다."},{id:5,question:"곰팡이가 심한 경우에도 시공이 가능한가요?",answer:"네, 가능합니다. 먼저 항균·항곰팡이 처리를 진행한 후, 곰팡이 방지 성분이 포함된 항균 줄눈재를 사용하여 시공합니다. 심한 경우에는 타일과 방수층까지 점검하여 근본적인 원인을 해결합니다. 재발 방지를 위한 처리까지 함께 진행합니다."},{id:6,question:"견적은 어떻게 받을 수 있나요?",answer:'하단의 "무료 견적 신청" 폼을 작성하시거나 전화로 문의 주시면 됩니다. 시공 면적, 타일 종류, 현재 상태 등 간단한 정보와 사진을 보내주시면 더 정확한 견적을 드릴 수 있습니다. 현장 방문 견적도 무료로 진행하고 있습니다.'}];function Hv(r){return{"@context":"https://schema.org","@type":"FAQPage",mainEntity:r.map(({q:o,a:c})=>({"@type":"Question",name:o,acceptedAnswer:{"@type":"Answer",text:c}}))}}function ol(r){return{"@context":"https://schema.org","@type":"Article",headline:r.title,description:r.description,mainEntityOfPage:{"@type":"WebPage","@id":r.url},image:r.image,datePublished:r.datePublished,dateModified:r.dateModified??r.datePublished,author:{"@type":"Organization",name:"디테일라인"},publisher:{"@type":"Organization",name:"디테일라인"}}}function ul(r){return{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:r.map((o,c)=>({"@type":"ListItem",position:c+1,name:o.name,item:o.url}))}}function st(r,o){document.getElementById(r)?.remove();const c=document.createElement("script");return c.type="application/ld+json",c.id=r,c.textContent=JSON.stringify(o),document.head.appendChild(c),()=>{document.getElementById(r)?.remove()}}function Lv(){const[r,o]=v.useState(null);v.useEffect(()=>st("faq-jsonld",Hv(zm.map(p=>({q:p.question,a:p.answer})))),[]);const c=u=>{o(p=>p===u?null:u)};return l.jsx("section",{id:"faq",className:"py-20 px-6 md:px-12 lg:px-20 bg-[var(--bg-2)]",children:l.jsxs("div",{className:"max-w-3xl mx-auto",children:[l.jsxs("div",{className:"text-center mb-10",children:[l.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"FAQ"}),l.jsx("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:"자주 묻는 질문"}),l.jsx("p",{className:"text-[var(--muted)] mt-3 text-base",children:"궁금하신 점을 확인하세요"})]}),l.jsx("div",{className:"space-y-0",children:zm.map((u,p)=>l.jsxs("div",{className:`border-b ${p===0?"border-t":""} border-[var(--line)]`,children:[l.jsxs("button",{onClick:()=>c(u.id),className:"w-full flex items-start justify-between gap-4 py-5 text-left cursor-pointer group",children:[l.jsx("span",{className:`text-base font-medium leading-snug transition-colors ${r===u.id?"text-[var(--ink)]":"text-[var(--muted)] group-hover:text-[var(--ink-2)]"}`,children:u.question}),l.jsx("div",{className:`w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full transition-all ${r===u.id?"bg-[var(--ink)] text-[var(--paper)] rotate-45":"bg-[var(--paper)] text-[var(--muted)] border border-[var(--line)]"}`,children:l.jsx("i",{className:"ri-add-line text-sm"})})]}),r===u.id&&l.jsx("div",{className:"pb-10 bg-[var(--paper)]",children:l.jsx("p",{className:"px-5 pt-3 text-[var(--ink-2)] text-sm leading-relaxed",children:u.answer})})]},u.id))}),l.jsxs("div",{className:"mt-12 text-center bg-[var(--paper)] border border-[var(--line)] rounded-sm py-10 px-6",children:[l.jsx("p",{className:"text-stone-600 font-medium mb-2",children:"원하는 답을 찾지 못하셨나요?"}),l.jsx("p",{className:"text-stone-400 text-sm mb-6",children:"전화로 편하게 문의해 주세요"}),l.jsx("div",{className:"flex justify-center",children:l.jsxs("a",{href:"tel:010-8005-6674",onClick:()=>at.phoneClick("faq"),className:"inline-flex h-12 sm:min-w-[180px] items-center justify-center gap-2 px-7 text-sm font-medium cursor-pointer rounded-sm bg-[var(--accent)] text-white transition-all hover:bg-[var(--accent-deep)]",children:[l.jsx("i",{className:"ri-phone-line"}),"010-8005-6674"]})})]})]})})}const ph=["일","월","화","수","목","금","토"];function Tm(r,o){return r.getFullYear()===o.getFullYear()&&r.getMonth()===o.getMonth()&&r.getDate()===o.getDate()}function Rm(r){return`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}-${String(r.getDate()).padStart(2,"0")}`}function Yv(r){return`${r.getFullYear()}년 ${r.getMonth()+1}월 ${r.getDate()}일 (${ph[r.getDay()]})`}function qv({name:r="date",onChange:o}){const c=new Date,[u,p]=v.useState(!1),[m,x]=v.useState(c.getFullYear()),[g,b]=v.useState(c.getMonth()),[h,w]=v.useState(null),k=H=>{const X=new Date(m,g+H,1);x(X.getFullYear()),b(X.getMonth())},B=H=>{w(H),o?.(Rm(H)),p(!1)},Q=()=>{w(null),o?.("")},S=()=>{x(c.getFullYear()),b(c.getMonth()),B(c)},G=new Date(m,g,1).getDay(),q=new Date(m,g+1,0).getDate(),Y=new Date(c.getFullYear(),c.getMonth(),c.getDate()),V=[...Array(G).fill(null),...Array.from({length:q},(H,X)=>new Date(m,g,X+1))];return l.jsxs("div",{className:"relative w-full",children:[l.jsxs("button",{type:"button",onClick:()=>p(H=>!H),className:"w-full flex items-center justify-between px-4 py-3 rounded-sm border border-[var(--line)] bg-[var(--paper)] hover:border-[var(--line-strong)] transition-all duration-150",children:[l.jsx("span",{className:`text-sm ${h?"text-[var(--ink)]":"text-[var(--muted-2)]"}`,children:h?Yv(h):"날짜를 선택해 주세요"}),l.jsx("i",{className:"ri-calendar-line text-stone-400 text-base"})]}),l.jsx("input",{type:"hidden",name:r,value:h?Rm(h):""}),u&&l.jsxs("div",{className:"absolute z-50 mt-2 w-full bg-[var(--paper)] border border-[var(--line)] rounded-sm shadow-xl overflow-hidden",children:[l.jsxs("div",{className:"flex items-center justify-between px-5 pt-5 pb-3",children:[l.jsx("button",{type:"button",onClick:()=>k(-1),className:"w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-100 transition-colors",children:l.jsx("i",{className:"ri-arrow-left-s-line text-stone-500"})}),l.jsxs("span",{className:"text-sm font-medium text-stone-800 tracking-tight",children:[m,"년 ",g+1,"월"]}),l.jsx("button",{type:"button",onClick:()=>k(1),className:"w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-100 transition-colors",children:l.jsx("i",{className:"ri-arrow-right-s-line text-stone-500"})})]}),l.jsx("div",{className:"grid grid-cols-7 px-3 pb-1",children:ph.map((H,X)=>l.jsx("div",{className:`text-center text-xs font-medium py-1 ${X===0||X===6?"text-[var(--accent)]":"text-[var(--muted-2)]"}`,children:H},H))}),l.jsx("div",{className:"grid grid-cols-7 px-3 pb-4 gap-y-1",children:V.map((H,X)=>{if(!H)return l.jsx("div",{},`empty-${X}`);const le=H<Y,W=Tm(H,c),P=h?Tm(H,h):!1,Ne=H.getDay()===0,U=H.getDay()===6;let ae="w-9 h-9 mx-auto flex items-center justify-center rounded-full text-sm transition-all duration-100 ";return P?ae+="bg-[var(--ink)] text-[var(--paper)] font-medium":le?ae+="text-[var(--muted-2)]/50 cursor-not-allowed":W?ae+="border border-[var(--accent)] text-[var(--accent)] font-medium hover:bg-[var(--accent)]/10":Ne||U?ae+="text-[var(--muted-2)] hover:bg-[var(--bg-2)]":ae+="text-[var(--ink-2)] hover:bg-[var(--bg-2)]",l.jsx("button",{type:"button",disabled:le,onClick:()=>B(H),className:ae,children:H.getDate()},H.toISOString())})}),l.jsxs("div",{className:"border-t border-[var(--line)] px-4 py-3 flex justify-between items-center",children:[l.jsx("button",{type:"button",onClick:Q,className:"text-xs text-[var(--muted-2)] hover:text-[var(--ink-2)] transition-colors",children:"초기화"}),l.jsx("button",{type:"button",onClick:S,className:"text-xs font-medium text-[var(--accent)] hover:text-[var(--accent-deep)] transition-colors",children:"오늘"})]})]})]})}const Cm=["현관","화장실","베란다","거실","주방","수영장","목욕탕","기타"],Gv="0x4AAAAAADGHPfvxD-MhAQbY";function Vv(r){return r.length<=3?r:r.length<=7?`${r.slice(0,3)}-${r.slice(3)}`:`${r.slice(0,3)}-${r.slice(3,7)}-${r.slice(7,11)}`}function Qv(){const[r,o]=v.useState(!1),[c,u]=v.useState(!1),[p,m]=v.useState(0),[x,g]=v.useState(""),[b,h]=v.useState(""),[w,k]=v.useState(""),[B,Q]=v.useState(""),[S,G]=v.useState([]),[q,Y]=v.useState(""),[V,H]=v.useState(!1),[X,le]=v.useState({}),[W,P]=v.useState(""),Ne=v.useRef(null),U=v.useRef(null),ae=v.useRef(null),ne=v.useRef(!1),$=500;v.useEffect(()=>{if(!ae.current)return;const A=new IntersectionObserver(L=>{L[0]?.isIntersecting&&!ne.current&&(ne.current=!0,at.quoteSectionView(),A.disconnect())},{threshold:.3});return A.observe(ae.current),()=>A.disconnect()},[]),v.useEffect(()=>{let A=!1;const L=()=>{if(!A&&Ne.current){if(typeof window.turnstile>"u"){setTimeout(L,100);return}U.current=window.turnstile.render(Ne.current,{sitekey:Gv,callback:K=>P(K),"error-callback":()=>P(""),"expired-callback":()=>P(""),theme:"light",size:"normal"})}};return L(),()=>{A=!0,U.current&&window.turnstile&&(window.turnstile.remove(U.current),U.current=null)}},[]),v.useEffect(()=>{const A=()=>{try{const L=sessionStorage.getItem(qs);if(!L)return;const K=JSON.parse(L);Array.isArray(K.areas)&&K.areas.length>0&&G(K.areas.filter(se=>Cm.includes(se))),typeof K.message=="string"&&K.message.length>0&&(Y(K.message),m(K.message.length)),le(se=>({...se,areas:""}))}catch{}};return A(),window.addEventListener(Uo,A),()=>window.removeEventListener(Uo,A)},[]);const ie=A=>{const L=A.target.value.replace(/[0-9]/g,"").slice(0,9);g(L),le(K=>({...K,name:""}))},De=A=>{const L=A.target.value.replace(/[^0-9]/g,"").slice(0,11);h(L),le(K=>({...K,phone:""}))},ke=A=>{k(A.target.value.slice(0,39)),le(L=>({...L,location:""}))},C=A=>{Q(A),le(L=>({...L,date:""}))},Z=A=>{G(L=>L.includes(A)?L.filter(oe=>oe!==A):[...L,A]),le(L=>({...L,areas:""}))},I=A=>{H(A.target.checked),le(L=>({...L,privacy:""}))},be=()=>{const A={};return x.trim()||(A.name="이름을 입력해주세요."),b.length?b.length<10&&(A.phone="올바른 연락처를 입력해주세요."):A.phone="연락처를 입력해주세요.",w.trim()||(A.location="시공위치를 입력해주세요."),B||(A.date="희망날짜를 선택해주세요."),S.length===0&&(A.areas="시공공간을 1개 이상 선택해주세요."),V||(A.privacy="개인정보처리방침에 동의해주세요."),W||(A.cfToken="봇 검증을 완료해주세요."),le(A),Object.keys(A).length===0},fe=x.trim().length>0&&b.length>=10&&w.trim().length>0&&B.length>0&&S.length>0&&W.length>0&&V,N=async A=>{if(A.preventDefault(),!be())return;const L=A.currentTarget;if(L.querySelector('[name="company_website"]')?.value||""){o(!0);return}if((L.querySelector('[name="message"]')?.value||"").length>$)return;const oe=new FormData(L),xe=new URLSearchParams;oe.forEach((We,Me)=>{Me!=="phone"&&Me!=="company_website"&&xe.append(Me,We.toString())}),xe.append("phone",b),xe.append("cf_turnstile_token",W),u(!0);try{await fetch("https://script.google.com/macros/s/AKfycbyQBvfjjtCFSY4WZUL2Qv_vIwz4xbXyLF5pygpV5d_jpICW_hhXnDnr1r6jZHhS_kEayA/exec",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:xe.toString()}),at.formSubmit(S,w.split(" ")[0]||"unknown"),o(!0),g(""),h(""),k(""),Q(""),G([]),Y(""),H(!1),m(0),le({}),P("");try{sessionStorage.removeItem(qs)}catch{}U.current&&window.turnstile&&window.turnstile.reset(U.current)}catch{at.formSubmitFail("network"),alert("제출 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.")}finally{u(!1)}};return l.jsx("section",{ref:ae,id:"quote",className:"py-10 px-6 md:px-12 lg:px-20 bg-[var(--bg)]",children:l.jsxs("div",{className:"max-w-4xl mx-auto",children:[l.jsxs("div",{className:"text-center mb-10",children:[l.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Free Estimate"}),l.jsx("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:"무료 견적 상담 신청"}),l.jsx("p",{className:"text-[var(--muted)] mt-3",children:"양식을 작성하시면 24시간 내 연락드립니다"})]}),l.jsx("div",{className:"bg-white rounded-sm pt-5 px-5 pb-6 md:p-12 border border-[var(--line)]",style:{colorScheme:"light"},children:r?l.jsxs("div",{className:"text-center py-12",children:[l.jsx("div",{className:"w-16 h-16 flex items-center justify-center bg-[var(--ink)] rounded-full mx-auto mb-4",children:l.jsx("i",{className:"ri-check-line text-[var(--paper)] text-2xl"})}),l.jsx("h3",{className:"text-xl font-medium text-[var(--ink)] mb-2",children:"신청이 완료되었습니다!"}),l.jsxs("p",{className:"text-[var(--muted)] text-sm",children:["24시간 내에 담당자가 연락드릴 예정입니다.",l.jsx("br",{}),"감사합니다."]}),l.jsx("button",{onClick:()=>{o(!1),g(""),h(""),k(""),Q(""),G([]),Y(""),H(!1),m(0),le({});try{sessionStorage.removeItem(qs)}catch{}},className:"mt-6 text-sm text-stone-400 underline cursor-pointer",children:"다시 신청하기"})]}):l.jsxs("form",{"data-readdy-form":!0,onSubmit:N,className:"space-y-6",children:[l.jsxs("div",{"aria-hidden":"true",style:{position:"absolute",left:"-9999px",width:"1px",height:"1px",overflow:"hidden"},children:[l.jsx("label",{htmlFor:"company_website",children:"Website (do not fill)"}),l.jsx("input",{type:"text",id:"company_website",name:"company_website",tabIndex:-1,autoComplete:"off",defaultValue:""})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[l.jsxs("div",{children:[l.jsxs("label",{className:"block text-sm font-medium text-[var(--ink-2)] mb-1.5",children:["이름 ",l.jsx("span",{className:"text-red-400",children:"*"})]}),l.jsx("input",{type:"text",name:"name",required:!0,value:x,onChange:ie,maxLength:9,placeholder:"홍길동",className:"w-full px-4 py-3 border border-[var(--line)] rounded-sm text-base text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors"}),X.name&&l.jsx("p",{className:"mt-1 text-xs text-red-500",children:X.name})]}),l.jsxs("div",{children:[l.jsxs("label",{className:"block text-sm font-medium text-[var(--ink-2)] mb-1.5",children:["연락처 ",l.jsx("span",{className:"text-red-400",children:"*"})]}),l.jsxs("div",{className:"relative",children:[l.jsx("input",{type:"tel",name:"phone",required:!0,value:Vv(b),onChange:De,inputMode:"numeric",maxLength:13,placeholder:"010-1234-5678",className:"w-full px-4 py-3 border border-[var(--line)] rounded-sm text-base text-stone-700 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors"}),l.jsxs("span",{className:`absolute right-4 top-3 text-xs font-medium ${b.length>=10?"text-[var(--accent)]":"text-[var(--muted-2)]"}`,children:[b.length,"/11"]})]}),X.phone&&l.jsx("p",{className:"mt-1 text-xs text-red-500",children:X.phone})]})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[l.jsxs("div",{children:[l.jsxs("label",{className:"block text-sm font-medium text-[var(--ink-2)] mb-1.5",children:["시공 아파트 ",l.jsx("span",{className:"text-red-400",children:"*"})]}),l.jsx("input",{type:"text",name:"location",required:!0,value:w,onChange:ke,maxLength:39,placeholder:"예 : 서초구 반포동 자이아파트",className:"w-full px-4 py-3 border border-[var(--line)] rounded-sm text-base text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors"}),X.location&&l.jsx("p",{className:"mt-1 text-xs text-red-500",children:X.location})]}),l.jsxs("div",{children:[l.jsxs("label",{className:"block text-sm font-medium text-[var(--ink-2)] mb-1.5",children:["희망 날짜 ",l.jsx("span",{className:"text-red-400",children:"*"})]}),l.jsx(qv,{name:"date",onChange:C}),X.date&&l.jsx("p",{className:"mt-1 text-xs text-red-500",children:X.date})]})]}),l.jsxs("div",{children:[l.jsxs("label",{className:"block text-sm font-medium text-stone-700 mb-2",children:["시공 공간 (중복 선택 가능) ",l.jsx("span",{className:"text-red-400",children:"*"})]}),l.jsx("div",{className:"flex flex-wrap gap-2",children:Cm.map(A=>l.jsxs("label",{className:"cursor-pointer",children:[l.jsx("input",{type:"checkbox",name:"areas",value:A,checked:S.includes(A),onChange:()=>Z(A),className:"sr-only peer"}),l.jsx("span",{className:"inline-block px-5 py-2 rounded-sm text-sm font-medium bg-white text-[var(--muted)] border border-[var(--line)] hover:border-[var(--line-strong)] peer-checked:bg-[var(--accent)] peer-checked:text-white peer-checked:border-[var(--accent)] transition-all cursor-pointer whitespace-nowrap",children:A})]},A))}),X.areas&&l.jsx("p",{className:"mt-1 text-xs text-red-500",children:X.areas})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-[var(--ink-2)] mb-1.5",children:"상세 내용"}),l.jsxs("div",{className:"relative",children:[l.jsx("textarea",{name:"message",rows:8,maxLength:$,value:q,onChange:A=>{Y(A.target.value),m(A.target.value.length)},placeholder:"시공 면적, 현재 상태, 요청 사항 등을 자유롭게 작성해 주세요.",className:"w-full px-4 py-3 border border-[var(--line)] rounded-sm text-base text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors resize-none"}),l.jsxs("span",{className:"absolute bottom-3 right-4 text-xs text-stone-400",children:[p," / ",$]})]})]}),l.jsxs("div",{className:"border-t text-sm text-center text-stone-500 px-4 py-3 border-stone-200",children:["희망 날짜에 시공이 어려울 수 있는 점 양해 부탁드립니다. ",l.jsx("br",{}),l.jsx("span",{className:"font-bold text-red-400",children:"정확한 시공 가능 일정은 상담 후 안내드리며,"})," 최대한 희망에 맞춰 드릴 수 있도록 노력하겠습니다."]}),l.jsxs("div",{children:[l.jsx("div",{ref:Ne,className:"flex justify-center"}),X.cfToken&&l.jsx("p",{className:"mt-1 text-xs text-red-500 text-center",children:X.cfToken})]}),l.jsxs("div",{className:"flex items-start gap-3",children:[l.jsx("input",{type:"checkbox",id:"privacy",name:"privacy",required:!0,checked:V,onChange:I,className:"w-5 h-5 mt-0.5 cursor-pointer accent-[var(--accent)]"}),l.jsxs("label",{htmlFor:"privacy",className:"text-sm text-stone-400 leading-relaxed cursor-pointer",children:["수집된 개인정보(이름, 연락처, 시공 위치, 희망 일정, 시공 공간, 상세 내용)는 견적 상담 목적으로만 사용되며, 상담 완료 후 즉시 폐기됩니다."," ",l.jsx(Ae,{to:"/privacy",target:"_blank",rel:"noopener noreferrer",onClick:A=>A.stopPropagation(),className:"text-[var(--accent)] font-semibold underline underline-offset-2 hover:opacity-80",children:"개인정보 처리방침"}),"에 동의합니다."]})]}),X.privacy&&l.jsx("p",{className:"-mt-3 text-xs text-red-500",children:X.privacy}),l.jsx("button",{type:"submit",disabled:c||!fe,className:"w-full py-4 bg-[var(--ink)] text-[var(--paper)] font-medium text-base rounded-sm hover:bg-[var(--accent-deep)] transition-all cursor-pointer whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed",children:c?"제출 중...":"견적 신청하기"})]})})]})})}const ve="https://www.detailline.kr",Zv="디테일라인",Lo="010-8005-6674",fh=`${ve}/og_banner.jpg`,dl={"/":{title:"서울·경기·인천 줄눈시공 전문 디테일라인 | 케라폭시·폴리우레아 시공",description:"서울·경기·인천 줄눈시공 전문업체 디테일라인. 화장실·욕실·베란다·현관 케라폭시·폴리우레아 줄눈. 대표 직접 시공, KC 인증 친환경 자재, 시공 후 2년 무상 A/S. 무료 견적 상담.",keywords:"줄눈시공, 케라폭시, 폴리우레아, 화장실 줄눈, 욕실 줄눈, 베란다 줄눈, 현관 줄눈, 서울 줄눈시공, 경기 줄눈시공, 인천 줄눈시공, 강남 줄눈시공, 서초 줄눈시공, 송파 줄눈시공, 마포 줄눈시공, 성남 줄눈시공, 분당 줄눈시공, 노후 아파트 줄눈 보수, 신축 입주 줄눈, 리모델링 줄눈"},"/info/why-grout":{title:"줄눈 곰팡이·들뜸 해결 가이드 — 노후 아파트 줄눈 보수 | 디테일라인",description:"줄눈 곰팡이·균열·들뜸 원인과 해결법. 화장실·욕실·베란다·현관 노후 줄눈 보수 가이드. 신축 입주·리모델링 사전 점검 시 확인할 것.",keywords:"줄눈 곰팡이, 욕실 줄눈 곰팡이, 화장실 줄눈 곰팡이, 줄눈 들뜸, 줄눈 균열, 줄눈 보수 시기, 줄눈 교체 시기, 노후 아파트 줄눈, 신축 사전점검 줄눈, 리모델링 욕실 줄눈"},"/info/kerafoxy":{title:"케라폭시란? 친환경 줄눈 자재의 모든 것 | 디테일라인",description:"이탈리아산 케라폭시 줄눈재 소개. 노후 아파트 욕실·베란다·현관 시공 다수. 일반 줄눈 대비 곰팡이·변색 방지 10배 이상, KC 인증 친환경.",keywords:"케라폭시, 케라폭시 줄눈, 케라폭시란, 욕실 케라폭시, 노후 아파트 케라폭시, 에폭시 줄눈, 친환경 줄눈, 마페이 케라폭시, KC 인증 줄눈"},"/info/kerafoxy-product":{title:"욕실 줄눈 자재 비교 — 케라폭시 6종 색상 가이드 | 디테일라인",description:"케라폭시 클래식·이지디자인·스타라이크·푸가리테 등 자재 비교. 욕실·베란다·현관 공간별 추천. 색상 가이드 포함.",keywords:"케라폭시 제품, 케라폭시 색상, 스타라이크, 푸가리테, 케라폭시 이지디자인, 욕실 줄눈 종류, 욕실 줄눈재, 노후 아파트 줄눈 자재"},"/info/comparison":{title:"폴리우레아 vs 케라폭시 — 욕실·베란다 줄눈 선택 | 디테일라인",description:"욕실은 케라폭시, 베란다는 폴리우레아 — 디테일라인 시공 데이터 기반 자재 선택 가이드. 비용·내구성·시공 시간 비교.",keywords:"폴리우레아 케라폭시 차이, 욕실 케라폭시, 베란다 폴리우레아, 줄눈 자재 비교, 노후 아파트 줄눈 자재, 폴리우레아 단점, 케라폭시 단점"},"/info/kerafoxy-price":{title:"줄눈시공 가격 안내 — 평수별 시공비 | 디테일라인",description:"노후 아파트 욕실·베란다·현관 줄눈 시공비 안내. 30평·40평 평수별 표준 단가, 신축/구축 분리. 디테일라인 고유 가격, 시공 후 2년 무상 A/S.",keywords:"줄눈시공 가격, 화장실 줄눈 가격, 욕실 줄눈 가격, 30평 욕실 줄눈, 40평 줄눈 가격, 노후 아파트 줄눈 비용, 케라폭시 가격, 폴리우레아 가격, 줄눈 견적, 리모델링 줄눈 가격"},"/info/polyurea":{title:"폴리우레아 줄눈 — 베란다·외부 공간 가성비 자재 | 디테일라인",description:"베란다·외부화장실·현관 폴리우레아 줄눈시공. 케라폭시 대비 60~70% 가격, 5년+ 수명. 화장실 시공은 케라폭시만 진행합니다.",keywords:"폴리우레아 줄눈, 폴리우레아 시공, 베란다 폴리우레아, 외부화장실 폴리우레아, 폴리우레아 가격, 폴리우레아 케라폭시 차이, 베란다 줄눈 가성비"},"/portfolio":{title:"디테일라인 줄눈시공 사례 모음 | 서울·경기 케라폭시 시공",description:"디테일라인이 시공한 욕실·베란다·현관·주방 줄눈시공 사례. 단지·평수·자재별로 시공 결과를 확인하세요. 케라폭시·폴리우레아 시공. 무료 견적 상담.",keywords:"줄눈시공 사례, 케라폭시 시공 사례, 폴리우레아 시공 사례, 욕실 줄눈 사례, 화장실 줄눈 사례, 베란다 줄눈 사례, 주방 줄눈 사례, 줄눈시공 후기, 줄눈시공 비포에프터, 디테일라인 시공사례"},"/privacy":{title:"개인정보처리방침 | 디테일라인",description:"디테일라인 개인정보처리방침",keywords:""}};function Pt(r){const{pathname:o}=qt();v.useEffect(()=>{const c=dl[o],u=r?.title??c?.title??Zv,p=r?.description??c?.description??"",m=r?.keywords??c?.keywords??"",x=r?.ogImage??fh,g=`${ve}${o==="/"?"/":o}`;document.title=u,Fl("description",p),Fl("keywords",m),ei("og:title",u),ei("og:description",p),ei("og:url",g),ei("og:image",x),ei("og:image:secure_url",x),Fl("twitter:title",u),Fl("twitter:description",p),Fl("twitter:image",x),Kv("canonical",g),Fl("robots",r?.noindex?"noindex,nofollow":"index,follow,max-image-preview:large")},[o,r])}function Fl(r,o){let c=document.querySelector(`meta[name="${r}"]`);c||(c=document.createElement("meta"),c.name=r,document.head.appendChild(c)),c.content=o}function ei(r,o){let c=document.querySelector(`meta[property="${r}"]`);c||(c=document.createElement("meta"),c.setAttribute("property",r),document.head.appendChild(c)),c.content=o}function Kv(r,o){let c=document.querySelector(`link[rel="${r}"]`);c||(c=document.createElement("link"),c.rel=r,document.head.appendChild(c)),c.href=o}function Xv(){return Pt(),l.jsxs("div",{className:"min-h-screen bg-white",children:[l.jsx(Lt,{}),l.jsxs("main",{children:[l.jsx(Lb,{}),l.jsx(Uv,{}),l.jsx(iv,{}),l.jsx(rv,{}),l.jsx(xv,{}),l.jsx(kv,{}),l.jsx(Tv,{}),l.jsx(Lv,{}),l.jsx(Qv,{})]}),l.jsx(Fo,{}),l.jsx(Yt,{})]})}const mh="/assets/before-DA_T54W5.jpg",hh="/assets/after-Cw81fPXQ.jpg",Jv="/assets/kerafoxy-C29B-TmB.jpg",xh="/assets/bg-zCXDQjbF.webp",gh="/assets/bg_m-D6VSEPhL.webp",$v=[{k:"소재 분류",v:"에폭시 계열"},{k:"원산지",v:"이탈리아"},{k:"수명",v:"10년+"},{k:"A/S",v:"2년"}],Wv=[{k:"압축강도",v:"75 N/mm²"},{k:"수축률",v:"≈ 0% (거의 없음)"},{k:"흡수율",v:"< 0.1 g/cm²"}],Fv=[{idx:"01",title:"강력한 내수성",body:"물에 강한 에폭시 성분으로 화장실·욕실의 지속적인 수분 노출에도 변형 없이 줄눈이 유지됩니다.",k:"흡수율",v:"< 0.1 g/cm²"},{idx:"02",title:"곰팡이·세균 차단",body:"항균 성분이 배합되어 습한 환경에서도 곰팡이와 세균이 번식하지 않아 위생적인 공간을 유지합니다.",k:"항균 등급",v:"JIS Z 2801"},{idx:"03",title:"다양한 색상 선택",body:"화이트·베이지·그레이·블랙 등 20여 가지 색상으로 인테리어 스타일에 맞는 선택이 가능합니다.",k:"컬러 옵션",v:"20+ Colors"},{idx:"04",title:"월등한 내구성",body:"일반 시멘트 줄눈 대비 3~5배 긴 수명을 자랑하며, 균열·탈락 없이 깔끔한 마감이 오래 유지됩니다.",k:"예상 수명",v:"10년+"},{idx:"05",title:"손쉬운 유지관리",body:"표면이 매끄럽고 오염이 잘 스며들지 않아 간단한 청소만으로 항상 깨끗한 상태를 유지할 수 있습니다.",k:"청소",v:"솔 청소 가능"},{idx:"+",title:"대표 직접 시공. 2년 무상 A/S.",body:"소재의 차이만큼이나 중요한 것은 시공자의 손. 디테일라인은 모든 현장을 대표가 직접 마감합니다.",k:"누적",v:"2,000+ 세대",dark:!0}],Pv=[{name:"시멘트 줄눈",tag:"Standard",items:["시공 비용이 가장 저렴","1~2년 후 변색·균열 발생","곰팡이 번식에 취약","주기적 재시공 필요"]},{name:"케라폭시 줄눈",tag:"Detailline 추천",hero:!0,items:["에폭시 결합 — 균열·변색 없음","항균 처리 — 곰팡이 차단","20+ 색상으로 인테리어 매칭","10년+ 수명 · 2년 무상 A/S"]},{name:"폴리우레아",tag:"Heavy-duty",items:["압도적 내구성·하중 강도","주차장·산업 현장에 적합","주거 인테리어엔 과도","색상·질감 선택이 제한적"]}],Iv=[{code:"SP · 01",ko:"화장실 · 욕실",en:"Bath / Powder Room",desc:"가장 많이 사용하는 공간으로, 케라폭시의 내수성과 항균 기능이 극대화됩니다."},{code:"SP · 02",ko:"주방 · 싱크대 주변",en:"Kitchen / Counter",desc:"음식물 오염과 물에 강해 주방 타일 줄눈에 이상적인 소재입니다."},{code:"SP · 03",ko:"베란다 · 발코니",en:"Veranda / Balcony",desc:"자외선과 온도 변화에도 변색이 거의 없어 실외 공간에도 적합합니다."},{code:"SP · 04",ko:"현관 바닥",en:"Entrance Floor",desc:"먼지와 오염이 많은 현관 바닥에서도 변색 없이 깔끔한 마감을 유지합니다."},{code:"SP · 05",ko:"수영장 · 목욕탕",en:"Pool / Sauna",desc:"항시 수분에 노출되는 환경에서도 박리 없이 완벽한 방수 성능을 발휘합니다."}],e1=[{k:"시공 시간",v:"1일 (평형별 상이)"},{k:"건조 시간",v:"24시간 (완전 경화)"},{k:"사용 가능",v:"48시간 후 (물 사용 OK)"},{k:"A/S",v:"2년 (무상)"}],t1=[{idx:"No. 02 · Pricing",href:"/info/kerafoxy-price",title:"케라폭시 가격 안내",desc:"시공 비용에 영향을 주는 요인과 평형별 표준 가격을 한눈에."},{idx:"No. 03 · Product",href:"/info/kerafoxy-product",title:"케라폭시 계열 제품 소개",desc:"케라폭시·인터라컬러 등 주요 제품 라인업과 색상 가이드."},{idx:"No. 04 · Compare",href:"/info/comparison",title:"폴리우레아 vs 케라폭시",desc:"두 소재의 차이점과, 어떤 공간에 어떤 소재가 적합한지."},{idx:"No. 05 · Why",href:"/info/why-grout",title:"줄눈시공 하는 이유",desc:"위생·미관·내구성을 위한 필수 시공인 이유를 정리했습니다."}];function Ms({num:r,ko:o,en:c,title:u,lede:p,dark:m}){return l.jsxs("div",{className:`sec-head ${m?"sec-head-dark":""}`,children:[l.jsxs("div",{className:"sec-bar",children:[l.jsx("span",{className:"sec-n",children:r}),l.jsx("span",{className:"sec-rule"}),l.jsxs("span",{className:"sec-lbl",children:[l.jsx("span",{className:"sec-ko",children:o}),l.jsx("span",{className:"sec-en",children:c})]})]}),l.jsxs("div",{className:"sec-body",children:[l.jsx("h2",{className:"sec-title",children:u}),l.jsx("p",{className:"sec-lede",children:p})]})]})}function a1(){const r=Ft();Pt(),v.useEffect(()=>{const c="/info/kerafoxy",u=dl[c],p=`${ve}${c}`,m=st("article-jsonld",ol({title:u.title,description:u.description,url:p,image:`${ve}/og_banner.jpg`,datePublished:"2026-03-01",dateModified:"2026-05-29"})),x=st("breadcrumb-jsonld",ul([{name:"홈",url:ve},{name:"줄눈 정보",url:`${ve}/#info`},{name:"케라폭시 줄눈이란?",url:p}]));return()=>{m(),x()}},[]),v.useEffect(()=>{window.scrollTo(0,0)},[]);const o=()=>{r("/#calc"),setTimeout(()=>{const c=document.querySelector("#calc");c&&c.scrollIntoView({behavior:"smooth"})},300)};return l.jsxs("div",{className:"page",children:[l.jsx(Lt,{}),l.jsxs("header",{className:"hero","data-screen-label":"01 Hero",children:[l.jsx("div",{className:"kf-hero-bg",style:{"--hero-img-d":`url(${xh})`,"--hero-img-m":`url(${gh})`},"aria-hidden":"true"}),l.jsxs("div",{className:"hero-inner",children:[l.jsx("div",{className:"hero-eyebrow hero-eyebrow-light",children:"Grout Knowledge · 01"}),l.jsxs("h1",{className:"hero-title",children:["케라폭시 줄눈,",l.jsx("br",{}),"한 줄의 깊이 ",l.jsx("em",{children:"완벽"}),"의 기준."]}),l.jsxs("p",{className:"hero-lede",children:["마페이의 80년 경험치를 흡수한 2액형 고성능 줄눈 소재.",l.jsx("br",{}),"일반 시멘트 줄눈과 무엇이 다른지, 왜 프리미엄 공간에 선택되는지 정리했습니다."]}),l.jsx("ul",{className:"hero-meta",children:$v.map(c=>l.jsxs("li",{children:[l.jsx("span",{className:"hero-meta-k",children:c.k}),l.jsx("span",{className:"hero-meta-v",children:c.v})]},c.k))})]})]}),l.jsx("nav",{className:"crumb","aria-label":"현재 위치",children:l.jsxs("div",{className:"container crumb-inner",children:[l.jsx(Ae,{to:"/",className:"crumb-item",children:"홈"}),l.jsx("span",{className:"crumb-sep",children:"/"}),l.jsx("span",{className:"crumb-item",children:"줄눈 정보"}),l.jsx("span",{className:"crumb-sep",children:"/"}),l.jsx("span",{className:"crumb-here",children:"케라폭시 줄눈이란?"})]})}),l.jsx("section",{className:"section","data-screen-label":"02 Introduction",children:l.jsx("div",{className:"container",children:l.jsxs("div",{className:"kf-intro",children:[l.jsxs("div",{className:"kf-intro-left",children:[l.jsx("div",{className:"eyebrow",children:"Introduction · 들어가며"}),l.jsxs("h2",{className:"kf-intro-title",children:["케라폭시 줄눈,",l.jsx("br",{}),"왜 ",l.jsx("em",{children:"프리미엄 소재"}),"인가요?"]}),l.jsxs("p",{className:"kf-intro-body",children:[l.jsx("em",{className:"kf-hl",children:"케라폭시(Kerafoxy)는 에폭시 수지와 경화제를 혼합한 2액형 고성능 줄눈 소재"}),"입니다. 시멘트 줄눈이 물과 함께 굳는 방식과 달리, 화학적 결합으로 경화되어 본질적으로 다른 강도와 방수성을 만들어냅니다."]}),l.jsx("p",{className:"kf-intro-body",children:"이탈리아 건설 소재 전문 브랜드가 개발한 케라폭시는 국내외 수많은 고급 주택·호텔·상업 공간에서 사용되며 줄눈 소재로서의 우수성이 검증되어 있습니다."}),l.jsx("p",{className:"kf-intro-body",children:"특히 곰팡이가 쉽게 번식하는 욕실·주방 환경에서, 케라폭시는 일반 시멘트 줄눈 대비 압도적인 위생 유지 효과를 보여줍니다."}),l.jsx("ul",{className:"kf-intro-stats",children:Wv.map(c=>l.jsxs("li",{children:[l.jsx("span",{className:"kf-stat-k",children:c.k}),l.jsx("span",{className:"kf-stat-v",children:c.v})]},c.k))})]}),l.jsx("div",{className:"kf-intro-right",children:l.jsx("div",{className:"kf-intro-photo",children:l.jsx("img",{src:Jv,alt:"케라폭시 줄눈 시공 디테일",loading:"lazy"})})})]})})}),l.jsx("section",{className:"section bg-paper","data-screen-label":"03 Benefits",children:l.jsxs("div",{className:"container",children:[l.jsx(Ms,{num:"02",ko:"5가지 핵심 장점",en:"Benefits",title:l.jsxs(l.Fragment,{children:["일반 시멘트 줄눈과 비교할 수 없는 ",l.jsx("em",{children:"성능 차이"}),"."]}),lede:"물·세균·시간이라는 줄눈의 세 가지 적에 대해, 케라폭시가 어떻게 대응하는지 정리했습니다."}),l.jsx("div",{className:"kf-benefits-grid",children:Fv.map(c=>l.jsxs("article",{className:`kf-benefit ${c.dark?"kf-benefit-dark":""}`,children:[l.jsxs("div",{className:"kf-benefit-head",children:[l.jsxs("span",{className:"kf-benefit-lbl",children:["Benefit / ",c.idx]}),l.jsx("span",{className:"kf-benefit-idx",children:c.idx})]}),l.jsx("h3",{className:"kf-benefit-title",children:c.title.split(`
`).map((u,p)=>l.jsx("span",{className:"kf-benefit-title-line",children:u},p))}),l.jsx("p",{className:"kf-benefit-body",children:c.body}),l.jsxs("div",{className:"kf-benefit-spec",children:[l.jsx("span",{className:"kf-spec-k",children:c.k}),l.jsx("span",{className:"kf-spec-v",children:c.v})]})]},c.idx))}),l.jsx("div",{className:"kf-compare",children:Pv.map(c=>l.jsxs("div",{className:`kf-compare-col ${c.hero?"kf-is-hero":""}`,children:[l.jsxs("div",{className:"kf-compare-head",children:[l.jsx("h3",{className:"kf-compare-name",children:c.name}),l.jsx("span",{className:"kf-compare-tag",children:c.tag})]}),l.jsx("ul",{className:"kf-compare-list",children:c.items.map(u=>l.jsx("li",{children:u},u))})]},c.name))})]})}),l.jsx("section",{className:"section","data-screen-label":"04 Spaces",children:l.jsxs("div",{className:"container",children:[l.jsx(Ms,{num:"03",ko:"적합한 공간",en:"Spaces",title:l.jsxs(l.Fragment,{children:["어떤 공간에 케라폭시를 ",l.jsx("em",{children:"시공"}),"해야 할까요?"]}),lede:"물과 오염이 가까운 곳, 미관과 위생을 동시에 잡아야 하는 곳에 케라폭시가 강합니다."}),l.jsx("ul",{className:"kf-spaces",children:Iv.map(c=>l.jsxs("li",{className:"kf-space-row",children:[l.jsx("span",{className:"kf-space-code",children:c.code}),l.jsxs("span",{className:"kf-space-lbl",children:[l.jsx("span",{className:"kf-space-ko",children:c.ko}),l.jsx("span",{className:"kf-space-en",children:c.en})]}),l.jsx("span",{className:"kf-space-desc",children:c.desc}),l.jsxs("span",{className:"kf-space-more",children:["자세히 ",l.jsx("span",{className:"kf-space-arr",children:"→"})]})]},c.code))})]})}),l.jsx("section",{className:"section-dark","data-screen-label":"05 Before · After",children:l.jsxs("div",{className:"container",children:[l.jsx(Ms,{dark:!0,num:"04",ko:"시공 전 · 후 비교",en:"Before · After",title:l.jsxs(l.Fragment,{children:["한 번의 시공으로, 줄눈이 ",l.jsx("em",{children:"인테리어의 점"}),"이 됩니다."]}),lede:"실제 시공 현장에서 발견되는 변화를 정리했습니다. 같은 공간, 다른 마감."}),l.jsxs("div",{className:"kf-ba-grid",children:[l.jsxs("figure",{className:"kf-ba-item",children:[l.jsxs("div",{className:"kf-ba-photo",children:[l.jsx("img",{src:mh,alt:"시공 전 — 시멘트 줄눈 상태",loading:"lazy"}),l.jsx("span",{className:"kf-ba-pill kf-ba-pill-light",children:"Before"})]}),l.jsxs("figcaption",{className:"kf-ba-cap",children:[l.jsx("h4",{className:"kf-ba-cap-title",children:"변색·균열·곰팡이 발생, 청소 어려움"}),l.jsx("p",{className:"kf-ba-cap-body",children:"시간이 지나며 흡수된 수분과 오염으로 줄눈이 어둡게 변하고, 모서리 부근부터 균열이 나타납니다."})]})]}),l.jsxs("figure",{className:"kf-ba-item",children:[l.jsxs("div",{className:"kf-ba-photo",children:[l.jsx("img",{src:hh,alt:"시공 후 — 케라폭시 줄눈 마감",loading:"lazy"}),l.jsx("span",{className:"kf-ba-pill kf-ba-pill-accent",children:"After"})]}),l.jsxs("figcaption",{className:"kf-ba-cap",children:[l.jsx("h4",{className:"kf-ba-cap-title",children:"매끄럽고 균일한 마감, 위생적인 깨끗함"}),l.jsx("p",{className:"kf-ba-cap-body",children:"균일한 두께·색상으로 타일 사이의 선이 이어지며, 청소 한 번으로 새것처럼 유지됩니다."})]})]})]}),l.jsx("ul",{className:"kf-ba-bottom",children:e1.map(c=>l.jsxs("li",{children:[l.jsx("span",{className:"kf-ba-bot-k",children:c.k}),l.jsx("span",{className:"kf-ba-bot-v",children:c.v})]},c.k))})]})}),l.jsx("section",{className:"section bg-paper","data-screen-label":"06 Related",children:l.jsxs("div",{className:"container",children:[l.jsx(Ms,{num:"05",ko:"관련 정보 더 보기",en:"Related",title:l.jsxs(l.Fragment,{children:["줄눈에 대해 알아야 할, 다른 ",l.jsx("em",{children:"네 가지"}),"."]}),lede:"가격 · 제품 · 비교 · 시공 — 네 가지 관점으로 줄눈을 더 깊이 살펴보세요."}),l.jsx("div",{className:"related-grid",children:t1.map(c=>l.jsxs(Ae,{to:c.href,className:"related-card",children:[l.jsx("span",{className:"related-idx",children:c.idx}),l.jsx("h4",{className:"related-title",children:c.title}),l.jsx("p",{className:"related-desc",children:c.desc}),l.jsxs("span",{className:"related-more",children:["more ",l.jsx("span",{className:"related-arr",children:"→"})]})]},c.href))})]})}),l.jsx("section",{className:"cta-band","data-screen-label":"CTA Band",children:l.jsxs("div",{className:"container cta-row",children:[l.jsxs("div",{className:"cta-text",children:[l.jsxs("h3",{className:"cta-title",children:["우리 집 줄눈에 맞는 답이 궁금하다면, ",l.jsx("em",{children:"무료 견적"}),"으로 시작하세요."]}),l.jsx("p",{className:"cta-sub",children:"평형 · 공간 · 색상을 알려주시면 24시간 내에 회신드립니다. 서울·경기·인천 줄눈시공 무료 견적 상담."})]}),l.jsxs("div",{className:"cta-actions",children:[l.jsxs("button",{type:"button",className:"btn btn-primary",onClick:o,children:["무료 견적 받기 ",l.jsx("span",{className:"btn-arr",children:"→"})]}),l.jsx("a",{href:"tel:010-8005-6674",onClick:()=>at.phoneClick("info_cta"),className:"btn btn-ghost",children:"전화 상담 010-8005-6674"})]})]})}),l.jsx(Yt,{}),l.jsx("style",{children:l1})]})}const l1=`
/* page/container/section/hero/eyebrow/sec-/crumb/btn/cta-band/related/imgph는 모두 글로벌(src/index.css) 처리.
   페이지 고유: .kf-hero-bg(이미지 합성) + intro/benefit/compare/spaces/ba */

/* ===== Hero 배경 (페이지 고유 이미지 합성) ===== */
.kf-hero-bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    linear-gradient(180deg, rgba(20,16,12,.25) 0%, rgba(20,16,12,.25) 35%, rgba(14,11,8,.95) 100%),
    radial-gradient(120% 80% at 70% 20%, rgba(138,106,76,.18), transparent 60%),
    var(--hero-img-d, none) center top / 100% auto no-repeat,
    linear-gradient(180deg, #251d14 0%, #18130e 100%);
}
@media (max-width: 720px) {
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

/* crumb/sec-*는 글로벌(src/index.css) 처리 */

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
.imgph {
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
.imgph-dark {
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
.ph-corner {
  position: absolute;
  top: 14px;
  right: 16px;
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.imgph-dark .ph-corner { color: rgba(255,255,255,.55); }
.ph-label {
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
.imgph-dark .ph-label { color: rgba(255,255,255,.55); }
.ph-sq {
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

/* related/cta-band/btn은 글로벌(src/index.css) 처리 */
`,n1="/assets/bg-CP9CkGLZ.webp",i1="/assets/bg_m-DjojSNnF.webp",s1=[{k:"기준 연도",v:"2026",small:"VAT 별도"},{k:"단위",v:"만원",small:"1ea / 1줄"},{k:"A/S",v:"2년",small:"무상"},{k:"결제",v:"현금 / 카드",small:"분할 OK"}],r1=[{label:"화장실",group:"bath",rows:[{scope:"욕조형 · 바닥만",new:[40,30],old:[30,25]},{scope:"욕조형 · 전체 (바닥+벽)",new:[90,65],old:[75,55]},{scope:"샤워부스형 · 바닥만",new:[45,35],old:[38,30]},{scope:"샤워부스형 · 전체 (바닥+벽)",new:[95,70],old:[80,60]}]},{label:"거실",group:"living",rows:[{scope:"바닥 · 20평대",new:[150,100],old:[130,90]},{scope:"바닥 · 30평대+",new:[null,null],old:[null,null],note:"별도 협의"}]},{label:"현관",group:"etc",rows:[{scope:"바닥",new:[15,5],old:[12,4]}]},{label:"베란다",group:"etc",rows:[{scope:"바닥",new:[20,15],old:[18,13]}]},{label:"외부 화장실",group:"etc",rows:[{scope:"바닥",new:[30,25],old:[28,23]}]}],c1=[{num:"01",name:"세트 1",sub:"· 기본",desc:"화장실 바닥 ×2 + 현관",newPrice:100,oldPrice:120,services:[],emptyLabel:"기본 시공 패키지"},{num:"02",name:"세트 2",sub:"· 표준",desc:"세트 1 + 양조벽 or 샤워벽 3면 ×1곳",newPrice:135,oldPrice:155,services:[{text:"젠 다이 실리콘 ×2"},{text:"세면대 실리콘 ×2"}]},{num:"03",name:"세트 3",sub:"· 완성",desc:"화장실 바닥 ×2 + 전체벽 ×2 + 현관",newPrice:240,oldPrice:260,services:[{text:"젠 다이 실리콘 ×2"},{text:"세면대 실리콘 ×2"},{text:"싱크볼 실리콘"},{text:"주방벽 케라폭시"}]},{num:"04",name:"세트 4",sub:"· 확장",desc:"세트 2 + 세탁실",newPrice:150,oldPrice:170,services:[{text:"젠 다이 실리콘 ×2"},{text:"세면대 실리콘 ×2"},{text:"주방 실리콘"},{text:"싱크볼 실리콘"}]}],o1=[{n:"01",name:"시공 면적",en:"Area / Size",desc:"면적이 넓을수록 평단가가 내려가며, 협소한 공간은 작업 난이도로 인해 단가가 높아질 수 있습니다.",impact:"평단가 ↘",impactClass:"down"},{n:"02",name:"타일 크기 · 줄눈 간격",en:"Tile Size",desc:"타일이 작을수록 줄눈 길이가 길어져 작업 시간과 자재비가 증가합니다.",impact:"자재·시간 ↗",impactClass:"up"},{n:"03",name:"기존 줄눈 상태",en:"Existing Grout",desc:"기존 줄눈 제거가 필요한 경우 추가 작업비가 발생하며, 손상이 심할수록 비용이 올라갑니다.",impact:"+10만원~",impactClass:"up"},{n:"04",name:"색상 선택",en:"Color",desc:"특수 색상이나 다색 시공의 경우 단가가 다를 수 있으며, 컬러 매칭 작업이 추가됩니다.",impact:"옵션 변동",impactClass:"var"},{n:"05",name:"지역 · 접근성",en:"Location",desc:"지방이나 접근이 어려운 고층 건물의 경우 추가 출장비가 반영될 수 있습니다.",impact:"출장비 가산",impactClass:"up"}],u1=[{idx:"No. 01 · Intro",href:"/info/kerafoxy",title:"케라폭시 줄눈이란?",desc:"에폭시 줄눈 소재의 특징과 장점을 정리했습니다."},{idx:"No. 03 · Product",href:"/info/kerafoxy-product",title:"케라폭시 계열 제품 소개",desc:"주요 제품 라인업과 색상 가이드."},{idx:"No. 04 · Compare",href:"/info/comparison",title:"폴리우레아 vs 케라폭시",desc:"두 소재의 차이점과 적합한 공간 정리."},{idx:"No. 05 · Why",href:"/info/why-grout",title:"줄눈시공 하는 이유",desc:"위생·미관·내구성을 위한 필수 시공."}];function Os({num:r,ko:o,en:c,title:u,lede:p}){return l.jsxs("div",{className:"sec-head",children:[l.jsxs("div",{className:"sec-bar",children:[l.jsx("span",{className:"sec-n",children:r}),l.jsx("span",{className:"sec-rule"}),l.jsxs("span",{className:"sec-lbl",children:[l.jsx("span",{className:"sec-ko",children:o}),l.jsx("span",{className:"sec-en",children:c})]})]}),l.jsxs("div",{className:"sec-body",children:[l.jsx("h2",{className:"sec-title",children:u}),p&&l.jsx("p",{className:"sec-lede",children:p})]})]})}function d1(){const r=Ft(),[o,c]=v.useState("all"),[u,p]=v.useState("new");Pt(),v.useEffect(()=>{const g="/info/kerafoxy-price",b=dl[g],h=`${ve}${g}`,w=st("article-jsonld",ol({title:b.title,description:b.description,url:h,image:`${ve}/og_banner.jpg`,datePublished:"2026-03-01",dateModified:"2026-05-29"})),k=st("breadcrumb-jsonld",ul([{name:"홈",url:ve},{name:"줄눈 정보",url:`${ve}/#info`},{name:"케라폭시 가격 안내",url:h}]));return()=>{w(),k()}},[]),v.useEffect(()=>{window.scrollTo(0,0)},[]);const m=()=>{r("/#calc"),setTimeout(()=>{const g=document.querySelector("#calc");g&&g.scrollIntoView({behavior:"smooth"})},300)},x=v.useMemo(()=>r1.filter(g=>o==="all"||o===g.group),[o]);return l.jsxs("div",{className:"page",children:[l.jsx(Lt,{}),l.jsxs("header",{className:"hero","data-screen-label":"Hero",children:[l.jsx("div",{className:"kp-hero-bg",style:{"--hero-img-d":`url(${n1})`,"--hero-img-m":`url(${i1})`},"aria-hidden":"true"}),l.jsxs("div",{className:"hero-inner",children:[l.jsx("div",{className:"hero-eyebrow hero-eyebrow-light",children:"Grout Knowledge · 02"}),l.jsxs("h1",{className:"hero-title",children:["케라폭시 가격",l.jsx("em",{children:","}),l.jsx("br",{}),"한 줄까지 ",l.jsx("em",{children:"투명하게"}),"."]}),l.jsxs("p",{className:"hero-lede",children:["2026년 디테일라인 표준 가격표.",l.jsx("br",{}),"공간 · 평형 · 시공 범위에 따른 단가를 그대로 공개합니다."]}),l.jsx("ul",{className:"hero-meta",children:s1.map(g=>l.jsxs("li",{children:[l.jsx("span",{className:"hero-meta-k",children:g.k}),l.jsxs("span",{className:"hero-meta-v",children:[g.v," ",l.jsx("small",{children:g.small})]})]},g.k))})]})]}),l.jsx("nav",{className:"crumb","aria-label":"현재 위치",children:l.jsxs("div",{className:"container crumb-inner",children:[l.jsx(Ae,{to:"/",className:"crumb-item",children:"홈"}),l.jsx("span",{className:"crumb-sep",children:"/"}),l.jsx("span",{className:"crumb-item",children:"줄눈 정보"}),l.jsx("span",{className:"crumb-sep",children:"/"}),l.jsx("span",{className:"crumb-here",children:"케라폭시 가격 안내"})]})}),l.jsx("section",{className:"section","data-screen-label":"01 Pricing Table",children:l.jsxs("div",{className:"container",children:[l.jsx(Os,{num:"01",ko:"2026 가격 테이블",en:"Pricing Table",title:l.jsxs(l.Fragment,{children:["공간별 시공 단가,",l.jsx("br",{}),l.jsx("em",{children:"그대로 공개"}),"합니다."]}),lede:"케라폭시·폴리우레아 두 소재의 표준 단가입니다. 현장 상황에 따라 ±10% 조정될 수 있습니다."}),l.jsxs("div",{className:"kp-pt-controls",children:[l.jsx("div",{className:"kp-chips",role:"tablist","aria-label":"공간 필터",children:["all","bath","living","etc"].map(g=>l.jsx("button",{type:"button",className:`kp-chip ${o===g?"on":""}`,onClick:()=>c(g),role:"tab","aria-selected":o===g,children:g==="all"?"전체":g==="bath"?"화장실":g==="living"?"거실":"현관·기타"},g))}),l.jsx("div",{className:"kp-toggle",role:"tablist","aria-label":"건물 유형",children:["new","old"].map(g=>l.jsx("button",{type:"button",className:u===g?"on":"",onClick:()=>p(g),role:"tab","aria-selected":u===g,children:g==="new"?"신축":"구축"},g))})]}),l.jsx("div",{className:"kp-ptable-wrap",children:l.jsxs("table",{className:"kp-ptable",children:[l.jsx("caption",{className:"sr-only",children:"2026년 공간별 표준 단가 (만원, VAT 별도)"}),l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{style:{width:"160px"},children:"공간"}),l.jsx("th",{children:"범위"}),l.jsx("th",{className:"right",style:{width:"200px"},children:"케라폭시"}),l.jsx("th",{className:"right",style:{width:"200px"},children:"폴리우레아"})]})}),l.jsx("tbody",{children:x.flatMap(g=>g.rows.map((b,h)=>{const[w,k]=u==="new"?b.new:b.old;return l.jsxs("tr",{children:[l.jsx("td",{className:"kp-cell-space",children:h===0?g.label:""}),l.jsx("td",{className:"kp-cell-scope",children:b.scope}),l.jsx("td",{className:"right",children:b.note?l.jsx("span",{className:"kp-price note",children:b.note}):l.jsxs("span",{className:"kp-price kp",children:[w,l.jsx("small",{children:"만원"})]})}),l.jsx("td",{className:"right",children:b.note?l.jsx("span",{className:"kp-price note",children:b.note}):l.jsxs("span",{className:"kp-price",children:[k,l.jsx("small",{children:"만원"})]})})]},`${g.label}-${b.scope}`)}))})]})}),l.jsx("ul",{className:"kp-pcards","aria-label":"공간별 가격 카드",children:x.flatMap(g=>g.rows.map(b=>{const[h,w]=u==="new"?b.new:b.old;return l.jsxs("li",{className:"kp-pcard",children:[l.jsxs("div",{className:"kp-pcard-info",children:[l.jsx("span",{className:"kp-pcard-space",children:g.label}),l.jsx("span",{className:"kp-pcard-scope",children:b.scope})]}),l.jsxs("div",{className:"kp-pcard-prices",children:[l.jsxs("div",{className:"kp-pcard-pr",children:[l.jsx("span",{className:"kp-pcard-pr-lbl",children:"케라폭시"}),b.note?l.jsx("span",{className:"kp-pcard-pr-note",children:b.note}):l.jsxs("span",{className:"kp-pcard-pr-val kp",children:[h,l.jsx("small",{children:"만원"})]})]}),l.jsxs("div",{className:"kp-pcard-pr",children:[l.jsx("span",{className:"kp-pcard-pr-lbl",children:"폴리우레아"}),b.note?l.jsx("span",{className:"kp-pcard-pr-note",children:b.note}):l.jsxs("span",{className:"kp-pcard-pr-val",children:[w,l.jsx("small",{children:"만원"})]})]})]})]},`m-${g.label}-${b.scope}`)}))}),l.jsxs("div",{className:"kp-pt-foot",children:[l.jsx("div",{children:"* 모든 가격은 VAT 별도 · 자재비·인건비·출장비 포함 · 2년 무상 A/S (에폭시 계열)"}),l.jsx("div",{children:"* 평형 30평 초과 또는 특수 상황은 별도 협의"})]})]})}),l.jsx("section",{className:"section bg-paper","data-screen-label":"02 Set Packages",children:l.jsxs("div",{className:"container",children:[l.jsx(Os,{num:"02",ko:"세트 할인 패키지",en:"Set Packages",title:l.jsxs(l.Fragment,{children:["4가지 패키지로,",l.jsx("br",{}),"한 번에 ",l.jsx("em",{children:"합리적으로"}),"."]}),lede:"화장실·현관·벽 등 주요 공간을 묶어 시공하면 실리콘·주방벽 등 추가 서비스가 함께 제공됩니다. VAT 포함 · 34평 이하 · 300개 타일 기준."}),l.jsx("div",{className:"kp-sets",children:c1.map(g=>l.jsxs("div",{className:"kp-set-card",children:[l.jsxs("div",{className:"kp-set-badge",children:["— SET ",g.num]}),l.jsxs("div",{className:"kp-set-title",children:[l.jsx("h3",{className:"kp-set-name",children:g.name}),l.jsx("span",{className:"kp-set-sub",children:g.sub})]}),l.jsx("p",{className:"kp-set-desc",children:g.desc}),l.jsxs("div",{className:"kp-set-prices",children:[l.jsxs("div",{className:"kp-set-pr",children:[l.jsx("span",{className:"kp-set-pr-lbl",children:"신축"}),l.jsx("span",{className:"kp-set-pr-val",children:g.newPrice}),l.jsx("span",{className:"kp-set-pr-unit",children:"만원"})]}),l.jsxs("div",{className:"kp-set-pr",children:[l.jsx("span",{className:"kp-set-pr-lbl",children:"구축"}),l.jsx("span",{className:"kp-set-pr-val",children:g.oldPrice}),l.jsx("span",{className:"kp-set-pr-unit",children:"만원"})]})]}),g.services.length>0?l.jsxs("div",{className:"kp-set-services",children:[l.jsx("div",{className:"kp-set-s-lbl",children:"+ 함께 제공"}),l.jsx("ul",{children:g.services.map(b=>l.jsx("li",{children:b.text},b.text))})]}):l.jsx("div",{className:"kp-set-services-empty",children:g.emptyLabel})]},g.num))}),l.jsxs("p",{className:"kp-set-foot",children:["※ 가격은 ",l.jsx("b",{children:"VAT 포함 · 34평 이하 · 300개 타일"})," 기준. 세트 외 추가 옵션은 상담 후 별도 산정됩니다.",l.jsx("br",{}),"※ 세트 실리콘은 기존 실리콘 양호 기준이며, 제거 후 재시공 시 추가 비용이 발생합니다. 기존 줄눈 시공 이력이 있는 경우 ",l.jsx("b",{children:"공간당 +10만원"}),"이 추가됩니다."]})]})}),l.jsx("section",{className:"section","data-screen-label":"03 Cost Factors",children:l.jsxs("div",{className:"container",children:[l.jsx(Os,{num:"03",ko:"시공 가격에 영향을 주는 요인",en:"Cost Factors",title:l.jsxs(l.Fragment,{children:["같은 평형이라도,",l.jsx("br",{}),"견적이 ",l.jsx("em",{children:"달라지는 이유"}),"."]}),lede:"현장의 디테일이 가격을 만듭니다. 자주 영향을 주는 다섯 가지 요인입니다."}),l.jsx("ul",{className:"kp-factors",children:o1.map(g=>l.jsxs("li",{className:"kp-f-row",children:[l.jsx("span",{className:"kp-f-n",children:g.n}),l.jsxs("span",{className:"kp-f-name",children:[g.name,l.jsx("small",{children:g.en})]}),l.jsx("span",{className:"kp-f-desc",children:g.desc}),l.jsx("span",{className:`kp-f-impact kp-f-impact--${g.impactClass}`,children:g.impact})]},g.n))})]})}),l.jsx("section",{className:"section bg-paper","data-screen-label":"04 Related",children:l.jsxs("div",{className:"container",children:[l.jsx(Os,{num:"04",ko:"관련 정보 더 보기",en:"Related",title:l.jsxs(l.Fragment,{children:["줄눈에 대해 알아야 할, 다른 ",l.jsx("em",{children:"네 가지"}),"."]}),lede:"가격 · 제품 · 비교 · 시공 — 네 가지 관점으로 줄눈을 더 깊이 살펴보세요."}),l.jsx("div",{className:"related-grid",children:u1.map(g=>l.jsxs(Ae,{to:g.href,className:"related-card",children:[l.jsx("span",{className:"related-idx",children:g.idx}),l.jsx("h4",{className:"related-title",children:g.title}),l.jsx("p",{className:"related-desc",children:g.desc}),l.jsxs("span",{className:"related-more",children:["more ",l.jsx("span",{className:"related-arr",children:"→"})]})]},g.href))})]})}),l.jsx("section",{className:"cta-band","data-screen-label":"CTA Band",children:l.jsxs("div",{className:"container cta-row",children:[l.jsxs("div",{className:"cta-text",children:[l.jsxs("h3",{className:"cta-title",children:["정확한 시공 비용이 ",l.jsx("em",{children:"궁금하신가요?"})]}),l.jsx("p",{className:"cta-sub",children:"현장 상황에 따라 가격이 달라질 수 있습니다. 공간별 맞춤 견적을 안내해 드립니다. 서울·경기·인천 줄눈시공 무료 견적 상담."})]}),l.jsxs("div",{className:"cta-actions",children:[l.jsxs("button",{type:"button",className:"btn btn-primary",onClick:m,children:["무료 견적 받기 ",l.jsx("span",{className:"btn-arr",children:"→"})]}),l.jsx("a",{href:"tel:010-8005-6674",onClick:()=>at.phoneClick("info_cta"),className:"btn btn-ghost",children:"전화 상담 010-8005-6674"})]})]})}),l.jsx(Yt,{}),l.jsx("style",{children:p1})]})}const p1=`
/* page/container/section/hero/eyebrow/sec-/crumb/btn/cta-band/related/imgph는 글로벌(src/index.css) 처리.
   페이지 고유: .kp-hero-bg + chip/ptable/sets/cell-* 등 가격표 */

/* ===== Hero 배경 (페이지 고유 이미지 합성) ===== */
.kp-hero-bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    linear-gradient(180deg, rgba(20,16,12,.25) 0%, rgba(20,16,12,.25) 35%, rgba(14,11,8,.95) 100%),
    radial-gradient(120% 80% at 70% 20%, rgba(138,106,76,.18), transparent 60%),
    var(--hero-img-d, none) center top / 100% auto no-repeat,
    linear-gradient(180deg, #251d14 0%, #18130e 100%);
}
@media (max-width: 720px) {
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
/* ph-*/crumb/sec-*는 글로벌(src/index.css) 처리 */

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

/* related/cta-band/btn은 글로벌(src/index.css) 처리 */
`,f1="/assets/kerafoxy-DrWysCxm.jpg",m1="/assets/strikeevo-CoKoyCPo.jpg",h1="/assets/aspactone-CtALWUuf.jpg",bh="/assets/Polyurea-DMhrJjtC.jpg",x1="/assets/bg-LU8nN9ip.webp",g1="/assets/bg_m-BSEgDA_R.webp",b1=[{k:"라인업",v:"4종",small:"에폭시 계열"},{k:"컬러",v:"20+",small:"표준 색상"},{k:"친환경",v:"EC1+",small:"GEV 인증"},{k:"A/S",v:"2년",small:"무상"}],_s=[{id:"pure",name:"순백",hex:"#f1ede4",group:"white",tagEn:"WHITE",light:!0},{id:"ivory",name:"아이보리",hex:"#e6dccb",group:"white",tagEn:"WHITE",light:!0},{id:"beige",name:"베이지",hex:"#d9c8a2",group:"earth",tagEn:"EARTH",light:!0},{id:"sand",name:"샌드",hex:"#bfa478",group:"earth",tagEn:"EARTH",light:!1},{id:"khaki",name:"카키",hex:"#8a7d5e",group:"earth",tagEn:"EARTH",light:!1},{id:"brown",name:"브라운",hex:"#6f4a2a",group:"earth",tagEn:"EARTH",light:!1},{id:"silver",name:"실버그레이",hex:"#c4c0bc",group:"gray",tagEn:"GRAY",light:!0},{id:"lightgray",name:"라이트그레이",hex:"#a8a59f",group:"gray",tagEn:"GRAY",light:!1},{id:"mediumgray",name:"미디엄그레이",hex:"#7a766f",group:"gray",tagEn:"GRAY",light:!1},{id:"darkgray",name:"다크그레이",hex:"#4a4842",group:"dark",tagEn:"DARK",light:!1},{id:"charcoal",name:"차콜",hex:"#2a2825",group:"dark",tagEn:"DARK",light:!1},{id:"black",name:"블랙",hex:"#16140f",group:"dark",tagEn:"DARK",light:!1}],ti={all:"전체",white:"화이트 계열",earth:"베이지·어스 계열",gray:"그레이 계열",dark:"다크 계열"},zo={white:"타일과 통일감을 주어 깔끔하고 넓어 보이는 효과를 만듭니다. 오염은 비교적 잘 보이는 편이므로 청소 빈도가 높은 공간에 적합합니다.",earth:"원목·가구·내추럴 인테리어와 잘 어우러집니다. 오염 자국이 눈에 잘 띄지 않아 관리가 편합니다.",gray:"오염이 덜 보이고 유지관리가 편하며, 모던하고 차분한 분위기를 만듭니다. 대부분의 타일과 무난하게 어울립니다.",dark:"타일과 강한 대비를 만들어 그래픽한 인테리어 포인트가 됩니다. 좁은 공간에서는 답답하게 보일 수 있어 주의가 필요합니다."},Ds={white:{label:"화이트",hex:"#ece6dc"},gray:{label:"그레이",hex:"#b5b1a8"},dark:{label:"다크",hex:"#3a3530"}},Mm=[{id:"kerafoxy",name:"케라폭시",badge:{label:"프리미엄",variant:"premium"},desc:"에폭시 수지+경화제 2액형의 대표 프리미엄 줄눈재. 화장실·욕실·주방 등 물 접촉 공간에서 가장 안정적인 성능을 보입니다.",specs:[{k:"베이스",v:"에폭시 + 경화제 2액형"},{k:"경화 시간",v:"24 ~ 48시간"},{k:"표면",v:"고광택"},{k:"추천 공간",v:"화장실 · 욕실 · 주방"},{k:"컬러",v:"20+ 색상"},{k:"수명",v:"10년+"}],image:f1},{id:"strikeevo",name:"스트라이크 에보",badge:{label:"프리미엄",variant:"premium"},desc:"3세대 에폭시 줄눈재로 무광·유광 선택이 가능하며, 균일한 컬러와 변색 저항성이 뛰어납니다. 프리미엄 인테리어에 자주 채택됩니다.",specs:[{k:"베이스",v:"에폭시 (이탈리아산)"},{k:"경화 시간",v:"24 ~ 72시간"},{k:"표면",v:"무광 / 유광 선택"},{k:"추천 공간",v:"화장실 · 주방 · 디자인 강조"},{k:"컬러",v:"30+ 색상"},{k:"수명",v:"10년+"}],image:m1},{id:"aspactone",name:"아스팍톤",badge:{label:"개선형",variant:"premium"},desc:"무광·무펄·무수축·무황변을 구현한 신소재 에폭시. 기존 무광 에폭시의 단점을 보완해 어린이방·욕실에 추천됩니다.",specs:[{k:"베이스",v:"에폭시 개선형"},{k:"경화 시간",v:"24 ~ 36시간"},{k:"표면",v:"균일 무광"},{k:"추천 공간",v:"패턴 타일 · 디자인 욕실"},{k:"컬러",v:"25+ 색상"},{k:"수명",v:"10년+"}],image:h1},{id:"polyurea",name:"폴리우레아",badge:{label:"하이브리드",variant:"hybrid"},desc:"시멘트 + 에폭시 하이브리드 줄눈재. 매트한 질감으로 내추럴 인테리어에 잘 맞고, 가격대가 합리적이라 비수계 공간에 추천됩니다.",specs:[{k:"베이스",v:"시멘트 + 에폭시"},{k:"경화 시간",v:"48 ~ 96시간"},{k:"표면",v:"매트"},{k:"추천 공간",v:"현관 · 베란다 · 거실 일부"},{k:"컬러",v:"16+ 색상"},{k:"수명",v:"5년+"}],image:bh}],v1=[{idx:"No. 01 · Intro",href:"/info/kerafoxy",title:"케라폭시 줄눈이란?",desc:"에폭시 줄눈 소재의 특징과 장점을 정리했습니다."},{idx:"No. 02 · Pricing",href:"/info/kerafoxy-price",title:"케라폭시 가격 안내",desc:"시공 비용에 영향을 주는 요인과 표준 가격."},{idx:"No. 04 · Compare",href:"/info/comparison",title:"폴리우레아 vs 케라폭시",desc:"두 소재의 차이점과 적합한 공간 정리."},{idx:"No. 05 · Why",href:"/info/why-grout",title:"줄눈시공 하는 이유",desc:"위생·미관·내구성을 위한 필수 시공."}];function To({num:r,ko:o,en:c,title:u,lede:p}){return l.jsxs("div",{className:"sec-head",children:[l.jsxs("div",{className:"sec-bar",children:[l.jsx("span",{className:"sec-n",children:r}),l.jsx("span",{className:"sec-rule"}),l.jsxs("span",{className:"sec-lbl",children:[l.jsx("span",{className:"sec-ko",children:o}),l.jsx("span",{className:"sec-en",children:c})]})]}),l.jsxs("div",{className:"sec-body",children:[l.jsx("h2",{className:"sec-title",children:u}),p&&l.jsx("p",{className:"sec-lede",children:p})]})]})}function y1(){const r=Ft(),[o,c]=v.useState("kerafoxy"),[u,p]=v.useState("silver"),[m,x]=v.useState("all"),[g,b]=v.useState("white");Pt(),v.useEffect(()=>{const S="/info/kerafoxy-product",G=dl[S],q=`${ve}${S}`,Y=st("article-jsonld",ol({title:G.title,description:G.description,url:q,image:`${ve}/og_banner.jpg`,datePublished:"2026-03-01",dateModified:"2026-05-29"})),V=st("breadcrumb-jsonld",ul([{name:"홈",url:ve},{name:"줄눈 정보",url:`${ve}/#info`},{name:"케라폭시 제품 소개",url:q}]));return()=>{Y(),V()}},[]),v.useEffect(()=>{window.scrollTo(0,0)},[]);const h=()=>{r("/#calc"),setTimeout(()=>{const S=document.querySelector("#calc");S&&S.scrollIntoView({behavior:"smooth"})},300)},w=Mm.find(S=>S.id===o),k=_s.find(S=>S.id===u),B=v.useMemo(()=>m==="all"?_s:_s.filter(S=>S.group===m),[m]),Q={"--grout-color":k.hex,"--tile-color":Ds[g].hex};return l.jsxs("div",{className:"page",children:[l.jsx(Lt,{}),l.jsxs("header",{className:"hero","data-screen-label":"Hero",children:[l.jsx("div",{className:"ep-hero-bg",style:{"--hero-img-d":`url(${x1})`,"--hero-img-m":`url(${g1})`},"aria-hidden":"true"}),l.jsxs("div",{className:"hero-inner",children:[l.jsx("div",{className:"hero-eyebrow hero-eyebrow-light",children:"Grout Knowledge · 03"}),l.jsxs("h1",{className:"hero-title",children:["내 공간에 맞는",l.jsx("br",{}),"에폭시 계열 ",l.jsx("em",{children:"한 가지"}),"."]}),l.jsxs("p",{className:"hero-lede",children:["디테일라인이 직접 시공하는 4종의 에폭시 계열 줄눈재와",l.jsx("br",{}),"줄눈 색상을 미리 확인할 수 있는 라이브 시뮬레이터를 제공합니다."]}),l.jsx("ul",{className:"hero-meta",children:b1.map(S=>l.jsxs("li",{children:[l.jsx("span",{className:"hero-meta-k",children:S.k}),l.jsxs("span",{className:"hero-meta-v",children:[S.v," ",l.jsx("small",{children:S.small})]})]},S.k))})]})]}),l.jsx("nav",{className:"crumb","aria-label":"현재 위치",children:l.jsxs("div",{className:"container crumb-inner",children:[l.jsx(Ae,{to:"/",className:"crumb-item",children:"홈"}),l.jsx("span",{className:"crumb-sep",children:"/"}),l.jsx("span",{className:"crumb-item",children:"줄눈 정보"}),l.jsx("span",{className:"crumb-sep",children:"/"}),l.jsx("span",{className:"crumb-here",children:"에폭시 계열 제품 소개"})]})}),l.jsx("section",{className:"section","data-screen-label":"01 Product Lineup",children:l.jsxs("div",{className:"container",children:[l.jsx(To,{num:"01",ko:"제품 라인업",en:"Product Lineup",title:l.jsxs(l.Fragment,{children:["같은 에폭시여도,",l.jsx("br",{}),l.jsx("em",{children:"맞춤 선택"}),"이 가능합니다."]}),lede:"공간 · 표면 질감 · 색상 선호에 따라 4종의 제품 중 가장 적합한 것을 안내해 드립니다."}),l.jsx("div",{className:"ep-prod-tabs",role:"tablist","aria-label":"제품 선택",children:Mm.map(S=>l.jsx("button",{type:"button",role:"tab","aria-selected":o===S.id,className:`ep-prod-tab ${o===S.id?"on":""}`,onClick:()=>c(S.id),children:S.name},S.id))}),l.jsxs("div",{className:"ep-prod-panel",role:"tabpanel",children:[l.jsx("div",{className:"ep-prod-image",children:l.jsx("img",{src:w.image,alt:`${w.name} 시공 결과`,loading:"lazy"})}),l.jsxs("div",{className:"ep-prod-info",children:[l.jsxs("div",{className:"ep-prod-head",children:[l.jsx("h3",{className:"ep-prod-name",children:w.name}),l.jsx("span",{className:`ep-prod-badge ep-prod-badge--${w.badge.variant}`,children:w.badge.label})]}),l.jsx("p",{className:"ep-prod-desc",children:w.desc}),l.jsx("dl",{className:"ep-prod-specs",children:w.specs.map(S=>l.jsxs("div",{className:"ep-prod-spec-row",children:[l.jsx("dt",{children:S.k}),l.jsx("dd",{children:S.v})]},S.k))})]})]})]})}),l.jsx("section",{className:"section bg-paper","data-screen-label":"02 Color Simulator",children:l.jsxs("div",{className:"container",children:[l.jsx(To,{num:"02",ko:"라이브 컬러 시뮬레이터",en:"Live Color Simulator",title:l.jsxs(l.Fragment,{children:["시공 전에, 줄눈 색을 ",l.jsx("em",{children:"미리 보세요"}),"."]}),lede:"아래 스와치를 클릭하면 좌측 타일 그리드의 줄눈 색이 즉시 바뀝니다. 타일 색·계열 필터로 다양한 조합을 빠르게 확인해 보세요."}),l.jsxs("div",{className:"ep-sim-grid",children:[l.jsxs("div",{className:"ep-sim-left",children:[l.jsx("div",{className:"ep-tile-preview",children:l.jsx("div",{className:"ep-tile-stage",style:Q,"aria-hidden":"true",children:Array.from({length:30}).map((S,G)=>l.jsx("span",{className:"ep-tile"},G))})}),l.jsx("div",{className:"ep-tile-toggle",role:"tablist","aria-label":"타일 색상",children:Object.keys(Ds).map(S=>l.jsxs("button",{type:"button",role:"tab","aria-selected":g===S,className:`ep-tile-toggle-btn ${g===S?"on":""}`,onClick:()=>b(S),children:[l.jsx("span",{className:"ep-tile-toggle-dot",style:{"--td":Ds[S].hex}}),l.jsx("span",{children:Ds[S].label})]},S))})]}),l.jsxs("div",{className:"ep-sim-right",children:[l.jsx("div",{className:"ep-group-tabs",role:"tablist","aria-label":"색상 계열",children:Object.keys(ti).map(S=>l.jsx("button",{type:"button",role:"tab","aria-selected":m===S,className:`ep-group-tab ${m===S?"on":""}`,onClick:()=>x(S),children:ti[S]},S))}),l.jsx("div",{className:"ep-swatches",children:B.map(S=>l.jsx("button",{type:"button",className:`ep-swatch ${u===S.id?"is-active":""}`,style:{background:S.hex},"data-light":S.light?"true":"false",onClick:()=>p(S.id),"aria-label":`${S.name} · ${S.hex.toUpperCase()} · ${ti[S.group]}`,"aria-pressed":u===S.id},S.id))}),l.jsxs("div",{className:"ep-sel-card","aria-live":"polite",children:[l.jsx("div",{className:"ep-sel-chip",style:{"--c":k.hex},"aria-hidden":"true"}),l.jsxs("div",{className:"ep-sel-info",children:[l.jsx("h4",{className:"ep-sel-name",children:k.name}),l.jsxs("div",{className:"ep-sel-meta",children:[l.jsx("span",{className:"ep-sel-hex",children:k.hex.toUpperCase()}),l.jsxs("span",{className:"ep-sel-tag",children:["· ",k.tagEn]})]}),l.jsx("div",{className:"ep-sel-group",children:ti[k.group]}),l.jsx("p",{className:"ep-sel-tip",children:zo[k.group]})]})]})]})]}),l.jsx("ul",{className:"ep-tips-grid",children:Object.keys(zo).map(S=>{const G=_s.filter(q=>q.group===S).slice(0,3);return l.jsxs("li",{className:"ep-tip-cell",children:[l.jsx("div",{className:"ep-tip-swatches","aria-hidden":"true",children:G.map(q=>l.jsx("span",{style:{background:q.hex}},q.id))}),l.jsx("h4",{className:"ep-tip-name",children:ti[S]}),l.jsx("p",{className:"ep-tip-desc",children:zo[S]})]},S)})})]})}),l.jsx("section",{className:"section","data-screen-label":"03 Related",children:l.jsxs("div",{className:"container",children:[l.jsx(To,{num:"03",ko:"관련 정보 더 보기",en:"Related",title:l.jsxs(l.Fragment,{children:["줄눈에 대해 알아야 할, 다른 ",l.jsx("em",{children:"네 가지"}),"."]}),lede:"가격 · 제품 · 비교 · 시공 — 네 가지 관점으로 줄눈을 더 깊이 살펴보세요."}),l.jsx("div",{className:"related-grid",children:v1.map(S=>l.jsxs(Ae,{to:S.href,className:"related-card",children:[l.jsx("span",{className:"related-idx",children:S.idx}),l.jsx("h4",{className:"related-title",children:S.title}),l.jsx("p",{className:"related-desc",children:S.desc}),l.jsxs("span",{className:"related-more",children:["more ",l.jsx("span",{className:"related-arr",children:"→"})]})]},S.href))})]})}),l.jsx("section",{className:"cta-band","data-screen-label":"CTA Band",children:l.jsxs("div",{className:"container cta-row",children:[l.jsxs("div",{className:"cta-text",children:[l.jsxs("h3",{className:"cta-title",children:["어떤 제품·색이 우리 집에 맞을지 ",l.jsx("em",{children:"고민되신다면"}),"?"]}),l.jsx("p",{className:"cta-sub",children:"공간 사진 한 장만 보내주시면, 가장 잘 어울리는 제품과 색을 추천해 드립니다. 서울·경기·인천 줄눈시공 무료 견적 상담."})]}),l.jsxs("div",{className:"cta-actions",children:[l.jsxs("button",{type:"button",className:"btn btn-primary",onClick:h,children:["무료 견적 받기 ",l.jsx("span",{className:"btn-arr",children:"→"})]}),l.jsx("a",{href:"tel:010-8005-6674",onClick:()=>at.phoneClick("info_cta"),className:"btn btn-ghost",children:"전화 상담 010-8005-6674"})]})]})}),l.jsx(Yt,{}),l.jsx("style",{children:j1})]})}const j1=`
/* page/container/section/hero/eyebrow/sec-/crumb/btn/cta-band/related/imgph는 글로벌(src/index.css) 처리.
   페이지 고유: .ep-hero-bg(이미지 합성) + prod-*/sel-*/sim-*/tile-*/tip-* */

/* ===== Hero 배경 (페이지 고유 이미지 합성) ===== */
.ep-hero-bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    linear-gradient(180deg, rgba(20,16,12,.25) 0%, rgba(20,16,12,.25) 35%, rgba(14,11,8,.95) 100%),
    radial-gradient(120% 80% at 70% 20%, rgba(138,106,76,.18), transparent 60%),
    var(--hero-img-d, none) center top / 100% auto no-repeat,
    linear-gradient(180deg, #251d14 0%, #18130e 100%);
}
@media (max-width: 720px) {
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
/* ph-*/crumb/sec-*는 글로벌(src/index.css) 처리 */

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

/* related/cta-band/btn은 글로벌(src/index.css) 처리 */
`,Pl=({n:r,best:o})=>l.jsxs(l.Fragment,{children:[l.jsxs("span",{className:"cp-stars",children:["★".repeat(r),l.jsx("span",{className:"off",children:"★".repeat(5-r)})]}),l.jsx("span",{className:`cp-rating ${o?"best":""}`,children:o?"탁월":r>=4?"우수":r>=3?"보통":"낮음"})]}),Om=[{k:"소재 성분",kerafoxy:l.jsxs(l.Fragment,{children:["에폭시 수지 ",l.jsx("span",{className:"cp-plus",children:"+"})," 경화제"," ",l.jsx("span",{className:"cp-rating",children:"2액형"})]}),polyurea:l.jsxs(l.Fragment,{children:["폴리우레아 수지 ",l.jsx("span",{className:"cp-rating",children:"1액형"})]})},{k:"경화 방식",kerafoxy:l.jsxs(l.Fragment,{children:["화학 반응 경화 ",l.jsx("span",{className:"cp-rating",children:"수동 혼합"})]}),polyurea:l.jsxs(l.Fragment,{children:["자연 경화 ",l.jsx("span",{className:"cp-rating",children:"습기·공기 반응"})]})},{k:"내수성",kerafoxy:l.jsx(Pl,{n:5,best:!0}),polyurea:l.jsx(Pl,{n:3})},{k:"항균성",kerafoxy:l.jsx(Pl,{n:5,best:!0}),polyurea:l.jsx(Pl,{n:3})},{k:"내구성 · 수명",kerafoxy:l.jsxs("span",{className:"cp-num",children:["10~15",l.jsx("small",{children:"년 이상"})]}),polyurea:l.jsxs("span",{className:"cp-num",children:["2~4",l.jsx("small",{children:"년"})]})},{k:"탄성 · 신축성",kerafoxy:l.jsx(Pl,{n:4}),polyurea:l.jsx(Pl,{n:5,best:!0})},{k:"시공 난이도",kerafoxy:"전문 기술 필요",polyurea:"비교적 간단"},{k:"가격",kerafoxy:l.jsxs("span",{className:"cp-num",children:["평균 30",l.jsx("small",{children:"만원"})]}),polyurea:l.jsxs("span",{className:"cp-num",children:["평균 20",l.jsx("small",{children:"만원"})]})},{k:"색상 선택",kerafoxy:l.jsxs("span",{className:"cp-num",children:["16",l.jsx("small",{children:"여 가지"})]}),polyurea:l.jsxs("span",{className:"cp-num",children:["20",l.jsx("small",{children:"여 가지"})]})},{k:"적합 환경",kerafoxy:l.jsxs(l.Fragment,{children:["욕실 · 주방 · 수영장 등 ",l.jsx("strong",{className:"cp-strong",children:"수분 多"})]}),polyurea:l.jsxs(l.Fragment,{children:["베란다 · 외벽 등 ",l.jsx("strong",{className:"cp-strong",children:"진동·충격 多"})]})}],N1=[{variant:"kp",title:"케라폭시 줄눈 추천",sub:"For Home · Indoor",items:[{text:"화장실·욕실·주방처럼 상시 수분에 노출되는 공간"},{text:"위생이 특히 중요한 가정 (어린이, 노약자)"},{text:"오랫동안 재시공 없이 사용하고 싶은 경우"},{text:"다양한 색상으로 인테리어를 연출하고 싶은 경우"}]},{variant:"pu",title:"폴리우레아 줄눈 추천",sub:"For Outdoor · Industrial",items:[{text:"베란다·테라스 등 온도 변화와 진동이 많은 공간"},{text:"건물 외벽·주차장처럼 하중과 충격이 큰 환경"},{text:"빠른 시공과 조기 경화가 필요한 경우"},{text:"비용을 절감하면서도 품질을 원하는 경우"}]}],k1=[{idx:"No. 01 · Kerafoxy",href:"/info/kerafoxy",title:"케라폭시 줄눈이란?",desc:"에폭시 계열 고성능 줄눈 소재 케라폭시의 5가지 핵심 장점."},{idx:"No. 02 · Product",href:"/info/kerafoxy-product",title:"케라폭시 계열 제품 소개",desc:"케라폭시·스타라이크·푸가리테 등 주요 제품 라인업과 색상 가이드."},{idx:"No. 03 · Pricing",href:"/info/kerafoxy-price",title:"케라폭시 가격 안내",desc:"시공 비용에 영향을 주는 요인과 평형별 표준 가격을 한눈에."},{idx:"No. 04 · Why",href:"/info/why-grout",title:"줄눈시공 하는 이유",desc:"위생·미관·내구성을 위한 필수 시공인 이유를 정리했습니다."}];function Ro({num:r,ko:o,en:c,title:u,lede:p}){return l.jsxs("div",{className:"sec-head",children:[l.jsxs("div",{className:"sec-bar",children:[l.jsx("span",{className:"sec-n",children:r}),l.jsx("span",{className:"sec-rule"}),l.jsxs("span",{className:"sec-lbl",children:[l.jsx("span",{className:"sec-ko",children:o}),l.jsx("span",{className:"sec-en",children:c})]})]}),l.jsxs("div",{className:"sec-body",children:[l.jsx("h2",{className:"sec-title",children:u}),p&&l.jsx("p",{className:"sec-lede",children:p})]})]})}function w1(){const r=Ft();Pt(),v.useEffect(()=>{const c="/info/comparison",u=dl[c],p=`${ve}${c}`,m=st("article-jsonld",ol({title:u.title,description:u.description,url:p,image:`${ve}/og_banner.jpg`,datePublished:"2026-03-01",dateModified:"2026-05-29"})),x=st("breadcrumb-jsonld",ul([{name:"홈",url:ve},{name:"줄눈 정보",url:`${ve}/#info`},{name:"폴리우레아 vs 케라폭시 비교",url:p}]));return()=>{m(),x()}},[]),v.useEffect(()=>{window.scrollTo(0,0)},[]);const o=()=>{r("/#calc"),setTimeout(()=>{const c=document.querySelector("#calc");c&&c.scrollIntoView({behavior:"smooth"})},300)};return l.jsxs("div",{className:"page",children:[l.jsx(Lt,{}),l.jsxs("header",{className:"cp-hero","data-screen-label":"Hero",children:[l.jsx("div",{className:"cp-hero-bg","aria-hidden":"true"}),l.jsxs("div",{className:"container cp-hero-inner",children:[l.jsx("div",{className:"eyebrow eyebrow-light",children:"Material Compare Guide"}),l.jsxs("h1",{className:"cp-hero-title",children:["폴리우레아 ",l.jsx("span",{className:"cp-vs",children:"vs"})," 케라폭시"]}),l.jsxs("p",{className:"cp-hero-lede",children:["두 소재의 차이점과 장단점을 비교해",l.jsx("br",{}),"공간에 가장 알맞은 소재를 선택하세요."]})]})]}),l.jsx("nav",{className:"crumb","aria-label":"현재 위치",children:l.jsxs("div",{className:"container crumb-inner",children:[l.jsx(Ae,{to:"/",className:"crumb-item",children:"홈"}),l.jsx("span",{className:"crumb-sep",children:"/"}),l.jsx("span",{className:"crumb-item",children:"줄눈 정보"}),l.jsx("span",{className:"crumb-sep",children:"/"}),l.jsx("span",{className:"crumb-here",children:"폴리우레아 vs 케라폭시"})]})}),l.jsx("section",{className:"cp-intro","data-screen-label":"Intro",children:l.jsx("div",{className:"container",children:l.jsxs("div",{className:"cp-intro-grid",children:[l.jsxs("h2",{className:"cp-intro-title",children:["폴리우레아 줄눈과",l.jsx("br",{}),"케라폭시 줄눈,",l.jsx("br",{}),l.jsx("em",{children:"어떻게 다를까?"})]}),l.jsxs("div",{className:"cp-intro-body",children:[l.jsxs("p",{children:["줄눈 시공을 알아보다 보면 ",l.jsx("b",{children:"폴리우레아 줄눈"}),"과 ",l.jsx("b",{children:"케라폭시 줄눈"}),", 두 가지 선택지를 마주하게 됩니다. 두 소재 모두 기존 시멘트 줄눈보다 월등히 우수한 성능을 자랑하지만, 각자의 강점이 다릅니다."]}),l.jsxs("p",{children:["간단히 말하면, ",l.jsx("b",{children:"케라폭시는 방수·항균 성능"}),"이 극강이고"," ",l.jsx("b",{children:"폴리우레아는 탄성·신축성"}),"이 뛰어납니다. 공간의 특성에 따라 알맞은 소재를 선택하는 것이 핵심입니다."]}),l.jsxs("div",{className:"cp-vs-mark",children:[l.jsxs("span",{className:"cp-pill",children:["방수·항균 ",l.jsx("b",{children:"케라폭시"})]}),l.jsx("span",{className:"cp-vs-x",children:"×"}),l.jsxs("span",{className:"cp-pill",children:["탄성·내충격 ",l.jsx("b",{children:"폴리우레아"})]})]})]})]})})}),l.jsx("section",{className:"section bg-paper","data-screen-label":"01 Detailed Comparison",children:l.jsxs("div",{className:"container",children:[l.jsx(Ro,{num:"01",ko:"상세 비교표",en:"Detailed Comparison",title:l.jsxs(l.Fragment,{children:["10가지 항목으로,",l.jsx("br",{}),"두 소재를 ",l.jsx("em",{children:"나란히 본다"}),"."]}),lede:"성분·내구성·가격·시공성까지. 한 줄씩 짚어가며 비교하세요. ★은 5점 만점 기준의 상대 성능입니다."}),l.jsx("div",{className:"cp-cmp-wrap",children:l.jsxs("table",{className:"cp-cmp-table",children:[l.jsx("caption",{className:"sr-only",children:"케라폭시 vs 폴리우레아 10항목 비교"}),l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{className:"cp-cmp-first",children:l.jsxs("span",{className:"cp-cmp-mat",children:["비교 항목",l.jsx("small",{children:"Criteria"})]})}),l.jsx("th",{children:l.jsxs("span",{className:"cp-cmp-mat",children:["케라폭시 줄눈",l.jsx("small",{children:"Kerapoxy"})]})}),l.jsx("th",{children:l.jsxs("span",{className:"cp-cmp-mat",children:["폴리우레아 줄눈",l.jsx("small",{children:"Polyurea"})]})})]})}),l.jsx("tbody",{children:Om.map(c=>l.jsxs("tr",{children:[l.jsx("td",{className:"cp-row-label",children:c.k}),l.jsx("td",{className:"cp-col-kp",children:c.kerafoxy}),l.jsx("td",{children:c.polyurea})]},c.k))})]})}),l.jsx("ul",{className:"cp-cmp-cards","aria-label":"비교 항목별 카드",children:Om.map(c=>l.jsxs("li",{className:"cp-cmp-card",children:[l.jsx("div",{className:"cp-cmp-card-k",children:c.k}),l.jsxs("div",{className:"cp-cmp-card-row",children:[l.jsxs("div",{className:"cp-cmp-card-side cp-cmp-card-kp",children:[l.jsx("span",{className:"cp-cmp-card-side-lbl",children:"케라폭시"}),l.jsx("span",{className:"cp-cmp-card-side-val",children:c.kerafoxy})]}),l.jsxs("div",{className:"cp-cmp-card-side",children:[l.jsx("span",{className:"cp-cmp-card-side-lbl",children:"폴리우레아"}),l.jsx("span",{className:"cp-cmp-card-side-val",children:c.polyurea})]})]})]},`m-${c.k}`))}),l.jsx("p",{className:"cp-cmp-foot",children:"* 가격은 화장실 양변기 전체(바닥+벽) 시공 기준 평균값이며, 평형·현장 상황에 따라 달라질 수 있습니다."})]})}),l.jsx("section",{className:"section","data-screen-label":"02 Recommend",children:l.jsxs("div",{className:"container",children:[l.jsx(Ro,{num:"02",ko:"어떤 소재를 선택해야 할까요?",en:"Which to Choose",title:l.jsxs(l.Fragment,{children:["공간 용도와 목적에 따라,",l.jsx("br",{}),"최적의 ",l.jsx("em",{children:"줄눈 소재"}),"를 선택하세요."]}),lede:"아래 체크리스트로 본인 공간에 더 어울리는 소재를 확인할 수 있습니다."}),l.jsx("div",{className:"cp-reco-grid",children:N1.map(c=>l.jsxs("article",{className:`cp-reco cp-reco-${c.variant}`,children:[l.jsxs("div",{className:"cp-reco-head",children:[l.jsx("h3",{className:"cp-reco-title",children:c.title}),l.jsx("span",{className:"cp-reco-sub",children:c.sub})]}),l.jsx("ul",{className:"cp-reco-list",children:c.items.map(u=>l.jsx("li",{children:u.text},u.text))})]},c.variant))})]})}),l.jsx("section",{className:"section bg-paper","data-screen-label":"03 Related",children:l.jsxs("div",{className:"container",children:[l.jsx(Ro,{num:"03",ko:"관련 정보 더 보기",en:"Related",title:l.jsxs(l.Fragment,{children:["줄눈에 대해 알아야 할, 다른 ",l.jsx("em",{children:"네 가지"}),"."]}),lede:"자재 · 제품 · 가격 · 시공 이유 — 네 가지 관점으로 줄눈을 더 깊이 살펴보세요."}),l.jsx("div",{className:"related-grid",children:k1.map(c=>l.jsxs(Ae,{to:c.href,className:"related-card",children:[l.jsx("span",{className:"related-idx",children:c.idx}),l.jsx("h4",{className:"related-title",children:c.title}),l.jsx("p",{className:"related-desc",children:c.desc}),l.jsxs("span",{className:"related-more",children:["more ",l.jsx("span",{className:"related-arr",children:"→"})]})]},c.href))})]})}),l.jsx("section",{className:"cta-band","data-screen-label":"CTA Band",children:l.jsxs("div",{className:"container cta-row",children:[l.jsxs("div",{className:"cta-text",children:[l.jsxs("h3",{className:"cta-title",children:["어떤 소재가 맞을지 ",l.jsx("em",{children:"아직 고민되시나요?"})]}),l.jsx("p",{className:"cta-sub",children:"현장 상황과 요구 사항을 듣고 최적의 소재를 추천해 드립니다. 서울·경기·인천 줄눈시공 무료 견적 상담."})]}),l.jsxs("div",{className:"cta-actions",children:[l.jsxs("button",{type:"button",className:"btn btn-primary",onClick:o,children:["무료 견적 받기 ",l.jsx("span",{className:"btn-arr",children:"→"})]}),l.jsx("a",{href:"tel:010-8005-6674",onClick:()=>at.phoneClick("info_cta"),className:"btn btn-ghost",children:"전화 상담 010-8005-6674"})]})]})}),l.jsx(Yt,{}),l.jsx("style",{children:S1})]})}const S1=`
/* page/container/section/eyebrow/sec-/crumb/btn/cta-band/related는 글로벌(src/index.css) 처리.
   페이지 고유: .cp-hero (중앙정렬·큰 타이틀) + cp-vs/cp-intro/cp-pill/compare-table */
.cp-hero em { color: #e3c5a3; }

/* ===== Hero (페이지 고유 — 중앙정렬 + 큰 타이틀) ===== */
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
.cp-hero .eyebrow {
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

/* crumb은 글로벌(src/index.css) 처리 */

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

/* sec-*는 글로벌(src/index.css) 처리 */

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

/* related/cta-band/btn은 글로벌(src/index.css) 처리 */
`,E1=[{k:"핵심 가치",v:"위생·미관·방수",small:"3대 효과"},{k:"권장 주기",v:"5년+",small:"시멘트 줄눈 기준"},{k:"시공 시간",v:"1일",small:"평형별 상이"},{k:"A/S",v:"2년",small:"무상"}],A1=[{n:"01",title:"위생 관리 — 곰팡이와 세균 차단",body:"타일 사이 줄눈은 습기가 모이기 쉬운 공간입니다. 시멘트 줄눈이 낡으면 균열과 기공이 생겨 곰팡이와 세균이 번식합니다. 정기적인 줄눈시공은 이런 위생 문제를 근본적으로 차단합니다.",k:"위생 지표",v:"곰팡이 0"},{n:"02",title:"미관 개선 — 공간의 첫인상을 바꾸다",body:"낡고 변색된 줄눈은 아무리 깨끗한 타일이어도 공간 전체를 낡아 보이게 만듭니다. 반대로 깔끔한 줄눈 하나만으로도 화장실·주방이 리모델링한 것처럼 새로워집니다.",k:"체감 효과",v:"리모델링 급"},{n:"03",title:"방수 보강 — 구조물 손상 예방",body:"줄눈이 갈라지면 물이 타일 아래로 스며들어 시멘트 바닥과 벽체에 수분이 침투합니다. 장기적으로 곰팡이, 타일 박리, 구조물 부식으로 이어져 훨씬 큰 수리 비용을 만듭니다.",k:"방수 효과",v:"구조 보호"},{n:"04",title:"비용 절감 — 조기 시공이 유리한 이유",body:"줄눈 문제를 방치하면 타일 전체 교체·방수 공사·구조 보수 등 수백만 원대 공사가 필요해집니다. 초기에 줄눈시공만 해도 이런 대규모 수리를 미연에 방지할 수 있습니다.",k:"예상 절감",v:"수백만 원"}],z1=[{k:"PB · 01",title:"곰팡이 대량 번식",body:"검은 곰팡이가 타일 줄눈을 따라 번지며 제거가 점점 어려워집니다."},{k:"PB · 02",title:"물이 벽·바닥 내부로 침투",body:"균열된 줄눈을 통해 물이 내부로 스며들어 구조 손상이 시작됩니다."},{k:"PB · 03",title:"타일 박리 · 탈락",body:"수분 침투로 접착력이 약해지며 타일이 들뜨거나 깨져 나갑니다."},{k:"PB · 04",title:"악취 발생",body:"유기물과 습기가 결합해 욕실 특유의 불쾌한 냄새가 심해집니다."}],T1=[{k:"TM · 01",title:"5년 이상 된 욕실·화장실",body:"시멘트 줄눈의 평균 수명을 넘은 경우 교체 시공을 권장합니다."},{k:"TM · 02",title:"변색·흑화가 눈에 띄는 경우",body:"줄눈이 검게 변했다면 이미 곰팡이가 깊이 침투한 상태일 수 있습니다."},{k:"TM · 03",title:"균열·탈락이 발생한 경우",body:"방치하면 물 침투로 인한 구조 손상으로 이어질 수 있습니다."},{k:"TM · 04",title:"집 매매 · 임대 전후",body:"줄눈 시공만으로도 체감 상태가 크게 달라져 매도·임대에 유리합니다."}],R1=[{idx:"No. 01 · Kerafoxy",href:"/info/kerafoxy",title:"케라폭시 줄눈이란?",desc:"에폭시 계열 고성능 줄눈 소재 케라폭시의 5가지 핵심 장점을 정리했습니다."},{idx:"No. 02 · Pricing",href:"/info/kerafoxy-price",title:"케라폭시 가격 안내",desc:"시공 비용에 영향을 주는 요인과 평형별 표준 가격을 한눈에."},{idx:"No. 03 · Product",href:"/info/kerafoxy-product",title:"케라폭시 계열 제품 소개",desc:"케라폭시·스타라이크·푸가리테 등 주요 제품 라인업과 색상 가이드."},{idx:"No. 04 · Compare",href:"/info/comparison",title:"폴리우레아 vs 케라폭시",desc:"두 소재의 차이점과, 어떤 공간에 어떤 소재가 적합한지."}];function Us({num:r,ko:o,en:c,title:u,lede:p,dark:m}){return l.jsxs("div",{className:`sec-head ${m?"sec-head-dark":""}`,children:[l.jsxs("div",{className:"sec-bar",children:[l.jsx("span",{className:"sec-n",children:r}),l.jsx("span",{className:"sec-rule"}),l.jsxs("span",{className:"sec-lbl",children:[l.jsx("span",{className:"sec-ko",children:o}),l.jsx("span",{className:"sec-en",children:c})]})]}),l.jsxs("div",{className:"sec-body",children:[l.jsx("h2",{className:"sec-title",children:u}),p&&l.jsx("p",{className:"sec-lede",children:p})]})]})}function C1(){const r=Ft();Pt(),v.useEffect(()=>{const c="/info/why-grout",u=dl[c],p=`${ve}${c}`,m=st("article-jsonld",ol({title:u.title,description:u.description,url:p,image:`${ve}/og_banner.jpg`,datePublished:"2026-03-01",dateModified:"2026-05-29"})),x=st("breadcrumb-jsonld",ul([{name:"홈",url:ve},{name:"줄눈 정보",url:`${ve}/#info`},{name:"줄눈시공 하는 이유",url:p}]));return()=>{m(),x()}},[]),v.useEffect(()=>{window.scrollTo(0,0)},[]);const o=()=>{r("/#calc"),setTimeout(()=>{const c=document.querySelector("#calc");c&&c.scrollIntoView({behavior:"smooth"})},300)};return l.jsxs("div",{className:"page",children:[l.jsx(Lt,{}),l.jsxs("header",{className:"hero","data-screen-label":"Hero",children:[l.jsx("div",{className:"hero-bg","aria-hidden":"true"}),l.jsxs("div",{className:"hero-inner",children:[l.jsx("div",{className:"hero-eyebrow hero-eyebrow-light",children:"Grout Knowledge · 05"}),l.jsxs("h1",{className:"hero-title",children:["줄눈시공",l.jsx("em",{children:","}),l.jsx("br",{}),"선택이 아닌 ",l.jsx("em",{children:"필수"}),"인 이유."]}),l.jsxs("p",{className:"hero-lede",children:["위생 · 미관 · 방수 · 비용 절감.",l.jsx("br",{}),"줄눈 하나만 바꿔도 공간의 수명이 크게 달라집니다."]}),l.jsx("ul",{className:"hero-meta",children:E1.map(c=>l.jsxs("li",{children:[l.jsx("span",{className:"hero-meta-k",children:c.k}),l.jsxs("span",{className:"hero-meta-v",children:[c.v," ",l.jsx("small",{children:c.small})]})]},c.k))})]})]}),l.jsx("nav",{className:"crumb","aria-label":"현재 위치",children:l.jsxs("div",{className:"container crumb-inner",children:[l.jsx(Ae,{to:"/",className:"crumb-item",children:"홈"}),l.jsx("span",{className:"crumb-sep",children:"/"}),l.jsx("span",{className:"crumb-item",children:"줄눈 정보"}),l.jsx("span",{className:"crumb-sep",children:"/"}),l.jsx("span",{className:"crumb-here",children:"줄눈시공 하는 이유"})]})}),l.jsx("section",{className:"section","data-screen-label":"Intro",children:l.jsx("div",{className:"container",children:l.jsxs("div",{className:"wg-intro-grid",children:[l.jsxs("h2",{className:"wg-intro-title",children:["줄눈시공은",l.jsx("br",{}),"선택이 아니라 ",l.jsx("em",{children:"필수"}),"입니다."]}),l.jsxs("div",{className:"wg-intro-body",children:[l.jsxs("p",{children:["많은 분들이 줄눈을 단순한 타일 사이 채움재로 생각하지만, 실제로는"," ",l.jsx("b",{children:"방수 · 위생 · 구조 보호"}),"를 담당하는 핵심 요소입니다. 줄눈이 낡으면 눈에 보이는 미관 문제를 넘어, 심각한 주거 환경 문제로 이어집니다."]}),l.jsxs("p",{children:["특히 매일 물을 사용하는 욕실·화장실·주방에서 ",l.jsx("b",{children:"줄눈시공"}),"은 가장 효과적인 유지보수 방법 중 하나입니다. 작은 투자로 공간 수명을 크게 연장할 수 있습니다."]})]})]})})}),l.jsx("section",{className:"section bg-paper","data-screen-label":"01 Reasons",children:l.jsxs("div",{className:"container",children:[l.jsx(Us,{num:"01",ko:"줄눈시공을 해야 하는 이유",en:"4 Reasons",title:l.jsxs(l.Fragment,{children:["네 가지 이유로,",l.jsx("br",{}),l.jsx("em",{children:"지금"})," 시공해야 합니다."]}),lede:"위생 · 미관 · 방수 · 비용. 줄눈시공이 만들어내는 효과를 한 줄씩 짚어봅니다."}),l.jsx("ul",{className:"wg-reasons",children:A1.map(c=>l.jsxs("li",{className:"wg-r-row",children:[l.jsx("span",{className:"wg-r-n",children:c.n}),l.jsxs("div",{className:"wg-r-text",children:[l.jsx("h3",{className:"wg-r-title",children:c.title}),l.jsx("p",{className:"wg-r-body",children:c.body})]}),l.jsxs("div",{className:"wg-r-spec",children:[l.jsx("span",{className:"wg-r-k",children:c.k}),l.jsx("span",{className:"wg-r-v",children:c.v})]})]},c.n))})]})}),l.jsx("section",{className:"section-dark","data-screen-label":"02 Problems",children:l.jsxs("div",{className:"container",children:[l.jsx(Us,{dark:!0,num:"02",ko:"줄눈시공을 미루면 생기는 문제",en:"What Happens",title:l.jsxs(l.Fragment,{children:["작은 균열이,",l.jsx("br",{}),l.jsx("em",{children:"큰 손상"}),"으로 이어집니다."]}),lede:"줄눈 노후를 방치하면 단순한 미관 문제를 넘어 주거 구조 자체에 영향을 줍니다."}),l.jsx("div",{className:"wg-prob-grid",children:z1.map(c=>l.jsxs("article",{className:"wg-prob-card",children:[l.jsx("span",{className:"wg-prob-k",children:c.k}),l.jsx("h3",{className:"wg-prob-title",children:c.title}),l.jsx("p",{className:"wg-prob-body",children:c.body})]},c.k))})]})}),l.jsx("section",{className:"section","data-screen-label":"03 Timing",children:l.jsxs("div",{className:"container",children:[l.jsx(Us,{num:"03",ko:"줄눈시공이 필요한 시점",en:"When to Start",title:l.jsxs(l.Fragment,{children:["이런 상황이라면,",l.jsx("br",{}),l.jsx("em",{children:"지금"})," 점검해 보세요."]}),lede:"아래 중 하나라도 해당된다면 줄눈 상태를 한 번 확인해볼 시점입니다."}),l.jsx("div",{className:"wg-timing-grid",children:T1.map(c=>l.jsxs("article",{className:"wg-timing-card",children:[l.jsx("span",{className:"wg-timing-k",children:c.k}),l.jsx("h3",{className:"wg-timing-title",children:c.title}),l.jsx("p",{className:"wg-timing-body",children:c.body})]},c.k))})]})}),l.jsx("section",{className:"section bg-paper","data-screen-label":"04 Related",children:l.jsxs("div",{className:"container",children:[l.jsx(Us,{num:"04",ko:"관련 정보 더 보기",en:"Related",title:l.jsxs(l.Fragment,{children:["줄눈에 대해 알아야 할, 다른 ",l.jsx("em",{children:"네 가지"}),"."]}),lede:"자재 · 가격 · 제품 · 비교 — 네 가지 관점으로 줄눈을 더 깊이 살펴보세요."}),l.jsx("div",{className:"related-grid",children:R1.map(c=>l.jsxs(Ae,{to:c.href,className:"related-card",children:[l.jsx("span",{className:"related-idx",children:c.idx}),l.jsx("h4",{className:"related-title",children:c.title}),l.jsx("p",{className:"related-desc",children:c.desc}),l.jsxs("span",{className:"related-more",children:["more ",l.jsx("span",{className:"related-arr",children:"→"})]})]},c.href))})]})}),l.jsx("section",{className:"cta-band","data-screen-label":"CTA Band",children:l.jsxs("div",{className:"container cta-row",children:[l.jsxs("div",{className:"cta-text",children:[l.jsxs("h3",{className:"cta-title",children:["지금 우리 집 줄눈이 ",l.jsx("em",{children:"괜찮은지"})," 점검받아 보세요."]}),l.jsx("p",{className:"cta-sub",children:"사진 한 장만 보내주시면 현재 상태와 시공 필요 여부를 안내해 드립니다. 서울·경기·인천 줄눈시공 무료 견적 상담."})]}),l.jsxs("div",{className:"cta-actions",children:[l.jsxs("button",{type:"button",className:"btn btn-primary",onClick:o,children:["무료 견적 받기 ",l.jsx("span",{className:"btn-arr",children:"→"})]}),l.jsx("a",{href:"tel:010-8005-6674",onClick:()=>at.phoneClick("info_cta"),className:"btn btn-ghost",children:"전화 상담 010-8005-6674"})]})]})}),l.jsx(Yt,{}),l.jsx("style",{children:M1})]})}const M1=`
/* page/container/section/hero/eyebrow/sec-/crumb/btn/cta-band/related/imgph는 모두 글로벌(src/index.css) 처리.
   이하 룰은 why-grout 페이지 고유 (Intro·Reasons·Problems·Timing). */

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

/* related/cta-band/btn은 글로벌(src/index.css) 처리 */
`,O1=[{k:"소재 분류",v:"폴리우레아 수지"},{k:"수명",v:"5년+"},{k:"시공 시간",v:"약 4~6시간"},{k:"A/S",v:"2년 무상"}],_1=[{idx:"01",title:"뛰어난 가성비",body:"케라폭시 대비 시공비 약 60~70% 수준으로 합리적입니다.",k:"시공비",v:"5만원~"},{idx:"02",title:"빠른 시공 시간",body:"경화 속도가 빨라 평수에 따라 반나절~1일 내 완료됩니다.",k:"경화",v:"수 시간"},{idx:"03",title:"강한 탄성",body:"약간의 변형·진동에도 균열 없이 견딥니다.",k:"연신율",v:"높음"},{idx:"04",title:"내후성",body:"자외선·온도 변화에 강해 베란다·외부 공간에 적합합니다.",k:"용도",v:"실외 OK"},{idx:"05",title:"경제적 보수",body:"5년 주기로 재시공해도 누적 비용이 부담스럽지 않습니다.",k:"5년 후",v:"재시공 가능"},{idx:"+",title:"단, 화장실엔 케라폭시가 답입니다.",body:"폴리우레아는 강한 내수성·항균이 필요한 화장실엔 적합하지 않습니다. 화장실은 케라폭시 시공만 진행합니다.",k:"화장실",v:"케라폭시 전용",dark:!0}],D1=[{name:"시멘트 줄눈",tag:"Standard",items:["저렴","1~2년 수명","곰팡이 취약","주기 재시공 필요"]},{name:"폴리우레아",tag:"Detailline 가성비 추천",hero:!0,items:["케라폭시 대비 60~70% 가격","5년+ 수명","베란다·외부화장실 적합","빠른 시공"]},{name:"케라폭시",tag:"Premium",items:["10년+ 수명","강한 내수성·항균","20+ 색상","화장실·욕실 권장"]}],U1=[{code:"SP · 01",ko:"베란다 · 발코니",en:"Veranda / Balcony",desc:"자외선·온도 변화에 강한 폴리우레아의 강점이 가장 잘 나타나는 공간입니다."},{code:"SP · 02",ko:"외부 화장실",en:"Outdoor Bath",desc:"실외 노출 화장실의 줄눈 보수에 적합합니다."},{code:"SP · 03",ko:"현관 바닥",en:"Entrance Floor",desc:"구축 아파트 현관 바닥의 가성비 보수 옵션입니다."},{code:"SP · 04",ko:"실내 화장실 (비추천)",en:"Indoor Bath (NOT recommended)",desc:"실내 화장실은 위생·항균이 중요해 케라폭시 시공만 진행합니다."}],B1=[{k:"시공 시간",v:"약 4~6시간"},{k:"경화",v:"수 시간 내"},{k:"사용 가능",v:"24시간 후 권장"},{k:"A/S",v:"2년 (무상)"}],H1=[{idx:"No. 01 · Compare",href:"/info/comparison",title:"폴리우레아 vs 케라폭시",desc:"두 자재의 차이와 공간별 추천 정리."},{idx:"No. 02 · Pricing",href:"/info/kerafoxy-price",title:"가격 안내",desc:"폴리우레아·케라폭시 평형별 표준 시공비."},{idx:"No. 03 · Kerafoxy",href:"/info/kerafoxy",title:"케라폭시 줄눈이란?",desc:"실내 화장실에 권장되는 자재."},{idx:"No. 04 · Why",href:"/info/why-grout",title:"줄눈시공 하는 이유",desc:"위생·미관·내구성을 위한 필수 시공."}];function Bs({num:r,ko:o,en:c,title:u,lede:p,dark:m}){return l.jsxs("div",{className:`sec-head ${m?"sec-head-dark":""}`,children:[l.jsxs("div",{className:"sec-bar",children:[l.jsx("span",{className:"sec-n",children:r}),l.jsx("span",{className:"sec-rule"}),l.jsxs("span",{className:"sec-lbl",children:[l.jsx("span",{className:"sec-ko",children:o}),l.jsx("span",{className:"sec-en",children:c})]})]}),l.jsxs("div",{className:"sec-body",children:[l.jsx("h2",{className:"sec-title",children:u}),l.jsx("p",{className:"sec-lede",children:p})]})]})}function L1(){const r=Ft();Pt(),v.useEffect(()=>{const c="/info/polyurea",u=dl[c],p=`${ve}${c}`,m=st("article-jsonld",ol({title:u.title,description:u.description,url:p,image:`${ve}/og_banner.jpg`,datePublished:"2026-05-29",dateModified:"2026-05-29"})),x=st("breadcrumb-jsonld",ul([{name:"홈",url:ve},{name:"줄눈 정보",url:`${ve}/#info`},{name:"폴리우레아 줄눈이란?",url:p}]));return()=>{m(),x()}},[]),v.useEffect(()=>{window.scrollTo(0,0)},[]);const o=()=>{r("/#calc"),setTimeout(()=>{const c=document.querySelector("#calc");c&&c.scrollIntoView({behavior:"smooth"})},300)};return l.jsxs("div",{className:"page",children:[l.jsx(Lt,{}),l.jsxs("header",{className:"hero","data-screen-label":"01 Hero",children:[l.jsx("div",{className:"pu-hero-bg",style:{"--hero-img-d":`url(${xh})`,"--hero-img-m":`url(${gh})`},"aria-hidden":"true"}),l.jsxs("div",{className:"hero-inner",children:[l.jsx("div",{className:"hero-eyebrow hero-eyebrow-light",children:"Grout Knowledge · 03"}),l.jsxs("h1",{className:"hero-title",children:["폴리우레아 줄눈,",l.jsx("br",{}),l.jsx("em",{children:"가성비"}),"의 정답."]}),l.jsxs("p",{className:"hero-lede",children:["베란다·외부화장실·현관 — 자외선과 온도 변화에 강한 폴리우레아 줄눈.",l.jsx("br",{}),"케라폭시 대비 60~70% 가격으로, 5년+ 수명을 확보합니다."]}),l.jsx("ul",{className:"hero-meta",children:O1.map(c=>l.jsxs("li",{children:[l.jsx("span",{className:"hero-meta-k",children:c.k}),l.jsx("span",{className:"hero-meta-v",children:c.v})]},c.k))})]})]}),l.jsx("nav",{className:"crumb","aria-label":"현재 위치",children:l.jsxs("div",{className:"container crumb-inner",children:[l.jsx(Ae,{to:"/",className:"crumb-item",children:"홈"}),l.jsx("span",{className:"crumb-sep",children:"/"}),l.jsx("span",{className:"crumb-item",children:"줄눈 정보"}),l.jsx("span",{className:"crumb-sep",children:"/"}),l.jsx("span",{className:"crumb-here",children:"폴리우레아 줄눈이란?"})]})}),l.jsx("section",{className:"section","data-screen-label":"02 Introduction",children:l.jsx("div",{className:"container",children:l.jsxs("div",{className:"pu-intro",children:[l.jsxs("div",{className:"pu-intro-left",children:[l.jsx("div",{className:"eyebrow",children:"Introduction · 들어가며"}),l.jsxs("h2",{className:"pu-intro-title",children:["폴리우레아 줄눈,",l.jsx("br",{}),"왜 ",l.jsx("em",{children:"가성비 추천"}),"일까요?"]}),l.jsxs("p",{className:"pu-intro-body",children:[l.jsx("em",{className:"pu-hl",children:"폴리우레아(Polyurea)는 빠른 경화 속도와 강한 탄성을 갖춘 고분자 줄눈 소재"}),"입니다. 케라폭시만큼의 화학적 항균성·내수성은 아니지만, 베란다·외부 공간에서는 자외선·온도 변화에 대한 내후성이 더 빛을 발합니다."]}),l.jsx("p",{className:"pu-intro-body",children:"무엇보다도 케라폭시 대비 시공비가 60~70% 수준이라, 보수 주기·예산 관점에서 합리적인 선택지입니다."}),l.jsxs("p",{className:"pu-intro-body",children:["⚠️ 실내 화장실·욕실은 위생과 항균이 중요해 폴리우레아가 적합하지 않습니다. 해당 공간은 ",l.jsx(Ae,{to:"/info/kerafoxy",className:"pu-inline-link",children:"케라폭시 시공"}),"만 진행합니다."]})]}),l.jsx("div",{className:"pu-intro-right",children:l.jsx("div",{className:"pu-intro-photo",children:l.jsx("img",{src:bh,alt:"폴리우레아 줄눈 시공 디테일",loading:"lazy"})})})]})})}),l.jsx("section",{className:"section bg-paper","data-screen-label":"03 Benefits",children:l.jsxs("div",{className:"container",children:[l.jsx(Bs,{num:"02",ko:"5가지 핵심 장점",en:"Benefits",title:l.jsxs(l.Fragment,{children:["베란다·외부 공간에서 빛을 발하는 ",l.jsx("em",{children:"가성비 자재"}),"."]}),lede:"가격·시간·내후성 — 폴리우레아가 어떤 강점으로 베란다와 외부 공간에 적합한지 정리했습니다."}),l.jsx("div",{className:"pu-benefits-grid",children:_1.map(c=>l.jsxs("article",{className:`pu-benefit ${c.dark?"pu-benefit-dark":""}`,children:[l.jsxs("div",{className:"pu-benefit-head",children:[l.jsxs("span",{className:"pu-benefit-lbl",children:["Benefit / ",c.idx]}),l.jsx("span",{className:"pu-benefit-idx",children:c.idx})]}),l.jsx("h3",{className:"pu-benefit-title",children:c.title.split(`
`).map((u,p)=>l.jsx("span",{className:"pu-benefit-title-line",children:u},p))}),l.jsx("p",{className:"pu-benefit-body",children:c.body}),l.jsxs("div",{className:"pu-benefit-spec",children:[l.jsx("span",{className:"pu-spec-k",children:c.k}),l.jsx("span",{className:"pu-spec-v",children:c.v})]})]},c.idx))}),l.jsx("div",{className:"pu-compare",children:D1.map(c=>l.jsxs("div",{className:`pu-compare-col ${c.hero?"pu-is-hero":""}`,children:[l.jsxs("div",{className:"pu-compare-head",children:[l.jsx("h3",{className:"pu-compare-name",children:c.name}),l.jsx("span",{className:"pu-compare-tag",children:c.tag})]}),l.jsx("ul",{className:"pu-compare-list",children:c.items.map(u=>l.jsx("li",{children:u},u))})]},c.name))})]})}),l.jsx("section",{className:"section","data-screen-label":"04 Spaces",children:l.jsxs("div",{className:"container",children:[l.jsx(Bs,{num:"03",ko:"적합한 공간",en:"Spaces",title:l.jsxs(l.Fragment,{children:["폴리우레아는 ",l.jsx("em",{children:"외부 공간"}),"에 강합니다."]}),lede:"자외선과 온도 변화가 큰 베란다·외부화장실·현관에 폴리우레아가 적합합니다. 실내 화장실은 케라폭시 전용."}),l.jsx("ul",{className:"pu-spaces",children:U1.map(c=>l.jsxs("li",{className:"pu-space-row",children:[l.jsx("span",{className:"pu-space-code",children:c.code}),l.jsxs("span",{className:"pu-space-lbl",children:[l.jsx("span",{className:"pu-space-ko",children:c.ko}),l.jsx("span",{className:"pu-space-en",children:c.en})]}),l.jsx("span",{className:"pu-space-desc",children:c.desc}),l.jsxs("span",{className:"pu-space-more",children:["자세히 ",l.jsx("span",{className:"pu-space-arr",children:"→"})]})]},c.code))})]})}),l.jsx("section",{className:"section-dark","data-screen-label":"05 Before · After",children:l.jsxs("div",{className:"container",children:[l.jsx(Bs,{dark:!0,num:"04",ko:"시공 전 · 후 비교",en:"Before · After",title:l.jsxs(l.Fragment,{children:["같은 베란다, ",l.jsx("em",{children:"다른 마감"}),"."]}),lede:"실제 시공 현장에서 발견되는 변화를 정리했습니다. 노후 줄눈을 가성비로 되살리는 한 방."}),l.jsxs("div",{className:"pu-ba-grid",children:[l.jsxs("figure",{className:"pu-ba-item",children:[l.jsxs("div",{className:"pu-ba-photo",children:[l.jsx("img",{src:mh,alt:"시공 전 — 노후 베란다 줄눈",loading:"lazy"}),l.jsx("span",{className:"pu-ba-pill pu-ba-pill-light",children:"Before"})]}),l.jsxs("figcaption",{className:"pu-ba-cap",children:[l.jsx("h4",{className:"pu-ba-cap-title",children:"자외선·균열로 손상된 줄눈"}),l.jsx("p",{className:"pu-ba-cap-body",children:"베란다의 시멘트 줄눈은 자외선과 온도 변화로 균열·박락이 빠르게 진행됩니다."})]})]}),l.jsxs("figure",{className:"pu-ba-item",children:[l.jsxs("div",{className:"pu-ba-photo",children:[l.jsx("img",{src:hh,alt:"시공 후 — 폴리우레아 줄눈 마감",loading:"lazy"}),l.jsx("span",{className:"pu-ba-pill pu-ba-pill-accent",children:"After"})]}),l.jsxs("figcaption",{className:"pu-ba-cap",children:[l.jsx("h4",{className:"pu-ba-cap-title",children:"균일한 마감, 5년+ 수명"}),l.jsx("p",{className:"pu-ba-cap-body",children:"탄성 있는 폴리우레아 마감으로 변형·균열 없이 깨끗한 상태가 유지됩니다."})]})]})]}),l.jsx("ul",{className:"pu-ba-bottom",children:B1.map(c=>l.jsxs("li",{children:[l.jsx("span",{className:"pu-ba-bot-k",children:c.k}),l.jsx("span",{className:"pu-ba-bot-v",children:c.v})]},c.k))})]})}),l.jsx("section",{className:"section bg-paper","data-screen-label":"06 Related",children:l.jsxs("div",{className:"container",children:[l.jsx(Bs,{num:"05",ko:"관련 정보 더 보기",en:"Related",title:l.jsxs(l.Fragment,{children:["폴리우레아를 더 깊이 알아볼 ",l.jsx("em",{children:"네 가지"}),"."]}),lede:"비교 · 가격 · 케라폭시 · 시공 — 네 가지 관점으로 줄눈을 살펴보세요."}),l.jsx("div",{className:"related-grid",children:H1.map(c=>l.jsxs(Ae,{to:c.href,className:"related-card",children:[l.jsx("span",{className:"related-idx",children:c.idx}),l.jsx("h4",{className:"related-title",children:c.title}),l.jsx("p",{className:"related-desc",children:c.desc}),l.jsxs("span",{className:"related-more",children:["more ",l.jsx("span",{className:"related-arr",children:"→"})]})]},c.href))})]})}),l.jsx("section",{className:"cta-band","data-screen-label":"CTA Band",children:l.jsxs("div",{className:"container cta-row",children:[l.jsxs("div",{className:"cta-text",children:[l.jsxs("h3",{className:"cta-title",children:["베란다·외부 공간 줄눈, ",l.jsx("em",{children:"무료 견적"}),"으로 시작하세요."]}),l.jsx("p",{className:"cta-sub",children:"평형 · 공간을 알려주시면 24시간 내에 회신드립니다. 서울·경기·인천 베란다·외부화장실·현관 폴리우레아 줄눈 무료 견적 상담."})]}),l.jsxs("div",{className:"cta-actions",children:[l.jsxs("button",{type:"button",className:"btn btn-primary",onClick:o,children:["무료 견적 받기 ",l.jsx("span",{className:"btn-arr",children:"→"})]}),l.jsx("a",{href:"tel:010-8005-6674",onClick:()=>at.phoneClick("info_cta"),className:"btn btn-ghost",children:"전화 상담 010-8005-6674"})]})]})}),l.jsx(Yt,{}),l.jsx("style",{children:Y1})]})}const Y1=`
/* page/container/section/hero/eyebrow/sec-/crumb/btn/cta-band/related는 글로벌(src/index.css) 처리.
   페이지 고유: .pu-hero-bg(이미지 합성) + intro/benefit/compare/spaces/ba + pu-inline-link */

.pu-inline-link {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 3px;
}
.pu-inline-link:hover { color: var(--accent-deep); }

/* ===== Hero 배경 (페이지 고유 이미지 합성) ===== */
.pu-hero-bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    linear-gradient(180deg, rgba(20,16,12,.25) 0%, rgba(20,16,12,.25) 35%, rgba(14,11,8,.95) 100%),
    radial-gradient(120% 80% at 70% 20%, rgba(138,106,76,.18), transparent 60%),
    var(--hero-img-d, none) center top / 100% auto no-repeat,
    linear-gradient(180deg, #251d14 0%, #18130e 100%);
}
@media (max-width: 720px) {
  .pu-hero-bg {
    background:
      linear-gradient(180deg, rgba(20,16,12,.35) 0%, rgba(14,11,8,.78) 100%),
      radial-gradient(120% 80% at 70% 20%, rgba(138,106,76,.18), transparent 60%),
      var(--hero-img-m, none) center/cover no-repeat,
      linear-gradient(180deg, #251d14 0%, #18130e 100%);
  }
}
.pu-hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(120% 100% at 50% 0%, rgba(0,0,0,.15), rgba(0,0,0,.55) 80%);
  pointer-events: none;
}

/* crumb/sec-*는 글로벌(src/index.css) 처리 */

/* ===== Intro ===== */
.pu-intro {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 80px;
  align-items: start;
}
@media (max-width: 820px) {
  .pu-intro { grid-template-columns: 1fr; gap: 40px; }
}
.pu-intro-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: clamp(28px, 3.2vw, 44px);
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: var(--ink);
  margin: 16px 0 28px;
  word-break: keep-all;
}
.pu-intro-body {
  font-size: 16px;
  line-height: 1.85;
  color: var(--ink-2);
  margin: 0 0 18px;
  word-break: keep-all;
}
.pu-hl {
  background: linear-gradient(180deg, transparent 62%, rgba(138,106,76,.18) 62%);
}
.pu-intro-photo {
  position: relative;
  width: 80%;
  margin-left: auto;
  aspect-ratio: 5 / 6;
  overflow: hidden;
  border: 1px solid var(--line);
  background: var(--bg-2);
}
@media (max-width: 820px) {
  .pu-intro-photo { width: 100%; margin-left: 0; }
}
.pu-intro-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* ===== Benefits ===== */
.pu-benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
  margin-bottom: 80px;
}
@media (max-width: 900px) {
  .pu-benefits-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .pu-benefits-grid { grid-template-columns: 1fr; }
}
.pu-benefit {
  background: var(--bg);
  padding: 40px 36px 36px;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  transition: background .25s ease;
}
.pu-benefit:hover { background: var(--paper); }
.pu-benefit-dark {
  background: var(--ink);
  color: var(--on-dark);
}
.pu-benefit-dark:hover { background: var(--ink); }
.pu-benefit-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 18px;
}
.pu-benefit-lbl {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
}
.pu-benefit-dark .pu-benefit-lbl { color: #d9b790; }
.pu-benefit-idx {
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
  .pu-benefit-idx { font-size: 32px; }
}
.pu-benefit-dark .pu-benefit-idx { color: #d9b790; opacity: .55; }
.pu-benefit-title {
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
.pu-benefit-dark .pu-benefit-title { color: #fff; }
.pu-benefit-title-line { display: block; }
.pu-benefit-body {
  font-size: 14px;
  line-height: 1.75;
  color: var(--muted);
  margin: 0;
  min-height: calc(1.75em * 3);
}
.pu-benefit-dark .pu-benefit-body { color: rgba(255,255,255,.7); }
.pu-benefit-spec {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  padding-top: 18px;
  margin-top: auto;
  border-top: 1px solid var(--line);
}
.pu-benefit-dark .pu-benefit-spec { border-top-color: rgba(255,255,255,.14); }
.pu-spec-k {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.pu-benefit-dark .pu-spec-k { color: #d9b790; }
.pu-spec-v {
  font-family: 'Noto Serif KR', serif;
  font-weight: 500;
  font-size: 16px;
  color: var(--ink);
  font-variant-numeric: lining-nums;
}
.pu-benefit-dark .pu-spec-v { color: #fff; }

/* ===== Compare ===== */
.pu-compare {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border: 1px solid var(--line);
}
@media (max-width: 820px) {
  .pu-compare { grid-template-columns: 1fr; }
}
.pu-compare-col {
  background: var(--bg);
  padding: 36px 32px;
  border-right: 1px solid var(--line);
}
.pu-compare-col:last-child { border-right: none; }
@media (max-width: 820px) {
  .pu-compare-col {
    border-right: none;
    border-bottom: 1px solid var(--line);
  }
  .pu-compare-col:last-child { border-bottom: none; }
}
.pu-compare-col.pu-is-hero {
  background: var(--ink);
  color: var(--on-dark);
}
.pu-compare-head {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 18px;
  margin-bottom: 18px;
  border-bottom: 1px solid var(--line);
}
.pu-compare-col.pu-is-hero .pu-compare-head { border-bottom-color: rgba(255,255,255,.14); }
.pu-compare-name {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: -0.005em;
  color: var(--ink);
  margin: 0;
}
.pu-compare-col.pu-is-hero .pu-compare-name { color: #fff; }
.pu-compare-tag {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.pu-compare-col.pu-is-hero .pu-compare-tag { color: #d9b790; }
.pu-compare-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.pu-compare-list li {
  font-size: 14px;
  line-height: 1.7;
  color: var(--ink-2);
  padding-left: 14px;
  position: relative;
}
.pu-compare-list li::before {
  content: '';
  position: absolute;
  left: 0; top: 0.75em;
  width: 6px; height: 1px;
  background: var(--muted-2);
}
.pu-compare-col.pu-is-hero .pu-compare-list li { color: rgba(255,255,255,.85); }
.pu-compare-col.pu-is-hero .pu-compare-list li::before { background: #d9b790; }

/* ===== Spaces ===== */
.pu-spaces { list-style: none; padding: 0; margin: 0; }
.pu-space-row {
  display: grid;
  grid-template-columns: 90px 1fr 2fr 100px;
  gap: 32px;
  align-items: center;
  padding: 32px 8px;
  border-bottom: 1px solid var(--line);
  transition: background .25s ease, padding .25s ease;
}
.pu-space-row:first-child { border-top: 1px solid var(--line); }
.pu-space-row:hover {
  background: var(--paper);
  padding-left: 28px;
}
.pu-space-row:hover .pu-space-more { color: var(--accent); }
.pu-space-row:hover .pu-space-arr { transform: translateX(4px); }
.pu-space-code {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.pu-space-lbl { display: flex; flex-direction: column; gap: 4px; }
.pu-space-ko {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: 21px;
  color: var(--ink);
  letter-spacing: -0.005em;
}
.pu-space-en {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.pu-space-desc {
  font-size: 14.5px;
  line-height: 1.7;
  color: var(--muted);
}
.pu-space-more {
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
  text-align: right;
  transition: color .25s ease;
}
.pu-space-arr {
  display: inline-block;
  margin-left: 4px;
  transition: transform .3s ease;
}
@media (max-width: 820px) {
  .pu-space-row {
    grid-template-columns: 1fr;
    gap: 8px;
    padding: 24px 8px;
  }
  .pu-space-row:hover { padding-left: 18px; }
  .pu-space-code { display: none; }
  .pu-space-desc, .pu-space-more { grid-column: 1; }
  .pu-space-more { text-align: left; }
}

/* ===== Before · After ===== */
.pu-ba-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}
@media (max-width: 820px) { .pu-ba-grid { grid-template-columns: 1fr; } }
.pu-ba-item { margin: 0; }
.pu-ba-photo {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: #1f1a14;
  border: 1px solid rgba(255,255,255,.1);
}
.pu-ba-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.pu-ba-pill {
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
.pu-ba-pill-light {
  background: rgba(255,255,255,.92);
  color: var(--ink);
}
.pu-ba-pill-accent {
  background: #d9b790;
  color: var(--dark);
}
.pu-ba-cap { padding: 22px 4px 0; }
.pu-ba-cap-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: 19px;
  line-height: 1.4;
  color: var(--on-dark);
  margin: 0 0 8px;
}
.pu-ba-cap-body {
  font-size: 14px;
  line-height: 1.7;
  color: var(--dark-muted);
  margin: 0;
}
.pu-ba-bottom {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
  padding: 32px 0 0;
  margin: 80px 0 0;
  border-top: 1px solid rgba(255,255,255,.14);
  gap: 0;
}
@media (max-width: 820px) {
  .pu-ba-bottom { grid-template-columns: repeat(2, 1fr); row-gap: 24px; }
}
.pu-ba-bottom li {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-right: 18px;
  border-right: 1px solid rgba(255,255,255,.14);
}
.pu-ba-bottom li:last-child { border-right: none; }
.pu-ba-bottom li:not(:first-child) { padding-left: 18px; }
@media (max-width: 820px) {
  .pu-ba-bottom li:nth-child(2) { border-right: none; }
  .pu-ba-bottom li:nth-child(3) { padding-left: 0; }
}
.pu-ba-bot-k {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,.55);
}
.pu-ba-bot-v {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: 18px;
  color: var(--on-dark);
  letter-spacing: -0.005em;
}
@media (max-width: 820px) {
  .pu-ba-bot-v { font-size: 16px; }
}

/* related/cta-band/btn은 글로벌(src/index.css) 처리 */
`;function Yo({corner:r,label:o,dark:c=!1,className:u=""}){const p=c?"bg-[#1f1a14] border-[var(--dark-line)]":"bg-[var(--bg-2)] border-[var(--line)]",m=c?"text-[var(--dark-muted)]":"text-[var(--muted-2)]",x=c?"repeating-linear-gradient(135deg,transparent 0 14px,rgba(255,255,255,.022) 14px 28px)":"repeating-linear-gradient(135deg,transparent 0 14px,rgba(28,25,22,.022) 14px 28px)",g=c?"radial-gradient(120% 80% at 50% 100%, rgba(0,0,0,.5), transparent 60%)":"radial-gradient(120% 80% at 50% 100%, rgba(28,25,22,.07), transparent 60%)";return l.jsxs("div",{className:`absolute inset-0 overflow-hidden border ${p} ${u}`,children:[l.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:x}}),l.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:g}}),r&&l.jsx("span",{className:`absolute right-3.5 top-3 text-[9.5px] tracking-[0.12em] uppercase opacity-75 ${m}`,children:r}),o&&l.jsxs("span",{className:`absolute left-4 bottom-3.5 z-[1] flex items-center gap-2.5 text-[10.5px] tracking-[0.14em] uppercase ${m}`,children:[l.jsx("span",{className:"inline-block w-1.5 h-1.5 bg-[var(--accent)]"}),l.jsx("span",{children:o})]})]})}function q1({item:r}){const{main:o,before:c}=av(r),[u,p]=v.useState(!1),[m,x]=v.useState(!1),[g,b]=v.useState(!1),h=v.useRef(!1);v.useEffect(()=>{h.current=window.matchMedia("(hover: none)").matches},[]);const w=()=>{h.current||p(!0)},k=()=>{h.current||p(!1)},B=Q=>{h.current&&c&&!u&&(Q.preventDefault(),p(!0))};return l.jsxs(Ae,{to:`/portfolio/${r.slug}`,onMouseEnter:w,onMouseLeave:k,onClick:B,className:"block group transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_36px_-20px_rgba(28,25,22,0.22)]",children:[l.jsxs("div",{className:"relative aspect-[4/3] overflow-hidden border border-[var(--line)] bg-[var(--bg-2)]",children:[o&&!m?l.jsx("img",{src:o.src,alt:o.alt,onError:()=>x(!0),className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${u&&c&&!g?"opacity-0":"opacity-100"}`,loading:"lazy"}):l.jsx("div",{className:`absolute inset-0 transition-opacity duration-300 ${u&&c?"opacity-0":"opacity-100"}`,children:l.jsx(Yo,{corner:"AFTER · 1200×900",label:o?.alt??"시공 후"})}),c&&(g?l.jsx("div",{className:`absolute inset-0 transition-opacity duration-300 ${u?"opacity-100":"opacity-0"}`,children:l.jsx(Yo,{dark:!0,corner:"BEFORE · 1200×900",label:c.alt})}):l.jsx("img",{src:c.src,alt:c.alt,onError:()=>b(!0),className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${u?"opacity-100":"opacity-0"}`,loading:"lazy"})),l.jsx("span",{className:`absolute top-3 left-3 text-[10.5px] font-medium tracking-[0.14em] uppercase px-2.5 py-1 rounded-[2px] transition-colors ${u?"bg-black/40 text-white":"bg-white/40 text-[var(--ink)]"}`,children:u?"Before":"After"})]}),l.jsxs("div",{className:"bg-[var(--paper)] border border-t-0 border-[var(--line)] px-5 py-3",children:[l.jsx("span",{className:"text-[11px] font-medium tracking-[0.14em] text-[var(--muted-2)] uppercase",children:lv(r)}),l.jsxs("h3",{className:"text-[17px] text-[var(--ink)] leading-[1.35] tracking-[-0.005em] group-hover:text-[var(--accent)] transition-colors break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:[r.apartment," ",r.area,"평"]}),l.jsxs("p",{className:"text-[13px] text-[var(--muted)] mt-3",children:[r.space," · ",r.material,r.materialDetail?` ${r.materialDetail}`:""]})]})]})}const Co=9;function G1(){Pt(),v.useEffect(()=>{window.scrollTo(0,0)},[]);const[r,o]=v.useState([]),[c,u]=v.useState([]),[p,m]=v.useState([]),[x,g]=v.useState(Co),b=v.useMemo(()=>tv({spaces:r,regions:c,materials:p}),[r,c,p]);v.useEffect(()=>{g(Co)},[r,c,p]);const h=b.slice(0,x),w=x<b.length,k=b.length,B=r.length+c.length+p.length>0,Q=()=>{o([]),u([]),m([])};return l.jsxs("div",{className:"page min-h-screen bg-[var(--bg)]",children:[l.jsx(Lt,{}),l.jsxs("header",{className:"hero","data-screen-label":"Hero",children:[l.jsx("div",{className:"hero-bg","aria-hidden":"true"}),l.jsxs("div",{className:"hero-inner",children:[l.jsx("div",{className:"hero-eyebrow hero-eyebrow-light",children:"Portfolio"}),l.jsxs("h1",{className:"hero-title",children:["줄눈 한 줄로",l.jsx("br",{}),l.jsx("em",{children:"달라진 공간들"}),"."]}),l.jsxs("p",{className:"hero-lede",children:["디테일라인이 시공한 시공 사례 모음입니다.",l.jsx("br",{}),"욕실·베란다·현관·주방등 케라폭시·폴리우레아 시공 결과를 단지·평수·자재별로 직접 확인하세요."]})]})]}),l.jsx("nav",{className:"crumb","aria-label":"현재 위치",children:l.jsxs("div",{className:"container crumb-inner",children:[l.jsx(Ae,{to:"/",className:"crumb-item",children:"홈"}),l.jsx("span",{className:"crumb-sep",children:"/"}),l.jsx("span",{className:"crumb-here",children:"시공사례"})]})}),l.jsxs("main",{className:"pt-6 md:pt-6 pb-24",children:[l.jsx("div",{className:"px-6 md:px-12 lg:px-20 max-w-[1360px] mx-auto mb-8 pb-6 border-b border-[var(--line)]",children:l.jsxs("div",{className:"flex flex-wrap gap-2 items-center",children:[l.jsx(Mo,{label:"공간",options:uh,selected:r,onChange:o}),l.jsx(Mo,{label:"지역",options:Fb,selected:c,onChange:u}),l.jsx(Mo,{label:"자재",options:Pb,selected:p,onChange:m}),B&&l.jsx("button",{onClick:Q,className:"ml-1.5 text-xs text-[var(--muted)] hover:text-[var(--ink)] underline underline-offset-2 cursor-pointer",children:"필터 초기화"}),l.jsxs("span",{className:"ml-auto text-[12.5px] tracking-[0.06em] text-[var(--muted-2)] font-medium",children:["총 ",l.jsx("span",{className:"text-[var(--ink)]",children:k}),"건"]})]})}),l.jsx("div",{className:"px-6 md:px-12 lg:px-20 max-w-[1360px] mx-auto",children:h.length===0?l.jsx(V1,{onReset:Q,hasFilter:B}):l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",children:h.map(S=>l.jsx(q1,{item:S},S.slug))}),w&&l.jsx("div",{className:"text-center mt-14",children:l.jsxs("button",{onClick:()=>g(S=>S+Co),className:"inline-flex items-center gap-2.5 px-7 py-3.5 border border-[var(--line-strong)] rounded-[2px] text-sm font-medium text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] hover:border-[var(--ink)] transition-colors cursor-pointer",children:["더보기",l.jsxs("span",{className:"text-[var(--muted-2)]",children:["(",b.length-x,"건 남음)"]})]})})]})})]}),l.jsx(Fo,{}),l.jsx(Yt,{})]})}function Mo({label:r,options:o,selected:c,onChange:u}){const[p,m]=v.useState(!1),x=v.useRef(null);v.useEffect(()=>{const h=w=>{x.current&&!x.current.contains(w.target)&&m(!1)};return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[]);const g=h=>{u(c.includes(h)?c.filter(w=>w!==h):[...c,h])},b=c.length>0;return l.jsxs("div",{ref:x,className:"relative",children:[l.jsxs("button",{onClick:()=>m(!p),className:`h-9 px-4 rounded-full text-[13px] border transition-colors cursor-pointer inline-flex items-center gap-1.5 ${b?"bg-[var(--ink)] text-[var(--paper)] border-[var(--ink)]":"bg-[var(--paper)] border-[var(--line)] text-[var(--ink)] hover:border-[var(--line-strong)]"}`,children:[r,b&&l.jsxs("span",{className:"text-[11px] text-[var(--accent-soft)]",children:["(",c.length,")"]}),l.jsx("i",{className:`ri-arrow-down-s-line text-base leading-none transition-transform ${p?"rotate-180":""}`})]}),p&&l.jsx("div",{className:"absolute top-full left-0 mt-2 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] shadow-[0_18px_36px_-20px_rgba(28,25,22,0.22)] z-20 min-w-[180px] py-2",children:o.map(h=>l.jsxs("button",{onClick:()=>g(h),className:"w-full px-4 py-2.5 text-left text-[13.5px] flex items-center gap-2.5 hover:bg-[var(--bg-2)] cursor-pointer",children:[l.jsx("input",{type:"checkbox",checked:c.includes(h),readOnly:!0,className:"accent-[var(--accent)] cursor-pointer"}),l.jsx("span",{className:c.includes(h)?"text-[var(--ink)] font-medium":"text-[var(--ink-2)]",children:h})]},h))})]})}function V1({onReset:r,hasFilter:o}){return l.jsxs("div",{className:"text-center py-24 border border-dashed border-[var(--line)] bg-[var(--paper)]",children:[l.jsx("i",{className:"ri-search-line text-5xl text-[var(--muted-2)] opacity-60"}),l.jsx("p",{className:"mt-5 text-[20px] text-[var(--ink)]",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:o?"해당 조건의 사례가 없습니다":"시공 사례가 곧 공개됩니다"}),l.jsx("p",{className:"mt-2 text-sm text-[var(--muted)]",children:o?"다른 조건으로 다시 시도해보세요":"실제 현장 사례를 정리해 업로드 중입니다"}),o&&l.jsx("button",{onClick:r,className:"mt-7 px-5 py-2.5 border border-[var(--line-strong)] rounded-[2px] text-sm text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] hover:border-[var(--ink)] transition-colors cursor-pointer",children:"필터 초기화"})]})}function Q1({images:r,startIndex:o,onClose:c}){const[u,p]=v.useState(o);v.useEffect(()=>{p(o)},[o]),v.useEffect(()=>{const x=b=>{b.key==="Escape"&&c(),b.key==="ArrowLeft"&&p(h=>Math.max(0,h-1)),b.key==="ArrowRight"&&p(h=>Math.min(r.length-1,h+1))};document.addEventListener("keydown",x);const g=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",x),document.body.style.overflow=g}},[c,r.length]);const m=r[u];return m?l.jsxs("div",{role:"dialog","aria-modal":"true",className:"fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center",onClick:c,children:[l.jsx("button",{onClick:x=>{x.stopPropagation(),c()},className:"absolute top-5 right-5 text-white text-3xl w-12 h-12 flex items-center justify-center hover:bg-white/10 rounded-full cursor-pointer","aria-label":"닫기",children:l.jsx("i",{className:"ri-close-line"})}),u>0&&l.jsx("button",{onClick:x=>{x.stopPropagation(),p(g=>g-1)},className:"absolute left-4 md:left-8 text-white text-3xl w-12 h-12 flex items-center justify-center hover:bg-white/10 rounded-full cursor-pointer","aria-label":"이전 사진",children:l.jsx("i",{className:"ri-arrow-left-s-line text-4xl"})}),l.jsx("img",{src:m.src,alt:m.alt,className:"max-w-[92vw] max-h-[82vh] object-contain cursor-zoom-out"}),u<r.length-1&&l.jsx("button",{onClick:x=>{x.stopPropagation(),p(g=>g+1)},className:"absolute right-4 md:right-8 text-white text-3xl w-12 h-12 flex items-center justify-center hover:bg-white/10 rounded-full cursor-pointer","aria-label":"다음 사진",children:l.jsx("i",{className:"ri-arrow-right-s-line text-4xl"})}),l.jsxs("div",{className:"absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium tracking-[0.1em]",children:[u+1," / ",r.length]})]}):null}function Z1(){const{slug:r}=Y0(),o=r?Ib(r):void 0;Pt(o?{title:o.title,description:o.description,ogImage:o.images[0]?.src?`${ve}${o.images[0].src}`:fh}:{noindex:!0}),v.useEffect(()=>{window.scrollTo(0,0)},[r]),v.useEffect(()=>{if(!o)return;const h=`${ve}/portfolio/${o.slug}`,w=o.images.find(Q=>Q.type==="after-main")??o.images[0],k=st("portfolio-article-jsonld",ol({title:o.title,description:o.description,url:h,image:w?`${ve}${w.src}`:void 0,datePublished:o.date,dateModified:o.date})),B=st("portfolio-breadcrumb-jsonld",ul([{name:"홈",url:ve},{name:"시공사례",url:`${ve}/portfolio`},{name:o.region,url:`${ve}/portfolio`},...o.district?[{name:o.district,url:`${ve}/portfolio`}]:[],{name:`${o.apartment} ${o.area}평`,url:h}]));return()=>{k(),B()}},[o]);const[c,u]=v.useState(null);if(!o)return l.jsxs("div",{className:"min-h-screen bg-[var(--bg)]",children:[l.jsx(Lt,{}),l.jsxs("main",{className:"pt-32 pb-24 px-6 text-center",children:[l.jsx("h1",{className:"text-3xl text-[var(--ink)]",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:"사례를 찾을 수 없습니다"}),l.jsx("p",{className:"mt-4 text-[var(--muted)]",children:"URL을 다시 확인해주세요."}),l.jsx(Ae,{to:"/portfolio",className:"inline-block mt-7 px-6 py-2.5 border border-[var(--line-strong)] rounded-[2px] text-sm cursor-pointer hover:bg-[var(--ink)] hover:text-[var(--paper)] hover:border-[var(--ink)] transition-colors",children:"전체 시공사례 보기"})]}),l.jsx(Yt,{})]});const p=o.images.filter(h=>h.type==="before"),m=o.images.filter(h=>h.type==="after-main"||h.type==="after"),x=[...p,...m],g=h=>{const w=x.findIndex(k=>k.src===h.src);u(w>=0?w:0)},b=()=>{const h=`${ve}/portfolio/${o.slug}`;navigator.share?navigator.share({title:o.title,url:h}).catch(()=>{}):navigator.clipboard&&(navigator.clipboard.writeText(h),alert("링크가 복사되었습니다. 카카오톡에 붙여넣어 공유하세요."))};return l.jsxs("div",{className:"min-h-screen bg-[var(--bg)]",children:[l.jsx(Lt,{}),l.jsx("div",{className:"h-12 md:h-20","aria-hidden":"true"}),l.jsx("nav",{className:"crumb","aria-label":"현재 위치",children:l.jsxs("div",{className:"container crumb-inner",children:[l.jsx(Ae,{to:"/",className:"crumb-item",children:"홈"}),l.jsx("span",{className:"crumb-sep",children:"/"}),l.jsx(Ae,{to:"/portfolio",className:"crumb-item",children:"시공사례"}),l.jsx("span",{className:"crumb-sep",children:"/"}),l.jsx("span",{className:"crumb-item",children:o.region}),o.district&&l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"crumb-sep",children:"/"}),l.jsx("span",{className:"crumb-item",children:o.district})]}),l.jsx("span",{className:"crumb-sep",children:"/"}),l.jsxs("span",{className:"crumb-here",children:[o.apartment," ",o.area,"평"]})]})}),l.jsxs("main",{className:"pb-24",children:[l.jsx(K1,{item:o,onMainClick:g,shareKakao:b}),p.length>0&&l.jsxs("section",{className:"px-6 md:px-12 lg:px-20 max-w-[1360px] mx-auto mb-16 pt-14 border-t border-[var(--line)]",children:[l.jsx(_m,{eyebrow:"Before",title:"시공 전"}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8",children:p.map((h,w)=>l.jsx(Dm,{image:h,label:"Before",onClick:()=>g(h),dark:!0},w))}),l.jsx("p",{className:"text-[var(--ink-2)] leading-[1.85] text-[15.5px] md:text-[16.5px] break-keep bg-[var(--bg-2)] px-6 md:px-8 py-6 md:py-8 rounded-[2px]",children:o.body.beforeText})]}),l.jsxs("section",{className:"px-6 md:px-12 lg:px-20 max-w-[1360px] mx-auto mb-20 pt-14 border-t border-[var(--line)]",children:[l.jsx(_m,{eyebrow:"After",title:"시공 후",accent:!0}),l.jsx("div",{className:"grid grid-cols-2 gap-4 md:gap-6 mb-8",children:m.map((h,w)=>l.jsx(Dm,{image:h,label:"After",accent:!0,onClick:()=>g(h)},w))}),l.jsx("p",{className:"text-[var(--ink-2)] leading-[1.85] text-[15.5px] md:text-[16.5px] break-keep bg-[var(--bg-2)] px-6 md:px-8 py-6 md:py-8 rounded-[2px]",children:o.body.afterText})]})]}),l.jsx("section",{className:"bg-[var(--bg-2)] border-t border-[var(--line)] py-14 max-[720px]:py-[56px] md:py-[72px]",children:l.jsxs("div",{className:"px-6 md:px-12 lg:px-20 max-w-[1360px] mx-auto flex flex-wrap items-center justify-between gap-8",children:[l.jsxs("div",{className:"flex flex-col gap-2 flex-[1_1_380px]",children:[l.jsxs("h3",{className:"text-[clamp(26px,3vw,38px)] tracking-[-0.015em] leading-[1.35] break-keep m-0 text-[var(--ink)]",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:400},children:["내 집 줄눈도 이렇게 ",l.jsx("em",{className:"not-italic text-[var(--accent)]",children:"새것처럼"})," 만들 수 있을까요?"]}),l.jsx("p",{className:"text-sm text-[var(--muted)] m-0",children:"평형 · 공간 · 색상을 알려주시면 24시간 내에 회신드립니다. 서울·경기 줄눈시공 무료 견적 상담."})]}),l.jsxs("div",{className:"flex flex-wrap gap-3 justify-end max-[820px]:flex-nowrap max-[820px]:justify-start max-[820px]:gap-2 max-[820px]:w-full",children:[l.jsxs(Ae,{to:"/#calc",className:"inline-flex items-center gap-2.5 px-[22px] py-4 rounded-[2px] text-sm font-medium bg-[var(--ink)] text-[var(--paper)] hover:bg-[var(--accent-deep)] transition-colors cursor-pointer max-[820px]:flex-1 max-[820px]:min-w-0 max-[820px]:px-3 max-[820px]:py-3.5 max-[820px]:text-[13px] max-[820px]:whitespace-nowrap max-[820px]:justify-center",children:["무료 견적 받기 ",l.jsx("span",{children:"→"})]}),l.jsxs("a",{href:`tel:${Lo}`,onClick:()=>at.phoneClick("info_cta"),className:"inline-flex items-center gap-2.5 px-[22px] py-4 rounded-[2px] text-sm font-medium border border-[var(--line-strong)] text-[var(--ink)] bg-transparent hover:bg-[var(--ink)] hover:text-[var(--paper)] hover:border-[var(--ink)] transition-colors cursor-pointer max-[820px]:flex-1 max-[820px]:min-w-0 max-[820px]:px-3 max-[820px]:py-3.5 max-[820px]:text-[13px] max-[820px]:whitespace-nowrap max-[820px]:justify-center",children:["전화 상담 ",Lo]})]})]})}),l.jsx(Fo,{}),l.jsx(Yt,{}),c!==null&&l.jsx(Q1,{images:x,startIndex:c,onClose:()=>u(null)})]})}function K1({item:r,onMainClick:o,shareKakao:c}){const u=r.images.filter(V=>V.type==="after"),p=r.images.filter(V=>V.type==="before"),[m,x]=v.useState(0),[g,b]=v.useState(!1),[h,w]=v.useState(!1),[k,B]=v.useState(!1);v.useEffect(()=>{w(!1),B(!1)},[m]);const Q=u[m],S=p[m],G=u.length,q=V=>V<10?`0${V}`:`${V}`,Y=r.district?`${r.region} ${r.district}`:r.region;return l.jsxs("section",{className:"px-6 md:px-12 lg:px-20 pt-6 max-w-[1360px] mx-auto mb-20","data-screen-label":"Detail PDP",children:[l.jsxs("div",{className:"pdp",children:[l.jsxs("div",{className:"pdp-gallery",children:[l.jsx("div",{className:"pdp-thumbs",role:"tablist","aria-label":"시공 사진",children:u.map((V,H)=>l.jsxs("button",{role:"tab","aria-selected":H===m,"aria-label":V.alt,className:`pdp-thumb ${H===m?"is-active":""}`,onClick:()=>x(H),children:[l.jsx("img",{src:V.src,alt:V.alt,className:"pdp-thumb-img",loading:"lazy"}),l.jsx("span",{className:"sq"})]},V.src))}),l.jsxs("div",{className:`pdp-main ${g?"show-before":""}`,onMouseEnter:()=>b(!0),onMouseLeave:()=>b(!1),children:[l.jsxs("button",{type:"button",className:"stage",onClick:()=>Q&&o(Q),"aria-label":Q?`${Q.alt} 확대 보기`:"확대",children:[Q&&!h&&l.jsx("img",{src:Q.src,alt:Q.alt,className:"pdp-stage-img",onError:()=>w(!0),loading:"eager"}),S&&!k&&l.jsx("img",{src:S.src,alt:S.alt,className:"pdp-before-img",onError:()=>B(!0),loading:"lazy"}),l.jsxs("span",{className:"pdp-counter",children:[q(m+1)," / ",q(G)]})]}),l.jsxs("div",{className:"pdp-main-foot",children:[l.jsx("div",{className:"pdp-dots","aria-hidden":"true",children:u.map((V,H)=>l.jsx("i",{className:H===m?"on":""},V.src))}),l.jsxs("button",{type:"button",onClick:c,className:"pdp-share","aria-label":"공유하기",children:[l.jsx("i",{className:"ri-share-line"}),"공유"]})]})]})]}),l.jsxs("div",{className:"pdp-info",children:[l.jsxs("h1",{className:"pdp-title",children:[r.apartment," ",r.area,"평 — ",r.space," 줄눈시공"]}),l.jsxs("div",{className:"pdp-rows",children:[l.jsxs("div",{className:"pdp-row",children:[l.jsx("span",{className:"k",children:"위치"}),l.jsxs("span",{className:"v",children:[Y," ",r.apartment]})]}),l.jsxs("div",{className:"pdp-row",children:[l.jsx("span",{className:"k",children:"평형"}),l.jsxs("span",{className:"v",children:[r.area,"평",r.areaSqm?` / ${r.areaSqm}㎡`:""]})]}),l.jsxs("div",{className:"pdp-row",children:[l.jsx("span",{className:"k",children:"공간·자재"}),l.jsx("span",{className:"v",children:[{space:r.space,spaceDetail:r.spaceDetail,material:r.material,materialDetail:r.materialDetail},...r.extraSpaces??[]].map((V,H)=>l.jsxs("span",{children:[V.space,V.spaceDetail?` (${V.spaceDetail})`:""," ·"," ",l.jsxs("b",{children:[V.material,V.materialDetail?` ${V.materialDetail}`:""]})]},H))})]}),l.jsxs("div",{className:"pdp-row",children:[l.jsx("span",{className:"k",children:"시공 기간"}),l.jsx("span",{className:"v",children:r.duration})]}),l.jsxs("div",{className:"pdp-row",children:[l.jsx("span",{className:"k",children:"시공일자"}),l.jsx("span",{className:"v",children:r.date.replace(/-/g,".")})]}),l.jsxs("div",{className:"pdp-row",children:[l.jsx("span",{className:"k",children:"보증"}),l.jsxs("span",{className:"v",children:["시공 후 ",r.asPeriod," 무상 A/S"]})]})]}),l.jsxs("div",{className:"pdp-cta-block",children:[l.jsxs("a",{href:`tel:${Lo}`,onClick:()=>at.phoneClick("info_cta"),className:"pdp-cta-btn pdp-cta-primary",children:[l.jsx("i",{className:"ri-phone-line"})," 전화 상담"]}),l.jsxs(Ae,{to:"/#calc",className:"pdp-cta-btn pdp-cta-dark",children:[l.jsx("i",{className:"ri-edit-line"})," 무료 견적 받기"]})]})]})]}),l.jsx("style",{children:X1})]})}function _m({eyebrow:r,title:o,accent:c=!1}){return l.jsxs("div",{className:"mb-8 md:mb-10",children:[l.jsxs("span",{className:`inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.18em] uppercase ${c?"text-[var(--accent)]":"text-[var(--muted-2)]"}`,children:[l.jsx("span",{className:`inline-block w-1.5 h-1.5 ${c?"bg-[var(--accent)]":"bg-[var(--muted-2)]"}`}),r]}),l.jsx("h2",{className:"text-[clamp(24px,2.8vw,34px)] text-[var(--ink)] mt-3 leading-[1.25] tracking-[-0.015em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:o})]})}function Dm({image:r,label:o,accent:c=!1,dark:u=!1,onClick:p}){const[m,x]=v.useState(!1);return l.jsxs("button",{onClick:p,className:"relative aspect-[4/3] overflow-hidden border border-[var(--line)] bg-[var(--bg-2)] cursor-zoom-in group","aria-label":`${r.alt} 확대 보기`,children:[m?l.jsx(Yo,{dark:u,corner:`${o.toUpperCase()} · 1200×900`,label:r.alt}):l.jsx("img",{src:r.src,alt:r.alt,onError:()=>x(!0),className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",loading:"lazy"}),l.jsx("span",{className:`absolute top-3 left-3 text-[10.5px] font-medium tracking-[0.14em] uppercase px-2.5 py-1 rounded-[2px] ${c?"bg-[var(--accent)] text-white":"bg-white/95 text-[var(--ink)]"}`,children:o})]})}const X1=`
/* container/crumb는 글로벌(src/index.css) 처리 */

.pdp{display:grid;grid-template-columns:minmax(0,1.12fr) minmax(0,.88fr);gap:48px;align-items:start}
@media (max-width:900px){ .pdp{grid-template-columns:1fr;gap:30px} }

.pdp-gallery{display:flex;gap:14px;position:sticky;top:90px}
.pdp-thumbs{display:flex;flex-direction:column;gap:10px;flex:0 0 70px}
.pdp-thumb{padding:0;border:1px solid var(--line);background:var(--bg-2);cursor:pointer;
  aspect-ratio:1/1;position:relative;overflow:hidden;transition:border-color .2s}
.pdp-thumb::before{content:"";position:absolute;inset:0;z-index:0;
  background:repeating-linear-gradient(135deg,transparent 0 8px,rgba(28,25,22,.03) 8px 16px);pointer-events:none}
.pdp-thumb-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:1;display:block}
.pdp-thumb.is-active{border-color:var(--ink)}
.pdp-thumb .sq{position:absolute;left:5px;top:5px;width:5px;height:5px;background:var(--accent);opacity:0;transition:opacity .2s;display:inline-block;z-index:2}
.pdp-thumb.is-active .sq{opacity:1}

/* Mobile: 메인 위 / 썸네일 아래 + 가로 스크롤 */
@media (max-width:900px){
  .pdp-gallery{flex-direction:column-reverse;position:static;gap:12px}
  .pdp-thumbs{flex-direction:row;flex:0 0 auto;gap:8px;
    overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;
    scroll-snap-type:x mandatory;padding-bottom:2px}
  .pdp-thumb{flex:0 0 72px;scroll-snap-align:start}
}
@media (max-width:560px){
  .pdp-thumb{flex-basis:64px}
}

.pdp-main{flex:1;min-width:0;display:flex;flex-direction:column;gap:14px}
.pdp-main .stage{position:relative;aspect-ratio:1/1;overflow:hidden;background:var(--bg-2);
  border:1px solid var(--line);padding:0;cursor:zoom-in;width:100%}
.pdp-main .stage::before{content:"";position:absolute;inset:0;z-index:0;
  background:repeating-linear-gradient(135deg,transparent 0 14px,rgba(28,25,22,.022) 14px 28px);pointer-events:none}
.pdp-main .stage::after{content:"";position:absolute;inset:0;z-index:0;
  background:radial-gradient(120% 80% at 50% 100%, rgba(28,25,22,.07), transparent 60%);pointer-events:none}
.pdp-stage-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;display:block}
.pdp-before-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:1;display:block;
  opacity:0;transition:opacity .45s ease;pointer-events:none}
.pdp-main.show-before .pdp-before-img,
.pdp-main:hover .pdp-before-img{opacity:1}
.pdp-stage-label{position:absolute;left:18px;bottom:16px;z-index:3;display:flex;align-items:center;gap:10px;
  pointer-events:none;transition:opacity .3s ease;
  font-family:'Pretendard Variable',Pretendard,sans-serif;font-size:10.5px;letter-spacing:.12em;
  text-transform:uppercase;color:var(--muted-2)}
.pdp-stage-label .sq{width:6px;height:6px;background:var(--accent);display:inline-block}
.pdp-main:hover .pdp-stage-label[data-pdp="main-label"]{opacity:0}
.pdp-stage-label.pdp-before-label{opacity:0}
.pdp-main.show-before .pdp-stage-label.pdp-before-label,
.pdp-main:hover .pdp-stage-label.pdp-before-label{opacity:1}
.pdp-counter{position:absolute;right:16px;bottom:14px;z-index:3;pointer-events:none;
  font-family:'Pretendard Variable',Pretendard,sans-serif;font-size:9.5px;letter-spacing:.1em;color:var(--muted-2)}

.pdp-main-foot{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}
.pdp-dots{display:flex;gap:7px;align-items:center}
.pdp-dots i{width:7px;height:7px;border-radius:999px;background:var(--line-strong);display:block;transition:all .25s}
.pdp-dots i.on{background:var(--ink);width:20px}
.pdp-share{border:0;background:none;cursor:pointer;display:inline-flex;align-items:center;gap:6px;
  font-family:'Pretendard Variable',Pretendard,sans-serif;font-size:12px;color:var(--muted);transition:color .2s;padding:4px 0}
.pdp-share:hover{color:var(--ink)}

.pdp-info{display:flex;flex-direction:column}
.pdp-title{font-family:'Noto Serif KR',serif;font-size:clamp(21px,2.1vw,27px);font-weight:500;line-height:1.36;letter-spacing:-.01em;margin-top:10px;color:var(--ink);word-break:keep-all}

.pdp-rows{margin-top:26px;border:1px solid var(--line)}
.pdp-row{display:flex;gap:16px;padding:14px 18px;border-top:1px solid var(--line);font-size:13.5px}
.pdp-row:first-child{border-top:0}
.pdp-row .k{flex:0 0 84px;color:var(--muted-2);font-family:'Pretendard Variable',Pretendard,sans-serif;font-size:12px;letter-spacing:.02em;padding-top:1px}
.pdp-row .v{color:var(--ink-2);line-height:1.5;display:flex;flex-direction:column;gap:5px}
.pdp-row .v b{font-weight:600;color:var(--accent-deep)}

.pdp-cta-block{display:flex;flex-direction:column;gap:8px;margin-top:20px}
.pdp-cta-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;height:44px;border-radius:2px;
  font-size:14px;font-weight:500;cursor:pointer;text-decoration:none;
  transition:background .2s, color .2s, border-color .2s}
.pdp-cta-primary{background:var(--accent);color:#fff}
.pdp-cta-primary:hover{background:var(--accent-deep)}
.pdp-cta-ghost{background:transparent;border:1px solid var(--line-strong);color:var(--ink)}
.pdp-cta-ghost:hover{background:var(--ink);color:var(--paper);border-color:var(--ink)}
.pdp-cta-dark{background:var(--ink);color:var(--paper)}
.pdp-cta-dark:hover{background:var(--accent-deep)}
`,J1=[{title:"1. 개인정보의 처리 목적",body:l.jsxs(l.Fragment,{children:[l.jsx("p",{children:'디테일라인(이하 "회사")은 다음의 목적을 위하여 개인정보를 처리하며, 다음의 목적 이외의 용도로는 이용하지 않습니다.'}),l.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[l.jsx("li",{children:"견적 상담 및 방문 일정 조율"}),l.jsx("li",{children:"시공 서비스 안내, 견적 회신, 후속 응대"}),l.jsx("li",{children:"본인 확인 및 부정 이용 방지"})]})]})},{title:"2. 수집하는 개인정보 항목",body:l.jsxs(l.Fragment,{children:[l.jsx("p",{children:"회사는 무료 견적 상담 신청 시 다음의 개인정보를 수집합니다."}),l.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[l.jsxs("li",{children:[l.jsx("strong",{children:"필수 항목"}),": 이름, 연락처(휴대전화), 시공 위치(주소), 희망 시공 일정, 시공 공간(현관/화장실/베란다 등)"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"선택 항목"}),": 이메일, 상세 시공 내역(요청 사항)"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"자동 수집"}),": 접속 일시(상담 신청 시각)"]})]})]})},{title:"3. 개인정보의 보유 및 이용 기간",body:l.jsxs(l.Fragment,{children:[l.jsx("p",{children:"수집된 개인정보는 상담 완료 후 즉시 폐기하는 것을 원칙으로 합니다."}),l.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[l.jsx("li",{children:"상담 완료(견적 회신 또는 거절 의사 확인) 후 지체 없이 파기"}),l.jsx("li",{children:"다만, 시공 계약이 체결된 경우에는 「전자상거래 등에서의 소비자보호에 관한 법률」 등 관계 법령에 따라 거래 기록을 5년간 보관할 수 있습니다."})]})]})},{title:"4. 개인정보의 제3자 제공 및 처리 위탁",body:l.jsxs(l.Fragment,{children:[l.jsx("p",{children:"회사는 정보주체의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 견적 신청서 접수 처리를 위해 다음의 클라우드 서비스를 이용합니다."}),l.jsx("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:l.jsxs("li",{children:[l.jsx("strong",{children:"Google LLC (Google Workspace · Apps Script)"})," — 견적 신청 데이터 저장 및 처리. 데이터 처리 위치: 미국"]})}),l.jsx("p",{className:"mt-3 text-[var(--muted)] text-sm",children:"위 위탁업체는 Google이 제공하는 표준 데이터 보호 약관에 따라 운영되며, 회사는 위탁 처리 과정을 정기적으로 점검합니다."})]})},{title:"5. 개인정보의 파기 절차 및 방법",body:l.jsxs(l.Fragment,{children:[l.jsx("p",{children:"회사는 보유 기간이 경과하거나 처리 목적이 달성된 개인정보를 다음의 절차와 방법에 따라 지체 없이 파기합니다."}),l.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[l.jsxs("li",{children:[l.jsx("strong",{children:"파기 절차"}),": 상담 완료 시점에 자동/수동으로 식별, 즉시 파기 처리"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"전자적 파일"}),": 복원이 불가능한 방법으로 영구 삭제"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"출력물"}),": 분쇄 또는 소각"]})]})]})},{title:"6. 정보주체의 권리·의무 및 행사 방법",body:l.jsxs(l.Fragment,{children:[l.jsx("p",{children:"정보주체는 회사에 대해 언제든지 다음의 권리를 행사할 수 있습니다."}),l.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[l.jsx("li",{children:"개인정보 열람 요구"}),l.jsx("li",{children:"오류 등이 있을 경우 정정 요구"}),l.jsx("li",{children:"삭제 요구"}),l.jsx("li",{children:"처리 정지 요구"})]}),l.jsx("p",{className:"mt-3",children:"위 권리 행사는 아래 연락처를 통해 요청하실 수 있으며, 회사는 지체 없이 조치합니다."})]})},{title:"7. 개인정보의 안전성 확보 조치",body:l.jsxs(l.Fragment,{children:[l.jsx("p",{children:"회사는 개인정보 보호를 위해 다음의 조치를 취하고 있습니다."}),l.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[l.jsx("li",{children:"관리적 조치: 개인정보 취급자 최소화, 정기 점검"}),l.jsx("li",{children:"기술적 조치: 전송 구간 HTTPS 암호화, 접근 권한 통제"}),l.jsx("li",{children:"물리적 조치: 자료 보관 장소 출입 통제"})]})]})},{title:"8. 개인정보 보호 책임자",body:l.jsxs(l.Fragment,{children:[l.jsx("p",{children:"회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만 처리 및 피해 구제 등을 위하여 아래와 같이 개인정보 보호 책임자를 지정하고 있습니다."}),l.jsxs("div",{className:"mt-3 p-4 bg-[var(--bg)] rounded-sm text-sm space-y-1",children:[l.jsxs("p",{children:[l.jsx("strong",{children:"상호"}),": 디테일라인"]}),l.jsxs("p",{children:[l.jsx("strong",{children:"사업자등록번호"}),": 609-33-19473"]}),l.jsxs("p",{children:[l.jsx("strong",{children:"주소"}),": 서울 서초구 본마을4길 11 1층 104호"]}),l.jsxs("p",{children:[l.jsx("strong",{children:"연락처"}),": 010-8005-6674"]})]})]})},{title:"9. 권익 침해 구제 방법",body:l.jsxs(l.Fragment,{children:[l.jsx("p",{children:"개인정보 침해로 인한 구제가 필요한 경우 아래 기관에 문의하실 수 있습니다."}),l.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[l.jsx("li",{children:"개인정보분쟁조정위원회: 1833-6972 (privacy.go.kr)"}),l.jsx("li",{children:"개인정보침해신고센터: 118 (privacy.kisa.or.kr)"}),l.jsx("li",{children:"대검찰청 사이버수사과: 1301 (spo.go.kr)"}),l.jsx("li",{children:"경찰청 사이버수사국: 182 (ecrm.cyber.go.kr)"})]})]})},{title:"10. 개인정보 처리방침의 변경",body:l.jsx(l.Fragment,{children:l.jsx("p",{children:"이 개인정보 처리방침은 2026년 4월 29일부터 적용됩니다. 법령·정책 또는 보안 기술의 변경에 따라 내용이 추가, 삭제 및 수정될 경우 시행 7일 전부터 본 페이지를 통해 공지합니다."})})}];function $1(){return Pt(),v.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[]),l.jsxs("div",{className:"min-h-screen bg-[var(--paper)]",children:[l.jsx(Lt,{}),l.jsx("main",{className:"pt-28 pb-20 px-6 md:px-12 lg:px-20",children:l.jsxs("div",{className:"max-w-3xl mx-auto",children:[l.jsxs("div",{className:"mb-10",children:[l.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Privacy Policy"}),l.jsx("h1",{className:"text-4xl md:text-5xl font-black text-[var(--ink)] mt-2",children:"개인정보 처리방침"}),l.jsx("p",{className:"text-[var(--muted)] mt-3 text-sm",children:"시행일: 2026년 4월 29일"})]}),l.jsx("p",{className:"text-[var(--muted)] leading-relaxed mb-12",children:'디테일라인(이하 "회사")은 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립·공개합니다.'}),l.jsx("div",{className:"space-y-10",children:J1.map(r=>l.jsxs("section",{children:[l.jsx("h2",{className:"text-xl md:text-2xl font-bold text-[var(--ink)] mb-3",children:r.title}),l.jsx("div",{className:"text-[var(--muted)] leading-relaxed text-sm md:text-base",children:r.body})]},r.title))}),l.jsx("div",{className:"mt-16 pt-8 border-t border-[var(--line)] text-center",children:l.jsxs(Ae,{to:"/",className:"inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--ink)] transition-colors",children:[l.jsx("i",{className:"ri-arrow-left-line"}),"홈으로 돌아가기"]})})]})}),l.jsx(Yt,{})]})}const W1=[{path:"/",element:l.jsx(Xv,{})},{path:"/privacy",element:l.jsx($1,{})},{path:"/info/kerafoxy",element:l.jsx(a1,{})},{path:"/info/kerafoxy-price",element:l.jsx(d1,{})},{path:"/info/kerafoxy-product",element:l.jsx(y1,{})},{path:"/info/comparison",element:l.jsx(w1,{})},{path:"/info/why-grout",element:l.jsx(C1,{})},{path:"/info/polyurea",element:l.jsx(L1,{})},{path:"/portfolio",element:l.jsx(G1,{})},{path:"/portfolio/:slug",element:l.jsx(Z1,{})},{path:"*",element:l.jsx(_b,{})}];let vh;new Promise(r=>{vh=r});function F1(){const r=q0(W1),o=Ft();return v.useEffect(()=>{window.REACT_APP_NAVIGATE=o,vh(window.REACT_APP_NAVIGATE)}),r}function P1(){return l.jsx(wb,{basename:"/",children:l.jsx(F1,{})})}let yh=-1;const tn=r=>{addEventListener("pageshow",o=>{o.persisted&&(yh=o.timeStamp,r(o))},!0)},Jt=(r,o,c,u)=>{let p,m;return x=>{o.value>=0&&(x||u)&&(m=o.value-(p??0),(m||p===void 0)&&(p=o.value,o.delta=m,o.rating=((g,b)=>g>b[1]?"poor":g>b[0]?"needs-improvement":"good")(o.value,c),r(o)))}},Io=r=>{requestAnimationFrame(()=>requestAnimationFrame(r))},eu=()=>{const r=performance.getEntriesByType("navigation")[0];if(r&&r.responseStart>0&&r.responseStart<performance.now())return r},oi=()=>eu()?.activationStart??0,$t=(r,o=-1)=>{const c=eu();let u="navigate";return yh>=0?u="back-forward-cache":c&&(document.prerendering||oi()>0?u="prerender":document.wasDiscarded?u="restore":c.type&&(u=c.type.replace(/_/g,"-"))),{name:r,value:o,rating:"good",delta:0,entries:[],id:`v5-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,navigationType:u}},Oo=new WeakMap;function tu(r,o){return Oo.get(r)||Oo.set(r,new o),Oo.get(r)}class I1{t;i=0;o=[];h(o){if(o.hadRecentInput)return;const c=this.o[0],u=this.o.at(-1);this.i&&c&&u&&o.startTime-u.startTime<1e3&&o.startTime-c.startTime<5e3?(this.i+=o.value,this.o.push(o)):(this.i=o.value,this.o=[o]),this.t?.(o)}}const ui=(r,o,c={})=>{try{if(PerformanceObserver.supportedEntryTypes.includes(r)){const u=new PerformanceObserver(p=>{queueMicrotask(()=>{o(p.getEntries())})});return u.observe({type:r,buffered:!0,...c}),u}}catch{}},au=r=>{let o=!1;return()=>{o||(r(),o=!0)}};let Il=-1;const jh=new Set,Um=()=>document.visibilityState!=="hidden"||document.prerendering?1/0:0,qo=r=>{if(document.visibilityState==="hidden"){if(r.type==="visibilitychange")for(const o of jh)o();isFinite(Il)||(Il=r.type==="visibilitychange"?r.timeStamp:0,removeEventListener("prerenderingchange",qo,!0))}},Ws=()=>{if(Il<0){const r=oi();Il=(document.prerendering?void 0:globalThis.performance.getEntriesByType("visibility-state").find(c=>c.name==="hidden"&&c.startTime>=r)?.startTime)??Um(),addEventListener("visibilitychange",qo,!0),addEventListener("prerenderingchange",qo,!0),tn(()=>{setTimeout(()=>{Il=Um()})})}return{get firstHiddenTime(){return Il},onHidden(r){jh.add(r)}}},Fs=r=>{document.prerendering?addEventListener("prerenderingchange",r,!0):r()},Bm=[1800,3e3],Nh=(r,o={})=>{Fs(()=>{const c=Ws();let u,p=$t("FCP");const m=ui("paint",x=>{for(const g of x)g.name==="first-contentful-paint"&&(m.disconnect(),g.startTime<c.firstHiddenTime&&(p.value=Math.max(g.startTime-oi(),0),p.entries.push(g),u(!0)))});m&&(u=Jt(r,p,Bm,o.reportAllChanges),tn(x=>{p=$t("FCP"),u=Jt(r,p,Bm,o.reportAllChanges),Io(()=>{p.value=performance.now()-x.timeStamp,u(!0)})}))})},Hm=[.1,.25],ey=(r,o={})=>{const c=Ws();Nh(au(()=>{let u,p=$t("CLS",0);const m=tu(o,I1),x=b=>{for(const h of b)m.h(h);m.i>p.value&&(p.value=m.i,p.entries=m.o,u())},g=ui("layout-shift",x);g&&(u=Jt(r,p,Hm,o.reportAllChanges),c.onHidden(()=>{x(g.takeRecords()),u(!0)}),tn(()=>{m.i=0,p=$t("CLS",0),u=Jt(r,p,Hm,o.reportAllChanges),Io(u)}),setTimeout(u))}))};let kh=0,_o=1/0,Hs=0;const ty=r=>{for(const o of r)o.interactionId&&(_o=Math.min(_o,o.interactionId),Hs=Math.max(Hs,o.interactionId),kh=Hs?(Hs-_o)/7+1:0)};let Go;const Lm=()=>Go?kh:performance.interactionCount??0,ay=()=>{"interactionCount"in performance||Go||(Go=ui("event",ty,{durationThreshold:0}))};let Ym=0;class ly{l=[];u=new Map;m;p;v(){Ym=Lm(),this.l.length=0,this.u.clear()}T(){const o=Math.min(this.l.length-1,Math.floor((Lm()-Ym)/50));return this.l[o]}h(o){if(this.m?.(o),!o.interactionId&&o.entryType!=="first-input")return;const c=this.l.at(-1);let u=this.u.get(o.interactionId);if(u||this.l.length<10||o.duration>c.L){if(u?o.duration>u.L?(u.entries=[o],u.L=o.duration):o.duration===u.L&&o.startTime===u.entries[0].startTime&&u.entries.push(o):(u={id:o.interactionId,entries:[o],L:o.duration},this.u.set(u.id,u),this.l.push(u)),this.l.sort((p,m)=>m.L-p.L),this.l.length>10){const p=this.l.splice(10);for(const m of p)this.u.delete(m.id)}this.p?.(u)}}}const wh=r=>{const o=globalThis.requestIdleCallback||setTimeout,c=globalThis.cancelIdleCallback||clearTimeout;if(document.visibilityState==="hidden")r();else{const u=au(r);let p=-1;const m=()=>{c(p),u()};addEventListener("visibilitychange",m,{once:!0,capture:!0}),p=o(()=>{removeEventListener("visibilitychange",m,{capture:!0}),u()})}},qm=[200,500],ny=(r,o={})=>{if(!globalThis.PerformanceEventTiming||!("interactionId"in PerformanceEventTiming.prototype))return;const c=Ws();Fs(()=>{ay();let u,p=$t("INP");const m=tu(o,ly),x=b=>{wh(()=>{for(const w of b)m.h(w);const h=m.T();h&&h.L!==p.value&&(p.value=h.L,p.entries=h.entries,u())})},g=ui("event",x,{durationThreshold:o.durationThreshold??40});u=Jt(r,p,qm,o.reportAllChanges),g&&(g.observe({type:"first-input",buffered:!0}),c.onHidden(()=>{x(g.takeRecords()),u(!0)}),tn(()=>{m.v(),p=$t("INP"),u=Jt(r,p,qm,o.reportAllChanges)}))})};class iy{m;h(o){this.m?.(o)}}const Gm=[2500,4e3],sy=(r,o={})=>{Fs(()=>{const c=Ws();let u,p=$t("LCP");const m=tu(o,iy),x=b=>{o.reportAllChanges||(b=b.slice(-1));for(const h of b)m.h(h),h.startTime<c.firstHiddenTime&&(p.value=Math.max(h.startTime-oi(),0),p.entries=[h],u())},g=ui("largest-contentful-paint",x);if(g){u=Jt(r,p,Gm,o.reportAllChanges);const b=au(()=>{x(g.takeRecords()),g.disconnect(),u(!0)}),h=w=>{w.isTrusted&&(wh(b),removeEventListener(w.type,h,{capture:!0}))};for(const w of["keydown","click","visibilitychange"])addEventListener(w,h,{capture:!0});tn(w=>{p=$t("LCP"),u=Jt(r,p,Gm,o.reportAllChanges),Io(()=>{p.value=performance.now()-w.timeStamp,u(!0)})})}})},Vm=[800,1800],Vo=r=>{document.prerendering?Fs(()=>Vo(r)):document.readyState!=="complete"?addEventListener("load",()=>Vo(r),!0):setTimeout(r)},ry=(r,o={})=>{let c=$t("TTFB"),u=Jt(r,c,Vm,o.reportAllChanges);Vo(()=>{const p=eu();p&&(c.value=Math.max(p.responseStart-oi(),0),c.entries=[p],u(!0),tn(()=>{c=$t("TTFB",0),u=Jt(r,c,Vm,o.reportAllChanges),u(!0)}))})};function ai(r){window.gtag?.("event",r.name,{metric_id:r.id,metric_value:r.value,metric_rating:r.rating,value:r.name==="CLS"?Math.round(r.value*1e3):Math.round(r.value),non_interaction:!0})}function cy(){ey(ai),ny(ai),sy(ai),Nh(ai),ry(ai)}l0.createRoot(document.getElementById("root")).render(l.jsx(v.StrictMode,{children:l.jsx(P1,{})}));cy();
