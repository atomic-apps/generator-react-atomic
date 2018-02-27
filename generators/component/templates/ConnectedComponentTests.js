import React from 'react';
import {shallow} from 'enzyme';
// {<%= name %>} using destructuring here assumes you are exporting
// the raw component here, if you need the default drop the `{}`
import {<%= name %>} from '../<%= name %>.jsx';

const setup = (propOverrides) => {
  const props = Object.assign({}, propOverrides);
  const wrapper = shallow(<<%= name %> {...props} />);

  return {
    props,
    wrapper
  };
};

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

  // More tests here

});
