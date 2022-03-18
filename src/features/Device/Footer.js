import React from "react";
import { Button } from "antd";
import { FooterWrapper } from "./styles";

function Footer() {
  return (
    <FooterWrapper>
      <Button size="large" className="px-4">
        notify
      </Button>

      <Button size="large" className="px-4" type="primary">
        Logout
      </Button>
    </FooterWrapper>
  );
}

export default Footer;
