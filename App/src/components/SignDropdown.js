import React from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { DEFAULT_COLLOR_PALLET } from "../screens/ColorsPalette";

export default ({ options, placeholder, onChangeValue }) => {
  return (
    <DropDownPicker
      items={options}
      placeholder={placeholder}
      containerStyle={{ height: 40, marginBottom: 15 }}
      style={{
        backgroundColor: DEFAULT_COLLOR_PALLET[3],
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
        backgroundColor: DEFAULT_COLLOR_PALLET[3],
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderWidth: 0,
      }}
      labelStyle={{
        fontSize: 18,
        textAlign: "left",
        color: DEFAULT_COLLOR_PALLET[0],
      }}
      onChangeItem={(item) => onChangeValue(item.value)}
    />
  );
};
