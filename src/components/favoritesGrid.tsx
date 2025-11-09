import { useFavoritesStore } from '@/store';
import { CharacterCard } from '@/components/characterCard';

export function FavoritesGrid() {
  const { characters: favorites } = useFavoritesStore();

  return  (
    <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 my-10 gap-4 justify-items-center xl:justify-items-normal">
        {favorites?.map((character) =><CharacterCard character={character} />)}
    </div>
  );
}
