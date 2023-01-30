import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../ContextApi/AuthProvider";

const PrivateRoute = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div>
      if(user){navigate("/")}
      else{navigate("/register")}
    </div>
  );
};

export default PrivateRoute;
