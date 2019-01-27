import React from 'react';
import FitText from '@kennethormandy/react-fittext'

import CloseButton from '../CloseButton';
import './style.css';

const formattedSeconds = (sec) => {
  const secDisplay = `0${(sec % 60)}`;
  return `${Math.floor(sec / 60)}:${secDisplay.slice(-2)}`;
};



class Timer extends React.PureComponent {

  timer;

  constructor(props) {
    super(props);
    this.state = {
      intervalsElapsed: 0,
      isPaused: true,
      hidden: false
    }
    this.dispatch = this.dispatch.bind(this);
    this.tick = this.tick.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
  }

  /**
   *  Mini Redux ftw 
   **/
  dispatch(action) {
    const newState = this.timerReducer(this.state, action);
    this.setState(newState);
  }

  hide() {
    return {
      type: 'HIDE',
    }; 
  }

  startTimer() {
    clearInterval(this.timer);
    this.timer = setInterval(() => this.dispatch(this.tick()), 1000);
    this.dispatch(this.tick());

    return {
      type: 'START',
    };
  }

  pauseTimer() {
    clearInterval(this.timer);
    return {
      type: 'PAUSE',
    };
  }

  resetTimer() {
    return {
      type: 'RESET',
    };
  }


  tick() {
    return {
      type: 'TICK',
    };
  }

  timerReducer(state, action) {
    switch (action.type) {
      case 'RESET': {
        return { ...state, intervalsElapsed: 0 };
      }
      case 'START': {
        return { ...state, isPaused: false };
      }
      case 'PAUSE': {
        return { ...state, isPaused: true };
      }
      case 'HIDE': {
        return { ...state, hidden: true };
      }
      case 'TICK': {
        return { ...state, intervalsElapsed: state.intervalsElapsed + 1 };
      }
      default: {
        return state;
      }
    }
  }

  render() {
    const { intervalsElapsed, isPaused, hidden } = this.state;

    if (hidden) {
      return null;
    }

    return (
      <div className="wrapper">
      <CloseButton href="#" onClick={() => this.dispatch(this.hide())}>×</CloseButton>
        <div className="timedisplay">
          <FitText minFontSize={24} parent={this.parentNode} compressor={0.3}>
            {formattedSeconds(intervalsElapsed)}
          </FitText>
        </div>
        {(intervalsElapsed !== 0 && isPaused
          ? <button onClick={() => this.dispatch(this.resetTimer())}>Reset</button>
          : null
        )}

        {(isPaused || intervalsElapsed === 0
          ? <button onClick={() => this.dispatch(this.startTimer())}>Start</button>
          : ''
        )}

        {(!isPaused && intervalsElapsed !== 0
          ? <button onClick={() => this.dispatch(this.pauseTimer())}>Stop</button>
          : ''
        )}
        
      </div>
    );
  }
}




export default Timer;