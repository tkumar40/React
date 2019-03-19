import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mianContainer state domain
 */

const selectMianContainerDomain = state =>
  state.get('mianContainer', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by MianContainer
 */

const makeSelectMianContainer = () =>
  createSelector(selectMianContainerDomain, substate => substate.toJS());

export default makeSelectMianContainer;
export { selectMianContainerDomain };
