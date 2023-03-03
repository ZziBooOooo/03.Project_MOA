import "@/styles/globals.css";
import Layout from "../components/Layout";
import Headinfo from "@/components/HeadInfo";
import BuyContextCom from "./context/buyPageContext";

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
