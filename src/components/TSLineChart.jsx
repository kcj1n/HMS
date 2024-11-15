//--------------------------------------------------------------------------------//
//                                                                                //
// TSLineChart.jsx                                                                    //
//                                                                                //
// This source code is made freely available for                                  //
// possible modification and redistribution.                                      //   
//                                                                                //
// If any question, send email to kcjin000@gmail.com                              //
//                                                                                //
//--------------------------------------------------------------------------------//

import React, { useState, useEffect } from 'react';
import { Line }                       from 'react-chartjs-2';
import 'chart.js/auto';

const TSLineChart = ({ mainData }) => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Time Series Data',
        data: [ ],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime  = new Date().toLocaleTimeString();
      const newValue = mainData.temp; // mainData.temp를 직접 사용

      setData((prevData) => {
        const updatedLabels = [...prevData.labels, newTime];
        const updatedValues = [...prevData.datasets[0].data, newValue];

        if (updatedLabels.length > 20) {
          updatedLabels.shift(); // 가장 오래된 레이블 삭제
          updatedValues.shift(); // 가장 오래된 데이터 삭제
        }

        return {
          labels: updatedLabels,
          datasets: [
            {
              ...prevData.datasets[0],
              data: updatedValues,
            },
          ],
        };
      });

      //console.log('newValue:', newValue);
    }, 1000);

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 클리어
  }, [mainData.temp]); // mainData.temp를 의존성 배열에 추가


    const options = {
      
      responsive: true, // 차트를 반응형으로 설정
      maintainAspectRatio: false, // 비율 유지하지 않기
    
     x: {
        type: 'time', // x축을 시간으로 설정 (시간 데이터를 사용할 때)
        time: {
          unit: 'second', // 시간 단위 설정 (second, minute, hour 등)
          tooltipFormat: 'HH:mm:ss', // 툴팁에 표시할 시간 형식
          displayFormats: {
            second: 'HH:mm:ss', // x축 레이블에 표시할 시간 형식
          },
        },
        ticks: {
          autoSkip: true, // 자동으로 눈금을 건너뛰기
          maxTicksLimit: 10, // 최대 눈금 개수 설정
        },
      },
  };

  return (
    <div className="w-[240px] h-[200px] bg-white rounded-2xl p-3 shadow-[0_0_8px_#64646f10]">
      <div style={{ width: '100%', height: '90%' }}>
       <h1 className="font-Popin text-[16px] text-[#B0B0B0]">
          PPM Values
       </h1>
       <Line 
         data={data} 
         options={options}
         />
      </div>
    </div>
  );
};

export default TSLineChart;

