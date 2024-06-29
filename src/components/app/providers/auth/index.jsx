import { createContext, useEffect, useState } from "react";

const defaultAuthContext = {
  auth: false,
  onLogin: () => {},
  onLogout: () => {},
  setUser: () => {},
}

export const AuthContext = createContext(defaultAuthContext);

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    if(localStorage.getItem("auth")) {
      setAuth(true);
    }
  }, []);


  // useEffect(() => {
  //   if(Object.keys(user).length) {
  //     onLogin();
  //   }
  // }, [user])

  const onLogin = () => {
    setAuth(true);
    localStorage.setItem("auth", true);
  }


  const onLogout = () => {
    setAuth(false);
    localStorage.removeItem("auth");
  }

  return (
    <AuthContext.Provider value={{ auth, onLogin, onLogout, setUser}}>
      {children}
    </AuthContext.Provider>
  );
}
