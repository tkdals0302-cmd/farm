(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))d(u);new MutationObserver(u=>{for(const m of u)if(m.type==="childList")for(const x of m.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&d(x)}).observe(document,{childList:!0,subtree:!0});function o(u){const m={};return u.integrity&&(m.integrity=u.integrity),u.referrerPolicy&&(m.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?m.credentials="include":u.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function d(u){if(u.ep)return;u.ep=!0;const m=o(u);fetch(u.href,m)}})();var gc={exports:{}},Wn={};var im;function Jg(){if(im)return Wn;im=1;var s=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function o(d,u,m){var x=null;if(m!==void 0&&(x=""+m),u.key!==void 0&&(x=""+u.key),"key"in u){m={};for(var g in u)g!=="key"&&(m[g]=u[g])}else m=u;return u=m.ref,{$$typeof:s,type:d,key:x,ref:u!==void 0?u:null,props:m}}return Wn.Fragment=c,Wn.jsx=o,Wn.jsxs=o,Wn}var rm;function $g(){return rm||(rm=1,gc.exports=Jg()),gc.exports}var l=$g(),bc={exports:{}},se={};var sm;function Wg(){if(sm)return se;sm=1;var s=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),x=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),U=Symbol.iterator;function K(k){return k===null||typeof k!="object"?null:(k=U&&k[U]||k["@@iterator"],typeof k=="function"?k:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,q={};function Y(k,E,L){this.props=k,this.context=E,this.refs=q,this.updater=L||S}Y.prototype.isReactComponent={},Y.prototype.setState=function(k,E){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,E,"setState")},Y.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function V(){}V.prototype=Y.prototype;function H(k,E,L){this.props=k,this.context=E,this.refs=q,this.updater=L||S}var X=H.prototype=new V;X.constructor=H,G(X,Y.prototype),X.isPureReactComponent=!0;var le=Array.isArray;function W(){}var P={H:null,A:null,T:null,S:null},ke=Object.prototype.hasOwnProperty;function B(k,E,L){var Z=L.ref;return{$$typeof:s,type:k,key:E,ref:Z!==void 0?Z:null,props:L}}function ae(k,E){return B(k.type,E,k.props)}function ne(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function $(k){var E={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(L){return E[L]})}var ie=/\/+/g;function De(k,E){return typeof k=="object"&&k!==null&&k.key!=null?$(""+k.key):E.toString(36)}function Ne(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(W,W):(k.status="pending",k.then(function(E){k.status==="pending"&&(k.status="fulfilled",k.value=E)},function(E){k.status==="pending"&&(k.status="rejected",k.reason=E)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function C(k,E,L,Z,re){var ce=typeof k;(ce==="undefined"||ce==="boolean")&&(k=null);var xe=!1;if(k===null)xe=!0;else switch(ce){case"bigint":case"string":case"number":xe=!0;break;case"object":switch(k.$$typeof){case s:case c:xe=!0;break;case w:return xe=k._init,C(xe(k._payload),E,L,Z,re)}}if(xe)return re=re(k),xe=Z===""?"."+De(k,0):Z,le(re)?(L="",xe!=null&&(L=xe.replace(ie,"$&/")+"/"),C(re,E,L,"",function(an){return an})):re!=null&&(ne(re)&&(re=ae(re,L+(re.key==null||k&&k.key===re.key?"":(""+re.key).replace(ie,"$&/")+"/")+xe)),E.push(re)),1;xe=0;var We=Z===""?".":Z+":";if(le(k))for(var Me=0;Me<k.length;Me++)Z=k[Me],ce=We+De(Z,Me),xe+=C(Z,E,L,ce,re);else if(Me=K(k),typeof Me=="function")for(k=Me.call(k),Me=0;!(Z=k.next()).done;)Z=Z.value,ce=We+De(Z,Me++),xe+=C(Z,E,L,ce,re);else if(ce==="object"){if(typeof k.then=="function")return C(Ne(k),E,L,Z,re);throw E=String(k),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return xe}function Q(k,E,L){if(k==null)return k;var Z=[],re=0;return C(k,Z,"","",function(ce){return E.call(L,ce,re++)}),Z}function I(k){if(k._status===-1){var E=k._result;E=E(),E.then(function(L){(k._status===0||k._status===-1)&&(k._status=1,k._result=L)},function(L){(k._status===0||k._status===-1)&&(k._status=2,k._result=L)}),k._status===-1&&(k._status=0,k._result=E)}if(k._status===1)return k._result.default;throw k._result}var be=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)},fe={map:Q,forEach:function(k,E,L){Q(k,function(){E.apply(this,arguments)},L)},count:function(k){var E=0;return Q(k,function(){E++}),E},toArray:function(k){return Q(k,function(E){return E})||[]},only:function(k){if(!ne(k))throw Error("React.Children.only expected to receive a single React element child.");return k}};return se.Activity=N,se.Children=fe,se.Component=Y,se.Fragment=o,se.Profiler=u,se.PureComponent=H,se.StrictMode=d,se.Suspense=b,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,se.__COMPILER_RUNTIME={__proto__:null,c:function(k){return P.H.useMemoCache(k)}},se.cache=function(k){return function(){return k.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(k,E,L){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var Z=G({},k.props),re=k.key;if(E!=null)for(ce in E.key!==void 0&&(re=""+E.key),E)!ke.call(E,ce)||ce==="key"||ce==="__self"||ce==="__source"||ce==="ref"&&E.ref===void 0||(Z[ce]=E[ce]);var ce=arguments.length-2;if(ce===1)Z.children=L;else if(1<ce){for(var xe=Array(ce),We=0;We<ce;We++)xe[We]=arguments[We+2];Z.children=xe}return B(k.type,re,Z)},se.createContext=function(k){return k={$$typeof:x,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:m,_context:k},k},se.createElement=function(k,E,L){var Z,re={},ce=null;if(E!=null)for(Z in E.key!==void 0&&(ce=""+E.key),E)ke.call(E,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(re[Z]=E[Z]);var xe=arguments.length-2;if(xe===1)re.children=L;else if(1<xe){for(var We=Array(xe),Me=0;Me<xe;Me++)We[Me]=arguments[Me+2];re.children=We}if(k&&k.defaultProps)for(Z in xe=k.defaultProps,xe)re[Z]===void 0&&(re[Z]=xe[Z]);return B(k,ce,re)},se.createRef=function(){return{current:null}},se.forwardRef=function(k){return{$$typeof:g,render:k}},se.isValidElement=ne,se.lazy=function(k){return{$$typeof:w,_payload:{_status:-1,_result:k},_init:I}},se.memo=function(k,E){return{$$typeof:h,type:k,compare:E===void 0?null:E}},se.startTransition=function(k){var E=P.T,L={};P.T=L;try{var Z=k(),re=P.S;re!==null&&re(L,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(W,be)}catch(ce){be(ce)}finally{E!==null&&L.types!==null&&(E.types=L.types),P.T=E}},se.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},se.use=function(k){return P.H.use(k)},se.useActionState=function(k,E,L){return P.H.useActionState(k,E,L)},se.useCallback=function(k,E){return P.H.useCallback(k,E)},se.useContext=function(k){return P.H.useContext(k)},se.useDebugValue=function(){},se.useDeferredValue=function(k,E){return P.H.useDeferredValue(k,E)},se.useEffect=function(k,E){return P.H.useEffect(k,E)},se.useEffectEvent=function(k){return P.H.useEffectEvent(k)},se.useId=function(){return P.H.useId()},se.useImperativeHandle=function(k,E,L){return P.H.useImperativeHandle(k,E,L)},se.useInsertionEffect=function(k,E){return P.H.useInsertionEffect(k,E)},se.useLayoutEffect=function(k,E){return P.H.useLayoutEffect(k,E)},se.useMemo=function(k,E){return P.H.useMemo(k,E)},se.useOptimistic=function(k,E){return P.H.useOptimistic(k,E)},se.useReducer=function(k,E,L){return P.H.useReducer(k,E,L)},se.useRef=function(k){return P.H.useRef(k)},se.useState=function(k){return P.H.useState(k)},se.useSyncExternalStore=function(k,E,L){return P.H.useSyncExternalStore(k,E,L)},se.useTransition=function(){return P.H.useTransition()},se.version="19.2.4",se}var om;function Kc(){return om||(om=1,bc.exports=Wg()),bc.exports}var v=Kc(),vc={exports:{}},Fn={},yc={exports:{}},jc={};var cm;function Fg(){return cm||(cm=1,(function(s){function c(C,Q){var I=C.length;C.push(Q);e:for(;0<I;){var be=I-1>>>1,fe=C[be];if(0<u(fe,Q))C[be]=Q,C[I]=fe,I=be;else break e}}function o(C){return C.length===0?null:C[0]}function d(C){if(C.length===0)return null;var Q=C[0],I=C.pop();if(I!==Q){C[0]=I;e:for(var be=0,fe=C.length,k=fe>>>1;be<k;){var E=2*(be+1)-1,L=C[E],Z=E+1,re=C[Z];if(0>u(L,I))Z<fe&&0>u(re,L)?(C[be]=re,C[Z]=I,be=Z):(C[be]=L,C[E]=I,be=E);else if(Z<fe&&0>u(re,I))C[be]=re,C[Z]=I,be=Z;else break e}}return Q}function u(C,Q){var I=C.sortIndex-Q.sortIndex;return I!==0?I:C.id-Q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;s.unstable_now=function(){return m.now()}}else{var x=Date,g=x.now();s.unstable_now=function(){return x.now()-g}}var b=[],h=[],w=1,N=null,U=3,K=!1,S=!1,G=!1,q=!1,Y=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function X(C){for(var Q=o(h);Q!==null;){if(Q.callback===null)d(h);else if(Q.startTime<=C)d(h),Q.sortIndex=Q.expirationTime,c(b,Q);else break;Q=o(h)}}function le(C){if(G=!1,X(C),!S)if(o(b)!==null)S=!0,W||(W=!0,$());else{var Q=o(h);Q!==null&&Ne(le,Q.startTime-C)}}var W=!1,P=-1,ke=5,B=-1;function ae(){return q?!0:!(s.unstable_now()-B<ke)}function ne(){if(q=!1,W){var C=s.unstable_now();B=C;var Q=!0;try{e:{S=!1,G&&(G=!1,V(P),P=-1),K=!0;var I=U;try{t:{for(X(C),N=o(b);N!==null&&!(N.expirationTime>C&&ae());){var be=N.callback;if(typeof be=="function"){N.callback=null,U=N.priorityLevel;var fe=be(N.expirationTime<=C);if(C=s.unstable_now(),typeof fe=="function"){N.callback=fe,X(C),Q=!0;break t}N===o(b)&&d(b),X(C)}else d(b);N=o(b)}if(N!==null)Q=!0;else{var k=o(h);k!==null&&Ne(le,k.startTime-C),Q=!1}}break e}finally{N=null,U=I,K=!1}Q=void 0}}finally{Q?$():W=!1}}}var $;if(typeof H=="function")$=function(){H(ne)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,De=ie.port2;ie.port1.onmessage=ne,$=function(){De.postMessage(null)}}else $=function(){Y(ne,0)};function Ne(C,Q){P=Y(function(){C(s.unstable_now())},Q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(C){C.callback=null},s.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ke=0<C?Math.floor(1e3/C):5},s.unstable_getCurrentPriorityLevel=function(){return U},s.unstable_next=function(C){switch(U){case 1:case 2:case 3:var Q=3;break;default:Q=U}var I=U;U=Q;try{return C()}finally{U=I}},s.unstable_requestPaint=function(){q=!0},s.unstable_runWithPriority=function(C,Q){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var I=U;U=C;try{return Q()}finally{U=I}},s.unstable_scheduleCallback=function(C,Q,I){var be=s.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?be+I:be):I=be,C){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=I+fe,C={id:w++,callback:Q,priorityLevel:C,startTime:I,expirationTime:fe,sortIndex:-1},I>be?(C.sortIndex=I,c(h,C),o(b)===null&&C===o(h)&&(G?(V(P),P=-1):G=!0,Ne(le,I-be))):(C.sortIndex=fe,c(b,C),S||K||(S=!0,W||(W=!0,$()))),C},s.unstable_shouldYield=ae,s.unstable_wrapCallback=function(C){var Q=U;return function(){var I=U;U=Q;try{return C.apply(this,arguments)}finally{U=I}}}})(jc)),jc}var dm;function Pg(){return dm||(dm=1,yc.exports=Fg()),yc.exports}var kc={exports:{}},lt={};var pm;function Ig(){if(pm)return lt;pm=1;var s=Kc();function c(b){var h="https://react.dev/errors/"+b;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)h+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+b+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var d={d:{f:o,r:function(){throw Error(c(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},u=Symbol.for("react.portal");function m(b,h,w){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:N==null?null:""+N,children:b,containerInfo:h,implementation:w}}var x=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(b,h){if(b==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,lt.createPortal=function(b,h){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(c(299));return m(b,h,null,w)},lt.flushSync=function(b){var h=x.T,w=d.p;try{if(x.T=null,d.p=2,b)return b()}finally{x.T=h,d.p=w,d.d.f()}},lt.preconnect=function(b,h){typeof b=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,d.d.C(b,h))},lt.prefetchDNS=function(b){typeof b=="string"&&d.d.D(b)},lt.preinit=function(b,h){if(typeof b=="string"&&h&&typeof h.as=="string"){var w=h.as,N=g(w,h.crossOrigin),U=typeof h.integrity=="string"?h.integrity:void 0,K=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;w==="style"?d.d.S(b,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:N,integrity:U,fetchPriority:K}):w==="script"&&d.d.X(b,{crossOrigin:N,integrity:U,fetchPriority:K,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},lt.preinitModule=function(b,h){if(typeof b=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var w=g(h.as,h.crossOrigin);d.d.M(b,{crossOrigin:w,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&d.d.M(b)},lt.preload=function(b,h){if(typeof b=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var w=h.as,N=g(w,h.crossOrigin);d.d.L(b,w,{crossOrigin:N,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},lt.preloadModule=function(b,h){if(typeof b=="string")if(h){var w=g(h.as,h.crossOrigin);d.d.m(b,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:w,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else d.d.m(b)},lt.requestFormReset=function(b){d.d.r(b)},lt.unstable_batchedUpdates=function(b,h){return b(h)},lt.useFormState=function(b,h,w){return x.H.useFormState(b,h,w)},lt.useFormStatus=function(){return x.H.useHostTransitionStatus()},lt.version="19.2.4",lt}var um;function e0(){if(um)return kc.exports;um=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(c){console.error(c)}}return s(),kc.exports=Ig(),kc.exports}var fm;function t0(){if(fm)return Fn;fm=1;var s=Pg(),c=Kc(),o=e0();function d(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function x(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(m(e)!==e)throw Error(d(188))}function h(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(d(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var r=i.alternate;if(r===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===a)return b(i),e;if(r===n)return b(i),t;r=r.sibling}throw Error(d(188))}if(a.return!==n.return)a=i,n=r;else{for(var p=!1,f=i.child;f;){if(f===a){p=!0,a=i,n=r;break}if(f===n){p=!0,n=i,a=r;break}f=f.sibling}if(!p){for(f=r.child;f;){if(f===a){p=!0,a=r,n=i;break}if(f===n){p=!0,n=r,a=i;break}f=f.sibling}if(!p)throw Error(d(189))}}if(a.alternate!==n)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?e:t}function w(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=w(e),t!==null)return t;e=e.sibling}return null}var N=Object.assign,U=Symbol.for("react.element"),K=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),H=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),ke=Symbol.for("react.lazy"),B=Symbol.for("react.activity"),ae=Symbol.for("react.memo_cache_sentinel"),ne=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=ne&&e[ne]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Symbol.for("react.client.reference");function De(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case Y:return"Profiler";case q:return"StrictMode";case le:return"Suspense";case W:return"SuspenseList";case B:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case H:return e.displayName||"Context";case V:return(e._context.displayName||"Context")+".Consumer";case X:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return t=e.displayName||null,t!==null?t:De(e.type)||"Memo";case ke:t=e._payload,e=e._init;try{return De(e(t))}catch{}}return null}var Ne=Array.isArray,C=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},be=[],fe=-1;function k(e){return{current:e}}function E(e){0>fe||(e.current=be[fe],be[fe]=null,fe--)}function L(e,t){fe++,be[fe]=e.current,e.current=t}var Z=k(null),re=k(null),ce=k(null),xe=k(null);function We(e,t){switch(L(ce,t),L(re,e),L(Z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Af(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Af(t),e=Tf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}E(Z),L(Z,e)}function Me(){E(Z),E(re),E(ce)}function an(e){e.memoizedState!==null&&L(xe,e);var t=Z.current,a=Tf(t,e.type);t!==a&&(L(re,e),L(Z,a))}function pi(e){re.current===e&&(E(Z),E(re)),xe.current===e&&(E(xe),Zn._currentValue=I)}var Pr,ld;function Va(e){if(Pr===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Pr=t&&t[1]||"",ld=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Pr+e+ld}var Ir=!1;function es(e,t){if(!e||Ir)return"";Ir=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(M){var R=M}Reflect.construct(e,[],D)}else{try{D.call()}catch(M){R=M}e.call(D.prototype)}}else{try{throw Error()}catch(M){R=M}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(M){if(M&&R&&typeof M.stack=="string")return[M.stack,R.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=n.DetermineComponentFrameRoot(),p=r[0],f=r[1];if(p&&f){var y=p.split(`
`),T=f.split(`
`);for(i=n=0;n<y.length&&!y[n].includes("DetermineComponentFrameRoot");)n++;for(;i<T.length&&!T[i].includes("DetermineComponentFrameRoot");)i++;if(n===y.length||i===T.length)for(n=y.length-1,i=T.length-1;1<=n&&0<=i&&y[n]!==T[i];)i--;for(;1<=n&&0<=i;n--,i--)if(y[n]!==T[i]){if(n!==1||i!==1)do if(n--,i--,0>i||y[n]!==T[i]){var O=`
`+y[n].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=n&&0<=i);break}}}finally{Ir=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Va(a):""}function Sh(e,t){switch(e.tag){case 26:case 27:case 5:return Va(e.type);case 16:return Va("Lazy");case 13:return e.child!==t&&t!==null?Va("Suspense Fallback"):Va("Suspense");case 19:return Va("SuspenseList");case 0:case 15:return es(e.type,!1);case 11:return es(e.type.render,!1);case 1:return es(e.type,!0);case 31:return Va("Activity");default:return""}}function nd(e){try{var t="",a=null;do t+=Sh(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var ts=Object.prototype.hasOwnProperty,as=s.unstable_scheduleCallback,ls=s.unstable_cancelCallback,zh=s.unstable_shouldYield,Eh=s.unstable_requestPaint,mt=s.unstable_now,Ah=s.unstable_getCurrentPriorityLevel,id=s.unstable_ImmediatePriority,rd=s.unstable_UserBlockingPriority,ui=s.unstable_NormalPriority,Th=s.unstable_LowPriority,sd=s.unstable_IdlePriority,Rh=s.log,Ch=s.unstable_setDisableYieldValue,ln=null,ht=null;function ba(e){if(typeof Rh=="function"&&Ch(e),ht&&typeof ht.setStrictMode=="function")try{ht.setStrictMode(ln,e)}catch{}}var xt=Math.clz32?Math.clz32:_h,Mh=Math.log,Oh=Math.LN2;function _h(e){return e>>>=0,e===0?32:31-(Mh(e)/Oh|0)|0}var fi=256,mi=262144,hi=4194304;function Ka(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xi(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,r=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var f=n&134217727;return f!==0?(n=f&~r,n!==0?i=Ka(n):(p&=f,p!==0?i=Ka(p):a||(a=f&~e,a!==0&&(i=Ka(a))))):(f=n&~r,f!==0?i=Ka(f):p!==0?i=Ka(p):a||(a=n&~e,a!==0&&(i=Ka(a)))),i===0?0:t!==0&&t!==i&&(t&r)===0&&(r=i&-i,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:i}function nn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Dh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function od(){var e=hi;return hi<<=1,(hi&62914560)===0&&(hi=4194304),e}function ns(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function rn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Bh(e,t,a,n,i,r){var p=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var f=e.entanglements,y=e.expirationTimes,T=e.hiddenUpdates;for(a=p&~a;0<a;){var O=31-xt(a),D=1<<O;f[O]=0,y[O]=-1;var R=T[O];if(R!==null)for(T[O]=null,O=0;O<R.length;O++){var M=R[O];M!==null&&(M.lane&=-536870913)}a&=~D}n!==0&&cd(e,n,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(p&~t))}function cd(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-xt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function dd(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-xt(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function pd(e,t){var a=t&-t;return a=(a&42)!==0?1:is(a),(a&(e.suspendedLanes|t))!==0?0:a}function is(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function rs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ud(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:Pf(e.type))}function fd(e,t){var a=Q.p;try{return Q.p=e,t()}finally{Q.p=a}}var va=Math.random().toString(36).slice(2),Fe="__reactFiber$"+va,st="__reactProps$"+va,ul="__reactContainer$"+va,ss="__reactEvents$"+va,Uh="__reactListeners$"+va,Hh="__reactHandles$"+va,md="__reactResources$"+va,sn="__reactMarker$"+va;function os(e){delete e[Fe],delete e[st],delete e[ss],delete e[Uh],delete e[Hh]}function fl(e){var t=e[Fe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[ul]||a[Fe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Bf(e);e!==null;){if(a=e[Fe])return a;e=Bf(e)}return t}e=a,a=e.parentNode}return null}function ml(e){if(e=e[Fe]||e[ul]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function on(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(d(33))}function hl(e){var t=e[md];return t||(t=e[md]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[sn]=!0}var hd=new Set,xd={};function Qa(e,t){xl(e,t),xl(e+"Capture",t)}function xl(e,t){for(xd[e]=t,e=0;e<t.length;e++)hd.add(t[e])}var Lh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),gd={},bd={};function Yh(e){return ts.call(bd,e)?!0:ts.call(gd,e)?!1:Lh.test(e)?bd[e]=!0:(gd[e]=!0,!1)}function gi(e,t,a){if(Yh(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function bi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function It(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function wt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qh(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(p){a=""+p,r.call(this,p)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function cs(e){if(!e._valueTracker){var t=vd(e)?"checked":"value";e._valueTracker=qh(e,t,""+e[t])}}function yd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=vd(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function vi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Gh=/[\n"\\]/g;function St(e){return e.replace(Gh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ds(e,t,a,n,i,r,p,f){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),t!=null?p==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+wt(t)):e.value!==""+wt(t)&&(e.value=""+wt(t)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),t!=null?ps(e,p,wt(t)):a!=null?ps(e,p,wt(a)):n!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+wt(f):e.removeAttribute("name")}function jd(e,t,a,n,i,r,p,f){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){cs(e);return}a=a!=null?""+wt(a):"",t=t!=null?""+wt(t):a,f||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=f?e.checked:!!n,e.defaultChecked=!!n,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),cs(e)}function ps(e,t,a){t==="number"&&vi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function gl(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+wt(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function kd(e,t,a){if(t!=null&&(t=""+wt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+wt(a):""}function Nd(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(d(92));if(Ne(n)){if(1<n.length)throw Error(d(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=wt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),cs(e)}function bl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Vh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wd(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Vh.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Sd(e,t,a){if(t!=null&&typeof t!="object")throw Error(d(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&wd(e,i,n)}else for(var r in t)t.hasOwnProperty(r)&&wd(e,r,t[r])}function us(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yi(e){return Qh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ea(){}var fs=null;function ms(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vl=null,yl=null;function zd(e){var t=ml(e);if(t&&(e=t.stateNode)){var a=e[st]||null;e:switch(e=t.stateNode,t.type){case"input":if(ds(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+St(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[st]||null;if(!i)throw Error(d(90));ds(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&yd(n)}break e;case"textarea":kd(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&gl(e,!!a.multiple,t,!1)}}}var hs=!1;function Ed(e,t,a){if(hs)return e(t,a);hs=!0;try{var n=e(t);return n}finally{if(hs=!1,(vl!==null||yl!==null)&&(sr(),vl&&(t=vl,e=yl,yl=vl=null,zd(t),e)))for(t=0;t<e.length;t++)zd(e[t])}}function cn(e,t){var a=e.stateNode;if(a===null)return null;var n=a[st]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(d(231,t,typeof a));return a}var ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xs=!1;if(ta)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){xs=!0}}),window.addEventListener("test",dn,dn),window.removeEventListener("test",dn,dn)}catch{xs=!1}var ya=null,gs=null,ji=null;function Ad(){if(ji)return ji;var e,t=gs,a=t.length,n,i="value"in ya?ya.value:ya.textContent,r=i.length;for(e=0;e<a&&t[e]===i[e];e++);var p=a-e;for(n=1;n<=p&&t[a-n]===i[r-n];n++);return ji=i.slice(e,1<n?1-n:void 0)}function ki(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ni(){return!0}function Td(){return!1}function ot(e){function t(a,n,i,r,p){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=r,this.target=p,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(a=e[f],this[f]=a?a(r):r[f]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Ni:Td,this.isPropagationStopped=Td,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ni)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ni)},persist:function(){},isPersistent:Ni}),t}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wi=ot(Za),pn=N({},Za,{view:0,detail:0}),Zh=ot(pn),bs,vs,un,Si=N({},pn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:js,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==un&&(un&&e.type==="mousemove"?(bs=e.screenX-un.screenX,vs=e.screenY-un.screenY):vs=bs=0,un=e),bs)},movementY:function(e){return"movementY"in e?e.movementY:vs}}),Rd=ot(Si),Xh=N({},Si,{dataTransfer:0}),Jh=ot(Xh),$h=N({},pn,{relatedTarget:0}),ys=ot($h),Wh=N({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),Fh=ot(Wh),Ph=N({},Za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ih=ot(Ph),ex=N({},Za,{data:0}),Cd=ot(ex),tx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ax={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lx[e])?!!t[e]:!1}function js(){return nx}var ix=N({},pn,{key:function(e){if(e.key){var t=tx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ki(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ax[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:js,charCode:function(e){return e.type==="keypress"?ki(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ki(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rx=ot(ix),sx=N({},Si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Md=ot(sx),ox=N({},pn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:js}),cx=ot(ox),dx=N({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),px=ot(dx),ux=N({},Si,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fx=ot(ux),mx=N({},Za,{newState:0,oldState:0}),hx=ot(mx),xx=[9,13,27,32],ks=ta&&"CompositionEvent"in window,fn=null;ta&&"documentMode"in document&&(fn=document.documentMode);var gx=ta&&"TextEvent"in window&&!fn,Od=ta&&(!ks||fn&&8<fn&&11>=fn),_d=" ",Dd=!1;function Bd(e,t){switch(e){case"keyup":return xx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ud(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jl=!1;function bx(e,t){switch(e){case"compositionend":return Ud(t);case"keypress":return t.which!==32?null:(Dd=!0,_d);case"textInput":return e=t.data,e===_d&&Dd?null:e;default:return null}}function vx(e,t){if(jl)return e==="compositionend"||!ks&&Bd(e,t)?(e=Ad(),ji=gs=ya=null,jl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Od&&t.locale!=="ko"?null:t.data;default:return null}}var yx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yx[e.type]:t==="textarea"}function Ld(e,t,a,n){vl?yl?yl.push(n):yl=[n]:vl=n,t=mr(t,"onChange"),0<t.length&&(a=new wi("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var mn=null,hn=null;function jx(e){kf(e,0)}function zi(e){var t=on(e);if(yd(t))return e}function Yd(e,t){if(e==="change")return t}var qd=!1;if(ta){var Ns;if(ta){var ws="oninput"in document;if(!ws){var Gd=document.createElement("div");Gd.setAttribute("oninput","return;"),ws=typeof Gd.oninput=="function"}Ns=ws}else Ns=!1;qd=Ns&&(!document.documentMode||9<document.documentMode)}function Vd(){mn&&(mn.detachEvent("onpropertychange",Kd),hn=mn=null)}function Kd(e){if(e.propertyName==="value"&&zi(hn)){var t=[];Ld(t,hn,e,ms(e)),Ed(jx,t)}}function kx(e,t,a){e==="focusin"?(Vd(),mn=t,hn=a,mn.attachEvent("onpropertychange",Kd)):e==="focusout"&&Vd()}function Nx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zi(hn)}function wx(e,t){if(e==="click")return zi(t)}function Sx(e,t){if(e==="input"||e==="change")return zi(t)}function zx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:zx;function xn(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!ts.call(t,i)||!gt(e[i],t[i]))return!1}return!0}function Qd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zd(e,t){var a=Qd(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Qd(a)}}function Xd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Jd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=vi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=vi(e.document)}return t}function Ss(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ex=ta&&"documentMode"in document&&11>=document.documentMode,kl=null,zs=null,gn=null,Es=!1;function $d(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Es||kl==null||kl!==vi(n)||(n=kl,"selectionStart"in n&&Ss(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),gn&&xn(gn,n)||(gn=n,n=mr(zs,"onSelect"),0<n.length&&(t=new wi("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=kl)))}function Xa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Nl={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionrun:Xa("Transition","TransitionRun"),transitionstart:Xa("Transition","TransitionStart"),transitioncancel:Xa("Transition","TransitionCancel"),transitionend:Xa("Transition","TransitionEnd")},As={},Wd={};ta&&(Wd=document.createElement("div").style,"AnimationEvent"in window||(delete Nl.animationend.animation,delete Nl.animationiteration.animation,delete Nl.animationstart.animation),"TransitionEvent"in window||delete Nl.transitionend.transition);function Ja(e){if(As[e])return As[e];if(!Nl[e])return e;var t=Nl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Wd)return As[e]=t[a];return e}var Fd=Ja("animationend"),Pd=Ja("animationiteration"),Id=Ja("animationstart"),Ax=Ja("transitionrun"),Tx=Ja("transitionstart"),Rx=Ja("transitioncancel"),ep=Ja("transitionend"),tp=new Map,Ts="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ts.push("scrollEnd");function Dt(e,t){tp.set(e,t),Qa(t,[e])}var Ei=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},zt=[],wl=0,Rs=0;function Ai(){for(var e=wl,t=Rs=wl=0;t<e;){var a=zt[t];zt[t++]=null;var n=zt[t];zt[t++]=null;var i=zt[t];zt[t++]=null;var r=zt[t];if(zt[t++]=null,n!==null&&i!==null){var p=n.pending;p===null?i.next=i:(i.next=p.next,p.next=i),n.pending=i}r!==0&&ap(a,i,r)}}function Ti(e,t,a,n){zt[wl++]=e,zt[wl++]=t,zt[wl++]=a,zt[wl++]=n,Rs|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Cs(e,t,a,n){return Ti(e,t,a,n),Ri(e)}function $a(e,t){return Ti(e,null,null,t),Ri(e)}function ap(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,r=e.return;r!==null;)r.childLanes|=a,n=r.alternate,n!==null&&(n.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-xt(a),e=r.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),r):null}function Ri(e){if(50<Ln)throw Ln=0,qo=null,Error(d(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Sl={};function Cx(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(e,t,a,n){return new Cx(e,t,a,n)}function Ms(e){return e=e.prototype,!(!e||!e.isReactComponent)}function aa(e,t){var a=e.alternate;return a===null?(a=bt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function lp(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ci(e,t,a,n,i,r){var p=0;if(n=e,typeof e=="function")Ms(e)&&(p=1);else if(typeof e=="string")p=Bg(e,a,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case B:return e=bt(31,a,t,i),e.elementType=B,e.lanes=r,e;case G:return Wa(a.children,i,r,t);case q:p=8,i|=24;break;case Y:return e=bt(12,a,t,i|2),e.elementType=Y,e.lanes=r,e;case le:return e=bt(13,a,t,i),e.elementType=le,e.lanes=r,e;case W:return e=bt(19,a,t,i),e.elementType=W,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:p=10;break e;case V:p=9;break e;case X:p=11;break e;case P:p=14;break e;case ke:p=16,n=null;break e}p=29,a=Error(d(130,e===null?"null":typeof e,"")),n=null}return t=bt(p,a,t,i),t.elementType=e,t.type=n,t.lanes=r,t}function Wa(e,t,a,n){return e=bt(7,e,n,t),e.lanes=a,e}function Os(e,t,a){return e=bt(6,e,null,t),e.lanes=a,e}function np(e){var t=bt(18,null,null,0);return t.stateNode=e,t}function _s(e,t,a){return t=bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ip=new WeakMap;function Et(e,t){if(typeof e=="object"&&e!==null){var a=ip.get(e);return a!==void 0?a:(t={value:e,source:t,stack:nd(t)},ip.set(e,t),t)}return{value:e,source:t,stack:nd(t)}}var zl=[],El=0,Mi=null,bn=0,At=[],Tt=0,ja=null,Gt=1,Vt="";function la(e,t){zl[El++]=bn,zl[El++]=Mi,Mi=e,bn=t}function rp(e,t,a){At[Tt++]=Gt,At[Tt++]=Vt,At[Tt++]=ja,ja=e;var n=Gt;e=Vt;var i=32-xt(n)-1;n&=~(1<<i),a+=1;var r=32-xt(t)+i;if(30<r){var p=i-i%5;r=(n&(1<<p)-1).toString(32),n>>=p,i-=p,Gt=1<<32-xt(t)+i|a<<i|n,Vt=r+e}else Gt=1<<r|a<<i|n,Vt=e}function Ds(e){e.return!==null&&(la(e,1),rp(e,1,0))}function Bs(e){for(;e===Mi;)Mi=zl[--El],zl[El]=null,bn=zl[--El],zl[El]=null;for(;e===ja;)ja=At[--Tt],At[Tt]=null,Vt=At[--Tt],At[Tt]=null,Gt=At[--Tt],At[Tt]=null}function sp(e,t){At[Tt++]=Gt,At[Tt++]=Vt,At[Tt++]=ja,Gt=t.id,Vt=t.overflow,ja=e}var Pe=null,Oe=null,ge=!1,ka=null,Rt=!1,Us=Error(d(519));function Na(e){var t=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw vn(Et(t,e)),Us}function op(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[Fe]=e,t[st]=n,a){case"dialog":ue("cancel",t),ue("close",t);break;case"iframe":case"object":case"embed":ue("load",t);break;case"video":case"audio":for(a=0;a<qn.length;a++)ue(qn[a],t);break;case"source":ue("error",t);break;case"img":case"image":case"link":ue("error",t),ue("load",t);break;case"details":ue("toggle",t);break;case"input":ue("invalid",t),jd(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":ue("invalid",t);break;case"textarea":ue("invalid",t),Nd(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||zf(t.textContent,a)?(n.popover!=null&&(ue("beforetoggle",t),ue("toggle",t)),n.onScroll!=null&&ue("scroll",t),n.onScrollEnd!=null&&ue("scrollend",t),n.onClick!=null&&(t.onclick=ea),t=!0):t=!1,t||Na(e,!0)}function cp(e){for(Pe=e.return;Pe;)switch(Pe.tag){case 5:case 31:case 13:Rt=!1;return;case 27:case 3:Rt=!0;return;default:Pe=Pe.return}}function Al(e){if(e!==Pe)return!1;if(!ge)return cp(e),ge=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ac(e.type,e.memoizedProps)),a=!a),a&&Oe&&Na(e),cp(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Oe=Df(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Oe=Df(e)}else t===27?(t=Oe,Ua(e.type)?(e=sc,sc=null,Oe=e):Oe=t):Oe=Pe?Mt(e.stateNode.nextSibling):null;return!0}function Fa(){Oe=Pe=null,ge=!1}function Hs(){var e=ka;return e!==null&&(ut===null?ut=e:ut.push.apply(ut,e),ka=null),e}function vn(e){ka===null?ka=[e]:ka.push(e)}var Ls=k(null),Pa=null,na=null;function wa(e,t,a){L(Ls,t._currentValue),t._currentValue=a}function ia(e){e._currentValue=Ls.current,E(Ls)}function Ys(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function qs(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var p=i.child;r=r.firstContext;e:for(;r!==null;){var f=r;r=i;for(var y=0;y<t.length;y++)if(f.context===t[y]){r.lanes|=a,f=r.alternate,f!==null&&(f.lanes|=a),Ys(r.return,a,e),n||(p=null);break e}r=f.next}}else if(i.tag===18){if(p=i.return,p===null)throw Error(d(341));p.lanes|=a,r=p.alternate,r!==null&&(r.lanes|=a),Ys(p,a,e),p=null}else p=i.child;if(p!==null)p.return=i;else for(p=i;p!==null;){if(p===e){p=null;break}if(i=p.sibling,i!==null){i.return=p.return,p=i;break}p=p.return}i=p}}function Tl(e,t,a,n){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var p=i.alternate;if(p===null)throw Error(d(387));if(p=p.memoizedProps,p!==null){var f=i.type;gt(i.pendingProps.value,p.value)||(e!==null?e.push(f):e=[f])}}else if(i===xe.current){if(p=i.alternate,p===null)throw Error(d(387));p.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Zn):e=[Zn])}i=i.return}e!==null&&qs(t,e,a,n),t.flags|=262144}function Oi(e){for(e=e.firstContext;e!==null;){if(!gt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ia(e){Pa=e,na=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ie(e){return dp(Pa,e)}function _i(e,t){return Pa===null&&Ia(e),dp(e,t)}function dp(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},na===null){if(e===null)throw Error(d(308));na=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else na=na.next=t;return a}var Mx=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Ox=s.unstable_scheduleCallback,_x=s.unstable_NormalPriority,Ge={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gs(){return{controller:new Mx,data:new Map,refCount:0}}function yn(e){e.refCount--,e.refCount===0&&Ox(_x,function(){e.controller.abort()})}var jn=null,Vs=0,Rl=0,Cl=null;function Dx(e,t){if(jn===null){var a=jn=[];Vs=0,Rl=Xo(),Cl={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Vs++,t.then(pp,pp),t}function pp(){if(--Vs===0&&jn!==null){Cl!==null&&(Cl.status="fulfilled");var e=jn;jn=null,Rl=0,Cl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Bx(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var up=C.S;C.S=function(e,t){$u=mt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Dx(e,t),up!==null&&up(e,t)};var el=k(null);function Ks(){var e=el.current;return e!==null?e:Ce.pooledCache}function Di(e,t){t===null?L(el,el.current):L(el,t.pool)}function fp(){var e=Ks();return e===null?null:{parent:Ge._currentValue,pool:e}}var Ml=Error(d(460)),Qs=Error(d(474)),Bi=Error(d(542)),Ui={then:function(){}};function mp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function hp(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ea,ea),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,gp(e),e;default:if(typeof t.status=="string")t.then(ea,ea);else{if(e=Ce,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,gp(e),e}throw al=t,Ml}}function tl(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(al=a,Ml):a}}var al=null;function xp(){if(al===null)throw Error(d(459));var e=al;return al=null,e}function gp(e){if(e===Ml||e===Bi)throw Error(d(483))}var Ol=null,kn=0;function Hi(e){var t=kn;return kn+=1,Ol===null&&(Ol=[]),hp(Ol,e,t)}function Nn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Li(e,t){throw t.$$typeof===U?Error(d(525)):(e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function bp(e){function t(z,j){if(e){var A=z.deletions;A===null?(z.deletions=[j],z.flags|=16):A.push(j)}}function a(z,j){if(!e)return null;for(;j!==null;)t(z,j),j=j.sibling;return null}function n(z){for(var j=new Map;z!==null;)z.key!==null?j.set(z.key,z):j.set(z.index,z),z=z.sibling;return j}function i(z,j){return z=aa(z,j),z.index=0,z.sibling=null,z}function r(z,j,A){return z.index=A,e?(A=z.alternate,A!==null?(A=A.index,A<j?(z.flags|=67108866,j):A):(z.flags|=67108866,j)):(z.flags|=1048576,j)}function p(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function f(z,j,A,_){return j===null||j.tag!==6?(j=Os(A,z.mode,_),j.return=z,j):(j=i(j,A),j.return=z,j)}function y(z,j,A,_){var ee=A.type;return ee===G?O(z,j,A.props.children,_,A.key):j!==null&&(j.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===ke&&tl(ee)===j.type)?(j=i(j,A.props),Nn(j,A),j.return=z,j):(j=Ci(A.type,A.key,A.props,null,z.mode,_),Nn(j,A),j.return=z,j)}function T(z,j,A,_){return j===null||j.tag!==4||j.stateNode.containerInfo!==A.containerInfo||j.stateNode.implementation!==A.implementation?(j=_s(A,z.mode,_),j.return=z,j):(j=i(j,A.children||[]),j.return=z,j)}function O(z,j,A,_,ee){return j===null||j.tag!==7?(j=Wa(A,z.mode,_,ee),j.return=z,j):(j=i(j,A),j.return=z,j)}function D(z,j,A){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Os(""+j,z.mode,A),j.return=z,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case K:return A=Ci(j.type,j.key,j.props,null,z.mode,A),Nn(A,j),A.return=z,A;case S:return j=_s(j,z.mode,A),j.return=z,j;case ke:return j=tl(j),D(z,j,A)}if(Ne(j)||$(j))return j=Wa(j,z.mode,A,null),j.return=z,j;if(typeof j.then=="function")return D(z,Hi(j),A);if(j.$$typeof===H)return D(z,_i(z,j),A);Li(z,j)}return null}function R(z,j,A,_){var ee=j!==null?j.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return ee!==null?null:f(z,j,""+A,_);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case K:return A.key===ee?y(z,j,A,_):null;case S:return A.key===ee?T(z,j,A,_):null;case ke:return A=tl(A),R(z,j,A,_)}if(Ne(A)||$(A))return ee!==null?null:O(z,j,A,_,null);if(typeof A.then=="function")return R(z,j,Hi(A),_);if(A.$$typeof===H)return R(z,j,_i(z,A),_);Li(z,A)}return null}function M(z,j,A,_,ee){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return z=z.get(A)||null,f(j,z,""+_,ee);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case K:return z=z.get(_.key===null?A:_.key)||null,y(j,z,_,ee);case S:return z=z.get(_.key===null?A:_.key)||null,T(j,z,_,ee);case ke:return _=tl(_),M(z,j,A,_,ee)}if(Ne(_)||$(_))return z=z.get(A)||null,O(j,z,_,ee,null);if(typeof _.then=="function")return M(z,j,A,Hi(_),ee);if(_.$$typeof===H)return M(z,j,A,_i(j,_),ee);Li(j,_)}return null}function J(z,j,A,_){for(var ee=null,ye=null,F=j,de=j=0,he=null;F!==null&&de<A.length;de++){F.index>de?(he=F,F=null):he=F.sibling;var je=R(z,F,A[de],_);if(je===null){F===null&&(F=he);break}e&&F&&je.alternate===null&&t(z,F),j=r(je,j,de),ye===null?ee=je:ye.sibling=je,ye=je,F=he}if(de===A.length)return a(z,F),ge&&la(z,de),ee;if(F===null){for(;de<A.length;de++)F=D(z,A[de],_),F!==null&&(j=r(F,j,de),ye===null?ee=F:ye.sibling=F,ye=F);return ge&&la(z,de),ee}for(F=n(F);de<A.length;de++)he=M(F,z,de,A[de],_),he!==null&&(e&&he.alternate!==null&&F.delete(he.key===null?de:he.key),j=r(he,j,de),ye===null?ee=he:ye.sibling=he,ye=he);return e&&F.forEach(function(Ga){return t(z,Ga)}),ge&&la(z,de),ee}function te(z,j,A,_){if(A==null)throw Error(d(151));for(var ee=null,ye=null,F=j,de=j=0,he=null,je=A.next();F!==null&&!je.done;de++,je=A.next()){F.index>de?(he=F,F=null):he=F.sibling;var Ga=R(z,F,je.value,_);if(Ga===null){F===null&&(F=he);break}e&&F&&Ga.alternate===null&&t(z,F),j=r(Ga,j,de),ye===null?ee=Ga:ye.sibling=Ga,ye=Ga,F=he}if(je.done)return a(z,F),ge&&la(z,de),ee;if(F===null){for(;!je.done;de++,je=A.next())je=D(z,je.value,_),je!==null&&(j=r(je,j,de),ye===null?ee=je:ye.sibling=je,ye=je);return ge&&la(z,de),ee}for(F=n(F);!je.done;de++,je=A.next())je=M(F,z,de,je.value,_),je!==null&&(e&&je.alternate!==null&&F.delete(je.key===null?de:je.key),j=r(je,j,de),ye===null?ee=je:ye.sibling=je,ye=je);return e&&F.forEach(function(Xg){return t(z,Xg)}),ge&&la(z,de),ee}function Re(z,j,A,_){if(typeof A=="object"&&A!==null&&A.type===G&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case K:e:{for(var ee=A.key;j!==null;){if(j.key===ee){if(ee=A.type,ee===G){if(j.tag===7){a(z,j.sibling),_=i(j,A.props.children),_.return=z,z=_;break e}}else if(j.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===ke&&tl(ee)===j.type){a(z,j.sibling),_=i(j,A.props),Nn(_,A),_.return=z,z=_;break e}a(z,j);break}else t(z,j);j=j.sibling}A.type===G?(_=Wa(A.props.children,z.mode,_,A.key),_.return=z,z=_):(_=Ci(A.type,A.key,A.props,null,z.mode,_),Nn(_,A),_.return=z,z=_)}return p(z);case S:e:{for(ee=A.key;j!==null;){if(j.key===ee)if(j.tag===4&&j.stateNode.containerInfo===A.containerInfo&&j.stateNode.implementation===A.implementation){a(z,j.sibling),_=i(j,A.children||[]),_.return=z,z=_;break e}else{a(z,j);break}else t(z,j);j=j.sibling}_=_s(A,z.mode,_),_.return=z,z=_}return p(z);case ke:return A=tl(A),Re(z,j,A,_)}if(Ne(A))return J(z,j,A,_);if($(A)){if(ee=$(A),typeof ee!="function")throw Error(d(150));return A=ee.call(A),te(z,j,A,_)}if(typeof A.then=="function")return Re(z,j,Hi(A),_);if(A.$$typeof===H)return Re(z,j,_i(z,A),_);Li(z,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,j!==null&&j.tag===6?(a(z,j.sibling),_=i(j,A),_.return=z,z=_):(a(z,j),_=Os(A,z.mode,_),_.return=z,z=_),p(z)):a(z,j)}return function(z,j,A,_){try{kn=0;var ee=Re(z,j,A,_);return Ol=null,ee}catch(F){if(F===Ml||F===Bi)throw F;var ye=bt(29,F,null,z.mode);return ye.lanes=_,ye.return=z,ye}}}var ll=bp(!0),vp=bp(!1),Sa=!1;function Zs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ea(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(we&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=Ri(e),ap(e,null,a),t}return Ti(e,n,t,a),Ri(e)}function wn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,dd(e,a)}}function Js(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var p={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?i=r=p:r=r.next=p,a=a.next}while(a!==null);r===null?i=r=t:r=r.next=t}else i=r=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var $s=!1;function Sn(){if($s){var e=Cl;if(e!==null)throw e}}function zn(e,t,a,n){$s=!1;var i=e.updateQueue;Sa=!1;var r=i.firstBaseUpdate,p=i.lastBaseUpdate,f=i.shared.pending;if(f!==null){i.shared.pending=null;var y=f,T=y.next;y.next=null,p===null?r=T:p.next=T,p=y;var O=e.alternate;O!==null&&(O=O.updateQueue,f=O.lastBaseUpdate,f!==p&&(f===null?O.firstBaseUpdate=T:f.next=T,O.lastBaseUpdate=y))}if(r!==null){var D=i.baseState;p=0,O=T=y=null,f=r;do{var R=f.lane&-536870913,M=R!==f.lane;if(M?(me&R)===R:(n&R)===R){R!==0&&R===Rl&&($s=!0),O!==null&&(O=O.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var J=e,te=f;R=t;var Re=a;switch(te.tag){case 1:if(J=te.payload,typeof J=="function"){D=J.call(Re,D,R);break e}D=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=te.payload,R=typeof J=="function"?J.call(Re,D,R):J,R==null)break e;D=N({},D,R);break e;case 2:Sa=!0}}R=f.callback,R!==null&&(e.flags|=64,M&&(e.flags|=8192),M=i.callbacks,M===null?i.callbacks=[R]:M.push(R))}else M={lane:R,tag:f.tag,payload:f.payload,callback:f.callback,next:null},O===null?(T=O=M,y=D):O=O.next=M,p|=R;if(f=f.next,f===null){if(f=i.shared.pending,f===null)break;M=f,f=M.next,M.next=null,i.lastBaseUpdate=M,i.shared.pending=null}}while(!0);O===null&&(y=D),i.baseState=y,i.firstBaseUpdate=T,i.lastBaseUpdate=O,r===null&&(i.shared.lanes=0),Ma|=p,e.lanes=p,e.memoizedState=D}}function yp(e,t){if(typeof e!="function")throw Error(d(191,e));e.call(t)}function jp(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)yp(a[e],t)}var _l=k(null),Yi=k(0);function kp(e,t){e=ma,L(Yi,e),L(_l,t),ma=e|t.baseLanes}function Ws(){L(Yi,ma),L(_l,_l.current)}function Fs(){ma=Yi.current,E(_l),E(Yi)}var vt=k(null),Ct=null;function Aa(e){var t=e.alternate;L(Le,Le.current&1),L(vt,e),Ct===null&&(t===null||_l.current!==null||t.memoizedState!==null)&&(Ct=e)}function Ps(e){L(Le,Le.current),L(vt,e),Ct===null&&(Ct=e)}function Np(e){e.tag===22?(L(Le,Le.current),L(vt,e),Ct===null&&(Ct=e)):Ta()}function Ta(){L(Le,Le.current),L(vt,vt.current)}function yt(e){E(vt),Ct===e&&(Ct=null),E(Le)}var Le=k(0);function qi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ic(a)||rc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ra=0,oe=null,Ae=null,Ve=null,Gi=!1,Dl=!1,nl=!1,Vi=0,En=0,Bl=null,Ux=0;function Ue(){throw Error(d(321))}function Is(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!gt(e[a],t[a]))return!1;return!0}function eo(e,t,a,n,i,r){return ra=r,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,C.H=e===null||e.memoizedState===null?ru:xo,nl=!1,r=a(n,i),nl=!1,Dl&&(r=Sp(t,a,n,i)),wp(e),r}function wp(e){C.H=Rn;var t=Ae!==null&&Ae.next!==null;if(ra=0,Ve=Ae=oe=null,Gi=!1,En=0,Bl=null,t)throw Error(d(300));e===null||Ke||(e=e.dependencies,e!==null&&Oi(e)&&(Ke=!0))}function Sp(e,t,a,n){oe=e;var i=0;do{if(Dl&&(Bl=null),En=0,Dl=!1,25<=i)throw Error(d(301));if(i+=1,Ve=Ae=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}C.H=su,r=t(a,n)}while(Dl);return r}function Hx(){var e=C.H,t=e.useState()[0];return t=typeof t.then=="function"?An(t):t,e=e.useState()[0],(Ae!==null?Ae.memoizedState:null)!==e&&(oe.flags|=1024),t}function to(){var e=Vi!==0;return Vi=0,e}function ao(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function lo(e){if(Gi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Gi=!1}ra=0,Ve=Ae=oe=null,Dl=!1,En=Vi=0,Bl=null}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?oe.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function Ye(){if(Ae===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Ve===null?oe.memoizedState:Ve.next;if(t!==null)Ve=t,Ae=e;else{if(e===null)throw oe.alternate===null?Error(d(467)):Error(d(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Ve===null?oe.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function Ki(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function An(e){var t=En;return En+=1,Bl===null&&(Bl=[]),e=hp(Bl,e,t),t=oe,(Ve===null?t.memoizedState:Ve.next)===null&&(t=t.alternate,C.H=t===null||t.memoizedState===null?ru:xo),e}function Qi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return An(e);if(e.$$typeof===H)return Ie(e)}throw Error(d(438,String(e)))}function no(e){var t=null,a=oe.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=oe.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ki(),oe.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=ae;return t.index++,a}function sa(e,t){return typeof t=="function"?t(e):t}function Zi(e){var t=Ye();return io(t,Ae,e)}function io(e,t,a){var n=e.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=a;var i=e.baseQueue,r=n.pending;if(r!==null){if(i!==null){var p=i.next;i.next=r.next,r.next=p}t.baseQueue=i=r,n.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var f=p=null,y=null,T=t,O=!1;do{var D=T.lane&-536870913;if(D!==T.lane?(me&D)===D:(ra&D)===D){var R=T.revertLane;if(R===0)y!==null&&(y=y.next={lane:0,revertLane:0,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),D===Rl&&(O=!0);else if((ra&R)===R){T=T.next,R===Rl&&(O=!0);continue}else D={lane:0,revertLane:T.revertLane,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},y===null?(f=y=D,p=r):y=y.next=D,oe.lanes|=R,Ma|=R;D=T.action,nl&&a(r,D),r=T.hasEagerState?T.eagerState:a(r,D)}else R={lane:D,revertLane:T.revertLane,gesture:T.gesture,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},y===null?(f=y=R,p=r):y=y.next=R,oe.lanes|=D,Ma|=D;T=T.next}while(T!==null&&T!==t);if(y===null?p=r:y.next=f,!gt(r,e.memoizedState)&&(Ke=!0,O&&(a=Cl,a!==null)))throw a;e.memoizedState=r,e.baseState=p,e.baseQueue=y,n.lastRenderedState=r}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function ro(e){var t=Ye(),a=t.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,r=t.memoizedState;if(i!==null){a.pending=null;var p=i=i.next;do r=e(r,p.action),p=p.next;while(p!==i);gt(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,n]}function zp(e,t,a){var n=oe,i=Ye(),r=ge;if(r){if(a===void 0)throw Error(d(407));a=a()}else a=t();var p=!gt((Ae||i).memoizedState,a);if(p&&(i.memoizedState=a,Ke=!0),i=i.queue,co(Tp.bind(null,n,i,e),[e]),i.getSnapshot!==t||p||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,Ul(9,{destroy:void 0},Ap.bind(null,n,i,a,t),null),Ce===null)throw Error(d(349));r||(ra&127)!==0||Ep(n,t,a)}return a}function Ep(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=oe.updateQueue,t===null?(t=Ki(),oe.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Ap(e,t,a,n){t.value=a,t.getSnapshot=n,Rp(t)&&Cp(e)}function Tp(e,t,a){return a(function(){Rp(t)&&Cp(e)})}function Rp(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!gt(e,a)}catch{return!0}}function Cp(e){var t=$a(e,2);t!==null&&ft(t,e,2)}function so(e){var t=nt();if(typeof e=="function"){var a=e;if(e=a(),nl){ba(!0);try{a()}finally{ba(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:e},t}function Mp(e,t,a,n){return e.baseState=a,io(e,Ae,typeof n=="function"?n:sa)}function Lx(e,t,a,n,i){if($i(e))throw Error(d(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){r.listeners.push(p)}};C.T!==null?a(!0):r.isTransition=!1,n(r),a=t.pending,a===null?(r.next=t.pending=r,Op(t,r)):(r.next=a.next,t.pending=a.next=r)}}function Op(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var r=C.T,p={};C.T=p;try{var f=a(i,n),y=C.S;y!==null&&y(p,f),_p(e,t,f)}catch(T){oo(e,t,T)}finally{r!==null&&p.types!==null&&(r.types=p.types),C.T=r}}else try{r=a(i,n),_p(e,t,r)}catch(T){oo(e,t,T)}}function _p(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Dp(e,t,n)},function(n){return oo(e,t,n)}):Dp(e,t,a)}function Dp(e,t,a){t.status="fulfilled",t.value=a,Bp(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Op(e,a)))}function oo(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Bp(t),t=t.next;while(t!==n)}e.action=null}function Bp(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Up(e,t){return t}function Hp(e,t){if(ge){var a=Ce.formState;if(a!==null){e:{var n=oe;if(ge){if(Oe){t:{for(var i=Oe,r=Rt;i.nodeType!==8;){if(!r){i=null;break t}if(i=Mt(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){Oe=Mt(i.nextSibling),n=i.data==="F!";break e}}Na(n)}n=!1}n&&(t=a[0])}}return a=nt(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Up,lastRenderedState:t},a.queue=n,a=lu.bind(null,oe,n),n.dispatch=a,n=so(!1),r=ho.bind(null,oe,!1,n.queue),n=nt(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=Lx.bind(null,oe,i,r,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function Lp(e){var t=Ye();return Yp(t,Ae,e)}function Yp(e,t,a){if(t=io(e,t,Up)[0],e=Zi(sa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=An(t)}catch(p){throw p===Ml?Bi:p}else n=t;t=Ye();var i=t.queue,r=i.dispatch;return a!==t.memoizedState&&(oe.flags|=2048,Ul(9,{destroy:void 0},Yx.bind(null,i,a),null)),[n,r,e]}function Yx(e,t){e.action=t}function qp(e){var t=Ye(),a=Ae;if(a!==null)return Yp(t,a,e);Ye(),t=t.memoizedState,a=Ye();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function Ul(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=oe.updateQueue,t===null&&(t=Ki(),oe.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Gp(){return Ye().memoizedState}function Xi(e,t,a,n){var i=nt();oe.flags|=e,i.memoizedState=Ul(1|t,{destroy:void 0},a,n===void 0?null:n)}function Ji(e,t,a,n){var i=Ye();n=n===void 0?null:n;var r=i.memoizedState.inst;Ae!==null&&n!==null&&Is(n,Ae.memoizedState.deps)?i.memoizedState=Ul(t,r,a,n):(oe.flags|=e,i.memoizedState=Ul(1|t,r,a,n))}function Vp(e,t){Xi(8390656,8,e,t)}function co(e,t){Ji(2048,8,e,t)}function qx(e){oe.flags|=4;var t=oe.updateQueue;if(t===null)t=Ki(),oe.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Kp(e){var t=Ye().memoizedState;return qx({ref:t,nextImpl:e}),function(){if((we&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}function Qp(e,t){return Ji(4,2,e,t)}function Zp(e,t){return Ji(4,4,e,t)}function Xp(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Jp(e,t,a){a=a!=null?a.concat([e]):null,Ji(4,4,Xp.bind(null,t,e),a)}function po(){}function $p(e,t){var a=Ye();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Is(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Wp(e,t){var a=Ye();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Is(t,n[1]))return n[0];if(n=e(),nl){ba(!0);try{e()}finally{ba(!1)}}return a.memoizedState=[n,t],n}function uo(e,t,a){return a===void 0||(ra&1073741824)!==0&&(me&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Fu(),oe.lanes|=e,Ma|=e,a)}function Fp(e,t,a,n){return gt(a,t)?a:_l.current!==null?(e=uo(e,a,n),gt(e,t)||(Ke=!0),e):(ra&42)===0||(ra&1073741824)!==0&&(me&261930)===0?(Ke=!0,e.memoizedState=a):(e=Fu(),oe.lanes|=e,Ma|=e,t)}function Pp(e,t,a,n,i){var r=Q.p;Q.p=r!==0&&8>r?r:8;var p=C.T,f={};C.T=f,ho(e,!1,t,a);try{var y=i(),T=C.S;if(T!==null&&T(f,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var O=Bx(y,n);Tn(e,t,O,Nt(e))}else Tn(e,t,n,Nt(e))}catch(D){Tn(e,t,{then:function(){},status:"rejected",reason:D},Nt())}finally{Q.p=r,p!==null&&f.types!==null&&(p.types=f.types),C.T=p}}function Gx(){}function fo(e,t,a,n){if(e.tag!==5)throw Error(d(476));var i=Ip(e).queue;Pp(e,i,t,I,a===null?Gx:function(){return eu(e),a(n)})}function Ip(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:I},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function eu(e){var t=Ip(e);t.next===null&&(t=e.alternate.memoizedState),Tn(e,t.next.queue,{},Nt())}function mo(){return Ie(Zn)}function tu(){return Ye().memoizedState}function au(){return Ye().memoizedState}function Vx(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Nt();e=za(a);var n=Ea(t,e,a);n!==null&&(ft(n,t,a),wn(n,t,a)),t={cache:Gs()},e.payload=t;return}t=t.return}}function Kx(e,t,a){var n=Nt();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},$i(e)?nu(t,a):(a=Cs(e,t,a,n),a!==null&&(ft(a,e,n),iu(a,t,n)))}function lu(e,t,a){var n=Nt();Tn(e,t,a,n)}function Tn(e,t,a,n){var i={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if($i(e))nu(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var p=t.lastRenderedState,f=r(p,a);if(i.hasEagerState=!0,i.eagerState=f,gt(f,p))return Ti(e,t,i,0),Ce===null&&Ai(),!1}catch{}if(a=Cs(e,t,i,n),a!==null)return ft(a,e,n),iu(a,t,n),!0}return!1}function ho(e,t,a,n){if(n={lane:2,revertLane:Xo(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},$i(e)){if(t)throw Error(d(479))}else t=Cs(e,a,n,2),t!==null&&ft(t,e,2)}function $i(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function nu(e,t){Dl=Gi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function iu(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,dd(e,a)}}var Rn={readContext:Ie,use:Qi,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue,useHostTransitionStatus:Ue,useFormState:Ue,useActionState:Ue,useOptimistic:Ue,useMemoCache:Ue,useCacheRefresh:Ue};Rn.useEffectEvent=Ue;var ru={readContext:Ie,use:Qi,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:Vp,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Xi(4194308,4,Xp.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Xi(4194308,4,e,t)},useInsertionEffect:function(e,t){Xi(4,2,e,t)},useMemo:function(e,t){var a=nt();t=t===void 0?null:t;var n=e();if(nl){ba(!0);try{e()}finally{ba(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=nt();if(a!==void 0){var i=a(t);if(nl){ba(!0);try{a(t)}finally{ba(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=Kx.bind(null,oe,e),[n.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:function(e){e=so(e);var t=e.queue,a=lu.bind(null,oe,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:po,useDeferredValue:function(e,t){var a=nt();return uo(a,e,t)},useTransition:function(){var e=so(!1);return e=Pp.bind(null,oe,e.queue,!0,!1),nt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=oe,i=nt();if(ge){if(a===void 0)throw Error(d(407));a=a()}else{if(a=t(),Ce===null)throw Error(d(349));(me&127)!==0||Ep(n,t,a)}i.memoizedState=a;var r={value:a,getSnapshot:t};return i.queue=r,Vp(Tp.bind(null,n,r,e),[e]),n.flags|=2048,Ul(9,{destroy:void 0},Ap.bind(null,n,r,a,t),null),a},useId:function(){var e=nt(),t=Ce.identifierPrefix;if(ge){var a=Vt,n=Gt;a=(n&~(1<<32-xt(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Vi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Ux++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:mo,useFormState:Hp,useActionState:Hp,useOptimistic:function(e){var t=nt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=ho.bind(null,oe,!0,a),a.dispatch=t,[e,t]},useMemoCache:no,useCacheRefresh:function(){return nt().memoizedState=Vx.bind(null,oe)},useEffectEvent:function(e){var t=nt(),a={impl:e};return t.memoizedState=a,function(){if((we&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}},xo={readContext:Ie,use:Qi,useCallback:$p,useContext:Ie,useEffect:co,useImperativeHandle:Jp,useInsertionEffect:Qp,useLayoutEffect:Zp,useMemo:Wp,useReducer:Zi,useRef:Gp,useState:function(){return Zi(sa)},useDebugValue:po,useDeferredValue:function(e,t){var a=Ye();return Fp(a,Ae.memoizedState,e,t)},useTransition:function(){var e=Zi(sa)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:An(e),t]},useSyncExternalStore:zp,useId:tu,useHostTransitionStatus:mo,useFormState:Lp,useActionState:Lp,useOptimistic:function(e,t){var a=Ye();return Mp(a,Ae,e,t)},useMemoCache:no,useCacheRefresh:au};xo.useEffectEvent=Kp;var su={readContext:Ie,use:Qi,useCallback:$p,useContext:Ie,useEffect:co,useImperativeHandle:Jp,useInsertionEffect:Qp,useLayoutEffect:Zp,useMemo:Wp,useReducer:ro,useRef:Gp,useState:function(){return ro(sa)},useDebugValue:po,useDeferredValue:function(e,t){var a=Ye();return Ae===null?uo(a,e,t):Fp(a,Ae.memoizedState,e,t)},useTransition:function(){var e=ro(sa)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:An(e),t]},useSyncExternalStore:zp,useId:tu,useHostTransitionStatus:mo,useFormState:qp,useActionState:qp,useOptimistic:function(e,t){var a=Ye();return Ae!==null?Mp(a,Ae,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:no,useCacheRefresh:au};su.useEffectEvent=Kp;function go(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:N({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var bo={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=Nt(),i=za(n);i.payload=t,a!=null&&(i.callback=a),t=Ea(e,i,n),t!==null&&(ft(t,e,n),wn(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=Nt(),i=za(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=Ea(e,i,n),t!==null&&(ft(t,e,n),wn(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Nt(),n=za(a);n.tag=2,t!=null&&(n.callback=t),t=Ea(e,n,a),t!==null&&(ft(t,e,a),wn(t,e,a))}};function ou(e,t,a,n,i,r,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,r,p):t.prototype&&t.prototype.isPureReactComponent?!xn(a,n)||!xn(i,r):!0}function cu(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&bo.enqueueReplaceState(t,t.state,null)}function il(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=N({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function du(e){Ei(e)}function pu(e){console.error(e)}function uu(e){Ei(e)}function Wi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function fu(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function vo(e,t,a){return a=za(a),a.tag=3,a.payload={element:null},a.callback=function(){Wi(e,t)},a}function mu(e){return e=za(e),e.tag=3,e}function hu(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var r=n.value;e.payload=function(){return i(r)},e.callback=function(){fu(t,a,n)}}var p=a.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){fu(t,a,n),typeof i!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var f=n.stack;this.componentDidCatch(n.value,{componentStack:f!==null?f:""})})}function Qx(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Tl(t,a,i,!0),a=vt.current,a!==null){switch(a.tag){case 31:case 13:return Ct===null?or():a.alternate===null&&He===0&&(He=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Ui?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Ko(e,n,i)),!1;case 22:return a.flags|=65536,n===Ui?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Ko(e,n,i)),!1}throw Error(d(435,a.tag))}return Ko(e,n,i),or(),!1}if(ge)return t=vt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==Us&&(e=Error(d(422),{cause:n}),vn(Et(e,a)))):(n!==Us&&(t=Error(d(423),{cause:n}),vn(Et(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=Et(n,a),i=vo(e.stateNode,n,i),Js(e,i),He!==4&&(He=2)),!1;var r=Error(d(520),{cause:n});if(r=Et(r,a),Hn===null?Hn=[r]:Hn.push(r),He!==4&&(He=2),t===null)return!0;n=Et(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=vo(a.stateNode,n,e),Js(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Oa===null||!Oa.has(r))))return a.flags|=65536,i&=-i,a.lanes|=i,i=mu(i),hu(i,e,a,n),Js(a,i),!1}a=a.return}while(a!==null);return!1}var yo=Error(d(461)),Ke=!1;function et(e,t,a,n){t.child=e===null?vp(t,null,a,n):ll(t,e.child,a,n)}function xu(e,t,a,n,i){a=a.render;var r=t.ref;if("ref"in n){var p={};for(var f in n)f!=="ref"&&(p[f]=n[f])}else p=n;return Ia(t),n=eo(e,t,a,p,r,i),f=to(),e!==null&&!Ke?(ao(e,t,i),oa(e,t,i)):(ge&&f&&Ds(t),t.flags|=1,et(e,t,n,i),t.child)}function gu(e,t,a,n,i){if(e===null){var r=a.type;return typeof r=="function"&&!Ms(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,bu(e,t,r,n,i)):(e=Ci(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Ao(e,i)){var p=r.memoizedProps;if(a=a.compare,a=a!==null?a:xn,a(p,n)&&e.ref===t.ref)return oa(e,t,i)}return t.flags|=1,e=aa(r,n),e.ref=t.ref,e.return=t,t.child=e}function bu(e,t,a,n,i){if(e!==null){var r=e.memoizedProps;if(xn(r,n)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=n=r,Ao(e,i))(e.flags&131072)!==0&&(Ke=!0);else return t.lanes=e.lanes,oa(e,t,i)}return jo(e,t,a,n,i)}function vu(e,t,a,n){var i=n.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~r}else n=0,t.child=null;return yu(e,t,r,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Di(t,r!==null?r.cachePool:null),r!==null?kp(t,r):Ws(),Np(t);else return n=t.lanes=536870912,yu(e,t,r!==null?r.baseLanes|a:a,a,n)}else r!==null?(Di(t,r.cachePool),kp(t,r),Ta(),t.memoizedState=null):(e!==null&&Di(t,null),Ws(),Ta());return et(e,t,i,a),t.child}function Cn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function yu(e,t,a,n,i){var r=Ks();return r=r===null?null:{parent:Ge._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&Di(t,null),Ws(),Np(t),e!==null&&Tl(e,t,n,!0),t.childLanes=i,null}function Fi(e,t){return t=Ii({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function ju(e,t,a){return ll(t,e.child,null,a),e=Fi(t,t.pendingProps),e.flags|=2,yt(t),t.memoizedState=null,e}function Zx(e,t,a){var n=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ge){if(n.mode==="hidden")return e=Fi(t,n),t.lanes=536870912,Cn(null,e);if(Ps(t),(e=Oe)?(e=_f(e,Rt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ja!==null?{id:Gt,overflow:Vt}:null,retryLane:536870912,hydrationErrors:null},a=np(e),a.return=t,t.child=a,Pe=t,Oe=null)):e=null,e===null)throw Na(t);return t.lanes=536870912,null}return Fi(t,n)}var r=e.memoizedState;if(r!==null){var p=r.dehydrated;if(Ps(t),i)if(t.flags&256)t.flags&=-257,t=ju(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(d(558));else if(Ke||Tl(e,t,a,!1),i=(a&e.childLanes)!==0,Ke||i){if(n=Ce,n!==null&&(p=pd(n,a),p!==0&&p!==r.retryLane))throw r.retryLane=p,$a(e,p),ft(n,e,p),yo;or(),t=ju(e,t,a)}else e=r.treeContext,Oe=Mt(p.nextSibling),Pe=t,ge=!0,ka=null,Rt=!1,e!==null&&sp(t,e),t=Fi(t,n),t.flags|=4096;return t}return e=aa(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Pi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function jo(e,t,a,n,i){return Ia(t),a=eo(e,t,a,n,void 0,i),n=to(),e!==null&&!Ke?(ao(e,t,i),oa(e,t,i)):(ge&&n&&Ds(t),t.flags|=1,et(e,t,a,i),t.child)}function ku(e,t,a,n,i,r){return Ia(t),t.updateQueue=null,a=Sp(t,n,a,i),wp(e),n=to(),e!==null&&!Ke?(ao(e,t,r),oa(e,t,r)):(ge&&n&&Ds(t),t.flags|=1,et(e,t,a,r),t.child)}function Nu(e,t,a,n,i){if(Ia(t),t.stateNode===null){var r=Sl,p=a.contextType;typeof p=="object"&&p!==null&&(r=Ie(p)),r=new a(n,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=bo,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=n,r.state=t.memoizedState,r.refs={},Zs(t),p=a.contextType,r.context=typeof p=="object"&&p!==null?Ie(p):Sl,r.state=t.memoizedState,p=a.getDerivedStateFromProps,typeof p=="function"&&(go(t,a,p,n),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(p=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),p!==r.state&&bo.enqueueReplaceState(r,r.state,null),zn(t,n,r,i),Sn(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){r=t.stateNode;var f=t.memoizedProps,y=il(a,f);r.props=y;var T=r.context,O=a.contextType;p=Sl,typeof O=="object"&&O!==null&&(p=Ie(O));var D=a.getDerivedStateFromProps;O=typeof D=="function"||typeof r.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,O||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(f||T!==p)&&cu(t,r,n,p),Sa=!1;var R=t.memoizedState;r.state=R,zn(t,n,r,i),Sn(),T=t.memoizedState,f||R!==T||Sa?(typeof D=="function"&&(go(t,a,D,n),T=t.memoizedState),(y=Sa||ou(t,a,y,n,R,T,p))?(O||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=T),r.props=n,r.state=T,r.context=p,n=y):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{r=t.stateNode,Xs(e,t),p=t.memoizedProps,O=il(a,p),r.props=O,D=t.pendingProps,R=r.context,T=a.contextType,y=Sl,typeof T=="object"&&T!==null&&(y=Ie(T)),f=a.getDerivedStateFromProps,(T=typeof f=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(p!==D||R!==y)&&cu(t,r,n,y),Sa=!1,R=t.memoizedState,r.state=R,zn(t,n,r,i),Sn();var M=t.memoizedState;p!==D||R!==M||Sa||e!==null&&e.dependencies!==null&&Oi(e.dependencies)?(typeof f=="function"&&(go(t,a,f,n),M=t.memoizedState),(O=Sa||ou(t,a,O,n,R,M,y)||e!==null&&e.dependencies!==null&&Oi(e.dependencies))?(T||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(n,M,y),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(n,M,y)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=M),r.props=n,r.state=M,r.context=y,n=O):(typeof r.componentDidUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),n=!1)}return r=n,Pi(e,t),n=(t.flags&128)!==0,r||n?(r=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&n?(t.child=ll(t,e.child,null,i),t.child=ll(t,null,a,i)):et(e,t,a,i),t.memoizedState=r.state,e=t.child):e=oa(e,t,i),e}function wu(e,t,a,n){return Fa(),t.flags|=256,et(e,t,a,n),t.child}var ko={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function No(e){return{baseLanes:e,cachePool:fp()}}function wo(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=kt),e}function Su(e,t,a){var n=t.pendingProps,i=!1,r=(t.flags&128)!==0,p;if((p=r)||(p=e!==null&&e.memoizedState===null?!1:(Le.current&2)!==0),p&&(i=!0,t.flags&=-129),p=(t.flags&32)!==0,t.flags&=-33,e===null){if(ge){if(i?Aa(t):Ta(),(e=Oe)?(e=_f(e,Rt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ja!==null?{id:Gt,overflow:Vt}:null,retryLane:536870912,hydrationErrors:null},a=np(e),a.return=t,t.child=a,Pe=t,Oe=null)):e=null,e===null)throw Na(t);return rc(e)?t.lanes=32:t.lanes=536870912,null}var f=n.children;return n=n.fallback,i?(Ta(),i=t.mode,f=Ii({mode:"hidden",children:f},i),n=Wa(n,i,a,null),f.return=t,n.return=t,f.sibling=n,t.child=f,n=t.child,n.memoizedState=No(a),n.childLanes=wo(e,p,a),t.memoizedState=ko,Cn(null,n)):(Aa(t),So(t,f))}var y=e.memoizedState;if(y!==null&&(f=y.dehydrated,f!==null)){if(r)t.flags&256?(Aa(t),t.flags&=-257,t=zo(e,t,a)):t.memoizedState!==null?(Ta(),t.child=e.child,t.flags|=128,t=null):(Ta(),f=n.fallback,i=t.mode,n=Ii({mode:"visible",children:n.children},i),f=Wa(f,i,a,null),f.flags|=2,n.return=t,f.return=t,n.sibling=f,t.child=n,ll(t,e.child,null,a),n=t.child,n.memoizedState=No(a),n.childLanes=wo(e,p,a),t.memoizedState=ko,t=Cn(null,n));else if(Aa(t),rc(f)){if(p=f.nextSibling&&f.nextSibling.dataset,p)var T=p.dgst;p=T,n=Error(d(419)),n.stack="",n.digest=p,vn({value:n,source:null,stack:null}),t=zo(e,t,a)}else if(Ke||Tl(e,t,a,!1),p=(a&e.childLanes)!==0,Ke||p){if(p=Ce,p!==null&&(n=pd(p,a),n!==0&&n!==y.retryLane))throw y.retryLane=n,$a(e,n),ft(p,e,n),yo;ic(f)||or(),t=zo(e,t,a)}else ic(f)?(t.flags|=192,t.child=e.child,t=null):(e=y.treeContext,Oe=Mt(f.nextSibling),Pe=t,ge=!0,ka=null,Rt=!1,e!==null&&sp(t,e),t=So(t,n.children),t.flags|=4096);return t}return i?(Ta(),f=n.fallback,i=t.mode,y=e.child,T=y.sibling,n=aa(y,{mode:"hidden",children:n.children}),n.subtreeFlags=y.subtreeFlags&65011712,T!==null?f=aa(T,f):(f=Wa(f,i,a,null),f.flags|=2),f.return=t,n.return=t,n.sibling=f,t.child=n,Cn(null,n),n=t.child,f=e.child.memoizedState,f===null?f=No(a):(i=f.cachePool,i!==null?(y=Ge._currentValue,i=i.parent!==y?{parent:y,pool:y}:i):i=fp(),f={baseLanes:f.baseLanes|a,cachePool:i}),n.memoizedState=f,n.childLanes=wo(e,p,a),t.memoizedState=ko,Cn(e.child,n)):(Aa(t),a=e.child,e=a.sibling,a=aa(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(p=t.deletions,p===null?(t.deletions=[e],t.flags|=16):p.push(e)),t.child=a,t.memoizedState=null,a)}function So(e,t){return t=Ii({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ii(e,t){return e=bt(22,e,null,t),e.lanes=0,e}function zo(e,t,a){return ll(t,e.child,null,a),e=So(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zu(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ys(e.return,t,a)}function Eo(e,t,a,n,i,r){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i,treeForkCount:r}:(p.isBackwards=t,p.rendering=null,p.renderingStartTime=0,p.last=n,p.tail=a,p.tailMode=i,p.treeForkCount=r)}function Eu(e,t,a){var n=t.pendingProps,i=n.revealOrder,r=n.tail;n=n.children;var p=Le.current,f=(p&2)!==0;if(f?(p=p&1|2,t.flags|=128):p&=1,L(Le,p),et(e,t,n,a),n=ge?bn:0,!f&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zu(e,a,t);else if(e.tag===19)zu(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&qi(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),Eo(t,!1,i,a,r,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&qi(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}Eo(t,!0,a,null,r,n);break;case"together":Eo(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function oa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ma|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Tl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,a=aa(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=aa(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ao(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Oi(e)))}function Xx(e,t,a){switch(t.tag){case 3:We(t,t.stateNode.containerInfo),wa(t,Ge,e.memoizedState.cache),Fa();break;case 27:case 5:an(t);break;case 4:We(t,t.stateNode.containerInfo);break;case 10:wa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ps(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Aa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Su(e,t,a):(Aa(t),e=oa(e,t,a),e!==null?e.sibling:null);Aa(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Tl(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return Eu(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),L(Le,Le.current),n)break;return null;case 22:return t.lanes=0,vu(e,t,a,t.pendingProps);case 24:wa(t,Ge,e.memoizedState.cache)}return oa(e,t,a)}function Au(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ke=!0;else{if(!Ao(e,a)&&(t.flags&128)===0)return Ke=!1,Xx(e,t,a);Ke=(e.flags&131072)!==0}else Ke=!1,ge&&(t.flags&1048576)!==0&&rp(t,bn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=tl(t.elementType),t.type=e,typeof e=="function")Ms(e)?(n=il(e,n),t.tag=1,t=Nu(null,t,e,n,a)):(t.tag=0,t=jo(null,t,e,n,a));else{if(e!=null){var i=e.$$typeof;if(i===X){t.tag=11,t=xu(null,t,e,n,a);break e}else if(i===P){t.tag=14,t=gu(null,t,e,n,a);break e}}throw t=De(e)||e,Error(d(306,t,""))}}return t;case 0:return jo(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=il(n,t.pendingProps),Nu(e,t,n,i,a);case 3:e:{if(We(t,t.stateNode.containerInfo),e===null)throw Error(d(387));n=t.pendingProps;var r=t.memoizedState;i=r.element,Xs(e,t),zn(t,n,null,a);var p=t.memoizedState;if(n=p.cache,wa(t,Ge,n),n!==r.cache&&qs(t,[Ge],a,!0),Sn(),n=p.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:p.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=wu(e,t,n,a);break e}else if(n!==i){i=Et(Error(d(424)),t),vn(i),t=wu(e,t,n,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Oe=Mt(e.firstChild),Pe=t,ge=!0,ka=null,Rt=!0,a=vp(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Fa(),n===i){t=oa(e,t,a);break e}et(e,t,n,a)}t=t.child}return t;case 26:return Pi(e,t),e===null?(a=Yf(t.type,null,t.pendingProps,null))?t.memoizedState=a:ge||(a=t.type,e=t.pendingProps,n=hr(ce.current).createElement(a),n[Fe]=t,n[st]=e,tt(n,a,e),Je(n),t.stateNode=n):t.memoizedState=Yf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return an(t),e===null&&ge&&(n=t.stateNode=Uf(t.type,t.pendingProps,ce.current),Pe=t,Rt=!0,i=Oe,Ua(t.type)?(sc=i,Oe=Mt(n.firstChild)):Oe=i),et(e,t,t.pendingProps.children,a),Pi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ge&&((i=n=Oe)&&(n=Ng(n,t.type,t.pendingProps,Rt),n!==null?(t.stateNode=n,Pe=t,Oe=Mt(n.firstChild),Rt=!1,i=!0):i=!1),i||Na(t)),an(t),i=t.type,r=t.pendingProps,p=e!==null?e.memoizedProps:null,n=r.children,ac(i,r)?n=null:p!==null&&ac(i,p)&&(t.flags|=32),t.memoizedState!==null&&(i=eo(e,t,Hx,null,null,a),Zn._currentValue=i),Pi(e,t),et(e,t,n,a),t.child;case 6:return e===null&&ge&&((e=a=Oe)&&(a=wg(a,t.pendingProps,Rt),a!==null?(t.stateNode=a,Pe=t,Oe=null,e=!0):e=!1),e||Na(t)),null;case 13:return Su(e,t,a);case 4:return We(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=ll(t,null,n,a):et(e,t,n,a),t.child;case 11:return xu(e,t,t.type,t.pendingProps,a);case 7:return et(e,t,t.pendingProps,a),t.child;case 8:return et(e,t,t.pendingProps.children,a),t.child;case 12:return et(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,wa(t,t.type,n.value),et(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,Ia(t),i=Ie(i),n=n(i),t.flags|=1,et(e,t,n,a),t.child;case 14:return gu(e,t,t.type,t.pendingProps,a);case 15:return bu(e,t,t.type,t.pendingProps,a);case 19:return Eu(e,t,a);case 31:return Zx(e,t,a);case 22:return vu(e,t,a,t.pendingProps);case 24:return Ia(t),n=Ie(Ge),e===null?(i=Ks(),i===null&&(i=Ce,r=Gs(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=a),i=r),t.memoizedState={parent:n,cache:i},Zs(t),wa(t,Ge,i)):((e.lanes&a)!==0&&(Xs(e,t),zn(t,null,null,a),Sn()),i=e.memoizedState,r=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),wa(t,Ge,n)):(n=r.cache,wa(t,Ge,n),n!==i.cache&&qs(t,[Ge],a,!0))),et(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(d(156,t.tag))}function ca(e){e.flags|=4}function To(e,t,a,n,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(tf())e.flags|=8192;else throw al=Ui,Qs}else e.flags&=-16777217}function Tu(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Qf(t))if(tf())e.flags|=8192;else throw al=Ui,Qs}function er(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?od():536870912,e.lanes|=t,ql|=t)}function Mn(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Jx(e,t,a){var n=t.pendingProps;switch(Bs(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return _e(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ia(Ge),Me(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Al(t)?ca(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Hs())),_e(t),null;case 26:var i=t.type,r=t.memoizedState;return e===null?(ca(t),r!==null?(_e(t),Tu(t,r)):(_e(t),To(t,i,null,n,a))):r?r!==e.memoizedState?(ca(t),_e(t),Tu(t,r)):(_e(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&ca(t),_e(t),To(t,i,e,n,a)),null;case 27:if(pi(t),a=ce.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ca(t);else{if(!n){if(t.stateNode===null)throw Error(d(166));return _e(t),null}e=Z.current,Al(t)?op(t):(e=Uf(i,n,a),t.stateNode=e,ca(t))}return _e(t),null;case 5:if(pi(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ca(t);else{if(!n){if(t.stateNode===null)throw Error(d(166));return _e(t),null}if(r=Z.current,Al(t))op(t);else{var p=hr(ce.current);switch(r){case 1:r=p.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:r=p.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":r=p.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":r=p.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":r=p.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof n.is=="string"?p.createElement("select",{is:n.is}):p.createElement("select"),n.multiple?r.multiple=!0:n.size&&(r.size=n.size);break;default:r=typeof n.is=="string"?p.createElement(i,{is:n.is}):p.createElement(i)}}r[Fe]=t,r[st]=n;e:for(p=t.child;p!==null;){if(p.tag===5||p.tag===6)r.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}t.stateNode=r;e:switch(tt(r,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&ca(t)}}return _e(t),To(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&ca(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(d(166));if(e=ce.current,Al(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=Pe,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[Fe]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||zf(e.nodeValue,a)),e||Na(t,!0)}else e=hr(e).createTextNode(n),e[Fe]=t,t.stateNode=e}return _e(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=Al(t),a!==null){if(e===null){if(!n)throw Error(d(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[Fe]=t}else Fa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_e(t),e=!1}else a=Hs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(yt(t),t):(yt(t),null);if((t.flags&128)!==0)throw Error(d(558))}return _e(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Al(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(d(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(d(317));i[Fe]=t}else Fa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_e(t),i=!1}else i=Hs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(yt(t),t):(yt(t),null)}return yt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==i&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),er(t,t.updateQueue),_e(t),null);case 4:return Me(),e===null&&Fo(t.stateNode.containerInfo),_e(t),null;case 10:return ia(t.type),_e(t),null;case 19:if(E(Le),n=t.memoizedState,n===null)return _e(t),null;if(i=(t.flags&128)!==0,r=n.rendering,r===null)if(i)Mn(n,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=qi(e),r!==null){for(t.flags|=128,Mn(n,!1),e=r.updateQueue,t.updateQueue=e,er(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)lp(a,e),a=a.sibling;return L(Le,Le.current&1|2),ge&&la(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&mt()>ir&&(t.flags|=128,i=!0,Mn(n,!1),t.lanes=4194304)}else{if(!i)if(e=qi(r),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,er(t,e),Mn(n,!0),n.tail===null&&n.tailMode==="hidden"&&!r.alternate&&!ge)return _e(t),null}else 2*mt()-n.renderingStartTime>ir&&a!==536870912&&(t.flags|=128,i=!0,Mn(n,!1),t.lanes=4194304);n.isBackwards?(r.sibling=t.child,t.child=r):(e=n.last,e!==null?e.sibling=r:t.child=r,n.last=r)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=mt(),e.sibling=null,a=Le.current,L(Le,i?a&1|2:a&1),ge&&la(t,n.treeForkCount),e):(_e(t),null);case 22:case 23:return yt(t),Fs(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),a=t.updateQueue,a!==null&&er(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&E(el),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ia(Ge),_e(t),null;case 25:return null;case 30:return null}throw Error(d(156,t.tag))}function $x(e,t){switch(Bs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ia(Ge),Me(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return pi(t),null;case 31:if(t.memoizedState!==null){if(yt(t),t.alternate===null)throw Error(d(340));Fa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(yt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));Fa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return E(Le),null;case 4:return Me(),null;case 10:return ia(t.type),null;case 22:case 23:return yt(t),Fs(),e!==null&&E(el),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ia(Ge),null;case 25:return null;default:return null}}function Ru(e,t){switch(Bs(t),t.tag){case 3:ia(Ge),Me();break;case 26:case 27:case 5:pi(t);break;case 4:Me();break;case 31:t.memoizedState!==null&&yt(t);break;case 13:yt(t);break;case 19:E(Le);break;case 10:ia(t.type);break;case 22:case 23:yt(t),Fs(),e!==null&&E(el);break;case 24:ia(Ge)}}function On(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var r=a.create,p=a.inst;n=r(),p.destroy=n}a=a.next}while(a!==i)}}catch(f){ze(t,t.return,f)}}function Ra(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){var p=n.inst,f=p.destroy;if(f!==void 0){p.destroy=void 0,i=t;var y=a,T=f;try{T()}catch(O){ze(i,y,O)}}}n=n.next}while(n!==r)}}catch(O){ze(t,t.return,O)}}function Cu(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{jp(t,a)}catch(n){ze(e,e.return,n)}}}function Mu(e,t,a){a.props=il(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){ze(e,t,n)}}function _n(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){ze(e,t,i)}}function Kt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){ze(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){ze(e,t,i)}else a.current=null}function Ou(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){ze(e,e.return,i)}}function Ro(e,t,a){try{var n=e.stateNode;gg(n,e.type,a,t),n[st]=t}catch(i){ze(e,e.return,i)}}function _u(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ua(e.type)||e.tag===4}function Co(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_u(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ua(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mo(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ea));else if(n!==4&&(n===27&&Ua(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Mo(e,t,a),e=e.sibling;e!==null;)Mo(e,t,a),e=e.sibling}function tr(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&Ua(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(tr(e,t,a),e=e.sibling;e!==null;)tr(e,t,a),e=e.sibling}function Du(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);tt(t,n,a),t[Fe]=e,t[st]=a}catch(r){ze(e,e.return,r)}}var da=!1,Qe=!1,Oo=!1,Bu=typeof WeakSet=="function"?WeakSet:Set,$e=null;function Wx(e,t){if(e=e.containerInfo,ec=kr,e=Jd(e),Ss(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var p=0,f=-1,y=-1,T=0,O=0,D=e,R=null;t:for(;;){for(var M;D!==a||i!==0&&D.nodeType!==3||(f=p+i),D!==r||n!==0&&D.nodeType!==3||(y=p+n),D.nodeType===3&&(p+=D.nodeValue.length),(M=D.firstChild)!==null;)R=D,D=M;for(;;){if(D===e)break t;if(R===a&&++T===i&&(f=p),R===r&&++O===n&&(y=p),(M=D.nextSibling)!==null)break;D=R,R=D.parentNode}D=M}a=f===-1||y===-1?null:{start:f,end:y}}else a=null}a=a||{start:0,end:0}}else a=null;for(tc={focusedElem:e,selectionRange:a},kr=!1,$e=t;$e!==null;)if(t=$e,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$e=e;else for(;$e!==null;){switch(t=$e,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,i=r.memoizedProps,r=r.memoizedState,n=a.stateNode;try{var J=il(a.type,i);e=n.getSnapshotBeforeUpdate(J,r),n.__reactInternalSnapshotBeforeUpdate=e}catch(te){ze(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)nc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":nc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=t.sibling,e!==null){e.return=t.return,$e=e;break}$e=t.return}}function Uu(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:ua(e,a),n&4&&On(5,a);break;case 1:if(ua(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(p){ze(a,a.return,p)}else{var i=il(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(p){ze(a,a.return,p)}}n&64&&Cu(a),n&512&&_n(a,a.return);break;case 3:if(ua(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{jp(e,t)}catch(p){ze(a,a.return,p)}}break;case 27:t===null&&n&4&&Du(a);case 26:case 5:ua(e,a),t===null&&n&4&&Ou(a),n&512&&_n(a,a.return);break;case 12:ua(e,a);break;case 31:ua(e,a),n&4&&Yu(e,a);break;case 13:ua(e,a),n&4&&qu(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ig.bind(null,a),Sg(e,a))));break;case 22:if(n=a.memoizedState!==null||da,!n){t=t!==null&&t.memoizedState!==null||Qe,i=da;var r=Qe;da=n,(Qe=t)&&!r?fa(e,a,(a.subtreeFlags&8772)!==0):ua(e,a),da=i,Qe=r}break;case 30:break;default:ua(e,a)}}function Hu(e){var t=e.alternate;t!==null&&(e.alternate=null,Hu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&os(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Be=null,ct=!1;function pa(e,t,a){for(a=a.child;a!==null;)Lu(e,t,a),a=a.sibling}function Lu(e,t,a){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(ln,a)}catch{}switch(a.tag){case 26:Qe||Kt(a,t),pa(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Qe||Kt(a,t);var n=Be,i=ct;Ua(a.type)&&(Be=a.stateNode,ct=!1),pa(e,t,a),Vn(a.stateNode),Be=n,ct=i;break;case 5:Qe||Kt(a,t);case 6:if(n=Be,i=ct,Be=null,pa(e,t,a),Be=n,ct=i,Be!==null)if(ct)try{(Be.nodeType===9?Be.body:Be.nodeName==="HTML"?Be.ownerDocument.body:Be).removeChild(a.stateNode)}catch(r){ze(a,t,r)}else try{Be.removeChild(a.stateNode)}catch(r){ze(a,t,r)}break;case 18:Be!==null&&(ct?(e=Be,Mf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),$l(e)):Mf(Be,a.stateNode));break;case 4:n=Be,i=ct,Be=a.stateNode.containerInfo,ct=!0,pa(e,t,a),Be=n,ct=i;break;case 0:case 11:case 14:case 15:Ra(2,a,t),Qe||Ra(4,a,t),pa(e,t,a);break;case 1:Qe||(Kt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Mu(a,t,n)),pa(e,t,a);break;case 21:pa(e,t,a);break;case 22:Qe=(n=Qe)||a.memoizedState!==null,pa(e,t,a),Qe=n;break;default:pa(e,t,a)}}function Yu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{$l(e)}catch(a){ze(t,t.return,a)}}}function qu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{$l(e)}catch(a){ze(t,t.return,a)}}function Fx(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Bu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Bu),t;default:throw Error(d(435,e.tag))}}function ar(e,t){var a=Fx(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var i=rg.bind(null,e,n);n.then(i,i)}})}function dt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],r=e,p=t,f=p;e:for(;f!==null;){switch(f.tag){case 27:if(Ua(f.type)){Be=f.stateNode,ct=!1;break e}break;case 5:Be=f.stateNode,ct=!1;break e;case 3:case 4:Be=f.stateNode.containerInfo,ct=!0;break e}f=f.return}if(Be===null)throw Error(d(160));Lu(r,p,i),Be=null,ct=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Gu(t,e),t=t.sibling}var Bt=null;function Gu(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:dt(t,e),pt(e),n&4&&(Ra(3,e,e.return),On(3,e),Ra(5,e,e.return));break;case 1:dt(t,e),pt(e),n&512&&(Qe||a===null||Kt(a,a.return)),n&64&&da&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Bt;if(dt(t,e),pt(e),n&512&&(Qe||a===null||Kt(a,a.return)),n&4){var r=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":r=i.getElementsByTagName("title")[0],(!r||r[sn]||r[Fe]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(n),i.head.insertBefore(r,i.querySelector("head > title"))),tt(r,n,a),r[Fe]=e,Je(r),n=r;break e;case"link":var p=Vf("link","href",i).get(n+(a.href||""));if(p){for(var f=0;f<p.length;f++)if(r=p[f],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){p.splice(f,1);break t}}r=i.createElement(n),tt(r,n,a),i.head.appendChild(r);break;case"meta":if(p=Vf("meta","content",i).get(n+(a.content||""))){for(f=0;f<p.length;f++)if(r=p[f],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){p.splice(f,1);break t}}r=i.createElement(n),tt(r,n,a),i.head.appendChild(r);break;default:throw Error(d(468,n))}r[Fe]=e,Je(r),n=r}e.stateNode=n}else Kf(i,e.type,e.stateNode);else e.stateNode=Gf(i,n,e.memoizedProps);else r!==n?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,n===null?Kf(i,e.type,e.stateNode):Gf(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Ro(e,e.memoizedProps,a.memoizedProps)}break;case 27:dt(t,e),pt(e),n&512&&(Qe||a===null||Kt(a,a.return)),a!==null&&n&4&&Ro(e,e.memoizedProps,a.memoizedProps);break;case 5:if(dt(t,e),pt(e),n&512&&(Qe||a===null||Kt(a,a.return)),e.flags&32){i=e.stateNode;try{bl(i,"")}catch(J){ze(e,e.return,J)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,Ro(e,i,a!==null?a.memoizedProps:i)),n&1024&&(Oo=!0);break;case 6:if(dt(t,e),pt(e),n&4){if(e.stateNode===null)throw Error(d(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(J){ze(e,e.return,J)}}break;case 3:if(br=null,i=Bt,Bt=xr(t.containerInfo),dt(t,e),Bt=i,pt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{$l(t.containerInfo)}catch(J){ze(e,e.return,J)}Oo&&(Oo=!1,Vu(e));break;case 4:n=Bt,Bt=xr(e.stateNode.containerInfo),dt(t,e),pt(e),Bt=n;break;case 12:dt(t,e),pt(e);break;case 31:dt(t,e),pt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ar(e,n)));break;case 13:dt(t,e),pt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(nr=mt()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ar(e,n)));break;case 22:i=e.memoizedState!==null;var y=a!==null&&a.memoizedState!==null,T=da,O=Qe;if(da=T||i,Qe=O||y,dt(t,e),Qe=O,da=T,pt(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||y||da||Qe||rl(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){y=a=t;try{if(r=y.stateNode,i)p=r.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{f=y.stateNode;var D=y.memoizedProps.style,R=D!=null&&D.hasOwnProperty("display")?D.display:null;f.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(J){ze(y,y.return,J)}}}else if(t.tag===6){if(a===null){y=t;try{y.stateNode.nodeValue=i?"":y.memoizedProps}catch(J){ze(y,y.return,J)}}}else if(t.tag===18){if(a===null){y=t;try{var M=y.stateNode;i?Of(M,!0):Of(y.stateNode,!1)}catch(J){ze(y,y.return,J)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,ar(e,a))));break;case 19:dt(t,e),pt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ar(e,n)));break;case 30:break;case 21:break;default:dt(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(_u(n)){a=n;break}n=n.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var i=a.stateNode,r=Co(e);tr(e,r,i);break;case 5:var p=a.stateNode;a.flags&32&&(bl(p,""),a.flags&=-33);var f=Co(e);tr(e,f,p);break;case 3:case 4:var y=a.stateNode.containerInfo,T=Co(e);Mo(e,T,y);break;default:throw Error(d(161))}}catch(O){ze(e,e.return,O)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Vu(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ua(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Uu(e,t.alternate,t),t=t.sibling}function rl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ra(4,t,t.return),rl(t);break;case 1:Kt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Mu(t,t.return,a),rl(t);break;case 27:Vn(t.stateNode);case 26:case 5:Kt(t,t.return),rl(t);break;case 22:t.memoizedState===null&&rl(t);break;case 30:rl(t);break;default:rl(t)}e=e.sibling}}function fa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,r=t,p=r.flags;switch(r.tag){case 0:case 11:case 15:fa(i,r,a),On(4,r);break;case 1:if(fa(i,r,a),n=r,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(T){ze(n,n.return,T)}if(n=r,i=n.updateQueue,i!==null){var f=n.stateNode;try{var y=i.shared.hiddenCallbacks;if(y!==null)for(i.shared.hiddenCallbacks=null,i=0;i<y.length;i++)yp(y[i],f)}catch(T){ze(n,n.return,T)}}a&&p&64&&Cu(r),_n(r,r.return);break;case 27:Du(r);case 26:case 5:fa(i,r,a),a&&n===null&&p&4&&Ou(r),_n(r,r.return);break;case 12:fa(i,r,a);break;case 31:fa(i,r,a),a&&p&4&&Yu(i,r);break;case 13:fa(i,r,a),a&&p&4&&qu(i,r);break;case 22:r.memoizedState===null&&fa(i,r,a),_n(r,r.return);break;case 30:break;default:fa(i,r,a)}t=t.sibling}}function _o(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&yn(a))}function Do(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&yn(e))}function Ut(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ku(e,t,a,n),t=t.sibling}function Ku(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Ut(e,t,a,n),i&2048&&On(9,t);break;case 1:Ut(e,t,a,n);break;case 3:Ut(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&yn(e)));break;case 12:if(i&2048){Ut(e,t,a,n),e=t.stateNode;try{var r=t.memoizedProps,p=r.id,f=r.onPostCommit;typeof f=="function"&&f(p,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(y){ze(t,t.return,y)}}else Ut(e,t,a,n);break;case 31:Ut(e,t,a,n);break;case 13:Ut(e,t,a,n);break;case 23:break;case 22:r=t.stateNode,p=t.alternate,t.memoizedState!==null?r._visibility&2?Ut(e,t,a,n):Dn(e,t):r._visibility&2?Ut(e,t,a,n):(r._visibility|=2,Hl(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),i&2048&&_o(p,t);break;case 24:Ut(e,t,a,n),i&2048&&Do(t.alternate,t);break;default:Ut(e,t,a,n)}}function Hl(e,t,a,n,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,p=t,f=a,y=n,T=p.flags;switch(p.tag){case 0:case 11:case 15:Hl(r,p,f,y,i),On(8,p);break;case 23:break;case 22:var O=p.stateNode;p.memoizedState!==null?O._visibility&2?Hl(r,p,f,y,i):Dn(r,p):(O._visibility|=2,Hl(r,p,f,y,i)),i&&T&2048&&_o(p.alternate,p);break;case 24:Hl(r,p,f,y,i),i&&T&2048&&Do(p.alternate,p);break;default:Hl(r,p,f,y,i)}t=t.sibling}}function Dn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:Dn(a,n),i&2048&&_o(n.alternate,n);break;case 24:Dn(a,n),i&2048&&Do(n.alternate,n);break;default:Dn(a,n)}t=t.sibling}}var Bn=8192;function Ll(e,t,a){if(e.subtreeFlags&Bn)for(e=e.child;e!==null;)Qu(e,t,a),e=e.sibling}function Qu(e,t,a){switch(e.tag){case 26:Ll(e,t,a),e.flags&Bn&&e.memoizedState!==null&&Ug(a,Bt,e.memoizedState,e.memoizedProps);break;case 5:Ll(e,t,a);break;case 3:case 4:var n=Bt;Bt=xr(e.stateNode.containerInfo),Ll(e,t,a),Bt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Bn,Bn=16777216,Ll(e,t,a),Bn=n):Ll(e,t,a));break;default:Ll(e,t,a)}}function Zu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Un(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];$e=n,Ju(n,e)}Zu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Xu(e),e=e.sibling}function Xu(e){switch(e.tag){case 0:case 11:case 15:Un(e),e.flags&2048&&Ra(9,e,e.return);break;case 3:Un(e);break;case 12:Un(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,lr(e)):Un(e);break;default:Un(e)}}function lr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];$e=n,Ju(n,e)}Zu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ra(8,t,t.return),lr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,lr(t));break;default:lr(t)}e=e.sibling}}function Ju(e,t){for(;$e!==null;){var a=$e;switch(a.tag){case 0:case 11:case 15:Ra(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:yn(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,$e=n;else e:for(a=e;$e!==null;){n=$e;var i=n.sibling,r=n.return;if(Hu(n),n===a){$e=null;break e}if(i!==null){i.return=r,$e=i;break e}$e=r}}}var Px={getCacheForType:function(e){var t=Ie(Ge),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ie(Ge).controller.signal}},Ix=typeof WeakMap=="function"?WeakMap:Map,we=0,Ce=null,pe=null,me=0,Se=0,jt=null,Ca=!1,Yl=!1,Bo=!1,ma=0,He=0,Ma=0,sl=0,Uo=0,kt=0,ql=0,Hn=null,ut=null,Ho=!1,nr=0,$u=0,ir=1/0,rr=null,Oa=null,Ze=0,_a=null,Gl=null,ha=0,Lo=0,Yo=null,Wu=null,Ln=0,qo=null;function Nt(){return(we&2)!==0&&me!==0?me&-me:C.T!==null?Xo():ud()}function Fu(){if(kt===0)if((me&536870912)===0||ge){var e=mi;mi<<=1,(mi&3932160)===0&&(mi=262144),kt=e}else kt=536870912;return e=vt.current,e!==null&&(e.flags|=32),kt}function ft(e,t,a){(e===Ce&&(Se===2||Se===9)||e.cancelPendingCommit!==null)&&(Vl(e,0),Da(e,me,kt,!1)),rn(e,a),((we&2)===0||e!==Ce)&&(e===Ce&&((we&2)===0&&(sl|=a),He===4&&Da(e,me,kt,!1)),Qt(e))}function Pu(e,t,a){if((we&6)!==0)throw Error(d(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||nn(e,t),i=n?ag(e,t):Vo(e,t,!0),r=n;do{if(i===0){Yl&&!n&&Da(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!eg(a)){i=Vo(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){t=p;e:{var f=e;i=Hn;var y=f.current.memoizedState.isDehydrated;if(y&&(Vl(f,p).flags|=256),p=Vo(f,p,!1),p!==2){if(Bo&&!y){f.errorRecoveryDisabledLanes|=r,sl|=r,i=4;break e}r=ut,ut=i,r!==null&&(ut===null?ut=r:ut.push.apply(ut,r))}i=p}if(r=!1,i!==2)continue}}if(i===1){Vl(e,0),Da(e,t,0,!0);break}e:{switch(n=e,r=i,r){case 0:case 1:throw Error(d(345));case 4:if((t&4194048)!==t)break;case 6:Da(n,t,kt,!Ca);break e;case 2:ut=null;break;case 3:case 5:break;default:throw Error(d(329))}if((t&62914560)===t&&(i=nr+300-mt(),10<i)){if(Da(n,t,kt,!Ca),xi(n,0,!0)!==0)break e;ha=t,n.timeoutHandle=Rf(Iu.bind(null,n,a,ut,rr,Ho,t,kt,sl,ql,Ca,r,"Throttled",-0,0),i);break e}Iu(n,a,ut,rr,Ho,t,kt,sl,ql,Ca,r,null,-0,0)}}break}while(!0);Qt(e)}function Iu(e,t,a,n,i,r,p,f,y,T,O,D,R,M){if(e.timeoutHandle=-1,D=t.subtreeFlags,D&8192||(D&16785408)===16785408){D={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ea},Qu(t,r,D);var J=(r&62914560)===r?nr-mt():(r&4194048)===r?$u-mt():0;if(J=Hg(D,J),J!==null){ha=r,e.cancelPendingCommit=J(of.bind(null,e,t,r,a,n,i,p,f,y,O,D,null,R,M)),Da(e,r,p,!T);return}}of(e,t,r,a,n,i,p,f,y)}function eg(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],r=i.getSnapshot;i=i.value;try{if(!gt(r(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Da(e,t,a,n){t&=~Uo,t&=~sl,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var r=31-xt(i),p=1<<r;n[r]=-1,i&=~p}a!==0&&cd(e,a,t)}function sr(){return(we&6)===0?(Yn(0),!1):!0}function Go(){if(pe!==null){if(Se===0)var e=pe.return;else e=pe,na=Pa=null,lo(e),Ol=null,kn=0,e=pe;for(;e!==null;)Ru(e.alternate,e),e=e.return;pe=null}}function Vl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,yg(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ha=0,Go(),Ce=e,pe=a=aa(e.current,null),me=t,Se=0,jt=null,Ca=!1,Yl=nn(e,t),Bo=!1,ql=kt=Uo=sl=Ma=He=0,ut=Hn=null,Ho=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-xt(n),r=1<<i;t|=e[i],n&=~r}return ma=t,Ai(),a}function ef(e,t){oe=null,C.H=Rn,t===Ml||t===Bi?(t=xp(),Se=3):t===Qs?(t=xp(),Se=4):Se=t===yo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,jt=t,pe===null&&(He=1,Wi(e,Et(t,e.current)))}function tf(){var e=vt.current;return e===null?!0:(me&4194048)===me?Ct===null:(me&62914560)===me||(me&536870912)!==0?e===Ct:!1}function af(){var e=C.H;return C.H=Rn,e===null?Rn:e}function lf(){var e=C.A;return C.A=Px,e}function or(){He=4,Ca||(me&4194048)!==me&&vt.current!==null||(Yl=!0),(Ma&134217727)===0&&(sl&134217727)===0||Ce===null||Da(Ce,me,kt,!1)}function Vo(e,t,a){var n=we;we|=2;var i=af(),r=lf();(Ce!==e||me!==t)&&(rr=null,Vl(e,t)),t=!1;var p=He;e:do try{if(Se!==0&&pe!==null){var f=pe,y=jt;switch(Se){case 8:Go(),p=6;break e;case 3:case 2:case 9:case 6:vt.current===null&&(t=!0);var T=Se;if(Se=0,jt=null,Kl(e,f,y,T),a&&Yl){p=0;break e}break;default:T=Se,Se=0,jt=null,Kl(e,f,y,T)}}tg(),p=He;break}catch(O){ef(e,O)}while(!0);return t&&e.shellSuspendCounter++,na=Pa=null,we=n,C.H=i,C.A=r,pe===null&&(Ce=null,me=0,Ai()),p}function tg(){for(;pe!==null;)nf(pe)}function ag(e,t){var a=we;we|=2;var n=af(),i=lf();Ce!==e||me!==t?(rr=null,ir=mt()+500,Vl(e,t)):Yl=nn(e,t);e:do try{if(Se!==0&&pe!==null){t=pe;var r=jt;t:switch(Se){case 1:Se=0,jt=null,Kl(e,t,r,1);break;case 2:case 9:if(mp(r)){Se=0,jt=null,rf(t);break}t=function(){Se!==2&&Se!==9||Ce!==e||(Se=7),Qt(e)},r.then(t,t);break e;case 3:Se=7;break e;case 4:Se=5;break e;case 7:mp(r)?(Se=0,jt=null,rf(t)):(Se=0,jt=null,Kl(e,t,r,7));break;case 5:var p=null;switch(pe.tag){case 26:p=pe.memoizedState;case 5:case 27:var f=pe;if(p?Qf(p):f.stateNode.complete){Se=0,jt=null;var y=f.sibling;if(y!==null)pe=y;else{var T=f.return;T!==null?(pe=T,cr(T)):pe=null}break t}}Se=0,jt=null,Kl(e,t,r,5);break;case 6:Se=0,jt=null,Kl(e,t,r,6);break;case 8:Go(),He=6;break e;default:throw Error(d(462))}}lg();break}catch(O){ef(e,O)}while(!0);return na=Pa=null,C.H=n,C.A=i,we=a,pe!==null?0:(Ce=null,me=0,Ai(),He)}function lg(){for(;pe!==null&&!zh();)nf(pe)}function nf(e){var t=Au(e.alternate,e,ma);e.memoizedProps=e.pendingProps,t===null?cr(e):pe=t}function rf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=ku(a,t,t.pendingProps,t.type,void 0,me);break;case 11:t=ku(a,t,t.pendingProps,t.type.render,t.ref,me);break;case 5:lo(t);default:Ru(a,t),t=pe=lp(t,ma),t=Au(a,t,ma)}e.memoizedProps=e.pendingProps,t===null?cr(e):pe=t}function Kl(e,t,a,n){na=Pa=null,lo(t),Ol=null,kn=0;var i=t.return;try{if(Qx(e,i,t,a,me)){He=1,Wi(e,Et(a,e.current)),pe=null;return}}catch(r){if(i!==null)throw pe=i,r;He=1,Wi(e,Et(a,e.current)),pe=null;return}t.flags&32768?(ge||n===1?e=!0:Yl||(me&536870912)!==0?e=!1:(Ca=e=!0,(n===2||n===9||n===3||n===6)&&(n=vt.current,n!==null&&n.tag===13&&(n.flags|=16384))),sf(t,e)):cr(t)}function cr(e){var t=e;do{if((t.flags&32768)!==0){sf(t,Ca);return}e=t.return;var a=Jx(t.alternate,t,ma);if(a!==null){pe=a;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);He===0&&(He=5)}function sf(e,t){do{var a=$x(e.alternate,e);if(a!==null){a.flags&=32767,pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){pe=e;return}pe=e=a}while(e!==null);He=6,pe=null}function of(e,t,a,n,i,r,p,f,y){e.cancelPendingCommit=null;do dr();while(Ze!==0);if((we&6)!==0)throw Error(d(327));if(t!==null){if(t===e.current)throw Error(d(177));if(r=t.lanes|t.childLanes,r|=Rs,Bh(e,a,r,p,f,y),e===Ce&&(pe=Ce=null,me=0),Gl=t,_a=e,ha=a,Lo=r,Yo=i,Wu=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,sg(ui,function(){return ff(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=C.T,C.T=null,i=Q.p,Q.p=2,p=we,we|=4;try{Wx(e,t,a)}finally{we=p,Q.p=i,C.T=n}}Ze=1,cf(),df(),pf()}}function cf(){if(Ze===1){Ze=0;var e=_a,t=Gl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=C.T,C.T=null;var n=Q.p;Q.p=2;var i=we;we|=4;try{Gu(t,e);var r=tc,p=Jd(e.containerInfo),f=r.focusedElem,y=r.selectionRange;if(p!==f&&f&&f.ownerDocument&&Xd(f.ownerDocument.documentElement,f)){if(y!==null&&Ss(f)){var T=y.start,O=y.end;if(O===void 0&&(O=T),"selectionStart"in f)f.selectionStart=T,f.selectionEnd=Math.min(O,f.value.length);else{var D=f.ownerDocument||document,R=D&&D.defaultView||window;if(R.getSelection){var M=R.getSelection(),J=f.textContent.length,te=Math.min(y.start,J),Re=y.end===void 0?te:Math.min(y.end,J);!M.extend&&te>Re&&(p=Re,Re=te,te=p);var z=Zd(f,te),j=Zd(f,Re);if(z&&j&&(M.rangeCount!==1||M.anchorNode!==z.node||M.anchorOffset!==z.offset||M.focusNode!==j.node||M.focusOffset!==j.offset)){var A=D.createRange();A.setStart(z.node,z.offset),M.removeAllRanges(),te>Re?(M.addRange(A),M.extend(j.node,j.offset)):(A.setEnd(j.node,j.offset),M.addRange(A))}}}}for(D=[],M=f;M=M.parentNode;)M.nodeType===1&&D.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<D.length;f++){var _=D[f];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}kr=!!ec,tc=ec=null}finally{we=i,Q.p=n,C.T=a}}e.current=t,Ze=2}}function df(){if(Ze===2){Ze=0;var e=_a,t=Gl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=C.T,C.T=null;var n=Q.p;Q.p=2;var i=we;we|=4;try{Uu(e,t.alternate,t)}finally{we=i,Q.p=n,C.T=a}}Ze=3}}function pf(){if(Ze===4||Ze===3){Ze=0,Eh();var e=_a,t=Gl,a=ha,n=Wu;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ze=5:(Ze=0,Gl=_a=null,uf(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Oa=null),rs(a),t=t.stateNode,ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(ln,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=C.T,i=Q.p,Q.p=2,C.T=null;try{for(var r=e.onRecoverableError,p=0;p<n.length;p++){var f=n[p];r(f.value,{componentStack:f.stack})}}finally{C.T=t,Q.p=i}}(ha&3)!==0&&dr(),Qt(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===qo?Ln++:(Ln=0,qo=e):Ln=0,Yn(0)}}function uf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,yn(t)))}function dr(){return cf(),df(),pf(),ff()}function ff(){if(Ze!==5)return!1;var e=_a,t=Lo;Lo=0;var a=rs(ha),n=C.T,i=Q.p;try{Q.p=32>a?32:a,C.T=null,a=Yo,Yo=null;var r=_a,p=ha;if(Ze=0,Gl=_a=null,ha=0,(we&6)!==0)throw Error(d(331));var f=we;if(we|=4,Xu(r.current),Ku(r,r.current,p,a),we=f,Yn(0,!1),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(ln,r)}catch{}return!0}finally{Q.p=i,C.T=n,uf(e,t)}}function mf(e,t,a){t=Et(a,t),t=vo(e.stateNode,t,2),e=Ea(e,t,2),e!==null&&(rn(e,2),Qt(e))}function ze(e,t,a){if(e.tag===3)mf(e,e,a);else for(;t!==null;){if(t.tag===3){mf(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Oa===null||!Oa.has(n))){e=Et(a,e),a=mu(2),n=Ea(t,a,2),n!==null&&(hu(a,n,t,e),rn(n,2),Qt(n));break}}t=t.return}}function Ko(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Ix;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(Bo=!0,i.add(a),e=ng.bind(null,e,t,a),t.then(e,e))}function ng(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ce===e&&(me&a)===a&&(He===4||He===3&&(me&62914560)===me&&300>mt()-nr?(we&2)===0&&Vl(e,0):Uo|=a,ql===me&&(ql=0)),Qt(e)}function hf(e,t){t===0&&(t=od()),e=$a(e,t),e!==null&&(rn(e,t),Qt(e))}function ig(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),hf(e,a)}function rg(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(d(314))}n!==null&&n.delete(t),hf(e,a)}function sg(e,t){return as(e,t)}var pr=null,Ql=null,Qo=!1,ur=!1,Zo=!1,Ba=0;function Qt(e){e!==Ql&&e.next===null&&(Ql===null?pr=Ql=e:Ql=Ql.next=e),ur=!0,Qo||(Qo=!0,cg())}function Yn(e,t){if(!Zo&&ur){Zo=!0;do for(var a=!1,n=pr;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var r=0;else{var p=n.suspendedLanes,f=n.pingedLanes;r=(1<<31-xt(42|e)+1)-1,r&=i&~(p&~f),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,vf(n,r))}else r=me,r=xi(n,n===Ce?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(r&3)===0||nn(n,r)||(a=!0,vf(n,r));n=n.next}while(a);Zo=!1}}function og(){xf()}function xf(){ur=Qo=!1;var e=0;Ba!==0&&vg()&&(e=Ba);for(var t=mt(),a=null,n=pr;n!==null;){var i=n.next,r=gf(n,t);r===0?(n.next=null,a===null?pr=i:a.next=i,i===null&&(Ql=a)):(a=n,(e!==0||(r&3)!==0)&&(ur=!0)),n=i}Ze!==0&&Ze!==5||Yn(e),Ba!==0&&(Ba=0)}function gf(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var p=31-xt(r),f=1<<p,y=i[p];y===-1?((f&a)===0||(f&n)!==0)&&(i[p]=Dh(f,t)):y<=t&&(e.expiredLanes|=f),r&=~f}if(t=Ce,a=me,a=xi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(Se===2||Se===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&ls(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||nn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&ls(n),rs(a)){case 2:case 8:a=rd;break;case 32:a=ui;break;case 268435456:a=sd;break;default:a=ui}return n=bf.bind(null,e),a=as(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&ls(n),e.callbackPriority=2,e.callbackNode=null,2}function bf(e,t){if(Ze!==0&&Ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(dr()&&e.callbackNode!==a)return null;var n=me;return n=xi(e,e===Ce?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Pu(e,n,t),gf(e,mt()),e.callbackNode!=null&&e.callbackNode===a?bf.bind(null,e):null)}function vf(e,t){if(dr())return null;Pu(e,t,!0)}function cg(){jg(function(){(we&6)!==0?as(id,og):xf()})}function Xo(){if(Ba===0){var e=Rl;e===0&&(e=fi,fi<<=1,(fi&261888)===0&&(fi=256)),Ba=e}return Ba}function yf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:yi(""+e)}function jf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function dg(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var r=yf((i[st]||null).action),p=n.submitter;p&&(t=(t=p[st]||null)?yf(t.formAction):p.getAttribute("formAction"),t!==null&&(r=t,p=null));var f=new wi("action","action",null,n,i);e.push({event:f,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Ba!==0){var y=p?jf(i,p):new FormData(i);fo(a,{pending:!0,data:y,method:i.method,action:r},null,y)}}else typeof r=="function"&&(f.preventDefault(),y=p?jf(i,p):new FormData(i),fo(a,{pending:!0,data:y,method:i.method,action:r},r,y))},currentTarget:i}]})}}for(var Jo=0;Jo<Ts.length;Jo++){var $o=Ts[Jo],pg=$o.toLowerCase(),ug=$o[0].toUpperCase()+$o.slice(1);Dt(pg,"on"+ug)}Dt(Fd,"onAnimationEnd"),Dt(Pd,"onAnimationIteration"),Dt(Id,"onAnimationStart"),Dt("dblclick","onDoubleClick"),Dt("focusin","onFocus"),Dt("focusout","onBlur"),Dt(Ax,"onTransitionRun"),Dt(Tx,"onTransitionStart"),Dt(Rx,"onTransitionCancel"),Dt(ep,"onTransitionEnd"),xl("onMouseEnter",["mouseout","mouseover"]),xl("onMouseLeave",["mouseout","mouseover"]),xl("onPointerEnter",["pointerout","pointerover"]),xl("onPointerLeave",["pointerout","pointerover"]),Qa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qn));function kf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var r=void 0;if(t)for(var p=n.length-1;0<=p;p--){var f=n[p],y=f.instance,T=f.currentTarget;if(f=f.listener,y!==r&&i.isPropagationStopped())break e;r=f,i.currentTarget=T;try{r(i)}catch(O){Ei(O)}i.currentTarget=null,r=y}else for(p=0;p<n.length;p++){if(f=n[p],y=f.instance,T=f.currentTarget,f=f.listener,y!==r&&i.isPropagationStopped())break e;r=f,i.currentTarget=T;try{r(i)}catch(O){Ei(O)}i.currentTarget=null,r=y}}}}function ue(e,t){var a=t[ss];a===void 0&&(a=t[ss]=new Set);var n=e+"__bubble";a.has(n)||(Nf(t,e,2,!1),a.add(n))}function Wo(e,t,a){var n=0;t&&(n|=4),Nf(a,e,n,t)}var fr="_reactListening"+Math.random().toString(36).slice(2);function Fo(e){if(!e[fr]){e[fr]=!0,hd.forEach(function(a){a!=="selectionchange"&&(fg.has(a)||Wo(a,!1,e),Wo(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fr]||(t[fr]=!0,Wo("selectionchange",!1,t))}}function Nf(e,t,a,n){switch(Pf(t)){case 2:var i=qg;break;case 8:i=Gg;break;default:i=uc}a=i.bind(null,t,a,e),i=void 0,!xs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function Po(e,t,a,n,i){var r=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var p=n.tag;if(p===3||p===4){var f=n.stateNode.containerInfo;if(f===i)break;if(p===4)for(p=n.return;p!==null;){var y=p.tag;if((y===3||y===4)&&p.stateNode.containerInfo===i)return;p=p.return}for(;f!==null;){if(p=fl(f),p===null)return;if(y=p.tag,y===5||y===6||y===26||y===27){n=r=p;continue e}f=f.parentNode}}n=n.return}Ed(function(){var T=r,O=ms(a),D=[];e:{var R=tp.get(e);if(R!==void 0){var M=wi,J=e;switch(e){case"keypress":if(ki(a)===0)break e;case"keydown":case"keyup":M=rx;break;case"focusin":J="focus",M=ys;break;case"focusout":J="blur",M=ys;break;case"beforeblur":case"afterblur":M=ys;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=Rd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=Jh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=cx;break;case Fd:case Pd:case Id:M=Fh;break;case ep:M=px;break;case"scroll":case"scrollend":M=Zh;break;case"wheel":M=fx;break;case"copy":case"cut":case"paste":M=Ih;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Md;break;case"toggle":case"beforetoggle":M=hx}var te=(t&4)!==0,Re=!te&&(e==="scroll"||e==="scrollend"),z=te?R!==null?R+"Capture":null:R;te=[];for(var j=T,A;j!==null;){var _=j;if(A=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||A===null||z===null||(_=cn(j,z),_!=null&&te.push(Gn(j,_,A))),Re)break;j=j.return}0<te.length&&(R=new M(R,J,null,a,O),D.push({event:R,listeners:te}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",R&&a!==fs&&(J=a.relatedTarget||a.fromElement)&&(fl(J)||J[ul]))break e;if((M||R)&&(R=O.window===O?O:(R=O.ownerDocument)?R.defaultView||R.parentWindow:window,M?(J=a.relatedTarget||a.toElement,M=T,J=J?fl(J):null,J!==null&&(Re=m(J),te=J.tag,J!==Re||te!==5&&te!==27&&te!==6)&&(J=null)):(M=null,J=T),M!==J)){if(te=Rd,_="onMouseLeave",z="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(te=Md,_="onPointerLeave",z="onPointerEnter",j="pointer"),Re=M==null?R:on(M),A=J==null?R:on(J),R=new te(_,j+"leave",M,a,O),R.target=Re,R.relatedTarget=A,_=null,fl(O)===T&&(te=new te(z,j+"enter",J,a,O),te.target=A,te.relatedTarget=Re,_=te),Re=_,M&&J)t:{for(te=mg,z=M,j=J,A=0,_=z;_;_=te(_))A++;_=0;for(var ee=j;ee;ee=te(ee))_++;for(;0<A-_;)z=te(z),A--;for(;0<_-A;)j=te(j),_--;for(;A--;){if(z===j||j!==null&&z===j.alternate){te=z;break t}z=te(z),j=te(j)}te=null}else te=null;M!==null&&wf(D,R,M,te,!1),J!==null&&Re!==null&&wf(D,Re,J,te,!0)}}e:{if(R=T?on(T):window,M=R.nodeName&&R.nodeName.toLowerCase(),M==="select"||M==="input"&&R.type==="file")var ye=Yd;else if(Hd(R))if(qd)ye=Sx;else{ye=Nx;var F=kx}else M=R.nodeName,!M||M.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?T&&us(T.elementType)&&(ye=Yd):ye=wx;if(ye&&(ye=ye(e,T))){Ld(D,ye,a,O);break e}F&&F(e,R,T),e==="focusout"&&T&&R.type==="number"&&T.memoizedProps.value!=null&&ps(R,"number",R.value)}switch(F=T?on(T):window,e){case"focusin":(Hd(F)||F.contentEditable==="true")&&(kl=F,zs=T,gn=null);break;case"focusout":gn=zs=kl=null;break;case"mousedown":Es=!0;break;case"contextmenu":case"mouseup":case"dragend":Es=!1,$d(D,a,O);break;case"selectionchange":if(Ex)break;case"keydown":case"keyup":$d(D,a,O)}var de;if(ks)e:{switch(e){case"compositionstart":var he="onCompositionStart";break e;case"compositionend":he="onCompositionEnd";break e;case"compositionupdate":he="onCompositionUpdate";break e}he=void 0}else jl?Bd(e,a)&&(he="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(he="onCompositionStart");he&&(Od&&a.locale!=="ko"&&(jl||he!=="onCompositionStart"?he==="onCompositionEnd"&&jl&&(de=Ad()):(ya=O,gs="value"in ya?ya.value:ya.textContent,jl=!0)),F=mr(T,he),0<F.length&&(he=new Cd(he,e,null,a,O),D.push({event:he,listeners:F}),de?he.data=de:(de=Ud(a),de!==null&&(he.data=de)))),(de=gx?bx(e,a):vx(e,a))&&(he=mr(T,"onBeforeInput"),0<he.length&&(F=new Cd("onBeforeInput","beforeinput",null,a,O),D.push({event:F,listeners:he}),F.data=de)),dg(D,e,T,a,O)}kf(D,t)})}function Gn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function mr(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=cn(e,a),i!=null&&n.unshift(Gn(e,i,r)),i=cn(e,t),i!=null&&n.push(Gn(e,i,r))),e.tag===3)return n;e=e.return}return[]}function mg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function wf(e,t,a,n,i){for(var r=t._reactName,p=[];a!==null&&a!==n;){var f=a,y=f.alternate,T=f.stateNode;if(f=f.tag,y!==null&&y===n)break;f!==5&&f!==26&&f!==27||T===null||(y=T,i?(T=cn(a,r),T!=null&&p.unshift(Gn(a,T,y))):i||(T=cn(a,r),T!=null&&p.push(Gn(a,T,y)))),a=a.return}p.length!==0&&e.push({event:t,listeners:p})}var hg=/\r\n?/g,xg=/\u0000|\uFFFD/g;function Sf(e){return(typeof e=="string"?e:""+e).replace(hg,`
`).replace(xg,"")}function zf(e,t){return t=Sf(t),Sf(e)===t}function Te(e,t,a,n,i,r){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||bl(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&bl(e,""+n);break;case"className":bi(e,"class",n);break;case"tabIndex":bi(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":bi(e,a,n);break;case"style":Sd(e,n,r);break;case"data":if(t!=="object"){bi(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=yi(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&Te(e,t,"name",i.name,i,null),Te(e,t,"formEncType",i.formEncType,i,null),Te(e,t,"formMethod",i.formMethod,i,null),Te(e,t,"formTarget",i.formTarget,i,null)):(Te(e,t,"encType",i.encType,i,null),Te(e,t,"method",i.method,i,null),Te(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=yi(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=ea);break;case"onScroll":n!=null&&ue("scroll",e);break;case"onScrollEnd":n!=null&&ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=yi(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":ue("beforetoggle",e),ue("toggle",e),gi(e,"popover",n);break;case"xlinkActuate":It(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":It(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":It(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":It(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":It(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":It(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":It(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":It(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":It(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":gi(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Kh.get(a)||a,gi(e,a,n))}}function Io(e,t,a,n,i,r){switch(a){case"style":Sd(e,n,r);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"children":typeof n=="string"?bl(e,n):(typeof n=="number"||typeof n=="bigint")&&bl(e,""+n);break;case"onScroll":n!=null&&ue("scroll",e);break;case"onScrollEnd":n!=null&&ue("scrollend",e);break;case"onClick":n!=null&&(e.onclick=ea);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xd.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),r=e[st]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof n=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):gi(e,a,n)}}}function tt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ue("error",e),ue("load",e);var n=!1,i=!1,r;for(r in a)if(a.hasOwnProperty(r)){var p=a[r];if(p!=null)switch(r){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:Te(e,t,r,p,a,null)}}i&&Te(e,t,"srcSet",a.srcSet,a,null),n&&Te(e,t,"src",a.src,a,null);return;case"input":ue("invalid",e);var f=r=p=i=null,y=null,T=null;for(n in a)if(a.hasOwnProperty(n)){var O=a[n];if(O!=null)switch(n){case"name":i=O;break;case"type":p=O;break;case"checked":y=O;break;case"defaultChecked":T=O;break;case"value":r=O;break;case"defaultValue":f=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(d(137,t));break;default:Te(e,t,n,O,a,null)}}jd(e,r,f,y,T,p,i,!1);return;case"select":ue("invalid",e),n=p=r=null;for(i in a)if(a.hasOwnProperty(i)&&(f=a[i],f!=null))switch(i){case"value":r=f;break;case"defaultValue":p=f;break;case"multiple":n=f;default:Te(e,t,i,f,a,null)}t=r,a=p,e.multiple=!!n,t!=null?gl(e,!!n,t,!1):a!=null&&gl(e,!!n,a,!0);return;case"textarea":ue("invalid",e),r=i=n=null;for(p in a)if(a.hasOwnProperty(p)&&(f=a[p],f!=null))switch(p){case"value":n=f;break;case"defaultValue":i=f;break;case"children":r=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(d(91));break;default:Te(e,t,p,f,a,null)}Nd(e,n,i,r);return;case"option":for(y in a)a.hasOwnProperty(y)&&(n=a[y],n!=null)&&(y==="selected"?e.selected=n&&typeof n!="function"&&typeof n!="symbol":Te(e,t,y,n,a,null));return;case"dialog":ue("beforetoggle",e),ue("toggle",e),ue("cancel",e),ue("close",e);break;case"iframe":case"object":ue("load",e);break;case"video":case"audio":for(n=0;n<qn.length;n++)ue(qn[n],e);break;case"image":ue("error",e),ue("load",e);break;case"details":ue("toggle",e);break;case"embed":case"source":case"link":ue("error",e),ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in a)if(a.hasOwnProperty(T)&&(n=a[T],n!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:Te(e,t,T,n,a,null)}return;default:if(us(t)){for(O in a)a.hasOwnProperty(O)&&(n=a[O],n!==void 0&&Io(e,t,O,n,a,void 0));return}}for(f in a)a.hasOwnProperty(f)&&(n=a[f],n!=null&&Te(e,t,f,n,a,null))}function gg(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,p=null,f=null,y=null,T=null,O=null;for(M in a){var D=a[M];if(a.hasOwnProperty(M)&&D!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":y=D;default:n.hasOwnProperty(M)||Te(e,t,M,null,n,D)}}for(var R in n){var M=n[R];if(D=a[R],n.hasOwnProperty(R)&&(M!=null||D!=null))switch(R){case"type":r=M;break;case"name":i=M;break;case"checked":T=M;break;case"defaultChecked":O=M;break;case"value":p=M;break;case"defaultValue":f=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(d(137,t));break;default:M!==D&&Te(e,t,R,M,n,D)}}ds(e,p,f,y,T,O,r,i);return;case"select":M=p=f=R=null;for(r in a)if(y=a[r],a.hasOwnProperty(r)&&y!=null)switch(r){case"value":break;case"multiple":M=y;default:n.hasOwnProperty(r)||Te(e,t,r,null,n,y)}for(i in n)if(r=n[i],y=a[i],n.hasOwnProperty(i)&&(r!=null||y!=null))switch(i){case"value":R=r;break;case"defaultValue":f=r;break;case"multiple":p=r;default:r!==y&&Te(e,t,i,r,n,y)}t=f,a=p,n=M,R!=null?gl(e,!!a,R,!1):!!n!=!!a&&(t!=null?gl(e,!!a,t,!0):gl(e,!!a,a?[]:"",!1));return;case"textarea":M=R=null;for(f in a)if(i=a[f],a.hasOwnProperty(f)&&i!=null&&!n.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:Te(e,t,f,null,n,i)}for(p in n)if(i=n[p],r=a[p],n.hasOwnProperty(p)&&(i!=null||r!=null))switch(p){case"value":R=i;break;case"defaultValue":M=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(d(91));break;default:i!==r&&Te(e,t,p,i,n,r)}kd(e,R,M);return;case"option":for(var J in a)R=a[J],a.hasOwnProperty(J)&&R!=null&&!n.hasOwnProperty(J)&&(J==="selected"?e.selected=!1:Te(e,t,J,null,n,R));for(y in n)R=n[y],M=a[y],n.hasOwnProperty(y)&&R!==M&&(R!=null||M!=null)&&(y==="selected"?e.selected=R&&typeof R!="function"&&typeof R!="symbol":Te(e,t,y,R,n,M));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)R=a[te],a.hasOwnProperty(te)&&R!=null&&!n.hasOwnProperty(te)&&Te(e,t,te,null,n,R);for(T in n)if(R=n[T],M=a[T],n.hasOwnProperty(T)&&R!==M&&(R!=null||M!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(d(137,t));break;default:Te(e,t,T,R,n,M)}return;default:if(us(t)){for(var Re in a)R=a[Re],a.hasOwnProperty(Re)&&R!==void 0&&!n.hasOwnProperty(Re)&&Io(e,t,Re,void 0,n,R);for(O in n)R=n[O],M=a[O],!n.hasOwnProperty(O)||R===M||R===void 0&&M===void 0||Io(e,t,O,R,n,M);return}}for(var z in a)R=a[z],a.hasOwnProperty(z)&&R!=null&&!n.hasOwnProperty(z)&&Te(e,t,z,null,n,R);for(D in n)R=n[D],M=a[D],!n.hasOwnProperty(D)||R===M||R==null&&M==null||Te(e,t,D,R,n,M)}function Ef(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var i=a[n],r=i.transferSize,p=i.initiatorType,f=i.duration;if(r&&f&&Ef(p)){for(p=0,f=i.responseEnd,n+=1;n<a.length;n++){var y=a[n],T=y.startTime;if(T>f)break;var O=y.transferSize,D=y.initiatorType;O&&Ef(D)&&(y=y.responseEnd,p+=O*(y<f?1:(f-T)/(y-T)))}if(--n,t+=8*(r+p)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ec=null,tc=null;function hr(e){return e.nodeType===9?e:e.ownerDocument}function Af(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Tf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ac(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var lc=null;function vg(){var e=window.event;return e&&e.type==="popstate"?e===lc?!1:(lc=e,!0):(lc=null,!1)}var Rf=typeof setTimeout=="function"?setTimeout:void 0,yg=typeof clearTimeout=="function"?clearTimeout:void 0,Cf=typeof Promise=="function"?Promise:void 0,jg=typeof queueMicrotask=="function"?queueMicrotask:typeof Cf<"u"?function(e){return Cf.resolve(null).then(e).catch(kg)}:Rf;function kg(e){setTimeout(function(){throw e})}function Ua(e){return e==="head"}function Mf(e,t){var a=t,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(i),$l(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")Vn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Vn(a);for(var r=a.firstChild;r;){var p=r.nextSibling,f=r.nodeName;r[sn]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=p}}else a==="body"&&Vn(e.ownerDocument.body);a=i}while(a);$l(t)}function Of(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function nc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":nc(a),os(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ng(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[sn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Mt(e.nextSibling),e===null)break}return null}function wg(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Mt(e.nextSibling),e===null))return null;return e}function _f(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Mt(e.nextSibling),e===null))return null;return e}function ic(e){return e.data==="$?"||e.data==="$~"}function rc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Sg(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var sc=null;function Df(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Mt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Bf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Uf(e,t,a){switch(t=hr(a),e){case"html":if(e=t.documentElement,!e)throw Error(d(452));return e;case"head":if(e=t.head,!e)throw Error(d(453));return e;case"body":if(e=t.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function Vn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);os(e)}var Ot=new Map,Hf=new Set;function xr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var xa=Q.d;Q.d={f:zg,r:Eg,D:Ag,C:Tg,L:Rg,m:Cg,X:Og,S:Mg,M:_g};function zg(){var e=xa.f(),t=sr();return e||t}function Eg(e){var t=ml(e);t!==null&&t.tag===5&&t.type==="form"?eu(t):xa.r(e)}var Zl=typeof document>"u"?null:document;function Lf(e,t,a){var n=Zl;if(n&&typeof t=="string"&&t){var i=St(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Hf.has(i)||(Hf.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),tt(t,"link",e),Je(t),n.head.appendChild(t)))}}function Ag(e){xa.D(e),Lf("dns-prefetch",e,null)}function Tg(e,t){xa.C(e,t),Lf("preconnect",e,t)}function Rg(e,t,a){xa.L(e,t,a);var n=Zl;if(n&&e&&t){var i='link[rel="preload"][as="'+St(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+St(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+St(a.imageSizes)+'"]')):i+='[href="'+St(e)+'"]';var r=i;switch(t){case"style":r=Xl(e);break;case"script":r=Jl(e)}Ot.has(r)||(e=N({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ot.set(r,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(Kn(r))||t==="script"&&n.querySelector(Qn(r))||(t=n.createElement("link"),tt(t,"link",e),Je(t),n.head.appendChild(t)))}}function Cg(e,t){xa.m(e,t);var a=Zl;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+St(n)+'"][href="'+St(e)+'"]',r=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Jl(e)}if(!Ot.has(r)&&(e=N({rel:"modulepreload",href:e},t),Ot.set(r,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Qn(r)))return}n=a.createElement("link"),tt(n,"link",e),Je(n),a.head.appendChild(n)}}}function Mg(e,t,a){xa.S(e,t,a);var n=Zl;if(n&&e){var i=hl(n).hoistableStyles,r=Xl(e);t=t||"default";var p=i.get(r);if(!p){var f={loading:0,preload:null};if(p=n.querySelector(Kn(r)))f.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ot.get(r))&&oc(e,a);var y=p=n.createElement("link");Je(y),tt(y,"link",e),y._p=new Promise(function(T,O){y.onload=T,y.onerror=O}),y.addEventListener("load",function(){f.loading|=1}),y.addEventListener("error",function(){f.loading|=2}),f.loading|=4,gr(p,t,n)}p={type:"stylesheet",instance:p,count:1,state:f},i.set(r,p)}}}function Og(e,t){xa.X(e,t);var a=Zl;if(a&&e){var n=hl(a).hoistableScripts,i=Jl(e),r=n.get(i);r||(r=a.querySelector(Qn(i)),r||(e=N({src:e,async:!0},t),(t=Ot.get(i))&&cc(e,t),r=a.createElement("script"),Je(r),tt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function _g(e,t){xa.M(e,t);var a=Zl;if(a&&e){var n=hl(a).hoistableScripts,i=Jl(e),r=n.get(i);r||(r=a.querySelector(Qn(i)),r||(e=N({src:e,async:!0,type:"module"},t),(t=Ot.get(i))&&cc(e,t),r=a.createElement("script"),Je(r),tt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function Yf(e,t,a,n){var i=(i=ce.current)?xr(i):null;if(!i)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Xl(a.href),a=hl(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Xl(a.href);var r=hl(i).hoistableStyles,p=r.get(e);if(p||(i=i.ownerDocument||i,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,p),(r=i.querySelector(Kn(e)))&&!r._p&&(p.instance=r,p.state.loading=5),Ot.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ot.set(e,a),r||Dg(i,e,a,p.state))),t&&n===null)throw Error(d(528,""));return p}if(t&&n!==null)throw Error(d(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Jl(a),a=hl(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function Xl(e){return'href="'+St(e)+'"'}function Kn(e){return'link[rel="stylesheet"]['+e+"]"}function qf(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function Dg(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),tt(t,"link",a),Je(t),e.head.appendChild(t))}function Jl(e){return'[src="'+St(e)+'"]'}function Qn(e){return"script[async]"+e}function Gf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+St(a.href)+'"]');if(n)return t.instance=n,Je(n),n;var i=N({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Je(n),tt(n,"style",i),gr(n,a.precedence,e),t.instance=n;case"stylesheet":i=Xl(a.href);var r=e.querySelector(Kn(i));if(r)return t.state.loading|=4,t.instance=r,Je(r),r;n=qf(a),(i=Ot.get(i))&&oc(n,i),r=(e.ownerDocument||e).createElement("link"),Je(r);var p=r;return p._p=new Promise(function(f,y){p.onload=f,p.onerror=y}),tt(r,"link",n),t.state.loading|=4,gr(r,a.precedence,e),t.instance=r;case"script":return r=Jl(a.src),(i=e.querySelector(Qn(r)))?(t.instance=i,Je(i),i):(n=a,(i=Ot.get(r))&&(n=N({},a),cc(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Je(i),tt(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(d(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,gr(n,a.precedence,e));return t.instance}function gr(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,r=i,p=0;p<n.length;p++){var f=n[p];if(f.dataset.precedence===t)r=f;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function oc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function cc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var br=null;function Vf(e,t,a){if(br===null){var n=new Map,i=br=new Map;i.set(a,n)}else i=br,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var r=a[i];if(!(r[sn]||r[Fe]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var p=r.getAttribute(t)||"";p=e+p;var f=n.get(p);f?f.push(r):n.set(p,[r])}}return n}function Kf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Bg(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Qf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Ug(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=Xl(n.href),r=t.querySelector(Kn(i));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=vr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,Je(r);return}r=t.ownerDocument||t,n=qf(n),(i=Ot.get(i))&&oc(n,i),r=r.createElement("link"),Je(r);var p=r;p._p=new Promise(function(f,y){p.onload=f,p.onerror=y}),tt(r,"link",n),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=vr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var dc=0;function Hg(e,t){return e.stylesheets&&e.count===0&&jr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&jr(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&dc===0&&(dc=62500*bg());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&jr(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>dc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function vr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)jr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var yr=null;function jr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,yr=new Map,t.forEach(Lg,e),yr=null,vr.call(e))}function Lg(e,t){if(!(t.state.loading&4)){var a=yr.get(e);if(a)var n=a.get(null);else{a=new Map,yr.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var p=i[r];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(a.set(p.dataset.precedence,p),n=p)}n&&a.set(null,n)}i=t.instance,p=i.getAttribute("data-precedence"),r=a.get(p)||n,r===n&&a.set(null,i),a.set(p,i),this.count++,n=vr.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Zn={$$typeof:H,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function Yg(e,t,a,n,i,r,p,f,y){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ns(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ns(0),this.hiddenUpdates=ns(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function Zf(e,t,a,n,i,r,p,f,y,T,O,D){return e=new Yg(e,t,a,p,y,T,O,D,f),t=1,r===!0&&(t|=24),r=bt(3,null,null,t),e.current=r,r.stateNode=e,t=Gs(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:n,isDehydrated:a,cache:t},Zs(r),e}function Xf(e){return e?(e=Sl,e):Sl}function Jf(e,t,a,n,i,r){i=Xf(i),n.context===null?n.context=i:n.pendingContext=i,n=za(t),n.payload={element:a},r=r===void 0?null:r,r!==null&&(n.callback=r),a=Ea(e,n,t),a!==null&&(ft(a,e,t),wn(a,e,t))}function $f(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function pc(e,t){$f(e,t),(e=e.alternate)&&$f(e,t)}function Wf(e){if(e.tag===13||e.tag===31){var t=$a(e,67108864);t!==null&&ft(t,e,67108864),pc(e,67108864)}}function Ff(e){if(e.tag===13||e.tag===31){var t=Nt();t=is(t);var a=$a(e,t);a!==null&&ft(a,e,t),pc(e,t)}}var kr=!0;function qg(e,t,a,n){var i=C.T;C.T=null;var r=Q.p;try{Q.p=2,uc(e,t,a,n)}finally{Q.p=r,C.T=i}}function Gg(e,t,a,n){var i=C.T;C.T=null;var r=Q.p;try{Q.p=8,uc(e,t,a,n)}finally{Q.p=r,C.T=i}}function uc(e,t,a,n){if(kr){var i=fc(n);if(i===null)Po(e,t,n,Nr,a),If(e,n);else if(Kg(i,e,t,a,n))n.stopPropagation();else if(If(e,n),t&4&&-1<Vg.indexOf(e)){for(;i!==null;){var r=ml(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var p=Ka(r.pendingLanes);if(p!==0){var f=r;for(f.pendingLanes|=2,f.entangledLanes|=2;p;){var y=1<<31-xt(p);f.entanglements[1]|=y,p&=~y}Qt(r),(we&6)===0&&(ir=mt()+500,Yn(0))}}break;case 31:case 13:f=$a(r,2),f!==null&&ft(f,r,2),sr(),pc(r,2)}if(r=fc(n),r===null&&Po(e,t,n,Nr,a),r===i)break;i=r}i!==null&&n.stopPropagation()}else Po(e,t,n,null,a)}}function fc(e){return e=ms(e),mc(e)}var Nr=null;function mc(e){if(Nr=null,e=fl(e),e!==null){var t=m(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=x(t),e!==null)return e;e=null}else if(a===31){if(e=g(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Nr=e,null}function Pf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ah()){case id:return 2;case rd:return 8;case ui:case Th:return 32;case sd:return 268435456;default:return 32}default:return 32}}var hc=!1,Ha=null,La=null,Ya=null,Xn=new Map,Jn=new Map,qa=[],Vg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function If(e,t){switch(e){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":Xn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jn.delete(t.pointerId)}}function $n(e,t,a,n,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:r,targetContainers:[i]},t!==null&&(t=ml(t),t!==null&&Wf(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Kg(e,t,a,n,i){switch(t){case"focusin":return Ha=$n(Ha,e,t,a,n,i),!0;case"dragenter":return La=$n(La,e,t,a,n,i),!0;case"mouseover":return Ya=$n(Ya,e,t,a,n,i),!0;case"pointerover":var r=i.pointerId;return Xn.set(r,$n(Xn.get(r)||null,e,t,a,n,i)),!0;case"gotpointercapture":return r=i.pointerId,Jn.set(r,$n(Jn.get(r)||null,e,t,a,n,i)),!0}return!1}function em(e){var t=fl(e.target);if(t!==null){var a=m(t);if(a!==null){if(t=a.tag,t===13){if(t=x(a),t!==null){e.blockedOn=t,fd(e.priority,function(){Ff(a)});return}}else if(t===31){if(t=g(a),t!==null){e.blockedOn=t,fd(e.priority,function(){Ff(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=fc(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);fs=n,a.target.dispatchEvent(n),fs=null}else return t=ml(a),t!==null&&Wf(t),e.blockedOn=a,!1;t.shift()}return!0}function tm(e,t,a){wr(e)&&a.delete(t)}function Qg(){hc=!1,Ha!==null&&wr(Ha)&&(Ha=null),La!==null&&wr(La)&&(La=null),Ya!==null&&wr(Ya)&&(Ya=null),Xn.forEach(tm),Jn.forEach(tm)}function Sr(e,t){e.blockedOn===t&&(e.blockedOn=null,hc||(hc=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Qg)))}var zr=null;function am(e){zr!==e&&(zr=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){zr===e&&(zr=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(mc(n||a)===null)continue;break}var r=ml(a);r!==null&&(e.splice(t,3),t-=3,fo(r,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function $l(e){function t(y){return Sr(y,e)}Ha!==null&&Sr(Ha,e),La!==null&&Sr(La,e),Ya!==null&&Sr(Ya,e),Xn.forEach(t),Jn.forEach(t);for(var a=0;a<qa.length;a++){var n=qa[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<qa.length&&(a=qa[0],a.blockedOn===null);)em(a),a.blockedOn===null&&qa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],r=a[n+1],p=i[st]||null;if(typeof r=="function")p||am(a);else if(p){var f=null;if(r&&r.hasAttribute("formAction")){if(i=r,p=r[st]||null)f=p.formAction;else if(mc(i)!==null)continue}else f=p.action;typeof f=="function"?a[n+1]=f:(a.splice(n,3),n-=3),am(a)}}}function lm(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(p){return i=p})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function xc(e){this._internalRoot=e}Er.prototype.render=xc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));var a=t.current,n=Nt();Jf(a,n,e,t,null,null)},Er.prototype.unmount=xc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Jf(e.current,2,null,e,null,null),sr(),t[ul]=null}};function Er(e){this._internalRoot=e}Er.prototype.unstable_scheduleHydration=function(e){if(e){var t=ud();e={blockedOn:null,target:e,priority:t};for(var a=0;a<qa.length&&t!==0&&t<qa[a].priority;a++);qa.splice(a,0,e),a===0&&em(e)}};var nm=c.version;if(nm!=="19.2.4")throw Error(d(527,nm,"19.2.4"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=h(t),e=e!==null?w(e):null,e=e===null?null:e.stateNode,e};var Zg={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ar=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ar.isDisabled&&Ar.supportsFiber)try{ln=Ar.inject(Zg),ht=Ar}catch{}}return Fn.createRoot=function(e,t){if(!u(e))throw Error(d(299));var a=!1,n="",i=du,r=pu,p=uu;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError)),t=Zf(e,1,!1,null,null,a,n,null,i,r,p,lm),e[ul]=t.current,Fo(e),new xc(t)},Fn.hydrateRoot=function(e,t,a){if(!u(e))throw Error(d(299));var n=!1,i="",r=du,p=pu,f=uu,y=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(p=a.onCaughtError),a.onRecoverableError!==void 0&&(f=a.onRecoverableError),a.formState!==void 0&&(y=a.formState)),t=Zf(e,1,!0,t,a??null,n,i,y,r,p,f,lm),t.context=Xf(null),a=t.current,n=Nt(),n=is(n),i=za(n),i.callback=null,Ea(a,i,n),a=n,t.current.lanes=a,rn(t,a),Qt(t),e[ul]=t.current,Fo(e),new Er(t)},Fn.version="19.2.4",Fn}var mm;function a0(){if(mm)return vc.exports;mm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(c){console.error(c)}}return s(),vc.exports=t0(),vc.exports}var l0=a0();var hm="popstate";function xm(s){return typeof s=="object"&&s!=null&&"pathname"in s&&"search"in s&&"hash"in s&&"state"in s&&"key"in s}function n0(s={}){function c(d,u){let m=u.state?.masked,{pathname:x,search:g,hash:b}=m||d.location;return Dc("",{pathname:x,search:g,hash:b},u.state&&u.state.usr||null,u.state&&u.state.key||"default",m?{pathname:d.location.pathname,search:d.location.search,hash:d.location.hash}:void 0)}function o(d,u){return typeof u=="string"?u:ni(u)}return r0(c,o,null,s)}function Xe(s,c){if(s===!1||s===null||typeof s>"u")throw new Error(c)}function Xt(s,c){if(!s){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function i0(){return Math.random().toString(36).substring(2,10)}function gm(s,c){return{usr:s.state,key:s.key,idx:c,masked:s.unstable_mask?{pathname:s.pathname,search:s.search,hash:s.hash}:void 0}}function Dc(s,c,o=null,d,u){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof c=="string"?ri(c):c,state:o,key:c&&c.key||d||i0(),unstable_mask:u}}function ni({pathname:s="/",search:c="",hash:o=""}){return c&&c!=="?"&&(s+=c.charAt(0)==="?"?c:"?"+c),o&&o!=="#"&&(s+=o.charAt(0)==="#"?o:"#"+o),s}function ri(s){let c={};if(s){let o=s.indexOf("#");o>=0&&(c.hash=s.substring(o),s=s.substring(0,o));let d=s.indexOf("?");d>=0&&(c.search=s.substring(d),s=s.substring(0,d)),s&&(c.pathname=s)}return c}function r0(s,c,o,d={}){let{window:u=document.defaultView,v5Compat:m=!1}=d,x=u.history,g="POP",b=null,h=w();h==null&&(h=0,x.replaceState({...x.state,idx:h},""));function w(){return(x.state||{idx:null}).idx}function N(){g="POP";let q=w(),Y=q==null?null:q-h;h=q,b&&b({action:g,location:G.location,delta:Y})}function U(q,Y){g="PUSH";let V=xm(q)?q:Dc(G.location,q,Y);h=w()+1;let H=gm(V,h),X=G.createHref(V.unstable_mask||V);try{x.pushState(H,"",X)}catch(le){if(le instanceof DOMException&&le.name==="DataCloneError")throw le;u.location.assign(X)}m&&b&&b({action:g,location:G.location,delta:1})}function K(q,Y){g="REPLACE";let V=xm(q)?q:Dc(G.location,q,Y);h=w();let H=gm(V,h),X=G.createHref(V.unstable_mask||V);x.replaceState(H,"",X),m&&b&&b({action:g,location:G.location,delta:0})}function S(q){return s0(q)}let G={get action(){return g},get location(){return s(u,x)},listen(q){if(b)throw new Error("A history only accepts one active listener");return u.addEventListener(hm,N),b=q,()=>{u.removeEventListener(hm,N),b=null}},createHref(q){return c(u,q)},createURL:S,encodeLocation(q){let Y=S(q);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:U,replace:K,go(q){return x.go(q)}};return G}function s0(s,c=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),Xe(o,"No window.location.(origin|href) available to create URL");let d=typeof s=="string"?s:ni(s);return d=d.replace(/ $/,"%20"),!c&&d.startsWith("//")&&(d=o+d),new URL(d,o)}function Km(s,c,o="/"){return o0(s,c,o,!1)}function o0(s,c,o,d){let u=typeof c=="string"?ri(c):c,m=ga(u.pathname||"/",o);if(m==null)return null;let x=Qm(s);c0(x);let g=null;for(let b=0;g==null&&b<x.length;++b){let h=y0(m);g=b0(x[b],h,d)}return g}function Qm(s,c=[],o=[],d="",u=!1){let m=(x,g,b=u,h)=>{let w={relativePath:h===void 0?x.path||"":h,caseSensitive:x.caseSensitive===!0,childrenIndex:g,route:x};if(w.relativePath.startsWith("/")){if(!w.relativePath.startsWith(d)&&b)return;Xe(w.relativePath.startsWith(d),`Absolute route path "${w.relativePath}" nested under path "${d}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),w.relativePath=w.relativePath.slice(d.length)}let N=Zt([d,w.relativePath]),U=o.concat(w);x.children&&x.children.length>0&&(Xe(x.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${N}".`),Qm(x.children,c,U,N,b)),!(x.path==null&&!x.index)&&c.push({path:N,score:x0(N,x.index),routesMeta:U})};return s.forEach((x,g)=>{if(x.path===""||!x.path?.includes("?"))m(x,g);else for(let b of Zm(x.path))m(x,g,!0,b)}),c}function Zm(s){let c=s.split("/");if(c.length===0)return[];let[o,...d]=c,u=o.endsWith("?"),m=o.replace(/\?$/,"");if(d.length===0)return u?[m,""]:[m];let x=Zm(d.join("/")),g=[];return g.push(...x.map(b=>b===""?m:[m,b].join("/"))),u&&g.push(...x),g.map(b=>s.startsWith("/")&&b===""?"/":b)}function c0(s){s.sort((c,o)=>c.score!==o.score?o.score-c.score:g0(c.routesMeta.map(d=>d.childrenIndex),o.routesMeta.map(d=>d.childrenIndex)))}var d0=/^:[\w-]+$/,p0=3,u0=2,f0=1,m0=10,h0=-2,bm=s=>s==="*";function x0(s,c){let o=s.split("/"),d=o.length;return o.some(bm)&&(d+=h0),c&&(d+=u0),o.filter(u=>!bm(u)).reduce((u,m)=>u+(d0.test(m)?p0:m===""?f0:m0),d)}function g0(s,c){return s.length===c.length&&s.slice(0,-1).every((d,u)=>d===c[u])?s[s.length-1]-c[c.length-1]:0}function b0(s,c,o=!1){let{routesMeta:d}=s,u={},m="/",x=[];for(let g=0;g<d.length;++g){let b=d[g],h=g===d.length-1,w=m==="/"?c:c.slice(m.length)||"/",N=Gr({path:b.relativePath,caseSensitive:b.caseSensitive,end:h},w),U=b.route;if(!N&&h&&o&&!d[d.length-1].route.index&&(N=Gr({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},w)),!N)return null;Object.assign(u,N.params),x.push({params:u,pathname:Zt([m,N.pathname]),pathnameBase:w0(Zt([m,N.pathnameBase])),route:U}),N.pathnameBase!=="/"&&(m=Zt([m,N.pathnameBase]))}return x}function Gr(s,c){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[o,d]=v0(s.path,s.caseSensitive,s.end),u=c.match(o);if(!u)return null;let m=u[0],x=m.replace(/(.)\/+$/,"$1"),g=u.slice(1);return{params:d.reduce((h,{paramName:w,isOptional:N},U)=>{if(w==="*"){let S=g[U]||"";x=m.slice(0,m.length-S.length).replace(/(.)\/+$/,"$1")}const K=g[U];return N&&!K?h[w]=void 0:h[w]=(K||"").replace(/%2F/g,"/"),h},{}),pathname:m,pathnameBase:x,pattern:s}}function v0(s,c=!1,o=!0){Xt(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let d=[],u="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(x,g,b,h,w)=>{if(d.push({paramName:g,isOptional:b!=null}),b){let N=w.charAt(h+x.length);return N&&N!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(d.push({paramName:"*"}),u+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?u+="\\/*$":s!==""&&s!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,c?void 0:"i"),d]}function y0(s){try{return s.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return Xt(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),s}}function ga(s,c){if(c==="/")return s;if(!s.toLowerCase().startsWith(c.toLowerCase()))return null;let o=c.endsWith("/")?c.length-1:c.length,d=s.charAt(o);return d&&d!=="/"?null:s.slice(o)||"/"}var j0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function k0(s,c="/"){let{pathname:o,search:d="",hash:u=""}=typeof s=="string"?ri(s):s,m;return o?(o=o.replace(/\/\/+/g,"/"),o.startsWith("/")?m=vm(o.substring(1),"/"):m=vm(o,c)):m=c,{pathname:m,search:S0(d),hash:z0(u)}}function vm(s,c){let o=c.replace(/\/+$/,"").split("/");return s.split("/").forEach(u=>{u===".."?o.length>1&&o.pop():u!=="."&&o.push(u)}),o.length>1?o.join("/"):"/"}function Nc(s,c,o,d){return`Cannot include a '${s}' character in a manually specified \`to.${c}\` field [${JSON.stringify(d)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function N0(s){return s.filter((c,o)=>o===0||c.route.path&&c.route.path.length>0)}function Xm(s){let c=N0(s);return c.map((o,d)=>d===c.length-1?o.pathname:o.pathnameBase)}function Qc(s,c,o,d=!1){let u;typeof s=="string"?u=ri(s):(u={...s},Xe(!u.pathname||!u.pathname.includes("?"),Nc("?","pathname","search",u)),Xe(!u.pathname||!u.pathname.includes("#"),Nc("#","pathname","hash",u)),Xe(!u.search||!u.search.includes("#"),Nc("#","search","hash",u)));let m=s===""||u.pathname==="",x=m?"/":u.pathname,g;if(x==null)g=o;else{let N=c.length-1;if(!d&&x.startsWith("..")){let U=x.split("/");for(;U[0]==="..";)U.shift(),N-=1;u.pathname=U.join("/")}g=N>=0?c[N]:"/"}let b=k0(u,g),h=x&&x!=="/"&&x.endsWith("/"),w=(m||x===".")&&o.endsWith("/");return!b.pathname.endsWith("/")&&(h||w)&&(b.pathname+="/"),b}var Zt=s=>s.join("/").replace(/\/\/+/g,"/"),w0=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),S0=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,z0=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,E0=class{constructor(s,c,o,d=!1){this.status=s,this.statusText=c||"",this.internal=d,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}};function A0(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function T0(s){return s.map(c=>c.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Jm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function $m(s,c){let o=s;if(typeof o!="string"||!j0.test(o))return{absoluteURL:void 0,isExternal:!1,to:o};let d=o,u=!1;if(Jm)try{let m=new URL(window.location.href),x=o.startsWith("//")?new URL(m.protocol+o):new URL(o),g=ga(x.pathname,c);x.origin===m.origin&&g!=null?o=g+x.search+x.hash:u=!0}catch{Xt(!1,`<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:d,isExternal:u,to:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Wm=["POST","PUT","PATCH","DELETE"];new Set(Wm);var R0=["GET",...Wm];new Set(R0);var en=v.createContext(null);en.displayName="DataRouter";var Zr=v.createContext(null);Zr.displayName="DataRouterState";var C0=v.createContext(!1),Fm=v.createContext({isTransitioning:!1});Fm.displayName="ViewTransition";var M0=v.createContext(new Map);M0.displayName="Fetchers";var O0=v.createContext(null);O0.displayName="Await";var _t=v.createContext(null);_t.displayName="Navigation";var Xr=v.createContext(null);Xr.displayName="Location";var Wt=v.createContext({outlet:null,matches:[],isDataRoute:!1});Wt.displayName="Route";var Zc=v.createContext(null);Zc.displayName="RouteError";var Pm="REACT_ROUTER_ERROR",_0="REDIRECT",D0="ROUTE_ERROR_RESPONSE";function B0(s){if(s.startsWith(`${Pm}:${_0}:{`))try{let c=JSON.parse(s.slice(28));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.location=="string"&&typeof c.reloadDocument=="boolean"&&typeof c.replace=="boolean")return c}catch{}}function U0(s){if(s.startsWith(`${Pm}:${D0}:{`))try{let c=JSON.parse(s.slice(40));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string")return new E0(c.status,c.statusText,c.data)}catch{}}function H0(s,{relative:c}={}){Xe(si(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:d}=v.useContext(_t),{hash:u,pathname:m,search:x}=oi(s,{relative:c}),g=m;return o!=="/"&&(g=m==="/"?o:Zt([o,m])),d.createHref({pathname:g,search:x,hash:u})}function si(){return v.useContext(Xr)!=null}function qt(){return Xe(si(),"useLocation() may be used only in the context of a <Router> component."),v.useContext(Xr).location}var Im="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function eh(s){v.useContext(_t).static||v.useLayoutEffect(s)}function Ft(){let{isDataRoute:s}=v.useContext(Wt);return s?P0():L0()}function L0(){Xe(si(),"useNavigate() may be used only in the context of a <Router> component.");let s=v.useContext(en),{basename:c,navigator:o}=v.useContext(_t),{matches:d}=v.useContext(Wt),{pathname:u}=qt(),m=JSON.stringify(Xm(d)),x=v.useRef(!1);return eh(()=>{x.current=!0}),v.useCallback((b,h={})=>{if(Xt(x.current,Im),!x.current)return;if(typeof b=="number"){o.go(b);return}let w=Qc(b,JSON.parse(m),u,h.relative==="path");s==null&&c!=="/"&&(w.pathname=w.pathname==="/"?c:Zt([c,w.pathname])),(h.replace?o.replace:o.push)(w,h.state,h)},[c,o,m,u,s])}v.createContext(null);function Y0(){let{matches:s}=v.useContext(Wt),c=s[s.length-1];return c?c.params:{}}function oi(s,{relative:c}={}){let{matches:o}=v.useContext(Wt),{pathname:d}=qt(),u=JSON.stringify(Xm(o));return v.useMemo(()=>Qc(s,JSON.parse(u),d,c==="path"),[s,u,d,c])}function q0(s,c){return th(s)}function th(s,c,o){Xe(si(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=v.useContext(_t),{matches:u}=v.useContext(Wt),m=u[u.length-1],x=m?m.params:{},g=m?m.pathname:"/",b=m?m.pathnameBase:"/",h=m&&m.route;{let q=h&&h.path||"";lh(g,!h||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let w=qt(),N;N=w;let U=N.pathname||"/",K=U;if(b!=="/"){let q=b.replace(/^\//,"").split("/");K="/"+U.replace(/^\//,"").split("/").slice(q.length).join("/")}let S=Km(s,{pathname:K});return Xt(h||S!=null,`No routes matched location "${N.pathname}${N.search}${N.hash}" `),Xt(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),Z0(S&&S.map(q=>Object.assign({},q,{params:Object.assign({},x,q.params),pathname:Zt([b,d.encodeLocation?d.encodeLocation(q.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?b:Zt([b,d.encodeLocation?d.encodeLocation(q.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathnameBase])})),u,o)}function G0(){let s=F0(),c=A0(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),o=s instanceof Error?s.stack:null,d="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:d},m={padding:"2px 4px",backgroundColor:d},x=null;return console.error("Error handled by React Router default ErrorBoundary:",s),x=v.createElement(v.Fragment,null,v.createElement("p",null,"💿 Hey developer 👋"),v.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",v.createElement("code",{style:m},"ErrorBoundary")," or"," ",v.createElement("code",{style:m},"errorElement")," prop on your route.")),v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},c),o?v.createElement("pre",{style:u},o):null,x)}var V0=v.createElement(G0,null),ah=class extends v.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,c){return c.location!==s.location||c.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:c.error,location:c.location,revalidation:s.revalidation||c.revalidation}}componentDidCatch(s,c){this.props.onError?this.props.onError(s,c):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const o=U0(s.digest);o&&(s=o)}let c=s!==void 0?v.createElement(Wt.Provider,{value:this.props.routeContext},v.createElement(Zc.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?v.createElement(K0,{error:s},c):c}};ah.contextType=C0;var wc=new WeakMap;function K0({children:s,error:c}){let{basename:o}=v.useContext(_t);if(typeof c=="object"&&c&&"digest"in c&&typeof c.digest=="string"){let d=B0(c.digest);if(d){let u=wc.get(c);if(u)throw u;let m=$m(d.location,o);if(Jm&&!wc.get(c))if(m.isExternal||d.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const x=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:d.replace}));throw wc.set(c,x),x}return v.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return s}function Q0({routeContext:s,match:c,children:o}){let d=v.useContext(en);return d&&d.static&&d.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=c.route.id),v.createElement(Wt.Provider,{value:s},o)}function Z0(s,c=[],o){let d=o?.state;if(s==null){if(!d)return null;if(d.errors)s=d.matches;else if(c.length===0&&!d.initialized&&d.matches.length>0)s=d.matches;else return null}let u=s,m=d?.errors;if(m!=null){let w=u.findIndex(N=>N.route.id&&m?.[N.route.id]!==void 0);Xe(w>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),u=u.slice(0,Math.min(u.length,w+1))}let x=!1,g=-1;if(o&&d){x=d.renderFallback;for(let w=0;w<u.length;w++){let N=u[w];if((N.route.HydrateFallback||N.route.hydrateFallbackElement)&&(g=w),N.route.id){let{loaderData:U,errors:K}=d,S=N.route.loader&&!U.hasOwnProperty(N.route.id)&&(!K||K[N.route.id]===void 0);if(N.route.lazy||S){o.isStatic&&(x=!0),g>=0?u=u.slice(0,g+1):u=[u[0]];break}}}}let b=o?.onError,h=d&&b?(w,N)=>{b(w,{location:d.location,params:d.matches?.[0]?.params??{},unstable_pattern:T0(d.matches),errorInfo:N})}:void 0;return u.reduceRight((w,N,U)=>{let K,S=!1,G=null,q=null;d&&(K=m&&N.route.id?m[N.route.id]:void 0,G=N.route.errorElement||V0,x&&(g<0&&U===0?(lh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,q=null):g===U&&(S=!0,q=N.route.hydrateFallbackElement||null)));let Y=c.concat(u.slice(0,U+1)),V=()=>{let H;return K?H=G:S?H=q:N.route.Component?H=v.createElement(N.route.Component,null):N.route.element?H=N.route.element:H=w,v.createElement(Q0,{match:N,routeContext:{outlet:w,matches:Y,isDataRoute:d!=null},children:H})};return d&&(N.route.ErrorBoundary||N.route.errorElement||U===0)?v.createElement(ah,{location:d.location,revalidation:d.revalidation,component:G,error:K,children:V(),routeContext:{outlet:null,matches:Y,isDataRoute:!0},onError:h}):V()},null)}function Xc(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function X0(s){let c=v.useContext(en);return Xe(c,Xc(s)),c}function J0(s){let c=v.useContext(Zr);return Xe(c,Xc(s)),c}function $0(s){let c=v.useContext(Wt);return Xe(c,Xc(s)),c}function Jc(s){let c=$0(s),o=c.matches[c.matches.length-1];return Xe(o.route.id,`${s} can only be used on routes that contain a unique "id"`),o.route.id}function W0(){return Jc("useRouteId")}function F0(){let s=v.useContext(Zc),c=J0("useRouteError"),o=Jc("useRouteError");return s!==void 0?s:c.errors?.[o]}function P0(){let{router:s}=X0("useNavigate"),c=Jc("useNavigate"),o=v.useRef(!1);return eh(()=>{o.current=!0}),v.useCallback(async(u,m={})=>{Xt(o.current,Im),o.current&&(typeof u=="number"?await s.navigate(u):await s.navigate(u,{fromRouteId:c,...m}))},[s,c])}var ym={};function lh(s,c,o){!c&&!ym[s]&&(ym[s]=!0,Xt(!1,o))}v.memo(I0);function I0({routes:s,future:c,state:o,isStatic:d,onError:u}){return th(s,void 0,{state:o,isStatic:d,onError:u})}function eb({basename:s="/",children:c=null,location:o,navigationType:d="POP",navigator:u,static:m=!1,unstable_useTransitions:x}){Xe(!si(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=s.replace(/^\/*/,"/"),b=v.useMemo(()=>({basename:g,navigator:u,static:m,unstable_useTransitions:x,future:{}}),[g,u,m,x]);typeof o=="string"&&(o=ri(o));let{pathname:h="/",search:w="",hash:N="",state:U=null,key:K="default",unstable_mask:S}=o,G=v.useMemo(()=>{let q=ga(h,g);return q==null?null:{location:{pathname:q,search:w,hash:N,state:U,key:K,unstable_mask:S},navigationType:d}},[g,h,w,N,U,K,d,S]);return Xt(G!=null,`<Router basename="${g}"> is not able to match the URL "${h}${w}${N}" because it does not start with the basename, so the <Router> won't render anything.`),G==null?null:v.createElement(_t.Provider,{value:b},v.createElement(Xr.Provider,{children:c,value:G}))}var Lr="get",Yr="application/x-www-form-urlencoded";function Jr(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function tb(s){return Jr(s)&&s.tagName.toLowerCase()==="button"}function ab(s){return Jr(s)&&s.tagName.toLowerCase()==="form"}function lb(s){return Jr(s)&&s.tagName.toLowerCase()==="input"}function nb(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function ib(s,c){return s.button===0&&(!c||c==="_self")&&!nb(s)}var Tr=null;function rb(){if(Tr===null)try{new FormData(document.createElement("form"),0),Tr=!1}catch{Tr=!0}return Tr}var sb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Sc(s){return s!=null&&!sb.has(s)?(Xt(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Yr}"`),null):s}function ob(s,c){let o,d,u,m,x;if(ab(s)){let g=s.getAttribute("action");d=g?ga(g,c):null,o=s.getAttribute("method")||Lr,u=Sc(s.getAttribute("enctype"))||Yr,m=new FormData(s)}else if(tb(s)||lb(s)&&(s.type==="submit"||s.type==="image")){let g=s.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=s.getAttribute("formaction")||g.getAttribute("action");if(d=b?ga(b,c):null,o=s.getAttribute("formmethod")||g.getAttribute("method")||Lr,u=Sc(s.getAttribute("formenctype"))||Sc(g.getAttribute("enctype"))||Yr,m=new FormData(g,s),!rb()){let{name:h,type:w,value:N}=s;if(w==="image"){let U=h?`${h}.`:"";m.append(`${U}x`,"0"),m.append(`${U}y`,"0")}else h&&m.append(h,N)}}else{if(Jr(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Lr,d=null,u=Yr,x=s}return m&&u==="text/plain"&&(x=m,m=void 0),{action:d,method:o.toLowerCase(),encType:u,formData:m,body:x}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function $c(s,c){if(s===!1||s===null||typeof s>"u")throw new Error(c)}function cb(s,c,o,d){let u=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return o?u.pathname.endsWith("/")?u.pathname=`${u.pathname}_.${d}`:u.pathname=`${u.pathname}.${d}`:u.pathname==="/"?u.pathname=`_root.${d}`:c&&ga(u.pathname,c)==="/"?u.pathname=`${c.replace(/\/$/,"")}/_root.${d}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${d}`,u}async function db(s,c){if(s.id in c)return c[s.id];try{let o=await import(s.module);return c[s.id]=o,o}catch(o){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function pb(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function ub(s,c,o){let d=await Promise.all(s.map(async u=>{let m=c.routes[u.route.id];if(m){let x=await db(m,o);return x.links?x.links():[]}return[]}));return xb(d.flat(1).filter(pb).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function jm(s,c,o,d,u,m){let x=(b,h)=>o[h]?b.route.id!==o[h].route.id:!0,g=(b,h)=>o[h].pathname!==b.pathname||o[h].route.path?.endsWith("*")&&o[h].params["*"]!==b.params["*"];return m==="assets"?c.filter((b,h)=>x(b,h)||g(b,h)):m==="data"?c.filter((b,h)=>{let w=d.routes[b.route.id];if(!w||!w.hasLoader)return!1;if(x(b,h)||g(b,h))return!0;if(b.route.shouldRevalidate){let N=b.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof N=="boolean")return N}return!0}):[]}function fb(s,c,{includeHydrateFallback:o}={}){return mb(s.map(d=>{let u=c.routes[d.route.id];if(!u)return[];let m=[u.module];return u.clientActionModule&&(m=m.concat(u.clientActionModule)),u.clientLoaderModule&&(m=m.concat(u.clientLoaderModule)),o&&u.hydrateFallbackModule&&(m=m.concat(u.hydrateFallbackModule)),u.imports&&(m=m.concat(u.imports)),m}).flat(1))}function mb(s){return[...new Set(s)]}function hb(s){let c={},o=Object.keys(s).sort();for(let d of o)c[d]=s[d];return c}function xb(s,c){let o=new Set;return new Set(c),s.reduce((d,u)=>{let m=JSON.stringify(hb(u));return o.has(m)||(o.add(m),d.push({key:m,link:u})),d},[])}function nh(){let s=v.useContext(en);return $c(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function gb(){let s=v.useContext(Zr);return $c(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Wc=v.createContext(void 0);Wc.displayName="FrameworkContext";function ih(){let s=v.useContext(Wc);return $c(s,"You must render this element inside a <HydratedRouter> element"),s}function bb(s,c){let o=v.useContext(Wc),[d,u]=v.useState(!1),[m,x]=v.useState(!1),{onFocus:g,onBlur:b,onMouseEnter:h,onMouseLeave:w,onTouchStart:N}=c,U=v.useRef(null);v.useEffect(()=>{if(s==="render"&&x(!0),s==="viewport"){let G=Y=>{Y.forEach(V=>{x(V.isIntersecting)})},q=new IntersectionObserver(G,{threshold:.5});return U.current&&q.observe(U.current),()=>{q.disconnect()}}},[s]),v.useEffect(()=>{if(d){let G=setTimeout(()=>{x(!0)},100);return()=>{clearTimeout(G)}}},[d]);let K=()=>{u(!0)},S=()=>{u(!1),x(!1)};return o?s!=="intent"?[m,U,{}]:[m,U,{onFocus:Pn(g,K),onBlur:Pn(b,S),onMouseEnter:Pn(h,K),onMouseLeave:Pn(w,S),onTouchStart:Pn(N,K)}]:[!1,U,{}]}function Pn(s,c){return o=>{s&&s(o),o.defaultPrevented||c(o)}}function vb({page:s,...c}){let{router:o}=nh(),d=v.useMemo(()=>Km(o.routes,s,o.basename),[o.routes,s,o.basename]);return d?v.createElement(jb,{page:s,matches:d,...c}):null}function yb(s){let{manifest:c,routeModules:o}=ih(),[d,u]=v.useState([]);return v.useEffect(()=>{let m=!1;return ub(s,c,o).then(x=>{m||u(x)}),()=>{m=!0}},[s,c,o]),d}function jb({page:s,matches:c,...o}){let d=qt(),{future:u,manifest:m,routeModules:x}=ih(),{basename:g}=nh(),{loaderData:b,matches:h}=gb(),w=v.useMemo(()=>jm(s,c,h,m,d,"data"),[s,c,h,m,d]),N=v.useMemo(()=>jm(s,c,h,m,d,"assets"),[s,c,h,m,d]),U=v.useMemo(()=>{if(s===d.pathname+d.search+d.hash)return[];let G=new Set,q=!1;if(c.forEach(V=>{let H=m.routes[V.route.id];!H||!H.hasLoader||(!w.some(X=>X.route.id===V.route.id)&&V.route.id in b&&x[V.route.id]?.shouldRevalidate||H.hasClientLoader?q=!0:G.add(V.route.id))}),G.size===0)return[];let Y=cb(s,g,u.unstable_trailingSlashAwareDataRequests,"data");return q&&G.size>0&&Y.searchParams.set("_routes",c.filter(V=>G.has(V.route.id)).map(V=>V.route.id).join(",")),[Y.pathname+Y.search]},[g,u.unstable_trailingSlashAwareDataRequests,b,d,m,w,c,s,x]),K=v.useMemo(()=>fb(N,m),[N,m]),S=yb(N);return v.createElement(v.Fragment,null,U.map(G=>v.createElement("link",{key:G,rel:"prefetch",as:"fetch",href:G,...o})),K.map(G=>v.createElement("link",{key:G,rel:"modulepreload",href:G,...o})),S.map(({key:G,link:q})=>v.createElement("link",{key:G,nonce:o.nonce,...q,crossOrigin:q.crossOrigin??o.crossOrigin})))}function kb(...s){return c=>{s.forEach(o=>{typeof o=="function"?o(c):o!=null&&(o.current=c)})}}var Nb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Nb&&(window.__reactRouterVersion="7.13.1")}catch{}function wb({basename:s,children:c,unstable_useTransitions:o,window:d}){let u=v.useRef();u.current==null&&(u.current=n0({window:d,v5Compat:!0}));let m=u.current,[x,g]=v.useState({action:m.action,location:m.location}),b=v.useCallback(h=>{o===!1?g(h):v.startTransition(()=>g(h))},[o]);return v.useLayoutEffect(()=>m.listen(b),[m,b]),v.createElement(eb,{basename:s,children:c,location:x.location,navigationType:x.action,navigator:m,unstable_useTransitions:o})}var rh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ee=v.forwardRef(function({onClick:c,discover:o="render",prefetch:d="none",relative:u,reloadDocument:m,replace:x,unstable_mask:g,state:b,target:h,to:w,preventScrollReset:N,viewTransition:U,unstable_defaultShouldRevalidate:K,...S},G){let{basename:q,navigator:Y,unstable_useTransitions:V}=v.useContext(_t),H=typeof w=="string"&&rh.test(w),X=$m(w,q);w=X.to;let le=H0(w,{relative:u}),W=qt(),P=null;if(g){let Ne=Qc(g,[],W.unstable_mask?W.unstable_mask.pathname:"/",!0);q!=="/"&&(Ne.pathname=Ne.pathname==="/"?q:Zt([q,Ne.pathname])),P=Y.createHref(Ne)}let[ke,B,ae]=bb(d,S),ne=Ab(w,{replace:x,unstable_mask:g,state:b,target:h,preventScrollReset:N,relative:u,viewTransition:U,unstable_defaultShouldRevalidate:K,unstable_useTransitions:V});function $(Ne){c&&c(Ne),Ne.defaultPrevented||ne(Ne)}let ie=!(X.isExternal||m),De=v.createElement("a",{...S,...ae,href:(ie?P:void 0)||X.absoluteURL||le,onClick:ie?$:c,ref:kb(G,B),target:h,"data-discover":!H&&o==="render"?"true":void 0});return ke&&!H?v.createElement(v.Fragment,null,De,v.createElement(vb,{page:le})):De});Ee.displayName="Link";var Sb=v.forwardRef(function({"aria-current":c="page",caseSensitive:o=!1,className:d="",end:u=!1,style:m,to:x,viewTransition:g,children:b,...h},w){let N=oi(x,{relative:h.relative}),U=qt(),K=v.useContext(Zr),{navigator:S,basename:G}=v.useContext(_t),q=K!=null&&Ob(N)&&g===!0,Y=S.encodeLocation?S.encodeLocation(N).pathname:N.pathname,V=U.pathname,H=K&&K.navigation&&K.navigation.location?K.navigation.location.pathname:null;o||(V=V.toLowerCase(),H=H?H.toLowerCase():null,Y=Y.toLowerCase()),H&&G&&(H=ga(H,G)||H);const X=Y!=="/"&&Y.endsWith("/")?Y.length-1:Y.length;let le=V===Y||!u&&V.startsWith(Y)&&V.charAt(X)==="/",W=H!=null&&(H===Y||!u&&H.startsWith(Y)&&H.charAt(Y.length)==="/"),P={isActive:le,isPending:W,isTransitioning:q},ke=le?c:void 0,B;typeof d=="function"?B=d(P):B=[d,le?"active":null,W?"pending":null,q?"transitioning":null].filter(Boolean).join(" ");let ae=typeof m=="function"?m(P):m;return v.createElement(Ee,{...h,"aria-current":ke,className:B,ref:w,style:ae,to:x,viewTransition:g},typeof b=="function"?b(P):b)});Sb.displayName="NavLink";var zb=v.forwardRef(({discover:s="render",fetcherKey:c,navigate:o,reloadDocument:d,replace:u,state:m,method:x=Lr,action:g,onSubmit:b,relative:h,preventScrollReset:w,viewTransition:N,unstable_defaultShouldRevalidate:U,...K},S)=>{let{unstable_useTransitions:G}=v.useContext(_t),q=Cb(),Y=Mb(g,{relative:h}),V=x.toLowerCase()==="get"?"get":"post",H=typeof g=="string"&&rh.test(g),X=le=>{if(b&&b(le),le.defaultPrevented)return;le.preventDefault();let W=le.nativeEvent.submitter,P=W?.getAttribute("formmethod")||x,ke=()=>q(W||le.currentTarget,{fetcherKey:c,method:P,navigate:o,replace:u,state:m,relative:h,preventScrollReset:w,viewTransition:N,unstable_defaultShouldRevalidate:U});G&&o!==!1?v.startTransition(()=>ke()):ke()};return v.createElement("form",{ref:S,method:V,action:Y,onSubmit:d?b:X,...K,"data-discover":!H&&s==="render"?"true":void 0})});zb.displayName="Form";function Eb(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sh(s){let c=v.useContext(en);return Xe(c,Eb(s)),c}function Ab(s,{target:c,replace:o,unstable_mask:d,state:u,preventScrollReset:m,relative:x,viewTransition:g,unstable_defaultShouldRevalidate:b,unstable_useTransitions:h}={}){let w=Ft(),N=qt(),U=oi(s,{relative:x});return v.useCallback(K=>{if(ib(K,c)){K.preventDefault();let S=o!==void 0?o:ni(N)===ni(U),G=()=>w(s,{replace:S,unstable_mask:d,state:u,preventScrollReset:m,relative:x,viewTransition:g,unstable_defaultShouldRevalidate:b});h?v.startTransition(()=>G()):G()}},[N,w,U,o,d,u,c,s,m,x,g,b,h])}var Tb=0,Rb=()=>`__${String(++Tb)}__`;function Cb(){let{router:s}=sh("useSubmit"),{basename:c}=v.useContext(_t),o=W0(),d=s.fetch,u=s.navigate;return v.useCallback(async(m,x={})=>{let{action:g,method:b,encType:h,formData:w,body:N}=ob(m,c);if(x.navigate===!1){let U=x.fetcherKey||Rb();await d(U,o,x.action||g,{unstable_defaultShouldRevalidate:x.unstable_defaultShouldRevalidate,preventScrollReset:x.preventScrollReset,formData:w,body:N,formMethod:x.method||b,formEncType:x.encType||h,flushSync:x.flushSync})}else await u(x.action||g,{unstable_defaultShouldRevalidate:x.unstable_defaultShouldRevalidate,preventScrollReset:x.preventScrollReset,formData:w,body:N,formMethod:x.method||b,formEncType:x.encType||h,replace:x.replace,state:x.state,fromRouteId:o,flushSync:x.flushSync,viewTransition:x.viewTransition})},[d,u,c,o])}function Mb(s,{relative:c}={}){let{basename:o}=v.useContext(_t),d=v.useContext(Wt);Xe(d,"useFormAction must be used inside a RouteContext");let[u]=d.matches.slice(-1),m={...oi(s||".",{relative:c})},x=qt();if(s==null){m.search=x.search;let g=new URLSearchParams(m.search),b=g.getAll("index");if(b.some(w=>w==="")){g.delete("index"),b.filter(N=>N).forEach(N=>g.append("index",N));let w=g.toString();m.search=w?`?${w}`:""}}return(!s||s===".")&&u.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(m.pathname=m.pathname==="/"?o:Zt([o,m.pathname])),ni(m)}function Ob(s,{relative:c}={}){let o=v.useContext(Fm);Xe(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:d}=sh("useViewTransitionState"),u=oi(s,{relative:c});if(!o.isTransitioning)return!1;let m=ga(o.currentLocation.pathname,d)||o.currentLocation.pathname,x=ga(o.nextLocation.pathname,d)||o.nextLocation.pathname;return Gr(u.pathname,x)!=null||Gr(u.pathname,m)!=null}function _b(){const s=qt();return l.jsxs("div",{className:"relative flex flex-col items-center justify-center h-screen text-center px-4 bg-[var(--bg)]",children:[l.jsx("div",{"aria-hidden":"true",className:"absolute bottom-0 text-9xl md:text-[12rem] font-black text-[var(--bg-2)] select-none pointer-events-none z-0",children:"404"}),l.jsxs("div",{className:"relative z-10",children:[l.jsx("h1",{className:"text-xl md:text-2xl font-medium mt-6 text-[var(--ink)]",children:"This page has not been generated"}),l.jsx("p",{className:"mt-2 text-base text-[var(--muted-2)] tracking-[0.04em]",children:s.pathname}),l.jsx("p",{className:"mt-4 text-lg md:text-xl text-[var(--muted)]",children:"Tell me more about this page, so I can generate it"})]})]})}const oh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABACAYAAABfuzgrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDEwLjAtYzAwMCA3OS5kMjBlNDY2MzAsIDIwMjUvMTIvMDktMDI6MTE6MjMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NDIzNGE4NjAtMzY3My0yNzRkLTkxNjQtMGNmZTEzMjJiZTg3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBGMUQ1ODQ0NThBMzExRjE4Q0Y0RjdERUE1Q0YyN0ZEIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBGMUQ1ODQzNThBMzExRjE4Q0Y0RjdERUE1Q0YyN0ZEIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNy40IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFlNDEyZmE4LWI5NTgtZWY0YS05OTlhLTRmMzgxMTNjMzMyMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MjM0YTg2MC0zNjczLTI3NGQtOTE2NC0wY2ZlMTMyMmJlODciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6HZ9cfAAALMElEQVR42uxcTWzjWB1/sRM7zlfrzsx+sawgK3GAE8pwA4lD5jISx4z2gDimVw5I6YUz6YUzzQ0JcWhOXBBSIySkkZCWhr2wq4WdyaJlNDs7s43bpPlObH5/+zl1MkmnKSnNpP+f5Nr1e/772X6/9/96LyHHcQSDwZgNhV8Bg8EEYTCYIAwGE4TBYIIwGEwQBoMJwmAwQRgMJgiDwQRhMBhMEAaDCcJgMEEYDCYIg8EEYTCYIAzGa4XwVd/go4e/u5YVWd//4U9D/HkZK08Qwne++4OF6h89fyIe/vkPYnPrjrj/wS9Eq/7FQtf/65O/8ZdlsInF5GAwQZgcjHU3sVaVHP/++I+r9RD4AQ3PYcPe/zENx/0vsHe8vVtHePUc5+wax9s7Xr2scOyKPB6fl3Uy+JOmvePYJRzXfHmefBtlAmVO2i0TTjko32uQk8VxJdgur8i/lz3ZTuGcyXfP2WftCVwrgvJE8J6yOPB+fvKzX7MGYc1xKexhO4hoRh379NR5OneoRrR9LRorxBKbGUUdj5UFbI9pU1V1X9ONohFLZrCfKT+s6dPyWYOsETmy2IoXqFfBVsVWfk1ei4ktn0jdEtFo3LRHo7xVf7ozHPapbBvndzQtWheh0HikHw56YjQcUvkuCFGKGrGDkKJm/BG+3W6IXrc9IT+eNIUWNUzbHuVP6s93RqMBE2TNNEcFI+O9ePKWKUdNHw8kKUxJony/1y6gE9V63dbOkolCo+++PL67JJlWSFHQyZN5mFjyOCFOm3W38LRxBG6EhHn7G379avDiTrtpdTtNkdy8LVQ1Qqdqs+TrRjzvkPwQjqNx0W4ds5O+bmZVv9exjutPrYb1TIQj+nhrn1p0vobzpU67cVfTY6WU+VZ664339tEZCkt8lJyqhjPm7XdpM5fmztj2Njo5EW4Lx7Vu5/RcQg0H/Sl3yJ4ot0fDl+T3Oi1PvmPTwMEm1rr6HPjYwlZmnx8JbDAvuu3GdnLjTjYaS6VBlGKreVRtnx5XlnD7rI7RHaSsolfSyIz7jpbyXNAU1W6rIQaDrvDd//nxAfvcctt+ubzVtKodaBqXXGv6C52vFUGow372afXa7t88eVGKwGklswNmGZlcFWigeb5NRppovg9TmeEnkHmViWgx9wTk5RyvI1oz6mekXF+mFfCN5ppvw2EvK+tcxYtLjwaD8+T772F3xjNYgfPn+VK5QBCArinJPZtYE6Nh07pWckiUoUnGH9+Im5kZ/sQBbfBtTESHqvHkFsi0Rf8fBDo3dRI4wcoeNIcZgUknry2Q+aZHEzmYdMFOsu9GjCJ6LSCzGItvHIYjWmFGGyjCdEh+laJG9uCL5MJhfZk+U0C+uoc259SwNjYZZXsfe1E0vRiNJUz/mnA4UjSMRCEWS2IfPwy8k2m40TT4N3ldN2pGLEFbDsEDnAsVBGuQMzz69O9Q8aNVaEqt1zm1pFMv0OmzZBpRBEh2nEP4E2Zi441dlO3AjyGtUEad9MbWOzlom/3G8bN70BIUHLgLOW5nIrOKZEMz3fX6kiMG/S78IzdqtKcoSi6RulONaNFy8/g5mUuQqWVAkizqF1uNowoc5PHogZAtOlMqS502HA67kSpyoMnUWgbwjDV0esgP07Erv9OCqTV03wPeS7SGtpJvhbYoVF7sdlpWLJaAL2dYaP++8PIvGYSJ86cn9d3R5PclMuWjRtzSDeOePRwiaOC+iyquP4waRrHTbsGvapfXgiBf1P6xsCnl468HvxXW0YuFrn/73W9f2bOMRsMa2peRndqk/IAkyB6Rw7z9TUERHiJHS0aN4MBW1HAkB82QTW2+hZDo0xKZZv3eE0HRH/g0UvZAWF8/CSbCSEPlEht3hK7HLerg5AyTP9HrnlZVVcuiI5I2yfb7nSqRSkacdtHOXBhlPrGXOUi48u1hLhLSZsmnTltBaLkA7eEl/XAuFk9WnNFINI6/psGuFE9u4n2pIDDei27sts+CCDRo5GOJFBGtbDsjq9k49gfI6mAwqKY2zQy0SQH3WA+CfPThXy597eeffbLwNVdJEL8jhxXPZIEJ4JtMWWgOIgeN5LWAKebazkQIEIS0ThqOvpgqn4cqtE8ZJEI2W+xMO8o0Ykc8EphICApJEEERp07rRLhmmkdkazQVhfofBwkxgsZALkWonpU+EeXq99COUE/oxthMrNI5ap/MpFuUUwFp3MKIjmc4I0he03W8K4PqwsfrTQQQ3HsjXwPTLgMNY161P/J/IQjNyl0Ux/UXl772GpAlTeJnm6FRzKkOmQ5GplT14q8dsh6Q1lCV8FgjSc0ykb2WGu1CWvlqZsmcL384HEy1x5nnlGeR3Q88f9+cKh//TybeWmiQ+x/8crEL7C/F73/zK3ntz8lIWXANyp/EFWepRSCq4o2CmhHsvPXpDgsT69I3bFhfkaWSw8jrR3QqlKuRSby1gqKERCSi+WHj/TMt7UiNHXK3tXLSW/V/LlT/w4dnkwibzz4Wjx49WpXvR50zHej8lRkjJ5lF926/OdfMW9QkyMjpMFmYWjvYHiiKKvr9dlGsPx7EkxuVycmKTtBHs25cFGvFJx66kRk5clc827ozyyyiLPwyzB1ThnfNeGKrDFt9FxEr0Tq13E7iRbzWGmareWIN+r15BLlZeZDXYFZujrLeEm4kSkawKlMjfoZIMG9bAHloK3Nz623ybyrkiyB7v86EmE6QZkPuhEo7sDkT240hyGtADjJpMhSJAna8pOHJ2NQa9DvjD4sRvxCO6PPMpfwiIyjyGb4Dbg567Xm+0EVMw+ssv7j7aTulwdm8MISqtew53+NmEGTFyZGRzmIB+YYaOv42jncxF0sEJ+hBm2zTxEf/wyLjvS9j+mZgWn2RwrYU5p0xizYTqF+Qna4mw8iuTJp+Ls+TLFMJqdNkyc0jmnJ+xCetnB9ZM18ReTMVdWnWernfbZf8fxBK3qcBJxC5y8vZChZyIetPkGsmR9afMiFenubgn6cPZKbMN3dg87+PHEgJc7JmmTq105Pn78OEcpNXNF0E19DMX4po0VSTNAgGp/MWcgDjmH8NJtpOQPPI+moa96LMeonu5xMIZZhaoiNbH7FIlsy5uKaYElKovTWESP1nCo7qOVku/IVO088LAuxNPfvE9bjX4dQ7myw/X/6BlOuXF6a0z6GUKweb3nav29mWCUgzkUwVkfOg536MAEUBicVyMrW5+6rQ8jIQumo7jn72Z96vmswjB+VAvnzyuZsD+dGP710qinWRn/2hJbc0Zwqd1nW8g6FZ6VvQOVcrUHJq0G+/0gcgGZj1mwZBMlPZ5yoRg8g17YfQij60IS2X3KKuU6VEH9WlE4mNW9mokTLl8lPKUlvtFjL1aAv8E8yz0shthZnXtU7pmlDIjCGHRtEuiojSNx4iuYlknmUdPRWJ5JarESj0PF4w1e8hU98TmPYhaO6UFo0KV0N5AtzkKKaDWCdHXxGRTSORFKpb7snHdBAxQtYbC6dEPLHhahTKlPsONcwmq9/t0FoTPG/Kuz/K3fsjRzRE29pIPg56PeEvuUUmnZKNWUy1MQNOetlNhHZa0OCdK19yG77JZtW3vnf/qkKFNTFjekcc29Y7M+u/NBs2cUuIO5MrGuclY8qLhJLfu1io+brLhTjn2cW6L5jiNeQMwetBxMqt52AwVpYgtJ7j6X8e8RtnMEHE6q7nYDBWjyCLkoOiV/4s3hWah8W4gQg5a7rYnsEQ/MuKDAYThMFggjAYTBAGgwnCYDBBGAwmCIPBBGEwGEwQBoMJwmAwQRgMJgiDwQRhMJggDAYThMFggjAYNw7/FWAAi26mbSS44fEAAAAASUVORK5CYII=",Db="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABACAYAAABfuzgrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDEwLjAtYzAwMCA3OS5kMjBlNDY2MzAsIDIwMjUvMTIvMDktMDI6MTE6MjMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NDIzNGE4NjAtMzY3My0yNzRkLTkxNjQtMGNmZTEzMjJiZTg3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjExQTg3QUM2NThBNDExRjE5NkY0RkVCOURBRkVDNjk2IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjExQTg3QUM1NThBNDExRjE5NkY0RkVCOURBRkVDNjk2IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNy40IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFkNjhmZjAxLWMzYjUtYWM0NS04OTM1LTVmZGE1YWU2OTJhMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MjM0YTg2MC0zNjczLTI3NGQtOTE2NC0wY2ZlMTMyMmJlODciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6dJ7OqAAAF3klEQVR42uydv48bRRTHZxF/ABuJAomGDaKACq2poNxr0u8pBbWvpUCyG2rs/wBbNEiIwq5oEJKtSEiHkMI515AoP3yLlEQJIooXKaSgwGY3fnN5fuyPG3s3Xq+/H92c92Znxju78515M/NWZy0WCwUASOY13AIAIBAAIBAAIBAAIBAAIBAAIBAAIBAAIBAAIBAAAAQCAAQCAAQCAAQCAAQCAAQCwE7xetlfcHr87VbeyPrwk08tPF5QeYHEvPf+R0bpn/75UB1f+169celNdeXq5+r57L5R/ru3fsWTBTCxIA4AgUAcoO4mVlXF8fEH71arEtbKx8vj83hrJU6nsyx+Vv/9IsaLjsc67jz/Mq8bHTqWZbnRcT86Ds7TLH+cKM598WlF55Q1ZHmpHMuLPsb8elh+tZreUqvplicTrnk1zUpdrf/V/etrpxhBMHKsRS8KoyjM1LKx8/g47iQKgyi01FIsmvjvMwrx+Y44n1c+TKwaicOjhpIX4kbi79BtsaPQTDiOOYrC5Yy83Sg0ojBZs3wIpEYjR2x+HEThkHpJHbosvk9CGlCvWrRQHCbEogjpuuVxGpOE/Jxgw/IhkB02q8KEBqHjA3r4Dfp0mFlSFD4Tpl1guUd03ZcSGrjKEcRFzpuUD4HswZzjiDWEDo0qReCxXjws+JonJd+TiVJYxaoMi/lc3bu91WfSJ3Hoyew4o9HzEWGckNamEckVo4nusWV6l8q1RZpJjvnmUZoyblxe+R4zWWUdQhafNdfx2SKANudChRFklb+fhdsWR8ww4eHLBjOiYLNGw+N03hGtBNksb4uCLxrJgNIHrMwOzVtaCdfQo3NndOwXLIqs8n02XxvRddosT4euWV9/mlmpV9OaVO+Ayj4r2MTd/RFkevuGms//rcKlBNR78YY+EZNtm3rGNhOVwxrOAfX8DRany26o5OVUn75nyMrUvXEnYSQJCjQB0+6Dl3Oei6ZD961BnwM272omjCQ9ig/pfoXMpNMiC0SHtbsCuR/8ZmxKaX4ZfaPCp0+M8r/19jtli8RlvTt/qDYzxZRYLfOpUTUNVn1cYXZJ+99LEGpADc7PWIXatP5Z5Q+pvq2EOG6q9tiI0xUjUJPlC0WdJ3RfWrURyOn1n9bO+/u9W8Z5ShZI2pyDT7aDjFUgx3ASrEegdo6tvskqlSpgJXCTZWROU3QsWZ2HXXbdXolAYq9cU/6aPVk77xbwchrsJjvNhymNo46713bOvbQLXgqvhkCuXP3CLMP8sfruqy8p72fR738M30H5seyHmNUTuuR+UTQ+W9EZq/1goPZhmff57I5R+uvHP5wfP/vjpppOp1V5YI7ouccp5sRBgeaOy/Zd2mxE6eyBQA5zOoNw71axKu546AtxTEp+cDZbHh5eYN+gjiZXqLCTvjNeub5YiUkaSfTyZRE0xWZj3ZEbpJ6Cq8nOiIO7fbfFEqPcKW9lmEvNNec7tuHKlckiQdnnlaG3Au+QvIznsR8Cqbg4XOagGJBPVjfFVysUu8k+W5npUBimLH+6LH2LGl2Q4NToqJe701Is/prLwI6BUNc5rwy9Ffpiot5idW+S2RnuhUC2LA6PuUwoMQKcsJeGbBo1Lmds8gV0fihEMqMH6tCkMxR52qIxzJg4+uz7XOYWH1JZE2aKnbAd7hPR6H3mTq9fdJL17Ym6p+Vfp/wRG1V7YoTVHgie6Gy0c6jN3FLO2AZht/auJhUYOcY5K06mE27dcKUTYpAxoe/SdTgpaY+oQfC5iL6mBhs1ePxBjleynVHPbs5O/3jD8vPOc1OrLxw01avYPa+EQKpgVv18c1rWUmFg6N6R5207vqAD5Sbvd1Tp/EXrXk8TC++QA4X3QVQV3+cAoJoCid/nePRgijsOIBBV3fc5AKieQEzFEXvwai/eCvlhgT3EWiwWuAsAKPx/EAAgEAAgEAAgEAAgEAAgEAAgEAAgEAAgEAAABAIABAIABAIABAIABAIABAIABAJAHfhPgAEAek7EkD6DsgoAAAAASUVORK5CYII=";function Wl(s,c){if(!(typeof window>"u")&&typeof window.gtag=="function")try{window.gtag("event",s,c)}catch{}}const at={formSubmit:(s,c)=>Wl("form_submit",{areas:s.join(","),region:c}),formSubmitFail:s=>Wl("form_submit_fail",{reason:s}),phoneClick:s=>Wl("phone_click",{source:s}),kakaoClick:s=>Wl("kakao_click",{source:s}),priceCalcUse:(s,c)=>Wl("price_calc_use",{space:s,house_type:c}),quoteSectionView:()=>Wl("quote_section_view")},km=[{label:"포트폴리오",href:"/portfolio"},{label:"시공범위",href:"#scope"},{label:"FAQ",href:"#faq"},{label:"견적문의",href:"#quote"}],Nm=[{label:"줄눈시공 하는 이유",href:"/info/why-grout"},{label:"케라폭시 줄눈이란?",href:"/info/kerafoxy"},{label:"폴리우레아 줄눈이란?",href:"/info/polyurea"},{label:"케라폭시 가격 안내",href:"/info/kerafoxy-price"},{label:"케라폭시 제품 소개",href:"/info/kerafoxy-product"},{label:"폴리우레아 vs 케라폭시 비교",href:"/info/comparison"}];function Lt(){const[s,c]=v.useState(!1),[o,d]=v.useState(!1),[u,m]=v.useState(!1),[x,g]=v.useState(!1),b=v.useRef(null),h=v.useRef(!1),w=Ft(),N=qt(),U=N.pathname==="/";v.useEffect(()=>{const Y=()=>c(window.scrollY>60);return window.addEventListener("scroll",Y),()=>window.removeEventListener("scroll",Y)},[]),v.useEffect(()=>{const Y=V=>{b.current&&!b.current.contains(V.target)&&m(!1)};return document.addEventListener("mousedown",Y),()=>document.removeEventListener("mousedown",Y)},[]),v.useEffect(()=>{if(!o)return;const Y=window.scrollY,V=document.documentElement,H=document.body,X={htmlOverflow:V.style.overflow,bodyOverflow:H.style.overflow,bodyPosition:H.style.position,bodyTop:H.style.top,bodyWidth:H.style.width};return V.style.overflow="hidden",H.style.overflow="hidden",H.style.position="fixed",H.style.top=`-${Y}px`,H.style.width="100%",()=>{V.style.overflow=X.htmlOverflow,H.style.overflow=X.bodyOverflow,H.style.position=X.bodyPosition,H.style.top=X.bodyTop,H.style.width=X.bodyWidth,h.current?h.current=!1:window.scrollTo(0,Y)}},[o]);const K=Y=>{if(h.current=!0,d(!1),Y.startsWith("/")){w(Y);return}U?setTimeout(()=>{const V=document.querySelector(Y);V&&V.scrollIntoView({behavior:"smooth"})},0):(w("/"),setTimeout(()=>{const V=document.querySelector(Y);V&&V.scrollIntoView({behavior:"smooth"})},300))},S=s||!U,G=S?"text-stone-700 hover:text-[var(--accent)]":"text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] hover:text-white",q=S?"text-stone-900":"text-white";return l.jsxs("nav",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${S?"bg-white shadow-sm":"bg-transparent"}`,children:[l.jsxs("div",{className:"px-5 md:px-12 lg:px-20 h-12 md:h-auto md:py-4 flex items-center transition-all duration-300",children:[l.jsx("div",{className:"flex-1",children:l.jsx(Ee,{to:"/",className:"flex items-center gap-3 cursor-pointer",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:l.jsx("img",{src:S?Db:oh,alt:"디테일라인 - 서울·경기 줄눈시공 전문",className:"h-10 md:h-12 w-auto object-contain transition-opacity duration-300"})})}),l.jsx("div",{className:"flex-1 hidden md:flex justify-center",children:l.jsxs("ul",{className:"flex items-center gap-8",children:[km.map(Y=>l.jsx("li",{children:l.jsx("button",{onClick:()=>K(Y.href),className:`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${G}`,children:Y.label})},Y.href)),l.jsxs("li",{ref:b,className:"relative",children:[l.jsxs("button",{onClick:()=>m(!u),className:`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1 ${N.pathname.startsWith("/info")?q:G}`,children:["줄눈 정보",l.jsx("i",{className:`ri-arrow-down-s-line text-lg transition-transform ${u?"rotate-180":""}`})]}),u&&l.jsx("div",{className:"absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-2xl overflow-hidden w-56",style:{boxShadow:"0 4px 24px 0 rgba(0,0,0,0.10)"},children:l.jsx("ul",{className:"py-2",children:Nm.map(Y=>l.jsx("li",{children:l.jsx(Ee,{to:Y.href,onClick:()=>m(!1),className:"block px-5 py-3 text-sm text-stone-500 hover:bg-stone-100 hover:text-stone-900 transition-colors cursor-pointer",children:Y.label})},Y.href))})})]})]})}),l.jsx("div",{className:"flex-1 hidden md:flex items-center justify-end gap-4",children:l.jsxs("a",{href:"tel:010-8005-6674",onClick:()=>at.phoneClick("navbar"),className:`flex items-center gap-2 text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${S?"bg-[var(--accent)] text-white px-5 py-2.5 rounded-full hover:bg-[var(--accent-deep)]":"bg-white/10 text-white px-5 py-2.5 rounded-full border border-white/30 hover:bg-white/20 backdrop-blur-sm"}`,children:[l.jsx("i",{className:"ri-phone-line text-sm"}),"010-8005-6674"]})}),l.jsx("button",{className:`md:hidden w-8 h-8 flex items-center justify-center cursor-pointer ml-auto ${S?"text-stone-800":"text-white"}`,onClick:()=>d(!o),children:l.jsx("i",{className:`text-xl ${o?"ri-close-line":"ri-menu-line"}`})})]}),l.jsxs(l.Fragment,{children:[l.jsx("div",{className:`fixed inset-0 bg-black/60 z-40 md:hidden transition-opacity duration-300 ${o?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}`,onClick:()=>d(!1)}),l.jsxs("div",{className:`fixed top-0 right-0 h-screen w-4/6 bg-stone-100 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto md:hidden ${o?"translate-x-0":"translate-x-full"}`,children:[l.jsx("div",{className:"sticky top-0 bg-white h-12 px-5 flex items-center justify-end border-b border-stone-300",children:l.jsx("button",{onClick:()=>d(!1),className:"text-stone-700 hover:text-stone-900 cursor-pointer",children:l.jsx("i",{className:"ri-close-line text-2xl"})})}),l.jsxs("div",{className:"px-6 py-4",children:[l.jsxs("ul",{className:"space-y-3",children:[km.map(Y=>l.jsx("li",{children:l.jsx("button",{onClick:()=>K(Y.href),className:"w-full border-b border-stone-200 pb-4 text-left text-sm font-medium text-stone-600 hover:text-[var(--accent)] cursor-pointer transition-colors",children:Y.label})},Y.href)),l.jsxs("li",{children:[l.jsxs("div",{className:"flex flex-row w-full text-sm font-medium text-stone-600 mb-4 items-center justify-between",children:["줄눈 정보",l.jsx("i",{className:"ri-arrow-down-s-line text-xl"})]}),l.jsx("ul",{className:"space-y-4 pl-3 border-stone-100",children:Nm.map(Y=>l.jsx("li",{children:l.jsx(Ee,{to:Y.href,onClick:()=>{h.current=!0,d(!1)},className:"text-sm font-medium text-stone-400 hover:text-[var(--accent)] cursor-pointer transition-colors block",children:Y.label})},Y.href))})]})]}),l.jsxs("a",{href:"tel:010-8005-6674",onClick:()=>at.phoneClick("navbar"),className:"call-bg mt-8 flex items-center justify-center gap-2 px-6 py-3 bg-[var(--accent)] text-white text-sm font-semibold rounded-full hover:bg-[var(--accent-deep)] transition-colors cursor-pointer w-full",children:[l.jsx("i",{className:"ri-phone-line"}),"010-8005-6674"]}),l.jsx("p",{className:"text-center text-xs text-stone-500 mt-3",children:"번호를 누르면 전화 연결 됩니다."})]})]})]})]})}const Bb=[{label:"포트폴리오",href:"/portfolio"},{label:"시공범위",href:"#scope"},{label:"FAQ",href:"#faq"},{label:"견적문의",href:"#quote"}],Ub=["화장실 줄눈","주방 줄눈","베란다 줄눈","현관 줄눈","수영장 줄눈","목욕탕 줄눈"];function Yt(){const s=Ft(),c=o=>{if(o.startsWith("/")){s(o);return}const d=document.querySelector(o);d&&d.scrollIntoView({behavior:"smooth"})};return l.jsx("footer",{className:"bg-[var(--dark)] mx-2 overflow-hidden",children:l.jsxs("div",{className:"px-6 md:px-12 lg:px-16 pt-10 pb-8",children:[l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-6 md:mb-12",children:[l.jsxs("div",{className:"lg:col-span-1",children:[l.jsx("img",{src:oh,alt:"디테일라인 - 서울·경기 줄눈시공 전문",className:"h-10 w-auto object-contain mb-4"}),l.jsxs("p",{className:"text-stone-400 text-sm leading-relaxed mb-5",children:["집요함이 만들어 내는 완벽함, 디테일라인",l.jsx("br",{}),"완벽한 마감을 약속드립니다."]}),l.jsxs("div",{className:"space-y-2",children:[l.jsxs("div",{className:"flex items-center gap-2 text-stone-400 text-sm",children:[l.jsx("i",{className:"ri-phone-line text-stone-500"}),l.jsx("a",{href:"tel:010-8005-6674",onClick:()=>at.phoneClick("footer"),className:"hover:text-white transition-colors cursor-pointer",children:"010-8005-6674"})]}),l.jsxs("div",{className:"flex items-center gap-2 text-stone-400 text-sm",children:[l.jsx("i",{className:"ri-map-pin-line text-stone-500"}),l.jsx("span",{children:"서울 서초구 본마을4길 11 1층 104호"})]}),l.jsxs("div",{className:"flex items-center gap-2 text-stone-400 text-sm",children:[l.jsx("i",{className:"ri-time-line text-stone-500"}),l.jsx("span",{children:"평일 09:00 – 18:00"})]})]})]}),l.jsxs("div",{className:"hidden md:block",children:[l.jsx("h4",{className:"text-white font-bold text-sm mb-5",children:"빠른 링크"}),l.jsx("ul",{className:"space-y-3",children:Bb.map(o=>l.jsx("li",{children:l.jsx("button",{onClick:()=>c(o.href),className:"text-stone-400 text-sm hover:text-white transition-colors cursor-pointer",children:o.label})},o.href))})]}),l.jsxs("div",{className:"hidden md:block",children:[l.jsx("h4",{className:"text-white font-bold text-sm mb-5",children:"시공 서비스"}),l.jsx("ul",{className:"space-y-3",children:Ub.map(o=>l.jsx("li",{children:l.jsx("span",{className:"text-stone-400 text-sm",children:o})},o))})]}),l.jsxs("div",{className:"hidden md:block",children:[l.jsx("h4",{className:"text-white font-bold text-sm mb-5",children:"소셜 미디어"}),l.jsx("div",{className:"space-y-3",children:[{icon:"ri-instagram-line",label:"Instagram",href:"https://www.instagram.com"},{icon:"ri-kakao-talk-fill",label:"KakaoTalk",href:"https://pf.kakao.com"}].map(o=>l.jsxs("a",{href:o.href,target:"_blank",rel:"nofollow noreferrer",className:"flex items-center gap-3 text-stone-400 text-sm hover:text-white transition-colors cursor-pointer",children:[l.jsx("div",{className:"w-8 h-8 flex items-center justify-center bg-white/10 rounded-sm",children:l.jsx("i",{className:`${o.icon} text-sm`})}),o.label]},o.label))})]})]}),l.jsxs("div",{className:"border-t border-stone-700 pt-6 pb-6 mb-2",children:[l.jsx("h4",{className:"text-white font-bold text-sm mb-3",children:"시공 가능 지역"}),l.jsxs("div",{className:"text-stone-400 text-xs leading-relaxed space-y-1.5",children:[l.jsxs("p",{children:[l.jsx("span",{className:"text-stone-300 font-medium mr-2",children:"서울"}),"강남구 · 서초구 · 송파구 · 강동구 · 성동구 · 마포구 · 용산구 · 양천구 · 영등포구 · 종로구"]}),l.jsxs("p",{children:[l.jsx("span",{className:"text-stone-300 font-medium mr-2",children:"경기"}),"성남시 분당구 · 수지구 · 하남시 · 과천시 · 광명시 · 고양시 · 일산 · 용인시"]}),l.jsxs("p",{children:[l.jsx("span",{className:"text-stone-300 font-medium mr-2",children:"인천"}),"송도 · 연수구 · 남동구"]}),l.jsx("p",{className:"text-stone-500 mt-2",children:"그 외 지역 출장비 협의 가능."})]})]}),l.jsx("div",{className:"border-t border-stone-700 pt-6",children:l.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-3",children:[l.jsx("p",{className:"text-stone-500 text-xs",children:"© 2026 줄눈시공 전문. All rights reserved."}),l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsx(Ee,{to:"/privacy",className:"text-stone-500 text-xs hover:text-white transition-colors cursor-pointer",children:"개인정보처리방침"}),l.jsx("span",{className:"text-stone-600 text-xs",children:"사업자등록번호: 609-33-19473"})]})]})})]})})}const Hb="https://pf.kakao.com/_TsIAE";function Fc(){const[s,c]=v.useState(!1);return v.useEffect(()=>{const o=()=>{c(window.scrollY>window.innerHeight*.6)};return o(),window.addEventListener("scroll",o,{passive:!0}),()=>window.removeEventListener("scroll",o)},[]),l.jsxs("div",{className:`md:hidden fixed bottom-5 right-4 z-40 flex flex-col gap-3 transition-all duration-300 ${s?"opacity-100 translate-y-0":"opacity-0 translate-y-4 pointer-events-none"}`,"aria-hidden":!s,children:[l.jsx("a",{href:Hb,target:"_blank",rel:"noopener noreferrer",onClick:()=>at.kakaoClick("floating"),className:"w-14 h-14 flex items-center justify-center rounded-full bg-[#FEE500] text-[#191600] shadow-lg active:scale-95 transition-transform","aria-label":"카카오톡 상담",children:l.jsx("i",{className:"ri-kakao-talk-fill text-2xl"})}),l.jsx("a",{href:"tel:010-8005-6674",onClick:()=>at.phoneClick("floating"),className:"w-14 h-14 flex items-center justify-center rounded-full bg-[var(--accent)] text-white shadow-lg active:scale-95 transition-transform","aria-label":"전화 상담",children:l.jsx("i",{className:"ri-phone-fill text-2xl"})})]})}const it={eyebrow:"오직 줄눈, 6년간 한 길",headlineL1:"손끝이 남기는",headlineAccent:"줄눈시공",headlineTail:"",headlineL3:"디테일라인",subL1:"시공 전, 후 사진으로 먼저 확인하고 결정하세요.",subL2:"무료 견적은 24시간 실시간 답변 드립니다.",ctaPrimary:"실시간 무료 견적 상담",ctaSecondary:"시공 포트폴리오 →",captionTag:"KERAPOXY",captionMeta:"프리미엄 줄눈 시공",signatureMeta:"모든 주거공간, 상업공간 시공 가능",footerItems:["2,000세대 이상 시공 경력","하루 한집 시공","2년 무상 AS"],scrollLabel:"SCROLL",srHeading:"서울·경기·인천 줄눈시공 전문 디테일라인 — 화장실·욕실·베란다·현관 케라폭시·폴리우레아 줄눈시공"};function wm(s){const c=document.querySelector(s);c&&c.scrollIntoView({behavior:"smooth"})}function Lb(){return l.jsxs("section",{className:"hero-b-wrap","aria-label":"히어로",children:[l.jsx("div",{className:"tile-floor","aria-hidden":"true",children:l.jsx("div",{className:"tile-floor__plane",children:l.jsx("div",{className:"tile-floor__shine"})})}),l.jsx("div",{className:"hero-b__tint","aria-hidden":"true"}),l.jsx("div",{className:"hero-b__vignette","aria-hidden":"true"}),l.jsx("div",{className:"hero-b__glow","aria-hidden":"true"}),l.jsx("div",{className:"hero-b__grain","aria-hidden":"true"}),l.jsx("div",{className:"hero-b__padded",children:l.jsxs("div",{className:"hero-b",children:[l.jsx("h2",{className:"sr-only",children:it.srHeading}),l.jsxs("div",{className:"hero-b__lead",children:[l.jsxs("div",{className:"hero-b__eyebrow",children:[l.jsx("span",{className:"hero-b__eyebrow-line","aria-hidden":"true"}),l.jsx("span",{children:it.eyebrow})]}),l.jsxs("h1",{className:"hero-b__headline",children:[it.headlineL1,l.jsx("br",{}),l.jsx("em",{children:it.headlineAccent}),it.headlineTail,l.jsx("br",{}),it.headlineL3]}),l.jsxs("p",{className:"hero-b__sub",children:[it.subL1,l.jsx("br",{}),it.subL2]}),l.jsxs("div",{className:"hero-b__cta-row",children:[l.jsxs("button",{type:"button",className:"hero-b__btn",onClick:()=>wm("#quote"),children:[it.ctaPrimary,l.jsx("span",{className:"hero-b__btn-arrow","aria-hidden":"true",children:"→"})]}),l.jsx("button",{type:"button",className:"hero-b__btn-link",onClick:()=>wm("#portfolio"),children:it.ctaSecondary})]})]}),l.jsxs("div",{className:"hero-b__caption",children:[l.jsxs("div",{className:"hero-b__caption-row",children:[l.jsx("span",{className:"hero-b__caption-dot","aria-hidden":"true"}),l.jsx("span",{className:"hero-b__caption-after",children:it.captionTag})]}),l.jsx("div",{className:"hero-b__caption-meta",children:it.captionMeta})]}),l.jsx("div",{className:"hero-b__signature",children:l.jsx("div",{className:"hero-b__signature-meta",children:it.signatureMeta})}),l.jsxs("div",{className:"hero-b__footer-meta",children:[l.jsx("ul",{className:"hero-b__footer-items",children:it.footerItems.map(s=>l.jsx("li",{children:s},s))}),l.jsxs("div",{className:"hero-b__scroll","aria-hidden":"true",children:[l.jsx("span",{children:it.scrollLabel}),l.jsx("span",{className:"hero-b__scroll-bar"})]})]})]})})]})}const ii={all:"all",itemOne:"itemOne",itemTwo:"itemTwo"},qe={rawPosition:"--rcs-raw-position",currentPosition:"--rcs-current-position",boundsPadding:"--rcs-bounds-padding",handleColor:"--rcs-handle-color"},Rr={capture:!1,passive:!0},Vr={capture:!0,passive:!1};let In=(function(s){return s.ARROW_LEFT="ArrowLeft",s.ARROW_RIGHT="ArrowRight",s.ARROW_UP="ArrowUp",s.ARROW_DOWN="ArrowDown",s})({});const Kr=(s,c,o,d)=>{let u=v.useRef(void 0);v.useEffect(()=>{u.current=c},[c]),v.useEffect(()=>{if(!o?.addEventListener)return;let m=x=>u.current?.(x);return o.addEventListener(s,m,d),()=>{o.removeEventListener(s,m,d)}},[s,o,d])},ch=v.createContext(null),Yb=({children:s,...c})=>l.jsx(ch.Provider,{value:c,children:s}),$r=()=>{let s=v.useContext(ch);if(!s)throw Error("useReactCompareSliderContext must be used within the Provider component");return s},Sm=({flip:s})=>{let c={width:"0.85rem",height:"0.85rem",clipPath:"polygon(100% 0%, 100% 100%, 30% 50%)",rotate:s?"180deg":"0deg",outline:`0.5rem solid var(${qe.handleColor})`,outlineOffset:"-0.5rem"};return l.jsx("div",{"aria-hidden":"true",className:"__rcs-handle-arrow",style:c})},qb=({className:s="__rcs-handle-root",buttonStyle:c,linesStyle:o,style:d,...u})=>{let{disabled:m,portrait:x}=$r(),g={boxSizing:"border-box",position:"relative",display:"inline-flex",flexDirection:x?"row":"column",placeItems:"center",width:x?"100%":void 0,height:x?void 0:"100%",cursor:m?"not-allowed":x?"ns-resize":"ew-resize",pointerEvents:"none",[qe.handleColor]:"rgba(255, 255, 255, 1)",...d},b={flexGrow:1,height:x?2:"100%",width:x?"100%":2,outline:`1px solid var(${qe.handleColor})`,outlineOffset:-1,pointerEvents:"auto",boxShadow:"0 0 4px rgba(0,0,0,.5)",...o},h={direction:"ltr",display:"grid",gridAutoFlow:"column",gap:"0.5rem",placeContent:"center",flexShrink:0,width:"3.5rem",height:"3.5rem",borderRadius:"50%",border:`2px solid var(${qe.handleColor})`,color:"inherit",pointerEvents:"auto",backdropFilter:"blur(0.5rem)",WebkitBackdropFilter:"blur(0.5rem)",backgroundColor:"rgba(0, 0, 0, 0.125)",boxShadow:"0 0 4px rgba(0,0,0,.35)",transform:x?"rotate(90deg)":void 0,...c};return l.jsxs("div",{"data-rcs":"handle",...u,className:s,style:g,children:[l.jsx("div",{className:"__rcs-handle-line",style:b}),l.jsxs("div",{className:"__rcs-handle-button",style:h,children:[l.jsx(Sm,{}),l.jsx(Sm,{flip:!0})]}),l.jsx("div",{className:"__rcs-handle-line",style:b})]})},Gb=({display:s="block",width:c="100%",height:o="100%",maxWidth:d="100%",boxSizing:u="border-box",objectFit:m="cover",objectPosition:x="center center",...g}={})=>({display:s,width:c,height:o,maxWidth:d,boxSizing:u,objectFit:m,objectPosition:x,...g}),zm=({alt:s,style:c,...o})=>{let d=Gb(c);return l.jsx("img",{"data-rcs":"image",...o,alt:s,style:d})},Vb=({style:s,...c})=>{let{disabled:o,portrait:d,position:u,handleRootRef:m,onHandleRootClick:x,onHandleRootKeyDown:g}=$r(),b={WebkitAppearance:"none",MozAppearance:"none",WebkitTapHighlightColor:"transparent",boxSizing:"border-box",position:"absolute",display:"flex",flexDirection:d?"row":"column",placeItems:"center",contain:"layout",top:d?"-50%":void 0,left:d?void 0:"-50%",width:"100%",height:"100%",background:"none",border:0,padding:0,pointerEvents:"none",appearance:"none",outline:0,zIndex:1,translate:d?`0 var(${qe.currentPosition}) 0`:`var(${qe.currentPosition}) 0 0`,backfaceVisibility:"hidden",willChange:"translate",...s};return Kr("keydown",g,m.current,Vr),Kr("click",x,m.current,Vr),l.jsx("div",{ref:m,tabIndex:0,"aria-label":"Click and drag or focus and use arrow keys to change the position of the slider","aria-orientation":d?"vertical":"horizontal","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":u.current,"aria-disabled":o,"data-rcs":"handle-root",role:"slider",style:b,...c})},Kb=({itemClip:s,portrait:c})=>s===ii.itemOne?c?`inset(0px 0px calc(100% - var(${qe.currentPosition})) 0px)`:`inset(0px calc(100% - var(${qe.currentPosition})) 0px 0px)`:s===ii.itemTwo?c?`inset(var(${qe.currentPosition}) 0px 0px 0px)`:`inset(0px 0px 0px var(${qe.currentPosition}))`:"none",Em=({item:s,style:c,...o})=>{let{clip:d,portrait:u}=$r(),m={KhtmlUserSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",gridArea:"1 / 1",maxWidth:"100%",overflow:"hidden",clipPath:Kb({itemClip:d===ii.all||d===s?s:void 0,portrait:u}),boxSizing:"border-box",transform:"translateZ(0)",userSelect:"none",zIndex:s===ii.itemOne?1:void 0,willChange:"clip-path",...c};return l.jsx("div",{"data-rcs":"item","data-rcs-item":s,...o,style:m})},Qb=`clamp(var(${qe.boundsPadding}), var(${qe.rawPosition}) - var(${qe.boundsPadding}) + var(${qe.boundsPadding}), calc(100% - var(${qe.boundsPadding})))`,Zb=({style:s,...c})=>{let{browsingContext:o,boundsPadding:d,changePositionOnHover:u,clip:m,isDragging:x,portrait:g,position:b,onTouchEnd:h,onPointerDown:w,onPointerMove:N,onPointerUp:U,interactiveTarget:K,rootRef:S,transition:G,canTransition:q}=$r(),Y={position:"relative",boxSizing:"border-box",display:"grid",maxWidth:"100%",maxHeight:"100%",overflow:"hidden",cursor:x?g?"ns-resize":"ew-resize":void 0,touchAction:"pan-y",userSelect:"none",KhtmlUserSelect:"none",msUserSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",transition:q&&G?`${qe.rawPosition} ${G}`:"none",[qe.rawPosition]:`${b.current}%`,[qe.boundsPadding]:d,[qe.currentPosition]:Qb,...s};return Kr("touchend",h,K,Vr),Kr("pointerdown",w,K,Vr),v.useEffect(()=>{let V=S.current,H=X=>{x||U(X)};return u&&(V.addEventListener("pointermove",N,Rr),V.addEventListener("pointerleave",H,Rr)),()=>{V.removeEventListener("pointermove",N),V.removeEventListener("pointerleave",H)}},[u,N,U,x,S]),v.useEffect(()=>{if(x)return o.addEventListener("pointermove",N,Rr),o.addEventListener("pointerup",U,Rr),()=>{o?.removeEventListener("pointermove",N),o?.removeEventListener("pointerup",U)}},[N,U,x,o]),l.jsx("div",{ref:S,style:Y,"data-rcs":"root","data-rcs-clip":m,...c})};(()=>{try{typeof CSS<"u"&&CSS.registerProperty({name:qe.rawPosition,syntax:"<percentage>",inherits:!0,initialValue:"50%"})}catch(s){console.debug("[react-compare-slider] register CSS property:",s)}})();const Xb=()=>globalThis.matchMedia?.("(prefers-reduced-motion: no-preference)")?.matches?"0.15s ease-out":"none",Jb=()=>!!globalThis.matchMedia?.("(pointer: coarse)")?.matches,$b=({boundsPadding:s="0px",browsingContext:c=globalThis,changePositionOnHover:o=!1,clip:d=ii.all,defaultPosition:u=50,disabled:m=!1,keyboardIncrement:x="5%",onlyHandleDraggable:g=Jb(),onPositionChange:b,portrait:h=!1,transition:w=Xb()}={})=>{let N=v.useRef(null),U=v.useRef(null),K=v.useRef(u),[S,G]=v.useState(!1),[q,Y]=v.useState(!0),[V,H]=v.useState(null),X=v.useCallback($=>{let ie=Math.min(Math.max($,0),100);N.current?.style.setProperty(qe.rawPosition,`${ie}%`),U.current?.setAttribute("aria-valuenow",`${Math.round(ie)}`),K.current=ie,b?.(ie)},[b]),le=v.useCallback(function({x:$,y:ie}){let{width:De,height:Ne,top:C,left:Q}=N.current.getBoundingClientRect();De===0||Ne===0||X((h?ie-C-c.scrollY:$-Q-c.scrollX)/(h?Ne:De)*100)},[c,h,X]),W=v.useCallback($=>{$.preventDefault(),!(m||$.button!==0)&&(le({x:$.pageX,y:$.pageY}),G(!0),Y(!0))},[m,le]),P=v.useCallback(function($){Y(!1),le({x:$.pageX,y:$.pageY})},[le]),ke=v.useCallback($=>{G(!1),Y(!0)},[]),B=v.useCallback($=>{G(!1),Y(!0)},[]),ae=v.useCallback($=>{$.preventDefault(),$.currentTarget?.focus()},[]),ne=v.useCallback($=>{if(!Object.values(In).includes($.key))return;$.preventDefault(),Y(!0);let ie=typeof x=="string"?Number.parseFloat(x):x/N.current?.getBoundingClientRect().width*100;X((h?$.key===In.ARROW_LEFT||$.key===In.ARROW_DOWN:$.key===In.ARROW_RIGHT||$.key===In.ARROW_UP)?K.current+ie:K.current-ie)},[x,h,X]);return v.useLayoutEffect(()=>{H(g?U.current:N.current)},[g]),v.useEffect(()=>{X(u)},[u,X]),{boundsPadding:s,browsingContext:c,changePositionOnHover:o,clip:d,defaultPosition:u,disabled:m,keyboardIncrement:x,onlyHandleDraggable:g,portrait:h,transition:w,onHandleRootKeyDown:ne,onPointerDown:W,onPointerMove:P,onPointerUp:ke,onTouchEnd:B,onHandleRootClick:ae,canTransition:q,isDragging:S,position:K,setPosition:X,setPositionFromBounds:le,rootRef:N,handleRootRef:U,interactiveTarget:V}},Wb=({boundsPadding:s,browsingContext:c,changePositionOnHover:o,clip:d,defaultPosition:u,disabled:m,handle:x,itemOne:g,itemTwo:b,keyboardIncrement:h,onPositionChange:w,onlyHandleDraggable:N,portrait:U,transition:K,...S})=>l.jsx(Yb,{...$b({boundsPadding:s,browsingContext:c,changePositionOnHover:o,clip:d,defaultPosition:u,disabled:m,keyboardIncrement:h,onPositionChange:w,onlyHandleDraggable:N,portrait:U,transition:K}),children:l.jsxs(Zb,{...S,children:[l.jsx(Em,{item:"itemOne",children:g}),l.jsx(Em,{item:"itemTwo",children:b}),l.jsx(Vb,{children:x||l.jsx(qb,{})})]})}),dh=["화장실","욕실","베란다","현관","거실","주방","세탁실","수영장","목욕탕"],Fb=["서울","경기","인천","기타"],Pb=["케라폭시","폴리우레아","실리콘"],Pc=[{slug:"seoul-yangcheon-mokdong-daerim-bathroom-34py",apartment:"목동대림아파트",region:"서울",district:"양천구",area:34,space:"화장실",spaceDetail:"바닥 + 샤워공간 벽",material:"케라폭시",duration:"1일",date:"2024-08-15",asPeriod:"2년",images:[{src:"/portfolio/seoul-yangcheon-mokdong-daerim-bathroom-34py/before_01.jpg",alt:"서울 양천구 목동대림아파트 화장실 줄눈시공 시공 전 — 체크무늬 타일 바닥",type:"before"},{src:"/portfolio/seoul-yangcheon-mokdong-daerim-bathroom-34py/before_02.jpg",alt:"목동대림아파트 화장실 줄눈 변색·곰팡이 시공 전 상태",type:"before"},{src:"/portfolio/seoul-yangcheon-mokdong-daerim-bathroom-34py/before_03.jpg",alt:"목동대림아파트 화장실 샤워공간 줄눈 시공 전 상태",type:"before"},{src:"/portfolio/seoul-yangcheon-mokdong-daerim-bathroom-34py/before_04.jpg",alt:"목동대림아파트 화장실 코너 줄눈 시공 전 디테일",type:"before"},{src:"/portfolio/seoul-yangcheon-mokdong-daerim-bathroom-34py/after-main.jpg",alt:"서울 양천구 목동대림아파트 화장실 케라폭시 줄눈시공 시공 후 대표",type:"after-main"},{src:"/portfolio/seoul-yangcheon-mokdong-daerim-bathroom-34py/after_01.jpg",alt:"목동대림아파트 화장실 바닥 케라폭시 줄눈 디테일",type:"after"},{src:"/portfolio/seoul-yangcheon-mokdong-daerim-bathroom-34py/after_02.jpg",alt:"목동대림아파트 화장실 샤워공간 벽 케라폭시 줄눈 마감",type:"after"},{src:"/portfolio/seoul-yangcheon-mokdong-daerim-bathroom-34py/after_03.jpg",alt:"목동대림아파트 화장실 코너 케라폭시 줄눈 마감",type:"after"},{src:"/portfolio/seoul-yangcheon-mokdong-daerim-bathroom-34py/after_04.jpg",alt:"목동대림아파트 화장실 줄눈선 균일 마감 디테일",type:"after"}],title:"목동대림아파트 화장실 케라폭시 줄눈시공 사례 | 디테일라인",description:"서울 양천구 목동 대림아파트 화장실 케라폭시 줄눈시공 사례. 바닥 + 샤워공간 벽 시공, 체크무늬 타일 패턴 살리는 균일한 줄눈 마감. 시공 후 2년 무상 A/S.",excerpt:"베이지·화이트 체크무늬 타일 화장실의 줄눈을 케라폭시로 정리한 사례.",body:{beforeText:"서울 양천구 목동 대림아파트 화장실은 베이지와 화이트의 체크무늬 타일로 마감되어 있었습니다. 사용 연한이 누적되며 줄눈선이 누렇게 변색되고 샤워공간 주변과 코너 부분에는 곰팡이가 자리잡아 일반 세제로는 회복이 어려운 상태였습니다. 타일 자체의 손상은 없어 리모델링 대신 줄눈만 교체하여 위생과 미관을 회복하길 원하셨습니다.",afterText:"바닥 전체와 샤워공간 벽에 케라폭시 줄눈을 시공해 줄눈선을 균일하게 정리했습니다. 화이트와 베이지 타일 사이의 줄눈이 깨끗하게 살아나면서 체크무늬 패턴이 더 또렷하게 표현되었고, 샤워공간의 위생 환경도 함께 회복되었습니다. 케라폭시의 항균 성분으로 향후 5~10년간 곰팡이 재발 걱정 없이 유지가 가능합니다. 시공 후 48시간이 지나면 정상 사용이 가능하며, 디테일라인은 시공 후 2년 무상 A/S를 보장합니다."},createdAt:"2024-08-15T00:00:00.000Z"},{slug:"seoul-gangdong-heritage-xi-bathroom-33py",apartment:"강동헤리티지자이",region:"서울",district:"강동구",area:33,space:"화장실",spaceDetail:"전체",material:"케라폭시",extraSpaces:[{space:"현관",material:"폴리우레아"},{space:"베란다",material:"폴리우레아"},{space:"세탁실",material:"폴리우레아"}],duration:"1일",date:"2024-06-29",asPeriod:"2년",images:[{src:"/portfolio/seoul-gangdong-heritage-xi-bathroom-33py/before_01.jpg",alt:"서울 강동구 강동헤리티지자이 화장실 줄눈시공 시공 전",type:"before"},{src:"/portfolio/seoul-gangdong-heritage-xi-bathroom-33py/before_02.jpg",alt:"강동헤리티지자이 화장실 줄눈 변색·곰팡이 상태",type:"before"},{src:"/portfolio/seoul-gangdong-heritage-xi-bathroom-33py/before_03.jpg",alt:"강동헤리티지자이 현관·베란다 줄눈 시공 전 상태",type:"before"},{src:"/portfolio/seoul-gangdong-heritage-xi-bathroom-33py/after_01.jpg",alt:"서울 강동구 강동헤리티지자이 화장실 케라폭시 줄눈시공 시공 후 대표",type:"after"},{src:"/portfolio/seoul-gangdong-heritage-xi-bathroom-33py/after_02.jpg",alt:"강동헤리티지자이 화장실 케라폭시 줄눈 디테일",type:"after"},{src:"/portfolio/seoul-gangdong-heritage-xi-bathroom-33py/after_03.jpg",alt:"강동헤리티지자이 현관·베란다·세탁실 폴리우레아 줄눈 마감",type:"after"}],title:"강동헤리티지자이 화장실·현관·베란다·세탁실 줄눈시공 사례 | 디테일라인",description:"서울 강동구 강동헤리티지자이 화장실 케라폭시 + 현관·베란다·세탁실 폴리우레아 줄눈시공 사례. 공간별 맞춤 자재 통합 시공, 시공 후 2년 무상 A/S.",excerpt:"화장실은 케라폭시, 현관·베란다·세탁실은 폴리우레아로 한 번에 정리한 통합 시공 사례.",body:{beforeText:"서울 강동구 강동헤리티지자이의 화장실은 사용 연한이 누적되며 줄눈선이 변색되고 코너 부분에 곰팡이가 발생한 상태였습니다. 더불어 현관·베란다·세탁실 등 외부 공간의 줄눈도 균열과 들뜸이 진행 중이었습니다. 고객께서는 공간별로 따로 의뢰하지 않고 한 번에 통합 시공으로 정리하기를 원하셨습니다.",afterText:"화장실은 내수성·항균 성능이 강한 케라폭시로 시공해 위생 환경을 회복하고, 현관·베란다·세탁실 등 외부 공간은 자외선·온도 변화에 강하면서도 가성비가 좋은 폴리우레아로 시공했습니다. 공간 특성에 맞춰 자재를 다르게 적용함으로써 내구성과 비용의 균형을 모두 잡았습니다. 시공 후 48시간이 지나면 정상 사용이 가능하며, 디테일라인은 시공 후 2년 무상 A/S를 보장합니다."},createdAt:"2024-06-29T00:00:00.000Z"},{slug:"gyeonggi-suwon-hanil-town-bathroom-32py",apartment:"한일타운아파트",region:"경기",district:"수원시 장안구",area:32,space:"화장실",spaceDetail:"전체",material:"케라폭시",duration:"1일",date:"2024-04-07",asPeriod:"2년",images:[{src:"/portfolio/gyeonggi-suwon-hanil-town-bathroom-32py/before_01.jpg",alt:"경기 수원시 장안구 한일타운아파트 화장실 줄눈시공 시공 전",type:"before"},{src:"/portfolio/gyeonggi-suwon-hanil-town-bathroom-32py/before_02.jpg",alt:"한일타운아파트 화장실 줄눈 변색 상태",type:"before"},{src:"/portfolio/gyeonggi-suwon-hanil-town-bathroom-32py/before_03.jpg",alt:"한일타운아파트 화장실 코너 줄눈 시공 전 디테일",type:"before"},{src:"/portfolio/gyeonggi-suwon-hanil-town-bathroom-32py/before_04.jpg",alt:"한일타운아파트 화장실 샤워공간 줄눈 시공 전 상태",type:"before"},{src:"/portfolio/gyeonggi-suwon-hanil-town-bathroom-32py/before_05.jpg",alt:"한일타운아파트 화장실 바닥 줄눈 시공 전 상태",type:"before"},{src:"/portfolio/gyeonggi-suwon-hanil-town-bathroom-32py/after_01.jpg",alt:"경기 수원시 장안구 한일타운아파트 화장실 케라폭시 줄눈시공 시공 후 대표",type:"after"},{src:"/portfolio/gyeonggi-suwon-hanil-town-bathroom-32py/after_02.jpg",alt:"한일타운아파트 화장실 케라폭시 줄눈 디테일",type:"after"},{src:"/portfolio/gyeonggi-suwon-hanil-town-bathroom-32py/after_03.jpg",alt:"한일타운아파트 화장실 케라폭시 줄눈 코너 마감",type:"after"},{src:"/portfolio/gyeonggi-suwon-hanil-town-bathroom-32py/after_04.jpg",alt:"한일타운아파트 화장실 케라폭시 줄눈 샤워공간 마감",type:"after"},{src:"/portfolio/gyeonggi-suwon-hanil-town-bathroom-32py/after_05.jpg",alt:"한일타운아파트 화장실 케라폭시 줄눈 균일 마감 디테일",type:"after"}],title:"수원 한일타운아파트 화장실 케라폭시 줄눈시공 사례 | 디테일라인",description:"경기 수원시 장안구 한일타운아파트 화장실 케라폭시 줄눈시공 사례. 변색·곰팡이 해결, 시공 후 2년 무상 A/S.",excerpt:"한일타운아파트 화장실 줄눈을 케라폭시로 새것처럼 정리한 사례.",body:{beforeText:"경기 수원시 장안구 한일타운아파트 화장실은 사용 연한이 쌓이며 줄눈선이 누렇게 변색되고 코너와 샤워공간 주변에는 곰팡이가 자리잡아 일반 세제로 회복이 어려운 상태였습니다. 타일 자체의 손상은 없어 리모델링 대신 줄눈만 교체하여 위생과 미관을 한 번에 회복하기로 했습니다.",afterText:"화장실 전체에 케라폭시 줄눈을 시공해 균일한 줄눈선을 만들었습니다. 케라폭시의 강한 내수성과 항균 성분으로 향후 5~10년간 곰팡이 재발 걱정 없이 위생 유지가 가능하며, 청소 한 번으로 새것처럼 회복됩니다. 시공 후 48시간이 지나면 정상 사용이 가능하고, 디테일라인은 시공 후 2년 무상 A/S를 보장합니다."},createdAt:"2024-04-07T00:00:00.000Z"},{slug:"seoul-songpa-helio-city-bathroom-39py",apartment:"송파 헬리오시티",region:"서울",district:"송파구",area:39,space:"화장실",spaceDetail:"바닥",material:"케라폭시",extraSpaces:[{space:"주방",material:"실리콘"},{space:"현관",material:"폴리우레아"}],duration:"1일",date:"2024-04-07",asPeriod:"2년",images:[{src:"/portfolio/seoul-songpa-helio-city-bathroom-39py/before_01.jpg",alt:"서울 송파구 헬리오시티 화장실 바닥 줄눈시공 시공 전",type:"before"},{src:"/portfolio/seoul-songpa-helio-city-bathroom-39py/before_02.jpg",alt:"헬리오시티 화장실 바닥 줄눈 변색 상태",type:"before"},{src:"/portfolio/seoul-songpa-helio-city-bathroom-39py/before_03.jpg",alt:"헬리오시티 주방 실리콘 코킹 시공 전 상태",type:"before"},{src:"/portfolio/seoul-songpa-helio-city-bathroom-39py/before_04.jpg",alt:"헬리오시티 주방 싱크대 주변 시공 전 상태",type:"before"},{src:"/portfolio/seoul-songpa-helio-city-bathroom-39py/before_05.jpg",alt:"헬리오시티 현관 바닥 줄눈 시공 전 상태",type:"before"},{src:"/portfolio/seoul-songpa-helio-city-bathroom-39py/before_06.jpg",alt:"헬리오시티 현관 코너 시공 전 디테일",type:"before"},{src:"/portfolio/seoul-songpa-helio-city-bathroom-39py/after_01.jpg",alt:"서울 송파구 헬리오시티 화장실 바닥 케라폭시 줄눈시공 시공 후 대표",type:"after"},{src:"/portfolio/seoul-songpa-helio-city-bathroom-39py/after_02.jpg",alt:"헬리오시티 화장실 바닥 케라폭시 줄눈 디테일",type:"after"},{src:"/portfolio/seoul-songpa-helio-city-bathroom-39py/after_03.jpg",alt:"헬리오시티 주방 실리콘 코킹 마감 디테일",type:"after"},{src:"/portfolio/seoul-songpa-helio-city-bathroom-39py/after_04.jpg",alt:"헬리오시티 주방 싱크대 실리콘 코킹 마감",type:"after"},{src:"/portfolio/seoul-songpa-helio-city-bathroom-39py/after_05.jpg",alt:"헬리오시티 현관 폴리우레아 줄눈 마감",type:"after"},{src:"/portfolio/seoul-songpa-helio-city-bathroom-39py/after_06.jpg",alt:"헬리오시티 현관 코너 폴리우레아 줄눈 디테일",type:"after"}],title:"송파 헬리오시티 화장실·주방·현관 줄눈시공 사례 | 디테일라인",description:"서울 송파구 헬리오시티 화장실 바닥 케라폭시 + 주방 실리콘 코킹 + 현관 폴리우레아 줄눈시공 사례. 공간별 맞춤 자재 통합 시공, 시공 후 2년 무상 A/S.",excerpt:"화장실 바닥·주방·현관을 자재별로 맞춤 시공한 통합 사례.",body:{beforeText:"서울 송파구 헬리오시티는 입주 후 사용 연한이 누적되며 화장실 바닥 줄눈이 변색되고, 주방 싱크대 주변의 실리콘은 들뜸과 곰팡이가 발생한 상태였습니다. 현관 바닥의 줄눈선도 균열이 진행 중이었습니다. 고객께서는 공간별 특성에 맞춰 적합한 자재로 한 번에 정리하길 원하셨습니다.",afterText:"화장실 바닥은 내수성이 핵심이라 케라폭시로 시공해 위생 환경을 회복했고, 주방 싱크대 주변은 들뜸이 있던 기존 실리콘을 깨끗하게 제거하고 새로 코킹해 곰팡이 발생 가능성을 차단했습니다. 현관 바닥은 자외선·온도 변화에 강한 폴리우레아로 가성비 시공을 진행했습니다. 공간별 자재 매칭으로 내구성과 비용을 모두 합리적으로 잡았습니다. 디테일라인은 시공 후 2년 무상 A/S를 보장합니다."},createdAt:"2024-04-07T00:00:00.000Z"}];function Ib(s){return Pc.find(c=>c.slug===s)}function ph(s){return[s.space,...(s.extraSpaces??[]).map(c=>c.space)]}function ev(s){return[s.material,...(s.extraSpaces??[]).map(c=>c.material)]}function tv(s){return Pc.filter(c=>{if(s.spaces?.length){const o=ph(c);if(!s.spaces.some(d=>o.includes(d)))return!1}if(s.regions?.length&&!s.regions.includes(c.region))return!1;if(s.materials?.length){const o=ev(c);if(!s.materials.some(d=>o.includes(d)))return!1}return!0}).sort((c,o)=>o.date.localeCompare(c.date))}function av(s){const c=s.images.find(d=>d.type==="after-main")??s.images.find(d=>d.type==="after")??s.images[0],o=s.images.find(d=>d.type==="before");return{main:c,before:o}}function lv(s){return s.district?`${s.region} · ${s.district}`:s.region}const nv=["전체",...dh.filter(s=>s!=="욕실")];function iv(){const[s,c]=v.useState("전체"),[o,d]=v.useState(null),u=v.useMemo(()=>Pc.map(x=>{const g=x.images.find(w=>w.type==="after-main")??x.images.find(w=>w.type==="after"),b=x.images.find(w=>w.type==="before"),h=ph(x).map(w=>w==="욕실"?"화장실":w);return{id:x.slug,slug:x.slug,category:x.space==="욕실"?"화장실":x.space,allCategories:h,title:`${x.apartment} ${x.area}평 ${x.space}`,location:x.district?`${x.region} ${x.district}`:x.region,image:g?.src??"",before:b?.src,after:g?.src}}),[]);v.useEffect(()=>{if(!o)return;const x=N=>{N.key==="Escape"&&d(null)},g=window.scrollY,b=document.documentElement,h=document.body,w=b.style.scrollBehavior;return b.style.overflow="hidden",h.style.overflow="hidden",h.style.position="fixed",h.style.top=`-${g}px`,h.style.left="0",h.style.right="0",h.style.width="100%",window.addEventListener("keydown",x),()=>{b.style.overflow="",h.style.overflow="",h.style.position="",h.style.top="",h.style.left="",h.style.right="",h.style.width="",b.style.scrollBehavior="auto",window.scrollTo(0,g),b.style.scrollBehavior=w,window.removeEventListener("keydown",x)}},[o]);const m=v.useMemo(()=>s==="전체"?u:u.filter(x=>x.allCategories.includes(s)),[s,u]);return l.jsxs(l.Fragment,{children:[l.jsx("section",{id:"portfolio",className:"py-20 px-6 md:px-12 lg:px-20 bg-[var(--bg)]",children:l.jsxs("div",{className:"max-w-7xl mx-auto",children:[l.jsxs("div",{className:"mb-10",children:[l.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Our Work"}),l.jsx("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:"완성된 프로젝트"}),l.jsx("p",{className:"text-[var(--muted)] mt-1 sm:mt-3 text-base",children:"고객님의 공간을 완벽하게 되살렸습니다"})]}),l.jsx("div",{className:"flex flex-wrap gap-2 mb-10",children:nv.map(x=>l.jsx("button",{onClick:()=>c(x),className:`px-5 py-2 rounded-sm text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${s===x?"bg-[var(--accent)] text-white":"bg-white text-[var(--muted)] border border-[var(--line)] hover:border-[var(--line-strong)]"}`,children:x},x))}),m.length>0?l.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4",children:m.map(x=>l.jsxs("div",{onClick:()=>d(x),className:"group relative rounded-sm overflow-hidden cursor-pointer aspect-[3/4]",children:[l.jsx("img",{src:x.image,alt:`${x.title} 줄눈시공 사례 - 디테일라인`,className:"w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"}),l.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-4",children:[l.jsx("span",{className:"inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-sm mb-2",children:x.category}),l.jsx("h3",{className:"text-white font-bold text-sm leading-snug",children:x.title}),l.jsx("p",{className:"text-white/70 text-xs mt-1",children:x.location})]})]},x.id))}):l.jsxs("div",{className:"border border-dashed border-[var(--line-strong)] rounded-sm py-16 px-6 text-center bg-white/40",children:[l.jsx("i",{className:"ri-image-line text-4xl text-[var(--muted-2)] mb-4 block","aria-hidden":"true"}),l.jsx("h3",{className:"text-2xl text-[var(--ink)] mb-3",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:"시공 사례 — 곧 공개됩니다"}),l.jsxs("p",{className:"text-[var(--muted)] text-sm leading-relaxed max-w-md mx-auto",children:["현재 자체 촬영 시공 사례를 정리 중입니다.",l.jsx("br",{}),"실제 현장의 Before / After 사진과 시공 디테일을 곧 보여드리겠습니다."]}),l.jsx("p",{className:"text-[var(--muted-2)] text-xs mt-6",children:"시공 사례가 필요하시면 카카오톡·전화로 즉시 안내해 드립니다."})]}),l.jsx("div",{className:"text-center mt-10",children:l.jsxs(Ee,{to:"/portfolio",className:"inline-flex items-center gap-2 px-6 py-2.5 border border-[var(--line-strong)] rounded-[2px] text-sm text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] hover:border-[var(--ink)] transition-colors cursor-pointer",children:["전체 시공사례 보기 ",l.jsx("span",{children:"→"})]})})]})}),o&&l.jsx("div",{className:"fixed inset-0 z-[100] bg-black/80 flex items-center justify-center px-4",onClick:()=>d(null),children:l.jsxs("div",{className:"relative w-full max-w-3xl",onClick:x=>x.stopPropagation(),children:[l.jsx("button",{type:"button",onClick:()=>d(null),className:"absolute -top-11 right-0 w-9 h-9 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors","aria-label":"닫기",children:l.jsx("i",{className:"ri-close-line text-xl"})}),l.jsx("div",{className:"rounded-sm overflow-hidden shadow-2xl bg-[var(--dark)]",children:o.before&&o.after?l.jsx(Wb,{itemOne:l.jsx(zm,{src:o.before,alt:`${o.title} 시공 전`,style:{objectFit:"cover"}}),itemTwo:l.jsx(zm,{src:o.after,alt:`${o.title} 시공 후`,style:{objectFit:"cover"}}),style:{width:"100%",maxHeight:"80vh"}}):l.jsx("img",{src:o.image,alt:`${o.title} 줄눈시공 사례 - 디테일라인`,onClick:()=>d(null),className:"w-full max-h-[80vh] object-contain cursor-zoom-out"})}),l.jsxs("div",{className:"mt-3 text-white",children:[l.jsx("p",{className:"text-sm font-semibold",children:o.title}),l.jsx("p",{className:"text-xs text-white/70 mt-1",children:o.location})]})]})})]})}const rv=[{n:"01",t:"대표 직접 시공",en:"Founder on every site",d:"외주·하청 없습니다. 첫 현장부터 마지막 줄눈까지 대표가 직접 와서 시공합니다. 7년차, 2,400 가구의 손맛 그대로."},{n:"02",t:"KC 인증 친환경 자재",en:"Certified, low-VOC",d:"케라폭시·정품 폴리우레아만 사용합니다. 각 시공한 자재서에 가족이 있는 동네 수준의 친환경 등급을 고집합니다."},{n:"03",t:"2년 무상 A/S · 서면",en:"2-year written warranty",d:"에폭시 계열 자재 시공에 한해 시공 후 2년간 무상 재시공. 들뜸·변색·곰팡이가 발생하면 서면 보증서대로 책임집니다."},{n:"04",t:"정밀 기계 작업",en:"Calibrated tooling",d:"커터·믹서·트랜퍼스 — 도구 하나하나를 매 현장 캘리브레이션. 균일한 폭, 균일한 마감, 균일한 광택."}];function sv(){return l.jsxs("section",{id:"why",className:"relative overflow-hidden bg-[var(--dark)] py-20 px-6 md:px-12 lg:px-20",children:[l.jsx("div",{className:"why-bg","aria-hidden":"true"}),l.jsxs("div",{className:"relative max-w-7xl mx-auto",children:[l.jsxs("div",{className:"mb-10",children:[l.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Why Detailline"}),l.jsxs("h2",{className:"text-4xl md:text-5xl text-[var(--on-dark)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:["싸지 않습니다. 대신",l.jsx("br",{}),"10년 후에도 그 자리에 있습니다."]}),l.jsxs("p",{className:"text-white/70 mt-1 sm:mt-3 text-base max-w-[56ch]",children:["저희는 가장 싼 업체가 아닙니다. 가장 오래 가게 만드는 업체입니다.",l.jsx("br",{}),"아래 네 가지는 디테일라인이 단 한 번도 타협한 적 없는 기준입니다."]})]}),l.jsx("div",{className:"why-grid mt-12",children:rv.map(s=>l.jsxs("div",{className:"why-cell",children:[l.jsxs("span",{className:"why-cell-num",children:["— ",s.n]}),l.jsx("h3",{className:"why-cell-title",children:s.t}),l.jsx("p",{className:"why-cell-en",children:s.en}),l.jsx("p",{className:"why-cell-desc",children:s.d})]},s.n))}),l.jsxs("div",{className:"why-foot",children:[l.jsx("p",{className:"why-quote-text",children:"“줄눈은 결국 사람이 합니다. 그 위에 누가 잡고 있느냐가 10년을 가릅니다.”"}),l.jsx("span",{className:"why-quote-caption",children:"— 대표 제이슨 —"})]})]}),l.jsx("style",{children:ov})]})}const ov=`
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
`,cv="/assets/bathroom-qafbnYCD.JPG",dv="/assets/outdoor_wc-CJQL97Jp.JPG",pv="/assets/living-BQx9vWF-.jpg",uv="/assets/entrance-D-gIu59c.jpg",fv="/assets/veranda-BQTujKkw.jpg",mv="/assets/commercial-BUQpqBDH.jpg",hv=[{n:"01",t:"욕실 · 화장실",en:"Bathroom",d:"에폭시 계열 전용. 물이 닿는 환경엔 폴리우레아 시공 불가 → 2년 무상 A/S 대상.",tag:"에폭시 계열",photo:cv},{n:"02",t:"외부 화장실",en:"Outdoor WC",d:"내부 화장실과 동일 → 에폭시 계열만 시공. 물 접촉 환경에서 폴리우레아 시공 불가.",tag:"에폭시 계열",photo:dv},{n:"03",t:"거실",en:"Living",d:"바닥 줄눈. 20평대 기준 폴리우레아 100만원 · 에폭시 150만원. 30평+ 별도 견적.",tag:"에폭시 / 폴리우레아",photo:pv},{n:"04",t:"현관",en:"Entrance",d:"첫인상을 결정짓는 1평. 외부 접촉 폴리우레아 가성비 선택 권장.",tag:"폴리우레아 권장",photo:uv},{n:"05",t:"베란다",en:"Veranda",d:"결로·온도차에 폴리우레아 권장. 빠른 경화 2~4시간 마무리.",tag:"폴리우레아 권장",photo:fv},{n:"06",t:"상업 공간",en:"Commercial",d:"카페·매장·호텔·수영장. 야간·새벽 시공 협의 가능. 환경별 자재 매칭.",tag:"맞춤 자재",photo:mv}];function xv(){return l.jsxs("section",{id:"scope",className:"scope-section bg-[var(--bg)] py-20 px-6 md:px-12 lg:px-20",children:[l.jsxs("div",{className:"max-w-7xl mx-auto",children:[l.jsxs("div",{className:"mb-10",children:[l.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Scope"}),l.jsxs("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:["줄눈이 필요한 ",l.jsx("br",{}),l.jsx("span",{className:"text-[var(--accent)]",children:"모든 곳에"})]}),l.jsxs("p",{className:"text-[var(--muted)] mt-1 sm:mt-3 text-base max-w-[56ch]",children:["주거 · 상업 · 시설까지. 디테일라인은 환경별로 자재와 시공 방식을 다르게 가져갑니다.",l.jsx("br",{}),"한 가지 방법으로 모든 곳을 시공하지 않습니다."]})]}),l.jsx("div",{className:"scope-grid mt-12",children:hv.map(s=>l.jsxs("article",{className:"scope-card",children:[l.jsxs("div",{className:`scope-imgph ${s.photo?"has-photo":""}`,children:[s.photo?l.jsx("img",{src:s.photo,alt:`${s.t} 줄눈시공 - 디테일라인`,className:"scope-imgph-img",loading:"lazy"}):l.jsx("span",{className:"scope-imgph-label","aria-hidden":"true",children:s.en.toUpperCase()}),l.jsx("span",{className:"scope-imgph-corner","aria-hidden":"true",children:s.n})]}),l.jsxs("div",{className:"scope-meta",children:[l.jsxs("span",{className:"scope-meta-mono",children:["— ",s.n," · ",s.en.toUpperCase()]}),l.jsx("h3",{className:"scope-meta-title",children:s.t}),l.jsx("p",{className:"scope-meta-body",children:s.d}),l.jsxs("span",{className:"scope-meta-tag",children:[l.jsx("span",{className:"scope-tag-dot","aria-hidden":"true"}),s.tag]})]})]},s.n))})]}),l.jsx("style",{children:gv})]})}const gv=`
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
`,bv="/assets/re_1-iaNcuT_7.jpg",vv="/assets/re_2-CcDcgcOi.jpg",yv="/assets/re_3-DPjtmN0S.jpg",jv=[{star:5,t:"줄눈은 다 똑같은 줄 알았는데",name:"최OO 고객님",photo:{label:"BANPO",corner:"거실 특",src:bv},body:"다른 곳에서 한 줄눈이 2년만에 변색됐어요. 디테일라인은 하루 종일 걸렸지만 마감이 차원이 다릅니다. 모서리, 코너, 실리콘까지 손이 갔어요. 비싸지만 다시 하라면 또 합니다."},{star:5,t:"대표님이 직접 오십니다",name:"정OO 고객님",photo:{label:"HANNAM",corner:"욕실",src:vv},body:"견적부터 시공, A/S 안내까지 같은 분이세요. 중간에 누구한테 다시 설명할 필요가 없습니다. 시공도 깔끔하고, 시공 후에도 친절히 안내해 주시고요."},{star:5,t:"2년 보증서 진짜 줍니다",name:"강OO 고객님",photo:{label:"JAMSIL",corner:"욕실",src:yv},body:"대부분 구두 보증인데 여기는 서면으로 보증서를 줍니다. 솔직히 그거 하나만으로도 결정 났어요. 시공도 깔끔하고 청소까지 다 해주고 가시는 게 인상 깊었습니다."}];function kv({n:s}){return l.jsx("div",{className:"rev-stars",role:"img","aria-label":`별점 5점 만점에 ${s}점`,children:[0,1,2,3,4].map(c=>l.jsx("svg",{className:c<s?"rev-star rev-star-filled":"rev-star rev-star-empty",width:"13",height:"13",viewBox:"0 0 13 13","aria-hidden":"true",children:l.jsx("path",{d:"M6.5 0l1.8 4.3 4.7.4-3.6 3 1.1 4.6L6.5 9.9 2.5 12.3l1.1-4.6L0 4.7l4.7-.4z"})},c))})}function Nv(){return l.jsxs("section",{id:"reviews",className:"rev-section bg-[var(--bg-2)] py-20 px-6 md:px-12 lg:px-20",children:[l.jsxs("div",{className:"max-w-7xl mx-auto",children:[l.jsxs("div",{className:"mb-10",children:[l.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Reviews"}),l.jsxs("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:[l.jsx("span",{className:"md:block text-[var(--accent)]",children:"지금까지 2,000세대 이상의"})," ",l.jsx("span",{className:"md:block",children:"가족이 맡겨 주셨습니다"})]}),l.jsxs("p",{className:"text-[var(--muted)] mt-1 sm:mt-3 text-base max-w-[56ch]",children:["실제 시공 후 30일 내 작성된 후기 중 일부입니다.",l.jsx("br",{}),"좋은 말씀도, 아쉬운 말씀도 모두 받고 있습니다."]})]}),l.jsx("div",{className:"rev-grid mt-12",children:jv.map(s=>l.jsxs("article",{className:"rev-card",children:[l.jsx("div",{className:"rev-card-photo",children:l.jsxs("div",{className:`rev-imgph ${s.photo.src?"has-photo":""}`,children:[s.photo.src?l.jsx("img",{src:s.photo.src,alt:`${s.photo.label} · ${s.photo.corner}`,className:"rev-imgph-img",loading:"lazy"}):l.jsx("span",{className:"rev-imgph-label","aria-hidden":"true",children:s.photo.label}),l.jsx("span",{className:"rev-imgph-corner","aria-hidden":"true",children:s.photo.corner})]})}),l.jsxs("div",{className:"rev-card-body",children:[l.jsx(kv,{n:s.star}),l.jsxs("h3",{className:"rev-card-title",children:["“",s.t,"”"]}),l.jsx("p",{className:"rev-card-text",children:s.body}),l.jsx("div",{className:"rev-card-footer",children:l.jsx("div",{className:"rev-card-name",children:s.name})})]})]},s.name))})]}),l.jsx("style",{children:wv})]})}const wv=`
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
`,qr="spc:quote-prefill",Bc="spc:quote-prefill-changed",Sv={화장실:"화장실","거실 바닥":"거실",현관:"현관",베란다:"베란다",세탁실:"기타","다용도/실외기실":"기타"};function zv(s){return Sv[s]??"기타"}function Ev(s){const c=new Set;for(const o of s)c.add(zv(o));return Array.from(c)}const Ht={화장실:{label:"화장실",en:"BATHROOM",icon:"🛁",rec:"kera",materialLocked:!0,multiple:!0,typeAxis:{lbl:"타입",options:["욕조형","샤워부스형"]},scopeAxis:{lbl:"범위",options:["바닥만","전체(바닥+벽)"]},variants:[{id:"bt-floor",label:"욕조형 · 바닥만",type:"욕조형",scope:"바닥만",kera:{신축:40,구축:50},poly:null},{id:"bt-full",label:"욕조형 · 전체 (바닥+벽)",type:"욕조형",scope:"전체(바닥+벽)",kera:{신축:90,구축:100},poly:null},{id:"sh-floor",label:"샤워부스형 · 바닥만",type:"샤워부스형",scope:"바닥만",kera:{신축:45,구축:55},poly:null},{id:"sh-full",label:"샤워부스형 · 전체 (바닥+벽)",type:"샤워부스형",scope:"전체(바닥+벽)",kera:{신축:95,구축:105},poly:null}]},"거실 바닥":{label:"거실 바닥",en:"LIVING FLOOR",icon:"🛋️",rec:"kera",materialLocked:!0,note:"34평 이하 기준",variants:[{id:"lv",label:"34평 미만",kera:{신축:150,구축:150},poly:null}]},현관:{label:"현관",en:"ENTRANCE",icon:"🚪",rec:"poly",materialLocked:!1,variants:[{id:"ent",label:"바닥",kera:{신축:25,구축:25},poly:{신축:5,구축:10}}]},세탁실:{label:"세탁실",en:"LAUNDRY",icon:"🧺",rec:"poly",materialLocked:!1,variants:[{id:"ldy",label:"바닥",kera:{신축:30,구축:30},poly:{신축:15,구축:15}}]},베란다:{label:"베란다",en:"VERANDA",icon:"🌿",rec:"poly",materialLocked:!1,variants:[{id:"ver",label:"바닥",kera:{신축:30,구축:30},poly:{신축:15,구축:15}}]},"다용도/실외기실":{label:"다용도/실외기실",en:"UTILITY",icon:"🪟",rec:"poly",materialLocked:!1,variants:[{id:"utl",label:"바닥",kera:{신축:20,구축:20},poly:{신축:10,구축:10}}]}},Qr={kera:"케라폭시",poly:"폴리우레아"},zc={1:{name:"세트 1",sub:"기본",desc:"화장실 바닥 ×2 + 현관",prices:{신축:100,구축:120},components:[{space:"화장실",variantId:"bt-floor",material:"kera"},{space:"화장실",variantId:"sh-floor",material:"kera"},{space:"현관",variantId:"ent",material:"poly"}],services:[]},2:{name:"세트 2",sub:"표준",desc:"세트 1 + 양조벽 or 샤워벽 3면 ×1곳",prices:{신축:125,구축:145},components:[{space:"화장실",variantId:"bt-full",material:"kera"},{space:"화장실",variantId:"sh-floor",material:"kera"},{space:"현관",variantId:"ent",material:"poly"}],services:["젠 다이 실리콘 ×2","세면대 실리콘 ×2"]},3:{name:"세트 3",sub:"완성",desc:"화장실 바닥 ×2 + 전체벽 ×2 + 현관",prices:{신축:220,구축:240},components:[{space:"화장실",variantId:"bt-full",material:"kera"},{space:"화장실",variantId:"sh-full",material:"kera"},{space:"현관",variantId:"ent",material:"poly"}],services:["젠 다이 실리콘 ×2","세면대 실리콘 ×2","싱크볼 실리콘","주방벽 케라폭시"]},4:{name:"세트 4",sub:"확장",desc:"세트 2 + 세탁실",prices:{신축:140,구축:160},components:[{space:"화장실",variantId:"bt-full",material:"kera"},{space:"화장실",variantId:"sh-floor",material:"kera"},{space:"현관",variantId:"ent",material:"poly"},{space:"세탁실",variantId:"ldy",material:"poly"}],services:["젠 다이 실리콘 ×2","세면대 실리콘 ×2","주방 실리콘","싱크볼 실리콘"]}},Av=["화장실","거실 바닥","현관","세탁실","베란다","다용도/실외기실"],li=(s,c)=>Ht[s]?.variants.find(o=>o.id===c),Uc=(s,c)=>({"욕조형|바닥만":"bt-floor","욕조형|전체(바닥+벽)":"bt-full","샤워부스형|바닥만":"sh-floor","샤워부스형|전체(바닥+벽)":"sh-full"})[`${s}|${c}`]??"bt-floor",Hc=(s,c)=>{const o=Ht[s.space],d=li(s.space,s.variantId);if(!o||!d)return null;const u=o.materialLocked?o.rec:s.material,m=d[u];return m?m[c]:null},Cr=()=>`sel-${Math.random().toString(36).slice(2,9)}-${Date.now().toString(36)}`,ol=s=>s.toLocaleString("ko-KR");function Tv(){const[s,c]=v.useState("신축"),[o,d]=v.useState([]),[u,m]=v.useState(null),[x,g]=v.useState(!1),[b,h]=v.useState(!1),w=o.filter(B=>B.space==="화장실"),N=w.length>=1,U=w.length>=2,K=B=>o.some(ae=>ae.space===B),S=()=>m(null),G=B=>{if(S(),K(B))d(ae=>ae.filter(ne=>ne.space!==B));else{const ae=Ht[B],ne=ae.variants[0];d($=>[...$,{key:Cr(),space:B,variantId:ne.id,material:ae.rec}])}},q=()=>{S(),d(N?B=>B.filter(ae=>ae.space!=="화장실"):B=>[...B,{key:Cr(),space:"화장실",variantId:"bt-floor",material:"kera"}])},Y=()=>{if(N)if(S(),U){const ae=o.map((ne,$)=>ne.space==="화장실"?$:-1).filter(ne=>ne>=0)[1];d(ne=>ne.filter(($,ie)=>ie!==ae))}else{const B=o.find(ie=>ie.space==="화장실"),ne=(B?li("화장실",B.variantId)?.type:void 0)==="욕조형"?"샤워부스형":"욕조형",$=Uc(ne,"바닥만");d(ie=>[...ie,{key:Cr(),space:"화장실",variantId:$,material:"kera"}])}},V=B=>{if(u===B){m(null),d([]);return}const ne=zc[B].components.map($=>({key:Cr(),space:$.space,variantId:$.variantId,material:$.material}));d(ne),m(B)},H=(B,ae)=>{S(),d(ne=>ne.map($=>$.key===B?{...$,...ae}:$))},X=B=>{S(),d(ae=>ae.filter(ne=>ne.key!==B))},le=()=>{d([]),m(null)},W=v.useMemo(()=>{const B=o.filter(C=>C.space==="화장실"),ae=o.map(C=>{const Q=Ht[C.space],I=li(C.space,C.variantId),be=Q.materialLocked?Q.rec:C.material,fe=Hc(C,s),k=B.length>1&&C.space==="화장실";return{key:C.key,space:C.space,icon:Q.icon,label:`${C.space}${k?" · "+I.label:""}`,material:be,unit:fe}}),ne=ae.reduce((C,Q)=>C+(Q.unit??0),0),$=ae.some(C=>C.unit===null),ie=u?zc[u]:null,De=ie?ie.prices[s]:ne,Ne=ie?Math.max(0,ne-De):0;return{lineItems:ae,itemsSum:ne,hasNull:$,finalTotal:De,savings:Ne,set:ie}},[o,s,u]),P=()=>{if(o.length===0)return;const B=[];B.push(`[가격 계산기에서 전달된 구성 · ${s} 기준]`),W.set&&B.push(`✓ ${W.set.name} · ${W.set.sub} (${W.set.desc})`),B.push("");const ae=o.filter(ie=>ie.space==="화장실").length;let ne=0;for(const ie of o){const De=Ht[ie.space],Ne=li(ie.space,ie.variantId),C=De.materialLocked?De.rec:ie.material,Q=Qr[C],I=Hc(ie,s),be=I===null?"별도 견적":`${I}만원`;let fe;ie.space==="화장실"?(ne+=1,fe=`화장실${ae>1?` ${ne}`:""} · ${Ne.label}`):De.variants.length>1||Ne.label!=="바닥"?fe=`${ie.space} · ${Ne.label}`:fe=ie.space,B.push(`· ${fe} · ${Q} — ${be}`)}if(W.set&&W.set.services.length>0){B.push(""),B.push("함께 제공 서비스:");for(const ie of W.set.services)B.push(`· ${ie}`)}B.push(""),B.push("───────────"),W.set&&W.savings>0&&(B.push(`개별 합계: ${W.itemsSum}만원`),B.push(`세트 적용: -${W.savings}만원`)),B.push(`예상 견적가: ${W.finalTotal}만원${W.hasNull?" +α":""} (VAT 포함, 34평·300타일 기준)`),B.push("※정확한 금액은 유선상담 진행 후 안내드립니다.");const $={areas:Ev(o.map(ie=>ie.space)),message:B.join(`
`).slice(0,500)};try{sessionStorage.setItem(qr,JSON.stringify($)),window.dispatchEvent(new CustomEvent(Bc))}catch{}h(!0)},ke=()=>{h(!1);const B=document.querySelector("#quote");B&&B.scrollIntoView({behavior:"smooth"})};return v.useEffect(()=>{if(!b)return;const B=ne=>{ne.key==="Escape"&&h(!1)};document.addEventListener("keydown",B);const ae=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",B),document.body.style.overflow=ae}},[b]),l.jsxs("section",{id:"calc",className:"spc-section py-20 px-6 md:px-12 lg:px-20",children:[l.jsxs("div",{className:"spc-container max-w-7xl mx-auto",children:[l.jsxs("div",{className:"mb-10",children:[l.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Price Calculator"}),l.jsxs("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:[l.jsxs("span",{className:"md:block",children:["공간을 고르면,",l.jsx("br",{})]})," ",l.jsx("span",{className:"md:block",children:"가격이 바로 보입니다"})]}),l.jsx("p",{className:"text-stone-500 mt-1 sm:mt-3 text-base max-w-[56ch]",children:"필요한 공간만 골라 실시간 견적을 확인하세요"}),l.jsxs("div",{className:"spc-info-chips mt-5",children:[l.jsx("span",{className:"spc-info-chip",children:"34평 이하 기준"}),l.jsx("span",{className:"spc-info-chip",children:"300개 타일 기준"}),l.jsx("span",{className:"spc-info-chip",children:"VAT 포함"})]})]}),l.jsxs("div",{className:"spc-body",children:[l.jsxs("div",{className:"spc-left",children:[l.jsxs("div",{className:"spc-step",children:[l.jsxs("div",{className:"spc-step-head",children:[l.jsx("div",{className:"spc-step-num",children:"01"}),l.jsxs("div",{className:"spc-step-titles",children:[l.jsx("div",{className:"spc-step-title",children:"시공할 공간을 선택해 주세요"}),l.jsx("div",{className:"spc-step-sub",children:"여러 공간을 자유롭게 조합하세요 · 화장실은 최대 2곳까지"})]}),o.length>0&&l.jsx("button",{type:"button",className:"spc-step-action",onClick:le,children:"전체 초기화"})]}),l.jsx("div",{className:"spc-step-body",children:l.jsxs("div",{className:"spc-space-grid",children:[l.jsx(Ec,{icon:Ht.화장실.icon,label:"화장실 1",en:"BATHROOM",selected:N,onClick:q}),l.jsx(Ec,{icon:Ht.화장실.icon,label:"화장실 (추가)",en:"BATHROOM +",selected:U,disabled:!N,onClick:Y}),Av.slice(1).map(B=>l.jsx(Ec,{icon:Ht[B].icon,label:Ht[B].label,en:Ht[B].en,selected:K(B),onClick:()=>G(B)},B))]})})]}),l.jsxs("div",{className:"spc-step",children:[l.jsxs("button",{type:"button",className:"spc-accordion-head",onClick:()=>g(B=>!B),"aria-expanded":x,children:[l.jsx("div",{className:"spc-step-num",children:"02"}),l.jsxs("div",{className:"spc-step-titles",children:[l.jsx("div",{className:"spc-step-title",children:"또는 간편 세트 패키지로 선택"}),l.jsx("div",{className:"spc-step-sub",children:"자주 함께 시공되는 4가지 구성"})]}),l.jsx("span",{className:"spc-accordion-chev","aria-hidden":"true",children:x?"−":"+"})]}),x&&l.jsxs("div",{className:"spc-step-body",children:[l.jsx("div",{className:"spc-set-grid",children:["1","2","3","4"].map(B=>l.jsx(Rv,{id:B,set:zc[B],selected:u===B,houseType:s,onPick:()=>V(B)},B))}),l.jsx("p",{className:"spc-set-note",children:"※ 세트 가격은 컴포넌트 개별 합산과 동일하지 않습니다. 추가 서비스 포함 구성이며, 4개 세트는 시각적으로 동등하게 노출됩니다."})]})]}),o.length>0&&l.jsxs("div",{className:"spc-step",children:[l.jsxs("div",{className:"spc-step-head",children:[l.jsx("div",{className:"spc-step-num",children:"03"}),l.jsxs("div",{className:"spc-step-titles",children:[l.jsx("div",{className:"spc-step-title",children:"세부 옵션을 조정해 보세요"}),l.jsx("div",{className:"spc-step-sub",children:"타입 · 범위 · 자재를 변경하면 견적이 실시간으로 업데이트됩니다"})]})]}),l.jsx("div",{className:"spc-step-body",children:l.jsx("div",{className:"spc-selrow-list",children:o.map((B,ae)=>l.jsx(Cv,{sel:B,houseType:s,bathroomIndex:B.space==="화장실"?w.findIndex(ne=>ne.key===B.key):-1,bathroomCount:w.length,onUpdate:ne=>H(B.key,ne),onRemove:()=>X(B.key)},B.key))})})]})]}),l.jsx("aside",{className:"spc-right",children:l.jsxs("div",{className:"spc-result",children:[l.jsx("div",{className:"spc-result-eyebrow",children:l.jsx("span",{className:"spc-result-ht-lbl",children:"줄눈 시공 계산기"})}),l.jsxs("div",{className:"spc-result-ht",children:[l.jsx("span",{className:"spc-result-ht-lbl",children:"주거 유형"}),l.jsx("div",{className:"spc-ht-toggle",children:["신축","구축"].map(B=>l.jsx("button",{type:"button",className:`spc-ht-btn ${s===B?"on":""}`,onClick:()=>c(B),children:B},B))})]}),W.set&&l.jsxs("div",{className:"spc-set-banner",children:[l.jsxs("div",{className:"spc-set-banner-meta",children:[l.jsx("span",{className:"spc-set-banner-lbl",children:"★ SET APPLIED"}),l.jsxs("span",{className:"spc-set-banner-name",children:[W.set.name," ",l.jsxs("span",{className:"spc-set-banner-sub",children:["· ",W.set.sub]})]})]}),l.jsx("button",{type:"button",className:"spc-set-banner-clear",onClick:S,"aria-label":"세트 해제",children:"×"})]}),o.length===0?l.jsxs("div",{className:"spc-result-empty",children:["좌측에서 공간을 개별로 선택하거나,",l.jsx("br",{}),"세트 패키지를 골라 보세요."]}):l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"spc-result-section",children:[l.jsxs("div",{className:"spc-result-section-lbl",children:["선택 항목 · ",W.lineItems.length,"건"]}),l.jsx("ul",{className:"spc-line-items",children:W.lineItems.map(B=>l.jsxs("li",{className:"spc-line-item",children:[l.jsxs("div",{className:"spc-li-main",children:[l.jsx("span",{className:"spc-li-icon","aria-hidden":"true",children:B.icon}),l.jsxs("div",{className:"spc-li-text",children:[l.jsx("div",{className:"spc-li-label",children:B.label}),l.jsxs("div",{className:"spc-li-meta",children:[Qr[B.material]," · ",s]})]})]}),l.jsx("div",{className:"spc-li-price",children:B.unit===null?l.jsx("span",{className:"spc-li-quote",children:"별도 견적"}):l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"spc-li-val",children:ol(B.unit)}),l.jsx("span",{className:"spc-li-unit",children:"만원"})]})})]},B.key))})]}),W.set&&W.set.services.length>0&&l.jsxs("div",{className:"spc-result-services",children:[l.jsx("div",{className:"spc-result-section-lbl",children:"+ 함께 제공되는 서비스"}),l.jsx("ul",{className:"spc-services-list",children:W.set.services.map(B=>l.jsxs("li",{className:"spc-service-item",children:["✓ ",B]},B))})]}),l.jsxs("div",{className:"spc-totals",children:[W.set&&l.jsxs("div",{className:"spc-subtotal-row",children:[l.jsx("span",{className:"spc-totals-lbl",children:"개별 합계"}),l.jsxs("span",{className:"spc-subtotal-val",children:[l.jsx("span",{className:"strike",children:ol(W.itemsSum)}),l.jsx("span",{className:"spc-totals-suffix",children:"만원"})]})]}),W.set&&W.savings>0&&l.jsxs("div",{className:"spc-discount-note",children:["세트 적용 −",ol(W.savings),"만원"]}),l.jsxs("div",{className:"spc-final-row",children:[l.jsx("span",{className:"spc-totals-lbl spc-totals-lbl-accent",children:"최종 견적가"}),l.jsxs("span",{className:"spc-final-price",children:[l.jsx("span",{className:"spc-final-val",children:ol(W.finalTotal)}),l.jsx("span",{className:"spc-totals-suffix spc-totals-suffix-lg",children:"만원"}),W.hasNull&&l.jsx("span",{className:"spc-hasnull",children:"+α"})]})]}),W.hasNull&&l.jsx("div",{className:"spc-hasnull-note",children:"‘별도 견적’ 항목이 포함되어 있어 현장 확인 후 안내드립니다."})]}),l.jsx("button",{type:"button",className:"spc-cta",onClick:P,children:"이 구성으로 견적 받기 →"})]}),l.jsxs("div",{className:"spc-policy",children:[l.jsx("span",{className:"spc-policy-chip",children:"📷 원격 견적"}),l.jsx("span",{className:"spc-policy-chip",children:"💡 2년 A/S · 케라폭시"}),l.jsx("span",{className:"spc-policy-chip",children:"✓ VAT 포함"})]}),l.jsx("p",{className:"spc-fineprint",children:"※ 34평 이하 · 300개 타일 기준 예상가. 정확한 금액은 사진·정보 확인 후 서면 견적서로 안내드립니다."})]})})]})]}),b&&l.jsx("div",{className:"spc-modal-overlay",role:"dialog","aria-modal":"true","aria-labelledby":"spc-modal-title",onClick:()=>h(!1),children:l.jsxs("div",{className:"spc-modal",onClick:B=>B.stopPropagation(),children:[l.jsx("button",{type:"button",className:"spc-modal-close",onClick:()=>h(!1),"aria-label":"닫기",children:"×"}),l.jsx("span",{className:"spc-modal-eyebrow",children:"견적 전달 완료"}),l.jsx("h3",{id:"spc-modal-title",className:"spc-modal-title",children:"견적 구성이 자동으로 담겼습니다"}),l.jsxs("p",{className:"spc-modal-body",children:[l.jsx("strong",{children:"이름 · 연락처 · 시공 위치 · 희망 날짜"}),l.jsx("br",{}),"4가지 정보만 입력해 주시면",l.jsx("br",{}),"빠른 시간 내 유선으로 안내드리겠습니다."]}),l.jsx("button",{type:"button",className:"spc-modal-cta",onClick:ke,children:"견적 폼으로 이동 →"})]})}),l.jsx("style",{children:Mv})]})}function Ec({icon:s,label:c,en:o,selected:d,disabled:u,onClick:m}){return l.jsxs("button",{type:"button",className:`spc-space-card ${d?"on":""} ${u?"is-disabled":""}`,onClick:m,disabled:u,"aria-pressed":d,children:[l.jsx("span",{className:"spc-sc-icon","aria-hidden":"true",children:s}),l.jsxs("span",{className:"spc-sc-meta",children:[l.jsx("span",{className:"spc-sc-label",children:c}),l.jsx("span",{className:"spc-sc-en",children:o})]}),l.jsx("span",{className:"spc-sc-action","aria-hidden":"true",children:u?"🔒":d?"✓":"＋"})]})}function Rv({id:s,set:c,selected:o,houseType:d,onPick:u}){return l.jsxs("div",{className:`spc-set-card ${o?"on":""}`,children:[l.jsxs("div",{className:"spc-set-head",children:[l.jsxs("span",{className:"spc-set-num",children:["SET 0",s]}),l.jsxs("h3",{className:"spc-set-name",children:[c.name," ",l.jsxs("span",{className:"spc-set-sub",children:["· ",c.sub]})]})]}),l.jsx("p",{className:"spc-set-desc",children:c.desc}),l.jsxs("div",{className:"spc-set-prices",children:[l.jsxs("div",{className:"spc-set-price",children:[l.jsx("span",{className:"spc-set-price-lbl",children:"신축"}),l.jsx("span",{className:"spc-set-price-val",children:ol(c.prices.신축)}),l.jsx("span",{className:"spc-set-price-unit",children:"만원"})]}),l.jsxs("div",{className:"spc-set-price",children:[l.jsx("span",{className:"spc-set-price-lbl",children:"구축"}),l.jsx("span",{className:"spc-set-price-val",children:ol(c.prices.구축)}),l.jsx("span",{className:"spc-set-price-unit",children:"만원"})]})]}),c.services.length>0&&l.jsxs("div",{className:"spc-set-services",children:[l.jsx("div",{className:"spc-set-services-lbl",children:"+ 함께 제공"}),l.jsx("ul",{children:c.services.map(m=>l.jsxs("li",{children:["· ",m]},m))})]}),l.jsx("button",{type:"button",className:"spc-set-cta",onClick:u,children:o?"✓ 적용 중 · 다시 누르면 해제":"이 세트로 선택 →"}),l.jsxs("p",{className:"spc-set-note-inner",children:[d==="신축"?"신축":"구축"," 기준"]})]})}function Cv({sel:s,houseType:c,bathroomIndex:o,bathroomCount:d,onUpdate:u,onRemove:m}){const x=Ht[s.space],g=li(s.space,s.variantId),b=s.space==="화장실",h=x.materialLocked?x.rec:s.material,w=Hc(s,c),N=S=>{if(!b)return;const G=g.scope??"바닥만";u({variantId:Uc(S,G)})},U=S=>{if(!b)return;const G=g.type??"욕조형";u({variantId:Uc(G,S)})},K=b&&d>1?`${x.label} ${o+1}`:x.label;return l.jsxs("div",{className:"spc-sel-row",children:[l.jsxs("div",{className:"spc-sel-row-head",children:[l.jsxs("div",{className:"spc-sel-row-title",children:[l.jsx("span",{className:"spc-sr-icon","aria-hidden":"true",children:x.icon}),l.jsx("span",{children:K})]}),l.jsx("button",{type:"button",className:"spc-sel-x",onClick:m,"aria-label":"이 항목 삭제",children:"×"})]}),l.jsxs("div",{className:"spc-sel-row-body",children:[b&&x.typeAxis&&l.jsxs("div",{className:"spc-sr-block",children:[l.jsx("div",{className:"spc-sr-lbl",children:x.typeAxis.lbl}),l.jsx("div",{className:"spc-sr-chips",children:x.typeAxis.options.map(S=>l.jsx("button",{type:"button",className:`spc-sr-chip ${g.type===S?"on":""}`,onClick:()=>N(S),children:S},S))})]}),b&&x.scopeAxis&&l.jsxs("div",{className:"spc-sr-block",children:[l.jsx("div",{className:"spc-sr-lbl",children:x.scopeAxis.lbl}),l.jsx("div",{className:"spc-sr-chips",children:x.scopeAxis.options.map(S=>l.jsx("button",{type:"button",className:`spc-sr-chip ${g.scope===S?"on":""}`,onClick:()=>U(S),children:S},S))})]}),!b&&x.variants.length>1&&l.jsxs("div",{className:"spc-sr-block",children:[l.jsx("div",{className:"spc-sr-lbl",children:"옵션"}),l.jsx("div",{className:"spc-sr-chips",children:x.variants.map(S=>l.jsx("button",{type:"button",className:`spc-sr-chip ${s.variantId===S.id?"on":""}`,onClick:()=>u({variantId:S.id}),children:S.label},S.id))})]}),x.materialLocked?l.jsx("div",{className:"spc-sr-locked",children:"EPOXY ONLY · 물 접촉 환경 → 폴리우레아 시공 불가"}):l.jsxs("div",{className:"spc-sr-block",children:[l.jsxs("div",{className:"spc-sr-lbl",children:["자재 ",l.jsxs("span",{className:"spc-sr-lbl-aux",children:["권장 ",Qr[x.rec]]})]}),l.jsx("div",{className:"spc-sr-chips",children:["kera","poly"].map(S=>l.jsx("button",{type:"button",className:`spc-sr-chip ${h===S?"on":""}`,onClick:()=>u({material:S}),children:Qr[S]},S))})]}),l.jsxs("div",{className:"spc-sr-price",children:[l.jsxs("span",{className:"spc-sr-price-lbl",children:[c," · 예상가"]}),w===null?l.jsx("span",{className:"spc-sr-quote",children:"QUOTE NEEDED · 별도 견적"}):l.jsxs("span",{className:"spc-sr-price-val-wrap",children:[l.jsx("span",{className:"spc-sr-price-val",children:ol(w)}),l.jsx("span",{className:"spc-sr-price-unit",children:"만원"})]})]})]})]})}const Mv=`
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
`,Ov="/assets/grouting-Bwtwubk9.jpg",_v="/assets/grouting_m-MwMcW6AJ.jpg",Dv=["Since 2019","누적 2,000+ 현장","전 시공 대표 직접 마감"];function Bv(){return l.jsxs("section",{id:"about",className:"ab-section",children:[l.jsxs("div",{className:"ab-photo-wrap","aria-hidden":"true",children:[l.jsxs("picture",{children:[l.jsx("source",{media:"(max-width: 900px)",srcSet:_v}),l.jsx("img",{src:Ov,alt:"",className:"ab-photo",loading:"lazy"})]}),l.jsx("div",{className:"ab-photo-fade"})]}),l.jsx("div",{className:"ab-text-outer px-6 md:px-12 lg:px-20",children:l.jsx("div",{className:"max-w-7xl mx-auto",children:l.jsxs("div",{className:"ab-text",children:[l.jsx("span",{className:"ab-eyebrow",children:"About Detailline"}),l.jsxs("h2",{className:"ab-headline",children:["보이지 않는",l.jsx("br",{}),"한 줄에도,",l.jsx("br",{}),l.jsx("span",{className:"ab-accent",children:"집요한 정성."})]}),l.jsxs("p",{className:"ab-body",children:["줄눈 한 줄은 손가락 한 마디 폭. 하지만 그 한 줄이",l.jsx("br",{className:"ab-br-pc"}),"공간의 인상을 좌우합니다. 디테일라인은 그 한 줄을",l.jsx("br",{className:"ab-br-pc"}),"끝까지 다듬는 사람들의 이름입니다."]}),l.jsx("ul",{className:"ab-badges",children:Dv.map(s=>l.jsxs("li",{className:"ab-badge",children:[l.jsx("span",{className:"ab-dot","aria-hidden":"true"}),s]},s))})]})})}),l.jsx("style",{children:Uv})]})}const Uv=`
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
`,Am=[{id:1,question:"줄눈 시공은 어떤 공간에 적용할 수 있나요?",answer:"화장실, 주방, 현관, 베란다, 거실, 수영장, 목욕탕 등 타일이 시공된 모든 공간에 적용 가능합니다. 주거 공간뿐만 아니라 상업 시설, 공공시설에도 시공 가능하며, 실내외 모두 가능합니다. 공간별 특성에 맞는 전용 줄눈재를 사용합니다."},{id:2,question:"시공 기간은 얼마나 걸리나요?",answer:"일반 가정용 화장실 기준으로 보통 반나절(4~6시간) 내에 완료됩니다. 시공 면적과 오염 정도에 따라 다를 수 있으며, 대형 공간이나 전면 교체의 경우 1~2일이 소요될 수 있습니다. 정확한 기간은 현장 확인 후 안내드립니다."},{id:3,question:"기존 줄눈을 제거하고 새로 시공하나요?",answer:"오염 정도와 상태에 따라 달라집니다. 경미한 오염의 경우 세척 후 덧시공이 가능하지만, 곰팡이가 심하거나 들뜸 현상이 있는 경우에는 전동 공구를 이용해 기존 줄눈을 완전히 제거한 후 새로 시공합니다. 현장 방문 후 최적의 방법을 제안드립니다."},{id:4,question:"시공 후 관리 방법이 있나요?",answer:"시공 완료 후 24시간은 물에 닿지 않도록 해주세요. 이후에는 일반 중성 세제로 청소하시면 됩니다. 강산성·강알칼리성 세제는 줄눈재를 손상시킬 수 있으니 피해주세요. 정기적인 청소만으로도 시공 효과가 오래 유지됩니다. 보통 5~10년 이상 효과가 지속됩니다."},{id:5,question:"곰팡이가 심한 경우에도 시공이 가능한가요?",answer:"네, 가능합니다. 먼저 항균·항곰팡이 처리를 진행한 후, 곰팡이 방지 성분이 포함된 항균 줄눈재를 사용하여 시공합니다. 심한 경우에는 타일과 방수층까지 점검하여 근본적인 원인을 해결합니다. 재발 방지를 위한 처리까지 함께 진행합니다."},{id:6,question:"견적은 어떻게 받을 수 있나요?",answer:'하단의 "무료 견적 신청" 폼을 작성하시거나 전화로 문의 주시면 됩니다. 시공 면적, 타일 종류, 현재 상태 등 간단한 정보와 사진을 보내주시면 더 정확한 견적을 드릴 수 있습니다. 현장 방문 견적도 무료로 진행하고 있습니다.'}];function Hv(s){return{"@context":"https://schema.org","@type":"FAQPage",mainEntity:s.map(({q:c,a:o})=>({"@type":"Question",name:c,acceptedAnswer:{"@type":"Answer",text:o}}))}}function cl(s){return{"@context":"https://schema.org","@type":"Article",headline:s.title,description:s.description,mainEntityOfPage:{"@type":"WebPage","@id":s.url},image:s.image,datePublished:s.datePublished,dateModified:s.dateModified??s.datePublished,author:{"@type":"Organization",name:"디테일라인"},publisher:{"@type":"Organization",name:"디테일라인"}}}function dl(s){return{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:s.map((c,o)=>({"@type":"ListItem",position:o+1,name:c.name,item:c.url}))}}function rt(s,c){document.getElementById(s)?.remove();const o=document.createElement("script");return o.type="application/ld+json",o.id=s,o.textContent=JSON.stringify(c),document.head.appendChild(o),()=>{document.getElementById(s)?.remove()}}function Lv(){const[s,c]=v.useState(null);v.useEffect(()=>rt("faq-jsonld",Hv(Am.map(u=>({q:u.question,a:u.answer})))),[]);const o=d=>{c(u=>u===d?null:d)};return l.jsx("section",{id:"faq",className:"py-20 px-6 md:px-12 lg:px-20 bg-[var(--bg-2)]",children:l.jsxs("div",{className:"max-w-3xl mx-auto",children:[l.jsxs("div",{className:"text-center mb-10",children:[l.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"FAQ"}),l.jsx("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:"자주 묻는 질문"}),l.jsx("p",{className:"text-[var(--muted)] mt-3 text-base",children:"궁금하신 점을 확인하세요"})]}),l.jsx("div",{className:"space-y-0",children:Am.map((d,u)=>l.jsxs("div",{className:`border-b ${u===0?"border-t":""} border-[var(--line)]`,children:[l.jsxs("button",{onClick:()=>o(d.id),className:"w-full flex items-start justify-between gap-4 py-5 text-left cursor-pointer group",children:[l.jsx("span",{className:`text-base font-medium leading-snug transition-colors ${s===d.id?"text-[var(--ink)]":"text-[var(--muted)] group-hover:text-[var(--ink-2)]"}`,children:d.question}),l.jsx("div",{className:`w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full transition-all ${s===d.id?"bg-[var(--ink)] text-[var(--paper)] rotate-45":"bg-[var(--paper)] text-[var(--muted)] border border-[var(--line)]"}`,children:l.jsx("i",{className:"ri-add-line text-sm"})})]}),s===d.id&&l.jsx("div",{className:"pb-10 bg-[var(--paper)]",children:l.jsx("p",{className:"px-5 pt-3 text-[var(--ink-2)] text-sm leading-relaxed",children:d.answer})})]},d.id))}),l.jsxs("div",{className:"mt-12 text-center bg-[var(--paper)] border border-[var(--line)] rounded-sm py-10 px-6",children:[l.jsx("p",{className:"text-stone-600 font-medium mb-2",children:"원하는 답을 찾지 못하셨나요?"}),l.jsx("p",{className:"text-stone-400 text-sm mb-6",children:"전화로 편하게 문의해 주세요"}),l.jsx("div",{className:"flex justify-center",children:l.jsxs("a",{href:"tel:010-8005-6674",onClick:()=>at.phoneClick("faq"),className:"inline-flex h-12 sm:min-w-[180px] items-center justify-center gap-2 px-7 text-sm font-medium cursor-pointer rounded-sm bg-[var(--accent)] text-white transition-all hover:bg-[var(--accent-deep)]",children:[l.jsx("i",{className:"ri-phone-line"}),"010-8005-6674"]})})]})]})})}const uh=["일","월","화","수","목","금","토"];function Tm(s,c){return s.getFullYear()===c.getFullYear()&&s.getMonth()===c.getMonth()&&s.getDate()===c.getDate()}function Rm(s){return`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`}function Yv(s){return`${s.getFullYear()}년 ${s.getMonth()+1}월 ${s.getDate()}일 (${uh[s.getDay()]})`}function qv({name:s="date",onChange:c}){const o=new Date,[d,u]=v.useState(!1),[m,x]=v.useState(o.getFullYear()),[g,b]=v.useState(o.getMonth()),[h,w]=v.useState(null),N=H=>{const X=new Date(m,g+H,1);x(X.getFullYear()),b(X.getMonth())},U=H=>{w(H),c?.(Rm(H)),u(!1)},K=()=>{w(null),c?.("")},S=()=>{x(o.getFullYear()),b(o.getMonth()),U(o)},G=new Date(m,g,1).getDay(),q=new Date(m,g+1,0).getDate(),Y=new Date(o.getFullYear(),o.getMonth(),o.getDate()),V=[...Array(G).fill(null),...Array.from({length:q},(H,X)=>new Date(m,g,X+1))];return l.jsxs("div",{className:"relative w-full",children:[l.jsxs("button",{type:"button",onClick:()=>u(H=>!H),className:"w-full flex items-center justify-between px-4 py-3 rounded-sm border border-[var(--line)] bg-[var(--paper)] hover:border-[var(--line-strong)] transition-all duration-150",children:[l.jsx("span",{className:`text-sm ${h?"text-[var(--ink)]":"text-[var(--muted-2)]"}`,children:h?Yv(h):"날짜를 선택해 주세요"}),l.jsx("i",{className:"ri-calendar-line text-stone-400 text-base"})]}),l.jsx("input",{type:"hidden",name:s,value:h?Rm(h):""}),d&&l.jsxs("div",{className:"absolute z-50 mt-2 w-full bg-[var(--paper)] border border-[var(--line)] rounded-sm shadow-xl overflow-hidden",children:[l.jsxs("div",{className:"flex items-center justify-between px-5 pt-5 pb-3",children:[l.jsx("button",{type:"button",onClick:()=>N(-1),className:"w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-100 transition-colors",children:l.jsx("i",{className:"ri-arrow-left-s-line text-stone-500"})}),l.jsxs("span",{className:"text-sm font-medium text-stone-800 tracking-tight",children:[m,"년 ",g+1,"월"]}),l.jsx("button",{type:"button",onClick:()=>N(1),className:"w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-100 transition-colors",children:l.jsx("i",{className:"ri-arrow-right-s-line text-stone-500"})})]}),l.jsx("div",{className:"grid grid-cols-7 px-3 pb-1",children:uh.map((H,X)=>l.jsx("div",{className:`text-center text-xs font-medium py-1 ${X===0||X===6?"text-[var(--accent)]":"text-[var(--muted-2)]"}`,children:H},H))}),l.jsx("div",{className:"grid grid-cols-7 px-3 pb-4 gap-y-1",children:V.map((H,X)=>{if(!H)return l.jsx("div",{},`empty-${X}`);const le=H<Y,W=Tm(H,o),P=h?Tm(H,h):!1,ke=H.getDay()===0,B=H.getDay()===6;let ae="w-9 h-9 mx-auto flex items-center justify-center rounded-full text-sm transition-all duration-100 ";return P?ae+="bg-[var(--ink)] text-[var(--paper)] font-medium":le?ae+="text-[var(--muted-2)]/50 cursor-not-allowed":W?ae+="border border-[var(--accent)] text-[var(--accent)] font-medium hover:bg-[var(--accent)]/10":ke||B?ae+="text-[var(--muted-2)] hover:bg-[var(--bg-2)]":ae+="text-[var(--ink-2)] hover:bg-[var(--bg-2)]",l.jsx("button",{type:"button",disabled:le,onClick:()=>U(H),className:ae,children:H.getDate()},H.toISOString())})}),l.jsxs("div",{className:"border-t border-[var(--line)] px-4 py-3 flex justify-between items-center",children:[l.jsx("button",{type:"button",onClick:K,className:"text-xs text-[var(--muted-2)] hover:text-[var(--ink-2)] transition-colors",children:"초기화"}),l.jsx("button",{type:"button",onClick:S,className:"text-xs font-medium text-[var(--accent)] hover:text-[var(--accent-deep)] transition-colors",children:"오늘"})]})]})]})}const Cm=["현관","화장실","베란다","거실","주방","수영장","목욕탕","기타"],Gv="0x4AAAAAADGHPfvxD-MhAQbY";function Vv(s){return s.length<=3?s:s.length<=7?`${s.slice(0,3)}-${s.slice(3)}`:`${s.slice(0,3)}-${s.slice(3,7)}-${s.slice(7,11)}`}function Kv(){const[s,c]=v.useState(!1),[o,d]=v.useState(!1),[u,m]=v.useState(0),[x,g]=v.useState(""),[b,h]=v.useState(""),[w,N]=v.useState(""),[U,K]=v.useState(""),[S,G]=v.useState([]),[q,Y]=v.useState(""),[V,H]=v.useState(!1),[X,le]=v.useState({}),[W,P]=v.useState(""),ke=v.useRef(null),B=v.useRef(null),ae=v.useRef(null),ne=v.useRef(!1),$=500;v.useEffect(()=>{if(!ae.current)return;const E=new IntersectionObserver(L=>{L[0]?.isIntersecting&&!ne.current&&(ne.current=!0,at.quoteSectionView(),E.disconnect())},{threshold:.3});return E.observe(ae.current),()=>E.disconnect()},[]),v.useEffect(()=>{let E=!1;const L=()=>{if(!E&&ke.current){if(typeof window.turnstile>"u"){setTimeout(L,100);return}B.current=window.turnstile.render(ke.current,{sitekey:Gv,callback:Z=>P(Z),"error-callback":()=>P(""),"expired-callback":()=>P(""),theme:"light",size:"normal"})}};return L(),()=>{E=!0,B.current&&window.turnstile&&(window.turnstile.remove(B.current),B.current=null)}},[]),v.useEffect(()=>{const E=()=>{try{const L=sessionStorage.getItem(qr);if(!L)return;const Z=JSON.parse(L);Array.isArray(Z.areas)&&Z.areas.length>0&&G(Z.areas.filter(re=>Cm.includes(re))),typeof Z.message=="string"&&Z.message.length>0&&(Y(Z.message),m(Z.message.length)),le(re=>({...re,areas:""}))}catch{}};return E(),window.addEventListener(Bc,E),()=>window.removeEventListener(Bc,E)},[]);const ie=E=>{const L=E.target.value.replace(/[0-9]/g,"").slice(0,9);g(L),le(Z=>({...Z,name:""}))},De=E=>{const L=E.target.value.replace(/[^0-9]/g,"").slice(0,11);h(L),le(Z=>({...Z,phone:""}))},Ne=E=>{N(E.target.value.slice(0,39)),le(L=>({...L,location:""}))},C=E=>{K(E),le(L=>({...L,date:""}))},Q=E=>{G(L=>L.includes(E)?L.filter(ce=>ce!==E):[...L,E]),le(L=>({...L,areas:""}))},I=E=>{H(E.target.checked),le(L=>({...L,privacy:""}))},be=()=>{const E={};return x.trim()||(E.name="이름을 입력해주세요."),b.length?b.length<10&&(E.phone="올바른 연락처를 입력해주세요."):E.phone="연락처를 입력해주세요.",w.trim()||(E.location="시공위치를 입력해주세요."),U||(E.date="희망날짜를 선택해주세요."),S.length===0&&(E.areas="시공공간을 1개 이상 선택해주세요."),V||(E.privacy="개인정보처리방침에 동의해주세요."),W||(E.cfToken="봇 검증을 완료해주세요."),le(E),Object.keys(E).length===0},fe=x.trim().length>0&&b.length>=10&&w.trim().length>0&&U.length>0&&S.length>0&&W.length>0&&V,k=async E=>{if(E.preventDefault(),!be())return;const L=E.currentTarget;if(L.querySelector('[name="company_website"]')?.value||""){c(!0);return}if((L.querySelector('[name="message"]')?.value||"").length>$)return;const ce=new FormData(L),xe=new URLSearchParams;ce.forEach((We,Me)=>{Me!=="phone"&&Me!=="company_website"&&xe.append(Me,We.toString())}),xe.append("phone",b),xe.append("cf_turnstile_token",W),d(!0);try{await fetch("https://script.google.com/macros/s/AKfycbyQBvfjjtCFSY4WZUL2Qv_vIwz4xbXyLF5pygpV5d_jpICW_hhXnDnr1r6jZHhS_kEayA/exec",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:xe.toString()}),at.formSubmit(S,w.split(" ")[0]||"unknown"),c(!0),g(""),h(""),N(""),K(""),G([]),Y(""),H(!1),m(0),le({}),P("");try{sessionStorage.removeItem(qr)}catch{}B.current&&window.turnstile&&window.turnstile.reset(B.current)}catch{at.formSubmitFail("network"),alert("제출 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.")}finally{d(!1)}};return l.jsx("section",{ref:ae,id:"quote",className:"py-10 px-6 md:px-12 lg:px-20 bg-[var(--bg)]",children:l.jsxs("div",{className:"max-w-4xl mx-auto",children:[l.jsxs("div",{className:"text-center mb-10",children:[l.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Free Estimate"}),l.jsx("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:"무료 견적 상담 신청"}),l.jsx("p",{className:"text-[var(--muted)] mt-3",children:"양식을 작성하시면 24시간 내 연락드립니다"})]}),l.jsx("div",{className:"bg-white rounded-sm pt-5 px-5 pb-6 md:p-12 border border-[var(--line)]",style:{colorScheme:"light"},children:s?l.jsxs("div",{className:"text-center py-12",children:[l.jsx("div",{className:"w-16 h-16 flex items-center justify-center bg-[var(--ink)] rounded-full mx-auto mb-4",children:l.jsx("i",{className:"ri-check-line text-[var(--paper)] text-2xl"})}),l.jsx("h3",{className:"text-xl font-medium text-[var(--ink)] mb-2",children:"신청이 완료되었습니다!"}),l.jsxs("p",{className:"text-[var(--muted)] text-sm",children:["24시간 내에 담당자가 연락드릴 예정입니다.",l.jsx("br",{}),"감사합니다."]}),l.jsx("button",{onClick:()=>{c(!1),g(""),h(""),N(""),K(""),G([]),Y(""),H(!1),m(0),le({});try{sessionStorage.removeItem(qr)}catch{}},className:"mt-6 text-sm text-stone-400 underline cursor-pointer",children:"다시 신청하기"})]}):l.jsxs("form",{"data-readdy-form":!0,onSubmit:k,className:"space-y-6",children:[l.jsxs("div",{"aria-hidden":"true",style:{position:"absolute",left:"-9999px",width:"1px",height:"1px",overflow:"hidden"},children:[l.jsx("label",{htmlFor:"company_website",children:"Website (do not fill)"}),l.jsx("input",{type:"text",id:"company_website",name:"company_website",tabIndex:-1,autoComplete:"off",defaultValue:""})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[l.jsxs("div",{children:[l.jsxs("label",{className:"block text-sm font-medium text-[var(--ink-2)] mb-1.5",children:["이름 ",l.jsx("span",{className:"text-red-400",children:"*"})]}),l.jsx("input",{type:"text",name:"name",required:!0,value:x,onChange:ie,maxLength:9,placeholder:"홍길동",className:"w-full px-4 py-3 border border-[var(--line)] rounded-sm text-base text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors"}),X.name&&l.jsx("p",{className:"mt-1 text-xs text-red-500",children:X.name})]}),l.jsxs("div",{children:[l.jsxs("label",{className:"block text-sm font-medium text-[var(--ink-2)] mb-1.5",children:["연락처 ",l.jsx("span",{className:"text-red-400",children:"*"})]}),l.jsxs("div",{className:"relative",children:[l.jsx("input",{type:"tel",name:"phone",required:!0,value:Vv(b),onChange:De,inputMode:"numeric",maxLength:13,placeholder:"010-1234-5678",className:"w-full px-4 py-3 border border-[var(--line)] rounded-sm text-base text-stone-700 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors"}),l.jsxs("span",{className:`absolute right-4 top-3 text-xs font-medium ${b.length>=10?"text-[var(--accent)]":"text-[var(--muted-2)]"}`,children:[b.length,"/11"]})]}),X.phone&&l.jsx("p",{className:"mt-1 text-xs text-red-500",children:X.phone})]})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[l.jsxs("div",{children:[l.jsxs("label",{className:"block text-sm font-medium text-[var(--ink-2)] mb-1.5",children:["시공 아파트 ",l.jsx("span",{className:"text-red-400",children:"*"})]}),l.jsx("input",{type:"text",name:"location",required:!0,value:w,onChange:Ne,maxLength:39,placeholder:"예 : 서초구 반포동 자이아파트",className:"w-full px-4 py-3 border border-[var(--line)] rounded-sm text-base text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors"}),X.location&&l.jsx("p",{className:"mt-1 text-xs text-red-500",children:X.location})]}),l.jsxs("div",{children:[l.jsxs("label",{className:"block text-sm font-medium text-[var(--ink-2)] mb-1.5",children:["희망 날짜 ",l.jsx("span",{className:"text-red-400",children:"*"})]}),l.jsx(qv,{name:"date",onChange:C}),X.date&&l.jsx("p",{className:"mt-1 text-xs text-red-500",children:X.date})]})]}),l.jsxs("div",{children:[l.jsxs("label",{className:"block text-sm font-medium text-stone-700 mb-2",children:["시공 공간 (중복 선택 가능) ",l.jsx("span",{className:"text-red-400",children:"*"})]}),l.jsx("div",{className:"flex flex-wrap gap-2",children:Cm.map(E=>l.jsxs("label",{className:"cursor-pointer",children:[l.jsx("input",{type:"checkbox",name:"areas",value:E,checked:S.includes(E),onChange:()=>Q(E),className:"sr-only peer"}),l.jsx("span",{className:"inline-block px-5 py-2 rounded-sm text-sm font-medium bg-white text-[var(--muted)] border border-[var(--line)] hover:border-[var(--line-strong)] peer-checked:bg-[var(--accent)] peer-checked:text-white peer-checked:border-[var(--accent)] transition-all cursor-pointer whitespace-nowrap",children:E})]},E))}),X.areas&&l.jsx("p",{className:"mt-1 text-xs text-red-500",children:X.areas})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-[var(--ink-2)] mb-1.5",children:"상세 내용"}),l.jsxs("div",{className:"relative",children:[l.jsx("textarea",{name:"message",rows:8,maxLength:$,value:q,onChange:E=>{Y(E.target.value),m(E.target.value.length)},placeholder:"시공 면적, 현재 상태, 요청 사항 등을 자유롭게 작성해 주세요.",className:"w-full px-4 py-3 border border-[var(--line)] rounded-sm text-base text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors resize-none"}),l.jsxs("span",{className:"absolute bottom-3 right-4 text-xs text-stone-400",children:[u," / ",$]})]})]}),l.jsxs("div",{className:"border-t text-sm text-center text-stone-500 px-4 py-3 border-stone-200",children:["희망 날짜에 시공이 어려울 수 있는 점 양해 부탁드립니다. ",l.jsx("br",{}),l.jsx("span",{className:"font-bold text-red-400",children:"정확한 시공 가능 일정은 상담 후 안내드리며,"})," 최대한 희망에 맞춰 드릴 수 있도록 노력하겠습니다."]}),l.jsxs("div",{children:[l.jsx("div",{ref:ke,className:"flex justify-center"}),X.cfToken&&l.jsx("p",{className:"mt-1 text-xs text-red-500 text-center",children:X.cfToken})]}),l.jsxs("div",{className:"flex items-start gap-3",children:[l.jsx("input",{type:"checkbox",id:"privacy",name:"privacy",required:!0,checked:V,onChange:I,className:"w-5 h-5 mt-0.5 cursor-pointer accent-[var(--accent)]"}),l.jsxs("label",{htmlFor:"privacy",className:"text-sm text-stone-400 leading-relaxed cursor-pointer",children:["수집된 개인정보(이름, 연락처, 시공 위치, 희망 일정, 시공 공간, 상세 내용)는 견적 상담 목적으로만 사용되며, 상담 완료 후 즉시 폐기됩니다."," ",l.jsx(Ee,{to:"/privacy",target:"_blank",rel:"noopener noreferrer",onClick:E=>E.stopPropagation(),className:"text-[var(--accent)] font-semibold underline underline-offset-2 hover:opacity-80",children:"개인정보 처리방침"}),"에 동의합니다."]})]}),X.privacy&&l.jsx("p",{className:"-mt-3 text-xs text-red-500",children:X.privacy}),l.jsx("button",{type:"submit",disabled:o||!fe,className:"w-full py-4 bg-[var(--ink)] text-[var(--paper)] font-medium text-base rounded-sm hover:bg-[var(--accent-deep)] transition-all cursor-pointer whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed",children:o?"제출 중...":"견적 신청하기"})]})})]})})}const ve="https://www.detailline.kr",Qv="디테일라인",Lc="010-8005-6674",fh=`${ve}/og_banner.jpg`,pl={"/":{title:"서울·경기·인천 줄눈시공 전문 디테일라인 | 케라폭시·폴리우레아 시공",description:"서울·경기·인천 줄눈시공 전문업체 디테일라인. 화장실·욕실·베란다·현관 케라폭시·폴리우레아 줄눈. 대표 직접 시공, KC 인증 친환경 자재, 시공 후 2년 무상 A/S. 무료 견적 상담.",keywords:"줄눈시공, 케라폭시, 폴리우레아, 화장실 줄눈, 욕실 줄눈, 베란다 줄눈, 현관 줄눈, 서울 줄눈시공, 경기 줄눈시공, 인천 줄눈시공, 강남 줄눈시공, 서초 줄눈시공, 송파 줄눈시공, 마포 줄눈시공, 성남 줄눈시공, 분당 줄눈시공, 노후 아파트 줄눈 보수, 신축 입주 줄눈, 리모델링 줄눈"},"/info/why-grout":{title:"줄눈 곰팡이·들뜸 해결 가이드 — 노후 아파트 줄눈 보수 | 디테일라인",description:"줄눈 곰팡이·균열·들뜸 원인과 해결법. 화장실·욕실·베란다·현관 노후 줄눈 보수 가이드. 신축 입주·리모델링 사전 점검 시 확인할 것.",keywords:"줄눈 곰팡이, 욕실 줄눈 곰팡이, 화장실 줄눈 곰팡이, 줄눈 들뜸, 줄눈 균열, 줄눈 보수 시기, 줄눈 교체 시기, 노후 아파트 줄눈, 신축 사전점검 줄눈, 리모델링 욕실 줄눈"},"/info/kerafoxy":{title:"케라폭시란? 친환경 줄눈 자재의 모든 것 | 디테일라인",description:"이탈리아산 케라폭시 줄눈재 소개. 노후 아파트 욕실·베란다·현관 시공 다수. 일반 줄눈 대비 곰팡이·변색 방지 10배 이상, KC 인증 친환경.",keywords:"케라폭시, 케라폭시 줄눈, 케라폭시란, 욕실 케라폭시, 노후 아파트 케라폭시, 에폭시 줄눈, 친환경 줄눈, 마페이 케라폭시, KC 인증 줄눈"},"/info/kerafoxy-product":{title:"욕실 줄눈 자재 비교 — 케라폭시 6종 색상 가이드 | 디테일라인",description:"케라폭시 클래식·이지디자인·스타라이크·푸가리테 등 자재 비교. 욕실·베란다·현관 공간별 추천. 색상 가이드 포함.",keywords:"케라폭시 제품, 케라폭시 색상, 스타라이크, 푸가리테, 케라폭시 이지디자인, 욕실 줄눈 종류, 욕실 줄눈재, 노후 아파트 줄눈 자재"},"/info/comparison":{title:"폴리우레아 vs 케라폭시 — 욕실·베란다 줄눈 선택 | 디테일라인",description:"욕실은 케라폭시, 베란다는 폴리우레아 — 디테일라인 시공 데이터 기반 자재 선택 가이드. 비용·내구성·시공 시간 비교.",keywords:"폴리우레아 케라폭시 차이, 욕실 케라폭시, 베란다 폴리우레아, 줄눈 자재 비교, 노후 아파트 줄눈 자재, 폴리우레아 단점, 케라폭시 단점"},"/info/kerafoxy-price":{title:"줄눈시공 가격 안내 — 평수별 시공비 | 디테일라인",description:"노후 아파트 욕실·베란다·현관 줄눈 시공비 안내. 30평·40평 평수별 표준 단가, 신축/구축 분리. 디테일라인 고유 가격, 시공 후 2년 무상 A/S.",keywords:"줄눈시공 가격, 화장실 줄눈 가격, 욕실 줄눈 가격, 30평 욕실 줄눈, 40평 줄눈 가격, 노후 아파트 줄눈 비용, 케라폭시 가격, 폴리우레아 가격, 줄눈 견적, 리모델링 줄눈 가격"},"/info/polyurea":{title:"폴리우레아 줄눈 — 베란다·외부 공간 가성비 자재 | 디테일라인",description:"베란다·외부화장실·현관 폴리우레아 줄눈시공. 케라폭시 대비 60~70% 가격, 5년+ 수명. 화장실 시공은 케라폭시만 진행합니다.",keywords:"폴리우레아 줄눈, 폴리우레아 시공, 베란다 폴리우레아, 외부화장실 폴리우레아, 폴리우레아 가격, 폴리우레아 케라폭시 차이, 베란다 줄눈 가성비"},"/portfolio":{title:"디테일라인 줄눈시공 사례 모음 | 서울·경기 케라폭시 시공",description:"디테일라인이 시공한 욕실·베란다·현관·주방 줄눈시공 사례. 단지·평수·자재별로 시공 결과를 확인하세요. 케라폭시·폴리우레아 시공. 무료 견적 상담.",keywords:"줄눈시공 사례, 케라폭시 시공 사례, 폴리우레아 시공 사례, 욕실 줄눈 사례, 화장실 줄눈 사례, 베란다 줄눈 사례, 주방 줄눈 사례, 줄눈시공 후기, 줄눈시공 비포에프터, 디테일라인 시공사례"},"/privacy":{title:"개인정보처리방침 | 디테일라인",description:"디테일라인 개인정보처리방침",keywords:""}};function Pt(s){const{pathname:c}=qt();v.useEffect(()=>{const o=pl[c],d=s?.title??o?.title??Qv,u=s?.description??o?.description??"",m=s?.keywords??o?.keywords??"",x=s?.ogImage??fh,g=`${ve}${c==="/"?"/":c}`;document.title=d,Fl("description",u),Fl("keywords",m),ei("og:title",d),ei("og:description",u),ei("og:url",g),ei("og:image",x),ei("og:image:secure_url",x),Fl("twitter:title",d),Fl("twitter:description",u),Fl("twitter:image",x),Zv("canonical",g),Fl("robots",s?.noindex?"noindex,nofollow":"index,follow,max-image-preview:large")},[c,s])}function Fl(s,c){let o=document.querySelector(`meta[name="${s}"]`);o||(o=document.createElement("meta"),o.name=s,document.head.appendChild(o)),o.content=c}function ei(s,c){let o=document.querySelector(`meta[property="${s}"]`);o||(o=document.createElement("meta"),o.setAttribute("property",s),document.head.appendChild(o)),o.content=c}function Zv(s,c){let o=document.querySelector(`link[rel="${s}"]`);o||(o=document.createElement("link"),o.rel=s,document.head.appendChild(o)),o.href=c}function Xv(){return Pt(),l.jsxs("div",{className:"min-h-screen bg-white",children:[l.jsx(Lt,{}),l.jsxs("main",{children:[l.jsx(Lb,{}),l.jsx(Bv,{}),l.jsx(iv,{}),l.jsx(sv,{}),l.jsx(xv,{}),l.jsx(Nv,{}),l.jsx(Tv,{}),l.jsx(Lv,{}),l.jsx(Kv,{})]}),l.jsx(Fc,{}),l.jsx(Yt,{})]})}const mh="/assets/before-DA_T54W5.jpg",hh="/assets/after-Cw81fPXQ.jpg",Jv="/assets/kerafoxy-C29B-TmB.jpg",xh="/assets/bg-zCXDQjbF.webp",gh="/assets/bg_m-D6VSEPhL.webp",$v=[{k:"소재 분류",v:"에폭시 계열"},{k:"원산지",v:"이탈리아"},{k:"수명",v:"10년+"},{k:"A/S",v:"2년"}],Wv=[{k:"압축강도",v:"75 N/mm²"},{k:"수축률",v:"≈ 0% (거의 없음)"},{k:"흡수율",v:"< 0.1 g/cm²"}],Fv=[{idx:"01",title:"강력한 내수성",body:"물에 강한 에폭시 성분으로 화장실·욕실의 지속적인 수분 노출에도 변형 없이 줄눈이 유지됩니다.",k:"흡수율",v:"< 0.1 g/cm²"},{idx:"02",title:"곰팡이·세균 차단",body:"항균 성분이 배합되어 습한 환경에서도 곰팡이와 세균이 번식하지 않아 위생적인 공간을 유지합니다.",k:"항균 등급",v:"JIS Z 2801"},{idx:"03",title:"다양한 색상 선택",body:"화이트·베이지·그레이·블랙 등 20여 가지 색상으로 인테리어 스타일에 맞는 선택이 가능합니다.",k:"컬러 옵션",v:"20+ Colors"},{idx:"04",title:"월등한 내구성",body:"일반 시멘트 줄눈 대비 3~5배 긴 수명을 자랑하며, 균열·탈락 없이 깔끔한 마감이 오래 유지됩니다.",k:"예상 수명",v:"10년+"},{idx:"05",title:"손쉬운 유지관리",body:"표면이 매끄럽고 오염이 잘 스며들지 않아 간단한 청소만으로 항상 깨끗한 상태를 유지할 수 있습니다.",k:"청소",v:"솔 청소 가능"},{idx:"+",title:"대표 직접 시공. 2년 무상 A/S.",body:"소재의 차이만큼이나 중요한 것은 시공자의 손. 디테일라인은 모든 현장을 대표가 직접 마감합니다.",k:"누적",v:"2,000+ 세대",dark:!0}],Pv=[{name:"시멘트 줄눈",tag:"Standard",items:["시공 비용이 가장 저렴","1~2년 후 변색·균열 발생","곰팡이 번식에 취약","주기적 재시공 필요"]},{name:"케라폭시 줄눈",tag:"Detailline 추천",hero:!0,items:["에폭시 결합 — 균열·변색 없음","항균 처리 — 곰팡이 차단","20+ 색상으로 인테리어 매칭","10년+ 수명 · 2년 무상 A/S"]},{name:"폴리우레아",tag:"Heavy-duty",items:["압도적 내구성·하중 강도","주차장·산업 현장에 적합","주거 인테리어엔 과도","색상·질감 선택이 제한적"]}],Iv=[{code:"SP · 01",ko:"화장실 · 욕실",en:"Bath / Powder Room",desc:"가장 많이 사용하는 공간으로, 케라폭시의 내수성과 항균 기능이 극대화됩니다."},{code:"SP · 02",ko:"주방 · 싱크대 주변",en:"Kitchen / Counter",desc:"음식물 오염과 물에 강해 주방 타일 줄눈에 이상적인 소재입니다."},{code:"SP · 03",ko:"베란다 · 발코니",en:"Veranda / Balcony",desc:"자외선과 온도 변화에도 변색이 거의 없어 실외 공간에도 적합합니다."},{code:"SP · 04",ko:"현관 바닥",en:"Entrance Floor",desc:"먼지와 오염이 많은 현관 바닥에서도 변색 없이 깔끔한 마감을 유지합니다."},{code:"SP · 05",ko:"수영장 · 목욕탕",en:"Pool / Sauna",desc:"항시 수분에 노출되는 환경에서도 박리 없이 완벽한 방수 성능을 발휘합니다."}],e1=[{k:"시공 시간",v:"1일 (평형별 상이)"},{k:"건조 시간",v:"24시간 (완전 경화)"},{k:"사용 가능",v:"48시간 후 (물 사용 OK)"},{k:"A/S",v:"2년 (무상)"}],t1=[{idx:"No. 02 · Pricing",href:"/info/kerafoxy-price",title:"케라폭시 가격 안내",desc:"시공 비용에 영향을 주는 요인과 평형별 표준 가격을 한눈에."},{idx:"No. 03 · Product",href:"/info/kerafoxy-product",title:"케라폭시 계열 제품 소개",desc:"케라폭시·인터라컬러 등 주요 제품 라인업과 색상 가이드."},{idx:"No. 04 · Compare",href:"/info/comparison",title:"폴리우레아 vs 케라폭시",desc:"두 소재의 차이점과, 어떤 공간에 어떤 소재가 적합한지."},{idx:"No. 05 · Why",href:"/info/why-grout",title:"줄눈시공 하는 이유",desc:"위생·미관·내구성을 위한 필수 시공인 이유를 정리했습니다."}];function Mr({num:s,ko:c,en:o,title:d,lede:u,dark:m}){return l.jsxs("div",{className:`kf-sec-head ${m?"kf-sec-head-dark":""}`,children:[l.jsxs("div",{className:"kf-sec-bar",children:[l.jsx("span",{className:"kf-sec-n",children:s}),l.jsx("span",{className:"kf-sec-rule"}),l.jsxs("span",{className:"kf-sec-lbl",children:[l.jsx("span",{className:"kf-sec-ko",children:c}),l.jsx("span",{className:"kf-sec-en",children:o})]})]}),l.jsxs("div",{className:"kf-sec-body",children:[l.jsx("h2",{className:"kf-sec-title",children:d}),l.jsx("p",{className:"kf-sec-lede",children:u})]})]})}function a1(){const s=Ft();Pt(),v.useEffect(()=>{const o="/info/kerafoxy",d=pl[o],u=`${ve}${o}`,m=rt("article-jsonld",cl({title:d.title,description:d.description,url:u,image:`${ve}/og_banner.jpg`,datePublished:"2026-03-01",dateModified:"2026-05-29"})),x=rt("breadcrumb-jsonld",dl([{name:"홈",url:ve},{name:"줄눈 정보",url:`${ve}/#info`},{name:"케라폭시 줄눈이란?",url:u}]));return()=>{m(),x()}},[]),v.useEffect(()=>{window.scrollTo(0,0)},[]);const c=()=>{s("/#calc"),setTimeout(()=>{const o=document.querySelector("#calc");o&&o.scrollIntoView({behavior:"smooth"})},300)};return l.jsxs("div",{className:"kf-page",children:[l.jsx(Lt,{}),l.jsxs("header",{className:"kf-hero","data-screen-label":"01 Hero",children:[l.jsx("div",{className:"kf-hero-bg",style:{"--hero-img-d":`url(${xh})`,"--hero-img-m":`url(${gh})`},"aria-hidden":"true"}),l.jsxs("div",{className:"kf-container kf-hero-inner",children:[l.jsx("div",{className:"kf-eyebrow kf-eyebrow-light",children:"Grout Knowledge · 01"}),l.jsxs("h1",{className:"kf-hero-title",children:["케라폭시 줄눈,",l.jsx("br",{}),"한 줄의 깊이 ",l.jsx("em",{children:"완벽"}),"의 기준."]}),l.jsxs("p",{className:"kf-hero-lede",children:["마페이의 80년 경험치를 흡수한 2액형 고성능 줄눈 소재.",l.jsx("br",{}),"일반 시멘트 줄눈과 무엇이 다른지, 왜 프리미엄 공간에 선택되는지 정리했습니다."]}),l.jsx("ul",{className:"kf-hero-meta",children:$v.map(o=>l.jsxs("li",{children:[l.jsx("span",{className:"kf-meta-k",children:o.k}),l.jsx("span",{className:"kf-meta-v",children:o.v})]},o.k))})]})]}),l.jsx("nav",{className:"kf-crumb","aria-label":"현재 위치",children:l.jsxs("div",{className:"kf-container kf-crumb-inner",children:[l.jsx(Ee,{to:"/",className:"kf-crumb-item",children:"홈"}),l.jsx("span",{className:"kf-crumb-sep",children:"/"}),l.jsx("span",{className:"kf-crumb-item",children:"줄눈 정보"}),l.jsx("span",{className:"kf-crumb-sep",children:"/"}),l.jsx("span",{className:"kf-crumb-here",children:"케라폭시 줄눈이란?"})]})}),l.jsx("section",{className:"kf-section","data-screen-label":"02 Introduction",children:l.jsx("div",{className:"kf-container",children:l.jsxs("div",{className:"kf-intro",children:[l.jsxs("div",{className:"kf-intro-left",children:[l.jsx("div",{className:"kf-eyebrow",children:"Introduction · 들어가며"}),l.jsxs("h2",{className:"kf-intro-title",children:["케라폭시 줄눈,",l.jsx("br",{}),"왜 ",l.jsx("em",{children:"프리미엄 소재"}),"인가요?"]}),l.jsxs("p",{className:"kf-intro-body",children:[l.jsx("em",{className:"kf-hl",children:"케라폭시(Kerafoxy)는 에폭시 수지와 경화제를 혼합한 2액형 고성능 줄눈 소재"}),"입니다. 시멘트 줄눈이 물과 함께 굳는 방식과 달리, 화학적 결합으로 경화되어 본질적으로 다른 강도와 방수성을 만들어냅니다."]}),l.jsx("p",{className:"kf-intro-body",children:"이탈리아 건설 소재 전문 브랜드가 개발한 케라폭시는 국내외 수많은 고급 주택·호텔·상업 공간에서 사용되며 줄눈 소재로서의 우수성이 검증되어 있습니다."}),l.jsx("p",{className:"kf-intro-body",children:"특히 곰팡이가 쉽게 번식하는 욕실·주방 환경에서, 케라폭시는 일반 시멘트 줄눈 대비 압도적인 위생 유지 효과를 보여줍니다."}),l.jsx("ul",{className:"kf-intro-stats",children:Wv.map(o=>l.jsxs("li",{children:[l.jsx("span",{className:"kf-stat-k",children:o.k}),l.jsx("span",{className:"kf-stat-v",children:o.v})]},o.k))})]}),l.jsx("div",{className:"kf-intro-right",children:l.jsx("div",{className:"kf-intro-photo",children:l.jsx("img",{src:Jv,alt:"케라폭시 줄눈 시공 디테일",loading:"lazy"})})})]})})}),l.jsx("section",{className:"kf-section kf-bg-paper","data-screen-label":"03 Benefits",children:l.jsxs("div",{className:"kf-container",children:[l.jsx(Mr,{num:"02",ko:"5가지 핵심 장점",en:"Benefits",title:l.jsxs(l.Fragment,{children:["일반 시멘트 줄눈과 비교할 수 없는 ",l.jsx("em",{children:"성능 차이"}),"."]}),lede:"물·세균·시간이라는 줄눈의 세 가지 적에 대해, 케라폭시가 어떻게 대응하는지 정리했습니다."}),l.jsx("div",{className:"kf-benefits-grid",children:Fv.map(o=>l.jsxs("article",{className:`kf-benefit ${o.dark?"kf-benefit-dark":""}`,children:[l.jsxs("div",{className:"kf-benefit-head",children:[l.jsxs("span",{className:"kf-benefit-lbl",children:["Benefit / ",o.idx]}),l.jsx("span",{className:"kf-benefit-idx",children:o.idx})]}),l.jsx("h3",{className:"kf-benefit-title",children:o.title.split(`
`).map((d,u)=>l.jsx("span",{className:"kf-benefit-title-line",children:d},u))}),l.jsx("p",{className:"kf-benefit-body",children:o.body}),l.jsxs("div",{className:"kf-benefit-spec",children:[l.jsx("span",{className:"kf-spec-k",children:o.k}),l.jsx("span",{className:"kf-spec-v",children:o.v})]})]},o.idx))}),l.jsx("div",{className:"kf-compare",children:Pv.map(o=>l.jsxs("div",{className:`kf-compare-col ${o.hero?"kf-is-hero":""}`,children:[l.jsxs("div",{className:"kf-compare-head",children:[l.jsx("h3",{className:"kf-compare-name",children:o.name}),l.jsx("span",{className:"kf-compare-tag",children:o.tag})]}),l.jsx("ul",{className:"kf-compare-list",children:o.items.map(d=>l.jsx("li",{children:d},d))})]},o.name))})]})}),l.jsx("section",{className:"kf-section","data-screen-label":"04 Spaces",children:l.jsxs("div",{className:"kf-container",children:[l.jsx(Mr,{num:"03",ko:"적합한 공간",en:"Spaces",title:l.jsxs(l.Fragment,{children:["어떤 공간에 케라폭시를 ",l.jsx("em",{children:"시공"}),"해야 할까요?"]}),lede:"물과 오염이 가까운 곳, 미관과 위생을 동시에 잡아야 하는 곳에 케라폭시가 강합니다."}),l.jsx("ul",{className:"kf-spaces",children:Iv.map(o=>l.jsxs("li",{className:"kf-space-row",children:[l.jsx("span",{className:"kf-space-code",children:o.code}),l.jsxs("span",{className:"kf-space-lbl",children:[l.jsx("span",{className:"kf-space-ko",children:o.ko}),l.jsx("span",{className:"kf-space-en",children:o.en})]}),l.jsx("span",{className:"kf-space-desc",children:o.desc}),l.jsxs("span",{className:"kf-space-more",children:["자세히 ",l.jsx("span",{className:"kf-space-arr",children:"→"})]})]},o.code))})]})}),l.jsx("section",{className:"kf-section-dark","data-screen-label":"05 Before · After",children:l.jsxs("div",{className:"kf-container",children:[l.jsx(Mr,{dark:!0,num:"04",ko:"시공 전 · 후 비교",en:"Before · After",title:l.jsxs(l.Fragment,{children:["한 번의 시공으로, 줄눈이 ",l.jsx("em",{children:"인테리어의 점"}),"이 됩니다."]}),lede:"실제 시공 현장에서 발견되는 변화를 정리했습니다. 같은 공간, 다른 마감."}),l.jsxs("div",{className:"kf-ba-grid",children:[l.jsxs("figure",{className:"kf-ba-item",children:[l.jsxs("div",{className:"kf-ba-photo",children:[l.jsx("img",{src:mh,alt:"시공 전 — 시멘트 줄눈 상태",loading:"lazy"}),l.jsx("span",{className:"kf-ba-pill kf-ba-pill-light",children:"Before"})]}),l.jsxs("figcaption",{className:"kf-ba-cap",children:[l.jsx("h4",{className:"kf-ba-cap-title",children:"변색·균열·곰팡이 발생, 청소 어려움"}),l.jsx("p",{className:"kf-ba-cap-body",children:"시간이 지나며 흡수된 수분과 오염으로 줄눈이 어둡게 변하고, 모서리 부근부터 균열이 나타납니다."})]})]}),l.jsxs("figure",{className:"kf-ba-item",children:[l.jsxs("div",{className:"kf-ba-photo",children:[l.jsx("img",{src:hh,alt:"시공 후 — 케라폭시 줄눈 마감",loading:"lazy"}),l.jsx("span",{className:"kf-ba-pill kf-ba-pill-accent",children:"After"})]}),l.jsxs("figcaption",{className:"kf-ba-cap",children:[l.jsx("h4",{className:"kf-ba-cap-title",children:"매끄럽고 균일한 마감, 위생적인 깨끗함"}),l.jsx("p",{className:"kf-ba-cap-body",children:"균일한 두께·색상으로 타일 사이의 선이 이어지며, 청소 한 번으로 새것처럼 유지됩니다."})]})]})]}),l.jsx("ul",{className:"kf-ba-bottom",children:e1.map(o=>l.jsxs("li",{children:[l.jsx("span",{className:"kf-ba-bot-k",children:o.k}),l.jsx("span",{className:"kf-ba-bot-v",children:o.v})]},o.k))})]})}),l.jsx("section",{className:"kf-section kf-bg-paper","data-screen-label":"06 Related",children:l.jsxs("div",{className:"kf-container",children:[l.jsx(Mr,{num:"05",ko:"관련 정보 더 보기",en:"Related",title:l.jsxs(l.Fragment,{children:["줄눈에 대해 알아야 할, 다른 ",l.jsx("em",{children:"네 가지"}),"."]}),lede:"가격 · 제품 · 비교 · 시공 — 네 가지 관점으로 줄눈을 더 깊이 살펴보세요."}),l.jsx("div",{className:"kf-related-grid",children:t1.map(o=>l.jsxs(Ee,{to:o.href,className:"kf-related-card",children:[l.jsx("span",{className:"kf-related-idx",children:o.idx}),l.jsx("h4",{className:"kf-related-title",children:o.title}),l.jsx("p",{className:"kf-related-desc",children:o.desc}),l.jsxs("span",{className:"kf-related-more",children:["more ",l.jsx("span",{className:"kf-related-arr",children:"→"})]})]},o.href))})]})}),l.jsx("section",{className:"kf-cta-band","data-screen-label":"CTA Band",children:l.jsxs("div",{className:"kf-container kf-cta-row",children:[l.jsxs("div",{className:"kf-cta-text",children:[l.jsxs("h3",{className:"kf-cta-title",children:["우리 집 줄눈에 맞는 답이 궁금하다면, ",l.jsx("em",{children:"무료 견적"}),"으로 시작하세요."]}),l.jsx("p",{className:"kf-cta-sub",children:"평형 · 공간 · 색상을 알려주시면 24시간 내에 회신드립니다. 서울·경기·인천 줄눈시공 무료 견적 상담."})]}),l.jsxs("div",{className:"kf-cta-actions",children:[l.jsxs("button",{type:"button",className:"kf-btn kf-btn-primary",onClick:c,children:["무료 견적 받기 ",l.jsx("span",{className:"kf-btn-arr",children:"→"})]}),l.jsx("a",{href:"tel:010-8005-6674",onClick:()=>at.phoneClick("info_cta"),className:"kf-btn kf-btn-ghost",children:"전화 상담 010-8005-6674"})]})]})}),l.jsx(Yt,{}),l.jsx("style",{children:l1})]})}const l1=`
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
`,n1="/assets/bg-CP9CkGLZ.webp",i1="/assets/bg_m-DjojSNnF.webp",r1=[{k:"기준 연도",v:"2026",small:"VAT 별도"},{k:"단위",v:"만원",small:"1ea / 1줄"},{k:"A/S",v:"2년",small:"무상"},{k:"결제",v:"현금 / 카드",small:"분할 OK"}],s1=[{label:"화장실",group:"bath",rows:[{scope:"욕조형 · 바닥만",new:[40,30],old:[30,25]},{scope:"욕조형 · 전체 (바닥+벽)",new:[90,65],old:[75,55]},{scope:"샤워부스형 · 바닥만",new:[45,35],old:[38,30]},{scope:"샤워부스형 · 전체 (바닥+벽)",new:[95,70],old:[80,60]}]},{label:"거실",group:"living",rows:[{scope:"바닥 · 20평대",new:[150,100],old:[130,90]},{scope:"바닥 · 30평대+",new:[null,null],old:[null,null],note:"별도 협의"}]},{label:"현관",group:"etc",rows:[{scope:"바닥",new:[15,5],old:[12,4]}]},{label:"베란다",group:"etc",rows:[{scope:"바닥",new:[20,15],old:[18,13]}]},{label:"외부 화장실",group:"etc",rows:[{scope:"바닥",new:[30,25],old:[28,23]}]}],o1=[{num:"01",name:"세트 1",sub:"· 기본",desc:"화장실 바닥 ×2 + 현관",newPrice:100,oldPrice:120,services:[],emptyLabel:"기본 시공 패키지"},{num:"02",name:"세트 2",sub:"· 표준",desc:"세트 1 + 양조벽 or 샤워벽 3면 ×1곳",newPrice:135,oldPrice:155,services:[{text:"젠 다이 실리콘 ×2"},{text:"세면대 실리콘 ×2"}]},{num:"03",name:"세트 3",sub:"· 완성",desc:"화장실 바닥 ×2 + 전체벽 ×2 + 현관",newPrice:240,oldPrice:260,services:[{text:"젠 다이 실리콘 ×2"},{text:"세면대 실리콘 ×2"},{text:"싱크볼 실리콘"},{text:"주방벽 케라폭시"}]},{num:"04",name:"세트 4",sub:"· 확장",desc:"세트 2 + 세탁실",newPrice:150,oldPrice:170,services:[{text:"젠 다이 실리콘 ×2"},{text:"세면대 실리콘 ×2"},{text:"주방 실리콘"},{text:"싱크볼 실리콘"}]}],c1=[{n:"01",name:"시공 면적",en:"Area / Size",desc:"면적이 넓을수록 평단가가 내려가며, 협소한 공간은 작업 난이도로 인해 단가가 높아질 수 있습니다.",impact:"평단가 ↘",impactClass:"down"},{n:"02",name:"타일 크기 · 줄눈 간격",en:"Tile Size",desc:"타일이 작을수록 줄눈 길이가 길어져 작업 시간과 자재비가 증가합니다.",impact:"자재·시간 ↗",impactClass:"up"},{n:"03",name:"기존 줄눈 상태",en:"Existing Grout",desc:"기존 줄눈 제거가 필요한 경우 추가 작업비가 발생하며, 손상이 심할수록 비용이 올라갑니다.",impact:"+10만원~",impactClass:"up"},{n:"04",name:"색상 선택",en:"Color",desc:"특수 색상이나 다색 시공의 경우 단가가 다를 수 있으며, 컬러 매칭 작업이 추가됩니다.",impact:"옵션 변동",impactClass:"var"},{n:"05",name:"지역 · 접근성",en:"Location",desc:"지방이나 접근이 어려운 고층 건물의 경우 추가 출장비가 반영될 수 있습니다.",impact:"출장비 가산",impactClass:"up"}],d1=[{idx:"No. 01 · Intro",href:"/info/kerafoxy",title:"케라폭시 줄눈이란?",desc:"에폭시 줄눈 소재의 특징과 장점을 정리했습니다."},{idx:"No. 03 · Product",href:"/info/kerafoxy-product",title:"케라폭시 계열 제품 소개",desc:"주요 제품 라인업과 색상 가이드."},{idx:"No. 04 · Compare",href:"/info/comparison",title:"폴리우레아 vs 케라폭시",desc:"두 소재의 차이점과 적합한 공간 정리."},{idx:"No. 05 · Why",href:"/info/why-grout",title:"줄눈시공 하는 이유",desc:"위생·미관·내구성을 위한 필수 시공."}];function Or({num:s,ko:c,en:o,title:d,lede:u}){return l.jsxs("div",{className:"kp-sec-head",children:[l.jsxs("div",{className:"kp-sec-bar",children:[l.jsx("span",{className:"kp-sec-n",children:s}),l.jsx("span",{className:"kp-sec-rule"}),l.jsxs("span",{className:"kp-sec-lbl",children:[l.jsx("span",{className:"kp-sec-ko",children:c}),l.jsx("span",{className:"kp-sec-en",children:o})]})]}),l.jsxs("div",{className:"kp-sec-body",children:[l.jsx("h2",{className:"kp-sec-title",children:d}),u&&l.jsx("p",{className:"kp-sec-lede",children:u})]})]})}function p1(){const s=Ft(),[c,o]=v.useState("all"),[d,u]=v.useState("new");Pt(),v.useEffect(()=>{const g="/info/kerafoxy-price",b=pl[g],h=`${ve}${g}`,w=rt("article-jsonld",cl({title:b.title,description:b.description,url:h,image:`${ve}/og_banner.jpg`,datePublished:"2026-03-01",dateModified:"2026-05-29"})),N=rt("breadcrumb-jsonld",dl([{name:"홈",url:ve},{name:"줄눈 정보",url:`${ve}/#info`},{name:"케라폭시 가격 안내",url:h}]));return()=>{w(),N()}},[]),v.useEffect(()=>{window.scrollTo(0,0)},[]);const m=()=>{s("/#calc"),setTimeout(()=>{const g=document.querySelector("#calc");g&&g.scrollIntoView({behavior:"smooth"})},300)},x=v.useMemo(()=>s1.filter(g=>c==="all"||c===g.group),[c]);return l.jsxs("div",{className:"kp-page",children:[l.jsx(Lt,{}),l.jsxs("header",{className:"kp-hero","data-screen-label":"Hero",children:[l.jsx("div",{className:"kp-hero-bg",style:{"--hero-img-d":`url(${n1})`,"--hero-img-m":`url(${i1})`},"aria-hidden":"true"}),l.jsxs("div",{className:"kp-container kp-hero-inner",children:[l.jsx("div",{className:"kp-eyebrow kp-eyebrow-light",children:"Grout Knowledge · 02"}),l.jsxs("h1",{className:"kp-hero-title",children:["케라폭시 가격",l.jsx("em",{children:","}),l.jsx("br",{}),"한 줄까지 ",l.jsx("em",{children:"투명하게"}),"."]}),l.jsxs("p",{className:"kp-hero-lede",children:["2026년 디테일라인 표준 가격표.",l.jsx("br",{}),"공간 · 평형 · 시공 범위에 따른 단가를 그대로 공개합니다."]}),l.jsx("ul",{className:"kp-hero-meta",children:r1.map(g=>l.jsxs("li",{children:[l.jsx("span",{className:"kp-meta-k",children:g.k}),l.jsxs("span",{className:"kp-meta-v",children:[g.v," ",l.jsx("small",{children:g.small})]})]},g.k))})]})]}),l.jsx("nav",{className:"kp-crumb","aria-label":"현재 위치",children:l.jsxs("div",{className:"kp-container kp-crumb-inner",children:[l.jsx(Ee,{to:"/",className:"kp-crumb-item",children:"홈"}),l.jsx("span",{className:"kp-crumb-sep",children:"/"}),l.jsx("span",{className:"kp-crumb-item",children:"줄눈 정보"}),l.jsx("span",{className:"kp-crumb-sep",children:"/"}),l.jsx("span",{className:"kp-crumb-here",children:"케라폭시 가격 안내"})]})}),l.jsx("section",{className:"kp-section","data-screen-label":"01 Pricing Table",children:l.jsxs("div",{className:"kp-container",children:[l.jsx(Or,{num:"01",ko:"2026 가격 테이블",en:"Pricing Table",title:l.jsxs(l.Fragment,{children:["공간별 시공 단가,",l.jsx("br",{}),l.jsx("em",{children:"그대로 공개"}),"합니다."]}),lede:"케라폭시·폴리우레아 두 소재의 표준 단가입니다. 현장 상황에 따라 ±10% 조정될 수 있습니다."}),l.jsxs("div",{className:"kp-pt-controls",children:[l.jsx("div",{className:"kp-chips",role:"tablist","aria-label":"공간 필터",children:["all","bath","living","etc"].map(g=>l.jsx("button",{type:"button",className:`kp-chip ${c===g?"on":""}`,onClick:()=>o(g),role:"tab","aria-selected":c===g,children:g==="all"?"전체":g==="bath"?"화장실":g==="living"?"거실":"현관·기타"},g))}),l.jsx("div",{className:"kp-toggle",role:"tablist","aria-label":"건물 유형",children:["new","old"].map(g=>l.jsx("button",{type:"button",className:d===g?"on":"",onClick:()=>u(g),role:"tab","aria-selected":d===g,children:g==="new"?"신축":"구축"},g))})]}),l.jsx("div",{className:"kp-ptable-wrap",children:l.jsxs("table",{className:"kp-ptable",children:[l.jsx("caption",{className:"sr-only",children:"2026년 공간별 표준 단가 (만원, VAT 별도)"}),l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{style:{width:"160px"},children:"공간"}),l.jsx("th",{children:"범위"}),l.jsx("th",{className:"right",style:{width:"200px"},children:"케라폭시"}),l.jsx("th",{className:"right",style:{width:"200px"},children:"폴리우레아"})]})}),l.jsx("tbody",{children:x.flatMap(g=>g.rows.map((b,h)=>{const[w,N]=d==="new"?b.new:b.old;return l.jsxs("tr",{children:[l.jsx("td",{className:"kp-cell-space",children:h===0?g.label:""}),l.jsx("td",{className:"kp-cell-scope",children:b.scope}),l.jsx("td",{className:"right",children:b.note?l.jsx("span",{className:"kp-price note",children:b.note}):l.jsxs("span",{className:"kp-price kp",children:[w,l.jsx("small",{children:"만원"})]})}),l.jsx("td",{className:"right",children:b.note?l.jsx("span",{className:"kp-price note",children:b.note}):l.jsxs("span",{className:"kp-price",children:[N,l.jsx("small",{children:"만원"})]})})]},`${g.label}-${b.scope}`)}))})]})}),l.jsx("ul",{className:"kp-pcards","aria-label":"공간별 가격 카드",children:x.flatMap(g=>g.rows.map(b=>{const[h,w]=d==="new"?b.new:b.old;return l.jsxs("li",{className:"kp-pcard",children:[l.jsxs("div",{className:"kp-pcard-info",children:[l.jsx("span",{className:"kp-pcard-space",children:g.label}),l.jsx("span",{className:"kp-pcard-scope",children:b.scope})]}),l.jsxs("div",{className:"kp-pcard-prices",children:[l.jsxs("div",{className:"kp-pcard-pr",children:[l.jsx("span",{className:"kp-pcard-pr-lbl",children:"케라폭시"}),b.note?l.jsx("span",{className:"kp-pcard-pr-note",children:b.note}):l.jsxs("span",{className:"kp-pcard-pr-val kp",children:[h,l.jsx("small",{children:"만원"})]})]}),l.jsxs("div",{className:"kp-pcard-pr",children:[l.jsx("span",{className:"kp-pcard-pr-lbl",children:"폴리우레아"}),b.note?l.jsx("span",{className:"kp-pcard-pr-note",children:b.note}):l.jsxs("span",{className:"kp-pcard-pr-val",children:[w,l.jsx("small",{children:"만원"})]})]})]})]},`m-${g.label}-${b.scope}`)}))}),l.jsxs("div",{className:"kp-pt-foot",children:[l.jsx("div",{children:"* 모든 가격은 VAT 별도 · 자재비·인건비·출장비 포함 · 2년 무상 A/S (에폭시 계열)"}),l.jsx("div",{children:"* 평형 30평 초과 또는 특수 상황은 별도 협의"})]})]})}),l.jsx("section",{className:"kp-section kp-bg-paper","data-screen-label":"02 Set Packages",children:l.jsxs("div",{className:"kp-container",children:[l.jsx(Or,{num:"02",ko:"세트 할인 패키지",en:"Set Packages",title:l.jsxs(l.Fragment,{children:["4가지 패키지로,",l.jsx("br",{}),"한 번에 ",l.jsx("em",{children:"합리적으로"}),"."]}),lede:"화장실·현관·벽 등 주요 공간을 묶어 시공하면 실리콘·주방벽 등 추가 서비스가 함께 제공됩니다. VAT 포함 · 34평 이하 · 300개 타일 기준."}),l.jsx("div",{className:"kp-sets",children:o1.map(g=>l.jsxs("div",{className:"kp-set-card",children:[l.jsxs("div",{className:"kp-set-badge",children:["— SET ",g.num]}),l.jsxs("div",{className:"kp-set-title",children:[l.jsx("h3",{className:"kp-set-name",children:g.name}),l.jsx("span",{className:"kp-set-sub",children:g.sub})]}),l.jsx("p",{className:"kp-set-desc",children:g.desc}),l.jsxs("div",{className:"kp-set-prices",children:[l.jsxs("div",{className:"kp-set-pr",children:[l.jsx("span",{className:"kp-set-pr-lbl",children:"신축"}),l.jsx("span",{className:"kp-set-pr-val",children:g.newPrice}),l.jsx("span",{className:"kp-set-pr-unit",children:"만원"})]}),l.jsxs("div",{className:"kp-set-pr",children:[l.jsx("span",{className:"kp-set-pr-lbl",children:"구축"}),l.jsx("span",{className:"kp-set-pr-val",children:g.oldPrice}),l.jsx("span",{className:"kp-set-pr-unit",children:"만원"})]})]}),g.services.length>0?l.jsxs("div",{className:"kp-set-services",children:[l.jsx("div",{className:"kp-set-s-lbl",children:"+ 함께 제공"}),l.jsx("ul",{children:g.services.map(b=>l.jsx("li",{children:b.text},b.text))})]}):l.jsx("div",{className:"kp-set-services-empty",children:g.emptyLabel})]},g.num))}),l.jsxs("p",{className:"kp-set-foot",children:["※ 가격은 ",l.jsx("b",{children:"VAT 포함 · 34평 이하 · 300개 타일"})," 기준. 세트 외 추가 옵션은 상담 후 별도 산정됩니다.",l.jsx("br",{}),"※ 세트 실리콘은 기존 실리콘 양호 기준이며, 제거 후 재시공 시 추가 비용이 발생합니다. 기존 줄눈 시공 이력이 있는 경우 ",l.jsx("b",{children:"공간당 +10만원"}),"이 추가됩니다."]})]})}),l.jsx("section",{className:"kp-section","data-screen-label":"03 Cost Factors",children:l.jsxs("div",{className:"kp-container",children:[l.jsx(Or,{num:"03",ko:"시공 가격에 영향을 주는 요인",en:"Cost Factors",title:l.jsxs(l.Fragment,{children:["같은 평형이라도,",l.jsx("br",{}),"견적이 ",l.jsx("em",{children:"달라지는 이유"}),"."]}),lede:"현장의 디테일이 가격을 만듭니다. 자주 영향을 주는 다섯 가지 요인입니다."}),l.jsx("ul",{className:"kp-factors",children:c1.map(g=>l.jsxs("li",{className:"kp-f-row",children:[l.jsx("span",{className:"kp-f-n",children:g.n}),l.jsxs("span",{className:"kp-f-name",children:[g.name,l.jsx("small",{children:g.en})]}),l.jsx("span",{className:"kp-f-desc",children:g.desc}),l.jsx("span",{className:`kp-f-impact kp-f-impact--${g.impactClass}`,children:g.impact})]},g.n))})]})}),l.jsx("section",{className:"kp-section kp-bg-paper","data-screen-label":"04 Related",children:l.jsxs("div",{className:"kp-container",children:[l.jsx(Or,{num:"04",ko:"관련 정보 더 보기",en:"Related",title:l.jsxs(l.Fragment,{children:["줄눈에 대해 알아야 할, 다른 ",l.jsx("em",{children:"네 가지"}),"."]}),lede:"가격 · 제품 · 비교 · 시공 — 네 가지 관점으로 줄눈을 더 깊이 살펴보세요."}),l.jsx("div",{className:"kp-related-grid",children:d1.map(g=>l.jsxs(Ee,{to:g.href,className:"kp-related-card",children:[l.jsx("span",{className:"kp-related-idx",children:g.idx}),l.jsx("h4",{className:"kp-related-title",children:g.title}),l.jsx("p",{className:"kp-related-desc",children:g.desc}),l.jsxs("span",{className:"kp-related-more",children:["more ",l.jsx("span",{className:"kp-related-arr",children:"→"})]})]},g.href))})]})}),l.jsx("section",{className:"kp-cta-band","data-screen-label":"CTA Band",children:l.jsxs("div",{className:"kp-container kp-cta-row",children:[l.jsxs("div",{className:"kp-cta-text",children:[l.jsxs("h3",{className:"kp-cta-title",children:["정확한 시공 비용이 ",l.jsx("em",{children:"궁금하신가요?"})]}),l.jsx("p",{className:"kp-cta-sub",children:"현장 상황에 따라 가격이 달라질 수 있습니다. 공간별 맞춤 견적을 안내해 드립니다. 서울·경기·인천 줄눈시공 무료 견적 상담."})]}),l.jsxs("div",{className:"kp-cta-actions",children:[l.jsxs("button",{type:"button",className:"kp-btn kp-btn-primary",onClick:m,children:["무료 견적 받기 ",l.jsx("span",{className:"kp-btn-arr",children:"→"})]}),l.jsx("a",{href:"tel:010-8005-6674",onClick:()=>at.phoneClick("info_cta"),className:"kp-btn kp-btn-ghost",children:"전화 상담 010-8005-6674"})]})]})}),l.jsx(Yt,{}),l.jsx("style",{children:u1})]})}const u1=`
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
`,f1="/assets/kerafoxy-DrWysCxm.jpg",m1="/assets/strikeevo-CoKoyCPo.jpg",h1="/assets/aspactone-CtALWUuf.jpg",bh="/assets/Polyurea-DMhrJjtC.jpg",x1="/assets/bg-LU8nN9ip.webp",g1="/assets/bg_m-BSEgDA_R.webp",b1=[{k:"라인업",v:"4종",small:"에폭시 계열"},{k:"컬러",v:"20+",small:"표준 색상"},{k:"친환경",v:"EC1+",small:"GEV 인증"},{k:"A/S",v:"2년",small:"무상"}],_r=[{id:"pure",name:"순백",hex:"#f1ede4",group:"white",tagEn:"WHITE",light:!0},{id:"ivory",name:"아이보리",hex:"#e6dccb",group:"white",tagEn:"WHITE",light:!0},{id:"beige",name:"베이지",hex:"#d9c8a2",group:"earth",tagEn:"EARTH",light:!0},{id:"sand",name:"샌드",hex:"#bfa478",group:"earth",tagEn:"EARTH",light:!1},{id:"khaki",name:"카키",hex:"#8a7d5e",group:"earth",tagEn:"EARTH",light:!1},{id:"brown",name:"브라운",hex:"#6f4a2a",group:"earth",tagEn:"EARTH",light:!1},{id:"silver",name:"실버그레이",hex:"#c4c0bc",group:"gray",tagEn:"GRAY",light:!0},{id:"lightgray",name:"라이트그레이",hex:"#a8a59f",group:"gray",tagEn:"GRAY",light:!1},{id:"mediumgray",name:"미디엄그레이",hex:"#7a766f",group:"gray",tagEn:"GRAY",light:!1},{id:"darkgray",name:"다크그레이",hex:"#4a4842",group:"dark",tagEn:"DARK",light:!1},{id:"charcoal",name:"차콜",hex:"#2a2825",group:"dark",tagEn:"DARK",light:!1},{id:"black",name:"블랙",hex:"#16140f",group:"dark",tagEn:"DARK",light:!1}],ti={all:"전체",white:"화이트 계열",earth:"베이지·어스 계열",gray:"그레이 계열",dark:"다크 계열"},Ac={white:"타일과 통일감을 주어 깔끔하고 넓어 보이는 효과를 만듭니다. 오염은 비교적 잘 보이는 편이므로 청소 빈도가 높은 공간에 적합합니다.",earth:"원목·가구·내추럴 인테리어와 잘 어우러집니다. 오염 자국이 눈에 잘 띄지 않아 관리가 편합니다.",gray:"오염이 덜 보이고 유지관리가 편하며, 모던하고 차분한 분위기를 만듭니다. 대부분의 타일과 무난하게 어울립니다.",dark:"타일과 강한 대비를 만들어 그래픽한 인테리어 포인트가 됩니다. 좁은 공간에서는 답답하게 보일 수 있어 주의가 필요합니다."},Dr={white:{label:"화이트",hex:"#ece6dc"},gray:{label:"그레이",hex:"#b5b1a8"},dark:{label:"다크",hex:"#3a3530"}},Mm=[{id:"kerafoxy",name:"케라폭시",badge:{label:"프리미엄",variant:"premium"},desc:"에폭시 수지+경화제 2액형의 대표 프리미엄 줄눈재. 화장실·욕실·주방 등 물 접촉 공간에서 가장 안정적인 성능을 보입니다.",specs:[{k:"베이스",v:"에폭시 + 경화제 2액형"},{k:"경화 시간",v:"24 ~ 48시간"},{k:"표면",v:"고광택"},{k:"추천 공간",v:"화장실 · 욕실 · 주방"},{k:"컬러",v:"20+ 색상"},{k:"수명",v:"10년+"}],image:f1},{id:"strikeevo",name:"스트라이크 에보",badge:{label:"프리미엄",variant:"premium"},desc:"3세대 에폭시 줄눈재로 무광·유광 선택이 가능하며, 균일한 컬러와 변색 저항성이 뛰어납니다. 프리미엄 인테리어에 자주 채택됩니다.",specs:[{k:"베이스",v:"에폭시 (이탈리아산)"},{k:"경화 시간",v:"24 ~ 72시간"},{k:"표면",v:"무광 / 유광 선택"},{k:"추천 공간",v:"화장실 · 주방 · 디자인 강조"},{k:"컬러",v:"30+ 색상"},{k:"수명",v:"10년+"}],image:m1},{id:"aspactone",name:"아스팍톤",badge:{label:"개선형",variant:"premium"},desc:"무광·무펄·무수축·무황변을 구현한 신소재 에폭시. 기존 무광 에폭시의 단점을 보완해 어린이방·욕실에 추천됩니다.",specs:[{k:"베이스",v:"에폭시 개선형"},{k:"경화 시간",v:"24 ~ 36시간"},{k:"표면",v:"균일 무광"},{k:"추천 공간",v:"패턴 타일 · 디자인 욕실"},{k:"컬러",v:"25+ 색상"},{k:"수명",v:"10년+"}],image:h1},{id:"polyurea",name:"폴리우레아",badge:{label:"하이브리드",variant:"hybrid"},desc:"시멘트 + 에폭시 하이브리드 줄눈재. 매트한 질감으로 내추럴 인테리어에 잘 맞고, 가격대가 합리적이라 비수계 공간에 추천됩니다.",specs:[{k:"베이스",v:"시멘트 + 에폭시"},{k:"경화 시간",v:"48 ~ 96시간"},{k:"표면",v:"매트"},{k:"추천 공간",v:"현관 · 베란다 · 거실 일부"},{k:"컬러",v:"16+ 색상"},{k:"수명",v:"5년+"}],image:bh}],v1=[{idx:"No. 01 · Intro",href:"/info/kerafoxy",title:"케라폭시 줄눈이란?",desc:"에폭시 줄눈 소재의 특징과 장점을 정리했습니다."},{idx:"No. 02 · Pricing",href:"/info/kerafoxy-price",title:"케라폭시 가격 안내",desc:"시공 비용에 영향을 주는 요인과 표준 가격."},{idx:"No. 04 · Compare",href:"/info/comparison",title:"폴리우레아 vs 케라폭시",desc:"두 소재의 차이점과 적합한 공간 정리."},{idx:"No. 05 · Why",href:"/info/why-grout",title:"줄눈시공 하는 이유",desc:"위생·미관·내구성을 위한 필수 시공."}];function Tc({num:s,ko:c,en:o,title:d,lede:u}){return l.jsxs("div",{className:"ep-sec-head",children:[l.jsxs("div",{className:"ep-sec-bar",children:[l.jsx("span",{className:"ep-sec-n",children:s}),l.jsx("span",{className:"ep-sec-rule"}),l.jsxs("span",{className:"ep-sec-lbl",children:[l.jsx("span",{className:"ep-sec-ko",children:c}),l.jsx("span",{className:"ep-sec-en",children:o})]})]}),l.jsxs("div",{className:"ep-sec-body",children:[l.jsx("h2",{className:"ep-sec-title",children:d}),u&&l.jsx("p",{className:"ep-sec-lede",children:u})]})]})}function y1(){const s=Ft(),[c,o]=v.useState("kerafoxy"),[d,u]=v.useState("silver"),[m,x]=v.useState("all"),[g,b]=v.useState("white");Pt(),v.useEffect(()=>{const S="/info/kerafoxy-product",G=pl[S],q=`${ve}${S}`,Y=rt("article-jsonld",cl({title:G.title,description:G.description,url:q,image:`${ve}/og_banner.jpg`,datePublished:"2026-03-01",dateModified:"2026-05-29"})),V=rt("breadcrumb-jsonld",dl([{name:"홈",url:ve},{name:"줄눈 정보",url:`${ve}/#info`},{name:"케라폭시 제품 소개",url:q}]));return()=>{Y(),V()}},[]),v.useEffect(()=>{window.scrollTo(0,0)},[]);const h=()=>{s("/#calc"),setTimeout(()=>{const S=document.querySelector("#calc");S&&S.scrollIntoView({behavior:"smooth"})},300)},w=Mm.find(S=>S.id===c),N=_r.find(S=>S.id===d),U=v.useMemo(()=>m==="all"?_r:_r.filter(S=>S.group===m),[m]),K={"--grout-color":N.hex,"--tile-color":Dr[g].hex};return l.jsxs("div",{className:"ep-page",children:[l.jsx(Lt,{}),l.jsxs("header",{className:"ep-hero","data-screen-label":"Hero",children:[l.jsx("div",{className:"ep-hero-bg",style:{"--hero-img-d":`url(${x1})`,"--hero-img-m":`url(${g1})`},"aria-hidden":"true"}),l.jsxs("div",{className:"ep-container ep-hero-inner",children:[l.jsx("div",{className:"ep-eyebrow ep-eyebrow-light",children:"Grout Knowledge · 03"}),l.jsxs("h1",{className:"ep-hero-title",children:["내 공간에 맞는",l.jsx("br",{}),"에폭시 계열 ",l.jsx("em",{children:"한 가지"}),"."]}),l.jsxs("p",{className:"ep-hero-lede",children:["디테일라인이 직접 시공하는 4종의 에폭시 계열 줄눈재와",l.jsx("br",{}),"줄눈 색상을 미리 확인할 수 있는 라이브 시뮬레이터를 제공합니다."]}),l.jsx("ul",{className:"ep-hero-meta",children:b1.map(S=>l.jsxs("li",{children:[l.jsx("span",{className:"ep-meta-k",children:S.k}),l.jsxs("span",{className:"ep-meta-v",children:[S.v," ",l.jsx("small",{children:S.small})]})]},S.k))})]})]}),l.jsx("nav",{className:"ep-crumb","aria-label":"현재 위치",children:l.jsxs("div",{className:"ep-container ep-crumb-inner",children:[l.jsx(Ee,{to:"/",className:"ep-crumb-item",children:"홈"}),l.jsx("span",{className:"ep-crumb-sep",children:"/"}),l.jsx("span",{className:"ep-crumb-item",children:"줄눈 정보"}),l.jsx("span",{className:"ep-crumb-sep",children:"/"}),l.jsx("span",{className:"ep-crumb-here",children:"에폭시 계열 제품 소개"})]})}),l.jsx("section",{className:"ep-section","data-screen-label":"01 Product Lineup",children:l.jsxs("div",{className:"ep-container",children:[l.jsx(Tc,{num:"01",ko:"제품 라인업",en:"Product Lineup",title:l.jsxs(l.Fragment,{children:["같은 에폭시여도,",l.jsx("br",{}),l.jsx("em",{children:"맞춤 선택"}),"이 가능합니다."]}),lede:"공간 · 표면 질감 · 색상 선호에 따라 4종의 제품 중 가장 적합한 것을 안내해 드립니다."}),l.jsx("div",{className:"ep-prod-tabs",role:"tablist","aria-label":"제품 선택",children:Mm.map(S=>l.jsx("button",{type:"button",role:"tab","aria-selected":c===S.id,className:`ep-prod-tab ${c===S.id?"on":""}`,onClick:()=>o(S.id),children:S.name},S.id))}),l.jsxs("div",{className:"ep-prod-panel",role:"tabpanel",children:[l.jsx("div",{className:"ep-prod-image",children:l.jsx("img",{src:w.image,alt:`${w.name} 시공 결과`,loading:"lazy"})}),l.jsxs("div",{className:"ep-prod-info",children:[l.jsxs("div",{className:"ep-prod-head",children:[l.jsx("h3",{className:"ep-prod-name",children:w.name}),l.jsx("span",{className:`ep-prod-badge ep-prod-badge--${w.badge.variant}`,children:w.badge.label})]}),l.jsx("p",{className:"ep-prod-desc",children:w.desc}),l.jsx("dl",{className:"ep-prod-specs",children:w.specs.map(S=>l.jsxs("div",{className:"ep-prod-spec-row",children:[l.jsx("dt",{children:S.k}),l.jsx("dd",{children:S.v})]},S.k))})]})]})]})}),l.jsx("section",{className:"ep-section ep-bg-paper","data-screen-label":"02 Color Simulator",children:l.jsxs("div",{className:"ep-container",children:[l.jsx(Tc,{num:"02",ko:"라이브 컬러 시뮬레이터",en:"Live Color Simulator",title:l.jsxs(l.Fragment,{children:["시공 전에, 줄눈 색을 ",l.jsx("em",{children:"미리 보세요"}),"."]}),lede:"아래 스와치를 클릭하면 좌측 타일 그리드의 줄눈 색이 즉시 바뀝니다. 타일 색·계열 필터로 다양한 조합을 빠르게 확인해 보세요."}),l.jsxs("div",{className:"ep-sim-grid",children:[l.jsxs("div",{className:"ep-sim-left",children:[l.jsx("div",{className:"ep-tile-preview",children:l.jsx("div",{className:"ep-tile-stage",style:K,"aria-hidden":"true",children:Array.from({length:30}).map((S,G)=>l.jsx("span",{className:"ep-tile"},G))})}),l.jsx("div",{className:"ep-tile-toggle",role:"tablist","aria-label":"타일 색상",children:Object.keys(Dr).map(S=>l.jsxs("button",{type:"button",role:"tab","aria-selected":g===S,className:`ep-tile-toggle-btn ${g===S?"on":""}`,onClick:()=>b(S),children:[l.jsx("span",{className:"ep-tile-toggle-dot",style:{"--td":Dr[S].hex}}),l.jsx("span",{children:Dr[S].label})]},S))})]}),l.jsxs("div",{className:"ep-sim-right",children:[l.jsx("div",{className:"ep-group-tabs",role:"tablist","aria-label":"색상 계열",children:Object.keys(ti).map(S=>l.jsx("button",{type:"button",role:"tab","aria-selected":m===S,className:`ep-group-tab ${m===S?"on":""}`,onClick:()=>x(S),children:ti[S]},S))}),l.jsx("div",{className:"ep-swatches",children:U.map(S=>l.jsx("button",{type:"button",className:`ep-swatch ${d===S.id?"is-active":""}`,style:{background:S.hex},"data-light":S.light?"true":"false",onClick:()=>u(S.id),"aria-label":`${S.name} · ${S.hex.toUpperCase()} · ${ti[S.group]}`,"aria-pressed":d===S.id},S.id))}),l.jsxs("div",{className:"ep-sel-card","aria-live":"polite",children:[l.jsx("div",{className:"ep-sel-chip",style:{"--c":N.hex},"aria-hidden":"true"}),l.jsxs("div",{className:"ep-sel-info",children:[l.jsx("h4",{className:"ep-sel-name",children:N.name}),l.jsxs("div",{className:"ep-sel-meta",children:[l.jsx("span",{className:"ep-sel-hex",children:N.hex.toUpperCase()}),l.jsxs("span",{className:"ep-sel-tag",children:["· ",N.tagEn]})]}),l.jsx("div",{className:"ep-sel-group",children:ti[N.group]}),l.jsx("p",{className:"ep-sel-tip",children:Ac[N.group]})]})]})]})]}),l.jsx("ul",{className:"ep-tips-grid",children:Object.keys(Ac).map(S=>{const G=_r.filter(q=>q.group===S).slice(0,3);return l.jsxs("li",{className:"ep-tip-cell",children:[l.jsx("div",{className:"ep-tip-swatches","aria-hidden":"true",children:G.map(q=>l.jsx("span",{style:{background:q.hex}},q.id))}),l.jsx("h4",{className:"ep-tip-name",children:ti[S]}),l.jsx("p",{className:"ep-tip-desc",children:Ac[S]})]},S)})})]})}),l.jsx("section",{className:"ep-section","data-screen-label":"03 Related",children:l.jsxs("div",{className:"ep-container",children:[l.jsx(Tc,{num:"03",ko:"관련 정보 더 보기",en:"Related",title:l.jsxs(l.Fragment,{children:["줄눈에 대해 알아야 할, 다른 ",l.jsx("em",{children:"네 가지"}),"."]}),lede:"가격 · 제품 · 비교 · 시공 — 네 가지 관점으로 줄눈을 더 깊이 살펴보세요."}),l.jsx("div",{className:"ep-related-grid",children:v1.map(S=>l.jsxs(Ee,{to:S.href,className:"ep-related-card",children:[l.jsx("span",{className:"ep-related-idx",children:S.idx}),l.jsx("h4",{className:"ep-related-title",children:S.title}),l.jsx("p",{className:"ep-related-desc",children:S.desc}),l.jsxs("span",{className:"ep-related-more",children:["more ",l.jsx("span",{className:"ep-related-arr",children:"→"})]})]},S.href))})]})}),l.jsx("section",{className:"ep-cta-band","data-screen-label":"CTA Band",children:l.jsxs("div",{className:"ep-container ep-cta-row",children:[l.jsxs("div",{className:"ep-cta-text",children:[l.jsxs("h3",{className:"ep-cta-title",children:["어떤 제품·색이 우리 집에 맞을지 ",l.jsx("em",{children:"고민되신다면"}),"?"]}),l.jsx("p",{className:"ep-cta-sub",children:"공간 사진 한 장만 보내주시면, 가장 잘 어울리는 제품과 색을 추천해 드립니다. 서울·경기·인천 줄눈시공 무료 견적 상담."})]}),l.jsxs("div",{className:"ep-cta-actions",children:[l.jsxs("button",{type:"button",className:"ep-btn ep-btn-primary",onClick:h,children:["무료 견적 받기 ",l.jsx("span",{className:"ep-btn-arr",children:"→"})]}),l.jsx("a",{href:"tel:010-8005-6674",onClick:()=>at.phoneClick("info_cta"),className:"ep-btn ep-btn-ghost",children:"전화 상담 010-8005-6674"})]})]})}),l.jsx(Yt,{}),l.jsx("style",{children:j1})]})}const j1=`
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
`,Pl=({n:s,best:c})=>l.jsxs(l.Fragment,{children:[l.jsxs("span",{className:"cp-stars",children:["★".repeat(s),l.jsx("span",{className:"off",children:"★".repeat(5-s)})]}),l.jsx("span",{className:`cp-rating ${c?"best":""}`,children:c?"탁월":s>=4?"우수":s>=3?"보통":"낮음"})]}),Om=[{k:"소재 성분",kerafoxy:l.jsxs(l.Fragment,{children:["에폭시 수지 ",l.jsx("span",{className:"cp-plus",children:"+"})," 경화제"," ",l.jsx("span",{className:"cp-rating",children:"2액형"})]}),polyurea:l.jsxs(l.Fragment,{children:["폴리우레아 수지 ",l.jsx("span",{className:"cp-rating",children:"1액형"})]})},{k:"경화 방식",kerafoxy:l.jsxs(l.Fragment,{children:["화학 반응 경화 ",l.jsx("span",{className:"cp-rating",children:"수동 혼합"})]}),polyurea:l.jsxs(l.Fragment,{children:["자연 경화 ",l.jsx("span",{className:"cp-rating",children:"습기·공기 반응"})]})},{k:"내수성",kerafoxy:l.jsx(Pl,{n:5,best:!0}),polyurea:l.jsx(Pl,{n:3})},{k:"항균성",kerafoxy:l.jsx(Pl,{n:5,best:!0}),polyurea:l.jsx(Pl,{n:3})},{k:"내구성 · 수명",kerafoxy:l.jsxs("span",{className:"cp-num",children:["10~15",l.jsx("small",{children:"년 이상"})]}),polyurea:l.jsxs("span",{className:"cp-num",children:["2~4",l.jsx("small",{children:"년"})]})},{k:"탄성 · 신축성",kerafoxy:l.jsx(Pl,{n:4}),polyurea:l.jsx(Pl,{n:5,best:!0})},{k:"시공 난이도",kerafoxy:"전문 기술 필요",polyurea:"비교적 간단"},{k:"가격",kerafoxy:l.jsxs("span",{className:"cp-num",children:["평균 30",l.jsx("small",{children:"만원"})]}),polyurea:l.jsxs("span",{className:"cp-num",children:["평균 20",l.jsx("small",{children:"만원"})]})},{k:"색상 선택",kerafoxy:l.jsxs("span",{className:"cp-num",children:["16",l.jsx("small",{children:"여 가지"})]}),polyurea:l.jsxs("span",{className:"cp-num",children:["20",l.jsx("small",{children:"여 가지"})]})},{k:"적합 환경",kerafoxy:l.jsxs(l.Fragment,{children:["욕실 · 주방 · 수영장 등 ",l.jsx("strong",{className:"cp-strong",children:"수분 多"})]}),polyurea:l.jsxs(l.Fragment,{children:["베란다 · 외벽 등 ",l.jsx("strong",{className:"cp-strong",children:"진동·충격 多"})]})}],k1=[{variant:"kp",title:"케라폭시 줄눈 추천",sub:"For Home · Indoor",items:[{text:"화장실·욕실·주방처럼 상시 수분에 노출되는 공간"},{text:"위생이 특히 중요한 가정 (어린이, 노약자)"},{text:"오랫동안 재시공 없이 사용하고 싶은 경우"},{text:"다양한 색상으로 인테리어를 연출하고 싶은 경우"}]},{variant:"pu",title:"폴리우레아 줄눈 추천",sub:"For Outdoor · Industrial",items:[{text:"베란다·테라스 등 온도 변화와 진동이 많은 공간"},{text:"건물 외벽·주차장처럼 하중과 충격이 큰 환경"},{text:"빠른 시공과 조기 경화가 필요한 경우"},{text:"비용을 절감하면서도 품질을 원하는 경우"}]}],N1=[{idx:"No. 01 · Kerafoxy",href:"/info/kerafoxy",title:"케라폭시 줄눈이란?",desc:"에폭시 계열 고성능 줄눈 소재 케라폭시의 5가지 핵심 장점."},{idx:"No. 02 · Product",href:"/info/kerafoxy-product",title:"케라폭시 계열 제품 소개",desc:"케라폭시·스타라이크·푸가리테 등 주요 제품 라인업과 색상 가이드."},{idx:"No. 03 · Pricing",href:"/info/kerafoxy-price",title:"케라폭시 가격 안내",desc:"시공 비용에 영향을 주는 요인과 평형별 표준 가격을 한눈에."},{idx:"No. 04 · Why",href:"/info/why-grout",title:"줄눈시공 하는 이유",desc:"위생·미관·내구성을 위한 필수 시공인 이유를 정리했습니다."}];function Rc({num:s,ko:c,en:o,title:d,lede:u}){return l.jsxs("div",{className:"cp-sec-head",children:[l.jsxs("div",{className:"cp-sec-bar",children:[l.jsx("span",{className:"cp-sec-n",children:s}),l.jsx("span",{className:"cp-sec-rule"}),l.jsxs("span",{className:"cp-sec-lbl",children:[l.jsx("span",{className:"cp-sec-ko",children:c}),l.jsx("span",{className:"cp-sec-en",children:o})]})]}),l.jsxs("div",{className:"cp-sec-body",children:[l.jsx("h2",{className:"cp-sec-title",children:d}),u&&l.jsx("p",{className:"cp-sec-lede",children:u})]})]})}function w1(){const s=Ft();Pt(),v.useEffect(()=>{const o="/info/comparison",d=pl[o],u=`${ve}${o}`,m=rt("article-jsonld",cl({title:d.title,description:d.description,url:u,image:`${ve}/og_banner.jpg`,datePublished:"2026-03-01",dateModified:"2026-05-29"})),x=rt("breadcrumb-jsonld",dl([{name:"홈",url:ve},{name:"줄눈 정보",url:`${ve}/#info`},{name:"폴리우레아 vs 케라폭시 비교",url:u}]));return()=>{m(),x()}},[]),v.useEffect(()=>{window.scrollTo(0,0)},[]);const c=()=>{s("/#calc"),setTimeout(()=>{const o=document.querySelector("#calc");o&&o.scrollIntoView({behavior:"smooth"})},300)};return l.jsxs("div",{className:"cp-page",children:[l.jsx(Lt,{}),l.jsxs("header",{className:"cp-hero","data-screen-label":"Hero",children:[l.jsx("div",{className:"cp-hero-bg","aria-hidden":"true"}),l.jsxs("div",{className:"cp-container cp-hero-inner",children:[l.jsx("div",{className:"cp-eyebrow cp-eyebrow-light",children:"Material Compare Guide"}),l.jsxs("h1",{className:"cp-hero-title",children:["폴리우레아 ",l.jsx("span",{className:"cp-vs",children:"vs"})," 케라폭시"]}),l.jsxs("p",{className:"cp-hero-lede",children:["두 소재의 차이점과 장단점을 비교해",l.jsx("br",{}),"공간에 가장 알맞은 소재를 선택하세요."]})]})]}),l.jsx("nav",{className:"cp-crumb","aria-label":"현재 위치",children:l.jsxs("div",{className:"cp-container cp-crumb-inner",children:[l.jsx(Ee,{to:"/",className:"cp-crumb-item",children:"홈"}),l.jsx("span",{className:"cp-crumb-sep",children:"/"}),l.jsx("span",{className:"cp-crumb-item",children:"줄눈 정보"}),l.jsx("span",{className:"cp-crumb-sep",children:"/"}),l.jsx("span",{className:"cp-crumb-here",children:"폴리우레아 vs 케라폭시"})]})}),l.jsx("section",{className:"cp-intro","data-screen-label":"Intro",children:l.jsx("div",{className:"cp-container",children:l.jsxs("div",{className:"cp-intro-grid",children:[l.jsxs("h2",{className:"cp-intro-title",children:["폴리우레아 줄눈과",l.jsx("br",{}),"케라폭시 줄눈,",l.jsx("br",{}),l.jsx("em",{children:"어떻게 다를까?"})]}),l.jsxs("div",{className:"cp-intro-body",children:[l.jsxs("p",{children:["줄눈 시공을 알아보다 보면 ",l.jsx("b",{children:"폴리우레아 줄눈"}),"과 ",l.jsx("b",{children:"케라폭시 줄눈"}),", 두 가지 선택지를 마주하게 됩니다. 두 소재 모두 기존 시멘트 줄눈보다 월등히 우수한 성능을 자랑하지만, 각자의 강점이 다릅니다."]}),l.jsxs("p",{children:["간단히 말하면, ",l.jsx("b",{children:"케라폭시는 방수·항균 성능"}),"이 극강이고"," ",l.jsx("b",{children:"폴리우레아는 탄성·신축성"}),"이 뛰어납니다. 공간의 특성에 따라 알맞은 소재를 선택하는 것이 핵심입니다."]}),l.jsxs("div",{className:"cp-vs-mark",children:[l.jsxs("span",{className:"cp-pill",children:["방수·항균 ",l.jsx("b",{children:"케라폭시"})]}),l.jsx("span",{className:"cp-vs-x",children:"×"}),l.jsxs("span",{className:"cp-pill",children:["탄성·내충격 ",l.jsx("b",{children:"폴리우레아"})]})]})]})]})})}),l.jsx("section",{className:"cp-section cp-bg-paper","data-screen-label":"01 Detailed Comparison",children:l.jsxs("div",{className:"cp-container",children:[l.jsx(Rc,{num:"01",ko:"상세 비교표",en:"Detailed Comparison",title:l.jsxs(l.Fragment,{children:["10가지 항목으로,",l.jsx("br",{}),"두 소재를 ",l.jsx("em",{children:"나란히 본다"}),"."]}),lede:"성분·내구성·가격·시공성까지. 한 줄씩 짚어가며 비교하세요. ★은 5점 만점 기준의 상대 성능입니다."}),l.jsx("div",{className:"cp-cmp-wrap",children:l.jsxs("table",{className:"cp-cmp-table",children:[l.jsx("caption",{className:"sr-only",children:"케라폭시 vs 폴리우레아 10항목 비교"}),l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{className:"cp-cmp-first",children:l.jsxs("span",{className:"cp-cmp-mat",children:["비교 항목",l.jsx("small",{children:"Criteria"})]})}),l.jsx("th",{children:l.jsxs("span",{className:"cp-cmp-mat",children:["케라폭시 줄눈",l.jsx("small",{children:"Kerapoxy"})]})}),l.jsx("th",{children:l.jsxs("span",{className:"cp-cmp-mat",children:["폴리우레아 줄눈",l.jsx("small",{children:"Polyurea"})]})})]})}),l.jsx("tbody",{children:Om.map(o=>l.jsxs("tr",{children:[l.jsx("td",{className:"cp-row-label",children:o.k}),l.jsx("td",{className:"cp-col-kp",children:o.kerafoxy}),l.jsx("td",{children:o.polyurea})]},o.k))})]})}),l.jsx("ul",{className:"cp-cmp-cards","aria-label":"비교 항목별 카드",children:Om.map(o=>l.jsxs("li",{className:"cp-cmp-card",children:[l.jsx("div",{className:"cp-cmp-card-k",children:o.k}),l.jsxs("div",{className:"cp-cmp-card-row",children:[l.jsxs("div",{className:"cp-cmp-card-side cp-cmp-card-kp",children:[l.jsx("span",{className:"cp-cmp-card-side-lbl",children:"케라폭시"}),l.jsx("span",{className:"cp-cmp-card-side-val",children:o.kerafoxy})]}),l.jsxs("div",{className:"cp-cmp-card-side",children:[l.jsx("span",{className:"cp-cmp-card-side-lbl",children:"폴리우레아"}),l.jsx("span",{className:"cp-cmp-card-side-val",children:o.polyurea})]})]})]},`m-${o.k}`))}),l.jsx("p",{className:"cp-cmp-foot",children:"* 가격은 화장실 양변기 전체(바닥+벽) 시공 기준 평균값이며, 평형·현장 상황에 따라 달라질 수 있습니다."})]})}),l.jsx("section",{className:"cp-section","data-screen-label":"02 Recommend",children:l.jsxs("div",{className:"cp-container",children:[l.jsx(Rc,{num:"02",ko:"어떤 소재를 선택해야 할까요?",en:"Which to Choose",title:l.jsxs(l.Fragment,{children:["공간 용도와 목적에 따라,",l.jsx("br",{}),"최적의 ",l.jsx("em",{children:"줄눈 소재"}),"를 선택하세요."]}),lede:"아래 체크리스트로 본인 공간에 더 어울리는 소재를 확인할 수 있습니다."}),l.jsx("div",{className:"cp-reco-grid",children:k1.map(o=>l.jsxs("article",{className:`cp-reco cp-reco-${o.variant}`,children:[l.jsxs("div",{className:"cp-reco-head",children:[l.jsx("h3",{className:"cp-reco-title",children:o.title}),l.jsx("span",{className:"cp-reco-sub",children:o.sub})]}),l.jsx("ul",{className:"cp-reco-list",children:o.items.map(d=>l.jsx("li",{children:d.text},d.text))})]},o.variant))})]})}),l.jsx("section",{className:"cp-section cp-bg-paper","data-screen-label":"03 Related",children:l.jsxs("div",{className:"cp-container",children:[l.jsx(Rc,{num:"03",ko:"관련 정보 더 보기",en:"Related",title:l.jsxs(l.Fragment,{children:["줄눈에 대해 알아야 할, 다른 ",l.jsx("em",{children:"네 가지"}),"."]}),lede:"자재 · 제품 · 가격 · 시공 이유 — 네 가지 관점으로 줄눈을 더 깊이 살펴보세요."}),l.jsx("div",{className:"cp-related-grid",children:N1.map(o=>l.jsxs(Ee,{to:o.href,className:"cp-related-card",children:[l.jsx("span",{className:"cp-related-idx",children:o.idx}),l.jsx("h4",{className:"cp-related-title",children:o.title}),l.jsx("p",{className:"cp-related-desc",children:o.desc}),l.jsxs("span",{className:"cp-related-more",children:["more ",l.jsx("span",{className:"cp-related-arr",children:"→"})]})]},o.href))})]})}),l.jsx("section",{className:"cp-cta-band","data-screen-label":"CTA Band",children:l.jsxs("div",{className:"cp-container cp-cta-row",children:[l.jsxs("div",{className:"cp-cta-text",children:[l.jsxs("h3",{className:"cp-cta-title",children:["어떤 소재가 맞을지 ",l.jsx("em",{children:"아직 고민되시나요?"})]}),l.jsx("p",{className:"cp-cta-sub",children:"현장 상황과 요구 사항을 듣고 최적의 소재를 추천해 드립니다. 서울·경기·인천 줄눈시공 무료 견적 상담."})]}),l.jsxs("div",{className:"cp-cta-actions",children:[l.jsxs("button",{type:"button",className:"cp-btn cp-btn-primary",onClick:c,children:["무료 견적 받기 ",l.jsx("span",{className:"cp-btn-arr",children:"→"})]}),l.jsx("a",{href:"tel:010-8005-6674",onClick:()=>at.phoneClick("info_cta"),className:"cp-btn cp-btn-ghost",children:"전화 상담 010-8005-6674"})]})]})}),l.jsx(Yt,{}),l.jsx("style",{children:S1})]})}const S1=`
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
`,z1=[{k:"핵심 가치",v:"위생·미관·방수",small:"3대 효과"},{k:"권장 주기",v:"5년+",small:"시멘트 줄눈 기준"},{k:"시공 시간",v:"1일",small:"평형별 상이"},{k:"A/S",v:"2년",small:"무상"}],E1=[{n:"01",title:"위생 관리 — 곰팡이와 세균 차단",body:"타일 사이 줄눈은 습기가 모이기 쉬운 공간입니다. 시멘트 줄눈이 낡으면 균열과 기공이 생겨 곰팡이와 세균이 번식합니다. 정기적인 줄눈시공은 이런 위생 문제를 근본적으로 차단합니다.",k:"위생 지표",v:"곰팡이 0"},{n:"02",title:"미관 개선 — 공간의 첫인상을 바꾸다",body:"낡고 변색된 줄눈은 아무리 깨끗한 타일이어도 공간 전체를 낡아 보이게 만듭니다. 반대로 깔끔한 줄눈 하나만으로도 화장실·주방이 리모델링한 것처럼 새로워집니다.",k:"체감 효과",v:"리모델링 급"},{n:"03",title:"방수 보강 — 구조물 손상 예방",body:"줄눈이 갈라지면 물이 타일 아래로 스며들어 시멘트 바닥과 벽체에 수분이 침투합니다. 장기적으로 곰팡이, 타일 박리, 구조물 부식으로 이어져 훨씬 큰 수리 비용을 만듭니다.",k:"방수 효과",v:"구조 보호"},{n:"04",title:"비용 절감 — 조기 시공이 유리한 이유",body:"줄눈 문제를 방치하면 타일 전체 교체·방수 공사·구조 보수 등 수백만 원대 공사가 필요해집니다. 초기에 줄눈시공만 해도 이런 대규모 수리를 미연에 방지할 수 있습니다.",k:"예상 절감",v:"수백만 원"}],A1=[{k:"PB · 01",title:"곰팡이 대량 번식",body:"검은 곰팡이가 타일 줄눈을 따라 번지며 제거가 점점 어려워집니다."},{k:"PB · 02",title:"물이 벽·바닥 내부로 침투",body:"균열된 줄눈을 통해 물이 내부로 스며들어 구조 손상이 시작됩니다."},{k:"PB · 03",title:"타일 박리 · 탈락",body:"수분 침투로 접착력이 약해지며 타일이 들뜨거나 깨져 나갑니다."},{k:"PB · 04",title:"악취 발생",body:"유기물과 습기가 결합해 욕실 특유의 불쾌한 냄새가 심해집니다."}],T1=[{k:"TM · 01",title:"5년 이상 된 욕실·화장실",body:"시멘트 줄눈의 평균 수명을 넘은 경우 교체 시공을 권장합니다."},{k:"TM · 02",title:"변색·흑화가 눈에 띄는 경우",body:"줄눈이 검게 변했다면 이미 곰팡이가 깊이 침투한 상태일 수 있습니다."},{k:"TM · 03",title:"균열·탈락이 발생한 경우",body:"방치하면 물 침투로 인한 구조 손상으로 이어질 수 있습니다."},{k:"TM · 04",title:"집 매매 · 임대 전후",body:"줄눈 시공만으로도 체감 상태가 크게 달라져 매도·임대에 유리합니다."}],R1=[{idx:"No. 01 · Kerafoxy",href:"/info/kerafoxy",title:"케라폭시 줄눈이란?",desc:"에폭시 계열 고성능 줄눈 소재 케라폭시의 5가지 핵심 장점을 정리했습니다."},{idx:"No. 02 · Pricing",href:"/info/kerafoxy-price",title:"케라폭시 가격 안내",desc:"시공 비용에 영향을 주는 요인과 평형별 표준 가격을 한눈에."},{idx:"No. 03 · Product",href:"/info/kerafoxy-product",title:"케라폭시 계열 제품 소개",desc:"케라폭시·스타라이크·푸가리테 등 주요 제품 라인업과 색상 가이드."},{idx:"No. 04 · Compare",href:"/info/comparison",title:"폴리우레아 vs 케라폭시",desc:"두 소재의 차이점과, 어떤 공간에 어떤 소재가 적합한지."}];function Br({num:s,ko:c,en:o,title:d,lede:u,dark:m}){return l.jsxs("div",{className:`wg-sec-head ${m?"wg-sec-head-dark":""}`,children:[l.jsxs("div",{className:"wg-sec-bar",children:[l.jsx("span",{className:"wg-sec-n",children:s}),l.jsx("span",{className:"wg-sec-rule"}),l.jsxs("span",{className:"wg-sec-lbl",children:[l.jsx("span",{className:"wg-sec-ko",children:c}),l.jsx("span",{className:"wg-sec-en",children:o})]})]}),l.jsxs("div",{className:"wg-sec-body",children:[l.jsx("h2",{className:"wg-sec-title",children:d}),u&&l.jsx("p",{className:"wg-sec-lede",children:u})]})]})}function C1(){const s=Ft();Pt(),v.useEffect(()=>{const o="/info/why-grout",d=pl[o],u=`${ve}${o}`,m=rt("article-jsonld",cl({title:d.title,description:d.description,url:u,image:`${ve}/og_banner.jpg`,datePublished:"2026-03-01",dateModified:"2026-05-29"})),x=rt("breadcrumb-jsonld",dl([{name:"홈",url:ve},{name:"줄눈 정보",url:`${ve}/#info`},{name:"줄눈시공 하는 이유",url:u}]));return()=>{m(),x()}},[]),v.useEffect(()=>{window.scrollTo(0,0)},[]);const c=()=>{s("/#calc"),setTimeout(()=>{const o=document.querySelector("#calc");o&&o.scrollIntoView({behavior:"smooth"})},300)};return l.jsxs("div",{className:"wg-page",children:[l.jsx(Lt,{}),l.jsxs("header",{className:"wg-hero","data-screen-label":"Hero",children:[l.jsx("div",{className:"wg-hero-bg","aria-hidden":"true"}),l.jsxs("div",{className:"wg-container wg-hero-inner",children:[l.jsx("div",{className:"wg-eyebrow wg-eyebrow-light",children:"Grout Knowledge · 05"}),l.jsxs("h1",{className:"wg-hero-title",children:["줄눈시공",l.jsx("em",{children:","}),l.jsx("br",{}),"선택이 아닌 ",l.jsx("em",{children:"필수"}),"인 이유."]}),l.jsxs("p",{className:"wg-hero-lede",children:["위생 · 미관 · 방수 · 비용 절감.",l.jsx("br",{}),"줄눈 하나만 바꿔도 공간의 수명이 크게 달라집니다."]}),l.jsx("ul",{className:"wg-hero-meta",children:z1.map(o=>l.jsxs("li",{children:[l.jsx("span",{className:"wg-meta-k",children:o.k}),l.jsxs("span",{className:"wg-meta-v",children:[o.v," ",l.jsx("small",{children:o.small})]})]},o.k))})]})]}),l.jsx("nav",{className:"wg-crumb","aria-label":"현재 위치",children:l.jsxs("div",{className:"wg-container wg-crumb-inner",children:[l.jsx(Ee,{to:"/",className:"wg-crumb-item",children:"홈"}),l.jsx("span",{className:"wg-crumb-sep",children:"/"}),l.jsx("span",{className:"wg-crumb-item",children:"줄눈 정보"}),l.jsx("span",{className:"wg-crumb-sep",children:"/"}),l.jsx("span",{className:"wg-crumb-here",children:"줄눈시공 하는 이유"})]})}),l.jsx("section",{className:"wg-section","data-screen-label":"Intro",children:l.jsx("div",{className:"wg-container",children:l.jsxs("div",{className:"wg-intro-grid",children:[l.jsxs("h2",{className:"wg-intro-title",children:["줄눈시공은",l.jsx("br",{}),"선택이 아니라 ",l.jsx("em",{children:"필수"}),"입니다."]}),l.jsxs("div",{className:"wg-intro-body",children:[l.jsxs("p",{children:["많은 분들이 줄눈을 단순한 타일 사이 채움재로 생각하지만, 실제로는"," ",l.jsx("b",{children:"방수 · 위생 · 구조 보호"}),"를 담당하는 핵심 요소입니다. 줄눈이 낡으면 눈에 보이는 미관 문제를 넘어, 심각한 주거 환경 문제로 이어집니다."]}),l.jsxs("p",{children:["특히 매일 물을 사용하는 욕실·화장실·주방에서 ",l.jsx("b",{children:"줄눈시공"}),"은 가장 효과적인 유지보수 방법 중 하나입니다. 작은 투자로 공간 수명을 크게 연장할 수 있습니다."]})]})]})})}),l.jsx("section",{className:"wg-section wg-bg-paper","data-screen-label":"01 Reasons",children:l.jsxs("div",{className:"wg-container",children:[l.jsx(Br,{num:"01",ko:"줄눈시공을 해야 하는 이유",en:"4 Reasons",title:l.jsxs(l.Fragment,{children:["네 가지 이유로,",l.jsx("br",{}),l.jsx("em",{children:"지금"})," 시공해야 합니다."]}),lede:"위생 · 미관 · 방수 · 비용. 줄눈시공이 만들어내는 효과를 한 줄씩 짚어봅니다."}),l.jsx("ul",{className:"wg-reasons",children:E1.map(o=>l.jsxs("li",{className:"wg-r-row",children:[l.jsx("span",{className:"wg-r-n",children:o.n}),l.jsxs("div",{className:"wg-r-text",children:[l.jsx("h3",{className:"wg-r-title",children:o.title}),l.jsx("p",{className:"wg-r-body",children:o.body})]}),l.jsxs("div",{className:"wg-r-spec",children:[l.jsx("span",{className:"wg-r-k",children:o.k}),l.jsx("span",{className:"wg-r-v",children:o.v})]})]},o.n))})]})}),l.jsx("section",{className:"wg-section-dark","data-screen-label":"02 Problems",children:l.jsxs("div",{className:"wg-container",children:[l.jsx(Br,{dark:!0,num:"02",ko:"줄눈시공을 미루면 생기는 문제",en:"What Happens",title:l.jsxs(l.Fragment,{children:["작은 균열이,",l.jsx("br",{}),l.jsx("em",{children:"큰 손상"}),"으로 이어집니다."]}),lede:"줄눈 노후를 방치하면 단순한 미관 문제를 넘어 주거 구조 자체에 영향을 줍니다."}),l.jsx("div",{className:"wg-prob-grid",children:A1.map(o=>l.jsxs("article",{className:"wg-prob-card",children:[l.jsx("span",{className:"wg-prob-k",children:o.k}),l.jsx("h3",{className:"wg-prob-title",children:o.title}),l.jsx("p",{className:"wg-prob-body",children:o.body})]},o.k))})]})}),l.jsx("section",{className:"wg-section","data-screen-label":"03 Timing",children:l.jsxs("div",{className:"wg-container",children:[l.jsx(Br,{num:"03",ko:"줄눈시공이 필요한 시점",en:"When to Start",title:l.jsxs(l.Fragment,{children:["이런 상황이라면,",l.jsx("br",{}),l.jsx("em",{children:"지금"})," 점검해 보세요."]}),lede:"아래 중 하나라도 해당된다면 줄눈 상태를 한 번 확인해볼 시점입니다."}),l.jsx("div",{className:"wg-timing-grid",children:T1.map(o=>l.jsxs("article",{className:"wg-timing-card",children:[l.jsx("span",{className:"wg-timing-k",children:o.k}),l.jsx("h3",{className:"wg-timing-title",children:o.title}),l.jsx("p",{className:"wg-timing-body",children:o.body})]},o.k))})]})}),l.jsx("section",{className:"wg-section wg-bg-paper","data-screen-label":"04 Related",children:l.jsxs("div",{className:"wg-container",children:[l.jsx(Br,{num:"04",ko:"관련 정보 더 보기",en:"Related",title:l.jsxs(l.Fragment,{children:["줄눈에 대해 알아야 할, 다른 ",l.jsx("em",{children:"네 가지"}),"."]}),lede:"자재 · 가격 · 제품 · 비교 — 네 가지 관점으로 줄눈을 더 깊이 살펴보세요."}),l.jsx("div",{className:"wg-related-grid",children:R1.map(o=>l.jsxs(Ee,{to:o.href,className:"wg-related-card",children:[l.jsx("span",{className:"wg-related-idx",children:o.idx}),l.jsx("h4",{className:"wg-related-title",children:o.title}),l.jsx("p",{className:"wg-related-desc",children:o.desc}),l.jsxs("span",{className:"wg-related-more",children:["more ",l.jsx("span",{className:"wg-related-arr",children:"→"})]})]},o.href))})]})}),l.jsx("section",{className:"wg-cta-band","data-screen-label":"CTA Band",children:l.jsxs("div",{className:"wg-container wg-cta-row",children:[l.jsxs("div",{className:"wg-cta-text",children:[l.jsxs("h3",{className:"wg-cta-title",children:["지금 우리 집 줄눈이 ",l.jsx("em",{children:"괜찮은지"})," 점검받아 보세요."]}),l.jsx("p",{className:"wg-cta-sub",children:"사진 한 장만 보내주시면 현재 상태와 시공 필요 여부를 안내해 드립니다. 서울·경기·인천 줄눈시공 무료 견적 상담."})]}),l.jsxs("div",{className:"wg-cta-actions",children:[l.jsxs("button",{type:"button",className:"wg-btn wg-btn-primary",onClick:c,children:["무료 견적 받기 ",l.jsx("span",{className:"wg-btn-arr",children:"→"})]}),l.jsx("a",{href:"tel:010-8005-6674",onClick:()=>at.phoneClick("info_cta"),className:"wg-btn wg-btn-ghost",children:"전화 상담 010-8005-6674"})]})]})}),l.jsx(Yt,{}),l.jsx("style",{children:M1})]})}const M1=`
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
`,O1=[{k:"소재 분류",v:"폴리우레아 수지"},{k:"수명",v:"5년+"},{k:"시공 시간",v:"약 4~6시간"},{k:"A/S",v:"2년 무상"}],_1=[{idx:"01",title:"뛰어난 가성비",body:"케라폭시 대비 시공비 약 60~70% 수준으로 합리적입니다.",k:"시공비",v:"5만원~"},{idx:"02",title:"빠른 시공 시간",body:"경화 속도가 빨라 평수에 따라 반나절~1일 내 완료됩니다.",k:"경화",v:"수 시간"},{idx:"03",title:"강한 탄성",body:"약간의 변형·진동에도 균열 없이 견딥니다.",k:"연신율",v:"높음"},{idx:"04",title:"내후성",body:"자외선·온도 변화에 강해 베란다·외부 공간에 적합합니다.",k:"용도",v:"실외 OK"},{idx:"05",title:"경제적 보수",body:"5년 주기로 재시공해도 누적 비용이 부담스럽지 않습니다.",k:"5년 후",v:"재시공 가능"},{idx:"+",title:"단, 화장실엔 케라폭시가 답입니다.",body:"폴리우레아는 강한 내수성·항균이 필요한 화장실엔 적합하지 않습니다. 화장실은 케라폭시 시공만 진행합니다.",k:"화장실",v:"케라폭시 전용",dark:!0}],D1=[{name:"시멘트 줄눈",tag:"Standard",items:["저렴","1~2년 수명","곰팡이 취약","주기 재시공 필요"]},{name:"폴리우레아",tag:"Detailline 가성비 추천",hero:!0,items:["케라폭시 대비 60~70% 가격","5년+ 수명","베란다·외부화장실 적합","빠른 시공"]},{name:"케라폭시",tag:"Premium",items:["10년+ 수명","강한 내수성·항균","20+ 색상","화장실·욕실 권장"]}],B1=[{code:"SP · 01",ko:"베란다 · 발코니",en:"Veranda / Balcony",desc:"자외선·온도 변화에 강한 폴리우레아의 강점이 가장 잘 나타나는 공간입니다."},{code:"SP · 02",ko:"외부 화장실",en:"Outdoor Bath",desc:"실외 노출 화장실의 줄눈 보수에 적합합니다."},{code:"SP · 03",ko:"현관 바닥",en:"Entrance Floor",desc:"구축 아파트 현관 바닥의 가성비 보수 옵션입니다."},{code:"SP · 04",ko:"실내 화장실 (비추천)",en:"Indoor Bath (NOT recommended)",desc:"실내 화장실은 위생·항균이 중요해 케라폭시 시공만 진행합니다."}],U1=[{k:"시공 시간",v:"약 4~6시간"},{k:"경화",v:"수 시간 내"},{k:"사용 가능",v:"24시간 후 권장"},{k:"A/S",v:"2년 (무상)"}],H1=[{idx:"No. 01 · Compare",href:"/info/comparison",title:"폴리우레아 vs 케라폭시",desc:"두 자재의 차이와 공간별 추천 정리."},{idx:"No. 02 · Pricing",href:"/info/kerafoxy-price",title:"가격 안내",desc:"폴리우레아·케라폭시 평형별 표준 시공비."},{idx:"No. 03 · Kerafoxy",href:"/info/kerafoxy",title:"케라폭시 줄눈이란?",desc:"실내 화장실에 권장되는 자재."},{idx:"No. 04 · Why",href:"/info/why-grout",title:"줄눈시공 하는 이유",desc:"위생·미관·내구성을 위한 필수 시공."}];function Ur({num:s,ko:c,en:o,title:d,lede:u,dark:m}){return l.jsxs("div",{className:`pu-sec-head ${m?"pu-sec-head-dark":""}`,children:[l.jsxs("div",{className:"pu-sec-bar",children:[l.jsx("span",{className:"pu-sec-n",children:s}),l.jsx("span",{className:"pu-sec-rule"}),l.jsxs("span",{className:"pu-sec-lbl",children:[l.jsx("span",{className:"pu-sec-ko",children:c}),l.jsx("span",{className:"pu-sec-en",children:o})]})]}),l.jsxs("div",{className:"pu-sec-body",children:[l.jsx("h2",{className:"pu-sec-title",children:d}),l.jsx("p",{className:"pu-sec-lede",children:u})]})]})}function L1(){const s=Ft();Pt(),v.useEffect(()=>{const o="/info/polyurea",d=pl[o],u=`${ve}${o}`,m=rt("article-jsonld",cl({title:d.title,description:d.description,url:u,image:`${ve}/og_banner.jpg`,datePublished:"2026-05-29",dateModified:"2026-05-29"})),x=rt("breadcrumb-jsonld",dl([{name:"홈",url:ve},{name:"줄눈 정보",url:`${ve}/#info`},{name:"폴리우레아 줄눈이란?",url:u}]));return()=>{m(),x()}},[]),v.useEffect(()=>{window.scrollTo(0,0)},[]);const c=()=>{s("/#calc"),setTimeout(()=>{const o=document.querySelector("#calc");o&&o.scrollIntoView({behavior:"smooth"})},300)};return l.jsxs("div",{className:"pu-page",children:[l.jsx(Lt,{}),l.jsxs("header",{className:"pu-hero","data-screen-label":"01 Hero",children:[l.jsx("div",{className:"pu-hero-bg",style:{"--hero-img-d":`url(${xh})`,"--hero-img-m":`url(${gh})`},"aria-hidden":"true"}),l.jsxs("div",{className:"pu-container pu-hero-inner",children:[l.jsx("div",{className:"pu-eyebrow pu-eyebrow-light",children:"Grout Knowledge · 03"}),l.jsxs("h1",{className:"pu-hero-title",children:["폴리우레아 줄눈,",l.jsx("br",{}),l.jsx("em",{children:"가성비"}),"의 정답."]}),l.jsxs("p",{className:"pu-hero-lede",children:["베란다·외부화장실·현관 — 자외선과 온도 변화에 강한 폴리우레아 줄눈.",l.jsx("br",{}),"케라폭시 대비 60~70% 가격으로, 5년+ 수명을 확보합니다."]}),l.jsx("ul",{className:"pu-hero-meta",children:O1.map(o=>l.jsxs("li",{children:[l.jsx("span",{className:"pu-meta-k",children:o.k}),l.jsx("span",{className:"pu-meta-v",children:o.v})]},o.k))})]})]}),l.jsx("nav",{className:"pu-crumb","aria-label":"현재 위치",children:l.jsxs("div",{className:"pu-container pu-crumb-inner",children:[l.jsx(Ee,{to:"/",className:"pu-crumb-item",children:"홈"}),l.jsx("span",{className:"pu-crumb-sep",children:"/"}),l.jsx("span",{className:"pu-crumb-item",children:"줄눈 정보"}),l.jsx("span",{className:"pu-crumb-sep",children:"/"}),l.jsx("span",{className:"pu-crumb-here",children:"폴리우레아 줄눈이란?"})]})}),l.jsx("section",{className:"pu-section","data-screen-label":"02 Introduction",children:l.jsx("div",{className:"pu-container",children:l.jsxs("div",{className:"pu-intro",children:[l.jsxs("div",{className:"pu-intro-left",children:[l.jsx("div",{className:"pu-eyebrow",children:"Introduction · 들어가며"}),l.jsxs("h2",{className:"pu-intro-title",children:["폴리우레아 줄눈,",l.jsx("br",{}),"왜 ",l.jsx("em",{children:"가성비 추천"}),"일까요?"]}),l.jsxs("p",{className:"pu-intro-body",children:[l.jsx("em",{className:"pu-hl",children:"폴리우레아(Polyurea)는 빠른 경화 속도와 강한 탄성을 갖춘 고분자 줄눈 소재"}),"입니다. 케라폭시만큼의 화학적 항균성·내수성은 아니지만, 베란다·외부 공간에서는 자외선·온도 변화에 대한 내후성이 더 빛을 발합니다."]}),l.jsx("p",{className:"pu-intro-body",children:"무엇보다도 케라폭시 대비 시공비가 60~70% 수준이라, 보수 주기·예산 관점에서 합리적인 선택지입니다."}),l.jsxs("p",{className:"pu-intro-body",children:["⚠️ 실내 화장실·욕실은 위생과 항균이 중요해 폴리우레아가 적합하지 않습니다. 해당 공간은 ",l.jsx(Ee,{to:"/info/kerafoxy",className:"pu-inline-link",children:"케라폭시 시공"}),"만 진행합니다."]})]}),l.jsx("div",{className:"pu-intro-right",children:l.jsx("div",{className:"pu-intro-photo",children:l.jsx("img",{src:bh,alt:"폴리우레아 줄눈 시공 디테일",loading:"lazy"})})})]})})}),l.jsx("section",{className:"pu-section pu-bg-paper","data-screen-label":"03 Benefits",children:l.jsxs("div",{className:"pu-container",children:[l.jsx(Ur,{num:"02",ko:"5가지 핵심 장점",en:"Benefits",title:l.jsxs(l.Fragment,{children:["베란다·외부 공간에서 빛을 발하는 ",l.jsx("em",{children:"가성비 자재"}),"."]}),lede:"가격·시간·내후성 — 폴리우레아가 어떤 강점으로 베란다와 외부 공간에 적합한지 정리했습니다."}),l.jsx("div",{className:"pu-benefits-grid",children:_1.map(o=>l.jsxs("article",{className:`pu-benefit ${o.dark?"pu-benefit-dark":""}`,children:[l.jsxs("div",{className:"pu-benefit-head",children:[l.jsxs("span",{className:"pu-benefit-lbl",children:["Benefit / ",o.idx]}),l.jsx("span",{className:"pu-benefit-idx",children:o.idx})]}),l.jsx("h3",{className:"pu-benefit-title",children:o.title.split(`
`).map((d,u)=>l.jsx("span",{className:"pu-benefit-title-line",children:d},u))}),l.jsx("p",{className:"pu-benefit-body",children:o.body}),l.jsxs("div",{className:"pu-benefit-spec",children:[l.jsx("span",{className:"pu-spec-k",children:o.k}),l.jsx("span",{className:"pu-spec-v",children:o.v})]})]},o.idx))}),l.jsx("div",{className:"pu-compare",children:D1.map(o=>l.jsxs("div",{className:`pu-compare-col ${o.hero?"pu-is-hero":""}`,children:[l.jsxs("div",{className:"pu-compare-head",children:[l.jsx("h3",{className:"pu-compare-name",children:o.name}),l.jsx("span",{className:"pu-compare-tag",children:o.tag})]}),l.jsx("ul",{className:"pu-compare-list",children:o.items.map(d=>l.jsx("li",{children:d},d))})]},o.name))})]})}),l.jsx("section",{className:"pu-section","data-screen-label":"04 Spaces",children:l.jsxs("div",{className:"pu-container",children:[l.jsx(Ur,{num:"03",ko:"적합한 공간",en:"Spaces",title:l.jsxs(l.Fragment,{children:["폴리우레아는 ",l.jsx("em",{children:"외부 공간"}),"에 강합니다."]}),lede:"자외선과 온도 변화가 큰 베란다·외부화장실·현관에 폴리우레아가 적합합니다. 실내 화장실은 케라폭시 전용."}),l.jsx("ul",{className:"pu-spaces",children:B1.map(o=>l.jsxs("li",{className:"pu-space-row",children:[l.jsx("span",{className:"pu-space-code",children:o.code}),l.jsxs("span",{className:"pu-space-lbl",children:[l.jsx("span",{className:"pu-space-ko",children:o.ko}),l.jsx("span",{className:"pu-space-en",children:o.en})]}),l.jsx("span",{className:"pu-space-desc",children:o.desc}),l.jsxs("span",{className:"pu-space-more",children:["자세히 ",l.jsx("span",{className:"pu-space-arr",children:"→"})]})]},o.code))})]})}),l.jsx("section",{className:"pu-section-dark","data-screen-label":"05 Before · After",children:l.jsxs("div",{className:"pu-container",children:[l.jsx(Ur,{dark:!0,num:"04",ko:"시공 전 · 후 비교",en:"Before · After",title:l.jsxs(l.Fragment,{children:["같은 베란다, ",l.jsx("em",{children:"다른 마감"}),"."]}),lede:"실제 시공 현장에서 발견되는 변화를 정리했습니다. 노후 줄눈을 가성비로 되살리는 한 방."}),l.jsxs("div",{className:"pu-ba-grid",children:[l.jsxs("figure",{className:"pu-ba-item",children:[l.jsxs("div",{className:"pu-ba-photo",children:[l.jsx("img",{src:mh,alt:"시공 전 — 노후 베란다 줄눈",loading:"lazy"}),l.jsx("span",{className:"pu-ba-pill pu-ba-pill-light",children:"Before"})]}),l.jsxs("figcaption",{className:"pu-ba-cap",children:[l.jsx("h4",{className:"pu-ba-cap-title",children:"자외선·균열로 손상된 줄눈"}),l.jsx("p",{className:"pu-ba-cap-body",children:"베란다의 시멘트 줄눈은 자외선과 온도 변화로 균열·박락이 빠르게 진행됩니다."})]})]}),l.jsxs("figure",{className:"pu-ba-item",children:[l.jsxs("div",{className:"pu-ba-photo",children:[l.jsx("img",{src:hh,alt:"시공 후 — 폴리우레아 줄눈 마감",loading:"lazy"}),l.jsx("span",{className:"pu-ba-pill pu-ba-pill-accent",children:"After"})]}),l.jsxs("figcaption",{className:"pu-ba-cap",children:[l.jsx("h4",{className:"pu-ba-cap-title",children:"균일한 마감, 5년+ 수명"}),l.jsx("p",{className:"pu-ba-cap-body",children:"탄성 있는 폴리우레아 마감으로 변형·균열 없이 깨끗한 상태가 유지됩니다."})]})]})]}),l.jsx("ul",{className:"pu-ba-bottom",children:U1.map(o=>l.jsxs("li",{children:[l.jsx("span",{className:"pu-ba-bot-k",children:o.k}),l.jsx("span",{className:"pu-ba-bot-v",children:o.v})]},o.k))})]})}),l.jsx("section",{className:"pu-section pu-bg-paper","data-screen-label":"06 Related",children:l.jsxs("div",{className:"pu-container",children:[l.jsx(Ur,{num:"05",ko:"관련 정보 더 보기",en:"Related",title:l.jsxs(l.Fragment,{children:["폴리우레아를 더 깊이 알아볼 ",l.jsx("em",{children:"네 가지"}),"."]}),lede:"비교 · 가격 · 케라폭시 · 시공 — 네 가지 관점으로 줄눈을 살펴보세요."}),l.jsx("div",{className:"pu-related-grid",children:H1.map(o=>l.jsxs(Ee,{to:o.href,className:"pu-related-card",children:[l.jsx("span",{className:"pu-related-idx",children:o.idx}),l.jsx("h4",{className:"pu-related-title",children:o.title}),l.jsx("p",{className:"pu-related-desc",children:o.desc}),l.jsxs("span",{className:"pu-related-more",children:["more ",l.jsx("span",{className:"pu-related-arr",children:"→"})]})]},o.href))})]})}),l.jsx("section",{className:"pu-cta-band","data-screen-label":"CTA Band",children:l.jsxs("div",{className:"pu-container pu-cta-row",children:[l.jsxs("div",{className:"pu-cta-text",children:[l.jsxs("h3",{className:"pu-cta-title",children:["베란다·외부 공간 줄눈, ",l.jsx("em",{children:"무료 견적"}),"으로 시작하세요."]}),l.jsx("p",{className:"pu-cta-sub",children:"평형 · 공간을 알려주시면 24시간 내에 회신드립니다. 서울·경기·인천 베란다·외부화장실·현관 폴리우레아 줄눈 무료 견적 상담."})]}),l.jsxs("div",{className:"pu-cta-actions",children:[l.jsxs("button",{type:"button",className:"pu-btn pu-btn-primary",onClick:c,children:["무료 견적 받기 ",l.jsx("span",{className:"pu-btn-arr",children:"→"})]}),l.jsx("a",{href:"tel:010-8005-6674",onClick:()=>at.phoneClick("info_cta"),className:"pu-btn pu-btn-ghost",children:"전화 상담 010-8005-6674"})]})]})}),l.jsx(Yt,{}),l.jsx("style",{children:Y1})]})}const Y1=`
.pu-page {
  background: var(--bg);
  color: var(--ink);
  font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
}
.pu-page ::selection { background: var(--accent); color: #fff; }

.pu-container {
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 32px;
}
@media (max-width: 720px) {
  .pu-container { padding: 0 20px; }
}

.pu-section {
  padding: 120px 0;
  border-top: 1px solid var(--line);
}
.pu-section-dark {
  padding: 120px 0;
  background: var(--dark);
  color: var(--on-dark);
}
.pu-bg-paper { background: var(--paper); }
@media (max-width: 720px) {
  .pu-section, .pu-section-dark { padding: 72px 0; }
}

.pu-eyebrow {
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
}
.pu-eyebrow-light { color: #d9b790; }

.pu-page em {
  font-style: normal;
  color: var(--accent);
}
.pu-section-dark em, .pu-hero em { color: #e3c5a3; }

.pu-inline-link {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 3px;
}
.pu-inline-link:hover { color: var(--accent-deep); }

/* ===== Hero ===== */
.pu-hero {
  position: relative;
  padding: 168px 0 84px;
  overflow: hidden;
  isolation: isolate;
}
@media (max-width: 720px) {
  .pu-hero { padding: 120px 0 64px; }
}
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
.pu-hero-inner { position: relative; z-index: 1; }
.pu-hero-title {
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
.pu-hero-lede {
  font-size: 15.5px;
  line-height: 1.75;
  color: rgba(255,255,255,.78);
  max-width: 56ch;
  margin: 0;
}
.pu-hero-meta {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  list-style: none;
  padding: 0;
  margin: 48px 0 0;
  border-top: 1px solid rgba(255,255,255,.16);
}
.pu-hero-meta li {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 22px 22px 22px 0;
  border-right: 1px solid rgba(255,255,255,.16);
}
.pu-hero-meta li:last-child { border-right: none; }
.pu-hero-meta li:not(:first-child) { padding-left: 22px; }
.pu-meta-k {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,.55);
}
.pu-meta-v {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: 17px;
  color: #fff;
  letter-spacing: -0.005em;
}
@media (max-width: 720px) {
  .pu-hero-meta { grid-template-columns: repeat(2, 1fr); }
  .pu-hero-meta li:nth-child(2) { border-right: none; }
  .pu-hero-meta li:nth-child(3) { padding-left: 0; }
  .pu-hero-meta li:nth-child(3), .pu-hero-meta li:nth-child(4) {
    border-top: 1px solid rgba(255,255,255,.16);
  }
}

/* ===== Breadcrumb ===== */
.pu-crumb {
  background: var(--paper);
  border-bottom: 1px solid var(--line);
}
.pu-crumb-inner {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 32px;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: var(--muted-2);
}
@media (max-width: 720px) {
  .pu-crumb-inner { padding: 14px 20px; }
}
.pu-crumb-item {
  color: var(--muted-2);
  text-decoration: none;
  transition: color .2s ease;
}
.pu-crumb-item:hover { color: var(--accent); }
.pu-crumb-sep { opacity: .4; }
.pu-crumb-here { color: var(--ink); }

/* ===== Section Head ===== */
.pu-sec-head { margin-bottom: 64px; }
.pu-sec-bar {
  display: flex;
  align-items: center;
  gap: 18px;
  padding-bottom: 22px;
  margin-bottom: 36px;
  border-bottom: 1px solid var(--line);
}
.pu-sec-head-dark .pu-sec-bar { border-bottom-color: rgba(255,255,255,.14); }
.pu-sec-n {
  font-family: 'Noto Serif KR', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 1;
  color: var(--accent);
  font-variant-numeric: lining-nums;
}
.pu-sec-head-dark .pu-sec-n { color: #d9b790; }
.pu-sec-rule {
  flex: 0 0 56px;
  height: 1px;
  background: var(--accent);
  opacity: .6;
}
.pu-sec-head-dark .pu-sec-rule { background: #d9b790; opacity: .7; }
.pu-sec-lbl {
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
.pu-sec-ko { color: var(--ink-2); }
.pu-sec-head-dark .pu-sec-ko { color: #fff; }
.pu-sec-en { color: var(--muted-2); margin-left: 10px; }
.pu-sec-head-dark .pu-sec-en { color: rgba(255,255,255,.5); }
.pu-sec-body {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 64px;
  align-items: end;
}
@media (max-width: 820px) {
  .pu-sec-body { grid-template-columns: 1fr; gap: 24px; align-items: start; }
}
.pu-sec-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: clamp(30px, 3.6vw, 48px);
  line-height: 1.3;
  letter-spacing: -0.01em;
  margin: 0;
  word-break: keep-all;
}
.pu-sec-head-dark .pu-sec-title { color: var(--on-dark); }
.pu-sec-lede {
  font-size: 16px;
  line-height: 1.75;
  color: var(--muted);
  margin: 0;
}
.pu-sec-head-dark .pu-sec-lede { color: var(--dark-muted); }

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

/* ===== Related ===== */
.pu-related-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
@media (max-width: 900px) {
  .pu-related-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .pu-related-grid { grid-template-columns: 1fr; }
}
.pu-related-card {
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
.pu-related-card:hover {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
}
.pu-related-idx {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.pu-related-card:hover .pu-related-idx { color: #d9b790; }
.pu-related-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 500;
  font-size: 21px;
  line-height: 1.35;
  color: var(--ink);
  margin: 0;
  letter-spacing: -0.005em;
}
.pu-related-card:hover .pu-related-title { color: #fff; }
.pu-related-desc {
  font-size: 13px;
  line-height: 1.7;
  color: var(--muted);
  margin: 0;
}
.pu-related-card:hover .pu-related-desc { color: rgba(255,255,255,.75); }
.pu-related-more {
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
.pu-related-card:hover .pu-related-more { color: #d9b790; }
.pu-related-arr { transition: transform .3s ease; }
.pu-related-card:hover .pu-related-arr { transform: translateX(4px); }

/* ===== CTA Band ===== */
.pu-cta-band {
  background: var(--bg-2);
  border-top: 1px solid var(--line);
  padding: 72px 0;
}
@media (max-width: 720px) {
  .pu-cta-band { padding: 56px 0; }
}
.pu-cta-row {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 32px;
  align-items: center;
}
@media (max-width: 820px) {
  .pu-cta-row { grid-template-columns: 1fr; gap: 24px; }
}
.pu-cta-text { display: flex; flex-direction: column; gap: 8px; }
.pu-cta-title {
  font-family: 'Noto Serif KR', serif;
  font-weight: 400;
  font-size: clamp(22px, 2.5vw, 30px);
  line-height: 1.4;
  letter-spacing: -0.005em;
  color: var(--ink);
  margin: 0;
  word-break: keep-all;
}
.pu-cta-sub {
  font-size: 14px;
  color: var(--muted);
  margin: 0;
}
.pu-cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-end;
}
@media (max-width: 820px) {
  .pu-cta-actions {
    flex-wrap: nowrap;
    justify-content: flex-start;
    gap: 8px;
  }
  .pu-cta-actions .pu-btn {
    flex: 1 1 0;
    min-width: 0;
    padding: 14px 12px;
    font-size: 13px;
    white-space: nowrap;
    justify-content: center;
  }
}

/* ===== Buttons ===== */
.pu-btn {
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
.pu-btn-arr { transition: transform .3s ease; }
.pu-btn:hover .pu-btn-arr { transform: translateX(4px); }
.pu-btn-primary {
  background: var(--ink);
  color: var(--paper);
}
.pu-btn-primary:hover { background: var(--accent-deep); }
.pu-btn-ghost {
  background: transparent;
  border: 1px solid var(--line-strong);
  color: var(--ink);
}
.pu-btn-ghost:hover {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
}
`;function Yc({corner:s,label:c,dark:o=!1,className:d=""}){const u=o?"bg-[#1f1a14] border-[var(--dark-line)]":"bg-[var(--bg-2)] border-[var(--line)]",m=o?"text-[var(--dark-muted)]":"text-[var(--muted-2)]",x=o?"repeating-linear-gradient(135deg,transparent 0 14px,rgba(255,255,255,.022) 14px 28px)":"repeating-linear-gradient(135deg,transparent 0 14px,rgba(28,25,22,.022) 14px 28px)",g=o?"radial-gradient(120% 80% at 50% 100%, rgba(0,0,0,.5), transparent 60%)":"radial-gradient(120% 80% at 50% 100%, rgba(28,25,22,.07), transparent 60%)";return l.jsxs("div",{className:`absolute inset-0 overflow-hidden border ${u} ${d}`,children:[l.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:x}}),l.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:g}}),s&&l.jsx("span",{className:`absolute right-3.5 top-3 text-[9.5px] tracking-[0.12em] uppercase opacity-75 ${m}`,children:s}),c&&l.jsxs("span",{className:`absolute left-4 bottom-3.5 z-[1] flex items-center gap-2.5 text-[10.5px] tracking-[0.14em] uppercase ${m}`,children:[l.jsx("span",{className:"inline-block w-1.5 h-1.5 bg-[var(--accent)]"}),l.jsx("span",{children:c})]})]})}function q1({item:s}){const{main:c,before:o}=av(s),[d,u]=v.useState(!1),[m,x]=v.useState(!1),[g,b]=v.useState(!1),h=v.useRef(!1);v.useEffect(()=>{h.current=window.matchMedia("(hover: none)").matches},[]);const w=()=>{h.current||u(!0)},N=()=>{h.current||u(!1)},U=K=>{h.current&&o&&!d&&(K.preventDefault(),u(!0))};return l.jsxs(Ee,{to:`/portfolio/${s.slug}`,onMouseEnter:w,onMouseLeave:N,onClick:U,className:"block group transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_36px_-20px_rgba(28,25,22,0.22)]",children:[l.jsxs("div",{className:"relative aspect-[4/3] overflow-hidden border border-[var(--line)] bg-[var(--bg-2)]",children:[c&&!m?l.jsx("img",{src:c.src,alt:c.alt,onError:()=>x(!0),className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${d&&o&&!g?"opacity-0":"opacity-100"}`,loading:"lazy"}):l.jsx("div",{className:`absolute inset-0 transition-opacity duration-300 ${d&&o?"opacity-0":"opacity-100"}`,children:l.jsx(Yc,{corner:"AFTER · 1200×900",label:c?.alt??"시공 후"})}),o&&(g?l.jsx("div",{className:`absolute inset-0 transition-opacity duration-300 ${d?"opacity-100":"opacity-0"}`,children:l.jsx(Yc,{dark:!0,corner:"BEFORE · 1200×900",label:o.alt})}):l.jsx("img",{src:o.src,alt:o.alt,onError:()=>b(!0),className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${d?"opacity-100":"opacity-0"}`,loading:"lazy"})),l.jsx("span",{className:`absolute top-3 left-3 text-[10.5px] font-medium tracking-[0.14em] uppercase px-2.5 py-1 rounded-[2px] transition-colors ${d?"bg-black/40 text-white":"bg-white/40 text-[var(--ink)]"}`,children:d?"Before":"After"})]}),l.jsxs("div",{className:"bg-[var(--paper)] border border-t-0 border-[var(--line)] px-5 py-3",children:[l.jsx("span",{className:"text-[11px] font-medium tracking-[0.14em] text-[var(--muted-2)] uppercase",children:lv(s)}),l.jsxs("h3",{className:"text-[17px] text-[var(--ink)] leading-[1.35] tracking-[-0.005em] group-hover:text-[var(--accent)] transition-colors break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:[s.apartment," ",s.area,"평"]}),l.jsxs("p",{className:"text-[13px] text-[var(--muted)] mt-3",children:[s.space," · ",s.material,s.materialDetail?` ${s.materialDetail}`:""]})]})]})}const Cc=9;function G1(){Pt(),v.useEffect(()=>{window.scrollTo(0,0)},[]);const[s,c]=v.useState([]),[o,d]=v.useState([]),[u,m]=v.useState([]),[x,g]=v.useState(Cc),b=v.useMemo(()=>tv({spaces:s,regions:o,materials:u}),[s,o,u]);v.useEffect(()=>{g(Cc)},[s,o,u]);const h=b.slice(0,x),w=x<b.length,N=b.length,U=s.length+o.length+u.length>0,K=()=>{c([]),d([]),m([])};return l.jsxs("div",{className:"pf-page min-h-screen bg-[var(--bg)]",children:[l.jsx(Lt,{}),l.jsxs("header",{className:"pf-hero","data-screen-label":"Hero",children:[l.jsx("div",{className:"pf-hero-bg","aria-hidden":"true"}),l.jsxs("div",{className:"pf-container pf-hero-inner",children:[l.jsx("div",{className:"pf-eyebrow pf-eyebrow-light",children:"Portfolio"}),l.jsxs("h1",{className:"pf-hero-title",children:["줄눈 한 줄로",l.jsx("br",{}),l.jsx("em",{children:"달라진 공간들"}),"."]}),l.jsxs("p",{className:"pf-hero-lede",children:["디테일라인이 시공한 시공 사례 모음입니다.",l.jsx("br",{}),"욕실·베란다·현관·주방등 케라폭시·폴리우레아 시공 결과를 단지·평수·자재별로 직접 확인하세요."]})]})]}),l.jsx("nav",{className:"pf-crumb","aria-label":"현재 위치",children:l.jsxs("div",{className:"pf-container pf-crumb-inner",children:[l.jsx(Ee,{to:"/",className:"pf-crumb-item",children:"홈"}),l.jsx("span",{className:"pf-crumb-sep",children:"/"}),l.jsx("span",{className:"pf-crumb-here",children:"시공사례"})]})}),l.jsxs("main",{className:"pt-6 md:pt-6 pb-24",children:[l.jsx("div",{className:"px-6 md:px-12 lg:px-20 max-w-[1360px] mx-auto mb-8 pb-6 border-b border-[var(--line)]",children:l.jsxs("div",{className:"flex flex-wrap gap-2 items-center",children:[l.jsx(Mc,{label:"공간",options:dh,selected:s,onChange:c}),l.jsx(Mc,{label:"지역",options:Fb,selected:o,onChange:d}),l.jsx(Mc,{label:"자재",options:Pb,selected:u,onChange:m}),U&&l.jsx("button",{onClick:K,className:"ml-1.5 text-xs text-[var(--muted)] hover:text-[var(--ink)] underline underline-offset-2 cursor-pointer",children:"필터 초기화"}),l.jsxs("span",{className:"ml-auto text-[12.5px] tracking-[0.06em] text-[var(--muted-2)] font-medium",children:["총 ",l.jsx("span",{className:"text-[var(--ink)]",children:N}),"건"]})]})}),l.jsx("div",{className:"px-6 md:px-12 lg:px-20 max-w-[1360px] mx-auto",children:h.length===0?l.jsx(V1,{onReset:K,hasFilter:U}):l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",children:h.map(S=>l.jsx(q1,{item:S},S.slug))}),w&&l.jsx("div",{className:"text-center mt-14",children:l.jsxs("button",{onClick:()=>g(S=>S+Cc),className:"inline-flex items-center gap-2.5 px-7 py-3.5 border border-[var(--line-strong)] rounded-[2px] text-sm font-medium text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] hover:border-[var(--ink)] transition-colors cursor-pointer",children:["더보기",l.jsxs("span",{className:"text-[var(--muted-2)]",children:["(",b.length-x,"건 남음)"]})]})})]})})]}),l.jsx(Fc,{}),l.jsx(Yt,{}),l.jsx("style",{children:K1})]})}function Mc({label:s,options:c,selected:o,onChange:d}){const[u,m]=v.useState(!1),x=v.useRef(null);v.useEffect(()=>{const h=w=>{x.current&&!x.current.contains(w.target)&&m(!1)};return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[]);const g=h=>{d(o.includes(h)?o.filter(w=>w!==h):[...o,h])},b=o.length>0;return l.jsxs("div",{ref:x,className:"relative",children:[l.jsxs("button",{onClick:()=>m(!u),className:`h-9 px-4 rounded-full text-[13px] border transition-colors cursor-pointer inline-flex items-center gap-1.5 ${b?"bg-[var(--ink)] text-[var(--paper)] border-[var(--ink)]":"bg-[var(--paper)] border-[var(--line)] text-[var(--ink)] hover:border-[var(--line-strong)]"}`,children:[s,b&&l.jsxs("span",{className:"text-[11px] text-[var(--accent-soft)]",children:["(",o.length,")"]}),l.jsx("i",{className:`ri-arrow-down-s-line text-base leading-none transition-transform ${u?"rotate-180":""}`})]}),u&&l.jsx("div",{className:"absolute top-full left-0 mt-2 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] shadow-[0_18px_36px_-20px_rgba(28,25,22,0.22)] z-20 min-w-[180px] py-2",children:c.map(h=>l.jsxs("button",{onClick:()=>g(h),className:"w-full px-4 py-2.5 text-left text-[13.5px] flex items-center gap-2.5 hover:bg-[var(--bg-2)] cursor-pointer",children:[l.jsx("input",{type:"checkbox",checked:o.includes(h),readOnly:!0,className:"accent-[var(--accent)] cursor-pointer"}),l.jsx("span",{className:o.includes(h)?"text-[var(--ink)] font-medium":"text-[var(--ink-2)]",children:h})]},h))})]})}function V1({onReset:s,hasFilter:c}){return l.jsxs("div",{className:"text-center py-24 border border-dashed border-[var(--line)] bg-[var(--paper)]",children:[l.jsx("i",{className:"ri-search-line text-5xl text-[var(--muted-2)] opacity-60"}),l.jsx("p",{className:"mt-5 text-[20px] text-[var(--ink)]",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:c?"해당 조건의 사례가 없습니다":"시공 사례가 곧 공개됩니다"}),l.jsx("p",{className:"mt-2 text-sm text-[var(--muted)]",children:c?"다른 조건으로 다시 시도해보세요":"실제 현장 사례를 정리해 업로드 중입니다"}),c&&l.jsx("button",{onClick:s,className:"mt-7 px-5 py-2.5 border border-[var(--line-strong)] rounded-[2px] text-sm text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] hover:border-[var(--ink)] transition-colors cursor-pointer",children:"필터 초기화"})]})}const K1=`
.pf-container {
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 32px;
}
@media (max-width: 720px) {
  .pf-container { padding: 0 20px; }
}

.pf-eyebrow {
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
}
.pf-eyebrow-light { color: #d9b790; }

.pf-page em { font-style: normal; color: var(--accent); }
.pf-hero em { color: #e3c5a3; }

/* ===== Hero ===== */
.pf-hero {
  position: relative;
  padding: 168px 0 84px;
  overflow: hidden;
  isolation: isolate;
  color-scheme: dark;
}
@media (max-width: 720px) {
  .pf-hero { padding: 120px 0 64px; }
}
.pf-hero-bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    repeating-linear-gradient(135deg, rgba(255,255,255,.05) 0 1px, transparent 1px 24px),
    radial-gradient(120% 80% at 70% 20%, rgba(138,106,76,.25), transparent 60%),
    linear-gradient(180deg, #251d14 0%, #18130e 100%);
}
.pf-hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(120% 100% at 50% 0%, rgba(0,0,0,.25), rgba(0,0,0,.65) 80%);
  pointer-events: none;
}
.pf-hero-inner { position: relative; z-index: 1; }
.pf-hero-title {
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
.pf-hero-lede {
  font-size: 15.5px;
  line-height: 1.75;
  color: rgba(255,255,255,.78);
  margin: 0;
  word-break: keep-all;
}

/* ===== Breadcrumb ===== */
.pf-crumb {
  background: var(--paper);
  border-bottom: 1px solid var(--line);
}
.pf-crumb-inner {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 32px;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: var(--muted-2);
}
@media (max-width: 720px) {
  .pf-crumb-inner { padding: 14px 20px; }
}
.pf-crumb-item {
  color: var(--muted-2);
  text-decoration: none;
  transition: color .2s ease;
}
.pf-crumb-item:hover { color: var(--accent); }
.pf-crumb-sep { opacity: .4; }
.pf-crumb-here { color: var(--ink); }
`;function Q1({images:s,startIndex:c,onClose:o}){const[d,u]=v.useState(c);v.useEffect(()=>{u(c)},[c]),v.useEffect(()=>{const x=b=>{b.key==="Escape"&&o(),b.key==="ArrowLeft"&&u(h=>Math.max(0,h-1)),b.key==="ArrowRight"&&u(h=>Math.min(s.length-1,h+1))};document.addEventListener("keydown",x);const g=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",x),document.body.style.overflow=g}},[o,s.length]);const m=s[d];return m?l.jsxs("div",{role:"dialog","aria-modal":"true",className:"fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center",onClick:o,children:[l.jsx("button",{onClick:x=>{x.stopPropagation(),o()},className:"absolute top-5 right-5 text-white text-3xl w-12 h-12 flex items-center justify-center hover:bg-white/10 rounded-full cursor-pointer","aria-label":"닫기",children:l.jsx("i",{className:"ri-close-line"})}),d>0&&l.jsx("button",{onClick:x=>{x.stopPropagation(),u(g=>g-1)},className:"absolute left-4 md:left-8 text-white text-3xl w-12 h-12 flex items-center justify-center hover:bg-white/10 rounded-full cursor-pointer","aria-label":"이전 사진",children:l.jsx("i",{className:"ri-arrow-left-s-line text-4xl"})}),l.jsx("img",{src:m.src,alt:m.alt,className:"max-w-[92vw] max-h-[82vh] object-contain cursor-zoom-out"}),d<s.length-1&&l.jsx("button",{onClick:x=>{x.stopPropagation(),u(g=>g+1)},className:"absolute right-4 md:right-8 text-white text-3xl w-12 h-12 flex items-center justify-center hover:bg-white/10 rounded-full cursor-pointer","aria-label":"다음 사진",children:l.jsx("i",{className:"ri-arrow-right-s-line text-4xl"})}),l.jsxs("div",{className:"absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium tracking-[0.1em]",children:[d+1," / ",s.length]})]}):null}function Z1(){const{slug:s}=Y0(),c=s?Ib(s):void 0;Pt(c?{title:c.title,description:c.description,ogImage:c.images[0]?.src?`${ve}${c.images[0].src}`:fh}:{noindex:!0}),v.useEffect(()=>{window.scrollTo(0,0)},[s]),v.useEffect(()=>{if(!c)return;const h=`${ve}/portfolio/${c.slug}`,w=c.images.find(K=>K.type==="after-main")??c.images[0],N=rt("portfolio-article-jsonld",cl({title:c.title,description:c.description,url:h,image:w?`${ve}${w.src}`:void 0,datePublished:c.date,dateModified:c.date})),U=rt("portfolio-breadcrumb-jsonld",dl([{name:"홈",url:ve},{name:"시공사례",url:`${ve}/portfolio`},{name:c.region,url:`${ve}/portfolio`},...c.district?[{name:c.district,url:`${ve}/portfolio`}]:[],{name:`${c.apartment} ${c.area}평`,url:h}]));return()=>{N(),U()}},[c]);const[o,d]=v.useState(null);if(!c)return l.jsxs("div",{className:"min-h-screen bg-[var(--bg)]",children:[l.jsx(Lt,{}),l.jsxs("main",{className:"pt-32 pb-24 px-6 text-center",children:[l.jsx("h1",{className:"text-3xl text-[var(--ink)]",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:"사례를 찾을 수 없습니다"}),l.jsx("p",{className:"mt-4 text-[var(--muted)]",children:"URL을 다시 확인해주세요."}),l.jsx(Ee,{to:"/portfolio",className:"inline-block mt-7 px-6 py-2.5 border border-[var(--line-strong)] rounded-[2px] text-sm cursor-pointer hover:bg-[var(--ink)] hover:text-[var(--paper)] hover:border-[var(--ink)] transition-colors",children:"전체 시공사례 보기"})]}),l.jsx(Yt,{})]});const u=c.images.filter(h=>h.type==="before"),m=c.images.filter(h=>h.type==="after-main"||h.type==="after"),x=[...u,...m],g=h=>{const w=x.findIndex(N=>N.src===h.src);d(w>=0?w:0)},b=()=>{const h=`${ve}/portfolio/${c.slug}`;navigator.share?navigator.share({title:c.title,url:h}).catch(()=>{}):navigator.clipboard&&(navigator.clipboard.writeText(h),alert("링크가 복사되었습니다. 카카오톡에 붙여넣어 공유하세요."))};return l.jsxs("div",{className:"min-h-screen bg-[var(--bg)]",children:[l.jsx(Lt,{}),l.jsx("div",{className:"h-12 md:h-20","aria-hidden":"true"}),l.jsx("nav",{className:"pf-crumb","aria-label":"현재 위치",children:l.jsxs("div",{className:"pf-container pf-crumb-inner",children:[l.jsx(Ee,{to:"/",className:"pf-crumb-item",children:"홈"}),l.jsx("span",{className:"pf-crumb-sep",children:"/"}),l.jsx(Ee,{to:"/portfolio",className:"pf-crumb-item",children:"시공사례"}),l.jsx("span",{className:"pf-crumb-sep",children:"/"}),l.jsx("span",{className:"pf-crumb-item",children:c.region}),c.district&&l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"pf-crumb-sep",children:"/"}),l.jsx("span",{className:"pf-crumb-item",children:c.district})]}),l.jsx("span",{className:"pf-crumb-sep",children:"/"}),l.jsxs("span",{className:"pf-crumb-here",children:[c.apartment," ",c.area,"평"]})]})}),l.jsxs("main",{className:"pb-24",children:[l.jsx(X1,{item:c,onMainClick:g,shareKakao:b}),u.length>0&&l.jsxs("section",{className:"px-6 md:px-12 lg:px-20 max-w-[1360px] mx-auto mb-16 pt-14 border-t border-[var(--line)]",children:[l.jsx(_m,{eyebrow:"Before",title:"시공 전"}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8",children:u.map((h,w)=>l.jsx(Dm,{image:h,label:"Before",onClick:()=>g(h),dark:!0},w))}),l.jsx("p",{className:"text-[var(--ink-2)] leading-[1.85] text-[15.5px] md:text-[16.5px] break-keep bg-[var(--bg-2)] px-6 md:px-8 py-6 md:py-8 rounded-[2px]",children:c.body.beforeText})]}),l.jsxs("section",{className:"px-6 md:px-12 lg:px-20 max-w-[1360px] mx-auto mb-20 pt-14 border-t border-[var(--line)]",children:[l.jsx(_m,{eyebrow:"After",title:"시공 후",accent:!0}),l.jsx("div",{className:"grid grid-cols-2 gap-4 md:gap-6 mb-8",children:m.map((h,w)=>l.jsx(Dm,{image:h,label:"After",accent:!0,onClick:()=>g(h)},w))}),l.jsx("p",{className:"text-[var(--ink-2)] leading-[1.85] text-[15.5px] md:text-[16.5px] break-keep bg-[var(--bg-2)] px-6 md:px-8 py-6 md:py-8 rounded-[2px]",children:c.body.afterText})]})]}),l.jsx("section",{className:"bg-[var(--bg-2)] border-t border-[var(--line)] py-14 max-[720px]:py-[56px] md:py-[72px]",children:l.jsxs("div",{className:"px-6 md:px-12 lg:px-20 max-w-[1360px] mx-auto flex flex-wrap items-center justify-between gap-8",children:[l.jsxs("div",{className:"flex flex-col gap-2 flex-[1_1_380px]",children:[l.jsxs("h3",{className:"text-[clamp(26px,3vw,38px)] tracking-[-0.015em] leading-[1.35] break-keep m-0 text-[var(--ink)]",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:400},children:["내 집 줄눈도 이렇게 ",l.jsx("em",{className:"not-italic text-[var(--accent)]",children:"새것처럼"})," 만들 수 있을까요?"]}),l.jsx("p",{className:"text-sm text-[var(--muted)] m-0",children:"평형 · 공간 · 색상을 알려주시면 24시간 내에 회신드립니다. 서울·경기 줄눈시공 무료 견적 상담."})]}),l.jsxs("div",{className:"flex flex-wrap gap-3 justify-end max-[820px]:flex-nowrap max-[820px]:justify-start max-[820px]:gap-2 max-[820px]:w-full",children:[l.jsxs(Ee,{to:"/#calc",className:"inline-flex items-center gap-2.5 px-[22px] py-4 rounded-[2px] text-sm font-medium bg-[var(--ink)] text-[var(--paper)] hover:bg-[var(--accent-deep)] transition-colors cursor-pointer max-[820px]:flex-1 max-[820px]:min-w-0 max-[820px]:px-3 max-[820px]:py-3.5 max-[820px]:text-[13px] max-[820px]:whitespace-nowrap max-[820px]:justify-center",children:["무료 견적 받기 ",l.jsx("span",{children:"→"})]}),l.jsxs("a",{href:`tel:${Lc}`,onClick:()=>at.phoneClick("info_cta"),className:"inline-flex items-center gap-2.5 px-[22px] py-4 rounded-[2px] text-sm font-medium border border-[var(--line-strong)] text-[var(--ink)] bg-transparent hover:bg-[var(--ink)] hover:text-[var(--paper)] hover:border-[var(--ink)] transition-colors cursor-pointer max-[820px]:flex-1 max-[820px]:min-w-0 max-[820px]:px-3 max-[820px]:py-3.5 max-[820px]:text-[13px] max-[820px]:whitespace-nowrap max-[820px]:justify-center",children:["전화 상담 ",Lc]})]})]})}),l.jsx(Fc,{}),l.jsx(Yt,{}),o!==null&&l.jsx(Q1,{images:x,startIndex:o,onClose:()=>d(null)})]})}function X1({item:s,onMainClick:c,shareKakao:o}){const d=s.images.filter(V=>V.type==="after"),u=s.images.filter(V=>V.type==="before"),[m,x]=v.useState(0),[g,b]=v.useState(!1),[h,w]=v.useState(!1),[N,U]=v.useState(!1);v.useEffect(()=>{w(!1),U(!1)},[m]);const K=d[m],S=u[m],G=d.length,q=V=>V<10?`0${V}`:`${V}`,Y=s.district?`${s.region} ${s.district}`:s.region;return l.jsxs("section",{className:"px-6 md:px-12 lg:px-20 pt-6 max-w-[1360px] mx-auto mb-20","data-screen-label":"Detail PDP",children:[l.jsxs("div",{className:"pdp",children:[l.jsxs("div",{className:"pdp-gallery",children:[l.jsx("div",{className:"pdp-thumbs",role:"tablist","aria-label":"시공 사진",children:d.map((V,H)=>l.jsxs("button",{role:"tab","aria-selected":H===m,"aria-label":V.alt,className:`pdp-thumb ${H===m?"is-active":""}`,onClick:()=>x(H),children:[l.jsx("img",{src:V.src,alt:V.alt,className:"pdp-thumb-img",loading:"lazy"}),l.jsx("span",{className:"sq"})]},V.src))}),l.jsxs("div",{className:`pdp-main ${g?"show-before":""}`,onMouseEnter:()=>b(!0),onMouseLeave:()=>b(!1),children:[l.jsxs("button",{type:"button",className:"stage",onClick:()=>K&&c(K),"aria-label":K?`${K.alt} 확대 보기`:"확대",children:[K&&!h&&l.jsx("img",{src:K.src,alt:K.alt,className:"pdp-stage-img",onError:()=>w(!0),loading:"eager"}),S&&!N&&l.jsx("img",{src:S.src,alt:S.alt,className:"pdp-before-img",onError:()=>U(!0),loading:"lazy"}),l.jsxs("span",{className:"pdp-counter",children:[q(m+1)," / ",q(G)]})]}),l.jsxs("div",{className:"pdp-main-foot",children:[l.jsx("div",{className:"pdp-dots","aria-hidden":"true",children:d.map((V,H)=>l.jsx("i",{className:H===m?"on":""},V.src))}),l.jsxs("button",{type:"button",onClick:o,className:"pdp-share","aria-label":"공유하기",children:[l.jsx("i",{className:"ri-share-line"}),"공유"]})]})]})]}),l.jsxs("div",{className:"pdp-info",children:[l.jsxs("h1",{className:"pdp-title",children:[s.apartment," ",s.area,"평 — ",s.space," 줄눈시공"]}),l.jsxs("div",{className:"pdp-rows",children:[l.jsxs("div",{className:"pdp-row",children:[l.jsx("span",{className:"k",children:"위치"}),l.jsxs("span",{className:"v",children:[Y," ",s.apartment]})]}),l.jsxs("div",{className:"pdp-row",children:[l.jsx("span",{className:"k",children:"평형"}),l.jsxs("span",{className:"v",children:[s.area,"평",s.areaSqm?` / ${s.areaSqm}㎡`:""]})]}),l.jsxs("div",{className:"pdp-row",children:[l.jsx("span",{className:"k",children:"공간·자재"}),l.jsx("span",{className:"v",children:[{space:s.space,spaceDetail:s.spaceDetail,material:s.material,materialDetail:s.materialDetail},...s.extraSpaces??[]].map((V,H)=>l.jsxs("span",{children:[V.space,V.spaceDetail?` (${V.spaceDetail})`:""," ·"," ",l.jsxs("b",{children:[V.material,V.materialDetail?` ${V.materialDetail}`:""]})]},H))})]}),l.jsxs("div",{className:"pdp-row",children:[l.jsx("span",{className:"k",children:"시공 기간"}),l.jsx("span",{className:"v",children:s.duration})]}),l.jsxs("div",{className:"pdp-row",children:[l.jsx("span",{className:"k",children:"시공일자"}),l.jsx("span",{className:"v",children:s.date.replace(/-/g,".")})]}),l.jsxs("div",{className:"pdp-row",children:[l.jsx("span",{className:"k",children:"보증"}),l.jsxs("span",{className:"v",children:["시공 후 ",s.asPeriod," 무상 A/S"]})]})]}),l.jsxs("div",{className:"pdp-cta-block",children:[l.jsxs("a",{href:`tel:${Lc}`,onClick:()=>at.phoneClick("info_cta"),className:"pdp-cta-btn pdp-cta-primary",children:[l.jsx("i",{className:"ri-phone-line"})," 전화 상담"]}),l.jsxs(Ee,{to:"/#calc",className:"pdp-cta-btn pdp-cta-dark",children:[l.jsx("i",{className:"ri-edit-line"})," 무료 견적 받기"]})]})]})]}),l.jsx("style",{children:J1})]})}function _m({eyebrow:s,title:c,accent:o=!1}){return l.jsxs("div",{className:"mb-8 md:mb-10",children:[l.jsxs("span",{className:`inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.18em] uppercase ${o?"text-[var(--accent)]":"text-[var(--muted-2)]"}`,children:[l.jsx("span",{className:`inline-block w-1.5 h-1.5 ${o?"bg-[var(--accent)]":"bg-[var(--muted-2)]"}`}),s]}),l.jsx("h2",{className:"text-[clamp(24px,2.8vw,34px)] text-[var(--ink)] mt-3 leading-[1.25] tracking-[-0.015em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:c})]})}function Dm({image:s,label:c,accent:o=!1,dark:d=!1,onClick:u}){const[m,x]=v.useState(!1);return l.jsxs("button",{onClick:u,className:"relative aspect-[4/3] overflow-hidden border border-[var(--line)] bg-[var(--bg-2)] cursor-zoom-in group","aria-label":`${s.alt} 확대 보기`,children:[m?l.jsx(Yc,{dark:d,corner:`${c.toUpperCase()} · 1200×900`,label:s.alt}):l.jsx("img",{src:s.src,alt:s.alt,onError:()=>x(!0),className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",loading:"lazy"}),l.jsx("span",{className:`absolute top-3 left-3 text-[10.5px] font-medium tracking-[0.14em] uppercase px-2.5 py-1 rounded-[2px] ${o?"bg-[var(--accent)] text-white":"bg-white/95 text-[var(--ink)]"}`,children:c})]})}const J1=`
/* ===== container (list와 통일) ===== */
.pf-container {
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 32px;
}
@media (max-width: 720px) {
  .pf-container { padding: 0 20px; }
}

/* ===== Breadcrumb (list의 pf-crumb 패턴과 동일) ===== */
.pf-crumb {
  background: var(--paper);
  border-bottom: 1px solid var(--line);
}
.pf-crumb-inner {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 14px 32px;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: var(--muted-2);
}
@media (max-width: 720px) {
  .pf-crumb-inner { padding: 14px 20px; }
}
.pf-crumb-item {
  color: var(--muted-2);
  text-decoration: none;
  transition: color .2s ease;
}
.pf-crumb-item:hover { color: var(--accent); }
.pf-crumb-sep { opacity: .4; }
.pf-crumb-here { color: var(--ink); }

/* sticky 동작은 src/index.css의 글로벌 .pf-crumb 규칙으로 처리 */

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
`,$1=[{title:"1. 개인정보의 처리 목적",body:l.jsxs(l.Fragment,{children:[l.jsx("p",{children:'디테일라인(이하 "회사")은 다음의 목적을 위하여 개인정보를 처리하며, 다음의 목적 이외의 용도로는 이용하지 않습니다.'}),l.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[l.jsx("li",{children:"견적 상담 및 방문 일정 조율"}),l.jsx("li",{children:"시공 서비스 안내, 견적 회신, 후속 응대"}),l.jsx("li",{children:"본인 확인 및 부정 이용 방지"})]})]})},{title:"2. 수집하는 개인정보 항목",body:l.jsxs(l.Fragment,{children:[l.jsx("p",{children:"회사는 무료 견적 상담 신청 시 다음의 개인정보를 수집합니다."}),l.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[l.jsxs("li",{children:[l.jsx("strong",{children:"필수 항목"}),": 이름, 연락처(휴대전화), 시공 위치(주소), 희망 시공 일정, 시공 공간(현관/화장실/베란다 등)"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"선택 항목"}),": 이메일, 상세 시공 내역(요청 사항)"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"자동 수집"}),": 접속 일시(상담 신청 시각)"]})]})]})},{title:"3. 개인정보의 보유 및 이용 기간",body:l.jsxs(l.Fragment,{children:[l.jsx("p",{children:"수집된 개인정보는 상담 완료 후 즉시 폐기하는 것을 원칙으로 합니다."}),l.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[l.jsx("li",{children:"상담 완료(견적 회신 또는 거절 의사 확인) 후 지체 없이 파기"}),l.jsx("li",{children:"다만, 시공 계약이 체결된 경우에는 「전자상거래 등에서의 소비자보호에 관한 법률」 등 관계 법령에 따라 거래 기록을 5년간 보관할 수 있습니다."})]})]})},{title:"4. 개인정보의 제3자 제공 및 처리 위탁",body:l.jsxs(l.Fragment,{children:[l.jsx("p",{children:"회사는 정보주체의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 견적 신청서 접수 처리를 위해 다음의 클라우드 서비스를 이용합니다."}),l.jsx("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:l.jsxs("li",{children:[l.jsx("strong",{children:"Google LLC (Google Workspace · Apps Script)"})," — 견적 신청 데이터 저장 및 처리. 데이터 처리 위치: 미국"]})}),l.jsx("p",{className:"mt-3 text-[var(--muted)] text-sm",children:"위 위탁업체는 Google이 제공하는 표준 데이터 보호 약관에 따라 운영되며, 회사는 위탁 처리 과정을 정기적으로 점검합니다."})]})},{title:"5. 개인정보의 파기 절차 및 방법",body:l.jsxs(l.Fragment,{children:[l.jsx("p",{children:"회사는 보유 기간이 경과하거나 처리 목적이 달성된 개인정보를 다음의 절차와 방법에 따라 지체 없이 파기합니다."}),l.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[l.jsxs("li",{children:[l.jsx("strong",{children:"파기 절차"}),": 상담 완료 시점에 자동/수동으로 식별, 즉시 파기 처리"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"전자적 파일"}),": 복원이 불가능한 방법으로 영구 삭제"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"출력물"}),": 분쇄 또는 소각"]})]})]})},{title:"6. 정보주체의 권리·의무 및 행사 방법",body:l.jsxs(l.Fragment,{children:[l.jsx("p",{children:"정보주체는 회사에 대해 언제든지 다음의 권리를 행사할 수 있습니다."}),l.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[l.jsx("li",{children:"개인정보 열람 요구"}),l.jsx("li",{children:"오류 등이 있을 경우 정정 요구"}),l.jsx("li",{children:"삭제 요구"}),l.jsx("li",{children:"처리 정지 요구"})]}),l.jsx("p",{className:"mt-3",children:"위 권리 행사는 아래 연락처를 통해 요청하실 수 있으며, 회사는 지체 없이 조치합니다."})]})},{title:"7. 개인정보의 안전성 확보 조치",body:l.jsxs(l.Fragment,{children:[l.jsx("p",{children:"회사는 개인정보 보호를 위해 다음의 조치를 취하고 있습니다."}),l.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[l.jsx("li",{children:"관리적 조치: 개인정보 취급자 최소화, 정기 점검"}),l.jsx("li",{children:"기술적 조치: 전송 구간 HTTPS 암호화, 접근 권한 통제"}),l.jsx("li",{children:"물리적 조치: 자료 보관 장소 출입 통제"})]})]})},{title:"8. 개인정보 보호 책임자",body:l.jsxs(l.Fragment,{children:[l.jsx("p",{children:"회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만 처리 및 피해 구제 등을 위하여 아래와 같이 개인정보 보호 책임자를 지정하고 있습니다."}),l.jsxs("div",{className:"mt-3 p-4 bg-[var(--bg)] rounded-sm text-sm space-y-1",children:[l.jsxs("p",{children:[l.jsx("strong",{children:"상호"}),": 디테일라인"]}),l.jsxs("p",{children:[l.jsx("strong",{children:"사업자등록번호"}),": 609-33-19473"]}),l.jsxs("p",{children:[l.jsx("strong",{children:"주소"}),": 서울 서초구 본마을4길 11 1층 104호"]}),l.jsxs("p",{children:[l.jsx("strong",{children:"연락처"}),": 010-8005-6674"]})]})]})},{title:"9. 권익 침해 구제 방법",body:l.jsxs(l.Fragment,{children:[l.jsx("p",{children:"개인정보 침해로 인한 구제가 필요한 경우 아래 기관에 문의하실 수 있습니다."}),l.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[l.jsx("li",{children:"개인정보분쟁조정위원회: 1833-6972 (privacy.go.kr)"}),l.jsx("li",{children:"개인정보침해신고센터: 118 (privacy.kisa.or.kr)"}),l.jsx("li",{children:"대검찰청 사이버수사과: 1301 (spo.go.kr)"}),l.jsx("li",{children:"경찰청 사이버수사국: 182 (ecrm.cyber.go.kr)"})]})]})},{title:"10. 개인정보 처리방침의 변경",body:l.jsx(l.Fragment,{children:l.jsx("p",{children:"이 개인정보 처리방침은 2026년 4월 29일부터 적용됩니다. 법령·정책 또는 보안 기술의 변경에 따라 내용이 추가, 삭제 및 수정될 경우 시행 7일 전부터 본 페이지를 통해 공지합니다."})})}];function W1(){return Pt(),v.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[]),l.jsxs("div",{className:"min-h-screen bg-[var(--paper)]",children:[l.jsx(Lt,{}),l.jsx("main",{className:"pt-28 pb-20 px-6 md:px-12 lg:px-20",children:l.jsxs("div",{className:"max-w-3xl mx-auto",children:[l.jsxs("div",{className:"mb-10",children:[l.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Privacy Policy"}),l.jsx("h1",{className:"text-4xl md:text-5xl font-black text-[var(--ink)] mt-2",children:"개인정보 처리방침"}),l.jsx("p",{className:"text-[var(--muted)] mt-3 text-sm",children:"시행일: 2026년 4월 29일"})]}),l.jsx("p",{className:"text-[var(--muted)] leading-relaxed mb-12",children:'디테일라인(이하 "회사")은 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립·공개합니다.'}),l.jsx("div",{className:"space-y-10",children:$1.map(s=>l.jsxs("section",{children:[l.jsx("h2",{className:"text-xl md:text-2xl font-bold text-[var(--ink)] mb-3",children:s.title}),l.jsx("div",{className:"text-[var(--muted)] leading-relaxed text-sm md:text-base",children:s.body})]},s.title))}),l.jsx("div",{className:"mt-16 pt-8 border-t border-[var(--line)] text-center",children:l.jsxs(Ee,{to:"/",className:"inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--ink)] transition-colors",children:[l.jsx("i",{className:"ri-arrow-left-line"}),"홈으로 돌아가기"]})})]})}),l.jsx(Yt,{})]})}const F1=[{path:"/",element:l.jsx(Xv,{})},{path:"/privacy",element:l.jsx(W1,{})},{path:"/info/kerafoxy",element:l.jsx(a1,{})},{path:"/info/kerafoxy-price",element:l.jsx(p1,{})},{path:"/info/kerafoxy-product",element:l.jsx(y1,{})},{path:"/info/comparison",element:l.jsx(w1,{})},{path:"/info/why-grout",element:l.jsx(C1,{})},{path:"/info/polyurea",element:l.jsx(L1,{})},{path:"/portfolio",element:l.jsx(G1,{})},{path:"/portfolio/:slug",element:l.jsx(Z1,{})},{path:"*",element:l.jsx(_b,{})}];let vh;new Promise(s=>{vh=s});function P1(){const s=q0(F1),c=Ft();return v.useEffect(()=>{window.REACT_APP_NAVIGATE=c,vh(window.REACT_APP_NAVIGATE)}),s}function I1(){return l.jsx(wb,{basename:"/",children:l.jsx(P1,{})})}let yh=-1;const tn=s=>{addEventListener("pageshow",c=>{c.persisted&&(yh=c.timeStamp,s(c))},!0)},Jt=(s,c,o,d)=>{let u,m;return x=>{c.value>=0&&(x||d)&&(m=c.value-(u??0),(m||u===void 0)&&(u=c.value,c.delta=m,c.rating=((g,b)=>g>b[1]?"poor":g>b[0]?"needs-improvement":"good")(c.value,o),s(c)))}},Ic=s=>{requestAnimationFrame(()=>requestAnimationFrame(s))},ed=()=>{const s=performance.getEntriesByType("navigation")[0];if(s&&s.responseStart>0&&s.responseStart<performance.now())return s},ci=()=>ed()?.activationStart??0,$t=(s,c=-1)=>{const o=ed();let d="navigate";return yh>=0?d="back-forward-cache":o&&(document.prerendering||ci()>0?d="prerender":document.wasDiscarded?d="restore":o.type&&(d=o.type.replace(/_/g,"-"))),{name:s,value:c,rating:"good",delta:0,entries:[],id:`v5-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,navigationType:d}},Oc=new WeakMap;function td(s,c){return Oc.get(s)||Oc.set(s,new c),Oc.get(s)}class ey{t;i=0;o=[];h(c){if(c.hadRecentInput)return;const o=this.o[0],d=this.o.at(-1);this.i&&o&&d&&c.startTime-d.startTime<1e3&&c.startTime-o.startTime<5e3?(this.i+=c.value,this.o.push(c)):(this.i=c.value,this.o=[c]),this.t?.(c)}}const di=(s,c,o={})=>{try{if(PerformanceObserver.supportedEntryTypes.includes(s)){const d=new PerformanceObserver(u=>{queueMicrotask(()=>{c(u.getEntries())})});return d.observe({type:s,buffered:!0,...o}),d}}catch{}},ad=s=>{let c=!1;return()=>{c||(s(),c=!0)}};let Il=-1;const jh=new Set,Bm=()=>document.visibilityState!=="hidden"||document.prerendering?1/0:0,qc=s=>{if(document.visibilityState==="hidden"){if(s.type==="visibilitychange")for(const c of jh)c();isFinite(Il)||(Il=s.type==="visibilitychange"?s.timeStamp:0,removeEventListener("prerenderingchange",qc,!0))}},Wr=()=>{if(Il<0){const s=ci();Il=(document.prerendering?void 0:globalThis.performance.getEntriesByType("visibility-state").find(o=>o.name==="hidden"&&o.startTime>=s)?.startTime)??Bm(),addEventListener("visibilitychange",qc,!0),addEventListener("prerenderingchange",qc,!0),tn(()=>{setTimeout(()=>{Il=Bm()})})}return{get firstHiddenTime(){return Il},onHidden(s){jh.add(s)}}},Fr=s=>{document.prerendering?addEventListener("prerenderingchange",s,!0):s()},Um=[1800,3e3],kh=(s,c={})=>{Fr(()=>{const o=Wr();let d,u=$t("FCP");const m=di("paint",x=>{for(const g of x)g.name==="first-contentful-paint"&&(m.disconnect(),g.startTime<o.firstHiddenTime&&(u.value=Math.max(g.startTime-ci(),0),u.entries.push(g),d(!0)))});m&&(d=Jt(s,u,Um,c.reportAllChanges),tn(x=>{u=$t("FCP"),d=Jt(s,u,Um,c.reportAllChanges),Ic(()=>{u.value=performance.now()-x.timeStamp,d(!0)})}))})},Hm=[.1,.25],ty=(s,c={})=>{const o=Wr();kh(ad(()=>{let d,u=$t("CLS",0);const m=td(c,ey),x=b=>{for(const h of b)m.h(h);m.i>u.value&&(u.value=m.i,u.entries=m.o,d())},g=di("layout-shift",x);g&&(d=Jt(s,u,Hm,c.reportAllChanges),o.onHidden(()=>{x(g.takeRecords()),d(!0)}),tn(()=>{m.i=0,u=$t("CLS",0),d=Jt(s,u,Hm,c.reportAllChanges),Ic(d)}),setTimeout(d))}))};let Nh=0,_c=1/0,Hr=0;const ay=s=>{for(const c of s)c.interactionId&&(_c=Math.min(_c,c.interactionId),Hr=Math.max(Hr,c.interactionId),Nh=Hr?(Hr-_c)/7+1:0)};let Gc;const Lm=()=>Gc?Nh:performance.interactionCount??0,ly=()=>{"interactionCount"in performance||Gc||(Gc=di("event",ay,{durationThreshold:0}))};let Ym=0;class ny{l=[];u=new Map;m;p;v(){Ym=Lm(),this.l.length=0,this.u.clear()}T(){const c=Math.min(this.l.length-1,Math.floor((Lm()-Ym)/50));return this.l[c]}h(c){if(this.m?.(c),!c.interactionId&&c.entryType!=="first-input")return;const o=this.l.at(-1);let d=this.u.get(c.interactionId);if(d||this.l.length<10||c.duration>o.L){if(d?c.duration>d.L?(d.entries=[c],d.L=c.duration):c.duration===d.L&&c.startTime===d.entries[0].startTime&&d.entries.push(c):(d={id:c.interactionId,entries:[c],L:c.duration},this.u.set(d.id,d),this.l.push(d)),this.l.sort((u,m)=>m.L-u.L),this.l.length>10){const u=this.l.splice(10);for(const m of u)this.u.delete(m.id)}this.p?.(d)}}}const wh=s=>{const c=globalThis.requestIdleCallback||setTimeout,o=globalThis.cancelIdleCallback||clearTimeout;if(document.visibilityState==="hidden")s();else{const d=ad(s);let u=-1;const m=()=>{o(u),d()};addEventListener("visibilitychange",m,{once:!0,capture:!0}),u=c(()=>{removeEventListener("visibilitychange",m,{capture:!0}),d()})}},qm=[200,500],iy=(s,c={})=>{if(!globalThis.PerformanceEventTiming||!("interactionId"in PerformanceEventTiming.prototype))return;const o=Wr();Fr(()=>{ly();let d,u=$t("INP");const m=td(c,ny),x=b=>{wh(()=>{for(const w of b)m.h(w);const h=m.T();h&&h.L!==u.value&&(u.value=h.L,u.entries=h.entries,d())})},g=di("event",x,{durationThreshold:c.durationThreshold??40});d=Jt(s,u,qm,c.reportAllChanges),g&&(g.observe({type:"first-input",buffered:!0}),o.onHidden(()=>{x(g.takeRecords()),d(!0)}),tn(()=>{m.v(),u=$t("INP"),d=Jt(s,u,qm,c.reportAllChanges)}))})};class ry{m;h(c){this.m?.(c)}}const Gm=[2500,4e3],sy=(s,c={})=>{Fr(()=>{const o=Wr();let d,u=$t("LCP");const m=td(c,ry),x=b=>{c.reportAllChanges||(b=b.slice(-1));for(const h of b)m.h(h),h.startTime<o.firstHiddenTime&&(u.value=Math.max(h.startTime-ci(),0),u.entries=[h],d())},g=di("largest-contentful-paint",x);if(g){d=Jt(s,u,Gm,c.reportAllChanges);const b=ad(()=>{x(g.takeRecords()),g.disconnect(),d(!0)}),h=w=>{w.isTrusted&&(wh(b),removeEventListener(w.type,h,{capture:!0}))};for(const w of["keydown","click","visibilitychange"])addEventListener(w,h,{capture:!0});tn(w=>{u=$t("LCP"),d=Jt(s,u,Gm,c.reportAllChanges),Ic(()=>{u.value=performance.now()-w.timeStamp,d(!0)})})}})},Vm=[800,1800],Vc=s=>{document.prerendering?Fr(()=>Vc(s)):document.readyState!=="complete"?addEventListener("load",()=>Vc(s),!0):setTimeout(s)},oy=(s,c={})=>{let o=$t("TTFB"),d=Jt(s,o,Vm,c.reportAllChanges);Vc(()=>{const u=ed();u&&(o.value=Math.max(u.responseStart-ci(),0),o.entries=[u],d(!0),tn(()=>{o=$t("TTFB",0),d=Jt(s,o,Vm,c.reportAllChanges),d(!0)}))})};function ai(s){window.gtag?.("event",s.name,{metric_id:s.id,metric_value:s.value,metric_rating:s.rating,value:s.name==="CLS"?Math.round(s.value*1e3):Math.round(s.value),non_interaction:!0})}function cy(){ty(ai),iy(ai),sy(ai),kh(ai),oy(ai)}l0.createRoot(document.getElementById("root")).render(l.jsx(v.StrictMode,{children:l.jsx(I1,{})}));cy();
