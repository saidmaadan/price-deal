import SingleProduct from '../components/SingleProduct';

const Product = props => {
    return (
        <div>
            <SingleProduct id={props.query.id} />
        </div>
    )
}

export default Product;

