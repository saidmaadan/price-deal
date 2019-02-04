const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
    async signup(parent, args, ctx, info){
        // lowercase their email
        args.email = args.email.toLowerCase();
        // hash their password
        const password = await bcrypt.hash(args.password, 10);
        // create the user in the database
        const user = await ctx.db.mutation.createUser(
            {
                data: {
                ...args,
                password,
                permissions: { set: ['USER'] },
                },
            },
            info
        );
        // create the JWT token for them
        const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
        // We set the jwt as a cookie on the response
        ctx.response.cookie('token', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
        });
        // Finalllllly we return the user to the browser
        return user;
    }

};

module.exports = Mutations;
