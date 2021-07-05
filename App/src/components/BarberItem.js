import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import Stars from "../components/Stars";

const Area = styled.TouchableOpacity`
  background-color: ${props => props.color || "#efc8ef"};
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
  align-items: center;
`;

const SeeProfileButtonText = styled.Text`
  font-size: 13px;
  color: #8b4488;
`;
const ShowDistance =styled.Text`
    font-size: 13px;
    font-weight: bold; 
`;

export default ({ data }) => {

  const navigation = useNavigation();

  if(data.id==9){
     distancia="9-km";
  }else if(data.id==10){
     distancia="10-km";
  }else if(data.id==7){
      distancia="7-km";
  }else {
    distancia="11-km";
  }
  
  const handleClick = () => {
    navigation.navigate('BarberDetail', {
      id: data.id,
      avatar: data.avatar,
      name: data.name,
      stars: data.stars, 
      
    })   
  }
  

  return (
    <Area onPress={handleClick}>
      <Avatar source={{ uri: data.avatar }} />
      <InfoArea>
        <UserName>{data.name}</UserName>
        <Stars stars={data.stars} showNumber={true} />
        <ShowDistance>Distância :{distancia}</ShowDistance>
        <SeeProfileButton>
          <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
        </SeeProfileButton>
      </InfoArea>
    </Area>
  );
};
