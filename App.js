import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.buttonContainer}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Text style={styles.text}>3</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.buttonContainer}>
            <Text style={styles.text}>4</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Text style={styles.text}>5</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Text style={styles.text}>6</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.buttonContainer}>
            <Text style={styles.text}>7</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Text style={styles.text}>8</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Text style={styles.text}>9</Text>
          </View>
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
