import styled from "styled-components";
import { Row } from "antd";

export const RowWrapper = styled("div")`
  height: 100vh;
  position: relative;
  background: #253237;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-content {
    width: 30rem;
    padding: 2rem;
    box-shadow: ${(props) => props.theme.lightShadow};
    background-color: #fff;
    border-radius: 0.6rem;
    h1 {
      font-size: 2rem;
    }
  }
`;
