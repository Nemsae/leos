import expect from 'expect';

const initialState = {
  count: 0,
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log('state: ', state, action.type);
      return {
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default testReducer;

const actualState1 = testReducer(
  {
    count: 0,
  },
  {
    type: 'INCREMENT',
  },
);

expect(actualState1.count).toEqual(1);

const actualState2 = testReducer(
  {
    count: 1,
  },
  {
    type: 'DECREMENT',
  },
);

expect(actualState2.count).toEqual(0);

console.log('Test passed!');
