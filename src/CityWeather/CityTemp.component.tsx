import { Typography } from "@mui/material";
import { useCityWeatherContext } from "./CityWeather.context";

const CityTemp = () => {
  const { cityWeather } = useCityWeatherContext();

  return (
    <Typography variant="h1" component="div">
      {cityWeather.main.temp | 0}°C
    </Typography>
  );
};

export default CityTemp;
