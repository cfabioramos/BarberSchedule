import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: violet;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  margin-top: 40px;
`;

export const AppointmentInfoArea = styled.View`
  flex-direction: column;
`;

export const AppointmentInfoItem = styled.View`
  flex-direction: column;
  background-color: ${props => props.color || "#efc8ef"};
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 15px;
`;

export const AppointmentUserData = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const UserAvatar = styled.Image`
  width: 65px;
  height: 65px;
  border-radius: 30px;
  border-width: 4px;
  border-color: #ffffff;
  margin-right: 10px;
`;

export const UserName = styled.Text`
  color: #000000;
  font-size: 18px;
  font-weight: bold;
`;

export const AppointmentServiceData = styled.View`
  margin-top: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ServiceName = styled.Text`
  color: #000000;
  font-size: 16px;
  font-weight: bold;
`;

export const ServicePrice = styled.Text`
  color: #000000;
  font-size: 16px;
  font-weight: bold;
`;

export const AppointmentServiceSchedule = styled.View`
  flex-direction: row;
  margin-top: 15px;
  justify-content: space-between;
  align-items: center;
`;

export const ScheduleDateButton = styled.View`
  border-radius: 10px;
  width: 110px;
  height: 40px;
  background-color: #b641a9;
  justify-content: center;
  align-items: center;
`;

export const ScheduleTimeButton = styled.View`
  border-radius: 10px;
  width: 60px;
  height: 40px;
  background-color: #b641a9;
  justify-content: center;
  align-items: center;
`;

export const ScheduleButtonText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;
