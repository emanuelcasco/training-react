import UserItem from './UserItem';
import styles from './UsersList.module.css';

const UsersList = ({ users, onItemSelected }) => {
  const content =
    users.length > 0 ? (
      users.map((user) => (
        <UserItem
          onClick={onItemSelected}
          key={user.id}
          id={user.id}
          username={user.username}
          age={user.age}
        />
      ))
    ) : (
      <p>{'No users to show!'}</p>
    );
  return <ul className={styles['users-list']}>{content}</ul>;
};

export default UsersList;
