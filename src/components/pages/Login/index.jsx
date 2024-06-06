import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../app/providers/auth";

export default function Login() {
  const { auth, setAuth } = useContext(AuthContext);

  if (auth) return <Navigate to="/" replace />;

  return (
    <div>
      <h1>Login page</h1>
      <button onClick={() => setAuth(true)}>Log In</button>
    </div>
  );
}
