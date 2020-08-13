import React from 'react';
import {shallow, ShallowWrapper } from 'enzyme'
import App from './App';
import Navigation from './components/Navigation/Navigation';
import BottomNav from './components/BottomNav/BottomNav';

describe('App', () => {
  let container : ShallowWrapper;

  beforeEach(() => (container = shallow(<App />)))
  
  it('should render a <div />', () => {
    expect(container.find('div').length).toEqual(1);
  });

  it('should render Nav bar component', () => {
    expect(container.containsMatchingElement(<Navigation />)).toEqual(true)
  });

  it("Should render Bottom Navigation component", () => {
    expect(container.containsMatchingElement(<BottomNav />)).toEqual(true)
  })

});