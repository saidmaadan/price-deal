const { forwardTo } = require('prisma-binding');

const Query = {
    products: forwardTo('db'),
    products: forwardTo('db')
    // async products(parent, args, ctx, info){
    //     const products = await ctx.db.query.products();
    //     return products;
    // }
};

module.exports = Query;
