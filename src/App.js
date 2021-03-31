import './App.css';
import './styles/colors.css'
import Cardit from './components/Cardit';
import Footeri from './components/Footeri';
import Navbari from './components/Navbari';
import Tuotesivu from './Tuotesivu';

const URL = "http://localhost/omadb/products/searchproducts.php";

function App() {

  return (
    <div className="bg-color">
    <div className="container">
    <div className="page-color">
      <Navbari />
        <Tuotesivu />
          <Footeri />
    </div>
    </div>
    </div>
  );
}

export default App;
