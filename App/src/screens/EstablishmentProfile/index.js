import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Api from "../../Api";

import InputComponent from "../../components/InputComponent";
import FlexibleInputComponent from "../../components/FlexibleInputComponent";
import ImagePickerComponent from "../../components/ImagePickerComponent";

import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  ImageArea,
} from "./styles";

import PersonIcon from "../../assets/person.svg";
import LocationIcon from "../../assets/location-home.svg";

export default () => {
  const navigation = useNavigation();

  const [nameField, setNameField] = useState("");

  const [cepField, setCepField] = useState("");
  const [addressField, setAddressField] = useState("");
  const [addressNumberField, setAddressNumberField] = useState("");
  const [streetField, setStreetField] = useState("");
  const [cityField, setCityField] = useState("");

  const [imageFieldA, setImageFieldA] = useState(null);
  const [imageFieldB, setImageFieldB] = useState(null);
  const [imageFieldC, setImageFieldC] = useState(null);
  const [imageFieldD, setImageFieldD] = useState(null);
  const [imageFieldE, setImageFieldE] = useState(null);
  const [imageFieldF, setImageFieldF] = useState(null);

  const handleUpdateClick = () => {
    if (
      nameField &&
      cepField &&
      addressField &&
      addressNumberField &&
      streetField &&
      cityField &&
      (imageFieldA ||
        imageFieldB ||
        imageFieldC ||
        imageFieldD ||
        imageFieldE ||
        imageFieldF)
    ) {
      updateEstablishmentData();
    } 
    else if (!nameField) {
      alert("O nome deve ser informado");
    } 
    else {
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

  const handleCep = async () => {
    const addressObj = await Api.findAddressByCep(cepField)
    setAddressField(addressObj.logradouro)
  }

  const updateEstablishmentData = () => {
    const data = {};
    data.name = nameField;
    data.cep = cepField;
    data.images = [];

    if (imageFieldA) {
      data.images.push(
        Platform.OS === "android"
          ? imageFieldA
          : imageFieldA.replace("file://", "")
      );
    }

    if (imageFieldB) {
      data.images.push(
        Platform.OS === "android"
          ? imageFieldB
          : imageFieldB.replace("file://", "")
      );
    }

    if (imageFieldC) {
      data.images.push(
        Platform.OS === "android"
          ? imageFieldC
          : imageFieldC.replace("file://", "")
      );
    }

    if (imageFieldD) {
      data.images.push(
        Platform.OS === "android"
          ? imageFieldD
          : imageFieldD.replace("file://", "")
      );
    }

    if (imageFieldE) {
      data.images.push(
        Platform.OS === "android"
          ? imageFieldE
          : imageFieldE.replace("file://", "")
      );
    }

    if (imageFieldF) {
      data.images.push(
        Platform.OS === "android"
          ? imageFieldF
          : imageFieldF.replace("file://", "")
      );
    }

    console.log(data);

    //TODO
    // Api.updateEstablishmentData()
  };

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
          IconSvg={LocationIcon}
          placeholder="CEP"
          value={cepField}
          onChangeText={(t) => setCepField(t)}
          onBlur={handleCep}
        />

        <InputComponent
          IconSvg={LocationIcon}
          placeholder="Endereço"
          value={addressField}
          readOnly={true}
        />

        <FlexibleInputComponent
          width={35}
          IconSvg={LocationIcon}
          placeholder="No"
          value={addressNumberField}
          onChangeText={(t) => setAddressNumberField(t)}
        /><FlexibleInputComponent
        width={35}
        IconSvg={LocationIcon}
        placeholder="No"
        value={addressNumberField}
        onChangeText={(t) => setAddressNumberField(t)}
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
        <CustomButton onPress={handleLogoutClick}>
          <CustomButtonText>SAIR</CustomButtonText>
        </CustomButton>
      </InputArea>
    </Container>
  );
};
