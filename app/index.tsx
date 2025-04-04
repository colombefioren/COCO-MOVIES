import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Platform,
  SafeAreaView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import TrendingCarousel, { fruitItems } from "@/components/TrendingCarousel";
import MovieList from "@/components/MovieList";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

export const { width } = Dimensions.get("window");
const ios = Platform.OS == "ios";

const index = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1B2431" }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingTop: ios ? 10 : 40, paddingBottom: 20 }}
      >
        <StatusBar backgroundColor="#1B2431" style="light" />
        <View className="flex flex-row items-center justify-between px-7 mb-10">
          <TouchableOpacity>
            <FontAwesome name="bars" size={30} color={"#475569"} />
          </TouchableOpacity>
          <Text className="text-white font-lexendBold text-3xl">
            Coco<Text className="text-secondary">.</Text> Mov
            <Text className="text-secondary">i</Text>es
          </Text>
          <TouchableOpacity onPress={() => router.push("/Search")}>
            <FontAwesome name="search" size={27} color={"#475569"} />
          </TouchableOpacity>
        </View>
        <TrendingCarousel />
        <MovieList title="UPCOMING" data={fruitItems} />
        <MovieList title="TOP RATED" data={fruitItems} />
        <MovieList title="FOR YOU" data={fruitItems} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
