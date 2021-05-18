import React from 'react';

import './ExpensesFilter.css';

export const SELECT_ALL_YEARS_OPTION = 'none';

const ExpensesFilter = (props) => {
  const yearFilterSelectedHandler = (event) => {
    const selectedYear = event.target.value;
    props.onYearChange(selectedYear);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearFilterSelectedHandler}>
          <option value={SELECT_ALL_YEARS_OPTION}>Show all</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
