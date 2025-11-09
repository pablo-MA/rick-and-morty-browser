import { Heart } from "lucide-react";

export function FavoritesEmpty() {
    return (
        <div className="container flex flex-col gap-4 text-center items-center justify-center">
            <Heart size={60} className="text-gray-500"/>
            <div className="text-xl font-semibold">No favorites yet</div>
            <div className="text-md text-gray-500">Start adding characters to your favorites!</div>
        </div>
    )
}