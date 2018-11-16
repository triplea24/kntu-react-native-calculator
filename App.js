import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.buttonContainer, { backgroundColor: "#ff8a63" }]}
          >
            <Text style={styles.text}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.greyButtonContainer]}
          >
            <Text style={styles.text}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.greyButtonContainer]}
          >
            <Text style={styles.text}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer, { backgroundColor: "red" }]}
          >
            <Ionicons name="ios-backspace" size={48} color="white" />
            {/* <Text style={styles.text}>9</Text> */}
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.text}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.text}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.text}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.greyButtonContainer]}
          >
            <Text style={styles.text}>%</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.text}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.text}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.text}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.greyButtonContainer]}
          >
            <Text style={styles.text}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.text}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.text}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.text}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.greyButtonContainer]}
          >
            <Text style={styles.text}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.text}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.text}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.greyButtonContainer]}
          >
            <Text style={styles.text}>( )</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.darkGreyButtonContainer]}
          >
            <Text style={styles.text}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  row: {
    flexDirection: "row",
    marginTop: 10
  },
  text: {
    fontSize: 40,
    textAlignVertical: "center",
    textAlign: "center"
  },
  buttonContainer: {
    borderWidth: 2,
    margin: 10,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 60
  },
  greyButtonContainer: { backgroundColor: "#cccccc" },
  darkGreyButtonContainer: { backgroundColor: "#737373" }
});
