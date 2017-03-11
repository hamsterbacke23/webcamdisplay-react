/*
 *
 * WebcamDisplay
 *
 */

import React, { PropTypes, style } from 'react';
// import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
// import { createStructuredSelector } from 'reselect';
// import makeSelectWebcamDisplay from './selectors';
// import messages from './messages';
import DisplayWebcam from './DisplayWebcam';
import DragResize from 'components/DragResize';
import Timer from 'containers/Timer';

export class WebcamDisplay extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      streams: [],
      devices: [],
    };
  }

  componentDidMount() {
    this.startDevices();
  }

  setDevices(devices) {
    this.setState({ devices });
    this.startWebcams();
  }

  setNewError(error) {
    const errors = { ...this.state.errors };
    errors.push(error);
    this.setState({
      errors,
    });
  }

  startVideo(deviceId) {
    const constraints = {
      video: { width: 1280, height: 720 },
      deviceId,
    };

    navigator.mediaDevices.getUserMedia(constraints)
      .then(this.startVideoCb.bind(this))
      .catch(this.setNewError.bind(this));
  }

  startVideoCb(stream) {
    const streams = this.state.streams.slice();
    streams.push(stream);
    this.setState({ streams });
  }

  startWebcams() {
    this.state.devices.forEach((device) => {
      if (device.kind === 'videoinput') {
        this.startVideo(device.id);
      }
    });
  }

  startDevices() {
    navigator.mediaDevices.enumerateDevices()
      .then(this.setDevices.bind(this))
      .catch(this.setNewError.bind(this));
  }

  render() {
    if (!this.state || !this.state.streams) {
      return null;
    }

    return (
      <div>
        <div>
          <Timer />
        </div>

        {this.state.streams.map((stream, key) => (
          <DragResize key={key}>
            <DisplayWebcam srcObject={stream} />
            <span className="box">
              resize and drag me!!
            </span>
          </DragResize>
          )
        )}
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
