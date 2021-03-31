import React from 'react';
import { useState, useEffect } from 'react';
import kirjakauppa from '../img/kirjakauppa.png';
import banneri from '../img/banneri.png'
import '../styles/general.css';


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
    <div>
      <img style={{width: 1150}} src={banneri} alt="banneri" />
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Etusivu</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Verkkokauppa
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Ota meihin yhteyttä</a>
          </li>
          </ul>
        </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbari;



{/* 

<div class="dropdown-menu">
              <ol>
              {message.map(tuote => (
                <li key={tuote.tuotenro}>
                  <a href="http://www.google.com">{tuote.tuotenimi}</a>
                </li>
              ))}
          </ol>
        </div> */}