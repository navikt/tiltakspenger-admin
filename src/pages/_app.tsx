import Header from "../components/Header";
import "@navikt/ds-css";
import "@navikt/ds-css-internal";
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
