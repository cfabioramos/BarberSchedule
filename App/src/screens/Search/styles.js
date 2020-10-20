import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #63c2d1;
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
  background-color: #4eadbe;
  height: 45px;
  border-radius: 30px;
`;

export const HeaderInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #ffffff;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;

export const ListArea = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
`;
