const redux = require('redux');

/**
 * Reducer function ⚡️, inputs old state + despatch action => new state
 * Should be pure
 * */
const INITIAL_STATE = { counter: 0 };
const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'increment':
      return Object.freeze({
        counter: state.counter + 1,
      });
    case 'decrement':
      return Object.freeze({
        counter: state.counter - 1,
      });
    default:
      break;
  }
};

/**
 * Store 🗄
 *
 * Receives the reducer function as parameter
 * */
const store = redux.createStore(counterReducer);

/**
 * Subscriber 👂
 *
 * Is triggered whenever the state is changed. We need to subscribe to the store
 * */
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};
store.subscribe(counterSubscriber);

/**
 * Action 🗣
 *
 * */
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
