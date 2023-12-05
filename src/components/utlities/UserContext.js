import { createContext } from "react";

const UserContext = createContext({
  loggedIn:"Default User",
  signUp:"SignUp",
});

export default UserContext;