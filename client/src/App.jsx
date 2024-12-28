import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar.jsx';
import Checkout from './components/checkout.jsx';
import Footer from './components/footer.jsx';
import Products from './components/products.jsx';
import ProductPage from './components/product.jsx';
import Signup from './components/signup.jsx';
import Header from './components/homepage.jsx';
export default function App() {
  return (
    <Router>
      <NavBar/>
        <Routes>
          {/*user routes*/}
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Header />} />
        </Routes>
        <Footer/>
    </Router>
  );
}
