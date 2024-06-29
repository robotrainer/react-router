import { useContext, useEffect } from "react";
import { Navigate, Form, useActionData } from "react-router-dom";
import { AuthContext } from "../../app/providers/auth";

export default function Login() {
  const { auth, onLogin, setUser} = useContext(AuthContext);
  const user = useActionData();

  useEffect(() => {
    if(user && Object.keys(user).length) {
      setUser(user);
      onLogin();
    }
  }, [user])

  if (auth) return <Navigate to="/" replace />;

  return (
    <div>
      <h1>Login page</h1>
      <Form method="post">
        <p>
          <label>
            <span>Username</span>
            <input type="text" placeholder="Username" name="username" />
          </label>
        </p>
        <p>
          <label>
            <span>Password</span>
            <input type="text" placeholder="Password" name="password" />
          </label>
        </p>
        <button type="submit">Log in</button>
      </Form>
      {/* <button onClick={onLogin}>Log In</button> */}
    </div>
  );
}
