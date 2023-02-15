import { View, Text, ScrollView } from "react-native";
import React from "react";
import RestaurantCard from "./RestaurantCard";

const restaurantsData = [
  {
    img: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="px-4 mt-4 space-y-1">
        <Text className="font-bold text-lg">{title}</Text>
        <Text className="text-xs text-gray-500">{description}</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="py-4 pb-10"
      >
        {[1, 2, 3, 4].map((n, i) => (
          <RestaurantCard
            key={n}
            id={`${n}ssd${i}`}
            title="Susho World"
            short_description="This is Sushi World"
            address="123 Main St"
            dishes={["1", "2"]}
            genre="Japanese"
            lat={10}
            long={20}
            rating={4.5}
            imgUrl="https://images.unsplash.com/photo-1508170754725-6e9a5cfbcabf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
