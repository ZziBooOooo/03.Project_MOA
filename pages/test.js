import React, { useEffect, useState } from "react";

const test = () => {
  const currentUserId = 1;
  const [userDatas, setUserDatas] = useState();
  function getData() {
    fetch(`/api/hello?id=${currentUserId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setUserDatas(data);
        }
      });
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(userDatas);
  }, [userDatas]);

  return <div>test</div>;
};

export default test;
