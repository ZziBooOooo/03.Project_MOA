import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";

function TypeChart({ userDatas }) {
  const chartContainer = useRef(null);
  const [typeDatas, setTypeDatas] = useState([]);
  const [typeCounts, setTypeCounts] = useState([]);

  useEffect(() => {
    const allTypeSliceArr = userDatas.map((item) => {
      return item.imgUrl.map((img) => img.type);
    });
    const allTypeArr = [].concat(...allTypeSliceArr);

    const frequency = allTypeArr.reduce((acc, curr) => {
      if (curr in acc) {
        acc[curr]++;
      } else {
        acc[curr] = 1;
      }
      return acc;
    }, {});

    const sortedFrequency = Object.entries(frequency)
      .sort(([, count1], [, count2]) => count2 - count1)
      .slice(0, 5);

    setTypeDatas(sortedFrequency.map(([string]) => string));
    setTypeCounts(sortedFrequency.map(([, count]) => count));
  }, [userDatas]);

  useEffect(() => {
    let myChart = null;

    const options = {
      layout: {
        padding: {},
      },
      borderRadius: 3,
      legend: {},
    };

    const chartCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !myChart) {
          myChart = new Chart(chartContainer.current, {
            type: "doughnut",
            data: {
              labels: typeDatas,
              responsive: true,
              datasets: [
                {
                  label: "타입 사용빈도",
                  data: typeCounts,
                  backgroundColor: [
                    " #ff3d6b",
                    " #fdbc16",
                    " #2288ff",
                    "#7bca14",
                    "#872adf",
                  ],
                },
              ],
            },
            options: {
              animation: {
                duration: 1500,
                easing: "easeInOutQuart",
              },
            },
          });
        } else if (!entry.isIntersecting && myChart) {
          myChart.destroy();
          myChart = null;
        }
      });
    };

    const observer = new IntersectionObserver(chartCallback, {
      threshold: 0.3, // Intersection 옵션
    });

    if (chartContainer && chartContainer.current) {
      observer.observe(chartContainer.current);
    }

    return () => {
      observer.disconnect();
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [typeDatas, typeCounts]);

  return (
    <div>
      <canvas ref={chartContainer}></canvas>
    </div>
  );
}

export default TypeChart;
