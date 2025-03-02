import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import TrendingCarousel, { fruitItems } from "@/components/TrendingCarousel";
import MovieList from "@/components/MovieList";

const { width } = Dimensions.get("window");

const index = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <ScrollView>
      <View className="flex flex-row items-center justify-between px-7">
        <Text className="text-white font-lexendBold text-3xl">
          Coco<Text className="text-secondary">.</Text> Mov
          <Text className="text-secondary">i</Text>es
        </Text>
        <TouchableOpacity>
          <FontAwesome name="bars" size={30} color={"#475569"} />
        </TouchableOpacity>
      </View>
      <View className="flex flex-row mb-10 mt-5 justify-center items-center">
        <TextInput
          onChangeText={(text) => setSearchInput(text)}
          value={searchInput}
          style={{ width: width * 0.7 }}
          className="bg-primaryLight py-4 px-8 font-lexendRegular text-white rounded-full"
          placeholder="Enter a movie name"
          placeholderTextColor={"#475569"}
        />
        {searchInput.length > 0 ? (
          <TouchableOpacity
            onPress={() => setSearchInput("")}
            className="absolute right-[80px]"
          >
            <FontAwesome name="times-circle" size={27} color={"#475569"} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity className="absolute right-[80px]">
            <FontAwesome name="search" size={27} color={"#475569"} />
          </TouchableOpacity>
        )}
      </View>
      <TrendingCarousel />
      <MovieList title="UPCOMING" data={fruitItems} />
      <MovieList title="TOP RATED" data={fruitItems} />
      <MovieList title="FOR YOU" data={fruitItems} />
    </ScrollView>
  );
};

export default index;
