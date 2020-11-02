import React, { useState, useEffect } from "react";
import { Image, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import styled from "styled-components/native";
import { VIOLET_PALLETE } from "../screens/ColorsPalette";

export default () => {
  const [image, setImage] = useState(null);

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
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const ImageItem = styled.TouchableOpacity`
    width: 80px;
    height: 80px;
    border: 1px solid ${VIOLET_PALLETE[1]};
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
      {image ? (
        <Image source={{ uri: image }} style={{ width: 80, height: 80 }} />
      ) : (
        <PickImageText>Imgem</PickImageText>
      )}
    </ImageItem>
  );
};
