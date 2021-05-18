import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { shoppingCartActions } from './store/shopping-cart';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const { showCart, cartLoaded, cart } = useSelector(
    (state) => state.shoppingCart
  );

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    } else if (cartLoaded) {
      dispatch(shoppingCartActions.sendCartData(cart));
    }
  }, [cart, cartLoaded, dispatch]);

  useEffect(() => {
    dispatch(shoppingCartActions.fetchCartData());
  }, [dispatch]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
