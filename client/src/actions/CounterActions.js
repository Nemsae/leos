import * as types from '../constants';

export const incrementCounter = () => ({
  type: types.INCREMENT,
});

export const increment = () => ((dispatch) => {
  dispatch(incrementCounter());
});

export const decrementCounter = () => ({
  type: types.DECREMENT,
});

export const decrement = () => ((dispatch) => {
  dispatch(decrementCounter());
});
