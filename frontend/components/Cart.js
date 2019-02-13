import React from 'react';

import CartStyles from './styles/CartStyles';
import Supreme from './styles/Supreme';
import CloseButton from './styles/CloseButton';
import SickButton from './styles/SickButton';

const Cart = () => (
    <CartStyles open>
        <header>
            <CloseButton title="close">&times;</CloseButton>
            <Supreme>Your Cart</Supreme>
            <p>You have __  Products in your cart...</p>
        </header>
        <footer>
            <p>$20.00</p>
            <SickButton>Checkout</SickButton>
        </footer>
    </CartStyles>
)
export default Cart;

