import Header from '@common/components/header';
import InputField from '@common/components/input-field';
import { NavLink } from 'react-router-dom';
import Auth from '../auth';

const Login = (): JSX.Element => {
  return (
    <Auth>
      <Header heading={'Login'} showBorder={false} />
      <div className='auth-container'>
        <div className='auth-form'>
          <form>
            <InputField name={'emailAddress'} label={'Email Address'} onChange={() => console.log('jk')} placeholder={'Enter your email'} />
            <InputField name={'password'} label={'Password'} onChange={() => console.log('kl')} placeholder={'Enter your password'} type='password' />
            <div className='auth-button'>
              <button className='button button-primary' type={'button'}>
                Login
              </button>
            </div>
            <div className='auth-meta'>
              New here? <NavLink to={'signup'}> Sign up </NavLink>
            </div>
          </form>
        </div>
      </div>
    </Auth>
  );
};

export default Login;
