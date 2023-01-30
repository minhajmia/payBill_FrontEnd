import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  useEffect((email) => {
    fetch(`https://backend-xi-wine.vercel.app/api/login?email=${email}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data?.email) {
          //   setUser(true);
        } else {
          setUser(false);
        }
      });
  }, []);
  console.log(user);
  const authInfo = { user };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
