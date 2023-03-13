import React  from "react";
import Confetti from "react-confetti";
import { useEffect, useRef, useState } from "react";

export default function Test() {
  const [size, setSize] =useState({ width: 0, height: 0 });
  const wrapper =useRef(null);

  useEffect(() => {
    if (wrapper.current) {
      const width = wrapper.current.offsetWidth;
      const height = wrapper.current.offsetHeight;
      setSize({ width, height });
    }
  }, []);

  return (
    <div className="test" ref={wrapper} style={{height:"100vh"}}>
      <div>
        <Confetti
          style={{ pointerEvents: "none" }}
          width={size.width}
          height={size.height}
          numberOfPieces={70}
          recycle={false}
          onConfettiComplete={(confetti) => {
            confetti.reset();
          }}
        />
      </div>
      <style jsx>{`
               .test{
                width:100vw;
                height: 300vh;
               }
            `}</style>
    </div>
  );
}