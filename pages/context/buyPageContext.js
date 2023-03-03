import { createContext } from "react";

export const buyContext = createContext(null);

const BuyContextCom = (props) => {
  const WoldCoin3 = [
    {
      id: 1,
      isDone: true,
      coinNum: 2,
      wold: "고양이",
    },
    { id: 2, isDone: true, coinNum: 2, wold: "강아지" },
    { id: 3, isDone: true, coinNum: 2, wold: "송아지" },
    { id: 4, isDone: true, coinNum: 2, wold: "병아리" },
    { id: 5, isDone: true, coinNum: 2, wold: "망아지" },
    { id: 6, isDone: true, coinNum: 2, wold: "망아지" },
    { id: 7, isDone: true, coinNum: 2, wold: "망아지" },
    { id: 8, isDone: true, coinNum: 2, wold: "망아지" },
    { id: 9, isDone: true, coinNum: 2, wold: "망아지" },
    { id: 10, isDone: true, coinNum: 2, wold: "망아지" },
    { id: 11, isDone: true, coinNum: 2, wold: "망아지" },
    { id: 12, isDone: true, coinNum: 2, wold: "망아지" },
    { id: 13, isDone: true, coinNum: 2, wold: "망아지" },
    { id: 14, isDone: true, coinNum: 2, wold: "망아지" },
    { id: 15, isDone: true, coinNum: 2, wold: "망아지" },
    { id: 16, isDone: true, coinNum: 2, wold: "망아지" },
    { id: 17, isDone: true, coinNum: 2, wold: "망아지" },
    { id: 18, isDone: true, coinNum: 2, wold: "망아지" },
    { id: 19, isDone: true, coinNum: 2, wold: "망아지" },
    { id: 20, isDone: true, coinNum: 2, wold: "망아지" },
  ];

  return (
    <buyContext.Provider value={{ WoldCoin3 }}>
      {props.children}
    </buyContext.Provider>
  );
};

export default BuyContextCom;
