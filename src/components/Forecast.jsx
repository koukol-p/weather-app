import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ForecastItem from "./ForecastItem";

const Forecast = ({ weather, city }) => {
  console.log(weather);
  const { theme } = useContext(ThemeContext);

  return (
    <Box bgColor={theme.backdrop} padding={4} >
      <Heading size="lg" marginBottom={2} marginLeft={0.5}>
        {city}
      </Heading>
      <Flex
        direction={{ base: "column", xl: "row" }}
        wrap="wrap"
        justifyContent="stretch"
      >
        {weather.map((item) => (
          <ForecastItem key={item.dt} data={item} />
        ))}
      </Flex>
    </Box>
  );
};
export default Forecast;
