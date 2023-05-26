import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import Footer from './components/Footer';
import { ShopContextProvider } from './context/shop-context';
import {Toaster} from 'react-hot-toast'
function App() {
  return (
    <div className="App">
      <Toaster/>
      <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path = '/' element = {<Shop/>}/>
          <Route exact path = '/cart' element = {<Cart/>}/>
        </Routes>
        {/* <Footer/> */}
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
