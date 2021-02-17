!function(){"use strict";var t={6862:function(t,e,n){var r=n(5638),i=n.n(r);function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.observers={}}var e,n,r;return e=t,(n=[{key:"subscribe",value:function(t,e){if("function"!=typeof e)throw new Error("observer must be a function");if("string"!=typeof t)throw new Error("observer title must be a string type");if(this.observers.hasOwnProperty(t))throw new Error('observer "'.concat(t,'" already in the list in'));this.observers[t]=e}},{key:"unsubscribe",value:function(t){if(!this.observers.hasOwnProperty(t))throw new Error('An accepted function "'.concat(t,'" does not exist'));delete this.observers.name}},{key:"notify",value:function(t,e){this.observers[t]&&this.observers[t](e)}}])&&o(e.prototype,n),r&&o(e,r),t}(),s=n(8784),u=n.n(s);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var p=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.modelChangedSubject=new a;var n={min:0,max:100,step:1,orientation:"horizontal",tooltips:!0,scale:!1,hints:!0,scaleMark:4,subScaleMark:5,percents:[]};n="range"===e.type?l(l({},n),{values:[10,90],type:"range"}):l(l({},n),{values:[50],type:"single"}),this.setSettings(e,n)}var e,n,r;return e=t,(n=[{key:"updateModel",value:function(t){var e=this,n=t.values.slice().sort((function(t,e){return t-e})),r=this.isEqual(t.values,n),i=!this.isEqual(t.values,this.settings.values),o=!t.values.some((function(t){return t<e.settings.min||t>e.settings.max}));r&&i&&o&&(this.setSettings(t),this.modelChangedSubject.notify("viewUpdate",this.getSettings()),this.modelChangedSubject.notify("onChange",this.getSettings().values))}},{key:"setSettings",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.settings;this.settings=l(l({},e),t)}},{key:"getSettings",value:function(){var t=this,e=u().cloneDeep(this.settings),n=this.settings.max-this.settings.min;return this.settings.values.forEach((function(r,i){e.percents[i]=(r-t.settings.min)/n})),e}},{key:"setNewValue",value:function(t,e){var n=this.calcValue(t);if("single"===this.settings.type)this.updateModel({values:[n]});else{var r=this.arrCopy(this.settings.values);r[e]=n,this.updateModel({values:r})}}},{key:"calcValue",value:function(t){var e=this.settings.step,n=this.settings.min+(this.settings.max-this.settings.min)*t;return n%e>e/2&&n!==this.settings.max&&n!==this.settings.min&&(n=n+e-n%e),n%e<e/2&&n!==this.settings.max&&n!==this.settings.min&&(n-=n%e),n=this.round(n,5)}},{key:"round",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Math.pow(10,e);return Math.round(n*t)/n}},{key:"isEqual",value:function(t,e){return t.length===e.length&&t.join()===e.join()}},{key:"arrCopy",value:function(t){var e=[];return t.forEach((function(t,n){e[n]=t})),e}}])&&h(e.prototype,n),r&&h(e,r),t}();function y(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var b=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.root=this.create("span",n,r),e.append(this.root)}var e,n,r;return e=t,(n=[{key:"create",value:function(t,e,n){var r,i=document.createElement(t);return(r=i.classList).add.apply(r,y(e)),n&&(i.innerHTML=n),i}}])&&d(e.prototype,n),r&&d(e,r),t}();function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function w(t,e){return(w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=T(t);if(e){var i=T(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return S(this,n)}}function S(t,e){return!e||"object"!==m(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function T(t){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&w(t,e)}(o,t);var e,n,r,i=k(o);function o(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(n=i.call(this,t,["free-slider__track"])).state=e,n}return e=o,(n=[{key:"getTrackSize",value:function(){return this.root[this.getSizeType()]}},{key:"getDistanceToScreen",value:function(){return this.root.getBoundingClientRect()[this.getDirectionType()]}},{key:"clickEvent",value:function(t){var e=this;this.root.addEventListener("pointerdown",(function(n){n.preventDefault(),t(n[e.getCoordType()],n)}))}},{key:"getDirectionType",value:function(){return"horizontal"===this.state.orientation?"left":"top"}},{key:"getSizeType",value:function(){return"horizontal"===this.state.orientation?"offsetWidth":"offsetHeight"}},{key:"getCoordType",value:function(){return"horizontal"===this.state.orientation?"clientX":"clientY"}}])&&g(e.prototype,n),r&&g(e,r),o}(b);function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var j=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.state=n,this.render(e)}var e,n,r;return e=t,(n=[{key:"render",value:function(t){"range"===this.state.type?this.thumbs=[new b(t,["free-slider__thumb"]),new b(t,["free-slider__thumb","free-slider__thumb--second"])]:this.thumbs=[new b(t,["free-slider__thumb"])]}},{key:"update",value:function(t,e){this.updatePosition(t),this.state.isHints&&this.updateHints(e)}},{key:"updatePosition",value:function(t){var e=this.getThumbSize()/2,n=this.getDirectionType();this.thumbs.forEach((function(r,i){r.root.style[n]="calc(".concat(100*t[i],"% + ").concat(e,"px)")}))}},{key:"updateHints",value:function(t){var e=["--input-value-first","--input-value-second"];this.thumbs.forEach((function(n,r){n.root.style.setProperty(e[r],'"'.concat(t[r],'"'))}))}},{key:"getThumbSize",value:function(){return this.thumbs[0].root[this.getSizeType()]}},{key:"addMouseListener",value:function(t,e){var n=this;this.thumbs.forEach((function(r){n.mouseListener(r.root,t,e)}))}},{key:"mouseListener",value:function(t,e,n){var r=this;t.addEventListener("pointerdown",(function(i){i.preventDefault(),r.mouseMoveEvent(t,i,e,n)})),t.ondragstart=function(){return!1}}},{key:"mouseMoveEvent",value:function(t,e,n,r){var i,o=this,a=this.getCoordType(),s=this.getDirectionType();i=e[a]-t.getBoundingClientRect()[s];var u=function(e){e.preventDefault(),o.updateThumbsShift(e,t,i,n)};document.addEventListener("pointermove",u),document.addEventListener("pointerup",(function t(){r(),document.removeEventListener("pointermove",u),document.removeEventListener("pointerup",t)}))}},{key:"updateThumbsShift",value:function(t,e,n,r){var i=this.getCurrentThumbIndex(e);r(t[this.getCoordType()]-n,i)}},{key:"getCurrentThumbIndex",value:function(t){return this.thumbs.findIndex((function(e){return e.root===t}))}},{key:"requiredThumb",value:function(t){var e={index:0,root:this.thumbs[0].root};if("single"===this.state.type)return e;var n=this.getDistance(this.thumbs[1].root)-this.getDistance(this.thumbs[0].root);return t>this.getDistance(this.thumbs[0].root)+n/2&&(e.index=1,e.root=this.thumbs[1].root),e}},{key:"getDistance",value:function(t){return t.getBoundingClientRect()[this.getDirectionType()]}},{key:"getDirectionType",value:function(){return"horizontal"===this.state.orientation?"left":"top"}},{key:"getSizeType",value:function(){return"horizontal"===this.state.orientation?"offsetWidth":"offsetHeight"}},{key:"getCoordType",value:function(){return"horizontal"===this.state.orientation?"clientX":"clientY"}}])&&E(e.prototype,n),r&&E(e,r),t}();function _(t){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function x(t,e){return(x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function P(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=D(t);if(e){var i=D(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return z(this,n)}}function z(t,e){return!e||"object"!==_(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function D(t){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}(o,t);var e,n,r,i=P(o);function o(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(n=i.call(this,t,["free-slider__bar"])).state=e,n.root.style.pointerEvents="none",n}return e=o,(n=[{key:"update",value:function(t){"range"===this.state.type?(this.root.style[this.getDirectionType()]="".concat(100*t[0],"%"),this.root.style[this.getSizeType()]="".concat(100*(t[1]-t[0]),"%")):this.root.style[this.getSizeType()]="".concat(100*t[0],"%")}},{key:"getDirectionType",value:function(){return"horizontal"===this.state.orientation?"left":"top"}},{key:"getSizeType",value:function(){return"horizontal"===this.state.orientation?"width":"height"}}])&&C(e.prototype,n),r&&C(e,r),o}(b);function M(t){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function V(t,e){return(V=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function I(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=F(t);if(e){var i=F(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return N(this,n)}}function N(t,e){return!e||"object"!==M(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function F(t){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var H=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&V(t,e)}(o,t);var e,n,r,i=I(o);function o(t,e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(r=i.call(this,t,["free-slider__scale"])).state=n,r.root.style[r.getSizeType()]="".concat(e,"%"),r.renderMark(),r}return e=o,(n=[{key:"renderMark",value:function(){for(var t=(this.state.max-this.state.min)/(this.state.markNumber*this.state.subMarkNumber),e=0;e<=this.state.markNumber*this.state.subMarkNumber;e++){var n=document.createElement("span");if(n.classList.add("free-slider__scale-mark"),this.setPosition(n,e),e%this.state.subMarkNumber==0){var r=document.createElement("span");this.root.append(r),r.classList.add("free-slider__scale-text"),this.setPosition(r,e),r.innerHTML=(t*e+this.state.min).toString(),n.classList.add("free-slider__scale-mark--big")}this.root.append(n)}}},{key:"setPosition",value:function(t,e){t.style[this.getDirectionType()]="".concat(100*e/(this.state.markNumber*this.state.subMarkNumber),"%")}},{key:"clickEvent",value:function(t){var e=this;this.root.addEventListener("pointerdown",(function(n){n.preventDefault(),t(n[e.getCoordType()],n)}))}},{key:"getDirectionType",value:function(){return"horizontal"===this.state.orientation?"left":"top"}},{key:"getSizeType",value:function(){return"horizontal"===this.state.orientation?"width":"height"}},{key:"getCoordType",value:function(){return"horizontal"===this.state.orientation?"clientX":"clientY"}}])&&R(e.prototype,n),r&&R(e,r),o}(b);function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var U=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.state=n,this.render(e)}var e,n,r;return e=t,(n=[{key:"render",value:function(t){this.min=new b(t,["free-slider__min"],"".concat(this.state.min)),this.max=new b(t,["free-slider__max"],"".concat(this.state.max))}}])&&A(e.prototype,n),r&&A(e,r),t}();function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var B=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.root=e,this.onChange=n.onChange,this.onUpdate=n.onUpdate,this.isFirstChange=!0,this.render(n),this.update(n)}var e,n,r;return e=t,(n=[{key:"render",value:function(t){if(this.slider=document.createElement("span"),"vertical"===t.orientation?this.slider.classList.add("free-slider","free-slider--vertical"):"horizontal"===t.orientation&&this.slider.classList.add("free-slider","free-slider--horizontal"),this.root.append(this.slider),this.track=new O(this.slider,{type:t.type,orientation:t.orientation}),this.bar=new L(this.slider,{type:t.type,orientation:t.orientation}),this.thumbs=new j(this.slider,{type:t.type,orientation:t.orientation,min:t.min,max:t.max,isHints:t.hints}),t.scale){var e=(this.track.getTrackSize()-this.thumbs.getThumbSize())/this.track.getTrackSize()*100;this.scale=new H(this.slider,e,{orientation:t.orientation,markNumber:t.scaleMark,subMarkNumber:t.subScaleMark,min:t.min,max:t.max})}t.tooltips&&(this.tooltips=new U(this.slider,{min:t.min,max:t.max}))}},{key:"update",value:function(t){this.state={type:t.type,orientation:t.orientation};var e=this.formatPercentsToSubview(t.percents);this.thumbs.update(e,t.values),this.bar.update(e),this.onUpdate&&this.isFirstChange&&this.onUpdate(t.values),this.onChange&&!this.isFirstChange&&this.onChange(t.values),this.isFirstChange=!1}},{key:"formatPercentsToSubview",value:function(t){var e=this.track.getTrackSize(),n=(e-this.thumbs.getThumbSize())/e;return"single"===this.state.type?[t[0]*n]:"range"===this.state.type?[t[0]*n,t[1]*n]:void 0}},{key:"viewChanged",value:function(t,e){var n=this;this.thumbs.addMouseListener((function(e,r){var i=n.percentFromThumbShift(e);t(i,r)}),e),this.track.clickEvent((function(r,i){n.clickHandler(r,t,i,e)})),this.scale&&this.scale.clickEvent((function(r,i){n.clickHandler(r,t,i,e)}))}},{key:"clickHandler",value:function(t,e,n,r){var i=this,o=t-this.thumbs.getThumbSize()/2,a=this.percentFromThumbShift(o),s=this.thumbs.requiredThumb(o);e(a,s.index),this.thumbs.mouseMoveEvent(s.root,n,(function(t){var n=i.percentFromThumbShift(t);e(n,s.index)}),r)}},{key:"percentFromThumbShift",value:function(t){var e=this.track.getTrackSize(),n=(t-this.track.getDistanceToScreen())/(e-this.thumbs.getThumbSize());return n<=0&&(n=0),n>=1&&(n=1),n}}])&&q(e.prototype,n),r&&q(e,r),t}();function X(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var Y=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=e,this.model=new p(n),this.view=new B(this.element,this.model.getSettings()),this.view.viewChanged((function(t,e){r.model.setNewValue(t,e)}),(function(){n.onFinish&&n.onFinish(r.model.getSettings().values)})),this.model.modelChangedSubject.subscribe("viewUpdate",(function(t){r.view.update(t)}))}var e,n,r;return e=t,(n=[{key:"getCurrentValue",value:function(){return this.model.getSettings().values}},{key:"setValue",value:function(t){var e=this.model.getSettings().values;e.forEach((function(n,r){"number"==typeof t[r]&&n!==t[r]&&(e[r]=t[r])})),this.model.updateModel({values:e})}},{key:"onChange",value:function(t){this.model.modelChangedSubject.subscribe("onChange",(function(e){t&&t(e)}))}},{key:"onLoad",value:function(t){t(this.model.getSettings().values)}}])&&X(e.prototype,n),r&&X(e,r),t}();function W(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var $,G,J=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.freeSlider=new Y(e,n)}var e,n,r;return e=t,(n=[{key:"method",value:function(){return this.freeSlider}}])&&W(e.prototype,n),r&&W(e,r),t}();function K(t){return(K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}$=i(),G={init:function(t){var e=this;return this.each((function(n,r){var i=new J(r,t);$(e).data("freeSlider",i)}))},getValue:function(){return $(this).data().freeSlider.method().getCurrentValue()},setValue:function(t){$(this).data().freeSlider.method().setValue(t)},onChange:function(t){$(this).data().freeSlider.method().onChange(t)},onLoad:function(t){$(this).data().freeSlider.method().onLoad(t)}},$.fn.freeSlider=function(t,e){var n;if("string"==typeof t&&G[t])n=G[t].call(this,e);else{if("object"!==K(t)&&t)throw new Error("Метода ".concat(t," не существует для freeSlider"));n=G.init.call(this,t)}return n};var Z=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.slider=e,this.type=n.type,this.slider.freeSlider(n),this.renderInput(),this.inputEvent(),this.updateSlider()}var e,n,r;return e=t,(n=[{key:"renderInput",value:function(){var t=this,e=document.createElement("div");e.classList.add("slider__input-wrapper"),this.inputs=[],this.getValues().forEach((function(n,r){t.inputs.push(t.createInput()),e.append(t.inputs[r])})),this.slider.after(e)}},{key:"createInput",value:function(){var t=document.createElement("input");return t.classList.add("slider__input"),t.type="number",t}},{key:"inputEvent",value:function(){this.slider.freeSlider("onLoad",this.updateInputs.bind(this)),this.slider.freeSlider("onChange",this.updateInputs.bind(this))}},{key:"updateInputs",value:function(t){var e=this;t.forEach((function(t,n){e.inputs[n].value="".concat(t)}))}},{key:"updateSlider",value:function(){var t=this;this.inputs.forEach((function(e,n){e.addEventListener("change",(function(){var r=[];r[n]=Number(e.value),t.setValues(r),e.value=t.getValues()[n].toString()}))}))}},{key:"getValues",value:function(){return this.slider.freeSlider("getValue")}},{key:"setValues",value:function(t){this.slider.freeSlider("setValue",t)}}])&&Q(e.prototype,n),r&&Q(e,r),t}();new Z(i()("#slider-1"),{min:-100,max:50,values:[-50],step:.1,scale:!0,inputs:!0}),new Z(i()("#slider-2"),{type:"range",min:-100,max:300,values:[30,100],step:10,scale:!0,inputs:!0}),new Z(i()("#slider-3"),{orientation:"vertical",min:0,max:100,values:[30],step:1,scale:!0,hints:!1,inputs:!0}),new Z(i()("#slider-4"),{orientation:"vertical",type:"range",min:-100,max:100,values:[0,50],step:5,inputs:!0})}},e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={id:r,loaded:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=t,n.x=function(){},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},function(){var t={179:0},e=[[1202,577],[6862,577]],r=function(){},i=function(i,o){for(var a,s,u=o[0],c=o[1],l=o[2],f=o[3],h=0,p=[];h<u.length;h++)s=u[h],n.o(t,s)&&t[s]&&p.push(t[s][0]),t[s]=0;for(a in c)n.o(c,a)&&(n.m[a]=c[a]);for(l&&l(n),i&&i(o);p.length;)p.shift()();return f&&e.push.apply(e,f),r()},o=self.webpackChunk=self.webpackChunk||[];function a(){for(var r,i=0;i<e.length;i++){for(var o=e[i],a=!0,s=1;s<o.length;s++){var u=o[s];0!==t[u]&&(a=!1)}a&&(e.splice(i--,1),r=n(n.s=o[0]))}return 0===e.length&&(n.x(),n.x=function(){}),r}o.forEach(i.bind(null,0)),o.push=i.bind(null,o.push.bind(o));var s=n.x;n.x=function(){return n.x=s||function(){},(r=a)()}}(),n.x()}();