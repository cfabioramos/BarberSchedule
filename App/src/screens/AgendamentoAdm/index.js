import React, { useState, useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import BackIcon from "../../assets/back.svg";
import ConfirmaIcon from "../../assets/back.svg";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import {
  Container,
  Scroller,
  TitleScreen,
  ScreenNameService,
  LoadingIcon,
  ContainerAgenda,
  InputAreaDuration,
  InputDurationTitle,
  InputDuration,
  InputAreaDate,
  DateTitle,
  InputDateInicio,
  InputDateEnd,
  InputAreaHour,
  HourTitle,
  ButtonAdd,
  ListArea,
  BackButton,
  HeaderArea,
  InputHourInicio,
  InputHourEnd,
} from "./styles";

export default ({ route }) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [serviceValue, setServiceValue] = useState("");
  const [oterList, setOterList] = useState();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "violet",
      justifyContent: "center",
      alignItems: "center",
    },
  });

  /*const [service] = useState({
    name:route.params.name,
    preco:route.params.preco, 
  });*/

  const handleAddList = async () => {
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
        <TitleScreen>Agendamento </TitleScreen>
        <ScreenNameService>{route.params?.nome}</ScreenNameService>
      </HeaderArea>
      <ContainerAgenda>
        <InputAreaDuration>
          <InputDurationTitle>Duração : </InputDurationTitle>
          <InputDuration 
          keyboardType="numeric"
          placeholder="minutos"/>
        </InputAreaDuration>
        {loading && <LoadingIcon size="large" color="#FFFFFF" />}
        <InputAreaDate>
          <DateTitle>De: </DateTitle>
          <InputDateInicio
          keyboardType="numeric"
          placeholder="dd/mm/aa" />
          <DateTitle> até: </DateTitle>
          <InputDateEnd 
          keyboardType="numeric"
          placeholder="dd/mm/aa"/>
        </InputAreaDate>
        <InputAreaHour>
          <HourTitle>De: </HourTitle>
          <InputHourInicio
           type="date"
            keyboardType="numeric"
            placeholder="hh/mm"
            value={serviceValue}
            onChangeText={(t) => setServiceValue(t)}
          />
          <HourTitle> até: </HourTitle>
          <InputHourEnd 
          keyboardType="numeric"
          placeholder="hh/mm"/>
          <ButtonAdd onPress={handleAddList}>
            <ConfirmaIcon width="35" height="35" fill="#FFFFFF" />
          </ButtonAdd>
        </InputAreaHour>
        <ListArea>
          <FlatList
            keyExtractor={(item) => item.id}
            data={oterList}
            renderItem={({ item }) => (
              <ListButton onPress={() => defineCategory(item.id)}>
                <ListaText>{item.name}</ListaText>
              </ListButton>
            )}
          />
        </ListArea>
      </ContainerAgenda>
    </KeyboardAvoidingView>
  );
};
