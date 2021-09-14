import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: violet;
  justify-content: center;
  align-items: center;

`;
export const Scroller = styled.ScrollView`
`;
export const HeaderArea = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top:-190px;
`;

export const TitleScreen = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #fff;
  margin-top:-10px;
`;
export const ScreenNameService  = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  
`;

export const BackButton = styled.TouchableOpacity`
  margin-right: 350px;
  margin-top:-25px;
  
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;
export const ContainerAgenda = styled.View`
  flex: 1;
  margin-top:-200px;
  width: 350px;
  height: 590px;
  justify-content: center;
  align-items: center;
  background-color: #b641a9;
  border-radius: 20px;
  margin-bottom:10px;
`;

export const InputAreaDuration = styled.View`
  flex: 1;
  margin-top:-95px;
  margin-right: 40px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const InputDuration = styled.TextInput`
  font-size: 15px;
  color: #ffffff;
  height: 40px;
  width: 90px;
  background-color: violet;
  border-radius: 10px;
`;

export const InputDurationTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const InputAreaDate = styled.View`
  flex: 1;
  margin-top:-200px;
  flex-direction: row;
  align-items: center;
`;
export const DateTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const InputDateInicio = styled.TextInput`
  font-size: 15px;
  height: 40px;
  width: 100px;
  background-color: violet;
  border-radius: 10px;
`;
export const InputDateEnd = styled.TextInput`
  font-size: 15px;
  height: 40px;
  width: 100px;
  background-color: violet;
  border-radius: 10px;
`;
export const InputAreaHour = styled.View`
  flex: 1;
  margin-top:-200px;
  flex-direction: row;
  align-items: center;
`;
export const HourTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
export const InputHourInicio = styled.TextInput`
  font-size: 15px;
  color: #ffffff;
  height: 40px;
  width: 70px;
  background-color: violet;
  border-radius: 10px;
`;
export const InputHourEnd = styled.TextInput`
  font-size: 15px;
  color: #ffffff;
  height: 40px;
  width: 70px;
  background-color: violet;
  border-radius: 10px;
`;
export const ButtonAdd = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  margin-left: 20px;
  background-color: violet;
  border-radius: 10px;
`;

export const ListArea = styled.SafeAreaView`
  flex: 1;
  background-color: violet;
  height: 600px;
  width: 300px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-top: -95px;
  border-radius: 20px;
`;
export const ListaText = styled.Text`
  font-size: 21px;
  font-weight: bold;
  color: #ffffff;
`;
export const ListButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: violet;
  border-radius: 10px;
`;
