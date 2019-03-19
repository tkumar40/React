import { fromJS } from 'immutable';
import mianContainerReducer from '../reducer';

describe('mianContainerReducer', () => {
  it('returns the initial state', () => {
    expect(mianContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
