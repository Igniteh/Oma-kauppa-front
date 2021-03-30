import './App.css';
import Cardit from './components/Cardit';
import Footeri from './components/Footeri';
import Navbari from './components/Navbari';

const URL = "http://localhost/omadb/products/searchproducts.php";

function App() {

  return (
    <div className="container">
      <Navbari />
        <Cardit />
          <Footeri />
    </div>
  );
}

export default App;
