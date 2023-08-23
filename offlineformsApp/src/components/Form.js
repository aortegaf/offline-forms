import React from "react";
import { View, TextInput, Button } from "react-native";

export default function Form() {
  return (
    <View>
      <TextInput placeholder="Input 1" />
      <TextInput placeholder="Input 2" />
      <Button title="Enviar" onPress={() => alert("Enviado")} />
    </View>
  );
}
