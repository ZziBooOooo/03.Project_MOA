import MyAlbumBanner from "@/components/myalbum/MyalbumBanner";
import MyalbumCategory from "@/components/myalbum/MyalbumCategory";
import MyalbumContent from "@/components/myalbum/MyalbumContent";
import { useState } from "react";

export default function Myalbum() {
  const [catePage, setcatePage] = useState("디지털 아트");
  const handleCateBtn = (type) => {
    setcatePage(type);
  };

  return (
    <>
      <MyAlbumBanner />
      <MyalbumCategory onChange={handleCateBtn} catePage={catePage} />
      <MyalbumContent catePage={catePage} />
    </>
  );
}
