import React, { useEffect, useState } from 'react';

export default function Pokemon({ pokemon }) {
  const [firstWord, setFirstWord] = useState('');

  useEffect(() => {
    let tempFirstWord = pokemon.name[0].toUpperCase();
    let tempWord = '';

    for (let i = 0; i < pokemon.name.length; i++) {
      if (i !== 0) {
        tempWord += pokemon.name[i];
      }
    }

    setFirstWord(tempFirstWord + tempWord);
  }, []);

  console.log(pokemon, '----------')

  return (
    <div className='container'>
      <div class="card mb-3">
        <div class="row g-0">
          <div className="col-md-4" style={{ display: 'flex', marginTop: 'auto', marginBottom: 'auto' }}>
            <img src={localStorage.image} alt={pokemon.name} style={{ width: '45em' }} />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{firstWord}</h5>
              <p class="card-text">Type : {pokemon.types.map((type, i) => {
                return (
                  <>
                    {i == 0 ?
                      <span>
                        {type.type.name}
                      </span> :
                      <span>
                        , {type.type.name}
                      </span>
                    }
                  </>
                )
              })}
              </p>
              <p class="card-text">Abilities : {pokemon.abilities.map((ability, i) => {
                return (
                  <>
                    {i == 0 ?
                      <span>
                        {ability.ability.name}
                      </span> :
                      <span>
                        , {ability.ability.name}
                      </span>
                    }
                  </>
                )
              })}
              </p>
              <p class="card-text">Moves : {pokemon.moves.map((move, i) => {
                return (
                  <>
                    {i == 0 ?
                      <span>
                        {move.move.name}
                      </span> :
                      <span>
                        , {move.move.name}
                      </span>
                    }
                  </>
                )
              })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
