import { Box, Card, CardContent } from "@mui/material";
import CityTemp from "./CityTemp.component";
import CityTitle from "./CityTitle.component";
import CityWeatherContext from "./CityWeather.context";
import { ICityWeather } from "./CityWeather.interface";
import CityWeatherDescription from "./CityWeatherDescription.component";
import WeatherIcon from "./WeatherIcon/WeatherIcon";

const WeatherCard = ({ cityWeather, children }: ICityWeather) => (
  <CityWeatherContext.Provider value={{ cityWeather }}>
    <Box sx={{ pt: 8 }} display="flex">
      <Card sx={{ margin: "auto", display: "flex" }}>
        <CardContent>{children}</CardContent>
      </Card>
    </Box>
  </CityWeatherContext.Provider>
);

WeatherCard.Title = CityTitle;
WeatherCard.Temp = CityTemp;
WeatherCard.Icon = WeatherIcon;
WeatherCard.Description = CityWeatherDescription;

export default WeatherCard;
