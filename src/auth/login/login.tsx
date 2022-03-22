import Header from '@common/components/header';
import InputField from '@common/components/input-field';
import { NavLink, useNavigate } from 'react-router-dom';
import Auth from '../auth';
import AuthService from '../auth.service';
import { ChangeEvent, MouseEvent, useState } from 'react';
import { useLogin } from '../auth-provider';

const authService = new AuthService();

interface LoginType {
  username: string;
  password: string;
}

const Login = (): JSX.Element => {
  const [formValues, setFormValues] = useState<LoginType>({ username: '', password: '' });

  const [error, setError] = useState<string>(null);

  const navigate = useNavigate();
  const { login } = useLogin();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  /**
   * For a successful login,
   * we call "login" from the Auth Provider to set a token;
   * this in turn triggers the isLoggedIn state to true
   */
  const submit = async (event: MouseEvent) => {
    event.preventDefault();
    setError(null);
    authService
      .login(formValues.username, formValues.password)
      .then(() => {
        login('random-token-value');
        navigate('/browse');
      })

      .catch((error) => {
        return setError(error);
      });
  };

  return (
    <Auth>
      <Header heading={'Login'} showBorder={false} />
      <div className='layout-page-content'>
        <div className='auth-container'>
          <div className='auth-form'>
            {error && <div className='form-error'>{error}</div>}
            <form>
              <InputField
                name={'username'}
                label={'Email Address'}
                onChange={handleChange}
                placeholder={'Enter your email'}
                value={formValues.username}
              />
              <InputField
                name={'password'}
                label={'Password'}
                onChange={handleChange}
                placeholder={'Enter your password'}
                type='password'
                value={formValues.password}
              />
              <div className='auth-button'>
                <button className='button button-primary' onClick={submit}>
                  Login
                </button>
              </div>
              <div className='auth-meta'>
                New here? <NavLink to={'signup'}> Sign up </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Auth>
  );
};

export default Login;
