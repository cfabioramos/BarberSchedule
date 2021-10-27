import AsyncStorage from "@react-native-community/async-storage";
import { Appointments, Users } from "./Json";
import AppTypedError from "./util/AppTypedError";
import { TOKEN_KEY } from "./util/Commons";


const BASE_API =
  "http://ec2-18-191-181-158.us-east-2.compute.amazonaws.com:8080/";
  
const getRequestBody = (method, object) => {
  return {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  };
};

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
    const response = await fetch(`${BASE_API}auth/refresh`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: token,
    });

    if (response && response.ok) {
      let json = await response.json();
      return json;
    } else {
      console.log("HTTP-Error: " + response.status);
      //alert(await response.text());
      return null;
    }
  },

  signIn: async (email, password) => {
    const url = `${BASE_API}auth/login`;
    const body = getRequestBody("POST", { email, password });
    let response = await fetch(url, body);
    if (response && response.ok) {
      let json = await response.json();
      return json;
    } else {
      console.log("HTTP-Error: " + response.status);
      alert(await response.text());
      return null;
    }
  },

  logout: async () => {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    /*const req = await fetch(`${BASE_API}auth/logout`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "barber-token": `${token}`,
      },
    });
    const json = await req.json();
    return json;*/
    return null;
  },

  findGeoLocation: async (lat, lng) => {
    const uri = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;
    const req = await fetch(uri);
    const json = await req.json();
    return json;
  },

  findAddressByCep: async (cep) => {
    const uri = `https://viacep.com.br/ws/${cep}/json`;
    const req = await fetch(uri);
    const json = await req.json();
    return json;
  },

  getBarbers: async (address) => {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    const uri = `${BASE_API}users?cep=${address.cep}&latitude=${address.latitude}&longitude=${address.longitude}&street=${address.street}&city=${address.city}`;
    const response = await fetch(uri, {
      method: "GET",
      headers: {
        "barber-token": `${token}`,
      },
    });
    if (response && response.ok) {
      let json = await response.json();
      return json;
    } else {
      throw new AppTypedError(await response.text());
    }
  },

  getFavoriteBarbers: async (idUser,address) => {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    const params = address && address.latitude ? `?latitude=${address.latitude}&longitude=${address.longitude}` : "";
    const uri = `${BASE_API}users/${idUser}/favorites${params}`;
    const response = await fetch(uri, {
      method: "GET",
      headers: {
        "barber-token": `${token}`,
      },
    });
    if (response && response.ok) {
      let json = await response.json();
      return json;
    } else {
      throw new AppTypedError(await response.text());
    }
  },

  getBarber: async (idEnterprise) => {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    const uri = `${BASE_API}users/enterprises/${idEnterprise}`;
    const req = await fetch(uri, {
      method: "GET",
      headers: {
        "barber-token": `${token}`,
      },
    });
    const json = await req.json();
    return json;
  },

  setFavoriteBarber: async (idUser, idEnterprise) => {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    const req = await fetch(
      `${BASE_API}/users/${idUser}/favorites/${idEnterprise}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "barber-token": `${token}`,
        },
      }
    );
    const json = await req.json();
    return json;
  },

  deleteFavoriteBarber: async (idUser, idEnterprise) => {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    const response = await fetch(
      `${BASE_API}/users/${idUser}/favorites/${idEnterprise}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "barber-token": `${token}`,
        },
      }
    );
    if (response && !response.ok) {
      throw new AppTypedError(await response.text());
    }
  },

  createAppointment: async (
    barberId,
    service,
    selectedYear,
    selectedMonth,
    selectedDay,
    selectedHour
  ) => {
    /*const token = await AsyncStorage.getItem(TOKEN_KEY);
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
    /* const token = await AsyncStorage.getItem(TOKEN_KEY);
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

  submitMultipartWithFormData: async (entity, methodName, formData) => {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    const uri = `${BASE_API}${entity}`;
    let varHeaders = {
      "content-type": "multipart/form-data",
    };
    if (token) {
      varHeaders["barber-token"] = `${token}`;
    }

    const response = await fetch(uri, {
      method: methodName,
      body: formData,
      headers: varHeaders,
    });
    if (response && response.ok) {
      let json = await response.json();
      return json;
    } else {
      throw new AppTypedError(await response.text());
    }
  },
};
