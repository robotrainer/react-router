import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "./providers/auth";

export default function PrivateRote({ children }) {
  const { auth } = useContext(AuthContext);

  if (!auth) return <Navigate to="login" replace />;

  return children;
}
