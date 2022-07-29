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

      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(onLogin(data.user));
    } catch (error) {
      console.error(error);
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  const startLogin = async (email, password) => {
    try {
      dispatch(onCheckingCredentials());

      const { data } = await authApi.post('/login', { email, password });

      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(onLogin(data.user));
    } catch (error) {
      console.error(error);
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  const startSignup = async (name, username, email, password) => {
    try {
      dispatch(onCheckingCredentials());

      const { data } = await authApi.post('/signup', { name, username, email, password });

      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(onLogin(data.user));
    } catch (error) {
      console.error(error);
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  const startLogout = async () => {
    try {
      dispatch(onLogout());
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    // properties
    errorMessage,
    status,
    user,
    ...user,

    // methods
    startChecking,
    startLogin,
    startLogout,
    startSignup,
  };
};
