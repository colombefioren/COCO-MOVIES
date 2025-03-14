import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { fruitItems } from "./TrendingCarousel";
import { router } from "expo-router";
const Cast = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <View className="flex gap-5">
      <Text
        className="font-lexendSemi text-white mb-5 mt-7 text-lg"
        style={{ marginLeft: 28 }}
      >
        Top Cast
      </Text>
      <Carousel
        // mode="parallax"
        data={fruitItems}
        width={width * 0.95}
        height={height * 0.19}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => router.push(`/Cast/${item.id}`)}>
            <View style={{ width: 150 }} className="flex items-center gap-1">
              <Image
                style={{ width: 85, height: 85, borderRadius: 100 }}
                source={{ uri: item.image }}
              />
              <View className="flex items-center">
                <Text className="text-white text-center font-lexendRegular text-[13px]">
                  Scarlett Johansson
                </Text>
                <Text className="font-lexend text-slate-400 text-[12px] text-center">
                  Black Window
                </Text>
              </View>
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
