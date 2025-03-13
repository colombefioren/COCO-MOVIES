import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { fruitItems } from "./TrendingCarousel";
import { router } from "expo-router";
const Cast = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <View className="flex gap-5">
      <Text
        className="font-lexendSemi text-white mt-5 text-lg"
        style={{ marginLeft: 28 }}
      >
        Top Cast
      </Text>
      <Carousel
        // mode="parallax"
        data={fruitItems}
        width={width * 0.95}
        height={height * 0.16}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => router.push("/Cast/[id]")}>
            <View
              style={{ width: 75 }}
              className="flex items-center ml-5 gap-3 "
            >
              <Image
                style={{ width: 75, height: 75, borderRadius: 100 }}
                source={{ uri: item.image }}
              />
              <Text className="text-white text-center font-lexendRegular text-[13px]">
                Scarlett Johansson
              </Text>
            </View>
          </TouchableOpacity>
        )}
        // modeConfig={{
        //   parallaxAdjacentItemScale: 1,
        //   parallaxScrollingOffset: 250,
        //   parallaxScrollingScale: 1,
        // }}
        // style={{ backgroundColor: "pink" }}
      />
    </View>
  );
};
export default Cast;
