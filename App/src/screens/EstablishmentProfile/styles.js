import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: violet;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const InputArea = styled.View`
  width: 100%;
  padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
  height: 60px;
  background-color: #8b4488;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const CustomButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const ImageArea = styled.View`
  margin-bottom: 10px;
  justify-content: space-around;
  width: 100%;
  border-radius: 30px;
  flex-direction: row;
`;
