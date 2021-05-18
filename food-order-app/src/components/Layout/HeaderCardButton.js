import { useEffect, useContext, useState } from 'react';
import classnames from 'classnames/bind';

import classes from './HeaderCardButton.module.css';
import CardIcon from '../Cart/CardIcon';
import CartContext from '../../store/cart-context';

const cx = classnames.bind(classes);

const HeaderCardButton = (props) => {
  const [bumpEffectEnabled, toggleBumpEffect] = useState(false);
  const { items } = useContext(CartContext);

  useEffect(() => {
    if (items.length === 0) return;
    toggleBumpEffect(true);
    const timer = setTimeout(() => {
      toggleBumpEffect(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button
      onClick={props.onClick}
      className={cx('button', { bump: bumpEffectEnabled })}
    >
      <span className={classes['icon']}>
        <CardIcon />
      </span>
      <span>Your cart: </span>
      <span className={classes['badge']}>{items.length}</span>
    </button>
  );
};

export default HeaderCardButton;
