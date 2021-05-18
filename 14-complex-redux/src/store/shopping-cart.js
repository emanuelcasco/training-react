import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  showCart: false,
  cartLoaded: false,
  cart: { items: [] },
};

const updateItemsBy = ({
  items,
  input,
  findBy,
  ifItemExist,
  ifItemDoesNotExist,
}) => {
  const itemIndex = items.findIndex(findBy);
  if (itemIndex >= 0) {
    return ifItemExist(items, itemIndex, input);
  } else if (ifItemDoesNotExist) {
    return ifItemDoesNotExist(items, input);
  }
  return items;
};
const findItemById = (id) => (item) => item.id === id;
const addNewItem = (items, input) => {
  return [
    ...items,
    {
      id: input.id,
      title: input.title,
      price: input.price,
      total: input.price * input.quantity,
      quantity: input.quantity,
    },
  ];
};
const increaseItem = (items, index, input) => {
  const newQuantity = items[index].quantity + input.quantity;
  items[index] = {
    ...items[index],
    quantity: newQuantity,
    total: newQuantity * items[index].price,
  };
  return items;
};
const reduceItemOrRemove = (items, index, input) => {
  const newQuantity = items[index].quantity - input.quantity;
  if (newQuantity !== 0) {
    items[index] = {
      ...items[index],
      quantity: newQuantity,
      total: newQuantity * items[index].price,
    };
    return items;
  }
  return items.filter((item) => item.id !== input.id);
};

export const shoppingCartSlice = createSlice({
  name: 'shopping-cart',
  initialState: INITIAL_STATE,
  reducers: {
    replaceCart(state, action) {
      state.cart = action.payload;
    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    addProduct(state, { payload }) {
      state.cart.items = updateItemsBy({
        items: state.cart.items,
        input: payload,
        findBy: findItemById(payload.id),
        ifItemExist: increaseItem,
        ifItemDoesNotExist: addNewItem,
      });
      state.cartLoaded = true;
    },
    incrementProductById(state, { payload }) {
      state.cart.items = updateItemsBy({
        items: state.cart.items,
        input: payload,
        findBy: findItemById(payload.id),
        ifItemExist: increaseItem,
      });
      state.cartLoaded = true;
    },
    removeProductById(state, { payload }) {
      state.cart.items = updateItemsBy({
        items: state.cart.items,
        input: payload,
        findBy: findItemById(payload.id),
        ifItemExist: reduceItemOrRemove,
      });
      state.cartLoaded = true;
    },
  },
});

const fetchCartData = () => async (dispatch) => {
  const fetchData = async () => {
    const response = await fetch(
      'https://react-http-1e585-default-rtdb.firebaseio.com/orders.json'
    );
    if (!response.ok) throw new Error('Cannot send cart data');
    return response.json();
  };
  try {
    const response = await fetchData();
    dispatch(shoppingCartSlice.actions.replaceCart(response));
  } catch (error) {
    console.error('failed', error);
  }
};

const sendCartData = (cart) => async (dispatch) => {
  console.log(cart);
  const sendRequest = async () => {
    const response = await fetch(
      'https://react-http-1e585-default-rtdb.firebaseio.com/orders.json',
      {
        method: 'PUT',
        body: JSON.stringify(cart),
      }
    );

    if (!response.ok) throw new Error('Cannot send cart data');
    return response.json();
  };
  try {
    await sendRequest();
    console.log('succesful send');
  } catch (error) {
    console.error('failed', error);
  }
};

export const shoppingCartActions = {
  ...shoppingCartSlice.actions,
  fetchCartData,
  sendCartData,
};

export const shoppingCartReducer = shoppingCartSlice.reducer;
