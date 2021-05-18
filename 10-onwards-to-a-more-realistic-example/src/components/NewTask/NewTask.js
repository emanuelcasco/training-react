import useHttp from '../../hooks/use-http';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const { isLoading, httpError, sendRequest } = useHttp();

  const enterTaskHandler = async (taskText) => {
    sendRequest(
      {
        url: 'https://react-http-1e585-default-rtdb.firebaseio.com/tasks.json',
        method: 'POST',
        body: { text: taskText },
        headers: {
          'Content-Type': 'application/json',
        },
      },
      (task) => {
        const generatedId = task.name;
        const createdTask = { id: generatedId, text: taskText };
        props.onAddTask(createdTask);
      }
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {httpError && <p>{httpError}</p>}
    </Section>
  );
};

export default NewTask;
