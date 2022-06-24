import { useEffect, useState } from "react"

export const useAuth = ( token ) => {
  const [{ auth, loading }, setAuth] = useState({
    auth: false,
    loading: true
  });


  useEffect(() => {
    if (token) {
      setAuth({
        auth: true,
        loading: false
      });
    } else {
      setAuth({
        auth: true,
        loading: false
      });
    }
  }, [])

  return [auth, loading];
}