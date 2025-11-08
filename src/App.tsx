import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { type TypedDocumentNode } from "@apollo/client";

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

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { name: 'Morty' },
  });

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error : {error.message}</div>;

  console.log(data)

  return (
    <div className='p-2 max-w-7xl mx-auto'>
      <h1 className="text-2xl font-bold">Rick and Morty Browser</h1>
    </div>
  )
}

export default App
