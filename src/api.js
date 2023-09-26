const base_url = "https://api.openweathermap.org";
const appid = `appid=${process.env.REACT_APP_API_KEY}&units=metric`;

export const fetchWeather = async (city) => {
  return fetch(`${base_url}/geo/1.0/direct?${appid}&q=${city}&limit=1`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return fetch(
        `${base_url}/data/2.5/weather?${appid}&units=metric&lat=${data[0].lat}&lon=${data[0].lon}`
      );
    })
    .then((result) => result.json());
};
