webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(8),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(9),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_App__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Footer__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_Footer__);






Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype, '$scrollBus', {
  get: function get() {
    return this.$root.scrollBus;
  }
});

var scrollBus = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({});

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
  data: {
    scrollBus: scrollBus
  },
  el: '#app',
  template: '<div><appl/><span>Some random HTML code here</span><foots/></div>',
  components: {
    Appl: __WEBPACK_IMPORTED_MODULE_1_App___default.a,
    Foots: __WEBPACK_IMPORTED_MODULE_2_Footer___default.a
  }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_detached_scrollbar__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_detached_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_detached_scrollbar__);




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            loop: 40,
            image: 'http://writm.com/wp-content/uploads/2016/08/Cat-hd-wallpapers.jpg'
        };
    },

    components: {
        Gallery: __WEBPACK_IMPORTED_MODULE_0_vue_detached_scrollbar__["Gallery"]
    }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_detached_scrollbar__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_detached_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_detached_scrollbar__);




/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        ScrollBar: __WEBPACK_IMPORTED_MODULE_0_vue_detached_scrollbar__["ScrollBar"]
    }
});

/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('scroll-bar')], 1)
},staticRenderFns: []}

/***/ })
],[5]);
//# sourceMappingURL=app.js.map