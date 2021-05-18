import React from 'react';
import styles from './Input.module.scss';

const Input = React.forwardRef(({ input, label }, ref) => (
  <div className={styles['input']}>
    <label htmlFor={input.id}>{label}</label>
    <input ref={ref} id={input.id} {...input} />
  </div>
));

export default Input;
