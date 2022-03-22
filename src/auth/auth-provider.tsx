import { createContext, FC, useContext, useEffect, useState } from 'react';

export interface AuthContextValue {
  isLoggedIn?: boolean;
  login?: (value: string) => void;
}

const AuthContext = createContext<AuthContextValue>({});

export const AuthProvider: FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!localStorage.getItem('token'));

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, [isLoggedIn]);

  const login = (token: string) => {
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
  };

  const contextValue: AuthContextValue = {
    isLoggedIn,
    login
  };

  return <AuthContext.Provider value={contextValue}> {children} </AuthContext.Provider>;
};

export const useLogin = () => useContext(AuthContext);
