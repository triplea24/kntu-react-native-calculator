import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Button from "./src/Button";

export default class App extends React.Component {
  state = {
    text: ""
  };
  createTextInputHandler = num => () =>
    this.setState({ text: this.state.text + num });

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.output}>{this.state.text}</Text>
        <View style={styles.row}>
          <Button
            onPress={() => this.setState({ text: "" })}
            style={{ backgroundColor: "#ff8a63" }}
          >
            <Text style={styles.text}>AC</Text>
          </Button>
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
          <Button onPress={this.createTextInputHandler("1")}>
            <Text style={styles.text}>1</Text>
          </Button>
          <Button onPress={this.createTextInputHandler("2")}>
            <Text style={styles.text}>2</Text>
          </Button>
          <Button onPress={this.createTextInputHandler("3")}>
            <Text style={styles.text}>3</Text>
          </Button>
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
  darkGreyButtonContainer: { backgroundColor: "#737373" },
  output: {
    fontSize: 25,
    fontFamily: "Avenir",
    marginBottom: 10
  }
});
