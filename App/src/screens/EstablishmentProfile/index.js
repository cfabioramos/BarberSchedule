import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

import Api from "../../Api";

import InputComponent from "../../components/InputComponent";
import ImagePickerComponent from "../../components/ImagePickerComponent";
import { VIOLET_PALLETE } from "../ColorsPalette";

import { Container, InputArea, CustomButton, CustomButtonText } from "./styles";

import PersonIcon from "../../assets/person.svg";
import LockIcon from "../../assets/lock.svg";

export default () => {
  const navigation = useNavigation();

  const [nameField, setNameField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleUpdateClick = () => {
    console.log("Implementar acao de atualizar dados do estabelecimento");
  };

  const ImageArea = styled.View`
    margin-bottom: 10px;
    justify-content: space-around;
    width: 100%;
    border-radius: 30px;
    flex-direction: row;
  `;

  return (
    <Container>
      <InputArea>
        <InputComponent
          IconSvg={PersonIcon}
          placeholder="Nome"
          value={nameField}
          onChangeText={(t) => setNameField(t)}
        />

        <InputComponent
          IconSvg={LockIcon}
          placeholder="Senha"
          value={passwordField}
          onChangeText={(t) => setPasswordField(t)}
          password={true}
        />

        <ImageArea>
          <ImagePickerComponent />
          <ImagePickerComponent />
          <ImagePickerComponent />
        </ImageArea>
        <ImageArea>
          <ImagePickerComponent />
          <ImagePickerComponent />
          <ImagePickerComponent />
        </ImageArea>

        <CustomButton onPress={handleUpdateClick}>
          <CustomButtonText>ATUALIZAR</CustomButtonText>
        </CustomButton>
      </InputArea>
    </Container>
  );
};
