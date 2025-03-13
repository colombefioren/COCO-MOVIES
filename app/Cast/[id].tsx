import MovieList from "@/components/MovieList";
import { fruitItems } from "@/components/TrendingCarousel";
import { FontAwesome } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
const CastScreen = () => {
  const [favourite, setFavourite] = useState(false);
  const { id } = useLocalSearchParams();
  const actor = fruitItems.filter((item) => item.id === +id)[0];

  const [long, setLong] = useState(false);
  const [bio, setBio] = useState("");
  const ios = Platform.OS == "ios";
  const [show, setShow] = useState(false);
  let biography =
    "Snow White is not set typically means That’s rough. You’re basically carrying them, and they probably don’t even realize how frustrating it is for you. Maybe it’s time to start pushing back a little—like asking them what they’ve tried before giving an answer. If they haven’t even made an effort, they don’t deserve an easy solution.";

  const bioLength = (str: string) => {
    if (str.length > 150) {
      setLong(true);
      setShow(false);
      setBio(str.slice(0, 150) + "...");
    } else {
      setLong(false);
      setBio(str);
    }
  };

  useEffect(() => {
    bioLength(biography);
  }, []);

  const handleMoreClick = () => {
    setBio(biography);
    setLong(false);
    setShow(true);
  };

  const handleShowClick = () => {
    setBio(biography.slice(0, 150) + "...");
    setLong(true);
    setShow(false);
  };

  return (
    <ScrollView>
      <View className="flex items-center justify-center mt-5 gap-10">
        <View className="flex items-center justify-center gap-5 relative w-full">
          <Image
            source={{ uri: actor.image }}
            className="w-60 h-60 rounded-full"
            resizeMode="cover"
          />
          <View className="flex gap-1">
            <Text className="text-center font-lexendBold text-secondary text-2xl">
              Diane Vett
            </Text>
            <Text className="text-center font-lexend text-slate-400 text-[12px]">
              Alameda Country, California, USA
            </Text>
          </View>
          <View className="flex w-full flex-row justify-between px-5 absolute top-0">
            <TouchableOpacity onPress={() => router.back()}>
              <FontAwesome name="chevron-left" color={"white"} size={25} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setFavourite(!favourite)}>
              <FontAwesome
                name="heart"
                color={favourite ? "#EF9730" : "white"}
                size={25}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View className="bg-secondaryTrans rounded-full py-3 flex flex-row">
          <View className="flex items-center gap-1 border-r-2 border-r-white px-6">
            <Text className="text-white font-lexendSemi">Gender</Text>
            <Text className="text-white font-lexend">Male</Text>
          </View>
          <View className="flex items-center gap-1 border-r-2 border-r-white px-6">
            <Text className="text-white font-lexendSemi">Birthday</Text>
            <Text className="text-white font-lexend">1987-07-18</Text>
          </View>
          <View className="flex items-center gap-1 px-6">
            <Text className="text-white font-lexendSemi">Popularity</Text>
            <Text className="text-white font-lexend">86.72 %</Text>
          </View>
        </View>
      </View>
      <View className="mx-5 mt-10">
        <Text className="font-lexendSemi text-white text-lg ml-2">
          BIOGRAPHY
        </Text>
        <Text className="mt-5 font-lexendRegular text-justify text-white relative text-[13px] leading-6">
          {bio}
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
      <MovieList title="MOVIES" data={fruitItems} />
    </ScrollView>
  );
};
export default CastScreen;
