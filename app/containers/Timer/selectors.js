import { createSelector } from 'reselect';

/**
 * Direct selector to the timer state domain
 */
const selectTimerDomain = () => (state) => state.get('timer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Timer
 */

const makeSelectTimer = () => createSelector(
  selectTimerDomain(),
  (substate) => substate.toJS()
);

export default makeSelectTimer;
export {
  selectTimerDomain,
};
