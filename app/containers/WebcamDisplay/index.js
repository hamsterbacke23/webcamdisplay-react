/*
 *
 * WebcamDisplay
 *
 */

import React from 'react';
import DragResize from 'components/DragResize';
import Timer from 'containers/Timer';

import DisplayWebcam from './DisplayWebcam';

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
    const errors = this.state.errors ? this.state.errors.slice() : [];
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

    if (this.state.errors) {
      return (
        <ul className="errors">
          {this.state.errors.map((error, key) => (
            <li key={key}>
              {error.message}
            </li>
            )
          )}
        </ul>
      );
    }

    const timerResizeProps = {
      top: false,
      right: false,
      bottom: false,
      left: false,
      topRight: true,
      bottomRight: true,
      bottomLeft: true,
      topLeft: true,
    }

    return (
      <div>
        <DragResize initialWidth="150" initialHeight="150" x={window.innerWidth - 150} y={0} isResizable={timerResizeProps} lockAspectRatio={true}>
          <Timer />
        </DragResize>

        {this.state.streams.map((stream, key) => (
          <DragResize key={key} initialWidth="400" initialHeight="300" x={(window.innerWidth / 2) - 200} y={(window.innerHeight / 2) - 150}>
            <DisplayWebcam srcObject={stream} />
          </DragResize>
          )
        )}
      </div>
    );
  }
}


export default WebcamDisplay;
