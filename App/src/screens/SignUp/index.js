import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";
import { DEFAULT_COLLOR_PALLET } from "../ColorsPalette";
import { validateEmail } from "../../util/Validator";
import ImagePickerComponent from "../../components/ImagePickerComponent";
import { TOKEN_KEY, GET_ERROR_MESSAGE  } from "../../util/Commons";
import { UserContext } from "../../contexts/UserContext";
import ModalErro from "../../components/ModalErro";
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
  ImageArea,
} from "./styles";

import InputComponent from "../../components/InputComponent";
import SignDropdown from "../../components/SignDropdown";

import Api from "../../Api";
import Commons from "../../util/Commons";

import BarberLogo from "../../assets/barber_2.svg";
import PersonIcon from "../../assets/person.svg";
import EmailIcon from "../../assets/email.svg";
import LockIcon from "../../assets/lock.svg";
import Icon from "react-native-vector-icons/Feather";

const dropDownOptions = [
  {
    label: "Cliente",
    value: "U",
    icon: () => <Icon name="user" size={22} color={DEFAULT_COLLOR_PALLET[0]} />,
  },
  {
    label: "Estabelecimento",
    value: "E",
    icon: () => (
      <Icon name="shopping-cart" size={22} color={DEFAULT_COLLOR_PALLET[0]} />
    ),
  },
];

export default () => {
  const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();

  const [imageField, setImageField] = useState(null);
  const [nameField, setNameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [typeField, setTypeField] = useState("");
  const [modalAttributes, setModalAttributes] = useState({
    isModalVisible: false,
    errorMessage: "",
    cb: setModalAttributes,
  });

  const handleSignClick = async () => {
    if (nameField != "" && emailField != "" && passwordField != "") {
      if (typeField == "") {
        alert("Informe se é cliente ou estabelecimento");
      } else {
        const email = emailField.trim();
        if (!validateEmail(email)) {
          alert("Verifique o formato do E-mail");
          return;
        }

        let objectImageData = Commons.getImageDataFromLocal(imageField);
        let filename = objectImageData.filename;
        let type = objectImageData.type;

        const formData = new FormData();
        formData.append("image", { uri: imageField, name: filename, type });
        formData.append("name", nameField);
        formData.append("email", email);
        formData.append("password", passwordField);
        formData.append("type", typeField);
        try {
          let json = await Api.submitMultipartWithFormData(
            "users",
            "POST",
            formData
          );

          if (json.token) {
            await AsyncStorage.setItem(TOKEN_KEY, json.token);
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
          }
        } catch (error) {
          setModalAttributes({
            isModalVisible: true,
            errorMessage: GET_ERROR_MESSAGE(error),
            cb: setModalAttributes,
          });
        }
      }
    }
  };

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{ name: "SignIn" }],
    });
  };

  return (
    <Container>
      <ModalErro controlObject={modalAttributes} />
      <BarberLogo width="100%" height="140" />

      <ImageArea>
        <ImagePickerComponent
          fieldPlaceholder="Foto"
          imageField={imageField}
          setimageField={setImageField}
        />
      </ImageArea>

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
