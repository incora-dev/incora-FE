import type { AppProps } from "next/app";
import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { Provider } from "react-redux";
import store from "../services/store";
import { ApolloProvider } from "@apollo/client";
import NavState from "../services/context/mainMenu";
import { useEffect, useState } from "react";
import Notice from "../components/PrivacyPolicyPage/Notice";
import { useApollo } from "../graphql/client";
import router from "next/router";
import RouterLoader from "../components/common/RouterLoader";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(false);

  const apolloClient = useApollo(pageProps);

  router.events.on("routeChangeStart", () => {
    setLoading(true);
  });
  router.events.on("routeChangeComplete", () => {
    setLoading(false);
  });

  useEffect(() => {
    // screen.orientation.lock("portrait-primary");
  }, []);
  return (
    <>
      <NavState>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <ApolloProvider client={apolloClient}>
              {loading && <RouterLoader />}
              <Component {...pageProps} />
            </ApolloProvider>
          </Provider>
        </ThemeProvider>
      </NavState>
      <Notice />
    </>
  );
}

export default MyApp;
