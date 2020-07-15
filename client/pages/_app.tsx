import { AppProps } from "next/app";
import "../styles/index.css";

function MyAPP({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyAPP;
