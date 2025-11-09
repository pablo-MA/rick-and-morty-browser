import type { Character } from '@/types/character';
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const statusColors: Record<string, string> = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-gray-500",
};

type CharacterCardProps = {
    character: Character;
    onClick: (character: Character) => void;
}

export function CharacterCard({ character, onClick }: CharacterCardProps){
    // Only for testing, should be removed
    const isFavorite = true

    return ( 
        <Card key={character.id} className='transition-transform duration-200 hover:-translate-y-1 hover:shadow-md' onClick={() => onClick(character)}>
            <CardContent className='relative'>
            <img src={character.image} className='w-[400px]'/>
            <div className="rounded-full absolute top-3 right-3 bg-white">
                <Heart className={`
                m-1 p-1 transition
                ${isFavorite 
                    ? "text-red-600 fill-red-600" 
                    : "text-black"}
                `}
                />
                </div>
            </CardContent>
            <CardFooter>
            <div className='flex flex-col text-left gap-1'>
                <div className='font-bold'>{character.name}</div>
                <Badge variant='secondary'>
                <span 
                    className={`
                    inline-block mr-1 size-2 rounded-full 
                    ${statusColors[character.status] ?? "bg-gray-500"}`
                    }></span>
                {character.status}
                </Badge>
                <div className="font-thin text-xs text-gray-500">{character.species}</div>
            </div>
            </CardFooter>
        </Card>
    )
}