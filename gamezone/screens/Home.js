import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/Card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./ReviewForm";

const Home = ({ navigation }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum - 1",
      key: 1,
    },
    {
      title: "Gotta catch Them All(again)",
      rating: 4,
      body: "lorem ipsum - 2",
      key: 2,
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum - 3",
      key: 3,
    },
  ]);
  const pressHandler = () => {
    // navigation.navigate('ReviewDetails');
    navigation.push("ReviewDetails");
  };

  const addReview = (review) => {
    review.key = reviews.length + 1;
    setReviews((prevReviews) => [review, ...prevReviews]);
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      {/* <Button title="Go to Review" onPress={pressHandler}></Button> */}
      {/* reviews.map(review => ) */}
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              name="close"
              size={28}
              onPress={() => setModalOpen(false)}
            />

            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        name="add"
        style={styles.modalToggle}
        size={28}
        onPress={() => setModalOpen(true)}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.title}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key.toString()}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});
