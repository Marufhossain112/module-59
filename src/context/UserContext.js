import React, {
  createContext,
  useState
} from "react";
import {
  getAuth,
  createUserWithEmailAndPassword
} from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);

export const AuthContext = createContext();
const UserContext = ({
  children
}) => {
  const [user,
    setUser] = useState(null);
  const createUser = (email, password)=> {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const authInfo = {
    user,createUser
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;