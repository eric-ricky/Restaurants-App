import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image } from "react-native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";
import { categoriesData } from "../components/Categories";
import { useDispatch, useSelector } from "react-redux";
import BasketIcon from "../components/BasketIcon";
import { selectBasketItems } from "../lib/redux/features/basketSlice";
import { setRestaurant } from "../lib/redux/features/restaurantSlice";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {
    params: {
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
    },
  } = route;

  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
      })
    );
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      {!!items.length && <BasketIcon />}

      <ScrollView>
        <View className="relative">
          <Image
            source={{ uri: imgUrl }}
            alt={title}
            className="w-full h-56 bg-slate-200"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute left-5 top-8 w-8 h-8 items-center justify-center bg-slate-200 rounded-full"
          >
            <ArrowLeftIcon color="#00ccbb" size={20} />
          </TouchableOpacity>
        </View>

        <View className="p-4 bg-white">
          <Text className="font-bold text-2xl">{title}</Text>
          <Text className="text-sm text-gray-500">{short_description}</Text>
          <View className="flex-row space-x-2 my-2">
            <StarIcon size={20} color="#00ccbb" />
            <Text className="text-[#00ccbb] text-sm">{rating} Good</Text>
            <Text className="text-sm text-gray-500">{genre} . 12.2km away</Text>
          </View>
          <Text className="text-sm text-gray-600">
            Opens at 18:00 on Friday to 19:00hrs . $2.99 delivery . $20.00 min
          </Text>

          <View className="mt-4">
            <View className="flex-row items-center space-x-4">
              <QuestionMarkCircleIcon color="gray" size={25} />

              <Text className="font-medium flex-1">Have a food allergy</Text>

              <ChevronRightIcon color="#00ccbb" size={20} />
            </View>
          </View>
        </View>

        <View className="pt-4 pb-32">
          <Text className="px-4 font-bold">Menu</Text>

          {categoriesData.map(({ id, imgUrl, title }) => (
            <DishRow
              key={id}
              description={`Some ${title} food description`}
              image={imgUrl}
              id={id}
              name={title}
              price={id}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
