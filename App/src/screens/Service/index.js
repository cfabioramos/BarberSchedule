import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import BackIcon from "../../assets/back.svg";
import ConfirmaIcon from "../../assets/back.svg";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import DeleteIcon from "../../assets/delete.svg";

import {
  Scroller,
  Container,
  BackButton,
  HeaderArea,
  TitleScreen,
  LoadingIcon,
  InputAreaService,
  InputService,
  InputAreaValue,
  InputValue,
  ButtonAdd,
  ListArea,
  ListButton,
  ListaText1,
  ListaText2,
  ListButtonDelete,
  ListButtonArea,
} from "./styles";
import styled from "styled-components";

export default () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [serviceField, setServiceField] = useState("");
  const [serviceValue, setServiceValue] = useState("");
  const [oterList, setOterList] = useState();
  const [nameService, setNameService] = useState([
    { name: "FAZER UNHA", preco: "R$  30,00", id: "1" },
    { name: "CORTE DE CABELO", preco: "R$  36,00", id: "2" },
    { name: "FAZER BARBA", preco: "R$  15,00", id: "3" },
    { name: "PINTAR CABELO", preco: "R$  55,00", id: "4" },
    { name: "ESCOVA", preco: "R$  65,00", id: "5" },
    { name: "PODOLOGIA", preco: "R$  40,00", id: "6" },
    { name: "HIDRATAÇÃO", preco: "R$  45,00", id: "7" },
  ]);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "violet",
      justifyContent: "center",
      alignItems: "center",
    },
  });

  const handleAddList = () => {
    setLoading(true);
  };

  const handleExcluirList = () => {};

  const handleBackButton = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <HeaderArea>
        <BackButton onPress={handleBackButton}>
          <BackIcon width="35" height="35" fill="#FFFFFF" />
        </BackButton>
        <TitleScreen>Serviços</TitleScreen>
      </HeaderArea>
      <Container>
        <InputAreaService>
          <InputService
            placeholder=" Nome  do  serviço"
            placeholderTextColor="#FFFFFF"
            value={serviceField}
            onChangeText={(t) => setServiceField(t)}
          />
          <InputValue
            keyboardType="numeric"
            placeholder="R$"
            placeholderTextColor="#FFFFFF"
            value={serviceValue}
            onChangeText={(t) => setServiceValue(t)}
          />
          <ButtonAdd onPress={handleAddList}>
            <ConfirmaIcon width="35" height="35" fill="#FFFFFF" />
          </ButtonAdd>
        </InputAreaService>

        {loading && <LoadingIcon size="large" color="#FFFFFF" />}

        <ListArea>
          <FlatList
            data={nameService}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ListButtonArea>
              <ListButton
                onPress={() =>
                  navigation.navigate("AgendamentoAdm", {
                    nome: `${item.name}`,
                  })
                }
              >
                <ListaText1>
                  {item.name}
                </ListaText1>
                <ListaText2>
                  {item.preco} 
                </ListaText2>
              </ListButton>
              <ListButtonDelete onPress={()=>navigation.goBack()}>
                <DeleteIcon width="20" height="20" fill="#FFFFFF" />
              </ListButtonDelete>
              </ListButtonArea>
            )}
          />
        </ListArea>
      </Container>
    </KeyboardAvoidingView>
  );
};
