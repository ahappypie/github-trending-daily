_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{H0SL:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("cMU6")}])},YFqc:function(e,n,t){e.exports=t("cTJO")},cMU6:function(e,n,t){"use strict";t.r(n),t.d(n,"__N_SSG",(function(){return a}));var r=t("nKUr"),o=t("YFqc"),c=t.n(o);var a=!0;n.default=function(e){var n=e.links;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("h1",{children:["Github Trending Daily. There are ",n.length," files."]}),Object(r.jsx)("ul",{children:n.map((function(e){return Object(r.jsxs)("li",{children:[Object(r.jsx)(c.a,{href:"/trending/".concat(encodeURIComponent(e)),children:Object(r.jsx)("a",{children:e})}),"(",Object(r.jsx)(c.a,{href:"/".concat(encodeURIComponent(e),".json"),children:Object(r.jsx)("a",{children:"raw"})}),")"]},e)}))})]})}},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var c,a=o(t("q1tI")),i=t("elyg"),f=t("nOHt"),u=new Map,s=window.IntersectionObserver,l={};var d=function(e,n){var t=c||(s?c=new s((function(e){e.forEach((function(e){if(u.has(e.target)){var n=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(c.unobserve(e.target),u.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0);return t?(t.observe(e),u.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}u.delete(e)}):function(){}};function p(e,n,t,r){(0,i.isLocalURL)(n)&&(e.prefetch(n,t,r).catch((function(e){0})),l[n+"%"+t]=!0)}var h=function(e){var n=!1!==e.prefetch,t=a.default.useState(),o=r(t,2),c=o[0],u=o[1],h=(0,f.useRouter)(),v=h&&h.pathname||"/",w=a.default.useMemo((function(){var n=(0,i.resolveHref)(v,e.href,!0),t=r(n,2),o=t[0],c=t[1];return{href:o,as:e.as?(0,i.resolveHref)(v,e.as):c||o}}),[v,e.href,e.as]),j=w.href,b=w.as;a.default.useEffect((function(){if(n&&s&&c&&c.tagName&&(0,i.isLocalURL)(j)&&!l[j+"%"+b])return d(c,(function(){p(h,j,b)}))}),[n,c,j,b,h]);var y=e.children,_=e.replace,g=e.shallow,E=e.scroll,O=e.locale;"string"===typeof y&&(y=a.default.createElement("a",null,y));var L=a.Children.only(y),m={ref:function(e){e&&u(e),L&&"object"===typeof L&&L.ref&&("function"===typeof L.ref?L.ref(e):"object"===typeof L.ref&&(L.ref.current=e))},onClick:function(e){L.props&&"function"===typeof L.props.onClick&&L.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,a,f){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(t))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:c,locale:f}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,j,b,_,g,E,O)}};return n&&(m.onMouseEnter=function(e){(0,i.isLocalURL)(j)&&(L.props&&"function"===typeof L.props.onMouseEnter&&L.props.onMouseEnter(e),p(h,j,b,{priority:!0}))}),(e.passHref||"a"===L.type&&!("href"in L.props))&&(m.href=(0,i.addBasePath)((0,i.addLocale)(b,"undefined"!==typeof O?O:h&&h.locale,h&&h.defaultLocale))),a.default.cloneElement(L,m)};n.default=h}},[["H0SL",0,1,2]]]);