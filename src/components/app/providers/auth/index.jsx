import { createContext, useEffect, useState } from "react";

const defaultAuthContext = {
  auth: false,
  onLogin: () => {},
  onLogout: () => {},
}

export const AuthContext = createContext(defaultAuthContext);

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if(localStorage.getItem("auth")) {
      setAuth(true);
    }
  }, []);

  const onLogin = () => {
    setAuth(true);
    localStorage.setItem("auth", true);
  }


  const onLogout = () => {
    setAuth(false);
    localStorage.removeItem("auth");
  }

  return (
    <AuthContext.Provider value={{ auth, onLogin, onLogout}}>
      {children}
    </AuthContext.Provider>
  );
}
