import { useReducer } from 'react';
import _ from 'lodash';

import CardContext from './cart-context';

const CART_ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  RESET: 'RESET',
};

const defaultCartState = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  const itemIndex =
    action.item && _.findIndex(state.items, { id: action.item.id });
  let stateUpdated = _.cloneDeep(state);
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM:
      if (itemIndex >= 0) {
        stateUpdated.items[itemIndex].amount += action.item.amount;
        stateUpdated.totalAmount += action.item.price * action.item.amount;
      } else {
        stateUpdated.items = [...state.items, action.item];
        stateUpdated.totalAmount += action.item.price * action.item.amount;
      }
      break;
    case CART_ACTIONS.REMOVE_ITEM:
      if (state.items[itemIndex].amount - action.item.amount === 0) {
        stateUpdated.items = state.items.filter((i) => i.id !== action.item.id);
        stateUpdated.totalAmount -= action.item.price * action.item.amount;
      } else {
        stateUpdated.items[itemIndex].amount -= action.item.amount;
        stateUpdated.totalAmount -= action.item.price * action.item.amount;
      }
      break;
    case CART_ACTIONS.RESET:
      stateUpdated = { items: [], totalAmount: 0 };
      break;
    default:
      break;
  }
  return stateUpdated;
};

const CardProvider = (props) => {
  const [cartState, cartDispatcher] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (item) => {
    cartDispatcher({ type: CART_ACTIONS.ADD_ITEM, item });
  };
  const removeItemHandler = (item) => {
    cartDispatcher({ type: CART_ACTIONS.REMOVE_ITEM, item });
  };
  const resetHandler = () => {
    cartDispatcher({ type: CART_ACTIONS.RESET });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    reset: resetHandler,
  };

  return (
    <CardContext.Provider value={cartContext}>
      {props.children}
    </CardContext.Provider>
  );
};

export default CardProvider;
