import React, { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../contexts/UserContext";
import { FlatList } from "react-native-gesture-handler";

import {
  Container,
  Scroller,
  HeaderArea,
  HeaderInputArea,
  HeaderInput,
  LoadingIcon,
  ListArea,
  ListaText,
  ListButton,
} from "./styles";

const Home = () => {
  const navigation = useNavigation();
  const { state: user, dispatch: userDispatch } = useContext(UserContext);

  const [loading] = useState(false);

  const nextRouteName = user && user.idCategory ? "Search" : "Home";

  useEffect(() => {
    navigation.navigate(nextRouteName);
  }, [user]);

  const [typeService, setTypeService] = useState([
    { name: "Salão de Beleza", id: "1" },
    { name: "Barbeiro", id: "2" },
    { name: "Podólogo", id: "3" },
    { name: "Cabeleireiro Feminino", id: "4" },
    { name: "Estética Corporal", id: "5" },
    { name: "Massagem linfática", id: "6" },
  ]);

  const [categoryName, setCategoryName] = useState("");
  const [oterList, setOterList] = useState(typeService);
  
  useEffect(() => {
    if (categoryName === "") {
      setOterList(typeService);
    } else {
      setOterList(
        typeService.filter(
          (item) =>
            item.name.toLowerCase().indexOf(categoryName.toLowerCase()) > -1
        )
      );
    }
  }, [categoryName]);

  const defineCategory = (idCategory) => {
    if (user.idCategory) {
      navigation.navigate("Search");
    } else {
      userDispatch({
        type: "setIdCategory",
        payload: { idCategory: idCategory },
      });
      navigation.navigate("MainTab");
    }
  };

  return (
    <Container>
      <HeaderArea>
        <HeaderInputArea>
          <HeaderInput
            placeholder="O que você está procurando?"
            placeholderTextColor="#FFFFFF"
            value={categoryName}
            onChangeText={(t) => setCategoryName(t)}
          />
        </HeaderInputArea>
      </HeaderArea>

      {loading && <LoadingIcon size="large" color="#FFFFFF" />}

      <ListArea>
        <FlatList
          keyExtractor={(item) => item.id}
          data={oterList}
          renderItem={({ item }) => (
            <ListButton onPress={() => defineCategory(item.id)}>
              <ListaText>{item.name}</ListaText>
            </ListButton>
          )}
        />
      </ListArea>
    </Container>
  );
};

export default Home;
