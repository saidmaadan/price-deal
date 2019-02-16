import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';

const REMOVE_FROM_CART_MUTATION = gql`
  mutation removeFromCart($id: ID!) {
    removeFromCart(id: $id) {
      id
    }
  }
`;

const BigButton = styled.button`
    font-size: 3rem;
    background: none;
    border: 0;
    &:hover {
        color: ${props => props.theme.red};
        cursor: pointer;
    }
`;

class RemoveFromCart extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
    };
    // This gets called as soon as we get a response back from the server after a mutation has been performed
    update = (cache, payload) => {
        // 1. first read the cache
        const data = cache.readQuery({ query: CURRENT_USER_QUERY });
        // 2. remove that Product from the cart
        const cartProductId = payload.data.removeFromCart.id;
        data.me.cart = data.me.cart.filter(cartProduct => cartProduct.id !== cartProductId);
        // 3. write it back to the cache
        cache.writeQuery({ query: CURRENT_USER_QUERY, data });
    };
    render() {
        return (
            <Mutation
                mutation={REMOVE_FROM_CART_MUTATION}
                variables={{ id: this.props.id }}
                update={this.update}
                optimisticResponse={{
                    __typename: 'Mutation',
                    removeFromCart: {
                    __typename: 'CartProduct',
                    id: this.props.id,
                    },
                }}
                >
                {(removeFromCart, { loading, error }) => (
                    <BigButton
                    disabled={loading}
                    onClick={() => {
                        removeFromCart().catch(err => alert(err.message));
                    }}
                    title="Delete Product"
                    >
                    &times;
                    </BigButton>
                )}
            </Mutation>
        );
    }
}
    
export default RemoveFromCart;
export { REMOVE_FROM_CART_MUTATION };
