import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import { WeatherIcon } from "../WeatherIcon/WeatherIcon";
import { ICityWeather } from "./CityWeather.interface";

const CityWeather = ({ cityWeather }: ICityWeather) => (
  <Box sx={{ pt: 8 }} display="flex">
    <Card sx={{ margin: "auto", display: "flex" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cityWeather.name}{" "}
          <Chip label={cityWeather.sys.country} color="warning" size="small" />
        </Typography>
        <Typography variant="h1" component="div">
          {cityWeather.main.temp | 0}°C
        </Typography>
        <WeatherIcon iconType={cityWeather.weather[0].icon} />
        <Typography variant="overline" component="div">
          {cityWeather.weather[0].description}
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default CityWeather;
