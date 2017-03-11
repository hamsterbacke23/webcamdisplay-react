/**
*
* DragResize
*
*/

import React from 'react';

import BaseLayout from './BaseLayout';
import StyledRnd from './StyledRnd';

const DragResize = (props) => {
  const resizableProps = props.isResizable === false
   ? { top: false, right: false, bottom: false, left: false, topRight: false, bottomRight: false, bottomLeft: false, topLeft: false }
   : undefined;
  return (
    <BaseLayout>
      <StyledRnd
        ref={(c) => { this.rnd = c; }}
        initial={{
          x: props.x,
          y: props.y,
          width: props.initialWidth,
          height: props.initialHeight,
        }}
        isResizable={resizableProps}
        bounds={'parent'}
      >
        {props.children}
      </StyledRnd>
    </BaseLayout>
  );
}


export default DragResize;
