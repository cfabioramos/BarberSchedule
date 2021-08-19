import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import Stars from "../components/Stars";

const Area = styled.TouchableOpacity`
  background-color: ${(props) => props.color || "#efc8ef"};
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 15px;
  flex-direction: row;
`;

const Avatar = styled.Image`
  width: 88px;
  height: 88px;
  border-radius: 20px;
`;

const InfoArea = styled.View`
  margin-left: 20px;
  justify-content: space-between;

`;

const UserName = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;

const SeeProfileButton = styled.View`
  width: 85px;
  height: 26px;
  border: 1px solid #b641a9;
  border-radius: 10px;
  justify-content: center;
  margin-top: 20px
  align-items: center;
`;

const SeeProfileButtonText = styled.Text`
  font-size: 13px;
  color: #8b4488;
`;
const ShowDistance = styled.Text`
  font-size: 13px;
  font-weight: bold;
`;

export default ({ data }) => {
  const navigation = useNavigation();
  let distancia = data.distance;

  /*if (data.distance < 1) {
    distancia = parseInt(data.distance);
  } */
  

  const handleClick = () => {
    navigation.navigate("BarberDetail", {
      id: data.id,
      avatar: data.avatar,
      name: data.name,
      stars: data.stars,
      distance: data.distance,
    });
  };

  return (
    <Area onPress={handleClick}>
      <Avatar source={{ uri: data.avatar }} />
      <InfoArea>
        <UserName>{data.name}</UserName>
        <Stars stars={data.stars} showNumber={true} />
        <ShowDistance>{Math.round(distancia * 100) / 100} km</ShowDistance>
        <SeeProfileButton>
          <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
        </SeeProfileButton>
      </InfoArea>
    </Area>
  );
};
