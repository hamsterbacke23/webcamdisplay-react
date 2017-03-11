/**
*
* DragResize
*
*/

import React from 'react';

import BaseLayout from './BaseLayout';
import StyledRnd from './StyledRnd';

function onResizeStopHandler() {
  window.dispatchEvent(new Event('resize'));
}

const DragResize = (props) => {

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
        isResizable={props.isResizable}
        lockAspectRatio={props.lockAspectRatio}
        bounds={'parent'}
        onResizeStop={onResizeStopHandler}
      >
        {props.children}
      </StyledRnd>
    </BaseLayout>
  );
}


export default DragResize;
