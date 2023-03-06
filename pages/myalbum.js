import MyAlbumBanner from "@/components/myalbum/MyalbumBanner";
import MyalbumCategory from "@/components/myalbum/MyalbumCategory";
import MyalbumContent from "@/components/myalbum/MyalbumContent";
import style from "styles/myalbum/myalbumbanner.module.scss";

export default function myalbum() {
  return (
    <>
      <MyAlbumBanner />
      <MyalbumCategory />
      <MyalbumContent />
    </>
  );
}
