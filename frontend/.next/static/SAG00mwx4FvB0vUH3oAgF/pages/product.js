(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{23:function(e,t,n){e.exports=n(57)},351:function(e,t,n){__NEXT_REGISTER_PAGE("/product",function(){return e.exports=n(371),{page:e.exports.default}})},371:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(3),a=n.n(i),u=n(1),c=n(9),l=n(2),f=n(23),p=n.n(f);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  query SINGLE_PRODUCT_QUERY($id: ID!) {\n    product(where: { id: $id }) {\n      id\n      title\n      description\n      largeImage\n    }\n  }\n"]);return g=function(){return e},e}var h=l.b.div.withConfig({displayName:"SingleProduct__SingleProductStyles",componentId:"sc-1grbzkc-0"})(["max-width:1200px;margin:2rem auto;box-shadow:",";display:grid;grid-auto-columns:1fr;grid-auto-flow:column;min-height:800px;img{width:100%;height:100%;object-fit:contain;}.details{margin:3rem;font-size:2rem;}"],function(e){return e.theme.bs}),w=a()(g()),E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,y(t).apply(this,arguments))}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){return o.a.createElement(u.Query,{query:w,variables:{id:this.props.id}},function(e){var t=e.error,n=e.loading,r=e.data;if(t)return o.a.createElement(c.a,{error:t});if(n)return o.a.createElement("p",null,"Loading...");var i=r.product;return o.a.createElement(h,null,o.a.createElement(p.a,null,o.a.createElement("title",null,"Price Deal | ",i.title)),o.a.createElement("img",{src:i.largeImage,alt:i.title}),o.a.createElement("div",{className:"details"},o.a.createElement("h2",null,"Viewing ",i.title),o.a.createElement("p",null,i.description)))})}}])&&d(n.prototype,i),a&&d(n,a),t}();t.default=function(e){return o.a.createElement("div",null,o.a.createElement(E,{id:e.query.id}))}}},[[351,1,0]]]);