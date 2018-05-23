import React from 'react';
import {shallow} from 'enzyme';
import {<%= name %>} from '../<%= name %>.jsx';

// For any Redux action create a corresponding mock
// For more information on mocking functions, check out the Jest docs: https://facebook.github.io/jest/docs/en/mock-functions.html
const fetchMockData = jest.fn()


// Setup utility method intended to run before each test. 
// Here you can override props, mock functions, as well as return a shallow version of the component.
const setup = (propOverrides) => {

  // Mock dispatch functions for redux
  const dispatchProps = {
    dispatch: {
      fetchMockData: fetchMockData,
    }
  }

  const props = Object.assign({}, dispatchProps, propOverrides);
  const wrapper = shallow(<<%= name %> {...props} />);

  return {
    props,
    wrapper
  };
};

// Test Cases
describe('<<%= name %> />', () => {

  it('renders with default props', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });

  it('always renders with a div', () => {
    const { wrapper } = setup();
    const divs = wrapper.find('div');
    expect(divs.length).toBeGreaterThan(0);
  });

  // Please write your own tests below

});
