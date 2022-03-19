import { Route, Routes } from 'react-router-dom';

import { Layout } from '@common/components/layout';
import { lazy, Suspense } from 'react';

const Login = lazy(() => import('./auth/login'));
const Signup = lazy(() => import('./auth/signup'));

function App() {
  return (
    <div className='App'>
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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
