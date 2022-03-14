import { Flex, Heading } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ForecastItem from "./ForecastItem";

const Forecast = ({ weather, timezone }) => {
  console.log(weather);
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Heading marginY={2} size="md">
        {timezone}
      </Heading>
      <Flex
        direction={{ base: "column", xl: "row" }}
        wrap="wrap"
        bgColor={theme.backdrop}
        padding={4}
        justifyContent="stretch"
      >
        {weather.map((item) => (
          <ForecastItem key={item.dt} data={item} />
        ))}
      </Flex>
    </>
  );
};
export default Forecast;
