import { fruitItems } from "@/components/TrendingCarousel";
import { useLocalSearchParams } from "expo-router";
import { View, Text, ImageBackground, Dimensions, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();
  const { width, height } = Dimensions.get("window");
  const item = fruitItems.filter((film) => film.id === +id)[0];

  return (
    <View>
      <ImageBackground
        source={{ uri: item.image }}
        style={[styles.image, { height: height * 0.45 }]}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["transparent", "rgba(27, 36, 49, 0.6)", "#1B2431"]}
          locations={[0, 0.3, 1]}
          style={styles.gradient}
        />
      </ImageBackground>

      <View>
        <Text>{item.title}</Text>
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
  }
});