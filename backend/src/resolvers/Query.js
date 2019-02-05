const { forwardTo } = require('prisma-binding');

const Query = {
    products: forwardTo('db'),
    product: forwardTo('db'),
    productsConnection: forwardTo('db'),
    me(parent, args, ctx, info) {
        // check if there is a current user ID
        if (!ctx.request.userId) {
          return null;
        }
        return ctx.db.query.user(
          {
            where: { id: ctx.request.userId },
          },
          info
        );
    },
    // async products(parent, args, ctx, info){
    //     const products = await ctx.db.query.products();
    //     return products;
    // }
};

module.exports = Query;
