import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 123,
    title: 'Car insurance',
    value: 299.99,
    date: new Date(2021, 3, 10),
  },
  {
    id: 124,
    title: 'Dentist',
    value: 79.99,
    date: new Date(2020, 4, 10),
  },
  {
    id: 125,
    title: 'Gifts',
    value: 99.99,
    date: new Date(2019, 5, 10),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((previous) => [expense, ...previous]);
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onExpenseSave={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
