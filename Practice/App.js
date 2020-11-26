import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, SafeAreaView, Button } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello Sibonokuhle!</Text>
      <Button
        title="Learn More"
        color="red"
        onPress={() => alert("Button Tapped")}
      />
      <StatusBar backgroundColor="#07A0C3" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BFCDE0",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 420,
    height: 700,
  },
});
