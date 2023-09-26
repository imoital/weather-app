import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import fetchMock, { enableFetchMocks } from "jest-fetch-mock";
import App from "./App";

enableFetchMocks();

beforeEach(() => {
  fetchMock.resetMocks();

  fetchMock.mockResponseOnce(
    JSON.stringify([
      {
        lon: -0.1276,
        lat: 51.5073,
      },
    ])
  );

  fetchMock.mockResponseOnce(
    JSON.stringify({
      coord: {
        lon: -0.1276,
        lat: 51.5073,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      base: "stations",
      main: {
        temp: 15.91,
        feels_like: 15.85,
        temp_min: 13.78,
        temp_max: 17.32,
        pressure: 1016,
        humidity: 88,
      },
      visibility: 10000,
      wind: {
        speed: 2.57,
        deg: 230,
      },
      clouds: {
        all: 83,
      },
      dt: 1695768002,
      sys: {
        type: 2,
        id: 2075535,
        country: "GB",
        sunrise: 1695707536,
        sunset: 1695750701,
      },
      timezone: 3600,
      id: 2643743,
      name: "London",
      cod: 200,
    })
  );
});

test("renders App component with CityInput and displays weather information", async () => {
  const { container } = render(<App />);

  const cityInput = screen.getByLabelText(/Search City/i);
  const submitButton = screen.getByRole("button", { name: /search/i });

  fireEvent.change(cityInput, { target: { value: "London" } });
  fireEvent.click(submitButton);
  await waitFor(() => {
    expect(screen.getByText(/15°C/i)).toBeInTheDocument();
    expect(screen.getByText(/GB/i)).toBeInTheDocument();
    expect(screen.getByText(/London/i)).toBeInTheDocument();
    screen.logTestingPlaygroundURL();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
    expect(screen.getByText(/broken clouds/i)).toBeInTheDocument();
  });
});
