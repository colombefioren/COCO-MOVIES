import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Platform,
  TouchableWithoutFeedback,
  Pressable,
  FlatList,
} from "react-native";
import { Items } from "./TrendingCarousel";
import Carousel from "react-native-reanimated-carousel";
import MovieCard from "./MovieCard";
import { useRouter } from "expo-router";
const MovieList = ({ title, data }: { title: string; data: Items[] }) => {
  const { width, height } = Dimensions.get("window");
  const ios = Platform.OS === "ios";
  const parallaxScrollingOffset = ios ? 200 : 185;
  const router = useRouter();

  return (
    <View className="mt-5">
      <View className="flex flex-row px-7 justify-between items-center mt-5 mb-6">
        <Text className=" font-lexendSemi text-white text-lg ">{title}</Text>

        <TouchableOpacity className="border border-secondary rounded-lg px-5 py-3">
          <Text className="text-secondary font-lexendRegular">See all</Text>
        </TouchableOpacity>
      </View>
      <View className="ml-3">
       
        <FlatList
          nestedScrollEnabled={true}
          horizontal
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable className="mr-3" onPress={() => router.replace(`/Movie/${item.id}`)}>
              <MovieCard
                trending={false}
                item={item}
                width={width}
                height={height}
              />
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};
export default MovieList;
