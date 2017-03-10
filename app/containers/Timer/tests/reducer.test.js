
import { fromJS } from 'immutable';
import timerReducer from '../reducer';

describe('timerReducer', () => {
  it('returns the initial state', () => {
    expect(timerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
