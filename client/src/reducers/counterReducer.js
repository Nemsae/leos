import * as types from '../constants';

export const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return {
        count: state.count + 1,
      };
    case types.DECREMENT:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};
