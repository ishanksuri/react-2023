import { createContext } from "react";

// kind of like a central global object &
// can access this context from anywhere in the app
const UserContext = createContext({
  loggedInUser: "Default User",
});
export default UserContext;
