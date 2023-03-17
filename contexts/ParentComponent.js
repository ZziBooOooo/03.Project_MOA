import React, { useState } from "react";
import { wordCountContext } from "./generate/wordCountContext";
import { userWordContext } from "./generate/userWordContext";
import { userSentenceContext } from "./generate/userSentenceContext";
import { selectTypeContext } from "./generate/selectTypeContext";
import { selectStyleContext } from "./generate/selectStyleContext";

/* 
** ParentComponent를 만든 이유

_app.js에서 ParentComponent를 사용하면,
_app.js의 모든 하위 컴포넌트에서
TargetIdContext와 UserCountContext를 사용할 수 있다.

만약, UserCountContext 값을 사용해야 하는 컴포넌트가 
_app.js의 '특정' 하위 컴포넌트에서만 사용되는 경우, 
해당 컴포넌트의 상위 컴포넌트에서 
UserCountContext.Provider를 사용하여 
UserCountContext 값을 전달한다.

따라서, ParentComponent에서 
UserCountContext.Provider를 사용하여 
UserCountContext 값을 제공하는 것이 올바른 방법. 
이렇게 하면, UserCountContext 값을 사용하는 
특정 하위 컴포넌트만 UserCountContext 값을 받게 되고, 
_app.js의 다른 하위 컴포넌트는 
UserCountContext 값을 받지 않게 된다.

코드의 가독성과 유지보수성이 좋아지며, 
불필요한 Context 전파를 방지할 수 있다.

지금 아래 코드에서는 _app.js의 모든 하위컴포넌트에서
Context를 사용할 수 있는 형태. - > 나중에 수정?
*/

const ParentComponent = ({ children }) => {
  const [wordCount, setWordCount] = useState(null);
  const [userWords, setUserWords] = useState("");
  const [userSentence, setUserSentence] = useState("");
  const [imgType, setImgType] = useState("");
  const [imgStyle, setImgStyle] = useState("");
  const [userCoin, setUserCoin] = useState(null);
  const [userWord, setUserWord] = useState(null);

  return (
    <selectStyleContext.Provider value={{ imgStyle, setImgStyle }}>
      <selectTypeContext.Provider value={{ imgType, setImgType }}>
        <userSentenceContext.Provider value={{ userSentence, setUserSentence }}>
          <userWordContext.Provider value={{ userWords, setUserWords }}>
            <wordCountContext.Provider value={{ wordCount, setWordCount }}>
              {children}
            </wordCountContext.Provider>
          </userWordContext.Provider>
        </userSentenceContext.Provider>
      </selectTypeContext.Provider>
    </selectStyleContext.Provider>
  );
};

export default ParentComponent;
