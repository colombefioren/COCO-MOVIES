import { fruitItems } from "@/components/TrendingCarousel";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { transformTime } from "@/components/MovieCard";
import { useState } from "react";

const MovieScreen = () => {
  const [more, setMore] = useState(false);
  const { id } = useLocalSearchParams();
  const { height } = Dimensions.get("window");
  const item = fruitItems.filter((film) => film.id === +id)[0];
  const router = useRouter();
  const ios = Platform.OS == "ios";
  const iconSize = ios ? 52 : 45;
  const { heure, minute } = transformTime("201");

  const ViewMore = (str: string) => {
    let desc = str;
    if (!more && str.length > 235) {
      return str.slice(0, 235) + "...";
    }
    return str;
  };

  const description = ViewMore(
    `My name is not what you think it is, I've alwaysMy name is not what you think it is, I've always My name is not what you think it is, I've always My name is not what you think it is, I've always My name is not what you think it is, I've always`
  );

  return (
    <View>
      <ImageBackground
        source={{ uri: item.image }}
        style={{ height: height * 0.44, backgroundColor: "red" }}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["transparent", "rgba(27, 36, 49, 0.6)", "#1B2431"]}
          locations={[0, 0.6, 1]}
          style={styles.gradient}
        />

        <View
          style={{ height: iconSize, width: iconSize }}
          className=" absolute  top-[75%] left-[50%] translate-x-[-50%] rounded-full bg-secondaryTrans flex items-center justify-center"
        >
          <TouchableOpacity>
            <FontAwesome
              name="play"
              size={ios ? 28 : 25}
              color={"#0688F3"}
              className="ml-2"
            />
          </TouchableOpacity>
        </View>
        <View className="flex flex-row justify-between px-5">
          <TouchableOpacity onPress={() => router.back()}>
            <FontAwesome name="chevron-left" color={"white"} size={28} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="tv" color={"white"} size={28} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View className="flex items-center justify-center px-10 w-full mt-[-25px]">
        <Text className="text-white font-lexendSemi text-center text-xl">
          {item.title}
        </Text>
      </View>
      <View className="flex flex-row justify-between px-16 mt-6">
        <View
          style={{ height: iconSize, width: iconSize }}
          className="border border-secondary flex items-center justify-center rounded-lg"
        >
          <TouchableOpacity>
            <FontAwesome
              name="download"
              color={"#0688F3"}
              size={ios ? 20 : 17}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{ height: iconSize, width: iconSize }}
          className="border border-secondary flex items-center justify-center rounded-lg"
        >
          <TouchableOpacity>
            <FontAwesome
              name="bookmark"
              color={"#0688F3"}
              size={ios ? 20 : 17}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{ height: iconSize, width: iconSize }}
          className="border border-secondary flex items-center justify-center rounded-lg"
        >
          <TouchableOpacity>
            <FontAwesome
              name="paper-plane"
              color={"#0688F3"}
              size={ios ? 20 : 17}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{ height: iconSize, width: iconSize }}
          className="border border-secondary flex items-center justify-center rounded-lg"
        >
          <TouchableOpacity>
            <FontAwesome
              name="ellipsis-h"
              color={"#0688F3"}
              size={ios ? 20 : 17}
            />
          </TouchableOpacity>
        </View>
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
      <Text className="mt-5 font-lexendRegular text-justify text-white mx-5">
        {description}
        {more && (
          <TouchableOpacity onPress={() => setMore(!more)}>
            <Text className="text-lexendRegular text-secondary">View More</Text>
          </TouchableOpacity>
        )}
        {!more && (
          <TouchableOpacity onPress={() => setMore(!more)}>
            <Text className="text-lexendRegular text-secondary">Show Less</Text>
          </TouchableOpacity>
        )}
      </Text>
    </View>
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
