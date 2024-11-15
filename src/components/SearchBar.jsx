//--------------------------------------------------------------------------------//
//                                                                                //
// SearchBar.jsx                                                                    //
//                                                                                //
// This source code is made freely available for                                  //
// possible modification and redistribution.                                      //   
//                                                                                //
// please refer to https://github.com/SahilM2063/Weather_App_Using_React          //
//                                                                                //
// If any question, send email to kcjin000@gmail.com                              //
//                                                                                //
//--------------------------------------------------------------------------------//

import   React, 
       { useState, useEffect } from "react";

import { IoInformation   } from "react-icons/io5";
import { AiOutlineFieldTime } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineDisconnect } from "react-icons/ai";
import { BsDiagram3, BsDiagram3Fill } from "react-icons/bs";

import { PiDownloadSimple } from "react-icons/pi";
import { FcHighPriority } from "react-icons/fc";

import Swal    from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss';

const styles = `
  .custom-title {
    font-size: 20px; /* title 폰트 크기 조정 */
    color: #1f1f1f
  }
  
  .custom-content {
    font-size: 14px !important;
    text-align: left !important; 
    line-height: 1.5; 
  }
  .align-left {
    font-size: 10px
    text-align: left;
    line-height: 1.5; 
  }
  .custom-text {
    color: #8f8f8F; /* 원하는 텍스트 색상으로 변경 */
  }
`;

const styleSheet     = document.createElement("style");
styleSheet.type      = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);


// 스타일 정의
const iconStyles = {
  container: {
    display: 'flex',
    gap: '20px', // 아이콘 간격
    marginLeft: '20px', // 왼쪽 마진 추가
  },
  icon: {
    fontSize:   '24px', // 아이콘 크기 조정
    color: '#6f6f6f', // 아이콘 색상
    textShadow: '1px 1px 1px rgba(0, 0, 0, 0.2)', // 텍스트 그림자 추가
    filter: 'drop-shadow(0 0 1px rgba(0, 0, 0, 0.2))', // 그림자 효과 추가
  },
};

const onoffStyles = {
  container: {
    display: 'flex',
    gap: '15px', // 아이콘 간격
  },
  icon: {
    fontSize:   '17px', // 아이콘 크기 조정
    color: '#4f4f4f', // 아이콘 색상
    textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)', // 텍스트 그림자 추가
    filter: 'drop-shadow(0 0 1px rgba(0, 0, 0, 0.3))', // 그림자 효과 추가
  },
};

const SearchBar = ({ getSearchData, conStatus, dataFmt }) => {
  
  const onIcons  = [<BsDiagram3          style={onoffStyles.icon} />, <BsDiagram3Fill style={onoffStyles.icon}/>];
  const offIcons = [<AiOutlineDisconnect style={onoffStyles.icon}/>];

  const goodIcons = [<PiDownloadSimple  style={onoffStyles.icon}/>];
  const badIcons  = [<FcHighPriority    style={onoffStyles.icon}/>];

  const [currentIcon, setCurrentIcon] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prevIcon) => (prevIcon + 1) % onIcons.length);
    }, 1000); // 1초마다 아이콘 변경

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 정리
  }, []);
  
  const homeButtonClick = () => {
    Swal.fire({
      title: 'About Harmful Substances Monitor',
      html: `
        <hr style="width: 100%; color: black;"/>
        <br/>
        <div class="flex text-left text-base custom-text">
        <ul>
            <li>1. Liquid Gauge displays the PPM value with colors and numbers, ranging from blue to red.</li>
            <li>2. Quality Index represents the concentration of harmful substances in 12 levels.</li>
            <li>3. PPM Values show the incoming PPM values as a time series.</li>
            <li>4. Air Flow displays the Air Flow value.</li>
            <li>5. Toluene shows the Toluene PPM value.</li>
            <li>6. Benzene shows the Benzene PPM value.</li>
            <li>7. Dust Particles display the Dust Particles value.</li>
            <li>8. VOCs Search is not yet implemented.</li>
        </ul>
       </div>
      `,
      showCloseButton:  true,
      showCancelButton: false,
      customClass: {
          title: 'custom-title', // title에 대한 사용자 정의 클래스
      },
    });
  };

  const infoButtonClick = () => {
    Swal.fire({
      title: 'HISTORY',
      html: `
        <hr style="width: 100%; color: black;"/>
        <br/>
        <div class="flex text-left text-base custom-text">
        <ul>
          <li>2024.10.01: Design monitoring concept.</li>
          <li>2024.10.02: Define the variables to monitor.</li>
          <li>2024.10.07: Determine Tailwind CSS for variable.</li>
          <li>2024.10.09: Add ProgressBar, Line graphs.</li>
          <li>2024.10.09: Add conversion between PPM and mg/L.</li>
          <li>2024.10.12: Add Emoji icons.</li>
          <li>2024.10.13: Build version 1.0.</li>
          <li>2024.10.15: Add LiquidFillGauge.</li>
          <li>2024.10.16: Add on/offline image.</li>
          <li>2024.10.16: Build version 1.1.</li>
          <li>2024.10.17: Add TimeSeriesLineChart for PPM.</li>
          <li>2024.10.17: Add History message.</li>
          <li>2024.10.18: Add info,his,search icons.</li>
          <li>2024.10.18: Add status icons.</li>
          <li>2024.10.18: Build version 1.2.</li>
        </ul>
       </div>
      `,
      showCloseButton:  true,
      showCancelButton: false,
      customClass: {
          title: 'custom-title', // title에 대한 사용자 정의 클래스
      },
    });
  };

  return (
    <>
     <div className="w-[95%] lg:w-[95%] sm:w-[95%] h-9 flex justify-between items-center gap-2 py-5 m-2 bg-gray-100 rounded-full ml-[-10px] mb-[-10px]">
   <div style={iconStyles.container}>
    <IoInformation className="text-3xl font-extrabold" style={iconStyles.icon} onClick={homeButtonClick} />
    <AiOutlineFieldTime className="text-3xl font-extrabold" style={iconStyles.icon} onClick={infoButtonClick} />
    <IoSearchOutline className="text-3xl font-extrabold" style={iconStyles.icon} />
  </div>
  
  <input
    type="text"
    placeholder="VOCs"
    style={{ width: '60px', fontSize: '12px' }} // 원하는 너비로 설정
    onChange={(e) => getSearchData(e.target.value)}
    onClick={(e) => getSearchData(e.target.value)}
    className="outline-none font-Popin text-sm placeholder:font-Popin placeholder:font-normal placeholder:text-[#606060] bg-transparent h-80%"
  />
  
  <span className="font-Popin text-1xl xs:text-xl sm:text-1xl font-[500] flex items-center ml-auto">
    <div style={onoffStyles.container}>
      {conStatus === "connect" ? onIcons[currentIcon] : offIcons[0]}
    </div>
  </span>
  
  <span className="font-Popin text-1xl xs:text-xl sm:text-1xl font-[500] flex items-center  mr-[20px]">
    <div style={onoffStyles.container}>
      {dataFmt === "good" ? goodIcons[0] : badIcons[0]}
    </div>
  </span>
</div>
    </>
  );
};

export default SearchBar;
