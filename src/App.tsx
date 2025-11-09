import { Header } from "./components/header"
import { useState } from 'react';
import { CharacterContainer } from "@/components/characterContainer";
import { FavoritesContainer } from "./components/favoritesContainer";

function App() {
  // container states
  const [isFavoritesView , setIsFavoritesView ] = useState<boolean>(false);

  return (
    <div>
      <Header isFavoritesView={isFavoritesView} changeView={setIsFavoritesView}/>
      <main className="container">
        {!isFavoritesView
          ? <CharacterContainer />
          : <FavoritesContainer />
        }
      </main>
    </div>
  )
}

export default App
