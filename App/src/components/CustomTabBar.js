import React, { useContext } from "react";
import styled from "styled-components/native";

import { UserContext } from "../contexts/UserContext";

import HomeIcon from "../assets/home.svg";
import SearchIcon from "../assets/search.svg";
import TodayIcon from "../assets/today.svg";
import FavoriteIcon from "../assets/favorite.svg";
import AccountIcon from "../assets/account.svg";
import StarIcon from "../assets/star.svg";
import { DEFAULT_COLLOR_PALLET } from '../screens/ColorsPalette'

const TabArea = styled.View`
  height: 60px;
  background-color: #b641a9;
  flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TabItemCenter = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 35px;
  border: 3px solid #b641a9;
  margin-top: -20px;
`;

const AvatarIcon = styled.Image`
  width: 24px;
  height: 24px;
  border-radius: 12px;
`;

export default ({ state, navigation }) => {
  const { state: user } = useContext(UserContext);

  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <>
      {user.type === "U" || user.type === "A" ? (
        <TabArea>
          <TabItem onPress={() => goTo("Home")}>
            <HomeIcon
              style={{ opacity: state.index === 0 ? 1 : 0.5 }}
              width="24"
              height="24"
              fill="#FFFFFF"
            />
          </TabItem>
          <TabItem onPress={() => goTo("Search")}>
            <SearchIcon
              style={{ opacity: state.index === 1 ? 1 : 0.5 }}
              width="24"
              height="24"
              fill="#FFFFFF"
            />
          </TabItem>

          <TabItemCenter onPress={() => goTo("Appointments")}>
            <TodayIcon width="32" height="32" fill={DEFAULT_COLLOR_PALLET[1]} />
          </TabItemCenter>

          <TabItem onPress={() => goTo("Favorites")}>
            <FavoriteIcon
              style={{ opacity: state.index === 3 ? 1 : 0.5 }}
              width="24"
              height="24"
              fill="#FFFFFF"
            />
          </TabItem>

          <TabItem onPress={() => goTo("Profile")}>
            {user.avatar != "" ? (
              <AvatarIcon source={{ uri: user.avatar }} />
            ) : (
              <AccountIcon
                style={{ opacity: state.index === 4 ? 1 : 0.5 }}
                width="24"
                height="24"
                fill="#FFFFFF"
              />
            )}
          </TabItem>

          {user.type === "A" && (
            <TabItem onPress={() => goTo("ColorsPalette")}>
              <StarIcon
                style={{ opacity: state.index === 5 ? 1 : 0.5 }}
                width="24"
                height="24"
                fill="#FFFFFF"
              />
            </TabItem>
          )}
        </TabArea>
      ) : (
        <TabArea>
          <TabItem onPress={() => goTo("EstablishmentProfile")}>
            {user.avatar != "" ? (
              <AvatarIcon source={{ uri: user.avatar }} />
            ) : (
              <AccountIcon
                style={{ opacity: state.index === 4 ? 1 : 0.5 }}
                width="24"
                height="24"
                fill="#FFFFFF"
              />
            )}
          </TabItem>
          <TabItemCenter onPress={() => goTo("Appointments")}>
            <TodayIcon width="32" height="32" fill={DEFAULT_COLLOR_PALLET[1]} />
          </TabItemCenter>
          <TabItem onPress={() => goTo("ColorsPalette")}>
            <StarIcon
              style={{ opacity: state.index === 5 ? 1 : 0.5 }}
              width="24"
              height="24"
              fill="#FFFFFF"
            />
          </TabItem>
        </TabArea>
      )}
    </>
  );
};
