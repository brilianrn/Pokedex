import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from '../queries/index';
import { Loading, Pokemons } from '../components/index';

export default function Home() {
  const { data, error, loading } = useQuery(GET_POKEMONS);

  if (error) {
    return <h1>Error: {error}</h1>
  }

  return (
    <div className="container mt-5 mb-5">
      {loading ? <Loading /> :
        <>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            {data.pokemons.results?.map((pokemon, i) => {
              return (
                <Pokemons pokemon={pokemon} key={pokemon.name + i} />
              )
            })}
          </div>
        </>
      }
    </div>
  )
}
