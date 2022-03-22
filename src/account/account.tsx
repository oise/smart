import './account.scss';
import Header from '@common/components/header';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import AuthService from '../auth/auth.service';

const authService = new AuthService();

const logout = () => {
  authService.logout();
};

const Account = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Header heading='My Account'>
        <div className='account-logout' onClick={logout}>
          Logout
        </div>
      </Header>
      <div className='layout-page-content flex column'>
        <nav className='account-nav'>
          <NavLink
            to={'/account/profile'}
            className={({ isActive }) => (isActive || pathname === '/account' ? 'account-nav-item active' : 'account-nav-item')}
          >
            Profile
          </NavLink>
          <NavLink to={'/account/plan'} className={({ isActive }) => (isActive ? 'account-nav-item active' : 'account-nav-item')}>
            My Plan
          </NavLink>
          <NavLink to={'/account/billing'} className={({ isActive }) => (isActive ? 'account-nav-item active' : 'account-nav-item')}>
            Billing
          </NavLink>
        </nav>
        <div className='account-content'>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Account;
