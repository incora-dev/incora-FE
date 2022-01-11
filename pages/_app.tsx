import type { AppProps } from "next/app";
import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { Provider } from "react-redux";
import store from "../services/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
