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
      <Button>NOTIFY</Button>

      <Button type="primary" onClick={() => logOut()}>
        LOG OUT
      </Button>
    </FooterWrapper>
  );
}

export default Footer;
