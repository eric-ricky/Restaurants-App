import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { UserIcon, MagnifyingGlassIcon } from "react-native-heroicons/solid";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebaseConfig";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = collection(db, "restaurants");
        const docSnapshots = await getDocs(collectionRef);

        if (!docSnapshots.empty) {
          const restaurants = [];
          docSnapshots.forEach((snapshot) => {
            console.log("id ==>", snapshot.id);
            console.log("data ===>", { ...snapshot.data() });
            restaurants.push({ ...snapshot.data() });
          });
          setData(restaurants);
        }
      } catch (error) {
        console.log(error);
      }
    };

    // fetchData();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="pb-20">
      {/* ===== HEADER ==== */}
      <View className="pt-10 px-4 pb-2 bg-white">
        {/* title */}
        <View className="flex-row items-center space-x-2">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            }}
            alt="home"
            className="h-8 w-8 rounded-full bg-gray-200"
          />

          <View className="flex-1">
            <Text className="text-sm text-gray-400 font-bold">Deliver Now</Text>
            <Text className="text-xl font-bold">Current Location</Text>
          </View>

          <UserIcon size={30} color="#00ccbb" />
        </View>

        {/* search */}
        <View className="flex-row items-center space-x-2 bg-slate-100 rounded-3xl p-2 pl-4 my-4">
          <MagnifyingGlassIcon size={20} color="#123456" />
          <TextInput
            placeholder="Search Restaurant..."
            keyboardType="default"
          />
        </View>
      </View>

      {/* ==== BODY ==== */}
      <ScrollView
        // contentContainerStyle={{
        //   paddingBottom: 20,
        // }}
        className="bg-slate-50"
      >
        {/* categories */}
        <Categories />

        {/* dummy data fetching */}
        {data ? (
          <View className="p-5 mt-4">
            <Text>Name: {data[0]?.name}</Text>
          </View>
        ) : (
          <View className="p-5 mt-4">
            <Text className="text-teal-500">Nothing found</Text>
          </View>
        )}

        {/* featured */}
        <FeaturedRow
          id="smrgdsf"
          title="Top picks in your neighbourhood"
          description="Checkout the top picks"
        />

        {/* featured */}
        <FeaturedRow
          id="smrgdsf"
          title="Top picks in your neighbourhood"
          description="Checkout the top picks"
        />

        <View className="mt-28"></View>
      </ScrollView>

      <View className="py-20 bg-slate-500">
        <Text>Something for the bottom</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
