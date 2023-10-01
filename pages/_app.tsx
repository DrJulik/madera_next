import "../styles/index.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import App from "next/app";
import SimpleReactLightbox from "simple-react-lightbox";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SimpleReactLightbox>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SimpleReactLightbox>
  );
}

export default MyApp;
