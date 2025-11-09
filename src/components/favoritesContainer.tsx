import { useFavoritesStore } from '@/store';
import { FavoritesGrid } from "@/components/favoritesGrid";
import { FavoritesEmpty } from '@/components/favoritesEmpty';

export function FavoritesContainer() {
  const { characters } = useFavoritesStore();
  return (
    <>
      <FavoritesGrid />
      {characters.length === 0 && <FavoritesEmpty />}
    </>
  )
}