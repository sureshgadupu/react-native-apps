import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default AddTodo = ({ submitTodo }) => {
  const [todo, setTodo] = useState("");

  const handleChange = (value) => {
    setTodo(value);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        value={todo}
        placeholder={"Add a todo.."}
        onChangeText={handleChange}
      />
      <Button
        color="coral"
        onPress={() => submitTodo(todo)}
        title={"Add Todo"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
  },
});
