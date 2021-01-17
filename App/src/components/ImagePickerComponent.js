import React, { useState, useEffect } from "react";
import { Image, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import styled from "styled-components/native";
import { DEFAULT_COLLOR_PALLET } from "../screens/ColorsPalette";

export default ({fieldPlaceholder, imageField, setimageField}) => {
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      allowsMultipleSelection: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setimageField(result.uri);
    }
  };

  const ImageItem = styled.TouchableOpacity`
    width: 80px;
    height: 80px;
    border: 1px solid ${DEFAULT_COLLOR_PALLET[1]};
    border-radius: 20px;
    justify-content: center;
    align-items: center;
  `;

  const PickImageText = styled.Text`
    color: #000000;
    font-size: 15px;
  `;

  return (
    <ImageItem onPress={pickImage}>
      {imageField ? (
        <Image source={{ uri: imageField }} style={{ width: 80, height: 80, borderRadius: 20 }} />
      ) : (
        <PickImageText>{fieldPlaceholder}</PickImageText>
      )}
    </ImageItem>
  );
};
