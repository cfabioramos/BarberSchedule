import { Left } from "native-base";
import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import SendIcon from "../assets/verificado.svg";
import DeleteIcon from "../assets/delete.svg";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "black",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 250,
    width: 310,
  },
  button: {
    borderRadius: 30,
    padding: 10,
    elevation: 10,
    height: 50,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonClose: {
    backgroundColor: "#b641a9",
    marginTop: 40,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
    textAlign: "center",
  },
  modalTextTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
    textAlign: "center",
  },
});

export default ({ controlObject }) => {
  let setVisible = controlObject.isModalVisible ? true : false;

  const updateVisibility = () => {
    setVisible = false;
    controlObject.cb(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={setVisible}
      onRequestClose={() => {
        updateVisibility();
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTextTitle}>
            <SendIcon width="20" height="20" fill="#FFFFFF" /> PARA COMFIRMAR
          </Text>
          <Text style={styles.modalText}>
            <DeleteIcon width="20" height="20" fill="#FFFFFF" /> PARA REMOVER.
          </Text>

          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => updateVisibility()}
          >
            <Text style={styles.textStyle}>ok</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
