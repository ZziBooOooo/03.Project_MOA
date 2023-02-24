import React from "react";
import Head from "next/head";

const Headinfo = ({ title, keyword, contents }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta keyword={keyword}></meta>
      <meta contents={contents}></meta>
    </Head>
  );
};

Headinfo.defaultProps = {
  title: "My Image",
  keyword: "Only one image in world",
  contents: "Only one image in world",
};

export default Headinfo;
