import './sidebar.scss';
import logo from '@assets/logo.svg';
import { Link } from 'react-router-dom';

const Sidebar = (): JSX.Element => {
  return (
    <div className='sidebar-container'>
      <img className='sidebar-logo' src={logo} alt='Logo' />
      <nav className='sidebar-menu'>
        <Link to={'/'} className='sidebar-menu-item'>
          <span className='icon-select-video' />
        </Link>
        <Link to={'browse'} className='sidebar-menu-item'>
          <span className='icon-saved-videos' />
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
