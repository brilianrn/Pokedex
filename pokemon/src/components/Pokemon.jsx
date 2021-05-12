import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_EVOLUTIONS } from '../queries';

export default function Pokemon({ pokemon }) {
  const [firstWord, setFirstWord] = useState('');
  const { loading, error, data } = useQuery(GET_EVOLUTIONS, {
    variables: {
      id: '' + pokemon.id
    }
  });

  loading ? console.log(typeof ('' + pokemon.id), 'loading ...') : console.log(data)

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
    <div className='container'>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4" style={{ display: 'flex', marginTop: 'auto', marginBottom: 'auto' }}>
            <img src={localStorage.image} alt={pokemon.name} style={{ width: '45em' }} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{firstWord}</h5>
              <p className="card-text"><span style={{ fontStyle: 'italic', color: '#A80008', marginRight: '32px' }}>Type</span>: {pokemon.types.map((type, i) => {
                return (
                  <>
                    {i === 0 ?
                      <span>
                        {firstWordCapital(type.type.name)}
                      </span> :
                      <span>
                        , {firstWordCapital(type.type.name)}
                      </span>
                    }
                  </>
                )
              })}
              </p>
              <p className="card-text"><span style={{ fontStyle: 'italic', color: '#A80008', marginRight: '10px' }}>Abilities</span>: {pokemon.abilities.map((ability, i) => {
                return (
                  <>
                    {i === 0 ?
                      <span>
                        {firstWordCapital(ability.ability.name)}
                      </span> :
                      <span>
                        , {firstWordCapital(ability.ability.name)}
                      </span>
                    }
                  </>
                )
              })}
              </p>
              <p className="card-text"><span style={{ fontStyle: 'italic', color: '#A80008', marginRight: '21px' }}>Moves</span>: {pokemon.moves.map((move, i) => {
                return (
                  <>
                    {i === 0 ?
                      <span>
                        {firstWordCapital(move.move.name)}
                      </span> :
                      <span>
                        , {firstWordCapital(move.move.name)}
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
