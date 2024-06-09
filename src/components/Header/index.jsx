import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../app/providers/auth";

export default function Header() {
  const { onLogout } = useContext(AuthContext);
  return (
    <header>
      <nav style={{display: "flex", columnGap: 20, margin: 30}}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="posts">Posts</NavLink>
        <NavLink to="profile">Profile</NavLink>
      </nav>

      <button onClick={onLogout}>Log Out</button>
    </header>
  );
}
