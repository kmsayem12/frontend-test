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

export const DevicesWrapper = styled("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    position: absolute;
    color: white;
  }
  .circle {
    display: grid;
    grid-template-areas: "layer";
    place-items: center;
    border-radius: 50%;
    --radius: 25vmin;
    width: calc(2 * var(--radius));
    height: calc(2 * var(--radius));
  }

  .stat {
    grid-area: layer;
    width: 10vmin;
    height: 10vmin;
    border-radius: 50%;

    display: grid;
    place-items: center;

    background: white;
    font-weight: bold;
    font-size: 3vmin;

    // Decimal value, 0-1 based on the child's index.
    --d: calc(var(--i) / var(--total));
    // Offset to get better starting placement on the circle
    --r-offset: -0.25turn;
    // Full circle
    --r-amount: 1turn;
    // Rotation based on the decimal and r modifiers
    --r: calc((var(--r-amount) * var(--d)) + var(--r-offset));
    // Rotate, transform out, then negative rotation so the content appears upright
    --transform: rotate(var(--r)) translate(var(--radius))
      rotate(calc(-1 * var(--r)));

    transform: var(--transform);
    transition: transform 1.5s ease-in-out;
    //transition-delay: calc(0.1s * var(--i));

    .circle:hover & {
      --radius: calc(-20vmin);
      // Animate the rotation
      --r-offset: -1.75turn; //0.75turn;
    }
  }
`;
