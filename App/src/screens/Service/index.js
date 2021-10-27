import React, { useState, useContext, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import BackIcon from "../../assets/back.svg";
import Api from "../../Api";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import DeleteIcon from "../../assets/delete.svg";
import ModalDelete from "../../components/ModalDelete";
import ModalErro from "../../components/ModalErro";
import { UserContext } from "../../contexts/UserContext";

import {
  Scroller,
  Container,
  BackButton,
  HeaderArea,
  TitleScreen,
  LoadingIcon,
  InputAreaService,
  InputService,
  InputValue,
  ButtonAdd,
  ListArea,
  ListButton,
  ListaText1,
  ListaText2,
  ListButtonDelete,
  ListButtonArea,
  LabelArea,
  LabelText1,
  LabelText2,
  ButtonText,
} from "./styles";
import { json } from "express";

export default () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [serviceField, setServiceField] = useState("");
  const [serviceValue, setServiceValue] = useState("");
  const [modalAttributes, setModalAttributes] = useState({
    isModalVisible: false,
    cb: setModalAttributes,
  });

  const [nameService, setNameService] = useState([
    /*{ id: 1, name: "FAZER UNHA", price: "R$  30,00" },
    { id: 2, name: "CORTE DE CABELO", price: "R$  36,00" },
    { id: 3, name: "FAZER BARBA", price: "R$  15,00" },
    { id: 4, name: "PINTAR CABELO", price: "R$  55,00" },
    { id: 5, name: "ESCOVA", price: "R$  65,00" },
    { id: 6, name: "PODOLOGIA", price: "R$  40,00" },
    { id: 7, name: "HIDRATAÇÃO", price: "R$  45,00" },*/
  ]);
  const [oterList, setOterList] = useState(nameService);
  const { state: user } = useContext(UserContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "violet",
      justifyContent: "center",
      alignItems: "center",
    },
  });

  

 

  const handleExcluirList = (id) => {
    setModalAttributes({ isModalVisible: true, cb: setModalAttributes });
    for (let i = 0; i < oterList.length; i++) {
      if (oterList[i].id === id) {
        setNameService(oterList.splice(i, 1));
      }
    }
  };

  const handleBackButton = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <ModalDelete controlObject={modalAttributes} />
      <HeaderArea>
        <BackButton onPress={handleBackButton}>
          <BackIcon width="35" height="35" fill="#FFFFFF" />
        </BackButton>
        <TitleScreen>Serviços</TitleScreen>
      </HeaderArea>
      <Container>
        <InputAreaService>
          <InputService
            placeholder="Nome  do  serviço"
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
          <ButtonAdd >
            <ButtonText>ADICIONAR</ButtonText>
          </ButtonAdd>
        </InputAreaService>

        {loading && <LoadingIcon size="large" color="#FFFFFF" />}

        <ListArea>
          <LabelArea>
            <LabelText1>Serviço</LabelText1>
            <LabelText2>Preço</LabelText2>
          </LabelArea>
          <FlatList
            style={{ flex: 1 }}
            data={oterList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <LabelArea>
                <ListButtonArea>
                  <ListButton
                    onPress={() =>
                      navigation.navigate("AgendamentoAdm", {
                        nome: `${item.name}`,
                      })
                    }
                  >
                    <ListaText1>{item.name}</ListaText1>
                    <ListaText2>{item.price}</ListaText2>
                  </ListButton>
                  <ListButtonDelete onPress={() => handleExcluirList(item.id)}>
                    <DeleteIcon width="20" height="20" fill="#FFFFFF" />
                  </ListButtonDelete>
                </ListButtonArea>
              </LabelArea>
            )}
          />
        </ListArea>
      </Container>
    </KeyboardAvoidingView>
  );
};
