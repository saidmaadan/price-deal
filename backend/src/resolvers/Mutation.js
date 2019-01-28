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
      }
};

module.exports = Mutations;
