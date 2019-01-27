import React from 'react';
import { mount } from 'enzyme';
import Display from './index';

it('renders without crashing', () => {
  mount(<Display srcObject={{}}/>);
});

it('hides when state is hidden', () => {
   const wrapper = mount(<Display srcObject={{}}/>);
   expect(wrapper.find('div').length).toBe(1);
   wrapper.setState({hidden: true});
   expect(wrapper.find('div').length).toBe(0);
});