import { useEffect } from 'react';
import { useAuth } from '../../store/AuthContext';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const { currentUser, passwordReset, requestStatus, loading } = useAuth();

  useEffect(() => {
    console.log(requestStatus, loading);
  }, [requestStatus, loading]);

  const changePasswordHandler = (event) => {
    event.preventDefault();
    passwordReset(currentUser.email);
  };

  return (
    <form onSubmit={changePasswordHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" />
      </div>
      <div className={classes.action}>
        <button disabled={loading}>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
