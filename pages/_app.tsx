import type { AppProps } from "next/app";
import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { Provider } from "react-redux";
import store from "../services/store";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { GRAPH_QL_LINK } from "../constants";
import NavState from "../services/context/mainMenu";
import { useEffect } from "react";
import Notice from "../components/PrivacyPolicyPage/Notice";

const client = new ApolloClient({
  uri: GRAPH_QL_LINK,
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    screen.orientation.lock("portrait-primary");
  }, [])
  return (
    <>
    <NavState>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </Provider>
      </ThemeProvider>
      </NavState>
      <Notice/>
    </>
  );
}

export default MyApp;
