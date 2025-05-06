import { fecthGenrebyID } from "@/services/tmdb";
import { Genre } from "@/types/genre";
import { create } from "zustand";

type genreStore = {
  fetchGenre: (id: number) => Promise<string>;
};

export const useGenreStore = create<genreStore>(() => ({
  fetchGenre: async (id) => {
    try {
      const genreData = await fecthGenrebyID(id);
      return genreData.name;
    } catch (error) {
      console.error("Error while fetching genre", (error as Error).message);
    }
  },
}));
