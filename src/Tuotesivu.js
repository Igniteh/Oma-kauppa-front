import kirja from "./img/lol.png";
import "./styles/general.css";

function Tuotesivu() {
  return (
    <div className="tuotesivu_content col-12">
      <div className="row">
        <div className=" col-6">
          <img className="bookplacement img-fluid" src={kirja} />
          </div>
          <div className="about_book_content col-6 float-right">
            <div className="book_name col-6">
              <h3>$Name</h3>
            </div>

            <div className="funfacts col-md-6">
              <ul>
                <li>funfact</li>
                <li>funfact</li>
                <li>funfact</li>
              </ul>
            </div>

            <div className="availability_and_price_contents col-12">
              <div className="available col-md-6">$kappalemäärä</div>
              <div className="price col-md-6">$hinta</div>
            </div>
            {/* availability_and_price_contents stoppi */}
          </div>{" "}
          {/* img_and_about stoppi */}
        </div>{" "}
        {/* about_book_content stoppi */}
        <div className="booktype_and_cart_content col-12">
          <div className="kirjatyyppi_placement col-md-6"> kirjatyyppi</div>
          <div className="cart_placement col-md-6 float-right">
            <button type="button" class="btn btn-dark">
              Lisää ostoskoriin
            </button>
          </div>
        {/* booktype_and_cart_content stoppi */}
      </div>{" "}
      {/*rowi stoppi */}
      <div className="book_description">
        <p>tietoa tuotteesta</p>
      </div>
    </div> // tuotesivu_content stoppi
  );
}
export default Tuotesivu;
