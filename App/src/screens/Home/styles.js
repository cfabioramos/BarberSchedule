import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: violet;
  justify-content: center;
  align-items: center;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

export const HeaderArea = styled.View`
  justify-content: center;
  align-items: center;
`;



export const HeaderInputArea = styled.View`
  margin-top: 100px;
  background-color: #b641a9;
  height: 40px;
  border-radius: 30px;
  width: 310px;
  align-items:center;
  justify-content :center
`;

export const HeaderInput = styled.TextInput`
  flex: 1;
  font-size: 15px;
  color: #ffffff;
  
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;

export const ListArea = styled.SafeAreaView`
  background-color: #b641a9;
  height: 400px;
  width: 310px;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  padding :15px;
  border-radius:20px;
`;

 export const ListaText = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #ffffff; 
 `;
 export const ListButton = styled.TouchableOpacity`
  width: 250px;
  height:50px;
  background-color:violet;
  margin-top:20px;
  border-radius:10px;
  justify-content:center;
  align-items:center;
 `;

