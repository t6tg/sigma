import { AppProps } from "next/app";
import "../styles/index.css";

function MyAPP({ Component, pageProps }: AppProps) {
  return (
    <div>
      <title>CIS : KMUTNB</title>
      <Component {...pageProps} />
    </div>
  );
}

export default MyAPP;
