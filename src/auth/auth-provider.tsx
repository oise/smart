import { createContext, FC, useContext } from 'react';

export interface AuthContextValue {
  isLoggedIn: () => boolean;
  login?: (value: string) => void;
}

const AuthContext = createContext<AuthContextValue>({ isLoggedIn: () => false });

export const AuthProvider: FC = ({ children }) => {
  const login = (token: string) => {
    localStorage.setItem('token', token);
  };

  const isLoggedIn = (): boolean => {
    return !!localStorage.getItem('token');
  };

  const contextValue: AuthContextValue = {
    isLoggedIn,
    login
  };

  return <AuthContext.Provider value={contextValue}> {children} </AuthContext.Provider>;
};

export const useLogin = () => useContext(AuthContext);
