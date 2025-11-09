import { Button } from '@/components/ui/button'
import { useFavoritesStore } from '@/store';

type HeaderProps = {
  isFavoritesView: boolean;
  changeView: (value: boolean) => void;
}

export function Header({isFavoritesView, changeView} : HeaderProps) {
  const { characters: favorites } = useFavoritesStore();
  return (
    <header className='bg-linear-to-r from-[#E0F3F6] to-[#F9FAFB]'>
      <div className="container flex justify-between p-4">
        <h2 className='font-bold text-2xl'>Rick & Morty Browser</h2>
        <div className='flex gap-1'>
          <Button className={
            `text-md font-medium
            ${isFavoritesView 
              ? "bg-transparent hover:bg-[#d3f8fd] text-black" 
              : "bg-[#00B5CC] hover:bg-[#80dde9]"}
            `}
            onClick={() => changeView(false)}
            >All Characters</Button>
          <Button className={
            `text-md font-medium
            ${!isFavoritesView 
              ? "bg-transparent hover:bg-[#d3f8fd] text-black" 
              : "bg-[#00B5CC] hover:bg-[#80dde9]"}
            `}
            onClick={() => changeView(true)}
          >Favorites ( {favorites.length} )</Button>
        </div>
      </div>
    </header>
  )
}