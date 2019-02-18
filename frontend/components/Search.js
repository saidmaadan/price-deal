import React, { Component } from 'react';
import Downshift, { resetIdCounter } from 'downshift';
import Router from 'next/router';
import { ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';
import { DropDown, DropDownProduct, SearchStyles } from './styles/DropDown';

const SEARCH_PRODUCTS_QUERY = gql`
  query SEARCH_PRODUCTS_QUERY($searchTerm: String!) {
    products(where: { OR: [{ title_contains: $searchTerm }, { description_contains: $searchTerm }] }) {
      id
      image
      title
    }
  }
`;

function routeToProduct(product) {
  Router.push({
    pathname: '/product',
    query: {
      id: product.id,
    },
  });
}

class AutoComplete extends Component {
    state = {
        products: [],
        loading: false,
    };
    onChange = debounce(async (e, client) => {
        console.log('Searching...');
        // turn loading on
        this.setState({ loading: true });
        // Manually query apollo client
        const res = await client.query({
          query: SEARCH_PRODUCTS_QUERY,
          variables: { searchTerm: e.target.value },
        });
        this.setState({
            products: res.data.products,
            loading: false,
          });
    }, 350);
    render() {
        resetIdCounter();
        return (
            <SearchStyles>
                <Downshift onChange={routeToProduct} productToString={product => (product === null ? '' : product.title)}>
                    {({ getInputProps, getItemProps, isOpen, inputValue, highlightedIndex }) => (
                        <div>
                            <ApolloConsumer>
                                {client => (
                                    <input
                                        {...getInputProps({
                                        type: 'search',
                                        placeholder: 'Search For A Product',
                                        id: 'search',
                                        className: this.state.loading ? 'loading' : '',
                                        onChange: e => {
                                            e.persist();
                                            this.onChange(e, client);
                                        },
                                        })}
                                    />
                                )}

                            </ApolloConsumer>
                            {isOpen && (
                                <DropDown>
                                    {this.state.products.map((product, index) => (
                                        <DropDownProduct
                                        {...getItemProps({ product })}
                                        key={product.id}
                                        highlighted={index === highlightedIndex}
                                        >
                                        <img width="50" src={product.image} alt={product.title} />
                                        {product.title}
                                        </DropDownProduct>
                                    ))}
                                    {!this.state.products.length &&
                                        !this.state.loading && <DropDownProduct> Nothing Found {inputValue}</DropDownProduct>}
                                </DropDown>
                            )}
                        </div>
                    )}
                </Downshift>
            </SearchStyles>
        )
    }
}

export default AutoComplete;