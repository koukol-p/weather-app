import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ForecastItem = ({ data }) => {
  const date = new Date(data.dt * 1000);

  const { theme } = useContext(ThemeContext);

  return (
    <Box
      color={theme.textColor}
      flex={1}
      bgColor={theme.cardColor}
      minW={210}
      minH={240}
      border={`1px solid black`}
      marginX={1}
      marginY={0.5}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        bgColor={theme.cardColor}
        paddingX={2}
        borderBottom="1px solid black"
      >
        <Image
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
        />
        <Heading color={theme.textColor} size={2}>
          {date.toLocaleDateString()}
        </Heading>
      </Flex>

      <Flex
        direction="column"
        style={{ listStyle: "none" }}
        padding={2}
        color={theme.textColor}
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
