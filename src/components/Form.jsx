import React, { useContext, useState } from "react";
import {
  Button,
  HStack,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  Box,
  Flex,
} from "@chakra-ui/react";
import { ThemeContext } from "../context/ThemeContext";

const Form = ({ getWeather, getWeatherByCityName }) => {
  const [selectionType, setSelectionType] = useState("selectByCity");

  const [cityName, setCityName] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const { theme } = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (selectionType) {
      case "selectByCity":
        getWeatherByCityName(cityName);
        break;
      case "selectByLatLon":
        getWeather(latitude, longitude);
        break;
      default:
        return;
    }
    setCityName("");
    setLatitude("");
    setLongitude("");
  };

  const fields =
    selectionType === "selectByCity" ? (
      <FormControl>
        <FormLabel htmlFor="city">City</FormLabel>
        <Input
          onInput={(e) => setCityName(e.target.value)}
          value={cityName}
          id="city"
          type="text"
          borderColor={theme.textColor}
          bgColor={theme.fieldColor}
        />
      </FormControl>
    ) : (
      <>
        <FormControl>
          <FormLabel htmlFor="latitude">Latitude</FormLabel>
          <Input
            onInput={(e) => setLatitude(e.target.value)}
            value={latitude}
            id="latitude"
            type="number"
            borderColor={theme.textColor}
            bgColor={theme.fieldColor}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="longitude">Longitude</FormLabel>
          <Input
            borderColor={theme.textColor}
            onInput={(e) => setLongitude(e.target.value)}
            value={longitude}
            id="longitude"
            type="number"
            bgColor={theme.fieldColor}
          />
        </FormControl>
      </>
    );
  return (
    <Box

      bgColor={theme.backdrop}
      padding={3}
      borderColor={theme.textColor}
      borderWidth="1px"
      as="form"
      minH={260}
      marginY={4}
      onSubmit={handleSubmit}
    >
      <FormControl as="fieldset">
        <FormLabel>Search by</FormLabel>
        <RadioGroup
          marginBottom={2}
          onChange={setSelectionType}
          value={selectionType}
        >
          <Flex flexDir="column">
            <Radio value="selectByCity">City name</Radio>
            <Radio value="selectByLatLon">Latitude/Longitude</Radio>
          </Flex>
        </RadioGroup>
      </FormControl>
      <Flex direction="column" minH={180}>
        {fields}
      </Flex>

      <Button type="submit" color="black" bgColor="gray.200">
        Get Weather
      </Button>
    </Box>
  );
};
export default Form;
