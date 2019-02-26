import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import Router from 'next/router';
import { MockedProvider } from 'react-apollo/test-utils';
import CreateProduct, { CREATE_PRODUCT_MUTATION } from '../components/CreateProduct';
import { fakeProduct } from '../lib/testUtils';

const storeCatelog = 'https://storecatelog.com/storecatelog.jpg';

// mock the global fetch API
global.fetch = jest.fn().mockResolvedValue({
  json: () => ({
    secure_url: storeCatelog,
    eager: [{ secure_url: storeCatelog }],
  }),
});

describe('<CreateProduct/>', () => {
    it('renders and matches snapshot', async () => {
        const wrapper = mount(
          <MockedProvider>
            <CreateProduct />
          </MockedProvider>
        );
        const form = wrapper.find('form[data-test="form"]');
        expect(toJSON(form)).toMatchSnapshot();
    });

    it('uploads a file when changed', async () => {
        const wrapper = mount(
          <MockedProvider>
            <CreateProduct />
          </MockedProvider>
        );
        const input = wrapper.find('input[type="file"]');
        input.simulate('change', { target: { files: ['fakedog.jpg'] } });
        await wait();
        const component = wrapper.find('CreateProduct').instance();
        expect(component.state.image).toEqual(storeCatelog);
        expect(component.state.largeImage).toEqual(storeCatelog);
        expect(global.fetch).toHaveBeenCalled();
        global.fetch.mockReset();
    });

    it('handles state updating', async () => {
        const wrapper = mount(
          <MockedProvider>
            <CreateProduct />
          </MockedProvider>
        );
        wrapper.find('#title').simulate('change', { target: { value: 'Testing', name: 'title' } });
        wrapper
          .find('#price')
            .simulate('change', { target: { value: 50000, name: 'price', type: 'number' } });
            wrapper
            .find('#originalPrice')
                .simulate('change', { target: { value: 80000, name: 'originalPrice', type: 'number' } });
                wrapper
                .find('#discount')
                .simulate('change', { target: { value: 20, name: 'discount', type: 'number' } });
        wrapper
          .find('#description')
          .simulate('change', { target: { value: 'This is a really nice product', name: 'description' } });
    
        expect(wrapper.find('CreateProduct').instance().state).toMatchObject({
            title: 'Testing',
            price: 50000,
            originalPrice: 80000,
            discount: 20,
            description: 'This is a really nice product',
        });
    });

    it('creates a product when the form is submitted', async () => {
        const product = fakeProduct();
        const mocks = [
          {
            request: {
              query: CREATE_PRODUCT_MUTATION,
              variables: {
                title: product.title,
                description: product.description,
                image: '',
                largeImage: '',
                price: product.price,
                originalPrice: product.originalPrice,
                discount: product.discount,
                
              },
            },
            result: {
              data: {
                createProduct: {
                  ...fakeProduct,
                  id: 'abc123',
                  __typename: 'Product',
                },
              },
            },
          },
        ];
    
        const wrapper = mount(
            <MockedProvider mocks={mocks}>
              <CreateProduct />
            </MockedProvider>
          );
          // simulate someone filling out the form
        wrapper.find('#title').simulate('change', { target: { value: product.title, name: 'title' } });
        wrapper
            .find('#price')
            .simulate('change', { target: { value: product.price, name: 'price', type: 'number' } });
        wrapper
            .find('#originalPrice')
            .simulate('change', { target: { value: product.originalPrice, name: 'originalPrice', type: 'number' } });
        wrapper
            .find('#discount')
            .simulate('change', { target: { value: product.discount, name: 'discount', type: 'number' } });
        wrapper
            .find('#description')
            .simulate('change', { target: { value: product.description, name: 'description' } });
          // mock the router
         Router.router = { push: jest.fn() };
         wrapper.find('form').simulate('submit');
         await wait(50);
         expect(Router.router.push).toHaveBeenCalled();
         expect(Router.router.push).toHaveBeenCalledWith({ pathname: '/product', query: { id: 'abc123' } });
    });
});