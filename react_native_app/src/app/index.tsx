import { style } from "@/style/style";
import React, { useState } from "react";
import { Text, View, TextInput, Button, Alert } from "react-native";

const index = () => {
  const [text, setText] = useState("");

  const onChangeText = (text: string) => {
    setText(text);
    console.log(text);
  };

  const onPressLearnMore = () => {
    // alert("Hello World");
    Alert.alert("title", "Alert message", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
      },
    ]);
  };

  return (
    <View style={style.container}>
      <Text style={style.text}>hello world</Text>
      <Text style={style.text}>hello world</Text>
      <Text style={style.text}>hello world</Text>
      <Text style={style.text}>{text}</Text>
      <Text>Email</Text>
      <TextInput
        style={style.input}
        onChangeText={onChangeText}
        value={text}
        keyboardType="default"
        placeholder="Enter your email"
      />
      <Text>Enter OTP</Text>
      <TextInput
        style={style.input}
        onChangeText={onChangeText}
        value={text}
        keyboardType="numeric"
        placeholder="Please enter your Name"
      />
      <Button
        onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

export default index;
