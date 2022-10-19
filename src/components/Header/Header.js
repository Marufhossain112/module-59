import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link style={{ marginRight: "22px" }} to="/register">
          Register
        </Link>
        {user?.email}
        {/* {user?.uid ? (
          <button className="btn-logout" onClick={logOut}>
            Sign out
          </button>
        ) : (
          <>
            <link to="/login">Sign in</link>
            <link to="/register">Sign up</link>
          </>
        )} */}
        {user?.uid ? (
          <button className="btn-logout" onClick={logOut}>
            Log out
          </button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Sign up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
