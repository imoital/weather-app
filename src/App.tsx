import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import CityInput from "./CityInput/CityInput.component";
import CityWeather from "./CityWeather/CityWeather.component";
import { IWeatherData } from "./CityWeather/CityWeather.interface";

const App = () => {
  const [cityWeather, setCityWeather] = useState<IWeatherData | null>(null);

  const handleSetCityWeather = (weather: IWeatherData | null) =>
    setCityWeather(weather);

  return (
    <Box
      sx={{
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Welcome to the weather app
        </Typography>
        <CityInput setCityWeather={handleSetCityWeather} />
        {cityWeather && <CityWeather cityWeather={cityWeather} />}
      </Container>
    </Box>
  );
};

export default App;
