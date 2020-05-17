import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Formik } from "formik";
import { globalStyles } from "../styles/global";
import * as yup from "yup";
import CustomButton from "../shared/CustomButton";

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("min-1-5", "Rating must be a number 1-5", (value) => {
      return parseInt(value) < 6 && parseInt(value) > 0;
    }),
});
const ReviewForm = ({ addReview }) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        validationSchema={reviewSchema}
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder={"Review title"}
              onChangeText={props.handleChange("title")}
              value={props.values.title}
              onBlur={props.handleBlur("title")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.title && props.errors.title}
            </Text>
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder={"Review body"}
              onChangeText={props.handleChange("body")}
              value={props.values.body}
              onBlur={props.handleBlur("body")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.body && props.errors.body}
            </Text>
            <TextInput
              style={globalStyles.input}
              placeholder={"Review rating"}
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              keyboardType="number-pad"
              onBlur={props.handleBlur("rating")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.rating && props.errors.rating}
            </Text>
            {/* <Button
              title="Submit"
              onPress={props.handleSubmit}
              style={globalStyles.input}
            /> */}
            <CustomButton name="Submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ReviewForm;

const styles = StyleSheet.create({});
