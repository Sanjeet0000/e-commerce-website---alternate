import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home'
import Product from './components/HomeProducts'
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout'
import StorePage from './components/StorePage';

function App() {
  return (
    <>
        <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/products" element={<Product/>} />
                <Route exact path="/products/:id" element={<ProductDetail/>} />
                <Route exact path="/store" element={<StorePage/>}/>
                <Route exact path="/cart" element={<Cart/>} />
                <Route exact path="/checkout" element={<Checkout/>} />
            </Routes>
        <Footer/>
    </>
  );
}

export default App;
