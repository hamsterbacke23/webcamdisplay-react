import React from 'react';
import DragResize from '../DragResize';
import Timer from '../Timer';

import Display from '../Display';

export class Webcam extends React.PureComponent {

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
      deviceId: { exact: deviceId },
    };

    navigator.mediaDevices.getUserMedia({ video: constraints })
      .then(this.startVideoCb.bind(this))
      .catch(this.setNewError.bind(this));
  }

  startVideoCb(stream) {
    const streams = this.state.streams.slice();
    streams.push(stream);
    this.setState({ streams });
  }

  startWebcams() {
    let videoInputExists = false;
    this.state.devices.forEach((device) => {
      if (device.kind === 'videoinput') {
        this.startVideo(device.deviceId);
        videoInputExists = true;
      }
    });

    if (!videoInputExists) {
      this.setNewError({ message: 'No video input found, please connect a webcam.' });
    }
  }

  startDevices() {
    if (!navigator || !navigator.mediaDevices) {
      this.setNewError({ message: 'Sorry, navigator or navigator.mediaDevices does not seem to be available in this browser!' });
      return;
    }
    navigator.mediaDevices.enumerateDevices()
      .then(this.setDevices.bind(this))
      .catch(this.setNewError.bind(this));
  }

  render() {
    if (!this.state) {
      return null;
    }
    if (this.state.errors) {
      return (
        <div style={{ marginLeft: 20 }}>
          <h3>Error</h3>
          <ul className="errors">
            {this.state.errors.map((error, key) => (
              <li key={key}>
                <p>{error.name}</p>
                <p>{error.message}</p>
              </li>
              )
            )}
          </ul>
        </div>
      );
    }

    return (
      <React.Fragment>
        <DragResize initialWidth={100} initialHeight={100} x={window.innerWidth - 150} y={50}>
          <Timer />
        </DragResize> 

        {this.state.streams.map((stream, index) => (
          <DragResize key={index} initialWidth={400} initialHeight={300} x={((window.innerWidth / 2)) * index + 50} y={(window.innerHeight / 2) - 150}>
            <Display srcObject={stream} />
          </DragResize>
          )
        )}
        </React.Fragment>
    );
  }
}


export default Webcam;