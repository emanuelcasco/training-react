import { useState } from 'react';

import styles from './UserForm.module.css';

import Button from '../UI/Button/Button';
import ErrorModal from '../UI/ErrorModal/ErrorModal';

const fieldIsEmpty = (value) => value.trim() === '';

const UserForm = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handleAgeChange = (event) => setAge(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();
    if (fieldIsEmpty(username) || fieldIsEmpty(age)) {
      return setShowErrorModal(true);
    }
    props.onSubmit({ username, age: Number(age) });
    setUsername('');
    setAge('');
  };

  const closeModalHandler = () => {
    setShowErrorModal(false);
  };

  return (
    <>
      {showErrorModal && (
        <ErrorModal
          title="This is embarrasing"
          content="An error ocurred!"
          onClose={closeModalHandler}
        />
      )}
      <form className={styles['user-form']} onSubmit={submitHandler}>
        <div className={styles['user-form__element']}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={username}
            onChange={handleUsernameChange}
            type="string"
          ></input>
        </div>
        <div className={styles['user-form__element']}>
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            value={age}
            onChange={handleAgeChange}
            type="number"
          ></input>
        </div>
        <div className={styles['user-form__element']}>
          <Button>Add User</Button>
        </div>
      </form>
    </>
  );
};

export default UserForm;
