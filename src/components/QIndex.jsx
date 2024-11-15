//--------------------------------------------------------------------------------//
//                                                                                //
// QIndex.jsx                                                                    //
//                                                                                //
// This source code is made freely available for                                  //
// possible modification and redistribution.                                      //   
//                                                                                //
// please refer to https://github.com/SahilM2063/Weather_App_Using_React          //
//                                                                                //
// If any question, send email to kcjin000@gmail.com                              //
//                                                                                //
//--------------------------------------------------------------------------------//

import React from "react";
import ProgressBar from "react-customizable-progressbar";

const QIndex = ({ mainData }) => {
  const uv = mainData.uv;
  const progress = 8.33 * uv;
  // console.log(progress);
  // console.log(mainData.uv);

  return (
    <div className="w-[240px] h-[200px] bg-white rounded-2xl p-3 shadow-[0_0_8px_#64646f10]">
      <span className="font-Popin text-[16px] text-[#B0B0B0]">Quality Index</span>
      <div className="flex flex-col justify-center items-center w-full relative overflow-hidden">
        <ProgressBar
          radius={70}
          progress={progress}
          strokeWidth={25}
          strokeColor="#ffce54"
          strokeLinecap="butt"
          strokeDashoffset={0}
          trackStrokeWidth={14}
          trackStrokeLinecap="butt"
          cut={180}
          rotate={-180}
          className
        />
        <span className="text-[black] z-10 absolute top-[54%] font-Popin text-lg font-medium">
          {uv ? uv.toFixed(1) : uv}/12
        </span>
      </div>
    </div>
  );
};

export default QIndex;