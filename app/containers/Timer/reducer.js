/*
 *
 * Timer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  RESET,
} from './constants';

const initialState = fromJS({
  secondsElapsed: 0,
  laps: [],
  lastClearedIncrementer: null
});

function timerReducer(state = initialState, action) {
  let incrementer;
  switch (action.type) {
    case RESET:
      const state = {...state, initialState};
      return state;
    case STOP:
      clearInterval(incrementer);
      this.setState({
        lastClearedIncrementer: incrementer
      });
    case START:
      incrementer = setInterval( () =>
      this.setState({
        secondsElapsed: this.state.secondsElapsed + 1
      })
    , 1000);
    case LAP:
      this.setState({
        laps: this.state.laps.concat([this.state.secondsElapsed])
      })
    default:
      return state;
  }
}

export default timerReducer;
