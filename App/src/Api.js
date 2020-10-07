import AsyncStorage from "@react-native-community/async-storage";
import { add } from "react-native-reanimated";
import { JsonBarbers, JsonBarberId } from './Json'

const BASE_API = "http://localhost:3000";

export default {

  checkToken: async (token) => {
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
    const token = await AsyncStorage.getItem("token");

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
    const token = await AsyncStorage.getItem("token");

    console.log("LAT", lat);
    console.log("LNG", lng);
    console.log("ADDRESS", address);

    // const req = await fetch(`${BASE_API}/barbers?token=${token}&lat=${lat}&lng=${lng}&address=${address}`);
    // const json = await req.json();
    // console.log(json);
    return JsonBarbers;
  },

  getBarber: async (id) => {
    const token = await AsyncStorage.getItem("token");
    // const req = await fetch(`${BASE_API}/barbers/${id}?token=${token}`);
    // const json = await req.json();
    // console.log(json);
    return JsonBarberId;
  },
  
  setFavoriteBarber: async (barberId) => {
    /*const token = await AsyncStorage.getItem("token");
    const req = await fetch(`${BASE_API}/barbers/${id}/favorite?token=${token}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    });
    return req;*/
    return {error: ''}
  }
};
