import { Left } from "native-base";
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
  buttonConfirm: {
    backgroundColor: "#b641a9",
    marginTop: 70,
    marginLeft: -90,
  },

  buttonClose: {
    backgroundColor: "#b641a9",
    marginTop: -49,
    marginLeft: 90,
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
    fontSize: 20,
    marginBottom: -50,
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
            Tem certeza que deseja excluir ?{" "}
          </Text>
          <Pressable
            style={[styles.button, styles.buttonConfirm]}
            onPress={() => updateVisibility()}
          >
            <Text style={styles.textStyle}>sim</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => updateVisibility()}
          >
            <Text style={styles.textStyle}>não</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
