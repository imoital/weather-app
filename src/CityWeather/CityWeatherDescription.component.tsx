import { Typography } from "@mui/material";
import { useCityWeatherContext } from "./CityWeather.context";

const CityWeatherDescription = () => {
  const { cityWeather } = useCityWeatherContext();

  return (
    <Typography variant="overline" component="div">
      {cityWeather.weather[0].description}
    </Typography>
  );
};

export default CityWeatherDescription;
