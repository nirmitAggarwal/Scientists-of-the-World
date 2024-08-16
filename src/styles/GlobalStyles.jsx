import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #1a1a2e;
    color: #eaeaea;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .neon-text {
    text-shadow: 0 0 5px ${({ color }) => color}, 0 0 10px ${({ color }) =>
  color}, 0 0 20px ${({ color }) => color};
  }
`;

export default GlobalStyle;
