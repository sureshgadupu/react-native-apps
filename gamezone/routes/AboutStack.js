import { createStackNavigator } from "react-navigation-stack";
import { CreateAppContainer } from "react-navigation";
import About from "../screens/About";
import Header from "../shared/Header";
import React from "react";

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      //   title: "Home",
      return {
        headerTitle: () => <Header navigation={navigation} title={"About"} />,
      };
      // headerStyle: { backgroundColor: 'coral' }
    },
  },
};

export const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    // headerStyle: { backgroundColor: "#eee" },
    headerTintColor: "#333",
  },
});

export default AboutStack;
