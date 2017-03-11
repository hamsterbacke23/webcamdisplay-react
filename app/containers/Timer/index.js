/*
 *
 * Timer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import messages from './messages';
import { resetTimer, startTimer, stopTimer, addLap } from './actions';
import Button from 'components/Button';

import { makeSelectIntervalsElapsed } from './selectors';

const formattedSeconds = (sec) =>
  Math.floor(sec / 60) +
    ':' +
  ('0' + sec % 60).slice(-2)

class Timer extends React.PureComponent {

  componentDidMount() {
    this.props.resetTimer();
  }

  render() {
    return (
      <div className="stopwatch">
        <h1 className="stopwatch-timer">{formattedSeconds(this.props.intervalsElapsed)}</h1>
        <Button onClick={this.props.resetTimer}>basdfas</Button>

        {(this.props.intervalsElapsed === 0
          // this.incrementer === this.props.lastClearedIncrementer
          ? <Button className="start-btn" onClick={this.props.startTimer}>start</Button>
          : <Button className="stop-btn" onClick={this.props.stopTimer}>stop</Button>
        )}

        {(this.props.intervalsElapsed !== 0
          // this.incrementer !== this.props.lastClearedIncrementer
          ? <Button onClick={this.props.addLap}>Lap</Button>
          : null
        )}


        {(this.props.intervalsElapsed !== 0
          // this.incrementer === this.props.lastClearedIncrementer
          ? <Button onClick={this.props.resetTimer}>reset</Button>
          : null
        )}


      </div>
    );
  }
}


Timer.propTypes = {
  resetTimer: PropTypes.func.isRequired,
  startTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired,
  addLap: PropTypes.func,
  intervalsElapsed: PropTypes.number,
};

function mapDispatchToProps(dispatch) {
  return {
    startTimer: () => dispatch(startTimer(dispatch)),
    stopTimer: () => dispatch(stopTimer()),
    resetTimer: () => dispatch(resetTimer()),
    lapTimer: () => dispatch(addLap()),
  };
}

const mapStateToProps = createStructuredSelector({
  intervalsElapsed: makeSelectIntervalsElapsed(),
});


export default connect(mapStateToProps, mapDispatchToProps)(Timer);
