import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

function Login(props) {
  const location = useLocation();
  const isLoggedIn = false;

  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  useEffect(() => {
    if (isLoggedIn) {
      setRedirectToReferrer(true);
    }
  }, [isLoggedIn]);

  const { from } = location.state || { from: { pathname: "/device" } };

  if (redirectToReferrer) {
    return <Navigate to={from} />;
  }
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
}

export default Login;
