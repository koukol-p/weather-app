import { Flex, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import ForecastItem from "./ForecastItem";

const Forecast = ({ weather, timezone }) => {
  console.log(weather);

  return (
    <>
      <Heading marginY={2} size="md">
        {timezone}
      </Heading>
      <Flex
        direction={{ base: "column", xl: "row" }}
        wrap="wrap"
        bgColor="gray.700"
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
