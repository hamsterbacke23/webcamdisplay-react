import React, { Component } from 'react';

import Webcam from '../Webcam';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Webcam/>
      </div>
    );
  }
}

export default App;
