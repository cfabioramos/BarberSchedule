import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 500,
    width: 350,
  },
  button: {
    borderRadius: 30,
    padding: 10,
    elevation: 10,
    height: 65,
    width: 65,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonClose: {
    backgroundColor: "#b641a9",
    marginTop: 270,
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
    marginBottom: -180,
    marginTop: 150,
    textAlign: "center",
  },
  modalTextTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: -110,
    marginTop: 20,
    textAlign: "center",
    padding: 30,
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
        console.log("Modal has been closed.");
        updateVisibility();
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTextTitle}>Erro </Text>
          <Text style={styles.modalText}>{controlObject.errorMessage}</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => updateVisibility()}
          >
            <Text style={styles.textStyle}>Ok</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
