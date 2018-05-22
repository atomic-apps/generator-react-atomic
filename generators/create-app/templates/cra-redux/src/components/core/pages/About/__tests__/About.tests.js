import React from 'react';
import {shallow} from 'enzyme';

// {About} using destructuring here assumes you are exporting
// the raw component here (without connected/css-modules), if you need the default drop the `{}`
import About from '../About.jsx';


// Dependency Injection Setup method to bind enzyme, react-test-utils, and redux all together
// onto a react-component (container)
const setup = (propOverrides) => {

  const props = Object.assign({}, propOverrides);
  const wrapper = shallow(<About {...props} />);

  return {
    props,
    wrapper
  };
};

// Test Cases
describe('<About />', () => {

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
