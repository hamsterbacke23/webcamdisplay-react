/**
 * Timer selectors
 */

import { createSelector } from 'reselect';

const selectTimer = (state) => state.get('timer');

const makeSelectIntervalsElapsed = () => createSelector(
  selectTimer,
  (timerState) => timerState.get('intervalsElapsed')
);

export {
  selectTimer,
  makeSelectIntervalsElapsed,
};
