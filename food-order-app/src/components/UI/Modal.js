import ReactDOM from 'react-dom';

import styles from './Modal.module.scss';

const Backdrop = (props) => (
  <div onClick={props.onClick} className={styles.backdrop}></div>
);

const Overlay = (props) => (
  <div className={styles.modal}>
    <div className={styles.content}>{props.children}</div>
  </div>
);

const PORTAL_OBJECTIVE_ELEM = document.getElementById('overlays');

const Modal = (props) => (
  <>
    {ReactDOM.createPortal(
      <Backdrop onClick={props.onClose} />,
      PORTAL_OBJECTIVE_ELEM
    )}
    {ReactDOM.createPortal(
      <Overlay>{props.children}</Overlay>,
      PORTAL_OBJECTIVE_ELEM
    )}
  </>
);

export default Modal;
