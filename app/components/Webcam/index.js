/**
*
* Webcam
*
*/

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Video = styled.video`
  display: block;
  width: 100%;
  height:100%;
`;

class Webcam extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    const element = ReactDOM.findDOMNode(this.refs.webcam);
    element.srcObject = this.props.srcObject;
  }

  render() {
    // return React.createElement(Video, { ...this.props, ref: 'webcam' });
    return (
      <Video ref="webcam" className={this.props.className} autoPlay>
        <FormattedMessage {...messages.header} />
      </Video>
    );
  }
}

Webcam.propTypes = {
  srcObject: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default Webcam;
