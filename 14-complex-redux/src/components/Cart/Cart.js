import { useSelector, useDispatch } from 'react-redux';
import { shoppingCartActions } from '../../store/shopping-cart';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.shoppingCart);

  const addItemHandler = (itemId) => {
    dispatch(
      shoppingCartActions.incrementProductById({ id: itemId, quantity: 1 })
    );
  };

  const removeItemHandler = (itemId) => {
    dispatch(
      shoppingCartActions.removeProductById({ id: itemId, quantity: 1 })
    );
  };

  const content =
    cart.items.length > 0 ? (
      cart.items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onAddItem={addItemHandler}
          onRemoveItem={removeItemHandler}
        />
      ))
    ) : (
      <p>No items in your cart!</p>
    );

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{content}</ul>
    </Card>
  );
};

export default Cart;
