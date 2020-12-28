import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: violet;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ImageArea = styled.View`
  margin-top: 30px;
  margin-bottom: -10px;
  justify-content: space-around;
  width: 100%;
  border-radius: 30px;
  flex-direction: row;
`;

export const InputArea = styled.View`
    width: 100%;
    padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 50px;
    background-color: #8b4488;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;

export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #FFF;
`;

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
`;

export const SignMessageButtonText = styled.Text`
    font-size: 16px;
    color: #8b4488;
`;

export const SignMessageButtonTextBold = styled.Text`
    font-size: 16px;
    color: #8b4488;
    font-weight: bold;
    margin-left: 5px;
`;
