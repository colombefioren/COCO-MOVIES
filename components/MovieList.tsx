import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Platform,
  TouchableWithoutFeedback,
  Pressable,
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
    <View>
      <View className="flex flex-row px-7 justify-between items-center my-5">
        <Text className=" font-lexendSemi text-white text-lg ">{title}</Text>

        <TouchableOpacity className="border border-secondary rounded-lg px-5 py-3">
          <Text className="text-secondary font-lexendRegular">See all</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Carousel
          width={width}
          height={height * 0.39}
          data={data}
          // mode="parallax"
          renderItem={({ item }) => (
            <Pressable onPress={() => router.replace(`/Movie/${item.id}`)}>
              <MovieCard
                trending={false}
                item={item}
                width={width}
                height={height}
              />
            </Pressable>
          )}
          // modeConfig={{
          //   parallaxAdjacentItemScale: 1,
          //   parallaxScrollingOffset: parallaxScrollingOffset,
          //   parallaxScrollingScale: 1,
          // }}
          // style={{backgroundColor:"pink"}}
        />
      </View>
    </View>
  );
};
export default MovieList;
