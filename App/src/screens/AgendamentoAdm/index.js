import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import BackIcon from "../../assets/back.svg";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import Calendar from "../../assets/calendar1.svg";
import Hour from "../../assets/watch1.svg";
import Interrogation from "../../assets/question1.svg";
import { TextInputMask } from "react-native-masked-text";
import SendIcon from "../../assets/verificado.svg";
import DeleteIcon from "../../assets/delete.svg";
import ModalDelete from "../../components/ModalDelete";
import ModalHelp from "../../components/ModalHelp";

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
  InputAreaHour,
  HourTitle,
  ButtonAdd,
  ButtonDate,
  ListArea,
  BackButton,
  HeaderArea,
  ListaText1,
  ListaText2,
  ListButton,
  ListButtonDelete,
  ListButtonArea,
  LabelArea,
  LabelText1,
  LabelText2,
  LabelText3,
  InterrogationButton,
  ListaText3,
  ConfirmButton,
  ButtonText,
} from "./styles";

export default ({ route }) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [hour, setHour] = useState("");
  const [hourEnd, setHourEnd] = useState("");
  const [duractionField, setDuractionField] = useState("");
  const [modalAttributes, setModalAttributes] = useState({
    isModalVisible: false,
    cb: setModalAttributes,
  });
  const [modalHelpAttributes, setModalHelpAttributes] = useState({
    isModalVisible: false,
    cb: setModalAttributes,
  });

  const [agendaService, setAgendaService] = useState([
    {
      id: 1,
      duração: "1 h",
      data: "10/08/2021",
      datafim: "10/08/2021",
      hora: "09:00",
      horafim: "10:00",
    },
    {
      id: 2,
      duração: "1 h",
      data: "11/08/2021",
      datafim: "11/08/2021",
      hora: "10:00",
      horafim: "11:00",
    },
    {
      id: 3,
      duração: "1 h",
      data: "12/08/2021",
      datafim: "12/08/2021",
      hora: "11:00",
      horafim: "12:00",
    },
    {
      id: 4,
      duração: "1 h",
      data: "13/08/2021",
      datafim: "13/08/2021",
      hora: "12:00",
      horafim: "13:00",
    },
    {
      id: 5,
      duração: "1 h",
      data: "14/08/2021",
      datafim: "14/08/2021",
      hora: "13:00",
      horafim: "14:00",
    },
    {
      id: 6,
      duração: "1 h",
      data: "15/08/2021",
      datafim: "15/08/2021",
      hora: "14:00",
      horafim: "15:00",
    },
    {
      id: 7,
      duração: "1 h",
      data: "16/08/2021",
      datafim: "16/08/2021",
      hora: "15:00",
      horafim: "16:00",
    },
  ]);

  const [otherList, setOtherList] = useState(agendaService);

  const onChange = (event, selectedDate) => {
    setDate(selectedDate);
    let temDate = new Date(selectedDate);
    let fDate =
      temDate.getDate() +
      "/" +
      (temDate.getMonth() + 1) +
      "/" +
      temDate.getFullYear();
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "violet",
      justifyContent: "center",
      alignItems: "center",
    },
    dateStyle: {
      fontSize: 12,
      height: 30,
      width: 80,
      backgroundColor: "violet",
      borderRadius: 10,
      color: "white",
    },
    hourStyle: {
      fontSize: 12,
      height: 30,
      width: 50,
      backgroundColor: "violet",
      borderRadius: 10,
      color: "white",
    },
  });

  const handleAddList = async () => {
    let datainicio = date;
    let horainicio = hour;
    setLoading(true);
    otherList.filter((i) => i.data == datainicio && i.hora == horainicio)
      .length === 1
      ? alert("horario preenchido")
      : setAgendaService(
          otherList.push({
            duração: duractionField,
            data: date,
            datafim: dateEnd,
            hora: hourEnd,
            horafim: hourEnd,
            id: otherList.length + 1,
          })
        );
    setDuractionField("");
    setDate("");
    setDateEnd("");
    setHour("");
    setHourEnd("");
    setLoading(false);
    console.log(otherList);
  };

  const handleConfirm = ()=>{

  };
  const handleInterrogation =()=>{
    setModalHelpAttributes({'isModalVisible': true,'cb': setModalHelpAttributes})

  };

  const handleExcluirList = (id) => {
    setModalAttributes({'isModalVisible': true,'cb': setModalAttributes})
    for (let i = 0; i < otherList.length; i++) {
      if (otherList[i].id === id) {
        setAgendaService(otherList.splice(i, 1));
      }
    }
    console.log(otherList);
  };

  const handleBackButton = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      {loading && <LoadingIcon size="large" color="#FFFFFF" />}
      <ModalDelete controlObject={modalAttributes} />
      <ModalHelp controlObject={modalHelpAttributes}/>
      <HeaderArea>
        <BackButton onPress={handleBackButton}>
          <BackIcon width="35" height="35" fill="#FFFFFF" />
        </BackButton>
        <TitleScreen>Agendamento </TitleScreen>
        <ScreenNameService>{route.params?.nome}</ScreenNameService>
      </HeaderArea>
      <ContainerAgenda>
        <InputAreaDuration>
          <InputDurationTitle>Duração: </InputDurationTitle>
          <InputDuration
            placeholderTextColor="#b641a9"
            keyboardType="numeric"
            placeholder="MIN"
            value={duractionField}
            onChangeText={(t) => setDuractionField(t)}
          />
        </InputAreaDuration>
        <InputAreaDate>
          <DateTitle>De:</DateTitle>
          <ButtonDate>
            <Calendar width="24" height="15" fill="#FFFFFF" />
          </ButtonDate>
          <TextInputMask
            style={styles.dateStyle}
            type={"datetime"}
            options={{
              format: "DD/MM/YYYY",
            }}
            placeholder="DD/MM/YYYY"
            value={date}
            onChangeText={(t) => setDate(t)}
          />
          <DateTitle> até:</DateTitle>
          <ButtonDate>
            <Calendar width="24" height="15" fill="#FFFFFF" />
          </ButtonDate>
          <TextInputMask
            style={styles.dateStyle}
            type={"datetime"}
            options={{
              format: "DD/MM/YYYY",
            }}
            placeholder="DD/MM/YYYY"
            value={dateEnd}
            onChangeText={(t) => setDateEnd(t)}
          />
        </InputAreaDate>
        <InputAreaHour>
          <HourTitle>De:</HourTitle>
          <ButtonDate>
            <Hour width="24" height="15" fill="#FFFFFF" />
          </ButtonDate>
          <TextInputMask
            style={styles.hourStyle}
            type={"datetime"}
            options={{
              format: "hh:mm",
            }}
            placeholder="HH:MM"
            value={hour}
            onChangeText={(t) => setHour(t)}
          />
          <HourTitle> até:</HourTitle>
          <ButtonDate>
            <Hour width="24" height="15" fill="#FFFFFF" />
          </ButtonDate>
          <TextInputMask
            style={styles.hourStyle}
            type={"datetime"}
            options={{
              format: "99:99",
            }}
            placeholder="HH:MM"
            value={hourEnd}
            onChangeText={(t) => setHourEnd(t)}
          />
          <ButtonAdd onPress={handleAddList}>
            <ButtonText>Adicionar</ButtonText>
          </ButtonAdd>
        </InputAreaHour>
        <ListArea>
          <LabelArea>
            <LabelText1>Data</LabelText1>
            <LabelText2>Horario</LabelText2>
            <LabelText3>Duração</LabelText3>
            <InterrogationButton onPress={handleInterrogation}>
              <Interrogation width="35" height="35" fill="#FFFFFF" />
            </InterrogationButton>
          </LabelArea>
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={otherList}
            renderItem={({ item }) => (
              <ListButtonArea>
                <ListaText1>{item.data} </ListaText1>
                <ListaText2>{item.hora}</ListaText2>
                <ListaText3>{item.duração}</ListaText3>
                <ConfirmButton  onPress={() => handleConfirm}>
                  <SendIcon width="15" height="15" fill="#FFFFFF" />
                </ConfirmButton>
                <ListButtonDelete onPress={() => handleExcluirList(item.id)}>
                  <DeleteIcon width="15" height="15" fill="#FFFFFF" />
                </ListButtonDelete>
              </ListButtonArea>
            )}
          />
        </ListArea>
      </ContainerAgenda>
    </KeyboardAvoidingView>
  );
};
