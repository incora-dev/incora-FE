import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  :root {
    --fs-150: 9.375rem;
    --fs-120: 7.5rem;
    --fs-72: 4.5rem;
    --fs-64: 4rem;
    --fs-48: 3rem;
    --fs-36: 2.25rem;
    --fs-28: 1.75rem;
    --fs-26: 1.625rem;
    --fs-24: 1.5rem;
    --fs-23: 1.438rem;
    --fs-21: 1.313rem;
    --fs-20: 1.25rem;
    --fs-18: 1.125rem;
    --fs-16: 1rem;
    --fs-14: 0.875rem;
    --fs-13: 0.813rem;
    --fs-12: 0.75rem;
    --fs-11: 0.688rem;
    --fs-10: 0.625rem;

    @media (max-width: ${theme.breakpoints.mobile}) {
      --fs-120: 3.5rem;
      --fs-64: 2.25rem;
      --fs-36: 1.75rem;
    }
  }

    html,
    body {
     padding: 0;
      margin: 0;
     font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      max-width: 100vw;
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
