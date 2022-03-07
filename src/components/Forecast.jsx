import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import ForecastItem from "./ForecastItem";

const Forecast = ({ weather }) => {
  console.log(weather);

  return (
    <Flex wrap="wrap" bgColor="gray.700" padding={2}>
      {weather.map((item) => (
        <ForecastItem key={item.dt} data={item} />
      ))}
    </Flex>
  );
};
export default Forecast;
