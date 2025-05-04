import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Platform,
  Pressable,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

import MovieCard from "./MovieCard";
import { useRouter } from "expo-router";
import { MovieItem } from "@/types/movieItem";
import { fetchTrendingMovies } from "@/services/tmdb";

// export const fruitItems: MovieItem[] = [
//   {
//     id: 1,
//     image:
//       "https://lumiere-a.akamaihd.net/v1/images/p_snowwhite_payoff_2d8d4ae0.jpeg",
//     title: "Snow White and the 7 dwarfs",
//   },
//   {
//     id: 2,
//     image: "https://www.ripefruitmedia.com.au/images_rfm/1223-130236796.jpg",
//     title: "Charlie and the chocolate factory",
//   },
//   {
//     id: 3,
//     image:
//       "https://www.shutterstock.com/editorial/image-editorial/MaT1Ady5O3T0M1ycOTgyNTE=/avengers-endgame-2019-poster-art-440nw-10213611aw.jpg",
//     title: "Avengers : Endgame",
//   },
//   {
//     id: 4,
//     image:
//       "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180",
//     title: "After",
//   },
//   {
//     id: 5,
//     image:
//       "https://www.shutterstock.com/editorial/image-editorial/MaT1Ady5O3T0M1ycOTgyNTE=/avengers-endgame-2019-poster-art-440nw-10213611aw.jpg",
//     title: "Avengers : Endgame",
//   },
//   {
//     id: 6,
//     image:
//       "https://www.shutterstock.com/editorial/image-editorial/MaT1Ady5O3T0M1ycOTgyNTE=/avengers-endgame-2019-poster-art-440nw-10213611aw.jpg",
//     title: "Avengers : Endgame",
//   },
// ];
// export type Items = {
//   id: number;
//   image: string;
//   title: string;
// };

const { width, height } = Dimensions.get("window");
let ios = Platform.OS == "ios";

let parallaxScrollingOffset = ios ? 165 : 150;

const TrendingCarousel = () => {
  const [trendingMovies, setTrendingMovies] = useState<MovieItem[]>([]);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    const movieData = await fetchTrendingMovies();
    setTrendingMovies(movieData);
  };

  // const length = fruitItems[0].title.length;
  // console.log(length);
  const router = useRouter();
  return (
    <ScrollView nestedScrollEnabled>
      <Text className="px-7 font-lexendSemi text-white text-lg mb-5">
        TRENDING
      </Text>
      <View className="flex items-center">
        <Carousel
          width={width}
          height={height * 0.4}
          mode="parallax"
          data={trendingMovies}
          renderItem={({ item }) => (
            <View className="flex justify-center items-center">
              <Pressable onPress={() => router.push(`/Movie/${item.id}`)}>
                <MovieCard
                  height={height}
                  trending={true}
                  width={width * 0.62}
                  item={item}
                />
              </Pressable>
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
    </ScrollView>
  );
};

export default TrendingCarousel;
