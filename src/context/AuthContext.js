import {useNavigate, useLocation} from 'react-router-dom';
import {createContext, useState} from 'react';
import { sleep } from '../utils/helpers';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const location = useLocation();

  const handleLogin = async (data) => {
    console.log(data);
    await sleep(2000);
    console.log('i am here!');
    await setToken('some token');
    const origin = location.state?.from?.pathname || '/';
    navigate(origin);
  };

  const handleLogout = () => {
    setToken(null);
  };

  const value = {
    token,
    login: handleLogin,
    logout: handleLogout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

