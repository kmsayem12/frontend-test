import styled from "styled-components";
import { Row } from "antd";

export const RowWrapper = styled("div")`
  height: 100vh;
  background: #ff7043;
  display: flex;
  flex-direction: column;
  .devices-content {
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const FooterWrapper = styled("div")`
  background: #d76845;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  button:last-child {
    margin-left: 1em;
  }
`;
