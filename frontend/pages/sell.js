import CreateProduct from '../components/CreateProduct';
import PleaseSignin from '../components/PleaseSignin';

const Sell = props => (
    <div>
        <PleaseSignin>
            <CreateProduct />
        </PleaseSignin>
        
    </div>
)

export default Sell