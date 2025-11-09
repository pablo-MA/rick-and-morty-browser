import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Character } from "@/types/character"

type FavoritesStore = {
  characters: Character[];
  add: (character: Character) => void;
  remove: (character: Character) => void;
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set) => ({
      characters: [],
      add: (character: Character) =>
        set((state) => {
          const inFavorites = state.characters.some((ch) => ch.id === character.id);
          return inFavorites ? state : { characters: [...state.characters, character] };
        }),
      remove: (character: Character) => {
        set((state) => {
          return { characters: state.characters.filter((ch) => ch.id !== character.id) }
        })
      },
    }),
    {
      name: 'favorites-rick-and-morty',
      partialize: (state) => ({ characters: state.characters })
    }
  )
)