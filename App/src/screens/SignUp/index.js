import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";
import { VIOLET_PALLETE } from "../ColorsPalette";

import { UserContext } from "../../contexts/UserContext";
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from "./styles";

import InputComponent from "../../components/InputComponent";
import SignDropdown from "../../components/SignDropdown";

import Api from "../../Api";

import BarberLogo from "../../assets/barber_2.svg";
import PersonIcon from "../../assets/person.svg";
import EmailIcon from "../../assets/email.svg";
import LockIcon from "../../assets/lock.svg";
import Icon from "react-native-vector-icons/Feather";

const dropDownOptions = [
  {
    label: "Cliente",
    value: "C",
    icon: () => <Icon name="user" size={22} color={VIOLET_PALLETE[0]} />,
  },
  {
    label: "Estabelecimento",
    value: "E",
    icon: () => (
      <Icon name="shopping-cart" size={22} color={VIOLET_PALLETE[0]} />
    ),
  },
];

export default () => {
  const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();

  const [nameField, setNameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [typeField, setTypeField] = useState("");

  const handleSignClick = async () => {
    if (nameField != "" && emailField != "" && passwordField != "") {
      if (typeField == "") {
        alert("Informe se é cliente ou estabelecimento");  
      } else {
        // let res = await Api.signUp(nameField, emailField, passwordField);
        let json = await Api.checkToken(
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmI3d2ViLmNvbS5iclwvZGV2YmFyYmVyXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjAxNzc4MzM0LCJleHAiOjE2MDE3ODE5MzQsIm5iZiI6MTYwMTc3ODMzNCwianRpIjoiRGFGZG1QcDJVYnpxWWxoVCIsInN1YiI6NCwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.CqXZ6Z22PC87mTABD1htMgGLfc8MKdAqIZ4eQ3TdWo8"
        );
        if (res.token) {
          await AsyncStorage.setItem("token", res.token);
          userDispatch({
            type: "setUserContext",
            payload: {
              avatar: json.avatar,
              type: json.type,
            },
          });

          navigation.reset({
            routes: [{ name: "MainTab" }],
          });
        } else {
          alert("Erro: " + res.error);
        }
      }
    } else {
      alert("Preencha os campos");
    }
  };

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{ name: "SignIn" }],
    });
  };

  return (
    <Container>
      <BarberLogo width="100%" height="160" />

      <InputArea>
        <InputComponent
          IconSvg={PersonIcon}
          placeholder="Digite seu nome"
          value={nameField}
          onChangeText={(t) => setNameField(t)}
        />

        <InputComponent
          IconSvg={EmailIcon}
          placeholder="Digite seu e-mail"
          value={emailField}
          onChangeText={(t) => setEmailField(t)}
        />

        <InputComponent
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={(t) => setPasswordField(t)}
          password={true}
        />

        <SignDropdown
          options={dropDownOptions}
          placeholder="Eu sou..."
          onChangeValue={setTypeField}
        />

        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>CADASTRAR</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
