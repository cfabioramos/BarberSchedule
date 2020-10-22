import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Preload from "../screens/Preload";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import MainTab from "../stacks/MainTab";
import BarberDetail from "../screens/Barber";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Preload"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Preload"
        component={Preload}
        options={{
          title: "Preload page",
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: "Autenticar",
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: "Log out",
        }}
      />
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="BarberDetail" component={BarberDetail} />
    </Stack.Navigator>
  );
}

export default () => <MyStack />;
