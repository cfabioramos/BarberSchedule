import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { UserContext } from "../contexts/UserContext";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Appointments from "../screens/Appointments";
import Favorites from "../screens/Favorites";
import Profile from "../screens/Profile";
import EstablishmentProfile from "../screens/EstablishmentProfile";
import ColorsPalette from "../screens/ColorsPalette";
import HomeIcon from "../assets/home.svg";
import SearchIcon from "../assets/search.svg";
import TodayIcon from "../assets/today.svg";
import FavoriteIcon from "../assets/favorite.svg";
import AccountIcon from "../assets/account.svg";
import StarIcon from "../assets/star.svg";
import { DEFAULT_COLLOR_PALLET } from "../screens/ColorsPalette";

const Tab = createBottomTabNavigator();
const USER_TYPE = "U";
const USER_ADMIN_TYPE = "A";

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

export default () => {

  const { state: user } = useContext(UserContext);

  const isUser = user.type === USER_TYPE || user.type === USER_ADMIN_TYPE;
  if (isUser && user.idCategory) {
    return (
      <Tab.Navigator
        tabBar={(props) => {
          const paramProps = { ...props, user };
          return <CustomUserCompleteTabBar {...paramProps} />;
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Appointments" component={Appointments} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="ColorsPalette" component={ColorsPalette} />
      </Tab.Navigator>
    );
  } else if (isUser) {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={(props) => {
          const paramProps = { ...props, user };
          return <CustomUserLessCategoryTabBar {...paramProps} />;
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Appointments" component={Appointments} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="ColorsPalette" component={ColorsPalette} />
      </Tab.Navigator>
    );
  } else {
    return (
      <Tab.Navigator
        tabBar={(props) => {
          const paramProps = { ...props, user };
          return <CustomUserLessCategoryTabBar {...paramProps} />;
        }}
      >
        <Tab.Screen
          name="EstablishmentProfile"
          component={EstablishmentProfile}
        />
        <Tab.Screen name="Appointments" component={Appointments} />
        <Tab.Screen name="ColorsPalette" component={ColorsPalette} />
      </Tab.Navigator>
    );
  }

};

const CustomUserCompleteTabBar = ({ state, navigation, user }) => (
  <TabArea>
    <TabItem onPress={() => navigation.navigate("Home")}>
      <HomeIcon
        style={{ opacity: state.index === 0 ? 1 : 0.5 }}
        width="24"
        height="24"
        fill="#FFFFFF"
      />
    </TabItem>
    <TabItem onPress={() => navigation.navigate("Search")}>
      <SearchIcon
        style={{ opacity: state.index === 1 ? 1 : 0.5 }}
        width="24"
        height="24"
        fill="#FFFFFF"
      />
    </TabItem>

    <TabItemCenter onPress={() => navigation.navigate("Appointments")}>
      <TodayIcon width="32" height="32" fill={DEFAULT_COLLOR_PALLET[1]} />
    </TabItemCenter>

    <TabItem onPress={() => navigation.navigate("Favorites")}>
      <FavoriteIcon
        style={{ opacity: state.index === 3 ? 1 : 0.5 }}
        width="24"
        height="24"
        fill="#FFFFFF"
      />
    </TabItem>

    <TabItem onPress={() => navigation.navigate("Profile")}>
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
);

const CustomUserLessCategoryTabBar = ({ state, navigation, user }) => (
  <TabArea>
    <TabItem onPress={() => navigation.navigate("Home")}>
      <HomeIcon
        style={{ opacity: state.index === 0 ? 1 : 0.5 }}
        width="24"
        height="24"
        fill="#FFFFFF"
      />
    </TabItem>
    <TabItemCenter onPress={() => navigation.navigate("Appointments")}>
      <TodayIcon width="32" height="32" fill={DEFAULT_COLLOR_PALLET[1]} />
    </TabItemCenter>
    <TabItem onPress={() => navigation.navigate("Profile")}>
      <AccountIcon
        style={{ opacity: state.index === 4 ? 1 : 0.5 }}
        width="24"
        height="24"
        fill="#FFFFFF"
      />
    </TabItem>
  </TabArea>
);
