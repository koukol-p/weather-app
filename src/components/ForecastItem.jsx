import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const ForecastItem = ({ data }) => {
  const date = new Date(data.dt * 1000);
  return (
    <Box
      flex={1}
      bgColor="gray.600"
      minW={210}
      minH={240}
      border="1px solid black"
      marginX={1}
      marginY={0.5}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        bgColor="gray.600"
        paddingX={2}
        borderBottom="1px solid black"
      >
        <Image
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
        />
        <Heading color="whitesmoke" size={2}>
          {date.toLocaleDateString()}
        </Heading>
      </Flex>

      <Flex
        direction="column"
        style={{ listStyle: "none" }}
        padding={2}
        color="whitesmoke"
      >
        <Flex justifyContent={"space-between"}>
          <Text fontWeight="medium">Max. Temperature:</Text>
          <Text>{data.temp.max}°C</Text>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <Text fontWeight="medium">Min. Temperature:</Text>
          <Text>{data.temp.min}°C</Text>
        </Flex>
      </Flex>
    </Box>
  );
};
export default ForecastItem;
