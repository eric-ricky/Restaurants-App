import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import {
  selectBasketItems,
  selectBasketTotal,
} from "../lib/redux/features/basketSlice";
import { ShoppingCartIcon } from "react-native-heroicons/outline";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const navigation = useNavigation();

  return (
    <View className="absolute bottom-10 rounded-md z-50 w-full px-4">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="bg-[#00ccbb] p-4 flex-row space-x-4 items-center rounded-md shadow-md"
      >
        <View className="relative">
          <ShoppingCartIcon color="#fff" size={30} />
          <Text className="absolute -top-2 -right-2 w-5 h-5 items-center justify-center text-center bg-red-500 text-white rounded-full">
            {items.length}
          </Text>
        </View>

        <Text className="flex-grow text-white font-medium text-lg text-center">
          View Basket
        </Text>

        <Text className="font-bold text-lg text-white">${basketTotal}.00</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
