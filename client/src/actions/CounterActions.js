export const incrementCounter = () => ({
  type: 'INCREMENT',
});

export const increment = (dispatch) => {
  dispatch(incrementCounter());
};

export const decrementCounter = () => ({
  type: 'DECREMENT',
});

export const decrement = (dispatch) => {
  dispatch(decrementCounter());
};
