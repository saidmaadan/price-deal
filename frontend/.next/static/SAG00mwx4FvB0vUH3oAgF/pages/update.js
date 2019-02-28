(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{26:function(e,t,n){e.exports=n(37)},357:function(e,t,n){__NEXT_REGISTER_PAGE("/update",function(){return e.exports=n(372),{page:e.exports.default}})},372:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(5),a=n.n(o),c=n(1),u=n(3),l=n.n(u),p=(n(26),n(13)),d=(n(16),n(9));function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){v(e,t,n[t])})}return e}function m(e,t,n,r,i,o,a){try{var c=e[o](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,i)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(){var e=w(["\n    mutation UPDATE_PRODUCT_MUTATION(\n        $id: ID!,\n        $title: String\n        $description: String\n        $price: Int\n        $originalPrice: Int\n        $discount: Int\n    ) {\n    updateProduct(\n        id: $id,\n        title: $title\n        description: $description\n        discount: $discount\n        originalPrice: $originalPrice\n        price: $price    \n      \n    ) {\n        id\n        title\n        description\n        discount\n        originalPrice\n        price\n    }\n  }\n"]);return E=function(){return e},e}function P(){var e=w(["\n  query SINGLE_PRODUCT_QUERY($id: ID!) {\n    product(where: { id: $id }) {\n      id\n      title\n      description\n      originalPrice\n      discount\n      price\n    }\n  }\n"]);return P=function(){return e},e}function w(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var O=l()(P()),_=l()(E()),j=function(e){function t(){var e,n,r,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,c=new Array(o),u=0;u<o;u++)c[u]=arguments[u];return r=this,i=(e=h(t)).call.apply(e,[this].concat(c)),n=!i||"object"!==s(i)&&"function"!=typeof i?g(r):i,v(g(g(n)),"state",{}),v(g(g(n)),"handleChange",function(e){var t=e.target,r=t.name,i=t.type,o=t.value,a="number"===i?parseFloat(o):o;n.setState(v({},r,a))}),v(g(g(n)),"updateProduct",function(){var e,t=(e=a.a.mark(function e(t,r){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("Updating Product!!"),console.log(n.state),e.next=5,r({variables:f({id:n.props.id},n.state)});case 5:e.sent,console.log("Updated!!");case 7:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,i){var o=e.apply(t,n);function a(e){m(o,r,i,a,c,"next",e)}function c(e){m(o,r,i,a,c,"throw",e)}a(void 0)})});return function(e,n){return t.apply(this,arguments)}}()),n}var n,o,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r["Component"]),n=t,(o=[{key:"render",value:function(){var e=this;return i.a.createElement(c.Query,{query:O,variables:{id:this.props.id}},function(t){var n=t.data;return t.loading?i.a.createElement("p",null,"Loading..."):n.product?i.a.createElement(c.Mutation,{mutation:_,variables:e.state},function(t,r){var o=r.loading,a=r.error;return i.a.createElement(p.a,{onSubmit:function(n){return e.updateProduct(n,t)}},i.a.createElement(d.a,{error:a}),i.a.createElement("fieldset",{disabled:o,"aria-busy":o},i.a.createElement("label",{htmlFor:"title"},"Title",i.a.createElement("input",{type:"text",id:"title",name:"title",placeholder:"Title",required:!0,defaultValue:n.product.title,onChange:e.handleChange})),i.a.createElement("label",{htmlFor:"description"},"Description",i.a.createElement("textarea",{id:"description",name:"description",placeholder:"Enter A Description",required:!0,defaultValue:n.product.description,onChange:e.handleChange})),i.a.createElement("label",{htmlFor:"originalprice"},"Original Price",i.a.createElement("input",{type:"number",id:"originalPrice",name:"originalPrice",placeholder:"originalPrice",required:!0,defaultValue:n.product.originalPrice,onChange:e.handleChange})),i.a.createElement("label",{htmlFor:"discount"},"Discount",i.a.createElement("input",{type:"number",id:"discount",name:"discount",placeholder:"discount",required:!0,defaultValue:n.product.discount,onChange:e.handleChange})),i.a.createElement("label",{htmlFor:"price"},"Price",i.a.createElement("input",{type:"number",id:"price",name:"price",placeholder:"Price",required:!0,defaultValue:n.product.price,onChange:e.handleChange})),i.a.createElement("button",{type:"submit"},"Update")))}):i.a.createElement("p",null,"No product Found for ID ",e.props.id)})}}])&&b(n.prototype,o),u&&b(n,u),t}();t.default=function(e){var t=e.query;return i.a.createElement("div",null,i.a.createElement(j,{id:t.id}))}}},[[357,1,0]]]);