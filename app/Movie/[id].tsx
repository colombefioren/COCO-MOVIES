import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
const MovieScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>{id} Movie!!!</Text>
    </View>
  );
};
export default MovieScreen;
