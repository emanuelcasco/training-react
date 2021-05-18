import classes from './CartItems.module.scss';
import CardItem from './CartItem';
import Button from '../UI/Button';

const serializeAmount = (amount) => Math.round(amount * 100) / 100;

const CartItems = (props) => {
  const canCreateOrder = props.items.length > 0;

  return props.items.length > 0 ? (
    <>
      <ul className={classes['cart-items']}>
        {props.items.map((item) => (
          <CardItem
            key={item.id}
            item={item}
            onIncrementItem={props.onIncrementItem}
            onDecrementItem={props.onDecrementItem}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total amount</span>
        <span>${serializeAmount(props.totalAmount)}.-</span>
      </div>
      <div className={classes.actions}>
        <Button onClick={props.onClose} alternative>
          Close
        </Button>
        <Button onClick={props.onOrder} disabled={!canCreateOrder}>
          Order
        </Button>
      </div>
    </>
  ) : (
    <p>No items in the cart</p>
  );
};

export default CartItems;
