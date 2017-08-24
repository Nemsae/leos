
const createStore = reducer => {
  let state;
  let listeners;

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener()); //  notify all change listeners that state has changed
  };

  const subscribe = (listener) => {
    listeners.push(listener);

    // instead of having a dedicated method for unsubscribing a listener, we will return a function that will do so
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  dispatch({}); //  to populate initial state upon store creation

  return {
    getState,
    dispatch,
    subscribe,
  };
};
