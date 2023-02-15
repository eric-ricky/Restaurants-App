import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

export const categoriesData = [
  {
    id: 1,
    imgUrl:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=713&q=80",
    title: "Chicken Salad",
  },
  {
    id: 2,
    imgUrl:
      "https://images.unsplash.com/photo-1580651315530-69c8e0026377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Spicy Seremic Bowl",
  },
  {
    id: 3,
    imgUrl:
      "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Chicken Peas",
  },
  {
    id: 4,
    imgUrl:
      "https://images.unsplash.com/photo-1598515214146-dab39da1243d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Grilled Meat",
  },
  {
    id: 5,
    imgUrl:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=713&q=80",
    title: "Chicken Salad",
  },
  {
    id: 6,
    imgUrl:
      "https://images.unsplash.com/photo-1580651315530-69c8e0026377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Spicy Seremic Bowl",
  },
  {
    id: 7,
    imgUrl:
      "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Chicken Peas",
  },
  {
    id: 8,
    imgUrl:
      "https://images.unsplash.com/photo-1598515214146-dab39da1243d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Grilled Meat",
  },
];

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {categoriesData.map((item) => (
        <CategoryCard key={item.id} imgUrl={item.imgUrl} title={item.title} />
      ))}
    </ScrollView>
  );
};

export default Categories;
