import { useState } from 'react';

import './ExpenseForm.css';

const fieldChangeHandler = (hook) => (event) => hook(event.target.value);
const emptyFieldsWithSetter = (...setters) =>
  Array.isArray(setters) && setters.forEach((setter) => setter(''));

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredValue, setEnteredValue] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = fieldChangeHandler(setEnteredTitle);
  const amountChangeHandler = fieldChangeHandler(setEnteredValue);
  const dateChangeHandler = fieldChangeHandler(setEnteredDate);

  const submitFormHandler = (event) => {
    // Prevents form to reload the page
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    const expense = {
      title: enteredTitle,
      value: Number(enteredValue),
      date: new Date(enteredDate),
    };
    props.onSaveSubmit(expense);
    emptyFieldsWithSetter(setEnteredTitle, setEnteredValue, setEnteredDate);
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="expense-form__controls">
        <div className="expense-form__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="expense-form__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredValue}
            min="0.05"
            step="0.05"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="expense-form__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="expense-form__actions">
        <button onClick={props.onCancellation}>Cancel</button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
