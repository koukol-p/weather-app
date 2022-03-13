import React, { useState } from "react";
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
const Form = ({ getWeather, getWeatherByCityName }) => {
  const [selectionType, setSelectionType] = useState("selectByCity");

  const [cityName, setCityName] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

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
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="longitude">Longitude</FormLabel>
          <Input
            onInput={(e) => setLongitude(e.target.value)}
            value={longitude}
            id="longitude"
            type="number"
          />
        </FormControl>
      </>
    );
  return (
    <Box as="form" minH={260} marginY={4} onSubmit={handleSubmit}>
      <FormControl as="fieldset">
        <FormLabel>Search by</FormLabel>
        <RadioGroup
          marginBottom={2}
          onChange={setSelectionType}
          value={selectionType}
        >
          <HStack>
            <Radio value="selectByCity">City name</Radio>
            <Radio value="selectByLatLon">Latitude/Longitude</Radio>
          </HStack>
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
