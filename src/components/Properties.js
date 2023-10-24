import React from "react";
import { FaArrowDown, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import {MdCompress, MdOutlineWaterDrop } from "react-icons/md";

function Properties({weather, unit}) {
  const tempUnit = unit === "metric" ? "°C" : "°F";
  const windUnit = unit === "metric" ? "m/s" : "m/h";

  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      tittle: "min",
      data: weather.temp_min.toFixed(),
      unit: tempUnit,
    },
    {
      id: 2,
      icon: <FaArrowDown />,
      tittle: "max",
      data: weather.temp_min.toFixed(),
      unit: tempUnit,
    },
    {
      id: 3,
      icon: <BiHappy/>,
      tittle: "Feels Like",
      data: weather.feels_like,
      unit: tempUnit,
    },
    {
      id: 4,
      icon: <MdCompress/>,
      tittle: "pressure",
      data: weather.pressure,
      unit: 'hpa',
    },
    {
        id: 5,
        icon: <MdOutlineWaterDrop />,
        tittle: "humidity",
        data: weather.humidity,
        unit: '%',
      },
      {
        id: 6,
        icon: <FaWind />,
        tittle: "wind speed",
        data: weather.speed.toFixed(),
        unit: windUnit,
      },
  ];

  return (
    <div className=" key={id} card flex items-center justify-center text-white pt-10">
    {cards.map(({id,icon,tittle,data,unit}) =>(
    
      <div key={id}>
            <div className="ml-2">{icon}</div>
          <h5 className="text-s  mr-8 ml-2">{tittle}</h5>
    
        <h2 className="text-white text-s font-bold ml-2">{`${data}${unit}`}</h2>
        </div>
      ))}
     </div>
  
  );
}
export default Properties;
