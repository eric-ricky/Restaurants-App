import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-slate-50 justify-center items-center">
      <Animatable.Image
        source={require("../assets/delivering.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="w-96 h-96"
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={2}
        className="my-10 text-lg font-semibold text-center px-10"
      >
        Waiting for the restaurant to accept your order
      </Animatable.Text>
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
