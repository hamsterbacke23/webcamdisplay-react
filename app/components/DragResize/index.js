/**
*
* DragResize
*
*/

import React, { PropTypes } from 'react';

import DragResizeLayout from './DragResizeLayout';
import StyledRnd from './StyledRnd';

function onResizeStopHandler() {
  window.dispatchEvent(new Event('resize'));
}

const DragResize = (props) => (
  <DragResizeLayout className={props.className}>
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
  </DragResizeLayout>
);

DragResize.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  initialHeight: PropTypes.number.isRequired,
  initialWidth: PropTypes.number.isRequired,
  isResizable: PropTypes.bool,
  lockAspectRatio: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.object,
};


export default DragResize;
