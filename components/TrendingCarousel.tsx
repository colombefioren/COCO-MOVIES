import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  ScrollView,
  Platform,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import MovieCard from "./MovieCard";
import { useRouter } from "expo-router";

export const fruitItems: Items[] = [
  {
    id: 1,
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_snowwhite_payoff_2d8d4ae0.jpeg",
    title: "Snow White and the 7 dwarfs",
  },
  {
    id: 2,
    image: "https://www.ripefruitmedia.com.au/images_rfm/1223-130236796.jpg",
    title: "Charlie and the chocolate factory",
  },
  {
    id: 3,
    image:
      "https://www.shutterstock.com/editorial/image-editorial/MaT1Ady5O3T0M1ycOTgyNTE=/avengers-endgame-2019-poster-art-440nw-10213611aw.jpg",
    title: "Avengers : Endgame",
  },
];
export type Items = {
  id: number;
  image: string;
  title: string;
};

const { width, height } = Dimensions.get("window");
let ios = Platform.OS == "ios";

let parallaxScrollingOffset = ios ? 165 : 150;

const TrendingCarousel = () => {
  return (
    <View>
      <Text className="px-7 font-lexendSemi text-white text-lg mb-5">
        TRENDING
      </Text>
      <View className="flex items-center">
        <Carousel
          width={width}
          height={height * 0.4}
          mode="parallax"
          data={fruitItems}
          renderItem={({ item }) => (
            <View className="flex justify-center items-center">
              <TouchableWithoutFeedback>
                <MovieCard
                  height={height}
                  trending={true}
                  width={width * 0.62}
                  item={item}
                />
              </TouchableWithoutFeedback>
            </View>
          )}
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
          modeConfig={{
            parallaxScrollingScale: 0.95,
            parallaxScrollingOffset: parallaxScrollingOffset,
            parallaxAdjacentItemScale: 0.8,
          }}
        />
      </View>
    </View>
  );
};

export default TrendingCarousel;
