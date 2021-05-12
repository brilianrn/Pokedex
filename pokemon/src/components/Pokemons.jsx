import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function Pokemons({ pokemon }) {
  const [firstWord, setFirstWord] = useState('');
  const history = useHistory();

  useEffect(() => {
    let tempFirstWord = pokemon.name[0].toUpperCase();
    let tempWord = '';

    localStorage.removeItem('image')

    for (let i = 0; i < pokemon.name.length; i++) {
      if (i !== 0) {
        tempWord += pokemon.name[i];
      }
    }

    setFirstWord(tempFirstWord + tempWord);
  }, []);

  function changePage({ event, name, img }) {
    event.preventDefault();
    localStorage.setItem('image', img);
    history.push('/detail/' + name)
  }

  return (
    <div className="col">
      <a href="#" style={{ textDecoration: 'none' }} onClick={(event) => { changePage({ event, name: pokemon.name, img: pokemon.image }) }} >
        <div className="card h-100">
          <img style={{ width: '20em', height: '20em', display: 'flex', marginLeft: 'auto', marginRight: 'auto' }} src={pokemon.image} className="card-img-top" alt={pokemon.name} />
          <div className="card card-body" style={{ backgroundColor: 'black' }}>
            <h5 className="card-title text text-center text-light">{firstWord}</h5>
          </div>
        </div>
      </a>
    </div>
  )
}
