import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import classes from './Auth.module.css';
import { authActions } from '../store/slices/auth';

const Auth = () => {
  const dispatch = useDispatch();
  const email = useRef();
  const password = useRef();

  const loginHandler = (event) => {
    event.preventDefault();
    if (email && password) {
      return dispatch(authActions.login(email, password));
    }
  };

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input ref={email} type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input ref={password} type="password" id="password" />
          </div>
          <button onClick={loginHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
