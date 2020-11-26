import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Alert, SafeAreaView, Button } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello Sibonokuhle!</Text>
      <Button
        title="Learn More"
        color="red"
        onPress={() =>
          Alert.alert("Helllo There", "Do you agree to all the listed?", [
            { text: "Remind me later" },
            { text: "Yes" },
            { text: "No" },
          ])
        }
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
