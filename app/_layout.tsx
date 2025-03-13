import { Stack } from "expo-router";
import "../global.css";
import { useFonts } from "expo-font";
import { Platform, SafeAreaView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const ios = Platform.OS === "ios";
  const [fontsLoaded] = useFonts({
    lexend: require("../assets/fonts/Lexend-ExtraLight.ttf"),
    lexendRegular: require("../assets/fonts/Lexend-Light.ttf"),
    lexendBold: require("../assets/fonts/Lexend-ExtraBold.ttf"),
    lexendSemi: require("../assets/fonts/Lexend-SemiBold.ttf"),
  });

  // style={ios ? {} : {paddingTop : 30}}
  if (!fontsLoaded) return <Text>Loading fonts...</Text>;
  return (
    <View
      className="flex-1 bg-primary"
      style={ios ? { marginTop: 50 } : { paddingTop: 30 }}
    >
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#1B2431" },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="Movie/[id]" />
        <Stack.Screen name="Cast/[id]"/>
      </Stack>
    </View>
  );
}
