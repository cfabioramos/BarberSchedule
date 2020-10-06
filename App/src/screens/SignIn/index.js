import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";

import { UserContext } from '../../contexts/UserContext'

import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from "./styles";

import Api from '../../Api';

import SignInput from "../../components/SignInput";

import BarberLogo from "../../assets/barber.svg";
import EmailIcon from "../../assets/email.svg";
import LockIcon from "../../assets/lock.svg";

export default () => {
  const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();

  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleSignClick = async () => {
    if (emailField != "" && passwordField != "") {
      // let json = await Api.signIn(emailField, passwordField);
      var json = 
        {
            "error":"",
            "data": {
                "id":4,
                "name":"Bonieky Testador",
                "avatar":"https:\/\/api.b7web.com.br\/devbarber\/media\/avatars\/default.png",
                "email":"boniekyteste@hotmail.com"
            },
            "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmI3d2ViLmNvbS5iclwvZGV2YmFyYmVyXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjAxNzc4MzM0LCJleHAiOjE2MDE3ODE5MzQsIm5iZiI6MTYwMTc3ODMzNCwianRpIjoiRGFGZG1QcDJVYnpxWWxoVCIsInN1YiI6NCwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.CqXZ6Z22PC87mTABD1htMgGLfc8MKdAqIZ4eQ3TdWo8"
        };

      if (json.token) {
        await AsyncStorage.setItem("token", json.token);

        userDispatch({
          type: "setAvatar",
          payload: {
            avatar: json.data.avatar,
          },
        });

        navigation.reset({
          routes: [{ name: "MainTab" }],
        });
      } else {
        alert("E-mail e/ou senha errados!");
      }
    } else {
      alert("Preencha os campos!");
    }
  };

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{ name: "SignUp" }],
    });
  };

  return (
    <Container>
      <BarberLogo width="100%" height="23%" />

      <InputArea>
        <SignInput
          IconSvg={EmailIcon}
          placeholder="Digite seu e-mail"
          value={emailField}
          onChangeText={t => setEmailField(t)}
        />

        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={t => setPasswordField(t)}
          password={true}
        />

        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>
          Ainda não possui uma conta?
        </SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
