import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import CloseButton from '../CloseButton';

import './style.css';

class Webcam extends React.PureComponent { 

  componentDidMount() {
    const element = ReactDOM.findDOMNode(this.refs.webcam);
    element.srcObject = this.props.srcObject;
  }

  render() {
    return (
      <div className="resize-wrapper">
        <CloseButton />
        <video ref="webcam" className={this.props.className} autoPlay />
      </div>
    );
  }
}

Webcam.propTypes = {
  srcObject: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default Webcam;