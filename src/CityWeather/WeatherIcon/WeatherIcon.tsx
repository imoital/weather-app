import { useCityWeatherContext } from "../CityWeather.context";
import Cloudy from "./Icons/Cloudy";
import CloudyDayRain from "./Icons/CloudyDayRain";
import CloudyNightRain from "./Icons/CloudyNightRain";
import Day from "./Icons/Day";
import FewCloudsDay from "./Icons/FewCloudsDay";
import FewCloudsNight from "./Icons/FewCloudsNight";
import Mist from "./Icons/Mist";
import Night from "./Icons/Night";
import Overcast from "./Icons/Overcast";
import OvercastRain from "./Icons/OvercastRain";
import Snow from "./Icons/Snow";
import Thunderstorms from "./Icons/Thunderstorms";

const WeatherIcon = () => {
  const { cityWeather } = useCityWeatherContext();

  switch (cityWeather.weather[0].icon) {
    case "01d":
      return <Day />;
    case "01n":
      return <Night />;
    case "02d":
      return <FewCloudsDay />;
    case "02n":
      return <FewCloudsNight />;
    case "03d":
    case "03n":
      return <Cloudy />;
    case "04d":
    case "04n":
      return <Overcast />;
    case "09d":
    case "09n":
      return <OvercastRain />;
    case "10d":
      return <CloudyDayRain />;
    case "10n":
      return <CloudyNightRain />;
    case "11d":
    case "11n":
      return <Thunderstorms />;
    case "13d":
    case "13n":
      return <Snow />;
    case "50d":
    case "50n":
      return <Mist />;
    default:
      break;
  }
};

export default WeatherIcon;
