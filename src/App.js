import './App.css';
import './styles/colors.css'
import Cardit from './components/Cardit';
import Footeri from './components/Footeri';
import Navbari from './components/Navbari';
import Tuotesivu from './Tuotesivu';

const URL = "http://localhost/omadb/products/searchproducts.php";

function App() {

  return (
    <div className="container">
    <div className="bg-color">
      <Navbari />
        <Tuotesivu />
          <Footeri />
    </div>
    </div>
  );
}

export default App;
