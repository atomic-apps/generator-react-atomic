import React from 'react';
import {shallow} from 'enzyme';

// Import the raw React Component
import <%= name %> from '../<%= name %>.jsx';

// Setup utility method intended to run before each test. 
// Here you can override props and return a shallow version of the component.
// For more information on shallow rendering, check out the Enzyme docs: https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
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

  // Please write your own tests below

});
