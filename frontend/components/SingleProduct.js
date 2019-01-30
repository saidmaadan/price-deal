import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Error from './ErrorMessage';
import styled from 'styled-components';
import Head from 'next/head';


const SingleProductStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .details {
    margin: 3rem;
    font-size: 2rem;
  }
`;

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    product(where: { id: $id }) {
      id
      title
      description
      largeImage
    }
  }
`;
class SingleProduct extends Component {
  render() {
    return (
      <Query
        query={SINGLE_PRODUCT_QUERY}
        variables={{
          id: this.props.id,
        }}
      >
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          //if (!data.product) return <p>No Product Found for {this.props.id}</p>;
          const product = data.product;
          return (
            <SingleProductStyles>
              <Head>
                <title>Price Deal | {product.title}</title>
              </Head>
              <img src={product.largeImage} alt={product.title} />
              <div className="details">
                <h2>Viewing {product.title}</h2>
                <p>{product.description}</p>
              </div>
            </SingleProductStyles>
          );
        }}
      </Query>
    );
  }
}

export default SingleProduct;
export { SINGLE_PRODUCT_QUERY };
