/*
 *
 * Timer actions
 *
 */

import {
  RESET,
  START,
  STOP,
  LAP
} from './constants';

export function startTimer() {
  return {
    type: START,
  };
}
export function stopTimer() {
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
    type: LAP,
  };
}
