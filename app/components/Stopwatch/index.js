/**
*
* Stopwatch
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';

import ReactFitText from 'react-fittext';

import messages from './messages';

import { CenteredSection, Control, TimeDisplay } from './stopwatchStyles';

const formattedSeconds = (sec) => {
  const secDisplay = `0${(sec % 60)}`;
  return `${Math.floor(sec / 60)}:${secDisplay.slice(-2)}`;
};

function Stopwatch(props) {
  return (
    <CenteredSection>
      <ReactFitText compressor={0.5}>
        <div>
          <TimeDisplay>{formattedSeconds(props.intervalsElapsed)}</TimeDisplay>
        </div>
      </ReactFitText>

      {(props.intervalsElapsed === 0
        ? <Control onClick={props.startTimer}><FormattedMessage {...messages.start} /></Control>
        : <Control onClick={props.stopTimer}><FormattedMessage {...messages.stop} /></Control>
      )}

      {(props.intervalsElapsed !== 0
        ? <Control onClick={props.resetTimer}><FormattedMessage {...messages.reset} /></Control>
        : null
      )}

    </CenteredSection>
  );
}

Stopwatch.propTypes = {

};

export default Stopwatch;
