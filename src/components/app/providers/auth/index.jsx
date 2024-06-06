import { createContext, useState } from "react";

const defaultAuthContext = {
  auth: false,
  setAuth: () => {},
}

export const AuthContext = createContext(defaultAuthContext);

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
