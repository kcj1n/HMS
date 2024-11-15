//--------------------------------------------------------------------------------//
//                                                                                //
// Benzene.jsx                                                                    //
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

const Benzene = ({ mainData }) => {

  const ben = mainData.ghi;
  
  let benLevel;

  if (ben >= 100) {
    benLevel = "Fog";
  } else if (ben < 100 && ben >= 80) {
    benLevel = "Very Poor";
  } else if (ben <  80 && ben >= 60) {
    benLevel = "Poor";
  } else if (ben <  60 && ben >= 20) {
    benLevel = "Moderate";
  } else if (ben <  20 && ben >= 10) {
    benLevel = "Good";
  } else if (ben <  10) {
    benLevel = "Excellent";
  }
  return (
    <div className="w-[240px] h-[200px] bg-white rounded-2xl p-3 shadow-[0_0_8px_#64646f10]">
      <span className="font-Popin text-[16px] text-[#B0B0B0]">Benzene</span>
      <div className="h-[80%] flex flex-col justify-between items-start gap-4 pl-3 relative">
        <h1 className="font-Popin text-5xl font-medium mt-10">
          {ben}
          <span className="text-lg ml-2">PPM</span>
        </h1>
        <div className="w-full flex gap-3 items-center">
          <p className="text-[16px] font-Popin font-medium">{benLevel}</p>
          <img
            src={
              benLevel == "Excellent"
                ? excellent
                : benLevel == "Good"
                ? good
                : benLevel == "Moderate"
                ? moderate
                : benLevel == "Poor"
                ? poor
                : benLevel == "Very Poor"
                ? verypoor
                : benLevel == "Fog"
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

export default Benzene;