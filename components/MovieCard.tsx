import { Image, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MovieItem } from "@/types/movieItem";
import { image500 } from "@/services/tmdb";
import { useGenreStore } from "@/store/genre";
import { useEffect, useState } from "react";

export const transformTime = (min: number | string) => {
  const minutes = +min;
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
  item: MovieItem;
  width: number;
  height: number;
}) => {
  const [genres, setGenres] = useState<string[]>([]);
  const fetchGenre = useGenreStore((state) => state.fetchGenre);

  useEffect(() => {
    const takeGenres = async () => {
      for (let i = 0; i < item.genre_ids.length; i++) {
        const genreName = await fetchGenre(item.genre_ids[i]);
        setGenres((prev) => [...prev, genreName]);
      }
    };
    takeGenres();
  }, []);

  return trending ? (
    <Image
      className="h-full rounded-xl"
      style={{ width: width }}
      source={{
        uri:
          image500(item.poster_path) ??
          "https://theredwindows.net/wp-content/themes/koji/assets/images/default-fallback-image.png",
      }}
      resizeMode="cover"
    />
  ) : (
    <View>
      <Image
        className="h-full rounded-xl"
        style={{ width: width * 0.45, height: height * 0.3 }}
        source={{
          uri:
            image500(item.poster_path) ??
            "https://theredwindows.net/wp-content/themes/koji/assets/images/default-fallback-image.png",
        }}
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
          {item.vote_average.toFixed(1)}
        </Text>
      </View>
      <View>
        <Text
          style={{ fontFamily: "lexendRegular" }}
          className="text-white text-xs mt-1"
        >
          {sliceChara(
            `${item.release_date.split("-")[0]}   |   ${genres.join("/")}`,
            "info"
          )}
        </Text>
      </View>
    </View>
  );
};

export default MovieCard;
