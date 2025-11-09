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
import { CharacterContainer } from "@/components/characterContainer";
import { FavoritesContainer } from "./components/favoritesContainer";

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
