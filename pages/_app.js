import "@/styles/globals.css";
import Layout from "../components/Layout";
import Headinfo from "@/components/HeadInfo";
import BuyContextCom from "./context/buy/buyPageContext";
import ParentComponent from "@/contexts/ParentComponent";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ParentComponent>
        <Headinfo />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ParentComponent>
    </>
  );
}
