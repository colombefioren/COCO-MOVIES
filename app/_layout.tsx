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

  if (!fontsLoaded) return <Text>Loading fonts...</Text>;
  return (
    <SafeAreaView style={ios ? {} : {paddingTop : 30}} className="flex-1 bg-primary">
      <StatusBar backgroundColor="#1B2431" style="light"/>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#1B2431" },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="Movie/[id]" />
      </Stack>
    </SafeAreaView>
  );
}
