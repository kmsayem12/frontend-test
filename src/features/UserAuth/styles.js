import styled from "styled-components";

export const LoginWrapper = styled("div")`
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
      margin-bottom: 1.5rem;
    }
    button {
      background: #0177bd;
      border-color: #0177bd;
    }
  }
`;
