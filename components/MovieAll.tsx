import { View, FlatList, Dimensions, Pressable, Text } from "react-native";
import { Items } from "./TrendingCarousel";
import MovieCard from "./MovieCard";
import { router } from "expo-router";

const MovieAll = ({ data, search }: { data: Items[]; search: boolean }) => {
  const { width, height } = Dimensions.get("window");

  return (
    <>
      {search && (
        <Text className="text-lg ml-5 mb-4">
          <Text className="font-lexendSemi text-secondary">Results</Text>
          <Text className="font-lexendRegular text-white">{` (${data.length})`}</Text>
        </Text>
      )}
      <FlatList
        contentContainerStyle={{
          display: "flex",
          alignItems: "center",
        }}
        columnWrapperStyle={{ gap: 13 }}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <Pressable
            className="py-3"
            onPress={() => router.replace(`/Movie/${item.id}`)}
          >
            <MovieCard
              trending={false}
              item={item}
              width={width}
              height={height}
            />
          </Pressable>
        )}
        nestedScrollEnabled={true}
        scrollEnabled={false}
      />
    </>
  );
};

export default MovieAll;
