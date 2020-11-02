import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

import Api from "../../Api";

import InputComponent from "../../components/InputComponent";
import ImagePickerComponent from "../../components/ImagePickerComponent";

import { Container, InputArea, CustomButton, CustomButtonText, ImageArea } from "./styles";

import PersonIcon from "../../assets/person.svg";
import LockIcon from "../../assets/lock.svg";

export default () => {
  const navigation = useNavigation();

  const [nameField, setNameField] = useState("");
  const [actualPasswordField, setActualPasswordField] = useState("");
  const [newPasswordField, setNewPasswordField] = useState("");
  const [imageField, setImageField] = useState(null);

  const handleUpdateClick = () => {
    if (nameField && imageField) {
      if (!actualPasswordField && newPasswordField) {
        alert("Para alterar a senha é necessário informar a senha atual");
      } else {
        updateData();
      }
    } else if (!nameField) {
      alert("O nome deve ser informado");
    } else {
      alert("Adicione ao menos uma imagem de capa");
    }
  };

  const handleLogoutClick = () => {
    // invalida o token
    // await Api.logout()
    navigation.reset({
      routes: [{ name: "SignIn" }],
    });
  };

  const updateData = () => {
    const data = {};
    data.name = nameField;
    data.actualPassword = actualPasswordField;
    data.newPassword = newPasswordField;
    data.image =
      Platform.OS === "android"
        ? imageField
        : imageField.replace("file://", "");

    console.log(data);
    //TODO
    // Api.updateEstablishmentData()
  };

  return (
    <Container>
      <InputArea>
        <ImageArea>
          <ImagePickerComponent
            imageField={imageField}
            setimageField={setImageField}
          />
        </ImageArea>

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

        <CustomButton onPress={handleUpdateClick}>
          <CustomButtonText>ATUALIZAR</CustomButtonText>
        </CustomButton>
        <CustomButton onPress={handleLogoutClick}>
          <CustomButtonText>SAIR</CustomButtonText>
        </CustomButton>
      </InputArea>
    </Container>
  );
};
