import{r as f,I as Y,R as q,g as Q,d as X,m as C,j as n,i as D,a as Z}from"./app-JgkbOcJf.js";import{L as M}from"./Logo1-C0ibpix3.js";function e1(){if(console&&console.warn){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];typeof t[0]=="string"&&(t[0]=`react-i18next:: ${t[0]}`),console.warn(...t)}}const O={};function S(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];typeof t[0]=="string"&&O[t[0]]||(typeof t[0]=="string"&&(O[t[0]]=new Date),e1(...t))}const W=(e,t)=>()=>{if(e.isInitialized)t();else{const s=()=>{setTimeout(()=>{e.off("initialized",s)},0),t()};e.on("initialized",s)}};function H(e,t,s){e.loadNamespaces(t,W(e,s))}function E(e,t,s,r){typeof s=="string"&&(s=[s]),s.forEach(l=>{e.options.ns.indexOf(l)<0&&e.options.ns.push(l)}),e.loadLanguages(t,W(e,r))}function n1(e,t){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=t.languages[0],l=t.options?t.options.fallbackLng:!1,i=t.languages[t.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const d=(p,u)=>{const a=t.services.backendConnector.state[`${p}|${u}`];return a===-1||a===2};return s.bindI18n&&s.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!d(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||d(r,e)&&(!l||d(i,e)))}function t1(e,t){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!t.languages||!t.languages.length?(S("i18n.languages were undefined or empty",t.languages),!0):t.options.ignoreJSONStructure!==void 0?t.hasLoadedNamespace(e,{lng:s.lng,precheck:(l,i)=>{if(s.bindI18n&&s.bindI18n.indexOf("languageChanging")>-1&&l.services.backendConnector.backend&&l.isLanguageChangingTo&&!i(l.isLanguageChangingTo,e))return!1}}):n1(e,t,s)}const s1=(e,t)=>{const s=f.useRef();return f.useEffect(()=>{s.current=e},[e,t]),s.current};function $(e,t,s,r){return e.getFixedT(t,s,r)}function i1(e,t,s,r){return f.useCallback($(e,t,s,r),[e,t,s,r])}function U(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:s}=t,{i18n:r,defaultNS:l}=f.useContext(Y)||{},i=s||r||X();if(i&&!i.reportNamespaces&&(i.reportNamespaces=new q),!i){S("You will need to pass in an i18next instance by using initReactI18next");const g=(v,j)=>typeof j=="string"?j:j&&typeof j=="object"&&typeof j.defaultValue=="string"?j.defaultValue:Array.isArray(v)?v[v.length-1]:v,x=[g,{},!1];return x.t=g,x.i18n={},x.ready=!1,x}i.options.react&&i.options.react.wait!==void 0&&S("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const d={...Q(),...i.options.react,...t},{useSuspense:p,keyPrefix:u}=d;let a=l||i.options&&i.options.defaultNS;a=typeof a=="string"?[a]:a||["translation"],i.reportNamespaces.addUsedNamespaces&&i.reportNamespaces.addUsedNamespaces(a);const m=(i.isInitialized||i.initializedStoreOnce)&&a.every(g=>t1(g,i,d)),_=i1(i,t.lng||null,d.nsMode==="fallback"?a:a[0],u),o=()=>_,c=()=>$(i,t.lng||null,d.nsMode==="fallback"?a:a[0],u),[z,w]=f.useState(o);let y=a.join();t.lng&&(y=`${t.lng}${y}`);const P=s1(y),b=f.useRef(!0);f.useEffect(()=>{const{bindI18n:g,bindI18nStore:x}=d;b.current=!0,!m&&!p&&(t.lng?E(i,t.lng,a,()=>{b.current&&w(c)}):H(i,a,()=>{b.current&&w(c)})),m&&P&&P!==y&&b.current&&w(c);function v(){b.current&&w(c)}return g&&i&&i.on(g,v),x&&i&&i.store.on(x,v),()=>{b.current=!1,g&&i&&g.split(" ").forEach(j=>i.off(j,v)),x&&i&&x.split(" ").forEach(j=>i.store.off(j,v))}},[i,y]),f.useEffect(()=>{b.current&&m&&w(o)},[i,u,m]);const N=[z,i,m];if(N.t=z,N.i18n=i,N.ready=m,m||!m&&!p)return N;throw new Promise(g=>{t.lng?E(i,t.lng,a,()=>g()):H(i,a,()=>g())})}var J={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},I=C.createContext&&C.createContext(J),r1=["attr","size","title"];function c1(e,t){if(e==null)return{};var s=l1(e,t),r,l;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)r=i[l],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}function l1(e,t){if(e==null)return{};var s={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;s[r]=e[r]}return s}function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},k.apply(this,arguments)}function T(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),s.push.apply(s,r)}return s}function L(e){for(var t=1;t<arguments.length;t++){var s=arguments[t]!=null?arguments[t]:{};t%2?T(Object(s),!0).forEach(function(r){o1(e,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):T(Object(s)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))})}return e}function o1(e,t,s){return t=a1(t),t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a1(e){var t=d1(e,"string");return typeof t=="symbol"?t:t+""}function d1(e,t){if(typeof e!="object"||!e)return e;var s=e[Symbol.toPrimitive];if(s!==void 0){var r=s.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function K(e){return e&&e.map((t,s)=>C.createElement(t.tag,L({key:s},t.attr),K(t.child)))}function h(e){return t=>C.createElement(u1,k({attr:L({},e.attr)},t),K(e.child))}function u1(e){var t=s=>{var{attr:r,size:l,title:i}=e,d=c1(e,r1),p=l||s.size||"1em",u;return s.className&&(u=s.className),e.className&&(u=(u?u+" ":"")+e.className),C.createElement("svg",k({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,r,d,{className:u,style:L(L({color:e.color||s.color},s.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),i&&C.createElement("title",null,i),e.children)};return I!==void 0?C.createElement(I.Consumer,null,s=>t(s)):t(J)}function w1(e){return h({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2.3 3.3-9.1 5.3-14.9l2.8 13.4zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4.2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2.2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2.1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z"},child:[]}]})(e)}function f1(e){return h({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function b1(e){return h({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M496 224c-79.59 0-144 64.41-144 144s64.41 144 144 144 144-64.41 144-144-64.41-144-144-144zm64 150.29c0 5.34-4.37 9.71-9.71 9.71h-60.57c-5.34 0-9.71-4.37-9.71-9.71v-76.57c0-5.34 4.37-9.71 9.71-9.71h12.57c5.34 0 9.71 4.37 9.71 9.71V352h38.29c5.34 0 9.71 4.37 9.71 9.71v12.58zM496 192c5.4 0 10.72.33 16 .81V144c0-25.6-22.4-48-48-48h-80V48c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h395.12c28.6-20.09 63.35-32 100.88-32zM320 96H192V64h128v32zm6.82 224H208c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h291.43C327.1 423.96 320 396.82 320 368c0-16.66 2.48-32.72 6.82-48z"},child:[]}]})(e)}function F(e){return h({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"},child:[]}]})(e)}function V(e){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.04 442.66l-99.71-99.69c-4.5-4.5-10.6-7-17-7h-16.3c27.6-35.3 44-79.69 44-127.99C416.03 93.09 322.92 0 208.02 0S0 93.09 0 207.98s93.11 207.98 208.02 207.98c48.3 0 92.71-16.4 128.01-44v16.3c0 6.4 2.5 12.5 7 17l99.71 99.69c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.59.1-33.99zm-297.02-90.7c-79.54 0-144-64.34-144-143.98 0-79.53 64.35-143.98 144-143.98 79.54 0 144 64.34 144 143.98 0 79.53-64.35 143.98-144 143.98zm27.11-152.54l-45.01-13.5c-5.16-1.55-8.77-6.78-8.77-12.73 0-7.27 5.3-13.19 11.8-13.19h28.11c4.56 0 8.96 1.29 12.82 3.72 3.24 2.03 7.36 1.91 10.13-.73l11.75-11.21c3.53-3.37 3.33-9.21-.57-12.14-9.1-6.83-20.08-10.77-31.37-11.35V112c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v16.12c-23.63.63-42.68 20.55-42.68 45.07 0 19.97 12.99 37.81 31.58 43.39l45.01 13.5c5.16 1.55 8.77 6.78 8.77 12.73 0 7.27-5.3 13.19-11.8 13.19h-28.1c-4.56 0-8.96-1.29-12.82-3.72-3.24-2.03-7.36-1.91-10.13.73l-11.75 11.21c-3.53 3.37-3.33 9.21.57 12.14 9.1 6.83 20.08 10.77 31.37 11.35V304c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-16.12c23.63-.63 42.68-20.54 42.68-45.07 0-19.97-12.99-37.81-31.59-43.39z"},child:[]}]})(e)}function h1(e){return h({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function g1(e){return h({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}function m1(e){return h({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 10l-7 -7l-9 9h2v7a2 2 0 0 0 2 2h6"},child:[]},{tag:"path",attr:{d:"M9 21v-6a2 2 0 0 1 2 -2h2c.387 0 .748 .11 1.054 .3"},child:[]},{tag:"path",attr:{d:"M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"},child:[]},{tag:"path",attr:{d:"M19 21v1m0 -8v1"},child:[]}]})(e)}function B(e){return h({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5z"},child:[]},{tag:"path",attr:{d:"M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5z"},child:[]},{tag:"path",attr:{d:"M3 21l2.5 -2.5"},child:[]},{tag:"path",attr:{d:"M18.5 5.5l2.5 -2.5"},child:[]},{tag:"path",attr:{d:"M10 11l-2 2"},child:[]},{tag:"path",attr:{d:"M13 14l-2 2"},child:[]}]})(e)}function R(e){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M402.488 45.148c-29.932 24.474-69.636 42.525-111.175 57.262C335.04 94.3 376.27 83.816 413.135 69.98c-2.7-8.61-6.116-16.916-10.647-24.83zM41 73v135.764c11.918-41.227 23.38-84.748 34.512-126.996L77.82 73H41zm41.518 0l5.884 3.096c27.917 14.682 57.075 28.881 87.127 42.482 2.96-.305 5.913-.62 8.866-.937L169.514 73H82.518zm366.652 1.447c-88.208 40.349-203.608 56.834-319.715 66.387L131.451 151h327.77c-4.066-30.318-7.69-57.252-10.051-76.553zM90.059 97.143C71.419 167.87 51.807 241.39 30.283 302.035l24.479 10.158L88.697 151h24.412l-3.246-16.525-1.947-9.91 10.07-.795c7.394-.584 14.783-1.197 22.164-1.84A1638.49 1638.49 0 0 1 90.06 97.143zM103.303 169L43.092 455h381.605l60.211-286H103.303zM477.27 292.654l-19.336 91.852c9.008-.398 17.683-.77 27.27-1.213-.725-21.697-3.794-54.23-7.934-90.639zM41 325.97v51.594l9.99-47.45L41 325.97z"},child:[]}]})(e)}function A(e){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M225.814 32.316c-3.955-.014-7.922-.01-11.9.007-19.147.089-38.6.592-58.219 1.32l5.676 24.893c20.431-2.31 42.83-4.03 65.227-4.89 12.134-.466 24.194-.712 35.892-.65 35.095.183 66.937 3.13 87.77 11.202l8.908 3.454-3.977 8.685c-29.061 63.485-35.782 124.732-31.228 184.826 2.248-71.318 31.893-134.75 70.81-216.068-52.956-8.8-109.634-12.582-168.959-12.78zm28.034 38.79c-8.74.007-17.65.184-26.559.526-41.672 1.6-83.199 6.49-110.264 12.096 30.233 56.079 54.69 112.287 70.483 167.082a71.934 71.934 0 0 1 5.894.045c4.018.197 7.992.742 11.875 1.59-16.075-51.397-34.385-98.8-57.146-146.131l-5.143-10.694 11.686-2.068c29.356-5.198 59.656-7.21 88.494-7.219 1.922 0 3.84.007 5.748.024 18.324.16 35.984 1.108 52.346 2.535l11.054.965-3.224 10.617c-18.7 61.563-22.363 127.678-11.79 190.582.176.163.354.325.526.49 3.813-1.336 7.38-2.698 10.705-4.154-8.254-67.394-4.597-136.923 26.229-209.201-17.202-4.383-43.425-6.674-72.239-7.034a656.656 656.656 0 0 0-8.675-.05zm144.945 7.385c-30.956 65.556-52.943 118.09-56.547 174.803 20.038-66.802 58.769-126.685 102.904-165.158a602.328 602.328 0 0 0-46.357-9.645zM103.832 97.02c-18.76 3.868-37.086 8.778-54.812 15.562 8.626 7.48 24.22 21.395 43.14 39.889 8.708-8.963 17.589-17.818 26.852-25.87a1067.587 1067.587 0 0 0-15.18-29.581zm142.023 7.482c-13.62-.066-27.562.324-41.554 1.293-1.468 13.682-9.56 26.482-19.225 39.07 15.431 36.469 28.758 73.683 40.756 113.194 18.375 5.42 36.554 11.827 51.28 19.504-5.47-42.458-4.722-85.963 2.38-128.508-12.885-13.31-19.597-28.09-20.135-44.34a621.48 621.48 0 0 0-13.502-.213zm182.018 26.985c-24.73 29.3-46.521 65.997-61.37 105.912 27.264-38.782 60.79-69.032 96.477-90.4a1318.664 1318.664 0 0 0-35.107-15.512zm-300.74 11.959c-14.594 13.188-29.014 29.017-44.031 44.097 32.289 19.191 59.791 41.918 82.226 67.66 1.393-.526 2.8-.999 4.215-1.43-10.498-36.096-24.885-73.033-42.41-110.327zM360.52 268.198c-16.397 19.788-31.834 30.235-53.09 38.57 2.391 9.22-1.16 19.805-9.334 27.901-4.808 4.761-10.85 10.188-19.684 13.715a62.896 62.896 0 0 0 3.9 2.127c12.364 6.17 34.207 4.18 54.5-5.049 20.23-9.2 38.302-25.092 45-41.191 3.357-9.05.96-13.77-4.917-20.692-4.184-4.925-10.295-9.89-16.375-15.38zm-170.079.586c-10.715-.098-21.597 2.994-30.59 9.76-12.79 9.623-22.65 26.784-22.738 55.934v.2l-.01.2c-2.92 61.381 1.6 89.7 10.555 105.065 7.904 13.562 21.05 20.054 40.28 31.994.916-2.406 1.87-5.365 2.765-9.098 2.277-9.499 4.161-22.545 5.355-36.975 2.389-28.858 2.04-63.51-1.955-88.445l-2.111-13.19 13.016 2.995c31.615 7.273 49.7 8.132 60.2 6.28 10.502-1.854 14.061-5.523 20.221-11.624 5.79-5.732 5.682-7.795 4.456-11.021-1.227-3.227-6.149-8.545-14.5-13.633-16.703-10.176-45.085-19.611-71.614-26.647a53.988 53.988 0 0 0-13.33-1.795zm189.1 69.416c-10.013 9.754-22.335 17.761-35.277 23.647-20.983 9.542-44.063 13.907-63.211 7.553-6.76 2.516-10.687 5.407-12.668 7.8-2.718 3.284-2.888 5.7-1.967 9.16.92 3.46 3.665 7.568 7.059 10.524 3.393 2.956 7.426 4.492 8.959 4.564 46.794 2.222 67.046-11.207 92.277-26.783 7.358-4.542 10.174-13.743 9.469-22.931-.353-4.594-1.69-8.911-3.233-11.63a9.009 9.009 0 0 0-1.408-1.904zm-166.187 9.096c2.727 25.068 2.772 54.314.642 80.053-1.247 15.072-3.175 28.779-5.789 39.685-1.137 4.746-2.388 8.954-3.9 12.659l146.697-6.465c-1.656-6.149-3.344-12.324-5.031-18.502a127.004 127.004 0 0 1-17.24 4.424l.044.73-8.316.518c-5.121.614-10.452.953-15.983.992l-83.86 5.21 2.493-11.607c7.947-37.006 8.68-69.589 3.778-105.234a353.433 353.433 0 0 1-13.536-2.463zm31.972 4.684c3.948 31.933 3.473 62.41-2.406 95.2l19.264-1.196a39.44 39.44 0 0 1-6.1-14.778c-1.296-6.88-.575-14.538 3.926-20.87.199-.281.414-.55.627-.821-5.246-4.845-9.628-11.062-11.614-18.524-2.114-7.944-.794-17.67 5.497-25.27 2.079-2.51 4.592-4.776 7.543-6.816-2.61-2.08-4.898-4.285-6.874-6.582-3.064.021-6.345-.093-9.863-.343zm132.666 41.785c-23.456 14.253-49.81 27.876-96.41 25.664a26.402 26.402 0 0 1-4.518-.615c-1.233.553-1.891 1.256-2.382 1.947-.963 1.355-1.532 3.8-.909 7.113 1.248 6.627 7.525 13.889 13.37 14.569 41.385 4.813 69.979-8.726 87.341-24.477 8-7.258 8.068-11.9 6.89-16.951-.59-2.523-1.89-4.969-3.382-7.25zm-6.683 49.062a114.657 114.657 0 0 1-8.547 4.86c1.65 6.051 3.304 12.102 4.937 18.154l19.92-3.572c-5.14-4.387-9.162-8.954-12.39-13.496-1.442-2.029-2.713-4.001-3.92-5.946z"},child:[]}]})(e)}function G(e){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M439 7c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H296c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39L439 7zM72 272H216c13.3 0 24 10.7 24 24V440c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39L73 505c-9.4 9.4-24.6 9.4-33.9 0L7 473c-9.4-9.4-9.4-24.6 0-33.9l87-87L55 313c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8z"},child:[]}]})(e)}function C1(e){return h({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M337.8 5.4C327-1.8 313-1.8 302.2 5.4L166.3 96H48C21.5 96 0 117.5 0 144V464c0 26.5 21.5 48 48 48H320v0H256V416c0-35.3 28.7-64 64-64l.3 0h.5c3.4-37.7 18.7-72.1 42.2-99.1C350.2 260 335.6 264 320 264c-48.6 0-88-39.4-88-88s39.4-88 88-88s88 39.4 88 88c0 18.3-5.6 35.3-15.1 49.4c29-21 64.6-33.4 103.1-33.4c59.5 0 112.1 29.6 144 74.8V144c0-26.5-21.5-48-48-48H473.7L337.8 5.4zM96 192h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V208c0-8.8 7.2-16 16-16zm0 128h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zM320 128c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H336V144c0-8.8-7.2-16-16-16zM640 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-99.3-43.3c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 385.4l60.7-60.7z"},child:[]}]})(e)}const p1=()=>{const{t:e}=U();return n.jsx(n.Fragment,{children:n.jsx("div",{className:"mainfooter",children:n.jsxs("section",{className:"footersection","data-language":D.language,children:[n.jsxs("div",{className:"footersectionelement",children:[n.jsx("img",{src:M,alt:"Logo"}),n.jsx("div",{children:e("company_footer_desc")})]}),n.jsx("div",{className:"footersectionelement",children:n.jsx("h1",{children:e("for_investor")})}),n.jsx("div",{className:"footersectionelement",children:n.jsx("h1",{children:e("for_startups")})}),n.jsx("div",{className:"footersectionelement",children:n.jsx("h1",{children:e("legal_info")})}),n.jsxs("div",{className:"footersectionelement",children:[n.jsx("h1",{children:e("company_info")}),n.jsx("ul",{})]})]})})})},j1=({children:e,isAuthenticated:t,userName:s,changeLanguage:r})=>{const[l,i]=f.useState({investir:!1,espaceProjets:!1}),[d,p]=f.useState({investir:!1,espaceProjets:!1}),[u,a]=f.useState(!1),[m,_]=f.useState(!1),o=()=>a(!u),{t:c}=U();return f.useEffect(()=>{const z=w=>{w.key==="Escape"&&(i({investir:!1,espaceProjets:!1}),_(!1))};return document.addEventListener("keydown",z),()=>document.removeEventListener("keydown",z)},[]),n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"guestmain","data-language":D.language,children:[n.jsxs("div",{className:"lemainmenu",children:[n.jsx("div",{className:"topbar",children:t?n.jsx("div",{className:"loginbtn",onClick:()=>window.open("/dashboard","_self"),children:c("dashboard")}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"loginbtn",onClick:()=>window.open("/login","_self"),children:[n.jsx(B,{style:{fontSize:"20px",marginRight:"8px"}})," ",c("login")]}),n.jsxs("div",{className:"loginbtn2",onClick:()=>window.open("/register","_self"),children:[n.jsx(G,{style:{fontSize:"20px",marginRight:"8px"}})," ",c("register")]})]})}),n.jsxs("div",{className:"guestmainmenu",children:[n.jsxs("div",{className:"guestmenu",children:[n.jsx(Z,{className:"guestmenuicon",href:"/",children:n.jsx(m1,{})}),n.jsx("div",{className:"logohome",onClick:()=>window.open("/","_self"),children:n.jsx("img",{src:M,alt:"Logo"})}),n.jsx("nav",{children:n.jsxs("ul",{children:[n.jsxs("li",{className:"menu-item",children:[n.jsx(F,{})," ",c("incubator")]}),n.jsxs("li",{className:"menu-item",children:[n.jsx(V,{})," ",c("market_research")]}),n.jsxs("li",{className:"menu-item",onMouseEnter:()=>i({...l,investir:!0}),onMouseLeave:()=>i({...l,investir:!1}),children:[n.jsx(A,{})," ",c("invest"),l.investir&&n.jsxs("ul",{className:"submenu",children:[n.jsx("li",{onClick:()=>window.open("/","_self"),children:c("how_it_works")}),n.jsx("li",{onClick:()=>window.open("/register","_self"),children:c("become_investor")}),n.jsx("li",{onClick:()=>window.open("/","_self"),children:c("risks_and_pricing")}),n.jsx("li",{onClick:()=>window.open("/","_self"),children:c("conflicts_of_interest")})]})]}),n.jsxs("li",{className:"menu-item",onMouseEnter:()=>i({...l,espaceProjets:!0}),onMouseLeave:()=>i({...l,espaceProjets:!1}),children:[n.jsx(R,{})," ",c("project_space"),l.espaceProjets&&n.jsxs("ul",{className:"submenu",children:[n.jsx("li",{onClick:()=>window.open("/","_self"),children:c("all_projects")}),n.jsx("li",{onClick:()=>window.open("/","_self"),children:c("real_estate_projects")}),n.jsx("li",{onClick:()=>window.open("/","_self"),children:c("tech_projects")}),n.jsx("li",{onClick:()=>window.open("/","_self"),children:c("sdg_projects")}),n.jsx("li",{onClick:()=>window.open("/","_self"),children:c("submit_project")}),n.jsx("li",{onClick:()=>window.open("/","_self"),children:c("funded_projects")})]})]})]})})]}),n.jsxs("div",{className:"bigmenuphone",children:[n.jsx("div",{className:"guestphonemenu",children:u?n.jsx(h1,{onClick:o}):n.jsx(f1,{onClick:o})}),n.jsx("div",{className:"logohome",onClick:()=>window.open("/","_self"),children:n.jsx("img",{src:M,alt:"Logo"})})]}),u&&n.jsx("div",{className:"guestphonemenubox",children:n.jsx("nav",{children:n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsxs("div",{style:{color:"#fff"},className:"menu-item",onClick:()=>p({...d,investir:!d.investir}),children:[n.jsx(A,{})," ",c("invest")]}),d.investir&&n.jsxs("ul",{className:"submenu",children:[n.jsx("li",{onClick:()=>{o(),window.open("/","_self")},children:c("how_it_works")}),n.jsx("li",{onClick:()=>{o(),window.open("/","_self")},children:c("become_investor")}),n.jsx("li",{onClick:()=>{o(),window.open("/","_self")},children:c("risks_and_pricing")}),n.jsx("li",{onClick:()=>{o(),window.open("/","_self")},children:c("conflicts_of_interest")})]})]}),n.jsxs("li",{children:[n.jsxs("div",{style:{color:"#fff"},className:"menu-item",onClick:()=>p({...d,espaceProjets:!d.espaceProjets}),children:[n.jsx(R,{})," ",c("project_space")]}),d.espaceProjets&&n.jsxs("ul",{className:"submenu",children:[n.jsx("li",{onClick:()=>{o(),window.open("/","_self")},children:c("all_projects")}),n.jsx("li",{onClick:()=>{o(),window.open("/","_self")},children:c("real_estate_projects")}),n.jsx("li",{onClick:()=>{o(),window.open("/","_self")},children:c("tech_projects")}),n.jsx("li",{onClick:()=>{o(),window.open("/","_self")},children:c("sdg_projects")}),n.jsx("li",{onClick:()=>{o(),window.open("/","_self")},children:c("submit_project")}),n.jsx("li",{onClick:()=>{o(),window.open("/","_self")},children:c("funded_projects")})]})]}),n.jsx("li",{children:n.jsxs("div",{style:{color:"#fff"},className:"menu-item",onClick:()=>{o(),window.open("/","_self")},children:[n.jsx(F,{})," ",c("incubator")]})}),n.jsx("li",{children:n.jsxs("div",{style:{color:"#fff"},className:"menu-item",onClick:()=>{o(),window.open("/","_self")},children:[n.jsx(V,{})," ",c("market_research")]})}),t?n.jsxs("li",{children:[n.jsxs("div",{style:{color:"#fff"},className:"menu-item",onClick:()=>_(!m),children:[n.jsx(g1,{})," ",s]}),m&&n.jsxs("ul",{className:"submenu",children:[n.jsx("li",{onClick:()=>{o(),window.open("/profile","_self")},children:c("profile")}),n.jsx("li",{onClick:()=>{o(),window.open("/dashboard","_self")},children:c("dashboard")})]})]}):n.jsxs(n.Fragment,{children:[n.jsx("li",{children:n.jsxs("div",{style:{color:"#005940",backgroundColor:"#ebe8e8f9",padding:"5px",borderRadius:"10px",width:"15%",textAlign:"center",alignContent:"center",justifyContent:"center",display:"flex",alignItems:"center",justifyItems:"center",fontSize:"12px"},className:"menu-item",onClick:()=>{o(),window.open("/login","_self")},children:[n.jsx(B,{})," ",c("login")]})}),n.jsx("li",{children:n.jsxs("div",{style:{color:"#005940",backgroundColor:"#ebe8e8f9",padding:"5px",borderRadius:"10px",width:"20%",textAlign:"center",alignContent:"center",justifyContent:"center",display:"flex",alignItems:"center",justifyItems:"center",fontSize:"12px"},className:"menu-item",onClick:()=>{o(),window.open("/register","_self")},children:[n.jsx(G,{})," ",c("register")]})})]})]})})})]})]}),n.jsx("div",{className:"guestchildren",children:e})]}),n.jsx(p1,{})]})},z1=j1;export{w1 as F,z1 as G,h as a,b1 as b,C1 as c};