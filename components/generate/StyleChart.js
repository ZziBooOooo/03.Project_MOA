import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";

function StyleChart({ userDatas }) {
  const chartContainer = useRef(null);
  const [styleDatas, setStyleDatas] = useState([]);
  const [styleCounts, setStyleCounts] = useState([]);

  useEffect(() => {
    const allStyleSliceArr = userDatas.map((item) => {
      return item.imgUrl.map((img) => img.style);
    });
    const allStyleArr = [].concat(...allStyleSliceArr);

    const frequency = allStyleArr.reduce((acc, curr) => {
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

    setStyleDatas(sortedFrequency.map(([string]) => string));
    setStyleCounts(sortedFrequency.map(([, count]) => count));
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
              labels: styleDatas,
              responsive: true,
              datasets: [
                {
                  label: "스타일 사용빈도",
                  data: styleCounts,
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
  }, [styleDatas, styleCounts]);

  return (
    <div>
      <canvas ref={chartContainer}></canvas>
    </div>
  );
}

export default StyleChart;
