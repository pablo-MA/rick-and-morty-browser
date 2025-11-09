import { CharacterGrid } from "./components/characterGrid";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { type TypedDocumentNode } from "@apollo/client";
import { Header } from "./components/header"
import { useState } from 'react';
import { SearchBar } from "./components/searchBar";
import { CharacterGridSkeleton } from "./components/characterGridSkeleton";
import { Error } from "@/components/error"

type GetCharactersQuery = {
  characters: {
    info: {
      count: number;
      pages: number;
      next: number | null;
      prev: number | null;
    }
    results: Array<{
      id: string;
      name: string;
      status: string;
      species: string;
      image: string;
    }>;
  };
};

type GetCharactersQueryVariables = {
  name: string
};

const GET_CHARACTERS: TypedDocumentNode<
  GetCharactersQuery,
  GetCharactersQueryVariables
> = gql`
  query GetCharacters($name: String!) {
      characters(page: 1, filter: { name: $name }) {
        info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        image
      }
    }
  }
`;


function App() {
  const [searchName, setSearchName] = useState<string>('');

  const updateSearchName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearchName(searchValue);
  }

  // Query data from GraphQL API
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
      variables: { name: searchName },
  });
  
      // if (loading) return <CharacterGridSkeleton />;
      // if (error) return <Error errorMsg={error.message}/>
  
      console.log(data?.characters);


  return (
    <div className=''>
      <Header />
      <SearchBar searchName={searchName} onUpdate={updateSearchName}/>
      {
        error ? <Error errorMsg={error.message}/>
        : <CharacterGrid characters={data?.characters.results ?? []} loading={loading}/> 
      }
    </div>
  )
}

export default App
