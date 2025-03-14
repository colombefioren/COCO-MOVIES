import {
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { ios } from "./_layout";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { width } from ".";
import MovieAll from "@/components/MovieAll";
import { fruitItems } from "@/components/TrendingCarousel";
const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <ScrollView style={ios ? {} : { paddingTop: 40 }}>
      <View>
        <StatusBar backgroundColor="#1B2431" style="light" />
        <View style={{ width: width * 0.7 }} className="flex items-center">
          <View className="relative w-[80%]">
            <TextInput
              onChangeText={(text) => setSearchInput(text)}
              value={searchInput}
              className="bg-primaryLight py-4 px-8 font-lexendRegular text-white rounded-full focus:border focus:border-secondary"
              placeholder="Enter a movie name"
              placeholderTextColor={"#475569"}
            />
            {searchInput.length > 0 ? (
              <TouchableOpacity
                onPress={() => setSearchInput("")}
                className="absolute top-[50%] -translate-x-1/2 -translate-y-1/2 right-3"
              >
                <FontAwesome name="times-circle" size={27} color={"#475569"} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity className="absolute top-[50%] -translate-x-1/2 -translate-y-1/2 right-3">
                <FontAwesome name="search" size={27} color={"#475569"} />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View className="mt-4">
          <MovieAll search={true} data={fruitItems} />
        </View>
      </View>
    </ScrollView>
  );
};
export default Search;
