import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import { generateRandomId } from '../../utils';
import './NewExpense.css';

const NewExpense = ({ onExpenseSave }) => {
  const [showForm, setShowForm] = useState(false);
  const addExpenseHandler = (input) => {
    const expense = { ...input, id: generateRandomId() };
    onExpenseSave(expense);
  };

  const toggleForm = () => setShowForm((prev) => !prev);

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm
          onCancellation={toggleForm}
          onSaveSubmit={addExpenseHandler}
        />
      ) : (
        <button onClick={toggleForm}>Add expense</button>
      )}
    </div>
  );
};

export default NewExpense;
