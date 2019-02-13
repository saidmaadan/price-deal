webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Cart.js":
/*!****************************!*\
  !*** ./components/Cart.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_CartStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/CartStyles */ "./components/styles/CartStyles.js");
/* harmony import */ var _styles_Supreme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/Supreme */ "./components/styles/Supreme.js");
/* harmony import */ var _styles_CloseButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/CloseButton */ "./components/styles/CloseButton.js");
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");
var _jsxFileName = "/Users/sm/code/projects/WORKS/REACT/Price-Deal/frontend/components/Cart.js";
 // import { Query, Mutation } from 'react-apollo';
// import gql from 'graphql-tag';
// import { adopt } from 'react-adopt';
// import User from './User';




 // import CartProduct from './CartProduct';
// import calcTotalPrice from '../lib/calcTotalPrice';
// import formatMoney from '../lib/formatMoney';
// import TakeMyMoney from './TakeMyMoney';
// const LOCAL_STATE_QUERY = gql`
//   query {
//     cartOpen @client
//   }
// `;
// const TOGGLE_CART_MUTATION = gql`
//   mutation {
//     toggleCart @client
//   }
// `;
// /* eslint-disable */
// const Composed = adopt({
//   user: ({ render }) => <User>{render}</User>,
//   toggleCart: ({ render }) => <Mutation mutation={TOGGLE_CART_MUTATION}>{render}</Mutation>,
//   localState: ({ render }) => <Query query={LOCAL_STATE_QUERY}>{render}</Query>,
// });
// /* eslint-enable */
// const Cart = () => (
//   <Composed>
//     {({ user, toggleCart, localState }) => {
//       const me = user.data.me;
//       if (!me) return null;
//       return (
//         <CartStyles open={localState.data.cartOpen}>
//           <header>
//             <CloseButton onClick={toggleCart} title="close">
//               &times;
//             </CloseButton>
//             <Supreme>{me.name}'s Cart</Supreme>
//             <p>
//               You Have {me.cart.length} Product{me.cart.length === 1 ? '' : 's'} in your cart.
//             </p>
//           </header>
//           <ul>{me.cart.map(cartProduct => <CartProduct key={cartProduct.id} cartProduct={cartProduct} />)}</ul>
//           <footer>
//             <p>{formatMoney(calcTotalPrice(me.cart))}</p>
//             {me.cart.length && (
//               <TakeMyMoney>
//                 <SickButton>Checkout</SickButton>
//               </TakeMyMoney>
//             )}
//           </footer>
//         </CartStyles>
//       );
//     }}
//   </Composed>
// );

var Cart = function Cart() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_CartStyles__WEBPACK_IMPORTED_MODULE_1__["default"], {
    open: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_CloseButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Supreme__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Your Cart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "You have __")));
};

/* harmony default export */ __webpack_exports__["default"] = (Cart); // export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION };

/***/ })

})
//# sourceMappingURL=_app.js.767160a6fa343c9f33ee.hot-update.js.map