import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import "./Login.css";
const Login = () => {
  const [error, setError] = useState(null);
  const { signIn } = useContext(AuthContext);
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    // console.log(email, password, confirm);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });

    // handle password error
    if (password.length < 6) {
      setError("Password should be at least 6 characters or more..");
      return;
    }
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleForm}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p>
        New to ema john <Link to="/register">Create a New Account</Link>
      </p>
    </div>
  );
};

export default Login;
