/*
 *
 * WebcamDisplay
 *
 */

import React, { PropTypes, style } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectWebcamDisplay from './selectors';
import messages from './messages';
import Webcam from 'components/Webcam';
import DragResize from 'components/DragResize';


export class WebcamDisplay extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      streams : [],
      devices : []
    }
  }

  startDevices() {
    navigator.mediaDevices.enumerateDevices()
      .then(this.setDevices.bind(this))
      .catch(this.setNewError.bind(this));
  }

  setDevices(devices) {
    this.setState({ devices: devices })
    this.startWebcams();
  }

  startWebcams() {
    this.state.devices.forEach((device) => {
      if (device.kind === 'videoinput') {
        this.startVideo(device.id);
      }
    });
  }

  componentDidMount() {
    this.startDevices();
  }

  startVideoCb(stream) {
    const streams = this.state.streams.slice()
    streams.push(stream)
    this.setState({ streams: streams })
  }

  startVideo(deviceId) {
    const constraints = {
      video: { width: 1280, height: 720 },
      deviceId: deviceId
    };

    navigator.mediaDevices.getUserMedia(constraints)
      .then(this.startVideoCb.bind(this))
      .catch(this.setNewError.bind(this));
  }

  setNewError(error) {
    const errors = {...this.state.errors};
    errors.push(error);
    this.setState({
      errors : errors
    })
  }

  render() {

    if (!this.state || !this.state.streams) {
      return null;
    }

    return (
      <div>
          {this.state.streams.map(function(stream, key){
            return (

              <DragResize key={key}>
                <Webcam srcObject={stream} />
                <span className="box">
                  resize and drag me!!
                </span>
              </DragResize>

            )
          })}
      </div>
    );
  }
}

// WebcamDisplay.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

// const mapStateToProps = createStructuredSelector({
//   WebcamDisplay: makeSelectWebcamDisplay(),
// });
//
// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(WebcamDisplay);
export default WebcamDisplay;
