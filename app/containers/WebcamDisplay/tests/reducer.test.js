
import { fromJS } from 'immutable';
import webcamDisplayReducer from '../reducer';

describe('webcamDisplayReducer', () => {
  it('returns the initial state', () => {
    expect(webcamDisplayReducer(undefined, {})).toEqual(fromJS({}));
  });
});
