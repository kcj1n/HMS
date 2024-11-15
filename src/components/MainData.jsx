
//--------------------------------------------------------------------------------//
//                                                                                //
// MainData.jsx                                                                    //
//                                                                                //
// This source code is made freely available for                                  //
// possible modification and redistribution.                                      //   
//                                                                                //
// please refer to https://github.com/SahilM2063/Weather_App_Using_React          //
//                                                                                //
// If any question, send email to kcjin000@gmail.com                              //
//                                                                                //
//--------------------------------------------------------------------------------//

import React, { useEffect, useState } from "react";
import Gauge         from "./Gauge";

import a01d from "../assets/SubIcons/a01d.png";
import a01n from "../assets/SubIcons/a01n.png";
import a02d from "../assets/SubIcons/a02d.png";
import a02n from "../assets/SubIcons/a02n.png";
import a03d from "../assets/SubIcons/a03d.png";
import a03n from "../assets/SubIcons/a03n.png";
import a04d from "../assets/SubIcons/a04d.png";
import a04n from "../assets/SubIcons/a04n.png";
import a05d from "../assets/SubIcons/a05d.png";
import a05n from "../assets/SubIcons/a05n.png";
import a06d from "../assets/SubIcons/a06d.png";
import a06n from "../assets/SubIcons/a06n.png";
import c01d from "../assets/SubIcons/c01d.png";
import c01n from "../assets/SubIcons/c01n.png";
import c02d from "../assets/SubIcons/c02d.png";
import c02n from "../assets/SubIcons/c02n.png";
import c03d from "../assets/SubIcons/c03d.png";
import c03n from "../assets/SubIcons/c03n.png";
import c04d from "../assets/SubIcons/c04d.png";
import c04n from "../assets/SubIcons/c04n.png";
import d01d from "../assets/SubIcons/d01d.png";
import d01n from "../assets/SubIcons/d01n.png";
import d02d from "../assets/SubIcons/d01d.png";
import d02n from "../assets/SubIcons/d01n.png";
import d03d from "../assets/SubIcons/d01d.png";
import d03n from "../assets/SubIcons/d01n.png";
import r01d from "../assets/SubIcons/r01d.png";
import r01n from "../assets/SubIcons/r01n.png";
import r02d from "../assets/SubIcons/r02d.png";
import r02n from "../assets/SubIcons/r02n.png";
import r03d from "../assets/SubIcons/r03d.png";
import r03n from "../assets/SubIcons/r03n.png";
import r04d from "../assets/SubIcons/r04d.png";
import r04n from "../assets/SubIcons/r04n.png";
import r05d from "../assets/SubIcons/r05d.png";
import r05n from "../assets/SubIcons/r05n.png";
import r06d from "../assets/SubIcons/r06d.png";
import r06n from "../assets/SubIcons/r06n.png";
import s01d from "../assets/SubIcons/s01d.png";
import s01n from "../assets/SubIcons/s01n.png";
import s02d from "../assets/SubIcons/s02d.png";
import s02n from "../assets/SubIcons/s02n.png";
import s03d from "../assets/SubIcons/s03d.png";
import s03n from "../assets/SubIcons/s03n.png";
import s04d from "../assets/SubIcons/s04d.png";
import s04n from "../assets/SubIcons/s04n.png";
import s05d from "../assets/SubIcons/s05d.png";
import s05n from "../assets/SubIcons/s05n.png";
import s06d from "../assets/SubIcons/s06d.png";
import s06n from "../assets/SubIcons/s06n.png";
import t01d from "../assets/SubIcons/t01d.png";
import t01n from "../assets/SubIcons/t01n.png";
import t02d from "../assets/SubIcons/t02d.png";
import t02n from "../assets/SubIcons/t02n.png";
import t03d from "../assets/SubIcons/t03d.png";
import t03n from "../assets/SubIcons/t03n.png";
import t04d from "../assets/SubIcons/t04d.png";
import t04n from "../assets/SubIcons/t04n.png";
import t05d from "../assets/SubIcons/t04d.png";
import t05n from "../assets/SubIcons/t04n.png";
import u00d from "../assets/SubIcons/u00d.png";
import u00n from "../assets/SubIcons/u00n.png";

const Primarydata = ({ mainData, clickName }) => {
  const [currentday, setCurrentDay] = useState();
  const [currenttime, setCurrentTime] = useState();
  const [tempF, setTempF] = useState("");

  const getDayTime = () => {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date();
    const day  = weekday[date.getDay()];
    const time = `${date.getFullYear()}:${String(date.getMonth() + 1).padStart(2, '0')}:${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
    setCurrentDay(day);
    setCurrentTime(time);
  };

  //useEffect(() => {
  //  getDayTime();
  //  TempppmcTomglren();
  //}, [clickName]);


   useEffect(() => {
      const intervalId = setInterval(() => {
           getDayTime();
           TempppmcTomglren();
           //console.log(currenttime.toLocaleTimeString())
      }, 1000); // 1000ms = 1초
      return () => clearInterval(intervalId);
    }, []);


  const TempppmcTomglren = () => {
    const mglren = (mainData.temp * 1.8 + 32).toFixed(2);
    setTempF(mglren);
  };

  const [mainWIcon, setMainWIcon] = useState(null);

  useEffect(() => {
    const fetchedIcon = mainData.weather.icon;

    const WIcons = {
      a01d: a01d,
      a01n: a01n,
      a02d: a02d,
      a02n: a02n,
      a03d: a03d,
      a03n: a03n,
      a04d: a04d,
      a04n: a04n,
      a05d: a05d,
      a05n: a05n,
      a06d: a06d,
      a06n: a06n,
      c01d: c01d,
      c01n: c01n,
      c02d: c02d,
      c02n: c02n,
      c03d: c03d,
      c03n: c03n,
      c04d: c04d,
      c04n: c04n,
      d01d: d01d,
      d01n: d01n,
      d02d: d02d,
      d02n: d02n,
      d03d: d03d,
      d03n: d03n,
      r01d: r01d,
      r01n: r01n,
      r02d: r02d,
      r02n: r02n,
      r03d: r03d,
      r03n: r03n,
      r04d: r04d,
      r04n: r04n,
      r05d: r05d,
      r05n: r05n,
      r06d: r06d,
      r06n: r06n,
      s01d: s01d,
      s01n: s01n,
      s02d: s02d,
      s02n: s02n,
      s03d: s03d,
      s03n: s03n,
      s04d: s04d,
      s04n: s04n,
      s05d: s05d,
      s05n: s05n,
      s06d: s06d,
      s06n: s06n,
      t01d: t01d,
      t01n: t01n,
      t02d: t02d,
      t02n: t02n,
      t03d: t03d,
      t03n: t03n,
      t04d: t04d,
      t04n: t04n,
      t05d: t05d,
      t05n: t05n,
      u00d: u00d,
      u00n: u00n,
    };

    setMainWIcon(WIcons[fetchedIcon]);
  }, [mainData]);

  return (
    <div className="w-[80%] lg:w-[80%] sm:w-[90%] py-2 lg:py-2 xs:py-2 sm:py-4 sm:p-0 flex flex-col lg:flex-col sm:flex-row xs:flex-col items-start lg:items-start xs:items-start sm:items-center justify-between gap-3 mt-0">
      <h1 className="max-h-100 object-cover">
      <Gauge
         style   = {{ margin: '0 auto 20px auto' }}
         radius  = {130}
         value   = {clickName == "ppm" ? mainData.temp : mainData.temp * 1.8}
         percent = {clickName == "ppm" ? "PPM" : "mg/L"}
       />
      </h1>
      <p className="md:text-[24px] lg:text-[17px] text-[18px]">
        {currentday}
        <span className="text-[#959595] ml-2">{currenttime}</span>
      </p>
    </div>
  );
};

export default Primarydata;



