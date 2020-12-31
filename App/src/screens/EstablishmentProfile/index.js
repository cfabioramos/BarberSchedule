import React, { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";

import Api from "../../Api";

import NumericInputComponent from "../../components/NumericInputComponent";
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

import { UserContext } from "../../contexts/UserContext";

export default () => {
  const { dispatch: userDispatch } = useContext(UserContext);

  const navigation = useNavigation();

  const [nameField, setNameField] = useState("");

  const [cepField, setCepField] = useState();
  const [addressField, setAddressField] = useState("");
  const [addressNumberField, setAddressNumberField] = useState("");

  const [imageFieldA, setImageFieldA] = useState(null);
  const [imageFieldB, setImageFieldB] = useState(null);
  const [imageFieldC, setImageFieldC] = useState(null);
  const [imageFieldD, setImageFieldD] = useState(null);
  const [imageFieldE, setImageFieldE] = useState(null);
  const [imageFieldF, setImageFieldF] = useState(null);

  useEffect(() => {
    const getUserProfileData = async () => {
      const token = await AsyncStorage.getItem("cfbarber_token");
      console.log("TOKEN: ");
      console.log(token);
      if (token) {
        let res = await Api.checkToken(token);
        if (res) {
          userDispatch({
            type: "setUserContext",
            payload: {
              avatar: res.avatar,
              type: res.type,
            },
          });
          setNameField(res.name);
          if (res.userAddress && res.userAddress.cep) {
            setCepField(res.userAddress.cep.toString());
            setAddressField(res.userAddress.address);
            setAddressNumberField(res.userAddress.number);
          }
        } else {
          navigation.navigate("SignIn");
        }
      } else {
        navigation.navigate("SignUp");
      }
    };
    getUserProfileData();
  }, []);

  const handleUpdateClick = () => {
    if (
      nameField &&
      cepField &&
      addressField &&
      addressNumberField /* &&
      (imageFieldA ||
        imageFieldB ||
        imageFieldC ||
        imageFieldD ||
        imageFieldE ||
        imageFieldF) */
    ) {
      updateEstablishmentData();
    } else if (!nameField) {
      alert("O nome deve ser informado");
    } else if (!cepField) {
      alert(
        "Informe o CEP para poder ser localizado pelos usuários do aplicativo."
      );
    } else if (!addressNumberField) {
      alert("Informe o número do endereço.");
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

  const handleCep = async () => {
    const addressObj = await Api.findAddressByCep(cepField);
    setAddressField(addressObj.logradouro);
  };

  const updateEstablishmentData = async () => {
    const formData = new FormData();
    formData.append("name", nameField);
    formData.append("cep", cepField);
    formData.append("numero", addressNumberField);
    
    const userData = await Api.submitMultipartWithFormData('users', 'PUT', formData)
    if (userData)
      alert ('Dados atualizados')
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

        <NumericInputComponent
          IconSvg={LocationIcon}
          placeholder="CEP"
          value={cepField}
          onChangeText={setCepField}
          onBlur={handleCep}
          maxLength={8}
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
          maxLength={6}
        />

        <ImageArea>
          <ImagePickerComponent
            fieldPlaceholder="Imagem"
            imageField={imageFieldA}
            setimageField={setImageFieldA}
          />
          <ImagePickerComponent
            fieldPlaceholder="Imagem"
            imageField={imageFieldB}
            setimageField={setImageFieldB}
          />
          <ImagePickerComponent
            fieldPlaceholder="Imagem"
            imageField={imageFieldC}
            setimageField={setImageFieldC}
          />
        </ImageArea>
        <ImageArea>
          <ImagePickerComponent
            fieldPlaceholder="Imagem"
            imageField={imageFieldD}
            setimageField={setImageFieldD}
          />
          <ImagePickerComponent
            fieldPlaceholder="Imagem"
            imageField={imageFieldE}
            setimageField={setImageFieldE}
          />
          <ImagePickerComponent
            fieldPlaceholder="Imagem"
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
