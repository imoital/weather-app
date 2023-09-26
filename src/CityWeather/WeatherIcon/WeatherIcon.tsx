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
  const id = "icon";
  let icon = <Mist />;

  switch (cityWeather.weather[0].icon) {
    case "01d":
      icon = <Day />;
      break;
    case "01n":
      icon = <Night />;
      break;
    case "02d":
      icon = <FewCloudsDay />;
      break;
    case "02n":
      icon = <FewCloudsNight />;
      break;
    case "03d":
    case "03n":
      icon = <Cloudy />;
      break;
    case "04d":
    case "04n":
      icon = <Overcast />;
      break;
    case "09d":
    case "09n":
      icon = <OvercastRain />;
      break;
    case "10d":
      icon = <CloudyDayRain />;
      break;
    case "10n":
      icon = <CloudyNightRain />;
      break;
    case "11d":
    case "11n":
      icon = <Thunderstorms />;
      break;
    case "13d":
    case "13n":
      icon = <Snow />;
      break;
    case "50d":
    case "50n":
      icon = <Mist />;
      break;
    default:
      break;
  }

  return <div data-testid="icon">{icon}</div>;
};

export default WeatherIcon;
