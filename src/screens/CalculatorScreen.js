import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { ButtonWithIcon, ButtonWithText } from "../components";

export default class App extends React.Component {
  state = {
    text: ""
  };
  createTextInputHandler = num => () =>
    this.setState({ text: this.state.text + num });

  handleClearText = () => this.setState({ text: "" });

  // Rmove the last character from the text
  // Source: https://stackoverflow.com/questions/952924/javascript-chop-slice-trim-off-last-character-in-string
  handleBackspacePress = () =>
    this.setState({ text: this.state.text.slice(0, -1) });

  // TODO: Handle parentheses carefully
  handleParentheses = () => this.setState({ text: this.state.text + "(" });

  handleComputePress = () => {
    // TODO: Calculate the result
    // TODO: Show the result
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.output}>{this.state.text}</Text>
        <View style={styles.row}>
          <ButtonWithText
            style={{ backgroundColor: "#ff8a63" }}
            text={"AC"}
            onPress={this.handleClearText}
          />
          <ButtonWithText
            style={styles.greyButtonContainer}
            text={"/"}
            onPress={this.createTextInputHandler("/")}
          />
          <ButtonWithText
            style={styles.greyButtonContainer}
            text={"*"}
            onPress={this.createTextInputHandler("*")}
          />
          <ButtonWithIcon
            onPress={this.handleBackspacePress}
            name="ios-backspace"
            style={[styles.buttonContainer, { backgroundColor: "red" }]}
          />
        </View>
        <View style={styles.row}>
          <ButtonWithText
            text={"7"}
            onPress={this.createTextInputHandler("7")}
          />
          <ButtonWithText
            text={"8"}
            onPress={this.createTextInputHandler("8")}
          />
          <ButtonWithText
            text={"9"}
            onPress={this.createTextInputHandler("9")}
          />
          <ButtonWithText
            text={"%"}
            style={styles.greyButtonContainer}
            onPress={this.createTextInputHandler("%")}
          />
        </View>
        <View style={styles.row}>
          <ButtonWithText
            text={"4"}
            onPress={this.createTextInputHandler("4")}
          />
          <ButtonWithText
            text={"5"}
            onPress={this.createTextInputHandler("5")}
          />
          <ButtonWithText
            text={"6"}
            onPress={this.createTextInputHandler("6")}
          />
          <ButtonWithText
            text={"-"}
            style={styles.greyButtonContainer}
            onPress={this.createTextInputHandler("-")}
          />
        </View>
        <View style={styles.row}>
          <ButtonWithText
            text={"1"}
            onPress={this.createTextInputHandler("1")}
          />
          <ButtonWithText
            text={"2"}
            onPress={this.createTextInputHandler("2")}
          />
          <ButtonWithText
            text={"3"}
            onPress={this.createTextInputHandler("3")}
          />
          <ButtonWithText
            text={"+"}
            style={styles.greyButtonContainer}
            onPress={this.createTextInputHandler("+")}
          />
        </View>
        <View style={styles.row}>
          <ButtonWithText
            text={"0"}
            onPress={this.createTextInputHandler("0")}
          />
          <ButtonWithText
            text={"."}
            onPress={this.createTextInputHandler(".")}
          />
          <ButtonWithText
            text={"()"}
            style={styles.greyButtonContainer}
            onPress={this.handleParentheses}
          />
          <ButtonWithText
            text={"="}
            style={styles.darkGreyButtonContainer}
            onPress={this.handleComputePress}
          />
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
