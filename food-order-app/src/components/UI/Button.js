import classnames from 'classnames/bind';
import classes from './Button.module.scss';

const cx = classnames.bind(classes);

const Button = (props) => (
  <button
    onClick={props.onClick}
    className={cx(
      'button',
      { disabled: props.disabled },
      { alternative: props.alternative },
      props.className?.join(' ')
    )}
  >
    {props.children}
  </button>
);

export default Button;
