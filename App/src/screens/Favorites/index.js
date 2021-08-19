import React, { useState, useEffect } from "react";
import { RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import Api from "../../Api";
import BackIcon from "../../assets/back.svg";
import BarberItem from "../../components/BarberItem";
import ModalErro from "../../components/ModalErro";

import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  LoadingIcon,
  ListArea,
  BackButton,
} from "./styles";


export default () => {
  const navigation = useNavigation();
  const [watching, setWatching] = useState("");
  const [addressSearchObject, setAddressSearchObject] = useState({});
  const [modalAttributes, setModalAttributes] = useState({
    isModalVisible: false,
    errorMessage: "",
    cb: setModalAttributes,
  });
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getFavoriteBarbers = async () => {
    setLoading(true);
    setList([]);
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
      });

      let geoLocationData = await Api.findGeoLocation(
        location.coords.latitude,
        location.coords.longitude
      );
      setAddressSearchObject({
        ...addressSearchObject,
        ...{
          latitude: geoLocationData.lat,
          longitude: geoLocationData.lon,
          city: geoLocationData.address.city,
        },
      });
      setWatching(geoLocationData.address.city);
    })();
    if (addressSearchObject && addressSearchObject.latitude) {
      try {
        let res = await Api.getFavoriteBarbers(addressSearchObject);
        console.log(res);
        setList(res);
      } catch (error) {
        setLoading(false);
        setModalAttributes({
          isModalVisible: true,
          errorMessage: error.message,
          cb: setModalAttributes,
        });
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    getFavoriteBarbers();
  }, [watching]);

  const handleBackButton = () => {
    navigation.goBack();
  };

  const onRefresh = () => {
    setRefreshing(false);
    getFavoriteBarbers();
  };

  return (
    <Container>
      <ModalErro controlObject={modalAttributes} />
      <Scroller
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <HeaderArea>
          <BackButton onPress={handleBackButton}>
            <BackIcon width="35" height="35" fill="#FFFFFF" />
          </BackButton>
          <HeaderTitle>Favoritos</HeaderTitle>
        </HeaderArea>

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
