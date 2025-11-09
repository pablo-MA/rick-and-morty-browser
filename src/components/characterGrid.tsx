import type { Character } from '@/types/character'
import { CharacterCard } from './characterCard';
import { CharacterGridSkeleton } from './characterGridSkeleton';
import { useFavoritesStore } from '@/store'

type CharacterGridProps = {
  characters: Character[];
  loading: boolean;
};

export function CharacterGrid({characters, loading = false}: CharacterGridProps) {
    const { add } = useFavoritesStore();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 my-10 gap-4 justify-items-center xl:justify-items-normal">
            {!loading 
            ? characters.map((character) => (<CharacterCard character={character} onClick={add}/>))
            : <CharacterGridSkeleton />}
        </div>
    )
}