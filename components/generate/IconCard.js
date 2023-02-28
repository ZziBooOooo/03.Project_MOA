import React from "react";
import Image from "next/image";

const IconCard = ({ imagePath }) => {
  console.log(imagePath);
  return (
    <div>
      {
        <Image
          src={imagePath}
          alt="icon"
          layout="responsive"
          width={200}
          height={200}
        />
      }
    </div>
  );
};

export default IconCard;
