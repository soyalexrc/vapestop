import {useNavigate, useLocation} from 'react-router-dom';
import {createContext, useState} from 'react';
import { sleep } from '../utils/helpers';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const location = useLocation();

  const handleLogin = async () => {
    await sleep(2000);
    await setToken('some token');
    localStorage.token = token;
    const origin = location.state?.from?.pathname || '/';
    navigate(origin);
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
    navigate('/');
  };

  const getToken = () => {
    return localStorage.token;
  }

  const value = {
    token,
    login: handleLogin,
    logout: handleLogout,
    getToken: getToken,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

