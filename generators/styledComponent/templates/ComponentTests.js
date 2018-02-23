import React from 'react';
import <%= name %> from '../<%= name %>.jsx';
import renderer from 'react-test-renderer';

describe('<<%= name %> />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<<%= name %> />).toJSON()
    expect(tree).toMatchSnapshot()
  })
});
