import {Navigate, useRoutes} from 'react-router-dom';
import {lazy, Suspense} from "react";
import LoadingScreen from '../components/LoadingScreen'
import MainLayout from '../layouts/MainLayout'
import LogoOnlyLayout from '../layouts/LogoOnlyLayout'
import ProtectedRoute from './ProtectedRoute'

const Loadable = (Component) => (props) => {
  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            top: 0,
            left: 0,
            width: 1,
            zIndex: 9999,
            position: "fixed",
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "*",
      element: <LogoOnlyLayout />,
      children: [
        { path: "proximamente", element: <ComingSoon /> },
        // { path: "maintenance", element: <Maintenance /> },
        { path: "login", element: <Login /> },
        // { path: "500", element: <Page500 /> },
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <MainLayout/>
        </ProtectedRoute>
      ),
      children: [
        {path: '', element: <Home/>},
        {path: 'perfil', element: <Profile/>},
        {path: 'usuarios', element: <UsersList/>},
        {path: 'usuarios/registrar', element: <UserRegister/>},
        {path: 'productos', element: <ProductRegister/>},
        {path: 'productos/registrar', element: <ProductsList/>},
      ]
    },
    {
      path: '/auth',
      element: <LogoOnlyLayout />,
      children: [
        {path: 'login', element: <Login />},
      ]
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ])
}

const Home = Loadable(lazy(() => import('../pages/Home')))
const Profile = Loadable(lazy(() => import('../pages/Profile')))
const UsersList = Loadable(lazy(() => import('../pages/UsersList')))
const UserRegister = Loadable(lazy(() => import('../pages/UserRegister')))
const ProductRegister = Loadable(lazy(() => import('../pages/ProductRegister')))
const ProductsList = Loadable(lazy(() => import('../pages/ProductsList')))

//auth
const Login = Loadable(lazy(() => import('../pages/auth/Login')))

// Generics
const NotFound = Loadable(lazy(() => import('../pages/NotFound')))
const ComingSoon = Loadable(lazy(() => import('../pages/ComingSoon')))

