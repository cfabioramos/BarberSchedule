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

  const [imageFieldA, setImageFieldA] = useState(null);
  const [imageFieldB, setImageFieldB] = useState(null);
  const [imageFieldC, setImageFieldC] = useState(null);
  const [imageFieldD, setImageFieldD] = useState(null);
  const [imageFieldE, setImageFieldE] = useState(null);
  const [imageFieldF, setImageFieldF] = useState(null);

  const handleUpdateClick = () => {
    const uriImageFieldA = Platform.OS === "android" ? imageFieldA : imageFieldA.replace("file://", "")
    const uriImageFieldB = Platform.OS === "android" ? imageFieldB : imageFieldB.replace("file://", "")
    const uriImageFieldC = Platform.OS === "android" ? imageFieldC : imageFieldC.replace("file://", "")
    const uriImageFieldD = Platform.OS === "android" ? imageFieldD : imageFieldD.replace("file://", "")
    const uriImageFieldE = Platform.OS === "android" ? imageFieldE : imageFieldE.replace("file://", "")
    const uriImageFieldF = Platform.OS === "android" ? imageFieldF : imageFieldF.replace("file://", "")

    //TODO
    // Api.updateEstablishmentData()    
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
          <ImagePickerComponent imageField={imageFieldA} setimageField={setImageFieldA} />
          <ImagePickerComponent imageField={imageFieldB} setimageField={setImageFieldB} />
          <ImagePickerComponent imageField={imageFieldC} setimageField={setImageFieldC} />
        </ImageArea>
        <ImageArea>
          <ImagePickerComponent imageField={imageFieldD} setimageField={setImageFieldD} />
          <ImagePickerComponent imageField={imageFieldE} setimageField={setImageFieldE} />
          <ImagePickerComponent imageField={imageFieldF} setimageField={setImageFieldF} />
        </ImageArea>

        <CustomButton onPress={handleUpdateClick}>
          <CustomButtonText>ATUALIZAR</CustomButtonText>
        </CustomButton>
      </InputArea>
    </Container>
  );
};
