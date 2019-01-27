import React from 'react';
import PropTypes from 'prop-types';

import {Rnd}  from 'react-rnd';

function onResizeStopHandler() {
  window.dispatchEvent(new Event('resize'));
}

const DragResize = (props) => (
  <React.Fragment>
    <Rnd 
      default={{
        x: props.x,
        y: props.y,
        width: props.initialWidth,
        height: props.initialHeight,
      }}
      lockAspectRatio={props.lockAspectRatio}
      bounds={'parent'}
      onResizeStop={onResizeStopHandler}
    >
      {props.children}
    </Rnd >
  </React.Fragment>
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