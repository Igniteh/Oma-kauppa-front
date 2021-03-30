
import kirja from './img/lol.png';
import './styles/general.css';

function Tuotesivu() {
    return (

    <div className="kontenttia col-12 col-lg-12">
      <div className="row">
        <div className=" mt-4 col-md-6 col-lg-5">
        <img className="bookplacement" style={{width: 300, height: 400}} src={kirja} />
        </div>
      
        <div class="mt-4 col-md-6 col-lg-7">
          <h2>$NAME :CURSED JOY:</h2>

          <p> - AIKA PORNOO </p>
          <p> 666 kpl </p>
          <p> 69 egee </p>

          <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Valitse kirjatyyppi
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Kovakantinen</a></li>
    <li><a class="dropdown-item" href="#">Pokkari</a></li>
    <li><a class="dropdown-item" href="#">e-Kirja</a></li>
  </ul>
</div>
        </div>
      </div>
    </div>
    
    )
}
export default Tuotesivu;