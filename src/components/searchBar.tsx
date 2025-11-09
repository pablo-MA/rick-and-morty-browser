import { Search } from "lucide-react"
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group"

type SearchBarProps = {
  searchName: string;
  onUpdate: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchBar({ searchName, onUpdate }: SearchBarProps) {

  return (
    <div className="container flex justify-center m-5">
      <InputGroup className="w-8/10 md:w-3/4 xl:w-2/4">
        <InputGroupInput placeholder="Search characters.." value={searchName} onChange={onUpdate} />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}