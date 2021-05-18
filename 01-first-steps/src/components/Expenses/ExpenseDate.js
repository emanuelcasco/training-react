import './ExpenseDate.css';

const ExpenseItem = ({ date }) => (
  <div className="expense-date">
    <div className="expense-date__month">
      {date.toLocaleString('en-US', {
        month: 'long',
      })}
    </div>
    <div className="expense-date__year">{date.getFullYear()}</div>
    <div className="expense-date__date">{date.getDate()}</div>
  </div>
);

export default ExpenseItem;
