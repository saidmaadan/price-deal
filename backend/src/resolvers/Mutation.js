const Mutations = {
    async createProduct(parent, args, ctx, info){
        const product = await ctx.db.mutation.createProduct({
            data:{
                ...args
            }
        }, info);
        return product
    },

    updateProduct(parent, args, ctx, info) {
        // first take a copy of the updates
        const updates = { ...args };
        // remove the ID from the updates
        delete updates.id;
        // run the update method
        return ctx.db.mutation.updateProduct(
          {
            data: updates,
            where: {
              id: args.id,
            },
          },
          info
        );
    },

    async deleteProduct(parent, args, ctx, info) {
        const where = { id: args.id };
        // 1. find the Product
        const product = await ctx.db.query.product({ where }, `{ id title }`);
        // 2. Check if they own that product, or have the permissions
        
    
        // 3. Delete it!
        return ctx.db.mutation.deleteProduct({ where }, info);
      },

};

module.exports = Mutations;
