import { configureStore } from '@reduxjs/toolkit';

import { shoppingCartReducer } from './shopping-cart';

const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
  },
});

export default store;
