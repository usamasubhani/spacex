import React from 'react';
import {shallow, ShallowWrapper, render } from 'enzyme'
import Upcoming from './Upcoming'

describe('Upcoming', () => {
  let container : ShallowWrapper;

  beforeEach(() => (container = shallow(<Upcoming />)))
  
  it('should render a <div />', () => {
    expect(container.find('div').length).toEqual(1);
  });

});