import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import calcTotalPrice from '../lib/calcTotalPrice';
import Error from './ErrorMessage';
import User, { CURRENT_USER_QUERY } from './User';

const CREATE_ORDER_MUTATION = gql`
  mutation createOrder($token: String!) {
    createOrder(token: $token) {
      id
      charge
      total
      products {
        id
        title
      }
    }
  }
`;

function totalProducts(cart) {
    return cart.reduce((tally, cartProduct) => tally + cartProduct.quantity, 0);
  }
  
class PaymentProcessing extends Component {
    onToken = async (res, createOrder) => {
        console.log('On Token');
        console.log(res.id);
        NProgress.start();
        // manually call the mutation once we have the stripe token
        const order = await createOrder({
            variables: {
                token: res.id,
            },
        }).catch(err => {
            alert(err.message);
        });
        Router.push({
            pathname: '/order',
            query: { id: order.data.createOrder.id },
        });
    };
  render() {
      return (
          <User>
              {({ data: { me } }) => (
                  <Mutation
                    mutation={CREATE_ORDER_MUTATION}
                    refetchQueries={[{ query: CURRENT_USER_QUERY }]}
                  >
                    {createOrder => (
                    <StripeCheckout
                        amount={calcTotalPrice(me.cart)}
                        name="Price Deals"
                        description={`Order of ${totalProducts(me.cart)} Products`}
                        image={me.cart[0].product && me.cart[0].product.image}
                        stripeKey="pk_test_xaGcexh6613z9GmfH5kvDMXy"
                        currency="USD"
                        email={me.email}
                        token={res => this.onToken(res, createOrder)}       
                    >
                        {this.props.children}
                          </StripeCheckout>
                    )}
                </Mutation>
              )}
          </User>
    )
  }
}
export default PaymentProcessing