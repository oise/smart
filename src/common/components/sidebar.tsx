import './sidebar.scss';
import logo from '@assets/logo.svg';

export const Sidebar = (): JSX.Element => {
  return (
    <div className='sidebar-container'>
      <img src={logo} alt='Logo' />
    </div>
  );
};
