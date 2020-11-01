import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Api from "../../Api";

import InputComponent from '../../components/InputComponent'

import { Container, InputArea, CustomButton, CustomButtonText } from "./styles";

import PersonIcon from "../../assets/person.svg";
import LockIcon from "../../assets/lock.svg";

export default () => {
  const navigation = useNavigation();

  const [nameField, setNameField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleUpdateClick = () => {
      console.log('Implementar acao de atualizar dados do estabelecimento')
  }

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

        <CustomButton onPress={handleUpdateClick}>
          <CustomButtonText>ALTERAR</CustomButtonText>
        </CustomButton>
      </InputArea>
    </Container>
  );
};
