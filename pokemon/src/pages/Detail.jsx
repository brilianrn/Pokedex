import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_DETAIL } from '../queries';
import { Loading, Pokemon } from '../components';

export default function Detail() {
  const { name } = useParams();
  const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
    variables: {
      name
    }
  });

  if (error) {
    return <h1>Error: {error}</h1>
  }

  return (
    <div className='container mt-5'>
      {loading ? <Loading /> :
        <Pokemon pokemon={data.pokemon} />
      }
    </div>
  )
}
