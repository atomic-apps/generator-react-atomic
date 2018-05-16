import React from 'react';
import {shallow} from 'enzyme';

// Import the raw React Component
import <%= name %> from '../<%= name %>.jsx';

// Dependency Injection Setup method to bind enzyme, react-test-utils onto a react-component (container)
const setup = (propOverrides) => {
  const props = Object.assign({}, propOverrides);
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
