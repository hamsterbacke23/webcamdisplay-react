/*
 *
 * Timer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  RESET,
  TICK,
  START,
  PAUSE,
} from './constants';

const initialState = fromJS({
  intervalsElapsed: 0,
  isPaused: false,
  lastClearedIncrementer: null,
});


function timerReducer(state = initialState, action) {
  switch (action.type) {
    case RESET: {
      return state.set('intervalsElapsed', 0);
    }
    case START: {
      return state.set('isPaused', false);
    }
    case PAUSE: {
      return state.set('isPaused', true);
    }
    case TICK: {
      return state.set('intervalsElapsed', state.get('intervalsElapsed') + 1);
    }
    default: {
      return state;
    }
  }
}

export default timerReducer;
