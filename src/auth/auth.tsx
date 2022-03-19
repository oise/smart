import './auth.scss';
import { FC } from 'react';

const Auth: FC = ({ children }) => {
  return <div className='auth-background'>{children}</div>;
};

export default Auth;
