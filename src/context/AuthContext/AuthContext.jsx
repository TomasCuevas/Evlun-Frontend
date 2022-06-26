import { createContext, useReducer, useState } from "react";

/**
 * @helpers
 */
import { authReducer } from "./authReducer";
import { types } from "../../types/types";
import { useAuth } from "../../hooks/useAuth";

/**
 * @AuthContext
 */
export const AuthContext = createContext();

/**
 * @reducerInit
 */
const initReducer = () => {
  return (localStorage.getItem("user")) ? localStorage.getItem("user") : null;
}

export const AuthProvider = ({ children }) => {
  const [ user, dispatch ]  = useReducer(authReducer, {}, initReducer);
  const [ token, setToken ] = useState(localStorage.getItem("token") || null);
  const [ auth, loading ]   = useAuth(token);

  const login = (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    dispatch({ type: types.LOGIN, payload: user });
  }

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch({ type: types.LOGOUT });
  }

  return (
    <AuthContext.Provider value={{
      ...user,
      user,
      auth,
      loading,
      login,
      logout
    }}>
      { children }
    </AuthContext.Provider>
  )
}