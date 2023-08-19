import { createContext, useEffect, useState } from "react";

export const AuthContext=createContext();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

const [isLoggedIn, setIsLoggedIn] = useState(
  sessionStorage.getItem("isLoggedIn")==='true'
);
const loginHandler=()=>  setIsLoggedIn(true);
const logoutHandler=()=> setIsLoggedIn(false);

useEffect(()=>{
sessionStorage.setItem("isLoggedIn", isLoggedIn);
},[isLoggedIn])

    return (
      <AuthContext.Provider value={{ isLoggedIn, loginHandler, logoutHandler }}>
        {children}
      </AuthContext.Provider>
    );
};
export default AuthProvider;