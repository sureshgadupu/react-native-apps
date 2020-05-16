import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import Header from "../shared/Header";
import React from "react";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      //   title: "Home",
      return {
        headerTitle: () => (
          <Header navigation={navigation} title={"GameZone"} />
        ),
      };
      // headerStyle: { backgroundColor: 'coral' }
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: "Review Details",
      // headerStyle: { backgroundColor: 'coral' }
    },
  },
};
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    // headerStyle: { backgroundColor: "red" },
  },
});

export default HomeStack;
