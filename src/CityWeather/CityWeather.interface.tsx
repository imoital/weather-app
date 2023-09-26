import { ReactNode } from "react";

export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IWeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: IWeather[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  name: string;
  sys: {
    country: string;
  };
}

export interface ICityWeather {
  cityWeather: IWeatherData;
  children: ReactNode;
}
