import { useDispatch, useSelector } from 'react-redux';
import { onCheckingCredentials, onLogin, onLogout } from '../store/auth/authSlice';
import authApi from '../apis/authApi';

export const useAuthStore = () => {
  const { errorMessage, status, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startChecking = async () => {
    try {
      dispatch(onCheckingCredentials());

      const token = localStorage.getItem('token');
      if (!token) return dispatch(onLogout());

      const { data } = await authApi.get('/refresh');
      console.log(data);
    } catch (error) {
      console.log(error);
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  const startLogin = async (email, password) => {
    try {
      dispatch(onCheckingCredentials());

      const { data } = await authApi.post('/login', { email, password });

      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime);

      dispatch(onLogin(data.user));
    } catch (error) {
      console.log(error);
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  const startRegister = async (name, username, email, password) => {
    try {
      dispatch(onCheckingCredentials());

      const { data } = await authApi.post('/signup', { name, username, email, password });

      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime);

      dispatch(onLogin(data.user));
    } catch (error) {
      console.log(error);
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  return {
    // properties
    errorMessage,
    status,
    user,

    // methods
    startChecking,
    startLogin,
    startRegister,
  };
};
