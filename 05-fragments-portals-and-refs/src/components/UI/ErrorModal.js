import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const Backdrop = (props) => (
  <div className={classes.backdrop} onClick={props.onConfirm} />
);

const ModalOverlay = (props) => (
  <Card className={classes.modal}>
    <header className={classes.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={classes.content}>
      <p>{props.message}</p>
    </div>
    <footer className={classes.actions}>
      <Button onClick={props.onConfirm}>Okay</Button>
    </footer>
  </Card>
);

// const Portal = (props) => {
//   console.log(props.reference, props.children);
//   return <>{ReactDOM.createPortal(props.children, props.reference)}</>;
// };

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('root-backdrop')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onConfirm={props.onConfirm}
          message={props.message}
          title={props.title}
        />,
        document.getElementById('root-overlay')
      )}
    </>
  );
};

export default ErrorModal;
