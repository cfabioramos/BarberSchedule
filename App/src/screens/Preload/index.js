import React, { useEffect, useContext } from "react";
import { Text } from "react-native";
import { Container, LoadingIcon } from "./styles";
import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from "@react-navigation/native";
import { TOKEN_KEY } from "../../util/Commons"

import BarberLogo from "../../assets/barber_2.svg";

import Api from "../../Api";

import { UserContext } from '../../contexts/UserContext'

export default () => {
  const navigation = useNavigation();

  const { dispatch: userDispatch } = useContext(UserContext);

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem(TOKEN_KEY);
      console.log("TOKEN: ")
      console.log(token)
      if (token) {
        let res = await Api.checkToken(token);
        if (res) {
          userDispatch({
            type: "setUserContext",
            payload: {
              avatar: res.avatar,
              type: res.type
            },
          });
          navigation.navigate("MainTab");
        } else {
          navigation.navigate("SignIn");
        }
      } else {
        navigation.navigate("SignUp");
      }
    };
    checkToken();
  }, []);

  return (
    <Container>
      <BarberLogo width="100%" height="23%" />
      <LoadingIcon size="large" color="#FFFFFF" />
      <Text>Loading...</Text>
    </Container>
  );
};
