import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar.jsx';
import Checkout from './components/checkout.jsx';
import Footer from './components/footer.jsx';
import Products from './components/products.jsx';
import Signup from './components/signup.jsx';
import Profile from './components/profile.jsx';
import Login from './components/login.jsx';




export default function App() {
  
  return (
    <Router>
      <NavBar/>
        <Routes>
          {/*user routes*/}
          <Route path="/login" element={<Login />} />
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer/>
    </Router>
  );
}
