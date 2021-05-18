import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);

  const transformTask = (tasks) => {
    const loadedTasks = [];
    for (const taskKey in tasks) {
      loadedTasks.push({ id: taskKey, text: tasks[taskKey].text });
    }
    setTasks(loadedTasks);
  };

  const { isLoading, httpError, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    fetchTasks(
      {
        url: 'https://react-http-1e585-default-rtdb.firebaseio.com/tasks.json',
      },
      transformTask
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={httpError}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
