const { forwardTo } = require('prisma-binding');
const { hasPermission } = require('../utils');

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
    async users(parent, args, ctx, info) {
        // 1. Check if they are logged in
        if (!ctx.request.userId) {
          throw new Error('You must be logged in!');
        }
        console.log(ctx.request.userId);
        // 2. Check if the user has the permissions to query all the users
        hasPermission(ctx.request.user, ['ADMIN', 'PERMISSIONUPDATE']);
    
        // 2. if they do, query all the users!
        return ctx.db.query.users({}, info);
      },
    // async products(parent, args, ctx, info){
    //     const products = await ctx.db.query.products();
    //     return products;
    // }
};

module.exports = Query;
