import ProductComponent from '../components/Product';
import { shallow, mount} from 'enzyme';
import toJSON from 'enzyme-to-json';

const fakeProduct = {
    id: 'PD89G',
    title: 'Brown leather bag',
    price: 8000,
    description: 'New arrival women bag!',
    image: 'bag.jpg',
    largeImage: 'largebag.jpg',
};

describe('<Product/>', () => {
    it('renders and matches the snapshot', () => {
        const wrapper = shallow( < ProductComponent product={fakeProduct} />);

        expect(toJSON(wrapper)).toMatchSnapshot();
    });
    
    // it('renders the image properly', () => {
    //     const wrapper = shallow(<ProductComponent product={fakeProduct} />);
    //     const img = wrapper.find('img');
    //     expect(img.props().src).toBe(fakeProduct.image);
    //     expect(img.props().alt).toBe(fakeProduct.title);
    // });
    // it('renders the pricetag and title', () => {
    //     const wrapper = shallow(<ProductComponent product={fakeProduct} />);
    //     const PriceTag = wrapper.find('PriceTag');
    //     expect(PriceTag.children().text()).toBe('$80');
    //     expect(wrapper.find('Title a').text()).toBe(fakeProduct.title);
    // });
    // it('renders out the buttons properly', () => {
    //     const wrapper = shallow(<ProductComponent product={fakeProduct} />);
    //     const buttonList = wrapper.find('.buttonList');
    //     expect(buttonList.children()).toHaveLength(3);
    //     expect(buttonList.find('Link')).toHaveLength(1);
    //     expect(buttonList.find('DeleteProduct').exists()).toBe(true);
    // });
});