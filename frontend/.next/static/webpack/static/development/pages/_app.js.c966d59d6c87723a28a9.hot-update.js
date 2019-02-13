webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Cart.js":
/*!****************************!*\
  !*** ./components/Cart.js ***!
  \****************************/
/*! exports provided: default, LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STATE_QUERY", function() { return LOCAL_STATE_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_CART_MUTATION", function() { return TOGGLE_CART_MUTATION; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_CartStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/CartStyles */ "./components/styles/CartStyles.js");
/* harmony import */ var _styles_Supreme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/Supreme */ "./components/styles/Supreme.js");
/* harmony import */ var _styles_CloseButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/CloseButton */ "./components/styles/CloseButton.js");
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");
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

/* harmony default export */ __webpack_exports__["default"] = (Cart);


/***/ })

})
//# sourceMappingURL=_app.js.c966d59d6c87723a28a9.hot-update.js.map