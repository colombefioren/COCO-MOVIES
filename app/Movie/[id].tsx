import { useLocalSearchParams, useRouter } from "expo-router";
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { transformTime } from "@/components/MovieCard";
import { useEffect, useState } from "react";
import Cast from "@/components/Cast";
import MovieList from "@/components/MovieList";
import { fetchMovieByID, image500 } from "@/services/tmdb";
import { MovieItem } from "@/types/movieItem";
import { useGenreStore } from "@/store/genre";

const MovieScreen = () => {
  const [genres, setGenres] = useState<string[]>([]);
  const [long, setLong] = useState(false);
  const { id } = useLocalSearchParams();
  const { height } = Dimensions.get("window");
  const router = useRouter();
  const [desc, setDesc] = useState("");
  const [descToShow, setDescToShow] = useState("");
  const ios = Platform.OS == "ios";
  const iconSize = ios ? 52 : 45;
  const [show, setShow] = useState(false);
  const [item, setItem] = useState<MovieItem>();
  const [duration, setDuration] = useState({ heure: 0, minute: 0 });

  const fetchGenre = useGenreStore((state) => state.fetchGenre);

  const getCurrentItem = async (id: number) => {
    const currentMovieData = await fetchMovieByID(id);
    setItem(currentMovieData);
    const overview = currentMovieData?.overview || "";
    setDesc(overview);
    descLength(overview);
    const { heure, minute } = transformTime(`${currentMovieData?.runtime}`);
    setDuration({ heure, minute });
  };

  const descLength = (str: string) => {
    if (str.length > 150) {
      setLong(true);
      setShow(false);
      setDescToShow(str.slice(0, 150) + "...");
    } else {
      setLong(false);
      setDescToShow(desc);
    }
  };

  const takeGenres = async (item: MovieItem | undefined) => {
    if (item) {
      for (let i = 0; i < item.genre_ids.length; i++) {
        const genreName = await fetchGenre(item.genre_ids[i]);
        setGenres((prev) => [...prev, genreName]);
      }
    }
  };

  useEffect(() => {
    getCurrentItem(+id);
    takeGenres(item);
    console.log(genres)
  }, [id]);

  const handleMoreClick = () => {
    setDescToShow(desc);
    setLong(false);
    setShow(true);
  };

  const handleShowClick = () => {
    setDescToShow(desc.slice(0, 150) + "...");
    setLong(true);
    setShow(false);
  };

  return (
    <ScrollView>
      <StatusBar style="light" backgroundColor="transparent" />
      {item && (
        <>
          <ImageBackground
            source={{
              uri:
                image500(item.poster_path) ??
                "https://theredwindows.net/wp-content/themes/koji/assets/images/default-fallback-image.png",
            }}
            style={{ height: height * 0.48, backgroundColor: "red" }}
            resizeMode="cover"
          >
            <LinearGradient
              colors={["transparent", "rgba(27, 36, 49, 0.6)", "#1B2431"]}
              locations={[0, 0.6, 1]}
              style={styles.gradient}
            />

            <TouchableOpacity className="absolute  top-[75%] left-[50%] translate-x-[-50%]">
              <View
                style={{ height: iconSize, width: iconSize }}
                className="rounded-full bg-secondaryTrans flex items-center justify-center"
              >
                <FontAwesome
                  name="play"
                  size={ios ? 28 : 25}
                  color={"#0688F3"}
                  className="ml-2"
                />
              </View>
            </TouchableOpacity>
            <View
              className="flex flex-row justify-between px-5"
              style={ios ? { marginTop: 60 } : { marginTop: 30 }}
            >
              <TouchableOpacity onPress={() => router.push("/")}>
                <FontAwesome name="chevron-left" color={"white"} size={25} />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome name="tv" color={"white"} size={25} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View className="flex items-center justify-center px-10 w-full mt-[-25px]">
            <Text className="text-white font-lexendSemi text-center text-xl">
              {item.title}
            </Text>
          </View>
          <View className="flex flex-row justify-between px-16 mt-6">
            <TouchableOpacity>
              <View
                style={{ height: iconSize, width: iconSize }}
                className="border border-secondary flex items-center justify-center rounded-lg"
              >
                <FontAwesome
                  name="download"
                  color={"#0688F3"}
                  size={ios ? 20 : 17}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{ height: iconSize, width: iconSize }}
                className="border border-secondary flex items-center justify-center rounded-lg"
              >
                <FontAwesome
                  name="bookmark"
                  color={"#0688F3"}
                  size={ios ? 20 : 17}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{ height: iconSize, width: iconSize }}
                className="border border-secondary flex items-center justify-center rounded-lg"
              >
                <FontAwesome
                  name="paper-plane"
                  color={"#0688F3"}
                  size={ios ? 20 : 17}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{ height: iconSize, width: iconSize }}
                className="border border-secondary flex items-center justify-center rounded-lg"
              >
                <FontAwesome
                  name="ellipsis-h"
                  color={"#0688F3"}
                  size={ios ? 20 : 17}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row mt-5 gap-5 ml-5">
            <View className="flex flex-row gap-3 items-center">
              <FontAwesome name="star" color={"#EF9730"} size={17} />
              <Text className="font-lexendRegular text-tertiary text-sm">
                {item.vote_average.toFixed(1)}
              </Text>
            </View>
            <Text className="text-white">|</Text>
            <Text className="font-lexendSemi text-white text-sm">
              {duration.heure}h{duration.minute}min
            </Text>
            <Text className="text-white">|</Text>
            <Text className="font-lexendSemi text-white text-sm">
              {genres.join(",")}
            </Text>
          </View>
          <View className="mt-5 mx-5">
            <Text className="font-lexendRegular text-justify text-white relative text-[13px] leading-6">
              {descToShow}
            </Text>
            {long && (
              <TouchableOpacity className="mt-1" onPress={handleMoreClick}>
                <Text className="font-lexendRegular text-secondary text-[13px] w-24">
                  View More
                </Text>
              </TouchableOpacity>
            )}
            {show && (
              <TouchableOpacity className="mt-1" onPress={handleShowClick}>
                <Text className="font-lexendRegular text-secondary text-[13px]">
                  Show Less
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <Cast />
          {/* <MovieList title="SIMILAR MOVIES" data={fruitItems} /> */}
        </>
      )}
    </ScrollView>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  gradient: {
    height: "100%",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
});
