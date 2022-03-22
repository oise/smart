import { Route, Routes, useNavigate } from 'react-router-dom';
import { Layout } from '@common/components/layout';
import { FC, lazy, Suspense, useEffect } from 'react';
import { useLogin } from './auth/auth-provider';

/**
 * HOC to allow access to pages with
 * proper authorization
 * @param children
 * @constructor
 */
const ProtectedRoute: FC<any> = ({ children }) => {
  const { isLoggedIn } = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn()) {
      return navigate({ pathname: '/' });
    }
  });

  return children;
};

// Component Routes
const Login = lazy(() => import('./auth/login'));
const Signup = lazy(() => import('./auth/signup'));
const Browse = lazy(() => import('./browse'));
const Create = lazy(() => import('./create'));
const Account = lazy(() => import('./account'));
const Profile = lazy(() => import('./account/profile'));
const Plan = lazy(() => import('./account/plan'));
const Billing = lazy(() => import('./account/billing'));

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
              <ProtectedRoute>
                <Browse />
              </ProtectedRoute>
            </Suspense>
          }
        />
        <Route
          path='/create'
          element={
            <Suspense fallback={null}>
              <ProtectedRoute>
                <Create />
              </ProtectedRoute>
            </Suspense>
          }
        />
        <Route
          path='/account'
          element={
            <Suspense fallback={null}>
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={null}>
                <Profile />
              </Suspense>
            }
          />
          <Route
            path={'profile'}
            element={
              <Suspense fallback={null}>
                <Profile />
              </Suspense>
            }
          />
          <Route
            path={'plan'}
            element={
              <Suspense fallback={null}>
                <Plan />
              </Suspense>
            }
          />
          <Route
            path={'billing'}
            element={
              <Suspense fallback={null}>
                <Billing />
              </Suspense>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
