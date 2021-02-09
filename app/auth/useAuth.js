import { useContext } from 'react';
import jwtDecode from 'jwt-decode';

import AuthContext from './context';
import AuthStorage from './storage';

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user);
    AuthStorage.storage.storeToken(authToken);
  };
  const logOut = () => {
    setUser(null);
    AuthStorage.removeToken();
  };
  return { user, logOut, logIn };
};
export default useAuth;
