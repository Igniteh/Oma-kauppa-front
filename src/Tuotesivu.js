import kirja from "./img/lol.png";
import "./styles/general.css";
import $ from 'jquery';


function Tuotesivu() {
  return (
    <div className="tuotesivu_content col-md-12">
      <div className="row">
        {/* picture alku */}
        <div className="picture col-md-6 col-sm-12">
          <img className="img-fluid mt-4 ml-md-2" src={kirja}/>
          </div>
          {/* picture stoppi */}
          {/* about_book_content */}
          <div className="about_book_content col-md-6">
            <div className="book_name col-md-12 col-sm-12 text-center">
              <h3>Kirjan nimi tänne</h3>
            </div>
            {/* funfacts alku */}
            <div className="funfacts col-md-12 text-center">
                Kovakantinen
                <div className="hinta text-center">
                    25.00€
                </div>
                <hr></hr>
                {/* add_to_cart alku */}
                  <div className="add_to_cart row col-md-12">
                  <input placeholder="1" min="1" name="tekstikenttä" type="number" class="form-control col-md-2 mr-3" id="kpl_maara" />
                    <button type="button" class="btn btn-secondary">
                    Lisää koriin
                </button>
                  </div>
                  {/* add_to_cart_stoppi */}
                <div className="available m-3">
                    Saatavilla: 3 kpl
                </div>
                {/* booktype alku */}
                <div class="booktype dropdown m-4 text-center">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Kirjatyyppi
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Pokkari</a>
                        <a class="dropdown-item" href="#">Kovakantinen</a>
                        <a class="dropdown-item" href="#">E-kirja</a>
                    </div>
                </div>
                {/* booktype stoppi */}
            </div> 
            {/* funfacts stoppi */}
          </div>
          {/* about_book_content stoppi */}
      </div>
      {/* rowi stoppi */}
      {/* tuotekuvaus alku */}
      <div className="my-3 tuotekuvaus">
        <div className="m-3">
        <h3>Tuotekuvaus</h3>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </div>
      </div>
      {/* tuotekuvaus stoppi */}
      {/* review alku */}
      <div class="review">
        <h3>Arvostelut</h3>
          <form>
          <div class="row m-3">
            <div class="col-75">
              <textarea id="subject" name="subject" placeholder="Kirjoita arvostelu.."></textarea>
            </div>
          </div>
          <div class="row ml-3">
            <input className="btn-secondary col-sm-12 col-md-6 col-lg-2 mr-3" type="submit" value="Submit" />
          </div>
          </form>
        </div> 
        {/* review stoppi */}
    </div> 
    // tuotesivu_content stoppi
  );
}
export default Tuotesivu;
