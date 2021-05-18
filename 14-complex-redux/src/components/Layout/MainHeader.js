import { useDispatch, useSelector } from 'react-redux';

import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import { shoppingCartActions } from '../../store/shopping-cart';

const MainHeader = (props) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.shoppingCart);

  const toggleCartHandler = () => {
    dispatch(shoppingCartActions.toggleCart());
  };

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton
              cartCount={cart.items.length}
              onClick={toggleCartHandler}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
