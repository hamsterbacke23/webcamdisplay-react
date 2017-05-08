import React from 'react';
import { shallow } from 'enzyme';

import DragResize from '../index';

describe('<DragResize />', () => {
  it('should render a className', () => {
    const className = 'testClass';
    const renderedComponent = shallow(
      <DragResize className={className} />
    );
    expect(renderedComponent.prop('className')).toEqual(className);
  });
});
