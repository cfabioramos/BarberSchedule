import React, { useState, useEffect } from "react";
import Api from "../../Api";

import {
  Container,
  Scroller,
  AppointmentInfoArea,
  AppointmentInfoItem,
  AppointmentUserData,
  UserAvatar,
  UserName,
  AppointmentServiceData,
  ServiceName,
  ServicePrice,
  AppointmentServiceSchedule,
  ScheduleDateButton,
  ScheduleButtonText,
  ScheduleTimeButton,
  LoadingIcon,
} from "./styles";

export default () => {
  const [loading, setLoading] = useState(false);
  const [appointments, setAppointments] = useState();

  useEffect(() => {
    const getAppointments = async () => {
      setLoading(true);

      const json = await Api.findAppointments();
      if (json.error === "") {
        setAppointments(json);
      } else {
        alert("Erro: " + json.error);
      }

      setLoading(false);
    };
    getAppointments();
  }, []);

  return (
    <Container>
      <Scroller>
        <AppointmentInfoArea>
          {appointments &&
            appointments.data.map((appointment, key) => (
              <AppointmentInfoItem key={key}>
                <AppointmentUserData>
                  <UserAvatar source={{ uri: appointment.avatar }} />
                  <UserName>{appointment.name}</UserName>
                </AppointmentUserData>
                <AppointmentServiceData>
                  <ServiceName>{appointment.serviceName}</ServiceName>
                  <ServicePrice>
                    R$ {appointment.servicePrice.toFixed(2)}
                  </ServicePrice>
                </AppointmentServiceData>
                <AppointmentServiceSchedule>
                  <ScheduleDateButton>
                    <ScheduleButtonText>
                      {appointment.scheduleDate}
                    </ScheduleButtonText>
                  </ScheduleDateButton>
                  <ScheduleTimeButton>
                    <ScheduleButtonText>
                      {appointment.scheduleTime}
                    </ScheduleButtonText>
                  </ScheduleTimeButton>
                </AppointmentServiceSchedule>
              </AppointmentInfoItem>
            ))}
        </AppointmentInfoArea>
      </Scroller>
    </Container>
  );
};
