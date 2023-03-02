import "@/styles/globals.css";
import Layout from "../components/Layout";
import Headinfo from "@/components/HeadInfo";
import ParentComponent from "@/context/ParentComponent";

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
