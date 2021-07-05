import React, { useState, useEffect } from "react";
import { RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Api from "../../Api";

import BackIcon from "../../assets/back.svg";

import {
  Container,
  Scroller,
  HeaderArea,
  HeaderInputArea,
  HeaderInput,
  LoadingIcon,
  ListArea,
  BackButton,
} from "./styles";

import BarberItem from "../../components/BarberItem";

export default () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [barberName, setBarberName] = useState();

  /*const getFavoriteBarbers = async () => {
    setLoading(true);
    setList([]);

    let res = await Api.getBarbers();
    if (res.error == "") {
      setList(res.data);
    } else {
      alert("Erro: " + res.error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getFavoriteBarbers();
  }, []);

  const handleBackButton = () => {
    navigation.goBack();
  };

  const onRefresh = () => {
    setRefreshing(false);
    getFavoriteBarbers();
  };

  const handleBarberSearch = () => {
      console.log(barberName)
  }*/

  return (
    <Container>
      <Scroller
        /*refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }*/
      >
        <HeaderArea>
          <BackButton >
            <BackIcon width="35" height="35" fill="#FFFFFF" />
          </BackButton>
          <HeaderInputArea>
            <HeaderInput
                placeholder="O que voçê está procurando?"
                placeholderTextColor="#FFFFFF"
                value={barberName}
                onChangeText={(t) => setBarberName(t)}
            />
          </HeaderInputArea>
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
