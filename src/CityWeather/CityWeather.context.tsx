import { createContext, useContext } from "react";
import { IWeatherData } from "./CityWeather.interface";

const CityWeatherContext = createContext<{
  cityWeather: IWeatherData;
} | null>(null);

export const useCityWeatherContext = () => {
  const context = useContext(CityWeatherContext);

  if (!context) {
    throw new Error(
      "CityWeatherCard.* component must be rendered as child of CityWeatherCard component"
    );
  }
  return context;
};

export default CityWeatherContext;
