import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { PhoneIcon, XMarkIcon } from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import { Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../lib/redux/features/restaurantSlice";
import { useNavigation } from "@react-navigation/native";

const DeliveryScreen = () => {
  const restaurant = useSelector(selectRestaurant);
  const navigation = useNavigation();

  return (
    <SafeAreaView className="mt-5 pt-5 bg-[#00ccbb] flex-1">
      <View className="p-5 z-50">
        <View className="flex-row justify-between">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon color="#fff" size={25} />
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center space-x-1">
            <QuestionMarkCircleIcon color="#fff" size={20} />
            <Text className="text-white">Help</Text>
          </TouchableOpacity>
        </View>

        <View className="bg-white shadow-sm p-4 flex-row justify-between rounded-md -mb-12 mt-5">
          <View>
            <Text className="text-gray-400">Estimated Arrival</Text>
            <Text className="text-2xl font-bold">45-55 Minutes</Text>
            <View className="w-1/2 h-2 border rounded-lg border-teal-200 flex-row justify-end my-2">
              <Text className="w-4 bg-teal-300">.</Text>
            </View>
            <Text className="text-gray-400 text-sm">
              Your order is being prepared
            </Text>
          </View>

          <Image
            source={{
              uri: "https://links.papareact.com/fls",
            }}
            alt="driver"
            className="w-20 h-20"
          />
        </View>
      </View>

      {/* <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="mutedStandard"
        className="flex-1"
      >
        <Marker
          coordinates={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#00ccbb"
        />
      </MapView> */}

      <View className="flex-1 bg-slate-100"></View>

      <SafeAreaView className="bg-white p-5 flex-row space-x-4 items-center">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="w-12 h-12 rounded-full bg-slate-200"
        />

        <View className="flex-grow">
          <Text className="font-bold text-lg">James Kyalo</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>

        <View className="flex-row space-x-2 items-center">
          <PhoneIcon color="#00ccbb" size={25} />
          <Text className="font-black text-teal-500">Call</Text>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default DeliveryScreen;
