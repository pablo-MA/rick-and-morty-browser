import type { Character } from '@/types/character';
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useFavoritesStore } from '@/store';

const statusColors: Record<string, string> = {
  Alive: "bg-green-500",
  Dead: "bg-red-500",
  unknown: "bg-gray-500",
};

type CharacterCardProps = {
  character: Character;
}

export function CharacterCard({ character }: CharacterCardProps) {
  const { characters: favorites, add, remove } = useFavoritesStore();

  const isFavorite = favorites.some((fav) => fav.id === character.id)

  const toggleFavorite = () => {
    if (isFavorite) {
      remove(character);
    } else {
      add(character);
    }
  };

  return (
    <Card key={character.id} className='transition-transform duration-200 hover:-translate-y-1 hover:shadow-md'>
      <CardContent className='relative'>
        <img src={character.image} className='w-[400px]' />
        <div className="w-9 h-9 rounded-full absolute top-3 right-3 bg-white flex items-center justify-center cursor-pointer"
          onClick={toggleFavorite}
        >
          <Heart size={20} className={
            `transition duration-400 ease-in-out
            ${isFavorite
              ? "text-red-600 fill-red-600"
              : "text-[#4A5565] fill-transparent"}
            `}
          />
        </div>
      </CardContent>
      <CardFooter>
        <div className='flex flex-col text-left gap-1'>
          <div className='font-bold text-lg'>{character.name}</div>
          <Badge variant='secondary'>
            <span
              className={
                `inline-block mr-1 size-2 rounded-full 
                ${statusColors[character.status] ?? "bg-gray-500"}
                `}
            >
            </span>
            {character.status}
          </Badge>
          <div className="font-normal text-sm text-gray-500">{character.species}</div>
        </div>
      </CardFooter>
    </Card>
  )
}