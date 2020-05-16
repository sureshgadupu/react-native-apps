import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Header = ({ navigation, title }) => {
  const openMenu = () => {
    // console.log("menu pressed");
    navigation.openDrawer();
  };
  return (
    <ImageBackground
      style={styles.header}
      source={require("../assets/game_bg.png")}
    >
      {/* <View> */}
      <MaterialIcons
        style={styles.icon}
        size={28}
        name="menu"
        onPress={openMenu}
      />
      {/* </View> */}
      <View style={styles.headerTitle}>
        <Image
          style={styles.headerImage}
          source={require("../assets/heart_logo.png")}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#333",
    letterSpacing: 1,
    textAlign: "center",
    // marginLeft: 50,
    //  backgroundColor: "red",
    // alignItems: "center",
  },
  headerImage: {
    width: 26,
    height: 26,
    marginLeft: 50,
    marginHorizontal: 10,
  },
  headerTitle: {
    flexDirection: "row",
  },
  icon: {
    // position: "absolute",
    // left: 5,
  },
});
