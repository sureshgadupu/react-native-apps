import React from "react";
import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    // flex: 1,
    // flexDirection: 'row',
    height: 70,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "coral",
    // marginTop: 50,
    // justifyContent: 'center',

    // alignItems: 'stretch'
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
});
