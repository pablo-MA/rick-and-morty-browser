import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className='bg-gradient-to-r from-[#E0F3F6] to-[#F9FAFB]'>
      <div className="container flex justify-between p-4">
        <h2 className='font-bold text-2xl'>Rick & Morty Browser</h2>
        <div className='flex gap-1'>
          <Button className="bg-[#00B5CC] hover:bg-[#80dde9] text-md">All Characters</Button>
          <Button className="bg-transparent hover:bg-[#d3f8fd] text-black text-md">Favorites (  )</Button>
        </div>
      </div>
    </header>
  )
}