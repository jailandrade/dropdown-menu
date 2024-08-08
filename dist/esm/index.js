function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function t(t,r){return function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,u,i=[],c=!0,s=!1;try{if(a=(r=r.call(e)).next,0===t);else for(;!(c=(n=a.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(s)throw o}}return i}}(t,r)||function(t,r){if(t){if("string"==typeof t)return e(t,r);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var n,o={exports:{}},a={};var u,i,c,s={exports:{}};
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */"production"===process.env.NODE_ENV?o.exports=function(){if(n)return a;n=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator,y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function v(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}function g(){}function b(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var _=b.prototype=new g;_.constructor=b,m(_,v.prototype),_.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,S={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function E(t,r,n){var o,a={},u=null,i=null;if(null!=r)for(o in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(u=""+r.key),r)k.call(r,o)&&!C.hasOwnProperty(o)&&(a[o]=r[o]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var s=Array(c),l=0;l<c;l++)s[l]=arguments[l+2];a.children=s}if(t&&t.defaultProps)for(o in c=t.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:e,type:t,key:u,ref:i,props:a,_owner:S.current}}function O(t){return"object"==typeof t&&null!==t&&t.$$typeof===e}var R=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function j(r,n,o,a,u){var i=typeof r;"undefined"!==i&&"boolean"!==i||(r=null);var c=!1;if(null===r)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(r.$$typeof){case e:case t:c=!0}}if(c)return u=u(c=r),r=""===a?"."+x(c,0):a,w(u)?(o="",null!=r&&(o=r.replace(R,"$&/")+"/"),j(u,n,o,"",(function(e){return e}))):null!=u&&(O(u)&&(u=function(t,r){return{$$typeof:e,type:t.type,key:r,ref:t.ref,props:t.props,_owner:t._owner}}(u,o+(!u.key||c&&c.key===u.key?"":(""+u.key).replace(R,"$&/")+"/")+r)),n.push(u)),1;if(c=0,a=""===a?".":a+":",w(r))for(var s=0;s<r.length;s++){var l=a+x(i=r[s],s);c+=j(i,n,o,l,u)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(r),"function"==typeof l)for(r=l.call(r),s=0;!(i=r.next()).done;)c+=j(i=i.value,n,o,l=a+x(i,s++),u);else if("object"===i)throw n=String(r),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(r).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}function P(e,t,r){if(null==e)return e;var n=[],o=0;return j(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},I={transition:null},L={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:I,ReactCurrentOwner:S};function N(){throw Error("act(...) is not supported in production builds of React.")}return a.Children={map:P,forEach:function(e,t,r){P(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},a.Component=v,a.Fragment=r,a.Profiler=u,a.PureComponent=b,a.StrictMode=o,a.Suspense=l,a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,a.act=N,a.cloneElement=function(t,r,n){if(null==t)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o=m({},t.props),a=t.key,u=t.ref,i=t._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,i=S.current),void 0!==r.key&&(a=""+r.key),t.type&&t.type.defaultProps)var c=t.type.defaultProps;for(s in r)k.call(r,s)&&!C.hasOwnProperty(s)&&(o[s]=void 0===r[s]&&void 0!==c?c[s]:r[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){c=Array(s);for(var l=0;l<s;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:e,type:t.type,key:a,ref:u,props:o,_owner:i}},a.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},a.createElement=E,a.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},a.createRef=function(){return{current:null}},a.forwardRef=function(e){return{$$typeof:s,render:e}},a.isValidElement=O,a.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:$}},a.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},a.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},a.unstable_act=N,a.useCallback=function(e,t){return T.current.useCallback(e,t)},a.useContext=function(e){return T.current.useContext(e)},a.useDebugValue=function(){},a.useDeferredValue=function(e){return T.current.useDeferredValue(e)},a.useEffect=function(e,t){return T.current.useEffect(e,t)},a.useId=function(){return T.current.useId()},a.useImperativeHandle=function(e,t,r){return T.current.useImperativeHandle(e,t,r)},a.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},a.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},a.useMemo=function(e,t){return T.current.useMemo(e,t)},a.useReducer=function(e,t,r){return T.current.useReducer(e,t,r)},a.useRef=function(e){return T.current.useRef(e)},a.useState=function(e){return T.current.useState(e)},a.useSyncExternalStore=function(e,t,r){return T.current.useSyncExternalStore(e,t,r)},a.useTransition=function(){return T.current.useTransition()},a.version="18.3.1",a}():o.exports=(u||(u=1,i=s,c=s.exports,"production"!==process.env.NODE_ENV&&function(){"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen"),m=Symbol.iterator,h="@@iterator";function v(e){if(null===e||"object"!=typeof e)return null;var t=m&&e[m]||e[h];return"function"==typeof t?t:null}var g={current:null},b={transition:null},_={current:null,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1},w={current:null},k={},S=null;function C(e){S=e}k.setExtraStackFrame=function(e){S=e},k.getCurrentStack=null,k.getStackAddendum=function(){var e="";S&&(e+=S);var t=k.getCurrentStack;return t&&(e+=t()||""),e};var E=!1,O=!1,R=!1,x=!1,j=!1,P={ReactCurrentDispatcher:g,ReactCurrentBatchConfig:b,ReactCurrentOwner:w};function $(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];I("warn",e,r)}function T(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];I("error",e,r)}function I(e,t,r){var n=P.ReactDebugCurrentFrame.getStackAddendum();""!==n&&(t+="%s",r=r.concat([n]));var o=r.map((function(e){return String(e)}));o.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,o)}P.ReactDebugCurrentFrame=k,P.ReactCurrentActQueue=_;var L={};function N(e,t){var r=e.constructor,n=r&&(r.displayName||r.name)||"ReactClass",o=n+"."+t;L[o]||(T("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",t,n),L[o]=!0)}var D={isMounted:function(e){return!1},enqueueForceUpdate:function(e,t,r){N(e,"forceUpdate")},enqueueReplaceState:function(e,t,r,n){N(e,"replaceState")},enqueueSetState:function(e,t,r,n){N(e,"setState")}},A=Object.assign,M={};function F(e,t,r){this.props=e,this.context=t,this.refs=M,this.updater=r||D}Object.freeze(M),F.prototype.isReactComponent={},F.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},F.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};var V={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},U=function(e,t){Object.defineProperty(F.prototype,e,{get:function(){$("%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1])}})};for(var B in V)V.hasOwnProperty(B)&&U(B,V[B]);function z(){}function q(e,t,r){this.props=e,this.context=t,this.refs=M,this.updater=r||D}z.prototype=F.prototype;var Y=q.prototype=new z;Y.constructor=q,A(Y,F.prototype),Y.isPureReactComponent=!0;var H=Array.isArray;function W(e){return H(e)}function K(e){return""+e}function G(e){if(function(e){try{return K(e),!1}catch(e){return!0}}(e))return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",function(e){return"function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}(e)),K(e)}function J(e){return e.displayName||"Context"}function X(e){if(null==e)return null;if("number"==typeof e.tag&&T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case r:return"Fragment";case t:return"Portal";case o:return"Profiler";case n:return"StrictMode";case l:return"Suspense";case f:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case u:return J(e)+".Consumer";case a:return J(e._context)+".Provider";case s:return function(e,t,r){var n=e.displayName;if(n)return n;var o=t.displayName||t.name||"";return""!==o?r+"("+o+")":r}(e,e.render,"ForwardRef");case p:var i=e.displayName||null;return null!==i?i:X(e.type)||"Memo";case d:var c=e,y=c._payload,m=c._init;try{return X(m(y))}catch(e){return null}}return null}var Z,Q,ee,te=Object.prototype.hasOwnProperty,re={key:!0,ref:!0,__self:!0,__source:!0};function ne(e){if(te.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}function oe(e){if(te.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}ee={};var ae=function(t,r,n,o,a,u,i){var c={$$typeof:e,type:t,key:r,ref:n,props:i,_owner:u,_store:{}};return Object.defineProperty(c._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(c,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(c,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(c.props),Object.freeze(c)),c};function ue(e,t,r){var n,o={},a=null,u=null,i=null,c=null;if(null!=t)for(n in ne(t)&&(u=t.ref,function(e){if("string"==typeof e.ref&&w.current&&e.__self&&w.current.stateNode!==e.__self){var t=X(w.current.type);ee[t]||(T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',t,e.ref),ee[t]=!0)}}(t)),oe(t)&&(G(t.key),a=""+t.key),i=void 0===t.__self?null:t.__self,c=void 0===t.__source?null:t.__source,t)te.call(t,n)&&!re.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(1===s)o.children=r;else if(s>1){for(var l=Array(s),f=0;f<s;f++)l[f]=arguments[f+2];Object.freeze&&Object.freeze(l),o.children=l}if(e&&e.defaultProps){var p=e.defaultProps;for(n in p)void 0===o[n]&&(o[n]=p[n])}if(a||u){var d="function"==typeof e?e.displayName||e.name||"Unknown":e;a&&function(e,t){var r=function(){Z||(Z=!0,T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0})}(o,d),u&&function(e,t){var r=function(){Q||(Q=!0,T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"ref",{get:r,configurable:!0})}(o,d)}return ae(e,a,u,i,c,w.current,o)}function ie(e,t,r){if(null==e)throw new Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n,o,a=A({},e.props),u=e.key,i=e.ref,c=e._self,s=e._source,l=e._owner;if(null!=t)for(n in ne(t)&&(i=t.ref,l=w.current),oe(t)&&(G(t.key),u=""+t.key),e.type&&e.type.defaultProps&&(o=e.type.defaultProps),t)te.call(t,n)&&!re.hasOwnProperty(n)&&(void 0===t[n]&&void 0!==o?a[n]=o[n]:a[n]=t[n]);var f=arguments.length-2;if(1===f)a.children=r;else if(f>1){for(var p=Array(f),d=0;d<f;d++)p[d]=arguments[d+2];a.children=p}return ae(e.type,u,i,c,s,l,a)}function ce(t){return"object"==typeof t&&null!==t&&t.$$typeof===e}var se=".",le=":",fe=!1,pe=/\/+/g;function de(e){return e.replace(pe,"$&/")}function ye(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(G(e.key),r=""+e.key,n={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,(function(e){return n[e]}))):t.toString(36);var r,n}function me(r,n,o,a,u){var i=typeof r;"undefined"!==i&&"boolean"!==i||(r=null);var c,s,l,f=!1;if(null===r)f=!0;else switch(i){case"string":case"number":f=!0;break;case"object":switch(r.$$typeof){case e:case t:f=!0}}if(f){var p=r,d=u(p),y=""===a?se+ye(p,0):a;if(W(d)){var m="";null!=y&&(m=de(y)+"/"),me(d,n,m,"",(function(e){return e}))}else null!=d&&(ce(d)&&(!d.key||p&&p.key===d.key||G(d.key),c=d,s=o+(!d.key||p&&p.key===d.key?"":de(""+d.key)+"/")+y,d=ae(c.type,s,c.ref,c._self,c._source,c._owner,c.props)),n.push(d));return 1}var h=0,g=""===a?se:a+le;if(W(r))for(var b=0;b<r.length;b++)h+=me(l=r[b],n,o,g+ye(l,b),u);else{var _=v(r);if("function"==typeof _){var w=r;_===w.entries&&(fe||$("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),fe=!0);for(var k,S=_.call(w),C=0;!(k=S.next()).done;)h+=me(l=k.value,n,o,g+ye(l,C++),u)}else if("object"===i){var E=String(r);throw new Error("Objects are not valid as a React child (found: "+("[object Object]"===E?"object with keys {"+Object.keys(r).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}}return h}function he(e,t,r){if(null==e)return e;var n=[],o=0;return me(e,n,"","",(function(e){return t.call(r,e,o++)})),n}var ve,ge=-1,be=0,_e=1,we=2;function ke(e){if(e._status===ge){var t=(0,e._result)();if(t.then((function(t){if(e._status===be||e._status===ge){var r=e;r._status=_e,r._result=t}}),(function(t){if(e._status===be||e._status===ge){var r=e;r._status=we,r._result=t}})),e._status===ge){var r=e;r._status=be,r._result=t}}if(e._status===_e){var n=e._result;return void 0===n&&T("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",n),"default"in n||T("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",n),n.default}throw e._result}function Se(e){return"string"==typeof e||"function"==typeof e||!!(e===r||e===o||j||e===n||e===l||e===f||x||e===y||E||O||R)||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===p||e.$$typeof===a||e.$$typeof===u||e.$$typeof===s||e.$$typeof===ve||void 0!==e.getModuleId)}function Ce(){var e=g.current;return null===e&&T("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem."),e}ve=Symbol.for("react.module.reference");var Ee,Oe,Re,xe,je,Pe,$e,Te=0;function Ie(){}Ie.__reactDisabledLog=!0;var Le,Ne=P.ReactCurrentDispatcher;function De(e,t,r){if(void 0===Le)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);Le=n&&n[1]||""}return"\n"+Le+e}var Ae,Me=!1,Fe="function"==typeof WeakMap?WeakMap:Map;function Ve(e,t){if(!e||Me)return"";var r,n=Ae.get(e);if(void 0!==n)return n;Me=!0;var o,a=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=Ne.current,Ne.current=null,function(){if(0===Te){Ee=console.log,Oe=console.info,Re=console.warn,xe=console.error,je=console.group,Pe=console.groupCollapsed,$e=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Ie,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}Te++}();try{if(t){var u=function(){throw Error()};if(Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(u,[])}catch(e){r=e}Reflect.construct(e,[],u)}else{try{u.call()}catch(e){r=e}e.call(u.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var i=t.stack.split("\n"),c=r.stack.split("\n"),s=i.length-1,l=c.length-1;s>=1&&l>=0&&i[s]!==c[l];)l--;for(;s>=1&&l>=0;s--,l--)if(i[s]!==c[l]){if(1!==s||1!==l)do{if(s--,--l<0||i[s]!==c[l]){var f="\n"+i[s].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),"function"==typeof e&&Ae.set(e,f),f}}while(s>=1&&l>=0);break}}}finally{Me=!1,Ne.current=o,function(){if(0==--Te){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:A({},e,{value:Ee}),info:A({},e,{value:Oe}),warn:A({},e,{value:Re}),error:A({},e,{value:xe}),group:A({},e,{value:je}),groupCollapsed:A({},e,{value:Pe}),groupEnd:A({},e,{value:$e})})}Te<0&&T("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=a}var p=e?e.displayName||e.name:"",d=p?De(p):"";return"function"==typeof e&&Ae.set(e,d),d}function Ue(e,t,r){if(null==e)return"";if("function"==typeof e)return Ve(e,function(e){var t=e.prototype;return!(!t||!t.isReactComponent)}(e));if("string"==typeof e)return De(e);switch(e){case l:return De("Suspense");case f:return De("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case s:return Ve(e.render,!1);case p:return Ue(e.type,t,r);case d:var n=e,o=n._payload,a=n._init;try{return Ue(a(o),t,r)}catch(e){}}return""}Ae=new Fe;var Be,ze={},qe=P.ReactDebugCurrentFrame;function Ye(e){if(e){var t=e._owner,r=Ue(e.type,e._source,t?t.type:null);qe.setExtraStackFrame(r)}else qe.setExtraStackFrame(null)}function He(e){if(e){var t=e._owner;C(Ue(e.type,e._source,t?t.type:null))}else C(null)}function We(){if(w.current){var e=X(w.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}Be=!1;var Ke={};function Ge(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var r=function(e){var t=We();if(!t){var r="string"==typeof e?e:e.displayName||e.name;r&&(t="\n\nCheck the top-level render call using <"+r+">.")}return t}(t);if(!Ke[r]){Ke[r]=!0;var n="";e&&e._owner&&e._owner!==w.current&&(n=" It was passed a child from "+X(e._owner.type)+"."),He(e),T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',r,n),He(null)}}}function Je(e,t){if("object"==typeof e)if(W(e))for(var r=0;r<e.length;r++){var n=e[r];ce(n)&&Ge(n,t)}else if(ce(e))e._store&&(e._store.validated=!0);else if(e){var o=v(e);if("function"==typeof o&&o!==e.entries)for(var a,u=o.call(e);!(a=u.next()).done;)ce(a.value)&&Ge(a.value,t)}}function Xe(e){var t,r=e.type;if(null!=r&&"string"!=typeof r){if("function"==typeof r)t=r.propTypes;else{if("object"!=typeof r||r.$$typeof!==s&&r.$$typeof!==p)return;t=r.propTypes}if(t){var n=X(r);!function(e,t,r,n,o){var a=Function.call.bind(te);for(var u in e)if(a(e,u)){var i=void 0;try{if("function"!=typeof e[u]){var c=Error((n||"React class")+": "+r+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw c.name="Invariant Violation",c}i=e[u](t,u,n,r,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){i=e}!i||i instanceof Error||(Ye(o),T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",r,u,typeof i),Ye(null)),i instanceof Error&&!(i.message in ze)&&(ze[i.message]=!0,Ye(o),T("Failed %s type: %s",r,i.message),Ye(null))}}(t,e.props,"prop",n,e)}else void 0===r.PropTypes||Be||(Be=!0,T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",X(r)||"Unknown"));"function"!=typeof r.getDefaultProps||r.getDefaultProps.isReactClassApproved||T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Ze(t,n,o){var a,u,i=Se(t);if(!i){var c,s="";(void 0===t||"object"==typeof t&&null!==t&&0===Object.keys(t).length)&&(s+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),s+=(null!=(a=n)&&void 0!==(u=a.__source)?"\n\nCheck your code at "+u.fileName.replace(/^.*[\\\/]/,"")+":"+u.lineNumber+".":"")||We(),null===t?c="null":W(t)?c="array":void 0!==t&&t.$$typeof===e?(c="<"+(X(t.type)||"Unknown")+" />",s=" Did you accidentally export a JSX literal instead of a component?"):c=typeof t,T("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",c,s)}var l=ue.apply(this,arguments);if(null==l)return l;if(i)for(var f=2;f<arguments.length;f++)Je(arguments[f],t);return t===r?function(e){for(var t=Object.keys(e.props),r=0;r<t.length;r++){var n=t[r];if("children"!==n&&"key"!==n){He(e),T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),He(null);break}}null!==e.ref&&(He(e),T("Invalid attribute `ref` supplied to `React.Fragment`."),He(null))}(l):Xe(l),l}var Qe=!1,et=!1,tt=null,rt=0,nt=!1;function ot(e){var t=rt;rt++,null===_.current&&(_.current=[]);var r,n=_.isBatchingLegacy;try{if(_.isBatchingLegacy=!0,r=e(),!n&&_.didScheduleLegacyUpdate){var o=_.current;null!==o&&(_.didScheduleLegacyUpdate=!1,ct(o))}}catch(e){throw at(t),e}finally{_.isBatchingLegacy=n}if(null!==r&&"object"==typeof r&&"function"==typeof r.then){var a=r,u=!1,i={then:function(e,r){u=!0,a.then((function(n){at(t),0===rt?ut(n,e,r):e(n)}),(function(e){at(t),r(e)}))}};return nt||"undefined"==typeof Promise||Promise.resolve().then((function(){})).then((function(){u||(nt=!0,T("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))})),i}var c=r;if(at(t),0===rt){var s=_.current;return null!==s&&(ct(s),_.current=null),{then:function(e,t){null===_.current?(_.current=[],ut(c,e,t)):e(c)}}}return{then:function(e,t){e(c)}}}function at(e){e!==rt-1&&T("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),rt=e}function ut(e,t,r){var n=_.current;if(null!==n)try{ct(n),function(e){if(null===tt)try{var t=("require"+Math.random()).slice(0,7);tt=(i&&i[t]).call(i,"timers").setImmediate}catch(e){tt=function(e){!1===et&&(et=!0,"undefined"==typeof MessageChannel&&T("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var t=new MessageChannel;t.port1.onmessage=e,t.port2.postMessage(void 0)}}tt(e)}((function(){0===n.length?(_.current=null,t(e)):ut(e,t,r)}))}catch(e){r(e)}else t(e)}var it=!1;function ct(e){if(!it){it=!0;var t=0;try{for(;t<e.length;t++){var r=e[t];do{r=r(!0)}while(null!==r)}e.length=0}catch(r){throw e=e.slice(t+1),r}finally{it=!1}}}var st=Ze,lt=function(e,t,r){for(var n=ie.apply(this,arguments),o=2;o<arguments.length;o++)Je(arguments[o],n.type);return Xe(n),n},ft=function(e){var t=Ze.bind(null,e);return t.type=e,Qe||(Qe=!0,$("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),Object.defineProperty(t,"type",{enumerable:!1,get:function(){return $("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),t},pt={map:he,forEach:function(e,t,r){he(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return he(e,(function(){t++})),t},toArray:function(e){return he(e,(function(e){return e}))||[]},only:function(e){if(!ce(e))throw new Error("React.Children.only expected to receive a single React element child.");return e}};c.Children=pt,c.Component=F,c.Fragment=r,c.Profiler=o,c.PureComponent=q,c.StrictMode=n,c.Suspense=l,c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,c.act=ot,c.cloneElement=lt,c.createContext=function(e){var t={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};t.Provider={$$typeof:a,_context:t};var r=!1,n=!1,o=!1,i={$$typeof:u,_context:t};return Object.defineProperties(i,{Provider:{get:function(){return n||(n=!0,T("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),t.Provider},set:function(e){t.Provider=e}},_currentValue:{get:function(){return t._currentValue},set:function(e){t._currentValue=e}},_currentValue2:{get:function(){return t._currentValue2},set:function(e){t._currentValue2=e}},_threadCount:{get:function(){return t._threadCount},set:function(e){t._threadCount=e}},Consumer:{get:function(){return r||(r=!0,T("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),t.Consumer}},displayName:{get:function(){return t.displayName},set:function(e){o||($("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",e),o=!0)}}}),t.Consumer=i,t._currentRenderer=null,t._currentRenderer2=null,t},c.createElement=st,c.createFactory=ft,c.createRef=function(){var e={current:null};return Object.seal(e),e},c.forwardRef=function(e){null!=e&&e.$$typeof===p?T("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):"function"!=typeof e?T("forwardRef requires a render function but was given %s.",null===e?"null":typeof e):0!==e.length&&2!==e.length&&T("forwardRef render functions accept exactly two parameters: props and ref. %s",1===e.length?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),null!=e&&(null==e.defaultProps&&null==e.propTypes||T("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?"));var t,r={$$typeof:s,render:e};return Object.defineProperty(r,"displayName",{enumerable:!1,configurable:!0,get:function(){return t},set:function(r){t=r,e.name||e.displayName||(e.displayName=r)}}),r},c.isValidElement=ce,c.lazy=function(e){var t,r,n={$$typeof:d,_payload:{_status:ge,_result:e},_init:ke};return Object.defineProperties(n,{defaultProps:{configurable:!0,get:function(){return t},set:function(e){T("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),t=e,Object.defineProperty(n,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return r},set:function(e){T("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),r=e,Object.defineProperty(n,"propTypes",{enumerable:!0})}}}),n},c.memo=function(e,t){Se(e)||T("memo: The first argument must be a component. Instead received: %s",null===e?"null":typeof e);var r,n={$$typeof:p,type:e,compare:void 0===t?null:t};return Object.defineProperty(n,"displayName",{enumerable:!1,configurable:!0,get:function(){return r},set:function(t){r=t,e.name||e.displayName||(e.displayName=t)}}),n},c.startTransition=function(e,t){var r=b.transition;b.transition={};var n=b.transition;b.transition._updatedFibers=new Set;try{e()}finally{b.transition=r,null===r&&n._updatedFibers&&(n._updatedFibers.size>10&&$("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."),n._updatedFibers.clear())}},c.unstable_act=ot,c.useCallback=function(e,t){return Ce().useCallback(e,t)},c.useContext=function(e){var t=Ce();if(void 0!==e._context){var r=e._context;r.Consumer===e?T("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):r.Provider===e&&T("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return t.useContext(e)},c.useDebugValue=function(e,t){return Ce().useDebugValue(e,t)},c.useDeferredValue=function(e){return Ce().useDeferredValue(e)},c.useEffect=function(e,t){return Ce().useEffect(e,t)},c.useId=function(){return Ce().useId()},c.useImperativeHandle=function(e,t,r){return Ce().useImperativeHandle(e,t,r)},c.useInsertionEffect=function(e,t){return Ce().useInsertionEffect(e,t)},c.useLayoutEffect=function(e,t){return Ce().useLayoutEffect(e,t)},c.useMemo=function(e,t){return Ce().useMemo(e,t)},c.useReducer=function(e,t,r){return Ce().useReducer(e,t,r)},c.useRef=function(e){return Ce().useRef(e)},c.useState=function(e){return Ce().useState(e)},c.useSyncExternalStore=function(e,t,r){return Ce().useSyncExternalStore(e,t,r)},c.useTransition=function(){return Ce().useTransition()},c.version="18.3.1","undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)}()),s.exports);var l=o.exports,f=r(l);function p(e){var t=e.label,r=e.onClick,n=e.classes;return f.createElement("span",{className:"text-sm text-gray-250 "+n,onClick:r},t)}function d(e){var r=e.legend,n=e.options,o=e.match,a=t(l.useState(!1),2),u=a[0],i=a[1],c=t(l.useState(""),2),s=c[0],d=c[1],y=t(l.useState([]),2),m=y[0],h=y[1],v=t(l.useState([]),2),g=v[0],b=v[1];l.useEffect((function(){if(n.length>0){var e=n.sort((function(e,t){return e.localeCompare(t)}));h(e)}}),[n]);var _=function(e){var t=e.option,r=e.index;return f.createElement("div",{key:r,className:"flex flex-row p-2 cursor-pointer hover:font-bold relative",onClick:function(){return function(e){if(o.length>0&&e!==o)setTimeout((function(){i(!1)}),[400]);else{d(e);var t=n.filter((function(t){return t!==e}));t.unshift(e),h(t),setTimeout((function(){i(!1)}),[400])}}(t)}},f.createElement("img",{src:"data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M3.41402 11.8692C4.76844 11.1036 6.3332 10.6667 8 10.6667C9.6668 10.6667 11.2316 11.1036 12.586 11.8692M10 6.66667C10 7.77124 9.10457 8.66667 8 8.66667C6.89543 8.66667 6 7.77124 6 6.66667C6 5.5621 6.89543 4.66667 8 4.66667C9.10457 4.66667 10 5.5621 10 6.66667ZM14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z' stroke='%236B7280' stroke-width='1.33333' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e",className:"mr-2",alt:"Icono de Usuario"}),f.createElement(p,{label:t,classes:s===t?"text-primary-400 font-bold":"text-primary-400"}),s===t?f.createElement("img",{src:"data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M3.33337 8.66666L6.00004 11.3333L12.6667 4.66666' stroke='%230E7490' stroke-width='1.33333' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e",className:"absolute top-2 right-4",alt:"Icono de Check"}):null)};return f.createElement(f.Fragment,null,f.createElement("div",{className:"rounded-lg border border-solid border-gray-150 relative hover:shadow-md w-full"},f.createElement("div",{className:"py-2 px-4 flex flex-row cursor-pointer relative"},!s&&f.createElement(f.Fragment,null,f.createElement(p,{label:r,classes:u?"absolute bottom-8 left-2 bg-white p-1":"p-0",onClick:function(){return i(!u)}})),u&&!s&&f.createElement("input",{type:"search",className:"inline-block px-2 w-11/12 border border-solid border-gray-150",onKeyDown:function(e){return t=e.target.value,r=m.filter((function(e){return e.startsWith(t)})),void b(r);var t,r}}),s&&f.createElement(f.Fragment,null,f.createElement(p,{label:s,onClick:function(){return i(!u)},classes:""}),f.createElement(p,{label:"x",onClick:function(){return d("")},classes:"text-gray-500 cursor-pointer ml-3"})),f.createElement("button",{id:"menu-button",type:"button","aria-expanded":"true","aria-haspopup":"true",className:"absolute top-2 right-5",onClick:function(){return i(!u)}},u?f.createElement("img",{src:"data:image/svg+xml,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4.16665 12.5L9.99998 6.66667L15.8333 12.5' stroke='black' stroke-width='1.66667' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e",alt:"Icono de mostrar menu"}):f.createElement("img",{src:"data:image/svg+xml,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M15.8333 7.50001L10 13.3333L4.16666 7.50001' stroke='%236B7280' stroke-width='1.66667' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e",alt:"Icono de colapsar menú"}))),u&&f.createElement("div",{role:"menu","aria-labelledby":"menu-button",tabIndex:"-1",className:"absolute bg-white top-12 left-0 right-0 flex flex-col p-2 border border-solid rounded-lg border-gray-150 hover:shadow-md"},g.length>0?null==g?void 0:g.map((function(e,t){return f.createElement(_,{option:e,key:t})})):null==m?void 0:m.map((function(e,t){return f.createElement(_,{option:e,key:t})})))),o&&f.createElement(p,{label:"Solo podrás elegir a ".concat(o," para continuar"),classes:"text-xs mt-1 text-gray-250"}))}export{d as DropdownMenu,p as Label};
