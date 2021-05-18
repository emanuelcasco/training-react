import { useRef, useState } from 'react';

import classes from './MealItemForm.module.scss';
import Input from '../../UI/Input';

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [isValidAmount, setIsValidAmount] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = Number(amountInputRef.current.value);
    if (
      typeof enteredAmount !== 'number' ||
      enteredAmount < 0 ||
      enteredAmount > 5
    ) {
      return setIsValidAmount(false);
    }
    props.onItemSubmit(enteredAmount);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: `amount_${props.id}`,
          type: 'number',
          min: '1',
          max: '5',
          steps: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!isValidAmount && <p>Please enter a valid amount!</p>}
    </form>
  );
};

export default MealItemForm;
