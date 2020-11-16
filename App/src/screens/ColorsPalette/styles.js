import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

export const ColorsSet = styled.ScrollView`
  flex-direction: column;
  flex: 1;
  padding: 30px;
`;

export const ColorsList = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ColorPoint = styled.View`
  border: 1px solid #ffffff;
  border-radius: 10px;
  width: 30px;
  height: 30px;
  background-color: ${props => props.color || "palevioletred"};
`;
