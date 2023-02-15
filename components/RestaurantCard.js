import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        });
      }}
      className="bg-white rounded shadow mr-4 mb-2"
    >
      <Image source={{ uri: imgUrl }} className="w-56 h-52 rounded-t-sm" />
      <View className="p-2 relative">
        <Text>{title}</Text>
        <View className="flex-row space-x-2 my-2">
          <StarIcon size={20} color="#00ccbb" />
          <Text className="text-[#00ccbb] text-sm">{rating} Good</Text>
          <Text className="text-sm text-gray-500">{genre}</Text>
        </View>

        <View className="absolute -top-6 right-1 bg-white rounded-lg p-2 items-center shadow-md">
          <Text className="text-xs font-thin text-gray-400">Around</Text>
          <Text className="text-xs">45min</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
