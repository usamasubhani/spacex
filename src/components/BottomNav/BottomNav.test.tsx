import React from 'react';
import {shallow, ShallowWrapper, render } from 'enzyme'
import BottomNav from './BottomNav';

describe('BottomNav', () => {
  let container : ShallowWrapper;

  beforeEach(() => (container = shallow(<BottomNav />)))
  
  it('should render a <div />', () => {
    expect(container.find('div').length).toEqual(1);
  });

});

it('renders three buttons', () => {
  const wrapper = render(<BottomNav />);
  // console.log()
  expect(wrapper.find('button').length).toEqual(3);
});