import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
    body {
     padding: 0;
      margin: 0;
     font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    html,
    html a,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    a,
    p,
    li,
    dl,
    th,
    dt,
    input,
    textarea,
    span,
    div, button {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

    a {
     color: inherit;
     text-decoration: none;
    }

    * {
     box-sizing: border-box;
     padding: 0;
     margin: 0;
    }
`;

export default GlobalStyle;
