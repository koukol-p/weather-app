import logo from "./logo.svg";
import "./App.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Forecast from "./components/Forecast";
import { Box, Heading, Flex } from "@chakra-ui/react";
import Form from "./components/Form";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [weather, setWeather] = useState([]);
  const [cityName, setCityName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const { theme, currentTheme, toggleTheme } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    switch (currentTheme) {
      case "light":
        toggleTheme("dark");
        break;
      case "dark":
        toggleTheme("light");
        break;
      default:
        return;
    }
  };
  const getWeatherByCityName = (city) => {
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
      )
      .then((res) => {
        console.log("GEOLOC API RESPONSE", res.data[0].name);
        setCityName(res.data[0].name);
        const lat = res.data[0].lat;
        const lon = res.data[0].lon;
        getWeather(lat, lon);
      });
  };
  const getWeather = (lat, lon) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
      )
      .then((res) => {
        setWeather(res.data);
        setIsLoading(false);
        console.log(res.data);
      });
  };

  return (
    <Box
      
      bgColor={theme.bgColor}
      minH="100vh"
      paddingX={12}
      paddingY={6}
      color={theme.textColor}
    >
      <Flex direction="row" justifyContent="space-between" alignItems="center">
        <Heading marginBottom={2}>Weather App</Heading>
        <Box cursor="pointer" onClick={handleToggleTheme}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            style={{
              filter: currentTheme === "dark" ? "invert(100%)" : "invert(20%)",
            }}
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z" />
          </svg>
        </Box>
      </Flex>
      <Form
        getWeather={getWeather}
        getWeatherByCityName={getWeatherByCityName}
      />
      {!isLoading && <Forecast city={cityName} weather={weather.daily} />}
    </Box>
  );
}

export default App;
