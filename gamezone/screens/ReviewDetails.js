import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from "../shared/Card";

const ReviewDetails = ({ route, navigation }) => {
  const pressHandler = () => {
    navigation.goBack();
  };
  const rating = navigation.getParam("rating");
  return (
    <View style={globalStyles.container}>
      {/* <Text>This is review details page</Text> */}
      {/* <Text>{title}</Text> */}
      <Card>
        <Text style={globalStyles.text}>{navigation.getParam("title")}</Text>
        <Text style={globalStyles.text}>{navigation.getParam("body")}</Text>
        <View style={styles.rating}>
          <Text style={globalStyles.text}>GameZone Review :</Text>
          <Image source={images.ratings[rating.toString()]}></Image>
        </View>
      </Card>
    </View>
  );
};

export default ReviewDetails;

const styles = StyleSheet.create({
  // container: {
  //   padding: 30,
  //   alignItems: "center",
  // },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
