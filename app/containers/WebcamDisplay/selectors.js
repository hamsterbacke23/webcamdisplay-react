import { createSelector } from 'reselect';

/**
 * Direct selector to the webcamDisplay state domain
 */
const selectWebcamDisplayDomain = () => (state) => state.get('webcamDisplay');

/**
 * Other specific selectors
 */


/**
 * Default selector used by WebcamDisplay
 */

const makeSelectWebcamDisplay = () => createSelector(
  selectWebcamDisplayDomain(),
  (substate) => substate.toJS()
);

export default makeSelectWebcamDisplay;
export {
  selectWebcamDisplayDomain,
};
