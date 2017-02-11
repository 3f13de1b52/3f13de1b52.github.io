webpackJsonp([0,2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(13),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(14),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    data() {
        return {
            wrapperId: ''
        };
    },
    created() {
        this.wrapperId = Math.random().toString(36).substring(7);
        this.$scrollBus.$on('change', msg => {
            this.calculateBack(msg);
        });
    },
    methods: {
        calculateBack(distPerc) {
            let posOfBar = distPerc * this.holderWidth / 100;
            document.getElementById(this.wrapperId).scrollLeft = posOfBar;
        }
    },
    computed: {
        holderWidth() {
            const full = document.getElementById(this.wrapperId).scrollWidth;
            const client = document.getElementById(this.wrapperId).offsetWidth;
            return full - client;
        }
    }
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    data() {
        return {
            barId: '',
            sliderId: ''
        };
    },
    methods: {
        bindMouseDown() {
            document.onmousemove = this.calculatePosition;
        },
        clear() {
            document.onmousemove = null;
        },
        calculatePosition(event) {
            const mousePos = event.clientX;
            const posInBar = mousePos - this.scrollbarOffset;
            const effectiveWidth = this.barWidth - this.sliderWidth;
            const absolutePerc = posInBar * 100 / this.barWidth;
            const sliderToBar = this.sliderWidth * 100 / this.barWidth;
            let distPerc = posInBar * 100 / effectiveWidth;
            const diff = absolutePerc - distPerc;
            const slider = document.getElementById(this.sliderId);
            if (0 > distPerc) {
                distPerc = 0;
            } else if (100 < distPerc) {
                distPerc = 100;
            }
            this.$scrollBus.$emit('change', distPerc);
            slider.style.left = distPerc + diff + '%';
        },
        elementPos(el) {
            const rect = el.getBoundingClientRect(),
                  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return rect.left + scrollLeft;
        }
    },
    computed: {
        barWidth() {
            const bar = document.getElementById(this.barId);
            return bar.offsetWidth;
        },
        sliderWidth() {
            const slider = document.getElementById(this.sliderId);
            return slider.offsetWidth;
        },
        scrollbarOffset() {
            const bar = document.getElementById(this.barId);
            return this.elementPos(bar);
        },
        sliderOffset() {
            const slider = document.getElementById(this.sliderId);
            const rect = slider.getBoundingClientRect();
            return rect.left;
        }
    },
    created() {
        this.barId = Math.random().toString(36).substring(7);
        this.sliderId = Math.random().toString(36).substring(7);
    }
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_detached_scrollbar__ = __webpack_require__(0);
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    data() {
        return {
            loop: 40,
            image: 'http://writm.com/wp-content/uploads/2016/08/Cat-hd-wallpapers.jpg'
        };
    },
    components: {
        Gallery: __WEBPACK_IMPORTED_MODULE_0_vue_detached_scrollbar__["d" /* Gallery */]
    }
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_detached_scrollbar__ = __webpack_require__(0);
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        ScrollBar: __WEBPACK_IMPORTED_MODULE_0_vue_detached_scrollbar__["c" /* ScrollBar */]
    }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(12),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(11),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "scrollbar-wrapper"
  }, [_c('div', {
    staticClass: "scrollbar",
    attrs: {
      "id": _vm.barId
    },
    on: {
      "click": _vm.calculatePosition
    }
  }, [_c('div', {
    staticClass: "scrollbar-slider",
    attrs: {
      "id": _vm.sliderId
    },
    on: {
      "mousedown": _vm.bindMouseDown,
      "mouseup": _vm.clear
    }
  })])])
},staticRenderFns: []}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "gallery-wrapper",
    attrs: {
      "id": _vm.wrapperId
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h3', [_vm._v("Gallery")]), _vm._v(" "), _c('gallery', [_c('div', {
    staticClass: "gallery"
  }, _vm._l((_vm.loop), function(stuff) {
    return _c('div', {
      staticClass: "gallery-item"
    }, [_c('img', {
      attrs: {
        "src": _vm.image,
        "alt": ""
      }
    })])
  }))])], 1)
},staticRenderFns: []}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('scroll-bar')], 1)
},staticRenderFns: []}

/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_App__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Footer__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_Footer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_detached_scrollbar__ = __webpack_require__(0);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.






/* eslint-disable no-new */
const app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
  data: {
    scrollBus: __WEBPACK_IMPORTED_MODULE_3_vue_detached_scrollbar__["a" /* scrollBus */]
  },
  el: '#app',
  template: '<div><appl/><span>Some random HTML code here</span><foots/></div>',
  components: {
    Wrapper: __WEBPACK_IMPORTED_MODULE_3_vue_detached_scrollbar__["b" /* default */],
    Appl: __WEBPACK_IMPORTED_MODULE_1_App___default.a,
    Foots: __WEBPACK_IMPORTED_MODULE_2_Footer___default.a
  }
});

/***/ })
],[16]);
//# sourceMappingURL=app.js.map