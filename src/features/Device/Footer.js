import React from "react";
import { Button } from "antd";
import { useContextSelector } from "use-context-selector";
import { message } from "antd";
import { AuthContext } from "../../context";
import { FooterWrapper } from "./styles";
import { Device } from "./api";

function Footer() {
  const [, setToken] = useContextSelector(AuthContext, (auth) => auth);
  const logOut = () => setToken("");

  const sentNotify = async () => {
    const notifyData = {
      name: "Saifullah Sayem",
      email: "sayem312518@gmail.com",
      repoUrl: "https://github.com/kmsayem12/frontend-test",
      message:
        "Hi, Thank you for your project, Please check my GitHub repository.",
    };
    const { data } = await Device.notify(notifyData);
    message.success(data);
  };

  return (
    <FooterWrapper>
      <Button onClick={() => sentNotify()}>NOTIFY</Button>

      <Button type="primary" onClick={() => logOut()}>
        LOG OUT
      </Button>
    </FooterWrapper>
  );
}

export default Footer;
