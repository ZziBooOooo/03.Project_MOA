import "@/styles/globals.css";
import Layout from "../components/Layout";
import Headinfo from "@/components/HeadInfo";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Headinfo />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
