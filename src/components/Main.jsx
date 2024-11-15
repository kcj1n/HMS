//--------------------------------------------------------------------------------//
//                                                                                //
// Main.jsx                                                                       //
//                                                                                //
// This source code is made freely available for                                  //
// possible modification and redistribution.                                      //   
//                                                                                //
// please refer to https://github.com/SahilM2063/Weather_App_Using_React          //
//                                                                                //
// If any question, send email to kcjin000@gmail.com                              //
//                                                                                //
//--------------------------------------------------------------------------------//


import axios         from "axios";
import React, 
       { useEffect,  
         useState }  from "react";
import SearchBar     from "./SearchBar";
import MainData      from "./MainData";
import SubData       from "./SubData";
import QIndex        from "./QIndex";
import AirFlow       from "./AirFlow";
import Toluene       from "./Toluene";
import Benzene       from "./Benzene";
import AirQuality    from "./AirQuality";
import TSLineChart   from "./TSLineChart";

const wd_data =     // default data
{
  "count": 1,
  "data": [
    {
      "app_temp": 10.8,
      "aqi": 46,
      "city_name": "VOCs",
      "clouds": 0,
      "country_code": "KR",
      "datetime": "2024-01-01:00",
      "dewpt": 59.3,
      "dhi": 0,
      "dni": 0,
      "elev_angle": -33.97,
      "ghi": 0,
      "gust": 6.2,
      "h_angle": -90,
      "lat": 35.7721,
      "lon": -78.63861,
      "ob_time": "2024-12-031:00",
      "pod": "n",
      "precip": 0,
      "pres": 1001.8,
      "rh": 85,
      "slp": 1014.9,
      "snow": 0,
      "solar_rad": 0,
      "sources": [
        "1327W"
      ],
      "state_code": "NC",
      "station": "1327W",
      "sunrise": "10:40",
      "sunset": "23:49",
      "temp": 10.7,
      "timezone": "Korea/Seoul",
      "ts": 1681615800,
      "uv": 0,
      "vis": 9.9,
      "weather": {
        "icon": "c01n",
        "description": "(1/7) Normal",
        "code": 800
      },
      "wind_cdir": "SW",
      "wind_cdir_full": "southwest",
      "wind_dir": 230,
      "wind_spd": 3.4
    }
  ]
}

const Main = () => {
  
  var count = 0;
  const [wdata, setWdata] = useState({
   weather: {
    description: "condition",
   },
   "temp":     0.0,
   "app_temp": 0.0,
   "uv":         0,
   "vis":      0.0,
   "ghi":        0,
   "rh":         0,
   "aqi":        0,
   "wind_spd": 0.0,
  });

  const [search, setSearch]             = useState("VOCs");
  const [clickName, setClickName]       = useState("ppm");
  const [ppmbtnactive, setppmBtnActive] = useState(true);
  const [mglbtnactive, setmglBtnActive] = useState(false);
  const [conStatus, setConStatus]       = useState("notconnect");
  const [dataFmt,   setDataFmt]         = useState("notgood");


  const fetchAPI = async () => {
    try {
        const response = await axios.get('https://kcj1n.store/data/sensor_data.json');
        //console.log(response.data.count);
        if(response.data.count >=1) {   // check data validation
           const data = response.data.data[0];
           //console.log(response);
           setWdata(data);
           setConStatus('connect');
           setDataFmt('good');
         }
         else {
           //console.error('data format error:', response);
           setWdata(wd_data.data[0]);
           setConStatus('connect');
           setDataFmt('bad');
         }

    } catch (error) {
        //console.error('Error in fetch:', error);
        setWdata(wd_data.data[0]);
        setConStatus('notconnect');
        setDataFmt('bad');
    }
  };

   useEffect(() => {
      const intervalId = setInterval(() => {
           //getDayTime();
           fetchAPI();
           //console.log(currenttime.toLocaleTimeString())
      }, 1000); // 1000ms = 1초
      return () => clearInterval(intervalId);
    }, []);


  useEffect(() => {
    fetchAPI();
  }, [search]);


  const getDataFromSearchBar = (Childdata) => {
    setSearch(Childdata);
  };

  const ppmclick = () => {
    setClickName("ppm");
    setppmBtnActive(true);
    setmglBtnActive(false);
  };
  const mglclick = () => {
    setClickName("mgl");
    setmglBtnActive(true);
    setppmBtnActive(false);
  };

  return (
    <div className="Main w-[100vw] h-[100vh] bg-[#F6F6F8] lg:p-4 md:p-0 xs:p-0 sm:p-0 flex justify-center items-center">
      <div className="container md:w-full lg:w-[80%] xs:w-full sm:w-full md:h-full lg:h-[90%] xs:h-full sm:h-full bg-[#F6F6F8] rounded-[24px] lg:rounded-[24px] xs:rounded-none sm:rounded-none xs:flex-col sm:flex-col flex flex-row lg:flex-row md:overflow-y-scroll overflow-y-scroll lg:overflow-hidden xs:overflow-y-scroll sm:overflow-y-scroll pb-0 lg:pb-0 sm:pb-0">
        <h1>&nbsp;</h1>
        <div className="left-col md:w-full lg:w-[30%] xs:w-full sm:w-full h-full bg-[#FFFFFF] pl-10 py-4 flex flex-col justify-between items-start gap-4 rounded-[16px]">
          <SearchBar     getSearchData={getDataFromSearchBar} conStatus={conStatus} dataFmt={dataFmt}/>
          <MainData   mainData={wdata} clickName={clickName} />
          <SubData mainData={wdata} />
        </div>
        <div className="right-col md:w-full lg:w-[70%] xs:w-full sm:w-full md:h-full bg-transparent flex flex-col justify-between items-stretch gap-5 p-4 lg:p-4 sm:p-2">
          <div className="top-row w-full h-[60px] flex justify-between items-center px-4 pt-2 xs:mb-4 sm:mb-4">
            <h2 className="font-Popin text-2xl xs:text-xl sm:text-2xl font-[500]">
              SENSOR MONITORING
            </h2>
            <div className="flex gap-2 items-center">
              <button
                onClick={ppmclick}
                className={`w-[60px] h-[40px] flex justify-center items-center font-Popin text-[18px] font-[500] shadow-[0_0_8px_#64646f10] ${
                  ppmbtnactive ? "bg-black text-white" : "bg-white text-black"
                } rounded-[50%]`}
              >
                PPM
              </button>
              <button
                onClick={mglclick}
                className={`w-[60px] h-[40px] flex justify-center items-center font-Popin text-[18px] font-[500] shadow-[0_0_8px_#64646f10] ${
                  mglbtnactive ? "bg-black text-white" : "bg-white text-black"
                } rounded-[50%]`}
              >
                mg/L
              </button>
            </div>
          </div>
          <div className="bottom-row w-full flex-1 p-2  grid grid-cols-3 lg:grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 xs:gap-6 sm:gap-8  place-items-center md:place-content-stretch">
            <QIndex    mainData={wdata} />
            <TSLineChart mainData={wdata} />
            <AirFlow mainData={wdata} />
            <Toluene    mainData={wdata} />
            <Benzene    mainData={wdata} />
            <AirQuality mainData={wdata} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
