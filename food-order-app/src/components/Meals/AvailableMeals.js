import { useEffect, useState } from 'react';
import useHttp from '../../hooks/use-http';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.scss';
import MealItem from './MealItem/MealItem';

const pipe = (...fns) => (x) => fns.reduce((y, f) => f(y), x);

const AvailableMeals = () => {
  const [availableMeals, setAvailableMeals] = useState([]);
  const { isLoading, httpError, sendRequest: fetchMeals } = useHttp();

  const mapMeals = (raw) =>
    Object.entries(raw).map(([id, meal]) => Object.assign({ id }, meal));

  useEffect(() => {
    fetchMeals(
      {
        url: 'https://react-http-1e585-default-rtdb.firebaseio.com/meals.json',
      },
      pipe(mapMeals, setAvailableMeals)
    );
  }, [fetchMeals]);

  const content = () => {
    if (httpError) return <p>Cannot retrieve content.</p>;
    if (isLoading) return <p>Loading...</p>;
    const mealList = Object.entries(availableMeals).map(([id, meal]) => (
      <MealItem key={id} meal={meal}>
        {meal.name}
      </MealItem>
    ));
    return <ul>{mealList}</ul>;
  };

  return (
    <section className={classes['meals']}>
      <Card>{content()}</Card>
    </section>
  );
};

export default AvailableMeals;
