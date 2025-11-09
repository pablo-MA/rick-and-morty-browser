import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group"

type SearchBarProps = {
  searchName: string;
  onUpdate: (value: string) => void;
}

export function SearchBar({ searchName, onUpdate }: SearchBarProps) {

  const clearSearch = () => {
    onUpdate('');
  }

  return (
    <div className="container flex justify-center m-5">
      <InputGroup className="w-8/10 md:w-3/4 xl:w-2/4">
        <InputGroupInput placeholder="Search characters.." value={searchName} onChange={(e) => onUpdate(e.target.value)} />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        {
          searchName !== '' && 
          <InputGroupAddon align="inline-end">
            <div className="flex size-4 items-center justify-center">
              <Button className="bg-transparent hover:bg-transparent text-primary" onClick={clearSearch}> <X /> </Button>
            </div>
          </InputGroupAddon>
        }
        </InputGroup>
    </div>
  )
}