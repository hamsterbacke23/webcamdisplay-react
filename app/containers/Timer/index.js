/*
 *
 * Timer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Stopwatch from 'components/Stopwatch';
import { resetTimer, startTimer, stopTimer, addLap } from './actions';


import { makeSelectIntervalsElapsed } from './selectors';

class Timer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <Stopwatch
          intervalsElapsed={this.props.intervalsElapsed}
          startTimer={this.props.startTimer}
          stopTimer={this.props.stopTimer}
          resetTimer={this.props.resetTimer}
        />
      </div>
    );
  }
}


Timer.propTypes = {
  resetTimer: PropTypes.func.isRequired,
  startTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired,
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
