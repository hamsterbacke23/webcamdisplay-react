/*
 *
 * Timer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Stopwatch from 'components/Stopwatch';
import { resetTimer, startTimer, pauseTimer } from './actions';


import { makeSelectIsPaused, makeSelectIntervalsElapsed } from './selectors';

class Timer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <Stopwatch
          intervalsElapsed={this.props.intervalsElapsed}
          startTimer={this.props.startTimer}
          pauseTimer={this.props.pauseTimer}
          resetTimer={this.props.resetTimer}
          isPaused={this.props.isPaused}
        />
      </div>
    );
  }
}


Timer.propTypes = {
  resetTimer: PropTypes.func.isRequired,
  startTimer: PropTypes.func.isRequired,
  pauseTimer: PropTypes.func.isRequired,
  intervalsElapsed: PropTypes.number,
  isPaused: PropTypes.bool,
};

function mapDispatchToProps(dispatch) {
  return {
    startTimer: () => dispatch(startTimer(dispatch)),
    pauseTimer: () => dispatch(pauseTimer()),
    resetTimer: () => dispatch(resetTimer()),
  };
}

const mapStateToProps = createStructuredSelector({
  intervalsElapsed: makeSelectIntervalsElapsed(),
  isPaused: makeSelectIsPaused(),
});


export default connect(mapStateToProps, mapDispatchToProps)(Timer);
