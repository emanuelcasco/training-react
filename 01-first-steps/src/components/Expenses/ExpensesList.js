import ExpenseItem from './ExpenseItem';

const ExpensesList = ({ expenses }) => {
  if (expenses.length === 0) return <h3>No expenses found!</h3>;
  return (
    <ul>
      {expenses.map((elem) => (
        <li key={elem.id}>
          <ExpenseItem date={elem.date} title={elem.title} price={elem.value} />
        </li>
      ))}
    </ul>
  );
};

export default ExpensesList;
