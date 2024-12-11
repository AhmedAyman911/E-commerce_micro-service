import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import NavBar from './components/navbar.jsx';
import Checkout from './components/checkout.jsx';
import Footer from './components/footer.jsx';

export default function App() {
  return (
    <Router>
      <NavBar/>
        <Routes>
          {/*user routes*/}
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Checkout/>
        <Footer/>
    </Router>
  );
}