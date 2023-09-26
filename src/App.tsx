import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import CityInput from "./CityInput/CityInput.component";
import { IWeatherData } from "./CityWeather/CityWeather.interface";
import WeatherCard from "./CityWeather/WeatherCard.component";

const App = () => {
  const [cityWeather, setCityWeather] = useState<IWeatherData | null>(null);

  const handleSetCityWeather = (weather: IWeatherData | null) =>
    setCityWeather(weather);

  return (
    <Box sx={{ pt: 8, pb: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Welcome to the weather app
        </Typography>
        <CityInput setCityWeather={handleSetCityWeather} />
        {cityWeather && (
          <WeatherCard cityWeather={cityWeather}>
            <WeatherCard.Title />
            <WeatherCard.Temp />
            <WeatherCard.Icon />
            <WeatherCard.Description />
          </WeatherCard>
        )}
      </Container>
    </Box>
  );
};

export default App;
