import React from 'react';
import {shallow, ShallowWrapper, render } from 'enzyme'
import Home from './Home';

describe('Home', () => {
  let container : ShallowWrapper;

  beforeEach(() => (container = shallow(<Home />)))
  
  it('should render a <div />', () => {
    expect(container.find('div').length).toEqual(1);
  });

});