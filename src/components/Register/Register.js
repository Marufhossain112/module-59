import React, {
  useContext,
  useState
} from "react";
import "./Register.css";
import {
  Link
} from "react-router-dom";
import {
  AuthContext
} from '../../context/UserContext';

const Register = () => {
  // const [error, setError] = useState(null);
  const {
    createUser
  } = useContext(AuthContext);
  // const handleSubmit = (event) => {
  //     event.preventDefault();
  //     const form = event.target;
  //     const email = form.email.value;
  //     const password = form.password.value;
  //     const confirm = form.confirm.value;

  //     if (password.length < 6) {
  //         setError('Password should be 6 characters or more.');
  //         return;
  //     }

  //     if (password !== confirm) {
  //         setError('Your Password did not match');
  //         return;
  //     }

  //     createUser(email, password)
  //         .then(result => {
  //             const user = result.user;
  //             console.log(user);
  //             form.reset();
  //         })
  //         .catch(error => console.error(error));

  // }

  const [error,
    setError] = useState(null);

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    // console.log(email, password, confirm);

    createUser(email, password)
    .then(result=> {
      const user = result.user;
      console.log(user);
    }).catch(error=> {
      console.error(error)
    })

    // handle password error
    if (password.length < 6) {
      setError("Password should be at least 6 characters or more..");
      return;
    }
    if (password !== confirm) {
      setError("Password does not match");
      return;
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={handleForm}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
    </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
    </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="confirm" required />
  </div>
        <input className="btn-submit" type="submit" value="Sign Up" />
</form>
      <p>
        Already Have an Account <Link to="/login">Login</Link>
</p>
      <p className="text-error">
{error}
</p>
</div>
);
};

export default Register;