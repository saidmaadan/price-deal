import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

import Product from './Product';

const ALL_PRODUCTS_QUERY = gql`
    query ALL_PRODUCTS_QUERY{
        products{
            id
            title
            description
            image
            largeImage
            price
        }
    }
`;

const Center = styled.div`
  text-align: center;
`;

const ProductsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

class Products extends Component {
  render() {
    return (
      <center>
        <Query query={ALL_PRODUCTS_QUERY}>
            {({data, error, loading}) => {
                if(loading) return <p>Loading...</p>;
                if(error) return <p>Error: {error.message}</p>;
                return <ProductsList>
                    {data.products.map(product => <Product product={product} key={product.id} /> )}
                </ProductsList>;
            }}
        </Query>
      </center>
    )
  }
}
export default Products;
export { ALL_PRODUCTS_QUERY };