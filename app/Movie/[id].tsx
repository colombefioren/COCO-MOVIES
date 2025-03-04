import { fruitItems } from "@/components/TrendingCarousel";
import { useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();
  const { height } = Dimensions.get("window");
  const item = fruitItems.filter((film) => film.id === +id)[0];

  return (
    <View>
      <StatusBar style="light"/>
      <ImageBackground
        source={{ uri: item.image }}
        style={{ height: height * 0.5, backgroundColor: "red" }}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["transparent", "rgba(27, 36, 49, 0.6)", "#1B2431"]}
          locations={[0, 0.6, 1]}
          style={styles.gradient}
        />

        <View className=" absolute  top-[75%] left-[50%] translate-x-[-50%] h-14 w-14 rounded-full bg-secondaryTrans flex items-center justify-center">
          <TouchableOpacity>
            <FontAwesome
              name="play"
              size={25}
              color={"#0688F3"}
              className="ml-1"
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View className="flex items-center justify-center px-10 w-full mt-[-25px]">
        <Text className="text-white font-lexendSemi text-center text-lg">
          {item.title}
        </Text>
      </View>
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
