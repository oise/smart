import { Route, Routes } from 'react-router-dom';
import { Layout } from '@common/components/layout';
import { lazy, Suspense } from 'react';

const Login = lazy(() => import('./auth/login'));
const Signup = lazy(() => import('./auth/signup'));
const Browse = lazy(() => import('./browse'));
const Create = lazy(() => import('./create'));

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={null}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path='/signup'
          element={
            <Suspense fallback={null}>
              <Signup />
            </Suspense>
          }
        />
        <Route
          path='/browse'
          element={
            <Suspense fallback={null}>
              <Browse />
            </Suspense>
          }
        />
        <Route
          path='/create'
          element={
            <Suspense fallback={null}>
              <Create />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
