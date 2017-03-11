/*
 *
 * Timer actions
 *
 */

import {
  RESET,
  START,
  STOP,
  ADDLAP,
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
export function stopTimer() {
  clearInterval(timer);
  return {
    type: STOP,
  };
}

export function resetTimer() {
  return {
    type: RESET,
  };
}

export function addLap() {
  return {
    type: ADDLAP,
  };
}

function tick() {
  return {
    type: TICK,
  };
}
