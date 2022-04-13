import type { AppProps } from "next/app";
import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { ApolloProvider } from "@apollo/client";
import NavState from "../services/context/mainMenu";
import { useState } from "react";
import Notice from "../components/PrivacyPolicyPage/Notice";
import { useApollo } from "../graphql/client";
import router from "next/router";
import RouterLoader from "../components/common/RouterLoader";
import FooterComponent from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(false);

  const apolloClient = useApollo(pageProps);

  router.events.on("routeChangeStart", () => {
    setLoading(true);
    document.body.style.position = 'fixed';
  });
  router.events.on("routeChangeComplete", () => {
    setLoading(false);
    document.body.style.position = 'initial';
  });

  return (
    <>
      <NavState>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <ApolloProvider client={apolloClient}>
            {loading && <RouterLoader />}
            <Component {...pageProps} />
            <FooterComponent />
          </ApolloProvider>
        </ThemeProvider>
      </NavState>
      <Notice />
    </>
  );
}

export default MyApp;
