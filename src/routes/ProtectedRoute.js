import {
  Navigate,
  useLocation,
} from 'react-router-dom';
import useAuth from '../hooks/useAuth'

export default function ProtectedRoute({ children }) {
  const { token } = useAuth();
  const location = useLocation();

  if (!token) {
    return <Navigate to="/auth/login" replace state={{ from: location }} />;
  }

  return children;
};
