import React from "react";
import Head from "next/head";

const Headinfo = ({ title, keyword, contents }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta keyword={keyword}></meta>
      <meta contents={contents}></meta>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </Head>
  );
};

Headinfo.defaultProps = {
  title: "My Image",
  keyword: "Only one image in world",
  contents: "Only one image in world",
};

export default Headinfo;
