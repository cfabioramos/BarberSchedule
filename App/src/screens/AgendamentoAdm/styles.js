import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: violet;
  justify-content: center;
  align-items: center;
`;
export const Scroller = styled.ScrollView``;
export const HeaderArea = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: -190px;
`;

export const TitleScreen = styled.Text`
font-size: 25px;
font-weight: bold;
color: #fff;
margin-top: -10px;
`;
export const ScreenNameService = styled.Text`
font-size: 20px;
font-weight: bold;
color: #fff;
`;

export const BackButton = styled.TouchableOpacity`
margin-right: 350px;
margin-top: -25px;
`;

export const LoadingIcon = styled.ActivityIndicator`
margin-top: 50px;
`;
export const ContainerAgenda = styled.View`
flex: 1;
margin-top: -200px;
width: 350px;
  height: 590px;
  justify-content: center;
  align-items: center;
  background-color: #b641a9;
  border-radius: 20px;
  margin-bottom: 10px;
  `;
  
  export const InputAreaDuration = styled.View`
  flex: 1;
  margin-top: -95px;
  margin-right: 175px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  `;
  export const InputDuration = styled.TextInput`
  font-size: 14px;
  padding-left:12px
  color: #ffffff;
  height: 30px;
  width: 55px;
  background-color: violet;
  border-radius: 10px;
  `;
  
  export const InputDurationTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  `;
  
  export const InputAreaDate = styled.View`
  flex: 1;
  margin-top: -230px;
  flex-direction: row;
  align-items: center;
  margin-right: 25px;
  `;
  export const DateTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  `;
  export const ButtonDate = styled.TouchableOpacity`
  height: 25px;
  width: 25px;
  
  justify-content: center;
  align-items: center;
  `;
  
  export const InputDateInicio = styled.TextInput`
  font-size: 12px;
  height: 30px;
  width: 85px;
  background-color: violet;
  border-radius: 10px;
  padding-left: 7px;
  `;
  export const InputDateEnd = styled.TextInput`
  font-size: 12px;
  padding-left:7px
  height: 30px;
  width: 85px;
  background-color: violet;
  border-radius: 10px;
  `;
  export const InputAreaHour = styled.View`
  flex: 1;
  margin-top: -230px;
  flex-direction: row;
  align-items: center;
  margin-right: 25px;
  `;
  export const HourTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  `;
  export const InputHourInicio = styled.TextInput`
  font-size: 12px;
  padding-left:7px
  color: #ffffff;
  height: 30px;
  width: 55px;
  background-color: violet;
  border-radius: 10px;
  `;
  export const InputHourEnd = styled.TextInput`
  font-size: 12px;
  padding-left:7px
  color: #ffffff;
  height: 30px;
  width: 55px;
  background-color: violet;
  border-radius: 10px;
  `;
  export const ButtonAdd = styled.TouchableOpacity`
  height: 30px;
  width: 35px;
  margin-left: 25px;
  background-color: violet;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  `;
  
  export const ListArea = styled.View`
  flex: 1;
  background-color: violet;
  height: 600px;
  width: 300px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-top: -95px;
  border-radius: 10px;
  `;
  export const LabelArea = styled.View`
  flex-direction: row;
  width:280px;
  padding:5px;
  justify-content: space-between;
  `;
  export const LabelText1 = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    margin-left:10px;
    
  `;
  export const LabelText2 = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    margin-left:30px;
    
  `;
  export const LabelText3 = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    margin-right:-10px;
    
  `;
  export const InterrogationButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-right: -10px;

  `;
  export const ListaText = styled.Text`
  font-size: 21px;
  font-weight: bold;
  color: #ffffff;
`;

export const ListButton =styled.View`
flex-direction: row;
`;

export const ListaText1 = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  
  
  
`;
export const ListaText2 = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  margin-right:20px;  
  
`;
export const ListaText3 = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  margin-right:120px;
  
  
`;

export const ListButtonArea = styled.View`
  flex-direction: row;
  margin-top:5px;
  height: 70px;
  width: 290px;
  border-radius: 10px;
  border-width: 2px;
  border-color: #b641a9;
  align-items: center;
  justify-content: space-around;  
  
`;

export const ListButtonDelete = styled.TouchableOpacity`
  margin-left: -50px;
  margin-top: 30px;
`;
export const ConfirmButton = styled.TouchableOpacity`
  margin-left: -100px;
  margin-bottom: 30px;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;