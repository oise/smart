import './sidebar.scss';
import logo from '@assets/logo.svg';
import { NavLink } from 'react-router-dom';

const Sidebar = (): JSX.Element => {
  return (
    <div className='sidebar-container'>
      <img className='sidebar-logo' src={logo} alt='Logo' />
      <nav className='sidebar-menu'>
        <NavLink to={'create'} className={({ isActive }) => (isActive ? 'sidebar-menu-item active' : 'sidebar-menu-item')}>
          <span className='icon-select-video' />
        </NavLink>
        <NavLink to='browse' className={({ isActive }) => (isActive ? 'sidebar-menu-item active' : 'sidebar-menu-item')}>
          <span className='icon-saved-videos' />
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
