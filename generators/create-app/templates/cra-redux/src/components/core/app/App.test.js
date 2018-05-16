import React from 'react';
import {shallow} from 'enzyme';
// Import the App React Component
import App from './App.jsx';


const setup = (propOverrides) => {

  const props = Object.assign({}, propOverrides);
  const wrapper = shallow(<App {...props} />);

  return {
    props,
    wrapper
  };
};

describe('<App />', () => {

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
