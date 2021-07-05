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
  AvaliacaoButton,
  DistanceButton,
  ButtonText,
  ButtonArea,
  FiltroLabel,
  NameArea,
  NameInput,
} from "./styles";

import BarberItem from "../../components/BarberItem";

import SearchIcon from "../../assets/search.svg";
import MyLocationIcon from "../../assets/my_location.svg";
import SetaIcon from "../../assets/expand.svg";

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
      setAddressSearchObject({
        ...addressSearchObject, ...{
          cep: geoLocationData.address.postcode,
          street: geoLocationData.address.road, city: geoLocationData.address.city
        }
      })
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

  
  
  const [searchText,setSearchText]=useState();

  useEffect(()=>{
   let OterList = [...list];
   if (searchText === '') {
      getBarbers();
  } else {
    setList(
      OterList.filter(
        (item) =>
          item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
      )
    );
  }
}, [searchText]);

  const handleOrdering = async () => {
    let newList = [...list]
    setList([]);

    setList(newList.sort((a, b) => (b.stars < a.stars) ? -1 : (b.stars > a.stars) ? 1 : 0))

  };

  const handleDistance= async () => {
    let newList = [...list]
    setList([]);

    setList(newList.sort((a, b) => (a.id < b.id) ? -1 : (a.id > b.id) ? 1 : 0))

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
            Encontre o melhor salão
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

        <NameArea>
          <NameInput
            placeholder="Pesquise por nome...."
            placeholderTextColor="#FFFFFF"
            value={searchText}
            onChangeText={(t)=>setSearchText(t)}
          />
        </NameArea>


        <ButtonArea>
          <FiltroLabel>Ordenar por:</FiltroLabel>
          <DistanceButton onPress={handleDistance}>
            <ButtonText>Distância</ButtonText>
            <SetaIcon width="17" height="17" fill="#FFFFFF" />
          </DistanceButton>
          <AvaliacaoButton onPress={handleOrdering}>
            <ButtonText >Avaliação</ButtonText>
            <SetaIcon width="17" height="17" fill="#FFFFFF" />
          </AvaliacaoButton>
        </ButtonArea>


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
