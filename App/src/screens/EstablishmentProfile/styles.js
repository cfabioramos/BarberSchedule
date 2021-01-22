import React from "react";
import styled from "styled-components/native";
import { DEFAULT_COLLOR_PALLET } from '../ColorsPalette'

export const Container = styled.SafeAreaView`
  background-color: ${DEFAULT_COLLOR_PALLET[2]};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const InputArea = styled.View`
  width: 100%;
  padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
  height: 45px;
  background-color: #8b4488;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const CustomButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const InputHorizontalArea = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const LocalFavButton = styled.TouchableOpacity`
    width: 50px;
    height: 40px;
    background-color: ${DEFAULT_COLLOR_PALLET[3]};
    border: 2px solid ${DEFAULT_COLLOR_PALLET[4]};
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
`;

export const ImageArea = styled.View`
  margin-bottom: 10px;
  justify-content: space-around;
  width: 100%;
  border-radius: 30px;
  flex-direction: row;
`;
