import styles from './AddUser.module.css';
import UserForm from './UserForm';

import Content from '../UI/Content/Content';

const UserInput = (props) => {
  const onSubmitHandler = (newUser) => {
    props.onNewUser(newUser);
  };
  return (
    <Content className={styles['add-user']}>
      <UserForm onSubmit={onSubmitHandler} />
    </Content>
  );
};

export default UserInput;
