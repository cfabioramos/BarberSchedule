import React, { useState, useEffect,useContext } from "react";
import { RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import Api from "../../Api";
import BackIcon from "../../assets/back.svg";
import BarberItem from "../../components/BarberItem";
import ModalErro from "../../components/ModalErro";
import { UserContext } from "../../contexts/UserContext";

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
  const [addressSearchObject, setAddressSearchObject] = useState({});
  const [modalAttributes, setModalAttributes] = useState({
    isModalVisible: false,
    errorMessage: "",
    cb: setModalAttributes,
  });
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const { state: user } = useContext(UserContext);

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
      setAddressSearchObject({
        ...addressSearchObject,
        ...{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        },
      });
    })();
    try {
      let res = await Api.getFavoriteBarbers(user.id, addressSearchObject);
      setList(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setModalAttributes({
        isModalVisible: true,
        errorMessage: error.message,
        cb: setModalAttributes,
      });
    }
  };

  useEffect(() => {
    getFavoriteBarbers();
  }, [addressSearchObject]);

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
