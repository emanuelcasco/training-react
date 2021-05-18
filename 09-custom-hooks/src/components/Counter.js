import useCounter from '../hooks/use-counter';
import Card from './Card';

const Counter = ({ initValue, iteratee }) => {
  const counter = useCounter(Number(initValue), Number(iteratee));
  return <Card>{counter}</Card>;
};

export default Counter;
