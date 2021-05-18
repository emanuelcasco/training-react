import { useState } from 'react';

import ExpensesFilter, { SELECT_ALL_YEARS_OPTION } from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from '../common/Card';
import './Expenses.css';

const DEFAULT_YEAR = new Date().getFullYear();

const filterByYear = (year, expenses) =>
  year !== SELECT_ALL_YEARS_OPTION
    ? expenses.filter((expense) => expense.date.getFullYear() === Number(year))
    : expenses;

const Expenses = ({ expenses }) => {
  const [yearFilter, setYearFilter] = useState(DEFAULT_YEAR);

  const filteredExpenses = filterByYear(yearFilter, expenses);

  return (
    <Card className="expenses">
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesFilter selected={yearFilter} onYearChange={setYearFilter} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
