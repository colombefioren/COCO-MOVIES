import { Image, View, Text, TouchableWithoutFeedback } from "react-native";
import { Items } from "./TrendingCarousel";
import { FontAwesome } from "@expo/vector-icons";

export const transformTime = (min: number | string) => {
  const minutes = +min; // Convert to number
  const heure = Math.floor(minutes / 60);
  const minute = minutes % 60;

  return { heure, minute };
};

export const sliceChara = (str: string, status: string) => {
  const maxLength = status === "title" ? 20 : 27;
  return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
};

const MovieCard = ({
  trending,
  item,
  width,
  height,
}: {
  trending: boolean;
  item: Items;
  width: number;
  height: number;
}) => {
  const { heure, minute } = transformTime("196");

  return trending ? (
    <TouchableWithoutFeedback>
      <Image
        className="h-full rounded-xl"
        style={{ width: width }}
        source={{ uri: item.image }}
        resizeMode="cover"
      />
    </TouchableWithoutFeedback>
  ) : (
    <TouchableWithoutFeedback>
      <View className="ml-3">
        <Image
          className="h-full rounded-xl"
          style={{ width: width * 0.45, height: height * 0.3 }}
          source={{ uri: item.image }}
          resizeMode="cover"
        />
        <View>
          <Text
            style={{ fontFamily: "lexendRegular" }}
            className="text-white mt-1"
          >
            {sliceChara(item.title, "title")}
          </Text>
        </View>
        <View className="flex flex-row items-center gap-3 mt-1">
          <FontAwesome color={"#EF9730"} name="star" size={17} />
          <Text style={{ fontFamily: "lexend" }} className="text-white">
            4.2
          </Text>
        </View>
        <View>
          <Text
            style={{ fontFamily: "lexendRegular" }}
            className="text-white text-xs mt-1"
          >
            {sliceChara(
              `${heure}h ${minute}min   |   Action/Adventure`,
              "info"
            )}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MovieCard;
