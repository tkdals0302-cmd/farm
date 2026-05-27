(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))d(p);new MutationObserver(p=>{for(const m of p)if(m.type==="childList")for(const g of m.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&d(g)}).observe(document,{childList:!0,subtree:!0});function c(p){const m={};return p.integrity&&(m.integrity=p.integrity),p.referrerPolicy&&(m.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?m.credentials="include":p.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function d(p){if(p.ep)return;p.ep=!0;const m=c(p);fetch(p.href,m)}})();var uo={exports:{}},Zn={};var Xf;function Ag(){if(Xf)return Zn;Xf=1;var s=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function c(d,p,m){var g=null;if(m!==void 0&&(g=""+m),p.key!==void 0&&(g=""+p.key),"key"in p){m={};for(var b in p)b!=="key"&&(m[b]=p[b])}else m=p;return p=m.ref,{$$typeof:s,type:d,key:g,ref:p!==void 0?p:null,props:m}}return Zn.Fragment=u,Zn.jsx=c,Zn.jsxs=c,Zn}var Jf;function Tg(){return Jf||(Jf=1,uo.exports=Ag()),uo.exports}var n=Tg(),po={exports:{}},se={};var Wf;function Rg(){if(Wf)return se;Wf=1;var s=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),g=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),B=Symbol.iterator;function Z(j){return j===null||typeof j!="object"?null:(j=B&&j[B]||j["@@iterator"],typeof j=="function"?j:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,Y={};function L(j,E,H){this.props=j,this.context=E,this.refs=Y,this.updater=H||S}L.prototype.isReactComponent={},L.prototype.setState=function(j,E){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,E,"setState")},L.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function X(){}X.prototype=L.prototype;function q(j,E,H){this.props=j,this.context=E,this.refs=Y,this.updater=H||S}var K=q.prototype=new X;K.constructor=q,G(K,L.prototype),K.isPureReactComponent=!0;var le=Array.isArray;function $(){}var I={H:null,A:null,T:null,S:null},je=Object.prototype.hasOwnProperty;function U(j,E,H){var Q=H.ref;return{$$typeof:s,type:j,key:E,ref:Q!==void 0?Q:null,props:H}}function ae(j,E){return U(j.type,E,j.props)}function ne(j){return typeof j=="object"&&j!==null&&j.$$typeof===s}function W(j){var E={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(H){return E[H]})}var ie=/\/+/g;function Oe(j,E){return typeof j=="object"&&j!==null&&j.key!=null?W(""+j.key):E.toString(36)}function ke(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then($,$):(j.status="pending",j.then(function(E){j.status==="pending"&&(j.status="fulfilled",j.value=E)},function(E){j.status==="pending"&&(j.status="rejected",j.reason=E)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function C(j,E,H,Q,re){var oe=typeof j;(oe==="undefined"||oe==="boolean")&&(j=null);var xe=!1;if(j===null)xe=!0;else switch(oe){case"bigint":case"string":case"number":xe=!0;break;case"object":switch(j.$$typeof){case s:case u:xe=!0;break;case A:return xe=j._init,C(xe(j._payload),E,H,Q,re)}}if(xe)return re=re(j),xe=Q===""?"."+Oe(j,0):Q,le(re)?(H="",xe!=null&&(H=xe.replace(ie,"$&/")+"/"),C(re,E,H,"",function(Fl){return Fl})):re!=null&&(ne(re)&&(re=ae(re,H+(re.key==null||j&&j.key===re.key?"":(""+re.key).replace(ie,"$&/")+"/")+xe)),E.push(re)),1;xe=0;var We=Q===""?".":Q+":";if(le(j))for(var Re=0;Re<j.length;Re++)Q=j[Re],oe=We+Oe(Q,Re),xe+=C(Q,E,H,oe,re);else if(Re=Z(j),typeof Re=="function")for(j=Re.call(j),Re=0;!(Q=j.next()).done;)Q=Q.value,oe=We+Oe(Q,Re++),xe+=C(Q,E,H,oe,re);else if(oe==="object"){if(typeof j.then=="function")return C(ke(j),E,H,Q,re);throw E=String(j),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return xe}function V(j,E,H){if(j==null)return j;var Q=[],re=0;return C(j,Q,"","",function(oe){return E.call(H,oe,re++)}),Q}function P(j){if(j._status===-1){var E=j._result;E=E(),E.then(function(H){(j._status===0||j._status===-1)&&(j._status=1,j._result=H)},function(H){(j._status===0||j._status===-1)&&(j._status=2,j._result=H)}),j._status===-1&&(j._status=0,j._result=E)}if(j._status===1)return j._result.default;throw j._result}var be=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)},fe={map:V,forEach:function(j,E,H){V(j,function(){E.apply(this,arguments)},H)},count:function(j){var E=0;return V(j,function(){E++}),E},toArray:function(j){return V(j,function(E){return E})||[]},only:function(j){if(!ne(j))throw Error("React.Children.only expected to receive a single React element child.");return j}};return se.Activity=w,se.Children=fe,se.Component=L,se.Fragment=c,se.Profiler=p,se.PureComponent=q,se.StrictMode=d,se.Suspense=x,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,se.__COMPILER_RUNTIME={__proto__:null,c:function(j){return I.H.useMemoCache(j)}},se.cache=function(j){return function(){return j.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(j,E,H){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var Q=G({},j.props),re=j.key;if(E!=null)for(oe in E.key!==void 0&&(re=""+E.key),E)!je.call(E,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&E.ref===void 0||(Q[oe]=E[oe]);var oe=arguments.length-2;if(oe===1)Q.children=H;else if(1<oe){for(var xe=Array(oe),We=0;We<oe;We++)xe[We]=arguments[We+2];Q.children=xe}return U(j.type,re,Q)},se.createContext=function(j){return j={$$typeof:g,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:m,_context:j},j},se.createElement=function(j,E,H){var Q,re={},oe=null;if(E!=null)for(Q in E.key!==void 0&&(oe=""+E.key),E)je.call(E,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(re[Q]=E[Q]);var xe=arguments.length-2;if(xe===1)re.children=H;else if(1<xe){for(var We=Array(xe),Re=0;Re<xe;Re++)We[Re]=arguments[Re+2];re.children=We}if(j&&j.defaultProps)for(Q in xe=j.defaultProps,xe)re[Q]===void 0&&(re[Q]=xe[Q]);return U(j,oe,re)},se.createRef=function(){return{current:null}},se.forwardRef=function(j){return{$$typeof:b,render:j}},se.isValidElement=ne,se.lazy=function(j){return{$$typeof:A,_payload:{_status:-1,_result:j},_init:P}},se.memo=function(j,E){return{$$typeof:h,type:j,compare:E===void 0?null:E}},se.startTransition=function(j){var E=I.T,H={};I.T=H;try{var Q=j(),re=I.S;re!==null&&re(H,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then($,be)}catch(oe){be(oe)}finally{E!==null&&H.types!==null&&(E.types=H.types),I.T=E}},se.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},se.use=function(j){return I.H.use(j)},se.useActionState=function(j,E,H){return I.H.useActionState(j,E,H)},se.useCallback=function(j,E){return I.H.useCallback(j,E)},se.useContext=function(j){return I.H.useContext(j)},se.useDebugValue=function(){},se.useDeferredValue=function(j,E){return I.H.useDeferredValue(j,E)},se.useEffect=function(j,E){return I.H.useEffect(j,E)},se.useEffectEvent=function(j){return I.H.useEffectEvent(j)},se.useId=function(){return I.H.useId()},se.useImperativeHandle=function(j,E,H){return I.H.useImperativeHandle(j,E,H)},se.useInsertionEffect=function(j,E){return I.H.useInsertionEffect(j,E)},se.useLayoutEffect=function(j,E){return I.H.useLayoutEffect(j,E)},se.useMemo=function(j,E){return I.H.useMemo(j,E)},se.useOptimistic=function(j,E){return I.H.useOptimistic(j,E)},se.useReducer=function(j,E,H){return I.H.useReducer(j,E,H)},se.useRef=function(j){return I.H.useRef(j)},se.useState=function(j){return I.H.useState(j)},se.useSyncExternalStore=function(j,E,H){return I.H.useSyncExternalStore(j,E,H)},se.useTransition=function(){return I.H.useTransition()},se.version="19.2.4",se}var $f;function _o(){return $f||($f=1,po.exports=Rg()),po.exports}var k=_o(),fo={exports:{}},Kn={},mo={exports:{}},ho={};var Ff;function Cg(){return Ff||(Ff=1,(function(s){function u(C,V){var P=C.length;C.push(V);e:for(;0<P;){var be=P-1>>>1,fe=C[be];if(0<p(fe,V))C[be]=V,C[P]=fe,P=be;else break e}}function c(C){return C.length===0?null:C[0]}function d(C){if(C.length===0)return null;var V=C[0],P=C.pop();if(P!==V){C[0]=P;e:for(var be=0,fe=C.length,j=fe>>>1;be<j;){var E=2*(be+1)-1,H=C[E],Q=E+1,re=C[Q];if(0>p(H,P))Q<fe&&0>p(re,H)?(C[be]=re,C[Q]=P,be=Q):(C[be]=H,C[E]=P,be=E);else if(Q<fe&&0>p(re,P))C[be]=re,C[Q]=P,be=Q;else break e}}return V}function p(C,V){var P=C.sortIndex-V.sortIndex;return P!==0?P:C.id-V.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;s.unstable_now=function(){return m.now()}}else{var g=Date,b=g.now();s.unstable_now=function(){return g.now()-b}}var x=[],h=[],A=1,w=null,B=3,Z=!1,S=!1,G=!1,Y=!1,L=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;function K(C){for(var V=c(h);V!==null;){if(V.callback===null)d(h);else if(V.startTime<=C)d(h),V.sortIndex=V.expirationTime,u(x,V);else break;V=c(h)}}function le(C){if(G=!1,K(C),!S)if(c(x)!==null)S=!0,$||($=!0,W());else{var V=c(h);V!==null&&ke(le,V.startTime-C)}}var $=!1,I=-1,je=5,U=-1;function ae(){return Y?!0:!(s.unstable_now()-U<je)}function ne(){if(Y=!1,$){var C=s.unstable_now();U=C;var V=!0;try{e:{S=!1,G&&(G=!1,X(I),I=-1),Z=!0;var P=B;try{t:{for(K(C),w=c(x);w!==null&&!(w.expirationTime>C&&ae());){var be=w.callback;if(typeof be=="function"){w.callback=null,B=w.priorityLevel;var fe=be(w.expirationTime<=C);if(C=s.unstable_now(),typeof fe=="function"){w.callback=fe,K(C),V=!0;break t}w===c(x)&&d(x),K(C)}else d(x);w=c(x)}if(w!==null)V=!0;else{var j=c(h);j!==null&&ke(le,j.startTime-C),V=!1}}break e}finally{w=null,B=P,Z=!1}V=void 0}}finally{V?W():$=!1}}}var W;if(typeof q=="function")W=function(){q(ne)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,Oe=ie.port2;ie.port1.onmessage=ne,W=function(){Oe.postMessage(null)}}else W=function(){L(ne,0)};function ke(C,V){I=L(function(){C(s.unstable_now())},V)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(C){C.callback=null},s.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):je=0<C?Math.floor(1e3/C):5},s.unstable_getCurrentPriorityLevel=function(){return B},s.unstable_next=function(C){switch(B){case 1:case 2:case 3:var V=3;break;default:V=B}var P=B;B=V;try{return C()}finally{B=P}},s.unstable_requestPaint=function(){Y=!0},s.unstable_runWithPriority=function(C,V){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var P=B;B=C;try{return V()}finally{B=P}},s.unstable_scheduleCallback=function(C,V,P){var be=s.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?be+P:be):P=be,C){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=P+fe,C={id:A++,callback:V,priorityLevel:C,startTime:P,expirationTime:fe,sortIndex:-1},P>be?(C.sortIndex=P,u(h,C),c(x)===null&&C===c(h)&&(G?(X(I),I=-1):G=!0,ke(le,P-be))):(C.sortIndex=fe,u(x,C),S||Z||(S=!0,$||($=!0,W()))),C},s.unstable_shouldYield=ae,s.unstable_wrapCallback=function(C){var V=B;return function(){var P=B;B=V;try{return C.apply(this,arguments)}finally{B=P}}}})(ho)),ho}var If;function Mg(){return If||(If=1,mo.exports=Cg()),mo.exports}var xo={exports:{}},tt={};var Pf;function Og(){if(Pf)return tt;Pf=1;var s=_o();function u(x){var h="https://react.dev/errors/"+x;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)h+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+x+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var d={d:{f:c,r:function(){throw Error(u(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},p=Symbol.for("react.portal");function m(x,h,A){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:w==null?null:""+w,children:x,containerInfo:h,implementation:A}}var g=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(x,h){if(x==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,tt.createPortal=function(x,h){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(u(299));return m(x,h,null,A)},tt.flushSync=function(x){var h=g.T,A=d.p;try{if(g.T=null,d.p=2,x)return x()}finally{g.T=h,d.p=A,d.d.f()}},tt.preconnect=function(x,h){typeof x=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,d.d.C(x,h))},tt.prefetchDNS=function(x){typeof x=="string"&&d.d.D(x)},tt.preinit=function(x,h){if(typeof x=="string"&&h&&typeof h.as=="string"){var A=h.as,w=b(A,h.crossOrigin),B=typeof h.integrity=="string"?h.integrity:void 0,Z=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;A==="style"?d.d.S(x,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:w,integrity:B,fetchPriority:Z}):A==="script"&&d.d.X(x,{crossOrigin:w,integrity:B,fetchPriority:Z,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},tt.preinitModule=function(x,h){if(typeof x=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var A=b(h.as,h.crossOrigin);d.d.M(x,{crossOrigin:A,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&d.d.M(x)},tt.preload=function(x,h){if(typeof x=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var A=h.as,w=b(A,h.crossOrigin);d.d.L(x,A,{crossOrigin:w,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},tt.preloadModule=function(x,h){if(typeof x=="string")if(h){var A=b(h.as,h.crossOrigin);d.d.m(x,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:A,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else d.d.m(x)},tt.requestFormReset=function(x){d.d.r(x)},tt.unstable_batchedUpdates=function(x,h){return x(h)},tt.useFormState=function(x,h,A){return g.H.useFormState(x,h,A)},tt.useFormStatus=function(){return g.H.useHostTransitionStatus()},tt.version="19.2.4",tt}var em;function _g(){if(em)return xo.exports;em=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(u){console.error(u)}}return s(),xo.exports=Og(),xo.exports}var tm;function Dg(){if(tm)return Kn;tm=1;var s=Mg(),u=_o(),c=_g();function d(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(m(e)!==e)throw Error(d(188))}function h(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(d(188));return t!==e?null:e}for(var a=e,l=t;;){var i=a.return;if(i===null)break;var r=i.alternate;if(r===null){if(l=i.return,l!==null){a=l;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===a)return x(i),e;if(r===l)return x(i),t;r=r.sibling}throw Error(d(188))}if(a.return!==l.return)a=i,l=r;else{for(var o=!1,f=i.child;f;){if(f===a){o=!0,a=i,l=r;break}if(f===l){o=!0,l=i,a=r;break}f=f.sibling}if(!o){for(f=r.child;f;){if(f===a){o=!0,a=r,l=i;break}if(f===l){o=!0,l=r,a=i;break}f=f.sibling}if(!o)throw Error(d(189))}}if(a.alternate!==l)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?e:t}function A(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=A(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,B=Symbol.for("react.element"),Z=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),q=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),je=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),ae=Symbol.for("react.memo_cache_sentinel"),ne=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=ne&&e[ne]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Symbol.for("react.client.reference");function Oe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case L:return"Profiler";case Y:return"StrictMode";case le:return"Suspense";case $:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case q:return e.displayName||"Context";case X:return(e._context.displayName||"Context")+".Consumer";case K:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return t=e.displayName||null,t!==null?t:Oe(e.type)||"Memo";case je:t=e._payload,e=e._init;try{return Oe(e(t))}catch{}}return null}var ke=Array.isArray,C=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},be=[],fe=-1;function j(e){return{current:e}}function E(e){0>fe||(e.current=be[fe],be[fe]=null,fe--)}function H(e,t){fe++,be[fe]=e.current,e.current=t}var Q=j(null),re=j(null),oe=j(null),xe=j(null);function We(e,t){switch(H(oe,t),H(re,e),H(Q,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?xf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=xf(t),e=gf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}E(Q),H(Q,e)}function Re(){E(Q),E(re),E(oe)}function Fl(e){e.memoizedState!==null&&H(xe,e);var t=Q.current,a=gf(t,e.type);t!==a&&(H(re,e),H(Q,a))}function ri(e){re.current===e&&(E(Q),E(re)),xe.current===e&&(E(xe),qn._currentValue=P)}var Kr,Zo;function Ha(e){if(Kr===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Kr=t&&t[1]||"",Zo=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Kr+e+Zo}var Xr=!1;function Jr(e,t){if(!e||Xr)return"";Xr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(M){var R=M}Reflect.construct(e,[],D)}else{try{D.call()}catch(M){R=M}e.call(D.prototype)}}else{try{throw Error()}catch(M){R=M}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(M){if(M&&R&&typeof M.stack=="string")return[M.stack,R.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=l.DetermineComponentFrameRoot(),o=r[0],f=r[1];if(o&&f){var v=o.split(`
`),T=f.split(`
`);for(i=l=0;l<v.length&&!v[l].includes("DetermineComponentFrameRoot");)l++;for(;i<T.length&&!T[i].includes("DetermineComponentFrameRoot");)i++;if(l===v.length||i===T.length)for(l=v.length-1,i=T.length-1;1<=l&&0<=i&&v[l]!==T[i];)i--;for(;1<=l&&0<=i;l--,i--)if(v[l]!==T[i]){if(l!==1||i!==1)do if(l--,i--,0>i||v[l]!==T[i]){var O=`
`+v[l].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=l&&0<=i);break}}}finally{Xr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ha(a):""}function ih(e,t){switch(e.tag){case 26:case 27:case 5:return Ha(e.type);case 16:return Ha("Lazy");case 13:return e.child!==t&&t!==null?Ha("Suspense Fallback"):Ha("Suspense");case 19:return Ha("SuspenseList");case 0:case 15:return Jr(e.type,!1);case 11:return Jr(e.type.render,!1);case 1:return Jr(e.type,!0);case 31:return Ha("Activity");default:return""}}function Ko(e){try{var t="",a=null;do t+=ih(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Wr=Object.prototype.hasOwnProperty,$r=s.unstable_scheduleCallback,Fr=s.unstable_cancelCallback,rh=s.unstable_shouldYield,sh=s.unstable_requestPaint,pt=s.unstable_now,ch=s.unstable_getCurrentPriorityLevel,Xo=s.unstable_ImmediatePriority,Jo=s.unstable_UserBlockingPriority,si=s.unstable_NormalPriority,oh=s.unstable_LowPriority,Wo=s.unstable_IdlePriority,dh=s.log,uh=s.unstable_setDisableYieldValue,Il=null,ft=null;function pa(e){if(typeof dh=="function"&&uh(e),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(Il,e)}catch{}}var mt=Math.clz32?Math.clz32:mh,ph=Math.log,fh=Math.LN2;function mh(e){return e>>>=0,e===0?32:31-(ph(e)/fh|0)|0}var ci=256,oi=262144,di=4194304;function La(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ui(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var i=0,r=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var f=l&134217727;return f!==0?(l=f&~r,l!==0?i=La(l):(o&=f,o!==0?i=La(o):a||(a=f&~e,a!==0&&(i=La(a))))):(f=l&~r,f!==0?i=La(f):o!==0?i=La(o):a||(a=l&~e,a!==0&&(i=La(a)))),i===0?0:t!==0&&t!==i&&(t&r)===0&&(r=i&-i,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:i}function Pl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function hh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $o(){var e=di;return di<<=1,(di&62914560)===0&&(di=4194304),e}function Ir(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function en(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function xh(e,t,a,l,i,r){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var f=e.entanglements,v=e.expirationTimes,T=e.hiddenUpdates;for(a=o&~a;0<a;){var O=31-mt(a),D=1<<O;f[O]=0,v[O]=-1;var R=T[O];if(R!==null)for(T[O]=null,O=0;O<R.length;O++){var M=R[O];M!==null&&(M.lane&=-536870913)}a&=~D}l!==0&&Fo(e,l,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(o&~t))}function Fo(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-mt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Io(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-mt(a),i=1<<l;i&t|e[l]&t&&(e[l]|=t),a&=~i}}function Po(e,t){var a=t&-t;return a=(a&42)!==0?1:Pr(a),(a&(e.suspendedLanes|t))!==0?0:a}function Pr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function es(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ed(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:Yf(e.type))}function td(e,t){var a=V.p;try{return V.p=e,t()}finally{V.p=a}}var fa=Math.random().toString(36).slice(2),$e="__reactFiber$"+fa,nt="__reactProps$"+fa,sl="__reactContainer$"+fa,ts="__reactEvents$"+fa,gh="__reactListeners$"+fa,bh="__reactHandles$"+fa,ad="__reactResources$"+fa,tn="__reactMarker$"+fa;function as(e){delete e[$e],delete e[nt],delete e[ts],delete e[gh],delete e[bh]}function cl(e){var t=e[$e];if(t)return t;for(var a=e.parentNode;a;){if(t=a[sl]||a[$e]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Nf(e);e!==null;){if(a=e[$e])return a;e=Nf(e)}return t}e=a,a=e.parentNode}return null}function ol(e){if(e=e[$e]||e[sl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function an(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(d(33))}function dl(e){var t=e[ad];return t||(t=e[ad]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ke(e){e[tn]=!0}var ld=new Set,nd={};function Ya(e,t){ul(e,t),ul(e+"Capture",t)}function ul(e,t){for(nd[e]=t,e=0;e<t.length;e++)ld.add(t[e])}var vh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),id={},rd={};function yh(e){return Wr.call(rd,e)?!0:Wr.call(id,e)?!1:vh.test(e)?rd[e]=!0:(id[e]=!0,!1)}function pi(e,t,a){if(yh(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function fi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Kt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function kt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jh(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,r=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){a=""+o,r.call(this,o)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ls(e){if(!e._valueTracker){var t=sd(e)?"checked":"value";e._valueTracker=jh(e,t,""+e[t])}}function cd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=sd(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function mi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var kh=/[\n"\\]/g;function wt(e){return e.replace(kh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ns(e,t,a,l,i,r,o,f){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+kt(t)):e.value!==""+kt(t)&&(e.value=""+kt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?is(e,o,kt(t)):a!=null?is(e,o,kt(a)):l!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+kt(f):e.removeAttribute("name")}function od(e,t,a,l,i,r,o,f){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){ls(e);return}a=a!=null?""+kt(a):"",t=t!=null?""+kt(t):a,f||t===e.value||(e.value=t),e.defaultValue=t}l=l??i,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=f?e.checked:!!l,e.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),ls(e)}function is(e,t,a){t==="number"&&mi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function pl(e,t,a,l){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&l&&(e[a].defaultSelected=!0)}else{for(a=""+kt(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,l&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function dd(e,t,a){if(t!=null&&(t=""+kt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+kt(a):""}function ud(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(d(92));if(ke(l)){if(1<l.length)throw Error(d(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=kt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),ls(e)}function fl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var wh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pd(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||wh.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function fd(e,t,a){if(t!=null&&typeof t!="object")throw Error(d(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var i in t)l=t[i],t.hasOwnProperty(i)&&a[i]!==l&&pd(e,i,l)}else for(var r in t)t.hasOwnProperty(r)&&pd(e,r,t[r])}function rs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hi(e){return Sh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Xt(){}var ss=null;function cs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ml=null,hl=null;function md(e){var t=ol(e);if(t&&(e=t.stateNode)){var a=e[nt]||null;e:switch(e=t.stateNode,t.type){case"input":if(ns(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+wt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var i=l[nt]||null;if(!i)throw Error(d(90));ns(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&cd(l)}break e;case"textarea":dd(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&pl(e,!!a.multiple,t,!1)}}}var os=!1;function hd(e,t,a){if(os)return e(t,a);os=!0;try{var l=e(t);return l}finally{if(os=!1,(ml!==null||hl!==null)&&(ar(),ml&&(t=ml,e=hl,hl=ml=null,md(t),e)))for(t=0;t<e.length;t++)md(e[t])}}function ln(e,t){var a=e.stateNode;if(a===null)return null;var l=a[nt]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(d(231,t,typeof a));return a}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ds=!1;if(Jt)try{var nn={};Object.defineProperty(nn,"passive",{get:function(){ds=!0}}),window.addEventListener("test",nn,nn),window.removeEventListener("test",nn,nn)}catch{ds=!1}var ma=null,us=null,xi=null;function xd(){if(xi)return xi;var e,t=us,a=t.length,l,i="value"in ma?ma.value:ma.textContent,r=i.length;for(e=0;e<a&&t[e]===i[e];e++);var o=a-e;for(l=1;l<=o&&t[a-l]===i[r-l];l++);return xi=i.slice(e,1<l?1-l:void 0)}function gi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bi(){return!0}function gd(){return!1}function it(e){function t(a,l,i,r,o){this._reactName=a,this._targetInst=i,this.type=l,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(a=e[f],this[f]=a?a(r):r[f]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?bi:gd,this.isPropagationStopped=gd,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=bi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=bi)},persist:function(){},isPersistent:bi}),t}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vi=it(qa),rn=w({},qa,{view:0,detail:0}),Eh=it(rn),ps,fs,sn,yi=w({},rn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&e.type==="mousemove"?(ps=e.screenX-sn.screenX,fs=e.screenY-sn.screenY):fs=ps=0,sn=e),ps)},movementY:function(e){return"movementY"in e?e.movementY:fs}}),bd=it(yi),zh=w({},yi,{dataTransfer:0}),Ah=it(zh),Th=w({},rn,{relatedTarget:0}),ms=it(Th),Rh=w({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),Ch=it(Rh),Mh=w({},qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Oh=it(Mh),_h=w({},qa,{data:0}),vd=it(_h),Dh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Bh[e])?!!t[e]:!1}function hs(){return Hh}var Lh=w({},rn,{key:function(e){if(e.key){var t=Dh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=gi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Uh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hs,charCode:function(e){return e.type==="keypress"?gi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yh=it(Lh),qh=w({},yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yd=it(qh),Gh=w({},rn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hs}),Vh=it(Gh),Qh=w({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zh=it(Qh),Kh=w({},yi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xh=it(Kh),Jh=w({},qa,{newState:0,oldState:0}),Wh=it(Jh),$h=[9,13,27,32],xs=Jt&&"CompositionEvent"in window,cn=null;Jt&&"documentMode"in document&&(cn=document.documentMode);var Fh=Jt&&"TextEvent"in window&&!cn,jd=Jt&&(!xs||cn&&8<cn&&11>=cn),kd=" ",wd=!1;function Nd(e,t){switch(e){case"keyup":return $h.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xl=!1;function Ih(e,t){switch(e){case"compositionend":return Sd(t);case"keypress":return t.which!==32?null:(wd=!0,kd);case"textInput":return e=t.data,e===kd&&wd?null:e;default:return null}}function Ph(e,t){if(xl)return e==="compositionend"||!xs&&Nd(e,t)?(e=xd(),xi=us=ma=null,xl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jd&&t.locale!=="ko"?null:t.data;default:return null}}var ex={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ed(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ex[e.type]:t==="textarea"}function zd(e,t,a,l){ml?hl?hl.push(l):hl=[l]:ml=l,t=or(t,"onChange"),0<t.length&&(a=new vi("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var on=null,dn=null;function tx(e){df(e,0)}function ji(e){var t=an(e);if(cd(t))return e}function Ad(e,t){if(e==="change")return t}var Td=!1;if(Jt){var gs;if(Jt){var bs="oninput"in document;if(!bs){var Rd=document.createElement("div");Rd.setAttribute("oninput","return;"),bs=typeof Rd.oninput=="function"}gs=bs}else gs=!1;Td=gs&&(!document.documentMode||9<document.documentMode)}function Cd(){on&&(on.detachEvent("onpropertychange",Md),dn=on=null)}function Md(e){if(e.propertyName==="value"&&ji(dn)){var t=[];zd(t,dn,e,cs(e)),hd(tx,t)}}function ax(e,t,a){e==="focusin"?(Cd(),on=t,dn=a,on.attachEvent("onpropertychange",Md)):e==="focusout"&&Cd()}function lx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ji(dn)}function nx(e,t){if(e==="click")return ji(t)}function ix(e,t){if(e==="input"||e==="change")return ji(t)}function rx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:rx;function un(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var i=a[l];if(!Wr.call(t,i)||!ht(e[i],t[i]))return!1}return!0}function Od(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _d(e,t){var a=Od(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Od(a)}}function Dd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Dd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ud(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=mi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=mi(e.document)}return t}function vs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var sx=Jt&&"documentMode"in document&&11>=document.documentMode,gl=null,ys=null,pn=null,js=!1;function Bd(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;js||gl==null||gl!==mi(l)||(l=gl,"selectionStart"in l&&vs(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),pn&&un(pn,l)||(pn=l,l=or(ys,"onSelect"),0<l.length&&(t=new vi("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=gl)))}function Ga(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var bl={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionrun:Ga("Transition","TransitionRun"),transitionstart:Ga("Transition","TransitionStart"),transitioncancel:Ga("Transition","TransitionCancel"),transitionend:Ga("Transition","TransitionEnd")},ks={},Hd={};Jt&&(Hd=document.createElement("div").style,"AnimationEvent"in window||(delete bl.animationend.animation,delete bl.animationiteration.animation,delete bl.animationstart.animation),"TransitionEvent"in window||delete bl.transitionend.transition);function Va(e){if(ks[e])return ks[e];if(!bl[e])return e;var t=bl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Hd)return ks[e]=t[a];return e}var Ld=Va("animationend"),Yd=Va("animationiteration"),qd=Va("animationstart"),cx=Va("transitionrun"),ox=Va("transitionstart"),dx=Va("transitioncancel"),Gd=Va("transitionend"),Vd=new Map,ws="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ws.push("scrollEnd");function Ot(e,t){Vd.set(e,t),Ya(t,[e])}var ki=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Nt=[],vl=0,Ns=0;function wi(){for(var e=vl,t=Ns=vl=0;t<e;){var a=Nt[t];Nt[t++]=null;var l=Nt[t];Nt[t++]=null;var i=Nt[t];Nt[t++]=null;var r=Nt[t];if(Nt[t++]=null,l!==null&&i!==null){var o=l.pending;o===null?i.next=i:(i.next=o.next,o.next=i),l.pending=i}r!==0&&Qd(a,i,r)}}function Ni(e,t,a,l){Nt[vl++]=e,Nt[vl++]=t,Nt[vl++]=a,Nt[vl++]=l,Ns|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Ss(e,t,a,l){return Ni(e,t,a,l),Si(e)}function Qa(e,t){return Ni(e,null,null,t),Si(e)}function Qd(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var i=!1,r=e.return;r!==null;)r.childLanes|=a,l=r.alternate,l!==null&&(l.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-mt(a),e=r.hiddenUpdates,l=e[i],l===null?e[i]=[t]:l.push(t),t.lane=a|536870912),r):null}function Si(e){if(50<_n)throw _n=0,_c=null,Error(d(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var yl={};function ux(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(e,t,a,l){return new ux(e,t,a,l)}function Es(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wt(e,t){var a=e.alternate;return a===null?(a=xt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Zd(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ei(e,t,a,l,i,r){var o=0;if(l=e,typeof e=="function")Es(e)&&(o=1);else if(typeof e=="string")o=xg(e,a,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case U:return e=xt(31,a,t,i),e.elementType=U,e.lanes=r,e;case G:return Za(a.children,i,r,t);case Y:o=8,i|=24;break;case L:return e=xt(12,a,t,i|2),e.elementType=L,e.lanes=r,e;case le:return e=xt(13,a,t,i),e.elementType=le,e.lanes=r,e;case $:return e=xt(19,a,t,i),e.elementType=$,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case q:o=10;break e;case X:o=9;break e;case K:o=11;break e;case I:o=14;break e;case je:o=16,l=null;break e}o=29,a=Error(d(130,e===null?"null":typeof e,"")),l=null}return t=xt(o,a,t,i),t.elementType=e,t.type=l,t.lanes=r,t}function Za(e,t,a,l){return e=xt(7,e,l,t),e.lanes=a,e}function zs(e,t,a){return e=xt(6,e,null,t),e.lanes=a,e}function Kd(e){var t=xt(18,null,null,0);return t.stateNode=e,t}function As(e,t,a){return t=xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Xd=new WeakMap;function St(e,t){if(typeof e=="object"&&e!==null){var a=Xd.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Ko(t)},Xd.set(e,t),t)}return{value:e,source:t,stack:Ko(t)}}var jl=[],kl=0,zi=null,fn=0,Et=[],zt=0,ha=null,Ht=1,Lt="";function $t(e,t){jl[kl++]=fn,jl[kl++]=zi,zi=e,fn=t}function Jd(e,t,a){Et[zt++]=Ht,Et[zt++]=Lt,Et[zt++]=ha,ha=e;var l=Ht;e=Lt;var i=32-mt(l)-1;l&=~(1<<i),a+=1;var r=32-mt(t)+i;if(30<r){var o=i-i%5;r=(l&(1<<o)-1).toString(32),l>>=o,i-=o,Ht=1<<32-mt(t)+i|a<<i|l,Lt=r+e}else Ht=1<<r|a<<i|l,Lt=e}function Ts(e){e.return!==null&&($t(e,1),Jd(e,1,0))}function Rs(e){for(;e===zi;)zi=jl[--kl],jl[kl]=null,fn=jl[--kl],jl[kl]=null;for(;e===ha;)ha=Et[--zt],Et[zt]=null,Lt=Et[--zt],Et[zt]=null,Ht=Et[--zt],Et[zt]=null}function Wd(e,t){Et[zt++]=Ht,Et[zt++]=Lt,Et[zt++]=ha,Ht=t.id,Lt=t.overflow,ha=e}var Fe=null,Ce=null,ge=!1,xa=null,At=!1,Cs=Error(d(519));function ga(e){var t=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw mn(St(t,e)),Cs}function $d(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[$e]=e,t[nt]=l,a){case"dialog":pe("cancel",t),pe("close",t);break;case"iframe":case"object":case"embed":pe("load",t);break;case"video":case"audio":for(a=0;a<Un.length;a++)pe(Un[a],t);break;case"source":pe("error",t);break;case"img":case"image":case"link":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"input":pe("invalid",t),od(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":pe("invalid",t);break;case"textarea":pe("invalid",t),ud(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||mf(t.textContent,a)?(l.popover!=null&&(pe("beforetoggle",t),pe("toggle",t)),l.onScroll!=null&&pe("scroll",t),l.onScrollEnd!=null&&pe("scrollend",t),l.onClick!=null&&(t.onclick=Xt),t=!0):t=!1,t||ga(e,!0)}function Fd(e){for(Fe=e.return;Fe;)switch(Fe.tag){case 5:case 31:case 13:At=!1;return;case 27:case 3:At=!0;return;default:Fe=Fe.return}}function wl(e){if(e!==Fe)return!1;if(!ge)return Fd(e),ge=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Wc(e.type,e.memoizedProps)),a=!a),a&&Ce&&ga(e),Fd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Ce=wf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Ce=wf(e)}else t===27?(t=Ce,Ca(e.type)?(e=eo,eo=null,Ce=e):Ce=t):Ce=Fe?Rt(e.stateNode.nextSibling):null;return!0}function Ka(){Ce=Fe=null,ge=!1}function Ms(){var e=xa;return e!==null&&(ot===null?ot=e:ot.push.apply(ot,e),xa=null),e}function mn(e){xa===null?xa=[e]:xa.push(e)}var Os=j(null),Xa=null,Ft=null;function ba(e,t,a){H(Os,t._currentValue),t._currentValue=a}function It(e){e._currentValue=Os.current,E(Os)}function _s(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Ds(e,t,a,l){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var o=i.child;r=r.firstContext;e:for(;r!==null;){var f=r;r=i;for(var v=0;v<t.length;v++)if(f.context===t[v]){r.lanes|=a,f=r.alternate,f!==null&&(f.lanes|=a),_s(r.return,a,e),l||(o=null);break e}r=f.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(d(341));o.lanes|=a,r=o.alternate,r!==null&&(r.lanes|=a),_s(o,a,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function Nl(e,t,a,l){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(d(387));if(o=o.memoizedProps,o!==null){var f=i.type;ht(i.pendingProps.value,o.value)||(e!==null?e.push(f):e=[f])}}else if(i===xe.current){if(o=i.alternate,o===null)throw Error(d(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(qn):e=[qn])}i=i.return}e!==null&&Ds(t,e,a,l),t.flags|=262144}function Ai(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ja(e){Xa=e,Ft=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ie(e){return Id(Xa,e)}function Ti(e,t){return Xa===null&&Ja(e),Id(e,t)}function Id(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Ft===null){if(e===null)throw Error(d(308));Ft=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ft=Ft.next=t;return a}var px=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},fx=s.unstable_scheduleCallback,mx=s.unstable_NormalPriority,Ye={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Us(){return{controller:new px,data:new Map,refCount:0}}function hn(e){e.refCount--,e.refCount===0&&fx(mx,function(){e.controller.abort()})}var xn=null,Bs=0,Sl=0,El=null;function hx(e,t){if(xn===null){var a=xn=[];Bs=0,Sl=Yc(),El={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Bs++,t.then(Pd,Pd),t}function Pd(){if(--Bs===0&&xn!==null){El!==null&&(El.status="fulfilled");var e=xn;xn=null,Sl=0,El=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function xx(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(l.status="rejected",l.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),l}var eu=C.S;C.S=function(e,t){Bp=pt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&hx(e,t),eu!==null&&eu(e,t)};var Wa=j(null);function Hs(){var e=Wa.current;return e!==null?e:Te.pooledCache}function Ri(e,t){t===null?H(Wa,Wa.current):H(Wa,t.pool)}function tu(){var e=Hs();return e===null?null:{parent:Ye._currentValue,pool:e}}var zl=Error(d(460)),Ls=Error(d(474)),Ci=Error(d(542)),Mi={then:function(){}};function au(e){return e=e.status,e==="fulfilled"||e==="rejected"}function lu(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Xt,Xt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,iu(e),e;default:if(typeof t.status=="string")t.then(Xt,Xt);else{if(e=Te,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=l}},function(l){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,iu(e),e}throw Fa=t,zl}}function $a(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Fa=a,zl):a}}var Fa=null;function nu(){if(Fa===null)throw Error(d(459));var e=Fa;return Fa=null,e}function iu(e){if(e===zl||e===Ci)throw Error(d(483))}var Al=null,gn=0;function Oi(e){var t=gn;return gn+=1,Al===null&&(Al=[]),lu(Al,e,t)}function bn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function _i(e,t){throw t.$$typeof===B?Error(d(525)):(e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ru(e){function t(N,y){if(e){var z=N.deletions;z===null?(N.deletions=[y],N.flags|=16):z.push(y)}}function a(N,y){if(!e)return null;for(;y!==null;)t(N,y),y=y.sibling;return null}function l(N){for(var y=new Map;N!==null;)N.key!==null?y.set(N.key,N):y.set(N.index,N),N=N.sibling;return y}function i(N,y){return N=Wt(N,y),N.index=0,N.sibling=null,N}function r(N,y,z){return N.index=z,e?(z=N.alternate,z!==null?(z=z.index,z<y?(N.flags|=67108866,y):z):(N.flags|=67108866,y)):(N.flags|=1048576,y)}function o(N){return e&&N.alternate===null&&(N.flags|=67108866),N}function f(N,y,z,_){return y===null||y.tag!==6?(y=zs(z,N.mode,_),y.return=N,y):(y=i(y,z),y.return=N,y)}function v(N,y,z,_){var ee=z.type;return ee===G?O(N,y,z.props.children,_,z.key):y!==null&&(y.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===je&&$a(ee)===y.type)?(y=i(y,z.props),bn(y,z),y.return=N,y):(y=Ei(z.type,z.key,z.props,null,N.mode,_),bn(y,z),y.return=N,y)}function T(N,y,z,_){return y===null||y.tag!==4||y.stateNode.containerInfo!==z.containerInfo||y.stateNode.implementation!==z.implementation?(y=As(z,N.mode,_),y.return=N,y):(y=i(y,z.children||[]),y.return=N,y)}function O(N,y,z,_,ee){return y===null||y.tag!==7?(y=Za(z,N.mode,_,ee),y.return=N,y):(y=i(y,z),y.return=N,y)}function D(N,y,z){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=zs(""+y,N.mode,z),y.return=N,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Z:return z=Ei(y.type,y.key,y.props,null,N.mode,z),bn(z,y),z.return=N,z;case S:return y=As(y,N.mode,z),y.return=N,y;case je:return y=$a(y),D(N,y,z)}if(ke(y)||W(y))return y=Za(y,N.mode,z,null),y.return=N,y;if(typeof y.then=="function")return D(N,Oi(y),z);if(y.$$typeof===q)return D(N,Ti(N,y),z);_i(N,y)}return null}function R(N,y,z,_){var ee=y!==null?y.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return ee!==null?null:f(N,y,""+z,_);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case Z:return z.key===ee?v(N,y,z,_):null;case S:return z.key===ee?T(N,y,z,_):null;case je:return z=$a(z),R(N,y,z,_)}if(ke(z)||W(z))return ee!==null?null:O(N,y,z,_,null);if(typeof z.then=="function")return R(N,y,Oi(z),_);if(z.$$typeof===q)return R(N,y,Ti(N,z),_);_i(N,z)}return null}function M(N,y,z,_,ee){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return N=N.get(z)||null,f(y,N,""+_,ee);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Z:return N=N.get(_.key===null?z:_.key)||null,v(y,N,_,ee);case S:return N=N.get(_.key===null?z:_.key)||null,T(y,N,_,ee);case je:return _=$a(_),M(N,y,z,_,ee)}if(ke(_)||W(_))return N=N.get(z)||null,O(y,N,_,ee,null);if(typeof _.then=="function")return M(N,y,z,Oi(_),ee);if(_.$$typeof===q)return M(N,y,z,Ti(y,_),ee);_i(y,_)}return null}function J(N,y,z,_){for(var ee=null,ve=null,F=y,de=y=0,he=null;F!==null&&de<z.length;de++){F.index>de?(he=F,F=null):he=F.sibling;var ye=R(N,F,z[de],_);if(ye===null){F===null&&(F=he);break}e&&F&&ye.alternate===null&&t(N,F),y=r(ye,y,de),ve===null?ee=ye:ve.sibling=ye,ve=ye,F=he}if(de===z.length)return a(N,F),ge&&$t(N,de),ee;if(F===null){for(;de<z.length;de++)F=D(N,z[de],_),F!==null&&(y=r(F,y,de),ve===null?ee=F:ve.sibling=F,ve=F);return ge&&$t(N,de),ee}for(F=l(F);de<z.length;de++)he=M(F,N,de,z[de],_),he!==null&&(e&&he.alternate!==null&&F.delete(he.key===null?de:he.key),y=r(he,y,de),ve===null?ee=he:ve.sibling=he,ve=he);return e&&F.forEach(function(Ua){return t(N,Ua)}),ge&&$t(N,de),ee}function te(N,y,z,_){if(z==null)throw Error(d(151));for(var ee=null,ve=null,F=y,de=y=0,he=null,ye=z.next();F!==null&&!ye.done;de++,ye=z.next()){F.index>de?(he=F,F=null):he=F.sibling;var Ua=R(N,F,ye.value,_);if(Ua===null){F===null&&(F=he);break}e&&F&&Ua.alternate===null&&t(N,F),y=r(Ua,y,de),ve===null?ee=Ua:ve.sibling=Ua,ve=Ua,F=he}if(ye.done)return a(N,F),ge&&$t(N,de),ee;if(F===null){for(;!ye.done;de++,ye=z.next())ye=D(N,ye.value,_),ye!==null&&(y=r(ye,y,de),ve===null?ee=ye:ve.sibling=ye,ve=ye);return ge&&$t(N,de),ee}for(F=l(F);!ye.done;de++,ye=z.next())ye=M(F,N,de,ye.value,_),ye!==null&&(e&&ye.alternate!==null&&F.delete(ye.key===null?de:ye.key),y=r(ye,y,de),ve===null?ee=ye:ve.sibling=ye,ve=ye);return e&&F.forEach(function(zg){return t(N,zg)}),ge&&$t(N,de),ee}function Ae(N,y,z,_){if(typeof z=="object"&&z!==null&&z.type===G&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case Z:e:{for(var ee=z.key;y!==null;){if(y.key===ee){if(ee=z.type,ee===G){if(y.tag===7){a(N,y.sibling),_=i(y,z.props.children),_.return=N,N=_;break e}}else if(y.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===je&&$a(ee)===y.type){a(N,y.sibling),_=i(y,z.props),bn(_,z),_.return=N,N=_;break e}a(N,y);break}else t(N,y);y=y.sibling}z.type===G?(_=Za(z.props.children,N.mode,_,z.key),_.return=N,N=_):(_=Ei(z.type,z.key,z.props,null,N.mode,_),bn(_,z),_.return=N,N=_)}return o(N);case S:e:{for(ee=z.key;y!==null;){if(y.key===ee)if(y.tag===4&&y.stateNode.containerInfo===z.containerInfo&&y.stateNode.implementation===z.implementation){a(N,y.sibling),_=i(y,z.children||[]),_.return=N,N=_;break e}else{a(N,y);break}else t(N,y);y=y.sibling}_=As(z,N.mode,_),_.return=N,N=_}return o(N);case je:return z=$a(z),Ae(N,y,z,_)}if(ke(z))return J(N,y,z,_);if(W(z)){if(ee=W(z),typeof ee!="function")throw Error(d(150));return z=ee.call(z),te(N,y,z,_)}if(typeof z.then=="function")return Ae(N,y,Oi(z),_);if(z.$$typeof===q)return Ae(N,y,Ti(N,z),_);_i(N,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,y!==null&&y.tag===6?(a(N,y.sibling),_=i(y,z),_.return=N,N=_):(a(N,y),_=zs(z,N.mode,_),_.return=N,N=_),o(N)):a(N,y)}return function(N,y,z,_){try{gn=0;var ee=Ae(N,y,z,_);return Al=null,ee}catch(F){if(F===zl||F===Ci)throw F;var ve=xt(29,F,null,N.mode);return ve.lanes=_,ve.return=N,ve}}}var Ia=ru(!0),su=ru(!1),va=!1;function Ys(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ja(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(we&2)!==0){var i=l.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),l.pending=t,t=Si(e),Qd(e,null,a),t}return Ni(e,l,t,a),Si(e)}function vn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Io(e,a)}}function Gs(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var i=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?i=r=o:r=r.next=o,a=a.next}while(a!==null);r===null?i=r=t:r=r.next=t}else i=r=t;a={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Vs=!1;function yn(){if(Vs){var e=El;if(e!==null)throw e}}function jn(e,t,a,l){Vs=!1;var i=e.updateQueue;va=!1;var r=i.firstBaseUpdate,o=i.lastBaseUpdate,f=i.shared.pending;if(f!==null){i.shared.pending=null;var v=f,T=v.next;v.next=null,o===null?r=T:o.next=T,o=v;var O=e.alternate;O!==null&&(O=O.updateQueue,f=O.lastBaseUpdate,f!==o&&(f===null?O.firstBaseUpdate=T:f.next=T,O.lastBaseUpdate=v))}if(r!==null){var D=i.baseState;o=0,O=T=v=null,f=r;do{var R=f.lane&-536870913,M=R!==f.lane;if(M?(me&R)===R:(l&R)===R){R!==0&&R===Sl&&(Vs=!0),O!==null&&(O=O.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var J=e,te=f;R=t;var Ae=a;switch(te.tag){case 1:if(J=te.payload,typeof J=="function"){D=J.call(Ae,D,R);break e}D=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=te.payload,R=typeof J=="function"?J.call(Ae,D,R):J,R==null)break e;D=w({},D,R);break e;case 2:va=!0}}R=f.callback,R!==null&&(e.flags|=64,M&&(e.flags|=8192),M=i.callbacks,M===null?i.callbacks=[R]:M.push(R))}else M={lane:R,tag:f.tag,payload:f.payload,callback:f.callback,next:null},O===null?(T=O=M,v=D):O=O.next=M,o|=R;if(f=f.next,f===null){if(f=i.shared.pending,f===null)break;M=f,f=M.next,M.next=null,i.lastBaseUpdate=M,i.shared.pending=null}}while(!0);O===null&&(v=D),i.baseState=v,i.firstBaseUpdate=T,i.lastBaseUpdate=O,r===null&&(i.shared.lanes=0),Ea|=o,e.lanes=o,e.memoizedState=D}}function cu(e,t){if(typeof e!="function")throw Error(d(191,e));e.call(t)}function ou(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)cu(a[e],t)}var Tl=j(null),Di=j(0);function du(e,t){e=sa,H(Di,e),H(Tl,t),sa=e|t.baseLanes}function Qs(){H(Di,sa),H(Tl,Tl.current)}function Zs(){sa=Di.current,E(Tl),E(Di)}var gt=j(null),Tt=null;function ka(e){var t=e.alternate;H(Be,Be.current&1),H(gt,e),Tt===null&&(t===null||Tl.current!==null||t.memoizedState!==null)&&(Tt=e)}function Ks(e){H(Be,Be.current),H(gt,e),Tt===null&&(Tt=e)}function uu(e){e.tag===22?(H(Be,Be.current),H(gt,e),Tt===null&&(Tt=e)):wa()}function wa(){H(Be,Be.current),H(gt,gt.current)}function bt(e){E(gt),Tt===e&&(Tt=null),E(Be)}var Be=j(0);function Ui(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ic(a)||Pc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Pt=0,ce=null,Ee=null,qe=null,Bi=!1,Rl=!1,Pa=!1,Hi=0,kn=0,Cl=null,gx=0;function De(){throw Error(d(321))}function Xs(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ht(e[a],t[a]))return!1;return!0}function Js(e,t,a,l,i,r){return Pt=r,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,C.H=e===null||e.memoizedState===null?Ju:oc,Pa=!1,r=a(l,i),Pa=!1,Rl&&(r=fu(t,a,l,i)),pu(e),r}function pu(e){C.H=Sn;var t=Ee!==null&&Ee.next!==null;if(Pt=0,qe=Ee=ce=null,Bi=!1,kn=0,Cl=null,t)throw Error(d(300));e===null||Ge||(e=e.dependencies,e!==null&&Ai(e)&&(Ge=!0))}function fu(e,t,a,l){ce=e;var i=0;do{if(Rl&&(Cl=null),kn=0,Rl=!1,25<=i)throw Error(d(301));if(i+=1,qe=Ee=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}C.H=Wu,r=t(a,l)}while(Rl);return r}function bx(){var e=C.H,t=e.useState()[0];return t=typeof t.then=="function"?wn(t):t,e=e.useState()[0],(Ee!==null?Ee.memoizedState:null)!==e&&(ce.flags|=1024),t}function Ws(){var e=Hi!==0;return Hi=0,e}function $s(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Fs(e){if(Bi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Bi=!1}Pt=0,qe=Ee=ce=null,Rl=!1,kn=Hi=0,Cl=null}function at(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?ce.memoizedState=qe=e:qe=qe.next=e,qe}function He(){if(Ee===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=qe===null?ce.memoizedState:qe.next;if(t!==null)qe=t,Ee=e;else{if(e===null)throw ce.alternate===null?Error(d(467)):Error(d(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},qe===null?ce.memoizedState=qe=e:qe=qe.next=e}return qe}function Li(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wn(e){var t=kn;return kn+=1,Cl===null&&(Cl=[]),e=lu(Cl,e,t),t=ce,(qe===null?t.memoizedState:qe.next)===null&&(t=t.alternate,C.H=t===null||t.memoizedState===null?Ju:oc),e}function Yi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return wn(e);if(e.$$typeof===q)return Ie(e)}throw Error(d(438,String(e)))}function Is(e){var t=null,a=ce.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ce.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Li(),ce.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=ae;return t.index++,a}function ea(e,t){return typeof t=="function"?t(e):t}function qi(e){var t=He();return Ps(t,Ee,e)}function Ps(e,t,a){var l=e.queue;if(l===null)throw Error(d(311));l.lastRenderedReducer=a;var i=e.baseQueue,r=l.pending;if(r!==null){if(i!==null){var o=i.next;i.next=r.next,r.next=o}t.baseQueue=i=r,l.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var f=o=null,v=null,T=t,O=!1;do{var D=T.lane&-536870913;if(D!==T.lane?(me&D)===D:(Pt&D)===D){var R=T.revertLane;if(R===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),D===Sl&&(O=!0);else if((Pt&R)===R){T=T.next,R===Sl&&(O=!0);continue}else D={lane:0,revertLane:T.revertLane,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},v===null?(f=v=D,o=r):v=v.next=D,ce.lanes|=R,Ea|=R;D=T.action,Pa&&a(r,D),r=T.hasEagerState?T.eagerState:a(r,D)}else R={lane:D,revertLane:T.revertLane,gesture:T.gesture,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},v===null?(f=v=R,o=r):v=v.next=R,ce.lanes|=D,Ea|=D;T=T.next}while(T!==null&&T!==t);if(v===null?o=r:v.next=f,!ht(r,e.memoizedState)&&(Ge=!0,O&&(a=El,a!==null)))throw a;e.memoizedState=r,e.baseState=o,e.baseQueue=v,l.lastRenderedState=r}return i===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function ec(e){var t=He(),a=t.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=e;var l=a.dispatch,i=a.pending,r=t.memoizedState;if(i!==null){a.pending=null;var o=i=i.next;do r=e(r,o.action),o=o.next;while(o!==i);ht(r,t.memoizedState)||(Ge=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,l]}function mu(e,t,a){var l=ce,i=He(),r=ge;if(r){if(a===void 0)throw Error(d(407));a=a()}else a=t();var o=!ht((Ee||i).memoizedState,a);if(o&&(i.memoizedState=a,Ge=!0),i=i.queue,lc(gu.bind(null,l,i,e),[e]),i.getSnapshot!==t||o||qe!==null&&qe.memoizedState.tag&1){if(l.flags|=2048,Ml(9,{destroy:void 0},xu.bind(null,l,i,a,t),null),Te===null)throw Error(d(349));r||(Pt&127)!==0||hu(l,t,a)}return a}function hu(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ce.updateQueue,t===null?(t=Li(),ce.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function xu(e,t,a,l){t.value=a,t.getSnapshot=l,bu(t)&&vu(e)}function gu(e,t,a){return a(function(){bu(t)&&vu(e)})}function bu(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ht(e,a)}catch{return!0}}function vu(e){var t=Qa(e,2);t!==null&&dt(t,e,2)}function tc(e){var t=at();if(typeof e=="function"){var a=e;if(e=a(),Pa){pa(!0);try{a()}finally{pa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:e},t}function yu(e,t,a,l){return e.baseState=a,Ps(e,Ee,typeof l=="function"?l:ea)}function vx(e,t,a,l,i){if(Qi(e))throw Error(d(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){r.listeners.push(o)}};C.T!==null?a(!0):r.isTransition=!1,l(r),a=t.pending,a===null?(r.next=t.pending=r,ju(t,r)):(r.next=a.next,t.pending=a.next=r)}}function ju(e,t){var a=t.action,l=t.payload,i=e.state;if(t.isTransition){var r=C.T,o={};C.T=o;try{var f=a(i,l),v=C.S;v!==null&&v(o,f),ku(e,t,f)}catch(T){ac(e,t,T)}finally{r!==null&&o.types!==null&&(r.types=o.types),C.T=r}}else try{r=a(i,l),ku(e,t,r)}catch(T){ac(e,t,T)}}function ku(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){wu(e,t,l)},function(l){return ac(e,t,l)}):wu(e,t,a)}function wu(e,t,a){t.status="fulfilled",t.value=a,Nu(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,ju(e,a)))}function ac(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Nu(t),t=t.next;while(t!==l)}e.action=null}function Nu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Su(e,t){return t}function Eu(e,t){if(ge){var a=Te.formState;if(a!==null){e:{var l=ce;if(ge){if(Ce){t:{for(var i=Ce,r=At;i.nodeType!==8;){if(!r){i=null;break t}if(i=Rt(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){Ce=Rt(i.nextSibling),l=i.data==="F!";break e}}ga(l)}l=!1}l&&(t=a[0])}}return a=at(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Su,lastRenderedState:t},a.queue=l,a=Zu.bind(null,ce,l),l.dispatch=a,l=tc(!1),r=cc.bind(null,ce,!1,l.queue),l=at(),i={state:t,dispatch:null,action:e,pending:null},l.queue=i,a=vx.bind(null,ce,i,r,a),i.dispatch=a,l.memoizedState=e,[t,a,!1]}function zu(e){var t=He();return Au(t,Ee,e)}function Au(e,t,a){if(t=Ps(e,t,Su)[0],e=qi(ea)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=wn(t)}catch(o){throw o===zl?Ci:o}else l=t;t=He();var i=t.queue,r=i.dispatch;return a!==t.memoizedState&&(ce.flags|=2048,Ml(9,{destroy:void 0},yx.bind(null,i,a),null)),[l,r,e]}function yx(e,t){e.action=t}function Tu(e){var t=He(),a=Ee;if(a!==null)return Au(t,a,e);He(),t=t.memoizedState,a=He();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Ml(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ce.updateQueue,t===null&&(t=Li(),ce.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Ru(){return He().memoizedState}function Gi(e,t,a,l){var i=at();ce.flags|=e,i.memoizedState=Ml(1|t,{destroy:void 0},a,l===void 0?null:l)}function Vi(e,t,a,l){var i=He();l=l===void 0?null:l;var r=i.memoizedState.inst;Ee!==null&&l!==null&&Xs(l,Ee.memoizedState.deps)?i.memoizedState=Ml(t,r,a,l):(ce.flags|=e,i.memoizedState=Ml(1|t,r,a,l))}function Cu(e,t){Gi(8390656,8,e,t)}function lc(e,t){Vi(2048,8,e,t)}function jx(e){ce.flags|=4;var t=ce.updateQueue;if(t===null)t=Li(),ce.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Mu(e){var t=He().memoizedState;return jx({ref:t,nextImpl:e}),function(){if((we&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}function Ou(e,t){return Vi(4,2,e,t)}function _u(e,t){return Vi(4,4,e,t)}function Du(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Uu(e,t,a){a=a!=null?a.concat([e]):null,Vi(4,4,Du.bind(null,t,e),a)}function nc(){}function Bu(e,t){var a=He();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Xs(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Hu(e,t){var a=He();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Xs(t,l[1]))return l[0];if(l=e(),Pa){pa(!0);try{e()}finally{pa(!1)}}return a.memoizedState=[l,t],l}function ic(e,t,a){return a===void 0||(Pt&1073741824)!==0&&(me&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Lp(),ce.lanes|=e,Ea|=e,a)}function Lu(e,t,a,l){return ht(a,t)?a:Tl.current!==null?(e=ic(e,a,l),ht(e,t)||(Ge=!0),e):(Pt&42)===0||(Pt&1073741824)!==0&&(me&261930)===0?(Ge=!0,e.memoizedState=a):(e=Lp(),ce.lanes|=e,Ea|=e,t)}function Yu(e,t,a,l,i){var r=V.p;V.p=r!==0&&8>r?r:8;var o=C.T,f={};C.T=f,cc(e,!1,t,a);try{var v=i(),T=C.S;if(T!==null&&T(f,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var O=xx(v,l);Nn(e,t,O,jt(e))}else Nn(e,t,l,jt(e))}catch(D){Nn(e,t,{then:function(){},status:"rejected",reason:D},jt())}finally{V.p=r,o!==null&&f.types!==null&&(o.types=f.types),C.T=o}}function kx(){}function rc(e,t,a,l){if(e.tag!==5)throw Error(d(476));var i=qu(e).queue;Yu(e,i,t,P,a===null?kx:function(){return Gu(e),a(l)})}function qu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:P},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Gu(e){var t=qu(e);t.next===null&&(t=e.alternate.memoizedState),Nn(e,t.next.queue,{},jt())}function sc(){return Ie(qn)}function Vu(){return He().memoizedState}function Qu(){return He().memoizedState}function wx(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=jt();e=ya(a);var l=ja(t,e,a);l!==null&&(dt(l,t,a),vn(l,t,a)),t={cache:Us()},e.payload=t;return}t=t.return}}function Nx(e,t,a){var l=jt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Qi(e)?Ku(t,a):(a=Ss(e,t,a,l),a!==null&&(dt(a,e,l),Xu(a,t,l)))}function Zu(e,t,a){var l=jt();Nn(e,t,a,l)}function Nn(e,t,a,l){var i={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Qi(e))Ku(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var o=t.lastRenderedState,f=r(o,a);if(i.hasEagerState=!0,i.eagerState=f,ht(f,o))return Ni(e,t,i,0),Te===null&&wi(),!1}catch{}if(a=Ss(e,t,i,l),a!==null)return dt(a,e,l),Xu(a,t,l),!0}return!1}function cc(e,t,a,l){if(l={lane:2,revertLane:Yc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Qi(e)){if(t)throw Error(d(479))}else t=Ss(e,a,l,2),t!==null&&dt(t,e,2)}function Qi(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function Ku(e,t){Rl=Bi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Xu(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Io(e,a)}}var Sn={readContext:Ie,use:Yi,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useLayoutEffect:De,useInsertionEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useSyncExternalStore:De,useId:De,useHostTransitionStatus:De,useFormState:De,useActionState:De,useOptimistic:De,useMemoCache:De,useCacheRefresh:De};Sn.useEffectEvent=De;var Ju={readContext:Ie,use:Yi,useCallback:function(e,t){return at().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:Cu,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Gi(4194308,4,Du.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Gi(4194308,4,e,t)},useInsertionEffect:function(e,t){Gi(4,2,e,t)},useMemo:function(e,t){var a=at();t=t===void 0?null:t;var l=e();if(Pa){pa(!0);try{e()}finally{pa(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=at();if(a!==void 0){var i=a(t);if(Pa){pa(!0);try{a(t)}finally{pa(!1)}}}else i=t;return l.memoizedState=l.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},l.queue=e,e=e.dispatch=Nx.bind(null,ce,e),[l.memoizedState,e]},useRef:function(e){var t=at();return e={current:e},t.memoizedState=e},useState:function(e){e=tc(e);var t=e.queue,a=Zu.bind(null,ce,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:nc,useDeferredValue:function(e,t){var a=at();return ic(a,e,t)},useTransition:function(){var e=tc(!1);return e=Yu.bind(null,ce,e.queue,!0,!1),at().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ce,i=at();if(ge){if(a===void 0)throw Error(d(407));a=a()}else{if(a=t(),Te===null)throw Error(d(349));(me&127)!==0||hu(l,t,a)}i.memoizedState=a;var r={value:a,getSnapshot:t};return i.queue=r,Cu(gu.bind(null,l,r,e),[e]),l.flags|=2048,Ml(9,{destroy:void 0},xu.bind(null,l,r,a,t),null),a},useId:function(){var e=at(),t=Te.identifierPrefix;if(ge){var a=Lt,l=Ht;a=(l&~(1<<32-mt(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Hi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=gx++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:sc,useFormState:Eu,useActionState:Eu,useOptimistic:function(e){var t=at();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=cc.bind(null,ce,!0,a),a.dispatch=t,[e,t]},useMemoCache:Is,useCacheRefresh:function(){return at().memoizedState=wx.bind(null,ce)},useEffectEvent:function(e){var t=at(),a={impl:e};return t.memoizedState=a,function(){if((we&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}},oc={readContext:Ie,use:Yi,useCallback:Bu,useContext:Ie,useEffect:lc,useImperativeHandle:Uu,useInsertionEffect:Ou,useLayoutEffect:_u,useMemo:Hu,useReducer:qi,useRef:Ru,useState:function(){return qi(ea)},useDebugValue:nc,useDeferredValue:function(e,t){var a=He();return Lu(a,Ee.memoizedState,e,t)},useTransition:function(){var e=qi(ea)[0],t=He().memoizedState;return[typeof e=="boolean"?e:wn(e),t]},useSyncExternalStore:mu,useId:Vu,useHostTransitionStatus:sc,useFormState:zu,useActionState:zu,useOptimistic:function(e,t){var a=He();return yu(a,Ee,e,t)},useMemoCache:Is,useCacheRefresh:Qu};oc.useEffectEvent=Mu;var Wu={readContext:Ie,use:Yi,useCallback:Bu,useContext:Ie,useEffect:lc,useImperativeHandle:Uu,useInsertionEffect:Ou,useLayoutEffect:_u,useMemo:Hu,useReducer:ec,useRef:Ru,useState:function(){return ec(ea)},useDebugValue:nc,useDeferredValue:function(e,t){var a=He();return Ee===null?ic(a,e,t):Lu(a,Ee.memoizedState,e,t)},useTransition:function(){var e=ec(ea)[0],t=He().memoizedState;return[typeof e=="boolean"?e:wn(e),t]},useSyncExternalStore:mu,useId:Vu,useHostTransitionStatus:sc,useFormState:Tu,useActionState:Tu,useOptimistic:function(e,t){var a=He();return Ee!==null?yu(a,Ee,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Is,useCacheRefresh:Qu};Wu.useEffectEvent=Mu;function dc(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:w({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var uc={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=jt(),i=ya(l);i.payload=t,a!=null&&(i.callback=a),t=ja(e,i,l),t!==null&&(dt(t,e,l),vn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=jt(),i=ya(l);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=ja(e,i,l),t!==null&&(dt(t,e,l),vn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=jt(),l=ya(a);l.tag=2,t!=null&&(l.callback=t),t=ja(e,l,a),t!==null&&(dt(t,e,a),vn(t,e,a))}};function $u(e,t,a,l,i,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,r,o):t.prototype&&t.prototype.isPureReactComponent?!un(a,l)||!un(i,r):!0}function Fu(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&uc.enqueueReplaceState(t,t.state,null)}function el(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=w({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function Iu(e){ki(e)}function Pu(e){console.error(e)}function ep(e){ki(e)}function Zi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function tp(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function pc(e,t,a){return a=ya(a),a.tag=3,a.payload={element:null},a.callback=function(){Zi(e,t)},a}function ap(e){return e=ya(e),e.tag=3,e}function lp(e,t,a,l){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var r=l.value;e.payload=function(){return i(r)},e.callback=function(){tp(t,a,l)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){tp(t,a,l),typeof i!="function"&&(za===null?za=new Set([this]):za.add(this));var f=l.stack;this.componentDidCatch(l.value,{componentStack:f!==null?f:""})})}function Sx(e,t,a,l,i){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&Nl(t,a,i,!0),a=gt.current,a!==null){switch(a.tag){case 31:case 13:return Tt===null?lr():a.alternate===null&&Ue===0&&(Ue=3),a.flags&=-257,a.flags|=65536,a.lanes=i,l===Mi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Bc(e,l,i)),!1;case 22:return a.flags|=65536,l===Mi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Bc(e,l,i)),!1}throw Error(d(435,a.tag))}return Bc(e,l,i),lr(),!1}if(ge)return t=gt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,l!==Cs&&(e=Error(d(422),{cause:l}),mn(St(e,a)))):(l!==Cs&&(t=Error(d(423),{cause:l}),mn(St(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,l=St(l,a),i=pc(e.stateNode,l,i),Gs(e,i),Ue!==4&&(Ue=2)),!1;var r=Error(d(520),{cause:l});if(r=St(r,a),On===null?On=[r]:On.push(r),Ue!==4&&(Ue=2),t===null)return!0;l=St(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=pc(a.stateNode,l,e),Gs(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(za===null||!za.has(r))))return a.flags|=65536,i&=-i,a.lanes|=i,i=ap(i),lp(i,e,a,l),Gs(a,i),!1}a=a.return}while(a!==null);return!1}var fc=Error(d(461)),Ge=!1;function Pe(e,t,a,l){t.child=e===null?su(t,null,a,l):Ia(t,e.child,a,l)}function np(e,t,a,l,i){a=a.render;var r=t.ref;if("ref"in l){var o={};for(var f in l)f!=="ref"&&(o[f]=l[f])}else o=l;return Ja(t),l=Js(e,t,a,o,r,i),f=Ws(),e!==null&&!Ge?($s(e,t,i),ta(e,t,i)):(ge&&f&&Ts(t),t.flags|=1,Pe(e,t,l,i),t.child)}function ip(e,t,a,l,i){if(e===null){var r=a.type;return typeof r=="function"&&!Es(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,rp(e,t,r,l,i)):(e=Ei(a.type,null,l,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!jc(e,i)){var o=r.memoizedProps;if(a=a.compare,a=a!==null?a:un,a(o,l)&&e.ref===t.ref)return ta(e,t,i)}return t.flags|=1,e=Wt(r,l),e.ref=t.ref,e.return=t,t.child=e}function rp(e,t,a,l,i){if(e!==null){var r=e.memoizedProps;if(un(r,l)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=l=r,jc(e,i))(e.flags&131072)!==0&&(Ge=!0);else return t.lanes=e.lanes,ta(e,t,i)}return mc(e,t,a,l,i)}function sp(e,t,a,l){var i=l.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(l=t.child=e.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;l=i&~r}else l=0,t.child=null;return cp(e,t,r,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ri(t,r!==null?r.cachePool:null),r!==null?du(t,r):Qs(),uu(t);else return l=t.lanes=536870912,cp(e,t,r!==null?r.baseLanes|a:a,a,l)}else r!==null?(Ri(t,r.cachePool),du(t,r),wa(),t.memoizedState=null):(e!==null&&Ri(t,null),Qs(),wa());return Pe(e,t,i,a),t.child}function En(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function cp(e,t,a,l,i){var r=Hs();return r=r===null?null:{parent:Ye._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&Ri(t,null),Qs(),uu(t),e!==null&&Nl(e,t,l,!0),t.childLanes=i,null}function Ki(e,t){return t=Ji({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function op(e,t,a){return Ia(t,e.child,null,a),e=Ki(t,t.pendingProps),e.flags|=2,bt(t),t.memoizedState=null,e}function Ex(e,t,a){var l=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ge){if(l.mode==="hidden")return e=Ki(t,l),t.lanes=536870912,En(null,e);if(Ks(t),(e=Ce)?(e=kf(e,At),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ha!==null?{id:Ht,overflow:Lt}:null,retryLane:536870912,hydrationErrors:null},a=Kd(e),a.return=t,t.child=a,Fe=t,Ce=null)):e=null,e===null)throw ga(t);return t.lanes=536870912,null}return Ki(t,l)}var r=e.memoizedState;if(r!==null){var o=r.dehydrated;if(Ks(t),i)if(t.flags&256)t.flags&=-257,t=op(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(d(558));else if(Ge||Nl(e,t,a,!1),i=(a&e.childLanes)!==0,Ge||i){if(l=Te,l!==null&&(o=Po(l,a),o!==0&&o!==r.retryLane))throw r.retryLane=o,Qa(e,o),dt(l,e,o),fc;lr(),t=op(e,t,a)}else e=r.treeContext,Ce=Rt(o.nextSibling),Fe=t,ge=!0,xa=null,At=!1,e!==null&&Wd(t,e),t=Ki(t,l),t.flags|=4096;return t}return e=Wt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Xi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function mc(e,t,a,l,i){return Ja(t),a=Js(e,t,a,l,void 0,i),l=Ws(),e!==null&&!Ge?($s(e,t,i),ta(e,t,i)):(ge&&l&&Ts(t),t.flags|=1,Pe(e,t,a,i),t.child)}function dp(e,t,a,l,i,r){return Ja(t),t.updateQueue=null,a=fu(t,l,a,i),pu(e),l=Ws(),e!==null&&!Ge?($s(e,t,r),ta(e,t,r)):(ge&&l&&Ts(t),t.flags|=1,Pe(e,t,a,r),t.child)}function up(e,t,a,l,i){if(Ja(t),t.stateNode===null){var r=yl,o=a.contextType;typeof o=="object"&&o!==null&&(r=Ie(o)),r=new a(l,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=uc,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=l,r.state=t.memoizedState,r.refs={},Ys(t),o=a.contextType,r.context=typeof o=="object"&&o!==null?Ie(o):yl,r.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(dc(t,a,o,l),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(o=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),o!==r.state&&uc.enqueueReplaceState(r,r.state,null),jn(t,l,r,i),yn(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){r=t.stateNode;var f=t.memoizedProps,v=el(a,f);r.props=v;var T=r.context,O=a.contextType;o=yl,typeof O=="object"&&O!==null&&(o=Ie(O));var D=a.getDerivedStateFromProps;O=typeof D=="function"||typeof r.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,O||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(f||T!==o)&&Fu(t,r,l,o),va=!1;var R=t.memoizedState;r.state=R,jn(t,l,r,i),yn(),T=t.memoizedState,f||R!==T||va?(typeof D=="function"&&(dc(t,a,D,l),T=t.memoizedState),(v=va||$u(t,a,v,l,R,T,o))?(O||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=T),r.props=l,r.state=T,r.context=o,l=v):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{r=t.stateNode,qs(e,t),o=t.memoizedProps,O=el(a,o),r.props=O,D=t.pendingProps,R=r.context,T=a.contextType,v=yl,typeof T=="object"&&T!==null&&(v=Ie(T)),f=a.getDerivedStateFromProps,(T=typeof f=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==D||R!==v)&&Fu(t,r,l,v),va=!1,R=t.memoizedState,r.state=R,jn(t,l,r,i),yn();var M=t.memoizedState;o!==D||R!==M||va||e!==null&&e.dependencies!==null&&Ai(e.dependencies)?(typeof f=="function"&&(dc(t,a,f,l),M=t.memoizedState),(O=va||$u(t,a,O,l,R,M,v)||e!==null&&e.dependencies!==null&&Ai(e.dependencies))?(T||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(l,M,v),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(l,M,v)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=M),r.props=l,r.state=M,r.context=v,l=O):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),l=!1)}return r=l,Xi(e,t),l=(t.flags&128)!==0,r||l?(r=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&l?(t.child=Ia(t,e.child,null,i),t.child=Ia(t,null,a,i)):Pe(e,t,a,i),t.memoizedState=r.state,e=t.child):e=ta(e,t,i),e}function pp(e,t,a,l){return Ka(),t.flags|=256,Pe(e,t,a,l),t.child}var hc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:tu()}}function gc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=yt),e}function fp(e,t,a){var l=t.pendingProps,i=!1,r=(t.flags&128)!==0,o;if((o=r)||(o=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(ge){if(i?ka(t):wa(),(e=Ce)?(e=kf(e,At),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ha!==null?{id:Ht,overflow:Lt}:null,retryLane:536870912,hydrationErrors:null},a=Kd(e),a.return=t,t.child=a,Fe=t,Ce=null)):e=null,e===null)throw ga(t);return Pc(e)?t.lanes=32:t.lanes=536870912,null}var f=l.children;return l=l.fallback,i?(wa(),i=t.mode,f=Ji({mode:"hidden",children:f},i),l=Za(l,i,a,null),f.return=t,l.return=t,f.sibling=l,t.child=f,l=t.child,l.memoizedState=xc(a),l.childLanes=gc(e,o,a),t.memoizedState=hc,En(null,l)):(ka(t),bc(t,f))}var v=e.memoizedState;if(v!==null&&(f=v.dehydrated,f!==null)){if(r)t.flags&256?(ka(t),t.flags&=-257,t=vc(e,t,a)):t.memoizedState!==null?(wa(),t.child=e.child,t.flags|=128,t=null):(wa(),f=l.fallback,i=t.mode,l=Ji({mode:"visible",children:l.children},i),f=Za(f,i,a,null),f.flags|=2,l.return=t,f.return=t,l.sibling=f,t.child=l,Ia(t,e.child,null,a),l=t.child,l.memoizedState=xc(a),l.childLanes=gc(e,o,a),t.memoizedState=hc,t=En(null,l));else if(ka(t),Pc(f)){if(o=f.nextSibling&&f.nextSibling.dataset,o)var T=o.dgst;o=T,l=Error(d(419)),l.stack="",l.digest=o,mn({value:l,source:null,stack:null}),t=vc(e,t,a)}else if(Ge||Nl(e,t,a,!1),o=(a&e.childLanes)!==0,Ge||o){if(o=Te,o!==null&&(l=Po(o,a),l!==0&&l!==v.retryLane))throw v.retryLane=l,Qa(e,l),dt(o,e,l),fc;Ic(f)||lr(),t=vc(e,t,a)}else Ic(f)?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,Ce=Rt(f.nextSibling),Fe=t,ge=!0,xa=null,At=!1,e!==null&&Wd(t,e),t=bc(t,l.children),t.flags|=4096);return t}return i?(wa(),f=l.fallback,i=t.mode,v=e.child,T=v.sibling,l=Wt(v,{mode:"hidden",children:l.children}),l.subtreeFlags=v.subtreeFlags&65011712,T!==null?f=Wt(T,f):(f=Za(f,i,a,null),f.flags|=2),f.return=t,l.return=t,l.sibling=f,t.child=l,En(null,l),l=t.child,f=e.child.memoizedState,f===null?f=xc(a):(i=f.cachePool,i!==null?(v=Ye._currentValue,i=i.parent!==v?{parent:v,pool:v}:i):i=tu(),f={baseLanes:f.baseLanes|a,cachePool:i}),l.memoizedState=f,l.childLanes=gc(e,o,a),t.memoizedState=hc,En(e.child,l)):(ka(t),a=e.child,e=a.sibling,a=Wt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function bc(e,t){return t=Ji({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ji(e,t){return e=xt(22,e,null,t),e.lanes=0,e}function vc(e,t,a){return Ia(t,e.child,null,a),e=bc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mp(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),_s(e.return,t,a)}function yc(e,t,a,l,i,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:i,treeForkCount:r}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=a,o.tailMode=i,o.treeForkCount=r)}function hp(e,t,a){var l=t.pendingProps,i=l.revealOrder,r=l.tail;l=l.children;var o=Be.current,f=(o&2)!==0;if(f?(o=o&1|2,t.flags|=128):o&=1,H(Be,o),Pe(e,t,l,a),l=ge?fn:0,!f&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mp(e,a,t);else if(e.tag===19)mp(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&Ui(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),yc(t,!1,i,a,r,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ui(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}yc(t,!0,a,null,r,l);break;case"together":yc(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function ta(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ea|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Nl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,a=Wt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Wt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ai(e)))}function zx(e,t,a){switch(t.tag){case 3:We(t,t.stateNode.containerInfo),ba(t,Ye,e.memoizedState.cache),Ka();break;case 27:case 5:Fl(t);break;case 4:We(t,t.stateNode.containerInfo);break;case 10:ba(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ks(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ka(t),t.flags|=128,null):(a&t.child.childLanes)!==0?fp(e,t,a):(ka(t),e=ta(e,t,a),e!==null?e.sibling:null);ka(t);break;case 19:var i=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(Nl(e,t,a,!1),l=(a&t.childLanes)!==0),i){if(l)return hp(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(Be,Be.current),l)break;return null;case 22:return t.lanes=0,sp(e,t,a,t.pendingProps);case 24:ba(t,Ye,e.memoizedState.cache)}return ta(e,t,a)}function xp(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ge=!0;else{if(!jc(e,a)&&(t.flags&128)===0)return Ge=!1,zx(e,t,a);Ge=(e.flags&131072)!==0}else Ge=!1,ge&&(t.flags&1048576)!==0&&Jd(t,fn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=$a(t.elementType),t.type=e,typeof e=="function")Es(e)?(l=el(e,l),t.tag=1,t=up(null,t,e,l,a)):(t.tag=0,t=mc(null,t,e,l,a));else{if(e!=null){var i=e.$$typeof;if(i===K){t.tag=11,t=np(null,t,e,l,a);break e}else if(i===I){t.tag=14,t=ip(null,t,e,l,a);break e}}throw t=Oe(e)||e,Error(d(306,t,""))}}return t;case 0:return mc(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,i=el(l,t.pendingProps),up(e,t,l,i,a);case 3:e:{if(We(t,t.stateNode.containerInfo),e===null)throw Error(d(387));l=t.pendingProps;var r=t.memoizedState;i=r.element,qs(e,t),jn(t,l,null,a);var o=t.memoizedState;if(l=o.cache,ba(t,Ye,l),l!==r.cache&&Ds(t,[Ye],a,!0),yn(),l=o.element,r.isDehydrated)if(r={element:l,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=pp(e,t,l,a);break e}else if(l!==i){i=St(Error(d(424)),t),mn(i),t=pp(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ce=Rt(e.firstChild),Fe=t,ge=!0,xa=null,At=!0,a=su(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ka(),l===i){t=ta(e,t,a);break e}Pe(e,t,l,a)}t=t.child}return t;case 26:return Xi(e,t),e===null?(a=Af(t.type,null,t.pendingProps,null))?t.memoizedState=a:ge||(a=t.type,e=t.pendingProps,l=dr(oe.current).createElement(a),l[$e]=t,l[nt]=e,et(l,a,e),Ke(l),t.stateNode=l):t.memoizedState=Af(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Fl(t),e===null&&ge&&(l=t.stateNode=Sf(t.type,t.pendingProps,oe.current),Fe=t,At=!0,i=Ce,Ca(t.type)?(eo=i,Ce=Rt(l.firstChild)):Ce=i),Pe(e,t,t.pendingProps.children,a),Xi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ge&&((i=l=Ce)&&(l=lg(l,t.type,t.pendingProps,At),l!==null?(t.stateNode=l,Fe=t,Ce=Rt(l.firstChild),At=!1,i=!0):i=!1),i||ga(t)),Fl(t),i=t.type,r=t.pendingProps,o=e!==null?e.memoizedProps:null,l=r.children,Wc(i,r)?l=null:o!==null&&Wc(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Js(e,t,bx,null,null,a),qn._currentValue=i),Xi(e,t),Pe(e,t,l,a),t.child;case 6:return e===null&&ge&&((e=a=Ce)&&(a=ng(a,t.pendingProps,At),a!==null?(t.stateNode=a,Fe=t,Ce=null,e=!0):e=!1),e||ga(t)),null;case 13:return fp(e,t,a);case 4:return We(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ia(t,null,l,a):Pe(e,t,l,a),t.child;case 11:return np(e,t,t.type,t.pendingProps,a);case 7:return Pe(e,t,t.pendingProps,a),t.child;case 8:return Pe(e,t,t.pendingProps.children,a),t.child;case 12:return Pe(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ba(t,t.type,l.value),Pe(e,t,l.children,a),t.child;case 9:return i=t.type._context,l=t.pendingProps.children,Ja(t),i=Ie(i),l=l(i),t.flags|=1,Pe(e,t,l,a),t.child;case 14:return ip(e,t,t.type,t.pendingProps,a);case 15:return rp(e,t,t.type,t.pendingProps,a);case 19:return hp(e,t,a);case 31:return Ex(e,t,a);case 22:return sp(e,t,a,t.pendingProps);case 24:return Ja(t),l=Ie(Ye),e===null?(i=Hs(),i===null&&(i=Te,r=Us(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=a),i=r),t.memoizedState={parent:l,cache:i},Ys(t),ba(t,Ye,i)):((e.lanes&a)!==0&&(qs(e,t),jn(t,null,null,a),yn()),i=e.memoizedState,r=t.memoizedState,i.parent!==l?(i={parent:l,cache:l},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ba(t,Ye,l)):(l=r.cache,ba(t,Ye,l),l!==i.cache&&Ds(t,[Ye],a,!0))),Pe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(d(156,t.tag))}function aa(e){e.flags|=4}function kc(e,t,a,l,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Vp())e.flags|=8192;else throw Fa=Mi,Ls}else e.flags&=-16777217}function gp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Of(t))if(Vp())e.flags|=8192;else throw Fa=Mi,Ls}function Wi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?$o():536870912,e.lanes|=t,Ul|=t)}function zn(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags&65011712,l|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Ax(e,t,a){var l=t.pendingProps;switch(Rs(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Me(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),It(Ye),Re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(wl(t)?aa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ms())),Me(t),null;case 26:var i=t.type,r=t.memoizedState;return e===null?(aa(t),r!==null?(Me(t),gp(t,r)):(Me(t),kc(t,i,null,l,a))):r?r!==e.memoizedState?(aa(t),Me(t),gp(t,r)):(Me(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&aa(t),Me(t),kc(t,i,e,l,a)),null;case 27:if(ri(t),a=oe.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&aa(t);else{if(!l){if(t.stateNode===null)throw Error(d(166));return Me(t),null}e=Q.current,wl(t)?$d(t):(e=Sf(i,l,a),t.stateNode=e,aa(t))}return Me(t),null;case 5:if(ri(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&aa(t);else{if(!l){if(t.stateNode===null)throw Error(d(166));return Me(t),null}if(r=Q.current,wl(t))$d(t);else{var o=dr(oe.current);switch(r){case 1:r=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:r=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":r=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":r=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":r=o.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof l.is=="string"?o.createElement("select",{is:l.is}):o.createElement("select"),l.multiple?r.multiple=!0:l.size&&(r.size=l.size);break;default:r=typeof l.is=="string"?o.createElement(i,{is:l.is}):o.createElement(i)}}r[$e]=t,r[nt]=l;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)r.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=r;e:switch(et(r,i,l),i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&aa(t)}}return Me(t),kc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&aa(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(d(166));if(e=oe.current,wl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,i=Fe,i!==null)switch(i.tag){case 27:case 5:l=i.memoizedProps}e[$e]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||mf(e.nodeValue,a)),e||ga(t,!0)}else e=dr(e).createTextNode(l),e[$e]=t,t.stateNode=e}return Me(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=wl(t),a!==null){if(e===null){if(!l)throw Error(d(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[$e]=t}else Ka(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),e=!1}else a=Ms(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(bt(t),t):(bt(t),null);if((t.flags&128)!==0)throw Error(d(558))}return Me(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=wl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!i)throw Error(d(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(d(317));i[$e]=t}else Ka(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),i=!1}else i=Ms(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(bt(t),t):(bt(t),null)}return bt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,i=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(i=l.alternate.memoizedState.cachePool.pool),r=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(r=l.memoizedState.cachePool.pool),r!==i&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Wi(t,t.updateQueue),Me(t),null);case 4:return Re(),e===null&&Qc(t.stateNode.containerInfo),Me(t),null;case 10:return It(t.type),Me(t),null;case 19:if(E(Be),l=t.memoizedState,l===null)return Me(t),null;if(i=(t.flags&128)!==0,r=l.rendering,r===null)if(i)zn(l,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Ui(e),r!==null){for(t.flags|=128,zn(l,!1),e=r.updateQueue,t.updateQueue=e,Wi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Zd(a,e),a=a.sibling;return H(Be,Be.current&1|2),ge&&$t(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&pt()>er&&(t.flags|=128,i=!0,zn(l,!1),t.lanes=4194304)}else{if(!i)if(e=Ui(r),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Wi(t,e),zn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!ge)return Me(t),null}else 2*pt()-l.renderingStartTime>er&&a!==536870912&&(t.flags|=128,i=!0,zn(l,!1),t.lanes=4194304);l.isBackwards?(r.sibling=t.child,t.child=r):(e=l.last,e!==null?e.sibling=r:t.child=r,l.last=r)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=pt(),e.sibling=null,a=Be.current,H(Be,i?a&1|2:a&1),ge&&$t(t,l.treeForkCount),e):(Me(t),null);case 22:case 23:return bt(t),Zs(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),a=t.updateQueue,a!==null&&Wi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&E(Wa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),It(Ye),Me(t),null;case 25:return null;case 30:return null}throw Error(d(156,t.tag))}function Tx(e,t){switch(Rs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return It(Ye),Re(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ri(t),null;case 31:if(t.memoizedState!==null){if(bt(t),t.alternate===null)throw Error(d(340));Ka()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(bt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));Ka()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return E(Be),null;case 4:return Re(),null;case 10:return It(t.type),null;case 22:case 23:return bt(t),Zs(),e!==null&&E(Wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return It(Ye),null;case 25:return null;default:return null}}function bp(e,t){switch(Rs(t),t.tag){case 3:It(Ye),Re();break;case 26:case 27:case 5:ri(t);break;case 4:Re();break;case 31:t.memoizedState!==null&&bt(t);break;case 13:bt(t);break;case 19:E(Be);break;case 10:It(t.type);break;case 22:case 23:bt(t),Zs(),e!==null&&E(Wa);break;case 24:It(Ye)}}function An(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){l=void 0;var r=a.create,o=a.inst;l=r(),o.destroy=l}a=a.next}while(a!==i)}}catch(f){Se(t,t.return,f)}}function Na(e,t,a){try{var l=t.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var r=i.next;l=r;do{if((l.tag&e)===e){var o=l.inst,f=o.destroy;if(f!==void 0){o.destroy=void 0,i=t;var v=a,T=f;try{T()}catch(O){Se(i,v,O)}}}l=l.next}while(l!==r)}}catch(O){Se(t,t.return,O)}}function vp(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{ou(t,a)}catch(l){Se(e,e.return,l)}}}function yp(e,t,a){a.props=el(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Se(e,t,l)}}function Tn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(i){Se(e,t,i)}}function Yt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(i){Se(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Se(e,t,i)}else a.current=null}function jp(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(i){Se(e,e.return,i)}}function wc(e,t,a){try{var l=e.stateNode;Fx(l,e.type,a,t),l[nt]=t}catch(i){Se(e,e.return,i)}}function kp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ca(e.type)||e.tag===4}function Nc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ca(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Xt));else if(l!==4&&(l===27&&Ca(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Sc(e,t,a),e=e.sibling;e!==null;)Sc(e,t,a),e=e.sibling}function $i(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Ca(e.type)&&(a=e.stateNode),e=e.child,e!==null))for($i(e,t,a),e=e.sibling;e!==null;)$i(e,t,a),e=e.sibling}function wp(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);et(t,l,a),t[$e]=e,t[nt]=a}catch(r){Se(e,e.return,r)}}var la=!1,Ve=!1,Ec=!1,Np=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function Rx(e,t){if(e=e.containerInfo,Xc=gr,e=Ud(e),vs(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var i=l.anchorOffset,r=l.focusNode;l=l.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var o=0,f=-1,v=-1,T=0,O=0,D=e,R=null;t:for(;;){for(var M;D!==a||i!==0&&D.nodeType!==3||(f=o+i),D!==r||l!==0&&D.nodeType!==3||(v=o+l),D.nodeType===3&&(o+=D.nodeValue.length),(M=D.firstChild)!==null;)R=D,D=M;for(;;){if(D===e)break t;if(R===a&&++T===i&&(f=o),R===r&&++O===l&&(v=o),(M=D.nextSibling)!==null)break;D=R,R=D.parentNode}D=M}a=f===-1||v===-1?null:{start:f,end:v}}else a=null}a=a||{start:0,end:0}}else a=null;for(Jc={focusedElem:e,selectionRange:a},gr=!1,Xe=t;Xe!==null;)if(t=Xe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Xe=e;else for(;Xe!==null;){switch(t=Xe,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,i=r.memoizedProps,r=r.memoizedState,l=a.stateNode;try{var J=el(a.type,i);e=l.getSnapshotBeforeUpdate(J,r),l.__reactInternalSnapshotBeforeUpdate=e}catch(te){Se(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Fc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Fc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=t.sibling,e!==null){e.return=t.return,Xe=e;break}Xe=t.return}}function Sp(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ia(e,a),l&4&&An(5,a);break;case 1:if(ia(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){Se(a,a.return,o)}else{var i=el(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Se(a,a.return,o)}}l&64&&vp(a),l&512&&Tn(a,a.return);break;case 3:if(ia(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{ou(e,t)}catch(o){Se(a,a.return,o)}}break;case 27:t===null&&l&4&&wp(a);case 26:case 5:ia(e,a),t===null&&l&4&&jp(a),l&512&&Tn(a,a.return);break;case 12:ia(e,a);break;case 31:ia(e,a),l&4&&Ap(e,a);break;case 13:ia(e,a),l&4&&Tp(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Lx.bind(null,a),ig(e,a))));break;case 22:if(l=a.memoizedState!==null||la,!l){t=t!==null&&t.memoizedState!==null||Ve,i=la;var r=Ve;la=l,(Ve=t)&&!r?ra(e,a,(a.subtreeFlags&8772)!==0):ia(e,a),la=i,Ve=r}break;case 30:break;default:ia(e,a)}}function Ep(e){var t=e.alternate;t!==null&&(e.alternate=null,Ep(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&as(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var _e=null,rt=!1;function na(e,t,a){for(a=a.child;a!==null;)zp(e,t,a),a=a.sibling}function zp(e,t,a){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(Il,a)}catch{}switch(a.tag){case 26:Ve||Yt(a,t),na(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ve||Yt(a,t);var l=_e,i=rt;Ca(a.type)&&(_e=a.stateNode,rt=!1),na(e,t,a),Hn(a.stateNode),_e=l,rt=i;break;case 5:Ve||Yt(a,t);case 6:if(l=_e,i=rt,_e=null,na(e,t,a),_e=l,rt=i,_e!==null)if(rt)try{(_e.nodeType===9?_e.body:_e.nodeName==="HTML"?_e.ownerDocument.body:_e).removeChild(a.stateNode)}catch(r){Se(a,t,r)}else try{_e.removeChild(a.stateNode)}catch(r){Se(a,t,r)}break;case 18:_e!==null&&(rt?(e=_e,yf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ql(e)):yf(_e,a.stateNode));break;case 4:l=_e,i=rt,_e=a.stateNode.containerInfo,rt=!0,na(e,t,a),_e=l,rt=i;break;case 0:case 11:case 14:case 15:Na(2,a,t),Ve||Na(4,a,t),na(e,t,a);break;case 1:Ve||(Yt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&yp(a,t,l)),na(e,t,a);break;case 21:na(e,t,a);break;case 22:Ve=(l=Ve)||a.memoizedState!==null,na(e,t,a),Ve=l;break;default:na(e,t,a)}}function Ap(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ql(e)}catch(a){Se(t,t.return,a)}}}function Tp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ql(e)}catch(a){Se(t,t.return,a)}}function Cx(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Np),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Np),t;default:throw Error(d(435,e.tag))}}function Fi(e,t){var a=Cx(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var i=Yx.bind(null,e,l);l.then(i,i)}})}function st(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var i=a[l],r=e,o=t,f=o;e:for(;f!==null;){switch(f.tag){case 27:if(Ca(f.type)){_e=f.stateNode,rt=!1;break e}break;case 5:_e=f.stateNode,rt=!1;break e;case 3:case 4:_e=f.stateNode.containerInfo,rt=!0;break e}f=f.return}if(_e===null)throw Error(d(160));zp(r,o,i),_e=null,rt=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Rp(t,e),t=t.sibling}var _t=null;function Rp(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:st(t,e),ct(e),l&4&&(Na(3,e,e.return),An(3,e),Na(5,e,e.return));break;case 1:st(t,e),ct(e),l&512&&(Ve||a===null||Yt(a,a.return)),l&64&&la&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var i=_t;if(st(t,e),ct(e),l&512&&(Ve||a===null||Yt(a,a.return)),l&4){var r=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(l){case"title":r=i.getElementsByTagName("title")[0],(!r||r[tn]||r[$e]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(l),i.head.insertBefore(r,i.querySelector("head > title"))),et(r,l,a),r[$e]=e,Ke(r),l=r;break e;case"link":var o=Cf("link","href",i).get(l+(a.href||""));if(o){for(var f=0;f<o.length;f++)if(r=o[f],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(f,1);break t}}r=i.createElement(l),et(r,l,a),i.head.appendChild(r);break;case"meta":if(o=Cf("meta","content",i).get(l+(a.content||""))){for(f=0;f<o.length;f++)if(r=o[f],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(f,1);break t}}r=i.createElement(l),et(r,l,a),i.head.appendChild(r);break;default:throw Error(d(468,l))}r[$e]=e,Ke(r),l=r}e.stateNode=l}else Mf(i,e.type,e.stateNode);else e.stateNode=Rf(i,l,e.memoizedProps);else r!==l?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,l===null?Mf(i,e.type,e.stateNode):Rf(i,l,e.memoizedProps)):l===null&&e.stateNode!==null&&wc(e,e.memoizedProps,a.memoizedProps)}break;case 27:st(t,e),ct(e),l&512&&(Ve||a===null||Yt(a,a.return)),a!==null&&l&4&&wc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(st(t,e),ct(e),l&512&&(Ve||a===null||Yt(a,a.return)),e.flags&32){i=e.stateNode;try{fl(i,"")}catch(J){Se(e,e.return,J)}}l&4&&e.stateNode!=null&&(i=e.memoizedProps,wc(e,i,a!==null?a.memoizedProps:i)),l&1024&&(Ec=!0);break;case 6:if(st(t,e),ct(e),l&4){if(e.stateNode===null)throw Error(d(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(J){Se(e,e.return,J)}}break;case 3:if(fr=null,i=_t,_t=ur(t.containerInfo),st(t,e),_t=i,ct(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Ql(t.containerInfo)}catch(J){Se(e,e.return,J)}Ec&&(Ec=!1,Cp(e));break;case 4:l=_t,_t=ur(e.stateNode.containerInfo),st(t,e),ct(e),_t=l;break;case 12:st(t,e),ct(e);break;case 31:st(t,e),ct(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Fi(e,l)));break;case 13:st(t,e),ct(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Pi=pt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Fi(e,l)));break;case 22:i=e.memoizedState!==null;var v=a!==null&&a.memoizedState!==null,T=la,O=Ve;if(la=T||i,Ve=O||v,st(t,e),Ve=O,la=T,ct(e),l&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||v||la||Ve||tl(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){v=a=t;try{if(r=v.stateNode,i)o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{f=v.stateNode;var D=v.memoizedProps.style,R=D!=null&&D.hasOwnProperty("display")?D.display:null;f.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(J){Se(v,v.return,J)}}}else if(t.tag===6){if(a===null){v=t;try{v.stateNode.nodeValue=i?"":v.memoizedProps}catch(J){Se(v,v.return,J)}}}else if(t.tag===18){if(a===null){v=t;try{var M=v.stateNode;i?jf(M,!0):jf(v.stateNode,!1)}catch(J){Se(v,v.return,J)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Fi(e,a))));break;case 19:st(t,e),ct(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Fi(e,l)));break;case 30:break;case 21:break;default:st(t,e),ct(e)}}function ct(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(kp(l)){a=l;break}l=l.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var i=a.stateNode,r=Nc(e);$i(e,r,i);break;case 5:var o=a.stateNode;a.flags&32&&(fl(o,""),a.flags&=-33);var f=Nc(e);$i(e,f,o);break;case 3:case 4:var v=a.stateNode.containerInfo,T=Nc(e);Sc(e,T,v);break;default:throw Error(d(161))}}catch(O){Se(e,e.return,O)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Cp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Cp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ia(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Sp(e,t.alternate,t),t=t.sibling}function tl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Na(4,t,t.return),tl(t);break;case 1:Yt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&yp(t,t.return,a),tl(t);break;case 27:Hn(t.stateNode);case 26:case 5:Yt(t,t.return),tl(t);break;case 22:t.memoizedState===null&&tl(t);break;case 30:tl(t);break;default:tl(t)}e=e.sibling}}function ra(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,i=e,r=t,o=r.flags;switch(r.tag){case 0:case 11:case 15:ra(i,r,a),An(4,r);break;case 1:if(ra(i,r,a),l=r,i=l.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(T){Se(l,l.return,T)}if(l=r,i=l.updateQueue,i!==null){var f=l.stateNode;try{var v=i.shared.hiddenCallbacks;if(v!==null)for(i.shared.hiddenCallbacks=null,i=0;i<v.length;i++)cu(v[i],f)}catch(T){Se(l,l.return,T)}}a&&o&64&&vp(r),Tn(r,r.return);break;case 27:wp(r);case 26:case 5:ra(i,r,a),a&&l===null&&o&4&&jp(r),Tn(r,r.return);break;case 12:ra(i,r,a);break;case 31:ra(i,r,a),a&&o&4&&Ap(i,r);break;case 13:ra(i,r,a),a&&o&4&&Tp(i,r);break;case 22:r.memoizedState===null&&ra(i,r,a),Tn(r,r.return);break;case 30:break;default:ra(i,r,a)}t=t.sibling}}function zc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&hn(a))}function Ac(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&hn(e))}function Dt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Mp(e,t,a,l),t=t.sibling}function Mp(e,t,a,l){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dt(e,t,a,l),i&2048&&An(9,t);break;case 1:Dt(e,t,a,l);break;case 3:Dt(e,t,a,l),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&hn(e)));break;case 12:if(i&2048){Dt(e,t,a,l),e=t.stateNode;try{var r=t.memoizedProps,o=r.id,f=r.onPostCommit;typeof f=="function"&&f(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){Se(t,t.return,v)}}else Dt(e,t,a,l);break;case 31:Dt(e,t,a,l);break;case 13:Dt(e,t,a,l);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?r._visibility&2?Dt(e,t,a,l):Rn(e,t):r._visibility&2?Dt(e,t,a,l):(r._visibility|=2,Ol(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),i&2048&&zc(o,t);break;case 24:Dt(e,t,a,l),i&2048&&Ac(t.alternate,t);break;default:Dt(e,t,a,l)}}function Ol(e,t,a,l,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,o=t,f=a,v=l,T=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(r,o,f,v,i),An(8,o);break;case 23:break;case 22:var O=o.stateNode;o.memoizedState!==null?O._visibility&2?Ol(r,o,f,v,i):Rn(r,o):(O._visibility|=2,Ol(r,o,f,v,i)),i&&T&2048&&zc(o.alternate,o);break;case 24:Ol(r,o,f,v,i),i&&T&2048&&Ac(o.alternate,o);break;default:Ol(r,o,f,v,i)}t=t.sibling}}function Rn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,i=l.flags;switch(l.tag){case 22:Rn(a,l),i&2048&&zc(l.alternate,l);break;case 24:Rn(a,l),i&2048&&Ac(l.alternate,l);break;default:Rn(a,l)}t=t.sibling}}var Cn=8192;function _l(e,t,a){if(e.subtreeFlags&Cn)for(e=e.child;e!==null;)Op(e,t,a),e=e.sibling}function Op(e,t,a){switch(e.tag){case 26:_l(e,t,a),e.flags&Cn&&e.memoizedState!==null&&gg(a,_t,e.memoizedState,e.memoizedProps);break;case 5:_l(e,t,a);break;case 3:case 4:var l=_t;_t=ur(e.stateNode.containerInfo),_l(e,t,a),_t=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Cn,Cn=16777216,_l(e,t,a),Cn=l):_l(e,t,a));break;default:_l(e,t,a)}}function _p(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Mn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Xe=l,Up(l,e)}_p(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Dp(e),e=e.sibling}function Dp(e){switch(e.tag){case 0:case 11:case 15:Mn(e),e.flags&2048&&Na(9,e,e.return);break;case 3:Mn(e);break;case 12:Mn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ii(e)):Mn(e);break;default:Mn(e)}}function Ii(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Xe=l,Up(l,e)}_p(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Na(8,t,t.return),Ii(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ii(t));break;default:Ii(t)}e=e.sibling}}function Up(e,t){for(;Xe!==null;){var a=Xe;switch(a.tag){case 0:case 11:case 15:Na(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:hn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Xe=l;else e:for(a=e;Xe!==null;){l=Xe;var i=l.sibling,r=l.return;if(Ep(l),l===a){Xe=null;break e}if(i!==null){i.return=r,Xe=i;break e}Xe=r}}}var Mx={getCacheForType:function(e){var t=Ie(Ye),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ie(Ye).controller.signal}},Ox=typeof WeakMap=="function"?WeakMap:Map,we=0,Te=null,ue=null,me=0,Ne=0,vt=null,Sa=!1,Dl=!1,Tc=!1,sa=0,Ue=0,Ea=0,al=0,Rc=0,yt=0,Ul=0,On=null,ot=null,Cc=!1,Pi=0,Bp=0,er=1/0,tr=null,za=null,Qe=0,Aa=null,Bl=null,ca=0,Mc=0,Oc=null,Hp=null,_n=0,_c=null;function jt(){return(we&2)!==0&&me!==0?me&-me:C.T!==null?Yc():ed()}function Lp(){if(yt===0)if((me&536870912)===0||ge){var e=oi;oi<<=1,(oi&3932160)===0&&(oi=262144),yt=e}else yt=536870912;return e=gt.current,e!==null&&(e.flags|=32),yt}function dt(e,t,a){(e===Te&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&(Hl(e,0),Ta(e,me,yt,!1)),en(e,a),((we&2)===0||e!==Te)&&(e===Te&&((we&2)===0&&(al|=a),Ue===4&&Ta(e,me,yt,!1)),qt(e))}function Yp(e,t,a){if((we&6)!==0)throw Error(d(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Pl(e,t),i=l?Ux(e,t):Uc(e,t,!0),r=l;do{if(i===0){Dl&&!l&&Ta(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!_x(a)){i=Uc(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var f=e;i=On;var v=f.current.memoizedState.isDehydrated;if(v&&(Hl(f,o).flags|=256),o=Uc(f,o,!1),o!==2){if(Tc&&!v){f.errorRecoveryDisabledLanes|=r,al|=r,i=4;break e}r=ot,ot=i,r!==null&&(ot===null?ot=r:ot.push.apply(ot,r))}i=o}if(r=!1,i!==2)continue}}if(i===1){Hl(e,0),Ta(e,t,0,!0);break}e:{switch(l=e,r=i,r){case 0:case 1:throw Error(d(345));case 4:if((t&4194048)!==t)break;case 6:Ta(l,t,yt,!Sa);break e;case 2:ot=null;break;case 3:case 5:break;default:throw Error(d(329))}if((t&62914560)===t&&(i=Pi+300-pt(),10<i)){if(Ta(l,t,yt,!Sa),ui(l,0,!0)!==0)break e;ca=t,l.timeoutHandle=bf(qp.bind(null,l,a,ot,tr,Cc,t,yt,al,Ul,Sa,r,"Throttled",-0,0),i);break e}qp(l,a,ot,tr,Cc,t,yt,al,Ul,Sa,r,null,-0,0)}}break}while(!0);qt(e)}function qp(e,t,a,l,i,r,o,f,v,T,O,D,R,M){if(e.timeoutHandle=-1,D=t.subtreeFlags,D&8192||(D&16785408)===16785408){D={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xt},Op(t,r,D);var J=(r&62914560)===r?Pi-pt():(r&4194048)===r?Bp-pt():0;if(J=bg(D,J),J!==null){ca=r,e.cancelPendingCommit=J(Wp.bind(null,e,t,r,a,l,i,o,f,v,O,D,null,R,M)),Ta(e,r,o,!T);return}}Wp(e,t,r,a,l,i,o,f,v)}function _x(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var i=a[l],r=i.getSnapshot;i=i.value;try{if(!ht(r(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ta(e,t,a,l){t&=~Rc,t&=~al,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var i=t;0<i;){var r=31-mt(i),o=1<<r;l[r]=-1,i&=~o}a!==0&&Fo(e,a,t)}function ar(){return(we&6)===0?(Dn(0),!1):!0}function Dc(){if(ue!==null){if(Ne===0)var e=ue.return;else e=ue,Ft=Xa=null,Fs(e),Al=null,gn=0,e=ue;for(;e!==null;)bp(e.alternate,e),e=e.return;ue=null}}function Hl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,eg(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ca=0,Dc(),Te=e,ue=a=Wt(e.current,null),me=t,Ne=0,vt=null,Sa=!1,Dl=Pl(e,t),Tc=!1,Ul=yt=Rc=al=Ea=Ue=0,ot=On=null,Cc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var i=31-mt(l),r=1<<i;t|=e[i],l&=~r}return sa=t,wi(),a}function Gp(e,t){ce=null,C.H=Sn,t===zl||t===Ci?(t=nu(),Ne=3):t===Ls?(t=nu(),Ne=4):Ne=t===fc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,vt=t,ue===null&&(Ue=1,Zi(e,St(t,e.current)))}function Vp(){var e=gt.current;return e===null?!0:(me&4194048)===me?Tt===null:(me&62914560)===me||(me&536870912)!==0?e===Tt:!1}function Qp(){var e=C.H;return C.H=Sn,e===null?Sn:e}function Zp(){var e=C.A;return C.A=Mx,e}function lr(){Ue=4,Sa||(me&4194048)!==me&&gt.current!==null||(Dl=!0),(Ea&134217727)===0&&(al&134217727)===0||Te===null||Ta(Te,me,yt,!1)}function Uc(e,t,a){var l=we;we|=2;var i=Qp(),r=Zp();(Te!==e||me!==t)&&(tr=null,Hl(e,t)),t=!1;var o=Ue;e:do try{if(Ne!==0&&ue!==null){var f=ue,v=vt;switch(Ne){case 8:Dc(),o=6;break e;case 3:case 2:case 9:case 6:gt.current===null&&(t=!0);var T=Ne;if(Ne=0,vt=null,Ll(e,f,v,T),a&&Dl){o=0;break e}break;default:T=Ne,Ne=0,vt=null,Ll(e,f,v,T)}}Dx(),o=Ue;break}catch(O){Gp(e,O)}while(!0);return t&&e.shellSuspendCounter++,Ft=Xa=null,we=l,C.H=i,C.A=r,ue===null&&(Te=null,me=0,wi()),o}function Dx(){for(;ue!==null;)Kp(ue)}function Ux(e,t){var a=we;we|=2;var l=Qp(),i=Zp();Te!==e||me!==t?(tr=null,er=pt()+500,Hl(e,t)):Dl=Pl(e,t);e:do try{if(Ne!==0&&ue!==null){t=ue;var r=vt;t:switch(Ne){case 1:Ne=0,vt=null,Ll(e,t,r,1);break;case 2:case 9:if(au(r)){Ne=0,vt=null,Xp(t);break}t=function(){Ne!==2&&Ne!==9||Te!==e||(Ne=7),qt(e)},r.then(t,t);break e;case 3:Ne=7;break e;case 4:Ne=5;break e;case 7:au(r)?(Ne=0,vt=null,Xp(t)):(Ne=0,vt=null,Ll(e,t,r,7));break;case 5:var o=null;switch(ue.tag){case 26:o=ue.memoizedState;case 5:case 27:var f=ue;if(o?Of(o):f.stateNode.complete){Ne=0,vt=null;var v=f.sibling;if(v!==null)ue=v;else{var T=f.return;T!==null?(ue=T,nr(T)):ue=null}break t}}Ne=0,vt=null,Ll(e,t,r,5);break;case 6:Ne=0,vt=null,Ll(e,t,r,6);break;case 8:Dc(),Ue=6;break e;default:throw Error(d(462))}}Bx();break}catch(O){Gp(e,O)}while(!0);return Ft=Xa=null,C.H=l,C.A=i,we=a,ue!==null?0:(Te=null,me=0,wi(),Ue)}function Bx(){for(;ue!==null&&!rh();)Kp(ue)}function Kp(e){var t=xp(e.alternate,e,sa);e.memoizedProps=e.pendingProps,t===null?nr(e):ue=t}function Xp(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=dp(a,t,t.pendingProps,t.type,void 0,me);break;case 11:t=dp(a,t,t.pendingProps,t.type.render,t.ref,me);break;case 5:Fs(t);default:bp(a,t),t=ue=Zd(t,sa),t=xp(a,t,sa)}e.memoizedProps=e.pendingProps,t===null?nr(e):ue=t}function Ll(e,t,a,l){Ft=Xa=null,Fs(t),Al=null,gn=0;var i=t.return;try{if(Sx(e,i,t,a,me)){Ue=1,Zi(e,St(a,e.current)),ue=null;return}}catch(r){if(i!==null)throw ue=i,r;Ue=1,Zi(e,St(a,e.current)),ue=null;return}t.flags&32768?(ge||l===1?e=!0:Dl||(me&536870912)!==0?e=!1:(Sa=e=!0,(l===2||l===9||l===3||l===6)&&(l=gt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Jp(t,e)):nr(t)}function nr(e){var t=e;do{if((t.flags&32768)!==0){Jp(t,Sa);return}e=t.return;var a=Ax(t.alternate,t,sa);if(a!==null){ue=a;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);Ue===0&&(Ue=5)}function Jp(e,t){do{var a=Tx(e.alternate,e);if(a!==null){a.flags&=32767,ue=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ue=e;return}ue=e=a}while(e!==null);Ue=6,ue=null}function Wp(e,t,a,l,i,r,o,f,v){e.cancelPendingCommit=null;do ir();while(Qe!==0);if((we&6)!==0)throw Error(d(327));if(t!==null){if(t===e.current)throw Error(d(177));if(r=t.lanes|t.childLanes,r|=Ns,xh(e,a,r,o,f,v),e===Te&&(ue=Te=null,me=0),Bl=t,Aa=e,ca=a,Mc=r,Oc=i,Hp=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,qx(si,function(){return ef(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=C.T,C.T=null,i=V.p,V.p=2,o=we,we|=4;try{Rx(e,t,a)}finally{we=o,V.p=i,C.T=l}}Qe=1,$p(),Fp(),Ip()}}function $p(){if(Qe===1){Qe=0;var e=Aa,t=Bl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=C.T,C.T=null;var l=V.p;V.p=2;var i=we;we|=4;try{Rp(t,e);var r=Jc,o=Ud(e.containerInfo),f=r.focusedElem,v=r.selectionRange;if(o!==f&&f&&f.ownerDocument&&Dd(f.ownerDocument.documentElement,f)){if(v!==null&&vs(f)){var T=v.start,O=v.end;if(O===void 0&&(O=T),"selectionStart"in f)f.selectionStart=T,f.selectionEnd=Math.min(O,f.value.length);else{var D=f.ownerDocument||document,R=D&&D.defaultView||window;if(R.getSelection){var M=R.getSelection(),J=f.textContent.length,te=Math.min(v.start,J),Ae=v.end===void 0?te:Math.min(v.end,J);!M.extend&&te>Ae&&(o=Ae,Ae=te,te=o);var N=_d(f,te),y=_d(f,Ae);if(N&&y&&(M.rangeCount!==1||M.anchorNode!==N.node||M.anchorOffset!==N.offset||M.focusNode!==y.node||M.focusOffset!==y.offset)){var z=D.createRange();z.setStart(N.node,N.offset),M.removeAllRanges(),te>Ae?(M.addRange(z),M.extend(y.node,y.offset)):(z.setEnd(y.node,y.offset),M.addRange(z))}}}}for(D=[],M=f;M=M.parentNode;)M.nodeType===1&&D.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<D.length;f++){var _=D[f];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}gr=!!Xc,Jc=Xc=null}finally{we=i,V.p=l,C.T=a}}e.current=t,Qe=2}}function Fp(){if(Qe===2){Qe=0;var e=Aa,t=Bl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=C.T,C.T=null;var l=V.p;V.p=2;var i=we;we|=4;try{Sp(e,t.alternate,t)}finally{we=i,V.p=l,C.T=a}}Qe=3}}function Ip(){if(Qe===4||Qe===3){Qe=0,sh();var e=Aa,t=Bl,a=ca,l=Hp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Qe=5:(Qe=0,Bl=Aa=null,Pp(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(za=null),es(a),t=t.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(Il,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=C.T,i=V.p,V.p=2,C.T=null;try{for(var r=e.onRecoverableError,o=0;o<l.length;o++){var f=l[o];r(f.value,{componentStack:f.stack})}}finally{C.T=t,V.p=i}}(ca&3)!==0&&ir(),qt(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===_c?_n++:(_n=0,_c=e):_n=0,Dn(0)}}function Pp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,hn(t)))}function ir(){return $p(),Fp(),Ip(),ef()}function ef(){if(Qe!==5)return!1;var e=Aa,t=Mc;Mc=0;var a=es(ca),l=C.T,i=V.p;try{V.p=32>a?32:a,C.T=null,a=Oc,Oc=null;var r=Aa,o=ca;if(Qe=0,Bl=Aa=null,ca=0,(we&6)!==0)throw Error(d(331));var f=we;if(we|=4,Dp(r.current),Mp(r,r.current,o,a),we=f,Dn(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(Il,r)}catch{}return!0}finally{V.p=i,C.T=l,Pp(e,t)}}function tf(e,t,a){t=St(a,t),t=pc(e.stateNode,t,2),e=ja(e,t,2),e!==null&&(en(e,2),qt(e))}function Se(e,t,a){if(e.tag===3)tf(e,e,a);else for(;t!==null;){if(t.tag===3){tf(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(za===null||!za.has(l))){e=St(a,e),a=ap(2),l=ja(t,a,2),l!==null&&(lp(a,l,t,e),en(l,2),qt(l));break}}t=t.return}}function Bc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Ox;var i=new Set;l.set(t,i)}else i=l.get(t),i===void 0&&(i=new Set,l.set(t,i));i.has(a)||(Tc=!0,i.add(a),e=Hx.bind(null,e,t,a),t.then(e,e))}function Hx(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Te===e&&(me&a)===a&&(Ue===4||Ue===3&&(me&62914560)===me&&300>pt()-Pi?(we&2)===0&&Hl(e,0):Rc|=a,Ul===me&&(Ul=0)),qt(e)}function af(e,t){t===0&&(t=$o()),e=Qa(e,t),e!==null&&(en(e,t),qt(e))}function Lx(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),af(e,a)}function Yx(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(d(314))}l!==null&&l.delete(t),af(e,a)}function qx(e,t){return $r(e,t)}var rr=null,Yl=null,Hc=!1,sr=!1,Lc=!1,Ra=0;function qt(e){e!==Yl&&e.next===null&&(Yl===null?rr=Yl=e:Yl=Yl.next=e),sr=!0,Hc||(Hc=!0,Vx())}function Dn(e,t){if(!Lc&&sr){Lc=!0;do for(var a=!1,l=rr;l!==null;){if(e!==0){var i=l.pendingLanes;if(i===0)var r=0;else{var o=l.suspendedLanes,f=l.pingedLanes;r=(1<<31-mt(42|e)+1)-1,r&=i&~(o&~f),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,sf(l,r))}else r=me,r=ui(l,l===Te?r:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(r&3)===0||Pl(l,r)||(a=!0,sf(l,r));l=l.next}while(a);Lc=!1}}function Gx(){lf()}function lf(){sr=Hc=!1;var e=0;Ra!==0&&Px()&&(e=Ra);for(var t=pt(),a=null,l=rr;l!==null;){var i=l.next,r=nf(l,t);r===0?(l.next=null,a===null?rr=i:a.next=i,i===null&&(Yl=a)):(a=l,(e!==0||(r&3)!==0)&&(sr=!0)),l=i}Qe!==0&&Qe!==5||Dn(e),Ra!==0&&(Ra=0)}function nf(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var o=31-mt(r),f=1<<o,v=i[o];v===-1?((f&a)===0||(f&l)!==0)&&(i[o]=hh(f,t)):v<=t&&(e.expiredLanes|=f),r&=~f}if(t=Te,a=me,a=ui(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Fr(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Pl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Fr(l),es(a)){case 2:case 8:a=Jo;break;case 32:a=si;break;case 268435456:a=Wo;break;default:a=si}return l=rf.bind(null,e),a=$r(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Fr(l),e.callbackPriority=2,e.callbackNode=null,2}function rf(e,t){if(Qe!==0&&Qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ir()&&e.callbackNode!==a)return null;var l=me;return l=ui(e,e===Te?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Yp(e,l,t),nf(e,pt()),e.callbackNode!=null&&e.callbackNode===a?rf.bind(null,e):null)}function sf(e,t){if(ir())return null;Yp(e,t,!0)}function Vx(){tg(function(){(we&6)!==0?$r(Xo,Gx):lf()})}function Yc(){if(Ra===0){var e=Sl;e===0&&(e=ci,ci<<=1,(ci&261888)===0&&(ci=256)),Ra=e}return Ra}function cf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:hi(""+e)}function of(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Qx(e,t,a,l,i){if(t==="submit"&&a&&a.stateNode===i){var r=cf((i[nt]||null).action),o=l.submitter;o&&(t=(t=o[nt]||null)?cf(t.formAction):o.getAttribute("formAction"),t!==null&&(r=t,o=null));var f=new vi("action","action",null,l,i);e.push({event:f,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ra!==0){var v=o?of(i,o):new FormData(i);rc(a,{pending:!0,data:v,method:i.method,action:r},null,v)}}else typeof r=="function"&&(f.preventDefault(),v=o?of(i,o):new FormData(i),rc(a,{pending:!0,data:v,method:i.method,action:r},r,v))},currentTarget:i}]})}}for(var qc=0;qc<ws.length;qc++){var Gc=ws[qc],Zx=Gc.toLowerCase(),Kx=Gc[0].toUpperCase()+Gc.slice(1);Ot(Zx,"on"+Kx)}Ot(Ld,"onAnimationEnd"),Ot(Yd,"onAnimationIteration"),Ot(qd,"onAnimationStart"),Ot("dblclick","onDoubleClick"),Ot("focusin","onFocus"),Ot("focusout","onBlur"),Ot(cx,"onTransitionRun"),Ot(ox,"onTransitionStart"),Ot(dx,"onTransitionCancel"),Ot(Gd,"onTransitionEnd"),ul("onMouseEnter",["mouseout","mouseover"]),ul("onMouseLeave",["mouseout","mouseover"]),ul("onPointerEnter",["pointerout","pointerover"]),ul("onPointerLeave",["pointerout","pointerover"]),Ya("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ya("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ya("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ya("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ya("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ya("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Un="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Un));function df(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],i=l.event;l=l.listeners;e:{var r=void 0;if(t)for(var o=l.length-1;0<=o;o--){var f=l[o],v=f.instance,T=f.currentTarget;if(f=f.listener,v!==r&&i.isPropagationStopped())break e;r=f,i.currentTarget=T;try{r(i)}catch(O){ki(O)}i.currentTarget=null,r=v}else for(o=0;o<l.length;o++){if(f=l[o],v=f.instance,T=f.currentTarget,f=f.listener,v!==r&&i.isPropagationStopped())break e;r=f,i.currentTarget=T;try{r(i)}catch(O){ki(O)}i.currentTarget=null,r=v}}}}function pe(e,t){var a=t[ts];a===void 0&&(a=t[ts]=new Set);var l=e+"__bubble";a.has(l)||(uf(t,e,2,!1),a.add(l))}function Vc(e,t,a){var l=0;t&&(l|=4),uf(a,e,l,t)}var cr="_reactListening"+Math.random().toString(36).slice(2);function Qc(e){if(!e[cr]){e[cr]=!0,ld.forEach(function(a){a!=="selectionchange"&&(Xx.has(a)||Vc(a,!1,e),Vc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cr]||(t[cr]=!0,Vc("selectionchange",!1,t))}}function uf(e,t,a,l){switch(Yf(t)){case 2:var i=jg;break;case 8:i=kg;break;default:i=io}a=i.bind(null,t,a,e),i=void 0,!ds||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),l?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function Zc(e,t,a,l,i){var r=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var f=l.stateNode.containerInfo;if(f===i)break;if(o===4)for(o=l.return;o!==null;){var v=o.tag;if((v===3||v===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;f!==null;){if(o=cl(f),o===null)return;if(v=o.tag,v===5||v===6||v===26||v===27){l=r=o;continue e}f=f.parentNode}}l=l.return}hd(function(){var T=r,O=cs(a),D=[];e:{var R=Vd.get(e);if(R!==void 0){var M=vi,J=e;switch(e){case"keypress":if(gi(a)===0)break e;case"keydown":case"keyup":M=Yh;break;case"focusin":J="focus",M=ms;break;case"focusout":J="blur",M=ms;break;case"beforeblur":case"afterblur":M=ms;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=Ah;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=Vh;break;case Ld:case Yd:case qd:M=Ch;break;case Gd:M=Zh;break;case"scroll":case"scrollend":M=Eh;break;case"wheel":M=Xh;break;case"copy":case"cut":case"paste":M=Oh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=yd;break;case"toggle":case"beforetoggle":M=Wh}var te=(t&4)!==0,Ae=!te&&(e==="scroll"||e==="scrollend"),N=te?R!==null?R+"Capture":null:R;te=[];for(var y=T,z;y!==null;){var _=y;if(z=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||z===null||N===null||(_=ln(y,N),_!=null&&te.push(Bn(y,_,z))),Ae)break;y=y.return}0<te.length&&(R=new M(R,J,null,a,O),D.push({event:R,listeners:te}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",R&&a!==ss&&(J=a.relatedTarget||a.fromElement)&&(cl(J)||J[sl]))break e;if((M||R)&&(R=O.window===O?O:(R=O.ownerDocument)?R.defaultView||R.parentWindow:window,M?(J=a.relatedTarget||a.toElement,M=T,J=J?cl(J):null,J!==null&&(Ae=m(J),te=J.tag,J!==Ae||te!==5&&te!==27&&te!==6)&&(J=null)):(M=null,J=T),M!==J)){if(te=bd,_="onMouseLeave",N="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(te=yd,_="onPointerLeave",N="onPointerEnter",y="pointer"),Ae=M==null?R:an(M),z=J==null?R:an(J),R=new te(_,y+"leave",M,a,O),R.target=Ae,R.relatedTarget=z,_=null,cl(O)===T&&(te=new te(N,y+"enter",J,a,O),te.target=z,te.relatedTarget=Ae,_=te),Ae=_,M&&J)t:{for(te=Jx,N=M,y=J,z=0,_=N;_;_=te(_))z++;_=0;for(var ee=y;ee;ee=te(ee))_++;for(;0<z-_;)N=te(N),z--;for(;0<_-z;)y=te(y),_--;for(;z--;){if(N===y||y!==null&&N===y.alternate){te=N;break t}N=te(N),y=te(y)}te=null}else te=null;M!==null&&pf(D,R,M,te,!1),J!==null&&Ae!==null&&pf(D,Ae,J,te,!0)}}e:{if(R=T?an(T):window,M=R.nodeName&&R.nodeName.toLowerCase(),M==="select"||M==="input"&&R.type==="file")var ve=Ad;else if(Ed(R))if(Td)ve=ix;else{ve=lx;var F=ax}else M=R.nodeName,!M||M.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?T&&rs(T.elementType)&&(ve=Ad):ve=nx;if(ve&&(ve=ve(e,T))){zd(D,ve,a,O);break e}F&&F(e,R,T),e==="focusout"&&T&&R.type==="number"&&T.memoizedProps.value!=null&&is(R,"number",R.value)}switch(F=T?an(T):window,e){case"focusin":(Ed(F)||F.contentEditable==="true")&&(gl=F,ys=T,pn=null);break;case"focusout":pn=ys=gl=null;break;case"mousedown":js=!0;break;case"contextmenu":case"mouseup":case"dragend":js=!1,Bd(D,a,O);break;case"selectionchange":if(sx)break;case"keydown":case"keyup":Bd(D,a,O)}var de;if(xs)e:{switch(e){case"compositionstart":var he="onCompositionStart";break e;case"compositionend":he="onCompositionEnd";break e;case"compositionupdate":he="onCompositionUpdate";break e}he=void 0}else xl?Nd(e,a)&&(he="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(he="onCompositionStart");he&&(jd&&a.locale!=="ko"&&(xl||he!=="onCompositionStart"?he==="onCompositionEnd"&&xl&&(de=xd()):(ma=O,us="value"in ma?ma.value:ma.textContent,xl=!0)),F=or(T,he),0<F.length&&(he=new vd(he,e,null,a,O),D.push({event:he,listeners:F}),de?he.data=de:(de=Sd(a),de!==null&&(he.data=de)))),(de=Fh?Ih(e,a):Ph(e,a))&&(he=or(T,"onBeforeInput"),0<he.length&&(F=new vd("onBeforeInput","beforeinput",null,a,O),D.push({event:F,listeners:he}),F.data=de)),Qx(D,e,T,a,O)}df(D,t)})}function Bn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function or(e,t){for(var a=t+"Capture",l=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=ln(e,a),i!=null&&l.unshift(Bn(e,i,r)),i=ln(e,t),i!=null&&l.push(Bn(e,i,r))),e.tag===3)return l;e=e.return}return[]}function Jx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function pf(e,t,a,l,i){for(var r=t._reactName,o=[];a!==null&&a!==l;){var f=a,v=f.alternate,T=f.stateNode;if(f=f.tag,v!==null&&v===l)break;f!==5&&f!==26&&f!==27||T===null||(v=T,i?(T=ln(a,r),T!=null&&o.unshift(Bn(a,T,v))):i||(T=ln(a,r),T!=null&&o.push(Bn(a,T,v)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var Wx=/\r\n?/g,$x=/\u0000|\uFFFD/g;function ff(e){return(typeof e=="string"?e:""+e).replace(Wx,`
`).replace($x,"")}function mf(e,t){return t=ff(t),ff(e)===t}function ze(e,t,a,l,i,r){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||fl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&fl(e,""+l);break;case"className":fi(e,"class",l);break;case"tabIndex":fi(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":fi(e,a,l);break;case"style":fd(e,l,r);break;case"data":if(t!=="object"){fi(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=hi(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&ze(e,t,"name",i.name,i,null),ze(e,t,"formEncType",i.formEncType,i,null),ze(e,t,"formMethod",i.formMethod,i,null),ze(e,t,"formTarget",i.formTarget,i,null)):(ze(e,t,"encType",i.encType,i,null),ze(e,t,"method",i.method,i,null),ze(e,t,"target",i.target,i,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=hi(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Xt);break;case"onScroll":l!=null&&pe("scroll",e);break;case"onScrollEnd":l!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=hi(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":pe("beforetoggle",e),pe("toggle",e),pi(e,"popover",l);break;case"xlinkActuate":Kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Kt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Kt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Kt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Kt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":pi(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Nh.get(a)||a,pi(e,a,l))}}function Kc(e,t,a,l,i,r){switch(a){case"style":fd(e,l,r);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"children":typeof l=="string"?fl(e,l):(typeof l=="number"||typeof l=="bigint")&&fl(e,""+l);break;case"onScroll":l!=null&&pe("scroll",e);break;case"onScrollEnd":l!=null&&pe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Xt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nd.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),r=e[nt]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof l=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,i);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):pi(e,a,l)}}}function et(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var l=!1,i=!1,r;for(r in a)if(a.hasOwnProperty(r)){var o=a[r];if(o!=null)switch(r){case"src":l=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:ze(e,t,r,o,a,null)}}i&&ze(e,t,"srcSet",a.srcSet,a,null),l&&ze(e,t,"src",a.src,a,null);return;case"input":pe("invalid",e);var f=r=o=i=null,v=null,T=null;for(l in a)if(a.hasOwnProperty(l)){var O=a[l];if(O!=null)switch(l){case"name":i=O;break;case"type":o=O;break;case"checked":v=O;break;case"defaultChecked":T=O;break;case"value":r=O;break;case"defaultValue":f=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(d(137,t));break;default:ze(e,t,l,O,a,null)}}od(e,r,f,v,T,o,i,!1);return;case"select":pe("invalid",e),l=o=r=null;for(i in a)if(a.hasOwnProperty(i)&&(f=a[i],f!=null))switch(i){case"value":r=f;break;case"defaultValue":o=f;break;case"multiple":l=f;default:ze(e,t,i,f,a,null)}t=r,a=o,e.multiple=!!l,t!=null?pl(e,!!l,t,!1):a!=null&&pl(e,!!l,a,!0);return;case"textarea":pe("invalid",e),r=i=l=null;for(o in a)if(a.hasOwnProperty(o)&&(f=a[o],f!=null))switch(o){case"value":l=f;break;case"defaultValue":i=f;break;case"children":r=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(d(91));break;default:ze(e,t,o,f,a,null)}ud(e,l,i,r);return;case"option":for(v in a)a.hasOwnProperty(v)&&(l=a[v],l!=null)&&(v==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":ze(e,t,v,l,a,null));return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(l=0;l<Un.length;l++)pe(Un[l],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in a)if(a.hasOwnProperty(T)&&(l=a[T],l!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:ze(e,t,T,l,a,null)}return;default:if(rs(t)){for(O in a)a.hasOwnProperty(O)&&(l=a[O],l!==void 0&&Kc(e,t,O,l,a,void 0));return}}for(f in a)a.hasOwnProperty(f)&&(l=a[f],l!=null&&ze(e,t,f,l,a,null))}function Fx(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,o=null,f=null,v=null,T=null,O=null;for(M in a){var D=a[M];if(a.hasOwnProperty(M)&&D!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":v=D;default:l.hasOwnProperty(M)||ze(e,t,M,null,l,D)}}for(var R in l){var M=l[R];if(D=a[R],l.hasOwnProperty(R)&&(M!=null||D!=null))switch(R){case"type":r=M;break;case"name":i=M;break;case"checked":T=M;break;case"defaultChecked":O=M;break;case"value":o=M;break;case"defaultValue":f=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(d(137,t));break;default:M!==D&&ze(e,t,R,M,l,D)}}ns(e,o,f,v,T,O,r,i);return;case"select":M=o=f=R=null;for(r in a)if(v=a[r],a.hasOwnProperty(r)&&v!=null)switch(r){case"value":break;case"multiple":M=v;default:l.hasOwnProperty(r)||ze(e,t,r,null,l,v)}for(i in l)if(r=l[i],v=a[i],l.hasOwnProperty(i)&&(r!=null||v!=null))switch(i){case"value":R=r;break;case"defaultValue":f=r;break;case"multiple":o=r;default:r!==v&&ze(e,t,i,r,l,v)}t=f,a=o,l=M,R!=null?pl(e,!!a,R,!1):!!l!=!!a&&(t!=null?pl(e,!!a,t,!0):pl(e,!!a,a?[]:"",!1));return;case"textarea":M=R=null;for(f in a)if(i=a[f],a.hasOwnProperty(f)&&i!=null&&!l.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:ze(e,t,f,null,l,i)}for(o in l)if(i=l[o],r=a[o],l.hasOwnProperty(o)&&(i!=null||r!=null))switch(o){case"value":R=i;break;case"defaultValue":M=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(d(91));break;default:i!==r&&ze(e,t,o,i,l,r)}dd(e,R,M);return;case"option":for(var J in a)R=a[J],a.hasOwnProperty(J)&&R!=null&&!l.hasOwnProperty(J)&&(J==="selected"?e.selected=!1:ze(e,t,J,null,l,R));for(v in l)R=l[v],M=a[v],l.hasOwnProperty(v)&&R!==M&&(R!=null||M!=null)&&(v==="selected"?e.selected=R&&typeof R!="function"&&typeof R!="symbol":ze(e,t,v,R,l,M));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)R=a[te],a.hasOwnProperty(te)&&R!=null&&!l.hasOwnProperty(te)&&ze(e,t,te,null,l,R);for(T in l)if(R=l[T],M=a[T],l.hasOwnProperty(T)&&R!==M&&(R!=null||M!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(d(137,t));break;default:ze(e,t,T,R,l,M)}return;default:if(rs(t)){for(var Ae in a)R=a[Ae],a.hasOwnProperty(Ae)&&R!==void 0&&!l.hasOwnProperty(Ae)&&Kc(e,t,Ae,void 0,l,R);for(O in l)R=l[O],M=a[O],!l.hasOwnProperty(O)||R===M||R===void 0&&M===void 0||Kc(e,t,O,R,l,M);return}}for(var N in a)R=a[N],a.hasOwnProperty(N)&&R!=null&&!l.hasOwnProperty(N)&&ze(e,t,N,null,l,R);for(D in l)R=l[D],M=a[D],!l.hasOwnProperty(D)||R===M||R==null&&M==null||ze(e,t,D,R,l,M)}function hf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ix(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var i=a[l],r=i.transferSize,o=i.initiatorType,f=i.duration;if(r&&f&&hf(o)){for(o=0,f=i.responseEnd,l+=1;l<a.length;l++){var v=a[l],T=v.startTime;if(T>f)break;var O=v.transferSize,D=v.initiatorType;O&&hf(D)&&(v=v.responseEnd,o+=O*(v<f?1:(f-T)/(v-T)))}if(--l,t+=8*(r+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Xc=null,Jc=null;function dr(e){return e.nodeType===9?e:e.ownerDocument}function xf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Wc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $c=null;function Px(){var e=window.event;return e&&e.type==="popstate"?e===$c?!1:($c=e,!0):($c=null,!1)}var bf=typeof setTimeout=="function"?setTimeout:void 0,eg=typeof clearTimeout=="function"?clearTimeout:void 0,vf=typeof Promise=="function"?Promise:void 0,tg=typeof queueMicrotask=="function"?queueMicrotask:typeof vf<"u"?function(e){return vf.resolve(null).then(e).catch(ag)}:bf;function ag(e){setTimeout(function(){throw e})}function Ca(e){return e==="head"}function yf(e,t){var a=t,l=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(i),Ql(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Hn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Hn(a);for(var r=a.firstChild;r;){var o=r.nextSibling,f=r.nodeName;r[tn]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=o}}else a==="body"&&Hn(e.ownerDocument.body);a=i}while(a);Ql(t)}function jf(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Fc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Fc(a),as(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function lg(e,t,a,l){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[tn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Rt(e.nextSibling),e===null)break}return null}function ng(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Rt(e.nextSibling),e===null))return null;return e}function kf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Rt(e.nextSibling),e===null))return null;return e}function Ic(e){return e.data==="$?"||e.data==="$~"}function Pc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ig(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var eo=null;function wf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Rt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Nf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Sf(e,t,a){switch(t=dr(a),e){case"html":if(e=t.documentElement,!e)throw Error(d(452));return e;case"head":if(e=t.head,!e)throw Error(d(453));return e;case"body":if(e=t.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function Hn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);as(e)}var Ct=new Map,Ef=new Set;function ur(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var oa=V.d;V.d={f:rg,r:sg,D:cg,C:og,L:dg,m:ug,X:fg,S:pg,M:mg};function rg(){var e=oa.f(),t=ar();return e||t}function sg(e){var t=ol(e);t!==null&&t.tag===5&&t.type==="form"?Gu(t):oa.r(e)}var ql=typeof document>"u"?null:document;function zf(e,t,a){var l=ql;if(l&&typeof t=="string"&&t){var i=wt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Ef.has(i)||(Ef.add(i),e={rel:e,crossOrigin:a,href:t},l.querySelector(i)===null&&(t=l.createElement("link"),et(t,"link",e),Ke(t),l.head.appendChild(t)))}}function cg(e){oa.D(e),zf("dns-prefetch",e,null)}function og(e,t){oa.C(e,t),zf("preconnect",e,t)}function dg(e,t,a){oa.L(e,t,a);var l=ql;if(l&&e&&t){var i='link[rel="preload"][as="'+wt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+wt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+wt(a.imageSizes)+'"]')):i+='[href="'+wt(e)+'"]';var r=i;switch(t){case"style":r=Gl(e);break;case"script":r=Vl(e)}Ct.has(r)||(e=w({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ct.set(r,e),l.querySelector(i)!==null||t==="style"&&l.querySelector(Ln(r))||t==="script"&&l.querySelector(Yn(r))||(t=l.createElement("link"),et(t,"link",e),Ke(t),l.head.appendChild(t)))}}function ug(e,t){oa.m(e,t);var a=ql;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+wt(l)+'"][href="'+wt(e)+'"]',r=i;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Vl(e)}if(!Ct.has(r)&&(e=w({rel:"modulepreload",href:e},t),Ct.set(r,e),a.querySelector(i)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Yn(r)))return}l=a.createElement("link"),et(l,"link",e),Ke(l),a.head.appendChild(l)}}}function pg(e,t,a){oa.S(e,t,a);var l=ql;if(l&&e){var i=dl(l).hoistableStyles,r=Gl(e);t=t||"default";var o=i.get(r);if(!o){var f={loading:0,preload:null};if(o=l.querySelector(Ln(r)))f.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ct.get(r))&&to(e,a);var v=o=l.createElement("link");Ke(v),et(v,"link",e),v._p=new Promise(function(T,O){v.onload=T,v.onerror=O}),v.addEventListener("load",function(){f.loading|=1}),v.addEventListener("error",function(){f.loading|=2}),f.loading|=4,pr(o,t,l)}o={type:"stylesheet",instance:o,count:1,state:f},i.set(r,o)}}}function fg(e,t){oa.X(e,t);var a=ql;if(a&&e){var l=dl(a).hoistableScripts,i=Vl(e),r=l.get(i);r||(r=a.querySelector(Yn(i)),r||(e=w({src:e,async:!0},t),(t=Ct.get(i))&&ao(e,t),r=a.createElement("script"),Ke(r),et(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(i,r))}}function mg(e,t){oa.M(e,t);var a=ql;if(a&&e){var l=dl(a).hoistableScripts,i=Vl(e),r=l.get(i);r||(r=a.querySelector(Yn(i)),r||(e=w({src:e,async:!0,type:"module"},t),(t=Ct.get(i))&&ao(e,t),r=a.createElement("script"),Ke(r),et(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(i,r))}}function Af(e,t,a,l){var i=(i=oe.current)?ur(i):null;if(!i)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Gl(a.href),a=dl(i).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Gl(a.href);var r=dl(i).hoistableStyles,o=r.get(e);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,o),(r=i.querySelector(Ln(e)))&&!r._p&&(o.instance=r,o.state.loading=5),Ct.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ct.set(e,a),r||hg(i,e,a,o.state))),t&&l===null)throw Error(d(528,""));return o}if(t&&l!==null)throw Error(d(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Vl(a),a=dl(i).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function Gl(e){return'href="'+wt(e)+'"'}function Ln(e){return'link[rel="stylesheet"]['+e+"]"}function Tf(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function hg(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),et(t,"link",a),Ke(t),e.head.appendChild(t))}function Vl(e){return'[src="'+wt(e)+'"]'}function Yn(e){return"script[async]"+e}function Rf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+wt(a.href)+'"]');if(l)return t.instance=l,Ke(l),l;var i=w({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ke(l),et(l,"style",i),pr(l,a.precedence,e),t.instance=l;case"stylesheet":i=Gl(a.href);var r=e.querySelector(Ln(i));if(r)return t.state.loading|=4,t.instance=r,Ke(r),r;l=Tf(a),(i=Ct.get(i))&&to(l,i),r=(e.ownerDocument||e).createElement("link"),Ke(r);var o=r;return o._p=new Promise(function(f,v){o.onload=f,o.onerror=v}),et(r,"link",l),t.state.loading|=4,pr(r,a.precedence,e),t.instance=r;case"script":return r=Vl(a.src),(i=e.querySelector(Yn(r)))?(t.instance=i,Ke(i),i):(l=a,(i=Ct.get(r))&&(l=w({},a),ao(l,i)),e=e.ownerDocument||e,i=e.createElement("script"),Ke(i),et(i,"link",l),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(d(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,pr(l,a.precedence,e));return t.instance}function pr(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=l.length?l[l.length-1]:null,r=i,o=0;o<l.length;o++){var f=l[o];if(f.dataset.precedence===t)r=f;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function to(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ao(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var fr=null;function Cf(e,t,a){if(fr===null){var l=new Map,i=fr=new Map;i.set(a,l)}else i=fr,l=i.get(a),l||(l=new Map,i.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var r=a[i];if(!(r[tn]||r[$e]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var o=r.getAttribute(t)||"";o=e+o;var f=l.get(o);f?f.push(r):l.set(o,[r])}}return l}function Mf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function xg(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Of(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function gg(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=Gl(l.href),r=t.querySelector(Ln(i));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=mr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,Ke(r);return}r=t.ownerDocument||t,l=Tf(l),(i=Ct.get(i))&&to(l,i),r=r.createElement("link"),Ke(r);var o=r;o._p=new Promise(function(f,v){o.onload=f,o.onerror=v}),et(r,"link",l),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=mr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var lo=0;function bg(e,t){return e.stylesheets&&e.count===0&&xr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&xr(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&lo===0&&(lo=62500*Ix());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&xr(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>lo?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(i)}}:null}function mr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)xr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var hr=null;function xr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,hr=new Map,t.forEach(vg,e),hr=null,mr.call(e))}function vg(e,t){if(!(t.state.loading&4)){var a=hr.get(e);if(a)var l=a.get(null);else{a=new Map,hr.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var o=i[r];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),l=o)}l&&a.set(null,l)}i=t.instance,o=i.getAttribute("data-precedence"),r=a.get(o)||l,r===l&&a.set(null,i),a.set(o,i),this.count++,l=mr.bind(this),i.addEventListener("load",l),i.addEventListener("error",l),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var qn={$$typeof:q,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function yg(e,t,a,l,i,r,o,f,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ir(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ir(0),this.hiddenUpdates=Ir(null),this.identifierPrefix=l,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function _f(e,t,a,l,i,r,o,f,v,T,O,D){return e=new yg(e,t,a,o,v,T,O,D,f),t=1,r===!0&&(t|=24),r=xt(3,null,null,t),e.current=r,r.stateNode=e,t=Us(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:l,isDehydrated:a,cache:t},Ys(r),e}function Df(e){return e?(e=yl,e):yl}function Uf(e,t,a,l,i,r){i=Df(i),l.context===null?l.context=i:l.pendingContext=i,l=ya(t),l.payload={element:a},r=r===void 0?null:r,r!==null&&(l.callback=r),a=ja(e,l,t),a!==null&&(dt(a,e,t),vn(a,e,t))}function Bf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function no(e,t){Bf(e,t),(e=e.alternate)&&Bf(e,t)}function Hf(e){if(e.tag===13||e.tag===31){var t=Qa(e,67108864);t!==null&&dt(t,e,67108864),no(e,67108864)}}function Lf(e){if(e.tag===13||e.tag===31){var t=jt();t=Pr(t);var a=Qa(e,t);a!==null&&dt(a,e,t),no(e,t)}}var gr=!0;function jg(e,t,a,l){var i=C.T;C.T=null;var r=V.p;try{V.p=2,io(e,t,a,l)}finally{V.p=r,C.T=i}}function kg(e,t,a,l){var i=C.T;C.T=null;var r=V.p;try{V.p=8,io(e,t,a,l)}finally{V.p=r,C.T=i}}function io(e,t,a,l){if(gr){var i=ro(l);if(i===null)Zc(e,t,l,br,a),qf(e,l);else if(Ng(i,e,t,a,l))l.stopPropagation();else if(qf(e,l),t&4&&-1<wg.indexOf(e)){for(;i!==null;){var r=ol(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var o=La(r.pendingLanes);if(o!==0){var f=r;for(f.pendingLanes|=2,f.entangledLanes|=2;o;){var v=1<<31-mt(o);f.entanglements[1]|=v,o&=~v}qt(r),(we&6)===0&&(er=pt()+500,Dn(0))}}break;case 31:case 13:f=Qa(r,2),f!==null&&dt(f,r,2),ar(),no(r,2)}if(r=ro(l),r===null&&Zc(e,t,l,br,a),r===i)break;i=r}i!==null&&l.stopPropagation()}else Zc(e,t,l,null,a)}}function ro(e){return e=cs(e),so(e)}var br=null;function so(e){if(br=null,e=cl(e),e!==null){var t=m(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=g(t),e!==null)return e;e=null}else if(a===31){if(e=b(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return br=e,null}function Yf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ch()){case Xo:return 2;case Jo:return 8;case si:case oh:return 32;case Wo:return 268435456;default:return 32}default:return 32}}var co=!1,Ma=null,Oa=null,_a=null,Gn=new Map,Vn=new Map,Da=[],wg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qf(e,t){switch(e){case"focusin":case"focusout":Ma=null;break;case"dragenter":case"dragleave":Oa=null;break;case"mouseover":case"mouseout":_a=null;break;case"pointerover":case"pointerout":Gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vn.delete(t.pointerId)}}function Qn(e,t,a,l,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:r,targetContainers:[i]},t!==null&&(t=ol(t),t!==null&&Hf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ng(e,t,a,l,i){switch(t){case"focusin":return Ma=Qn(Ma,e,t,a,l,i),!0;case"dragenter":return Oa=Qn(Oa,e,t,a,l,i),!0;case"mouseover":return _a=Qn(_a,e,t,a,l,i),!0;case"pointerover":var r=i.pointerId;return Gn.set(r,Qn(Gn.get(r)||null,e,t,a,l,i)),!0;case"gotpointercapture":return r=i.pointerId,Vn.set(r,Qn(Vn.get(r)||null,e,t,a,l,i)),!0}return!1}function Gf(e){var t=cl(e.target);if(t!==null){var a=m(t);if(a!==null){if(t=a.tag,t===13){if(t=g(a),t!==null){e.blockedOn=t,td(e.priority,function(){Lf(a)});return}}else if(t===31){if(t=b(a),t!==null){e.blockedOn=t,td(e.priority,function(){Lf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=ro(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);ss=l,a.target.dispatchEvent(l),ss=null}else return t=ol(a),t!==null&&Hf(t),e.blockedOn=a,!1;t.shift()}return!0}function Vf(e,t,a){vr(e)&&a.delete(t)}function Sg(){co=!1,Ma!==null&&vr(Ma)&&(Ma=null),Oa!==null&&vr(Oa)&&(Oa=null),_a!==null&&vr(_a)&&(_a=null),Gn.forEach(Vf),Vn.forEach(Vf)}function yr(e,t){e.blockedOn===t&&(e.blockedOn=null,co||(co=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Sg)))}var jr=null;function Qf(e){jr!==e&&(jr=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){jr===e&&(jr=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],i=e[t+2];if(typeof l!="function"){if(so(l||a)===null)continue;break}var r=ol(a);r!==null&&(e.splice(t,3),t-=3,rc(r,{pending:!0,data:i,method:a.method,action:l},l,i))}}))}function Ql(e){function t(v){return yr(v,e)}Ma!==null&&yr(Ma,e),Oa!==null&&yr(Oa,e),_a!==null&&yr(_a,e),Gn.forEach(t),Vn.forEach(t);for(var a=0;a<Da.length;a++){var l=Da[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Da.length&&(a=Da[0],a.blockedOn===null);)Gf(a),a.blockedOn===null&&Da.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var i=a[l],r=a[l+1],o=i[nt]||null;if(typeof r=="function")o||Qf(a);else if(o){var f=null;if(r&&r.hasAttribute("formAction")){if(i=r,o=r[nt]||null)f=o.formAction;else if(so(i)!==null)continue}else f=o.action;typeof f=="function"?a[l+1]=f:(a.splice(l,3),l-=3),Qf(a)}}}function Zf(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(o){return i=o})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function oo(e){this._internalRoot=e}kr.prototype.render=oo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));var a=t.current,l=jt();Uf(a,l,e,t,null,null)},kr.prototype.unmount=oo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Uf(e.current,2,null,e,null,null),ar(),t[sl]=null}};function kr(e){this._internalRoot=e}kr.prototype.unstable_scheduleHydration=function(e){if(e){var t=ed();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Da.length&&t!==0&&t<Da[a].priority;a++);Da.splice(a,0,e),a===0&&Gf(e)}};var Kf=u.version;if(Kf!=="19.2.4")throw Error(d(527,Kf,"19.2.4"));V.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=h(t),e=e!==null?A(e):null,e=e===null?null:e.stateNode,e};var Eg={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wr.isDisabled&&wr.supportsFiber)try{Il=wr.inject(Eg),ft=wr}catch{}}return Kn.createRoot=function(e,t){if(!p(e))throw Error(d(299));var a=!1,l="",i=Iu,r=Pu,o=ep;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=_f(e,1,!1,null,null,a,l,null,i,r,o,Zf),e[sl]=t.current,Qc(e),new oo(t)},Kn.hydrateRoot=function(e,t,a){if(!p(e))throw Error(d(299));var l=!1,i="",r=Iu,o=Pu,f=ep,v=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(f=a.onRecoverableError),a.formState!==void 0&&(v=a.formState)),t=_f(e,1,!0,t,a??null,l,i,v,r,o,f,Zf),t.context=Df(null),a=t.current,l=jt(),l=Pr(l),i=ya(l),i.callback=null,ja(a,i,l),a=l,t.current.lanes=a,en(t,a),qt(t),e[sl]=t.current,Qc(e),new kr(t)},Kn.version="19.2.4",Kn}var am;function Ug(){if(am)return fo.exports;am=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(u){console.error(u)}}return s(),fo.exports=Dg(),fo.exports}var Bg=Ug();var lm="popstate";function nm(s){return typeof s=="object"&&s!=null&&"pathname"in s&&"search"in s&&"hash"in s&&"state"in s&&"key"in s}function Hg(s={}){function u(d,p){let m=p.state?.masked,{pathname:g,search:b,hash:x}=m||d.location;return zo("",{pathname:g,search:b,hash:x},p.state&&p.state.usr||null,p.state&&p.state.key||"default",m?{pathname:d.location.pathname,search:d.location.search,hash:d.location.hash}:void 0)}function c(d,p){return typeof p=="string"?p:Pn(p)}return Yg(u,c,null,s)}function Ze(s,u){if(s===!1||s===null||typeof s>"u")throw new Error(u)}function Vt(s,u){if(!s){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function Lg(){return Math.random().toString(36).substring(2,10)}function im(s,u){return{usr:s.state,key:s.key,idx:u,masked:s.unstable_mask?{pathname:s.pathname,search:s.search,hash:s.hash}:void 0}}function zo(s,u,c=null,d,p){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof u=="string"?ti(u):u,state:c,key:u&&u.key||d||Lg(),unstable_mask:p}}function Pn({pathname:s="/",search:u="",hash:c=""}){return u&&u!=="?"&&(s+=u.charAt(0)==="?"?u:"?"+u),c&&c!=="#"&&(s+=c.charAt(0)==="#"?c:"#"+c),s}function ti(s){let u={};if(s){let c=s.indexOf("#");c>=0&&(u.hash=s.substring(c),s=s.substring(0,c));let d=s.indexOf("?");d>=0&&(u.search=s.substring(d),s=s.substring(0,d)),s&&(u.pathname=s)}return u}function Yg(s,u,c,d={}){let{window:p=document.defaultView,v5Compat:m=!1}=d,g=p.history,b="POP",x=null,h=A();h==null&&(h=0,g.replaceState({...g.state,idx:h},""));function A(){return(g.state||{idx:null}).idx}function w(){b="POP";let Y=A(),L=Y==null?null:Y-h;h=Y,x&&x({action:b,location:G.location,delta:L})}function B(Y,L){b="PUSH";let X=nm(Y)?Y:zo(G.location,Y,L);h=A()+1;let q=im(X,h),K=G.createHref(X.unstable_mask||X);try{g.pushState(q,"",K)}catch(le){if(le instanceof DOMException&&le.name==="DataCloneError")throw le;p.location.assign(K)}m&&x&&x({action:b,location:G.location,delta:1})}function Z(Y,L){b="REPLACE";let X=nm(Y)?Y:zo(G.location,Y,L);h=A();let q=im(X,h),K=G.createHref(X.unstable_mask||X);g.replaceState(q,"",K),m&&x&&x({action:b,location:G.location,delta:0})}function S(Y){return qg(Y)}let G={get action(){return b},get location(){return s(p,g)},listen(Y){if(x)throw new Error("A history only accepts one active listener");return p.addEventListener(lm,w),x=Y,()=>{p.removeEventListener(lm,w),x=null}},createHref(Y){return u(p,Y)},createURL:S,encodeLocation(Y){let L=S(Y);return{pathname:L.pathname,search:L.search,hash:L.hash}},push:B,replace:Z,go(Y){return g.go(Y)}};return G}function qg(s,u=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),Ze(c,"No window.location.(origin|href) available to create URL");let d=typeof s=="string"?s:Pn(s);return d=d.replace(/ $/,"%20"),!u&&d.startsWith("//")&&(d=c+d),new URL(d,c)}function Cm(s,u,c="/"){return Gg(s,u,c,!1)}function Gg(s,u,c,d){let p=typeof u=="string"?ti(u):u,m=da(p.pathname||"/",c);if(m==null)return null;let g=Mm(s);Vg(g);let b=null;for(let x=0;b==null&&x<g.length;++x){let h=e0(m);b=Ig(g[x],h,d)}return b}function Mm(s,u=[],c=[],d="",p=!1){let m=(g,b,x=p,h)=>{let A={relativePath:h===void 0?g.path||"":h,caseSensitive:g.caseSensitive===!0,childrenIndex:b,route:g};if(A.relativePath.startsWith("/")){if(!A.relativePath.startsWith(d)&&x)return;Ze(A.relativePath.startsWith(d),`Absolute route path "${A.relativePath}" nested under path "${d}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),A.relativePath=A.relativePath.slice(d.length)}let w=Gt([d,A.relativePath]),B=c.concat(A);g.children&&g.children.length>0&&(Ze(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),Mm(g.children,u,B,w,x)),!(g.path==null&&!g.index)&&u.push({path:w,score:$g(w,g.index),routesMeta:B})};return s.forEach((g,b)=>{if(g.path===""||!g.path?.includes("?"))m(g,b);else for(let x of Om(g.path))m(g,b,!0,x)}),u}function Om(s){let u=s.split("/");if(u.length===0)return[];let[c,...d]=u,p=c.endsWith("?"),m=c.replace(/\?$/,"");if(d.length===0)return p?[m,""]:[m];let g=Om(d.join("/")),b=[];return b.push(...g.map(x=>x===""?m:[m,x].join("/"))),p&&b.push(...g),b.map(x=>s.startsWith("/")&&x===""?"/":x)}function Vg(s){s.sort((u,c)=>u.score!==c.score?c.score-u.score:Fg(u.routesMeta.map(d=>d.childrenIndex),c.routesMeta.map(d=>d.childrenIndex)))}var Qg=/^:[\w-]+$/,Zg=3,Kg=2,Xg=1,Jg=10,Wg=-2,rm=s=>s==="*";function $g(s,u){let c=s.split("/"),d=c.length;return c.some(rm)&&(d+=Wg),u&&(d+=Kg),c.filter(p=>!rm(p)).reduce((p,m)=>p+(Qg.test(m)?Zg:m===""?Xg:Jg),d)}function Fg(s,u){return s.length===u.length&&s.slice(0,-1).every((d,p)=>d===u[p])?s[s.length-1]-u[u.length-1]:0}function Ig(s,u,c=!1){let{routesMeta:d}=s,p={},m="/",g=[];for(let b=0;b<d.length;++b){let x=d[b],h=b===d.length-1,A=m==="/"?u:u.slice(m.length)||"/",w=Ur({path:x.relativePath,caseSensitive:x.caseSensitive,end:h},A),B=x.route;if(!w&&h&&c&&!d[d.length-1].route.index&&(w=Ur({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},A)),!w)return null;Object.assign(p,w.params),g.push({params:p,pathname:Gt([m,w.pathname]),pathnameBase:n0(Gt([m,w.pathnameBase])),route:B}),w.pathnameBase!=="/"&&(m=Gt([m,w.pathnameBase]))}return g}function Ur(s,u){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[c,d]=Pg(s.path,s.caseSensitive,s.end),p=u.match(c);if(!p)return null;let m=p[0],g=m.replace(/(.)\/+$/,"$1"),b=p.slice(1);return{params:d.reduce((h,{paramName:A,isOptional:w},B)=>{if(A==="*"){let S=b[B]||"";g=m.slice(0,m.length-S.length).replace(/(.)\/+$/,"$1")}const Z=b[B];return w&&!Z?h[A]=void 0:h[A]=(Z||"").replace(/%2F/g,"/"),h},{}),pathname:m,pathnameBase:g,pattern:s}}function Pg(s,u=!1,c=!0){Vt(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let d=[],p="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,b,x,h,A)=>{if(d.push({paramName:b,isOptional:x!=null}),x){let w=A.charAt(h+g.length);return w&&w!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(d.push({paramName:"*"}),p+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?p+="\\/*$":s!==""&&s!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,u?void 0:"i"),d]}function e0(s){try{return s.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return Vt(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),s}}function da(s,u){if(u==="/")return s;if(!s.toLowerCase().startsWith(u.toLowerCase()))return null;let c=u.endsWith("/")?u.length-1:u.length,d=s.charAt(c);return d&&d!=="/"?null:s.slice(c)||"/"}var t0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function a0(s,u="/"){let{pathname:c,search:d="",hash:p=""}=typeof s=="string"?ti(s):s,m;return c?(c=c.replace(/\/\/+/g,"/"),c.startsWith("/")?m=sm(c.substring(1),"/"):m=sm(c,u)):m=u,{pathname:m,search:i0(d),hash:r0(p)}}function sm(s,u){let c=u.replace(/\/+$/,"").split("/");return s.split("/").forEach(p=>{p===".."?c.length>1&&c.pop():p!=="."&&c.push(p)}),c.length>1?c.join("/"):"/"}function go(s,u,c,d){return`Cannot include a '${s}' character in a manually specified \`to.${u}\` field [${JSON.stringify(d)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function l0(s){return s.filter((u,c)=>c===0||u.route.path&&u.route.path.length>0)}function _m(s){let u=l0(s);return u.map((c,d)=>d===u.length-1?c.pathname:c.pathnameBase)}function Do(s,u,c,d=!1){let p;typeof s=="string"?p=ti(s):(p={...s},Ze(!p.pathname||!p.pathname.includes("?"),go("?","pathname","search",p)),Ze(!p.pathname||!p.pathname.includes("#"),go("#","pathname","hash",p)),Ze(!p.search||!p.search.includes("#"),go("#","search","hash",p)));let m=s===""||p.pathname==="",g=m?"/":p.pathname,b;if(g==null)b=c;else{let w=u.length-1;if(!d&&g.startsWith("..")){let B=g.split("/");for(;B[0]==="..";)B.shift(),w-=1;p.pathname=B.join("/")}b=w>=0?u[w]:"/"}let x=a0(p,b),h=g&&g!=="/"&&g.endsWith("/"),A=(m||g===".")&&c.endsWith("/");return!x.pathname.endsWith("/")&&(h||A)&&(x.pathname+="/"),x}var Gt=s=>s.join("/").replace(/\/\/+/g,"/"),n0=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),i0=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,r0=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,s0=class{constructor(s,u,c,d=!1){this.status=s,this.statusText=u||"",this.internal=d,c instanceof Error?(this.data=c.toString(),this.error=c):this.data=c}};function c0(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function o0(s){return s.map(u=>u.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Dm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Um(s,u){let c=s;if(typeof c!="string"||!t0.test(c))return{absoluteURL:void 0,isExternal:!1,to:c};let d=c,p=!1;if(Dm)try{let m=new URL(window.location.href),g=c.startsWith("//")?new URL(m.protocol+c):new URL(c),b=da(g.pathname,u);g.origin===m.origin&&b!=null?c=b+g.search+g.hash:p=!0}catch{Vt(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:d,isExternal:p,to:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Bm=["POST","PUT","PATCH","DELETE"];new Set(Bm);var d0=["GET",...Bm];new Set(d0);var Wl=k.createContext(null);Wl.displayName="DataRouter";var Yr=k.createContext(null);Yr.displayName="DataRouterState";var u0=k.createContext(!1),Hm=k.createContext({isTransitioning:!1});Hm.displayName="ViewTransition";var p0=k.createContext(new Map);p0.displayName="Fetchers";var f0=k.createContext(null);f0.displayName="Await";var Mt=k.createContext(null);Mt.displayName="Navigation";var qr=k.createContext(null);qr.displayName="Location";var ua=k.createContext({outlet:null,matches:[],isDataRoute:!1});ua.displayName="Route";var Uo=k.createContext(null);Uo.displayName="RouteError";var Lm="REACT_ROUTER_ERROR",m0="REDIRECT",h0="ROUTE_ERROR_RESPONSE";function x0(s){if(s.startsWith(`${Lm}:${m0}:{`))try{let u=JSON.parse(s.slice(28));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.location=="string"&&typeof u.reloadDocument=="boolean"&&typeof u.replace=="boolean")return u}catch{}}function g0(s){if(s.startsWith(`${Lm}:${h0}:{`))try{let u=JSON.parse(s.slice(40));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string")return new s0(u.status,u.statusText,u.data)}catch{}}function b0(s,{relative:u}={}){Ze(ai(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:d}=k.useContext(Mt),{hash:p,pathname:m,search:g}=li(s,{relative:u}),b=m;return c!=="/"&&(b=m==="/"?c:Gt([c,m])),d.createHref({pathname:b,search:g,hash:p})}function ai(){return k.useContext(qr)!=null}function Bt(){return Ze(ai(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(qr).location}var Ym="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function qm(s){k.useContext(Mt).static||k.useLayoutEffect(s)}function Ba(){let{isDataRoute:s}=k.useContext(ua);return s?C0():v0()}function v0(){Ze(ai(),"useNavigate() may be used only in the context of a <Router> component.");let s=k.useContext(Wl),{basename:u,navigator:c}=k.useContext(Mt),{matches:d}=k.useContext(ua),{pathname:p}=Bt(),m=JSON.stringify(_m(d)),g=k.useRef(!1);return qm(()=>{g.current=!0}),k.useCallback((x,h={})=>{if(Vt(g.current,Ym),!g.current)return;if(typeof x=="number"){c.go(x);return}let A=Do(x,JSON.parse(m),p,h.relative==="path");s==null&&u!=="/"&&(A.pathname=A.pathname==="/"?u:Gt([u,A.pathname])),(h.replace?c.replace:c.push)(A,h.state,h)},[u,c,m,p,s])}k.createContext(null);function li(s,{relative:u}={}){let{matches:c}=k.useContext(ua),{pathname:d}=Bt(),p=JSON.stringify(_m(c));return k.useMemo(()=>Do(s,JSON.parse(p),d,u==="path"),[s,p,d,u])}function y0(s,u){return Gm(s)}function Gm(s,u,c){Ze(ai(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=k.useContext(Mt),{matches:p}=k.useContext(ua),m=p[p.length-1],g=m?m.params:{},b=m?m.pathname:"/",x=m?m.pathnameBase:"/",h=m&&m.route;{let Y=h&&h.path||"";Qm(b,!h||Y.endsWith("*")||Y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${b}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${Y==="/"?"*":`${Y}/*`}">.`)}let A=Bt(),w;w=A;let B=w.pathname||"/",Z=B;if(x!=="/"){let Y=x.replace(/^\//,"").split("/");Z="/"+B.replace(/^\//,"").split("/").slice(Y.length).join("/")}let S=Cm(s,{pathname:Z});return Vt(h||S!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),Vt(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),S0(S&&S.map(Y=>Object.assign({},Y,{params:Object.assign({},g,Y.params),pathname:Gt([x,d.encodeLocation?d.encodeLocation(Y.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Y.pathname]),pathnameBase:Y.pathnameBase==="/"?x:Gt([x,d.encodeLocation?d.encodeLocation(Y.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Y.pathnameBase])})),p,c)}function j0(){let s=R0(),u=c0(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),c=s instanceof Error?s.stack:null,d="rgba(200,200,200, 0.5)",p={padding:"0.5rem",backgroundColor:d},m={padding:"2px 4px",backgroundColor:d},g=null;return console.error("Error handled by React Router default ErrorBoundary:",s),g=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:m},"ErrorBoundary")," or"," ",k.createElement("code",{style:m},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},u),c?k.createElement("pre",{style:p},c):null,g)}var k0=k.createElement(j0,null),Vm=class extends k.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,u){return u.location!==s.location||u.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:u.error,location:u.location,revalidation:s.revalidation||u.revalidation}}componentDidCatch(s,u){this.props.onError?this.props.onError(s,u):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const c=g0(s.digest);c&&(s=c)}let u=s!==void 0?k.createElement(ua.Provider,{value:this.props.routeContext},k.createElement(Uo.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?k.createElement(w0,{error:s},u):u}};Vm.contextType=u0;var bo=new WeakMap;function w0({children:s,error:u}){let{basename:c}=k.useContext(Mt);if(typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){let d=x0(u.digest);if(d){let p=bo.get(u);if(p)throw p;let m=Um(d.location,c);if(Dm&&!bo.get(u))if(m.isExternal||d.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:d.replace}));throw bo.set(u,g),g}return k.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return s}function N0({routeContext:s,match:u,children:c}){let d=k.useContext(Wl);return d&&d.static&&d.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=u.route.id),k.createElement(ua.Provider,{value:s},c)}function S0(s,u=[],c){let d=c?.state;if(s==null){if(!d)return null;if(d.errors)s=d.matches;else if(u.length===0&&!d.initialized&&d.matches.length>0)s=d.matches;else return null}let p=s,m=d?.errors;if(m!=null){let A=p.findIndex(w=>w.route.id&&m?.[w.route.id]!==void 0);Ze(A>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),p=p.slice(0,Math.min(p.length,A+1))}let g=!1,b=-1;if(c&&d){g=d.renderFallback;for(let A=0;A<p.length;A++){let w=p[A];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(b=A),w.route.id){let{loaderData:B,errors:Z}=d,S=w.route.loader&&!B.hasOwnProperty(w.route.id)&&(!Z||Z[w.route.id]===void 0);if(w.route.lazy||S){c.isStatic&&(g=!0),b>=0?p=p.slice(0,b+1):p=[p[0]];break}}}}let x=c?.onError,h=d&&x?(A,w)=>{x(A,{location:d.location,params:d.matches?.[0]?.params??{},unstable_pattern:o0(d.matches),errorInfo:w})}:void 0;return p.reduceRight((A,w,B)=>{let Z,S=!1,G=null,Y=null;d&&(Z=m&&w.route.id?m[w.route.id]:void 0,G=w.route.errorElement||k0,g&&(b<0&&B===0?(Qm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,Y=null):b===B&&(S=!0,Y=w.route.hydrateFallbackElement||null)));let L=u.concat(p.slice(0,B+1)),X=()=>{let q;return Z?q=G:S?q=Y:w.route.Component?q=k.createElement(w.route.Component,null):w.route.element?q=w.route.element:q=A,k.createElement(N0,{match:w,routeContext:{outlet:A,matches:L,isDataRoute:d!=null},children:q})};return d&&(w.route.ErrorBoundary||w.route.errorElement||B===0)?k.createElement(Vm,{location:d.location,revalidation:d.revalidation,component:G,error:Z,children:X(),routeContext:{outlet:null,matches:L,isDataRoute:!0},onError:h}):X()},null)}function Bo(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function E0(s){let u=k.useContext(Wl);return Ze(u,Bo(s)),u}function z0(s){let u=k.useContext(Yr);return Ze(u,Bo(s)),u}function A0(s){let u=k.useContext(ua);return Ze(u,Bo(s)),u}function Ho(s){let u=A0(s),c=u.matches[u.matches.length-1];return Ze(c.route.id,`${s} can only be used on routes that contain a unique "id"`),c.route.id}function T0(){return Ho("useRouteId")}function R0(){let s=k.useContext(Uo),u=z0("useRouteError"),c=Ho("useRouteError");return s!==void 0?s:u.errors?.[c]}function C0(){let{router:s}=E0("useNavigate"),u=Ho("useNavigate"),c=k.useRef(!1);return qm(()=>{c.current=!0}),k.useCallback(async(p,m={})=>{Vt(c.current,Ym),c.current&&(typeof p=="number"?await s.navigate(p):await s.navigate(p,{fromRouteId:u,...m}))},[s,u])}var cm={};function Qm(s,u,c){!u&&!cm[s]&&(cm[s]=!0,Vt(!1,c))}k.memo(M0);function M0({routes:s,future:u,state:c,isStatic:d,onError:p}){return Gm(s,void 0,{state:c,isStatic:d,onError:p})}function O0({basename:s="/",children:u=null,location:c,navigationType:d="POP",navigator:p,static:m=!1,unstable_useTransitions:g}){Ze(!ai(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=s.replace(/^\/*/,"/"),x=k.useMemo(()=>({basename:b,navigator:p,static:m,unstable_useTransitions:g,future:{}}),[b,p,m,g]);typeof c=="string"&&(c=ti(c));let{pathname:h="/",search:A="",hash:w="",state:B=null,key:Z="default",unstable_mask:S}=c,G=k.useMemo(()=>{let Y=da(h,b);return Y==null?null:{location:{pathname:Y,search:A,hash:w,state:B,key:Z,unstable_mask:S},navigationType:d}},[b,h,A,w,B,Z,d,S]);return Vt(G!=null,`<Router basename="${b}"> is not able to match the URL "${h}${A}${w}" because it does not start with the basename, so the <Router> won't render anything.`),G==null?null:k.createElement(Mt.Provider,{value:x},k.createElement(qr.Provider,{children:u,value:G}))}var Or="get",_r="application/x-www-form-urlencoded";function Gr(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function _0(s){return Gr(s)&&s.tagName.toLowerCase()==="button"}function D0(s){return Gr(s)&&s.tagName.toLowerCase()==="form"}function U0(s){return Gr(s)&&s.tagName.toLowerCase()==="input"}function B0(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function H0(s,u){return s.button===0&&(!u||u==="_self")&&!B0(s)}var Nr=null;function L0(){if(Nr===null)try{new FormData(document.createElement("form"),0),Nr=!1}catch{Nr=!0}return Nr}var Y0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function vo(s){return s!=null&&!Y0.has(s)?(Vt(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${_r}"`),null):s}function q0(s,u){let c,d,p,m,g;if(D0(s)){let b=s.getAttribute("action");d=b?da(b,u):null,c=s.getAttribute("method")||Or,p=vo(s.getAttribute("enctype"))||_r,m=new FormData(s)}else if(_0(s)||U0(s)&&(s.type==="submit"||s.type==="image")){let b=s.form;if(b==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=s.getAttribute("formaction")||b.getAttribute("action");if(d=x?da(x,u):null,c=s.getAttribute("formmethod")||b.getAttribute("method")||Or,p=vo(s.getAttribute("formenctype"))||vo(b.getAttribute("enctype"))||_r,m=new FormData(b,s),!L0()){let{name:h,type:A,value:w}=s;if(A==="image"){let B=h?`${h}.`:"";m.append(`${B}x`,"0"),m.append(`${B}y`,"0")}else h&&m.append(h,w)}}else{if(Gr(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=Or,d=null,p=_r,g=s}return m&&p==="text/plain"&&(g=m,m=void 0),{action:d,method:c.toLowerCase(),encType:p,formData:m,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Lo(s,u){if(s===!1||s===null||typeof s>"u")throw new Error(u)}function G0(s,u,c,d){let p=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return c?p.pathname.endsWith("/")?p.pathname=`${p.pathname}_.${d}`:p.pathname=`${p.pathname}.${d}`:p.pathname==="/"?p.pathname=`_root.${d}`:u&&da(p.pathname,u)==="/"?p.pathname=`${u.replace(/\/$/,"")}/_root.${d}`:p.pathname=`${p.pathname.replace(/\/$/,"")}.${d}`,p}async function V0(s,u){if(s.id in u)return u[s.id];try{let c=await import(s.module);return u[s.id]=c,c}catch(c){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Q0(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function Z0(s,u,c){let d=await Promise.all(s.map(async p=>{let m=u.routes[p.route.id];if(m){let g=await V0(m,c);return g.links?g.links():[]}return[]}));return W0(d.flat(1).filter(Q0).filter(p=>p.rel==="stylesheet"||p.rel==="preload").map(p=>p.rel==="stylesheet"?{...p,rel:"prefetch",as:"style"}:{...p,rel:"prefetch"}))}function om(s,u,c,d,p,m){let g=(x,h)=>c[h]?x.route.id!==c[h].route.id:!0,b=(x,h)=>c[h].pathname!==x.pathname||c[h].route.path?.endsWith("*")&&c[h].params["*"]!==x.params["*"];return m==="assets"?u.filter((x,h)=>g(x,h)||b(x,h)):m==="data"?u.filter((x,h)=>{let A=d.routes[x.route.id];if(!A||!A.hasLoader)return!1;if(g(x,h)||b(x,h))return!0;if(x.route.shouldRevalidate){let w=x.route.shouldRevalidate({currentUrl:new URL(p.pathname+p.search+p.hash,window.origin),currentParams:c[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function K0(s,u,{includeHydrateFallback:c}={}){return X0(s.map(d=>{let p=u.routes[d.route.id];if(!p)return[];let m=[p.module];return p.clientActionModule&&(m=m.concat(p.clientActionModule)),p.clientLoaderModule&&(m=m.concat(p.clientLoaderModule)),c&&p.hydrateFallbackModule&&(m=m.concat(p.hydrateFallbackModule)),p.imports&&(m=m.concat(p.imports)),m}).flat(1))}function X0(s){return[...new Set(s)]}function J0(s){let u={},c=Object.keys(s).sort();for(let d of c)u[d]=s[d];return u}function W0(s,u){let c=new Set;return new Set(u),s.reduce((d,p)=>{let m=JSON.stringify(J0(p));return c.has(m)||(c.add(m),d.push({key:m,link:p})),d},[])}function Zm(){let s=k.useContext(Wl);return Lo(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function $0(){let s=k.useContext(Yr);return Lo(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Yo=k.createContext(void 0);Yo.displayName="FrameworkContext";function Km(){let s=k.useContext(Yo);return Lo(s,"You must render this element inside a <HydratedRouter> element"),s}function F0(s,u){let c=k.useContext(Yo),[d,p]=k.useState(!1),[m,g]=k.useState(!1),{onFocus:b,onBlur:x,onMouseEnter:h,onMouseLeave:A,onTouchStart:w}=u,B=k.useRef(null);k.useEffect(()=>{if(s==="render"&&g(!0),s==="viewport"){let G=L=>{L.forEach(X=>{g(X.isIntersecting)})},Y=new IntersectionObserver(G,{threshold:.5});return B.current&&Y.observe(B.current),()=>{Y.disconnect()}}},[s]),k.useEffect(()=>{if(d){let G=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(G)}}},[d]);let Z=()=>{p(!0)},S=()=>{p(!1),g(!1)};return c?s!=="intent"?[m,B,{}]:[m,B,{onFocus:Xn(b,Z),onBlur:Xn(x,S),onMouseEnter:Xn(h,Z),onMouseLeave:Xn(A,S),onTouchStart:Xn(w,Z)}]:[!1,B,{}]}function Xn(s,u){return c=>{s&&s(c),c.defaultPrevented||u(c)}}function I0({page:s,...u}){let{router:c}=Zm(),d=k.useMemo(()=>Cm(c.routes,s,c.basename),[c.routes,s,c.basename]);return d?k.createElement(eb,{page:s,matches:d,...u}):null}function P0(s){let{manifest:u,routeModules:c}=Km(),[d,p]=k.useState([]);return k.useEffect(()=>{let m=!1;return Z0(s,u,c).then(g=>{m||p(g)}),()=>{m=!0}},[s,u,c]),d}function eb({page:s,matches:u,...c}){let d=Bt(),{future:p,manifest:m,routeModules:g}=Km(),{basename:b}=Zm(),{loaderData:x,matches:h}=$0(),A=k.useMemo(()=>om(s,u,h,m,d,"data"),[s,u,h,m,d]),w=k.useMemo(()=>om(s,u,h,m,d,"assets"),[s,u,h,m,d]),B=k.useMemo(()=>{if(s===d.pathname+d.search+d.hash)return[];let G=new Set,Y=!1;if(u.forEach(X=>{let q=m.routes[X.route.id];!q||!q.hasLoader||(!A.some(K=>K.route.id===X.route.id)&&X.route.id in x&&g[X.route.id]?.shouldRevalidate||q.hasClientLoader?Y=!0:G.add(X.route.id))}),G.size===0)return[];let L=G0(s,b,p.unstable_trailingSlashAwareDataRequests,"data");return Y&&G.size>0&&L.searchParams.set("_routes",u.filter(X=>G.has(X.route.id)).map(X=>X.route.id).join(",")),[L.pathname+L.search]},[b,p.unstable_trailingSlashAwareDataRequests,x,d,m,A,u,s,g]),Z=k.useMemo(()=>K0(w,m),[w,m]),S=P0(w);return k.createElement(k.Fragment,null,B.map(G=>k.createElement("link",{key:G,rel:"prefetch",as:"fetch",href:G,...c})),Z.map(G=>k.createElement("link",{key:G,rel:"modulepreload",href:G,...c})),S.map(({key:G,link:Y})=>k.createElement("link",{key:G,nonce:c.nonce,...Y,crossOrigin:Y.crossOrigin??c.crossOrigin})))}function tb(...s){return u=>{s.forEach(c=>{typeof c=="function"?c(u):c!=null&&(c.current=u)})}}var ab=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ab&&(window.__reactRouterVersion="7.13.1")}catch{}function lb({basename:s,children:u,unstable_useTransitions:c,window:d}){let p=k.useRef();p.current==null&&(p.current=Hg({window:d,v5Compat:!0}));let m=p.current,[g,b]=k.useState({action:m.action,location:m.location}),x=k.useCallback(h=>{c===!1?b(h):k.startTransition(()=>b(h))},[c]);return k.useLayoutEffect(()=>m.listen(x),[m,x]),k.createElement(O0,{basename:s,children:u,location:g.location,navigationType:g.action,navigator:m,unstable_useTransitions:c})}var Xm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Je=k.forwardRef(function({onClick:u,discover:c="render",prefetch:d="none",relative:p,reloadDocument:m,replace:g,unstable_mask:b,state:x,target:h,to:A,preventScrollReset:w,viewTransition:B,unstable_defaultShouldRevalidate:Z,...S},G){let{basename:Y,navigator:L,unstable_useTransitions:X}=k.useContext(Mt),q=typeof A=="string"&&Xm.test(A),K=Um(A,Y);A=K.to;let le=b0(A,{relative:p}),$=Bt(),I=null;if(b){let ke=Do(b,[],$.unstable_mask?$.unstable_mask.pathname:"/",!0);Y!=="/"&&(ke.pathname=ke.pathname==="/"?Y:Gt([Y,ke.pathname])),I=L.createHref(ke)}let[je,U,ae]=F0(d,S),ne=sb(A,{replace:g,unstable_mask:b,state:x,target:h,preventScrollReset:w,relative:p,viewTransition:B,unstable_defaultShouldRevalidate:Z,unstable_useTransitions:X});function W(ke){u&&u(ke),ke.defaultPrevented||ne(ke)}let ie=!(K.isExternal||m),Oe=k.createElement("a",{...S,...ae,href:(ie?I:void 0)||K.absoluteURL||le,onClick:ie?W:u,ref:tb(G,U),target:h,"data-discover":!q&&c==="render"?"true":void 0});return je&&!q?k.createElement(k.Fragment,null,Oe,k.createElement(I0,{page:le})):Oe});Je.displayName="Link";var nb=k.forwardRef(function({"aria-current":u="page",caseSensitive:c=!1,className:d="",end:p=!1,style:m,to:g,viewTransition:b,children:x,...h},A){let w=li(g,{relative:h.relative}),B=Bt(),Z=k.useContext(Yr),{navigator:S,basename:G}=k.useContext(Mt),Y=Z!=null&&pb(w)&&b===!0,L=S.encodeLocation?S.encodeLocation(w).pathname:w.pathname,X=B.pathname,q=Z&&Z.navigation&&Z.navigation.location?Z.navigation.location.pathname:null;c||(X=X.toLowerCase(),q=q?q.toLowerCase():null,L=L.toLowerCase()),q&&G&&(q=da(q,G)||q);const K=L!=="/"&&L.endsWith("/")?L.length-1:L.length;let le=X===L||!p&&X.startsWith(L)&&X.charAt(K)==="/",$=q!=null&&(q===L||!p&&q.startsWith(L)&&q.charAt(L.length)==="/"),I={isActive:le,isPending:$,isTransitioning:Y},je=le?u:void 0,U;typeof d=="function"?U=d(I):U=[d,le?"active":null,$?"pending":null,Y?"transitioning":null].filter(Boolean).join(" ");let ae=typeof m=="function"?m(I):m;return k.createElement(Je,{...h,"aria-current":je,className:U,ref:A,style:ae,to:g,viewTransition:b},typeof x=="function"?x(I):x)});nb.displayName="NavLink";var ib=k.forwardRef(({discover:s="render",fetcherKey:u,navigate:c,reloadDocument:d,replace:p,state:m,method:g=Or,action:b,onSubmit:x,relative:h,preventScrollReset:A,viewTransition:w,unstable_defaultShouldRevalidate:B,...Z},S)=>{let{unstable_useTransitions:G}=k.useContext(Mt),Y=db(),L=ub(b,{relative:h}),X=g.toLowerCase()==="get"?"get":"post",q=typeof b=="string"&&Xm.test(b),K=le=>{if(x&&x(le),le.defaultPrevented)return;le.preventDefault();let $=le.nativeEvent.submitter,I=$?.getAttribute("formmethod")||g,je=()=>Y($||le.currentTarget,{fetcherKey:u,method:I,navigate:c,replace:p,state:m,relative:h,preventScrollReset:A,viewTransition:w,unstable_defaultShouldRevalidate:B});G&&c!==!1?k.startTransition(()=>je()):je()};return k.createElement("form",{ref:S,method:X,action:L,onSubmit:d?x:K,...Z,"data-discover":!q&&s==="render"?"true":void 0})});ib.displayName="Form";function rb(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Jm(s){let u=k.useContext(Wl);return Ze(u,rb(s)),u}function sb(s,{target:u,replace:c,unstable_mask:d,state:p,preventScrollReset:m,relative:g,viewTransition:b,unstable_defaultShouldRevalidate:x,unstable_useTransitions:h}={}){let A=Ba(),w=Bt(),B=li(s,{relative:g});return k.useCallback(Z=>{if(H0(Z,u)){Z.preventDefault();let S=c!==void 0?c:Pn(w)===Pn(B),G=()=>A(s,{replace:S,unstable_mask:d,state:p,preventScrollReset:m,relative:g,viewTransition:b,unstable_defaultShouldRevalidate:x});h?k.startTransition(()=>G()):G()}},[w,A,B,c,d,p,u,s,m,g,b,x,h])}var cb=0,ob=()=>`__${String(++cb)}__`;function db(){let{router:s}=Jm("useSubmit"),{basename:u}=k.useContext(Mt),c=T0(),d=s.fetch,p=s.navigate;return k.useCallback(async(m,g={})=>{let{action:b,method:x,encType:h,formData:A,body:w}=q0(m,u);if(g.navigate===!1){let B=g.fetcherKey||ob();await d(B,c,g.action||b,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:A,body:w,formMethod:g.method||x,formEncType:g.encType||h,flushSync:g.flushSync})}else await p(g.action||b,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:A,body:w,formMethod:g.method||x,formEncType:g.encType||h,replace:g.replace,state:g.state,fromRouteId:c,flushSync:g.flushSync,viewTransition:g.viewTransition})},[d,p,u,c])}function ub(s,{relative:u}={}){let{basename:c}=k.useContext(Mt),d=k.useContext(ua);Ze(d,"useFormAction must be used inside a RouteContext");let[p]=d.matches.slice(-1),m={...li(s||".",{relative:u})},g=Bt();if(s==null){m.search=g.search;let b=new URLSearchParams(m.search),x=b.getAll("index");if(x.some(A=>A==="")){b.delete("index"),x.filter(w=>w).forEach(w=>b.append("index",w));let A=b.toString();m.search=A?`?${A}`:""}}return(!s||s===".")&&p.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(m.pathname=m.pathname==="/"?c:Gt([c,m.pathname])),Pn(m)}function pb(s,{relative:u}={}){let c=k.useContext(Hm);Ze(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:d}=Jm("useViewTransitionState"),p=li(s,{relative:u});if(!c.isTransitioning)return!1;let m=da(c.currentLocation.pathname,d)||c.currentLocation.pathname,g=da(c.nextLocation.pathname,d)||c.nextLocation.pathname;return Ur(p.pathname,g)!=null||Ur(p.pathname,m)!=null}function fb(){const s=Bt();return n.jsxs("div",{className:"relative flex flex-col items-center justify-center h-screen text-center px-4 bg-[var(--bg)]",children:[n.jsx("div",{"aria-hidden":"true",className:"absolute bottom-0 text-9xl md:text-[12rem] font-black text-[var(--bg-2)] select-none pointer-events-none z-0",children:"404"}),n.jsxs("div",{className:"relative z-10",children:[n.jsx("h1",{className:"text-xl md:text-2xl font-medium mt-6 text-[var(--ink)]",children:"This page has not been generated"}),n.jsx("p",{className:"mt-2 text-base text-[var(--muted-2)] tracking-[0.04em]",children:s.pathname}),n.jsx("p",{className:"mt-4 text-lg md:text-xl text-[var(--muted)]",children:"Tell me more about this page, so I can generate it"})]})]})}const Wm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABACAYAAABfuzgrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDEwLjAtYzAwMCA3OS5kMjBlNDY2MzAsIDIwMjUvMTIvMDktMDI6MTE6MjMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NDIzNGE4NjAtMzY3My0yNzRkLTkxNjQtMGNmZTEzMjJiZTg3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBGMUQ1ODQ0NThBMzExRjE4Q0Y0RjdERUE1Q0YyN0ZEIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBGMUQ1ODQzNThBMzExRjE4Q0Y0RjdERUE1Q0YyN0ZEIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNy40IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFlNDEyZmE4LWI5NTgtZWY0YS05OTlhLTRmMzgxMTNjMzMyMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MjM0YTg2MC0zNjczLTI3NGQtOTE2NC0wY2ZlMTMyMmJlODciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6HZ9cfAAALMElEQVR42uxcTWzjWB1/sRM7zlfrzsx+sawgK3GAE8pwA4lD5jISx4z2gDimVw5I6YUz6YUzzQ0JcWhOXBBSIySkkZCWhr2wq4WdyaJlNDs7s43bpPlObH5/+zl1MkmnKSnNpP+f5Nr1e/772X6/9/96LyHHcQSDwZgNhV8Bg8EEYTCYIAwGE4TBYIIwGEwQBoMJwmAwQRgMJgiDwQRhMBhMEAaDCcJgMEEYDCYIg8EEYTCYIAzGa4XwVd/go4e/u5YVWd//4U9D/HkZK08Qwne++4OF6h89fyIe/vkPYnPrjrj/wS9Eq/7FQtf/65O/8ZdlsInF5GAwQZgcjHU3sVaVHP/++I+r9RD4AQ3PYcPe/zENx/0vsHe8vVtHePUc5+wax9s7Xr2scOyKPB6fl3Uy+JOmvePYJRzXfHmefBtlAmVO2i0TTjko32uQk8VxJdgur8i/lz3ZTuGcyXfP2WftCVwrgvJE8J6yOPB+fvKzX7MGYc1xKexhO4hoRh379NR5OneoRrR9LRorxBKbGUUdj5UFbI9pU1V1X9ONohFLZrCfKT+s6dPyWYOsETmy2IoXqFfBVsVWfk1ei4ktn0jdEtFo3LRHo7xVf7ozHPapbBvndzQtWheh0HikHw56YjQcUvkuCFGKGrGDkKJm/BG+3W6IXrc9IT+eNIUWNUzbHuVP6s93RqMBE2TNNEcFI+O9ePKWKUdNHw8kKUxJony/1y6gE9V63dbOkolCo+++PL67JJlWSFHQyZN5mFjyOCFOm3W38LRxBG6EhHn7G379avDiTrtpdTtNkdy8LVQ1Qqdqs+TrRjzvkPwQjqNx0W4ds5O+bmZVv9exjutPrYb1TIQj+nhrn1p0vobzpU67cVfTY6WU+VZ664339tEZCkt8lJyqhjPm7XdpM5fmztj2Njo5EW4Lx7Vu5/RcQg0H/Sl3yJ4ot0fDl+T3Oi1PvmPTwMEm1rr6HPjYwlZmnx8JbDAvuu3GdnLjTjYaS6VBlGKreVRtnx5XlnD7rI7RHaSsolfSyIz7jpbyXNAU1W6rIQaDrvDd//nxAfvcctt+ubzVtKodaBqXXGv6C52vFUGow372afXa7t88eVGKwGklswNmGZlcFWigeb5NRppovg9TmeEnkHmViWgx9wTk5RyvI1oz6mekXF+mFfCN5ppvw2EvK+tcxYtLjwaD8+T772F3xjNYgfPn+VK5QBCArinJPZtYE6Nh07pWckiUoUnGH9+Im5kZ/sQBbfBtTESHqvHkFsi0Rf8fBDo3dRI4wcoeNIcZgUknry2Q+aZHEzmYdMFOsu9GjCJ6LSCzGItvHIYjWmFGGyjCdEh+laJG9uCL5MJhfZk+U0C+uoc259SwNjYZZXsfe1E0vRiNJUz/mnA4UjSMRCEWS2IfPwy8k2m40TT4N3ldN2pGLEFbDsEDnAsVBGuQMzz69O9Q8aNVaEqt1zm1pFMv0OmzZBpRBEh2nEP4E2Zi441dlO3AjyGtUEad9MbWOzlom/3G8bN70BIUHLgLOW5nIrOKZEMz3fX6kiMG/S78IzdqtKcoSi6RulONaNFy8/g5mUuQqWVAkizqF1uNowoc5PHogZAtOlMqS502HA67kSpyoMnUWgbwjDV0esgP07Erv9OCqTV03wPeS7SGtpJvhbYoVF7sdlpWLJaAL2dYaP++8PIvGYSJ86cn9d3R5PclMuWjRtzSDeOePRwiaOC+iyquP4waRrHTbsGvapfXgiBf1P6xsCnl468HvxXW0YuFrn/73W9f2bOMRsMa2peRndqk/IAkyB6Rw7z9TUERHiJHS0aN4MBW1HAkB82QTW2+hZDo0xKZZv3eE0HRH/g0UvZAWF8/CSbCSEPlEht3hK7HLerg5AyTP9HrnlZVVcuiI5I2yfb7nSqRSkacdtHOXBhlPrGXOUi48u1hLhLSZsmnTltBaLkA7eEl/XAuFk9WnNFINI6/psGuFE9u4n2pIDDei27sts+CCDRo5GOJFBGtbDsjq9k49gfI6mAwqKY2zQy0SQH3WA+CfPThXy597eeffbLwNVdJEL8jhxXPZIEJ4JtMWWgOIgeN5LWAKebazkQIEIS0ThqOvpgqn4cqtE8ZJEI2W+xMO8o0Ykc8EphICApJEEERp07rRLhmmkdkazQVhfofBwkxgsZALkWonpU+EeXq99COUE/oxthMrNI5ap/MpFuUUwFp3MKIjmc4I0he03W8K4PqwsfrTQQQ3HsjXwPTLgMNY161P/J/IQjNyl0Ux/UXl772GpAlTeJnm6FRzKkOmQ5GplT14q8dsh6Q1lCV8FgjSc0ykb2WGu1CWvlqZsmcL384HEy1x5nnlGeR3Q88f9+cKh//TybeWmiQ+x/8crEL7C/F73/zK3ntz8lIWXANyp/EFWepRSCq4o2CmhHsvPXpDgsT69I3bFhfkaWSw8jrR3QqlKuRSby1gqKERCSi+WHj/TMt7UiNHXK3tXLSW/V/LlT/w4dnkwibzz4Wjx49WpXvR50zHej8lRkjJ5lF926/OdfMW9QkyMjpMFmYWjvYHiiKKvr9dlGsPx7EkxuVycmKTtBHs25cFGvFJx66kRk5clc827ozyyyiLPwyzB1ThnfNeGKrDFt9FxEr0Tq13E7iRbzWGmareWIN+r15BLlZeZDXYFZujrLeEm4kSkawKlMjfoZIMG9bAHloK3Nz623ybyrkiyB7v86EmE6QZkPuhEo7sDkT240hyGtADjJpMhSJAna8pOHJ2NQa9DvjD4sRvxCO6PPMpfwiIyjyGb4Dbg567Xm+0EVMw+ssv7j7aTulwdm8MISqtew53+NmEGTFyZGRzmIB+YYaOv42jncxF0sEJ+hBm2zTxEf/wyLjvS9j+mZgWn2RwrYU5p0xizYTqF+Qna4mw8iuTJp+Ls+TLFMJqdNkyc0jmnJ+xCetnB9ZM18ReTMVdWnWernfbZf8fxBK3qcBJxC5y8vZChZyIetPkGsmR9afMiFenubgn6cPZKbMN3dg87+PHEgJc7JmmTq105Pn78OEcpNXNF0E19DMX4po0VSTNAgGp/MWcgDjmH8NJtpOQPPI+moa96LMeonu5xMIZZhaoiNbH7FIlsy5uKaYElKovTWESP1nCo7qOVku/IVO088LAuxNPfvE9bjX4dQ7myw/X/6BlOuXF6a0z6GUKweb3nav29mWCUgzkUwVkfOg536MAEUBicVyMrW5+6rQ8jIQumo7jn72Z96vmswjB+VAvnzyuZsD+dGP710qinWRn/2hJbc0Zwqd1nW8g6FZ6VvQOVcrUHJq0G+/0gcgGZj1mwZBMlPZ5yoRg8g17YfQij60IS2X3KKuU6VEH9WlE4mNW9mokTLl8lPKUlvtFjL1aAv8E8yz0shthZnXtU7pmlDIjCGHRtEuiojSNx4iuYlknmUdPRWJ5JarESj0PF4w1e8hU98TmPYhaO6UFo0KV0N5AtzkKKaDWCdHXxGRTSORFKpb7snHdBAxQtYbC6dEPLHhahTKlPsONcwmq9/t0FoTPG/Kuz/K3fsjRzRE29pIPg56PeEvuUUmnZKNWUy1MQNOetlNhHZa0OCdK19yG77JZtW3vnf/qkKFNTFjekcc29Y7M+u/NBs2cUuIO5MrGuclY8qLhJLfu1io+brLhTjn2cW6L5jiNeQMwetBxMqt52AwVpYgtJ7j6X8e8RtnMEHE6q7nYDBWjyCLkoOiV/4s3hWah8W4gQg5a7rYnsEQ/MuKDAYThMFggjAYTBAGgwnCYDBBGAwmCIPBBGEwGEwQBoMJwmAwQRgMJgiDwQRhMJggDAYThMFggjAYNw7/FWAAi26mbSS44fEAAAAASUVORK5CYII=",mb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABACAYAAABfuzgrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDEwLjAtYzAwMCA3OS5kMjBlNDY2MzAsIDIwMjUvMTIvMDktMDI6MTE6MjMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NDIzNGE4NjAtMzY3My0yNzRkLTkxNjQtMGNmZTEzMjJiZTg3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjExQTg3QUM2NThBNDExRjE5NkY0RkVCOURBRkVDNjk2IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjExQTg3QUM1NThBNDExRjE5NkY0RkVCOURBRkVDNjk2IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNy40IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFkNjhmZjAxLWMzYjUtYWM0NS04OTM1LTVmZGE1YWU2OTJhMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MjM0YTg2MC0zNjczLTI3NGQtOTE2NC0wY2ZlMTMyMmJlODciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6dJ7OqAAAF3klEQVR42uydv48bRRTHZxF/ABuJAomGDaKACq2poNxr0u8pBbWvpUCyG2rs/wBbNEiIwq5oEJKtSEiHkMI515AoP3yLlEQJIooXKaSgwGY3fnN5fuyPG3s3Xq+/H92c92Znxju78515M/NWZy0WCwUASOY13AIAIBAAIBAAIBAAIBAAIBAAIBAAIBAAIBAAIBAAAAQCAAQCAAQCAAQCAAQCAAQCwE7xetlfcHr87VbeyPrwk08tPF5QeYHEvPf+R0bpn/75UB1f+169celNdeXq5+r57L5R/ru3fsWTBTCxIA4AgUAcoO4mVlXF8fEH71arEtbKx8vj83hrJU6nsyx+Vv/9IsaLjsc67jz/Mq8bHTqWZbnRcT86Ds7TLH+cKM598WlF55Q1ZHmpHMuLPsb8elh+tZreUqvplicTrnk1zUpdrf/V/etrpxhBMHKsRS8KoyjM1LKx8/g47iQKgyi01FIsmvjvMwrx+Y44n1c+TKwaicOjhpIX4kbi79BtsaPQTDiOOYrC5Yy83Sg0ojBZs3wIpEYjR2x+HEThkHpJHbosvk9CGlCvWrRQHCbEogjpuuVxGpOE/Jxgw/IhkB02q8KEBqHjA3r4Dfp0mFlSFD4Tpl1guUd03ZcSGrjKEcRFzpuUD4HswZzjiDWEDo0qReCxXjws+JonJd+TiVJYxaoMi/lc3bu91WfSJ3Hoyew4o9HzEWGckNamEckVo4nusWV6l8q1RZpJjvnmUZoyblxe+R4zWWUdQhafNdfx2SKANudChRFklb+fhdsWR8ww4eHLBjOiYLNGw+N03hGtBNksb4uCLxrJgNIHrMwOzVtaCdfQo3NndOwXLIqs8n02XxvRddosT4euWV9/mlmpV9OaVO+Ayj4r2MTd/RFkevuGms//rcKlBNR78YY+EZNtm3rGNhOVwxrOAfX8DRany26o5OVUn75nyMrUvXEnYSQJCjQB0+6Dl3Oei6ZD961BnwM272omjCQ9ig/pfoXMpNMiC0SHtbsCuR/8ZmxKaX4ZfaPCp0+M8r/19jtli8RlvTt/qDYzxZRYLfOpUTUNVn1cYXZJ+99LEGpADc7PWIXatP5Z5Q+pvq2EOG6q9tiI0xUjUJPlC0WdJ3RfWrURyOn1n9bO+/u9W8Z5ShZI2pyDT7aDjFUgx3ASrEegdo6tvskqlSpgJXCTZWROU3QsWZ2HXXbdXolAYq9cU/6aPVk77xbwchrsJjvNhymNo46713bOvbQLXgqvhkCuXP3CLMP8sfruqy8p72fR738M30H5seyHmNUTuuR+UTQ+W9EZq/1goPZhmff57I5R+uvHP5wfP/vjpppOp1V5YI7ouccp5sRBgeaOy/Zd2mxE6eyBQA5zOoNw71axKu546AtxTEp+cDZbHh5eYN+gjiZXqLCTvjNeub5YiUkaSfTyZRE0xWZj3ZEbpJ6Cq8nOiIO7fbfFEqPcKW9lmEvNNec7tuHKlckiQdnnlaG3Au+QvIznsR8Cqbg4XOagGJBPVjfFVysUu8k+W5npUBimLH+6LH2LGl2Q4NToqJe701Is/prLwI6BUNc5rwy9Ffpiot5idW+S2RnuhUC2LA6PuUwoMQKcsJeGbBo1Lmds8gV0fihEMqMH6tCkMxR52qIxzJg4+uz7XOYWH1JZE2aKnbAd7hPR6H3mTq9fdJL17Ym6p+Vfp/wRG1V7YoTVHgie6Gy0c6jN3FLO2AZht/auJhUYOcY5K06mE27dcKUTYpAxoe/SdTgpaY+oQfC5iL6mBhs1ePxBjleynVHPbs5O/3jD8vPOc1OrLxw01avYPa+EQKpgVv18c1rWUmFg6N6R5207vqAD5Sbvd1Tp/EXrXk8TC++QA4X3QVQV3+cAoJoCid/nePRgijsOIBBV3fc5AKieQEzFEXvwai/eCvlhgT3EWiwWuAsAKPx/EAAgEAAgEAAgEAAgEAAgEAAgEAAgEAAgEAAABAIABAIABAIABAIABAIABAIABAJAHfhPgAEAek7EkD6DsgoAAAAASUVORK5CYII=";function Zl(s,u){if(!(typeof window>"u")&&typeof window.gtag=="function")try{window.gtag("event",s,u)}catch{}}const ut={formSubmit:(s,u)=>Zl("form_submit",{areas:s.join(","),region:u}),formSubmitFail:s=>Zl("form_submit_fail",{reason:s}),phoneClick:s=>Zl("phone_click",{source:s}),kakaoClick:s=>Zl("kakao_click",{source:s}),priceCalcUse:(s,u)=>Zl("price_calc_use",{space:s,house_type:u}),quoteSectionView:()=>Zl("quote_section_view")},dm=[{label:"포트폴리오",href:"#portfolio"},{label:"시공범위",href:"#scope"},{label:"FAQ",href:"#faq"},{label:"견적문의",href:"#quote"}],um=[{label:"케라폭시 줄눈이란?",href:"/info/kerafoxy"},{label:"케라폭시 가격 안내",href:"/info/kerafoxy-price"},{label:"케라폭시 제품 소개",href:"/info/kerafoxy-product"},{label:"폴리우레아 vs 케라폭시 비교",href:"/info/comparison"},{label:"줄눈시공 하는 이유",href:"/info/why-grout"}];function nl(){const[s,u]=k.useState(!1),[c,d]=k.useState(!1),[p,m]=k.useState(!1),[g,b]=k.useState(!1),x=k.useRef(null),h=k.useRef(!1),A=Ba(),w=Bt(),B=w.pathname==="/";k.useEffect(()=>{const L=()=>u(window.scrollY>60);return window.addEventListener("scroll",L),()=>window.removeEventListener("scroll",L)},[]),k.useEffect(()=>{const L=X=>{x.current&&!x.current.contains(X.target)&&m(!1)};return document.addEventListener("mousedown",L),()=>document.removeEventListener("mousedown",L)},[]),k.useEffect(()=>{if(!c)return;const L=window.scrollY,X=document.documentElement,q=document.body,K={htmlOverflow:X.style.overflow,bodyOverflow:q.style.overflow,bodyPosition:q.style.position,bodyTop:q.style.top,bodyWidth:q.style.width};return X.style.overflow="hidden",q.style.overflow="hidden",q.style.position="fixed",q.style.top=`-${L}px`,q.style.width="100%",()=>{X.style.overflow=K.htmlOverflow,q.style.overflow=K.bodyOverflow,q.style.position=K.bodyPosition,q.style.top=K.bodyTop,q.style.width=K.bodyWidth,h.current?h.current=!1:window.scrollTo(0,L)}},[c]);const Z=L=>{h.current=!0,d(!1),B?setTimeout(()=>{const X=document.querySelector(L);X&&X.scrollIntoView({behavior:"smooth"})},0):(A("/"),setTimeout(()=>{const X=document.querySelector(L);X&&X.scrollIntoView({behavior:"smooth"})},300))},S=s||!B,G=S?"text-stone-700 hover:text-[var(--accent)]":"text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] hover:text-white",Y=S?"text-stone-900":"text-white";return n.jsxs("nav",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${S?"bg-white shadow-sm":"bg-transparent"}`,children:[n.jsxs("div",{className:"px-5 md:px-12 lg:px-20 h-12 md:h-auto md:py-4 flex items-center transition-all duration-300",children:[n.jsx("div",{className:"flex-1",children:n.jsx(Je,{to:"/",className:"flex items-center gap-3 cursor-pointer",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:n.jsx("img",{src:S?mb:Wm,alt:"디테일라인 - 서울·경기 줄눈시공 전문",className:"h-10 md:h-12 w-auto object-contain transition-opacity duration-300"})})}),n.jsx("div",{className:"flex-1 hidden md:flex justify-center",children:n.jsxs("ul",{className:"flex items-center gap-8",children:[dm.map(L=>n.jsx("li",{children:n.jsx("button",{onClick:()=>Z(L.href),className:`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${G}`,children:L.label})},L.href)),n.jsxs("li",{ref:x,className:"relative",children:[n.jsxs("button",{onClick:()=>m(!p),className:`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1 ${w.pathname.startsWith("/info")?Y:G}`,children:["줄눈 정보",n.jsx("i",{className:`ri-arrow-down-s-line text-lg transition-transform ${p?"rotate-180":""}`})]}),p&&n.jsx("div",{className:"absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-2xl overflow-hidden w-56",style:{boxShadow:"0 4px 24px 0 rgba(0,0,0,0.10)"},children:n.jsx("ul",{className:"py-2",children:um.map(L=>n.jsx("li",{children:n.jsx(Je,{to:L.href,onClick:()=>m(!1),className:"block px-5 py-3 text-sm text-stone-500 hover:bg-stone-100 hover:text-stone-900 transition-colors cursor-pointer",children:L.label})},L.href))})})]})]})}),n.jsx("div",{className:"flex-1 hidden md:flex items-center justify-end gap-4",children:n.jsxs("a",{href:"tel:010-8005-6674",onClick:()=>ut.phoneClick("navbar"),className:`flex items-center gap-2 text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${S?"bg-[var(--accent)] text-white px-5 py-2.5 rounded-full hover:bg-[var(--accent-deep)]":"bg-white/10 text-white px-5 py-2.5 rounded-full border border-white/30 hover:bg-white/20 backdrop-blur-sm"}`,children:[n.jsx("i",{className:"ri-phone-line text-sm"}),"010-8005-6674"]})}),n.jsx("button",{className:`md:hidden w-8 h-8 flex items-center justify-center cursor-pointer ml-auto ${S?"text-stone-800":"text-white"}`,onClick:()=>d(!c),children:n.jsx("i",{className:`text-xl ${c?"ri-close-line":"ri-menu-line"}`})})]}),n.jsxs(n.Fragment,{children:[n.jsx("div",{className:`fixed inset-0 bg-black/60 z-40 md:hidden transition-opacity duration-300 ${c?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}`,onClick:()=>d(!1)}),n.jsxs("div",{className:`fixed top-0 right-0 h-screen w-4/6 bg-stone-100 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto md:hidden ${c?"translate-x-0":"translate-x-full"}`,children:[n.jsx("div",{className:"sticky top-0 bg-white h-12 px-5 flex items-center justify-end border-b border-stone-300",children:n.jsx("button",{onClick:()=>d(!1),className:"text-stone-700 hover:text-stone-900 cursor-pointer",children:n.jsx("i",{className:"ri-close-line text-2xl"})})}),n.jsxs("div",{className:"px-6 py-4",children:[n.jsxs("ul",{className:"space-y-3",children:[dm.map(L=>n.jsx("li",{children:n.jsx("button",{onClick:()=>Z(L.href),className:"w-full border-b border-stone-200 pb-4 text-left text-sm font-medium text-stone-600 hover:text-[var(--accent)] cursor-pointer transition-colors",children:L.label})},L.href)),n.jsxs("li",{children:[n.jsxs("div",{className:"flex flex-row w-full text-sm font-medium text-stone-600 mb-4 items-center justify-between",children:["줄눈 정보",n.jsx("i",{className:"ri-arrow-down-s-line text-xl"})]}),n.jsx("ul",{className:"space-y-4 pl-3 border-stone-100",children:um.map(L=>n.jsx("li",{children:n.jsx(Je,{to:L.href,onClick:()=>{h.current=!0,d(!1)},className:"text-sm font-medium text-stone-400 hover:text-[var(--accent)] cursor-pointer transition-colors block",children:L.label})},L.href))})]})]}),n.jsxs("a",{href:"tel:010-8005-6674",onClick:()=>ut.phoneClick("navbar"),className:"call-bg mt-8 flex items-center justify-center gap-2 px-6 py-3 bg-[var(--accent)] text-white text-sm font-semibold rounded-full hover:bg-[var(--accent-deep)] transition-colors cursor-pointer w-full",children:[n.jsx("i",{className:"ri-phone-line"}),"010-8005-6674"]}),n.jsx("p",{className:"text-center text-xs text-stone-500 mt-3",children:"번호를 누르면 전화 연결 됩니다."})]})]})]})]})}const hb=[{label:"포트폴리오",href:"#portfolio"},{label:"시공범위",href:"#scope"},{label:"FAQ",href:"#faq"},{label:"견적문의",href:"#quote"}],xb=["화장실 줄눈","주방 줄눈","베란다 줄눈","현관 줄눈","수영장 줄눈","목욕탕 줄눈"];function il(){const s=u=>{const c=document.querySelector(u);c&&c.scrollIntoView({behavior:"smooth"})};return n.jsx("footer",{className:"bg-[var(--dark)] mx-2 overflow-hidden",children:n.jsxs("div",{className:"px-6 md:px-12 lg:px-16 pt-10 pb-8",children:[n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-6 md:mb-12",children:[n.jsxs("div",{className:"lg:col-span-1",children:[n.jsx("img",{src:Wm,alt:"디테일라인 - 서울·경기 줄눈시공 전문",className:"h-10 w-auto object-contain mb-4"}),n.jsxs("p",{className:"text-stone-400 text-sm leading-relaxed mb-5",children:["집요함이 만들어 내는 완벽함, 디테일라인",n.jsx("br",{}),"완벽한 마감을 약속드립니다."]}),n.jsxs("div",{className:"space-y-2",children:[n.jsxs("div",{className:"flex items-center gap-2 text-stone-400 text-sm",children:[n.jsx("i",{className:"ri-phone-line text-stone-500"}),n.jsx("a",{href:"tel:010-8005-6674",onClick:()=>ut.phoneClick("footer"),className:"hover:text-white transition-colors cursor-pointer",children:"010-8005-6674"})]}),n.jsxs("div",{className:"flex items-center gap-2 text-stone-400 text-sm",children:[n.jsx("i",{className:"ri-map-pin-line text-stone-500"}),n.jsx("span",{children:"서울 서초구 본마을4길 11 1층 104호"})]}),n.jsxs("div",{className:"flex items-center gap-2 text-stone-400 text-sm",children:[n.jsx("i",{className:"ri-time-line text-stone-500"}),n.jsx("span",{children:"평일 09:00 – 18:00"})]})]})]}),n.jsxs("div",{className:"hidden md:block",children:[n.jsx("h4",{className:"text-white font-bold text-sm mb-5",children:"빠른 링크"}),n.jsx("ul",{className:"space-y-3",children:hb.map(u=>n.jsx("li",{children:n.jsx("button",{onClick:()=>s(u.href),className:"text-stone-400 text-sm hover:text-white transition-colors cursor-pointer",children:u.label})},u.href))})]}),n.jsxs("div",{className:"hidden md:block",children:[n.jsx("h4",{className:"text-white font-bold text-sm mb-5",children:"시공 서비스"}),n.jsx("ul",{className:"space-y-3",children:xb.map(u=>n.jsx("li",{children:n.jsx("span",{className:"text-stone-400 text-sm",children:u})},u))})]}),n.jsxs("div",{className:"hidden md:block",children:[n.jsx("h4",{className:"text-white font-bold text-sm mb-5",children:"소셜 미디어"}),n.jsx("div",{className:"space-y-3",children:[{icon:"ri-instagram-line",label:"Instagram",href:"https://www.instagram.com"},{icon:"ri-kakao-talk-fill",label:"KakaoTalk",href:"https://pf.kakao.com"}].map(u=>n.jsxs("a",{href:u.href,target:"_blank",rel:"nofollow noreferrer",className:"flex items-center gap-3 text-stone-400 text-sm hover:text-white transition-colors cursor-pointer",children:[n.jsx("div",{className:"w-8 h-8 flex items-center justify-center bg-white/10 rounded-sm",children:n.jsx("i",{className:`${u.icon} text-sm`})}),u.label]},u.label))})]})]}),n.jsx("div",{className:"border-t border-stone-700 pt-6",children:n.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-3",children:[n.jsx("p",{className:"text-stone-500 text-xs",children:"© 2026 줄눈시공 전문. All rights reserved."}),n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx(Je,{to:"/privacy",className:"text-stone-500 text-xs hover:text-white transition-colors cursor-pointer",children:"개인정보처리방침"}),n.jsx("span",{className:"text-stone-600 text-xs",children:"사업자등록번호: 609-33-19473"})]})]})})]})})}const gb="https://pf.kakao.com/_TsIAE";function bb(){const[s,u]=k.useState(!1);return k.useEffect(()=>{const c=()=>{u(window.scrollY>window.innerHeight*.6)};return c(),window.addEventListener("scroll",c,{passive:!0}),()=>window.removeEventListener("scroll",c)},[]),n.jsxs("div",{className:`md:hidden fixed bottom-5 right-4 z-40 flex flex-col gap-3 transition-all duration-300 ${s?"opacity-100 translate-y-0":"opacity-0 translate-y-4 pointer-events-none"}`,"aria-hidden":!s,children:[n.jsx("a",{href:gb,target:"_blank",rel:"noopener noreferrer",onClick:()=>ut.kakaoClick("floating"),className:"w-14 h-14 flex items-center justify-center rounded-full bg-[#FEE500] text-[#191600] shadow-lg active:scale-95 transition-transform","aria-label":"카카오톡 상담",children:n.jsx("i",{className:"ri-kakao-talk-fill text-2xl"})}),n.jsx("a",{href:"tel:010-8005-6674",onClick:()=>ut.phoneClick("floating"),className:"w-14 h-14 flex items-center justify-center rounded-full bg-[var(--accent)] text-white shadow-lg active:scale-95 transition-transform","aria-label":"전화 상담",children:n.jsx("i",{className:"ri-phone-fill text-2xl"})})]})}const lt={eyebrow:"오직 줄눈, 6년간 한 길",headlineL1:"손끝이 남기는",headlineAccent:"줄눈시공",headlineTail:"",headlineL3:"디테일라인",subL1:"시공 전, 후 사진으로 먼저 확인하고 결정하세요.",subL2:"무료 견적은 24시간 실시간 답변 드립니다.",ctaPrimary:"실시간 무료 견적 상담",ctaSecondary:"시공 포트폴리오 →",captionTag:"KERAPOXY",captionMeta:"프리미엄 줄눈 시공",signatureMeta:"모든 주거공간, 상업공간 시공 가능",footerItems:["2,000세대 이상 시공 경력","하루 한집 시공","2년 무상 AS"],scrollLabel:"SCROLL",srHeading:"강남·서초·송파 욕실 줄눈시공 전문 디테일라인 — 노후 아파트 보수·신축 입주·리모델링 욕실·베란다·현관 케라폭시 줄눈"};function pm(s){const u=document.querySelector(s);u&&u.scrollIntoView({behavior:"smooth"})}function vb(){return n.jsxs("section",{className:"hero-b-wrap","aria-label":"히어로",children:[n.jsx("div",{className:"tile-floor","aria-hidden":"true",children:n.jsx("div",{className:"tile-floor__plane",children:n.jsx("div",{className:"tile-floor__shine"})})}),n.jsx("div",{className:"hero-b__tint","aria-hidden":"true"}),n.jsx("div",{className:"hero-b__vignette","aria-hidden":"true"}),n.jsx("div",{className:"hero-b__glow","aria-hidden":"true"}),n.jsx("div",{className:"hero-b__grain","aria-hidden":"true"}),n.jsx("div",{className:"hero-b__padded",children:n.jsxs("div",{className:"hero-b",children:[n.jsx("h2",{className:"sr-only",children:lt.srHeading}),n.jsxs("div",{className:"hero-b__lead",children:[n.jsxs("div",{className:"hero-b__eyebrow",children:[n.jsx("span",{className:"hero-b__eyebrow-line","aria-hidden":"true"}),n.jsx("span",{children:lt.eyebrow})]}),n.jsxs("h1",{className:"hero-b__headline",children:[lt.headlineL1,n.jsx("br",{}),n.jsx("em",{children:lt.headlineAccent}),lt.headlineTail,n.jsx("br",{}),lt.headlineL3]}),n.jsxs("p",{className:"hero-b__sub",children:[lt.subL1,n.jsx("br",{}),lt.subL2]}),n.jsxs("div",{className:"hero-b__cta-row",children:[n.jsxs("button",{type:"button",className:"hero-b__btn",onClick:()=>pm("#quote"),children:[lt.ctaPrimary,n.jsx("span",{className:"hero-b__btn-arrow","aria-hidden":"true",children:"→"})]}),n.jsx("button",{type:"button",className:"hero-b__btn-link",onClick:()=>pm("#portfolio"),children:lt.ctaSecondary})]})]}),n.jsxs("div",{className:"hero-b__caption",children:[n.jsxs("div",{className:"hero-b__caption-row",children:[n.jsx("span",{className:"hero-b__caption-dot","aria-hidden":"true"}),n.jsx("span",{className:"hero-b__caption-after",children:lt.captionTag})]}),n.jsx("div",{className:"hero-b__caption-meta",children:lt.captionMeta})]}),n.jsx("div",{className:"hero-b__signature",children:n.jsx("div",{className:"hero-b__signature-meta",children:lt.signatureMeta})}),n.jsxs("div",{className:"hero-b__footer-meta",children:[n.jsx("ul",{className:"hero-b__footer-items",children:lt.footerItems.map(s=>n.jsx("li",{children:s},s))}),n.jsxs("div",{className:"hero-b__scroll","aria-hidden":"true",children:[n.jsx("span",{children:lt.scrollLabel}),n.jsx("span",{className:"hero-b__scroll-bar"})]})]})]})})]})}const ei={all:"all",itemOne:"itemOne",itemTwo:"itemTwo"},Le={rawPosition:"--rcs-raw-position",currentPosition:"--rcs-current-position",boundsPadding:"--rcs-bounds-padding",handleColor:"--rcs-handle-color"},Sr={capture:!1,passive:!0},Br={capture:!0,passive:!1};let Jn=(function(s){return s.ARROW_LEFT="ArrowLeft",s.ARROW_RIGHT="ArrowRight",s.ARROW_UP="ArrowUp",s.ARROW_DOWN="ArrowDown",s})({});const Hr=(s,u,c,d)=>{let p=k.useRef(void 0);k.useEffect(()=>{p.current=u},[u]),k.useEffect(()=>{if(!c?.addEventListener)return;let m=g=>p.current?.(g);return c.addEventListener(s,m,d),()=>{c.removeEventListener(s,m,d)}},[s,c,d])},$m=k.createContext(null),yb=({children:s,...u})=>n.jsx($m.Provider,{value:u,children:s}),Vr=()=>{let s=k.useContext($m);if(!s)throw Error("useReactCompareSliderContext must be used within the Provider component");return s},fm=({flip:s})=>{let u={width:"0.85rem",height:"0.85rem",clipPath:"polygon(100% 0%, 100% 100%, 30% 50%)",rotate:s?"180deg":"0deg",outline:`0.5rem solid var(${Le.handleColor})`,outlineOffset:"-0.5rem"};return n.jsx("div",{"aria-hidden":"true",className:"__rcs-handle-arrow",style:u})},jb=({className:s="__rcs-handle-root",buttonStyle:u,linesStyle:c,style:d,...p})=>{let{disabled:m,portrait:g}=Vr(),b={boxSizing:"border-box",position:"relative",display:"inline-flex",flexDirection:g?"row":"column",placeItems:"center",width:g?"100%":void 0,height:g?void 0:"100%",cursor:m?"not-allowed":g?"ns-resize":"ew-resize",pointerEvents:"none",[Le.handleColor]:"rgba(255, 255, 255, 1)",...d},x={flexGrow:1,height:g?2:"100%",width:g?"100%":2,outline:`1px solid var(${Le.handleColor})`,outlineOffset:-1,pointerEvents:"auto",boxShadow:"0 0 4px rgba(0,0,0,.5)",...c},h={direction:"ltr",display:"grid",gridAutoFlow:"column",gap:"0.5rem",placeContent:"center",flexShrink:0,width:"3.5rem",height:"3.5rem",borderRadius:"50%",border:`2px solid var(${Le.handleColor})`,color:"inherit",pointerEvents:"auto",backdropFilter:"blur(0.5rem)",WebkitBackdropFilter:"blur(0.5rem)",backgroundColor:"rgba(0, 0, 0, 0.125)",boxShadow:"0 0 4px rgba(0,0,0,.35)",transform:g?"rotate(90deg)":void 0,...u};return n.jsxs("div",{"data-rcs":"handle",...p,className:s,style:b,children:[n.jsx("div",{className:"__rcs-handle-line",style:x}),n.jsxs("div",{className:"__rcs-handle-button",style:h,children:[n.jsx(fm,{}),n.jsx(fm,{flip:!0})]}),n.jsx("div",{className:"__rcs-handle-line",style:x})]})},kb=({display:s="block",width:u="100%",height:c="100%",maxWidth:d="100%",boxSizing:p="border-box",objectFit:m="cover",objectPosition:g="center center",...b}={})=>({display:s,width:u,height:c,maxWidth:d,boxSizing:p,objectFit:m,objectPosition:g,...b}),mm=({alt:s,style:u,...c})=>{let d=kb(u);return n.jsx("img",{"data-rcs":"image",...c,alt:s,style:d})},wb=({style:s,...u})=>{let{disabled:c,portrait:d,position:p,handleRootRef:m,onHandleRootClick:g,onHandleRootKeyDown:b}=Vr(),x={WebkitAppearance:"none",MozAppearance:"none",WebkitTapHighlightColor:"transparent",boxSizing:"border-box",position:"absolute",display:"flex",flexDirection:d?"row":"column",placeItems:"center",contain:"layout",top:d?"-50%":void 0,left:d?void 0:"-50%",width:"100%",height:"100%",background:"none",border:0,padding:0,pointerEvents:"none",appearance:"none",outline:0,zIndex:1,translate:d?`0 var(${Le.currentPosition}) 0`:`var(${Le.currentPosition}) 0 0`,backfaceVisibility:"hidden",willChange:"translate",...s};return Hr("keydown",b,m.current,Br),Hr("click",g,m.current,Br),n.jsx("div",{ref:m,tabIndex:0,"aria-label":"Click and drag or focus and use arrow keys to change the position of the slider","aria-orientation":d?"vertical":"horizontal","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":p.current,"aria-disabled":c,"data-rcs":"handle-root",role:"slider",style:x,...u})},Nb=({itemClip:s,portrait:u})=>s===ei.itemOne?u?`inset(0px 0px calc(100% - var(${Le.currentPosition})) 0px)`:`inset(0px calc(100% - var(${Le.currentPosition})) 0px 0px)`:s===ei.itemTwo?u?`inset(var(${Le.currentPosition}) 0px 0px 0px)`:`inset(0px 0px 0px var(${Le.currentPosition}))`:"none",hm=({item:s,style:u,...c})=>{let{clip:d,portrait:p}=Vr(),m={KhtmlUserSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",gridArea:"1 / 1",maxWidth:"100%",overflow:"hidden",clipPath:Nb({itemClip:d===ei.all||d===s?s:void 0,portrait:p}),boxSizing:"border-box",transform:"translateZ(0)",userSelect:"none",zIndex:s===ei.itemOne?1:void 0,willChange:"clip-path",...u};return n.jsx("div",{"data-rcs":"item","data-rcs-item":s,...c,style:m})},Sb=`clamp(var(${Le.boundsPadding}), var(${Le.rawPosition}) - var(${Le.boundsPadding}) + var(${Le.boundsPadding}), calc(100% - var(${Le.boundsPadding})))`,Eb=({style:s,...u})=>{let{browsingContext:c,boundsPadding:d,changePositionOnHover:p,clip:m,isDragging:g,portrait:b,position:x,onTouchEnd:h,onPointerDown:A,onPointerMove:w,onPointerUp:B,interactiveTarget:Z,rootRef:S,transition:G,canTransition:Y}=Vr(),L={position:"relative",boxSizing:"border-box",display:"grid",maxWidth:"100%",maxHeight:"100%",overflow:"hidden",cursor:g?b?"ns-resize":"ew-resize":void 0,touchAction:"pan-y",userSelect:"none",KhtmlUserSelect:"none",msUserSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",transition:Y&&G?`${Le.rawPosition} ${G}`:"none",[Le.rawPosition]:`${x.current}%`,[Le.boundsPadding]:d,[Le.currentPosition]:Sb,...s};return Hr("touchend",h,Z,Br),Hr("pointerdown",A,Z,Br),k.useEffect(()=>{let X=S.current,q=K=>{g||B(K)};return p&&(X.addEventListener("pointermove",w,Sr),X.addEventListener("pointerleave",q,Sr)),()=>{X.removeEventListener("pointermove",w),X.removeEventListener("pointerleave",q)}},[p,w,B,g,S]),k.useEffect(()=>{if(g)return c.addEventListener("pointermove",w,Sr),c.addEventListener("pointerup",B,Sr),()=>{c?.removeEventListener("pointermove",w),c?.removeEventListener("pointerup",B)}},[w,B,g,c]),n.jsx("div",{ref:S,style:L,"data-rcs":"root","data-rcs-clip":m,...u})};(()=>{try{typeof CSS<"u"&&CSS.registerProperty({name:Le.rawPosition,syntax:"<percentage>",inherits:!0,initialValue:"50%"})}catch(s){console.debug("[react-compare-slider] register CSS property:",s)}})();const zb=()=>globalThis.matchMedia?.("(prefers-reduced-motion: no-preference)")?.matches?"0.15s ease-out":"none",Ab=()=>!!globalThis.matchMedia?.("(pointer: coarse)")?.matches,Tb=({boundsPadding:s="0px",browsingContext:u=globalThis,changePositionOnHover:c=!1,clip:d=ei.all,defaultPosition:p=50,disabled:m=!1,keyboardIncrement:g="5%",onlyHandleDraggable:b=Ab(),onPositionChange:x,portrait:h=!1,transition:A=zb()}={})=>{let w=k.useRef(null),B=k.useRef(null),Z=k.useRef(p),[S,G]=k.useState(!1),[Y,L]=k.useState(!0),[X,q]=k.useState(null),K=k.useCallback(W=>{let ie=Math.min(Math.max(W,0),100);w.current?.style.setProperty(Le.rawPosition,`${ie}%`),B.current?.setAttribute("aria-valuenow",`${Math.round(ie)}`),Z.current=ie,x?.(ie)},[x]),le=k.useCallback(function({x:W,y:ie}){let{width:Oe,height:ke,top:C,left:V}=w.current.getBoundingClientRect();Oe===0||ke===0||K((h?ie-C-u.scrollY:W-V-u.scrollX)/(h?ke:Oe)*100)},[u,h,K]),$=k.useCallback(W=>{W.preventDefault(),!(m||W.button!==0)&&(le({x:W.pageX,y:W.pageY}),G(!0),L(!0))},[m,le]),I=k.useCallback(function(W){L(!1),le({x:W.pageX,y:W.pageY})},[le]),je=k.useCallback(W=>{G(!1),L(!0)},[]),U=k.useCallback(W=>{G(!1),L(!0)},[]),ae=k.useCallback(W=>{W.preventDefault(),W.currentTarget?.focus()},[]),ne=k.useCallback(W=>{if(!Object.values(Jn).includes(W.key))return;W.preventDefault(),L(!0);let ie=typeof g=="string"?Number.parseFloat(g):g/w.current?.getBoundingClientRect().width*100;K((h?W.key===Jn.ARROW_LEFT||W.key===Jn.ARROW_DOWN:W.key===Jn.ARROW_RIGHT||W.key===Jn.ARROW_UP)?Z.current+ie:Z.current-ie)},[g,h,K]);return k.useLayoutEffect(()=>{q(b?B.current:w.current)},[b]),k.useEffect(()=>{K(p)},[p,K]),{boundsPadding:s,browsingContext:u,changePositionOnHover:c,clip:d,defaultPosition:p,disabled:m,keyboardIncrement:g,onlyHandleDraggable:b,portrait:h,transition:A,onHandleRootKeyDown:ne,onPointerDown:$,onPointerMove:I,onPointerUp:je,onTouchEnd:U,onHandleRootClick:ae,canTransition:Y,isDragging:S,position:Z,setPosition:K,setPositionFromBounds:le,rootRef:w,handleRootRef:B,interactiveTarget:X}},Rb=({boundsPadding:s,browsingContext:u,changePositionOnHover:c,clip:d,defaultPosition:p,disabled:m,handle:g,itemOne:b,itemTwo:x,keyboardIncrement:h,onPositionChange:A,onlyHandleDraggable:w,portrait:B,transition:Z,...S})=>n.jsx(yb,{...Tb({boundsPadding:s,browsingContext:u,changePositionOnHover:c,clip:d,defaultPosition:p,disabled:m,keyboardIncrement:h,onPositionChange:A,onlyHandleDraggable:w,portrait:B,transition:Z}),children:n.jsxs(Eb,{...S,children:[n.jsx(hm,{item:"itemOne",children:b}),n.jsx(hm,{item:"itemTwo",children:x}),n.jsx(wb,{children:g||n.jsx(jb,{})})]})}),Cb=["전체","현관","화장실","베란다","거실","주방","수영장","목욕탕"],xm=[];function Mb(){const[s,u]=k.useState("전체"),[c,d]=k.useState(null);k.useEffect(()=>{if(!c)return;const m=A=>{A.key==="Escape"&&d(null)},g=window.scrollY,b=document.documentElement,x=document.body,h=b.style.scrollBehavior;return b.style.overflow="hidden",x.style.overflow="hidden",x.style.position="fixed",x.style.top=`-${g}px`,x.style.left="0",x.style.right="0",x.style.width="100%",window.addEventListener("keydown",m),()=>{b.style.overflow="",x.style.overflow="",x.style.position="",x.style.top="",x.style.left="",x.style.right="",x.style.width="",b.style.scrollBehavior="auto",window.scrollTo(0,g),b.style.scrollBehavior=h,window.removeEventListener("keydown",m)}},[c]);const p=s==="전체"?xm:xm.filter(m=>m.category===s);return n.jsxs(n.Fragment,{children:[n.jsx("section",{id:"portfolio",className:"py-20 px-6 md:px-12 lg:px-20 bg-[var(--bg)]",children:n.jsxs("div",{className:"max-w-7xl mx-auto",children:[n.jsxs("div",{className:"mb-10",children:[n.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Our Work"}),n.jsx("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:"완성된 프로젝트"}),n.jsx("p",{className:"text-[var(--muted)] mt-1 sm:mt-3 text-base",children:"고객님의 공간을 완벽하게 되살렸습니다"})]}),n.jsx("div",{className:"flex flex-wrap gap-2 mb-10",children:Cb.map(m=>n.jsx("button",{onClick:()=>u(m),className:`px-5 py-2 rounded-sm text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${s===m?"bg-[var(--accent)] text-white":"bg-white text-[var(--muted)] border border-[var(--line)] hover:border-[var(--line-strong)]"}`,children:m},m))}),p.length>0?n.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4",children:p.map(m=>n.jsxs("div",{onClick:()=>d(m),className:"group relative rounded-sm overflow-hidden cursor-pointer aspect-[3/4]",children:[n.jsx("img",{src:m.image,alt:`${m.title} 줄눈시공 사례 - 디테일라인`,className:"w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"}),n.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"}),m.before&&m.after&&n.jsxs("span",{className:"absolute top-2 right-2 inline-flex items-center gap-1 bg-[var(--accent)] text-white text-[10px] font-medium px-2 py-0.5 rounded-sm uppercase tracking-[0.12em]",children:[n.jsx("i",{className:"ri-contrast-2-line"}),"시공 전·후"]}),n.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-4",children:[n.jsx("span",{className:"inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-sm mb-2",children:m.category}),n.jsx("h3",{className:"text-white font-bold text-sm leading-snug",children:m.title}),n.jsx("p",{className:"text-white/70 text-xs mt-1",children:m.location})]})]},m.id))}):n.jsxs("div",{className:"border border-dashed border-[var(--line-strong)] rounded-sm py-16 px-6 text-center bg-white/40",children:[n.jsx("i",{className:"ri-image-line text-4xl text-[var(--muted-2)] mb-4 block","aria-hidden":"true"}),n.jsx("h3",{className:"text-2xl text-[var(--ink)] mb-3",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:"시공 사례 — 곧 공개됩니다"}),n.jsxs("p",{className:"text-[var(--muted)] text-sm leading-relaxed max-w-md mx-auto",children:["현재 자체 촬영 시공 사례를 정리 중입니다.",n.jsx("br",{}),"실제 현장의 Before / After 사진과 시공 디테일을 곧 보여드리겠습니다."]}),n.jsx("p",{className:"text-[var(--muted-2)] text-xs mt-6",children:"시공 사례가 필요하시면 카카오톡·전화로 즉시 안내해 드립니다."})]})]})}),c&&n.jsx("div",{className:"fixed inset-0 z-[100] bg-black/80 flex items-center justify-center px-4",onClick:()=>d(null),children:n.jsxs("div",{className:"relative w-full max-w-3xl",onClick:m=>m.stopPropagation(),children:[n.jsx("button",{type:"button",onClick:()=>d(null),className:"absolute -top-11 right-0 w-9 h-9 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors","aria-label":"닫기",children:n.jsx("i",{className:"ri-close-line text-xl"})}),n.jsx("div",{className:"rounded-sm overflow-hidden shadow-2xl bg-[var(--dark)]",children:c.before&&c.after?n.jsx(Rb,{itemOne:n.jsx(mm,{src:c.before,alt:`${c.title} 시공 전`,style:{objectFit:"cover"}}),itemTwo:n.jsx(mm,{src:c.after,alt:`${c.title} 시공 후`,style:{objectFit:"cover"}}),style:{width:"100%",maxHeight:"80vh"}}):n.jsx("img",{src:c.image,alt:`${c.title} 줄눈시공 사례 - 디테일라인`,onClick:()=>d(null),className:"w-full max-h-[80vh] object-contain cursor-zoom-out"})}),n.jsxs("div",{className:"mt-3 text-white",children:[n.jsx("p",{className:"text-sm font-semibold",children:c.title}),n.jsx("p",{className:"text-xs text-white/70 mt-1",children:c.location})]})]})})]})}const Ob=[{n:"01",t:"대표 직접 시공",en:"Founder on every site",d:"외주·하청 없습니다. 첫 현장부터 마지막 줄눈까지 대표가 직접 와서 시공합니다. 7년차, 2,400 가구의 손맛 그대로."},{n:"02",t:"KC 인증 친환경 자재",en:"Certified, low-VOC",d:"케라폭시·정품 폴리우레아만 사용합니다. 각 시공한 자재서에 가족이 있는 동네 수준의 친환경 등급을 고집합니다."},{n:"03",t:"2년 무상 A/S · 서면",en:"2-year written warranty",d:"에폭시 계열 자재 시공에 한해 시공 후 2년간 무상 재시공. 들뜸·변색·곰팡이가 발생하면 서면 보증서대로 책임집니다."},{n:"04",t:"정밀 기계 작업",en:"Calibrated tooling",d:"커터·믹서·트랜퍼스 — 도구 하나하나를 매 현장 캘리브레이션. 균일한 폭, 균일한 마감, 균일한 광택."}];function _b(){return n.jsxs("section",{id:"why",className:"relative overflow-hidden bg-[var(--dark)] py-20 px-6 md:px-12 lg:px-20",children:[n.jsx("div",{className:"why-bg","aria-hidden":"true"}),n.jsxs("div",{className:"relative max-w-7xl mx-auto",children:[n.jsxs("div",{className:"mb-10",children:[n.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Why Detailline"}),n.jsxs("h2",{className:"text-4xl md:text-5xl text-[var(--on-dark)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:["싸지 않습니다. 대신",n.jsx("br",{}),"10년 후에도 그 자리에 있습니다."]}),n.jsxs("p",{className:"text-white/70 mt-1 sm:mt-3 text-base max-w-[56ch]",children:["저희는 가장 싼 업체가 아닙니다. 가장 오래 가게 만드는 업체입니다.",n.jsx("br",{}),"아래 네 가지는 디테일라인이 단 한 번도 타협한 적 없는 기준입니다."]})]}),n.jsx("div",{className:"why-grid mt-12",children:Ob.map(s=>n.jsxs("div",{className:"why-cell",children:[n.jsxs("span",{className:"why-cell-num",children:["— ",s.n]}),n.jsx("h3",{className:"why-cell-title",children:s.t}),n.jsx("p",{className:"why-cell-en",children:s.en}),n.jsx("p",{className:"why-cell-desc",children:s.d})]},s.n))}),n.jsxs("div",{className:"why-foot",children:[n.jsx("p",{className:"why-quote-text",children:"“줄눈은 결국 사람이 합니다. 그 위에 누가 잡고 있느냐가 10년을 가릅니다.”"}),n.jsx("span",{className:"why-quote-caption",children:"— 대표 제이슨 —"})]})]}),n.jsx("style",{children:Db})]})}const Db=`
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
`,Ub="/assets/bathroom-qafbnYCD.JPG",Bb="/assets/outdoor_wc-CJQL97Jp.JPG",Hb="/assets/living-BQx9vWF-.jpg",Lb="/assets/entrance-D-gIu59c.jpg",Yb="/assets/veranda-BQTujKkw.jpg",qb="/assets/commercial-BUQpqBDH.jpg",Gb=[{n:"01",t:"욕실 · 화장실",en:"Bathroom",d:"에폭시 계열 전용. 물이 닿는 환경엔 폴리우레아 시공 불가 → 2년 무상 A/S 대상.",tag:"에폭시 계열",photo:Ub},{n:"02",t:"외부 화장실",en:"Outdoor WC",d:"내부 화장실과 동일 → 에폭시 계열만 시공. 물 접촉 환경에서 폴리우레아 시공 불가.",tag:"에폭시 계열",photo:Bb},{n:"03",t:"거실",en:"Living",d:"바닥 줄눈. 20평대 기준 폴리우레아 100만원 · 에폭시 150만원. 30평+ 별도 견적.",tag:"에폭시 / 폴리우레아",photo:Hb},{n:"04",t:"현관",en:"Entrance",d:"첫인상을 결정짓는 1평. 외부 접촉 폴리우레아 가성비 선택 권장.",tag:"폴리우레아 권장",photo:Lb},{n:"05",t:"베란다",en:"Veranda",d:"결로·온도차에 폴리우레아 권장. 빠른 경화 2~4시간 마무리.",tag:"폴리우레아 권장",photo:Yb},{n:"06",t:"상업 공간",en:"Commercial",d:"카페·매장·호텔·수영장. 야간·새벽 시공 협의 가능. 환경별 자재 매칭.",tag:"맞춤 자재",photo:qb}];function Vb(){return n.jsxs("section",{id:"scope",className:"scope-section bg-[var(--bg)] py-20 px-6 md:px-12 lg:px-20",children:[n.jsxs("div",{className:"max-w-7xl mx-auto",children:[n.jsxs("div",{className:"mb-10",children:[n.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Scope"}),n.jsxs("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:["줄눈이 필요한 ",n.jsx("br",{}),n.jsx("span",{className:"text-[var(--accent)]",children:"모든 곳에"})]}),n.jsxs("p",{className:"text-[var(--muted)] mt-1 sm:mt-3 text-base max-w-[56ch]",children:["주거 · 상업 · 시설까지. 디테일라인은 환경별로 자재와 시공 방식을 다르게 가져갑니다.",n.jsx("br",{}),"한 가지 방법으로 모든 곳을 시공하지 않습니다."]})]}),n.jsx("div",{className:"scope-grid mt-12",children:Gb.map(s=>n.jsxs("article",{className:"scope-card",children:[n.jsxs("div",{className:`scope-imgph ${s.photo?"has-photo":""}`,children:[s.photo?n.jsx("img",{src:s.photo,alt:`${s.t} 줄눈시공 - 디테일라인`,className:"scope-imgph-img",loading:"lazy"}):n.jsx("span",{className:"scope-imgph-label","aria-hidden":"true",children:s.en.toUpperCase()}),n.jsx("span",{className:"scope-imgph-corner","aria-hidden":"true",children:s.n})]}),n.jsxs("div",{className:"scope-meta",children:[n.jsxs("span",{className:"scope-meta-mono",children:["— ",s.n," · ",s.en.toUpperCase()]}),n.jsx("h3",{className:"scope-meta-title",children:s.t}),n.jsx("p",{className:"scope-meta-body",children:s.d}),n.jsxs("span",{className:"scope-meta-tag",children:[n.jsx("span",{className:"scope-tag-dot","aria-hidden":"true"}),s.tag]})]})]},s.n))})]}),n.jsx("style",{children:Qb})]})}const Qb=`
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
`,Zb="/assets/re_1-iaNcuT_7.jpg",Kb="/assets/re_2-CcDcgcOi.jpg",Xb="/assets/re_3-DPjtmN0S.jpg",Jb=[{star:5,t:"줄눈은 다 똑같은 줄 알았는데",name:"최OO 고객님",photo:{label:"BANPO",corner:"거실 특",src:Zb},body:"다른 곳에서 한 줄눈이 2년만에 변색됐어요. 디테일라인은 하루 종일 걸렸지만 마감이 차원이 다릅니다. 모서리, 코너, 실리콘까지 손이 갔어요. 비싸지만 다시 하라면 또 합니다."},{star:5,t:"대표님이 직접 오십니다",name:"정OO 고객님",photo:{label:"HANNAM",corner:"욕실",src:Kb},body:"견적부터 시공, A/S 안내까지 같은 분이세요. 중간에 누구한테 다시 설명할 필요가 없습니다. 시공도 깔끔하고, 시공 후에도 친절히 안내해 주시고요."},{star:5,t:"2년 보증서 진짜 줍니다",name:"강OO 고객님",photo:{label:"JAMSIL",corner:"욕실",src:Xb},body:"대부분 구두 보증인데 여기는 서면으로 보증서를 줍니다. 솔직히 그거 하나만으로도 결정 났어요. 시공도 깔끔하고 청소까지 다 해주고 가시는 게 인상 깊었습니다."}];function Wb({n:s}){return n.jsx("div",{className:"rev-stars",role:"img","aria-label":`별점 5점 만점에 ${s}점`,children:[0,1,2,3,4].map(u=>n.jsx("svg",{className:u<s?"rev-star rev-star-filled":"rev-star rev-star-empty",width:"13",height:"13",viewBox:"0 0 13 13","aria-hidden":"true",children:n.jsx("path",{d:"M6.5 0l1.8 4.3 4.7.4-3.6 3 1.1 4.6L6.5 9.9 2.5 12.3l1.1-4.6L0 4.7l4.7-.4z"})},u))})}function $b(){return n.jsxs("section",{id:"reviews",className:"rev-section bg-[var(--bg-2)] py-20 px-6 md:px-12 lg:px-20",children:[n.jsxs("div",{className:"max-w-7xl mx-auto",children:[n.jsxs("div",{className:"mb-10",children:[n.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Reviews"}),n.jsxs("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:[n.jsx("span",{className:"md:block text-[var(--accent)]",children:"지금까지 2,000세대 이상의"})," ",n.jsx("span",{className:"md:block",children:"가족이 맡겨 주셨습니다"})]}),n.jsxs("p",{className:"text-[var(--muted)] mt-1 sm:mt-3 text-base max-w-[56ch]",children:["실제 시공 후 30일 내 작성된 후기 중 일부입니다.",n.jsx("br",{}),"좋은 말씀도, 아쉬운 말씀도 모두 받고 있습니다."]})]}),n.jsx("div",{className:"rev-grid mt-12",children:Jb.map(s=>n.jsxs("article",{className:"rev-card",children:[n.jsx("div",{className:"rev-card-photo",children:n.jsxs("div",{className:`rev-imgph ${s.photo.src?"has-photo":""}`,children:[s.photo.src?n.jsx("img",{src:s.photo.src,alt:`${s.photo.label} · ${s.photo.corner}`,className:"rev-imgph-img",loading:"lazy"}):n.jsx("span",{className:"rev-imgph-label","aria-hidden":"true",children:s.photo.label}),n.jsx("span",{className:"rev-imgph-corner","aria-hidden":"true",children:s.photo.corner})]})}),n.jsxs("div",{className:"rev-card-body",children:[n.jsx(Wb,{n:s.star}),n.jsxs("h3",{className:"rev-card-title",children:["“",s.t,"”"]}),n.jsx("p",{className:"rev-card-text",children:s.body}),n.jsx("div",{className:"rev-card-footer",children:n.jsx("div",{className:"rev-card-name",children:s.name})})]})]},s.name))})]}),n.jsx("style",{children:Fb})]})}const Fb=`
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
`,Dr="spc:quote-prefill",Ao="spc:quote-prefill-changed",Ib={화장실:"화장실","거실 바닥":"거실",현관:"현관",베란다:"베란다",세탁실:"기타","다용도/실외기실":"기타"};function Pb(s){return Ib[s]??"기타"}function ev(s){const u=new Set;for(const c of s)u.add(Pb(c));return Array.from(u)}const Ut={화장실:{label:"화장실",en:"BATHROOM",icon:"🛁",rec:"kera",materialLocked:!0,multiple:!0,typeAxis:{lbl:"타입",options:["욕조형","샤워부스형"]},scopeAxis:{lbl:"범위",options:["바닥만","전체(바닥+벽)"]},variants:[{id:"bt-floor",label:"욕조형 · 바닥만",type:"욕조형",scope:"바닥만",kera:{신축:40,구축:50},poly:null},{id:"bt-full",label:"욕조형 · 전체 (바닥+벽)",type:"욕조형",scope:"전체(바닥+벽)",kera:{신축:90,구축:100},poly:null},{id:"sh-floor",label:"샤워부스형 · 바닥만",type:"샤워부스형",scope:"바닥만",kera:{신축:45,구축:55},poly:null},{id:"sh-full",label:"샤워부스형 · 전체 (바닥+벽)",type:"샤워부스형",scope:"전체(바닥+벽)",kera:{신축:95,구축:105},poly:null}]},"거실 바닥":{label:"거실 바닥",en:"LIVING FLOOR",icon:"🛋️",rec:"kera",materialLocked:!0,note:"34평 이하 기준",variants:[{id:"lv",label:"34평 미만",kera:{신축:150,구축:150},poly:null}]},현관:{label:"현관",en:"ENTRANCE",icon:"🚪",rec:"poly",materialLocked:!1,variants:[{id:"ent",label:"바닥",kera:{신축:25,구축:25},poly:{신축:5,구축:10}}]},세탁실:{label:"세탁실",en:"LAUNDRY",icon:"🧺",rec:"poly",materialLocked:!1,variants:[{id:"ldy",label:"바닥",kera:{신축:30,구축:30},poly:{신축:15,구축:15}}]},베란다:{label:"베란다",en:"VERANDA",icon:"🌿",rec:"poly",materialLocked:!1,variants:[{id:"ver",label:"바닥",kera:{신축:30,구축:30},poly:{신축:15,구축:15}}]},"다용도/실외기실":{label:"다용도/실외기실",en:"UTILITY",icon:"🪟",rec:"poly",materialLocked:!1,variants:[{id:"utl",label:"바닥",kera:{신축:20,구축:20},poly:{신축:10,구축:10}}]}},Lr={kera:"케라폭시",poly:"폴리우레아"},yo={1:{name:"세트 1",sub:"기본",desc:"화장실 바닥 ×2 + 현관",prices:{신축:100,구축:120},components:[{space:"화장실",variantId:"bt-floor",material:"kera"},{space:"화장실",variantId:"sh-floor",material:"kera"},{space:"현관",variantId:"ent",material:"poly"}],services:[]},2:{name:"세트 2",sub:"표준",desc:"세트 1 + 양조벽 or 샤워벽 3면 ×1곳",prices:{신축:125,구축:145},components:[{space:"화장실",variantId:"bt-full",material:"kera"},{space:"화장실",variantId:"sh-floor",material:"kera"},{space:"현관",variantId:"ent",material:"poly"}],services:["젠 다이 실리콘 ×2","세면대 실리콘 ×2"]},3:{name:"세트 3",sub:"완성",desc:"화장실 바닥 ×2 + 전체벽 ×2 + 현관",prices:{신축:220,구축:240},components:[{space:"화장실",variantId:"bt-full",material:"kera"},{space:"화장실",variantId:"sh-full",material:"kera"},{space:"현관",variantId:"ent",material:"poly"}],services:["젠 다이 실리콘 ×2","세면대 실리콘 ×2","싱크볼 실리콘","주방벽 케라폭시"]},4:{name:"세트 4",sub:"확장",desc:"세트 2 + 세탁실",prices:{신축:140,구축:160},components:[{space:"화장실",variantId:"bt-full",material:"kera"},{space:"화장실",variantId:"sh-floor",material:"kera"},{space:"현관",variantId:"ent",material:"poly"},{space:"세탁실",variantId:"ldy",material:"poly"}],services:["젠 다이 실리콘 ×2","세면대 실리콘 ×2","주방 실리콘","싱크볼 실리콘"]}},tv=["화장실","거실 바닥","현관","세탁실","베란다","다용도/실외기실"],In=(s,u)=>Ut[s]?.variants.find(c=>c.id===u),To=(s,u)=>({"욕조형|바닥만":"bt-floor","욕조형|전체(바닥+벽)":"bt-full","샤워부스형|바닥만":"sh-floor","샤워부스형|전체(바닥+벽)":"sh-full"})[`${s}|${u}`]??"bt-floor",Ro=(s,u)=>{const c=Ut[s.space],d=In(s.space,s.variantId);if(!c||!d)return null;const p=c.materialLocked?c.rec:s.material,m=d[p];return m?m[u]:null},Er=()=>`sel-${Math.random().toString(36).slice(2,9)}-${Date.now().toString(36)}`,ll=s=>s.toLocaleString("ko-KR");function av(){const[s,u]=k.useState("신축"),[c,d]=k.useState([]),[p,m]=k.useState(null),[g,b]=k.useState(!1),[x,h]=k.useState(!1),A=c.filter(U=>U.space==="화장실"),w=A.length>=1,B=A.length>=2,Z=U=>c.some(ae=>ae.space===U),S=()=>m(null),G=U=>{if(S(),Z(U))d(ae=>ae.filter(ne=>ne.space!==U));else{const ae=Ut[U],ne=ae.variants[0];d(W=>[...W,{key:Er(),space:U,variantId:ne.id,material:ae.rec}])}},Y=()=>{S(),d(w?U=>U.filter(ae=>ae.space!=="화장실"):U=>[...U,{key:Er(),space:"화장실",variantId:"bt-floor",material:"kera"}])},L=()=>{if(w)if(S(),B){const ae=c.map((ne,W)=>ne.space==="화장실"?W:-1).filter(ne=>ne>=0)[1];d(ne=>ne.filter((W,ie)=>ie!==ae))}else{const U=c.find(ie=>ie.space==="화장실"),ne=(U?In("화장실",U.variantId)?.type:void 0)==="욕조형"?"샤워부스형":"욕조형",W=To(ne,"바닥만");d(ie=>[...ie,{key:Er(),space:"화장실",variantId:W,material:"kera"}])}},X=U=>{if(p===U){m(null),d([]);return}const ne=yo[U].components.map(W=>({key:Er(),space:W.space,variantId:W.variantId,material:W.material}));d(ne),m(U)},q=(U,ae)=>{S(),d(ne=>ne.map(W=>W.key===U?{...W,...ae}:W))},K=U=>{S(),d(ae=>ae.filter(ne=>ne.key!==U))},le=()=>{d([]),m(null)},$=k.useMemo(()=>{const U=c.filter(C=>C.space==="화장실"),ae=c.map(C=>{const V=Ut[C.space],P=In(C.space,C.variantId),be=V.materialLocked?V.rec:C.material,fe=Ro(C,s),j=U.length>1&&C.space==="화장실";return{key:C.key,space:C.space,icon:V.icon,label:`${C.space}${j?" · "+P.label:""}`,material:be,unit:fe}}),ne=ae.reduce((C,V)=>C+(V.unit??0),0),W=ae.some(C=>C.unit===null),ie=p?yo[p]:null,Oe=ie?ie.prices[s]:ne,ke=ie?Math.max(0,ne-Oe):0;return{lineItems:ae,itemsSum:ne,hasNull:W,finalTotal:Oe,savings:ke,set:ie}},[c,s,p]),I=()=>{if(c.length===0)return;const U=[];U.push(`[가격 계산기에서 전달된 구성 · ${s} 기준]`),$.set&&U.push(`✓ ${$.set.name} · ${$.set.sub} (${$.set.desc})`),U.push("");const ae=c.filter(ie=>ie.space==="화장실").length;let ne=0;for(const ie of c){const Oe=Ut[ie.space],ke=In(ie.space,ie.variantId),C=Oe.materialLocked?Oe.rec:ie.material,V=Lr[C],P=Ro(ie,s),be=P===null?"별도 견적":`${P}만원`;let fe;ie.space==="화장실"?(ne+=1,fe=`화장실${ae>1?` ${ne}`:""} · ${ke.label}`):Oe.variants.length>1||ke.label!=="바닥"?fe=`${ie.space} · ${ke.label}`:fe=ie.space,U.push(`· ${fe} · ${V} — ${be}`)}if($.set&&$.set.services.length>0){U.push(""),U.push("함께 제공 서비스:");for(const ie of $.set.services)U.push(`· ${ie}`)}U.push(""),U.push("───────────"),$.set&&$.savings>0&&(U.push(`개별 합계: ${$.itemsSum}만원`),U.push(`세트 적용: -${$.savings}만원`)),U.push(`예상 견적가: ${$.finalTotal}만원${$.hasNull?" +α":""} (VAT 포함, 34평·300타일 기준)`),U.push("※정확한 금액은 유선상담 진행 후 안내드립니다.");const W={areas:ev(c.map(ie=>ie.space)),message:U.join(`
`).slice(0,500)};try{sessionStorage.setItem(Dr,JSON.stringify(W)),window.dispatchEvent(new CustomEvent(Ao))}catch{}h(!0)},je=()=>{h(!1);const U=document.querySelector("#quote");U&&U.scrollIntoView({behavior:"smooth"})};return k.useEffect(()=>{if(!x)return;const U=ne=>{ne.key==="Escape"&&h(!1)};document.addEventListener("keydown",U);const ae=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",U),document.body.style.overflow=ae}},[x]),n.jsxs("section",{id:"calc",className:"spc-section py-20 px-6 md:px-12 lg:px-20",children:[n.jsxs("div",{className:"spc-container max-w-7xl mx-auto",children:[n.jsxs("div",{className:"mb-10",children:[n.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Price Calculator"}),n.jsxs("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:[n.jsxs("span",{className:"md:block",children:["공간을 고르면,",n.jsx("br",{})]})," ",n.jsx("span",{className:"md:block",children:"가격이 바로 보입니다"})]}),n.jsx("p",{className:"text-stone-500 mt-1 sm:mt-3 text-base max-w-[56ch]",children:"필요한 공간만 골라 실시간 견적을 확인하세요"}),n.jsxs("div",{className:"spc-info-chips mt-5",children:[n.jsx("span",{className:"spc-info-chip",children:"34평 이하 기준"}),n.jsx("span",{className:"spc-info-chip",children:"300개 타일 기준"}),n.jsx("span",{className:"spc-info-chip",children:"VAT 포함"})]})]}),n.jsxs("div",{className:"spc-body",children:[n.jsxs("div",{className:"spc-left",children:[n.jsxs("div",{className:"spc-step",children:[n.jsxs("div",{className:"spc-step-head",children:[n.jsx("div",{className:"spc-step-num",children:"01"}),n.jsxs("div",{className:"spc-step-titles",children:[n.jsx("div",{className:"spc-step-title",children:"시공할 공간을 선택해 주세요"}),n.jsx("div",{className:"spc-step-sub",children:"여러 공간을 자유롭게 조합하세요 · 화장실은 최대 2곳까지"})]}),c.length>0&&n.jsx("button",{type:"button",className:"spc-step-action",onClick:le,children:"전체 초기화"})]}),n.jsx("div",{className:"spc-step-body",children:n.jsxs("div",{className:"spc-space-grid",children:[n.jsx(jo,{icon:Ut.화장실.icon,label:"화장실 1",en:"BATHROOM",selected:w,onClick:Y}),n.jsx(jo,{icon:Ut.화장실.icon,label:"화장실 (추가)",en:"BATHROOM +",selected:B,disabled:!w,onClick:L}),tv.slice(1).map(U=>n.jsx(jo,{icon:Ut[U].icon,label:Ut[U].label,en:Ut[U].en,selected:Z(U),onClick:()=>G(U)},U))]})})]}),n.jsxs("div",{className:"spc-step",children:[n.jsxs("button",{type:"button",className:"spc-accordion-head",onClick:()=>b(U=>!U),"aria-expanded":g,children:[n.jsx("div",{className:"spc-step-num",children:"02"}),n.jsxs("div",{className:"spc-step-titles",children:[n.jsx("div",{className:"spc-step-title",children:"또는 간편 세트 패키지로 선택"}),n.jsx("div",{className:"spc-step-sub",children:"자주 함께 시공되는 4가지 구성"})]}),n.jsx("span",{className:"spc-accordion-chev","aria-hidden":"true",children:g?"−":"+"})]}),g&&n.jsxs("div",{className:"spc-step-body",children:[n.jsx("div",{className:"spc-set-grid",children:["1","2","3","4"].map(U=>n.jsx(lv,{id:U,set:yo[U],selected:p===U,houseType:s,onPick:()=>X(U)},U))}),n.jsx("p",{className:"spc-set-note",children:"※ 세트 가격은 컴포넌트 개별 합산과 동일하지 않습니다. 추가 서비스 포함 구성이며, 4개 세트는 시각적으로 동등하게 노출됩니다."})]})]}),c.length>0&&n.jsxs("div",{className:"spc-step",children:[n.jsxs("div",{className:"spc-step-head",children:[n.jsx("div",{className:"spc-step-num",children:"03"}),n.jsxs("div",{className:"spc-step-titles",children:[n.jsx("div",{className:"spc-step-title",children:"세부 옵션을 조정해 보세요"}),n.jsx("div",{className:"spc-step-sub",children:"타입 · 범위 · 자재를 변경하면 견적이 실시간으로 업데이트됩니다"})]})]}),n.jsx("div",{className:"spc-step-body",children:n.jsx("div",{className:"spc-selrow-list",children:c.map((U,ae)=>n.jsx(nv,{sel:U,houseType:s,bathroomIndex:U.space==="화장실"?A.findIndex(ne=>ne.key===U.key):-1,bathroomCount:A.length,onUpdate:ne=>q(U.key,ne),onRemove:()=>K(U.key)},U.key))})})]})]}),n.jsx("aside",{className:"spc-right",children:n.jsxs("div",{className:"spc-result",children:[n.jsx("div",{className:"spc-result-eyebrow",children:n.jsx("span",{className:"spc-result-ht-lbl",children:"줄눈 시공 계산기"})}),n.jsxs("div",{className:"spc-result-ht",children:[n.jsx("span",{className:"spc-result-ht-lbl",children:"주거 유형"}),n.jsx("div",{className:"spc-ht-toggle",children:["신축","구축"].map(U=>n.jsx("button",{type:"button",className:`spc-ht-btn ${s===U?"on":""}`,onClick:()=>u(U),children:U},U))})]}),$.set&&n.jsxs("div",{className:"spc-set-banner",children:[n.jsxs("div",{className:"spc-set-banner-meta",children:[n.jsx("span",{className:"spc-set-banner-lbl",children:"★ SET APPLIED"}),n.jsxs("span",{className:"spc-set-banner-name",children:[$.set.name," ",n.jsxs("span",{className:"spc-set-banner-sub",children:["· ",$.set.sub]})]})]}),n.jsx("button",{type:"button",className:"spc-set-banner-clear",onClick:S,"aria-label":"세트 해제",children:"×"})]}),c.length===0?n.jsxs("div",{className:"spc-result-empty",children:["좌측에서 공간을 개별로 선택하거나,",n.jsx("br",{}),"세트 패키지를 골라 보세요."]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"spc-result-section",children:[n.jsxs("div",{className:"spc-result-section-lbl",children:["선택 항목 · ",$.lineItems.length,"건"]}),n.jsx("ul",{className:"spc-line-items",children:$.lineItems.map(U=>n.jsxs("li",{className:"spc-line-item",children:[n.jsxs("div",{className:"spc-li-main",children:[n.jsx("span",{className:"spc-li-icon","aria-hidden":"true",children:U.icon}),n.jsxs("div",{className:"spc-li-text",children:[n.jsx("div",{className:"spc-li-label",children:U.label}),n.jsxs("div",{className:"spc-li-meta",children:[Lr[U.material]," · ",s]})]})]}),n.jsx("div",{className:"spc-li-price",children:U.unit===null?n.jsx("span",{className:"spc-li-quote",children:"별도 견적"}):n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"spc-li-val",children:ll(U.unit)}),n.jsx("span",{className:"spc-li-unit",children:"만원"})]})})]},U.key))})]}),$.set&&$.set.services.length>0&&n.jsxs("div",{className:"spc-result-services",children:[n.jsx("div",{className:"spc-result-section-lbl",children:"+ 함께 제공되는 서비스"}),n.jsx("ul",{className:"spc-services-list",children:$.set.services.map(U=>n.jsxs("li",{className:"spc-service-item",children:["✓ ",U]},U))})]}),n.jsxs("div",{className:"spc-totals",children:[$.set&&n.jsxs("div",{className:"spc-subtotal-row",children:[n.jsx("span",{className:"spc-totals-lbl",children:"개별 합계"}),n.jsxs("span",{className:"spc-subtotal-val",children:[n.jsx("span",{className:"strike",children:ll($.itemsSum)}),n.jsx("span",{className:"spc-totals-suffix",children:"만원"})]})]}),$.set&&$.savings>0&&n.jsxs("div",{className:"spc-discount-note",children:["세트 적용 −",ll($.savings),"만원"]}),n.jsxs("div",{className:"spc-final-row",children:[n.jsx("span",{className:"spc-totals-lbl spc-totals-lbl-accent",children:"최종 견적가"}),n.jsxs("span",{className:"spc-final-price",children:[n.jsx("span",{className:"spc-final-val",children:ll($.finalTotal)}),n.jsx("span",{className:"spc-totals-suffix spc-totals-suffix-lg",children:"만원"}),$.hasNull&&n.jsx("span",{className:"spc-hasnull",children:"+α"})]})]}),$.hasNull&&n.jsx("div",{className:"spc-hasnull-note",children:"‘별도 견적’ 항목이 포함되어 있어 현장 확인 후 안내드립니다."})]}),n.jsx("button",{type:"button",className:"spc-cta",onClick:I,children:"이 구성으로 견적 받기 →"})]}),n.jsxs("div",{className:"spc-policy",children:[n.jsx("span",{className:"spc-policy-chip",children:"📷 원격 견적"}),n.jsx("span",{className:"spc-policy-chip",children:"💡 2년 A/S · 케라폭시"}),n.jsx("span",{className:"spc-policy-chip",children:"✓ VAT 포함"})]}),n.jsx("p",{className:"spc-fineprint",children:"※ 34평 이하 · 300개 타일 기준 예상가. 정확한 금액은 사진·정보 확인 후 서면 견적서로 안내드립니다."})]})})]})]}),x&&n.jsx("div",{className:"spc-modal-overlay",role:"dialog","aria-modal":"true","aria-labelledby":"spc-modal-title",onClick:()=>h(!1),children:n.jsxs("div",{className:"spc-modal",onClick:U=>U.stopPropagation(),children:[n.jsx("button",{type:"button",className:"spc-modal-close",onClick:()=>h(!1),"aria-label":"닫기",children:"×"}),n.jsx("span",{className:"spc-modal-eyebrow",children:"견적 전달 완료"}),n.jsx("h3",{id:"spc-modal-title",className:"spc-modal-title",children:"견적 구성이 자동으로 담겼습니다"}),n.jsxs("p",{className:"spc-modal-body",children:[n.jsx("strong",{children:"이름 · 연락처 · 시공 위치 · 희망 날짜"}),n.jsx("br",{}),"4가지 정보만 입력해 주시면",n.jsx("br",{}),"빠른 시간 내 유선으로 안내드리겠습니다."]}),n.jsx("button",{type:"button",className:"spc-modal-cta",onClick:je,children:"견적 폼으로 이동 →"})]})}),n.jsx("style",{children:iv})]})}function jo({icon:s,label:u,en:c,selected:d,disabled:p,onClick:m}){return n.jsxs("button",{type:"button",className:`spc-space-card ${d?"on":""} ${p?"is-disabled":""}`,onClick:m,disabled:p,"aria-pressed":d,children:[n.jsx("span",{className:"spc-sc-icon","aria-hidden":"true",children:s}),n.jsxs("span",{className:"spc-sc-meta",children:[n.jsx("span",{className:"spc-sc-label",children:u}),n.jsx("span",{className:"spc-sc-en",children:c})]}),n.jsx("span",{className:"spc-sc-action","aria-hidden":"true",children:p?"🔒":d?"✓":"＋"})]})}function lv({id:s,set:u,selected:c,houseType:d,onPick:p}){return n.jsxs("div",{className:`spc-set-card ${c?"on":""}`,children:[n.jsxs("div",{className:"spc-set-head",children:[n.jsxs("span",{className:"spc-set-num",children:["SET 0",s]}),n.jsxs("h3",{className:"spc-set-name",children:[u.name," ",n.jsxs("span",{className:"spc-set-sub",children:["· ",u.sub]})]})]}),n.jsx("p",{className:"spc-set-desc",children:u.desc}),n.jsxs("div",{className:"spc-set-prices",children:[n.jsxs("div",{className:"spc-set-price",children:[n.jsx("span",{className:"spc-set-price-lbl",children:"신축"}),n.jsx("span",{className:"spc-set-price-val",children:ll(u.prices.신축)}),n.jsx("span",{className:"spc-set-price-unit",children:"만원"})]}),n.jsxs("div",{className:"spc-set-price",children:[n.jsx("span",{className:"spc-set-price-lbl",children:"구축"}),n.jsx("span",{className:"spc-set-price-val",children:ll(u.prices.구축)}),n.jsx("span",{className:"spc-set-price-unit",children:"만원"})]})]}),u.services.length>0&&n.jsxs("div",{className:"spc-set-services",children:[n.jsx("div",{className:"spc-set-services-lbl",children:"+ 함께 제공"}),n.jsx("ul",{children:u.services.map(m=>n.jsxs("li",{children:["· ",m]},m))})]}),n.jsx("button",{type:"button",className:"spc-set-cta",onClick:p,children:c?"✓ 적용 중 · 다시 누르면 해제":"이 세트로 선택 →"}),n.jsxs("p",{className:"spc-set-note-inner",children:[d==="신축"?"신축":"구축"," 기준"]})]})}function nv({sel:s,houseType:u,bathroomIndex:c,bathroomCount:d,onUpdate:p,onRemove:m}){const g=Ut[s.space],b=In(s.space,s.variantId),x=s.space==="화장실",h=g.materialLocked?g.rec:s.material,A=Ro(s,u),w=S=>{if(!x)return;const G=b.scope??"바닥만";p({variantId:To(S,G)})},B=S=>{if(!x)return;const G=b.type??"욕조형";p({variantId:To(G,S)})},Z=x&&d>1?`${g.label} ${c+1}`:g.label;return n.jsxs("div",{className:"spc-sel-row",children:[n.jsxs("div",{className:"spc-sel-row-head",children:[n.jsxs("div",{className:"spc-sel-row-title",children:[n.jsx("span",{className:"spc-sr-icon","aria-hidden":"true",children:g.icon}),n.jsx("span",{children:Z})]}),n.jsx("button",{type:"button",className:"spc-sel-x",onClick:m,"aria-label":"이 항목 삭제",children:"×"})]}),n.jsxs("div",{className:"spc-sel-row-body",children:[x&&g.typeAxis&&n.jsxs("div",{className:"spc-sr-block",children:[n.jsx("div",{className:"spc-sr-lbl",children:g.typeAxis.lbl}),n.jsx("div",{className:"spc-sr-chips",children:g.typeAxis.options.map(S=>n.jsx("button",{type:"button",className:`spc-sr-chip ${b.type===S?"on":""}`,onClick:()=>w(S),children:S},S))})]}),x&&g.scopeAxis&&n.jsxs("div",{className:"spc-sr-block",children:[n.jsx("div",{className:"spc-sr-lbl",children:g.scopeAxis.lbl}),n.jsx("div",{className:"spc-sr-chips",children:g.scopeAxis.options.map(S=>n.jsx("button",{type:"button",className:`spc-sr-chip ${b.scope===S?"on":""}`,onClick:()=>B(S),children:S},S))})]}),!x&&g.variants.length>1&&n.jsxs("div",{className:"spc-sr-block",children:[n.jsx("div",{className:"spc-sr-lbl",children:"옵션"}),n.jsx("div",{className:"spc-sr-chips",children:g.variants.map(S=>n.jsx("button",{type:"button",className:`spc-sr-chip ${s.variantId===S.id?"on":""}`,onClick:()=>p({variantId:S.id}),children:S.label},S.id))})]}),g.materialLocked?n.jsx("div",{className:"spc-sr-locked",children:"EPOXY ONLY · 물 접촉 환경 → 폴리우레아 시공 불가"}):n.jsxs("div",{className:"spc-sr-block",children:[n.jsxs("div",{className:"spc-sr-lbl",children:["자재 ",n.jsxs("span",{className:"spc-sr-lbl-aux",children:["권장 ",Lr[g.rec]]})]}),n.jsx("div",{className:"spc-sr-chips",children:["kera","poly"].map(S=>n.jsx("button",{type:"button",className:`spc-sr-chip ${h===S?"on":""}`,onClick:()=>p({material:S}),children:Lr[S]},S))})]}),n.jsxs("div",{className:"spc-sr-price",children:[n.jsxs("span",{className:"spc-sr-price-lbl",children:[u," · 예상가"]}),A===null?n.jsx("span",{className:"spc-sr-quote",children:"QUOTE NEEDED · 별도 견적"}):n.jsxs("span",{className:"spc-sr-price-val-wrap",children:[n.jsx("span",{className:"spc-sr-price-val",children:ll(A)}),n.jsx("span",{className:"spc-sr-price-unit",children:"만원"})]})]})]})]})}const iv=`
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
`,rv="/assets/grouting-Bwtwubk9.jpg",sv="/assets/grouting_m-MwMcW6AJ.jpg",cv=["Since 2019","누적 2,000+ 현장","전 시공 대표 직접 마감"];function ov(){return n.jsxs("section",{id:"about",className:"ab-section",children:[n.jsxs("div",{className:"ab-photo-wrap","aria-hidden":"true",children:[n.jsxs("picture",{children:[n.jsx("source",{media:"(max-width: 900px)",srcSet:sv}),n.jsx("img",{src:rv,alt:"",className:"ab-photo",loading:"lazy"})]}),n.jsx("div",{className:"ab-photo-fade"})]}),n.jsx("div",{className:"ab-text-outer px-6 md:px-12 lg:px-20",children:n.jsx("div",{className:"max-w-7xl mx-auto",children:n.jsxs("div",{className:"ab-text",children:[n.jsx("span",{className:"ab-eyebrow",children:"About Detailline"}),n.jsxs("h2",{className:"ab-headline",children:["보이지 않는",n.jsx("br",{}),"한 줄에도,",n.jsx("br",{}),n.jsx("span",{className:"ab-accent",children:"집요한 정성."})]}),n.jsxs("p",{className:"ab-body",children:["줄눈 한 줄은 손가락 한 마디 폭. 하지만 그 한 줄이",n.jsx("br",{className:"ab-br-pc"}),"공간의 인상을 좌우합니다. 디테일라인은 그 한 줄을",n.jsx("br",{className:"ab-br-pc"}),"끝까지 다듬는 사람들의 이름입니다."]}),n.jsx("ul",{className:"ab-badges",children:cv.map(s=>n.jsxs("li",{className:"ab-badge",children:[n.jsx("span",{className:"ab-dot","aria-hidden":"true"}),s]},s))})]})})}),n.jsx("style",{children:dv})]})}const dv=`
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
`,gm=[{id:1,question:"줄눈 시공은 어떤 공간에 적용할 수 있나요?",answer:"화장실, 주방, 현관, 베란다, 거실, 수영장, 목욕탕 등 타일이 시공된 모든 공간에 적용 가능합니다. 주거 공간뿐만 아니라 상업 시설, 공공시설에도 시공 가능하며, 실내외 모두 가능합니다. 공간별 특성에 맞는 전용 줄눈재를 사용합니다."},{id:2,question:"시공 기간은 얼마나 걸리나요?",answer:"일반 가정용 화장실 기준으로 보통 반나절(4~6시간) 내에 완료됩니다. 시공 면적과 오염 정도에 따라 다를 수 있으며, 대형 공간이나 전면 교체의 경우 1~2일이 소요될 수 있습니다. 정확한 기간은 현장 확인 후 안내드립니다."},{id:3,question:"기존 줄눈을 제거하고 새로 시공하나요?",answer:"오염 정도와 상태에 따라 달라집니다. 경미한 오염의 경우 세척 후 덧시공이 가능하지만, 곰팡이가 심하거나 들뜸 현상이 있는 경우에는 전동 공구를 이용해 기존 줄눈을 완전히 제거한 후 새로 시공합니다. 현장 방문 후 최적의 방법을 제안드립니다."},{id:4,question:"시공 후 관리 방법이 있나요?",answer:"시공 완료 후 24시간은 물에 닿지 않도록 해주세요. 이후에는 일반 중성 세제로 청소하시면 됩니다. 강산성·강알칼리성 세제는 줄눈재를 손상시킬 수 있으니 피해주세요. 정기적인 청소만으로도 시공 효과가 오래 유지됩니다. 보통 5~10년 이상 효과가 지속됩니다."},{id:5,question:"곰팡이가 심한 경우에도 시공이 가능한가요?",answer:"네, 가능합니다. 먼저 항균·항곰팡이 처리를 진행한 후, 곰팡이 방지 성분이 포함된 항균 줄눈재를 사용하여 시공합니다. 심한 경우에는 타일과 방수층까지 점검하여 근본적인 원인을 해결합니다. 재발 방지를 위한 처리까지 함께 진행합니다."},{id:6,question:"견적은 어떻게 받을 수 있나요?",answer:'하단의 "무료 견적 신청" 폼을 작성하시거나 전화로 문의 주시면 됩니다. 시공 면적, 타일 종류, 현재 상태 등 간단한 정보와 사진을 보내주시면 더 정확한 견적을 드릴 수 있습니다. 현장 방문 견적도 무료로 진행하고 있습니다.'}];function uv(s){return{"@context":"https://schema.org","@type":"FAQPage",mainEntity:s.map(({q:u,a:c})=>({"@type":"Question",name:u,acceptedAnswer:{"@type":"Answer",text:c}}))}}function pv(s,u){document.getElementById(s)?.remove();const c=document.createElement("script");return c.type="application/ld+json",c.id=s,c.textContent=JSON.stringify(u),document.head.appendChild(c),()=>{document.getElementById(s)?.remove()}}function fv(){const[s,u]=k.useState(null);k.useEffect(()=>pv("faq-jsonld",uv(gm.map(p=>({q:p.question,a:p.answer})))),[]);const c=d=>{u(p=>p===d?null:d)};return n.jsx("section",{id:"faq",className:"py-20 px-6 md:px-12 lg:px-20 bg-[var(--bg-2)]",children:n.jsxs("div",{className:"max-w-3xl mx-auto",children:[n.jsxs("div",{className:"text-center mb-10",children:[n.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"FAQ"}),n.jsx("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:"자주 묻는 질문"}),n.jsx("p",{className:"text-[var(--muted)] mt-3 text-base",children:"궁금하신 점을 확인하세요"})]}),n.jsx("div",{className:"space-y-0",children:gm.map((d,p)=>n.jsxs("div",{className:`border-b ${p===0?"border-t":""} border-[var(--line)]`,children:[n.jsxs("button",{onClick:()=>c(d.id),className:"w-full flex items-start justify-between gap-4 py-5 text-left cursor-pointer group",children:[n.jsx("span",{className:`text-base font-medium leading-snug transition-colors ${s===d.id?"text-[var(--ink)]":"text-[var(--muted)] group-hover:text-[var(--ink-2)]"}`,children:d.question}),n.jsx("div",{className:`w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full transition-all ${s===d.id?"bg-[var(--ink)] text-[var(--paper)] rotate-45":"bg-[var(--paper)] text-[var(--muted)] border border-[var(--line)]"}`,children:n.jsx("i",{className:"ri-add-line text-sm"})})]}),s===d.id&&n.jsx("div",{className:"pb-10 bg-[var(--paper)]",children:n.jsx("p",{className:"px-5 pt-3 text-[var(--ink-2)] text-sm leading-relaxed",children:d.answer})})]},d.id))}),n.jsxs("div",{className:"mt-12 text-center bg-[var(--paper)] border border-[var(--line)] rounded-sm py-10 px-6",children:[n.jsx("p",{className:"text-stone-600 font-medium mb-2",children:"원하는 답을 찾지 못하셨나요?"}),n.jsx("p",{className:"text-stone-400 text-sm mb-6",children:"전화로 편하게 문의해 주세요"}),n.jsx("div",{className:"flex justify-center",children:n.jsxs("a",{href:"tel:010-8005-6674",onClick:()=>ut.phoneClick("faq"),className:"inline-flex h-12 sm:min-w-[180px] items-center justify-center gap-2 px-7 text-sm font-medium cursor-pointer rounded-sm bg-[var(--accent)] text-white transition-all hover:bg-[var(--accent-deep)]",children:[n.jsx("i",{className:"ri-phone-line"}),"010-8005-6674"]})})]})]})})}const Fm=["일","월","화","수","목","금","토"];function bm(s,u){return s.getFullYear()===u.getFullYear()&&s.getMonth()===u.getMonth()&&s.getDate()===u.getDate()}function vm(s){return`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`}function mv(s){return`${s.getFullYear()}년 ${s.getMonth()+1}월 ${s.getDate()}일 (${Fm[s.getDay()]})`}function hv({name:s="date",onChange:u}){const c=new Date,[d,p]=k.useState(!1),[m,g]=k.useState(c.getFullYear()),[b,x]=k.useState(c.getMonth()),[h,A]=k.useState(null),w=q=>{const K=new Date(m,b+q,1);g(K.getFullYear()),x(K.getMonth())},B=q=>{A(q),u?.(vm(q)),p(!1)},Z=()=>{A(null),u?.("")},S=()=>{g(c.getFullYear()),x(c.getMonth()),B(c)},G=new Date(m,b,1).getDay(),Y=new Date(m,b+1,0).getDate(),L=new Date(c.getFullYear(),c.getMonth(),c.getDate()),X=[...Array(G).fill(null),...Array.from({length:Y},(q,K)=>new Date(m,b,K+1))];return n.jsxs("div",{className:"relative w-full",children:[n.jsxs("button",{type:"button",onClick:()=>p(q=>!q),className:"w-full flex items-center justify-between px-4 py-3 rounded-sm border border-[var(--line)] bg-[var(--paper)] hover:border-[var(--line-strong)] transition-all duration-150",children:[n.jsx("span",{className:`text-sm ${h?"text-[var(--ink)]":"text-[var(--muted-2)]"}`,children:h?mv(h):"날짜를 선택해 주세요"}),n.jsx("i",{className:"ri-calendar-line text-stone-400 text-base"})]}),n.jsx("input",{type:"hidden",name:s,value:h?vm(h):""}),d&&n.jsxs("div",{className:"absolute z-50 mt-2 w-full bg-[var(--paper)] border border-[var(--line)] rounded-sm shadow-xl overflow-hidden",children:[n.jsxs("div",{className:"flex items-center justify-between px-5 pt-5 pb-3",children:[n.jsx("button",{type:"button",onClick:()=>w(-1),className:"w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-100 transition-colors",children:n.jsx("i",{className:"ri-arrow-left-s-line text-stone-500"})}),n.jsxs("span",{className:"text-sm font-medium text-stone-800 tracking-tight",children:[m,"년 ",b+1,"월"]}),n.jsx("button",{type:"button",onClick:()=>w(1),className:"w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-100 transition-colors",children:n.jsx("i",{className:"ri-arrow-right-s-line text-stone-500"})})]}),n.jsx("div",{className:"grid grid-cols-7 px-3 pb-1",children:Fm.map((q,K)=>n.jsx("div",{className:`text-center text-xs font-medium py-1 ${K===0||K===6?"text-[var(--accent)]":"text-[var(--muted-2)]"}`,children:q},q))}),n.jsx("div",{className:"grid grid-cols-7 px-3 pb-4 gap-y-1",children:X.map((q,K)=>{if(!q)return n.jsx("div",{},`empty-${K}`);const le=q<L,$=bm(q,c),I=h?bm(q,h):!1,je=q.getDay()===0,U=q.getDay()===6;let ae="w-9 h-9 mx-auto flex items-center justify-center rounded-full text-sm transition-all duration-100 ";return I?ae+="bg-[var(--ink)] text-[var(--paper)] font-medium":le?ae+="text-[var(--muted-2)]/50 cursor-not-allowed":$?ae+="border border-[var(--accent)] text-[var(--accent)] font-medium hover:bg-[var(--accent)]/10":je||U?ae+="text-[var(--muted-2)] hover:bg-[var(--bg-2)]":ae+="text-[var(--ink-2)] hover:bg-[var(--bg-2)]",n.jsx("button",{type:"button",disabled:le,onClick:()=>B(q),className:ae,children:q.getDate()},q.toISOString())})}),n.jsxs("div",{className:"border-t border-[var(--line)] px-4 py-3 flex justify-between items-center",children:[n.jsx("button",{type:"button",onClick:Z,className:"text-xs text-[var(--muted-2)] hover:text-[var(--ink-2)] transition-colors",children:"초기화"}),n.jsx("button",{type:"button",onClick:S,className:"text-xs font-medium text-[var(--accent)] hover:text-[var(--accent-deep)] transition-colors",children:"오늘"})]})]})]})}const ym=["현관","화장실","베란다","거실","주방","수영장","목욕탕","기타"],xv="0x4AAAAAADGHPfvxD-MhAQbY";function gv(s){return s.length<=3?s:s.length<=7?`${s.slice(0,3)}-${s.slice(3)}`:`${s.slice(0,3)}-${s.slice(3,7)}-${s.slice(7,11)}`}function bv(){const[s,u]=k.useState(!1),[c,d]=k.useState(!1),[p,m]=k.useState(0),[g,b]=k.useState(""),[x,h]=k.useState(""),[A,w]=k.useState(""),[B,Z]=k.useState(""),[S,G]=k.useState([]),[Y,L]=k.useState(""),[X,q]=k.useState(!1),[K,le]=k.useState({}),[$,I]=k.useState(""),je=k.useRef(null),U=k.useRef(null),ae=k.useRef(null),ne=k.useRef(!1),W=500;k.useEffect(()=>{if(!ae.current)return;const E=new IntersectionObserver(H=>{H[0]?.isIntersecting&&!ne.current&&(ne.current=!0,ut.quoteSectionView(),E.disconnect())},{threshold:.3});return E.observe(ae.current),()=>E.disconnect()},[]),k.useEffect(()=>{let E=!1;const H=()=>{if(!E&&je.current){if(typeof window.turnstile>"u"){setTimeout(H,100);return}U.current=window.turnstile.render(je.current,{sitekey:xv,callback:Q=>I(Q),"error-callback":()=>I(""),"expired-callback":()=>I(""),theme:"light",size:"normal"})}};return H(),()=>{E=!0,U.current&&window.turnstile&&(window.turnstile.remove(U.current),U.current=null)}},[]),k.useEffect(()=>{const E=()=>{try{const H=sessionStorage.getItem(Dr);if(!H)return;const Q=JSON.parse(H);Array.isArray(Q.areas)&&Q.areas.length>0&&G(Q.areas.filter(re=>ym.includes(re))),typeof Q.message=="string"&&Q.message.length>0&&(L(Q.message),m(Q.message.length)),le(re=>({...re,areas:""}))}catch{}};return E(),window.addEventListener(Ao,E),()=>window.removeEventListener(Ao,E)},[]);const ie=E=>{const H=E.target.value.replace(/[0-9]/g,"").slice(0,9);b(H),le(Q=>({...Q,name:""}))},Oe=E=>{const H=E.target.value.replace(/[^0-9]/g,"").slice(0,11);h(H),le(Q=>({...Q,phone:""}))},ke=E=>{w(E.target.value.slice(0,39)),le(H=>({...H,location:""}))},C=E=>{Z(E),le(H=>({...H,date:""}))},V=E=>{G(H=>H.includes(E)?H.filter(oe=>oe!==E):[...H,E]),le(H=>({...H,areas:""}))},P=E=>{q(E.target.checked),le(H=>({...H,privacy:""}))},be=()=>{const E={};return g.trim()||(E.name="이름을 입력해주세요."),x.length?x.length<10&&(E.phone="올바른 연락처를 입력해주세요."):E.phone="연락처를 입력해주세요.",A.trim()||(E.location="시공위치를 입력해주세요."),B||(E.date="희망날짜를 선택해주세요."),S.length===0&&(E.areas="시공공간을 1개 이상 선택해주세요."),X||(E.privacy="개인정보처리방침에 동의해주세요."),$||(E.cfToken="봇 검증을 완료해주세요."),le(E),Object.keys(E).length===0},fe=g.trim().length>0&&x.length>=10&&A.trim().length>0&&B.length>0&&S.length>0&&$.length>0&&X,j=async E=>{if(E.preventDefault(),!be())return;const H=E.currentTarget;if(H.querySelector('[name="company_website"]')?.value||""){u(!0);return}if((H.querySelector('[name="message"]')?.value||"").length>W)return;const oe=new FormData(H),xe=new URLSearchParams;oe.forEach((We,Re)=>{Re!=="phone"&&Re!=="company_website"&&xe.append(Re,We.toString())}),xe.append("phone",x),xe.append("cf_turnstile_token",$),d(!0);try{await fetch("https://script.google.com/macros/s/AKfycbyQBvfjjtCFSY4WZUL2Qv_vIwz4xbXyLF5pygpV5d_jpICW_hhXnDnr1r6jZHhS_kEayA/exec",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:xe.toString()}),ut.formSubmit(S,A.split(" ")[0]||"unknown"),u(!0),b(""),h(""),w(""),Z(""),G([]),L(""),q(!1),m(0),le({}),I("");try{sessionStorage.removeItem(Dr)}catch{}U.current&&window.turnstile&&window.turnstile.reset(U.current)}catch{ut.formSubmitFail("network"),alert("제출 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.")}finally{d(!1)}};return n.jsx("section",{ref:ae,id:"quote",className:"py-10 px-6 md:px-12 lg:px-20 bg-[var(--bg)]",children:n.jsxs("div",{className:"max-w-4xl mx-auto",children:[n.jsxs("div",{className:"text-center mb-10",children:[n.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Free Estimate"}),n.jsx("h2",{className:"text-4xl md:text-5xl text-[var(--ink)] mt-2 leading-[1.25] tracking-[-0.01em] break-keep",style:{fontFamily:"'Noto Serif KR', serif",fontWeight:500},children:"무료 견적 상담 신청"}),n.jsx("p",{className:"text-[var(--muted)] mt-3",children:"양식을 작성하시면 24시간 내 연락드립니다"})]}),n.jsx("div",{className:"bg-white rounded-sm pt-5 px-5 pb-6 md:p-12 border border-[var(--line)]",style:{colorScheme:"light"},children:s?n.jsxs("div",{className:"text-center py-12",children:[n.jsx("div",{className:"w-16 h-16 flex items-center justify-center bg-[var(--ink)] rounded-full mx-auto mb-4",children:n.jsx("i",{className:"ri-check-line text-[var(--paper)] text-2xl"})}),n.jsx("h3",{className:"text-xl font-medium text-[var(--ink)] mb-2",children:"신청이 완료되었습니다!"}),n.jsxs("p",{className:"text-[var(--muted)] text-sm",children:["24시간 내에 담당자가 연락드릴 예정입니다.",n.jsx("br",{}),"감사합니다."]}),n.jsx("button",{onClick:()=>{u(!1),b(""),h(""),w(""),Z(""),G([]),L(""),q(!1),m(0),le({});try{sessionStorage.removeItem(Dr)}catch{}},className:"mt-6 text-sm text-stone-400 underline cursor-pointer",children:"다시 신청하기"})]}):n.jsxs("form",{"data-readdy-form":!0,onSubmit:j,className:"space-y-6",children:[n.jsxs("div",{"aria-hidden":"true",style:{position:"absolute",left:"-9999px",width:"1px",height:"1px",overflow:"hidden"},children:[n.jsx("label",{htmlFor:"company_website",children:"Website (do not fill)"}),n.jsx("input",{type:"text",id:"company_website",name:"company_website",tabIndex:-1,autoComplete:"off",defaultValue:""})]}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[n.jsxs("div",{children:[n.jsxs("label",{className:"block text-sm font-medium text-[var(--ink-2)] mb-1.5",children:["이름 ",n.jsx("span",{className:"text-red-400",children:"*"})]}),n.jsx("input",{type:"text",name:"name",required:!0,value:g,onChange:ie,maxLength:9,placeholder:"홍길동",className:"w-full px-4 py-3 border border-[var(--line)] rounded-sm text-base text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors"}),K.name&&n.jsx("p",{className:"mt-1 text-xs text-red-500",children:K.name})]}),n.jsxs("div",{children:[n.jsxs("label",{className:"block text-sm font-medium text-[var(--ink-2)] mb-1.5",children:["연락처 ",n.jsx("span",{className:"text-red-400",children:"*"})]}),n.jsxs("div",{className:"relative",children:[n.jsx("input",{type:"tel",name:"phone",required:!0,value:gv(x),onChange:Oe,inputMode:"numeric",maxLength:13,placeholder:"010-1234-5678",className:"w-full px-4 py-3 border border-[var(--line)] rounded-sm text-base text-stone-700 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors"}),n.jsxs("span",{className:`absolute right-4 top-3 text-xs font-medium ${x.length>=10?"text-[var(--accent)]":"text-[var(--muted-2)]"}`,children:[x.length,"/11"]})]}),K.phone&&n.jsx("p",{className:"mt-1 text-xs text-red-500",children:K.phone})]})]}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[n.jsxs("div",{children:[n.jsxs("label",{className:"block text-sm font-medium text-[var(--ink-2)] mb-1.5",children:["시공 아파트 ",n.jsx("span",{className:"text-red-400",children:"*"})]}),n.jsx("input",{type:"text",name:"location",required:!0,value:A,onChange:ke,maxLength:39,placeholder:"예 : 서초구 반포동 자이아파트",className:"w-full px-4 py-3 border border-[var(--line)] rounded-sm text-base text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors"}),K.location&&n.jsx("p",{className:"mt-1 text-xs text-red-500",children:K.location})]}),n.jsxs("div",{children:[n.jsxs("label",{className:"block text-sm font-medium text-[var(--ink-2)] mb-1.5",children:["희망 날짜 ",n.jsx("span",{className:"text-red-400",children:"*"})]}),n.jsx(hv,{name:"date",onChange:C}),K.date&&n.jsx("p",{className:"mt-1 text-xs text-red-500",children:K.date})]})]}),n.jsxs("div",{children:[n.jsxs("label",{className:"block text-sm font-medium text-stone-700 mb-2",children:["시공 공간 (중복 선택 가능) ",n.jsx("span",{className:"text-red-400",children:"*"})]}),n.jsx("div",{className:"flex flex-wrap gap-2",children:ym.map(E=>n.jsxs("label",{className:"cursor-pointer",children:[n.jsx("input",{type:"checkbox",name:"areas",value:E,checked:S.includes(E),onChange:()=>V(E),className:"sr-only peer"}),n.jsx("span",{className:"inline-block px-5 py-2 rounded-sm text-sm font-medium bg-white text-[var(--muted)] border border-[var(--line)] hover:border-[var(--line-strong)] peer-checked:bg-[var(--accent)] peer-checked:text-white peer-checked:border-[var(--accent)] transition-all cursor-pointer whitespace-nowrap",children:E})]},E))}),K.areas&&n.jsx("p",{className:"mt-1 text-xs text-red-500",children:K.areas})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-sm font-medium text-[var(--ink-2)] mb-1.5",children:"상세 내용"}),n.jsxs("div",{className:"relative",children:[n.jsx("textarea",{name:"message",rows:8,maxLength:W,value:Y,onChange:E=>{L(E.target.value),m(E.target.value.length)},placeholder:"시공 면적, 현재 상태, 요청 사항 등을 자유롭게 작성해 주세요.",className:"w-full px-4 py-3 border border-[var(--line)] rounded-sm text-base text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors resize-none"}),n.jsxs("span",{className:"absolute bottom-3 right-4 text-xs text-stone-400",children:[p," / ",W]})]})]}),n.jsxs("div",{className:"border-t text-sm text-center text-stone-500 px-4 py-3 border-stone-200",children:["희망 날짜에 시공이 어려울 수 있는 점 양해 부탁드립니다. ",n.jsx("br",{}),n.jsx("span",{className:"font-bold text-red-400",children:"정확한 시공 가능 일정은 상담 후 안내드리며,"})," 최대한 희망에 맞춰 드릴 수 있도록 노력하겠습니다."]}),n.jsxs("div",{children:[n.jsx("div",{ref:je,className:"flex justify-center"}),K.cfToken&&n.jsx("p",{className:"mt-1 text-xs text-red-500 text-center",children:K.cfToken})]}),n.jsxs("div",{className:"flex items-start gap-3",children:[n.jsx("input",{type:"checkbox",id:"privacy",name:"privacy",required:!0,checked:X,onChange:P,className:"w-5 h-5 mt-0.5 cursor-pointer accent-[var(--accent)]"}),n.jsxs("label",{htmlFor:"privacy",className:"text-sm text-stone-400 leading-relaxed cursor-pointer",children:["수집된 개인정보(이름, 연락처, 시공 위치, 희망 일정, 시공 공간, 상세 내용)는 견적 상담 목적으로만 사용되며, 상담 완료 후 즉시 폐기됩니다."," ",n.jsx(Je,{to:"/privacy",target:"_blank",rel:"noopener noreferrer",onClick:E=>E.stopPropagation(),className:"text-[var(--accent)] font-semibold underline underline-offset-2 hover:opacity-80",children:"개인정보 처리방침"}),"에 동의합니다."]})]}),K.privacy&&n.jsx("p",{className:"-mt-3 text-xs text-red-500",children:K.privacy}),n.jsx("button",{type:"submit",disabled:c||!fe,className:"w-full py-4 bg-[var(--ink)] text-[var(--paper)] font-medium text-base rounded-sm hover:bg-[var(--accent-deep)] transition-all cursor-pointer whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed",children:c?"제출 중...":"견적 신청하기"})]})})]})})}const Im="https://www.detailline.kr",vv="디테일라인",yv=`${Im}/og_banner.jpg`,jv={"/":{title:"강남·서초·송파 욕실 줄눈시공 전문 디테일라인 | 케라폭시 시공",description:"강남구·서초구·송파구 욕실 줄눈시공 전문업체 디테일라인. 노후 아파트 보수·신축 입주·리모델링 욕실·베란다·현관 케라폭시 줄눈. 대표 직접 시공, 시공 후 2년 무상 A/S. 무료 견적 상담.",keywords:"강남 줄눈, 서초 줄눈, 송파 줄눈, 강남 욕실 줄눈, 서초 욕실 줄눈, 송파 욕실 줄눈, 강남구 줄눈시공, 서초구 줄눈시공, 송파구 줄눈시공, 강남 화장실 줄눈, 강남 베란다 줄눈, 강남 현관 줄눈, 케라폭시, 강남 케라폭시, 노후 아파트 줄눈 보수, 신축 입주 줄눈, 리모델링 줄눈"},"/info/why-grout":{title:"욕실 줄눈 곰팡이·들뜸, 노후 아파트 보수 가이드 | 디테일라인",description:"욕실 줄눈 곰팡이·균열·들뜸 원인과 해결법. 강남구·서초구·송파구 노후 아파트 욕실 줄눈 보수 사례. 신축 입주·리모델링 사전 점검 가이드.",keywords:"욕실 줄눈 곰팡이, 화장실 줄눈 곰팡이, 줄눈 들뜸, 줄눈 균열, 줄눈 보수 시기, 노후 아파트 줄눈, 강남 욕실 곰팡이, 서초 욕실 곰팡이, 송파 욕실 줄눈 보수, 신축 사전점검 줄눈, 리모델링 욕실 줄눈"},"/info/kerafoxy":{title:"케라폭시란? 강남·서초·송파 욕실 줄눈 자재 | 디테일라인",description:"이탈리아산 케라폭시 줄눈재 소개. 강남구·서초구·송파구 노후 아파트 욕실·베란다 시공 다수. 일반 줄눈 대비 곰팡이·변색 방지 10배 이상, KC 인증 친환경.",keywords:"케라폭시, 케라폭시 줄눈, 강남 케라폭시, 서초 케라폭시, 송파 케라폭시, 욕실 케라폭시, 노후 아파트 케라폭시, 에폭시 줄눈, 친환경 줄눈, 마페이 케라폭시"},"/info/kerafoxy-product":{title:"욕실 줄눈 자재 비교 - 케라폭시 6종 색상 가이드 | 디테일라인",description:"케라폭시 클래식·이지디자인·스타라이크·푸가리테 등 자재 비교. 강남·서초·송파 노후 아파트 욕실·베란다·현관별 추천. 색상 가이드 포함.",keywords:"케라폭시 제품, 케라폭시 색상, 스타라이크, 푸가리테, 욕실 줄눈 종류, 강남 케라폭시 색상, 욕실 줄눈재, 노후 아파트 줄눈 자재"},"/info/comparison":{title:"폴리우레아 vs 케라폭시 - 욕실·베란다 줄눈 선택 | 디테일라인",description:"욕실은 케라폭시, 베란다는 폴리우레아 — 강남·서초·송파 노후 아파트 시공 데이터 기반 자재 선택 가이드. 비용·내구성·시공 시간 비교.",keywords:"폴리우레아 케라폭시 차이, 욕실 케라폭시, 베란다 폴리우레아, 줄눈 자재 비교, 강남 줄눈 자재 선택, 노후 아파트 줄눈 자재, 폴리우레아 단점, 케라폭시 단점"},"/info/kerafoxy-price":{title:"강남·서초·송파 욕실 줄눈 가격 - 평수별 시공비 | 디테일라인",description:"강남구·서초구·송파구 노후 아파트 욕실·베란다·현관 줄눈 시공비. 30평·40평 평수별 표준 단가, 신축/구축 분리. 디테일라인 고유 가격, 시공 후 2년 무상 A/S.",keywords:"강남 욕실 줄눈 가격, 서초 줄눈 가격, 송파 줄눈 가격, 강남 화장실 줄눈 가격, 30평 욕실 줄눈, 40평 줄눈 가격, 노후 아파트 줄눈 비용, 케라폭시 가격, 줄눈 견적, 리모델링 줄눈 가격"},"/privacy":{title:"개인정보처리방침 | 디테일라인",description:"디테일라인 개인정보처리방침",keywords:""}};function rl(s){const{pathname:u}=Bt();k.useEffect(()=>{const c=jv[u],d=c?.title??vv,p=c?.description??"",m=c?.keywords??"",g=yv,b=`${Im}${u==="/"?"/":u}`;document.title=d,Kl("description",p),Kl("keywords",m),Wn("og:title",d),Wn("og:description",p),Wn("og:url",b),Wn("og:image",g),Wn("og:image:secure_url",g),Kl("twitter:title",d),Kl("twitter:description",p),Kl("twitter:image",g),kv("canonical",b),Kl("robots","index,follow,max-image-preview:large")},[u,s])}function Kl(s,u){let c=document.querySelector(`meta[name="${s}"]`);c||(c=document.createElement("meta"),c.name=s,document.head.appendChild(c)),c.content=u}function Wn(s,u){let c=document.querySelector(`meta[property="${s}"]`);c||(c=document.createElement("meta"),c.setAttribute("property",s),document.head.appendChild(c)),c.content=u}function kv(s,u){let c=document.querySelector(`link[rel="${s}"]`);c||(c=document.createElement("link"),c.rel=s,document.head.appendChild(c)),c.href=u}function wv(){return rl(),n.jsxs("div",{className:"min-h-screen bg-white",children:[n.jsx(nl,{}),n.jsxs("main",{children:[n.jsx(vb,{}),n.jsx(ov,{}),n.jsx(Mb,{}),n.jsx(_b,{}),n.jsx(Vb,{}),n.jsx($b,{}),n.jsx(av,{}),n.jsx(fv,{}),n.jsx(bv,{})]}),n.jsx(bb,{}),n.jsx(il,{})]})}const Nv="/assets/before-DA_T54W5.jpg",Sv="/assets/after-Cw81fPXQ.jpg",Ev="/assets/kerafoxy-C29B-TmB.jpg",zv="/assets/bg-zCXDQjbF.webp",Av="/assets/bg_m-D6VSEPhL.webp",Tv=[{k:"소재 분류",v:"에폭시 계열"},{k:"원산지",v:"이탈리아"},{k:"수명",v:"10년+"},{k:"A/S",v:"2년"}],Rv=[{k:"압축강도",v:"75 N/mm²"},{k:"수축률",v:"≈ 0% (거의 없음)"},{k:"흡수율",v:"< 0.1 g/cm²"}],Cv=[{idx:"01",title:"강력한 내수성",body:"물에 강한 에폭시 성분으로 화장실·욕실의 지속적인 수분 노출에도 변형 없이 줄눈이 유지됩니다.",k:"흡수율",v:"< 0.1 g/cm²"},{idx:"02",title:"곰팡이·세균 차단",body:"항균 성분이 배합되어 습한 환경에서도 곰팡이와 세균이 번식하지 않아 위생적인 공간을 유지합니다.",k:"항균 등급",v:"JIS Z 2801"},{idx:"03",title:"다양한 색상 선택",body:"화이트·베이지·그레이·블랙 등 20여 가지 색상으로 인테리어 스타일에 맞는 선택이 가능합니다.",k:"컬러 옵션",v:"20+ Colors"},{idx:"04",title:"월등한 내구성",body:"일반 시멘트 줄눈 대비 3~5배 긴 수명을 자랑하며, 균열·탈락 없이 깔끔한 마감이 오래 유지됩니다.",k:"예상 수명",v:"10년+"},{idx:"05",title:"손쉬운 유지관리",body:"표면이 매끄럽고 오염이 잘 스며들지 않아 간단한 청소만으로 항상 깨끗한 상태를 유지할 수 있습니다.",k:"청소",v:"솔 청소 가능"},{idx:"+",title:"대표 직접 시공. 2년 무상 A/S.",body:"소재의 차이만큼이나 중요한 것은 시공자의 손. 디테일라인은 모든 현장을 대표가 직접 마감합니다.",k:"누적",v:"2,000+ 세대",dark:!0}],Mv=[{name:"시멘트 줄눈",tag:"Standard",items:["시공 비용이 가장 저렴","1~2년 후 변색·균열 발생","곰팡이 번식에 취약","주기적 재시공 필요"]},{name:"케라폭시 줄눈",tag:"Detailline 추천",hero:!0,items:["에폭시 결합 — 균열·변색 없음","항균 처리 — 곰팡이 차단","20+ 색상으로 인테리어 매칭","10년+ 수명 · 2년 무상 A/S"]},{name:"폴리우레아",tag:"Heavy-duty",items:["압도적 내구성·하중 강도","주차장·산업 현장에 적합","주거 인테리어엔 과도","색상·질감 선택이 제한적"]}],Ov=[{code:"SP · 01",ko:"화장실 · 욕실",en:"Bath / Powder Room",desc:"가장 많이 사용하는 공간으로, 케라폭시의 내수성과 항균 기능이 극대화됩니다."},{code:"SP · 02",ko:"주방 · 싱크대 주변",en:"Kitchen / Counter",desc:"음식물 오염과 물에 강해 주방 타일 줄눈에 이상적인 소재입니다."},{code:"SP · 03",ko:"베란다 · 발코니",en:"Veranda / Balcony",desc:"자외선과 온도 변화에도 변색이 거의 없어 실외 공간에도 적합합니다."},{code:"SP · 04",ko:"현관 바닥",en:"Entrance Floor",desc:"먼지와 오염이 많은 현관 바닥에서도 변색 없이 깔끔한 마감을 유지합니다."},{code:"SP · 05",ko:"수영장 · 목욕탕",en:"Pool / Sauna",desc:"항시 수분에 노출되는 환경에서도 박리 없이 완벽한 방수 성능을 발휘합니다."}],_v=[{k:"시공 시간",v:"1일 (평형별 상이)"},{k:"건조 시간",v:"24시간 (완전 경화)"},{k:"사용 가능",v:"48시간 후 (물 사용 OK)"},{k:"A/S",v:"2년 (무상)"}],Dv=[{idx:"No. 02 · Pricing",href:"/info/kerafoxy-price",title:"케라폭시 가격 안내",desc:"시공 비용에 영향을 주는 요인과 평형별 표준 가격을 한눈에."},{idx:"No. 03 · Product",href:"/info/kerafoxy-product",title:"케라폭시 계열 제품 소개",desc:"케라폭시·인터라컬러 등 주요 제품 라인업과 색상 가이드."},{idx:"No. 04 · Compare",href:"/info/comparison",title:"폴리우레아 vs 케라폭시",desc:"두 소재의 차이점과, 어떤 공간에 어떤 소재가 적합한지."},{idx:"No. 05 · Why",href:"/info/why-grout",title:"줄눈시공 하는 이유",desc:"위생·미관·내구성을 위한 필수 시공인 이유를 정리했습니다."}];function zr({num:s,ko:u,en:c,title:d,lede:p,dark:m}){return n.jsxs("div",{className:`kf-sec-head ${m?"kf-sec-head-dark":""}`,children:[n.jsxs("div",{className:"kf-sec-bar",children:[n.jsx("span",{className:"kf-sec-n",children:s}),n.jsx("span",{className:"kf-sec-rule"}),n.jsxs("span",{className:"kf-sec-lbl",children:[n.jsx("span",{className:"kf-sec-ko",children:u}),n.jsx("span",{className:"kf-sec-en",children:c})]})]}),n.jsxs("div",{className:"kf-sec-body",children:[n.jsx("h2",{className:"kf-sec-title",children:d}),n.jsx("p",{className:"kf-sec-lede",children:p})]})]})}function Uv(){const s=Ba();rl(),k.useEffect(()=>{window.scrollTo(0,0)},[]);const u=()=>{s("/#calc"),setTimeout(()=>{const c=document.querySelector("#calc");c&&c.scrollIntoView({behavior:"smooth"})},300)};return n.jsxs("div",{className:"kf-page",children:[n.jsx(nl,{}),n.jsxs("header",{className:"kf-hero","data-screen-label":"01 Hero",children:[n.jsx("div",{className:"kf-hero-bg",style:{"--hero-img-d":`url(${zv})`,"--hero-img-m":`url(${Av})`},"aria-hidden":"true"}),n.jsxs("div",{className:"kf-container kf-hero-inner",children:[n.jsx("div",{className:"kf-eyebrow kf-eyebrow-light",children:"Grout Knowledge · 01"}),n.jsxs("h1",{className:"kf-hero-title",children:["케라폭시 줄눈,",n.jsx("br",{}),"한 줄의 깊이 ",n.jsx("em",{children:"완벽"}),"의 기준."]}),n.jsxs("p",{className:"kf-hero-lede",children:["마페이의 80년 경험치를 흡수한 2액형 고성능 줄눈 소재.",n.jsx("br",{}),"일반 시멘트 줄눈과 무엇이 다른지, 왜 프리미엄 공간에 선택되는지 정리했습니다."]}),n.jsx("ul",{className:"kf-hero-meta",children:Tv.map(c=>n.jsxs("li",{children:[n.jsx("span",{className:"kf-meta-k",children:c.k}),n.jsx("span",{className:"kf-meta-v",children:c.v})]},c.k))})]})]}),n.jsx("nav",{className:"kf-crumb","aria-label":"현재 위치",children:n.jsxs("div",{className:"kf-container kf-crumb-inner",children:[n.jsx(Je,{to:"/",className:"kf-crumb-item",children:"홈"}),n.jsx("span",{className:"kf-crumb-sep",children:"/"}),n.jsx("span",{className:"kf-crumb-item",children:"줄눈 정보"}),n.jsx("span",{className:"kf-crumb-sep",children:"/"}),n.jsx("span",{className:"kf-crumb-here",children:"케라폭시 줄눈이란?"})]})}),n.jsx("section",{className:"kf-section","data-screen-label":"02 Introduction",children:n.jsx("div",{className:"kf-container",children:n.jsxs("div",{className:"kf-intro",children:[n.jsxs("div",{className:"kf-intro-left",children:[n.jsx("div",{className:"kf-eyebrow",children:"Introduction · 들어가며"}),n.jsxs("h2",{className:"kf-intro-title",children:["케라폭시 줄눈,",n.jsx("br",{}),"왜 ",n.jsx("em",{children:"프리미엄 소재"}),"인가요?"]}),n.jsxs("p",{className:"kf-intro-body",children:[n.jsx("em",{className:"kf-hl",children:"케라폭시(Kerafoxy)는 에폭시 수지와 경화제를 혼합한 2액형 고성능 줄눈 소재"}),"입니다. 시멘트 줄눈이 물과 함께 굳는 방식과 달리, 화학적 결합으로 경화되어 본질적으로 다른 강도와 방수성을 만들어냅니다."]}),n.jsx("p",{className:"kf-intro-body",children:"이탈리아 건설 소재 전문 브랜드가 개발한 케라폭시는 국내외 수많은 고급 주택·호텔·상업 공간에서 사용되며 줄눈 소재로서의 우수성이 검증되어 있습니다."}),n.jsx("p",{className:"kf-intro-body",children:"특히 곰팡이가 쉽게 번식하는 욕실·주방 환경에서, 케라폭시는 일반 시멘트 줄눈 대비 압도적인 위생 유지 효과를 보여줍니다."}),n.jsx("ul",{className:"kf-intro-stats",children:Rv.map(c=>n.jsxs("li",{children:[n.jsx("span",{className:"kf-stat-k",children:c.k}),n.jsx("span",{className:"kf-stat-v",children:c.v})]},c.k))})]}),n.jsx("div",{className:"kf-intro-right",children:n.jsx("div",{className:"kf-intro-photo",children:n.jsx("img",{src:Ev,alt:"케라폭시 줄눈 시공 디테일",loading:"lazy"})})})]})})}),n.jsx("section",{className:"kf-section kf-bg-paper","data-screen-label":"03 Benefits",children:n.jsxs("div",{className:"kf-container",children:[n.jsx(zr,{num:"02",ko:"5가지 핵심 장점",en:"Benefits",title:n.jsxs(n.Fragment,{children:["일반 시멘트 줄눈과 비교할 수 없는 ",n.jsx("em",{children:"성능 차이"}),"."]}),lede:"물·세균·시간이라는 줄눈의 세 가지 적에 대해, 케라폭시가 어떻게 대응하는지 정리했습니다."}),n.jsx("div",{className:"kf-benefits-grid",children:Cv.map(c=>n.jsxs("article",{className:`kf-benefit ${c.dark?"kf-benefit-dark":""}`,children:[n.jsxs("div",{className:"kf-benefit-head",children:[n.jsxs("span",{className:"kf-benefit-lbl",children:["Benefit / ",c.idx]}),n.jsx("span",{className:"kf-benefit-idx",children:c.idx})]}),n.jsx("h3",{className:"kf-benefit-title",children:c.title.split(`
`).map((d,p)=>n.jsx("span",{className:"kf-benefit-title-line",children:d},p))}),n.jsx("p",{className:"kf-benefit-body",children:c.body}),n.jsxs("div",{className:"kf-benefit-spec",children:[n.jsx("span",{className:"kf-spec-k",children:c.k}),n.jsx("span",{className:"kf-spec-v",children:c.v})]})]},c.idx))}),n.jsx("div",{className:"kf-compare",children:Mv.map(c=>n.jsxs("div",{className:`kf-compare-col ${c.hero?"kf-is-hero":""}`,children:[n.jsxs("div",{className:"kf-compare-head",children:[n.jsx("h3",{className:"kf-compare-name",children:c.name}),n.jsx("span",{className:"kf-compare-tag",children:c.tag})]}),n.jsx("ul",{className:"kf-compare-list",children:c.items.map(d=>n.jsx("li",{children:d},d))})]},c.name))})]})}),n.jsx("section",{className:"kf-section","data-screen-label":"04 Spaces",children:n.jsxs("div",{className:"kf-container",children:[n.jsx(zr,{num:"03",ko:"적합한 공간",en:"Spaces",title:n.jsxs(n.Fragment,{children:["어떤 공간에 케라폭시를 ",n.jsx("em",{children:"시공"}),"해야 할까요?"]}),lede:"물과 오염이 가까운 곳, 미관과 위생을 동시에 잡아야 하는 곳에 케라폭시가 강합니다."}),n.jsx("ul",{className:"kf-spaces",children:Ov.map(c=>n.jsxs("li",{className:"kf-space-row",children:[n.jsx("span",{className:"kf-space-code",children:c.code}),n.jsxs("span",{className:"kf-space-lbl",children:[n.jsx("span",{className:"kf-space-ko",children:c.ko}),n.jsx("span",{className:"kf-space-en",children:c.en})]}),n.jsx("span",{className:"kf-space-desc",children:c.desc}),n.jsxs("span",{className:"kf-space-more",children:["자세히 ",n.jsx("span",{className:"kf-space-arr",children:"→"})]})]},c.code))})]})}),n.jsx("section",{className:"kf-section-dark","data-screen-label":"05 Before · After",children:n.jsxs("div",{className:"kf-container",children:[n.jsx(zr,{dark:!0,num:"04",ko:"시공 전 · 후 비교",en:"Before · After",title:n.jsxs(n.Fragment,{children:["한 번의 시공으로, 줄눈이 ",n.jsx("em",{children:"인테리어의 점"}),"이 됩니다."]}),lede:"실제 시공 현장에서 발견되는 변화를 정리했습니다. 같은 공간, 다른 마감."}),n.jsxs("div",{className:"kf-ba-grid",children:[n.jsxs("figure",{className:"kf-ba-item",children:[n.jsxs("div",{className:"kf-ba-photo",children:[n.jsx("img",{src:Nv,alt:"시공 전 — 시멘트 줄눈 상태",loading:"lazy"}),n.jsx("span",{className:"kf-ba-pill kf-ba-pill-light",children:"Before"})]}),n.jsxs("figcaption",{className:"kf-ba-cap",children:[n.jsx("h4",{className:"kf-ba-cap-title",children:"변색·균열·곰팡이 발생, 청소 어려움"}),n.jsx("p",{className:"kf-ba-cap-body",children:"시간이 지나며 흡수된 수분과 오염으로 줄눈이 어둡게 변하고, 모서리 부근부터 균열이 나타납니다."})]})]}),n.jsxs("figure",{className:"kf-ba-item",children:[n.jsxs("div",{className:"kf-ba-photo",children:[n.jsx("img",{src:Sv,alt:"시공 후 — 케라폭시 줄눈 마감",loading:"lazy"}),n.jsx("span",{className:"kf-ba-pill kf-ba-pill-accent",children:"After"})]}),n.jsxs("figcaption",{className:"kf-ba-cap",children:[n.jsx("h4",{className:"kf-ba-cap-title",children:"매끄럽고 균일한 마감, 위생적인 깨끗함"}),n.jsx("p",{className:"kf-ba-cap-body",children:"균일한 두께·색상으로 타일 사이의 선이 이어지며, 청소 한 번으로 새것처럼 유지됩니다."})]})]})]}),n.jsx("ul",{className:"kf-ba-bottom",children:_v.map(c=>n.jsxs("li",{children:[n.jsx("span",{className:"kf-ba-bot-k",children:c.k}),n.jsx("span",{className:"kf-ba-bot-v",children:c.v})]},c.k))})]})}),n.jsx("section",{className:"kf-section kf-bg-paper","data-screen-label":"06 Related",children:n.jsxs("div",{className:"kf-container",children:[n.jsx(zr,{num:"05",ko:"관련 정보 더 보기",en:"Related",title:n.jsxs(n.Fragment,{children:["줄눈에 대해 알아야 할, 다른 ",n.jsx("em",{children:"네 가지"}),"."]}),lede:"가격 · 제품 · 비교 · 시공 — 네 가지 관점으로 줄눈을 더 깊이 살펴보세요."}),n.jsx("div",{className:"kf-related-grid",children:Dv.map(c=>n.jsxs(Je,{to:c.href,className:"kf-related-card",children:[n.jsx("span",{className:"kf-related-idx",children:c.idx}),n.jsx("h4",{className:"kf-related-title",children:c.title}),n.jsx("p",{className:"kf-related-desc",children:c.desc}),n.jsxs("span",{className:"kf-related-more",children:["more ",n.jsx("span",{className:"kf-related-arr",children:"→"})]})]},c.href))})]})}),n.jsx("section",{className:"kf-cta-band","data-screen-label":"CTA Band",children:n.jsxs("div",{className:"kf-container kf-cta-row",children:[n.jsxs("div",{className:"kf-cta-text",children:[n.jsxs("h3",{className:"kf-cta-title",children:["우리 집 줄눈에 맞는 답이 궁금하다면, ",n.jsx("em",{children:"무료 견적"}),"으로 시작하세요."]}),n.jsx("p",{className:"kf-cta-sub",children:"평형 · 공간 · 색상을 알려주시면 24시간 내에 회신드립니다. 강남구·서초구·송파구 욕실·베란다·현관 줄눈 무료 견적."})]}),n.jsxs("div",{className:"kf-cta-actions",children:[n.jsxs("button",{type:"button",className:"kf-btn kf-btn-primary",onClick:u,children:["무료 견적 받기 ",n.jsx("span",{className:"kf-btn-arr",children:"→"})]}),n.jsx("a",{href:"tel:010-8005-6674",onClick:()=>ut.phoneClick("info_cta"),className:"kf-btn kf-btn-ghost",children:"전화 상담 010-8005-6674"})]})]})}),n.jsx(il,{}),n.jsx("style",{children:Bv})]})}const Bv=`
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
`,Hv="/assets/bg-CP9CkGLZ.webp",Lv="/assets/bg_m-DjojSNnF.webp",Yv=[{k:"기준 연도",v:"2026",small:"VAT 별도"},{k:"단위",v:"만원",small:"1ea / 1줄"},{k:"A/S",v:"2년",small:"무상"},{k:"결제",v:"현금 / 카드",small:"분할 OK"}],qv=[{label:"화장실",group:"bath",rows:[{scope:"욕조형 · 바닥만",new:[40,30],old:[30,25]},{scope:"욕조형 · 전체 (바닥+벽)",new:[90,65],old:[75,55]},{scope:"샤워부스형 · 바닥만",new:[45,35],old:[38,30]},{scope:"샤워부스형 · 전체 (바닥+벽)",new:[95,70],old:[80,60]}]},{label:"거실",group:"living",rows:[{scope:"바닥 · 20평대",new:[150,100],old:[130,90]},{scope:"바닥 · 30평대+",new:[null,null],old:[null,null],note:"별도 협의"}]},{label:"현관",group:"etc",rows:[{scope:"바닥",new:[15,5],old:[12,4]}]},{label:"베란다",group:"etc",rows:[{scope:"바닥",new:[20,15],old:[18,13]}]},{label:"외부 화장실",group:"etc",rows:[{scope:"바닥",new:[30,25],old:[28,23]}]}],Gv=[{num:"01",name:"세트 1",sub:"· 기본",desc:"화장실 바닥 ×2 + 현관",newPrice:100,oldPrice:120,services:[],emptyLabel:"기본 시공 패키지"},{num:"02",name:"세트 2",sub:"· 표준",desc:"세트 1 + 양조벽 or 샤워벽 3면 ×1곳",newPrice:135,oldPrice:155,services:[{text:"젠 다이 실리콘 ×2"},{text:"세면대 실리콘 ×2"}]},{num:"03",name:"세트 3",sub:"· 완성",desc:"화장실 바닥 ×2 + 전체벽 ×2 + 현관",newPrice:240,oldPrice:260,services:[{text:"젠 다이 실리콘 ×2"},{text:"세면대 실리콘 ×2"},{text:"싱크볼 실리콘"},{text:"주방벽 케라폭시"}]},{num:"04",name:"세트 4",sub:"· 확장",desc:"세트 2 + 세탁실",newPrice:150,oldPrice:170,services:[{text:"젠 다이 실리콘 ×2"},{text:"세면대 실리콘 ×2"},{text:"주방 실리콘"},{text:"싱크볼 실리콘"}]}],Vv=[{n:"01",name:"시공 면적",en:"Area / Size",desc:"면적이 넓을수록 평단가가 내려가며, 협소한 공간은 작업 난이도로 인해 단가가 높아질 수 있습니다.",impact:"평단가 ↘",impactClass:"down"},{n:"02",name:"타일 크기 · 줄눈 간격",en:"Tile Size",desc:"타일이 작을수록 줄눈 길이가 길어져 작업 시간과 자재비가 증가합니다.",impact:"자재·시간 ↗",impactClass:"up"},{n:"03",name:"기존 줄눈 상태",en:"Existing Grout",desc:"기존 줄눈 제거가 필요한 경우 추가 작업비가 발생하며, 손상이 심할수록 비용이 올라갑니다.",impact:"+10만원~",impactClass:"up"},{n:"04",name:"색상 선택",en:"Color",desc:"특수 색상이나 다색 시공의 경우 단가가 다를 수 있으며, 컬러 매칭 작업이 추가됩니다.",impact:"옵션 변동",impactClass:"var"},{n:"05",name:"지역 · 접근성",en:"Location",desc:"지방이나 접근이 어려운 고층 건물의 경우 추가 출장비가 반영될 수 있습니다.",impact:"출장비 가산",impactClass:"up"}],Qv=[{idx:"No. 01 · Intro",href:"/info/kerafoxy",title:"케라폭시 줄눈이란?",desc:"에폭시 줄눈 소재의 특징과 장점을 정리했습니다."},{idx:"No. 03 · Product",href:"/info/kerafoxy-product",title:"케라폭시 계열 제품 소개",desc:"주요 제품 라인업과 색상 가이드."},{idx:"No. 04 · Compare",href:"/info/comparison",title:"폴리우레아 vs 케라폭시",desc:"두 소재의 차이점과 적합한 공간 정리."},{idx:"No. 05 · Why",href:"/info/why-grout",title:"줄눈시공 하는 이유",desc:"위생·미관·내구성을 위한 필수 시공."}];function Ar({num:s,ko:u,en:c,title:d,lede:p}){return n.jsxs("div",{className:"kp-sec-head",children:[n.jsxs("div",{className:"kp-sec-bar",children:[n.jsx("span",{className:"kp-sec-n",children:s}),n.jsx("span",{className:"kp-sec-rule"}),n.jsxs("span",{className:"kp-sec-lbl",children:[n.jsx("span",{className:"kp-sec-ko",children:u}),n.jsx("span",{className:"kp-sec-en",children:c})]})]}),n.jsxs("div",{className:"kp-sec-body",children:[n.jsx("h2",{className:"kp-sec-title",children:d}),p&&n.jsx("p",{className:"kp-sec-lede",children:p})]})]})}function Zv(){const s=Ba(),[u,c]=k.useState("all"),[d,p]=k.useState("new");rl(),k.useEffect(()=>{window.scrollTo(0,0)},[]);const m=()=>{s("/#calc"),setTimeout(()=>{const b=document.querySelector("#calc");b&&b.scrollIntoView({behavior:"smooth"})},300)},g=k.useMemo(()=>qv.filter(b=>u==="all"||u===b.group),[u]);return n.jsxs("div",{className:"kp-page",children:[n.jsx(nl,{}),n.jsxs("header",{className:"kp-hero","data-screen-label":"Hero",children:[n.jsx("div",{className:"kp-hero-bg",style:{"--hero-img-d":`url(${Hv})`,"--hero-img-m":`url(${Lv})`},"aria-hidden":"true"}),n.jsxs("div",{className:"kp-container kp-hero-inner",children:[n.jsx("div",{className:"kp-eyebrow kp-eyebrow-light",children:"Grout Knowledge · 02"}),n.jsxs("h1",{className:"kp-hero-title",children:["케라폭시 가격",n.jsx("em",{children:","}),n.jsx("br",{}),"한 줄까지 ",n.jsx("em",{children:"투명하게"}),"."]}),n.jsxs("p",{className:"kp-hero-lede",children:["2026년 디테일라인 표준 가격표.",n.jsx("br",{}),"공간 · 평형 · 시공 범위에 따른 단가를 그대로 공개합니다."]}),n.jsx("ul",{className:"kp-hero-meta",children:Yv.map(b=>n.jsxs("li",{children:[n.jsx("span",{className:"kp-meta-k",children:b.k}),n.jsxs("span",{className:"kp-meta-v",children:[b.v," ",n.jsx("small",{children:b.small})]})]},b.k))})]})]}),n.jsx("nav",{className:"kp-crumb","aria-label":"현재 위치",children:n.jsxs("div",{className:"kp-container kp-crumb-inner",children:[n.jsx(Je,{to:"/",className:"kp-crumb-item",children:"홈"}),n.jsx("span",{className:"kp-crumb-sep",children:"/"}),n.jsx("span",{className:"kp-crumb-item",children:"줄눈 정보"}),n.jsx("span",{className:"kp-crumb-sep",children:"/"}),n.jsx("span",{className:"kp-crumb-here",children:"케라폭시 가격 안내"})]})}),n.jsx("section",{className:"kp-section","data-screen-label":"01 Pricing Table",children:n.jsxs("div",{className:"kp-container",children:[n.jsx(Ar,{num:"01",ko:"2026 가격 테이블",en:"Pricing Table",title:n.jsxs(n.Fragment,{children:["공간별 시공 단가,",n.jsx("br",{}),n.jsx("em",{children:"그대로 공개"}),"합니다."]}),lede:"케라폭시·폴리우레아 두 소재의 표준 단가입니다. 현장 상황에 따라 ±10% 조정될 수 있습니다."}),n.jsxs("div",{className:"kp-pt-controls",children:[n.jsx("div",{className:"kp-chips",role:"tablist","aria-label":"공간 필터",children:["all","bath","living","etc"].map(b=>n.jsx("button",{type:"button",className:`kp-chip ${u===b?"on":""}`,onClick:()=>c(b),role:"tab","aria-selected":u===b,children:b==="all"?"전체":b==="bath"?"화장실":b==="living"?"거실":"현관·기타"},b))}),n.jsx("div",{className:"kp-toggle",role:"tablist","aria-label":"건물 유형",children:["new","old"].map(b=>n.jsx("button",{type:"button",className:d===b?"on":"",onClick:()=>p(b),role:"tab","aria-selected":d===b,children:b==="new"?"신축":"구축"},b))})]}),n.jsx("div",{className:"kp-ptable-wrap",children:n.jsxs("table",{className:"kp-ptable",children:[n.jsx("caption",{className:"sr-only",children:"2026년 공간별 표준 단가 (만원, VAT 별도)"}),n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{style:{width:"160px"},children:"공간"}),n.jsx("th",{children:"범위"}),n.jsx("th",{className:"right",style:{width:"200px"},children:"케라폭시"}),n.jsx("th",{className:"right",style:{width:"200px"},children:"폴리우레아"})]})}),n.jsx("tbody",{children:g.flatMap(b=>b.rows.map((x,h)=>{const[A,w]=d==="new"?x.new:x.old;return n.jsxs("tr",{children:[n.jsx("td",{className:"kp-cell-space",children:h===0?b.label:""}),n.jsx("td",{className:"kp-cell-scope",children:x.scope}),n.jsx("td",{className:"right",children:x.note?n.jsx("span",{className:"kp-price note",children:x.note}):n.jsxs("span",{className:"kp-price kp",children:[A,n.jsx("small",{children:"만원"})]})}),n.jsx("td",{className:"right",children:x.note?n.jsx("span",{className:"kp-price note",children:x.note}):n.jsxs("span",{className:"kp-price",children:[w,n.jsx("small",{children:"만원"})]})})]},`${b.label}-${x.scope}`)}))})]})}),n.jsx("ul",{className:"kp-pcards","aria-label":"공간별 가격 카드",children:g.flatMap(b=>b.rows.map(x=>{const[h,A]=d==="new"?x.new:x.old;return n.jsxs("li",{className:"kp-pcard",children:[n.jsxs("div",{className:"kp-pcard-info",children:[n.jsx("span",{className:"kp-pcard-space",children:b.label}),n.jsx("span",{className:"kp-pcard-scope",children:x.scope})]}),n.jsxs("div",{className:"kp-pcard-prices",children:[n.jsxs("div",{className:"kp-pcard-pr",children:[n.jsx("span",{className:"kp-pcard-pr-lbl",children:"케라폭시"}),x.note?n.jsx("span",{className:"kp-pcard-pr-note",children:x.note}):n.jsxs("span",{className:"kp-pcard-pr-val kp",children:[h,n.jsx("small",{children:"만원"})]})]}),n.jsxs("div",{className:"kp-pcard-pr",children:[n.jsx("span",{className:"kp-pcard-pr-lbl",children:"폴리우레아"}),x.note?n.jsx("span",{className:"kp-pcard-pr-note",children:x.note}):n.jsxs("span",{className:"kp-pcard-pr-val",children:[A,n.jsx("small",{children:"만원"})]})]})]})]},`m-${b.label}-${x.scope}`)}))}),n.jsxs("div",{className:"kp-pt-foot",children:[n.jsx("div",{children:"* 모든 가격은 VAT 별도 · 자재비·인건비·출장비 포함 · 2년 무상 A/S (에폭시 계열)"}),n.jsx("div",{children:"* 평형 30평 초과 또는 특수 상황은 별도 협의"})]})]})}),n.jsx("section",{className:"kp-section kp-bg-paper","data-screen-label":"02 Set Packages",children:n.jsxs("div",{className:"kp-container",children:[n.jsx(Ar,{num:"02",ko:"세트 할인 패키지",en:"Set Packages",title:n.jsxs(n.Fragment,{children:["4가지 패키지로,",n.jsx("br",{}),"한 번에 ",n.jsx("em",{children:"합리적으로"}),"."]}),lede:"화장실·현관·벽 등 주요 공간을 묶어 시공하면 실리콘·주방벽 등 추가 서비스가 함께 제공됩니다. VAT 포함 · 34평 이하 · 300개 타일 기준."}),n.jsx("div",{className:"kp-sets",children:Gv.map(b=>n.jsxs("div",{className:"kp-set-card",children:[n.jsxs("div",{className:"kp-set-badge",children:["— SET ",b.num]}),n.jsxs("div",{className:"kp-set-title",children:[n.jsx("h3",{className:"kp-set-name",children:b.name}),n.jsx("span",{className:"kp-set-sub",children:b.sub})]}),n.jsx("p",{className:"kp-set-desc",children:b.desc}),n.jsxs("div",{className:"kp-set-prices",children:[n.jsxs("div",{className:"kp-set-pr",children:[n.jsx("span",{className:"kp-set-pr-lbl",children:"신축"}),n.jsx("span",{className:"kp-set-pr-val",children:b.newPrice}),n.jsx("span",{className:"kp-set-pr-unit",children:"만원"})]}),n.jsxs("div",{className:"kp-set-pr",children:[n.jsx("span",{className:"kp-set-pr-lbl",children:"구축"}),n.jsx("span",{className:"kp-set-pr-val",children:b.oldPrice}),n.jsx("span",{className:"kp-set-pr-unit",children:"만원"})]})]}),b.services.length>0?n.jsxs("div",{className:"kp-set-services",children:[n.jsx("div",{className:"kp-set-s-lbl",children:"+ 함께 제공"}),n.jsx("ul",{children:b.services.map(x=>n.jsx("li",{children:x.text},x.text))})]}):n.jsx("div",{className:"kp-set-services-empty",children:b.emptyLabel})]},b.num))}),n.jsxs("p",{className:"kp-set-foot",children:["※ 가격은 ",n.jsx("b",{children:"VAT 포함 · 34평 이하 · 300개 타일"})," 기준. 세트 외 추가 옵션은 상담 후 별도 산정됩니다.",n.jsx("br",{}),"※ 세트 실리콘은 기존 실리콘 양호 기준이며, 제거 후 재시공 시 추가 비용이 발생합니다. 기존 줄눈 시공 이력이 있는 경우 ",n.jsx("b",{children:"공간당 +10만원"}),"이 추가됩니다."]})]})}),n.jsx("section",{className:"kp-section","data-screen-label":"03 Cost Factors",children:n.jsxs("div",{className:"kp-container",children:[n.jsx(Ar,{num:"03",ko:"시공 가격에 영향을 주는 요인",en:"Cost Factors",title:n.jsxs(n.Fragment,{children:["같은 평형이라도,",n.jsx("br",{}),"견적이 ",n.jsx("em",{children:"달라지는 이유"}),"."]}),lede:"현장의 디테일이 가격을 만듭니다. 자주 영향을 주는 다섯 가지 요인입니다."}),n.jsx("ul",{className:"kp-factors",children:Vv.map(b=>n.jsxs("li",{className:"kp-f-row",children:[n.jsx("span",{className:"kp-f-n",children:b.n}),n.jsxs("span",{className:"kp-f-name",children:[b.name,n.jsx("small",{children:b.en})]}),n.jsx("span",{className:"kp-f-desc",children:b.desc}),n.jsx("span",{className:`kp-f-impact kp-f-impact--${b.impactClass}`,children:b.impact})]},b.n))})]})}),n.jsx("section",{className:"kp-section kp-bg-paper","data-screen-label":"04 Related",children:n.jsxs("div",{className:"kp-container",children:[n.jsx(Ar,{num:"04",ko:"관련 정보 더 보기",en:"Related",title:n.jsxs(n.Fragment,{children:["줄눈에 대해 알아야 할, 다른 ",n.jsx("em",{children:"네 가지"}),"."]}),lede:"가격 · 제품 · 비교 · 시공 — 네 가지 관점으로 줄눈을 더 깊이 살펴보세요."}),n.jsx("div",{className:"kp-related-grid",children:Qv.map(b=>n.jsxs(Je,{to:b.href,className:"kp-related-card",children:[n.jsx("span",{className:"kp-related-idx",children:b.idx}),n.jsx("h4",{className:"kp-related-title",children:b.title}),n.jsx("p",{className:"kp-related-desc",children:b.desc}),n.jsxs("span",{className:"kp-related-more",children:["more ",n.jsx("span",{className:"kp-related-arr",children:"→"})]})]},b.href))})]})}),n.jsx("section",{className:"kp-cta-band","data-screen-label":"CTA Band",children:n.jsxs("div",{className:"kp-container kp-cta-row",children:[n.jsxs("div",{className:"kp-cta-text",children:[n.jsxs("h3",{className:"kp-cta-title",children:["정확한 시공 비용이 ",n.jsx("em",{children:"궁금하신가요?"})]}),n.jsx("p",{className:"kp-cta-sub",children:"현장 상황에 따라 가격이 달라질 수 있습니다. 공간별 맞춤 견적을 안내해 드립니다. 강남구·서초구·송파구 욕실·베란다·현관 줄눈 무료 견적."})]}),n.jsxs("div",{className:"kp-cta-actions",children:[n.jsxs("button",{type:"button",className:"kp-btn kp-btn-primary",onClick:m,children:["무료 견적 받기 ",n.jsx("span",{className:"kp-btn-arr",children:"→"})]}),n.jsx("a",{href:"tel:010-8005-6674",onClick:()=>ut.phoneClick("info_cta"),className:"kp-btn kp-btn-ghost",children:"전화 상담 010-8005-6674"})]})]})}),n.jsx(il,{}),n.jsx("style",{children:Kv})]})}const Kv=`
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
`,Xv="/assets/kerafoxy-DrWysCxm.jpg",Jv="/assets/strikeevo-CoKoyCPo.jpg",Wv="/assets/aspactone-CtALWUuf.jpg",$v="/assets/Polyurea-DMhrJjtC.jpg",Fv="/assets/bg-LU8nN9ip.webp",Iv="/assets/bg_m-BSEgDA_R.webp",Pv=[{k:"라인업",v:"4종",small:"에폭시 계열"},{k:"컬러",v:"20+",small:"표준 색상"},{k:"친환경",v:"EC1+",small:"GEV 인증"},{k:"A/S",v:"2년",small:"무상"}],Tr=[{id:"pure",name:"순백",hex:"#f1ede4",group:"white",tagEn:"WHITE",light:!0},{id:"ivory",name:"아이보리",hex:"#e6dccb",group:"white",tagEn:"WHITE",light:!0},{id:"beige",name:"베이지",hex:"#d9c8a2",group:"earth",tagEn:"EARTH",light:!0},{id:"sand",name:"샌드",hex:"#bfa478",group:"earth",tagEn:"EARTH",light:!1},{id:"khaki",name:"카키",hex:"#8a7d5e",group:"earth",tagEn:"EARTH",light:!1},{id:"brown",name:"브라운",hex:"#6f4a2a",group:"earth",tagEn:"EARTH",light:!1},{id:"silver",name:"실버그레이",hex:"#c4c0bc",group:"gray",tagEn:"GRAY",light:!0},{id:"lightgray",name:"라이트그레이",hex:"#a8a59f",group:"gray",tagEn:"GRAY",light:!1},{id:"mediumgray",name:"미디엄그레이",hex:"#7a766f",group:"gray",tagEn:"GRAY",light:!1},{id:"darkgray",name:"다크그레이",hex:"#4a4842",group:"dark",tagEn:"DARK",light:!1},{id:"charcoal",name:"차콜",hex:"#2a2825",group:"dark",tagEn:"DARK",light:!1},{id:"black",name:"블랙",hex:"#16140f",group:"dark",tagEn:"DARK",light:!1}],$n={all:"전체",white:"화이트 계열",earth:"베이지·어스 계열",gray:"그레이 계열",dark:"다크 계열"},ko={white:"타일과 통일감을 주어 깔끔하고 넓어 보이는 효과를 만듭니다. 오염은 비교적 잘 보이는 편이므로 청소 빈도가 높은 공간에 적합합니다.",earth:"원목·가구·내추럴 인테리어와 잘 어우러집니다. 오염 자국이 눈에 잘 띄지 않아 관리가 편합니다.",gray:"오염이 덜 보이고 유지관리가 편하며, 모던하고 차분한 분위기를 만듭니다. 대부분의 타일과 무난하게 어울립니다.",dark:"타일과 강한 대비를 만들어 그래픽한 인테리어 포인트가 됩니다. 좁은 공간에서는 답답하게 보일 수 있어 주의가 필요합니다."},Rr={white:{label:"화이트",hex:"#ece6dc"},gray:{label:"그레이",hex:"#b5b1a8"},dark:{label:"다크",hex:"#3a3530"}},jm=[{id:"kerafoxy",name:"케라폭시",badge:{label:"프리미엄",variant:"premium"},desc:"에폭시 수지+경화제 2액형의 대표 프리미엄 줄눈재. 화장실·욕실·주방 등 물 접촉 공간에서 가장 안정적인 성능을 보입니다.",specs:[{k:"베이스",v:"에폭시 + 경화제 2액형"},{k:"경화 시간",v:"24 ~ 48시간"},{k:"표면",v:"고광택"},{k:"추천 공간",v:"화장실 · 욕실 · 주방"},{k:"컬러",v:"20+ 색상"},{k:"수명",v:"10년+"}],image:Xv},{id:"strikeevo",name:"스트라이크 에보",badge:{label:"프리미엄",variant:"premium"},desc:"3세대 에폭시 줄눈재로 무광·유광 선택이 가능하며, 균일한 컬러와 변색 저항성이 뛰어납니다. 프리미엄 인테리어에 자주 채택됩니다.",specs:[{k:"베이스",v:"에폭시 (이탈리아산)"},{k:"경화 시간",v:"24 ~ 72시간"},{k:"표면",v:"무광 / 유광 선택"},{k:"추천 공간",v:"화장실 · 주방 · 디자인 강조"},{k:"컬러",v:"30+ 색상"},{k:"수명",v:"10년+"}],image:Jv},{id:"aspactone",name:"아스팍톤",badge:{label:"개선형",variant:"premium"},desc:"무광·무펄·무수축·무황변을 구현한 신소재 에폭시. 기존 무광 에폭시의 단점을 보완해 어린이방·욕실에 추천됩니다.",specs:[{k:"베이스",v:"에폭시 개선형"},{k:"경화 시간",v:"24 ~ 36시간"},{k:"표면",v:"균일 무광"},{k:"추천 공간",v:"패턴 타일 · 디자인 욕실"},{k:"컬러",v:"25+ 색상"},{k:"수명",v:"10년+"}],image:Wv},{id:"polyurea",name:"폴리우레아",badge:{label:"하이브리드",variant:"hybrid"},desc:"시멘트 + 에폭시 하이브리드 줄눈재. 매트한 질감으로 내추럴 인테리어에 잘 맞고, 가격대가 합리적이라 비수계 공간에 추천됩니다.",specs:[{k:"베이스",v:"시멘트 + 에폭시"},{k:"경화 시간",v:"48 ~ 96시간"},{k:"표면",v:"매트"},{k:"추천 공간",v:"현관 · 베란다 · 거실 일부"},{k:"컬러",v:"16+ 색상"},{k:"수명",v:"5년+"}],image:$v}],e1=[{idx:"No. 01 · Intro",href:"/info/kerafoxy",title:"케라폭시 줄눈이란?",desc:"에폭시 줄눈 소재의 특징과 장점을 정리했습니다."},{idx:"No. 02 · Pricing",href:"/info/kerafoxy-price",title:"케라폭시 가격 안내",desc:"시공 비용에 영향을 주는 요인과 표준 가격."},{idx:"No. 04 · Compare",href:"/info/comparison",title:"폴리우레아 vs 케라폭시",desc:"두 소재의 차이점과 적합한 공간 정리."},{idx:"No. 05 · Why",href:"/info/why-grout",title:"줄눈시공 하는 이유",desc:"위생·미관·내구성을 위한 필수 시공."}];function wo({num:s,ko:u,en:c,title:d,lede:p}){return n.jsxs("div",{className:"ep-sec-head",children:[n.jsxs("div",{className:"ep-sec-bar",children:[n.jsx("span",{className:"ep-sec-n",children:s}),n.jsx("span",{className:"ep-sec-rule"}),n.jsxs("span",{className:"ep-sec-lbl",children:[n.jsx("span",{className:"ep-sec-ko",children:u}),n.jsx("span",{className:"ep-sec-en",children:c})]})]}),n.jsxs("div",{className:"ep-sec-body",children:[n.jsx("h2",{className:"ep-sec-title",children:d}),p&&n.jsx("p",{className:"ep-sec-lede",children:p})]})]})}function t1(){const s=Ba(),[u,c]=k.useState("kerafoxy"),[d,p]=k.useState("silver"),[m,g]=k.useState("all"),[b,x]=k.useState("white");rl(),k.useEffect(()=>{window.scrollTo(0,0)},[]);const h=()=>{s("/#calc"),setTimeout(()=>{const S=document.querySelector("#calc");S&&S.scrollIntoView({behavior:"smooth"})},300)},A=jm.find(S=>S.id===u),w=Tr.find(S=>S.id===d),B=k.useMemo(()=>m==="all"?Tr:Tr.filter(S=>S.group===m),[m]),Z={"--grout-color":w.hex,"--tile-color":Rr[b].hex};return n.jsxs("div",{className:"ep-page",children:[n.jsx(nl,{}),n.jsxs("header",{className:"ep-hero","data-screen-label":"Hero",children:[n.jsx("div",{className:"ep-hero-bg",style:{"--hero-img-d":`url(${Fv})`,"--hero-img-m":`url(${Iv})`},"aria-hidden":"true"}),n.jsxs("div",{className:"ep-container ep-hero-inner",children:[n.jsx("div",{className:"ep-eyebrow ep-eyebrow-light",children:"Grout Knowledge · 03"}),n.jsxs("h1",{className:"ep-hero-title",children:["내 공간에 맞는",n.jsx("br",{}),"에폭시 계열 ",n.jsx("em",{children:"한 가지"}),"."]}),n.jsxs("p",{className:"ep-hero-lede",children:["디테일라인이 직접 시공하는 4종의 에폭시 계열 줄눈재와",n.jsx("br",{}),"줄눈 색상을 미리 확인할 수 있는 라이브 시뮬레이터를 제공합니다."]}),n.jsx("ul",{className:"ep-hero-meta",children:Pv.map(S=>n.jsxs("li",{children:[n.jsx("span",{className:"ep-meta-k",children:S.k}),n.jsxs("span",{className:"ep-meta-v",children:[S.v," ",n.jsx("small",{children:S.small})]})]},S.k))})]})]}),n.jsx("nav",{className:"ep-crumb","aria-label":"현재 위치",children:n.jsxs("div",{className:"ep-container ep-crumb-inner",children:[n.jsx(Je,{to:"/",className:"ep-crumb-item",children:"홈"}),n.jsx("span",{className:"ep-crumb-sep",children:"/"}),n.jsx("span",{className:"ep-crumb-item",children:"줄눈 정보"}),n.jsx("span",{className:"ep-crumb-sep",children:"/"}),n.jsx("span",{className:"ep-crumb-here",children:"에폭시 계열 제품 소개"})]})}),n.jsx("section",{className:"ep-section","data-screen-label":"01 Product Lineup",children:n.jsxs("div",{className:"ep-container",children:[n.jsx(wo,{num:"01",ko:"제품 라인업",en:"Product Lineup",title:n.jsxs(n.Fragment,{children:["같은 에폭시여도,",n.jsx("br",{}),n.jsx("em",{children:"맞춤 선택"}),"이 가능합니다."]}),lede:"공간 · 표면 질감 · 색상 선호에 따라 4종의 제품 중 가장 적합한 것을 안내해 드립니다."}),n.jsx("div",{className:"ep-prod-tabs",role:"tablist","aria-label":"제품 선택",children:jm.map(S=>n.jsx("button",{type:"button",role:"tab","aria-selected":u===S.id,className:`ep-prod-tab ${u===S.id?"on":""}`,onClick:()=>c(S.id),children:S.name},S.id))}),n.jsxs("div",{className:"ep-prod-panel",role:"tabpanel",children:[n.jsx("div",{className:"ep-prod-image",children:n.jsx("img",{src:A.image,alt:`${A.name} 시공 결과`,loading:"lazy"})}),n.jsxs("div",{className:"ep-prod-info",children:[n.jsxs("div",{className:"ep-prod-head",children:[n.jsx("h3",{className:"ep-prod-name",children:A.name}),n.jsx("span",{className:`ep-prod-badge ep-prod-badge--${A.badge.variant}`,children:A.badge.label})]}),n.jsx("p",{className:"ep-prod-desc",children:A.desc}),n.jsx("dl",{className:"ep-prod-specs",children:A.specs.map(S=>n.jsxs("div",{className:"ep-prod-spec-row",children:[n.jsx("dt",{children:S.k}),n.jsx("dd",{children:S.v})]},S.k))})]})]})]})}),n.jsx("section",{className:"ep-section ep-bg-paper","data-screen-label":"02 Color Simulator",children:n.jsxs("div",{className:"ep-container",children:[n.jsx(wo,{num:"02",ko:"라이브 컬러 시뮬레이터",en:"Live Color Simulator",title:n.jsxs(n.Fragment,{children:["시공 전에, 줄눈 색을 ",n.jsx("em",{children:"미리 보세요"}),"."]}),lede:"아래 스와치를 클릭하면 좌측 타일 그리드의 줄눈 색이 즉시 바뀝니다. 타일 색·계열 필터로 다양한 조합을 빠르게 확인해 보세요."}),n.jsxs("div",{className:"ep-sim-grid",children:[n.jsxs("div",{className:"ep-sim-left",children:[n.jsx("div",{className:"ep-tile-preview",children:n.jsx("div",{className:"ep-tile-stage",style:Z,"aria-hidden":"true",children:Array.from({length:30}).map((S,G)=>n.jsx("span",{className:"ep-tile"},G))})}),n.jsx("div",{className:"ep-tile-toggle",role:"tablist","aria-label":"타일 색상",children:Object.keys(Rr).map(S=>n.jsxs("button",{type:"button",role:"tab","aria-selected":b===S,className:`ep-tile-toggle-btn ${b===S?"on":""}`,onClick:()=>x(S),children:[n.jsx("span",{className:"ep-tile-toggle-dot",style:{"--td":Rr[S].hex}}),n.jsx("span",{children:Rr[S].label})]},S))})]}),n.jsxs("div",{className:"ep-sim-right",children:[n.jsx("div",{className:"ep-group-tabs",role:"tablist","aria-label":"색상 계열",children:Object.keys($n).map(S=>n.jsx("button",{type:"button",role:"tab","aria-selected":m===S,className:`ep-group-tab ${m===S?"on":""}`,onClick:()=>g(S),children:$n[S]},S))}),n.jsx("div",{className:"ep-swatches",children:B.map(S=>n.jsx("button",{type:"button",className:`ep-swatch ${d===S.id?"is-active":""}`,style:{background:S.hex},"data-light":S.light?"true":"false",onClick:()=>p(S.id),"aria-label":`${S.name} · ${S.hex.toUpperCase()} · ${$n[S.group]}`,"aria-pressed":d===S.id},S.id))}),n.jsxs("div",{className:"ep-sel-card","aria-live":"polite",children:[n.jsx("div",{className:"ep-sel-chip",style:{"--c":w.hex},"aria-hidden":"true"}),n.jsxs("div",{className:"ep-sel-info",children:[n.jsx("h4",{className:"ep-sel-name",children:w.name}),n.jsxs("div",{className:"ep-sel-meta",children:[n.jsx("span",{className:"ep-sel-hex",children:w.hex.toUpperCase()}),n.jsxs("span",{className:"ep-sel-tag",children:["· ",w.tagEn]})]}),n.jsx("div",{className:"ep-sel-group",children:$n[w.group]}),n.jsx("p",{className:"ep-sel-tip",children:ko[w.group]})]})]})]})]}),n.jsx("ul",{className:"ep-tips-grid",children:Object.keys(ko).map(S=>{const G=Tr.filter(Y=>Y.group===S).slice(0,3);return n.jsxs("li",{className:"ep-tip-cell",children:[n.jsx("div",{className:"ep-tip-swatches","aria-hidden":"true",children:G.map(Y=>n.jsx("span",{style:{background:Y.hex}},Y.id))}),n.jsx("h4",{className:"ep-tip-name",children:$n[S]}),n.jsx("p",{className:"ep-tip-desc",children:ko[S]})]},S)})})]})}),n.jsx("section",{className:"ep-section","data-screen-label":"03 Related",children:n.jsxs("div",{className:"ep-container",children:[n.jsx(wo,{num:"03",ko:"관련 정보 더 보기",en:"Related",title:n.jsxs(n.Fragment,{children:["줄눈에 대해 알아야 할, 다른 ",n.jsx("em",{children:"네 가지"}),"."]}),lede:"가격 · 제품 · 비교 · 시공 — 네 가지 관점으로 줄눈을 더 깊이 살펴보세요."}),n.jsx("div",{className:"ep-related-grid",children:e1.map(S=>n.jsxs(Je,{to:S.href,className:"ep-related-card",children:[n.jsx("span",{className:"ep-related-idx",children:S.idx}),n.jsx("h4",{className:"ep-related-title",children:S.title}),n.jsx("p",{className:"ep-related-desc",children:S.desc}),n.jsxs("span",{className:"ep-related-more",children:["more ",n.jsx("span",{className:"ep-related-arr",children:"→"})]})]},S.href))})]})}),n.jsx("section",{className:"ep-cta-band","data-screen-label":"CTA Band",children:n.jsxs("div",{className:"ep-container ep-cta-row",children:[n.jsxs("div",{className:"ep-cta-text",children:[n.jsxs("h3",{className:"ep-cta-title",children:["어떤 제품·색이 우리 집에 맞을지 ",n.jsx("em",{children:"고민되신다면"}),"?"]}),n.jsx("p",{className:"ep-cta-sub",children:"공간 사진 한 장만 보내주시면, 가장 잘 어울리는 제품과 색을 추천해 드립니다. 강남구·서초구·송파구 욕실·베란다·현관 줄눈 무료 견적."})]}),n.jsxs("div",{className:"ep-cta-actions",children:[n.jsxs("button",{type:"button",className:"ep-btn ep-btn-primary",onClick:h,children:["무료 견적 받기 ",n.jsx("span",{className:"ep-btn-arr",children:"→"})]}),n.jsx("a",{href:"tel:010-8005-6674",onClick:()=>ut.phoneClick("info_cta"),className:"ep-btn ep-btn-ghost",children:"전화 상담 010-8005-6674"})]})]})}),n.jsx(il,{}),n.jsx("style",{children:a1})]})}const a1=`
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
`,Xl=({n:s,best:u})=>n.jsxs(n.Fragment,{children:[n.jsxs("span",{className:"cp-stars",children:["★".repeat(s),n.jsx("span",{className:"off",children:"★".repeat(5-s)})]}),n.jsx("span",{className:`cp-rating ${u?"best":""}`,children:u?"탁월":s>=4?"우수":s>=3?"보통":"낮음"})]}),km=[{k:"소재 성분",kerafoxy:n.jsxs(n.Fragment,{children:["에폭시 수지 ",n.jsx("span",{className:"cp-plus",children:"+"})," 경화제"," ",n.jsx("span",{className:"cp-rating",children:"2액형"})]}),polyurea:n.jsxs(n.Fragment,{children:["폴리우레아 수지 ",n.jsx("span",{className:"cp-rating",children:"1액형"})]})},{k:"경화 방식",kerafoxy:n.jsxs(n.Fragment,{children:["화학 반응 경화 ",n.jsx("span",{className:"cp-rating",children:"수동 혼합"})]}),polyurea:n.jsxs(n.Fragment,{children:["자연 경화 ",n.jsx("span",{className:"cp-rating",children:"습기·공기 반응"})]})},{k:"내수성",kerafoxy:n.jsx(Xl,{n:5,best:!0}),polyurea:n.jsx(Xl,{n:3})},{k:"항균성",kerafoxy:n.jsx(Xl,{n:5,best:!0}),polyurea:n.jsx(Xl,{n:3})},{k:"내구성 · 수명",kerafoxy:n.jsxs("span",{className:"cp-num",children:["10~15",n.jsx("small",{children:"년 이상"})]}),polyurea:n.jsxs("span",{className:"cp-num",children:["2~4",n.jsx("small",{children:"년"})]})},{k:"탄성 · 신축성",kerafoxy:n.jsx(Xl,{n:4}),polyurea:n.jsx(Xl,{n:5,best:!0})},{k:"시공 난이도",kerafoxy:"전문 기술 필요",polyurea:"비교적 간단"},{k:"가격",kerafoxy:n.jsxs("span",{className:"cp-num",children:["평균 30",n.jsx("small",{children:"만원"})]}),polyurea:n.jsxs("span",{className:"cp-num",children:["평균 20",n.jsx("small",{children:"만원"})]})},{k:"색상 선택",kerafoxy:n.jsxs("span",{className:"cp-num",children:["16",n.jsx("small",{children:"여 가지"})]}),polyurea:n.jsxs("span",{className:"cp-num",children:["20",n.jsx("small",{children:"여 가지"})]})},{k:"적합 환경",kerafoxy:n.jsxs(n.Fragment,{children:["욕실 · 주방 · 수영장 등 ",n.jsx("strong",{className:"cp-strong",children:"수분 多"})]}),polyurea:n.jsxs(n.Fragment,{children:["베란다 · 외벽 등 ",n.jsx("strong",{className:"cp-strong",children:"진동·충격 多"})]})}],l1=[{variant:"kp",title:"케라폭시 줄눈 추천",sub:"For Home · Indoor",items:[{text:"화장실·욕실·주방처럼 상시 수분에 노출되는 공간"},{text:"위생이 특히 중요한 가정 (어린이, 노약자)"},{text:"오랫동안 재시공 없이 사용하고 싶은 경우"},{text:"다양한 색상으로 인테리어를 연출하고 싶은 경우"}]},{variant:"pu",title:"폴리우레아 줄눈 추천",sub:"For Outdoor · Industrial",items:[{text:"베란다·테라스 등 온도 변화와 진동이 많은 공간"},{text:"건물 외벽·주차장처럼 하중과 충격이 큰 환경"},{text:"빠른 시공과 조기 경화가 필요한 경우"},{text:"비용을 절감하면서도 품질을 원하는 경우"}]}],n1=[{idx:"No. 01 · Kerafoxy",href:"/info/kerafoxy",title:"케라폭시 줄눈이란?",desc:"에폭시 계열 고성능 줄눈 소재 케라폭시의 5가지 핵심 장점."},{idx:"No. 02 · Product",href:"/info/kerafoxy-product",title:"케라폭시 계열 제품 소개",desc:"케라폭시·스타라이크·푸가리테 등 주요 제품 라인업과 색상 가이드."},{idx:"No. 03 · Pricing",href:"/info/kerafoxy-price",title:"케라폭시 가격 안내",desc:"시공 비용에 영향을 주는 요인과 평형별 표준 가격을 한눈에."},{idx:"No. 04 · Why",href:"/info/why-grout",title:"줄눈시공 하는 이유",desc:"위생·미관·내구성을 위한 필수 시공인 이유를 정리했습니다."}];function No({num:s,ko:u,en:c,title:d,lede:p}){return n.jsxs("div",{className:"cp-sec-head",children:[n.jsxs("div",{className:"cp-sec-bar",children:[n.jsx("span",{className:"cp-sec-n",children:s}),n.jsx("span",{className:"cp-sec-rule"}),n.jsxs("span",{className:"cp-sec-lbl",children:[n.jsx("span",{className:"cp-sec-ko",children:u}),n.jsx("span",{className:"cp-sec-en",children:c})]})]}),n.jsxs("div",{className:"cp-sec-body",children:[n.jsx("h2",{className:"cp-sec-title",children:d}),p&&n.jsx("p",{className:"cp-sec-lede",children:p})]})]})}function i1(){const s=Ba();rl(),k.useEffect(()=>{window.scrollTo(0,0)},[]);const u=()=>{s("/#calc"),setTimeout(()=>{const c=document.querySelector("#calc");c&&c.scrollIntoView({behavior:"smooth"})},300)};return n.jsxs("div",{className:"cp-page",children:[n.jsx(nl,{}),n.jsxs("header",{className:"cp-hero","data-screen-label":"Hero",children:[n.jsx("div",{className:"cp-hero-bg","aria-hidden":"true"}),n.jsxs("div",{className:"cp-container cp-hero-inner",children:[n.jsx("div",{className:"cp-eyebrow cp-eyebrow-light",children:"Material Compare Guide"}),n.jsxs("h1",{className:"cp-hero-title",children:["폴리우레아 ",n.jsx("span",{className:"cp-vs",children:"vs"})," 케라폭시"]}),n.jsxs("p",{className:"cp-hero-lede",children:["두 소재의 차이점과 장단점을 비교해",n.jsx("br",{}),"공간에 가장 알맞은 소재를 선택하세요."]})]})]}),n.jsx("nav",{className:"cp-crumb","aria-label":"현재 위치",children:n.jsxs("div",{className:"cp-container cp-crumb-inner",children:[n.jsx(Je,{to:"/",className:"cp-crumb-item",children:"홈"}),n.jsx("span",{className:"cp-crumb-sep",children:"/"}),n.jsx("span",{className:"cp-crumb-item",children:"줄눈 정보"}),n.jsx("span",{className:"cp-crumb-sep",children:"/"}),n.jsx("span",{className:"cp-crumb-here",children:"폴리우레아 vs 케라폭시"})]})}),n.jsx("section",{className:"cp-intro","data-screen-label":"Intro",children:n.jsx("div",{className:"cp-container",children:n.jsxs("div",{className:"cp-intro-grid",children:[n.jsxs("h2",{className:"cp-intro-title",children:["폴리우레아 줄눈과",n.jsx("br",{}),"케라폭시 줄눈,",n.jsx("br",{}),n.jsx("em",{children:"어떻게 다를까?"})]}),n.jsxs("div",{className:"cp-intro-body",children:[n.jsxs("p",{children:["줄눈 시공을 알아보다 보면 ",n.jsx("b",{children:"폴리우레아 줄눈"}),"과 ",n.jsx("b",{children:"케라폭시 줄눈"}),", 두 가지 선택지를 마주하게 됩니다. 두 소재 모두 기존 시멘트 줄눈보다 월등히 우수한 성능을 자랑하지만, 각자의 강점이 다릅니다."]}),n.jsxs("p",{children:["간단히 말하면, ",n.jsx("b",{children:"케라폭시는 방수·항균 성능"}),"이 극강이고"," ",n.jsx("b",{children:"폴리우레아는 탄성·신축성"}),"이 뛰어납니다. 공간의 특성에 따라 알맞은 소재를 선택하는 것이 핵심입니다."]}),n.jsxs("div",{className:"cp-vs-mark",children:[n.jsxs("span",{className:"cp-pill",children:["방수·항균 ",n.jsx("b",{children:"케라폭시"})]}),n.jsx("span",{className:"cp-vs-x",children:"×"}),n.jsxs("span",{className:"cp-pill",children:["탄성·내충격 ",n.jsx("b",{children:"폴리우레아"})]})]})]})]})})}),n.jsx("section",{className:"cp-section cp-bg-paper","data-screen-label":"01 Detailed Comparison",children:n.jsxs("div",{className:"cp-container",children:[n.jsx(No,{num:"01",ko:"상세 비교표",en:"Detailed Comparison",title:n.jsxs(n.Fragment,{children:["10가지 항목으로,",n.jsx("br",{}),"두 소재를 ",n.jsx("em",{children:"나란히 본다"}),"."]}),lede:"성분·내구성·가격·시공성까지. 한 줄씩 짚어가며 비교하세요. ★은 5점 만점 기준의 상대 성능입니다."}),n.jsx("div",{className:"cp-cmp-wrap",children:n.jsxs("table",{className:"cp-cmp-table",children:[n.jsx("caption",{className:"sr-only",children:"케라폭시 vs 폴리우레아 10항목 비교"}),n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{className:"cp-cmp-first",children:n.jsxs("span",{className:"cp-cmp-mat",children:["비교 항목",n.jsx("small",{children:"Criteria"})]})}),n.jsx("th",{children:n.jsxs("span",{className:"cp-cmp-mat",children:["케라폭시 줄눈",n.jsx("small",{children:"Kerapoxy"})]})}),n.jsx("th",{children:n.jsxs("span",{className:"cp-cmp-mat",children:["폴리우레아 줄눈",n.jsx("small",{children:"Polyurea"})]})})]})}),n.jsx("tbody",{children:km.map(c=>n.jsxs("tr",{children:[n.jsx("td",{className:"cp-row-label",children:c.k}),n.jsx("td",{className:"cp-col-kp",children:c.kerafoxy}),n.jsx("td",{children:c.polyurea})]},c.k))})]})}),n.jsx("ul",{className:"cp-cmp-cards","aria-label":"비교 항목별 카드",children:km.map(c=>n.jsxs("li",{className:"cp-cmp-card",children:[n.jsx("div",{className:"cp-cmp-card-k",children:c.k}),n.jsxs("div",{className:"cp-cmp-card-row",children:[n.jsxs("div",{className:"cp-cmp-card-side cp-cmp-card-kp",children:[n.jsx("span",{className:"cp-cmp-card-side-lbl",children:"케라폭시"}),n.jsx("span",{className:"cp-cmp-card-side-val",children:c.kerafoxy})]}),n.jsxs("div",{className:"cp-cmp-card-side",children:[n.jsx("span",{className:"cp-cmp-card-side-lbl",children:"폴리우레아"}),n.jsx("span",{className:"cp-cmp-card-side-val",children:c.polyurea})]})]})]},`m-${c.k}`))}),n.jsx("p",{className:"cp-cmp-foot",children:"* 가격은 화장실 양변기 전체(바닥+벽) 시공 기준 평균값이며, 평형·현장 상황에 따라 달라질 수 있습니다."})]})}),n.jsx("section",{className:"cp-section","data-screen-label":"02 Recommend",children:n.jsxs("div",{className:"cp-container",children:[n.jsx(No,{num:"02",ko:"어떤 소재를 선택해야 할까요?",en:"Which to Choose",title:n.jsxs(n.Fragment,{children:["공간 용도와 목적에 따라,",n.jsx("br",{}),"최적의 ",n.jsx("em",{children:"줄눈 소재"}),"를 선택하세요."]}),lede:"아래 체크리스트로 본인 공간에 더 어울리는 소재를 확인할 수 있습니다."}),n.jsx("div",{className:"cp-reco-grid",children:l1.map(c=>n.jsxs("article",{className:`cp-reco cp-reco-${c.variant}`,children:[n.jsxs("div",{className:"cp-reco-head",children:[n.jsx("h3",{className:"cp-reco-title",children:c.title}),n.jsx("span",{className:"cp-reco-sub",children:c.sub})]}),n.jsx("ul",{className:"cp-reco-list",children:c.items.map(d=>n.jsx("li",{children:d.text},d.text))})]},c.variant))})]})}),n.jsx("section",{className:"cp-section cp-bg-paper","data-screen-label":"03 Related",children:n.jsxs("div",{className:"cp-container",children:[n.jsx(No,{num:"03",ko:"관련 정보 더 보기",en:"Related",title:n.jsxs(n.Fragment,{children:["줄눈에 대해 알아야 할, 다른 ",n.jsx("em",{children:"네 가지"}),"."]}),lede:"자재 · 제품 · 가격 · 시공 이유 — 네 가지 관점으로 줄눈을 더 깊이 살펴보세요."}),n.jsx("div",{className:"cp-related-grid",children:n1.map(c=>n.jsxs(Je,{to:c.href,className:"cp-related-card",children:[n.jsx("span",{className:"cp-related-idx",children:c.idx}),n.jsx("h4",{className:"cp-related-title",children:c.title}),n.jsx("p",{className:"cp-related-desc",children:c.desc}),n.jsxs("span",{className:"cp-related-more",children:["more ",n.jsx("span",{className:"cp-related-arr",children:"→"})]})]},c.href))})]})}),n.jsx("section",{className:"cp-cta-band","data-screen-label":"CTA Band",children:n.jsxs("div",{className:"cp-container cp-cta-row",children:[n.jsxs("div",{className:"cp-cta-text",children:[n.jsxs("h3",{className:"cp-cta-title",children:["어떤 소재가 맞을지 ",n.jsx("em",{children:"아직 고민되시나요?"})]}),n.jsx("p",{className:"cp-cta-sub",children:"현장 상황과 요구 사항을 듣고 최적의 소재를 추천해 드립니다. 강남구·서초구·송파구 욕실·베란다·현관 줄눈 무료 견적."})]}),n.jsxs("div",{className:"cp-cta-actions",children:[n.jsxs("button",{type:"button",className:"cp-btn cp-btn-primary",onClick:u,children:["무료 견적 받기 ",n.jsx("span",{className:"cp-btn-arr",children:"→"})]}),n.jsx("a",{href:"tel:010-8005-6674",onClick:()=>ut.phoneClick("info_cta"),className:"cp-btn cp-btn-ghost",children:"전화 상담 010-8005-6674"})]})]})}),n.jsx(il,{}),n.jsx("style",{children:r1})]})}const r1=`
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
`,s1=[{k:"핵심 가치",v:"위생·미관·방수",small:"3대 효과"},{k:"권장 주기",v:"5년+",small:"시멘트 줄눈 기준"},{k:"시공 시간",v:"1일",small:"평형별 상이"},{k:"A/S",v:"2년",small:"무상"}],c1=[{n:"01",title:"위생 관리 — 곰팡이와 세균 차단",body:"타일 사이 줄눈은 습기가 모이기 쉬운 공간입니다. 시멘트 줄눈이 낡으면 균열과 기공이 생겨 곰팡이와 세균이 번식합니다. 정기적인 줄눈시공은 이런 위생 문제를 근본적으로 차단합니다.",k:"위생 지표",v:"곰팡이 0"},{n:"02",title:"미관 개선 — 공간의 첫인상을 바꾸다",body:"낡고 변색된 줄눈은 아무리 깨끗한 타일이어도 공간 전체를 낡아 보이게 만듭니다. 반대로 깔끔한 줄눈 하나만으로도 화장실·주방이 리모델링한 것처럼 새로워집니다.",k:"체감 효과",v:"리모델링 급"},{n:"03",title:"방수 보강 — 구조물 손상 예방",body:"줄눈이 갈라지면 물이 타일 아래로 스며들어 시멘트 바닥과 벽체에 수분이 침투합니다. 장기적으로 곰팡이, 타일 박리, 구조물 부식으로 이어져 훨씬 큰 수리 비용을 만듭니다.",k:"방수 효과",v:"구조 보호"},{n:"04",title:"비용 절감 — 조기 시공이 유리한 이유",body:"줄눈 문제를 방치하면 타일 전체 교체·방수 공사·구조 보수 등 수백만 원대 공사가 필요해집니다. 초기에 줄눈시공만 해도 이런 대규모 수리를 미연에 방지할 수 있습니다.",k:"예상 절감",v:"수백만 원"}],o1=[{k:"PB · 01",title:"곰팡이 대량 번식",body:"검은 곰팡이가 타일 줄눈을 따라 번지며 제거가 점점 어려워집니다."},{k:"PB · 02",title:"물이 벽·바닥 내부로 침투",body:"균열된 줄눈을 통해 물이 내부로 스며들어 구조 손상이 시작됩니다."},{k:"PB · 03",title:"타일 박리 · 탈락",body:"수분 침투로 접착력이 약해지며 타일이 들뜨거나 깨져 나갑니다."},{k:"PB · 04",title:"악취 발생",body:"유기물과 습기가 결합해 욕실 특유의 불쾌한 냄새가 심해집니다."}],d1=[{k:"TM · 01",title:"5년 이상 된 욕실·화장실",body:"시멘트 줄눈의 평균 수명을 넘은 경우 교체 시공을 권장합니다."},{k:"TM · 02",title:"변색·흑화가 눈에 띄는 경우",body:"줄눈이 검게 변했다면 이미 곰팡이가 깊이 침투한 상태일 수 있습니다."},{k:"TM · 03",title:"균열·탈락이 발생한 경우",body:"방치하면 물 침투로 인한 구조 손상으로 이어질 수 있습니다."},{k:"TM · 04",title:"집 매매 · 임대 전후",body:"줄눈 시공만으로도 체감 상태가 크게 달라져 매도·임대에 유리합니다."}],u1=[{idx:"No. 01 · Kerafoxy",href:"/info/kerafoxy",title:"케라폭시 줄눈이란?",desc:"에폭시 계열 고성능 줄눈 소재 케라폭시의 5가지 핵심 장점을 정리했습니다."},{idx:"No. 02 · Pricing",href:"/info/kerafoxy-price",title:"케라폭시 가격 안내",desc:"시공 비용에 영향을 주는 요인과 평형별 표준 가격을 한눈에."},{idx:"No. 03 · Product",href:"/info/kerafoxy-product",title:"케라폭시 계열 제품 소개",desc:"케라폭시·스타라이크·푸가리테 등 주요 제품 라인업과 색상 가이드."},{idx:"No. 04 · Compare",href:"/info/comparison",title:"폴리우레아 vs 케라폭시",desc:"두 소재의 차이점과, 어떤 공간에 어떤 소재가 적합한지."}];function Cr({num:s,ko:u,en:c,title:d,lede:p,dark:m}){return n.jsxs("div",{className:`wg-sec-head ${m?"wg-sec-head-dark":""}`,children:[n.jsxs("div",{className:"wg-sec-bar",children:[n.jsx("span",{className:"wg-sec-n",children:s}),n.jsx("span",{className:"wg-sec-rule"}),n.jsxs("span",{className:"wg-sec-lbl",children:[n.jsx("span",{className:"wg-sec-ko",children:u}),n.jsx("span",{className:"wg-sec-en",children:c})]})]}),n.jsxs("div",{className:"wg-sec-body",children:[n.jsx("h2",{className:"wg-sec-title",children:d}),p&&n.jsx("p",{className:"wg-sec-lede",children:p})]})]})}function p1(){const s=Ba();rl(),k.useEffect(()=>{window.scrollTo(0,0)},[]);const u=()=>{s("/#calc"),setTimeout(()=>{const c=document.querySelector("#calc");c&&c.scrollIntoView({behavior:"smooth"})},300)};return n.jsxs("div",{className:"wg-page",children:[n.jsx(nl,{}),n.jsxs("header",{className:"wg-hero","data-screen-label":"Hero",children:[n.jsx("div",{className:"wg-hero-bg","aria-hidden":"true"}),n.jsxs("div",{className:"wg-container wg-hero-inner",children:[n.jsx("div",{className:"wg-eyebrow wg-eyebrow-light",children:"Grout Knowledge · 05"}),n.jsxs("h1",{className:"wg-hero-title",children:["줄눈시공",n.jsx("em",{children:","}),n.jsx("br",{}),"선택이 아닌 ",n.jsx("em",{children:"필수"}),"인 이유."]}),n.jsxs("p",{className:"wg-hero-lede",children:["위생 · 미관 · 방수 · 비용 절감.",n.jsx("br",{}),"줄눈 하나만 바꿔도 공간의 수명이 크게 달라집니다."]}),n.jsx("ul",{className:"wg-hero-meta",children:s1.map(c=>n.jsxs("li",{children:[n.jsx("span",{className:"wg-meta-k",children:c.k}),n.jsxs("span",{className:"wg-meta-v",children:[c.v," ",n.jsx("small",{children:c.small})]})]},c.k))})]})]}),n.jsx("nav",{className:"wg-crumb","aria-label":"현재 위치",children:n.jsxs("div",{className:"wg-container wg-crumb-inner",children:[n.jsx(Je,{to:"/",className:"wg-crumb-item",children:"홈"}),n.jsx("span",{className:"wg-crumb-sep",children:"/"}),n.jsx("span",{className:"wg-crumb-item",children:"줄눈 정보"}),n.jsx("span",{className:"wg-crumb-sep",children:"/"}),n.jsx("span",{className:"wg-crumb-here",children:"줄눈시공 하는 이유"})]})}),n.jsx("section",{className:"wg-section","data-screen-label":"Intro",children:n.jsx("div",{className:"wg-container",children:n.jsxs("div",{className:"wg-intro-grid",children:[n.jsxs("h2",{className:"wg-intro-title",children:["줄눈시공은",n.jsx("br",{}),"선택이 아니라 ",n.jsx("em",{children:"필수"}),"입니다."]}),n.jsxs("div",{className:"wg-intro-body",children:[n.jsxs("p",{children:["많은 분들이 줄눈을 단순한 타일 사이 채움재로 생각하지만, 실제로는"," ",n.jsx("b",{children:"방수 · 위생 · 구조 보호"}),"를 담당하는 핵심 요소입니다. 줄눈이 낡으면 눈에 보이는 미관 문제를 넘어, 심각한 주거 환경 문제로 이어집니다."]}),n.jsxs("p",{children:["특히 매일 물을 사용하는 욕실·화장실·주방에서 ",n.jsx("b",{children:"줄눈시공"}),"은 가장 효과적인 유지보수 방법 중 하나입니다. 작은 투자로 공간 수명을 크게 연장할 수 있습니다."]})]})]})})}),n.jsx("section",{className:"wg-section wg-bg-paper","data-screen-label":"01 Reasons",children:n.jsxs("div",{className:"wg-container",children:[n.jsx(Cr,{num:"01",ko:"줄눈시공을 해야 하는 이유",en:"4 Reasons",title:n.jsxs(n.Fragment,{children:["네 가지 이유로,",n.jsx("br",{}),n.jsx("em",{children:"지금"})," 시공해야 합니다."]}),lede:"위생 · 미관 · 방수 · 비용. 줄눈시공이 만들어내는 효과를 한 줄씩 짚어봅니다."}),n.jsx("ul",{className:"wg-reasons",children:c1.map(c=>n.jsxs("li",{className:"wg-r-row",children:[n.jsx("span",{className:"wg-r-n",children:c.n}),n.jsxs("div",{className:"wg-r-text",children:[n.jsx("h3",{className:"wg-r-title",children:c.title}),n.jsx("p",{className:"wg-r-body",children:c.body})]}),n.jsxs("div",{className:"wg-r-spec",children:[n.jsx("span",{className:"wg-r-k",children:c.k}),n.jsx("span",{className:"wg-r-v",children:c.v})]})]},c.n))})]})}),n.jsx("section",{className:"wg-section-dark","data-screen-label":"02 Problems",children:n.jsxs("div",{className:"wg-container",children:[n.jsx(Cr,{dark:!0,num:"02",ko:"줄눈시공을 미루면 생기는 문제",en:"What Happens",title:n.jsxs(n.Fragment,{children:["작은 균열이,",n.jsx("br",{}),n.jsx("em",{children:"큰 손상"}),"으로 이어집니다."]}),lede:"줄눈 노후를 방치하면 단순한 미관 문제를 넘어 주거 구조 자체에 영향을 줍니다."}),n.jsx("div",{className:"wg-prob-grid",children:o1.map(c=>n.jsxs("article",{className:"wg-prob-card",children:[n.jsx("span",{className:"wg-prob-k",children:c.k}),n.jsx("h3",{className:"wg-prob-title",children:c.title}),n.jsx("p",{className:"wg-prob-body",children:c.body})]},c.k))})]})}),n.jsx("section",{className:"wg-section","data-screen-label":"03 Timing",children:n.jsxs("div",{className:"wg-container",children:[n.jsx(Cr,{num:"03",ko:"줄눈시공이 필요한 시점",en:"When to Start",title:n.jsxs(n.Fragment,{children:["이런 상황이라면,",n.jsx("br",{}),n.jsx("em",{children:"지금"})," 점검해 보세요."]}),lede:"아래 중 하나라도 해당된다면 줄눈 상태를 한 번 확인해볼 시점입니다."}),n.jsx("div",{className:"wg-timing-grid",children:d1.map(c=>n.jsxs("article",{className:"wg-timing-card",children:[n.jsx("span",{className:"wg-timing-k",children:c.k}),n.jsx("h3",{className:"wg-timing-title",children:c.title}),n.jsx("p",{className:"wg-timing-body",children:c.body})]},c.k))})]})}),n.jsx("section",{className:"wg-section wg-bg-paper","data-screen-label":"04 Related",children:n.jsxs("div",{className:"wg-container",children:[n.jsx(Cr,{num:"04",ko:"관련 정보 더 보기",en:"Related",title:n.jsxs(n.Fragment,{children:["줄눈에 대해 알아야 할, 다른 ",n.jsx("em",{children:"네 가지"}),"."]}),lede:"자재 · 가격 · 제품 · 비교 — 네 가지 관점으로 줄눈을 더 깊이 살펴보세요."}),n.jsx("div",{className:"wg-related-grid",children:u1.map(c=>n.jsxs(Je,{to:c.href,className:"wg-related-card",children:[n.jsx("span",{className:"wg-related-idx",children:c.idx}),n.jsx("h4",{className:"wg-related-title",children:c.title}),n.jsx("p",{className:"wg-related-desc",children:c.desc}),n.jsxs("span",{className:"wg-related-more",children:["more ",n.jsx("span",{className:"wg-related-arr",children:"→"})]})]},c.href))})]})}),n.jsx("section",{className:"wg-cta-band","data-screen-label":"CTA Band",children:n.jsxs("div",{className:"wg-container wg-cta-row",children:[n.jsxs("div",{className:"wg-cta-text",children:[n.jsxs("h3",{className:"wg-cta-title",children:["지금 우리 집 줄눈이 ",n.jsx("em",{children:"괜찮은지"})," 점검받아 보세요."]}),n.jsx("p",{className:"wg-cta-sub",children:"사진 한 장만 보내주시면 현재 상태와 시공 필요 여부를 안내해 드립니다. 강남구·서초구·송파구 욕실·베란다·현관 줄눈 무료 견적."})]}),n.jsxs("div",{className:"wg-cta-actions",children:[n.jsxs("button",{type:"button",className:"wg-btn wg-btn-primary",onClick:u,children:["무료 견적 받기 ",n.jsx("span",{className:"wg-btn-arr",children:"→"})]}),n.jsx("a",{href:"tel:010-8005-6674",onClick:()=>ut.phoneClick("info_cta"),className:"wg-btn wg-btn-ghost",children:"전화 상담 010-8005-6674"})]})]})}),n.jsx(il,{}),n.jsx("style",{children:f1})]})}const f1=`
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
`,m1=[{title:"1. 개인정보의 처리 목적",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:'디테일라인(이하 "회사")은 다음의 목적을 위하여 개인정보를 처리하며, 다음의 목적 이외의 용도로는 이용하지 않습니다.'}),n.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[n.jsx("li",{children:"견적 상담 및 방문 일정 조율"}),n.jsx("li",{children:"시공 서비스 안내, 견적 회신, 후속 응대"}),n.jsx("li",{children:"본인 확인 및 부정 이용 방지"})]})]})},{title:"2. 수집하는 개인정보 항목",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"회사는 무료 견적 상담 신청 시 다음의 개인정보를 수집합니다."}),n.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[n.jsxs("li",{children:[n.jsx("strong",{children:"필수 항목"}),": 이름, 연락처(휴대전화), 시공 위치(주소), 희망 시공 일정, 시공 공간(현관/화장실/베란다 등)"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"선택 항목"}),": 이메일, 상세 시공 내역(요청 사항)"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"자동 수집"}),": 접속 일시(상담 신청 시각)"]})]})]})},{title:"3. 개인정보의 보유 및 이용 기간",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"수집된 개인정보는 상담 완료 후 즉시 폐기하는 것을 원칙으로 합니다."}),n.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[n.jsx("li",{children:"상담 완료(견적 회신 또는 거절 의사 확인) 후 지체 없이 파기"}),n.jsx("li",{children:"다만, 시공 계약이 체결된 경우에는 「전자상거래 등에서의 소비자보호에 관한 법률」 등 관계 법령에 따라 거래 기록을 5년간 보관할 수 있습니다."})]})]})},{title:"4. 개인정보의 제3자 제공 및 처리 위탁",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"회사는 정보주체의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 견적 신청서 접수 처리를 위해 다음의 클라우드 서비스를 이용합니다."}),n.jsx("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:n.jsxs("li",{children:[n.jsx("strong",{children:"Google LLC (Google Workspace · Apps Script)"})," — 견적 신청 데이터 저장 및 처리. 데이터 처리 위치: 미국"]})}),n.jsx("p",{className:"mt-3 text-[var(--muted)] text-sm",children:"위 위탁업체는 Google이 제공하는 표준 데이터 보호 약관에 따라 운영되며, 회사는 위탁 처리 과정을 정기적으로 점검합니다."})]})},{title:"5. 개인정보의 파기 절차 및 방법",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"회사는 보유 기간이 경과하거나 처리 목적이 달성된 개인정보를 다음의 절차와 방법에 따라 지체 없이 파기합니다."}),n.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[n.jsxs("li",{children:[n.jsx("strong",{children:"파기 절차"}),": 상담 완료 시점에 자동/수동으로 식별, 즉시 파기 처리"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"전자적 파일"}),": 복원이 불가능한 방법으로 영구 삭제"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"출력물"}),": 분쇄 또는 소각"]})]})]})},{title:"6. 정보주체의 권리·의무 및 행사 방법",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"정보주체는 회사에 대해 언제든지 다음의 권리를 행사할 수 있습니다."}),n.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[n.jsx("li",{children:"개인정보 열람 요구"}),n.jsx("li",{children:"오류 등이 있을 경우 정정 요구"}),n.jsx("li",{children:"삭제 요구"}),n.jsx("li",{children:"처리 정지 요구"})]}),n.jsx("p",{className:"mt-3",children:"위 권리 행사는 아래 연락처를 통해 요청하실 수 있으며, 회사는 지체 없이 조치합니다."})]})},{title:"7. 개인정보의 안전성 확보 조치",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"회사는 개인정보 보호를 위해 다음의 조치를 취하고 있습니다."}),n.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[n.jsx("li",{children:"관리적 조치: 개인정보 취급자 최소화, 정기 점검"}),n.jsx("li",{children:"기술적 조치: 전송 구간 HTTPS 암호화, 접근 권한 통제"}),n.jsx("li",{children:"물리적 조치: 자료 보관 장소 출입 통제"})]})]})},{title:"8. 개인정보 보호 책임자",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만 처리 및 피해 구제 등을 위하여 아래와 같이 개인정보 보호 책임자를 지정하고 있습니다."}),n.jsxs("div",{className:"mt-3 p-4 bg-[var(--bg)] rounded-sm text-sm space-y-1",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"상호"}),": 디테일라인"]}),n.jsxs("p",{children:[n.jsx("strong",{children:"사업자등록번호"}),": 609-33-19473"]}),n.jsxs("p",{children:[n.jsx("strong",{children:"주소"}),": 서울 서초구 본마을4길 11 1층 104호"]}),n.jsxs("p",{children:[n.jsx("strong",{children:"연락처"}),": 010-8005-6674"]})]})]})},{title:"9. 권익 침해 구제 방법",body:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"개인정보 침해로 인한 구제가 필요한 경우 아래 기관에 문의하실 수 있습니다."}),n.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-1",children:[n.jsx("li",{children:"개인정보분쟁조정위원회: 1833-6972 (privacy.go.kr)"}),n.jsx("li",{children:"개인정보침해신고센터: 118 (privacy.kisa.or.kr)"}),n.jsx("li",{children:"대검찰청 사이버수사과: 1301 (spo.go.kr)"}),n.jsx("li",{children:"경찰청 사이버수사국: 182 (ecrm.cyber.go.kr)"})]})]})},{title:"10. 개인정보 처리방침의 변경",body:n.jsx(n.Fragment,{children:n.jsx("p",{children:"이 개인정보 처리방침은 2026년 4월 29일부터 적용됩니다. 법령·정책 또는 보안 기술의 변경에 따라 내용이 추가, 삭제 및 수정될 경우 시행 7일 전부터 본 페이지를 통해 공지합니다."})})}];function h1(){return rl(),k.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[]),n.jsxs("div",{className:"min-h-screen bg-[var(--paper)]",children:[n.jsx(nl,{}),n.jsx("main",{className:"pt-28 pb-20 px-6 md:px-12 lg:px-20",children:n.jsxs("div",{className:"max-w-3xl mx-auto",children:[n.jsxs("div",{className:"mb-10",children:[n.jsx("span",{className:"text-[11px] font-medium tracking-[0.16em] text-[var(--accent)] uppercase",children:"Privacy Policy"}),n.jsx("h1",{className:"text-4xl md:text-5xl font-black text-[var(--ink)] mt-2",children:"개인정보 처리방침"}),n.jsx("p",{className:"text-[var(--muted)] mt-3 text-sm",children:"시행일: 2026년 4월 29일"})]}),n.jsx("p",{className:"text-[var(--muted)] leading-relaxed mb-12",children:'디테일라인(이하 "회사")은 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립·공개합니다.'}),n.jsx("div",{className:"space-y-10",children:m1.map(s=>n.jsxs("section",{children:[n.jsx("h2",{className:"text-xl md:text-2xl font-bold text-[var(--ink)] mb-3",children:s.title}),n.jsx("div",{className:"text-[var(--muted)] leading-relaxed text-sm md:text-base",children:s.body})]},s.title))}),n.jsx("div",{className:"mt-16 pt-8 border-t border-[var(--line)] text-center",children:n.jsxs(Je,{to:"/",className:"inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--ink)] transition-colors",children:[n.jsx("i",{className:"ri-arrow-left-line"}),"홈으로 돌아가기"]})})]})}),n.jsx(il,{})]})}const x1=[{path:"/",element:n.jsx(wv,{})},{path:"/privacy",element:n.jsx(h1,{})},{path:"/info/kerafoxy",element:n.jsx(Uv,{})},{path:"/info/kerafoxy-price",element:n.jsx(Zv,{})},{path:"/info/kerafoxy-product",element:n.jsx(t1,{})},{path:"/info/comparison",element:n.jsx(i1,{})},{path:"/info/why-grout",element:n.jsx(p1,{})},{path:"*",element:n.jsx(fb,{})}];let Pm;new Promise(s=>{Pm=s});function g1(){const s=y0(x1),u=Ba();return k.useEffect(()=>{window.REACT_APP_NAVIGATE=u,Pm(window.REACT_APP_NAVIGATE)}),s}function b1(){return n.jsx(lb,{basename:"/",children:n.jsx(g1,{})})}let eh=-1;const $l=s=>{addEventListener("pageshow",u=>{u.persisted&&(eh=u.timeStamp,s(u))},!0)},Qt=(s,u,c,d)=>{let p,m;return g=>{u.value>=0&&(g||d)&&(m=u.value-(p??0),(m||p===void 0)&&(p=u.value,u.delta=m,u.rating=((b,x)=>b>x[1]?"poor":b>x[0]?"needs-improvement":"good")(u.value,c),s(u)))}},qo=s=>{requestAnimationFrame(()=>requestAnimationFrame(s))},Go=()=>{const s=performance.getEntriesByType("navigation")[0];if(s&&s.responseStart>0&&s.responseStart<performance.now())return s},ni=()=>Go()?.activationStart??0,Zt=(s,u=-1)=>{const c=Go();let d="navigate";return eh>=0?d="back-forward-cache":c&&(document.prerendering||ni()>0?d="prerender":document.wasDiscarded?d="restore":c.type&&(d=c.type.replace(/_/g,"-"))),{name:s,value:u,rating:"good",delta:0,entries:[],id:`v5-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,navigationType:d}},So=new WeakMap;function Vo(s,u){return So.get(s)||So.set(s,new u),So.get(s)}class v1{t;i=0;o=[];h(u){if(u.hadRecentInput)return;const c=this.o[0],d=this.o.at(-1);this.i&&c&&d&&u.startTime-d.startTime<1e3&&u.startTime-c.startTime<5e3?(this.i+=u.value,this.o.push(u)):(this.i=u.value,this.o=[u]),this.t?.(u)}}const ii=(s,u,c={})=>{try{if(PerformanceObserver.supportedEntryTypes.includes(s)){const d=new PerformanceObserver(p=>{queueMicrotask(()=>{u(p.getEntries())})});return d.observe({type:s,buffered:!0,...c}),d}}catch{}},Qo=s=>{let u=!1;return()=>{u||(s(),u=!0)}};let Jl=-1;const th=new Set,wm=()=>document.visibilityState!=="hidden"||document.prerendering?1/0:0,Co=s=>{if(document.visibilityState==="hidden"){if(s.type==="visibilitychange")for(const u of th)u();isFinite(Jl)||(Jl=s.type==="visibilitychange"?s.timeStamp:0,removeEventListener("prerenderingchange",Co,!0))}},Qr=()=>{if(Jl<0){const s=ni();Jl=(document.prerendering?void 0:globalThis.performance.getEntriesByType("visibility-state").find(c=>c.name==="hidden"&&c.startTime>=s)?.startTime)??wm(),addEventListener("visibilitychange",Co,!0),addEventListener("prerenderingchange",Co,!0),$l(()=>{setTimeout(()=>{Jl=wm()})})}return{get firstHiddenTime(){return Jl},onHidden(s){th.add(s)}}},Zr=s=>{document.prerendering?addEventListener("prerenderingchange",s,!0):s()},Nm=[1800,3e3],ah=(s,u={})=>{Zr(()=>{const c=Qr();let d,p=Zt("FCP");const m=ii("paint",g=>{for(const b of g)b.name==="first-contentful-paint"&&(m.disconnect(),b.startTime<c.firstHiddenTime&&(p.value=Math.max(b.startTime-ni(),0),p.entries.push(b),d(!0)))});m&&(d=Qt(s,p,Nm,u.reportAllChanges),$l(g=>{p=Zt("FCP"),d=Qt(s,p,Nm,u.reportAllChanges),qo(()=>{p.value=performance.now()-g.timeStamp,d(!0)})}))})},Sm=[.1,.25],y1=(s,u={})=>{const c=Qr();ah(Qo(()=>{let d,p=Zt("CLS",0);const m=Vo(u,v1),g=x=>{for(const h of x)m.h(h);m.i>p.value&&(p.value=m.i,p.entries=m.o,d())},b=ii("layout-shift",g);b&&(d=Qt(s,p,Sm,u.reportAllChanges),c.onHidden(()=>{g(b.takeRecords()),d(!0)}),$l(()=>{m.i=0,p=Zt("CLS",0),d=Qt(s,p,Sm,u.reportAllChanges),qo(d)}),setTimeout(d))}))};let lh=0,Eo=1/0,Mr=0;const j1=s=>{for(const u of s)u.interactionId&&(Eo=Math.min(Eo,u.interactionId),Mr=Math.max(Mr,u.interactionId),lh=Mr?(Mr-Eo)/7+1:0)};let Mo;const Em=()=>Mo?lh:performance.interactionCount??0,k1=()=>{"interactionCount"in performance||Mo||(Mo=ii("event",j1,{durationThreshold:0}))};let zm=0;class w1{l=[];u=new Map;m;p;v(){zm=Em(),this.l.length=0,this.u.clear()}T(){const u=Math.min(this.l.length-1,Math.floor((Em()-zm)/50));return this.l[u]}h(u){if(this.m?.(u),!u.interactionId&&u.entryType!=="first-input")return;const c=this.l.at(-1);let d=this.u.get(u.interactionId);if(d||this.l.length<10||u.duration>c.L){if(d?u.duration>d.L?(d.entries=[u],d.L=u.duration):u.duration===d.L&&u.startTime===d.entries[0].startTime&&d.entries.push(u):(d={id:u.interactionId,entries:[u],L:u.duration},this.u.set(d.id,d),this.l.push(d)),this.l.sort((p,m)=>m.L-p.L),this.l.length>10){const p=this.l.splice(10);for(const m of p)this.u.delete(m.id)}this.p?.(d)}}}const nh=s=>{const u=globalThis.requestIdleCallback||setTimeout,c=globalThis.cancelIdleCallback||clearTimeout;if(document.visibilityState==="hidden")s();else{const d=Qo(s);let p=-1;const m=()=>{c(p),d()};addEventListener("visibilitychange",m,{once:!0,capture:!0}),p=u(()=>{removeEventListener("visibilitychange",m,{capture:!0}),d()})}},Am=[200,500],N1=(s,u={})=>{if(!globalThis.PerformanceEventTiming||!("interactionId"in PerformanceEventTiming.prototype))return;const c=Qr();Zr(()=>{k1();let d,p=Zt("INP");const m=Vo(u,w1),g=x=>{nh(()=>{for(const A of x)m.h(A);const h=m.T();h&&h.L!==p.value&&(p.value=h.L,p.entries=h.entries,d())})},b=ii("event",g,{durationThreshold:u.durationThreshold??40});d=Qt(s,p,Am,u.reportAllChanges),b&&(b.observe({type:"first-input",buffered:!0}),c.onHidden(()=>{g(b.takeRecords()),d(!0)}),$l(()=>{m.v(),p=Zt("INP"),d=Qt(s,p,Am,u.reportAllChanges)}))})};class S1{m;h(u){this.m?.(u)}}const Tm=[2500,4e3],E1=(s,u={})=>{Zr(()=>{const c=Qr();let d,p=Zt("LCP");const m=Vo(u,S1),g=x=>{u.reportAllChanges||(x=x.slice(-1));for(const h of x)m.h(h),h.startTime<c.firstHiddenTime&&(p.value=Math.max(h.startTime-ni(),0),p.entries=[h],d())},b=ii("largest-contentful-paint",g);if(b){d=Qt(s,p,Tm,u.reportAllChanges);const x=Qo(()=>{g(b.takeRecords()),b.disconnect(),d(!0)}),h=A=>{A.isTrusted&&(nh(x),removeEventListener(A.type,h,{capture:!0}))};for(const A of["keydown","click","visibilitychange"])addEventListener(A,h,{capture:!0});$l(A=>{p=Zt("LCP"),d=Qt(s,p,Tm,u.reportAllChanges),qo(()=>{p.value=performance.now()-A.timeStamp,d(!0)})})}})},Rm=[800,1800],Oo=s=>{document.prerendering?Zr(()=>Oo(s)):document.readyState!=="complete"?addEventListener("load",()=>Oo(s),!0):setTimeout(s)},z1=(s,u={})=>{let c=Zt("TTFB"),d=Qt(s,c,Rm,u.reportAllChanges);Oo(()=>{const p=Go();p&&(c.value=Math.max(p.responseStart-ni(),0),c.entries=[p],d(!0),$l(()=>{c=Zt("TTFB",0),d=Qt(s,c,Rm,u.reportAllChanges),d(!0)}))})};function Fn(s){window.gtag?.("event",s.name,{metric_id:s.id,metric_value:s.value,metric_rating:s.rating,value:s.name==="CLS"?Math.round(s.value*1e3):Math.round(s.value),non_interaction:!0})}function A1(){y1(Fn),N1(Fn),E1(Fn),ah(Fn),z1(Fn)}Bg.createRoot(document.getElementById("root")).render(n.jsx(k.StrictMode,{children:n.jsx(b1,{})}));A1();
