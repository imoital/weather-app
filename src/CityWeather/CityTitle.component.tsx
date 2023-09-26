import { Chip, Typography } from "@mui/material";
import { useCityWeatherContext } from "./CityWeather.context";

const CityTitle = () => {
  const { cityWeather } = useCityWeatherContext();

  return (
    <Typography gutterBottom variant="h5" component="div">
      {cityWeather.name}{" "}
      <Chip label={cityWeather.sys.country} color="warning" size="small" />
    </Typography>
  );
};

export default CityTitle;
