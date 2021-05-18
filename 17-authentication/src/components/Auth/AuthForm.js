import { useEffect, useRef, useState } from 'react';

import classes from './AuthForm.module.css';

import { useAuth } from '../../store/AuthContext';
import { useHistory } from 'react-router';

const AuthForm = () => {
  const { currentUser, signin, signup, loading, error } = useAuth();
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    console.log(currentUser && !error, currentUser, error);
    if (currentUser && !error) {
      history.push('/');
    }
  }, [currentUser, error, history]);

  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    if (isLogin) {
      signin(email, password);
    } else {
      signup(email, password);
    }
  };

  const primaryButtonText = loading
    ? 'LOADING...'
    : isLogin
    ? 'Login'
    : 'Create Account';

  const secondaryButtonText = isLogin
    ? 'Create new account'
    : 'Login with existing account';

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" ref={emailInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            ref={passwordInputRef}
            required
          />
        </div>
        <div className={classes.actions}>
          <button disabled={loading}>{primaryButtonText}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {secondaryButtonText}
          </button>
        </div>
        {error && <p className={classes.error}>{error}</p>}
      </form>
    </section>
  );
};

export default AuthForm;
