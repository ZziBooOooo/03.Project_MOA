import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import style from "@/styles/main/main.module.css";

const CoinImage = () => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    // console.log(isLoaded)
  }, [isLoaded]);

  return (
    <div
      ref={ref}
      className={style.coinGif}
      style={{ opacity: isLoaded ? 1 : 0 }}
    >
      {inView && (
        <img
          src="/assets/images/main/coin.gif"
          alt="coin"
          onLoad={handleImageLoad}
          style={{ opacity: isLoaded ? 1 : 0 }}
          width={400}
          height={280}
        />
      )}
    </div>
  );
  {
    console.log(isLoaded);
  }
};

export default CoinImage;
