import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();
// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const sessionData = JSON.parse(sessionStorage.getItem("userData")) || {};
  const [userData, setUserData] = useState(sessionData);

  const setUserDataHandler = (data) => setUserData(data);
  useEffect(() => {
    sessionStorage.setItem("userData", JSON.stringify(userData));
 
  }, [userData]);
  return (
    <UserContext.Provider
      value={{ userData, setUserDataHandler }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
