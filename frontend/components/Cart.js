import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import User from './User';
import CartStyles from './styles/CartStyles';
import Supreme from './styles/Supreme';
import CloseButton from './styles/CloseButton';
import PriceDealButton from './styles/PriceDealButton';
import CartProduct from './CartProduct';
import calcTotalPrice from '../lib/calcTotalPrice';
import formatMoney from '../lib/formatMoney';

const LOCAL_STATE_QUERY = gql`
    query {
        cartOpen @client
    }
`;

const TOGGLE_CART_MUTATION = gql`
  mutation {
    toggleCart @client
  }
`;
const Cart = () => (
    <User>{({ data: { me }}) => {
        if(!me) return null;
        console.log(me);
        return (

        
            <Mutation mutation={TOGGLE_CART_MUTATION}>
                {toggleCart => (
                    <Query query={LOCAL_STATE_QUERY}>
                        {({ data }) => (
                            <CartStyles open={data.cartOpen}>
                                <header>
                                    <CloseButton onClick={toggleCart} title="close">&times;</CloseButton>
                                    <Supreme>{me.name}'s Cart</Supreme>
                                    <p>You have {me.cart.length} Product{me.cart.length === 1 ? "" : "s"} in your cart...</p>
                                </header>
                                <ul>
                                    {me.cart.map(cartProduct => <CartProduct key={cartProduct.id} cartProduct={cartProduct} />)}
                                </ul>
                                <footer>
                                    <p>{formatMoney(calcTotalPrice(me.cart))}</p>
                                    <PriceDealButton>Checkout</PriceDealButton>
                                </footer>
                        </CartStyles>
                        )}
                    </Query>
                )}
            </Mutation>
        )
    }}</User>
    
);
export default Cart;
export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION };