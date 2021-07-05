import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: violet;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

export const HeaderArea = styled.View`
  margin-left: -10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  padding-right: 20px;
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

export const ListArea = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
`;
