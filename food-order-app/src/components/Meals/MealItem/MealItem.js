import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.scss';
import MealItemForm from './MealItemForm';

const MealItem = ({ meal }) => {
  const cartCtx = useContext(CartContext);
  const price = `$${meal.price?.toFixed(2)}`;

  const addMealToCardHandler = (amount) => {
    cartCtx.addItem({ ...meal, amount });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onItemSubmit={addMealToCardHandler} id={meal.id} />
      </div>
    </li>
  );
};

export default MealItem;
