webpackJsonp([17],{0:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}n(306);var r=n(4),u=a(r),l=n(7),o=n(2),c=a(o),i=n(137),s=n(669),f=n(1016),d=a(f),m=n(1017),p=a(m),v=n(1018),y=a(v),E=n(1020),h=a(E),g=n(1021),_=a(g),b=n(1022),w=a(b);i.actions.loadUserStatus();var P=[{container:"nav-cart-app",component:u.default.createElement(d.default,null)},{container:"nav-cart-app-mobile",component:u.default.createElement(d.default,null)},{container:"locale-link-wrapper",component:u.default.createElement(p.default,null)},{container:"nav-account-app",component:u.default.createElement(y.default,null)},{container:"notifications-app",component:u.default.createElement(h.default,null)}];P.forEach(function(e){var t=e.container,n=e.component,a=c.default.getElementById(t);a&&(0,l.render)(u.default.createElement(i.USAProvider,null,n),a)}),(0,s.delegate)(".purchase-button","click",function(e,t){e.preventDefault(),(0,_.default)(t)}),(0,s.delegate)(".purchase-form","submit",function(e,t){e.preventDefault(),(0,w.default)(t)})},1016:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),u=a(r),l=n(16),o=function(e){var t=e.itemCount,n=e.urlPrefix;return u.default.createElement("a",{className:"main-nav-link "+(t>0?"has-items":""),href:n+"/cart"},u.default.createElement("i",{className:"fa fa-shopping-cart"}),u.default.createElement("span",{className:"nav-cart-total nav-bubble "+(t>0?"":"hidden")},t))},c=function(e){return{urlPrefix:e.userStatus.sitePreferences.urlPrefix,itemCount:e.userStatus.cart.itemCount}};t.default=(0,l.connect)(c)(o)},1017:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(4),i=a(c),s=n(16),f=n(86),d=a(f),m=n(266),p=a(m),v=window,y=v.Translation,E=d.default.buildTranslateFunction("locales",y),h=function(e){return d.default.buildTranslateFunction("currencies",y)(e+".short")},g=function(e){function t(){return r(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),o(t,[{key:"updateModalValues",value:function(){var e=this,t=document.getElementById("site-preferences-modal");t&&t.PreferencesModal?t.PreferencesModal.setValues({localeKey:this.props.localeKey,measurement_system:this.props.measurement_system,currency:this.props.currency}):setTimeout(function(){return e.updateModalValues()},100)}},{key:"componentDidUpdate",value:function(){this.updateModalValues()}},{key:"componentDidMount",value:function(){this.updateModalValues()}},{key:"render",value:function(){return i.default.createElement(p.default,{className:"locale-link locale-flag locale-flag-"+this.props.localeKey,id:"locale-link"},E(this.props.locale)," (",this.props.iso_6391.toUpperCase(),")"," ",h(this.props.currency))}}]),t}(i.default.Component),_=function(e){return{locale:e.userStatus.sitePreferences.locale,localeKey:e.userStatus.sitePreferences.localeKey,iso_6391:e.userStatus.sitePreferences.iso_6391,currency:e.userStatus.sitePreferences.currency,measurement_system:e.userStatus.sitePreferences.measurement_system}};t.default=(0,s.connect)(_)(g)},1018:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){var n=[],a=!0,r=!1,u=void 0;try{for(var l,o=e[Symbol.iterator]();!(a=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,u=e}finally{try{!a&&o.return&&o.return()}finally{if(r)throw u}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=n(4),l=a(u),o=n(16),c=n(86),i=a(c),s=n(147),f=n(1019),d=a(f),m=n(266),p=a(m),v=i.default.buildTranslateFunction("js",window.Translation),y=function(e){var t=document.createElement("div");return t.appendChild(document.createTextNode(e)),t.innerHTML},E="stickermule_restore_browsing_as_dismissed_at",h=function(e){return window.location.pathname==="/"+e},g=function(e){return"main-nav-link "+(h(e)?"current":"")},_=function(e){var t=e.urlPrefix;return l.default.createElement("ul",{id:"nav-logged-out"},l.default.createElement("li",{id:"nav-login"},l.default.createElement(p.default,{className:g("login"),href:t+"/login"},v("log_in"))),l.default.createElement("li",{id:"nav-signup"},l.default.createElement(p.default,{className:g("signup"),href:t+"/signup"},v("sign_up"))))},b=function(e){var t=e.urlPrefix,n=e.shortLocale,a=e.user,r=function(){var e=(new Date).toISOString();window.localStorage.setItem(E,e)},u=window.localStorage.getItem(E),o=new Date(u||0),c=a.switchedAccount||!!a.teams.length&&o<new Date(a.signedInAt);return l.default.createElement("span",null,l.default.createElement(P,{alt:a.displayName,retinaSrc:a.avatar.large,src:a.avatar.small}),l.default.createElement(S,{shortLocale:n,urlPrefix:t,user:a}),c&&l.default.createElement(M,{name:a.displayName,onDismiss:r,teams:a.teams,urlPrefix:t}))},w=function(e){var t=e.type,n="logged-in"===t?(0,o.connect)(O)(b):(0,o.connect)(x)(_);return l.default.createElement(n,null)},P=function(e){var t=e.alt,n=e.src,a=e.retinaSrc;return l.default.createElement(p.default,{className:"main-nav-link popup-more",href:"#",id:"nav-user-icon"},l.default.createElement(d.default,{alt:t,classes:"avatar-white",retinaSrc:a,src:n}))},S=function(e){var t=e.shortLocale,n=e.urlPrefix,a=e.user;return l.default.createElement("ul",{className:"popup popup-dropdown",id:"popup-account"},l.default.createElement("li",{className:"account-info"},l.default.createElement(N,{urlPrefix:n,user:a})),l.default.createElement("li",{"data-test-id":"nav-account-orders"},l.default.createElement(p.default,{href:n+"/account/orders"},v("orders"))),l.default.createElement("li",{"data-test-id":"nav-account-reorder"},l.default.createElement(p.default,{href:n+"/account/reorder"},v("reorder"))),l.default.createElement("li",{"data-test-id":"nav-account-artworks"},l.default.createElement(p.default,{href:n+"/account/artworks"},v("Artworks"))),l.default.createElement("li",{id:"nav-account-invite"},l.default.createElement(p.default,{href:n+"/account/invite"},""===t||"en"===t?v("Get_amount_credit",{amount:"$10"}):v("invite_friends"))),a.teams.map(function(e,t){return l.default.createElement("li",{key:"team-"+t,"data-test-id":"nav-account-team"},l.default.createElement(k,{team:e}))}),l.default.createElement("li",{"data-test-id":"nav-account-logout"},l.default.createElement(p.default,{href:n+"/logout"},v("log_out"))))},N=function(e){var t=e.user,n=e.urlPrefix;return l.default.createElement(p.default,{href:n+"/account"},l.default.createElement(d.default,{alt:t.displayName,size:"72",src:t.avatar.large}),l.default.createElement("span",{className:"details"},l.default.createElement("strong",{className:"truncate"},t.displayName),(0,s.activeTeam)(t)?l.default.createElement("span",null,v("Team")):l.default.createElement("span",{className:"truncate"},t.email),l.default.createElement("span",{className:"link"},v("account")),l.default.createElement("span",{className:"link mobile-nav-only"},v("your_account"))))},k=function(e){var t=e.team;return l.default.createElement(p.default,{href:t.becomePath},l.default.createElement(d.default,{alt:"",src:t.becomeAvatar}),l.default.createElement("span",{dangerouslySetInnerHTML:{__html:v("switch_to_name",{name:"<strong>"+y(t.becomeName)+"</strong>"})}}))},M=function(e){var t=e.name,n=e.teams,a=(e.urlPrefix,e.onDismiss),o=(0,u.useState)(!0),c=r(o,2),i=c[0],s=c[1],f=(0,u.useRef)(null);return(0,u.useEffect)(function(){var e=function(e){var t=document.body&&document.body.classList.contains("no-scroll");i&&!t&&f.current&&e.target instanceof Node&&!f.current.contains(e.target)&&(a(),s(!1))};return document.addEventListener("click",e),function(){return document.removeEventListener("click",e)}},[i,a,f]),i?l.default.createElement("div",{ref:f,className:"popup popup-open popup-notification"},l.default.createElement("p",{className:"title",dangerouslySetInnerHTML:{__html:v("you_are_browsing_as_name",{name:"<strong>"+t+"</strong>"})}}),l.default.createElement("button",{className:"modal-close-x close-popup",onClick:function(){a(),s(!1)},type:"button"},"×"),n.map(function(e){return l.default.createElement(k,{key:e.becomeName,team:e})})):null},O=function(e){var t=e.userStatus,n=t.sitePreferences,a=t.user;if(null==a)throw new Error("No user");return{type:"logged-in",shortLocale:n.shortLocale,urlPrefix:n.urlPrefix,user:a}},x=function(e){var t=e.userStatus,n=t.sitePreferences;return{type:"anonymous",urlPrefix:n.urlPrefix}},j=function(e){var t=e.userStatus.user;return{type:t?"logged-in":"anonymous"}};t.default=(0,o.connect)(j)(w)},1019:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),u=a(r),l=function(e){var t=e.alt,n=void 0===t?"User avatar":t,a=e.classes,r=void 0===a?"":a,l=e.size,o=void 0===l?"24":l,c=e.src,i=e.retinaSrc;return u.default.createElement("img",{alt:n,className:"avatar-img "+r,height:o,src:c,srcSet:i?c+" 1x, "+i+" 2x":void 0,width:o})};t.default=l},1020:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),u=a(r),l=n(16),o=function(e){var t=e.notifications;return u.default.createElement("div",null,t&&t.map(function(e,t){return u.default.createElement(c,{key:t,kind:e.kind,message:e.message})}))},c=function(e){var t=e.kind,n=e.message;return u.default.createElement("div",{className:"notification-bar "+t},u.default.createElement("div",{className:"wrapper",dangerouslySetInnerHTML:{__html:n}}))},i=function(e){return{notifications:e.userStatus.user&&e.userStatus.user.notifications}};t.default=(0,l.connect)(i)(o)},1021:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=n(12),u=n(137),l=function(e){return a({id:(0,r.guidGenerator)(),quantity:1},e)};t.default=function(e){var t=e.getAttribute("data-cart-item");if(null==t)throw new Error("Cart item data missing");var n=l(JSON.parse(t));u.actions.addCartItem(n),e.classList.add("loading"),e.disabled=!0}},1022:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=n(12),u=n(137),l=function(e,t){return a({id:(0,r.guidGenerator)(),quantity:t},e)};t.default=function(e){var t=e.querySelector('[name="quantity"]:checked')||e.querySelector('[name="quantity"]'),n=e.querySelector("[data-cart-item]");if(!(n instanceof HTMLButtonElement&&t instanceof HTMLInputElement))throw new Error("UI missing");var a=n.getAttribute("data-cart-item"),r=parseInt(t.value,10);if(isNaN(r))throw new Error("Quantity missing");if(null==a)throw new Error("Cart item data missing");var o=l(JSON.parse(a),r);n.classList.add("loading"),n.disabled=!0,u.actions.addCartItem(o)}}});