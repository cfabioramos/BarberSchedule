import AsyncStorage from "@react-native-community/async-storage";
import { JsonBarbers, JsonBarberId, Appointments, Users } from "./Json";

const BASE_API = "http://localhost:3000";

export default {
  findUser: async (userName, password) => {
    /* const token = await AsyncStorage.getItem("cfbarber_token");
    const req = await fetch(`${BASE_API}/appointments?token=${token}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    const json = await req.json()
    return json */
    const users = Users.data;

    const user = users.filter(
      (e) => e.userName == userName && e.password == password
    );

    if (user.length) return user[0];

    return null;
  },

  checkToken: async (token) => {
    /*
      const req = await fetch(`${BASE_API}/auth/refresh`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
      const json = await req.json();
      console.log(json);
      return json;
    */

    const users = Users.data;

    const user = users.filter((e) => e.token == "establishment_" + token);

    if (user.length) return user[0];

    return null;
  },

  signIn: async (email, password) => {
    const req = await fetch(`${BASE_API}/auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const json = await req.json();
    console.log(json);
    return json;
  },

  logout: async () => {
    const token = await AsyncStorage.getItem("cfbarber_token");

    const req = await fetch(`${BASE_API}/auth/logout`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });
    const json = await req.json();
    return json;
  },

  signUp: async (name, email, password) => {
    const req = await fetch(`${BASE_API}/user`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await req.json();
    console.log(json);
    return json;
  },

  getBarbers: async (lat = null, lng = null, address = null) => {
    const token = await AsyncStorage.getItem("cfbarber_token");
    // const req = await fetch(`${BASE_API}/barbers?token=${token}&lat=${lat}&lng=${lng}&address=${address}`);
    // const json = await req.json();
    // console.log(json);
    return JsonBarbers;
  },

  getBarber: async (id) => {
    const token = await AsyncStorage.getItem("cfbarber_token");
    // const req = await fetch(`${BASE_API}/barbers/${id}?token=${token}`);
    // const json = await req.json();
    // console.log(json);
    return JsonBarberId;
  },

  setFavoriteBarber: async (barberId) => {
    /*const token = await AsyncStorage.getItem("cfbarber_token");
    const req = await fetch(`${BASE_API}/barbers/${id}/favorite?token=${token}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    });
    return req;*/
    return { error: "" };
  },

  createAppointment: async (
    barberId,
    service,
    selectedYear,
    selectedMonth,
    selectedDay,
    selectedHour
  ) => {
    /*const token = await AsyncStorage.getItem("cfbarber_token");
    const req = await fetch(`${BASE_API}/barbers/${barberId}/appointments`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
      body: JSON.stringify(
        {
          token, service, 
          year: selectedYear, 
          month: selectedMonth, 
          day: selectedDay, 
          hour: selectedHour})
        });
    const json = await req.json()
    return json*/
    return { error: "" };
  },

  findAppointments: async () => {
    /* const token = await AsyncStorage.getItem("cfbarber_token");
    const req = await fetch(`${BASE_API}/appointments?token=${token}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    const json = await req.json()
    return json */
    return Appointments;
  },

  updateEstablishmentData: async (formData) => {
    const token = await AsyncStorage.getItem("cfbarber_token");
    fetch(`${BASE_API}/establishment?token=${token}`, {
      method: "PUT",
      body: formData,
    })
      .then((response) => response.json())
      .then((response) => {
        // console.log("upload succes", response);
        alert("Dados atualizados com sucesso");
        this.setState({ photo: null });
      })
      .catch((error) => {
        console.log("Erro ", error);
        alert("Erro na atualização");
      });
  },
};
