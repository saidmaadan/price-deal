import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import wait from 'waait';
import SingleProduct, { SINGLE_PRODUCT_QUERY } from '../components/SingleProduct';
import { MockedProvider } from 'react-apollo/test-utils';
import { fakeProduct } from '../lib/testUtils';

describe('<SingleProduct/>', () => {
  it('renders with proper data', async () => {
    const mocks = [
      {
        // when someone makes a request with this query and variable combo
        request: { query: SINGLE_PRODUCT_QUERY, variables: { id: '123' } },
        // return this fake data (mocked data)
        result: {
          data: {
            product: fakeProduct(),
          },
        },
      },
    ];
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <SingleProduct id="123" />
      </MockedProvider>
    );
    expect(wrapper.text()).toContain('Loading...');
    await wait();
    wrapper.update();
    // console.log(wrapper.debug());
    expect(toJSON(wrapper.find('h2'))).toMatchSnapshot();
    expect(toJSON(wrapper.find('img'))).toMatchSnapshot();
    expect(toJSON(wrapper.find('p'))).toMatchSnapshot();
  });

  it('Errors with a not found Product', async () => {
    const mocks = [
      {
        request: { query: SINGLE_PRODUCT_QUERY, variables: { id: '123' } },
        result: {
          errors: [{ message: 'Products Not Found!' }],
        },
      },
    ];
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <SingleProduct id="123" />
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    console.log(wrapper.debug());
    const product = wrapper.find('[data-test="graphql-error"]');
    expect(product.text()).toContain('Products Not Found!');
    expect(toJSON(product)).toMatchSnapshot();
  });
});
