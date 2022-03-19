import './sidebar.scss';
import logo from '@assets/logo.svg';

const Sidebar = (): JSX.Element => {
  return (
    <div className='sidebar-container'>
      <img src={logo} alt='Logo' />
      <nav className='sidebar-menu'>
        <div className='icon-saved-videos'></div>
        <div className='icon-'></div>
      </nav>
    </div>
  );
};

export default Sidebar;
