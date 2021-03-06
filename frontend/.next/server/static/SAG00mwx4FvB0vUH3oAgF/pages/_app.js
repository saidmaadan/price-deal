module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CURRENT_USER_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    me {\n        id\n        email\n        name\n        permissions\n        orders {\n          id\n        }\n        cart{\n          id\n          quantity\n          product {\n            id\n            price\n            image\n            title\n            description\n          }\n        }\n    }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var CURRENT_USER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var User = function User(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], _extends({}, props, {
    query: CURRENT_USER_QUERY
  }), function (payload) {
    return props.children(payload);
  });
};

/* harmony default export */ __webpack_exports__["b"] = (User);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



var ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "sc-17rd9s3-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]);

var DisplayError = function DisplayError(_ref) {
  var error = _ref.error;
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map(function (error, i) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
        key: i
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        "data-test": "graphql-error"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Shoot!"), error.message.replace('GraphQL error: ', '')));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    "data-test": "graphql-error"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Shoot!"), error.message.replace('GraphQL error: ', '')));
};

DisplayError.defaultProps = {
  error: {}
};
/* harmony default export */ __webpack_exports__["a"] = (DisplayError);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (amount) {
  var options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }; // if its a whole, dollar amount, leave off the .00

  if (amount % 100 === 0) options.minimumFractionDigits = 0;
  var formatter = new Intl.NumberFormat('en-US', options);
  return formatter.format(amount / 100);
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export endpoint */
/* unused harmony export proEndpoint */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return perPage; });
// This is client side config only - don't put anything in here that shouldn't be public!
var endpoint = "http://localhost:4444";
var proEndpoint = "https://evening-plains-86570.herokuapp.com/";
var perPage = 4;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var PriceDealButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "PriceDealButton",
  componentId: "sc-8ole3-0"
})(["background:", ";color:white;font-weight:500;border:0;border-radius:0;text-transform:uppercase;font-size:2rem;padding:0.8rem 1.5rem;transform:skew(-2deg);display:inline-block;transition:all 0.5s;&[disabled]{opacity:0.5;}"], function (props) {
  return props.theme.green;
});
/* harmony default export */ __webpack_exports__["a"] = (PriceDealButton);

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("downshift");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("lodash.debounce");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-adopt");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-stripe-checkout");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("next-with-apollo");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(46);


/***/ }),
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(4);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/app"
var app_ = __webpack_require__(21);
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(9);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(14);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__(16);
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// EXTERNAL MODULE: external "downshift"
var external_downshift_ = __webpack_require__(22);
var external_downshift_default = /*#__PURE__*/__webpack_require__.n(external_downshift_);

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__(2);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(3);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: external "lodash.debounce"
var external_lodash_debounce_ = __webpack_require__(24);
var external_lodash_debounce_default = /*#__PURE__*/__webpack_require__.n(external_lodash_debounce_);

// CONCATENATED MODULE: ./components/styles/DropDown.js

var DropDown = external_styled_components_default.a.div.withConfig({
  displayName: "DropDown",
  componentId: "sc-12m16au-0"
})(["position:absolute;width:100%;z-index:2;border:1px solid ", ";"], function (props) {
  return props.theme.lightgrey;
});
var DropDownProduct = external_styled_components_default.a.div.withConfig({
  displayName: "DropDown__DropDownProduct",
  componentId: "sc-12m16au-1"
})(["border-bottom:1px solid ", ";background:", ";padding:1rem;transition:all 0.2s;", ";display:flex;align-items:center;border-left:10px solid ", ";img{margin-right:10px;}"], function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.highlighted ? '#f7f7f7' : 'white';
}, function (props) {
  return props.highlighted ? 'padding-left: 2rem;' : null;
}, function (props) {
  return props.highlighted ? props.theme.lightgrey : 'white';
});
var glow = Object(external_styled_components_["keyframes"])(["from{box-shadow:0 0 0px yellow;}to{box-shadow:0 0 10px 1px yellow;}"]);
var SearchStyles = external_styled_components_default.a.div.withConfig({
  displayName: "DropDown__SearchStyles",
  componentId: "sc-12m16au-2"
})(["position:relative;input{width:100%;padding:10px;border:0;font-size:2rem;&.loading{animation:", " 0.5s ease-in-out infinite alternate;}}"], glow);

// CONCATENATED MODULE: ./components/Search.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query SEARCH_PRODUCTS_QUERY($searchTerm: String!) {\n    products(where: { OR: [{ title_contains: $searchTerm }, { description_contains: $searchTerm }] }) {\n      id\n      image\n      title\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var SEARCH_PRODUCTS_QUERY = external_graphql_tag_default()(_templateObject());

function routeToProduct(product) {
  router_default.a.push({
    pathname: '/product',
    query: {
      id: product.id
    }
  });
}

var Search_AutoComplete =
/*#__PURE__*/
function (_Component) {
  _inherits(AutoComplete, _Component);

  function AutoComplete() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AutoComplete);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AutoComplete)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      products: [],
      loading: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", external_lodash_debounce_default()(
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(e, client) {
        var res;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('Searching...'); // turn loading on

                _this.setState({
                  loading: true
                }); // Manually query apollo client


                _context.next = 4;
                return client.query({
                  query: SEARCH_PRODUCTS_QUERY,
                  variables: {
                    searchTerm: e.target.value
                  }
                });

              case 4:
                res = _context.sent;

                _this.setState({
                  products: res.data.products,
                  loading: false
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }(), 350));

    return _this;
  }

  _createClass(AutoComplete, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      Object(external_downshift_["resetIdCounter"])();
      return external_react_default.a.createElement(SearchStyles, null, external_react_default.a.createElement(external_downshift_default.a, {
        onChange: routeToProduct,
        itemToString: function itemToString(product) {
          return product === null ? '' : product.title;
        }
      }, function (_ref2) {
        var getInputProps = _ref2.getInputProps,
            getItemProps = _ref2.getItemProps,
            isOpen = _ref2.isOpen,
            inputValue = _ref2.inputValue,
            highlightedIndex = _ref2.highlightedIndex;
        return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_react_apollo_["ApolloConsumer"], null, function (client) {
          return external_react_default.a.createElement("input", getInputProps({
            type: 'search',
            placeholder: 'Search For A Product',
            id: 'search',
            className: _this2.state.loading ? 'loading' : '',
            onChange: function onChange(e) {
              e.persist();

              _this2.onChange(e, client);
            }
          }));
        }), isOpen && external_react_default.a.createElement(DropDown, null, _this2.state.products.map(function (product, index) {
          return external_react_default.a.createElement(DropDownProduct, _extends({}, getItemProps({
            product: product
          }), {
            key: product.id,
            highlighted: index === highlightedIndex
          }), external_react_default.a.createElement("img", {
            width: "50",
            src: product.image,
            alt: product.title
          }), product.title);
        }), !_this2.state.products.length && !_this2.state.loading && external_react_default.a.createElement(DropDownProduct, null, " Nothing Found ", inputValue)));
      }));
    }
  }]);

  return AutoComplete;
}(external_react_["Component"]);

/* harmony default export */ var Search = (Search_AutoComplete);
// EXTERNAL MODULE: external "react-adopt"
var external_react_adopt_ = __webpack_require__(25);

// EXTERNAL MODULE: ./components/User.js
var User = __webpack_require__(5);

// CONCATENATED MODULE: ./components/styles/CartStyles.js

var CartStyles = external_styled_components_default.a.div.withConfig({
  displayName: "CartStyles",
  componentId: "qqcs0g-0"
})(["padding:20px;position:relative;background:white;position:fixed;height:100%;top:0;right:0;width:40%;min-width:500px;bottom:0;transform:translateX(100%);transition:all 0.3s;box-shadow:0 0 10px 3px rgba(0,0,0,0.2);z-index:5;display:grid;grid-template-rows:auto 1fr auto;", ";header{border-bottom:5px solid ", ";margin-bottom:2rem;padding-bottom:2rem;}footer{border-top:10px double ", ";margin-top:2rem;padding-top:2rem;display:grid;grid-template-columns:auto auto;align-items:center;font-size:3rem;font-weight:900;p{margin:0;}}ul{margin:0;padding:0;list-style:none;overflow:scroll;}"], function (props) {
  return props.open && "transform: translateX(0);";
}, function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.black;
});
/* harmony default export */ var styles_CartStyles = (CartStyles);
// CONCATENATED MODULE: ./components/styles/Supreme.js

var Supreme = external_styled_components_default.a.h3.withConfig({
  displayName: "Supreme",
  componentId: "sc-1jl5u3o-0"
})(["background:", ";color:white;display:inline-block;padding:4px 5px;transform:skew(-3deg);margin:0;font-size:4rem;"], function (props) {
  return props.theme.green;
});
/* harmony default export */ var styles_Supreme = (Supreme);
// CONCATENATED MODULE: ./components/styles/CloseButton.js

var CloseButton = external_styled_components_default.a.button.withConfig({
  displayName: "CloseButton",
  componentId: "sc-1md9spl-0"
})(["background:black;color:white;font-size:3rem;border:0;position:absolute;z-index:2;right:0;"]);
/* harmony default export */ var styles_CloseButton = (CloseButton);
// EXTERNAL MODULE: ./components/styles/PriceDealButton.js
var PriceDealButton = __webpack_require__(17);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(7);

// EXTERNAL MODULE: ./lib/formatMoney.js
var formatMoney = __webpack_require__(10);

// CONCATENATED MODULE: ./components/RemoveFromCart.js
function RemoveFromCart_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { RemoveFromCart_typeof = function _typeof(obj) { return typeof obj; }; } else { RemoveFromCart_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return RemoveFromCart_typeof(obj); }

function RemoveFromCart_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function RemoveFromCart_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function RemoveFromCart_createClass(Constructor, protoProps, staticProps) { if (protoProps) RemoveFromCart_defineProperties(Constructor.prototype, protoProps); if (staticProps) RemoveFromCart_defineProperties(Constructor, staticProps); return Constructor; }

function RemoveFromCart_possibleConstructorReturn(self, call) { if (call && (RemoveFromCart_typeof(call) === "object" || typeof call === "function")) { return call; } return RemoveFromCart_assertThisInitialized(self); }

function RemoveFromCart_getPrototypeOf(o) { RemoveFromCart_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return RemoveFromCart_getPrototypeOf(o); }

function RemoveFromCart_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) RemoveFromCart_setPrototypeOf(subClass, superClass); }

function RemoveFromCart_setPrototypeOf(o, p) { RemoveFromCart_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return RemoveFromCart_setPrototypeOf(o, p); }

function RemoveFromCart_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function RemoveFromCart_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function RemoveFromCart_templateObject() {
  var data = RemoveFromCart_taggedTemplateLiteral(["\n  mutation removeFromCart($id: ID!) {\n    removeFromCart(id: $id) {\n      id\n    }\n  }\n"]);

  RemoveFromCart_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function RemoveFromCart_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var REMOVE_FROM_CART_MUTATION = external_graphql_tag_default()(RemoveFromCart_templateObject());
var BigButton = external_styled_components_default.a.button.withConfig({
  displayName: "RemoveFromCart__BigButton",
  componentId: "do40rv-0"
})(["font-size:3rem;background:none;border:0;&:hover{color:", ";cursor:pointer;}"], function (props) {
  return props.theme.red;
});

var RemoveFromCart_RemoveFromCart =
/*#__PURE__*/
function (_Component) {
  RemoveFromCart_inherits(RemoveFromCart, _Component);

  function RemoveFromCart() {
    var _getPrototypeOf2;

    var _this;

    RemoveFromCart_classCallCheck(this, RemoveFromCart);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = RemoveFromCart_possibleConstructorReturn(this, (_getPrototypeOf2 = RemoveFromCart_getPrototypeOf(RemoveFromCart)).call.apply(_getPrototypeOf2, [this].concat(args)));

    RemoveFromCart_defineProperty(RemoveFromCart_assertThisInitialized(RemoveFromCart_assertThisInitialized(_this)), "update", function (cache, payload) {
      // 1. first read the cache
      var data = cache.readQuery({
        query: User["a" /* CURRENT_USER_QUERY */]
      }); // 2. remove that Product from the cart

      var cartProductId = payload.data.removeFromCart.id;
      data.me.cart = data.me.cart.filter(function (cartProduct) {
        return cartProduct.id !== cartProductId;
      }); // 3. write it back to the cache

      cache.writeQuery({
        query: User["a" /* CURRENT_USER_QUERY */],
        data: data
      });
    });

    return _this;
  }

  RemoveFromCart_createClass(RemoveFromCart, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_react_apollo_["Mutation"], {
        mutation: REMOVE_FROM_CART_MUTATION,
        variables: {
          id: this.props.id
        },
        update: this.update,
        optimisticResponse: {
          __typename: 'Mutation',
          removeFromCart: {
            __typename: 'CartProduct',
            id: this.props.id
          }
        }
      }, function (removeFromCart, _ref) {
        var loading = _ref.loading,
            error = _ref.error;
        return external_react_default.a.createElement(BigButton, {
          disabled: loading,
          onClick: function onClick() {
            removeFromCart().catch(function (err) {
              return alert(err.message);
            });
          },
          title: "Delete Product"
        }, "\xD7");
      });
    }
  }]);

  return RemoveFromCart;
}(external_react_["Component"]);

/* harmony default export */ var components_RemoveFromCart = (RemoveFromCart_RemoveFromCart);

// CONCATENATED MODULE: ./components/CartProduct.js





var CartProductStyles = external_styled_components_default.a.li.withConfig({
  displayName: "CartProduct__CartProductStyles",
  componentId: "sc-18290wr-0"
})(["padding:1rem 0;border-bottom:1px solid ", ";display:grid;align-items:center;grid-template-columns:auto 1fr auto;img{margin-right:10px;}h3,p{margin:0;}"], function (props) {
  return props.theme.lightgrey;
});

var CartProduct_CartProduct = function CartProduct(_ref) {
  var cartProduct = _ref.cartProduct;
  // first check if that product exists
  if (!cartProduct.product) return external_react_default.a.createElement(CartProductStyles, null, external_react_default.a.createElement("p", null, "This product has been removed"), external_react_default.a.createElement(components_RemoveFromCart, {
    id: cartProduct.id
  }));
  return external_react_default.a.createElement(CartProductStyles, null, external_react_default.a.createElement("img", {
    width: "100",
    src: cartProduct.product.image,
    alt: cartProduct.product.title
  }), external_react_default.a.createElement("div", {
    className: "cart-item-details"
  }, external_react_default.a.createElement("h3", null, cartProduct.product.title), external_react_default.a.createElement("p", null, Object(formatMoney["a" /* default */])(cartProduct.product.price * cartProduct.quantity), ' - ', external_react_default.a.createElement("em", null, cartProduct.quantity, " \xD7 ", Object(formatMoney["a" /* default */])(cartProduct.product.price), " each"))), external_react_default.a.createElement(components_RemoveFromCart, {
    id: cartProduct.id
  }));
};

/* harmony default export */ var components_CartProduct = (CartProduct_CartProduct);
// CONCATENATED MODULE: ./lib/calcTotalPrice.js
function calcTotalPrice(cart) {
  return cart.reduce(function (tally, cartProduct) {
    if (!cartProduct.product) return tally;
    return tally + cartProduct.quantity * cartProduct.product.price;
  }, 0);
}
// EXTERNAL MODULE: external "react-stripe-checkout"
var external_react_stripe_checkout_ = __webpack_require__(26);
var external_react_stripe_checkout_default = /*#__PURE__*/__webpack_require__.n(external_react_stripe_checkout_);

// EXTERNAL MODULE: ./components/ErrorMessage.js
var ErrorMessage = __webpack_require__(6);

// CONCATENATED MODULE: ./components/PaymentProcessing.js


function PaymentProcessing_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PaymentProcessing_typeof = function _typeof(obj) { return typeof obj; }; } else { PaymentProcessing_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PaymentProcessing_typeof(obj); }

function PaymentProcessing_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function PaymentProcessing_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { PaymentProcessing_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { PaymentProcessing_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function PaymentProcessing_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PaymentProcessing_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PaymentProcessing_createClass(Constructor, protoProps, staticProps) { if (protoProps) PaymentProcessing_defineProperties(Constructor.prototype, protoProps); if (staticProps) PaymentProcessing_defineProperties(Constructor, staticProps); return Constructor; }

function PaymentProcessing_possibleConstructorReturn(self, call) { if (call && (PaymentProcessing_typeof(call) === "object" || typeof call === "function")) { return call; } return PaymentProcessing_assertThisInitialized(self); }

function PaymentProcessing_getPrototypeOf(o) { PaymentProcessing_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PaymentProcessing_getPrototypeOf(o); }

function PaymentProcessing_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) PaymentProcessing_setPrototypeOf(subClass, superClass); }

function PaymentProcessing_setPrototypeOf(o, p) { PaymentProcessing_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PaymentProcessing_setPrototypeOf(o, p); }

function PaymentProcessing_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PaymentProcessing_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function PaymentProcessing_templateObject() {
  var data = PaymentProcessing_taggedTemplateLiteral(["\n  mutation createOrder($token: String!) {\n    createOrder(token: $token) {\n      id\n      charge\n      total\n      products {\n        id\n        title\n      }\n    }\n  }\n"]);

  PaymentProcessing_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function PaymentProcessing_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }











var CREATE_ORDER_MUTATION = external_graphql_tag_default()(PaymentProcessing_templateObject());

function totalProducts(cart) {
  return cart.reduce(function (tally, cartProduct) {
    return tally + cartProduct.quantity;
  }, 0);
}

var PaymentProcessing_PaymentProcessing =
/*#__PURE__*/
function (_Component) {
  PaymentProcessing_inherits(PaymentProcessing, _Component);

  function PaymentProcessing() {
    var _getPrototypeOf2;

    var _this;

    PaymentProcessing_classCallCheck(this, PaymentProcessing);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = PaymentProcessing_possibleConstructorReturn(this, (_getPrototypeOf2 = PaymentProcessing_getPrototypeOf(PaymentProcessing)).call.apply(_getPrototypeOf2, [this].concat(args)));

    PaymentProcessing_defineProperty(PaymentProcessing_assertThisInitialized(PaymentProcessing_assertThisInitialized(_this)), "onToken",
    /*#__PURE__*/
    function () {
      var _ref = PaymentProcessing_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(res, createOrder) {
        var order;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('On Token');
                console.log(res.id);
                external_nprogress_default.a.start(); // manually call the mutation once we have the stripe token

                _context.next = 5;
                return createOrder({
                  variables: {
                    token: res.id
                  }
                }).catch(function (err) {
                  alert(err.message);
                });

              case 5:
                order = _context.sent;
                router_default.a.push({
                  pathname: '/order',
                  query: {
                    id: order.data.createOrder.id
                  }
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  PaymentProcessing_createClass(PaymentProcessing, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement(User["b" /* default */], null, function (_ref2) {
        var me = _ref2.data.me,
            loading = _ref2.loading;
        if (loading) return null;
        return external_react_default.a.createElement(external_react_apollo_["Mutation"], {
          mutation: CREATE_ORDER_MUTATION,
          refetchQueries: [{
            query: User["a" /* CURRENT_USER_QUERY */]
          }]
        }, function (createOrder) {
          return external_react_default.a.createElement(external_react_stripe_checkout_default.a, {
            amount: calcTotalPrice(me.cart),
            name: "Price Deals",
            description: "Order of ".concat(totalProducts(me.cart), " Products"),
            image: me.cart[0].product && me.cart[0].product.image,
            stripeKey: "pk_test_xaGcexh6613z9GmfH5kvDMXy",
            currency: "USD",
            email: me.email,
            token: function token(res) {
              return _this2.onToken(res, createOrder);
            }
          }, _this2.props.children);
        });
      });
    }
  }]);

  return PaymentProcessing;
}(external_react_["Component"]);

/* harmony default export */ var components_PaymentProcessing = (PaymentProcessing_PaymentProcessing);

// CONCATENATED MODULE: ./components/Cart.js
function _templateObject2() {
  var data = Cart_taggedTemplateLiteral(["\n  mutation {\n    toggleCart @client\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Cart_templateObject() {
  var data = Cart_taggedTemplateLiteral(["\n    query {\n        cartOpen @client\n    }\n"]);

  Cart_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Cart_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }














var LOCAL_STATE_QUERY = external_graphql_tag_default()(Cart_templateObject());
var TOGGLE_CART_MUTATION = external_graphql_tag_default()(_templateObject2());
/* eslint-disable */

var Composed = Object(external_react_adopt_["adopt"])({
  user: function user(_ref) {
    var render = _ref.render;
    return external_react_default.a.createElement(User["b" /* default */], null, render);
  },
  toggleCart: function toggleCart(_ref2) {
    var render = _ref2.render;
    return external_react_default.a.createElement(external_react_apollo_["Mutation"], {
      mutation: TOGGLE_CART_MUTATION
    }, render);
  },
  localState: function localState(_ref3) {
    var render = _ref3.render;
    return external_react_default.a.createElement(external_react_apollo_["Query"], {
      query: LOCAL_STATE_QUERY
    }, render);
  }
});
/* eslint-enable */

var Cart_Cart = function Cart() {
  return external_react_default.a.createElement(Composed, null, function (_ref4) {
    var user = _ref4.user,
        toggleCart = _ref4.toggleCart,
        localState = _ref4.localState;
    var me = user.data.me;
    if (!me) return null;
    return external_react_default.a.createElement(styles_CartStyles, {
      open: localState.data.cartOpen
    }, external_react_default.a.createElement("header", null, external_react_default.a.createElement(styles_CloseButton, {
      onClick: toggleCart,
      title: "close"
    }, "\xD7"), external_react_default.a.createElement(styles_Supreme, null, me.name, "'s Cart"), external_react_default.a.createElement("p", null, "You have ", me.cart.length, " Product", me.cart.length === 1 ? "" : "s", " in your cart...")), external_react_default.a.createElement("ul", null, me.cart.map(function (cartProduct) {
      return external_react_default.a.createElement(components_CartProduct, {
        key: cartProduct.id,
        cartProduct: cartProduct
      });
    })), external_react_default.a.createElement("footer", null, external_react_default.a.createElement("p", null, Object(formatMoney["a" /* default */])(calcTotalPrice(me.cart))), me.cart.length && external_react_default.a.createElement(components_PaymentProcessing, null, external_react_default.a.createElement(PriceDealButton["a" /* default */], null, "Checkout"))));
  });
}; // const Cart = () => (
//     <User>{({ data: { me }}) => {
//         if(!me) return null;
//         console.log(me);
//         return (
//             <Mutation mutation={TOGGLE_CART_MUTATION}>
//                 {toggleCart => (
//                     <Query query={LOCAL_STATE_QUERY}>
//                         {({ data }) => (
//                             <CartStyles open={data.cartOpen}>
//                                 <header>
//                                     <CloseButton onClick={toggleCart} title="close">&times;</CloseButton>
//                                     <Supreme>{me.name}'s Cart</Supreme>
//                                     <p>You have {me.cart.length} Product{me.cart.length === 1 ? "" : "s"} in your cart...</p>
//                                 </header>
//                                 <ul>
//                                     {me.cart.map(cartProduct => <CartProduct key={cartProduct.id} cartProduct={cartProduct} />)}
//                                 </ul>
//                                 <footer>
//                                     <p>{formatMoney(calcTotalPrice(me.cart))}</p>
//                                     <PriceDealButton>Checkout</PriceDealButton>
//                                 </footer>
//                         </CartStyles>
//                         )}
//                     </Query>
//                 )}
//             </Mutation>
//         )
//     }}</User>
//);


/* harmony default export */ var components_Cart = (Cart_Cart);

// CONCATENATED MODULE: ./components/styles/NavStyles.js

var NavStyles = external_styled_components_default.a.ul.withConfig({
  displayName: "NavStyles",
  componentId: "v8kjwr-0"
})(["margin:0;padding:0;display:flex;justify-self:end;font-size:2rem;a,button{padding:1rem 3rem;display:flex;align-items:center;position:relative;text-transform:uppercase;font-weight:900;font-size:1em;background:none;border:0;cursor:pointer;@media (max-width:700px){font-size:10px;padding:0 10px;}&:before{content:'';width:2px;background:", ";height:100%;left:0;position:absolute;transform:skew(-20deg);top:0;bottom:0;}&:after{height:2px;background:red;content:'';width:0;position:absolute;transform:translateX(-50%);transition:width 0.4s;transition-timing-function:cubic-bezier(1,-0.65,0,2.31);left:50%;margin-top:2rem;}&:hover,&:focus{outline:none;&:after{width:calc(100% - 60px);}@media (max-width:700px){width:calc(100% - 10px);}}}@media (max-width:1300px){border-top:1px solid ", ";width:100%;justify-content:center;font-size:1.5rem;}"], function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.theme.lightgrey;
});
/* harmony default export */ var styles_NavStyles = (NavStyles);
// CONCATENATED MODULE: ./components/Signout.js
function Signout_templateObject() {
  var data = Signout_taggedTemplateLiteral(["\n  mutation SIGN_OUT_MUTATION {\n    signout {\n      message\n    }\n  }\n"]);

  Signout_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Signout_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var SIGN_OUT_MUTATION = external_graphql_tag_default()(Signout_templateObject());

var Signout_Signout = function Signout(props) {
  return external_react_default.a.createElement(external_react_apollo_["Mutation"], {
    mutation: SIGN_OUT_MUTATION,
    refetchQueries: [{
      query: User["a" /* CURRENT_USER_QUERY */]
    }]
  }, function (signout) {
    return external_react_default.a.createElement("button", {
      onClick: signout
    }, "Sign Out");
  });
};

/* harmony default export */ var components_Signout = (Signout_Signout);
// EXTERNAL MODULE: external "react-transition-group"
var external_react_transition_group_ = __webpack_require__(23);

// CONCATENATED MODULE: ./components/CartCount.js




var AnimationStyles = external_styled_components_default.a.span.withConfig({
  displayName: "CartCount__AnimationStyles",
  componentId: "sc-16jkz4-0"
})(["position:relative;.count{display:block;position:relative;transition:all 0.4s;backface-visibility:hidden;}.count-enter{transform:scale(4) rotateX(0.5turn);}.count-enter-active{transform:rotateX(0);}.count-exit{top:0;position:absolute;transform:rotateX(0);}.count-exit-active{transform:scale(4) rotateX(0.5turn);}"]);
var Dot = external_styled_components_default.a.div.withConfig({
  displayName: "CartCount__Dot",
  componentId: "sc-16jkz4-1"
})(["background:", ";color:white;border-radius:50%;padding:0.5rem;line-height:2rem;min-width:3rem;margin-left:1rem;font-weight:100;font-feature-settings:'tnum';font-variant-numeric:tabular-nums;"], function (props) {
  return props.theme.green;
});

var CartCount_CartCount = function CartCount(_ref) {
  var count = _ref.count;
  return external_react_default.a.createElement(AnimationStyles, null, external_react_default.a.createElement(external_react_transition_group_["TransitionGroup"], null, external_react_default.a.createElement(external_react_transition_group_["CSSTransition"], {
    unmountOnExit: true,
    className: "count",
    classNames: "count",
    key: count,
    timeout: {
      enter: 400,
      exit: 400
    }
  }, external_react_default.a.createElement(Dot, null, count))));
};

/* harmony default export */ var components_CartCount = (CartCount_CartCount);
// CONCATENATED MODULE: ./components/Nav.js









var Nav_Nav = function Nav() {
  return external_react_default.a.createElement(User["b" /* default */], null, function (_ref) {
    var me = _ref.data.me;
    return external_react_default.a.createElement(styles_NavStyles, {
      "data-test": "nav"
    }, external_react_default.a.createElement(link_default.a, {
      href: "/products"
    }, external_react_default.a.createElement("a", null, "Store")), me && external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(link_default.a, {
      href: "/sell"
    }, external_react_default.a.createElement("a", null, "Sell")), external_react_default.a.createElement(link_default.a, {
      href: "/orders"
    }, external_react_default.a.createElement("a", null, "Orders")), external_react_default.a.createElement(link_default.a, {
      href: "/me"
    }, external_react_default.a.createElement("a", null, "Account")), external_react_default.a.createElement(components_Signout, null), external_react_default.a.createElement(external_react_apollo_["Mutation"], {
      mutation: TOGGLE_CART_MUTATION
    }, function (toggleCart) {
      return external_react_default.a.createElement("button", {
        onClick: toggleCart
      }, "My Cart ", external_react_default.a.createElement(components_CartCount, {
        count: me.cart.reduce(function (tally, cartProduct) {
          return tally + cartProduct.quantity;
        }, 0)
      }));
    })), !me && external_react_default.a.createElement(link_default.a, {
      href: "/signup"
    }, external_react_default.a.createElement("a", null, "Signup")));
  });
};

/* harmony default export */ var components_Nav = (Nav_Nav);
// CONCATENATED MODULE: ./components/Header.js









router_default.a.onRouteChangeStart = function () {
  external_nprogress_default.a.start();
};

router_default.a.onRouteChangeComplete = function () {
  external_nprogress_default.a.done();
};

router_default.a.onRouteChangeError = function () {
  external_nprogress_default.a.done();
};

var Logo = external_styled_components_default.a.h1.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-12rlau9-0"
})(["font-size = 4rem;margin-left = 2rem;position:relative;z-index:2;transform:skew(-7deg);a{padding:0.5rem 1rem;background:", ";color:white;text-transform:uppercase;text-decoration:none;}@media(max-width:900px){margin:0;text-align:center;}"], function (props) {
  return props.theme.green;
});
var StyleHeader = external_styled_components_default.a.header.withConfig({
  displayName: "Header__StyleHeader",
  componentId: "sc-12rlau9-1"
})([".bar{border-bottom:10px solid ", ";display:grid;grid-template-columns:auto 1fr;justify-content:space-between;align-items:stretch;@media (max-width:900px){grid-template-columns:1fr;justify-content:center;}}.sub-bar{display:grid;grid-template-columns:1fr auto;border-bottom:1px solid ", ";}"], function (props) {
  return props.theme.lightGreen;
}, function (props) {
  return props.theme.lightgrey;
});

var Header_Header = function Header() {
  return external_react_default.a.createElement(StyleHeader, null, external_react_default.a.createElement("div", {
    className: "bar"
  }, external_react_default.a.createElement(Logo, null, external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement("a", null, "Price Deal"))), external_react_default.a.createElement(components_Nav, null)), external_react_default.a.createElement("div", {
    className: "sub-bar"
  }, external_react_default.a.createElement(Search, null)), external_react_default.a.createElement(components_Cart, null));
};

/* harmony default export */ var components_Header = (Header_Header);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(12);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Meta.js



var Meta_Meta = function Meta() {
  return external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), external_react_default.a.createElement("meta", {
    charSet: "utf-8"
  }), external_react_default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/favicon.png"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/nprogress.css"
  }), external_react_default.a.createElement("title", null, "Price Deal!"));
};

/* harmony default export */ var components_Meta = (Meta_Meta);
// CONCATENATED MODULE: ./components/Page.js
function Page_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Page_typeof = function _typeof(obj) { return typeof obj; }; } else { Page_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Page_typeof(obj); }

function Page_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Page_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Page_createClass(Constructor, protoProps, staticProps) { if (protoProps) Page_defineProperties(Constructor.prototype, protoProps); if (staticProps) Page_defineProperties(Constructor, staticProps); return Constructor; }

function Page_possibleConstructorReturn(self, call) { if (call && (Page_typeof(call) === "object" || typeof call === "function")) { return call; } return Page_assertThisInitialized(self); }

function Page_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Page_getPrototypeOf(o) { Page_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Page_getPrototypeOf(o); }

function Page_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Page_setPrototypeOf(subClass, superClass); }

function Page_setPrototypeOf(o, p) { Page_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Page_setPrototypeOf(o, p); }

function Page_templateObject() {
  var data = Page_taggedTemplateLiteral(["\n  @font-face {\n    font-family: 'radnika_next';\n    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');\n    font-weight: normal;\n    font-style: normal;\n  }\n  html{\n    box-sizing: border-box;\n    font-size: 10px;\n  }\n  *, *:before, *:after{\n    box-sizing: inherit;\n  }\n  body{\n    font-family: 'radnika_next';\n    padding: 0;\n    margin: 0;\n    font-size: 1.5rem;\n    line-height: 2;\n\n  }\n  a{\n    text-decoration: none;\n    color: ", ";\n  }\n"]);

  Page_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Page_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var theme = {
  green: '#519798',
  black: '#393939',
  lightGreen: '#e8efee',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
};
var StylePage = external_styled_components_default.a.div.withConfig({
  displayName: "Page__StylePage",
  componentId: "sc-1s1vebp-0"
})(["background:white;color:", ";"], function (props) {
  return props.theme.black;
});
var Inner = external_styled_components_default.a.div.withConfig({
  displayName: "Page__Inner",
  componentId: "sc-1s1vebp-1"
})(["max-width = ", ";margin:0 auto;padding:2rem;"], function (props) {
  return props.theme.maxwidth;
});
Object(external_styled_components_["injectGlobal"])(Page_templateObject(), theme.black);

var Page_Page =
/*#__PURE__*/
function (_Component) {
  Page_inherits(Page, _Component);

  function Page() {
    Page_classCallCheck(this, Page);

    return Page_possibleConstructorReturn(this, Page_getPrototypeOf(Page).apply(this, arguments));
  }

  Page_createClass(Page, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_styled_components_["ThemeProvider"], {
        theme: theme
      }, external_react_default.a.createElement(StylePage, null, external_react_default.a.createElement(components_Meta, null), external_react_default.a.createElement(components_Header, null), external_react_default.a.createElement(Inner, null, this.props.children)));
    }
  }]);

  return Page;
}(external_react_["Component"]);

/* harmony default export */ var components_Page = (Page_Page);
// EXTERNAL MODULE: external "next-with-apollo"
var external_next_with_apollo_ = __webpack_require__(27);
var external_next_with_apollo_default = /*#__PURE__*/__webpack_require__.n(external_next_with_apollo_);

// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__(28);
var external_apollo_boost_default = /*#__PURE__*/__webpack_require__.n(external_apollo_boost_);

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(11);

// CONCATENATED MODULE: ./lib/withData.js





function createClient(_ref) {
  var headers = _ref.headers;
  return new external_apollo_boost_default.a({
    uri:  false ? undefined : config["prodEndpoint"],
    request: function request(operation) {
      operation.setContext({
        fetchOptions: {
          credentials: 'include'
        },
        headers: headers
      });
    },
    //local data
    clientState: {
      resolvers: {
        Mutation: {
          toggleCart: function toggleCart(_, variables, _ref2) {
            var cache = _ref2.cache;

            // read the cartOpen value from the cache
            var _cache$readQuery = cache.readQuery({
              query: LOCAL_STATE_QUERY
            }),
                cartOpen = _cache$readQuery.cartOpen; // Write the cart State to the opposite


            var data = {
              data: {
                cartOpen: !cartOpen
              }
            };
            cache.writeData(data);
            return data;
          }
        }
      },
      defaults: {
        cartOpen: false
      }
    }
  });
}

/* harmony default export */ var withData = (external_next_with_apollo_default()(createClient));
// CONCATENATED MODULE: ./pages/_app.js



function _app_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _app_typeof = function _typeof(obj) { return typeof obj; }; } else { _app_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _app_typeof(obj); }

function _app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _app_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { _app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { _app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _app_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _app_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _app_createClass(Constructor, protoProps, staticProps) { if (protoProps) _app_defineProperties(Constructor.prototype, protoProps); if (staticProps) _app_defineProperties(Constructor, staticProps); return Constructor; }

function _app_possibleConstructorReturn(self, call) { if (call && (_app_typeof(call) === "object" || typeof call === "function")) { return call; } return _app_assertThisInitialized(self); }

function _app_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _app_getPrototypeOf(o) { _app_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _app_getPrototypeOf(o); }

function _app_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _app_setPrototypeOf(subClass, superClass); }

function _app_setPrototypeOf(o, p) { _app_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _app_setPrototypeOf(o, p); }






var _app_MyApp =
/*#__PURE__*/
function (_App) {
  _app_inherits(MyApp, _App);

  function MyApp() {
    _app_classCallCheck(this, MyApp);

    return _app_possibleConstructorReturn(this, _app_getPrototypeOf(MyApp).apply(this, arguments));
  }

  _app_createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          apollo = _this$props.apollo,
          pageProps = _this$props.pageProps;
      return external_react_default.a.createElement(app_["Container"], null, external_react_default.a.createElement(external_react_apollo_["ApolloProvider"], {
        client: apollo
      }, external_react_default.a.createElement(components_Page, null, external_react_default.a.createElement(Component, pageProps))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _app_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                pageProps.query = ctx.query;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return MyApp;
}(app_default.a);

/* harmony default export */ var _app = __webpack_exports__["default"] = (withData(_app_MyApp));

/***/ })
/******/ ]);