import React, { useState } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogin: () => {},
  onLogout: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedId, setIsLoggedIn] = useState(false);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };
  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', true);
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedId: isLoggedId,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
