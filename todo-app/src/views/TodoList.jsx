import React, { useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

export default TodoList = () => {
  const [todoList, setTodoList] = useState(() => [
    { name: "Project 1", id: 1 },
    { name: "Project 2", id: 2 },
    { name: "Project 3", id: 3 },
    { name: "Project 4", id: 4 },
    { name: "Project 5", id: 5 },
    { name: "Project 6", id: 6 },
    { name: "Project 7", id: 7 },
    { name: "Project 8", id: 8 },
    { name: "Project 9", id: 9 },
  ]);
  const handleOnPress = (id) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((todo) => todo.id !== id)
    );
  };

  const addTodo = (text) => {
    if (text.length > 3) {
      setTodoList([
        { name: text, id: todoList.length + Math.random() * 10 },
        ...todoList,
      ]);
    } else {
      Alert.alert("oops", "Todo should have atleast 4 chars", [
        { text: "Ok", onPress: () => console.log("alert closed") },
      ]);
    }
  };
  return (
    <View style={styles.container}>
      <AddTodo submitTodo={addTodo} />

      <FlatList
        // numColumns={2}
        data={todoList}
        renderItem={({ item }) => (
          <TodoItem item={item} onPress={handleOnPress} />
        )}
        keyExtractor={(item) => "'" + item.id + "'"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    // alignItems: 'center',
    justifyContent: "center",
  },
  item: {
    marginTop: 20,
    padding: 30,
    backgroundColor: "grey",
    marginVertical: 8,
    marginHorizontal: 16,
  },
  // header: {
  // 	backgroundColor: 'grey',
  // 	padding: 20
  // },
  // body: {
  // 	backgroundColor: 'pink',
  // 	padding: 20
  // },
  // boldText: {
  // 	fontWeight: 'bold'
  // },
  // input: {
  // 	borderWidth: 1,
  // 	borderColor: '#666',
  // 	padding: 8,
  // 	margin: 10,
  // 	width: 200
  // }
});
