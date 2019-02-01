import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Pagination from './Pagination';
import Product from './Product';
import { perPage } from '../config';


const ALL_PRODUCTS_QUERY = gql`
    query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int = ${perPage}){
        products(first: $first, skip: $skip, orderBy: createdAt_DESC){
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
				<Pagination page={this.props.page} />
					<Query 
						query={ALL_PRODUCTS_QUERY}
						// fetchPolicy="network-only"
						variables={{
							skip: this.props.page * perPage - perPage,
						  }}
					>
						{({data, error, loading}) => {
							if(loading) return <p>Loading...</p>;
							if(error) return <p>Error: {error.message}</p>;
							return <ProductsList>
								{data.products.map(product => <Product product={product} key={product.id} /> )}
							</ProductsList>;
						}}
					</Query>
				<Pagination page={this.props.page} />
			</center>
		)
	}
}
export default Products;
export { ALL_PRODUCTS_QUERY };