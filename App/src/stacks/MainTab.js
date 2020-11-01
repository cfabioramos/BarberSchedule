import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CustomTabBar from "../components/CustomTabBar";

import { UserContext } from "../contexts/UserContext";

import Home from "../screens/Home";
import Search from "../screens/Search";
import Appointments from "../screens/Appointments";
import Favorites from "../screens/Favorites";
import Profile from "../screens/Profile";
import ColorsPalette from "../screens/ColorsPalette";

const Tab = createBottomTabNavigator();

export default () => {
  const { state: user } = useContext(UserContext);

  return (
    <>
      {user.type === "U" || user.type === "A" ? (
        <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Appointments" component={Appointments} />
          <Tab.Screen name="Favorites" component={Favorites} />
          <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="ColorsPalette" component={ColorsPalette} />
        </Tab.Navigator>
      ) : (
        <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      )}
    </>
  );
};
