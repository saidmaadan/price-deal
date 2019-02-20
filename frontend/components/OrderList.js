import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { formatDistance } from 'date-fns';
import Link from 'next/link';
import styled from 'styled-components';
import gql from 'graphql-tag';
import Error from './ErrorMessage';
import formatMoney from '../lib/formatMoney';
import OrderProductStyles from './styles/OrderProductStyles';

const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY {
    orders(orderBy: createdAt_DESC) {
      id
      total
      createdAt
      products {
        id
        title
        price
        description
        quantity
        image
      }
    }
  }
`;

const orderUl = styled.ul`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
`;

class OrderList extends React.Component {
  render() {
    return (
      <Query query={USER_ORDERS_QUERY}>
        {({ data: { orders }, loading, error }) => {
          if (loading) return <p>loading...</p>;
          if (error) return <Error erorr={error} />;
          console.log(orders);
          return (
            <div>
              <h2>You have {orders.length} orders</h2>
              <orderUl>
                {orders.map(order => (
                  <OrderProductStyles key={order.id}>
                    <Link
                      href={{
                        pathname: '/order',
                        query: { id: order.id },
                      }}
                    >
                      <a>
                        <div className="order-meta">
                          <p>{order.products.reduce((a, b) => a + b.quantity, 0)} Products</p>
                          <p>{order.products.length} Products</p>
                          <p>{formatDistance(order.createdAt, new Date())}</p>
                          <p>{formatMoney(order.total)}</p>
                        </div>
                        <div className="images">
                          {order.products.map(product => (
                            <img key={product.id} src={product.image} alt={product.title} />
                          ))}
                        </div>
                      </a>
                    </Link>
                  </OrderProductStyles>
                ))}
              </orderUl>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default OrderList;

