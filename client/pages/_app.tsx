import { AppProps } from "next/app";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

function MyAPP({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyAPP;
