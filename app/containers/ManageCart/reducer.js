/*
 *
 * ManageCart reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION } from './constants';
import * as types from './constants'

export const initialState = fromJS({
  users: {},
  errors: false,
});

function manageCartReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case types.GET_USERINFO_SUCCESS:
      return state.set('users', action.results).set('errors', false);
    case types.GET_USERINFO_FAILURE:
      return state.set('users', action.err);
    default:
      return state;
  }
}

export default manageCartReducer;
