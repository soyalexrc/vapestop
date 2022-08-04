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
        {path: 'clientes', element: <Customers/>},
        {path: 'clientes/registrar', element: <CustomerRegister/>},
        {path: 'clientes/:id', element: <CustomerRegister/>},
        {path: 'productos', element: <ProductsList/>},
        {path: 'productos/registrar', element: <ProductRegister/>},
        {path: 'ventas', element: <Sales/>},
        {path: 'transacciones', element: <Transactions/>},
        {path: 'pedidos', element: <Orders/>},
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
const Customers = Loadable(lazy(() => import('../pages/customers/Customers')))
const CustomerRegister = Loadable(lazy(() => import('../pages/customers/CustomerRegister')))
const ProductRegister = Loadable(lazy(() => import('../pages/products/ProductRegister')))
const ProductsList = Loadable(lazy(() => import('../pages/products/ProductsList')))
const Sales = Loadable(lazy(() => import('../pages/sales/SalesDashboard')))
const Transactions = Loadable(lazy(() => import('../pages/transactions')))
const Orders = Loadable(lazy(() => import('../pages/orders')))

//auth
const Login = Loadable(lazy(() => import('../pages/auth/Login')))

// Generics
const NotFound = Loadable(lazy(() => import('../pages/NotFound')))
const ComingSoon = Loadable(lazy(() => import('../pages/ComingSoon')))

