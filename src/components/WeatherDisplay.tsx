import React from "react";

interface WeatherProps {
  temp: number;
  feels_like: number;
  temp_desc: string;
  loc_name: string;
}

const WeatherDisplay = ({ temp, feels_like, temp_desc, loc_name }: WeatherProps) => {
  return (
    <div>
      <div>
        <h3>{loc_name}</h3>
      </div>
      <div>
        It is currently {temp_desc} outside with a current tempurature of {temp}, and feels like {feels_like}.
      </div>
    </div>
  );
};

export default WeatherDisplay;
