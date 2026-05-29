(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))o(p);new MutationObserver(p=>{for(const m of p)if(m.type==="childList")for(const x of m.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&o(x)}).observe(document,{childList:!0,subtree:!0});function c(p){const m={};return p.integrity&&(m.integrity=p.integrity),p.referrerPolicy&&(m.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?m.credentials="include":p.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function o(p){if(p.ep)return;p.ep=!0;const m=c(p);fetch(p.href,m)}})();var go={exports:{}},$n={};var If;function Hg(){if(If)return $n;If=1;var s=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function c(o,p,m){var x=null;if(m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),"key"in p){m={};for(var b in p)b!=="key"&&(m[b]=p[b])}else m=p;return p=m.ref,{$$typeof:s,type:o,key:x,ref:p!==void 0?p:null,props:m}}return $n.Fragment=u,$n.jsx=c,$n.jsxs=c,$n}var em;function Lg(){return em||(em=1,go.exports=Hg()),go.exports}var n=Lg(),bo={exports:{}},se={};var tm;function Yg(){if(tm)return se;tm=1;var s=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),x=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),B=Symbol.iterator;function K(k){return k===null||typeof k!="object"?null:(k=B&&k[B]||k["@@iterator"],typeof k=="function"?k:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,L={};function Y(k,z,H){this.props=k,this.context=z,this.refs=L,this.updater=H||S}Y.prototype.isReactComponent={},Y.prototype.setState=function(k,z){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,z,"setState")},Y.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function Z(){}Z.prototype=Y.prototype;function q(k,z,H){this.props=k,this.context=z,this.refs=L,this.updater=H||S}var X=q.prototype=new Z;X.constructor=q,G(X,Y.prototype),X.isPureReactComponent=!0;var le=Array.isArray;function $(){}var P={H:null,A:null,T:null,S:null},je=Object.prototype.hasOwnProperty;function U(k,z,H){var Q=H.ref;return{$$typeof:s,type:k,key:z,ref:Q!==void 0?Q:null,props:H}}function ae(k,z){return U(k.type,z,k.props)}function ne(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function W(k){var z={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(H){return z[H]})}var ie=/\/+/g;function _e(k,z){return typeof k=="object"&&k!==null&&k.key!=null?W(""+k.key):z.toString(36)}function ke(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then($,$):(k.status="pending",k.then(function(z){k.status==="pending"&&(k.status="fulfilled",k.value=z)},function(z){k.status==="pending"&&(k.status="rejected",k.reason=z)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function C(k,z,H,Q,re){var oe=typeof k;(oe==="undefined"||oe==="boolean")&&(k=null);var xe=!1;if(k===null)xe=!0;else switch(oe){case"bigint":case"string":case"number":xe=!0;break;case"object":switch(k.$$typeof){case s:case u:xe=!0;break;case E:return xe=k._init,C(xe(k._payload),z,H,Q,re)}}if(xe)return re=re(k),xe=Q===""?"."+_e(k,0):Q,le(re)?(H="",xe!=null&&(H=xe.replace(ie,"$&/")+"/"),C(re,z,H,"",function(an){return an})):re!=null&&(ne(re)&&(re=ae(re,H+(re.key==null||k&&k.key===re.key?"":(""+re.key).replace(ie,"$&/")+"/")+xe)),z.push(re)),1;xe=0;var $e=Q===""?".":Q+":";if(le(k))for(var Ce=0;Ce<k.length;Ce++)Q=k[Ce],oe=$e+_e(Q,Ce),xe+=C(Q,z,H,oe,re);else if(Ce=K(k),typeof Ce=="function")for(k=Ce.call(k),Ce=0;!(Q=k.next()).done;)Q=Q.value,oe=$e+_e(Q,Ce++),xe+=C(Q,z,H,oe,re);else if(oe==="object"){if(typeof k.then=="function")return C(ke(k),z,H,Q,re);throw z=String(k),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return xe}function V(k,z,H){if(k==null)return k;var Q=[],re=0;return C(k,Q,"","",function(oe){return z.call(H,oe,re++)}),Q}function I(k){if(k._status===-1){var z=k._result;z=z(),z.then(function(H){(k._status===0||k._status===-1)&&(k._status=1,k._result=H)},function(H){(k._status===0||k._status===-1)&&(k._status=2,k._result=H)}),k._status===-1&&(k._status=0,k._result=z)}if(k._status===1)return k._result.default;throw k._result}var be=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)},fe={map:V,forEach:function(k,z,H){V(k,function(){z.apply(this,arguments)},H)},count:function(k){var z=0;return V(k,function(){z++}),z},toArray:function(k){return V(k,function(z){return z})||[]},only:function(k){if(!ne(k))throw Error("React.Children.only expected to receive a single React element child.");return k}};return se.Activity=N,se.Children=fe,se.Component=Y,se.Fragment=c,se.Profiler=p,se.PureComponent=q,se.StrictMode=o,se.Suspense=g,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,se.__COMPILER_RUNTIME={__proto__:null,c:function(k){return P.H.useMemoCache(k)}},se.cache=function(k){return function(){return k.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(k,z,H){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var Q=G({},k.props),re=k.key;if(z!=null)for(oe in z.key!==void 0&&(re=""+z.key),z)!je.call(z,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&z.ref===void 0||(Q[oe]=z[oe]);var oe=arguments.length-2;if(oe===1)Q.children=H;else if(1<oe){for(var xe=Array(oe),$e=0;$e<oe;$e++)xe[$e]=arguments[$e+2];Q.children=xe}return U(k.type,re,Q)},se.createContext=function(k){return k={$$typeof:x,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:m,_context:k},k},se.createElement=function(k,z,H){var Q,re={},oe=null;if(z!=null)for(Q in z.key!==void 0&&(oe=""+z.key),z)je.call(z,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(re[Q]=z[Q]);var xe=arguments.length-2;if(xe===1)re.children=H;else if(1<xe){for(var $e=Array(xe),Ce=0;Ce<xe;Ce++)$e[Ce]=arguments[Ce+2];re.children=$e}if(k&&k.defaultProps)for(Q in xe=k.defaultProps,xe)re[Q]===void 0&&(re[Q]=xe[Q]);return U(k,oe,re)},se.createRef=function(){return{current:null}},se.forwardRef=function(k){return{$$typeof:b,render:k}},se.isValidElement=ne,se.lazy=function(k){return{$$typeof:E,_payload:{_status:-1,_result:k},_init:I}},se.memo=function(k,z){return{$$typeof:h,type:k,compare:z===void 0?null:z}},se.startTransition=function(k){var z=P.T,H={};P.T=H;try{var Q=k(),re=P.S;re!==null&&re(H,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then($,be)}catch(oe){be(oe)}finally{z!==null&&H.types!==null&&(z.types=H.types),P.T=z}},se.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},se.use=function(k){return P.H.use(k)},se.useActionState=function(k,z,H){return P.H.useActionState(k,z,H)},se.useCallback=function(k,z){return P.H.useCallback(k,z)},se.useContext=function(k){return P.H.useContext(k)},se.useDebugValue=function(){},se.useDeferredValue=function(k,z){return P.H.useDeferredValue(k,z)},se.useEffect=function(k,z){return P.H.useEffect(k,z)},se.useEffectEvent=function(k){return P.H.useEffectEvent(k)},se.useId=function(){return P.H.useId()},se.useImperativeHandle=function(k,z,H){return P.H.useImperativeHandle(k,z,H)},se.useInsertionEffect=function(k,z){return P.H.useInsertionEffect(k,z)},se.useLayoutEffect=function(k,z){return P.H.useLayoutEffect(k,z)},se.useMemo=function(k,z){return P.H.useMemo(k,z)},se.useOptimistic=function(k,z){return P.H.useOptimistic(k,z)},se.useReducer=function(k,z,H){return P.H.useReducer(k,z,H)},se.useRef=function(k){return P.H.useRef(k)},se.useState=function(k){return P.H.useState(k)},se.useSyncExternalStore=function(k,z,H){return P.H.useSyncExternalStore(k,z,H)},se.useTransition=function(){return P.H.useTransition()},se.version="19.2.4",se}var am;function Yo(){return am||(am=1,bo.exports=Yg()),bo.exports}var y=Yo(),vo={exports:{}},Fn={},yo={exports:{}},jo={};var lm;function qg(){return lm||(lm=1,(function(s){function u(C,V){var I=C.length;C.push(V);e:for(;0<I;){var be=I-1>>>1,fe=C[be];if(0<p(fe,V))C[be]=V,C[I]=fe,I=be;else break e}}function c(C){return C.length===0?null:C[0]}function o(C){if(C.length===0)return null;var V=C[0],I=C.pop();if(I!==V){C[0]=I;e:for(var be=0,fe=C.length,k=fe>>>1;be<k;){var z=2*(be+1)-1,H=C[z],Q=z+1,re=C[Q];if(0>p(H,I))Q<fe&&0>p(re,H)?(C[be]=re,C[Q]=I,be=Q):(C[be]=H,C[z]=I,be=z);else if(Q<fe&&0>p(re,I))C[be]=re,C[Q]=I,be=Q;else break e}}return V}function p(C,V){var I=C.sortIndex-V.sortIndex;return I!==0?I:C.id-V.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;s.unstable_now=function(){return m.now()}}else{var x=Date,b=x.now();s.unstable_now=function(){return x.now()-b}}var g=[],h=[],E=1,N=null,B=3,K=!1,S=!1,G=!1,L=!1,Y=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;function X(C){for(var V=c(h);V!==null;){if(V.callback===null)o(h);else if(V.startTime<=C)o(h),V.sortIndex=V.expirationTime,u(g,V);else break;V=c(h)}}function le(C){if(G=!1,X(C),!S)if(c(g)!==null)S=!0,$||($=!0,W());else{var V=c(h);V!==null&&ke(le,V.startTime-C)}}var $=!1,P=-1,je=5,U=-1;function ae(){return L?!0:!(s.unstable_now()-U<je)}function ne(){if(L=!1,$){var C=s.unstable_now();U=C;var V=!0;try{e:{S=!1,G&&(G=!1,Z(P),P=-1),K=!0;var I=B;try{t:{for(X(C),N=c(g);N!==null&&!(N.expirationTime>C&&ae());){var be=N.callback;if(typeof be=="function"){N.callback=null,B=N.priorityLevel;var fe=be(N.expirationTime<=C);if(C=s.unstable_now(),typeof fe=="function"){N.callback=fe,X(C),V=!0;break t}N===c(g)&&o(g),X(C)}else o(g);N=c(g)}if(N!==null)V=!0;else{var k=c(h);k!==null&&ke(le,k.startTime-C),V=!1}}break e}finally{N=null,B=I,K=!1}V=void 0}}finally{V?W():$=!1}}}var W;if(typeof q=="function")W=function(){q(ne)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,_e=ie.port2;ie.port1.onmessage=ne,W=function(){_e.postMessage(null)}}else W=function(){Y(ne,0)};function ke(C,V){P=Y(function(){C(s.unstable_now())},V)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(C){C.callback=null},s.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):je=0<C?Math.floor(1e3/C):5},s.unstable_getCurrentPriorityLevel=function(){return B},s.unstable_next=function(C){switch(B){case 1:case 2:case 3:var V=3;break;default:V=B}var I=B;B=V;try{return C()}finally{B=I}},s.unstable_requestPaint=function(){L=!0},s.unstable_runWithPriority=function(C,V){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var I=B;B=C;try{return V()}finally{B=I}},s.unstable_scheduleCallback=function(C,V,I){var be=s.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?be+I:be):I=be,C){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=I+fe,C={id:E++,callback:V,priorityLevel:C,startTime:I,expirationTime:fe,sortIndex:-1},I>be?(C.sortIndex=I,u(h,C),c(g)===null&&C===c(h)&&(G?(Z(P),P=-1):G=!0,ke(le,I-be))):(C.sortIndex=fe,u(g,C),S||K||(S=!0,$||($=!0,W()))),C},s.unstable_shouldYield=ae,s.unstable_wrapCallback=function(C){var V=B;return function(){var I=B;B=V;try{return C.apply(this,arguments)}finally{B=I}}}})(jo)),jo}var nm;function Gg(){return nm||(nm=1,yo.exports=qg()),yo.exports}var ko={exports:{}},at={};var im;function Vg(){if(im)return at;im=1;var s=Yo();function u(g){var h="https://react.dev/errors/"+g;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)h+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+g+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var o={d:{f:c,r:function(){throw Error(u(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},p=Symbol.for("react.portal");function m(g,h,E){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:N==null?null:""+N,children:g,containerInfo:h,implementation:E}}var x=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(g,h){if(g==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return at.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,at.createPortal=function(g,h){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(u(299));return m(g,h,null,E)},at.flushSync=function(g){var h=x.T,E=o.p;try{if(x.T=null,o.p=2,g)return g()}finally{x.T=h,o.p=E,o.d.f()}},at.preconnect=function(g,h){typeof g=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,o.d.C(g,h))},at.prefetchDNS=function(g){typeof g=="string"&&o.d.D(g)},at.preinit=function(g,h){if(typeof g=="string"&&h&&typeof h.as=="string"){var E=h.as,N=b(E,h.crossOrigin),B=typeof h.integrity=="string"?h.integrity:void 0,K=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;E==="style"?o.d.S(g,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:N,integrity:B,fetchPriority:K}):E==="script"&&o.d.X(g,{crossOrigin:N,integrity:B,fetchPriority:K,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},at.preinitModule=function(g,h){if(typeof g=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var E=b(h.as,h.crossOrigin);o.d.M(g,{crossOrigin:E,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&o.d.M(g)},at.preload=function(g,h){if(typeof g=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var E=h.as,N=b(E,h.crossOrigin);o.d.L(g,E,{crossOrigin:N,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},at.preloadModule=function(g,h){if(typeof g=="string")if(h){var E=b(h.as,h.crossOrigin);o.d.m(g,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:E,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else o.d.m(g)},at.requestFormReset=function(g){o.d.r(g)},at.unstable_batchedUpdates=function(g,h){return g(h)},at.useFormState=function(g,h,E){return x.H.useFormState(g,h,E)},at.useFormStatus=function(){return x.H.useHostTransitionStatus()},at.version="19.2.4",at}var rm;function Qg(){if(rm)return ko.exports;rm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(u){console.error(u)}}return s(),ko.exports=Vg(),ko.exports}var sm;function Kg(){if(sm)return Fn;sm=1;var s=Gg(),u=Yo(),c=Qg();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function x(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(m(e)!==e)throw Error(o(188))}function h(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,l=t;;){var i=a.return;if(i===null)break;var r=i.alternate;if(r===null){if(l=i.return,l!==null){a=l;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===a)return g(i),e;if(r===l)return g(i),t;r=r.sibling}throw Error(o(188))}if(a.return!==l.return)a=i,l=r;else{for(var d=!1,f=i.child;f;){if(f===a){d=!0,a=i,l=r;break}if(f===l){d=!0,l=i,a=r;break}f=f.sibling}if(!d){for(f=r.child;f;){if(f===a){d=!0,a=r,l=i;break}if(f===l){d=!0,l=r,a=i;break}f=f.sibling}if(!d)throw Error(o(189))}}if(a.alternate!==l)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function E(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=E(e),t!==null)return t;e=e.sibling}return null}var N=Object.assign,B=Symbol.for("react.element"),K=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),Z=Symbol.for("react.consumer"),q=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),je=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),ae=Symbol.for("react.memo_cache_sentinel"),ne=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=ne&&e[ne]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Symbol.for("react.client.reference");function _e(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case Y:return"Profiler";case L:return"StrictMode";case le:return"Suspense";case $:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case q:return e.displayName||"Context";case Z:return(e._context.displayName||"Context")+".Consumer";case X:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return t=e.displayName||null,t!==null?t:_e(e.type)||"Memo";case je:t=e._payload,e=e._init;try{return _e(e(t))}catch{}}return null}var ke=Array.isArray,C=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},be=[],fe=-1;function k(e){return{current:e}}function z(e){0>fe||(e.current=be[fe],be[fe]=null,fe--)}function H(e,t){fe++,be[fe]=e.current,e.current=t}var Q=k(null),re=k(null),oe=k(null),xe=k(null);function $e(e,t){switch(H(oe,t),H(re,e),H(Q,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?kf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=kf(t),e=Nf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}z(Q),H(Q,e)}function Ce(){z(Q),z(re),z(oe)}function an(e){e.memoizedState!==null&&H(xe,e);var t=Q.current,a=Nf(t,e.type);t!==a&&(H(re,e),H(Q,a))}function ui(e){re.current===e&&(z(Q),z(re)),xe.current===e&&(z(xe),Zn._currentValue=I)}var Pr,Fo;function Va(e){if(Pr===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Pr=t&&t[1]||"",Fo=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Pr+e+Fo}var Ir=!1;function es(e,t){if(!e||Ir)return"";Ir=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(M){var R=M}Reflect.construct(e,[],D)}else{try{D.call()}catch(M){R=M}e.call(D.prototype)}}else{try{throw Error()}catch(M){R=M}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(M){if(M&&R&&typeof M.stack=="string")return[M.stack,R.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=l.DetermineComponentFrameRoot(),d=r[0],f=r[1];if(d&&f){var v=d.split(`
`),T=f.split(`
`);for(i=l=0;l<v.length&&!v[l].includes("DetermineComponentFrameRoot");)l++;for(;i<T.length&&!T[i].includes("DetermineComponentFrameRoot");)i++;if(l===v.length||i===T.length)for(l=v.length-1,i=T.length-1;1<=l&&0<=i&&v[l]!==T[i];)i--;for(;1<=l&&0<=i;l--,i--)if(v[l]!==T[i]){if(l!==1||i!==1)do if(l--,i--,0>i||v[l]!==T[i]){var O=`
`+v[l].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=l&&0<=i);break}}}finally{Ir=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Va(a):""}function hh(e,t){switch(e.tag){case 26:case 27:case 5:return Va(e.type);case 16:return Va("Lazy");case 13:return e.child!==t&&t!==null?Va("Suspense Fallback"):Va("Suspense");case 19:return Va("SuspenseList");case 0:case 15:return es(e.type,!1);case 11:return es(e.type.render,!1);case 1:return es(e.type,!0);case 31:return Va("Activity");default:return""}}function Po(e){try{var t="",a=null;do t+=hh(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ts=Object.prototype.hasOwnProperty,as=s.unstable_scheduleCallback,ls=s.unstable_cancelCallback,xh=s.unstable_shouldYield,gh=s.unstable_requestPaint,ft=s.unstable_now,bh=s.unstable_getCurrentPriorityLevel,Io=s.unstable_ImmediatePriority,ed=s.unstable_UserBlockingPriority,pi=s.unstable_NormalPriority,vh=s.unstable_LowPriority,td=s.unstable_IdlePriority,yh=s.log,jh=s.unstable_setDisableYieldValue,ln=null,mt=null;function ha(e){if(typeof yh=="function"&&jh(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(ln,e)}catch{}}var ht=Math.clz32?Math.clz32:wh,kh=Math.log,Nh=Math.LN2;function wh(e){return e>>>=0,e===0?32:31-(kh(e)/Nh|0)|0}var fi=256,mi=262144,hi=4194304;function Qa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xi(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var i=0,r=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var f=l&134217727;return f!==0?(l=f&~r,l!==0?i=Qa(l):(d&=f,d!==0?i=Qa(d):a||(a=f&~e,a!==0&&(i=Qa(a))))):(f=l&~r,f!==0?i=Qa(f):d!==0?i=Qa(d):a||(a=l&~e,a!==0&&(i=Qa(a)))),i===0?0:t!==0&&t!==i&&(t&r)===0&&(r=i&-i,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:i}function nn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Sh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ad(){var e=hi;return hi<<=1,(hi&62914560)===0&&(hi=4194304),e}function ns(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function rn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function zh(e,t,a,l,i,r){var d=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var f=e.entanglements,v=e.expirationTimes,T=e.hiddenUpdates;for(a=d&~a;0<a;){var O=31-ht(a),D=1<<O;f[O]=0,v[O]=-1;var R=T[O];if(R!==null)for(T[O]=null,O=0;O<R.length;O++){var M=R[O];M!==null&&(M.lane&=-536870913)}a&=~D}l!==0&&ld(e,l,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(d&~t))}function ld(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ht(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function nd(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-ht(a),i=1<<l;i&t|e[l]&t&&(e[l]|=t),a&=~i}}function id(e,t){var a=t&-t;return a=(a&42)!==0?1:is(a),(a&(e.suspendedLanes|t))!==0?0:a}function is(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function rs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function rd(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:Zf(e.type))}function sd(e,t){var a=V.p;try{return V.p=e,t()}finally{V.p=a}}var xa=Math.random().toString(36).slice(2),Fe="__reactFiber$"+xa,rt="__reactProps$"+xa,dl="__reactContainer$"+xa,ss="__reactEvents$"+xa,Eh="__reactListeners$"+xa,Ah="__reactHandles$"+xa,cd="__reactResources$"+xa,sn="__reactMarker$"+xa;function cs(e){delete e[Fe],delete e[rt],delete e[ss],delete e[Eh],delete e[Ah]}function ul(e){var t=e[Fe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[dl]||a[Fe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Rf(e);e!==null;){if(a=e[Fe])return a;e=Rf(e)}return t}e=a,a=e.parentNode}return null}function pl(e){if(e=e[Fe]||e[dl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function cn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function fl(e){var t=e[cd];return t||(t=e[cd]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[sn]=!0}var od=new Set,dd={};function Ka(e,t){ml(e,t),ml(e+"Capture",t)}function ml(e,t){for(dd[e]=t,e=0;e<t.length;e++)od.add(t[e])}var Th=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ud={},pd={};function Rh(e){return ts.call(pd,e)?!0:ts.call(ud,e)?!1:Th.test(e)?pd[e]=!0:(ud[e]=!0,!1)}function gi(e,t,a){if(Rh(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function bi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Jt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function wt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ch(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,r=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(d){a=""+d,r.call(this,d)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(d){a=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function os(e){if(!e._valueTracker){var t=fd(e)?"checked":"value";e._valueTracker=Ch(e,t,""+e[t])}}function md(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=fd(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function vi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Mh=/[\n"\\]/g;function St(e){return e.replace(Mh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ds(e,t,a,l,i,r,d,f){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+wt(t)):e.value!==""+wt(t)&&(e.value=""+wt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?us(e,d,wt(t)):a!=null?us(e,d,wt(a)):l!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+wt(f):e.removeAttribute("name")}function hd(e,t,a,l,i,r,d,f){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){os(e);return}a=a!=null?""+wt(a):"",t=t!=null?""+wt(t):a,f||t===e.value||(e.value=t),e.defaultValue=t}l=l??i,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=f?e.checked:!!l,e.defaultChecked=!!l,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),os(e)}function us(e,t,a){t==="number"&&vi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function hl(e,t,a,l){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&l&&(e[a].defaultSelected=!0)}else{for(a=""+wt(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,l&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function xd(e,t,a){if(t!=null&&(t=""+wt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+wt(a):""}function gd(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(o(92));if(ke(l)){if(1<l.length)throw Error(o(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=wt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),os(e)}function xl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Oh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bd(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Oh.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function vd(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var i in t)l=t[i],t.hasOwnProperty(i)&&a[i]!==l&&bd(e,i,l)}else for(var r in t)t.hasOwnProperty(r)&&bd(e,r,t[r])}function ps(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _h=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yi(e){return Dh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Wt(){}var fs=null;function ms(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gl=null,bl=null;function yd(e){var t=pl(e);if(t&&(e=t.stateNode)){var a=e[rt]||null;e:switch(e=t.stateNode,t.type){case"input":if(ds(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+St(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var i=l[rt]||null;if(!i)throw Error(o(90));ds(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&md(l)}break e;case"textarea":xd(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&hl(e,!!a.multiple,t,!1)}}}var hs=!1;function jd(e,t,a){if(hs)return e(t,a);hs=!0;try{var l=e(t);return l}finally{if(hs=!1,(gl!==null||bl!==null)&&(sr(),gl&&(t=gl,e=bl,bl=gl=null,yd(t),e)))for(t=0;t<e.length;t++)yd(e[t])}}function on(e,t){var a=e.stateNode;if(a===null)return null;var l=a[rt]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var $t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xs=!1;if($t)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){xs=!0}}),window.addEventListener("test",dn,dn),window.removeEventListener("test",dn,dn)}catch{xs=!1}var ga=null,gs=null,ji=null;function kd(){if(ji)return ji;var e,t=gs,a=t.length,l,i="value"in ga?ga.value:ga.textContent,r=i.length;for(e=0;e<a&&t[e]===i[e];e++);var d=a-e;for(l=1;l<=d&&t[a-l]===i[r-l];l++);return ji=i.slice(e,1<l?1-l:void 0)}function ki(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ni(){return!0}function Nd(){return!1}function st(e){function t(a,l,i,r,d){this._reactName=a,this._targetInst=i,this.type=l,this.nativeEvent=r,this.target=d,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(a=e[f],this[f]=a?a(r):r[f]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Ni:Nd,this.isPropagationStopped=Nd,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ni)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ni)},persist:function(){},isPersistent:Ni}),t}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wi=st(Za),un=N({},Za,{view:0,detail:0}),Uh=st(un),bs,vs,pn,Si=N({},un,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:js,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pn&&(pn&&e.type==="mousemove"?(bs=e.screenX-pn.screenX,vs=e.screenY-pn.screenY):vs=bs=0,pn=e),bs)},movementY:function(e){return"movementY"in e?e.movementY:vs}}),wd=st(Si),Bh=N({},Si,{dataTransfer:0}),Hh=st(Bh),Lh=N({},un,{relatedTarget:0}),ys=st(Lh),Yh=N({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),qh=st(Yh),Gh=N({},Za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vh=st(Gh),Qh=N({},Za,{data:0}),Sd=st(Qh),Kh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xh[e])?!!t[e]:!1}function js(){return Jh}var Wh=N({},un,{key:function(e){if(e.key){var t=Kh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ki(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:js,charCode:function(e){return e.type==="keypress"?ki(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ki(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$h=st(Wh),Fh=N({},Si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zd=st(Fh),Ph=N({},un,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:js}),Ih=st(Ph),ex=N({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),tx=st(ex),ax=N({},Si,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lx=st(ax),nx=N({},Za,{newState:0,oldState:0}),ix=st(nx),rx=[9,13,27,32],ks=$t&&"CompositionEvent"in window,fn=null;$t&&"documentMode"in document&&(fn=document.documentMode);var sx=$t&&"TextEvent"in window&&!fn,Ed=$t&&(!ks||fn&&8<fn&&11>=fn),Ad=" ",Td=!1;function Rd(e,t){switch(e){case"keyup":return rx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vl=!1;function cx(e,t){switch(e){case"compositionend":return Cd(t);case"keypress":return t.which!==32?null:(Td=!0,Ad);case"textInput":return e=t.data,e===Ad&&Td?null:e;default:return null}}function ox(e,t){if(vl)return e==="compositionend"||!ks&&Rd(e,t)?(e=kd(),ji=gs=ga=null,vl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ed&&t.locale!=="ko"?null:t.data;default:return null}}var dx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Md(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!dx[e.type]:t==="textarea"}function Od(e,t,a,l){gl?bl?bl.push(l):bl=[l]:gl=l,t=mr(t,"onChange"),0<t.length&&(a=new wi("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var mn=null,hn=null;function ux(e){xf(e,0)}function zi(e){var t=cn(e);if(md(t))return e}function _d(e,t){if(e==="change")return t}var Dd=!1;if($t){var Ns;if($t){var ws="oninput"in document;if(!ws){var Ud=document.createElement("div");Ud.setAttribute("oninput","return;"),ws=typeof Ud.oninput=="function"}Ns=ws}else Ns=!1;Dd=Ns&&(!document.documentMode||9<document.documentMode)}function Bd(){mn&&(mn.detachEvent("onpropertychange",Hd),hn=mn=null)}function Hd(e){if(e.propertyName==="value"&&zi(hn)){var t=[];Od(t,hn,e,ms(e)),jd(ux,t)}}function px(e,t,a){e==="focusin"?(Bd(),mn=t,hn=a,mn.attachEvent("onpropertychange",Hd)):e==="focusout"&&Bd()}function fx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zi(hn)}function mx(e,t){if(e==="click")return zi(t)}function hx(e,t){if(e==="input"||e==="change")return zi(t)}function xx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:xx;function xn(e,t){if(xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var i=a[l];if(!ts.call(t,i)||!xt(e[i],t[i]))return!1}return!0}function Ld(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yd(e,t){var a=Ld(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ld(a)}}function qd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=vi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=vi(e.document)}return t}function Ss(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var gx=$t&&"documentMode"in document&&11>=document.documentMode,yl=null,zs=null,gn=null,Es=!1;function Vd(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Es||yl==null||yl!==vi(l)||(l=yl,"selectionStart"in l&&Ss(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),gn&&xn(gn,l)||(gn=l,l=mr(zs,"onSelect"),0<l.length&&(t=new wi("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=yl)))}function Xa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var jl={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionrun:Xa("Transition","TransitionRun"),transitionstart:Xa("Transition","TransitionStart"),transitioncancel:Xa("Transition","TransitionCancel"),transitionend:Xa("Transition","TransitionEnd")},As={},Qd={};$t&&(Qd=document.createElement("div").style,"AnimationEvent"in window||(delete jl.animationend.animation,delete jl.animationiteration.animation,delete jl.animationstart.animation),"TransitionEvent"in window||delete jl.transitionend.transition);function Ja(e){if(As[e])return As[e];if(!jl[e])return e;var t=jl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Qd)return As[e]=t[a];return e}var Kd=Ja("animationend"),Zd=Ja("animationiteration"),Xd=Ja("animationstart"),bx=Ja("transitionrun"),vx=Ja("transitionstart"),yx=Ja("transitioncancel"),Jd=Ja("transitionend"),Wd=new Map,Ts="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ts.push("scrollEnd");function Dt(e,t){Wd.set(e,t),Ka(t,[e])}var Ei=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},zt=[],kl=0,Rs=0;function Ai(){for(var e=kl,t=Rs=kl=0;t<e;){var a=zt[t];zt[t++]=null;var l=zt[t];zt[t++]=null;var i=zt[t];zt[t++]=null;var r=zt[t];if(zt[t++]=null,l!==null&&i!==null){var d=l.pending;d===null?i.next=i:(i.next=d.next,d.next=i),l.pending=i}r!==0&&$d(a,i,r)}}function Ti(e,t,a,l){zt[kl++]=e,zt[kl++]=t,zt[kl++]=a,zt[kl++]=l,Rs|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Cs(e,t,a,l){return Ti(e,t,a,l),Ri(e)}function Wa(e,t){return Ti(e,null,null,t),Ri(e)}function $d(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var i=!1,r=e.return;r!==null;)r.childLanes|=a,l=r.alternate,l!==null&&(l.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-ht(a),e=r.hiddenUpdates,l=e[i],l===null?e[i]=[t]:l.push(t),t.lane=a|536870912),r):null}function Ri(e){if(50<Ln)throw Ln=0,Yc=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Nl={};function jx(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,a,l){return new jx(e,t,a,l)}function Ms(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ft(e,t){var a=e.alternate;return a===null?(a=gt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Fd(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ci(e,t,a,l,i,r){var d=0;if(l=e,typeof e=="function")Ms(e)&&(d=1);else if(typeof e=="string")d=zg(e,a,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case U:return e=gt(31,a,t,i),e.elementType=U,e.lanes=r,e;case G:return $a(a.children,i,r,t);case L:d=8,i|=24;break;case Y:return e=gt(12,a,t,i|2),e.elementType=Y,e.lanes=r,e;case le:return e=gt(13,a,t,i),e.elementType=le,e.lanes=r,e;case $:return e=gt(19,a,t,i),e.elementType=$,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case q:d=10;break e;case Z:d=9;break e;case X:d=11;break e;case P:d=14;break e;case je:d=16,l=null;break e}d=29,a=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=gt(d,a,t,i),t.elementType=e,t.type=l,t.lanes=r,t}function $a(e,t,a,l){return e=gt(7,e,l,t),e.lanes=a,e}function Os(e,t,a){return e=gt(6,e,null,t),e.lanes=a,e}function Pd(e){var t=gt(18,null,null,0);return t.stateNode=e,t}function _s(e,t,a){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Id=new WeakMap;function Et(e,t){if(typeof e=="object"&&e!==null){var a=Id.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Po(t)},Id.set(e,t),t)}return{value:e,source:t,stack:Po(t)}}var wl=[],Sl=0,Mi=null,bn=0,At=[],Tt=0,ba=null,Yt=1,qt="";function Pt(e,t){wl[Sl++]=bn,wl[Sl++]=Mi,Mi=e,bn=t}function eu(e,t,a){At[Tt++]=Yt,At[Tt++]=qt,At[Tt++]=ba,ba=e;var l=Yt;e=qt;var i=32-ht(l)-1;l&=~(1<<i),a+=1;var r=32-ht(t)+i;if(30<r){var d=i-i%5;r=(l&(1<<d)-1).toString(32),l>>=d,i-=d,Yt=1<<32-ht(t)+i|a<<i|l,qt=r+e}else Yt=1<<r|a<<i|l,qt=e}function Ds(e){e.return!==null&&(Pt(e,1),eu(e,1,0))}function Us(e){for(;e===Mi;)Mi=wl[--Sl],wl[Sl]=null,bn=wl[--Sl],wl[Sl]=null;for(;e===ba;)ba=At[--Tt],At[Tt]=null,qt=At[--Tt],At[Tt]=null,Yt=At[--Tt],At[Tt]=null}function tu(e,t){At[Tt++]=Yt,At[Tt++]=qt,At[Tt++]=ba,Yt=t.id,qt=t.overflow,ba=e}var Pe=null,Me=null,ge=!1,va=null,Rt=!1,Bs=Error(o(519));function ya(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw vn(Et(t,e)),Bs}function au(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Fe]=e,t[rt]=l,a){case"dialog":pe("cancel",t),pe("close",t);break;case"iframe":case"object":case"embed":pe("load",t);break;case"video":case"audio":for(a=0;a<qn.length;a++)pe(qn[a],t);break;case"source":pe("error",t);break;case"img":case"image":case"link":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"input":pe("invalid",t),hd(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":pe("invalid",t);break;case"textarea":pe("invalid",t),gd(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||yf(t.textContent,a)?(l.popover!=null&&(pe("beforetoggle",t),pe("toggle",t)),l.onScroll!=null&&pe("scroll",t),l.onScrollEnd!=null&&pe("scrollend",t),l.onClick!=null&&(t.onclick=Wt),t=!0):t=!1,t||ya(e,!0)}function lu(e){for(Pe=e.return;Pe;)switch(Pe.tag){case 5:case 31:case 13:Rt=!1;return;case 27:case 3:Rt=!0;return;default:Pe=Pe.return}}function zl(e){if(e!==Pe)return!1;if(!ge)return lu(e),ge=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||to(e.type,e.memoizedProps)),a=!a),a&&Me&&ya(e),lu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Me=Tf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Me=Tf(e)}else t===27?(t=Me,_a(e.type)?(e=ro,ro=null,Me=e):Me=t):Me=Pe?Mt(e.stateNode.nextSibling):null;return!0}function Fa(){Me=Pe=null,ge=!1}function Hs(){var e=va;return e!==null&&(ut===null?ut=e:ut.push.apply(ut,e),va=null),e}function vn(e){va===null?va=[e]:va.push(e)}var Ls=k(null),Pa=null,It=null;function ja(e,t,a){H(Ls,t._currentValue),t._currentValue=a}function ea(e){e._currentValue=Ls.current,z(Ls)}function Ys(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function qs(e,t,a,l){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var d=i.child;r=r.firstContext;e:for(;r!==null;){var f=r;r=i;for(var v=0;v<t.length;v++)if(f.context===t[v]){r.lanes|=a,f=r.alternate,f!==null&&(f.lanes|=a),Ys(r.return,a,e),l||(d=null);break e}r=f.next}}else if(i.tag===18){if(d=i.return,d===null)throw Error(o(341));d.lanes|=a,r=d.alternate,r!==null&&(r.lanes|=a),Ys(d,a,e),d=null}else d=i.child;if(d!==null)d.return=i;else for(d=i;d!==null;){if(d===e){d=null;break}if(i=d.sibling,i!==null){i.return=d.return,d=i;break}d=d.return}i=d}}function El(e,t,a,l){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var d=i.alternate;if(d===null)throw Error(o(387));if(d=d.memoizedProps,d!==null){var f=i.type;xt(i.pendingProps.value,d.value)||(e!==null?e.push(f):e=[f])}}else if(i===xe.current){if(d=i.alternate,d===null)throw Error(o(387));d.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Zn):e=[Zn])}i=i.return}e!==null&&qs(t,e,a,l),t.flags|=262144}function Oi(e){for(e=e.firstContext;e!==null;){if(!xt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ia(e){Pa=e,It=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ie(e){return nu(Pa,e)}function _i(e,t){return Pa===null&&Ia(e),nu(e,t)}function nu(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},It===null){if(e===null)throw Error(o(308));It=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else It=It.next=t;return a}var kx=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Nx=s.unstable_scheduleCallback,wx=s.unstable_NormalPriority,Ge={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gs(){return{controller:new kx,data:new Map,refCount:0}}function yn(e){e.refCount--,e.refCount===0&&Nx(wx,function(){e.controller.abort()})}var jn=null,Vs=0,Al=0,Tl=null;function Sx(e,t){if(jn===null){var a=jn=[];Vs=0,Al=Zc(),Tl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Vs++,t.then(iu,iu),t}function iu(){if(--Vs===0&&jn!==null){Tl!==null&&(Tl.status="fulfilled");var e=jn;jn=null,Al=0,Tl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function zx(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(l.status="rejected",l.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),l}var ru=C.S;C.S=function(e,t){Vp=ft(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Sx(e,t),ru!==null&&ru(e,t)};var el=k(null);function Qs(){var e=el.current;return e!==null?e:Te.pooledCache}function Di(e,t){t===null?H(el,el.current):H(el,t.pool)}function su(){var e=Qs();return e===null?null:{parent:Ge._currentValue,pool:e}}var Rl=Error(o(460)),Ks=Error(o(474)),Ui=Error(o(542)),Bi={then:function(){}};function cu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ou(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Wt,Wt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uu(e),e;default:if(typeof t.status=="string")t.then(Wt,Wt);else{if(e=Te,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=l}},function(l){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uu(e),e}throw al=t,Rl}}function tl(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(al=a,Rl):a}}var al=null;function du(){if(al===null)throw Error(o(459));var e=al;return al=null,e}function uu(e){if(e===Rl||e===Ui)throw Error(o(483))}var Cl=null,kn=0;function Hi(e){var t=kn;return kn+=1,Cl===null&&(Cl=[]),ou(Cl,e,t)}function Nn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Li(e,t){throw t.$$typeof===B?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function pu(e){function t(w,j){if(e){var A=w.deletions;A===null?(w.deletions=[j],w.flags|=16):A.push(j)}}function a(w,j){if(!e)return null;for(;j!==null;)t(w,j),j=j.sibling;return null}function l(w){for(var j=new Map;w!==null;)w.key!==null?j.set(w.key,w):j.set(w.index,w),w=w.sibling;return j}function i(w,j){return w=Ft(w,j),w.index=0,w.sibling=null,w}function r(w,j,A){return w.index=A,e?(A=w.alternate,A!==null?(A=A.index,A<j?(w.flags|=67108866,j):A):(w.flags|=67108866,j)):(w.flags|=1048576,j)}function d(w){return e&&w.alternate===null&&(w.flags|=67108866),w}function f(w,j,A,_){return j===null||j.tag!==6?(j=Os(A,w.mode,_),j.return=w,j):(j=i(j,A),j.return=w,j)}function v(w,j,A,_){var ee=A.type;return ee===G?O(w,j,A.props.children,_,A.key):j!==null&&(j.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===je&&tl(ee)===j.type)?(j=i(j,A.props),Nn(j,A),j.return=w,j):(j=Ci(A.type,A.key,A.props,null,w.mode,_),Nn(j,A),j.return=w,j)}function T(w,j,A,_){return j===null||j.tag!==4||j.stateNode.containerInfo!==A.containerInfo||j.stateNode.implementation!==A.implementation?(j=_s(A,w.mode,_),j.return=w,j):(j=i(j,A.children||[]),j.return=w,j)}function O(w,j,A,_,ee){return j===null||j.tag!==7?(j=$a(A,w.mode,_,ee),j.return=w,j):(j=i(j,A),j.return=w,j)}function D(w,j,A){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Os(""+j,w.mode,A),j.return=w,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case K:return A=Ci(j.type,j.key,j.props,null,w.mode,A),Nn(A,j),A.return=w,A;case S:return j=_s(j,w.mode,A),j.return=w,j;case je:return j=tl(j),D(w,j,A)}if(ke(j)||W(j))return j=$a(j,w.mode,A,null),j.return=w,j;if(typeof j.then=="function")return D(w,Hi(j),A);if(j.$$typeof===q)return D(w,_i(w,j),A);Li(w,j)}return null}function R(w,j,A,_){var ee=j!==null?j.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return ee!==null?null:f(w,j,""+A,_);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case K:return A.key===ee?v(w,j,A,_):null;case S:return A.key===ee?T(w,j,A,_):null;case je:return A=tl(A),R(w,j,A,_)}if(ke(A)||W(A))return ee!==null?null:O(w,j,A,_,null);if(typeof A.then=="function")return R(w,j,Hi(A),_);if(A.$$typeof===q)return R(w,j,_i(w,A),_);Li(w,A)}return null}function M(w,j,A,_,ee){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return w=w.get(A)||null,f(j,w,""+_,ee);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case K:return w=w.get(_.key===null?A:_.key)||null,v(j,w,_,ee);case S:return w=w.get(_.key===null?A:_.key)||null,T(j,w,_,ee);case je:return _=tl(_),M(w,j,A,_,ee)}if(ke(_)||W(_))return w=w.get(A)||null,O(j,w,_,ee,null);if(typeof _.then=="function")return M(w,j,A,Hi(_),ee);if(_.$$typeof===q)return M(w,j,A,_i(j,_),ee);Li(j,_)}return null}function J(w,j,A,_){for(var ee=null,ve=null,F=j,de=j=0,he=null;F!==null&&de<A.length;de++){F.index>de?(he=F,F=null):he=F.sibling;var ye=R(w,F,A[de],_);if(ye===null){F===null&&(F=he);break}e&&F&&ye.alternate===null&&t(w,F),j=r(ye,j,de),ve===null?ee=ye:ve.sibling=ye,ve=ye,F=he}if(de===A.length)return a(w,F),ge&&Pt(w,de),ee;if(F===null){for(;de<A.length;de++)F=D(w,A[de],_),F!==null&&(j=r(F,j,de),ve===null?ee=F:ve.sibling=F,ve=F);return ge&&Pt(w,de),ee}for(F=l(F);de<A.length;de++)he=M(F,w,de,A[de],_),he!==null&&(e&&he.alternate!==null&&F.delete(he.key===null?de:he.key),j=r(he,j,de),ve===null?ee=he:ve.sibling=he,ve=he);return e&&F.forEach(function(La){return t(w,La)}),ge&&Pt(w,de),ee}function te(w,j,A,_){if(A==null)throw Error(o(151));for(var ee=null,ve=null,F=j,de=j=0,he=null,ye=A.next();F!==null&&!ye.done;de++,ye=A.next()){F.index>de?(he=F,F=null):he=F.sibling;var La=R(w,F,ye.value,_);if(La===null){F===null&&(F=he);break}e&&F&&La.alternate===null&&t(w,F),j=r(La,j,de),ve===null?ee=La:ve.sibling=La,ve=La,F=he}if(ye.done)return a(w,F),ge&&Pt(w,de),ee;if(F===null){for(;!ye.done;de++,ye=A.next())ye=D(w,ye.value,_),ye!==null&&(j=r(ye,j,de),ve===null?ee=ye:ve.sibling=ye,ve=ye);return ge&&Pt(w,de),ee}for(F=l(F);!ye.done;de++,ye=A.next())ye=M(F,w,de,ye.value,_),ye!==null&&(e&&ye.alternate!==null&&F.delete(ye.key===null?de:ye.key),j=r(ye,j,de),ve===null?ee=ye:ve.sibling=ye,ve=ye);return e&&F.forEach(function(Bg){return t(w,Bg)}),ge&&Pt(w,de),ee}function Ae(w,j,A,_){if(typeof A=="object"&&A!==null&&A.type===G&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case K:e:{for(var ee=A.key;j!==null;){if(j.key===ee){if(ee=A.type,ee===G){if(j.tag===7){a(w,j.sibling),_=i(j,A.props.children),_.return=w,w=_;break e}}else if(j.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===je&&tl(ee)===j.type){a(w,j.sibling),_=i(j,A.props),Nn(_,A),_.return=w,w=_;break e}a(w,j);break}else t(w,j);j=j.sibling}A.type===G?(_=$a(A.props.children,w.mode,_,A.key),_.return=w,w=_):(_=Ci(A.type,A.key,A.props,null,w.mode,_),Nn(_,A),_.return=w,w=_)}return d(w);case S:e:{for(ee=A.key;j!==null;){if(j.key===ee)if(j.tag===4&&j.stateNode.containerInfo===A.containerInfo&&j.stateNode.implementation===A.implementation){a(w,j.sibling),_=i(j,A.children||[]),_.return=w,w=_;break e}else{a(w,j);break}else t(w,j);j=j.sibling}_=_s(A,w.mode,_),_.return=w,w=_}return d(w);case je:return A=tl(A),Ae(w,j,A,_)}if(ke(A))return J(w,j,A,_);if(W(A)){if(ee=W(A),typeof ee!="function")throw Error(o(150));return A=ee.call(A),te(w,j,A,_)}if(typeof A.then=="function")return Ae(w,j,Hi(A),_);if(A.$$typeof===q)return Ae(w,j,_i(w,A),_);Li(w,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,j!==null&&j.tag===6?(a(w,j.sibling),_=i(j,A),_.return=w,w=_):(a(w,j),_=Os(A,w.mode,_),_.return=w,w=_),d(w)):a(w,j)}return function(w,j,A,_){try{kn=0;var ee=Ae(w,j,A,_);return Cl=null,ee}catch(F){if(F===Rl||F===Ui)throw F;var ve=gt(29,F,null,w.mode);return ve.lanes=_,ve.return=w,ve}}}var ll=pu(!0),fu=pu(!1),ka=!1;function Zs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function wa(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ne&2)!==0){var i=l.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),l.pending=t,t=Ri(e),$d(e,null,a),t}return Ti(e,l,t,a),Ri(e)}function wn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,nd(e,a)}}function Js(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var i=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var d={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?i=r=d:r=r.next=d,a=a.next}while(a!==null);r===null?i=r=t:r=r.next=t}else i=r=t;a={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Ws=!1;function Sn(){if(Ws){var e=Tl;if(e!==null)throw e}}function zn(e,t,a,l){Ws=!1;var i=e.updateQueue;ka=!1;var r=i.firstBaseUpdate,d=i.lastBaseUpdate,f=i.shared.pending;if(f!==null){i.shared.pending=null;var v=f,T=v.next;v.next=null,d===null?r=T:d.next=T,d=v;var O=e.alternate;O!==null&&(O=O.updateQueue,f=O.lastBaseUpdate,f!==d&&(f===null?O.firstBaseUpdate=T:f.next=T,O.lastBaseUpdate=v))}if(r!==null){var D=i.baseState;d=0,O=T=v=null,f=r;do{var R=f.lane&-536870913,M=R!==f.lane;if(M?(me&R)===R:(l&R)===R){R!==0&&R===Al&&(Ws=!0),O!==null&&(O=O.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var J=e,te=f;R=t;var Ae=a;switch(te.tag){case 1:if(J=te.payload,typeof J=="function"){D=J.call(Ae,D,R);break e}D=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=te.payload,R=typeof J=="function"?J.call(Ae,D,R):J,R==null)break e;D=N({},D,R);break e;case 2:ka=!0}}R=f.callback,R!==null&&(e.flags|=64,M&&(e.flags|=8192),M=i.callbacks,M===null?i.callbacks=[R]:M.push(R))}else M={lane:R,tag:f.tag,payload:f.payload,callback:f.callback,next:null},O===null?(T=O=M,v=D):O=O.next=M,d|=R;if(f=f.next,f===null){if(f=i.shared.pending,f===null)break;M=f,f=M.next,M.next=null,i.lastBaseUpdate=M,i.shared.pending=null}}while(!0);O===null&&(v=D),i.baseState=v,i.firstBaseUpdate=T,i.lastBaseUpdate=O,r===null&&(i.shared.lanes=0),Ta|=d,e.lanes=d,e.memoizedState=D}}function mu(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function hu(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)mu(a[e],t)}var Ml=k(null),Yi=k(0);function xu(e,t){e=oa,H(Yi,e),H(Ml,t),oa=e|t.baseLanes}function $s(){H(Yi,oa),H(Ml,Ml.current)}function Fs(){oa=Yi.current,z(Ml),z(Yi)}var bt=k(null),Ct=null;function Sa(e){var t=e.alternate;H(He,He.current&1),H(bt,e),Ct===null&&(t===null||Ml.current!==null||t.memoizedState!==null)&&(Ct=e)}function Ps(e){H(He,He.current),H(bt,e),Ct===null&&(Ct=e)}function gu(e){e.tag===22?(H(He,He.current),H(bt,e),Ct===null&&(Ct=e)):za()}function za(){H(He,He.current),H(bt,bt.current)}function vt(e){z(bt),Ct===e&&(Ct=null),z(He)}var He=k(0);function qi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||no(a)||io(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ta=0,ce=null,ze=null,Ve=null,Gi=!1,Ol=!1,nl=!1,Vi=0,En=0,_l=null,Ex=0;function Ue(){throw Error(o(321))}function Is(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!xt(e[a],t[a]))return!1;return!0}function ec(e,t,a,l,i,r){return ta=r,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,C.H=e===null||e.memoizedState===null?ep:hc,nl=!1,r=a(l,i),nl=!1,Ol&&(r=vu(t,a,l,i)),bu(e),r}function bu(e){C.H=Rn;var t=ze!==null&&ze.next!==null;if(ta=0,Ve=ze=ce=null,Gi=!1,En=0,_l=null,t)throw Error(o(300));e===null||Qe||(e=e.dependencies,e!==null&&Oi(e)&&(Qe=!0))}function vu(e,t,a,l){ce=e;var i=0;do{if(Ol&&(_l=null),En=0,Ol=!1,25<=i)throw Error(o(301));if(i+=1,Ve=ze=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}C.H=tp,r=t(a,l)}while(Ol);return r}function Ax(){var e=C.H,t=e.useState()[0];return t=typeof t.then=="function"?An(t):t,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(ce.flags|=1024),t}function tc(){var e=Vi!==0;return Vi=0,e}function ac(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function lc(e){if(Gi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Gi=!1}ta=0,Ve=ze=ce=null,Ol=!1,En=Vi=0,_l=null}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?ce.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function Le(){if(ze===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=Ve===null?ce.memoizedState:Ve.next;if(t!==null)Ve=t,ze=e;else{if(e===null)throw ce.alternate===null?Error(o(467)):Error(o(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Ve===null?ce.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function Qi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function An(e){var t=En;return En+=1,_l===null&&(_l=[]),e=ou(_l,e,t),t=ce,(Ve===null?t.memoizedState:Ve.next)===null&&(t=t.alternate,C.H=t===null||t.memoizedState===null?ep:hc),e}function Ki(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return An(e);if(e.$$typeof===q)return Ie(e)}throw Error(o(438,String(e)))}function nc(e){var t=null,a=ce.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ce.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Qi(),ce.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=ae;return t.index++,a}function aa(e,t){return typeof t=="function"?t(e):t}function Zi(e){var t=Le();return ic(t,ze,e)}function ic(e,t,a){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=a;var i=e.baseQueue,r=l.pending;if(r!==null){if(i!==null){var d=i.next;i.next=r.next,r.next=d}t.baseQueue=i=r,l.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var f=d=null,v=null,T=t,O=!1;do{var D=T.lane&-536870913;if(D!==T.lane?(me&D)===D:(ta&D)===D){var R=T.revertLane;if(R===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),D===Al&&(O=!0);else if((ta&R)===R){T=T.next,R===Al&&(O=!0);continue}else D={lane:0,revertLane:T.revertLane,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},v===null?(f=v=D,d=r):v=v.next=D,ce.lanes|=R,Ta|=R;D=T.action,nl&&a(r,D),r=T.hasEagerState?T.eagerState:a(r,D)}else R={lane:D,revertLane:T.revertLane,gesture:T.gesture,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},v===null?(f=v=R,d=r):v=v.next=R,ce.lanes|=D,Ta|=D;T=T.next}while(T!==null&&T!==t);if(v===null?d=r:v.next=f,!xt(r,e.memoizedState)&&(Qe=!0,O&&(a=Tl,a!==null)))throw a;e.memoizedState=r,e.baseState=d,e.baseQueue=v,l.lastRenderedState=r}return i===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function rc(e){var t=Le(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var l=a.dispatch,i=a.pending,r=t.memoizedState;if(i!==null){a.pending=null;var d=i=i.next;do r=e(r,d.action),d=d.next;while(d!==i);xt(r,t.memoizedState)||(Qe=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,l]}function yu(e,t,a){var l=ce,i=Le(),r=ge;if(r){if(a===void 0)throw Error(o(407));a=a()}else a=t();var d=!xt((ze||i).memoizedState,a);if(d&&(i.memoizedState=a,Qe=!0),i=i.queue,oc(Nu.bind(null,l,i,e),[e]),i.getSnapshot!==t||d||Ve!==null&&Ve.memoizedState.tag&1){if(l.flags|=2048,Dl(9,{destroy:void 0},ku.bind(null,l,i,a,t),null),Te===null)throw Error(o(349));r||(ta&127)!==0||ju(l,t,a)}return a}function ju(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ce.updateQueue,t===null?(t=Qi(),ce.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function ku(e,t,a,l){t.value=a,t.getSnapshot=l,wu(t)&&Su(e)}function Nu(e,t,a){return a(function(){wu(t)&&Su(e)})}function wu(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!xt(e,a)}catch{return!0}}function Su(e){var t=Wa(e,2);t!==null&&pt(t,e,2)}function sc(e){var t=lt();if(typeof e=="function"){var a=e;if(e=a(),nl){ha(!0);try{a()}finally{ha(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:e},t}function zu(e,t,a,l){return e.baseState=a,ic(e,ze,typeof l=="function"?l:aa)}function Tx(e,t,a,l,i){if(Wi(e))throw Error(o(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){r.listeners.push(d)}};C.T!==null?a(!0):r.isTransition=!1,l(r),a=t.pending,a===null?(r.next=t.pending=r,Eu(t,r)):(r.next=a.next,t.pending=a.next=r)}}function Eu(e,t){var a=t.action,l=t.payload,i=e.state;if(t.isTransition){var r=C.T,d={};C.T=d;try{var f=a(i,l),v=C.S;v!==null&&v(d,f),Au(e,t,f)}catch(T){cc(e,t,T)}finally{r!==null&&d.types!==null&&(r.types=d.types),C.T=r}}else try{r=a(i,l),Au(e,t,r)}catch(T){cc(e,t,T)}}function Au(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Tu(e,t,l)},function(l){return cc(e,t,l)}):Tu(e,t,a)}function Tu(e,t,a){t.status="fulfilled",t.value=a,Ru(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Eu(e,a)))}function cc(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Ru(t),t=t.next;while(t!==l)}e.action=null}function Ru(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Cu(e,t){return t}function Mu(e,t){if(ge){var a=Te.formState;if(a!==null){e:{var l=ce;if(ge){if(Me){t:{for(var i=Me,r=Rt;i.nodeType!==8;){if(!r){i=null;break t}if(i=Mt(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){Me=Mt(i.nextSibling),l=i.data==="F!";break e}}ya(l)}l=!1}l&&(t=a[0])}}return a=lt(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cu,lastRenderedState:t},a.queue=l,a=Fu.bind(null,ce,l),l.dispatch=a,l=sc(!1),r=mc.bind(null,ce,!1,l.queue),l=lt(),i={state:t,dispatch:null,action:e,pending:null},l.queue=i,a=Tx.bind(null,ce,i,r,a),i.dispatch=a,l.memoizedState=e,[t,a,!1]}function Ou(e){var t=Le();return _u(t,ze,e)}function _u(e,t,a){if(t=ic(e,t,Cu)[0],e=Zi(aa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=An(t)}catch(d){throw d===Rl?Ui:d}else l=t;t=Le();var i=t.queue,r=i.dispatch;return a!==t.memoizedState&&(ce.flags|=2048,Dl(9,{destroy:void 0},Rx.bind(null,i,a),null)),[l,r,e]}function Rx(e,t){e.action=t}function Du(e){var t=Le(),a=ze;if(a!==null)return _u(t,a,e);Le(),t=t.memoizedState,a=Le();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Dl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ce.updateQueue,t===null&&(t=Qi(),ce.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Uu(){return Le().memoizedState}function Xi(e,t,a,l){var i=lt();ce.flags|=e,i.memoizedState=Dl(1|t,{destroy:void 0},a,l===void 0?null:l)}function Ji(e,t,a,l){var i=Le();l=l===void 0?null:l;var r=i.memoizedState.inst;ze!==null&&l!==null&&Is(l,ze.memoizedState.deps)?i.memoizedState=Dl(t,r,a,l):(ce.flags|=e,i.memoizedState=Dl(1|t,r,a,l))}function Bu(e,t){Xi(8390656,8,e,t)}function oc(e,t){Ji(2048,8,e,t)}function Cx(e){ce.flags|=4;var t=ce.updateQueue;if(t===null)t=Qi(),ce.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Hu(e){var t=Le().memoizedState;return Cx({ref:t,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function Lu(e,t){return Ji(4,2,e,t)}function Yu(e,t){return Ji(4,4,e,t)}function qu(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gu(e,t,a){a=a!=null?a.concat([e]):null,Ji(4,4,qu.bind(null,t,e),a)}function dc(){}function Vu(e,t){var a=Le();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Is(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Qu(e,t){var a=Le();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Is(t,l[1]))return l[0];if(l=e(),nl){ha(!0);try{e()}finally{ha(!1)}}return a.memoizedState=[l,t],l}function uc(e,t,a){return a===void 0||(ta&1073741824)!==0&&(me&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Kp(),ce.lanes|=e,Ta|=e,a)}function Ku(e,t,a,l){return xt(a,t)?a:Ml.current!==null?(e=uc(e,a,l),xt(e,t)||(Qe=!0),e):(ta&42)===0||(ta&1073741824)!==0&&(me&261930)===0?(Qe=!0,e.memoizedState=a):(e=Kp(),ce.lanes|=e,Ta|=e,t)}function Zu(e,t,a,l,i){var r=V.p;V.p=r!==0&&8>r?r:8;var d=C.T,f={};C.T=f,mc(e,!1,t,a);try{var v=i(),T=C.S;if(T!==null&&T(f,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var O=zx(v,l);Tn(e,t,O,kt(e))}else Tn(e,t,l,kt(e))}catch(D){Tn(e,t,{then:function(){},status:"rejected",reason:D},kt())}finally{V.p=r,d!==null&&f.types!==null&&(d.types=f.types),C.T=d}}function Mx(){}function pc(e,t,a,l){if(e.tag!==5)throw Error(o(476));var i=Xu(e).queue;Zu(e,i,t,I,a===null?Mx:function(){return Ju(e),a(l)})}function Xu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:I},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ju(e){var t=Xu(e);t.next===null&&(t=e.alternate.memoizedState),Tn(e,t.next.queue,{},kt())}function fc(){return Ie(Zn)}function Wu(){return Le().memoizedState}function $u(){return Le().memoizedState}function Ox(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=kt();e=Na(a);var l=wa(t,e,a);l!==null&&(pt(l,t,a),wn(l,t,a)),t={cache:Gs()},e.payload=t;return}t=t.return}}function _x(e,t,a){var l=kt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Wi(e)?Pu(t,a):(a=Cs(e,t,a,l),a!==null&&(pt(a,e,l),Iu(a,t,l)))}function Fu(e,t,a){var l=kt();Tn(e,t,a,l)}function Tn(e,t,a,l){var i={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Wi(e))Pu(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var d=t.lastRenderedState,f=r(d,a);if(i.hasEagerState=!0,i.eagerState=f,xt(f,d))return Ti(e,t,i,0),Te===null&&Ai(),!1}catch{}if(a=Cs(e,t,i,l),a!==null)return pt(a,e,l),Iu(a,t,l),!0}return!1}function mc(e,t,a,l){if(l={lane:2,revertLane:Zc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Wi(e)){if(t)throw Error(o(479))}else t=Cs(e,a,l,2),t!==null&&pt(t,e,2)}function Wi(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function Pu(e,t){Ol=Gi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Iu(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,nd(e,a)}}var Rn={readContext:Ie,use:Ki,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue,useHostTransitionStatus:Ue,useFormState:Ue,useActionState:Ue,useOptimistic:Ue,useMemoCache:Ue,useCacheRefresh:Ue};Rn.useEffectEvent=Ue;var ep={readContext:Ie,use:Ki,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:Bu,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Xi(4194308,4,qu.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Xi(4194308,4,e,t)},useInsertionEffect:function(e,t){Xi(4,2,e,t)},useMemo:function(e,t){var a=lt();t=t===void 0?null:t;var l=e();if(nl){ha(!0);try{e()}finally{ha(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=lt();if(a!==void 0){var i=a(t);if(nl){ha(!0);try{a(t)}finally{ha(!1)}}}else i=t;return l.memoizedState=l.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},l.queue=e,e=e.dispatch=_x.bind(null,ce,e),[l.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:function(e){e=sc(e);var t=e.queue,a=Fu.bind(null,ce,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:dc,useDeferredValue:function(e,t){var a=lt();return uc(a,e,t)},useTransition:function(){var e=sc(!1);return e=Zu.bind(null,ce,e.queue,!0,!1),lt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ce,i=lt();if(ge){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),Te===null)throw Error(o(349));(me&127)!==0||ju(l,t,a)}i.memoizedState=a;var r={value:a,getSnapshot:t};return i.queue=r,Bu(Nu.bind(null,l,r,e),[e]),l.flags|=2048,Dl(9,{destroy:void 0},ku.bind(null,l,r,a,t),null),a},useId:function(){var e=lt(),t=Te.identifierPrefix;if(ge){var a=qt,l=Yt;a=(l&~(1<<32-ht(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Vi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Ex++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:fc,useFormState:Mu,useActionState:Mu,useOptimistic:function(e){var t=lt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=mc.bind(null,ce,!0,a),a.dispatch=t,[e,t]},useMemoCache:nc,useCacheRefresh:function(){return lt().memoizedState=Ox.bind(null,ce)},useEffectEvent:function(e){var t=lt(),a={impl:e};return t.memoizedState=a,function(){if((Ne&2)!==0)throw Error(o(440));return a.impl.apply(void 0,arguments)}}},hc={readContext:Ie,use:Ki,useCallback:Vu,useContext:Ie,useEffect:oc,useImperativeHandle:Gu,useInsertionEffect:Lu,useLayoutEffect:Yu,useMemo:Qu,useReducer:Zi,useRef:Uu,useState:function(){return Zi(aa)},useDebugValue:dc,useDeferredValue:function(e,t){var a=Le();return Ku(a,ze.memoizedState,e,t)},useTransition:function(){var e=Zi(aa)[0],t=Le().memoizedState;return[typeof e=="boolean"?e:An(e),t]},useSyncExternalStore:yu,useId:Wu,useHostTransitionStatus:fc,useFormState:Ou,useActionState:Ou,useOptimistic:function(e,t){var a=Le();return zu(a,ze,e,t)},useMemoCache:nc,useCacheRefresh:$u};hc.useEffectEvent=Hu;var tp={readContext:Ie,use:Ki,useCallback:Vu,useContext:Ie,useEffect:oc,useImperativeHandle:Gu,useInsertionEffect:Lu,useLayoutEffect:Yu,useMemo:Qu,useReducer:rc,useRef:Uu,useState:function(){return rc(aa)},useDebugValue:dc,useDeferredValue:function(e,t){var a=Le();return ze===null?uc(a,e,t):Ku(a,ze.memoizedState,e,t)},useTransition:function(){var e=rc(aa)[0],t=Le().memoizedState;return[typeof e=="boolean"?e:An(e),t]},useSyncExternalStore:yu,useId:Wu,useHostTransitionStatus:fc,useFormState:Du,useActionState:Du,useOptimistic:function(e,t){var a=Le();return ze!==null?zu(a,ze,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:nc,useCacheRefresh:$u};tp.useEffectEvent=Hu;function xc(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:N({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var gc={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=kt(),i=Na(l);i.payload=t,a!=null&&(i.callback=a),t=wa(e,i,l),t!==null&&(pt(t,e,l),wn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=kt(),i=Na(l);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=wa(e,i,l),t!==null&&(pt(t,e,l),wn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=kt(),l=Na(a);l.tag=2,t!=null&&(l.callback=t),t=wa(e,l,a),t!==null&&(pt(t,e,a),wn(t,e,a))}};function ap(e,t,a,l,i,r,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,r,d):t.prototype&&t.prototype.isPureReactComponent?!xn(a,l)||!xn(i,r):!0}function lp(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&gc.enqueueReplaceState(t,t.state,null)}function il(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=N({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function np(e){Ei(e)}function ip(e){console.error(e)}function rp(e){Ei(e)}function $i(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function sp(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function bc(e,t,a){return a=Na(a),a.tag=3,a.payload={element:null},a.callback=function(){$i(e,t)},a}function cp(e){return e=Na(e),e.tag=3,e}function op(e,t,a,l){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var r=l.value;e.payload=function(){return i(r)},e.callback=function(){sp(t,a,l)}}var d=a.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){sp(t,a,l),typeof i!="function"&&(Ra===null?Ra=new Set([this]):Ra.add(this));var f=l.stack;this.componentDidCatch(l.value,{componentStack:f!==null?f:""})})}function Dx(e,t,a,l,i){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&El(t,a,i,!0),a=bt.current,a!==null){switch(a.tag){case 31:case 13:return Ct===null?cr():a.alternate===null&&Be===0&&(Be=3),a.flags&=-257,a.flags|=65536,a.lanes=i,l===Bi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Vc(e,l,i)),!1;case 22:return a.flags|=65536,l===Bi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Vc(e,l,i)),!1}throw Error(o(435,a.tag))}return Vc(e,l,i),cr(),!1}if(ge)return t=bt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,l!==Bs&&(e=Error(o(422),{cause:l}),vn(Et(e,a)))):(l!==Bs&&(t=Error(o(423),{cause:l}),vn(Et(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,l=Et(l,a),i=bc(e.stateNode,l,i),Js(e,i),Be!==4&&(Be=2)),!1;var r=Error(o(520),{cause:l});if(r=Et(r,a),Hn===null?Hn=[r]:Hn.push(r),Be!==4&&(Be=2),t===null)return!0;l=Et(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=bc(a.stateNode,l,e),Js(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Ra===null||!Ra.has(r))))return a.flags|=65536,i&=-i,a.lanes|=i,i=cp(i),op(i,e,a,l),Js(a,i),!1}a=a.return}while(a!==null);return!1}var vc=Error(o(461)),Qe=!1;function et(e,t,a,l){t.child=e===null?fu(t,null,a,l):ll(t,e.child,a,l)}function dp(e,t,a,l,i){a=a.render;var r=t.ref;if("ref"in l){var d={};for(var f in l)f!=="ref"&&(d[f]=l[f])}else d=l;return Ia(t),l=ec(e,t,a,d,r,i),f=tc(),e!==null&&!Qe?(ac(e,t,i),la(e,t,i)):(ge&&f&&Ds(t),t.flags|=1,et(e,t,l,i),t.child)}function up(e,t,a,l,i){if(e===null){var r=a.type;return typeof r=="function"&&!Ms(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,pp(e,t,r,l,i)):(e=Ci(a.type,null,l,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Ec(e,i)){var d=r.memoizedProps;if(a=a.compare,a=a!==null?a:xn,a(d,l)&&e.ref===t.ref)return la(e,t,i)}return t.flags|=1,e=Ft(r,l),e.ref=t.ref,e.return=t,t.child=e}function pp(e,t,a,l,i){if(e!==null){var r=e.memoizedProps;if(xn(r,l)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=l=r,Ec(e,i))(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,la(e,t,i)}return yc(e,t,a,l,i)}function fp(e,t,a,l){var i=l.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(l=t.child=e.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;l=i&~r}else l=0,t.child=null;return mp(e,t,r,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Di(t,r!==null?r.cachePool:null),r!==null?xu(t,r):$s(),gu(t);else return l=t.lanes=536870912,mp(e,t,r!==null?r.baseLanes|a:a,a,l)}else r!==null?(Di(t,r.cachePool),xu(t,r),za(),t.memoizedState=null):(e!==null&&Di(t,null),$s(),za());return et(e,t,i,a),t.child}function Cn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function mp(e,t,a,l,i){var r=Qs();return r=r===null?null:{parent:Ge._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&Di(t,null),$s(),gu(t),e!==null&&El(e,t,l,!0),t.childLanes=i,null}function Fi(e,t){return t=Ii({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function hp(e,t,a){return ll(t,e.child,null,a),e=Fi(t,t.pendingProps),e.flags|=2,vt(t),t.memoizedState=null,e}function Ux(e,t,a){var l=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ge){if(l.mode==="hidden")return e=Fi(t,l),t.lanes=536870912,Cn(null,e);if(Ps(t),(e=Me)?(e=Af(e,Rt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ba!==null?{id:Yt,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},a=Pd(e),a.return=t,t.child=a,Pe=t,Me=null)):e=null,e===null)throw ya(t);return t.lanes=536870912,null}return Fi(t,l)}var r=e.memoizedState;if(r!==null){var d=r.dehydrated;if(Ps(t),i)if(t.flags&256)t.flags&=-257,t=hp(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Qe||El(e,t,a,!1),i=(a&e.childLanes)!==0,Qe||i){if(l=Te,l!==null&&(d=id(l,a),d!==0&&d!==r.retryLane))throw r.retryLane=d,Wa(e,d),pt(l,e,d),vc;cr(),t=hp(e,t,a)}else e=r.treeContext,Me=Mt(d.nextSibling),Pe=t,ge=!0,va=null,Rt=!1,e!==null&&tu(t,e),t=Fi(t,l),t.flags|=4096;return t}return e=Ft(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Pi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function yc(e,t,a,l,i){return Ia(t),a=ec(e,t,a,l,void 0,i),l=tc(),e!==null&&!Qe?(ac(e,t,i),la(e,t,i)):(ge&&l&&Ds(t),t.flags|=1,et(e,t,a,i),t.child)}function xp(e,t,a,l,i,r){return Ia(t),t.updateQueue=null,a=vu(t,l,a,i),bu(e),l=tc(),e!==null&&!Qe?(ac(e,t,r),la(e,t,r)):(ge&&l&&Ds(t),t.flags|=1,et(e,t,a,r),t.child)}function gp(e,t,a,l,i){if(Ia(t),t.stateNode===null){var r=Nl,d=a.contextType;typeof d=="object"&&d!==null&&(r=Ie(d)),r=new a(l,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=gc,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=l,r.state=t.memoizedState,r.refs={},Zs(t),d=a.contextType,r.context=typeof d=="object"&&d!==null?Ie(d):Nl,r.state=t.memoizedState,d=a.getDerivedStateFromProps,typeof d=="function"&&(xc(t,a,d,l),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(d=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),d!==r.state&&gc.enqueueReplaceState(r,r.state,null),zn(t,l,r,i),Sn(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){r=t.stateNode;var f=t.memoizedProps,v=il(a,f);r.props=v;var T=r.context,O=a.contextType;d=Nl,typeof O=="object"&&O!==null&&(d=Ie(O));var D=a.getDerivedStateFromProps;O=typeof D=="function"||typeof r.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,O||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(f||T!==d)&&lp(t,r,l,d),ka=!1;var R=t.memoizedState;r.state=R,zn(t,l,r,i),Sn(),T=t.memoizedState,f||R!==T||ka?(typeof D=="function"&&(xc(t,a,D,l),T=t.memoizedState),(v=ka||ap(t,a,v,l,R,T,d))?(O||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=T),r.props=l,r.state=T,r.context=d,l=v):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{r=t.stateNode,Xs(e,t),d=t.memoizedProps,O=il(a,d),r.props=O,D=t.pendingProps,R=r.context,T=a.contextType,v=Nl,typeof T=="object"&&T!==null&&(v=Ie(T)),f=a.getDerivedStateFromProps,(T=typeof f=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(d!==D||R!==v)&&lp(t,r,l,v),ka=!1,R=t.memoizedState,r.state=R,zn(t,l,r,i),Sn();var M=t.memoizedState;d!==D||R!==M||ka||e!==null&&e.dependencies!==null&&Oi(e.dependencies)?(typeof f=="function"&&(xc(t,a,f,l),M=t.memoizedState),(O=ka||ap(t,a,O,l,R,M,v)||e!==null&&e.dependencies!==null&&Oi(e.dependencies))?(T||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(l,M,v),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(l,M,v)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=M),r.props=l,r.state=M,r.context=v,l=O):(typeof r.componentDidUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),l=!1)}return r=l,Pi(e,t),l=(t.flags&128)!==0,r||l?(r=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&l?(t.child=ll(t,e.child,null,i),t.child=ll(t,null,a,i)):et(e,t,a,i),t.memoizedState=r.state,e=t.child):e=la(e,t,i),e}function bp(e,t,a,l){return Fa(),t.flags|=256,et(e,t,a,l),t.child}var jc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function kc(e){return{baseLanes:e,cachePool:su()}}function Nc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=jt),e}function vp(e,t,a){var l=t.pendingProps,i=!1,r=(t.flags&128)!==0,d;if((d=r)||(d=e!==null&&e.memoizedState===null?!1:(He.current&2)!==0),d&&(i=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(ge){if(i?Sa(t):za(),(e=Me)?(e=Af(e,Rt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ba!==null?{id:Yt,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},a=Pd(e),a.return=t,t.child=a,Pe=t,Me=null)):e=null,e===null)throw ya(t);return io(e)?t.lanes=32:t.lanes=536870912,null}var f=l.children;return l=l.fallback,i?(za(),i=t.mode,f=Ii({mode:"hidden",children:f},i),l=$a(l,i,a,null),f.return=t,l.return=t,f.sibling=l,t.child=f,l=t.child,l.memoizedState=kc(a),l.childLanes=Nc(e,d,a),t.memoizedState=jc,Cn(null,l)):(Sa(t),wc(t,f))}var v=e.memoizedState;if(v!==null&&(f=v.dehydrated,f!==null)){if(r)t.flags&256?(Sa(t),t.flags&=-257,t=Sc(e,t,a)):t.memoizedState!==null?(za(),t.child=e.child,t.flags|=128,t=null):(za(),f=l.fallback,i=t.mode,l=Ii({mode:"visible",children:l.children},i),f=$a(f,i,a,null),f.flags|=2,l.return=t,f.return=t,l.sibling=f,t.child=l,ll(t,e.child,null,a),l=t.child,l.memoizedState=kc(a),l.childLanes=Nc(e,d,a),t.memoizedState=jc,t=Cn(null,l));else if(Sa(t),io(f)){if(d=f.nextSibling&&f.nextSibling.dataset,d)var T=d.dgst;d=T,l=Error(o(419)),l.stack="",l.digest=d,vn({value:l,source:null,stack:null}),t=Sc(e,t,a)}else if(Qe||El(e,t,a,!1),d=(a&e.childLanes)!==0,Qe||d){if(d=Te,d!==null&&(l=id(d,a),l!==0&&l!==v.retryLane))throw v.retryLane=l,Wa(e,l),pt(d,e,l),vc;no(f)||cr(),t=Sc(e,t,a)}else no(f)?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,Me=Mt(f.nextSibling),Pe=t,ge=!0,va=null,Rt=!1,e!==null&&tu(t,e),t=wc(t,l.children),t.flags|=4096);return t}return i?(za(),f=l.fallback,i=t.mode,v=e.child,T=v.sibling,l=Ft(v,{mode:"hidden",children:l.children}),l.subtreeFlags=v.subtreeFlags&65011712,T!==null?f=Ft(T,f):(f=$a(f,i,a,null),f.flags|=2),f.return=t,l.return=t,l.sibling=f,t.child=l,Cn(null,l),l=t.child,f=e.child.memoizedState,f===null?f=kc(a):(i=f.cachePool,i!==null?(v=Ge._currentValue,i=i.parent!==v?{parent:v,pool:v}:i):i=su(),f={baseLanes:f.baseLanes|a,cachePool:i}),l.memoizedState=f,l.childLanes=Nc(e,d,a),t.memoizedState=jc,Cn(e.child,l)):(Sa(t),a=e.child,e=a.sibling,a=Ft(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=a,t.memoizedState=null,a)}function wc(e,t){return t=Ii({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ii(e,t){return e=gt(22,e,null,t),e.lanes=0,e}function Sc(e,t,a){return ll(t,e.child,null,a),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yp(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Ys(e.return,t,a)}function zc(e,t,a,l,i,r){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:i,treeForkCount:r}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=i,d.treeForkCount=r)}function jp(e,t,a){var l=t.pendingProps,i=l.revealOrder,r=l.tail;l=l.children;var d=He.current,f=(d&2)!==0;if(f?(d=d&1|2,t.flags|=128):d&=1,H(He,d),et(e,t,l,a),l=ge?bn:0,!f&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yp(e,a,t);else if(e.tag===19)yp(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&qi(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),zc(t,!1,i,a,r,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&qi(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}zc(t,!0,a,null,r,l);break;case"together":zc(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function la(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ta|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(El(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=Ft(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ft(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ec(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Oi(e)))}function Bx(e,t,a){switch(t.tag){case 3:$e(t,t.stateNode.containerInfo),ja(t,Ge,e.memoizedState.cache),Fa();break;case 27:case 5:an(t);break;case 4:$e(t,t.stateNode.containerInfo);break;case 10:ja(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ps(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Sa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?vp(e,t,a):(Sa(t),e=la(e,t,a),e!==null?e.sibling:null);Sa(t);break;case 19:var i=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(El(e,t,a,!1),l=(a&t.childLanes)!==0),i){if(l)return jp(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(He,He.current),l)break;return null;case 22:return t.lanes=0,fp(e,t,a,t.pendingProps);case 24:ja(t,Ge,e.memoizedState.cache)}return la(e,t,a)}function kp(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qe=!0;else{if(!Ec(e,a)&&(t.flags&128)===0)return Qe=!1,Bx(e,t,a);Qe=(e.flags&131072)!==0}else Qe=!1,ge&&(t.flags&1048576)!==0&&eu(t,bn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=tl(t.elementType),t.type=e,typeof e=="function")Ms(e)?(l=il(e,l),t.tag=1,t=gp(null,t,e,l,a)):(t.tag=0,t=yc(null,t,e,l,a));else{if(e!=null){var i=e.$$typeof;if(i===X){t.tag=11,t=dp(null,t,e,l,a);break e}else if(i===P){t.tag=14,t=up(null,t,e,l,a);break e}}throw t=_e(e)||e,Error(o(306,t,""))}}return t;case 0:return yc(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,i=il(l,t.pendingProps),gp(e,t,l,i,a);case 3:e:{if($e(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var r=t.memoizedState;i=r.element,Xs(e,t),zn(t,l,null,a);var d=t.memoizedState;if(l=d.cache,ja(t,Ge,l),l!==r.cache&&qs(t,[Ge],a,!0),Sn(),l=d.element,r.isDehydrated)if(r={element:l,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=bp(e,t,l,a);break e}else if(l!==i){i=Et(Error(o(424)),t),vn(i),t=bp(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Me=Mt(e.firstChild),Pe=t,ge=!0,va=null,Rt=!0,a=fu(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Fa(),l===i){t=la(e,t,a);break e}et(e,t,l,a)}t=t.child}return t;case 26:return Pi(e,t),e===null?(a=_f(t.type,null,t.pendingProps,null))?t.memoizedState=a:ge||(a=t.type,e=t.pendingProps,l=hr(oe.current).createElement(a),l[Fe]=t,l[rt]=e,tt(l,a,e),Je(l),t.stateNode=l):t.memoizedState=_f(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return an(t),e===null&&ge&&(l=t.stateNode=Cf(t.type,t.pendingProps,oe.current),Pe=t,Rt=!0,i=Me,_a(t.type)?(ro=i,Me=Mt(l.firstChild)):Me=i),et(e,t,t.pendingProps.children,a),Pi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ge&&((i=l=Me)&&(l=fg(l,t.type,t.pendingProps,Rt),l!==null?(t.stateNode=l,Pe=t,Me=Mt(l.firstChild),Rt=!1,i=!0):i=!1),i||ya(t)),an(t),i=t.type,r=t.pendingProps,d=e!==null?e.memoizedProps:null,l=r.children,to(i,r)?l=null:d!==null&&to(i,d)&&(t.flags|=32),t.memoizedState!==null&&(i=ec(e,t,Ax,null,null,a),Zn._currentValue=i),Pi(e,t),et(e,t,l,a),t.child;case 6:return e===null&&ge&&((e=a=Me)&&(a=mg(a,t.pendingProps,Rt),a!==null?(t.stateNode=a,Pe=t,Me=null,e=!0):e=!1),e||ya(t)),null;case 13:return vp(e,t,a);case 4:return $e(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=ll(t,null,l,a):et(e,t,l,a),t.child;case 11:return dp(e,t,t.type,t.pendingProps,a);case 7:return et(e,t,t.pendingProps,a),t.child;case 8:return et(e,t,t.pendingProps.children,a),t.child;case 12:return et(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ja(t,t.type,l.value),et(e,t,l.children,a),t.child;case 9:return i=t.type._context,l=t.pendingProps.children,Ia(t),i=Ie(i),l=l(i),t.flags|=1,et(e,t,l,a),t.child;case 14:return up(e,t,t.type,t.pendingProps,a);case 15:return pp(e,t,t.type,t.pendingProps,a);case 19:return jp(e,t,a);case 31:return Ux(e,t,a);case 22:return fp(e,t,a,t.pendingProps);case 24:return Ia(t),l=Ie(Ge),e===null?(i=Qs(),i===null&&(i=Te,r=Gs(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=a),i=r),t.memoizedState={parent:l,cache:i},Zs(t),ja(t,Ge,i)):((e.lanes&a)!==0&&(Xs(e,t),zn(t,null,null,a),Sn()),i=e.memoizedState,r=t.memoizedState,i.parent!==l?(i={parent:l,cache:l},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ja(t,Ge,l)):(l=r.cache,ja(t,Ge,l),l!==i.cache&&qs(t,[Ge],a,!0))),et(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function na(e){e.flags|=4}function Ac(e,t,a,l,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Wp())e.flags|=8192;else throw al=Bi,Ks}else e.flags&=-16777217}function Np(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Lf(t))if(Wp())e.flags|=8192;else throw al=Bi,Ks}function er(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ad():536870912,e.lanes|=t,Ll|=t)}function Mn(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags&65011712,l|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Hx(e,t,a){var l=t.pendingProps;switch(Us(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Oe(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),ea(Ge),Ce(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(zl(t)?na(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Hs())),Oe(t),null;case 26:var i=t.type,r=t.memoizedState;return e===null?(na(t),r!==null?(Oe(t),Np(t,r)):(Oe(t),Ac(t,i,null,l,a))):r?r!==e.memoizedState?(na(t),Oe(t),Np(t,r)):(Oe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&na(t),Oe(t),Ac(t,i,e,l,a)),null;case 27:if(ui(t),a=oe.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&na(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Oe(t),null}e=Q.current,zl(t)?au(t):(e=Cf(i,l,a),t.stateNode=e,na(t))}return Oe(t),null;case 5:if(ui(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&na(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Oe(t),null}if(r=Q.current,zl(t))au(t);else{var d=hr(oe.current);switch(r){case 1:r=d.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:r=d.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":r=d.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":r=d.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":r=d.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof l.is=="string"?d.createElement("select",{is:l.is}):d.createElement("select"),l.multiple?r.multiple=!0:l.size&&(r.size=l.size);break;default:r=typeof l.is=="string"?d.createElement(i,{is:l.is}):d.createElement(i)}}r[Fe]=t,r[rt]=l;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)r.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=r;e:switch(tt(r,i,l),i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&na(t)}}return Oe(t),Ac(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&na(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=oe.current,zl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,i=Pe,i!==null)switch(i.tag){case 27:case 5:l=i.memoizedProps}e[Fe]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||yf(e.nodeValue,a)),e||ya(t,!0)}else e=hr(e).createTextNode(l),e[Fe]=t,t.stateNode=e}return Oe(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=zl(t),a!==null){if(e===null){if(!l)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[Fe]=t}else Fa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),e=!1}else a=Hs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(vt(t),t):(vt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return Oe(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=zl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!i)throw Error(o(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(o(317));i[Fe]=t}else Fa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),i=!1}else i=Hs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(vt(t),t):(vt(t),null)}return vt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,i=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(i=l.alternate.memoizedState.cachePool.pool),r=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(r=l.memoizedState.cachePool.pool),r!==i&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),er(t,t.updateQueue),Oe(t),null);case 4:return Ce(),e===null&&$c(t.stateNode.containerInfo),Oe(t),null;case 10:return ea(t.type),Oe(t),null;case 19:if(z(He),l=t.memoizedState,l===null)return Oe(t),null;if(i=(t.flags&128)!==0,r=l.rendering,r===null)if(i)Mn(l,!1);else{if(Be!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=qi(e),r!==null){for(t.flags|=128,Mn(l,!1),e=r.updateQueue,t.updateQueue=e,er(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Fd(a,e),a=a.sibling;return H(He,He.current&1|2),ge&&Pt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&ft()>ir&&(t.flags|=128,i=!0,Mn(l,!1),t.lanes=4194304)}else{if(!i)if(e=qi(r),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,er(t,e),Mn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!ge)return Oe(t),null}else 2*ft()-l.renderingStartTime>ir&&a!==536870912&&(t.flags|=128,i=!0,Mn(l,!1),t.lanes=4194304);l.isBackwards?(r.sibling=t.child,t.child=r):(e=l.last,e!==null?e.sibling=r:t.child=r,l.last=r)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ft(),e.sibling=null,a=He.current,H(He,i?a&1|2:a&1),ge&&Pt(t,l.treeForkCount),e):(Oe(t),null);case 22:case 23:return vt(t),Fs(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),a=t.updateQueue,a!==null&&er(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&z(el),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ea(Ge),Oe(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Lx(e,t){switch(Us(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ea(Ge),Ce(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ui(t),null;case 31:if(t.memoizedState!==null){if(vt(t),t.alternate===null)throw Error(o(340));Fa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(vt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Fa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return z(He),null;case 4:return Ce(),null;case 10:return ea(t.type),null;case 22:case 23:return vt(t),Fs(),e!==null&&z(el),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ea(Ge),null;case 25:return null;default:return null}}function wp(e,t){switch(Us(t),t.tag){case 3:ea(Ge),Ce();break;case 26:case 27:case 5:ui(t);break;case 4:Ce();break;case 31:t.memoizedState!==null&&vt(t);break;case 13:vt(t);break;case 19:z(He);break;case 10:ea(t.type);break;case 22:case 23:vt(t),Fs(),e!==null&&z(el);break;case 24:ea(Ge)}}function On(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){l=void 0;var r=a.create,d=a.inst;l=r(),d.destroy=l}a=a.next}while(a!==i)}}catch(f){Se(t,t.return,f)}}function Ea(e,t,a){try{var l=t.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var r=i.next;l=r;do{if((l.tag&e)===e){var d=l.inst,f=d.destroy;if(f!==void 0){d.destroy=void 0,i=t;var v=a,T=f;try{T()}catch(O){Se(i,v,O)}}}l=l.next}while(l!==r)}}catch(O){Se(t,t.return,O)}}function Sp(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{hu(t,a)}catch(l){Se(e,e.return,l)}}}function zp(e,t,a){a.props=il(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Se(e,t,l)}}function _n(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(i){Se(e,t,i)}}function Gt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(i){Se(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Se(e,t,i)}else a.current=null}function Ep(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(i){Se(e,e.return,i)}}function Tc(e,t,a){try{var l=e.stateNode;sg(l,e.type,a,t),l[rt]=t}catch(i){Se(e,e.return,i)}}function Ap(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&_a(e.type)||e.tag===4}function Rc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ap(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&_a(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Wt));else if(l!==4&&(l===27&&_a(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Cc(e,t,a),e=e.sibling;e!==null;)Cc(e,t,a),e=e.sibling}function tr(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&_a(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(tr(e,t,a),e=e.sibling;e!==null;)tr(e,t,a),e=e.sibling}function Tp(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);tt(t,l,a),t[Fe]=e,t[rt]=a}catch(r){Se(e,e.return,r)}}var ia=!1,Ke=!1,Mc=!1,Rp=typeof WeakSet=="function"?WeakSet:Set,We=null;function Yx(e,t){if(e=e.containerInfo,Ic=kr,e=Gd(e),Ss(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var i=l.anchorOffset,r=l.focusNode;l=l.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var d=0,f=-1,v=-1,T=0,O=0,D=e,R=null;t:for(;;){for(var M;D!==a||i!==0&&D.nodeType!==3||(f=d+i),D!==r||l!==0&&D.nodeType!==3||(v=d+l),D.nodeType===3&&(d+=D.nodeValue.length),(M=D.firstChild)!==null;)R=D,D=M;for(;;){if(D===e)break t;if(R===a&&++T===i&&(f=d),R===r&&++O===l&&(v=d),(M=D.nextSibling)!==null)break;D=R,R=D.parentNode}D=M}a=f===-1||v===-1?null:{start:f,end:v}}else a=null}a=a||{start:0,end:0}}else a=null;for(eo={focusedElem:e,selectionRange:a},kr=!1,We=t;We!==null;)if(t=We,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,We=e;else for(;We!==null;){switch(t=We,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,i=r.memoizedProps,r=r.memoizedState,l=a.stateNode;try{var J=il(a.type,i);e=l.getSnapshotBeforeUpdate(J,r),l.__reactInternalSnapshotBeforeUpdate=e}catch(te){Se(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)lo(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":lo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,We=e;break}We=t.return}}function Cp(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:sa(e,a),l&4&&On(5,a);break;case 1:if(sa(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(d){Se(a,a.return,d)}else{var i=il(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Se(a,a.return,d)}}l&64&&Sp(a),l&512&&_n(a,a.return);break;case 3:if(sa(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{hu(e,t)}catch(d){Se(a,a.return,d)}}break;case 27:t===null&&l&4&&Tp(a);case 26:case 5:sa(e,a),t===null&&l&4&&Ep(a),l&512&&_n(a,a.return);break;case 12:sa(e,a);break;case 31:sa(e,a),l&4&&_p(e,a);break;case 13:sa(e,a),l&4&&Dp(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Wx.bind(null,a),hg(e,a))));break;case 22:if(l=a.memoizedState!==null||ia,!l){t=t!==null&&t.memoizedState!==null||Ke,i=ia;var r=Ke;ia=l,(Ke=t)&&!r?ca(e,a,(a.subtreeFlags&8772)!==0):sa(e,a),ia=i,Ke=r}break;case 30:break;default:sa(e,a)}}function Mp(e){var t=e.alternate;t!==null&&(e.alternate=null,Mp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&cs(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var De=null,ct=!1;function ra(e,t,a){for(a=a.child;a!==null;)Op(e,t,a),a=a.sibling}function Op(e,t,a){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(ln,a)}catch{}switch(a.tag){case 26:Ke||Gt(a,t),ra(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ke||Gt(a,t);var l=De,i=ct;_a(a.type)&&(De=a.stateNode,ct=!1),ra(e,t,a),Vn(a.stateNode),De=l,ct=i;break;case 5:Ke||Gt(a,t);case 6:if(l=De,i=ct,De=null,ra(e,t,a),De=l,ct=i,De!==null)if(ct)try{(De.nodeType===9?De.body:De.nodeName==="HTML"?De.ownerDocument.body:De).removeChild(a.stateNode)}catch(r){Se(a,t,r)}else try{De.removeChild(a.stateNode)}catch(r){Se(a,t,r)}break;case 18:De!==null&&(ct?(e=De,zf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Xl(e)):zf(De,a.stateNode));break;case 4:l=De,i=ct,De=a.stateNode.containerInfo,ct=!0,ra(e,t,a),De=l,ct=i;break;case 0:case 11:case 14:case 15:Ea(2,a,t),Ke||Ea(4,a,t),ra(e,t,a);break;case 1:Ke||(Gt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&zp(a,t,l)),ra(e,t,a);break;case 21:ra(e,t,a);break;case 22:Ke=(l=Ke)||a.memoizedState!==null,ra(e,t,a),Ke=l;break;default:ra(e,t,a)}}function _p(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Xl(e)}catch(a){Se(t,t.return,a)}}}function Dp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Xl(e)}catch(a){Se(t,t.return,a)}}function qx(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Rp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Rp),t;default:throw Error(o(435,e.tag))}}function ar(e,t){var a=qx(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var i=$x.bind(null,e,l);l.then(i,i)}})}function ot(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var i=a[l],r=e,d=t,f=d;e:for(;f!==null;){switch(f.tag){case 27:if(_a(f.type)){De=f.stateNode,ct=!1;break e}break;case 5:De=f.stateNode,ct=!1;break e;case 3:case 4:De=f.stateNode.containerInfo,ct=!0;break e}f=f.return}if(De===null)throw Error(o(160));Op(r,d,i),De=null,ct=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Up(t,e),t=t.sibling}var Ut=null;function Up(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ot(t,e),dt(e),l&4&&(Ea(3,e,e.return),On(3,e),Ea(5,e,e.return));break;case 1:ot(t,e),dt(e),l&512&&(Ke||a===null||Gt(a,a.return)),l&64&&ia&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var i=Ut;if(ot(t,e),dt(e),l&512&&(Ke||a===null||Gt(a,a.return)),l&4){var r=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(l){case"title":r=i.getElementsByTagName("title")[0],(!r||r[sn]||r[Fe]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(l),i.head.insertBefore(r,i.querySelector("head > title"))),tt(r,l,a),r[Fe]=e,Je(r),l=r;break e;case"link":var d=Bf("link","href",i).get(l+(a.href||""));if(d){for(var f=0;f<d.length;f++)if(r=d[f],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){d.splice(f,1);break t}}r=i.createElement(l),tt(r,l,a),i.head.appendChild(r);break;case"meta":if(d=Bf("meta","content",i).get(l+(a.content||""))){for(f=0;f<d.length;f++)if(r=d[f],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){d.splice(f,1);break t}}r=i.createElement(l),tt(r,l,a),i.head.appendChild(r);break;default:throw Error(o(468,l))}r[Fe]=e,Je(r),l=r}e.stateNode=l}else Hf(i,e.type,e.stateNode);else e.stateNode=Uf(i,l,e.memoizedProps);else r!==l?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,l===null?Hf(i,e.type,e.stateNode):Uf(i,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Tc(e,e.memoizedProps,a.memoizedProps)}break;case 27:ot(t,e),dt(e),l&512&&(Ke||a===null||Gt(a,a.return)),a!==null&&l&4&&Tc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ot(t,e),dt(e),l&512&&(Ke||a===null||Gt(a,a.return)),e.flags&32){i=e.stateNode;try{xl(i,"")}catch(J){Se(e,e.return,J)}}l&4&&e.stateNode!=null&&(i=e.memoizedProps,Tc(e,i,a!==null?a.memoizedProps:i)),l&1024&&(Mc=!0);break;case 6:if(ot(t,e),dt(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(J){Se(e,e.return,J)}}break;case 3:if(br=null,i=Ut,Ut=xr(t.containerInfo),ot(t,e),Ut=i,dt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Xl(t.containerInfo)}catch(J){Se(e,e.return,J)}Mc&&(Mc=!1,Bp(e));break;case 4:l=Ut,Ut=xr(e.stateNode.containerInfo),ot(t,e),dt(e),Ut=l;break;case 12:ot(t,e),dt(e);break;case 31:ot(t,e),dt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ar(e,l)));break;case 13:ot(t,e),dt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(nr=ft()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ar(e,l)));break;case 22:i=e.memoizedState!==null;var v=a!==null&&a.memoizedState!==null,T=ia,O=Ke;if(ia=T||i,Ke=O||v,ot(t,e),Ke=O,ia=T,dt(e),l&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||v||ia||Ke||rl(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){v=a=t;try{if(r=v.stateNode,i)d=r.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{f=v.stateNode;var D=v.memoizedProps.style,R=D!=null&&D.hasOwnProperty("display")?D.display:null;f.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(J){Se(v,v.return,J)}}}else if(t.tag===6){if(a===null){v=t;try{v.stateNode.nodeValue=i?"":v.memoizedProps}catch(J){Se(v,v.return,J)}}}else if(t.tag===18){if(a===null){v=t;try{var M=v.stateNode;i?Ef(M,!0):Ef(v.stateNode,!1)}catch(J){Se(v,v.return,J)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,ar(e,a))));break;case 19:ot(t,e),dt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ar(e,l)));break;case 30:break;case 21:break;default:ot(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Ap(l)){a=l;break}l=l.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var i=a.stateNode,r=Rc(e);tr(e,r,i);break;case 5:var d=a.stateNode;a.flags&32&&(xl(d,""),a.flags&=-33);var f=Rc(e);tr(e,f,d);break;case 3:case 4:var v=a.stateNode.containerInfo,T=Rc(e);Cc(e,T,v);break;default:throw Error(o(161))}}catch(O){Se(e,e.return,O)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Bp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function sa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Cp(e,t.alternate,t),t=t.sibling}function rl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ea(4,t,t.return),rl(t);break;case 1:Gt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&zp(t,t.return,a),rl(t);break;case 27:Vn(t.stateNode);case 26:case 5:Gt(t,t.return),rl(t);break;case 22:t.memoizedState===null&&rl(t);break;case 30:rl(t);break;default:rl(t)}e=e.sibling}}function ca(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,i=e,r=t,d=r.flags;switch(r.tag){case 0:case 11:case 15:ca(i,r,a),On(4,r);break;case 1:if(ca(i,r,a),l=r,i=l.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(T){Se(l,l.return,T)}if(l=r,i=l.updateQueue,i!==null){var f=l.stateNode;try{var v=i.shared.hiddenCallbacks;if(v!==null)for(i.shared.hiddenCallbacks=null,i=0;i<v.length;i++)mu(v[i],f)}catch(T){Se(l,l.return,T)}}a&&d&64&&Sp(r),_n(r,r.return);break;case 27:Tp(r);case 26:case 5:ca(i,r,a),a&&l===null&&d&4&&Ep(r),_n(r,r.return);break;case 12:ca(i,r,a);break;case 31:ca(i,r,a),a&&d&4&&_p(i,r);break;case 13:ca(i,r,a),a&&d&4&&Dp(i,r);break;case 22:r.memoizedState===null&&ca(i,r,a),_n(r,r.return);break;case 30:break;default:ca(i,r,a)}t=t.sibling}}function Oc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&yn(a))}function _c(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&yn(e))}function Bt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Hp(e,t,a,l),t=t.sibling}function Hp(e,t,a,l){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Bt(e,t,a,l),i&2048&&On(9,t);break;case 1:Bt(e,t,a,l);break;case 3:Bt(e,t,a,l),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&yn(e)));break;case 12:if(i&2048){Bt(e,t,a,l),e=t.stateNode;try{var r=t.memoizedProps,d=r.id,f=r.onPostCommit;typeof f=="function"&&f(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){Se(t,t.return,v)}}else Bt(e,t,a,l);break;case 31:Bt(e,t,a,l);break;case 13:Bt(e,t,a,l);break;case 23:break;case 22:r=t.stateNode,d=t.alternate,t.memoizedState!==null?r._visibility&2?Bt(e,t,a,l):Dn(e,t):r._visibility&2?Bt(e,t,a,l):(r._visibility|=2,Ul(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),i&2048&&Oc(d,t);break;case 24:Bt(e,t,a,l),i&2048&&_c(t.alternate,t);break;default:Bt(e,t,a,l)}}function Ul(e,t,a,l,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,d=t,f=a,v=l,T=d.flags;switch(d.tag){case 0:case 11:case 15:Ul(r,d,f,v,i),On(8,d);break;case 23:break;case 22:var O=d.stateNode;d.memoizedState!==null?O._visibility&2?Ul(r,d,f,v,i):Dn(r,d):(O._visibility|=2,Ul(r,d,f,v,i)),i&&T&2048&&Oc(d.alternate,d);break;case 24:Ul(r,d,f,v,i),i&&T&2048&&_c(d.alternate,d);break;default:Ul(r,d,f,v,i)}t=t.sibling}}function Dn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,i=l.flags;switch(l.tag){case 22:Dn(a,l),i&2048&&Oc(l.alternate,l);break;case 24:Dn(a,l),i&2048&&_c(l.alternate,l);break;default:Dn(a,l)}t=t.sibling}}var Un=8192;function Bl(e,t,a){if(e.subtreeFlags&Un)for(e=e.child;e!==null;)Lp(e,t,a),e=e.sibling}function Lp(e,t,a){switch(e.tag){case 26:Bl(e,t,a),e.flags&Un&&e.memoizedState!==null&&Eg(a,Ut,e.memoizedState,e.memoizedProps);break;case 5:Bl(e,t,a);break;case 3:case 4:var l=Ut;Ut=xr(e.stateNode.containerInfo),Bl(e,t,a),Ut=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Un,Un=16777216,Bl(e,t,a),Un=l):Bl(e,t,a));break;default:Bl(e,t,a)}}function Yp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Bn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];We=l,Gp(l,e)}Yp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qp(e),e=e.sibling}function qp(e){switch(e.tag){case 0:case 11:case 15:Bn(e),e.flags&2048&&Ea(9,e,e.return);break;case 3:Bn(e);break;case 12:Bn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,lr(e)):Bn(e);break;default:Bn(e)}}function lr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];We=l,Gp(l,e)}Yp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ea(8,t,t.return),lr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,lr(t));break;default:lr(t)}e=e.sibling}}function Gp(e,t){for(;We!==null;){var a=We;switch(a.tag){case 0:case 11:case 15:Ea(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:yn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,We=l;else e:for(a=e;We!==null;){l=We;var i=l.sibling,r=l.return;if(Mp(l),l===a){We=null;break e}if(i!==null){i.return=r,We=i;break e}We=r}}}var Gx={getCacheForType:function(e){var t=Ie(Ge),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ie(Ge).controller.signal}},Vx=typeof WeakMap=="function"?WeakMap:Map,Ne=0,Te=null,ue=null,me=0,we=0,yt=null,Aa=!1,Hl=!1,Dc=!1,oa=0,Be=0,Ta=0,sl=0,Uc=0,jt=0,Ll=0,Hn=null,ut=null,Bc=!1,nr=0,Vp=0,ir=1/0,rr=null,Ra=null,Ze=0,Ca=null,Yl=null,da=0,Hc=0,Lc=null,Qp=null,Ln=0,Yc=null;function kt(){return(Ne&2)!==0&&me!==0?me&-me:C.T!==null?Zc():rd()}function Kp(){if(jt===0)if((me&536870912)===0||ge){var e=mi;mi<<=1,(mi&3932160)===0&&(mi=262144),jt=e}else jt=536870912;return e=bt.current,e!==null&&(e.flags|=32),jt}function pt(e,t,a){(e===Te&&(we===2||we===9)||e.cancelPendingCommit!==null)&&(ql(e,0),Ma(e,me,jt,!1)),rn(e,a),((Ne&2)===0||e!==Te)&&(e===Te&&((Ne&2)===0&&(sl|=a),Be===4&&Ma(e,me,jt,!1)),Vt(e))}function Zp(e,t,a){if((Ne&6)!==0)throw Error(o(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||nn(e,t),i=l?Zx(e,t):Gc(e,t,!0),r=l;do{if(i===0){Hl&&!l&&Ma(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!Qx(a)){i=Gc(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var f=e;i=Hn;var v=f.current.memoizedState.isDehydrated;if(v&&(ql(f,d).flags|=256),d=Gc(f,d,!1),d!==2){if(Dc&&!v){f.errorRecoveryDisabledLanes|=r,sl|=r,i=4;break e}r=ut,ut=i,r!==null&&(ut===null?ut=r:ut.push.apply(ut,r))}i=d}if(r=!1,i!==2)continue}}if(i===1){ql(e,0),Ma(e,t,0,!0);break}e:{switch(l=e,r=i,r){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Ma(l,t,jt,!Aa);break e;case 2:ut=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(i=nr+300-ft(),10<i)){if(Ma(l,t,jt,!Aa),xi(l,0,!0)!==0)break e;da=t,l.timeoutHandle=wf(Xp.bind(null,l,a,ut,rr,Bc,t,jt,sl,Ll,Aa,r,"Throttled",-0,0),i);break e}Xp(l,a,ut,rr,Bc,t,jt,sl,Ll,Aa,r,null,-0,0)}}break}while(!0);Vt(e)}function Xp(e,t,a,l,i,r,d,f,v,T,O,D,R,M){if(e.timeoutHandle=-1,D=t.subtreeFlags,D&8192||(D&16785408)===16785408){D={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wt},Lp(t,r,D);var J=(r&62914560)===r?nr-ft():(r&4194048)===r?Vp-ft():0;if(J=Ag(D,J),J!==null){da=r,e.cancelPendingCommit=J(tf.bind(null,e,t,r,a,l,i,d,f,v,O,D,null,R,M)),Ma(e,r,d,!T);return}}tf(e,t,r,a,l,i,d,f,v)}function Qx(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var i=a[l],r=i.getSnapshot;i=i.value;try{if(!xt(r(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ma(e,t,a,l){t&=~Uc,t&=~sl,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var i=t;0<i;){var r=31-ht(i),d=1<<r;l[r]=-1,i&=~d}a!==0&&ld(e,a,t)}function sr(){return(Ne&6)===0?(Yn(0),!1):!0}function qc(){if(ue!==null){if(we===0)var e=ue.return;else e=ue,It=Pa=null,lc(e),Cl=null,kn=0,e=ue;for(;e!==null;)wp(e.alternate,e),e=e.return;ue=null}}function ql(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,dg(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),da=0,qc(),Te=e,ue=a=Ft(e.current,null),me=t,we=0,yt=null,Aa=!1,Hl=nn(e,t),Dc=!1,Ll=jt=Uc=sl=Ta=Be=0,ut=Hn=null,Bc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var i=31-ht(l),r=1<<i;t|=e[i],l&=~r}return oa=t,Ai(),a}function Jp(e,t){ce=null,C.H=Rn,t===Rl||t===Ui?(t=du(),we=3):t===Ks?(t=du(),we=4):we=t===vc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,yt=t,ue===null&&(Be=1,$i(e,Et(t,e.current)))}function Wp(){var e=bt.current;return e===null?!0:(me&4194048)===me?Ct===null:(me&62914560)===me||(me&536870912)!==0?e===Ct:!1}function $p(){var e=C.H;return C.H=Rn,e===null?Rn:e}function Fp(){var e=C.A;return C.A=Gx,e}function cr(){Be=4,Aa||(me&4194048)!==me&&bt.current!==null||(Hl=!0),(Ta&134217727)===0&&(sl&134217727)===0||Te===null||Ma(Te,me,jt,!1)}function Gc(e,t,a){var l=Ne;Ne|=2;var i=$p(),r=Fp();(Te!==e||me!==t)&&(rr=null,ql(e,t)),t=!1;var d=Be;e:do try{if(we!==0&&ue!==null){var f=ue,v=yt;switch(we){case 8:qc(),d=6;break e;case 3:case 2:case 9:case 6:bt.current===null&&(t=!0);var T=we;if(we=0,yt=null,Gl(e,f,v,T),a&&Hl){d=0;break e}break;default:T=we,we=0,yt=null,Gl(e,f,v,T)}}Kx(),d=Be;break}catch(O){Jp(e,O)}while(!0);return t&&e.shellSuspendCounter++,It=Pa=null,Ne=l,C.H=i,C.A=r,ue===null&&(Te=null,me=0,Ai()),d}function Kx(){for(;ue!==null;)Pp(ue)}function Zx(e,t){var a=Ne;Ne|=2;var l=$p(),i=Fp();Te!==e||me!==t?(rr=null,ir=ft()+500,ql(e,t)):Hl=nn(e,t);e:do try{if(we!==0&&ue!==null){t=ue;var r=yt;t:switch(we){case 1:we=0,yt=null,Gl(e,t,r,1);break;case 2:case 9:if(cu(r)){we=0,yt=null,Ip(t);break}t=function(){we!==2&&we!==9||Te!==e||(we=7),Vt(e)},r.then(t,t);break e;case 3:we=7;break e;case 4:we=5;break e;case 7:cu(r)?(we=0,yt=null,Ip(t)):(we=0,yt=null,Gl(e,t,r,7));break;case 5:var d=null;switch(ue.tag){case 26:d=ue.memoizedState;case 5:case 27:var f=ue;if(d?Lf(d):f.stateNode.complete){we=0,yt=null;var v=f.sibling;if(v!==null)ue=v;else{var T=f.return;T!==null?(ue=T,or(T)):ue=null}break t}}we=0,yt=null,Gl(e,t,r,5);break;case 6:we=0,yt=null,Gl(e,t,r,6);break;case 8:qc(),Be=6;break e;default:throw Error(o(462))}}Xx();break}catch(O){Jp(e,O)}while(!0);return It=Pa=null,C.H=l,C.A=i,Ne=a,ue!==null?0:(Te=null,me=0,Ai(),Be)}function Xx(){for(;ue!==null&&!xh();)Pp(ue)}function Pp(e){var t=kp(e.alternate,e,oa);e.memoizedProps=e.pendingProps,t===null?or(e):ue=t}function Ip(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=xp(a,t,t.pendingProps,t.type,void 0,me);break;case 11:t=xp(a,t,t.pendingProps,t.type.render,t.ref,me);break;case 5:lc(t);default:wp(a,t),t=ue=Fd(t,oa),t=kp(a,t,oa)}e.memoizedProps=e.pendingProps,t===null?or(e):ue=t}function Gl(e,t,a,l){It=Pa=null,lc(t),Cl=null,kn=0;var i=t.return;try{if(Dx(e,i,t,a,me)){Be=1,$i(e,Et(a,e.current)),ue=null;return}}catch(r){if(i!==null)throw ue=i,r;Be=1,$i(e,Et(a,e.current)),ue=null;return}t.flags&32768?(ge||l===1?e=!0:Hl||(me&536870912)!==0?e=!1:(Aa=e=!0,(l===2||l===9||l===3||l===6)&&(l=bt.current,l!==null&&l.tag===13&&(l.flags|=16384))),ef(t,e)):or(t)}function or(e){var t=e;do{if((t.flags&32768)!==0){ef(t,Aa);return}e=t.return;var a=Hx(t.alternate,t,oa);if(a!==null){ue=a;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);Be===0&&(Be=5)}function ef(e,t){do{var a=Lx(e.alternate,e);if(a!==null){a.flags&=32767,ue=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ue=e;return}ue=e=a}while(e!==null);Be=6,ue=null}function tf(e,t,a,l,i,r,d,f,v){e.cancelPendingCommit=null;do dr();while(Ze!==0);if((Ne&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(r=t.lanes|t.childLanes,r|=Rs,zh(e,a,r,d,f,v),e===Te&&(ue=Te=null,me=0),Yl=t,Ca=e,da=a,Hc=r,Lc=i,Qp=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Fx(pi,function(){return sf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=C.T,C.T=null,i=V.p,V.p=2,d=Ne,Ne|=4;try{Yx(e,t,a)}finally{Ne=d,V.p=i,C.T=l}}Ze=1,af(),lf(),nf()}}function af(){if(Ze===1){Ze=0;var e=Ca,t=Yl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=C.T,C.T=null;var l=V.p;V.p=2;var i=Ne;Ne|=4;try{Up(t,e);var r=eo,d=Gd(e.containerInfo),f=r.focusedElem,v=r.selectionRange;if(d!==f&&f&&f.ownerDocument&&qd(f.ownerDocument.documentElement,f)){if(v!==null&&Ss(f)){var T=v.start,O=v.end;if(O===void 0&&(O=T),"selectionStart"in f)f.selectionStart=T,f.selectionEnd=Math.min(O,f.value.length);else{var D=f.ownerDocument||document,R=D&&D.defaultView||window;if(R.getSelection){var M=R.getSelection(),J=f.textContent.length,te=Math.min(v.start,J),Ae=v.end===void 0?te:Math.min(v.end,J);!M.extend&&te>Ae&&(d=Ae,Ae=te,te=d);var w=Yd(f,te),j=Yd(f,Ae);if(w&&j&&(M.rangeCount!==1||M.anchorNode!==w.node||M.anchorOffset!==w.offset||M.focusNode!==j.node||M.focusOffset!==j.offset)){var A=D.createRange();A.setStart(w.node,w.offset),M.removeAllRanges(),te>Ae?(M.addRange(A),M.extend(j.node,j.offset)):(A.setEnd(j.node,j.offset),M.addRange(A))}}}}for(D=[],M=f;M=M.parentNode;)M.nodeType===1&&D.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<D.length;f++){var _=D[f];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}kr=!!Ic,eo=Ic=null}finally{Ne=i,V.p=l,C.T=a}}e.current=t,Ze=2}}function lf(){if(Ze===2){Ze=0;var e=Ca,t=Yl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=C.T,C.T=null;var l=V.p;V.p=2;var i=Ne;Ne|=4;try{Cp(e,t.alternate,t)}finally{Ne=i,V.p=l,C.T=a}}Ze=3}}function nf(){if(Ze===4||Ze===3){Ze=0,gh();var e=Ca,t=Yl,a=da,l=Qp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ze=5:(Ze=0,Yl=Ca=null,rf(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Ra=null),rs(a),t=t.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(ln,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=C.T,i=V.p,V.p=2,C.T=null;try{for(var r=e.onRecoverableError,d=0;d<l.length;d++){var f=l[d];r(f.value,{componentStack:f.stack})}}finally{C.T=t,V.p=i}}(da&3)!==0&&dr(),Vt(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===Yc?Ln++:(Ln=0,Yc=e):Ln=0,Yn(0)}}function rf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,yn(t)))}function dr(){return af(),lf(),nf(),sf()}function sf(){if(Ze!==5)return!1;var e=Ca,t=Hc;Hc=0;var a=rs(da),l=C.T,i=V.p;try{V.p=32>a?32:a,C.T=null,a=Lc,Lc=null;var r=Ca,d=da;if(Ze=0,Yl=Ca=null,da=0,(Ne&6)!==0)throw Error(o(331));var f=Ne;if(Ne|=4,qp(r.current),Hp(r,r.current,d,a),Ne=f,Yn(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(ln,r)}catch{}return!0}finally{V.p=i,C.T=l,rf(e,t)}}function cf(e,t,a){t=Et(a,t),t=bc(e.stateNode,t,2),e=wa(e,t,2),e!==null&&(rn(e,2),Vt(e))}function Se(e,t,a){if(e.tag===3)cf(e,e,a);else for(;t!==null;){if(t.tag===3){cf(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ra===null||!Ra.has(l))){e=Et(a,e),a=cp(2),l=wa(t,a,2),l!==null&&(op(a,l,t,e),rn(l,2),Vt(l));break}}t=t.return}}function Vc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Vx;var i=new Set;l.set(t,i)}else i=l.get(t),i===void 0&&(i=new Set,l.set(t,i));i.has(a)||(Dc=!0,i.add(a),e=Jx.bind(null,e,t,a),t.then(e,e))}function Jx(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Te===e&&(me&a)===a&&(Be===4||Be===3&&(me&62914560)===me&&300>ft()-nr?(Ne&2)===0&&ql(e,0):Uc|=a,Ll===me&&(Ll=0)),Vt(e)}function of(e,t){t===0&&(t=ad()),e=Wa(e,t),e!==null&&(rn(e,t),Vt(e))}function Wx(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),of(e,a)}function $x(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),of(e,a)}function Fx(e,t){return as(e,t)}var ur=null,Vl=null,Qc=!1,pr=!1,Kc=!1,Oa=0;function Vt(e){e!==Vl&&e.next===null&&(Vl===null?ur=Vl=e:Vl=Vl.next=e),pr=!0,Qc||(Qc=!0,Ix())}function Yn(e,t){if(!Kc&&pr){Kc=!0;do for(var a=!1,l=ur;l!==null;){if(e!==0){var i=l.pendingLanes;if(i===0)var r=0;else{var d=l.suspendedLanes,f=l.pingedLanes;r=(1<<31-ht(42|e)+1)-1,r&=i&~(d&~f),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,ff(l,r))}else r=me,r=xi(l,l===Te?r:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(r&3)===0||nn(l,r)||(a=!0,ff(l,r));l=l.next}while(a);Kc=!1}}function Px(){df()}function df(){pr=Qc=!1;var e=0;Oa!==0&&og()&&(e=Oa);for(var t=ft(),a=null,l=ur;l!==null;){var i=l.next,r=uf(l,t);r===0?(l.next=null,a===null?ur=i:a.next=i,i===null&&(Vl=a)):(a=l,(e!==0||(r&3)!==0)&&(pr=!0)),l=i}Ze!==0&&Ze!==5||Yn(e),Oa!==0&&(Oa=0)}function uf(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var d=31-ht(r),f=1<<d,v=i[d];v===-1?((f&a)===0||(f&l)!==0)&&(i[d]=Sh(f,t)):v<=t&&(e.expiredLanes|=f),r&=~f}if(t=Te,a=me,a=xi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(we===2||we===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ls(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||nn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&ls(l),rs(a)){case 2:case 8:a=ed;break;case 32:a=pi;break;case 268435456:a=td;break;default:a=pi}return l=pf.bind(null,e),a=as(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&ls(l),e.callbackPriority=2,e.callbackNode=null,2}function pf(e,t){if(Ze!==0&&Ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(dr()&&e.callbackNode!==a)return null;var l=me;return l=xi(e,e===Te?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Zp(e,l,t),uf(e,ft()),e.callbackNode!=null&&e.callbackNode===a?pf.bind(null,e):null)}function ff(e,t){if(dr())return null;Zp(e,t,!0)}function Ix(){ug(function(){(Ne&6)!==0?as(Io,Px):df()})}function Zc(){if(Oa===0){var e=Al;e===0&&(e=fi,fi<<=1,(fi&261888)===0&&(fi=256)),Oa=e}return Oa}function mf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:yi(""+e)}function hf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function eg(e,t,a,l,i){if(t==="submit"&&a&&a.stateNode===i){var r=mf((i[rt]||null).action),d=l.submitter;d&&(t=(t=d[rt]||null)?mf(t.formAction):d.getAttribute("formAction"),t!==null&&(r=t,d=null));var f=new wi("action","action",null,l,i);e.push({event:f,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Oa!==0){var v=d?hf(i,d):new FormData(i);pc(a,{pending:!0,data:v,method:i.method,action:r},null,v)}}else typeof r=="function"&&(f.preventDefault(),v=d?hf(i,d):new FormData(i),pc(a,{pending:!0,data:v,method:i.method,action:r},r,v))},currentTarget:i}]})}}for(var Xc=0;Xc<Ts.length;Xc++){var Jc=Ts[Xc],tg=Jc.toLowerCase(),ag=Jc[0].toUpperCase()+Jc.slice(1);Dt(tg,"on"+ag)}Dt(Kd,"onAnimationEnd"),Dt(Zd,"onAnimationIteration"),Dt(Xd,"onAnimationStart"),Dt("dblclick","onDoubleClick"),Dt("focusin","onFocus"),Dt("focusout","onBlur"),Dt(bx,"onTransitionRun"),Dt(vx,"onTransitionStart"),Dt(yx,"onTransitionCancel"),Dt(Jd,"onTransitionEnd"),ml("onMouseEnter",["mouseout","mouseover"]),ml("onMouseLeave",["mouseout","mouseover"]),ml("onPointerEnter",["pointerout","pointerover"]),ml("onPointerLeave",["pointerout","pointerover"]),Ka("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ka("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ka("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ka("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ka("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ka("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qn));function xf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],i=l.event;l=l.listeners;e:{var r=void 0;if(t)for(var d=l.length-1;0<=d;d--){var f=l[d],v=f.instance,T=f.currentTarget;if(f=f.listener,v!==r&&i.isPropagationStopped())break e;r=f,i.currentTarget=T;try{r(i)}catch(O){Ei(O)}i.currentTarget=null,r=v}else for(d=0;d<l.length;d++){if(f=l[d],v=f.instance,T=f.currentTarget,f=f.listener,v!==r&&i.isPropagationStopped())break e;r=f,i.currentTarget=T;try{r(i)}catch(O){Ei(O)}i.currentTarget=null,r=v}}}}function pe(e,t){var a=t[ss];a===void 0&&(a=t[ss]=new Set);var l=e+"__bubble";a.has(l)||(gf(t,e,2,!1),a.add(l))}function Wc(e,t,a){var l=0;t&&(l|=4),gf(a,e,l,t)}var fr="_reactListening"+Math.random().toString(36).slice(2);function $c(e){if(!e[fr]){e[fr]=!0,od.forEach(function(a){a!=="selectionchange"&&(lg.has(a)||Wc(a,!1,e),Wc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fr]||(t[fr]=!0,Wc("selectionchange",!1,t))}}function gf(e,t,a,l){switch(Zf(t)){case 2:var i=Cg;break;case 8:i=Mg;break;default:i=po}a=i.bind(null,t,a,e),i=void 0,!xs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),l?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function Fc(e,t,a,l,i){var r=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var d=l.tag;if(d===3||d===4){var f=l.stateNode.containerInfo;if(f===i)break;if(d===4)for(d=l.return;d!==null;){var v=d.tag;if((v===3||v===4)&&d.stateNode.containerInfo===i)return;d=d.return}for(;f!==null;){if(d=ul(f),d===null)return;if(v=d.tag,v===5||v===6||v===26||v===27){l=r=d;continue e}f=f.parentNode}}l=l.return}jd(function(){var T=r,O=ms(a),D=[];e:{var R=Wd.get(e);if(R!==void 0){var M=wi,J=e;switch(e){case"keypress":if(ki(a)===0)break e;case"keydown":case"keyup":M=$h;break;case"focusin":J="focus",M=ys;break;case"focusout":J="blur",M=ys;break;case"beforeblur":case"afterblur":M=ys;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=wd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=Hh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=Ih;break;case Kd:case Zd:case Xd:M=qh;break;case Jd:M=tx;break;case"scroll":case"scrollend":M=Uh;break;case"wheel":M=lx;break;case"copy":case"cut":case"paste":M=Vh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=zd;break;case"toggle":case"beforetoggle":M=ix}var te=(t&4)!==0,Ae=!te&&(e==="scroll"||e==="scrollend"),w=te?R!==null?R+"Capture":null:R;te=[];for(var j=T,A;j!==null;){var _=j;if(A=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||A===null||w===null||(_=on(j,w),_!=null&&te.push(Gn(j,_,A))),Ae)break;j=j.return}0<te.length&&(R=new M(R,J,null,a,O),D.push({event:R,listeners:te}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",R&&a!==fs&&(J=a.relatedTarget||a.fromElement)&&(ul(J)||J[dl]))break e;if((M||R)&&(R=O.window===O?O:(R=O.ownerDocument)?R.defaultView||R.parentWindow:window,M?(J=a.relatedTarget||a.toElement,M=T,J=J?ul(J):null,J!==null&&(Ae=m(J),te=J.tag,J!==Ae||te!==5&&te!==27&&te!==6)&&(J=null)):(M=null,J=T),M!==J)){if(te=wd,_="onMouseLeave",w="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(te=zd,_="onPointerLeave",w="onPointerEnter",j="pointer"),Ae=M==null?R:cn(M),A=J==null?R:cn(J),R=new te(_,j+"leave",M,a,O),R.target=Ae,R.relatedTarget=A,_=null,ul(O)===T&&(te=new te(w,j+"enter",J,a,O),te.target=A,te.relatedTarget=Ae,_=te),Ae=_,M&&J)t:{for(te=ng,w=M,j=J,A=0,_=w;_;_=te(_))A++;_=0;for(var ee=j;ee;ee=te(ee))_++;for(;0<A-_;)w=te(w),A--;for(;0<_-A;)j=te(j),_--;for(;A--;){if(w===j||j!==null&&w===j.alternate){te=w;break t}w=te(w),j=te(j)}te=null}else te=null;M!==null&&bf(D,R,M,te,!1),J!==null&&Ae!==null&&bf(D,Ae,J,te,!0)}}e:{if(R=T?cn(T):window,M=R.nodeName&&R.nodeName.toLowerCase(),M==="select"||M==="input"&&R.type==="file")var ve=_d;else if(Md(R))if(Dd)ve=hx;else{ve=fx;var F=px}else M=R.nodeName,!M||M.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?T&&ps(T.elementType)&&(ve=_d):ve=mx;if(ve&&(ve=ve(e,T))){Od(D,ve,a,O);break e}F&&F(e,R,T),e==="focusout"&&T&&R.type==="number"&&T.memoizedProps.value!=null&&us(R,"number",R.value)}switch(F=T?cn(T):window,e){case"focusin":(Md(F)||F.contentEditable==="true")&&(yl=F,zs=T,gn=null);break;case"focusout":gn=zs=yl=null;break;case"mousedown":Es=!0;break;case"contextmenu":case"mouseup":case"dragend":Es=!1,Vd(D,a,O);break;case"selectionchange":if(gx)break;case"keydown":case"keyup":Vd(D,a,O)}var de;if(ks)e:{switch(e){case"compositionstart":var he="onCompositionStart";break e;case"compositionend":he="onCompositionEnd";break e;case"compositionupdate":he="onCompositionUpdate";break e}he=void 0}else vl?Rd(e,a)&&(he="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(he="onCompositionStart");he&&(Ed&&a.locale!=="ko"&&(vl||he!=="onCompositionStart"?he==="onCompositionEnd"&&vl&&(de=kd()):(ga=O,gs="value"in ga?ga.value:ga.textContent,vl=!0)),F=mr(T,he),0<F.length&&(he=new Sd(he,e,null,a,O),D.push({event:he,listeners:F}),de?he.data=de:(de=Cd(a),de!==null&&(he.data=de)))),(de=sx?cx(e,a):ox(e,a))&&(he=mr(T,"onBeforeInput"),0<he.length&&(F=new Sd("onBeforeInput","beforeinput",null,a,O),D.push({event:F,listeners:he}),F.data=de)),eg(D,e,T,a,O)}xf(D,t)})}function Gn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function mr(e,t){for(var a=t+"Capture",l=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=on(e,a),i!=null&&l.unshift(Gn(e,i,r)),i=on(e,t),i!=null&&l.push(Gn(e,i,r))),e.tag===3)return l;e=e.return}return[]}function ng(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function bf(e,t,a,l,i){for(var r=t._reactName,d=[];a!==null&&a!==l;){var f=a,v=f.alternate,T=f.stateNode;if(f=f.tag,v!==null&&v===l)break;f!==5&&f!==26&&f!==27||T===null||(v=T,i?(T=on(a,r),T!=null&&d.unshift(Gn(a,T,v))):i||(T=on(a,r),T!=null&&d.push(Gn(a,T,v)))),a=a.return}d.length!==0&&e.push({event:t,listeners:d})}var ig=/\r\n?/g,rg=/\u0000|\uFFFD/g;function vf(e){return(typeof e=="string"?e:""+e).replace(ig,`
`).replace(rg,"")}function yf(e,t){return t=vf(t),vf(e)===t}function Ee(e,t,a,l,i,r){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||xl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&xl(e,""+l);break;case"className":bi(e,"class",l);break;case"tabIndex":bi(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":bi(e,a,l);break;case"style":vd(e,l,r);break;case"data":if(t!=="object"){bi(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=yi(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&Ee(e,t,"name",i.name,i,null),Ee(e,t,"formEncType",i.formEncType,i,null),Ee(e,t,"formMethod",i.formMethod,i,null),Ee(e,t,"formTarget",i.formTarget,i,null)):(Ee(e,t,"encType",i.encType,i,null),Ee(e,t,"method",i.method,i,null),Ee(e,t,"target",i.target,i,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=yi(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Wt);break;case"onScroll":l!=null&&pe("scroll",e);break;case"onScrollEnd":l!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=yi(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":pe("beforetoggle",e),pe("toggle",e),gi(e,"popover",l);break;case"xlinkActuate":Jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Jt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Jt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Jt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Jt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":gi(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=_h.get(a)||a,gi(e,a,l))}}function Pc(e,t,a,l,i,r){switch(a){case"style":vd(e,l,r);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof l=="string"?xl(e,l):(typeof l=="number"||typeof l=="bigint")&&xl(e,""+l);break;case"onScroll":l!=null&&pe("scroll",e);break;case"onScrollEnd":l!=null&&pe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Wt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!dd.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),r=e[rt]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof l=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,i);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):gi(e,a,l)}}}function tt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var l=!1,i=!1,r;for(r in a)if(a.hasOwnProperty(r)){var d=a[r];if(d!=null)switch(r){case"src":l=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ee(e,t,r,d,a,null)}}i&&Ee(e,t,"srcSet",a.srcSet,a,null),l&&Ee(e,t,"src",a.src,a,null);return;case"input":pe("invalid",e);var f=r=d=i=null,v=null,T=null;for(l in a)if(a.hasOwnProperty(l)){var O=a[l];if(O!=null)switch(l){case"name":i=O;break;case"type":d=O;break;case"checked":v=O;break;case"defaultChecked":T=O;break;case"value":r=O;break;case"defaultValue":f=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(o(137,t));break;default:Ee(e,t,l,O,a,null)}}hd(e,r,f,v,T,d,i,!1);return;case"select":pe("invalid",e),l=d=r=null;for(i in a)if(a.hasOwnProperty(i)&&(f=a[i],f!=null))switch(i){case"value":r=f;break;case"defaultValue":d=f;break;case"multiple":l=f;default:Ee(e,t,i,f,a,null)}t=r,a=d,e.multiple=!!l,t!=null?hl(e,!!l,t,!1):a!=null&&hl(e,!!l,a,!0);return;case"textarea":pe("invalid",e),r=i=l=null;for(d in a)if(a.hasOwnProperty(d)&&(f=a[d],f!=null))switch(d){case"value":l=f;break;case"defaultValue":i=f;break;case"children":r=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(o(91));break;default:Ee(e,t,d,f,a,null)}gd(e,l,i,r);return;case"option":for(v in a)a.hasOwnProperty(v)&&(l=a[v],l!=null)&&(v==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Ee(e,t,v,l,a,null));return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(l=0;l<qn.length;l++)pe(qn[l],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in a)if(a.hasOwnProperty(T)&&(l=a[T],l!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ee(e,t,T,l,a,null)}return;default:if(ps(t)){for(O in a)a.hasOwnProperty(O)&&(l=a[O],l!==void 0&&Pc(e,t,O,l,a,void 0));return}}for(f in a)a.hasOwnProperty(f)&&(l=a[f],l!=null&&Ee(e,t,f,l,a,null))}function sg(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,d=null,f=null,v=null,T=null,O=null;for(M in a){var D=a[M];if(a.hasOwnProperty(M)&&D!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":v=D;default:l.hasOwnProperty(M)||Ee(e,t,M,null,l,D)}}for(var R in l){var M=l[R];if(D=a[R],l.hasOwnProperty(R)&&(M!=null||D!=null))switch(R){case"type":r=M;break;case"name":i=M;break;case"checked":T=M;break;case"defaultChecked":O=M;break;case"value":d=M;break;case"defaultValue":f=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(o(137,t));break;default:M!==D&&Ee(e,t,R,M,l,D)}}ds(e,d,f,v,T,O,r,i);return;case"select":M=d=f=R=null;for(r in a)if(v=a[r],a.hasOwnProperty(r)&&v!=null)switch(r){case"value":break;case"multiple":M=v;default:l.hasOwnProperty(r)||Ee(e,t,r,null,l,v)}for(i in l)if(r=l[i],v=a[i],l.hasOwnProperty(i)&&(r!=null||v!=null))switch(i){case"value":R=r;break;case"defaultValue":f=r;break;case"multiple":d=r;default:r!==v&&Ee(e,t,i,r,l,v)}t=f,a=d,l=M,R!=null?hl(e,!!a,R,!1):!!l!=!!a&&(t!=null?hl(e,!!a,t,!0):hl(e,!!a,a?[]:"",!1));return;case"textarea":M=R=null;for(f in a)if(i=a[f],a.hasOwnProperty(f)&&i!=null&&!l.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:Ee(e,t,f,null,l,i)}for(d in l)if(i=l[d],r=a[d],l.hasOwnProperty(d)&&(i!=null||r!=null))switch(d){case"value":R=i;break;case"defaultValue":M=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(o(91));break;default:i!==r&&Ee(e,t,d,i,l,r)}xd(e,R,M);return;case"option":for(var J in a)R=a[J],a.hasOwnProperty(J)&&R!=null&&!l.hasOwnProperty(J)&&(J==="selected"?e.selected=!1:Ee(e,t,J,null,l,R));for(v in l)R=l[v],M=a[v],l.hasOwnProperty(v)&&R!==M&&(R!=null||M!=null)&&(v==="selected"?e.selected=R&&typeof R!="function"&&typeof R!="symbol":Ee(e,t,v,R,l,M));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)R=a[te],a.hasOwnProperty(te)&&R!=null&&!l.hasOwnProperty(te)&&Ee(e,t,te,null,l,R);for(T in l)if(R=l[T],M=a[T],l.hasOwnProperty(T)&&R!==M&&(R!=null||M!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(o(137,t));break;default:Ee(e,t,T,R,l,M)}return;default:if(ps(t)){for(var Ae in a)R=a[Ae],a.hasOwnProperty(Ae)&&R!==void 0&&!l.hasOwnProperty(Ae)&&Pc(e,t,Ae,void 0,l,R);for(O in l)R=l[O],M=a[O],!l.hasOwnProperty(O)||R===M||R===void 0&&M===void 0||Pc(e,t,O,R,l,M);return}}for(var w in a)R=a[w],a.hasOwnProperty(w)&&R!=null&&!l.hasOwnProperty(w)&&Ee(e,t,w,null,l,R);for(D in l)R=l[D],M=a[D],!l.hasOwnProperty(D)||R===M||R==null&&M==null||Ee(e,t,D,R,l,M)}function jf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function cg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var i=a[l],r=i.transferSize,d=i.initiatorType,f=i.duration;if(r&&f&&jf(d)){for(d=0,f=i.responseEnd,l+=1;l<a.length;l++){var v=a[l],T=v.startTime;if(T>f)break;var O=v.transferSize,D=v.initiatorType;O&&jf(D)&&(v=v.responseEnd,d+=O*(v<f?1:(f-T)/(v-T)))}if(--l,t+=8*(r+d)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ic=null,eo=null;function hr(e){return e.nodeType===9?e:e.ownerDocument}function kf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Nf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function to(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ao=null;function og(){var e=window.event;return e&&e.type==="popstate"?e===ao?!1:(ao=e,!0):(ao=null,!1)}var wf=typeof setTimeout=="function"?setTimeout:void 0,dg=typeof clearTimeout=="function"?clearTimeout:void 0,Sf=typeof Promise=="function"?Promise:void 0,ug=typeof queueMicrotask=="function"?queueMicrotask:typeof Sf<"u"?function(e){return Sf.resolve(null).then(e).catch(pg)}:wf;function pg(e){setTimeout(function(){throw e})}function _a(e){return e==="head"}function zf(e,t){var a=t,l=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(i),Xl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Vn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Vn(a);for(var r=a.firstChild;r;){var d=r.nextSibling,f=r.nodeName;r[sn]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=d}}else a==="body"&&Vn(e.ownerDocument.body);a=i}while(a);Xl(t)}function Ef(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function lo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":lo(a),cs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function fg(e,t,a,l){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[sn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Mt(e.nextSibling),e===null)break}return null}function mg(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Mt(e.nextSibling),e===null))return null;return e}function Af(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Mt(e.nextSibling),e===null))return null;return e}function no(e){return e.data==="$?"||e.data==="$~"}function io(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function hg(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var ro=null;function Tf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Mt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Rf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Cf(e,t,a){switch(t=hr(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Vn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);cs(e)}var Ot=new Map,Mf=new Set;function xr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ua=V.d;V.d={f:xg,r:gg,D:bg,C:vg,L:yg,m:jg,X:Ng,S:kg,M:wg};function xg(){var e=ua.f(),t=sr();return e||t}function gg(e){var t=pl(e);t!==null&&t.tag===5&&t.type==="form"?Ju(t):ua.r(e)}var Ql=typeof document>"u"?null:document;function Of(e,t,a){var l=Ql;if(l&&typeof t=="string"&&t){var i=St(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Mf.has(i)||(Mf.add(i),e={rel:e,crossOrigin:a,href:t},l.querySelector(i)===null&&(t=l.createElement("link"),tt(t,"link",e),Je(t),l.head.appendChild(t)))}}function bg(e){ua.D(e),Of("dns-prefetch",e,null)}function vg(e,t){ua.C(e,t),Of("preconnect",e,t)}function yg(e,t,a){ua.L(e,t,a);var l=Ql;if(l&&e&&t){var i='link[rel="preload"][as="'+St(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+St(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+St(a.imageSizes)+'"]')):i+='[href="'+St(e)+'"]';var r=i;switch(t){case"style":r=Kl(e);break;case"script":r=Zl(e)}Ot.has(r)||(e=N({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ot.set(r,e),l.querySelector(i)!==null||t==="style"&&l.querySelector(Qn(r))||t==="script"&&l.querySelector(Kn(r))||(t=l.createElement("link"),tt(t,"link",e),Je(t),l.head.appendChild(t)))}}function jg(e,t){ua.m(e,t);var a=Ql;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+St(l)+'"][href="'+St(e)+'"]',r=i;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Zl(e)}if(!Ot.has(r)&&(e=N({rel:"modulepreload",href:e},t),Ot.set(r,e),a.querySelector(i)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Kn(r)))return}l=a.createElement("link"),tt(l,"link",e),Je(l),a.head.appendChild(l)}}}function kg(e,t,a){ua.S(e,t,a);var l=Ql;if(l&&e){var i=fl(l).hoistableStyles,r=Kl(e);t=t||"default";var d=i.get(r);if(!d){var f={loading:0,preload:null};if(d=l.querySelector(Qn(r)))f.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ot.get(r))&&so(e,a);var v=d=l.createElement("link");Je(v),tt(v,"link",e),v._p=new Promise(function(T,O){v.onload=T,v.onerror=O}),v.addEventListener("load",function(){f.loading|=1}),v.addEventListener("error",function(){f.loading|=2}),f.loading|=4,gr(d,t,l)}d={type:"stylesheet",instance:d,count:1,state:f},i.set(r,d)}}}function Ng(e,t){ua.X(e,t);var a=Ql;if(a&&e){var l=fl(a).hoistableScripts,i=Zl(e),r=l.get(i);r||(r=a.querySelector(Kn(i)),r||(e=N({src:e,async:!0},t),(t=Ot.get(i))&&co(e,t),r=a.createElement("script"),Je(r),tt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(i,r))}}function wg(e,t){ua.M(e,t);var a=Ql;if(a&&e){var l=fl(a).hoistableScripts,i=Zl(e),r=l.get(i);r||(r=a.querySelector(Kn(i)),r||(e=N({src:e,async:!0,type:"module"},t),(t=Ot.get(i))&&co(e,t),r=a.createElement("script"),Je(r),tt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(i,r))}}function _f(e,t,a,l){var i=(i=oe.current)?xr(i):null;if(!i)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Kl(a.href),a=fl(i).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Kl(a.href);var r=fl(i).hoistableStyles,d=r.get(e);if(d||(i=i.ownerDocument||i,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,d),(r=i.querySelector(Qn(e)))&&!r._p&&(d.instance=r,d.state.loading=5),Ot.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ot.set(e,a),r||Sg(i,e,a,d.state))),t&&l===null)throw Error(o(528,""));return d}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Zl(a),a=fl(i).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Kl(e){return'href="'+St(e)+'"'}function Qn(e){return'link[rel="stylesheet"]['+e+"]"}function Df(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function Sg(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),tt(t,"link",a),Je(t),e.head.appendChild(t))}function Zl(e){return'[src="'+St(e)+'"]'}function Kn(e){return"script[async]"+e}function Uf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+St(a.href)+'"]');if(l)return t.instance=l,Je(l),l;var i=N({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Je(l),tt(l,"style",i),gr(l,a.precedence,e),t.instance=l;case"stylesheet":i=Kl(a.href);var r=e.querySelector(Qn(i));if(r)return t.state.loading|=4,t.instance=r,Je(r),r;l=Df(a),(i=Ot.get(i))&&so(l,i),r=(e.ownerDocument||e).createElement("link"),Je(r);var d=r;return d._p=new Promise(function(f,v){d.onload=f,d.onerror=v}),tt(r,"link",l),t.state.loading|=4,gr(r,a.precedence,e),t.instance=r;case"script":return r=Zl(a.src),(i=e.querySelector(Kn(r)))?(t.instance=i,Je(i),i):(l=a,(i=Ot.get(r))&&(l=N({},a),co(l,i)),e=e.ownerDocument||e,i=e.createElement("script"),Je(i),tt(i,"link",l),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,gr(l,a.precedence,e));return t.instance}function gr(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=l.length?l[l.length-1]:null,r=i,d=0;d<l.length;d++){var f=l[d];if(f.dataset.precedence===t)r=f;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function so(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function co(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var br=null;function Bf(e,t,a){if(br===null){var l=new Map,i=br=new Map;i.set(a,l)}else i=br,l=i.get(a),l||(l=new Map,i.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var r=a[i];if(!(r[sn]||r[Fe]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var d=r.getAttribute(t)||"";d=e+d;var f=l.get(d);f?f.push(r):l.set(d,[r])}}return l}function Hf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function zg(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Lf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Eg(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=Kl(l.href),r=t.querySelector(Qn(i));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=vr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,Je(r);return}r=t.ownerDocument||t,l=Df(l),(i=Ot.get(i))&&so(l,i),r=r.createElement("link"),Je(r);var d=r;d._p=new Promise(function(f,v){d.onload=f,d.onerror=v}),tt(r,"link",l),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=vr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var oo=0;function Ag(e,t){return e.stylesheets&&e.count===0&&jr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&jr(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&oo===0&&(oo=62500*cg());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&jr(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>oo?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(i)}}:null}function vr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)jr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var yr=null;function jr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,yr=new Map,t.forEach(Tg,e),yr=null,vr.call(e))}function Tg(e,t){if(!(t.state.loading&4)){var a=yr.get(e);if(a)var l=a.get(null);else{a=new Map,yr.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var d=i[r];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(a.set(d.dataset.precedence,d),l=d)}l&&a.set(null,l)}i=t.instance,d=i.getAttribute("data-precedence"),r=a.get(d)||l,r===l&&a.set(null,i),a.set(d,i),this.count++,l=vr.bind(this),i.addEventListener("load",l),i.addEventListener("error",l),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Zn={$$typeof:q,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function Rg(e,t,a,l,i,r,d,f,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ns(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ns(0),this.hiddenUpdates=ns(null),this.identifierPrefix=l,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function Yf(e,t,a,l,i,r,d,f,v,T,O,D){return e=new Rg(e,t,a,d,v,T,O,D,f),t=1,r===!0&&(t|=24),r=gt(3,null,null,t),e.current=r,r.stateNode=e,t=Gs(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:l,isDehydrated:a,cache:t},Zs(r),e}function qf(e){return e?(e=Nl,e):Nl}function Gf(e,t,a,l,i,r){i=qf(i),l.context===null?l.context=i:l.pendingContext=i,l=Na(t),l.payload={element:a},r=r===void 0?null:r,r!==null&&(l.callback=r),a=wa(e,l,t),a!==null&&(pt(a,e,t),wn(a,e,t))}function Vf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function uo(e,t){Vf(e,t),(e=e.alternate)&&Vf(e,t)}function Qf(e){if(e.tag===13||e.tag===31){var t=Wa(e,67108864);t!==null&&pt(t,e,67108864),uo(e,67108864)}}function Kf(e){if(e.tag===13||e.tag===31){var t=kt();t=is(t);var a=Wa(e,t);a!==null&&pt(a,e,t),uo(e,t)}}var kr=!0;function Cg(e,t,a,l){var i=C.T;C.T=null;var r=V.p;try{V.p=2,po(e,t,a,l)}finally{V.p=r,C.T=i}}function Mg(e,t,a,l){var i=C.T;C.T=null;var r=V.p;try{V.p=8,po(e,t,a,l)}finally{V.p=r,C.T=i}}function po(e,t,a,l){if(kr){var i=fo(l);if(i===null)Fc(e,t,l,Nr,a),Xf(e,l);else if(_g(i,e,t,a,l))l.stopPropagation();else if(Xf(e,l),t&4&&-1<Og.indexOf(e)){for(;i!==null;){var r=pl(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var d=Qa(r.pendingLanes);if(d!==0){var f=r;for(f.pendingLanes|=2,f.entangledLanes|=2;d;){var v=1<<31-ht(d);f.entanglements[1]|=v,d&=~v}Vt(r),(Ne&6)===0&&(ir=ft()+500,Yn(0))}}break;case 31:case 13:f=Wa(r,2),f!==null&&pt(f,r,2),sr(),uo(r,2)}if(r=fo(l),r===null&&Fc(e,t,l,Nr,a),r===i)break;i=r}i!==null&&l.stopPropagation()}else Fc(e,t,l,null,a)}}function fo(e){return e=ms(e),mo(e)}var Nr=null;function mo(e){if(Nr=null,e=ul(e),e!==null){var t=m(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=x(t),e!==null)return e;e=null}else if(a===31){if(e=b(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Nr=e,null}function Zf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bh()){case Io:return 2;case ed:return 8;case pi:case vh:return 32;case td:return 268435456;default:return 32}default:return 32}}var ho=!1,Da=null,Ua=null,Ba=null,Xn=new Map,Jn=new Map,Ha=[],Og="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Xf(e,t){switch(e){case"focusin":case"focusout":Da=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":Ba=null;break;case"pointerover":case"pointerout":Xn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jn.delete(t.pointerId)}}function Wn(e,t,a,l,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:r,targetContainers:[i]},t!==null&&(t=pl(t),t!==null&&Qf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function _g(e,t,a,l,i){switch(t){case"focusin":return Da=Wn(Da,e,t,a,l,i),!0;case"dragenter":return Ua=Wn(Ua,e,t,a,l,i),!0;case"mouseover":return Ba=Wn(Ba,e,t,a,l,i),!0;case"pointerover":var r=i.pointerId;return Xn.set(r,Wn(Xn.get(r)||null,e,t,a,l,i)),!0;case"gotpointercapture":return r=i.pointerId,Jn.set(r,Wn(Jn.get(r)||null,e,t,a,l,i)),!0}return!1}function Jf(e){var t=ul(e.target);if(t!==null){var a=m(t);if(a!==null){if(t=a.tag,t===13){if(t=x(a),t!==null){e.blockedOn=t,sd(e.priority,function(){Kf(a)});return}}else if(t===31){if(t=b(a),t!==null){e.blockedOn=t,sd(e.priority,function(){Kf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=fo(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);fs=l,a.target.dispatchEvent(l),fs=null}else return t=pl(a),t!==null&&Qf(t),e.blockedOn=a,!1;t.shift()}return!0}function Wf(e,t,a){wr(e)&&a.delete(t)}function Dg(){ho=!1,Da!==null&&wr(Da)&&(Da=null),Ua!==null&&wr(Ua)&&(Ua=null),Ba!==null&&wr(Ba)&&(Ba=null),Xn.forEach(Wf),Jn.forEach(Wf)}function Sr(e,t){e.blockedOn===t&&(e.blockedOn=null,ho||(ho=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Dg)))}var zr=null;function $f(e){zr!==e&&(zr=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){zr===e&&(zr=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],i=e[t+2];if(typeof l!="function"){if(mo(l||a)===null)continue;break}var r=pl(a);r!==null&&(e.splice(t,3),t-=3,pc(r,{pending:!0,data:i,method:a.method,action:l},l,i))}}))}function Xl(e){function t(v){return Sr(v,e)}Da!==null&&Sr(Da,e),Ua!==null&&Sr(Ua,e),Ba!==null&&Sr(Ba,e),Xn.forEach(t),Jn.forEach(t);for(var a=0;a<Ha.length;a++){var l=Ha[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ha.length&&(a=Ha[0],a.blockedOn===null);)Jf(a),a.blockedOn===null&&Ha.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var i=a[l],r=a[l+1],d=i[rt]||null;if(typeof r=="function")d||$f(a);else if(d){var f=null;if(r&&r.hasAttribute("formAction")){if(i=r,d=r[rt]||null)f=d.formAction;else if(mo(i)!==null)continue}else f=d.action;typeof f=="function"?a[l+1]=f:(a.splice(l,3),l-=3),$f(a)}}}function Ff(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(d){return i=d})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function xo(e){this._internalRoot=e}Er.prototype.render=xo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,l=kt();Gf(a,l,e,t,null,null)},Er.prototype.unmount=xo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gf(e.current,2,null,e,null,null),sr(),t[dl]=null}};function Er(e){this._internalRoot=e}Er.prototype.unstable_scheduleHydration=function(e){if(e){var t=rd();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ha.length&&t!==0&&t<Ha[a].priority;a++);Ha.splice(a,0,e),a===0&&Jf(e)}};var Pf=u.version;if(Pf!=="19.2.4")throw Error(o(527,Pf,"19.2.4"));V.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=h(t),e=e!==null?E(e):null,e=e===null?null:e.stateNode,e};var Ug={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ar=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ar.isDisabled&&Ar.supportsFiber)try{ln=Ar.inject(Ug),mt=Ar}catch{}}return Fn.createRoot=function(e,t){if(!p(e))throw Error(o(299));var a=!1,l="",i=np,r=ip,d=rp;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=Yf(e,1,!1,null,null,a,l,null,i,r,d,Ff),e[dl]=t.current,$c(e),new xo(t)},Fn.hydrateRoot=function(e,t,a){if(!p(e))throw Error(o(299));var l=!1,i="",r=np,d=ip,f=rp,v=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(d=a.onCaughtError),a.onRecoverableError!==void 0&&(f=a.onRecoverableError),a.formState!==void 0&&(v=a.formState)),t=Yf(e,1,!0,t,a??null,l,i,v,r,d,f,Ff),t.context=qf(null),a=t.current,l=kt(),l=is(l),i=Na(l),i.callback=null,wa(a,i,l),a=l,t.current.lanes=a,rn(t,a),Vt(t),e[dl]=t.current,$c(e),new Er(t)},Fn.version="19.2.4",Fn}var cm;function Zg(){if(cm)return vo.exports;cm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(u){console.error(u)}}return s(),vo.exports=Kg(),vo.exports}var Xg=Zg();var om="popstate";function dm(s){return typeof s=="object"&&s!=null&&"pathname"in s&&"search"in s&&"hash"in s&&"state"in s&&"key"in s}function Jg(s={}){function u(o,p){let m=p.state?.masked,{pathname:x,search:b,hash:g}=m||o.location;return Oo("",{pathname:x,search:b,hash:g},p.state&&p.state.usr||null,p.state&&p.state.key||"default",m?{pathname:o.location.pathname,search:o.location.search,hash:o.location.hash}:void 0)}function c(o,p){return typeof p=="string"?p:ni(p)}return $g(u,c,null,s)}function Xe(s,u){if(s===!1||s===null||typeof s>"u")throw new Error(u)}function Kt(s,u){if(!s){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function Wg(){return Math.random().toString(36).substring(2,10)}function um(s,u){return{usr:s.state,key:s.key,idx:u,masked:s.unstable_mask?{pathname:s.pathname,search:s.search,hash:s.hash}:void 0}}function Oo(s,u,c=null,o,p){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof u=="string"?ri(u):u,state:c,key:u&&u.key||o||Wg(),unstable_mask:p}}function ni({pathname:s="/",search:u="",hash:c=""}){return u&&u!=="?"&&(s+=u.charAt(0)==="?"?u:"?"+u),c&&c!=="#"&&(s+=c.charAt(0)==="#"?c:"#"+c),s}function ri(s){let u={};if(s){let c=s.indexOf("#");c>=0&&(u.hash=s.substring(c),s=s.substring(0,c));let o=s.indexOf("?");o>=0&&(u.search=s.substring(o),s=s.substring(0,o)),s&&(u.pathname=s)}return u}function $g(s,u,c,o={}){let{window:p=document.defaultView,v5Compat:m=!1}=o,x=p.history,b="POP",g=null,h=E();h==null&&(h=0,x.replaceState({...x.state,idx:h},""));function E(){return(x.state||{idx:null}).idx}function N(){b="POP";let L=E(),Y=L==null?null:L-h;h=L,g&&g({action:b,location:G.location,delta:Y})}function B(L,Y){b="PUSH";let Z=dm(L)?L:Oo(G.location,L,Y);h=E()+1;let q=um(Z,h),X=G.createHref(Z.unstable_mask||Z);try{x.pushState(q,"",X)}catch(le){if(le instanceof DOMException&&le.name==="DataCloneError")throw le;p.location.assign(X)}m&&g&&g({action:b,location:G.location,delta:1})}function K(L,Y){b="REPLACE";let Z=dm(L)?L:Oo(G.location,L,Y);h=E();let q=um(Z,h),X=G.createHref(Z.unstable_mask||Z);x.replaceState(q,"",X),m&&g&&g({action:b,location:G.location,delta:0})}function S(L){return Fg(L)}let G={get action(){return b},get location(){return s(p,x)},listen(L){if(g)throw new Error("A history only accepts one active listener");return p.addEventListener(om,N),g=L,()=>{p.removeEventListener(om,N),g=null}},createHref(L){return u(p,L)},createURL:S,encodeLocation(L){let Y=S(L);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:B,replace:K,go(L){return x.go(L)}};return G}function Fg(s,u=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),Xe(c,"No window.location.(origin|href) available to create URL");let o=typeof s=="string"?s:ni(s);return o=o.replace(/ $/,"%20"),!u&&o.startsWith("//")&&(o=c+o),new URL(o,c)}function Bm(s,u,c="/"){return Pg(s,u,c,!1)}function Pg(s,u,c,o){let p=typeof u=="string"?ri(u):u,m=pa(p.pathname||"/",c);if(m==null)return null;let x=Hm(s);Ig(x);let b=null;for(let g=0;b==null&&g<x.length;++g){let h=d0(m);b=c0(x[g],h,o)}return b}function Hm(s,u=[],c=[],o="",p=!1){let m=(x,b,g=p,h)=>{let E={relativePath:h===void 0?x.path||"":h,caseSensitive:x.caseSensitive===!0,childrenIndex:b,route:x};if(E.relativePath.startsWith("/")){if(!E.relativePath.startsWith(o)&&g)return;Xe(E.relativePath.startsWith(o),`Absolute route path "${E.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),E.relativePath=E.relativePath.slice(o.length)}let N=Qt([o,E.relativePath]),B=c.concat(E);x.children&&x.children.length>0&&(Xe(x.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${N}".`),Hm(x.children,u,B,N,g)),!(x.path==null&&!x.index)&&u.push({path:N,score:r0(N,x.index),routesMeta:B})};return s.forEach((x,b)=>{if(x.path===""||!x.path?.includes("?"))m(x,b);else for(let g of Lm(x.path))m(x,b,!0,g)}),u}function Lm(s){let u=s.split("/");if(u.length===0)return[];let[c,...o]=u,p=c.endsWith("?"),m=c.replace(/\?$/,"");if(o.length===0)return p?[m,""]:[m];let x=Lm(o.join("/")),b=[];return b.push(...x.map(g=>g===""?m:[m,g].join("/"))),p&&b.push(...x),b.map(g=>s.startsWith("/")&&g===""?"/":g)}function Ig(s){s.sort((u,c)=>u.score!==c.score?c.score-u.score:s0(u.routesMeta.map(o=>o.childrenIndex),c.routesMeta.map(o=>o.childrenIndex)))}var e0=/^:[\w-]+$/,t0=3,a0=2,l0=1,n0=10,i0=-2,pm=s=>s==="*";function r0(s,u){let c=s.split("/"),o=c.length;return c.some(pm)&&(o+=i0),u&&(o+=a0),c.filter(p=>!pm(p)).reduce((p,m)=>p+(e0.test(m)?t0:m===""?l0:n0),o)}function s0(s,u){return s.length===u.length&&s.slice(0,-1).every((o,p)=>o===u[p])?s[s.length-1]-u[u.length-1]:0}function c0(s,u,c=!1){let{routesMeta:o}=s,p={},m="/",x=[];for(let b=0;b<o.length;++b){let g=o[b],h=b===o.length-1,E=m==="/"?u:u.slice(m.length)||"/",N=Gr({path:g.relativePath,caseSensitive:g.caseSensitive,end:h},E),B=g.route;if(!N&&h&&c&&!o[o.length-1].route.index&&(N=Gr({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},E)),!N)return null;Object.assign(p,N.params),x.push({params:p,pathname:Qt([m,N.pathname]),pathnameBase:m0(Qt([m,N.pathnameBase])),route:B}),N.pathnameBase!=="/"&&(m=Qt([m,N.pathnameBase]))}return x}function Gr(s,u){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[c,o]=o0(s.path,s.caseSensitive,s.end),p=u.match(c);if(!p)return null;let m=p[0],x=m.replace(/(.)\/+$/,"$1"),b=p.slice(1);return{params:o.reduce((h,{paramName:E,isOptional:N},B)=>{if(E==="*"){let S=b[B]||"";x=m.slice(0,m.length-S.length).replace(/(.)\/+$/,"$1")}const K=b[B];return N&&!K?h[E]=void 0:h[E]=(K||"").replace(/%2F/g,"/"),h},{}),pathname:m,pathnameBase:x,pattern:s}}function o0(s,u=!1,c=!0){Kt(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let o=[],p="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(x,b,g,h,E)=>{if(o.push({paramName:b,isOptional:g!=null}),g){let N=E.charAt(h+x.length);return N&&N!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(o.push({paramName:"*"}),p+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?p+="\\/*$":s!==""&&s!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,u?void 0:"i"),o]}function d0(s){try{return s.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return Kt(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),s}}function pa(s,u){if(u==="/")return s;if(!s.toLowerCase().startsWith(u.toLowerCase()))return null;let c=u.endsWith("/")?u.length-1:u.length,o=s.charAt(c);return o&&o!=="/"?null:s.slice(c)||"/"}var u0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function p0(s,u="/"){let{pathname:c,search:o="",hash:p=""}=typeof s=="string"?ri(s):s,m;return c?(c=c.replace(/\/\/+/g,"/"),c.startsWith("/")?m=fm(c.substring(1),"/"):m=fm(c,u)):m=u,{pathname:m,search:h0(o),hash:x0(p)}}function fm(s,u){let c=u.replace(/\/+$/,"").split("/");return s.split("/").forEach(p=>{p===".."?c.length>1&&c.pop():p!=="."&&c.push(p)}),c.length>1?c.join("/"):"/"}function No(s,u,c,o){return`Cannot include a '${s}' character in a manually specified \`to.${u}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function f0(s){return s.filter((u,c)=>c===0||u.route.path&&u.route.path.length>0)}function Ym(s){let u=f0(s);return u.map((c,o)=>o===u.length-1?c.pathname:c.pathnameBase)}function qo(s,u,c,o=!1){let p;typeof s=="string"?p=ri(s):(p={...s},Xe(!p.pathname||!p.pathname.includes("?"),No("?","pathname","search",p)),Xe(!p.pathname||!p.pathname.includes("#"),No("#","pathname","hash",p)),Xe(!p.search||!p.search.includes("#"),No("#","search","hash",p)));let m=s===""||p.pathname==="",x=m?"/":p.pathname,b;if(x==null)b=c;else{let N=u.length-1;if(!o&&x.startsWith("..")){let B=x.split("/");for(;B[0]==="..";)B.shift(),N-=1;p.pathname=B.join("/")}b=N>=0?u[N]:"/"}let g=p0(p,b),h=x&&x!=="/"&&x.endsWith("/"),E=(m||x===".")&&c.endsWith("/");return!g.pathname.endsWith("/")&&(h||E)&&(g.pathname+="/"),g}var Qt=s=>s.join("/").replace(/\/\/+/g,"/"),m0=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),h0=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,x0=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,g0=class{constructor(s,u,c,o=!1){this.status=s,this.statusText=u||"",this.internal=o,c instanceof Error?(this.data=c.toString(),this.error=c):this.data=c}};function b0(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function v0(s){return s.map(u=>u.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var qm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Gm(s,u){let c=s;if(typeof c!="string"||!u0.test(c))return{absoluteURL:void 0,isExternal:!1,to:c};let o=c,p=!1;if(qm)try{let m=new URL(window.location.href),x=c.startsWith("//")?new URL(m.protocol+c):new URL(c),b=pa(x.pathname,u);x.origin===m.origin&&b!=null?c=b+x.search+x.hash:p=!0}catch{Kt(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:p,to:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Vm=["POST","PUT","PATCH","DELETE"];new Set(Vm);var y0=["GET",...Vm];new Set(y0);var Pl=y.createContext(null);Pl.displayName="DataRouter";var Zr=y.createContext(null);Zr.displayName="DataRouterState";var j0=y.createContext(!1),Qm=y.createContext({isTransitioning:!1});Qm.displayName="ViewTransition";var k0=y.createContext(new Map);k0.displayName="Fetchers";var N0=y.createContext(null);N0.displayName="Await";var _t=y.createContext(null);_t.displayName="Navigation";var Xr=y.createContext(null);Xr.displayName="Location";var fa=y.createContext({outlet:null,matches:[],isDataRoute:!1});fa.displayName="Route";var Go=y.createContext(null);Go.displayName="RouteError";var Km="REACT_ROUTER_ERROR",w0="REDIRECT",S0="ROUTE_ERROR_RESPONSE";function z0(s){if(s.startsWith(`${Km}:${w0}:{`))try{let u=JSON.parse(s.slice(28));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.location=="string"&&typeof u.reloadDocument=="boolean"&&typeof u.replace=="boolean")return u}catch{}}function E0(s){if(s.startsWith(`${Km}:${S0}:{`))try{let u=JSON.parse(s.slice(40));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string")return new g0(u.status,u.statusText,u.data)}catch{}}function A0(s,{relative:u}={}){Xe(si(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:o}=y.useContext(_t),{hash:p,pathname:m,search:x}=ci(s,{relative:u}),b=m;return c!=="/"&&(b=m==="/"?c:Qt([c,m])),o.createHref({pathname:b,search:x,hash:p})}function si(){return y.useContext(Xr)!=null}function Lt(){return Xe(si(),"useLocation() may be used only in the context of a <Router> component."),y.useContext(Xr).location}var Zm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Xm(s){y.useContext(_t).static||y.useLayoutEffect(s)}function ma(){let{isDataRoute:s}=y.useContext(fa);return s?q0():T0()}function T0(){Xe(si(),"useNavigate() may be used only in the context of a <Router> component.");let s=y.useContext(Pl),{basename:u,navigator:c}=y.useContext(_t),{matches:o}=y.useContext(fa),{pathname:p}=Lt(),m=JSON.stringify(Ym(o)),x=y.useRef(!1);return Xm(()=>{x.current=!0}),y.useCallback((g,h={})=>{if(Kt(x.current,Zm),!x.current)return;if(typeof g=="number"){c.go(g);return}let E=qo(g,JSON.parse(m),p,h.relative==="path");s==null&&u!=="/"&&(E.pathname=E.pathname==="/"?u:Qt([u,E.pathname])),(h.replace?c.replace:c.push)(E,h.state,h)},[u,c,m,p,s])}y.createContext(null);function ci(s,{relative:u}={}){let{matches:c}=y.useContext(fa),{pathname:o}=Lt(),p=JSON.stringify(Ym(c));return y.useMemo(()=>qo(s,JSON.parse(p),o,u==="path"),[s,p,o,u])}function R0(s,u){return Jm(s)}function Jm(s,u,c){Xe(si(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=y.useContext(_t),{matches:p}=y.useContext(fa),m=p[p.length-1],x=m?m.params:{},b=m?m.pathname:"/",g=m?m.pathnameBase:"/",h=m&&m.route;{let L=h&&h.path||"";$m(b,!h||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${b}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let E=Lt(),N;N=E;let B=N.pathname||"/",K=B;if(g!=="/"){let L=g.replace(/^\//,"").split("/");K="/"+B.replace(/^\//,"").split("/").slice(L.length).join("/")}let S=Bm(s,{pathname:K});return Kt(h||S!=null,`No routes matched location "${N.pathname}${N.search}${N.hash}" `),Kt(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),D0(S&&S.map(L=>Object.assign({},L,{params:Object.assign({},x,L.params),pathname:Qt([g,o.encodeLocation?o.encodeLocation(L.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?g:Qt([g,o.encodeLocation?o.encodeLocation(L.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathnameBase])})),p,c)}function C0(){let s=Y0(),u=b0(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),c=s instanceof Error?s.stack:null,o="rgba(200,200,200, 0.5)",p={padding:"0.5rem",backgroundColor:o},m={padding:"2px 4px",backgroundColor:o},x=null;return console.error("Error handled by React Router default ErrorBoundary:",s),x=y.createElement(y.Fragment,null,y.createElement("p",null,"💿 Hey developer 👋"),y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",y.createElement("code",{style:m},"ErrorBoundary")," or"," ",y.createElement("code",{style:m},"errorElement")," prop on your route.")),y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},u),c?y.createElement("pre",{style:p},c):null,x)}var M0=y.createElement(C0,null),Wm=class extends y.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,u){return u.location!==s.location||u.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:u.error,location:u.location,revalidation:s.revalidation||u.revalidation}}componentDidCatch(s,u){this.props.onError?this.props.onError(s,u):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const c=E0(s.digest);c&&(s=c)}let u=s!==void 0?y.createElement(fa.Provider,{value:this.props.routeContext},y.createElement(Go.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?y.createElement(O0,{error:s},u):u}};Wm.contextType=j0;var wo=new WeakMap;function O0({children:s,error:u}){let{basename:c}=y.useContext(_t);if(typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){let o=z0(u.digest);if(o){let p=wo.get(u);if(p)throw p;let m=Gm(o.location,c);if(qm&&!wo.get(u))if(m.isExternal||o.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const x=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:o.replace}));throw wo.set(u,x),x}return y.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return s}function _0({routeContext:s,match:u,children:c}){let o=y.useContext(Pl);return o&&o.static&&o.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=u.route.id),y.createElement(fa.Provider,{value:s},c)}function D0(s,u=[],c){let o=c?.state;if(s==null){if(!o)return null;if(o.errors)s=o.matches;else if(u.length===0&&!o.initialized&&o.matches.length>0)s=o.matches;else return null}let p=s,m=o?.errors;if(m!=null){let E=p.findIndex(N=>N.route.id&&m?.[N.route.id]!==void 0);Xe(E>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),p=p.slice(0,Math.min(p.length,E+1))}let x=!1,b=-1;if(c&&o){x=o.renderFallback;for(let E=0;E<p.length;E++){let N=p[E];if((N.route.HydrateFallback||N.route.hydrateFallbackElement)&&(b=E),N.route.id){let{loaderData:B,errors:K}=o,S=N.route.loader&&!B.hasOwnProperty(N.route.id)&&(!K||K[N.route.id]===void 0);if(N.route.lazy||S){c.isStatic&&(x=!0),b>=0?p=p.slice(0,b+1):p=[p[0]];break}}}}let g=c?.onError,h=o&&g?(E,N)=>{g(E,{location:o.location,params:o.matches?.[0]?.params??{},unstable_pattern:v0(o.matches),errorInfo:N})}:void 0;return p.reduceRight((E,N,B)=>{let K,S=!1,G=null,L=null;o&&(K=m&&N.route.id?m[N.route.id]:void 0,G=N.route.errorElement||M0,x&&(b<0&&B===0?($m("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,L=null):b===B&&(S=!0,L=N.route.hydrateFallbackElement||null)));let Y=u.concat(p.slice(0,B+1)),Z=()=>{let q;return K?q=G:S?q=L:N.route.Component?q=y.createElement(N.route.Component,null):N.route.element?q=N.route.element:q=E,y.createElement(_0,{match:N,routeContext:{outlet:E,matches:Y,isDataRoute:o!=null},children:q})};return o&&(N.route.ErrorBoundary||N.route.errorElement||B===0)?y.createElement(Wm,{location:o.location,revalidation:o.revalidation,component:G,error:K,children:Z(),routeContext:{outlet:null,matches:Y,isDataRoute:!0},onError:h}):Z()},null)}function Vo(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function U0(s){let u=y.useContext(Pl);return Xe(u,Vo(s)),u}function B0(s){let u=y.useContext(Zr);return Xe(u,Vo(s)),u}function H0(s){let u=y.useContext(fa);return Xe(u,Vo(s)),u}function Qo(s){let u=H0(s),c=u.matches[u.matches.length-1];return Xe(c.route.id,`${s} can only be used on routes that contain a unique "id"`),c.route.id}function L0(){return Qo("useRouteId")}function Y0(){let s=y.useContext(Go),u=B0("useRouteError"),c=Qo("useRouteError");return s!==void 0?s:u.errors?.[c]}function q0(){let{router:s}=U0("useNavigate"),u=Qo("useNavigate"),c=y.useRef(!1);return Xm(()=>{c.current=!0}),y.useCallback(async(p,m={})=>{Kt(c.current,Zm),c.current&&(typeof p=="number"?await s.navigate(p):await s.navigate(p,{fromRouteId:u,...m}))},[s,u])}var mm={};function $m(s,u,c){!u&&!mm[s]&&(mm[s]=!0,Kt(!1,c))}y.memo(G0);function G0({routes:s,future:u,state:c,isStatic:o,onError:p}){return Jm(s,void 0,{state:c,isStatic:o,onError:p})}function V0({basename:s="/",children:u=null,location:c,navigationType:o="POP",navigator:p,static:m=!1,unstable_useTransitions:x}){Xe(!si(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=s.replace(/^\/*/,"/"),g=y.useMemo(()=>({basename:b,navigator:p,static:m,unstable_useTransitions:x,future:{}}),[b,p,m,x]);typeof c=="string"&&(c=ri(c));let{pathname:h="/",search:E="",hash:N="",state:B=null,key:K="default",unstable_mask:S}=c,G=y.useMemo(()=>{let L=pa(h,b);return L==null?null:{location:{pathname:L,search:E,hash:N,state:B,key:K,unstable_mask:S},navigationType:o}},[b,h,E,N,B,K,o,S]);return Kt(G!=null,`<Router basename="${b}"> is not able to match the URL "${h}${E}${N}" because it does not start with the basename, so the <Router> won't render anything.`),G==null?null:y.createElement(_t.Provider,{value:g},y.createElement(Xr.Provider,{children:u,value:G}))}var Lr="get",Yr="application/x-www-form-urlencoded";function Jr(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function Q0(s){return Jr(s)&&s.tagName.toLowerCase()==="button"}function K0(s){return Jr(s)&&s.tagName.toLowerCase()==="form"}function Z0(s){return Jr(s)&&s.tagName.toLowerCase()==="input"}function X0(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function J0(s,u){return s.button===0&&(!u||u==="_self")&&!X0(s)}var Tr=null;function W0(){if(Tr===null)try{new FormData(document.createElement("form"),0),Tr=!1}catch{Tr=!0}return Tr}var $0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function So(s){return s!=null&&!$0.has(s)?(Kt(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Yr}"`),null):s}function F0(s,u){let c,o,p,m,x;if(K0(s)){let b=s.getAttribute("action");o=b?pa(b,u):null,c=s.getAttribute("method")||Lr,p=So(s.getAttribute("enctype"))||Yr,m=new FormData(s)}else if(Q0(s)||Z0(s)&&(s.type==="submit"||s.type==="image")){let b=s.form;if(b==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=s.getAttribute("formaction")||b.getAttribute("action");if(o=g?pa(g,u):null,c=s.getAttribute("formmethod")||b.getAttribute("method")||Lr,p=So(s.getAttribute("formenctype"))||So(b.getAttribute("enctype"))||Yr,m=new FormData(b,s),!W0()){let{name:h,type:E,value:N}=s;if(E==="image"){let B=h?`${h}.`:"";m.append(`${B}x`,"0"),m.append(`${B}y`,"0")}else h&&m.append(h,N)}}else{if(Jr(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=Lr,o=null,p=Yr,x=s}return m&&p==="text/plain"&&(x=m,m=void 0),{action:o,method:c.toLowerCase(),encType:p,formData:m,body:x}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ko(s,u){if(s===!1||s===null||typeof s>"u")throw new Error(u)}function P0(s,u,c,o){let p=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return c?p.pathname.endsWith("/")?p.pathname=`${p.pathname}_.${o}`:p.pathname=`${p.pathname}.${o}`:p.pathname==="/"?p.pathname=`_root.${o}`:u&&pa(p.pathname,u)==="/"?p.pathname=`${u.replace(/\/$/,"")}/_root.${o}`:p.pathname=`${p.pathname.replace(/\/$/,"")}.${o}`,p}async function I0(s,u){if(s.id in u)return u[s.id];try{let c=await import(s.module);return u[s.id]=c,c}catch(c){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function eb(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function tb(s,u,c){let o=await Promise.all(s.map(async p=>{let m=u.routes[p.route.id];if(m){let x=await I0(m,c);return x.links?x.links():[]}return[]}));return ib(o.flat(1).filter(eb).filter(p=>p.rel==="stylesheet"||p.rel==="preload").map(p=>p.rel==="stylesheet"?{...p,rel:"prefetch",as:"style"}:{...p,rel:"prefetch"}))}function hm(s,u,c,o,p,m){let x=(g,h)=>c[h]?g.route.id!==c[h].route.id:!0,b=(g,h)=>c[h].pathname!==g.pathname||c[h].route.path?.endsWith("*")&&c[h].params["*"]!==g.params["*"];return m==="assets"?u.filter((g,h)=>x(g,h)||b(g,h)):m==="data"?u.filter((g,h)=>{let E=o.routes[g.route.id];if(!E||!E.hasLoader)return!1;if(x(g,h)||b(g,h))return!0;if(g.route.shouldRevalidate){let N=g.route.shouldRevalidate({currentUrl:new URL(p.pathname+p.search+p.hash,window.origin),currentParams:c[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof N=="boolean")return N}return!0}):[]}function ab(s,u,{includeHydrateFallback:c}={}){return lb(s.map(o=>{let p=u.routes[o.route.id];if(!p)return[];let m=[p.module];return p.clientActionModule&&(m=m.concat(p.clientActionModule)),p.clientLoaderModule&&(m=m.concat(p.clientLoaderModule)),c&&p.hydrateFallbackModule&&(m=m.concat(p.hydrateFallbackModule)),p.imports&&(m=m.concat(p.imports)),m}).flat(1))}function lb(s){return[...new Set(s)]}function nb(s){let u={},c=Object.keys(s).sort();for(let o of c)u[o]=s[o];return u}function ib(s,u){let c=new Set;return new Set(u),s.reduce((o,p)=>{let m=JSON.stringify(nb(p));return c.has(m)||(c.add(m),o.push({key:m,link:p})),o},[])}function Fm(){let s=y.useContext(Pl);return Ko(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function rb(){let s=y.useContext(Zr);return Ko(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Zo=y.createContext(void 0);Zo.displayName="FrameworkContext";function Pm(){let s=y.useContext(Zo);return Ko(s,"You must render this element inside a <HydratedRouter> element"),s}function sb(s,u){let c=y.useContext(Zo),[o,p]=y.useState(!1),[m,x]=y.useState(!1),{onFocus:b,onBlur:g,onMouseEnter:h,onMouseLeave:E,onTouchStart:N}=u,B=y.useRef(null);y.useEffect(()=>{if(s==="render"&&x(!0),s==="viewport"){let G=Y=>{Y.forEach(Z=>{x(Z.isIntersecting)})},L=new IntersectionObserver(G,{threshold:.5});return B.current&&L.observe(B.current),()=>{L.disconnect()}}},[s]),y.useEffect(()=>{if(o){let G=setTimeout(()=>{x(!0)},100);return()=>{clearTimeout(G)}}},[o]);let K=()=>{p(!0)},S=()=>{p(!1),x(!1)};return c?s!=="intent"?[m,B,{}]:[m,B,{onFocus:Pn(b,K),onBlur:Pn(g,S),onMouseEnter:Pn(h,K),onMouseLeave:Pn(E,S),onTouchStart:Pn(N,K)}]:[!1,B,{}]}function Pn(s,u){return c=>{s&&s(c),c.defaultPrevented||u(c)}}function cb({page:s,...u}){let{router:c}=Fm(),o=y.useMemo(()=>Bm(c.routes,s,c.basename),[c.routes,s,c.basename]);return o?y.createElement(db,{page:s,matches:o,...u}):null}function ob(s){let{manifest:u,routeModules:c}=Pm(),[o,p]=y.useState([]);return y.useEffect(()=>{let m=!1;return tb(s,u,c).then(x=>{m||p(x)}),()=>{m=!0}},[s,u,c]),o}function db({page:s,matches:u,...c}){let o=Lt(),{future:p,manifest:m,routeModules:x}=Pm(),{basename:b}=Fm(),{loaderData:g,matches:h}=rb(),E=y.useMemo(()=>hm(s,u,h,m,o,"data"),[s,u,h,m,o]),N=y.useMemo(()=>hm(s,u,h,m,o,"assets"),[s,u,h,m,o]),B=y.useMemo(()=>{if(s===o.pathname+o.search+o.hash)return[];let G=new Set,L=!1;if(u.forEach(Z=>{let q=m.routes[Z.route.id];!q||!q.hasLoader||(!E.some(X=>X.route.id===Z.route.id)&&Z.route.id in g&&x[Z.route.id]?.shouldRevalidate||q.hasClientLoader?L=!0:G.add(Z.route.id))}),G.size===0)return[];let Y=P0(s,b,p.unstable_trailingSlashAwareDataRequests,"data");return L&&G.size>0&&Y.searchParams.set("_routes",u.filter(Z=>G.has(Z.route.id)).map(Z=>Z.route.id).join(",")),[Y.pathname+Y.search]},[b,p.unstable_trailingSlashAwareDataRequests,g,o,m,E,u,s,x]),K=y.useMemo(()=>ab(N,m),[N,m]),S=ob(N);return y.createElement(y.Fragment,null,B.map(G=>y.createElement("link",{key:G,rel:"prefetch",as:"fetch",href:G,...c})),K.map(G=>y.createElement("link",{key:G,rel:"modulepreload",href:G,...c})),S.map(({key:G,link:L})=>y.createElement("link",{key:G,nonce:c.nonce,...L,crossOrigin:L.crossOrigin??c.crossOrigin})))}function ub(...s){return u=>{s.forEach(c=>{typeof c=="function"?c(u):c!=null&&(c.current=u)})}}var pb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{pb&&(window.__reactRouterVersion="7.13.1")}catch{}function fb({basename:s,children:u,unstable_useTransitions:c,window:o}){let p=y.useRef();p.current==null&&(p.current=Jg({window:o,v5Compat:!0}));let m=p.current,[x,b]=y.useState({action:m.action,location:m.location}),g=y.useCallback(h=>{c===!1?b(h):y.startTransition(()=>b(h))},[c]);return y.useLayoutEffect(()=>m.listen(g),[m,g]),y.createElement(V0,{basename:s,children:u,location:x.location,navigationType:x.action,navigator:m,unstable_useTransitions:c})}var Im=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qe=y.forwardRef(function({onClick:u,discover:c="render",prefetch:o="none",relative:p,reloadDocument:m,replace:x,unstable_mask:b,state:g,target:h,to:E,preventScrollReset:N,viewTransition:B,unstable_defaultShouldRevalidate:K,...S},G){let{basename:L,navigator:Y,unstable_useTransitions:Z}=y.useContext(_t),q=typeof E=="string"&&Im.test(E),X=Gm(E,L);E=X.to;let le=A0(E,{relative:p}),$=Lt(),P=null;if(b){let ke=qo(b,[],$.unstable_mask?$.unstable_mask.pathname:"/",!0);L!=="/"&&(ke.pathname=ke.pathname==="/"?L:Qt([L,ke.pathname])),P=Y.createHref(ke)}let[je,U,ae]=sb(o,S),ne=gb(E,{replace:x,unstable_mask:b,state:g,target:h,preventScrollReset:N,relative:p,viewTransition:B,unstable_defaultShouldRevalidate:K,unstable_useTransitions:Z});function W(ke){u&&u(ke),ke.defaultPrevented||ne(ke)}let ie=!(X.isExternal||m),_e=y.createElement("a",{...S,...ae,href:(ie?P:void 0)||X.absoluteURL||le,onClick:ie?W:u,ref:ub(G,U),target:h,"data-discover":!q&&c==="render"?"true":void 0});return je&&!q?y.createElement(y.Fragment,null,_e,y.createElement(cb,{page:le})):_e});qe.displayName="Link";var mb=y.forwardRef(function({"aria-current":u="page",caseSensitive:c=!1,className:o="",end:p=!1,style:m,to:x,viewTransition:b,children:g,...h},E){let N=ci(x,{relative:h.relative}),B=Lt(),K=y.useContext(Zr),{navigator:S,basename:G}=y.useContext(_t),L=K!=null&&kb(N)&&b===!0,Y=S.encodeLocation?S.encodeLocation(N).pathname:N.pathname,Z=B.pathname,q=K&&K.navigation&&K.navigation.location?K.navigation.location.pathname:null;c||(Z=Z.toLowerCase(),q=q?q.toLowerCase():null,Y=Y.toLowerCase()),q&&G&&(q=pa(q,G)||q);const X=Y!=="/"&&Y.endsWith("/")?Y.length-1:Y.length;let le=Z===Y||!p&&Z.startsWith(Y)&&Z.charAt(X)==="/",$=q!=null&&(q===Y||!p&&q.startsWith(Y)&&q.charAt(Y.length)==="/"),P={isActive:le,isPending:$,isTransitioning:L},je=le?u:void 0,U;typeof o=="function"?U=o(P):U=[o,le?"active":null,$?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let ae=typeof m=="function"?m(P):m;return y.createElement(qe,{...h,"aria-current":je,className:U,ref:E,style:ae,to:x,viewTransition:b},typeof g=="function"?g(P):g)});mb.displayName="NavLink";var hb=y.forwardRef(({discover:s="render",fetcherKey:u,navigate:c,reloadDocument:o,replace:p,state:m,method:x=Lr,action:b,onSubmit:g,relative:h,preventScrollReset:E,viewTransition:N,unstable_defaultShouldRevalidate:B,...K},S)=>{let{unstable_useTransitions:G}=y.useContext(_t),L=yb(),Y=jb(b,{relative:h}),Z=x.toLowerCase()==="get"?"get":"post",q=typeof b=="string"&&Im.test(b),X=le=>{if(g&&g(le),le.defaultPrevented)return;le.preventDefault();let $=le.nativeEvent.submitter,P=$?.getAttribute("formmethod")||x,je=()=>L($||le.currentTarget,{fetcherKey:u,method:P,navigate:c,replace:p,state:m,relative:h,preventScrollReset:E,viewTransition:N,unstable_defaultShouldRevalidate:B});G&&c!==!1?y.startTransition(()=>je()):je()};return y.createElement("form",{ref:S,method:Z,action:Y,onSubmit:o?g:X,...K,"data-discover":!q&&s==="render"?"true":void 0})});hb.displayName="Form";function xb(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function eh(s){let u=y.useContext(Pl);return Xe(u,xb(s)),u}function gb(s,{target:u,replace:c,unstable_mask:o,state:p,preventScrollReset:m,relative:x,viewTransition:b,unstable_defaultShouldRevalidate:g,unstable_useTransitions:h}={}){let E=ma(),N=Lt(),B=ci(s,{relative:x});return y.useCallback(K=>{if(J0(K,u)){K.preventDefault();let S=c!==void 0?c:ni(N)===ni(B),G=()=>E(s,{replace:S,unstable_mask:o,state:p,preventScrollReset:m,relative:x,viewTransition:b,unstable_defaultShouldRevalidate:g});h?y.startTransition(()=>G()):G()}},[N,E,B,c,o,p,u,s,m,x,b,g,h])}var bb=0,vb=()=>`__${String(++bb)}__`;function yb(){let{router:s}=eh("useSubmit"),{basename:u}=y.useContext(_t),c=L0(),o=s.fetch,p=s.navigate;return y.useCallback(async(m,x={})=>{let{action:b,method:g,encType:h,formData:E,body:N}=F0(m,u);if(x.navigate===!1){let B=x.fetcherKey||vb();await o(B,c,x.action||b,{unstable_defaultShouldRevalidate:x.unstable_defaultShouldRevalidate,preventScrollReset:x.preventScrollReset,formData:E,body:N,formMethod:x.method||g,formEncType:x.encType||h,flushSync:x.flushSync})}else await p(x.action||b,{unstable_defaultShouldRevalidate:x.unstable_defaultShouldRevalidate,preventScrollReset:x.preventScrollReset,formData:E,body:N,formMethod:x.method||g,formEncType:x.encType||h,replace:x.replace,state:x.state,fromRouteId:c,flushSync:x.flushSync,viewTransition:x.viewTransition})},[o,p,u,c])}function jb(s,{relative:u}={}){let{basename:c}=y.useContext(_t),o=y.useContext(fa);Xe(o,"useFormAction must be used inside a RouteContext");let[p]=o.matches.slice(-1),m={...ci(s||".",{relative:u})},x=Lt();if(s==null){m.search=x.search;let b=new URLSearchParams(m.search),g=b.getAll("index");if(g.some(E=>E==="")){b.delete("index"),g.filter(N=>N).forEach(N=>b.append("index",N));let E=b.toString();m.search=E?`?${E}`:""}}return(!s||s===".")&&p.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(m.pathname=m.pathname==="/"?c:Qt([c,m.pathname])),ni(m)}function kb(s,{relative:u}={}){let c=y.useContext(Qm);Xe(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=eh("useViewTransitionState"),p=ci(s,{relative:u});if(!c.isTransitioning)return!1;let m=pa(c.currentLocation.pathname,o)||c.currentLocation.pathname,x=pa(c.nextLocation.pathname,o)||c.nextLocation.pathname;return Gr(p.pathname,x)!=null||Gr(p.pathname,m)!=null}function Nb(){const s=Lt();return n.jsxs("div",{className:"relative flex flex-col items-center justify-center h-screen text-center px-4 bg-[var(--bg)]",children:[n.jsx("div",{"aria-hidden":"true",className:"absolute bottom-0 text-9xl md:text-[12rem] font-black text-[var(--bg-2)] select-none pointer-events-none z-0",children:"404"}),n.jsxs("div",{className:"relative z-10",children:[n.jsx("h1",{className:"text-xl md:text-2xl font-medium mt-6 text-[var(--ink)]",children:"This page has not been generated"}),n.jsx("p",{className:"mt-2 text-base text-[var(--muted-2)] tracking-[0.04em]",children:s.pathname}),n.jsx("p",{className:"mt-4 text-lg md:text-xl text-[var(--muted)]",children:"Tell me more about this page, so I can generate it"})]})]})}const th="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABACAYAAABfuzgrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDEwLjAtYzAwMCA3OS5kMjBlNDY2MzAsIDIwMjUvMTIvMDktMDI6MTE6MjMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NDIzNGE4NjAtMzY3My0yNzRkLTkxNjQtMGNmZTEzMjJiZTg3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBGMUQ1ODQ0NThBMzExRjE4Q0Y0RjdERUE1Q0YyN0ZEIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBGMUQ1ODQzNThBMzExRjE4Q0Y0RjdERUE1Q0YyN0ZEIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNy40IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFlNDEyZmE4LWI5NTgtZWY0YS05OTlhLTRmMzgxMTNjMzMyMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MjM0YTg2MC0zNjczLTI3NGQtOTE2NC0wY2ZlMTMyMmJlODciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6HZ9cfAAALMElEQVR42uxcTWzjWB1/sRM7zlfrzsx+sawgK3GAE8pwA4lD5jISx4z2gDimVw5I6YUz6YUzzQ0JcWhOXBBSIySkkZCWhr2wq4WdyaJlNDs7s43bpPlObH5/+zl1MkmnKSnNpP+f5Nr1e/772X6/9/96LyHHcQSDwZgNhV8Bg8EEYTCYIAwGE4TBYIIwGEwQBoMJwmAwQRgMJgiDwQRhMBhMEAaDCcJgMEEYDCYIg8EEYTCYIAzGa4XwVd/go4e/u5YVWd//4U9D/HkZK08Qwne++4OF6h89fyIe/vkPYnPrjrj/wS9Eq/7FQtf/65O/8ZdlsInF5GAwQZgcjHU3sVaVHP/++I+r9RD4AQ3PYcPe/zENx/0vsHe8vVtHePUc5+wax9s7Xr2scOyKPB6fl3Uy+JOmvePYJRzXfHmefBtlAmVO2i0TTjko32uQk8VxJdgur8i/lz3ZTuGcyXfP2WftCVwrgvJE8J6yOPB+fvKzX7MGYc1xKexhO4hoRh379NR5OneoRrR9LRorxBKbGUUdj5UFbI9pU1V1X9ONohFLZrCfKT+s6dPyWYOsETmy2IoXqFfBVsVWfk1ei4ktn0jdEtFo3LRHo7xVf7ozHPapbBvndzQtWheh0HikHw56YjQcUvkuCFGKGrGDkKJm/BG+3W6IXrc9IT+eNIUWNUzbHuVP6s93RqMBE2TNNEcFI+O9ePKWKUdNHw8kKUxJony/1y6gE9V63dbOkolCo+++PL67JJlWSFHQyZN5mFjyOCFOm3W38LRxBG6EhHn7G379avDiTrtpdTtNkdy8LVQ1Qqdqs+TrRjzvkPwQjqNx0W4ds5O+bmZVv9exjutPrYb1TIQj+nhrn1p0vobzpU67cVfTY6WU+VZ664339tEZCkt8lJyqhjPm7XdpM5fmztj2Njo5EW4Lx7Vu5/RcQg0H/Sl3yJ4ot0fDl+T3Oi1PvmPTwMEm1rr6HPjYwlZmnx8JbDAvuu3GdnLjTjYaS6VBlGKreVRtnx5XlnD7rI7RHaSsolfSyIz7jpbyXNAU1W6rIQaDrvDd//nxAfvcctt+ubzVtKodaBqXXGv6C52vFUGow372afXa7t88eVGKwGklswNmGZlcFWigeb5NRppovg9TmeEnkHmViWgx9wTk5RyvI1oz6mekXF+mFfCN5ppvw2EvK+tcxYtLjwaD8+T772F3xjNYgfPn+VK5QBCArinJPZtYE6Nh07pWckiUoUnGH9+Im5kZ/sQBbfBtTESHqvHkFsi0Rf8fBDo3dRI4wcoeNIcZgUknry2Q+aZHEzmYdMFOsu9GjCJ6LSCzGItvHIYjWmFGGyjCdEh+laJG9uCL5MJhfZk+U0C+uoc259SwNjYZZXsfe1E0vRiNJUz/mnA4UjSMRCEWS2IfPwy8k2m40TT4N3ldN2pGLEFbDsEDnAsVBGuQMzz69O9Q8aNVaEqt1zm1pFMv0OmzZBpRBEh2nEP4E2Zi441dlO3AjyGtUEad9MbWOzlom/3G8bN70BIUHLgLOW5nIrOKZEMz3fX6kiMG/S78IzdqtKcoSi6RulONaNFy8/g5mUuQqWVAkizqF1uNowoc5PHogZAtOlMqS502HA67kSpyoMnUWgbwjDV0esgP07Erv9OCqTV03wPeS7SGtpJvhbYoVF7sdlpWLJaAL2dYaP++8PIvGYSJ86cn9d3R5PclMuWjRtzSDeOePRwiaOC+iyquP4waRrHTbsGvapfXgiBf1P6xsCnl468HvxXW0YuFrn/73W9f2bOMRsMa2peRndqk/IAkyB6Rw7z9TUERHiJHS0aN4MBW1HAkB82QTW2+hZDo0xKZZv3eE0HRH/g0UvZAWF8/CSbCSEPlEht3hK7HLerg5AyTP9HrnlZVVcuiI5I2yfb7nSqRSkacdtHOXBhlPrGXOUi48u1hLhLSZsmnTltBaLkA7eEl/XAuFk9WnNFINI6/psGuFE9u4n2pIDDei27sts+CCDRo5GOJFBGtbDsjq9k49gfI6mAwqKY2zQy0SQH3WA+CfPThXy597eeffbLwNVdJEL8jhxXPZIEJ4JtMWWgOIgeN5LWAKebazkQIEIS0ThqOvpgqn4cqtE8ZJEI2W+xMO8o0Ykc8EphICApJEEERp07rRLhmmkdkazQVhfofBwkxgsZALkWonpU+EeXq99COUE/oxthMrNI5ap/MpFuUUwFp3MKIjmc4I0he03W8K4PqwsfrTQQQ3HsjXwPTLgMNY161P/J/IQjNyl0Ux/UXl772GpAlTeJnm6FRzKkOmQ5GplT14q8dsh6Q1lCV8FgjSc0ykb2WGu1CWvlqZsmcL384HEy1x5nnlGeR3Q88f9+cKh//TybeWmiQ+x/8crEL7C/F73/zK3ntz8lIWXANyp/EFWepRSCq4o2CmhHsvPXpDgsT69I3bFhfkaWSw8jrR3QqlKuRSby1gqKERCSi+WHj/TMt7UiNHXK3tXLSW/V/LlT/w4dnkwibzz4Wjx49WpXvR50zHej8lRkjJ5lF926/OdfMW9QkyMjpMFmYWjvYHiiKKvr9dlGsPx7EkxuVycmKTtBHs25cFGvFJx66kRk5clc827ozyyyiLPwyzB1ThnfNeGKrDFt9FxEr0Tq13E7iRbzWGmareWIN+r15BLlZeZDXYFZujrLeEm4kSkawKlMjfoZIMG9bAHloK3Nz623ybyrkiyB7v86EmE6QZkPuhEo7sDkT240hyGtADjJpMhSJAna8pOHJ2NQa9DvjD4sRvxCO6PPMpfwiIyjyGb4Dbg567Xm+0EVMw+ssv7j7aTulwdm8MISqtew53+NmEGTFyZGRzmIB+YYaOv42jncxF0sEJ+hBm2zTxEf/wyLjvS9j+mZgWn2RwrYU5p0xizYTqF+Qna4mw8iuTJp+Ls+TLFMJqdNkyc0jmnJ+xCetnB9ZM18ReTMVdWnWernfbZf8fxBK3qcBJxC5y8vZChZyIetPkGsmR9afMiFenubgn6cPZKbMN3dg87+PHEgJc7JmmTq105Pn78OEcpNXNF0E19DMX4po0VSTNAgGp/MWcgDjmH8NJtpOQPPI+moa96LMeonu5xMIZZhaoiNbH7FIlsy5uKaYElKovTWESP1nCo7qOVku/IVO088LAuxNPfvE9bjX4dQ7myw/X/6BlOuXF6a0z6GUKweb3nav29mWCUgzkUwVkfOg536MAEUBicVyMrW5+6rQ8jIQumo7jn72Z96vmswjB+VAvnzyuZsD+dGP710qinWRn/2hJbc0Zwqd1nW8g6FZ6VvQOVcrUHJq0G+/0gcgGZj1mwZBMlPZ5yoRg8g17YfQij60IS2X3KKuU6VEH9WlE4mNW9mokTLl8lPKUlvtFjL1aAv8E8yz0shthZnXtU7pmlDIjCGHRtEuiojSNx4iuYlknmUdPRWJ5JarESj0PF4w1e8hU98TmPYhaO6UFo0KV0N5AtzkKKaDWCdHXxGRTSORFKpb7snHdBAxQtYbC6dEPLHhahTKlPsONcwmq9/t0FoTPG/Kuz/K3fsjRzRE29pIPg56PeEvuUUmnZKNWUy1MQNOetlNhHZa0OCdK19yG77JZtW3vnf/qkKFNTFjekcc29Y7M+u/NBs2cUuIO5MrGuclY8qLhJLfu1io+brLhTjn2cW6L5jiNeQMwetBxMqt52AwVpYgtJ7j6X8e8RtnMEHE6q7nYDBWjyCLkoOiV/4s3hWah8W4gQg5a7rYnsEQ/MuKDAYThMFggjAYTBAGgwnCYDBBGAwmCIPBBGEwGEwQBoMJwmAwQRgMJgiDwQRhMJggDAYThMFggjAYNw7/FWAAi26mbSS44fEAAAAASUVORK5CYII=",wb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABACAYAAABfuzgrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDEwLjAtYzAwMCA3OS5kMjBlNDY2MzAsIDIwMjUvMTIvMDktMDI6MTE6MjMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NDIzNGE4NjAtMzY3My0yNzRkLTkxNjQtMGNmZTEzMjJiZTg3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjExQTg3QUM2NThBNDExRjE5NkY0RkVCOURBRkVDNjk2IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjExQTg3QUM1NThBNDExRjE5NkY0RkVCOURBRkVDNjk2IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNy40IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFkNjhmZjAxLWMzYjUtYWM0NS04OTM1LTVmZGE1YWU2OTJhMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MjM0YTg2MC0zNjczLTI3NGQtOTE2NC0wY2ZlMTMyMmJlODciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6dJ7OqAAAF3klEQVR42uydv48bRRTHZxF/ABuJAomGDaKACq2poNxr0u8pBbWvpUCyG2rs/wBbNEiIwq5oEJKtSEiHkMI515AoP3yLlEQJIooXKaSgwGY3fnN5fuyPG3s3Xq+/H92c92Znxju78515M/NWZy0WCwUASOY13AIAIBAAIBAAIBAAIBAAIBAAIBAAIBAAIBAAIBAAAAQCAAQCAAQCAAQCAAQCAAQCwE7xetlfcHr87VbeyPrwk08tPF5QeYHEvPf+R0bpn/75UB1f+169celNdeXq5+r57L5R/ru3fsWTBTCxIA4AgUAcoO4mVlXF8fEH71arEtbKx8vj83hrJU6nsyx+Vv/9IsaLjsc67jz/Mq8bHTqWZbnRcT86Ds7TLH+cKM598WlF55Q1ZHmpHMuLPsb8elh+tZreUqvplicTrnk1zUpdrf/V/etrpxhBMHKsRS8KoyjM1LKx8/g47iQKgyi01FIsmvjvMwrx+Y44n1c+TKwaicOjhpIX4kbi79BtsaPQTDiOOYrC5Yy83Sg0ojBZs3wIpEYjR2x+HEThkHpJHbosvk9CGlCvWrRQHCbEogjpuuVxGpOE/Jxgw/IhkB02q8KEBqHjA3r4Dfp0mFlSFD4Tpl1guUd03ZcSGrjKEcRFzpuUD4HswZzjiDWEDo0qReCxXjws+JonJd+TiVJYxaoMi/lc3bu91WfSJ3Hoyew4o9HzEWGckNamEckVo4nusWV6l8q1RZpJjvnmUZoyblxe+R4zWWUdQhafNdfx2SKANudChRFklb+fhdsWR8ww4eHLBjOiYLNGw+N03hGtBNksb4uCLxrJgNIHrMwOzVtaCdfQo3NndOwXLIqs8n02XxvRddosT4euWV9/mlmpV9OaVO+Ayj4r2MTd/RFkevuGms//rcKlBNR78YY+EZNtm3rGNhOVwxrOAfX8DRany26o5OVUn75nyMrUvXEnYSQJCjQB0+6Dl3Oei6ZD961BnwM272omjCQ9ig/pfoXMpNMiC0SHtbsCuR/8ZmxKaX4ZfaPCp0+M8r/19jtli8RlvTt/qDYzxZRYLfOpUTUNVn1cYXZJ+99LEGpADc7PWIXatP5Z5Q+pvq2EOG6q9tiI0xUjUJPlC0WdJ3RfWrURyOn1n9bO+/u9W8Z5ShZI2pyDT7aDjFUgx3ASrEegdo6tvskqlSpgJXCTZWROU3QsWZ2HXXbdXolAYq9cU/6aPVk77xbwchrsJjvNhymNo46713bOvbQLXgqvhkCuXP3CLMP8sfruqy8p72fR738M30H5seyHmNUTuuR+UTQ+W9EZq/1goPZhmff57I5R+uvHP5wfP/vjpppOp1V5YI7ouccp5sRBgeaOy/Zd2mxE6eyBQA5zOoNw71axKu546AtxTEp+cDZbHh5eYN+gjiZXqLCTvjNeub5YiUkaSfTyZRE0xWZj3ZEbpJ6Cq8nOiIO7fbfFEqPcKW9lmEvNNec7tuHKlckiQdnnlaG3Au+QvIznsR8Cqbg4XOagGJBPVjfFVysUu8k+W5npUBimLH+6LH2LGl2Q4NToqJe701Is/prLwI6BUNc5rwy9Ffpiot5idW+S2RnuhUC2LA6PuUwoMQKcsJeGbBo1Lmds8gV0fihEMqMH6tCkMxR52qIxzJg4+uz7XOYWH1JZE2aKnbAd7hPR6H3mTq9fdJL17Ym6p+Vfp/wRG1V7YoTVHgie6Gy0c6jN3FLO2AZht/auJhUYOcY5K06mE27dcKUTYpAxoe/SdTgpaY+oQfC5iL6mBhs1ePxBjleynVHPbs5O/3jD8vPOc1OrLxw01avYPa+EQKpgVv18c1rWUmFg6N6R5207vqAD5Sbvd1Tp/EXrXk8TC++QA4X3QVQV3+cAoJoCid/nePRgijsOIBBV3fc5AKieQEzFEXvwai/eCvlhgT3EWiwWuAsAKPx/EAAgEAAgEAAgEAAgEAAgEAAgEAAgEAAgEAAABAIABAIABAIABAIABAIABAIABAJAHfhPgAEAek7EkD6DsgoAAAAASUVORK5CYII=";function Jl(s,u){if(!(typeof window>"u")&&typeof window.gtag=="function")try{window.gtag("event",s,u)}catch{}}const it={formSubmit:(s,u)=>Jl("form_submit",{areas:s.join(","),region:u}),formSubmitFail:s=>Jl("form_submit_fail",{reason:s}),phoneClick:s=>Jl("phone_click",{source:s}),kakaoClick:s=>Jl("kakao_click",{source:s}),priceCalcUse:(s,u)=>Jl("price_calc_use",{space:s,house_type:u}),quoteSectionView:()=>Jl("quote_section_view")},xm=[{label:"포트폴리오",href:"#portfolio"},{label:"시공범위",href:"#scope"},{label:"FAQ",href:"#faq"},{label:"견적문의",href:"#quote"}],gm=[{label:"줄눈시공 하는 이유",href:"/info/why-grout"},{label:"케라폭시 줄눈이란?",href:"/info/kerafoxy"},{label:"폴리우레아 줄눈이란?",href:"/info/polyurea"},{label:"케라폭시 가격 안내",href:"/info/kerafoxy-price"},{label:"케라폭시 제품 소개",href:"/info/kerafoxy-product"},{label:"폴리우레아 vs 케라폭시 비교",href:"/info/comparison"}];function Ya(){const[s,u]=y.useState(!1),[c,o]=y.useState(!1),[p,m]=y.useState(!1),[x,b]=y.useState(!1),g=y.useRef(null),h=y.useRef(!1),E=ma(),N=Lt(),B=N.pathname==="/";y.useEffect(()=>{const Y=()=>u(window.scrollY>60);return window.addEventListener("scroll",Y),()=>window.removeEventListener("scroll",Y)},[]),y.useEffect(()=>{const Y=Z=>{g.current&&!g.current.contains(Z.target)&&m(!1)};return document.addEventListener("mousedown",Y),()=>document.removeEventListener("mousedown",Y)},[]),y.useEffect(()=>{if(!c)return;const Y=window.scrollY,Z=document.documentElement,q=document.body,X={htmlOverflow:Z.style.overflow,bodyOverflow:q.style.overflow,bodyPosition:q.style.position,bodyTop:q.style.top,bodyWidth:q.style.width};return Z.style.overflow="hidden",q.style.overflow="hidden",q.style.position="fixed",q.style.top=`-${Y}px`,q.style.width="100%",()=>{Z.style.overflow=X.htmlOverflow,q.style.overflow=X.bodyOverflow,q.style.position=X.bodyPosition,q.style.top=X.bodyTop,q.style.width=X.bodyWidth,h.current?h.current=!1:window.scrollTo(0,Y)}},[c]);const K=Y=>{h.current=!0,o(!1),B?setTimeout(()=>{const Z=document.querySelector(Y);Z&&Z.scrollIntoView({behavior:"smooth"})},0):(E("/"),setTimeout(()=>{const Z=document.querySelector(Y);Z&&Z.scrollIntoView({behavior:"smooth"})},300))},S=s||!B,G=S?"text-stone-700 hover:text-[var(--accent)]":"text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] hover:text-white",L=S?"text-stone-900":"text-white";return n.jsxs("nav",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${S?"bg-white shadow-sm":"bg-transparent"}`,children:[n.jsxs("div",{className:"px-5 md:px-12 lg:px-20 h-12 md:h-auto md:py-4 flex items-center transition-all duration-300",children:[n.jsx("div",{className:"flex-1",children:n.jsx(qe,{to:"/",className:"flex items-center gap-3 cursor-pointer",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:n.jsx("img",{src:S?wb:th,alt:"디테일라인 - 서울·경기 줄눈시공 전문",className:"h-10 md:h-12 w-auto object-contain transition-opacity duration-300"})})}),n.jsx("div",{className:"flex-1 hidden md:flex justify-center",children:n.jsxs("ul",{className:"flex items-center gap-8",children:[xm.map(Y=>n.jsx("li",{children:n.jsx("button",{onClick:()=>K(Y.href),className:`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${G}`,children:Y.label})},Y.href)),n.jsxs("li",{ref:g,className:"relative",children:[n.jsxs("button",{onClick:()=>m(!p),className:`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1 ${N.pathname.startsWith("/info")?L:G}`,children:["줄눈 정보",n.jsx("i",{className:`ri-arrow-down-s-line text-lg transition-transform ${p?"rotate-180":""}`})]}),p&&n.jsx("div",{className:"absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-2xl overflow-hidden w-56",style:{boxShadow:"0 4px 24px 0 rgba(0,0,0,0.10)"},children:n.jsx("ul",{className:"py-2",children:gm.map(Y=>n.jsx("li",{children:n.jsx(qe,{to:Y.href,onClick:()=>m(!1),className:"block px-5 py-3 text-sm text-stone-500 hover:bg-stone-100 hover:text-stone-900 transition-colors cursor-pointer",children:Y.label})},Y.href))})})]})]})}),n.jsx("div",{className:"flex-1 hidden md:flex items-center justify-end gap-4",children:n.jsxs("a",{href:"tel:010-8005-6674",onClick:()=>it.phoneClick("navbar"),className:`flex items-center gap-2 text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${S?"bg-[var(--accent)] text-white px-5 py-2.5 rounded-full hover:bg-[var(--accent-deep)]":"bg-white/10 text-white px-5 py-2.5 rounded-full border border-white/30 hover:bg-white/20 backdrop-blur-sm"}`,children:[n.jsx("i",{className:"ri-phone-line text-sm"}),"010-8005-6674"]})}),n.jsx("button",{className:`md:hidden w-8 h-8 flex items-center justify-center cursor-pointer ml-auto ${S?"text-stone-800":"text-white"}`,onClick:()=>o(!c),children:n.jsx("i",{className:`text-xl ${c?"ri-close-line":"ri-menu-line"}`})})]}),n.jsxs(n.Fragment,{children:[n.jsx("div",{className:`fixed inset-0 bg-black/60 z-40 md:hidden transition-opacity duration-300 ${c?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}`,onClick:()=>o(!1)}),n.jsxs("div",{className:`fixed top-0 right-0 h-screen w-4/6 bg-stone-100 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto md:hidden ${c?"translate-x-0":"translate-x-full"}`,children:[n.jsx("div",{className:"sticky top-0 bg-white h-12 px-5 flex items-center justify-end border-b border-stone-300",children:n.jsx("button",{onClick:()=>o(!1),className:"text-stone-700 hover:text-stone-900 cursor-pointer",children:n.jsx("i",{className:"ri-close-line text-2xl"})})}),n.jsxs("div",{className:"px-6 py-4",children:[n.jsxs("ul",{className:"space-y-3",children:[xm.map(Y=>n.jsx("li",{children:n.jsx("button",{onClick:()=>K(Y.href),className:"w-full border-b border-stone-200 pb-4 text-left text-sm font-medium text-stone-600 hover:text-[var(--accent)] cursor-pointer transition-colors",children:Y.label})},Y.href)),n.jsxs("li",{children:[n.jsxs("div",{className:"flex flex-row w-full text-sm font-medium text-stone-600 mb-4 items-center justify-between",children:["줄눈 정보",n.jsx("i",{className:"ri-arrow-down-s-line text-xl"})]}),n.jsx("ul",{className:"space-y-4 pl-3 border-stone-100",children:gm.map(Y=>n.jsx("li",{children:n.jsx(qe,{to:Y.href,onClick:()=>{h.current=!0,o(!1)},className:"text-sm font-medium text-stone-400 hover:text-[var(--accent)] cursor-pointer transition-colors block",children:Y.label})},Y.href))})]})]}),n.jsxs("a",{href:"tel:010-8005-6674",onClick:()=>it.phoneClick("navbar"),className:"call-bg mt-8 flex items-center justify-center gap-2 px-6 py-3 bg-[var(--accent)] text-white text-sm font-semibold rounded-full hover:bg-[var(--accent-deep)] transition-colors cursor-pointer w-full",children:[n.jsx("i",{className:"ri-phone-line"}),"010-8005-6674"]}),n.jsx("p",{className:"text-center text-xs text-stone-500 mt-3",children:"번호를 누르면 전화 연결 됩니다."})]})]})]})]})}const Sb=[{label:"포트폴리오",href:"#portfolio"},{label:"시공범위",href:"#scope"},{label:"FAQ",href:"#faq"},{label:"견적문의",href:"#quote"}],zb=["화장실 줄눈","주방 줄눈","베란다 줄눈","현관 줄눈","수영장 줄눈","목욕탕 줄눈"];function qa(){const s=u=>{const c=document.querySelector(u);c&&c.scrollIntoView({behavior:"smooth"})};return n.jsx("footer",{className:"bg-[var(--dark)] mx-2 overflow-hidden",children:n.jsxs("div",{className:"px-6 md:px-12 lg:px-16 pt-10 pb-8",children:[n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-6 md:mb-12",children:[n.jsxs("div",{className:"lg:col-span-1",children:[n.jsx("img",{src:th,alt:"디테일라인 - 서울·경기 줄눈시공 전문",className:"h-10 w-auto object-contain mb-4"}),n.jsxs("p",{className:"text-stone-400 text-sm leading-relaxed mb-5",children:["집요함이 만들어 내는 완벽함, 디테일라인",n.jsx("br",{}),"완벽한 마감을 약속드립니다."]}),n.jsxs("div",{className:"space-y-2",children:[n.jsxs("div",{className:"flex items-center gap-2 text-stone-400 text-sm",children:[n.jsx("i",{className:"ri-phone-line text-stone-500"}),n.jsx("a",{href:"tel:010-8005-6674",onClick:()=>it.phoneClick("footer"),className:"hover:text-white transition-colors cursor-pointer",children:"010-8005-6674"})]}),n.jsxs("div",{className:"flex items-center gap-2 text-stone-400 text-sm",children:[n.jsx("i",{className:"ri-map-pin-line text-stone-500"}),n.jsx("span",{children:"서울 서초구 본마을4길 11 1층 104호"})]}),n.jsxs("div",{className:"flex items-center gap-2 text-stone-400 text-sm",children:[n.jsx("i",{className:"ri-time-line text-stone-500"}),n.jsx("span",{children:"평일 09:00 – 18:00"})]})]})]}),n.jsxs("div",{className:"hidden md:block",children:[n.jsx("h4",{className:"text-white font-bold text-sm mb-5",children:"빠른 링크"}),n.jsx("ul",{className:"space-y-3",children:Sb.map(u=>n.jsx("li",{children:n.jsx("button",{onClick:()=>s(u.href),className:"text-stone-400 text-sm hover:text-white transition-colors cursor-pointer",children:u.label})},u.href))})]}),n.jsxs("div",{className:"hidden md:block",children:[n.jsx("h4",{className:"text-white font-bold text-sm mb-5",children:"시공 서비스"}),n.jsx("ul",{className:"space-y-3",children:zb.map(u=>n.jsx("li",{children:n.jsx("span",{className:"text-stone-400 text-sm",children:u})},u))})]}),n.jsxs("div",{className:"hidden md:block",children:[n.jsx("h4",{className:"text-white font-bold text-sm mb-5",children:"소셜 미디어"}),n.jsx("div",{className:"space-y-3",children:[{icon:"ri-instagram-line",label:"Instagram",href:"https://www.instagram.com"},{icon:"ri-kakao-talk-fill",label:"KakaoTalk",href:"https://pf.kakao.com"}].map(u=>n.jsxs("a",{href:u.href,target:"_blank",rel:"nofollow noreferrer",className:"flex items-center gap-3 text-stone-400 text-sm hover:text-white transition-colors cursor-pointer",children:[n.jsx("div",{className:"w-8 h-8 flex items-center justify-center bg-white/10 rounded-sm",children:n.jsx("i",{className:`${u.icon} text-sm`})}),u.label]},u.label))})]})]}),n.jsx("div",{className:"border-t border-stone-700 pt-6",children:n.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-3",children:[n.jsx("p",{className:"text-stone-500 text-xs",children:"© 2026 줄눈시공 전문. All rights reserved."}),n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx(qe,{to:"/privacy",className:"text-stone-500 text-xs hover:text-white transition-colors cursor-pointer",children:"개인정보처리방침"}),n.jsx("span",{className:"text-stone-600 text-xs",children:"사업자등록번호: 609-33-19473"})]})]})})]})})}const Eb="https://pf.kakao.com/_TsIAE";function Ab(){const[s,u]=y.useState(!1);return y.useEffect(()=>{const c=()=>{u(window.scrollY>window.innerHeight*.6)};return c(),window.addEventListener("scroll",c,{passive:!0}),()=>window.removeEventListener("scroll",c)},[]),n.jsxs("div",{className:`md:hidden fixed bottom-5 right-4 z-40 flex flex-col gap-3 transition-all duration-300 ${s?"opacity-100 translate-y-0":"opacity-0 translate-y-4 pointer-events-none"}`,"aria-hidden":!s,children:[n.jsx("a",{href:Eb,target:"_blank",rel:"noopener noreferrer",onClick:()=>it.kakaoClick("floating"),className:"w-14 h-14 flex items-center justify-center rounded-full bg-[#FEE500] text-[#191600] shadow-lg active:scale-95 transition-transform","aria-label":"카카오톡 상담",children:n.jsx("i",{className:"ri-kakao-talk-fill text-2xl"})}),n.jsx("a",{href:"tel:010-8005-6674",onClick:()=>it.phoneClick("floating"),className:"w-14 h-14 flex items-center justify-center rounded-full bg-[var(--accent)] text-white shadow-lg active:scale-95 transition-transform","aria-label":"전화 상담",children:n.jsx("i",{className:"ri-phone-fill text-2xl"})})]})}const nt={eyebrow:"오직 줄눈, 6년간 한 길",headlineL1:"손끝이 남기는",headlineAccent:"줄눈시공",headlineTail:"",headlineL3:"디테일라인",subL1:"시공 전, 후 사진으로 먼저 확인하고 결정하세요.",subL2:"무료 견적은 24시간 실시간 답변 드립니다.",ctaPrimary:"실시간 무료 견적 상담",ctaSecondary:"시공 포트폴리오 →",captionTag:"KERAPOXY",captionMeta:"프리미엄 줄눈 시공",signatureMeta:"모든 주거공간, 상업공간 시공 가능",footerItems:["2,000세대 이상 시공 경력","하루 한집 시공","2년 무상 AS"],scrollLabel:"SCROLL",srHeading:"강남·서초·송파 욕실 줄눈시공 전문 디테일라인 — 노후 아파트 보수·신축 입주·리모델링 욕실·베란다·현관 케라폭시 줄눈"};function bm(s){const u=document.querySelector(s);u&&u.scrollIntoView({behavior:"smooth"})}function Tb(){return n.jsxs("section",{className:"hero-b-wrap","aria-label":"히어로",children:[n.jsx("div",{className:"tile-floor","aria-hidden":"true",children:n.jsx("div",{className:"tile-floor__plane",children:n.jsx("div",{className:"tile-floor__shine"})})}),n.jsx("div",{className:"hero-b__tint","aria-hidden":"true"}),n.jsx("div",{className:"hero-b__vignette","aria-hidden":"true"}),n.jsx("div",{className:"hero-b__glow","aria-hidden":"true"}),n.jsx("div",{className:"hero-b__grain","aria-hidden":"true"}),n.jsx("div",{className:"hero-b__padded",children:n.jsxs("div",{className:"hero-b",children:[n.jsx("h2",{className:"sr-only",children:nt.srHeading}),n.jsxs("div",{className:"hero-b__lead",children:[n.jsxs("div",{className:"hero-b__eyebrow",children:[n.jsx("span",{className:"hero-b__eyebrow-line","aria-hidden":"true"}),n.jsx("span",{children:nt.eyebrow})]}),n.jsxs("h1",{className:"hero-b__headline",children:[nt.headlineL1,n.jsx("br",{}),n.jsx("em",{children:nt.headlineAccent}),nt.headlineTail,n.jsx("br",{}),nt.headlineL3]}),n.jsxs("p",{className:"hero-b__sub",children:[nt.subL1,n.jsx("br",{}),nt.subL2]}),n.jsxs("div",{className:"hero-b__cta-row",children:[n.jsxs("button",{type:"button",className:"hero-b__btn",onClick:()=>bm("#quote"),children:[nt.ctaPrimary,n.jsx("span",{className:"hero-b__btn-arrow","aria-hidden":"true",children:"→"})]}),n.jsx("button",{type:"button",className:"hero-b__btn-link",onClick:()=>bm("#portfolio"),children:nt.ctaSecondary})]})]}),n.jsxs("div",{className:"hero-b__caption",children:[n.jsxs("div",{className:"hero-b__caption-row",children:[n.jsx("span",{className:"hero-b__caption-dot","aria-hidden":"true"}),n.jsx("span",{className:"hero-b__caption-after",children:nt.captionTag})]}),n.jsx("div",{className:"hero-b__caption-meta",children:nt.captionMeta})]}),n.jsx("div",{className:"hero-b__signature",children:n.jsx("div",{className:"hero-b__signature-meta",children:nt.signatureMeta})}),n.jsxs("div",{className:"hero-b__footer-meta",children:[n.jsx("ul",{className:"hero-b__footer-items",children:nt.footerItems.map(s=>n.jsx("li",{children:s},s))}),n.jsxs("div",{className:"hero-b__scroll","aria-hidden":"true",children:[n.jsx("span",{children:nt.scrollLabel}),n.jsx("span",{className:"hero-b__scroll-bar"})]})]})]})})]})}const ii={all:"all",itemOne:"itemOne",itemTwo:"itemTwo"},Ye={rawPosition:"--rcs-raw-position",currentPosition:"--rcs-current-position",boundsPadding:"--rcs-bounds-padding",handleColor:"--rcs-handle-color"},Rr={capture:!1,passive:!0},Vr={capture:!0,passive:!1};let In=(function(s){return s.ARROW_LEFT="ArrowLeft",s.ARROW_RIGHT="ArrowRight",s.ARROW_UP="ArrowUp",s.ARROW_DOWN="ArrowDown",s})({});const Qr=(s,u,c,o)=>{let p=y.useRef(void 0);y.useEffect(()=>{p.current=u},[u]),y.useEffect(()=>{if(!c?.addEventListener)return;let m=x=>p.current?.(x);return c.addEventListener(s,m,o),()=>{c.removeEventListener(s,m,o)}},[s,c,o])},ah=y.createContext(null),Rb=({children:s,...u})=>n.jsx(ah.Provider,{value:u,children:s}),Wr=()=>{let s=y.useContext(ah);if(!s)throw Error("useReactCompareSliderContext must be used within the Provider component");return s},vm=({flip:s})=>{let u={width:"0.85rem",height:"0.85rem",clipPath:"polygon(100% 0%, 100% 100%, 30% 50%)",rotate:s?"180deg":"0deg",outline:`0.5rem solid var(${Ye.handleColor})`,outlineOffset:"-0.5rem"};return n.jsx("div",{"aria-hidden":"true",className:"__rcs-handle-arrow",style:u})},Cb=({className:s="__rcs-handle-root",buttonStyle:u,linesStyle:c,style:o,...p})=>{let{disabled:m,portrait:x}=Wr(),b={boxSizing:"border-box",position:"relative",display:"inline-flex",flexDirection:x?"row":"column",placeItems:"center",width:x?"100%":void 0,height:x?void 0:"100%",cursor:m?"not-allowed":x?"ns-resize":"ew-resize",pointerEvents:"none",[Ye.handleColor]:"rgba(255, 255, 255, 1)",...o},g={flexGrow:1,height:x?2:"100%",width:x?"100%":2,outline:`1px solid var(${Ye.handleColor})`,outlineOffset:-1,pointerEvents:"auto",boxShadow:"0 0 4px rgba(0,0,0,.5)",...c},h={direction:"ltr",display:"grid",gridAutoFlow:"column",gap:"0.5rem",placeContent:"center",flexShrink:0,width:"3.5rem",height:"3.5rem",borderRadius:"50%",border:`2px solid var(${Ye.handleColor})`,color:"inherit",pointerEvents:"auto",backdropFilter:"blur(0.5rem)",WebkitBackdropFilter:"blur(0.5rem)",backgroundColor:"rgba(0, 0, 0, 0.125)",boxShadow:"0 0 4px rgba(0,0,0,.35)",transform:x?"rotate(90deg)":void 0,...u};return n.jsxs("div",{"data-rcs":"handle",...p,className:s,style:b,children:[n.jsx("div",{className:"__rcs-handle-line",style:g}),n.jsxs("div",{className:"__rcs-handle-button",style:h,children:[n.jsx(vm,{}),n.jsx(vm,{flip:!0})]}),n.jsx("div",{className:"__rcs-handle-line",style:g})]})},Mb=({display:s="block",width:u="100%",height:c="100%",maxWidth:o="100%",boxSizing:p="border-box",objectFit:m="cover",objectPosition:x="center center",...b}={})=>({display:s,width:u,height:c,maxWidth:o,boxSizing:p,objectFit:m,objectPosition:x,...b}),ym=({alt:s,style:u,...c})=>{let o=Mb(u);return n.jsx("img",{"data-rcs":"image",...c,alt:s,style:o})},Ob=({style:s,...u})=>{let{disabled:c,portrait:o,position:p,handleRootRef:m,onHandleRootClick:x,onHandleRootKeyDown:b}=Wr(),g={WebkitAppearance:"none",MozAppearance:"none",WebkitTapHighlightColor:"transparent",boxSizing:"border-box",position:"absolute",display:"flex",flexDirection:o?"row":"column",placeItems:"center",contain:"layout",top:o?"-50%":void 0,left:o?void 0:"-50%",width:"100%",height:"100%",background:"none",border:0,padding:0,pointerEvents:"none",appearance:"none",outline:0,zIndex:1,translate:o?`0 var(${Ye.currentPosition}) 0`:`var(${Ye.currentPosition}) 0 0`,backfaceVisibility:"hidden",willChange:"translate",...s};return Qr("keydown",b,m.current,Vr),Qr("click",x,m.current,Vr),n.jsx("div",{ref:m,tabIndex:0,"aria-label":"Click and drag or focus and use arrow keys to change the position of the slider","aria-orientation":o?"vertical":"horizontal","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":p.current,"aria-disabled":c,"data-rcs":"handle-root",role:"slider",style:g,...u})},_b=({itemClip:s,portrait:u})=>s===ii.itemOne?u?`inset(0px 0px calc(100% - var(${Ye.currentPosition})) 0px)`:`inset(0px calc(100% - var(${Ye.currentPosition})) 0px 0px)`:s===ii.itemTwo?u?`inset(var(${Ye.currentPosition}) 0px 0px 0px)`:`inset(0px 0px 0px var(${Ye.currentPosition}))`:"none",jm=({item:s,style:u,...c})=>{let{clip:o,portrait:p}=Wr(),m={KhtmlUserSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",gridArea:"1 / 1",maxWidth:"100%",overflow:"hidden",clipPath:_b({itemClip:o===ii.all||o===s?s:void 0,portrait:p}),boxSizing:"border-box",transform:"translateZ(0)",userSelect:"none",zIndex:s===ii.itemOne?1:void 0,willChange:"clip-path",...u};return n.jsx("div",{"data-rcs":"item","data-rcs-item":s,...c,style:m})},Db=`clamp(var(${Ye.boundsPadding}), var(${Ye.rawPosition}) - var(${Ye.boundsPadding}) + var(${Ye.boundsPadding}), calc(100% - var(${Ye.boundsPadding})))`,Ub=({style:s,...u})=>{let{browsingContext:c,boundsPadding:o,changePositionOnHover:p,clip:m,isDragging:x,portrait:b,position:g,onTouchEnd:h,onPointerDown:E,onPointerMove:N,onPointerUp:B,interactiveTarget:K,rootRef:S,transition:G,canTransition:L}=Wr(),Y={position:"relative",boxSizing:"border-box",display:"grid",maxWidth:"100%",maxHeight:"100%",overflow:"hidden",cursor:x?b?"ns-resize":"ew-resize":void 0,touchAction:"pan-y",userSelect:"none",KhtmlUserSelect:"none",msUserSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",transition:L&&G?`${Ye.rawPosition} ${G}`:"none",[Ye.rawPosition]:`${g.current}%`,[Ye.boundsPadding]:o,[Ye.currentPosition]:Db,...s};return Qr("touchend",h,K,Vr),Qr("pointerdown",E,K,Vr),y.useEffect(()=>{let Z=S.current,q=X=>{x||B(X)};return p&&(Z.addEventListener("pointermove",N,Rr),Z.addEventListener("pointerleave",q,Rr)),()=>{Z.removeEventListener("pointermove",N),Z.removeEventListener("pointerleave",q)}},[p,N,B,x,S]),y.useEffect(()=>{if(x)return c.addEventListener("pointermove",N,Rr),c.addEventListener("pointerup",B,Rr),()=>{c?.removeEventListener("pointermove",N),c?.removeEventListener("pointerup",B)}},[N,B,x,c]),n.jsx("div",{ref:S,style:Y,"data-rcs":"root","data-rcs-clip":m,...u})};(()=>{try{typeof CSS<"u"&&CSS.registerProperty({name:Ye.rawPosition,syntax:"<percentage>",inherits:!0,initialValue:"50%"})}catch(s){console.debug("[react-compare-slider] register CSS property:",s)}})();const Bb=()=>globalThis.matchMedia?.("(prefers-reduced-motion: no-preference)")?.matches?"0.15s ease-out":"none",Hb=()=>!!globalThis.matchMedia?.("(pointer: coarse)")?.matches,Lb=({boundsPadding:s="0px",browsingContext:u=globalThis,changePositionOnHover:c=!1,clip:o=ii.all,defaultPosition:p=50,disabled:m=!1,keyboardIncrement:x="5%",onlyHandleDraggable:b=Hb(),onPositionChange:g,portrait:h=!1,transition:E=Bb()}={})=>{let N=y.useRef(null),B=y.useRef(null),K=y.useRef(p),[S,G]=y.useState(!1),[L,Y]=y.useState(!0),[Z,q]=y.useState(null),X=y.useCallback(W=>{let ie=Math.min(Math.max(W,0),100);N.current?.style.setProperty(Ye.rawPosition,`${ie}%`),B.current?.setAttribute("aria-valuenow",`${Math.round(ie)}`),K.current=ie,g?.(ie)},[g]),le=y.useCallback(function({x:W,y:ie}){let{width:_e,height:ke,top:C,left:V}=N.current.getBoundingClientRect();_e===0||ke===0||X((h?ie-C-u.scrollY:W-V-u.scrollX)/(h?ke:_e)*100)},[u,h,X]),$=y.useCallback(W=>{W.preventDefault(),!(m||W.button!==0)&&(le({x:W.pageX,y:W.pageY}),G(!0),Y(!0))},[m,le]),P=y.useCallback(function(W){Y(!1),le({x:W.pageX,y:W.pageY})},[le]),je=y.useCallback(W=>{G(!1),Y(!0)},[]),U=y.useCallback(W=>{G(!1),Y(!0)},[]),ae=y.useCallback(W=>{W.preventDefault(),W.currentTarget?.focus()},[]),ne=y.useCallback(W=>{if(!Object.values(In).includes(W.key))return;W.preventDefault(),Y(!0);let ie=typeof x=="string"?Number.parseFloat(x):x/N.current?.getBoundingClientRect().width*100;X((h?W.key===In.ARROW_LEFT||W.key===In.ARROW_DOWN:W.key===In.ARROW_RIGHT||W.key===In.ARROW_UP)?K.current+ie:K.current-ie)},[x,h,X]);return y.useLayoutEffect(()=>{q(b?B.current:N.current)},[b]),y.useEffect(()=>{X(p)},[p,X]),{boundsPadding:s,browsingContext:u,changePositionOnHover:c,clip:o,defaultPosition:p,disabled:m,keyboardIncrement:x,onlyHandleDraggable:b,portrait:h,transition:E,onHandleRootKeyDown:ne,onPointerDown:$,onPointerMove:P,onPointerUp:je,onTouchEnd:U,onHandleRootClick:ae,canTransition:L,isDragging:S,position:K,setPosition:X,setPositionFromBounds:le,rootRef:N,handleRootRef:B,interactiveTarget:Z}},Yb=({boundsPadding:s,browsingContext:u,changePositionOnHover:c,clip:o,defaultPosition:p,disabled:m,handle:x,itemOne:b,itemTwo:g,keyboardIncrement:h,onPositionChange:E,onlyHandleDraggable:N,portrait:B,transition:K,...S})=>n.jsx(Rb,{...Lb({boundsPadding:s,browsingContext:u,changePositionOnHover:c,clip:o,defaultPosition:p,disabled:m,keyboardIncrement:h,onPositionChange:E,onlyHandleDraggable:N,portrait:B,transition:K}),children:n.jsxs(Ub,{...S,children:[n.jsx(jm,{item:"itemOne",children:b}),n.jsx(jm,{item:"itemTwo",children:g}),n.jsx(Ob,{children:x||n.jsx(Cb,{})})]})}),qb=["전체","현관","화장실","베란다","거실","주방","수영장","목욕탕"],km=[];function Gb(){const[s,u]=y.useState("전체"),[c,o]=y.useState(null);y.useEffect(()=>{if(!c)return;const m=E=>{E.key==="Escape"&&o(null)},x=window.scrollY,b=document.documentElement,g=document.body,h=b.style.scrollBehavior;return b.style.overflow="hidden",g.style.overflow="hidden",g.style.position="fixed",g.style.top=`-${x}px`,g.style.left="0",g.style.right="0",g.style.width="100%",window.addEventListener("keydown",m),()=>{b.style.overflow="",g.style.overflow="",g.style.position="",g.style.top="",g.style.left="",g.style.right="",g.style.width="",b.style.scrollBehavior="auto",window.scrollTo(0,x),b.style.scrollBehavior=h,window.removeEventListener("keydown",m)}},[c]);const p=s==="전체"?km:km.filter(m=>m.category===s);return n.jsxs(n.Fragment,{children:[n.jsx("section",{id:"portfolio",className:"py-20 px-6 md:px-12 lg:px-20 bg-[var(--bg)]",children:n.jsxs("div",{className:"max-w-7xl mx-auto",children:[n.jsxs("div",{className:"mb-10",children:[n.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Our Work"}),n.jsx("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:"완성된 프로젝트"}),n.jsx("p",{className:"text-[var(--muted)] mt-1 sm:mt-3 text-base",children:"고객님의 공간을 완벽하게 되살렸습니다"})]}),n.jsx("div",{className:"flex flex-wrap gap-2 mb-10",children:qb.map(m=>n.jsx("button",{onClick:()=>u(m),className:`px-5 py-2 rounded-sm text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${s===m?"bg-[var(--accent)] text-white":"bg-white text-[var(--muted)] border border-[var(--line)] hover:border-[var(--line-strong)]"}`,children:m},m))}),p.length>0?n.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4",children:p.map(m=>n.jsxs("div",{onClick:()=>o(m),className:"group relative rounded-sm overflow-hidden cursor-pointer aspect-[3/4]",children:[n.jsx("img",{src:m.image,alt:`${m.title} 줄눈시공 사례 - 디테일라인`,className:"w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"}),n.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"}),m.before&&m.after&&n.jsxs("span",{className:"absolute top-2 right-2 inline-flex items-center gap-1 bg-[var(--accent)] text-white text-[10px] font-medium px-2 py-0.5 rounded-sm uppercase tracking-[0.12em]",children:[n.jsx("i",{className:"ri-contrast-2-line"}),"시공 전·후"]}),n.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-4",children:[n.jsx("span",{className:"inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-sm mb-2",children:m.category}),n.jsx("h3",{className:"text-white font-bold text-sm leading-snug",children:m.title}),n.jsx("p",{className:"text-white/70 text-xs mt-1",children:m.location})]})]},m.id))}):n.jsxs("div",{className:"border border-dashed border-[var(--line-strong)] rounded-sm py-16 px-6 text-center bg-white/40",children:[n.jsx("i",{className:"ri-image-line text-4xl text-[var(--muted-2)] mb-4 block","aria-hidden":"true"}),n.jsx("h3",{className:"text-2xl text-[var(--ink)] mb-3",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:"시공 사례 — 곧 공개됩니다"}),n.jsxs("p",{className:"text-[var(--muted)] text-sm leading-relaxed max-w-md mx-auto",children:["현재 자체 촬영 시공 사례를 정리 중입니다.",n.jsx("br",{}),"실제 현장의 Before / After 사진과 시공 디테일을 곧 보여드리겠습니다."]}),n.jsx("p",{className:"text-[var(--muted-2)] text-xs mt-6",children:"시공 사례가 필요하시면 카카오톡·전화로 즉시 안내해 드립니다."})]})]})}),c&&n.jsx("div",{className:"fixed inset-0 z-[100] bg-black/80 flex items-center justify-center px-4",onClick:()=>o(null),children:n.jsxs("div",{className:"relative w-full max-w-3xl",onClick:m=>m.stopPropagation(),children:[n.jsx("button",{type:"button",onClick:()=>o(null),className:"absolute -top-11 right-0 w-9 h-9 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors","aria-label":"닫기",children:n.jsx("i",{className:"ri-close-line text-xl"})}),n.jsx("div",{className:"rounded-sm overflow-hidden shadow-2xl bg-[var(--dark)]",children:c.before&&c.after?n.jsx(Yb,{itemOne:n.jsx(ym,{src:c.before,alt:`${c.title} 시공 전`,style:{objectFit:"cover"}}),itemTwo:n.jsx(ym,{src:c.after,alt:`${c.title} 시공 후`,style:{objectFit:"cover"}}),style:{width:"100%",maxHeight:"80vh"}}):n.jsx("img",{src:c.image,alt:`${c.title} 줄눈시공 사례 - 디테일라인`,onClick:()=>o(null),className:"w-full max-h-[80vh] object-contain cursor-zoom-out"})}),n.jsxs("div",{className:"mt-3 text-white",children:[n.jsx("p",{className:"text-sm font-semibold",children:c.title}),n.jsx("p",{className:"text-xs text-white/70 mt-1",children:c.location})]})]})})]})}const Vb=[{n:"01",t:"대표 직접 시공",en:"Founder on every site",d:"외주·하청 없습니다. 첫 현장부터 마지막 줄눈까지 대표가 직접 와서 시공합니다. 7년차, 2,400 가구의 손맛 그대로."},{n:"02",t:"KC 인증 친환경 자재",en:"Certified, low-VOC",d:"케라폭시·정품 폴리우레아만 사용합니다. 각 시공한 자재서에 가족이 있는 동네 수준의 친환경 등급을 고집합니다."},{n:"03",t:"2년 무상 A/S · 서면",en:"2-year written warranty",d:"에폭시 계열 자재 시공에 한해 시공 후 2년간 무상 재시공. 들뜸·변색·곰팡이가 발생하면 서면 보증서대로 책임집니다."},{n:"04",t:"정밀 기계 작업",en:"Calibrated tooling",d:"커터·믹서·트랜퍼스 — 도구 하나하나를 매 현장 캘리브레이션. 균일한 폭, 균일한 마감, 균일한 광택."}];function Qb(){return n.jsxs("section",{id:"why",className:"relative overflow-hidden bg-[var(--dark)] py-20 px-6 md:px-12 lg:px-20",children:[n.jsx("div",{className:"why-bg","aria-hidden":"true"}),n.jsxs("div",{className:"relative max-w-7xl mx-auto",children:[n.jsxs("div",{className:"mb-10",children:[n.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Why Detailline"}),n.jsxs("h2",{className:"text-4xl md:text-5xl text-[var(--on-dark)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:["싸지 않습니다. 대신",n.jsx("br",{}),"10년 후에도 그 자리에 있습니다."]}),n.jsxs("p",{className:"text-white/70 mt-1 sm:mt-3 text-base max-w-[56ch]",children:["저희는 가장 싼 업체가 아닙니다. 가장 오래 가게 만드는 업체입니다.",n.jsx("br",{}),"아래 네 가지는 디테일라인이 단 한 번도 타협한 적 없는 기준입니다."]})]}),n.jsx("div",{className:"why-grid mt-12",children:Vb.map(s=>n.jsxs("div",{className:"why-cell",children:[n.jsxs("span",{className:"why-cell-num",children:["— ",s.n]}),n.jsx("h3",{className:"why-cell-title",children:s.t}),n.jsx("p",{className:"why-cell-en",children:s.en}),n.jsx("p",{className:"why-cell-desc",children:s.d})]},s.n))}),n.jsxs("div",{className:"why-foot",children:[n.jsx("p",{className:"why-quote-text",children:"“줄눈은 결국 사람이 합니다. 그 위에 누가 잡고 있느냐가 10년을 가릅니다.”"}),n.jsx("span",{className:"why-quote-caption",children:"— 대표 제이슨 —"})]})]}),n.jsx("style",{children:Kb})]})}const Kb=`
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
`,Zb="/assets/bathroom-qafbnYCD.JPG",Xb="/assets/outdoor_wc-CJQL97Jp.JPG",Jb="/assets/living-BQx9vWF-.jpg",Wb="/assets/entrance-D-gIu59c.jpg",$b="/assets/veranda-BQTujKkw.jpg",Fb="/assets/commercial-BUQpqBDH.jpg",Pb=[{n:"01",t:"욕실 · 화장실",en:"Bathroom",d:"에폭시 계열 전용. 물이 닿는 환경엔 폴리우레아 시공 불가 → 2년 무상 A/S 대상.",tag:"에폭시 계열",photo:Zb},{n:"02",t:"외부 화장실",en:"Outdoor WC",d:"내부 화장실과 동일 → 에폭시 계열만 시공. 물 접촉 환경에서 폴리우레아 시공 불가.",tag:"에폭시 계열",photo:Xb},{n:"03",t:"거실",en:"Living",d:"바닥 줄눈. 20평대 기준 폴리우레아 100만원 · 에폭시 150만원. 30평+ 별도 견적.",tag:"에폭시 / 폴리우레아",photo:Jb},{n:"04",t:"현관",en:"Entrance",d:"첫인상을 결정짓는 1평. 외부 접촉 폴리우레아 가성비 선택 권장.",tag:"폴리우레아 권장",photo:Wb},{n:"05",t:"베란다",en:"Veranda",d:"결로·온도차에 폴리우레아 권장. 빠른 경화 2~4시간 마무리.",tag:"폴리우레아 권장",photo:$b},{n:"06",t:"상업 공간",en:"Commercial",d:"카페·매장·호텔·수영장. 야간·새벽 시공 협의 가능. 환경별 자재 매칭.",tag:"맞춤 자재",photo:Fb}];function Ib(){return n.jsxs("section",{id:"scope",className:"scope-section bg-[var(--bg)] py-20 px-6 md:px-12 lg:px-20",children:[n.jsxs("div",{className:"max-w-7xl mx-auto",children:[n.jsxs("div",{className:"mb-10",children:[n.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Scope"}),n.jsxs("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:["줄눈이 필요한 ",n.jsx("br",{}),n.jsx("span",{className:"text-[var(--accent)]",children:"모든 곳에"})]}),n.jsxs("p",{className:"text-[var(--muted)] mt-1 sm:mt-3 text-base max-w-[56ch]",children:["주거 · 상업 · 시설까지. 디테일라인은 환경별로 자재와 시공 방식을 다르게 가져갑니다.",n.jsx("br",{}),"한 가지 방법으로 모든 곳을 시공하지 않습니다."]})]}),n.jsx("div",{className:"scope-grid mt-12",children:Pb.map(s=>n.jsxs("article",{className:"scope-card",children:[n.jsxs("div",{className:`scope-imgph ${s.photo?"has-photo":""}`,children:[s.photo?n.jsx("img",{src:s.photo,alt:`${s.t} 줄눈시공 - 디테일라인`,className:"scope-imgph-img",loading:"lazy"}):n.jsx("span",{className:"scope-imgph-label","aria-hidden":"true",children:s.en.toUpperCase()}),n.jsx("span",{className:"scope-imgph-corner","aria-hidden":"true",children:s.n})]}),n.jsxs("div",{className:"scope-meta",children:[n.jsxs("span",{className:"scope-meta-mono",children:["— ",s.n," · ",s.en.toUpperCase()]}),n.jsx("h3",{className:"scope-meta-title",children:s.t}),n.jsx("p",{className:"scope-meta-body",children:s.d}),n.jsxs("span",{className:"scope-meta-tag",children:[n.jsx("span",{className:"scope-tag-dot","aria-hidden":"true"}),s.tag]})]})]},s.n))})]}),n.jsx("style",{children:ev})]})}const ev=`
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
`,tv="/assets/re_1-iaNcuT_7.jpg",av="/assets/re_2-CcDcgcOi.jpg",lv="/assets/re_3-DPjtmN0S.jpg",nv=[{star:5,t:"줄눈은 다 똑같은 줄 알았는데",name:"최OO 고객님",photo:{label:"BANPO",corner:"거실 특",src:tv},body:"다른 곳에서 한 줄눈이 2년만에 변색됐어요. 디테일라인은 하루 종일 걸렸지만 마감이 차원이 다릅니다. 모서리, 코너, 실리콘까지 손이 갔어요. 비싸지만 다시 하라면 또 합니다."},{star:5,t:"대표님이 직접 오십니다",name:"정OO 고객님",photo:{label:"HANNAM",corner:"욕실",src:av},body:"견적부터 시공, A/S 안내까지 같은 분이세요. 중간에 누구한테 다시 설명할 필요가 없습니다. 시공도 깔끔하고, 시공 후에도 친절히 안내해 주시고요."},{star:5,t:"2년 보증서 진짜 줍니다",name:"강OO 고객님",photo:{label:"JAMSIL",corner:"욕실",src:lv},body:"대부분 구두 보증인데 여기는 서면으로 보증서를 줍니다. 솔직히 그거 하나만으로도 결정 났어요. 시공도 깔끔하고 청소까지 다 해주고 가시는 게 인상 깊었습니다."}];function iv({n:s}){return n.jsx("div",{className:"rev-stars",role:"img","aria-label":`별점 5점 만점에 ${s}점`,children:[0,1,2,3,4].map(u=>n.jsx("svg",{className:u<s?"rev-star rev-star-filled":"rev-star rev-star-empty",width:"13",height:"13",viewBox:"0 0 13 13","aria-hidden":"true",children:n.jsx("path",{d:"M6.5 0l1.8 4.3 4.7.4-3.6 3 1.1 4.6L6.5 9.9 2.5 12.3l1.1-4.6L0 4.7l4.7-.4z"})},u))})}function rv(){return n.jsxs("section",{id:"reviews",className:"rev-section bg-[var(--bg-2)] py-20 px-6 md:px-12 lg:px-20",children:[n.jsxs("div",{className:"max-w-7xl mx-auto",children:[n.jsxs("div",{className:"mb-10",children:[n.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Reviews"}),n.jsxs("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:[n.jsx("span",{className:"md:block text-[var(--accent)]",children:"지금까지 2,000세대 이상의"})," ",n.jsx("span",{className:"md:block",children:"가족이 맡겨 주셨습니다"})]}),n.jsxs("p",{className:"text-[var(--muted)] mt-1 sm:mt-3 text-base max-w-[56ch]",children:["실제 시공 후 30일 내 작성된 후기 중 일부입니다.",n.jsx("br",{}),"좋은 말씀도, 아쉬운 말씀도 모두 받고 있습니다."]})]}),n.jsx("div",{className:"rev-grid mt-12",children:nv.map(s=>n.jsxs("article",{className:"rev-card",children:[n.jsx("div",{className:"rev-card-photo",children:n.jsxs("div",{className:`rev-imgph ${s.photo.src?"has-photo":""}`,children:[s.photo.src?n.jsx("img",{src:s.photo.src,alt:`${s.photo.label} · ${s.photo.corner}`,className:"rev-imgph-img",loading:"lazy"}):n.jsx("span",{className:"rev-imgph-label","aria-hidden":"true",children:s.photo.label}),n.jsx("span",{className:"rev-imgph-corner","aria-hidden":"true",children:s.photo.corner})]})}),n.jsxs("div",{className:"rev-card-body",children:[n.jsx(iv,{n:s.star}),n.jsxs("h3",{className:"rev-card-title",children:["“",s.t,"”"]}),n.jsx("p",{className:"rev-card-text",children:s.body}),n.jsx("div",{className:"rev-card-footer",children:n.jsx("div",{className:"rev-card-name",children:s.name})})]})]},s.name))})]}),n.jsx("style",{children:sv})]})}const sv=`
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
`,qr="spc:quote-prefill",_o="spc:quote-prefill-changed",cv={화장실:"화장실","거실 바닥":"거실",현관:"현관",베란다:"베란다",세탁실:"기타","다용도/실외기실":"기타"};function ov(s){return cv[s]??"기타"}function dv(s){const u=new Set;for(const c of s)u.add(ov(c));return Array.from(u)}const Ht={화장실:{label:"화장실",en:"BATHROOM",icon:"🛁",rec:"kera",materialLocked:!0,multiple:!0,typeAxis:{lbl:"타입",options:["욕조형","샤워부스형"]},scopeAxis:{lbl:"범위",options:["바닥만","전체(바닥+벽)"]},variants:[{id:"bt-floor",label:"욕조형 · 바닥만",type:"욕조형",scope:"바닥만",kera:{신축:40,구축:50},poly:null},{id:"bt-full",label:"욕조형 · 전체 (바닥+벽)",type:"욕조형",scope:"전체(바닥+벽)",kera:{신축:90,구축:100},poly:null},{id:"sh-floor",label:"샤워부스형 · 바닥만",type:"샤워부스형",scope:"바닥만",kera:{신축:45,구축:55},poly:null},{id:"sh-full",label:"샤워부스형 · 전체 (바닥+벽)",type:"샤워부스형",scope:"전체(바닥+벽)",kera:{신축:95,구축:105},poly:null}]},"거실 바닥":{label:"거실 바닥",en:"LIVING FLOOR",icon:"🛋️",rec:"kera",materialLocked:!0,note:"34평 이하 기준",variants:[{id:"lv",label:"34평 미만",kera:{신축:150,구축:150},poly:null}]},현관:{label:"현관",en:"ENTRANCE",icon:"🚪",rec:"poly",materialLocked:!1,variants:[{id:"ent",label:"바닥",kera:{신축:25,구축:25},poly:{신축:5,구축:10}}]},세탁실:{label:"세탁실",en:"LAUNDRY",icon:"🧺",rec:"poly",materialLocked:!1,variants:[{id:"ldy",label:"바닥",kera:{신축:30,구축:30},poly:{신축:15,구축:15}}]},베란다:{label:"베란다",en:"VERANDA",icon:"🌿",rec:"poly",materialLocked:!1,variants:[{id:"ver",label:"바닥",kera:{신축:30,구축:30},poly:{신축:15,구축:15}}]},"다용도/실외기실":{label:"다용도/실외기실",en:"UTILITY",icon:"🪟",rec:"poly",materialLocked:!1,variants:[{id:"utl",label:"바닥",kera:{신축:20,구축:20},poly:{신축:10,구축:10}}]}},Kr={kera:"케라폭시",poly:"폴리우레아"},zo={1:{name:"세트 1",sub:"기본",desc:"화장실 바닥 ×2 + 현관",prices:{신축:100,구축:120},components:[{space:"화장실",variantId:"bt-floor",material:"kera"},{space:"화장실",variantId:"sh-floor",material:"kera"},{space:"현관",variantId:"ent",material:"poly"}],services:[]},2:{name:"세트 2",sub:"표준",desc:"세트 1 + 양조벽 or 샤워벽 3면 ×1곳",prices:{신축:125,구축:145},components:[{space:"화장실",variantId:"bt-full",material:"kera"},{space:"화장실",variantId:"sh-floor",material:"kera"},{space:"현관",variantId:"ent",material:"poly"}],services:["젠 다이 실리콘 ×2","세면대 실리콘 ×2"]},3:{name:"세트 3",sub:"완성",desc:"화장실 바닥 ×2 + 전체벽 ×2 + 현관",prices:{신축:220,구축:240},components:[{space:"화장실",variantId:"bt-full",material:"kera"},{space:"화장실",variantId:"sh-full",material:"kera"},{space:"현관",variantId:"ent",material:"poly"}],services:["젠 다이 실리콘 ×2","세면대 실리콘 ×2","싱크볼 실리콘","주방벽 케라폭시"]},4:{name:"세트 4",sub:"확장",desc:"세트 2 + 세탁실",prices:{신축:140,구축:160},components:[{space:"화장실",variantId:"bt-full",material:"kera"},{space:"화장실",variantId:"sh-floor",material:"kera"},{space:"현관",variantId:"ent",material:"poly"},{space:"세탁실",variantId:"ldy",material:"poly"}],services:["젠 다이 실리콘 ×2","세면대 실리콘 ×2","주방 실리콘","싱크볼 실리콘"]}},uv=["화장실","거실 바닥","현관","세탁실","베란다","다용도/실외기실"],li=(s,u)=>Ht[s]?.variants.find(c=>c.id===u),Do=(s,u)=>({"욕조형|바닥만":"bt-floor","욕조형|전체(바닥+벽)":"bt-full","샤워부스형|바닥만":"sh-floor","샤워부스형|전체(바닥+벽)":"sh-full"})[`${s}|${u}`]??"bt-floor",Uo=(s,u)=>{const c=Ht[s.space],o=li(s.space,s.variantId);if(!c||!o)return null;const p=c.materialLocked?c.rec:s.material,m=o[p];return m?m[u]:null},Cr=()=>`sel-${Math.random().toString(36).slice(2,9)}-${Date.now().toString(36)}`,cl=s=>s.toLocaleString("ko-KR");function pv(){const[s,u]=y.useState("신축"),[c,o]=y.useState([]),[p,m]=y.useState(null),[x,b]=y.useState(!1),[g,h]=y.useState(!1),E=c.filter(U=>U.space==="화장실"),N=E.length>=1,B=E.length>=2,K=U=>c.some(ae=>ae.space===U),S=()=>m(null),G=U=>{if(S(),K(U))o(ae=>ae.filter(ne=>ne.space!==U));else{const ae=Ht[U],ne=ae.variants[0];o(W=>[...W,{key:Cr(),space:U,variantId:ne.id,material:ae.rec}])}},L=()=>{S(),o(N?U=>U.filter(ae=>ae.space!=="화장실"):U=>[...U,{key:Cr(),space:"화장실",variantId:"bt-floor",material:"kera"}])},Y=()=>{if(N)if(S(),B){const ae=c.map((ne,W)=>ne.space==="화장실"?W:-1).filter(ne=>ne>=0)[1];o(ne=>ne.filter((W,ie)=>ie!==ae))}else{const U=c.find(ie=>ie.space==="화장실"),ne=(U?li("화장실",U.variantId)?.type:void 0)==="욕조형"?"샤워부스형":"욕조형",W=Do(ne,"바닥만");o(ie=>[...ie,{key:Cr(),space:"화장실",variantId:W,material:"kera"}])}},Z=U=>{if(p===U){m(null),o([]);return}const ne=zo[U].components.map(W=>({key:Cr(),space:W.space,variantId:W.variantId,material:W.material}));o(ne),m(U)},q=(U,ae)=>{S(),o(ne=>ne.map(W=>W.key===U?{...W,...ae}:W))},X=U=>{S(),o(ae=>ae.filter(ne=>ne.key!==U))},le=()=>{o([]),m(null)},$=y.useMemo(()=>{const U=c.filter(C=>C.space==="화장실"),ae=c.map(C=>{const V=Ht[C.space],I=li(C.space,C.variantId),be=V.materialLocked?V.rec:C.material,fe=Uo(C,s),k=U.length>1&&C.space==="화장실";return{key:C.key,space:C.space,icon:V.icon,label:`${C.space}${k?" · "+I.label:""}`,material:be,unit:fe}}),ne=ae.reduce((C,V)=>C+(V.unit??0),0),W=ae.some(C=>C.unit===null),ie=p?zo[p]:null,_e=ie?ie.prices[s]:ne,ke=ie?Math.max(0,ne-_e):0;return{lineItems:ae,itemsSum:ne,hasNull:W,finalTotal:_e,savings:ke,set:ie}},[c,s,p]),P=()=>{if(c.length===0)return;const U=[];U.push(`[가격 계산기에서 전달된 구성 · ${s} 기준]`),$.set&&U.push(`✓ ${$.set.name} · ${$.set.sub} (${$.set.desc})`),U.push("");const ae=c.filter(ie=>ie.space==="화장실").length;let ne=0;for(const ie of c){const _e=Ht[ie.space],ke=li(ie.space,ie.variantId),C=_e.materialLocked?_e.rec:ie.material,V=Kr[C],I=Uo(ie,s),be=I===null?"별도 견적":`${I}만원`;let fe;ie.space==="화장실"?(ne+=1,fe=`화장실${ae>1?` ${ne}`:""} · ${ke.label}`):_e.variants.length>1||ke.label!=="바닥"?fe=`${ie.space} · ${ke.label}`:fe=ie.space,U.push(`· ${fe} · ${V} — ${be}`)}if($.set&&$.set.services.length>0){U.push(""),U.push("함께 제공 서비스:");for(const ie of $.set.services)U.push(`· ${ie}`)}U.push(""),U.push("───────────"),$.set&&$.savings>0&&(U.push(`개별 합계: ${$.itemsSum}만원`),U.push(`세트 적용: -${$.savings}만원`)),U.push(`예상 견적가: ${$.finalTotal}만원${$.hasNull?" +α":""} (VAT 포함, 34평·300타일 기준)`),U.push("※정확한 금액은 유선상담 진행 후 안내드립니다.");const W={areas:dv(c.map(ie=>ie.space)),message:U.join(`
`).slice(0,500)};try{sessionStorage.setItem(qr,JSON.stringify(W)),window.dispatchEvent(new CustomEvent(_o))}catch{}h(!0)},je=()=>{h(!1);const U=document.querySelector("#quote");U&&U.scrollIntoView({behavior:"smooth"})};return y.useEffect(()=>{if(!g)return;const U=ne=>{ne.key==="Escape"&&h(!1)};document.addEventListener("keydown",U);const ae=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",U),document.body.style.overflow=ae}},[g]),n.jsxs("section",{id:"calc",className:"spc-section py-20 px-6 md:px-12 lg:px-20",children:[n.jsxs("div",{className:"spc-container max-w-7xl mx-auto",children:[n.jsxs("div",{className:"mb-10",children:[n.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Price Calculator"}),n.jsxs("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:[n.jsxs("span",{className:"md:block",children:["공간을 고르면,",n.jsx("br",{})]})," ",n.jsx("span",{className:"md:block",children:"가격이 바로 보입니다"})]}),n.jsx("p",{className:"text-stone-500 mt-1 sm:mt-3 text-base max-w-[56ch]",children:"필요한 공간만 골라 실시간 견적을 확인하세요"}),n.jsxs("div",{className:"spc-info-chips mt-5",children:[n.jsx("span",{className:"spc-info-chip",children:"34평 이하 기준"}),n.jsx("span",{className:"spc-info-chip",children:"300개 타일 기준"}),n.jsx("span",{className:"spc-info-chip",children:"VAT 포함"})]})]}),n.jsxs("div",{className:"spc-body",children:[n.jsxs("div",{className:"spc-left",children:[n.jsxs("div",{className:"spc-step",children:[n.jsxs("div",{className:"spc-step-head",children:[n.jsx("div",{className:"spc-step-num",children:"01"}),n.jsxs("div",{className:"spc-step-titles",children:[n.jsx("div",{className:"spc-step-title",children:"시공할 공간을 선택해 주세요"}),n.jsx("div",{className:"spc-step-sub",children:"여러 공간을 자유롭게 조합하세요 · 화장실은 최대 2곳까지"})]}),c.length>0&&n.jsx("button",{type:"button",className:"spc-step-action",onClick:le,children:"전체 초기화"})]}),n.jsx("div",{className:"spc-step-body",children:n.jsxs("div",{className:"spc-space-grid",children:[n.jsx(Eo,{icon:Ht.화장실.icon,label:"화장실 1",en:"BATHROOM",selected:N,onClick:L}),n.jsx(Eo,{icon:Ht.화장실.icon,label:"화장실 (추가)",en:"BATHROOM +",selected:B,disabled:!N,onClick:Y}),uv.slice(1).map(U=>n.jsx(Eo,{icon:Ht[U].icon,label:Ht[U].label,en:Ht[U].en,selected:K(U),onClick:()=>G(U)},U))]})})]}),n.jsxs("div",{className:"spc-step",children:[n.jsxs("button",{type:"button",className:"spc-accordion-head",onClick:()=>b(U=>!U),"aria-expanded":x,children:[n.jsx("div",{className:"spc-step-num",children:"02"}),n.jsxs("div",{className:"spc-step-titles",children:[n.jsx("div",{className:"spc-step-title",children:"또는 간편 세트 패키지로 선택"}),n.jsx("div",{className:"spc-step-sub",children:"자주 함께 시공되는 4가지 구성"})]}),n.jsx("span",{className:"spc-accordion-chev","aria-hidden":"true",children:x?"−":"+"})]}),x&&n.jsxs("div",{className:"spc-step-body",children:[n.jsx("div",{className:"spc-set-grid",children:["1","2","3","4"].map(U=>n.jsx(fv,{id:U,set:zo[U],selected:p===U,houseType:s,onPick:()=>Z(U)},U))}),n.jsx("p",{className:"spc-set-note",children:"※ 세트 가격은 컴포넌트 개별 합산과 동일하지 않습니다. 추가 서비스 포함 구성이며, 4개 세트는 시각적으로 동등하게 노출됩니다."})]})]}),c.length>0&&n.jsxs("div",{className:"spc-step",children:[n.jsxs("div",{className:"spc-step-head",children:[n.jsx("div",{className:"spc-step-num",children:"03"}),n.jsxs("div",{className:"spc-step-titles",children:[n.jsx("div",{className:"spc-step-title",children:"세부 옵션을 조정해 보세요"}),n.jsx("div",{className:"spc-step-sub",children:"타입 · 범위 · 자재를 변경하면 견적이 실시간으로 업데이트됩니다"})]})]}),n.jsx("div",{className:"spc-step-body",children:n.jsx("div",{className:"spc-selrow-list",children:c.map((U,ae)=>n.jsx(mv,{sel:U,houseType:s,bathroomIndex:U.space==="화장실"?E.findIndex(ne=>ne.key===U.key):-1,bathroomCount:E.length,onUpdate:ne=>q(U.key,ne),onRemove:()=>X(U.key)},U.key))})})]})]}),n.jsx("aside",{className:"spc-right",children:n.jsxs("div",{className:"spc-result",children:[n.jsx("div",{className:"spc-result-eyebrow",children:n.jsx("span",{className:"spc-result-ht-lbl",children:"줄눈 시공 계산기"})}),n.jsxs("div",{className:"spc-result-ht",children:[n.jsx("span",{className:"spc-result-ht-lbl",children:"주거 유형"}),n.jsx("div",{className:"spc-ht-toggle",children:["신축","구축"].map(U=>n.jsx("button",{type:"button",className:`spc-ht-btn ${s===U?"on":""}`,onClick:()=>u(U),children:U},U))})]}),$.set&&n.jsxs("div",{className:"spc-set-banner",children:[n.jsxs("div",{className:"spc-set-banner-meta",children:[n.jsx("span",{className:"spc-set-banner-lbl",children:"★ SET APPLIED"}),n.jsxs("span",{className:"spc-set-banner-name",children:[$.set.name," ",n.jsxs("span",{className:"spc-set-banner-sub",children:["· ",$.set.sub]})]})]}),n.jsx("button",{type:"button",className:"spc-set-banner-clear",onClick:S,"aria-label":"세트 해제",children:"×"})]}),c.length===0?n.jsxs("div",{className:"spc-result-empty",children:["좌측에서 공간을 개별로 선택하거나,",n.jsx("br",{}),"세트 패키지를 골라 보세요."]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"spc-result-section",children:[n.jsxs("div",{className:"spc-result-section-lbl",children:["선택 항목 · ",$.lineItems.length,"건"]}),n.jsx("ul",{className:"spc-line-items",children:$.lineItems.map(U=>n.jsxs("li",{className:"spc-line-item",children:[n.jsxs("div",{className:"spc-li-main",children:[n.jsx("span",{className:"spc-li-icon","aria-hidden":"true",children:U.icon}),n.jsxs("div",{className:"spc-li-text",children:[n.jsx("div",{className:"spc-li-label",children:U.label}),n.jsxs("div",{className:"spc-li-meta",children:[Kr[U.material]," · ",s]})]})]}),n.jsx("div",{className:"spc-li-price",children:U.unit===null?n.jsx("span",{className:"spc-li-quote",children:"별도 견적"}):n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"spc-li-val",children:cl(U.unit)}),n.jsx("span",{className:"spc-li-unit",children:"만원"})]})})]},U.key))})]}),$.set&&$.set.services.length>0&&n.jsxs("div",{className:"spc-result-services",children:[n.jsx("div",{className:"spc-result-section-lbl",children:"+ 함께 제공되는 서비스"}),n.jsx("ul",{className:"spc-services-list",children:$.set.services.map(U=>n.jsxs("li",{className:"spc-service-item",children:["✓ ",U]},U))})]}),n.jsxs("div",{className:"spc-totals",children:[$.set&&n.jsxs("div",{className:"spc-subtotal-row",children:[n.jsx("span",{className:"spc-totals-lbl",children:"개별 합계"}),n.jsxs("span",{className:"spc-subtotal-val",children:[n.jsx("span",{className:"strike",children:cl($.itemsSum)}),n.jsx("span",{className:"spc-totals-suffix",children:"만원"})]})]}),$.set&&$.savings>0&&n.jsxs("div",{className:"spc-discount-note",children:["세트 적용 −",cl($.savings),"만원"]}),n.jsxs("div",{className:"spc-final-row",children:[n.jsx("span",{className:"spc-totals-lbl spc-totals-lbl-accent",children:"최종 견적가"}),n.jsxs("span",{className:"spc-final-price",children:[n.jsx("span",{className:"spc-final-val",children:cl($.finalTotal)}),n.jsx("span",{className:"spc-totals-suffix spc-totals-suffix-lg",children:"만원"}),$.hasNull&&n.jsx("span",{className:"spc-hasnull",children:"+α"})]})]}),$.hasNull&&n.jsx("div",{className:"spc-hasnull-note",children:"‘별도 견적’ 항목이 포함되어 있어 현장 확인 후 안내드립니다."})]}),n.jsx("button",{type:"button",className:"spc-cta",onClick:P,children:"이 구성으로 견적 받기 →"})]}),n.jsxs("div",{className:"spc-policy",children:[n.jsx("span",{className:"spc-policy-chip",children:"📷 원격 견적"}),n.jsx("span",{className:"spc-policy-chip",children:"💡 2년 A/S · 케라폭시"}),n.jsx("span",{className:"spc-policy-chip",children:"✓ VAT 포함"})]}),n.jsx("p",{className:"spc-fineprint",children:"※ 34평 이하 · 300개 타일 기준 예상가. 정확한 금액은 사진·정보 확인 후 서면 견적서로 안내드립니다."})]})})]})]}),g&&n.jsx("div",{className:"spc-modal-overlay",role:"dialog","aria-modal":"true","aria-labelledby":"spc-modal-title",onClick:()=>h(!1),children:n.jsxs("div",{className:"spc-modal",onClick:U=>U.stopPropagation(),children:[n.jsx("button",{type:"button",className:"spc-modal-close",onClick:()=>h(!1),"aria-label":"닫기",children:"×"}),n.jsx("span",{className:"spc-modal-eyebrow",children:"견적 전달 완료"}),n.jsx("h3",{id:"spc-modal-title",className:"spc-modal-title",children:"견적 구성이 자동으로 담겼습니다"}),n.jsxs("p",{className:"spc-modal-body",children:[n.jsx("strong",{children:"이름 · 연락처 · 시공 위치 · 희망 날짜"}),n.jsx("br",{}),"4가지 정보만 입력해 주시면",n.jsx("br",{}),"빠른 시간 내 유선으로 안내드리겠습니다."]}),n.jsx("button",{type:"button",className:"spc-modal-cta",onClick:je,children:"견적 폼으로 이동 →"})]})}),n.jsx("style",{children:hv})]})}function Eo({icon:s,label:u,en:c,selected:o,disabled:p,onClick:m}){return n.jsxs("button",{type:"button",className:`spc-space-card ${o?"on":""} ${p?"is-disabled":""}`,onClick:m,disabled:p,"aria-pressed":o,children:[n.jsx("span",{className:"spc-sc-icon","aria-hidden":"true",children:s}),n.jsxs("span",{className:"spc-sc-meta",children:[n.jsx("span",{className:"spc-sc-label",children:u}),n.jsx("span",{className:"spc-sc-en",children:c})]}),n.jsx("span",{className:"spc-sc-action","aria-hidden":"true",children:p?"🔒":o?"✓":"＋"})]})}function fv({id:s,set:u,selected:c,houseType:o,onPick:p}){return n.jsxs("div",{className:`spc-set-card ${c?"on":""}`,children:[n.jsxs("div",{className:"spc-set-head",children:[n.jsxs("span",{className:"spc-set-num",children:["SET 0",s]}),n.jsxs("h3",{className:"spc-set-name",children:[u.name," ",n.jsxs("span",{className:"spc-set-sub",children:["· ",u.sub]})]})]}),n.jsx("p",{className:"spc-set-desc",children:u.desc}),n.jsxs("div",{className:"spc-set-prices",children:[n.jsxs("div",{className:"spc-set-price",children:[n.jsx("span",{className:"spc-set-price-lbl",children:"신축"}),n.jsx("span",{className:"spc-set-price-val",children:cl(u.prices.신축)}),n.jsx("span",{className:"spc-set-price-unit",children:"만원"})]}),n.jsxs("div",{className:"spc-set-price",children:[n.jsx("span",{className:"spc-set-price-lbl",children:"구축"}),n.jsx("span",{className:"spc-set-price-val",children:cl(u.prices.구축)}),n.jsx("span",{className:"spc-set-price-unit",children:"만원"})]})]}),u.services.length>0&&n.jsxs("div",{className:"spc-set-services",children:[n.jsx("div",{className:"spc-set-services-lbl",children:"+ 함께 제공"}),n.jsx("ul",{children:u.services.map(m=>n.jsxs("li",{children:["· ",m]},m))})]}),n.jsx("button",{type:"button",className:"spc-set-cta",onClick:p,children:c?"✓ 적용 중 · 다시 누르면 해제":"이 세트로 선택 →"}),n.jsxs("p",{className:"spc-set-note-inner",children:[o==="신축"?"신축":"구축"," 기준"]})]})}function mv({sel:s,houseType:u,bathroomIndex:c,bathroomCount:o,onUpdate:p,onRemove:m}){const x=Ht[s.space],b=li(s.space,s.variantId),g=s.space==="화장실",h=x.materialLocked?x.rec:s.material,E=Uo(s,u),N=S=>{if(!g)return;const G=b.scope??"바닥만";p({variantId:Do(S,G)})},B=S=>{if(!g)return;const G=b.type??"욕조형";p({variantId:Do(G,S)})},K=g&&o>1?`${x.label} ${c+1}`:x.label;return n.jsxs("div",{className:"spc-sel-row",children:[n.jsxs("div",{className:"spc-sel-row-head",children:[n.jsxs("div",{className:"spc-sel-row-title",children:[n.jsx("span",{className:"spc-sr-icon","aria-hidden":"true",children:x.icon}),n.jsx("span",{children:K})]}),n.jsx("button",{type:"button",className:"spc-sel-x",onClick:m,"aria-label":"이 항목 삭제",children:"×"})]}),n.jsxs("div",{className:"spc-sel-row-body",children:[g&&x.typeAxis&&n.jsxs("div",{className:"spc-sr-block",children:[n.jsx("div",{className:"spc-sr-lbl",children:x.typeAxis.lbl}),n.jsx("div",{className:"spc-sr-chips",children:x.typeAxis.options.map(S=>n.jsx("button",{type:"button",className:`spc-sr-chip ${b.type===S?"on":""}`,onClick:()=>N(S),children:S},S))})]}),g&&x.scopeAxis&&n.jsxs("div",{className:"spc-sr-block",children:[n.jsx("div",{className:"spc-sr-lbl",children:x.scopeAxis.lbl}),n.jsx("div",{className:"spc-sr-chips",children:x.scopeAxis.options.map(S=>n.jsx("button",{type:"button",className:`spc-sr-chip ${b.scope===S?"on":""}`,onClick:()=>B(S),children:S},S))})]}),!g&&x.variants.length>1&&n.jsxs("div",{className:"spc-sr-block",children:[n.jsx("div",{className:"spc-sr-lbl",children:"옵션"}),n.jsx("div",{className:"spc-sr-chips",children:x.variants.map(S=>n.jsx("button",{type:"button",className:`spc-sr-chip ${s.variantId===S.id?"on":""}`,onClick:()=>p({variantId:S.id}),children:S.label},S.id))})]}),x.materialLocked?n.jsx("div",{className:"spc-sr-locked",children:"EPOXY ONLY · 물 접촉 환경 → 폴리우레아 시공 불가"}):n.jsxs("div",{className:"spc-sr-block",children:[n.jsxs("div",{className:"spc-sr-lbl",children:["자재 ",n.jsxs("span",{className:"spc-sr-lbl-aux",children:["권장 ",Kr[x.rec]]})]}),n.jsx("div",{className:"spc-sr-chips",children:["kera","poly"].map(S=>n.jsx("button",{type:"button",className:`spc-sr-chip ${h===S?"on":""}`,onClick:()=>p({material:S}),children:Kr[S]},S))})]}),n.jsxs("div",{className:"spc-sr-price",children:[n.jsxs("span",{className:"spc-sr-price-lbl",children:[u," · 예상가"]}),E===null?n.jsx("span",{className:"spc-sr-quote",children:"QUOTE NEEDED · 별도 견적"}):n.jsxs("span",{className:"spc-sr-price-val-wrap",children:[n.jsx("span",{className:"spc-sr-price-val",children:cl(E)}),n.jsx("span",{className:"spc-sr-price-unit",children:"만원"})]})]})]})]})}const hv=`
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
`,xv="/assets/grouting-Bwtwubk9.jpg",gv="/assets/grouting_m-MwMcW6AJ.jpg",bv=["Since 2019","누적 2,000+ 현장","전 시공 대표 직접 마감"];function vv(){return n.jsxs("section",{id:"about",className:"ab-section",children:[n.jsxs("div",{className:"ab-photo-wrap","aria-hidden":"true",children:[n.jsxs("picture",{children:[n.jsx("source",{media:"(max-width: 900px)",srcSet:gv}),n.jsx("img",{src:xv,alt:"",className:"ab-photo",loading:"lazy"})]}),n.jsx("div",{className:"ab-photo-fade"})]}),n.jsx("div",{className:"ab-text-outer px-6 md:px-12 lg:px-20",children:n.jsx("div",{className:"max-w-7xl mx-auto",children:n.jsxs("div",{className:"ab-text",children:[n.jsx("span",{className:"ab-eyebrow",children:"About Detailline"}),n.jsxs("h2",{className:"ab-headline",children:["보이지 않는",n.jsx("br",{}),"한 줄에도,",n.jsx("br",{}),n.jsx("span",{className:"ab-accent",children:"집요한 정성."})]}),n.jsxs("p",{className:"ab-body",children:["줄눈 한 줄은 손가락 한 마디 폭. 하지만 그 한 줄이",n.jsx("br",{className:"ab-br-pc"}),"공간의 인상을 좌우합니다. 디테일라인은 그 한 줄을",n.jsx("br",{className:"ab-br-pc"}),"끝까지 다듬는 사람들의 이름입니다."]}),n.jsx("ul",{className:"ab-badges",children:bv.map(s=>n.jsxs("li",{className:"ab-badge",children:[n.jsx("span",{className:"ab-dot","aria-hidden":"true"}),s]},s))})]})})}),n.jsx("style",{children:yv})]})}const yv=`
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
`,Nm=[{id:1,question:"줄눈 시공은 어떤 공간에 적용할 수 있나요?",answer:"화장실, 주방, 현관, 베란다, 거실, 수영장, 목욕탕 등 타일이 시공된 모든 공간에 적용 가능합니다. 주거 공간뿐만 아니라 상업 시설, 공공시설에도 시공 가능하며, 실내외 모두 가능합니다. 공간별 특성에 맞는 전용 줄눈재를 사용합니다."},{id:2,question:"시공 기간은 얼마나 걸리나요?",answer:"일반 가정용 화장실 기준으로 보통 반나절(4~6시간) 내에 완료됩니다. 시공 면적과 오염 정도에 따라 다를 수 있으며, 대형 공간이나 전면 교체의 경우 1~2일이 소요될 수 있습니다. 정확한 기간은 현장 확인 후 안내드립니다."},{id:3,question:"기존 줄눈을 제거하고 새로 시공하나요?",answer:"오염 정도와 상태에 따라 달라집니다. 경미한 오염의 경우 세척 후 덧시공이 가능하지만, 곰팡이가 심하거나 들뜸 현상이 있는 경우에는 전동 공구를 이용해 기존 줄눈을 완전히 제거한 후 새로 시공합니다. 현장 방문 후 최적의 방법을 제안드립니다."},{id:4,question:"시공 후 관리 방법이 있나요?",answer:"시공 완료 후 24시간은 물에 닿지 않도록 해주세요. 이후에는 일반 중성 세제로 청소하시면 됩니다. 강산성·강알칼리성 세제는 줄눈재를 손상시킬 수 있으니 피해주세요. 정기적인 청소만으로도 시공 효과가 오래 유지됩니다. 보통 5~10년 이상 효과가 지속됩니다."},{id:5,question:"곰팡이가 심한 경우에도 시공이 가능한가요?",answer:"네, 가능합니다. 먼저 항균·항곰팡이 처리를 진행한 후, 곰팡이 방지 성분이 포함된 항균 줄눈재를 사용하여 시공합니다. 심한 경우에는 타일과 방수층까지 점검하여 근본적인 원인을 해결합니다. 재발 방지를 위한 처리까지 함께 진행합니다."},{id:6,question:"견적은 어떻게 받을 수 있나요?",answer:'하단의 "무료 견적 신청" 폼을 작성하시거나 전화로 문의 주시면 됩니다. 시공 면적, 타일 종류, 현재 상태 등 간단한 정보와 사진을 보내주시면 더 정확한 견적을 드릴 수 있습니다. 현장 방문 견적도 무료로 진행하고 있습니다.'}];function jv(s){return{"@context":"https://schema.org","@type":"FAQPage",mainEntity:s.map(({q:u,a:c})=>({"@type":"Question",name:u,acceptedAnswer:{"@type":"Answer",text:c}}))}}function Il(s){return{"@context":"https://schema.org","@type":"Article",headline:s.title,description:s.description,mainEntityOfPage:{"@type":"WebPage","@id":s.url},image:s.image,datePublished:s.datePublished,dateModified:s.dateModified??s.datePublished,author:{"@type":"Organization",name:"디테일라인"},publisher:{"@type":"Organization",name:"디테일라인"}}}function en(s){return{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:s.map((u,c)=>({"@type":"ListItem",position:c+1,name:u.name,item:u.url}))}}function Nt(s,u){document.getElementById(s)?.remove();const c=document.createElement("script");return c.type="application/ld+json",c.id=s,c.textContent=JSON.stringify(u),document.head.appendChild(c),()=>{document.getElementById(s)?.remove()}}function kv(){const[s,u]=y.useState(null);y.useEffect(()=>Nt("faq-jsonld",jv(Nm.map(p=>({q:p.question,a:p.answer})))),[]);const c=o=>{u(p=>p===o?null:o)};return n.jsx("section",{id:"faq",className:"py-20 px-6 md:px-12 lg:px-20 bg-[var(--bg-2)]",children:n.jsxs("div",{className:"max-w-3xl mx-auto",children:[n.jsxs("div",{className:"text-center mb-10",children:[n.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"FAQ"}),n.jsx("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:"자주 묻는 질문"}),n.jsx("p",{className:"text-[var(--muted)] mt-3 text-base",children:"궁금하신 점을 확인하세요"})]}),n.jsx("div",{className:"space-y-0",children:Nm.map((o,p)=>n.jsxs("div",{className:`border-b ${p===0?"border-t":""} border-[var(--line)]`,children:[n.jsxs("button",{onClick:()=>c(o.id),className:"w-full flex items-start justify-between gap-4 py-5 text-left cursor-pointer group",children:[n.jsx("span",{className:`text-base font-medium leading-snug transition-colors ${s===o.id?"text-[var(--ink)]":"text-[var(--muted)] group-hover:text-[var(--ink-2)]"}`,children:o.question}),n.jsx("div",{className:`w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full transition-all ${s===o.id?"bg-[var(--ink)] text-[var(--paper)] rotate-45":"bg-[var(--paper)] text-[var(--muted)] border border-[var(--line)]"}`,children:n.jsx("i",{className:"ri-add-line text-sm"})})]}),s===o.id&&n.jsx("div",{className:"pb-10 bg-[var(--paper)]",children:n.jsx("p",{className:"px-5 pt-3 text-[var(--ink-2)] text-sm leading-relaxed",children:o.answer})})]},o.id))}),n.jsxs("div",{className:"mt-12 text-center bg-[var(--paper)] border border-[var(--line)] rounded-sm py-10 px-6",children:[n.jsx("p",{className:"text-stone-600 font-medium mb-2",children:"원하는 답을 찾지 못하셨나요?"}),n.jsx("p",{className:"text-stone-400 text-sm mb-6",children:"전화로 편하게 문의해 주세요"}),n.jsx("div",{className:"flex justify-center",children:n.jsxs("a",{href:"tel:010-8005-6674",onClick:()=>it.phoneClick("faq"),className:"inline-flex h-12 sm:min-w-[180px] items-center justify-center gap-2 px-7 text-sm font-medium cursor-pointer rounded-sm bg-[var(--accent)] text-white transition-all hover:bg-[var(--accent-deep)]",children:[n.jsx("i",{className:"ri-phone-line"}),"010-8005-6674"]})})]})]})})}const lh=["일","월","화","수","목","금","토"];function wm(s,u){return s.getFullYear()===u.getFullYear()&&s.getMonth()===u.getMonth()&&s.getDate()===u.getDate()}function Sm(s){return`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`}function Nv(s){return`${s.getFullYear()}년 ${s.getMonth()+1}월 ${s.getDate()}일 (${lh[s.getDay()]})`}function wv({name:s="date",onChange:u}){const c=new Date,[o,p]=y.useState(!1),[m,x]=y.useState(c.getFullYear()),[b,g]=y.useState(c.getMonth()),[h,E]=y.useState(null),N=q=>{const X=new Date(m,b+q,1);x(X.getFullYear()),g(X.getMonth())},B=q=>{E(q),u?.(Sm(q)),p(!1)},K=()=>{E(null),u?.("")},S=()=>{x(c.getFullYear()),g(c.getMonth()),B(c)},G=new Date(m,b,1).getDay(),L=new Date(m,b+1,0).getDate(),Y=new Date(c.getFullYear(),c.getMonth(),c.getDate()),Z=[...Array(G).fill(null),...Array.from({length:L},(q,X)=>new Date(m,b,X+1))];return n.jsxs("div",{className:"relative w-full",children:[n.jsxs("button",{type:"button",onClick:()=>p(q=>!q),className:"w-full flex items-center justify-between px-4 py-3 rounded-sm border border-[var(--line)] bg-[var(--paper)] hover:border-[var(--line-strong)] transition-all duration-150",children:[n.jsx("span",{className:`text-sm ${h?"text-[var(--ink)]":"text-[var(--muted-2)]"}`,children:h?Nv(h):"날짜를 선택해 주세요"}),n.jsx("i",{className:"ri-calendar-line text-stone-400 text-base"})]}),n.jsx("input",{type:"hidden",name:s,value:h?Sm(h):""}),o&&n.jsxs("div",{className:"absolute z-50 mt-2 w-full bg-[var(--paper)] border border-[var(--line)] rounded-sm shadow-xl overflow-hidden",children:[n.jsxs("div",{className:"flex items-center justify-between px-5 pt-5 pb-3",children:[n.jsx("button",{type:"button",onClick:()=>N(-1),className:"w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-100 transition-colors",children:n.jsx("i",{className:"ri-arrow-left-s-line text-stone-500"})}),n.jsxs("span",{className:"text-sm font-medium text-stone-800 tracking-tight",children:[m,"년 ",b+1,"월"]}),n.jsx("button",{type:"button",onClick:()=>N(1),className:"w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-100 transition-colors",children:n.jsx("i",{className:"ri-arrow-right-s-line text-stone-500"})})]}),n.jsx("div",{className:"grid grid-cols-7 px-3 pb-1",children:lh.map((q,X)=>n.jsx("div",{className:`text-center text-xs font-medium py-1 ${X===0||X===6?"text-[var(--accent)]":"text-[var(--muted-2)]"}`,children:q},q))}),n.jsx("div",{className:"grid grid-cols-7 px-3 pb-4 gap-y-1",children:Z.map((q,X)=>{if(!q)return n.jsx("div",{},`empty-${X}`);const le=q<Y,$=wm(q,c),P=h?wm(q,h):!1,je=q.getDay()===0,U=q.getDay()===6;let ae="w-9 h-9 mx-auto flex items-center justify-center rounded-full text-sm transition-all duration-100 ";return P?ae+="bg-[var(--ink)] text-[var(--paper)] font-medium":le?ae+="text-[var(--muted-2)]/50 cursor-not-allowed":$?ae+="border border-[var(--accent)] text-[var(--accent)] font-medium hover:bg-[var(--accent)]/10":je||U?ae+="text-[var(--muted-2)] hover:bg-[var(--bg-2)]":ae+="text-[var(--ink-2)] hover:bg-[var(--bg-2)]",n.jsx("button",{type:"button",disabled:le,onClick:()=>B(q),className:ae,children:q.getDate()},q.toISOString())})}),n.jsxs("div",{className:"border-t border-[var(--line)] px-4 py-3 flex justify-between items-center",children:[n.jsx("button",{type:"button",onClick:K,className:"text-xs text-[var(--muted-2)] hover:text-[var(--ink-2)] transition-colors",children:"초기화"}),n.jsx("button",{type:"button",onClick:S,className:"text-xs font-medium text-[var(--accent)] hover:text-[var(--accent-deep)] transition-colors",children:"오늘"})]})]})]})}const zm=["현관","화장실","베란다","거실","주방","수영장","목욕탕","기타"],Sv="0x4AAAAAADGHPfvxD-MhAQbY";function zv(s){return s.length<=3?s:s.length<=7?`${s.slice(0,3)}-${s.slice(3)}`:`${s.slice(0,3)}-${s.slice(3,7)}-${s.slice(7,11)}`}function Ev(){const[s,u]=y.useState(!1),[c,o]=y.useState(!1),[p,m]=y.useState(0),[x,b]=y.useState(""),[g,h]=y.useState(""),[E,N]=y.useState(""),[B,K]=y.useState(""),[S,G]=y.useState([]),[L,Y]=y.useState(""),[Z,q]=y.useState(!1),[X,le]=y.useState({}),[$,P]=y.useState(""),je=y.useRef(null),U=y.useRef(null),ae=y.useRef(null),ne=y.useRef(!1),W=500;y.useEffect(()=>{if(!ae.current)return;const z=new IntersectionObserver(H=>{H[0]?.isIntersecting&&!ne.current&&(ne.current=!0,it.quoteSectionView(),z.disconnect())},{threshold:.3});return z.observe(ae.current),()=>z.disconnect()},[]),y.useEffect(()=>{let z=!1;const H=()=>{if(!z&&je.current){if(typeof window.turnstile>"u"){setTimeout(H,100);return}U.current=window.turnstile.render(je.current,{sitekey:Sv,callback:Q=>P(Q),"error-callback":()=>P(""),"expired-callback":()=>P(""),theme:"light",size:"normal"})}};return H(),()=>{z=!0,U.current&&window.turnstile&&(window.turnstile.remove(U.current),U.current=null)}},[]),y.useEffect(()=>{const z=()=>{try{const H=sessionStorage.getItem(qr);if(!H)return;const Q=JSON.parse(H);Array.isArray(Q.areas)&&Q.areas.length>0&&G(Q.areas.filter(re=>zm.includes(re))),typeof Q.message=="string"&&Q.message.length>0&&(Y(Q.message),m(Q.message.length)),le(re=>({...re,areas:""}))}catch{}};return z(),window.addEventListener(_o,z),()=>window.removeEventListener(_o,z)},[]);const ie=z=>{const H=z.target.value.replace(/[0-9]/g,"").slice(0,9);b(H),le(Q=>({...Q,name:""}))},_e=z=>{const H=z.target.value.replace(/[^0-9]/g,"").slice(0,11);h(H),le(Q=>({...Q,phone:""}))},ke=z=>{N(z.target.value.slice(0,39)),le(H=>({...H,location:""}))},C=z=>{K(z),le(H=>({...H,date:""}))},V=z=>{G(H=>H.includes(z)?H.filter(oe=>oe!==z):[...H,z]),le(H=>({...H,areas:""}))},I=z=>{q(z.target.checked),le(H=>({...H,privacy:""}))},be=()=>{const z={};return x.trim()||(z.name="이름을 입력해주세요."),g.length?g.length<10&&(z.phone="올바른 연락처를 입력해주세요."):z.phone="연락처를 입력해주세요.",E.trim()||(z.location="시공위치를 입력해주세요."),B||(z.date="희망날짜를 선택해주세요."),S.length===0&&(z.areas="시공공간을 1개 이상 선택해주세요."),Z||(z.privacy="개인정보처리방침에 동의해주세요."),$||(z.cfToken="봇 검증을 완료해주세요."),le(z),Object.keys(z).length===0},fe=x.trim().length>0&&g.length>=10&&E.trim().length>0&&B.length>0&&S.length>0&&$.length>0&&Z,k=async z=>{if(z.preventDefault(),!be())return;const H=z.currentTarget;if(H.querySelector('[name="company_website"]')?.value||""){u(!0);return}if((H.querySelector('[name="message"]')?.value||"").length>W)return;const oe=new FormData(H),xe=new URLSearchParams;oe.forEach(($e,Ce)=>{Ce!=="phone"&&Ce!=="company_website"&&xe.append(Ce,$e.toString())}),xe.append("phone",g),xe.append("cf_turnstile_token",$),o(!0);try{await fetch("https://script.google.com/macros/s/AKfycbyQBvfjjtCFSY4WZUL2Qv_vIwz4xbXyLF5pygpV5d_jpICW_hhXnDnr1r6jZHhS_kEayA/exec",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:xe.toString()}),it.formSubmit(S,E.split(" ")[0]||"unknown"),u(!0),b(""),h(""),N(""),K(""),G([]),Y(""),q(!1),m(0),le({}),P("");try{sessionStorage.removeItem(qr)}catch{}U.current&&window.turnstile&&window.turnstile.reset(U.current)}catch{it.formSubmitFail("network"),alert("제출 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.")}finally{o(!1)}};return n.jsx("section",{ref:ae,id:"quote",className:"py-10 px-6 md:px-12 lg:px-20 bg-[var(--bg)]",children:n.jsxs("div",{className:"max-w-4xl mx-auto",children:[n.jsxs("div",{className:"text-center mb-10",children:[n.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Free Estimate"}),n.jsx("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:"무료 견적 상담 신청"}),n.jsx("p",{className:"text-[var(--muted)] mt-3",children:"양식을 작성하시면 24시간 내 연락드립니다"})]}),n.jsx("div",{className:"bg-white rounded-sm pt-5 px-5 pb-6 md:p-12 border border-[var(--line)]",style:{colorScheme:"light"},children:s?n.jsxs("div",{className:"text-center py-12",children:[n.jsx("div",{className:"w-16 h-16 flex items-center justify-center bg-[var(--ink)] rounded-full mx-auto mb-4",children:n.jsx("i",{className:"ri-check-line text-[var(--paper)] text-2xl"})}),n.jsx("h3",{className:"text-xl font-medium text-[var(--ink)] mb-2",children:"신청이 완료되었습니다!"}),n.jsxs("p",{className:"text-[var(--muted)] text-sm",children:["24시간 내에 담당자가 연락드릴 예정입니다.",n.jsx("br",{}),"감사합니다."]}),n.jsx("button",{onClick:()=>{u(!1),b(""),h(""),N(""),K(""),G([]),Y(""),q(!1),m(0),le({});try{sessionStorage.removeItem(qr)}catch{}},className:"mt-6 text-sm text-stone-400 underline cursor-pointer",children:"다시 신청하기"})]}):n.jsxs("form",{"data-readdy-form":!0,onSubmit:k,className:"space-y-6",children:[n.jsxs("div",{"aria-hidden":"true",style:{position:"absolute",left:"-9999px",width:"1px",height:"1px",overflow:"hidden"},children:[n.jsx("label",{htmlFor:"company_website",children:"Website (do not fill)"}),n.jsx("input",{type:"text",id:"company_website",name:"company_website",tabIndex:-1,autoComplete:"off",defaultValue:""})]}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[n.jsxs("div",{children:[n.jsxs("label",{className:"block text-sm font-medium text-[var(--ink-2)] mb-1.5",children:["이름 ",n.jsx("span",{className:"text-red-400",children:"*"})]}),n.jsx("input",{type:"text",name:"name",required:!0,value:x,onChange:ie,maxLength:9,placeholder:"홍길동",className:"w-full px-4 py-3 border border-[var(--line)] rounded-sm text-base text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors"}),X.name&&n.jsx("p",{className:"mt-1 text-xs text-red-500",children:X.name})]}),n.jsxs("div",{children:[n.jsxs("label",{className:"block text-sm font-medium text-[var(--ink-2)] mb-1.5",children:["연락처 ",n.jsx("span",{className:"text-red-400",children:"*"})]}),n.jsxs("div",{className:"relative",children:[n.jsx("input",{type:"tel",name:"phone",required:!0,value:zv(g),onChange:_e,inputMode:"numeric",maxLength:13,placeholder:"010-1234-5678",className:"w-full px-4 py-3 border border-[var(--line)] rounded-sm text-base text-stone-700 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors"}),n.jsxs("span",{className:`absolute right-4 top-3 text-xs font-medium ${g.length>=10?"text-[var(--accent)]":"text-[var(--muted-2)]"}`,children:[g.length,"/11"]})]}),X.phone&&n.jsx("p",{className:"mt-1 text-xs text-red-500",children:X.phone})]})]}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[n.jsxs("div",{children:[n.jsxs("label",{className:"block text-sm font-medium text-[var(--ink-2)] mb-1.5",children:["시공 아파트 ",n.jsx("span",{className:"text-red-400",children:"*"})]}),n.jsx("input",{type:"text",name:"location",required:!0,value:E,onChange:ke,maxLength:39,placeholder:"예 : 서초구 반포동 자이아파트",className:"w-full px-4 py-3 border border-[var(--line)] rounded-sm text-base text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors"}),X.location&&n.jsx("p",{className:"mt-1 text-xs text-red-500",children:X.location})]}),n.jsxs("div",{children:[n.jsxs("label",{className:"block text-sm font-medium text-[var(--ink-2)] mb-1.5",children:["희망 날짜 ",n.jsx("span",{className:"text-red-400",children:"*"})]}),n.jsx(wv,{name:"date",onChange:C}),X.date&&n.jsx("p",{className:"mt-1 text-xs text-red-500",children:X.date})]})]}),n.jsxs("div",{children:[n.jsxs("label",{className:"block text-sm font-medium text-stone-700 mb-2",children:["시공 공간 (중복 선택 가능) ",n.jsx("span",{className:"text-red-400",children:"*"})]}),n.jsx("div",{className:"flex flex-wrap gap-2",children:zm.map(z=>n.jsxs("label",{className:"cursor-pointer",children:[n.jsx("input",{type:"checkbox",name:"areas",value:z,checked:S.includes(z),onChange:()=>V(z),className:"sr-only peer"}),n.jsx("span",{className:"inline-block px-5 py-2 rounded-sm text-sm font-medium bg-white text-[var(--muted)] border border-[var(--line)] hover:border-[var(--line-strong)] peer-checked:bg-[var(--accent)] peer-checked:text-white peer-checked:border-[var(--accent)] transition-all cursor-pointer whitespace-nowrap",children:z})]},z))}),X.areas&&n.jsx("p",{className:"mt-1 text-xs text-red-500",children:X.areas})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-sm font-medium text-[var(--ink-2)] mb-1.5",children:"상세 내용"}),n.jsxs("div",{className:"relative",children:[n.jsx("textarea",{name:"message",rows:8,maxLength:W,value:L,onChange:z=>{Y(z.target.value),m(z.target.value.length)},placeholder:"시공 면적, 현재 상태, 요청 사항 등을 자유롭게 작성해 주세요.",className:"w-full px-4 py-3 border border-[var(--line)] rounded-sm text-base text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors resize-none"}),n.jsxs("span",{className:"absolute bottom-3 right-4 text-xs text-stone-400",children:[p," / ",W]})]})]}),n.jsxs("div",{className:"border-t text-sm text-center text-stone-500 px-4 py-3 border-stone-200",children:["희망 날짜에 시공이 어려울 수 있는 점 양해 부탁드립니다. ",n.jsx("br",{}),n.jsx("span",{className:"font-bold text-red-400",children:"정확한 시공 가능 일정은 상담 후 안내드리며,"})," 최대한 희망에 맞춰 드릴 수 있도록 노력하겠습니다."]}),n.jsxs("div",{children:[n.jsx("div",{ref:je,className:"flex justify-center"}),X.cfToken&&n.jsx("p",{className:"mt-1 text-xs text-red-500 text-center",children:X.cfToken})]}),n.jsxs("div",{className:"flex items-start gap-3",children:[n.jsx("input",{type:"checkbox",id:"privacy",name:"privacy",required:!0,checked:Z,onChange:I,className:"w-5 h-5 mt-0.5 cursor-pointer accent-[var(--accent)]"}),n.jsxs("label",{htmlFor:"privacy",className:"text-sm text-stone-400 leading-relaxed cursor-pointer",children:["수집된 개인정보(이름, 연락처, 시공 위치, 희망 일정, 시공 공간, 상세 내용)는 견적 상담 목적으로만 사용되며, 상담 완료 후 즉시 폐기됩니다."," ",n.jsx(qe,{to:"/privacy",target:"_blank",rel:"noopener noreferrer",onClick:z=>z.stopPropagation(),className:"text-[var(--accent)] font-semibold underline underline-offset-2 hover:opacity-80",children:"개인정보 처리방침"}),"에 동의합니다."]})]}),X.privacy&&n.jsx("p",{className:"-mt-3 text-xs text-red-500",children:X.privacy}),n.jsx("button",{type:"submit",disabled:c||!fe,className:"w-full py-4 bg-[var(--ink)] text-[var(--paper)] font-medium text-base rounded-sm hover:bg-[var(--accent-deep)] transition-all cursor-pointer whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed",children:c?"제출 중...":"견적 신청하기"})]})})]})})}const Re="https://www.detailline.kr",Av="디테일라인",Tv=`${Re}/og_banner.jpg`,ol={"/":{title:"강남·서초·송파 욕실 줄눈시공 전문 디테일라인 | 케라폭시 시공",description:"강남구·서초구·송파구 욕실 줄눈시공 전문업체 디테일라인. 노후 아파트 보수·신축 입주·리모델링 욕실·베란다·현관 케라폭시 줄눈. 대표 직접 시공, 시공 후 2년 무상 A/S. 무료 견적 상담.",keywords:"강남 줄눈, 서초 줄눈, 송파 줄눈, 강남 욕실 줄눈, 서초 욕실 줄눈, 송파 욕실 줄눈, 강남구 줄눈시공, 서초구 줄눈시공, 송파구 줄눈시공, 강남 화장실 줄눈, 강남 베란다 줄눈, 강남 현관 줄눈, 케라폭시, 강남 케라폭시, 노후 아파트 줄눈 보수, 신축 입주 줄눈, 리모델링 줄눈"},"/info/why-grout":{title:"욕실 줄눈 곰팡이·들뜸, 노후 아파트 보수 가이드 | 디테일라인",description:"욕실 줄눈 곰팡이·균열·들뜸 원인과 해결법. 강남구·서초구·송파구 노후 아파트 욕실 줄눈 보수 사례. 신축 입주·리모델링 사전 점검 가이드.",keywords:"욕실 줄눈 곰팡이, 화장실 줄눈 곰팡이, 줄눈 들뜸, 줄눈 균열, 줄눈 보수 시기, 노후 아파트 줄눈, 강남 욕실 곰팡이, 서초 욕실 곰팡이, 송파 욕실 줄눈 보수, 신축 사전점검 줄눈, 리모델링 욕실 줄눈"},"/info/kerafoxy":{title:"케라폭시란? 강남·서초·송파 욕실 줄눈 자재 | 디테일라인",description:"이탈리아산 케라폭시 줄눈재 소개. 강남구·서초구·송파구 노후 아파트 욕실·베란다 시공 다수. 일반 줄눈 대비 곰팡이·변색 방지 10배 이상, KC 인증 친환경.",keywords:"케라폭시, 케라폭시 줄눈, 강남 케라폭시, 서초 케라폭시, 송파 케라폭시, 욕실 케라폭시, 노후 아파트 케라폭시, 에폭시 줄눈, 친환경 줄눈, 마페이 케라폭시"},"/info/kerafoxy-product":{title:"욕실 줄눈 자재 비교 - 케라폭시 6종 색상 가이드 | 디테일라인",description:"케라폭시 클래식·이지디자인·스타라이크·푸가리테 등 자재 비교. 강남·서초·송파 노후 아파트 욕실·베란다·현관별 추천. 색상 가이드 포함.",keywords:"케라폭시 제품, 케라폭시 색상, 스타라이크, 푸가리테, 욕실 줄눈 종류, 강남 케라폭시 색상, 욕실 줄눈재, 노후 아파트 줄눈 자재"},"/info/comparison":{title:"폴리우레아 vs 케라폭시 - 욕실·베란다 줄눈 선택 | 디테일라인",description:"욕실은 케라폭시, 베란다는 폴리우레아 — 강남·서초·송파 노후 아파트 시공 데이터 기반 자재 선택 가이드. 비용·내구성·시공 시간 비교.",keywords:"폴리우레아 케라폭시 차이, 욕실 케라폭시, 베란다 폴리우레아, 줄눈 자재 비교, 강남 줄눈 자재 선택, 노후 아파트 줄눈 자재, 폴리우레아 단점, 케라폭시 단점"},"/info/kerafoxy-price":{title:"강남·서초·송파 욕실 줄눈 가격 - 평수별 시공비 | 디테일라인",description:"강남구·서초구·송파구 노후 아파트 욕실·베란다·현관 줄눈 시공비. 30평·40평 평수별 표준 단가, 신축/구축 분리. 디테일라인 고유 가격, 시공 후 2년 무상 A/S.",keywords:"강남 욕실 줄눈 가격, 서초 줄눈 가격, 송파 줄눈 가격, 강남 화장실 줄눈 가격, 30평 욕실 줄눈, 40평 줄눈 가격, 노후 아파트 줄눈 비용, 케라폭시 가격, 줄눈 견적, 리모델링 줄눈 가격"},"/info/polyurea":{title:"폴리우레아 줄눈 - 베란다·외부 공간 가성비 자재 | 디테일라인",description:"강남·서초·송파 베란다·외부화장실·현관 폴리우레아 줄눈시공. 케라폭시 대비 60~70% 가격, 5년+ 수명. 화장실 시공은 케라폭시만 진행합니다.",keywords:"폴리우레아 줄눈, 폴리우레아 시공, 강남 폴리우레아, 서초 폴리우레아, 송파 폴리우레아, 베란다 폴리우레아, 외부화장실 폴리우레아, 폴리우레아 가격, 폴리우레아 케라폭시 차이, 베란다 줄눈 가성비"},"/privacy":{title:"개인정보처리방침 | 디테일라인",description:"디테일라인 개인정보처리방침",keywords:""}};function Ga(s){const{pathname:u}=Lt();y.useEffect(()=>{const c=ol[u],o=c?.title??Av,p=c?.description??"",m=c?.keywords??"",x=Tv,b=`${Re}${u==="/"?"/":u}`;document.title=o,Wl("description",p),Wl("keywords",m),ei("og:title",o),ei("og:description",p),ei("og:url",b),ei("og:image",x),ei("og:image:secure_url",x),Wl("twitter:title",o),Wl("twitter:description",p),Wl("twitter:image",x),Rv("canonical",b),Wl("robots","index,follow,max-image-preview:large")},[u,s])}function Wl(s,u){let c=document.querySelector(`meta[name="${s}"]`);c||(c=document.createElement("meta"),c.name=s,document.head.appendChild(c)),c.content=u}function ei(s,u){let c=document.querySelector(`meta[property="${s}"]`);c||(c=document.createElement("meta"),c.setAttribute("property",s),document.head.appendChild(c)),c.content=u}function Rv(s,u){let c=document.querySelector(`link[rel="${s}"]`);c||(c=document.createElement("link"),c.rel=s,document.head.appendChild(c)),c.href=u}function Cv(){return Ga(),n.jsxs("div",{className:"min-h-screen bg-white",children:[n.jsx(Ya,{}),n.jsxs("main",{children:[n.jsx(Tb,{}),n.jsx(vv,{}),n.jsx(Gb,{}),n.jsx(Qb,{}),n.jsx(Ib,{}),n.jsx(rv,{}),n.jsx(pv,{}),n.jsx(kv,{}),n.jsx(Ev,{})]}),n.jsx(Ab,{}),n.jsx(qa,{})]})}const nh="/assets/before-DA_T54W5.jpg",ih="/assets/after-Cw81fPXQ.jpg",Mv="/assets/kerafoxy-C29B-TmB.jpg",rh="/assets/bg-zCXDQjbF.webp",sh="/assets/bg_m-D6VSEPhL.webp",Ov=[{k:"소재 분류",v:"에폭시 계열"},{k:"원산지",v:"이탈리아"},{k:"수명",v:"10년+"},{k:"A/S",v:"2년"}],_v=[{k:"압축강도",v:"75 N/mm²"},{k:"수축률",v:"≈ 0% (거의 없음)"},{k:"흡수율",v:"< 0.1 g/cm²"}],Dv=[{idx:"01",title:"강력한 내수성",body:"물에 강한 에폭시 성분으로 화장실·욕실의 지속적인 수분 노출에도 변형 없이 줄눈이 유지됩니다.",k:"흡수율",v:"< 0.1 g/cm²"},{idx:"02",title:"곰팡이·세균 차단",body:"항균 성분이 배합되어 습한 환경에서도 곰팡이와 세균이 번식하지 않아 위생적인 공간을 유지합니다.",k:"항균 등급",v:"JIS Z 2801"},{idx:"03",title:"다양한 색상 선택",body:"화이트·베이지·그레이·블랙 등 20여 가지 색상으로 인테리어 스타일에 맞는 선택이 가능합니다.",k:"컬러 옵션",v:"20+ Colors"},{idx:"04",title:"월등한 내구성",body:"일반 시멘트 줄눈 대비 3~5배 긴 수명을 자랑하며, 균열·탈락 없이 깔끔한 마감이 오래 유지됩니다.",k:"예상 수명",v:"10년+"},{idx:"05",title:"손쉬운 유지관리",body:"표면이 매끄럽고 오염이 잘 스며들지 않아 간단한 청소만으로 항상 깨끗한 상태를 유지할 수 있습니다.",k:"청소",v:"솔 청소 가능"},{idx:"+",title:"대표 직접 시공. 2년 무상 A/S.",body:"소재의 차이만큼이나 중요한 것은 시공자의 손. 디테일라인은 모든 현장을 대표가 직접 마감합니다.",k:"누적",v:"2,000+ 세대",dark:!0}],Uv=[{name:"시멘트 줄눈",tag:"Standard",items:["시공 비용이 가장 저렴","1~2년 후 변색·균열 발생","곰팡이 번식에 취약","주기적 재시공 필요"]},{name:"케라폭시 줄눈",tag:"Detailline 추천",hero:!0,items:["에폭시 결합 — 균열·변색 없음","항균 처리 — 곰팡이 차단","20+ 색상으로 인테리어 매칭","10년+ 수명 · 2년 무상 A/S"]},{name:"폴리우레아",tag:"Heavy-duty",items:["압도적 내구성·하중 강도","주차장·산업 현장에 적합","주거 인테리어엔 과도","색상·질감 선택이 제한적"]}],Bv=[{code:"SP · 01",ko:"화장실 · 욕실",en:"Bath / Powder Room",desc:"가장 많이 사용하는 공간으로, 케라폭시의 내수성과 항균 기능이 극대화됩니다."},{code:"SP · 02",ko:"주방 · 싱크대 주변",en:"Kitchen / Counter",desc:"음식물 오염과 물에 강해 주방 타일 줄눈에 이상적인 소재입니다."},{code:"SP · 03",ko:"베란다 · 발코니",en:"Veranda / Balcony",desc:"자외선과 온도 변화에도 변색이 거의 없어 실외 공간에도 적합합니다."},{code:"SP · 04",ko:"현관 바닥",en:"Entrance Floor",desc:"먼지와 오염이 많은 현관 바닥에서도 변색 없이 깔끔한 마감을 유지합니다."},{code:"SP · 05",ko:"수영장 · 목욕탕",en:"Pool / Sauna",desc:"항시 수분에 노출되는 환경에서도 박리 없이 완벽한 방수 성능을 발휘합니다."}],Hv=[{k:"시공 시간",v:"1일 (평형별 상이)"},{k:"건조 시간",v:"24시간 (완전 경화)"},{k:"사용 가능",v:"48시간 후 (물 사용 OK)"},{k:"A/S",v:"2년 (무상)"}],Lv=[{idx:"No. 02 · Pricing",href:"/info/kerafoxy-price",title:"케라폭시 가격 안내",desc:"시공 비용에 영향을 주는 요인과 평형별 표준 가격을 한눈에."},{idx:"No. 03 · Product",href:"/info/kerafoxy-product",title:"케라폭시 계열 제품 소개",desc:"케라폭시·인터라컬러 등 주요 제품 라인업과 색상 가이드."},{idx:"No. 04 · Compare",href:"/info/comparison",title:"폴리우레아 vs 케라폭시",desc:"두 소재의 차이점과, 어떤 공간에 어떤 소재가 적합한지."},{idx:"No. 05 · Why",href:"/info/why-grout",title:"줄눈시공 하는 이유",desc:"위생·미관·내구성을 위한 필수 시공인 이유를 정리했습니다."}];function Mr({num:s,ko:u,en:c,title:o,lede:p,dark:m}){return n.jsxs("div",{className:`kf-sec-head ${m?"kf-sec-head-dark":""}`,children:[n.jsxs("div",{className:"kf-sec-bar",children:[n.jsx("span",{className:"kf-sec-n",children:s}),n.jsx("span",{className:"kf-sec-rule"}),n.jsxs("span",{className:"kf-sec-lbl",children:[n.jsx("span",{className:"kf-sec-ko",children:u}),n.jsx("span",{className:"kf-sec-en",children:c})]})]}),n.jsxs("div",{className:"kf-sec-body",children:[n.jsx("h2",{className:"kf-sec-title",children:o}),n.jsx("p",{className:"kf-sec-lede",children:p})]})]})}function Yv(){const s=ma();Ga(),y.useEffect(()=>{const c="/info/kerafoxy",o=ol[c],p=`${Re}${c}`,m=Nt("article-jsonld",Il({title:o.title,description:o.description,url:p,image:`${Re}/og_banner.jpg`,datePublished:"2026-03-01",dateModified:"2026-05-29"})),x=Nt("breadcrumb-jsonld",en([{name:"홈",url:Re},{name:"줄눈 정보",url:`${Re}/#info`},{name:"케라폭시 줄눈이란?",url:p}]));return()=>{m(),x()}},[]),y.useEffect(()=>{window.scrollTo(0,0)},[]);const u=()=>{s("/#calc"),setTimeout(()=>{const c=document.querySelector("#calc");c&&c.scrollIntoView({behavior:"smooth"})},300)};return n.jsxs("div",{className:"kf-page",children:[n.jsx(Ya,{}),n.jsxs("header",{className:"kf-hero","data-screen-label":"01 Hero",children:[n.jsx("div",{className:"kf-hero-bg",style:{"--hero-img-d":`url(${rh})`,"--hero-img-m":`url(${sh})`},"aria-hidden":"true"}),n.jsxs("div",{className:"kf-container kf-hero-inner",children:[n.jsx("div",{className:"kf-eyebrow kf-eyebrow-light",children:"Grout Knowledge · 01"}),n.jsxs("h1",{className:"kf-hero-title",children:["케라폭시 줄눈,",n.jsx("br",{}),"한 줄의 깊이 ",n.jsx("em",{children:"완벽"}),"의 기준."]}),n.jsxs("p",{className:"kf-hero-lede",children:["마페이의 80년 경험치를 흡수한 2액형 고성능 줄눈 소재.",n.jsx("br",{}),"일반 시멘트 줄눈과 무엇이 다른지, 왜 프리미엄 공간에 선택되는지 정리했습니다."]}),n.jsx("ul",{className:"kf-hero-meta",children:Ov.map(c=>n.jsxs("li",{children:[n.jsx("span",{className:"kf-meta-k",children:c.k}),n.jsx("span",{className:"kf-meta-v",children:c.v})]},c.k))})]})]}),n.jsx("nav",{className:"kf-crumb","aria-label":"현재 위치",children:n.jsxs("div",{className:"kf-container kf-crumb-inner",children:[n.jsx(qe,{to:"/",className:"kf-crumb-item",children:"홈"}),n.jsx("span",{className:"kf-crumb-sep",children:"/"}),n.jsx("span",{className:"kf-crumb-item",children:"줄눈 정보"}),n.jsx("span",{className:"kf-crumb-sep",children:"/"}),n.jsx("span",{className:"kf-crumb-here",children:"케라폭시 줄눈이란?"})]})}),n.jsx("section",{className:"kf-section","data-screen-label":"02 Introduction",children:n.jsx("div",{className:"kf-container",children:n.jsxs("div",{className:"kf-intro",children:[n.jsxs("div",{className:"kf-intro-left",children:[n.jsx("div",{className:"kf-eyebrow",children:"Introduction · 들어가며"}),n.jsxs("h2",{className:"kf-intro-title",children:["케라폭시 줄눈,",n.jsx("br",{}),"왜 ",n.jsx("em",{children:"프리미엄 소재"}),"인가요?"]}),n.jsxs("p",{className:"kf-intro-body",children:[n.jsx("em",{className:"kf-hl",children:"케라폭시(Kerafoxy)는 에폭시 수지와 경화제를 혼합한 2액형 고성능 줄눈 소재"}),"입니다. 시멘트 줄눈이 물과 함께 굳는 방식과 달리, 화학적 결합으로 경화되어 본질적으로 다른 강도와 방수성을 만들어냅니다."]}),n.jsx("p",{className:"kf-intro-body",children:"이탈리아 건설 소재 전문 브랜드가 개발한 케라폭시는 국내외 수많은 고급 주택·호텔·상업 공간에서 사용되며 줄눈 소재로서의 우수성이 검증되어 있습니다."}),n.jsx("p",{className:"kf-intro-body",children:"특히 곰팡이가 쉽게 번식하는 욕실·주방 환경에서, 케라폭시는 일반 시멘트 줄눈 대비 압도적인 위생 유지 효과를 보여줍니다."}),n.jsx("ul",{className:"kf-intro-stats",children:_v.map(c=>n.jsxs("li",{children:[n.jsx("span",{className:"kf-stat-k",children:c.k}),n.jsx("span",{className:"kf-stat-v",children:c.v})]},c.k))})]}),n.jsx("div",{className:"kf-intro-right",children:n.jsx("div",{className:"kf-intro-photo",children:n.jsx("img",{src:Mv,alt:"케라폭시 줄눈 시공 디테일",loading:"lazy"})})})]})})}),n.jsx("section",{className:"kf-section kf-bg-paper","data-screen-label":"03 Benefits",children:n.jsxs("div",{className:"kf-container",children:[n.jsx(Mr,{num:"02",ko:"5가지 핵심 장점",en:"Benefits",title:n.jsxs(n.Fragment,{children:["일반 시멘트 줄눈과 비교할 수 없는 ",n.jsx("em",{children:"성능 차이"}),"."]}),lede:"물·세균·시간이라는 줄눈의 세 가지 적에 대해, 케라폭시가 어떻게 대응하는지 정리했습니다."}),n.jsx("div",{className:"kf-benefits-grid",children:Dv.map(c=>n.jsxs("article",{className:`kf-benefit ${c.dark?"kf-benefit-dark":""}`,children:[n.jsxs("div",{className:"kf-benefit-head",children:[n.jsxs("span",{className:"kf-benefit-lbl",children:["Benefit / ",c.idx]}),n.jsx("span",{className:"kf-benefit-idx",children:c.idx})]}),n.jsx("h3",{className:"kf-benefit-title",children:c.title.split(`
`).map((o,p)=>n.jsx("span",{className:"kf-benefit-title-line",children:o},p))}),n.jsx("p",{className:"kf-benefit-body",children:c.body}),n.jsxs("div",{className:"kf-benefit-spec",children:[n.jsx("span",{className:"kf-spec-k",children:c.k}),n.jsx("span",{className:"kf-spec-v",children:c.v})]})]},c.idx))}),n.jsx("div",{className:"kf-compare",children:Uv.map(c=>n.jsxs("div",{className:`kf-compare-col ${c.hero?"kf-is-hero":""}`,children:[n.jsxs("div",{className:"kf-compare-head",children:[n.jsx("h3",{className:"kf-compare-name",children:c.name}),n.jsx("span",{className:"kf-compare-tag",children:c.tag})]}),n.jsx("ul",{className:"kf-compare-list",children:c.items.map(o=>n.jsx("li",{children:o},o))})]},c.name))})]})}),n.jsx("section",{className:"kf-section","data-screen-label":"04 Spaces",children:n.jsxs("div",{className:"kf-container",children:[n.jsx(Mr,{num:"03",ko:"적합한 공간",en:"Spaces",title:n.jsxs(n.Fragment,{children:["어떤 공간에 케라폭시를 ",n.jsx("em",{children:"시공"}),"해야 할까요?"]}),lede:"물과 오염이 가까운 곳, 미관과 위생을 동시에 잡아야 하는 곳에 케라폭시가 강합니다."}),n.jsx("ul",{className:"kf-spaces",children:Bv.map(c=>n.jsxs("li",{className:"kf-space-row",children:[n.jsx("span",{className:"kf-space-code",children:c.code}),n.jsxs("span",{className:"kf-space-lbl",children:[n.jsx("span",{className:"kf-space-ko",children:c.ko}),n.jsx("span",{className:"kf-space-en",children:c.en})]}),n.jsx("span",{className:"kf-space-desc",children:c.desc}),n.jsxs("span",{className:"kf-space-more",children:["자세히 ",n.jsx("span",{className:"kf-space-arr",children:"→"})]})]},c.code))})]})}),n.jsx("section",{className:"kf-section-dark","data-screen-label":"05 Before · After",children:n.jsxs("div",{className:"kf-container",children:[n.jsx(Mr,{dark:!0,num:"04",ko:"시공 전 · 후 비교",en:"Before · After",title:n.jsxs(n.Fragment,{children:["한 번의 시공으로, 줄눈이 ",n.jsx("em",{children:"인테리어의 점"}),"이 됩니다."]}),lede:"실제 시공 현장에서 발견되는 변화를 정리했습니다. 같은 공간, 다른 마감."}),n.jsxs("div",{className:"kf-ba-grid",children:[n.jsxs("figure",{className:"kf-ba-item",children:[n.jsxs("div",{className:"kf-ba-photo",children:[n.jsx("img",{src:nh,alt:"시공 전 — 시멘트 줄눈 상태",loading:"lazy"}),n.jsx("span",{className:"kf-ba-pill kf-ba-pill-light",children:"Before"})]}),n.jsxs("figcaption",{className:"kf-ba-cap",children:[n.jsx("h4",{className:"kf-ba-cap-title",children:"변색·균열·곰팡이 발생, 청소 어려움"}),n.jsx("p",{className:"kf-ba-cap-body",children:"시간이 지나며 흡수된 수분과 오염으로 줄눈이 어둡게 변하고, 모서리 부근부터 균열이 나타납니다."})]})]}),n.jsxs("figure",{className:"kf-ba-item",children:[n.jsxs("div",{className:"kf-ba-photo",children:[n.jsx("img",{src:ih,alt:"시공 후 — 케라폭시 줄눈 마감",loading:"lazy"}),n.jsx("span",{className:"kf-ba-pill kf-ba-pill-accent",children:"After"})]}),n.jsxs("figcaption",{className:"kf-ba-cap",children:[n.jsx("h4",{className:"kf-ba-cap-title",children:"매끄럽고 균일한 마감, 위생적인 깨끗함"}),n.jsx("p",{className:"kf-ba-cap-body",children:"균일한 두께·색상으로 타일 사이의 선이 이어지며, 청소 한 번으로 새것처럼 유지됩니다."})]})]})]}),n.jsx("ul",{className:"kf-ba-bottom",children:Hv.map(c=>n.jsxs("li",{children:[n.jsx("span",{className:"kf-ba-bot-k",children:c.k}),n.jsx("span",{className:"kf-ba-bot-v",children:c.v})]},c.k))})]})}),n.jsx("section",{className:"kf-section kf-bg-paper","data-screen-label":"06 Related",children:n.jsxs("div",{className:"kf-container",children:[n.jsx(Mr,{num:"05",ko:"관련 정보 더 보기",en:"Related",title:n.jsxs(n.Fragment,{children:["줄눈에 대해 알아야 할, 다른 ",n.jsx("em",{children:"네 가지"}),"."]}),lede:"가격 · 제품 · 비교 · 시공 — 네 가지 관점으로 줄눈을 더 깊이 살펴보세요."}),n.jsx("div",{className:"kf-related-grid",children:Lv.map(c=>n.jsxs(qe,{to:c.href,className:"kf-related-card",children:[n.jsx("span",{className:"kf-related-idx",children:c.idx}),n.jsx("h4",{className:"kf-related-title",children:c.title}),n.jsx("p",{className:"kf-related-desc",children:c.desc}),n.jsxs("span",{className:"kf-related-more",children:["more ",n.jsx("span",{className:"kf-related-arr",children:"→"})]})]},c.href))})]})}),n.jsx("section",{className:"kf-cta-band","data-screen-label":"CTA Band",children:n.jsxs("div",{className:"kf-container kf-cta-row",children:[n.jsxs("div",{className:"kf-cta-text",children:[n.jsxs("h3",{className:"kf-cta-title",children:["우리 집 줄눈에 맞는 답이 궁금하다면, ",n.jsx("em",{children:"무료 견적"}),"으로 시작하세요."]}),n.jsx("p",{className:"kf-cta-sub",children:"평형 · 공간 · 색상을 알려주시면 24시간 내에 회신드립니다. 강남구·서초구·송파구 욕실·베란다·현관 줄눈 무료 견적."})]}),n.jsxs("div",{className:"kf-cta-actions",children:[n.jsxs("button",{type:"button",className:"kf-btn kf-btn-primary",onClick:u,children:["무료 견적 받기 ",n.jsx("span",{className:"kf-btn-arr",children:"→"})]}),n.jsx("a",{href:"tel:010-8005-6674",onClick:()=>it.phoneClick("info_cta"),className:"kf-btn kf-btn-ghost",children:"전화 상담 010-8005-6674"})]})]})}),n.jsx(qa,{}),n.jsx("style",{children:qv})]})}const qv=`
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
`,Gv="/assets/bg-CP9CkGLZ.webp",Vv="/assets/bg_m-DjojSNnF.webp",Qv=[{k:"기준 연도",v:"2026",small:"VAT 별도"},{k:"단위",v:"만원",small:"1ea / 1줄"},{k:"A/S",v:"2년",small:"무상"},{k:"결제",v:"현금 / 카드",small:"분할 OK"}],Kv=[{label:"화장실",group:"bath",rows:[{scope:"욕조형 · 바닥만",new:[40,30],old:[30,25]},{scope:"욕조형 · 전체 (바닥+벽)",new:[90,65],old:[75,55]},{scope:"샤워부스형 · 바닥만",new:[45,35],old:[38,30]},{scope:"샤워부스형 · 전체 (바닥+벽)",new:[95,70],old:[80,60]}]},{label:"거실",group:"living",rows:[{scope:"바닥 · 20평대",new:[150,100],old:[130,90]},{scope:"바닥 · 30평대+",new:[null,null],old:[null,null],note:"별도 협의"}]},{label:"현관",group:"etc",rows:[{scope:"바닥",new:[15,5],old:[12,4]}]},{label:"베란다",group:"etc",rows:[{scope:"바닥",new:[20,15],old:[18,13]}]},{label:"외부 화장실",group:"etc",rows:[{scope:"바닥",new:[30,25],old:[28,23]}]}],Zv=[{num:"01",name:"세트 1",sub:"· 기본",desc:"화장실 바닥 ×2 + 현관",newPrice:100,oldPrice:120,services:[],emptyLabel:"기본 시공 패키지"},{num:"02",name:"세트 2",sub:"· 표준",desc:"세트 1 + 양조벽 or 샤워벽 3면 ×1곳",newPrice:135,oldPrice:155,services:[{text:"젠 다이 실리콘 ×2"},{text:"세면대 실리콘 ×2"}]},{num:"03",name:"세트 3",sub:"· 완성",desc:"화장실 바닥 ×2 + 전체벽 ×2 + 현관",newPrice:240,oldPrice:260,services:[{text:"젠 다이 실리콘 ×2"},{text:"세면대 실리콘 ×2"},{text:"싱크볼 실리콘"},{text:"주방벽 케라폭시"}]},{num:"04",name:"세트 4",sub:"· 확장",desc:"세트 2 + 세탁실",newPrice:150,oldPrice:170,services:[{text:"젠 다이 실리콘 ×2"},{text:"세면대 실리콘 ×2"},{text:"주방 실리콘"},{text:"싱크볼 실리콘"}]}],Xv=[{n:"01",name:"시공 면적",en:"Area / Size",desc:"면적이 넓을수록 평단가가 내려가며, 협소한 공간은 작업 난이도로 인해 단가가 높아질 수 있습니다.",impact:"평단가 ↘",impactClass:"down"},{n:"02",name:"타일 크기 · 줄눈 간격",en:"Tile Size",desc:"타일이 작을수록 줄눈 길이가 길어져 작업 시간과 자재비가 증가합니다.",impact:"자재·시간 ↗",impactClass:"up"},{n:"03",name:"기존 줄눈 상태",en:"Existing Grout",desc:"기존 줄눈 제거가 필요한 경우 추가 작업비가 발생하며, 손상이 심할수록 비용이 올라갑니다.",impact:"+10만원~",impactClass:"up"},{n:"04",name:"색상 선택",en:"Color",desc:"특수 색상이나 다색 시공의 경우 단가가 다를 수 있으며, 컬러 매칭 작업이 추가됩니다.",impact:"옵션 변동",impactClass:"var"},{n:"05",name:"지역 · 접근성",en:"Location",desc:"지방이나 접근이 어려운 고층 건물의 경우 추가 출장비가 반영될 수 있습니다.",impact:"출장비 가산",impactClass:"up"}],Jv=[{idx:"No. 01 · Intro",href:"/info/kerafoxy",title:"케라폭시 줄눈이란?",desc:"에폭시 줄눈 소재의 특징과 장점을 정리했습니다."},{idx:"No. 03 · Product",href:"/info/kerafoxy-product",title:"케라폭시 계열 제품 소개",desc:"주요 제품 라인업과 색상 가이드."},{idx:"No. 04 · Compare",href:"/info/comparison",title:"폴리우레아 vs 케라폭시",desc:"두 소재의 차이점과 적합한 공간 정리."},{idx:"No. 05 · Why",href:"/info/why-grout",title:"줄눈시공 하는 이유",desc:"위생·미관·내구성을 위한 필수 시공."}];function Or({num:s,ko:u,en:c,title:o,lede:p}){return n.jsxs("div",{className:"kp-sec-head",children:[n.jsxs("div",{className:"kp-sec-bar",children:[n.jsx("span",{className:"kp-sec-n",children:s}),n.jsx("span",{className:"kp-sec-rule"}),n.jsxs("span",{className:"kp-sec-lbl",children:[n.jsx("span",{className:"kp-sec-ko",children:u}),n.jsx("span",{className:"kp-sec-en",children:c})]})]}),n.jsxs("div",{className:"kp-sec-body",children:[n.jsx("h2",{className:"kp-sec-title",children:o}),p&&n.jsx("p",{className:"kp-sec-lede",children:p})]})]})}function Wv(){const s=ma(),[u,c]=y.useState("all"),[o,p]=y.useState("new");Ga(),y.useEffect(()=>{const b="/info/kerafoxy-price",g=ol[b],h=`${Re}${b}`,E=Nt("article-jsonld",Il({title:g.title,description:g.description,url:h,image:`${Re}/og_banner.jpg`,datePublished:"2026-03-01",dateModified:"2026-05-29"})),N=Nt("breadcrumb-jsonld",en([{name:"홈",url:Re},{name:"줄눈 정보",url:`${Re}/#info`},{name:"케라폭시 가격 안내",url:h}]));return()=>{E(),N()}},[]),y.useEffect(()=>{window.scrollTo(0,0)},[]);const m=()=>{s("/#calc"),setTimeout(()=>{const b=document.querySelector("#calc");b&&b.scrollIntoView({behavior:"smooth"})},300)},x=y.useMemo(()=>Kv.filter(b=>u==="all"||u===b.group),[u]);return n.jsxs("div",{className:"kp-page",children:[n.jsx(Ya,{}),n.jsxs("header",{className:"kp-hero","data-screen-label":"Hero",children:[n.jsx("div",{className:"kp-hero-bg",style:{"--hero-img-d":`url(${Gv})`,"--hero-img-m":`url(${Vv})`},"aria-hidden":"true"}),n.jsxs("div",{className:"kp-container kp-hero-inner",children:[n.jsx("div",{className:"kp-eyebrow kp-eyebrow-light",children:"Grout Knowledge · 02"}),n.jsxs("h1",{className:"kp-hero-title",children:["케라폭시 가격",n.jsx("em",{children:","}),n.jsx("br",{}),"한 줄까지 ",n.jsx("em",{children:"투명하게"}),"."]}),n.jsxs("p",{className:"kp-hero-lede",children:["2026년 디테일라인 표준 가격표.",n.jsx("br",{}),"공간 · 평형 · 시공 범위에 따른 단가를 그대로 공개합니다."]}),n.jsx("ul",{className:"kp-hero-meta",children:Qv.map(b=>n.jsxs("li",{children:[n.jsx("span",{className:"kp-meta-k",children:b.k}),n.jsxs("span",{className:"kp-meta-v",children:[b.v," ",n.jsx("small",{children:b.small})]})]},b.k))})]})]}),n.jsx("nav",{className:"kp-crumb","aria-label":"현재 위치",children:n.jsxs("div",{className:"kp-container kp-crumb-inner",children:[n.jsx(qe,{to:"/",className:"kp-crumb-item",children:"홈"}),n.jsx("span",{className:"kp-crumb-sep",children:"/"}),n.jsx("span",{className:"kp-crumb-item",children:"줄눈 정보"}),n.jsx("span",{className:"kp-crumb-sep",children:"/"}),n.jsx("span",{className:"kp-crumb-here",children:"케라폭시 가격 안내"})]})}),n.jsx("section",{className:"kp-section","data-screen-label":"01 Pricing Table",children:n.jsxs("div",{className:"kp-container",children:[n.jsx(Or,{num:"01",ko:"2026 가격 테이블",en:"Pricing Table",title:n.jsxs(n.Fragment,{children:["공간별 시공 단가,",n.jsx("br",{}),n.jsx("em",{children:"그대로 공개"}),"합니다."]}),lede:"케라폭시·폴리우레아 두 소재의 표준 단가입니다. 현장 상황에 따라 ±10% 조정될 수 있습니다."}),n.jsxs("div",{className:"kp-pt-controls",children:[n.jsx("div",{className:"kp-chips",role:"tablist","aria-label":"공간 필터",children:["all","bath","living","etc"].map(b=>n.jsx("button",{type:"button",className:`kp-chip ${u===b?"on":""}`,onClick:()=>c(b),role:"tab","aria-selected":u===b,children:b==="all"?"전체":b==="bath"?"화장실":b==="living"?"거실":"현관·기타"},b))}),n.jsx("div",{className:"kp-toggle",role:"tablist","aria-label":"건물 유형",children:["new","old"].map(b=>n.jsx("button",{type:"button",className:o===b?"on":"",onClick:()=>p(b),role:"tab","aria-selected":o===b,children:b==="new"?"신축":"구축"},b))})]}),n.jsx("div",{className:"kp-ptable-wrap",children:n.jsxs("table",{className:"kp-ptable",children:[n.jsx("caption",{className:"sr-only",children:"2026년 공간별 표준 단가 (만원, VAT 별도)"}),n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{style:{width:"160px"},children:"공간"}),n.jsx("th",{children:"범위"}),n.jsx("th",{className:"right",style:{width:"200px"},children:"케라폭시"}),n.jsx("th",{className:"right",style:{width:"200px"},children:"폴리우레아"})]})}),n.jsx("tbody",{children:x.flatMap(b=>b.rows.map((g,h)=>{const[E,N]=o==="new"?g.new:g.old;return n.jsxs("tr",{children:[n.jsx("td",{className:"kp-cell-space",children:h===0?b.label:""}),n.jsx("td",{className:"kp-cell-scope",children:g.scope}),n.jsx("td",{className:"right",children:g.note?n.jsx("span",{className:"kp-price note",children:g.note}):n.jsxs("span",{className:"kp-price kp",children:[E,n.jsx("small",{children:"만원"})]})}),n.jsx("td",{className:"right",children:g.note?n.jsx("span",{className:"kp-price note",children:g.note}):n.jsxs("span",{className:"kp-price",children:[N,n.jsx("small",{children:"만원"})]})})]},`${b.label}-${g.scope}`)}))})]})}),n.jsx("ul",{className:"kp-pcards","aria-label":"공간별 가격 카드",children:x.flatMap(b=>b.rows.map(g=>{const[h,E]=o==="new"?g.new:g.old;return n.jsxs("li",{className:"kp-pcard",children:[n.jsxs("div",{className:"kp-pcard-info",children:[n.jsx("span",{className:"kp-pcard-space",children:b.label}),n.jsx("span",{className:"kp-pcard-scope",children:g.scope})]}),n.jsxs("div",{className:"kp-pcard-prices",children:[n.jsxs("div",{className:"kp-pcard-pr",children:[n.jsx("span",{className:"kp-pcard-pr-lbl",children:"케라폭시"}),g.note?n.jsx("span",{className:"kp-pcard-pr-note",children:g.note}):n.jsxs("span",{className:"kp-pcard-pr-val kp",children:[h,n.jsx("small",{children:"만원"})]})]}),n.jsxs("div",{className:"kp-pcard-pr",children:[n.jsx("span",{className:"kp-pcard-pr-lbl",children:"폴리우레아"}),g.note?n.jsx("span",{className:"kp-pcard-pr-note",children:g.note}):n.jsxs("span",{className:"kp-pcard-pr-val",children:[E,n.jsx("small",{children:"만원"})]})]})]})]},`m-${b.label}-${g.scope}`)}))}),n.jsxs("div",{className:"kp-pt-foot",children:[n.jsx("div",{children:"* 모든 가격은 VAT 별도 · 자재비·인건비·출장비 포함 · 2년 무상 A/S (에폭시 계열)"}),n.jsx("div",{children:"* 평형 30평 초과 또는 특수 상황은 별도 협의"})]})]})}),n.jsx("section",{className:"kp-section kp-bg-paper","data-screen-label":"02 Set Packages",children:n.jsxs("div",{className:"kp-container",children:[n.jsx(Or,{num:"02",ko:"세트 할인 패키지",en:"Set Packages",title:n.jsxs(n.Fragment,{children:["4가지 패키지로,",n.jsx("br",{}),"한 번에 ",n.jsx("em",{children:"합리적으로"}),"."]}),lede:"화장실·현관·벽 등 주요 공간을 묶어 시공하면 실리콘·주방벽 등 추가 서비스가 함께 제공됩니다. VAT 포함 · 34평 이하 · 300개 타일 기준."}),n.jsx("div",{className:"kp-sets",children:Zv.map(b=>n.jsxs("div",{className:"kp-set-card",children:[n.jsxs("div",{className:"kp-set-badge",children:["— SET ",b.num]}),n.jsxs("div",{className:"kp-set-title",children:[n.jsx("h3",{className:"kp-set-name",children:b.name}),n.jsx("span",{className:"kp-set-sub",children:b.sub})]}),n.jsx("p",{className:"kp-set-desc",children:b.desc}),n.jsxs("div",{className:"kp-set-prices",children:[n.jsxs("div",{className:"kp-set-pr",children:[n.jsx("span",{className:"kp-set-pr-lbl",children:"신축"}),n.jsx("span",{className:"kp-set-pr-val",children:b.newPrice}),n.jsx("span",{className:"kp-set-pr-unit",children:"만원"})]}),n.jsxs("div",{className:"kp-set-pr",children:[n.jsx("span",{className:"kp-set-pr-lbl",children:"구축"}),n.jsx("span",{className:"kp-set-pr-val",children:b.oldPrice}),n.jsx("span",{className:"kp-set-pr-unit",children:"만원"})]})]}),b.services.length>0?n.jsxs("div",{className:"kp-set-services",children:[n.jsx("div",{className:"kp-set-s-lbl",children:"+ 함께 제공"}),n.jsx("ul",{children:b.services.map(g=>n.jsx("li",{children:g.text},g.text))})]}):n.jsx("div",{className:"kp-set-services-empty",children:b.emptyLabel})]},b.num))}),n.jsxs("p",{className:"kp-set-foot",children:["※ 가격은 ",n.jsx("b",{children:"VAT 포함 · 34평 이하 · 300개 타일"})," 기준. 세트 외 추가 옵션은 상담 후 별도 산정됩니다.",n.jsx("br",{}),"※ 세트 실리콘은 기존 실리콘 양호 기준이며, 제거 후 재시공 시 추가 비용이 발생합니다. 기존 줄눈 시공 이력이 있는 경우 ",n.jsx("b",{children:"공간당 +10만원"}),"이 추가됩니다."]})]})}),n.jsx("section",{className:"kp-section","data-screen-label":"03 Cost Factors",children:n.jsxs("div",{className:"kp-container",children:[n.jsx(Or,{num:"03",ko:"시공 가격에 영향을 주는 요인",en:"Cost Factors",title:n.jsxs(n.Fragment,{children:["같은 평형이라도,",n.jsx("br",{}),"견적이 ",n.jsx("em",{children:"달라지는 이유"}),"."]}),lede:"현장의 디테일이 가격을 만듭니다. 자주 영향을 주는 다섯 가지 요인입니다."}),n.jsx("ul",{className:"kp-factors",children:Xv.map(b=>n.jsxs("li",{className:"kp-f-row",children:[n.jsx("span",{className:"kp-f-n",children:b.n}),n.jsxs("span",{className:"kp-f-name",children:[b.name,n.jsx("small",{children:b.en})]}),n.jsx("span",{className:"kp-f-desc",children:b.desc}),n.jsx("span",{className:`kp-f-impact kp-f-impact--${b.impactClass}`,children:b.impact})]},b.n))})]})}),n.jsx("section",{className:"kp-section kp-bg-paper","data-screen-label":"04 Related",children:n.jsxs("div",{className:"kp-container",children:[n.jsx(Or,{num:"04",ko:"관련 정보 더 보기",en:"Related",title:n.jsxs(n.Fragment,{children:["줄눈에 대해 알아야 할, 다른 ",n.jsx("em",{children:"네 가지"}),"."]}),lede:"가격 · 제품 · 비교 · 시공 — 네 가지 관점으로 줄눈을 더 깊이 살펴보세요."}),n.jsx("div",{className:"kp-related-grid",children:Jv.map(b=>n.jsxs(qe,{to:b.href,className:"kp-related-card",children:[n.jsx("span",{className:"kp-related-idx",children:b.idx}),n.jsx("h4",{className:"kp-related-title",children:b.title}),n.jsx("p",{className:"kp-related-desc",children:b.desc}),n.jsxs("span",{className:"kp-related-more",children:["more ",n.jsx("span",{className:"kp-related-arr",children:"→"})]})]},b.href))})]})}),n.jsx("section",{className:"kp-cta-band","data-screen-label":"CTA Band",children:n.jsxs("div",{className:"kp-container kp-cta-row",children:[n.jsxs("div",{className:"kp-cta-text",children:[n.jsxs("h3",{className:"kp-cta-title",children:["정확한 시공 비용이 ",n.jsx("em",{children:"궁금하신가요?"})]}),n.jsx("p",{className:"kp-cta-sub",children:"현장 상황에 따라 가격이 달라질 수 있습니다. 공간별 맞춤 견적을 안내해 드립니다. 강남구·서초구·송파구 욕실·베란다·현관 줄눈 무료 견적."})]}),n.jsxs("div",{className:"kp-cta-actions",children:[n.jsxs("button",{type:"button",className:"kp-btn kp-btn-primary",onClick:m,children:["무료 견적 받기 ",n.jsx("span",{className:"kp-btn-arr",children:"→"})]}),n.jsx("a",{href:"tel:010-8005-6674",onClick:()=>it.phoneClick("info_cta"),className:"kp-btn kp-btn-ghost",children:"전화 상담 010-8005-6674"})]})]})}),n.jsx(qa,{}),n.jsx("style",{children:$v})]})}const $v=`
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
`,Fv="/assets/kerafoxy-DrWysCxm.jpg",Pv="/assets/strikeevo-CoKoyCPo.jpg",Iv="/assets/aspactone-CtALWUuf.jpg",ch="/assets/Polyurea-DMhrJjtC.jpg",e1="/assets/bg-LU8nN9ip.webp",t1="/assets/bg_m-BSEgDA_R.webp",a1=[{k:"라인업",v:"4종",small:"에폭시 계열"},{k:"컬러",v:"20+",small:"표준 색상"},{k:"친환경",v:"EC1+",small:"GEV 인증"},{k:"A/S",v:"2년",small:"무상"}],_r=[{id:"pure",name:"순백",hex:"#f1ede4",group:"white",tagEn:"WHITE",light:!0},{id:"ivory",name:"아이보리",hex:"#e6dccb",group:"white",tagEn:"WHITE",light:!0},{id:"beige",name:"베이지",hex:"#d9c8a2",group:"earth",tagEn:"EARTH",light:!0},{id:"sand",name:"샌드",hex:"#bfa478",group:"earth",tagEn:"EARTH",light:!1},{id:"khaki",name:"카키",hex:"#8a7d5e",group:"earth",tagEn:"EARTH",light:!1},{id:"brown",name:"브라운",hex:"#6f4a2a",group:"earth",tagEn:"EARTH",light:!1},{id:"silver",name:"실버그레이",hex:"#c4c0bc",group:"gray",tagEn:"GRAY",light:!0},{id:"lightgray",name:"라이트그레이",hex:"#a8a59f",group:"gray",tagEn:"GRAY",light:!1},{id:"mediumgray",name:"미디엄그레이",hex:"#7a766f",group:"gray",tagEn:"GRAY",light:!1},{id:"darkgray",name:"다크그레이",hex:"#4a4842",group:"dark",tagEn:"DARK",light:!1},{id:"charcoal",name:"차콜",hex:"#2a2825",group:"dark",tagEn:"DARK",light:!1},{id:"black",name:"블랙",hex:"#16140f",group:"dark",tagEn:"DARK",light:!1}],ti={all:"전체",white:"화이트 계열",earth:"베이지·어스 계열",gray:"그레이 계열",dark:"다크 계열"},Ao={white:"타일과 통일감을 주어 깔끔하고 넓어 보이는 효과를 만듭니다. 오염은 비교적 잘 보이는 편이므로 청소 빈도가 높은 공간에 적합합니다.",earth:"원목·가구·내추럴 인테리어와 잘 어우러집니다. 오염 자국이 눈에 잘 띄지 않아 관리가 편합니다.",gray:"오염이 덜 보이고 유지관리가 편하며, 모던하고 차분한 분위기를 만듭니다. 대부분의 타일과 무난하게 어울립니다.",dark:"타일과 강한 대비를 만들어 그래픽한 인테리어 포인트가 됩니다. 좁은 공간에서는 답답하게 보일 수 있어 주의가 필요합니다."},Dr={white:{label:"화이트",hex:"#ece6dc"},gray:{label:"그레이",hex:"#b5b1a8"},dark:{label:"다크",hex:"#3a3530"}},Em=[{id:"kerafoxy",name:"케라폭시",badge:{label:"프리미엄",variant:"premium"},desc:"에폭시 수지+경화제 2액형의 대표 프리미엄 줄눈재. 화장실·욕실·주방 등 물 접촉 공간에서 가장 안정적인 성능을 보입니다.",specs:[{k:"베이스",v:"에폭시 + 경화제 2액형"},{k:"경화 시간",v:"24 ~ 48시간"},{k:"표면",v:"고광택"},{k:"추천 공간",v:"화장실 · 욕실 · 주방"},{k:"컬러",v:"20+ 색상"},{k:"수명",v:"10년+"}],image:Fv},{id:"strikeevo",name:"스트라이크 에보",badge:{label:"프리미엄",variant:"premium"},desc:"3세대 에폭시 줄눈재로 무광·유광 선택이 가능하며, 균일한 컬러와 변색 저항성이 뛰어납니다. 프리미엄 인테리어에 자주 채택됩니다.",specs:[{k:"베이스",v:"에폭시 (이탈리아산)"},{k:"경화 시간",v:"24 ~ 72시간"},{k:"표면",v:"무광 / 유광 선택"},{k:"추천 공간",v:"화장실 · 주방 · 디자인 강조"},{k:"컬러",v:"30+ 색상"},{k:"수명",v:"10년+"}],image:Pv},{id:"aspactone",name:"아스팍톤",badge:{label:"개선형",variant:"premium"},desc:"무광·무펄·무수축·무황변을 구현한 신소재 에폭시. 기존 무광 에폭시의 단점을 보완해 어린이방·욕실에 추천됩니다.",specs:[{k:"베이스",v:"에폭시 개선형"},{k:"경화 시간",v:"24 ~ 36시간"},{k:"표면",v:"균일 무광"},{k:"추천 공간",v:"패턴 타일 · 디자인 욕실"},{k:"컬러",v:"25+ 색상"},{k:"수명",v:"10년+"}],image:Iv},{id:"polyurea",name:"폴리우레아",badge:{label:"하이브리드",variant:"hybrid"},desc:"시멘트 + 에폭시 하이브리드 줄눈재. 매트한 질감으로 내추럴 인테리어에 잘 맞고, 가격대가 합리적이라 비수계 공간에 추천됩니다.",specs:[{k:"베이스",v:"시멘트 + 에폭시"},{k:"경화 시간",v:"48 ~ 96시간"},{k:"표면",v:"매트"},{k:"추천 공간",v:"현관 · 베란다 · 거실 일부"},{k:"컬러",v:"16+ 색상"},{k:"수명",v:"5년+"}],image:ch}],l1=[{idx:"No. 01 · Intro",href:"/info/kerafoxy",title:"케라폭시 줄눈이란?",desc:"에폭시 줄눈 소재의 특징과 장점을 정리했습니다."},{idx:"No. 02 · Pricing",href:"/info/kerafoxy-price",title:"케라폭시 가격 안내",desc:"시공 비용에 영향을 주는 요인과 표준 가격."},{idx:"No. 04 · Compare",href:"/info/comparison",title:"폴리우레아 vs 케라폭시",desc:"두 소재의 차이점과 적합한 공간 정리."},{idx:"No. 05 · Why",href:"/info/why-grout",title:"줄눈시공 하는 이유",desc:"위생·미관·내구성을 위한 필수 시공."}];function To({num:s,ko:u,en:c,title:o,lede:p}){return n.jsxs("div",{className:"ep-sec-head",children:[n.jsxs("div",{className:"ep-sec-bar",children:[n.jsx("span",{className:"ep-sec-n",children:s}),n.jsx("span",{className:"ep-sec-rule"}),n.jsxs("span",{className:"ep-sec-lbl",children:[n.jsx("span",{className:"ep-sec-ko",children:u}),n.jsx("span",{className:"ep-sec-en",children:c})]})]}),n.jsxs("div",{className:"ep-sec-body",children:[n.jsx("h2",{className:"ep-sec-title",children:o}),p&&n.jsx("p",{className:"ep-sec-lede",children:p})]})]})}function n1(){const s=ma(),[u,c]=y.useState("kerafoxy"),[o,p]=y.useState("silver"),[m,x]=y.useState("all"),[b,g]=y.useState("white");Ga(),y.useEffect(()=>{const S="/info/kerafoxy-product",G=ol[S],L=`${Re}${S}`,Y=Nt("article-jsonld",Il({title:G.title,description:G.description,url:L,image:`${Re}/og_banner.jpg`,datePublished:"2026-03-01",dateModified:"2026-05-29"})),Z=Nt("breadcrumb-jsonld",en([{name:"홈",url:Re},{name:"줄눈 정보",url:`${Re}/#info`},{name:"케라폭시 제품 소개",url:L}]));return()=>{Y(),Z()}},[]),y.useEffect(()=>{window.scrollTo(0,0)},[]);const h=()=>{s("/#calc"),setTimeout(()=>{const S=document.querySelector("#calc");S&&S.scrollIntoView({behavior:"smooth"})},300)},E=Em.find(S=>S.id===u),N=_r.find(S=>S.id===o),B=y.useMemo(()=>m==="all"?_r:_r.filter(S=>S.group===m),[m]),K={"--grout-color":N.hex,"--tile-color":Dr[b].hex};return n.jsxs("div",{className:"ep-page",children:[n.jsx(Ya,{}),n.jsxs("header",{className:"ep-hero","data-screen-label":"Hero",children:[n.jsx("div",{className:"ep-hero-bg",style:{"--hero-img-d":`url(${e1})`,"--hero-img-m":`url(${t1})`},"aria-hidden":"true"}),n.jsxs("div",{className:"ep-container ep-hero-inner",children:[n.jsx("div",{className:"ep-eyebrow ep-eyebrow-light",children:"Grout Knowledge · 03"}),n.jsxs("h1",{className:"ep-hero-title",children:["내 공간에 맞는",n.jsx("br",{}),"에폭시 계열 ",n.jsx("em",{children:"한 가지"}),"."]}),n.jsxs("p",{className:"ep-hero-lede",children:["디테일라인이 직접 시공하는 4종의 에폭시 계열 줄눈재와",n.jsx("br",{}),"줄눈 색상을 미리 확인할 수 있는 라이브 시뮬레이터를 제공합니다."]}),n.jsx("ul",{className:"ep-hero-meta",children:a1.map(S=>n.jsxs("li",{children:[n.jsx("span",{className:"ep-meta-k",children:S.k}),n.jsxs("span",{className:"ep-meta-v",children:[S.v," ",n.jsx("small",{children:S.small})]})]},S.k))})]})]}),n.jsx("nav",{className:"ep-crumb","aria-label":"현재 위치",children:n.jsxs("div",{className:"ep-container ep-crumb-inner",children:[n.jsx(qe,{to:"/",className:"ep-crumb-item",children:"홈"}),n.jsx("span",{className:"ep-crumb-sep",children:"/"}),n.jsx("span",{className:"ep-crumb-item",children:"줄눈 정보"}),n.jsx("span",{className:"ep-crumb-sep",children:"/"}),n.jsx("span",{className:"ep-crumb-here",children:"에폭시 계열 제품 소개"})]})}),n.jsx("section",{className:"ep-section","data-screen-label":"01 Product Lineup",children:n.jsxs("div",{className:"ep-container",children:[n.jsx(To,{num:"01",ko:"제품 라인업",en:"Product Lineup",title:n.jsxs(n.Fragment,{children:["같은 에폭시여도,",n.jsx("br",{}),n.jsx("em",{children:"맞춤 선택"}),"이 가능합니다."]}),lede:"공간 · 표면 질감 · 색상 선호에 따라 4종의 제품 중 가장 적합한 것을 안내해 드립니다."}),n.jsx("div",{className:"ep-prod-tabs",role:"tablist","aria-label":"제품 선택",children:Em.map(S=>n.jsx("button",{type:"button",role:"tab","aria-selected":u===S.id,className:`ep-prod-tab ${u===S.id?"on":""}`,onClick:()=>c(S.id),children:S.name},S.id))}),n.jsxs("div",{className:"ep-prod-panel",role:"tabpanel",children:[n.jsx("div",{className:"ep-prod-image",children:n.jsx("img",{src:E.image,alt:`${E.name} 시공 결과`,loading:"lazy"})}),n.jsxs("div",{className:"ep-prod-info",children:[n.jsxs("div",{className:"ep-prod-head",children:[n.jsx("h3",{className:"ep-prod-name",children:E.name}),n.jsx("span",{className:`ep-prod-badge ep-prod-badge--${E.badge.variant}`,children:E.badge.label})]}),n.jsx("p",{className:"ep-prod-desc",children:E.desc}),n.jsx("dl",{className:"ep-prod-specs",children:E.specs.map(S=>n.jsxs("div",{className:"ep-prod-spec-row",children:[n.jsx("dt",{children:S.k}),n.jsx("dd",{children:S.v})]},S.k))})]})]})]})}),n.jsx("section",{className:"ep-section ep-bg-paper","data-screen-label":"02 Color Simulator",children:n.jsxs("div",{className:"ep-container",children:[n.jsx(To,{num:"02",ko:"라이브 컬러 시뮬레이터",en:"Live Color Simulator",title:n.jsxs(n.Fragment,{children:["시공 전에, 줄눈 색을 ",n.jsx("em",{children:"미리 보세요"}),"."]}),lede:"아래 스와치를 클릭하면 좌측 타일 그리드의 줄눈 색이 즉시 바뀝니다. 타일 색·계열 필터로 다양한 조합을 빠르게 확인해 보세요."}),n.jsxs("div",{className:"ep-sim-grid",children:[n.jsxs("div",{className:"ep-sim-left",children:[n.jsx("div",{className:"ep-tile-preview",children:n.jsx("div",{className:"ep-tile-stage",style:K,"aria-hidden":"true",children:Array.from({length:30}).map((S,G)=>n.jsx("span",{className:"ep-tile"},G))})}),n.jsx("div",{className:"ep-tile-toggle",role:"tablist","aria-label":"타일 색상",children:Object.keys(Dr).map(S=>n.jsxs("button",{type:"button",role:"tab","aria-selected":b===S,className:`ep-tile-toggle-btn ${b===S?"on":""}`,onClick:()=>g(S),children:[n.jsx("span",{className:"ep-tile-toggle-dot",style:{"--td":Dr[S].hex}}),n.jsx("span",{children:Dr[S].label})]},S))})]}),n.jsxs("div",{className:"ep-sim-right",children:[n.jsx("div",{className:"ep-group-tabs",role:"tablist","aria-label":"색상 계열",children:Object.keys(ti).map(S=>n.jsx("button",{type:"button",role:"tab","aria-selected":m===S,className:`ep-group-tab ${m===S?"on":""}`,onClick:()=>x(S),children:ti[S]},S))}),n.jsx("div",{className:"ep-swatches",children:B.map(S=>n.jsx("button",{type:"button",className:`ep-swatch ${o===S.id?"is-active":""}`,style:{background:S.hex},"data-light":S.light?"true":"false",onClick:()=>p(S.id),"aria-label":`${S.name} · ${S.hex.toUpperCase()} · ${ti[S.group]}`,"aria-pressed":o===S.id},S.id))}),n.jsxs("div",{className:"ep-sel-card","aria-live":"polite",children:[n.jsx("div",{className:"ep-sel-chip",style:{"--c":N.hex},"aria-hidden":"true"}),n.jsxs("div",{className:"ep-sel-info",children:[n.jsx("h4",{className:"ep-sel-name",children:N.name}),n.jsxs("div",{className:"ep-sel-meta",children:[n.jsx("span",{className:"ep-sel-hex",children:N.hex.toUpperCase()}),n.jsxs("span",{className:"ep-sel-tag",children:["· ",N.tagEn]})]}),n.jsx("div",{className:"ep-sel-group",children:ti[N.group]}),n.jsx("p",{className:"ep-sel-tip",children:Ao[N.group]})]})]})]})]}),n.jsx("ul",{className:"ep-tips-grid",children:Object.keys(Ao).map(S=>{const G=_r.filter(L=>L.group===S).slice(0,3);return n.jsxs("li",{className:"ep-tip-cell",children:[n.jsx("div",{className:"ep-tip-swatches","aria-hidden":"true",children:G.map(L=>n.jsx("span",{style:{background:L.hex}},L.id))}),n.jsx("h4",{className:"ep-tip-name",children:ti[S]}),n.jsx("p",{className:"ep-tip-desc",children:Ao[S]})]},S)})})]})}),n.jsx("section",{className:"ep-section","data-screen-label":"03 Related",children:n.jsxs("div",{className:"ep-container",children:[n.jsx(To,{num:"03",ko:"관련 정보 더 보기",en:"Related",title:n.jsxs(n.Fragment,{children:["줄눈에 대해 알아야 할, 다른 ",n.jsx("em",{children:"네 가지"}),"."]}),lede:"가격 · 제품 · 비교 · 시공 — 네 가지 관점으로 줄눈을 더 깊이 살펴보세요."}),n.jsx("div",{className:"ep-related-grid",children:l1.map(S=>n.jsxs(qe,{to:S.href,className:"ep-related-card",children:[n.jsx("span",{className:"ep-related-idx",children:S.idx}),n.jsx("h4",{className:"ep-related-title",children:S.title}),n.jsx("p",{className:"ep-related-desc",children:S.desc}),n.jsxs("span",{className:"ep-related-more",children:["more ",n.jsx("span",{className:"ep-related-arr",children:"→"})]})]},S.href))})]})}),n.jsx("section",{className:"ep-cta-band","data-screen-label":"CTA Band",children:n.jsxs("div",{className:"ep-container ep-cta-row",children:[n.jsxs("div",{className:"ep-cta-text",children:[n.jsxs("h3",{className:"ep-cta-title",children:["어떤 제품·색이 우리 집에 맞을지 ",n.jsx("em",{children:"고민되신다면"}),"?"]}),n.jsx("p",{className:"ep-cta-sub",children:"공간 사진 한 장만 보내주시면, 가장 잘 어울리는 제품과 색을 추천해 드립니다. 강남구·서초구·송파구 욕실·베란다·현관 줄눈 무료 견적."})]}),n.jsxs("div",{className:"ep-cta-actions",children:[n.jsxs("button",{type:"button",className:"ep-btn ep-btn-primary",onClick:h,children:["무료 견적 받기 ",n.jsx("span",{className:"ep-btn-arr",children:"→"})]}),n.jsx("a",{href:"tel:010-8005-6674",onClick:()=>it.phoneClick("info_cta"),className:"ep-btn ep-btn-ghost",children:"전화 상담 010-8005-6674"})]})]})}),n.jsx(qa,{}),n.jsx("style",{children:i1})]})}const i1=`
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
`,$l=({n:s,best:u})=>n.jsxs(n.Fragment,{children:[n.jsxs("span",{className:"cp-stars",children:["★".repeat(s),n.jsx("span",{className:"off",children:"★".repeat(5-s)})]}),n.jsx("span",{className:`cp-rating ${u?"best":""}`,children:u?"탁월":s>=4?"우수":s>=3?"보통":"낮음"})]}),Am=[{k:"소재 성분",kerafoxy:n.jsxs(n.Fragment,{children:["에폭시 수지 ",n.jsx("span",{className:"cp-plus",children:"+"})," 경화제"," ",n.jsx("span",{className:"cp-rating",children:"2액형"})]}),polyurea:n.jsxs(n.Fragment,{children:["폴리우레아 수지 ",n.jsx("span",{className:"cp-rating",children:"1액형"})]})},{k:"경화 방식",kerafoxy:n.jsxs(n.Fragment,{children:["화학 반응 경화 ",n.jsx("span",{className:"cp-rating",children:"수동 혼합"})]}),polyurea:n.jsxs(n.Fragment,{children:["자연 경화 ",n.jsx("span",{className:"cp-rating",children:"습기·공기 반응"})]})},{k:"내수성",kerafoxy:n.jsx($l,{n:5,best:!0}),polyurea:n.jsx($l,{n:3})},{k:"항균성",kerafoxy:n.jsx($l,{n:5,best:!0}),polyurea:n.jsx($l,{n:3})},{k:"내구성 · 수명",kerafoxy:n.jsxs("span",{className:"cp-num",children:["10~15",n.jsx("small",{children:"년 이상"})]}),polyurea:n.jsxs("span",{className:"cp-num",children:["2~4",n.jsx("small",{children:"년"})]})},{k:"탄성 · 신축성",kerafoxy:n.jsx($l,{n:4}),polyurea:n.jsx($l,{n:5,best:!0})},{k:"시공 난이도",kerafoxy:"전문 기술 필요",polyurea:"비교적 간단"},{k:"가격",kerafoxy:n.jsxs("span",{className:"cp-num",children:["평균 30",n.jsx("small",{children:"만원"})]}),polyurea:n.jsxs("span",{className:"cp-num",children:["평균 20",n.jsx("small",{children:"만원"})]})},{k:"색상 선택",kerafoxy:n.jsxs("span",{className:"cp-num",children:["16",n.jsx("small",{children:"여 가지"})]}),polyurea:n.jsxs("span",{className:"cp-num",children:["20",n.jsx("small",{children:"여 가지"})]})},{k:"적합 환경",kerafoxy:n.jsxs(n.Fragment,{children:["욕실 · 주방 · 수영장 등 ",n.jsx("strong",{className:"cp-strong",children:"수분 多"})]}),polyurea:n.jsxs(n.Fragment,{children:["베란다 · 외벽 등 ",n.jsx("strong",{className:"cp-strong",children:"진동·충격 多"})]})}],r1=[{variant:"kp",title:"케라폭시 줄눈 추천",sub:"For Home · Indoor",items:[{text:"화장실·욕실·주방처럼 상시 수분에 노출되는 공간"},{text:"위생이 특히 중요한 가정 (어린이, 노약자)"},{text:"오랫동안 재시공 없이 사용하고 싶은 경우"},{text:"다양한 색상으로 인테리어를 연출하고 싶은 경우"}]},{variant:"pu",title:"폴리우레아 줄눈 추천",sub:"For Outdoor · Industrial",items:[{text:"베란다·테라스 등 온도 변화와 진동이 많은 공간"},{text:"건물 외벽·주차장처럼 하중과 충격이 큰 환경"},{text:"빠른 시공과 조기 경화가 필요한 경우"},{text:"비용을 절감하면서도 품질을 원하는 경우"}]}],s1=[{idx:"No. 01 · Kerafoxy",href:"/info/kerafoxy",title:"케라폭시 줄눈이란?",desc:"에폭시 계열 고성능 줄눈 소재 케라폭시의 5가지 핵심 장점."},{idx:"No. 02 · Product",href:"/info/kerafoxy-product",title:"케라폭시 계열 제품 소개",desc:"케라폭시·스타라이크·푸가리테 등 주요 제품 라인업과 색상 가이드."},{idx:"No. 03 · Pricing",href:"/info/kerafoxy-price",title:"케라폭시 가격 안내",desc:"시공 비용에 영향을 주는 요인과 평형별 표준 가격을 한눈에."},{idx:"No. 04 · Why",href:"/info/why-grout",title:"줄눈시공 하는 이유",desc:"위생·미관·내구성을 위한 필수 시공인 이유를 정리했습니다."}];function Ro({num:s,ko:u,en:c,title:o,lede:p}){return n.jsxs("div",{className:"cp-sec-head",children:[n.jsxs("div",{className:"cp-sec-bar",children:[n.jsx("span",{className:"cp-sec-n",children:s}),n.jsx("span",{className:"cp-sec-rule"}),n.jsxs("span",{className:"cp-sec-lbl",children:[n.jsx("span",{className:"cp-sec-ko",children:u}),n.jsx("span",{className:"cp-sec-en",children:c})]})]}),n.jsxs("div",{className:"cp-sec-body",children:[n.jsx("h2",{className:"cp-sec-title",children:o}),p&&n.jsx("p",{className:"cp-sec-lede",children:p})]})]})}function c1(){const s=ma();Ga(),y.useEffect(()=>{const c="/info/comparison",o=ol[c],p=`${Re}${c}`,m=Nt("article-jsonld",Il({title:o.title,description:o.description,url:p,image:`${Re}/og_banner.jpg`,datePublished:"2026-03-01",dateModified:"2026-05-29"})),x=Nt("breadcrumb-jsonld",en([{name:"홈",url:Re},{name:"줄눈 정보",url:`${Re}/#info`},{name:"폴리우레아 vs 케라폭시 비교",url:p}]));return()=>{m(),x()}},[]),y.useEffect(()=>{window.scrollTo(0,0)},[]);const u=()=>{s("/#calc"),setTimeout(()=>{const c=document.querySelector("#calc");c&&c.scrollIntoView({behavior:"smooth"})},300)};return n.jsxs("div",{className:"cp-page",children:[n.jsx(Ya,{}),n.jsxs("header",{className:"cp-hero","data-screen-label":"Hero",children:[n.jsx("div",{className:"cp-hero-bg","aria-hidden":"true"}),n.jsxs("div",{className:"cp-container cp-hero-inner",children:[n.jsx("div",{className:"cp-eyebrow cp-eyebrow-light",children:"Material Compare Guide"}),n.jsxs("h1",{className:"cp-hero-title",children:["폴리우레아 ",n.jsx("span",{className:"cp-vs",children:"vs"})," 케라폭시"]}),n.jsxs("p",{className:"cp-hero-lede",children:["두 소재의 차이점과 장단점을 비교해",n.jsx("br",{}),"공간에 가장 알맞은 소재를 선택하세요."]})]})]}),n.jsx("nav",{className:"cp-crumb","aria-label":"현재 위치",children:n.jsxs("div",{className:"cp-container cp-crumb-inner",children:[n.jsx(qe,{to:"/",className:"cp-crumb-item",children:"홈"}),n.jsx("span",{className:"cp-crumb-sep",children:"/"}),n.jsx("span",{className:"cp-crumb-item",children:"줄눈 정보"}),n.jsx("span",{className:"cp-crumb-sep",children:"/"}),n.jsx("span",{className:"cp-crumb-here",children:"폴리우레아 vs 케라폭시"})]})}),n.jsx("section",{className:"cp-intro","data-screen-label":"Intro",children:n.jsx("div",{className:"cp-container",children:n.jsxs("div",{className:"cp-intro-grid",children:[n.jsxs("h2",{className:"cp-intro-title",children:["폴리우레아 줄눈과",n.jsx("br",{}),"케라폭시 줄눈,",n.jsx("br",{}),n.jsx("em",{children:"어떻게 다를까?"})]}),n.jsxs("div",{className:"cp-intro-body",children:[n.jsxs("p",{children:["줄눈 시공을 알아보다 보면 ",n.jsx("b",{children:"폴리우레아 줄눈"}),"과 ",n.jsx("b",{children:"케라폭시 줄눈"}),", 두 가지 선택지를 마주하게 됩니다. 두 소재 모두 기존 시멘트 줄눈보다 월등히 우수한 성능을 자랑하지만, 각자의 강점이 다릅니다."]}),n.jsxs("p",{children:["간단히 말하면, ",n.jsx("b",{children:"케라폭시는 방수·항균 성능"}),"이 극강이고"," ",n.jsx("b",{children:"폴리우레아는 탄성·신축성"}),"이 뛰어납니다. 공간의 특성에 따라 알맞은 소재를 선택하는 것이 핵심입니다."]}),n.jsxs("div",{className:"cp-vs-mark",children:[n.jsxs("span",{className:"cp-pill",children:["방수·항균 ",n.jsx("b",{children:"케라폭시"})]}),n.jsx("span",{className:"cp-vs-x",children:"×"}),n.jsxs("span",{className:"cp-pill",children:["탄성·내충격 ",n.jsx("b",{children:"폴리우레아"})]})]})]})]})})}),n.jsx("section",{className:"cp-section cp-bg-paper","data-screen-label":"01 Detailed Comparison",children:n.jsxs("div",{className:"cp-container",children:[n.jsx(Ro,{num:"01",ko:"상세 비교표",en:"Detailed Comparison",title:n.jsxs(n.Fragment,{children:["10가지 항목으로,",n.jsx("br",{}),"두 소재를 ",n.jsx("em",{children:"나란히 본다"}),"."]}),lede:"성분·내구성·가격·시공성까지. 한 줄씩 짚어가며 비교하세요. ★은 5점 만점 기준의 상대 성능입니다."}),n.jsx("div",{className:"cp-cmp-wrap",children:n.jsxs("table",{className:"cp-cmp-table",children:[n.jsx("caption",{className:"sr-only",children:"케라폭시 vs 폴리우레아 10항목 비교"}),n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{className:"cp-cmp-first",children:n.jsxs("span",{className:"cp-cmp-mat",children:["비교 항목",n.jsx("small",{children:"Criteria"})]})}),n.jsx("th",{children:n.jsxs("span",{className:"cp-cmp-mat",children:["케라폭시 줄눈",n.jsx("small",{children:"Kerapoxy"})]})}),n.jsx("th",{children:n.jsxs("span",{className:"cp-cmp-mat",children:["폴리우레아 줄눈",n.jsx("small",{children:"Polyurea"})]})})]})}),n.jsx("tbody",{children:Am.map(c=>n.jsxs("tr",{children:[n.jsx("td",{className:"cp-row-label",children:c.k}),n.jsx("td",{className:"cp-col-kp",children:c.kerafoxy}),n.jsx("td",{children:c.polyurea})]},c.k))})]})}),n.jsx("ul",{className:"cp-cmp-cards","aria-label":"비교 항목별 카드",children:Am.map(c=>n.jsxs("li",{className:"cp-cmp-card",children:[n.jsx("div",{className:"cp-cmp-card-k",children:c.k}),n.jsxs("div",{className:"cp-cmp-card-row",children:[n.jsxs("div",{className:"cp-cmp-card-side cp-cmp-card-kp",children:[n.jsx("span",{className:"cp-cmp-card-side-lbl",children:"케라폭시"}),n.jsx("span",{className:"cp-cmp-card-side-val",children:c.kerafoxy})]}),n.jsxs("div",{className:"cp-cmp-card-side",children:[n.jsx("span",{className:"cp-cmp-card-side-lbl",children:"폴리우레아"}),n.jsx("span",{className:"cp-cmp-card-side-val",children:c.polyurea})]})]})]},`m-${c.k}`))}),n.jsx("p",{className:"cp-cmp-foot",children:"* 가격은 화장실 양변기 전체(바닥+벽) 시공 기준 평균값이며, 평형·현장 상황에 따라 달라질 수 있습니다."})]})}),n.jsx("section",{className:"cp-section","data-screen-label":"02 Recommend",children:n.jsxs("div",{className:"cp-container",children:[n.jsx(Ro,{num:"02",ko:"어떤 소재를 선택해야 할까요?",en:"Which to Choose",title:n.jsxs(n.Fragment,{children:["공간 용도와 목적에 따라,",n.jsx("br",{}),"최적의 ",n.jsx("em",{children:"줄눈 소재"}),"를 선택하세요."]}),lede:"아래 체크리스트로 본인 공간에 더 어울리는 소재를 확인할 수 있습니다."}),n.jsx("div",{className:"cp-reco-grid",children:r1.map(c=>n.jsxs("article",{className:`cp-reco cp-reco-${c.variant}`,children:[n.jsxs("div",{className:"cp-reco-head",children:[n.jsx("h3",{className:"cp-reco-title",children:c.title}),n.jsx("span",{className:"cp-reco-sub",children:c.sub})]}),n.jsx("ul",{className:"cp-reco-list",children:c.items.map(o=>n.jsx("li",{children:o.text},o.text))})]},c.variant))})]})}),n.jsx("section",{className:"cp-section cp-bg-paper","data-screen-label":"03 Related",children:n.jsxs("div",{className:"cp-container",children:[n.jsx(Ro,{num:"03",ko:"관련 정보 더 보기",en:"Related",title:n.jsxs(n.Fragment,{children:["줄눈에 대해 알아야 할, 다른 ",n.jsx("em",{children:"네 가지"}),"."]}),lede:"자재 · 제품 · 가격 · 시공 이유 — 네 가지 관점으로 줄눈을 더 깊이 살펴보세요."}),n.jsx("div",{className:"cp-related-grid",children:s1.map(c=>n.jsxs(qe,{to:c.href,className:"cp-related-card",children:[n.jsx("span",{className:"cp-related-idx",children:c.idx}),n.jsx("h4",{className:"cp-related-title",children:c.title}),n.jsx("p",{className:"cp-related-desc",children:c.desc}),n.jsxs("span",{className:"cp-related-more",children:["more ",n.jsx("span",{className:"cp-related-arr",children:"→"})]})]},c.href))})]})}),n.jsx("section",{className:"cp-cta-band","data-screen-label":"CTA Band",children:n.jsxs("div",{className:"cp-container cp-cta-row",children:[n.jsxs("div",{className:"cp-cta-text",children:[n.jsxs("h3",{className:"cp-cta-title",children:["어떤 소재가 맞을지 ",n.jsx("em",{children:"아직 고민되시나요?"})]}),n.jsx("p",{className:"cp-cta-sub",children:"현장 상황과 요구 사항을 듣고 최적의 소재를 추천해 드립니다. 강남구·서초구·송파구 욕실·베란다·현관 줄눈 무료 견적."})]}),n.jsxs("div",{className:"cp-cta-actions",children:[n.jsxs("button",{type:"button",className:"cp-btn cp-btn-primary",onClick:u,children:["무료 견적 받기 ",n.jsx("span",{className:"cp-btn-arr",children:"→"})]}),n.jsx("a",{href:"tel:010-8005-6674",onClick:()=>it.phoneClick("info_cta"),className:"cp-btn cp-btn-ghost",children:"전화 상담 010-8005-6674"})]})]})}),n.jsx(qa,{}),n.jsx("style",{children:o1})]})}const o1=`
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
`,d1=[{k:"핵심 가치",v:"위생·미관·방수",small:"3대 효과"},{k:"권장 주기",v:"5년+",small:"시멘트 줄눈 기준"},{k:"시공 시간",v:"1일",small:"평형별 상이"},{k:"A/S",v:"2년",small:"무상"}],u1=[{n:"01",title:"위생 관리 — 곰팡이와 세균 차단",body:"타일 사이 줄눈은 습기가 모이기 쉬운 공간입니다. 시멘트 줄눈이 낡으면 균열과 기공이 생겨 곰팡이와 세균이 번식합니다. 정기적인 줄눈시공은 이런 위생 문제를 근본적으로 차단합니다.",k:"위생 지표",v:"곰팡이 0"},{n:"02",title:"미관 개선 — 공간의 첫인상을 바꾸다",body:"낡고 변색된 줄눈은 아무리 깨끗한 타일이어도 공간 전체를 낡아 보이게 만듭니다. 반대로 깔끔한 줄눈 하나만으로도 화장실·주방이 리모델링한 것처럼 새로워집니다.",k:"체감 효과",v:"리모델링 급"},{n:"03",title:"방수 보강 — 구조물 손상 예방",body:"줄눈이 갈라지면 물이 타일 아래로 스며들어 시멘트 바닥과 벽체에 수분이 침투합니다. 장기적으로 곰팡이, 타일 박리, 구조물 부식으로 이어져 훨씬 큰 수리 비용을 만듭니다.",k:"방수 효과",v:"구조 보호"},{n:"04",title:"비용 절감 — 조기 시공이 유리한 이유",body:"줄눈 문제를 방치하면 타일 전체 교체·방수 공사·구조 보수 등 수백만 원대 공사가 필요해집니다. 초기에 줄눈시공만 해도 이런 대규모 수리를 미연에 방지할 수 있습니다.",k:"예상 절감",v:"수백만 원"}],p1=[{k:"PB · 01",title:"곰팡이 대량 번식",body:"검은 곰팡이가 타일 줄눈을 따라 번지며 제거가 점점 어려워집니다."},{k:"PB · 02",title:"물이 벽·바닥 내부로 침투",body:"균열된 줄눈을 통해 물이 내부로 스며들어 구조 손상이 시작됩니다."},{k:"PB · 03",title:"타일 박리 · 탈락",body:"수분 침투로 접착력이 약해지며 타일이 들뜨거나 깨져 나갑니다."},{k:"PB · 04",title:"악취 발생",body:"유기물과 습기가 결합해 욕실 특유의 불쾌한 냄새가 심해집니다."}],f1=[{k:"TM · 01",title:"5년 이상 된 욕실·화장실",body:"시멘트 줄눈의 평균 수명을 넘은 경우 교체 시공을 권장합니다."},{k:"TM · 02",title:"변색·흑화가 눈에 띄는 경우",body:"줄눈이 검게 변했다면 이미 곰팡이가 깊이 침투한 상태일 수 있습니다."},{k:"TM · 03",title:"균열·탈락이 발생한 경우",body:"방치하면 물 침투로 인한 구조 손상으로 이어질 수 있습니다."},{k:"TM · 04",title:"집 매매 · 임대 전후",body:"줄눈 시공만으로도 체감 상태가 크게 달라져 매도·임대에 유리합니다."}],m1=[{idx:"No. 01 · Kerafoxy",href:"/info/kerafoxy",title:"케라폭시 줄눈이란?",desc:"에폭시 계열 고성능 줄눈 소재 케라폭시의 5가지 핵심 장점을 정리했습니다."},{idx:"No. 02 · Pricing",href:"/info/kerafoxy-price",title:"케라폭시 가격 안내",desc:"시공 비용에 영향을 주는 요인과 평형별 표준 가격을 한눈에."},{idx:"No. 03 · Product",href:"/info/kerafoxy-product",title:"케라폭시 계열 제품 소개",desc:"케라폭시·스타라이크·푸가리테 등 주요 제품 라인업과 색상 가이드."},{idx:"No. 04 · Compare",href:"/info/comparison",title:"폴리우레아 vs 케라폭시",desc:"두 소재의 차이점과, 어떤 공간에 어떤 소재가 적합한지."}];function Ur({num:s,ko:u,en:c,title:o,lede:p,dark:m}){return n.jsxs("div",{className:`wg-sec-head ${m?"wg-sec-head-dark":""}`,children:[n.jsxs("div",{className:"wg-sec-bar",children:[n.jsx("span",{className:"wg-sec-n",children:s}),n.jsx("span",{className:"wg-sec-rule"}),n.jsxs("span",{className:"wg-sec-lbl",children:[n.jsx("span",{className:"wg-sec-ko",children:u}),n.jsx("span",{className:"wg-sec-en",children:c})]})]}),n.jsxs("div",{className:"wg-sec-body",children:[n.jsx("h2",{className:"wg-sec-title",children:o}),p&&n.jsx("p",{className:"wg-sec-lede",children:p})]})]})}function h1(){const s=ma();Ga(),y.useEffect(()=>{const c="/info/why-grout",o=ol[c],p=`${Re}${c}`,m=Nt("article-jsonld",Il({title:o.title,description:o.description,url:p,image:`${Re}/og_banner.jpg`,datePublished:"2026-03-01",dateModified:"2026-05-29"})),x=Nt("breadcrumb-jsonld",en([{name:"홈",url:Re},{name:"줄눈 정보",url:`${Re}/#info`},{name:"줄눈시공 하는 이유",url:p}]));return()=>{m(),x()}},[]),y.useEffect(()=>{window.scrollTo(0,0)},[]);const u=()=>{s("/#calc"),setTimeout(()=>{const c=document.querySelector("#calc");c&&c.scrollIntoView({behavior:"smooth"})},300)};return n.jsxs("div",{className:"wg-page",children:[n.jsx(Ya,{}),n.jsxs("header",{className:"wg-hero","data-screen-label":"Hero",children:[n.jsx("div",{className:"wg-hero-bg","aria-hidden":"true"}),n.jsxs("div",{className:"wg-container wg-hero-inner",children:[n.jsx("div",{className:"wg-eyebrow wg-eyebrow-light",children:"Grout Knowledge · 05"}),n.jsxs("h1",{className:"wg-hero-title",children:["줄눈시공",n.jsx("em",{children:","}),n.jsx("br",{}),"선택이 아닌 ",n.jsx("em",{children:"필수"}),"인 이유."]}),n.jsxs("p",{className:"wg-hero-lede",children:["위생 · 미관 · 방수 · 비용 절감.",n.jsx("br",{}),"줄눈 하나만 바꿔도 공간의 수명이 크게 달라집니다."]}),n.jsx("ul",{className:"wg-hero-meta",children:d1.map(c=>n.jsxs("li",{children:[n.jsx("span",{className:"wg-meta-k",children:c.k}),n.jsxs("span",{className:"wg-meta-v",children:[c.v," ",n.jsx("small",{children:c.small})]})]},c.k))})]})]}),n.jsx("nav",{className:"wg-crumb","aria-label":"현재 위치",children:n.jsxs("div",{className:"wg-container wg-crumb-inner",children:[n.jsx(qe,{to:"/",className:"wg-crumb-item",children:"홈"}),n.jsx("span",{className:"wg-crumb-sep",children:"/"}),n.jsx("span",{className:"wg-crumb-item",children:"줄눈 정보"}),n.jsx("span",{className:"wg-crumb-sep",children:"/"}),n.jsx("span",{className:"wg-crumb-here",children:"줄눈시공 하는 이유"})]})}),n.jsx("section",{className:"wg-section","data-screen-label":"Intro",children:n.jsx("div",{className:"wg-container",children:n.jsxs("div",{className:"wg-intro-grid",children:[n.jsxs("h2",{className:"wg-intro-title",children:["줄눈시공은",n.jsx("br",{}),"선택이 아니라 ",n.jsx("em",{children:"필수"}),"입니다."]}),n.jsxs("div",{className:"wg-intro-body",children:[n.jsxs("p",{children:["많은 분들이 줄눈을 단순한 타일 사이 채움재로 생각하지만, 실제로는"," ",n.jsx("b",{children:"방수 · 위생 · 구조 보호"}),"를 담당하는 핵심 요소입니다. 줄눈이 낡으면 눈에 보이는 미관 문제를 넘어, 심각한 주거 환경 문제로 이어집니다."]}),n.jsxs("p",{children:["특히 매일 물을 사용하는 욕실·화장실·주방에서 ",n.jsx("b",{children:"줄눈시공"}),"은 가장 효과적인 유지보수 방법 중 하나입니다. 작은 투자로 공간 수명을 크게 연장할 수 있습니다."]})]})]})})}),n.jsx("section",{className:"wg-section wg-bg-paper","data-screen-label":"01 Reasons",children:n.jsxs("div",{className:"wg-container",children:[n.jsx(Ur,{num:"01",ko:"줄눈시공을 해야 하는 이유",en:"4 Reasons",title:n.jsxs(n.Fragment,{children:["네 가지 이유로,",n.jsx("br",{}),n.jsx("em",{children:"지금"})," 시공해야 합니다."]}),lede:"위생 · 미관 · 방수 · 비용. 줄눈시공이 만들어내는 효과를 한 줄씩 짚어봅니다."}),n.jsx("ul",{className:"wg-reasons",children:u1.map(c=>n.jsxs("li",{className:"wg-r-row",children:[n.jsx("span",{className:"wg-r-n",children:c.n}),n.jsxs("div",{className:"wg-r-text",children:[n.jsx("h3",{className:"wg-r-title",children:c.title}),n.jsx("p",{className:"wg-r-body",children:c.body})]}),n.jsxs("div",{className:"wg-r-spec",children:[n.jsx("span",{className:"wg-r-k",children:c.k}),n.jsx("span",{className:"wg-r-v",children:c.v})]})]},c.n))})]})}),n.jsx("section",{className:"wg-section-dark","data-screen-label":"02 Problems",children:n.jsxs("div",{className:"wg-container",children:[n.jsx(Ur,{dark:!0,num:"02",ko:"줄눈시공을 미루면 생기는 문제",en:"What Happens",title:n.jsxs(n.Fragment,{children:["작은 균열이,",n.jsx("br",{}),n.jsx("em",{children:"큰 손상"}),"으로 이어집니다."]}),lede:"줄눈 노후를 방치하면 단순한 미관 문제를 넘어 주거 구조 자체에 영향을 줍니다."}),n.jsx("div",{className:"wg-prob-grid",children:p1.map(c=>n.jsxs("article",{className:"wg-prob-card",children:[n.jsx("span",{className:"wg-prob-k",children:c.k}),n.jsx("h3",{className:"wg-prob-title",children:c.title}),n.jsx("p",{className:"wg-prob-body",children:c.body})]},c.k))})]})}),n.jsx("section",{className:"wg-section","data-screen-label":"03 Timing",children:n.jsxs("div",{className:"wg-container",children:[n.jsx(Ur,{num:"03",ko:"줄눈시공이 필요한 시점",en:"When to Start",title:n.jsxs(n.Fragment,{children:["이런 상황이라면,",n.jsx("br",{}),n.jsx("em",{children:"지금"})," 점검해 보세요."]}),lede:"아래 중 하나라도 해당된다면 줄눈 상태를 한 번 확인해볼 시점입니다."}),n.jsx("div",{className:"wg-timing-grid",children:f1.map(c=>n.jsxs("article",{className:"wg-timing-card",children:[n.jsx("span",{className:"wg-timing-k",children:c.k}),n.jsx("h3",{className:"wg-timing-title",children:c.title}),n.jsx("p",{className:"wg-timing-body",children:c.body})]},c.k))})]})}),n.jsx("section",{className:"wg-section wg-bg-paper","data-screen-label":"04 Related",children:n.jsxs("div",{className:"wg-container",children:[n.jsx(Ur,{num:"04",ko:"관련 정보 더 보기",en:"Related",title:n.jsxs(n.Fragment,{children:["줄눈에 대해 알아야 할, 다른 ",n.jsx("em",{children:"네 가지"}),"."]}),lede:"자재 · 가격 · 제품 · 비교 — 네 가지 관점으로 줄눈을 더 깊이 살펴보세요."}),n.jsx("div",{className:"wg-related-grid",children:m1.map(c=>n.jsxs(qe,{to:c.href,className:"wg-related-card",children:[n.jsx("span",{className:"wg-related-idx",children:c.idx}),n.jsx("h4",{className:"wg-related-title",children:c.title}),n.jsx("p",{className:"wg-related-desc",children:c.desc}),n.jsxs("span",{className:"wg-related-more",children:["more ",n.jsx("span",{className:"wg-related-arr",children:"→"})]})]},c.href))})]})}),n.jsx("section",{className:"wg-cta-band","data-screen-label":"CTA Band",children:n.jsxs("div",{className:"wg-container wg-cta-row",children:[n.jsxs("div",{className:"wg-cta-text",children:[n.jsxs("h3",{className:"wg-cta-title",children:["지금 우리 집 줄눈이 ",n.jsx("em",{children:"괜찮은지"})," 점검받아 보세요."]}),n.jsx("p",{className:"wg-cta-sub",children:"사진 한 장만 보내주시면 현재 상태와 시공 필요 여부를 안내해 드립니다. 강남구·서초구·송파구 욕실·베란다·현관 줄눈 무료 견적."})]}),n.jsxs("div",{className:"wg-cta-actions",children:[n.jsxs("button",{type:"button",className:"wg-btn wg-btn-primary",onClick:u,children:["무료 견적 받기 ",n.jsx("span",{className:"wg-btn-arr",children:"→"})]}),n.jsx("a",{href:"tel:010-8005-6674",onClick:()=>it.phoneClick("info_cta"),className:"wg-btn wg-btn-ghost",children:"전화 상담 010-8005-6674"})]})]})}),n.jsx(qa,{}),n.jsx("style",{children:x1})]})}const x1=`
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
`,g1=[{k:"소재 분류",v:"폴리우레아 수지"},{k:"수명",v:"5년+"},{k:"시공 시간",v:"약 4~6시간"},{k:"A/S",v:"2년 무상"}],b1=[{idx:"01",title:"뛰어난 가성비",body:"케라폭시 대비 시공비 약 60~70% 수준으로 합리적입니다.",k:"시공비",v:"5만원~"},{idx:"02",title:"빠른 시공 시간",body:"경화 속도가 빨라 평수에 따라 반나절~1일 내 완료됩니다.",k:"경화",v:"수 시간"},{idx:"03",title:"강한 탄성",body:"약간의 변형·진동에도 균열 없이 견딥니다.",k:"연신율",v:"높음"},{idx:"04",title:"내후성",body:"자외선·온도 변화에 강해 베란다·외부 공간에 적합합니다.",k:"용도",v:"실외 OK"},{idx:"05",title:"경제적 보수",body:"5년 주기로 재시공해도 누적 비용이 부담스럽지 않습니다.",k:"5년 후",v:"재시공 가능"},{idx:"+",title:"단, 화장실엔 케라폭시가 답입니다.",body:"폴리우레아는 강한 내수성·항균이 필요한 화장실엔 적합하지 않습니다. 화장실은 케라폭시 시공만 진행합니다.",k:"화장실",v:"케라폭시 전용",dark:!0}],v1=[{name:"시멘트 줄눈",tag:"Standard",items:["저렴","1~2년 수명","곰팡이 취약","주기 재시공 필요"]},{name:"폴리우레아",tag:"Detailline 가성비 추천",hero:!0,items:["케라폭시 대비 60~70% 가격","5년+ 수명","베란다·외부화장실 적합","빠른 시공"]},{name:"케라폭시",tag:"Premium",items:["10년+ 수명","강한 내수성·항균","20+ 색상","화장실·욕실 권장"]}],y1=[{code:"SP · 01",ko:"베란다 · 발코니",en:"Veranda / Balcony",desc:"자외선·온도 변화에 강한 폴리우레아의 강점이 가장 잘 나타나는 공간입니다."},{code:"SP · 02",ko:"외부 화장실",en:"Outdoor Bath",desc:"실외 노출 화장실의 줄눈 보수에 적합합니다."},{code:"SP · 03",ko:"현관 바닥",en:"Entrance Floor",desc:"구축 아파트 현관 바닥의 가성비 보수 옵션입니다."},{code:"SP · 04",ko:"실내 화장실 (비추천)",en:"Indoor Bath (NOT recommended)",desc:"실내 화장실은 위생·항균이 중요해 케라폭시 시공만 진행합니다."}],j1=[{k:"시공 시간",v:"약 4~6시간"},{k:"경화",v:"수 시간 내"},{k:"사용 가능",v:"24시간 후 권장"},{k:"A/S",v:"2년 (무상)"}],k1=[{idx:"No. 01 · Compare",href:"/info/comparison",title:"폴리우레아 vs 케라폭시",desc:"두 자재의 차이와 공간별 추천 정리."},{idx:"No. 02 · Pricing",href:"/info/kerafoxy-price",title:"가격 안내",desc:"폴리우레아·케라폭시 평형별 표준 시공비."},{idx:"No. 03 · Kerafoxy",href:"/info/kerafoxy",title:"케라폭시 줄눈이란?",desc:"실내 화장실에 권장되는 자재."},{idx:"No. 04 · Why",href:"/info/why-grout",title:"줄눈시공 하는 이유",desc:"위생·미관·내구성을 위한 필수 시공."}];function Br({num:s,ko:u,en:c,title:o,lede:p,dark:m}){return n.jsxs("div",{className:`pu-sec-head ${m?"pu-sec-head-dark":""}`,children:[n.jsxs("div",{className:"pu-sec-bar",children:[n.jsx("span",{className:"pu-sec-n",children:s}),n.jsx("span",{className:"pu-sec-rule"}),n.jsxs("span",{className:"pu-sec-lbl",children:[n.jsx("span",{className:"pu-sec-ko",children:u}),n.jsx("span",{className:"pu-sec-en",children:c})]})]}),n.jsxs("div",{className:"pu-sec-body",children:[n.jsx("h2",{className:"pu-sec-title",children:o}),n.jsx("p",{className:"pu-sec-lede",children:p})]})]})}function N1(){const s=ma();Ga(),y.useEffect(()=>{const c="/info/polyurea",o=ol[c],p=`${Re}${c}`,m=Nt("article-jsonld",Il({title:o.title,description:o.description,url:p,image:`${Re}/og_banner.jpg`,datePublished:"2026-05-29",dateModified:"2026-05-29"})),x=Nt("breadcrumb-jsonld",en([{name:"홈",url:Re},{name:"줄눈 정보",url:`${Re}/#info`},{name:"폴리우레아 줄눈이란?",url:p}]));return()=>{m(),x()}},[]),y.useEffect(()=>{window.scrollTo(0,0)},[]);const u=()=>{s("/#calc"),setTimeout(()=>{const c=document.querySelector("#calc");c&&c.scrollIntoView({behavior:"smooth"})},300)};return n.jsxs("div",{className:"pu-page",children:[n.jsx(Ya,{}),n.jsxs("header",{className:"pu-hero","data-screen-label":"01 Hero",children:[n.jsx("div",{className:"pu-hero-bg",style:{"--hero-img-d":`url(${rh})`,"--hero-img-m":`url(${sh})`},"aria-hidden":"true"}),n.jsxs("div",{className:"pu-container pu-hero-inner",children:[n.jsx("div",{className:"pu-eyebrow pu-eyebrow-light",children:"Grout Knowledge · 03"}),n.jsxs("h1",{className:"pu-hero-title",children:["폴리우레아 줄눈,",n.jsx("br",{}),n.jsx("em",{children:"가성비"}),"의 정답."]}),n.jsxs("p",{className:"pu-hero-lede",children:["베란다·외부화장실·현관 — 자외선과 온도 변화에 강한 폴리우레아 줄눈.",n.jsx("br",{}),"케라폭시 대비 60~70% 가격으로, 5년+ 수명을 확보합니다."]}),n.jsx("ul",{className:"pu-hero-meta",children:g1.map(c=>n.jsxs("li",{children:[n.jsx("span",{className:"pu-meta-k",children:c.k}),n.jsx("span",{className:"pu-meta-v",children:c.v})]},c.k))})]})]}),n.jsx("nav",{className:"pu-crumb","aria-label":"현재 위치",children:n.jsxs("div",{className:"pu-container pu-crumb-inner",children:[n.jsx(qe,{to:"/",className:"pu-crumb-item",children:"홈"}),n.jsx("span",{className:"pu-crumb-sep",children:"/"}),n.jsx("span",{className:"pu-crumb-item",children:"줄눈 정보"}),n.jsx("span",{className:"pu-crumb-sep",children:"/"}),n.jsx("span",{className:"pu-crumb-here",children:"폴리우레아 줄눈이란?"})]})}),n.jsx("section",{className:"pu-section","data-screen-label":"02 Introduction",children:n.jsx("div",{className:"pu-container",children:n.jsxs("div",{className:"pu-intro",children:[n.jsxs("div",{className:"pu-intro-left",children:[n.jsx("div",{className:"pu-eyebrow",children:"Introduction · 들어가며"}),n.jsxs("h2",{className:"pu-intro-title",children:["폴리우레아 줄눈,",n.jsx("br",{}),"왜 ",n.jsx("em",{children:"가성비 추천"}),"일까요?"]}),n.jsxs("p",{className:"pu-intro-body",children:[n.jsx("em",{className:"pu-hl",children:"폴리우레아(Polyurea)는 빠른 경화 속도와 강한 탄성을 갖춘 고분자 줄눈 소재"}),"입니다. 케라폭시만큼의 화학적 항균성·내수성은 아니지만, 베란다·외부 공간에서는 자외선·온도 변화에 대한 내후성이 더 빛을 발합니다."]}),n.jsx("p",{className:"pu-intro-body",children:"무엇보다도 케라폭시 대비 시공비가 60~70% 수준이라, 보수 주기·예산 관점에서 합리적인 선택지입니다."}),n.jsxs("p",{className:"pu-intro-body",children:["⚠️ 실내 화장실·욕실은 위생과 항균이 중요해 폴리우레아가 적합하지 않습니다. 해당 공간은 ",n.jsx(qe,{to:"/info/kerafoxy",className:"pu-inline-link",children:"케라폭시 시공"}),"만 진행합니다."]})]}),n.jsx("div",{className:"pu-intro-right",children:n.jsx("div",{className:"pu-intro-photo",children:n.jsx("img",{src:ch,alt:"폴리우레아 줄눈 시공 디테일",loading:"lazy"})})})]})})}),n.jsx("section",{className:"pu-section pu-bg-paper","data-screen-label":"03 Benefits",children:n.jsxs("div",{className:"pu-container",children:[n.jsx(Br,{num:"02",ko:"5가지 핵심 장점",en:"Benefits",title:n.jsxs(n.Fragment,{children:["베란다·외부 공간에서 빛을 발하는 ",n.jsx("em",{children:"가성비 자재"}),"."]}),lede:"가격·시간·내후성 — 폴리우레아가 어떤 강점으로 베란다와 외부 공간에 적합한지 정리했습니다."}),n.jsx("div",{className:"pu-benefits-grid",children:b1.map(c=>n.jsxs("article",{className:`pu-benefit ${c.dark?"pu-benefit-dark":""}`,children:[n.jsxs("div",{className:"pu-benefit-head",children:[n.jsxs("span",{className:"pu-benefit-lbl",children:["Benefit / ",c.idx]}),n.jsx("span",{className:"pu-benefit-idx",children:c.idx})]}),n.jsx("h3",{className:"pu-benefit-title",children:c.title.split(`
`).map((o,p)=>n.jsx("span",{className:"pu-benefit-title-line",children:o},p))}),n.jsx("p",{className:"pu-benefit-body",children:c.body}),n.jsxs("div",{className:"pu-benefit-spec",children:[n.jsx("span",{className:"pu-spec-k",children:c.k}),n.jsx("span",{className:"pu-spec-v",children:c.v})]})]},c.idx))}),n.jsx("div",{className:"pu-compare",children:v1.map(c=>n.jsxs("div",{className:`pu-compare-col ${c.hero?"pu-is-hero":""}`,children:[n.jsxs("div",{className:"pu-compare-head",children:[n.jsx("h3",{className:"pu-compare-name",children:c.name}),n.jsx("span",{className:"pu-compare-tag",children:c.tag})]}),n.jsx("ul",{className:"pu-compare-list",children:c.items.map(o=>n.jsx("li",{children:o},o))})]},c.name))})]})}),n.jsx("section",{className:"pu-section","data-screen-label":"04 Spaces",children:n.jsxs("div",{className:"pu-container",children:[n.jsx(Br,{num:"03",ko:"적합한 공간",en:"Spaces",title:n.jsxs(n.Fragment,{children:["폴리우레아는 ",n.jsx("em",{children:"외부 공간"}),"에 강합니다."]}),lede:"자외선과 온도 변화가 큰 베란다·외부화장실·현관에 폴리우레아가 적합합니다. 실내 화장실은 케라폭시 전용."}),n.jsx("ul",{className:"pu-spaces",children:y1.map(c=>n.jsxs("li",{className:"pu-space-row",children:[n.jsx("span",{className:"pu-space-code",children:c.code}),n.jsxs("span",{className:"pu-space-lbl",children:[n.jsx("span",{className:"pu-space-ko",children:c.ko}),n.jsx("span",{className:"pu-space-en",children:c.en})]}),n.jsx("span",{className:"pu-space-desc",children:c.desc}),n.jsxs("span",{className:"pu-space-more",children:["자세히 ",n.jsx("span",{className:"pu-space-arr",children:"→"})]})]},c.code))})]})}),n.jsx("section",{className:"pu-section-dark","data-screen-label":"05 Before · After",children:n.jsxs("div",{className:"pu-container",children:[n.jsx(Br,{dark:!0,num:"04",ko:"시공 전 · 후 비교",en:"Before · After",title:n.jsxs(n.Fragment,{children:["같은 베란다, ",n.jsx("em",{children:"다른 마감"}),"."]}),lede:"실제 시공 현장에서 발견되는 변화를 정리했습니다. 노후 줄눈을 가성비로 되살리는 한 방."}),n.jsxs("div",{className:"pu-ba-grid",children:[n.jsxs("figure",{className:"pu-ba-item",children:[n.jsxs("div",{className:"pu-ba-photo",children:[n.jsx("img",{src:nh,alt:"시공 전 — 노후 베란다 줄눈",loading:"lazy"}),n.jsx("span",{className:"pu-ba-pill pu-ba-pill-light",children:"Before"})]}),n.jsxs("figcaption",{className:"pu-ba-cap",children:[n.jsx("h4",{className:"pu-ba-cap-title",children:"자외선·균열로 손상된 줄눈"}),n.jsx("p",{className:"pu-ba-cap-body",children:"베란다의 시멘트 줄눈은 자외선과 온도 변화로 균열·박락이 빠르게 진행됩니다."})]})]}),n.jsxs("figure",{className:"pu-ba-item",children:[n.jsxs("div",{className:"pu-ba-photo",children:[n.jsx("img",{src:ih,alt:"시공 후 — 폴리우레아 줄눈 마감",loading:"lazy"}),n.jsx("span",{className:"pu-ba-pill pu-ba-pill-accent",children:"After"})]}),n.jsxs("figcaption",{className:"pu-ba-cap",children:[n.jsx("h4",{className:"pu-ba-cap-title",children:"균일한 마감, 5년+ 수명"}),n.jsx("p",{className:"pu-ba-cap-body",children:"탄성 있는 폴리우레아 마감으로 변형·균열 없이 깨끗한 상태가 유지됩니다."})]})]})]}),n.jsx("ul",{className:"pu-ba-bottom",children:j1.map(c=>n.jsxs("li",{children:[n.jsx("span",{className:"pu-ba-bot-k",children:c.k}),n.jsx("span",{className:"pu-ba-bot-v",children:c.v})]},c.k))})]})}),n.jsx("section",{className:"pu-section pu-bg-paper","data-screen-label":"06 Related",children:n.jsxs("div",{className:"pu-container",children:[n.jsx(Br,{num:"05",ko:"관련 정보 더 보기",en:"Related",title:n.jsxs(n.Fragment,{children:["폴리우레아를 더 깊이 알아볼 ",n.jsx("em",{children:"네 가지"}),"."]}),lede:"비교 · 가격 · 케라폭시 · 시공 — 네 가지 관점으로 줄눈을 살펴보세요."}),n.jsx("div",{className:"pu-related-grid",children:k1.map(c=>n.jsxs(qe,{to:c.href,className:"pu-related-card",children:[n.jsx("span",{className:"pu-related-idx",children:c.idx}),n.jsx("h4",{className:"pu-related-title",children:c.title}),n.jsx("p",{className:"pu-related-desc",children:c.desc}),n.jsxs("span",{className:"pu-related-more",children:["more ",n.jsx("span",{className:"pu-related-arr",children:"→"})]})]},c.href))})]})}),n.jsx("section",{className:"pu-cta-band","data-screen-label":"CTA Band",children:n.jsxs("div",{className:"pu-container pu-cta-row",children:[n.jsxs("div",{className:"pu-cta-text",children:[n.jsxs("h3",{className:"pu-cta-title",children:["베란다·외부 공간 줄눈, ",n.jsx("em",{children:"무료 견적"}),"으로 시작하세요."]}),n.jsx("p",{className:"pu-cta-sub",children:"평형 · 공간을 알려주시면 24시간 내에 회신드립니다. 강남구·서초구·송파구 베란다·외부화장실·현관 폴리우레아 줄눈 무료 견적."})]}),n.jsxs("div",{className:"pu-cta-actions",children:[n.jsxs("button",{type:"button",className:"pu-btn pu-btn-primary",onClick:u,children:["무료 견적 받기 ",n.jsx("span",{className:"pu-btn-arr",children:"→"})]}),n.jsx("a",{href:"tel:010-8005-6674",onClick:()=>it.phoneClick("info_cta"),className:"pu-btn pu-btn-ghost",children:"전화 상담 010-8005-6674"})]})]})}),n.jsx(qa,{}),n.jsx("style",{children:w1})]})}const w1=`
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
`,S1=[{title:"1. 개인정보의 처리 목적",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:'디테일라인(이하 "회사")은 다음의 목적을 위하여 개인정보를 처리하며, 다음의 목적 이외의 용도로는 이용하지 않습니다.'}),n.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[n.jsx("li",{children:"견적 상담 및 방문 일정 조율"}),n.jsx("li",{children:"시공 서비스 안내, 견적 회신, 후속 응대"}),n.jsx("li",{children:"본인 확인 및 부정 이용 방지"})]})]})},{title:"2. 수집하는 개인정보 항목",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"회사는 무료 견적 상담 신청 시 다음의 개인정보를 수집합니다."}),n.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[n.jsxs("li",{children:[n.jsx("strong",{children:"필수 항목"}),": 이름, 연락처(휴대전화), 시공 위치(주소), 희망 시공 일정, 시공 공간(현관/화장실/베란다 등)"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"선택 항목"}),": 이메일, 상세 시공 내역(요청 사항)"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"자동 수집"}),": 접속 일시(상담 신청 시각)"]})]})]})},{title:"3. 개인정보의 보유 및 이용 기간",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"수집된 개인정보는 상담 완료 후 즉시 폐기하는 것을 원칙으로 합니다."}),n.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[n.jsx("li",{children:"상담 완료(견적 회신 또는 거절 의사 확인) 후 지체 없이 파기"}),n.jsx("li",{children:"다만, 시공 계약이 체결된 경우에는 「전자상거래 등에서의 소비자보호에 관한 법률」 등 관계 법령에 따라 거래 기록을 5년간 보관할 수 있습니다."})]})]})},{title:"4. 개인정보의 제3자 제공 및 처리 위탁",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"회사는 정보주체의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 견적 신청서 접수 처리를 위해 다음의 클라우드 서비스를 이용합니다."}),n.jsx("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:n.jsxs("li",{children:[n.jsx("strong",{children:"Google LLC (Google Workspace · Apps Script)"})," — 견적 신청 데이터 저장 및 처리. 데이터 처리 위치: 미국"]})}),n.jsx("p",{className:"mt-3 text-[var(--muted)] text-sm",children:"위 위탁업체는 Google이 제공하는 표준 데이터 보호 약관에 따라 운영되며, 회사는 위탁 처리 과정을 정기적으로 점검합니다."})]})},{title:"5. 개인정보의 파기 절차 및 방법",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"회사는 보유 기간이 경과하거나 처리 목적이 달성된 개인정보를 다음의 절차와 방법에 따라 지체 없이 파기합니다."}),n.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[n.jsxs("li",{children:[n.jsx("strong",{children:"파기 절차"}),": 상담 완료 시점에 자동/수동으로 식별, 즉시 파기 처리"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"전자적 파일"}),": 복원이 불가능한 방법으로 영구 삭제"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"출력물"}),": 분쇄 또는 소각"]})]})]})},{title:"6. 정보주체의 권리·의무 및 행사 방법",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"정보주체는 회사에 대해 언제든지 다음의 권리를 행사할 수 있습니다."}),n.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[n.jsx("li",{children:"개인정보 열람 요구"}),n.jsx("li",{children:"오류 등이 있을 경우 정정 요구"}),n.jsx("li",{children:"삭제 요구"}),n.jsx("li",{children:"처리 정지 요구"})]}),n.jsx("p",{className:"mt-3",children:"위 권리 행사는 아래 연락처를 통해 요청하실 수 있으며, 회사는 지체 없이 조치합니다."})]})},{title:"7. 개인정보의 안전성 확보 조치",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"회사는 개인정보 보호를 위해 다음의 조치를 취하고 있습니다."}),n.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[n.jsx("li",{children:"관리적 조치: 개인정보 취급자 최소화, 정기 점검"}),n.jsx("li",{children:"기술적 조치: 전송 구간 HTTPS 암호화, 접근 권한 통제"}),n.jsx("li",{children:"물리적 조치: 자료 보관 장소 출입 통제"})]})]})},{title:"8. 개인정보 보호 책임자",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만 처리 및 피해 구제 등을 위하여 아래와 같이 개인정보 보호 책임자를 지정하고 있습니다."}),n.jsxs("div",{className:"mt-3 p-4 bg-[var(--bg)] rounded-sm text-sm space-y-1",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"상호"}),": 디테일라인"]}),n.jsxs("p",{children:[n.jsx("strong",{children:"사업자등록번호"}),": 609-33-19473"]}),n.jsxs("p",{children:[n.jsx("strong",{children:"주소"}),": 서울 서초구 본마을4길 11 1층 104호"]}),n.jsxs("p",{children:[n.jsx("strong",{children:"연락처"}),": 010-8005-6674"]})]})]})},{title:"9. 권익 침해 구제 방법",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"개인정보 침해로 인한 구제가 필요한 경우 아래 기관에 문의하실 수 있습니다."}),n.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[n.jsx("li",{children:"개인정보분쟁조정위원회: 1833-6972 (privacy.go.kr)"}),n.jsx("li",{children:"개인정보침해신고센터: 118 (privacy.kisa.or.kr)"}),n.jsx("li",{children:"대검찰청 사이버수사과: 1301 (spo.go.kr)"}),n.jsx("li",{children:"경찰청 사이버수사국: 182 (ecrm.cyber.go.kr)"})]})]})},{title:"10. 개인정보 처리방침의 변경",body:n.jsx(n.Fragment,{children:n.jsx("p",{children:"이 개인정보 처리방침은 2026년 4월 29일부터 적용됩니다. 법령·정책 또는 보안 기술의 변경에 따라 내용이 추가, 삭제 및 수정될 경우 시행 7일 전부터 본 페이지를 통해 공지합니다."})})}];function z1(){return Ga(),y.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[]),n.jsxs("div",{className:"min-h-screen bg-[var(--paper)]",children:[n.jsx(Ya,{}),n.jsx("main",{className:"pt-28 pb-20 px-6 md:px-12 lg:px-20",children:n.jsxs("div",{className:"max-w-3xl mx-auto",children:[n.jsxs("div",{className:"mb-10",children:[n.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Privacy Policy"}),n.jsx("h1",{className:"text-4xl md:text-5xl font-black text-[var(--ink)] mt-2",children:"개인정보 처리방침"}),n.jsx("p",{className:"text-[var(--muted)] mt-3 text-sm",children:"시행일: 2026년 4월 29일"})]}),n.jsx("p",{className:"text-[var(--muted)] leading-relaxed mb-12",children:'디테일라인(이하 "회사")은 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립·공개합니다.'}),n.jsx("div",{className:"space-y-10",children:S1.map(s=>n.jsxs("section",{children:[n.jsx("h2",{className:"text-xl md:text-2xl font-bold text-[var(--ink)] mb-3",children:s.title}),n.jsx("div",{className:"text-[var(--muted)] leading-relaxed text-sm md:text-base",children:s.body})]},s.title))}),n.jsx("div",{className:"mt-16 pt-8 border-t border-[var(--line)] text-center",children:n.jsxs(qe,{to:"/",className:"inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--ink)] transition-colors",children:[n.jsx("i",{className:"ri-arrow-left-line"}),"홈으로 돌아가기"]})})]})}),n.jsx(qa,{})]})}const E1=[{path:"/",element:n.jsx(Cv,{})},{path:"/privacy",element:n.jsx(z1,{})},{path:"/info/kerafoxy",element:n.jsx(Yv,{})},{path:"/info/kerafoxy-price",element:n.jsx(Wv,{})},{path:"/info/kerafoxy-product",element:n.jsx(n1,{})},{path:"/info/comparison",element:n.jsx(c1,{})},{path:"/info/why-grout",element:n.jsx(h1,{})},{path:"/info/polyurea",element:n.jsx(N1,{})},{path:"*",element:n.jsx(Nb,{})}];let oh;new Promise(s=>{oh=s});function A1(){const s=R0(E1),u=ma();return y.useEffect(()=>{window.REACT_APP_NAVIGATE=u,oh(window.REACT_APP_NAVIGATE)}),s}function T1(){return n.jsx(fb,{basename:"/",children:n.jsx(A1,{})})}let dh=-1;const tn=s=>{addEventListener("pageshow",u=>{u.persisted&&(dh=u.timeStamp,s(u))},!0)},Zt=(s,u,c,o)=>{let p,m;return x=>{u.value>=0&&(x||o)&&(m=u.value-(p??0),(m||p===void 0)&&(p=u.value,u.delta=m,u.rating=((b,g)=>b>g[1]?"poor":b>g[0]?"needs-improvement":"good")(u.value,c),s(u)))}},Xo=s=>{requestAnimationFrame(()=>requestAnimationFrame(s))},Jo=()=>{const s=performance.getEntriesByType("navigation")[0];if(s&&s.responseStart>0&&s.responseStart<performance.now())return s},oi=()=>Jo()?.activationStart??0,Xt=(s,u=-1)=>{const c=Jo();let o="navigate";return dh>=0?o="back-forward-cache":c&&(document.prerendering||oi()>0?o="prerender":document.wasDiscarded?o="restore":c.type&&(o=c.type.replace(/_/g,"-"))),{name:s,value:u,rating:"good",delta:0,entries:[],id:`v5-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,navigationType:o}},Co=new WeakMap;function Wo(s,u){return Co.get(s)||Co.set(s,new u),Co.get(s)}class R1{t;i=0;o=[];h(u){if(u.hadRecentInput)return;const c=this.o[0],o=this.o.at(-1);this.i&&c&&o&&u.startTime-o.startTime<1e3&&u.startTime-c.startTime<5e3?(this.i+=u.value,this.o.push(u)):(this.i=u.value,this.o=[u]),this.t?.(u)}}const di=(s,u,c={})=>{try{if(PerformanceObserver.supportedEntryTypes.includes(s)){const o=new PerformanceObserver(p=>{queueMicrotask(()=>{u(p.getEntries())})});return o.observe({type:s,buffered:!0,...c}),o}}catch{}},$o=s=>{let u=!1;return()=>{u||(s(),u=!0)}};let Fl=-1;const uh=new Set,Tm=()=>document.visibilityState!=="hidden"||document.prerendering?1/0:0,Bo=s=>{if(document.visibilityState==="hidden"){if(s.type==="visibilitychange")for(const u of uh)u();isFinite(Fl)||(Fl=s.type==="visibilitychange"?s.timeStamp:0,removeEventListener("prerenderingchange",Bo,!0))}},$r=()=>{if(Fl<0){const s=oi();Fl=(document.prerendering?void 0:globalThis.performance.getEntriesByType("visibility-state").find(c=>c.name==="hidden"&&c.startTime>=s)?.startTime)??Tm(),addEventListener("visibilitychange",Bo,!0),addEventListener("prerenderingchange",Bo,!0),tn(()=>{setTimeout(()=>{Fl=Tm()})})}return{get firstHiddenTime(){return Fl},onHidden(s){uh.add(s)}}},Fr=s=>{document.prerendering?addEventListener("prerenderingchange",s,!0):s()},Rm=[1800,3e3],ph=(s,u={})=>{Fr(()=>{const c=$r();let o,p=Xt("FCP");const m=di("paint",x=>{for(const b of x)b.name==="first-contentful-paint"&&(m.disconnect(),b.startTime<c.firstHiddenTime&&(p.value=Math.max(b.startTime-oi(),0),p.entries.push(b),o(!0)))});m&&(o=Zt(s,p,Rm,u.reportAllChanges),tn(x=>{p=Xt("FCP"),o=Zt(s,p,Rm,u.reportAllChanges),Xo(()=>{p.value=performance.now()-x.timeStamp,o(!0)})}))})},Cm=[.1,.25],C1=(s,u={})=>{const c=$r();ph($o(()=>{let o,p=Xt("CLS",0);const m=Wo(u,R1),x=g=>{for(const h of g)m.h(h);m.i>p.value&&(p.value=m.i,p.entries=m.o,o())},b=di("layout-shift",x);b&&(o=Zt(s,p,Cm,u.reportAllChanges),c.onHidden(()=>{x(b.takeRecords()),o(!0)}),tn(()=>{m.i=0,p=Xt("CLS",0),o=Zt(s,p,Cm,u.reportAllChanges),Xo(o)}),setTimeout(o))}))};let fh=0,Mo=1/0,Hr=0;const M1=s=>{for(const u of s)u.interactionId&&(Mo=Math.min(Mo,u.interactionId),Hr=Math.max(Hr,u.interactionId),fh=Hr?(Hr-Mo)/7+1:0)};let Ho;const Mm=()=>Ho?fh:performance.interactionCount??0,O1=()=>{"interactionCount"in performance||Ho||(Ho=di("event",M1,{durationThreshold:0}))};let Om=0;class _1{l=[];u=new Map;m;p;v(){Om=Mm(),this.l.length=0,this.u.clear()}T(){const u=Math.min(this.l.length-1,Math.floor((Mm()-Om)/50));return this.l[u]}h(u){if(this.m?.(u),!u.interactionId&&u.entryType!=="first-input")return;const c=this.l.at(-1);let o=this.u.get(u.interactionId);if(o||this.l.length<10||u.duration>c.L){if(o?u.duration>o.L?(o.entries=[u],o.L=u.duration):u.duration===o.L&&u.startTime===o.entries[0].startTime&&o.entries.push(u):(o={id:u.interactionId,entries:[u],L:u.duration},this.u.set(o.id,o),this.l.push(o)),this.l.sort((p,m)=>m.L-p.L),this.l.length>10){const p=this.l.splice(10);for(const m of p)this.u.delete(m.id)}this.p?.(o)}}}const mh=s=>{const u=globalThis.requestIdleCallback||setTimeout,c=globalThis.cancelIdleCallback||clearTimeout;if(document.visibilityState==="hidden")s();else{const o=$o(s);let p=-1;const m=()=>{c(p),o()};addEventListener("visibilitychange",m,{once:!0,capture:!0}),p=u(()=>{removeEventListener("visibilitychange",m,{capture:!0}),o()})}},_m=[200,500],D1=(s,u={})=>{if(!globalThis.PerformanceEventTiming||!("interactionId"in PerformanceEventTiming.prototype))return;const c=$r();Fr(()=>{O1();let o,p=Xt("INP");const m=Wo(u,_1),x=g=>{mh(()=>{for(const E of g)m.h(E);const h=m.T();h&&h.L!==p.value&&(p.value=h.L,p.entries=h.entries,o())})},b=di("event",x,{durationThreshold:u.durationThreshold??40});o=Zt(s,p,_m,u.reportAllChanges),b&&(b.observe({type:"first-input",buffered:!0}),c.onHidden(()=>{x(b.takeRecords()),o(!0)}),tn(()=>{m.v(),p=Xt("INP"),o=Zt(s,p,_m,u.reportAllChanges)}))})};class U1{m;h(u){this.m?.(u)}}const Dm=[2500,4e3],B1=(s,u={})=>{Fr(()=>{const c=$r();let o,p=Xt("LCP");const m=Wo(u,U1),x=g=>{u.reportAllChanges||(g=g.slice(-1));for(const h of g)m.h(h),h.startTime<c.firstHiddenTime&&(p.value=Math.max(h.startTime-oi(),0),p.entries=[h],o())},b=di("largest-contentful-paint",x);if(b){o=Zt(s,p,Dm,u.reportAllChanges);const g=$o(()=>{x(b.takeRecords()),b.disconnect(),o(!0)}),h=E=>{E.isTrusted&&(mh(g),removeEventListener(E.type,h,{capture:!0}))};for(const E of["keydown","click","visibilitychange"])addEventListener(E,h,{capture:!0});tn(E=>{p=Xt("LCP"),o=Zt(s,p,Dm,u.reportAllChanges),Xo(()=>{p.value=performance.now()-E.timeStamp,o(!0)})})}})},Um=[800,1800],Lo=s=>{document.prerendering?Fr(()=>Lo(s)):document.readyState!=="complete"?addEventListener("load",()=>Lo(s),!0):setTimeout(s)},H1=(s,u={})=>{let c=Xt("TTFB"),o=Zt(s,c,Um,u.reportAllChanges);Lo(()=>{const p=Jo();p&&(c.value=Math.max(p.responseStart-oi(),0),c.entries=[p],o(!0),tn(()=>{c=Xt("TTFB",0),o=Zt(s,c,Um,u.reportAllChanges),o(!0)}))})};function ai(s){window.gtag?.("event",s.name,{metric_id:s.id,metric_value:s.value,metric_rating:s.rating,value:s.name==="CLS"?Math.round(s.value*1e3):Math.round(s.value),non_interaction:!0})}function L1(){C1(ai),D1(ai),B1(ai),ph(ai),H1(ai)}Xg.createRoot(document.getElementById("root")).render(n.jsx(y.StrictMode,{children:n.jsx(T1,{})}));L1();
