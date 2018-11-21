import React from "react";
import { StyleSheet, Text } from "react-native";

import Button from "./Button";

export default (ButtonWithText = ({ style, onPress, text }) => (
  <Button style={style} onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
  </Button>
));

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    textAlignVertical: "center",
    textAlign: "center"
  }
});
