import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Navbar() {
  const history = useHistory();

  function changePage({ event, destination }) {
    event.preventDefault();
    history.push('/' + destination);
  }
  return (
    <nav class="navbar navbar-light bg-light shadow">
      <div class="container-fluid">
        <a class="navbar-brand" onClick={(event) => { changePage({ event, destination: '' }) }}>
          <img
            src="https://i.imgur.com/vLj4CHn.png"
            alt="logo"
            style={{ width: '200px', height: '40px' }}
          />
        </a>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}
