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
  const [addressSearchObject, setAddressSearchObject] = useState({});
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const handleGeoLocationControl = async () => {
    setAddressSearchObject({})
    setLoading(true);
    setLocationText("");
    setList([]);

    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
      });

      let geoLocationData = await Api.findGeoLocation(
        location.coords.latitude,
        location.coords.longitude
      );
      setAddressSearchObject({...addressSearchObject, ...{cep: geoLocationData.address.postcode,
        street: geoLocationData.address.road, city: geoLocationData.address.city}})
      setLocationText(geoLocationData.address.city);
    })();
  };

  const getBarbers = async () => {
    setList([]);

    if (locationText) {
      let res = await Api.getBarbers(addressSearchObject);
      if (res.error == "") {
        setList(res.data);
      } else {
        alert("Verifique a sua conexão. Ou aguarde algum momento para atualizar. ");
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
    getBarbers();
  };

  /*const handleLocationSearch = () => {
    getBarbers();
  };*/

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
          {
            /*
              onEndEditing={handleLocationSearch}
              tem que ser melhor pensado.
            */
          }
          <LocationInput
            placeholder="Onde você está?"
            placeholderTextColor="#FFFFFF"
            value={locationText}
            onChangeText={(t) => setLocationText(t)}            
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
