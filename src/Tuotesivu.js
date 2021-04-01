import kirja from "./img/lol.png";
import "./styles/general.css";
import $ from 'jquery';


function Tuotesivu() {
  return (
    <div className="tuotesivu_content col-md-12">
      <div className="row">
        <div className=" col-md-6 col-sm-12">
          <img className="img-fluid mt-3" src={kirja} style={{width: 430, height:620}} />
          </div>
          <div className="about_book_content col-md-6 float-right">
            <div className="book_name col-md-6 text-center">
              <h3>Kirjan nimi tänne</h3>
            </div>

            <div className="funfacts col-md-6">
                Kovakantinen
                <div className="hinta">
                    25.00€
                </div>
                <hr>
                </hr>
                  <div className="row m-3">
                  <input placeholder="1" min="1" name="tekstikenttä" type="number" class="form-control col-md-4 mr-3" id="kpl_maara" />
                    <button type="button" class="btn btn-dark">
                    Lisää koriin
                </button>
                </div>
                <div className="m-3">
                    Saatavilla: 3 kpl
                </div>
            </div>

                <div className="col-12">
                <div class="dropdown m-4">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Kirjatyyppi
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Pokkari</a>
                        <a class="dropdown-item" href="#">Kovakantinen</a>
                        <a class="dropdown-item" href="#">E-kirja</a>
                    </div>
                </div>

            <div className="cart_placement col-md-6">
            </div>
            {/* availability_and_price_contents stoppi */}
          </div>{" "}
          {/* img_and_about stoppi */}
        </div>{" "}
        {/* about_book_content stoppi */}
        </div>{" "}
        {/* booktype_and_cart_content stoppi */}
      {/*rowi stoppi */}
      <div className="my-3 tuotekuvaus">
        <div className="m-3">
        <h3>Tuotekuvaus</h3>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </div>
      </div>
      <div class="container">
        <h3>Arvostelut</h3>
          <form>
          <div class="row m-3">
            <div class="col-75">
              <textarea id="subject" name="subject" placeholder="Kirjoita arvostelu.."></textarea>
            </div>
          </div>
          <div class="row ml-3">
            <input type="submit" value="Submit" />
          </div>
          </form>
        </div>      
    </div> // tuotesivu_content stoppi
  );
}
export default Tuotesivu;
