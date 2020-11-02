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
  const [actualPasswordField, setActualPasswordField] = useState("");
  const [newPasswordField, setNewPasswordField] = useState("");
  const [imageFieldA, setImageFieldA] = useState(null);
  const [imageFieldB, setImageFieldB] = useState(null);
  const [imageFieldC, setImageFieldC] = useState(null);
  const [imageFieldD, setImageFieldD] = useState(null);
  const [imageFieldE, setImageFieldE] = useState(null);
  const [imageFieldF, setImageFieldF] = useState(null);

  const handleUpdateClick = () => {
    if (nameField &&
      (imageFieldA || imageFieldB || imageFieldC || 
        imageFieldD || imageFieldE || imageFieldF)) {

          if (!actualPasswordField && newPasswordField) {
            alert('Para alterar a senha é necessário informar a senha atual')
          }
          else {
            updateEstablishmentData()
          }

    } else if (!nameField){
      alert("O nome deve ser informado");
    }
    else {
      alert("Adicione ao menos uma imagem de capa");
    } 
    
  };

  const updateEstablishmentData = () => {

    const data = {}
    data.name = nameField
    data.actualPassword = actualPasswordField
    data.newPassword = newPasswordField
    data.images = []

    if (imageFieldA) {
      data.images.push(Platform.OS === "android" ? imageFieldA : imageFieldA.replace("file://", ""))
    }

    if (imageFieldB) {
      data.images.push(Platform.OS === "android" ? imageFieldB : imageFieldB.replace("file://", ""))
    }

    if (imageFieldC) {
      data.images.push(Platform.OS === "android" ? imageFieldC : imageFieldC.replace("file://", ""))
    }

    if (imageFieldD) {
      data.images.push(Platform.OS === "android" ? imageFieldD : imageFieldD.replace("file://", ""))
    }

    if (imageFieldE) {
      data.images.push(Platform.OS === "android" ? imageFieldE : imageFieldE.replace("file://", ""))
    }

    if (imageFieldF) {
      data.images.push(Platform.OS === "android" ? imageFieldF : imageFieldF.replace("file://", ""))
    }

    console.log(data)

    //TODO
    // Api.updateEstablishmentData()

  }

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
          placeholder="Senha Atual"
          value={actualPasswordField}
          onChangeText={(t) => setActualPasswordField(t)}
          password={true}
        />

        <InputComponent
          IconSvg={LockIcon}
          placeholder="Nova Senha"
          value={newPasswordField}
          onChangeText={(t) => setNewPasswordField(t)}
          password={true}
        />

        <ImageArea>
          <ImagePickerComponent
            imageField={imageFieldA}
            setimageField={setImageFieldA}
          />
          <ImagePickerComponent
            imageField={imageFieldB}
            setimageField={setImageFieldB}
          />
          <ImagePickerComponent
            imageField={imageFieldC}
            setimageField={setImageFieldC}
          />
        </ImageArea>
        <ImageArea>
          <ImagePickerComponent
            imageField={imageFieldD}
            setimageField={setImageFieldD}
          />
          <ImagePickerComponent
            imageField={imageFieldE}
            setimageField={setImageFieldE}
          />
          <ImagePickerComponent
            imageField={imageFieldF}
            setimageField={setImageFieldF}
          />
        </ImageArea>

        <CustomButton onPress={handleUpdateClick}>
          <CustomButtonText>ATUALIZAR</CustomButtonText>
        </CustomButton>
      </InputArea>
    </Container>
  );
};
