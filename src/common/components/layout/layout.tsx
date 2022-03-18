import { Outlet } from 'react-router-dom';
import { Sidebar } from '@common/components/sidebar';
import './layout.scss';

export const Layout = () => {
  return (
    <>
      <Sidebar />
      <div className='layout-page'>
        <Outlet />
      </div>
    </>
  );
};
