import React from 'react';
import {shallow} from 'enzyme';

// {<%= name %>} using destructuring here assumes you are exporting
// the raw component here (without connected/css-modules), if you need the default drop the `{}`
import {<%= name %>} from '../<%= name %>.jsx';

// For any redux action create a corresponding mock
const fetchMockData = jest.fn()


// Dependency Injection Setup method to bind enzyme, react-test-utils, and redux all together
// onto a react-component (container)
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

  // Please write your own test below

});
