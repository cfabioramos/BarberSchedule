import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top:-200px;
`;

export const HeaderArea = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top:-250px;
`;

export const TitleScreen = styled.Text`
font-size: 35px;
font-weight: bold;
margin-left: -20px
color: #fff;
justify-content: center;
align-items: center;
margin-top:-5px;
`;
export const BackButton = styled.TouchableOpacity`
  margin-right: 345px;
  margin-top: 50px;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;

export const InputAreaService = styled.View`
  flex: 1;
  margin-top:20px;
 
  
`;

export const InputService = styled.TextInput`
  font-size: 16px;
  padding-left: 60px;
  height: 40px;
  width: 270px;
  background-color: #b641a9;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
export const InputAreaValue = styled.View`
  flex: 1;
  flex-direction: row;
  margin-top:-332px;
`;

export const InputValue = styled.TextInput`
  font-size: 16px;
  color: #ffffff;
  padding-left: 40px;
  height: 40px;
  width: 110px;
  background-color: #b641a9;
  border-radius: 10px;
  margin-top:10px;

`;
export const ButtonAdd = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  margin-left: 230px;
  background-color: #b641a9;
  border-radius: 10px;
  margin-top: -40px;
`;

export const ListArea = styled.SafeAreaView`
  flex: 1;
  background-color: #b641a9;
  height: 300px;
  width: 330px;
  align-items: flex-start;
  margin-bottom: 10px;
  border-radius: 20px; 
  margin-top:-250px; 
`;
export const ListaText1 = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
`;
export const ListaText2 = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  
`;
export const ListButtonArea = styled.View`
  flex-direction: row;
  height: 50px;
  width: 310px;
  margin-top: 10px;
  margin-left: 10px
  border-radius: 10px;
  border-width: 2px;
  border-color: violet;
  align-items: center;

  
`;
export const ListButton = styled.TouchableOpacity`
  justify-content: center;
  height: 50px;
  width: 150px;
  margin-left:15px
  
`;
export const ListButtonDelete = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-left:110px;
`;
