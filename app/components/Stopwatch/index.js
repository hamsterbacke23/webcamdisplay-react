/**
*
* Stopwatch
*
*/

import React from 'react';

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
        {(props.intervalsElapsed !== 0
          ? <Control onClick={props.resetTimer}><FormattedMessage {...messages.reset} /></Control>
          : null
        )}

        {(props.intervalsElapsed === 0
          ? <Control onClick={props.startTimer}><FormattedMessage {...messages.start} /></Control>
          : <Control onClick={props.stopTimer}><FormattedMessage {...messages.stop} /></Control>
        )}

      </ControlGroup>

    </CenteredSection>
  );
}

Stopwatch.propTypes = {

};

export default Stopwatch;
