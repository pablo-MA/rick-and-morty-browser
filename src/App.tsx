import { CharacterGrid } from "./components/characterGrid";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { type TypedDocumentNode } from "@apollo/client";
import { Header } from "./components/header"
import { useState, useEffect } from 'react';
import { SearchBar } from "./components/searchBar";
import { Error } from "@/components/error";
import { EmptyMsg } from "@/components/emptyMsg";
import { useDebounce } from "@/hooks/useDebounce";
import { GridPagination } from "./components/gridPagination";
import type { Info, Character } from "@/types/character";

type GetCharactersQuery = {
  characters: {
    info: Info;
    results: Array<Character>;
  };
};

type GetCharactersQueryVariables = {
  name: string;
  page: number;
};

const GET_CHARACTERS: TypedDocumentNode<
  GetCharactersQuery,
  GetCharactersQueryVariables
> = gql`
  query GetCharacters($page: Int, $name: String!) {
      characters(page: $page, filter: { name: $name }) {
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
  // Searchbar states
  const [searchName, setSearchName] = useState<string>('');

  // Pagination state1
  const [currPage, setCurrPage] = useState<number>(1);

  // Debounce on searchName input and calls reset Page
  const debouncedSearch = useDebounce(searchName);

  useEffect(() => {
    setCurrPage(1);
  }, [debouncedSearch]);

  // Query data from GraphQL API
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
      variables: { 
        page: currPage,
        name: debouncedSearch 
      },
  });

  const resetSearch = () => {
    setSearchName('');
    setCurrPage(1);
  }

  return (
    <div>
      <Header />
      <SearchBar searchName={searchName} onChange={setSearchName} reset={resetSearch}/>
      {
        error ? <Error errorMsg={error.message}/>
        : <CharacterGrid characters={data?.characters.results ?? []} loading={loading}/>
        // : data && data.characters.results.length !== 0 
        //   ? <CharacterGrid characters={data.characters.results} loading={loading}/> 
        //   : <EmptyMsg /> 
      }
      {
        (data?.characters.results) && <EmptyMsg />
      }
      {data?.characters.info.pages && <GridPagination info={data.characters.info} currPage={currPage} changePage={setCurrPage}/>}
    </div>
  )
}

export default App
