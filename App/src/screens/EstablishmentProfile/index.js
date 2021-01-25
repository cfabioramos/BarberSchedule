import React, { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";
import { TOKEN_KEY } from "../../util/Commons";
import * as Location from "expo-location";

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
  InputHorizontalArea,
  ImageArea,
  LocalFavButton,
  LoadingIcon,
  Scroller
} from "./styles";

import PersonIcon from "../../assets/person.svg";
import LocationIcon from "../../assets/crosshair.svg";
import ZipCodeIcon from "../../assets/mail.svg";
import AddressAIcon from "../../assets/placa_a.svg";
import HouseNumberIcon from "../../assets/house_number.svg";

import { UserContext } from "../../contexts/UserContext";
import { DEFAULT_COLLOR_PALLET } from "../ColorsPalette";

export default () => {
  const { dispatch: userDispatch } = useContext(UserContext);

  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);

  const [nameField, setNameField] = useState("");
  const [cepField, setCepField] = useState();
  const [addressField, setAddressField] = useState("");
  const [addressNumberField, setAddressNumberField] = useState("");
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const [imageFieldA, setImageFieldA] = useState(null);
  const [imageFieldB, setImageFieldB] = useState(null);
  const [imageFieldC, setImageFieldC] = useState(null);
  const [imageFieldD, setImageFieldD] = useState(null);
  const [imageFieldE, setImageFieldE] = useState(null);
  const [imageFieldF, setImageFieldF] = useState(null);

  useEffect(() => {
    const getUserProfileData = async () => {
      const token = await AsyncStorage.getItem(TOKEN_KEY);
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
    if (cepField) {
      const addressObj = await Api.findAddressByCep(cepField);
      setAddressField(
        addressObj.logradouro ? addressObj.logradouro : addressObj.localidade
      );
    } else {
      setAddressField("");
    }
  };

  const updateEstablishmentData = async () => {
    const formData = new FormData();
    formData.append("name", nameField);
    formData.append("cep", cepField);
    formData.append("number", addressNumberField);
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);

    const userData = await Api.submitMultipartWithFormData(
      "users",
      "PUT",
      formData
    );
    if (userData) alert("Dados atualizados");
  };

  const handleFavClick = async () => {
    setLoading(true);    
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
      });

      setLatitude(location.coords.latitude)
      setLongitude(location.coords.longitude)
      let geoLocationData = await Api.findGeoLocation(
        location.coords.latitude,
        location.coords.longitude
      );

      const newCep = geoLocationData.address.postcode;
      if (newCep) {
        setCepField(newCep);
        const addressObj = await Api.findAddressByCep(newCep);
        setAddressField(
          addressObj.logradouro ? addressObj.logradouro : addressObj.localidade
        );
      }
      setLoading(false);
    })();
  };

  return (
    <Container>
      <Scroller>
        <InputArea>
          <InputComponent
            IconSvg={PersonIcon}
            placeholder="Nome"
            value={nameField}
            onChangeText={(t) => setNameField(t)}
          />

          <InputHorizontalArea>
            <LocalFavButton onPress={handleFavClick}>
              <LocationIcon
                width="22"
                height="22"
                fill={DEFAULT_COLLOR_PALLET[0]}
              />
            </LocalFavButton>
            <NumericInputComponent
              IconSvg={ZipCodeIcon}
              placeholder="CEP"
              value={cepField}
              onChangeText={(t) => setCepField(t)}
              onBlur={handleCep}
              maxLength={9}
              width="80%"
            />
          </InputHorizontalArea>

          <InputComponent
            IconSvg={AddressAIcon}
            placeholder="Endereço"
            value={addressField}
            readOnly={true}
          />

          <FlexibleInputComponent
            width={35}
            IconSvg={HouseNumberIcon}
            placeholder="No"
            value={addressNumberField}
            onChangeText={(t) => setAddressNumberField(t)}
            maxLength={6}
          />

          {loading && <LoadingIcon size="large" color="#FFFFFF" />}

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
      </Scroller>
    </Container>
  );
};
