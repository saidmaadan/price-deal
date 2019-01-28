import UpdateProduct from '../components/UpdateProduct';

const Sell = ({ query }) => (
    <div>
      <UpdateProduct id={query.id} />
    </div>
  );
  
  export default Sell;