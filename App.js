import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.text}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.text}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer, { backgroundColor: "red" }]}
          >
            <Ionicons name="ios-backspace" size={64} color="white" />
            {/* <Text style={styles.text}>9</Text> */}
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
    fontSize: 50
  },
  buttonContainer: {
    borderWidth: 2,
    margin: 10,
    padding: 10,
    width: 120,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 60
  }
});
