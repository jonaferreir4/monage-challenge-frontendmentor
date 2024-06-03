import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Be Vietnam Pro';
    src: url('./fonts/BeVietnamPro-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Be Vietnam Pro', Arial, Helvetica, sans-serif;
    font-size: 16px;
    background-color: hsl(0, 0%, 98%);
    color: hsl(233, 12%, 13%);
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 700;
  }

  p {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* Include other styles from index.css here */
`;

export default GlobalStyles;
