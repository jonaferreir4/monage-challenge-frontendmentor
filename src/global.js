import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @font-face {
    font-family: 'Be Vietnam Pro';
    src: url('./fonts/BeVietnamPro-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Be Vietnam Pro';
    src: url('./fonts/BeVietnamPro-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Be Vietnam Pro';
    src: url('./fonts/BeVietnamPro-ExtraBold.ttf') format('truetype');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Be Vietnam Pro';
    src: url('./fonts/BeVietnamPro-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

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
    font-family: 'Be Vietnam Pro', sans-serif;
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
`;
