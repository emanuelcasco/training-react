import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/slices/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(({ counter }) => counter.value);
  const showCounter = useSelector(({ counter }) => counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toogleCounter());
  };
  const incrementHandler = () => dispatch(counterActions.increment(5));
  const decrementHandler = () => dispatch(counterActions.decrement(5));

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && (
        <>
          <div className={classes.value}>{counter}</div>
          <button onClick={incrementHandler}>+</button>
          <button onClick={decrementHandler}>-</button>
        </>
      )}
      <br />
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
