import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { type TypedDocumentNode } from "@apollo/client";
import { CharacterCard } from '@/components/characterCard';

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

type CharacterGridProps = {
  searchName: string;
};

export function CharacterGrid({searchName}: CharacterGridProps) {

    const { loading, error, data } = useQuery(GET_CHARACTERS, {
        variables: { name: searchName },
    });

    if (loading) return <div>Loading</div>;
    if (error) return <div>Error : {error.message}</div>;

    console.log(data?.characters);
    return data?.characters.results.map((character) => (
      <CharacterCard character={character}/>
    ));
}