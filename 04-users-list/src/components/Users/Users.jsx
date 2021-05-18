import styles from './Users.module.css';

import UsersList from './UsersList';
import Content from '../UI/Content/Content';

const Users = ({ onUserSelected, users }) => {
  return (
    <Content className={styles['users']}>
      <UsersList onItemSelected={onUserSelected} users={users} />
    </Content>
  );
};

export default Users;
