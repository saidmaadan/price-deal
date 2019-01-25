((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/product.js"],{

/***/ "./pages/product.js":
/*!**************************!*\
  !*** ./pages/product.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/product")
  

/***/ }),

/***/ 3:
/*!********************************!*\
  !*** multi ./pages/product.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__NEXT_REGISTER_PAGE('/product', function() {
module.exports = __webpack_require__(/*! ./pages/product.js */"./pages/product.js");

return { page: module.exports.default }});

/***/ })

},[[3,"static/runtime/webpack.js"]]]));;
//# sourceMappingURL=product.js.map