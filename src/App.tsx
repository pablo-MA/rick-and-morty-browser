import { CharacterGrid } from "./components/characterGrid";

function App() {

  return (
    <div className='p-2 max-w-7xl mx-auto'>
      <h1 className="text-2xl font-bold">Rick and Morty Browser</h1>
      <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 mt-10 gap-4 justify-items-center">
        <CharacterGrid />
      </div>
    </div>
  )
}

export default App
