import { fruitItems } from "@/components/TrendingCarousel";
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

const MovieScreen = () => {
  const [long, setLong] = useState(false);
  const { id } = useLocalSearchParams();
  const { height } = Dimensions.get("window");
  const item = fruitItems.filter((film) => film.id === +id)[0];
  const router = useRouter();
  const [desc, setDesc] = useState("");
  const ios = Platform.OS == "ios";
  const iconSize = ios ? 52 : 45;
  const { heure, minute } = transformTime("201");
  const [show, setShow] = useState(false);
  let description =
    "Snow White is not set typically means That’s rough. You’re basically carrying them, and they probably don’t even realize how frustrating it is for you. Maybe it’s time to start pushing back a little—like asking them what they’ve tried before giving an answer. If they haven’t even made an effort, they don’t deserve an easy solution.";

  const descLength = (str: string) => {
    if (str.length > 150) {
      setLong(true);
      setShow(false);
      setDesc(str.slice(0, 150) + "...");
    } else {
      setLong(false);
      setDesc(str);
    }
  };

  useEffect(() => {
    descLength(description);
  }, []);

  const handleMoreClick = () => {
    setDesc(description);
    setLong(false);
    setShow(true);
  };

  const handleShowClick = () => {
    setDesc(description.slice(0, 150) + "...");
    setLong(true);
    setShow(false);
  };

  return (
    <ScrollView>
      <StatusBar style="light" backgroundColor="transparent" />
      <ImageBackground
        source={{ uri: item.image }}
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
          <TouchableOpacity onPress={() => router.back()}>
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
          <Text className="font-lexendRegular text-tertiary text-sm">9.8</Text>
        </View>
        <Text className="text-white">|</Text>
        <Text className="font-lexendSemi text-white text-sm">
          {heure}h{minute}min
        </Text>
        <Text className="text-white">|</Text>
        <Text className="font-lexendSemi text-white text-sm">
          Action, Science Fiction
        </Text>
      </View>
      <View className="mt-5 mx-5">
        <Text className="font-lexendRegular text-justify text-white relative text-[13px] leading-6">
          {desc}
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
      <MovieList title="SIMILAR MOVIES" data={fruitItems} />
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
