import React, { createContext, useState, useContext } from "react";
import UserContext from "./userContext";

 const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    login:false,
    firstName: "",
    lastName: "",
    aadharNo: 0,
    wallet: "",
    email: "",
    password: "",
  });

  const updateUser = (updatedUserInfo) => {
    console.log(updatedUserInfo);
    setUser({ ...user, ...updatedUserInfo });
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;