import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Title from './styles/Title';
import ProductStyles from './styles/ProductStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import DeleteProduct from './DeleteProduct';

export default class Product extends Component {
    static propTypes = {
        product: PropTypes.object.isRequired,
      };
  render() {
    const { product } = this.props;
    return (
        <ProductStyles>
            {product.image && <img src={product.image} alt={product.title} />}
            <Title>
                <Link
                    href={{
                    pathname: '/product',
                    query: { id: product.id },
                    }}
                >
                    <a>{product.title}</a>
                </Link>
            </Title>
            <PriceTag>{formatMoney(product.price)}</PriceTag>
            <p>{product.description}</p>
            <div className="buttonList">
                <Link
                    href={{
                    pathname: 'update',
                    query: { id: product.id },
                    }}
                >
                    <a>Edit ✏️</a>
                </Link>
                <button>Add To cart</button>
                <DeleteProduct id={product.id}>Delete This Product</DeleteProduct>
            </div>
        </ProductStyles>
    );
  }
}