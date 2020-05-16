import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import FlatListExample from "./src/views/TodoList";
import Header from "./src/views/Header";
export default function App() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Header />

        <View style={styles.content}>
          <View style={styles.list}>
            <TodoList />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: 20,
    //  backgroundColor: 'grey'
  },
  content: {
    padding: 40,
    // backgroundColor: 'grey',
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  header: {
    alignContent: "stretch",
    padding: 20,
  },
  body: {
    backgroundColor: "pink",
    padding: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#666",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
