import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2 overflow-hidden">
      <Image
        source={{
          uri: imgUrl,
        }}
        alt={title}
        className="h-20 w-20 rounded-md bg-gray-200"
      />
      <Text className="absolute bottom-1 left-1 font-bold text-white">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
