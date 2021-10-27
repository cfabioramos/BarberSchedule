import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: -200px;
`;
export const Scroller = styled.ScrollView``;

export const HeaderArea = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: -100px;
`;

export const TitleScreen = styled.Text`
font-size: 35px;
font-weight: bold;
margin-left: -20px
color: #fff;
justify-content: center;
align-items: center;
margin-top:50px;
`;
export const BackButton = styled.TouchableOpacity`
  margin-right: 345px;
  margin-top: -70px;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;

export const InputAreaService = styled.View`
  flex: 1;
  margin-top: 20px;
`;

export const InputService = styled.TextInput`
  font-size: 16px;
  padding-left: 80px;
  color: #ffffff;
  height: 35px;
  width: 290px;
  background-color: #b641a9;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
export const InputAreaValue = styled.View`
  flex: 1;
  flex-direction: row;
  margin-top: -332px;
`;

export const InputValue = styled.TextInput`
  font-size: 16px;
  color: #ffffff;
  padding-left: 40px;
  height: 35px;
  width: 110px;
  background-color: #b641a9;
  border-radius: 10px;
  margin-top: 10px;
`;
export const ButtonAdd = styled.TouchableOpacity`
  height: 35px;
  width: 85px;
  margin-left: 205px;
  background-color: #8b4488;
  border-radius: 30px;
  margin-top: -30px;
  justify-content: center;
  align-items: center;
`;

export const ListArea = styled.SafeAreaView`
  flex: 1;
  background-color: #b641a9;
  height: 300px;
  margin-top: -169px;
  width: 300px;
  margin-bottom: 10px;
  border-radius: 20px;
  padding-bottom: 20px;
`;
export const ListaText1 = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  margin-right: 60px;
`;
export const ListaText2 = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  margin-right: -30px;
`;
export const ListButtonArea = styled.View`
  flex-direction: row;
  margin-top: -15px;
  height: 50px;
  width: 280px;
  margin-left: 20px;
  border-radius: 10px;
  border-width: 2px;
  border-color: violet;
  align-items: center;
`;
export const ListButton = styled.TouchableOpacity`
  flex-direction: row;
  height: 50px;
  width: 150px;
  align-items: center;
  justify-content: flex-end;
`;
export const ListButtonDelete = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-left: 90px;
`;
export const LabelArea = styled.View`
  flex-direction: row;
  width: 280px;
  justify-content: space-around;
  margin-top: 10px;
  padding: 5px;
`;
export const LabelText1 = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  margin-left: 20px;
`;
export const LabelText2 = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  margin-right: 45px;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  font-size: 12px;
`;
