import Header from '@common/components/header';
import InputField from '@common/components/input-field';
import { NavLink } from 'react-router-dom';
import Auth from '../auth';

const Signup = (): JSX.Element => {
  return (
    <Auth>
      <Header heading={'Signup'} showBorder={false} />
      <div className='auth-container'>
        <div className='auth-form'>
          <form>
            <InputField name={'fullName'} label={'Full name'} onChange={() => console.log('log')} placeholder={'Enter your fullname'} />
            <InputField name={'emailAddress'} label={'Email Address'} onChange={() => console.log('log')} placeholder={'Enter your email'} />
            <InputField
              name={'password'}
              label={'New Password'}
              onChange={() => console.log('log')}
              placeholder={'Enter your password'}
              type='password'
            />
            <div className='auth-button'>
              <button className='button button-primary' type={'button'}>
                Sign up
              </button>
            </div>
            <div className='auth-meta'>
              Already a user? <NavLink to={'/'}> Login </NavLink>
            </div>
          </form>
        </div>
      </div>
    </Auth>
  );
};

export default Signup;
