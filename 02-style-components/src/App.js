import React, { useState } from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import Optional from './components/UI/Optional/Optional';
import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' },
  ]);

  const addGoalHandler = (enteredText) =>
    setCourseGoals((prevGoals) => [
      { text: enteredText, id: Math.random().toString() },
      ...prevGoals,
    ]);

  const deleteItemHandler = (goalId) =>
    setCourseGoals((prevGoals) =>
      prevGoals.filter((goal) => goal.id !== goalId)
    );

  const emptyGoalsPlaceholder = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        <Optional
          condition={courseGoals.length > 0}
          placeholder={emptyGoalsPlaceholder}
        >
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        </Optional>
      </section>
    </div>
  );
};

export default App;
