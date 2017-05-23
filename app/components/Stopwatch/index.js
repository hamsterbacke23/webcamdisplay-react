/**
*
* Stopwatch
*
*/

import React, { PropTypes } from 'react';

import { FormattedMessage } from 'react-intl';

import { Textfit } from 'react-textfit';

import messages from './messages';

import { CenteredSection, Control, TimeDisplay, ControlGroup } from './stopwatchStyles';

const formattedSeconds = (sec) => {
  const secDisplay = `0${(sec % 60)}`;
  return `${Math.floor(sec / 60)}:${secDisplay.slice(-2)}`;
};


function Stopwatch(props) {
  return (
    <CenteredSection>
      <TimeDisplay>
        <Textfit mode="single">
          {formattedSeconds(props.intervalsElapsed)}
        </Textfit>
      </TimeDisplay>

      <ControlGroup>
        {(props.intervalsElapsed !== 0 && props.isPaused
          ? <Control onClick={props.resetTimer}><FormattedMessage {...messages.reset} /></Control>
          : null
        )}

        {(props.isPaused || props.intervalsElapsed === 0
          ? <Control onClick={props.startTimer}><FormattedMessage {...messages.start} /></Control>
          : ''
        )}

        {(!props.isPaused && props.intervalsElapsed !== 0
          ? <Control onClick={props.pauseTimer}><FormattedMessage {...messages.stop} /></Control>
          : ''
        )}

      </ControlGroup>

    </CenteredSection>
  );
}

Stopwatch.propTypes = {
  resetTimer: PropTypes.func.isRequired,
  startTimer: PropTypes.func.isRequired,
  pauseTimer: PropTypes.func.isRequired,
  intervalsElapsed: PropTypes.number,
  isPaused: PropTypes.bool,
};

export default Stopwatch;
