/*
 *
 * Timer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectTimer from './selectors';
import messages from './messages';
import * from './reducer';

const formattedSeconds = (sec) =>
  Math.floor(sec / 60) +
    ':' +
  ('0' + sec % 60).slice(-2)

class Stopwatch extends React.Component {

  render() {
    return (
      <div className="stopwatch">
        <h1 className="stopwatch-timer">{formattedSeconds(this.state.secondsElapsed)}</h1>

        {(this.state.secondsElapsed === 0 ||
          this.incrementer === this.state.lastClearedIncrementer
          ? <Button className="start-btn" onClick={this.props.startTimer}>start</Button>
          : <Button className="stop-btn" onClick={this.props.stopTimer}>stop</Button>
        )}

        {(this.state.secondsElapsed !== 0 &&
          this.incrementer !== this.state.lastClearedIncrementer
          ? <Button onClick={this.props.addLap}>Lap</Button>
          : null
        )}


        {(this.state.secondsElapsed !== 0 &&
          this.incrementer === this.state.lastClearedIncrementer
          ? <Button onClick={this.props.resetTimer}>reset</Button>
          : null
        )}

        <ul className="stopwatch-laps">
          { this.state.laps.map((lap, i) =>
              <li className="stopwatch-lap"><strong>{i + 1}</strong>/ {formattedSeconds(lap)}</li>)
          }
        </ul>
      </div>
    );
  }
}


Timer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  resetTimer: PropTypes.func.isRequired,
  startTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired,
  addLap: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  Timer: makeSelectTimer(),
});

function mapDispatchToProps(dispatch) {
  return {
    startTimer : () => dispatch(startTimer()),
    stopTimer : () => dispatch(stopTimer()),
    resetTimer : () => dispatch(resetTimer()),
    lapTimer : () => dispatch(addLap()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
