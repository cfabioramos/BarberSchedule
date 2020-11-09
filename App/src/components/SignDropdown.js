import React from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { VIOLET_PALLETE } from "../screens/ColorsPalette";

export default ({ options, placeholder, onChangeValue }) => {
  return (
    <DropDownPicker
      items={options}
      placeholder={placeholder}
      containerStyle={{ height: 40, marginBottom: 15 }}
      style={{
        backgroundColor: VIOLET_PALLETE[3],
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderWidth: 0,
      }}
      itemStyle={{
        justifyContent: "flex-start",
      }}
      dropDownStyle={{
        backgroundColor: VIOLET_PALLETE[3],
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderWidth: 0,
      }}
      labelStyle={{
        fontSize: 18,
        textAlign: "left",
        color: VIOLET_PALLETE[0],
      }}
      onChangeItem={(item) => onChangeValue(item.value)}
    />
  );
};
