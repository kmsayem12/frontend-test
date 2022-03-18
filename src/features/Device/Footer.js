import React from "react";
import { Button } from "antd";
import { useContextSelector } from "use-context-selector";
import { AuthContext } from "../../context";
import { FooterWrapper } from "./styles";

function Footer() {
  const [, setToken] = useContextSelector(AuthContext, (auth) => auth);
  const logOut = () => setToken("");

  return (
    <FooterWrapper>
      <Button size="large" className="px-4">
        notify
      </Button>

      <Button
        size="large"
        className="px-4"
        type="primary"
        onClick={() => logOut()}
      >
        Logout
      </Button>
    </FooterWrapper>
  );
}

export default Footer;
