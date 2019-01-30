import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    product(where: { id: $id }) {
      id
      title
      description
      originalPrice
      discount
      price
    }
  }
`;
const UPDATE_PRODUCT_MUTATION = gql`
    mutation UPDATE_PRODUCT_MUTATION(
        $id: ID!,
        $title: String
        $description: String
        $price: Int
        $originalPrice: Int
        $discount: Int
    ) {
    updateProduct(
        id: $id,
        title: $title
        description: $description
        discount: $discount
        originalPrice: $originalPrice
        price: $price    
      
    ) {
        id
        title
        description
        discount
        originalPrice
        price
    }
  }
`;

class UpdateProduct extends Component {
    state = {};

    handleChange = e => {
        const { name, type, value } = e.target;
        const val = type === 'number' ? parseFloat(value) : value;
        this.setState({ [name]: val });
    };

    updateProduct = async (e, updateProductMutation) => {
        e.preventDefault();
        console.log('Updating Product!!');
        console.log(this.state);
        const res = await updateProductMutation({
          variables: {
            id: this.props.id,
            ...this.state,
          },
        });
        console.log('Updated!!');
    };
    
    render() {
        return (
            <Query
                query={SINGLE_PRODUCT_QUERY}
                variables={{
                id: this.props.id,
                }}
            >
                {({ data, loading }) => {
                    if (loading) return <p>Loading...</p>;
                    if (!data.product) return <p>No product Found for ID {this.props.id}</p>;
                    return (
                        <Mutation mutation={UPDATE_PRODUCT_MUTATION} variables={this.state}>
                            {(updateProduct, { loading, error }) => (
                                <Form onSubmit={e => this.updateProduct(e, updateProduct)}>
                                    <Error error={error} />
                                    <fieldset disabled={loading} aria-busy={loading}>
                                        
                                        <label htmlFor="title">
                                            Title
                                            <input
                                            type="text"
                                            id="title"
                                            name="title"
                                            placeholder="Title"
                                            required
                                            defaultValue={data.product.title}
                                            onChange={this.handleChange}
                                            />
                                        </label>
                            
                                        <label htmlFor="description">
                                            Description
                                            <textarea
                                            id="description"
                                            name="description"
                                            placeholder="Enter A Description"
                                            required
                                            defaultValue={data.product.description}
                                            onChange={this.handleChange}
                                            />
                                        </label>
                                        
                                        <label htmlFor="originalprice">
                                            Original Price
                                            <input
                                            type="number"
                                            id="originalPrice"
                                            name="originalPrice"
                                            placeholder="originalPrice"
                                            required
                                            defaultValue={data.product.originalPrice}
                                            onChange={this.handleChange}
                                            />
                                        </label>

                                        <label htmlFor="discount">
                                            Discount
                                            <input
                                            type="number"
                                            id="discount"
                                            name="discount"
                                            placeholder="discount"
                                            required
                                            defaultValue={data.product.discount}
                                            onChange={this.handleChange}
                                            />
                                        </label>

                                        <label htmlFor="price">
                                            Price
                                            <input
                                            type="number"
                                            id="price"
                                            name="price"
                                            placeholder="Price"
                                            required
                                            defaultValue={data.product.price}
                                            onChange={this.handleChange}
                                            />
                                        </label>

                                        
                                        <button type="submit">Update</button>
                                    </fieldset>
                                </Form>
                            )}
                        </Mutation>
                    );
                }}
            </Query>
        );
    }
}
export default UpdateProduct;
export { UPDATE_PRODUCT_MUTATION };