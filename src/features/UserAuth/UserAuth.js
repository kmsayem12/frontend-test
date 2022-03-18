import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useContextSelector } from "use-context-selector";
import { RowWrapper } from "./styles";
import UserAuthForm from "./UserAuthForm";
import { AuthContext } from "../../context";

function UserAuth() {
  const location = useLocation();
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const [token] = useContextSelector(AuthContext, (auth) => auth);

  useEffect(() => {
    if (token) {
      setRedirectToReferrer(true);
    }
  }, [token]);

  const { from } = location.state || { from: { pathname: "/device" } };

  if (redirectToReferrer) {
    return <Navigate to={from} />;
  }
  return (
    <RowWrapper>
      <div className="login-content">
        <h1 className="text-center">Login</h1>
        <UserAuthForm />
      </div>
    </RowWrapper>
  );
}

export default UserAuth;
