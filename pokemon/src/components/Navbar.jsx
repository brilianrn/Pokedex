import React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_TYPES } from '../queries';

export default function Navbar() {
  const history = useHistory();
  const { loading, error, data } = useQuery(GET_TYPES);

  function changePage({ event, destination }) {
    event.preventDefault();
    history.push('/' + destination);
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
    <nav className="navbar navbar-light bg-light shadow">
      {loading ? null :
        <div className="container-fluid">
          <a href='#' className="navbar-brand" onClick={(event) => { changePage({ event, destination: '' }) }}>
            <img
              src="https://i.imgur.com/vLj4CHn.png"
              alt="logo"
              style={{ width: '200px', height: '40px' }}
            />
          </a>
          <div class="dropdown">
            <a class="nav-link dropdown-toggle text text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Regions
              {/* <img src="https://i.imgur.com/1iLgb4N.png" alt="dropdown" style={{ width: '50px', marginLeft: '100px' }} /> */}
            </a>
            <div class="dropdown-content">
              {data.regions.results?.map(type => {
                return (
                  <a href="#" onClick={(event => { changePage({ event, destination: type.name }) })}>{firstWordCapital(type.name)}</a>
                )
              })}
            </div>
          </div>
          {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        </div>
      }
    </nav>
  )
}
