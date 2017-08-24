import * as types from '../constants';

export const set = filter => ({
  type: types.SET_VISIBILITY_FILTER,
  filter,
});

export const setFilter = filter => dispatch => dispatch(set(filter));
