import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../../app/providers/auth";

export default function Signup() {
  const { auth } = useContext(AuthContext);

  if (auth) return <Navigate to="/" replace />;

  return (
    <div>
      <h1>Signup page</h1>
    </div>
  );
}
