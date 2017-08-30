import * as types from '../constants';

export const initialState = {
  filter: types.SHOW_ALL,
};

export const visibilityReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return {
        filter: action.filter,
      };
    default:
      return state;
  }
};
