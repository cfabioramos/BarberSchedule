import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/Feather";
import { VIOLET_PALLETE } from "../screens/ColorsPalette";

const options = ["Cliente", "Barbeiro"];

export default () => {
  return (
    <DropDownPicker
      items={[
        {
          label: "Cliente",
          value: "C",
          icon: () => <Icon name="user" size={22} color={VIOLET_PALLETE[0]} />
        },
        {
          label: "Estabelecimento",
          value: "E",
          icon: () => <Icon name="flag" size={22} color={VIOLET_PALLETE[0]} />,
        },
      ]}
      placeholder="Eu sou..."
      containerStyle={{ height: 60, marginBottom: 15 }}
      style={{
        backgroundColor: VIOLET_PALLETE[3],
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
      }}
      dropDownStyle={{
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
      }}
      itemStyle={{
        justifyContent: "center",
      }}
      labelStyle={{
        flex: 1,
        fontSize: 16,
        textAlign: "left",
        color: VIOLET_PALLETE[0],
      }}
      dropDownStyle={{ backgroundColor: VIOLET_PALLETE[3] }}
      onChangeItem={(item) => console.log(item.value)}
    />
  );
};
