import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import formatMoney from '../lib/formatMoney';
import RemoveFromCart from './RemoveFromCart';

const CartProductStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme.lightgrey};
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 10px;
  }
  h3,
  p {
    margin: 0;
  }
`;
const CartProduct = ({cartProduct}) => (
    <CartProductStyles>
        <img width="100" src={cartProduct.product.image} alt={cartProduct.product.title} />
        <div className="cart-item-details">
            <h3>{cartProduct.product.title}</h3>
            <p>
            {formatMoney(cartProduct.product.price * cartProduct.quantity)}
            {' - '}
            <em>
                {cartProduct.quantity} &times; {formatMoney(cartProduct.product.price)} each
            </em>
            </p>
        </div>
        <RemoveFromCart id={cartProduct.id} />
    </CartProductStyles>
); 
CartProduct.propTypes = {
    cartProduct: PropTypes.object.isRequired,
  };
  
export default CartProduct;