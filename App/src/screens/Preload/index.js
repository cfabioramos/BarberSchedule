import React, { useEffect, useContext } from "react";
import { Text } from "react-native";
import { Container, LoadingIcon } from "./styles";
import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from "@react-navigation/native";

import BarberLogo from "../../assets/barber.svg";

import Api from "../../Api";

export default () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("cfbarber-token");
      if (token) {
        let res = await Api.checkToken(token);
        console.log(res)
      } else {
        navigation.navigate("SignIn");
      }
    };
    checkToken();
  });

  return (
    <Container>
      <BarberLogo width="100%" height="23%" />
      <LoadingIcon size="large" color="#FFFFFF" />
      <Text>Loading...</Text>
    </Container>
  );
};
