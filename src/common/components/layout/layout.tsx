import './layout.scss';
import { Outlet } from 'react-router-dom';
import Sidebar from '@common/components/sidebar';

export const Layout = () => {
  return (
    <>
      <Sidebar />
      <main className='layout-page'>
        <Outlet />
      </main>
    </>
  );
};
