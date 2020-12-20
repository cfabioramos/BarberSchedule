import React, { useState, useEffect } from "react";
import { RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";

import Api from "../../Api";

import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  LocationArea,
  LocationInput,
  LocationFinder,
  LoadingIcon,
  ListArea,
} from "./styles";

import BarberItem from "../../components/BarberItem";

import SearchIcon from "../../assets/search.svg";
import MyLocationIcon from "../../assets/my_location.svg";

export default () => {
  const navigation = useNavigation();

  const [locationText, setLocationText] = useState("");
  const [coords, setCoords] = useState(null);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const handleGeoLocationControl = async () => {
    setCoords(null);
    setLoading(true);
    setLocationText("");
    setList([]);

    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
      });

      setCoords(location.coords);

      let geoLocationData = await Api.findGeoLocation(
        location.coords.latitude,
        location.coords.longitude
      );
      console.log(geoLocationData);
      setLocationText(geoLocationData.address.city);
    })();
  };

  const getBarbers = async () => {
    setList([]);

    let lat = null;
    let lng = null;

    if (coords) {
      lat = coords.latitude;
      lng = coords.longitude;
    }

    if (locationText) {
      let res = await Api.getBarbers(lat, lng, locationText);
      if (res.error == "") {
        setList(res.data);
      } else {
        alert("Erro: " + res.error);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGeoLocationControl();
  }, []);

  useEffect(() => {
    getBarbers();
  }, [locationText]);

  const onRefresh = () => {
    setRefreshing(false);
    getCoords();
    getBarbers();
  };

  const handleLocationSearch = () => {
    setCoords({});
    getBarbers();
  };

  return (
    <Container>
      <Scroller
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <HeaderArea>
          <HeaderTitle numberOfLines={2}>
            Encontre o seu barbeiro favorito
          </HeaderTitle>
          <SearchButton onPress={() => navigation.navigate("Search")}>
            <SearchIcon width="26" height="26" fill="#FFFFFF" />
          </SearchButton>
        </HeaderArea>

        <LocationArea>
          <LocationInput
            placeholder="Onde você está?"
            placeholderTextColor="#FFFFFF"
            value={locationText}
            onChangeText={(t) => setLocationText(t)}
            onEndEditing={handleLocationSearch}
          />
          <LocationFinder onPress={handleGeoLocationControl}>
            <MyLocationIcon width="24" height="24" fill="#FFFFFF" />
          </LocationFinder>
        </LocationArea>

        {loading && <LoadingIcon size="large" color="#FFFFFF" />}

        <ListArea>
          {list.map((item, k) => (
            <BarberItem key={k} data={item} />
          ))}
        </ListArea>
      </Scroller>
    </Container>
  );
};
