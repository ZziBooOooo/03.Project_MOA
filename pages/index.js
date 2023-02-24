import Head from "next/head";
import Headinfo from "@/components/HeadInfo";

import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Headinfo />
      <main className={styles.main}></main>
    </>
  );
}
