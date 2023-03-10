import "@/styles/globals.css";
import Layout from "../components/Layout";
import Headinfo from "@/components/HeadInfo";
import BuyContextCom from "../contexts/buy/buyPageContext";
import ParentComponent from "@/contexts/ParentComponent";
import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";

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
