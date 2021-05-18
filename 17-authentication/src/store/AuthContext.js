import { useContext, useState, useEffect, createContext } from 'react';
import { auth } from '../libs/firebase';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [requestStatus, setRequestStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const signup = (email, password, fullName) => {
    setRequestStatus('pending');
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((ref) => {
        ref.user.updateProfile({
          displayName: fullName,
        });
        setRequestStatus('completed');
        return ref;
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const signin = (email, password) => {
    setRequestStatus('pending');
    console.log(email, password);
    return auth
      .signInWithEmailAndPassword(email, password)
      .then((ref) => {
        console.log(ref);
        setRequestStatus('completed');
        return ref;
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const signout = () => {
    return auth.signOut();
  };

  const passwordReset = (email) => {
    setRequestStatus('pending');
    return auth
      .sendPasswordResetEmail(email)
      .then((ref) => {
        setRequestStatus('completed');
        return ref;
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    const unsubscribe = auth.onIdTokenChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, [currentUser]);

  const value = {
    currentUser,
    signup,
    signin,
    signout,
    passwordReset,
    loading,
    requestStatus,
    error,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
