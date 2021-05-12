import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FILTER_POKEMONS } from '../queries';
import { Loading } from '../components';

export default function PokemonFilter() {
  const { region } = useParams();
  const { loading, error, data } = useQuery(FILTER_POKEMONS, {
    variables: {
      region
    }
  })

  if (error) {
    return <h1>Error: {error}</h1>
  }

  function firstWordCapital(word) {
    let tempFirstWord = word[0].toUpperCase();
    let tempWord = '';

    for (let i = 0; i < word.length; i++) {
      if (i !== 0) {
        tempWord += word[i];
      }
    }

    return tempFirstWord + tempWord;
  }

  return (
    <div className="container mt-5 mb-5">
      {loading ? <Loading /> :
        <>
          <b>Region Name
              <span style={{ marginLeft: '12px' }}>: {firstWordCapital(region)}</span>
          </b><br />
          <b>Amounts
              <span style={{ marginLeft: '45px' }}>: {data.region.response.locations?.length} pcs</span>
          </b>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <table class="table table-hover text text-center table-bordered">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Url</th>
                </tr>
              </thead>
              <tbody>
                {data.region.response.locations?.map((pokemon, i) => {
                  return (
                    <tr>
                      <th scope="row">{i + 1}</th>
                      <td>{firstWordCapital(pokemon.name)}</td>
                      <td>
                        <a href={pokemon.url}>
                          {pokemon.url}
                        </a>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </>
      }
    </div>
  )
}
