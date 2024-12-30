import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar.jsx';
import Checkout from './components/checkout.jsx';
import Footer from './components/footer.jsx';
import Products from './components/products.jsx';
import Signup from './components/signup.jsx';
import Profile from './components/profile.jsx';
import Login from './components/login.jsx';
import ProductPage from './components/product.jsx';
import Header from './components/homepage.jsx';
import Cart from './components/cart.jsx';

export default function App() {

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-1">
          <Routes>
            {/*user routes*/}
            <Route path="/login" element={<Login />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Header />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
