import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";
import { validateEmail } from "../../util/Validator";
import { TOKEN_KEY, GET_ERROR_MESSAGE } from "../../util/Commons";
import ModalErro from "../../components/ModalErro";

import { UserContext } from "../../contexts/UserContext";

import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  LoadingIcon,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from "./styles";

import Api from "../../Api";

import InputComponent from "../../components/InputComponent";

import BarberLogo from "../../assets/barber_2.svg";
import EmailIcon from "../../assets/email.svg";
import LockIcon from "../../assets/lock.svg";

export default () => {
  const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [modalAttributes, setModalAttributes] = useState({
    isModalVisible: false,
    errorMessage: "",
    cb: setModalAttributes,
  });

  const handleSignClick = async () => {
    setLoading(true);
    try {
      if (emailField != "" && passwordField != "") {
        const email = emailField.trim();
        if (!validateEmail(email)) {
          alert("Verifique o formato do E-mail");
          return;
        }

        let json = await Api.signIn(email, passwordField);
        // let json = await Api.checkToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmI3d2ViLmNvbS5iclwvZGV2YmFyYmVyXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjAxNzc4MzM0LCJleHAiOjE2MDE3ODE5MzQsIm5iZiI6MTYwMTc3ODMzNCwianRpIjoiRGFGZG1QcDJVYnpxWWxoVCIsInN1YiI6NCwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.CqXZ6Z22PC87mTABD1htMgGLfc8MKdAqIZ4eQ3TdWo8')
        if (json && json.token) {
          await AsyncStorage.setItem(TOKEN_KEY, json.token);
          userDispatch({
            type: "setUserContext",
            payload: {
              id: json.id_user,
              avatar: json.avatar,
              type: json.type,
            },
          });

          navigation.reset({
            routes: [{ name: "MainTab" }],
          });
        }
        setLoading(false);
      } else {
        alert("preencha os campos");
      }
    } catch (error) {
      setLoading(false);
      setModalAttributes({
        isModalVisible: true,
        errorMessage: GET_ERROR_MESSAGE(error),
        cb: setModalAttributes,
      });
    }
  };

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{ name: "SignUp" }],
    });
  };

  return (
    <Container>
      <ModalErro controlObject={modalAttributes} />
      <BarberLogo width="100%" height="23%" />
      {loading && <LoadingIcon size="large" color="#FFFFFF" />}
      <InputArea>
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
