import React from 'react';

export default function Pokemons({ pokemon }) {
  return (
    <div class="col">
      <div class="card h-100">
        <img style={{ width: '20em', height: '20em' }} src={pokemon.image} class="card-img-top" alt={pokemon.name} />
        <div class="card-body">
          <h5 class="card-title">{pokemon.name}</h5>
        </div>
      </div>
    </div>
  )
}
