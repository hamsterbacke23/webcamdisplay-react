import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import CloseButton from '../CloseButton';

import './style.css';

class Webcam extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      hidden: false
    }
    this.hide = this.hide.bind(this);
  }

  componentDidMount() {
    const element = ReactDOM.findDOMNode(this.refs.webcam);
    element.srcObject = this.props.srcObject;
  }

  hide() {
    this.setState({ hidden: true });
  }

  render() {
    if (this.state.hidden) {
      return null;
    }
    return (
      <div className="resize-wrapper">
        <CloseButton onClick={this.hide} />
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