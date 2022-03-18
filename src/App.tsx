import { Route, Routes } from 'react-router-dom';

import { Layout } from '@common/components/layout';
import { lazy, Suspense } from 'react';

const Login = lazy(() => import('./login'));

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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
