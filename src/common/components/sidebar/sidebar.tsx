import './sidebar.scss';
import logo from '@assets/logo.svg';
import { NavLink } from 'react-router-dom';
import avatar from '/src/assets/avatar.svg';

const Sidebar = (): JSX.Element => {
  return (
    <div className='sidebar-container'>
      <img className='sidebar-logo' src={logo} alt='Logo' />
      <nav className='sidebar-menu'>
        <div className='sidebar-menu-top'>
          <NavLink to={'create'} className={({ isActive }) => (isActive ? 'sidebar-menu-item active' : 'sidebar-menu-item')}>
            <span className='icon-select-video' />
          </NavLink>
          <NavLink to='browse' className={({ isActive }) => (isActive ? 'sidebar-menu-item active' : 'sidebar-menu-item')}>
            <span className='icon-saved-videos' />
          </NavLink>
        </div>
        <div className='sidebar-menu-bottom'>
          <NavLink to='account'>
            <img src={avatar} alt={'profile avatar'} />
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
