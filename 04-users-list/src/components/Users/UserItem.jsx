import styles from './UserItem.module.css';

const UserItem = (props) => {
  const itemClickHandler = () => props.onClick(props.id);
  return (
    <li onClick={itemClickHandler} className={styles['user-item']}>
      {props.username} ({props.age} years old)
    </li>
  );
};

export default UserItem;
