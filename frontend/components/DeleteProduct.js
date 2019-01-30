import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ALL_PRODUCTS_QUERY } from './Products';

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;

class DeleteProduct extends Component {
  update = (cache, payload) => {
    // manually update the cache on the client, so it matches the server
    // 1. Read the cache for the Products we want
    const data = cache.readQuery({ query: ALL_PRODUCTS_QUERY });
    console.log(data, payload);
    // 2. Filter the deleted product out of the page
    data.products = data.products.filter(product => product.id !== payload.data.deleteProduct.id);
    // 3. Put the items back!
    cache.writeQuery({ query: ALL_PRODUCTS_QUERY, data });
  };
  render() {
    return (
      <Mutation
        mutation={DELETE_PRODUCT_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
      >
        {(deleteProduct, { error }) => (
          <button
            onClick={() => {
              if (confirm('Are you sure you want to delete this Product?')) {
                deleteProduct().catch(err => {
                  alert(err.message);
                });
              }
            }}
          >
            {this.props.children}
          </button>
        )}
      </Mutation>
    );
  }
}

export default DeleteProduct;
