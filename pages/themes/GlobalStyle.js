import { createGlobalStyle } from 'styled-components';
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    background: ${ theme.color.cyberpunkNavy };
    font-family: ${ theme.fontFamily.paragraph }, monospace;
    color: #fff;
  }
`;

export default GlobalStyle;