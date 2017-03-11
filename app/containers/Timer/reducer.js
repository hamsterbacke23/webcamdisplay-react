/*
 *
 * Timer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  RESET,
  ADDLAP,
  TICK,
} from './constants';

const initialState = fromJS({
  intervalsElapsed: 0,
  laps: [],
  lastClearedIncrementer: null,
});


function timerReducer(state = initialState, action) {
  switch (action.type) {
    case RESET: {
      return state.set('intervalsElapsed', 0);
    }
    case TICK: {
      return state.set('intervalsElapsed', state.get('intervalsElapsed') + 1);
    }
    case ADDLAP: {
      const laps = state.laps.slice();
      laps.push(this.state.intervalsElapsed);
      return state.set('laps', laps);
    }
    default: {
      return state;
    }
  }
}

export default timerReducer;
