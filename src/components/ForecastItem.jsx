import { Box, Flex, Heading, Image, Text, Divider } from "@chakra-ui/react";
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
          <Text fontWeight="medium">Max. temperature:</Text>
          <Text>
            <Text as="span" display="inline" fontWeight="medium">
              {data.temp.max}
            </Text>
            °C
          </Text>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <Text fontWeight="medium">Min. temperature:</Text>
          <Text>
            <Text as="span" display="inline" fontWeight="medium">
              {data.temp.min}
            </Text>
            °C
          </Text>
        </Flex>
        <Divider orientation="horizontal" marginY={2} />
        <Flex justifyContent={"space-between"}>
          <Text fontWeight="medium">Humidity:</Text>
          <Text>
            <Text as="span" display="inline" fontWeight="medium">
              {data.humidity}
            </Text>
            %
          </Text>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <Text fontWeight="medium">Wind speed:</Text>
          <Text>
            <Text as="span" display="inline" fontWeight="medium">
              {data.wind_speed}
            </Text>
            m/s
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};
export default ForecastItem;
