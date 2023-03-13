import "@/styles/globals.css";
import Layout from "../components/Layout";
import Headinfo from "@/components/HeadInfo";
import BuyContextCom from "../contexts/buy/buyPageContext";
import ParentComponent from "@/contexts/ParentComponent";
import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";
import { SessionProvider } from "next-auth/react"


export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <SessionProvider session={session}>
        <ParentComponent>
          <Headinfo />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ParentComponent>
      </SessionProvider>
    </>
  );
}
