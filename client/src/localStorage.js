export const loadState = () => {
  try {
    console.log('localStorage:LOAD ', localStorage);
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
    console.log('localStorage:SAVE ', localStorage);
  } catch (err) {
    console.log('Saving Redux state to localStorage failed.');
  }
};
