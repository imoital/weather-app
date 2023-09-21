import { IWeatherData } from "../CityWeather/CityWeather.interface";

export interface ICityInput {
  setCityWeather: (weather: IWeatherData | null) => void;
}
