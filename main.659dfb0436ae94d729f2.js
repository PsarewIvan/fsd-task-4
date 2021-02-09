!function(){"use strict";var t={6852:function(t,e,n){var r=n(5638),i=n.n(r);function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var s=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.observers=[]}var e,n,r;return e=t,(n=[{key:"subscribe",value:function(t){if("function"!=typeof t)throw new Error("observer must be a function");if(this.observers.includes((function(e){return e!==t})))throw new Error("observer already in the list");this.observers.push(t)}},{key:"unsubscribe",value:function(t){this.observers=this.observers.filter((function(e){return e!==t}))}},{key:"notify",value:function(t){this.observers.slice(0).forEach((function(e){e(t)}))}}])&&o(e.prototype,n),r&&o(e,r),t}();function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.modelChangedSubject=new s;var n={min:0,max:100,step:1,orientation:"horizontal",tooltips:!0,scale:!1,hints:!0,scaleMark:4,subScaleMark:5};this.defaultParamSingle=u(u({},n),{value:50,type:"single"}),this.defaultParamRange=u(u({},n),{from:10,to:90,type:"range"});var r=e&&"range"===e.type,i=e&&!e.hasOwnProperty("type")&&e.from&&e.to;if(r||i){if(e.from>e.to){var o=[e.max,e.min];e.min=o[0],e.max=o[1]}this.setSettings(e,this.defaultParamRange)}else this.setSettings(e,this.defaultParamSingle)}var e,n,r;return e=t,(n=[{key:"setSettings",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.settings;this.settings=u(u({},e),t),this.modelChangedSubject.notify(this.getSettings())}},{key:"getSettings",value:function(){var t=u({},this.settings),e=this.settings.max-this.settings.min;return"single"===this.settings.type?(t.percents=[(this.settings.value-this.settings.min)/e],t.values=[this.settings.value]):"range"===this.settings.type&&(t.percents=[(this.settings.from-this.settings.min)/e,(this.settings.to-this.settings.min)/e],t.values=[this.settings.from,this.settings.to]),t}},{key:"setNewValue",value:function(t,e){var n=this.calcValue(t);"single"===e&&n!==this.settings.value?this.setSettings({value:n}):"to"===e&&n!==this.settings.to&&n>=this.settings.from?this.setSettings({to:n}):"from"===e&&n!==this.settings.from&&n<=this.settings.to&&this.setSettings({from:n})}},{key:"calcValue",value:function(t){var e=this.settings.step,n=this.settings.min+(this.settings.max-this.settings.min)*t;return n%e>e/2&&n!==this.settings.max&&n!==this.settings.min&&(n=n+e-n%e),n%e<e/2&&n!==this.settings.max&&n!==this.settings.min&&(n-=n%e),n=this.round(n,5)}},{key:"round",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Math.pow(10,e);return Math.round(n*t)/n}}])&&l(e.prototype,n),r&&l(e,r),t}();function h(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var y=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r;return e=t,r=[{key:"create",value:function(t,e,n){var r,i=document.createElement(t);return(r=i.classList).add.apply(r,h(e)),n&&(i.innerHTML=n),i}}],(n=null)&&m(e.prototype,n),r&&m(e,r),t}();var v=function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.root=y.create("span",n,r),e.append(this.root)};function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=k(t);if(e){var i=k(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return S(this,n)}}function S(t,e){return!e||"object"!==b(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function k(t){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(o,t);var e,n,r,i=w(o);function o(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(n=i.call(this,t,["free-slider__track"])).state=e,n}return e=o,(n=[{key:"getTrackSize",value:function(){var t;return"horizontal"===this.state.orientation?t=this.root.offsetWidth:"vertical"===this.state.orientation&&(t=this.root.offsetHeight),t}},{key:"getDistanceToScreen",value:function(){var t=this.root.getBoundingClientRect();return"horizontal"===this.state.orientation?t.left:"vertical"===this.state.orientation?t.top:void 0}},{key:"clickEvent",value:function(t){var e=this;this.root.addEventListener("mousedown",(function(n){var r;n.preventDefault(),"horizontal"===e.state.orientation?r=n.clientX:"vertical"===e.state.orientation&&(r=n.clientY),t(r,n)}))}}])&&d(e.prototype,n),r&&d(e,r),o}(v);function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var _=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.state=n,this.render(e)}var e,n,r;return e=t,(n=[{key:"render",value:function(t){"range"===this.state.type?(this.from=new v(t,["free-slider__thumb","free-slider__thumb--from"]),this.to=new v(t,["free-slider__thumb","free-slider__thumb--to"])):this.single=new v(t,["free-slider__thumb"])}},{key:"update",value:function(t,e){this.updatePosition(t),this.state.isHints&&this.updateHints(e)}},{key:"updatePosition",value:function(t){var e=this.getThumbSize()/2;"vertical"===this.state.orientation?"range"===this.state.type?(this.from.root.style.top="calc(".concat(100*t[0],"% + ").concat(e,"px)"),this.to.root.style.top="calc(".concat(100*t[1],"% + ").concat(e,"px)")):this.single.root.style.top="calc(".concat(100*t[0],"% + ").concat(e,"px)"):"horizontal"===this.state.orientation&&("range"===this.state.type?(this.from.root.style.left="calc(".concat(100*t[0],"% + ").concat(e,"px)"),this.to.root.style.left="calc(".concat(100*t[1],"% + ").concat(e,"px)")):this.single.root.style.left="calc(".concat(100*t[0],"% + ").concat(e,"px)"))}},{key:"updateHints",value:function(t){"range"===this.state.type?(this.from.root.style.setProperty("--from-input-value",'"'.concat(t[0],'"')),this.to.root.style.setProperty("--to-input-value",'"'.concat(t[1],'"'))):"single"===this.state.type&&this.single.root.style.setProperty("--input-value",'"'.concat(t[0],'"'))}},{key:"getThumbSize",value:function(){var t;return"horizontal"===this.state.orientation?"single"===this.state.type?t=this.single.root.offsetWidth:"range"===this.state.type&&(t=this.from.root.offsetWidth):"vertical"===this.state.orientation&&("single"===this.state.type?t=this.single.root.offsetHeight:"range"===this.state.type&&(t=this.from.root.offsetHeight)),t}},{key:"addMouseListener",value:function(t,e){"range"===this.state.type?(this.mouseListener(this.from.root,t,e),this.mouseListener(this.to.root,t,e)):this.mouseListener(this.single.root,t,e)}},{key:"mouseListener",value:function(t,e,n){var r=this;t.addEventListener("mousedown",(function(i){i.preventDefault(),r.mouseMoveEvent(t,i,e,n)})),t.ondragstart=function(){return!1}}},{key:"mouseMoveEvent",value:function(t,e,n,r){var i,o=this;"vertical"===this.state.orientation?i=e.clientY-t.getBoundingClientRect().top:"horizontal"===this.state.orientation&&(i=e.clientX-t.getBoundingClientRect().left);var s=function(e){e.preventDefault(),o.updateThumbsShift(e,t,i,n)};document.addEventListener("mousemove",s),document.addEventListener("mouseup",(function t(){r(),document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",t)}))}},{key:"updateThumbsShift",value:function(t,e,n,r){var i,o;"vertical"===this.state.orientation&&(i=t.clientY-n),"horizontal"===this.state.orientation&&(i=t.clientX-n),"single"===this.state.type&&(o="single"),"range"===this.state.type&&(e===this.from.root?o="from":e===this.to.root&&(o="to")),r(i,o)}},{key:"requiredThumb",value:function(t){if("single"===this.state.type)return{name:"single",root:this.single.root};if("range"===this.state.type){var e=this.getDistance(this.to.root)-this.getDistance(this.from.root);return t<=this.getDistance(this.from.root)+e/2?{name:"from",root:this.from.root}:{name:"to",root:this.to.root}}}},{key:"getDistance",value:function(t){var e;return"horizontal"===this.state.orientation?e=t.getBoundingClientRect().left:"vertical"===this.state.orientation&&(e=t.getBoundingClientRect().top),e}}])&&x(e.prototype,n),r&&x(e,r),t}();function P(t){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function E(t,e){return(E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function T(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=L(t);if(e){var i=L(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return C(this,n)}}function C(t,e){return!e||"object"!==P(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function L(t){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var z=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(o,t);var e,n,r,i=T(o);function o(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(n=i.call(this,t,["free-slider__bar"])).state=e,n.root.style.pointerEvents="none",n}return e=o,(n=[{key:"update",value:function(t){"vertical"===this.state.orientation?"range"===this.state.type?(this.root.style.top="".concat(100*t[0],"%"),this.root.style.height="".concat(100*(t[1]-t[0]),"%")):"single"===this.state.type&&(this.root.style.height="".concat(100*t[0],"%")):"horizontal"===this.state.orientation&&("range"===this.state.type?(this.root.style.left="".concat(100*t[0],"%"),this.root.style.width="".concat(100*(t[1]-t[0]),"%")):"single"===this.state.type&&(this.root.style.width="".concat(100*t[0],"%")))}}])&&j(e.prototype,n),r&&j(e,r),o}(v);function R(t){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function N(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function M(t,e){return(M=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function D(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=H(t);if(e){var i=H(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return V(this,n)}}function V(t,e){return!e||"object"!==R(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function H(t){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&M(t,e)}(o,t);var e,n,r,i=D(o);function o(t,e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(r=i.call(this,t,["free-slider__scale"])).state=n,"horizontal"===r.state.orientation?r.root.style.width="".concat(e,"%"):"vertical"===r.state.orientation&&(r.root.style.height="".concat(e,"%")),r.renderMark(),r}return e=o,(n=[{key:"renderMark",value:function(){for(var t=(this.state.max-this.state.min)/(this.state.markNumber*this.state.subMarkNumber),e=0;e<=this.state.markNumber*this.state.subMarkNumber;e++){var n=document.createElement("span");if(n.classList.add("free-slider__scale-mark"),this.setPosition(n,e),e%this.state.subMarkNumber==0){var r=document.createElement("span");this.root.append(r),r.classList.add("free-slider__scale-text"),this.setPosition(r,e),r.innerHTML=(t*e+this.state.min).toString(),n.classList.add("free-slider__scale-mark--big")}this.root.append(n)}}},{key:"setPosition",value:function(t,e){"horizontal"===this.state.orientation?t.style.left="".concat(100*e/(this.state.markNumber*this.state.subMarkNumber),"%"):"vertical"===this.state.orientation&&(t.style.top="".concat(100*e/(this.state.markNumber*this.state.subMarkNumber),"%"))}},{key:"clickEvent",value:function(t){var e=this;this.root.addEventListener("mousedown",(function(n){var r;n.preventDefault(),"horizontal"===e.state.orientation?r=n.clientX:"vertical"===e.state.orientation&&(r=n.clientY),t(r,n)}))}}])&&N(e.prototype,n),r&&N(e,r),o}(v);function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var A=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.state=n,this.render(e)}var e,n,r;return e=t,(n=[{key:"render",value:function(t){this.min=new v(t,["free-slider__min"],"".concat(this.state.min)),this.max=new v(t,["free-slider__max"],"".concat(this.state.max))}}])&&F(e.prototype,n),r&&F(e,r),t}();function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var B=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.root=e,this.onChange=n.onChange,this.onUpdate=n.onUpdate,this.isFirstChange=!0,this.render(n),this.update(n)}var e,n,r;return e=t,(n=[{key:"render",value:function(t){if(this.slider=document.createElement("span"),"vertical"===t.orientation?this.slider.classList.add("free-slider","free-slider--vertical"):"horizontal"===t.orientation&&this.slider.classList.add("free-slider","free-slider--horizontal"),this.root.append(this.slider),this.track=new O(this.slider,{type:t.type,orientation:t.orientation}),this.bar=new z(this.slider,{type:t.type,orientation:t.orientation}),this.thumbs=new _(this.slider,{type:t.type,orientation:t.orientation,min:t.min,max:t.max,isHints:t.hints}),t.scale){var e=(this.track.getTrackSize()-this.thumbs.getThumbSize())/this.track.getTrackSize()*100;this.scale=new I(this.slider,e,{orientation:t.orientation,markNumber:t.scaleMark,subMarkNumber:t.subScaleMark,min:t.min,max:t.max})}t.tooltips&&(this.tooltips=new A(this.slider,{min:t.min,max:t.max}))}},{key:"update",value:function(t){this.state={type:t.type,orientation:t.orientation};var e=this.formatPercentsToSubview(t.percents);this.thumbs.update(e,t.values),this.bar.update(e),this.onUpdate&&this.isFirstChange&&this.onUpdate(t.values),this.onChange&&!this.isFirstChange&&this.onChange(t.values),this.isFirstChange=!1}},{key:"formatPercentsToSubview",value:function(t){var e=this.track.getTrackSize(),n=(e-this.thumbs.getThumbSize())/e;return"single"===this.state.type?[t[0]*n]:"range"===this.state.type?[t[0]*n,t[1]*n]:void 0}},{key:"viewChanged",value:function(t,e){var n=this;this.thumbs.addMouseListener((function(e,r){var i=n.percentFromThumbShift(e);t(i,r)}),e),this.track.clickEvent((function(r,i){n.clickHandler(r,t,i,e)})),this.scale&&this.scale.clickEvent((function(r,i){n.clickHandler(r,t,i,e)}))}},{key:"clickHandler",value:function(t,e,n,r){var i=this,o=t-this.thumbs.getThumbSize()/2,s=this.percentFromThumbShift(o),a=this.thumbs.requiredThumb(o);e(s,a.name),this.thumbs.mouseMoveEvent(a.root,n,(function(t){var n=i.percentFromThumbShift(t);e(n,a.name)}),r)}},{key:"percentFromThumbShift",value:function(t){var e=this.track.getTrackSize(),n=(t-this.track.getDistanceToScreen())/(e-this.thumbs.getThumbSize());return n<=0&&(n=0),n>=1&&(n=1),n}}])&&U(e.prototype,n),r&&U(e,r),t}();function X(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var Y=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=e,this.model=new f(n),this.view=new B(this.element,this.model.getSettings()),this.view.viewChanged((function(t,e){r.model.setNewValue(t,e)}),(function(){n.onFinish&&n.onFinish(r.model.getSettings().values)})),this.model.modelChangedSubject.subscribe((function(t){r.view.update(t)}))}var e,n,r;return e=t,(n=[{key:"getCurrentValue",value:function(){return this.model.getSettings().values}},{key:"setValue",value:function(t){var e=this.model.getSettings();"single"===e.type?this.model.setSettings({value:t[0]}):"range"===e.type&&(1===t.length?this.model.setSettings({from:t[0]}):null===t[0]?this.model.setSettings({to:t[1]}):this.model.setSettings({from:t[0],to:t[1]}))}}])&&X(e.prototype,n),r&&X(e,r),t}();function W(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var q,$,G=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.freeSlider=new Y(e,n)}var e,n,r;return e=t,(n=[{key:"method",value:function(){return this.freeSlider}}])&&W(e.prototype,n),r&&W(e,r),t}();function J(t){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function K(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}q=i(),$={init:function(t){var e=this;return this.each((function(n,r){var i=new G(r,t);q(e).data("freeSlider",i)}))},getValue:function(){return q(this).data().freeSlider.method().getCurrentValue()},setValue:function(t){q(this).data().freeSlider.method().setValue(t)}},q.fn.freeSlider=function(t,e){var n;if("string"==typeof t&&$[t])n=$[t].call(this,e);else{if("object"!==J(t)&&t)throw new Error("Метода ".concat(t," не существует для freeSlider"));n=$.init.call(this,t)}return n};var Q=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.slider=e,this.type=n.type,this.inputState={min:n.min,max:n.max,step:n.step},this.renderInput(),n.onUpdate=this.updateInput.bind(this),n.onChange=this.updateInput.bind(this),this.slider.freeSlider(n),this.inputListener()}var e,n,r;return e=t,(n=[{key:"renderInput",value:function(){"range"===this.type?(this.from=this.createInput(),this.to=this.createInput(),this.slider.append(this.from,this.to)):(this.single=this.createInput(),this.slider.append(this.single))}},{key:"updateInput",value:function(t){"range"===this.type?(this.from.value="".concat(t[0]),this.to.value="".concat(t[1])):this.single.value="".concat(t[0])}},{key:"createInput",value:function(){var t=document.createElement("input");return t.classList.add("slider__input"),t.type="number",t.min=this.inputState.min.toString(),t.max=this.inputState.max.toString(),t.step=this.inputState.step.toString(),t}},{key:"inputListener",value:function(){var t=this;"range"===this.type?(this.from.addEventListener("change",(function(){Number(t.from.value)>Number(t.to.value)&&(t.from.value=t.to.value),Number(t.from.value)<t.inputState.min&&(t.from.value=t.inputState.min.toString()),t.setValue([Number(t.from.value)])})),this.to.addEventListener("change",(function(){Number(t.to.value)>t.inputState.max&&(t.to.value=t.inputState.max.toString()),Number(t.to.value)<Number(t.from.value)&&(t.to.value=t.from.value),t.setValue([null,Number(t.to.value)])}))):this.single.addEventListener("change",(function(){Number(t.single.value)>t.inputState.max&&(t.single.value=t.inputState.max.toString()),Number(t.single.value)<t.inputState.min&&(t.single.value=t.inputState.min.toString()),t.setValue([Number(t.single.value)])}))}},{key:"getValue",value:function(){return this.slider.freeSlider("getValue")}},{key:"setValue",value:function(t){this.slider.freeSlider("setValue",t)}}])&&K(e.prototype,n),r&&K(e,r),t}();new Q(i()("#slider-1"),{min:-100,max:50,value:-50,step:.1,scale:!0}),new Q(i()("#slider-2"),{type:"range",min:-100,max:300,from:30,to:100,step:10}),new Q(i()("#slider-3"),{orientation:"vertical",min:0,max:100,value:30,step:1,scale:!0,hints:!1}),new Q(i()("#slider-4"),{orientation:"vertical",type:"range",min:-100,max:100,from:0,to:50,step:5})}},e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.m=t,n.x=function(){},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={179:0},e=[[1202,453],[6852,453]],r=function(){},i=function(i,o){for(var s,a,u=o[0],c=o[1],l=o[2],f=o[3],h=0,p=[];h<u.length;h++)a=u[h],n.o(t,a)&&t[a]&&p.push(t[a][0]),t[a]=0;for(s in c)n.o(c,s)&&(n.m[s]=c[s]);for(l&&l(n),i&&i(o);p.length;)p.shift()();return f&&e.push.apply(e,f),r()},o=self.webpackChunk=self.webpackChunk||[];function s(){for(var r,i=0;i<e.length;i++){for(var o=e[i],s=!0,a=1;a<o.length;a++){var u=o[a];0!==t[u]&&(s=!1)}s&&(e.splice(i--,1),r=n(n.s=o[0]))}return 0===e.length&&(n.x(),n.x=function(){}),r}o.forEach(i.bind(null,0)),o.push=i.bind(null,o.push.bind(o));var a=n.x;n.x=function(){return n.x=a||function(){},(r=s)()}}(),n.x()}();