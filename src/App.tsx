import { CharacterGrid } from "./components/characterGrid";
import { Header } from "./components/header"

function App() {

  return (
    <div className=''>
      <Header />
      <div className="container grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 mt-10 gap-4 justify-items-center">
        <CharacterGrid />
      </div>
    </div>
  )
}

export default App
