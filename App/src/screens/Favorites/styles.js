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
  margin-top:20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  padding-right: 20px;
`;

export const HeaderTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 100px;
`;

export const ListArea = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
`;

  