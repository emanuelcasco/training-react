import { useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItems from './CartItems';
import Checkout from './Checkout';
import useHttp from '../../hooks/use-http';

const Cart = (props) => {
  const {
    isLoading: isSubmiting,
    sendOrderError,
    sendRequest: sendOrder,
  } = useHttp();
  const [didSubmit, setDidSubmit] = useState(false);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const cartCtx = useContext(CartContext);

  const incrementItemHandler = cartCtx.addItem;
  const decrementItemHandler = cartCtx.removeItem;
  const orderClickHandler = () => {
    setShowCheckoutForm(true);
  };
  const checkoutConfirmHandler = async (distributionData) => {
    await sendOrder({
      url: 'https://react-http-1e585-default-rtdb.firebaseio.com/orders.json',
      method: 'POST',
      body: { user: distributionData, items: cartCtx.items },
    });
    if (sendOrderError) {
      console.log(sendOrderError);
      return;
    }
    setDidSubmit(true);
    cartCtx.reset();
  };

  const orderCheckoutContent = (
    <>
      {!showCheckoutForm ? (
        <CartItems
          items={cartCtx.items}
          totalAmount={cartCtx.totalAmount}
          onIncrementItem={incrementItemHandler}
          onDecrementItem={decrementItemHandler}
          onClose={props.onModalClosed}
          onOrder={orderClickHandler}
        />
      ) : (
        <Checkout
          onConfirm={checkoutConfirmHandler}
          onClose={props.onModalClosed}
        />
      )}
    </>
  );
  const isSubmitingModalPlaceholder = <p>Sending order data...</p>;
  const didSubmitingModalPlaceholder = <p>Successfully sent the order!</p>;

  const cartModalContent = isSubmiting
    ? isSubmitingModalPlaceholder
    : didSubmit
    ? didSubmitingModalPlaceholder
    : orderCheckoutContent;

  return <Modal onClose={props.onModalClosed}>{cartModalContent}</Modal>;
};

export default Cart;
