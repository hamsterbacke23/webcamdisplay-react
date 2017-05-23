/*
 *
 * Timer actions
 *
 */

import {
  RESET,
  START,
  PAUSE,
  TICK,
} from './constants';

let timer = null;

export function startTimer(dispatch) {
  clearInterval(timer);
  timer = setInterval(() => dispatch(tick()), 1000);
  dispatch(tick());

  return {
    type: START,
  };
}
export function pauseTimer() {
  clearInterval(timer);
  return {
    type: PAUSE,
  };
}

export function resetTimer() {
  return {
    type: RESET,
  };
}


function tick() {
  return {
    type: TICK,
  };
}
