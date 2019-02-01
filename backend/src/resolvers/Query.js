const { forwardTo } = require('prisma-binding');

const Query = {
    products: forwardTo('db'),
    product: forwardTo('db'),
    productsConnection: forwardTo('db')
    // async products(parent, args, ctx, info){
    //     const products = await ctx.db.query.products();
    //     return products;
    // }
};

module.exports = Query;
