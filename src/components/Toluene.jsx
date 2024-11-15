//--------------------------------------------------------------------------------//
//                                                                                //
// Toulene.jsx                                                                    //
//                                                                                //
// This source code is made freely available for                                  //
// possible modification and redistribution.                                      //   
//                                                                                //
// please refer to https://github.com/SahilM2063/Weather_App_Using_React          //
//                                                                                //
// If any question, send email to kcjin000@gmail.com                              //
//                                                                                //
//--------------------------------------------------------------------------------//

import React     from "react";
import excellent from "../assets/excellent.png";
import good      from "../assets/good.png";
import moderate  from "../assets/good.png";
import poor      from "../assets/poor.png";
import verypoor  from "../assets/verypoor.png";
import dead      from "../assets/dead.png";

const Toluene = ({ mainData }) => {
  const tol = mainData.vis;
  let tolLevel;

  if (tol >= 10) {
    tolLevel = "Fog";
  } else if (tol < 10 && tol >= 5) {
    tolLevel = "Very Poor";
  } else if (tol < 5 && tol >= 2) {
    tolLevel = "Poor";
  } else if (tol < 2 && tol >= 1) {
    tolLevel = "Moderate";
  } else if (tol < 1 && tol >= 0.5) {
    tolLevel = "Good";
  } else if (tol < 0.5) {
    tolLevel = "Excellent";
  }
  return (
    <div className="w-[240px] h-[200px] bg-white rounded-2xl p-3 shadow-[0_0_8px_#64646f10]">
      <span className="font-Popin text-[16px] text-[#B0B0B0]">Toluene</span>
      <div className="h-[80%] flex flex-col justify-between items-start gap-4 pl-3 relative">
        <h1 className="font-Popin text-5xl font-medium mt-10">
          {tol}
          <span className="text-lg ml-2">PPM</span>
        </h1>
        <div className="w-full flex gap-3 items-center">
          <p className="text-[16px] font-Popin font-medium">{tolLevel}</p>
          <img
            src={
              tolLevel == "Excellent"
                ? excellent
                : tolLevel == "Good"
                ? good
                : tolLevel == "Moderate"
                ? moderate
                : tolLevel == "Poor"
                ? poor
                : tolLevel == "Very Poor"
                ? verypoor
                : tolLevel == "Fog"
                ? dead
                : ""
            }
            alt="emoji"
            className="h-[30px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Toluene;
