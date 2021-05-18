import styles from './ErrorModal.module.css';

import Button from '../Button/Button';
import Content from '../Content/Content';

const ErrorModal = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.onClose}>
      <Content className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.content}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onClose}>Close</Button>
        </footer>
      </Content>
    </div>
  );
};

export default ErrorModal;
