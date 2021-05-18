import { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../common/Card';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const onClickHandler = () => setTitle('HelloWorld');

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      <button onClick={onClickHandler}>Click Me!</button>
    </Card>
  );
};

export default ExpenseItem;
