import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Grid, TextField } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { fetchWeather } from "../api";
import { ICityInput } from "./CityInput.interface";

const CityInput = ({ setCityWeather }: ICityInput) => {
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleOnChangeCity = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleCitySubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setHasError(false);
    setCityWeather(null);

    setIsLoading(true);
    const weather = await fetchWeather(city);
    setIsLoading(false);

    if (weather.cod === 200) setCityWeather(weather);
    else setHasError(true);

    console.log(weather);
  };

  const clearCity = () => {
    setCity("");
    setHasError(false);
    setCityWeather(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        component="form"
        onSubmit={handleCitySubmit}
        noValidate
        autoComplete="off"
        container
        spacing={2}
      >
        <Grid item xs={10}>
          <TextField
            label="Search City"
            value={city}
            disabled={isLoading}
            onChange={handleOnChangeCity}
            size="small"
            fullWidth
            id="city-search"
            error={hasError}
            helperText={hasError && `City ${city} not found.`}
          />
        </Grid>
        <Grid item container xs={2} spacing={2}>
          <Grid item xs={8}>
            <LoadingButton
              type="submit"
              loading={isLoading}
              disabled={city === ""}
              variant="contained"
              endIcon={<SendIcon />}
              fullWidth
            >
              Search
            </LoadingButton>
          </Grid>
          <Grid item xs={4}>
            <Button
              type="button"
              disabled={isLoading || city === ""}
              onClick={clearCity}
              variant="outlined"
            >
              <CloseIcon />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CityInput;
