import { CharacterGrid } from "./components/characterGrid";
import { Header } from "./components/header"
import { useState } from 'react';
import { SearchBar } from "./components/searchBar";

function App() {
  const [searchName, setSearchName] = useState<string>('');

  const updateSearchName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearchName(searchValue);
  }

  return (
    <div className=''>
      <Header />
      <SearchBar searchName={searchName} onUpdate={updateSearchName}/>
      <div className="container grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 mt-10 gap-4 justify-items-center">
        <CharacterGrid searchName={searchName}/>
      </div>
    </div>
  )
}

export default App
