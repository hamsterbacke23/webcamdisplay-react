import React from 'react';
import { shallow } from 'enzyme';

import HomePage from '../index';
import Section from '../Section';

describe('<HomePage />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(
      <HomePage />
    );
    expect(renderedComponent.type()).toEqual('div');
  });
});
