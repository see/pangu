(window.webpackJsonp=window.webpackJsonp||[]).push([[31,8,42,100,102],{323:function(t,e,n){"use strict";function r(t=""){return t.toUpperCase()===t}n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));const l=["-","_","/","."];function o(t,e=l){const n=[];let o="",c=r(t[0]),f=e.includes(t[0]);for(const l of t.split("")){const t=e.includes(l);t?(n.push(o),o="",c=!1,f=!0):f||c||!r(l)?(o+=l,c=r(l),f=t):(n.push(o),o=l,c=!0,f=!1)}return o&&n.push(o),n}function c(t){return t?t[0].toUpperCase()+t.substr(1):""}},329:function(t,e,n){"use strict";n.r(e);var r=n(3),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:"1em",height:"1em",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11H4z",fill:"currentColor"}})])}),[],!1,null,null,null);e.default=component.exports},330:function(t,e,n){"use strict";n.r(e);var r=n(3),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col w-full pt-0 xl:flex-row xl:pt-10"},[n("article",{staticClass:"flex-auto order-last min-w-0 mt-0 xl:order-first xl:mt-0"},[t._t("default"),t._v(" "),t.$scopedSlots["prev-next"]?n("div",{staticClass:"px-4 sm:px-6"},[n("hr",{staticClass:"mt-10 mb-8 border-t d-border"}),t._v(" "),t._t("prev-next")],2):t._e()],2),t._v(" "),t._t("toc")],2)}),[],!1,null,null,null);e.default=component.exports},353:function(t,e,n){"use strict";n.r(e);n(26),n(19);var r=n(0),l=n(323),o=Object(r.b)({props:{prev:{type:Object,default:null},next:{type:Object,default:null}},methods:{directory:function(link){var t=link.split("/"),e=t.length>1?t[t.length-2]:"";return e.split("-").map(l.b).join(" ")}}}),c=n(3),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"flex mb-8 flex-col justify-between font-medium leading-7 xs:space-x-2 xs:flex-row"},[n("div",{staticClass:"flex justify-start items-center w-full xs:w-1/2"},[t.prev?n("NuxtLink",{staticClass:"\n        inline-flex\n        items-center\n        justify-start\n        w-full\n        px-4\n        py-2.5\n        truncate\n        border\n        d-border\n        hover:d-border-hover\n        rounded-xl\n        group\n        xs:w-auto\n        hover:d-text-primary\n      ",attrs:{to:t.$contentLocalePath(t.prev.to)}},[n("span",{staticClass:"relative flex flex-col items-end truncate"},[n("span",{staticClass:"mb-1 text-xs leading-tight d-secondary-text"},[t._v("\n          "+t._s(t.directory(t.prev.to))+"\n        ")]),t._v(" "),n("span",{staticClass:"flex items-center w-full leading-tight"},[n("IconArrowLeft",{staticClass:"flex-shrink-0 w-4 h-4 mr-2"}),t._v(" "),n("span",{staticClass:"truncate"},[t._v(t._s(t.prev.title))])],1)])]):t._e()],1),t._v(" "),n("div",{staticClass:"flex justify-end order-first w-full xs:order-last xs:w-1/2"},[t.next?n("NuxtLink",{staticClass:"\n        inline-flex\n        items-center\n        justify-end\n        w-full\n        px-4\n        py-2.5\n        mb-2\n        truncate\n        border\n        d-border\n        hover:d-border-hover\n        rounded-xl\n        group\n        xs:mb-0 xs:w-auto\n        hover:d-text-primary\n      ",attrs:{to:t.$contentLocalePath(t.next.to)}},[n("span",{staticClass:"relative flex flex-col items-start truncate"},[n("span",{staticClass:"mb-1 text-xs leading-tight d-secondary-text"},[t._v(" "+t._s(t.directory(t.next.to))+" ")]),t._v(" "),n("span",{staticClass:"flex items-center w-full leading-tight"},[n("span",{staticClass:"truncate"},[t._v(t._s(t.next.title))]),t._v(" "),n("IconArrowRight",{staticClass:"flex-shrink-0 w-4 h-4 ml-2"})],1)])]):t._e()],1)]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconArrowLeft:n(205).default,IconArrowRight:n(329).default})},356:function(t,e,n){"use strict";n.r(e);var r=n(0),l=Object(r.b)({props:{page:{type:Object,required:!0}}}),o=n(3),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._t("mobile-toc"),t._v(" "),n("div",{staticClass:"px-4 sm:px-6 mt-4 xl:mt-0"},[n("DocusContent",{staticClass:"docus-content",attrs:{document:t.page}})],1)],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DocusContent:n(327).default})},531:function(t,e,n){"use strict";n.r(e);var r=n(7),l=n(4),o=(n(15),n(0)),c=Object(o.b)({props:{page:{type:Object,required:!0}},setup:function(t){var e=Object(o.n)().$docus,n=Object(o.j)(null),c=Object(o.j)(null);return Object(o.o)(Object(l.a)(regeneratorRuntime.mark((function l(){var o,f,d,x;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.getPreviousAndNextLink(t.page);case 2:o=l.sent,f=Object(r.a)(o,2),d=f[0],x=f[1],n.value=d,c.value=x;case 8:case"end":return l.stop()}}),l)})))),{prev:n,next:c}},templateOptions:{aside:!0,fluid:!1}}),f=n(3),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AppPage",{scopedSlots:t._u([{key:"prev-next",fn:function(){return[n("PagePrevNext",{attrs:{prev:t.prev,next:t.next}})]},proxy:!0}])},[n("PageContent",{attrs:{page:t.page}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageContent:n(356).default,PagePrevNext:n(353).default,AppPage:n(330).default})}}]);