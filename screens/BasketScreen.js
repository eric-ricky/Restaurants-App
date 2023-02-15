import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../lib/redux/features/restaurantSlice";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../lib/redux/features/basketSlice";
import { SafeAreaView } from "react-native";
import { XMarkIcon } from "react-native-heroicons/solid";

const BasketScreen = () => {
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [groupedItemsInBusket, setGroupedItemsInBusket] = useState({});

  useEffect(() => {
    const groupedItems = items.reduce((prev, item) => {
      (prev[item.id] = prev[item.id] || []).push(item);
      return prev;
    }, {});

    setGroupedItemsInBusket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white mt-6">
      <View className="bg-gray-100 flex-1">
        <View className="bg-white p-5 border-b border-[#00ccbb]">
          <View>
            <Text className="font-bold text-center text-lg">Basket</Text>
            <Text className="text-center">{restaurant.title}</Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full p-2  bg-[#00ccbb] absolute right-4 top-5 w-8 h-8 items-center justify-center"
          >
            <XMarkIcon color="#fff" size={20} />
          </TouchableOpacity>
        </View>

        <View className="bg-white px-4 py-3 flex-row items-center space-x-4 my-5">
          <Image
            source={{
              uri: restaurant.imgUrl || "",
            }}
            className="w-8 h-8 rounded-full bg-slate-200"
          />
          <Text className="flex-grow">Deliver in 50-75 min</Text>
          <TouchableOpacity className="">
            <Text className="text-[#00ccbb]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBusket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-4 p-4 bg-white"
            >
              <Text>{items.length} x</Text>
              <Image
                source={{
                  uri: items[0]?.image || "",
                }}
                alt={items[0]?.name || ""}
                className="w-12 h-12 rounded-full"
              />
              <Text className="flex-grow">{items[0]?.name}</Text>
              <Text className="text-gray-500">${items[0]?.price}.00</Text>

              <TouchableOpacity
                onPress={() => dispatch(removeFromBasket({ id: items[0].id }))}
              >
                <Text className="text-[#00ccbb]">Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="bg-white space-y-4 p-5 mt-2">
          <View className="flex-row justify-between">
            <Text className="text-gray-500">Subtotal</Text>
            <Text className="text-gray-400">${basketTotal}.00</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-500">Delivery Fee</Text>
            <Text className="text-gray-400">${5.99}</Text>
          </View>

          <View className="flex-row justify-between">
            <Text>Order Total</Text>
            <Text className="font-bold">
              ${parseFloat((basketTotal + 5.99).toFixed(2))}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("PreparingOrderScreen")}
            className="bg-[#00ccbb] py-2 px-4 rounded-md"
          >
            <Text className="text-center text-white text-lg font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
