import classes from './CartItem.module.scss';

const CartItem = ({ item, ...props }) => {
  const incrementHandler = () => props.onIncrementItem({ ...item, amount: 1 });
  const decrementHanlder = () => props.onDecrementItem({ ...item, amount: 1 });

  return (
    <li className={classes['cart-item']}>
      <div>
        <div className={classes['cart-item__details']}>
          <h2>{item.name}</h2>
          <p className={classes['cart-item__price']}>${item.price}</p>
          <p className={classes['cart-item__amount']}>x{item.amount}</p>
        </div>
      </div>
      <div className={classes['cart-item__counters']}>
        <button
          onClick={incrementHandler}
          className={classes['cart-item__counter']}
        >
          +
        </button>
        <button
          onClick={decrementHanlder}
          className={classes['cart-item__counter']}
        >
          -
        </button>
      </div>
    </li>
  );
};

export default CartItem;
