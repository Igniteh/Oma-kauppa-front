import React from 'react';
import { useState, useEffect } from 'react';
import kirjakauppa from '../img/kirjakauppa.png';

const URL = "http://localhost/omadb/products/searchproducts.php";

function Navbari () {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    fetch(URL)
    .then (response => response.json())
    .then (
      (response) => {
        setMessage(response);
      },
      (error) => {
        alert(error);
      }
    )
  }, [])

    return (
      <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light ">
      <img style={{width: 170, height: 70}} src={kirjakauppa} />
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
  
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <ol>
                  {message.map(tuote => (
                      <li key={tuote.tuotenro}>
                        <a href="http://www.google.com">{tuote.tuotenimi}</a>
                        </li>
                  ))}
              </ol>
              </div>
          </li>
          <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
          </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
          </form>
      </div>
      </nav>
      </div>
    );
}

export default Navbari;